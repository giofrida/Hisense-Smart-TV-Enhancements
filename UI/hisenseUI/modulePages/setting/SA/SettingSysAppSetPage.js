/**
 * Created by Administrator on 14-9-4.
 */
function getSettingSysAppSetPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_appset_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_appset_head_txt1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_app1_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_app1_str2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_appset_btn1",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
           // "nav":{"downTo": "setting_sys_appset_btn2", "upTo": ""},
            "handler": {
                "aftDownHandler":"SettingSysAppsetfocus",
                "aftUpHandler":"SettingSysAppsetfocus",
                "befEnterHandler": "SettingSysAppsetEnHandler",
                "befLeftHandler":"SettingSysAppsetEscHandler",
                "befEscHandler": "SettingSysAppsetEscHandler",
                "befDownHandler":"SettingSysbtn1down"
            }
        },
        {
            "id": "setting_sys_appset_ESN_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_appset_ESN_str2",
            "description": "menulanusge",
            "CaEType": "div",
            "enableHtml":true
        },
        {
            "id": "setting_sys_app2_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_app2_str2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_appset_btn2",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_app_switch1_control1", "upTo": ""},
            "handler": {
                "aftDownHandler":"SettingSysAppsetfocus",
                "aftUpHandler":"SettingSysAppsetfocus",
                "befEnterHandler": "SettingSysAppsetEnHandler",
                "befLeftHandler":"SettingSysAppsetEscHandler",
                "befEscHandler": "SettingSysAppsetEscHandler",
                "befUpHandler":"SettingSysbtn2up",
                "befDownHandler":"SettingSysbtn2down"
            }
        },
        {
            "id": "setting_sys_app3_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_app_switch1_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_app_switch2_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_app_switch1_control1",
            "description":"开关控件",
            "classes":
            {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "","downTo":"setting_sys_app_switch2_control1"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysAppsetfocus",
                "aftUpHandler":"SettingSysAppsetfocus",
                "befEnterHandler": "SettingSysAppsetctrlEnHandler",
                "befLeftHandler":"SettingSysAppsetEscHandler",
                "befEscHandler": "SettingSysAppsetEscHandler",
                "befUpHandler":"SettingSysswitch1up"

            }

        },
        {
            "id":"setting_sys_app_switch2_control1",
            "description":"开关控件",
            "classes":
            {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_app_switch1_control1"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysAppsetfocus",
                "aftUpHandler":"SettingSysAppsetfocus",
                "befEnterHandler": "SettingSysAppsetctrlEnHandler",
                "befLeftHandler":"SettingSysAppsetEscHandler",
                "befEscHandler": "SettingSysAppsetEscHandler"
//                "befUpHandler":"SettingSysswitch1up"

            }

        }
    ]
    appsetinit();
    return PageDataSysAppSetting

}
var PageDataSysAppSetting={

    "setting_sys_appset_img1":{Data:"img/head_arrow.png"},
    "setting_appset_head_txt1":{Data:"Application Settings"},
    "setting_sys_app1_str1":{Data:"Netflix"},
    "setting_sys_app1_str2":{Data:"Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service."},
    "setting_sys_appset_btn1":{Data:"Deactivate"},

    "setting_sys_appset_ESN_str1":{Data:"ESN"},
    "setting_sys_appset_ESN_str2":{Data:""},

    "setting_sys_app2_str1":{Data:"VUDU"},
    "setting_sys_app2_str2":{Data:"Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service."},
    "setting_sys_appset_btn2":{Data:"Deactivate"},
    "setting_sys_app3_str1":{Data:"Ginga"},
    "setting_sys_app_switch1_str1":{Data:"Ginga Setup"},
    "setting_sys_app_switch1_control1":{Data:{ switchType:true, switchText:''},disable:false},
    "setting_sys_app_switch2_str1":{Data:"Auto Run"},
    "setting_sys_app_switch2_control1":{Data:{ switchType:true, switchText:''},disable:false},

    "operateData": {
        "setting_sys_app_switch1_control1":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "setting_sys_app_switch2_control1":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        'curesn':"0000000",
        "helplist":[
            {
                "title":"Netflix",
                "content":"Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service."
            },
            {
                "title":"VUDU",
                "content":"Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service."
            },
            {
                "title":"",
                "content":""
            },
            {
                "title":"",
                "content":""
            }
        ],
        "curvudustate": 0,
        "curnetflixstate":0,
        "gingaswitch":0,
        "gingaautorun":0
    },
    "langData":{
        "Ginga":[],
        "Ginga Setup":[],
        "Auto Run":[],

        "Application Settings": ["Application Settings","Param�tres d'application","Configuraci�n de la aplicaci�n"],
        "Netflix": ["Netflix","Netflix","Netflix"],
        "Deactivate": ["Deactivate","D�sactiver","Desactivar"],
        "Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service.": ["Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service.","Retirer ce t�l�viseur de votre compte Netflix. Veuillez contacter Netflix si vous ne souhaitez plus recevoir ce service.","Eliminar este televisor de su cuenta de Netflix. P�ngase en contacto con Netflix si quiere dejar de recibir facturas por su servicio."],
        "Deactivating service on this TV. Please contact your service provider if you want to stop service.": ["Deactivating service on this TV. Please contact your service provider if you want to stop service.","D�sactiver le service sur ce t�l�viseur. Veuillez contactez votre fournisseur de service si vous souhaitez mettre fin � votre abonnement.","Desactivando el servicio en este televisor. P�ngase en contacto con su proveedor de servicios si desea detener el servicio."],
        "ESN": ["ESN","ESN","ESN"],
        "Not available": ["Not available","Indisponible","No disponible"],
        "Display the Netflix Electronic Serial Number.": ["Display the Netflix Electronic Serial Number.","Affichez le num�ro de s�rie �lectronique Netflix.","Muestra el n�mero de serie electr�nico de Netflix."],
        "VUDU ": ["VUDU ","VUDU ","VUDU "],
        "Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service.": ["Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service.","Retirer ce t�l�viseur de votre compte VUDU. Veuillez contacter VUDU si vous ne souhaitez plus recevoir ce service.","Eliminar este televisor de su cuenta de VUDU. P�ngase en contacto con VUDU si quiere dejar de recibir facturas de su servicio."]

    },
    rewrite:function(data){
        var _this = this,
            opeData = data.operateData;
        $.each(data,function(key,val){

            if(!key) return true;

            var localData = data[key],
                localOpeData =opeData[key];
            switch(key)
            {
                case "setting_sys_app_switch1_control1":
                case "setting_sys_app_switch2_control1":
                    //更新data里面的数据
                    localData.Data.switchType = localOpeData.switchType;
                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                    break;
            }
        })
        data.setting_sys_appset_ESN_str2.Data=data.operateData.curesn;
    }

};

function SettingSysbtn1down()
{

    var temp=_getIndex(PageDataSysAppSetting.operateData.applist,"vudu");
   if(temp>=0)
    {
      hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn2");
      SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[1].title,PageDataSysAppSetting.operateData.helplist[1].content)

   }
   else
   {
       hiWebOsFrame.settingssysappset.hiFocus("setting_sys_app_switch1_control1");

   }
}
function SettingSysbtn2up()
{

    var temp=_getIndex(PageDataSysAppSetting.operateData.applist,"netflix");
    if(temp>=0)
    {
        hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn1");
        SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].title,PageDataSysAppSetting.operateData.helplist[0].content)

    }
}
function SettingSysswitch1up()
{
    var temp=_getIndex(PageDataSysAppSetting.operateData.applist,"vudu");
    if(temp>=0)
    {
        hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn2");
        SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[1].title,PageDataSysAppSetting.operateData.helplist[1].content)

    }
    else
    {
        temp=_getIndex(PageDataSysAppSetting.operateData.applist,"netflix");
        if(temp>=0)
        {
            hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn1");
            SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].title,PageDataSysAppSetting.operateData.helplist[0].content)

        }
        else
        {
            hiWebOsFrame.settingssysappset.hiFocus("setting_sys_app_switch1_control1");

        }
    }
}
function SettingSysbtn2down()
{

}

function SettingSysAppsetctrlEnHandler(operateData,data)
{
    var page = this.page;
    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    if(this.id=="setting_sys_app_switch1_control1")
    {
        SetGingaSwitch(operateData[this.id].switchType);
    }
    else if(this.id=="setting_sys_app_switch2_control1")
    {
        SetGingaAutorun( operateData[this.id].switchType);
    }

    page.rewriteDataOnly();
    SetRecentUse("Application Settings",4,APP_SETTING);

}

function SetGingaSwitch(type)
{
    if(type)
    {
        model.ginga.setI32Enable(1);
        debugPrint("SetGingaSwitch 1" )
    }
    else
    {
        model.ginga.setI32Enable(0);
        debugPrint("SetGingaSwitch 0" )
    }
}
function SetGingaAutorun(type)
{
    if(type)
    {
        model.ginga.setI32AutoRun(1);
        debugPrint("setI32AutoRun 1" );
    }
    else
    {
        model.ginga.setI32AutoRun(0);
        debugPrint("setI32AutoRun 0" );
    }
}

function SettingSysAppsetfocus()
{   var index;
    if(this.id=="setting_sys_appset_btn1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_appset_btn2")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_app_switch1_control1")
    {
        index = 2;
    }
    else if(this.id=="setting_sys_app_switch2_control1")
    {
        index = 3;
    }
    else
    {
        index = 3;
    }

    SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[index].title,PageDataSysAppSetting.operateData.helplist[index].content)

}
function appsetinit()
{
   try
   {

       debugPrint("app setting esn is "+JSON.stringify(PageDataSysAppSetting.operateData.curesn));
       if(!!PageDataFirstCls.operateData.applist)
       {
           var temp=_getIndex(PageDataFirstCls.operateData.applist,"netflix");
           if(temp>=0)
           {
               $("#setting_sys_appset_netflix").css("display","block");
               var tempstr =model.appsetting.getEsn();
               PageDataSysAppSetting.operateData.curesn=tempstr;//model.appsetting.getEsn();

           }
           else
           {
               $("#setting_sys_appset_netflix").css("display","none");

           }
           var temp=_getIndex(PageDataFirstCls.operateData.applist,"vudu");
           if(temp>=0)
           {
               $("#setting_sys_appset_vudu").css("display","block");
           }
           else
           {
               $("#setting_sys_appset_vudu").css("display","none");
           }

       }
//       PageDataSysAppSetting.operateData.curvudustate=model.appsetting.getVuduState();
//       PageDataSysAppSetting.operateData.curnetflixstate=model.appsetting.getNetflixState();
//       debugPrint("curvudustate"+PageDataSysAppSetting.operateData.curvudustate);
//       debugPrint("curnetflixstate"+PageDataSysAppSetting.operateData.curnetflixstate);
       PageDataSysAppSetting.operateData.gingaswitch=model.ginga.getI32Enable();
       debugPrint("get ginga switch"+PageDataSysAppSetting.operateData.gingaswitch);
       if(PageDataSysAppSetting.operateData.gingaswitch==0)
       {
           PageDataSysAppSetting.operateData.setting_sys_app_switch1_control1.switchType=false;
       }
       else
       {
           PageDataSysAppSetting.operateData.setting_sys_app_switch1_control1.switchType=true;

       }
       PageDataSysAppSetting.operateData.gingaautorun=model.ginga.getI32AutoRun();
       debugPrint("ginga auto run "+PageDataSysAppSetting.operateData.gingaautorun);
       if(PageDataSysAppSetting.operateData.gingaautorun==0)
       {
           PageDataSysAppSetting.operateData.setting_sys_app_switch2_control1.switchType=false;
       }
       else
       {
           PageDataSysAppSetting.operateData.setting_sys_app_switch2_control1.switchType=true;

       }
   }catch (e)
   {
       debugPrint(e.message)
   }
}
function SettingSysAppSetonDestroy()
{
    hiWebOsFrame.settingssysappset=null;

}
function SettingSysAppsetEnHandler()
{
    if(this.id=="setting_sys_appset_btn1")
    {
        hiWebOsFrame.createPage('setting_towizard_page', null, hiWebOsFrame.settingssysappset, null, function (navpage) {
            hiWebOsFrame.settingssysstartwizard = navpage;
            PageDataSetttingSysWzard.operateData.parentpage = "appset";
            PageDataSetttingSysWzard.operateData.curdatatype = 2;
            PageDataSetttingSysWzard.operateData.option=1;
            navpage.rewriteDataOnly();
            navpage.open();
            navpage.hiFocus();

        });
    }
    else if(this.id=="setting_sys_appset_btn2")
    {
        hiWebOsFrame.createPage('setting_towizard_page', null, hiWebOsFrame.settingssysappset, null, function (navpage) {
            hiWebOsFrame.settingssysstartwizard = navpage;
            PageDataSetttingSysWzard.operateData.parentpage = "appset";
            PageDataSetttingSysWzard.operateData.curdatatype = 2;
            PageDataSetttingSysWzard.operateData.option=2;
            navpage.rewriteDataOnly();
            navpage.open();
            navpage.hiFocus();

        });
    }
}
function SettingSysAppsetEscHandler()
{
    this.page.close();
    RefreshHelpInfo(4, 4);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    this.page.destroy();
    if(!!hiWebOsFrame.settingssysstartwizard)
    {
        hiWebOsFrame.settingssysstartwizard.destroy();
    }


}