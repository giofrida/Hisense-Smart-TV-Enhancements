/**
 * Created by Administrator on 14-9-2.
 */
function getSettingSystimePoweroffPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_time_poweroff_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_time_poweroff_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_time_ul3",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo":"setting_sys_time_poweroff_btn1"},
            "classes": {
                "normal": "setting_sys_navibar3_normal", "focus": "setting_sys_navibar3_focus","dataSelected":"setting_sys_navibar3_dataselect"
            },
            "handler": {
                "aftDownHandler":"SettingSystimePowerofffocus",
                "aftUpHandler":"SettingSystimePowerofffocus",
                "aftEscHandler":"SettingSysTimePoweroffEscHandler",
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
            "id": "setting_sys_time_poweroff_time_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweroff_time_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweroff_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_time_poweroff_btn2","upTo":"setting_sys_time_ul3"},
            "handler": {
                "aftDownHandler":"SettingSystimePowerofffocus",
                "aftUpHandler":"SettingSystimePowerofffocus",
                "aftEnterHandler": "SettingSysTimePoweroffTimeBtnEnter",
                "befLeftHandler":"SettingSysTimePoweroffEscHandler",
                "aftEscHandler": "SettingSysTimePoweroffEscHandler"
            }
        },
        {
            "id": "setting_sys_time_poweroff_weekly_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweroff_weekly_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_poweroff_btn2",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {

                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"upTo":"setting_sys_time_poweroff_btn1"},
            "handler": {
                "aftDownHandler":"SettingSystimePowerofffocus",
                "aftUpHandler":"SettingSystimePowerofffocus",
                "aftEnterHandler": "SettingSystimePoweroffWeeklyBtnEnter",
                "befLeftHandler":"SettingSysTimePoweroffEscHandler",
                "aftEscHandler": "SettingSysTimePoweroffEscHandler"
            }
        }




    ];
    // SettingTimerinit();
    SettingtimePoweroffInit();
    return PageDataSettingtimePoweroff;
}
var PageDataSettingtimePoweroff={

    "setting_sys_time_poweroff_img1":{Data:"img/head_arrow.png"},
    "setting_sys_time_poweroff_text1":{Data:"Power off Timer"},

    
    "setting_sys_time_ul3":{Data:[
        {"setting_sys_poweroff_txt1":{Data:"Off"}},
        {"setting_sys_poweroff_txt1":{Data:"Once"}},
        {"setting_sys_poweroff_txt1":{Data:"Weekly"}}

    ],
        "disable":false,
        "DataSelectedIndex":0,
        "SelectedIndex":0
    },
    "setting_sys_time_poweroff_time_str1":{Data:"Time:"},
    "setting_sys_time_poweroff_time_str2":{Data:""},
    "setting_sys_time_poweroff_btn1":{Data:"Adjust"},
    "setting_sys_time_poweroff_weekly_str1":{Data:"Weekly"},
    "setting_sys_time_poweroff_weekly_str2":{Data:""},
    "setting_sys_time_poweroff_btn2":{Data:"Adjust"},


    "operateData": {
//        "curfocuslist":["timesync","onfre","ontime","offfre","offtime"],
//        "curfocus":"timesync",

        "helplist":[
            {
                "title":"Power off Timer",
                "content":""
            },
            {
                "title":"Time",
                "content":"Set the clock for the time you want the TV to turn Off automatically."
            },
            {
                "title":"Weekly",
                "content":"Set the clock for the time you want the TV to turn Off automatically."
            }
        ],
//        "curdate":"",
//        "curtime":"",
//        "cursyncmode":0,
//        "timeformatlist":["12-hours","24-hour"],
//        "AmPmflag":0,
//        "curtimeforma":0,
//        "curpowerofffre":0,
        "curselectlist":[0,0,0,0,1,1,1]
    },
    "langData":{
        "Power off Timer": [],
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


        pageData.setting_sys_time_ul3.DataSelectedIndex=pageData.operateData.curpowerofffre;
        pageData.setting_sys_time_ul3.SelectedIndex=pageData.operateData.curpowerofffre;
        if( pageData.operateData.curpowerofffre==0)
        {
            pageData.setting_sys_time_poweroff_btn1.disable=true;
            pageData.setting_sys_time_poweroff_btn2.disable=true;
            $("#setting_sys_time_poweroff_time_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweroff_time_str2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweroff_weekly_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweroff_weekly_str2").css('color',"rgba(178,184,191,0.3)");
            pageData.setting_sys_time_poweroff_time_str2.Data="";

        }
        else if( pageData.operateData.curpowerofffre==1)
        {
            pageData.setting_sys_time_poweroff_btn1.disable=false;
            pageData.setting_sys_time_poweroff_btn2.disable=true;
            $("#setting_sys_time_poweroff_time_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_poweroff_time_str2").css('color',"#b2b8bf");
            $("#setting_sys_time_poweroff_weekly_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_poweroff_weekly_str2").css('color',"rgba(178,184,191,0.3)");
            pageData.setting_sys_time_poweroff_time_str2.Data=ChangeInttoTime(PageDataSettingSysTime.operateData.curpowerofftime, PageDataSettingSysTime.operateData.curtimeforma);

        }
        else
        {
            pageData.setting_sys_time_poweroff_btn1.disable=false;
            pageData.setting_sys_time_poweroff_btn2.disable=false;
            $("#setting_sys_time_poweroff_time_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_poweroff_time_str2").css('color',"#b2b8bf");
            $("#setting_sys_time_poweroff_weekly_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_poweroff_weekly_str2").css('color',"#b2b8bf");
            pageData.setting_sys_time_poweroff_time_str2.Data=ChangeInttoTime(PageDataSettingSysTime.operateData.curpowerofftime, PageDataSettingSysTime.operateData.curtimeforma);
        }
//        if(pageData.operateData.curpowerofffre==0)
//        {
//            pageData.setting_sys_time_poweroff_time_str2.Data='';
//        }
//        else if(pageData.operateData.curpowerofffre==1||pageData.operateData.curpowerofffre==2)
//        {
//            pageData.setting_sys_time_poweroff_time_str2.Data=ChangeInttoTime(PageDataSettingSysTime.operateData.curpowerofftime,PageDataSettingSysTime.operateData.curtimeforma);//pageData.operateData.curpoweroffoncetime;
//        }

        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_time_poweroff_img1.Data="img/head_arrow.png";

            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")');
         //   $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_switch_name").css("float","left")
            $("#setting_sys_time_poweroff_page").css("left","510px");
           // $("#setting_sys_timedata_control1").css("float","right")
        }
        else {
            pageData.setting_sys_time_poweroff_img1.Data="img/head_arrow_right.png";
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
            $("#setting_sys_time_poweroff_page").css("left","328px");
           // $("#setting_sys_timedata_control1").css("float","left")
        }
    }

};
function SettingSystimePowerofffocus()
{
    var index;
//    if(this.id=="setting_sys_timedata_control1")
    if(this.id == "setting_sys_time_ul3")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_time_poweroff_btn1")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_time_poweroff_btn2")
    {
        index = 2;
    }
    SettingPoweroffUpdateHelpinfo(PageDataSettingtimePoweroff.operateData.helplist[index].title,PageDataSettingtimePoweroff.operateData.helplist[index].content)

}
function SettingPoweroffUpdateHelpinfo(title, content)
{
    PageDataSettingtimePoweroff.operateData.helpcontent=content;
    PageDataSettingtimePoweroff.operateData.helptitle=title;
    try {
        if (title != "" && !!langPackages[title]) {
            $("#setting_sys_poweroff_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_poweroff_helpinfo_title").html(title);
        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_poweroff__helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_poweroff__helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }
}
function SettingSystimePoweroffonDestroy()
{
    hiWebOsFrame.settingssystimepoweroff = null;
}
function timePoweroffopenHandler(){

    if (hiWebOsFrame.getCurrentArea() == "EU")
    {
     $("#setting_sys_poweroff_helpinfo").css("display","block")
    }
    else
    {
        $("#setting_sys_poweroff_helpinfo").css("display","none")
    }

}
function  SettingtimePoweroffInit()
{
   // PageDataSettingtimePoweroff.operateData.cursyncmode=
    try{
//    var temp=model.timerfunc.getSyncMode();
//    debugPrint("getSyncMode is "+temp);
//    if(temp==0)
//    {
//        PageDataSettingSysTime.operateData.cursyncmode=0;
//        PageDataSettingtimePoweroff.operateData.setting_sys_timedata_control1.switchType=false;
//
//    }
//    else
//    {
//        PageDataSettingSysTime.operateData.cursyncmode=1;
//        PageDataSettingtimePoweroff.operateData.setting_sys_timedata_control1.switchType=true;
//
//    }
     PageDataSettingtimePoweroff.operateData.curselectlist=model.timerfunc.getStandbyWeekly();
     debugPrint("weekly list "+PageDataSettingtimePoweroff.operateData.curselectlist)
    }catch (e)
    {
        debugE(e.message)
    }
//   if( PageeDataSettingtimePoweroff.operateData.cursyncmode==1)
//   {
//       PageDataSettingtimePoweroff.operateData.setting_sys_timedata_control1.switchType=true;
//   }
//    else
//   {
//       PageDataSettingtimePoweroff.operateData.setting_sys_timedata_control1.switchType=false;
//
//   }
}

function SettingSysTimePoweroffEscHandler()
{
//    hiWebOsFrame.settingssystimepoweroff.close();
    hiWebOsFrame.settingssystimepoweroff.close();
    //PageDataSettingSysTime.operateData.curtime=this.page.operateData.curtime;
   // PageDataSettingSysTime.operateData.curdate=this.page.operateData.curdate;
    hiWebOsFrame.settingssystime.open();
    hiWebOsFrame.settingssystime.hiFocus();
    hiWebOsFrame.settingssystime.rewriteDataOnly();
}

function SettingSysTimeUl3Enter()
{
    if(this.SelectedIndex==0||this.SelectedIndex==1||this.SelectedIndex==2)
    {
        //todo 调整 select状态  js set
        //  PageDataSettingSysTime.setting_sys_time_ul3.DataSelectedIndex=this.SelectedIndex;
        this.page.operateData.curpowerofffre=this.SelectedIndex;
        if(this.page.operateData.curpowerofffre==0)
        {
            SetPoweoffMode(0);
            this.page.rewriteDataOnly();
        }
        else
        {
            SetPoweoffMode(this.SelectedIndex);
            this.page.rewriteDataOnly();
           
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

function SettingSysTimePoweroffTimeBtnEnter()
{
    //  hiWebOsFrame.settingssystime.close();
//    hiWebOsFrame.createPage('setting_sys_time_standby_page', null, hiWebOsFrame.settingssystime, null, function (timePoweroff) {
//        hiWebOsFrame.settingssystimestandby= timePoweroff;
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
        hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingssystimepoweroff, null, function (autotime) {
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

function SettingSystimePoweroffWeeklyBtnEnter()
{
    hiWebOsFrame.createPage('setting_sys_weekly_page', null, hiWebOsFrame.settingssystimepoweroff, null, function(poweroffweekly) {
        hiWebOsFrame.settingssysweekly = poweroffweekly;
        PageDataSettingSysWeekly.operateData.curselectlist=PageDataSettingtimePoweroff.operateData.curselectlist;
        PageDataSettingSysWeekly.operateData.parentpage = 1;
        hiWebOsFrame.settingssysweekly.rewrite();
        hiWebOsFrame.settingssysweekly.open();
        hiWebOsFrame.settingssysweekly.hiFocus();

    });
}