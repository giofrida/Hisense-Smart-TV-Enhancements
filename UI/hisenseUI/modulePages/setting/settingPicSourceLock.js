function getSourceinputData(opt) {
    opt.CaE = [

        {
            "id": "setting_pic_inputmodule_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_pic_inputmodule_head",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_pic_inputContainer1",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId": "setting_pic_inputmodule_input1",
            "classes": {
                "normal": "setting_pic_inputContainerNormal", "focus": "setting_pic_inputContainerFocus",
                "disable": "setting_pic_inputContainerNormal", "selected": "setting_pic_inputContainerFocus"
            },
            "nav": {
                //"rightTo": "setting_pic_inputContainer2"
            },
            "CaE": [
                {
                    "id": "setting_pic_inputmodule_input1",
                    "description": "",
                    "CaEType": "input",
                    "disable": false,
                    "classes": {
                        "normal": "setting_pic_chpwd_input1_cls", "focus": "setting_pic_chpwd_input1_cls"
                    },
                    "nav": {"rightTo": "setting_pic_inputmodule_input2", "downTo": ""},
                    "handler": {
                        'aftEscHandler': "SettingSourcePwdCancel"//点击enter事件后处理开关转换

                    },
                    "onChange": "setNextInput1",
                    "onFocusFun": "clearCurrentInput1",
                    "inputAttr": "numberpassword",
                    "maxlength": "1"

                }
            ]
        },
        {
            "id": "setting_pic_inputContainer2",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId": "setting_pic_inputmodule_input2",
            "classes": {
                "normal": "setting_pic_inputContainerNormal", "focus": "setting_pic_inputContainerFocus",
                "disable": "setting_pic_inputContainerNormal", "selected": "setting_pic_inputContainerFocus"
            },
            "nav": {
                "downTo": ""
            },
            "CaE": [
                {
                    "id": "setting_pic_inputmodule_input2",
                    "description": "",
                    "CaEType": "input",
                    "disable": false,
                    "classes": {
                        "normal": "setting_pic_chpwd_input1_cls", "focus": "setting_pic_chpwd_input1_cls"
                    },
                    "nav": {
                        "leftTo": "setting_pic_inputmodule_input1",
                        "rightTo": "setting_pic_inputmodule_input3",
                        "downTo": ""
                    },
                    "handler": {
                        'aftEscHandler': "SettingSourcePwdCancel"//点击enter事件后处理开关转换

                    },
                    "onChange": "setNextInput2",
                    "onFocusFun": "clearCurrentInput2",
                    "inputAttr": "numberpassword",
                    "maxlength": "1"

                }
            ]
        },
        {
            "id": "setting_pic_inputContainer3",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId": "setting_pic_inputmodule_input3",
            "classes": {
                "normal": "setting_pic_inputContainerNormal", "focus": "setting_pic_inputContainerFocus",
                "disable": "setting_pic_inputContainerNormal", "selected": "setting_pic_inputContainerFocus"
            },
            "nav": {
                "downTo": ""
            },
            "CaE": [
                {
                    "id": "setting_pic_inputmodule_input3",
                    "description": "",
                    "CaEType": "input",
                    "disable": false,
                    "classes": {
                        "normal": "setting_pic_chpwd_input1_cls", "focus": "setting_pic_chpwd_input1_cls"
                    },
                    "nav": {
                        "leftTo": "setting_pic_inputmodule_input2",
                        "rightTo": "setting_pic_inputmodule_input4",
                        "downTo": ""
                    },
                    "handler": {
//                "aftEnterHandler":"invokeSKB",
                        'aftEscHandler': "SettingSourcePwdCancel"//点击enter事件后处理开关转换

                    },
                    "onChange": "setNextInput3",
                    "onFocusFun": "clearCurrentInput3",
                    "inputAttr": "numberpassword",
                    "maxlength": "1"

                }
            ]
        },
        {
            "id": "setting_pic_inputContainer4",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId": "setting_pic_inputmodule_input4",
            "classes": {
                "normal": "setting_pic_inputContainerNormal", "focus": "setting_pic_inputContainerFocus",
                "disable": "setting_pic_inputContainerNormal", "selected": "setting_pic_inputContainerFocus"
            },
            "nav": {
                "downTo": ""
            },
            "CaE": [
                {
                    "id": "setting_pic_inputmodule_input4",
                    "description": "",
                    "CaEType": "input",
                    "disable": false,
                    "classes": {
                        "normal": "setting_pic_chpwd_input1_cls", "focus": "setting_pic_chpwd_input1_cls"
                    },
                    "nav": {"leftTo": "setting_pic_inputmodule_input3", "downTo": ""},
                    "handler": {
//                "aftEnterHandler":"invokeSKB",
                        'aftEscHandler': "SettingSourcePwdCancel"//点击enter事件后处理开关转换

                    },
                    "onChange": "setNextInput4",
                    "onFocusFun": "clearCurrentInput4",
                    "inputAttr": "numberpassword",
                    "maxlength": "1"

                }
            ]
        }

    ];
    return PageDateSettingSource;

}
var PageDateSettingSource = {
    "setting_pic_inputmodule_head": {Data: "Please enter the password"},
    // "setting_pic_inputmodule_str1":{"Data":"New Password:"},

    "setting_pic_inputContainer1": {
        "Data": {
            "setting_pic_inputmodule_input1": {"Data": ""}
        }
    },
    "setting_pic_inputContainer2": {
        "Data": {
            "setting_pic_inputmodule_input2": {"Data": ""}
        }
    },
    "setting_pic_inputContainer3": {
        "Data": {
            "setting_pic_inputmodule_input3": {"Data": ""}
        }
    },
    "setting_pic_inputContainer4": {
        "Data": {
            "setting_pic_inputmodule_input4": {"Data": ""}
        }
    },

    "setting_pic_inputmodule_head": {Data: "Please enter your password"},
    "operateData": {

        "setting_pic_inputmodule_input1": {"Data": ""},
        "setting_pic_inputmodule_input2": {"Data": ""},
        "setting_pic_inputmodule_input3": {"Data": ""},
        "setting_pic_inputmodule_input4": {"Data": ""}
    },
    "langData": {
        "Please enter your password": ["Please enter your password", "Bitte Passwort eingeben", "Si prega di inserire la password", "Introduza a palavra-passe", "Por favor", " introduzca la contraseña", "Merci d'entrer le mot de passe", "Skriv inn passordet", "Ange lösenord", "Indtast adgangskoden"],
        "OK": ["OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK"],
        "Cancel": ["Cancel", "Abbrechen", "Annulla", "Cancelar", "Cancelar", "Annuler", "Avbryt", "Avbryt", "Annuller", "Peruuta"],
        "Please enter with numerical keypad": ["Please enter with numerical keypad", "Eingabe über Zahlentastatur", "Si prega di inserire con il tastierino numerico", "Digite com o teclado numérico", "Por favor", " introduzca el teclado numérico ", "Merci d'entrer via le clavier numérique", "Skriv inn verdi med tallknappene", "Ange med numeriskt tangentbord", "Indtast venligst med numerisk tastatur"]

    },
    rewrite: function (pageData) {
        pageData.setting_pic_inputContainer1.Data.setting_pic_inputmodule_input1.Data = pageData.operateData.
            setting_pic_inputmodule_input1.Data;
        pageData.setting_pic_inputContainer2.Data.setting_pic_inputmodule_input2.Data = pageData.operateData.
            setting_pic_inputmodule_input2.Data;
        pageData.setting_pic_inputContainer3.Data.setting_pic_inputmodule_input3.Data = pageData.operateData.
            setting_pic_inputmodule_input3.Data;
        pageData.setting_pic_inputContainer4.Data.setting_pic_inputmodule_input4.Data = pageData.operateData.
            setting_pic_inputmodule_input4.Data;
    }
}

function SettingSourceLockPwdOK(){
    var pwd1=$("#setting_pic_inputmodule_input1").val()+$("#setting_pic_inputmodule_input2").val()+$("#setting_pic_inputmodule_input3").val()+$("#setting_pic_inputmodule_input4").val();
    // var pwd2=$("#setting_pic_inputmodule_input2").val();
    debugG("-----pwd1:"+pwd1);
    var temp1=model.parentlock.getPin();
    debugG("model.parentlock.getPin:"+model.parentlock.getPin());
    if(pwd1.length==4&&pwd1==temp1||pwd1==g_SystemFallbackPwd)
    {

        clearSourceInput();
        try{
        hiWebOsFrame.setting_sourceLock_page.destroy();
        hiWebOsFrame.setting_source_page.hiFocus();
        debugG("--->SourceData.operateData.id:"+
                SourceData.operateData.id);

        model.source.InputSet(SourceData.operateData.id );
        model.parentlock.InputBlock(SourceData.operateData.id ,0,1,0);
        if(SourceData.operateData.id == 0){
            if(livetvmain.getCurrentChannelInfo()!= null){
                model.tvservice.unLockPlayChannel(parseInt(livetvmain.getCurrentChannelInfo().uid));
            }else{
                model.tvservice.unLockPlayChannel(0);
            }
        }else{
            model.tvservice.unLockPlayChannel(0);
        }
        //setMainInputPasswordStatus(true,true);
        livetvmain.setUnlockFlag(true)
        ReadInputRecent(SourceData.operateData.id );
            setTimeout(closeSource,800);
        }
        catch (ex){
            debugG("ex:"+ex);
        }


    }
    else
    {
        PageDateSettingSource.setting_pic_inputmodule_head.Data="Invalid password. Please re-enter"
        clearSourceInput();
//        $("#setting_pic_inputmodule_head").html("Invalid password. Please re-enter");
        hiWebOsFrame.setting_sourceLock_page.rewriteDataOnly();
        hiWebOsFrame.setting_sourceLock_page.hiFocus("setting_pic_inputmodule_input1");

        //setTimeout(changeTip, 2 * 1000);

    }
}
function changeTip() {
    PageDateSettingSource.setting_pic_inputmodule_head.Data = "Please enter with numerical keypad"
//    $("#setting_pic_inputmodule_head").html("Please enter with numerical keypad");
    hiWebOsFrame.setting_sourceLock_page.rewriteDataOnly();
}
function clearSourceInput(){
    PageDateSettingSource.operateData.setting_pic_inputmodule_input1.Data = "";
    PageDateSettingSource.operateData.setting_pic_inputmodule_input2.Data = "";
    PageDateSettingSource.operateData.setting_pic_inputmodule_input3.Data = "";
    PageDateSettingSource.operateData.setting_pic_inputmodule_input4.Data = "";
}
function SettingSourcePwdCancel(){
    clearSourceInput();
    this.page.destroy();
    hiWebOsFrame.setting_source_page.hiFocus();
}

function setNextInput1(){

    var temp = $("#setting_pic_inputmodule_input1").val();
    PageDateSettingSource.operateData.setting_pic_inputmodule_input1.Data = temp;
    if (temp.length >= 1) {
        hiWebOsFrame.setting_sourceLock_page.hiFocus("setting_pic_inputContainer2");
    }
}
function clearCurrentInput1() {
    $("#setting_pic_inputmodule_input1").val("");
}
function setNextInput2() {

    var temp = $("#setting_pic_inputmodule_input2").val();
    PageDateSettingSource.operateData.setting_pic_inputmodule_input2.Data = temp;
    if (temp.length >= 1) {
        hiWebOsFrame.setting_sourceLock_page.hiFocus("setting_pic_inputContainer3");
    }
}
function clearCurrentInput2(){
    $("#setting_pic_inputmodule_input2").val("");
}
function setNextInput3(){

    var temp = $("#setting_pic_inputmodule_input3").val();
    PageDateSettingSource.operateData.setting_pic_inputmodule_input3.Data = temp;
    if (temp.length >= 1) {
        hiWebOsFrame.setting_sourceLock_page.hiFocus("setting_pic_inputContainer4");
    }
}
function clearCurrentInput3(){
    debugG("clearCurrentInput3");
    $("#setting_pic_inputmodule_input3").val("");
}
function setNextInput4(){

    var temp = $("#setting_pic_inputmodule_input4").val();
    PageDateSettingSource.operateData.setting_pic_inputmodule_input4.Data = temp;
    if (temp.length >= 1) {
        clearTimeout(inputpasswordTimer);
        //hiWebOsFrame.setting_sourceLock_page.hiFocus("setting_pic_inputmodule_btn1");
       var inputpasswordTimer = setTimeout("SettingSourceLockPwdOK()",1000);
        //SettingSourcePwdOK();
    }
}
function clearCurrentInput4(){
    $("#setting_pic_inputmodule_input4").val("");
}
function SourceinputOnDestroy(){
    PageDateSettingSource.setting_pic_inputmodule_head.Data="Please enter your password";
    hiWebOsFrame.setting_sourceLock_page = null;
}