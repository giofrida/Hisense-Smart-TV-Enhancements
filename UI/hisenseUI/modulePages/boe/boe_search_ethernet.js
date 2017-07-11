/**
 * Created by xuehongfeng on 2015/11/26.
 */

function getboeNetSetSearEtherentDialogData(opt){
    opt.CaE = [
        {
            "id":"boeSearEthernetDialogText",
            "description":"搜索无线网络提示信息",
            "CaEType":"div"
        },
        {
            "id":"boeSearEthernetDialogImg",
            "description":"搜索无线网络提示图片",
            "CaEType":"img"
        }

    ];
    boeInitNetSetSearEthernetDialog();
    return boeNetSetSearEthernetDialogData;
}
var boeNetSetSearEthernetDialogData={
    "boeSearEthernetDialogText":{"Data":"Searching, please wait"},
    "boeSearEthernetDialogImg":{Data:"img/loading.png"},

    "operateData":{
        "ethSearchTimer":0,
        //"ethSearState":0,
        "Interval":0,
        "EthernetSearchholdTimer":0,
        "wifiSearState":0,

        "boeSearEthernetDialogText":{"Data":"Searching, please wait"},
        "boeSearEthernetDialogImg":{Data:"img/network/loading.png"}
    },
    "langData":{
        "Searching, please wait":["Searching, please wait"]
    },
    rewrite:"boeRewriteNetSetSearEthernetDialog"
}
/*******************************************************************
 name:boeInitNetSetSearWifiDialog
 description:初始化网络搜索数据
 input:
 output:
 return
 *******************************************************************/
function boeInitNetSetSearEthernetDialog(){
    var data = boeNetSetSearEthernetDialogData;
    //data.operateData.wifiApSearchTimer = 0;
    data.operateData.EthernetSearchholdTimer = 0;
    data.operateData.wifiSearState = 0;
}
/*******************************************************************
 name:boeRewriteNetSetSearEthernetDialog
 description:刷新网络搜索设置页
 input:
 output:
 return
 *******************************************************************/
function boeRewriteNetSetSearEthernetDialog(){

}

/*******************************************************************
 name:wizardStartSearWifi
 description:启动搜索无线网络
 input:
 output:
 return
 *******************************************************************/
//function boeNetSetStartSearchWifi(){
//    try{
//        var data = boeNetSetSearEthernetDialogData;
//        if(tv == false){
//            data.operateData.wifiSearState = 1;
//        }else{
//
//            var searchState = model.network.getEnumAccess_pointsSearch();/* 0:off,1:please wait,2:access points found,3:no access points found*/
//
//            if(searchState != 1){
//                //重新开始搜索
//                model.network.onEnumAccess_pointsSearchChaged = boeNetSetSearWifiStateCallBack;
//                model.network.setEnumAccess_pointsSearch(1);//1:开始, 0:停止
//            }
//            data.operateData.wifiSearState = 1;
//        }
//    }catch (ex){
//        debugPrint("wizardStartSearWifi"+ex.message,DebugLevel.ERROR);
//    }
//}

/*******************************************************************
 name:boeNetSetSearWifiStateCallBack
 description:当搜索状态改变时查看搜索结果
 input:
 output:
 return
 *******************************************************************/
//function boeNetSetSearWifiStateCallBack(searchState){
//    try{
////        var searchState = model.network.getEnumAccess_pointsSearch();
//        debugPrint("boeNetSetSearWifiStateCallBack searchState="+ searchState);
//
//
//        switch (searchState) {
//            case 1://wait
//                boeNetSetSearEthernetDialogData.operateData.wifiSearState = 1;
//                break;
//            case 2://accesspoint found
//                boeNetSetSearEthernetDialogData.operateData.wifiSearState = 2;
//                boeNetworkSetCreateWifiSetPage();
//                break;
//            case 3://not found
//                boeNetSetSearEthernetDialogData.operateData.wifiSearState = 2;
//                boeNetworkSetCreateWifiSetPage();
//                break;
//            case 4:
//                debugPrint("boeNetSetSearWifiStateCallBack searchState=" + searchState);
//
//                boeNetSetSearEthernetDialogData.operateData.wifiSearState = 2;
//                boeNetSetCreateWifiNotPluginDialog();
//                break;
//            default://other
//                boeNetSetSearEthernetDialogData.operateData.wifiSearState = 0;
//                boeNetworkSetCreateWifiSetPage();
//                break;
//        }
//
//    }catch (ex){
//        debugPrint("boeNetSetSearWifiStateCallBack:"+ex.message,DebugLevel.ERROR);
//    }
//}
/*******************************************************************
 name:boeNetworkSetCreateWifiSetPage
 description:搜索完成后创建无线网络设置页
 input:
 output:
 return
 *******************************************************************/
function boeNetworkSetCreateEtherentResultPage(){
    try{
        debugPrint("boeNetworkSetCreateEtherentResultPage:createEthernetPage!!");
        var data = boeNetSetSearEthernetDialogData;
        clearTimeout(data.operateData.ethSearchTimer);
        clearTimeout(data.operateData.EthernetSearchholdTimer);
        hiWebOsFrame.boe_search_ethernet.destroy();
        hiWebOsFrame.createPage('boe_ethernet_result',null, null, null,function(a){//boe_NetworkWifiSetPage settingNetSetWifiSetPageId
            hiWebOsFrame.boe_ethernet_result = a;
            a.open();
            a.hiFocus();
        });
    }catch (ex){
        debugPrint("boeNetworkSetCreateEtherentResultPage:"+ex.message,DebugLevel.ERROR);
    }

}
//function boeNetSetCreateWifiNotPluginDialog(){
//    try{
//        debugPrint("boeNetworkSetCreateWifiSetPage:createWifiSetPage!!");
//        var data = boeNetSetSearEthernetDialogData;
//        //clearTimeout(data.operateData.wifiApSearchTimer);
//        clearTimeout(data.operateData.EthernetSearchholdTimer);
//        hiWebOsFrame.createPage('boe_wifi_notplugin',null, null, null,function(a){//boe_NetworkWifiSetPage settingNetSetWifiSetPageId
//            hiWebOsFrame.boe_search_wifi.close();
//            hiWebOsFrame.boe_wifi_notplugin = a;
//            a.open();
//            a.hiFocus();
//            hiWebOsFrame.boe_search_wifi.destroy();
//        });
//    }catch (ex){
//        debugPrint("boeNetworkSetCreateWifiSetPage:"+ex.message,DebugLevel.ERROR);
//    }
//
//}


//function boeNetworkSearTimeOutHandler(){
//    try{
//        debugPrint("boeNetworkSearTimeOutHandler:time out!!",DebugLevel.ERROR);
//        if(tv == true){
//
//            if(model.network.getEnumAccess_pointsSearch() == 1){
//                model.network.setEnumAccess_pointsSearch(0);
//            }
//        }
//        boeNetworkSetCreateWifiSetPage();
//    }catch (ex){
//        debugPrint("boeNetworkSearTimeOutHandler:"+ex.message,DebugLevel.ERROR);
//    }
//
//}
//function boeNetworkNetSetEtherSetStateCallBack(state){
//    var data=boeNetSetSearEthernetDialogData;
//    debugPrint("navNetworkNetSetEtherSetStateCallBack:"+state,DebugLevel.ALWAYS);
//    switch (state){
//        case 3://idle
//            data.operateData.ethSearState = 1;
//            boeNetworkSetCreateEtherentResultPage();
//            break;
//        case 4://update
//            break;
//        case 9://not available
//            break;
//        default :
//            break;
//    }
//}
function getEthernetResult(){

    var ethSearState = model.network.getEnumNetworkAvailable();
    debugPrint("[xuehongfeng] ethSearState interval is"+ethSearState,DebugLevel.ERROR);
    if(ethSearState == 1)
    {
        boeNetworkSetCreateEtherentResultPage();
    }
}
function boeNetSetStartSearchEthernet(){
    var data = boeNetSetSearEthernetDialogData;
    try{
        if(tv == false){
            boeNetworkSetCreateEtherentResultPage();
        }else{

            var ethSearState = model.network.getEnumNetworkAvailable();
            debugPrint("[xuehongfeng] ethSearState is"+ethSearState,DebugLevel.ERROR);
            if(ethSearState != 1){
                //重新开始搜索
                data.operateData.Interval = setInterval("getEthernetResult()",1000);
            }else{
                boeNetworkSetCreateEtherentResultPage();
            }
        }
    }catch (ex){
        debugPrint("wizardStartSearWifi"+ex.message,DebugLevel.ERROR);
    }
}
function boeEthernetSearHoldOutHandler()
{
    try{
        debugPrint("boeNetworkSearTimeOutHandler:time out!!",DebugLevel.ERROR);
        boeNetSetStartSearchEthernet();
    }catch (ex){
        debugPrint("boeEthernetSearHoldOutHandler:"+ex.message,DebugLevel.ERROR);
    }
}
function boeNetworkSearEthTimeOutHandler(){
    var data = boeNetSetSearEthernetDialogData;
    try{
        debugPrint("boeNetworkSearTimeOutHandler:time out!!",DebugLevel.ERROR);
        clearInterval(data.operateData.Interval);
        boeNetworkSetCreateEtherentResultPage();
    }catch (ex){
        debugPrint("boeNetworkSearTimeOutHandler:"+ex.message,DebugLevel.ERROR);
    }

}
function boeNetSetSearEthernetDialogOnOpen(){
    try{

        var data = boeNetSetSearEthernetDialogData;
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
        data.operateData.ethSearchTimer = setTimeout(boeNetworkSearEthTimeOutHandler,10000);
        data.operateData.EthernetSearchholdTimer = setTimeout(boeEthernetSearHoldOutHandler,2000);
    }catch (ex){

    }

}
function boeNetSetSearEthernetDialogOnDestroy(){
    try{
        var data = boeNetSetSearEthernetDialogData;
        clearInterval(data.operateData.Interval);
        clearTimeout(data.operateData.ethSearchTimer);
        clearTimeout(data.operateData.EthernetSearchholdTimer);
        //model.network.onEnumAccess_pointsSearchChaged = null;
        hiWebOsFrame.boe_search_ethernet = null;
    }catch (ex){

    }

}


function boeNetEthernetSearchEscHandle(){

    try{
        var data = boeNetSetSearEthernetDialogData;
        //clearTimeout(data.operateData.wifiApSearchTimer);
        clearTimeout(data.operateData.EthernetSearchholdTimer);
        //if(tv == true){
        //    if(model.network.getEnumAccess_pointsSearch() == 1){
        //        debugPrint("boeNetSetSearSearWifiCancelHandle:time out!!",DebugLevel.ERROR);
        //        model.network.setEnumAccess_pointsSearch(0);
        //    }
        //}
        hiWebOsFrame.boe_search_ethernet.destroy();
        hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_disclaimer_page_id = b;
            b.open();
            b.hiFocus();
            hiWebOsFrame.boe_netbg_page_id.destroy();
        })
    }catch (ex){

    }
}
