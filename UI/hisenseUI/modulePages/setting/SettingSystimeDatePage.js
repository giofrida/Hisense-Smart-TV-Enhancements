/**
 * Created by Administrator on 14-9-2.
 */
function getSettingSystimedatePageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_timedate_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_timedate_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        /*{
            "id": "setting_sys_timedata_ctrl_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_timedata_control1",
            "description":"开关控件",
            "classes":
            {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"downTo":"setting_sys_timedate_btn1","upTo": ""},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysTimedatefocus",
                "aftUpHandler":"SettingSysTimedatefocus",
                'aftEnterHandler':'SettingSysTimedateCtrlEnter',
                "befLeftHandler":"SettingSysTimedateEscHandler",
                "aftEscHandler": "SettingSysTimedateEscHandler"

            }

        },*/
        {
            "id": "setting_sys_timedate_format_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_timedate_format_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_timedate_format_btn",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_timedate_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysTimedatefocus",
                "aftUpHandler":"SettingSysTimedatefocus",
                "aftEnterHandler": "SettingSysTimedateFormatBtnEnter",
                "befLeftHandler":"SettingSysTimedateEscHandler",
                "aftEscHandler": "SettingSysTimedateEscHandler"
            }
        },
        {
            "id": "setting_sys_time_date1_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_date1_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_timedate_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_timedate_btn2","upTo":"setting_sys_timedate_format_btn"},
            "handler": {
                "aftDownHandler":"SettingSysTimedatefocus",
                "aftUpHandler":"SettingSysTimedatefocus",
                "aftEnterHandler": "SettingSysTimedateBtn1Enter",
                "befLeftHandler":"SettingSysTimedateEscHandler",
                "aftEscHandler": "SettingSysTimedateEscHandler"
            }
        },
        {
            "id": "setting_sys_time_date2_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_time_date2_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_timedate_btn2",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {

                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "","upTo":"setting_sys_timedate_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysTimedatefocus",
                "aftUpHandler":"SettingSysTimedatefocus",
                "aftEnterHandler": "SettingSysTimedateBtn2Enter",
                "befLeftHandler":"SettingSysTimedateEscHandler",
                "aftEscHandler": "SettingSysTimedateEscHandler"
            }
        }




    ];
    // SettingTimerinit();
    dateinit();
    return PageDataSettingTimedate;
}
var PageDataSettingTimedate={

    "setting_sys_timedate_img1":{Data:"img/head_arrow.png"},
    "setting_sys_timedate_text1":{Data:"Date/Time"},

    "setting_sys_timedate_format_str1":{Data:"Time Format:"},
    "setting_sys_timedate_format_str2":{Data:"12-hours"},
    "setting_sys_timedate_format_btn":{Data:"Adjust"},
    "setting_sys_time_date1_str1":{Data:"Date:"},
    "setting_sys_time_date1_str2":{Data:""},
    "setting_sys_timedate_btn1":{Data:"Adjust"},
    "setting_sys_time_date2_str1":{Data:"Time:"},
    "setting_sys_time_date2_str2":{Data:""},
    "setting_sys_timedate_btn2":{Data:"Adjust"},

//    "setting_sys_timedata_ctrl_str1":{Data:"Auto Synchronization"},
//    "setting_sys_timedata_control1":{Data:{ switchType:true, switchText:''},disable:false},
    "operateData": {
//        "curfocuslist":["timesync","onfre","ontime","offfre","offtime"],
//        "curfocus":"timesync",
        "setting_sys_timedata_control1":{
            switchType:false,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "helplist":[
            {
                "title":"Time Format",
                "content": "Set the time to display in a 12 or 24-hour format."
//                "content":"Set the date and time to automatically sync with the TV software server or cable provider."
            },
            {
                "title":"Date",
                "content":"Set the current date."
            },
            {
                "title":"Time",
                "content":"Set the current time."
            }
        ],
        "curtimeforma":0,
        "curdate":"",
        "curtime":"",
        "cursyncmode":0,
        "timeformatlist":["12-hours","24-hour"],
        "AmPmflag":0

    },
    "langData":{
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
        /*$.each(pageData,function(key,val){

            if(!key) return true;

            var localData = pageData[key],
                localOpeData =opeData[key];
            switch(key)
            {
                case "setting_sys_timedata_control1":
                    //更新data里面的数据
                    localData.Data.switchType = localOpeData.switchType;
                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                    break;
            }
        })*/

//        if (hiWebOsFrame.getCurrentArea() != "EM")
//        {
            PageDataSettingTimedate.setting_sys_timedate_format_btn.disable = true;
            $("#setting_sys_timedate_format").css('display', "none");
//        }
        pageData.setting_sys_timedate_format_str2.Data=pageData.operateData.timeformatlist[PageDataSettingSysTime.operateData.curtimeforma];
        pageData.setting_sys_time_date1_str2.Data=pageData.operateData.curdate;
        pageData.setting_sys_time_date2_str2.Data="";
        if(pageData.operateData.curtime!="")
        {
            var temp1=pageData.operateData.curtime.substr(0, pageData.operateData.curtime.indexOf(':'));
            var temp2=pageData.operateData.curtime.split(":")[1];
            if((temp2+"").length<2)
            {
                temp2="0"+temp2;
            }
            if(PageDataSettingSysTime.operateData.curtimeforma==0)
            {
                if( temp1>11)
                {
                    if(temp1>12)
                    {
                        var temp=(parseInt(temp1,10)-12)+":"+temp2+"PM";

                    }
                    else
                    {
                        var temp=parseInt(temp1,10)+":"+temp2+"PM";

                    }

                }
                else
                {
                    if(temp1==0)
                    {
                        var temp="12"+":"+temp2+"AM";

                    }
                    else
                    {
                        var temp=parseInt(temp1,10)+":"+temp2+"AM" ;

                    }
                }
                pageData.setting_sys_time_date2_str2.Data=temp;
            }
            else
            {
                if((temp1+"").length<2)
                {
                    temp1="0"+temp1;
                }
                pageData.setting_sys_time_date2_str2.Data=temp1+":"+temp2;
            }
        }
        if(PageDataSettingSysTime.operateData.cursyncmode == 1) //cursyncmode: auto, btn1、btn2不可用
        {
            pageData.setting_sys_timedate_btn1.disable=true;
            pageData.setting_sys_timedate_btn2.disable=true;
            $("#setting_sys_time_date1_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_date1_str2").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_date2_str1").css('color',"rgba(178,184,191,0.3)");
            $("#setting_sys_time_date2_str2").css('color',"rgba(178,184,191,0.3)");
        }
        else    //curtimemode: Auto
        {
            pageData.setting_sys_timedate_btn1.disable=false;
            pageData.setting_sys_timedate_btn2.disable=false;
            $("#setting_sys_time_date1_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_date1_str2").css('color',"#b2b8bf");
            $("#setting_sys_time_date2_str1").css('color',"#f0f0f0");
            $("#setting_sys_time_date2_str2").css('color',"#b2b8bf");
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_timedate_img1.Data="img/head_arrow.png";

            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")');
         //   $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_switch_name").css("float","left")
            $("#setting_sys_timedate_page").css("left","510px");
           // $("#setting_sys_timedata_control1").css("float","right")
        }
        else {
            pageData.setting_sys_timedate_img1.Data="img/head_arrow_right.png";
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
            $("#setting_sys_timedate_page").css("left","328px");
           // $("#setting_sys_timedata_control1").css("float","left")
        }
    }

};
function SettingSysTimedatefocus()
{
    var index;
//    if(this.id=="setting_sys_timedata_control1")
    if(this.id == "setting_sys_timedate_format_btn")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_timedate_btn1")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_timedate_btn2")
    {
        index = 2;
    }
    SettingTimedateUpdateHelpinfo(PageDataSettingTimedate.operateData.helplist[index].title,PageDataSettingTimedate.operateData.helplist[index].content)

}
function SettingTimedateUpdateHelpinfo(title, content)
{
    PageDataSettingTimedate.operateData.helpcontent=content;
    PageDataSettingTimedate.operateData.helptitle=title;
    try {
        if (title != "" && !!langPackages[title]) {
            $("#setting_sys_timedate_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_timedate_helpinfo_title").html(title);
        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_timedate__helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_timedate__helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }
}
function SettingSystimedateonDestroy()
{
    hiWebOsFrame.settingssystimedate = null;
}
function timedateopenHandler(){

    if (hiWebOsFrame.getCurrentArea() == "EU")
    {
        $("#setting_sys_timedate_helpinfo").css("display","block");
    }
    else
    {
        $("#setting_sys_timedate_helpinfo").css("display","none");
    }
}
function  dateinit()
{
   // PageDataSettingTimedate.operateData.cursyncmode=
    try{
    var temp=model.timerfunc.getSyncMode();
    debugPrint("getSyncMode is "+temp);
    if(temp==0)
    {
        PageDataSettingSysTime.operateData.cursyncmode=0;
        PageDataSettingTimedate.operateData.setting_sys_timedata_control1.switchType=false;

    }
    else
    {
        PageDataSettingSysTime.operateData.cursyncmode=1;
        PageDataSettingTimedate.operateData.setting_sys_timedata_control1.switchType=true;

    }
    }catch (e)
    {
        debugE(e.message)
    }
//   if( PageeDataSettingTimedate.operateData.cursyncmode==1)
//   {
//       PageDataSettingTimedate.operateData.setting_sys_timedata_control1.switchType=true;
//   }
//    else
//   {
//       PageDataSettingTimedate.operateData.setting_sys_timedata_control1.switchType=false;
//
//   }
}
function SettingSysTimedateCtrlEnter(operateData,data)
{
    var page = this.page;
    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    if(this.id="setting_sys_timedata_control1")
    {
        // todo the js
        if( operateData[this.id].switchType==true)
        {
            model.timerfunc.setSyncMode(1);
            PageDataSettingTimedate.operateData.cursyncmode=1;
            PageDataSettingSysTime.operateData.cursyncmode=1;
        }
        else
        {
            model.timerfunc.setSyncMode(0);
            PageDataSettingTimedate.operateData.cursyncmode=0;
            PageDataSettingSysTime.operateData.cursyncmode=0;
        }
    }
    SetRecentUse("Time",4,SYSTEM_TIME);
    page.rewriteDataOnly();
    // SetRecentUse("Smart Controller",4,6);

}
function SettingSysTimedateEscHandler()
{
    hiWebOsFrame.settingssystimedate.close();
    //PageDataSettingSysTime.operateData.curtime=this.page.operateData.curtime;
   // PageDataSettingSysTime.operateData.curdate=this.page.operateData.curdate;
    hiWebOsFrame.settingssystime.open();
    hiWebOsFrame.settingssystime.hiFocus();
    hiWebOsFrame.settingssystime.rewriteDataOnly();
}
function SettingSysTimedateBtn2Enter()
{
  if(PageDataSettingSysTime.operateData.curtimeforma==0)//12
  {
      hiWebOsFrame.createPage('setting_sys_inputtime_page', null, hiWebOsFrame.settingssystimedate, null, function (autotime) {
          PageDateSettingSysinputtime.operateData.curparent=2;
          hiWebOsFrame.settingssysinputtime = autotime;
          hiWebOsFrame.settingssysinputtime.open();
          hiWebOsFrame.settingssysinputtime.hiFocus("setting_sys_inputtime_div1");

      });
  }
    else
  {
    PageDateSettingSysautotime.operateData.curparent=2;
    hiWebOsFrame.settingssysautotime.open();
    hiWebOsFrame.settingssysautotime.hiFocus("setting_sys_autotime_input1");
  }


}

function SettingSysTimedateBtn1Enter()
{

    hiWebOsFrame.createPage('setting_sys_inputdate_page', null, hiWebOsFrame.settingssystimedate, null, function (autotime) {
    hiWebOsFrame.settingssysinputdate = autotime;
        hiWebOsFrame.settingssysinputdate.open();
        hiWebOsFrame.settingssysinputdate.hiFocus();

    });
}

function SettingSysTimedateFormatBtnEnter() {
    hiWebOsFrame.createPage('setting_sys_timelist_page', null, hiWebOsFrame.settingssystimedate, null, function (timelist) {
        PageDataSettingSystimeList.operateData.curoption="format"
        PageDataSettingSystimeList.operateData.curdatalist=PageDataSettingSysTime.operateData.timeformatlist;
        PageDataSettingSystimeList.operateData.curselectindex=PageDataSettingSysTime.operateData.curtimeforma;
        hiWebOsFrame.settingssystimelist = timelist;
        hiWebOsFrame.settingssystimelist.rewrite();
        hiWebOsFrame.settingssystimelist.open();
        hiWebOsFrame.settingssystimelist.hiFocus();

    });
}