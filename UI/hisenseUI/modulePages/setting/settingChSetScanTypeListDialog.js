/**
 * Created by Admin on 14-9-12.
 */
function getSettingChSetScanTypeListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetScanTypeListHeadText",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id": "settingChSetScanTypeListUl",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetScanType"
            },
            "onFocusFun":"settingChSetScanTypeRewriteHelpInfo",
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetScanTypeSelectImg",
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
                    "id": "settingChSetScanTypeName",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":"wizardListSelectTxt"
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetScanTypeSelectImg", "settingChSetScanTypeName"]
            }
        },
        {
            "id":"settingChSetTunerModeHelpTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingChSetTunerModeHelpInfo",
            "description":"",
            "CaEType":"div"
        }
    ];
    settingInitChSetScanTypeListDialog();
    return settingChSetScanTypeListDialogData;
}
var settingChSetScanTypeListDialogData={
    "settingChSetScanTypeListHeadText":{"Data":"Tuner Mode"},
    "settingChSetScanTypeListUl":{
        "Data":[
            {
                "settingChSetScanTypeSelectImg":{"Data":false},
                "settingChSetScanTypeName":{"Data":"Antenna"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetTunerModeHelpTitle":{"Data":""},
    "settingChSetTunerModeHelpInfo":{"Data":""},
    "operateData":{
        "currChScanTypeIdx":0,
        "channelScanTypeMapList":[]
    },
    "langData":{
        "Tuner Mode":["Tuner Mode"],
        "Antenna":["Antenna"],
        "Cable":["Cable"],
        "If you receive your channels through an Antenna, then select this option.":["If you receive your channels through an Antenna, then select this option."],
        "If you receive your channels through a cable provider, then select this option.":["If you receive your channels through a cable provider, then select this option."]
    },
    rewrite:"settingRewriteChSetScanTypeListDialog"
}
/*******************************************************************
 name:settingRewriteChSetScanTypeListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetScanTypeListDialog(){
    try{
        var data = settingChSetScanTypeListDialogData;
        data.operateData.currChScanTypeIdx = getSettingChSetCurrScanTypeIdx();
        data.operateData.channelScanTypeMapList = getSettingChScanMapList();
    }catch (ex){
        debugPrint("settingInitChSetScanTypeListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function getSettingChSetCurrScanTypeIdx(){
    try{
        if(tv == false){
            if(!!localStorage.getItem("channelScanTypeIdx")){
                return parseInt(localStorage.getItem("channelScanTypeIdx"));
            }else{
                localStorage.setItem("channelScanTypeIdx",0);
                return 0;
            }
        }else{
            var scanType = model.channelSearch.getSource();
            debugPrint("getSettingChSetCurrScanTypeIdx:scanType="+scanType,DebugLevel.ALWAYS);
            var scanTypeMapList = getSettingChScanMapList();
            for(var i = 0; i < scanTypeMapList.length; i++){
                if(scanType == scanTypeMapList[i].map){
                    break;
                }
            }
            if(i == scanTypeMapList.length){
                debugPrint("getSettingChSetCurrScanTypeIdx:error!!");
                i = 0;
                model.channelSearch.setSource(scanTypeMapList[0].map);
            }
            return i;
        }
    }catch (ex){
        debugPrint("getSettingChSetCurrScanTypeIdx:"+ex.message,DebugLevel.ERROR);
    }

}
function setSettingChSetCurrScanTypeIdx(idx){
    try{
        var channelScanTypeMapList = getSettingChScanMapList();
        if(idx > channelScanTypeMapList.length-1){
            debugPrint("setSettingChSetCurrScanTypeIdx:idx="+idx,DebugLevel.ERROR);
            idx = 0;
        }
        if(tv == false){
            localStorage.setItem("channelScanTypeIdx",idx);
        }else{
            model.channelSearch.setSource(channelScanTypeMapList[idx].map);
        }
        settingFirPageSetChannelCurrTunerMode(idx);
    }catch(ex){
        debugPrint("setSettingChSetCurrScanTypeIdx:"+ex.message,DebugLevel.ERROR);
    }

}
function getSettingChScanMapList(){
    var channelScanMapList =[
        {
            "map":0,
            "name":"Antenna",
            "help":"If you receive your channels through an Antenna, then select this option."
        },
        {
            "map":1,
            "name":"Cable",
            "help":"If you receive your channels through a cable provider, then select this option."
        }
    ];
    return channelScanMapList;
}
/*******************************************************************
 name:settingRewriteChSetScanTypeListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetScanTypeListDialog(data){
    try{
        if(data.settingChSetScanTypeListUl.Data.length > data.operateData.channelScanTypeMapList.length){
            data.settingChSetScanTypeListUl.Data.splice(data.operateData.channelScanTypeMapList.length);
        }else if(data.settingChSetScanTypeListUl.Data.length < data.operateData.channelScanTypeMapList.length){
            while(data.settingChSetScanTypeListUl.Data.length < data.operateData.channelScanTypeMapList.length){
                var itemData = {
                    "settingChSetScanTypeSelectImg":{"Data":false},
                    "settingChSetScanTypeName":{"Data":""}
                }
                data.settingChSetScanTypeListUl.Data.push(itemData);
            }
        }
        $.each(data.operateData.channelScanTypeMapList,function(idx,item){
            data.settingChSetScanTypeListUl.Data[idx].settingChSetScanTypeSelectImg.Data = false;
            data.settingChSetScanTypeListUl.Data[idx].settingChSetScanTypeName.Data = item.name;
        })
        data.settingChSetScanTypeListUl.Data[data.operateData.currChScanTypeIdx].settingChSetScanTypeSelectImg.Data = true;
        data.settingChSetScanTypeListUl.DataSelectedIndex = data.operateData.currChScanTypeIdx;
        data.settingChSetScanTypeListUl.SelectedIndex = data.operateData.currChScanTypeIdx;

    }catch (ex){
        debugPrint("settingRewriteChSetScanTypeListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:wizardRewriteNetSetNetTypeListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetScanType(){
    try {
        debugG('set default nosignal:1 and messageCamIndex: 0 before changed tuner mode');
        model.tvservice.setMessageCamIndex(0);
        model.tvservice.setNoSignalMain(1);
    } catch (ex) {
        debugE(ex.message);
    }
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingChSetScanTypeListDialogData;
        data.operateData.currChScanTypeIdx = this.SelectedIndex;
        setSettingChSetCurrScanTypeIdx(this.SelectedIndex);
        hiWebOsFrame.ChSetScanTypeListDialog.rewriteDataOnly();
        debugPrint("setSettingChSetScanType:origin page="+this.page.origin.id,DebugLevel.ALWAYS);
        var temp=model.source.getInputName();
        debugPrint("settingChSetAutoScanPageOnOpen:temp"+temp,DebugLevel.ERROR);
        if(this.page.origin.module == "livetv"){
            hiWebOsFrame.createPage('settingChSetAutoScanPageId',null, hiWebOsFrame.blankPage, null,function(a){
                hiWebOsFrame.ChSetChannelScanPage = a;
                hiWebOsFrame.ChSetScanTypeListDialog.close();
                if(tv==true){
                    if(model.parentlock.getSModel() == 1&&temp[3]==1){      //任何通道下parentlock打开并且tv通道加锁弹出密码框
                        debugPrint("settingChSetAutoScanPageId:need to input password!!",DebugLevel.ALWAYS);
                        hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetChannelScanPage, null,function(a){
                            hiWebOsFrame.ChSetParLockInputDialog = a;
                            settingChSetSetFocusFirPageFlag(1);
                            a.open();
                            a.hiFocus();
                        });
                    }else{
                        debugPrint("settingChSetAutoScanPageId:not need to input password!!",DebugLevel.ALWAYS);
                        a.open();
                        a.hiFocus();
                    }
                } else{
                a.open();
                a.hiFocus();
                }
//                hiWebOsFrame.ChSetScanTypeListDialog.destroy();
            });
        }else{
            hiWebOsFrame.ChSetScanTypeListDialog.close();
            hiWebOsFrame.settingsFirst.hiFocus();
            hiWebOsFrame.ChSetScanTypeListDialog.destroy();
        }
    }catch (ex){
        debugPrint("setSettingChSetScanType:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetScanTypeRewriteHelpInfo(){
    var data = settingChSetScanTypeListDialogData;
//    $("#settingChSetTunerModeHelpTitle").html(data.operateData.channelScanTypeMapList[this.SelectedIndex].name);
//    $("#settingChSetTunerModeHelpInfo").html(data.operateData.channelScanTypeMapList[this.SelectedIndex].help);
    var name = langPackages[data.operateData.channelScanTypeMapList[this.SelectedIndex].name][hiWebOsFrame.getCurrentLanguageIndex()]
    $("#settingChSetTunerModeHelpTitle").html(name);
    var helpInfo = langPackages[data.operateData.channelScanTypeMapList[this.SelectedIndex].help][hiWebOsFrame.getCurrentLanguageIndex()]
    $("#settingChSetTunerModeHelpInfo").html(helpInfo);
    data.settingChSetTunerModeHelpTitle.Data = data.operateData.channelScanTypeMapList[this.SelectedIndex].name;
    data.settingChSetTunerModeHelpInfo.Data = data.operateData.channelScanTypeMapList[this.SelectedIndex].help;
}
/*******************************************************************
 name:settingChSetScanTypeListDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetScanTypeListDialogEscHandle(){
    try{
        var data = settingChSetScanTypeListDialogData;
        hiWebOsFrame.ChSetScanTypeListDialog.close();
        if(this.page.origin.module == "livetv"){
            hiWebOsFrame.blankPage.open();
            hiWebOsFrame.blankPage.hiFocus();
        }else{
            settingFirPageSetChannelCurrTunerMode(data.operateData.currChScanTypeIdx);
            hiWebOsFrame.settingsFirst.hiFocus();
        }
        hiWebOsFrame.ChSetScanTypeListDialog.destroy();
    }catch (ex){
        debugPrint("settingChSetScanTypeListDialogEscHandle:"+ex.message,DebugLevel.ERROR);
    }
}

function settingChSetScanTypeListDialogOnDestroy(){
    hiWebOsFrame.ChSetScanTypeListDialog = null;
}