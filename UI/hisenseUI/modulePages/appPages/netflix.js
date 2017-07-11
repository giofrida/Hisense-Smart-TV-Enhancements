/**
 * Created by BOB on 14-10-22.
 */

function getNetflixPageData(opts) {

    return appNetflix.pageData;
}

function AppNetflix() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "netflix",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;

    //var appOpened = false;
    self.onFocusNetflix = function(){
        hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_NETFLIX, VK_EXIT]);
    }
    self.onOpenNetflix = function() {
        //hiWebOsFrame.registerKeyCodesForAppExcludeKey([VK_NETFLIX, VK_EXIT]);

        if(oprtData.appStarted) return;
        oprtData.appStarted = true;

        // writeFileToNative("netflix_exit","exit",0);
        if('' == oprtData.command) oprtData.command = "netflix";
        if(oprtData.isRemoteKey) {
            // sendAM(":am,am,remote:start=netflix");
            sendAM(":am,am,remote:start=[netflix,-Q,source_type=1&additionalDataUrl=http%3A%2F%2Flocalhost%3A56789%2Fapps%2FNetflix%2Fdial_data%3F]");
        }
        else if(oprtData.commandType == CmdURLType.START_FROM_DIALSERVER) {
            setTimeout(function() {
                sendAM(readFileFromNative("dial", 0));//tmp
            }, 2000);
        }
        else if(oprtData.commandType == CmdURLType.START_FROM_STANDBY) {
            //sendAM(":am,am,hotkey:start=netflix");
            sendAM(":dtv_app_mtk,am,:hotkey=0xef007");
        }
        else {
            // sendAM(":am,am,menu:start=netflix");
            sendAM(":am,am,menu:start=[netflix,-Q,source_type=2&additionalDataUrl=http%3A%2F%2Flocalhost%3A56789%2Fapps%2FNetflix%2Fdial_data%3F]");
        }
    }

    self.onCloseNetflix = function() {
		// deleteNativeFile("netflix_exit",0);
        if(oprtData.appStarted) {
            if(oprtData.commandType == CmdURLType.STOP_FROM_DIALSERVER) {
                setTimeout(function() {
                    sendAM(readFileFromNative("dial", 0));//tmp
                }, 2000);
            }
            else {
                sendAM(":am,netflix,:backgm=netflix");
            }
        }
        else {
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

var appNetflix = new AppNetflix();

