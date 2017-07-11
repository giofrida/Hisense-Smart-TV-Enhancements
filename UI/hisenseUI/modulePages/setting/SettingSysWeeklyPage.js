/**
 * Created by Administrator on 14-9-2.
 */
function getSettingSysweeklyPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_weekly_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_weekly_ul1",
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
                "befEnterHandler": "SettingSysweeklyEnHandler",
                "aftDownHandler": "SettingSysweeklyDownHandler",
                "aftUpHandler": "SettingSysweeklyUpHandler",
                "aftEscHandler": "SettingSysweeklyEscHandler"
            },
            oriCaE: [

                {
                    "id": "setting_sys_weekly_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_weekly_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_weekly_txt1", "setting_sys_weekly_img1"]
                //"PageSize":5

            }
        }
    ];

    return PageDataSettingSysWeekly;
}
var PageDataSettingSysWeekly={

    "setting_sys_weekly_title":{Data:"Weekly"},
    "setting_sys_weekly_ul1": {Data:[
        {
            "setting_sys_weekly_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_weekly_txt1": {Data:"Sunday"}
        },
        {
            "setting_sys_weekly_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_weekly_txt1": {Data:"Monday"}
        },
        {
            "setting_sys_weekly_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_weekly_txt1": {Data:"Tuesday"}
        },
        {
            "setting_sys_weekly_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_weekly_txt1": {Data:"Wednesday"}
        },
        {
            "setting_sys_weekly_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_weekly_txt1": {Data:"Thursday"}
        },
        {
            "setting_sys_weekly_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_weekly_txt1": {Data:"Friday"}
        },
        {
            "setting_sys_weekly_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_weekly_txt1": {Data:"Saturday"}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        "parentpagelist":["poweronfre","powerofffre","security"],
        "parentpage":0,
        "curselectlist":[0,1,1,1,1,1,0],
        // "initselectlist":null,
        "curdatatype":0,
        "begingindex":0,
        "weeklist":["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]


    },
    "langData":{
        "Weekly":["Weekly","",""],
        "Monday":[ "Monday",""],
        "Tuesday":[ "Tuesday",""],
        "Wednesday":[ "Wednesday",""],
        "Thursday":[ "Thursday",""],
        "Friday":[ "Friday",""],
        "Saturday":[ "Saturday",""],
        "Sunday":[ "Sunday",""]


    },
    rewrite:function(pageData){
        var element={};
//        pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
//        pageData.setting_sys_time_list_ul1.Data=[];
//        $.each(pageData.operateData.curdatalist, function (k, v) {
//            element.setting_sys_time_list_img1={};
//            element.setting_sys_time_list_txt1={};
//            if(pageData.operateData.curselectindex==k)
//            {
//                element.setting_sys_time_list_img1.Data="img/selectedBall.png";
//            }
//            else
//            {
//                element.setting_sys_time_list_img1.Data="img/unselectedBall.png";
//            }
//            element.setting_sys_time_list_txt1.Data= v;
//            pageData.setting_sys_time_list_ul1.Data.push(_cloneObj(element));
//        })

        pageData.setting_sys_weekly_ul1.Data=[];
        $.each(pageData.operateData.weeklist, function (k, v) {
            element.setting_sys_weekly_img1={};
            element.setting_sys_weekly_txt1={};
            element.setting_sys_weekly_img1.Data="img/unselectedBall.png";
            element.setting_sys_weekly_txt1.Data= v;
            pageData.setting_sys_weekly_ul1.Data.push(_cloneObj(element));
        })
        if(!!pageData.operateData.curselectlist&&pageData.operateData.curselectlist.length>0)        {
            $.each(pageData.operateData.curselectlist, function (key, value) {
                if(value==1)
                {
                   pageData.setting_sys_weekly_ul1.Data[key].setting_sys_weekly_img1.Data= "img/selectedBall.png";
                }
                else
                {
                    pageData.setting_sys_weekly_ul1.Data[key].setting_sys_weekly_img1.Data= "img/unselectedBall.png";
                }
            })

        }
        else
        {
            pageData.operateData.curselectlist=[];
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_mt_ul1").css("float","left");
            $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
            $(".setting_sys_list1_srcobar_container").css("float","right");
            $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0");

        }
        else {
            $(".setting_sys_mt_ul1").css("float","right");
            $(".setting_sys_mt_ul1").css("margin","0 65px 0 0");
            $(".setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px ");

        }

    }

};
function SettingweeklyopenHandler()
{
    UpdataweeklyScrollBar(this.data);
    if(PageDataSettingSysWeekly.setting_sys_weekly_ul1.Data.length>5)
    {
//        var index=this.page.getCaE("setting_sys_weekly_ul1").BeginIdx;
//        debugPrint("index"+index);
//
//        $("#setting_sys_weekly_srcollbar").css("top",parseInt(425/PageDataSettingSysWeekly.setting_sys_weekly_ul1.Data.length)*index);
        var index2=0;
        var index=this.page.getCaE("setting_sys_weekly_ul1").SelectedIndex;
        if(index>4)
        {
            index2=index-4;
        }
        debugPrint("index"+index);
        $("#setting_sys_weekly_srcollbar").css("top",parseInt(425/PageDataSettingSysWeekly.setting_sys_weekly_ul1.Data.length)*index2);
        if(index<4)
        {
            $("#setting_sys_weekly_ul1").css("top","0px");
            PageDataSettingSysWeekly.operateData.begingindex=0;
        }else
        {
            $("#setting_sys_weekly_ul1").css("top","-"+95*(index-4)+"px");
            PageDataSettingSysWeekly.operateData.begingindex=index-4;
        }
        debugPrint("PageDataSettingSysWeekly.operateData.begingindex"+PageDataSettingSysWeekly.operateData.begingindex);
    }
    else
    {   PageDataSettingSysWeekly.operateData.begingindex=0;
        var temp=610-(5-PageDataSettingSysWeekly.setting_sys_weekly_ul1.Data.length)*95
        $("#setting_sys_weekly").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sys_weekly").css("top",height+'px');
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".setting_sys_mt_ul1").css("float","left");
        $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
        $(".setting_sys_list1_srcobar_container").css("float","right");
        $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0");

    }
    else {
        $(".setting_sys_mt_ul1").css("float","right");
        $(".setting_sys_mt_ul1").css("margin","0 65px 0 0");
        $(".setting_sys_list1_srcobar_container").css("float","left");
        $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px ");

    }

}

function SettingSysweeklyPageonDestroy()
{
    hiWebOsFrame.settingssysweekly=null;
}
function UpdataweeklyScrollBar(pageData)
{
    var i=pageData.setting_sys_weekly_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_weekly_srcollbar").css("height",temp);
        $("#setting_sys_weekly_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_weekly_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);

}

function SettingSysweeklyEnHandler()
{
    //var i= _getIndex(this.page.operateData.curselectlist,this.SelectedIndex);
//    if(i>=0)
//    {
//        this.page.operateData.curselectlist.splice(i,1);
//    }
//    else
//    {
//        this.page.operateData.curselectlist.push(this.SelectedIndex);
//
//    }
    if(this.page.operateData.curselectlist[this.SelectedIndex]==1)
    {
        this.page.operateData.curselectlist[this.SelectedIndex]=0;
    }
    else
    {
        this.page.operateData.curselectlist[this.SelectedIndex]=1;
    }
    if(this.page.operateData.parentpage==0)//power on
    {
        // todo js set
        model.timerfunc.setAlarmWeekly(this.page.operateData.curselectlist)
        debugPrint("set the setAlarmWeekly!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(this.page.operateData.curselectlist));
        PageDataSettingTimePoweron.operateData.curselectlist=this.page.operateData.curselectlist;
        SetRecentUse("Time",4,SYSTEM_TIME);
    }
    else if(this.page.operateData.parentpage==1)//power off
    {
        model.timerfunc.setStandbyWeekly(this.page.operateData.curselectlist)
        debugPrint("set the setStandbyWeekly!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(this.page.operateData.curselectlist));
        PageDataSettingtimePoweroff.operateData.curselectlist=this.page.operateData.curselectlist;
        SetRecentUse("Time",4,SYSTEM_TIME);
    }
    else if(this.page.operateData.parentpage==2)//security loc time
    {
     //todo
        var data=[];
        data.push(this.SelectedIndex);
        model.parentlock.setEndWeekly(data);
        debugPrint("set the setEndWeekly!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data));
        PageDataSettingSysBlocktime.operateData.curweekly=this.page.operateData.curselectlist;
        SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);
    }
    this.page.rewriteDataOnly();

}
//function closepage()
//{
//    hiWebOsFrame.settingssystimelist.close();
//    debugPrint("open !!!!!!!!!!!!!!!!!!!");
//    hiWebOsFrame.settingssystime.open();
//    hiWebOsFrame.settingssystime.hiFocus();
//    hiWebOsFrame.settingssystime.rewriteDataOnly();
//
//}
function SettingSysweeklyEscHandler()
{
    if(this.page.operateData.parentpage==0)//poweronfre
    {
        this.page.close();
//        hiWebOsFrame.settingssystimestandby.open();
//        hiWebOsFrame.settingssystimestandby.hiFocus();
        hiWebOsFrame.settingssystimepoweron.open();
        hiWebOsFrame.settingssystimepoweron.hiFocus();

    }
    else if(this.page.operateData.parentpage==1)
    {
        this.page.close();
        hiWebOsFrame.settingssystimepoweroff.open();
        hiWebOsFrame.settingssystimepoweroff.hiFocus();
    }
    else if(this.page.operateData.parentpage==2)
    {
        this.page.close();
        hiWebOsFrame.settingsysblocktime.open();
        hiWebOsFrame.settingsysblocktime.hiFocus();
    }


}
function SettingSysweeklyUpHandler()
{
//    var temp=PageDataSettingSysWeekly.setting_sys_weekly_ul1.Data.length;
//    if(PageDataSettingSysWeekly.setting_sys_weekly_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
//    {
//        var temp=this.SelectedIndex*PageDataSettingSysWeekly.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_weekly_srcollbar").css("top",temp);
//
//    }

    if(PageDataSettingSysWeekly.operateData.begingindex>this.SelectedIndex)
    {
        PageDataSettingSysWeekly.operateData.begingindex=PageDataSettingSysWeekly.operateData.begingindex-1;
        debugPrint("PageDataSettingSysWeekly.operateData.begingindex"+PageDataSettingSysWeekly.operateData.begingindex);
        var temp=parseInt(PageDataSettingSysWeekly.operateData.begingindex*PageDataSettingSysWeekly.operateData.step);
        $("#setting_sys_weekly_srcollbar").css("top",temp);
        {
            $("#setting_sys_weekly_ul1").css("top","-"+95*(PageDataSettingSysWeekly.operateData.begingindex)+"px");
        }

    }
}
function SettingSysweeklyDownHandler()
{
//    if(this.SelectedIndex < PageDataSettingSysWeekly.setting_sys_weekly_ul1.Data.length&&this.SelectedIndex>4)
//    {
//
//        var temp=(this.SelectedIndex-4)*PageDataSettingSysWeekly.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_weekly_srcollbar").css("top",temp);
//
//    }

    if((PageDataSettingSysWeekly.operateData.begingindex+4)<this.SelectedIndex)
    {
        var temp=parseInt((this.SelectedIndex-4)*PageDataSettingSysWeekly.operateData.step);
        $("#setting_sys_weekly_srcollbar").css("top",temp);
        $("#setting_sys_weekly_ul1").css("top","-"+95*(this.SelectedIndex-4)+"px");
        PageDataSettingSysWeekly.operateData.begingindex=this.SelectedIndex-4;
        debugPrint("PageDataSettingSysWeekly.operateData.begingindex"+PageDataSettingSysWeekly.operateData.begingindex);
    }
}
