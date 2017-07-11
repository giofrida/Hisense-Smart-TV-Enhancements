/**
 * Created by Henry on 2014-11-19.
 */
var pvrTshiftDialogPageData = {
    "pvr_tshift_dialog_content": {
        Data: "Select PVR or T.Shift?"
    },
    "pvr_tshift_dialog_pvr": {
        Data: "PVR"
    },
    "pvr_tshift_dialog_tshift": {
        Data: "T.Shift"
    },
    "operateData": {
        "pvr_tshift_dialog_content": {
            Data: "Select PVR or T.Shift?"
        },
        "pvr_tshift_dialog_pvr": {
            Data: "PVR"
        },
        "pvr_tshift_dialog_tshift": {
            Data: "T.Shift"
        },
        "curprgrm": {},
        "curDVBTime": null,
        "exittimeout": null
    },
    "langData": {
        "Select PVR or T.Shift?": [],
        "PVR": [],
        "T.Shift": []
    },
    rewrite: "refreshPvrOrTshiftDialog"
};
function getPvrTshiftDialogPageData(page) {
    debugPrint("first in create the page");
    page.CaE = [
        {
            "id": "pvr_tshift_dialog_content",
            "description": "显示选择录制时移提示",
            "classes": {
                "normal": "cls_pvr_tshift_dialog_content2"
            },
            "CaEType": "div"
        },
        {
            "id": "pvr_tshift_dialog_pvr",
            "description": "录制按钮",
            "nav": {
                "rightTo": "pvr_tshift_dialog_tshift"
            },
            "handler": {
                "aftEnterHandler": "launchPvr",
                "befRightHandler": "lossMarqueeHandler"
            },
            "classes": {
                "normal": "cls_pvr_tshift_dialog_pvr_normal", "focus": "cls_pvr_tshift_dialog_pvr_focus",
                "selected": "cls_pvr_tshift_dialog_pvr_focus", "disable": "cls_pvr_tshift_dialog_pvr_normal"
            },
            "CaEType": "div"
        },
        {
            "id": "pvr_tshift_dialog_tshift",
            "description": "时移按钮",

            "nav": {
                "leftTo": "pvr_tshift_dialog_pvr"
            },
            "handler": {
                "aftEnterHandler": "startTShiftPage",
                "befLeftHandler": "marqueeHandler"
            },
            "classes": {
                "normal": "cls_pvr_tshift_dialog_tshift_normal", "focus": "cls_pvr_tshift_dialog_tshift_focus"
            },
            "CaEType": "div"
        }
    ];
    debugPrint("create the page");
    return pvrTshiftDialogPageData;
}

function refreshPvrOrTshiftDialog() {

}
//function startTshiftMediaDialog(){
//
//    hiWebOsFrame.createPage('tshiftMediaDialog',null,null,null,function(page){
//        hiWebOsFrame.tshiftmedia = page;
//        hiWebOsFrame.tshiftmedia.open();
//        hiWebOsFrame.tshiftmedia.hiFocus();
//        hiWebOsFrame.tshiftmedia.timer = setTimeout(exitTshiftMediaToTMsg,30*1000);
//    });
//}
function exitPvrTShiftDialog()
{
    debugPrint('exit ptDialog!');
    hiWebOsFrame.ptDialog.close();
    if(hiWebOsFrame.getCurrentPageId() == "pvrOrtShiftDialogPage_id" )
    {
        openLiveTVModule([Msg.INFO, 0]);
    }
}
function pvrDialogonClose()
{
    try
    {
        if(!!hiWebOsFrame.ptDialog && !!hiWebOsFrame.ptDialog.exittimeout)
        {
            clearTimeout(hiWebOsFrame.ptDialog.exittimeout);
            hiWebOsFrame.ptDialog.exittimeout = null;
        }
    }
    catch (ex)
    {
        debugPrint("pvrDialog page close error: " + ex);
    }
}
function pvrDialogonDestroy()
{
    hiWebOsFrame.ptDialog.close();
    hiWebOsFrame.ptDialog = null;
}

//function exitTshiftMediaToTMsg(){
//    try
//    {
//        debugPrint('exit thiftmedia');
//        if(!!hiWebOsFrame.tshiftmedia)
//        {
//            clearTimeout(hiWebOsFrame.tshiftmedia.timer);
//            hiWebOsFrame.tshiftmedia.timer = null;
//            hiWebOsFrame.tshiftmedia.destroy();
//        }
//        hiWebOsFrame.createPage('tShiftMsg_id', null, null, null, function (page) {
//            debugPrint('launch tShiftMsg_id start !!!!!');
//            hiWebOsFrame.tshiftMsg = page;
//            hiWebOsFrame.tshiftMsg.operateData.showFlag = 0;
//            page.open();
//            page.hiFocus();
//            debugPrint("UI call time shift stop command!!!!!");
//            model.timeshift.Stop();
//            hiWebOsFrame.tshiftMsg.timer = setTimeout(exitTMsgPage,10*1000);
//        });
//
//    }
//    catch(ex){
//        debugPrint('exit thift error:'+ex);
//    }
//}
function exitTshiftMediaToTShift(){
    try
    {
        debugPrint('exit thiftmedia');
        if(!!hiWebOsFrame.tshiftmedia)
        {
            if(!!hiWebOsFrame.tshiftmedia.timer){
                clearTimeout(hiWebOsFrame.tshiftmedia.timer);
            }
            hiWebOsFrame.tshiftmedia.timer = null;
            hiWebOsFrame.tshiftmedia.destroy();
        }
        if(!!hiWebOsFrame.tshiftMsg){
            if(!!hiWebOsFrame.tshiftMsg.timer){
                clearTimeout(hiWebOsFrame.tshiftMsg.timer);
            }
            hiWebOsFrame.tshiftMsg.timer = null;
            hiWebOsFrame.tshiftMsg.destroy();
        }
    }
    catch(ex){
        debugPrint('exit thift error:'+ex);
    }
}
function startTShiftPage(){
    debugPrint('click tshift!');
    // 当录制在进行时，直接退出;
    currentSelected = "tshift";
    try {
         var tuid = model.timeshift.getUuid();
         debugPrint('model.timeshift.getUuid:'+tuid);
         var size = model.timeshift.getMemSize();
         debugPrint('model.timeshift.getMemSize:'+size);
         if( !pvrOrTsIsUsbPathOk(tuid) || parseInt(size)==0){
              hiWebOsFrame.createPage("pvrHardDiskCheck", null, null, null, function(page){
              hiWebOsFrame.pvrHardDiskCheck = page;
              hiWebOsFrame.ptDialog.close();
              page.open();
              hiWebOsFrame.pvrHardDiskCheck.searchHDTimer = setTimeout(function () {
              pvrPartitionsInit(0);}, 1000);
              page.hiFocus();
              });
         }else{
              if(!!hiWebOsFrame.ptDialog){
                   hiWebOsFrame.ptDialog.close();
              }
             if(!!isTimeShiftStatus()){
                 launchTshift();
             }else{
                 //startSetParTShift();
                 debugPrint('getTshiftIsRegistered:');
                 model.timeshift.getTshiftIsRegistered = mainTshiftIsRegistered.bind(this,tuid);
                 var path = getUsbPathByUid(tuid);
                 debugPrint('getTshiftIsRegistered:' + path);
                 model.timeshift.IsRegistered(path);
             }
              //tshiftJudgeToOpenPage();
         }

    }catch(ex){
         debugPrint('getDiskState error:'+ex);
    }

}



//function startPlayShift(){
//    debugPrint("UI call time shift begin command!!!!!");
//    model.timeshift.BeginShift();
//    //model.timeshift.onPlayerStateChaged = tShiftPlayStatusChanged;
//}








/*
 * 以下函数与pvr相关
 * 2014-12-29
 * */
function launchPvr()
{
    debugPrint('click pvr!');
    detectSavingPathOfPvr();
}

/*
* 节目录制之前，读取保存路径信息
* 说明：
*   如果用户没有设置pvr保存路径，或者路径与设置好的不匹配，UI提示用户选择分区
* */
function detectSavingPathOfPvr()
{
    //当前是pvr功能要检测USB
    currentSelected = "pvr";
    var usbStationUuid = model.pvr.getStationUuid();
    debugPrint("detectSavingPathOfPvr:"+usbStationUuid);

    if((!pvrOrTsIsUsbPathOk(usbStationUuid)))
    {
        hiWebOsFrame.ptDialog.close();
        hiWebOsFrame.createPage("pvrHardDiskCheck", null, null, null, function (pvrHDCheckPage) {
            hiWebOsFrame.pvrHardDiskCheck = pvrHDCheckPage;
            hiWebOsFrame.pvrHardDiskCheck.open();
            hiWebOsFrame.pvrHardDiskCheck.searchHDTimer = setTimeout(function () {
                pvrPartitionsInit(1);}, 1000);
            hiWebOsFrame.pvrHardDiskCheck.hiFocus();
        });
    }
    else
    {
        //进入预约录制节目的设置界面
        openRemindRecordSettingPage();
    }
}
//以下为pvr button超长文字添加跑马灯效果
function marqueeHandler()
{
    var txt = $("#pvr_tshift_dialog_pvr").html();
    if(txt.length > 10)
    {
        $("#pvr_tshift_dialog_pvr").html('<marquee>'+ txt +'</marquee>');
    }
}
function lossMarqueeHandler()
{
    var txt = $("#pvr_tshift_dialog_pvr" + " marquee").html();
    if(txt)
    {
        $("#pvr_tshift_dialog_pvr").html(txt);
    }
}
function pvrDialogonOpen() {
    try {
        if (typeof hiWebOsFrame.ptDialog.currentSelectedTree[0] != UNDEFINED_DEFSTR) {
            if(hiWebOsFrame.ptDialog.currentSelectedTree[0].id == "pvr_tshift_dialog_pvr"){
                DBG_INFO("hiWebOsFrame.ptDialog.currentSelectedTree[0]")
                var txt = $("#pvr_tshift_dialog_pvr").html();
                if (txt.length > 10) {
                    $("#pvr_tshift_dialog_pvr").html('<marquee>' + txt + '</marquee>');
                }
            }
        } else {
            //页面第一次创建
            var txt = $("#pvr_tshift_dialog_pvr").html();
            if (txt.length > 10) {
                $("#pvr_tshift_dialog_pvr").html('<marquee>' + txt + '</marquee>');
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}