/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSysLocationPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_list2_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_list2_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },
//                    "classes": {
//                        "normal": "listNormal", "focus": "listFocus", "disable": "listDisable", "selected": "listSelected"
//                    },
            "handler": {
                "befEnterHandler": "SettingSysList2EnHandler", "aftDownHandler": "SettingSysList2DownHandler",
                "aftUpHandler": "SettingSysList2UpHandler","aftEscHandler": "SettingSysLocationEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_list2_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_list2_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_list2_txt1", "setting_sys_list2_img1"]
               // "PageSize":5

            }
        }
    ];
    settinglocationinit()
    return PageDataSettingSysList2;
}
var PageDataSettingSysList2={

    "setting_sys_list2_title":{Data:"Location"},
    "setting_sys_list2_ul1": {Data:[
        {
            "setting_sys_list2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_list2_txt1": {Data:"c"}
        },
        {
            "setting_sys_list2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_list2_txt1": {Data:"d"}
        },
        {
            "setting_sys_list2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_list2_txt1": {Data:"e"}
        },
        {
            "setting_sys_list2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_list2_txt1": {Data:"f"}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        "titlelist":["Location","Select partition","Select space size"],
        "curtitle":0,
        "beginindex":0,
        "curselectindex":0,
        "curdatalist":["South Africa","Thailand","Vietnam ","Myanmar","Malaysia","Morocco","Nigeria","Libya","Ghana","Sierra Leone","Cote d'Ivoire","Angola","Benin","Republic of Liberia","Congo-Kinshasa","Cameroon","Zimbabwe","Congo-Brazzaville","Uganda","Tanzania","Mauritius","Sudan","Djibouti","Ethiopia","Kenya","Mozambique","Madagascar"],
        "countrycode":["ZAF",           "THA",   "VNM",      "MMR"   ,"MYS",    "MAR" ,    "NGA",      "LBY", "GHA",     "SLE"      ,"CIV",         "AGO"    ,"BEN",  "LBR",                "COD",             "CMR",    "ZWE",    "COG" ,             "UGA",   "TZA",    "MUS",      "SDN",    "DJI",  "ETH",        "KEN","MOZ",         "MDG"  ]
        // SettingSysPvrBtn1Enter

    },
    "langData":{
        "Location":["Location","1",""],
        "Russia_EU":[],
        "Uzbekistan_EU":[],
        "Kirghizstan_EU":[],
        "Tajikistan_EU":[],
        "Kazakhstan_EU":[],
        "Others":[],
        "Czech Republic":[],
        "Cote d'Ivoire":[],
        "UK":[],
        "Germany":[],
        "Italy":[],
        "Spain":[],
        "Portugal":[],
        "Switzerland":[],
        "Austria":[],
        "Norway":[],
        "Sweden":[],
        "Denmark":[],
        "Finland":[],
        "France":[],
        "Turkey":[],
        "Slovakia":[],
        "Poland":[],
        "Hungary":[],
        "Bulgaria":[],
        "Egypt":[],
        "Algeria":[],
        "Iran":[],
        "Iraq":[],
        "Saudi Arabia":[],
        "UAE":[],
        "Kuwait":[],
        "Yemen":[],
        "Oman":[],
        "Qatar":[],
        "Jordan":[],
        "Dubai":[],
        "Russia":[],
        "Uzbekistan":[],
        "Kirghizstan":[],
        "Turkmenistan":[],
        "Kazakhstan":[],
        "Ukraine":[],
        "Azerbaijan":[],
        "Georgia":[],
        "Armenia":[],
        "Israel":[],
        "India":[],
        "Indonesia":[],
        "Thailand":[],
        "Vietnam":[],
        "Myanmar":[],
        "Malaysia":[],
        "Australia":[],
        "Taiwan":[],
        "Sri Lanka":[],
        "South Africa":[],
        "Morocco":[],
        "Nigeria":[],
        "Libya":[],
        "Ghana":[],
        "Sierra Leone":[],
        "Côte d'Ivoire":[],
        "Angola":[],
        "Benin":[],
        "Liberia":[],
        "Congo (DRC)":[],
        "Cameroon":[],
        "Zimbabwe":[],
        "Congo-Brazzaville":[],
        "Uganda":[],
        "Tanzania":[],
        "Mauritius":[],
        "Sudan":[],
        "Djibouti":[],
        "Ethiopia":[],
        "Kenya":[],
        "Mozambique":[],
        "Madagascar":[],
        "Philippines":[],
        "Argentina":[],
        "Brazil":[],
        "Panama":[],
        "Venezuela":[],
        "Uruguay":[],
        "Peru":[],
        "Ecuador":[],
        "Colombia":[],
        "Pakistan":[],
        "Mongolia":[],
        "Nepal":[],
        "Cambodia":[],
        "Somalia":[],
        "Moldova":[],
        "Dominica":[],
        "Bahamas":[],
        "Paraguay":[],
        "Cuba":[],
        "Chile":[],
        "Costa Rica":[],
        "Bolivia":[],
        "Maldives":[],
        "Fiji":[],
        "System Update":[],
        "Tajikistan":[],
        "Guinea":[],
        "Bengal":[],
        "Belarus":[],
        "Bahrain":[],
        "Lebanon":[],
        "Burundi":[],
        "Senegal":[],
        "Tunisia":[],
        "Syria":[]

//        "Select partition":["Select partition","1",""],
//        "Select memory size":["Select memory size","1",""],
//        "No limited":["No limited","1",""]
    },
    rewrite:function(pageData){
        var element={};
        pageData.setting_sys_list2_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
        pageData.setting_sys_list2_ul1.Data=[];
        $.each(pageData.operateData.curdatalist, function (k, v) {
                element.setting_sys_list2_img1={};
                element.setting_sys_list2_txt1={};
                if(pageData.operateData.curselectindex==k)
                {
                    element.setting_sys_list2_img1.Data="img/selectedBall.png";
                }
                else
                {
                    element.setting_sys_list2_img1.Data="img/unselectedBall.png";
                }

                var index= v.indexOf("_EU");
                if(index>0)
                {
                    v= v.replace("_EU","");
                }
                element.setting_sys_list2_txt1.Data= v;
                pageData.setting_sys_list2_ul1.Data.push(_cloneObj(element));
            })
           pageData.setting_sys_list2_ul1.SelectedIndex=pageData.operateData.curselectindex;
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
              $(".setting_sys_mt_ul1").css("float","left");
              $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
              $(".setting_sys_list1_srcobar_container").css("float","right")
              $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0")
            }
            else {
                $(".setting_sys_mt_ul1").css("float","right")
                $(".setting_sys_mt_ul1").css("margin","0 65px 0 0")
                $(".setting_sys_list1_srcobar_container").css("float","left")
                $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px ")
            }
    }

};
var g_disablekeyflag=0;
function list2openHandler()
{
    UpdatelocationScrollBar(this.data);
    if(PageDataSettingSysList2.setting_sys_list2_ul1.Data.length>5)
    {
        var index2=0;
        var index=this.page.getCaE("setting_sys_list2_ul1").SelectedIndex;
        debugPrint("index"+index);
        if(index>4)
        {
            index2=index-4;
        }
        $("#setting_sys_list2_srcollbar").css("top",parseInt(425/PageDataSettingSysList2.setting_sys_list2_ul1.Data.length)*index2);
        if(index<4)
        {
            $("#setting_sys_list2_ul1").css("top","0px");
            PageDataSettingSysList2.operateData.beginindex=0;
        }
        else
        {
            $("#setting_sys_list2_ul1").css("top","-"+95*(index-4)+"px");
            PageDataSettingSysList2.operateData.beginindex=index-4;
        }
    }
    else
    {
        PageDataSettingSysList2.operateData.beginindex=0;
        var temp=610-(5-PageDataSettingSysList2.setting_sys_list2_ul1.Data.length)*95
        $("#setting_sys_list2").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sys_list2").css("top",height+'px');
    }


}

function SettingSysLocationPageonDestroy()
{
    hiWebOsFrame.settingssyslist2=null;
}
function UpdatelocationScrollBar(pageData)
{
    var i=pageData.setting_sys_list2_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_list2_srcollbar").css("height",temp);
        $("#setting_sys_list2_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_list2_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=(425/i);

//    var temp=PageDataSettingSysList2.setting_sys_list2_ul1.Data.length;
//    var SelectedIndex=PageDataSettingSysList2.setting_sys_list2_ul1.SelectedIndex;
//    if(PageDataSettingSysList2.setting_sys_list2_ul1.Data.length>5 &&SelectedIndex < (temp-5))
//    {
//        var temp=SelectedIndex*PageDataSettingSysList2.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_list2_srcollbar").css("top",temp);
//    }
//    if( PageDataSettingSysList2.setting_sys_list2_ul1.Data.length>5&&this.SelectedIndex>4)
//    {
//
//        var temp=(this.SelectedIndex-4)*PageDataSettingSysList2.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_list2_srcollbar").css("top",temp);
//
//    }

}

//var onRecordingsSettingHdrVolumeUuidChaged=function(value)
//{
//    debugPrint("onRecordingsSettingHdrVolumeUuidChaged"+value);
//}
//var onRecordingsSettingTimeshiftVolumeUuidChaged=function(value)
//{
//    debugPrint("onRecordingsSettingTimeshiftVolumeUuidChaged"+value);
//}
//var onRecordingsSettingStorageSizeChaged=function(value)
//{
//    debugPrint("onRecordingsSettingStorageSizeChaged"+value);
//}
var tmpCurCountryCode = "";
function SettingSysList2EnHandler()
{
    try {   //add by ghl
        var ret = Hisense.File.read("hisenseUI/recentuse.txt", 1);
        DBG_INFO('Hisense.File.read("hisenseUI/recentuse.txt",1)' + typeof ret);
        if (typeof ret == "string" && ret != '') {
            var recentUse = JSON.parse(ret);
            for (var i = 0; i < recentUse.length; i++) {
                if (recentUse[i].name == 'EPG Mark') {
                    recentUse.splice(i, 1);
                    DBG_INFO('Delete EPG Mark from recentuse.txt');
                    if (hiWebOsFrame.settingsysqS) {
                        hiWebOsFrame.settingsysqS.operateData.recentuse = [];
                        cloneObj(recentUse, hiWebOsFrame.settingsysqS.operateData.recentuse);
                        DBG_INFO("reset QSPage recentuse data:" + JSON.stringify(hiWebOsFrame.settingsysqS.operateData.recentuse));
                    }
                    Hisense.File.write("hisenseUI/recentuse.txt", JSON.stringify(recentUse), 1);
                }
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    this.page.operateData.curselectindex = this.SelectedIndex;
    //todo
    hiWebOsFrame.lockAllKeys("setting");
    try {
        model.basicSetting.setTvsetLocation(PageDataSettingSysList2.operateData.countrycode[this.page.operateData.curselectindex]);
       //add by jiaguili 20160812
        if("EST"==PageDataSettingSysList2.operateData.countrycode[this.SelectedIndex]||
            "LVA"==PageDataSettingSysList2.operateData.countrycode[this.SelectedIndex]||
            "LTU"==PageDataSettingSysList2.operateData.countrycode[this.SelectedIndex])
        {
            try{
                model.basicSetting.setEnumDvbModeSubtitle(1);
            }catch (e)
            {
                debugE(e.message)
            }

        }//the enable the subtitle ,when change to "Estonia" 爱沙尼亚
        Updatesyscountryid(this.page.operateData.curselectindex);
        var tmpAfterSetCountryCode = model.basicSetting.getTvsetLocation();
        if (tmpCurCountryCode != tmpAfterSetCountryCode) {
            deleteNativeFile("launcher/settingappinfo.txt", 1);
        }
        PageDataFirstCls.operateData.curlocation = this.page.operateData.curdatalist[this.page.operateData.curselectindex];
        hiWebOsFrame.setCurrentCountry(PageDataFirstCls.operateData.curlocation);
        debugPrint(PageDataFirstCls.operateData.curlocation);
        debugPrint("set the location ");
        hiWebOsFrame.settingssyslist2.rewriteDataOnly();
        InitChnlAdvSetMenuItem();   // add by ghl
        if (hiWebOsFrame.getCurrentArea() == "SA") {
            debugE(" to refresh the applist ")
            PageDataFirstCls.operateData.curcountrycode = PageDataSettingSysList2.operateData.countrycode[this.page.operateData.curselectindex];
            GetAppStatus();
            try {
                //add by ghl, close ginga while country != arg && != bra
                if (PageDataFirstCls.operateData.curcountrycode.toLowerCase() != "arg"
                    && (PageDataFirstCls.operateData.curcountrycode.toLowerCase() != "bra")) {
                    debugG('country != arg && country != bra model.ginga.setI32Enable(0)')
                    model.ginga.setI32Enable(0);
                }
            } catch (ex) {
                debugE(ex.message);
            }
            hiWebOsFrame.settingsFirst.rewriteDataOnly();
        }
//    else if(hiWebOsFrame.getCurrentArea()=="EM")//泰国添加菜单。
//    {
//        GetUpdateMenu();
//      //  hiWebOsFrame.settingsFirst.rewriteDataOnly();
//    }
        SetRecentUse("Location", 4, SYSTEM_LOCATION);
        setTimeout(closelocationpage, 500);
        if (hiWebOsFrame.getCurrentArea() == "SA") {
            model.system.setReturnlocalappFlag(FlagShareInBrowser.SL2_TVPAI_STR_SYSTEM_RETURNLOCALAPP_FLAG_BASIC_SETTINGS_TVSET_LOCATION);
        }
    } catch (e) {
        debugPrint(e.message);
        hiWebOsFrame.unLockAllKeys("setting");
    }
}

function closelocationpage()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingssyslist2.close();
        debugPrint("open !!!!!!!!!!!!!!!!!!!");
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.settingsFirst.rewriteDataOnly();
        hiWebOsFrame.settingssyslist2.destroy();
        hiWebOsFrame.unLockAllKeys("setting");
    }
    else
    {
        hiWebOsFrame.settingssyslist2.close();
        hiWebOsFrame.settingssyslist2.destroy();
        hiWebOsFrame.unLockAllKeys("setting");
    }

}
function SettingSysLocationEscHandler()
{
    this.page.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
    hiWebOsFrame.settingssyslist2.destroy();

}
function SettingSysList2UpHandler()
{
//    var temp=PageDataSettingSysList2.setting_sys_list2_ul1.Data.length;
//    if(PageDataSettingSysList2.setting_sys_list2_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
//    {
//        var temp=this.SelectedIndex*PageDataSettingSysList2.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_list2_srcollbar").css("top",temp);
//
//    }
    if(PageDataSettingSysList2.operateData.beginindex>this.SelectedIndex)
    {
        PageDataSettingSysList2.operateData.beginindex=PageDataSettingSysList2.operateData.beginindex-1;
        debugPrint("beginindex"+PageDataSettingSysList2.operateData.beginindex);
        var temp=parseInt(PageDataSettingSysList2.operateData.beginindex*PageDataSettingSysList2.operateData.step);
        $("#setting_sys_list2_srcollbar").css("top",temp);
        $("#setting_sys_list2_ul1").css("top","-"+95*(PageDataSettingSysList2.operateData.beginindex)+"px");

    }
}
function SettingSysList2DownHandler()
{
//    if(this.SelectedIndex < PageDataSettingSysList2.setting_sys_list2_ul1.Data.length&&this.SelectedIndex>4)
//    {
//
//        var temp=(this.SelectedIndex-4)*PageDataSettingSysList2.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_list2_srcollbar").css("top",temp);
//
////    }
    if((PageDataSettingSysList2.operateData.beginindex+4)<this.SelectedIndex)
    {
        var temp=parseInt((this.SelectedIndex-4)*PageDataSettingSysList2.operateData.step);
        $("#setting_sys_list2_srcollbar").css("top",temp);
        $("#setting_sys_list2_ul1").css("top","-"+95*(this.SelectedIndex-4)+"px");
        PageDataSettingSysList2.operateData.beginindex=this.SelectedIndex-4;
        debugPrint("beginindex"+PageDataSettingSysList2.operateData.beginindex);
    }
}

function settinglocationinit()
{
    //todo to get the country list and selectindex
    var temp=getSettingCountryMapList();
    if(temp.length>0)
    {   PageDataSettingSysList2.operateData.curdatalist=[];
        PageDataSettingSysList2.operateData.countrycode=[];
        for(var i=0;i<temp.length;i++)
        {
            PageDataSettingSysList2.operateData.curdatalist.push(temp[i].name);
            PageDataSettingSysList2.operateData.countrycode.push(temp[i].code);        }
    }

    try
    {
        var temp=model.basicSetting.getTvsetLocation();
	    tmpCurCountryCode = temp;
       //temp=0;
      //  debugPrint("model is-----------------"+JSON.stringify(model.basicSetting))
        debugPrint("get the tv location is "+temp);
        var index=_getIndex(PageDataSettingSysList2.operateData.countrycode,temp);
        if(index>-1)
        {
            PageDataSettingSysList2.operateData.curselectindex=index;
        }
        else
        {
            debugPrint("the country index error");
            PageDataSettingSysList2.operateData.curselectindex=0;
        }

    }catch (e)
    {
        debugPrint(e.message);
    }

}
