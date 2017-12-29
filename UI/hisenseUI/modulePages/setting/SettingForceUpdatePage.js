/**
 * Created by Administrator on 14-7-11.
 */
function getForceUpdateVersionData(opt)
{
    opt.CaE= [
        {
            "id": "setting_forceupdate_ver_title",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_forceupdate_ver_cur",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_forceupdate_ver_cur_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_forceupdate_ver_new",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_forceupdate_ver_new_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_forceupdate_ver_con_title",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_forceupdate_ver_box",
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
            "id":"setting_forceupdate_ver_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingForceUpdateVerInfoOk",//点击enter事件后处理
                "aftDownHandler": "SettingForceUpdateVerDownHandler",
                "aftUpHandler": "SettingForceUpdateVerUpHandler"

            },
            "nav":{"rightTo":"setting_forceupdate_ver_btn2","upTo":"setting_forceupdate_ver_btn1","downTo":"setting_forceupdate_ver_btn1"}

        },
        {
            "id":"setting_forceupdate_ver_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingForceUpdateVerInfoOk",//点击enter事件后处理
                "aftDownHandler": "SettingForceUpdateVerDownHandler",
                "aftUpHandler": "SettingForceUpdateVerUpHandler"

            },
            "nav":{"leftTo":"setting_forceupdate_ver_btn1","rightTo":"","upTo":"setting_forceupdate_ver_btn2","downTo":"setting_forceupdate_ver_btn2","rightTo":"setting_autoupdate_ver_btn3"}

        }
//        {
//            "id":"setting_autoupdate_ver_btn3",
//            "description":"cancel",
//            "classes": {
//                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
//            },
//            "CaEType": "div",
//            "handler":{
//                'aftEnterHandler':"SettingUpdateVerInfoOk",//点击enter事件后处理
//                "aftDownHandler": "SettingUpdateVerDownHandler",
//                "aftUpHandler": "SettingUpdateVerUpHandler"
//
//            },
//            "nav":{"leftTo":"setting_autoupdate_ver_btn2","upTo":"setting_autoupdate_ver_btn3","downTo":"setting_autoupdate_ver_btn3"}
//
//
//        }

    ];
  //  SettingForceUpdateinit();
    return PageDateSettingForceUpdate;
}
var PageDateSettingForceUpdate={
    "setting_forceupdate_ver_title":{Data:"Upgrade"},
    "setting_forceupdate_ver_cur":{Data:"Current version:"},
    "setting_forceupdate_ver_cur_value1":{Data:"V1.0"},
    "setting_forceupdate_ver_new":{Data:"Latest version:"},
    "setting_forceupdate_ver_new_value1":{Data:"V1.2"},
    "setting_forceupdate_ver_con_title":{Data:"Upgrade content"},
    "setting_sys_forceupdate_ver_box":{Data:"1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>"},
//    "setting_update_ver_content":{
//        "Data": {
//            "setting_sys_update_ver_box":{Data:"1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>"}
//
//        }},
    "setting_forceupdate_ver_btn1":{Data:"Upgrade"},
    "setting_forceupdate_ver_btn2":{Data:"Cancel"},
  //  "setting_autoupdate_ver_btn3":{Data:"Never remander"},
    "operateData": {
        "curver":"V1.00.00.00",
        "newver":"V1.00.00.02",
        "currenheight":0,
        "type":0,
        "step":42,
        "upgradecontent":""

    },
    "langData":{
        "Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
        "Current version:":["Current version:","Aktuelle Version:","Versione corrente:","Versão atual:","Versión actual:","Version actuelle:","Gjeldende versjon:","Nuvarande version:","Nuværende version:","Nykyinen versio:","当前版本:"],
        "Latest version:":["Latest version:","Aktuellste Version:","Ultima versione:","Versão mais recente:","Última versión:","Version la plus récente:","Nyeste versjon:","Senaste versionen:","Nyeste version:","Uusin versio:","最新版本:"],
        "Upgrade content":["Upgrade content","Inhalt aktualisieren","Aggiorna il contenuto","Atualizar conteúdos","Actualizar contenido","Mise à niveau du contenu","Oppgradere innhold","Uppgradera innehåll","Opgrader indhold","Päivitä sisältö","升级内容"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta","取消"],
        "Never remind":["Never reminder","",""]
    },
    rewrite:function(pageData){
//        pageData.setting_update_ver_title.Data=pageData.langData.title[langIdx];
//        pageData.setting_update_ver_cur.Data=pageData.langData.curver[langIdx];
//        pageData.setting_update_ver_new.Data=pageData.langData.newver[langIdx];
        pageData.setting_forceupdate_ver_cur_value1.Data=pageData.operateData.curver;
        pageData.setting_forceupdate_ver_new_value1.Data=pageData.operateData.newver;
        pageData.setting_sys_forceupdate_ver_box.Data=pageData.operateData.upgradecontent;
//        pageData.setting_update_ver_content.Data.setting_update_ver_con_title.Data=pageData.langData.upgrade[langIdx];
//        pageData.setting_update_ver_btn1.Data=pageData.langData.btn1[langIdx];
//        pageData.setting_update_ver_btn2.Data=pageData.langData.btn2[langIdx];
//        pageData.setting_update_ver_btn3.Data=pageData.langData.btn3[langIdx];

    }
};

function ForceUpdateonDestroy()
{
    hiWebOsFrame.settingsautoupdate=null;
}
function SettingForceUpdateVerInfoOk()
{
    debugPrint("SettingForceUpdateVerInfoOk")
    if(this.id=="setting_forceupdate_ver_btn1")
    {
        if(PageDateSettingForceUpdate.operateData.type==0)
        {
            this.page.close();
                this.page.origin.open();
                this.page.origin.hiFocus();
                this.page.destroy();
                setTimeout(function(){
                    model.softupdate.StartDownload();
                    debugE("start to  ota  download");
                    if(!tv)
                    {
                        onUpdateDownloadProgressChaged(5);
                    }
                },1000)

        }
        else
        {
            hiWebOsFrame.settingsautoupdate.close();
            hiWebOsFrame.createPage('setting_update_fir_page', null, this.page.origin, null, function (fir) {
                hiWebOsFrame.settingsupdatefir = fir;

                PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=1;
                hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                fir.close();
                hiWebOsFrame.createPage('setting_update_verifying_page',null, hiWebOsFrame.settingsupdatefir, null,function(page){
                    hiWebOsFrame.settingsupdatedownload=page;
                    PageDateSettingUpdateverifying.operateData.manual=false;
                    hiWebOsFrame.settingsupdatedownload.origin=hiWebOsFrame.settingsautoupdate.origin;
                    hiWebOsFrame.settingsupdatefir.open();
                    hiWebOsFrame.settingsupdatedownload.open();


                    hiWebOsFrame.settingsupdatedownload.hiFocus();
                    hiWebOsFrame.settingsautoupdate.destroy();
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
                    },1000*15*60);
                });
            });

        }

    }
    else if(this.id=="setting_forceupdate_ver_btn2")
    {
        //todo
       if(PageDateSettingForceUpdate.operateData.type==1)
        {
            model.softupdate.CancelOADUpgrade();
        }
        this.page.close();
        this.page.origin.open();
        this.page.origin.hiFocus();
        if(!!hiWebOsFrame.settingsupdatefir)
        {
            hiWebOsFrame.settingsupdatefir.destroy();
        }
        if(!!hiWebOsFrame.settingsupdateprogress)
        {
            hiWebOsFrame.settingsupdateprogress.destroy();
        }
        if(!!hiWebOsFrame.settingsupdatedialog1)
        {
            hiWebOsFrame.settingsupdatedialog1.destroy();
        }
        if(!!hiWebOsFrame.settingsupdatereport)
        {
            hiWebOsFrame.settingsupdatereport.destroy();
        }
        this.page.destroy();
    }

}




function SettingForceUpdateinit()
{
    try
    {
         if(PageDateSettingForceUpdate.operateData.type==0){
     PageDateSettingForceUpdate.operateData.curver= model.softupdate.getCurrentPacket();
    var temp=model.softupdate.getHisenseCurrentVersion();
    debugPrint(" the internet software version "+temp);
    PageDateSettingForceUpdate.operateData.newver=temp;//
    temp=model.softupdate.getHisenseVersionDescription();
    temp=temp.replace(/&/g, "&amp;");
    temp=temp.replace(/"/g, "&quot;");
    temp=temp.replace(/'/g, "&apos;");
    temp=temp.replace(/</g, "&lt;");
    temp=temp.replace(/>/g, "&gt;");
    temp=temp.replace(/[\r]/g,"");
    PageDateSettingForceUpdate.operateData.upgradecontent=temp.replace(/\n/g, "<br>");

    debugPrint(" the internet software description "+temp);
    }








    else
    {
             PageDateSettingForceUpdate.operateData.curver= model.softupdate.getCurrentPacket();
             var temp=model.softupdate.getOadCurrentVersion();
             debugPrint(" the internet software version "+temp);
             PageDateSettingForceUpdate.operateData.newver=temp;//
             temp=model.softupdate.getOadVersionDescription();
             temp=temp.replace(/&/g, "&amp;");
             temp=temp.replace(/"/g, "&quot;");
             temp=temp.replace(/'/g, "&apos;");
             temp=temp.replace(/</g, "&lt;");
             temp=temp.replace(/>/g, "&gt;");
             temp=temp.replace(/[\r]/g,"");
             PageDateSettingForceUpdate.operateData.upgradecontent=temp.replace(/\n/g, "<br>");
             debugPrint(" the internet software description "+temp);

}

    }
       catch (e)
    {
        debugE(e.message)

    }

    }




function SettingForceUpdateVerDownHandler()
{
    var contenthigh=$("#setting_sys_forceupdate_ver_box").height();
    var boxheigh=$("#setting_forceupdate_ver_content").height();
    if((contenthigh-this.page.operateData.currenheight) > boxheigh)
    {
        this.page.operateData.currenheight+=this.page.operateData.step;
        $("#setting_sys_forceupdate_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        var temp=parseInt(341/contenthigh*this.page.operateData.currenheight);
        if(temp>341-$("#setting_sys_forceupdate_ver_srcollbar").height())
        {
            temp=341-$("#setting_sys_forceupdate_ver_srcollbar").height()
        }
        $("#setting_sys_forceupdate_ver_srcollbar").css("top",temp);
    }

}

function SettingForceUpdateVerUpHandler(){

    var contenthigh=$("#setting_sys_forceupdate_ver_box").height();
    var boxheigh=$("#setting_forceupdate_ver_content").height();
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
        $("#setting_sys_forceupdate_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        var temp=parseInt(341/contenthigh*this.page.operateData.currenheight);
        $("#setting_sys_forceupdate_ver_srcollbar").css("top",temp);
    }

}
function ForceUpdateOpenHandler()
{
    var contenthigh=$("#setting_sys_forceupdate_ver_box").height();
    var boxheigh=$("#setting_forceupdate_ver_content").height();
    if(contenthigh>boxheigh)
    {
        var temp=parseInt(341/contenthigh*boxheigh);
        $("#setting_sys_forceupdate_ver_srcollbar").css("height",temp);
        $("#setting_sys_forceupdate_ver_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_forceupdate_ver_srcollbar").css("visibility","hidden");
    }
    this.data.operateData.currenheight=0;
    $("#setting_sys_forceupdate_ver_box").css("top","-"+ this.data.operateData.currenheight+"px");

}