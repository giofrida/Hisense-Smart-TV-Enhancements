/**
 * Created by Admin on 14-9-12.
 */
function getSettingChSetScramDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetScramListHeadText",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id": "settingChSetScramListUl",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "settingChSetScramModeEnterHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetScramSelectImg",
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
                    "id": "settingChSetScramName",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":"wizardListSelectTxt"
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetScramSelectImg", "settingChSetScramName"]
            }
        }
    ];
    settingInitChSetScramListDialog();
    return settingChSetScramListDialogData;
}
var settingChSetScramListDialogData={
    "settingChSetScramListHeadText":{"Data":"Channel"},
    "settingChSetScramListUl":{
        "Data":[
            {
                "settingChSetScramSelectImg":{"Data":false},
                "settingChSetScramName":{"Data":""}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currScramModeIdx":0,
        "scramModeMapList":[]
    },
    "langData":{
        "Channel":["Channel"],
        "All Channels":["All Channels"],
        "Free Channels":["Free Channels"]
    },
    rewrite:"settingRewriteChSetScramListDialog"
}
/*******************************************************************
 name:settingInitChSetScramListDialog
 description:
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetScramListDialog(){
    try{
        var data = settingChSetScramListDialogData;
        data.operateData.currScramModeIdx = getSettingChSetDVBC2ScramIdx();
        data.operateData.scramModeMapList = getSettingChSetDVBCScramMapList();
    }catch (ex){
        debugPrint("settingInitChSetScramListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetScramListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetScramListDialog(data){
    try{
        if(data.settingChSetScramListUl.Data.length > data.operateData.scramModeMapList.length){
            data.settingChSetScramListUl.Data.splice(data.operateData.scramModeMapList.length);
        }else if(data.settingChSetScramListUl.Data.length < data.operateData.scramModeMapList.length){
            while(data.settingChSetScramListUl.Data.length < data.operateData.scramModeMapList.length){
                var itemData = {
                    "settingChSetScramSelectImg":{"Data":false},
                    "settingChSetScramName":{"Data":""}
                }
                data.settingChSetScramListUl.Data.push(itemData);
            }
        }
        $.each(data.operateData.scramModeMapList,function(idx,item){
            data.settingChSetScramListUl.Data[idx].settingChSetScramSelectImg.Data = false;
            data.settingChSetScramListUl.Data[idx].settingChSetScramName.Data = item.name;
        })
        data.settingChSetScramListUl.Data[data.operateData.currScramModeIdx].settingChSetScramSelectImg.Data = true;
        data.settingChSetScramListUl.DataSelectedIndex = data.operateData.currScramModeIdx;
        data.settingChSetScramListUl.SelectedIndex = data.operateData.currScramModeIdx;

    }catch (ex){
        debugPrint("settingRewriteChSetScramListDialog:"+ex.message,DebugLevel.ERROR);
    }
}

function settingChSetScramModeEnterHandle(){
    this.DataSelectedIndex = this.SelectedIndex;
    setSettingChSetDVBC2ScramModeIdx(this.SelectedIndex);
    hiWebOsFrame.ChSetScramListDialog.close();
    hiWebOsFrame.ChSetDVBC2Page.hiFocus();
    hiWebOsFrame.ChSetScramListDialog.destroy();
}
/*******************************************************************
 name:settingChSetScramListDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetScramListDialogEscHandle(){
    this.page.close();
    this.page.origin.hiFocus();
    this.page.destroy();
}

function settingChSetScramListDialogOnDestroy(){
    hiWebOsFrame.ChSetScramListDialog = null;
}