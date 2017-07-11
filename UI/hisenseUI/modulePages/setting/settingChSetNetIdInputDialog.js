/**
 * Created by Admin on 14-6-25.
 */
function getSettingChSetNetIdInputDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetNetIdInputTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetNetIdContainer",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId":"settingChSetNetIdInput",
            "classes": {
                "normal": "epgInputZipContainerNormal", "focus": "epgInputZipContainerFocus",
                "disable": "epgInputZipContainerDisable", "selected": "epgInputZipContainerSelected"
            },
            "nav": {
                "downTo":"settingChSetNetIdInputSaveBtn"
            },
            "CaE":[
                {
                    "id": "settingChSetNetIdInput",
                    "description": "输入控件",
                    "classes": {
                        "normal": "epgInputZipNormal", "focus": "epgInputZipFocus", "disable": "epgInputZipNormal", "selected": "epgInputZipNormal"
                    },
                    "nav": {
                        "downTo":"epgInputZip"
                    },
                    "CaEType": "input",
                    "inputAttr":"text",
                    "maxlength":18,
//                            "max":9999,
//                            "min":0000,
                    "handler":{
                        "aftEnterHandler":"invokeSKB"
                    }
                }
            ]
        },
//        {
//            "id":"settingChSetNetIdInput",
//            "description":"输入框",
//            "CaEType":"input",
//            "inputAttr":"number",
//            "max":65535,
//            "min":0,
//            "classes":{
//                "normal":"settingDVBS5FreInputNormal","focus":"settingDVBS5FreInputFocus"
//            },
//            "nav":{
//                "downTo":"settingChSetNetIdInputSaveBtn"
//            },
//            "handler":{
//                "aftEnterHandler":"invokeSKB"
//            }
//        },
        {
            "id":"settingChSetNetIdInputSaveBtn",
            "description":"保存按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus"
            },
            "nav":{
                "upTo":"settingChSetNetIdInput","downTo":"","leftTo":"","rightTo":"settingChSetNetIdInputCancelBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetSaveInputNetId"
            }
        },
        {
            "id":"settingChSetNetIdInputCancelBtn",
            "description":"取消设置值",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "upTo":"settingChSetNetIdInput","downTo":"","leftTo":"settingChSetNetIdInputSaveBtn","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetNetIdInputCancelHandle"
            }
        }
    ];
    settingInitChSetNetIdInputDialog();
    return settingChSetNetIdInputDialogData;
}
var settingChSetNetIdInputDialogData={
    "settingChSetNetIdInputTitle":{"Data":"Network ID"},
    "settingChSetNetIdContainer":{
        "Data":{
            "settingChSetNetIdInput":{"Data":""}
        }
    },
//    "settingChSetNetIdInput":{"Data":"14000"},
    "settingChSetNetIdInputSaveBtn":{"Data":"Save"},
    "settingChSetNetIdInputCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "currNetId":14000
    },
    "langData":{
        "Network ID":["Network ID"],
        "Save":["Save"],
        "Cancel":["Cancel"]
    },
    rewrite:"settingRewriteChSetNetIdInputDialog"
}
/*******************************************************************
 name:settingInitChSetNetIdInputDialog
 description:初始化input对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetNetIdInputDialog(){
    var data = settingChSetNetIdInputDialogData;
    data.operateData.currNetId = "";
}
/*******************************************************************
 name:settingRewriteChSetNetIdInputDialog
 description:刷新频率输入对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetNetIdInputDialog(data){
    data.settingChSetNetIdContainer.Data.settingChSetNetIdInput.Data = data.operateData.currNetId;
//    data.settingChSetNetIdInput.Data = data.operateData.currNetId;
}

/*******************************************************************
 name:settingChSetNetIdInputCancelHandle
 description:频率输入界面按取消按钮的操作
 input:
 output:
 return
 *******************************************************************/
function settingChSetNetIdInputCancelHandle(){
    hiWebOsFrame.ChSetNetIdInputDialog.close();
    hiWebOsFrame.ChSetNetIdInputDialog.origin.hiFocus();
    hiWebOsFrame.ChSetNetIdInputDialog.destroy();
}
/*******************************************************************
 name:settingChSetSaveInputNetId
 description:保存输入的频率
 input:
 output:
 return
 *******************************************************************/
function settingChSetSaveInputNetId(){
    var inputNetId = $("#settingChSetNetIdInput").val();
    if(!!inputNetId){
        inputNetId = parseInt($("#settingChSetNetIdInput").val());
        hiWebOsFrame.ChSetNetIdInputDialog.close();
        if(this.page.origin.id == "settingChSetDVBC2PageId"){
            setSettingChSetDVBC2NetworkId(inputNetId);
            this.page.origin.rewriteDataOnly();
            this.page.origin.hiFocus();
        }else{
            setChSetCommDVBCNetworkId(inputNetId);
            this.page.origin.rewriteDataOnly();
            this.page.origin.hiFocus("ChannelCommNetIdItem");
        }
        hiWebOsFrame.ChSetNetIdInputDialog.destroy();
    }
}
function settingChSetNetIdInputEscHandle(){
    settingChSetNetIdInputCancelHandle();
}
function settingChSetNetIdInputDialogOnDestroy(){
    hiWebOsFrame.ChSetNetIdInputDialog = null;
}