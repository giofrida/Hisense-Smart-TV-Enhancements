/**
 * Created by Administrator on 14-8-26.
 */
function getSettinappupdategdialogData(opt)
{
    opt.CaE=[
        {
            "id": "setting_appupdate_dialog1_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_appupdate_dialog1_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_appupdate_dialog1_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button1_normal", "focus": "setting_sys_button1_focus"
            },
//                    "nav": { "rightTo":"setting_sys_nav_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysappupdatedialogHandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysappupdatedialogHandler"//点击enter事件后处理开关转换

            }

        }

    ];
    return PageDataSetttingappupdategdialog
}
var PageDataSetttingappupdategdialog={
    "setting_appupdate_dialog1_text1":{Data:"Application Upgrade"},
    "setting_appupdate_dialog1_content":{Data:""},
    "setting_appupdate_dialog1_btn1":{Data:"OK"},
    "operateData": {
//        "parentpagelist":["version","security","about"],
//        "parentpage":"security",
        "curdatatype":0,
        "datalist":[
            {
                "title":"Application Upgrade",
                "content":"Network error, upgrade package cann't be loaded",
                "button":"OK"
            },
            {
                "title":"Application Upgrade ",
                "content":"Failed to upgrade, Unknown reason",
                "button":"OK"
            },
            {
                "title":"Application Upgrade ",
                "content":"Upgraded successfully, Please restart the TV set",
                "button":"OK"
            }

        ]

    },
    "langData":{
        "Network error, upgrade package cann't be loaded":[],
        "Application Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK","确认"],
        "Failed to upgrade. Unknown reason":["Failed to upgrade. Unknown reason","Aktualisierung fehlgeschlagen. Ursache unbekannt","Aggiornamento non riuscito. Motivo sconosciuto","A atualização falhou. Motivo desconhecido","Error al actualizar. Razón desconocida","Echec de mise à niveau. Raison inconnue","Kunne ikke oppgradere. Ukjent årsak","Det gick inte att uppgradera. Okänd anledning","Det lykkedes ikke at opgradere. ukendt årsag","Päivitys epäonnistui. Syy, tietämätön","升级失败，未知原因。"],
        "Upgraded successfully. Please restart the TV set":["Upgraded successfully. Please restart the TV set","Aktualisierung erfolgreich. Bitte Fernseher neu einschalten","Aggiornamento riuscito. Si prega di riavviare la TV","Atualização bem sucedida. Reinicie a televisão","Actualizado correctamente. Por favor, reinicie el televisor ","Mise à niveau réussie. Merci de redémarrer le poste TV","Oppgradering vellykket. Start TV-apparatet på nytt","Den har uppgraderats. Starta om TV-apparaten","Opgraderet med succes. Genstart venligst tv'et","Päivitys onnistui. Uudelleen käynnistä TV","升级完成，请重启电视。"]

    },
    rewrite:function(pageData){
        debugPrint("dialog1 curdatatype"+pageData.operateData.curdatatype);
        pageData.setting_appupdate_dialog1_content.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].content;
        pageData.setting_appupdate_dialog1_text1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].title;
        pageData.setting_appupdate_dialog1_btn1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].button;
        debugPrint(pageData.setting_appupdate_dialog1_content.Data);
    }

};

function SettingappupdatedialogonDestroy()
{
  hiWebOsFrame.settingsappupdatedialog=null;
}
function SettingSysappupdatedialogHandler()
{
    this.page.close();
    this.page.origin.open();
    this.page.origin.hiFocus();

    if(!!hiWebOsFrame.settingappupdatepro)
    {
        hiWebOsFrame.settingappupdatepro.destroy();
    }
//    if(!!hiWebOsFrame.settingsappupdatedialog)
//    {
//        hiWebOsFrame.settingsappupdatedialog.destroy();
//    }
    if(!!hiWebOsFrame.SettingAppUpdareVer)
    {
        hiWebOsFrame.SettingAppUpdareVer.destroy();
    }
    this.page.destroy();
}