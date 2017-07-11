/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSysChgpwdData(opt)
{
    opt.CaE=[

        {
            "id": "setting_sys_chgpwd_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id":"setting_sys_chgpwd_str1",
            "description": "名称标签",
            "CaEType": "div",
            "classes": {
                "normal": "epgInputZipNameNormal", "focus": "epgInputZipNameNormal",
                "disable": "epgInputZipNameNormal", "selected": "epgInputZipNameNormal"
            }
        },
        {
            "id":"setting_sys_chgpwd_container1",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId":"setting_sys_chgpwd_input1",
            "classes": {
                "normal": "epgInputZipContainerNormal", "focus": "epgInputZipContainerFocus",
                "disable": "epgInputZipContainerDisable", "selected": "epgInputZipContainerSelected"
            },
            "nav": {
                "downTo":"setting_sys_chgpwd_input2"
            },
            "CaE":[
                {
                    "id": "setting_sys_chgpwd_input1",
                    "description": "输入控件",
                    "classes": {
                        "normal": "epgInputZipNormal", "focus": "epgInputZipFocus", "disable": "epgInputZipNormal", "selected": "epgInputZipNormal"
                    },
                    "nav": {
                        "downTo":"epgInputZip"
                    },
                    "CaEType": "input",
                    //   "inputAttr":"numberpassword",
                    "handler":{
                        "aftEnterHandler":"invokeSKB",
                        'aftEscHandler':"SettingSysChgPwdCancel"//点击enter事件后处理开关转换

                    },
                    "inputAttr":"numberpassword",
                    "maxlength":"4"
                }
            ]
        },
        {
            "id":"setting_sys_chgpwd_str2",
            "description": "名称标签",
            "CaEType": "div",
            "classes": {
                "normal": "epgInputZipNameNormal", "focus": "epgInputZipNameNormal",
                "disable": "epgInputZipNameNormal", "selected": "epgInputZipNameNormal"
            }
        },
        {
            "id":"setting_sys_chgpwd_container2",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId":"setting_sys_chgpwd_input2",
            "classes": {
                "normal": "epgInputZipContainerNormal", "focus": "epgInputZipContainerFocus",
                "disable": "epgInputZipContainerDisable", "selected": "epgInputZipContainerSelected"
            },
            "nav": {
                "upTo":"epgInputNumber"
            },
            "CaE":[
                {
                    "id": "setting_sys_chgpwd_input2",
                    "description": "输入控件",
                    "classes": {
                        "normal": "epgInputZipNormal", "focus": "epgInputZipFocus", "disable": "epgInputZipNormal", "selected": "epgInputZipNormal"
                    },
                    "nav": {
                        "upTo":"setting_sys_chgpwd_input1","downTo":"setting_sys_chgpwd_btn1"
                    },
                    "CaEType": "input",
                    //  "inputAttr":"numberpassword",
                    "handler":{
                        "aftEnterHandler":"invokeSKB",
                        'aftEscHandler':"SettingSysChgPwdCancel"//点击enter事件后处理开关转换

                    },
                    "inputAttr":"numberpassword",
                    "maxlength":"4"
                }
            ]
        },
        {
            "id":"setting_sys_chgpwd_tip",
            "description": "名称标签",
            "CaEType": "div",
            "disable": false
        },

        {

            "id":"setting_sys_chgpwd_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_chgpwd_input2","rightTo":"setting_sys_chgpwd_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysChgPwdOK",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysChgPwdCancel"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_chgpwd_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": {  "upTo":"setting_sys_chgpwd_input2","leftTo":"setting_sys_chgpwd_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysChgPwdCancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysChgPwdCancel"//点击enter事件后处理开关转换

            }

        }

    ]
    return PageDateSettingSysChgpwd;
}
var PageDateSettingSysChgpwd={
    "setting_sys_chgpwd_text1":{Data:"Change password"},
    "setting_sys_chgpwd_str1":{"Data":"New password:"},
    "setting_sys_chgpwd_container1":{
        "Data":{
            "setting_sys_chgpwd_input1":{"Data":""}
        }
    },
    "setting_sys_chgpwd_str2":{"Data":"Confirm password:"},
    "setting_sys_chgpwd_container2":{
        "Data":{
            "setting_sys_chgpwd_input2":{"Data":""}
        }
    },
    "setting_sys_chgpwd_btn1":{Data:"OK"},
    "setting_sys_chgpwd_btn2":{Data:"Cancel"},
    "setting_sys_chgpwd_tip":{Data:"Please enter with numerical keypad"},
    "operateData": {
        "typelist":["createpwd","changepwd"],
        "curtype":0
    },
    "langData":{
        "Create password":["Create password","Passwort erstellen","Crea la password","Criar palavra-passe","Crear contraseña","Créer mot de passe","Opprette passord","Skapa lösenord","Opret adgangskode","Luo salasana"],
        "New password:":["New password:","Neues Passwort:","Nuova password:","Nova palavra-passe:","Nueva contraseña:","Nouveau mot de passe:","Nytt passord","Nytt lösenord:","Ny adgangskode:","Uusi salasana:","新密码:"],
        "Confirm password:":["Confirm password:","Passwort bestätigen:","Conferma password:","Confirmar palavra-passe:","Confirmar contraseña:","Confirmer mot de passe:","Bekreft passord:","Bekräfta lösenord:","Bekræft adgangskode:","Vahvista salasana:","确认密码:"],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"],
        "Please enter with numerical keypad":["Please enter with numerical keypad","Eingabe über Zahlentastatur","Si prega di inserire con il tastierino numerico","Digite com o teclado numérico","Por favor"," introduzca el teclado numérico ","Merci d'entrer via le clavier numérique","Skriv inn verdi med tallknappene","Ange med numeriskt tangentbord","Indtast venligst med numerisk tastatur"]
       // "Change password:":["Change password:","",""]

    },
    rewrite:function(pageData){

        if(pageData.operateData.curtype==0)
        {
            pageData.setting_sys_chgpwd_text1.Data="Create password:"
        }
        else  if(pageData.operateData.curtype==1)
        {
            pageData.setting_sys_chgpwd_text1.Data="Change password:"
        }

    }
};

function SettingSysChgpwdonDestroy()
{
    hiWebOsFrame.settingsyschgpwd=null;
}
function SettingSysChgPwdOK()
{

    var pwd1=$("#setting_sys_chgpwd_input1").val();
    var pwd2=$("#setting_sys_chgpwd_input2").val();
    if(pwd1==pwd2&&pwd1.length==4)
    {

        SettingSecChangepwd(pwd1);
        this.page.close();
        $("#setting_sys_chgpwd_input1").val("");
        $("#setting_sys_chgpwd_input2").val("");
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
        SetRecentUse("Security",4,SYS_SECURITY);
    }
    else
    {
        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=0;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();
            setTimeout(chgpwdclose,3 * 1000);
        });
//        hiWebOsFrame.settingsyspwderror= hiWebOsFrame.createPage(PageDateSettingSysPwderror, 'setting_sys_pwd_error_dialog');
//        hiWebOsFrame.settingsyspwderror.open();
//        hiWebOsFrame.settingsyspwderror.hiFocus();

    }


}
function chgpwdclose() {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror");
        hiWebOsFrame.settingsyspwderror.close();
        $("#setting_sys_chgpwd_input1").val("");
        $("#setting_sys_chgpwd_input2").val("");
        hiWebOsFrame.settingsyschgpwd.open();
        hiWebOsFrame.settingsyschgpwd.hiFocus();
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    else
    {
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();



    }


}
function SettingSysChgPwdCancel()
{
    if(this.page.operateData.curtype==0)
    {
        this.page.close();
//        hiWebOsFrame.settingssysstartnav.destroy();
//        hiWebOsFrame.settingssyssecurity.destroy();
//        hiWebOsFrame.settingssysagelock.destroy();
//        hiWebOsFrame.settingssyslist1.destroy();
//        hiWebOsFrame.settingsyschgpwd.destroy();
//        hiWebOsFrame.settingsysinput1.destroy();
//        hiWebOsFrame.settingssyslocktime.destroy();
////  PageDataSettingSysSecurity.operateData
        if( !!hiWebOsFrame.settingssysstartnav)
        {
            hiWebOsFrame.settingssysstartnav.destroy();
        }
        if( !!hiWebOsFrame.settingssyssecurity)
        {
            hiWebOsFrame.settingssyssecurity.destroy();
        }
        if( !!hiWebOsFrame.settingssysagelock)
        {
            hiWebOsFrame.settingssysagelock.destroy();
        }
        if( !!hiWebOsFrame.settingssyschl)
        {
            hiWebOsFrame.settingssyschl.destroy();
        }
        if( !!hiWebOsFrame.settingsyschgpwd)
        {
            hiWebOsFrame.settingsyschgpwd.destroy();
        }
        if( !!hiWebOsFrame.settingsysinput1)
        {
            hiWebOsFrame.settingsysinput1.destroy();
        }
        if( !!hiWebOsFrame.settingssyslocktime)
        {
            hiWebOsFrame.settingssyslocktime.destroy();
        }
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();

    }
    else
    {
        this.page.close();
        $("#setting_sys_chgpwd_input1").val("");
        $("#setting_sys_chgpwd_input2").val("");
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
    }

}
function SettingSecChangepwd(newpassword)
{
    model.parentlock.setPin(newpassword);

}