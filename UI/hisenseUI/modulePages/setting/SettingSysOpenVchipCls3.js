/**
 * Created by Administrator on 14-10-30.
 */
function getSettingOpenvchipCls3PageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_openvichip_cls3_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_openvichip_cls3_ul1",
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
                "befEnterHandler": "SettingSysopenvichipEnHandler", "aftDownHandler": "SettingSysopenvichipDownHandler",
                "aftUpHandler": "SettingSysopenvichipUpHandler","aftEscHandler": "SettingSysopenvichipEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_openvichip_cls3_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_openvichip_cls3_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_openvichip_cls3_txt1", "setting_sys_openvichip_cls3_img1"],
                "PageSize":5

            }
        }
    ];
    OpenvchipCls3init()
    return PageDataSettingSysOpenvchipCls3;
}
var PageDataSettingSysOpenvchipCls3={

    "setting_sys_openvichip_cls3_title":{Data:"Open V-Chip"},
    "setting_sys_openvichip_cls3_ul1": {Data:[
        {
            "setting_sys_openvichip_cls3_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_openvichip_cls3_txt1": {Data:"On"}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curselectindex":0,
        "curdatalist":["openvichip3"],
        curselectlist:[0]

    },
    "langData":{
        "Adjust":[],
        "Open V-Chip": []

    },
    rewrite:function(pageData){
//        pageData.setting_sys_update_switch_ul1.Data=[];
        var element={};
        //pageData.setting_sys_tvrating_title.Data=pageData.operateData.titlelist[pageData.operateData.curparent];
        pageData.setting_sys_openvichip_cls3_ul1.Data=[];
        if(!!pageData.operateData.curdatalist)
        {
            $.each(pageData.operateData.curdatalist, function (k, v) {
                element.setting_sys_openvichip_cls3_img1={};
                element.setting_sys_openvichip_cls3_txt1={};
                element.setting_sys_openvichip_cls3_img1.Data="img/unselectedBall.png";
                element.setting_sys_openvichip_cls3_txt1.Data= v;
                pageData.setting_sys_openvichip_cls3_ul1.Data.push(_cloneObj(element));
            })
        }
        debugPrint("pageData.operateData.curdatalist"+pageData.operateData.curdatalist);

        debugPrint("pageData.operateData.curselectlist"+pageData.operateData.curselectlist);
        if(!!pageData.operateData.curselectlist&&pageData.operateData.curselectlist.length>0)
        {
            $.each(pageData.operateData.curselectlist, function (key, value) {

                pageData.setting_sys_openvichip_cls3_ul1.Data[parseInt(value)].setting_sys_openvichip_cls3_img1.Data= "img/selectedBall.png";
            })

        }
        else
        {
            pageData.operateData.curselectlist=[];
        }
        pageData.setting_sys_openvichip_cls3_ul1.SelectedIndex=pageData.operateData.curselectindex;

    }
};

function OpenvchipCls3openHandler()
{
    UpdataOpenvchipCls3ScrollBar(this.data);
    if(PageDataSettingSysOpenvchipCls3.setting_sys_openvichip_cls3_ul1.Data.length>5)
    {
        var index=this.page.getCaE("setting_sys_openvichip_cls3_ul1").BeginIdx;
        debugPrint("index"+index);
        $("#setting_sys_openvichip_cls3_srcollbar").css("top",parseInt(425/PageDataSettingSysOpenvchipCls3.setting_sys_openvichip_cls3_ul1.Data.length)*index);
    }
    else
    {   var temp=610-(5-PageDataSettingSysOpenvchipCls3.setting_sys_openvichip_cls3_ul1.Data.length)*95;
        $("#setting_sys_openvichip_cls3").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sys_openvichip_cls3").css("top",height+'px');
    }

}

function SettingOpenvchipCls3onDestroy()
{
    hiWebOsFrame.settingssysopenvichip3=null;
}
function UpdataOpenvchipCls3ScrollBar(pageData)
{
    var i=pageData.setting_sys_openvichip_cls3_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_openvichip_cls3_srcollbar").css("height",temp);
        $("#setting_sys_openvichip_cls3_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_openvichip_cls3_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);
}

function SettingSysopenvichipEnHandler()
{
    this.page.operateData.curselectindex=this.SelectedIndex;
    //todo to set  and get the data to refresh the page
   // hiWebOsFrame.lockAllKeys();
    var temp=_getIndex(this.page.operateData.curselectlist,this.page.operateData.curselectindex);
    if(temp>=0)
    {
        model.parentlock.SetLevelPage(PageDataSettingSysOpenvichipcls1.operateData.curselect,PageDataSettingSysOpenvichipcls2.operateData.curselect,this.SelectedIndex,1);

    }
    else{
    model.parentlock.SetLevelPage(PageDataSettingSysOpenvichipcls1.operateData.curselect,PageDataSettingSysOpenvichipcls2.operateData.curselect,this.SelectedIndex,0);
    }
    model.parentlock.LevelPageState(PageDataSettingSysOpenvichipcls1.operateData.curselect,PageDataSettingSysOpenvichipcls2.operateData.curselect);

//    hiWebOsFrame.settingssysopenvichip3.rewrite();
//    hiWebOsFrame.settingssysopenvichip3.open();
//    hiWebOsFrame.settingssysopenvichip3.hiFocus("setting_sys_openvichip_cls3_ul1");
    //SetRecentUse("Parental Controls",4,SYS_SECURITY);
}

function SettingSysopenvichipEscHandler()
{
    this.page.close();
    hiWebOsFrame.settingssysopenvichip2.open();
    hiWebOsFrame.settingssysopenvichip2.hiFocus();

}
function SettingSysopenvichipUpHandler()
{
    var temp=PageDataSettingSysOpenvchipCls3.setting_sys_openvichip_cls3_ul1.Data.length;
    if(PageDataSettingSysOpenvchipCls3.setting_sys_openvichip_cls3_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
    {
        var temp=this.SelectedIndex*PageDataSettingSysOpenvchipCls3.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_sys_openvichip_cls3_srcollbar").css("top",temp);

    }
}
function SettingSysopenvichipDownHandler()
{
    if(this.SelectedIndex < PageDataSettingSysOpenvchipCls3.setting_sys_openvichip_cls3_ul1.Data.length&&this.SelectedIndex>4)
    {
        var temp=(this.SelectedIndex-4)*PageDataSettingSysOpenvchipCls3.operateData.step;
        $("#setting_sys_openvichip_cls3_srcollbar").css("top",temp);
    }
}

function OpenvchipCls3init()
{
    //todo to get the country list and selectindex
}