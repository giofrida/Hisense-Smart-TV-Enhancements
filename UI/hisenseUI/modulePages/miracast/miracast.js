var miracastData = {
    setting_pic_Mira_Mode: {Data: "Anyview Cast"},
    setting_pic_Mira_state: {Data: "Wait for the external device to connect."},
    setting_pic_Mira_tv_name_1: {Data: "Device name:"},
    setting_pic_Mira_tv_name_2: {Data: "Smart TV"},
    "langData": {
        "Wait for the external device to connect.":["Wait for the external device to connect."],
        "Creating connection":["Creating connection"],
        "Connected successfully":["Connected successfully"],
        "Device name:":["Device name:"]
	    //"Smart TV":["Smart TV"]
    },
    "operateData": {
        "mirastate": 0,
        "mireCurrentPage": 0,
        "mirastateInfo":[
            "Wait for the external device to connect.",
            "Creating connection",
            "Connected successfully",
            "Wait for the external device to connect.",
            "Wait for the external device to connect."
        ],
        "mirasTVName":"Smart TV"
    },
    "rewrite": Miracastrewrite
}
function getmiracastPageData(page) {

    page.CaE = [
        {
            "id": "setting_pic_Mira_Mode",
            "description": "Brightnessspan",
            "CaEType": "span",
            "strFilter":true,
            "classes": {"normal": "picMiraMode", "focus": "picMiraMode", "selected": "picMiraMode"}
        },
        {
            "id": "setting_pic_Mira_state",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "miraSpan1", "focus": "miraSpan1", "selected": "miraSpan1"}
        },
        {
            "id": "setting_pic_Mira_tv_name_1",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "setting_pic_Mira_tv_name", "focus": "setting_pic_Mira_tv_name", "selected": "setting_pic_Mira_tv_name"}
        },
        {
            "id": "setting_pic_Mira_tv_name_2",
            "description": "Brightnessspan",
            "CaEType": "span",
            "strFilter":true,
            "classes": {"normal": "setting_pic_Mira_tv_name", "focus": "setting_pic_Mira_tv_name", "selected": "setting_pic_Mira_tv_name"}
        }
    ];

    miracastData.operateData.mirasTVName = tv?model.system.getMachinename():"TV";

    return miracastData;
}
function gettvname() {
    miracastData.operateData.mirasTVName = tv?model.system.getMachinename():"TV";
    hiWebOsFrame.miracast.rewriteDataOnly();
    try{
       model.cec.setIsMiracastExist(1);
    }
    catch(ex){
        debugE(ex);
    }


}
function Miracastrewrite(data) {
    data.setting_pic_Mira_state.Data = '';
    debugPrint("Miracastrewrite:" + data.operateData.mirastate, DebugLevel.ALWAYS);
    if (data.operateData.mirastate > 0 && data.operateData.mirastate < 5) {
        data.setting_pic_Mira_state.Data = data.operateData.mirastateInfo[data.operateData.mirastate];
    }
    else {
        data.setting_pic_Mira_state.Data = data.operateData.mirastateInfo[0];
    }
    data.setting_pic_Mira_tv_name_2.Data = data.operateData.mirasTVName;


}

function onMiracastChanged(str) {


    DBG_INFO("3.onchange....:" + str);
    if (str == "waiting") {
        miracastData.operateData.mirastate = 0;
    }
    else if (str == "connecting") {
        miracastData.operateData.mirastate = 1;
    }
    else if (str == "connected") {
        miracastData.operateData.mirastate = 2;
    }
    else if (str == "disconnected") {
        miracastData.operateData.mirastate = 3; //打开launcher
    }
    else if(str == "connectFailed"){
        miracastData.operateData.mirastate = 4;
    }
    else if(str == "wirelessOFF"){
        miracastData.operateData.mirastate = 5;
        DBG_INFO("---->wirelessOFF");
    }
     else{
        miracastData.operateData.mirastate = -1;
    }
    switch (miracastData.operateData.mirastate) {
        case 0:
            DBG_INFO("start linking....");
           // miracastData.setting_pic_Mira_state.Data = "Wait for the external device to connect.";
            $("#setting_pic_Mira_line_1").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_2").removeAttr('class').addClass('setting_pic_Mira_line2');
            $("#setting_pic_Mira_line_3").removeAttr('class').addClass('setting_pic_Mira_line2');
            miracastData.operateData.mireCurrentPage = 0;

            break;
        case 1:
            $("#setting_pic_Mira_page").css("display", "block");
            DBG_INFO("linking....");
           // miracastData.setting_pic_Mira_state.Data = "Creating connection";
            $("#setting_pic_Mira_line_1").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_2").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_3").removeAttr('class').addClass('setting_pic_Mira_line2');
            miracastData.operateData.mireCurrentPage = 1;

            break;
        case 2:
            DBG_INFO("linked");
            $("#setting_pic_Mira_page").css("display", "block");
           // miracastData.setting_pic_Mira_state.Data = "Connected successfully";
            $("#setting_pic_Mira_line_1").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_2").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_3").removeAttr('class').addClass('setting_pic_Mira_line1');
            miracastData.operateData.mireCurrentPage = 2;

            hiWebOsFrame.displayTimer = setTimeout(display_Mira_page, 5000);

            break;
        case 3:
            DBG_INFO("1111EEEEEEnd");
            $("#setting_pic_Mira_page").css("display", "block");
           // miracastData.setting_pic_Mira_state.Data = "Wait for the external device to connect.";
            $("#setting_pic_Mira_line_1").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_2").removeAttr('class').addClass('setting_pic_Mira_line2');
            $("#setting_pic_Mira_line_3").removeAttr('class').addClass('setting_pic_Mira_line2');

            miracastData.operateData.mireCurrentPage = 0;
            hiWebOsFrame.startMiraTimer = setTimeout(startmira, 2000);

            DBG_INFO("22222EEEEEEnd");
            break;
        case 4:
            DBG_INFO("------>device lost");

            $("#setting_pic_Mira_page").css("display", "block");
           // miracastData.setting_pic_Mira_state.Data = "Wait for the external device to connect.";
            $("#setting_pic_Mira_line_1").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_2").removeAttr('class').addClass('setting_pic_Mira_line2');
            $("#setting_pic_Mira_line_3").removeAttr('class').addClass('setting_pic_Mira_line2');
            miracastData.operateData.mireCurrentPage = 0;

            hiWebOsFrame.startMiraTimer = setTimeout(startmira, 2000);
            break;
        case 5:
            DBG_INFO("----->case 5");
            creatwifiMira();
         break;
        default:
            break;

    }
    hiWebOsFrame.miracast.rewriteDataOnly();


}
function display_Mira_page() {
 if ( miracastData.operateData.mirastate == 2) {
    DBG_INFO("display_Mira_page");
    $("#setting_pic_Mira_page").css("display", "none");
   // miracastData.setting_pic_Mira_state.Data = "Wait for the external device to connect.";
    hiWebOsFrame.miracast.rewriteDataOnly();
    $("#setting_pic_Mira_line_1").removeAttr('class').addClass('setting_pic_Mira_line1');
    $("#setting_pic_Mira_line_2").removeAttr('class').addClass('setting_pic_Mira_line2');
    $("#setting_pic_Mira_line_3").removeAttr('class').addClass('setting_pic_Mira_line2');
}
}
function exitMira() {
    hiWebOsFrame.createPage('setting_Mira_exit_page', null, null, null, function (a) {
        hiWebOsFrame.exitmira=a;
        a.open();
        a.hiFocus("setting_Mira_exit_btn_1");
        DBG_INFO("setting_Mira_exit_page open...");
        if(!!hiWebOsFrame.displayTimer){
            clearTimeout(hiWebOsFrame.displayTimer);
        }
        DBG_INFO("----->clearTimeout");
    });

}

function mirabackhome() {
    DBG_INFO("!!!Home:ActionStopApp_____");
    miracastData.operateData.mirastate = 0;
	try {
		debugPrint("logReport__________begin",DebugLevel.WARNING);
		logReport("GTAPPRun", "Anyview Cast", 0);
		debugPrint("logReport__________end",DebugLevel.WARNING);
	}
	catch (ex) {
		debugE(ex.message);
	}

    model.miracast.ActionStopApp();
	 model.miracast.onStatusChaged=null;
    var currentArea = hiWebOsFrame.getCurrentArea();
    if (currentArea == "SA") {
        resumeDTV();
    }
    else {
        sendAM(":am,dtv_app_mtk,:resume=dtv");
    }
    if(!!hiWebOsFrame.startMiraTimer){
	    clearTimeout(hiWebOsFrame.startMiraTimer);
    }
    if(!!hiWebOsFrame.displayTimer){
	    clearTimeout(hiWebOsFrame.displayTimer);
    }
    try{
        model.cec.setIsMiracastExist(0);
    }
    catch(ex){
        debugE(ex);
    }
}
function closemira(){
    miracastData.operateData.mirastate = 0;
    DBG_INFO("!!!close mira Home:ActionStopApp_____");
    model.miracast.ActionStopApp();
	model.miracast.onStatusChaged=null;
    resumeDTV();
}
function startmira(){
    DBG_INFO("!!!!ActionStartApp");
    model.miracast.ActionStartApp();
}

function creatwifiMira(){
    hiWebOsFrame.createPage('setting_Mira_wifi_page', null, null, null, function (a) {
        hiWebOsFrame.mirawifi=a;
        a.open();
        a.hiFocus("setting_Mira_wifi_btn_1");
        DBG_INFO("setting_Mira_wifi_page open...");

    });
}