/**
 * Created by Administrator on 14-6-18.
 */
function getSettingCecPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_cec_img1",
            "description": "pic",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_cec_text1",
            "description": "cec",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_cec_control_text1",
            "description": "control title",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_cec_control1",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "", "downTo":"setting_sys_cec_control2"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSyscecfocus",
                "aftUpHandler":"SettingSyscecfocus",
                'aftEnterHandler':'SettingSysCecCtrlEnHandler',//点击enter事件后处理开关转换
                "befLeftHandler":"SettindSysCecEscHandler",
                "aftEscHandler":"SettindSysCecEscHandler"

            }

        },
        {
            "id": "setting_sys_cec_auto_poweroff_text1",
            "description": "control title",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_cec_control2",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_cec_control1", "downTo":"setting_sys_cec_control3"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSyscecfocus",
                "aftUpHandler":"SettingSyscecfocus",
                "befLeftHandler":"SettindSysCecEscHandler",
                'aftEnterHandler':'SettingSysCecCtrlEnHandler',//点击enter事件后处理开关转换
                "aftEscHandler":"SettindSysCecEscHandler"
            }


        }
        ,
        {
            "id": "setting_sys_cec_auto_poweron_text1",
            "description": "control title",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_cec_control3",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_cec_control2","downTo":"setting_sys_cec_control4"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSyscecfocus",
                "aftUpHandler":"SettingSyscecfocus",
                "befLeftHandler":"SettindSysCecEscHandler",
                'aftEnterHandler':'SettingSysCecCtrlEnHandler',//点击enter事件后处理开关转换
                "aftEscHandler":"SettindSysCecEscHandler"
            }


        },
        {
            "id": "setting_sys_cec_arc_ctrl_text1",
            "description": "control title",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_cec_control4",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_cec_control3","downTo":"setting_sys_cec_hdmi_btn"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSyscecfocus",
                "aftUpHandler":"SettingSyscecfocus",
                "befLeftHandler":"SettindSysCecEscHandler",
                'aftEnterHandler':'SettingSysCecCtrlEnHandler',//点击enter事件后处理开关转换
                "aftEscHandler":"SettindSysCecEscHandler"
            }


        },
        {
            "id": "setting_sys_cec_hdmi_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_cec_hdmi_btn",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_cec_btn2", "upTo": "setting_sys_cec_control4"},
            "handler": {
                "aftDownHandler":"SettingSyscecfocus",
                "aftUpHandler":"SettingSyscecfocus",
                "befEnterHandler": "SettingSysCecBtn1EnHandler",
                "befEscHandler": "SettindSysCecEscHandler"
            }
        },
        {
            "id": "setting_sys_lang_cec_connect1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_cec_btn2",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_dev_ul1", "upTo": "setting_sys_cec_hdmi_btn"},
            "handler": {
                "aftDownHandler":"SettingSyscecfocus",
                "aftUpHandler":"SettingSyscecfocus",
                "befLeftHandler":"SettindSysCecEscHandler",
                "befEnterHandler": "SettingSysCecBtn2EnHandler",
                "befEscHandler": "SettindSysCecEscHandler"
            }
        },

        {
            "id": "setting_sys_cec_devlist",
            "description": "device list",
            "CaEType": "div"
        },

        {
            "id": "setting_sys_dev_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_dev_normal", "focus": "setting_sys_dev_focus"
            },
            "nav": {"upTo": "setting_sys_cec_btn2"},
            "handler": {
                "aftDownHandler":"SettingSyscecfocus",
                "aftUpHandler":"SettingSyscecfocus",
                "befLeftHandler":"SettindSysCecEscHandler",
                "aftEnterHandler": "SettingCecDevOKhandler",
                "aftEscHandler":"SettindSysCecEscHandler"
            },
            oriCaE: [

                {
                    "id": "setting_sys_dev_text1",
                    "description": "discription",
                    "CaEType": "span"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_dev_text1"],
                "PageSize": 6

            }
        }
    ];
    SettingCecInit();
    return PageDateSettingSysCec;
}
var PageDateSettingSysCec={
    "setting_sys_cec_img1":{Data:"img/head_arrow.png"},
    "setting_sys_cec_text1":{Data:"HDMI & CEC Function"},
    "setting_sys_cec_control_text1":{Data:"CEC Control"},
    "setting_sys_cec_control1":{Data:{ switchType:true, switchText:''},"disable": false},
    "setting_sys_cec_auto_poweroff_text1":{Data:"Device Auto Power Off"},
    "setting_sys_cec_control2":{Data:{ switchType:true, switchText:''},"disable": false},
    "setting_sys_cec_auto_poweron_text1":{Data:"TV Auto Power On"},
    "setting_sys_cec_control3":{Data:{ switchType:true, switchText:''},"disable": false},
    "setting_sys_cec_arc_ctrl_text1":{Data:"Audio Receiver"},
    "setting_sys_cec_control4":{Data:{ switchType:true, switchText:''},"disable": false},
    "setting_sys_lang_cec_connect1":{Data:"Device Connect"},
    "setting_sys_cec_hdmi_str1":{Data:"HDMI 2.0 Format"},
    "setting_sys_cec_hdmi_btn":{Data:"Adjust"},
    "setting_sys_cec_btn2":{Data:"Detect","disable":false},
    "setting_sys_cec_devlist":{Data:"CEC Device Lists"},
    "setting_sys_dev_ul1": {Data:
        [
            {

                "setting_sys_dev_text1": {Data:""}

            },
            {

            "setting_sys_dev_text1": {Data:""}
            },
            {

            "setting_sys_dev_text1": {Data:""}

            },
            {

            "setting_sys_dev_text1": {Data:""}

            }
        ],
        "SelectedIndex":0,
        "disable":false

    },

    "operateData": {
//        "langIndex":0,
        "helplist":[
            {
                "title":"CEC & MHL Control",
                "content":"Allow HDMI devices to control each other."
            },
            {
                "title":"Device Auto Power Off",
                "content":"Allow CEC-enabled devices to turn Off with the TV."
            },
            {
                "title":"TV Auto Power On",
                "content":"Allow the TV to turn On with CEC-enabled devices."
            },
            {
                "title":"Audio Receiver",
                "content":"Allow the Audio Receiver to send audio over an HDMI cable and back to or from your TV."
            },
            {
                "title":"Detect",
                "content":"Allow CEC-enabled devices to communicate with each other when connected through an HDMI cable."
            },
            {
                "title":"",
                "content":""
            },
            {
                "title": "HDMI2.0 format",
                "content":"Match the connected device output format. Select Enhanced for devices of 4K, 60Hz, 4:4:4 4:2:2 or 4:2:0, 10bit and above."
            }
        ],
        "setting_sys_cec_control1":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "setting_sys_cec_control2":{
            switchType:false,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "setting_sys_cec_control3":{
            switchType:false,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "setting_sys_cec_control4":{
            switchType:false,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "devoperlist":["Standby","Start","ARC"],
        "curdevlist":[
            {
                "name":"dev1",
                "type":1,
                "operlist":["Standby","Start"]
//                "arc":false
            },
            {
                "name":"dev2",
                "type":1,
                "operlist":["Standby","Start"]
//                "arc":false
            },
            {
                "name":"dev5",
                "type":1,
                "operlist":["Standby","Start","Device Root Menu"]
//                "arc":false
            },
            {
                "name":"dev3",
                "type":1,
                "operlist":["Standby","Start","Device Root Menu"]
//                "arc":false
            },
            {
                "name":"ARC",
                "type":5,
                "operlist":["Standby","Start","Device Root Menu"]
//                "arc":false
            }

        ],
        "ishaveHdmi2":false,
        "signallist":["Standard format","Enhanced format"],
        'curSignalFormat':0,
        "curfocus":0
    },
    "langData":{
        "HDMI & CEC Function": [],
        "Device Link Control":[],
        "Adjust":[],
        "HDMI 2.0 Format":[],
        "Standard format":[],
        "Enhanced format":[],
        "HDMI & Device Link Function":[],
        "Audio receiver": [],
        "CEC Function": [],
        "HDMI Function":[],
        "Device list":[],
        "Delete": [],
        "Detect":[],
        "CEC Control":[],
        "Allow the TV to automatically control CEC devices connected to the TV via HDMI.": [],
        "Automatically turn off HDMI CEC devices when the TV is turned off and INlink is set to On.": [],
        "Automatically turn on the TV when the HDMI CEC device is powered on, if allowed by the device.": [],
        "On":["On","Ein","Acceso","Ligado","Encendido","Activé","På","På","Til","Päällä"],
        "Off":["Off","Aus","Spento","Desligado","Apagado","Désactivé","Av","Av","Fra","Pois päältä"],
        "CEC & MHL Control": ["CEC Control","Contrôle CEC","Control del CEC"],
        "Allow HDMI devices to control each other. ": ["Allow HDMI devices to control each other. ","Autorisez les périphériques HDMI pour un contrôle réciproque. ","Permitir que los dispositivos HDMI se controlen entre sí. "],
        "Device Auto Power Off": ["Device Auto Power Off","Désactivation automatique de périphériques","Desconexión automática de dispositivo"],
        "Allow CEC-enabled devices to turn Off with the TV.": ["Allow CEC-enabled devices to turn Off with the TV.","Activez les périphériques habilités CEC pour qu’ils s’éteignent avec le téléviseur.","Permitir que los dispositivos CEC habilitados se apaguen con el televisor."],
        "TV Auto Power On": ["TV Auto Power On","Activation automatique du téléviseur","Encendido automático del televisor"],
        "Allow the TV to turn On with CEC-enabled devices.": ["Allow the TV to turn On with CEC-enabled devices.","Activez le téléviseur pour qu’il s’allume avec les périphériques habilités CEC.","Permitir que el televisor se encienda con los dispositivos CEC habilitados."],
        "Audio Receiver": ["Audio Receiver","Récepteur Audio","Receptor de audio"],
        "Allow the Audio Receiver to send audio over an HDMI cable and back to or from your TV.": ["Allow the Audio Receiver to send audio over an HDMI cable and back to or from your TV.","Activez le récepteur audio pour qu’il transmette l’audio sur un câble HDMI, vers ou depuis votre téléviseur.","Permitir que el receptor de audio envíe audio a través de un cable HDMI y lo haga hacia o desde el televisor."],
        "CEC Device Lists": ["CEC Device Lists","Listes des périphériques habilités CEC","Listas de dispositivos CEC"],
        "View a list of all CEC-enabled devices.": ["View a list of all CEC-enabled devices.","Affichez la liste de tous les périphériques habilités CCE.","Ver una lista de todos los dispositivos CEC habilitados."],
        "Standby": ["Standby","Veille","En espera"],
        "Start": ["Start","Démarrer","Comienzo"],
        "ARC": ["ARC","ARC","ARC"],
        "Device Connect": ["Device Connect","Périphériques de connexion","Conexión de dispositivos"],
        "Allow CEC-enabled devices to communicate with each other when connected through an HDMI cable.": ["Allow CEC-enabled devices to communicate with each other when connected through an HDMI cable.","Autorisez les périphériques habilités CEC à communiquer les uns avec les autres lorsqu'ils sont connectés via un câble HDMI.","Permitir que los dispositivos CEC habilitados se comuniquen entre sí cuando se conectan a través de un cable HDMI."],
        "Device Root Menu": ["Device Root menu","Menu racine du périphérique","Menú raíz del dispositivo"],
        "Access the menu of connected HDMI CEC-enabled devices with the TV remote control.": ["Access the menu of connected HDMI CEC-enabled devices with the TV remote control.","Accédez au menu des périphériques habilités CEC connectés via un câble HDMI à l’aide de la télécommande du téléviseur.","Acceder al menú de los dispositivos CEC habilitados conectados con HDMI con el control remoto del televisor."]


    },
    rewrite:function (data){
        var _this = this,
            opeData = data.operateData;
        $.each(data,function(key,val){

            if(!key) return true;

            var localData = data[key],
                localOpeData =opeData[key];
            switch(key)
            {
                case "setting_sys_cec_control1":
                case "setting_sys_cec_control2":
                case "setting_sys_cec_control3":
                case "setting_sys_cec_control4":

                    //更新data里面的数据
                    localData.Data.switchType = localOpeData.switchType;
                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                    break;
            }
        })
        if(!data.operateData.setting_sys_cec_control1.switchType)
        {
            data.setting_sys_dev_ul1.Data=[];//开关打开后重新获得cec设备列表和设置信息
            data.setting_sys_cec_control2.disable=true;
            data.setting_sys_cec_control3.disable=true;
            data.setting_sys_cec_control4.disable=true;
            data.setting_sys_dev_ul1.disable=true;
          //  data.setting_sys_cec_btn1.disable=true;
            data.setting_sys_cec_btn2.disable=true;
            $("#setting_sys_cec_root1").css('color',"rgba(178,184,191,0.3)");//""#85888d");
            $("#setting_sys_lang_cec_connect1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_cec_auto_poweroff_text1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_cec_auto_poweron_text1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_cec_devlist").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_cec_arc_ctrl_text1").css('color',"rgba(178,184,191,0.3)");

        }
        else
        {
            data.setting_sys_cec_control2.disable=false;
            data.setting_sys_cec_control3.disable=false;
            data.setting_sys_cec_control4.disable=false;
            data.setting_sys_dev_ul1.disable=false;
            data.setting_sys_dev_ul1.Data=[];
            var element={};
            $.each(data.operateData.curdevlist,function(key,val)
            {
                // i= _getIndex(data.operateData.devoperlist,data.operateData.curdevlist[key].name)
                element.setting_sys_dev_text1={};
                //  console.log (data.langData.opertrans[i].str[langIndex]);
                element.setting_sys_dev_text1.Data=val.name;
                data.setting_sys_dev_ul1.Data.push(_cloneObj(element));

            });
           // data.setting_sys_cec_btn1.disable=false;
            data.setting_sys_cec_btn2.disable=false;
            $("#setting_sys_cec_root1").css('color',"#f0f0f0");
            $("#setting_sys_lang_cec_connect1").css('color',"#f0f0f0");
            $("#setting_sys_cec_auto_poweroff_text1").css('color',"#f0f0f0");
            $("#setting_sys_cec_auto_poweron_text1").css('color',"#f0f0f0");
            $("#setting_sys_cec_devlist").css('color',"#f0f0f0");
            $("#setting_sys_cec_arc_ctrl_text1").css('color',"#f0f0f0");


        }
        if(data.operateData.ishaveHdmi2)
        {
            data.setting_sys_cec_hdmi_btn.disable=false;
        }else
        {
            data.setting_sys_cec_hdmi_btn.disable=true;

        }

        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            data.setting_sys_cec_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_sys_switch_name").css("float","left");
            $(".setting_select_lang_focus").css("float","right");
            $(".setting_select_langpage4").css("float","right");
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_lang1__cls").css("left","510px");
        }
        else {
            data.setting_sys_cec_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
            $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");
            $(".setting_sys_switch_name").css("float","right");
            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left");
            $(".setting_sys_lang1__cls").css("left","358px");
        }

    }

};
function SettingCecPageonOpen()
{

    if(hiWebOsFrame.getCurrentArea()=="EU")
    {
        $("#setting_sys_cec_helpinfo").css("display","block");
    }
    else
    {
        $("#setting_sys_cec_helpinfo").css("display","none");
    }

    if(PageDateSettingSysCec.operateData.ishaveHdmi2)
    {
        $("#setting_sys_cec_hdmi").css("display","block");
    }
    else
    {
        $("#setting_sys_cec_hdmi").css("display","none");
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
       // PageDateSettingSysCec.setting_sys_cec_img1.Data="img/head_arrow.png";
        $(".setting_page_line").css("float","left");
        //$(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
        $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
        $(".setting_select_langpage2").css("float","left");
        $(".setting_select_langpage3").css("float","left");
        $(".setting_sys_switch_name").css("float","left");
        $(".setting_select_lang_focus").css("float","right");
        $(".setting_select_langpage4").css("float","right");
        $(".setting_select_lang_disable").css("float","right");
        $(".setting_sys_lang1__cls").css("left","510px");
    }
    else {
        //PageDateSettingSysCec.setting_sys_cec_img1.Data="img/head_arrow_right.png";
        $(".setting_page_line").css("float","right");
        $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
       // $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0");
        $("#setting_sys_list1_srcobar_container").css("float","left");
        $(".setting_select_langpage2").css("float","right");
        $(".setting_select_langpage3").css("float","right");
        $(".setting_sys_switch_name").css("float","right");
        $(".setting_select_lang_focus").css("float","left");
        $(".setting_select_langpage4").css("float","left");
        $(".setting_select_lang_disable").css("float","left");
        $(".setting_sys_lang1__cls").css("left","358px");
    }

}
var g_settingsyscecopenflag=0;
function SettingSyscecfocus()
{
    var index;
    if(this.id=="setting_sys_cec_control1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_cec_control2")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_cec_control3")
    {
        index = 2;
    }

    else if(this.id=="setting_sys_cec_control4")
    {
        index = 3;
    }
    else if(this.id=="setting_sys_cec_btn2")
    {
        index = 4;
    }
    else if(this.id=="setting_sys_dev_ul1")
    {
        index = 5;
    }
    else if(this.id=="setting_sys_cec_hdmi_btn")
    {
        index = 6;
    }
    PageDateSettingSysCec.operateData.curfocus=index;
    SettingSysCecUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[index].content)
}

function SettingSysCecUpdateHelpinfo(content)
{
    PageDateSettingSysCec.operateData.helpcontent=content;
//    PageDataSettingSysLang.operateData.helptitle=title;
    try {
//        if (title != "" && !!langPackages[title]) {
//            $("#setting_sys_lang_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
//        }
//        else {
//            $("#setting_sys_lang_helpinfo_title").html(title);
//        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_cec_helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_cec_helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }

}

function SettingSysCecBtn1EnHandler()
{

    hiWebOsFrame.createPage('setting_sys_timelist_page', null, hiWebOsFrame.settingssystime, null, function (timelist) {
        PageDataSettingSystimeList.operateData.curoption="signalformat";
        PageDataSettingSystimeList.operateData.curdatalist=PageDateSettingSysCec.operateData.signallist;
        PageDataSettingSystimeList.operateData.curselectindex=PageDateSettingSysCec.operateData.curSignalFormat;
        hiWebOsFrame.settingssystimelist = timelist;
        hiWebOsFrame.settingssystimelist.rewrite();
        hiWebOsFrame.settingssystimelist.open();
        hiWebOsFrame.settingssystimelist.hiFocus();

    });


}
function SettingSysCecBtn2EnHandler()
{
    model.cec.setHdmiDevicesSearch(1);
    SetRecentUse("HDMI & CEC Function",4,RECENT_CEC);
    hiWebOsFrame.startLoading(6,"cecsearch");
}
function SettingCecPageonDestroy()
{
    hiWebOsFrame.settingssyscec=null;
    model.cec.setHdmiDevicesSearch(0);
    g_settingsyscecopenflag=0;
   if (hiWebOsFrame.getIsLoading())
   {
       hiWebOsFrame.endLoading("cecsearch");
   }

}

function SettingSysCecCtrlEnHandler(operateData,data){

    var page = this.page;
    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    if(this.id=="setting_sys_cec_control1"&& !operateData[this.id].switchType)
    {
        // todo js
        SetCecCtrl(operateData[this.id].switchType);
        page.rewrite();
        hiWebOsFrame.settingssyscec.open();
        page.hiFocus("setting_sys_cec_control1");
        SettingSysCecUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[0].content);
        $("#setting_sys_cec_auto_poweroff_text1").css('color',"rgba(178,184,191,0.3)");
        $("#setting_sys_cec_auto_poweron_text1").css('color',"rgba(178,184,191,0.3)");
        $("#setting_sys_cec_root1").css('color',"rgba(178,184,191,0.3)");
        $("#setting_sys_lang_cec_connect1").css('color',"rgba(178,184,191,0.3)");
        $("#setting_sys_cec_devlist").css('color',"rgba(178,184,191,0.3)");
        $("#setting_sys_cec_arc_ctrl_text1").css('color',"rgba(178,184,191,0.3)");
    }
    else
    {
        if(this.id=="setting_sys_cec_control1")
        {
            SetCecCtrl(operateData[this.id].switchType);
            this.page.operateData.curdevlist=[];
            page.rewrite();
            hiWebOsFrame.settingssyscec.open();
            page.hiFocus("setting_sys_cec_control1");
            SettingSysCecUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[0].content);
        }
        else if(this.id=="setting_sys_cec_control2")
        {
            SetTvDevPoweroff(operateData[this.id].switchType);
            page.rewriteDataOnly();
        }
        else if(this.id=="setting_sys_cec_control3")
        {
            SetTvAutoPoweron(operateData[this.id].switchType);
            page.rewriteDataOnly();
        }
        else if(this.id=="setting_sys_cec_control4")
        {
            SetArcSwitch(operateData[this.id].switchType);
            page.rewriteDataOnly();
        }
        $("#setting_sys_cec_auto_poweroff_text1").css('color',"#f0f0f0");
        $("#setting_sys_cec_auto_poweron_text1").css('color',"#f0f0f0");
        $("#setting_sys_cec_root1").css('color',"#f0f0f0");
        $("#setting_sys_lang_cec_connect1").css('color',"#f0f0f0");
        $("#setting_sys_cec_devlist").css('color',"#f0f0f0");

    }
    SetRecentUse("HDMI & CEC Function",4,RECENT_CEC);
}
function SettingCecDevOKhandler()
{
    PageDataSettingSysCecDev.operateData.parentdevindex=this.SelectedIndex;
    PageDataSettingSysCecDev.operateData.curdevlist=PageDateSettingSysCec.operateData.curdevlist[this.SelectedIndex];
    hiWebOsFrame.settingssyscecdev.rewrite();
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".setting_sys_cec_txt2").css("float","right");
//            $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
//            $(".setting_select_langpage2").css("float","left");
//            $(".setting_select_langpage3").css("float","left");
//
//            $(".setting_select_lang_focus").css("float","right")
//            $(".setting_select_langpage4").css("float","right")
//            $(".setting_select_lang_disable").css("float","right");
//            $(".setting_sys_lang1__cls").css("left","510px");
    }
    else {
        $(".setting_sys_cec_txt2").css("float","left");
//            $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
//            $("#setting_sys_list1_srcobar_container").css("float","left");
//            $(".setting_select_langpage2").css("float","right");
//            $(".setting_select_langpage3").css("float","right");
//
//            $(".setting_select_lang_focus").css("float","left");
//            $(".setting_select_langpage4").css("float","left");
//            $(".setting_select_lang_disable").css("float","left")
//            $(".setting_sys_lang1__cls").css("left","358px");
    }
    hiWebOsFrame.settingssyscecdev.open();
    hiWebOsFrame.settingssyscecdev.hiFocus();
}
function SettindSysCecEscHandler()
{
   try{
    model.cec.setHdmiDevicesSearch(0);
   }catch (e)
    {debugE(e.message)}
    g_settingsyscecopenflag=0;
  //  RefreshHelpInfo(4, CEC_FUNCTION);
    if (hiWebOsFrame.getIsLoading())
    {
        hiWebOsFrame.endLoading("cecsearch");
    }
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
    hiWebOsFrame.settingssyscec.close();
    hiWebOsFrame.settingssyscec.destroy();
    if(!!hiWebOsFrame.settingssyscecdev)
    {
       hiWebOsFrame.settingssyscecdev.destroy();
    }

}
/*******************************************************************
 name: cec功能函数
 description：
 input:currStep:
 output:
 return
 *******************************************************************/
 var onFunctionalityChaged=function(value)
{

    try {
        AudioDevice.CEC_CTRL = value;
        if(0 == value) vol.reCheckVolume();
        DBG_INFO("cec ctrl changed to [" + value + "]");
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        onFunctionalityChagedSndInterface(value);
    } catch (ex) {
        debugE(ex.message);
    }
}

//var onRemoteTvChaged=function(value)
//{
//    debugPrint("onRemoteTvChaged"+value);
//}
//var onTurnOffDeviceWithTVKeyChaged=function(value)
//{
//    debugPrint("onTurnOffDeviceWithTVKeyChaged"+value);
//}
var onHdmiDevicesSearchChaged=function(value)
{
    var element={};
    var temp;
    debugPrint("onHdmiDevicesSearchChaged"+value);
    if(g_settingsyscecopenflag==0)
    {
        debugPrint("the g_settingsyscecopenflag=1, do not fresh the list ")
        return;
    }
    if(value==2)//found
    {
        PageDateSettingSysCec.operateData.curdevlist=[];
        var count =model.cec.getHdmiDevicesCount();
        var namelist=model.cec.getHdmiDevicesName();
        var typelist=model.cec.getHdmiDevicesType();
        for(var i=0;i<count;i++)
        {
            element.name=namelist[i];
            element.type=typelist[i];
            if( element.type==5)
            {
                element.operlist=[];
                element.operlist[0]="Standby";
                element.operlist[1]="Start";

            }
            else{
                element.operlist=[];
                element.operlist[0]="Standby";
                element.operlist[1]="Start";
                element.operlist[2]="Device Root Menu";
            }

            PageDateSettingSysCec.operateData.curdevlist.push(_cloneObj(element))
        }
        debugPrint("curdevlist"+JSON.stringify(PageDateSettingSysCec.operateData.curdevlist));
        model.cec.setHdmiDevicesSearch(0);
        hiWebOsFrame.settingssyscec.rewrite();
        hiWebOsFrame.settingssyscec.open();
        SettingSysCecSetFocus();
	   if(!!hiWebOsFrame.settingssyscecdev)
        {
            hiWebOsFrame.settingssyscecdev.close();
        }
    }
    else if(value==3)// not found
    {
        model.cec.setHdmiDevicesSearch(0);
        PageDateSettingSysCec.operateData.curdevlist=[];
        hiWebOsFrame.settingssyscec.rewrite();
        hiWebOsFrame.settingssyscec.open();
     //   hiWebOsFrame.settingssyscec.hiFocus();
        debugPrint("PageDateSettingSysCec.operateData.curfocus"+PageDateSettingSysCec.operateData.curfocus);
        SettingSysCecSetFocus();
	  if(!!hiWebOsFrame.settingssyscecdev)
        {
            hiWebOsFrame.settingssyscecdev.close();
        }
    }
    else if(value==4) //the device list changed
    {
        PageDateSettingSysCec.operateData.curdevlist=[];
        var count =model.cec.getHdmiDevicesCount();
        var namelist=model.cec.getHdmiDevicesName();
        var typelist=model.cec.getHdmiDevicesType();
        for(var i=0;i<count;i++)
        {
            element.name=namelist[i];
            element.type=typelist[i];
            if( element.type==5)
            {
                element.operlist=[];
                element.operlist[0]="Standby";
                element.operlist[1]="Start";

            }
            else{
                element.operlist=[];
                element.operlist[0]="Standby";
                element.operlist[1]="Start";
                element.operlist[2]="Device Root Menu";
            }

            PageDateSettingSysCec.operateData.curdevlist.push(_cloneObj(element))
        }
        debugPrint("curdevlist"+JSON.stringify(PageDateSettingSysCec.operateData.curdevlist));
        model.cec.setHdmiDevicesSearch(0);
        hiWebOsFrame.settingssyscec.rewrite();
        hiWebOsFrame.settingssyscec.open();
        SettingSysCecSetFocus();
        if(!!hiWebOsFrame.settingssyscecdev)
        {
            hiWebOsFrame.settingssyscecdev.close();
        }
    }
    hiWebOsFrame.endLoading("cecsearch");

}

function SettingSysCecSetFocus()
{
    if(hiWebOsFrame.getCurrentPage().id=="setting_sys_timelist_page"){
        return;
    }
    if(PageDateSettingSysCec.operateData.curfocus==0)
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_control1");

    }
    else if(PageDateSettingSysCec.operateData.curfocus==1)
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_control2");

    }
    else if(PageDateSettingSysCec.operateData.curfocus==2)
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_control3");

    }
    else if(PageDateSettingSysCec.operateData.curfocus==3)
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_control4");

    }
    else if(PageDateSettingSysCec.operateData.curfocus==5)
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_btn2");
    }else if(PageDateSettingSysCec.operateData.curfocus==6)
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_hdmi_btn");
    }
    else  if(PageDateSettingSysCec.operateData.curfocus==4)
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_btn2");
    }
    else
    {
        hiWebOsFrame.settingssyscec.hiFocus("setting_sys_cec_control1");
    }
    SettingSysCecUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[PageDateSettingSysCec.operateData.curfocus].content)
}

function SettingCecInit()
{
    var temp1;
    g_settingsyscecopenflag=1;
    try
    {   if(hiWebOsFrame.getCurrentArea()=="EU")
        {
            $("#setting_sys_cec_helpinfo").css("display","block");
        }
        else
        {
            $("#setting_sys_cec_helpinfo").css("display","none");
        }
        PageDateSettingSysCec.operateData.curfocus=0;
        model.cec.onFunctionalityChaged=onFunctionalityChaged;
//        model.cec.onRemoteTvChaged=onRemoteTvChaged;
//        model.cec.onTurnOffDeviceWithTVKeyChaged=onTurnOffDeviceWithTVKeyChaged;
        model.cec.onHdmiDevicesSearchChaged=onHdmiDevicesSearchChaged;
        temp1=model.cec.getFunctionality();
        if(temp1==1)
        {
            PageDateSettingSysCec.operateData.setting_sys_cec_control1.switchType=true;
            //model.cec.setHdmiDevicesSearch(1);
            PageDateSettingSysCec.operateData.curdevlist=[];
            var count =model.cec.getHdmiDevicesCount();
            debugPrint("count"+count);
            var element={};
            var temp;
            var namelist=model.cec.getHdmiDevicesName();
            var typelist=model.cec.getHdmiDevicesType();
            for(var i=0;i<count;i++)
            {
                element.name=namelist[i];
                element.type=typelist[i];
                if( element.type==5)
                {
                    element.operlist=[];
                    element.operlist[0]="Standby";
                    element.operlist[1]="Start";
//                    element.operlist[2]="";
                 //   element.operlist[2]="ARC";
                   // temp=model.cec.getHdmiDevicesArcState();
//                    if(temp==1)
//                    {
//                        element.arc=true;
//                    }
//                    else{
//                        element.arc=false;
//                    }


                }
                else{
                    element.operlist=[];
                    element.operlist[0]="Standby";
                    element.operlist[1]="Start";
                    element.operlist[2]="Device Root Menu";
                }

                PageDateSettingSysCec.operateData.curdevlist.push(_cloneObj(element))
            }
            debugPrint("curdevlist"+JSON.stringify(PageDateSettingSysCec.operateData.curdevlist));

        }
        else
        {
            PageDateSettingSysCec.operateData.curdevlist=[];
            PageDateSettingSysCec.operateData.setting_sys_cec_control1.switchType=false;
            model.cec.setHdmiDevicesSearch(0);
        }
        debugPrint("ceccontrol"+temp1);
         temp1=model.cec.getTurnOffDeviceWithTVKey();
        if(temp1==1)
        {
            PageDateSettingSysCec.operateData.setting_sys_cec_control2.switchType=true;
        }
        else{
            PageDateSettingSysCec.operateData.setting_sys_cec_control2.switchType=false;

        }
        debugPrint("dev auto power off "+temp1);
        temp1=model.cec.getRemoteTv();
        if(temp1==1)
        {
            PageDateSettingSysCec.operateData.setting_sys_cec_control3.switchType=true;
        }
        else
        {
            PageDateSettingSysCec.operateData.setting_sys_cec_control3.switchType=false;

        }
        debugPrint("tv auto power on "+temp1);

        temp1=model.cec.getHdmiDevicesArcState();
        if(temp1==1)
        {
            PageDateSettingSysCec.operateData.setting_sys_cec_control4.switchType=true;
        }
        else
        {
            PageDateSettingSysCec.operateData.setting_sys_cec_control4.switchType=false;

        }
        g_startsearchflag=0;
    }
    catch (e)
    {
        debugE(e.message)
    }
    //add by jiaguili only for em HDMI2.0, DO NOT PUSH TO OTHERS BRANCH
    try{
        if(hiWebOsFrame.getCurrentArea()=="EM"||hiWebOsFrame.getCurrentArea()=="EU")
        {
            var tempflag=model.cec.getHdmiSignalFormatExist();
            DBG_INFO("tempflag "+tempflag);
            if(tempflag>0){
                PageDateSettingSysCec.operateData.ishaveHdmi2=true;

            }
            else
            {
                PageDateSettingSysCec.operateData.ishaveHdmi2=false;

            }
            PageDateSettingSysCec.operateData.curSignalFormat=model.cec.getHdmiSignalFormat();
            DBG_INFO("curSignalFormat "+PageDateSettingSysCec.operateData.curSignalFormat);

        }
        else
        {
            PageDateSettingSysCec.operateData.ishaveHdmi2=false;

        }

    }
    catch (e)
    {
        debugE(e.message);
        PageDateSettingSysCec.operateData.ishaveHdmi2=false;
    }
}
function SetCecCtrl(type)
{
    if(type)
    {
        model.cec.setFunctionality(1);
        AudioDevice.CEC_CTRL = 1;
        debugPrint("set cec ctrl 1");
    }
    else
    {
        model.cec.setFunctionality(0);
        AudioDevice.CEC_CTRL = 0;
        debugPrint("set cec ctrl 0");
    }
   // debugPrint("set cec ctrl"+type);
}
function SetTvAutoPoweron(type)
{
    if(type)
    {
        model.cec.setRemoteTv(1);
    }
    else
    {
        model.cec.setRemoteTv(0);
    }
    debugPrint("SetTvAutoPoweron"+type);
}
function SetTvDevPoweroff(type)
{
    if(type)
    {
        model.cec.setTurnOffDeviceWithTVKey(1);
    }
    else
    {
        model.cec.setTurnOffDeviceWithTVKey(0);
    }
    debugPrint("Set Device Auto Power off"+type);
}
function SetArcSwitch(type)
{
    if(type)
    {
        model.cec.setHdmiDevicesArcState(1);
    }
    else
    {
        model.cec.setHdmiDevicesArcState(0);
    }
    debugPrint("Set ARC"+type);
}