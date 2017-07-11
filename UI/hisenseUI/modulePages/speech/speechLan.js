/**
 * Created by Admin on 14-6-18.
 */
function getSpeechLanData(opt) {
    opt.CaE = [
        {
            "id": "speechLanSecTypeListTitle",
            "description": "列表头",
            "CaEType": "div"
        },
        {
            "id": "speechLanSecTypeListContUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "ULPageMode":true,
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus",
                "dataSelected": "wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "speechLanOKHandler",
                "aftDownHandler": "speechLanDownHandler",
                "aftUpHandler": "speechLanUpHandler"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "speechLanSecTypeListSelImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList": {
                        "openImg": "img/selectedBall.png",
                        "closeImg": "img/unselectedBall.png"
                    },
                    "classes": {

                    }
                },
                {
                    "id": "speechLanSecTypeListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes": {

                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "speechLanSecTypeListSelImg", "speechLanSecTypeListItem"],
                "PageSize": 5
            }
        }
    ];

    InitSpeechLan();


    return SpeechLanData;
}
function InitSpeechLan(){
    try {
        var currentArea = hiWebOsFrame.getCurrentArea();
        var country = hiWebOsFrame.getCurrentCountry().toLowerCase();
        debugE("currentArea:" + currentArea);
        debugE("currentArea:" + country);
        var data = SpeechLanData;
        var currentLan ;
        var opData =  data.operateData;
        //currentLan = opData.speechLanMap[country];
        //if(currentLan == undefined){
        //    currentLan = "English";
        //}
        var defaultIndex = tv?model.speech.getI32SetRecogintionLanguage():1;
        debugPrint("====>getI32SetRecogintionLanguage:"+defaultIndex);
        currentLan = opData.speechDefaultMap[defaultIndex];
        opData.currentArea = currentArea;
        data.speechLanSecTypeListContUl.Data = [];
        var itemData = {
            "speechLanSecTypeListSelImg": {"Data": false},
            "speechLanSecTypeListItem": {"Data": "none"}
        }
        $.each(data.operateData.speechLanList[currentArea], function (idx, item) {
            data.speechLanSecTypeListContUl.Data.push($.extend(true, {}, itemData));
            if(item ==currentLan){
                opData.currSpeechLan = idx;
                data.speechLanSecTypeListContUl.Data[idx].speechLanSecTypeListSelImg.
                    Data = true;
            }
            data.speechLanSecTypeListContUl.Data[idx].speechLanSecTypeListItem.Data
                = item;
        })
        data.speechLanSecTypeListContUl.DataSelectedIndex = data.operateData.currSpeechLan;
        data.speechLanSecTypeListContUl.SelectedIndex = data.operateData.currSpeechLan;
    }
    catch (ex) {
        debugE(ex);
    }
}
var SpeechLanData = {
    "speechLanSecTypeListTitle": {"Data": "Voice control language selection"},
    "speechLanSecTypeListContUl": {
        "Data": [
            {
                "speechLanSecTypeListSelImg": {"Data": false},
                "speechLanSecTypeListItem": {"Data": ""}
            }
        ]
    },
    "operateData": {
        "currSpeechLan": 0,
        "speechLanList": {
            "EM":["English","French","Spanish","Russian"],
            "EU":["English","French","German", "Italian","Spanish"],
            "SA":["English","Spanish","Portuguese"]
        },
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
            "germany":"German",
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
        speechDefaultMap: ["English", "English", "English", "French",
            "German", "Italian", "Portuguese"
            , "Russian", "Spanish", "Spanish"],
        chooseLaunage:"",
        scrollStep: 0,
        scrollHeight: 400
    },
    langData:{
        "English":[],
        "French":[],
        "Italian":[],
        "Spanish":[],
        "German":[],
        "Russian":[],
        "Portuguese":[],
        "Voice control language selection": []
    },
    rewrite: "speechLanRewrite"
}



function InitDefaultSpeechLan(area){
    var country = hiWebOsFrame.getCurrentCountry().toLowerCase();
    var currentLan ;
    var opData =  SpeechLanData.operateData;
    currentLan = opData.speechLanMap[country]
    switch (currentLan){
        case "English":
             opData.currSpeechLan = 0;
        case "India":
        case "Vietnam":

    }
    debugE("---->country:"+country);
}
function speechLanOKHandler() {
    this.DataSelectedIndex = this.SelectedIndex;
    var data = SpeechLanData;
    data.speechLanSecTypeListContUl.DataSelectedIndex = this.SelectedIndex;
    data.speechLanSecTypeListContUl.SelectedIndex = this.SelectedIndex;
    data.speechLanSecTypeListContUl.Data[data.operateData.currSpeechLan].speechLanSecTypeListSelImg.Data = false;
    data.operateData.currSpeechLan = this.SelectedIndex;
    data.speechLanSecTypeListContUl.Data[data.operateData.currSpeechLan].speechLanSecTypeListSelImg.Data = true;
    hiWebOsFrame.speechLan.rewriteDataOnly();
    data.operateData.chooseLaunage = data.speechLanSecTypeListContUl.Data[this.SelectedIndex].speechLanSecTypeListItem.Data;
    this.page.close();
    this.page.destroy();
    hiWebOsFrame.createPage("speech_LanResure_page", null, null, null, function (page) {
        hiWebOsFrame.speechLanResure = page;
        page.open();
        page.hiFocus();
    });

}


function speechLanRewrite(data, languageIdx) {
    try {

    } catch (ex) {
        debugE(ex.message);
    }
}


function speechLanOpenHandler() {
    try {
        speechLanOpenScrollBar(SpeechLanData);
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".wizardListContentUl").css({"margin-left":"65px","float":"left"});
            $(".wizardScrollBarFrame").css({"margin-left":"15px","float":"left"});
        }
        else {
            $(".wizardListContentUl").css({"margin-right":"65px","float":"right"});
            $(".wizardScrollBarFrame").css({"margin-right":"15px","float":"right"});
        }
    } catch (ex) {
        debugE(ex.message);
    }
}
function speechLanUpHandler() {
    try {
        var beginIdx = hiWebOsFrame.speechLan.getCaE("speechLanSecTypeListContUl").BeginIdx;
        if (beginIdx == UNDEFINED_DEFSTR) {
            debugE("beginIdx Err!!");
        } else {
            RefreshSpeechLanScrollMoveTo(beginIdx);
        }
    } catch (ex) {
        debugE(ex.message);
    }

}
function speechLanDownHandler() {
    try {
        var beginIdx = hiWebOsFrame.speechLan.getCaE("speechLanSecTypeListContUl").BeginIdx;
        if (beginIdx == UNDEFINED_DEFSTR) {
            debugE("beginIdx Err!!");
        } else {
            RefreshSpeechLanScrollMoveTo(beginIdx);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function speechLanOpenScrollBar(pageData) {
    try {
        debugG("RefreshWhiteBalance10PointLevelScrollBar called");
        var OpeData = pageData.operateData;
        if (pageData.speechLanSecTypeListContUl.Data.length <= 5) {
            $("#speechLanSecListScrollCon").css("visibility", "hidden");
            OpeData.scrollHeight = 400;
            OpeData.scrollStep = 0;
            debugG("scrollHeight: " + OpeData.scrollHeight + ", scrollStep: " + OpeData.scrollStep);

        } else {
            $("#speechLanSecListScrollCon").css("visibility", "visible");

            var listCnt = pageData.speechLanSecTypeListContUl.Data.length;
            OpeData.scrollHeight = 5 / listCnt * 400;
            OpeData.scrollStep = 400 / listCnt;

            debugG("OpeData.scrollHeight" + OpeData.scrollHeight);
            debugG("OpeData.scrollStep" + OpeData.scrollStep);

            $("#speechLanSecListScrollBar").css("height", OpeData.scrollHeight + "px");

            debugG("scrollHeight: " + OpeData.scrollHeight + ", scrollStep: " + OpeData.scrollStep);

            var beginIdx = hiWebOsFrame.speechLan.getCaE("speechLanSecTypeListContUl").BeginIdx;
            debugG('beginIdx: ' + beginIdx);
            RefreshSpeechLanScrollMoveTo(beginIdx); //TODO 此处不一定为0
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function RefreshSpeechLanScrollMoveTo(beginIdx) {
    try {
        debugG("beginIdx: " + beginIdx);
        var scrollMarginTop = beginIdx * SpeechLanData.operateData.scrollStep;
        debugG("scrollMarginTop:" + scrollMarginTop);
        $("#speechLanSecListScrollBar").css("margin-top", scrollMarginTop + "px");

    } catch (ex) {
        debugE(ex.message);
    }
}
