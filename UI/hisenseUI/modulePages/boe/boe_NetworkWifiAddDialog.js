/**
 * Created by Admin on 14-6-18.
 */
function getboeNetSetWifiAddDialogData(opt){
    opt.CaE = [
        {
            "id":"boeNetSetWifiAddHeadTitle",
            "description":"头信息",
            "CaEType":"div"
        },
        {
            "id":"boeNetSetSSIDInputTitle",
            "description":"SSID输入标题",
            "CaEType":"div"
        },
        {
            "id": "boeNetSetSSIDInput",
            "description": "输入控件",
            "classes": {
                "normal": "boeWifiAddInputContentNormal", "focus": "boeWifiAddInputContentFocus",
                "disable": "boeWifiAddInputContentFocus"
            },
            "CaEType": "input",
            "maxlength":31,
            "inputAttr":"text",
            "handler":{
                "aftEnterHandler":"invokeSKB",
                "befDownHandler":"boeNetWifiAddRecordSSID",
                "befRightHandler":"boeWifiAddPageTonNextPage"
            },
            "nav":{
                "downTo":"boeNetSetSecSelectFrame"
            }
        },
        {
            "id":"boeNetSetSecSelectTitle",
            "description":"安全类型选择标题",
            "CaEType":"div"
        },
        {
            "id":"boeNetSetSecSelectFrame",
            "description":"安全类型选择框",
            "CaEType":"div",
            "classes":{
                "normal":"boeWifiAddSelectFrameNormal","focus":"boeWifiAddSelectFrameFocus",
                "selected":"boeWifiAddSelectFrameNormal"
            },
            "handler":{
                "befRightHandler":"boeWifiAddPageTonNextPage"
            },
            "nav":{
                "enterTo":"boeNetSetSecSelectListFrame",
                "downTo":"boeNetSetWifiAddConnBtn","upTo":"boeNetSetSSIDInput"
            }
        },
        {
            "id":"boeNetSetSecSelectType",
            "description":"安全类型选择类型",
            "CaEType":"div"
        },
        {
            "id":"boeNetSetSecSelectListFrame",
            "description": "下拉列表",
            "CaEType": "Container",
            "firstFocusId":"boeNetSetSecSelectList",
            "classes": {
                "normal": "boeWifiAddSelectListFrameNormal", "focus": "boeWifiAddSelectListFrameFocus",
                "disable": "boeWifiAddSelectListFrameNormal", "selected": "boeWifiAddSelectListFrameFocus"
            },
            "nav": {
                "downTo":"","enterTo":"boeNetSetSecSelectFrame"
            },
            "CaE":[
                {
                    "id": "boeNetSetSecSelectList",
                    "description": "安全类型列表",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "boeWifiAddSelectLiNormal", "focus": "boeWifiAddSelectLiFocus",
                        "disable": "boeWifiAddSelectLiNormal", "dataSelected": "boeWifiAddSelectLiNormal"
                    },
                    "oriCaE":[
                        {
                            "id":"boeNetSetSecTypeItem",
                            "description":"安全类型",
                            "CaEType":"div"
                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": [ "boeNetSetSecTypeItem"],
                        "PageSize":5
                    },
                    "handler":{
                        "aftEnterHandler":"boeNetSetWifiSelectSecType"
                    },
                    "nav":{
                        "enterTo":"boeNetSetSecSelectFrame",
                        "upTo":"boeNetSetSecSelectFrame"
                    }
                }
            ]
        },
        {
            "id":"boeNetSetWifiAddConnBtn",
            "description":"网络添加按钮",
            "CaEType":"div",
            "classes":{
                "normal":"navDialogFootLeftNormal","focus":"navDialogFootLeftFocus",
                "disable":"navDialogFootLeftDisable"
            },
            "nav":{
                "upTo":"boeNetSetSecSelectFrame","rightTo":"boeNetSetWifiAddCancelBtn"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetWifiAddBtnHandle"
            }
        },
        {
            "id":"boeNetSetWifiAddCancelBtn",
            "description":"取消按钮",
            "CaEType":"div",
            "classes":{
                "normal":"navDialogFootRightNormal","focus":"navDialogFootRightFocus"
            },
            "nav":{
                "upTo":"boeNetSetSecSelectFrame","leftTo":"boeNetSetWifiAddConnBtn"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetWifiAddDialogEscHandle",
                "befRightHandler":"boeWifiAddPageTonNextPage"
            }
        }
    ];
    boeInitNetSetWifiAddDialog();
    return boeNetSetWifiAddDialogData;
}
var boeNetSetWifiAddDialogData={

    "boeNetSetWifiAddHeadTitle":{"Data":"Add Wireless Network"},
    "boeNetSetSSIDInputTitle":{"Data":"SSID:"},
    "boeNetSetSSIDInput":{"Data":""},
    "boeNetSetSecSelectTitle":{"Data":"Security:"},
    "boeNetSetSecSelectType":{"Data":"none"},
    "boeNetSetSecSelectListFrame":{
        "Data":{
            "boeNetSetSecSelectList":{
                "Data":[
                    {
                        "boeNetSetSecTypeItem":{"Data":"None"}
                    },
                    {
                        "boeNetSetSecTypeItem":{"Data":"WEP"}
                    },
                    {
                        "boeNetSetSecTypeItem":{"Data":"WPA-PSK(TKIP)"}
                    },
                    {
                        "boeNetSetSecTypeItem":{"Data":"WPA-PSK(AES)"}
                    },
                    {
                        "boeNetSetSecTypeItem":{"Data":"WPA2-PSK(TKIP)"}
                    },
                    {
                        "boeNetSetSecTypeItem":{"Data":"WPA2-PSK(AES)"}
                    },
                    {
                        "boeNetSetSecTypeItem":{"Data":"WPA/WPA2-PSK(Auto)"}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        }
    },
    "boeNetSetWifiAddConnBtn":{"Data":"Add"},
    "boeNetSetWifiAddCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "currSSID":"",
        "currSecTypeIdx":0,
        "wifiSecurityTypeList":["None","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(Auto)"],
        "secAuthMapList":[
            {
                "security":1,
                "authentication":1
            },
            {
                "security":3,
                "authentication":2
            },
            {
                "security":5,
                "authentication":4
            },
            {
                "security":5,
                "authentication":6
            },
            {
                "security":11,
                "authentication":8
            },
            {
                "security":11,
                "authentication":16
            },
            {
                "security":16,
                "authentication":17
            }
        ]
    },
    "langData":{
        "Add Wireless Network":["Add Wireless Network"],
        "SSID:":["SSID:"],
        "Security:":["Security:"],
        "Add":["Add"],
        "Cancel":["Cancel"],
        "None":["None"]
    },
    rewrite:"boeRewriteNetSetWifiAddDialog"
}
function boeInitNetSetWifiAddDialog(){
    var data = boeNetSetWifiAddDialogData;
    data.operateData.currSSID = "";
    data.operateData.currSecTypeIdx = 0;
}
function boeRewriteNetSetWifiAddDialog(data){
    data.boeNetSetSSIDInput.Data = data.operateData.currSSID;
    data.boeNetSetSecSelectType.Data = data.operateData.wifiSecurityTypeList[data.operateData.currSecTypeIdx];
    data.boeNetSetSecSelectListFrame.Data.boeNetSetSecSelectList.SelectedIndex = data.operateData.currSecTypeIdx;
}

function boeNetWifiAddRecordSSID(){
    try{
        var data = boeNetSetWifiAddDialogData;
        var inputSSID = $("#boeNetSetSSIDInput").val();
        debugPrint("boeNetWifiAddRecordSSID:inputSSID="+inputSSID,DebugLevel.ALWAYS);
        data.operateData.currSSID = inputSSID;
    }catch (ex){
        debugPrint("boeNetWifiAddRecordSSID:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:boeNetSetWifiSelectSecType
 description:选择网络安全类型
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiSelectSecType(){
    var data = boeNetSetWifiAddDialogData;
    this.DataSelectedIndex = this.SelectedIndex;
    data.operateData.currSecTypeIdx = this.SelectedIndex;
    hiWebOsFrame.boe_NetworkWifiAddDialog.rewriteDataOnly();
}
/*******************************************************************
 name:getboeNetSetWifiAddConnPare
 description:获取无线网络所需参数
 input:
 output:
 return
 *******************************************************************/
function getboeNetSetWifiAddConnPare(){
    var data = boeNetSetWifiAddDialogData;
    var wifiConnPare ={
        "SSID":"",
        "secType":0,
        "authType":1,
        "password":""
    }
    wifiConnPare.SSID = data.operateData.currSSID;
    wifiConnPare.secType =data.operateData.secAuthMapList[data.operateData.currSecTypeIdx].security;
    wifiConnPare.authType = data.operateData.secAuthMapList[data.operateData.currSecTypeIdx].authentication;
    wifiConnPare.password = "";
    if(tv == true){
        var currWifiState = model.network.getEnumLink();
        if(currWifiState == 0){
            var connSSID = model.network.getSsid();
            if(connSSID == data.operateData.currSSID){
                wifiConnPare.password =  model.network.getEncryptionPassphrase();
                debugPrint("getboeNetSetWifiAddConnPare:password="+wifiConnPare.password,DebugLevel.ALWAYS);
            }
        }
    }
    return wifiConnPare;
}
/*******************************************************************
 name:boeNetSetWifiAddBtnHandle
 description:获取无线网络所需参数
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiAddBtnHandle(){
    try{
        var data = boeNetSetWifiAddDialogData;
        var inputSSID = $("#boeNetSetSSIDInput").val();
        debugPrint("boeNetSetWifiAddBtnHandle:inputSSID="+inputSSID);
        if(inputSSID.length > 0){
            if(tv == true){
                model.network.setLink_quality(100);
            }
            data.operateData.currSSID = inputSSID;
            if(data.operateData.currSecTypeIdx == 0){
                hiWebOsFrame.createPage('boe_NetworkConnNetDialog',null, hiWebOsFrame.boe_NetworkWifiSetPage, null,function(a){
                    hiWebOsFrame.boe_NetworkConnNetDialog = a;
                    hiWebOsFrame.boe_NetworkWifiAddDialog.close();
                    boeSetNetSetWifiConnPara(getboeNetSetWifiAddConnPare());
                    a.open();
                    a.hiFocus();
                    hiWebOsFrame.boe_NetworkWifiAddDialog.destroy();
                });
            }else{
                debugPrint("boeNetSetWifiAddBtnHandle:create wizardNetSetPWInputDialogId dialog");
                hiWebOsFrame.createPage('boe_NetworkWifiPWInputDialog',null, hiWebOsFrame.boe_NetworkWifiSetPage, null,function(a){
                    hiWebOsFrame.boe_NetworkWifiPWInputDialog = a;
                    setboeNetSetPwInputOperateData(getboeNetSetWifiAddConnPare());
                    a.rewriteDataOnly();
                    hiWebOsFrame.boe_NetworkWifiAddDialog.close();
                    a.open();
                    a.hiFocus();
//                    hiWebOsFrame.boe_NetworkWifiAddDialog.destroy();
                });
            }
        }else{
            debugPrint("boeNetSetWifiAddBtnHandle:inputSSID is null!!",DebugLevel.ERROR);
        }
    }catch (ex){
        debugPrint("boeNetSetWifiAddBtnHandle:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:boeNetSetWifiAddDialogEscHandle
 description:按返回键处理
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiAddDialogEscHandle(){
    hiWebOsFrame.boe_NetworkWifiAddDialog.close();
    hiWebOsFrame.boe_NetworkWifiSetPage.open();
    hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus();
    hiWebOsFrame.boe_NetworkWifiAddDialog.destroy();
}

function boeNetSetWifiAddDialogOnOpen(){
    var data = boeNetSetWifiAddDialogData;
    data.operateData.currSSID = "";
    data.operateData.currSecTypeIdx = 0;
    hiWebOsFrame.boe_NetworkWifiAddDialog.rewriteDataOnly();
}
function boeWifiAddPageTonNextPage(){
    hiWebOsFrame.boe_netbg_page_id.destroy();
    hiWebOsFrame.boe_NetworkWifiAddDialog.destroy();
    hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_complete_page_id = b;
        b.open();
        b.hiFocus();
    });
}
function boeNetSetWifiAddDialogOnDestroy(){
    hiWebOsFrame.boe_NetworkWifiAddDialog = null;
}