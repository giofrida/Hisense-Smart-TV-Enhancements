/**
 * Created by Administrator on 16-5-11.
 */

function setting_getShiftHdSizeListPageData(page){
    page.CaE = [
        {
            "id":"setting_shiftHdSizeList_dialog_text",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"setting_shiftHdSizeList_text",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"setting_shiftHdSizeList_text2",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"setting_shiftHdSizeList_circle",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"setting_shiftHdSizeList_max",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id": "setting_shiftHdSizeList_OK",
            "description": "",
            "CaEType": "div",
            "nav": {
                "rightTo": "setting_shiftHdSizeList_OK","leftTo":"setting_shiftHdSizeList_OK"
            },
            "classes": {
                "normal": "setting_shiftHdSizeList_OK_Normal", "focus": "setting_shiftHdSizeList_OK_Focus","disable":""
            },
            "onFocusFun": "",
            "handler": {
                "aftEnterHandler": "setting_enterShiftSize",
                "befRightHandler": "setting_rightShiftSize",
                "aftLeftHandler": "setting_leftShiftSize",
                "aftEscHandler": "setting_shiftHdSizeListPageEscHandler"
            }
        }

    ];
    return setting_ShiftHdSizeListData;
}

var setting_ShiftHdSizeListData = {
    "setting_shiftHdSizeList_dialog_text":{
        "Data":"Select space size"
    },
    "setting_shiftHdSizeList_text":{
        "Data":"Maximum support 32G disk"
    },
    "setting_shiftHdSizeList_text2":{
        "Data":"Press Left/Right button to adjust the available size."
    },
    "setting_shiftHdSizeList_circle":{
        "Data":"1G"
    },
    "setting_shiftHdSizeList_max":{
        "Data":"1G"
    },
    "setting_shiftHdSizeList_OK":{"Data":"OK"},
    "operateData": {
        "langIndex":0,
        "setting_shiftHdSizeList_dialog_text":["Select space size"],
        "setting_shiftHdSizeList_text":["Maximum support 32G disk"],
        "setting_shiftHdSizeList_text2":["Press Left/Right button to adjust the available size."],
        maxSize:6,
        curSize:0,
        timer:null
    },
    "langData":{
        "Select space size":["Select space size"],
        "Maximum support 32G disk":["Maximum support 32G disk"],
        "Press Left/Right button to adjust the available size.":["Press Left/Right button to adjust the available size."]

    },
    rewrite:"setting_ShiftHdSizeListDataRewrite"
};

function setting_ShiftHdSizeListDataRewrite(pageData){
    pageData.setting_shiftHdSizeList_circle.Data = pageData.operateData.curSize+"G";
    pageData.setting_shiftHdSizeList_max.Data = pageData.operateData.maxSize+"G";

}
function setting_setLeftParInfo(value){
    DBG_ERROR("setLeftParInfo:"+value);
    var memSize = Math.floor(value/1073741824);
    if(memSize >32){
        setting_ShiftHdSizeListData.operateData.maxSize = 32;
    }else{
        setting_ShiftHdSizeListData.operateData.maxSize = memSize;
    }

}

function setting_shiftHdSizeListOpenHandler(){
    setting_ShiftHdSizeListData.operateData.curSize = 1;
//    ShiftHdSizeListData.operateData.maxSize = 1;
    setting_setCurrentSizeLeft();
    hiWebOsFrame.SettingThiftHdSizeList.rewriteDataOnly();
}
function setting_setCurrentSizeLeft(){
    var left = 0;
    var width = 0;
    if(setting_ShiftHdSizeListData.operateData.maxSize == 1){
        left = 882;
        width = 892;
    }else{
        left = 882*((setting_ShiftHdSizeListData.operateData.curSize-1)/(setting_ShiftHdSizeListData.operateData.maxSize-1));
        width = 892*((setting_ShiftHdSizeListData.operateData.curSize-1)/(setting_ShiftHdSizeListData.operateData.maxSize-1));
    }
    $("#setting_shiftHdSizeList_circle").css("left", left);
    $("#setting_shiftHdSizeList_select").css("left", left);
    $("#setting_shiftHdSizeList_bar").css("width", width);
}

function setting_rightShiftSize(){
    debugPrint("rightShiftSize:");
    if(setting_ShiftHdSizeListData.operateData.curSize<setting_ShiftHdSizeListData.operateData.maxSize){
        setting_ShiftHdSizeListData.operateData.curSize = setting_ShiftHdSizeListData.operateData.curSize + 0.5;
        setting_setCurrentSizeLeft();
        hiWebOsFrame.SettingThiftHdSizeList.rewriteDataOnly();
    }
}
function setting_leftShiftSize(){
    if(setting_ShiftHdSizeListData.operateData.curSize>1){
        setting_ShiftHdSizeListData.operateData.curSize = setting_ShiftHdSizeListData.operateData.curSize - 0.5;
        setting_setCurrentSizeLeft();
        hiWebOsFrame.SettingThiftHdSizeList.rewriteDataOnly();
    }
}

function setting_enterShiftSize(){
    hiWebOsFrame.SettingThiftHdSizeList.close();
    DBG_ERROR("enterShiftSize:"+setting_ShiftHdSizeListData.operateData.curSize);
    var memSize = setting_ShiftHdSizeListData.operateData.curSize*2;
    debugPrint("enterShiftSize: switch to test speed!");
//    startTshiftMediaDialog();
    PageDataSetttingSysdiskcheck.operateData.curTextIndex = 1;
    hiWebOsFrame.settingssysdiskcheck.rewriteDataOnly();
    hiWebOsFrame.settingssysdiskcheck.open();
    hiWebOsFrame.settingssysdiskcheck.hiFocus();
    model.timeshift.getRegisterReturnValue = registerTestResult_Tshift;
    model.timeshift.setMemSize(memSize);
    model.timeshift.SetPar();
//    if(!!hiWebOsFrame.settingssyspvr){
//        hiWebOsFrame.settingssyspvr.open();
//        hiWebOsFrame.settingssyspvr.hiFocus();
//    }else{
//        openLiveTVModule();
//    }

}
function setting_shiftHdSizeListOnDestroy(){

}

function setting_shiftHdSizeListPageEscHandler(){
    hiWebOsFrame.SettingThiftHdSizeList.close();
    if(!!hiWebOsFrame.settingssyspvrlist){
        PageDataSettingPvrList.operateData.curtitle = 0;
        PageDataSettingPvrList.operateData.curstep = 0;
        hiWebOsFrame.settingssyspvrlist.rewriteDataOnly();
        hiWebOsFrame.settingssyspvrlist.open();
        hiWebOsFrame.settingssyspvrlist.hiFocus();
    }else{
        openLiveTVModule();
    }
}