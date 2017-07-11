var miracastExitData = {
    setting_Mira_exit_span_1: {Data: "Anyview Cast"},
    setting_Mira_exit_text_1: {Data: "Are you sure you want to disconnect?"},
    setting_Mira_exit_btn_0: {Data: "OK"},
    setting_Mira_exit_btn_1: {Data: "Cancel"},
    "langData": {
        "Are you sure you want to disconnect?":["Are you sure you want to disconnect?"],
        "OK":["OK"],
        "Cancel":["Cancel"]

    },
    "operateData": {

    },
    "rewrite": MiraExitrewrite
}
function MiraExitrewrite(){

}
function getmiraExitPageData(page){
    page.CaE = [
        {
            "id": "setting_Mira_exit_span_1",
            "description": "Brightnessspan",
            "CaEType": "span",
            "strFilter":true,
            "classes": {"normal": "setting_Mira_exit_span", "focus": "setting_Mira_exit_span", "selected": "setting_Mira_exit_span"}
        },
        {
            "id": "setting_Mira_exit_text_1",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "setting_Mira_exit_text", "focus": "setting_Mira_exit_text", "selected": "setting_Mira_exit_text"}
        },
        {
            "id": "setting_Mira_exit_btn_0",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "setting_Mira_btn_class_normal", "focus": "setting_Mira_btn_class_focus"
                , "selected": "setting_Mira_btn_class_focus"},
            "handler": {
                "aftEnterHandler": "miraExitHandler"
            },
            "nav": {
                "leftTo": "setting_Mira_exit_btn_1",
                "rightTo": "setting_Mira_exit_btn_1"
            }
        },
        {
            "id": "setting_Mira_exit_btn_1",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "setting_Mira_btn_class_normal",
                "focus": "setting_Mira_btn_class_focus", "selected": "setting_Mira_btn_class_focus"},
            "handler": {
                "aftEnterHandler": "miraNoExitHandler"
            },
            "nav": {
                "leftTo": "setting_Mira_exit_btn_0",
                "rightTo": "setting_Mira_exit_btn_0"
            }
        }
    ];
    return miracastExitData;
}
//hiWebOsFrame.startMiraTimer;
function miraExitHandler(){
    if(!!hiWebOsFrame.displayTimer){
	    clearTimeout(hiWebOsFrame.displayTimer);
    }
    debugPrint("miracastData.operateData.mireCurrentPage:"+miracastData.operateData.mireCurrentPage);
     switch (miracastData.operateData.mireCurrentPage) {
        case 0:
           if(g_launcherBrand=="VIDAALite") {
               model.miracast.ActionStopApp();
               hiWebOsFrame.exitmira.close();
               hiWebOsFrame.exitmira.destroy();

               hiWebOsFrame.miracast.destroy();
               hiWebOsFrame.blankPage.open();
               hiWebOsFrame.blankPage.hiFocus();
               return;

           }
            debugPrint("00000launcher");
            hiWebOsFrame.startLoading(5, "miracast");
            model.miracast.ActionStopApp();

            setTimeout(function () {
                var network = getNetworkSatus();
                debugE("--------network:"+network);
                hiWebOsFrame.endLoading("miracast");

                hiWebOsFrame.exitmira.close();
                hiWebOsFrame.exitmira.destroy();

                hiWebOsFrame.miracast.destroy();
                if (!!hiWebOsFrame.myLauncher) {
                    hiWebOsFrame.myLauncher.open();
                    hiWebOsFrame.myLauncher.hiFocus();
                }
                else{
                    hiWebOsFrame.blankPage.open();
                    hiWebOsFrame.blankPage.hiFocus();
                }
            },5000);


         break;
        case 1:
        case 2:
            debugPrint("#####2..3..exit.");
            model.miracast.ActionStopApp();
	   
          
       
          //  miracastData.setting_pic_Mira_state.Data = "Wait for connecting to external devices";
	   miracastData.operateData.mirastate = 0;
            debugPrint("miracastData.operateData.mirastate:"+miracastData.operateData.mirastate,DebugLevel.ALWAYS);
            $("#setting_pic_Mira_line_1").removeAttr('class').addClass('setting_pic_Mira_line1');
            $("#setting_pic_Mira_line_2").removeAttr('class').addClass('setting_pic_Mira_line2');
            $("#setting_pic_Mira_line_3").removeAttr('class').addClass('setting_pic_Mira_line2');
	    hiWebOsFrame.miracast.rewriteDataOnly();
  	    hiWebOsFrame.exitmira.destroy();
            hiWebOsFrame.miracast.hiFocus();
            hiWebOsFrame.startMiraTimer = setTimeout(startmira, 2000);
             model.miracast.onStatusChaged = onMiracastChanged;
             miracastData.operateData.mireCurrentPage=0;
	     
	          $("#setting_pic_Mira_page").css("display", "block");
       
            break;
        default :
            break;
    }
}
function miraNoExitHandler(){
    DBG_INFO("1111#################");
    hiWebOsFrame.exitmira.destroy();
    switch (miracastData.operateData.mireCurrentPage){
        case 0:
        case 1:
            hiWebOsFrame.miracast.open();
            hiWebOsFrame.miracast.hiFocus();
//            $("#setting_pic_Mira_page").css("display", "none");
            break;
        case 2:
            DBG_INFO("2222&&&&&&&&&&&&&&&&&&&&&&");
            hiWebOsFrame.miracast.open();
            hiWebOsFrame.miracast.hiFocus();
            $("#setting_pic_Mira_page").css("display", "none");
            DBG_INFO("3333!!!!!!!!!!!!!!!!!!!!!!");

        default :
            break;
    }


}
function miracastexitDestory(){
    hiWebOsFrame.exitmira=null;
}