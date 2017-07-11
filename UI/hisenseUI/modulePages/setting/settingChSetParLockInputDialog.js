/**
 * Created by Administrator on 14-6-18.
 */
function getSettingChSetParLockInputDialogData(opt)
{
    opt.CaE= [

        {
            "id": "settingChSetParLockInputHeadText",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "settingChSetParLockInputTip",
            "description": "",
            "CaEType": "div"
        },

        {
            "id": "settingChSetParLockInput1",
            "description": "",
            "CaEType": "input",
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "rightTo":"settingChSetParLockInput2","downTo":"settingChSetParLockInputBtn1"},
            "handler":{
            },
            "inputAttr":"numberpassword",
            "maxlength":"1",
            "onChange":"settingChSetParLockInputSetNext",
            "onFocusFun":"settingChSetParLockClearCurrInput"
        },
        {
            "id": "settingChSetParLockInput2",
            "description": "",
            "CaEType": "input",
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"settingChSetParLockInput1","rightTo":"settingChSetParLockInput3","downTo":"settingChSetParLockInputBtn1"},
            "handler":{
            },
            "inputAttr":"numberpassword",
            "maxlength":"1",
            "onChange":"settingChSetParLockInputSetNext",
            "onFocusFun":"settingChSetParLockClearCurrInput"
        },
        {
            "id": "settingChSetParLockInput3",
            "description": "",
            "CaEType": "input",
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"settingChSetParLockInput2","rightTo":"settingChSetParLockInput4","downTo":"settingChSetParLockInputBtn1"},
            "handler":{
            },
            "inputAttr":"numberpassword",
            "maxlength":"1",
            "onChange":"settingChSetParLockInputSetNext",
            "onFocusFun":"settingChSetParLockClearCurrInput"

        },
        {
            "id": "settingChSetParLockInput4",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"settingChSetParLockInput3","downTo":"settingChSetParLockInputBtn1"},
            "handler":{

            },
            "inputAttr":"numberpassword",
            "maxlength":"1",
            "onChange":"settingChSetParLockInputSetNext",
            "onFocusFun":"settingChSetParLockClearCurrInput"

        },
        {
            "id":"settingChSetParLockInputBtn1",
            "description":"ok",
            "classes": {
                "normal": "wizardDialogFootLeftNormal", "focus": "wizardDialogFootLeftFocus"
            },
            "nav": { "upTo":"settingChSetParLockInput1","rightTo":"settingChSetParLockInputBtn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"settingChSetParLockInputOKHandle"//点击enter事件后处理开关转换
            }
        },
        {
            "id":"settingChSetParLockInputBtn2",
            "description":"Cancel",
            "classes": {
                "normal": "wizardDialogFootRightNormal", "focus": "wizardDialogFootRightFocus"
            },
            "nav": {  "upTo":"settingChSetParLockInput1","leftTo":"settingChSetParLockInputBtn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"settingChSetParLockInputCancelHandle"//点击enter事件后处理开关转换
            }

        }

    ];
    settingInitChSettingParLockInputDialog();
    return settingChSetParLockInputDialogData;
}
var settingChSetParLockInputDialogData={
    "settingChSetParLockInputHeadText":{Data:"Password"},
    "settingChSetParLockInput1":{"Data":""},
    "settingChSetParLockInput2":{"Data":""},
    "settingChSetParLockInput3":{"Data":""},
    "settingChSetParLockInput4":{"Data":""},
    "settingChSetParLockInputBtn1":{Data:"OK"},
    "settingChSetParLockInputBtn2":{Data:"Cancel"},
    "settingChSetParLockInputTip":{Data:"Please enter with numerical keypad"},
    "operateData": {
        "currPassword":"0000",
        "defaultPassword":"0000",
        "inputPassword":"",
        "currDisplayFlag":0,//0:tipText,1:errorText
        "errorText":"Invalid password. Please re-enter",
        "tipText":"Please enter with numerical keypad",
        "closeFirPageFlag":0,//0:not need close,1:need close
        "hifocusFirPageFlag":0 //0: need focus,1:not need focus
    },
    "langData":{
        "Password":["Password"],
        "Please enter the password":["Please enter the password","Bitte Passwort eingeben","Si prega di inserire la password","Introduza a palavra-passe","Por favor"," introduzca la contraseña","Merci d'entrer le mot de passe","Skriv inn passordet","Ange lösenord","Indtast adgangskoden"],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"],
        "Please enter with numerical keypad":["Please enter with numerical keypad","Eingabe über Zahlentastatur","Si prega di inserire con il tastierino numerico","Digite com o teclado numérico","Por favor"," introduzca el teclado numérico ","Merci d'entrer via le clavier numérique","Skriv inn verdi med tallknappene","Ange med numeriskt tangentbord","Indtast venligst med numerisk tastatur"],
        "Invalid password. Please re-enter":["Invalid password. Please re-enter"]
    },
    rewrite:"settingRewriteChSetParLockInputDialog"
};
function settingInitChSettingParLockInputDialog(){
    var data = settingChSetParLockInputDialogData;
    data.operateData.currDisplayFlag = 0;
    data.operateData.closeFirPageFlag = 0;
    data.operateData.hifocusFirPageFlag = 0;
    if(tv == false){
        data.operateData.currpassword = "0000";
        data.operateData.defaultPassword = "0000";
    }else{
        data.operateData.currPassword = model.parentlock.getPin();
        data.operateData.defaultPassword = g_SystemFallbackPwd;
        debugPrint("settingInitChSettingParLockInputDialog:"+data.operateData.currPassword+","+data.operateData.defaultPassword,DebugLevel.ALWAYS);
    }
}
function settingChSetSetCloseFirPageFlag(flag){
    var data = settingChSetParLockInputDialogData;
    data.operateData.closeFirPageFlag = flag;
}

function settingChSetSetFocusFirPageFlag(flag){
    var data = settingChSetParLockInputDialogData;
    data.operateData.hifocusFirPageFlag = flag;
}
function settingRewriteChSetParLockInputDialog(data){
    if(data.operateData.currDisplayFlag == 0){
        data.settingChSetParLockInputTip.Data = data.operateData.tipText;
    }else{
        data.settingChSetParLockInputTip.Data = data.operateData.errorText;
    }
}
function settingChSetParLockClearCurrInput(){
    try{
        debugPrint("settingChSetParLockClearCurrInput:"+this.id,DebugLevel.ALWAYS);
        $("#"+this.id).val("");
    }catch (ex){
        debugPrint("settingChSetParLockClearCurrInput:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetParLockInputSetNext(){
    try{
        debugPrint("settingChSetParLockInputSetNext:"+this.id,DebugLevel.ALWAYS);
        switch(this.id){
            case "settingChSetParLockInput1":
                var temp=$("#settingChSetParLockInput1").val();
                if (temp.length>=1)
                {
                    hiWebOsFrame.ChSetParLockInputDialog.hiFocus("settingChSetParLockInput2");
                }
                break;
            case "settingChSetParLockInput2":
                var temp=$("#settingChSetParLockInput2").val();
                if (temp.length>=1)
                {
                    hiWebOsFrame.ChSetParLockInputDialog.hiFocus("settingChSetParLockInput3");
                }
                break;
            case "settingChSetParLockInput3":
                var temp=$("#settingChSetParLockInput3").val();
                if (temp.length>=1)
                {
                    hiWebOsFrame.ChSetParLockInputDialog.hiFocus("settingChSetParLockInput4");
                }
                break;
            case "settingChSetParLockInput4":
                var temp=$("#settingChSetParLockInput4").val();
                if (temp.length>=1)
                {
                    hiWebOsFrame.ChSetParLockInputDialog.hiFocus("settingChSetParLockInputBtn1");
                    $("#settingChSetParLockInput4").blur();
                }
                break;
        }
    }catch (ex){
        debugPrint("settingChSetParLockInputSetNext:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetParLockInputOKHandle()
{
    try{
        var data = settingChSetParLockInputDialogData;
        var inputPwd=$("#settingChSetParLockInput1").val()+$("#settingChSetParLockInput2").val()+$("#settingChSetParLockInput3").val()+$("#settingChSetParLockInput4").val();
        debugPrint("settingChSetParLockInputOKHandle:"+inputPwd,DebugLevel.ALWAYS);
        if(inputPwd.length==4 &&data.operateData.currPassword==inputPwd|| data.operateData.defaultPassword==inputPwd)
        {
            debugPrint("settingChSetParLockInputOKHandle:open page is "+this.page.origin.id,DebugLevel.ALWAYS);
//            var crntSource = livetvmain.getCurrentSource();
//            model.source.unlockInput(0); //暂时解tv通道锁，不设置epprom
//            if(crntSource.uid==0)
//            {
//                livetvmain.setUnlockFlag(true);  //避免当前通道不是TV，解除了当前source下live tv的加锁标识
//            }
            hiWebOsFrame.ChSetParLockInputDialog.close();
            if(data.operateData.closeFirPageFlag == 1){
                hiWebOsFrame.settingsFirst.close();
            }
//            if(hiWebOsFrame.ChSetParLockInputDialog.origin.id != "settingChSetClearChannelDialogId"){
//                if(hiWebOsFrame.getCurrentArea() != "EU"){
//                }
//            }
            hiWebOsFrame.ChSetParLockInputDialog.origin.open();
            hiWebOsFrame.ChSetParLockInputDialog.origin.hiFocus();
            hiWebOsFrame.ChSetParLockInputDialog.destroy();
        }else{
            debugPrint("settingChSetParLockInputOKHandle:password is wrong!!",DebugLevel.ALWAYS);
            data.operateData.currDisplayFlag = 1;
            settingChSetParLockClearInput();
            hiWebOsFrame.ChSetParLockInputDialog.rewriteDataOnly();
            hiWebOsFrame.ChSetParLockInputDialog.hiFocus("settingChSetParLockInput1");
        }
    }catch (ex){
        debugPrint("settingChSetParLockInputOKHandle:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetParLockInputCancelHandle(){
    try{
        var data = settingChSetParLockInputDialogData;
        hiWebOsFrame.ChSetParLockInputDialog.close();
        hiWebOsFrame.ChSetParLockInputDialog.origin.destroy();
        if(data.operateData.hifocusFirPageFlag == 1&&"EU" != hiWebOsFrame.getCurrentArea()){         // live tv下进入搜台密码框,取消不打开setting
            hiWebOsFrame.ChSetScanTypeListDialog.open();
            hiWebOsFrame.ChSetScanTypeListDialog.hiFocus();
        }
        else{
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.settingsFirst.hiFocus();
        }
        hiWebOsFrame.ChSetParLockInputDialog.destroy();
    }catch (ex){
        debugPrint("settingChSetParLockInputCancelHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetParLockClearInput(){
    $("#settingChSetParLockInput1").val("");
    $("#settingChSetParLockInput2").val("");
    $("#settingChSetParLockInput3").val("");
    $("#settingChSetParLockInput4").val("");
}
function settingChSetParLockInputEscHandle(){
    settingChSetParLockInputCancelHandle();
}
function settingChSetParLockInputOnDestroy()
{
    try{
        settingChSetParLockClearInput();
        hiWebOsFrame.ChSetParLockInputDialog=null;
    }catch(ex){
        debugPrint("settingChSetParLockInputOnDestroy:"+ex.message,DebugLevel.ERROR);
    }
}