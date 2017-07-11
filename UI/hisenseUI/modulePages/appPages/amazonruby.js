/**
 * Created by BOB on 14-10-22.
 */

function getAmazonrubyPageData(opts) {

    return appAmazonruby.pageData;
}

function AppAmazonruby() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "amazonruby",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;

    self.onOpenAmazonruby = function() {
        hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_AMAZON, VK_EXIT]);
        if(oprtData.appStarted) return;
        oprtData.appStarted = true;
        if(oprtData.isRemoteKey) {
    	    sendAM(":am,am,remote:start=amazonruby");// dam
	}
        else{
            sendAM(":am,am,menu:start=amazonruby");// dam
        }
    }

    self.onCloseAmazonruby = function() {
        if(oprtData.appStarted){
            sendAM(":am,am,:stop=amazonruby");
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

var appAmazonruby = new AppAmazonruby();