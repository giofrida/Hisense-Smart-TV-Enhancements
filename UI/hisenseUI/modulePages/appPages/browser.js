/**
 * Created by BOB on 2014/10/31.
 */

function getBrowserPageData(opts) {

    return appBrowser.pageData;
}

function AppBrowser() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "lau_browser",
        commandType: 0,
        appStarted: false,
        appReStartData:"normal"  // normal/token/return for picasa
    };

    var receiveback = false;
    self.pageData.operateData = oprtData;

    //var appOpened = false;
    self.onFocusBrowser = function(){
        registerKeyCodes();
    }
    self.onOpenBrowser = function() {
        //registerKeyCodes();

        if(oprtData.appStarted) return;
        oprtData.appStarted = true;
        if('' == oprtData.command) {
            DBG_INFO('lau_browser command error', DebugLevel.ERROR);
            return;
        }
        // sendAM(':am,am,:start=[lau_browser,-u,' + oprtData.command + ']');
        startLauBrowser(oprtData.command);
    }

    function registerKeyCodes() {
        if(oprtData.command.indexOf("mediaIndex.html") > -1) {
            !oprtData.appStarted && pauseDTV();
            oprtData.commandType = CmdURLType.LAU_BROWSER_HIMEDIA;
            hiWebOsFrame.registerKeyCodesForAppWithKey([VK_BACK]);
        }
        else if(oprtData.command.indexOf("fte_ex.html") > -1) {
            oprtData.commandType = CmdURLType.LAU_BROWSER_WIZARD;
            keyboard.registerKeyCodes([VK_EXIT]);
        }
        else if(oprtData.command.indexOf("epos_xt910.html") > -1) {
            oprtData.commandType = CmdURLType.LAU_BROWSER_EPOS;
            hiWebOsFrame.registerKeyCodesNormal();
        }
        else if(oprtData.command.indexOf("picasaIndex.html") > -1) {
            !oprtData.appStarted && pauseDTV();
            oprtData.commandType = CmdURLType.LAU_BROWSER_PICASA;
            hiWebOsFrame.registerKeyCodesForAppWithKey([VK_BACK]);
        }
        else if(oprtData.command.indexOf("terratv.html") > -1) {
            !oprtData.appStarted && pauseDTV();
            oprtData.commandType = CmdURLType.LAU_BROWSER_TERRATV;
            hiWebOsFrame.registerKeyCodesForAppWithKey();
        }
	    else {
            debugG('hiWebOsFrame.registerKeyCodesForAppWithKey()');
	        hiWebOsFrame.registerKeyCodesForAppWithKey();
        }
    }

    self.onCloseBrowser = function () {
        //��AMstop����ʹ��֮ǰ�������ﴦ��HiMedia����Դ��������
        if (oprtData.commandType == CmdURLType.LAU_BROWSER_HIMEDIA) {
            debugPrint("close himedia by sysKey! now flag is : " + model.system.getReturnlocalappFlag());
            if (!!GlobalFlagShareInBrowser && 16 == GlobalFlagShareInBrowser) {
                //   sendAM(":am,am,:stop=" + "lau_browser");
                receiveback = false;
                try {
                    if (!!timerToReadDropboxUserIni) {
                        clearTimeout(timerToReadDropboxUserIni);
                    }
                }
                catch
                    (e) {
                    debugE("clear timeout failed!!" + e.message);
                }

                sendAM(":am,am,:stop=lau_browser");
            }
            else {
                try {
                    model.system.setReturnlocalappFlag(11);
                    sendAM(":am,am,:stop=lau_browser");
                }
                catch (ex) {
                    debugE(ex.message);
                }
            }
            //himediaOnCloseHandler();


        }
        else if (oprtData.commandType == CmdURLType.LAU_BROWSER_PICASA) {
            model.system.setReturnlocalappFlag(0);
            if (oprtData.appStarted) {
                sendAM(":am,am,:stop=lau_browser");
            }
            else {
                DBG_INFO(oprtData.amName + " has been stopped", DebugLevel.WARNING);
            }
        }
        else{
            if (oprtData.appStarted) {
                sendAM(":am,am,:stop=lau_browser");
            }
            else {
                DBG_INFO(oprtData.amName + " has been stopped", DebugLevel.WARNING);
            }
        }
        releaseVar();
    }

    self.appBrowserEscHandler = function () {
        debugPrint("appBrowserEscHandler" + oprtData.commandType);
        if (!receiveback) {
            //keyboard.SendKeyResult(false);
            return;
        }

        if (CmdURLType.LAU_BROWSER_PICASA == oprtData.commandType) {
            picasaKeyBackHandler();
        }
        if (CmdURLType.LAU_BROWSER_HIMEDIA == oprtData.commandType) {
            dropboxKeyBackHandler();
        }
        else {
            //TODO other operation
        }
    }

    self.setReceiveKeyBack = function (val) {
        receiveback = val;
    }

    self.getCurrentCommandType = function () {
        return oprtData.commandType;
    }

    function himediaOnCloseHandler() {
        debugPrint("HiMedia Stoped by GUI!!!!!");
        try {
            model.mpctrl.StopMpctrl(null);
            model.picture.stopPic();
        }
        catch(e) {
            debugPrint(e.message);
        }
    }

    function picasaKeyBackHandler() {
        debugG("picasaKeyBackHandler()");
        if(!!GlobalFlagShareInBrowser && 1 == GlobalFlagShareInBrowser) {
//            sendAM(":am,am,:stop=" + "lau_browser");
            receiveback = false;
            asyncReStartApp('app_lau_browser', 'return');
//            setTimeout(function() {
//                sendAM(':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/picasa/picasaIndex.html?return" + ']');
//            }, 500);
        }
    }

    function dropboxKeyBackHandler() {
        debugE("dropboxKeyBackHandler");
        if (!!GlobalFlagShareInBrowser && 16 == GlobalFlagShareInBrowser) {
         //   sendAM(":am,am,:stop=" + "lau_browser");
            receiveback = false;
            try {
                if (!!timerToReadDropboxUserIni) {
                    clearTimeout(timerToReadDropboxUserIni);
                }
            }
            catch
                (e) {
                debugE("clear timeout failed!!" + e.message);
            }
            asyncReStartApp('app_lau_browser', 'dropbox_return');

        }
//            setTimeout(function() {
//                sendAM(':am,am,:start=[lau_browser,-u,' + getMediaURL(0) + ']');
//                //sendAM(':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/picasa/picasaIndex.html?return" + ']');
//            }, 500);
    }


    function releaseVar() {
        oprtData.command = '';
        oprtData.isRemoteKey = false;
        oprtData.commandType = CmdURLType.NONE;
        //oprtData.appStarted = false;
        hiWebOsFrame.registerKeyCodesNormal();
    }

}


var appBrowser = new AppBrowser();
