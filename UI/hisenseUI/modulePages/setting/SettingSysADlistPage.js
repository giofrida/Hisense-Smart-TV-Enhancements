/**
 * Created by jiaguili on 15-2-4.
 */

function getSettingSysADlistPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_ad_list_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_ad_list_ul1",
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
                "befEnterHandler": "SettingAdList1EnHandler", "aftDownHandler": "SettingAdList1DownHandler",
                "aftUpHandler": "SettingAdList1UpHandler","aftEscHandler": "SettingAdList1EscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_ad_list_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_ad_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_sys_ad_list_txt1", "setting_sys_ad_list_img1"],
                "PageSize":5
            }
        }
    ];
    SettingAdList1init();
    return PageDataSettingAdList1;
}
var PageDataSettingAdList1={

    "setting_sys_ad_list_title":{Data:"Subtitle Mode"},
    "setting_sys_ad_list_ul1": {Data:[
        {
            "setting_sys_ad_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_ad_list_txt1": {Data:"Off"}
        },
        {
            "setting_sys_ad_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_ad_list_txt1": {Data:"On"}
        },
        {
            "setting_sys_ad_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_ad_list_txt1": {Data:"Hearing Impaired"}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curselectindex":0,
        "curdatalist":[]
    },
    "langData":{
        "Subtitle Mode":[],
        "Off":[],
        "On": [],
        "Hearing Impaired":[]
    },
    rewrite:function(pageData){
        //  pageData.setting_cc_list_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
        // pageData.setting_cc_list_ul1.Data=[];
        var area=hiWebOsFrame.getCurrentArea();
        if(area=="EU")
        {

            pageData.operateData.curdatalist=["Off","On","Hearing Impaired"];
        }
        else
        {

            pageData.operateData.curdatalist=["Off","On"];
        }
        var element={};
        pageData.setting_sys_ad_list_ul1.Data=[];
         $.each(pageData.operateData.curdatalist, function (k, v) {
                element.setting_sys_ad_list_img1={};
                element.setting_sys_ad_list_txt1={};
                if(pageData.operateData.curselectindex==k)
                {
                    element.setting_sys_ad_list_img1.Data="img/selectedBall.png";
                }
                else
                {
                    element.setting_sys_ad_list_img1.Data="img/unselectedBall.png";
                }
                element.setting_sys_ad_list_txt1.Data= v;
                pageData.setting_sys_ad_list_ul1.Data.push(_cloneObj(element));
            });
        pageData.setting_sys_ad_list_ul1.SelectedIndex=pageData.operateData.curselectindex;
    }
};

function SysADlistopenHandler()
{
    UpdataADlist1ScrollBar(this.data);
    if(PageDataSettingAdList1.setting_sys_ad_list_ul1.Data.length>5)
    {
        var index=this.page.getCaE("setting_sys_ad_list_ul1").BeginIdx;
        debugPrint("index"+index);
        $("#setting_sys_ad_list_srcollbar").css("top",parseInt(425/PageDataSettingAdList1.setting_sys_ad_list_ul1.Data.length)*index);
    }
    else
    {   var temp=610-(5-PageDataSettingAdList1.setting_sys_ad_list_ul1.Data.length)*95;
        $("#setting_sys_ad_list").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sys_ad_list").css("top",height+'px');
    }
}

function SettingSysADlistPageonDestroy()
{
    hiWebOsFrame.settingadlist1=null;
}
function UpdataADlist1ScrollBar(pageData)
{
    var i=pageData.setting_sys_ad_list_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_ad_list_srcollbar").css("height",temp);
        $("#setting_sys_ad_list_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_ad_list_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);
}


function SettingAdList1EnHandler()
{
    this.page.operateData.curselectindex=this.SelectedIndex;
    //todo
    SetSubtitlelMode(this.SelectedIndex);
    PageDataSettingSysAd.operateData.cursubmode=this.SelectedIndex;
    hiWebOsFrame.settingadlist1.rewriteDataOnly();
    SetRecentUse("Subtitle Mode",4,RECNT_AD);
    setTimeout(closeadlist1page,1000);

}

function closeadlist1page()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingadlist1.close();
        hiWebOsFrame.settingssysad.rewriteDataOnly();
        hiWebOsFrame.settingssysad.open();
        hiWebOsFrame.settingssysad.hiFocus();

    }
    else
    {
        hiWebOsFrame.settingadlist1.close();
        hiWebOsFrame.settingadlist1.destroy();
    }
}

function SettingAdList1EscHandler()
{
    hiWebOsFrame.settingadlist1.close();
    hiWebOsFrame.settingssysad.rewriteDataOnly();
    hiWebOsFrame.settingssysad.open();
    hiWebOsFrame.settingssysad.hiFocus();
}
function SettingAdList1UpHandler()
{
    var temp=PageDataSettingAdList1.setting_sys_ad_list_ul1.Data.length;
    if(PageDataSettingAdList1.setting_sys_ad_list_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
    {
        var temp=this.SelectedIndex*PageDataSettingAdList1.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_sys_ad_list_srcollbar").css("top",temp);
    }
}
function SettingAdList1DownHandler()
{
    if(this.SelectedIndex < PageDataSettingAdList1.setting_sys_ad_list_ul1.Data.length&&this.SelectedIndex>4)
    {
        var temp=(this.SelectedIndex-4)*PageDataSettingAdList1.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_sys_ad_list_srcollbar").css("top",temp);

    }
}

function SettingAdList1init()
{
//    try
//    {
//        var index=model.basicSetting.getEnumDvbModeSubtitle();
//        debugPrint("get the subtitlt mode -----------------"+index);
//        PageDataccList.operateData.curselectindex=index;
//
//    }catch (e)
//    {
//        debugPrint(e.message);
//    }

}

