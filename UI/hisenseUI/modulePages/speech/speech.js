var VoiceHelp_Data = {
    Voice_assistant_bottom_3: {Data: ""},
    Voice_assistant_bottom_span_1: {Data: ''},
    "operateData": {
        "speakIndex": 0,
        "speechState": 4,
        "voiceChange": 0,
        "manVolume": 10,
        Voice_assistant_bottom_3: "",
        resultType: 4,
        resultSubtype: 0,
        resultInt: 1,
        resultString: 'AudioSettingsMenu',
        Voice_assistant_bottom_span_1: '',
        SpeakTip: {
            English:"Please speak",German:"Bitte sprechen",Italian:"Si prega di parlare",
            Spanish:"Por favor, hable",French:"Veuillez parler",
            Portuguese:"Por favor fale",Russian:"Говорите"
        },
        SpeechTip: [
            {
                English: "Recording", German: "Wird aufgezeichnet",
                Italian: "Registrazione", Spanish: "Grabación", French: "Enregistrement",
                Portuguese: "A gravar", Russian: "Запись"
            },
            {
                English: "Loading", German: "Wird geladen", Italian: "Caricamento in corso",
                Spanish: "Cargando", French: "Chargement", Portuguese: "A carregar",
                Russian: "Загрузка"
            }
        ],

        appRefreshState:0,
        channelRefreshState:0,
        Countrylanguage:0,
        speechVo:true,
        ChannelName:[],
        ChannelInfoItem:[],
        showResult: {
            "openHelp": {
                English: "help", German: "Hilfe", Italian: "Aiuto", Spanish: "ayuda",
                French: "Assitance", Portuguese: "Ajuda", Russian: "помощь"
            },
            "MuteOn": {
                English:"Mute",German:"Stumm",Italian:"Muto",Spanish:"Silencio",
                French:"Activer Muet",Portuguese:"Mudo",Russian:"Звук выкл."
            },
            "MuteOff": {
                English: "Unmute", German: "Ton einschalten", Italian: "Non muto", Spanish: "Desactivar silencio",
                French: "Rétablir le volume", Portuguese: "Não mudo", Russian: "Звук вкл."
            },

            "openInputList": {
                English:"Open input list",German:"Eingabeliste öffnen",Italian:"Aprire la lista di input",Spanish:"Abrir la lista de entrada",
                French:"Ouvrir la liste des Sources",Portuguese:"Abrir a lista de sinal de entrada",Russian:"Открыть список входов"
            },
            "Settings":{
                English:"Open Settings",German:"Einstellungen öffnen",Italian:"Aprire Impostazioni",Spanish:"Abrir Configuración",
                French:"Ouvrir le menu de configuration",Portuguese:"Abrir Configurações",Russian:"Открыть Настройки"
            },
            "home": {
                English:"Go Home",German:"Zur Startseite gehen",Italian:"Andare alla Home",Spanish:"Ir a Inicio",
                French:"Aller sur la page d'accueil",Portuguese:"Ir para Início",Russian:"Перейти на домашнюю страницу"
            },
            "Tips": {
                English:"No results",German:"Keine Ergebnisse",Italian:"Nessun risultato",Spanish:"No hay resultados",
                French:"Aucun résultats",Portuguese:"Sem resultados",Russian:"Нет результатов"
            },
            "VolumeNumber": {
                English:"Turn the volume to",German:"Wähle Lautstärke",Italian:"Metti il volume su",Spanish:"Cambiar el volumen a",
                French:"Mettre le volume à",Portuguese:"Mudar o volume para",Russian:"Установить уровень громкости на"
            },
            "Apps": {
                English:"Go to",German:"Gehe zu",Italian:"Vai a",Spanish:"Ir a",
                French:"Aller à",Portuguese:"Ir para",Russian:"Перейти к"
            },
            "ChannelUp": {
                English:"Channel up",German:"Sender vorwärts",Italian:"Canale successivo",Spanish:"Canal siguiente",French:"Chaîne suivante",
                Portuguese:"Canal seguinte",Russian:"Канал вверх"
            },
            "ChannelDowm": {
                English:"Channel down",German:"Sender rückwärts",Italian:"Canale precedente",Spanish:"Canal anterior",French:"Chaîne précédente",
                Portuguese:"Canal anterior",Russian:"Канал вниз"
            },
            "GoogleSearch": {
                English:"Open the browser",German:"Browser öffnen",Italian:"Aprire il browser",
                Spanish:"Abrir el navegador",French:"Ouvrir le navigateur",
                Portuguese:"Abrir o navegador",Russian:"Открыть браузер"
            },
            "ChannelNumber": {
                English:"Turn to Channel",German:"Umschalten auf",Italian:"Vai al Canale",
                Spanish:"Cambiar a canal",French:"Passer à la chaîne",
                Portuguese:"Mudar para o canal",Russian:"Переключиться на канал"
            },
            "AudioOnly": {
                English:"Audio Only",German:"Nur Audio",Italian:"Solo audio",
                Spanish:"Solo audio",French:"Audio seulement",
                Portuguese:"Apenas Áudio",Russian:"Только аудио"
            }

        },
        errorCodeTips:[
            "Voice service is normal",
            "Voice service unavailable",
            "Voice service in process",
            "Voice service error"],
        "inputTip": [
            {name: "av", inputTip: "Go to AV"},
            {name: "tv", inputTip: "Go to TV"},
            {name: "hdmi1", inputTip: "Go to HDMI1"},
            {name: "hdmi2", inputTip: "Go to HDMI2"},
            {name: "hdmi3", inputTip: "Go to HDMI3"},
            {name: "hdmi4", inputTip: "Go to HDMI4"},
            {name: "component", inputTip: "Go to Component"}
        ],
        App: [{"tagType": "57",
            "txts": ["Media", "YouTube", "Dailymotion", "AccuWeather", "Picasa", "TV Browser", "Opera TV Store", "Game Center", "Anyview Cast", "Viewster", "TED", "Facebook", "tvitter", "VIAWAY", "Toon Googles", "YuppTV", "AOL On", "Plex", "Golf TV"],
            "urls": ["media", "youtube", "dailymotion", "accuweather", "picasa", "browser", "appstore", "gamecenter", "miracast", "https://hisense.tvstore.opera.com:84/api/tvapps/runapp/viewster-2/?closeWindow=1", "https://hisense.tvstore.opera.com:84/api/tvapps/runapp/ted/?closeWindow=1", "https://hisense.tvstore.opera.com:84/api/tvapps/runapp/facebook/?closeWindow=1", "https://hisense.tvstore.opera.com:84/api/tvapps/runapp/tvitter/?closeWindow=1", "http://www.viaway.com/CE/hisense.aspx", "http://html5.toongoggles.com/", "http://www.yupptv.com/hisense/index.html", "http://hd.aol.com/app/v3_aolon/tv/html5-hisense/index.html", "http://plex.tv/web/tv/hisense", "https://hisense.tvstore.opera.com:84/api/tvapps/runapp/golf-tv/?closeWindow=1"],
            "urlTypes": [37, 37, 37, 37, 37, 37, 37, 37, 37, 36, 36, 36, 36, 37, 37, 37, 37, 37, 36],
            "storeTypes": [95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95]
        }],

        AppName: [],

        "speechLanList": {
            "EM":["English","French","Spanish","Russian"],
            "EU":["English","French","German", "Italian","Spanish"],
            "SA":["English","Spanish","Portuguese"]
        },
        "SetspeechLanList": {
            "EM": ["English","French", "Spanish", "Russian"],
            "EU": ["English", "French", "German", "Italian", "Spanish"],
            "SA": ["English", "Spanish", "Portuguese"]
        },
        speechSetList: {
            EM: {
                "English": 1,
                "French": 3,
                "Spanish": 8,
                "Russian": 7
            },
            EU: {
                "English": 1,
                "French": 3,
                "German": 4,
                "Italian": 5,
                "Spanish": 8
            },
            SA: {
                "English": 0,
                "Spanish": 9,
                "Portuguese": 6
            }
        },
        speechDefaultMap: ["English", "English", "English", "French",
            "German", "Italian", "Portuguese"
            , "Russian", "Spanish", "Spanish"],
        currentArea:"",
        speechLanMap:{
            "indonesia":"English",
            "india":"English",
            "vietnam":"English",
            "iran":"English",
            "thailand":"English",
            "israel":"English",
            "south africa":"English",
            "morocco":"English",
            "egypt":"English",
            "uganda":"English",
            "tanzania":"English",
            "nigeria":"English",
            "mauritius":"English",
            "mozambique":"Portuguese",
            "algeria":"French",
            "libya":"English",
            "angola":"Portuguese",
            "ghana":"English",
            "madagascar":"French",
            "cameroon":"English",
            "sudan":"English",
            "djibouti":"French",
            "benin":"French",
            "sierra leone":"English",
            "coate d'ivoire":"French",
            "ethiopia":"English",
            "zimbabwe":"English",
            "congo-kinshasa":"French",
            "kuwait":"English",
            "jordan":"English",
            "saudi arabia":"English",
            "iraq":"English",
            "yemen":"English",
            "uae":"English",
            "qatar":"English",
            "oman":"English",
            "philippines":"English",
            "malaysia":"English",
            "myanmar":"English",
            "sri lanka":"English",
            "republic of liberia":"English",
            "uzbekistan":"Russian",
            "the kyrgyz republic":"Russian",
            "turkmenistan":"Russian",
            "turkey":"English",
            "ukraine":"Russian",
            "azerbaijan":"Russian",
            "georgia":"Russian",
            "armenia":"Russian",
            "venezuela":"Spanish",
            "argentina":"Spanish",
            "panama":"Spanish",
            "uruguay":"Spanish",
            "Germany":"German",
            "austria":"English",
            "italy":"Italian",
            "england":"English",
            "spain":"Spanish",
            "france":"French",
            "switzerland":"French",
            "portugal":"Portuguese",
            "sweden":"English",
            "denmark":"English",
            "finland":"English",
            "norway":"English",
            "czech":"English",
            "slovak":"English",
            "poland":"German",
            "germany":"German",
            "hungary":"German",
            "bulgaria":"English",
            "america":"English",
            "canada":"English",
            "mexico":"English",
            "brazil":"Portuguese",
            "australia":"English",
            "kenya":"English",
            "the republic of congo":"French",
            "the republic of kazakhstan":"Russian"
        },
        chooseLaunage:"",
    },
    "langData": {
        //"Please speak":[],
        //"Recording":[],
        //"Loading":[],
        //"No results":[],
        //"Open the input list":[],
        //"help":[],
        //"Open Settings":[],
        //"Mute":[],
        //"Unmute":[],
        //"Voice service is normal":[],
        //"Voice service unavailable":[],
        //"Voice service in process":[],
        //"Voice service error":[]




    },
    rewrite: "Voice_rewrite"

}
function getVoicePageData(page){
    page.CaE = [
        {
            "id": "Voice_assistant_bottom_3",
            "description": "当前的比例容器",
            "CaEType": "div",
            "classes":{"normal":"Voice_assistant_bottom1","focus":"Voice_assistant_bottom1"}
        },
        {
            "id": "Voice_assistant_bottom_span_1",
            "description": "当前的比例容器",
            "CaEType": "div"
        }

    ];

    try{
        //getSpeechState();
    }
    catch (ex){
        debugE(ex);
    }

    return VoiceHelp_Data;
}
function getSpeechState(){
    var opData = VoiceHelp_Data.operateData;
    try {
      //opData.originMute = vol.getPageMute();
      //  if(0 ==  opData.originMute) {
      //      speechRec = true;
      //      model.sound.setMainMute(1);
      //  }

        if (!!tv) {
            clearTimeout(VoiceHelp_Data.operateData.closeVoicetimer);
            opData.speechState = model.speech.getI32RecogintionState();
            model.speech.onI32RecognitionErrorCode = RecognitionErrorCode;
            model.speech.onI32RecogintionStateChaged = RecogintionStateChaged;



        }

         InitVoiceLan();
    }
    catch (ex) {
        debugE(ex);
    }
}
function InitVoiceLan(){
    try {
        var opData =  VoiceHelp_Data.operateData;
        var country = hiWebOsFrame.getCurrentCountry().toLowerCase();
        opData.country = country;
        var currentArea = hiWebOsFrame.getCurrentArea();
        debugE("currentArea:" + country);
        var currentLan ;
        opData.currentArea = currentArea
        //currentLan = opData.speechLanMap[country];
        //if(currentLan == undefined){
        //    currentLan = "English";
        //}
        var defaultIndex = model.speech.getI32SetRecogintionLanguage();
        debugPrint("---->getI32SetRecogintionLanguage:"+defaultIndex);
        currentLan = opData.speechDefaultMap[defaultIndex];
        opData.Voice_assistant_bottom_3 = currentLan;
        opData.currentLan = currentLan;
        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();

        index = $.inArray(opData.currentLan,opData.speechLanList[opData.currentArea]);
        opData.speechLanIndex = defaultIndex;
        //if (opData.country == "austria") {
        //    opData.speechLanIndex = 2;
        //}
        //else {
        //    opData.speechLanIndex = opData.speechSetList[currentArea][opData.currentLan];
        //}
        debugPrint("---->opData.speechLanIndex:"+opData.speechLanIndex);
    }
    catch (ex) {
        debugE(ex);
    }
}

var index;


function SpeechLanMoveLeftHandler(){
    var opData =  VoiceHelp_Data.operateData;
    var currentArea = hiWebOsFrame.getCurrentArea();
    debugE("currentArea:" + currentArea);
    if(index == opData.speechLanList[currentArea].length-1){
        index = 0;
        opData.Voice_assistant_bottom_3 = opData.speechLanList[currentArea][index];
        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
    }
    else if(index<opData.speechLanList[currentArea].length-1){
        index++;
        opData.Voice_assistant_bottom_3 = opData.speechLanList[currentArea][index];
        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();

    }
    opData.currentLan = opData.Voice_assistant_bottom_3;
    opData.speechLanIndex = opData.speechSetList[currentArea][opData.currentLan];
    //if(opData.Voice_assistant_bottom_3 == "English" && opData.country =="austria"){
    //    opData.speechLanIndex == 2;
    //}
    debugPrint("----->opData.speechLanIndex:"+opData.speechLanIndex);

}
function SpeechLanMoveRightHandler(){
    var opData =  VoiceHelp_Data.operateData;
    var currentArea = hiWebOsFrame.getCurrentArea();
    debugE("currentArea:" + currentArea);
    if(index>0){
        index--;
        opData.Voice_assistant_bottom_3 = opData.speechLanList[currentArea][index];
        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();

    }
    else if(index == 0){
        var len = opData.speechLanList[currentArea].length - 1;
        opData.Voice_assistant_bottom_3 = opData.speechLanList[currentArea][len];
        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
        index = len;
    }
    opData.currentLan = opData.Voice_assistant_bottom_3;
    opData.speechLanIndex = opData.speechSetList[currentArea][opData.currentLan];
    //if(opData.Voice_assistant_bottom_3 == "English" &&   opData.country =="austria"){
    //    opData.speechLanIndex == 2;
    //}
    debugPrint("----->opData.speechLanIndex:"+opData.speechLanIndex);
}
function getAllApp() {
    try {
        VoiceHelp_Data.operateData.App = getLauncherAllAppsData_main();
        var app = VoiceHelp_Data.operateData.App[0];
        for (var i = 0; i < app.urls.length; i++) {
            VoiceHelp_Data.operateData.AppName.push(app.txts[i].toLowerCase());
        }
        debugE("----->appName:"+JSON.stringify(VoiceHelp_Data.operateData.AppName));
        model.speech.setVstrSetSlotApplications(VoiceHelp_Data.operateData.AppName);
    }
    catch (ex) {
        debugE(ex);
    }
}
function openAppBySpeech(name) {
    try {
        var opData = VoiceHelp_Data.operateData;
        var app = VoiceHelp_Data.operateData.App[0];

        for (var i = 0; i < app.urls.length; i++) {
            if (app.txts[i].toLowerCase().trim() == name.toLowerCase().trim()) {
              //  debugE("app.txts[i].toLowerCase():"+app.txts[i].toLowerCase());
              //  debugE("name.toLowerCase():"+name.toLowerCase());
                var appName = opData.showResult.Apps[opData.currentLan] +" " + name;
                VoiceShowResult(appName);
                model.speech.setStrControlSpeak(appName);
                if (isMainArchiveRecording() || isTimeShiftStatus()) {
                    PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                        "Sure to exit from PVR or T.Shift?", okCommandAppForSpeech.bind(this, app.urlTypes[i], app.urls[i],app.storeTypes[i]), pvrTshiftCancelCommand);
                    return;
                }
                sendCommndToTV(app.urlTypes[i], app.urls[i], false, app.storeTypes[i]);
                break;
            }
            else if(-1 == $.inArray(name.toLowerCase(), opData.AppName)){
               // debugE("----->no app");
                VoiceShowResult(opData.showResult.Tips[opData.currentLan]);
                model.speech.setStrControlSpeak(opData.showResult.Tips[opData.currentLan]);
                return;
            }
        }
    }
    catch (ex) {
        debugE(ex);
    }
}

function okCommandAppForSpeech(urlType,url,storeType){
    if (!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    openLiveTVModule([Msg.INFO, 0]);
    if (isMainArchiveRecording()) {
        setAfterStopPvrWantDo(speechAppKeyStopPvrOrTShiftCallBack.bind(this, 0, urlType,url,storeType));
        setTimeout(function () {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);

    }
    if (isTimeShiftStatus()) {
        setAfterStopTShiftWantDo(speechAppKeyStopPvrOrTShiftCallBack.bind(this, 1, urlType,url,storeType));
        setTimeout(function () {
            model.timeshift.Stop();
        }, 100);
    }
}

function speechAppKeyStopPvrOrTShiftCallBack(stopWho,urlType,url,storeType){
    if (stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if (stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    sendCommndToTV(urlType,url, false,storeType);
}
function Voice_rewrite(pageData){
    pageData.Voice_assistant_bottom_3.Data = pageData.operateData.Voice_assistant_bottom_3;
    pageData.Voice_assistant_bottom_span_1.Data = pageData.operateData.Voice_assistant_bottom_span_1;
}
function RecogintionStateChaged(v){
    var opData = VoiceHelp_Data.operateData;
    clearTimeout(VoiceHelp_Data.operateData.closeVoicetimer);
    opData.speechState = v;
    debugPrint("-------------->opData.speechState:" + opData.speechState);
    try {
        if (opData.speechState == 1) {
            try {
                $("#microphone_status").removeAttr('class').addClass('Voice_assistant_imgMicNormal');
                //opData.Voice_assistant_bottom_3 = "Recording";
                opData.Voice_assistant_bottom_span_1 = opData.SpeakTip[opData.currentLan];
                hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
                $("#Voice_assistant_bottom_1").css("visibility","visible");
                $("#Voice_assistant_bottom_0").css("visibility","visible");
                //if (opData.appRefreshState == 0) {
                //    getAllApp();
                //    opData.appRefreshState = 1;
                //}
                //if(opData.channelRefreshState == 0){
                //    getChannelInfo();
                //    opData.channelRefreshState = 1;
                //}
                opData.originMute = vol.getPageMute();
                  if(0 ==  opData.originMute) {
                      speechRec = true;
                      model.sound.setMainMute(1);
                  }
            }
            catch (ex) {
                debugE(ex);
            }

        }
        else if (opData.speechState == 2) {

            $("#border_status").css("visibility", "hidden");
            $("#export_status").removeAttr('class').addClass('export_status_imgSpeaking');
            $("#microphone_status").removeAttr('class').addClass('Voice_assistant_imgMicSpeaking');
            //opData.Voice_assistant_bottom_3 = "Recording";
            opData.Voice_assistant_bottom_span_1 = '';
            hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
            $("#Voice_assistant_bottom_1").css("visibility","visible");
            $("#Voice_assistant_bottom_0").css("visibility","visible");

        }
        else if (opData.speechState == 3) {
            $("#border_status").css("visibility", "hidden");
            $("#microphone_status").removeAttr('class').addClass('Voice_assistant_imgMicSpeaking');
            $("#export_status").removeAttr('class').addClass('export_status_img');
            opData.Voice_assistant_bottom_3 = opData.SpeechTip[0][opData.currentLan];
            opData.Voice_assistant_bottom_span_1 = '';
            hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
            $("#Voice_assistant_bottom_1").css("visibility","hidden");
            $("#Voice_assistant_bottom_0").css("visibility","hidden");

        }
        else if (opData.speechState == 4) {
            $("#border_status").css("visibility", "hidden");
            $("#export_status").removeAttr('class').addClass('export_status_img');
            $("#microphone_status").removeAttr('class').addClass('Voice_assistant_imgMicNormal');
            opData.Voice_assistant_bottom_3 = opData.SpeechTip[1][opData.currentLan];
            opData.Voice_assistant_bottom_span_1 = '';
            hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
            speechRec = false;
            $("#Voice_assistant_bottom_1").css("visibility","hidden");
            $("#Voice_assistant_bottom_0").css("visibility","hidden");
        }
        else if (opData.speechState == 5) {
            try {
                $("#border_status").css("visibility", "hidden");
                opData.Voice_assistant_bottom_3 = " ";
                $("#export_status").removeAttr('class').addClass('export_status_imgcomplete');
                $("#microphone_status").removeAttr('class').addClass('Voice_assistant_imgMicNormal');
                getResultState();
                $("#Voice_assistant_bottom_1").css("visibility","hidden");
                $("#Voice_assistant_bottom_0").css("visibility","hidden");
            }
            catch (ex) {
                debugE(ex.message);
            }

        }
    }
    catch (ex) {
        debugE(ex);
    }
}
function RecordingLevelValueChaged(v){
    var opData = VoiceHelp_Data.operateData;
    clearTimeout(VoiceHelp_Data.operateData.closeVoicetimer);
    debugPrint("===> opData.manVolume"+   opData.manVolume);
    opData.voiceChange = parseInt(v);
    debugPrint("----->Volume:"+opData.voiceChange);
    if(opData.voiceChange>opData.manVolume){
        debugPrint("----->RecordingLevelValueChaged 1111---->");
    while(opData.voiceChange>opData.manVolume){
       debugPrint("---->*******manVolume**"+opData.manVolume) ;
        $("#export_status").css("background","url(./img/speeking_"+
            opData.manVolume+".png)");
        if(opData.manVolume%2 == 1){
            $("#export_status").css("background","url(./img/speeking_"+
              opData.manVolume+".png)");
        }
        opData.manVolume++;

     }
        debugPrint("----->RecordingLevelValueChaged 000---->");
   }
    else{
        while(opData.voiceChange<opData.manVolume){
            debugPrint("----->RecordingLevelValueChaged 222--->");

            $("#export_status").css("background","url(./img/speeking_"+
                opData.manVolume+".png)");
            if(opData.manVolume%2 == 1){
                $("#export_status").css("background","url(./img/speeking_"+
                    opData.manVolume+".png)");
            }
                opData.manVolume--;

        }
    }
    opData.manVolume = opData.voiceChange;
    debugPrint("----->RecordingLevelValueChaged end---->");
}


/**
 * 对返回结果做处理：type：1 ->source,2 ->Volume,3->channel,
 * 8->mute,setting->4,app->5,7->google.6->UICommand
 */
function getResultState(){
    try {
        var opData = VoiceHelp_Data.operateData;
        clearTimeout(VoiceHelp_Data.operateData.closeVoicetimer);
        debugPrint("=======>speech finish");
        opData.resultType = model.speech.getI32RecogintionType();
        debugPrint("----->resulttype:" + opData.resultType);
        opData.resultSubtype = model.speech.getI32RecogintionSubtype();
        debugPrint("----->resultSubtype:" + opData.resultSubtype);
        opData.resultInt = model.speech.getI32RecogintionParamValue();
        debugPrint("----->resuitInt:" + opData.resultInt);
        opData.resultString = model.speech.getStrRecogintionParamValue();
        debugPrint("----->rseultString:" + opData.resultString);
        switch (opData.resultType) {
            case 1://需要根据机型硬件来确认具体的通道
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                commandInput();
                break;
            case 2:
                commandVolume()
                break;
            case 8:
                commandMute();
                break;
            case 3:
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                commandChannel();
                break;
            case 4:

                commandSetting();
                debugPrint('-----Setting 4------>');

                break;
            case 5:
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                openAppBySpeech(opData.resultString);
                break;
            case 6:
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                UICommand();
                break;
            case 7:
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                searchMovie();
                break;
            default :
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                opData.Voice_assistant_bottom_span_1 = opData.showResult.Tips[opData.currentLan];
                hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
                var result = model.speech.getI32RecogintionResult();
                debugPrint("---->result:" + result);
                if (result == 0) {
                    model.speech.setStrControlSpeak(opData.showResult.Tips[opData.currentLan]);
                }
                break;

        }
        ;
        if (opData.appRefreshState == 0) {
            getAllApp();
            opData.appRefreshState = 1;
        }
        if (opData.channelRefreshState == 0) {
            getChannelInfo();
            opData.channelRefreshState = 1;
        }
        //if(opData.Countrylanguage ==0){
        //    var country = hiWebOsFrame.getCurrentCountry().toLowerCase();
        //    debugPrint("----->country:"+country);
        //    if(country == "australia"){
        //        model.speech.setI32SetRecogintionLanguage(2);
        //    }
        //    else{
        //        model.speech.setI32SetRecogintionLanguage(0);
        //    }
        //    opData.Countrylanguage = 1;
        //}

            debugPrint("----->opData.speechLanIndex:"+opData.speechLanIndex);
            model.speech.setI32SetRecogintionLanguage(opData.speechLanIndex);


        opData.closeVoicetimer = setTimeout(finishCloseVoice, 3000);
    }
    catch(ex){
        debugE(ex);
    }
}
function commandMute(){
    try{
        var opData = VoiceHelp_Data.operateData;
        opData.speechVo = false;
        debugE("------->opData.speechVo:"+opData.speechVo);
        if (opData.resultInt) {

            vol.setBizMuteByVal(1); //静音
            opData.Voice_assistant_bottom_span_1 = opData.showResult.MuteOn[opData.currentLan];
            model.speech.setStrControlSpeak(opData.showResult.MuteOn[opData.currentLan]);
        }
        else {
            vol.setBizMuteByVal(0);//取消静音
            opData.Voice_assistant_bottom_span_1 = opData.showResult.MuteOff[opData.currentLan];
            model.speech.setStrControlSpeak(opData.showResult.MuteOff[opData.currentLan]);
        }

        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
        debugPrint('-----Mute 8------>')
    }
    catch(ex){
        debugE(ex);
    }

}
function getCurrentInputVoice(){
    var sourceArr = [];
    VoiceHelp_Data.operateData.sourceName = [];
    if (!!tv) {
        var sourceItem = model.source.getInputName();
        debugPrint("sourceItem:" + JSON.stringify(sourceItem));
        var item = {id: "0", name: "TV", signal: "1", lock: "0", rename: "",hotelLock:""};
        for (var i = 0; i < sourceItem.length / 6; i++) {
            var newitem = $.extend(true, {}, item);
            newitem.id = sourceItem[i * 6 + 0];
            newitem.name = sourceItem[i * 6 + 1];
            newitem.signal = sourceItem[i * 6 + 2];
            newitem.lock = sourceItem[i * 6 + 3];
            newitem.rename = sourceItem[i * 6 + 4];
            sourceArr.push(newitem);
            var name = newitem.name.replace(/\s/g, '')
            VoiceHelp_Data.operateData.sourceName.push(name.toLowerCase());
        }
    } else {
        sourceArr = [
            {id: "0", name: "TV", signal: "1", lock: "0"},
            {id: "3", name: "HDMI1", signal: "1", lock: "0"},
            {id: "4", name: "HDMI2", signal: "1", lock: "0"},
            {id: "5", name: "HDMI3", signal: "0", lock: "0"},
            {id: "6", name: "HDMI4", signal: "0", lock: "0"},
            {id: "1", name: "AV", signal: "1", lock: "0"},
            {id: "2", name: "Component", signal: "0", lock: "1"}
        ]
    }
    return sourceArr;
}

function commandInput(){
    try{

        var opData = VoiceHelp_Data.operateData,
            sourceArr = getCurrentInputVoice();
        $.each(sourceArr, function (k, v) {
            v.name = v.name.replace(/\s/g, '');
           // debugE("_____ model.source.InputSet______:"+v.name.toLowerCase());
           // debugE("_____  opData.resultString.toLowerCase()______:"+ opData.resultString.toLowerCase());
            if (opData.resultString == "digitalTV" || opData.resultString == "analogTV") {
                opData.resultString = "tv";
            }
            if (v.name.toLowerCase() == opData.resultString.toLowerCase()) {
                var inputResult = opData.showResult.Apps[opData.currentLan] +" "+ v.name
                VoiceShowResult(inputResult);
                model.speech.setStrControlSpeak(inputResult);
                opData.sourceId = v.id;
                if(isMainArchiveRecording() || isTimeShiftStatus()) {

                    PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                        "Sure to exit from PVR or T.Shift?", speechSourceStopPVROrTshift, speechSourceCanCancelPVRTshift);
                    return;
                }

                model.source.InputSet(v.id);
               // debugE("_____ model.source.InputSet______");
                return;
            }
            else if(-1 == $.inArray(opData.resultString.toLowerCase(), opData.sourceName)){
                    VoiceShowResult(opData.showResult.Tips[opData.currentLan]);
                    model.speech.setStrControlSpeak(opData.showResult.Tips[opData.currentLan]);
                //debugE("_____ source unkndown______:"+JSON.stringify(opData.sourceName));
                    return;
            }
        })

        //$.each(opData.inputTip, function (k, v) {
        //    if (v.name.toLowerCase() == opData.resultString.toLowerCase()) {
        //        opData.Voice_assistant_bottom_span_1 = v.inputTip;
        //        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
        //        debugPrint("v.inputTip:" + v.inputTip);
        //        model.speech.setStrControlSpeak(v.inputTip);
        //    }
        //    else {
        //        return;
        //    }
        //
        //})

    }
    catch(ex){
        debugE(ex);
    }

}
function commandVolume(){
    var opData = VoiceHelp_Data.operateData;
    if (opData.resultSubtype == 1) {
        if (opData.resultInt <= 100 && opData.resultInt >= 0) {
            vol.setBizVolumeByVal(opData.resultInt)//音量+数字（resultInt）
            var volume = opData.showResult.VolumeNumber[opData.currentLan]+" "+opData.resultInt;
            VoiceShowResult(volume);
            model.speech.setStrControlSpeak(volume);
            if(opData.resultInt>vol.getPageVolume()){
                opData.speechVo = false;
            }
        }
    }
    else if (opData.resultSubtype == 2) {
        if (opData.resultString == "up") {
            var toVolume = vol.getPageVolume()+3;
            if(toVolume>=100){
                toVolume = 100;
            }
            opData.speechVo = false;
            vol.setBizVolumeByVal(toVolume)//音量+3
            var volumeUp = opData.showResult.VolumeNumber[opData.currentLan]+" "+toVolume;
            VoiceShowResult(volumeUp);
            model.speech.setStrControlSpeak(volumeUp);
        }
        else if (opData.resultString == "down") {
            var toVolume = vol.getPageVolume()-3;
            if(toVolume<=0){
                toVolume = 0;
            }
            vol.setBizVolumeByVal(toVolume)//音量-3
            var volumeDown = opData.showResult.VolumeNumber[opData.currentLan]+" "+toVolume;
            model.sound.setMainMute( VoiceHelp_Data.operateData.originMute);
            VoiceShowResult(volumeDown);
            model.speech.setStrControlSpeak(volumeDown);
        }
    }
}
function commandChannel(){
    var opData = VoiceHelp_Data.operateData;
    try {
        // model.source.InputSet(0);
        if (opData.resultSubtype == 1) {
            //频道+数字（resultInt）
            var num = opData.resultInt;
            livetvchlist.changeChannelByNumKey(num);
            var channelNum = opData.showResult.ChannelNumber[opData.currentLan]+" "+num;
            VoiceShowResult(channelNum);
            model.speech.setStrControlSpeak(channelNum);
        }
        else if (opData.resultSubtype == 2) {
            if (opData.resultString == "up") {
                //频道+1
                livetvchlist.waitForChangeChannel(1);
                livetvchlist.setKeyUp();
                var channelup = opData.showResult.ChannelUp[opData.currentLan];
                VoiceShowResult(channelup);
                model.speech.setStrControlSpeak(channelup);
            }
            else if (opData.resultString == "down") {
                //频道-1
                livetvchlist.waitForChangeChannel(-1);
                livetvchlist.setKeyUp();
                var channelDown = opData.showResult.ChannelDowm[opData.currentLan];
                VoiceShowResult(channelDown);
                model.speech.setStrControlSpeak(channelDown);
            }
            else{
                changeChannelByName(opData.resultString);
            }
        }
    }
    catch (ex) {
        debugE(ex);
    }
}
function UICommand() {
    var opData = VoiceHelp_Data.operateData;
    switch (opData.resultString) {
        case "shutdown":
            CloseScreen_Voice();
            var str = opData.showResult.AudioOnly[opData.currentLan];
            VoiceShowResult(str);
            model.speech.setStrControlSpeak(str);//关屏
            break;
        default :
            opData.Voice_assistant_bottom_span_1 = opData.showResult.Tips[opData.currentLan];
            hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
            model.speech.setStrControlSpeak(opData.showResult.Tips[opData.currentLan]);
            break;
    }
}
function searchMovie(){
    try {
        var opData = VoiceHelp_Data.operateData;
        var keyword = VoiceHelp_Data.operateData.resultString;
        var amcommand = ":am,am,:start=[hi_browser,-u,www.google.com/search?q=" + keyword +"]";
        //sendAM(amcommand);
        asyncStartApp("app_hi_browser", HSAPPURL.BROWSER, false,null,null,false,amcommand);
        var searchResult = opData.showResult.GoogleSearch[opData.currentLan];
        VoiceShowResult(searchResult);
        model.speech.setStrControlSpeak(searchResult);
    }
    catch (ex) {
        debugE(ex);
    }
}
function commandSetting() {
    var opData = VoiceHelp_Data.operateData;
    var menu = opData.showResult.Settings[opData.currentLan];
    switch (opData.resultString) {
        case "SignalSourceMenu"://打开信号源设置
            speechRec = false;
            model.sound.setMainMute(opData.originMute);
            try {
                VoiceopenSourcePage(hiWebOsFrame.blankPage);

            }
            catch (ex){
                debugE(ex.message);
            }
            break;
        case "HomePage"://打开Home主页
            try{
                opData.speechVo = false;
                var home = opData.showResult.home[opData.currentLan];
                VoiceShowResult(home);
                model.speech.setStrControlSpeak(home);
                if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
                    debugPrint("keyHome is pressed!");
                    PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                        "Sure to exit from PVR or T.Shift?", okCommandHome, pvrTshiftCancelCommand);
                    return;
                }
                if (g_launcherBrand == "SA_OEM") {
                    createSAOEMLauncher();
                }
                else if (g_launcherBrand == "VIDAALite") {
                    createVIDAALitelauncher();
                }else {
                    createModulePage('myLauncher',hiWebOsFrame.blankPage);
                }
                //createModulePage('myLauncher',hiWebOsFrame.blankPage);
                //2015-10-14 add OEM Launcher
            }
            catch (ex){
                debugE(ex.message);
            }

            break;
        case "SettingsMenu"://打开设置主页
        case"menu":
            speechRec = false;
            model.sound.setMainMute(opData.originMute);
            try {
                speechOpenMenuPage(0,menu);
            }
            catch (ex) {
                debugE(ex.message);
            }
            break;
        case "PictureSettingsMenu": //打开图像设置
        case "BrightnessSettingsMenu":
        case "ContrastMenu":
        case "AspectRatioMenu":
        case "PictureModeMenu":
        case "3DSettingsMenu":
            speechRec = false;
            model.sound.setMainMute(opData.originMute);
            try {
                speechOpenMenuPage(0,menu);
                //VoiceopenMenuPage(0, hiWebOsFrame.blankPage, menu);
            }
            catch (ex) {
                debugE(ex.message);
            }
            break;
        case "AudioSettingsMenu"://打开声音设置
        case "SoundModeMenu":
            speechRec = false;
            model.sound.setMainMute(opData.originMute);
            try {
                speechOpenMenuPage(1,menu);
                //VoiceopenMenuPage(1, hiWebOsFrame.blankPage, menu);
            }
            catch (ex) {
                debugE(ex.message);
            }
            break;
        case "NetworkSettingsMenu"://打开网络设置
            speechRec = false;
            model.sound.setMainMute(opData.originMute);
            try {
                speechOpenMenuPage(3,menu);
                //VoiceopenMenuPage(3, hiWebOsFrame.blankPage, menu);
            }
            catch (ex) {
                debugE(ex.message);
            }
            break;
        case "ChannelSettingsMenu": //打开搜台设置
            speechRec = false;
            model.sound.setMainMute(opData.originMute);
            try {
                speechOpenMenuPage(2,menu);
                //VoiceopenMenuPage(2, hiWebOsFrame.blankPage, menu);
            }
            catch (ex) {
                debugE(ex.message);
            }
            break;
        case "Help":
            //打开帮助
            try {
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                Voiceopenhelp();
            }
            catch (ex) {
                debugE(ex.message)
            }

            break;
        case "AboutMenu"://打开设置页面的关于
            try {
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                speechOpenMenuPage(5,menu);
                //VoiceopenMenuPage(5, hiWebOsFrame.blankPage, menu);
            }
            catch (ex) {
                debugE(ex.message);
            }
            break;
        case "SystemSettingsMenu":
        case "LanguageSettingsMenu":
            try {
                speechRec = false;
                model.sound.setMainMute(opData.originMute);
                speechOpenMenuPage(4,menu);
                //VoiceopenMenuPage(4, hiWebOsFrame.blankPage, menu);
            }
            catch (ex) {
                debugE(ex.message);
            }
            break;
        default:
            speechRec = false;
            model.sound.setMainMute(opData.originMute);
            opData.Voice_assistant_bottom_span_1 = opData.showResult.Tips[opData.currentLan];
            hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
            model.speech.setStrControlSpeak(opData.showResult.Tips[opData.currentLan]);
            break


    }
}

function speechOpenMenuPage(selectedIndex,str){
    if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
        debugPrint("recording keymenu is pressed!");
        PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
            "Sure to exit from PVR or T.Shift?", okCommandForSpeechMenu.bind(this,selectedIndex,str), pvrTshiftCancelCommand);
        return;
    }
    VoiceopenMenuPage(selectedIndex, hiWebOsFrame.blankPage,str);
}

function okCommandForSpeechMenu(selectedIndex,str){
    if(!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    if(isMainArchiveRecording()) {
        setAfterStopPvrWantDo(SpeechStopPvrOrTShiftCallBack.bind(this,0,selectedIndex,str));
        setTimeout(function() {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);


    }
    if(isTimeShiftStatus()) {
        setAfterStopTShiftWantDo(SpeechStopPvrOrTShiftCallBack.bind(this,1,selectedIndex,str));
        setTimeout(function() {
            model.timeshift.Stop();
        }, 100);

    }

}

function SpeechStopPvrOrTShiftCallBack(stopWho,selectedIndex,str) {
    if(stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if(stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    VoiceopenMenuPage(selectedIndex, hiWebOsFrame.blankPage,str);
}



function VoiceOnClose() {
    try {
        clearTimeout(VoiceHelp_Data.operateData.closeVoicetimer);
        speechRec = false;
        debugE("--------->speechRec:"+speechRec);
        debugE("--------->speechRec:"+VoiceHelp_Data.operateData.speechVo);
        if(VoiceHelp_Data.operateData.speechVo){
            model.sound.setMainMute( VoiceHelp_Data.operateData.originMute);
        }
        VoiceHelp_Data.operateData.speechVo = true;
        VoiceHelp_Data.operateData.Voice_assistant_bottom_span_1 = '';
        VoiceHelp_Data.operateData.Voice_assistant_bottom_3 = 'Recording';
        hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
        model.speech.onI32RecogintionStateChaged = null;
        model.speech.onI32RecognitionErrorCode = null;
        $("#Voice_assistant_bottom_1").css("visibility","hidden");
        $("#Voice_assistant_bottom_0").css("visibility","hidden");
    }
    catch(ex){
        debugE(ex);
    }
    //hiWebOsFrame.unLockAllKeys();
    //hiWebOsFrame.Voice_assistant_page = null;
}
function Voiceopenhelp(){
    var opData = VoiceHelp_Data.operateData;
    VoiceShowResult(VoiceHelp_Data.operateData.showResult.openHelp[opData.currentLan]);
    model.speech.setStrControlSpeak(VoiceHelp_Data.operateData.showResult.openHelp[opData.currentLan]);
    hiWebOsFrame.createPage('voice_help_mainpage', null, null, null, function(a) {
        hiWebOsFrame.voice_help = a;
        a.open();
        a.hiFocus();
    });

}
function finishCloseVoice(){
    clearTimeout(VoiceHelp_Data.operateData.closeVoicetimer);
    if(!! hiWebOsFrame.Voice_assistant_page &&hiWebOsFrame.isCurrentModule("speech")){
        hiWebOsFrame.Voice_assistant_page.close();
        hiWebOsFrame.Voice_assistant_page.destroy();
        debugPrint("_______________hiWebOsFrame.blankPage.open______");
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    else{
        hiWebOsFrame.Voice_assistant_page.close()
        hiWebOsFrame.Voice_assistant_page.destroy();
    }
}
function VoiceopenSourcePage(oriPage) {
    try {
        var opData = VoiceHelp_Data.operateData;
        VoiceShowResult(opData.showResult.openInputList[opData.currentLan]);
        model.speech.setStrControlSpeak(opData.showResult.openInputList[opData.currentLan]);
        if (arguments.length == 0) {
            debugG("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('setting_pic_Source_page', null, oriPage, null, function (setting_source_page) {
                hiWebOsFrame.setting_source_page = setting_source_page;
                setting_source_page.open();
                setting_source_page.hiFocus();

            });
        } else {
            hiWebOsFrame.createPage('setting_source_page', null, null, null, function (setting_source_page) {

                hiWebOsFrame.setting_source_page = setting_source_page;
                setting_source_page.open();
                setting_source_page.hiFocus();

            });
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function VoiceopenMenuPage(index,origin,str){
    try {
        VoiceShowResult(str);
        model.speech.setStrControlSpeak(str);
        SettingfirstOpen(index,origin);

    } catch (ex) {
        debugE(ex.message);
    }
}


function VoiceShowResult(str){
    var opData = VoiceHelp_Data.operateData;
    opData.Voice_assistant_bottom_span_1 = str;
    opData.Voice_assistant_bottom_3 = "";
    hiWebOsFrame.Voice_assistant_page.rewriteDataOnly();
}
function getChannelInfo(){
    VoiceHelp_Data.operateData.ChannelInfoAll = livetvchlist.getAllChannels()
    var ChannelAll =  VoiceHelp_Data.operateData.ChannelInfoAll;
    VoiceHelp_Data.operateData.ChannelName = [];
    var item = {"num":"","name":"","uid":"","listUid":"","playId":""};
    var ChannelName = VoiceHelp_Data.operateData.ChannelName;
    var ChannelInfoAll = VoiceHelp_Data.operateData.ChannelInfoItem;
    try
    {
        if(!!ChannelAll&&ChannelAll.length>0)
        {
            debugPrint("getChannelListData!!!");
            for (var j = 0; j < ChannelAll.length; j++)
            {
                for(var i=0;i<ChannelAll[j].list.length;i++)
                {
                    ChannelInfoAll = $.extend(true, {}, item);
                    ChannelInfoAll.num=ChannelAll[j].list[i].number;
                    ChannelInfoAll.name =ChannelAll[j].list[i].name;
                    ChannelName.push(ChannelAll[j].list[i].name.toLowerCase());
                    ChannelInfoAll.uid=ChannelAll[j].list[i].uid;
                    ChannelInfoAll.playId=ChannelAll[j].list[i].playId;
                    ChannelInfoAll.listUid=ChannelAll[j].list[i].listUid;
                }
            }
        }
        model.speech.setVstrSetSlotChannels(ChannelName);
    }
    catch(e){
        debugPrint(e.message)

    }
}
function changeChannelByName(name){
    try{
        var currentSource = model.source.getCurrentSource();
        var ChannelAll =  VoiceHelp_Data.operateData.ChannelInfoAll;
        var str,result,opData;
        opData = VoiceHelp_Data.operateData;
        str= opData.resultString;
        result = opData.showResult.ChannelNumber[opData.currentLan] +" "+ str;
        var ChannelDest = {};
        if(!!ChannelAll&&ChannelAll.length>0)
        {
            debugPrint("getChannelListData!!!");
            for (var j = 0; j < ChannelAll.length; j++)
            {
                for(var i=0;i<ChannelAll[j].list.length;i++)
                {
                    if(ChannelAll[j].list[i].name.toLowerCase() == name.toLowerCase()){
                        VoiceShowResult(result);
                        model.speech.setStrControlSpeak(result);
                        ChannelDest.num = ChannelAll[j].list[i].number;
                        ChannelDest.uid=ChannelAll[j].list[i].uid;
                        ChannelDest.listUid=ChannelAll[j].list[i].listUid;
                        ChannelDest.playId=ChannelAll[j].list[i].playId;
                        ChannelDest.name =ChannelAll[j].list[i].name;
                        break;
                    }
                    else if(-1 == $.inArray(name.toLowerCase(), opData.ChannelName)){
                        VoiceShowResult(opData.showResult.Tips[opData.currentLan]);
                        model.speech.setStrControlSpeak(opData.showResult.Tips[opData.currentLan]);
                        return;
                    }
                }
            }
        }
        if (currentSource == 0) {
            livetvchlist.changeChannel(null, ChannelDest);
        }
    }
    catch(ex){
        debugE(ex);
    }
}
function RecognitionErrorCode(v){
    debugPrint("----->error code:"+v);
    try {
        if (v != 0) {
            $("#border_status").css("visibility", "hidden");
            VoiceHelp_Data.operateData.Voice_assistant_bottom_3 = " ";
            $("#export_status").removeAttr('class').addClass('export_status_imgcomplete');
            $("#microphone_status").removeAttr('class').addClass('Voice_assistant_imgMicNormal');
            var busy = VoiceHelp_Data.operateData.errorCodeTips[v]
            VoiceShowResult(busy);
            model.speech.setStrControlSpeak(busy);
            VoiceHelp_Data.operateData.closeVoicetimer = setTimeout(finishCloseVoice, 3000);
        }

    }
    catch (ex) {
        debugE(ex);
    }
}

function speechSourceStopPVROrTshift() {
    if(!!hiWebOsFrame["dialog_common"])
    {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    try {
        if(isMainArchiveRecording()){
            setAfterStopPvrWantDo(speechSourceStopPvrCallBack);
            setTimeout(function (){
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
            },100);
        }
        if(isTimeShiftStatus()){
            setAfterStopTShiftWantDo(speechSourceStopTshiftCallBack);
            setTimeout(function () {
                model.timeshift.Stop();
            },100);

        }
    }
    catch(ex) {
        debugPrint("error: " + ex.message);
    }
}
function speechSourceStopPvrCallBack(){
    hiWebOsFrame.endLoading("stoppvr");
    g_AfterStopPvrWantDo = null;
    model.source.InputSet( VoiceHelp_Data.operateData.sourceId);
    ReadInputRecent(''+VoiceHelp_Data.operateData.sourceId);
    setTimeout(openLiveTVModule, 800);
}

function speechSourceStopTshiftCallBack(){
    try {
        //debugE("________>speechSourceStopTshiftCallBack:"+VoiceHelp_Data.operateData.sourceId);
        hiWebOsFrame.endLoading("stoppvr");
        g_AfterStopTShiftWantDo = null;
        model.source.InputSet(VoiceHelp_Data.operateData.sourceId);
        ReadInputRecent(VoiceHelp_Data.operateData.sourceId);
        setTimeout(openLiveTVModule, 800);
    }
    catch (ex) {
        debugE(ex);
    }
}

function speechSourceCanCancelPVRTshift() {
    if(!!hiWebOsFrame["dialog_common"])
    {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.endLoading("stoppvr");
    openLiveTVModule();
}
function CloseScreen_Voice(){
    model.system.setEnumScreenState(0);
    debugPrint("Off the screen", DebugLevel.ERROR);
    g_SystemAudioOnlyFlag=1;
}