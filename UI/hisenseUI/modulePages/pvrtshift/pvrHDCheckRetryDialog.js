/**
 * Created by hisense on 2015-3-8.
 */
function getPvrHDCheckRetryDialogPageData(page)
{
    page.CaE = [
        {
            "id": "pvrtshift_dialog1_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "pvrtshift_dialog1_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"pvrtshift_dialog1_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "rightTo":"pvrtshift_dialog1_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"pvrHDCheckRetryHandler"//点击Retry按钮
            }
        },
        {
            "id":"pvrtshift_dialog1_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "leftTo":"pvrtshift_dialog1_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"pvrHDCheckCancelHandler"//点击Cancel按钮
            }

        }
    ];
    return pvrHDRetryDialogPageData;

}
var pvrHDRetryDialogPageData = {
    "pvrtshift_dialog1_text1":{Data:"HDD detecting"},
    "pvrtshift_dialog1_content":{Data:"Failed to detect external hard disk"},
    "pvrtshift_dialog1_btn1":{Data:"Retry"},
    "pvrtshift_dialog1_btn2":{Data:"Cancel"},
    "operateData": {
        "searchHDTimer": null
    },
    "langData":{
        "HDD detecting":[],
        "Retry":[],
        "Cancel":[],
        "Failed to detect external hard disk":[]
    },
    rewrite:function(pageData) {}
};

function pvrHDCheckRetryHandler()
{
    try {
        debugPrint("retry button is pressed!");
        hiWebOsFrame.pvrHDCheckRetryDialog.close();
        hiWebOsFrame.pvrHardDiskCheck.open();
        hiWebOsFrame.pvrHardDiskCheck.operateData.searchHDTimer = setTimeout(pvrPartitionsInit, 1000);
        hiWebOsFrame.pvrHardDiskCheck.hiFocus();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function pvrHDCheckCancelHandler()
{
    try {
        //若是预约录制，检测硬盘时，当用户选择取消检测的时候，就将预约标志位置为false
        if(isScheduleRecord == true)
        {
            debugPrint("Retry cancel to set isScheduleRecord= " + isScheduleRecord);
            isScheduleRecord = false;
        }
        if(hiWebOsFrame.pvrHardDiskCheck) hiWebOsFrame.pvrHardDiskCheck.destroy();
        if(hiWebOsFrame.pvrHDCheckRetryDialog) hiWebOsFrame.pvrHDCheckRetryDialog.destroy();


        //todo ghl if epg -> return epg
        if(!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible){
            hiWebOsFrame.epg.hiFocus();
            return;
        }

        openLiveTVModule([Msg.INFO, 0]);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function pvrHDCheckRetryDialogOnDestroy()
{
    try {
        debugPrint("pvr hd check retry dialog destroy!");
        hiWebOsFrame.pvrHDCheckRetryDialog.close();
        debugPrint("pvr HD check retry page close!");
        hiWebOsFrame.pvrHDCheckRetryDialog = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function exitPvrHDCheckRetryDialog()
{
    try {
        pvrHDCheckCancelHandler();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}