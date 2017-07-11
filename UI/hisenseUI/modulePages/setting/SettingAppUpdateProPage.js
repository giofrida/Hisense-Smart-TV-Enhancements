/**
 * Created by Administrator on 14-8-26.
 */
function getAppUpdateProData(opt)
{
    opt.CaE=[
        {
            "id": "setting_appupdate_progress_title",
            "classes": {
                "normal": "setting_sys_lang2_title", "focus": "setting_sys_lang2_title"
            },
            "description": "",
            "CaEType": "span",
            "handler": {
               // "aftEscHandler": "SettingDiskcheckEsc"
            }
        },
        {
            "id": "setting_appupdate_progress_img1",
            "description": "",
            "CaEType": "img"
        },
        {
            "id": "setting_appupdate_progress_text",
            "description": "",

            "CaEType": "div"
        }

    ]
    return PageDataSetttingAppUpdatePro;
}
var PageDataSetttingAppUpdatePro={
    "setting_appupdate_progress_title":{Data:"Application Upgrade"},
    "setting_appupdate_progress_img1":{Data:" img/loading.png"},
    "setting_appupdate_progress_text":{Data:" Upgrading"},
    "operateData": {
        "datatype":0,
        "datalist":["Downloading","Upgrading"]
    },
    "langData":{
        "Application Upgrade":["Application Upgrade","",""],
        "Downloading":["Downloading","Wird heruntergeladen","Download ","A transferir","Descargando","Téléchargement en cours","Laster ned","Hämtar","Downloader","Lataa  ","下载中....."],
        "Upgrading":["Upgrading","Wird aktualisiert","Aggiornamento","A atualizar","Actualizando","Mise à niveau en cours","Oppgraderer","Uppgraderar","Opgraderer","Päivittää","升级中......"]


    },
    rewrite:function(pageData){

        pageData.setting_appupdate_progress_text.Data=pageData.operateData.datalist[pageData.operateData.datatype];

    }

};

function SettingAppUpdateProOnDestroy()
{
    debugPrint("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    hiWebOsFrame.settingsappupdatepro=null;
}

function SettingAppUpdateProOnOpen()
{
    hiWebOsFrame.clearTimeFun();

}
function SettingAppUpdateProOnClose()
{
    hiWebOsFrame.restoreTimeFun();
    debugPrint("jjjjjjjjjjjjjjjjjjjjSettingDiskcheckonClose")
}
var PageDataSetttingSysdiskcheck={
    "setting_sys_diskcheck_title":{Data:"Detect HDD"},
    "setting_sys_diskcheck_img1":{Data:"img/loading.png"},
    "setting_sys_diskcheck_text":{Data:"Detecting external HDD"},
    "operateData": {
        "parentpagelist":["pvr","timeshift"],
        "parentpage":"pvr"
    },
    "langData":{
        "Check disk":["Check disk","",""],
        "Detecting external HDD":["Detecting external HDD","Externes HDD erkannt","Rilevamento HDD esterno","A detetar HDD externo","Detección de disco duro externo","Détection HDD externe","Søker etter ekstern harddisk","Hittar extern hårddisk","Finder ekstern HDD","Ulkoinen HDD havaittu","正在检测外置硬盘"]


    },
    rewrite:function(pageData){
//        pageData.setting_sys_diskcheck_title.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].content;
//        pageData.setting_sys_diskcheck_text.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].title;
//       ;

    }

};


