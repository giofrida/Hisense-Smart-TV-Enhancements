/**
 * Created by Admin on 14-6-18.
 */
function getWizardNetSetTestDialogData(opt){
    opt.CaE = [
        {
            "id":"wizardNetSetTestText",
            "description":"测试网络是否连接信息",
            "CaEType":"div"
        },
        {
            "id":"wizardNetSetTestCancelBtn",
            "description":"取消搜索无线网络",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootSingleNormal","focus":"wizardDialogFootSingleFocus"
            },
            "handler":{
                "aftEnterHandler":"wizardNetSetTestCancelHandle"
            }
        }
    ];
    wizardInitNetSetTestDialog();
    return wizardNetSetTestDialogData;
}
var wizardNetSetTestDialogData={
    "wizardNetSetTestText":{"Data":"Testing, please wait……"},
    "wizardNetSetTestCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "networkTestTimer":"",
        "networkTestState":0,
        "connectFlag":0
    },
    "langData":{
        "Testing, please wait……":["Testing, please wait……"],
        "Cancel":["Cancel"]
    },
    rewrite:"wizardRewriteNetSetTestDialog"
}
/*******************************************************************
 name:wizardInitNetSetTestDialog
 description:初始化网络测试数据
 input:
 output:
 return
 *******************************************************************/
function wizardInitNetSetTestDialog(){

}
/*******************************************************************
 name:wizardRewriteNetSetTestDialog
 description:刷新网络搜索设置页
 input:
 output:
 return
 *******************************************************************/
function wizardRewriteNetSetTestDialog(){

}

function wizardNetSetStartTestConnState(){
    var data = wizardNetSetTestDialogData;
    data.operateData.networkTestTimer = setTimeout(settingNetSetTestTimeOutHandle,8000);
    if(tv == true){
        model.network.TestStart();
    }
}
function settingNetSetTestTimeOutHandle(){
    try{
        debugPrint("settingNetSetTestTimeOutHandle:test time out!!",DebugLevel.ERROR);
        if(tv == true){
            var testState = model.network.getEnumTestState();
            if(testState == 1){
                debugPrint("wizardNetSetTesDialogOnOpen:network is testing!!!",DebugLevel.ERROR);
                model.network.TestStop();
            }
        }
        setSettingNetSetConnTestFlag(0);
        settingNetSetCreateTestResDialog();
    }catch (ex){
        debugPrint("settingNetSetTestTimeOutHandle:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:wizardNetSetTestCancelHandle
 description:取消网络搜索处理
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetTestCancelHandle(){
    try{
        var data = wizardNetSetTestDialogData;
        clearTimeout(data.operateData.networkTestTimer);
        setSettingNetSetConnTestFlag(0);
        if(tv == true){
            model.network.TestStop();
        }
        hiWebOsFrame.NetSetTestDialog.close();
//        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.NetSetTestDialog.destroy();
    }catch (ex){
        debugPrint("wizardNetSetTestCancelHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function setSettingNetSetConnTestFlag(flag){
    wizardNetSetTestDialogData.operateData.connectFlag = flag;
}
function settingNetSetCreateTestResDialog(){
    try{
        var data =wizardNetSetTestDialogData;
        clearTimeout(data.operateData.networkTestTimer);
        hiWebOsFrame.createPage('settingNetSetTestResDialogId',null, hiWebOsFrame.settingsFirst, null,function(a){
            hiWebOsFrame.NetSetTestDialog.close();
            hiWebOsFrame.NetSetTestResDialog = a;
            wizardSetNetSetSetConnTestFlag(wizardNetSetTestDialogData.operateData.connectFlag);
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetSetTestDialog.destroy();
        });
    }catch (ex){
        debugPrint("settingNetSetCreateTestResDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetTestStateChangeCallBack(state){
    debugPrint("settingNetSetTestStateChangeCallBack:state="+state,DebugLevel.ALWAYS);
    switch (state){
        case 0:
            setSettingNetSetConnTestFlag(0);
            settingNetSetCreateTestResDialog();
            break;
        case 1:
            break;
        case 2:
            setSettingNetSetConnTestFlag(1);
            settingNetSetCreateTestResDialog();
            break;
        case 3:
            setSettingNetSetConnTestFlag(0);
            settingNetSetCreateTestResDialog();
            break;
        default :
            setSettingNetSetConnTestFlag(0);
            settingNetSetCreateTestResDialog();
            break;
    }
}
function wizardNetSetTesDialogOnOpen(){
    try{
        if ('APP_5890_SA' == currentPlatform_config || "opera4x" == currOperaVersion) {
            $('.wizardDialogLoadingImg').css("display", "none");
            $('.wizardDialogLoadingDiv').css("display", "block");
        }
        else {
            $('.wizardDialogLoadingImg').css("display", "block");
            $('.wizardDialogLoadingDiv').css("display", "none");
        }
        if(tv == true){
            var testState = model.network.getEnumTestState();
            if(testState == 1){
                debugPrint("wizardNetSetTesDialogOnOpen:network is testing!!!",DebugLevel.ERROR);
                model.network.TestStop();
            }
            model.network.onEnumTestStateChaged = settingNetSetTestStateChangeCallBack;
        }
        wizardNetSetStartTestConnState();
    }catch (ex){
        debugPrint("wizardNetSetTesDialogOnOpen:"+ex.message,DebugLevel.ERROR);
    }
}
function wizardNetSetTestDialogOnDestroy(){
    try{
        var data =wizardNetSetTestDialogData;
        clearTimeout(data.operateData.networkTestTimer);
        hiWebOsFrame.NetSetTestDialog = null;
        if(tv == true){
            model.network.onEnumTestStateChaged = null;
        }
    }catch (ex){
        debugPrint("wizardNetSetTestDialogOnDestroy:"+ex.message,DebugLevel.ERROR);
    }

}