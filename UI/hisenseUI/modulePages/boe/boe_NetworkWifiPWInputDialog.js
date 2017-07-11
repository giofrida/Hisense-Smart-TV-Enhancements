/**
 * Created by Admin on 14-6-18.
 */
function getboeNetSetPWInputDialogData(opt){
    opt.CaE = [
        {
            "id":"boeWifiAutoConnPWTitle",
            "description":"头信息",
            "CaEType":"div",
            "strFilter":true
        },
        {
            "id":"boeWifiAutoPWInputText0",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"boeWifiAutoPWInput0",
            "description":"",
            "CaEType":"input",
            "classes":{
                "normal":"navInputContentNormal","focus":"navInputContentFocus","disable":"navInputContentNormal"
            },
            "maxlength":63,
            "inputAttr":"password",
            "inputMethod": "password",
            "handler":{
                "aftEnterHandler":"invokeSKB",
                "befRightHandler":"boePWInputPageTonNextPage"
            },
            "onChange":"boeNetSetPWInputOnChange",
            "nav":{
                "downTo":"boeWifiAutoPWInput1"
            }
        },
        {
            "id":"boeNetSetWifiPWPlaceHolder0",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"boeWifiAutoPWInputText1",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"boeWifiAutoPWInput1",
            "description":"",
            "CaEType":"input",
            "classes":{
                "normal":"navInputContentNormal","focus":"navInputContentFocus","disable":"navInputContentNormal"
            },
            "maxlength":63,
            "inputAttr":"text",
            "inputMethod": "password",
            "handler":{
                "aftEnterHandler":"invokeSKB",
                "befRightHandler":"boePWInputPageTonNextPage"
            },
            "onChange":"boeNetSetPWInputOnChange",
            "nav":{
                "upTo":"boeWifiAutoPWInput0","downTo":"boeNetSetPWCheckBox"
            }
        },
        {
            "id":"boeNetSetWifiPWPlaceHolder1",
            "description":"",
            "CaEType":"span"
        },
        {
            "id": "boeNetSetPWCheckBox",
            "description": "是否显示密码",
            "CaEType": "img",
            "onFocusFun":"boeNetSetPWCheckBoxOnFocus",
            "onBlurFun":"boeNetSetPWCheckBoxOnBlur",
            "handler":{
                "aftEnterHandler":"setboeNetSetPWDisplayFlag",
                "befDownHandler":"boeNetSetPWCheckBoxDownHandle"
            },
            "nav":{
                "upTo":"boeWifiAutoPWInput1","downTo":"boeWifiAutoConnBtn"
            },
            "classes":{
                "normal":"navCheckBoxImg","focus":"navCheckBoxImg"
            }
        },
        {
            "id": "boeNetSetPWCheckInfo",
            "description": "是否显示密码提示信息",
            "CaEType": "span"
        },
        {
            "id":"boeWifiAutoConnBtn",
            "description":"连接按钮",
            "CaEType":"div",
            "classes":{
                "normal":"navDialogFootLeftNormal","focus":"navDialogFootLeftFocus","disable":"navDialogFootLeftDisable"
            },
            "nav":{
                "upTo":"boeNetSetPWCheckBox","rightTo":"boeWifiAutoCancelBtn"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetPwInputConnBtnHandle"
            }
        },
        {
            "id":"boeWifiAutoCancelBtn",
            "description":"取消按钮",
            "CaEType":"div",
            "classes":{
                "normal":"navDialogFootRightNormal","focus":"navDialogFootRightFocus"
            },
            "nav":{
                "upTo":"boeNetSetPWCheckBox","leftTo":"boeWifiAutoConnBtn"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetWifiPWInputEscHandle",
                "befRightHandler":"boePWInputPageTonNextPage"
            }
        }
    ];
    boeInitNetSetPWInputDialog();
    return boeNetSetPWInputDialogData;
}
var boeNetSetPWInputDialogData={
    "boeWifiAutoConnPWTitle":{"Data":""},
    "boeWifiAutoPWInputText0":{"Data":"Password:"},
    "boeWifiAutoPWInput0":{"Data":""},
    "boeNetSetWifiPWPlaceHolder0":{"Data":""},
    "boeWifiAutoPWInputText1":{"Data":"Password:"},
    "boeWifiAutoPWInput1":{"Data":""},
    "boeNetSetWifiPWPlaceHolder1":{"Data":""},
    "boeNetSetPWCheckBox":{"Data":"img/checkbox_selectFocus.png"},
    "boeNetSetPWCheckInfo":{"Data":"Show the password"},
    "boeWifiAutoConnBtn":{"Data":"Connect"},
    "boeWifiAutoCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "SSID":"",
        "secType":0,
        "authType":17,
        "password":"",
        "showPasswordFlag":0
    },
    "langData":{
        "Password:":["Password:"],
        "Show the password":["Show the password"],
        "Connect":["Connect"],
        "Cancel":["Cancel"]
    },
    rewrite:"boeRewriteNetSetPWInputDialog"
}

function boeInitNetSetPWInputDialog(){
    var data = boeNetSetPWInputDialogData;
    data.operateData.SSID = "";
    data.operateData.secType=0;
}
function setboeNetSetPwInputOperateData(wifiConnPare){
    try{
        var data = boeNetSetPWInputDialogData;
        debugPrint("setWizardNetSetPwInputOperateData:SSID="+wifiConnPare.SSID+",secType="+wifiConnPare.secType+",authType="+wifiConnPare.authType+",password="+wifiConnPare.password);
        data.operateData.SSID = wifiConnPare.SSID;
        data.operateData.secType = wifiConnPare.secType;
        data.operateData.authType = wifiConnPare.authType;
        data.operateData.password = wifiConnPare.password;
    }catch (ex){
        debugPrint("setWizardNetSetPwInputOperateData:"+ex.message,DebugLevel.ERROR);
    }

}
function boeNetSetPWInputOnChange(opData,data,iqqi){
    try{
        var data = boeNetSetPWInputDialogData;
        data.operateData.password =  $("#"+this.id).val();
        hiWebOsFrame.boe_NetworkWifiPWInputDialog.rewriteDataOnly();
        if(!!iqqi && data.boeWifiAutoConnBtn.disable == false){
            boeNetSetPwInputConnBtnHandle();
        }
    }catch (ex){
        debugPrint("settingNetSetPWInputOnChange:"+ex.message,DebugLevel.ERROR);
        hiWebOsFrame.boe_NetworkWifiPWInputDialog.hiFocus();
    }
}
function getboeNetSetPwInputPara(){
    try{
        var wifiConnPara = {
            "SSID":"",
            "secType":0,
            "authType":17,
            "password":""
        };
        var data = boeNetSetPWInputDialogData;
        wifiConnPara.SSID = data.operateData.SSID;
        wifiConnPara.secType = data.operateData.secType;
        wifiConnPara.authType = data.operateData.authType;
        wifiConnPara.password = data.operateData.password;
    }catch (ex){
        debugPrint("getSettingNetSetPwInputPara:"+ex.message,DebugLevel.ERROR);
    }
    debugPrint("getSettingNetSetPwInputPara:"+wifiConnPara.SSID+","+wifiConnPara.secType+","+wifiConnPara.authType+","+wifiConnPara.password);
    return wifiConnPara;
}
function boeRewriteNetSetPWInputDialog(data){
    data.boeWifiAutoConnPWTitle.Data = data.operateData.SSID;
    data.boeWifiAutoPWInput0.Data = data.operateData.password;
    data.boeWifiAutoPWInput1.Data = data.operateData.password;
    data.boeNetSetWifiPWPlaceHolder0.Data = getCurrentContentLanguage("Show the virtual keyboard by pressing OK button");
    data.boeNetSetWifiPWPlaceHolder1.Data = getCurrentContentLanguage("Show the virtual keyboard by pressing OK button");
    if(data.operateData.password.length > 0){
        data.boeWifiAutoConnBtn.disable = false;
    }else{
        data.boeWifiAutoConnBtn.disable = true;
    }
    if(data.operateData.showPasswordFlag == 0){
        data.boeWifiAutoPWInput0.disable = false;
        data.boeWifiAutoPWInput1.disable = true;
    }else{
        data.boeWifiAutoPWInput0.disable = true;
        data.boeWifiAutoPWInput1.disable = false;
    }
    if(data.operateData.password == ""){
        if(data.operateData.showPasswordFlag == 1){
            $("#boeNetSetWifiPWPlaceHolder1").css("display","block");
        }else{
            $("#boeNetSetWifiPWPlaceHolder0").css("display","block");
        }
    }else{
        $("#boeNetSetWifiPWPlaceHolder0").css("display","none");
        $("#boeNetSetWifiPWPlaceHolder1").css("display","none");
    }
}
///*******************************************************************
// name:wizardNetSetPWInputRecordPW
// description:记录当前输入的密码
// input:
// output:
// return
// *******************************************************************/
//function wizardNetSetPWInputRecordPW(){
//    var data = boeNetSetPWInputDialogData;
//    data.operateData.password = $("#boeWifiAutoPWInput0").val();
//    debugPrint("wizardNetSetPWInputRecordPW:"+data.operateData.password);
//    if(data.operateData.password.length == 0){
//        hiWebOsFrame.boe_NetworkWifiPWInputDialog.hiFocus("boeWifiAutoCancelBtn");
//    }
//}
function boeNetSetPWCheckBoxDownHandle(){
    var data = boeNetSetPWInputDialogData;
    if(data.operateData.password.length == 0){
        hiWebOsFrame.boe_NetworkWifiPWInputDialog.hiBlur("boeNetSetPWCheckBox");
        hiWebOsFrame.boe_NetworkWifiPWInputDialog.hiFocus("boeWifiAutoCancelBtn");
    }
}
function boeNetSetPWCheckBoxOnFocus(){
    var data = boeNetSetPWInputDialogData;
    if(data.operateData.showPasswordFlag == 0){
        $("#boeNetSetPWCheckBox").attr("src","img/checkbox_unselectFocus.png");
        data.boeNetSetPWCheckBox.Data = "img/checkbox_unselectFocus.png";
    }else{
        $("#boeNetSetPWCheckBox").attr("src","img/checkbox_selectFocus.png");
        data.boeNetSetPWCheckBox.Data = "img/checkbox_selectFocus.png";
    }
    //hiWebOsFrame.boe_NetworkWifiPWInputDialog.rewriteDataOnly();
}
function boeNetSetPWCheckBoxOnBlur(){
    var data = boeNetSetPWInputDialogData;
    if(data.operateData.showPasswordFlag == 0){
        $("#boeNetSetPWCheckBox").attr("src","img/checkbox_unselectNormal.png");
        data.boeNetSetPWCheckBox.Data = "img/checkbox_unselectNormal.png";
    }else{
        $("#boeNetSetPWCheckBox").attr("src","img/checkbox_selectNormal.png");
        data.boeNetSetPWCheckBox.Data = "img/checkbox_selectNormal.png";
    }
    //hiWebOsFrame.boe_NetworkWifiPWInputDialog.rewriteDataOnly();
}
function setboeNetSetPWDisplayFlag(){
    try{
        var data = boeNetSetPWInputDialogData;
        if(data.operateData.showPasswordFlag == 0){
            data.operateData.showPasswordFlag = 1;
            data.boeNetSetPWCheckBox.Data = "img/checkbox_selectFocus.png";
            $("#boeWifiAutoPWInput1").parent().css("display","block");
            $("#boeWifiAutoPWInput0").parent().css("display","none");
        }else{
            data.operateData.showPasswordFlag = 0;
            data.boeNetSetPWCheckBox.Data = "img/checkbox_unselectFocus.png";
            $("#boeWifiAutoPWInput0").parent().css("display","block");
            $("#boeWifiAutoPWInput1").parent().css("display","none");
        }

        hiWebOsFrame.boe_NetworkWifiPWInputDialog.rewriteDataOnly();
    }catch (ex){
        debugPrint("setboeNetSetPWDisplayFlag:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:wizardNetSetPwInputConnBtnHandle
 description:连接操作
 input:
 output:
 return
 *******************************************************************/
function boeNetSetPwInputConnBtnHandle(){
    try{

        hiWebOsFrame.createPage('boe_NetworkConnNetDialog',null, hiWebOsFrame.boe_NetworkWifiSetPage, null,function(a){
            hiWebOsFrame.boe_NetworkWifiPWInputDialog.close();
            hiWebOsFrame.boe_NetworkConnNetDialog = a;
            //hiWebOsFrame.boe_NetworkWifiPWInputDialog.close();
            boeSetNetSetWifiConnPara(getboeNetSetPwInputPara());
            a.open();
            a.hiFocus();
//            hiWebOsFrame.NetSetPWInputDialog.destroy();
        });
    }catch (ex){
        debugPrint("boeNetSetPwInputConnBtnHandle:"+ex.message,DebugLevel.ERROR);
    }
}

//function settingNetSetClosePWInputOriginPage(){
//    var originId = hiWebOsFrame.boe_NetworkWifiPWInputDialog.origin.page.id;
//    debugPrint("settingNetSetClosePWInputOriginPage:originId="+originId,DebugLevel.ALWAYS);
//    if(originId == "settingNetSetWifiAddDialogId"){
//        hiWebOsFrame.NetSetWifiAddDialog.destroy();
//        hiWebOsFrame.NetSetAdvanceListDialog.destroy();
//    }else{
//
//    }
//}
/*******************************************************************
 name:wizardNetSetWifiPWInputEscHandle
 description:弹出密码框进行输入密码后点击取消按钮, 则返回到Wifi设置界面中
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiPWInputEscHandle(){
    debugPrint("boeNetSetWifiPWInputEscHandle:"+this.page.origin.id);
    hiWebOsFrame.boe_NetworkWifiPWInputDialog.close();
    if(this.page.origin.id == "boe_NetworkWifiSetPage")
    {
        this.page.origin.hiFocus();
    }
    else {
        this.page.origin.open();
        this.page.origin.hiFocus();
    }
    hiWebOsFrame.boe_NetworkWifiPWInputDialog.destroy();
}
function boeNetSetPWInputDialogOnOpen(){
    try{
        var data = boeNetSetPWInputDialogData;
        debugPrint("setWizardNetSetPwInputOperateData:SSID="+data.operateData.SSID,DebugLevel.ALWAYS);
        if(data.operateData.showPasswordFlag == 0){
            $("#boeWifiAutoPWInput0").parent().css("display","block");
            $("#boeWifiAutoPWInput1").parent().css("display","none");
            hiWebOsFrame.boe_NetworkWifiPWInputDialog.hiFocus("boeWifiAutoPWInput0");
            data.boeNetSetPWCheckBox.Data = "img/checkbox_unselectNormal.png";
        }else{
            $("#boeWifiAutoPWInput1").parent().css("display","block");
            $("#boeWifiAutoPWInput0").parent().css("display","none");
            hiWebOsFrame.boe_NetworkWifiPWInputDialog.hiFocus("boeWifiAutoPWInput1");
            data.boeNetSetPWCheckBox.Data = "img/checkbox_selectNormal.png";
        }

        hiWebOsFrame.boe_NetworkWifiPWInputDialog.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingNetSetPWInputDialogOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}
function boePWInputPageTonNextPage(){
    hiWebOsFrame.boe_netbg_page_id.destroy();
    hiWebOsFrame.boe_NetworkWifiPWInputDialog.destroy();
    hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_complete_page_id = b;
        b.open();
        b.hiFocus();
    });
}
function boeNetSetPWInputDialogOnDestroy(){
    hiWebOsFrame.boe_NetworkWifiPWInputDialog = null;
}
