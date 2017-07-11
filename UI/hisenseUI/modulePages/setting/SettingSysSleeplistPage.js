/**
 * Created by Administrator on 14-11-25.
 */
function getSettingSleeplistPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sleep_list_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sleep_list_ul1",
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
                "befEnterHandler": "SettingSleepListEnHandler", "aftDownHandler": "SettingSleepListDownHandler",
                "aftUpHandler": "SettingSleepListUpHandler","aftEscHandler": "SettingSleepListEscHandler",
                "keyCCHandler":"SettingSleepListCcKeyHandler"
            },
            oriCaE: [

                {
                    "id": "setting_sleep_list_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sleep_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_sleep_list_txt1", "setting_sleep_list_img1"]
                //"PageSize":5
            }
        }
    ];
    settingSleepinit();
    return PageDataSleepList;
}
var PageDataSleepList={

    "setting_sleep_list_title":{Data:"Sleep Timer"},
    "setting_sleep_list_ul1": {Data:[
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"Off"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/uC OnnselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"10 Minutes"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"20 Minutes"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"30 Minutes"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"40 Minutes"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"50 Minutes"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"60 Minutes"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"90 Minutes"}
        },
        {
            "setting_sleep_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sleep_list_txt1": {Data:"120 Minutes"}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curselectindex":0,
        "beginindex":0

    },
    "langData":{
        "Sleep Timer": [],
        "Off":[],
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
        //  pageData.setting_cc_list_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
        // pageData.setting_cc_list_ul1.Data=[];
        $.each(pageData.setting_sleep_list_ul1.Data, function (k, v) {

            if(pageData.operateData.curselectindex==k)
            {
                pageData.setting_sleep_list_ul1.Data[k].setting_sleep_list_img1.Data="img/selectedBall.png";
            }
            else
            {
                pageData.setting_sleep_list_ul1.Data[k].setting_sleep_list_img1.Data="img/unselectedBall.png";
            }

        })

        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_mt_ul1").css("float","left")
            $(".setting_sys_mt_ul1").css("margin","0 0 0 65px")
            // $("#setting_sys_list1_srcobar_container").css("float","right")
        }
        else {
            $(".setting_sys_mt_ul1").css("float","right")
            $(".setting_sys_mt_ul1").css("margin","0 65px 0 0")
            // $("#setting_sys_list1_srcobar_container").css("float","left")

        }

    }

};

function SleeplistopenHandler()
{
    UpdateSleeplistScrollBar(this.data);
    if(PageDataSleepList.setting_sleep_list_ul1.Data.length>5)
    {
//        var index=this.page.getCaE("setting_sleep_list_ul1").BeginIdx;
//        debugPrint("index"+index);
//        $("#setting_sleep_list_srcollbar").css("top",parseInt(425/PageDataSleepList.setting_sleep_list_ul1.Data.length)*index);
        var index2=0;
        var index=this.page.getCaE("setting_sleep_list_ul1").SelectedIndex;
        if(index>4)
        {
            index2=index-4;
        }
        debugPrint("index"+index);
        $("#setting_sleep_list_srcollbar").css("top",parseInt(425/PageDataSleepList.setting_sleep_list_ul1.Data.length)*index2);
        if(index<4)
        {
            $("#setting_sleep_list_ul1").css("top","0px");
            PageDataSleepList.operateData.beginindex=0;
        }else
        {
            $("#setting_sleep_list_ul1").css("top","-"+95*(index-4)+"px");
            PageDataSleepList.operateData.beginindex=index-4;
        }
        debugPrint("PageDataSleepList.operateData.beginindex"+PageDataSleepList.operateData.beginindex);
    }
    else
    {   var temp=610-(5-PageDataSleepList.setting_sleep_list_ul1.Data.length)*95;
        $("#setting_sleep_list").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sleep_list").css("top",height+'px');
    }
}

function SettingSleeplistPageonDestroy()
{
    hiWebOsFrame.settingsleeplist=null;
}
function UpdateSleeplistScrollBar(pageData)
{
    var i=pageData.setting_sleep_list_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sleep_list_srcollbar").css("height",temp);
        $("#setting_sleep_list_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sleep_list_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=425/i;
}


function SettingSleepListEnHandler()
{
    this.page.operateData.curselectindex=this.SelectedIndex;
    //todo
    model.timerfunc.setHotelmodeSleepTimer(this.SelectedIndex);
    hiWebOsFrame.settingsleeplist.rewriteDataOnly();
    setTimeout(closesleeppage,1000);

}

function closesleeppage()
{
    if (hiWebOsFrame.isCurrentModule("sleep"))
    {
        hiWebOsFrame.settingsleeplist.close();
//        hiWebOsFrame.settingsleeplist.origin.open();
//        hiWebOsFrame.settingsleeplist.origin.hiFocus();
        SleepOnDestroyCallback(hiWebOsFrame.settingsleeplist.origin);
        hiWebOsFrame.settingsleeplist.destroy();
    }
    else
    {
        hiWebOsFrame.settingsleeplist.close();
        hiWebOsFrame.settingsleeplist.destroy();
    }

}

function SettingSleepListEscHandler()
{
    if(!!hiWebOsFrame.settingsleeplist.origin)
    {
//        hiWebOsFrame.settingsleeplist.origin.open();
//        hiWebOsFrame.settingsleeplist.origin.hiFocus();
        SleepOnDestroyCallback(hiWebOsFrame.settingsleeplist.origin);
        hiWebOsFrame.settingsleeplist.destroy();
    }else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        closePagesOrModuleByPage(hiWebOsFrame.settingsleeplist);
        hiWebOsFrame.settingsleeplist.destroy();
    }
}
function SettingSleepListUpHandler()
{
//    var temp=PageDataSleepList.setting_sleep_list_ul1.Data.length;
//    if(PageDataSleepList.setting_sleep_list_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
//    {
//        var temp=this.SelectedIndex*PageDataSleepList.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sleep_list_srcollbar").css("top",temp);
//
//    }
    if(PageDataSleepList.operateData.beginindex>this.SelectedIndex)
    {
        PageDataSleepList.operateData.beginindex=PageDataSleepList.operateData.beginindex-1;
        debugPrint("PageDataSleepList.operateData.beginindex"+PageDataSleepList.operateData.beginindex);
        var temp=parseInt(PageDataSleepList.operateData.beginindex*PageDataSleepList.operateData.step);
        $("#setting_sleep_list_srcollbar").css("top",temp);
        {
            $("#setting_sleep_list_ul1").css("top","-"+95*(PageDataSleepList.operateData.beginindex)+"px");
        }

    }
}
function SettingSleepListDownHandler()
{
//    if(this.SelectedIndex < PageDataSleepList.setting_sleep_list_ul1.Data.length&&this.SelectedIndex>4)
//    {
//
//        var temp=(this.SelectedIndex-4)*PageDataSleepList.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sleep_list_srcollbar").css("top",temp);
//    }
    if((PageDataSleepList.operateData.beginindex+4)<this.SelectedIndex)
    {
        var temp=parseInt((this.SelectedIndex-4)*PageDataSleepList.operateData.step);
        $("#setting_sleep_list_srcollbar").css("top",temp);
        $("#setting_sleep_list_ul1").css("top","-"+95*(this.SelectedIndex-4)+"px");
        PageDataSleepList.operateData.beginindex=this.SelectedIndex-4;
        debugPrint("PageDataSleepList.operateData.beginindex"+PageDataSleepList.operateData.beginindex);
    }
}

function settingSleepinit()
{
    try
    {
        var index=model.timerfunc.getHotelmodeSleepTimer();
        debugPrint("getHotelmodeSleepTimer is-----------------"+index);
        PageDataSleepList.operateData.curselectindex=index;

    }catch (e)
    {
        debugPrint(e.message);
    }

}


