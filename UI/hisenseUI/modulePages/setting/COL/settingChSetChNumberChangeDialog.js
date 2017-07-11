/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetChNumberChangeDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetChNumberPlus",
            "description":"结果信息",
            "CaEType":"div",
            "classes":{
                "normal":"buttonPlusTopNormal","focus":"buttonPlusTopFocus"
            },
            "handler":{
                "aftEnterHandler":"setSettingChannelNumberPlus"
            },
            "nav":{
                "upTo":"","downTo":"settingChSetChNumberReduce"
            }
        },
        {
            "id":"settingChSetChNumberTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChNumberValue",
            "description":"",
            "CaEType":"span"

        },
        {
            "id":"settingChSetChNumberReduce",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"buttonReduceBottomNormal","focus":"buttonReduceBottomFocus"
            },
            "handler":{
                "aftEnterHandler":"setSettingChannelNumberReduce"
            },
            "nav":{
                "upTo":"settingChSetChNumberPlus"
            }
        }
    ];
    settingInitChSetChNumberChangeData();
    return settingChSetChNumberChangeDialogData;
}
var settingChSetChNumberChangeDialogData={
    "settingChSetChNumberPlus":{"Data":""},
    "settingChSetChNumberTitle":{"Data":"Channel number:"},
    "settingChSetChNumberValue":{"Data":""},
    "settingChSetChNumberReduce":{"Data":""},
    "operateData":{
        "currChNumber":0
    },
    "langData":{
        "Channel number:":["Channel number:"]
    },
    rewrite:"settingRefreshChSetChNumberChangeDialog"
}
/*******************************************************************
 name:settingInitChSetChNumberChangeData
 description:
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetChNumberChangeData(){
    //var data = settingChSetChNumberChangeDialogData;
//    data.operateData.currChNumber=getSettingChSetDTVChNumber();
//    data.operateData.currChNumber = "";
//    if(tv == true){
//        if(data.operateData.originId == "settingChSetATVManuSetPageId") { //哥伦比亚 数字键设置接口 atv和dtv分开
//            debugPrint("origin：settingChSetATVManuSetPageId+ ",DebugLevel.ALWAYS);
//            model.channelSearch.onFoundServicesNumberAtvChaged = settingChSetChNumberChangeCallBack;
//        }else{
//            debugPrint("origin：settingChSetDTVManuSetPageId+ ",DebugLevel.ALWAYS);
//            model.channelSearch.onFoundServicesNumberChaged = settingChSetChNumberChangeCallBack;
//        }
//    }
}
function settingChSetChSetChNumberSet(channelNumber){
    var data = settingChSetChNumberChangeDialogData;
    data.operateData.currChNumber = channelNumber;
}
/*******************************************************************
 name:settingRefreshChSetChNumberChangeDialog
 description:刷新信息展示页
 input:
 output:
 return
 *******************************************************************/
function settingRefreshChSetChNumberChangeDialog(data){
    data.settingChSetChNumberValue.Data = data.operateData.currChNumber;
}

function setSettingChannelNumberPlus(){
    if(tv == false){
        var data = settingChSetChNumberChangeDialogData;
        data.operateData.currChNumber = parseInt(data.operateData.currChNumber);
        if( data.operateData.currChNumber + 10 < 100){
            data.operateData.currChNumber = data.operateData.currChNumber + 10;
        }else{
            data.operateData.currChNumber = 100;
        }
        hiWebOsFrame.ChSetChNumberChangeDialog.rewriteDataOnly();
    }else{
        debugPrint("setSettingChannelNumberPlus:+ channelNumber",DebugLevel.ALWAYS);
        if(this.page.origin.id == "settingChSetATVManuSetPageId"){ //哥伦比亚 数字键设置接口 atv和dtv分开
            model.channelSearch.setFoundServicesNumberAtv("0");
        }else{
            model.channelSearch.setFoundServicesNumber("0");
        }
    }
}

function setSettingChannelNumberReduce(){
    if(tv == false){
        var data = settingChSetChNumberChangeDialogData;
        if( data.operateData.currChNumber - 10 > 0){
            data.operateData.currChNumber = data.operateData.currChNumber - 10;
        }else{
            data.operateData.currChNumber = 0;
        }
        hiWebOsFrame.ChSetChNumberChangeDialog.rewriteDataOnly();
    }else{
        debugPrint("setSettingChannelNumberReduce:- channelNumber",DebugLevel.ALWAYS);
        if(this.page.origin.id == "settingChSetATVManuSetPageId"){
            model.channelSearch.setFoundServicesNumberAtv("1");
        }else{
            model.channelSearch.setFoundServicesNumber("1");
        }
    }
}
/*******************************************************************
 name:settingChSetChNumberChangeCallBack
 description:channel number change callback
 input:
 output:
 return
 *******************************************************************/
function settingChSetChNumberChangeCallBack(value){
    debugPrint("settingChSetChNumberChangeCallBack:currChannelNumber="+value,DebugLevel.ALWAYS);
    var data = settingChSetChNumberChangeDialogData;
    data.operateData.currChNumber = value;
    hiWebOsFrame.ChSetChNumberChangeDialog.rewriteDataOnly();
}
function settingChSetChNumberChangeEscHandle(){
    try{
        hiWebOsFrame.ChSetChNumberChangeDialog.close();
        var data = settingChSetChNumberChangeDialogData;
        if(this.page.origin.id == "settingChSetATVManuSetPageId"){
            setSettingChSetATVChNumber(data.operateData.currChNumber);
            hiWebOsFrame.ChSetATVManuSetPage.hiFocus();
        }else{
            setSettingChSetDTVChNumber(data.operateData.currChNumber);
            hiWebOsFrame.ChSetDTVManuPage.hiFocus();
        }
        hiWebOsFrame.ChSetChNumberChangeDialog.destroy();

    }catch (ex){
        debugPrint("settingChSetChNumberChangeEscHandle:"+ex.message,DebugLevel.ALWAYS);
    }
}
function settingChSetChNumberChangeOnOpen(){
    //var data = settingChSetChNumberChangeDialogData;
//    data.operateData.currChNumber=getSettingChSetDTVChNumber();
//    data.operateData.currChNumber = "";
    if(tv == true){
        if(this.page.origin.id == "settingChSetATVManuSetPageId") { //哥伦比亚 数字键设置接口 atv和dtv分开
            debugPrint("origin：settingChSetATVManuSetPageId+ ",DebugLevel.ALWAYS);
            model.channelSearch.onFoundServicesNumberAtvChaged = settingChSetChNumberChangeCallBack;
        }else{
            debugPrint("origin：settingChSetDTVManuSetPageId+ ",DebugLevel.ALWAYS);
            model.channelSearch.onFoundServicesNumberChaged = settingChSetChNumberChangeCallBack;
        }
    }
}
function settingChSetChNumberChangeOnDestroy(){
    var data = settingChSetChNumberChangeDialogData;
    if(tv == true){
        if(this.page.origin.id == "settingChSetATVManuSetPageId") {
            model.channelSearch.onFoundServicesNumberAtvChaged = null;
        }else{
            model.channelSearch.onFoundServicesNumberChaged = null;
        }
    }
    hiWebOsFrame.ChSetChNumberChangeDialog = null;
}