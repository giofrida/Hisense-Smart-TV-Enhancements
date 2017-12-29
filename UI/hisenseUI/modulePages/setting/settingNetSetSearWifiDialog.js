/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetSetSearWifiDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetSearWifiLoadingImg",
            "description":"",
            "CaEType":"img",
            "handler":{
                "befLeftHandler":"settingNetSetSearWifiEscHandle"
            }
        }
    ];
    settingInitNetSetSearWifiDialog();
    return settingNetSetSearWifiDialogData;
}
var settingNetSetSearWifiDialogData={
    "settingNetSetSearWifiLoadingImg":{"Data":"img/loading.png"},
    "operateData":{
        "currNetworkType":1,
        "etherConnTestTimer":0,//ethernet test timer
        "etherConnTestTimes":0,//ethernet test times
        "wifiApSearchhold":0,
        "wifiApSearchTimer":0,
        "wifiSearState":0
    },
    "langData":{
    },
    rewrite:"settingRewriteNetSetSearWifiDialog"
}
/*******************************************************************
 name:settingInitNetSetSearWifiDialog
 description:初始化网络搜索数据
 input:
 output:
 return
 *******************************************************************/
function settingInitNetSetSearWifiDialog(){
    var data = settingNetSetSearWifiDialogData;
    var opData = settingNetSetSearWifiDialogData.operateData;
    opData.wifiApSearchTimer = 0;
    opData.wifiApSearchhold = 0;
    opData.etherConnTestTimes = 0;
    opData.etherConnTestTimer = 0;
    opData.wifiSearState = 0;
    opData.currNetworkType = 1;//wifi
    if(tv){
        opData.currNetworkType = model.network.getEnumNetworking();
        DBG_ALWAYS("settingInitNetSetSearWifiDialog:currNetworkType="+opData.currNetworkType);
    }
}
/*******************************************************************
 name:settingRewriteNetSetSearWifiDialog
 description:刷新网络搜索设置页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetSearWifiDialog(){

}

/*******************************************************************
 name:wizardStartSearWifi
 description:启动搜索无线网络
 input:
 output:
 return
 *******************************************************************/
function settingNetSetStartSearchWifi(){
    try{
        var data = settingNetSetSearWifiDialogData;
        if(tv == false){
            data.operateData.wifiSearState = 1;
        }else{
            var searchState = model.network.getEnumAccess_pointsSearch();/* 0:off,1:please wait,2:access points found,3:no access points found*/
            debugPrint("wizardStartSearWifi searchState"+searchState,DebugLevel.ALWAYS);
            if(searchState != 1){
                //重新开始搜索
                model.network.onEnumAccess_pointsSearchChaged = settingNetSetSearWifiStateCallBack;
                model.network.setEnumAccess_pointsSearch(1);//1:开始, 0:停止
            }
            data.operateData.wifiSearState = 1;
        }
    }catch (ex){
        debugPrint("wizardNetSetStartSearchWifi"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingNetSetSearWifiStateCallBack
 description:当搜索状态改变时查看搜索结果
 input:
 output:
 return
 *******************************************************************/
function settingNetSetSearWifiStateCallBack(searchState){
    try{
//        var searchState = model.network.getEnumAccess_pointsSearch();
        debugPrint("settingNetSetSearWifiStateCallBack searchState="+searchState,DebugLevel.ALWAYS);
        switch (searchState){
            case 1://wait
                settingNetSetSearWifiDialogData.operateData.wifiSearState = 1;
                break;
            case 2://accesspoint found
                model.network.onEnumAccess_pointsSearchChaged = null;
                settingNetSetSearWifiDialogData.operateData.wifiSearState = 2;
                settingNetSetCreateWifiSetPage();
                break;
            case 3://not found
                settingNetSetSearWifiDialogData.operateData.wifiSearState = 3;
                settingNetSetCreateWifiSetPage();
                break;
            case 4:
                model.network.onEnumAccess_pointsSearchChaged = null;
                settingNetSetSearWifiDialogData.operateData.wifiSearState = 3;
                settingNetSetCreateWifiNotPluginDialog();
                break;
            default://other
                break;
        }
    }catch (ex){
        debugPrint("settingNetSetSearWifiStateCallBack:"+ex.message,DebugLevel.ERROR);
    }
}

function settingNetSetCreateWifiNotPluginDialog(){
    debugPrint("wizardNetSetCreateWifiNotPluginPage:!!",DebugLevel.ERROR);
    var data = settingNetSetSearWifiDialogData;
    clearTimeout(data.operateData.wifiApSearchTimer);
    clearTimeout(data.operateData.wifiApSearchhold);
    hiWebOsFrame.createPage('settingNetSetWifiNotPluginDialogId',null, null, null,function(a){
        hiWebOsFrame.NetSetSearWifiDialog.close();
        hiWebOsFrame.NetSetWifiNotPluginDialog = a;
        a.open();
        a.hiFocus();
        hiWebOsFrame.NetSetSearWifiDialog.destroy();
    });
}
/*******************************************************************
 name:settingNetSetCreateWifiSetPage
 description:搜索完成后创建无线网络设置页
 input:
 output:
 return
 *******************************************************************/
function settingNetSetCreateWifiSetPage(){
    try{
        debugPrint("settingNetSetCreateWifiSetPage:createWifiSetPage!!");
        var data = settingNetSetSearWifiDialogData;
        clearTimeout(data.operateData.wifiApSearchTimer);
        clearTimeout(data.operateData.wifiApSearchhold);

        if(hiWebOsFrame.NetSetSearWifiDialog.origin.id == "settingNetSetWifiSetPageId"){
            settingInitNetSetWifiSetPage();
            hiWebOsFrame.NetSetSearWifiDialog.close();
            hiWebOsFrame.NetSetWifiSetPage.rewrite();
            hiWebOsFrame.NetSetWifiSetPage.open();
            hiWebOsFrame.NetSetWifiSetPage.hiFocus("settingNetSetWifiSetRefreshBtn");
            hiWebOsFrame.NetSetSearWifiDialog.destroy();
        }else{
            hiWebOsFrame.createPage('settingNetSetWifiSetPageId',null, null, null,function(a){
                hiWebOsFrame.NetSetSearWifiDialog.close();
                hiWebOsFrame.NetSetWifiSetPage = a;
                a.open();
                if(hiWebOsFrame.NetSetSearWifiDialog.origin.id == "settingNetSetWifiSetPageId"){
                    hiWebOsFrame.NetSetWifiSetPage.hiFocus("settingNetSetWifiSetRefreshBtn");
                }else{
                    hiWebOsFrame.NetSetSearWifiDialog.origin.hiFocus();
                }
                hiWebOsFrame.NetSetSearWifiDialog.destroy();
            });
        }
    }catch (ex){
        debugPrint("settingNetSetCreateWifiSetPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetSearTimeOutHandle(){
    try{
        debugPrint("settingNetSetSearTimeOutHandle:time out!!",DebugLevel.ERROR);
        var data = settingNetSetSearWifiDialogData;
        data.operateData.wifiSearState = 3;
        if(tv == true){
            if(model.network.getEnumAccess_pointsSearch() == 1){
                debugPrint("settingNetSetSearTimeOutHandle:searching!!",DebugLevel.ERROR);
                model.network.setEnumAccess_pointsSearch(0);
            }
        }
        settingNetSetCreateWifiSetPage();
    }catch (ex){
        debugPrint("settingNetSetSearTimeOutHandle:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetSearHoldOutHandle(){
    settingNetSetStartSearchWifi();
}
function settingNetSetTestEtherConnectedTimeout(){
    var opData = settingNetSetSearWifiDialogData.operateData;
    opData.etherConnTestTimes++;
    if(tv){
        var ethernetConnected = model.network.getEthernetConnectedState();
        DBG_ALWAYS("settingNetSetTestEtherConnectedTimeout:"+ethernetConnected);
    }else{
        var ethernetConnected = 0;
    }
    if(ethernetConnected == 1){
        clearInterval(opData.etherConnTestTimer);
        hiWebOsFrame.NetSetSearWifiDialog.close();
        hiWebOsFrame.NetSetSearWifiDialog.destroy();
        settingNetSetMainOpenEtherIpSetPage();
        hiWebOsFrame.NetSetMainPage.hiFocus();
    }else if(opData.etherConnTestTimes >= 6){
        //change to wifi
        clearInterval(opData.etherConnTestTimer);
        opData.currNetworkType = 1;
        setSettingNetSetSetCurrNetType(1);
        settingInitNetSetMainPage();
        hiWebOsFrame.NetSetMainPage.rewriteDataOnly();

        if(tv){
            opData.wifiApSearchTimer = setTimeout(settingNetSetSearTimeOutHandle,30000);
        }else{
            opData.wifiApSearchTimer = setTimeout(settingNetSetSearTimeOutHandle,5000);
        }
        opData.wifiApSearchhold = setTimeout(settingNetSetSearHoldOutHandle,2000);
    }
}
function settingNetSetSearWifiOnOpen(){
    try{
        var data = settingNetSetSearWifiDialogData;
        var opData = settingNetSetSearWifiDialogData.operateData;
        if(!!this.page.origin && this.page.origin.id == "settingNetSetMainPageId"){
            $("#settingNetSetSearWifiDialogId").attr("class","settingNetSetMainChildPageClass");
        }else{
            $("#settingNetSetSearWifiDialogId").attr("class","settingNetSetWifiSearClass");
        }
        //增加根据平台不同使用不同LOADING圈的机制
        if ('APP_5890_SA' == currentPlatform_config || "opera4x" == currOperaVersion) {
            $('.wizardDialogLoadingImg').css("display", "none");
            $('.wizardDialogLoadingDiv').css("display", "block");
        }
        else {
            $('.wizardDialogLoadingImg').css("display", "block");
            $('.wizardDialogLoadingDiv').css("display", "none");
        }
        if(opData.currNetworkType == 0){
            opData.etherConnTestTimer = setInterval(settingNetSetTestEtherConnectedTimeout,1000);
        }else{
            if(tv == true){
                data.operateData.wifiApSearchTimer = setTimeout(settingNetSetSearTimeOutHandle,15000);
            }else{
                data.operateData.wifiApSearchTimer = setTimeout(settingNetSetSearTimeOutHandle,5000);
            }
            data.operateData.wifiApSearchhold = setTimeout(settingNetSetSearHoldOutHandle,2000);
        }

    }catch (ex){
        debugPrint("wizardNetSetSearWifiDialogOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}

function settingNetSetSearWifiEscHandle(){
    try{
        var data = settingNetSetSearWifiDialogData;
        var opData = settingNetSetSearWifiDialogData.operateData;
        DBG_ALWAYS("settingNetSetSearWifiEscHandle:"+opData.currNetworkType);
        if(opData.currNetworkType == 0){
            clearInterval(opData.etherConnTestTimer);
            hiWebOsFrame.NetSetSearWifiDialog.close();
            hiWebOsFrame.NetSetSearWifiDialog.destroy();
            settingNetSetMainOpenEtherIpSetPage();
            hiWebOsFrame.NetSetMainPage.hiFocus();
        }else{
            clearTimeout(data.operateData.wifiApSearchTimer);
            clearTimeout(data.operateData.wifiApSearchhold);
            if(tv == true){
                if(model.network.getEnumAccess_pointsSearch() == 1){
                    debugPrint("settingNetSetSearWifiEscHandle:time out!!",DebugLevel.ERROR);
                    model.network.setEnumAccess_pointsSearch(0);
                }
            }
            if(hiWebOsFrame.NetSetSearWifiDialog.origin.id == "settingNetSetWifiSetPageId"){
                hiWebOsFrame.NetSetSearWifiDialog.close();
                hiWebOsFrame.NetSetWifiSetPage.hiFocus("settingNetSetWifiSetRefreshBtn");
                hiWebOsFrame.NetSetSearWifiDialog.destroy();
            }else{
                hiWebOsFrame.NetSetSearWifiDialog.close();
                hiWebOsFrame.NetSetMainPage.close();
                hiWebOsFrame.settingsFirst.hiFocus();
                hiWebOsFrame.NetSetSearWifiDialog.destroy();
                hiWebOsFrame.NetSetMainPage.destroy();
            }
        }

    }catch (ex){
        DBG_ERROR("settingNetSetSearWifiEscHandle:"+ex.message);
    }

}

function settingNetSetSearWifiOnDestroy(){
    try{
        var data = settingNetSetSearWifiDialogData;
        var opData = settingNetSetSearWifiDialogData.operateData;
        hiWebOsFrame.NetSetSearWifiDialog = null;
        if(opData.currNetworkType == 0){
            clearInterval(opData.etherConnTestTimer);
        }else{
            clearTimeout(data.operateData.wifiApSearchTimer);
            clearTimeout(data.operateData.wifiApSearchhold);
            if(tv == true){
                model.network.onEnumAccess_pointsSearchChaged = null;
                if(model.network.getEnumAccess_pointsSearch() == 1){
                    debugPrint("settingNetSetSearWifiOnDestroy:time out!!",DebugLevel.ERROR);
                    model.network.setEnumAccess_pointsSearch(0);
                }
            }
        }
    }catch (ex){
        debugPrint("wizardNetSetSearWifiDialogOnDestroy:"+ex.message,DebugLevel.ERROR);
    }

}
