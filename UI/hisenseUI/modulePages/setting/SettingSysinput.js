/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSysinputData(opt)
{
    opt.CaE= [

        {
            "id": "setting_sys_inputmodule_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_inputpwd_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },

        {
            "id": "setting_sys_inputmodule_input1",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_inputmodule_input2","downTo":"setting_sys_inputmodule_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSysInputOkHandler",
                'aftEscHandler':"SettingSysInputPwdCancel"//点击enter事件后处理开关转换



            },
            "onChange":"settingsysinput1change",
            "onFocusFun":"SettingSysInput1Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"

        },
        {
            "id": "setting_sys_inputmodule_input2",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_inputmodule_input1","rightTo":"setting_sys_inputmodule_input3","downTo":"setting_sys_inputmodule_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSysInputOkHandler",
                'aftEscHandler':"SettingSysInputPwdCancel"//点击enter事件后处理开关转换


            },
            "onChange":"settingsysinput2change",
            "onFocusFun":"SettingSysInput2Focus",
            "inputAttr":"numberpassword",
            "maxlength":"1"

        },
        {
            "id": "setting_sys_inputmodule_input3",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_inputmodule_input2","rightTo":"setting_sys_inputmodule_input4","downTo":"setting_sys_inputmodule_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSysInputOkHandler",
                'aftEscHandler':"SettingSysInputPwdCancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsysinput3change",
            "inputAttr":"numberpassword",
            "onFocusFun":"SettingSysInput3Focus",
            "maxlength":"1"

        },
        {
            "id": "setting_sys_inputmodule_input4",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_chpwd_input1_cls", "focus": "setting_sys_chpwd_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_inputmodule_input3","downTo":"setting_sys_inputmodule_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSysInputOkHandler",
                'aftEscHandler':"SettingSysInputPwdCancel"//点击enter事件后处理开关转换

            },
            "onChange":"settingsysinput4change",
            "inputAttr":"numberpassword",
            "onFocusFun":"SettingSysInput4Focus",
            "maxlength":"1"

        },
        {
            "id":"setting_sys_inputmodule_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_inputmodule_input1","rightTo":"setting_sys_inputmodule_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysInputPwdOK",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysInputPwdCancel"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_inputmodule_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": {  "upTo":"setting_sys_inputmodule_input1","leftTo":"setting_sys_inputmodule_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysInputPwdCancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysInputPwdCancel"//点击enter事件后处理开关转换

            }

        }

    ];
    return PageDateSettingSysinput1;

}
var PageDateSettingSysinput1={
    "setting_sys_inputmodule_text1":{Data:"Enter PIN"},
    // "setting_sys_inputmodule_str1":{"Data":"New Password:"},

    "setting_sys_inputmodule_input1":{"Data":""},
    "setting_sys_inputmodule_input2":{"Data":""},
    "setting_sys_inputmodule_input3":{"Data":""},
    "setting_sys_inputmodule_input4":{"Data":""},

    "setting_sys_inputmodule_btn1":{Data:"OK"},
    "setting_sys_inputmodule_btn2":{Data:"Cancel"},
    "setting_sys_inputpwd_tip":{Data:"Please enter with numerical keypad"},
    "operateData": {
        "parentlist":["security","restore","time","systemPin"], //EU机型添加了systemPin模式
        "curparent":0
    },
    "langData":{
        "Enter PIN":[],
        "Please enter with numerical keypad":[],
        "Restore To Factory Default": [],
        "Please enter the password":["Please enter the password","Bitte Passwort eingeben","Si prega di inserire la password","Introduza a palavra-passe","Por favor"," introduzca la contraseña","Merci d'entrer le mot de passe","Skriv inn passordet","Ange lösenord","Indtast adgangskoden"],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"]

    },
    rewrite:function(pageData){
        if(pageData.operateData.curparent==0)
        {
            pageData.setting_sys_inputmodule_text1.Data="Enter PIN";
        }
        else if(pageData.operateData.curparent==1)
        {
            pageData.setting_sys_inputmodule_text1.Data="Enter PIN";
        }
    }
};

function SettingSysinputonDestroy()
{
    hiWebOsFrame.settingsysinput1=null;
}
function SettingSysInputPwdOK()
{
    try{

    var pwd1=$("#setting_sys_inputmodule_input1").val()+$("#setting_sys_inputmodule_input2").val()+$("#setting_sys_inputmodule_input3").val()+$("#setting_sys_inputmodule_input4").val();
    // var pwd2=$("#setting_sys_inputmodule_input2").val();
    if(pwd1.length==4&&( PageDateSettingSysinput1.operateData.curpassword==pwd1|| PageDateSettingSysinput1.operateData.curfallbackpwd==pwd1))
    {

        // SettingSecChangepwd(pwd1);
        if(PageDateSettingSysinput1.operateData.curparent==0)
        {
            this.page.close();
            $("#setting_sys_inputmodule_input1").val("");
            $("#setting_sys_inputmodule_input2").val("");
            $("#setting_sys_inputmodule_input3").val("");
            $("#setting_sys_inputmodule_input4").val("");
            SettingSysSecHelpinfo(PageDataSettingSysSecurity.operateData.helplist[0].content)
            hiWebOsFrame.settingssyssecurity.open();
            hiWebOsFrame.settingssyssecurity.hiFocus();
        }
        else if(PageDateSettingSysinput1.operateData.curparent==1)
        {
            this.page.close();
            $("#setting_sys_inputmodule_input1").val("");
            $("#setting_sys_inputmodule_input2").val("");
            $("#setting_sys_inputmodule_input3").val("");
            $("#setting_sys_inputmodule_input4").val("");
            hiWebOsFrame.settingssysstartnav.open();
            hiWebOsFrame.settingssysstartnav.hiFocus();
        }
        else if(PageDateSettingSysinput1.operateData.curparent==2)
        {
            this.page.close();
            $("#setting_sys_inputmodule_input1").val("");
            $("#setting_sys_inputmodule_input2").val("");
            $("#setting_sys_inputmodule_input3").val("");
            $("#setting_sys_inputmodule_input4").val("");
            SettingTimeUpdateHelpinfo(PageDataSettingSysTime.operateData.helplist[0].title,PageDataSettingSysTime.operateData.helplist[0].content);
            hiWebOsFrame.settingssystime.open();
            hiWebOsFrame.settingssystime.hiFocus("setting_sys_time_mode_btn");
            /*if(PageDataSettingSysTime.operateData.curcountry!="AUS"
                &&PageDataSettingSysTime.operateData.curcountryzonelist.length<=1)
            {
                hiWebOsFrame.settingssystime.hiFocus("setting_sys_time_btn2");
            }
            else{
                hiWebOsFrame.settingssystime.hiFocus("setting_sys_time_btn1");
            }*/
           // SettingFirUpdateHelpinfo(PageDataSettingSysTime.operateData.helplist[0].title,PageDataSettingSysTime.operateData.helplist[0].content)

        }
        else if(PageDateSettingSysinput1.operateData.curparent==3)
        {
            this.page.close();
            $("#setting_sys_inputmodule_input1").val("");
            $("#setting_sys_inputmodule_input2").val("");
            $("#setting_sys_inputmodule_input3").val("");
            $("#setting_sys_inputmodule_input4").val("");
//            SettingFirUpdateHelpinfo(PageDataSettingSysSecurity.operateData.helplist[0].title,PageDataSettingSysSecurity.operateData.helplist[0].content)
            // 帮助信息待修改？
            hiWebOsFrame.settingsyschgpwd2.rewriteDataOnly();
            hiWebOsFrame.settingsyschgpwd2.open();
            hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input1");
        }
    }
    else
    {

        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=0;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();

        });
        setTimeout(sysinputclose,2 * 1000);
    }
    }catch (e)
    {
        debugE(e.message);
    }
}
function sysinputclose() {
    try{
       if(hiWebOsFrame.isCurrentModule("setting"))
       {
           debugPrint("setting module close pwderror")
            hiWebOsFrame.settingsyspwderror.close();
            $("#setting_sys_inputmodule_input1").val("");
           $("#setting_sys_inputmodule_input2").val("");
           $("#setting_sys_inputmodule_input3").val("");
           $("#setting_sys_inputmodule_input4").val("");
           // $("#setting_sys_chgpwd_input2").val("");
            hiWebOsFrame.settingsysinput1.open();
            hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input1");
            hiWebOsFrame.settingsyspwderror.destroy();
       }
       else
       {
           debugPrint("setting module  has exit ");
           hiWebOsFrame.settingsyspwderror.close();
           hiWebOsFrame.settingsyspwderror.destroy();

       }
    }catch (e)
    {
        debugPrint(e.message)
    }



}
function SettingSysInputPwdCancel()
{
  //  this.page.close();
//    hiWebOsFrame.settingssysstartnav.destroy();
//    hiWebOsFrame.settingssyssecurity.destroy();
//    hiWebOsFrame.settingssysagelock.destroy();
//   // hiWebOsFrame.settingssyslist1.destroy();
//    hiWebOsFrame.settingsyschgpwd.destroy();
//    hiWebOsFrame.settingsysinput1.destroy();
//    hiWebOsFrame.settingssyslocktime.destroy();
    if(PageDateSettingSysinput1.operateData.curparent==0 || PageDateSettingSysinput1.operateData.curparent==3) //systemPIN返回暂时放这里
    {
    this.page.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
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
    }
    else if(PageDateSettingSysinput1.operateData.curparent==1)
    {
        this.page.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        if( !!hiWebOsFrame.settingssysstartnav)
        {
            hiWebOsFrame.settingssysstartnav.destroy();
        }
        if( !!hiWebOsFrame.settingsysinput1)
        {
            hiWebOsFrame.settingsysinput1.destroy();
        }
    }
    else if(PageDateSettingSysinput1.operateData.curparent==2)
    {
        this.page.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        if( !!hiWebOsFrame.settingssystime)
        {
            hiWebOsFrame.settingssystime.destroy();
        }
        if( !!hiWebOsFrame.settingssysautotime)
        {
            hiWebOsFrame.settingssysautotime.destroy();
        }
        if( !!hiWebOsFrame.settingsysinput1)
        {
            hiWebOsFrame.settingsysinput1.destroy();
        }
    }
//  PageDataSettingSysSecurity.operateData

}
var ResetPwd="1234";
function SettingSecPincheck()
{
  // var temp1=model.parentlock.getPinMemorised();
    try
    {
        var temp1=model.parentlock.getPin();
        debugPrint( "pin is  "+JSON.stringify(temp1));
        if(temp1=="")
        {
            debugPrint("there is no pwd");
            PageDateSettingSysinput1.operateData.curpassword="";
            PageDateSettingSysChgpwd2.operateData.curtype=0;
            hiWebOsFrame.settingsyschgpwd2.rewriteDataOnly();
            hiWebOsFrame.settingsyschgpwd2.open();
            hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input1");
        }
        else
        {
            PageDateSettingSysinput1.operateData.curpassword=temp1;//model.parentlock.getPin();
            PageDateSettingSysinput1.operateData.curfallbackpwd=g_SystemFallbackPwd;
            PageDateSettingSysChgpwd2.operateData.curtype=1;
            hiWebOsFrame.settingsysinput1.rewriteDataOnly();
            hiWebOsFrame.settingsysinput1.open();
            hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input1");
        }
    }catch (e)
    {
        debugPrint(e.message)
    }
}
function SettingEUPCPincheck()  //欧洲机家长控制密码检查
{
    // var temp1=model.parentlock.getPinMemorised();
    var temp= model.parentlock.getSModel();
//    var temp = 1;
    debugPrint("the parent lock is "+temp);
    var temp1=model.parentlock.getPin();
//    var temp1 = 2222;
    debugPrint( "pin is  "+JSON.stringify(temp1));
    // var temp1=1;
    if(temp1!=""&&temp==1)
    {
        PageDateSettingSysinput1.operateData.curpassword=temp1;//model.parentlock.getPin();
        PageDateSettingSysinput1.operateData.curfallbackpwd=g_SystemFallbackPwd;
        hiWebOsFrame.settingsysinput1.rewriteDataOnly();
        hiWebOsFrame.settingsysinput1.open();
        hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input1");
    }
    else
    {
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
    }
}
function SettingrestorePincheck()
{
  // var temp1=model.parentlock.getPinMemorised();
    var temp= model.parentlock.getSModel();
    debugPrint("the parent lock is "+temp);
    var temp1=model.parentlock.getPin();
    debugPrint( "pin is  "+JSON.stringify(temp1));
   // var temp1=1;
    if(temp1!=""&&temp==1)
    {
        PageDateSettingSysinput1.operateData.curpassword=temp1;//model.parentlock.getPin();
        PageDateSettingSysinput1.operateData.curfallbackpwd=g_SystemFallbackPwd;
        hiWebOsFrame.settingsysinput1.rewriteDataOnly();
        hiWebOsFrame.settingsysinput1.open();
        hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input1");
    }
    else
    {
        hiWebOsFrame.settingssysstartnav.open();
        hiWebOsFrame.settingssysstartnav.hiFocus();
    }
}
function SettingTimePinCheck()
{
    var temp=model.parentlock.getSModel();
    debugPrint("the parent lock is "+temp);
    var temp1=model.parentlock.getPin();
    debugPrint( "pin is  "+JSON.stringify(temp1));
    if(temp1!=""&&temp==1)
    {
        PageDateSettingSysinput1.operateData.curpassword=temp1;//model.parentlock.getPin();
        PageDateSettingSysinput1.operateData.curfallbackpwd=g_SystemFallbackPwd;
        hiWebOsFrame.settingsysinput1.rewriteDataOnly();
        $("#setting_fircls_page").css("visibility","visible");
        hiWebOsFrame.settingsysinput1.open();
        hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input1");
    }
    else
    {
        $("#setting_fircls_page").css("visibility","visible");
        hiWebOsFrame.settingssystime.open();
        SettingTimeUpdateHelpinfo(PageDataSettingSysTime.operateData.helplist[0].title,PageDataSettingSysTime.operateData.helplist[0].content);
        hiWebOsFrame.settingssystime.hiFocus();
//        if(PageDataSettingSysTime.operateData.curcountry!="AUS"
//            &&PageDataSettingSysTime.operateData.curcountryzonelist.length<=1)
//        {
//            hiWebOsFrame.settingssystime.hiFocus("setting_sys_time_btn2");
//        }
//        else{
//            hiWebOsFrame.settingssystime.hiFocus("setting_sys_time_btn1");
//        }
       // SettingFirUpdateHelpinfo(PageDataSettingSysTime.operateData.helplist[0].title,PageDataSettingSysTime.operateData.helplist[0].content)

    }
}
function SettingSysInput1Focus()
{
    debugPrint("the input1 focus");
    if(g_skbflag==1)
    {
        g_skbflag=0;
    }
    else
    {

      $("#setting_sys_inputmodule_input1").val("");
    }
}
function SettingSysInput2Focus()
{
    debugPrint("the input2 focus");
    if(g_skbflag==1)
    {
        g_skbflag=0;
    }
    else
    {
    $("#setting_sys_inputmodule_input2").val("");
    }
}
function SettingSysInput3Focus()
{
    debugPrint("the input3 focus");
    if(g_skbflag==1)
    {
        g_skbflag=0;
    }
    else
    {
       $("#setting_sys_inputmodule_input3").val("");
    }

}
function SettingSysInput4Focus()
{
    debugPrint("the input4 focus");
    if(g_skbflag==1)
    {
        g_skbflag=0;
    }
    else
    {
      $("#setting_sys_inputmodule_input4").val("");
    }

}
function settingsysinput1change()
{
    debugPrint("in the input1 changed");
    var temp=$("#setting_sys_inputmodule_input1").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input2");
    }
}
function settingsysinput2change()
{
    debugPrint("in the input2 changed");
    var temp=$("#setting_sys_inputmodule_input2").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input3");
    }
}
function settingsysinput3change()
{
    debugPrint("in the input3 changed");
    var temp=$("#setting_sys_inputmodule_input3").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_input4");
    }
}
function settingsysinput4change()
{

    debugPrint("in the input4 changed");
    var temp=$("#setting_sys_inputmodule_input4").val();
    if (temp.length>=1)
    {
        hiWebOsFrame.settingsysinput1.hiFocus("setting_sys_inputmodule_btn1");
        $("#setting_sys_inputmodule_input4").blur();
    }
}
//$(document).ready(function(){
//    $('#setting_sys_inputmodule_input1,#setting_sys_inputmodule_input2').change(function(){
//        settingsysinput1change();
//    })
//})
var g_skbflag=0;
function SettingSysInputOkHandler()
{
  //  g_skbflag=1;
  //  invokeSKB.call(this);
}
