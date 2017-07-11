/**
 * Created by Admin on 14-9-12.
 */
function getSettingNetSetAdvanceListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetAdvanceListHeadText",
            "description":"对话框标题",
            "CaEType":"div"
        },
        {
            "id": "settingNetSetAdvanceListUl",//在页面中的按钮或者组件容器Id
            "description": "网络高级设置项",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus",
                "dataSelected":"wizardListContentLiNormal","disable":"wizardListContentLiDisable"
            },
            "handler": {
                "aftEnterHandler": "settingNetSetAdvanceHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingNetSetAdvanceName",
                    "description": "高级设置项",
                    "CaEType": "span",
                    "classes":{
                        "normal":"wizardListSelectTxt","disable":"wizardListSelectTxt"
                    }
                }
            ],
            "UlConfig": {
                "UlDataItem": ["settingNetSetAdvanceName"]
            }
        }
    ];
    settingInitNetSetAdvanceListDialog();
    return settingNetSetAdvanceListDialogData;
}
var settingNetSetAdvanceListDialogData={
    "settingNetSetAdvanceListHeadText":{"Data":"Advanced Settings"},
    "settingNetSetAdvanceListUl":{
        "Data":[
            {
                "settingNetSetAdvanceName":{"Data":"PIN"}
            },
            {
                "settingNetSetAdvanceName":{"Data":"PBC"}
            },
            {
                "settingNetSetAdvanceName":{"Data":"IP Setting"}
            }

        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disableItem":[]
    },
    "operateData":{
        "netAvailableFlag":0
    },
    "langData":{
       "Advanced Settings":["Advanced Settings"],
        "IP Setting":["IP Setting"],
        "PBC":["PBC"],
        "PIN":["PIN"]
    },
    rewrite:"settingRewriteNetAdvanceListDialog"
}
/*******************************************************************
 name:settingRewriteNetAdvanceListDialog
 description:
 input:
 output:
 return
 *******************************************************************/
function settingInitNetSetAdvanceListDialog(){
    var data = settingNetSetAdvanceListDialogData;
    data.settingNetSetAdvanceListUl.SelectedIndex = 0;
    if(tv){
        data.operateData.netAvailableFlag = model.network.getEnumNetworkAvailable();
    }else{
        data.operateData.netAvailableFlag = 1;
    }
}
/*******************************************************************
 name:settingRewriteNetAdvanceListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetAdvanceListDialog(data){
    if(data.operateData.netAvailableFlag == 0){
        data.settingNetSetAdvanceListUl.disableItem = [2];
    }else{
        data.settingNetSetAdvanceListUl.disableItem = [];
    }
}
/*******************************************************************
 name:settingNetSetAdvanceHandle
 description:高级设置enter按键处理
 input:
 output:
 return
 *******************************************************************/
function settingNetSetAdvanceHandle(){
    switch (this.SelectedIndex){
        case 0:
            settingNetSetAdvancePinCreate();
            break;
        case 1:
            settingNetSetAdvancePBCCreate();
            break;
        case 2:
            settingNetSetAdvanceWifiIpSetCreate();
            break;
    }
}
/*******************************************************************
 name:settingNetSetAdvanceWifiIpSetCreate
 description:进入手动添加wifi设置页
 input:
 output:
 return
 *******************************************************************/
function settingNetSetAdvanceWifiIpSetCreate(){
    hiWebOsFrame.createPage('settingNetSetWifiIpSetDialogId',null,hiWebOsFrame.NetSetAdvanceListDialog, null,function(a){
        hiWebOsFrame.NetSetWifiIpSetDialog = a;
        hiWebOsFrame.NetSetAdvanceListDialog.close();
        a.open();
        a.hiFocus();
    });
}
function settingNetSetAdvancePinCreate(){
    try{
        hiWebOsFrame.createPage('settingNetSetPinDialogId',null,null, null,function(a){
            hiWebOsFrame.NetSetPinDialog = a;
            hiWebOsFrame.NetSetAdvanceListDialog.close();
            a.open();
            a.hiFocus();
        });
    }catch (ex){
        DBG_ERROR("settingNetSetAdvancePinCreate"+ex.message);
    }
}
function settingNetSetAdvancePBCCreate(){
    try{
        hiWebOsFrame.createPage('settingNetSetPBCDialogId',null,null, null,function(a){
            hiWebOsFrame.NetSetPBCDialog = a;
            hiWebOsFrame.NetSetAdvanceListDialog.close();
            a.open();
            a.hiFocus();
        });
    }catch (ex){
        DBG_ERROR("settingNetSetAdvancePBCCreate:"+ ex.message);
    }
}
/*******************************************************************
 name:settingNetSetAdvanceListDialogEscHandle
 description:返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingNetSetAdvanceListDialogEscHandle(){
    hiWebOsFrame.NetSetAdvanceListDialog.close();
    hiWebOsFrame.NetSetWifiSetPage.hiFocus();
    hiWebOsFrame.NetSetAdvanceListDialog.destroy();

}
function settingNetSetAdvanceListDialogOnDestroy(){
    hiWebOsFrame.NetSetAdvanceListDialog = null;
}