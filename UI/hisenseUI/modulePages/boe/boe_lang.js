/**
 * Created by Admin on 14-6-16.
 */
function getboeLanPageData(opt){
    opt.CaE = [

        {
            "id": "boeLanGridUl",//在页面中的按钮或者组件容器Id
            "description": "用于显示语言列表",
            "CaEType": "GridUl",
            "disable": false,
            "classes": {
                "normal": "boeGridUlLi_2_Normal", "focus": "boeGridUlLi_2_Focus","dataSelected":"boeGridUlLi_2_Normal","disable":"boeGridUlLi_2_Disable"
            },
            "handler": {
                "aftEnterHandler": "boeSetUseLanguage","aftUpHandler": "langGridulUpdateScroolbar","aftDownHandler": "langGridulUpdateScroolbar","befRightHandler": "boeLangToNextPageAdjust"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "langSelectImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/circle_setted.png",
                        "closeImg":""
                    },
                    "classes":{
                        "normal":"langSelectImg"
                    }
                },
                {
                    "id": "langName",
                    "description": "城市名称",
                    "CaEType": "span"
                },
                {
                    id: 'langName_marquee',
                    CaEType: 'span',
                    enableHtml: true
                }
            ],
            "GridUlConfig": {
                "GridUlDataItem": ["langName","langName_marquee", "langSelectImg" ],
                "LineNum":4,
                "PageSize":16,
                "FlipType":'VER',
                "ArrowFlag":true
            }
        },
        {
            "id":"langPageRightArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeRightArrowBtnNormal"
            }
        }
    ];
    boeLanPageInit();
    return boeLanPageData;
}
var boeLanPageData = {
    "boeLanGridUl": {
        "Data":[

        ],
        "SelectedIndex":3,
        "DataSelectedIndex":3
    },
    "audiofirlanglist":[
        {
            "number":9,
            "name":"English",
            "code":"eng"
        },
        {
            "number":1,
            "name":"Basque",//巴斯克语
            "code":"baq"
        },
        {
            "number":2,
            "name":"Bulgarian",//保加利亚语
            "code":"bul"
        },
        {
            "number":3,
            "name":"Cantonese",//粤语
            "code":"yue"
        },
        {
            "number":4,
            "name":"Catalan",//加泰罗尼亚语
            "code":"cat"
        },
        {
            "number":5,
            "name":"Croatian",//克罗地亚语
            "code":"scr"
        },
        {
            "number":6,
            "name":"Czech",//捷克
            "code":"cze"
        },
        {
            "number":7,
            "name":"Danish",//丹麦语
            "code":"dan"
        },
        {
            "number":8,
            "name":"Dutch",//荷兰语
            "code":"dut"
        },

        {
            "number":10,
            "name":"Estonian",//爱沙尼亚
            "code":"est"
        },
        {
            "number":11,
            "name":"Finnish",//芬兰语
            "code":"fin"
        },
        {
            "number":12,
            "name":"French",//法语
            "code":"fre"
        },
        {
            "number":13,
            "name":"Gaelic",//盖尔语
            "code":"gla"
        },
        {
            "number":14,
            "name":"Irish",//爱尔兰语
            "code":"gle"
        },
        {
            "number":15,
            "name":"Galician",//加利西亚语
            "code":"gle"
        },
        {
            "number":16,
            "name":"German",//德语
            "code":"ger"
        },
        {
            "number":17,
            "name":"Greek",//希腊语
            "code":"gre"
        },
        {
            "number":18,//印度语Hindi
            "name":"Hindi",
            "code":"hin"
        },
        {
            "number":19,//
            "name":"Hungarian",//匈牙利语
            "code":"hun"
        },
        {
            "number":20,
            "name":"Italian",
            "code":"ita"
        },
        {
            "number":21,
            "name":"Icelandic",
            "code":"ice"
        },
        {
            "number":22,
            "name":"Japanese",
            "code":"jpn"
        },
        {
            "number":23,
            "name":"Korean",
            "code":"kor"
        },
        {
            "number":24,
            "name":"Mandarin",//普通话
            "code":"cmn"
        },
        {
            "number":25,
            "name":"Maori",//毛利话
            "code":"mao"
        },
        {
            "number":26,
            "name":"Norwegian",//挪威语
            "code":"nor"
        },
        {
            "number":27,
            "name":"Polish",//波兰语
            "code":"pol"
        },

        {
            "number":28,
            "name":"Portuguese",//葡萄牙语
            "code":"por"
        },
        {
            "number":29,
            "name":"Romanian",//罗马尼亚语
            "code":"rum"
        },
        {
            "number":30,//俄语Russian
            "name":"Russian",
            "code":"rus"
        },
        {
            "number":31,//萨米
            "name":"Sami",
            "code":"smi"
        },
        {
            "number":32,//塞尔维亚
            "name":"Serbian",
            "code":"scc"
        },
        {
            "number":33,//斯洛伐克
            "name":"Slovak",
            "code":"slo"
        },
        {
            "number":34,//斯洛文尼亚
            "name":"Slovenian",
            "code":"sl"
        },
        {
            "number":35,
            "name":"Spanish",
            "code":"spa"
        },
        {
            "number":36,
            "name":"Swedish",
            "code":"swe"
        },
        {
            "number":37,
            "name":"Turkish",
            "code":"tur"
        },
        {
            "number":38,
            "name":"Welsh",
            "code":"wel"
        }
    ],
    "operateData":{
        "currLanIdx":3,
        "curAudioFisrtLangNumber":0,
        "supportLanMapList":[]
    },
    "langData":{
        "English":[]
    },
    rewrite:"boeRefreshLanguagePage"
}
function boeLangToNextPageAdjust()
{
    if(this.SelectedIndex % 4 == 3 || (this.SelectedIndex == boeLanPageData.boeLanGridUl.Data.length - 1) )
    {
        boeLanToNextPage();
    }
}
function getOSDLanguageIdxByNumber(number){
    var langMapList = getSettingOSDLanguageMapList();
    var currIdx = 0;
    for(var idx = 0; idx < langMapList.length;idx++){
        if(langMapList[idx].number == number){
            currIdx = idx;
            break;
        }
    }
    if(idx == langMapList.length){
        debugPrint("getLanIdxByNumber:number"+number+" not exist!!");
        if(tv == true){
            currIdx = 0;
            model.language.setOsd(langMapList[0].number);
        }
    }
    return currIdx;
}
function getAudioFisrtLangByLangIdx(number){
    var data =boeLanPageData;
    var langMapList = getSettingOSDLanguageMapList();
    var currNumber = 0;
    for(var i = 0; i < data.audiofirlanglist.length;i++){

            if (data.audiofirlanglist[i].code == langMapList[number].code) {
                currNumber = data.audiofirlanglist[i].number;
                break;
            }
        else
            {
                currNumber = data.audiofirlanglist[0].number;
            }

    }

    return currNumber;
}

/*******************************************************************
 name:boeLanPageInit
 description:初始化boe语言设置页
 input:currStep:
 output:
 return
 *******************************************************************/

function boeLanPageInit(){
    try{
        var data = boeLanPageData;
        data.operateData.supportLanMapList = getSettingOSDLanguageMapList();
        if(tv == true){
            var langNumber =  model.language.getOsd();
            //model.language.onOsdChaged = boeLanguageOnChange;
            model.language.setOsd(langNumber);
            //debugPrint("xuehongfeng" + langNumber);
            data.operateData.currLanIdx = getOSDLanguageIdxByNumber(langNumber);
            //debugPrint("[xuehongfeng]currLanIdx"+data.operateData.currLanIdx,DebugLevel.ALWAYS);
            data.operateData.curAudioFisrtLangNumber = getAudioFisrtLangByLangIdx(data.operateData.currLanIdx);
            //debugPrint("[xuehongfeng]curAudioFisrtLangNumber"+data.operateData.curAudioFisrtLangNumber,DebugLevel.ALWAYS);
            Updatesyslangid(data.operateData.currLanIdx);
            hiWebOsFrame.setLanguage(data.operateData.supportLanMapList[data.operateData.currLanIdx].code);
            //model.language.setAudioFavoured(data.operateData.curAudioFisrtLangNumber);
            
            //debugPrint("xuehongfeng" + data.operateData.currLanIdx);
        }else{
            data.operateData.currLanIdx = 0;
        }
        debugPrint(data.operateData.supportLanMapList[data.operateData.currLanIdx].name);
    }catch (ex){
        debugPrint("wizardLanPageInit"+ex.message);
    }
}
/*******************************************************************
 name:boeSetUseLanguage
 description:设置使用语言
 input:currStep:
 output:
 return
 *******************************************************************/
function boeSetUseLanguage(operateData,data){

    try {
        hiWebOsFrame.lockAllKeys();

        //debugPrint("boeSetUseLanguage:"+this.DataSelectedIndex+","+this.SelectedIndex,DebugLevel.ALWAYS);
        this.DataSelectedIndex = this.SelectedIndex;
        operateData.currLanIdx = this.SelectedIndex;

        if (tv == true) {
            //debugPrint("boeSetUseLanguage"+operateData.supportLanMapList[this.SelectedIndex].number,DebugLevel.ALWAYS);
            //model.language.onOsdChaged = boeLanguageOnChange;
            //debugPrint("[xuehongfeng]currLanIdx"+operateData.currLanIdx,DebugLevel.ALWAYS);
            operateData.curAudioFisrtLangNumber = getAudioFisrtLangByLangIdx(operateData.currLanIdx);
            //debugPrint("[xuehongfeng]curAudioFisrtLangNumber"+operateData.curAudioFisrtLangNumber,DebugLevel.ALWAYS);
            //model.language.setAudioFavoured(operateData.curAudioFisrtLangNumber);

            model.language.setOsd(operateData.supportLanMapList[this.SelectedIndex].number);
            Updatesyslangid(this.SelectedIndex);
            hiWebOsFrame.setLanguage(operateData.supportLanMapList[this.SelectedIndex].code);
            //debugPrint("boeSetUseLanguage"+operateData.supportLanMapList[this.SelectedIndex].code,DebugLevel.ALWAYS);
        }
        else {
            hiWebOsFrame.setLanguage(operateData.supportLanMapList[this.SelectedIndex].code);
        }

        //MT5657VL2EU-1869
        var autoSetlist = ["lav", "est", "lit"];
        var languageToLocationMap = {
            "lav": {
                "locationCode": "LVA",
                "locationName": "Latvia"    //拉脱维亚
            },
            "est": {
                "locationCode": "EST",
                "locationName": "Estonia"   //爱沙尼亚
            },
            "lit": {
                "locationCode": "LTU",
                "locationName": "Lithuania" //立陶宛
            }
        };
        var autoSetIndex = autoSetlist.indexOf(operateData.supportLanMapList[this.SelectedIndex].code);
        if (autoSetIndex > -1) {
            if(getCurrVeraForWizard()=='EU')
            {
                writeFileToNative("hisenseUI/currentcty.txt", languageToLocationMap[autoSetlist[autoSetIndex]].locationCode, 1);
            }
            else {
                tv && model.basicSetting.setTvsetLocation(languageToLocationMap[autoSetlist[autoSetIndex]].locationCode);//设置所在国家
            }
            hiWebOsFrame.setCurrentCountry(languageToLocationMap[autoSetlist[autoSetIndex]].locationName);
        }

        //hiWebOsFrame.boe_lang_page_id.hiFocus('langPageRightArrowBtn');
        hiWebOsFrame.boe_lang_page_id.rewriteDataOnly();
        hiWebOsFrame.boe_bg_page_id.rewriteDataOnly();
        boeLanToNextPage();
    }
    catch (ex) {
        DBG_ERROR("boeSetUseLanguage: " + ex.message);
    }
    finally {
        hiWebOsFrame.unLockAllKeys();
    }
}

/*******************************************************************
 name:boeRefreshLanguagePage
 description:刷新语言页
 input:
 output:
 return
 *******************************************************************/
function boeRefreshLanguagePage(data,languageIdx){

    if(data.boeLanGridUl.Data.length > data.operateData.supportLanMapList.length){
        data.boeLanGridUl.Data.splice(data.operateData.supportLanMapList.length);
    }else if(data.boeLanGridUl.Data.length < data.operateData.supportLanMapList.length){
        while(data.boeLanGridUl.Data.length < data.operateData.supportLanMapList.length){
            var itemData = {
                "langSelectImg":{"Data":false},
                "langName":{"Data": "English"},
                "langName_marquee":{"Data": "English"}
            }
            data.boeLanGridUl.Data.push(itemData);
        }
    }
    $.each(data.boeLanGridUl.Data, function (idx, item){
        item.langSelectImg.Data = false;
        item.langName.Data = data.operateData.supportLanMapList[idx].name;
        item.langName_marquee.Data = data.operateData.supportLanMapList[idx].name;
        if(data.operateData.supportLanMapList[idx].name.length>9) {
            item.langName_marquee.Data = '<marquee>' + data.operateData.supportLanMapList[idx].name + '</marquee>';
        }//data.operateData.supportLanMapList[idx].name;
        else
        {
            item.langName_marquee.Data =data.operateData.supportLanMapList[idx].name;
        }

    });




    refresh_langGridUI_bynumber(data.operateData.supportLanMapList.length);
    data.boeLanGridUl.SelectedIndex = data.operateData.currLanIdx;
    data.boeLanGridUl.DataSelectedIndex = data.operateData.currLanIdx;
    data.boeLanGridUl.Data[data.boeLanGridUl.DataSelectedIndex].langSelectImg.Data = true;
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
        $(".langSelectImg").css({"margin-left":"250px"});
    }else{
        $(".langSelectImg").css({"margin-right":"250px"});
    }
}
/*******************************************************************
 name:由语言设置页进入国家设置页
 description:
 input:
 output:
 return
 *******************************************************************/
function boeLanToNextPage(operateData,data){

//    wizardInitCountryPage();
    if (hiWebOsFrame.getCurrentArea() == "COL") {
        if (tv == true) {
            try {
                model.basicSetting.setTvsetLocation("COL"); //设置国家COL
                hiWebOsFrame.setCurrentCountry("Colombia");
                var ColTimeZoneCode = -5;   //哥伦比亚时区"-5"
                ColTimeZoneCode = ColTimeZoneCode * 3600;
                model.timerfunc.setNewTimeZone(ColTimeZoneCode);    //设置时区
                debugPrint("location: " + model.basicSetting.getTvsetLocation() +  " timezone: " + model.timerfunc.getNewTimeZone());
            }
            catch (ex) {
                debugPrint("set location or timezone fail" + ex.message);
            }
        }
        hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
            hiWebOsFrame.boe_bg_page_id = a;
            hiWebOsFrame.createPage('boe_disclaimer_page_id', null, null, null, function (b) {
                hiWebOsFrame.boe_disclaimer_page_id = b;
                hiWebOsFrame.boe_bg_page_id.open();
                hiWebOsFrame.boe_lang_page_id.close();
                hiWebOsFrame.boe_lang_page_id.destroy();
                b.open();
                b.hiFocus();

            })
        })
    }
    else {
        hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
            hiWebOsFrame.boe_bg_page_id = a;
            hiWebOsFrame.createPage('boe_cty_page_id', null, null, null, function (b) {
                hiWebOsFrame.boe_cty_page_id = b;
                hiWebOsFrame.boe_bg_page_id.open();
                hiWebOsFrame.boe_lang_page_id.close();
                hiWebOsFrame.boe_lang_page_id.destroy();
                b.hiFocus();
                b.open();

                //b.hiFocus();
            })
        });
    }


}

function boeLanPageOnOpen(){
    var data = boeLanPageData;
    boeChangeCurrSep(1);
    var page_num = 0;
    var curr_page = 0;
    var height = 0;
    var top = 0;
   
    if(boeLanPageData.boeLanGridUl.Data.length % 16 == 0)
    {
        page_num = boeLanPageData.boeLanGridUl.Data.length / 16;
    }
    else
    {
        page_num = boeLanPageData.boeLanGridUl.Data.length / 16 + 1;
    }
    height = 550 / page_num;
    if(parseInt(page_num)>1)
    {

        $("#LangScrollBar").css("height",height + 'px');
        $("#LangScrollBar").css("visibility","visible");
    }
    else
    {
        $("#LangScrollBar").css("visibility","hidden");
    }
    curr_page = parseInt(boeLanPageData.operateData.currLanIdx / 16);
    top = curr_page * height;
    $("#LangScrollBar").css("top",top + 'px');
    //hiWebOsFrame.boe_lang_page_id.hiFocus('boeLanGridUl');
}
function langGridulUpdateScroolbar()
{
    var top = 0;
    var height = 0;
    var page_num = 0;
    if(boeLanPageData.boeLanGridUl.Data.length % 16 == 0)
    {
        page_num = boeLanPageData.boeLanGridUl.Data.length / 16;
    }
    else
    {
        page_num = boeLanPageData.boeLanGridUl.Data.length / 16 + 1;
    }
    height = 550 / page_num;
    top = (parseInt(this.SelectedIndex / 16 ))*height;
    $("#LangScrollBar").css("top",top + 'px');
}
function refresh_langGridUI_bynumber(number)
{
    var line_number = 0;
    var margin_top = 0;
    var margin_left = 0;
    if((number%4) ==0)
    {
        line_number = number/4;
    }
    else
    {
        line_number = number/4 + 1;
    }
    if(line_number<4) {
        margin_top = (520 - line_number * 110) / 2;
    }
    else{
        margin_top = 60;
    }
    if(number < 4)
    {
        margin_left = (1440-354*(number%4))/2;
    }
    $("#boeLanGridUl").css("margin-top",margin_top + 'px');
    $("#boeLanGridUl").css("margin-left",margin_left + 'px');

}
function boeLanPageOnDestroy(){
    hiWebOsFrame.boe_lang_page_id = null;
}
