/**
 * Created by BOB on 2014/11/3.
 */

function getTVStorePageData(opts) {

    return appTVStore.pageData;
}


function AppTVStore() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "foxxum",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;
    //var appOpened = false;
    self.onFocusTVStore = function(){
        hiWebOsFrame.registerKeyCodesForAppExcludeKey();
    }
    self.onOpenTVStore = function() {
        //hiWebOsFrame.registerKeyCodesForAppExcludeKey();
        if(oprtData.appStarted) return;
        oprtData.appStarted = true;
        DBG_INFO("start:[" + oprtData.command + "]");
        if("tv_store" == oprtData.command){
            // sendAM(":am,am,:start=[tv_store,-s,foxxum]");
            startTVStore("", "foxxum", "");
        }
        else if(HSAPPURL.CATAL == oprtData.command || HSAPPURL.IPLAYER == oprtData.command ||
            HSAPPURL.NEWS == oprtData.command || HSAPPURL.SPORT == oprtData.command ||
            HSAPPURL.HDPLUS == oprtData.command){
            sendAM(":am,hbbtv,:open=" + oprtData.command);
        }
        else{
            // sendAM(':am,am,:start=[tv_store,-u,' + oprtData.command + ",-s,foxxum]");
            startTVStore(oprtData.command, "foxxum", "");
        }

    }

    self.onCloseTVStore = function() {
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

var appTVStore = new AppTVStore();
