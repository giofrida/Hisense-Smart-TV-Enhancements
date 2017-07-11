/**
 * Created by Administrator on 14-6-18.
 */
function getSettingTimePageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_time_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_time_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_time_zone_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_zone_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_time_btn2"},
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "aftEnterHandler": "SettingSysTimeBtn1Enter",
                "befLeftHandler":"SettingSysTimeEscHandler",
                "aftEscHandler": "SettingSysTimeEscHandler"
            }
        },
        {
            "id": "setting_sys_time_format_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_format_str2",
            "description": "",
            "CaEType": "div",
            enableHtml: true
        },
        {
            "id": "setting_sys_time_btn2",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_time_control1","upTo":"setting_sys_time_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "aftEnterHandler": "SettingSysTimeBtn2Enter",
                "befLeftHandler":"SettingSysTimeEscHandler",
                "aftEscHandler": "SettingSysTimeEscHandler"
            }
        },
        {
            "id": "setting_sys_time_date_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_date_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_btn3",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_time_ul2","upTo":"setting_sys_time_control1"},
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "aftEnterHandler": "SettingSysTimeBtn3Enter",
                "befLeftHandler":"SettingSysTimeEscHandler",
                "aftEscHandler": "SettingSysTimeEscHandler"
            }
        },
        {
            "id": "setting_sys_time_ctrl_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_ctrl_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_time_control1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav": {"downTo":"setting_sys_time_btn3","upTo": "setting_sys_time_btn2"},
            "handler":{
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "befLeftHandler":"SettingSysTimeEscHandler",
                'aftEnterHandler':'SettingSysTimeCtrlEnHandler',
                "aftEscHandler": "SettingSysTimeEscHandler"

            }

        },
        {
            "id": "setting_sys_time_poweron_str1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_time_poweron_fre",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {

            "id": "setting_sys_time_ul2",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo": "setting_sys_time_btn4","upTo":"setting_sys_time_btn3"},

            "classes": {
                "normal": "setting_sys_navibar3_normal", "focus": "setting_sys_navibar3_focus","dataSelected":"setting_sys_navibar3_dataselect"
            },
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "aftEscHandler":"SettingSysTimeEscHandler",
                "befLeftHandler":"SettingSysTimeUlleftHandler",
                "befEnterHandler":"SettingSysTimeUl2Enter"
            },
            oriCaE: [
                {
                    "id": "setting_sys_poweron_txt1",
                    "description": "名称",
                    "CaEType": "span"
                }
            ],
            UlConfig: {

                "UlDataItem": ["setting_sys_poweron_txt1"]
            }

        },
        {
            "id": "setting_sys_time_poweron_str2",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_time_poweron_time",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_time_btn4",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_time_ul2", "downTo":"setting_sys_time_ul3"},
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "aftEnterHandler": "SettingSysTimeBtn4Enter",
                "befLeftHandler":"SettingSysTimeEscHandler",
                "aftEscHandler":"SettingSysTimeEscHandler"
            }

        },
        {
            "id": "setting_sys_time_poweroff_str1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_time_poweroff_fre",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {

            "id": "setting_sys_time_ul3",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"upTo": "setting_sys_time_btn4", "downTo":"setting_sys_time_btn5"},
            "classes": {
                "normal": "setting_sys_navibar3_normal", "focus": "setting_sys_navibar3_focus","dataSelected":"setting_sys_navibar3_dataselect"
            },
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "befLeftHandler":"SettingSysTimeUlleftHandler",
                "aftEscHandler":"SettingSysTimeEscHandler",
                "befEnterHandler":"SettingSysTimeUl3Enter"
            },
            oriCaE: [
                {
                    "id": "setting_sys_poweroff_txt1",
                    "description": "名称",
                    "CaEType": "span"
                }
            ],
            UlConfig: {

                "UlDataItem": ["setting_sys_poweroff_txt1"]
            }


        },
        {
            "id": "setting_sys_time_poweroff_str2",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_time_poweroff_time",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_time_btn5",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav": {"upTo": "setting_sys_time_ul3","downTo": "setting_sys_time_btn6"},
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "aftEscHandler":"SettingSysTimeEscHandler",
                "befLeftHandler":"SettingSysTimeEscHandler",
                "aftEnterHandler": "SettingSysTimeBtn5Enter"
            }

        },
        {
            "id": "setting_sys_time_sleep_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_sleep_str2",
            "description": "",
            "CaEType": "div",
            enableHtml:true
        },
        {
            "id": "setting_sys_time_btn6",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "","upTo":"setting_sys_time_btn5"},
            "handler": {
                "aftDownHandler":"SettingSysTimefocushandler",
                "befLeftHandler":"SettingSysTimeEscHandler",
                "aftUpHandler":"SettingSysTimefocushandler",
                "aftEnterHandler": "SettingSysTimeBtn6Enter",
                "aftEscHandler": "SettingSysTimeEscHandler"
            }
        }

    ];
    SettingTimerinit();
    return PageDataSettingSysTime;
}
var updatetimer;
var PageDataSettingSysTime={

    "setting_sys_time_img1":{Data:"img/head_arrow.png"},
    "setting_sys_time_text1":{Data:"Time"},

    "setting_sys_time_zone_str1":{Data:"Time Zone:"},
    "setting_sys_time_zone_str2":{Data:"home mode"},
    "setting_sys_time_btn1":{Data:"Adjust"},
    "setting_sys_time_format_str1":{Data:"Time Format:"},
    "setting_sys_time_format_str2":{Data:"10s"},
    "setting_sys_time_btn2":{Data:"Adjust"},
    "setting_sys_time_date_str1":{Data:"Date/Time:"},
    "setting_sys_time_date_str2":{Data:""},
    "setting_sys_time_btn3":{Data:"Adjust"},
    "setting_sys_time_ctrl_str1":{Data:"Daylight Savings:"},
    "setting_sys_time_ctrl_str2":{Data:""},
    "setting_sys_time_control1":{Data:"Adjust"},

    "setting_sys_time_poweron_str1":{Data:"Power on Timer"},
    "setting_sys_time_poweron_fre":{Data:""},
    "setting_sys_time_ul2":{Data:[
        {"setting_sys_poweron_txt1":{Data:"Off"}},
        {"setting_sys_poweron_txt1":{Data:"Once"}},
        {"setting_sys_poweron_txt1":{Data:"Daily"}}

    ],
        "disable":false,
        "DataSelectedIndex":0,
        "SelectedIndex":0},
    "setting_sys_time_poweron_str2":{Data:"Timer:"},
    "setting_sys_time_poweron_time":{Data:""},
    "setting_sys_time_btn4":{Data:"Adjust","disable":false},
    "setting_sys_time_poweroff_str1":{Data:"Power off Timer"},
    "setting_sys_time_poweroff_fre":{Data:""},

    "setting_sys_time_ul3":{Data:[
        {"setting_sys_poweroff_txt1":{Data:"Off"}},
        {"setting_sys_poweroff_txt1":{Data:"Once"}},
        {"setting_sys_poweroff_txt1":{Data:"Daily"}}
    ],
        "disable":false,
        "DataSelectedIndex":0,
        "SelectedIndex":0},
    "setting_sys_time_poweroff_str2":{Data:"Timer:"},
    "setting_sys_time_poweroff_time":{Data:""},
    "setting_sys_time_btn5":{Data:"Adjust","disable":false},
    "setting_sys_time_sleep_str1":{Data:"Sleep Timer:"},
    "setting_sys_time_sleep_str2":{Data:"home mode"},
    "setting_sys_time_btn6":{Data:"Adjust"},
    "operateData": {
//        "curfocuslist":["timesync","onfre","ontime","offfre","offtime"],
//        "curfocus":"timesync",
       // "setting_sys_time_control1":0,
        "daylightsavingstr":["Auto","Manual"],
        "helplist":[
            {
                "title":"Time Zone",
                "content":"Select your time zone."
            },
            {
                "title":"Time Format",
                "content":"Set the time to display in a 12 or 24-hour format."
            },
            {
                "title":"Date/Time",
                "content":"Set the Date and Time."
            },
            {
                "title":"Daylight Savings",
                "content":"Select whether to apply Daylight Savings Time to the TV."
            },
            {
                "title":"Power On Timer",
                "content":"Enable the Power On timer."
            }
            ,
            {
                "title":"Timer",
                "content":"Set the clock for the time you want the TV to turn On automatically."
            }
            ,
            {
                "title":"Power Off Timer",
                "content":"Enable the Power Off timer."
            }
            ,
            {
                "title":"Timer",
                "content":"Set the clock for the time you want the TV to turn Off automatically."
            },
            {
                "title":"Sleep Timer",
                "content":"Set the sleep timer to automatically turn the TV Off within a specified time."
            },
            {
                "title":"Timer",
                "content":"."
            }


        ],
        "curtimezone":0,
        "curtimeforma":0,
        "curdate":"7/14/2014",
        "curtime":"10:30",
        "curdaylight":0,
        "cursyncmode":0,
        "curpowerontime":0,
       // "curpowerondailytime":0,
        "curpoweronfre":1,
        "curpoweronweekly":[1,2],
        "curpowerofftime":0,
      //  "curpoweroffdailytime":0,
        "curpowerofffre":1,
        "curcountry":"AUS",
        "curpoweroffweekly":[1,2],
        "cursleeptimer":0,
        "seleltstrliat":["Off","Once","Daily"],
        "timezonelist":["GMT+0:00","GMT+1:00","GMT+2:00","GMT+3:00","GMT+3:30","GMT+4:00","GMT+4:30","GMT+5:00","GMT+5:30","GMT+5:45","GMT+6:00","GMT+6:30","GMT+7:00","GMT+8:00","GMT+9:00","GMT+9:30","GMT+10:00","GMT+11:00",
            "GMT+12:00","GMT+12:45","GMT+13:00","GMT-12:00","GMT-11:00","GMT-10:00","GMT-9:00","GMT-8:00","GMT-7:00","GMT-6:00","GMT-5:00","GMT-4:00","GMT-3:30","GMT-3:00","GMT-2:00","GMT-1:00"],
        "timeformatlist":["12-hour","24-hour"],
        "sleeptimerlist":["Off","10 Minutes","20 Minutes","30 Minutes","40 Minutes","50 Minutes","60 Minutes","90 Minutes","120 Minutes"],
        "zoncode":[0,1*3600,2*3600,3*3600,3.5*3600,4*3600,4.5*3600,5*3600,5.5*3600,5.75*3600,6*3600,6.5*3600,7*3600,8*3600,9*3600,9.5*3600,10*3600,11*3600,12*3600,12.75*3600,13*3600,-12*3600,-11*3600,-10*3600,-9*3600,-8*3600,-7*3600,-6*3600,-5*3600,-4.5*3600,-4*3600,-3.5*3600,-3*3600,-2*3600,-1*3600],
        //"zonelist":[-5,-5,-6,-7,-7,-8,-9,-10],
        "sleeplist":[0,10,20,30,40,50,60,90,120],
        "auszonelist":["VIC","QLD","TAS","WA","SA","NT","NSW","ACT"],
       // "auszonelist":["VIC","QLD","TAS","WA","SA","NT","NSW","ACT"],
        "curcountryzonecode":[],
        "curcountryzonelist":[]


    },
    "langData":{
        "Time ": ["Time ",""],
        "Time Zone:": [],
        "Auto":[],
        "Manual":[],
        "Eastern": ["Eastern","Est","Oriental"],
        "Indiana": ["Indiana","Indiana","Indiana"],
        "Central": ["Central","Centre","Central"],
        "Mountain": ["Mountain","Montagne","Montaña"],
        "Arizona": ["Arizona","Arizona","Arizona"],
        "Pacific": ["Pacific","Pacifique","Pacífico"],
        "Alaska": ["Alaska","Alaska","Alaska"],
        "Hawaii": ["Hawaii","Hawaii","Hawai"],
        "Kaliningrad Time(UTC+2)":[],
        "Moscow Time(UTC+3)":[],
        "Samara Time(UTC+4)":[],
        "Yekaterinburg Time(UTC+5)":[],
        "Omsk Time(UTC+6)":[],
        "Krasnoyarsk Time(UTC+7)":[],
        "Irkutsk Time (UTC+8)":[],
        "Yakutsk Time (UTC+9)":[],
        "Vladivostok Time (UTC+10)":[],
        "Srednekolymsk Time (UTC+11)":[],
        "Kamchatka Time (UTC+12)":[],
        "Brasilia Time +1 (UTC-2)":[],
        "Brasilia Time (UTC-3)":[],
        "Brasilia Time -1 (UTC-4)":[],
        "Brasilia Time -2 (UTC-5)":[],
        "Adjust":[],
        "Time Format:": [],
        "Timer:": [],
        "Date/Time:": [],
        "12-hour": ["12-hour","12 heures","12 horas"],
        "24-hour": ["24-hour","24 heures","24 horas"],
        "Daylight Savings": [],
        "Daylight Savings:": [],
        "Set the time to display in a 12 or 24-hour format.": ["Set the time to display in a 12 or 24-hour format.","Réglez l'heure à afficher dans un format 12 ou 24 heures.","Configurar la hora para mostrar un formato de 12 o 24 horas."],
        "Date ": ["Date ","Date ","Fecha "],
        "Set the current date.": ["Set the current date.","Réglez la date.","Configurar la fecha actual."],
        "Time": ["Time","Temps","Hora"],
        "Set the current time.": ["Set the current time.","Réglez l’heure actuelle.","Configurar la hora actual"],
        "Please enter with numerical keypad.": ["Please enter with numerical keypad.","Veuillez utiliser le clavier numérique.","Utilizar el teclado numérico."],
        "Input out of range": ["Input out of range","Entrée hors de portée","Entrada fuera de rango"],
        "Power On Timer": ["Power On Timer","Minuteur actif","Temporizador de encendido"],
        "Enable the Power On timer.": ["Enable the Power On timer.","Activez la mise sous tension du minuteur.","Activar el temporizador de encendido."],
        "To make sure the setting effective, please keep the power on.": ["To make sure the setting effective, please keep the power on.","Pour s’assurer que le paramétrage soit effectif, veuillez garder le téléviseur allumé.","Para asegurar la vigencia de la configuración, mantenga encendido."],
        "Once": ["Once","Une fois","Una vez"],
        "Daily": ["Daily","Tous les jours","Diario"],
        "Weekly": ["Weekly","Hebdomadaire","Semanal"],
        "Timer": ["Timer","Minuteur","Temporizador"],
        "Set the clock for the time you want the TV to turn On automatically.": ["Set the clock for the time you want the TV to turn On automatically.","Réglez l’heure pour que votre téléviseur s’allume automatiquement à l’heure souhaitée.","Configurar el reloj en la hora a la que quiere que el televisor se encienda automáticamente."],
        "Power Off Timer": ["Power Off Timer","Minuteur non-actif","Temporizador de apagado"],
        "Enable the Power Off timer.": ["Enable the Power Off timer.","Activez la mise hors tension du minuteur.","Activar el temporizador de apagado."],
        "Set the clock for the time you want the TV to turn Off automatically.": ["Set the clock for the time you want the TV to turn Off automatically.","Réglez l’heure pour que votre téléviseur s’éteigne automatiquement à l’heure souhaitée.","Configurar el temporizador para cuando desee que el televisor se apague automáticamente."],
        "Sleep Timer": ["Sleep Timer","Minuterie de mise en veille","Temporizador de reposo"],
        "Set the sleep timer to automatically turn the TV Off within a specified time.": ["Set the sleep timer to automatically turn the TV Off within a specified time.","Réglez la minuterie de mise en veille pour éteindre automatiquement le téléviseur selon un délai déterminé.","Configurar el temporizador de reposo para apagar automáticamente el TV en un plazo de tiempo determinado."],
        "Sleep Timer:": [],
        "Minutes": ["Minutes","Minutes","Minutos"],
        "10 Minutes": ["10 Minutes","10 Minutes","10 Minutos"],
        "20 Minutes": ["20 Minutes","20 Minutes","20 Minutos"],
        "30 Minutes": ["30 Minutes","30 Minutes","30 Minutos"],
        "40 Minutes": ["40 Minutes","40 Minutes","40 Minutos"],
        "50 Minutes": ["50 Minutes","50 Minutes","50 Minutos"],
        "60 Minutes": ["60 Minutes","60 Minutes","60 Minutos"],
        "90 Minutes": ["90 Minutes","90 Minutes","90 Minutos"],
        "120 Minutes": ["120 Minutes","120 Minutes","120 Minutos"],
        "Off":["Off","Aus","Spento","Desligado","Apagar","Désactivé","Av","Av","Fra","Pois päältä"],
        "Once":["Once","Einmal","Una volta","Uma vez","Una vez","Une fois","En gang","En gång","Når","Kerran"],
        "Everyday":["Everyday","Täglich","Tutti i giorni","Todos os dias","Todos los días","Tous les jours","Hver dag","Varje dag","Everyday","Joka päivä"],
        "Auto power on:":["Auto power on:","Autom. einschalten:","Accensione automatica: ","Ligar automaticamente:","Encendido automático:","Mise en marche Auto:","Slå på automatisk:","Automatisk påsättning:","Automatisk tænd:","Automaattinen käynnistys:","自动开机:"],
        "Power on Timer":["Power on Timer:","Timer für Einschaltung:","Accensione del timer:","Temporizador para Ligar:","Encender el temporizador:","Minuteur Mise en marche:","Tidsur for å slå på:","Ström på timer:","Tænd Timer:","Virran kytkemisen ajastin:","自动开机时间:"],
        "Power off Timer":["Power off Timer:","Timer für Abschaltung:","Spegnimento del timer:","Temporizador para Desligar:","Apagar temporizador:","Minuteur Mise hors tension:","Tidsur for å slå av:","Avstängningtimer:","Sluk Timer:","Virran katkaisimen ajastin:","自动关机时间:"]

    },
    rewrite:function(pageData){
        //todo
        //  UpdateSettingTime(pageData,langIdx);

        var i;
        var _this = this,
            opeData = pageData.operateData;
//        $.each(pageData,function(key,val){
//
//            if(!key) return true;
//
//            var localData = pageData[key],
//                localOpeData =opeData[key];
//            switch(key)
//            {
////                case "setting_sys_ad_control1":
//                case "setting_sys_time_control1":
//                    //更新data里面的数据
//                    localData.Data.switchType = localOpeData.switchType;
//                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
//                    break;
//            }
//        })
        if(PageDataSettingSysTime.operateData.curdaylight==0)
        {
            PageDataSettingSysTime.setting_sys_time_ctrl_str2.Data =PageDataSettingSysTime.operateData.daylightsavingstr[0];
        }
        else
        {
            PageDataSettingSysTime.setting_sys_time_ctrl_str2.Data =PageDataSettingSysTime.operateData.daylightsavingstr[1];
        }
        if(PageDataSettingSysTime.operateData.curcountry=="AUS")
        {
            pageData.setting_sys_time_zone_str2.Data=pageData.operateData.auszonelist[pageData.operateData.curtimezone];

        }
        else
        {
            pageData.setting_sys_time_zone_str2.Data=pageData.operateData.curcountryzonelist[pageData.operateData.curtimezone];
            if(pageData.operateData.curcountryzonelist.length<=1)
            {
                pageData.setting_sys_time_btn1.disable=true;
                $("#setting_sys_time_zone_str1").css('color',"rgba(178,184,191,0.3)");
                $("#setting_sys_time_zone_str2").css('color',"rgba(178,184,191,0.3)");
            }
            else
            {
                pageData.setting_sys_time_btn1.disable=false;
                $("#setting_sys_time_zone_str1").css('color',"#f0f0f0");
                $("#setting_sys_time_zone_str2").css('color',"#b2b8bf");
            }
        }
        pageData.setting_sys_time_format_str2.Data=pageData.operateData.timeformatlist[pageData.operateData.curtimeforma];
        pageData.setting_sys_time_sleep_str2.Data=pageData.operateData.sleeptimerlist[pageData.operateData.cursleeptimer];
        if(pageData.operateData.curtime!="")
        {
            var temp1=pageData.operateData.curtime.substr(0, pageData.operateData.curtime.indexOf(':'));
            var temp2=pageData.operateData.curtime.split(":")[1];
            if((temp2+"").length<2)
            {
                temp2="0"+temp2;
            }
            if(pageData.operateData.curtimeforma==0)
            {
                if( temp1>11)
                {
                    if(temp1>12)
                    {
                        var temp=(parseInt(temp1,10)-12)+":"+temp2+" PM";

                    }
                    else
                    {
                        var temp=parseInt(temp1,10)+":"+temp2+" PM";

                    }

                }
                else
                {
                    if(temp1==0)
                    {
                        var temp="12"+":"+temp2+" AM";

                    }
                    else
                    {
                        var temp=parseInt(temp1,10)+":"+temp2+" AM" ;

                    }
                }
                pageData.setting_sys_time_date_str2.Data=temp+" "+pageData.operateData.curdate;
            }
            else
            {
                if((temp1+"").length<2)
                {
                    temp1="0"+temp1;
                }
                pageData.setting_sys_time_date_str2.Data=temp1+":"+temp2+" "+pageData.operateData.curdate;
            }
        }
       // pageData.setting_sys_time_poweron_fre.Data=pageData.operateData.seleltstrliat[pageData.operateData.curpoweronfre];
      //  pageData.setting_sys_time_poweroff_fre.Data=pageData.operateData.seleltstrliat[pageData.operateData.curpowerofffre];
        pageData.setting_sys_time_ul2.DataSelectedIndex=pageData.operateData.curpoweronfre;
        pageData.setting_sys_time_ul2.SelectedIndex=pageData.operateData.curpoweronfre;
        pageData.setting_sys_time_ul3.DataSelectedIndex=pageData.operateData.curpowerofffre;
        pageData.setting_sys_time_ul3.SelectedIndex=pageData.operateData.curpowerofffre;
        if(pageData.operateData.curpoweronfre==0)
        {
            pageData.setting_sys_time_poweron_time.Data="";
        }
        else if(pageData.operateData.curpoweronfre==1||pageData.operateData.curpoweronfre==2)
        {
            pageData.setting_sys_time_poweron_time.Data=ChangeInttoTime(pageData.operateData.curpowerontime,pageData.operateData.curtimeforma);
        }
//        else if(pageData.operateData.curpoweronfre==2)
//        {
//            pageData.setting_sys_time_poweron_time.Data=ChangeInttoTime(pageData.operateData.curpowerondailytime,pageData.operateData.curtimeforma);
//        }
        if(pageData.operateData.curpowerofffre==0)
        {
            pageData.setting_sys_time_poweroff_time.Data='';
        }
        else if(pageData.operateData.curpowerofffre==1||pageData.operateData.curpowerofffre==2)
        {
            pageData.setting_sys_time_poweroff_time.Data=ChangeInttoTime(pageData.operateData.curpowerofftime,pageData.operateData.curtimeforma);//pageData.operateData.curpoweroffoncetime;
        }
//        else if(pageData.operateData.curpowerofffre==2)
//        {
//            pageData.setting_sys_time_poweroff_time.Data=ChangeInttoTime(pageData.operateData.curpoweroffdailytime,pageData.operateData.curtimeforma);//pageData.operateData.curpoweroffdailytime;
//        }

        if(pageData.operateData.curpoweronfre==0)
        {
            pageData.setting_sys_time_btn4.disable=true;
            $("#setting_sys_time_poweron_str2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweron_time").css('color',"rgba(178,184,191,0.3)");
        }
        else
        {
            pageData.setting_sys_time_btn4.disable=false;
            $("#setting_sys_time_poweron_str2").css('color',"#f0f0f0");
            $("#setting_sys_time_poweron_time").css('color',"#b2b8bf");
        }
        if(pageData.operateData.curpowerofffre==0)
        {
            pageData.setting_sys_time_btn5.disable=true;
            $("#setting_sys_time_poweroff_str2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweroff_time").css('color',"rgba(178,184,191,0.3)");
        }
        else
        {
            pageData.setting_sys_time_btn5.disable=false;
            $("#setting_sys_time_poweroff_str2").css('color',"#f0f0f0");
            $("#setting_sys_time_poweroff_time").css('color',"#b2b8bf");
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_time_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
          //  $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
//            document.getElementById("setting_sys_time_img1").style.margin="29px 0 0 65px"  ;
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_lang1__cls").css("left","510px");
        }
        else {
            pageData.setting_sys_time_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right")
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
           // $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
           // document.getElementsByClassName("setting_sys_lang1_head_img1").margin="29px  65px 0 0"
//            document.getElementById("setting_sys_time_img1").style.margin="29px  65px 0 0"
            $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");
            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left")
            $(".setting_sys_lang1__cls").css("left","358px");
        }

    }

};

function SettingTimePageonOpen()
{
//    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
//      //  pageData.setting_sys_time_img1.Data="img/head_arrow.png";
//        $(".setting_page_line").css("float","left");
//        $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
//       // $(".setting_sys_lang1_head_img1").css("margin","29px 0 0 65px");
//        $(".setting_select_langpage2").css("float","left");
//        $(".setting_select_langpage3").css("float","left");
//        $(".setting_select_lang_focus").css("float","right")
//        $(".setting_select_langpage4").css("float","right")
//        $(".setting_select_lang_disable").css("float","right");
//        $(".setting_sys_lang1__cls").css("left","510px");
////        document.getElementById("setting_sys_time_img1").style.margin="29px 0 0 65px"
//    }
//    else {
//       // pageData.setting_sys_time_img1.Data="img/head_arrow_right.png";
//        $(".setting_page_line").css("float","right")
//        $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
//       // $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
////        document.getElementById("setting_sys_time_img1").style.margin="29px  65px 0 0"
//
//        $("#setting_sys_list1_srcobar_container").css("float","left");
//        $(".setting_select_langpage2").css("float","right");
//        $(".setting_select_langpage3").css("float","right");
//        $(".setting_select_lang_focus").css("float","left");
//        $(".setting_select_langpage4").css("float","left");
//        $(".setting_select_lang_disable").css("float","left")
//        $(".setting_sys_lang1__cls").css("left","358px");
//    }

//    var tempstring=$("#setting_sys_time_page").html();
//    debugE("tempstring"+(tempstring))
}

function SettingSysTimeUlleftHandler()
{
    if(this.SelectedIndex==0)
    {
        SettingSysTimeEscHandler();
    }
}
//function ChangeInttoTime(times, format)
//{
//    var time1=parseInt(times/3600)
//    var time2 =parseInt((times-time1*3600)/60);
//    var str="";
//    if((""+time2).length<2)
//    {
//        time2 ="0"+time2;
//    }
//    if(format==0)
//    {
//        if(time1>11){
//            time1=parseInt(time1)-12;
//            str=time1+":"+time2+" PM";
//
//        }
//        else
//        {
//            str=time1+":"+time2+" AM";
//
//        }
//
//    }
//    else
//    {
//        str=time1+":"+time2;
//
//    }
//    return str;
//}
function SettingSysTimefocushandler()
{
    var index;
    if(this.id=="setting_sys_time_btn1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_time_btn2")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_time_btn3")
    {
        index = 2;
    }
    else if(this.id=="setting_sys_time_control1")
    {
        index = 3;
    }
    else if(this.id=="setting_sys_time_ul2")
    {
        index = 4;
    }
    else if(this.id=="setting_sys_time_btn4")
    {
        index = 5;
    }
    else if(this.id=="setting_sys_time_ul3")
    {
        index = 6;
    }
    else if(this.id=="setting_sys_time_btn5")
    {
        index = 7;
    }
    else if(this.id=="setting_sys_time_btn6")
    {
        index = 8;
    }
    SettingFirUpdateHelpinfo(PageDataSettingSysTime.operateData.helplist[index].title,PageDataSettingSysTime.operateData.helplist[index].content)

}
function SettingSysTimeRefesh()
{

}
function SettingTimePageonDestroy()
{
    clearInterval(updatetimer);
    hiWebOsFrame.settingssystime = null;
}

function SettingSysTimeBtn1Enter()
{
    hiWebOsFrame.createPage('setting_sys_timelist_page', null, hiWebOsFrame.settingssystime, null, function (timelist) {
        PageDataSettingSystimeList.operateData.curoption="zone";
        if(PageDataSettingSysTime.operateData.curcountry=="AUS")
        {
            PageDataSettingSystimeList.operateData.curdatalist=PageDataSettingSysTime.operateData.auszonelist;
            PageDataSettingSystimeList.operateData.curselectindex=PageDataSettingSysTime.operateData.curtimezone;

        }
        else
        {
            PageDataSettingSystimeList.operateData.curdatalist=PageDataSettingSysTime.operateData.curcountryzonelist;
            PageDataSettingSystimeList.operateData.curselectindex=PageDataSettingSysTime.operateData.curtimezone;
        }
        hiWebOsFrame.settingssystimelist = timelist;
        hiWebOsFrame.settingssystimelist.rewrite();
        hiWebOsFrame.settingssystimelist.open();
        hiWebOsFrame.settingssystimelist.hiFocus();

    });
}
function SettingSysTimeBtn2Enter()
{
    hiWebOsFrame.createPage('setting_sys_timelist_page', null, hiWebOsFrame.settingssystime, null, function (timelist) {
        PageDataSettingSystimeList.operateData.curoption="format"
        PageDataSettingSystimeList.operateData.curdatalist=PageDataSettingSysTime.operateData.timeformatlist;
        PageDataSettingSystimeList.operateData.curselectindex=PageDataSettingSysTime.operateData.curtimeforma;
        hiWebOsFrame.settingssystimelist = timelist;
        hiWebOsFrame.settingssystimelist.rewrite();
        hiWebOsFrame.settingssystimelist.open();
        hiWebOsFrame.settingssystimelist.hiFocus();

    });
}
function SettingSysTimeBtn6Enter()
{
    hiWebOsFrame.createPage('setting_sys_timelist_page', null, hiWebOsFrame.settingssystime, null, function (timelist) {
        PageDataSettingSystimeList.operateData.curoption="sleep";
        PageDataSettingSystimeList.operateData.curdatalist=PageDataSettingSysTime.operateData.sleeptimerlist;
        PageDataSettingSystimeList.operateData.curselectindex=PageDataSettingSysTime.operateData.cursleeptimer;
        hiWebOsFrame.settingssystimelist = timelist;
        hiWebOsFrame.settingssystimelist.rewrite();
        hiWebOsFrame.settingssystimelist.open();
        hiWebOsFrame.settingssystimelist.hiFocus();

    });
}
function SettingSysTimeBtn3Enter()
{
    hiWebOsFrame.createPage('setting_sys_timedate_page', null, hiWebOsFrame.settingssystime, null, function (timedate) {
        hiWebOsFrame.settingssystimedate= timedate;
        PageDataSettingTimedate.operateData.curtimeforma=PageDataSettingSysTime.operateData.curtimeforma;
        PageDataSettingTimedate.operateData.cursyncmode=PageDataSettingSysTime.operateData.cursyncmode;
        PageDataSettingTimedate.operateData.curtime=PageDataSettingSysTime.operateData.curtime;
        PageDataSettingTimedate.operateData.curdate=PageDataSettingSysTime.operateData.curdate;
        SettingFirUpdateHelpinfo(PageDataSettingTimedate.operateData.helplist[0].title,PageDataSettingTimedate.operateData.helplist[0].content);
        hiWebOsFrame.settingssystimedate.open();
        hiWebOsFrame.settingssystimedate.hiFocus("setting_sys_timedata_control1");
        hiWebOsFrame.settingssystimedate.rewriteDataOnly();
    });
}
function SettingSysTimeBtn4Enter()
{
   // hiWebOsFrame.settingssystime.close();
//    hiWebOsFrame.createPage('setting_sys_time_standby_page', null, hiWebOsFrame.settingssystime, null, function (timedate) {
//        hiWebOsFrame.settingssystimestandby= timedate;
//        PageDataSettingTimesandby.operateData.parentpage=0// power on
//        PageDataSettingTimesandby.operateData.curtimeforma=PageDataSettingSysTime.operateData.curtimeforma;
//        if(PageDataSettingSysTime.operateData.curpoweronfre==1)
//        {
//            PageDataSettingTimesandby.operateData.curtime=PageDataSettingSysTime.operateData.curpowerononcetime;
//
//        }
//        else
//        {
//            PageDataSettingTimesandby.operateData.curtime=PageDataSettingSysTime.operateData.curpowerondailytime;
//        }
//        PageDataSettingTimesandby.operateData.patentmode=PageDataSettingSysTime.operateData.curpoweronfre;
//        hiWebOsFrame.settingssystimestandby.open();
//        hiWebOsFrame.settingssystimestandby.hiFocus("setting_sys_time_standby_btn1");
//        hiWebOsFrame.settingssystimestandby.rewriteDataOnly();
//
//    });

    if(PageDataSettingSysTime.operateData.curtimeforma==0)//12
    {
        hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingssystimedate, null, function (autotime) {
            PageDateSettingSysinputtime.operateData.curparent=0;
            PageDateSettingSysinputtime.operateData.curformat=0;//PageDataSettingSysTime.operateData.curtimeforma;
            PageDateSettingSysinputtime.operateData.patentmode=PageDataSettingSysTime.operateData.curpoweronfre;
            hiWebOsFrame.settingssysinputtime = autotime;
            hiWebOsFrame.settingssysinputtime.rewriteDataOnly();
            hiWebOsFrame.settingssysinputtime.open();
            hiWebOsFrame.settingssysinputtime.hiFocus("setting_sys_inputtime_div1");

        });
    }
    else
    {
        PageDateSettingSysautotime.operateData.curparent=0;
        PageDateSettingSysautotime.operateData.patentmode=PageDataSettingSysTime.operateData.curpoweronfre;
        PageDateSettingSysautotime.operateData.patentmode=PageDataSettingSysTime.operateData.curpoweronfre;
        hiWebOsFrame.settingssysautotime.open();
        hiWebOsFrame.settingssysautotime.hiFocus("setting_sys_autotime_input1");
    }
}
function SettingSysTimeBtn5Enter()
{
  //  hiWebOsFrame.settingssystime.close();
//    hiWebOsFrame.createPage('setting_sys_time_standby_page', null, hiWebOsFrame.settingssystime, null, function (timedate) {
//        hiWebOsFrame.settingssystimestandby= timedate;
//        PageDataSettingTimesandby.operateData.parentpage=1// power off
//        PageDataSettingTimesandby.operateData.curtimeforma=PageDataSettingSysTime.operateData.curtimeforma;
//        if(PageDataSettingSysTime.operateData.curpowerofffre==1)
//        {
//            PageDataSettingTimesandby.operateData.curtime=PageDataSettingSysTime.operateData.curpoweroffoncetime;
//
//        }
//        else
//        {
//            PageDataSettingTimesandby.operateData.curtime=PageDataSettingSysTime.operateData.curpoweroffdailytime;
//        }
//        PageDataSettingTimesandby.operateData.patentmode=PageDataSettingSysTime.operateData.curpowerofffre;
//        hiWebOsFrame.settingssystimestandby.open();
//        hiWebOsFrame.settingssystimestandby.hiFocus("setting_sys_time_standby_btn1");
//        hiWebOsFrame.settingssystimestandby.rewriteDataOnly();
//
//    });
    if(PageDataSettingSysTime.operateData.curtimeforma==0)//12
    {
        hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingssystimedate, null, function (autotime) {
            PageDateSettingSysinputtime.operateData.curparent=1;
            PageDateSettingSysinputtime.operateData.curformat=0;//PageDataSettingSysTime.operateData.curtimeforma;
            PageDateSettingSysinputtime.operateData.patentmode=PageDataSettingSysTime.operateData.curpowerofffre;
            hiWebOsFrame.settingssysinputtime = autotime;
            hiWebOsFrame.settingssysinputtime.rewriteDataOnly();
            hiWebOsFrame.settingssysinputtime.open();
            hiWebOsFrame.settingssysinputtime.hiFocus("setting_sys_inputtime_div1");

        });
    }
    else
    {
        PageDateSettingSysautotime.operateData.curparent=1;
        PageDateSettingSysautotime.operateData.curformat=PageDataSettingSysTime.operateData.curtimeforma;
        PageDateSettingSysautotime.operateData.patentmode=PageDataSettingSysTime.operateData.curpowerofffre;
        hiWebOsFrame.settingssysautotime.open();
        hiWebOsFrame.settingssysautotime.hiFocus("setting_sys_autotime_input1");
    }
}
function SettingSysTimeCtrlEnHandler(operateData,data)
{
    hiWebOsFrame.createPage('setting_sys_timelist_page', null, hiWebOsFrame.settingssystime, null, function (timelist) {
        PageDataSettingSystimeList.operateData.curoption="daylightsaving";
        PageDataSettingSystimeList.operateData.curdatalist=PageDataSettingSysTime.operateData.daylightsavingstr;
        PageDataSettingSystimeList.operateData.curselectindex=PageDataSettingSysTime.operateData.curdaylight;
        hiWebOsFrame.settingssystimelist = timelist;
        hiWebOsFrame.settingssystimelist.rewrite();
        hiWebOsFrame.settingssystimelist.open();
        hiWebOsFrame.settingssystimelist.hiFocus();

    });
//    var page = this.page;
//    if(operateData[this.id] != undefined)
//     operateData[this.id].switchType = !this.SwitchType;
//    if(this.id="setting_sys_time_control1")
//    {
//       // todo the js
//
//        if(!this.SwitchType)
//        {
//            model.timerfunc.setDaylightSavings(1);
//            debugPrint("set the daylight 1")
//        }
//        else
//        {
//            model.timerfunc.setDaylightSavings(0);
//            debugPrint("set the daylight 0")
//        }
//        RefreshCurTime();
//        SetRecentUse("Time",4,SYSTEM_TIME);
//    }
//    page.rewriteDataOnly();


}
function SettingSysTimeEscHandler()
{
    hiWebOsFrame.settingssystime.close();
    RefreshHelpInfo(4, 1);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    if(!!hiWebOsFrame.settingssystime)
    {
        hiWebOsFrame.settingssystime.destroy();
    }
    if(!!hiWebOsFrame.settingssysautotime)
    {
        hiWebOsFrame.settingssysautotime.destroy();
    }
    if(!!hiWebOsFrame.settingssystimestandby)
    {
        hiWebOsFrame.settingssystimestandby.destroy();
    }
    if(!!hiWebOsFrame.settingssystimedate)
    {
        hiWebOsFrame.settingssystimedate.destroy();
    }
    if(!!hiWebOsFrame.settingssysweekly)
    {
        hiWebOsFrame.settingssysweekly.destroy();
    }
    if(!!hiWebOsFrame.settingssystimelist)
    {
        hiWebOsFrame.settingssystimelist.destroy();
    }
    if(!!hiWebOsFrame.settingssysinputtime)
    {
        hiWebOsFrame.settingssysinputtime.destroy();
    }
    if(!!hiWebOsFrame.settingssysinputdate)
    {
        hiWebOsFrame.settingssysinputdate.destroy();
    }
    if(!!hiWebOsFrame.settingssysautotime)
    {
        hiWebOsFrame.settingssysautotime.destroy();
    }

}
//function SettingSysTimeUl1Enter()
//{
////todo 调整 select状态  js set
//    PageDataSettingSysTime.setting_sys_time_ul1.DataSelectedIndex=this.SelectedIndex;
//    this.page.rewrite();
////    PageDataSettingSysTime={
////
////        "setting_sys_time_img1":{Data:"img/head_arrow.png"},
////        "setting_sys_time_text1":{Data:"Time"},
////        "setting_sys_time_sync_str":{Data:"Auto Synchronization:"},
////        "setting_sys_time_sync_value":{Data:"TS Sync"},
////        "setting_sys_time_ul1": {Data:[
////            {"setting_sys_time_txt1": {Data:"TS sync"}},
////            {"setting_sys_time_txt1": {Data:"network sync"}}
////
////        ],
////            "disable":false,
////            "DataSelectedIndex":0,
////            "SelectedIndex":0
////        },
//
//}
function SettingSysTimeUl3Enter()
{
    if(this.SelectedIndex==0||this.SelectedIndex==1||this.SelectedIndex==2)
    {
        //todo 调整 select状态  js set
      //  PageDataSettingSysTime.setting_sys_time_ul3.DataSelectedIndex=this.SelectedIndex;
        PageDataSettingSysTime.operateData.curpowerofffre=this.SelectedIndex;
        if(this.page.operateData.curpowerofffre==0)
        {
            SetPoweoffMode(0);
            this.page.data.setting_sys_time_btn5.disable=true;
            this.page.rewriteDataOnly();
            $("#setting_sys_time_poweroff_str2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweroff_time").css('color',"rgba(178,184,191,0.3)");
        }
        else
        {
            SetPoweoffMode(this.SelectedIndex);
            this.page.data.setting_sys_time_btn5.disable=false;
            this.page.rewriteDataOnly();
            $("#setting_sys_time_poweroff_str2").css('color',"#f0f0f0");
            $("#setting_sys_time_poweroff_time").css('color',"#b2b8bf");
        }

    }
//    else
//    {
//      //  PageDataSettingSysTime.operateData.curpowerofffre=this.SelectedIndex+2;
////        this.page.close();
////        hiWebOsFrame.settingsFirst.close();
//        hiWebOsFrame.settingssyslist1.operateData.parentpage="powerofffre";
//
//        if(this.page.operateData.curpowerofffre==4)
//        {
//            hiWebOsFrame.settingssyslist1.operateData.curselectlist=this.page.operateData.curpoweroffweekly;
//        }
//        else
//        {
//            hiWebOsFrame.settingssyslist1.operateData.curselectlist=null;
//        }
//        hiWebOsFrame.settingssyslist1.operateData.curdatatype=0;
//        hiWebOsFrame.settingssyslist1.rewriteDataOnly();
//        hiWebOsFrame.settingssyslist1.open();
//        hiWebOsFrame.settingssyslist1.hiFocus();
//    }
    SetRecentUse("Time",4,SYSTEM_TIME);
}
function SettingSysTimeUl2Enter()
{
    if(this.SelectedIndex==0||this.SelectedIndex==1||this.SelectedIndex==2)
    {
        //todo 调整 select状态  js set
     //   PageDataSettingSysTime.setting_sys_time_ul2.DataSelectedIndex=this.SelectedIndex;
        PageDataSettingSysTime.operateData.curpoweronfre=this.SelectedIndex;
        if( this.page.operateData.curpoweronfre==0)
        {
            //todo 如果关闭对页面进行disable
            SetPoweonMode(0);
            this.page.data.setting_sys_time_btn4.disable=true;
            this.page.rewriteDataOnly();
            $("#setting_sys_time_poweron_str2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweron_time").css('color',"rgba(178,184,191,0.3)");


        }
        else
        {
            //todo 恢复为使能情况
            SetPoweonMode(this.SelectedIndex);
            this.page.data.setting_sys_time_btn4.disable=false;
            this.page.rewriteDataOnly();
            $("#setting_sys_time_poweron_str2").css('color',"#f0f0f0");
            $("#setting_sys_time_poweron_time").css('color',"#b2b8bf");
            hiWebOsFrame.createPage('setting_sys_time_info_dialog',null, null, null,function(page){
                hiWebOsFrame.settingsystimeinfo=page;
                page.open();
                page.hiFocus();

            });
           setTimeout(closeinfo,3 * 1000);

        }
    }
//    else
//    {
////        this.page.close();
////        hiWebOsFrame.settingsFirst.close();
//        hiWebOsFrame.settingssyslist1.operateData.parentpage="poweronfre";
//       // PageDataSettingSysTime.operateData.curpoweronfre=this.SelectedIndex+2;
//        if(this.page.operateData.curpoweronfre==4)
//        {
//            hiWebOsFrame.settingssyslist1.operateData.curselectlist=this.page.operateData.curpoweronweekly;
//        }
//        else
//        {
//            hiWebOsFrame.settingssyslist1.operateData.curselectlist=null;
//        }
//        hiWebOsFrame.settingssyslist1.operateData.curdatatype=0;
//        hiWebOsFrame.settingssyslist1.rewriteDataOnly();
//        hiWebOsFrame.settingssyslist1.open();
//        hiWebOsFrame.settingssyslist1.hiFocus();
//    }
    SetRecentUse("Time",4,SYSTEM_TIME);

}
function closeinfo() {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close time info ")
        hiWebOsFrame.settingsystimeinfo.close();
        hiWebOsFrame.settingsystimeinfo.destroy();
        hiWebOsFrame.settingssystime.open();
        hiWebOsFrame.settingssystime.hiFocus();
    }
    else
    {
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsystimeinfo.close();
        hiWebOsFrame.settingsystimeinfo.destroy();
    }
}

var STANDY_DELAY=1<<0;
var STANDY_ONCE=1<<1;
var STANDY_DAILY=1<<2;
var ALARM_DELAY=1<<7;
var ALARM_ONCE=1<<8;
//var ALARM_DAILY=(1<<9);
var ALARM_DAILY=(1<<10|1<<11|1<<12);
//var ALARM_WEEKLY=1<<10;
//var ALARM_SATURDAY=1<<11;
//var ALARM_SUNDAY=1<<12;
function SettingTimerinit()
{
   try
   {   var temp;
       var country=model.basicSetting.getTvsetLocation();
       PageDataSettingSysTime.operateData.curcountry=country;
        if(country=="AUS")
        {

            temp=model.timerfunc.getTimeZone();
            PageDataSettingSysTime.operateData.curtimezone=temp;
        }
        else
        {
            var zonelist=getCountryToZoneMapList();
            var i;
            debugPrint("zonelist"+JSON.stringify(zonelist));
            var index1=_getIndexByCode(zonelist,country);
            if(index1>-1)
            {
                temp=model.timerfunc.getNewTimeZone();
                debugPrint("getTimeZone is  "+temp);
                PageDataSettingSysTime.operateData.curcountryzonelist=zonelist[index1].osdtimezonelist;
                PageDataSettingSysTime.operateData.curcountryzonecode=zonelist[index1].supportzonelist;
                for(i=0;i<zonelist[index1].supportzonelist.length;i++)
                {
                   // debugPrint("the zone is "+PageDataSettingSysTime.operateData.zoncode[zonelist[index1].supportzonelist[i]])
                    if(temp==PageDataSettingSysTime.operateData.zoncode[zonelist[index1].supportzonelist[i]])
                    {
                        PageDataSettingSysTime.operateData.curtimezone=i;
                        break;
                    }
                }
                if(i>zonelist[index1].supportzonelist.length-1)
                {
                    model.timerfunc.setNewTimeZone(PageDataSettingSysTime.operateData.zoncode[zonelist[index1].supportzonelist[zonelist[index1].defzone]]);
                    PageDataSettingSysTime.operateData.curtimezone=zonelist[index1].defzone;
                    debugPrint(" the time zone error to fix it ")

                }
                debugPrint("curtimezone"+PageDataSettingSysTime.operateData.curtimezone)
            }
            else
            {
                debugE(" the country list error ");
            }
        }

       temp=model.timerfunc.getTimeFormat();
       debugPrint("getTimeFormat is "+temp);
       if(temp==0)
       {
           PageDataSettingSysTime.operateData.curtimeforma=0;
       }
       else
       {
           PageDataSettingSysTime.operateData.curtimeforma=1;
       }
       temp=model.timerfunc.getSyncMode();
       debugPrint("getSyncMode is "+temp);
       if(temp==0)
       {
           PageDataSettingSysTime.operateData.cursyncmode=0;
       }
       else
       {
           PageDataSettingSysTime.operateData.cursyncmode=1;
       }
        PageDataSettingSysTime.operateData.curdaylight=model.timerfunc.getDaylightSavings();
       debugPrint("curdaylight is "+ PageDataSettingSysTime.operateData.curdaylight);
       if(PageDataSettingSysTime.operateData.curdaylight<0||PageDataSettingSysTime.operateData.curdaylight>1)
       {
           debugE("daylight is error ")
           model.timerfunc.setDaylightSavings(0) ;
           PageDataSettingSysTime.operateData.curdaylight=0
       }
//       if(PageDataSettingSysTime.operateData.curdaylight==1)
//       {
//       PageDataSettingSysTime.operateData.setting_sys_time_control1.switchType=true;
//       }
//       else
//       {
//           PageDataSettingSysTime.operateData.setting_sys_time_control1.switchType=false;
//
//       }
       PageDataSettingSysTime.operateData.curpowerofffre=model.timerfunc.getStandbyMode();
       debugPrint("curpowerofffre"+PageDataSettingSysTime.operateData.curpowerofffre);

       temp=model.timerfunc.getStandbyTime();
       if(temp<0)
       {
            PageDataSettingSysTime.operateData.curpowerofftime=-1;
           // PageDataSettingSysTime.operateData.curpoweroffdailytime=-1;
       }
       else
       {

            PageDataSettingSysTime.operateData.curpowerofftime=temp;
           // PageDataSettingSysTime.operateData.curpoweroffdailytime=temp;
       }
     //  PageDataSettingSysTime.operateData.curpoweroffweekly=model.timerfunc.getStandbyWeekly();
     //  debugPrint("get the weekly!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(PageDataSettingSysTime.operateData.curpoweroffweekly));
       PageDataSettingSysTime.operateData.curpoweronfre=model.timerfunc.getAlarmMode();
       debugPrint("curpoweronfre"+PageDataSettingSysTime.operateData.curpoweronfre);
       temp=model.timerfunc.getAlarmTime();
       debugPrint("getAlarmTime"+temp);

       if(temp<0)
       {
           PageDataSettingSysTime.operateData.curpowerontime=-1;
          // PageDataSettingSysTime.operateData.curpowerondailytime=-1;
       }
       else
       {

           PageDataSettingSysTime.operateData.curpowerontime=temp;
          // PageDataSettingSysTime.operateData.curpowerondailytime=temp;
       }
     //  PageDataSettingSysTime.operateData.curpoweronweekly=model.timerfunc.getAlarmWeekly();
     //  debugPrint("get the curpoweronweekly!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(PageDataSettingSysTime.operateData.curpoweronweekly));

       var temp=model.timerfunc.getHotelmodeSleepTimer();
       debugPrint("get the tv getHotelmodeSleepTimer is?????????????????????? "+temp);
     //  var index=_getIndex(PageDataSettingSysTime.operateData.sleeplist,temp);
       if(temp>-1&&temp<9)
       {
           PageDataSettingSysTime.operateData.cursleeptimer=temp;
       }
       else
       {
           debugPrint("the cursleeptimer index error");
           PageDataSettingSysTime.operateData.cursleeptimer=0;
       }
//       temp=model.timerfunc.getCurTime()*1000;
//       debugPrint("get the curtime is "+temp);
//       var curdate=changUTCtostring(temp,0,false);
//       PageDataSettingSysTime.operateData.curtime=curdate.time;
//       PageDataSettingSysTime.operateData.curdate=curdate.date;
//       debugPrint("get the curtime is "+PageDataSettingSysTime.operateData.curtime);
//     //  SettingTimeSetSysUTC(curdate.date,curdate.time,0,false)
       temp=model.timerfunc.getCurLocalTime();
       debugPrint("get cur local time "+temp);
       var curdate=changLocaltimetostring(temp);
       PageDataSettingSysTime.operateData.curtime=curdate.time;
       PageDataSettingSysTime.operateData.curdate=curdate.date;
//       var list=[
//           2014,1,3,4,55,56
//       ]
//       model.timerfunc.setCurLocalTime(list);
   }catch(e)
   {
       debugE(e)
   }
   updatetimer=setInterval(mytimerupdatefunc,30000);
}
function SetPoweonMode(type)
{
    debugPrint("SetPoweonMode "+type);
    model.timerfunc.setAlarmMode(type);
    PageDataSettingSysTime.operateData.curpoweronfre=type;
//    if(type==0)//OFF
//    {
//        PageDataSettingSysTime.operateData.curalrmsource= PageDataSettingSysTime.operateData.curalrmsource&(~(ALARM_DAILY|ALARM_ONCE))
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//        PageDataSettingSysTime.operateData.curpoweronfre=2;
//    }
//    else if(type==1)//ONCE
//    {
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(ALARM_ONCE))&(~(ALARM_DAILY));
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//        PageDataSettingSysTime.operateData.curpoweronfre=3;
//    }
//    else if(type==2)//
//    {
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(ALARM_DAILY))&(~(ALARM_ONCE));
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//        PageDataSettingSysTime.operateData.curpoweronfre=4;
//    }
//    debugPrint("curalrmsource "+PageDataSettingSysTime.operateData.curalrmsource);


}
//function SetPoweronTime(higevalue,lowvalue)
//{
//    var temp=parseInt(higevalue)*3600+parseInt(lowvalue)*60;
//    debugPrint("SetPoweronTime "+higevalue+":"+lowvalue+":"+temp);
//    if (PageDataSettingSysTime.operateData.curpoweronfre==1)
//    {
//        model.timerfunc.setAlarmOnce(parseInt(higevalue)*3600+parseInt(lowvalue)*60);
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(ALARM_ONCE))&(~(ALARM_DAILY));
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//
//    }
//    else if (PageDataSettingSysTime.operateData.curpoweronfre==2)
//    {
//
//        model.timerfunc.setAlarmWeekday(parseInt(higevalue)*3600+parseInt(lowvalue)*60);
//        model.timerfunc.setAlarmSaturday(parseInt(higevalue)*3600+parseInt(lowvalue)*60);
//        model.timerfunc.setAlarmSunday(parseInt(higevalue)*3600+parseInt(lowvalue)*60);
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(ALARM_DAILY))&(~(ALARM_ONCE));
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//        debugPrint("hhhhhhhhhhhhhhhhhhhset the setAlarmDaily")
//
//    }
//}
/*******************************************************************
 name:设置定时关机的频率
 description：设置定时关机
 input:currStep:
 output:
 return
 *******************************************************************/
function SetPoweoffMode(type)
{
    debugPrint("SetPoweoffMode "+type);
    model.timerfunc.setStandbyMode(type);
//    if(type==0)//OFF
//    {
//        PageDataSettingSysTime.operateData.curalrmsource= PageDataSettingSysTime.operateData.curalrmsource&(~(STANDY_ONCE|STANDY_DAILY))
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//    }
//    else if(type==1)//ONCE
//    {
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(STANDY_ONCE))&(~(STANDY_DAILY));
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//    }
//    else if(type==2)//
//    {
//        debugPrint("curalrmsource "+PageDataSettingSysTime.operateData.curalrmsource);
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(STANDY_DAILY))&(~(STANDY_ONCE));
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//    }
//    debugPrint("curalrmsource "+PageDataSettingSysTime.operateData.curalrmsource);


}
//function SetPoweroffTime(higevalue,lowvalue)
//{

//    var temp=parseInt(higevalue)*3600+parseInt(lowvalue)*60;
//    debugPrint("SetPoweroffTime "+higevalue+":"+lowvalue+":"+temp);
//    if (PageDataSettingSysTime.operateData.curpowerofffre==1)
//    {
//
//        model.timerfunc.setStandbyOnce(parseInt(higevalue)*3600+parseInt(lowvalue)*60);
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(STANDY_ONCE))&(~(STANDY_DAILY));
//        debugPrint("curalrmsource"+PageDataSettingSysTime.operateData.curalrmsource);
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//
//    }
//    else if (PageDataSettingSysTime.operateData.curpowerofffre==2)
//    {
//
//        model.timerfunc.setStandbyDaily(parseInt(higevalue)*3600+parseInt(lowvalue)*60);
//        PageDataSettingSysTime.operateData.curalrmsource= (PageDataSettingSysTime.operateData.curalrmsource|(STANDY_DAILY))&(~(STANDY_ONCE));
//        debugPrint("curalrmsource"+PageDataSettingSysTime.operateData.curalrmsource);
//
//        model.timerfunc.setAlarmSource(PageDataSettingSysTime.operateData.curalrmsource);
//
//    }

//}

function addZero(UTCTime)
{
    if(UTCTime<10)
        return "0"+UTCTime.toString();
    else
        return UTCTime.toString();
}
function ChangeUTCToDate(UTCTime)
{

    var c=":";
    var s="";
    var d= new Date(UTCTime);
    s=s+d.getUTCFullYear()+"-"+addZero((d.getUTCMonth()+1))+"-"+addZero(d.getUTCDate())+" "+addZero(d.getUTCHours())+":"+addZero(d.getUTCMinutes())+":"+addZero(d.getUTCSeconds());

}
//function longTimeToString(longTime) {
//    var d = new Date(longTime);
//
//    var h = '0' + d.getHours();
//    var m = '0' + d.getMinutes();
//
//    return h.slice(-2) + ':' + m.slice(-2);
//}

function mytimerupdatefunc()
{
    //-GHL_DEL-//console.log("in the mytimerupdatefunc");
    //todo get the new time and date of the system
    if(PageDataSettingSysTime.operateData.curtime!="")
    {
//        var temp=model.timerfunc.getCurTime()*1000;
//        debugPrint("get the curtime is "+temp);
//        var curdate=changUTCtostring(temp,0,false);
//        PageDataSettingSysTime.operateData.curtime=curdate.time;
//        PageDataSettingSysTime.operateData.curdate=curdate.date;
        var temp=model.timerfunc.getCurLocalTime();

        debugPrint("get cur local time "+temp);
        var curdate=changLocaltimetostring(temp);
        PageDataSettingSysTime.operateData.curtime=curdate.time;
        PageDataSettingSysTime.operateData.curdate=curdate.date;
    }
   if(!!hiWebOsFrame.settingssystime)
   {

       hiWebOsFrame.settingssystime.rewriteDataOnly();
   }
    if(!!hiWebOsFrame.settingssystimedate)
    {
        PageDataSettingTimedate.operateData.curtime=PageDataSettingSysTime.operateData.curtime;
        PageDataSettingTimedate.operateData.curdate=PageDataSettingSysTime.operateData.curdate;
        hiWebOsFrame.settingssystimedate.rewriteDataOnly();
    }

}
// to use update the time according to the time zone and the other daylight saving
function RefreshCurTime()
{
    var temp=model.timerfunc.getCurLocalTime();
    debugPrint("get cur local time "+temp);
    var curdate=changLocaltimetostring(temp);
    PageDataSettingSysTime.operateData.curtime=curdate.time;
    PageDataSettingSysTime.operateData.curdate=curdate.date;
    if(!!hiWebOsFrame.settingssystime)
    {
       //// to get time
        hiWebOsFrame.settingssystime.rewriteDataOnly();
    }
    if(!!hiWebOsFrame.settingssystimedate)
    {
        PageDataSettingTimedate.operateData.curtime=PageDataSettingSysTime.operateData.curtime;
        hiWebOsFrame.settingssystimedate.rewriteDataOnly();
    }

}

function  changUTCtostring(i64utc, timezone, daylightflag)
{
    // var dateFormatString = "yyyy-MM-dd hh:mm:ss";
    i64utc=parseInt(i64utc,10)+parseInt(timezone*3600*1000,10);
    if(daylightflag)
    {
        i64utc=i64utc+3600*1000;
    }
    debugPrint("i64utc"+i64utc);//local time
    var a=new Date(i64utc);
    debugPrint(a);
    debugPrint("currenyear"+ a.getFullYear());
    debugPrint("currenyear"+ (a.getMonth()+1));
    debugPrint("currentday"+ a.getDate());
    debugPrint("currenyear"+ a.getHours());
    debugPrint("currenyear"+ a.getMinutes());
    debugPrint("currenyear"+ a.getSeconds());
    var returnvalue={
        "date":"",
        "time":""
    };
    returnvalue.date=parseInt((a.getMonth()+1),10)+"/"+a.getDate()+"/"+a.getFullYear();
    returnvalue.time=a.getHours()+":"+a.getMinutes();
    return returnvalue;
    //to get the cur time.
}
function  changLocaltimetostring(time)
{

    var returnvalue={
        "date":"",
        "time":""
    };
    if(time.length==6)
    {
        if(hiWebOsFrame.getCurrentArea()=="SA")
        {
            returnvalue.date=time[2]+"/"+time[1]+"/"+time[0];

        }
        else {
            returnvalue.date=time[1]+"/"+time[2]+"/"+time[0];

        }
        returnvalue.time=time[3]+":"+time[4];
    }
//    i64utc=parseInt(i64utc,10)+parseInt(timezone*3600*1000,10);
//    if(daylightflag)
//    {
//        i64utc=i64utc+3600*1000;
//    }
//    debugPrint("i64utc"+i64utc);//local time
//    var a=new Date(i64utc);
//    debugPrint(a);
//    debugPrint("currenyear"+ a.getFullYear());
//    debugPrint("currenyear"+ (a.getMonth()+1));
//    debugPrint("currentday"+ a.getDate());
//    debugPrint("currenyear"+ a.getHours());
//    debugPrint("currenyear"+ a.getMinutes());
//    debugPrint("currenyear"+ a.getSeconds());
//    var returnvalue={
//        "date":"",
//        "time":""
//    };
//    returnvalue.date=parseInt((a.getMonth()+1),10)+"/"+a.getDate()+"/"+a.getFullYear();
//    returnvalue.time=a.getHours()+":"+a.getMinutes();
    return returnvalue;
    //to get the cur time.
}
function changstringtoUTC(timezone,daylightflag)
{
    var d = new Date(2009, 2, 27, 2, 59, 59, 999);//local time
    var i64utc= d.getTime();
    i64utc=parseInt(i64utc,10)-parseInt(timezone*3600*1000,10);
    if(daylightflag)
    {
        i64utc=i64utc-3600*1000;
    }
    debugPrint("the utc time is"+i64utc);
    // to set the model cur time
}

function SettingTimeSetSysUTC(date,time,timezone,daylightflag)
{
    var year=0;
    var month=0;
    var day=0;
    var hours=0;
    var min=0;
    var second=0;
    month=parseInt(date.substr(0, date.indexOf('/')),10)-1;
    var temp=date.lastIndexOf('/');
    var temp=(date.length-1);
    var temp=date.indexOf('/');
    year=parseInt(date.substr((date.lastIndexOf('/')+1),(date.length-1)),10);
    day=parseInt(date.substr((date.indexOf('/')+1),(date.lastIndexOf('/')-1)),10);
    debugPrint("month"+month+"day"+day+"year:"+year);
    hours=parseInt(time.substr(0, time.indexOf(':')),10);
    min=parseInt(time.split(":")[1],10);
    debugPrint("hours"+hours+"second"+second);
    var d = new Date(year, month, day, hours, min, 00, 999);//local time
    var i64utc= d.getTime();
    debugPrint("i64utc"+i64utc);
    i64utc=parseInt(i64utc,10)-parseInt(timezone*3600*1000,10);
    if(daylightflag)
    {
        i64utc=i64utc-3600*1000;
    }
    a=new Date(i64utc);
    //-GHL_DEL-//console.log(a);
    i64utc=parseInt((i64utc/1000),10);
    debugPrint("the utc time is"+i64utc);
    model.timerfunc.setCurTime(i64utc);
}

function SettingTimeSetLocaltime(date,time)
{
try
{
    var list=[];
    var year=0;
    var month=0;
    var day=0;
    var hours=0;
    var min=0;
    var second=0;
    if(hiWebOsFrame.getCurrentArea()=="SA")
    {
        day=parseInt(date.substr(0, date.indexOf('/')),10);
        year=parseInt(date.substr((date.lastIndexOf('/')+1),(date.length-1)),10);
        month=parseInt(date.substr((date.indexOf('/')+1),(date.lastIndexOf('/')-1)),10);
        debugPrint("month"+month+"day"+day+"year:"+year);
    }
    else
    {
        month=parseInt(date.substr(0, date.indexOf('/')),10);
        year=parseInt(date.substr((date.lastIndexOf('/')+1),(date.length-1)),10);
        day=parseInt(date.substr((date.indexOf('/')+1),(date.lastIndexOf('/')-1)),10);
        debugPrint("month"+month+"day"+day+"year:"+year);
    }

    hours=parseInt(time.substr(0, time.indexOf(':')),10);
    min=parseInt(time.split(":")[1],10);
    debugPrint("hours"+hours+"second"+second);
    list[0]=parseInt(year);
    list[1]=parseInt(month);
    list[2]=parseInt(day);
    list[3]=parseInt(hours);
    list[4]=parseInt(min);
    list[5]=parseInt(second);
    debugPrint("the list is "+JSON.stringify(list));
    model.timerfunc.setCurLocalTime(list);
    debugPrint("set tht time end");
   }catch (e)
   {
    debugPrint(e.message);
   }
}
