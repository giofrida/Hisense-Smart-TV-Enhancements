/**
 * Created by BOB.J on 2015/1/14.
 */


function getNetrangePageData(opts) {

    return appNetrange.pageData;
}


function AppNetrange() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "netrange",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;
    //var appOpened = false;
    self.onOpenNetrange = function() {
        hiWebOsFrame.registerKeyCodesForAppExcludeKey();
        if(oprtData.appStarted) return;
        oprtData.appStarted = true;
        DBG_INFO("start:[" + oprtData.command + "]");
        if("netrange" == oprtData.command){
            // sendAM(":am,am,:start=netrange");
            startNetrange("");
        }
        else{
            // sendAM(':am,am,:start=[netrange,-u,' + oprtData.command + "]");
            startNetrange(oprtData.command);
        }

    }

    self.onCloseNetrange = function() {
        if(oprtData.appStarted){
            sendAM(":am,am,:stop=netrange");
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

var appNetrange = new AppNetrange();
