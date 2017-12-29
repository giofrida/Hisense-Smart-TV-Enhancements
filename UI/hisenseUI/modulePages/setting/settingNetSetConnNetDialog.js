/**
 * Created by Admin on 14-6-18.
 */
function getWizardNetSetConnNetDialogData(opt){
    opt.CaE = [
        {
            "id":"settingConnNetDialogInfo",
            "description":"连接网络提示信息",
            "CaEType":"div"
        },
        {
            "id":"settingConnNetCancel",
            "description":"取消网络连接",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootSingleNormal","focus":"wizardDialogFootSingleFocus"
            },
            "handler":{
                "aftEnterHandler":"wizardWifiConnNetCancel"
            }
        }
    ];

    return settingConnNetDialogData;
}
var settingConnNetDialogData={
    "settingConnNetDialogInfo":{"Data":"Connecting, please wait"},
    "settingConnNetCancel":{"Data":"Cancel"},
    "operateData":{
        "connectState":0, //0:connected,1:applying setting,2:connecting,3:login fail,4:access point not fond,5:not connected,6:general error
        "SSID":"",
        "secType":"",
        "authType":"",
        "password":"",
        "signal":"",
        "wifiConnTimer":""
    },
    "langData":{
        "Connecting, please wait":["Connecting, please wait"],
        "Cancel":["Cancel"]
    },
    rewrite:"settingRewriteNetSetConnNetDialog"
}
function settingSetNetSetWifiConnPara(wifiConnPara){
    try{
        debugPrint("settingSetNetSetWifiConnPara:"+wifiConnPara.SSID+","+wifiConnPara.secType+","+wifiConnPara.authType+","+wifiConnPara.password+","+wifiConnPara.signal,DebugLevel.ALWAYS);
        var data = settingConnNetDialogData;
        data.operateData.SSID = wifiConnPara.SSID;
        data.operateData.secType = wifiConnPara.secType;
        data.operateData.password = wifiConnPara.password;
        data.operateData.authType = wifiConnPara.authType;
        data.operateData.signal = wifiConnPara.signal;
    }catch (ex){
        debugPrint("settingSetNetSetWifiConnPara:"+ex.message,DebugLevel.ERROR);
    }

}
function settingRewriteNetSetConnNetDialog(pageData){

}
/*******************************************************************
 name:wizardNetSetWifiStartConnNetwork
 description:启动无线网络连接
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetWifiStartConnNetwork(){
    try{
        var data = settingConnNetDialogData;
        var connState = 0;
        if(tv == false){
            data.operateData.connectState = 2;
        }else{
            model.network.setEnumIp_config(0);
            model.network.setSsid(data.operateData.SSID);
            model.network.setEnumEncryption(data.operateData.secType);
            model.network.setEncryptionPassphrase(data.operateData.password);
            model.network.setEnumAuthentication(data.operateData.authType);
            model.network.onEnumLinkChaged = wizardWifiLinkChangeCallBack;
            model.network.WirelessSet();
        }
    }catch (ex){
        debugPrint("wizardNetSetWifiStartConnNetwork:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:wizardWifiLinkChangeCallBack
 description:无线网络连接时状态改变进行修改
 input:
 output:
 return
 *******************************************************************/
function wizardWifiLinkChangeCallBack(LinkState){
    debugPrint("wizardWifiLinkChangeCallBack:LinkState="+LinkState,DebugLevel.ERROR);
    switch (LinkState){
        case 1://applying setting
        case 2://connecting
            break;
        case 0:
            var networkAvailable = model.network.getEnumNetworkAvailable();
            debugPrint("wizardWifiLinkChangeCallBack:networkAailable="+networkAvailable,DebugLevel.ERROR);
            settingNetWifiConnToResDialog();
            break;
        case 6://password error
            model.network.WirelessCancel();
            settingNetWifiConnToResDialog();
            break;
        default :
//            settingNetWifiConnToResDialog();
            break;
    }

}
/*******************************************************************
 name:wizardWifiConnNetCancle
 description:点击连接取消后的操作
 input:
 output:
 return
 *******************************************************************/
function wizardWifiConnNetCancel(){
    try{
        var data = settingConnNetDialogData;
        clearTimeout(data.operateData.wifiConnTimer);
        if(tv == true){
            model.network.WirelessCancel();
        }
        hiWebOsFrame.NetSetConnNetDialog.close();
        setSettingNetSetWifiSetPageConnState();
        hiWebOsFrame.NetSetWifiSetPage.rewriteDataOnly();
        hiWebOsFrame.NetSetWifiSetPage.hiFocus();
        hiWebOsFrame.NetSetConnNetDialog.destroy();
    }catch (ex){
        debugPrint("wizardWifiConnNetCancel:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:wizardNetSetConnNetTimeOutHandle
 description:定时器超时处理
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetConnNetTimeOutHandle(){
    debugPrint("wizardNetSetConnNetTimeOutHandle",DebugLevel.ERROR);
    if(tv == true){
        model.network.WirelessCancel();
    }
    settingNetWifiConnToResDialog();
}
/*******************************************************************
 name:settingNetWifiConnToResDialog
 description:从连接网络进入连接结果画面
 input:
 output:
 return
 *******************************************************************/
function settingNetWifiConnToResDialog(){
    try{
        var data = settingConnNetDialogData;
        clearTimeout(data.operateData.wifiConnTimer);
        debugPrint("settingNetWifiConnToResDialog!!!!");
        hiWebOsFrame.createPage('settingNetSetConnResDialogId',null, hiWebOsFrame.NetSetWifiSetPage, null,function(a){
            hiWebOsFrame.NetSetConnNetDialog.close();
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetSetConnResDialog = a;
            hiWebOsFrame.NetSetConnNetDialog.destroy();
        });
    }catch (ex){
        debugPrint("settingNetWifiConnToResDialog:"+ex.message,DebugLevel.ERROR);
    }
}

function wizardNetSetConnNetDialogOnOpen(){
    var data = settingConnNetDialogData;
    //增加根据平台不同使用不同LOADING圈的机制
    if ('APP_5890_SA' == currentPlatform_config || "opera4x" == currOperaVersion) {
        $('.wizardDialogLoadingImg').css("display", "none");
        $('.wizardDialogLoadingDiv').css("display", "block");
    }
    else {
        $('.wizardDialogLoadingImg').css("display", "block");
        $('.wizardDialogLoadingDiv').css("display", "none");
    }
    if(tv == true){
        data.operateData.wifiConnTimer = setTimeout(wizardNetSetConnNetTimeOutHandle,30000);//启动页面定时器
    }else{
        data.operateData.wifiConnTimer = setTimeout(wizardNetSetConnNetTimeOutHandle,5000);//启动页面定时器
    }
    wizardNetSetWifiStartConnNetwork();
}
function wizardNetSetConnNetDialogOnDestroy(){
    try{
        var data = settingConnNetDialogData;
        clearTimeout(data.operateData.wifiConnTimer);
        model.network.onEnumLinkChaged = null;
//        model.network.onNetworkAvailableChaged = null;
        hiWebOsFrame.NetSetConnNetDialog = null;
    }catch (ex){
        debugPrint("wizardNetSetConnNetDialogOnDestroy:"+ex.message,DebugLevel.ERROR);
    }

}