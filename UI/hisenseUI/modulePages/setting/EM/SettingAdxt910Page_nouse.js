/**
 * Created by Administrator on 14-12-2.
 */
/**
 * Created by Administrator on 14-6-18.
 */
function getSettingXT910AdPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_ad_head_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_ad_head_text1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_ad_um_str1",
            "description": "",
            "CaEType": "div"
        },

        {
            "id": "setting_sys_ad_mt_str2",
            "description": "",
            "CaEType": "div",
            enableHtml: true
        },
        {
            "id": "setting_sys_ad_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_ad_btn2"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn1Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_um_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_mt_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn2",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_ad_btn5", "upTo": "setting_sys_ad_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn2Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_pvr_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_pvr_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn5",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_ad_btn6", "upTo": "setting_sys_ad_btn2"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn5Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_sub_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_sub_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn6",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_ad_btn3", "upTo": "setting_sys_ad_btn5"},
            "handler": {
//                "aftDownHandler":"SettingSysadfocus",
//                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn6Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_IL_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_IL_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn3",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_ad_btn8", "upTo": "setting_sys_ad_btn6"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn3Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_source_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_source_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn8",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_ad_btn4", "upTo": "setting_sys_ad_btn3"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn8Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_wiz_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_wiz_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn4",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_ad_btn7", "upTo": "setting_sys_ad_btn8"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn4Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_ind_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_ind_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn7",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "", "upTo": "setting_sys_ad_btn4"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn7Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        }
    ];
    SettingadInit();
    return PageDataSettingSysAd;
}
var PageDataSettingSysAd={
    "setting_sys_ad_head_img1":{Data:"img/head_arrow.png"},
    "setting_sys_ad_head_text1":{Data:"Advanced Settings"},

    "setting_sys_ad_um_str1":{Data:"Use Mode:"},
    "setting_sys_ad_um_str2":{Data:"home mode"},
    "setting_sys_ad_btn1":{Data:"Adjust"},

    "setting_sys_ad_mt_str1":{Data:"Menu Timeout:"},
    "setting_sys_ad_mt_str2":{Data:"10s"},
    "setting_sys_ad_btn2":{Data:"Adjust"},

    "setting_sys_ad_pvr_str1":{Data:"PVR & T.Shift"},
    "setting_sys_ad_pvr_str2":{Data:""},
    "setting_sys_ad_btn5":{Data:"Adjust"},

    "setting_sys_ad_sub_str1":{Data:"Subtitle Mode:"},
    "setting_sys_ad_sub_str2":{Data:"Normal"},
    "setting_sys_ad_btn6":{Data:"Adjust"},

    "setting_sys_ad_IL_str1":{Data:"Input Labels"},
    "setting_sys_ad_IL_str2":{Data:""},
    "setting_sys_ad_btn3":{Data:"Adjust"},
    "setting_sys_ad_source_str1":{Data:"Default LiveTV Source"},
    "setting_sys_ad_source_str2":{Data:""},
    "setting_sys_ad_btn8":{Data:"Adjust"},
    "setting_sys_ad_wiz_str1":{Data:"Setup Wizard"},
    "setting_sys_ad_wiz_str2":{Data:""},
    "setting_sys_ad_btn4":{Data:"Start","disable":"false"},
    "setting_sys_ad_ind_str1":{Data:"Indicator Light Setting"},
    "setting_sys_ad_ind_str2":{Data:""},
    "setting_sys_ad_btn7":{Data:"Adjust"},

   // "setting_sys_ad_powerindicator_str1":{Data:"Power Indicator"},
    //"setting_sys_ad_control2":{Data:{ switchType:true, switchText:''},disable:false},
    "operateData": {
        "curmodeselect":0,
        "curmenutimeout":0,
        "curpowerindicator":0,
//        "setting_sys_ad_control2":{
//            switchType:true,
//            switchTextList:{
//                switchOFF:'',
//                switchOn:''
//            }
//        },
        "modelist":["Home Mode","Store Mode","Premium Mode"],
        "menutimeoutlist":["Off","10s","20s","30s","60s"],
        "helplist":[
            {
                "title":"Menu Timeout ",
                "content":"Set the amount of time that you'd like for the menu to display."
            },
            {
                "title":"Use Mode",
                "content":"Set the TV to use in Home or Store Mode."
            },
            {
                "title":"Input Labels",
                "content":"Edit the input labels."
            }
            ,
            {
                "title":"Default LiveTV Source",
                "content":"Default LiveTV Source"
            },
            {
                "title":"Setup Wizard",
                "content":"Use the Setup Wizard for instructions to help you set up your TV."
            },
            {
                "title":"Power Indicator",
                "content":"Set the Power Indicator light to stay On or Off when watching TV."
            }
            ,
            {
                "title":"PVR",
                "content":" "
            }
            ,
            {
                "title":"",
                "content":" "
            }
        ],

       "subtitlelist":["Off","On","Hearing injury"],
        "cursubmode":0,
	    "inputlist":[
            {
                "name":"TV",
                "uid":0

            },
            {
                "name":"Hdmi1",
                "uid":1
            },
            {
                "name":"Hdmi2",
                "uid":2
            },
            {
                "name":"Hdmi3",
                "uid":3
            },
            {
                "name":"Hdmi4",
                "uid":4
            }
            ,
            {
                "name":"AV",
                "uid":5
            }],
        "appstatus":0
    },
    "langData":{
        "Off":[],
        "On":[],
        "Start": [],
        "PVR & T.Shift":[],
        "Subtitle Mode:":[],
        "Default Source For LiveTV":[],
        "Default LiveTV Source":[],
        "Indicator Light Setting":[],
        "Store Mode":[],
        "10s":[],
        "20s":[],
        "30s":[],
        "60s":[],
        "Adjust":["Adjust","Einstellen","Regolare","Ajustar","Ajuste","Ajuster","Justere","Justera","Juster","Säätö"],
        "Menu Timeout:":["Menu Timeout:","Menü-Timeout:","Timeout di menu:","Timeout do Menu:","Límite de tiempo de menú:","Temporisation Menu:","Tidsavbrudd for meny:","Timeout för menyn:","Menu Timeout:","Valikon viive:","菜单时间:"],
        "Use Mode:":["Use Mode:","Benutzermodus:","Modalità Utente:","Modo de Utilizador:","Modo de usuario:","Mode Utilisateur:","Brukermodus:","Användarläge:","Brugertilstand:","Käyttäjä-tila:","用户模式:"],
        "Premium Mode":["Premium Mode","Premium-Modus","Modalità Premium","Modo Premium","Modo premium","Mode Premium","Premiummodus","Premiumläge","Premium-tilstand","Ensisijainen tila","优化模式"],
        "Advanced Settings":["Advanced Settings","Erweiterte Einstellungen","Impostazioni avanzate","Definições Avançadas","Configuración avanzada","Réglages Avancés","Avanserte innstillinger","Avancerade inställningar","Avancerede indstillinger","Lisäasetukset"],
        "Menu Timeout ": ["Menu Timeout ","Délai de temporisation du menu ","Pausa del menú "],
        "Set the amount of time that you'd like for the menu to display.": ["Set the amount of time that you'd like for the menu to display.","Réglez la quantité de temps prise par le menu pour s’afficher.","Configurar la cantidad de tiempo que desea que se vea el menú."],
        "Power Indicator": ["Power Indicator","Témoin d'alimentation","Indicador de alimentación"],
        "Set the Power Indicator light to stay On or Off when watching TV.": ["Set the Power Indicator light to stay On or Off when watching TV.","Sélectionnez si la lumière du témoin d'alimentation reste active ou non lorsque vous regardez la télévision.","Configurar la luz indicadora de encendido para que permanezca activada o desactivada cuando vea la televisión."],
        "Input Labels": ["Input Labels","Étiquettes d'entrée","Etiquetas de entrada"],
        "Edit the input labels.": ["Edit the input labels.","Modifiez les étiquettes d'entrée.","Editar las etiquetas de entrada."],
        "Rename": ["Rename","Renommer","Renombrar"],
        "Please enter a valid display name upto 18 characters.": ["Please enter a valid display name upto 18 characters.","Veuillez entrer un nom d'affichage valide jusqu'à 18 caractères.","Ingrese un nombre válido de hasta 18 caracteres."],
        "Setup Wizard": ["Setup Wizard","Assistant de configuration","Asistente de configuración"],
        "Use the Setup Wizard for instructions to help you set up your TV.": ["Use the Setup Wizard for instructions to help you set up your TV.","Utilisez l'assistant de configuration pour obtenir des instructions d’aide pour le réglage de votre téléviseur.","Utilizar el asistente de configuración para obtener instrucciones que le ayuden a configurar su TV."],
        "The Setup Wizard is about to begin. Are you sure you want to continue?": ["The Setup Wizard is about to begin. Are you sure you want to continue?","L'assistant de configuration est sur le point de démarrer. Êtes-vous sûr de vouloir continuer?","El asistente de instalación está a punto de comenzar. ¿Está seguro de que desea continuar?"],
        "Use Mode": ["Use Mode","Utiliser Mode","Modo de uso"],
        "Home Mode": ["Home Mode","Mode maison","Modo doméstico"],
        "Recommended mode for the Home use and low power consumption": ["Recommended mode for the Home use and low power consumption","Mode recommandé pour la maison et pour une faible consommation d'énergie","Modo recomendado para el uso en el hogar y de bajo consumo de energía"],
        "Store Mode": ["Store Mode","Mode magasin","Modo de almacenamiento"],
        "Optimizes the picture for store environments": ["Optimizes the picture for store environments","Optimise l'image pour les environnements commerciaux","Optimiza la imagen para entornos de almacenamiento"],
        "Set the TV to use in Home or Store Mode.": ["Set the TV to use in Home or Store Mode.","Configurez votre téléviseur pour une utilisation à la maison ou dans un magasin.","Configurar el televisor para utilizar en el modo doméstico o de almacenamiento."]

    },
    rewrite:function(data){
//        var _this = this,
//            opeData = data.operateData;
//        $.each(data,function(key,val){
//
//            if(!key) return true;
//
//            var localData = data[key],
//                localOpeData =opeData[key];
//            switch(key)
//            {
//                case "setting_sys_ad_control2":
//                    //更新data里面的数据
//                    localData.Data.switchType = localOpeData.switchType;
//                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
//                    break;
//            }
//        })
        data.setting_sys_ad_um_str2.Data=data.operateData.modelist[data.operateData.curmodeselect];
        data.setting_sys_ad_mt_str2.Data=data.operateData.menutimeoutlist[data.operateData.curmenutimeout];
        data.setting_sys_ad_sub_str2.Data=data.operateData.subtitlelist[data.operateData.cursubmode]
        if(data.operateData.appstatus==1)
        {
            data.setting_sys_ad_btn4.disable=true;
            $("#setting_sys_ad_wiz_str1").css('color',"rgba(178,184,191,0.3)");
        }
        else
        {
            data.setting_sys_ad_btn4.disable=false;
            $("#setting_sys_ad_wiz_str1").css('color',"#f0f0f0");

        }

    }

};
function SettingSysadfocus()
{
    var index;
    if(this.id=="setting_sys_ad_btn1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_ad_btn2")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_ad_btn3")
    {
        index = 2;
    }

    else if(this.id=="setting_sys_ad_btn4")
    {
        index = 3;
    }
//    else if(this.id=="setting_sys_ad_control2")
//    {
//        index = 4;
//    }
    else if(this.id=="setting_sys_ad_btn5")
    {
        index = 5;
    }
    else if(this.id=="setting_sys_ad_btn6")
    {
        index = 6;
    }

    SettingFirUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[index].title,PageDataSettingSysAd.operateData.helplist[index].content)
}
function SettingXT910AdPageonDestroy()
{
    hiWebOsFrame.settingssysad=null;
}
function SettingSysAdBtn1Enter()
{
    // this.page.close();
    //js get current select value 或者在启动的时候进行初始化。
    hiWebOsFrame.createPage('setting_sys_menu_timeout_page',null, hiWebOsFrame.settingssysad, null,function(timeout){
        hiWebOsFrame.settingssysmenutimeout=timeout;
        PageDataSettingSysTimeout.operateData.parentpage=0;
        PageDataSettingSysTimeout.operateData.curselect= PageDataSettingSysAd.operateData.curmenutimeout;
        hiWebOsFrame.settingssysmenutimeout.rewrite();
        hiWebOsFrame.settingssysmenutimeout.open();
        hiWebOsFrame.settingssysmenutimeout.hiFocus("setting_sys_mt_ul1")
    });
}
function SettingSysAdBtn2Enter()
{

    //this.page.close();
    hiWebOsFrame.createPage('setting_sys_mode_page',null, hiWebOsFrame.settingssysad, null,function(autotime){
        hiWebOsFrame.settingssysmode=autotime;
        // autotime.close();
        PageDataSettingSysMode.operateData.curselect= PageDataSettingSysAd.operateData.curmodeselect;
        hiWebOsFrame.settingssysmode.rewriteDataOnly();
        hiWebOsFrame.settingssysmode.open();
        hiWebOsFrame.settingssysmode.hiFocus()
    });

}
function SettingSysAdBtn3Enter()
{

    //hiWebOsFrame.settingssysad.close();
    hiWebOsFrame.createPage('setting_sys_inputlable_page', null, hiWebOsFrame.settingssysad, null, function (inputtable) {
        hiWebOsFrame.settingssysinputtable = inputtable;
        hiWebOsFrame.createPage('setting_sys_menu_timeout_page', null, hiWebOsFrame.settingssysinputtable , null, function (update) {
            hiWebOsFrame.settingssysmenutimeout = update;
            hiWebOsFrame.settingssysmenutimeout.data.operateData.parentpage = 1;
            hiWebOsFrame.settingssysmenutimeout.rewrite();
            hiWebOsFrame.settingssysmenutimeout.close();
            PageDataSettingSysInputLabel.operateData.curselect= 0;
            hiWebOsFrame.settingssysinputtable.rewrite();
            hiWebOsFrame.settingssysinputtable.open();
            hiWebOsFrame.settingssysinputtable.hiFocus();
        });

    });

}
function SettingSysAdBtn8Enter()
{
    hiWebOsFrame.createPage('setting_sys_menu_timeout_page',null, hiWebOsFrame.settingssysad, null,function(timeout){
        hiWebOsFrame.settingssysmenutimeout=timeout;
        PageDataSettingSysTimeout.operateData.parentpage=2;
        PageDataSettingSysTimeout.operateData.curselect=PageDataSettingSysAd.operateData.curinputselect;
        PageDataSettingSysTimeout.operateData.inputlist=PageDataSettingSysAd.operateData.inputlist;
        hiWebOsFrame.settingssysmenutimeout.rewrite();
        hiWebOsFrame.settingssysmenutimeout.open();
        hiWebOsFrame.settingssysmenutimeout.hiFocus("setting_sys_mt_ul1")
    });
}

function SettingSysAdBtn4Enter()
{
    hiWebOsFrame.createPage('setting_sys_nav_page', null, hiWebOsFrame.settingssysad, null, function (nav) {
        hiWebOsFrame.settingssysstartnav = nav;
        nav.data.operateData.parentpage = 0;
        nav.data.operateData.curdatatype = 0;
        nav.rewriteDataOnly();
        nav.open();
        nav.hiFocus()


    })
}
function SettingSysAdBtn5Enter()
{
    hiWebOsFrame.createPage('setting_sys_pvr_page', null,  hiWebOsFrame.settingssysad, null, function (pvr) {
        hiWebOsFrame.settingssyspvr = pvr;
        hiWebOsFrame.createPage('setting_sys_diskcheck_page', null, hiWebOsFrame.settingssyspvr, null, function (diskcheck) {
            hiWebOsFrame.settingssysdiskcheck = diskcheck;
            hiWebOsFrame.createPage('setting_sys_pvrlist_page', null, hiWebOsFrame.settingssyspvr, null, function (list2) {
                hiWebOsFrame.settingssyspvrlist = list2;
	            hiWebOsFrame.createPage('setting_sys_pvr_check_page', null, hiWebOsFrame.settingssyspvr, null, function(pc) {
		            hiWebOsFrame.pvrCheck = pc;
		            hiWebOsFrame.createPage('setting_sys_pvr_format_page', null, hiWebOsFrame.settingssyspvr, null, function(dc) {
			            hiWebOsFrame.pvrFormat = dc;
                        hiWebOsFrame.settingssyspvr.open();
                        hiWebOsFrame.settingssyspvr.hiFocus();
		            });
	            });
            });
        });

    });
}
function SettingSysAdBtn6Enter()
{
    hiWebOsFrame.createPage('setting_sys_ad_submode_page', null, hiWebOsFrame.settingssysad, null, function (nav) {
        hiWebOsFrame.settingadlist1 = nav;
        PageDataSettingAdList1.operateData.curselectindex=PageDataSettingSysAd.operateData.cursubmode;
        hiWebOsFrame.settingadlist1.rewriteDataOnly();
        nav.open();
        nav.hiFocus()
    })
}
function SettingSysAdEsc()
{
    try
    {
    RefreshHelpInfo(4, RECNT_AD);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    this.page.close();
    if(!!hiWebOsFrame.settingssysmode)
    {
        hiWebOsFrame.settingssysmode.destroy();
    }
    if(!!hiWebOsFrame.settingssysmenutimeout)
    {
        hiWebOsFrame.settingssysmenutimeout.destroy();
    }
    if(!!hiWebOsFrame.settingssysinputtable)
    {
        hiWebOsFrame.settingssysinputtable.destroy();
    }
    if(!!hiWebOsFrame.settingsystvname)
    {
        hiWebOsFrame.settingsystvname.destroy();
    }
    if(!!hiWebOsFrame.settingssysstartnav)
    {
        hiWebOsFrame.settingssysstartnav.destroy();
    }
    if(!!hiWebOsFrame.settingssysadlight)
    {
        hiWebOsFrame.settingssysadlight.destroy();
    }
	if(!!hiWebOsFrame.pvrFormat)
	{
		hiWebOsFrame.pvrFormat.destroy();
	}
	if(!!hiWebOsFrame.pvrCheck)
	{
		hiWebOsFrame.pvrCheck.destroy();
	}
	if(!!hiWebOsFrame.settingssyspvrlist)
	{
		hiWebOsFrame.settingssyspvrlist.destroy();
	}
	if(!! hiWebOsFrame.settingssysdiskcheck)
	{
		hiWebOsFrame.settingssysdiskcheck.destroy();
	}
	if(!!hiWebOsFrame.settingssyspvr)
	{
		hiWebOsFrame.settingssyspvr.destroy();
	}
    if(!!hiWebOsFrame.settingadlist1)
    {
        hiWebOsFrame.settingadlist1.destroy();
    }
    hiWebOsFrame.settingssysad.destroy();
    }catch (e)
    {
        debugE(e.message);
    }

}
function SettingSysAdBtn7Enter()
{
    hiWebOsFrame.createPage('setting_sys_ind_light_page', null, hiWebOsFrame.settingssysad, null, function (list2) {
        hiWebOsFrame.settingssysadlight = list2;
        //  list2.close();
        hiWebOsFrame.settingssysadlight.open();
        hiWebOsFrame.settingssysadlight.hiFocus();

    });
}
function SettingSysAdCtrlEnHandler(operateData,data){
    var page = this.page;
    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    if(this.id="setting_sys_ad_control2")
    {
        SetPowerIndictor( operateData[this.id].switchType);
    }
    page.rewriteDataOnly();
    SetRecentUse("Power Indicator",4,RECNT_AD);

}
timeoutlist=[0,10,20,30,60];
function SettingadInit()
{
    try
    {
    if(checkIsAppOn())
    {
        PageDataSettingSysAd.operateData.appstatus=1;
        debugPrint("check the app is open");
    }
    else
    {
        PageDataSettingSysAd.operateData.appstatus=0;
    }
        var mode=model.system.getUserMode();
        debugPrint("getUserMode"+mode);
        PageDataSettingSysAd.operateData.curmodeselect=mode;
        debugPrint("getUserMode"+PageDataSettingSysAd.operateData.curmodeselect);
        var temp=model.basicSetting.getMenuDelayDisappear();
        debugPrint("getMenuDelayDisappear"+temp);
        var index=_getIndex(timeoutlist,temp);
        if(index>-1)
        {
            // hiWebOsFrame.setAutoCloseTimeLength(timeoutlist[index]);
            PageDataSettingSysAd.operateData.curmenutimeout=index;
        }
        else{
            //hiWebOsFrame.setAutoCloseTimeLength(0);
            model.basicSetting.setMenuDelayDisappear(0);
            PageDataSettingSysAd.operateData.curmenutimeout=0;
            debugE("the menu timeout valu errror"+temp)

        }
//        if(model.system.getPowerIndicator()==0)
//        {
//            PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType=false;
//        }
//        else{
//            PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType=true;
//        }
//        debugPrint("getPowerIndicator"+JSON.stringify(PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType));
    PageDataSettingSysAd.operateData.cursubmode=model.basicSetting.getEnumDvbModeSubtitle();
    debugPrint("get eu subtitle mode"+ PageDataSettingSysAd.operateData.cursubmode);
     var temp2=model.source.getInputName();
    var element={};
    debugPrint("get the input list is "+JSON.stringify(temp2));
    var cout=parseInt( temp2.length/6);
    var sourceuid=model.system.getSystemDefaultInput();///////////////
     debugPrint("get the sourceuid is "+sourceuid);
    PageDataSettingSysAd.operateData.inputlist=[];
    for(var i=0;i<cout;i++)
    {
       element.uid=temp2[i*6];
       if(sourceuid==temp2[i*6])
       {
           PageDataSettingSysAd.operateData.curinputselect=i;
       }
       element.name=temp2[i*6+1];
       element.curname=temp2[i*6+4];
       PageDataSettingSysAd.operateData.inputlist.push(_cloneObj(element));
    }

    }catch (e)
    {
        debugPrint(e)
    };

//    PageDataSettingSysAd.operateData.curcountryid=model.basicSetting.getTvsetLocation();
//    //PageDataSettingSysAd.operateData.setting_sys_ad_control1.switchType=false;
//    if(model.basicSetting.getSmartRemoteControl()==0)
//    {
//        PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType=false;
//    }
//    else{
//        PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType=true;
//    }
//    debugPrint("getSmartRemoteControl"+JSON.stringify(PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType));
//
//    debugPrint("subtitle mode"+PageDataSettingSysAd.operateData.cursubeselect);
//    debugPrint("country id is "+PageDataSettingSysAd.operateData.curcountryid);

}
function SetSmartCtrlon(type)
{
    if(type)
    {
        model.basicSetting.setSmartRemoteControl(1);
        debugPrint("SetSmartCtrlon 1");
    }
    else
    {
        model.basicSetting.setSmartRemoteControl(0);
        debugPrint("SetSmartCtrlon 0");
    }
}
function SetPowerIndictor(type)
{
    if(type)
    {
        model.system.setPowerIndicator(1);
        debugPrint("setPowerIndicator 1");
    }
    else
    {
        model.system.setPowerIndicator(0);
        debugPrint("setPowerIndicator 0");
    }
}


function SetSubtitlelMode(type)
{
    debugPrint("set subtitle mode"+type);
    model.basicSetting.setEnumDvbModeSubtitle(type);
}