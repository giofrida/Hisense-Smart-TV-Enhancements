/**
 * Created by BOB on 14-10-22.
 */

function getAmazonPageData(opts) {

    return appAmazon.pageData;
}

function AppAmazon() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "amazon",
        commandType: 0,
        appStarted: false
    };


    self.pageData.operateData = oprtData;

    //var appOpened = false;

    self.onFocusAmazon = function(){
        hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_AMAZON]);
    }
    self.onOpenAmazon = function() {
        //hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_AMAZON]);
        if(oprtData.appStarted) return;
        oprtData.appStarted = true;
        if(oprtData.isRemoteKey) {
            sendAM(":am,am,remote:start=amazon");
        }
        else {
            sendAM(":am,am,menu:start=amazon");// dam
        }
    }

    self.onCloseAmazon = function() {
        if(oprtData.appStarted){
            sendAM(":am,am,:stop=amazon");
        }
        else{
            DBG_INFO(oprtData.amName + " has been stopped", DebugLevel.WARNING);
        }
        releaseVar();
    }

    function releaseVar(){
        oprtData.command = '';
        oprtData.isRemoteKey = false;
        oprtData.commandType = CmdURLType.NONE;
        //oprtData.appStarted = false;
        hiWebOsFrame.registerKeyCodesNormal();
    }
}

var appAmazon = new AppAmazon();