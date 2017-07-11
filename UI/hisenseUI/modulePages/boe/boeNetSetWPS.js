/**
 * Created by xuehongfeng on 2015/11/16.
 */
function getboeNetSetWPSPageData(opt){
    opt.CaE = [
        {
            "id":"boeNetSetWPSCodeTitle",
            "description":"PBC提示信息",
            "CaEType":"span"
        },
        {
            "id":"boeNetSetWPSIcon",
            "description":"PBC img",
            "CaEType":"img"
        },
        {
            "id":"boeNetSetWPSProTitle",
            "description":"PBC 连接提示信息",
            "CaEType":"span"
        },
        {
            "id":"boeNetSetWPSConnProgressBar",
            "description":"PBC 连接进度",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "boeNetSetWPSConnProgressing",
                    "description": "进度条",
                    "CaEType": "div"
                }
            ],
            "classes":{
                "normal":"boeWPSProgressFrame"
            },
            "ProgressBarConfig": {
                PBProcessId: "boeNetSetWPSConnProgressing",//进度条的进程id
                ShowTextId: "",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 840,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id":"boeNetSetWPSCancelBtn",
            "description":"取消连接按钮",
            "CaEType":"div",
            "classes":{
                "normal":"boeWifiSetWPSCancleBtnNormal","focus":"boeWifiSetWPSCancleBtnFocus"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetWPSCancelHandle",
                "befRightHandler":"boeWifiSetWPSPageTonNextPage"
            }
        }
    ];
    boeInitSetNetWPSDialog();
    return boeNetSetWPSPageData;
}
var boeNetSetWPSPageData={
    //"settingNetSetPBCHeadTitle":{"Data":"PBC"},
    "boeNetSetWPSCodeTitle":{"Data":"Press the WPS button on your router; this is marked with WPS or the following symbol:"},
    "boeNetSetWPSIcon":{"Data":"img/PBC-WPS.png"},
    "boeNetSetWPSProTitle":{"Data":"The configuration takes approximately 2 minutes"},
    "boeNetSetWPSConnProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "boeNetSetWPSCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "connPercent":10,
        "PBCConnTimer":0
    },
    "langData":{
        "PBC":["PBC"],
        "Press the WPS button on your router; this is marked with WPS or the following symbol:":["Press the WPS button on your router; this is marked with WPS or the following symbol:"],
        "The configuration takes approximately 2 minutes":["The configuration takes approximately 2 minutes"],
        "Cancel":["Cancel"]
    },
    rewrite:"boeRewriteNetSetWPS"
}
/*******************************************************************
 name:boeInitSetNetWPSDialog
 description:初始化PIN连接页面
 input:
 output:
 return
 *******************************************************************/
function boeInitSetNetWPSDialog(){
    try{
        var data = boeNetSetWPSPageData;
        data.operateData.connPercent = 0;
        data.operateData.PBCConnTimer = 0;
    }catch (ex){
        debugPrint("boeInitSetNetWPSDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function boeRewriteNetSetWPS(data){
    try{
        data.boeNetSetWPSConnProgressBar.DefaultValue = data.operateData.connPercent;
    }catch (ex){
        debugPrint("boeRewriteNetSetWPS:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:boeNetSetWPSCancelHandle
 description:取消pin连接
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWPSCancelHandle(){
    try{
        var data = boeNetSetWPSPageData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.boe_NetworkWifiWPS.close();
        hiWebOsFrame.boe_NetworkWifiSetPage.open();
        hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus();
        hiWebOsFrame.boe_NetworkWifiWPS.destroy();
    }catch (ex){
        debugPrint("boeNetSetWPSCancelHandle:"+ex.message,DebugLevel.ERROR);
    }

}
function boeNetSetWPSTimerOutHandle(){
    var data = boeNetSetWPSPageData;
    debugPrint("boeNetSetWPSTimerOutHandle:"+data.operateData.connPercent,DebugLevel.ALWAYS);
    if(data.operateData.connPercent >= 100){
        boeNetSetWPSToResDialog();
    }else{
        data.operateData.connPercent = data.operateData.connPercent+1;
        hiWebOsFrame.boe_NetworkWifiWPS.rewriteDataOnly();
    }
}
function boeNetSetWPSToResDialog(){
    try{
        var data = boeNetSetWPSPageData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.boe_netbg_page_id.hiBlur();
        hiWebOsFrame.createPage('boe_NetworkConnResDialog',null, null, null,function(a){
            hiWebOsFrame.boe_NetworkWifiWPS.close();
            a.open();
            a.hiFocus();
            hiWebOsFrame.boe_NetworkConnResDialog = a;
            hiWebOsFrame.boe_NetworkWifiWPS.destroy();
        });
    }catch (ex){
        debugPrint("boeNetSetWPSToResDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function boeNetSetWPSConnStateCallBack(state){
    debugPrint("boeNetSetWPSConnStateCallBack:state="+state,DebugLevel.ERROR);
    switch (state){
        case 0:
            var networkAvailable = model.network.getEnumNetworkAvailable();
            debugPrint("boeNetSetWPSConnStateCallBack:networkAailable="+networkAvailable,DebugLevel.ERROR);
            boeNetSetWPSToResDialog();
            break;
        case 1://applying setting
        case 2://connecting
            break;
        default :
            break;
    }
}
/*******************************************************************
 name:wizardNetSetNetTypeListDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWPSEscHandle(){
    boeNetSetWPSCancelHandle();
}
function boeNetSetWPSPageOnClose(){
    var data = boeNetSetWPSPageData;
    data.operateData.PBCConnTimer = setInterval(boeNetSetWPSTimerOutHandle,1200);
    if(tv == true){
        model.network.onEnumLinkChaged = boeNetSetWPSConnStateCallBack;
        model.network.WpsConnectStart(1);
    }
}
function boeWifiSetWPSPageTonNextPage(){
    hiWebOsFrame.boe_netbg_page_id.destroy();
    hiWebOsFrame.boe_NetworkWifiWPS.destroy();
    hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_complete_page_id = b;
        b.open();
        b.hiFocus();
    });
}
function boeNetSetWPSPageOnOpen(){
    var data = boeNetSetWPSPageData;
    data.operateData.PBCConnTimer = setInterval(boeNetSetWPSTimerOutHandle,1200);
    if(tv == true){
        model.network.onEnumLinkChaged = boeNetSetWPSConnStateCallBack;
        model.network.WpsConnectStart(1);
    }
}
function boeNetSetWPSPageOnDestroy(){
    try{
        var data = boeNetSetWPSPageData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.boe_NetworkWifiWPS = null;
        if(tv == true){
            model.network.onEnumLinkChaged = null;
        }
    }catch (ex){
        debugE("boe_NetworkWifiWPSOnDestroy:"+ex.message);
    }

}
