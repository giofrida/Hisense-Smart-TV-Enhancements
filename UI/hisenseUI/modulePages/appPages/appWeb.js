/**
 * Created by BOB on 2014/11/5.
 */

function getWebAppPageData(opts) {

    return appWeb.pageData;
}

function AppWeb() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "tv_store",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;

    //var appOpened = false;
    self.onOpenWeb = function() {
        hiWebOsFrame.registerKeyCodesForAppExcludeKey();
        if(oprtData.appStarted) return;
        oprtData.appStarted = true;

        if('' == oprtData.command) {
            DBG_INFO('tv_store url error', DebugLevel.ERROR);
            return;
        }
        // sendAM(':am,am,:start=[tv_store,-u,' + oprtData.command + "]");
        startTVStore(oprtData.command, "", "");
    }

    self.onCloseWeb = function() {
        if(oprtData.appStarted){
            sendAM(":am,am,:stop=tv_store");
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
        hiWebOsFrame.registerKeyCodesNormal();
    }
}

var appWeb = new AppWeb();
