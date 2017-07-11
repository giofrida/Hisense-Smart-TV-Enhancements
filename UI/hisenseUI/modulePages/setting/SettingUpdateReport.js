/**
 * Created by Administrator on 14-8-7.
 */
function getSettingupdatereportPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_update_error_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_update_error_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_update_error_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button1_normal", "focus": "setting_sys_button1_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateReportENHandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingUpdateReportENHandler"//点击enter事件后处理开关转换

            }

        }

    ];
    return PageDataSetttingUpdateReport
}
var PageDataSetttingUpdateReport={
    "setting_update_error_text1":{Data:"Detect version"},
    "setting_update_error_content":{Data:""},
    "setting_update_error_btn1":{Data:"Ok"},
    "operateData": {
        "curdatatype":0,
        "datalist":[
            {
                "title":"Download",// manual update
                "content":"Software can't be loaded,Please try again",
                "button":"OK"
            },
            {
                "title":"Download",//auto update
                "content":"no software could be loaded",
                "button":"OK"
            },
            {
                "title":"Upgrade",//auto update
                "content":"no enough space for upgrade, please insert external storage devices",
                "button":"OK"
            },
            {
                "title":"Upgrade",//
                "content":"Fail to detect external storage device",
                "button":"OK"
            }
            ,
            {
                "title":"Upgrade",//auto update
                "content":"Insufficient space for upgrade. Please insert an SD card or USB flash drive and try again",
                "button":"OK"
            },
            {
                "title":"Upgrade",
                "content":"Network error, upgrade package cann't be loaded",
                "button":"OK"
            }
        ],
        "parentpage":""

    },
    "langData":{
        "Software can't be loaded,Please try again":[],
        "Software can't be loaded":[],
        "Insufficient space for upgrade. Please insert an SD card or USB flash drive and try again":[],
        "Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK","确认"],
        "Fail to detect external storage device":["Fail to detect external storage device","Aucun dispositif de stockage externe n'a pu être détecté","Fallo al detectar el dispositivo de almacenamiento externo"],
        "Fail to detect external hard disk":["Fail to detect external hard disk","Aucun disque dur externe n'a pu être détecté","Falló en la detección del disco duro externo"],
        "Insufficient external storage space":["Insufficient external storage space","Espace de stockage externe insuffisant","No hay suficiente espacio de almacenamiento externo"],
        "Network error, upgrade package cann't be loaded":[]

    },
    rewrite:function(pageData){
      //  debugPrint("dialog1 curdatatype"+pageData.operateData.curdatatype);
        pageData.setting_update_error_content.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].content;
        pageData.setting_update_error_text1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].title;
        pageData.setting_update_error_btn1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].button;
        debugPrint(pageData.setting_update_error_content.Data);
    }

};

function SettingupdatereportonDestroy()
{
    if(!!hiWebOsFrame.settingsupdatereport)
    {
        hiWebOsFrame.settingsupdatereport=null;
    }
}
function SettingUpdateReportENHandler()
{
    if(PageDataSetttingUpdateReport.operateData.parentpage=="manual")
    //if (PageDataSetttingUpdateReport.operateData.curdatatype==0)
    {
        //g_sys_updating=false;
        this.page.close();
        hiWebOsFrame.settingsupdatefir.close();
        hiWebOsFrame.settingsupdateprogress.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        settingUpdatefirEscHandler();

    }
    else //if (PageDataSetttingUpdateReport.operateData.curdatatype==1)
    {
        this.page.close();
        hiWebOsFrame.settingsupdatefir.close();
        hiWebOsFrame.settingsupdateprogress.close();
        hiWebOsFrame.settingsautoupdate.origin.open();
        hiWebOsFrame.settingsautoupdate.origin.hiFocus();
        if(!!hiWebOsFrame.settingsupdatefir)
        {
            hiWebOsFrame.settingsupdatefir.destroy();
        }
        if(!!hiWebOsFrame.settingsupdateprogress)
        {
            hiWebOsFrame.settingsupdateprogress.destroy();
        }
        if(!!hiWebOsFrame.settingsautoupdate)
        {
            hiWebOsFrame.settingsautoupdate.destroy();
        }
        if(!!hiWebOsFrame.settingsupdatereport)
        {
            hiWebOsFrame.settingsupdatereport.destroy();
        }
        if(!!hiWebOsFrame.settingsupdatedialog1)
        {
            hiWebOsFrame.settingsupdatedialog1.destroy();
        }
//        if(!!hiWebOsFrame.settingupdatediskcheck)
//        {
//            hiWebOsFrame.settingupdatediskcheck.destroy();
//        }

    }
}
