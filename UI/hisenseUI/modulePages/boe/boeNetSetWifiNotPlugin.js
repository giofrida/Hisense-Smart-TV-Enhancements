/**
 * Created by xuehongfeng on 14-12-29.
 */
/**
 * Created by Admin on 14-6-18.
 */
function getboeNetSetWifiNotPluginDialogData(opt){
    opt.CaE = [
        {
            "id":"boeNetSetWifiNotPluginInfo",
            "description":"结果信息",
            "CaEType":"div"
        }
    ];
    boeInitNetSetWifiNotPlugin();
    return boeNetSetWifiNotPluginDialog;
}
var boeNetSetWifiNotPluginDialog={
    "boeNetSetWifiNotPluginInfo":{"Data":"Wireless module is not inserted, insert the wireless module"},
    "operateData":{
        "wifiNotPluginTimer":0
    },
    "langData":{
        "Wireless module is not inserted, insert the wireless module":["Wireless module is not inserted, insert the wireless module"]
    },
    rewrite:"boeRewriteNetSetWifiNotPluginDialog"
}
/*******************************************************************
 name:boeInitNetSetWifiNotPlugin
 description:初始化信息展示页的operateData
 input:
 output:
 return
 *******************************************************************/
function boeInitNetSetWifiNotPlugin(){

}
/*******************************************************************
 name:settingRewriteNetSetWifiNotPluginDialog
 description:刷新信息展示页
 input:
 output:
 return
 *******************************************************************/
function boeRewriteNetSetWifiNotPluginDialog(data){
}
/*******************************************************************
 name:boeNetSetWifiNotPluginDisappear
 description:消失连接结果
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiNotPluginDisappear(){

    var data = boeNetSetWifiNotPluginDialog;
    clearTimeout(data.operateData.wifiNotPluginTimer);
    hiWebOsFrame.boe_wifi_notplugin.close();
    hiWebOsFrame.boe_wifi_notplugin.destroy();

    closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
    hiWebOsFrame.createPage('boe_bg_page_id',null, null, null,function(a){
        hiWebOsFrame.boe_bg_page_id = a;
        hiWebOsFrame.createPage('boe_network_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_network_page_id = b;
            hiWebOsFrame.boe_bg_page_id.open();
            b.open();
            b.hiFocus();
            hiWebOsFrame.boe_netbg_page_id.close();
            hiWebOsFrame.boe_netbg_page_id.destroy();


        })
    });
    //hiWebOsFrame.NetSetMainPage.hiFocus();
    //hiWebOsFrame.NetSetWifiNotPluginDialog.destroy();

}

function boeNetSetWifiNotPluginDialogOnOpen(){
    var data = boeNetSetWifiNotPluginDialog;
    //hiWebOsFrame.boe_netbg_page_id.hiFocus('navNetworkBGRightArrow');
    data.operateData.wifiNotPluginTimer = setTimeout(boeNetSetWifiNotPluginDisappear,3000);
}

function boeNetSetWifiNotPluginDialogOnDestroy(){
    var data = boeNetSetWifiNotPluginDialog;
    clearTimeout(data.operateData.wifiNotPluginTimer);
    hiWebOsFrame.boe_wifi_notplugin = null;
}
