/**
 * Created by Admin on 14-6-18.
 */
function getWizardNetSetTestResDialogData(opt){
    opt.CaE = [
        {
            "id":"wizardNetSetTestResText",
            "description":"网络连接状态",
            "CaEType":"div"
        }
    ];
    wizardInitNetSetTestResDialog();
    return wizardNetSetTestDialogResData;
}
var wizardNetSetTestDialogResData={
    "wizardNetSetTestResText":{"Data":""},
    "operateData":{
        "testResDisplayTimer":0,
        "connectFlag":0,
        "displayText":["Network connection timeout","Connected successfully"]
    },
    "langData":{
        "Connected successfully":["Connected successfully"],
        "Network connection timeout":["Network connection timeout"]
    },
    rewrite:"wizardRewriteNetSetTestResDialog"
}
/*******************************************************************
 name:wizardInitNetSetTestResDialog
 description:初始化网络搜索数据
 input:
 output:
 return
 *******************************************************************/
function wizardInitNetSetTestResDialog(){
//    var data = wizardNetSetTestDialogResData;
////    data.operateData.connectFlag = getSettingNetSetConnTestFlag();
}
function wizardSetNetSetSetConnTestFlag(flag){
    var data = wizardNetSetTestDialogResData;
    data.operateData.connectFlag = flag;
    hiWebOsFrame.NetSetTestResDialog.rewriteDataOnly();
}
/*******************************************************************
 name:wizardRewriteNetSetTestResDialog
 description:刷新网络搜索设置页
 input:
 output:
 return
 *******************************************************************/
function wizardRewriteNetSetTestResDialog(data){
    try{
        data.wizardNetSetTestResText.Data = data.operateData.displayText[data.operateData.connectFlag];
    }catch (ex){
        debugPrint("wizardRewriteNetSetTestResDialog:"+ ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:wizardNetSetDestroyTestResDialog
 description:
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetDestroyTestResDialog(){
    try{
        hiWebOsFrame.NetSetTestResDialog.close();
//        hiWebOsFrame.NetSetMainPage.hiFocus();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.NetSetTestResDialog.destroy();
    }catch (ex){
        debugPrint("wizardNetSetDestroyTestResDialog:"+ex.message,DebugLevel.ERROR);
    }

}
function wizardNetSetTestResDialogEscHandle(){
    var data = wizardNetSetTestDialogResData;
    clearTimeout(data.operateData.testResDisplayTimer);
    hiWebOsFrame.NetSetTestResDialog.close();
//    hiWebOsFrame.NetSetMainPage.hiFocus();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.NetSetTestResDialog.destroy();
}

function wizardNetSetTestResDialogOnOpen(){
    try{
        var data = wizardNetSetTestDialogResData;
        data.operateData.testResDisplayTimer = setTimeout(wizardNetSetDestroyTestResDialog,3000);
    }catch (ex){
        debugPrint("wizardNetSetTestResDialogOnOpen:"+ex.message,DebugLevel.ERROR);
    }
}
function wizardNetSetTestResDialogOnDestroy(){
    try{
        var data = wizardNetSetTestDialogResData;
        clearTimeout(data.operateData.testResDisplayTimer);
        hiWebOsFrame.NetSetTestResDialog = null;
    }catch (ex){
        debugPrint("wizardNetSetTestResDialogOnDestroy:"+ex.message,DebugLevel.ERROR);
    }
}