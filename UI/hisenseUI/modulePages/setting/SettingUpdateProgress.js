/**
 * Created by Administrator on 14-6-18.
 */
function getSettingUpdateProgressData(opt)
{
    opt.CaE= [
        {
            "id": "setting_update_progressing_text",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_progressing_attention",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_progressing_progress1",
            "description": "用于显示进度条",
            "CaEType": "ProgressBar",
            "classes": {
                "normal": "setting_update_download_cls", "focus": "setting_update_download_cls"
            },
            "CaE": [
                {
                    "id": "setting_update_progressing_bar1",
                    "description": "进度条",
                    "CaEType": "div"

                },
                {
                    "id": "setting_update_progressing_bar1_text",
                    "description": "进度显示文字",
                    "CaEType": "span"

                }

            ],
            "ProgressBarConfig": {
                "PBProcessId": "setting_update_progressing_bar1",//进度变化的id 不能为空
                "ShowTextId": "setting_update_progressing_bar1_text",//在进度条旁边用百分数或者分数显示进度与否，默认为空是不显示，有的时候需要进行提供id
                 ShowTextIsMoved: true,//默认为auto， 只会变化进度条的width'， “manual”为手动模式这种模式需要
                //需要配置另外的三项，是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
                "StepDuration": 20,	// setInterval的时间参数，单位ms 进度条的前进速度
                "MinValue": 0,  //最小值，不设定的话默认为0；
                "MaxValue": 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                "Width": 892,//宽度 progressbar在页面上的宽度px
                TextFormat: "per",//	ShowText的显示形式，“percentage”表示百分数，“fraction”表示分数
                "PBType": "direction"//进度类型，“animation”动画模式 “direction”直接模式，进度条直接显示当前值
///                      "CompletCallback": ""//在到达100%的时候执行的回调函数，无此项的时候不进行回调
            }
        }
//                {
//                    "id":"setting_update_progressing_btn1",
//                    "description":"cancel",
//                    "classes": {
//                        "normal": "setting_update_load_button", "focus": "setting_update_load_button_focus"
//                    },
//                    "CaEType": "div",
//                    "handler":{
//                        'aftEnterHandler':"SettingUpdatelCancel"//点击enter事件后处理
//
//                    }
//
//                }
    ];
    return PageDateSettingUpdateprogress;
}
var PageDateSettingUpdateprogress={
    "setting_update_progressing_text":{Data:"Upgrading"},
    "setting_update_progressing_progress1": {
        Data:{},
        DefaultValue: 0
    },
    "setting_update_progressing_attention":{Data:"Do not turn off the device or cut off the power while upgrading."},
//    "setting_update_load_button":{Data:"Cancel"},
    "operateData": {
        "curtype":0,
        "curprogress":0
    },
    "langData":{
        "Downloading":[],
        "Error, unable to complete the upgrade!":[],
        "Note: Please keep your network connection":[],
        "Upgrading":["Upgrading","Wird aktualisiert","Aggiornamento","A atualizar","Actualizando","Mise à niveau en cours","Oppgraderer","Uppgraderar","Opgraderer","Päivittää","升级中......"],
        "Verifying version":["Verifying version","Version wird verifiziert","Verifica versione","A verificar versão","Verificando la versión","Vérification de la version","Kontrollerer versjon","Kontrollerar versionen","Bekræfter versionen","Tarkistaa versiota","校验版本中....."],
        "Insufficient space for upgrade. Please insert an SD card or USB flash drive and try again":["Insufficient space for upgrade. Please insert an SD card or USB flash drive and try again","Nicht genügend Speicherplatz für die Aktualisierung. Bitte SD-Karte oder USB-Gerät anschließen und erneut versuchen","Spazio insufficiente per aggiornamento. Si prega di inserire una scheda SD o una penna USB e riprovare","Espaço insuficiente para a atualização. Insira o cartão SD ou a pen USB e tente novamente","No hay espacio suficiente para la actualización. Por favor, inserte una unidad flash USB o tarjeta SD y vuelva a intentarlo","Espace insuffisant pour mise à niveau. Veuillez insérer une carte SD ou un dispositif flash USB et réessayer","Ikke nok ledig plass til oppgraderingen. Sett inn et SD-kort eller en USB-stasjon og prøv igjen","Otillräckligt utrymme för uppgradering. Sätt in SD-kort eller USB-minne och försök igen","Utilstrækkelig plads til opgradering. Indsæt et SD-kort eller USB-flashdrev og prøv igen","Ei riittävästi tilaa päivitykselle. Asenna SD-kortti tai USB-muistitikku ja yritä uudelleen","升级所需空间不足，请插入SD卡或U盘后重新尝试。"],
        "Do not turn off the device or cut off the power while upgrading":["Do not turn off the device or cut off the power while upgrading","Während der Aktualisierung weder das Gerät ausschalten noch den Strom trennen","Non spegnere il dispositivo o staccare l'alimentazione durante l'aggiornamento","Não desligue o dispositivo ou corte a alimentação ao atualizar","No apague el dispositivo o corte la energía durante la actualización","Ne pas éteindre le dispositif ou couper l'alimentation durant la mise à niveau","Ikke slå av enheten eller slå av strømmen under oppgradering","Stäng inte av enheten eller strömmen medan uppgradering pågår","Sluk ikke enheden eller afbryde strømmen under opgradering","Älä sammuta laitetta tai katkaise virtaa päivityksen aikana","升级时请勿关机或切断电源"],
        "Successful upgrade, the television is about to restart.":[],
        "Upgraded successfully":["Upgraded successfully","Aktualisierung erfolgreich","Aggiornamento riuscito","Atualização bem sucedida","Actualizado correctamente ","Mise à niveau réussie","Oppgradering vellykket","Den har uppgraderats","Opgraderet med succes","Päivitys onnistui","升级完成"]
    },
    rewrite:function(pageData){
//        pageData.setting_update_load_text.Data=pageData.langData.download[langIdx]
//        pageData.setting_update_load_attention.Data=pageData.langData.note[langIdx];
//        pageData.setting_update_load_btn1.Data=pageData.langData.btn1[langIdx];
        if(pageData.operateData.curtype==0)
        {
            pageData.setting_update_progressing_text.Data="Upgrading";
            pageData.setting_update_progressing_attention.Data="Do not turn off the device or cut off the power while upgrading";
        }
        else if(pageData.operateData.curtype==1)
        {
            pageData.setting_update_progressing_text.Data="Upgraded successfully";
            pageData.setting_update_progressing_attention.Data="Successful upgrade, the television is about to restart.";
        }
        else if(pageData.operateData.curtype==2)
        {
            pageData.setting_update_progressing_attention.Data="Error, unable to complete the upgrade!";
        }
        else if(pageData.operateData.curtype==3)
        {
            pageData.setting_update_progressing_text.Data="Downloading";
            pageData.setting_update_progressing_attention.Data="Note: Please keep your network connection";
        }
        pageData.setting_update_progressing_progress1.DefaultValue=pageData.operateData.curprogress;
    }
};

function SettingUpdateProgressonDestroy()
{
    hiWebOsFrame.settingsupdateprogress=null;
}