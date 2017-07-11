/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetClearChannelData(opt){
    opt.CaE = [
        {
            "id":"settingChSetClearChannelTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingChSetClearChannelInfo",
            "description": "提示信息",
            "CaEType": "div"
        },
        {
            "id":"settingChSetClearChannelOk",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus"
            },
            "nav":{
                "rightTo":"settingChSetClearChannelCancel"
            },
            "handler":{
                "aftEnterHandler":"settingChSetClearChannelOKHandle"
            }
        },
        {
            "id":"settingChSetClearChannelCancel",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "leftTo":"settingChSetClearChannelOk"
            },
            "handler":{
                "aftEnterHandler":"settingChSetClearChannelCancelHandle"
            }
        }
    ];
    return settingChSetClearChannelData;
}
var settingChSetClearChannelData = {
    "settingChSetClearChannelTitle":{"Data":"Auto Scan"},
    "settingChSetClearChannelInfo":{"Data":"All channels in memory will be erased. Do you want to proceed?"},
    "settingChSetClearChannelOk":{"Data":"OK"},
    "settingChSetClearChannelCancel":{"Data":"Cancel"},
    "operateData":{

    },
    "langData":{
        "Auto Scan":["Auto Scan"],
        "All channels in memory will be erased. Do you want to proceed?":["All channels in memory will be erased. Do you want to proceed?"],
        "OK":["OK"],
        "Cancel":["Cancel"]
    },
    rewrite:"settingRewriteChSetClearChannelDialog"
}
/*******************************************************************
 name:settingRewriteChSetClearChannelDialog
 description:刷新跳过页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetClearChannelDialog(data){

}
/*******************************************************************
 name:settingChSetClearChannelOKHandle
 description:跳过网络设置按OK键进入
 input:
 output:
 return
 *******************************************************************/
function settingChSetClearChannelOKHandle(){
    try{
        if(hiWebOsFrame.getCurrentArea() == "EU"){
            hiWebOsFrame.createPage('settingChSetEUAutoScanPageId',null, hiWebOsFrame.settingsFirst, null,function(a){
            hiWebOsFrame.ChSetChannelScanPage = a;
            hiWebOsFrame.ChSetClearChannelDialog.close();
                hiWebOsFrame.ChSetDVBAutoPage.close();
                hiWebOsFrame.ChSetDVBAutoPage.destroy();
                a.open();
                a.hiFocus();
                hiWebOsFrame.ChSetClearChannelDialog.destroy();
            });
            }else{
            hiWebOsFrame.createPage('settingChSetAutoScanPageId',null, hiWebOsFrame.settingsFirst, null,function(a){
                hiWebOsFrame.ChSetChannelScanPage = a;
                hiWebOsFrame.ChSetClearChannelDialog.close();
                hiWebOsFrame.settingsFirst.close();
            a.open();
            a.hiFocus();
            hiWebOsFrame.ChSetClearChannelDialog.destroy();
        });
        }

    }catch (ex){
        debugPrint("settingChSetClearChannelOKHandle:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetClearChannelCancelHandle
 description:跳过网络设置按取消键进入
 input:
 output:
 return
 *******************************************************************/
function settingChSetClearChannelCancelHandle(){
    hiWebOsFrame.ChSetClearChannelDialog.close();
    hiWebOsFrame.ChSetClearChannelDialog.destroy();
    if(hiWebOsFrame.getCurrentArea() == "EU"){
        hiWebOsFrame.ChSetDVBAutoPage.hiFocus();
    }else{
        hiWebOsFrame.settingsFirst.hiFocus();
    }
}
function settingChSetClearChannelEscHandle(){
    settingChSetClearChannelCancelHandle();
}
    function settingChSetClearChannelOnDestroy(){
    hiWebOsFrame.ChSetClearChannelDialog = null;
}