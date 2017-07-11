/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetExitSetupData(opt){
    opt.CaE = [
        {
            "id":"settingChSetExitSetupTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingChSetExitSetupInfo",
            "description": "提示信息",
            "CaEType": "div"
        },
        {
            "id":"settingChSetExitSetupOk",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus"
            },
            "nav":{
                "rightTo":"settingChSetExitSetupCancel"
            },
            "handler":{
                "aftEnterHandler":"settingChSetExitSetupOKHandle"
            }
        },
        {
            "id":"settingChSetExitSetupCancel",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "leftTo":"settingChSetExitSetupOk"
            },
            "handler":{
                "aftEnterHandler":"settingChSetExitSetupCancelHandle"
            }
        }
    ];
    return settingChSetExitSetupData;
}
var settingChSetExitSetupData = {
    "settingChSetExitSetupTitle":{"Data":"Auto Scan"},
    "settingChSetExitSetupInfo":{"Data":"Do you want to abort Channel Scan setup?"},
    "settingChSetExitSetupOk":{"Data":"OK"},
    "settingChSetExitSetupCancel":{"Data":"Cancel"},
    "operateData":{

    },
    "langData":{
        "Auto Scan":["Auto Scan"],
        "Do you want to abort Channel Scan setup?":["Do you want to abort Channel Scan setup?"],
        "OK":["OK"],
        "Cancel":["Cancel"]
    },
    rewrite:"settingRewriteChSetExitSetupDialog"
}
/*******************************************************************
 name:settingRewriteChSetExitSetupDialog
 description:刷新跳过页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetExitSetupDialog(data){

}
/*******************************************************************
 name:settingChSetExitSetupOKHandle
 description:跳过网络设置按OK键进入
 input:
 output:
 return
 *******************************************************************/
function settingChSetExitSetupOKHandle(){
    try{

        hiWebOsFrame.ChSetExitSetupDialog.origin.destroy();
        hiWebOsFrame.ChSetExitSetupDialog.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.ChSetExitSetupDialog.destroy();

    }catch (ex){
        debugPrint("settingChSetExitSetupOKHandle:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetExitSetupCancelHandle
 description:跳过网络设置按取消键进入
 input:
 output:
 return
 *******************************************************************/
function settingChSetExitSetupCancelHandle(){
    hiWebOsFrame.ChSetExitSetupDialog.close();
    hiWebOsFrame.ChSetExitSetupDialog.origin.hiFocus();
    hiWebOsFrame.ChSetExitSetupDialog.destroy();
}
function settingChSetExitSetupEscHandle(){
    settingChSetExitSetupCancelHandle();
}
function settingChSetExitSetupOnDestroy(){
    hiWebOsFrame.ChSetExitSetupDialog = null;
}