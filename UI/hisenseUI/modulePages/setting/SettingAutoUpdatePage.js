/**
 * Created by Administrator on 14-7-10.
 */
function getAutoUpdateVersionData(opt) {
    opt.CaE = [
        {
            "id": "setting_autoupdate_ver_title",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_autoupdate_ver_cur",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_autoupdate_ver_cur_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_autoupdate_ver_new",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_autoupdate_ver_new_value1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_autoupdate_ver_con_title",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_autoupdate_eula",
            "description": "",
            "CaEType": "span",
            "disable": false
        },

        {
            "id": "setting_autoupdate_ver_content_box",
            "description": "ok",
            "classes": {
                "normal": "setting_update_ver_content_normal", "focus": "setting_update_ver_content_focus", "selected": "setting_update_ver_content_focus"
            },
            "firstFocusId": "setting_sys_autoupdate_ver_box",
            "CaEType": "Container",
            "CaE": [{
                "id": "setting_sys_autoupdate_ver_box",
                "description": "",
                "CaEType": "div",
                "enableHtml": true,
                "disable": false

            }],

            "handler": {
                "befDownHandler": "SettingAutoUpdateVerDownHandler",
                "befUpHandler": "SettingAutoUpdateVerUpHandler",

            },
            "nav": {"downTo": ""}

        },
        {
            "id": "setting_autoupdate_checkbox",
            "description": "",
            "CaEType": "img",
            "onFocusFun": "settingUpdateCheckBoxOnFocus",
            "onBlurFun": "settingUpdateCheckBoxOnBlur",
            "handler": {
                "aftEnterHandler": "ssettingUpdateCheckBoxEnter",
            },
            "nav": {
                "upTo": "setting_autoupdate_ver_content_box", "downTo": "setting_autoupdate_ver_btn1",
                "rightTo": "setting_autoupdate_review_btn",
            },
            "classes": {
                "normal": "", "focus": ""
            }
        },

        {
            "id": "setting_autoupdate_review_btn",
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
                "leftTo": "setting_autoupdate_checkbox",
                "upTo": "setting_autoupdate_ver_content_box",
                "downTo": "setting_autoupdate_ver_btn3"
            }

        },

        {
            "id": "setting_autoupdate_ver_btn1",
            "description": "ok",
            "classes": {
                "normal": "setting_update_ver_button",
                "focus": "setting_update_ver_button_focus",
                "disable": "setting_update_ver_button_disable"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': "SettingAutoUpdateVerInfoOk",//点击enter事件后处理
                //"aftDownHandler": "SettingAutoUpdateVerDownHandler",
                //"aftUpHandler": "SettingAutoUpdateVerUpHandler",
                "aftLeftHandler": "SettingAutoUpdateFocus",
                "aftRightHandler": "SettingAutoUpdateFocus"

            },
            "nav": {
                "rightTo": "setting_autoupdate_ver_btn2",
                "upTo": "setting_autoupdate_checkbox",
                "downTo": "setting_autoupdate_ver_btn1"
            }

        },
        {
            "id": "setting_autoupdate_ver_btn2",
            "description": "cancel",
            "classes": {
                "normal": "setting_update_ver_button",
                "focus": "setting_update_ver_button_focus",
                "disable": "setting_update_ver_button_disable"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': "SettingAutoUpdateVerInfoOk",//点击enter事件后处理
                //"aftDownHandler": "SettingAutoUpdateVerDownHandler",
                "aftLeftHandler": "SettingAutoUpdateFocus",
                "aftRightHandler": "SettingAutoUpdateFocus"
                //"aftUpHandler": "SettingAutoUpdateVerUpHandler"

            },
            "nav": {
                "leftTo": "setting_autoupdate_ver_btn1",
                "upTo": "setting_autoupdate_checkbox",
                "downTo": "setting_autoupdate_ver_btn2",
                "rightTo": "setting_autoupdate_ver_btn3"
            }

        },
        {
            "id": "setting_autoupdate_ver_btn3",
            "description": "cancel",
            "classes": {
                "normal": "setting_update_ver_button",
                "focus": "setting_update_ver_button_focus",
                "disable": "setting_update_ver_button_disable"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': "SettingAutoUpdateVerInfoOk",//点击enter事件后处理
                //"aftDownHandler": "SettingAutoUpdateVerDownHandler",
                "aftLeftHandler": "SettingAutoUpdateFocus",
                "aftRightHandler": "SettingAutoUpdateFocus"
                //"aftUpHandler": "SettingAutoUpdateVerUpHandler"

            },
            "nav": {
                "leftTo": "setting_autoupdate_ver_btn2",
                "upTo": "setting_autoupdate_review_btn",
                "downTo": "setting_autoupdate_ver_btn3"
            }


        }

    ];
    //  SettingAutoUpdateinit();
    return PageDateSettingAutoUpdate;
}
var PageDateSettingAutoUpdate = {
    "setting_autoupdate_ver_title": {Data: "Upgrade"},
    "setting_autoupdate_ver_cur": {Data: "Current version:"},
    "setting_autoupdate_ver_cur_value1": {Data: "V1.0"},
    "setting_autoupdate_ver_new": {Data: "Latest version:"},
    "setting_autoupdate_ver_new_value1": {Data: "V1.2"},
    "setting_autoupdate_ver_con_title": {Data: "Upgrade content"},
    "setting_autoupdate_eula": {Data: "Accept EULA"},
    "setting_autoupdate_checkbox": {"Data": "img/checkbox_unselectNormal.png"},
    "setting_autoupdate_ver_content_box": {
        "Data": {
            "setting_sys_autoupdate_ver_box": {Data: "1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>1:content<br>"},
        }
    },
    "setting_autoupdate_review_btn": {Data: "Review All"},
    "setting_autoupdate_ver_btn1": {Data: "Upgrade"},
    "setting_autoupdate_ver_btn2": {Data: "Cancel"},
    "setting_autoupdate_ver_btn3": {Data: "Never remind"},
    "operateData": {
        "curver": "V1.00.00.00",
        "type": 0,
        "newver": "V1.00.00.02",
        "currenheight": 0,
        "step": 42,
        "isHasDisChange": false,
        "acceptDisclaimerFlag": 0,
        "upgradecontent": ""

    },
    "langData": {
        "Upgrade": ["Upgrade", "Aktualisierung", "Aggiornamento", "Atualizar", "Actualizar", "Mise à niveau", "Oppgradering", "Uppgradera", "Opgrader", "Päivitys", "软件升级"],
        "Current version:": ["Current version:", "Aktuelle Version:", "Versione corrente:", "Versão atual:", "Versión actual:", "Version actuelle:", "Gjeldende versjon:", "Nuvarande version:", "Nuværende version:", "Nykyinen versio:", "当前版本:"],
        "Latest version:": ["Latest version:", "Aktuellste Version:", "Ultima versione:", "Versão mais recente:", "Última versión:", "Version la plus récente:", "Nyeste versjon:", "Senaste versionen:", "Nyeste version:", "Uusin versio:", "最新版本:"],
        "Upgrade content": ["Upgrade content", "Inhalt aktualisieren", "Aggiorna il contenuto", "Atualizar conteúdos", "Actualizar contenido", "Mise à niveau du contenu", "Oppgradere innhold", "Uppgradera innehåll", "Opgrader indhold", "Päivitä sisältö", "升级内容"],
        "Cancel": ["Cancel", "Abbrechen", "Annulla", "Cancelar", "Cancelar", "Annuler", "Avbryt", "Avbryt", "Annuller", "Peruuta", "取消"],
        "Never remind": ["Never reminder", "", ""]
    },
    rewrite: function (pageData) {
//        pageData.setting_update_ver_title.Data=pageData.langData.title[langIdx];
//        pageData.setting_update_ver_cur.Data=pageData.langData.curver[langIdx];
//        pageData.setting_update_ver_new.Data=pageData.langData.newver[langIdx];
        pageData.setting_autoupdate_ver_cur_value1.Data = pageData.operateData.curver;
        pageData.setting_autoupdate_ver_new_value1.Data = pageData.operateData.newver;
        pageData.setting_autoupdate_ver_content_box.Data.setting_sys_autoupdate_ver_box.Data = pageData.operateData.upgradecontent;
        if (pageData.operateData.isHasDisChange) {
            pageData.setting_autoupdate_review_btn.disable = false;
            ;
            pageData.setting_autoupdate_checkbox.disable = false;
            if (pageData.operateData.acceptDisclaimerFlag) {
                pageData.setting_autoupdate_ver_btn1.disable = false;
                ;
            }
            else {
                pageData.setting_autoupdate_ver_btn1.disable = true;
                ;
            }
        }
        else {
            pageData.setting_autoupdate_review_btn.disable = true;
            pageData.setting_autoupdate_checkbox.disable = true;
            pageData.setting_autoupdate_ver_btn1.disable = false;
        }


    }
};
function AutoUpdateonDestroy() {
    hiWebOsFrame.settingsautoupdate = null;
}
function settingUpdateCheckBoxOnFocus() {
    var data = PageDateSettingAutoUpdate;
    if (data.operateData.acceptDisclaimerFlag == 0) {
        $("#setting_autoupdate_checkbox").attr("src", "img/checkbox_unselectFocus.png");
        data.setting_autoupdate_checkbox.Data = "img/checkbox_unselectFocus.png";
    } else {
        $("#setting_autoupdate_checkbox").attr("src", "img/checkbox_selectFocus.png");
        data.setting_autoupdate_checkbox.Data = "img/checkbox_selectFocus.png";
    }
//    hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
}
function settingUpdateCheckBoxOnBlur() {
    var data = PageDateSettingAutoUpdate;
    if (data.operateData.acceptDisclaimerFlag == 0) {
        $("#setting_autoupdate_checkbox").attr("src", "img/checkbox_unselectNormal.png");
        data.setting_autoupdate_checkbox.Data = "img/checkbox_unselectNormal.png";
    } else {
        $("#setting_autoupdate_checkbox").attr("src", "img/checkbox_selectNormal.png");
        data.setting_autoupdate_checkbox.Data = "img/checkbox_selectNormal.png";
    }
//    hiWebOsFrame.NetSetPWInputDialog.rewriteDataOnly();
}
function ssettingUpdateCheckBoxEnter() {
    try {
        var data = PageDateSettingAutoUpdate;
        if (data.operateData.acceptDisclaimerFlag == 0) {
            data.operateData.acceptDisclaimerFlag = 1;
            data.setting_autoupdate_checkbox.Data = "img/checkbox_selectFocus.png";

        } else {
            data.operateData.acceptDisclaimerFlag = 0;
            data.setting_autoupdate_checkbox.Data = "img/checkbox_unselectFocus.png";

        }
        hiWebOsFrame.settingsautoupdate.rewriteDataOnly();
    } catch (ex) {
        debugPrint("setSettingNetSetPWDisplayFlag:" + ex.message, DebugLevel.ERROR);
    }

}
function SettingUpdateVerEualEnter() {
    hiWebOsFrame.createPage('setting_sys_review_eula_page', null, hiWebOsFrame.settingsautoupdate, null, function (disclaimer) {
        hiWebOsFrame.settingssyseulaOta = disclaimer;
        disclaimer.data.operateData.currenheight = 0;
        disclaimer.rewriteDataOnly();
        disclaimer.open();
        disclaimer.hiFocus();

    });

}

function SettingAutoUpdateFocus() {

    if (this.id == "setting_autoupdate_ver_btn1") {
        SettingAutoUpdatDelMarquee();
        SettingAutoUpdatAddMarquee("setting_autoupdate_ver_btn1")
    }
    else if (this.id == "setting_autoupdate_ver_btn2") {
        SettingAutoUpdatDelMarquee();
        SettingAutoUpdatAddMarquee("setting_autoupdate_ver_btn2")
    }
    else if (this.id == "setting_autoupdate_ver_btn3") {
        SettingAutoUpdatDelMarquee();
        SettingAutoUpdatAddMarquee("setting_autoupdate_ver_btn3")
    }
}
function SettingAutoUpdatAddMarquee(button) {
    try {

        var htmlText = $("#" + button).html()
        if (htmlText.length > 16) {
            $("#" + button).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }


    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingAutoUpdatDelMarquee() {
    try {
        var marquee = $("#setting_autoupdate_ver_btn1" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_autoupdate_ver_btn1" + " marquee").html();
            var marquee = $("#setting_autoupdate_ver_btn1").html(htmlText);
        }
        var marquee = $("#setting_autoupdate_ver_btn2" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_autoupdate_ver_btn2" + " marquee").html();
            var marquee = $("#setting_autoupdate_ver_btn2").html(htmlText);
        }
        var marquee = $("#setting_autoupdate_ver_btn3" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_autoupdate_ver_btn3" + " marquee").html();
            var marquee = $("#setting_autoupdate_ver_btn3").html(htmlText);
        }

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingAutoUpdateVerInfoOk() {
    debugPrint("SettingAutoUpdateVerInfoOk")
    if (this.id == "setting_autoupdate_ver_btn1") {

        if (PageDateSettingAutoUpdate.operateData.type == 0) {


            this.page.close();
            this.page.origin.open();
            this.page.origin.hiFocus();
            this.page.destroy();
            setTimeout(function () {
                if(PageDateSettingAutoUpdate.operateData.isHasDisChange){
                    model.basicSetting.setDisclaimer(1)
                }
                model.softupdate.StartDownload();
                debugE("start to  ota download");
                if (!tv) {
                    onUpdateDownloadProgressChaged(5);
                }
            }, 1000)
        } else {
            hiWebOsFrame.settingsautoupdate.close();
            hiWebOsFrame.createPage('setting_update_fir_page', null, this.page.origin, null, function (fir) {
                hiWebOsFrame.settingsupdatefir = fir;
                PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex = 1;
                hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                fir.close();
                hiWebOsFrame.createPage('setting_update_verifying_page', null, hiWebOsFrame.settingsupdatefir, null, function (page) {
                    hiWebOsFrame.settingsupdatedownload = page;
                    PageDateSettingUpdateverifying.operateData.manual = false;
                    hiWebOsFrame.settingsupdatedownload.origin = hiWebOsFrame.settingsautoupdate.origin;
                    hiWebOsFrame.settingsupdatefir.open();
                    hiWebOsFrame.settingsupdatedownload.open();
                    hiWebOsFrame.settingsupdatedownload.hiFocus();
                    hiWebOsFrame.settingsautoupdate.destroy();
                    setTimeout(function () {
                        model.softupdate.StartOadDownload();
                        debugE("start to download oad ");
                        if (!tv) {
                            onOadDownloadProgressChaged(5);
                        }
                    }, 1000)
                    if (!!g_OadDownloadfailtimer) {
                        clearTimeout(g_OadDownloadfailtimer);
                        g_OadDownloadfailtimer = null;

                    }
                    g_OadDownloadfailtimer = setTimeout(function () {
                        debugE("the download fail");
                        model.softupdate.CancelOADUpgrade();
                        onOadDownloadProgressChaged(-100);
                        g_OadDownloadfailtimer = null;
                    }, 1000 * 60 * 60);
                });
            });
        }

    }
    else if (this.id == "setting_autoupdate_ver_btn2") {
        //todo
        if (PageDateSettingAutoUpdate.operateData.type == 1) {
            model.softupdate.CancelOADUpgrade();
        }
        this.page.close();
        this.page.origin.open();
        this.page.origin.hiFocus();
        if (!!hiWebOsFrame.settingsupdatefir) {
            hiWebOsFrame.settingsupdatefir.destroy();
        }
        if (!!hiWebOsFrame.settingsupdateprogress) {
            hiWebOsFrame.settingsupdateprogress.destroy();
        }
        if (!!hiWebOsFrame.settingsupdatedialog1) {
            hiWebOsFrame.settingsupdatedialog1.destroy();
        }
        if (!!hiWebOsFrame.settingsupdatereport) {
            hiWebOsFrame.settingsupdatereport.destroy();
        }
        this.page.destroy();

    }
    else if (this.id == "setting_autoupdate_ver_btn3") {
        if (PageDateSettingAutoUpdate.operateData.type == 0)//ota
        {
            model.softupdate.setAutoAnnouncementEnabled(0);
        }
        else {
            model.softupdate.setOadAutoUpdateEnabled(0);
        }
        this.page.close();
        this.page.origin.open();
        this.page.origin.hiFocus();
        if (!!hiWebOsFrame.settingsupdatefir) {
            hiWebOsFrame.settingsupdatefir.destroy();
        }
        if (!!hiWebOsFrame.settingsupdateprogress) {
            hiWebOsFrame.settingsupdateprogress.destroy();
        }
        if (!!hiWebOsFrame.settingsupdatedialog1) {
            hiWebOsFrame.settingsupdatedialog1.destroy();
        }
        if (!!hiWebOsFrame.settingsupdatereport) {
            hiWebOsFrame.settingsupdatereport.destroy();
        }
        if (!!hiWebOsFrame.settingupdatediskcheck) {
            hiWebOsFrame.settingupdatediskcheck.destroy();
        }

        this.page.destroy();
    }

}
function mytest() {

    // hiWebOsFrame.settingsupdateprogress.getCaE("setting_update_progressing_progress1").setvalue(100);
    PageDateSettingUpdateprogress.operateData.curtype = 1;
    PageDateSettingUpdateprogress.operateData.curprogress = 100;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();
    hiWebOsFrame.settingsupdateprogress.open();
    hiWebOsFrame.settingsupdateprogress.hiFocus();
    hiWebOsFrame.settingsupdatefir.close();
    hiWebOsFrame.settingsupdateprogress.close();
    hiWebOsFrame.createPage('setting_sys_dialog1_page', null, hiWebOsFrame.settingsautoupdate.origin, null, function (dialog1) {
        hiWebOsFrame.settingsupdatedialog1 = dialog1;
        PageDataSetttingSysdialog1.operateData.curdatatype = 4;
        hiWebOsFrame.settingsupdatedialog1.open();
        hiWebOsFrame.settingsupdatedialog1.hiFocus();
        hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();

    });

}
function mytest3() {
    hiWebOsFrame.settingsupdateload.close();
    PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex = 2;
    hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
    hiWebOsFrame.settingsupdatefir.open();
    PageDateSettingUpdateprogress.operateData.curtype = 0;
    PageDateSettingUpdateprogress.operateData.curprogress = 0;
    hiWebOsFrame.settingsupdateprogress.rewriteDataOnly();
    // hiWebOsFrame.settingsupdateprogress.getCaE("setting_update_progressing_progress1").setvalue(0);
    hiWebOsFrame.settingsupdateprogress.open();
    hiWebOsFrame.settingsupdateprogress.hiFocus();
    hiWebOsFrame.createPage('setting_sys_dialog1_page', null, hiWebOsFrame.settingsupdateprogress, null, function (dialog1) {
        hiWebOsFrame.settingsupdatedialog1 = dialog1;
        PageDataSetttingSysdialog1.operateData.curdatatype = 4;
        hiWebOsFrame.settingsupdatedialog1.open();
        hiWebOsFrame.settingsupdatedialog1.hiFocus();
        hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();

    });
}
function SettingAutoUpdateinit() {
    try {
        if (PageDateSettingAutoUpdate.operateData.type == 0) {
            var flag = tv?model.softupdate.getEulaFlag():1;
            if (flag > 0) {
                PageDateSettingAutoUpdate.operateData.isHasDisChange = true;
            } else {
                PageDateSettingAutoUpdate.operateData.isHasDisChange = false;
            }
            if (PageDateSettingAutoUpdate.operateData.isHasDisChange) {
                PageDateSettingAutoUpdate.operateData.acceptDisclaimerFlag = 0;
            }
            PageDateSettingAutoUpdate.operateData.curver = model.softupdate.getCurrentPacket();
            var temp = model.softupdate.getHisenseCurrentVersion();
            debugPrint(" the internet software version " + temp);
            PageDateSettingAutoUpdate.operateData.newver = temp;//
            temp = model.softupdate.getHisenseVersionDescription();
            debugPrint(" the internet software description " + temp);
            temp = temp.replace(/&/g, "&amp;");
            temp = temp.replace(/"/g, "&quot;");
            temp = temp.replace(/'/g, "&apos;");
            temp = temp.replace(/</g, "&lt;");
            temp = temp.replace(/>/g, "&gt;");
            temp = temp.replace(/[\r]/g, "");
            PageDateSettingAutoUpdate.operateData.upgradecontent = temp.replace(/\n/g, "<br>");

        }
        else {
            PageDateSettingAutoUpdate.operateData.curver = model.softupdate.getCurrentPacket();
            var temp = model.softupdate.getOadCurrentVersion();
            debugPrint(" the internet software version " + temp);
            PageDateSettingAutoUpdate.operateData.newver = temp;//
            temp = model.softupdate.getOadVersionDescription();
            debugPrint(" the internet software description " + temp);
            temp = temp.replace(/&/g, "&amp;");
            temp = temp.replace(/"/g, "&quot;");
            temp = temp.replace(/'/g, "&apos;");
            temp = temp.replace(/</g, "&lt;");
            temp = temp.replace(/>/g, "&gt;");
            temp = temp.replace(/[\r]/g, "");
            PageDateSettingAutoUpdate.operateData.upgradecontent = temp.replace(/\n/g, "<br>");
        }

    } catch (e) {
        debugE(e.message)
    }

}


function SettingAutoUpdateVerDownHandler() {
    var contenthigh = $("#setting_sys_autoupdate_ver_box").height();
    var boxheigh = $("#setting_autoupdate_ver_content").height();
    if ("HIS_EPOS_HD" == PageDateSettingAutoUpdate.operateData.resolution ||
        "HIS_EPOS_FHD" == PageDateSettingAutoUpdate.operateData.resolution) {
        if ((contenthigh - this.page.operateData.currenheight * 0.7115) > boxheigh) {
            this.page.operateData.currenheight += this.page.operateData.step;
            $("#setting_sys_autoupdate_ver_box").css("top", "-" + this.page.operateData.currenheight + "px");
            var temp = parseInt(341 * 0.7115 / contenthigh * this.page.operateData.currenheight);
            if (temp > 341 - $("#setting_sys_autoupdate_ver_srcollbar").height() / 0.7115) {
                temp = 341 - $("#setting_sys_autoupdate_ver_srcollbar").height() / 0.7115
            }
            $("#setting_sys_autoupdate_ver_srcollbar").css("top", temp);
        }
        else {
            if(PageDateSettingAutoUpdate.operateData.isHasDisChange) {
                hiWebOsFrame.settingsautoupdate.hiFocus("setting_autoupdate_checkbox")
            }
            else {
                hiWebOsFrame.settingsautoupdate.hiFocus("setting_autoupdate_ver_btn1")
            }
        }

    }
    else {
        if ((contenthigh - this.page.operateData.currenheight) > boxheigh) {
            this.page.operateData.currenheight += this.page.operateData.step;
            $("#setting_sys_autoupdate_ver_box").css("top", "-" + this.page.operateData.currenheight + "px");
            var temp = parseInt(341 / contenthigh * this.page.operateData.currenheight);
            if (temp > 341 - $("#setting_sys_autoupdate_ver_srcollbar").height()) {
                temp = 341 - $("#setting_sys_autoupdate_ver_srcollbar").height()
            }
            $("#setting_sys_autoupdate_ver_srcollbar").css("top", temp);
        }
        else {
            if (PageDateSettingAutoUpdate.operateData.isHasDisChange) {
                hiWebOsFrame.settingsautoupdate.hiFocus("setting_autoupdate_checkbox")
            }
            else {
                hiWebOsFrame.settingsautoupdate.hiFocus("setting_autoupdate_ver_btn1")
            }
        }
    }

}

function SettingAutoUpdateVerUpHandler() {

    var contenthigh = $("#setting_sys_autoupdate_ver_box").height();
    var boxheigh = $("#setting_autoupdate_ver_content").height();
    if (this.page.operateData.currenheight > 0) {
        if (this.page.operateData.currenheight > this.page.operateData.step) {
            this.page.operateData.currenheight -= this.page.operateData.step;
        }
        else {
            this.page.operateData.currenheight = 0;
        }
        $("#setting_sys_autoupdate_ver_box").css("top", "-" + this.page.operateData.currenheight + "px");
        if ("HIS_EPOS_HD" == PageDateSettingAutoUpdate.operateData.resolution ||
            "HIS_EPOS_FHD" == PageDateSettingAutoUpdate.operateData.resolution) {
            var temp = parseInt(341 * 0.7115 / contenthigh * this.page.operateData.currenheight);
        } else {
            var temp = parseInt(341 / contenthigh * this.page.operateData.currenheight);
        }
        $("#setting_sys_autoupdate_ver_srcollbar").css("top", temp);
    }

}
function AutoUpdateOpenHandler() {
    var contenthigh = $("#setting_sys_autoupdate_ver_box").height();
    var boxheigh = $("#setting_autoupdate_ver_content").height();
    if (contenthigh > boxheigh) {
        var temp = parseInt(341 / contenthigh * boxheigh);
        $("#setting_sys_autoupdate_ver_srcollbar").css("height", temp);
        $("#setting_sys_autoupdate_ver_srcollbar").css("visibility", "visible");
    }
    else {
        $("#setting_sys_autoupdate_ver_srcollbar").css("visibility", "hidden");
    }
    this.data.operateData.currenheight = 0;
    $("#setting_sys_autoupdate_ver_box").css("top", "-" + this.data.operateData.currenheight + "px");
    SettingAutoUpdatDelMarquee();
    SettingAutoUpdatAddMarquee("setting_autoupdate_ver_btn1")
    PageDateSettingAutoUpdate.operateData.resolution = tv ? model.system.getCurResolution() : 'HD';
    debugPrint("resolution is " + PageDateSettingAutoUpdate.operateData.resolution);
    if (PageDateSettingAutoUpdate.operateData.isHasDisChange) {
        $("#setting_autoupdate_eulaota").css("visibility", "visible");

    }
    else {
        $("#setting_autoupdate_eulaota").css("visibility", "hidden");
    }
}
