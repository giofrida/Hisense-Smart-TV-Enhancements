/**
 * Created by Admin on 14-9-12.
 */
function getSettingNetDMRDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetDMRSwitchTitle",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id":"settingNetDMRSwitch",
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
                "aftEnterHandler":"settingNetSetDMRSwitch"
            }
        }
    ];
    settingInitNetDMRDialog();
    return settingNetDMRDialogData;
}
var settingNetDMRDialogData={
    "settingNetDMRSwitchTitle":{"Data":"Anyview Stream"},
    "settingNetDMRSwitch":{
        "Data":{
            switchType:true,
            switchText:''
        }
    },
    "operateData":{
        "currDMRFlag":0
    },
    "langData":{
        "Anyview Stream":["Anyview Stream"]
    },
    rewrite:"settingRewriteNetDMRDialog"
}
/*******************************************************************
 name:settingRewriteNetDMRDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitNetDMRDialog(){
    try{
        var data = settingNetDMRDialogData;
        if(tv == false){
            data.operateData.currDMRFlag = 0;
        }else{
            data.operateData.currDMRFlag = model.network.getAnyviewstreamSwitch();
        }
        debugPrint("settingInitNetDMRDialog:"+data.operateData.currDMRFlag);
    }catch (ex){
        debugPrint("settingInitNetDMRDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetDMRDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetDMRDialog(data){
    try{
        if(data.operateData.currDMRFlag == 0){
            data.settingNetDMRSwitch.Data.switchText = "";
            data.settingNetDMRSwitch.Data.switchType = false;
        }else{
            data.settingNetDMRSwitch.Data.switchText = "";
            data.settingNetDMRSwitch.Data.switchType = true;
        }
    }catch (ex){
        debugPrint("settingRewriteNetDMRDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingDMRFlag
 description:设置wifi唤醒标识
 input:
 output:
 return
 *******************************************************************/
function settingNetSetDMRSwitch(){
    var data = settingNetDMRDialogData;
    if(data.operateData.currDMRFlag == 1){
        data.operateData.currDMRFlag = 0;
    }else{
        data.operateData.currDMRFlag = 1;
    }
    if(tv == true){
        model.network.setAnyviewstreamSwitch(data.operateData.currDMRFlag);
    }
    hiWebOsFrame.NetDMRDialog.rewriteDataOnly();
    settingFirPageSetNetworkDMRSwitch(data.operateData.currDMRFlag);
}
/*******************************************************************
 name:settingNetDMRDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingNetDMRDialogEscHandle(){
    hiWebOsFrame.NetDMRDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.NetDMRDialog.destroy();

}
function settingNetDMRDialogOnDestroy(){
    hiWebOsFrame.NetDMRDialog = null;
}