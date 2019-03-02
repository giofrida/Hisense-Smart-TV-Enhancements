/**
 * Created by Administrator on 14-6-18.
 */
var SYSTEM_LOCATION=0;
var SYSTEM_PIN=1    //SYSTEM_PIN需要定义
var SYSTEM_TIME=2;
var SYSTEM_LANG=3;
var SYS_SECURITY=65535;
var APP_SETTING=4;
var CLOSED_CAPTION=65535;
var CEC_FUNCTION=5;
var ADVANCE_SETTING=6;
var RECENT_CEC= 5;
var RECNT_AD=6;
var CHANNEL_EDIT=3;
var CHL_PARENTCONTROL=5;

var SYSTEM_INFO=0;
var ABOUT_EULA=1;
//var INTERNET_SWITCH=2;
var ABOUT_UPDATE=2;
//var OAD_SWITCH=4;
//var OAD_UPDATE=4;
var FACTORY_RESET=3;

var g_OadDownloadfailtimer=null;
function _cloneObj(obj) {
    return $.extend({}, obj);
};
function _getIndex(a, b) {
    if (!a) {
        return -1;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] == b) {
            return i;
        }
    }
    return -1;
}
function _getIndexById(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].id == b) {
            return i;
        }
    }
    return -1;
}
function _getIndexByCode(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].code== b) {
            return i;
        }
    }
    return -1;
}

function _getIndexByNum(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].number == b) {
            return i;
        }
    }
    return -1;
}
function ChangeInttoTime(times, format)
{
    if(times<0)
    {
      return "";
    }
    var time1=parseInt(times/3600);
    var time2 =parseInt((times-time1*3600)/60);
    debugPrint("changthe time "+time1+time2);
    var str="";
    if((""+time2).length<2)
    {
        time2 ="0"+time2;
    }
    if(format==0)
    {
        if(time1>11){

            if(time1>12)
            {
               time1=parseInt(time1)-12;
               str=time1+":"+time2+"PM";
            }
            else
            {
                time1=parseInt(time1);
                str=time1+":"+time2+"PM";
            }

        }
        else
        {
            if(time1==0)
            {
                time1="12"
            }
            time1=parseInt(time1);
            str=time1+":"+time2+"AM";

        }

    }
    else
    {
        if((""+time1).length<2)
        {
            time1 ="0"+time1;
        }
        str=time1+":"+time2;

    }
    return str;
}
function SetRecentUse(operstring, parentindex, subindex) {
try{
       if(!!hiWebOsFrame.settingsysqS)
       {
        var index = null;
        if(!!operstring && operstring != "") {
            for(var k = 0; k < ( hiWebOsFrame.settingsysqS.operateData.recentuse.length < 4 ? hiWebOsFrame.settingsysqS.operateData.recentuse.length : 4); k++) {
                if(hiWebOsFrame.settingsysqS.operateData.recentuse[k].name == operstring) {
                    index = k;
                    break;
                }
            }
            if(index != null) {
                if(index == 1) {
                    var temp = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[0]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[0] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[1]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[1] = _cloneObj(temp);

                }
                else if(index == 2) {
                    var temp = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[0]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[0] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[2]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[2] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[1]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[1] = _cloneObj(temp);
                }
                else if(index == 3) {
                    var temp = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[0]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[0] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[3]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[3] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[2]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[2] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[1]);
                    hiWebOsFrame.settingsysqS.operateData.recentuse[1] = _cloneObj(temp);
                }
            }
            else {
                hiWebOsFrame.settingsysqS.operateData.recentuse[3] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[2]);
                hiWebOsFrame.settingsysqS.operateData.recentuse[2] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[1]);
                hiWebOsFrame.settingsysqS.operateData.recentuse[1] = _cloneObj(hiWebOsFrame.settingsysqS.operateData.recentuse[0]);
                hiWebOsFrame.settingsysqS.operateData.recentuse[0].name = operstring;
                hiWebOsFrame.settingsysqS.operateData.recentuse[0].parentindex = parentindex;
                hiWebOsFrame.settingsysqS.operateData.recentuse[0].pageindex = subindex;
            }

        }
        var ret = Hisense.File.write("hisenseUI/recentuse.txt", JSON.stringify(PageDateQuickSet.operateData.recentuse), 1);
        // debugPrint("!!!!!!!!!!!!!!!!!!write file "+ret+JSON.stringify(PageDateQuickSet.operateData.recentuse));
       }
       else
        {
            if(!!operstring&&operstring!="")
            {
                var ret = Hisense.File.read("hisenseUI/recentuse.txt",1);
                debugPrint("read recent fie ret  "+typeof ret);
                if(typeof ret=="string"&&ret!='')
                {
                    var index=null;
                    var recentuse=JSON.parse(ret);
                    if(recentuse.length==4&&(recentuse[0].name!=undefined)&&(recentuse[0].parentindex!=undefined)&&(recentuse[0].pageindex!=undefined))
                    {

                        for(var k=0;k<(recentuse.length<3?recentuse.length:3);k++)
                        {
                            if(recentuse[k].name==operstring)
                            {
                                index=k;
                                break;
                            }
                        }
                        if(index!=null)
                        {
                            if(index==1)
                            {
                                var temp= _cloneObj(recentuse[0]);
                                recentuse[0]=_cloneObj(recentuse[1]);
                                recentuse[1]=_cloneObj(temp);

                            }
                            else if(index==2)
                            {
                                var temp=_cloneObj( recentuse[0]);
                                recentuse[0]=_cloneObj(recentuse[2]);
                                recentuse[2]=_cloneObj(recentuse[1]);
                                recentuse[1]=_cloneObj(temp);
                            }
                            else if(index==3)
                            {
                                var temp=_cloneObj( recentuse[0]);
                                recentuse[0]=_cloneObj(recentuse[3]);
                                recentuse[3]=_cloneObj(recentuse[2]);
                                recentuse[2]=_cloneObj(recentuse[1]);
                                recentuse[1]=_cloneObj(temp);
                            }
                        }
                        else
                        {
                            recentuse[3]=_cloneObj(recentuse[2]);
                            recentuse[2]=_cloneObj(recentuse[1]);
                            recentuse[1]=_cloneObj(recentuse[0]);
                            recentuse[0].name=operstring;
                            recentuse[0].parentindex=parentindex;
                            recentuse[0].pageindex=subindex;
                        }
                        Hisense.File.write("hisenseUI/recentuse.txt", JSON.stringify(recentuse), 1);
                    }
                }
            }
        }
    }catch (e)
    {
        debugPrint(e.message);
    }

}

function Updatesyslangid(id)
{
    var langlist=getSettingOSDLanguageMapList();

    debugPrint("update langid "+langlist[id].code);
    Hisense.File.write("languagecode",langlist[id].code,1);
}

function getSettingOSDLanguageMapList() {
    var verArea=hiWebOsFrame.getCurrentArea();
    var CurrentSubArea=hiWebOsFrame.getCurrentSubArea();
    debugPrint("CurrentSubArea"+CurrentSubArea);
    var langMapList =[];
    if(verArea=="SA")
    {
        langMapList = [
            {
                "number": 0,
                "name": " English ",
                "code": "eng"
            },
            {
                "number": 2,
                "name": "Español",
                "code": "spa"
            },
            {
                "number":3,
                "name":"Português",
                "code":"por"
            }];
    }
    else  if(verArea=="NA")
    {
        langMapList = [
            {
                "number": 0,
                "name": " English ",
                "code": "eng"
            },
            {
                "number": 2,
                "name": "Español",
                "code": "spa"
            },
            {
                "number": 1,
                "name": "Français",
                "code": "fre"
            }
        ]
    }
    else  if(verArea=="EU")
    {
        if(CurrentSubArea=="EU2")
        {
        langMapList=[
            {
                "number":0,
                "name":" English ",
                "code":"eng"
            },
            {
                "number":1,
                "name":"Français ",
                "code":"fre"
            },
            {
                "number":16,
                "name":"Deutsch ",
                "code":"ger"
            },
            {
                "number":17,
                "name":"Italiano ",
                "code":"ita"
            },
            {
                "number":2,
                "name":"Español ",
                "code":"spa"
            },
            {
                "number":3,
                "name":"Português ",
                "code":"por"
            },
            {
                "number":18,
                "name":"Svenska ",
                "code":"swe"
            },
            {
                "number":19,
                "name":"Dansk ",
                "code":"dan"
            },
            {
                "number":20,
                "name":"Suomi ",
                "code":"fin"
            },
            {
                "number":21,
                "name":"Norsk ",
                "code":"nor"
            },
            {
                "number":22,
                "name":"Čeština ",
                "code":"cze"
            },
            //斯洛伐克语
            {
                "number":23,
                "name":"Slovenčina ",
                "code":"slk"
            },
            {//波兰语
                "number":24,
                "name":"Polski ",
                "code":"pol"
            },
            {//匈牙利语
                "number":25,
                "name":" Magyar ",
                "code":"hun"
            },
            {//保加利亚语
                "number":26,
                "name":"Български ",
                "code":"bul"
            },
            {//土耳其语
                "number":27,
                "name":"Türkçe ",
                "code":"tur"
            },
            {
                "number":6,//
                "name":"中文",
                "code":"chi"
            },
            {
                "number":5,//俄语Russian
                "name":"Русский ",
                "code":"rus"
            },
            {//乌兹别克语
                "number":10,
                "name":"O'zbekiston ",
                "code":"uzb"
            },
	    {//克罗地亚语
                "number":30,
                "name":"Hrvatski",//"克罗地亚语",
                "code":"hrv"
            },
            {//塞尔维亚语
                "number":31,
                "name":"Srpski  ",//"塞尔维亚语",
                "code":"srp"
            },
            {//马其顿语
                "number":32,
                "name":"Македонски",//"马其顿语",
                "code":"mac"
            },
            {//阿尔巴尼亚语
                "number":33,
                "name":"Shqiptar",//"阿尔巴尼亚语",
                "code":"alb"
            },
                {
                    "number":4,//阿拉伯语 Arabic
                    "name":"العربية",
                    "code":"ara"
                }


            ]
            return langMapList;
        }
        langMapList=[
            {
                "number":0,
                "name":" English ",
                "code":"eng"
            },
            {
                "number":1,
                "name":"Français ",
                "code":"fre"
            },
            {
                "number":16,
                "name":"Deutsch ",
                "code":"ger"
            },
            {
                "number":17,
                "name":"Italiano ",
                "code":"ita"
            },
            {
                "number":2,
                "name":"Español ",
                "code":"spa"
            },
            {
                "number":3,
                "name":"Português ",
                "code":"por"
            },
            {
                "number":18,
                "name":"Svenska ",
                "code":"swe"
            },
            {
                "number":19,
                "name":"Dansk ",
                "code":"dan"
            },
            {
                "number":20,
                "name":"Suomi ",
                "code":"fin"
            },
            {
                "number":21,
                "name":"Norsk ",
                "code":"nor"
            },
            {
                "number":22,
                "name":"Čeština ",
                "code":"cze"
            },
            //斯洛伐克语
            {
                "number":23,
                "name":"Slovenčina ",
                "code":"slk"
            },
            {//波兰语
                "number":24,
                "name":"Polski ",
                "code":"pol"
            },
            {//匈牙利语
                "number":25,
                "name":" Magyar ",
                "code":"hun"
            },
            {//保加利亚语
                "number":26,
                "name":"Български ",
                "code":"bul"
            },
            {//土耳其语
                "number":27,
                "name":"Türkçe ",
                "code":"tur"
            },
            {
                "number":6,//
                "name":"中文",
                "code":"chi"
            },
            {
                "number":5,//俄语Russian
                "name":"Русский ",
                "code":"rus"
            },
            {//乌兹别克语
                "number":10,
                "name":"O'zbekiston ",
                "code":"uzb"
            },
            {//克罗地亚语
                "number":30,
                "name":"Hrvatski",//"克罗地亚语",
                "code":"hrv"
            },
            {//塞尔维亚语
                "number":31,
                "name":"Srpski  ",//"塞尔维亚语",
                "code":"srp"
            },
            {//马其顿语
                "number":32,
                "name":"Македонски",//"马其顿语",
                "code":"mac"
            },
            {//阿尔巴尼亚语
                "number":33,
                "name":"Shqiptar",//"阿尔巴尼亚语",
                "code":"alb"
            },
            {//拉脱维亚语
                "number":34,
                "name":"Latvija ",//"拉脱维亚语",
                "code":"lav"
            },
            {//爱沙尼亚语
                "number":35,
                "name":"Eesti",//"爱沙尼亚语",
                "code":"est"
            },
            {//立陶宛语
                "number":36,
                "name":"Lietuva",//"立陶宛语",
                "code":"lit"
            },
            {
                "number": 41,//希腊语
                "name": "Ελληνικά",
                "code": "gre"
            }





        ]
    }
    else  if(verArea=="COL")
    {
        langMapList=[
            {
                "number":0,
                "name":" English ",
                "code":"eng"
            },
            {
                "number":2,
                "name":"Español ",
                "code":"spa"
            },
            {
                "number":3,
                "name":"Português ",
                "code":"por"
            }
        ]
    }
    else
    {
         if(CurrentSubArea=="MiddleEast")
         {
             langMapList = [
                 {
                     "number": 0,
                     "name": " English ",
                     "code": "eng"
                 },
                 {
                     "number": 1,
                     "name": "Français ",
                     "code": "fre"
                 },
                 {
                     "number": 2,
                     "name": "Español ",
                     "code": "spa"
                 },

                 {
                     "number":3,
                     "name":"Português ",
                     "code":"por"
                 },
                 {
                     "number":4,//阿拉伯语 Arabic
                     "name":"العربية",
                     "code":"ara"
                 },
                 {
                     "number":5,//俄语Russian
                     "name":"русский ",
                     "code":"rus"
                 },
                 {
                     "number":6,//
                     "name":"中文",
                     "code":"chi"
                 },
//                {
//                    "number":8,//泰语Thai
//                    "name":"ภาษาไทย",
//                    "code":"tha"
//                },
                 {
                     "number":28,//波斯语Persian
                     "name":"فارسی",
                     "code":"per"
                 }

//                 {
//                     "number":11,//印度语Hindi
//                     "name":"हिंदी",
//                     "code":"hin"
//                 }
             ]
         }
         else  if(CurrentSubArea=="CIS")
         {
             langMapList = [
                 {
                     "number": 0,
                     "name": " English ",
                     "code": "eng"
                 },
                 {
                     "number": 1,
                     "name": "Français ",
                     "code": "fre"
                 },
                 {
                     "number": 2,
                     "name": "Español ",
                     "code": "spa"
                 },

                 {
                     "number":3,
                     "name":"Português ",
                     "code":"por"
                 },
                 {
                     "number":4,//阿拉伯语 Arabic
                     "name":"العربية",
                     "code":"ara"
                 },
                 {
                     "number":5,//俄语Russian
                     "name":"Русский ",
                     "code":"rus"
                 },
                 {
                     "number":6,//
                     "name":"中文",
                     "code":"chi"
                 },
//
                {
                    "number":10,//乌兹别克语Uzbek
                    "name":"O'zbekiston‎",
                    "code":"uzb"
                },
                 {
                     "number":28,//波斯语Persian
                     "name":"فارسی",
                     "code":"per"
                 },
                {
                    "number":12,//乌克兰Ukrainian
                    "name":"український",
                    "code":"ukr"
                },
                 {
                     "number":13,//马来Malay
                     "name":"Bahasa Melayu",
                     "code":"mal"
                 },
                {
                    "number":14,//希伯来
                    "name":"עברית",
                    "code":"hbr"
                }
             ]
         }
         else  if(CurrentSubArea=="Asian")
         {
             langMapList = [
                 {
                     "number": 0,
                     "name": "English ",
                     "code": "eng"
                 },
                 {
                     "number": 1,
                     "name": "Français ",
                     "code": "fre"
                 },
                 {
                     "number": 2,
                     "name": "Español ",
                     "code": "spa"
                 },

                 {
                     "number":3,
                     "name":"Português ",
                     "code":"por"
                 },
                 {
                     "number":4,//阿拉伯语 Arabic
                     "name":"العربية",
                     "code":"ara"
                 },
                 {
                     "number":5,//俄语Russian
                     "name":"Русский ",
                     "code":"rus"
                 },
                 {
                     "number":6,//
                     "name":"中文",
                     "code":"chi"
                 },
        {
            "number":7,//越南语Vietnamese
            "name":"Tiếng Việt",
            "code":"vie"
        },
        {
            "number":8,//泰语Thai
            "name":"ภาษาไทย",
            "code":"tha"
        },
//        {
//            "number":9,//缅甸语Burmese
//            "name":"မြန်မာ",
//            "code":"bur"
//        },
//
        {
            "number":29,//印度尼西亚Indonesian
            "name":"Bhs Indonesia",
            "code":"ind"
        },
         {
             "number":11,//印度语Hindi
             "name":"हिंदी",
             "code":"hin"
         },
        {
            "number":13,//马来Malay
            "name":"Bahasa Melayu",
            "code":"mal"
        }
//         {////繁體中文
//             "number":15,//
//             "name":"繁體中文",
//             "code":"zho"
//         }

             ]
         }
         else
         {
             langMapList = [
                 {
                     "number": 0,
                     "name": "English ",
                     "code": "eng"
                 },
                 {
                     "number": 1,
                     "name": "Français ",
                     "code": "fre"
                 },
                 {
                     "number": 2,
                     "name": "Español ",
                     "code": "spa"
                 },

                 {
                     "number":3,
                     "name":"Português ",
                     "code":"por"
                 },
                 {
                     "number":4,//阿拉伯语 Arabic
                     "name":"العربية",
                     "code":"ara"
                 },
                 {
                     "number":5,//俄语Russian
                     "name":"Русский ",
                     "code":"rus"
                 },
                 {
                     "number":6,//
                     "name":"中文",
                     "code":"chi"
                 }

//                 {
//                     "number":28,//波斯语Persian
//                     "name":"فارسی‎",
//                     "code":"per"
//                 },
//                 {
//                     "number":11,//印度语Hindi
//                     "name":"हिंदी",
//                     "code":"hin"
//                 }
             ]
         }

    }

    return langMapList;
}
function getCurrVeraForWizard(){

    var verArea=hiWebOsFrame.getCurrentArea();
    return verArea;
}
function getSettingCountryMapList() {
    //todo get the em market coutry list
    var verArea=hiWebOsFrame.getCurrentArea();
    debugPrint("getCurrentArea"+verArea);
    var CurrentSubArea=hiWebOsFrame.getCurrentSubArea();
    debugPrint("CurrentSubArea"+CurrentSubArea);
    return getsettingsyscountrylist(verArea,CurrentSubArea)


}


function getCountryToZoneMapList() {
    //todo get the em market coutry list
    var verArea=hiWebOsFrame.getCurrentArea();
    debugPrint("getCurrentArea"+verArea);
    var CurrentSubArea=hiWebOsFrame.getCurrentSubArea();
    debugPrint("CurrentSubArea"+CurrentSubArea);

    var countryMapList=[];
    if(verArea=="SA")
    {


        countryMapList = [
            {
                //"name": "Philippines",
                "code": "PHL",
                "defzone":0,
                "supportzonelist":[13],
                "osdtimezonelist":["UTC+8"]

            },
            {

                //"name": "Argentina",
                "code": "ARG",
                "defzone":0,
                "supportzonelist":[32,30],
                "osdtimezonelist":["UTC-3","UTC-4"]
            },
            {

                //"name": "Brazil",
                "code": "BRA",
                "defzone":1,
                "supportzonelist":[33,32,30,28],
                "osdtimezonelist":["Brasilia Time +1 (UTC-2)","Brasilia Time (UTC-3)","Brasilia Time -1 (UTC-4)","Brasilia Time -2 (UTC-5)"]
            },
            //{
            //
            //    //"name": "Panama",
            //    "code": "PAN",
            //    "defzone":0,
            //    "supportzonelist":[28],
            //    "osdtimezonelist":["UTC-5"]
            //},
            //
            //{
            //
            //    //"name": "Venezuela",
            //    "code": "VEN",
            //    "defzone":0,
            //    "supportzonelist":[29],
            //    "osdtimezonelist":["UTC-4.5"]
            //},


            {

                //"name": "Uruguay",
                "code": "URY",
                "defzone":1,
                "supportzonelist":[33,32],
                "osdtimezonelist":["UTC-2","UTC-3"]
            },

            {

                //"name": "Peru",
                "code": "PER",
                "defzone":0,
                "supportzonelist":[28],
                "osdtimezonelist":["UTC-5"]
            },

            {

                //"name": "Paraguay",
                "code": "PRY",
                "defzone":0,
                "supportzonelist":[30],
                "osdtimezonelist":["UTC-4"]
            },
            {
                //"name": "Bolivia",
                "code": "BOL",
                "defzone":0,
                "supportzonelist":[30],
                "osdtimezonelist":["UTC-4"]
            },
            {
                //"name": "Ecuador",
                "code": "ECU",
                "defzone":0,
                "supportzonelist":[28,27],
                "osdtimezonelist":["UTC-5","UTC-6"]

            } ,
            {
                //"name": "Chile",//智利
                "code": "CHL",
                "defzone":0,
                "supportzonelist":[30],
                "osdtimezonelist":["UTC-4"]

            }
            ,
            {

                //"name": "Costa Rica",//哥斯达黎加
                "code": "CRI",
                "defzone":0,
                "supportzonelist":[27],
                "osdtimezonelist":["UTC-6"]
            },
            {

                //"name": "Colombia",
                "code": "COL",
                "defzone":0,
                "supportzonelist":[28],
                "osdtimezonelist":["UTC-5"]

            }
        ]

    }
    else  if(verArea=="NA")
    {
        countryMapList = [
            {

                //"name": "USA",
                "code": "USA",
                "defzone":0,
                "supportzonelist":[28,27,27,26,26,25,24,23],
                "osdtimezonelist":["Eastern（UTC-5)","Indiana (UTC-6)","Central (UTC-6)","Mountain (UTC-7)","Arizona (UTC-7)","Pacific (UTC-8)","Alaska (UTC-9)","Hawaii(UTC-10)"]
            },
            {

                //"name": "Canada",
                "code": "CAN",
                "defzone":0,
                "supportzonelist":[28,27,27,26,26,25,24,23],
                "osdtimezonelist":["Eastern（UTC-5)","Indiana (UTC-6)","Central (UTC-6)","Mountain (UTC-7)","Arizona (UTC-7)","Pacific (UTC-8)","Alaska (UTC-9)","Hawaii(UTC-10)"]
            },
            {

                //"name": "Mexico",
                "code": "MEX",
                "defzone":0,
                "supportzonelist":[28,27,27,26,26,25,24,23],
                "osdtimezonelist":["Eastern（UTC-5)","Indiana (UTC-6)","Central (UTC-6)","Mountain (UTC-7)","Arizona (UTC-7)","Pacific (UTC-8)","Alaska (UTC-9)","Hawaii(UTC-10)"]
            }]
    }
    else  if(verArea=="EU")
    {
        countryMapList = [
            {
                //"name": "Germany",
                "code": "DEU",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]

            },
            {

                //"name": "Austria",
                "code": "AUT",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

               // "name": "Italy",
                "code": "ITA",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "England",
                "code": "GBR",
                "defzone":0,
                "supportzonelist":[0,35],
                "osdtimezonelist":["WET(UTC+0)","Auto"]
            },
            {

                //"name": "Spain",
                "code": "ESP",
                "defzone":1,
                "supportzonelist":[0,1,35],
                "osdtimezonelist":["WET(UTC+0)","CET(UTC+1)","Auto"]
            },
            {

                //"name": "France",
                "code": "FRA",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Switzerland",
                "code": "CHE",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Portuguesa",
                "code": "PRT",
                "defzone":0,
                "supportzonelist":[0,35],
                "osdtimezonelist":["WET(UTC+0)","Auto"]
            },
            {

                //"name": "Sweden",
                "code": "SWE",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Denmark",
                "code": "DNK",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Finland",
                "code": "FIN",
                "defzone":0,
                "supportzonelist":[2,35],
                "osdtimezonelist":["UTC+2","Auto"]
            },
            {

                //"name": "Norway",
                "code": "NOR",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Turkish",
                "code": "TUR",
                "defzone":0,
                "supportzonelist":[2,35],
                "osdtimezonelist":["UTC+2","Auto"]
            },
            {

                //"name": "Czech",
                "code": "CZE",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Slovakia",
                "code": "SVK",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Poland",
                "code": "POL",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Hungary",
                "code": "HUN",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]
            },
            {

                //"name": "Bulgaria",
                "code": "BGR",
                "defzone":0,
                "supportzonelist":[2,35],
                "osdtimezonelist":["UTC+2","Auto"]
            },
            {
                //"name": "Russia",//俄罗斯
                "code": "RUS",
                "defzone":2,
                "supportzonelist":[2,3,5,7,10,12,13,14,16,17,18,35],
                "osdtimezonelist":["Kaliningrad Time(UTC+2)","Moscow Time(UTC+3)","Samara Time(UTC+4)","Yekaterinburg Time(UTC+5)","Omsk Time(UTC+6)",
                    "Krasnoyarsk Time(UTC+7)","Irkutsk Time (UTC+8)","Yakutsk Time (UTC+9)","Vladivostok Time (UTC+10)","Srednekolymsk Time (UTC+11)","Kamchatka Time (UTC+12)","Auto"]
            },
            {
                //"name": "Uzbekistan",//乌兹别克斯坦(Hisense)
                "code": "UZB",
                "defzone":0,
                "supportzonelist":[7,35],
                "osdtimezonelist":["UTC+5","Auto"]
            },
            {
                // "name": "Kyrgyz",//吉尔吉斯斯坦(Hisense)
                "code": "KGZ",
                "defzone":0,
                "supportzonelist":[10,35],
                "osdtimezonelist":["UTC+6","Auto"]
            },
            {
                //"name": "Tajikistan",// 塔吉克斯坦(Hisense)
                "code": "TJK",
                "defzone":0,
                "supportzonelist":[7,35],
                "osdtimezonelist":["UTC+5","Auto"]
            },
            {
               // "name": "Kazakhstan",// 哈萨克斯坦(Hisense)
                "code": "KAZ",
                "defzone":0,
                "supportzonelist":[10,35],
                "osdtimezonelist":["UTC+6","Auto"]
            },
            {
               // "name": "Croatia",// 克罗地亚(Hisense)
                "code":"HRV",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["CET(UTC+1)","Auto"]

            },
            {
                // "name": "Algeria", //阿尔及利亚
                "code": "DZA",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["UTC+1","Auto"]
            },
            {
                //"name": "Iraq", //伊拉克
                "code": "IRQ",
                "defzone":0,
                "supportzonelist":[3,35],
                "osdtimezonelist":["UTC+3","Auto"]

            },
            {
                //"name": "Saudi Arabia", //沙特阿拉伯
                "code": "SAU",
                "defzone":0,
                "supportzonelist":[3,35],
                "osdtimezonelist":["UTC+3","Auto"]
            },
            {
               // "name": "Latvia",// 拉脱维亚(Hisense)
                "code": "LVA",
                "defzone":0,
                "supportzonelist":[2,35],
                "osdtimezonelist":["UTC+2","Auto"]
            },
            {
               // "name": "Estonia",// 爱沙尼亚(Hisense)
                "code": "EST",
                "defzone":0,
                "supportzonelist":[2,35],
                "osdtimezonelist":["UTC+2","Auto"]
            },
            {
               // "name": "Lithuania",// 立陶宛(Hisense)
                "code": "LTU",
                "defzone":0,
                "supportzonelist":[2,35],
                "osdtimezonelist":["UTC+2","Auto"]
            },
            {
                // "name": "[SE1091]",//"Latvia",// 斯洛文尼亚(Hisense)
                "code": "SVN",
                "defzone":0,
                "supportzonelist":[1,35],
                "osdtimezonelist":["UTC+1","Auto"]
            },
            {

                //"name": //希腊
                "code": "GRC",
                "defzone":0,
                "supportzonelist":[2,35],
                "osdtimezonelist":["UTC+2","Auto"]
            }
        ]
        //["Germany", "Austria", "Italy", "England", "Spain", "France", "Switzerland", "Portuguesa",
        // "Sweden", "Denmark", "Finland", "Norway", "Turkish", "Czech", "Slovakia", "Poland", "Hungary", "Bulgaria"]

    }
    else if(verArea=="COL")
    {
        countryMapList = [
            {
                //"name": "Colombia",
                "code": "COL",
                "defzone":0,
                "supportzonelist":[28],
                "osdtimezonelist":["UTC-5"]

            }
        ]
    }
    else  //if(verArea=="EM")
    {
        if(CurrentSubArea=="MiddleEast")
        {
            countryMapList = [
                {
                    //"name": "Egypt", //埃及
                    "code": "EGY",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {
                   // "name": "Algeria", //阿尔及利亚
                    "code": "DZA",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                },
                {
                    //"name": "Iran", //伊朗
                    "code": "IRN",
                    "defzone":0,
                    "supportzonelist":[4,35],
                    "osdtimezonelist":["UTC+3.5","Auto"]
                },
                {
                    //"name": "Iraq", //伊拉克
                    "code": "IRQ",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]

                },
                {
                    //"name": "Saudi Arabia", //沙特阿拉伯
                    "code": "SAU",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {
                   // "name": "United Arab Emirates", //阿联酋
                    "code": "ARE",
                    "defzone":0,
                    "supportzonelist":[5,35],
                    "osdtimezonelist":["UTC+4","Auto"]
                },
                {
                    //"name": "Kuwait", //科威特
                    "code": "KWT",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {
                    //"name": "Yemen", //也门
                    "code": "YEM",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {
                   // "name": "Oman", //阿曼
                    "code": "OMN",
                    "defzone":0,
                    "supportzonelist":[5,35],
                    "osdtimezonelist":["UTC+4","Auto"]
                },
                {
                    //"name": "Qatar", //卡塔尔
                    "code": "QAT",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {
                    //"name": "Jordan", //约旦
                    "code": "JOR",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {
                    //"name": "Dubai", //迪拜
                    "code": "DXB",
                    "defzone":0,
                    "supportzonelist":[5,35],
                    "osdtimezonelist":["UTC+4","Auto"]
                },
                {
                    //"name": "Palestine", //巴勒斯坦
                    "code": "PSE",
                    "defzone":0,
                    "supportzonelist":[7,35],
                    "osdtimezonelist":["UTC+5","Auto"]
                }
                ,
                {
                    //"name": "Bahrain", //巴林
                    "code": "BHR",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {
                    //"name": "Lebanon", //黎巴嫩
                    "code": "LBN",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {
                    //"name": "Syria", //叙利亚
                    "code": "SYR",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                }
            ]
        }
        else if(CurrentSubArea=="CIS")
        {
            countryMapList = [
                {
                    //"name": "Israel", //以色列
                    "code": "ISR",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },

                {
                    //"name": "Russia",//俄罗斯
                    "code": "RUS",
                    "defzone":2,
                    "supportzonelist":[2,3,5,7,10,12,13,14,16,17,18,35],
                    "osdtimezonelist":["Kaliningrad Time(UTC+2)","Moscow Time(UTC+3)","Samara Time(UTC+4)","Yekaterinburg Time(UTC+5)","Omsk Time(UTC+6)",
                        "Krasnoyarsk Time(UTC+7)","Irkutsk Time (UTC+8)","Yakutsk Time (UTC+9)","Vladivostok Time (UTC+10)","Srednekolymsk Time (UTC+11)","Kamchatka Time (UTC+12)","Auto"]
                },
                {
                    //"name": "Uzbekistan",//乌兹别克斯坦(Hisense)
                    "code": "UZB",
                    "defzone":0,
                    "supportzonelist":[7,35],
                    "osdtimezonelist":["UTC+5","Auto"]
                },
                {
                   // "name": "Kyrgyz",//吉尔吉斯斯坦(Hisense)
                    "code": "KGZ",
                    "defzone":0,
                    "supportzonelist":[10,35],
                    "osdtimezonelist":["UTC+6","Auto"]
                },
                {
                    //"name": "Turkmenistan",//土库曼斯坦(Hisense)
                    "code": "TKM",
                    "defzone":0,
                    "supportzonelist":[7,35],
                    "osdtimezonelist":["UTC+5","Auto"]
                },
                //        {
                //            "name": "Turkey",//土耳其(Hisense)
                //            "code": "TUR"
                //        },
                {
                    "code": "KAZ",
                    "defzone":0,
                    "supportzonelist":[10,35],
                    "osdtimezonelist":["UTC+6","Auto"]
                },
                {
                    //"name": "Ukraine",//乌克兰(Hisense)
                    "code": "UKR",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {
                   // "name": "Azerbaijan",//阿塞拜疆(Hisense)
                    "code": "AZE",
                    "defzone":0,
                    "supportzonelist":[5,35],
                    "osdtimezonelist":["UTC+4","Auto"]
                },
                {
                    //"name": "Georgia",//格鲁吉亚(Hisense)
                    "code": "GEO",
                    "defzone":0,
                    "supportzonelist":[5,35],
                    "osdtimezonelist":["UTC+4","Auto"]
                },
                {
                    //"name": "Armenia",// 亚美尼亚(Hisense)
                    "code": "ARM",
                    "defzone":0,
                    "supportzonelist":[5,35],
                    "osdtimezonelist":["UTC+4","Auto"]
                },
                {
                    //"name": "Serbia",// 塞尔维亚(Hisense)
                    "code": "SRB",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                },
                {
                    //"name": "Tajikistan",// 塔吉克斯坦(Hisense)
                    "code": "TJK",
                    "defzone":0,
                    "supportzonelist":[7,35],
                    "osdtimezonelist":["UTC+5","Auto"]
                },
                {
                    //"name": "Belarus",// 白俄罗斯(Hisense)
                    "code": "BLR",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {
                    //"name": "Moldova",// 摩尔多瓦(Hisense)
                    "code": "MDA",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                }

            ]
        }
        else if(CurrentSubArea=="Asian")
        {
            countryMapList = [
                {

                    //"name": "Taiwan",//台湾（OEM)
                    "code": "TWN",
                    "defzone":0,
                    "supportzonelist":[13,35],
                    "osdtimezonelist":["UTC+8","Auto"]
                },
                {

                    //"name": "Australia",//澳大利亚（OEM)
                    "code": "AUS",
                    "defzone":0,
                    "supportzonelist":[16,16,16,13,15,15,16,16,35],
                    "osdtimezonelist":["VIC","QLD","TAS","WA","SA","NT","NSW","ACT","Auto"]
                },
                {

                    //"name": "Thailand",//泰国（OEM)
                    "code": "THA",
                    "defzone":0,
                    "supportzonelist":[12,35],
                    "osdtimezonelist":["UTC+7","Auto"]
                },
                {

                    //"name": "Vietnam",// 越南
                    "code": "VNM",
                    "defzone":0,
                    "supportzonelist":[7,35],
                    "osdtimezonelist":["UTC+5","Auto"]
                },
                {

                    //"name": "Myanmar",//缅甸
                    "code": "MMR",
                    "defzone":0,
                    "supportzonelist":[11,35],
                    "osdtimezonelist":["UTC+6.5","Auto"]
                },
                {

                    //"name": "Malaysia",//马来西亚
                    "code": "MYS",
                    "defzone":0,
                    "supportzonelist":[13,35],
                    "osdtimezonelist":["UTC+8","Auto"]
                    //"MYS"
                },

                {
                    //"name": "India",//印度
                    "code": "IND",
                    "defzone":0,
                    "supportzonelist":[8,35],
                    "osdtimezonelist":["UTC+5.5","Auto"]
                },
                {
                   // "name": "Indonesia",//印度尼西亚
                    "code": "IDN",
                    "defzone":0,
                    "supportzonelist":[12,35],
                    "osdtimezonelist":["UTC+7","Auto"]
                },
                {
                    //"name": "Sri Lanka",//斯里兰卡
                    "code": "LKA",
                    "defzone":0,
                    "supportzonelist":[8,35],
                    "osdtimezonelist":["UTC+5.5","Auto"]
                },
                {
                    //"name": "Maldives",//马尔代夫
                    "code": "MDV",
                    "defzone":0,
                    "supportzonelist":[7,35],
                    "osdtimezonelist":["UTC+5","Auto"]
                },
                {
                    //"name": "Fiji",///斐济
                    "code": "FJI",
                    "defzone":0,
                    "supportzonelist":[18,35],
                    "osdtimezonelist":["UTC+12","Auto"]
                },
                {
                    //"name": "Bengal",//孟加拉
                    "code": "BGD",
                    "defzone":0,
                    "supportzonelist":[10,35],
                    "osdtimezonelist":["UTC+6","Auto"]
                },
                // 巴基斯坦
                {
                    //"name": "Pakistan",
                    "code": "PAK",
                    "defzone":0,
                    "supportzonelist":[7,35],
                    "osdtimezonelist":["UTC+5","Auto"]
                },
                //  尼泊尔
                {
                    //"name": "Nepal",
                    "code": "NPL",
                    "defzone":0,
                    "supportzonelist":[9,35],
                    "osdtimezonelist":["UTC+5.75","Auto"]
                },
                //  柬埔寨
                {
                    //"name": "Cambodia",
                    "code": "KHM",
                    "defzone":0,
                    "supportzonelist":[12,35],
                    "osdtimezonelist":["UTC+7","Auto"]
                },
                {
                    //"name": "Mongolia",//蒙古
                    "code": "MNG",
                    "defzone":0,
                    "supportzonelist":[13,35],
                    "osdtimezonelist":["UTC+8","Auto"]
                },
                {
                    //"name": "Other",//其他
                    "code": "ZZZ",
                    "defzone":13,
                    "supportzonelist":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
                    "osdtimezonelist":["UTC+0","UTC+1","UTC+2","UTC+3","UTC+3.5","UTC+4","UTC+4.5","UTC+5","UTC+5.5","UTC+5.75","UTC+6","UTC+6.5",
                        "UTC+7","UTC+8","UTC+9","UTC+9.5","UTC+10","UTC+11","UTC+12","UTC+12.75","UTC+13","UTC-12","UTC-11","UTC-10","UTC-9",
                        "UTC-8","UTC-7","UTC-6","UTC-5","UTC-4.5","UTC-4","UTC-3.5","UTC-3","UTC-2","UTC-1","Auto"]
                }
            ]
        }
        else
        {
            countryMapList = [
                {

                    //"name": "South Africa",//南非
                    "code": "ZAF",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },

                {

                    //"name": "Morocco",//摩洛哥(Hisense)
                    "code": "MAR",
                    "defzone":0,
                    "supportzonelist":[0,35],
                    "osdtimezonelist":["UTC+0","Auto"]
                },
                {

                    //"name": "Nigeria",//尼日利亚(Hisense)
                    "code": "NGA",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                },
                {

                   // "name": "Libya",//利比亚(Hisense)
                    "code": "LBY",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {
                    //"name": "Tunisia",//突尼斯
                    "code": "TUN",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]

                },
                {

                    //"name": "Ghana",//加纳(Hisense+OEM)
                    "code": "GHA",
                    "defzone":0,
                    "supportzonelist":[0,35],
                    "osdtimezonelist":["UTC+0","Auto"]
                },
                {

                    //"name": "Sierra Leone",//塞拉利昂(Hisense)
                    "code": "SLE",
                    "defzone":0,
                    "supportzonelist":[0,35],
                    "osdtimezonelist":["UTC+0","Auto"]
                },
                {

                   // "name": "Cote d'Ivoire",// 科特迪瓦(Hisense+OEM)
                    "code": "CIV",
                    "defzone":0,
                    "supportzonelist":[0,35],
                    "osdtimezonelist":["UTC+0","Auto"]
                },
                {

                    //"name": "Angola",// 安哥拉(Hisense+OEM)
                    "code": "AGO",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                }
                ,
                {

                    //"name": "Benin",// 贝宁(Hisense)
                    "code": "BEN",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                },
                {

                    //"name": "Republic of Liberia",// 利比里亚(Hisense)
                    "code": "LBR",
                    "defzone":0,
                    "supportzonelist":[0,35],
                    "osdtimezonelist":["UTC+0","Auto"]
                },
                {

                    //"name": "Guinea",// 几内亚(Hisense)
                    "code": "GIN",
                    "defzone":0,
                    "supportzonelist":[0,35],
                    "osdtimezonelist":["UTC+0","Auto"]

                },
                {
                    //"name": "Senegal",// 塞内加尔(Hisense)
                    "code": "SEN",
                    "defzone":0,
                    "supportzonelist":[0,35],
                    "osdtimezonelist":["UTC+0","Auto"]
                },
                {

                    //"name": "Congo-Kinshasa",//  刚果（金）(Hisense+OEM)
                    "code": "COD",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                },
                {

                    //"name": "Cameroon",//喀麦隆(Hisense+OEM)
                    "code": "CMR",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                },
                {

                    //"name": "Zimbabwe",// 津巴布韦(Hisense)
                    "code": "ZWE",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {

                    //"name": "Congo-Brazzaville",// 刚果布(Hisense)
                    "code": "COG",
                    "defzone":0,
                    "supportzonelist":[1,35],
                    "osdtimezonelist":["UTC+1","Auto"]
                },
                {
                   // "name": "Burundi",// 布隆迪(Hisense)
                    "code": "BDI",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {
                    //"name": "Somalia",// 索马里(Hisense)
                    "code": "SOM",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {

                    //"name": "Uganda",//乌干达(Hisense)
                    "code": "UGA",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {

                   // "name": "Tanzania",//坦桑尼亚(Hisense)
                    "code": "TZA",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {

                    //"name": "Mauritius",//  毛里求斯(Hisense)
                    "code": "MUS",
                    "defzone":0,
                    "supportzonelist":[5,35],
                    "osdtimezonelist":["UTC+4","Auto"]
                },
                {

                    //"name": "Sudan",//苏丹(Hisense)
                    "code": "SDN",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {

                    //"name": "Djibouti",//吉布提(Hisense)
                    "code": "DJI",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {

                    //"name": "Ethiopia",// 埃塞俄比亚(Hisense)
                    "code": "ETH",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {

                   // "name": "Kenya",// 肯尼亚(Hisense+OEM)
                    "code": "KEN",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                },
                {

                    //"name": "Mozambique",// 莫桑比克(Hisense)
                    "code": "MOZ",
                    "defzone":0,
                    "supportzonelist":[2,35],
                    "osdtimezonelist":["UTC+2","Auto"]
                },
                {

                    //"name": "Madagascar",// 马达加斯加(Hisense)
                    "code": "MDG",
                    "defzone":0,
                    "supportzonelist":[3,35],
                    "osdtimezonelist":["UTC+3","Auto"]
                }

            ]
        }
    }

    return countryMapList;
}
function Updatesyscountryid(id)
{
    //["USA","CAN","MEX"]
    var countrylist=getSettingCountryMapList();
    Hisense.File.write("countrycode",countrylist[id].code,1);

}

function createSettingPage(callback){

    hiWebOsFrame.startLoading(10, "settinginit");
    hiWebOsFrame.createPage('setting_fircls_page', null,null,null, function (b) {
        hiWebOsFrame.settingsFirst = b;
        hiWebOsFrame.endLoading();
        callback();
    });
}


function initsystemid()
{

    var areaindex=hiWebOsFrame.getCurrentArea();
    debugPrint("to init the system id "+areaindex)
    if(areaindex=="EM")
    {
         SYSTEM_LOCATION=0;
          SYSTEM_PIN=1
          SYSTEM_TIME=2;
          SYSTEM_LANG=3;
         APP_SETTING=4;
         CLOSED_CAPTION=65535;
         CEC_FUNCTION=5;
         ADVANCE_SETTING=6;
         RECENT_CEC= 5;
         RECNT_AD=6;
    }
    else if(areaindex=="EU")
    {
        SYSTEM_LOCATION=0;
        SYSTEM_PIN=1;
        SYSTEM_TIME=2;
        SYSTEM_LANG=3;
        SYS_SECURITY=65533;
        APP_SETTING=4;
        CLOSED_CAPTION=65535;
        CEC_FUNCTION=5;
        ADVANCE_SETTING=6;
        RECENT_CEC= 5;
        RECNT_AD=6;
    }
    else if(areaindex=="SA"||areaindex=="NA")
    {
         SYSTEM_LOCATION=0;
         SYSTEM_PIN=65535;
         SYSTEM_TIME=1;
         SYSTEM_LANG=2;
         SYS_SECURITY=3;
         APP_SETTING=4;
         CLOSED_CAPTION=5;
         CEC_FUNCTION=6;
         ADVANCE_SETTING=7;
         RECENT_CEC= 6;
         RECNT_AD=7;
    }
    else if(areaindex=="COL")
    {

        SYSTEM_LOCATION=65535;
        SYSTEM_PIN=0;
        SYSTEM_TIME=1;
        SYSTEM_LANG=2;
        SYS_SECURITY=65535;
        APP_SETTING=3;
        CLOSED_CAPTION=4;
        CEC_FUNCTION=5;
        ADVANCE_SETTING=6;
        RECENT_CEC= 5;
        RECNT_AD=6;
    }
    if(areaindex=="EU")
    {
        CHANNEL_EDIT=3;
        //CHL_PARENTCONTROL=6;  //modify by ghl
    }else if(areaindex=="COL"){
        CHANNEL_EDIT = 4;
        CHL_PARENTCONTROL=6; // modify by ghl
    }
    else
    {
        CHANNEL_EDIT=4;
        //CHL_PARENTCONTROL=5;  // modify by ghl
    }
}
var g_settingupgardevalue=0;
var g_OadDownloadfailtimer=null;
var onUpdateDownloadProgressChaged=function(value)
{
    debugE("onUpdateDownloadProgressChaged"+value);
    g_settingupgardevalue=value;
    if(CanScheduleProgrammePopUp())
    {
        debugPrint(" check ok to open");
        CloseModuleOpenUpgradeDialog(g_settingupgardevalue,0);
    }
    else
    {
        var upgradetimer= setInterval(
            function() {
                if(CanScheduleProgrammePopUp())
                {
                    debugE("start to open upgrade dialog")
                    CloseModuleOpenUpgradeDialog(g_settingupgardevalue,0);
                    clearInterval(upgradetimer);
                }
                else
                {
                    debugE("can not open the upgrade dialog ------------------")
                }
            }, 4000);
    }

}

var onOadDownloadProgressChaged=function(value)
{
    debugE("onUpdateDownloadProgressChaged"+value);
      if(!!g_OadDownloadfailtimer)
    {
        clearTimeout(g_OadDownloadfailtimer);
        g_OadDownloadfailtimer=null;
    }
    g_settingupgardevalue=value;
    if(CanScheduleProgrammePopUp())
    {
        debugPrint(" check ok to open");
        CloseModuleOpenUpgradeDialog(g_settingupgardevalue,1);
    }
    else
    {
        var oadupgradetimer= setInterval(
            function() {
                if(CanScheduleProgrammePopUp())
                {
                    debugE("start to open upgrade dialog")
                    CloseModuleOpenUpgradeDialog(g_settingupgardevalue,1);
                    clearInterval(oadupgradetimer);
                }
                else
                {
                    debugE("can not open the upgrade dialog ------------------")
                }
            }, 4000);
    }
}
function  CloseModuleOpenUpgradeDialog( value,type)
{
    hiWebOsFrame.lockAllKeys();
    if (!!hiWebOsFrame.getCurrentPage()) {
        if (hiWebOsFrame.isCurrentModule("livetv")) {
            closeLiveTVModule();
            StartFirmwareUpdate(hiWebOsFrame.blankPage,value,type);

//            hiWebOsFrame.unLockAllKeys();
        }
        else if (hiWebOsFrame.getCurrentPage().module == "launcher") {
           // hiWebOsFrame.lockAllKeys();
            hiWebOsFrame.getCurrentPage().hiBlur();
            StartFirmwareUpdate(hiWebOsFrame.myLauncher,value,type);
//            hiWebOsFrame.unLockAllKeys();
        }
        else if (hiWebOsFrame.getCurrentPage().module == "allapps"
            || hiWebOsFrame.getCurrentPage().module == "accuweather") {
          //  hiWebOsFrame.lockAllKeys();
            var crntPage = hiWebOsFrame.getCurrentPage();
            crntPage.hiBlur();
            StartFirmwareUpdate(crntPage,value,type);
        }
        else if (hiWebOsFrame.isCurrentModule("app")) {
            var crntPage = hiWebOsFrame.getCurrentPage();
            debugPrint("open pvr dialog  On App function begin!!!"+crntPage.id);
            if ("app_lau_browser" == crntPage.id) {
                switch (appBrowser.getCurrentCommandType()) {
                    case CmdURLType.LAU_BROWSER_HIMEDIA:
                        //model......通知himedia取消按键
                        if ( 16 != GlobalFlagShareInBrowser) {
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);}
                        debugPrint("open pvr dialog on himedia  function begin!!!");
                    //   hiWebOsFrame.lockAllKeys();
                        StartFirmwareUpdate(crntPage,value,type);
                      //  hiWebOsFrame.unLockAllKeys();
                        hiWebOsFrame.registerKeyCodesForSettingOnApp();
                        break;
                    case CmdURLType.LAU_BROWSER_PICASA:
                        debugPrint("open pvr dialog on  picasa function begin!!!");
                     //   hiWebOsFrame.lockAllKeys();
                        StartFirmwareUpdate(crntPage,value,type);
                     //   hiWebOsFrame.unLockAllKeys();
                        hiWebOsFrame.registerKeyCodesForSettingOnApp();
                        break;
                    case CmdURLType.LAU_BROWSER_EPOS:
                        //startQuickSetting();
                        break;
                    default :
                        break;
                }
            }
            else if ("app_amazon" == crntPage.id
                || "app_vudu" == crntPage.id
                || "app_youtube" == crntPage.id
                || "app_netflix" == crntPage.id
                || "app_tv_store" == crntPage.id
                || "app_hi_browser" == crntPage.id) {
              //  hiWebOsFrame.lockAllKeys();
                StartFirmwareUpdate(crntPage,value,type);
              //  hiWebOsFrame.unLockAllKeys();
                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                debugPrint("start upgrade dialog on app");
            }
        }
        else if(hiWebOsFrame.isCurrentModule("setting")||hiWebOsFrame.isCurrentModule("settingfirst"))
        {
            // var settingorigin = hiWebOsFrame.settingsFirst.origin;
         //   hiWebOsFrame.lockAllKeys();
            var crntPage = hiWebOsFrame.getCurrentPage();
            StartFirmwareUpdate(crntPage,value,type);
         //   hiWebOsFrame.unLockAllKeys();
        }
        else
        {
         //   hiWebOsFrame.lockAllKeys();
            var crntPage = hiWebOsFrame.getCurrentPage();
            StartFirmwareUpdate(crntPage,value,type);
         //   hiWebOsFrame.unLockAllKeys();
        }

    }
}

function upgradedialogDestroyCallback(tempOri) {
    //判断退出到Origin
    if (!!tempOri) {
        tempOri.open();
        tempOri.hiFocus();
        if ("app" == tempOri.module) {
            if ("app_lau_browser" == tempOri.id) {
                switch (appBrowser.getCurrentCommandType()) {
                    case CmdURLType.LAU_BROWSER_HIMEDIA:
                        //model......通知himedia注册按键
                        if ( 16 != GlobalFlagShareInBrowser) {
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);}

                        break;

                    default :
                        break;
                }
            }
        }
        else {

        }
    }
    else {
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    hiWebOsFrame.unLockAllKeys();
}
function  StartFirmwareUpdate(origin,value,type)
{
    var priority = (!!origin) ? (origin.priority + 10) : 1000;//add by jiaguili to fix the dialog will be conflict with sound help bar .
    if(value<0&&type==1)
    {
        hiWebOsFrame.createPage('setting_sys_dialog1_page',null, origin, priority,function(dialog1){
            hiWebOsFrame.settingsupdatedialog1=dialog1;
            PageDataSetttingSysdialog1.operateData.curdatatype=4;
            hiWebOsFrame.settingsupdatedialog1.open();
            hiWebOsFrame.settingsupdatedialog1.hiFocus();
            hiWebOsFrame.unLockAllKeys();
            hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();
        });
    }
    else{
    hiWebOsFrame.createPage('setting_update_spacecheck_page',null, origin, priority,function(dialog1){
        hiWebOsFrame.settingupdatediskcheck=dialog1;
        PageDataSetttingUpdateSpaceCheck.operateData.type=type;
        hiWebOsFrame.settingupdatediskcheck.open();
        hiWebOsFrame.settingupdatediskcheck.hiFocus();
        hiWebOsFrame.unLockAllKeys();
    });
  }
}
function StartInitSetting()
{

    var ret=0;
    initsystemid();
    model.softupdate.onDownloadProgressChaged=onUpdateDownloadProgressChaged;
    try
    {
        if(hiWebOsFrame.getCurrentArea()=="EM"||FREEVIEWTEST)
        {
            model.softupdate.onOadDownloadProgressChaged=onOadDownloadProgressChaged;

        }
    }catch (e)
    {
        debugE(e.message);
    }

    debugE(" to register the onDownloadProgressChaged")
    var countryid=model.basicSetting.getTvsetLocation();
    debugPrint("countryid"+countryid);
    var countrylist1=[];
    var temp=getSettingCountryMapList();
    if(temp.length>0)
    {
        countrylist1=[];
        for(var i=0;i<temp.length;i++)
        {
            countrylist1.push(temp[i].code);
        }
    }
    var index=_getIndex(countrylist1,countryid);
    var string=Hisense.File.read("countrycode",1);
    if(typeof string!="string"||string!=countryid)
    {
        if(index>=0)
        {
            debugPrint(" get the country"+index);
            ret=Hisense.File.write("countrycode",countryid,1);
            if(ret!=0)
            {
                debugPrint("write file error !!!!!!! ret="+ret);
            }
        }
        else
        {
            debugPrint(" get the country wrong")
            ret=Hisense.File.write("countrycode","ZAF",1);
            if(ret!=0)
            {
                debugPrint("write file error !!!!!!! ret="+ret);
            }

        }
    }
    var langid=model.language.getOsd();
    debugPrint("langid"+langid);
    string=Hisense.File.read("languagecode",1)
    var langlist=getSettingOSDLanguageMapList();
    var index2=_getIndexByNum(langlist,langid);
    if(index2<0)
    {
        debugPrint("the langid is error ");
        index2=0;
    }
    if(typeof string!="string"||string!=langlist[index2].code)
    {
        if(index2>=0)
        {
            debugPrint(" get the language"+index2);
            ret=Hisense.File.write("languagecode",langlist[index2].code,1);
            if(ret!=0)
            {
                debugPrint("write language file error !!!!!!! ret="+ret);
            }
        }
        else
        {
            debugPrint(" get the language wrong")
            ret=Hisense.File.write("languagecode","eng",1);
            if(ret!=0)
            {
                debugPrint("write language file error !!!!!!! ret="+ret);
            }
        }
//        debugPrint(" get the language"+langid);
//        ret=Hisense.File.write("languagecode",Settingsysmenulanglist[langid],1);
//        if(ret!=0)
//        {
//            debugPrint("write file error !!!!!!! ret="+ret);
//        }
    }
//    var timermode=model.timerfunc.getStandbyMode();
//    var timervalue=model.timerfunc.getStandbyTime();
//    if(timermode==2)
//    {
//        model.timerfunc.setStandbyMode(2);
//        model.timerfunc.setStandbyTime(timervalue);
//        debugE("set the power off daily value ,enable the daily function")
//    }


//    model.parentlock.onPinChaged=onChannelLockPinChaged;
//    model.timerctrl.onRecorderLeadTimeChaged=onPvrPreChaged;
//    model.timerctrl.onRecorderTrailingTimeChaged=onPvrdeferChaged;
//    //   model.parentlock.onAllChaged=onSecurityAllChaged;
//    //   model.parentlock.onAllDailyChaged=onSecurityDailyChaged;
//    model.softupdate.onSearchStateChaged=onSearchStateChaged;
//    model.softupdate.onProgressChaged=onUpdateProgressChaged;
//    model.softupdate.onStateChaged=onUpdateStateChaged;
    //debugPrint('pjjjjjjjjjjjjjjjjjjjjjj');
    //  getservicelist();

//    try {
//        hiWebOsFrame.createPage('setting_sys_qs_page', null, null, null, function (a) {
//            // a.open();
//            //   a.hiFocus();
//            debugPrint('setting_sys_qs_page');
//            hiWebOsFrame.settingsysqS = a;
//            hiWebOsFrame.settingsysqS.close();
//            hiWebOsFrame.createPage('setting_fircls_page', null, null, null, function (a) {
//                // a.close();
//                // a.open();
//                // a.hiFocus();
//                debugPrint('setting_fircls_page');
//                hiWebOsFrame.settingsFirst = a;
//                hiWebOsFrame.settingsFirst.close();
//            });
//        });
//    } catch (ex) {
//        debugE(ex.message);
//    }


//    languagepageinit();
//    SettingSecurityinit();
//    SettingTimerinit();
//    SettingPVRinit();
//    getTVnameinit();
//    SettingCecInit();
//    SettingadInit();

}

function startpvr(type, origin, callback) {
    hiWebOsFrame.createPage('setting_sys_pvr_page', null, origin, null, function (pvr) {
        hiWebOsFrame.settingssyspvr = pvr;
        hiWebOsFrame.createPage('setting_sys_diskcheck_page', null, origin, null, function (diskcheck) {
            hiWebOsFrame.settingssysdiskcheck = diskcheck;
            hiWebOsFrame.settingssysdiskcheck.callback = callback;
            //  diskcheck.close();
            hiWebOsFrame.createPage('setting_sys_list2_page', null, origin, null, function (list2) {
                hiWebOsFrame.settingssyslist2 = list2;
                hiWebOsFrame.settingssyslist2.callback = callback;
                //  list2.close();
                if (type == 1) {
                    SettingSysPvrBtn1Enter();
                }
                else if (type == 2) {
                    SettingSysPvrBtn2Enter();
                }

            });
            //   pvr.open();
            //   pvr.hiFocus();

        });

    });
}

function StartAutoUpdate(origin,type) {

    try {
        hiWebOsFrame.lockAllKeys();
        var temp;
        if(type==0)
        {
         temp =model.softupdate.getHisenseUpgradeMode();
         debugPrint("ota get the upgrade mode is "+temp)
        }else
        {
            temp=2;
        }
        debugE("get the software update type is  " + temp);

        if (temp != 2) {
            hiWebOsFrame.createPage('setting_autoupdate_page', null, origin, null, function (update) {
                hiWebOsFrame.settingsautoupdate = update;
                    SettingAutoUpdateinit();
                    PageDateSettingAutoUpdate.operateData.type=type;
                    hiWebOsFrame.settingsautoupdate.rewriteDataOnly();
                    hiWebOsFrame.unLockAllKeys();
                    hiWebOsFrame.settingsautoupdate.open();
                    hiWebOsFrame.settingsautoupdate.hiFocus();
            });
        }
       else
        {
            hiWebOsFrame.createPage('setting_forceupdate_page', null, origin, null, function (update) {
                hiWebOsFrame.settingsautoupdate = update;
                PageDateSettingForceUpdate.operateData.type=type;
                    SettingForceUpdateinit();
                    hiWebOsFrame.settingsautoupdate.rewriteDataOnly();
                    hiWebOsFrame.unLockAllKeys();
                    hiWebOsFrame.settingsautoupdate.open();
                    hiWebOsFrame.settingsautoupdate.hiFocus();

            });
        }
    } catch (e) {
        debugE(e.message);
        hiWebOsFrame.unLockAllKeys();

    }

}

function StartAppUpgrade(origin)
{
    try
    {
        if(!!origin)
        {   hiWebOsFrame.lockAllKeys();
            var temp =model.softupdate.getHisenseUpgradeMode();
            debugPrint("get the launcher software update type is  " + temp);
            if(temp==2)
            {
                hiWebOsFrame.createPage('setting_appupdate_page', null, origin, null, function (page) {
                    hiWebOsFrame.SettingAppUpdareVer = page;
                    page.open();
                    page.hiFocus();
                    hiWebOsFrame.unLockAllKeys();


                });
            }
            else
            {
                hiWebOsFrame.createPage('setting_appForupdate_page', null, origin, null, function (page) {
                    hiWebOsFrame.SettingAppUpdareVer = page;
                    page.open();
                    page.hiFocus();
                    hiWebOsFrame.unLockAllKeys();

                });
            }
        }
    }catch (e)
    {
        debugE(e.message);
        hiWebOsFrame.unLockAllKeys();
    }
}

function StartClosedCaptionControl(origin)
{
    try
    {
        if(!!origin)
        {
            hiWebOsFrame.createPage('setting_cc_list_page', null, origin, null, function (page) {
                page.open();
                page.hiFocus();
                hiWebOsFrame.settingscclist = page;
            });
        }
    }catch (e)
    {
        debugPrint(e.message)
    }
}

function StartSleepTimerControl(origin)
{
    try
    {
        if(!!origin)
        {
            hiWebOsFrame.createPage('setting_sleep_list_page', null, origin, null, function (page) {
                page.open();
                page.hiFocus();
                hiWebOsFrame.settingsleeplist = page;
            });
        }
    }catch (e)
    {
        debugPrint(e.message)
    }
}
function StartTeletextControl(origin)
{
    try
    {
        if(!!origin)
        {
            hiWebOsFrame.createPage('setting_txt_list_page', null, origin, null, function (page) {
                page.open();
                page.hiFocus();
                hiWebOsFrame.settingstxtlist = page;
            });
        }
    }catch (e)
    {
        debugPrint(e.message)
    }
}

function StartSubtitleControl(origin)
{
    try
    {
        if(!!origin)
        {
            hiWebOsFrame.createPage('setting_subtitle_list_page', null, origin, null, function (page) {
                page.open();
                page.hiFocus();
                hiWebOsFrame.settingsubtitlelist = page;
            });
        }
    }catch (e)
    {
        debugPrint(e.message)
    }
}
function StartBluetoothMatchControl() {
    try {

        model.bluetooth.setDevicesConnect(0);

        hiWebOsFrame.createPage('Bluetooth_speech_page', null, null, null, function (page) {

            hiWebOsFrame.Bluetooth_speech_page = page;
            if (checkAndCloseIfAppOn(hiWebOsFrame.Bluetooth_speech_page)) {
                DBG_ERROR("crnt page origin: " + hiWebOsFrame.getCurrentPage().origin.id);
                return false;
            }
            else {
                closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                tryToCloseAllApps();
				tryToCloseLauncher();
                hiWebOsFrame.Bluetooth_speech_page.open();
                hiWebOsFrame.Bluetooth_speech_page.hiFocus();
            }
        });
        //closeDOthersModule("bluetooth");

    } catch (e) {
        debugPrint(e.message)
    }
}
/*
 2:蓝牙配对中
 1：配对成功
 0：配对失败
 */
var DevicesConnectChaged = function(v) {
    try {
        DBG_ALWAYS("------DevicesConnectChaged:" + v);

        if(factoryMode != FACTORY_MODE_ENUM.MODE_NORMAL){
            debugG('cur factoryMode not normal, return');
            return;
        }
    } catch (ex) {
        debugE(ex.message);
    }

    try {

        if (v == 3) {

            if ((hiWebOsFrame.getCurrentPageId() == "app_lau_browser" && CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType())
                || hiWebOsFrame.getCurrentPageId() == 'epos') {

                DBG_INFO('cur module epos, return');
                return;
            }

            if (!!hiWebOsFrame.getCurrentPage() && 'wizard' == hiWebOsFrame.getCurrentPage().module) {
                debugG('cur module wizard, return');
                return;
            }

            debugG('3d glass connected successful');
            showMsg("", "Paired successfully!");
        }
        else if (v == 2) {
            closeDOthersModule("bluetooth");
            hiWebOsFrame.closeModule("bluetooth");
            try{
                hiWebOsFrame.blankPage.close();
            }
            catch(ex){
                debugE(ex);
            }
            if(hiWebOsFrame.getCurrentPageId() == "BluetoothMatch_speech_page"){
                debugG('-----BluetoothMatch_speech_page');
                return;
            }
            hiWebOsFrame.createPage('BluetoothMatch_speech_page', null, null, null, function (page) {
                if (hiWebOsFrame.getCurrentPageId() == "Bluetooth_speech_page") {
                    hiWebOsFrame.Bluetooth_speech_page.close();
                    hiWebOsFrame.Bluetooth_speech_page.destroy();
                }
                page.open();
                page.hiFocus();
                page.rewriteDataOnly();
                hiWebOsFrame.BluetoothMatch_speech_page = page;
            });
            debugG('-----BluetoothMatch_speech_page');
        }
        else if (v == 1) {
            closeDOthersModule("bluetooth");
            hiWebOsFrame.closeModule("bluetooth");
            hiWebOsFrame.createPage('BluetoothResult_speech_page', null, null, null, function (page) {
                BlueToothResultData.operateData.successFlag = 1;
                BlueToothResultData.operateData.bluetoothResult_tip_start_img_1.Data = "img/speech/matchOn.png";
                BlueToothResultData.operateData.bluetoothResult_tip_start_text_1 = "Remote control pairing is successful!";
                page.open();
                page.hiFocus();
                page.rewriteDataOnly();
                hiWebOsFrame.BluetoothResult_speech_page = page;
            });
            debugG('-----BluetoothResult_speech_page success');
        }
        else if (v == 0) {
            closeDOthersModule("bluetooth");
            hiWebOsFrame.closeModule("bluetooth");
            hiWebOsFrame.createPage('BluetoothResult_speech_page', null, null, null, function (page) {
                BlueToothResultData.operateData.successFlag = 0;
                BlueToothResultData.operateData.bluetoothResult_tip_start_img_1.Data = "img/speech/matchFailed.png";
                BlueToothResultData.operateData.bluetoothResult_tip_start_text_1 = "Remote control pairing failed. Please try again";
                page.open();
                page.hiFocus();
                page.rewriteDataOnly();
                hiWebOsFrame.BluetoothResult_speech_page = page;
            });
            debugG('-----BluetoothResult_speech_page failed');
        }
        else if (v == 5) {
            hiWebOsFrame.endLoading("bluetooth");
            StartBluetoothMatchControl();
            debugG('-----show UI');
        }
        else if (v == 4) {
            hiWebOsFrame.startLoading(3, "bluetooth");
            debugG('-----Loading Flag');
        }
        else if (v == 6) {
            hiWebOsFrame.endLoading("bluetooth");
            try {
                var currentArea = hiWebOsFrame.getCurrentArea();
                if(currentArea == "EU"){
                    return false;
                }
                if (!canCurrentPageProcEvent() || isCurrentAppHimedia() || checkIsAppOn())return false;
                model.speech.ActionCtrl(1, 1);
                startSpeech();
                debugPrint("------>start Speech");
            }
            catch (ex) {
                debugE(ex);
            }

        }
        else if (v == 7) {
            debugPrint("------>CLEAR low BA");
            batteryFlag = 0;
            if (!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible) {
                $('#launcher_head_right').children(':last-child').css("display", "none");
                if (hiWebOsFrame.getCurrentPageId() == 'launcher_stabar') {
                    $('#launcher_head').attr('class', 'launcherHeadFocus');
                    hiWebOsFrame['launcher_stabar'].rewriteDataOnly();
                }
            }
        }
    }
    catch (ex) {
        debugE(ex);
    }

}



/**!-------------------------------Sound Public Function Start--------------------------*/

function Num2Bool(num) {
    if (0 == num || false == num) {
        return false;
    } else {
        return true;
    }
}

function Bool2Num(val) {
    if (false == val || 0 == val) {
        return 0;
    } else {
        return 1;
    }
}

function Num2OnOff(val){
    try {
        var strOnOff;
        if(0 == val){
            strOnOff = "Off"
        } else {
            strOnOff =  "On";
        }
        return strOnOff;
    } catch (ex) {
        debugE(ex.message);
    }
}


function FlipSwitchEasyChange(Cmp, state) {
    Cmp.SwitchType = state;
    var CmpData = Cmp.data;
    var CmpOpeData = Cmp.page.operateData[Cmp.id];

    //?§Ø????????????????????????????§Ó???¡ê????????operatedata????????
    if (CmpOpeData.switchType != undefined && CmpOpeData.switchType != Cmp.SwitchType) {
        CmpOpeData.switchType = Cmp.SwitchType;
    }
    //����data��������
    CmpData.Data.switchType = Cmp.SwitchType;
//    CmpData.Data.switchText = !!Cmp.SwitchType ? CmpOpeData.switchTextList.switchOn : CmpOpeData.switchTextList.switchOFF;

    Cmp.hiFlipSwitch(Cmp.SwitchType);
}


function FlipSwitchRewriteEasy(pageData, cmpStr, state) {
    try {
        var cmpData = pageData[cmpStr];
        var cmpOpeData = pageData.operateData[cmpStr];
        cmpData.Data.switchType = state;
        cmpOpeData.switchType = state;
        cmpData.Data.switchText = !!cmpOpeData.switchType ? cmpOpeData.switchTextList.switchOn : cmpOpeData.switchTextList.switchOFF;
    } catch (ex) {
        debugE(ex.message);
    }
    }

function FlipSwitchInitEasy(opeData, cmpStr, state) {
    opeData[cmpStr].switchType = state;
}


function SliderRewriteEasy(pageData, cmpStr, val) {
    pageData[cmpStr].Data.setDefalutValue = val;
    pageData.operateData[cmpStr].Data.setDefalutValue = val;    //����ɾ��
}


function SliderInitEasy(opeData, cmpStr, val) {
    opeData[cmpStr].Data.setDefalutValue = val;
}

function SliderEasyChange(Cmp, val) {
    Cmp.data.Data.setDefalutValue = val;
    Cmp.page.operateData[Cmp.id].Data.setDefalutValue = val;
    Cmp.page.getCaE(Cmp.id).hiSliderValue(val);
}


function NaviBarRewriteEasy(pageData, cmpStr, val) {
    pageData[cmpStr].SelectedIndex = val;
    pageData[cmpStr].DataSelectedIndex = val;
    pageData.operateData[cmpStr].SelectedIndex = val;
    pageData.operateData[cmpStr].DataSelectedIndex = val;
}

function NaviBarInitEasy(opeData, cmpStr, val) {
    opeData[cmpStr].SelectedIndex = val;
    opeData[cmpStr].DataSelectedIndex = val;
}

function NaviBarEasyChange(Cmp, val) {
    try {
        Cmp.DataSelectedIndex = val;
        Cmp.page.operateData[Cmp.id].SelectedIndex = val;
        Cmp.page.operateData[Cmp.id].DataSelectedIndex = val;
    } catch (ex) {
        debugE(ex.message);
    }
}





function OpenSndModePage(oriPage) {
    try {
        if (arguments.length == 0) {
            debugG("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('setting_snd_mode', null, oriPage, 1000, function (SettingSndModePage) {
                debugG("sndMode~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingSndModePage = SettingSndModePage;
                SettingSndModePage.open();
                SettingSndModePage.hiFocus();
            });
        } else {
            hiWebOsFrame.createPage('setting_snd_mode', null, null, 1000, function (SettingSndModePage) {
                debugG("sndMode~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingSndModePage = SettingSndModePage;
                SettingSndModePage.open();
                SettingSndModePage.hiFocus();
            });
        }


    } catch (ex) {
        debugE(ex.message);
    }
}


/**!-------------------------------Sound Public Function End--------------------------*/
function OpenPicModePage(oriPage) {
    try {
        if(arguments.length == 0){
            debugG("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('setting_pic_mode', null, oriPage, 1000, function (SettingPicModePage) {
                debugG("PicMode~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingPicModePage = SettingPicModePage;
                SettingPicModePage.open();
                SettingPicModePage.hiFocus();


            });
        } else {
            hiWebOsFrame.createPage('setting_pic_mode', null, null, 1000, function (SettingPicModePage) {
                debugG("PicMode~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingPicModePage = SettingPicModePage;
                SettingPicModePage.open();
                SettingPicModePage.hiFocus();
            });
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function OpenPicSizePage(oriPage) {
    try {
        if(arguments.length == 0){
            debugG("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('setting_pic_aspect_ratio', null, oriPage, 1000, function (SettingPicSizePage) {
                debugG("PicSize~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingPicSizePage = SettingPicSizePage;
                SettingPicSizePage.open();
                SettingPicSizePage.hiFocus();


            });
        } else {
            hiWebOsFrame.createPage('setting_pic_mode', null, null, 1000, function (SettingPicSizePage) {
                debugG("PicSize~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingPicSizePage = SettingPicSizePage;
                SettingPicSizePage.open();
                SettingPicSizePage.hiFocus();
            });
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function OpenPic3DPage(oriPage) {
    try {
        if(arguments.length == 0){
            debugG("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('setting_pic_3d_page', null, oriPage, 1000, function (SettingPic3D) {
                hiWebOsFrame.SettingPic3D=SettingPic3D;
                var firFocusId = getPic3DFirstEnabledCmpId();
                hiWebOsFrame.SettingPic3D.firstFocusId = firFocusId;
                SettingPic3D.open();
                SettingPic3D.hiFocus();
            });
        } else {
            hiWebOsFrame.createPage('setting_pic_3d_page', null, null, 1000, function (SettingPic3D) {
                debugG("PicSize~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingPic3D=SettingPic3D;
                var firFocusId = getPic3DFirstEnabledCmpId();
                hiWebOsFrame.SettingPic3D.firstFocusId = firFocusId;
                SettingPic3D.open();
                SettingPic3D.hiFocus();
            });
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
var lancount=0;
function OpenLanKeyPage(oriPage) {
    try {
        if(arguments.length == 0){
            debugG("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('LanguageKeyListDialogId', null, oriPage, null, function (languageKey) {

                debugPrint('1.createpage:'+lancount);
                lancount++;
                hiWebOsFrame.languageKey = languageKey;
                languageKey.open();
                languageKey.hiFocus();

            });
        } else {
            hiWebOsFrame.createPage('LanguageKeyListDialogId', null, null, null, function (languageKey) {

                hiWebOsFrame.languageKey = languageKey;
                languageKey.open();
                languageKey.hiFocus();

            });
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function OpenSubtKeyPage(oriPage) {
    try {
        if(arguments.length == 0){
            debugG("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('SUBTKeyListDialogId', null, oriPage, null, function (subtKey) {

                debugPrint('1.createpage:'+lancount);
                lancount++;
                hiWebOsFrame.subtKey = subtKey;
                subtKey.open();
                subtKey.hiFocus();

            });
        } else {
            hiWebOsFrame.createPage('SUBTKeyListDialogId', null, null, null, function (subtKey) {

                hiWebOsFrame.subtKey = subtKey;
                subtKey.open();
                subtKey.hiFocus();

            });
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function LauncherquickopenSetting(parenindex,index,origin)
{
    hiWebOsFrame.startLoading();
    hiWebOsFrame.lockAllKeys();

    var priority = (!!origin && origin.priority >= 1000) ? (origin.priority + 2) : 1000;

    hiWebOsFrame.createPage('setting_sys_qs_page', null, origin, priority, function(a) {
        hiWebOsFrame.settingsysqS = a;
        hiWebOsFrame.createPage('setting_fircls_page', null, origin, priority, function(b) {
            hiWebOsFrame.settingsFirst = b;
            SettingFirInit();
            if(SettingCheckItemisDisable(parenindex,index)==1||index==100)
            {
                PageDataFirstCls.operateData.curselect=parenindex;
                PageDataFirstCls.operateData.subselect=0;
                //RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
                $("#setting_fircls_page").css("visibility","hidden");
                hiWebOsFrame.settingsFirst.open();
                hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
                hiWebOsFrame.settingsysqS.close();
                hiWebOsFrame.endLoading();
                hiWebOsFrame.unLockAllKeys();
                hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
                    hiWebOsFrame.settingsyspwderror=page;
                    PageDateSettingSysPwderror.operateData.datatype=4;
                    page.rewriteDataOnly();
                    $("#setting_fircls_page").css("visibility","visible");
                    page.open();
                    page.hiFocus();

                });
                setTimeout(quicksetindicatorclose,2 * 1000);
            }
            else
            {
            PageDataFirstCls.operateData.curselect=parenindex;
            PageDataFirstCls.operateData.subselect=index;
            hiWebOsFrame.settingsFirst.rewriteDataOnly();
            $("#setting_fircls_page").css("visibility","hidden");
            hiWebOsFrame.settingsFirst.open();
            eval(' hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul_setting_first_ul2_sys' + parenindex + '")');
            hiWebOsFrame.endLoading();
            hiWebOsFrame.unLockAllKeys();
            switch(parenindex) {
                case 2://channel
                    settingFirstOpenChannelItem(index);
                    break;
                case 3://network
                    switch(index) {
                        case 0:
                            $("#setting_fircls_page").css("visibility","visible");
                            settingNetSetCreateNextPage();
                            break;
                        default:
                            break;
                    }
                    break;
                case 4://system
                    switch (index) {
                        case SYSTEM_TIME://time
                        {
                            hiWebOsFrame.createPage('setting_sys_time_page', null, hiWebOsFrame.settingsFirst, null, function (timepage) {
                                hiWebOsFrame.settingssystime = timepage;
                                hiWebOsFrame.createPage('setting_sys_autotime_page', null, hiWebOsFrame.settingssystime, null, function (autotime) {
                                    hiWebOsFrame.settingssysautotime = autotime;
                                    autotime.close();
                                    hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                                        hiWebOsFrame.settingsysinput1 = autotime;
                                        PageDateSettingSysinput1.operateData.curparent=2;
                                        hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                                        SettingTimePinCheck();


                                    });
                                   // SettingFirUpdateHelpinfo(PageDataSettingSysTime.operateData.helplist[0].title,PageDataSettingSysTime.operateData.helplist[0].content)


                                });

                            });
                            break;
                        }
                        default:
                            break;
                    }
                    break;
                default :
                    break;

            }
            }


        });
    });
}


function quickopendisclaimer(callback,origin){

    try
    {
    hiWebOsFrame.startLoading();
    hiWebOsFrame.lockAllKeys();
    var parenindex=5;
    var index=ABOUT_EULA;
    var priority = (!!origin && origin.priority >= 1000) ? (origin.priority + 2) : 1000;

    hiWebOsFrame.createPage('setting_sys_qs_page', null, origin, priority, function(a) {
        hiWebOsFrame.settingsysqS = a;
        hiWebOsFrame.createPage('setting_fircls_page', null, origin, priority, function(b) {
            hiWebOsFrame.settingsFirst = b;
            SettingFirInit();
                PageDataFirstCls.operateData.curselect=parenindex;
                PageDataFirstCls.operateData.subselect=index;
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
                $("#setting_fircls_page").css("visibility","hidden");
                hiWebOsFrame.settingsFirst.open();
                eval(' hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul_setting_first_ul2_sys' + parenindex + '")');
                hiWebOsFrame.endLoading();
                hiWebOsFrame.unLockAllKeys();
                switch(parenindex) {

                    case 5://about
                        switch (index) {
                            case ABOUT_EULA://disclaimer
                            {
                                hiWebOsFrame.createPage('setting_sys_dis_fir_page', null, hiWebOsFrame.settingsFirst, null, function (disclaimer) {
                                    hiWebOsFrame.settingssysdisfir = disclaimer;
                                    PageDateSettingSysDisfir.operateData.callback=callback;
                                    PageDateSettingSysDisfir.operateData.disflag=true;
                                    $("#setting_fircls_page").css("visibility","visible");
                                    disclaimer.open();
                                    disclaimer.hiFocus();

                                });
                                break;
                            }

                        }
                        break;

                    default :
                        break;

                }



        });
    });
    }catch (e)
    {
        debugE(e.message)
    }

}
function settingFirstOpenChannelItem(index){
    var currArea = hiWebOsFrame.getCurrentArea();
    debugPrint("settingFirstOpenChannelItem:index="+index+",currArea="+currArea,DebugLevel.ALWAYS);
    switch (currArea){
        case "EU":
            switch (index) {
                case 0://automatic scan
                    $("#setting_fircls_page").css("visibility","visible");
                    settingChSetCreateChannelScanPage();
                    break;
                case 3://ChannelEdit 挪到此处
                    $("#setting_fircls_page").css("visibility","visible");
                    settingChSetCreateChannelEditPage();
                    break;
                default :
                    break;
            }
            break;
        default ://EM,SA
            switch (index) {
                case 1://automatic scan
                    $("#setting_fircls_page").css("visibility","visible");
                    settingChSetCreateChannelScanPage();
                    break;
                case 4://ChannelEdit 挪到此处
                    $("#setting_fircls_page").css("visibility","visible");
                    settingChSetCreateChannelEditPage();
                    break;
                default :
                    break;
            }
            break;
    }

}

function SettingfirstOpen(parenindex,origin)
{
    try
    {
    hiWebOsFrame.startLoading();
    hiWebOsFrame.createPage('setting_sys_qs_page', null, origin, 1000, function(a) {
        hiWebOsFrame.settingsysqS = a;
        hiWebOsFrame.createPage('setting_fircls_page', null, origin, 1000, function(b) {
            hiWebOsFrame.settingsFirst = b;
            SettingFirInit();
            SettingFirResetSelectIndex();
           // SettingFirUpdateHelpinfo("","");
            var index=_getIndex(PageDataFirstCls.settings_first_ul.disableItem,parenindex);
            if(index>=0)
            {
                PageDataFirstCls.operateData.curselect=parenindex;
                PageDataFirstCls.operateData.subselect=0;
                //RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
                $("#setting_fircls_page").css("visibility","hidden");
                hiWebOsFrame.settingsFirst.open();
                hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
                hiWebOsFrame.settingsysqS.close();
                hiWebOsFrame.endLoading();
                hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
                    hiWebOsFrame.settingsyspwderror=page;
                    PageDateSettingSysPwderror.operateData.datatype=4;
                    page.rewriteDataOnly();
                    $("#setting_fircls_page").css("visibility","visible");
                    page.open();
                    page.hiFocus();

                });
                setTimeout(quicksetindicatorclose,2 * 1000);
            }
            else{
            PageDataFirstCls.operateData.curselect=parenindex;
            hiWebOsFrame.settingsFirst.rewriteDataOnly();
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.endLoading();
            hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
            }
        });
    });
    }catch (e)
    {
        debugE(e.message)
        hiWebOsFrame.endLoading();
        origin.hiFocus();
    }

}


function openSubtitleSetting(origin)
{
try{
    hiWebOsFrame.startLoading();
   // hiWebOsFrame.lockAllKeys();
    hiWebOsFrame.createPage('setting_sys_qs_page', null, origin, 1000, function(a) {
        hiWebOsFrame.settingsysqS = a;
        hiWebOsFrame.createPage('setting_fircls_page', null, origin, 1000, function(b) {
            hiWebOsFrame.settingsFirst = b;
            SettingFirInit();
            if(SettingCheckItemisDisable(4,3)==1)
            {
                PageDataFirstCls.operateData.curselect=4;
                PageDataFirstCls.operateData.subselect=3;
                RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
                $("#setting_fircls_page").css("visibility","hidden");
                hiWebOsFrame.settingsFirst.open();
                hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
                hiWebOsFrame.settingsysqS.close();
                hiWebOsFrame.endLoading();
              //  hiWebOsFrame.unLockAllKeys();
                hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
                    hiWebOsFrame.settingsyspwderror=page;
                    PageDateSettingSysPwderror.operateData.datatype=4;
                    page.rewriteDataOnly();
                    $("#setting_fircls_page").css("visibility","visible");
                    page.open();
                    page.hiFocus();

                });
                setTimeout(quicksetindicatorclose,2 * 1000);
            }
            else
            {

                PageDataFirstCls.operateData.curselect=4;
                PageDataFirstCls.operateData.subselect=3;
                RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
                $("#setting_fircls_page").css("visibility","hidden");
                hiWebOsFrame.settingsFirst.open();
                hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul_setting_first_ul2_sys4");
                hiWebOsFrame.createPage('setting_sys_lang1_page', null, hiWebOsFrame.settingsFirst, null, function (lang1page)
                {
                    hiWebOsFrame.settingslang1 = lang1page;
                    hiWebOsFrame.createPage('setting_sys_lang2_page', null, hiWebOsFrame.settingslang1, null, function (lang2page) {
                        hiWebOsFrame.settingslang2 = lang2page;
                        lang2page.close();
                        SettingLangUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[3].content);//SettingFirUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[1].title,PageDataSettingSysLang.operateData.helplist[1].content);
                        $("#setting_fircls_page").css("visibility","visible");
                        hiWebOsFrame.settingslang1.open();
                        hiWebOsFrame.settingslang1.hiFocus("setting_sys_lang_fir_subtitle3");
                    });
                    hiWebOsFrame.endLoading();
                  //  hiWebOsFrame.unLockAllKeys();

                });
            }

        });
      });


    }catch (e)
    {
        debugE(e.message);
        hiWebOsFrame.unLockAllKeys();
        origin.open();
        origin.hiFocus();

    }
}
function SettingGetApplist()
{
    try {
        var applist=[];
        var ret = readFileFromNative("launcher/settingappinfo.txt", 1);
        debugPrint("read applist fie ret  " + ret + typeof ret);
        if(null !== ret)
        {
            for(var i=0;i<ret.length;i++)
            {
                ret[i]=ret[i].replace(/\s+/g,"");
                if(ret[i].toLowerCase()=="netflix"||ret[i].toLowerCase()=="vudu")
                {
                    applist.push(ret[i])
                }
            }
        }
        else
        {
            var ret = readFileFromNative("launcher/settingappinfo.txt", 2);
            if(null != ret)
            {
                for(var i=0;i<ret.length;i++)
                {
                    ret[i]=ret[i].replace(/\s+/g,"");
                    if(ret[i].toLowerCase()=="netflix"||ret[i].toLowerCase()=="vudu")
                    {
                        applist.push(ret[i])
                    }
                }
            }
        }
        debugPrint("get the applist "+ JSON.stringify(applist));
        return applist;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}


/**********************source 写文件函数*******************************/
function ReadInputRecent(id){
    var ret = readFileFromNative("hisenseUI/recentinput.txt", 1);
    debugPrint("read recent fie ret  " + JSON.stringify(ret));
    var rencentInput={};
    rencentInput.source =[];
    if(null != ret) {
        rencentInput = ret;
        if(rencentInput.source.length >=7){
            rencentInput.source.splice(6,rencentInput.source.length-6);
        }
        if(rencentInput.source.indexOf(id)>-1)rencentInput.source.splice(rencentInput.source.indexOf(id),1);
    }
    rencentInput.source.splice(0,0,id);
    debugPrint('recentInput:'+JSON.stringify(rencentInput));
    writeFileToNative("hisenseUI/recentinput.txt", JSON.stringify(rencentInput), 1);
}
/**********************HotelMode keyboradLock函数*******************************/
var HOTElKEYBboardLock;
function HotelModeKeyboardLock(){
    try {
        var keyboradlock = model.hotel.getKeyboardLock();
        var hotelmode = model.hotel.getHotelMode();
        if(!!hotelmode){
            if(!!keyboradlock){
                debugG('HotelModeKeyboardLock(), keypad on tv no use');
                HOTElKEYBboardLock = true;
                return HOTElKEYBboardLock;
            }
            else{
                HOTElKEYBboardLock = false;
                return HOTElKEYBboardLock;
            }
        }
        else{
            HOTElKEYBboardLock = false;
            return HOTElKEYBboardLock;
        }
    } catch (ex) {
        debugE(ex.message);
    }
}
function RefreshSomeFirPageDisableItem() {
    try {

        debugG('RefreshSomeFirPageDisableItem');

        var hotelMode = tv ? model.hotel.getHotelMode() : 0;
        debugG('model.hotel.getHotelMode(): ' + hotelMode);

        var sumMenuLock = tv ? model.hotel.getSubmenuLock() : 0;
        debugG('model.hotel.getSubmenuLock(): ' + sumMenuLock);

        if (1 == hotelMode && 1 == sumMenuLock) {
            debugG('enable channel network system about');
            PageDataFirstCls.settings_first_ul.disableItem = [2, 3, 4, 5];
        } else {
            debugG('disable channel network system about');
            PageDataFirstCls.settings_first_ul.disableItem = [];
        }


        var isMenuStartOnMedia = false;
        //可能少判断了情况
        if (!!hiWebOsFrame.settingsysqS && !!hiWebOsFrame.settingsysqS.origin &&
            hiWebOsFrame.settingsysqS.origin.id == 'app_lau_browser' &&
            CmdURLType.LAU_BROWSER_HIMEDIA == appBrowser.getCurrentCommandType()) {

            debugG('Setting is startting on himdia, disable aspect ratio');
            isMenuStartOnMedia = true;
        }

        var curSourceVideoFormat = tv ? model.tvservice.getCurrentSourceVideoFormat() : "1,1,1,1";
        debugPrint("model.tvservice.getCurrentSourceVideoFormat():" + JSON.stringify(curSourceVideoFormat));
//        var RGBSourceState = false;
        var source4K = false;
        if (curSourceVideoFormat.length > 0) {
            var array = curSourceVideoFormat.split(",");
            var zoomWidth = 0;
            var zoomHeight = 0;
            if (array.length > 1) {
                debugG("zoomWidth and zoomHeight:" + array[0] + array[1]);
                zoomWidth = array[0];
                zoomHeight = array[1];
//                RGBSourceState = (zoomWidth == 1280 && zoomHeight == 1024 ||
//                    zoomWidth == 640 && zoomHeight == 480 ||
//                    zoomWidth == 800 && zoomHeight == 600 ||
//                    zoomWidth == 1024 && zoomHeight == 768);    //rgb信号，memc不可调

                source4K = zoomWidth >= 3800;
            }
//            debugG('RGBSourceState: ' + RGBSourceState);
            debugG('source4K: ' + source4K);
        }

        var cur3DMode = 0;
        if (!!PICTURE_3D_SURPPORT) {
            //此处不影响fir页面删除3D menu
            cur3DMode = tv ? model.video.getEnum3dMode() : 0;
            debugG('model.video.getEnum3dMode(): ' + cur3DMode);
        }

        //3d mode时disable backlight, MEMC, AspectRatio
        if (0 != cur3DMode) {
            debugG('3d mode, disable PicBacklight');
            PageDataFirstCls.operateData.settingdisablelist[0].push(FirPageSndIdx.PicBacklight)
        } else {
            while (-1 != $.inArray(FirPageSndIdx.PicBacklight, PageDataFirstCls.operateData.settingdisablelist[0])) {    //存在,则删除
                PageDataFirstCls.operateData.settingdisablelist[0].splice($.inArray(FirPageSndIdx.PicBacklight, PageDataFirstCls.operateData.settingdisablelist[0]), 1);
            }
        }

        var isAppOn = tv ? checkIsAppOn() : 0;
        DBG_INFO("checkIsAppOn(): " + isAppOn);

//        DBG_INFO("checkHBBTVKeySet(): "+checkHBBTVKeySet());

        if (isAppOn || checkHBBTVKeySet() || 1 == hotelMode && 1 == sumMenuLock || isMenuStartOnMedia == true || true == source4K || 0 != cur3DMode) {
            debugG("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            debugG('disable aspect ratio');
            PageDataFirstCls.operateData.settingdisablelist[0].push(FirPageSndIdx.PicAspectRatio)
        } else {
            debugG('no need disable pic aspect ratio');
            while (-1 != $.inArray(FirPageSndIdx.PicAspectRatio, PageDataFirstCls.operateData.settingdisablelist[0])) {    //存在,则删除
                PageDataFirstCls.operateData.settingdisablelist[0].splice($.inArray(FirPageSndIdx.PicAspectRatio, PageDataFirstCls.operateData.settingdisablelist[0]), 1);
            }
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function HotelModeSearchLock() {
    try {
        debugPrint("-------------->channelListDisable");
        var hotelmode = model.hotel.getHotelMode();
        if (!!hotelmode) {
            var searchLock = model.hotel.getSearchLock();
            try {
                if (!!searchLock) {
                    var channelListDisable = PageDataFirstCls.operateData.settingdisablelist[2];
                    debugPrint("-------------->channelListDisable");
                    debugPrint("channelListDisable:" + JSON.stringify(channelListDisable));
                    if ($.inArray(1, channelListDisable) == -1) {

                        channelListDisable.push(1);
                    }
                    if ($.inArray(2, channelListDisable) == -1) {

                        channelListDisable.push(2);
                    }
                    if ($.inArray(3, channelListDisable) == -1) {

                        channelListDisable.push(3);
                    }


                }
            }
            catch (ex) {
                debugE(ex);
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function getCurDisclaimerfile(boeCountry) {
    var curBrand = initBrand;
    var curCountry = (boeCountry == undefined)?model.basicSetting.getTvsetLocation():boeCountry;
    debugPrint("curCountry " + curCountry);
    var brandfile = " ";
   if (hiWebOsFrame.getCurrentArea() == "EU") {
        if (curBrand != "his" && curBrand != "hisense") {
            brandfile = "Disclaimer_eu_oem_eng.html"
        }
        else {
            switch (curCountry)
            {
                case "FRA":
                {
                    brandfile="Disclaimer_eu_fre.html"
                    break;
                }
                case "DEU":
                {
                    brandfile="Disclaimer_eu_ger.html"
                    break;
                }
                case "CZE":
                {
                    brandfile="Disclaimer_eu_cze.html"
                    break;
                }
                case "ITA":
                {
                    brandfile="Disclaimer_eu_ita.html"
                    break;
                }
                case "ESP":
                {
                    brandfile="Disclaimer_eu_spa.html"
                    break;
                }
                case "LVA":
                {
                    brandfile="Disclaimer_eu_lav.html"
                    break;
                }
                case "LTU":
                {
                    brandfile="Disclaimer_eu_lit.html"
                    break;
                }
                case "EST":
                {
                    brandfile="Disclaimer_eu_est.html"
                    break;
                }
                case "PRT":
                {
                    brandfile="Disclaimer_eu_por.html"
                    break;
                }
                case "SVN":
                {
                    brandfile="Disclaimer_eu_svn.html"
                    break;
                }
                case "GRC":
                {
                    brandfile="Disclaimer_eu_grc.html"
                    break;
                }
                case "NLD":
                {
                    brandfile="Disclaimer_eu_nld.html"
                    break;
                }
                case "HRV":
                {
                    brandfile="Disclaimer_eu_hrv.html"
                    break;
                }
                case "AUT":
                {
                    brandfile="Disclaimer_eu_aut.html"
                    break;
                }
                case "RUS":
                {
                    brandfile="Disclaimer_eu_rus.html"
                    break;
                }
                case "GBR":
                {
                    brandfile="Disclaimer_eu_gbr.html"
                    break;
                }
                case "SVK":
                {
                    brandfile="Disclaimer_eu_svk.html"
                    break;
                }
                default :
                {
                    brandfile="Disclaimer_eu_eng.html"
                    break;
                }
            }
        }
    }

    return brandfile;
}
