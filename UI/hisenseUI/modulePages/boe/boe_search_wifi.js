/**
 * Created by Admin on 14-6-18.
 */
function getboeNetSetSearWifiDialogData(opt){
    opt.CaE = [
        {
            "id":"boeSearWifiDialogText",
            "description":"搜索无线网络提示信息",
            "CaEType":"div"
        },
        {
            "id":"boeSearWifiDialogImg",
            "description":"搜索无线网络提示图片",
            "CaEType":"img"
        }

    ];
    boeInitNetSetSearWifiDialog();
    return boeNetSetSearWifiDialogData;
}
var boeNetSetSearWifiDialogData={
    "boeSearWifiDialogText":{"Data":"Searching, please wait"},
    "boeSearWifiDialogImg":{Data:"img/loading.png"},

    "operateData":{
        "wifiApSearchTimer":0,
        "wifiApSearchholdTimer":0,
        "wifiSearState":0,

        "boeSearWifiDialogText":{"Data":"Searching, please wait"},
        "boeSearWifiDialogImg":{Data:"img/network/loading.png"}
    },
    "langData":{
        "Searching, please wait":["Searching, please wait"]
    },
    rewrite:"boeRewriteNetSetSearWifiDialog"
}
/*******************************************************************
 name:boeInitNetSetSearWifiDialog
 description:初始化网络搜索数据
 input:
 output:
 return
 *******************************************************************/
function boeInitNetSetSearWifiDialog(){
    var data = boeNetSetSearWifiDialogData;
    data.operateData.wifiApSearchTimer = 0;
    data.operateData.wifiApSearchholdTimer = 0;
    data.operateData.wifiSearState = 0;
}
/*******************************************************************
 name:boeRewriteNetSetSearWifiDialog
 description:刷新网络搜索设置页
 input:
 output:
 return
 *******************************************************************/
function boeRewriteNetSetSearWifiDialog(){

}

/*******************************************************************
 name:wizardStartSearWifi
 description:启动搜索无线网络
 input:
 output:
 return
 *******************************************************************/
function boeNetSetStartSearchWifi(){
    try{
        var data = boeNetSetSearWifiDialogData;
        if(tv == false){
            data.operateData.wifiSearState = 1;
        }else{

            var searchState = model.network.getEnumAccess_pointsSearch();/* 0:off,1:please wait,2:access points found,3:no access points found*/

            if(searchState != 1){
                //重新开始搜索
                model.network.onEnumAccess_pointsSearchChaged = boeNetSetSearWifiStateCallBack;
                model.network.setEnumAccess_pointsSearch(1);//1:开始, 0:停止
            }
            data.operateData.wifiSearState = 1;
        }
    }catch (ex){
        debugPrint("wizardStartSearWifi"+ex.message,DebugLevel.ERROR);
    }
}

/*******************************************************************
 name:boeNetSetSearWifiStateCallBack
 description:当搜索状态改变时查看搜索结果
 input:
 output:
 return
 *******************************************************************/
function boeNetSetSearWifiStateCallBack(searchState){
    try{
//        var searchState = model.network.getEnumAccess_pointsSearch();
        debugPrint("boeNetSetSearWifiStateCallBack searchState="+ searchState);


            switch (searchState) {
                case 1://wait
                    boeNetSetSearWifiDialogData.operateData.wifiSearState = 1;
                    break;
                case 2://accesspoint found
                    boeNetSetSearWifiDialogData.operateData.wifiSearState = 2;
                    boeNetworkSetCreateWifiSetPage();
                    break;
                case 3://not found
                    boeNetSetSearWifiDialogData.operateData.wifiSearState = 2;
                    boeNetworkSetCreateWifiSetPage();
                    break;
                case 4:
                    debugPrint("boeNetSetSearWifiStateCallBack searchState=" + searchState);

                    boeNetSetSearWifiDialogData.operateData.wifiSearState = 2;
                    boeNetSetCreateWifiNotPluginDialog();
                    break;
                default://other
                    boeNetSetSearWifiDialogData.operateData.wifiSearState = 0;
                    boeNetworkSetCreateWifiSetPage();
                    break;
            }

    }catch (ex){
        debugPrint("boeNetSetSearWifiStateCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:boeNetworkSetCreateWifiSetPage
 description:搜索完成后创建无线网络设置页
 input:
 output:
 return
 *******************************************************************/
function boeNetworkSetCreateWifiSetPage(){
    try{
        debugPrint("boeNetworkSetCreateWifiSetPage:createWifiSetPage!!");
        var data = boeNetSetSearWifiDialogData;
        clearTimeout(data.operateData.wifiApSearchTimer);
        clearTimeout(data.operateData.wifiApSearchholdTimer);
        hiWebOsFrame.createPage('boe_NetworkWifiSetPage',null, hiWebOsFrame.boe_search_wifi, null,function(a){//boe_NetworkWifiSetPage settingNetSetWifiSetPageId
            hiWebOsFrame.boe_search_wifi.close();
            hiWebOsFrame.boe_NetworkWifiSetPage = a;
            a.open();
//            a.hiFocus();  //可能根据不同情况focus到不同对象上，这里不再hiFocus, hiFocus放在了onOpen中
            hiWebOsFrame.boe_search_wifi.destroy();
        });
    }catch (ex){
        debugPrint("boeNetworkSetCreateWifiSetPage:"+ex.message,DebugLevel.ERROR);
    }

}
function boeNetSetCreateWifiNotPluginDialog(){
    try{
        debugPrint("boeNetworkSetCreateWifiSetPage:createWifiSetPage!!");
        var data = boeNetSetSearWifiDialogData;
        clearTimeout(data.operateData.wifiApSearchTimer);
        clearTimeout(data.operateData.wifiApSearchholdTimer);
        hiWebOsFrame.createPage('boe_wifi_notplugin',null, null, null,function(a){//boe_NetworkWifiSetPage settingNetSetWifiSetPageId
            hiWebOsFrame.boe_search_wifi.close();
            hiWebOsFrame.boe_wifi_notplugin = a;
            a.open();
            a.hiFocus();
            hiWebOsFrame.boe_search_wifi.destroy();
        });
    }catch (ex){
        debugPrint("boeNetworkSetCreateWifiSetPage:"+ex.message,DebugLevel.ERROR);
    }

}


function boeNetworkSearTimeOutHandler(){
    try{
        debugPrint("boeNetworkSearTimeOutHandler:time out!!",DebugLevel.ERROR);
        if(tv == true){

            if(model.network.getEnumAccess_pointsSearch() == 1){
                model.network.setEnumAccess_pointsSearch(0);
            }
        }
        boeNetworkSetCreateWifiSetPage();
    }catch (ex){
        debugPrint("boeNetworkSearTimeOutHandler:"+ex.message,DebugLevel.ERROR);
    }

}
function boeNetworkSearHoldOutHandler()
{
    try{
        //debugPrint("boeNetworkSearTimeOutHandler:time out!!",DebugLevel.ERROR);
        if(tv == true){

            boeNetSetStartSearchWifi();
        }

    }catch (ex){
        debugPrint("boeNetworkSearTimeOutHandler:"+ex.message,DebugLevel.ERROR);
    }
}
function boeNetSetSearWifiDialogOnOpen(){
    try{

        var data = boeNetSetSearWifiDialogData;
        if(tv == true) {
            if ('APP_5890_SA' == currentPlatform_config) {
                $('.boeDialogLoadingImg').css("display", "none");
                $('.boeDialogLoadingDiv').css("display", "block");
            }
            else {
                $('.boeDialogLoadingImg').css("display", "block");
                $('.boeDialogLoadingDiv').css("display", "none");
            }
        }
        else
        {
            $('.boeDialogLoadingImg').css("display", "block");
            $('.boeDialogLoadingDiv').css("display", "none");
        }

        if (hiWebOsFrame.getCurrentArea() == "COL") {   //哥伦比亚页面少，要额外延时
            data.operateData.wifiApSearchTimer = setTimeout(boeNetworkSearTimeOutHandler,17000);
            setTimeout(function() {
                if (!model.network.getEnumNetworking()) {
                    model.network.setEnumNetworking(1);
                }
            }, 1500);
            data.operateData.wifiApSearchholdTimer = setTimeout(boeNetworkSearHoldOutHandler,4000);
        }
        else {
            data.operateData.wifiApSearchTimer = setTimeout(boeNetworkSearTimeOutHandler,15000);
            data.operateData.wifiApSearchholdTimer = setTimeout(boeNetworkSearHoldOutHandler,2000);
        }

        //boeNetSetStartSearchWifi();
    }catch (ex){

    }

}
function boeNetSetSearWifiDialogOnDestroy(){
    try{
        var data = boeNetSetSearWifiDialogData;
        clearTimeout(data.operateData.wifiApSearchTimer);
        clearTimeout(data.operateData.wifiApSearchholdTimer);
        model.network.onEnumAccess_pointsSearchChaged = null;
        hiWebOsFrame.boe_search_wifi = null;
    }catch (ex){

    }

}


function boeNetWifiSearchEscHandle(){

    try{
        var data = boeNetSetSearWifiDialogData;
        clearTimeout(data.operateData.wifiApSearchTimer);
        clearTimeout(data.operateData.wifiApSearchholdTimer);
        if(tv == true){
            if(model.network.getEnumAccess_pointsSearch() == 1){
                debugPrint("boeNetSetSearSearWifiCancelHandle:time out!!",DebugLevel.ERROR);
                model.network.setEnumAccess_pointsSearch(0);
            }
        }
        hiWebOsFrame.boe_search_wifi.close();
        hiWebOsFrame.boe_search_wifi.destroy();
            hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
                hiWebOsFrame.boe_disclaimer_page_id = b;
                b.open();
                b.hiFocus();
                hiWebOsFrame.boe_netbg_page_id.destroy();
            })
    }catch (ex){

    }
}