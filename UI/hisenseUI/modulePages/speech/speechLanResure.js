var SpeechLanResureData = {
    "speechLanResure_span_1": {"Data": "Voice control language selection"},
    "speechLanResure_span_2":{"Data":"English"},
    "speechLanResure_text_1": {"Data":"Current language:"},
    "speechLanResure_btn_1":{"Data":"Reselect"},
    "speechLanResure_btn_0":{"Data":"OK"},
    "speechLanResure_text_2":{"Data":"Make sure you have selected the desired language. The remote control should be re-paired if the language is changed"},
    "operateData": {
        speechLanResure_span_2:"",
        speechSetList: {
            EM: {
                "English": 1,
                "French": 3,
                "Spanish": 8,
                "Russian":7
            },
            EU: {
                "English": 1,
                "French": 3,
                "German": 4,
                "Italian": 5,
                "Spanish":8
            },
            SA: {
                "English": 0,
                "Spanish": 9,
                "Portuguese": 6
            }
        }
    },

    langData:{
        "English":[],
        "French":[],
        "Italian":[],
        "Spanish":[],
        "German":[],
        "Russian":[],
        "Portuguese":[],
        "Voice control language selection": [],
        "Reselect":[],
        "OK":[],
        "Current language:":[],
        "Make sure you have selected the desired language. The remote control should be re-paired if the language is changed":[]


    },
    rewrite: "speechLanResureRewrite"
}
function getSpeechLanResureData(opt){
    opt.CaE = [
        {
            "id": "speechLanResure_span_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "speechLanResure_span_2",
            "description": "当前的比例容器",
            "CaEType": "div"
        },
        {
            "id": "speechLanResure_text_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "speechLanResure_text_2",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "speechLanResure_btn_0",
            "description": "",
            "CaEType": "div",
            "classes": {"normal": "speechLanResure_btn_class_normal",
                "focus": "speechLanResure_btn_class_focus", "selected": "speechLanResure_btn_class_focus"},
            "handler": {
                "aftEnterHandler": "speechLanResureOKHandler"
            },
            "nav": {
                "rightTo":"speechLanResure_btn_1"
            }
        },
        {
            "id": "speechLanResure_btn_1",
            "description": "",
            "CaEType": "div",
            "classes": {"normal": "speechLanResure_btn_class_normal",
                "focus": "speechLanResure_btn_class_focus", "selected": "speechLanResure_btn_class_focus"},
            "handler": {
                "aftEnterHandler": "speechLanResureHandler"
            },
            "nav": {
                "leftTo":"speechLanResure_btn_0"
            }
        }
    ];
    SpeechLanResureData.operateData.speechLanResure_span_2 = SpeechLanData.operateData.chooseLaunage
    return SpeechLanResureData;
}

function speechLanResureRewrite(data){
    data.speechLanResure_span_2.Data = data.operateData.speechLanResure_span_2;
}
function speechLanResureOKHandler(){
    try {
        var opData = SpeechLanResureData.operateData;
        var index = opData.speechSetList[SpeechLanData.operateData.currentArea][opData.speechLanResure_span_2];
        debugPrint("----->Index:" + index);
        model.speech.setI32SetRecogintionLanguage(index);
        this.page.close();
        this.page.destroy();
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    catch (ex) {
        debugE(ex);
    }
}
function speechLanResureHandler(){
    this.page.close();
    hiWebOsFrame.createPage("speech_Lan_page", null, null, null, function (page) {
        hiWebOsFrame.speechLan = page;
        page.open();
        page.hiFocus();
    });
    this.page.destroy();
}