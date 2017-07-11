/**
 * Created by Admin on 14-6-18.
 */
function getWizardNetSetConnResDialogData(opt){
    opt.CaE = [
        {
            "id":"settingConnNetResultInfo",
            "description":"结果信息",
            "CaEType":"div"
        }
    ];
    wizardInitWifiResOperateData();
    return settingWifiConnResultDialog;
}
var settingWifiConnResultDialog={
    "settingConnNetResultInfo":{"Data":"Failed to connect. Please try again"},
    "operateData":{
        "connectResult":0,//0:fail,1:sucess
        "connectInfo":["Failed to connect. Please try again","Connected successfully","The password is incorrect, please try again"]
    },
    "langData":{
        "Connected successfully":["Connected successfully"],
        "Failed to connect. Please try again":["Failed to connect. Please try again"],
	    "The password is incorrect, please try again":["The password is incorrect, please try again"]
    },
    rewrite:"settingRewriteNetSetConnResDialog"
}
/*******************************************************************
 name:wizardInitWifiResOperateData
 description:初始化信息展示页的operateData
 input:
 output:
 return
 *******************************************************************/
function wizardInitWifiResOperateData(){
    var data = settingWifiConnResultDialog;
    if(tv == false){
        data.operateData.connectResult = 0;
    }else{
        data.operateData.connectResult =  model.network.getEnumNetworkAvailable();
        if(data.operateData.connectResult == 0){
           var enumLink = model.network.getEnumLink();{
                DBG_ALWAYS("wizardInitWifiResOperateData:"+enumLink);
                if(enumLink == 6){//password error
                    data.operateData.connectResult = 2;
                }
            }
        }
    }

    debugPrint("wizardInitWifiResOperateData:connectResult"+data.operateData.connectResult);

}
/*******************************************************************
 name:settingRewriteNetSetConnResDialog
 description:刷新信息展示页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetConnResDialog(data){
    data.settingConnNetResultInfo.Data = data.operateData.connectInfo[data.operateData.connectResult];
}
/*******************************************************************
 name:settingNetSetConnResDisappear
 description:消失连接结果
 input:
 output:
 return
 *******************************************************************/
function settingNetSetConnResDisappear(){
    try{
        var data = settingWifiConnResultDialog;
        var curId = hiWebOsFrame.NetSetWifiSetPage.currentSelectedTree[0].id;
        setSettingNetSetWifiSetPageConnState();
        hiWebOsFrame.NetSetConnResDialog.close();
        hiWebOsFrame.NetSetWifiSetPage.hiFocus(curId);
        hiWebOsFrame.NetSetConnResDialog.destroy();
    }catch (ex){
        DBG_ERROR("settingNetSetConnResDisappear:"+ex.message);
        hiWebOsFrame.NetSetConnResDialog.close();
        hiWebOsFrame.NetSetWifiSetPage.hiFocus("settingNetSetWifiSetAddNetBtn");
        hiWebOsFrame.NetSetConnResDialog.destroy();
    }
}

function wizardNetSetConnResDialogOnOpen(){
    var data = settingWifiConnResultDialog;
    data.operateData.wifiConnResTimer = setTimeout(settingNetSetConnResDisappear,3000);
}

function wizardNetSetConnResDialogOnDestroy(){
    var data = settingWifiConnResultDialog;
    clearTimeout(data.operateData.wifiConnResTimer);
    hiWebOsFrame.NetSetConnResDialog = null;
}