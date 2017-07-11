/**
 * Created by Administrator on 14-9-3.
 */
function getSettingTimeStandbyPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_time_standby_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_time_standby_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_time_standby1_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_standby1_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_standby_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_time_standby_btn2","upTo":""},
            "handler": {
                "aftEnterHandler": "SettingSysTimestandbyBtn1Enter",
                "aftEscHandler": "SettingSysTimestandbyEscHandler"
            }
        },
        {
            "id": "setting_sys_time_standby2_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_standby2_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_standby_btn2",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "","upTo":"setting_sys_time_standby_btn1"},
            "handler": {
                "aftEnterHandler": "SettingSysTimestandbyBtn2Enter",
                "aftEscHandler": "SettingSysTimestandbyEscHandler"
            }
        }




    ];
    // SettingTimerinit();
    //dateinit();
    return PageDataSettingTimesandby;
}
var PageDataSettingTimesandby={

    "setting_sys_time_standby_img1":{Data:"img/head_arrow.png"},
    "setting_sys_time_standby_text1":{Data:"Timer"},

    "setting_sys_time_standby1_str1":{Data:"Time:"},
    "setting_sys_time_standby1_str2":{Data:"home mode"},
    "setting_sys_time_standby_btn1":{Data:"Adjust"},
    "setting_sys_time_standby2_str1":{Data:"Weekly:"},
    "setting_sys_time_standby2_str2":{Data:""},
    "setting_sys_time_standby_btn2":{Data:"Adjust"},

    "operateData": {
        "parentpage":0,
        "patentmode":0,
        "curtimeforma":0,
        "curtime":0
    },
    "langData":{
        "Time":["Time","Zeit","Ora","Tempo","Hora","Heure","Tid","Tid","Tid","Aika"],
        "Adjust":["Adjust","Einstellen","Regolare","Ajustar","Ajuste","Ajuster","Justere","Justera","Juster","Säätö"]

    },
    rewrite:function(pageData){
//        if(pageData.operateData.curtime!="")
        {
//            var time1=parseInt(pageData.operateData.curtime/3600)
//            var time2 =parseInt((pageData.operateData.curtime-time1*3600)/60);
//            if((""+time2).length<2)
//            {
//                time2 ="0"+time2;
//            }
//            if(pageData.operateData.curtimeforma==0)
//            {
//                if(time1>11){
//                    time1=parseInt(time1)-12;
//                    pageData.setting_sys_time_standby1_str2.Data=time1+":"+time2+" PM";
//
//                }
//                else
//                {
//                    pageData.setting_sys_time_standby1_str2.Data=time1+":"+time2+" AM";
//
//                }
//
//            }
//            else
//            {
//                if((""+time1).length<2)
//                {
//                    time1 ="0"+time1;
//                }
//                pageData.setting_sys_time_standby1_str2.Data=time1+":"+time2;
//
//            }
            pageData.setting_sys_time_standby1_str2.Data=ChangeInttoTime(pageData.operateData.curtime,pageData.operateData.curtimeforma);
        }
      //  pageData.setting_sys_time_date2_str2.Data=pageData.operateData.curtime;
        if(pageData.operateData.patentmode==1||pageData.operateData.patentmode==0)
        {

            pageData.setting_sys_time_standby_btn2.disable=true;
            $("#setting_sys_time_standby2_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_standby2_str2").css('color',"rgba(178,184,191,0.3)");

        }
        else
        {

            pageData.setting_sys_time_standby_btn2.disable=false;
            $("#setting_sys_time_standby2_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_standby2_str2").css('color',"#b2b8bf");

        }
    }

};

function SettingTimeStandbyonDestroy()
{
    hiWebOsFrame.settingssystimestandby = null;
}
function SettingTimeStandbyopenHandler(){


}
//function  dateinit()
//{
//    if( PageDataSettingTimedate.operateData.cursyncmode==1)
//    {
//        PageDataSettingTimedate.operateData.setting_sys_timedata_control1.switchType=true;
//    }
//    else
//    {
//        PageDataSettingTimedate.operateData.setting_sys_timedata_control1.switchType=false;
//
//    }
//}

function SettingSysTimestandbyEscHandler()
{
    hiWebOsFrame.settingssystimestandby.close();
    if(PageDataSettingTimesandby.operateData.parentpage==0&&PageDataSettingTimesandby.operateData.patentmode==1)
    {
        PageDataSettingSysTime.operateData.curpowerontime=this.page.operateData.curtime;
    }
    else if(PageDataSettingTimesandby.operateData.parentpage==0&&PageDataSettingTimesandby.operateData.patentmode==2)
    {
        PageDataSettingSysTime.operateData.curpowerontime=this.page.operateData.curtime;
    }
    else if(PageDataSettingTimesandby.operateData.parentpage==1&&PageDataSettingTimesandby.operateData.patentmode==1)
    {
        PageDataSettingSysTime.operateData.curpowerofftime=this.page.operateData.curtime;
    }
    else if(PageDataSettingTimesandby.operateData.parentpage==1&&PageDataSettingTimesandby.operateData.patentmode==2)
    {
        PageDataSettingSysTime.operateData.curpowerofftime=this.page.operateData.curtime;
    }
    hiWebOsFrame.settingssystime.open();
    hiWebOsFrame.settingssystime.hiFocus();
    hiWebOsFrame.settingssystime.rewriteDataOnly();
}
function SettingSysTimestandbyBtn1Enter()
{
    if(this.page.operateData.curtimeforma==0)//12
    {
        hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingssystimedate, null, function (autotime) {
            PageDateSettingSysinputtime.operateData.curparent=PageDataSettingTimesandby.operateData.parentpage;
            hiWebOsFrame.settingssysinputtime = autotime;
            hiWebOsFrame.settingssysinputtime.open();
            hiWebOsFrame.settingssysinputtime.hiFocus();

        });
    }
    else
    {
        PageDateSettingSysautotime.operateData.curparent=PageDataSettingTimesandby.operateData.parentpage;
        hiWebOsFrame.settingssysautotime.open();
        hiWebOsFrame.settingssysautotime.hiFocus("setting_sys_autotime_input1");
    }
}
function SettingSysTimestandbyBtn2Enter()
{
    hiWebOsFrame.createPage('setting_sys_weekly_page', null, hiWebOsFrame.settingssystimestandby, null, function (timelist) {
        if(PageDataSettingTimesandby.operateData.parentpage==0)
        {
            PageDataSettingSysWeekly.operateData.curselectlist=PageDataSettingSysTime.operateData.curpoweronweekly;
            PageDataSettingSysWeekly.operateData.parentpage=PageDataSettingTimesandby.operateData.parentpage

        }
        else if(PageDataSettingTimesandby.operateData.parentpage==1)
        {
            PageDataSettingSysWeekly.operateData.curselectlist=PageDataSettingSysTime.operateData.curpoweroffweekly;
            PageDataSettingSysWeekly.operateData.parentpage=PageDataSettingTimesandby.operateData.parentpage;

        }
        hiWebOsFrame.settingssysweekly = timelist;
        hiWebOsFrame.settingssysweekly.rewrite();
        hiWebOsFrame.settingssysweekly.open();
        hiWebOsFrame.settingssysweekly.hiFocus();

    });
}