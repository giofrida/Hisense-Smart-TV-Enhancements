/**
 * Created by BOB.J on 2014/12/23.
 */


function getDialogNetworkData(opts) {
    opts.CaE = [
        {
            id: 'dialog_np_img',
            CaEType: 'img'
        },
        {
            id: 'dialog_np_tip1',
            CaEType: 'span'
        },
        {
            id: 'dialog_np_tip2',
            CaEType: 'span'
        },
        {
            id: 'dialog_np_btn_setup',
            CaEType: 'span',
            handler: {
                befEnterHandler: dlgNetwork.setupNetwork,
                befRightHandler: dlgNetwork.rightResetMarquee
            },
            nav: {
                rightTo: 'dialog_np_btn_always'
            }
        },
        {
            id: 'dialog_np_btn_always',
            CaEType: 'span',
            handler: {
                befEnterHandler: dlgNetwork.backToOri,
                befRightHandler: dlgNetwork.rightResetMarquee,
                befLeftHandler: dlgNetwork.leftResetMarquee
            },
            nav: {
                leftTo: 'dialog_np_btn_setup',
                rightTo: 'dialog_np_btn_never'
            }
        },
        {
            id: 'dialog_np_btn_never',
            CaEType: 'span',
            handler: {
                befEnterHandler: dlgNetwork.neverAsk,
                befLeftHandler: dlgNetwork.leftResetMarquee
            },
            nav: {
                leftTo: 'dialog_np_btn_always'
            }
        }
    ];

    return dlgNetwork.pageData;
}

function dialogNetwork() {
    var self = this;
    self.id = "dialog_network";

    var oprtData = {};

    self.pageData = {
        dialog_np_img:{Data: "img/networkbroken.png"},
        dialog_np_tip1:{Data: "Network not found."},
        dialog_np_tip2:{Data: "some applications will be unavailable."},
        dialog_np_btn_setup:{Data: "Setup now"},
        dialog_np_btn_always:{Data: "I got it"},
        dialog_np_btn_never:{Data: "Never ask"},
        langData: {
            "Setup now": [],
            "I got it":[],
            "Never ask": [],
	        "Network not found.": [],
	        "some applications will be unavailable.": []

        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprtData;

    function rewritePageData(pageData) {

    }

    self.showNetworkBrokenDialog = function(crntPage){
        if(null != hisenseUIConfig && hisenseUIConfig.NeverAskNetwork){
            DBG_INFO("do not show network broken dialog.");
            return false;
        }
        else if(networkConnected()){
            DBG_INFO("network is ok.");
            return false;
        }
        var orginPage = null;

        if("launcher" == crntPage.module) {
            crntPage.hiBlur();
            orginPage = hiWebOsFrame.myLauncher;
        }
        else if("allapps" == crntPage.module) {
            crntPage.hiBlur();
            orginPage = crntPage;
        }
        else if("app" == crntPage.module){
            if("app_lau_browser" == crntPage.id
                && CmdURLType.LAU_BROWSER_HIMEDIA == appBrowser.getCurrentCommandType()){
                if ( 16 != GlobalFlagShareInBrowser) {
                model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);}
            }
            hiWebOsFrame.registerKeyCodesForSettingOnApp();
            orginPage = crntPage;
        }
        else {
            orginPage = hiWebOsFrame.blankPage;
            closePagesOrModuleByPage(crntPage);
        }
        if(hiWebOsFrame.isCurrentModule("setting")
            || hiWebOsFrame.isCurrentModule("settingfirst")
            || hiWebOsFrame.isCurrentModule("sleep")) {
            return false;
        }
        hiWebOsFrame[self.id].origin = orginPage;
        hiWebOsFrame[self.id].priority = orginPage.priority + 2;
        hiWebOsFrame[self.id].rewriteDataOnly();
        hiWebOsFrame[self.id].open();
        hiWebOsFrame[self.id].hiFocus("dialog_np_btn_setup");

        return true;
    }

    var btnIds = ["dialog_np_btn_setup", "dialog_np_btn_always", "dialog_np_btn_never"];
    self.rightResetMarquee = function(){
        var ind = btnIds.indexOf(this.id);
        resetMarquee(btnIds[ind + 1], btnIds[ind]);
    }
    self.leftResetMarquee = function(){
        var ind = btnIds.indexOf(this.id);
        resetMarquee(btnIds[ind - 1], btnIds[ind]);
    }

    function resetMarquee(startId, stopId){
        var crntSelector = null, nxtSelector = null;
        if(!!stopId){
            crntSelector = $("#"+stopId);
        }

        if(!!startId){
            nxtSelector = $("#"+startId);
        }


        //remove
        if(!!crntSelector){
            crntSelector.html(crntSelector.text());
        }

        //add
        if(!!nxtSelector){
            var txt = nxtSelector.text();
            if(14 <= txt.length) {
                nxtSelector.html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + txt + '</marquee>');
            }
        }
    }

    self.setupNetwork = function(){
        var originPage = hiWebOsFrame[self.id].origin;

        hiWebOsFrame[self.id].close();

        if("launcher" == originPage.module){
            LauncherquickopenSetting(3, 0, hiWebOsFrame.myLauncher);
        }
        else if("allapps" == originPage.module){
            LauncherquickopenSetting(3, 0, hiWebOsFrame["launcher_allapps"]);
        }
        else{
            LauncherquickopenSetting(3, 0, originPage);
        }

    }

    self.backToOri = function(){
        hiWebOsFrame[self.id].close();
        if("app" == hiWebOsFrame[self.id].origin.module){
            if("app_lau_browser" == hiWebOsFrame[self.id].origin.id
                && CmdURLType.LAU_BROWSER_HIMEDIA == appBrowser.getCurrentCommandType()){
                if ( 16 != GlobalFlagShareInBrowser) {
                model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);}
            }
            hiWebOsFrame[self.id].origin.open();
	        hiWebOsFrame[self.id].origin.hiFocus();
        }
	    else if ("allapps" == hiWebOsFrame[self.id].origin.module) {
		    hiWebOsFrame["launcher_allapps"].open();
		    launcherAApps.focusAllApp();
	    }
	    else{
            hiWebOsFrame[self.id].origin.hiFocus();
        }
    }

    self.neverAsk = function(){
        if(null == hisenseUIConfig) hisenseUIConfig = {};
        hisenseUIConfig.NeverAskNetwork = true;
        writeFileToNative("hisenseUI/config.ini", objToString(hisenseUIConfig), 1);
        self.backToOri();
    }

    self.onCloseDialogNetwork = function(){

        if("launcher" == hiWebOsFrame[self.id].origin.module){
            launcherNBar.setDoNotOnFocus(true);
        }
        else if("allapps" == hiWebOsFrame[self.id].origin.module){
            launcherAApps.setDoNotOnFocus(true);
        }
    }

    self.onFocusDialogNetwork = function(){
        resetMarquee("dialog_np_btn_setup");
    }
}

var dlgNetwork = new dialogNetwork();