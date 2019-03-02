/**
 * Created by Administrator on 14-6-18.
 */

function getUpdateVersionData(opt) {
    opt.CaE= [
        {
            "id": "setting_update_ver_title",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_update_ver_cur",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_cur_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_new",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_new_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_ver_con_title",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_eula",
            "description": "",
            "CaEType": "span",
            "disable": false
        },
        {
            "id": "setting_update_ver_content_box",
            "description": "ok",
            "classes": {
                "normal": "setting_update_ver_content_normal",
                "focus": "setting_update_ver_content_focus",
                "selected": "setting_update_ver_content_focus"
            },
            "firstFocusId": "setting_sys_update_ver_box",
            "CaEType": "Container",
            "CaE": [
                {
            "id": "setting_sys_update_ver_box",
            "description": "",
            "CaEType": "div",
            "enableHtml":true,
            "disable": false
                }
            ],

            "handler": {
                "befDownHandler": "SettingUpdateVerDownHandler",
                "befUpHandler": "SettingUpdateVerUpHandler",
            },
            "nav": {"downTo": ""}
        },
        {
            "id": "setting_update_checkbox",
            "description": "",
            "CaEType": "img",
            "onFocusFun": "settingUpdateCheckBoxOnFocus",
            "onBlurFun": "settingUpdateCheckBoxOnBlur",
            "handler": {
                "aftEnterHandler": "ssettingUpdateCheckBoxEnter",
            },
            "nav": {
                "upTo": "setting_update_ver_content_box", "downTo": "setting_update_ver_btn1",
                "rightTo": "setting_update_review_btn",
            },
            "classes": {
                "normal": "", "focus": ""
            }
        },
        {
            "id": "setting_update_review_btn",
            "description": "ok",
            "classes": {
                "normal": "setting_update_ver_button", "focus": "setting_update_ver_button_focus"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': "SettingUpdateVerEualEnter",//点击enter事件后处理
                'aftEscHandler': "SettingUpdateVerInCancel"

            },
            "nav": {
                "leftTo": "setting_update_checkbox",
                "upTo": "setting_update_ver_content_box",
                "downTo": "setting_update_ver_btn2"
            }

        },
        {
            "id":"setting_update_ver_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_update_ver_button",
                "focus": "setting_update_ver_button_focus",
                "disable": "setting_update_ver_button_disable"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateVerInfoOk",//点击enter事件后处理
                //"aftDownHandler": "SettingUpdateVerDownHandler",
                //"aftUpHandler": "SettingUpdateVerUpHandler",
                'aftEscHandler':"SettingUpdateVerInCancel"


            },
            "nav": {
                "rightTo": "setting_update_ver_btn2",
                "upTo": "setting_update_checkbox",
                "downTo": "setting_update_ver_btn1"
            }

        },
        {
            "id":"setting_update_ver_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_update_ver_button",
                "focus": "setting_update_ver_button_focus",
                "disable": "setting_update_ver_button_disable"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateVerInfoOk",//点击enter事件后处理
                //"aftDownHandler": "SettingUpdateVerDownHandler",
                //"aftUpHandler": "SettingUpdateVerUpHandler",
                'aftEscHandler':"SettingUpdateVerInCancel"


            },
            "nav": {
                "leftTo": "setting_update_ver_btn1",
                "rightTo": "",
                "upTo": "setting_update_review_btn",
                "downTo": "setting_update_ver_btn2"
        }

        }

    ];

    return PageDateSettingUpdateverinfo;
}
var PageDateSettingUpdateverinfo={
    "setting_update_ver_title":{Data:"Upgrade"},
    "setting_update_ver_cur":{Data:"Current version:"},
    "setting_update_ver_cur_value1":{Data:"V1.0"},
    "setting_update_ver_new":{Data:"Latest version:"},
    "setting_update_ver_new_value1":{Data:"V1.2"},
    "setting_update_ver_con_title":{Data:"Upgrade content"},
    "setting_update_eula": {Data: "Accept EULA"},
    "setting_update_checkbox": {"Data": "img/checkbox_unselectNormal.png"},
    "setting_update_ver_content_box": {
        "Data": {
            "setting_sys_update_ver_box": {Data: "1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>"}

        }
    },
    "setting_update_review_btn": {Data: "Review All"},
    "setting_update_ver_btn1":{Data:"Upgrade"},
    "setting_update_ver_btn2":{Data:"Cancel"},
//    "setting_update_ver_btn3":{Data:"Never reminder"},
    "operateData": {
        "curver":"V1.00.00.00",
        "newver":"V1.00.00.02",
        "currenheight":0,
        "step":42,
        "isHasDisChange": false,
        "acceptDisclaimerFlag": 0,
        "upgradecontent":""

    },
    "langData":{
        "Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
        "Current version:":["Current version:","Aktuelle Version:","Versione corrente:","Versão atual:","Versión actual:","Version actuelle:","Gjeldende versjon:","Nuvarande version:","Nuværende version:","Nykyinen versio:","当前版本:"],
        "Latest version:":["Latest version:","Aktuellste Version:","Ultima versione:","Versão mais recente:","Última versión:","Version la plus récente:","Nyeste versjon:","Senaste versionen:","Nyeste version:","Uusin versio:","最新版本:"],
        "Upgrade content":["Upgrade content","Inhalt aktualisieren","Aggiorna il contenuto","Atualizar conteúdos","Actualizar contenido","Mise à niveau du contenu","Oppgradere innhold","Uppgradera innehåll","Opgrader indhold","Päivitä sisältö","升级内容"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta","取消"],
        "Never reminder":["Never reminder","",""]
    },
    rewrite:function(pageData){

        pageData.setting_update_ver_cur_value1.Data=pageData.operateData.curver;
        pageData.setting_update_ver_new_value1.Data=pageData.operateData.newver;
        pageData.setting_update_ver_content_box.Data.setting_sys_update_ver_box.Data = pageData.operateData.upgradecontent;
        if (pageData.operateData.isHasDisChange) {
            pageData.setting_update_review_btn.disable = false;
            ;
            pageData.setting_update_checkbox.disable = false;
            if (pageData.operateData.acceptDisclaimerFlag) {
                pageData.setting_update_ver_btn1.disable = false;
                ;
            }
            else {
                pageData.setting_update_ver_btn1.disable = true;
                ;
            }
        }
        else {
            pageData.setting_update_review_btn.disable = true;
            pageData.setting_update_checkbox.disable = true;
            pageData.setting_update_ver_btn1.disable = false;
        }

    }
};
function SettingUpdateVerInfoOk() {
    debugPrint(" ok is receive");
    if (this.id == "setting_update_ver_btn1") {
            debugPrint(" the  btn1 is select ")
            if(PageDateSettingUpdateFir.operateData.curtype==0)//internet
            {
                    {
                try {
                    hiWebOsFrame.enablePageKeysRemove(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                    this.page.close();
                    PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=1;
                    hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                    hiWebOsFrame.settingsupdatefir.open();
                    this.page.close();
                    hiWebOsFrame.enablePageKeys(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                    settingaboutUpdateback();
                    setTimeout(function(){
                        if (PageDateSettingUpdateverinfo.operateData.isHasDisChange) {
                            model.basicSetting.setDisclaimer(1);
                        }
                        model.softupdate.StartDownload();
                        g_sysisdownloadingflag=true;
                        debugE("start to download");
                    },1000)

                } catch (e) {
                        debugE(e.message);
                    }
                if (!tv) {
                         onUpdateDownloadProgressChaged(5);
                     }

                }
            }
        else if (PageDateSettingUpdateFir.operateData.curtype == 1) {
                debugPrint("in the oad upgrade")
                hiWebOsFrame.enablePageKeysRemove(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                this.page.close();
                PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=1;
                hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                hiWebOsFrame.settingsupdatefir.open();
                hiWebOsFrame.createPage('setting_update_verifying_page',null, hiWebOsFrame.settingsupdatefir, null,function(page){
                    hiWebOsFrame.settingsupdatedownload=page;
                    PageDateSettingUpdateverifying.operateData.manual=true;
                    hiWebOsFrame.settingsupdatedownload.open();
                    hiWebOsFrame.settingsupdatedownload.hiFocus();
                    hiWebOsFrame.enablePageKeys(hiWebOsFrame.settingsupdateverinfo,[VK_ENTER]);
                    setTimeout(function(){
                        model.softupdate.StartOadDownload();
                        debugE("start to download oad ");
                    if (!tv) {
                            onOadDownloadProgressChaged(-5);
                        }
                    },1000)
                if (!!g_OadDownloadfailtimer) {
                        clearTimeout(g_OadDownloadfailtimer);
                        g_OadDownloadfailtimer=null;
                    }
                    g_OadDownloadfailtimer= setTimeout(function(){
                        debugE("the download fail");
                        model.softupdate.CancelOADUpgrade();
                        onOadDownloadProgressChaged(-100);
                        g_OadDownloadfailtimer=null;
                    },1000*60*60);
               });

            }

    }
    else if (this.id == "setting_update_ver_btn2") {
        this.page.close();
        if (PageDateSettingUpdateFir.operateData.curtype == 0) {
            g_sysisdownloadingflag=true;
            settingaboutUpdateback();
        } else {
            try {
            model.softupdate.CancelOADUpgrade();
            } catch (e) {
               debugE(e.message);
           }
            settingaboutUpdateback();
        }

    }

}

function UpdateVersionPageonDestroy() {
    hiWebOsFrame.settingsupdateverinfo=null;
}
function settingUpdateCheckBoxOnFocus() {
    var data = PageDateSettingUpdateverinfo;
    if (data.operateData.acceptDisclaimerFlag == 0) {
        $("#setting_update_checkbox").attr("src", "img/checkbox_unselectFocus.png");
        data.setting_update_checkbox.Data = "img/checkbox_unselectFocus.png";
    } else {
        $("#setting_update_checkbox").attr("src", "img/checkbox_selectFocus.png");
        data.setting_update_checkbox.Data = "img/checkbox_selectFocus.png";
    }
//    hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
}
function settingUpdateCheckBoxOnBlur() {
    var data = PageDateSettingUpdateverinfo;
    if (data.operateData.acceptDisclaimerFlag == 0) {
        $("#setting_update_checkbox").attr("src", "img/checkbox_unselectNormal.png");
        data.setting_update_checkbox.Data = "img/checkbox_unselectNormal.png";
    } else {
        $("#setting_update_checkbox").attr("src", "img/checkbox_selectNormal.png");
        data.setting_update_checkbox.Data = "img/checkbox_selectNormal.png";
    }
//    hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
}
function ssettingUpdateCheckBoxEnter() {
    try {
        var data = PageDateSettingUpdateverinfo;
        if (data.operateData.acceptDisclaimerFlag == 0) {
            data.operateData.acceptDisclaimerFlag = 1;
            data.setting_update_checkbox.Data = "img/checkbox_selectFocus.png";
        } else {
            data.operateData.acceptDisclaimerFlag = 0;
            data.setting_update_checkbox.Data = "img/checkbox_unselectFocus.png";
        }
        hiWebOsFrame.settingsupdateverinfo.rewriteDataOnly();
    } catch (ex) {
        debugPrint("setSettingNetSetPWDisplayFlag:" + ex.message, DebugLevel.ERROR);
    }
}
function SettingUpdateVerEualEnter() {
    hiWebOsFrame.createPage('setting_sys_review_eula_page', null, hiWebOsFrame.settingsupdateverinfo, null, function (disclaimer) {
        hiWebOsFrame.settingssyseulaOta = disclaimer;
        disclaimer.data.operateData.currenheight = 0;
        disclaimer.rewriteDataOnly();
        disclaimer.open();
        disclaimer.hiFocus();
    });
}
function SettingUpdateVerInCancel() {
    this.page.close();
    hiWebOsFrame.settingsupdatefir.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    if (PageDateSettingUpdateFir.operateData.curtype == 0) {
     //   g_sysisdownloadingflag=true;
        settingaboutUpdateback();
    } else {
        try {
            model.softupdate.CancelOADUpgrade();
        } catch (e) {
            debugE(e.message);
        }
        settingaboutUpdateback();
    }
   // settingUpdatefirEscHandler();
   // settingaboutUpdateback();
}
function mytest() {
//    if(PageDateSettingUpdateFir.operateData.curtype==0)
//    {
//        hiWebOsFrame.settingsupdateload.getCaE("setting_update_load_progress1").setvalue(100);
//        setTimeout(mytest3 ,2000);
//
//    }
//    else {
    PageDateSettingUpdateprogress.operateData.curprogress=100;
    PageDateSettingUpdateprogress.operateData.curtype=1;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();
    hiWebOsFrame.settingsupdateprogress.open();
    hiWebOsFrame.settingsupdateprogress.hiFocus();
    PageDateSettingUpdateprogress.operateData.curprogress=0;
    PageDateSettingUpdateprogress.operateData.curtype=3;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();

  // }
}
function mytest3() {
    hiWebOsFrame.settingsupdateload.close();
    PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=2;
    hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
    hiWebOsFrame.settingsupdatefir.open();
    PageDateSettingUpdateprogress.operateData.curtype=0;
    PageDateSettingUpdateprogress.operateData.curprogress=0;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();
  //  hiWebOsFrame.settingsupdateprogress.getCaE("setting_update_progressing_progress1").setvalue(0);
    hiWebOsFrame.settingsupdateprogress.open();
    hiWebOsFrame.settingsupdateprogress.hiFocus();
    hiWebOsFrame.createPage('setting_sys_dialog1_page',null, hiWebOsFrame.settingsupdateprogress, null,function(dialog1){
        hiWebOsFrame.settingsupdatedialog1=dialog1;
        PageDataSetttingSysdialog1.operateData.curdatatype=3;
        hiWebOsFrame.settingsupdatedialog1.open();
        hiWebOsFrame.settingsupdatedialog1.hiFocus();
        hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();

    });
}


function SettingUpdateVerDownHandler() {
    var contenthigh=$("#setting_sys_update_ver_box").height();
    var boxheigh=$("#setting_update_ver_content").height();
    if ("HIS_EPOS_HD" == PageDateSettingUpdateverinfo.operateData.resolution ||
        "HIS_EPOS_FHD" == PageDateSettingUpdateverinfo.operateData.resolution) {
        if ((contenthigh - this.page.operateData.currenheight * 0.7115) > boxheigh) {
            this.page.operateData.currenheight+=this.page.operateData.step;
            $("#setting_sys_update_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
            var temp=parseInt(341* 0.7115/contenthigh*this.page.operateData.currenheight);
            if (temp > 341 - $("#setting_sys_ver_srcollbar").height() / 0.7115) {
                temp=341-$("#setting_sys_ver_srcollbar").height()/ 0.7115
            }
            $("#setting_sys_ver_srcollbar").css("top",temp);
        }
        else {
            if (PageDateSettingUpdateverinfo.operateData.isHasDisChange) {
                hiWebOsFrame.settingsupdateverinfo.hiFocus("setting_update_checkbox")
    }
    else {
                hiWebOsFrame.settingsupdateverinfo.hiFocus("setting_update_ver_btn1")
            }
        }
    }
    else {
        if ((contenthigh - this.page.operateData.currenheight) > boxheigh) {
        this.page.operateData.currenheight+=this.page.operateData.step;
        $("#setting_sys_update_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        var temp=parseInt(341/contenthigh*this.page.operateData.currenheight);
            if (temp > 341 - $("#setting_sys_ver_srcollbar").height()) {
            temp=341-$("#setting_sys_ver_srcollbar").height()
        }
        $("#setting_sys_ver_srcollbar").css("top",temp);
        }
        else {
            if (PageDateSettingUpdateverinfo.operateData.isHasDisChange) {
                hiWebOsFrame.settingsupdateverinfo.hiFocus("setting_update_checkbox")
            }
            else {
                hiWebOsFrame.settingsupdateverinfo.hiFocus("setting_update_ver_btn1")
            }
    }
    }

}

function SettingUpdateVerUpHandler(){

    var contenthigh=$("#setting_sys_update_ver_box").height();
    var boxheigh=$("#setting_update_ver_content").height();
    if (this.page.operateData.currenheight > 0) {
        if (this.page.operateData.currenheight > this.page.operateData.step) {
            this.page.operateData.currenheight-=this.page.operateData.step;
        }
        else {
            this.page.operateData.currenheight=0;
        }
        $("#setting_sys_update_ver_box").css("top","-"+ this.page.operateData.currenheight+"px");
        if ("HIS_EPOS_HD" == PageDateSettingUpdateverinfo.operateData.resolution ||
            "HIS_EPOS_FHD" == PageDateSettingUpdateverinfo.operateData.resolution) {
            var temp = parseInt(341* 0.7115/ contenthigh * this.page.operateData.currenheight);
        }else {
        var temp=parseInt(341/contenthigh*this.page.operateData.currenheight);
        }
        $("#setting_sys_ver_srcollbar").css("top",temp);
    }
}
function VerpageOpenHandler() {
    var contenthigh=$("#setting_sys_update_ver_box").height();
    var boxheigh=$("#setting_update_ver_content").height();
    if (contenthigh > boxheigh) {
        var temp=parseInt(341/contenthigh*boxheigh);
        $("#setting_sys_ver_srcollbar").css("height",temp);
        $("#setting_sys_ver_srcollbar").css("visibility","visible");
    }
    else {
        $("#setting_sys_ver_srcollbar").css("visibility","hidden");
    }
    this.data.operateData.currenheight=0;
    $("#setting_sys_update_ver_box").css("top","-"+ this.data.operateData.currenheight+"px");
    PageDateSettingUpdateverinfo.operateData.resolution =tv ? model.system.getCurResolution() : 'HD';
    debugPrint("resolution is " + PageDateSettingUpdateverinfo.operateData.resolution);
    if (PageDateSettingUpdateverinfo.operateData.isHasDisChange) {
        $("#setting_update_eulaota").css("visibility", "visible");

    }
    else {
        $("#setting_update_eulaota").css("visibility", "hidden");
    }
    if (PageDateSettingUpdateverinfo.operateData.acceptDisclaimerFlag == 0) {
        $("#setting_update_checkbox").attr("src", "img/checkbox_unselectNormal.png");
        PageDateSettingUpdateverinfo.setting_update_checkbox.Data = "img/checkbox_unselectNormal.png";
    } else {
        $("#setting_update_checkbox").attr("src", "img/checkbox_selectNormal.png");
        PageDateSettingUpdateverinfo.setting_update_checkbox.Data = "img/checkbox_selectNormal.png";
    }
}
