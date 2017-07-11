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
        amName: "tv_store",
        commandType: 0,
        appStarted: false,
	    storeType: 0
    };

	var storeTypeMap = {
		95:"tv_store",
		81:"[tv_store,-s,foxxum]",
		93:"[tv_store,-s,netrange]",
		94:"tv_store",
		10000:"tv_store"
	}

	var urlLauncherMap = {
		95:"",
		81:",-s,foxxum",
		93:",-s,netrange",
		94:"",
		96:",-s,accedo",
		0:",-s,other",
		10000:",-s,emptyID"
	}

    self.pageData.operateData = oprtData;
    //var appOpened = false;
    self.onFocusTVStore = function(){
        hiWebOsFrame.registerKeyCodesForAppExcludeKey();
    }
    self.onOpenTVStore = function() {
        //hiWebOsFrame.registerKeyCodesForAppExcludeKey();
        if(oprtData.appStarted) return;
        oprtData.appStarted = true;

	    if("APP_5890_SA" == currentPlatform_config) {

		    if(!oprtData.storeType) {
			    oprtData.storeType = 93;
		    }

		    while(oprtData.command.indexOf('&amp;') > -1) {
			    oprtData.command = oprtData.command.replace('&amp;','&');
		    }

		    DBG_INFO("start:[" + oprtData.command + "][" + oprtData.storeType + "]");

		    switch (parseInt(oprtData.storeType)) {
			    case 95:
			    {
				    if("tv_store" == oprtData.command) {    //Opera Store
					    sendAM(':am,opera4x,store:resume=[-s,opera]');
				    }
				    else if(oprtData.command.indexOf("https://hisense.tvstore.opera.com:84/api/tvapps/runapp/") > -1 ||
					    oprtData.command.indexOf("https://demo.tvstore.opera.com:84/api/tvapps/runapp/") > -1){
					    sendAM(':am,opera4x,store:resume=[-u,' + oprtData.command + ',-s,opera]');
				    }
				    else {
					    sendAM(':am,opera4x,store:resume=[-u,' + oprtData.command + ',-s,netrange]');
				    }
				    break;
			    }
			    case 81:
			    {
				    if("tv_store" == oprtData.command) {    //foxxum Store
					    sendAM(':am,opera4x,store:resume=[-s,foxxum]');
				    }
				    else {
					    sendAM(':am,opera4x,store:resume=[-u,' + oprtData.command + ',-s,foxxum]');
				    }
				    break;
			    }
			    case 96:
				    sendAM(':am,opera4x,store:resume=[-u,' + oprtData.command + ',-s,accedo]');
				    break;
			    default :
			    {
				    if("tv_store" == oprtData.command) {    //netrange Store
					    sendAM(':am,opera4x,store:resume=[-s,netrange]');
				    }
				    else {
					    sendAM(':am,opera4x,store:resume=[-u,' + oprtData.command + ',-s,netrange]');
				    }
				    break;
			    }
		    }
		    return;
	    }

	    if(!oprtData.storeType) {
		    oprtData.storeType = 95;
	    }

	    DBG_INFO("start:[" + oprtData.command + "][" + oprtData.storeType + "]");
	    var cmd1 = storeTypeMap[oprtData.storeType];
	    var cmd2 = urlLauncherMap[oprtData.storeType];

	    if("tv_store" == oprtData.command) {    //Opera Store
			writeFileToNative("startfromappstore"," ",0);
		    // sendAM(":am,am,:start=" + cmd1);
            startTVStore("", "", cmd1);
	    }
	    else if("wuaki" == oprtData.command){
		    sendAM(':am,am,:start=[tv_store,-u,' + HSAPPURL.WUAKI + "]");
	    }
	    else if(HSAPPURL.CATAL == oprtData.command || HSAPPURL.IPLAYER == oprtData.command ||
		    HSAPPURL.NEWS == oprtData.command || HSAPPURL.SPORT == oprtData.command ||
		    HSAPPURL.HDPLUS == oprtData.command ||  oprtData.command.indexOf("bbc.co.uk") > -1
			||  oprtData.command.indexOf("bbctvapps.co.uk") > -1) {
		    resumeHBBTV();
		    setTimeout(function() {
			    sendAM(":am,hbbtv,:open=" + oprtData.command);
		    },1000);
	    }
	    else {
			writeFileToNative("startfromappstore"," ",0);
			// sendAM(':am,am,:start=[tv_store,-u,' + oprtData.command + cmd2);
            startTVStore(oprtData.command + cmd2, "", "");
	    }

//        if("tv_store" == oprtData.command){
//            sendAM(":am,am,:start=tv_store");
//        }
//        else{
//            sendAM(':am,am,:start=[tv_store,-u,' + oprtData.command + "]");
//        }
    }

    self.onCloseTVStore = function() {
        if(oprtData.appStarted){
	        if("APP_5890_SA" == currentPlatform_config) {
		        sendAM(":am,opera4x,:pause=");
	        }
	        else {
                sendAM(":am,am,:stop=tv_store");
				deleteNativeFile("startfromappstore",0);
	        }
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
	    oprtData.storeType = 0;
        //oprtData.appStarted = false;
        hiWebOsFrame.registerKeyCodesNormal();
    }

}

var appTVStore = new AppTVStore();
