/**
 * Created by BOB on 14-10-22.
 */

function getYoutubePageData(opts) {

    return appYoutube.pageData;
}

function AppYoutube() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "youtube",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;

    //var appOpened = false;
    self.onFocusYoutube = function(){
        hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_YOUTUBE]);
    }
    self.onOpenYoutube = function() {

        //hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_YOUTUBE]);

        if(oprtData.appStarted) return;
        oprtData.appStarted = true;
        if('' == oprtData.command) oprtData.command = "youtube";
        if(oprtData.isRemoteKey) {
            sendAM(":am,am,remote:start=youtube");
        }
        else if(oprtData.commandType == CmdURLType.START_FROM_DIALSERVER) {
            setTimeout(function() {
                sendAM(readFileFromNative("dial", 0));//tmp
            }, 2000);
        }
        else if(oprtData.command.indexOf("http") > -1) {
	        sendAM(":am,am,:start_ex=[youtube,-w,1280,-h,720,-x,youtube,-m,NO,-u," + oprtData.command + "]");
	        //[youtube,-w,1280,-h,720,-x,youtube,-m,NO,-u,https://www.youtube.com/tv?launch=menu&v=Ec9wfbh12ZY&t=0]
        }
        else {
            sendAM(":am,am,menu:start=youtube");
        }
    }

    self.onCloseYoutube = function() {
        if(oprtData.appStarted){
            sendAM(":am,am,:stop=youtube");
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

var appYoutube = new AppYoutube();
