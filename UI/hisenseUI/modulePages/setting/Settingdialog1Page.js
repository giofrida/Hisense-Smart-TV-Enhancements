/**
 * Created by Administrator on 14-6-18.
 */
function getSettingdialog1PageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_dialog1_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_dialog1_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_dialog1_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button1_normal", "focus": "setting_sys_button1_focus"
            },
//                    "nav": { "rightTo":"setting_sys_nav_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysDialog1Handler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysDialog1Handler"//点击enter事件后处理开关转换

            }

        }

    ];
    return PageDataSetttingSysdialog1
}
var PageDataSetttingSysdialog1={
    "setting_sys_dialog1_text1":{Data:"Detect version"},
    "setting_sys_dialog1_content":{Data:""},
    "setting_sys_dialog1_btn1":{Data:"OK"},
    "operateData": {
//        "parentpagelist":["version","security","about"],
//        "parentpage":"security",
        "curdatatype":0,
        "datalist":[
            {
                "title":"Check Firmware Upgrade",
                "content":"No new update package was detected",
                "button":"OK"
            },
            {
                "title":"Check Firmware Upgrade",
                "content":"Network disconnected. Please connect the network",
                "button":"OK"
            },
            {
                "title":"Channel Block",
                "content":"There is no channel information. Please scan channels.",
                "button":"OK"
            },
            {
                "title":"Upgrade version ",
                "content":"Failed to upgrade. Unknown reason",
                "button":"OK"
            },
            {
                "title":"Upgrade version ",
                "content":"Failed to upgrade. Unknown reason",
                "button":"OK"
            },
            {
                "title":"Check OAD Upgrade",
                "content":"No new update package was detected",
                "button":"OK"
            }
        ]

    },
    "langData":{
        "Check OAD Upgrade":[],
        "Channel Block": [],
        "Upgrade":[],
        "Check for update":[],
        "Check Firmware Upgrade":[],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK","确认"],
        "Upgrade version":["Upgrade version","Version aktualisieren","Versione di aggiornamento","Atualizar versão","Versión de actualización","Mettre à niveau la version","Oppgraderingsversjon","Uppgradera version","Opgrader udgave","Päivitä versio","升级版本"],
        "Checking for update":["Checking for update","Nach Aktualisierungen suchen","Controllo per l'aggiornamento","Verificar atualizações","Comprobación de la actualización","Recherche de mise à jour en cours","Ser etter oppdateringer","Söker uppdatering","Kontrol af opdateringen","Tarkista päivitykset","检测版本中...."],
        "No new update package was detected":["No new update package is detected","Es wurde kein neues Aktualisierungspaket gefunden","Non è stato rilevato nessun nuovo pacchetto di aggiornamento","Não foi detetado nenhum pacote de atualização novo","No se detecta ningún nuevo paquete de actualización","Pas de nouvel ensemble de mises à jour détecté ","Ingen nye oppdateringspakker ble funnet","Inget nytt uppdateringspaket har hittats","Der ikke registreres nogen ny opdateringspakke","Ei uutta päivityspakettia havaittu","没有检测到新的升级包"],
        "Failed to upgrade. Unknown reason":["Failed to upgrade. Unknown reason","Aktualisierung fehlgeschlagen. Ursache unbekannt","Aggiornamento non riuscito. Motivo sconosciuto","A atualização falhou. Motivo desconhecido","Error al actualizar. Razón desconocida","Echec de mise à niveau. Raison inconnue","Kunne ikke oppgradere. Ukjent årsak","Det gick inte att uppgradera. Okänd anledning","Det lykkedes ikke at opgradere. ukendt årsag","Päivitys epäonnistui. Syy, tietämätön","升级失败，未知原因。"],
        "Network disconnected. Please connect the network":["Network disconnected. Please connect the network","Netzwerk getrennt. Bitte Netzwerk verbinden","Rete disconnessa. Si prega di collegare la rete","Rede desligada. Ligue a rede","Red desconectada. Por favor, conecte la red","Réseau déconnecté. Veuillez connecter le réseau","Nettverk frakoblet. Koble til et nettverk","Nätverket är inte anslutet. Anslut nätverket","Netværk afbrudt. Tilslut til netværket","Verkkoyhteys katkesi. Yhdistä verkkoon.","网络未连接，请连接网络。"],
        "Lock single Channel":["Lock single Channel","Einen Sender sperren","Blocca ogni singolo canale","Bloquear um único Canal","Bloqueo de canal único","Verrouiller une seule Chaîne","Lås enkel kanal","Lås enskild kanal","Lås enkelt kanal","Lukitse yksittäinen kanava","频道锁定"],
        "There is no channel information. Please scan channels.":[]

      //  "can not connect to the network":["can not connect to the network","",""],
      //  "Detect version":["Detect version","",""],
      //  "Ok":["Ok","",""]


    },
    rewrite:function(pageData){
        debugPrint("dialog1 curdatatype"+pageData.operateData.curdatatype);
        pageData.setting_sys_dialog1_content.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].content;
        pageData.setting_sys_dialog1_text1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].title;
        pageData.setting_sys_dialog1_btn1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].button;
        debugPrint(pageData.setting_sys_dialog1_content.Data);
    }

};

function Settingdialog1PageonDestroy()
{
    if(!!hiWebOsFrame.settingsupdatedialog1)
    {
        hiWebOsFrame.settingsupdatedialog1=null;
    }
    if(!!hiWebOsFrame.settingsyschldialog1)
    {
        hiWebOsFrame.settingsyschldialog1=null;
    }
}
function SettingSysDialog1Handler()
{
    if (PageDataSetttingSysdialog1.operateData.curdatatype==0||
        PageDataSetttingSysdialog1.operateData.curdatatype==5)
    {
        //g_sys_updating=false;
        this.page.close();
        hiWebOsFrame.settingsupdatefir.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        //settingUpdatefirEscHandler();
        settingaboutUpdateback();
    }
    else if (PageDataSetttingSysdialog1.operateData.curdatatype==1)
    {
        this.page.close();
        hiWebOsFrame.settingsupdatefir.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
     //   settingUpdatefirEscHandler();
        settingaboutUpdateback();
    }
    else if (PageDataSetttingSysdialog1.operateData.curdatatype==2)
    {
        this.page.close();
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
    }
    else if (PageDataSetttingSysdialog1.operateData.curdatatype==3)
    {
        this.page.close();
        hiWebOsFrame.settingsupdateprogress.close();
        hiWebOsFrame.settingsupdatefir.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        settingUpdatefirEscHandler();

    }
    else if (PageDataSetttingSysdialog1.operateData.curdatatype==4)
    {
        if(!!hiWebOsFrame.settingsupdatedownload
            &&hiWebOsFrame.settingsupdatedialog1.origin==hiWebOsFrame.settingsupdatedownload)
        {
            debugE("the oad upgrade ")
            if(PageDateSettingUpdateverifying.operateData.manual)
            {
                debugE("the oad upgrade ")
                hiWebOsFrame.settingsupdatedownload.close();
                hiWebOsFrame.settingsupdatedialog1.close();
                settingaboutUpdateback();
                hiWebOsFrame.settingsupdatedownload.destroy();
            }
            else
            {
                try
                {
                    debugE("the auto oad upgrade ")
                    hiWebOsFrame.settingsupdatedownload.close();
                    hiWebOsFrame.settingsupdatedialog1.close();
                    if(!!hiWebOsFrame.settingsupdatefir)
                    {
        hiWebOsFrame.settingsupdatefir.close();
                    }
                    hiWebOsFrame.settingsupdatedownload.origin.open();
                    hiWebOsFrame.settingsupdatedownload.origin.hiFocus();
                    hiWebOsFrame.settingsupdatedownload.destroy();
        if(!!hiWebOsFrame.settingsupdatefir)
        {
            hiWebOsFrame.settingsupdatefir.destroy();
        }
                    if(!!hiWebOsFrame.settingsupdatedialog1)
        {
                        hiWebOsFrame.settingsupdatedialog1.destroy();
        }
                }catch (e)
        {
                    debugPrint(e.message);
        }


        }

        }
        else
        {
            hiWebOsFrame.settingsupdatedialog1.close();
            upgradedialogDestroyCallback( hiWebOsFrame.settingsupdatedialog1.origin);
            hiWebOsFrame.settingsupdatedialog1.destroy();
        }

    }
}