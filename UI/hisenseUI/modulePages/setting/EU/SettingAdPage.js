/**
 * Created by Administrator on 14-6-18.
 */
function getSettingAdPageData(opt)
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
            "id": "setting_sys_ad_btn1_str1",
            "description": "",
            "CaEType": "div"
        },

        {
            "id": "setting_sys_ad_btn1_str2",
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
            "id": "setting_sys_ad_btn2_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn2_str2",
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
            "nav":{"downTo": "setting_sys_ad_btn3", "upTo": "setting_sys_ad_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn2Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_btn3_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn3_str2",
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
            "nav":{"downTo": "setting_sys_ad_control1", "upTo": "setting_sys_ad_btn2"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn3Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },

        {
            "id": "setting_sys_ad_control1_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_ad_control1",
            "description":"开关控件",
            "classes":
            {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_ad_btn3","downTo": "setting_sys_ad_control3"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                'aftEnterHandler':'SettingSysAdCtrlEnHandler',
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"

            }

        },
        {
            "id": "setting_sys_ad_control3_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_ad_control3",
            "description":"开关控件",
            "classes":
            {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "setting_sys_ad_btn4","upTo": "setting_sys_ad_control1"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                'aftEnterHandler':'SettingSysAdCtrlEnHandler',
                "aftEscHandler": "SettingSysAdEsc",
                "befLeftHandler": "SettingSysAdEsc"

            }

        },
        {
            "id": "setting_sys_ad_btn4_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn4_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn4",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_ad_btn5", "upTo": "setting_sys_ad_control3"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn4Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_btn5_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn5_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_ad_btn5",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_ad_control2", "upTo": "setting_sys_ad_btn4"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn5Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
        {
            "id": "setting_sys_ad_control2_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_ad_control2",
            "description":"开关控件",
            "classes":
            {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_ad_btn5","downTo":"setting_sys_ad_btn6"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                'aftEnterHandler':'SettingSysAdCtrlEnHandler',
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"

            }

        },
//
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
            "nav":{"downTo": "setting_sys_ad_control4", "upTo": "setting_sys_ad_control2"},
            "handler": {
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                "aftEnterHandler": "SettingSysAdBtn6Enter",
                "befLeftHandler":"SettingSysAdEsc",
                "aftEscHandler": "SettingSysAdEsc"
            }
        },
	    {
            "id": "setting_sys_ad_hbbtv_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_ad_control4",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_ad_btn6"},
            "CaEType": "FlipSwitch",
            "disable": false,
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysadfocus",
                "aftUpHandler":"SettingSysadfocus",
                'aftEnterHandler':'SettingSysAdCtrlEnHandler',//点击enter事件后处理开关转换
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

    "setting_sys_ad_btn1_str1":{Data:"Menu Timeout:"},
    "setting_sys_ad_btn1_str2":{Data:"10s"},
    "setting_sys_ad_btn1":{Data:"Adjust"},

    "setting_sys_ad_btn2_str1":{Data:"Auto Sleep:"},
    "setting_sys_ad_btn2_str2":{Data:""},
    "setting_sys_ad_btn2":{Data:"Adjust"},

    "setting_sys_ad_btn3_str1":{Data:"PVR & T.Shift"},
    "setting_sys_ad_btn3_str2":{Data:""},
    "setting_sys_ad_btn3":{Data:"Adjust"},

    "setting_sys_ad_btn4_str1":{Data:"Input Labels"},
    "setting_sys_ad_btn4_str2":{Data:""},
    "setting_sys_ad_btn4":{Data:"Adjust"},

    "setting_sys_ad_btn5_str1":{Data:"Setup Wizard"},
    "setting_sys_ad_btn5_str2":{Data:""},
    "setting_sys_ad_btn5":{Data:"Start","disable":"false"},

    "setting_sys_ad_control1_str1":{Data:"Power Indicator"},
    "setting_sys_ad_control1":{Data:{ switchType:true, switchText:''},disable:false},

    "setting_sys_ad_control3_str1":{Data:"Indicator Light Setting"},
    "setting_sys_ad_control3":{Data:{ switchType:true, switchText:''},disable:false},

    "setting_sys_ad_control2_str1":{Data:"Store Mode"},
    "setting_sys_ad_control2":{Data:{ switchType:true, switchText:''},disable:false},
   
    "setting_sys_ad_hbbtv_str1":{Data:"HbbTV"},
    "setting_sys_ad_control4":{Data:{ switchType:true, switchText:''},disable:false},

    "setting_sys_ad_sub_str1":{Data:"Subtitle Mode:"},
    "setting_sys_ad_sub_str2":{Data:"Normal"},
    "setting_sys_ad_btn6":{Data:"Adjust"},
    "operateData": {
        "curmodeselect":0,
        "curmenutimeout":0,
        "curpowerindicator":0,
        "setting_sys_ad_control1":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "setting_sys_ad_control2":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
	  "setting_sys_ad_control3":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "setting_sys_ad_control4":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "modelist":["Home Mode","Store Mode","Premium Mode"],
        "menutimeoutlist":["Off","10s","20s","30s","60s"],
        "helplist":[
            {
                "title":"Menu Timeout ",
                "content":"Set the amount of time that you'd like for the menu to display."
            },
            {
                "title":"Auto Sleep",
                "content":"Set the amount of time that you'd like for TV auto power off without any activity."
            },
            {
                "title":"PVR",
                "content":"Initialize the external USB disk to support PVR and Time-Shift."
            },
            {
                "title":"Power Indicator",
                "content":"Set the power indicator light to stay On or Off when standby mode."
            },
            {
                "title":"Indicator Light Setting",
                "content":"Set the indicator light to stay On or Off when watching TV."
            },
            {
                "title":"Input Labels",
                "content":"Edit the input labels."
            }
            ,
//            {
//                "title":"Default LiveTV Source",
//                "content":"Default LiveTV Source"
//            },
            {
                "title":"Setup Wizard",
                "content":"Use the Setup Wizard for instructions to help you set up your TV."
            },
            {
                "title":"Store mode",
                "content": "Select store mode to effect EPOS and other demo functions."
            },
	        {
                "title":"",
                "content":" "
            },
            {
                "title":"",
                "content":" "
            },
            {
                "title":"Fast Boot",
                "content":"Enable/disable HbbTV function for current channel"

            }

        ],
	    "subtitlelist":["Off","On","Hearing Impaired"],
        "cursubmode":0,
        "autosleeplist":["Off","3H","4H"],
        "autosleepvaluelist":[0,1,2],
        "curautosleep":0,
        "ciflag":true,
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
        "appstatus":0,
        "curArea":"EU",
        "curmachineno":"",
        "ColPowerIndMachinelist":[],
        "EUPowerIndMachinelist":["HE75K700UXWTS3D","HE65M7000UWTSG","HE55M7000UWTSG","HE65K5500UWTS","HE50K5502UWTS","HE55M5600UCWTS","HE55K5502UWTS"],
        "EULightSetMachinelist":["HE65M7000UWTSG","HE55M7000UWTSG","HE50K5502UWTS","HE55M5600UCWTS","HE55K5502UWTS"],
        "EMPowerIndMachinelist":[],
        "powIndflag":0
    },
    "langData":{
        "3H":[],
        "4H":[],
        "Set the amount of time that you'd like for TV auto power off without any activity.": [],
        "Initialize the external USB disk to support PVR and Time-Shift ": [],
        "Select store mode to effect EPOS and other demo functions.":[],
        "Off":[],
        "On":[],
        "Auto Sleep":[],
        "Start": [],
        "PVR & T.Shift":[],
        "Default Source For LiveTV":[],
        "Default LiveTV Source":[],
        "Hearing Impaired":[],
        "Subtitle Mode:":[],
        "Store Mode":[],
        "Indicator Light Setting":[],
        "Initialize the external USB disk to support PVR and Time-Shift.":[],
        "10s":[],
        "20s":[],
        "30s":[],
        "60s":[],
        "Auto Sleep:":[],
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
        var _this = this,
            opeData = data.operateData;
        $.each(data,function(key,val){

            if(!key) return true;

            var localData = data[key],
                localOpeData =opeData[key];
            switch(key)
            {
                case "setting_sys_ad_control2":
                case "setting_sys_ad_control1":
		        case "setting_sys_ad_control3":
		        case "setting_sys_ad_control4":
                    //更新data里面的数据
                    localData.Data.switchType = localOpeData.switchType;
                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                    break;
            }
        })
//        data.setting_sys_ad_btn1_str2.Data=data.operateData.modelist[data.operateData.curmodeselect];
         data.setting_sys_ad_btn1_str2.Data=data.operateData.menutimeoutlist[data.operateData.curmenutimeout];
         data.setting_sys_ad_btn2_str2.Data=data.operateData.autosleeplist[data.operateData.curautosleep]
         data.setting_sys_ad_sub_str2.Data=data.operateData.subtitlelist[data.operateData.cursubmode]
        if(data.operateData.appstatus==1)
        {
            data.setting_sys_ad_btn5.disable=true;
            $("#setting_sys_ad_btn5_str1").css('color',"rgba(178,184,191,0.3)");
        }
        else
        {
            data.setting_sys_ad_btn5.disable=false;
            $("#setting_sys_ad_btn5_str1").css('color',"#f0f0f0");

        }
        if(data.operateData.powIndflag==0)
        {
            $("#setting_sys_ad_powerindicator").css("display","none");
            data.setting_sys_ad_control1.disable=true;
            $("#setting_sys_ad_lightset").css("display","none");
            data.setting_sys_ad_control3.disable=true;
        }
        else if(data.operateData.powIndflag==1)
        {
            $("#setting_sys_ad_powerindicator").css("display","block");
            data.setting_sys_ad_control1.disable=false;
            $("#setting_sys_ad_lightset").css("display","none");
            data.setting_sys_ad_control3.disable=true;
        }
        else if(data.operateData.powIndflag==2)
        {
            $("#setting_sys_ad_powerindicator").css("display","block");
            data.setting_sys_ad_control1.disable=false;
            $("#setting_sys_ad_lightset").css("display","block");
            data.setting_sys_ad_control3.disable=false;

        }
        if(hiWebOsFrame.getCurrentArea()=="COL"
            ||PageDataFirstCls.operateData.curlocation == "Russia_EU"
            ||PageDataFirstCls.operateData.curlocation == "Uzbekistan_EU"
            ||PageDataFirstCls.operateData.curlocation == "Kirghizstan_EU"
            ||PageDataFirstCls.operateData.curlocation == "Tajikistan_EU")
        {
            $("#setting_sys_ad_auto_sleep").css("display","none");
            data.setting_sys_ad_btn2.disable=true;
        }
        else
        {
            $("#setting_sys_ad_auto_sleep").css("display","block");
            data.setting_sys_ad_btn2.disable=false;
        }
        if(data.operateData.ciflag)
        {
            $("#setting_sys_ad_pvr").css("display","none");
            data.setting_sys_ad_btn3.disable=true;
            $("#setting_sys_ad_submode").css("display","block");
            data.setting_sys_ad_btn6.disable=false;
        }
        else
        {
            $("#setting_sys_ad_pvr").css("display","block");
            data.setting_sys_ad_btn3.disable=false;
            $("#setting_sys_ad_submode").css("display","none");
            data.setting_sys_ad_btn6.disable=true;
        }

    }

};
function SettingSysadfocus()
{
    if(PageDataSettingSysAd.operateData.curArea!="EU")
     return;
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
    else if(this.id=="setting_sys_ad_control1")
    {
        index = 3;
    }
    else if(this.id=="setting_sys_ad_control3")
    {
        index = 4;
    }
    else if(this.id=="setting_sys_ad_btn4")
    {
        index = 5;
    }
    else if(this.id=="setting_sys_ad_btn5")
    {
        index = 6;
    }
    else if(this.id=="setting_sys_ad_control2")
    {
        index =7;
    }
     else if(this.id=="setting_sys_ad_control3")
    {
        index = 8;
    }
    else if(this.id=="setting_sys_ad_btn6")
    {
        index = 9;
    }
    else if(this.id=="setting_sys_ad_control4")
    {
        index = 10;
    }
    SettingSysadUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[index].content)
}

function SettingAdPageonOpen()
{
//    if(currentPlatform_config=="5657_EU_MARKET")
//    {
//        $("#setting_sys_ad_fastboot").css("display","none");
//
//    }
//    else
//    {
//        $("#setting_sys_ad_fastboot").css("display","block");
//
//    }
    if(hiWebOsFrame.getCurrentArea()=="COL"
        ||PageDataFirstCls.operateData.curlocation == "Russia_EU"
        ||PageDataFirstCls.operateData.curlocation == "Uzbekistan_EU"
        ||PageDataFirstCls.operateData.curlocation == "Kirghizstan_EU"
        ||PageDataFirstCls.operateData.curlocation == "Tajikistan_EU")
    {
        $("#setting_sys_ad_auto_sleep").css("display","none");
    }
    else
    {
        $("#setting_sys_ad_auto_sleep").css("display","block");
    }
    $("#setting_sys_ad_btn1_str2").css("max-width","700px");
    var width1 = Math.ceil(parseFloat($("#setting_sys_ad_btn1_str1").css("width")));
    var width2 = Math.ceil(parseFloat($("#setting_sys_ad_btn1_str2").css("width")));
    if(width2+width1>620&&width1<620)
    {
        var width2=620-width1;
        $("#setting_sys_ad_btn1_str2").css("max-width", width2);
    }
    else
    {
        $("#setting_sys_ad_btn1_str2").css("max-width","700px");
    }

    if(PageDataSettingSysAd.operateData.ciflag)
    {
        $("#setting_sys_ad_pvr").css("display","none");
        $("#setting_sys_ad_submode").css("display","block");

    }
    else
    {
        $("#setting_sys_ad_pvr").css("display","block");
        $("#setting_sys_ad_submode").css("display","none");

    }
    if(PageDataSettingSysAd.operateData.powIndflag==0)
    {
        $("#setting_sys_ad_powerindicator").css("display","none");
        $("#setting_sys_ad_lightset").css("display","none");
    }
    else if(PageDataSettingSysAd.operateData.powIndflag==1)
    {
        $("#setting_sys_ad_powerindicator").css("display","block");
        $("#setting_sys_ad_lightset").css("display","none");
    }
    else if(PageDataSettingSysAd.operateData.powIndflag==2)
    {
        $("#setting_sys_ad_powerindicator").css("display","block");
        $("#setting_sys_ad_lightset").css("display","block");
    }

}

function SettingSysadUpdateHelpinfo(content)
{
    PageDataSettingSysAd.operateData.helpcontent=content;
//    PageDataSettingSysLang.operateData.helptitle=title;
    try {
//        if (title != "" && !!langPackages[title]) {
//            $("#setting_sys_lang_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
//        }
//        else {
//            $("#setting_sys_lang_helpinfo_title").html(title);
//        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_ad_helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_ad_helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }

}
function SettingAdPageonDestroy()
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

    hiWebOsFrame.createPage('setting_sys_menu_timeout_page',null, hiWebOsFrame.settingssysad, null,function(timeout){
        hiWebOsFrame.settingssysmenutimeout=timeout;
        PageDataSettingSysTimeout.operateData.parentpage=3;
        PageDataSettingSysTimeout.operateData.curselect= PageDataSettingSysAd.operateData.curautosleep;
        hiWebOsFrame.settingssysmenutimeout.rewrite();
        hiWebOsFrame.settingssysmenutimeout.open();
        hiWebOsFrame.settingssysmenutimeout.hiFocus("setting_sys_mt_ul1")
    });

}
function SettingSysAdBtn4Enter()
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
function SettingSysAdBtn7Enter()
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

function SettingSysAdBtn5Enter()
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
function SettingSysAdBtn3Enter()
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
   
    try{
//    RefreshHelpInfo(4, RECNT_AD);
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
    {debugE(e.message)}

}

function SettingSysAdCtrlEnHandler(operateData,data){
    var page = this.page;
    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    if(this.id=="setting_sys_ad_control2")
    {
        page.rewriteDataOnly();
        if(operateData[this.id].switchType)
        {
            SetUserMode(1);
        }

        else
        {
            SetUserMode(0);
        }
        SetRecentUse("Use Mode",4,RECNT_AD);
    }
    else if(this.id=="setting_sys_ad_control1")
    {
        SetPowerIndictor( operateData[this.id].switchType);
        SetRecentUse("Power Indicator",4,RECNT_AD);
        page.rewriteDataOnly();
    }
    else  if(this.id=="setting_sys_ad_control3")
    {
        SetLightSetting( operateData[this.id].switchType);
        SetRecentUse("Indicator Light Setting",4,RECNT_AD);
        page.rewriteDataOnly();
    }
    else if(this.id=="setting_sys_ad_control4"){
        SetHbbtvSwitch( operateData[this.id].switchType);
        SetRecentUse("HbbTV",4,RECNT_AD);
        page.rewriteDataOnly();
    }



}

function SetUserMode(type)
{
    if(type<3&&type>=0)
    {
        model.system.setUserMode(type);
        if(type == 1){ //store mode
            debugPrint("store mode!!!!!!!!!");
            model.video.setEnumPictureMode(1);//vivid   //new 0-> dynamic
            startRetailmodeTimer(true);
            setTimeout(function(){startePos(true);},10);

        }else if(0 == type){    //UserMode
            debugPrint("user mode!!!!!!!!!");
            startRetailmodeTimer(false);
            model.video.setEnumPictureMode(0);//energy saving //new 3->0 standard
        } else {    //PremiumMode
            debugPrint("PremiumMode mode!!!!!!!!!");
            startRetailmodeTimer(false);
            model.video.setEnumPictureMode(2);//energy saving //new 3->0 Natural
        }
        RefreshPicAboutAftSetUserMode();
    }
}
function SetHbbtvSwitch(type)
{
    try
    {
        if(type)
        {
            model.tvservice.setI32Switch(1);
            debugPrint("SetHbbtvSwitch on",DebugLevel.INFO);
        }
        else
        {
            model.tvservice.setI32Switch(0);
            debugPrint("SetHbbtvSwitch off",DebugLevel.INFO);
        }
    }catch (e)
    {
        debugPrint(e.message);
    }

}
timeoutlist=[0,10,20,30,60];
function SettingadInit()
{
   try
   {
     PageDataSettingSysAd.operateData.curArea=hiWebOsFrame.getCurrentArea();
    if(checkIsAppOn())
    {
        PageDataSettingSysAd.operateData.appstatus=1;
        debugPrint("check the app is open");
    }
    else
    {
        if(hiWebOsFrame.settingsFirst.origin.module == "launcher")
        {
            PageDataSettingSysAd.operateData.appstatus=1;
        }
        else
        {
            PageDataSettingSysAd.operateData.appstatus=0;

        }
    }
    PageDataSettingSysAd.operateData.ciflag=FREEVIEWTEST;
    debugPrint("ci flagg is "+PageDataSettingSysAd.operateData.ciflag)
    var mode=model.system.getUserMode();
    debugPrint("getUserMode"+mode);
    PageDataSettingSysAd.operateData.curmodeselect=mode;
   if(PageDataSettingSysAd.operateData.curmodeselect==0)
   {
       PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType=false;

   }
    else
   {
       PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType=true;

   }
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
        hiWebOsFrame.setAutoCloseTimeLength(0);
        model.basicSetting.setMenuDelayDisappear(0);
        PageDataSettingSysAd.operateData.curmenutimeout=0;
        debugE("the menu timeout valu errror"+temp)

    }
    if(model.system.getPowerIndicator()==0)
    {
        PageDataSettingSysAd.operateData.setting_sys_ad_control1.switchType=false;
    }
    else{
        PageDataSettingSysAd.operateData.setting_sys_ad_control1.switchType=true;
    }
    if(model.system.getWorkLight()==0)
    {
       PageDataSettingSysAd.operateData.setting_sys_ad_control3.switchType=false;
    }
    else{
       PageDataSettingSysAd.operateData.setting_sys_ad_control3.switchType=true;
    }
     debugPrint("getPowerIndicator"+JSON.stringify(PageDataSettingSysAd.operateData.setting_sys_ad_control2.switchType));
       var autosleep=model.system.getAutoSleepSwitch();
       debugPrint("auto sleep switch is"+autosleep);
       if(autosleep<0||autosleep>2)
       {
           debugE("the autosleep value error");
           PageDataSettingSysAd.operateData.curautosleep=0;
           model.system.setAutoSleepSwitch(0);
       }
       else{

           PageDataSettingSysAd.operateData.curautosleep=autosleep;

       }
       PageDataSettingSysAd.operateData.cursubmode=model.basicSetting.getEnumDvbModeSubtitle();
       debugPrint("get eu subtitle mode"+ PageDataSettingSysAd.operateData.cursubmode);
       PageDataSettingSysAd.operateData.curmachineno=model.system.getServiceNo();
       debugPrint("get the tv num"+PageDataSettingSysAd.operateData.curmachineno);
       if(hiWebOsFrame.getCurrentArea()=="EU")
       {
           var index=_getIndex( PageDataSettingSysAd.operateData.EUPowerIndMachinelist,PageDataSettingSysAd.operateData.curmachineno.toUpperCase());
           if(index>=0)
           {
               var index2=_getIndex( PageDataSettingSysAd.operateData.EULightSetMachinelist,PageDataSettingSysAd.operateData.curmachineno.toUpperCase());
               if(index2>=0)
               {
                   PageDataSettingSysAd.operateData.powIndflag=2;
               }
               else
               {
                   PageDataSettingSysAd.operateData.powIndflag=1;
               }

           }
           else
           {
               PageDataSettingSysAd.operateData.powIndflag=0;
           }
       }
       else
       {
           var index=_getIndex( PageDataSettingSysAd.operateData.ColPowerIndMachinelist,PageDataSettingSysAd.operateData.curmachineno.toUpperCase());
           if(index>=0)
           {
               PageDataSettingSysAd.operateData.powIndflag=1;
           }
           else
           {
               PageDataSettingSysAd.operateData.powIndflag=0;

           }

       }
       var Hbbtv =model.tvservice.getI32Switch();
       debugPrint("Hbbtv switch is"+Hbbtv)
       if(Hbbtv==1)
       {
           PageDataSettingSysAd.operateData.setting_sys_ad_control4.switchType=true;
       }else
       {
           PageDataSettingSysAd.operateData.setting_sys_ad_control4.switchType=false;
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
function SetLightSetting(type)
{
    if(type)
    {
        model.system.setWorkLight(1);
        debugPrint("setWorkLight 1");
    }
    else
    {
        model.system.setWorkLight(0);
        debugPrint("setWorkLight 0");
    }
}

function SetFastboot(type)
{
    try
    {
    if(type)
    {
        model.system.setFastBoot(1);
        debugPrint("setFastBoot 1");
    }
    else
    {
        model.system.setFastBoot(0);
        debugPrint("setFastBoot 0");
    }
    }catch(e)
    {
        debugE(e.message)
    }
}

function SetSubtitlelMode(type)
{
    debugPrint("set subtitle mode"+type);
    model.basicSetting.setEnumDvbModeSubtitle(type);
}
