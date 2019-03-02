/**
 * Created by Administrator on 14-6-17.
 */
function getSettingLang1PageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_lang1_head_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_lang1_head_text1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_lang_menu1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_menu2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_menu3",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":'setting_select_lang_disable'
            },
            "nav":{"downTo": "setting_sys_lang_audio3", "upTo": ""},
            "handler": {
                "aftDownHandler":"SettingSyslangfocus",
                "aftUpHandler":"SettingSyslangfocus",
                "befEnterHandler": "SettingSysMLEnHandler",
                "befLeftHandler":"SettingSysLangEscHandler",
                "befEscHandler": "SettingSysLangEscHandler"
            }
        },
        {
            "id": "setting_sys_lang_audio1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_audio2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_audio3",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":'setting_select_lang_disable'
            },
            "nav":{"downTo": "setting_sys_lang_sec_audio3", "upTo": "setting_sys_lang_menu3"},
            "handler": {
                "aftDownHandler":"SettingSyslangfocus",
                "aftUpHandler":"SettingSyslangfocus",
                "befEnterHandler": "SettingSysAudioFirEnHandler",
                "befLeftHandler":"SettingSysLangEscHandler",
                "befEscHandler": "SettingSysLangEscHandler"
            }
        },
        {
            "id": "setting_sys_lang_sec_audio1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_sec_audio2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_sec_audio3",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":'setting_select_lang_disable'
            },
            "nav":{"downTo": "setting_sys_lang_fir_subtitle3", "upTo": "setting_sys_lang_audio3"},
            "handler": {
                "aftDownHandler":"SettingSyslangfocus",
                "aftUpHandler":"SettingSyslangfocus",
                "befEnterHandler": "SettingSysAudioSecEnHandler",
                "befLeftHandler":"SettingSysLangEscHandler",
                "befEscHandler": "SettingSysLangEscHandler"
            }
        },
        {
            "id": "setting_sys_lang_fir_subtitle1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_fir_subtitle2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_fir_subtitle3",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":'setting_select_lang_disable'
            },
            "nav":{"downTo": "setting_sys_lang_sec_subtitle3", "upTo": "setting_sys_lang_sec_audio3"},
            "handler": {
                "aftDownHandler":"SettingSyslangfocus",
                "aftUpHandler":"SettingSyslangfocus",
                "befEnterHandler": "SettingSysSubFirEnHandler",
                "befLeftHandler":"SettingSysLangEscHandler",
                "befEscHandler": "SettingSysLangEscHandler"
            }

        },
        {
            "id": "setting_sys_lang_sec_subtitle1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_sec_subtitle2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_sec_subtitle3",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":'setting_select_lang_disable'
            },
            "nav":{"downTo": "setting_sys_lang_dig_text3", "upTo": "setting_sys_lang_fir_subtitle3"},
            "handler": {
                "aftDownHandler":"SettingSyslangfocus",
                "aftUpHandler":"SettingSyslangfocus",
                "befEnterHandler": "SettingSysSubSecEnHandler",
                "befLeftHandler":"SettingSysLangEscHandler",
                "befEscHandler": "SettingSysLangEscHandler"
            }
        },
        {
            "id": "setting_sys_lang_dig_text1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_dig_text2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_dig_text3",
            "description": " ",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":'setting_select_lang_disable'
            },
            "nav":{"downTo": "setting_sys_lang_dec_page3", "upTo": "setting_sys_lang_sec_subtitle3"},
            "handler": {
                "aftDownHandler":"SettingSyslangfocus",
                "aftUpHandler":"SettingSyslangfocus",
                "befEnterHandler": "SettingSysDigEnHandler",
                "befLeftHandler":"SettingSysLangEscHandler",
                "befEscHandler": "SettingSysLangEscHandler"


            }
        },
        {
            "id": "setting_sys_lang_dec_page1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_dec_page2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_lang_dec_page3",
            "description": " ",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":'setting_select_lang_disable'
            },
            "nav":{ "upTo": "setting_sys_lang_dig_text3"},
            "handler": {
                "aftDownHandler":"SettingSyslangfocus",
                "aftUpHandler":"SettingSyslangfocus",
                "befEnterHandler": "SettingSysDecodeEnHandler",
                "befLeftHandler":"SettingSysLangEscHandler",
                "befEscHandler": "SettingSysLangEscHandler"

            }
        },
        {
            "id": "setting_sys_lang__helpinfo_content",
            "description": "menulanusge",
            "CaEType": "div"
        }
    ]
    languagepageinit();
    return PageDataSettingSysLang;
}
var PageDataSettingSysLang = {
    "setting_sys_lang1_head_img1":{Data:"img/head_arrow.png"},
    "setting_sys_lang1_head_text1":{Data:"Language"},
    "setting_sys_lang_menu1":{Data:"Menu Language:"},
    "setting_sys_lang_menu2":{Data:"English"},
    "setting_sys_lang_menu3":{Data:"Adjust"},

    "setting_sys_lang_audio1":{Data:"Primary Audio:"},
    "setting_sys_lang_audio2":{Data:"English"},
    "setting_sys_lang_audio3":{Data:"Adjust"},
    "setting_sys_lang_sec_audio1":{Data:"Secondary Audio:"},
    "setting_sys_lang_sec_audio2":{Data:"English"},
    "setting_sys_lang_sec_audio3":{Data:"Adjust"},

    "setting_sys_lang_fir_subtitle1":{Data:"Primary Subtitle:"},
    "setting_sys_lang_fir_subtitle2":{Data:"English"},
    "setting_sys_lang_fir_subtitle3":{Data:"Adjust"},

    "setting_sys_lang_sec_subtitle1":{Data:"Secondary Subtitle:"},
    "setting_sys_lang_sec_subtitle2":{Data:"English"},
    "setting_sys_lang_sec_subtitle3":{Data:"Adjust"},

    "setting_sys_lang_dig_text1":{Data:"Digital Teletext:"},
    "setting_sys_lang_dig_text2":{Data:"English"},
    "setting_sys_lang_dig_text3":{Data:"Adjust"},

    "setting_sys_lang_dec_page1":{Data:"Decoding Page:"},
    "setting_sys_lang_dec_page2":{Data:"English"},
    "setting_sys_lang_dec_page3":{Data:"Adjust"},
    "setting_sys_lang__helpinfo_content":{Data:""},
    "operateData": {
        "helpcontent":"",
        "currentpagelist":["osd","firaudio","secaudio","firsub","secsub","digtext","decodepage"],
        "currentfocus":"osd",
        "curArea":"EU",
        "osdlanglist": [
            {
                "number":0,
                "name":"English",
                "code":"eng"
            },
            {
                "number":1,
                "name":"Français",
                "code":"fre"
            },
            {
                "number":16,
                "name":"Deutsch",
                "code":"ger"
            },
            {
                "number":17,
                "name":"Italiano",
                "code":"ita"
            },
            {
                "number":2,
                "name":"Español",
                "code":"spa"
            },
            {
                "number":3,
                "name":"Português",
                "code":"por"
            },
            {
                "number":18,
                "name":"Svenska",
                "code":"swe"
            },
            {
                "number":19,
                "name":"Dansk",
                "code":"dan"
            },
            {
                "number":20,
                "name":"Suomi",
                "code":"fin"
            },
            {
                "number":21,
                "name":"Norsk",
                "code":"nor"
            },
            {
                "number":22,
                "name":"Czech",
                "code":"cze"
            },
            //斯洛伐克语
            {
                "number":23,
                "name":"Slovak",
                "code":"slo"
            },
            {//波兰语
                "number":24,
                "name":"Polish",
                "code":"pol"
            },
            {//匈牙利语
                "number":25,
                "name":"Hungarian",
                "code":"hun"
            },
            {//保加利亚语
                "number":26,
                "name":"Bulgarian",
                "code":"bul"
            },
            {//土耳其语
                "number":27,
                "name":"Turkish",
                "code":"tur"
            },
            {//乌兹别克语
                "number":10,
                "name":"Uzbek",
                "code":"uzb"
            }
//            {
//                "number":19,
//                "name":"中文",
//                "code":"chi"
//            },

        ],
        "adiofirlanglist":[
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
                "code":"slk"
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
        "adioseclanglist":[
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
        "firsublist":[
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
        "secsublist":[
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
        "digteletextlist":[
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
        "decodepagelist":[
            {
                "number":0,
                "name":"WEST EUR"
            },
            {
                "number":1,
                "name":"EAST EUR"

            },
            {
                "number":2,
                "name":"Russian"

            },

            {
                "number":3,
                "name":"RUSSIA-2"

            },
            {
                "number":4,
                "name":"Greek"

            },

            {
                "number":5,
                "name":"Turkey"

            },
            {
                "number":6,
                "name":"Arab/Hbrw"

            },
            {
                "number":7,
                "name":"Persian"

            },
            {
                "number":8,
                "name":"Arab"

            },
            {
                "number":9,
                "name":"Russia Byelorussian"

            }
        ],
        "curosdlang":"English",
        "curaudiofir":"English",
        "curaudiosec":"English",
        "cursubfir":"English",
        "cursubsec":"English",
        "curdig":"English",
        "curdecode":"English",
        "helplist":[
            {
                "title":"Menu Language",
                "content":"Set the default language for the TV menu."
            },
            {
                "title":"Primary Audio",
                "content":"Set the default audio output language for the type of digital broadcast content that you're viewing."
            },
            {
                "title":"Secondary Audio",
                "content":"Set the secondary audio output language for digital broadcast content."
            },
            {
                "title":"Primary Subtitle Language",
                "content":"Set the default subtitle language for digital broadcast content."
            },
            {
                "title":"Secondary Subtitle",
                "content":"Set the secondary subtitle language for digital broadcast content."
            },
            {
                "title":"teletext",
                "content":"Set the Teletext language"
            },
            {
                "title":"decoding page",
                "content":"Adjusts Teletext decoding."
            },
            {
                "title":"Secondary Audio",
                "content":"Set the decord language of Teletext."
            }
        ],
        "isHimediaOn":false,
        "isNetflixOn":false
    },
    "langData":{
        "Adjust":[],
        "Russia Byelorussian":[],
        "Arab":[],
        "Persian":[],
        "Arab/Hbrw":[],
        "WEST EUR":[],
        "EAST EUR":[],
        "RUSSIA-2":[],
        "Russian":[],
        "Greek":[],
        "Turkey":[],
        "Set the default audio output language for the type of digital broadcast content that you're viewing.":[],
        "Set the default language for the TV menu.":[],
        "Language":["Language","Sprache","Lingua","Idioma","Idioma","Langue","Språk","Språk","Sprog","Kieli","语言选择"],
        "Primary Audio:":["Primary Audio:","Primäres Audio:","Audio primario:","Áudio Principal:","Audio primario:","Audio Primaire:","Primær lyd","Primär ljud:","Primær lyd:","Ensisijainen ääni:","首选音轨:"],
        "Secondary Audio:":["Secondary Audio:","Sekundäres Audio:","Audio secondario:","Áudio Secundário:","Audio secundario:","Audio Secondaire:","Sekundær lyd:","Sekundär ljud:","Sekundær lyd:","Toissijainen ääni:","备选音轨:"],
        "Primary Subtitle:":["Primary Subtitle:","Primäre Untertitel:","Sottotitolo primario:","Legenda Principal:","Subtítulo primario:","Sous-titres Primaires:","Primær tekst:","Primär undertext:","Primære undertekstsprog:","Ensisijainen tekstitys:","首选字幕:"],
        "Secondary Subtitle:":["Secondary Subtitle:","Sekundäre Untertitel:","Sottotitolo secondario:","Legenda Secundária","Subtítulo secundario:","Sous-titres Secondaires","Sekundær tekst:","Sekundär undertext:","Sekundære undertekstsprog:","Toissijainen tekstitys:","备选字幕:"],
        "Digital Teletext:":["Digital Teletext:","Digitaler Videotext:","Teletext digitale:","Teletexto Digital:","Teletexto digital:","Télétexte Numérique:","Digital tekst-TV","Digital text-TV:","Digitalt tekst-tv:","Digitaalinen teksti-TV:","数字图文:"],
        "Decoding Page:":["Decoding Page:","Dekodierungsseite:","Pagina di decodifica:","A Descodificar Página:","Página de decodificación:","Décodage de Page:","Dekoder side","Avkodningssida:","Afkoder side:","Dekoodaussivu:","解码语言:"],
        "Menu Language:":["Menu Language:","Menüsprache:","Menu lingua:","Menu Idioma:","Idioma del menú:","Menu Langue:","Menyspråk:","Menyspråk:","Menusprog:","Valikkokieli:","菜单语言:"],
        "Adjust":[],
        "German":[],
        "Cantonese":["Cantonese","Kantonesisch","Cantonese","Chinês tradicional","Cantonés","Cantonais","Kantonesisk","Kantonesiska","Kantonesisk","kantoninkiina","Kantonština","Kantončina","Kantoński","kantoni","Кантонски","Kanton Lehçesi","Kantoncha"],
        "Dutch":["Dutch","Holländisch","olandese","alemão","Holandés","Néerlandais","Nederlandsk","Holländska","Hollandsk","Hollantilainen","Holandština","Holandčina","Niderlandzki","holland","Холандски","Felemenkçe","Niderlandcha"],
        "Hindi":["Hindi","Hindi","hindi","Hindú","hindi","Hindi","Hindi","Hinduiska","Hindi","hindi","Hindština","Hindčina","Hindi","hindi","Хинди","Hintçe","Hindcha"],
        "Icelandic":["Icelandic","Isländisch","islandese","Islandês","Islandés","Islandais","Islandsk","Isländska","Islandsk","islanti","Islandština","islandčina","Islandzki","izlandi","Исландски","İzlandaca","Islandcha"],
        "Korean":["Korean","Koreanisch","coreano","Coreano","Coreano","Coréen","Koreansk","Koreanska","Koreansk","korea","Korejština","Kórejčina","Koreański","koreai","Корейски","Korece","Koreyscha"],
        "Mandarin":["Mandarin","Mandarin","mandarino","Mandarim","Mandarín","Mandarin","Mandarin","Mandarin","Mandarin","mandariinikiina","Mandarinština","Mandarinčina","Mandaryński","mandarin","Книжовен китайски език (Мандарин)","Mandarin","Mandarincha"],
        "Maori":["Maori","Maori","maori","Nativos da nova zelândia","Maorí","Maori","Maori","Maori","Maori","maori","Maorština","Maorčina","Maoryski","maori","Маорски","Maori Dili","Maoricha"],
        "Sami":["Sami","Samisch","sami","Nativos da lapónia","Sami","Same","Samisk","Samiska","Sami","saame","Sámština","Saamčina","Sami (lapoński)","számi","Сами","Sami Dili","Saamcha"],
        "English":["English","Englisch","inglese","inglês","inglés","anglais","Engelsk","engelska","Engelsk","Englanti","Slovenčina","Slovenčina","Angielski","angol","Български","İngilizce","Inglizcha "],
        "French":["French","Französisch","francese","francês","francés","français","Fransk","franska","Fransk","Ranska","Francouzština","Francúzština","Francuski","francia","Френски","Fransızca","Fransuzcha"],
        "Italian":["Italian","Italienisch","italiano","italiano","italiano","italien","Italiensk","italienska","Italiensk","Italia","Italština","Taliančina","Włoski","olasz","Италиански","İtalyanca","Italyancha"],
        "Spanish":["Spanish","Spanisch","spagnolo","espanhol","español","espagnol","Spansk","spanska","Spansk","Espanja","Španělština","Španielčina","Hiszpański","spanyol","Испански","İspanyolca","Ispancha"],
        "Netherlands":["Netherlands","Holländisch","olandese","neerlandês","Países Bajos","néerlandais","Nederland","holländska","Hollandsk","Hollanti","Nizozemsko","Holandsko","Niderlandzki","holland","Нидерландски","Hollanda","Gollandcha"],
        "Czech":["Czech","Tschechisch","ceco","checo","checo","tchèque","Tsjekkisk","tjeckiska","Tjekkisk","Tsekki","Čeština","Čeština","Czeski","cseh","Чешки","Çekçe","Chexcha"],
        "Greek":["Greek","Griechisch","greco","grego","griego","grec","Gresk","grekiska","Græsk","Kreikka","Řečtina","Gréčtina","Grecki","görög","Гръцки","Yunanca","Grekcha"],
        "Polish":["Polish","Polnisch","polacco","polaco","polaco","polonais","Polsk","polska","Polsk","Puola","Polština","Poľština","Polski","lengyel","Полски","Polonyaca","Polyakcha"],
        "Hungarian":["Hungarian","Ungarisch","ungherese","húngaro","húngaro","hongrois","Ungarsk","ungerska","Hungarian","Unkari","Maďarština","Maďarčina","Węgierski","magyar","Унгарски","Macarca","Vengercha"],
        "Finnish":["Finnish","Finnisch","finlandese","finlandês","finlandés","finnois","Finsk","finska","Finsk","Suomi","Finština","Fínčina","Fiński","finn","Финландски","Fince","Fincha "],
        "Slovenian":["Slovenian","Slowenisch","sloveno","esloveno","esloveno","slovène","Slovensk","slovenska","Slovensk","Sloveeni","Slovinština","Slovinčina","Słoweński","szlovén","Словенски","Slovence","Slovencha"],
        "Slovak":["Slovak","Slowakisch","slovacco","eslovaco","eslovaco","slovaque","Slovakisk","slovakiska","Slovak","Slovakki","Slovenčina","Slovenčina","Słowacki","szlovák","Словашки","Slovakça","Slovakcha"],
        "Turkish":["Turkish","Türkisch","turco","turco","turco","turc","Tyrkisk","turkiska","Tyrkisk","Turkki","Turečtina","Turečtina","Turecki","török","Турски","Türkçe","Turkcha "],
        "Swedish":["Swedish","Schwedisch","svedese","sueco","sueco","suédois","Svensk","svenska","Svensk","Ruotsi","Švédština","Švédčina","Szwedzki","svéd","Шведски","İsveççe","Shvedcha"],
        "Danish":["Danish","Dänisch","danese","dinamarquês","danés","danois","Dansk","danska","Dansk","Tanska","Dánština","Dánština","Duński","dán","Датски","Danca","Datcha"],
        "Portuguese":["Portuguese","Portugiesisch","portoghese","português","portugués","portugais","Portugisisk","portugisiska","Portugisisk","Portugali","Portugalština","Portugalčina","Portugalski","portugál","Португалски","Portekizce","Portugalcha"],
        "Russian":["Russian","Russisch","russo","russo","ruso","russe","Russisk","ryska","Russisk","Venäjä","Ruština","Ruština","Rosyjski","orosz","Руски","Rusça","Ruscha"],
        "Norwegian":["Norwegian","Norwegisch","norvegese","norueguês","noruego","norvégien","Norsk","norska","Norwegian","Norja","Norština","Nórčina","Norweski","norvég","Норвежки","Norveççe","Norvegcha"],
        "Chinese":["Chinese","Chinesisch","cinese","chinês","chino","chinois","Kinesisk","kinesiska","Kinesisk","Kiina","Čínština","Čínština","Chiński","kínai","Китайски","Çince","Xitoycha "],
        "Latvian":["Latvian","Lettisch","lettone","letão","letón","letton","Latvisk","lettiska","Lettisk","Latvia","Lotyština","Lotyština","Łotewski","lett","Латвийски","Letonca","Latishcha"],
        "Lithuanian":["Lithuanian","Litauisch","lituano","lituano","lithuanian","lituanien","Litauisk","litauiska","Litauisk","Liettua","Litevština","Litovčina","Litewski","litván","Литовски","Litvanyaca","Litvacha"],
        "Estonian":["Estonian","Estländisch","estone","estoniano","estonio","estonien","Estisk","estniska","Estisk","Viro","Estonština","Estónčina","Estoński","észt","Естонски","Estonyaca","Estoncha"],
        "Ukrainian":["Ukrainian","Ukrainisch","ucraino","ucraniano","ucraniano","ukrainien","Ukrainsk","ukrainska","Ukrainsk","Ukraina","Ukrajinština","Ukrajinčina","Ukraiński","ukrán","Украински","Ukraynaca","Ukraincha"],
        "Romanian":["Romanian","Rumänisch","rumeno","romeno","rumano","roumain","Rumensk","rumänska","Rumænsk","Romania","Rumunština","Rumunčina","Rumuński","román","Румънски","Romence","Rumincha"],
        "Byelorussian":["Byelorussian","Weißrussisch","bielorusso","bielorrusso","bielorruso","biélorusse","Hviterussisk","vitryska","Hviderussisk","Valko-venäjä","Běloruština","Bieloruština","Białoruski","belorusz","Белоруски","Beyaz Rusça","Beloruscha"],
        "Serbian":["Serbian","Serbisch","serbo","sérvio","serbio","serbe","Serbisk","serbiska","Serbisk","Serbokroatia","Srbština","Srbčina","Serbski","szerb","Сръбски","Sırpça","Serbcha"],
        "Croatian":["Croatian","Kroatisch","croato","croata","croata","croate","Kroatisk","kroatiska","Kroatisk","Kroatia","Chorvatština","Chorvátčina","Chorwacki","horvát","Хърватски","Hırvatça","Xorvatcha"],
        "Japanese":["Japanese","Japanisch","giapponese","japonês","japonés","japonais","Japansk","japanska","Japansk","Japani","Japonština","Japončina","Japoński","japán","Японски","Japonca","Yaponcha "],
        "Irish":["Irish","Irisch","irlandese","irlandês","irlandés","irlandais","irish","iriska","Irsk","Englanti. Iirie","Irština","Írčina","Irlandzki","ír","Ирландски","İrlandaca","Irlandcha"],
        "Welsh":["Welsh","Walisisch","gallese","galês","galés","gallois","Walisisk","kymriska","Welsh","Englanti, Wales","Velština","Waleština","Walijski","welszi","Уелски","Galce","Uelscha"],
        "Catalan":["Catalan","Katalanisch","catalano","catalão","catalán","catalan","Katalansk","katalanska","Katalansk","Katalaani","Katalánština","Katalánčina","Kataloński","katalán","Каталонски","Katalanca","Kataloncha"],
        "Gaelic":["Gaelic","Gälisch","gaelico","gaélico","gaélico","gaëlique","gaelic","gäliska","Gælisk","Keltti","Velština","Galčina","Gaelicki","gael","Галски","Galik","Gaelcha"],
        "Basque":["Basque","Baskisch","basco","basco","vasco","basque","basque","baskiska","Basque","Baski","Baskičtina","Baskičtina","Baskijski","baszk","Баскски","Baskça","Baskcha"],
        "Galician":["Galician","Galicisch","galiziano","galego","gallego","galicien","galician","galiciska","Galicisk","Galician","Galicijština","Galícijčina","Galicyjski","galíciai","Галисийски","Galiçyaca","Galisiycha"],
        "Scots":["Scots","Schottisch","scozzese","escocês","escocés","écossais","scots","lågskotska","Skottisk","Englanti","Skotština","Škótčina","Szkocki","skót","Шотландски","İskoçça","Shotlancha"],
        "Breton":["Breton","Bretonisch","bretone","bretão","breton","breton","breton","bretonska","Breton","Ranska","Bretonština","Bretónčina","Bretoński","breton","Бретонски","Bretonca","Bretoncha"],
        "Corsican":["Corsican","Korsisch","corso","córsego","corso","corse","corsican","korsikanska","Korsikansk","Ranska","Korsičtina","Korzičtina","Korsykański","korzikai","Корсикански","Korsikaca","Korsikacha"],
        "Alemannic":["Alemannic","Alemannisch","alemanno","alemânico","alemánico","alémanique","alemannic","alemanniska","Alemannisk","Saksa","Alemanština","Alemančina","Alemański","alemann","Алемански","Alemanik","Alemancha"],
        "Bulgarian":["Bulgarian","Bulgarisch","bulgaro","búlgaro","búlgaro","bulgare","Bulgarsk","bulgariska","Bulgarsk","Bulgaria","Bulharština","Bulharčina","Bułgarski","bolgár","Български","Bulgarca","Bolgarcha"],
        "Arabic":["Arabic","Arabisch","arabo","árabe","árabe","arabe","Arabisk","arabiska","Arabisk","Arabia","Arabština","Arabčina","Arabski","arab","Арабски","Arapça","Arabcha"],
        "Walloon":["Walloon","Wallonisch","vallone","valão","valonia","wallon","walloon","vallonska","Vallonien","Englanti","Valonština","Valónčina","Waloński","vallon","Валонски","Walloon","Valloncha"],
        "Luxembourgish":["Luxembourgish","Luxemburgisch","lussemburghese","luxemburguês","luxemburgués","luxembourgeois","luxembourgish","luxemburgiska","Luxembourgsk","Luxemburg","Lucemburština","Luxemburčina","Luksemburski","luxemburgi","Люксембургски","Lüksemburgça","Lyuksemburgcha"]

    },

    rewrite:function(pageData){
        pageData.setting_sys_lang__helpinfo_content.Data= PageDataSettingSysLang.operateData.helpcontent;
        pageData.setting_sys_lang_menu2.Data=pageData.operateData.curosdlang;
        pageData.setting_sys_lang_audio2.Data=pageData.operateData.curaudiofir;
        pageData.setting_sys_lang_sec_audio2.Data=pageData.operateData.curaudiosec;
        pageData.setting_sys_lang_fir_subtitle2.Data=pageData.operateData.cursubfir;
        pageData.setting_sys_lang_sec_subtitle2.Data=pageData.operateData.cursubsec;
        pageData.setting_sys_lang_dig_text2.Data=pageData.operateData.curdig;
        pageData.setting_sys_lang_dec_page2.Data=pageData.operateData.curdecode;
        if(pageData.operateData.isHimediaOn)
        {
            pageData.setting_sys_lang_audio3.disable=true;
            pageData.setting_sys_lang_sec_audio3.disable=true;
            pageData.setting_sys_lang_fir_subtitle3.disable=true;
            pageData.setting_sys_lang_sec_subtitle3.disable=true;
            pageData.setting_sys_lang_dig_text3.disable=true;
            pageData.setting_sys_lang_dec_page3.disable=true;
            $("#setting_sys_lang_audio1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_audio2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_sec_audio1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_sec_audio2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_fir_subtitle1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_fir_subtitle2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_sec_subtitle1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_sec_subtitle2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_dig_text1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_dig_text2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_dec_page1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_dec_page2").css('color',"rgba(178,184,191,0.3)");
        }
        else if(pageData.operateData.isNetflixOn) {
            pageData.setting_sys_lang_audio3.disable=true;
            pageData.setting_sys_lang_sec_audio3.disable=true;
            $("#setting_sys_lang_audio1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_audio2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_sec_audio1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_lang_sec_audio2").css('color',"rgba(178,184,191,0.3)");
            pageData.setting_sys_lang_fir_subtitle3.disable=false;
            pageData.setting_sys_lang_sec_subtitle3.disable=false;
            pageData.setting_sys_lang_dig_text3.disable=false;
            pageData.setting_sys_lang_dec_page3.disable=false;
            $("#setting_sys_lang_fir_subtitle1").css('color',"#f0f0f0");
            $("#setting_sys_lang_fir_subtitle2").css('color',"#b2b8bf");
            $("#setting_sys_lang_sec_subtitle1").css('color',"#f0f0f0");
            $("#setting_sys_lang_sec_subtitle2").css('color',"#b2b8bf");
            $("#setting_sys_lang_dig_text1").css('color',"#f0f0f0");
            $("#setting_sys_lang_dig_text2").css('color',"#b2b8bf");
            $("#setting_sys_lang_dec_page1").css('color',"#f0f0f0");
            $("#setting_sys_lang_dec_page2").css('color',"#b2b8bf");
        }
        else
        {
            pageData.setting_sys_lang_audio3.disable=false;
            pageData.setting_sys_lang_sec_audio3.disable=false;
            pageData.setting_sys_lang_fir_subtitle3.disable=false;
            pageData.setting_sys_lang_sec_subtitle3.disable=false;
            pageData.setting_sys_lang_dig_text3.disable=false;
            pageData.setting_sys_lang_dec_page3.disable=false;
            $("#setting_sys_lang_audio1").css('color',"#f0f0f0");
            $("#setting_sys_lang_audio2").css('color',"#b2b8bf");
            $("#setting_sys_lang_sec_audio1").css('color',"#f0f0f0");
            $("#setting_sys_lang_sec_audio2").css('color',"#b2b8bf");
            $("#setting_sys_lang_fir_subtitle1").css('color',"#f0f0f0");
            $("#setting_sys_lang_fir_subtitle2").css('color',"#b2b8bf");
            $("#setting_sys_lang_sec_subtitle1").css('color',"#f0f0f0");
            $("#setting_sys_lang_sec_subtitle2").css('color',"#b2b8bf");
            $("#setting_sys_lang_dig_text1").css('color',"#f0f0f0");
            $("#setting_sys_lang_dig_text2").css('color',"#b2b8bf");
            $("#setting_sys_lang_dec_page1").css('color',"#f0f0f0");
            $("#setting_sys_lang_dec_page2").css('color',"#b2b8bf");

        }

        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_lang1_head_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
            //$(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right");
            $(".setting_select_langpage4").css("float","right");
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_lang1__cls").css("left","510px");
        }
        else
        {
            pageData.setting_sys_lang1_head_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right")
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
            // $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
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

function SettingSyslangfocus()
{
    var index;
    if(PageDataSettingSysLang.operateData.curArea!="EU")
     return;
    if(this.id=="setting_sys_lang_menu3")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_lang_audio3")
    {
        index = 1;
    }

    else if(this.id=="setting_sys_lang_sec_audio3")
    {
        index = 2;
    }
    else if(this.id=="setting_sys_lang_fir_subtitle3")
    {
        index = 3;
    }
    else if(this.id=="setting_sys_lang_sec_subtitle3")
    {
        index = 4;
    }
    else if(this.id=="setting_sys_lang_dig_text3")
    {
        index = 5;
    }
    else if(this.id=="setting_sys_lang_dec_page3")
    {
        index = 6;
    }
    SettingLangUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[index].content)

}

function SettingLangUpdateHelpinfo(content)
{
    PageDataSettingSysLang.operateData.helpcontent=content;
//    PageDataSettingSysLang.operateData.helptitle=title;
    try {
//        if (title != "" && !!langPackages[title]) {
//            $("#setting_sys_lang_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
//        }
//        else {
//            $("#setting_sys_lang_helpinfo_title").html(title);
//        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_lang__helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_lang__helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }

}
function getSettingLang1OnOpen(){
    $("#setting_sys_lang_dec_page2").css("max-width","700px");
    var width1 = Math.ceil(parseFloat($("#setting_sys_lang_dec_page1").css("width")));
    var width2 = Math.ceil(parseFloat($("#setting_sys_lang_dec_page2").css("width")));
    if(width2+width1>620&&width1<620)
    {
        var width2=620-width1;
        $("#setting_sys_lang_dec_page2").css("max-width", width2);
    }
    else
    {
        $("#setting_sys_lang_dec_page2").css("max-width","700px");
    }
    $("#setting_sys_lang_audio2").css("max-width","700px");
    width1 = Math.ceil(parseFloat($("#setting_sys_lang_audio1").css("width")));
     width2 = Math.ceil(parseFloat($("#setting_sys_lang_audio2").css("width")));
    if(width2+width1>620&&width1<620)
    {
        var width2=620-width1;
        $("#setting_sys_lang_audio2").css("max-width", width2);
    }
    else
    {
        $("#setting_sys_lang_audio2").css("max-width","700px");
    }
    $("#setting_sys_lang_sec_audio2").css("max-width","700px");
    width1 = Math.ceil(parseFloat($("#setting_sys_lang_sec_audio1").css("width")));
    width2 = Math.ceil(parseFloat($("#setting_sys_lang_sec_audio2").css("width")));
    if(width2+width1>620&&width1<620)
    {
        var width2=620-width1;
        $("#setting_sys_lang_sec_audio2").css("max-width", width2);
    }
    else
    {
        $("#setting_sys_lang_sec_audio2").css("max-width","700px");
    }
    $("#setting_sys_lang_fir_subtitle2").css("max-width","700px");
    width1 = Math.ceil(parseFloat($("#setting_sys_lang_fir_subtitle1").css("width")));
    width2 = Math.ceil(parseFloat($("#setting_sys_lang_fir_subtitle2").css("width")));
    if(width2+width1>620&&width1<620)
    {
        var width2=620-width1;
        $("#setting_sys_lang_fir_subtitle2").css("max-width", width2);
    }
    else
    {
        $("#setting_sys_lang_fir_subtitle2").css("max-width","700px");
    }
    $("#setting_sys_lang_sec_subtitle2").css("max-width","700px");
    width1 = Math.ceil(parseFloat($("#setting_sys_lang_sec_subtitle1").css("width")));
    width2 = Math.ceil(parseFloat($("#setting_sys_lang_sec_subtitle2").css("width")));
    if(width2+width1>620&&width1<620)
    {
        var width2=620-width1;
        $("#setting_sys_lang_sec_subtitle2").css("max-width", width2);
    }
    else
    {
        $("#setting_sys_lang_sec_subtitle2").css("max-width","700px");
    }
    $("#setting_sys_lang_dig_text2").css("max-width","700px");
    width1 = Math.ceil(parseFloat($("#setting_sys_lang_dig_text1").css("width")));
    width2 = Math.ceil(parseFloat($("#setting_sys_lang_dig_text2").css("width")));
    if(width2+width1>620&&width1<620)
    {
        var width2=620-width1;
        $("#setting_sys_lang_dig_text2").css("max-width", width2);
    }
    else
    {
        $("#setting_sys_lang_dig_text2").css("max-width","700px");
    }
}
function SettingLang1PageOnDestroy()
{
    hiWebOsFrame.settingslang1=null;
}
function SettingSysMLEnHandler()
{
    //todo 修改lang2的数据，
    try
    {
    this.page.operateData.currentfocus="osd";
    var id=model.language.getOsd();
    var i=_getIndexByNum(PageDataSettingSysLang.operateData.osdlanglist,id);
   // debugPrint("get the id "+id+JSON.stringify(PageDataSettingSysLang.operateData.osdlanglist)) ;
   // debugPrint("i="+i);
   // var i=_getIndex(this.page.operateData.osdlanglist,this.page.operateData.curosdlang);
    PageDataSettingSysLang2.operateData.curpage="osd";
    PageDataSettingSysLang2.operateData.curselectindex=i;
    PageDataSettingSysLang2.operateData.langlist=[];
    for(var j=0;j<this.page.operateData.osdlanglist.length;j++)
    {
        PageDataSettingSysLang2.operateData.langlist[j]=this.page.operateData.osdlanglist[j].name;

    }
   // PageDataSettingSysLang2.operateData.langlist=this.page.operateData.osdlanglist;
    hiWebOsFrame.settingslang2.rewrite();
//    hiWebOsFrame.settingsFirst.close();
//    hiWebOsFrame.settingslang1.close();
    hiWebOsFrame.settingslang2.open();
    hiWebOsFrame.settingslang2.hiFocus();
    }
    catch (e)
    {
        debugPrint(e.message);
    }

}
function SettingSysAudioFirEnHandler()
{
    this.page.operateData.currentfocus="firaudio";
    var id=model.language.getAudioFavoured();
    var i=_getIndexByNum(this.page.operateData.adiofirlanglist,id);
    PageDataSettingSysLang2.operateData.curpage="firaudio";
    PageDataSettingSysLang2.operateData.curselectindex=i;
    PageDataSettingSysLang2.operateData.langlist=[];
    for(var j=0;j<this.page.operateData.adiofirlanglist.length;j++)
    {
        PageDataSettingSysLang2.operateData.langlist[j]=this.page.operateData.adiofirlanglist[j].name;

    }
   // PageDataSettingSysLang2.operateData.langlist=this.page.operateData.adiofirlanglist;
    hiWebOsFrame.settingslang2.rewrite();
//    hiWebOsFrame.settingsFirst.close();
//    hiWebOsFrame.settingslang1.close();
    hiWebOsFrame.settingslang2.open();
    hiWebOsFrame.settingslang2.hiFocus();

}
function SettingSysAudioSecEnHandler()
{
    this.page.operateData.currentfocus="secaudio";
    var id=model.language.getAudioAlternative();
    var i=_getIndexByNum(this.page.operateData.adioseclanglist,id);
    PageDataSettingSysLang2.operateData.curpage="secaudio";
    PageDataSettingSysLang2.operateData.curselectindex=i;
    PageDataSettingSysLang2.operateData.langlist=[];
    for(var j=0;j<this.page.operateData.adioseclanglist.length;j++)
    {
        PageDataSettingSysLang2.operateData.langlist[j]=this.page.operateData.adioseclanglist[j].name;
    }
  //  PageDataSettingSysLang2.operateData.langlist=this.page.operateData.adioseclanglist;
    hiWebOsFrame.settingslang2.rewrite();
//    hiWebOsFrame.settingsFirst.close();
//    hiWebOsFrame.settingslang1.close();
    hiWebOsFrame.settingslang2.open();
    hiWebOsFrame.settingslang2.hiFocus();
}
function SettingSysSubFirEnHandler()
{
    this.page.operateData.currentfocus="firsub";
    var id=model.language.getSubtitleFavoured();
    var i=_getIndexByNum(this.page.operateData.firsublist,id);
    PageDataSettingSysLang2.operateData.curpage="firsub";
    PageDataSettingSysLang2.operateData.curselectindex=i;
    PageDataSettingSysLang2.operateData.langlist=[];
    for(var j=0;j<this.page.operateData.firsublist.length;j++)
    {
        PageDataSettingSysLang2.operateData.langlist[j]=this.page.operateData.firsublist[j].name;
    }
  //  PageDataSettingSysLang2.operateData.langlist=this.page.operateData.firsublist;
    hiWebOsFrame.settingslang2.rewrite();
//    hiWebOsFrame.settingsFirst.close();
//    hiWebOsFrame.settingslang1.close();
    hiWebOsFrame.settingslang2.open();
    hiWebOsFrame.settingslang2.hiFocus();

}
function SettingSysSubSecEnHandler()
{
    this.page.operateData.currentfocus="secsub";
    var id=model.language.getSubtitleAlternative();

    var i=_getIndexByNum(this.page.operateData.secsublist,id);
    PageDataSettingSysLang2.operateData.curpage="secsub";
    PageDataSettingSysLang2.operateData.curselectindex=i;
    PageDataSettingSysLang2.operateData.langlist=[];
    for(var j=0;j<this.page.operateData.secsublist.length;j++)
    {
        PageDataSettingSysLang2.operateData.langlist[j]=this.page.operateData.secsublist[j].name;
    }

    //  PageDataSettingSysLang2.operateData.langlist=this.page.operateData.secsublist;
    hiWebOsFrame.settingslang2.rewrite();
//    hiWebOsFrame.settingsFirst.close();
//    hiWebOsFrame.settingslang1.close();
    hiWebOsFrame.settingslang2.open();
    hiWebOsFrame.settingslang2.hiFocus();
}
function SettingSysDigEnHandler()
{
    this.page.operateData.currentfocus="digtext";
    var id=model.language.getTeletext();
    var i=_getIndexByNum(this.page.operateData.digteletextlist,id);
    if(i<0)
    {
        i=0;
        debugE("the index error")
    }
    PageDataSettingSysLang2.operateData.curpage="digtext";
    PageDataSettingSysLang2.operateData.curselectindex=i;
    PageDataSettingSysLang2.operateData.langlist=[];
    for(var j=0;j<this.page.operateData.digteletextlist.length;j++)
    {
        PageDataSettingSysLang2.operateData.langlist[j]=this.page.operateData.digteletextlist[j].name;
    }
    hiWebOsFrame.settingslang2.rewrite();
//    hiWebOsFrame.settingsFirst.close();
//    hiWebOsFrame.settingslang1.close();
    hiWebOsFrame.settingslang2.open();
    hiWebOsFrame.settingslang2.hiFocus();
}
function SettingSysDecodeEnHandler()
{
    this.page.operateData.currentfocus="decodepage";
    var id=model.language.getDecodepage();
    var i=_getIndexByNum(this.page.operateData.decodepagelist,id);
    if(i<0)
    {
        i=0;
        debugE("the index error")
    }
    PageDataSettingSysLang2.operateData.curpage="decodepage";
    PageDataSettingSysLang2.operateData.curselectindex=i;
    PageDataSettingSysLang2.operateData.langlist=[];//this.page.operateData.decodepagelist;
    for(var j=0;j<this.page.operateData.decodepagelist.length;j++)
    {
        PageDataSettingSysLang2.operateData.langlist[j]=this.page.operateData.decodepagelist[j].name;
    }

    hiWebOsFrame.settingslang2.rewrite();
//    hiWebOsFrame.settingsFirst.close();
//    hiWebOsFrame.settingslang1.close();
    hiWebOsFrame.settingslang2.open();
    hiWebOsFrame.settingslang2.hiFocus();
}
function SettingSysLangEscHandler()
{
    this.page.close();
   // RefreshHelpInfo(4, 2);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    this.page.destroy();
    if(!!hiWebOsFrame.settingslang2)
    {
       hiWebOsFrame.settingslang2.destroy();
    }



}

SettingLanglist=["German","English","French","Italian","Spanish","Netherlands","Czech","Greek","Polish",
    "Hungarian","Finnish","Slovenian","Slovak","Turkish","Swedish","Danish","Portugueue", "Russian",
    "Norwegian","Chinese","Latvian","Lithuanian","Estonian","Ukrainian","Romanian","Byelorussian","Serbian",
    "Croatian","Japanese","Irash","Welsh","Catalan","Gaelic","Basque","Galician","Scots",
    "Breton","Corsican","Alemannic","Bulgarian","Arabic","Walloon","Luxembourgish"];

TTXlanglist=["west","east","russian","arabic","farsi","greek"];

function languagepageinit()
{
    try{
    var temp=[];
    var i;
    PageDataSettingSysLang.operateData.isNetflixOn=checkIsAppOn();
    PageDataSettingSysLang.operateData.curArea=hiWebOsFrame.getCurrentArea();
    PageDataSettingSysLang.operateData.isHimediaOn=isCurrentAppHimedia();
    PageDataSettingSysLang.operateData.osdlanglist=getSettingOSDLanguageMapList();
    var index2=_getIndexByNum(PageDataSettingSysLang.operateData.osdlanglist,model.language.getOsd());
    debugPrint(" get index "+index2);
    if(index2==-1)
    {
        model.language.setOsd(0);
        index2=0;
    }
    debugPrint(" get osd "+model.language.getOsd());
    PageDataSettingSysLang.operateData.curosdlang=PageDataSettingSysLang.operateData.osdlanglist[index2].name;
    debugPrint("osd "+PageDataSettingSysLang.operateData.curosdlang+model.language.getOsd());
    temp=model.language.getAudioFavoured();
    debugPrint("getAudioFavoured"+temp);
    index2=_getIndexByNum(PageDataSettingSysLang.operateData.adiofirlanglist,temp);
    debugPrint("index2"+index2);
    if(index2==-1)
    {
        model.language.setAudioFavoured(9);
        index2=0;
    }
    PageDataSettingSysLang.operateData.curaudiofir=PageDataSettingSysLang.operateData.adiofirlanglist[index2].name;
    temp=model.language.getAudioAlternative();
    debugPrint("getAudioAlternative"+temp);
    index2=_getIndexByNum(PageDataSettingSysLang.operateData.adioseclanglist,temp);
    debugPrint("index2"+index2);
    if(index2==-1)
    {
        model.language.setAudioAlternative(9);
        index2=0;
    }
    PageDataSettingSysLang.operateData.curaudiosec=PageDataSettingSysLang.operateData.adioseclanglist[index2].name;
    temp=model.language.getSubtitleFavoured();
    debugPrint("getSubtitleFavoured"+temp);
    index2=_getIndexByNum(PageDataSettingSysLang.operateData.firsublist,temp);
    debugPrint("index2"+index2);
    if(index2==-1)
    {
        model.language.setSubtitleFavoured(9);
        index2=0;
    }
    PageDataSettingSysLang.operateData.cursubfir=PageDataSettingSysLang.operateData.firsublist[index2].name;

    temp=model.language.getSubtitleAlternative();
    debugPrint("getSubtitleAlternative"+temp);
    index2=_getIndexByNum(PageDataSettingSysLang.operateData.secsublist,temp);
    debugPrint("index2"+index2);
    if(index2==-1)
    {
        model.language.setSubtitleAlternative(9);
        index2=0;
    }
    PageDataSettingSysLang.operateData.cursubsec=PageDataSettingSysLang.operateData.secsublist[index2].name;
    temp=model.language.getTeletext();
    debugPrint("getTeletext"+temp);
     index2=_getIndexByNum(PageDataSettingSysLang.operateData.digteletextlist,temp);
     if(index2==-1)
     {
            model.language.setTeletext(9);
            index2=0;
     }
    PageDataSettingSysLang.operateData.curdig=PageDataSettingSysLang.operateData.digteletextlist[index2].name;
    temp=model.language.getDecodepage();
    debugPrint("getDecodepage"+temp);
    index2=_getIndexByNum(PageDataSettingSysLang.operateData.decodepagelist,temp);
    if(index2==-1)
    {
        model.language.setDecodepage(0);
        index2=0;
    }
    PageDataSettingSysLang.operateData.curdecode=PageDataSettingSysLang.operateData.decodepagelist[index2].name;
    }catch (e)
    {
        debugPrint(e.message);
    }
}
