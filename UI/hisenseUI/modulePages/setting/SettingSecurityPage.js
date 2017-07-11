/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSecurityPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_sec_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_sec_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        /*{
            "id": "setting_sys_sec_lock_str1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_lock_value",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {

            "id": "setting_sys_sec_ul1",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo": "setting_sys_sec_button1"},

            "classes": {
                "normal": "setting_sys_navibar2_normal", "focus": "setting_sys_navibar2_focus","dataSelected":"setting_sys_navibar2_dataselect"
            },
            "handler": {
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                "aftEnterHandler": "SettingSysSecUl1Enter",
                "befLeftHandler":"SettingSysSecUl1leftHandler",
                "aftEscHandler": "SettingSysSecEsc"
            },
            oriCaE: [

                {
                    "id": "setting_sys_sec_txt1",
                    "description": "名称",
                    "CaEType": "span"
                }

            ],
            UlConfig: {

                "UlDataItem": ["setting_sys_sec_txt1"]
            }

        },*/



        /*{
            "id": "setting_sys_time_daylightsaving_control_text1",
            "description": "time daylightsaving control title",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_time_daylightsaving_control1",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_time_btn1", "downTo":"setting_sys_time_btn3"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                'aftEnterHandler':'SettingSysTimeCtrlEnHandler',//点击enter事件后处理开关转换
                "befLeftHandler":"SettindSysCecEscHandler",
                "aftEscHandler":"SettindSysCecEscHandler"

            }

        },*/

        {
            "id": "setting_sys_sec_control_text1",
            "description": "sec control title",
            "CaEType": "div"

        },
        {
            "id":"setting_sys_sec_control_flip1",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": { "downTo":"setting_sys_sec_button1"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                'aftEnterHandler':'SettingSysSecurityCtrlEnHandler',//点击enter事件后处理开关转换
                "befLeftHandler":"SettingSysSecEsc",
                "aftEscHandler":"SettingSysSecEsc"

            }

        },

        {
            "id": "setting_sys_sec_locktime_str",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_lock_time",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_button1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_sec_control_flip1", "downTo":"setting_sys_sec_button2"},
            "handler": {
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                "aftEnterHandler": "SettingSysSecBtn1Enter",
                "befLeftHandler":"SettingSysSecEsc",
                "aftEscHandler": "SettingSysSecEsc"
            }

        },
        {
            "id": "setting_sys_sec_chlock_str",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_button2",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_sec_button1","downTo":"setting_sys_sec_button3"},
            "handler": {
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                "aftEnterHandler": "SettingSysSecBtn2Enter",
                "befLeftHandler":"SettingSysSecEsc",
                "aftEscHandler": "SettingSysSecEsc"
            }

        },
        {
            "id": "setting_sys_sec_program_str",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_button3",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_sec_button2","downTo":"setting_sys_sec_button4"},
            "handler": {
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                "aftEnterHandler": "SettingSysSecBtn3Enter",
                "befLeftHandler":"SettingSysSecEsc",
                "aftEscHandler": "SettingSysSecEsc"
            }

        },
        {
            "id": "setting_sys_sec_input_str",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_button4",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_sec_button3","downTo":"setting_sys_sec_button6"},
            "handler": {
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                "aftEnterHandler": "SettingSysSecBtn4Enter",
                "befLeftHandler":"SettingSysSecEsc",
                "aftEscHandler": "SettingSysSecEsc"
            }

        },
        /*{
            "id": "setting_sys_sec_chpwd_str",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_button5",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_sec_button4","downTo":"setting_sys_sec_button6"},
            "handler": {
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                "aftEnterHandler": "SettingSysSecBtn5Enter",
                "befLeftHandler":"SettingSysSecEsc",
                "aftEscHandler": "SettingSysSecEsc"
            }

        },*/
        {
            "id": "setting_sys_sec_deactive",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_sec_button6",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_sec_button4"},
            "handler": {
                "aftDownHandler":"SettingSysSecFocus",
                "aftUpHandler":"SettingSysSecFocus",
                "aftEnterHandler": "SettingSysSecBtn6Enter",
                "befLeftHandler":"SettingSysSecEsc",
                "aftEscHandler": "SettingSysSecEsc"
            }

        }


    ];
    SettingSecurityinit();
    return PageDataSettingSysSecurity;
}
var PageDataSettingSysSecurity={

    "setting_sys_sec_img1":{Data:"img/head_arrow.png"},
    "setting_sys_sec_text1":{Data:"Parental Controls"},
    "setting_sys_sec_lock_str1":{Data:"Locks"},
    "setting_sys_sec_lock_value":{Data:""},
    "setting_sys_sec_ul1":{Data: [
        {"setting_sys_sec_txt1": {Data:"Off"}},
        {"setting_sys_sec_txt1": {Data:"On"}}
//        {"setting_sys_sec_txt1": {Data:"Weekly"}}
    ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disable":false

    },
    "setting_sys_sec_control_text1":{Data:"Locks"},
    "setting_sys_sec_control_flip1":{Data:
    {
        switchType:false,
        switchText:''
    },
        "disable": false
    },
    "setting_sys_sec_locktime_str":{Data:"Block Time"},
    "setting_sys_sec_lock_time":{Data:""},
    "setting_sys_sec_button1":{Data:"Adjust","disable":false},
    "setting_sys_sec_chlock_str":{Data:"Channel Block"},
    "setting_sys_sec_button2":{Data:"Adjust","disable":false},
    "setting_sys_sec_program_str":{Data:"Program Block"},
    "setting_sys_sec_button3":{Data:"Adjust","disable":false},
    "setting_sys_sec_input_str":{Data:"Input Block"},
    "setting_sys_sec_button4":{Data:"Adjust","disable":false},
//    "setting_sys_sec_chpwd_str":{Data:"Change PIN"},
//    "setting_sys_sec_button5":{Data:"Adjust","disable":false},
    "setting_sys_sec_deactive":{Data:"Restore Parental Control Defaults"},
    "setting_sys_sec_button6":{Data:"Adjust","disable":false},
    "operateData": {
//        "setting_sys_sec_control_flip1":{
//            switchType:false,
//            switchTextList:{
//                switchOFF:'',
//                switchOn:''
//            }
//        },
        "locklist":["Off","On","Weekly"],
        "curalllock":0,
        "curlockweekly":null,//[1,2,]
        "curlocktime":"00:00-15:30",
        "curchildlocklist":["None","Age 3","Age 4","Age 5","Age 6","Age 7","Age 8","Age 9","Age 10","Age 11","Age 12","Age 13","Age 14","Age 15","Age 16","Age 17","Age 18"],
        "curchildlock":13,
        "curpassword":"1111",
        "curfallbackpwd":"",
        "helplist":[
            {
                "title":"Locks",
                "content":"Turn the Lock system On or Off."
            },
            {
                "title":"Block Time",
                "content":"Block certain channels and programs during certain periods of time."
            },
            {
                "title":"Channel Block",
                "content":"Block programs by channels when you turn On the Parental Controls feature."
            },
            {
                "title":"Program Block",
                "content":"Block certain TV programs by rating."
            },
            {
                "title":"Input Block ",
                "content":"Block content from devices that are connected to certain TV ports."
            },
//            {
//                "title":"Change PIN",
//                "content":"Change your PIN that you use to access Parental Controls."
//            },
            {
                "title":"Restore Parental Control Defaults",
                "content":"Restore Parental Control back to the factory default setting."
            }
        ],
        "australialist":["None","G","PG","M","MA","AV","R","ALL"],
        "curratingselect":0,
        "SAratinglist":["None","Below10","Below12","Below14","Below16","Below18"],
        "EUratinglist":["None","3 years","4 years" ,"5 years","6 years","7 years","8 years","9 years","10 years","11 years","12 years","13 years","14 years","15 years","16 years","17 years","18 years"],
        "Rusratinglist":["6+","12+","16+","18+"]

    },
    "langData":{
        "None":[],
        "Parental Controls":[],
        "Below10":[],
        "Below12":[],
        "Below14":[],
        "Below16":[],
        "Below18":[],
        "Block certain TV programs by rating.":[],
        "Adjust":["Adjust","Einstellen","Regolare","Ajustar","Ajuste","Ajuster","Justere","Justera","Juster","Säätö"],
        "Locks": ["Locks","Verrouillage ","Bloqueos"],
        "Do you want to continue with deactivating the Parental Control setting?": ["Do you want to continue with deactivating the Parental Control setting?","Voulez-vous désactiver le réglage du contrôle parental?","¿Quiere continuar con la desactivación de la configuración de control parental?"],
        "Block Time": ["Block Time","Blocage temporaire","Tiempo de bloqueo"],
        "Channel Block": ["Channel Block","Blocage de chaînes","Bloqueo de canal"],
        "Block programs by channels when you turn On the Parental Controls feature.": ["Block programs by channels when you turn On the Parental Controls feature.","Bloquez les programmes par chaîne lorsque vous activez la fonction de contrôle parental.","Bloquear los programas por canal cuando se enciende la función de control parental."],
        "No channel information. Please scan channels.": ["No channel information. Please scan channels.","Aucune information relatives à la chaîne. Veuillez rechercher les chaînes.","Sin información del canal. Buscar canales."],
        "Program Block": ["Program Block","Blocage de programme","Bloqueo de programa"],
        "Block certain programs when your turn On the Parental Controls feature.": ["Block certain programs when your turn On the Parental Controls feature.","Bloquez certains programmes lorsque vous activez la fonction de contrôle parental.","Bloquear ciertos programas cuando enciende la función de Control Parental."],
        "US TV Ratings": ["US TV Ratings","Classification des programmes télévisés aux États-Unis","Clasificación de TV de EE. UU."],
        "Block certain TV programs by rating.": ["Block certain TV programs by rating.","Bloquez certains programmes télévisés selon leur classification.","Bloquear ciertos programas de televisión por clasificación."],
        "Rating": ["Rating","Classification","Clasificación"],
        "All(A)": ["All(A)","Tout public (A)","Todos(A)"],
        "Suggestive dialog(D)": ["Suggestive dialog(D)","Propos suggestifs (D)","Diálogo insinuante(D)"],
        "Coarse or crude language(L)": ["Coarse or crude language(L)","Langage grossier (L)","Lenguaje grosero o vulgar(L)"],
        "Sexual situations(S)": ["Sexual situations(S)","Situations sexuelles (S)","Situaciones sexuales(S)"],
        "Violence(V)": ["Violence(V)","Violence (V)","Violencia(V)"],
        "Fantasy violence(FV)": ["Fantasy violence(FV)","Violence fantastique (FV)","Violencia de fantasía(FV)"],
        "US Movie Ratings": ["US Movie Ratings","Classification des films aux États-Unis","Clasificación de películas en EE. UU."],
        "Block certain movies by rating.": ["Block certain movies by rating.","Bloquez certains films en fonction de leur classification.","Bloquear ciertas películas por clasificación."],
        "Canadian English Ratings": ["Canadian English Ratings","Classifications pour l’anglais canadien","Clasificación en inglés canadiense"],
        "Block certain programs by Canadian English ratings.": ["Block certain programs by Canadian English ratings.","Bloquez certains programmes en fonction des classifications pour l’anglais canadien.","Bloquear ciertos programas por clasificaciones de inglés canadiense"],
        "Canadian French Ratings": ["Canadian French Ratings","Classifications pour le français du Canada","Clasificación en francés canadiense."],
        "Block certain programs by Canadian French ratings.": ["Block certain programs by Canadian French ratings.","Bloquez certains programmes en fonction des classification pour le français du Canada.","Bloquear ciertos programas por clasificaciones en francés canadiense."],
        "Open V-Chip": ["Open V-Chip","Puce anti-violence activée ","Abrir V-Chip"],
        "Turn this On to automatically block programs based on the US rating.": ["Turn this On to automatically block programs based on the US rating.","Activez cette fonction pour bloquer automatiquement les programmes en fonction de la classification des États-Unis.","Encender para bloquear automáticamente los programas en función de la clasificación de los EE. UU."],
        "The current channel does not have Open V-chip data.": ["The current channel does not have Open V-chip data.","La chaîne actuelle ne dispose pas de données Open V-chip.","El canal actual no tiene datos abiertos de V-Chip."],
        "Block Unrated": ["Block Unrated","Blocage de films non-classifiés","Bloqueo de no clasificados"],
        "Block or unblock unrated movies.": ["Block or unblock unrated movies.","Bloquez ou débloquez les films non classifiés.","Bloquear o desbloquear las películas no clasificadas."],
        "Input Block": ["Input Block","Blocage par entrée","Bloqueo de entrada"],
        "Block content from devices that are connected to certain TV ports.": ["Block content from devices that are connected to certain TV ports.","Bloquez le contenu en provenance de périphériques connectés à certains ports du téléviseur.","Bloquear el contenido de los dispositivos que están conectados a ciertos puertos de televisión."],
        "Change PIN": ["Change PIN","Modifier le code PIN","Cambiar PIN"],
        "Change your PIN that you use to access Parental Controls.": ["Change your PIN that you use to access Parental Controls.","Modifiez le code PIN que vous utilisez pour accéder au contrôle parental.","Cambiar el PIN que utiliza para acceder a los controles parentales."],
        "New PIN": ["New PIN","Nouveau code PIN","Nuevo PIN"],
        "Confirm PIN": ["Confirm PIN","Confirmer le code PIN","Confirmar PIN"],
        "The new PIN number is not correct. You are still using your original PIN.": ["The new PIN number is not correct. You are still using your original PIN.","Le nouveau code PIN est incorrect. Vous utilisez toujours votre ancien code PIN.","El nuevo número de PIN no es correcto. Todavía está utilizando su PIN inicial."],
        "Restore Parental Control Defaults": ["Restore Parental Control Defaults","Restaurer les paramètres de contrôle parental par défaut","Restaurar los valores predeterminados de control parental"],
        "The Parental Control will revert back to the factory default settings. Do you want to continue?": ["The Parental Control will revert back to the factory default settings. Do you want to continue?","Le contrôle parental reviendra aux paramètres d'usine par défaut. Voulez-vous continuer?","El control parental volverá a la configuración predeterminada de fábrica. ¿Desea continuar?"],
        "On": ["On","Activé","Encendido"],
        "Off": ["Off","Désactivé","Apagado"]
    },
    rewrite:function(pageData){
        //todo
        var i;
        //pageData.setting_sys_sec_lock_value.Data=pageData.operateData.locklist[pageData.operateData.curalllock];
//        pageData.setting_sys_sec_ul1.DataSelectedIndex=pageData.operateData.curalllock;
//        pageData.setting_sys_sec_ul1.SelectedIndex=pageData.operateData.curalllock;
        if(pageData.operateData.curalllock==0)
        {
            //pageData.setting_sys_sec_lock_time.Data="";
            pageData.setting_sys_sec_control_flip1.Data.switchType=false;
            pageData.setting_sys_sec_button1.disable=true;
            pageData.setting_sys_sec_button2.disable=true;
            pageData.setting_sys_sec_button3.disable=true;
            pageData.setting_sys_sec_button4.disable=true;
//            pageData.setting_sys_sec_button5.disable=true;
//            pageData.setting_sys_sec_button6.disable=true;
            $("#setting_sys_sec_locktime_str").css("color","rgba(178,184,191,0.3)");
            // $("#setting_sys_sec_lock_time").css("color","#85888d")
            $("#setting_sys_sec_chlock_str").css("color","rgba(178,184,191,0.3)");
            $("#setting_sys_sec_program_str").css("color","rgba(178,184,191,0.3)");
            $("#setting_sys_sec_input_str").css("color","rgba(178,184,191,0.3)");
//            $("#setting_sys_sec_chpwd_str").css("color","#85888d");
//            $("#setting_sys_sec_deactive").css("color","#85888d");
        }
        else{
            //pageData.setting_sys_sec_lock_time.Data=pageData.operateData.curlocktime;
            pageData.setting_sys_sec_control_flip1.Data.switchType=true;
            pageData.setting_sys_sec_button1.disable=false;
            pageData.setting_sys_sec_button2.disable=false;
            pageData.setting_sys_sec_button3.disable=false;
            pageData.setting_sys_sec_button4.disable=false;
//            pageData.setting_sys_sec_button5.disable=false;
            pageData.setting_sys_sec_button6.disable=false;
            $("#setting_sys_sec_locktime_str").css("color","#f0f0f0");
            $("#setting_sys_sec_chlock_str").css("color","#f0f0f0");
            $("#setting_sys_sec_program_str").css("color","#f0f0f0");
            $("#setting_sys_sec_input_str").css("color","#f0f0f0");
//            $("#setting_sys_sec_chpwd_str").css("color","#f0f0f0");
//            $("#setting_sys_sec_deactive").css("color","#f0f0f0");

            // $("#setting_sys_sec_lock_time").css("color","#b2b8bf")
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_sec_img1.Data="img/head_arrow.png";
            $(".setting_sys_switch_name").css("float","left");
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')

        //    $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");

            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_lang1__cls").css("left","510px");

        }
        else {
            pageData.setting_sys_sec_img1.Data="img/head_arrow_right.png";
            $(".setting_sys_switch_name").css("float","right");
            $(".setting_page_line").css("float","right");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
          //  $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
            $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");

            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left");
            $(".setting_sys_lang1__cls").css("left","358px");


        }



    }
};

function SettingSysSecFocus()
{
    var index;
    if(this.id=="setting_sys_sec_control_flip1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_sec_button1")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_sec_button2")
    {
        index = 2;
    }
    else if(this.id=="setting_sys_sec_button3")
    {
        index = 3;
    }
    else if(this.id=="setting_sys_sec_button4")
    {
        index = 4;
    }
//    else if(this.id=="setting_sys_sec_button5")
//    {
//        index = 5;
//    }
    else if(this.id=="setting_sys_sec_button6")
    {
//        index = 6;
        index = 5;
    }

    SettingSysSecHelpinfo(PageDataSettingSysSecurity.operateData.helplist[index].content)

}
function SettingSysSecHelpinfo(content)
{
    PageDataSettingSysSecurity.operateData.helpcontent=content;
    try {
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_sec_helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_sec_helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }

}
function SettingSysSecUl1leftHandler()
{
    if(this.SelectedIndex==0)
    {
        SettingSysSecEsc()
    }
}
function SettingSecurityPageonDestroy()
{
    hiWebOsFrame.settingssyssecurity=null;
}
function SettingSysSecEsc()
{
   // RefreshHelpInfo(4, 3);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.settingssyssecurity.close();
    if( !!hiWebOsFrame.settingssysstartnav)
    {
        hiWebOsFrame.settingssysstartnav.destroy();
    }
    if( !!hiWebOsFrame.settingssyssecurity)
    {
        hiWebOsFrame.settingssyssecurity.destroy();
    }
    if( !!hiWebOsFrame.settingssyschl)
    {
        hiWebOsFrame.settingssyschl.destroy();
    }
    if( !!hiWebOsFrame.settingsyschgpwd2)
    {
        hiWebOsFrame.settingsyschgpwd2.destroy();
    }
    if( !!hiWebOsFrame.settingsysinput1)
    {
        hiWebOsFrame.settingsysinput1.destroy();
    }
    if( !!hiWebOsFrame.settingssyslocktime2)
    {
        hiWebOsFrame.settingssyslocktime2.destroy();
    }
    if( !!hiWebOsFrame.settingsyschldialog1)
    {
        hiWebOsFrame.settingsyschldialog1.destroy();
    }
    if( !!hiWebOsFrame.settingssysinputblock)
    {
        hiWebOsFrame.settingssysinputblock.destroy();
    }
    if( !!hiWebOsFrame.settingssysweekly)
    {
        hiWebOsFrame.settingssysweekly.destroy();
    }
    if( !!hiWebOsFrame.settingsysblocktime)
    {
        hiWebOsFrame.settingsysblocktime.destroy();
    }
    if( !!hiWebOsFrame.settingssysproglock)
    {
        hiWebOsFrame.settingssysproglock.destroy();
    }
    if( !!hiWebOsFrame.settingssysinputtime)
    {
        hiWebOsFrame.settingssysinputtime.destroy();
    }
    if( !!hiWebOsFrame.settingssysratinglist1)
    {
        hiWebOsFrame.settingssysratinglist1.destroy();
    }
    if( !!hiWebOsFrame.settingssysusrating)
    {
        hiWebOsFrame.settingssysusrating.destroy();
    }
    //  hiWebOsFrame.settingssyssecurity.destroy();
    //  hiWebOsFrame.settingssysagelock.destroy();
    // hiWebOsFrame.settingssyslist1.destroy();
    //  hiWebOsFrame.settingssyschl.destroy();
    // hiWebOsFrame.settingsyschgpwd.destroy();
    // hiWebOsFrame.settingsysinput1.destroy();
    //   hiWebOsFrame.settingssyslocktime.destroy();
//  PageDataSettingSysSecurity.operateData


}

function SettingSysSecurityCtrlEnHandler(operateData, data)
{
//    var page = this.page;
//    if(operateData[this.id] != undefined)
//        operateData[this.id].switchType = !this.SwitchType;

    if (  this.page.operateData.curalllock==0)
    {
        setlockall(1);
        this.page.operateData.curalllock=1;
    }
    else
    {
        setlockall(0);
        this.page.operateData.curalllock=0;
    }
//    PageDataSettingSysSecurity.setting_sys_sec_control_flip1.Data.switchType = operateData[this.id].switchType;
    this.page.rewriteDataOnly();
    this.page.hiFocus();
    SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);
}

function SettingSysSecBtn1Enter()
{
    //this.page.close();
    hiWebOsFrame.createPage('setting_sys_blocktime_page',null,  hiWebOsFrame.settingssyssecurity, null,function(locktime){
        hiWebOsFrame.settingsysblocktime=locktime;
        PageDataSettingSysBlocktime.operateData.curalllock=PageDataSettingSysSecurity.operateData.curalllock;
        SettingFirUpdateHelpinfo(PageDataSettingSysBlocktime.operateData.helplist[0].title,PageDataSettingSysBlocktime.operateData.helplist[0].content)

        hiWebOsFrame.settingsysblocktime.rewriteDataOnly();
        hiWebOsFrame.settingsysblocktime.open();
        hiWebOsFrame.settingsysblocktime.hiFocus("setting_sys_block_time_btn1");

    });
//
//    hiWebOsFrame.createPage('setting_sys_locktime_page',null,  hiWebOsFrame.settingssyssecurity, null,function(locktime){
//        hiWebOsFrame.settingssyslocktime=locktime;
//        locktime.open();
//        locktime.hiFocus("setting_sys_input1");
//
//    });

}
function SettingSysSecBtn2Enter()
{
    //  this.page.close();
    hiWebOsFrame.startLoading();
    hiWebOsFrame.createPage('setting_sys_channel_page',null,  hiWebOsFrame.settingssyssecurity, null,function(chl){
        hiWebOsFrame.settingssyschl=chl;
        hiWebOsFrame.createPage('setting_sys_dialog1_page',null, hiWebOsFrame.settingssyschl, null,function(dialog1){
            hiWebOsFrame.settingsyschldialog1=dialog1;
            dialog1.close();
             if(PageDataSettingSysChannel.operateData.curchllist.length>0)
            {
                hiWebOsFrame.endLoading();
                hiWebOsFrame.settingssyschl.open();
                hiWebOsFrame.settingssyschl.hiFocus();
            }
            else
            {
                PageDataSetttingSysdialog1.operateData.curdatatype=2;
                hiWebOsFrame.endLoading();
                hiWebOsFrame.settingsyschldialog1.open();
                hiWebOsFrame.settingsyschldialog1.hiFocus();
                hiWebOsFrame.settingsyschldialog1.rewriteDataOnly();
            }

        });
    });
//    hiWebOsFrame.settingssyschl.rewrite();
//    hiWebOsFrame.settingssyschl.open();
//    hiWebOsFrame.settingssyschl.hiFocus();
}
function SettingSysSecBtn3Enter()
{
//    hiWebOsFrame.createPage('setting_sys_proglock_page',null,  hiWebOsFrame.settingssyssecurity, null,function(agelock){
//        hiWebOsFrame.settingssysproglock=agelock;
//        SettingFirUpdateHelpinfo(PageDataSettingsysProglock.operateData.helplist[0].title,PageDataSettingsysProglock.operateData.helplist[0].content)
//        agelock.open();
//        agelock.hiFocus("setting_sys_proglock_control1");
//
//    });
    hiWebOsFrame.createPage('setting_sys_tvrating_list1_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
        hiWebOsFrame.settingssysratinglist1 = page;
        if(hiWebOsFrame.getCurrentArea()=="EM")
        {
            var country=model.basicSetting.getTvsetLocation();
            debugPrint(" get the tv location is "+country);
            if(country=="AUS")
            {
                PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingSysSecurity.operateData.australialist;

            }
            //俄罗斯、乌兹别克斯坦、吉尔吉斯斯坦、土库曼斯坦、阿塞拜疆、格鲁吉亚、亚美尼亚
//            else if(country=="RUS"
//                ||country=="UZB"
//                ||country=="KGZ"
//                ||country=="TKM"
//                ||country=="AZE"
//                ||country=="GEO"
//                ||country=="ARM"
//                )
//            {
//                PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingSysSecurity.operateData.Rusratinglist;
//            }
            else
            {
                PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingSysSecurity.operateData.EUratinglist;

            }
           // PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingSysSecurity.operateData.australialist;
            PageDataSettingRatinglist1.operateData.curparent=0;
            PageDataSettingRatinglist1.operateData.curselectindex=PageDataSettingSysSecurity.operateData.curratingselect;
        }
        else if(hiWebOsFrame.getCurrentArea()=="SA")
        {
            PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingSysSecurity.operateData.SAratinglist;
            PageDataSettingRatinglist1.operateData.curparent=0;
            PageDataSettingRatinglist1.operateData.curselectindex=PageDataSettingSysSecurity.operateData.curratingselect;
        }
        else if(hiWebOsFrame.getCurrentArea()=="EU"||hiWebOsFrame.getCurrentArea()=="COL")
        {
            PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingSysSecurity.operateData.EUratinglist;
            PageDataSettingRatinglist1.operateData.curparent=0;
            PageDataSettingRatinglist1.operateData.curselectindex=PageDataSettingSysSecurity.operateData.curratingselect;
        }
        hiWebOsFrame.settingssysratinglist1.rewrite();
        hiWebOsFrame.settingssysratinglist1.open();
        hiWebOsFrame.settingssysratinglist1.hiFocus("setting_sys_tvrating_ul1");
    });
}
function SettingSysSecBtn4Enter()
{
    hiWebOsFrame.createPage('setting_sys_inputblock_page',null,  hiWebOsFrame.settingssyssecurity, null,function(agelock){
        hiWebOsFrame.settingssysinputblock=agelock;
        hiWebOsFrame.settingssysinputblock.rewrite();
        hiWebOsFrame.settingssysinputblock.open();
        hiWebOsFrame.settingssysinputblock.hiFocus();

    });
//    PageDateSettingSysChgpwd2.operateData.curtype=1;
//    hiWebOsFrame.settingsyschgpwd2.rewriteDataOnly();
//    hiWebOsFrame.settingsyschgpwd2.open();
//    hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input1");
}
//function SettingSysSecBtn5Enter()
//{
//    PageDateSettingSysChgpwd2.operateData.curtype=1;
//    hiWebOsFrame.settingsyschgpwd2.rewriteDataOnly();
//    hiWebOsFrame.settingsyschgpwd2.open();
//    hiWebOsFrame.settingsyschgpwd2.hiFocus("setting_sys_chgpwd2_input1");
//}
function SettingSysSecBtn6Enter()
{
  //  this.page.close();
    hiWebOsFrame.createPage('setting_sys_nav_page',null,  hiWebOsFrame.settingssyssecurity, null,function(nav){
        hiWebOsFrame.settingssysstartnav=nav;
        PageDataSetttingSysNav.operateData.parentpage=1;
        PageDataSetttingSysNav.operateData.curdatatype=1;
        nav.open();
        nav.hiFocus("setting_sys_nav_btn2");
        nav.rewriteDataOnly();

    });
//    PageDataSetttingSysNav.operateData.parentpage="security";
//    PageDataSetttingSysNav.operateData.curdatatype=1;
//    hiWebOsFrame.settingssysstartnav.rewriteDataOnly();
//    hiWebOsFrame.settingssysstartnav.open();
//    hiWebOsFrame.settingssysstartnav.hiFocus();
}

function SettingSysSecUl1Enter()
{
    if(this.SelectedIndex==0||this.SelectedIndex==1||this.SelectedIndex==2)
    {
        //todo 调整 select状态  js set
        this.page.operateData.curalllock=this.SelectedIndex;
        setlockall(this.SelectedIndex);
        this.page.rewriteDataOnly();
        SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);
    }
}
//var agelocklist=[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
function SettingSecurityinit()
{
    try
    {
        if(hiWebOsFrame.getCurrentArea()=="EU")
        {
            $("#setting_sys_sec_helpinfo").css("display","block") ;
        }
        else
        {
            $("#setting_sys_sec_helpinfo").css("display","none") ;

        }
        var temp1= model.parentlock.getSModel();
        debugE("the mode is "+temp1);
        PageDataSettingSysSecurity.operateData.curalllock=temp1;

        //todo to get the  rating select according to the area
        var temp=model.parentlock.getNewAreaProgrammeLock();
        debugPrint("getNewAreaProgrammeLock"+JSON.stringify(temp));
        temp=parseInt(temp);
        debugPrint("temp"+JSON.stringify(temp));
        if((!isNaN(temp)))
        {
            PageDataSettingSysSecurity.operateData.curratingselect=temp;

        }
        else
        {
            PageDataSettingSysSecurity.operateData.curratingselect=0;
            debugE("to fix the rating index");
            model.parentlock.setNewAreaProgrammeLock(0);
        }
        debugPrint(" the new area programm block select is"+PageDataSettingSysSecurity.operateData.curratingselect);
        model.parentlock.Resethandler=parentControlResethandler;
    }catch (e)
    {
        debugE(e.message);
        PageDataSettingSysSecurity.operateData.curratingselect=0;

    }

}
function setlockall(lockalltype)
{
    debugPrint( "set lock tye  "+lockalltype);
    if(lockalltype==0)
    {
        model.parentlock.setSModel(0);
        setMainInputPasswordStatus(true,false);

    }
    else if(lockalltype==1)
    {
        model.parentlock.setSModel(1);
        setMainInputPasswordStatus(false,false);
    }
    else if(lockalltype==2)
    {
      //  model.parentlock.setSModel(1);
      //  model.parentlock.setAll(0);
    }
}

function parentControlResethandler(actionId, convertedResult)
{
    debugPrint("in the parentControlResethandler" +actionId);
    debugPrint(' '+JSON.stringify(convertedResult));
   // SettingSecurityinit();
    setMainInputPasswordStatus(true,false);
    hiWebOsFrame.settingssysstartnav.close();
    hiWebOsFrame.settingssyssecurity.close();
   // RefreshHelpInfo(4, 4);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    if( !!hiWebOsFrame.settingssysstartnav)
    {
        hiWebOsFrame.settingssysstartnav.destroy();
    }
    if( !!hiWebOsFrame.settingssyssecurity)
    {
        hiWebOsFrame.settingssyssecurity.destroy();
    }
    if( !!hiWebOsFrame.settingssyschl)
    {
        hiWebOsFrame.settingssyschl.destroy();
    }
//    if( !!hiWebOsFrame.settingsysinput1)
//    {
//        hiWebOsFrame.settingsysinput1.destroy();
//    }
    if( !!hiWebOsFrame.settingssyslocktime2)
    {
        hiWebOsFrame.settingssyslocktime2.destroy();
    }
    if( !!hiWebOsFrame.settingsyschldialog1)
    {
        hiWebOsFrame.settingsyschldialog1.destroy();
    }
    if( !!hiWebOsFrame.settingssysinputblock)
    {
        hiWebOsFrame.settingssysinputblock.destroy();
    }
    if( !!hiWebOsFrame.settingssysweekly)
    {
        hiWebOsFrame.settingssysweekly.destroy();
    }
    if( !!hiWebOsFrame.settingsysblocktime)
    {
        hiWebOsFrame.settingsysblocktime.destroy();
    }
    if( !!hiWebOsFrame.settingssysproglock)
    {
        hiWebOsFrame.settingssysproglock.destroy();
    }
    if( !!hiWebOsFrame.settingssysinputtime)
    {
        hiWebOsFrame.settingssysinputtime.destroy();
    }
    if( !!hiWebOsFrame.settingssysratinglist1)
    {
        hiWebOsFrame.settingssysratinglist1.destroy();
    }
    if( !!hiWebOsFrame.settingssysusrating)
    {
        hiWebOsFrame.settingssysusrating.destroy();
    }
    hiWebOsFrame.createPage('setting_sys_security_page', null, hiWebOsFrame.settingsFirst, null, function (security) {
        hiWebOsFrame.settingssyssecurity = security;
        SettingSecPincheck();
    });
//    PageDateSettingSysChgpwd2.operateData.curtype=0;
//    hiWebOsFrame.settingsyschgpwd2.open();
//    hiWebOsFrame.settingsyschgpwd2.hiFocus();
//    hiWebOsFrame.settingsyschgpwd2.rewriteDataOnly();
   // SetRecentUse("Security",4,4);

    livetvchlist.clearChannelBlock();
    livetvmain.clearSourceBlock();
}