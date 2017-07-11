/**
 * Created by Admin on 14-9-12.
 */
function getSettingChSetChListUpSwitchDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetChListUpSwitchTitle",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id":"settingChSetChListUpSwitch",
            "description":"DMR开关",
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "classes":{
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav":{
                "upTo":"","downTo":"","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setChSetChListUpSwitch"
            }
        }
    ];
    settingInitChSetChListUpDialog();
    return settingChSetChListUpDialogData;
}
var settingChSetChListUpDialogData={
    "settingChSetChListUpSwitchTitle":{"Data":"Channel list auto-update"},
    "settingChSetChListUpSwitch":{
        "Data":{
            switchType:true,
            switchText:''
        }
    },
    "operateData":{
        "currChListUpFlag":0
    },
    "langData":{
        "Channel list auto-update":["Channel list auto-update"]
    },
    rewrite:"settingRewriteChSetChListDialog"
}
/*******************************************************************
 name:settingRewriteChSetChListUpDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetChListUpDialog(){
    try{
        var data = settingChSetChListUpDialogData;
        if(tv == false){
            data.operateData.currChListUpFlag = 0;
        }else{
            data.operateData.currChListUpFlag = model.servicelist.getChannellistUpdateAuto();
        }
        debugPrint("settingInitChSetChListUpDialog:"+data.operateData.currChListUpFlag);
    }catch (ex){
        debugPrint("settingInitChSetChListUpDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetChListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetChListDialog(data){
    try{
        if(data.operateData.currChListUpFlag == 0){
            data.settingChSetChListUpSwitch.Data.switchText = "";
            data.settingChSetChListUpSwitch.Data.switchType = false;
        }else{
            data.settingChSetChListUpSwitch.Data.switchText = "";
            data.settingChSetChListUpSwitch.Data.switchType = true;
        }
    }catch (ex){
        debugPrint("settingRewriteChSetChListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingDMRFlag
 description:设置wifi唤醒标识
 input:
 output:
 return
 *******************************************************************/
function setChSetChListUpSwitch(){
    var data = settingChSetChListUpDialogData;
    if(data.operateData.currChListUpFlag == 1){
        data.operateData.currChListUpFlag = 0;
    }else{
        data.operateData.currChListUpFlag = 1;
    }
    if(tv == true){
        model.servicelist.setChannellistUpdateAuto( data.operateData.currChListUpFlag);
    }
    hiWebOsFrame.settingChSetChListUpSwitchDialog.rewriteDataOnly();
    settingFirPageSetChListUpFlag(data.operateData.currChListUpFlag);
}

/*******************************************************************
 name:settingChSetChListSwitchEscHandle
 description:从DMR开关设置页返回
 input:
 output:
 return
 *******************************************************************/
function settingChSetChListUpSwitchEscHandle(){
    try{
        hiWebOsFrame.settingChSetChListUpSwitchDialog.close();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.settingChSetChListUpSwitchDialog.destroy();
    }catch (ex){
        DBG_ERROR("settingChSetChListUpSwitchEscHandle:"+ex.message);
    }

}
function settingChSetChListUpSwitchDialogOnDestroy(){
    hiWebOsFrame.settingChSetChListUpSwitchDialog = null;
}