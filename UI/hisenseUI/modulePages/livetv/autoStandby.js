/**
 * Created by BOB.J on 2014/12/16.
 */


function getAutoStandyPageData(opts) {
    opts.CaE = [
        {
            id: "livetv_sp_img",
            CaEType: 'img'
        },
        {
            id: "livetv_sp_text",
            CaEType: 'span'
        },
        {
            id: "livetv_sp_btn",
            CaEType: 'span',
            handler: {
                keyAnyHandler: autostandby.backToLiveTV
            }
        }
    ];

    return autostandby.pageData;
}

function liveTVAutoStandby() {
    var self = this;
    self.id = "livetv_auto_standby";
    self.pageData = {

        livetv_sp_img: {Data: "img/common/alert.png"},
        livetv_sp_text: {Data: ""},
        livetv_sp_btn: {Data: "Cancel"},

        rewrite: rewritePageData
    }
    var powerTimer = 0;
    var oprtData = {}

    self.pageData.operateData = oprtData;

    self.onOpenStandby = function() {

        oprtData.RemainTime = 60;
        oprtData.RemainText = getCurrentContentLanguage("Turn off in X seconds");

        $("#livetv_sp_text").html(getRemainTip(oprtData.RemainText, oprtData.RemainTime));
        $("#livetv_sp_btn").html(getCurrentContentLanguage("Cancel"));
        startPowerOffInterval();
    }

    self.onCloseStandby = function(){
        if (isCurrentAppHimedia()) {
            if (16 != GlobalFlagShareInBrowser) {
                model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
            }
        }
    }
    self.backToLiveTV = function() {
        try {
            clearInterval(powerTimer);
            hiWebOsFrame[self.id].close();

            try {
                if(oprtData.powerOffReason != 1) {
                    if(oprtData.originPage.module == "app") {
                        oprtData.originPage.open();
                    }
                    oprtData.originPage.hiFocus();
                }
                else {
                    if(hiWebOsFrame[self.id].origin.module == "app") {
                        hiWebOsFrame[self.id].origin.open();
                    }
                    hiWebOsFrame[self.id].origin.hiFocus();
                }
            }
            catch(ex) {
                DBG_ERROR(ex.message);
            }

            DBG_INFO("back to origin." + oprtData.powerOffReason);
            if(oprtData.powerOffReason == -1) {
                model.timerfunc.setHotelmodeSleepTimer(0);
            }
            else if(oprtData.powerOffReason == -2) {
                model.timerfunc.setStandbyTime(-1);
                    try{
                        if(!!hiWebOsFrame.settingssystimepoweroff){
                            PageDataSettingtimePoweroff.operateData.curpowerofffre=model.timerfunc.getStandbyMode();
                            hiWebOsFrame.settingssystimepoweroff.rewriteDataOnly();
                            if(hiWebOsFrame.getCurrentPage()==hiWebOsFrame.settingssystimepoweroff)
                            {
                                hiWebOsFrame.settingssystimepoweroff.open();
                                hiWebOsFrame.settingssystimepoweroff.hiFocus("setting_sys_time_ul3");

                            }
                        }
                        if(!!hiWebOsFrame.settingssystime){
                            PageDataSettingSysTime.operateData.curpowerofffre=model.timerfunc.getStandbyMode();
                        }
                    }catch (e){
                        debugE(e.message);
                    }
            }
        }
        catch(e) {
            debugPrint(e.message);
        }
    }

    function startPowerOffInterval() {

        powerTimer = setInterval(function() {
            $("#livetv_sp_text").html(getRemainTip(oprtData.RemainText, oprtData.RemainTime));
            if(0 == oprtData.RemainTime) {
                clearInterval(powerTimer);
                DBG_INFO("time is over, power off. from[" + oprtData.powerOffReason + "]");
                hiWebOsFrame.lockAllKeys("standby");
                try {
                    hiWebOsFrame[self.id].close();
                    openLiveTVModule();
                    onEnterSuspendChanged(model.system.getFastBoot());
                    if(oprtData.powerOffReason == 1 || oprtData.powerOffReason == -3) {
                        clearInterval(powerTimer);
                        model.system.SwitchOffTv();
                    }
                }
                catch(ex) {
                    DBG_ERROR(ex.message);
                    clearInterval(powerTimer);
                    onEnterSuspendChanged(model.system.getFastBoot());
                    model.system.SwitchOffTv();
                }
                hiWebOsFrame.unLockAllKeys("standby");
            }
            else {
                oprtData.RemainTime--;
                if(hiWebOsFrame.getCurrentPageId() != "livetv_auto_standby") {
                    hiWebOsFrame[self.id].close();
                    clearInterval(powerTimer);
                    if(oprtData.powerOffReason == -1) {
                        model.timerfunc.setHotelmodeSleepTimer(0);
                    }
                    else if(oprtData.powerOffReason == -2) {
                        model.timerfunc.setStandbyTime(-1);
                    }
                    debugPrint(" the key is error to destroy it")

                }
            }
        }, 950);
    }

    function getRemainTip(txt, cnt) {
        return txt.replace("X", cnt);
    }

    function rewritePageData() {
    }
}

var autostandby = new liveTVAutoStandby();
