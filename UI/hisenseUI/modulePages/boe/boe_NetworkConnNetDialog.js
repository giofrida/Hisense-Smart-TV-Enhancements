/**
 * Created by Admin on 14-6-18.
 */
function getboeNetSetConnNetDialogData(opt){
    opt.CaE = [
        {
            "id":"boeNetworkLoadingDialogText",
            "description":"连接网络提示信息",
            "CaEType":"div",
            "classes":{
                "normal":"boeDialogLoadingText",
                "focus":"boeDialogLoadingText"
            }
        },
        {
            "id":"boeNetworkLoadingDialogImg",
            "description":"搜索无线网络提示图片",
            "CaEType":"img"
        }
    ];

    return boeConnNetDialogData;
}
var boeConnNetDialogData={
    "boeNetworkLoadingDialogText":{"Data":"Connecting, please wait"},
//    "settingConnNetCancel":{"Data":"Cancel"},
    "operateData":{
        "connectState":0, //0:connected,1:applying setting,2:connecting,3:login fail,4:access point not fond,5:not connected,6:general error
        "SSID":"",
        "secType":"",
        "authType":"",
        "password":"",
        "wifiConnTimer":""
    },
    "langData":{
        "Connecting, please wait":[],
        "Cancel":["Cancel"]
    },
    rewrite:"boeRefreshNetSetConnNetDialog"
}
function boeSetNetSetWifiConnPara(wifiConnPara){
    try{
        debugPrint("boeSetNetSetWifiConnPara:"+wifiConnPara.SSID+","+wifiConnPara.secType+","+","+wifiConnPara.authType+","+wifiConnPara.password,DebugLevel.ALWAYS);
        var data = boeConnNetDialogData;
        data.operateData.SSID = wifiConnPara.SSID;
        data.operateData.secType = wifiConnPara.secType;
        data.operateData.password = wifiConnPara.password;
        data.operateData.authType = wifiConnPara.authType;
    }catch (ex){
        debugPrint("boeSetNetSetWifiConnPara:"+ex.message,DebugLevel.ERROR);
    }

}
function boeRefreshNetSetConnNetDialog(pageData){

}
/*******************************************************************
 name:boeNetSetWifiStartConnNetwork
 description:启动无线网络连接
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiStartConnNetwork(){
    try{
        var data = boeConnNetDialogData;
        var connState = 0;
        if(tv == false){
            data.operateData.connectState = 2;
        }else{
//            model.network.setSsid(data.operateData.SSID);
//            model.network.setEnumEncryption(data.operateData.secType);
//            model.network.setEncryptionPassphrase(data.operateData.password);
//            if(!data.operateData.authType){
//                debugPrint("boeNetSetWifiStartConnNetwork:"+data.operateData.authType,DebugLevel.ERROR);
//                data.operateData.authType = 17;
//            }
//            model.network.setEnumAuthentication(data.operateData.authType);
//            model.network.onEnumLinkChaged = boeWifiLinkChangeCallBack;
////            model.network.setEnumIp_config(0);//ip地址获取方式0:自动, 1：手动
//            model.network.WirelessSet();



            model.network.setEnumIp_config(0);
            model.network.setSsid(data.operateData.SSID);
            model.network.setEnumEncryption(data.operateData.secType);
            model.network.setEncryptionPassphrase(data.operateData.password);
            model.network.setEnumAuthentication(data.operateData.authType);
            model.network.onEnumLinkChaged = boeWifiLinkChangeCallBack;
            model.network.WirelessSet();
        }
    }catch (ex){
        debugPrint("boeNetSetWifiStartConnNetwork:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:boeWifiLinkChangeCallBack
 description:无线网络连接时状态改变进行修改
 input:
 output:
 return
 *******************************************************************/
function boeWifiLinkChangeCallBack(LinkState){
    debugPrint("boeWifiLinkChangeCallBack:LinkState="+LinkState,DebugLevel.ERROR);
    switch (LinkState){
        case 1://applying setting
        case 2://connecting
            break;
        case 0:
            var networkAvailable = model.network.getEnumNetworkAvailable();
            debugPrint("boeWifiLinkChangeCallBack:networkAailable="+networkAvailable,DebugLevel.ERROR);
            boeWifiConnToResDialog();
            break;
        case 6://password error
            model.network.WirelessCancel();
            boeWifiConnToResDialog();
            break;
        default :
//            boeWifiConnToResDialog();


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
    var data = boeConnNetDialogData;
    clearTimeout(data.operateData.wifiConnTimer);
    hiWebOsFrame.NetSetConnNetDialog.close();
    hiWebOsFrame.NetSetWifiSetPage.hiFocus();
    hiWebOsFrame.NetSetConnNetDialog.destroy();
}
/*******************************************************************
 name:boeNetSetConnNetTimeOutHandle
 description:定时器超时处理
 input:
 output:
 return
 *******************************************************************/
function boeNetSetConnNetTimeOutHandle(){
    debugPrint("boeNetSetConnNetTimeOutHandle",DebugLevel.ERROR);
    boeWifiConnToResDialog();
}
/*******************************************************************
 name:boeWifiConnToResDialog
 description:从连接网络进入连接结果画面
 input:
 output:
 return
 *******************************************************************/
function boeWifiConnToResDialog(){
    try{
        var data = boeConnNetDialogData;
        clearTimeout(data.operateData.wifiConnTimer);
        debugPrint("boeWifiConnToResDialog!!!!");
        hiWebOsFrame.createPage('boe_NetworkConnResDialog',null, hiWebOsFrame.boe_NetworkConnNetDialog.origin, null,function(a){
            hiWebOsFrame.boe_NetworkConnNetDialog.close();
            hiWebOsFrame.boe_NetworkConnResDialog = a;
            a.open();
            a.hiFocus();

            hiWebOsFrame.boe_NetworkConnNetDialog.destroy();
        });
    }catch (ex){
        debugPrint("boeWifiConnToResDialog:"+ex.message,DebugLevel.ERROR);
    }
}

function boeNetSetConnNetDialogOnOpen(){
    var data = boeConnNetDialogData;
    //DBG_ALWAYS(currentPlatform_config);
    if ('APP_5890_SA' == currentPlatform_config) {
        $('.boeDialogLoadingImg').css("display", "none");
        $('.boeDialogLoadingDiv').css("display", "block");
    }
    else {
        $('.boeDialogLoadingImg').css("display", "block");
        $('.boeDialogLoadingDiv').css("display", "none");
    }
//    data.operateData.wifiConnTimer = setTimeout(boeNetSetConnNetTimeOutHandle,50000);//启动页面定时器
    data.operateData.wifiConnTimer = setTimeout(boeNetSetConnNetTimeOutHandle,30000);//启动页面定时器
    boeNetSetWifiStartConnNetwork();
}
function boeNetSetConnNetDialogOnDestroy(){
    try{
        var data = boeConnNetDialogData;
        clearTimeout(data.operateData.wifiConnTimer);
        model.network.onEnumLinkChaged = null;
//        model.network.onNetworkAvailableChaged = null;
        hiWebOsFrame.boe_NetworkConnNetDialog = null;
    }catch (ex){
        debugPrint("wizardNetSetConnNetDialogOnDestroy:"+ex.message,DebugLevel.ERROR);
    }

}
function boeWifiConnNetCancel(){
    var data = boeConnNetDialogData;
    clearTimeout(data.operateData.wifiConnTimer);
    hiWebOsFrame.boe_NetworkConnNetDialog.close();
    hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus();
    hiWebOsFrame.boe_NetworkConnNetDialog.destroy();
}