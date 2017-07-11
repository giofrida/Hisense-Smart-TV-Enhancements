/**
 * Created by Administrator on 14-9-2.
 */
function getSettingSystimePoweronPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_time_poweron_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_time_poweron_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {

            "id": "setting_sys_time_ul2",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo": "setting_sys_time_poweron_btn1"},

            "classes": {
                "normal": "setting_sys_navibar3_normal", "focus": "setting_sys_navibar3_focus","dataSelected":"setting_sys_navibar3_dataselect"
            },
            "handler": {
                "aftDownHandler":"SettingSysPoweronfocus",
                "aftUpHandler":"SettingSysPoweronfocus",
                "aftEscHandler":"SettingSysTimePoweronEscHandler",
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
            "id": "setting_sys_time_poweron_time_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweron_time_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweron_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_time_poweron_btn2","upTo":"setting_sys_time_ul2"},
            "handler": {
                "aftDownHandler":"SettingSysPoweronfocus",
                "aftUpHandler":"SettingSysPoweronfocus",
                "aftEnterHandler": "SettingSysTimePoweronTimeBtnEnter",
                "befLeftHandler":"SettingSysTimePoweronEscHandler",
                "aftEscHandler": "SettingSysTimePoweronEscHandler"
            }
        },
        {
            "id": "setting_sys_time_poweron_weekly_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweron_weekly_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweron_btn2",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {

                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "","upTo":"setting_sys_time_poweron_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysPoweronfocus",
                "aftUpHandler":"SettingSysPoweronfocus",
                "aftEnterHandler": "SettingSysTimePoweronWeeklyBtnEnter",
                "befLeftHandler":"SettingSysTimePoweronEscHandler",
                "aftEscHandler": "SettingSysTimePoweronEscHandler"
            }
        }




    ];
    // SettingTimerinit();
    SettingTimePoweronInit();
    return PageDataSettingTimePoweron;
}
var PageDataSettingTimePoweron={

    "setting_sys_time_poweron_img1":{Data:"img/head_arrow.png"},
    "setting_sys_time_poweron_text1":{Data:"Power on Timer"},

    "setting_sys_time_ul2":{Data:[
        {"setting_sys_poweron_txt1":{Data:"Off"}},
        {"setting_sys_poweron_txt1":{Data:"Once"}},
        {"setting_sys_poweron_txt1":{Data:"Weekly"}}

    ],
        "disable":false,
        "DataSelectedIndex":0,
        "SelectedIndex":0
    },
    "setting_sys_time_poweron_time_str1":{Data:"Time:"},
    "setting_sys_time_poweron_time_str2":{Data:""},
    "setting_sys_time_poweron_btn1":{Data:"Adjust"},
    "setting_sys_time_poweron_weekly_str1":{Data:"Weekly"},
    "setting_sys_time_poweron_weekly_str2":{Data:""},
    "setting_sys_time_poweron_btn2":{Data:"Adjust"},


    "operateData": {
//        "curfocuslist":["timesync","onfre","ontime","offfre","offtime"],
//        "curfocus":"timesync",

        "helplist":[
            {
                "title":"Power on Timer",
                "content":""
            },
            {
                "title":"Time",
                "content":"Set the clock for the time you want the TV to turn On automatically."
            },
            {
                "title":"Weekly",
                "content":"Set the clock for the time you want the TV to turn On automatically."
            }
        ],
//        "curdate":"",
//        "curtime":"",
//        "cursyncmode":0,
//        "timeformatlist":["12-hours","24-hour"],
//        "AmPmflag":0,
        "curpoweronfre":0,
        "curselectlist":[0,1,1,1,1,1,1]

    },
    "langData":{
        "Power on Timer": [],
        "Off": [],
        "Once": [],
        "Weekly": [],
        "Date/Time": [],
        "Adjust":[],
        "Date:": [],
        "Time:": [],
        "Auto Synchronization": []


    },
    rewrite:function(pageData){
        var i;
        var _this = this,
            opeData = pageData.operateData;


        pageData.setting_sys_time_ul2.DataSelectedIndex=pageData.operateData.curpoweronfre;
        pageData.setting_sys_time_ul2.SelectedIndex=pageData.operateData.curpoweronfre;
        if( pageData.operateData.curpoweronfre==0)
        {
            pageData.setting_sys_time_poweron_btn1.disable=true;
            pageData.setting_sys_time_poweron_btn2.disable=true;
            $("#setting_sys_time_poweron_time_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweron_time_str2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweron_weekly_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweron_weekly_str2").css('color',"rgba(178,184,191,0.3)");
            pageData.setting_sys_time_poweron_time_str2.Data="";

        }
        else if(pageData.operateData.curpoweronfre==1)
        {
            pageData.setting_sys_time_poweron_btn1.disable=false;
            pageData.setting_sys_time_poweron_btn2.disable=true;
            $("#setting_sys_time_poweron_time_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_poweron_time_str2").css('color',"#b2b8bf");
            $("#setting_sys_time_poweron_weekly_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweron_weekly_str2").css('color',"rgba(178,184,191,0.3)");
            pageData.setting_sys_time_poweron_time_str2.Data=ChangeInttoTime(PageDataSettingSysTime.operateData.curpowerontime, PageDataSettingSysTime.operateData.curtimeforma);


        }
        else
        {
            pageData.setting_sys_time_poweron_btn1.disable=false;
            pageData.setting_sys_time_poweron_btn2.disable=false;
            $("#setting_sys_time_poweron_time_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_poweron_time_str2").css('color',"#b2b8bf");
            $("#setting_sys_time_poweron_weekly_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_poweron_weekly_str2").css('color',"#b2b8bf");
            pageData.setting_sys_time_poweron_time_str2.Data=ChangeInttoTime(PageDataSettingSysTime.operateData.curpowerontime, PageDataSettingSysTime.operateData.curtimeforma);
        }

        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_time_poweron_img1.Data="img/head_arrow.png";

            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")');
         //   $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_switch_name").css("float","left")
            $("#setting_sys_time_poweron_page").css("left","510px");
           // $("#setting_sys_timedata_control1").css("float","right")
        }
        else {
            pageData.setting_sys_time_poweron_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right")
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
       //     $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
            $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");
            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left")
            $(".setting_sys_switch_name").css("float","right")
            $("#setting_sys_time_poweron_page").css("left","328px");
           // $("#setting_sys_timedata_control1").css("float","left")
        }
    }

};
function SettingSysPoweronfocus()
{
    var index;
//    if(this.id=="setting_sys_timedata_control1")
    if(this.id == "setting_sys_time_ul2")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_time_poweron_btn1")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_time_poweron_btn2")
    {
        index = 2;
    }
    SettingPoweronUpdateHelpinfo(PageDataSettingTimePoweron.operateData.helplist[index].title,PageDataSettingTimePoweron.operateData.helplist[index].content)

}
function SettingPoweronUpdateHelpinfo(title, content)
{
    PageDataSettingTimePoweron.operateData.helpcontent=content;
    PageDataSettingTimePoweron.operateData.helptitle=title;
    try {
        if (title != "" && !!langPackages[title]) {
            $("#setting_sys_poweron_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_poweron_helpinfo_title").html(title);
        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_poweron__helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_poweron__helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }
}
function SettingSystimePoweronDestroy()
{
    hiWebOsFrame.settingssystimepoweron = null;
}
function timePoweronopenHandler(){
    if (hiWebOsFrame.getCurrentArea() == "EU")
    {
        $("#setting_sys_poweron_helpinfo").css("display","block");
    }
    else
    {
        $("#setting_sys_poweron_helpinfo").css("display","none");
    }

}
function  SettingTimePoweronInit()
{
   // PageDataSettingTimePoweron.operateData.cursyncmode=
    try{
//    var temp=model.timerfunc.getSyncMode();
//    debugPrint("getSyncMode is "+temp);
//    if(temp==0)
//    {
//        PageDataSettingSysTime.operateData.cursyncmode=0;
//        PageDataSettingTimePoweron.operateData.setting_sys_timedata_control1.switchType=false;
//
//    }
//    else
//    {
//        PageDataSettingSysTime.operateData.cursyncmode=1;
//        PageDataSettingTimePoweron.operateData.setting_sys_timedata_control1.switchType=true;
//
//    }
     PageDataSettingTimePoweron.operateData.curselectlist=model.timerfunc.getAlarmWeekly();
     debugPrint("weekly list "+PageDataSettingTimePoweron.operateData.curselectlist)
    }catch (e)
    {
        debugE(e.message)
    }
//   if( PageeDataSettingTimePoweron.operateData.cursyncmode==1)
//   {
//       PageDataSettingTimePoweron.operateData.setting_sys_timedata_control1.switchType=true;
//   }
//    else
//   {
//       PageDataSettingTimePoweron.operateData.setting_sys_timedata_control1.switchType=false;
//
//   }
}

function SettingSysTimePoweronEscHandler()
{
//    hiWebOsFrame.settingssystimepoweron.close();
    hiWebOsFrame.settingssystimepoweron.close();
    //PageDataSettingSysTime.operateData.curtime=this.page.operateData.curtime;
   // PageDataSettingSysTime.operateData.curdate=this.page.operateData.curdate;
    hiWebOsFrame.settingssystime.open();
    hiWebOsFrame.settingssystime.hiFocus();
    hiWebOsFrame.settingssystime.rewriteDataOnly();
}

function SettingSysTimeUl2Enter()
{
    if(this.SelectedIndex==0||this.SelectedIndex==1||this.SelectedIndex==2)
    {
        //todo 调整 select状态  js set
        //   PageDataSettingSysTime.setting_sys_time_ul2.DataSelectedIndex=this.SelectedIndex;
        this.page.operateData.curpoweronfre=this.SelectedIndex;
        if( this.page.operateData.curpoweronfre==0)
        {
            //todo 如果关闭对页面进行disable
            SetPoweonMode(0);

            this.page.rewriteDataOnly();

        }
        else
        {
            //todo 恢复为使能情况
            SetPoweonMode(this.SelectedIndex);

            this.page.rewriteDataOnly();

            hiWebOsFrame.createPage('setting_sys_time_info_dialog',null, hiWebOsFrame.settingssystimepoweron, null,function(page){
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

function SettingSysTimePoweronTimeBtnEnter()
{
    // hiWebOsFrame.settingssystime.close();
//    hiWebOsFrame.createPage('setting_sys_time_standby_page', null, hiWebOsFrame.settingssystime, null, function (TimePoweron) {
//        hiWebOsFrame.settingssystimestandby= TimePoweron;
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
        hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingssystimepoweron, null, function (autotime) {
            PageDateSettingSysinputtime.operateData.curparent=0;
            PageDateSettingSysinputtime.operateData.curformat=0;
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

function SettingSysTimePoweronWeeklyBtnEnter()
{
    hiWebOsFrame.createPage('setting_sys_weekly_page', null, hiWebOsFrame.settingssystimepoweron, null, function(poweronweekly) {
        hiWebOsFrame.settingssysweekly = poweronweekly;
        PageDataSettingSysWeekly.operateData.curselectlist=PageDataSettingTimePoweron.operateData.curselectlist;
        PageDataSettingSysWeekly.operateData.parentpage = 0;
        hiWebOsFrame.settingssysweekly.rewrite();
        hiWebOsFrame.settingssysweekly.open();
        hiWebOsFrame.settingssysweekly.hiFocus();

    });
}


