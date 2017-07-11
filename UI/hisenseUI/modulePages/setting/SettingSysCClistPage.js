/**
 * Created by Administrator on 14-11-21.
 */
function getSettingCClistPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_cc_list_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_cc_list_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal_cconly", "focus": "setting_sys_mt_focus_cconly"
            },
//                    "classes": {
//                        "normal": "listNormal", "focus": "listFocus", "disable": "listDisable", "selected": "listSelected"
//                    },
            "handler": {
                "befEnterHandler": "SettingCCListEnHandler", "aftDownHandler": "SettingCCListDownHandler",
                "aftUpHandler": "SettingCCListUpHandler","aftEscHandler": "SettingCCListEscHandler",
                "keyCCHandler":"SettingCCListCcKeyHandler"
            },
            oriCaE: [

                {
                    "id": "setting_cc_list_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_cc_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_cc_list_txt1", "setting_cc_list_img1"],
                "PageSize":5
            }
        }
    ];
    settingccinit();
    return PageDataccList;
}
var PageDataccList={

    "setting_cc_list_title":{Data:"Caption Control"},
    "setting_cc_list_ul1": {Data:[
        {
            "setting_cc_list_img1": {Data:"img/unselectedBall.png"},
            "setting_cc_list_txt1": {Data:"CC Off"}
        },
        {
            "setting_cc_list_img1": {Data:"img/unselectedBall.png"},
            "setting_cc_list_txt1": {Data:"CC On"}
        },
        {
            "setting_cc_list_img1": {Data:"img/unselectedBall.png"},
            "setting_cc_list_txt1": {Data:"CC On When Mute"}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curselectindex":0
    },
    "langData":{
        "Caption Control": ["Caption Control","Contrôle de sous-titrage","Control de subtítulos"],
        "CC On": ["CC On","CC On","Subtítulos ocultos activados"],
        "CC Off": ["CC Off","CC Off","Subtítulos ocultos desactivados"],
        "CC On When Mute": ["CC On When Mute","CC On en mode silencieux","Subtítulos ocultos activados cuando está en silencio"],

    },
    rewrite:function(pageData){
      //  pageData.setting_cc_list_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
       // pageData.setting_cc_list_ul1.Data=[];
        $.each(pageData.setting_cc_list_ul1.Data, function (k, v) {

            if(pageData.operateData.curselectindex==k)
            {
                pageData.setting_cc_list_ul1.Data[k].setting_cc_list_img1.Data="img/selectedBall.png";
            }
            else
            {
                pageData.setting_cc_list_ul1.Data[k].setting_cc_list_img1.Data="img/unselectedBall.png";
            }

        })

    }

};

function CClistopenHandler()
{
    UpdatacclistScrollBar(this.data);
    if(PageDataccList.setting_cc_list_ul1.Data.length>5)
    {
        var index=this.page.getCaE("setting_cc_list_ul1").BeginIdx;
        debugPrint("index"+index);
        $("#setting_cc_list_srcollbar").css("top",parseInt(425/PageDataccList.setting_cc_list_ul1.Data.length)*index);
    }
    else
    {   var temp=610-(5-PageDataccList.setting_cc_list_ul1.Data.length)*95;
        $("#setting_cc_list").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_cc_list").css("top",height+'px');
    }
}

function SettingCClistPageonDestroy()
{
    hiWebOsFrame.settingscclist=null;
}
function UpdatacclistScrollBar(pageData)
{
    var i=pageData.setting_cc_list_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_cc_list_srcollbar").css("height",temp);
        $("#setting_cc_list_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_cc_list_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);
}


function SettingCCListEnHandler()
{
    try {
        var curSelIdx = this.SelectedIndex;

        if (0 != curSelIdx && 'SA' == InitArea && ('brazil' == hiWebOsFrame.getCurrentCountry().toLowerCase() || 'argentina' == hiWebOsFrame.getCurrentCountry().toLowerCase())) {
            if(-1 != ginga.getRunninGingaIndex()){
                hiWebOsFrame.settingscclist.close();
                hiWebOsFrame.createPage('ginga_cc_switch', null, hiWebOsFrame.settingscclist, null, function (GingaCCSwitch) {
                    hiWebOsFrame.GingaCCSwitch = GingaCCSwitch;
                    PageDataGingaCCSwitch.operateData.CCIndexSet = curSelIdx;
                    GingaCCSwitch.open();
                    GingaCCSwitch.hiFocus();
                    GingaCCSwitch.rewriteDataOnly();
                });
                return;
            }
        }

        this.page.operateData.curselectindex=this.SelectedIndex;
        model.closedcaption.setControl(this.SelectedIndex);
        hiWebOsFrame.settingscclist.rewriteDataOnly();
        setTimeout(closeccbuttonpage,1000);
    } catch (ex) {
        debugE(ex.message);
    }
}

function closeccbuttonpage()
{
    if (hiWebOsFrame.isCurrentModule("closedcaption"))
    {
        hiWebOsFrame.settingscclist.close();
        hiWebOsFrame.settingscclist.origin.open();
        hiWebOsFrame.settingscclist.origin.hiFocus();
        hiWebOsFrame.settingscclist.destroy();
    }
    else
    {
        hiWebOsFrame.settingscclist.close();
        hiWebOsFrame.settingscclist.destroy();
    }

}

function SettingCCListEscHandler()
{
    if(!!hiWebOsFrame.settingscclist.origin)
    {
        hiWebOsFrame.settingscclist.origin.open();
        hiWebOsFrame.settingscclist.origin.hiFocus();
        hiWebOsFrame.settingscclist.destroy();
    }else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        closePagesOrModuleByPage(hiWebOsFrame.settingscclist);
        hiWebOsFrame.settingscclist.destroy();
    }
}
function SettingCCListUpHandler()
{
    var temp=PageDataccList.setting_cc_list_ul1.Data.length;
    if(PageDataccList.setting_cc_list_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
    {
        var temp=this.SelectedIndex*PageDataccList.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_cc_list_srcollbar").css("top",temp);

    }
}
function SettingCCListDownHandler()
{
    if(this.SelectedIndex < PageDataccList.setting_cc_list_ul1.Data.length&&this.SelectedIndex>4)
    {

        var temp=(this.SelectedIndex-4)*PageDataccList.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_cc_list_srcollbar").css("top",temp);

    }
}

function settingccinit()
{
    try
    {
        var index=model.closedcaption.getControl();
        debugPrint("model is-----------------");
        PageDataccList.operateData.curselectindex=index;

    }catch (e)
    {
        debugPrint(e.message);
    }

}

function SettingCCListCcKeyHandler()
{
    if(!!hiWebOsFrame.settingscclist.origin)
    {
        hiWebOsFrame.settingscclist.origin.open();
        hiWebOsFrame.settingscclist.origin.hiFocus();
        hiWebOsFrame.settingscclist.destroy();
    }else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        closePagesOrModuleByPage(hiWebOsFrame.settingscclist);
        hiWebOsFrame.settingscclist.destroy();
    }
}