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
           // "nav":{"downTo": "", "upTo": "setting_sys_appset_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysAppsetfocus",
                "aftUpHandler":"SettingSysAppsetfocus",
                "befEnterHandler": "SettingSysAppsetEnHandler",
                "befLeftHandler":"SettingSysAppsetEscHandler",
                "befEscHandler": "SettingSysAppsetEscHandler",
                "befUpHandler":"SettingSysbtn2up"
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
            }
        ],
        "curvudustate": 0,
        "curnetflixstate":0
    },
    "langData":{
        "Application Settings": [],
        "Netflix": [],
        "Deactivate": [],
        "Remove this TV from your Netflix account. Please contact Netflix if you want to stop being billed for your service.": [],
        "Deactivating service on this TV. Please contact your service provider if you want to stop service.": [],
        "ESN": [],
        "Not available": [],
        "Display the Netflix Electronic Serial Number.": [],
        "VUDU ": [],
        "Remove this TV from your VUDU account. Please contact VUDU if you want to stop being billed for your service.": []

    },
    rewrite:function(pageData){
        pageData.setting_sys_appset_ESN_str2.Data=pageData.operateData.curesn;
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_appset_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
           // $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_lang1__cls").css("left","510px");
        }
        else {
            pageData.setting_sys_appset_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
         //   $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
            $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");
            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left")
            $(".setting_sys_lang1__cls").css("left","358px");
        }
    }

};

function SettingSysbtn1down()
{

    var temp=_getIndex(PageDataSysAppSetting.operateData.applist,"vudu");
  if(temp>=0)
  {
      hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn2");
      var htmlText1 = $("#setting_sys_appset_btn2").html();
      if (htmlText1.length >12) {
          $("#setting_sys_appset_btn2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
      }
      var marquee = $("#setting_sys_appset_btn1" + " marquee");
      if (marquee.length > 0) {
          var htmlText2 = $("#setting_sys_appset_btn1" + " marquee").html();
          var marquee = $("#setting_sys_appset_btn1" ).html(htmlText2);
      }
      SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[1].content)

  }
}
function SettingSysbtn2up()
{

    var temp=_getIndex(PageDataSysAppSetting.operateData.applist,"netflix");
    if(temp>=0)
    {
        hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn1");
        var htmlText1 = $("#setting_sys_appset_btn1").html();
        if (htmlText1.length >12) {
            $("#setting_sys_appset_btn1").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
        }
        var marquee = $("#setting_sys_appset_btn2" + " marquee");
        if (marquee.length > 0) {
            var htmlText2 = $("#setting_sys_appset_btn2" + " marquee").html();
            var marquee = $("#setting_sys_appset_btn2" ).html(htmlText2);
        }
        SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].content)

    }
}
function SettingSysAppsetfocus()
{
    var index
    if(this.id=="setting_sys_appset_btn1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_appset_btn2")
    {
        index = 1;
    }

    SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[index].content)

}

function SettingSysAppsetUpdateHelpinfo(content)
{
    PageDataSysAppSetting.operateData.helpcontent=content;
//    PageDataSettingSysLang.operateData.helptitle=title;
    try {
//        if (title != "" && !!langPackages[title]) {
//            $("#setting_sys_lang_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
//        }
//        else {
//            $("#setting_sys_lang_helpinfo_title").html(title);
//        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_appset_helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_appset_helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }

}
function appsetinit()
{
   try
   {
       if(hiWebOsFrame.getCurrentArea()=="EU")
       {
           $("#setting_sys_appset_helpinfo").css("display","block")
       }
       else
       {
           $("#setting_sys_appset_helpinfo").css("display","none")

       }
       PageDataSysAppSetting.operateData.curesn=model.appsetting.getEsn();
       debugPrint("app setting esn is "+PageDataSysAppSetting.operateData.curesn);
       if(!!PageDataFirstCls.operateData.applist)
       {
           var temp=_getIndex(PageDataFirstCls.operateData.applist,"netflix");
           if(temp>=0)
           {
               $("#setting_sys_appset_netflix").css("display","block");
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

      // PageDataSysAppSetting.operateData.curvudustate=model.appsetting.getVuduState();
      // PageDataSysAppSetting.operateData.curnetflixstate=model.appsetting.getNetflixState();
      // debugPrint("curvudustate"+PageDataSysAppSetting.operateData.curvudustate);
     //  debugPrint("curnetflixstate"+PageDataSysAppSetting.operateData.curnetflixstate);

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
//    RefreshHelpInfo(4, 4);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    this.page.destroy();
    if(!!hiWebOsFrame.settingssysstartwizard)
    {
        hiWebOsFrame.settingssysstartwizard.destroy();
    }


}
