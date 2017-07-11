/**
 * Created by Admin on 14-9-12.
 */
function getWizardNetSetNetTypeListDialogData(opt){
    opt.CaE = [
        {
            "id":"wizardNetSetDialogHeadText",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id": "wizardNetSetNetTypeListUl",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setWizardNetSetNetworkType"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "wizardNetSetNetTypeSelectImg",
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
                    "id": "wizardNetSetNetTypeName",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":"wizardListSelectTxt"
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "wizardNetSetNetTypeSelectImg", "wizardNetSetNetTypeName"]
            }
        }
    ];
    wizardInitNetSetNetTypeListDialog();
    return wizardNetSetNetTypeListDialogData;
}
var wizardNetSetNetTypeListDialogData={
    "wizardNetSetDialogHeadText":{"Data":"Connection Type"},
    "wizardNetSetNetTypeListUl":{
        "Data":[
            {
                "wizardNetSetNetTypeSelectImg":{"Data":false},
                "wizardNetSetNetTypeName":{"Data":"Ethernet"}
            }
        ]
    },
    "operateData":{
        "currNetworkTypeIdx":0,
        "networkTypeMapList":[]
    },
    "langData":{
        "Connection Type":["Connection Type"],
        "Ethernet":["Ethernet"],
        "Wireless":["Wireless"]
    },
    rewrite:"settingRewriteNetSetNetTypeListDialog"
}
/*******************************************************************
 name:settingRewriteNetSetNetTypeListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function wizardInitNetSetNetTypeListDialog(){
    try{
        var data = wizardNetSetNetTypeListDialogData;
        data.operateData.currNetworkTypeIdx =getWizardNetSetSetCurrNetTypeIdx();
        data.operateData.networkTypeMapList = wizardGetNetworkMapList();
    }catch (ex){
        debugPrint("wizardInitNetSetNetTypeListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetSetNetTypeListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetNetTypeListDialog(data){
    try{
        if(data.wizardNetSetNetTypeListUl.Data.length > data.operateData.networkTypeMapList.length){
            data.wizardNetSetNetTypeListUl.Data.splice(data.operateData.networkTypeMapList.length);
        }else if(data.wizardNetSetNetTypeListUl.Data.length < data.operateData.networkTypeMapList.length){
            while(data.wizardNetSetNetTypeListUl.Data.length < data.operateData.networkTypeMapList.length){
                var itemData = {
                    "wizardNetSetNetTypeSelectImg":{"Data":false},
                    "wizardNetSetNetTypeName":{"Data":""}
                }
                data.wizardNetSetNetTypeListUl.Data.push(itemData);
            }
        }
        $.each(data.operateData.networkTypeMapList,function(idx,item){
            data.wizardNetSetNetTypeListUl.Data[idx].wizardNetSetNetTypeSelectImg.Data = false;
            data.wizardNetSetNetTypeListUl.Data[idx].wizardNetSetNetTypeName.Data = item.netTypeName;
        })
        data.wizardNetSetNetTypeListUl.Data[data.operateData.currNetworkTypeIdx].wizardNetSetNetTypeSelectImg.Data = true;
        data.wizardNetSetNetTypeListUl.DataSelectedIndex = data.operateData.currNetworkTypeIdx;
        data.wizardNetSetNetTypeListUl.SelectedIndex = data.operateData.currNetworkTypeIdx;
    }catch (ex){
        debugPrint("settingRewriteNetSetNetTypeListDialog:"+ex.message);
    }
}
/*******************************************************************
 name:setWizardNetSetNetworkType
 description:
 input:
 output:
 return
 *******************************************************************/
function setWizardNetSetNetworkType(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = wizardNetSetNetTypeListDialogData;
    data.operateData.currNetworkTypeIdx = this.SelectedIndex;
    hiWebOsFrame.NetSetNetTypeListDialog.rewriteDataOnly();
    setWizardNetSetSetCurrNetTypeIdx(this.DataSelectedIndex);
    hiWebOsFrame.NetSetMainPage.rewriteDataOnly();

    hiWebOsFrame.NetSetNetTypeListDialog.close();
    hiWebOsFrame.NetSetMainPage.hiFocus();
    hiWebOsFrame.NetSetNetTypeListDialog.destroy();
}
/*******************************************************************
 name:wizardNetSetNetTypeListDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetNetTypeListDialogEscHandle(){
    hiWebOsFrame.NetSetNetTypeListDialog.close();
    hiWebOsFrame.NetSetMainPage.hiFocus();

    hiWebOsFrame.NetSetNetTypeListDialog.destroy();

}

function wizardNetSetWifiSecListDialogOnDestroy(){
    hiWebOsFrame.NetSetNetTypeListDialog = null;
}