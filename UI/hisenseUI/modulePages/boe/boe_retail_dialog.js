/**
 * Created by xuehongfeng on 2015/12/11.
 */
function getboeRetailDialogPageData(opt)
{
    opt.CaE=[
        {
            "id": "boe_retail_dialog_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"boe_retail_dialog_button1",
            "description":"ok",
            "classes": {
                "normal": "boe_retail_dialog_button_normal", "focus": "boe_retail_dialog_button_focus"
            },
            "nav": { "rightTo":"boe_retail_dialog_button2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"boe_retail_dialog_ok_Handler",
                'aftEscHandler':"boe_retail_dialog_EscEn_Handler"

            }

        },
        {
            "id":"boe_retail_dialog_button2",
            "description":"cancel",
            "classes": {
                "normal": "boe_retail_dialog_button_normal", "focus": "boe_retail_dialog_button_focus"
            },
            "nav": { "leftTo":"boe_retail_dialog_button1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"boe_retail_dialog_EscEn_Handler",
                'aftEscHandler':"boe_retail_dialog_EscEn_Handler"

            }
        }
    ];
    return boeRetailDialogPageData;

}
var boeRetailDialogPageData={
    "boe_retail_dialog_content":{Data:"No action detected. Store Mode is now activited, do you wish to return Home Mode and resume the set-up Wizard?"},
    "boe_retail_dialog_button1":{Data:"OK"},
    "boe_retail_dialog_button2":{Data:"Cancel"},
    "operateData": {
        "dialogHold":0
    },
    "langData":{
        "OK": [],
        "Cancel": [],
        "No action detected. Store Mode is now activited, do you wish to return Home Mode and resume the set-up Wizard?": []
    }
};
function boeRetailDialogPageonOpen()
{
    var data = boeRetailDialogPageData;
    data.operateData.dialogHold = setTimeout(boe_retail_dialog_ok_Handler,300000);
}
function boeRetailDialogPageonDestroy()
{
    clearTimeout(boeRetailDialogPageData.operateData.dialogHold);
    hiWebOsFrame.boe_retail_dialog=null;
}
function boe_retail_dialog_ok_Handler()
{
    testAddSDKIntervalFun();
    hiWebOsFrame.boe_bg_page_id.open();
    if(!!hiWebOsFrame.boe_netbg_page_id)
    {
        hiWebOsFrame.boe_netbg_page_id.open();
    }
    if(hiWebOsFrame.boe_retail_dialog.origin.id == "boe_disinfo_page_id")
    {
        hiWebOsFrame.boe_disclaimer_page_id.open();
    }
    hiWebOsFrame.boe_retail_dialog.origin.open();
    hiWebOsFrame.boe_retail_dialog.origin.hiFocus();
    hiWebOsFrame.boe_retail_dialog.destroy();

    if(tv) {
        model.system.setUserMode(0);
        model.video.setEnumPictureMode(0);
        pauseDTV();
        setTimeout(function () {
            var musicPath = "file:///3rd_rw/UI/hisenseUI/wizard_bg.mp3";
            model.mpctrl.PlayMusic(musicPath);
        }, 500);
    }
}
function boe_retail_dialog_EscEn_Handler()
{
    clearTimeout(boeRetailDialogPageData.operateData.dialogHold);
    var currpage = hiWebOsFrame.getCurrentPage();
    closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
    if (tv == true) {
        startLiveTv();
    }
}


