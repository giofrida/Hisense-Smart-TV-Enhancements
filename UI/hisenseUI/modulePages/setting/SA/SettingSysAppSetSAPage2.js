/**
 * Created by Administrator on 14-9-4.
 */
function getSettingSysAppSetSAPage2Data(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_appset_sa_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_appset_head_sa_txt1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_sa_app1_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_sa_app1_str2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_sa_appset_btn1",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
           // "nav":{"downTo": "setting_sys_sa_appset_btn2", "upTo": ""},
            "handler": {
                "aftDownHandler":"SettingSysAppsetSApage2focus",
                "aftUpHandler":"SettingSysAppsetSApage2focus",
                "befEnterHandler": "SettingSysAppsetSApage2EnHandler",
                "befLeftHandler":"SettingSysAppsetSApage2EscHandler",
                "befEscHandler": "SettingSysAppsetSApage2EscHandler",
                "befDownHandler":"SettingSysappsetSApage2btn1down"
            }
        },
        {
            "id": "setting_sys_sa_appset_ESN_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_sa_appset_ESN_str2",
            "description": "menulanusge",
            "CaEType": "div",
            "enableHtml":true
        },
        {
            "id": "setting_sys_sa_app2_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_sa_app2_str2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_sa_appset_btn2",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
           // "nav":{"downTo": "", "upTo": "setting_sys_sa_appset_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysAppsetSApage2focus",
                "aftUpHandler":"SettingSysAppsetSApage2focus",
                "befLeftHandler":"SettingSysAppsetSApage2EscHandler",
                "befEnterHandler": "SettingSysAppsetSApage2EnHandler",
                "befEscHandler": "SettingSysAppsetSApage2EscHandler",
                "befUpHandler":"SettingSysappsetSApage2btn2up"
            }
        }

    ]
    appsetSAPage2init();
    return PageDataSysAppSettingSA2

}
var PageDataSysAppSettingSA2={

    "setting_sys_appset_sa_img1":{Data:"img/head_arrow.png"},
    "setting_appset_head_sa_txt1":{Data:"Application Settings"},
    "setting_sys_sa_app1_str1":{Data:"Netflix"},
    "setting_sys_sa_app1_str2":{Data:"Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service."},
    "setting_sys_sa_appset_btn1":{Data:"Deactivate"},

    "setting_sys_sa_appset_ESN_str1":{Data:"ESN"},
    "setting_sys_sa_appset_ESN_str2":{Data:""},

    "setting_sys_sa_app2_str1":{Data:"VUDU"},
    "setting_sys_sa_app2_str2":{Data:"Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service."},
    "setting_sys_sa_appset_btn2":{Data:"Deactivate"},
    "operateData": {
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
        "curnetflixstate":0
    },
    "langData":{
        "Ginga":[],
        "Ginga Setup":[],
        "Auto Run":[],
        "Application Settings": ["Application Settings","Param?tres d'application","Configuraci?n de la aplicaci?n"],
        "Netflix": ["Netflix","Netflix","Netflix"],
        "Deactivate": ["Deactivate","D?sactiver","Desactivar"],
        "Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service.": ["Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service.","Retirer ce t?l?viseur de votre compte Netflix. Veuillez contacter Netflix si vous ne souhaitez plus recevoir ce service.","Eliminar este televisor de su cuenta de Netflix. P?ngase en contacto con Netflix si quiere dejar de recibir facturas por su servicio."],
        "Deactivating service on this TV. Please contact your service provider if you want to stop service.": ["Deactivating service on this TV. Please contact your service provider if you want to stop service.","D?sactiver le service sur ce t?l?viseur. Veuillez contactez votre fournisseur de service si vous souhaitez mettre fin ? votre abonnement.","Desactivando el servicio en este televisor. P?ngase en contacto con su proveedor de servicios si desea detener el servicio."],
        "ESN": ["ESN","ESN","ESN"],
        "Not available": ["Not available","Indisponible","No disponible"],
        "Display the Netflix Electronic Serial Number.": ["Display the Netflix Electronic Serial Number.","Affichez le num?ro de s?rie ?lectronique Netflix.","Muestra el n?mero de serie electr?nico de Netflix."],
        "VUDU ": ["VUDU ","VUDU ","VUDU "],
        "Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service.": ["Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service.","Retirer ce t?l?viseur de votre compte VUDU. Veuillez contacter VUDU si vous ne souhaitez plus recevoir ce service.","Eliminar este televisor de su cuenta de VUDU. P?ngase en contacto con VUDU si quiere dejar de recibir facturas de su servicio."]

    },
    rewrite:function(pageData){
        pageData.setting_sys_sa_appset_ESN_str2.Data=pageData.operateData.curesn;
    }

};

function SettingSysappsetSApage2btn1down()
{
try
{    debugPrint(" the applist "+PageDataSysAppSettingSA2.operateData.applist)
    var temp=_getIndex(PageDataSysAppSettingSA2.operateData.applist,"vudu");
  if(temp>=0)
  {
      hiWebOsFrame.settingssysappsetsa2.hiFocus("setting_sys_sa_appset_btn2");
      var htmlText1 = $("#setting_sys_sa_appset_btn2").html();
      if (htmlText1.length >12) {
          $("#setting_sys_sa_appset_btn2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
      }
      var marquee = $("#setting_sys_sa_appset_btn1" + " marquee");
      if (marquee.length > 0) {
          var htmlText2 = $("#setting_sys_sa_appset_btn1" + " marquee").html();
          var marquee = $("#setting_sys_sa_appset_btn1" ).html(htmlText2);
      }
      SettingFirUpdateHelpinfo(PageDataSysAppSettingSA2.operateData.helplist[1].title,PageDataSysAppSettingSA2.operateData.helplist[1].content)

   }
}catch (e)
{
    debugE(e.message)
}
}
function SettingSysappsetSApage2btn2up()
{

    var temp=_getIndex(PageDataSysAppSettingSA2.operateData.applist,"netflix");
    if(temp>=0)
    {
        hiWebOsFrame.settingssysappsetsa2.hiFocus("setting_sys_sa_appset_btn1");
        var htmlText1 = $("#setting_sys_sa_appset_btn1").html();
        if (htmlText1.length >12) {
            $("#setting_sys_sa_appset_btn1").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
        }
        var marquee = $("#setting_sys_sa_appset_btn2" + " marquee");
        if (marquee.length > 0) {
            var htmlText2 = $("#setting_sys_sa_appset_btn2" + " marquee").html();
            var marquee = $("#setting_sys_sa_appset_btn2" ).html(htmlText2);
        }
        SettingFirUpdateHelpinfo(PageDataSysAppSettingSA2.operateData.helplist[0].title,PageDataSysAppSettingSA2.operateData.helplist[0].content)

    }
}
function SettingSysAppsetSApage2focus()
{
    if(this.id=="setting_sys_sa_appset_btn1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_sa_appset_btn2")
    {
        index = 1;
    }

    SettingFirUpdateHelpinfo(PageDataSysAppSettingSA2.operateData.helplist[index].title,PageDataSysAppSettingSA2.operateData.helplist[index].content)

}
function appsetSAPage2init()
{
   try
   {

       if(!!PageDataFirstCls.operateData.applist)
       {
           var temp=_getIndex(PageDataFirstCls.operateData.applist,"netflix");
           if(temp>=0)
           {
               $("#setting_sys_appset_netflix").css("display","block");
               var tempstr =model.appsetting.getEsn();
               PageDataSysAppSettingSA2.operateData.curesn=tempstr;//model.appsetting.getEsn();
               debugPrint("app setting esn is "+JSON.stringify(PageDataSysAppSettingSA2.operateData.curesn));

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
    //   PageDataSysAppSettingSA2.operateData.curvudustate=model.appsetting.getVuduState();
    //   PageDataSysAppSettingSA2.operateData.curnetflixstate=model.appsetting.getNetflixState();
    //   debugPrint("curvudustate"+PageDataSysAppSettingSA2.operateData.curvudustate);
    //   debugPrint("curnetflixstate"+PageDataSysAppSettingSA2.operateData.curnetflixstate);

   }catch (e)
   {
       debugPrint(e.message)
   }
}
function SettingSysAppSeSApage2onDestroy()
{
    hiWebOsFrame.settingssysappsetsa2=null;

}
function SettingSysAppsetSApage2EnHandler()
{
    if(this.id=="setting_sys_sa_appset_btn1")
    {
        hiWebOsFrame.createPage('setting_towizard_page', null, hiWebOsFrame.settingssysappsetsa2, null, function (navpage) {
            hiWebOsFrame.settingssysstartwizard = navpage;
            PageDataSetttingSysWzard.operateData.parentpage = "appset2";
            PageDataSetttingSysWzard.operateData.curdatatype = 2;
            PageDataSetttingSysWzard.operateData.option=1;
            navpage.rewriteDataOnly();
            navpage.open();
            navpage.hiFocus();

        });
    }
    else if(this.id=="setting_sys_sa_appset_btn2")
    {
        hiWebOsFrame.createPage('setting_towizard_page', null, hiWebOsFrame.settingssysappsetsa2, null, function (navpage) {
            hiWebOsFrame.settingssysstartwizard = navpage;
            PageDataSetttingSysWzard.operateData.parentpage = "appset2";
            PageDataSetttingSysWzard.operateData.curdatatype = 2;
            PageDataSetttingSysWzard.operateData.option=2;
            navpage.rewriteDataOnly();
            navpage.open();
            navpage.hiFocus();

        });
    }
}
function SettingSysAppsetSApage2EscHandler()
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