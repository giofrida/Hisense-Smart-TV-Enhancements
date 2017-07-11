/**
 * Created by Admin on 14-6-20.
 */
function getSettingChSetBandFreInputDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetBandFreInputTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetBandFreInput",
            "description":"输入框",
            "CaEType":"input",
            "inputAttr":"number",
            "maxlength":7,
            "min":0,
            "classes":{
                "normal":"settingDVBS5FreInputNormal","focus":"settingDVBS5FreInputFocus"
            },
            "nav":{
                "downTo":"settingChSetBandDefaultFreBtn"
            },
            "handler":{
                "aftEnterHandler":"invokeSKB"
            }
        },
        {
            "id":"settingChSetBandFreTear",
            "description":"Khz结尾信息",
            "CaEType":"span"
        },
        {
            "id":"settingChSetBandDefaultFreBtn",
            "description":"恢复默认值按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus"
            },
            "nav":{
                "upTo":"settingChSetBandFreInput","downTo":"","leftTo":"","rightTo":"settingChSetBandFreSaveBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetRecoverDefaultBandFre"
            }
        },
        {
            "id":"settingChSetBandFreSaveBtn",
            "description":"保存设置值",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "upTo":"settingChSetBandFreInput","downTo":"","leftTo":"settingChSetBandDefaultFreBtn","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetSaveBandFre"
            }
        }
    ];
    settingInitChSetBandFreInputData();
    return settingChSetBandFreInputData;

}
var settingChSetBandFreInputData={
    "settingChSetBandFreInputTitle":{"Data":"Band Frequency:"},
    "settingChSetBandFreInput":{"Data":""},
    "settingChSetBandFreTear":{"Data":"KHz"},
    "settingChSetBandDefaultFreBtn":{"Data":"Default"},
    "settingChSetBandFreSaveBtn":{"Data":"Save"},
    "operateData":{
        "currFre":""
    },
    "langData":{
        "Save":["Save"],
        "Default":["Default"],
        "Band Frequency:":["Band Frequency"]
    },
    rewrite:"settingRewriteChSetBandFreInputDialog"
}
/*******************************************************************
 name:settingInitChSetBandFreInputData
 description:初始化输入Band频率对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetBandFreInputData(){
    var data = settingChSetBandFreInputData;
    data.operateData.currFre = "";
}
/*******************************************************************
 name:settingRewriteChSetBandFreInputDialog
 description:刷新Band频率页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetBandFreInputDialog(data){
    data.settingChSetBandFreInput.Data = data.operateData.currFre;
}
/*******************************************************************
 name:settingChSetRecoverDefaultBandFre
 description:恢复默认值
 input:
 output:
 return
 *******************************************************************/
function settingChSetRecoverDefaultBandFre(){
    var data = settingChSetBandFreInputData;
    data.operateData.currFre = settingChSetGetDefaultBandFre();
    hiWebOsFrame.ChSetBandFreInputDialog.rewriteDataOnly();
}
/*******************************************************************
 name:settingChSetSaveBandFre
 description:保存输入频带的频率
 input:
 output:
 return
 *******************************************************************/
function settingChSetSaveBandFre(){
    var inputBandFreq = $("#settingChSetBandFreInput").val();
    try{
        if(!!inputBandFreq){
            setSettingChSetBandFre(inputBandFreq);
            hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
            hiWebOsFrame.ChSetBandFreInputDialog.close();
            hiWebOsFrame.ChSetBandFreInputDialog.destroy();
            hiWebOsFrame.ChSetDVBS4Page.hiFocus();
        }
    }catch (ex){
        debugPrint("settingChSetSaveBandFre:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetBandFreInputEscHandle
 description:按返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetBandFreInputEscHandle(){
    this.page.close();
    this.page.destroy();
    this.origin.hiFocus();
}

function settingChSetBandFreInputOnDestroy(){
    hiWebOsFrame.ChSetBandFreInputDialog = null;
}