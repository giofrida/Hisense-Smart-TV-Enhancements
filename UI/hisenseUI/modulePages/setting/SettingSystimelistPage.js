/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSystimelistPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_time_list_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_time_list_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//          "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },
//                    "classes": {
//                        "normal": "listNormal", "focus": "listFocus", "disable": "listDisable", "selected": "listSelected"
//                    },
            "handler": {
                "befEnterHandler": "SettingSystimeListEnHandler",
                "aftDownHandler": "SettingSystimeListDownHandler",
                "aftUpHandler": "SettingSystimeListUpHandler",
                "aftEscHandler": "SettingSystimeListEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_time_list_txt1",
                    "description": "名称",
                    "CaEType": "span",
                    enableHtml: true
                },
                {
                    "id": "setting_sys_time_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_time_list_txt1", "setting_sys_time_list_img1"]
               // "PageSize":5

            }
        }
    ];

    return PageDataSettingSystimeList;
}
var PageDataSettingSystimeList={

    "setting_sys_time_list_title":{Data:"Location"},
    "setting_sys_time_list_ul1": {Data:[
        {
            "setting_sys_time_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_time_list_txt1": {Data:"c"}
        },
        {
            "setting_sys_time_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_time_list_txt1": {Data:"d"}
        },
        {
            "setting_sys_time_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_time_list_txt1": {Data:"e"}
        },
        {
            "setting_sys_time_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_time_list_txt1": {Data:"f"}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        //["zone","format","sleep","daylightsaving],
        "curoption":"",
        "titlelist":["Time Zone","Time Format","Sleep Timer","Daylight Savings","Time Mode","HDMI 2.0 Format"],
        "curtitle":0,
        "curselectindex":0,
        "curdatalist":["USA","Canada","Mexico"]


    },
    "langData":{
        "Time Mode": [],
        "HDMI 2.0 Format":[],
        "Time Zone:": [],
        "Eastern": ["Eastern","Est","Oriental"],
        "Indiana": ["Indiana","Indiana","Indiana"],
        "Central": ["Central","Centre","Central"],
        "Mountain": ["Mountain","Montagne","Montaña"],
        "Arizona": ["Arizona","Arizona","Arizona"],
        "Pacific": ["Pacific","Pacifique","Pacífico"],
        "Alaska": ["Alaska","Alaska","Alaska"],
        "Hawaii": ["Hawaii","Hawaii","Hawai"],
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
        "Brasilia Time -2 (UTC-5)":[],
        "12-hour": ["12-hour","12 heures","12 horas"],
        "24-hour": ["24-hour","24 heures","24 horas"],
        "Off":[],
        "Time Zone": [],
        "Time Format": [],
        "Sleep Timer": [],
        "Daylight Savings":[],
        "Manual":[],
        "Auto":[],
        "10 Minutes": ["10 Minutes","10 Minutes","10 Minutos"],
        "20 Minutes": ["20 Minutes","20 Minutes","20 Minutos"],
        "30 Minutes": ["30 Minutes","30 Minutes","30 Minutos"],
        "40 Minutes": ["40 Minutes","40 Minutes","40 Minutos"],
        "50 Minutes": ["50 Minutes","50 Minutes","50 Minutos"],
        "60 Minutes": ["60 Minutes","60 Minutes","60 Minutos"],
        "90 Minutes": ["90 Minutes","90 Minutes","90 Minutos"],
        "120 Minutes": ["120 Minutes","120 Minutes","120 Minutos"]
    },
    rewrite:function(pageData){
        var element={};
        if(PageDataSettingSystimeList.operateData.curoption=="zone")
        {
            pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[0];

        }
        else if(PageDataSettingSystimeList.operateData.curoption=="format")
        {
            pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[1];

        }
        else if(PageDataSettingSystimeList.operateData.curoption=="sleep")
        {
            pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[2];

        }
        else if(PageDataSettingSystimeList.operateData.curoption=="daylightsaving")
        {
            pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[3];
        }
        else if( PageDataSettingSystimeList.operateData.curoption=="timemode")
        {
            pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[4];
        }
        else if( PageDataSettingSystimeList.operateData.curoption=="signalformat")
        {
            pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[5];
        }

       // pageData.setting_sys_time_list_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
        pageData.setting_sys_time_list_ul1.Data=[];
        $.each(pageData.operateData.curdatalist, function (k, v) {
            element.setting_sys_time_list_img1={};
            element.setting_sys_time_list_txt1={};
            if(pageData.operateData.curselectindex==k)
            {
                element.setting_sys_time_list_img1.Data="img/selectedBall.png";
            }
            else
            {
                element.setting_sys_time_list_img1.Data="img/unselectedBall.png";
            }
            element.setting_sys_time_list_txt1.Data= v;
            pageData.setting_sys_time_list_ul1.Data.push(_cloneObj(element));
        });
        pageData.setting_sys_time_list_ul1.SelectedIndex=pageData.operateData.curselectindex;
//        debugPrint("rewite list2"+JSON.stringify(pageData.operateData.curvolumlist));
//        var element={};
//        pageData.setting_sys_list2_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
//        pageData.setting_sys_list2_ul1.Data=[];
//        if(pageData.operateData.curstep==0)
//        {
//            $.each(pageData.operateData.curvolumlist, function (k, v) {
//                element.setting_sys_list2_img1={};
//                element.setting_sys_list2_txt1={};
//                if(pageData.operateData.curselectpartition==k)
//                {
//                    element.setting_sys_list2_img1.Data="img/selectedBall.png";
//                }
//                else
//                {
//                    element.setting_sys_list2_img1.Data="img/unselectedBall.png";
//                }
//                element.setting_sys_list2_txt1.Data= v.name;
//                pageData.setting_sys_list2_ul1.Data.push(_cloneObj(element));
//            })
//            if(pageData.operateData.curselectpartition!=null)
//            {
//                pageData.setting_sys_list2_ul1.SelectedIndex=pageData.operateData.curselectpartition;
//            }
//        }
//        else if(pageData.operateData.curstep==1)// timeshift select memory
//        {
//           // debugPrint("rewite list2 step=1　select"+pageData.operateData.curselectpartition)
//            for(var i=0;i<pageData.operateData.memindex.length;i++)
//            {
//                //debugPrint("gggggg"+pageData.operateData.curvolumlist[pageData.operateData.curselectpartition].free)
//                 if(pageData.operateData.curvolumlist[pageData.operateData.curselectpartition].free>pageData.operateData.memindex[i]*1024)
//                 {
//                  //  debugPrint("1111111111111111111111")
//                    element.setting_sys_list2_img1={};
//                    element.setting_sys_list2_txt1={};
//                    if(pageData.operateData.curselectmemmory==i)
//                    {
//                        element.setting_sys_list2_img1.Data="img/selectedBall.png";
//                    }
//                    else
//                    {
//                        element.setting_sys_list2_img1.Data="img/unselectedBall.png";
//                    }
//                    element.setting_sys_list2_txt1.Data= pageData.operateData.memlist[i];
//                    pageData.setting_sys_list2_ul1.Data.push(_cloneObj(element));
//                 }
//
//             }
//            element.setting_sys_list2_img1={};
//            element.setting_sys_list2_txt1={};
//            if(pageData.operateData.curselectmemmory==255)
//            {
//                element.setting_sys_list2_img1.Data="img/selectedBall.png";
//            }
//            else
//            {
//                element.setting_sys_list2_img1.Data="img/unselectedBall.png";
//            }
//            element.setting_sys_list2_txt1.Data="No limit";
//            pageData.setting_sys_list2_ul1.Data.push(_cloneObj(element));
//            if(pageData.operateData.curselectmemmory==255)
//            {
//                pageData.setting_sys_list2_ul1.SelectedIndex=pageData.setting_sys_list2_ul1.Data.length-1;
//            }
//            else
//            {
//                pageData.setting_sys_list2_ul1.SelectedIndex=pageData.operateData.curselectmemmory;
//            }
////            pageData.setting_sys_list2_ul1.Data.push(_cloneObj(element));
//        }
        // debugPrint("rewite list2"+JSON.stringify(pageData.setting_sys_list2_ul1));
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_mt_ul1").css("float","left")
            $(".setting_sys_mt_ul1").css("margin","0 0 0 65px")
            $(".setting_sys_list1_srcobar_container").css("float","right");
            $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0");
        }
        else {
            $(".setting_sys_mt_ul1").css("float","right")
            $(".setting_sys_mt_ul1").css("margin","0 65px 0 0")
            $(".setting_sys_list1_srcobar_container").css("float","left")
            $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px ")


        }
    }

};
var timelistbeginindex=0;
function timelistopenHandler()
{
    UpdatatimelistScrollBar(this.data);
    if(PageDataSettingSystimeList.setting_sys_time_list_ul1.Data.length>5)
    {   var index2=0;
        var index=this.page.getCaE("setting_sys_time_list_ul1").SelectedIndex;
        if(index>4)
        {
            index2=index-4;
        }
        debugPrint("index"+index);
        $("#setting_sys_time_list_srcollbar").css("top",parseInt(425/PageDataSettingSystimeList.setting_sys_time_list_ul1.Data.length)*index2);
        if(index<4)
        {
            $("#setting_sys_time_list_ul1").css("top","0px");
            timelistbeginindex=0;
        }else
        {
            $("#setting_sys_time_list_ul1").css("top","-"+95*(index-4)+"px");
            timelistbeginindex=index-4;
        }
        debugPrint("timelistbeginindex"+timelistbeginindex);
    }
    else
    {
        timelistbeginindex=0;
        var temp=610-(5-PageDataSettingSystimeList.setting_sys_time_list_ul1.Data.length)*95
        $("#setting_sys_time_list").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sys_time_list").css("top",height+'px');
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".setting_sys_mt_ul1").css("float","left")
        $(".setting_sys_mt_ul1").css("margin","0 0 0 65px")
        $(".setting_sys_list1_srcobar_container").css("float","right");
        $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0");
    }
    else {
        $(".setting_sys_mt_ul1").css("float","right")
        $(".setting_sys_mt_ul1").css("margin","0 65px 0 0")
        $(".setting_sys_list1_srcobar_container").css("float","left")
        $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px ")


    }

}

function SettingSystimelistonDestroy()
{
    hiWebOsFrame.settingssystimelist=null;
}
function UpdatatimelistScrollBar(pageData)
{
    var i=pageData.setting_sys_time_list_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_time_list_srcollbar").css("height",temp);
        $("#setting_sys_time_list_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_time_list_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=425/i;

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

function SettingSystimeListEnHandler()
{
    hiWebOsFrame.lockAllKeys("setting");
    try
    {
    this.page.operateData.curselectindex=this.SelectedIndex;
    //todo the js
    if( PageDataSettingSystimeList.operateData.curoption=="zone")
    {
        ////todo the js
        try
        {
            if(PageDataSettingSysTime.operateData.curcountry=="AUS")
            {
                var tempvalue=this.SelectedIndex;
                if(tempvalue==8)
                {
                    model.timerfunc.setTimeZoneSyncFlag(1);
                    debugPrint(" set the setTimeZoneSyncFlag1");
                }
                else
                {
					model.timerfunc.setTimeZoneSyncFlag(0);
                    model.timerfunc.setTimeZone(tempvalue);
                }

            }
            else
            {
                if(65535==PageDataSettingSysTime.operateData.zoncode[PageDataSettingSysTime.operateData.curcountryzonecode[this.SelectedIndex]])
                {
                    model.timerfunc.setTimeZoneSyncFlag(1);
                    debugPrint(" set the setTimeZoneSyncFlag 1")
                }
                else
                {
				   model.timerfunc.setTimeZoneSyncFlag(0);
                   model.timerfunc.setNewTimeZone(PageDataSettingSysTime.operateData.zoncode[PageDataSettingSysTime.operateData.curcountryzonecode[this.SelectedIndex]]);

                }
            }
        }
        catch (e)
        {
            debugE(e.message)
        }

        RefreshCurTime();
        PageDataSettingSysTime.operateData.curtimezone=this.SelectedIndex;
    }
    else if( PageDataSettingSystimeList.operateData.curoption=="format")
    {
        //todo the js
        model.timerfunc.setTimeFormat(this.SelectedIndex);
        PageDataSettingSysTime.operateData.curtimeforma=this.SelectedIndex;
    }
    else if( PageDataSettingSystimeList.operateData.curoption=="sleep")
    {
        //todo the js
        model.timerfunc.setHotelmodeSleepTimer(this.SelectedIndex);
        PageDataSettingSysTime.operateData.cursleeptimer=this.SelectedIndex;
    }
    else if( PageDataSettingSystimeList.operateData.curoption=="daylightsaving")
    {
        if(this.SelectedIndex==0)
        {
            model.timerfunc.setDaylightSavings(1);
        }
        else
        {
            model.timerfunc.setDaylightSavings(0);
        }

        PageDataSettingSysTime.operateData.curdaylightsaving=this.SelectedIndex;
        RefreshCurTime();
    }
    else if( PageDataSettingSystimeList.operateData.curoption=="timemode")
    {
        model.timerfunc.setSyncMode(this.SelectedIndex);
        PageDataSettingSysTime.operateData.cursyncmode = this.SelectedIndex;
        //RefreshCurTime();
    }
    else if( PageDataSettingSystimeList.operateData.curoption=="signalformat")
    {
        try{
            model.cec.setHdmiSignalFormat(this.SelectedIndex);
        }catch (e)
        {debugE(e.message)}
        PageDateSettingSysCec.operateData.curSignalFormat = this.SelectedIndex;
        //RefreshCurTime();
    }
    if(PageDataSettingSystimeList.operateData.curoption=="signalformat"){
        SetRecentUse("HDMI & CEC Function",4,RECENT_CEC);
        hiWebOsFrame.settingssyscec.rewriteDataOnly();
    }else {
        hiWebOsFrame.settingssystimelist.rewriteDataOnly();
        SetRecentUse("Time",4,SYSTEM_TIME);

    }
    setTimeout(closelist2page,500);
    }catch (e)
    {
        debugE(e.message);
        hiWebOsFrame.unLockAllKeys("setting");
    }
}
function closelist2page()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
    hiWebOsFrame.settingssystimelist.close();
    debugPrint("open !!!!!!!!!!!!!!!!!!!");
    hiWebOsFrame.settingssystimelist.origin.rewriteDataOnly();
    hiWebOsFrame.settingssystimelist.origin.open();
        if(PageDataSettingSystimeList.operateData.curoption=="signalformat"){
            hiWebOsFrame.settingssystimelist.origin.hiFocus("setting_sys_cec_hdmi_btn");

        }
        else {
            hiWebOsFrame.settingssystimelist.origin.hiFocus();

        }

     }
    else
    {
        hiWebOsFrame.settingssystimelist.close();
    }
    hiWebOsFrame.unLockAllKeys("setting");
}
function SettingSystimeListEscHandler()
{
    this.page.close();
    hiWebOsFrame.settingssystimelist.origin.rewriteDataOnly();
    hiWebOsFrame.settingssystimelist.origin.open();
    if(PageDataSettingSystimeList.operateData.curoption=="signalformat"){
        hiWebOsFrame.settingssystimelist.origin.hiFocus("setting_sys_cec_hdmi_btn");

    }
    else {
        hiWebOsFrame.settingssystimelist.origin.hiFocus();

    }

}
function SettingSystimeListUpHandler()
{
//    var temp=PageDataSettingSystimeList.setting_sys_time_list_ul1.Data.length;
//    if(PageDataSettingSystimeList.setting_sys_time_list_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
//    {
//        var temp=this.SelectedIndex*PageDataSettingSystimeList.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_time_list_srcollbar").css("top",temp);
//
//    }
    if(timelistbeginindex>this.SelectedIndex)
    {
        timelistbeginindex=timelistbeginindex-1;
        debugPrint("timelistbeginindex"+timelistbeginindex);
        var temp=parseInt(timelistbeginindex*PageDataSettingSystimeList.operateData.step);
        $("#setting_sys_time_list_srcollbar").css("top",temp);
        {
            $("#setting_sys_time_list_ul1").css("top","-"+95*(timelistbeginindex)+"px");
        }

    }


}
function SettingSystimeListDownHandler()
{
//    if(this.SelectedIndex < PageDataSettingSystimeList.setting_sys_time_list_ul1.Data.length&&this.SelectedIndex>4)
//    {
//
//        var temp=(this.SelectedIndex-4)*PageDataSettingSystimeList.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_time_list_srcollbar").css("top",temp);
//
//    }
    if((timelistbeginindex+4)<this.SelectedIndex)
    {
        var temp=parseInt((this.SelectedIndex-4)*PageDataSettingSystimeList.operateData.step);
        $("#setting_sys_time_list_srcollbar").css("top",temp);
        $("#setting_sys_time_list_ul1").css("top","-"+95*(this.SelectedIndex-4)+"px");
        timelistbeginindex=this.SelectedIndex-4;
        debugPrint("timelistbeginindex"+timelistbeginindex);
    }
}


