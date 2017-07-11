/**
 * Created by Admin on 14-6-18.
 */
function getWizardNetSetPWInputDialogData(opt){
    opt.CaE = [
        {
            "id":"wizardWifiAutoConnPWTitle",
            "description":"头信息",
            "CaEType":"div",
            "strFilter":true
        },
        {
            "id":"wizardWifiAutoPWInputText0",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"wizardWifiAutoPWInput0",
            "description":"",
            "CaEType":"input",
            "classes":{
                "normal":"wizardInputContentNormal","focus":"wizardInputContentFocus","disable":"wizardInputContentNormal"
            },
            "maxlength":63,
            "inputAttr":"password",
            "inputMethod": "password",
            "handler":{
                "aftEnterHandler":"invokeSKB"
            },
            "onChange":"settingNetSetPWInputOnChange",
            "nav":{
                "downTo":"wizardWifiAutoPWInput1"
            }
        },
        {
            "id":"settingNetSetWifiPWPlaceHolder0",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"wizardWifiAutoPWInputText1",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"wizardWifiAutoPWInput1",
            "description":"",
            "CaEType":"input",
            "classes":{
                "normal":"wizardInputContentNormal","focus":"wizardInputContentFocus","disable":"wizardInputContentNormal"
            },
            "maxlength":63,
            "inputAttr":"text",
            "inputMethod": "password",
            "handler":{
                "aftEnterHandler":"invokeSKB"
            },
            "onChange":"settingNetSetPWInputOnChange",
            "nav":{
                "upTo":"wizardWifiAutoPWInput0","downTo":"settingNetSetPWCheckBox"
            }
        },
        {
            "id":"settingNetSetWifiPWPlaceHolder1",
            "description":"",
            "CaEType":"span"
        },
        {
            "id": "settingNetSetPWCheckBox",
            "description": "是否显示密码",
            "CaEType": "img",
            "onFocusFun":"settingNetSetPWCheckBoxOnFocus",
            "onBlurFun":"settingNetSetPWCheckBoxOnBlur",
            "handler":{
                "aftEnterHandler":"setSettingNetSetPWDisplayFlag",
                "befDownHandler":"settingNetSetPWCheckBoxDownHandle"
            },
            "nav":{
                "upTo":"wizardWifiAutoPWInput1","downTo":"wizardWifiAutoConnBtn"
            },
            "classes":{
                "normal":"wizardCheckBoxImg","focus":"wizardCheckBoxImg"
            }
        },
        {
            "id": "settingNetSetPWCheckInfo",
            "description": "是否显示密码提示信息",
            "CaEType": "span"
        },
        {
            "id":"wizardWifiAutoConnBtn",
            "description":"连接按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus","disable":"wizardDialogFootLeftDisable"
            },
            "nav":{
                "upTo":"settingNetSetPWCheckBox","rightTo":"wizardWifiAutoCancelBtn"
            },
            "handler":{
                "aftEnterHandler":"settingNetSetPwInputConnBtnHandle"
            }
        },
        {
            "id":"wizardWifiAutoCancelBtn",
            "description":"取消按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "upTo":"settingNetSetPWCheckBox","leftTo":"wizardWifiAutoConnBtn"
            },
            "handler":{
                "aftEnterHandler":"wizardNetSetWifiPWInputEscHandle"
            }
        }
    ];
    settingInitNetSetPWInputDialog();
    return wizardNetSetPWInputDialogData;
}
var wizardNetSetPWInputDialogData={
    "wizardWifiAutoConnPWTitle":{"Data":""},
    "wizardWifiAutoPWInputText0":{"Data":"Password"},
    "wizardWifiAutoPWInput0":{"Data":""},
    "settingNetSetWifiPWPlaceHolder0":{"Data":""},
    "wizardWifiAutoPWInputText1":{"Data":"Password"},
    "wizardWifiAutoPWInput1":{"Data":""},
    "settingNetSetWifiPWPlaceHolder1":{"Data":""},
    "settingNetSetPWCheckBox":{"Data":"img/checkbox_selectFocus.png"},
    "settingNetSetPWCheckInfo":{"Data":"Show the password"},
    "wizardWifiAutoConnBtn":{"Data":"Connect"},
    "wizardWifiAutoCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "SSID":"",
        "secType":0,
        "authType":17,
        "password":"",
        "signal":100,
        "showPasswordFlag":1
    },
    "langData":{
        "Password":["Password"],
        "Show the password":["Show the password"],
        "Connect":["Connect"],
        "Cancel":["Cancel"]
    },
    rewrite:"settingRewriteNetSetPWInputDilaog"
}

function settingInitNetSetPWInputDialog(){
    var data = wizardNetSetPWInputDialogData;
    data.operateData.SSID = "";
    data.operateData.secType=0;
    data.operateData.showPasswordFlag = 1;
}
function setWizardNetSetPwInputOperateData(wifiConnPare){
    try{
        var data = wizardNetSetPWInputDialogData;
        data.operateData.SSID = wifiConnPare.SSID;
        data.operateData.secType = wifiConnPare.secType;
        data.operateData.authType = wifiConnPare.authType;
        data.operateData.password = wifiConnPare.password;
        data.operateData.signal = wifiConnPare.signal;
        debugPrint("setWizardNetSetPwInputOperateData:SSID="+wifiConnPare.SSID+",secType="+wifiConnPare.secType+",authType="+wifiConnPare.authType+",password="+wifiConnPare.password+","+wifiConnPare.signal,DebugLevel.ALWAYS);
    }catch (ex){
        debugPrint("setWizardNetSetPwInputOperateData:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetPWInputOnChange(opData,data,iqqi){
    try{
        var data = wizardNetSetPWInputDialogData;
        data.operateData.password =  $("#"+this.id).val();
        hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
        if(!!iqqi && data.wizardWifiAutoConnBtn.disable == false){
            settingNetSetPwInputConnBtnHandle();
        }
    }catch (ex){
        debugPrint("settingNetSetPWInputOnChange:"+ex.message,DebugLevel.ERROR);
        hiWebOsFrame.NetSetPWInputDialog.hiFocus();
    }
}
function getSettingNetSetPwInputPara(){
    try{
        var wifiConnPara = {
            "SSID":"",
            "secType":0,
            "authType":17,
            "password":"",
            "signal":100
        };
        var data = wizardNetSetPWInputDialogData;
        wifiConnPara.SSID = data.operateData.SSID;
        wifiConnPara.secType = data.operateData.secType;
        wifiConnPara.authType = data.operateData.authType;
        wifiConnPara.password = data.operateData.password;
        wifiConnPara.signal = data.operateData.signal;
    }catch (ex){
        debugPrint("getSettingNetSetPwInputPara:"+ex.message,DebugLevel.ERROR);
    }
    debugPrint("getSettingNetSetPwInputPara:"+wifiConnPara.SSID+","+wifiConnPara.secType+","+wifiConnPara.authType+","+wifiConnPara.password+","+wifiConnPara.signal);
    return wifiConnPara;
}
function settingRewriteNetSetPWInputDilaog(data){
    data.wizardWifiAutoConnPWTitle.Data = data.operateData.SSID;
    data.wizardWifiAutoPWInput0.Data = data.operateData.password;
    data.wizardWifiAutoPWInput1.Data = data.operateData.password;
    data.settingNetSetWifiPWPlaceHolder0.Data = getCurrentContentLanguage("Show the virtual keyboard by pressing OK button");
    data.settingNetSetWifiPWPlaceHolder1.Data = getCurrentContentLanguage("Show the virtual keyboard by pressing OK button");
    if($.inArray(data.operateData.secType,[5,11,16]) != -1){
        if(data.operateData.password.length > 7){
            data.wizardWifiAutoConnBtn.disable = false;
        }else{
            data.wizardWifiAutoConnBtn.disable = true;
        }
    }else{
    if(data.operateData.password.length > 0){
        data.wizardWifiAutoConnBtn.disable = false;
    }else{
        data.wizardWifiAutoConnBtn.disable = true;
        }
    }
    if(data.operateData.showPasswordFlag == 0){
        data.wizardWifiAutoPWInput0.disable = false;
        data.wizardWifiAutoPWInput1.disable = true;
    }else{
        data.wizardWifiAutoPWInput0.disable = true;
        data.wizardWifiAutoPWInput1.disable = false;
    }
    if(data.operateData.password == ""){
        if(data.operateData.showPasswordFlag == 1){
            $("#settingNetSetWifiPWPlaceHolder1").css("display","block");
        }else{
            $("#settingNetSetWifiPWPlaceHolder0").css("display","block");
        }
    }else{
        $("#settingNetSetWifiPWPlaceHolder0").css("display","none");
        $("#settingNetSetWifiPWPlaceHolder1").css("display","none");
    }
}

function settingNetSetPWCheckBoxDownHandle(){
    var data = wizardNetSetPWInputDialogData;
    if(data.wizardWifiAutoConnBtn.disable == true){
        hiWebOsFrame.NetSetPWInputDialog.hiBlur("settingNetSetPWCheckBox");
        hiWebOsFrame.NetSetPWInputDialog.hiFocus("wizardWifiAutoCancelBtn");
        return;
    }
}
function settingNetSetPWCheckBoxOnFocus(){
    var data = wizardNetSetPWInputDialogData;
    if(data.operateData.showPasswordFlag == 0){
        $("#settingNetSetPWCheckBox").attr("src","img/checkbox_unselectFocus.png");
        data.settingNetSetPWCheckBox.Data = "img/checkbox_unselectFocus.png";
    }else{
        $("#settingNetSetPWCheckBox").attr("src","img/checkbox_selectFocus.png");
        data.settingNetSetPWCheckBox.Data = "img/checkbox_selectFocus.png";
    }
//    hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
}
function settingNetSetPWCheckBoxOnBlur(){
    var data = wizardNetSetPWInputDialogData;
    if(data.operateData.showPasswordFlag == 0){
        $("#settingNetSetPWCheckBox").attr("src","img/checkbox_unselectNormal.png");
        data.settingNetSetPWCheckBox.Data = "img/checkbox_unselectNormal.png";
    }else{
        $("#settingNetSetPWCheckBox").attr("src","img/checkbox_selectNormal.png");
        data.settingNetSetPWCheckBox.Data = "img/checkbox_selectNormal.png";
    }
//    hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
}
function setSettingNetSetPWDisplayFlag(){
    try{
        var data = wizardNetSetPWInputDialogData;
        if(data.operateData.showPasswordFlag == 0){
            data.operateData.showPasswordFlag = 1;
            data.settingNetSetPWCheckBox.Data = "img/checkbox_selectFocus.png";
            $("#wizardWifiAutoPWInput1").parent().css("display","block");
            $("#wizardWifiAutoPWInput0").parent().css("display","none");
        }else{
            data.operateData.showPasswordFlag = 0;
            data.settingNetSetPWCheckBox.Data = "img/checkbox_unselectFocus.png";
            $("#wizardWifiAutoPWInput0").parent().css("display","block");
            $("#wizardWifiAutoPWInput1").parent().css("display","none");
        }

        hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
    }catch (ex){
        debugPrint("setSettingNetSetPWDisplayFlag:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingNetSetPwInputConnBtnHandle
 description:连接操作
 input:
 output:
 return
 *******************************************************************/
function settingNetSetPwInputConnBtnHandle(){
    try{
        hiWebOsFrame.createPage('settingNetSetConnNetDialogId',null, hiWebOsFrame.NetSetWifiSetPage, null,function(a){
            hiWebOsFrame.NetSetConnNetDialog = a;
            hiWebOsFrame.NetSetPWInputDialog.close();
            settingNetSetClosePWInputOriginPage();
            settingSetNetSetWifiConnPara(getSettingNetSetPwInputPara());
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetSetPWInputDialog.destroy();
        });
    }catch (ex){
        debugPrint("settingNetSetPwInputConnBtnHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetClosePWInputOriginPage(){
    try{
        var originId = hiWebOsFrame.NetSetPWInputDialog.origin.page.id;
        debugPrint("settingNetSetClosePWInputOriginPage:originId="+originId,DebugLevel.ALWAYS);
        if(originId == "settingNetSetWifiAddDialogId"){
            hiWebOsFrame.NetSetWifiAddDialog.destroy();
        }else{

        }
    }catch (ex){
        DBG_ERROR("settingNetSetClosePWInputOriginPage:"+ex.message);
    }

}
/*******************************************************************
 name:wizardNetSetWifiPWInputEscHandle
 description:弹出密码框进行输入密码后点击取消按钮, 则返回到Wifi设置界面中
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetWifiPWInputEscHandle(){
    debugPrint("wizardNetSetWifiPWInputEscHandle:"+this.page.origin.id);
    hiWebOsFrame.NetSetPWInputDialog.close();
    if(this.page.origin.id == "settingNetSetWifiSetPageId"){
        this.page.origin.hiFocus();
    }else{
        this.page.origin.open();
        this.page.origin.hiFocus();
    }
    hiWebOsFrame.NetSetPWInputDialog.destroy();
}
function settingNetSetPWInputDialogOnOpen(){
    try{
        var data = wizardNetSetPWInputDialogData;
      //  $("#wizardWifiAutoPWInput0").attr("placeholder",getCurrentContentLanguage("invoke virtual keyboard with OK button"));
       // $("#wizardWifiAutoPWInput1").attr("placeholder",getCurrentContentLanguage("invoke virtual keyboard with OK button"));
        if(data.operateData.showPasswordFlag == 0){
            $("#wizardWifiAutoPWInput0").parent().css("display","block");
            $("#wizardWifiAutoPWInput1").parent().css("display","none");
            hiWebOsFrame.NetSetPWInputDialog.hiFocus("wizardWifiAutoPWInput0");
            data.settingNetSetPWCheckBox.Data = "img/checkbox_unselectNormal.png";
        }else{
            $("#wizardWifiAutoPWInput1").parent().css("display","block");
            $("#wizardWifiAutoPWInput0").parent().css("display","none");
            hiWebOsFrame.NetSetPWInputDialog.hiFocus("wizardWifiAutoPWInput1");
            data.settingNetSetPWCheckBox.Data = "img/checkbox_selectNormal.png";
        }
        hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingNetSetPWInputDialogOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}
function wizardNetSetPWInputDialogOnDestroy(){
    hiWebOsFrame.NetSetPWInputDialog = null;
}
