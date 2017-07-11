/**
 * Created by Admin on 14-9-12.
 */
function getSettingNetWakeUpByWifiDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetWakeUpByWifiHeadText",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id": "settingNetWakeUpByWifiSwitchUl",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingWakeUpByWifiFlag"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingNetWakeUpByWifiSelectImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/selectedBall.png",
                        "closeImg":"img/unselectedBall.png"
                    },
                    "classes":{
                        "normal":"wizardListSelectImg"
                    }
                },
                {
                    "id": "settingNetWakeUpByWifiName",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":"wizardListSelectTxt"
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingNetWakeUpByWifiSelectImg", "settingNetWakeUpByWifiName"]
            }
        }
    ];
    settingInitNetWakeUpByWifiDialog();
    return settingNetWakeUpByWifiDialogData;
}
var settingNetWakeUpByWifiDialogData={
    "settingNetWakeUpByWifiHeadText":{"Data":"Wake Up By Wi-Fi"},
    "settingNetWakeUpByWifiSwitchUl":{
        "Data":[
            {
                "settingNetWakeUpByWifiSelectImg":{"Data":true},
                "settingNetWakeUpByWifiName":{"Data":"On"}
            },
            {
                "settingNetWakeUpByWifiSelectImg":{"Data":false},
                "settingNetWakeUpByWifiName":{"Data":"Off"}
            }

        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currWakeUpByWifiFlag":0
    },
    "langData":{

    },
    rewrite:"settingRewriteNetWakeUpByWifiDialog"
}
/*******************************************************************
 name:settingRewriteNetWakeUpByWifiDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitNetWakeUpByWifiDialog(){
    try{
        var data = settingNetWakeUpByWifiDialogData;
        if(tv == false){
            data.operateData.currWakeUpByWifiFlag = 0;
        }else{
            data.operateData.currWakeUpByWifiFlag = model.network.getWifiWakeup();
        }
        debugPrint("settingInitNetWakeUpByWifiDialog:"+data.operateData.currWakeUpByWifiFlag);
    }catch (ex){
        debugPrint("settingInitNetWakeUpByWifiDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetWakeUpByWifiDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetWakeUpByWifiDialog(data){
    try{
        if(data.operateData.currWakeUpByWifiFlag == 1){
            data.settingNetWakeUpByWifiSwitchUl.Data[0].settingNetWakeUpByWifiSelectImg.Data = true;
            data.settingNetWakeUpByWifiSwitchUl.Data[1].settingNetWakeUpByWifiSelectImg.Data = false;
            data.settingNetWakeUpByWifiSwitchUl.DataSelectedIndex = 0;
            data.settingNetWakeUpByWifiSwitchUl.SelectedIndex = 0;
        }else{
            data.settingNetWakeUpByWifiSwitchUl.Data[0].settingNetWakeUpByWifiSelectImg.Data = false;
            data.settingNetWakeUpByWifiSwitchUl.Data[1].settingNetWakeUpByWifiSelectImg.Data = true;
            data.settingNetWakeUpByWifiSwitchUl.DataSelectedIndex = 1;
            data.settingNetWakeUpByWifiSwitchUl.SelectedIndex = 1;
        }
    }catch (ex){
        debugPrint("settingRewriteNetWakeUpByWifiDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingWakeUpByWifiFlag
 description:设置wifi唤醒标识
 input:
 output:
 return
 *******************************************************************/
function setSettingWakeUpByWifiFlag(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = settingNetWakeUpByWifiDialogData;
    if(this.DataSelectedIndex == 0){
        data.operateData.currWakeUpByWifiFlag = 1;
        hiWebOsFrame.NetWakeUpByWifiDialog.rewriteDataOnly();
        settingNetSetCreateWakeUpPowerDialog()
    }else{
        data.operateData.currWakeUpByWifiFlag = 0;
        if(tv == true){
            model.network.setWifiWakeup(0);
        }
        hiWebOsFrame.NetWakeUpByWifiDialog.rewriteDataOnly();
        settingFirPageSetNetworkWakeUpSwitch(0);
        hiWebOsFrame.NetWakeUpByWifiDialog.close();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.NetWakeUpByWifiDialog.destroy();
    }
}
function settingNetSetCreateWakeUpPowerDialog(){
    try {
        hiWebOsFrame.createPage('settingNetWakeUpPowerDialogId', null, null, null, function (a) {
            hiWebOsFrame.NetWakeUpPowerDialog = a;
            hiWebOsFrame.NetWakeUpByWifiDialog.close();
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetWakeUpByWifiDialog.destroy();
        })
    } catch (ex) {
        debugPrint("settingNetSetCreateWakeUpPowerDialog:" + ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingNetWakeUpByWifiDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingNetWakeUpByWifiDialogEscHandle(){
    hiWebOsFrame.NetWakeUpByWifiDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.NetWakeUpByWifiDialog.destroy();

}
function settingNetWakeUpByWifiDialogOnDestroy(){
    hiWebOsFrame.NetWakeUpByWifiDialog = null;
}