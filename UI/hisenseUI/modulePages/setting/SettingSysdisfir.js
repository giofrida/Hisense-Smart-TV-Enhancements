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
            "description": "content",
            "CaEType": "span",
            "classes": {
               "normal": "setting_sys_dis_fir_btn_normal", "focus": "setting_sys_dis_fir_btn_focus"
            },
            "nav":{"downTo": "setting_sys_dis_fir_btn2","upTo":""},
            "handler": {
                "aftEscHandler": "SettingSysDisFirEscHandler",
                "befLeftHandler":"SettingSysDisFirEscHandler",
                "aftEnterHandler": "SettingSysDisFirEnHandler",
                "aftDownHandler":"SettingSysDisFirfocus",
                "aftUpHandler":"SettingSysDisFirfocus"

            }
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
        }
    ];
    settingSysDisclaimerinit();
    return PageDateSettingSysDisfir
}
var PageDateSettingSysDisfir={
    "setting_sys_dis_fir_img1":{Data:"img/head_arrow.png"},
    "setting_sys_dis_fir_txt1":{Data:"EULA"},
   // "setting_sys_dis_fir_img2":{Data:"img/fuxuan_normal.png"},
    "setting_sys_dis_fir_txt2":{Data:"Click to read the legal statement"},
   // "setting_sys_dis_fir_txt3":{Data:"Help to improve the user experience of products"},
   // "setting_sys_dis_fir_txt4":{Data:" Automatically send usage information, statistics,and crash repport to Hisense"},
    "setting_sys_dis_fir_btn1":{Data:"EULA"},
    "setting_sys_dis_fir_btn2":{Data:
    {
        "setting_sys_dis_fir_img2":{Data:"img/fuxuan_normal.png"},
        "setting_sys_dis_fir_txt3":{Data:"Help to improve the user experience of products"},
        "setting_sys_dis_fir_txt4":{Data:"Automatically send usage informaiton, statistics and crash report to us."}

    }

   },
    "operateData": {
        "logreportswitch":0


    },
    "langData":{
        "Click to read the legal statement": [],
        "Legal statement":[],
        "EULA":[],
        "Help to improve the user experience of products":[],
        "Automatically send usage informaiton, statistics and crash report to us.":[],
        "Disclaimer":["Disclaimer","Haftungsausschluss","Dichiarazione di limitazione di responsabilità","Declaração","Descargo de responsabilidad","Clause de non-responsabilité","Ansvarsfraskrivelse","Ansvarsfriskrivning","Ansvarsfraskrivelse","Vastuuvapauslauseke","免责申明"]

    },
    rewrite:function(pageData){
        if(pageData.operateData.logreportswitch==0)
        {
            pageData.setting_sys_dis_fir_btn2.Data.setting_sys_dis_fir_img2.Data="img/fuxuan_normal.png"
        }
        else
        {
            pageData.setting_sys_dis_fir_btn2.Data.setting_sys_dis_fir_img2.Data="img/fuxuan_select.png"

        }
//        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
//            $(".setting_page_line").css("float","left");
//            $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
//
//            $("#setting_sys_dis_fir_txt2").css("margin"," 0 0 0 20px");
//            $(".setting_sys_log_report_text").css("margin"," 0 0 0 9px");
//            $(".setting_sys_log_report_discrption").css("margin","5px  0 0 83px");
//            $(".setting_sys_lang1__cls").css("left","510px");
////            $(".setting_select_lang_focus").css("float","right")
////            $(".setting_select_langpage4").css("float","right")
////            $(".setting_select_lang_disable").css("float","right")
//
//        }
//        else {
//            $(".setting_page_line").css("float","right")
//            $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
//            $("#setting_sys_dis_fir_txt2").css("margin"," 0 20px 0 0");
//            $(".setting_sys_log_report_text").css("margin"," 0 9px 0 0");
//
//            $(".setting_sys_log_report_discrption").css("margin","5px 83px 0 0");
//            $(".setting_sys_lang1__cls").css("left","358px");
////            $(".setting_select_langpage2").css("float","right");
////            $(".setting_select_langpage3").css("float","right");
////
////            $(".setting_select_lang_focus").css("float","left");
////            $(".setting_select_langpage4").css("float","left");
////            $(".setting_select_lang_disable").css("float","left")
//
//
//        }
    }
};


function SettingSysDisFirfocus()
{
    if(this.id=="setting_sys_dis_fir_btn1")
    {
        index = 0;
        var htmlText = $("#setting_sys_dis_fir_txt2").html();
        if (htmlText.length >35) {
            $("#setting_sys_dis_fir_txt2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
        var marquee = $("#setting_sys_dis_fir_txt3" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_sys_dis_fir_txt3" + " marquee").html();
            var marquee = $("#setting_sys_dis_fir_txt3" ).html(htmlText);
        }
       // $("#setting_sys_dis_fir_btn2" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
    }
    else if(this.id=="setting_sys_dis_fir_btn2")
    {
        index = 1;
        var htmlText = $("#setting_sys_dis_fir_txt3").html();
        if (htmlText.length >47) {
            $("#setting_sys_dis_fir_txt3").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
        var marquee = $("#setting_sys_dis_fir_txt2" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_sys_dis_fir_txt2" + " marquee").html();
            var marquee = $("#setting_sys_dis_fir_txt2" ).html(htmlText);
        }

    }

}
function SettingSysDisFirPageonDestroy()
{
    hiWebOsFrame.settingssysdisfir = null;
}

function SettingSysDisFirEscHandler()
{
    this.page.close();
    SetRecentUse("EULA",5,1);
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
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
    if(this.id=="setting_sys_dis_fir_btn1")
    {
        hiWebOsFrame.createPage('setting_sys_disclaimer_page', null, hiWebOsFrame.settingssysdisfir, null, function (disclaimer) {
            hiWebOsFrame.settingssysdis = disclaimer;
            disclaimer.data.operateData.currenheight = 0;
            disclaimer.rewriteDataOnly();
            disclaimer.open();
            disclaimer.hiFocus();

        });
    }
    else if(this.id=="setting_sys_dis_fir_btn2")
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
        var marquee = $("#setting_sys_dis_fir_txt2" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_sys_dis_fir_txt2" + " marquee").html();
            var marquee = $("#setting_sys_dis_fir_txt2" ).html(htmlText);
        }
    }
    SetRecentUse("EULA",5,1);
}
function DisfirstOpenHandler()
{

    var marquee = $("#setting_sys_dis_fir_txt2" + " marquee");
    if(marquee.length<=0)
    {
    var htmlText = $("#setting_sys_dis_fir_txt2").html();
    if (htmlText.length >35) {
        $("#setting_sys_dis_fir_txt2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
    }
}

function settingSysDisclaimerinit()
{
    try
    {
    var temp=model.basicSetting.getImproveHis();
    debugPrint("get hisense improve switch "+temp)
    if(temp<2)
    {
         PageDateSettingSysDisfir.operateData.logreportswitch= temp;
    }
    else
    {
        PageDateSettingSysDisfir.operateData.logreportswitch=0;
        model.basicSetting.setImproveHis(0);
    }
    }catch (e)
    {debugE(e.message)}
}
