/**
 * Created by Administrator on 14-11-21.
 */
function getSettingtxtlistPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_txt_list_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_txt_list_ul1",
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
                "befEnterHandler": "SettingtxtListEnHandler", "aftDownHandler": "SettingtxtListDownHandler",
                "aftUpHandler": "SettingtxtListUpHandler","aftEscHandler": "SettingtxtListEscHandler",
                "keyTeletextHandler":"SettingtxtListEscHandler"
            },
            oriCaE: [

                {
                    "id": "setting_txt_list_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_txt_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_txt_list_txt1", "setting_txt_list_img1"],
                "PageSize":5
            }
        }
    ];
    settingtxtinit();
    return PageDatatxtList;
}
var PageDatatxtList={

    "setting_txt_list_title":{Data:"Teletext"},
    "setting_txt_list_ul1": {Data:[
        {
            "setting_txt_list_img1": {Data:"img/unselectedBall.png"},
            "setting_txt_list_txt1": {Data:"Off"}
        },
        {
            "setting_txt_list_img1": {Data:"img/unselectedBall.png"},
            "setting_txt_list_txt1": {Data:"On"}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curselectindex":0
    },
    "langData":{
        "Teletext":[],
        "Off":[],
        "On":[]

    },
    rewrite:function(pageData){
      //  pageData.setting_cc_list_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
       // pageData.setting_cc_list_ul1.Data=[];
        $.each(pageData.setting_txt_list_ul1.Data, function (k, v) {

            if(pageData.operateData.curselectindex==k)
            {
                pageData.setting_txt_list_ul1.Data[k].setting_txt_list_img1.Data="img/selectedBall.png";
            }
            else
            {
                pageData.setting_txt_list_ul1.Data[k].setting_txt_list_img1.Data="img/unselectedBall.png";
            }

        })

    }

};

function txtlistopenHandler()
{
    UpdatasettingtxtlistScrollBar(this.data);
    if(PageDatatxtList.setting_txt_list_ul1.Data.length>5)
    {
        var index=this.page.getCaE("setting_txt_list_ul1").BeginIdx;
        debugPrint("index"+index);
        $("#setting_txt_list_srcollbar").css("top",parseInt(425/PageDatatxtList.setting_txt_list_ul1.Data.length)*index);
    }
    else
    {   var temp=610-(5-PageDatatxtList.setting_txt_list_ul1.Data.length)*95;
        $("#setting_txt_list").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_txt_list").css("top",height+'px');
    }
}

function SettingtxtlistPageonDestroy()
{
    hiWebOsFrame.settingstxtlist=null;
}
function UpdatasettingtxtlistScrollBar(pageData)
{
    var i=pageData.setting_txt_list_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_txt_list_srcollbar").css("height",temp);
        $("#setting_txt_list_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_txt_list_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);
}


function SettingtxtListEnHandler()
{
    debugPrint("in the SettingtxtListEnHandler");
    try
    {
    this.page.operateData.curselectindex=this.SelectedIndex;
    //todo
    try{
    model.system.setCurChannelTeletextSelect(this.SelectedIndex);
    }catch (e) {
        debugE(e.message);
    }
    hiWebOsFrame.settingstxtlist.rewriteDataOnly();
    setTimeout(closetxtbuttonpage,1000);
     }
    catch (e)
    {debugE(e.message);}

}

function closetxtbuttonpage()
{
    debugPrint("in the closetxtbuttonpage")
    if (hiWebOsFrame.isCurrentModule("teletext"))
    {
        hiWebOsFrame.settingstxtlist.close();
        hiWebOsFrame.settingstxtlist.origin.open();
        hiWebOsFrame.settingstxtlist.origin.hiFocus();
        hiWebOsFrame.settingstxtlist.destroy();
    }
    else
    {
        hiWebOsFrame.settingstxtlist.close();
        hiWebOsFrame.settingstxtlist.destroy();
    }

}

function SettingtxtListEscHandler()
{
    if(!!hiWebOsFrame.settingstxtlist.origin)
    {
        hiWebOsFrame.settingstxtlist.origin.open();
        hiWebOsFrame.settingstxtlist.origin.hiFocus();
        hiWebOsFrame.settingstxtlist.destroy();
    }else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        closePagesOrModuleByPage(hiWebOsFrame.settingstxtlist);
        hiWebOsFrame.settingstxtlist.destroy();
    }
}
function SettingtxtListUpHandler()
{
    var temp=PageDatatxtList.setting_txt_list_ul1.Data.length;
    if(PageDatatxtList.setting_txt_list_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
    {
        var temp=this.SelectedIndex*PageDatatxtList.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_txt_list_srcollbar").css("top",temp);

    }
}
function SettingtxtListDownHandler()
{
    if(this.SelectedIndex < PageDatatxtList.setting_txt_list_ul1.Data.length&&this.SelectedIndex>4)
    {

        var temp=(this.SelectedIndex-4)*PageDatatxtList.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_txt_list_srcollbar").css("top",temp);

    }
}

function settingtxtinit()
{
    try
    {
        var index=model.system.getCurChannelTeletextSelect();
        debugPrint("teletext select-----------------"+index);
        PageDatatxtList.operateData.curselectindex=index;

    }catch (e)
    {
        debugPrint(e.message);
        PageDatatxtList.operateData.curselectindex=0;
    }

}

function SettingtxtListCcKeyHandler()
{
    if(!!hiWebOsFrame.settingstxtlist.origin)
    {
        hiWebOsFrame.settingstxtlist.origin.open();
        hiWebOsFrame.settingstxtlist.origin.hiFocus();
        hiWebOsFrame.settingstxtlist.destroy();
    }else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        closePagesOrModuleByPage(hiWebOsFrame.settingstxtlist);
        hiWebOsFrame.settingstxtlist.destroy();
    }
}