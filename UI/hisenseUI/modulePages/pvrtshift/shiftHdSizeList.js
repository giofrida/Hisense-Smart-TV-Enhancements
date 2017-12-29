/**
 * Created by Administrator on 16-5-11.
 */

function getShiftHdSizeListPageData(page){
    page.CaE = [
        {
            "id":"shiftHdSizeList_dialog_text",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"shiftHdSizeList_text",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"shiftHdSizeList_text2",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"shiftHdSizeList_circle",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id":"shiftHdSizeList_max",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        },
        {
            "id": "shiftHdSizeList_OK",
            "description": "",
            "CaEType": "div",
            "nav": {
                "rightTo": "shiftHdSizeList_OK","leftTo":"shiftHdSizeList_OK"
            },
            "classes": {
                "normal": "shiftHdSizeList_OK_Normal", "focus": "shiftHdSizeList_OK_Focus","disable":""
            },
            "onFocusFun": "",
            "handler": {
                "aftEnterHandler": "enterShiftSize",
                "befRightHandler": "rightShiftSize",
                "aftLeftHandler": "leftShiftSize"
            }
        }

    ];
    return ShiftHdSizeListData;
}

var ShiftHdSizeListData = {
    "shiftHdSizeList_dialog_text":{
        "Data":"Select space size"
    },
    "shiftHdSizeList_text":{
        "Data":"Maximum supported disk size is 32GB"
    },
    "shiftHdSizeList_text2":{
        "Data":"Press Left/Right button to adjust the available size."
    },
    "shiftHdSizeList_circle":{
        "Data":"1G"
    },
    "shiftHdSizeList_max":{
        "Data":"1G"
    },
    "shiftHdSizeList_OK":{"Data":"OK"},
    "operateData": {
        "langIndex":0,
        "shiftHdSizeList_dialog_text":["Select space size"],
        "shiftHdSizeList_text":["Maximum supported disk size is 32GB"],
        "shiftHdSizeList_text2":["Press Left/Right button to adjust the available size."],
        maxSize:32,
        curSize:0,
        timer:null
    },
    "langData":{
        "Select space size":["Select space size"],
        "Maximum supported disk size is 32GB":["Maximum supported disk size is 32GB"],
        "Press Left/Right button to adjust the available size.":["Press Left/Right button to adjust the available size."]

    },
    rewrite:"ShiftHdSizeListDataRewrite"
};

function ShiftHdSizeListDataRewrite(pageData){
    pageData.shiftHdSizeList_circle.Data = pageData.operateData.curSize+"G";
    pageData.shiftHdSizeList_max.Data = pageData.operateData.maxSize+"G";

}
function setLeftParInfo(value){
    DBG_ERROR("setLeftParInfo:"+value);
    var memSize = Math.floor(value/1073741824);
    if(memSize >32){
        ShiftHdSizeListData.operateData.maxSize = 32;
    }else{
        ShiftHdSizeListData.operateData.maxSize = memSize;
    }

}

function shiftHdSizeListOpenHandler(){
    ShiftHdSizeListData.operateData.curSize = 1;
//    ShiftHdSizeListData.operateData.maxSize = 1;
    setCurrentSizeLeft();
    hiWebOsFrame.shiftHdSizeList.rewriteDataOnly();
}
function setCurrentSizeLeft(){
    var left = 0;
    var width = 0;
    if(ShiftHdSizeListData.operateData.maxSize == 1){
        left = 882;
        width = 892;
    }else{
        left = 882*((ShiftHdSizeListData.operateData.curSize-1)/(ShiftHdSizeListData.operateData.maxSize-1));
        width = 892*((ShiftHdSizeListData.operateData.curSize-1)/(ShiftHdSizeListData.operateData.maxSize-1));
    }
    $("#shiftHdSizeList_circle").css("left", left);
    $("#shiftHdSizeList_select").css("left", left);
    $("#shiftHdSizeList_bar").css("width", width);
}

function rightShiftSize(){
    debugPrint("rightShiftSize:");
    if(ShiftHdSizeListData.operateData.curSize<ShiftHdSizeListData.operateData.maxSize){
        ShiftHdSizeListData.operateData.curSize = ShiftHdSizeListData.operateData.curSize + 0.5;
        setCurrentSizeLeft();
        hiWebOsFrame.shiftHdSizeList.rewriteDataOnly();
    }
}
function leftShiftSize(){
    if(ShiftHdSizeListData.operateData.curSize>1){
        ShiftHdSizeListData.operateData.curSize = ShiftHdSizeListData.operateData.curSize - 0.5;
        setCurrentSizeLeft();
        hiWebOsFrame.shiftHdSizeList.rewriteDataOnly();
    }
}

function enterShiftSize(){
    hiWebOsFrame.shiftHdSizeList.close();
    DBG_ERROR("enterShiftSize:"+ShiftHdSizeListData.operateData.curSize);
    var memSize = ShiftHdSizeListData.operateData.curSize*2;
    debugPrint("enterShiftSize: switch to test speed!");
    startTshiftMediaDialog();
    model.timeshift.getRegisterReturnValue = speedTestResultForTshift;
    model.timeshift.setMemSize(memSize);
    model.timeshift.SetPar();

}
function shiftHdSizeListOnDestroy(){

}

function shiftHdSizeListPageEscHandler(){
    hiWebOsFrame.shiftHdSizeList.close();
    if(!!hiWebOsFrame.pvrHDList){
        pvrHDListPageData.operateData.curstep = 0;
        pvrHDListPageData.operateData.curtitle = 0;
        hiWebOsFrame.pvrHDList.open();
        hiWebOsFrame.pvrHDList.hiFocus();
    }else{
        openLiveTVModule();
    }
}