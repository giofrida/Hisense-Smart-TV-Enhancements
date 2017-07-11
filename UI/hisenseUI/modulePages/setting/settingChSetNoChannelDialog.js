/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetNoChannelDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetNoChannelInfo",
            "description":"结果信息",
            "CaEType":"div"
        }
    ];
    return settingChSetNoChannelInfo;
}
var settingChSetNoChannelInfo={
    "settingChSetNoChannelInfo":{"Data":"There is no channel exist,please search it"},
    "operateData":{
        "dialogDispalyTimer":0
    },
    "langData":{
        "There is no channel exist,please search it":["There is no channel exist,please search it"]
    },
    rewrite:"settingRefreshChSetNoChannelDialog"
}

/*******************************************************************
 name:settingRefreshChSetNoChannelDialog
 description:刷新信息展示页
 input:
 output:
 return
 *******************************************************************/
function settingRefreshChSetNoChannelDialog(data){
}
/*******************************************************************
 name:settingChSetNoChannelDisappear
 description:消失连接结果
 input:
 output:
 return
 *******************************************************************/
function settingChSetNoChannelDisappear(){
    var data = settingChSetNoChannelInfo;
    hiWebOsFrame.ChSetNoChannelDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.ChSetNoChannelDialog.destroy();
}

function settingChSetNoChannelDialogOnOpen(){
    var data = settingChSetNoChannelInfo;
    data.operateData.dialogDispalyTimer = setTimeout(settingChSetNoChannelDisappear,3000);
}

function settingChSetNoChannelDialogOnDestroy(){
    var data = settingChSetNoChannelInfo;
    clearTimeout(data.operateData.dialogDispalyTimer);
    hiWebOsFrame.ChSetNoChannelDialog = null;
}