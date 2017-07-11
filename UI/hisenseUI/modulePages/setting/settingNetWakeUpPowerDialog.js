/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetWakeUpPowerDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetWakeUpPowerText",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingNetWakeUpPowerOkBtn",
            "description":"确定使用wake up by wifi按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus"
            },
            "handler":{
                "aftEnterHandler":"settingNetWakeUpPowerOkHandle"
            },
            "nav":{
                "rightTo":"settingNetWakeUpPowerCancelBtn"
            }
        },
        {
            "id":"settingNetWakeUpPowerCancelBtn",
            "description":"不适用wake up by wifi",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "handler":{
                "aftEnterHandler":"settingNetWakeUpPowerEscHandle"
            },
            "nav":{
                "leftTo":"settingNetWakeUpPowerOkBtn"
            }
        }
    ];
    settingInitNetWakeUpPowerDialog();
    return settingNetWakeUpPowerData;
}
var settingNetWakeUpPowerData={
    "settingNetWakeUpPowerText":{"Data":"Turning on this feature,the standby power consumption will greater 0.5W!"},
    "settingNetWakeUpPowerOkBtn":{"Data":"OK"},
    "settingNetWakeUpPowerCancelBtn":{"Data":"Cancel"},
    "operateData":{
    },
    "langData":{
        "Turning on this feature,the standby power consumption will greater 0.5W!":["Turning on this feature,the standby power consumption will greater 0.5W!"],
        "OK":["OK"],
        "Cancel":["Cancel"]
    },
    rewrite:"settingRewriteNetWakeUpPowerDialog"
}
/*******************************************************************
 name:settingInitNetWakeUpPowerDialog
 description:
 input:
 output:
 return
 *******************************************************************/
function settingInitNetWakeUpPowerDialog(){
}
/*******************************************************************
 name:settingRewriteNetWakeUpPowerDialog
 description:
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetWakeUpPowerDialog(data){
}
/*******************************************************************
 name:settingNetWakeUpPowerOkHandle
 description:
 input:
 output:
 return
 *******************************************************************/
function settingNetWakeUpPowerOkHandle(){
    try{
        hiWebOsFrame.NetWakeUpPowerDialog.close();
        if(tv == true){
            model.network.setWifiWakeup(1);
        }
        settingFirPageSetNetworkWakeUpSwitch(1);
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.NetWakeUpPowerDialog.destroy();
    }catch (ex){
        debugPrint("settingNetWakeUpPowerOkHandle:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetWakeUpPowerEscHandle(){
    hiWebOsFrame.NetWakeUpPowerDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.NetWakeUpPowerDialog.destroy();
}

function settingNetWakeUpPowerDialogOnDestroy(){
    hiWebOsFrame.NetWakeUpPowerDialog = null;
}