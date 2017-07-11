/**
 * Created by Admin on 14-9-12.
 */
function getSettingNetSetPinDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetPinHeadTitle",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id":"settingNetSetPinCodeTitle",
            "description":"pin code提示信息",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetPinCodeInfo",
            "description":"pin code",
            "CaEType":"div"
        },
        {
            "id":"settingNetSetPinProTitle",
            "description":"pin 连接提示信息",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetPinConnProgressBar",
            "description":"pin 连接进度",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingNetSetPinConnProgressing",
                    "description": "进度条",
                    "CaEType": "div"
                }
            ],
            "classes":{
                "normal":"settingProgressFrame_892"
            },
            "ProgressBarConfig": {
                PBProcessId: "settingNetSetPinConnProgressing",//进度条的进程id
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
            "id":"settingNetSetPinCancelBtn",
            "description":"取消连接按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootSingleNormal","focus":"wizardDialogFootSingleFocus"
            },
            "handler":{
                "aftEnterHandler":"settingNetSetPinCancelHandle"
            }
        }
    ];
    settingInitSetNetPinDialog();
    return settingNetSetPinDialogData;
}
var settingNetSetPinDialogData={
    "settingNetSetPinHeadTitle":{"Data":"PIN"},
    "settingNetSetPinCodeTitle":{"Data":"Enter the following PIN code on your router:"},
    "settingNetSetPinCodeInfo":{"Data":""},
    "settingNetSetPinProTitle":{"Data":"The configuration takes approximately 2 minutes"},
    "settingNetSetPinConnProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "settingNetSetPinCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "pinCode":"123456",
        "connPercent":10,
        "pinConnTimer":0
    },
    "langData":{
        "PIN":["PIN"],
        "Enter the following PIN code on your router:":["Enter the following PIN code on your router:"],
        "The configuration takes approximately 2 minutes":["The configuration takes approximately 2 minutes"],
        "Cancel":["Cancel"]
    },
    rewrite:"settingRewriteNetSetPinDialog"
}
/*******************************************************************
 name:settingInitSetNetPinDialog
 description:初始化PIN连接页面
 input:
 output:
 return
 *******************************************************************/
function settingInitSetNetPinDialog(){
    try{
        var data = settingNetSetPinDialogData;
        data.operateData.connPercent = 0;
        data.operateData.pinConnTimer = 0;
        if(tv == false){
            data.operateData.pinCode = "123456";
        }else{
            data.operateData.pinCode = model.network.getWpsPinCode();
        }
    }catch (ex){
        debugPrint("settingInitSetNetPinDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetSetPinDialog
 description:刷新pin连接页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetPinDialog(data){
    try{
        data.settingNetSetPinCodeInfo.Data = data.operateData.pinCode;
        data.settingNetSetPinConnProgressBar.DefaultValue = data.operateData.connPercent;
    }catch (ex){
        debugPrint("settingRewriteNetSetPinDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingNetSetPinCancelHandle
 description:取消pin连接
 input:
 output:
 return
 *******************************************************************/
function settingNetSetPinCancelHandle(){
    try{
        var data = settingNetSetPinDialogData;
        clearInterval(data.operateData.pinConnTimer);
        hiWebOsFrame.NetSetPinDialog.close();
        hiWebOsFrame.NetSetAdvanceListDialog.hiFocus();
        hiWebOsFrame.NetSetPinDialog.destroy();
    }catch (ex){
        debugPrint("settingNetSetPinCancelHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetPinTimerOutHandle(){
    var data = settingNetSetPinDialogData;
    if(data.operateData.connPercent >= 100){
        settingNetSetPinToResDialog();
    }else{
        data.operateData.connPercent = data.operateData.connPercent+1;
        hiWebOsFrame.NetSetPinDialog.rewriteDataOnly();
    }
}
function settingNetSetPinToResDialog(){
    try{
        var data = settingNetSetPinDialogData;
        clearInterval(data.operateData.pinConnTimer);
        hiWebOsFrame.createPage('settingNetSetConnResDialogId',null, null, null,function(a){
            hiWebOsFrame.NetSetPinDialog.close();
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetSetConnResDialog = a;
            hiWebOsFrame.NetSetPinDialog.destroy();
            hiWebOsFrame.NetSetAdvanceListDialog.destroy();
        });
    }catch (ex){
        debugPrint("settingNetSetPinToResDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:wizardNetSetNetTypeListDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingNetSetPinDialogEscHandle(){
    settingNetSetPinCancelHandle();
}
/*******************************************************************
 name:settingNetSetPinConnStateCallBack
 description:无线网络连接时状态改变进行修改
 input:
 output:
 return
 *******************************************************************/
function settingNetSetPinConnStateCallBack(state){
    debugPrint("settingNetSetPinConnStateCallBack:state="+state,DebugLevel.ERROR);
    switch (state){
        case 0:
            var networkAvailable = model.network.getEnumNetworkAvailable();
            debugPrint("settingNetSetPinConnStateCallBack:networkAailable="+networkAvailable,DebugLevel.ERROR);
            settingNetSetPinToResDialog();
            break;
        case 1://applying setting
        case 2://connecting
            break;
        default :
            break;
    }

}

function settingNetSetPinDialogOnOpen(){
    var data = settingNetSetPinDialogData;
    data.operateData.pinConnTimer = setInterval(settingNetSetPinTimerOutHandle,1200);
    if(tv == true){
        model.network.onEnumLinkChaged = settingNetSetPinConnStateCallBack;
        model.network.WpsConnectStart(0);
    }
}
function settingNetSetPinDialogOnDestroy(){
    try{
        var data = settingNetSetPinDialogData;
        hiWebOsFrame.NetSetPinDialog = null;
        clearInterval(data.operateData.pinConnTimer);
        if(tv == true){
            model.network.onEnumLinkChaged = null;
        }
    }catch (ex){
        debugE("settingNetSetPinDialogOnDestroy:"+ex.message)
    }

}