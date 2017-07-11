/**
 * Created by jiaguili on 15-1-20.
 */
function getAppUpdateVersionData(opt)
{
    opt.CaE= [
        {
            "id": "setting_appupdate_title",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_appupdate_name",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_appupdate_name_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_appupdate_ver_cur",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_appupdate_ver_cur_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_appupdate_ver_new",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_appupdate_ver_new_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_appupdate_ver_con_title",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_appupdate_ver_box",
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
            "id":"setting_appupdate_ver_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingAppUpdateVerInfoOk",//点击enter事件后处理
                "aftDownHandler": "SettingUpdateVerDownHandler",
                "aftUpHandler": "SettingUpdateVerUpHandler"

            },
            "nav":{"rightTo":"setting_appupdate_ver_btn2","upTo":"setting_appupdate_ver_btn1","downTo":"setting_appupdate_ver_btn1"}

        },
        {
            "id":"setting_appupdate_ver_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingAppUpdateVerInfoOk",//点击enter事件后处理
                "aftDownHandler": "SettingUpdateVerDownHandler",
                "aftUpHandler": "SettingUpdateVerUpHandler"

            },
            "nav":{"leftTo":"setting_appupdate_ver_btn1","rightTo":"setting_appupdate_ver_btn3","upTo":"setting_appupdate_ver_btn2","downTo":"setting_appupdate_ver_btn2"}

        },
        {
            "id":"setting_appupdate_ver_btn3",
            "description":"cancel",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingAppUpdateVerInfoOk",//点击enter事件后处理
                "aftDownHandler": "SettingUpdateVerDownHandler",
                "aftUpHandler": "SettingUpdateVerUpHandler"

            },
            "nav":{"leftTo":"setting_appupdate_ver_btn2","rightTo":"","upTo":"setting_appupdate_ver_btn3","downTo":"setting_appupdate_ver_btn3"}

        }

    ];
    appupdateinit();
    return PageDateSettingAppUpdate;
}
var PageDateSettingAppUpdate={
    "setting_appupdate_title":{Data:"Application Upgrade"},
    "setting_appupdate_name":{Data:"Application name:"},
    "setting_appupdate_name_value1":{Data:"V1.0"},
    "setting_appupdate_ver_cur":{Data:"Current version:"},
    "setting_appupdate_ver_cur_value1":{Data:"V1.0"},
    "setting_appupdate_ver_new":{Data:"Latest version:"},
    "setting_appupdate_ver_new_value1":{Data:"V1.2"},
    "setting_appupdate_ver_con_title":{Data:"Upgrade content"},
    "setting_sys_appupdate_ver_box":{Data:""},
//    "setting_update_ver_content":{
//        "Data": {
//            "setting_sys_update_ver_box":{Data:"1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>"}
//
//        }},
    "setting_appupdate_ver_btn1":{Data:"Upgrade"},
    "setting_appupdate_ver_btn2":{Data:"Cancel"},
     "setting_appupdate_ver_btn3":{Data:"Never remind"},
    "operateData": {
        "curapp":"launcher",
        "curver":"V1.00.00.00",
        "newver":"V1.00.00.02",
        "currenheight":0,
        "step":42,
        "upgradecontent":""

    },
    "langData":{
        "Application name:":[],
        "Never remind":["Never reminder","",""],
        "Application Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
        "Current version:":["Current version:","Aktuelle Version:","Versione corrente:","Versão atual:","Versión actual:","Version actuelle:","Gjeldende versjon:","Nuvarande version:","Nuværende version:","Nykyinen versio:","当前版本:"],
        "Latest version:":["Latest version:","Aktuellste Version:","Ultima versione:","Versão mais recente:","Última versión:","Version la plus récente:","Nyeste versjon:","Senaste versionen:","Nyeste version:","Uusin versio:","最新版本:"],
        "Upgrade content":["Upgrade content","Inhalt aktualisieren","Aggiorna il contenuto","Atualizar conteúdos","Actualizar contenido","Mise à niveau du contenu","Oppgradere innhold","Uppgradera innehåll","Opgrader indhold","Päivitä sisältö","升级内容"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta","取消"],
        "Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"]

//
//        "New version":["New version","",""],
//        "Current version:":["Current version:","",""],
//        "New version:":["New version:","",""],
//        "Upgrade content":["Upgrade content","",""],
//        "Upgrade":["Upgrade","",""],
//        "Cancel":["Cancel","",""],
//        "Never remander":["Never remander","",""]
    },
    rewrite:function(pageData){
        pageData.setting_appupdate_name_value1.Data=pageData.operateData.curapp;
        pageData.setting_appupdate_ver_cur_value1.Data=pageData.operateData.curver;
        pageData.setting_appupdate_ver_new_value1.Data=pageData.operateData.newver;
        pageData.setting_sys_appupdate_ver_box.Data=pageData.operateData.upgradecontent;

    }
};

function AppUpdateonDestroy()
{
    hiWebOsFrame.SettingAppUpdareVer=null;
}
function SettingAppUpdateVerInfoOk()
{
    if(this.id=="setting_appupdate_ver_btn1")
    {
        if(!tv)
        {
            hiWebOsFrame.createPage('setting_appupdate_progress_page',null, hiWebOsFrame.SettingAppUpdareVer, null,function(page){
                hiWebOsFrame.settingappupdatepro=page;

                hiWebOsFrame.settingappupdatepro.open();
                hiWebOsFrame.settingappupdatepro.hiFocus();
            });
            this.page.close();
            setTimeout(appupdatetest ,2000);
        }
        else
        {
//            //todo
            debugPrint("begin to upgrade ");
            hiWebOsFrame.enablePageKeysRemove(hiWebOsFrame.SettingAppUpdareVer,[VK_ENTER]);
            this.page.close();
            hiWebOsFrame.createPage('setting_appupdate_progress_page',null, hiWebOsFrame.SettingAppUpdareVer.origin, null,function(page){
                hiWebOsFrame.settingappupdatepro=page;
                PageDataSetttingAppUpdatePro.operateData.datatype=0;
                hiWebOsFrame.settingappupdatepro.open();
                hiWebOsFrame.settingappupdatepro.hiFocus();
                hiWebOsFrame.settingappupdatepro.rewriteDataOnly();
                hiWebOsFrame.enablePageKeys(hiWebOsFrame.SettingAppUpdareVer,[VK_ENTER]);
                StartAPPUpgrade();
            });

        }

    }
    else if(this.id=="setting_appupdate_ver_btn2")
    {
        //todo
        model.softupdate.setSource(0);
        this.page.close();
        this.page.origin.open();
        this.page.origin.hiFocus();
        if(!!hiWebOsFrame.settingappupdatepro)
        {
            hiWebOsFrame.settingappupdatepro.destroy();
        }
        if(!!hiWebOsFrame.settingsappupdatedialog)
        {
            hiWebOsFrame.settingsappupdatedialog.destroy();
        }
        if(!!hiWebOsFrame.SettingAppUpdareVer)
        {
            hiWebOsFrame.SettingAppUpdareVer.destroy();
        }

    }
    else if(this.id=="setting_appupdate_ver_btn3")
    {
        model.softupdate.setSource(0);
        model.softupdate.setAutoAnnouncementEnabled(0);
        this.page.close();
        this.page.origin.open();
        this.page.origin.hiFocus();
        if(!!hiWebOsFrame.settingappupdatepro)
        {
            hiWebOsFrame.settingappupdatepro.destroy();
        }
        if(!!hiWebOsFrame.settingsappupdatedialog)
        {
            hiWebOsFrame.settingsappupdatedialog.destroy();
        }
        if(!!hiWebOsFrame.SettingAppUpdareVer)
        {
            hiWebOsFrame.SettingAppUpdareVer.destroy();
        }
    }
}
function appupdatetest()
{

    hiWebOsFrame.createPage('setting_appupdate_dialog_page',null, hiWebOsFrame.SettingAppUpdareVer, null,function(dialog1){
        hiWebOsFrame.settingsappupdatedialog=dialog1;
        PageDataSetttingappupdategdialog.operateData.curdatatype=0;
        hiWebOsFrame.settingsappupdatedialog.open();
        hiWebOsFrame.settingsappupdatedialog.hiFocus();
        hiWebOsFrame.settingsappupdatedialog.rewriteDataOnly();
    });

}

function appupdateinit()
{
    try
    {
        model.softupdate.onChagedHisenseAppState=onChagedHisenseAppState;
        PageDateSettingAppUpdate.operateData.curapp= model.softupdate.getHisenseAppName();
        PageDateSettingAppUpdate.operateData.curver= model.softupdate.getHisenseAppCurVersion();
        var temp=model.softupdate.getHisenseAppNewVersion();
        debugPrint(" the app software version "+temp);
        PageDateSettingAppUpdate.operateData.newver=temp;//
        temp=model.softupdate.getHisenseAppVerDis();
        temp=temp.replace(/&/g, "&amp;");
        temp=temp.replace(/"/g, "&quot;");
        temp=temp.replace(/'/g, "&apos;");
        temp=temp.replace(/</g, "&lt;");
        temp=temp.replace(/>/g, "&gt;");
        temp=temp.replace(/[\r]/g,"");
        PageDateSettingAppUpdate.operateData.upgradecontent=temp.replace(/\n/g, "<br>");
        debugPrint(" the app software description "+JSON.stringify(temp));
    }catch (e)
    {
        debugPrint(e.message);
    }
}
function StartAPPUpgrade()
{
    debugPrint("begin to upgrade ");
    model.softupdate.StartAppUpdate();
}

var onChagedHisenseAppState=function(value)
{
    debugPrint("onChagedHisenseAppState"+value);
    if(value==1)
    {
        hiWebOsFrame.settingappupdatepro.close();
        hiWebOsFrame.createPage('setting_appupdate_dialog_page',null, hiWebOsFrame.SettingAppUpdareVer.origin, null,function(dialog1){
            hiWebOsFrame.settingsappupdatedialog=dialog1;
            PageDataSetttingappupdategdialog.operateData.curdatatype=0;
            hiWebOsFrame.settingsappupdatedialog.open();
            hiWebOsFrame.settingsappupdatedialog.hiFocus();
            hiWebOsFrame.settingsappupdatedialog.rewriteDataOnly();
        })
    }else if(value==2)
    {
        debugPrint("downloadfinish!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ");
        hiWebOsFrame.createPage('setting_appupdate_progress_page',null, hiWebOsFrame.SettingAppUpdareVer.origin, null,function(page){
            hiWebOsFrame.settingappupdatepro=page;
            PageDataSetttingAppUpdatePro.operateData.datatype=1;
            hiWebOsFrame.settingappupdatepro.open();
            hiWebOsFrame.settingappupdatepro.hiFocus();
            hiWebOsFrame.settingappupdatepro.rewriteDataOnly()
        })

    }
    else if(value==3)
    { //success
        hiWebOsFrame.settingappupdatepro.close();
        hiWebOsFrame.createPage('setting_appupdate_dialog_page',null, hiWebOsFrame.SettingAppUpdareVer.origin, null,function(dialog1){
            hiWebOsFrame.settingsappupdatedialog=dialog1;
            PageDataSetttingappupdategdialog.operateData.curdatatype=2;
            hiWebOsFrame.settingsappupdatedialog.open();
            hiWebOsFrame.settingsappupdatedialog.hiFocus();
            hiWebOsFrame.settingsappupdatedialog.rewriteDataOnly();
        })
    }
    else if(value==4)
    {  // failed
        hiWebOsFrame.settingappupdatepro.close();
        hiWebOsFrame.createPage('setting_appupdate_dialog_page',null, hiWebOsFrame.SettingAppUpdareVer.origin, null,function(dialog1){
            hiWebOsFrame.settingsappupdatedialog=dialog1;
            PageDataSetttingappupdategdialog.operateData.curdatatype=1;
            hiWebOsFrame.settingsappupdatedialog.open();
            hiWebOsFrame.settingsappupdatedialog.hiFocus();
            hiWebOsFrame.settingsappupdatedialog.rewriteDataOnly();
        })
    }
}

function SettingUpdateVerDownHandler()
{
    var contenthigh=$("#setting_sys_appupdate_ver_box").height();
    var boxheigh=$("#setting_appupdate_ver_content").height();
    if((contenthigh-this.page.operateData.currenheight) > boxheigh)
    {
        this.page.operateData.currenheight+=this.page.operateData.step;
        $("#setting_sys_appupdate_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        var temp=parseInt(281/contenthigh*this.page.operateData.currenheight);
        if(temp>281-$("#setting_sys_appupdate_ver_srcollbar").height())
        {
            temp=281-$("#setting_sys_appupdate_ver_srcollbar").height()
        }
        $("#setting_sys_appupdate_ver_srcollbar").css("top",temp);
    }

}

function SettingUpdateVerUpHandler(){

    var contenthigh=$("#setting_sys_appupdate_ver_box").height();
    var boxheigh=$("#setting_appupdate_ver_content").height();
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
        $("#setting_sys_appupdate_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        var temp=parseInt(281/contenthigh*this.page.operateData.currenheight);
        $("#setting_sys_appupdate_ver_srcollbar").css("top",temp);
    }

}
function AppUpdateOpenHandler()
{
    var contenthigh=$("#setting_sys_appupdate_ver_box").height();
    var boxheigh=$("#setting_appupdate_ver_content").height();
    if(contenthigh>boxheigh)
    {
        var temp=parseInt(281/contenthigh*boxheigh);
        $("#setting_sys_appupdate_ver_srcollbar").css("height",temp);
    }
    else
    {
        $("#setting_sys_appupdate_ver_srcollbar").css("visibility","hidden");
    }
    this.data.operateData.currenheight=0;
    $("#setting_sys_appupdate_ver_box").css("top","-"+ this.data.operateData.currenheight+"px");
}