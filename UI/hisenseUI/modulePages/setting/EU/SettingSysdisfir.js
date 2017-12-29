/**
 * Created by Administrator on 14-12-10.
 */
function getSettingSysDisFirPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_dis_fir_img1",
            "description": "",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_dis_fir_txt1",
            "description": "",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_dis_fir_btn1",
            "description": "",
            "CaEType": "Container",
            "classes": {
                "normal": "setting_sys_dis_fir_normal", "focus": "setting_sys_dis_fir_focus"
            },
            "nav":{"downTo":"setting_sys_dis_fir_btn2"},
            "handler": {
                "aftUpHandler": "SettingSysDisFirfocus",
                "aftDownHandler": "SettingSysDisFirfocus",
                "aftEscHandler": "SettingSysDisFirEscHandler",
                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler"
                },
            "CaE":[
                {
                    "id": "setting_sys_dis_fir_btn1_text",
                    "description": "",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_dis_fir_btn1_img",
                    "description": "",
                    "CaEType": "img"
                }
            ]

        },
        {
            "id": "setting_sys_dis_fir_btn2",
            "description": "",
            "CaEType": "Container",
            "classes": {
                "normal": "setting_sys_dis_fir_normal", "focus": "setting_sys_dis_fir_focus"
            },
            "nav":{"upTo":"setting_sys_dis_fir_btn1", "downTo":"setting_sys_dis_fir_btn3"},
            "handler": {
                "aftUpHandler": "SettingSysDisFirfocus",
                "aftDownHandler": "SettingSysDisFirfocus",
                "aftEscHandler": "SettingSysDisFirEscHandler",
                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler"
            },
            "CaE":[
                {
                    "id": "setting_sys_dis_fir_btn2_text",
                    "description": "",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_dis_fir_btn2_img",
                    "description": "",
                    "CaEType": "img"
                }
            ]

        },
        {
            "id": "setting_sys_dis_fir_btn3",
            "description": "",
            "CaEType": "Container",
            "classes": {
                "normal": "setting_sys_dis_fir_normal", "focus": "setting_sys_dis_fir_focus"
            },
            "nav":{"upTo":"setting_sys_dis_fir_btn2", "downTo":"setting_sys_dis_fir_btn4"},
            "handler": {
                "aftUpHandler": "SettingSysDisFirfocus",
                "aftDownHandler": "SettingSysDisFirfocus",
                "aftEscHandler": "SettingSysDisFirEscHandler",
                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler"
            },
            "CaE":[
                {
                    "id": "setting_sys_dis_fir_btn3_text",
                    "description": "",
                    "CaEType": "div"
                /*},
                {
                    "id": "setting_sys_dis_fir_btn3_img",
                    "description": "",
                    "CaEType": "img"*/
                }
            ]

        },
        {
            "id": "setting_sys_dis_fir_btn4",
            "description": "",
            "CaEType": "Container",
            "classes": {
                "normal": "setting_sys_dis_fir_normal", "focus": "setting_sys_dis_fir_focus"
            },
            "nav":{"upTo":"setting_sys_dis_fir_btn3"},
            "handler": {
                "aftUpHandler": "SettingSysDisFirfocus",
                "aftDownHandler": "SettingSysDisFirfocus",
                "aftEscHandler": "SettingSysDisFirEscHandler",
                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler"
            },
            "CaE":[
                {
                    "id": "setting_sys_dis_fir_btn4_text",
                    "description": "",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_dis_fir_btn4_img",
                    "description": "",
                    "CaEType": "img"
                }
            ]

        }
        /*{
            "id": "setting_sys_dis_fir_select1",
            "description": "",
            "CaEType": "Container",
            "classes": {
                "normal": "setting_sys_dis_agrree_normal", "focus": "setting_sys_dis_agrree_focus"
            },
            "nav":{"rightTo": "setting_sys_dis_fir_btn1","downTo":"setting_sys_dis_fir_btn2"},
            "handler": {
                "aftEscHandler": "SettingSysDisFirEscHandler",
                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler",
                "aftLeftHandler":"SettingSysDisFirfocus"
            },
            "CaE":[
                {
                    "id": "setting_sys_dis_fir_img3",
                    "description": "",
                    "CaEType": "img"
                }]

        },
        {
            "id": "setting_sys_dis_fir_btn1",
            "description": "content",
            "CaEType": "Container",
            "classes": {
                "normal": "setting_sys_dis_fir_eu_btn_normal", "focus": "setting_sys_dis_fir_eu_btn_focus"
            },
            "nav":{"downTo": "setting_sys_dis_fir_btn2","leftTo":"setting_sys_dis_fir_select1"},
            "handler": {
                "aftEscHandler": "SettingSysDisFirEscHandler",
//                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler",
                "aftDownHandler":"SettingSysDisFirfocus",
                "aftUpHandler":"SettingSysDisFirfocus",
                "aftRightHandler":"SettingSysDisFirfocus"

            },
            "CaE":[
                {
                    "id": "setting_sys_dis_fir_text2",
                    "description": "",
                    "CaEType": "span"
                }]
        },
        {
            "id": "setting_sys_dis_fir_btn2",
            "description": "content",
            "CaEType": "Container",
            "classes": {
                "normal": "setting_sys_log_report_normal", "focus": "setting_sys_log_report_focus"
            },
            "nav":{"downTo": "","upTo":"setting_sys_dis_fir_btn1"},
            "handler": {
                "aftEscHandler": "SettingSysDisFirEscHandler",
                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler",
                "aftDownHandler":"SettingSysDisFirfocus",
                "aftUpHandler":"SettingSysDisFirfocus"

            },
            "CaE":[
                {
                    "id": "setting_sys_dis_fir_img2",
                    "description": "",
                    "CaEType": "img"
                },
                {
                    "id": "setting_sys_dis_fir_txt3",
                    "description": "",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_dis_fir_txt4",
                    "description": "",
                    "CaEType": "div"
                }
            ]
        },
        {
            "id": "setting_sys_dis_fir_txt2",
            "description": "",
            "CaEType": "span"
        }*/
    ];
    settingSysDisclaimerinit();
    return PageDateSettingSysDisfir
}

var PageDateSettingSysDisfir={
    "setting_sys_dis_fir_img1":{Data:"img/head_arrow.png"},
    "setting_sys_dis_fir_txt1":{Data:"EULA"},

    "setting_sys_dis_fir_btn1":{Data:
    {
        "setting_sys_dis_fir_btn1_text":{Data:"Accept All EULA Items"},
        "setting_sys_dis_fir_btn1_img":{Data:"img/fuxuan_normal.png"}
    }

    },
    "setting_sys_dis_fir_btn2":{Data:
    {
        "setting_sys_dis_fir_btn2_text":{Data:"Disclaimer"},
        "setting_sys_dis_fir_btn2_img":{Data:"img/fuxuan_normal.png"}
    }
    },
    "setting_sys_dis_fir_btn3":{Data:
    {
        "setting_sys_dis_fir_btn3_text":{Data:"Click to review the detail of our disclaimer terms"}

    }
    },
    "setting_sys_dis_fir_btn4":{Data:
    {
        "setting_sys_dis_fir_btn4_text":{Data:"Improve Hisense TV's"},
        "setting_sys_dis_fir_btn4_img":{Data:"img/fuxuan_normal.png"}
    }
    },
    /*"setting_sys_dis_fir_select1":{Data:
    {
        "setting_sys_dis_fir_img3":{Data:"img/fuxuan_normal.png"}
    }
    },
    "setting_sys_dis_fir_btn1":{Data:
    {
        "setting_sys_dis_fir_text2":{Data:"Accept EULA"}
    }
    },
    "setting_sys_dis_fir_btn2":{Data:
    {
        "setting_sys_dis_fir_img2":{Data:"img/fuxuan_normal.png"},
        "setting_sys_dis_fir_txt3":{Data:"Help to improve the user experience of products"},
        "setting_sys_dis_fir_txt4":{Data:"Automatically send usage informaiton, statistics and crash report to us."}

    }

    },*/
    "operateData": {
        "logreportswitch":0,
        "disacceptflag":0,
        "callback":null,
        "disflag":false,
        "btn1": 0,  //both flag
        "btn2": 0,  //disacceptflag
        "btn3": 0,
        "btn4": 0,  //ImproveHisflag
        "helplist": [
            {
                "title":"Accept All",
                "content":""
            },
            {
                "title":"Disclaimer",
                "content":"Accept the Hisense Legal Disclaimer to gain full access of Smart TV features."
            },
            {
                "title":"",
                "content":""
            },
            {
                "title":"",
                "content":""
            }
        ]
   },
    "langData":{
        "Click to read the legal statement": [],
        "Accept EULA":[],
        "Improve your Smart TV":[],
       // "Read the Hisense Legal Disclaimer.":[],
        "Help to improve the user experience of products":[],
        "Automatically send usage informaiton, statistics and crash report to us.":[],
        "EULA":[],
        "Accept All EULA Items": [],
        "Disclaimer": [],
        "Click to review the detail of our disclaimer terms": [],
        "Improve Hisense TV's": [],
        "Accepct the Hisense Legal Disclaimer to gain full access of Smart TV feature.": []
    },
    rewrite:function(pageData){
        if (pageData.operateData.btn1 == 0)
        {
            pageData.setting_sys_dis_fir_btn1.Data.setting_sys_dis_fir_btn1_img.Data = "img/fuxuan_normal.png"
        }
        else
        {
            pageData.setting_sys_dis_fir_btn1.Data.setting_sys_dis_fir_btn1_img.Data = "img/fuxuan_select.png";
        }
        if (pageData.operateData.btn2 == 0)
        {
            pageData.setting_sys_dis_fir_btn2.Data.setting_sys_dis_fir_btn2_img.Data = "img/fuxuan_normal.png"
        }
        else
        {
            pageData.setting_sys_dis_fir_btn2.Data.setting_sys_dis_fir_btn2_img.Data = "img/fuxuan_select.png"
        }
        // btn3 here
        if (pageData.operateData.btn4 == 0)
        {
            pageData.setting_sys_dis_fir_btn4.Data.setting_sys_dis_fir_btn4_img.Data = "img/fuxuan_normal.png"
        }
        else
        {
            pageData.setting_sys_dis_fir_btn4.Data.setting_sys_dis_fir_btn4_img.Data = "img/fuxuan_select.png"
        }

        /*if(pageData.operateData.logreportswitch==0)
        {
            pageData.setting_sys_dis_fir_btn2.Data.setting_sys_dis_fir_img2.Data="img/fuxuan_normal.png"
        }
        else
        {
            pageData.setting_sys_dis_fir_btn2.Data.setting_sys_dis_fir_img2.Data="img/fuxuan_select.png"

        }
        if(pageData.operateData.disacceptflag==0)
        {
            pageData.setting_sys_dis_fir_select1.Data.setting_sys_dis_fir_img3.Data="img/fuxuan_normal.png"
        }
        else
        {
            pageData.setting_sys_dis_fir_select1.Data.setting_sys_dis_fir_img3.Data="img/fuxuan_select.png"

        }*/
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_dis_fir_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
         //   $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $("#setting_sys_dis_fir").css("margin","0 0 0 78px");
            $(".setting_sys_log_report_text").css("margin"," 0 0 0 9px");
            $(".setting_sys_log_report_discrption").css("margin","5px  0 0 83px");
            $(".setting_sys_lang1__cls").css("left","510px");
            $(".setting_sys_dis_agrree_normal").css("float","left");
            $(".setting_sys_dis_agrree_focus").css("float","left");
//            $(".setting_sys_dis_fir_eu_btn_focus").css("margin","0 0 0 22px");
//            $(".setting_sys_dis_fir_eu_btn_normal").css("margin","0 0 0 22px");

//            $(".setting_select_lang_disable").css("float","right")

        }
        else {
            pageData.setting_sys_dis_fir_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")');
          //  $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
            $("#setting_sys_dis_fir").css("margin","0 78px 0 0");
            $(".setting_sys_log_report_text").css("margin"," 0 9px 0 0");
            $(".setting_sys_dis_agrree_normal").css("float","right");
            $(".setting_sys_dis_agrree_focus").css("float","right");
            $(".setting_sys_log_report_discrption").css("margin","5px 83px 0 0");
            $(".setting_sys_lang1__cls").css("left","358px");
//            $(".setting_sys_dis_fir_eu_btn_focus").css("margin","0 22px 0 0");
//            $(".setting_sys_dis_fir_eu_btn_normal").css("margin","0 22px 0 0");
//            $(".setting_select_langpage3").css("float","right");
//
//            $(".setting_select_lang_focus").css("float","left");
//            $(".setting_select_langpage4").css("float","left");
//            $(".setting_select_lang_disable").css("float","left")


        }
    }
};

function SettingSysDisFirDelMarquee()
{
    for (var i=1; i<=4; i++) {
        var marquee = $("#setting_sys_dis_fir_btn" + i +"_text" + " marquee").html();
        if (!!marquee && marquee.length > 0){
            $("#setting_sys_dis_fir_btn" + i + "_text").html(marquee);
        }
    }
}

function SettingSysDisFirAddMarquee(idx)
{
    idx++;
    var htmlText = $("#setting_sys_dis_fir_btn" + idx +"_text").html();
    if (idx == 3 && htmlText.length > 60) {
        $("#setting_sys_dis_fir_btn" + idx +"_text").html('<marquee style="width: inherit" scrollAmount=20 scrollDelay=150>' + htmlText + '</marquee>');
    }
    else if(idx != 3 && htmlText.length > 41) {
        $("#setting_sys_dis_fir_btn" + idx +"_text").html('<marquee style="width: inherit" scrollAmount=20 scrollDelay=150>' + htmlText + '</marquee>');
    }
}

function SettingSysDisFirfocus()
{
    var index;

    if(this.id=="setting_sys_dis_fir_btn1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_dis_fir_btn2")
    {
        index = 1;
        $("#setting_sys_dis_fir_btn3_text").css("opacity", "0.4");
    }
    else if(this.id=="setting_sys_dis_fir_btn3")
    {
        index = 2;
        $("#setting_sys_dis_fir_btn3_text").css("opacity", "1");
    }
    else if(this.id=="setting_sys_dis_fir_btn4")
    {
        index = 3;
        $("#setting_sys_dis_fir_btn3_text").css("opacity", "0.4");
    }

    SettingSysDisFirDelMarquee();
    SettingSysDisFirAddMarquee(index);
    SettingEULAUpdateHelpinfo(PageDateSettingSysDisfir.operateData.helplist[index].title,PageDateSettingSysDisfir.operateData.helplist[index].content);

}
function SettingEULAUpdateHelpinfo(title, content)
{
    PageDateSettingSysDisfir.operateData.helpcontent=content;
    PageDateSettingSysDisfir.operateData.helptitle=title;
    try {
        if (title != "" && !!langPackages[title]) {
            $("#setting_sys_eula_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_eula_helpinfo_title").html(title);
        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_eula__helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_eula__helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }
}
function SettingSysDisFirPageonDestroy()
{
    hiWebOsFrame.settingssysdisfir = null;
}

function SettingSysDisFirEscHandler()
{
    if(PageDateSettingSysDisfir.operateData.disflag)
    {
        PageDateSettingSysDisfir.operateData.disflag=false;
        hiWebOsFrame.settingssysdisfir.close();
        hiWebOsFrame.destroyModule("setting");
        PageDateSettingSysDisfir.operateData.callback.call(this, PageDateSettingSysDisfir.operateData.btn2)
        PageDateSettingSysDisfir.operateData.callback=null;
    }
    else
    {
    this.page.close();
    if(!!hiWebOsFrame.settingssysdisfir.origin && hiWebOsFrame.settingssysdisfir.origin.id == "settingNetSetMainPageId"){
        if(tv){
            model.network.setEnumNetworkConfig(0);
        }
        hiWebOsFrame.NetSetMainPage.destroy();
        hiWebOsFrame.settingsFirst.hiFocus();
    }else{
        SetRecentUse("EULA",5,1);
        if(!!hiWebOsFrame.settingssysdisfir.origin)
        {
            hiWebOsFrame.settingssysdisfir.origin.open();
            hiWebOsFrame.settingssysdisfir.origin.hiFocus();
        }
        else
        {
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.settingsFirst.hiFocus();
        }
    }
    }
    //this.page.destroy();
    if(!!hiWebOsFrame.settingssysdis )
    {
        hiWebOsFrame.settingssysdis.destroy();
    }
    if(!!hiWebOsFrame.settingssysdisfir )
    {
        hiWebOsFrame.settingssysdisfir.destroy();
    }
}

function SettingSysDisFirEnHandler()
{
    /*try{
        if(this.id=="setting_sys_dis_fir_select1")
        {
            if(PageDateSettingSysDisfir.operateData.disacceptflag==0)
            {
                PageDateSettingSysDisfir.operateData.disacceptflag=1;
                if(tv){
                    model.basicSetting.setDisclaimer(1);
                }
                if(!!hiWebOsFrame.settingssysdisfir.origin && hiWebOsFrame.settingssysdisfir.origin.id == "settingNetSetMainPageId"){
                    hiWebOsFrame.settingssysdisfir.rewriteDataOnly();
                    settingFirstInitNetSetMainData();
                    hiWebOsFrame.NetSetMainPage.rewriteDataOnly();
                    hiWebOsFrame.settingssysdisfir.close();
                    hiWebOsFrame.NetSetMainPage.hiFocus();
                    hiWebOsFrame.NetSetMainPage.open();
                    hiWebOsFrame.settingssysdisfir.destroy();
                }else{
                    hiWebOsFrame.settingssysdisfir.rewriteDataOnly();
                }

            }
            else
            {
                DBG_ALWAYS("SettingSysDisFirEnHandler:open network");
                PageDateSettingSysDisfir.operateData.disacceptflag=0;
                model.basicSetting.setDisclaimer(0);
                model.network.setEnumNetworkConfig(0);//关闭网络。
                hiWebOsFrame.settingssysdisfir.rewriteDataOnly();
            }
        }
    }catch (ex){
        DBG_ERROR("SettingSysDisFirEnHandler:"+ex.message);
    }
    var pause = 1;*/
    if (this.id=="setting_sys_dis_fir_btn1")
    {
        //todo
        if (PageDateSettingSysDisfir.operateData.btn1 == 0)
        {
            PageDateSettingSysDisfir.operateData.btn1 = 1;
            PageDateSettingSysDisfir.operateData.btn2 = 1;
            PageDateSettingSysDisfir.operateData.btn4 = 1;
        }
        else
        {
            PageDateSettingSysDisfir.operateData.btn1 = 0;
            PageDateSettingSysDisfir.operateData.btn2 = 0;
            PageDateSettingSysDisfir.operateData.btn4 = 0;
        }
//        model.basicSetting.setDisclaimer(PageDateSettingSysDisfir.operateData.btn1);
//        model.basicSetting.setImproveHis(PageDateSettingSysDisfir.operateData.btn4);
    }
    if (this.id=="setting_sys_dis_fir_btn2")
    {
        //todo
        if (PageDateSettingSysDisfir.operateData.btn2 == 0)
        {
            PageDateSettingSysDisfir.operateData.btn2 = 1;
        }
        else
        {
            PageDateSettingSysDisfir.operateData.btn2 = 0;
//            PageDateSettingSysDisfir.operateData.btn1 = 0;
        }
//        model.basicSetting.setDisclaimer(PageDateSettingSysDisfir.operateData.btn2);
    }
    /*else if(this.id=="setting_sys_dis_fir_btn2")
    {
        if(PageDateSettingSysDisfir.operateData.logreportswitch==0)
        {
            PageDateSettingSysDisfir.operateData.logreportswitch=1;
            model.basicSetting.setImproveHis(1);
        }
        else
        {
            PageDateSettingSysDisfir.operateData.logreportswitch=0;
            model.basicSetting.setImproveHis(0);
        }
        hiWebOsFrame.settingssysdisfir.rewriteDataOnly();
        var htmlText = $("#setting_sys_dis_fir_txt3").html();
        if (htmlText.length >47) {
            $("#setting_sys_dis_fir_txt3").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
        var marquee = $("#setting_sys_dis_fir_text2" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_sys_dis_fir_text2" + " marquee").html();
            var marquee = $("#setting_sys_dis_fir_text2" ).html(htmlText);
        }
    }*/
    else if(this.id=="setting_sys_dis_fir_btn3")
    {
        hiWebOsFrame.createPage('setting_sys_disclaimer_page', null, hiWebOsFrame.settingssysdisfir, null, function (disclaimer) {
            hiWebOsFrame.settingssysdis = disclaimer;
            disclaimer.data.operateData.currenheight = 0;
            disclaimer.rewriteDataOnly();
            disclaimer.open();
            disclaimer.hiFocus();

        });
    }
    else if(this.id=="setting_sys_dis_fir_btn4")
    {
        //todo

        if (PageDateSettingSysDisfir.operateData.btn4 == 0)
        {
            PageDateSettingSysDisfir.operateData.btn4 = 1;
        }
        else
        {
            PageDateSettingSysDisfir.operateData.btn4 = 0;
//            PageDateSettingSysDisfir.operateData.btn1 = 0;
        }
//        model.basicSetting.setImproveHis(PageDateSettingSysDisfir.operateData.btn4);
    }
    if (1==PageDateSettingSysDisfir.operateData.btn2 && 1==PageDateSettingSysDisfir.operateData.btn4){
        PageDateSettingSysDisfir.operateData.btn1 = 1;
    } else {
        PageDateSettingSysDisfir.operateData.btn1 = 0;
    }
    if (tv) {
        model.basicSetting.setDisclaimer(PageDateSettingSysDisfir.operateData.btn2);
//        if(FREEVIEWTEST){
//           model.appsetting.setFreeviewPlayCtrl(PageDateSettingSysDisfir.operateData.btn2);
        var isUK = hiWebOsFrame.getCurrentCountry() == "UK";
        ENABLE_FVP = (1 == parseInt(PageDateSettingSysDisfir.operateData.btn2) && isUK);
//        }
        model.basicSetting.setImproveHis(PageDateSettingSysDisfir.operateData.btn4);
    }
    this.page.rewriteDataOnly();
    SetRecentUse("EULA",5,1);
}
function DisfirstOpenHandler()
{
    SettingEULAUpdateHelpinfo(PageDateSettingSysDisfir.operateData.helplist[0].title,PageDateSettingSysDisfir.operateData.helplist[0].content);
    /*var marquee = $("#setting_sys_dis_fir_text2" + " marquee");
    if(marquee.length<=0)
    {
        var htmlText = $("#setting_sys_dis_fir_text2").html();
        if (htmlText.length >35) {
            $("#setting_sys_dis_fir_text2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
    }*/
}

function settingSysDisclaimerinit()
{
    try {
        var curbrand = model.system.getCurBrand();
    }
    catch (e) {
        debugE("getCurBrand error " + e);
    }
    if (!!curbrand  && curbrand != "his" && curbrand !=  "hisense" && curbrand !=  "Hisense") {
        PageDateSettingSysDisfir.setting_sys_dis_fir_btn4.Data.setting_sys_dis_fir_btn4_text.Data = "Improve your Smart TV";
    }

    try
    {
        if(hiWebOsFrame.getCurrentArea()=="EU")
        {
            $("#setting_sys_eula_helpinfo").css("display","block");
        }
        else
        {
            $("#setting_sys_eula_helpinfo").css("display","none");
        }
        var temp=model.basicSetting.getImproveHis();
        debugPrint("get hisense improve switch "+temp);
        if(temp<2)
        {
//            PageDateSettingSysDisfir.operateData.logreportswitch= temp;
            PageDateSettingSysDisfir.operateData.btn4= temp;
        }
        else
        {
            PageDateSettingSysDisfir.operateData.btn4=0;
            model.basicSetting.setImproveHis(0);
        }
        temp= model.basicSetting.getDisclaimer();
        debugPrint("getDisclaimer  "+temp);
        if(temp>0)
        {
//            PageDateSettingSysDisfir.operateData.disacceptflag=1;
            PageDateSettingSysDisfir.operateData.btn2=1;
        }
        else{
            PageDateSettingSysDisfir.operateData.btn2=0;
        }
//	 if(FREEVIEWTEST){
//        temp= model.appsetting.getFreeviewPlayCtrl();
//        debugPrint("getFreeviewPlayCtrl  "+temp);
//        if(temp!=PageDateSettingSysDisfir.operateData.btn2)
//        {
//            model.appsetting.setFreeviewPlayCtrl(PageDateSettingSysDisfir.operateData.btn2)
//
//        }
//	}


        if (1==PageDateSettingSysDisfir.operateData.btn2 && 1==PageDateSettingSysDisfir.operateData.btn4)
        {
            PageDateSettingSysDisfir.operateData.btn1=1;
        }
        else{
            PageDateSettingSysDisfir.operateData.btn1=0;
        }
    }catch (e)
    {
        debugE(e.message);
    }
}
