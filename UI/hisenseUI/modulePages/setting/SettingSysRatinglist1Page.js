/**
 * Created by Administrator on 14-9-15.
 */
function getSettingSysRatinglist1Data(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_tvrating_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_tvrating_ul1",
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
                "befEnterHandler": "SettingSysRatinglist1EnHandler", "aftDownHandler": "SettingSysRatinglist1DownHandler",
                "aftUpHandler": "SettingSysRatinglist1UpHandler","aftEscHandler": "SettingSysRatinglist1EscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_tvrating_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_tvrating_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_tvrating_txt1", "setting_sys_tvrating_img1"]
               // "PageSize":5

            }
        }
    ];
    Ratinglist1init();
    return PageDataSettingRatinglist1;
}
var PageDataSettingRatinglist1={

    "setting_sys_tvrating_title":{Data:"Program block"},
    "setting_sys_tvrating_ul1": {Data:[
        {
            "setting_sys_tvrating_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_tvrating_txt1": {Data:""}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curselectindex":0,
        "parentpage":["usmovie"],
        "curparent":0,
        "curdatalist":[],
        "beginindex":0,
        "titlelist":["Program Block"]


    },
    "langData":{
        "Program Block":[],
        "Below10":[],
        "Below12":[],
        "Below14":[],
        "Below16":[],
        "Below18":[],
        "None":[]

    },
    rewrite:function(pageData){
//        pageData.setting_sys_update_switch_ul1.Data=[];
        var element={};
        pageData.setting_sys_tvrating_title.Data=pageData.operateData.titlelist[pageData.operateData.curparent];
        pageData.setting_sys_tvrating_ul1.Data=[];
        if(!!pageData.operateData.curdatalist)
        {
        $.each(pageData.operateData.curdatalist, function (k, v) {
            element.setting_sys_tvrating_img1={};
            element.setting_sys_tvrating_txt1={};
//            if(pageData.operateData.curselectindex==0&&k==0)
//            {
//                element.setting_sys_tvrating_img1.Data="img/selectedBall.png";
//
//            }
//            else
            if(pageData.operateData.curselectindex==k)
            {
                element.setting_sys_tvrating_img1.Data="img/selectedBall.png";
            }
            else
            {
                element.setting_sys_tvrating_img1.Data="img/unselectedBall.png";
            }
            element.setting_sys_tvrating_txt1.Data= v;
            pageData.setting_sys_tvrating_ul1.Data.push(_cloneObj(element));
        })
        }
        pageData.setting_sys_tvrating_ul1.SelectedIndex=pageData.operateData.curselectindex;

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

function Ratinglist1openHandler()
{
    UpdataRatinglist1ScrollBar(this.data);
    if(PageDataSettingRatinglist1.setting_sys_tvrating_ul1.Data.length>5)
    {
        var index2=0;
        var index=this.page.getCaE("setting_sys_tvrating_ul1").SelectedIndex;
        if(index>4)
        {
            index2=index-4;
        }
        debugPrint("index"+index);
        $("#setting_sys_tvrating_srcollbar").css("top",parseInt(425/PageDataSettingRatinglist1.setting_sys_tvrating_ul1.Data.length)*index2);
        if(index<4)
        {
            $("#setting_sys_tvrating_ul1").css("top","0px");
            PageDataSettingRatinglist1.operateData.beginindex=0;
        }else
        {
            $("#setting_sys_tvrating_ul1").css("top","-"+95*(index-4)+"px");
            PageDataSettingRatinglist1.operateData.beginindex=index-4;
        }
        debugPrint("PageDataSettingRatinglist1.operateData.beginindex"+PageDataSettingRatinglist1.operateData.beginindex);


    }
    else
    {   var temp=610-(5-PageDataSettingRatinglist1.setting_sys_tvrating_ul1.Data.length)*95;
        $("#setting_sys_tvrating").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sys_tvrating").css("top",height+'px');
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

function SettingSysRatinglist1onDestroy()
{
    hiWebOsFrame.settingssysratinglist1=null;
}
function UpdataRatinglist1ScrollBar(pageData)
{
    var i=pageData.setting_sys_tvrating_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_tvrating_srcollbar").css("height",temp);
        $("#setting_sys_tvrating_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_tvrating_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);

}

function SettingSysRatinglist1EnHandler()
{
    this.page.operateData.curselectindex=this.SelectedIndex;
    if(this.page.operateData.curparent==0)
    {
        //todo
        try
        {
           model.parentlock.setNewAreaProgrammeLock(this.SelectedIndex);
        }catch (e)
        {debugE(e.message)}
        PageDataSettingSysSecurity.operateData.curratingselect=this.SelectedIndex;
    }
    hiWebOsFrame.settingssysratinglist1.rewriteDataOnly();
    SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);
    hiWebOsFrame.lockAllKeys("setting");
    setTimeout(closeratinglistpage,500);
}
function closeratinglistpage()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingssysratinglist1.close();
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
        hiWebOsFrame.settingssysratinglist1.destroy();
    }
    else
    {
        hiWebOsFrame.settingssysratinglist1.close();
        hiWebOsFrame.settingssysratinglist1.destroy();
    }
    hiWebOsFrame.unLockAllKeys("setting");
}
function SettingSysRatinglist1EscHandler()
{
    this.page.close();
    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();

}
function SettingSysRatinglist1UpHandler()
{

    if(PageDataSettingRatinglist1.operateData.beginindex>this.SelectedIndex)
    {
        PageDataSettingRatinglist1.operateData.beginindex=PageDataSettingRatinglist1.operateData.beginindex-1;
        debugPrint("PageDataSettingRatinglist1.operateData.beginindex"+PageDataSettingRatinglist1.operateData.beginindex);
        var temp=parseInt(PageDataSettingRatinglist1.operateData.beginindex*PageDataSettingRatinglist1.operateData.step);
        $("#setting_sys_tvrating_srcollbar").css("top",temp);
        {
            $("#setting_sys_tvrating_ul1").css("top","-"+95*(PageDataSettingRatinglist1.operateData.beginindex)+"px");
        }

    }
}
function SettingSysRatinglist1DownHandler()
{
    if((PageDataSettingRatinglist1.operateData.beginindex+4)<this.SelectedIndex)
    {
        var temp=parseInt((this.SelectedIndex-4)*PageDataSettingRatinglist1.operateData.step);
        $("#setting_sys_tvrating_srcollbar").css("top",temp);
        $("#setting_sys_tvrating_ul1").css("top","-"+95*(this.SelectedIndex-4)+"px");
        PageDataSettingRatinglist1.operateData.beginindex=this.SelectedIndex-4;
        debugPrint("PageDataSettingRatinglist1.operateData.beginindex"+PageDataSettingRatinglist1.operateData.beginindex);
    }
}

function Ratinglist1init()
{
    //todo to get the country list and selectindex

   // PageDataSettingRatinglist1.operateData.curselectindex=0;
}