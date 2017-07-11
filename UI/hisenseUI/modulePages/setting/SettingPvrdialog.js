/**
 * Created by Administrator on 14-7-2.
 */
function getSettingpvrdialogPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_pvr_dialog1_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_pvr_dialog1_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_pvr_dialog1_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "rightTo":"setting_sys_pvr_dialog1_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSyspvrokHandler"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_pvr_dialog1_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "leftTo":"setting_sys_pvr_dialog1_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSyspvrEscEnHandler"//点击enter事件后处理开关转换
            }

        }
    ];
    return PageDataSetttingPvrdialog1;

}
var PageDataSetttingPvrdialog1={
    "setting_pvr_dialog1_text1":{Data:"PVR & Time Shift Setting"},
    "setting_sys_pvr_dialog1_content":{Data:"Fail to detect external hard disk"},
    "setting_sys_pvr_dialog1_btn1":{Data:"Retry"},
    "setting_sys_pvr_dialog1_btn2":{Data:"Cancel"},
    "operateData": {


    },
    "langData":{
        "Retry":["Retry","Erneut versuchen","Riprova","Tentar novamente","Volver a intentar ","Réessayer","Prøv igjen","Försök igen","Prøv igen","Yritä uudellen","重试 "],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta","取消"],
       // "Detect hard disk":["Detect hard disk","",""],
        "Fail to detect external storage device":["Fail to detect external storage device","Externes Speichergerät kann nicht erkannt werden ","Rilevamento di dispositivo di archiviazione esterno non riuscito","A deteção de armazenamento externo falhou","Fallo al detectar el dispositivo de almacenamiento externo","Aucun dispositif de stockage externe n'a pu être détecté","Kunne ikke finne ekstern lagringsenhet","Misslyckades att hitta extern lagringsplats","Kunne ikke finde ekstern lagerenhed","Ulkoisen muistilaitteen haku epäonnistui","无法检测到外置存储设备"],
        "Fail to detect external hard disk":["Fail to detect external hard disk","Es wurde keine externe Festplatte gefunden","Rilevamento di hard disk esterno non riuscito!","A deteção de um disco rígido externo falhou","Falló en la detección del disco duro externo","Aucun disque dur externe n'a pu être détecté","Kunne ikke finne ekstern harddisk","Misslyckades att hitta extern hårddisk","Fandt ikke ekstern harddisk","Ukoista kovalevyä ei löydy","无法检测到外置硬盘"],
        "PVR & Time Shift Setting":["PVR & Time Shift Setting","Einstellungen PVR & Time-Shift","Impostazione PVR&Time Shift","Definição PVR e Time Shift","PVR y Time Shift Ajuste","Réglages PVR et Différé","Innstillinger for PVR og tidsinnstilt opptak","PVR och Tidsförskjutningsinställning","PVR & Indstilling af Tidszone-skift","Henkilökohtainen videotallennus & ajansiirtoasetukset","录制和时移设置"]

    },
    rewrite:function(pageData)
    {

    }

};

function SettingpvrdialogonDestroy()
{
    hiWebOsFrame.settingssyspvrdialog=null;
}
function SettingSyspvrokHandler()
{
    this.page.close();
    g_detectcount=0;
    g_volumegflag=0;
    g_detectflag=0;
    g_diskcheckesc=0;
    getvolumelist();
    hiWebOsFrame.settingssysdiskcheck.open();
    hiWebOsFrame.settingssysdiskcheck.hiFocus();

}
function SettingSyspvrEscEnHandler()
{
    this.page.close();
    if(this.page.origin.id!=hiWebOsFrame.settingssyspvr.id)
    {
        if(!!hiWebOsFrame.settingssyspvr)
        {
            hiWebOsFrame.settingssyspvr.destroy();
        }
        if(!!hiWebOsFrame.settingssyspvrlist)
        {
            hiWebOsFrame.settingssyspvrlist.destroy();
        }
        if(!!hiWebOsFrame.settingssyspvrdialog)
        {
            hiWebOsFrame.settingssyspvrdialog.destroy();
        }
        if(!!hiWebOsFrame.settingssysdiskcheck)
        {
            hiWebOsFrame.settingssysdiskcheck.destroy();
        }
        if(!!hiWebOsFrame.settingsysrecordingcheck)
        {
            hiWebOsFrame.settingsysrecordingcheck.destroy();
        }
        if(this.page.origin.id != 'tshiftProgress' && this.page.origin.id != 'recordProgress'){
            this.page.origin.open();
            this.page.origin.hiFocus();
        }

        if(!!this.page.callback)
        {
            if(typeof this.page.callback=="string")
            {
                eval(this.page.callback+'.call(this.page.origin,"fail")');
            }
            else if (typeof this.page.callback=="function")
            {
                this.page.callback.call(this.page.origin,"fail");
            }
        }
    }
    else
    {
        hiWebOsFrame.settingssyspvr.open();
        hiWebOsFrame.settingssyspvr.hiFocus();
    }

}