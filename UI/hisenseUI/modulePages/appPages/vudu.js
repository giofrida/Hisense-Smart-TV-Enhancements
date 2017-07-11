/**
 * Created by BOB on 14-10-22.
 */

function getVuduPageData(opts) {

    return appVudu.pageData;
}


function AppVudu() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        isVuduApp: false,
        amName: "vudu",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;

    //var appOpened = false;
    self.onFocusVudu = function(){
        hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_VUDU]);
    }
    self.onOpenVudu = function() {

        //hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_VUDU]);

        if(oprtData.appStarted) return;
        oprtData.appStarted = true;

        if('' == oprtData.command) oprtData.command = "vudu";
        if(oprtData.isRemoteKey) {
            sendAM(":am,am,remote:start=vudu");
        }
        else {
            if(oprtData.command.indexOf("http") > -1){
                var movieId = oprtData.command.split("/").reverse()[0];
                sendAM(":am,am,menu:start=[vudu,-l," + movieId + "]");
            }
            else{
                sendAM(":am,am,menu:start=" + oprtData.command);
            }
        }
    }

    self.onCloseVudu = function() {
        if(oprtData.appStarted){
            sendAM(":am,am,:stop=vudu");
            //if(oprtData.command.indexOf("http") > -1){
            //    sendAM(":am,am,:stop=vudu");
            //}
            //else{
            //    sendAM(":am,am,:stop=" + oprtData.command);
            //}
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

var appVudu = new AppVudu();


