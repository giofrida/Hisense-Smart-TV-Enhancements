/**
 * Created by jiangbo1 on 2015/3/17.
 */

function getOperateTipPageData(opts) {
    var caeData = {
        span: ["operate_tip_info", "operate_tip_chlist", 
        "operate_tip_pvr", "operate_tip_recent", "operate_tip_key_back"]
    }
    opts.CaE = generateCaE(caeData);
    opts.CaE[4].handler = {
        befEscHandler: opTip.backToLiveTV,
        befEnterHandler: opTip.backToLiveTV
    };
    return opTip.pageData;
}

function operateTip() {
    var self = this;
    self.id = LiveTVModule.OPERATE_TIP;

    var tipTimer = 0;
    self.pageData = {
        operate_tip_info: {Data: "View channel info"},
        operate_tip_chlist: {Data: "Show channel list"},
        operate_tip_pvr: {Data: "Show PVR/T.Shift"},
        operate_tip_recent: {Data: "View recent channel"},
        operate_tip_key_back: {Data: "I got it"},
        langData: {
            "View channel info": [],
            "Show channel list": [],
            "Show PVR/T.Shift": [],
            "View recent channel": [],
            "I got it":[]
        },
        rewrite: rewritePageData
    }

    function rewritePageData(pageData) {

    }

    self.onOpenOperateTip = function() {
//        try {
//            closeMsgPage(false);
//        }
//        catch(ex) {
//            DBG_ERROR(ex.message);
//        }
        DBG_INFO("operate tip opened.");
        tv && model.tvservice.setPlaySuccessLiveTV(1);
        var dom = $("#livetv_operate_tip > div"), idx = 0;
        dom.eq(idx).css("display", "block");
        var tipLen = livetvmain.isDisableKeyBack() ? dom.length - 1 : dom.length;
        tipTimer = setInterval(function() {
            //dom.eq(idx).css("display", "none");
            dom.eq(++idx).css("display", "block");
            if(idx >= tipLen - 1) {
                clearInterval(tipTimer);
                tipTimer = setTimeout(function() {
                    try {
                        self.backToLiveTV();
                    }
                    catch(ex) {
                        hiWebOsFrame.unLockAllKeys();
                    }
                }, 60000);
            }
        }, 3000);
    }
    self.onDestroyOperateTip = function() {
        clearInterval(tipTimer);
        hiWebOsFrame[self.id] = null;
        setOperateTipShowFlag(false);
    }
    self.onCloseOperateTip = function() {
        DBG_INFO("operate tip closed.");
        clearInterval(tipTimer);
        hiWebOsFrame[self.id] = null;
        setOperateTipShowFlag(false);
    }
    self.backToLiveTV = function() {
        hiWebOsFrame.lockAllKeys("tip");
        hiWebOsFrame[self.id].destroy();
        openLiveTVModule([Msg.OPERATETIP, 1]);
        hiWebOsFrame.unLockAllKeys();
    }
}

var opTip = new operateTip();