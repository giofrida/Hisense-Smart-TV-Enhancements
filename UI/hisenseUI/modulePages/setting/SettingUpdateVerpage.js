/**
 * Created by Administrator on 14-6-18.
 */

function getUpdateVersionData(opt)
{
    opt.CaE= [
        {
            "id": "setting_update_ver_title",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_update_ver_cur",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_cur_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_new",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_new_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_con_title",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_update_ver_box",
            "description": "",
            "CaEType": "div",
            "enableHtml":true,
            "disable": false


//        {
//            "id":"setting_update_ver_content",
//            "description":"ok",
////            "classes": {
////                "normal": "", "focus": ""
////            },
//            "CaEType": "Container",
//            "CaE":[
//                {
//                    "id": "setting_sys_update_ver_box",
//                    "description": "",
//                    "CaEType": "div",
//                    "disable": false
//
//                }]

//                    "handler":{
//                        'aftEnterHandler':""//点击enter事件后处理开关转换
//
//                    }
//                    "nav":{"downTo":"setting_update_ver_btn1"}

        },
        {
            "id":"setting_update_ver_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateVerInfoOk",//点击enter事件后处理
                "aftDownHandler": "SettingUpdateVerDownHandler",
                "aftUpHandler": "SettingUpdateVerUpHandler",
                'aftEscHandler':"SettingUpdateVerInCancel"


            },
            "nav":{"rightTo":"setting_update_ver_btn2","upTo":"setting_update_ver_btn1","downTo":"setting_update_ver_btn1"}

        },
        {
            "id":"setting_update_ver_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateVerInfoOk",//点击enter事件后处理
                "aftDownHandler": "SettingUpdateVerDownHandler",
                "aftUpHandler": "SettingUpdateVerUpHandler",
                'aftEscHandler':"SettingUpdateVerInCancel"


            },
            "nav":{"leftTo":"setting_update_ver_btn1","rightTo":"","upTo":"setting_update_ver_btn2","downTo":"setting_update_ver_btn2"}

        }
//                {
//                    "id":"setting_update_ver_btn3",
//                    "description":"cancel",
//                    "classes": {
//                        "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
//                    },
//                    "CaEType": "div",
//                    "handler":{
//                        'aftEnterHandler':"SettingUpdateVerInfoOk"//点击enter事件后处理
//
//                    },
//                    "nav":{"leftTo":"setting_update_ver_btn2"}
//
//                }

    ];

    return PageDateSettingUpdateverinfo;
}
var PageDateSettingUpdateverinfo={
    "setting_update_ver_title":{Data:"Upgrade"},
    "setting_update_ver_cur":{Data:"Current version:"},
    "setting_update_ver_cur_value1":{Data:"V1.0"},
    "setting_update_ver_new":{Data:"Latest version:"},
    "setting_update_ver_new_value1":{Data:"V1.2"},
    "setting_update_ver_con_title":{Data:"Upgrade content"},
    "setting_sys_update_ver_box":{Data:"1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>"},
//    "setting_update_ver_content":{
//        "Data": {
//            "setting_sys_update_ver_box":{Data:"1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>"}
//
//        }},
    "setting_update_ver_btn1":{Data:"Upgrade"},
    "setting_update_ver_btn2":{Data:"Cancel"},
//    "setting_update_ver_btn3":{Data:"Never reminder"},
    "operateData": {
        "curver":"V1.00.00.00",
        "newver":"V1.00.00.02",
        "currenheight":0,
        "step":42,
        "upgradecontent":""

    },
    "langData":{
        "Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
        "Current version:":["Current version:","Aktuelle Version:","Versione corrente:","Versão atual:","Versión actual:","Version actuelle:","Gjeldende versjon:","Nuvarande version:","Nuværende version:","Nykyinen versio:","当前版本:"],
        "Latest version:":["Latest version:","Aktuellste Version:","Ultima versione:","Versão mais recente:","Última versión:","Version la plus récente:","Nyeste versjon:","Senaste versionen:","Nyeste version:","Uusin versio:","最新版本:"],
        "Upgrade content":["Upgrade content","Inhalt aktualisieren","Aggiorna il contenuto","Atualizar conteúdos","Actualizar contenido","Mise à niveau du contenu","Oppgradere innhold","Uppgradera innehåll","Opgrader indhold","Päivitä sisältö","升级内容"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta","取消"],
//        "Do not remind":["Do not remind","Nicht erneut erinnern","Non ricordare","Não relembrar","No recordar","Ne pas rappeler","Ingen påminnelse","Påminn inte mig","Påmind mig ikke","Älä muistuta","不在提醒"],
//        "Remind me next time":["Remind me next time","Nächstes Mal erinnern","Ricorda la prossima volta","Relembrar da próxima vez","Recuérdame la próxima vez","Me le rappeler la prochaine fois","Minn meg på neste gang","Påminn mig nästa gång","Påmind mig næste gang","Muistuta seuraavalla kerralla","下次提醒 "],

//        "New version":["New version","",""],
//        "Current version:":["Current version:","",""],
//        "New version:":["New version:","",""],
//       // "Upgrade content":["Upgrade content","",""],
//        "upgrade":["upgrade","",""],
//        "Remander later":["Remander later","",""],
        "Never reminder":["Never reminder","",""]
    },
    rewrite:function(pageData){
//        pageData.setting_update_ver_title.Data=pageData.langData.title[langIdx];
//        pageData.setting_update_ver_cur.Data=pageData.langData.curver[langIdx];
//        pageData.setting_update_ver_new.Data=pageData.langData.newver[langIdx];
        pageData.setting_update_ver_cur_value1.Data=pageData.operateData.curver;
        pageData.setting_update_ver_new_value1.Data=pageData.operateData.newver;
        pageData.setting_sys_update_ver_box.Data=pageData.operateData.upgradecontent;
//        pageData.setting_update_ver_content.Data.setting_update_ver_con_title.Data=pageData.langData.upgrade[langIdx];
//        pageData.setting_update_ver_btn1.Data=pageData.langData.btn1[langIdx];
//        pageData.setting_update_ver_btn2.Data=pageData.langData.btn2[langIdx];
//        pageData.setting_update_ver_btn3.Data=pageData.langData.btn3[langIdx];

    }
};
function SettingUpdateVerInfoOk()
{
    debugPrint(" ok is receive");
    if(this.id=="setting_update_ver_btn1")
    {
            debugPrint(" the  btn1 is select ")

            if(PageDateSettingUpdateFir.operateData.curtype==0)//internet
            {
                {   try
                    {
                    hiWebOsFrame.enablePageKeysRemove(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                    this.page.close();
                    PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=1;
                    hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                    hiWebOsFrame.settingsupdatefir.open();
                    this.page.close();
                    hiWebOsFrame.enablePageKeys(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                    settingaboutUpdateback();
                    setTimeout(function(){
                        model.softupdate.StartDownload();
                        g_sysisdownloadingflag=true;
                        debugE("start to download");
                    },1000)

                    }catch (e)
                    {
                        debugE(e.message);
                    }
                     if(!tv)
                     {
                         onUpdateDownloadProgressChaged(5);
                     }

                }
            }
            else if(PageDateSettingUpdateFir.operateData.curtype==1)
            {
                debugPrint("in the oad upgrade")
                hiWebOsFrame.enablePageKeysRemove(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                this.page.close();
                PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=1;
                hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                hiWebOsFrame.settingsupdatefir.open();
                hiWebOsFrame.createPage('setting_update_verifying_page',null, hiWebOsFrame.settingsupdatefir, null,function(page){
                    hiWebOsFrame.settingsupdatedownload=page;
                    PageDateSettingUpdateverifying.operateData.manual=true;
                    hiWebOsFrame.settingsupdatedownload.open();
                    hiWebOsFrame.settingsupdatedownload.hiFocus();
                    hiWebOsFrame.enablePageKeys(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                    setTimeout(function(){
                        model.softupdate.StartOadDownload();
                        debugE("start to download oad ");
                        if(!tv)
                        {
                            onOadDownloadProgressChaged(-5);
                        }
                    },1000)
                    if(!!g_OadDownloadfailtimer)
                    {
                        clearTimeout(g_OadDownloadfailtimer);
                        g_OadDownloadfailtimer=null;
                    }
                    g_OadDownloadfailtimer= setTimeout(function(){
                        debugE("the download fail");
                        model.softupdate.CancelOADUpgrade();
                        onOadDownloadProgressChaged(-100);
                        g_OadDownloadfailtimer=null;
                    },1000*60*60);
               });

            }

    }
    else if(this.id=="setting_update_ver_btn2")
    {
        this.page.close();
        if(PageDateSettingUpdateFir.operateData.curtype==0)
        {
            g_sysisdownloadingflag=true;
            settingaboutUpdateback();
        }else
        {
           try
           {
            model.softupdate.CancelOADUpgrade();
           }catch (e)
           {
               debugE(e.message);
           }
            settingaboutUpdateback();
        }

    }
//    else if(this.id=="setting_update_ver_btn3")
//    {
//        this.page.close();
//        settingaboutUpdateback();
//    }

}

function UpdateVersionPageonDestroy()
{
    hiWebOsFrame.settingsupdateverinfo=null;
}
function SettingUpdateVerInCancel()
{
    this.page.close();
    hiWebOsFrame.settingsupdatefir.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    if(PageDateSettingUpdateFir.operateData.curtype==0)
    {
     //   g_sysisdownloadingflag=true;
        settingaboutUpdateback();
    }else
    {
        try
        {
            model.softupdate.CancelOADUpgrade();
        }catch (e)
        {
            debugE(e.message);
        }
        settingaboutUpdateback();
    }
   // settingUpdatefirEscHandler();
   // settingaboutUpdateback();
}
function mytest()
{
//    if(PageDateSettingUpdateFir.operateData.curtype==0)
//    {
//        hiWebOsFrame.settingsupdateload.getCaE("setting_update_load_progress1").setvalue(100);
//        setTimeout(mytest3 ,2000);
//
//    }
//    else {
    PageDateSettingUpdateprogress.operateData.curprogress=100;
    PageDateSettingUpdateprogress.operateData.curtype=1;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();
    hiWebOsFrame.settingsupdateprogress.open();
    hiWebOsFrame.settingsupdateprogress.hiFocus();
    PageDateSettingUpdateprogress.operateData.curprogress=0;
    PageDateSettingUpdateprogress.operateData.curtype=3;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();

  // }
}
function mytest3()
{
    hiWebOsFrame.settingsupdateload.close();
    PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=2;
    hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
    hiWebOsFrame.settingsupdatefir.open();
    PageDateSettingUpdateprogress.operateData.curtype=0;
    PageDateSettingUpdateprogress.operateData.curprogress=0;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();
  //  hiWebOsFrame.settingsupdateprogress.getCaE("setting_update_progressing_progress1").setvalue(0);
    hiWebOsFrame.settingsupdateprogress.open();
    hiWebOsFrame.settingsupdateprogress.hiFocus();
    hiWebOsFrame.createPage('setting_sys_dialog1_page',null, hiWebOsFrame.settingsupdateprogress, null,function(dialog1){
        hiWebOsFrame.settingsupdatedialog1=dialog1;
        PageDataSetttingSysdialog1.operateData.curdatatype=3;
        hiWebOsFrame.settingsupdatedialog1.open();
        hiWebOsFrame.settingsupdatedialog1.hiFocus();
        hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();

    });
}




function SettingUpdateVerDownHandler()
{
    var contenthigh=$("#setting_sys_update_ver_box").height();
    var boxheigh=$("#setting_update_ver_content").height();
    if((contenthigh-this.page.operateData.currenheight) > boxheigh)
    {
        this.page.operateData.currenheight+=this.page.operateData.step;
        $("#setting_sys_update_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        var temp=parseInt(341/contenthigh*this.page.operateData.currenheight);
        if(temp>341-$("#setting_sys_ver_srcollbar").height())
        {
            temp=341-$("#setting_sys_ver_srcollbar").height()
        }
        $("#setting_sys_ver_srcollbar").css("top",temp);
    }

}

function SettingUpdateVerUpHandler(){

    var contenthigh=$("#setting_sys_update_ver_box").height();
    var boxheigh=$("#setting_update_ver_content").height();
    if(this.page.operateData.currenheight>0 )
    {
        if(this.page.operateData.currenheight>this.page.operateData.step)
        {
            this.page.operateData.currenheight-=this.page.operateData.step;
        }
        else
        {
            this.page.operateData.currenheight=0;
        }
        $("#setting_sys_update_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        var temp=parseInt(341/contenthigh*this.page.operateData.currenheight);
        $("#setting_sys_ver_srcollbar").css("top",temp);
    }

}
function VerpageOpenHandler()
{
    var contenthigh=$("#setting_sys_update_ver_box").height();
    var boxheigh=$("#setting_update_ver_content").height();
    if(contenthigh>boxheigh)
    {
        var temp=parseInt(341/contenthigh*boxheigh);
        $("#setting_sys_ver_srcollbar").css("height",temp);
        $("#setting_sys_ver_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_ver_srcollbar").css("visibility","hidden");
    }
    this.data.operateData.currenheight=0;
    $("#setting_sys_update_ver_box").css("top","-"+ this.data.operateData.currenheight+"px");

}
