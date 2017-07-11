/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetSetWifiAddDialogData(opt){
    opt.CaE = [
        {
            "id":"wizardNetSetWifiAddHeadTitle",
            "description":"头信息",
            "CaEType":"div"
        },
        {
            "id":"wizardNetSetSSIDInputTitle",
            "description":"SSID输入标题",
            "CaEType":"div"
        },
        {
            "id": "wizardNetSetSSIDInput",
            "description": "输入控件",
            "classes": {
                "normal": "wizardInputContentNormal", "focus": "wizardInputContentFocus",
                "disable": "wizardInputContentFocus"
            },
            "CaEType": "input",
            "maxlength":32,
            "inputAttr":"text",
            "handler":{
                "aftEnterHandler":"invokeSKB",
                "befDownHandler":"settingNetWifiAddRecordSSID"
            },

            "nav":{
                "downTo":"wizardNetSetSecSelectFrame"
            },
            "onChange":function(){
                var inputName = $("#"+this.id).val();
                if(inputName.length > 0){
                    $("#wizardNetSetSSIDInputPlaceHolder").css("display","none");
                }else{
                    $("#wizardNetSetSSIDInputPlaceHolder").css("display","block");
                }
            }
        },
        {
            "id":"wizardNetSetSSIDInputPlaceHolder",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"wizardNetSetSecSelectTitle",
            "description":"安全类型选择标题",
            "CaEType":"div"
        },
        {
            "id":"wizardNetSetSecSelectFrame",
            "description":"安全类型选择框",
            "CaEType":"div",
            "classes":{
                "normal":"wizardSelectFrameNormal","focus":"wizardSelectFrameFocus",
                "selected":"wizardSelectFrameNormal"
            },
            "nav":{
                "enterTo":"wizardNetSetSecSelectListFrame",
                "downTo":"wizardNetSetWifiAddConnBtn","upTo":"wizardNetSetSSIDInput"
            }
        },
        {
            "id":"wizardNetSetSecSelectType",
            "description":"安全类型选择类型",
            "CaEType":"div"
        },
        {
            "id":"wizardNetSetSecSelectListFrame",
            "description": "下拉列表",
            "CaEType": "Container",
            "firstFocusId":"wizardNetSetSecSelectList",
            "classes": {
                "normal": "wizardSelectListFrameNormal", "focus": "wizardSelectListFrameFocus",
                "disable": "wizardSelectListFrameNormal", "selected": "wizardSelectListFrameFocus"
            },
            "nav": {
                "downTo":"","enterTo":"wizardNetSetSecSelectFrame"
            },
            "CaE":[
                {
                    "id": "wizardNetSetSecSelectList",
                    "description": "安全类型列表",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "wizardSelectLiNormal", "focus": "wizardSelectLiFocus",
                        "disable": "wizardSelectLiNormal", "dataSelected": "wizardSelectLiNormal"
                    },
                    "oriCaE":[
                        {
                            "id":"wizardNetSetSecTypeItem",
                            "description":"安全类型",
                            "CaEType":"div"
                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": [ "wizardNetSetSecTypeItem"],
                        "PageSize":5
                    },
                    "handler":{
                        "aftEnterHandler":"wizardNetSetWifiSelectSecType"
                    },
                    "nav":{
                        "enterTo":"wizardNetSetSecSelectFrame",
                        "upTo":"wizardNetSetSecSelectFrame"
                    }
                }
            ]
        },
        {
            "id":"wizardNetSetWifiAddConnBtn",
            "description":"网络添加按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus",
                "disable":"wizardDialogFootLeftDisable"
            },
            "nav":{
                "upTo":"wizardNetSetSecSelectFrame","rightTo":"wizardNetSetWifiAddCancelBtn"
            },
            "handler":{
                "aftEnterHandler":"wizardNetSetWifiAddBtnHandle"
            }
        },
        {
            "id":"wizardNetSetWifiAddCancelBtn",
            "description":"取消按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "upTo":"wizardNetSetSecSelectFrame","leftTo":"wizardNetSetWifiAddConnBtn"
            },
            "handler":{
                "aftEnterHandler":"settingNetSetWifiAddDialogEscHandle"
            }
        }
    ];
    wizardInitNetSetWifiAddDialog();
    return wizardNetSetWifiAddDialogData;
}
var wizardNetSetWifiAddDialogData={

    "wizardNetSetWifiAddHeadTitle":{"Data":"Add Wireless Network"},
    "wizardNetSetSSIDInputTitle":{"Data":"SSID:"},
    "wizardNetSetSSIDInput":{"Data":""},
    "wizardNetSetSSIDInputPlaceHolder":{"Data":""},
    "wizardNetSetSecSelectTitle":{"Data":"Security:"},
    "wizardNetSetSecSelectType":{"Data":"none"},
    "wizardNetSetSecSelectListFrame":{
        "Data":{
            "wizardNetSetSecSelectList":{
                "Data":[
                    {
                        "wizardNetSetSecTypeItem":{"Data":"None"}
                    },
                    {
                        "wizardNetSetSecTypeItem":{"Data":"WEP"}
                    },
                    {
                        "wizardNetSetSecTypeItem":{"Data":"WPA-PSK(TKIP)"}
                    },
                    {
                        "wizardNetSetSecTypeItem":{"Data":"WPA-PSK(AES)"}
                    },
                    {
                        "wizardNetSetSecTypeItem":{"Data":"WPA2-PSK(TKIP)"}
                    },
                    {
                        "wizardNetSetSecTypeItem":{"Data":"WPA2-PSK(AES)"}
                    },
                    {
                        "wizardNetSetSecTypeItem":{"Data":"WPA/WPA2-PSK(Auto)"}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        }
    },
    "wizardNetSetWifiAddConnBtn":{"Data":"Add"},
    "wizardNetSetWifiAddCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "currSSID":"",
        "currSignal":100,
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
                "security":15,
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
        "Security:":["Securtiy:"],
        "Add":["Add"],
        "Cancel":["Cancel"],
        "None":["None"]
    },
    rewrite:"wizardRewriteNetSetWifiAddDialog"
}
function wizardInitNetSetWifiAddDialog(){
    var data = wizardNetSetWifiAddDialogData;
    data.operateData.currSSID = "";
    data.operateData.currSecTypeIdx = 0;
    data.operateData.currSignal = 100;
}
function wizardRewriteNetSetWifiAddDialog(data){
    data.wizardNetSetSSIDInput.Data = data.operateData.currSSID;
    data.wizardNetSetSecSelectType.Data = data.operateData.wifiSecurityTypeList[data.operateData.currSecTypeIdx];
    data.wizardNetSetSecSelectListFrame.Data.wizardNetSetSecSelectList.SelectedIndex = data.operateData.currSecTypeIdx;
}

function settingNetWifiAddRecordSSID(){
    try{
        var data = wizardNetSetWifiAddDialogData;
        var inputSSID = $("#wizardNetSetSSIDInput").val();
        debugPrint("settingNetWifiAddRecordSSID:inputSSID="+inputSSID,DebugLevel.ALWAYS);
        data.operateData.currSSID = inputSSID;
    }catch (ex){
        debugPrint("settingNetWifiAddRecordSSID:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:wizardNetSetWifiSelectSecType
 description:选择网络安全类型
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetWifiSelectSecType(){
    var data = wizardNetSetWifiAddDialogData;
    this.DataSelectedIndex = this.SelectedIndex;
    data.operateData.currSecTypeIdx = this.SelectedIndex;
    hiWebOsFrame.NetSetWifiAddDialog.rewriteDataOnly();
}
/*******************************************************************
 name:getWizardNetSetWifiAddConnPare
 description:获取无线网络所需参数
 input:
 output:
 return
 *******************************************************************/
function getWizardNetSetWifiAddConnPare(){
    var data = wizardNetSetWifiAddDialogData;
    var wifiConnPare ={
        "SSID":"",
        "secType":0,
        "authType":1,
        "password":"",
        "signal":100
    }
    wifiConnPare.SSID = data.operateData.currSSID;
    wifiConnPare.secType =data.operateData.secAuthMapList[data.operateData.currSecTypeIdx].security;
    wifiConnPare.authType = data.operateData.secAuthMapList[data.operateData.currSecTypeIdx].authentication;
    wifiConnPare.password = "";
    wifiConnPare.signal = data.operateData.currSignal;
    if(tv == true){
        var currWifiState = model.network.getEnumLink();
        if(currWifiState == 0){
            var connSSID = model.network.getSsid();
            if(connSSID == data.operateData.currSSID){
                wifiConnPare.password =  model.network.getEncryptionPassphrase();
                debugPrint("getWizardNetSetWifiAddConnPare:password="+wifiConnPare.password,DebugLevel.ALWAYS);
            }
        }
    }
    return wifiConnPare;
}
/*******************************************************************
 name:wizardNetSetWifiAddBtnHandle
 description:获取无线网络所需参数
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetWifiAddBtnHandle(){
    try{
        var data = wizardNetSetWifiAddDialogData;
        var inputSSID = $("#wizardNetSetSSIDInput").val();
        debugPrint("wizardNetSetWifiAddBtnHandle:inputSSID="+inputSSID);
        if(inputSSID.length > 0){
            if(tv == true){
                model.network.setLink_quality(100);
            }
            data.operateData.currSSID = inputSSID;
            if(data.operateData.currSecTypeIdx == 0){
                hiWebOsFrame.createPage('settingNetSetConnNetDialogId',null, hiWebOsFrame.NetSetWifiSetPage, null,function(a){
                    hiWebOsFrame.NetSetConnNetDialog = a;
                    hiWebOsFrame.NetSetWifiAddDialog.close();
                    settingSetNetSetWifiConnPara(getWizardNetSetWifiAddConnPare());
                    a.open();
                    a.hiFocus();
                    hiWebOsFrame.NetSetWifiAddDialog.destroy();
                });
            }else{
                debugPrint("wizardNetSetWifiAddBtnHandle:create wizardNetSetPWInputDialogId dialog");
                hiWebOsFrame.createPage('settingNetSetPWInputDialogId',null, hiWebOsFrame.NetSetWifiAddDialog, null,function(a){
                    hiWebOsFrame.NetSetPWInputDialog = a;
                    setWizardNetSetPwInputOperateData(getWizardNetSetWifiAddConnPare());
                    a.rewriteDataOnly();
                    hiWebOsFrame.NetSetWifiAddDialog.close();
                    a.open();
                    a.hiFocus();
//                    hiWebOsFrame.NetSetWifiAddDialog.destroy();
                });
            }
        }else{
            debugPrint("wizardNetSetWifiAddBtnHandle:inputSSID is null!!",DebugLevel.ERROR);
        }
    }catch (ex){
        debugPrint("wizardNetSetWifiAddBtnHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetWifiAddDialogOnOpen(){
    var inputSSID = $("#wizardNetSetSSIDInput").val();
    if(inputSSID.length > 0){
        $("#wizardNetSetSSIDInputPlaceHolder").css("display","none");
    }else{
        $("#wizardNetSetSSIDInputPlaceHolder").css("display","block");
    }
    $("#wizardNetSetSSIDInputPlaceHolder").html(getCurrentContentLanguage("Show the virtual keyboard by pressing OK button"));
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $("#wizardNetSetSecSelectListFrame").css({"left":"363px","right":"0"});
    }
    else {
        $("#wizardNetSetSecSelectListFrame").css({"right":"363px","left":"0"});

    }
}
/*******************************************************************
 name:settingNetSetWifiAddDialogEscHandle
 description:按返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiAddDialogEscHandle(){
    hiWebOsFrame.NetSetWifiAddDialog.close();
    hiWebOsFrame.NetSetWifiSetPage.hiFocus();
    hiWebOsFrame.NetSetWifiAddDialog.destroy();
}

function settingNetSetWifiAddDialogOnDestroy(){
    hiWebOsFrame.NetSetWifiAddDialog = null;
}