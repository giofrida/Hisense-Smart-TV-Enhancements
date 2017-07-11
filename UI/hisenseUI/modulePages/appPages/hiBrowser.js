/**
 * Created by BOB on 2014/11/3.
 */
function getHiBrowserPageData(opts) {

    return appHiBrowser.pageData;
}

function AppHiBrowser() {
    var self = this;

    self.pageData = {};

    var oprtData = {

        command: '',
        isRemoteKey: false,
        amName: "hi_browser",
        commandType: 0,
	    storeType: '',
        appStarted: false
    };


    self.pageData.operateData = oprtData;

    //var appOpened = false;

    self.onFocusHiBrowser = function(){
        hiWebOsFrame.registerKeyCodesForAppExcludeKey();
    }
    self.onOpenHiBrowser = function() {
        //hiWebOsFrame.registerKeyCodesForAppExcludeKey();
        if(oprtData.appStarted) return;
        oprtData.appStarted = true;

	 //   debugE("storeType->" + oprtData.storeType);
	    if(!!oprtData.storeType && oprtData.storeType.indexOf(':am,am,:start') > -1) {
		    sendAM(oprtData.storeType);
		    return;
	    }

	    if(oprtData.command.indexOf('||3') > -1) {
		    var command = oprtData.command.substring(0, oprtData.command.indexOf('||3'));
		    // sendAM(':am,am,:start=[hi_browser,-u,' + command + ']');
            startHiBrowser(command);
		    return;
	    }

//	    if("APP_5890_SA" == currentPlatform_config) {
//			sendAM(':am,opera4x,browser:resume=');
//		    return;
//	    }

        // sendAM(":am,am,:start=hi_browser");
        startHiBrowser("");
    }

    self.onCloseHiBrowser = function() {

        if(oprtData.appStarted){
//	        if("APP_5890_SA" == currentPlatform_config) {
//		        sendAM(":am,opera4x,:pause=");
//	        }
//	        else {
		        sendAM(":am,am,:stop=hi_browser");
//	        }
        }
        else{
            DBG_INFO(oprtData.amName + " has been stopped", DebugLevel.WARNING);
        }
        releaseVar();
    }

    function releaseVar() {
        oprtData.command = '';
        oprtData.isRemoteKey = false;
        oprtData.commandType = CmdURLType.NONE;
        //oprtData.appStarted = false;
	    oprtData.storeType = '',
        hiWebOsFrame.registerKeyCodesNormal();
    }
}

var appHiBrowser = new AppHiBrowser();
