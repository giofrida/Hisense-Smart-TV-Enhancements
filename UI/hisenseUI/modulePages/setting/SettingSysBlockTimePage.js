/**
 * Created by Administrator on 14-9-9.
 */

function getSettingSysBlockTimetPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_block_time_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_block_time_text1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_block_time1_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_block_time1_str2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_block_time_btn1",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_block_time_btn2", "upTo": ""},
            "handler": {
                "aftDownHandler":"SettingSysblocktimefocushandler",
                "aftUpHandler":"SettingSysblocktimefocushandler",
                "befEnterHandler": "SettingSysBlocktimeEnHandler",
                "befLeftHandler":"SettingSysBlocktimeEscHandler",
                "befEscHandler": "SettingSysBlocktimeEscHandler"
            }
        },
        {
            "id": "setting_sys_block_time2_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_block_time2_str2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_block_time_btn2",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
            },
            "nav":{"downTo": "setting_sys_block_time_btn3", "upTo": "setting_sys_block_time_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysblocktimefocushandler",
                "aftUpHandler":"SettingSysblocktimefocushandler",
                "befEnterHandler": "SettingSysBlocktimeEnHandler",
                "befLeftHandler":"SettingSysBlocktimeEscHandler",
                "befEscHandler": "SettingSysBlocktimeEscHandler"
            }
        },
        {
            "id": "setting_sys_block_time3_str1",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_block_time3_str2",
            "description": "menulanusge",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_block_time_btn3",
            "description": "menulanusge2",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "", "upTo": "setting_sys_block_time_btn2"},
            "handler": {
                "aftDownHandler":"SettingSysblocktimefocushandler",
                "aftUpHandler":"SettingSysblocktimefocushandler",
                "befEnterHandler": "SettingSysBlocktimeEnHandler",
                "befLeftHandler":"SettingSysBlocktimeEscHandler",
                "befEscHandler": "SettingSysBlocktimeEscHandler"
            }
        }
        ]
    blocktimeinit();
    return PageDataSettingSysBlocktime;
}
var PageDataSettingSysBlocktime = {
    "setting_sys_block_time_img1":{Data:"img/head_arrow.png"},
    "setting_sys_block_time_text1":{Data:"Block Time"},
    "setting_sys_block_time1_str1":{Data:"Start Time:"},
    "setting_sys_block_time1_str2":{Data:"1:00 AM"},
    "setting_sys_block_time_btn1":{Data:"Adjust"},
    "setting_sys_block_time2_str1":{Data:"End Time:"},
    "setting_sys_block_time2_str2":{Data:"11:50  PM"},
    "setting_sys_block_time_btn2":{Data:"Adjust"},
    "setting_sys_block_time3_str1":{Data:"Weekly"},
    "setting_sys_block_time3_str2":{Data:""},
    "setting_sys_block_time_btn3":{Data:"Adjust","disable":false},
    "operateData": {
        "curstarttime":0,
        "curendtime":0,
        "curtimeformat":0,
        "curweekly":[0,1,1,1,1,1,1],
        "curalllock":0,
        "helplist":[
            {
                "title":"Start Time",
                "content":"Choose a time of day that you'd like to start blocking certain programs."
            },
            {
                "title":"End Time",
                "content":"Choose a time of day that you'd like to stop blocking certain programs."
            }
            ,
            {
                "title":"",
                "content":""
            }
        ]

    },
    "langData":{
        "Block Time": ["Block Time","Blocage temporaire","Tiempo de bloqueo"],
        "Start Time:": [],
        "End Time:": [],
        "Weekly":[],
        "Adjust":[]

    },

    rewrite:function(pageData){
        //todo
        pageData.setting_sys_block_time1_str2.Data=ChangeInttoTime(pageData.operateData.curstarttime,pageData.operateData.curtimeformat);
        pageData.setting_sys_block_time2_str2.Data=ChangeInttoTime(pageData.operateData.curendtime,pageData.operateData.curtimeformat);//pageData.operateData.curendtime;
       if(pageData.operateData.curalllock==0)
       {
           pageData.setting_sys_block_time_btn3.disable=true;
           $("#setting_sys_block_time3_str1").css('color',"#85888d");

       }
        else
       {
           pageData.setting_sys_block_time_btn3.disable=false;
           $("#setting_sys_block_time3_str1").css('color',"#f0f0f0");

       }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_block_time_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
         //   $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $("#setting_sys_blocktime_page").css("left","510px");
        }
        else {
            pageData.setting_sys_block_time_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right")
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
         //   $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
            $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");
            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left");
            $("#setting_sys_blocktime_page").css("left","328px");
        }

    }
};

function SettingSysblocktimefocushandler()
{
    if(this.id=="setting_sys_block_time_btn1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_block_time_btn2")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_block_time_btn3")
    {
        index = 2;
    }

    SettingFirUpdateHelpinfo(PageDataSettingSysBlocktime.operateData.helplist[index].title,PageDataSettingSysBlocktime.operateData.helplist[index].content)

}
function SettingSysSysBlockTimeDestroy()
{
    hiWebOsFrame.settingsysblocktime=null;
}
function SettingSysBlocktimeEnHandler()
{

    if(this.id=="setting_sys_block_time_btn1")
    {
        if(this.page.operateData.curtimeformat==0)//12
        {
            hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingsysblocktime, null, function (autotime) {
                PageDateSettingSysinputtime.operateData.curparent=3;
                PageDateSettingSysinputtime.operateData.curformat=0;
                hiWebOsFrame.settingssysinputtime = autotime;
                hiWebOsFrame.settingssysinputtime.rewriteDataOnly();
                hiWebOsFrame.settingssysinputtime.open();
                hiWebOsFrame.settingssysinputtime.hiFocus("setting_sys_inputtime_div1");

            });
        }
        else
        {
            hiWebOsFrame.createPage('setting_sys_locktime2_page',null,  hiWebOsFrame.settingsysblocktime, null,function(locktime){
            hiWebOsFrame.settingssyslocktime2=locktime;
            PageDateSettingSysLocktime2.operateData.curparent=0;
            locktime.open();
            locktime.hiFocus("setting_sys_locktime_input1");
              });
      }
    }
    else if(this.id=="setting_sys_block_time_btn2")
    {
        if(this.page.operateData.curtimeformat==0)//12
        {
            hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingsysblocktime, null, function (autotime) {
                PageDateSettingSysinputtime.operateData.curparent=4;
                PageDateSettingSysinputtime.operateData.curformat=0;//PageDataSettingSysBlocktime.operateData.curformat;
                hiWebOsFrame.settingssysinputtime = autotime;
                hiWebOsFrame.settingssysinputtime.rewriteDataOnly();
                hiWebOsFrame.settingssysinputtime.open();
                hiWebOsFrame.settingssysinputtime.hiFocus("setting_sys_inputtime_div1");

            });
        }
        else
        {
        hiWebOsFrame.createPage('setting_sys_locktime2_page',null,  hiWebOsFrame.settingsysblocktime, null,function(locktime){
            hiWebOsFrame.settingssyslocktime2=locktime;
            PageDateSettingSysLocktime2.operateData.curparent=1;
            locktime.open();
            locktime.hiFocus("setting_sys_locktime_input1");
        });
        }
    }
    else if(this.id=="setting_sys_block_time_btn3")
    {
        hiWebOsFrame.createPage('setting_sys_weekly_page', null, hiWebOsFrame.settingsysblocktime, null, function (timelist) {
            PageDataSettingSysWeekly.operateData.curselectlist=PageDataSettingSysBlocktime.operateData.curweekly;
            PageDataSettingSysWeekly.operateData.parentpage=2;
            hiWebOsFrame.settingssysweekly = timelist;
            hiWebOsFrame.settingssysweekly.rewrite();
            hiWebOsFrame.settingssysweekly.open();
            hiWebOsFrame.settingssysweekly.hiFocus();

        });
    }

}

function SettingSysBlocktimeEscHandler()
{
    this.page.close();
    SettingFirUpdateHelpinfo(PageDataSettingSysSecurity.operateData.helplist[1].title,PageDataSettingSysSecurity.operateData.helplist[1].content)

    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();
}
function blocktimeinit()
{
    try
    {
        PageDataSettingSysBlocktime.operateData.curstarttime=model.parentlock.getStart();
        PageDataSettingSysBlocktime.operateData.curendtime=model.parentlock.getEnd();
        PageDataSettingSysBlocktime.operateData.curweekly=model.parentlock.getEndWeekly();
        debugPrint("start time "+PageDataSettingSysBlocktime.operateData.curstarttime);
        debugPrint("end time "+PageDataSettingSysBlocktime.operateData.curendtime);
        debugPrint("curweekly "+PageDataSettingSysBlocktime.operateData.curweekly);
        if(PageDataSettingSysBlocktime.operateData.curweekly.length<7)
        {
            debugE("the weekly error");
            PageDataSettingSysBlocktime.operateData.curweekly=[0,0,0,0,0,0,0];
        }
        PageDataSettingSysBlocktime.operateData.curtimeformat=model.timerfunc.getTimeFormat();
        debugPrint("get cur timeformat "+PageDataSettingSysBlocktime.operateData.curtimeformat);
    }
    catch (e)
    {
        debugE(e.message);
        PageDataSettingSysBlocktime.operateData.curweekly=[0,0,0,0,0,0,0];
    }
}

function SettingSysSysBlockTimeOnOpen()
{
    debugRM('SettingSysSysBlockTimeOnOpen');
    if(hiWebOsFrame.getCurrentArea()=="EU")
    {
        $("#setting_sys_blocktime_helpinfo").css("display","block");
    }
    else
    {
        $("#setting_sys_blocktime_helpinfo").css("display","none");
    }
}