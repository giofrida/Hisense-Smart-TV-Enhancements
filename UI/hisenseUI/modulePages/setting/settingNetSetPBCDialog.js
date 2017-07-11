/**
 * Created by Admin on 14-9-12.
 */
function getSettingNetSetPBCDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetPBCHeadTitle",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id":"settingNetSetPBCCodeTitle",
            "description":"PBC提示信息",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetPBCIcon",
            "description":"PBC img",
            "CaEType":"img"
        },
        {
            "id":"settingNetSetPBCProTitle",
            "description":"PBC 连接提示信息",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetPBCConnProgressBar",
            "description":"PBC 连接进度",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingNetSetPBCConnProgressing",
                    "description": "进度条",
                    "CaEType": "div"
                }
            ],
            "classes":{
                "normal":"settingProgressFrame_892"
            },
            "ProgressBarConfig": {
                PBProcessId: "settingNetSetPBCConnProgressing",//进度条的进程id
                ShowTextId: "",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 892,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id":"settingNetSetPBCCancelBtn",
            "description":"取消连接按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootSingleNormal","focus":"wizardDialogFootSingleFocus"
            },
            "handler":{
                "aftEnterHandler":"settingNetSetPBCCancelHandle"
            }
        }
    ];
    settingInitSetNetPBCDialog();
    return settingNetSetPBCDialogData;
}
var settingNetSetPBCDialogData={
    "settingNetSetPBCHeadTitle":{"Data":"PBC"},
    "settingNetSetPBCCodeTitle":{"Data":"Press the WPS button on your router; this is marked with WPS or the following symbol:"},
    "settingNetSetPBCIcon":{"Data":"img/PBC-WPS.png"},
    "settingNetSetPBCProTitle":{"Data":"The configuration takes approximately 2 minutes"},
    "settingNetSetPBCConnProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "settingNetSetPBCCancelBtn":{"Data":"Cancel"},
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
    rewrite:"settingRewriteNetSetPBCDialog"
}
/*******************************************************************
 name:settingInitSetNetPBCDialog
 description:初始化PIN连接页面
 input:
 output:
 return
 *******************************************************************/
function settingInitSetNetPBCDialog(){
    try{
        var data = settingNetSetPBCDialogData;
        data.operateData.connPercent = 0;
        data.operateData.PBCConnTimer = 0;
    }catch (ex){
        debugPrint("settingInitSetNetPBCDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetSetPBCDialog
 description:刷新pin连接页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetPBCDialog(data){
    try{
        data.settingNetSetPBCConnProgressBar.DefaultValue = data.operateData.connPercent;
    }catch (ex){
        debugPrint("settingRewriteNetSetPBCDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingNetSetPBCCancelHandle
 description:取消pin连接
 input:
 output:
 return
 *******************************************************************/
function settingNetSetPBCCancelHandle(){
    try{
        var data = settingNetSetPBCDialogData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.NetSetPBCDialog.close();
        hiWebOsFrame.NetSetAdvanceListDialog.hiFocus();
        hiWebOsFrame.NetSetPBCDialog.destroy();
    }catch (ex){
        debugPrint("settingNetSetPBCCancelHandle:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetPBCTimerOutHandle(){
    var data = settingNetSetPBCDialogData;
    debugPrint("settingNetSetPBCTimerOutHandle:"+data.operateData.connPercent,DebugLevel.ALWAYS);
    if(data.operateData.connPercent >= 100){
        settingNetSetPBCToResDialog();
    }else{
        data.operateData.connPercent = data.operateData.connPercent+1;
        hiWebOsFrame.NetSetPBCDialog.rewriteDataOnly();
    }
}
function settingNetSetPBCToResDialog(){
    try{
        var data = settingNetSetPBCDialogData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.createPage('settingNetSetConnResDialogId',null, null, null,function(a){
            hiWebOsFrame.NetSetPBCDialog.close();
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetSetConnResDialog = a;
            hiWebOsFrame.NetSetPBCDialog.destroy();
            hiWebOsFrame.NetSetAdvanceListDialog.destroy();
        });
    }catch (ex){
        debugPrint("settingNetSetPBCToResDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetPBCConnStateCallBack(state){
    debugPrint("settingNetSetPBCConnStateCallBack:state="+state,DebugLevel.ERROR);
    switch (state){
        case 0:
            var networkAvailable = model.network.getEnumNetworkAvailable();
            debugPrint("settingNetSetPBCConnStateCallBack:networkAailable="+networkAvailable,DebugLevel.ERROR);
            settingNetSetPBCToResDialog();
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
function settingNetSetPBCDialogEscHandle(){
    settingNetSetPBCCancelHandle();
}

function settingNetSetPBCDialogOnOpen(){
    var data = settingNetSetPBCDialogData;
    data.operateData.PBCConnTimer = setInterval(settingNetSetPBCTimerOutHandle,1200);
    if(tv == true){
        model.network.onEnumLinkChaged = settingNetSetPBCConnStateCallBack;
        model.network.WpsConnectStart(1);
    }
}
function settingNetSetPBCDialogOnDestroy(){
    try{
        var data = settingNetSetPBCDialogData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.NetSetPBCDialog = null;
        if(tv == true){
            model.network.onEnumLinkChaged = null;
        }
    }catch (ex){
        debugE("settingNetSetPBCDialogOnDestroy:"+ex.message);
    }

}