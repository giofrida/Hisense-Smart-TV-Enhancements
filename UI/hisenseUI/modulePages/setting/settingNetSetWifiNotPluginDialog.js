/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetSetWifiNotPluginDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetWifiNotPluginInfo",
            "description":"结果信息",
            "CaEType":"div"
        }
    ];
    settingInitNetSetWifiNotPlugin();
    return settingNetSetWifiNotPluginDialog;
}
var settingNetSetWifiNotPluginDialog={
    "settingNetSetWifiNotPluginInfo":{"Data":"Wireless module is not inserted, insert the wireless module"},
    "operateData":{
        "wifiNotPluginTimer":0
    },
    "langData":{
        "Wireless module is not inserted, insert the wireless module":["Wireless module is not inserted, insert the wireless module"]
    },
    rewrite:"settingRewriteNetSetWifiNotPluginDialog"
}
/*******************************************************************
 name:settingInitNetSetWifiNotPlugin
 description:初始化信息展示页的operateData
 input:
 output:
 return
 *******************************************************************/
function settingInitNetSetWifiNotPlugin(){

}
/*******************************************************************
 name:settingRewriteNetSetWifiNotPluginDialog
 description:刷新信息展示页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetWifiNotPluginDialog(data){
}
/*******************************************************************
 name:settingNetSetWifiNotPluginDisappear
 description:消失连接结果
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiNotPluginDisappear(){
    var data = settingNetSetWifiNotPluginDialog;
    hiWebOsFrame.NetSetWifiNotPluginDialog.close();
    hiWebOsFrame.NetSetMainPage.hiFocus();
    hiWebOsFrame.NetSetWifiNotPluginDialog.destroy();
}

function wizardNetSetWifiNotPluginDialogOnOpen(){
    var data = settingNetSetWifiNotPluginDialog;
    data.operateData.wifiNotPluginTimer = setTimeout(settingNetSetWifiNotPluginDisappear,3000);
}

function wizardNetSetWifiNotPluginDialogOnDestroy(){
    var data = settingNetSetWifiNotPluginDialog;
    clearTimeout(data.operateData.wifiNotPluginTimer);
    hiWebOsFrame.NetSetWifiNotPluginDialog = null;
}