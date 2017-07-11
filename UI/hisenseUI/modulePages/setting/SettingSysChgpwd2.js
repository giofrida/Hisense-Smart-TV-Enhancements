/**
 * Created by Administrator on 14-9-9.
 */
function getSettingChgpwd2PageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_chgpwd2_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_chgpwd2_str1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_chgpwd2_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_chgpwd2_str2",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_chgpwd2_input1",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_chgpwd2_input2","downTo":"setting_sys_chgpwd2_input5"},
            "handler":{
                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input1change",
            "onFocusFun":"SettingSyschgpwd2Input1Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"

        },
        {
            "id": "setting_sys_chgpwd2_input2",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_chgpwd2_input1","rightTo":"setting_sys_chgpwd2_input3","downTo":"setting_sys_chgpwd2_input6"},
            "handler":{
                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input2change",
            "onFocusFun":"SettingSyschgpwd2Input2Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"
        },
        {
            "id": "setting_sys_chgpwd2_input3",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_chgpwd2_input2","rightTo":"setting_sys_chgpwd2_input4","downTo":"setting_sys_chgpwd2_input7"},
            "handler":{
                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input3change",
            "onFocusFun":"SettingSyschgpwd2Input3Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"
        },
        {
            "id": "setting_sys_chgpwd2_input4",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_chgpwd2_input3","rightTo":"","downTo":"setting_sys_chgpwd2_input8"},
            "handler":{
                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input4change",
            "onFocusFun":"SettingSyschgpwd2Input4Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"
        },
        {
            "id": "setting_sys_chgpwd2_input5",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "upTo":"setting_sys_chgpwd2_input1","leftTo":"","rightTo":"setting_sys_chgpwd2_input6","downTo":"setting_sys_chgpwd2_btn1"},
            "handler":{

                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input5change",
            "onFocusFun":"SettingSyschgpwd2Input5Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"
        },
        {
            "id": "setting_sys_chgpwd2_input6",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "upTo":"setting_sys_chgpwd2_input2","leftTo":"setting_sys_chgpwd2_input5","rightTo":"setting_sys_chgpwd2_input7","downTo":"setting_sys_chgpwd2_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input6change",
            "onFocusFun":"SettingSyschgpwd2Input6Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"
        },
        {
            "id": "setting_sys_chgpwd2_input7",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "upTo":"setting_sys_chgpwd2_input3","leftTo":"setting_sys_chgpwd2_input6","rightTo":"setting_sys_chgpwd2_input8","downTo":"setting_sys_chgpwd2_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input7change",
            "onFocusFun":"SettingSyschgpwd2Input7Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"
        },
        {
            "id": "setting_sys_chgpwd2_input8",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": {"upTo":"setting_sys_chgpwd2_input4", "leftTo":"setting_sys_chgpwd2_input7","rightTo":"","downTo":"setting_sys_chgpwd2_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSyschgpwd2okhandler",
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsyschgpwd2input8change",
            "onFocusFun":"SettingSyschgpwd2Input8Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"
        },
        {

            "id":"setting_sys_chgpwd2_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_chgpwd2_input5","rightTo":"setting_sys_chgpwd2_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysChgPwd2OK",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_chgpwd2_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": {  "upTo":"setting_sys_chgpwd2_input5","leftTo":"setting_sys_chgpwd2_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSyschgpwd2Cancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSyschgpwd2Cancel"//点击enter事件后处理开关转换

            }

        }

    ]
    return PageDateSettingSysChgpwd2;
}
var PageDateSettingSysChgpwd2={
    "setting_sys_chgpwd2_text1":{Data:"Change PIN"},
    "setting_sys_chgpwd2_str1":{"Data":"New PIN:"},
    "setting_sys_chgpwd2_str2":{"Data":"Confirm PIN:"},
    "setting_sys_chgpwd2_btn1":{Data:"OK"},
    "setting_sys_chgpwd2_btn2":{Data:"Cancel"},
    "setting_sys_chgpwd2_tip":{Data:"Please enter with numerical keypad"},
    "setting_sys_chgpwd2_input1":{Data:""},
    "setting_sys_chgpwd2_input2":{Data:""},
    "setting_sys_chgpwd2_input3":{Data:""},
    "setting_sys_chgpwd2_input4":{Data:""},
    "setting_sys_chgpwd2_input5":{Data:""},
    "setting_sys_chgpwd2_input6":{Data:""},
    "setting_sys_chgpwd2_input7":{Data:""},
    "setting_sys_chgpwd2_input8":{Data:""},
    "operateData": {
        "parentlist":["security","systemPin"], //EU机型添加了systemPin模式
        "curparent":0,
        "typelist":["createpwd","changepwd"],
        "curtype":0
    },
    "langData":{
        "Change System PIN": [],
        "Create System PIN":[],
        "Please enter with numerical keypad":[],
        "Change your PIN that you use to access Parental Controls.": ["Change your PIN that you use to access Parental Controls.","Modifiez le code PIN que vous utilisez pour accéder au contrôle parental.","Cambiar el PIN que utiliza para acceder a los controles parentales."],
        "New PIN:": [],
        "Confirm PIN:": ["Confirm PIN","Confirmer le code PIN","Confirmar PIN"],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"]
       // "Please enter with numerical keypad":["Please enter with numerical keypad","Eingabe über Zahlentastatur","Si prega di inserire con il tastierino numerico","Digite com o teclado numérico","Por favor"," introduzca el teclado numérico ","Merci d'entrer via le clavier numérique","Skriv inn verdi med tallknappene","Ange med numeriskt tangentbord","Indtast venligst med numerisk tastatur"]

    },
    rewrite:function(pageData){

        if(pageData.operateData.curtype==0)
        {
            pageData.setting_sys_chgpwd2_text1.Data="Create System PIN"
        }
        else  if(pageData.operateData.curtype==1)
        {
            pageData.setting_sys_chgpwd2_text1.Data="Change System PIN"
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $("#setting_sys_chgpwd2_str1").css("float","left");
            $("#setting_sys_chgpwd2_str1").css("margin","0 40px 0 65px");
            $("#setting_sys_chgpwd2_str2").css("float","left");
            $("#setting_sys_chgpwd2_str2").css("margin","0 40px 0 65px");
//            $(".setting_select_langpage2").css("float","left");
//            $(".setting_select_langpage3").css("float","left");
//
//            $(".setting_select_lang_focus").css("float","right")
//            $(".setting_select_langpage4").css("float","right")
//            $(".setting_select_lang_disable").css("float","right");
//            $(".setting_sys_switch_name").css("float","left")
//            // $("#setting_sys_timedata_control1").css("float","right")
        }
        else {
            $("#setting_sys_chgpwd2_str1").css("float","right")
            $("#setting_sys_chgpwd2_str1").css("margin","0 65px 0 40px");
            $("#setting_sys_chgpwd2_str2").css("float","right")
            $("#setting_sys_chgpwd2_str2").css("margin","0 65px 0 40px");
//            $("#setting_sys_list1_srcobar_container").css("float","left");
//            $(".setting_select_langpage2").css("float","right");
//            $(".setting_select_langpage3").css("float","right");
//
//            $(".setting_select_lang_focus").css("float","left");
//            $(".setting_select_langpage4").css("float","left");
//            $(".setting_select_lang_disable").css("float","left")
//
//            $(".setting_sys_switch_name").css("float","right")
//            // $("#setting_sys_timedata_control1").css("float","left")
        }

    }
};

function SettingChgpwd2onDestroy()
{
    hiWebOsFrame.settingsyschgpwd2=null;
}
function SettingSysChgPwd2OK()
{

    var pwd1=$("#setting_sys_chgpwd2_input1").val()+$("#setting_sys_chgpwd2_input2").val()+$("#setting_sys_chgpwd2_input3").val()+$("#setting_sys_chgpwd2_input4").val();
    var pwd2=$("#setting_sys_chgpwd2_input5").val()+$("#setting_sys_chgpwd2_input6").val()+$("#setting_sys_chgpwd2_input7").val()+$("#setting_sys_chgpwd2_input8").val();
    if(pwd1==pwd2&&pwd1.length==4)
    {

        SettingSecChangepwd(pwd1);
        this.page.close();
        $("#setting_sys_chgpwd2_input1").val("");
        $("#setting_sys_chgpwd2_input2").val("");
        $("#setting_sys_chgpwd2_input3").val("");
        $("#setting_sys_chgpwd2_input4").val("");
        $("#setting_sys_chgpwd2_input5").val("");
        $("#setting_sys_chgpwd2_input6").val("");
        $("#setting_sys_chgpwd2_input7").val("");
        $("#setting_sys_chgpwd2_input8").val("");
        PageDateSettingSysChgpwd2.operateData.curtype=1; //已经创建密码成功，模式改为1
        if (PageDateSettingSysChgpwd2.operateData.curparent==1)
        {
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.settingsFirst.hiFocus();
            SetRecentUse("System PIN",4,SYSTEM_PIN);
        }
        else if (PageDateSettingSysChgpwd2.operateData.curparent==0)
        {
            SettingSysSecHelpinfo(PageDataSettingSysSecurity.operateData.helplist[0].content);
            hiWebOsFrame.settingssyssecurity.open();
            hiWebOsFrame.settingssyssecurity.hiFocus();
        }
    }
    else
    {
        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            if(PageDateSettingSysChgpwd2.operateData.curtype==0)
            {
                PageDateSettingSysPwderror.operateData.datatype=0;
            }else
            {
                PageDateSettingSysPwderror.operateData.datatype=5;
            }

            page.rewriteDataOnly();
            page.open();
            page.hiFocus();
            setTimeout(chgppwd2close,3 * 1000);
        });
//        hiWebOsFrame.settingsyspwderror= hiWebOsFrame.createPage(PageDateSettingSysPwderror, 'setting_sys_pwd_error_dialog');
//        hiWebOsFrame.settingsyspwderror.open();
//        hiWebOsFrame.settingsyspwderror.hiFocus();

    }


}
function chgppwd2close() {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror");
        hiWebOsFrame.settingsyspwderror.close();
        $("#setting_sys_chgpwd2_input1").val("");
        $("#setting_sys_chgpwd2_input2").val("");
        $("#setting_sys_chgpwd2_input3").val("");
        $("#setting_sys_chgpwd2_input4").val("");
        $("#setting_sys_chgpwd2_input5").val("");
        $("#setting_sys_chgpwd2_input6").val("");
        $("#setting_sys_chgpwd2_input7").val("");
        $("#setting_sys_chgpwd2_input8").val("");
        hiWebOsFrame.settingsyschgpwd2.open();
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input1");
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    else
    {
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();



    }


}
function SettingSyschgpwd2Cancel()
{


    this.page.destroy();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    if(PageDateSettingSysChgpwd2.operateData.curparent==0)
    {
        if( !!hiWebOsFrame.settingssyssecurity)
        {
            hiWebOsFrame.settingssyssecurity.destroy();
        }
        if( !!hiWebOsFrame.settingsysinput1)
        {
            hiWebOsFrame.settingsysinput1.destroy();
        }
    }
    else
    {
        if( !!hiWebOsFrame.settingsysinput1)
        {
            hiWebOsFrame.settingsysinput1.destroy();
        }
    }





}
function SettingSecChangepwd(newpassword)
{
    try
    {
    model.parentlock.setPin(newpassword);
    debugPrint("chang the password "+newpassword);
    }catch (e)
    {
        debugE(e.message);
    }

}
var g_chgpwdflag=0;
function SettingSyschgpwd2okhandler()
{
//    g_chgpwdflag=1;
//    invokeSKB.call(this);
}
function SettingSyschgpwd2Input1Focus()
{
    debugPrint("the input1 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {

        $("#setting_sys_chgpwd2_input1").val("");
    }
}
function SettingSyschgpwd2Input2Focus()
{
    debugPrint("the input2 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {

        $("#setting_sys_chgpwd2_input2").val("");
    }
}
function SettingSyschgpwd2Input3Focus()
{
    debugPrint("the input3 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {

        $("#setting_sys_chgpwd2_input3").val("");
    }
}
function SettingSyschgpwd2Input4Focus()
{
    debugPrint("the input4 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {

        $("#setting_sys_chgpwd2_input4").val("");
    }
}
function SettingSyschgpwd2Input5Focus()
{
    debugPrint("the input5 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {

        $("#setting_sys_chgpwd2_input5").val("");
    }
}
function SettingSyschgpwd2Input6Focus()
{
    debugPrint("the input6 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {

        $("#setting_sys_chgpwd2_input6").val("");
    }
}
function SettingSyschgpwd2Input7Focus()
{
    debugPrint("the input7 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {
        $("#setting_sys_chgpwd2_input7").val("");
    }
}
function SettingSyschgpwd2Input8Focus()
{
    debugPrint("the input8 focus");
    if(g_chgpwdflag==1)
    {
        g_chgpwdflag=0;
    }
    else
    {

        $("#setting_sys_chgpwd2_input8").val("");
    }
}
function settingsyschgpwd2input1change()
{
    debugPrint("in the input1 changed");
    var temp=$("#setting_sys_chgpwd2_input1").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input2");
    }
}
function settingsyschgpwd2input2change()
{
    debugPrint("in the input2 changed");
    var temp=$("#setting_sys_chgpwd2_input2").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input3");
    }
}
function settingsyschgpwd2input3change()
{
    debugPrint("in the input3 changed");
    var temp=$("#setting_sys_chgpwd2_input3").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input4");
    }
}
function settingsyschgpwd2input4change()
{
    debugPrint("in the input4 changed");
    var temp=$("#setting_sys_chgpwd2_input4").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input5");
    }
}
function settingsyschgpwd2input5change()
{
    debugPrint("in the input5 changed");
    var temp=$("#setting_sys_chgpwd2_input5").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input6");
    }
}
function settingsyschgpwd2input6change()
{
    debugPrint("in the input6 changed");
    var temp=$("#setting_sys_chgpwd2_input6").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input7");
    }
}
function settingsyschgpwd2input7change()
{
    debugPrint("in the input7 changed");
    var temp=$("#setting_sys_chgpwd2_input7").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input8");
    }
}
function settingsyschgpwd2input8change()
{
    debugPrint("in the input8 changed");
    var temp=$("#setting_sys_chgpwd2_input8").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_btn1");
        $("#setting_sys_chgpwd2_input8").blur();
    }
}
