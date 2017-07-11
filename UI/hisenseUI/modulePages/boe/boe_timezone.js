/**
 * Created by xuehongfeng on 14-11-10.
 */

function getboeTimezonePageData(opt){
    opt.CaE = [
        {
            "id": "boetimezoneGridUl",//在页面中的按钮或者组件容器Id
            "description": "用于显示语言列表",
            "CaEType": "GridUl",
            "disable": false,
            "classes": {
                "normal": "boeTimeZoneGridUlLi_2_Normal", "focus": "boeTimeZoneGridUlLi_2_Focus","dataSelected":"boeTimeZoneGridUlLi_2_Normal","disable":"boeGridUlLi_2_Disable"
            },
            "nav":{
                "leftTo":"timezonePageLeftArrowBtn","rightTo":"timezonePageRightArrowBtn","enterTo":""
            },
            "handler": {
                "aftEnterHandler": "boeSetTimeZone","befUpHandler": "timezoneGridulUpdateUpScroolbar","aftDownHandler": "timezoneGridulUpdateScroolbar","befLeftHandler": "boeTimeZoneToPreviousPageAdjust","befRightHandler": "boeTimeZoneToNextPageAdjust"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "timezoneSelectImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/circle_setted.png",
                        "closeImg":""
                    },
                    "classes":{
                        "normal":"timezoneSelectImg"
                    }
                },
                {
                    "id": "timezoneName",
                    "description": "城市名称",
                    "CaEType": "span"
                },
                {
                    id: 'timezoneName_marquee',
                    CaEType: 'span',
                    enableHtml: true
                }
            ],
            "GridUlConfig": {
                "GridUlDataItem": ["timezoneName","timezoneName_marquee","timezoneSelectImg" ],
                "LineNum":1,
                //"PageSize":4,
                "FlipType":'VER',
                "ArrowFlag":true
            }
        },
        {
            "id":"timezonePageLeftArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeLeftArrowBtnNormal"
            },
        },
        {
            "id":"timezonePageRightArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeRightArrowBtnNormal"
            },
        }
    ];
    boeTimezonePageInit();
    return boeTimezonePageData;
}
var boeTimezonePageData = {
    "boetimezoneGridUl": {

        "Data":[
        ],

        "SelectedIndex":3,
        "DataSelectedIndex":3
    },
    "operateData":{
        "supportzonelist":[],
        "currtimezoneIdx":0,
        "timezonelist":[],
        "timezonelistcode":[0,1,2,3,3.5,4,4.5,5,5.5,5.75,6,6.5,7,8,9,9.5,10,11,
        12,12.75,13,-12,-11,-10,-9,-8,-7,-6,-5,-4.5,-4,-3.5,-3,-2,-1],
        "Defsupportzonelist":[0]
    },
    "langData":{
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
        "Brasilia Time -2 (UTC-5)":[]
    },
    rewrite:"boeRefreshTimezonePage"
}
function boeTimeZoneToPreviousPageAdjust(){
    boeTimezoneToCtyPage();
}
function boeTimeZoneToNextPageAdjust(){
    boeTimezoneToNextPage();
}
function boeTimezonePageInit(){
    try{

        var data = boeTimezonePageData;
        //var timezoneMapListTemp=[];
        data.operateData.supportzonelist = get_timezone_map_list();

        if(data.boetimezoneGridUl.Data.length > data.operateData.timezonelist.length){
            data.boetimezoneGridUl.Data.splice(data.operateData.timezonelist.length);
        }

    else if(data.boetimezoneGridUl.Data.length < data.operateData.timezonelist.length){
            while(data.boetimezoneGridUl.Data.length < data.operateData.timezonelist.length){
                var itemData = {
                    "timezoneName":{"Data":"GMT+0"},
                    "timezoneName_marquee":{"Data":"GMT+0"},
                    "timezoneSelectImg":{"Data": false}
                };
                data.boetimezoneGridUl.Data.push(itemData);
            }
        }
        for(var idx = 0;idx < data.operateData.timezonelist.length;idx++){
            if(idx == data.operateData.currtimezoneIdx){
                data.boetimezoneGridUl.Data[idx].timezoneSelectImg.Data = true;
            }else{
                data.boetimezoneGridUl.Data[idx].timezoneSelectImg.Data = false;
            }
            data.boetimezoneGridUl.Data[idx].timezoneName.Data = data.operateData.timezonelist[idx];
            debugPrint("[xuehongfeng]"+data.boetimezoneGridUl.Data[idx].timezoneName.Data.length,DebugLevel.ALWAYS);
            if(tv == true) {
                if(getCurrVeraForWizard()=='EU') {
                    var temp = readFileFromNative("hisenseUI/currentcty.txt", 1);
                }
                else {
                    var temp = model.basicSetting.getTvsetLocation();
                }
            }
            else
            {
                var countryMapListTemp = getSettingCountryMapList();
                if (!!localStorage.getItem("currCountryIdx")) {
                    var currCountryIdx = parseInt(localStorage.getItem("currCountryIdx"));
                    temp = countryMapListTemp[currCountryIdx].code;
                }
                else {
                    var currCountryIdx = 0;
                    temp = countryMapListTemp[currCountryIdx].code;
                }
            }
            if(temp == "RUS" || temp == "BRA")
            {
                var v = data.operateData.timezonelist[idx];
                try {
                    var realText1 = langPackages[v][hiWebOsFrame.getCurrentLanguageIndex()];
                }
                catch (ex)
                {
                    debugPrint("[xuehongfeng]" + realText1, DebugLevel.ALWAYS);
                    var realText1 = "";
                }
                debugPrint("[xuehongfeng]" + realText1.length, DebugLevel.ALWAYS);

                    if (realText1.length > 12) {
                        data.boetimezoneGridUl.Data[idx].timezoneName_marquee.Data = '<marquee>' + realText1 + '</marquee>';
                    }
                    else {
                        data.boetimezoneGridUl.Data[idx].timezoneName_marquee.Data = data.operateData.timezonelist[idx];
                    }

            }
            else {
                if (data.boetimezoneGridUl.Data[idx].timezoneName.Data.length > 12) {
                    data.boetimezoneGridUl.Data[idx].timezoneName_marquee.Data = '<marquee>' + data.operateData.timezonelist[idx] + '</marquee>';
                }
                else {
                    data.boetimezoneGridUl.Data[idx].timezoneName_marquee.Data = data.operateData.timezonelist[idx];
                }
            }
        }
        data.operateData.currtimezoneIdx = get_def_timezone_idx();
        debugPrint("[xuehongfeng]"+data.operateData.currtimezoneIdx,DebugLevel.ALWAYS);
        if(tv == true)
        {
            boeSetCurrZone(data.operateData.currtimezoneIdx);
        }
    }catch (ex){
        debugPrint("boeCtyPageInit"+ex.message);
    }
}
function boeSetCurrZone(currZoneIdx){
    var data = boeTimezonePageData;
    var timezonecode = data.operateData.timezonelistcode[data.operateData.supportzonelist[currZoneIdx]];
    if(tv == true)
    {
        if(getCurrVeraForWizard()=='EU')
        {
            var countrycode = readFileFromNative("hisenseUI/currentcty.txt", 1);
        }
        else {
            var countrycode = model.basicSetting.getTvsetLocation();
        }
        if (countrycode == "AUS") {
            model.timerfunc.setTimeZone(currZoneIdx);
        }
        else {
            timezonecode = timezonecode * 3600;
            if(getCurrVeraForWizard()=='EU')
            {
                var timezonecodeJson = {};
                timezonecodeJson.timezonecode = timezonecode;
                writeFileToNative("hisenseUI/currentzone.json", objToString(timezonecodeJson), 1);
            }
            else {
                model.timerfunc.setNewTimeZone(timezonecode);
            }
        }
    }
}
/*******************************************************************
 name:boeSetUseCountry
 description:设置使用语言
 input:currStep:
 output:
 return
 *******************************************************************/
function boeSetTimeZone(operateData,data){
    //hiWebOsFrame.boe_timezone_page_id.hiFocus('timezonePageRightArrowBtn');
    this.DataSelectedIndex = this.SelectedIndex;
    operateData.currtimezoneIdx = this.DataSelectedIndex;
    hiWebOsFrame.boe_timezone_page_id.rewriteDataOnly();
    boeSetCurrZone(operateData.currtimezoneIdx);
    setTimeout(boeTimezoneToNextPage,200);
    //boeTimezoneToNextPage();

}

function refresh_timezoneGridUI_bynumber(number)
{
    var margin_top = 0;
    if(number < 4) {
        if (number % 3 == 2) {
            margin_top = (550 - number * 109) / 2 + 25;
        }
        else {
            margin_top = (550 - number * 109) / 2 + 3;
        }
    }
    else if(number>4)
    {
        margin_top = 50;
    }
    $("#boetimezoneGridUl").css("margin-top",margin_top + 'px');

}
function get_timezone_map_list()
{
    try {
        var data = boeTimezonePageData;
        //var timezoneMapList_Temp;
        var countryCode;
        var cty_to_zone_maplist = getCountryToZoneMapList();
        if (tv == true) {
            if(getCurrVeraForWizard()=='EU')
            {
                countryCode = readFileFromNative("hisenseUI/currentcty.txt", 1);
            }
            else {
                countryCode = model.basicSetting.getTvsetLocation();
            }
        }
        else {
            var countryMapListTemp = getSettingCountryMapList();
            if (!!localStorage.getItem("currCountryIdx")) {
                var currCountryIdx = parseInt(localStorage.getItem("currCountryIdx"));
                countryCode = countryMapListTemp[currCountryIdx].code;
            }
            else {
                var currCountryIdx = 0;
                countryCode = countryMapListTemp[currCountryIdx].code;
            }
        }
        for (var idx = 0; idx < cty_to_zone_maplist.length; idx++) {
            debugPrint("[xuehongfeng]" + countryCode + idx + cty_to_zone_maplist[idx].code,DebugLevel.ALWAYS);
            if (countryCode == cty_to_zone_maplist[idx].code) {
                var timezoneMapList = cty_to_zone_maplist[idx].supportzonelist;
                data.operateData.timezonelist = cty_to_zone_maplist[idx].osdtimezonelist;
                var arr_length = data.operateData.timezonelist.length;
                if(arr_length > 2 && data.operateData.timezonelist[arr_length -1] == 'Auto')
                {
                    data.operateData.timezonelist.pop();
                    timezoneMapList.pop();
                }
                break;
            }
            else {
                var timezoneMapList = data.operateData.Defsupportzonelist;
            }

        }

        return timezoneMapList;
    }
    catch (ex)
    {
        debugPrint("timezone:"+ex.message);
    }
}

function get_def_timezone_idx()
{
    var data = boeTimezonePageData;
    var countryCode ;
    var cty_to_zone_maplist = getCountryToZoneMapList();
    if(getCurrVeraForWizard()=='EU')
    {
        var curzonecodeJson = readFileFromNative("hisenseUI/currentzone.json", 1);
        var curzonecode = curzonecodeJson.timezonecode / 3600;
    }
    else {
        var curzonecode = model.timerfunc.getNewTimeZone() / 3600;
    }

    //debugPrint("[xuehongfeng]"+model.timerfunc.getNewTimeZone(),DebugLevel.ALWAYS);
    debugPrint("[xuehongfeng]"+curzonecode,DebugLevel.ALWAYS);
    var curzoneid=_getIndex(data.operateData.timezonelistcode,curzonecode);
    debugPrint("[xuehongfeng]"+curzoneid,DebugLevel.ALWAYS);

    if(tv == true)
    {
        if(getCurrVeraForWizard()=='EU')
        {
            countryCode = readFileFromNative("hisenseUI/currentcty.txt", 1);
        }
        else {
            countryCode = model.basicSetting.getTvsetLocation();
        }
    }
    else {
        var countryMapListTemp = getSettingCountryMapList();
        if(!!localStorage.getItem("currCountryIdx")) {
            var currCountryIdx = parseInt(localStorage.getItem("currCountryIdx"));
            countryCode = countryMapListTemp[currCountryIdx].code;
        }
        else {
            var currCountryIdx = 0;
            countryCode = countryMapListTemp[currCountryIdx].code;
        }
    }
   debugPrint("[xuehongfeng]" + countryCode);
    for(var idx = 0;idx<cty_to_zone_maplist.length;idx++)
    {
        //debugPrint("[xuehongfeng]" + countryCode + idx + cty_to_zone_maplist[idx].code);
        if(countryCode == cty_to_zone_maplist[idx].code)
        {
            var defzone=_getIndex(cty_to_zone_maplist[idx].supportzonelist,curzoneid);
            break;
        }
        else
        {
            var defzone= 0;
        }

    }
    if(countryCode == "AUS")
    {
        defzone = model.timerfunc.getTimeZone();
    }

    return defzone;
}
function timezoneGridulUpdateUpScroolbar()
{
    var top = 0;
    var height = 0;
    var page_num = 0;
    if(boeTimezonePageData.boetimezoneGridUl.Data.length % 4 == 0)
    {
        page_num = boeTimezonePageData.boetimezoneGridUl.Data.length / 4;
    }
    else
    {
        page_num = parseInt(boeTimezonePageData.boetimezoneGridUl.Data.length / 4 + 1);
    }

    //debugPrint("[xuehongfeng]page_nem" + page_num, DebugLevel.ALWAYS);
    height = 440 / page_num;

    top = (parseInt((this.SelectedIndex-1) / 4 ))*height;
    //debugPrint("[xuehongfeng]" + this.SelectedIndex, DebugLevel.ALWAYS);
    //debugPrint("[xuehongfeng]top" + top, DebugLevel.ALWAYS);
    $("#TimezoneScrollBar").css("top",top + 'px');
    if(page_num > 1)
    {

        var currpage = parseInt((this.SelectedIndex-1) / 4,10);
        var top_base = -(455 * currpage);
        $("#boetimezoneGridUl").css("top",top_base+"px");

    }
}
function timezoneGridulUpdateScroolbar()
{
    var top = 0;
    var height = 0;
    var page_num = 0;
    if(boeTimezonePageData.boetimezoneGridUl.Data.length % 4 == 0)
    {
        page_num = boeTimezonePageData.boetimezoneGridUl.Data.length / 4;
    }
    else
    {
        page_num = parseInt(boeTimezonePageData.boetimezoneGridUl.Data.length / 4 + 1);
    }

    //debugPrint("[xuehongfeng]page_nem" + page_num, DebugLevel.ALWAYS);
    height = 440 / page_num;
    debugPrint("[xuehongfeng]height" + height, DebugLevel.ALWAYS);
    top = (parseInt(this.SelectedIndex / 4 ))*height;
    //debugPrint("[xuehongfeng]" + this.SelectedIndex, DebugLevel.ALWAYS);
    //debugPrint("[xuehongfeng]top" + top, DebugLevel.ALWAYS);
    $("#TimezoneScrollBar").css("top",top + 'px');
    if(page_num > 1)
    {
        var currpage = parseInt(this.SelectedIndex / 4,10);

        var top_base = -(455 * currpage);
        $("#boetimezoneGridUl").css("top",top_base+"px");

    }
}
/*******************************************************************
 name:boeRefreshCountryPage
 description:刷新语言页
 input:
 output:
 return
 *******************************************************************/
function boeRefreshTimezonePage(data,languageIdx){

    for(var idx = 0;idx < data.boetimezoneGridUl.Data.length;idx++){
        if(idx == data.operateData.currtimezoneIdx){
            data.boetimezoneGridUl.Data[idx].timezoneSelectImg.Data = true;
        }else{
            data.boetimezoneGridUl.Data[idx].timezoneSelectImg.Data = false;
        }

    }
    refresh_timezoneGridUI_bynumber(data.operateData.supportzonelist.length);
    data.boetimezoneGridUl.DataSelectedIndex = data.operateData.currtimezoneIdx;
    data.boetimezoneGridUl.SelectedIndex = data.operateData.currtimezoneIdx;

    debugPrint("Current country is: " + hiWebOsFrame.getCurrentCountry());
    var  a = hiWebOsFrame.getCurrentCountry();
    if ("Australia" == hiWebOsFrame.getCurrentCountry()) {
        for (var i=0; i < data.boetimezoneGridUl.Data.length; i++) {
            data.boetimezoneGridUl.Data[i].timezoneName.Data += " ";    //澳大利亚时区加空格避免翻译
            data.boetimezoneGridUl.Data[i].timezoneName_marquee.Data += " ";
        }
    }
//    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
//        $("#zoneSelectImg").css({"margin-left":"400px"});
//    }else{
//        $("#zoneSelectImg").css({"margin-right":"400px"});
//    }

    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
        $(".timezoneSelectImg").css({"margin-left":"400px"});
    }else{
        $(".timezoneSelectImg").css({"margin-right":"400px"});
    }
    //data.boetimezoneGridUl.Data[data.boetimezoneGridUl.DataSelectedIndex].timezoneSelectImg.Data = true;
}

/*******************************************************************
 name:由国家设置页返回语言设置页
 description:
 input:
 output:
 return
 *******************************************************************/
function boeTimezoneToCtyPage(){
        hiWebOsFrame.createPage('boe_cty_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_cty_page_id = b;
            hiWebOsFrame.boe_timezone_page_id.close();
            hiWebOsFrame.boe_timezone_page_id.destroy();
            b.hiFocus();
            b.open();
        })


}

/*******************************************************************
 name:由语言设置页进入国家设置页
 description:
 input:
 output:
 return
 *******************************************************************/
function boeTimezoneToNextPage(){

        hiWebOsFrame.boe_timezone_page_id.destroy();
        hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_disclaimer_page_id = b;
        b.hiFocus();
        b.open();

    });


}

function boeTimezonePageOnOpen(){
    boeChangeCurrSep(3);
    //debugPrint("[xuehongfeng]length" + boeTimezonePageData.boetimezoneGridUl.Data.length, DebugLevel.ALWAYS);
    if(boeTimezonePageData.boetimezoneGridUl.Data.length % 4 == 0)
    {
        var page_num = boeTimezonePageData.boetimezoneGridUl.Data.length / 4;
    }
    else
    {
        var page_num = parseInt(boeTimezonePageData.boetimezoneGridUl.Data.length / 4 + 1);
    }
    //debugPrint("[xuehongfeng]page_nem" + page_num, DebugLevel.ALWAYS);
    var height = 440 / page_num;
    //debugPrint("[xuehongfeng]height" + height, DebugLevel.ALWAYS);
    if(parseInt(page_num)>1)
    {

        $("#TimezoneScrollBar").css("height",height + 'px');
        $("#TimezoneScrollBar").css("visibility","visible");
    }
    else
    {
        $("#TimezoneScrollBar").css("visibility","hidden");
    }
    var curr_page = parseInt(boeTimezonePageData.operateData.currtimezoneIdx / 4);
    var top = curr_page * height;
    $("#TimezoneScrollBar").css("top",top + 'px');
    if(page_num > 1)
    {

        var currpage = parseInt(boeTimezonePageData.operateData.currtimezoneIdx / 4,10);
        var top_base = -(455 * currpage);
        $("#boetimezoneGridUl").css("top",top_base+"px");
    }
    this.page.rewriteDataOnly();
    //hiWebOsFrame.boe_timezone_page_id.hiFocus('boetimezoneGridUl');
}

function boeTimezonePageOnDestroy(){
    hiWebOsFrame.boe_timezone_page_id = null;
}

