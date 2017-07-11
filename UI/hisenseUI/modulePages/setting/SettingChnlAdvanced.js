/**
 * Created by ghl on 14-6-19.
 */



function getSettingChnlAdvancedData(opts) {
    SettingChnlAdvancedInit();
    opts.CaE = [
        {
            "id": "setting_chnl_advanced_title_text",
            "description": "Setting Channel高级设置页面Title",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_epg_mark_text",
            "description": "Setting Channel高级设置页面导出到U盘 Text",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_help_info",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_export_to_usb_text",
            "description": "Setting Channel高级设置页面导出到U盘 Text",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_import_from_usb_text",
            "description": "Setting Channel高级设置页面从U盘下载 Text",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_simple_CH_mode_text",
            "description": "Setting Channel高级设置页面simple CH Mode  Text",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_common_interface_text",
            "description": "Setting Channel Common Interface Text",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_common_interface_store_pin_text",
            "description": "CI PIN left text",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_common_interface_op_entry_text",
            "description": "op search entery text",
            "CaEType": "div"
        },

        {
            "id": "setting_chnl_advanced_epg_mark_cmp",
            "description": "Setting Channel高级设置页面导出到U盘部件",
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "SettingChnlEPGMarkEnterHandler",
                "aftEscHandler": "SettingChnlAdvancedEscHandler",
                "befLeftHandler": "SettingChnlAdvancedEscHandler",
                aftDownHandler: "SettingChnlAdvAftDownHandler",
                aftUpHandler: "SettingChnlAdvAftUpHandler",
                befDownHandler: "SettingChlAdvObj.delMarquee"
            },
            "nav": {
                "upTo": "",
                "downTo": "setting_chnl_advanced_export_to_usb_cmp"
            },
            "classes": {
                "normal": "setting_chnl_advanced_export_to_usb_cmp_normal",
                "focus": "setting_chnl_advanced_export_to_usb_cmp_focus",
                "disable": "setting_chnl_advanced_export_to_usb_cmp_disable",
                "selected": ""
            }
        },
        {
            "id": "setting_chnl_advanced_export_to_usb_cmp",
            "description": "Setting Channel高级设置页面导出到U盘部件",
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "SettingChnlOpenExportToUSBDialog",
                "aftEscHandler": "SettingChnlAdvancedEscHandler",
                "befLeftHandler": "SettingChnlAdvancedEscHandler"
            },
            "nav": {
                "upTo": "setting_chnl_advanced_epg_mark_cmp",
                "downTo": "setting_chnl_advanced_import_from_usb_cmp"
            },
            "classes": {
                "normal": "setting_chnl_advanced_export_to_usb_cmp_normal",
                "focus": "setting_chnl_advanced_export_to_usb_cmp_focus",
                "disable": "setting_chnl_advanced_export_to_usb_cmp_disable",
                "selected": ""
            }
        },
        {
            "id": "setting_chnl_advanced_import_from_usb_cmp",
            "description": "Setting Channel高级设置页面从U盘下载 部件",
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "SettingChnlOpenImportFromUSBDialog",
                "aftEscHandler": "SettingChnlAdvancedEscHandler",
                "befLeftHandler": "SettingChnlAdvancedEscHandler"
            },
            "nav": {
                "downTo": "setting_chnl_advanced_common_interface_cmp",
                "upTo": "setting_chnl_advanced_export_to_usb_cmp"
            },
            "classes": {
                "normal": "setting_chnl_advanced_export_to_usb_cmp_normal",
                "focus": "setting_chnl_advanced_export_to_usb_cmp_focus",
                "disable": "setting_chnl_advanced_export_to_usb_cmp_disable",
                "selected": ""
            }
        },
        {
            "id": "setting_chnl_advanced_common_interface_cmp",
            "description": "Setting ChannelCommonInterface 部件",
            "CaEType": "div",
            "nav": {
                "downTo": "setting_chnl_advanced_common_interface_store_pin_cmp",
                "upTo": "setting_chnl_advanced_import_from_usb_cmp"
            },
            "handler": {
                "aftEscHandler": "SettingChnlAdvancedEscHandler",
                "befLeftHandler": "SettingChnlAdvancedEscHandler",
                "aftEnterHandler": "SettingChnlOpenCIEnterHandler",
                aftDownHandler: "SettingChnlAdvAftDownHandler",
                aftUpHandler: "SettingChnlAdvAftUpHandler"
            },
            "classes": {
                "normal": "setting_chnl_advanced_export_to_usb_cmp_normal",
                "focus": "setting_chnl_advanced_export_to_usb_cmp_focus",
                "disable": "setting_chnl_advanced_export_to_usb_cmp_disable",
                "selected": ""
            }
        },
        {
            "id": "setting_chnl_advanced_common_interface_store_pin_cmp",
            "description": "setting_chnl_advanced_common_interface_store_pin_cmp",
            "CaEType": "div",
            "nav": {
                "downTo": "setting_chnl_advanced_common_interface_op_entry_cmp",
                "upTo": "setting_chnl_advanced_common_interface_cmp"
            },
            "handler": {
                "aftEscHandler": "SettingChnlAdvancedEscHandler",
                "befLeftHandler": "SettingChnlAdvancedEscHandler",
                "aftEnterHandler": "SettingChnlCIStorePINEnterHandler",
                aftDownHandler: "SettingChnlAdvAftDownHandler",
                aftUpHandler: "SettingChnlAdvAftUpHandler"
            },
            "classes": {
                "normal": "setting_chnl_advanced_export_to_usb_cmp_normal",
                "focus": "setting_chnl_advanced_export_to_usb_cmp_focus",
                "disable": "setting_chnl_advanced_export_to_usb_cmp_disable",
                "selected": ""
            }
        },

        {
            "id": "setting_chnl_advanced_common_interface_op_entry_cmp",
            "description": "setting_chnl_advanced_common_interface_op_entry_cmp",
            "CaEType": "div",
            "nav": {
                "downTo": "setting_chnl_advanced_simple_CH_mode_cmp",
                "upTo": "setting_chnl_advanced_common_interface_store_pin_cmp"
            },
            "handler": {
                "aftEscHandler": "SettingChnlAdvancedEscHandler",
                "befLeftHandler": "SettingChnlAdvancedEscHandler",
                "aftEnterHandler": "SettingChnlCamOPSearchEnterHandler",
                aftDownHandler: "SettingChnlAdvAftDownHandler",
                aftUpHandler: "SettingChnlAdvAftUpHandler"
            },
            "classes": {
                "normal": "setting_chnl_advanced_export_to_usb_cmp_normal",
                "focus": "setting_chnl_advanced_export_to_usb_cmp_focus",
                "disable": "setting_chnl_advanced_export_to_usb_cmp_disable",
                "selected": ""
            }
        },
        {
            "id": "setting_chnl_advanced_simple_CH_mode_cmp",
            "description": "Setting Channel高级设置页面simple CH Mode部件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                //"downTo": "setting_chnl_advanced_export_to_usb_cmp"
                "upTo": "setting_chnl_advanced_common_interface_op_entry_cmp"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingChnlSimpleCHFlip',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingChnlAdvancedEscHandler"
            }
        }


    ];
    return PageDataSettingChnlAdvanced;
}

function onSettingChnlAdvancedOpen() {
    try {

        if ('EU' == InitArea) {
            hiWebOsFrame.SettingChnlAdvancedPage.firstFocusId = 'setting_chnl_advanced_epg_mark_cmp';
            if (isCurrentCoutryWSG()) {
                hiWebOsFrame.SettingChnlAdvancedPage.firstFocusId = 'setting_chnl_advanced_common_interface_cmp';
            }
            if (FREEVIEWTEST) {
                hiWebOsFrame.SettingChnlAdvancedPage.firstFocusId = 'setting_chnl_advanced_common_interface_cmp';
            }
            var helpInfo = PageDataSettingChnlAdvanced.operateData.helpInfo;
            PageDataSettingChnlAdvanced.setting_chnl_advanced_help_info.Data = helpInfo[hiWebOsFrame.SettingChnlAdvancedPage.firstFocusId].content;
        } else {
            hiWebOsFrame.SettingChnlAdvancedPage.firstFocusId = "setting_chnl_advanced_common_interface_cmp";
        }

        $("#setting_chnl_advanced_export_to_usb").css("display", "none");
        $("#setting_chnl_advanced_import_from_usb").css("display", "none");
        PageDataSettingChnlAdvanced.operateData.setting_chnl_advanced_export_to_usb_cmp.disable = true;
        PageDataSettingChnlAdvanced.operateData.setting_chnl_advanced_import_from_usb_cmp.disable = true;

        $("#setting_chnl_advanced_simple_CH_mode").css("display", "none");
        PageDataSettingChnlAdvanced.operateData.setting_chnl_advanced_simple_CH_mode_cmp.disable = true;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingChnlAdvancedDestroy() {
    try {
        hiWebOsFrame.SettingChnlAdvancedPage = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlAdvancedEscHandler() {
    try {
        DBG_INFO('SettingChnlAdvancedEscHandler()');
        hiWebOsFrame.SettingChnlAdvancedPage.close();
        hiWebOsFrame.SettingChnlAdvancedPage.origin.open();
        hiWebOsFrame.SettingChnlAdvancedPage.origin.hiFocus();
        hiWebOsFrame.SettingChnlAdvancedPage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingChnlAdvancedPage.destroy();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlCamOPSearchEnterHandler() {  //有可能在在其他页面[launcher]下打开Setting显示的，so有可能有bug
    try {
        DBG_INFO('SettingChnlCamOPSearchEnterHandler()');
        model.ci.CamOpsearchStart();
        closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        hiWebOsFrame.blankPage.rewriteDataOnly();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var PageDataSettingChnlAdvanced = {
    "setting_chnl_advanced_title_text": {Data: "Advanced Settings"},
    "setting_chnl_advanced_epg_mark_text": {Data: "EPG Mark"},
    "setting_chnl_advanced_help_info": {Data: ""},
    "setting_chnl_advanced_epg_mark_cmp": {Data: "Adjust", disable: false},
    "setting_chnl_advanced_export_to_usb_text": {Data: "Export to USB"},
    "setting_chnl_advanced_export_to_usb_cmp": {Data: "Export", disable: false},
    "setting_chnl_advanced_import_from_usb_text": {Data: "Import from USB"},
    "setting_chnl_advanced_import_from_usb_cmp": {Data: "Import", disable: false},
    "setting_chnl_advanced_simple_CH_mode_text": {Data: "Simple CH Mode"},
    "setting_chnl_advanced_common_interface_text": {Data: "Common interface"},
    "setting_chnl_advanced_common_interface_cmp": {
        Data: "View",
        disable: true
    },
    "setting_chnl_advanced_common_interface_store_pin_text": {Data: "CI card PIN"},
    "setting_chnl_advanced_common_interface_store_pin_cmp": {
        Data: "Set",
        disable: true
    },

    "setting_chnl_advanced_common_interface_op_entry_text": {Data: "CAM Profile Search"},
    "setting_chnl_advanced_common_interface_op_entry_cmp": {
        Data: "Start",
        disable: true
    },
    "setting_chnl_advanced_simple_CH_mode_cmp": {
        Data: {
            switchType: true,
            switchText: ''
        },
        disable: false
    },
    "operateData": {
        'helpInfo': {
            setting_chnl_advanced_epg_mark_cmp: {
                content: "Highlight your favourite programs with exclusive colour."
            },
            setting_chnl_advanced_common_interface_cmp: {
                content: "Review CAM boot menu"
            },
            setting_chnl_advanced_common_interface_store_pin_cmp: {
                content: "Set CI card PIN"
            },
            setting_chnl_advanced_common_interface_op_entry_cmp: {
                content: "Quick channel scan with CAM."
            }
        },

        'EPGMarkText0Marquee': '700',
        "setting_chnl_advanced_epg_mark_cmp": {
            Data: "Adjust",
            disable: false
        },

        "setting_chnl_advanced_export_to_usb_cmp": {
            Data: "Export",
            disable: false
        },
        "setting_chnl_advanced_import_from_usb_cmp": {
            Data: "Import",
            disable: false
        },
        "setting_chnl_advanced_common_interface_cmp": {
            Data: "View",
            disable: true
        },
        "setting_chnl_advanced_common_interface_store_pin_cmp": {
            Data: "Set",
            disable: true
        },

        "setting_chnl_advanced_common_interface_op_entry_cmp": {
            Data: "Start",
            disable: true
        },
        "setting_chnl_advanced_simple_CH_mode_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        }
    },
    "langData": {
//        "switchOn": ["On"],
//        "switchOFF": ["Off"],
        "Advanced Settings": ["Advanced Settings"],
        "On": ["On"],
        "Off": ["Off"],
        "Export to USB": ["Export to USB"],
        "Import from USB": ["Import from USB"],
        "Export": ["Export"],
        "Import": ["Import"],
        "Common interface": ["Common interface"],
        "Common interface 1": ["Common interface 1"],
        "Common interface 2": ["Common interface 2"],
        "CI card 1 PIN": ["CI card 1 PIN"],
        "CI card 2 PIN": ["CI card 2 PIN"],
        "Simple CH Mode": ["Simple CH Mode"],
        "Set": ["Set"],
        "View": ["View"],
        "Start": [],
        "CAM Profile Search": [],
        "CI card PIN": [],
        "EPG Mark": [],
        "Adjust": []
    },
    rewrite: SettingChnlAdvancedRewrite
};

function SettingChnlSimpleCHFlip() {
    try {
        var SimpleCHMode = model.epg.getSimpleChannelMode();
        DBG_INFO("SimpleCHMode: " + SimpleCHMode);
        var SimpleCHCmp = this;
        model.epg.setSimpleChannelMode(Bool2Num(!SimpleCHMode));
        FlipSwitchEasyChange.call(this, SimpleCHCmp, !SimpleCHMode);
        SetRecentUse("Simple CH Mode", 2, FirPageSndIdx.ChnlAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}


function SettingChnlAdvancedRewrite(pageData) {
    //try {
    //    var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
    //    var dir_1 = dir_0 == 'left' ? 'right' : 'left';
    //
    //    $("#setting_chnl_advanced_export_to_usb_cmp").css('float', dir_1);
    //    $("#setting_chnl_advanced_import_from_usb_cmp").css('float', dir_1);
    //    $("#setting_chnl_advanced_common_interface_cmp").css('float', dir_1);
    //    $("#setting_chnl_advanced_common_interface_store_pin_cmp").css('float', dir_1);
    //    $("#setting_chnl_advanced_common_interface_op_entry_cmp").css('float', dir_1);
    //    $("#setting_chnl_advanced_simple_CH_mode_cmp").css('float', dir_1);
    //
    //} catch (ex) {
    //    DBG_ERROR(ex.message);
    //}
    try {
        DBG_INFO("SettingChnlAdvancedRewrite");
        pageData.setting_chnl_advanced_epg_mark_cmp.disable = pageData.operateData.setting_chnl_advanced_epg_mark_cmp.disable;
        pageData.setting_chnl_advanced_export_to_usb_cmp.disable = pageData.operateData.setting_chnl_advanced_export_to_usb_cmp.disable;
        pageData.setting_chnl_advanced_import_from_usb_cmp.disable = pageData.operateData.setting_chnl_advanced_import_from_usb_cmp.disable;

        pageData.setting_chnl_advanced_common_interface_cmp.disable = pageData.operateData.setting_chnl_advanced_common_interface_cmp.disable;
        pageData.setting_chnl_advanced_common_interface_store_pin_cmp.disable = pageData.operateData.setting_chnl_advanced_common_interface_store_pin_cmp.disable
        pageData.setting_chnl_advanced_common_interface_op_entry_cmp.disable = pageData.operateData.setting_chnl_advanced_common_interface_op_entry_cmp.disable;

        pageData.setting_chnl_advanced_simple_CH_mode_cmp.disable = pageData.operateData.setting_chnl_advanced_simple_CH_mode_cmp.disable;

        var simpleCHMode = pageData.operateData.setting_chnl_advanced_simple_CH_mode_cmp.switchType;
        FlipSwitchRewriteEasy.call(this, pageData, "setting_chnl_advanced_simple_CH_mode_cmp", simpleCHMode);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingChnlEPGMarkEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_chnl_EPG_mark', null, hiWebOsFrame.SettingChnlAdvancedPage, null, function (SettingChnlEPGMarkPage) {
            hiWebOsFrame.SettingChnlEPGMarkPage = SettingChnlEPGMarkPage;
            SettingChnlEPGMarkPage.open();
            SettingChnlEPGMarkPage.hiFocus();
            SettingChnlEPGMarkPage.rewriteDataOnly();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlOpenImportFromUSBDialog() {
    try {
        hiWebOsFrame.createPage('setting_chnl_advanced_import_from_usb_dialog', null, null, null, function (SettingChnlImportFromUSBPage) {
            hiWebOsFrame.SettingChnlImportFromUSBPage = SettingChnlImportFromUSBPage;
            SettingChnlImportFromUSBPage.origin = hiWebOsFrame.SettingChnlAdvancedPage;
            SettingChnlImportFromUSBPage.open();
            SettingChnlImportFromUSBPage.hiFocus();
        });
        SetRecentUse("Import from USB", 2, FirPageSndIdx.ChnlAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function SettingChnlOpenExportToUSBDialog() {

    try {
        hiWebOsFrame.createPage('setting_chnl_advanced_export_to_usb_dialog', null, null, null, function (SettingChnlExportToUSBPage) {
            hiWebOsFrame.SettingChnlExportToUSBPage = SettingChnlExportToUSBPage;
            SettingChnlExportToUSBPage.origin = hiWebOsFrame.SettingChnlAdvancedPage;
            SettingChnlExportToUSBPage.open();
            SettingChnlExportToUSBPage.hiFocus();
        });
        SetRecentUse("Export to USB", 2, FirPageSndIdx.ChnlAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingChnlOpenCIEnterHandler() {

    try {

        var oriPage = hiWebOsFrame.SettingChnlAdvancedPage;

        hiWebOsFrame.createPage('setting_chnl_ci', null, oriPage, null, function (SettingChnlCIPage) {
            SettingChnlCIInit();    //初始化修改到此处,仅在这里做了model.ci.ActionOpenCI(xx,xx);的操作
            DBG_INFO("hiWebOsFrame.SettingChnlCIPage not exist, create");
            hiWebOsFrame.SettingChnlCIPage = SettingChnlCIPage;
            PageDataChnlCIData.operateData.setting_chnl_CI_ul.SelectedIndex = 0;
            hiWebOsFrame.SettingChnlCIPage.firstFocusId = "setting_chnl_CI_ul";
            SettingChnlCIPage.open();
            SettingChnlCIPage.hiFocus();
            CIToMenuStyle();
            RefreshCIScrollBar(PageDataChnlCIData);
            oriPage.close();
        });


//        SetRecentUse("Common interface", 2, 5);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlCIStorePINEnterHandler() {
    try {
        var ciPinDivId = this.id;
        DBG_INFO("ciPinDivId=" + this.id);
        if (ciPinDivId == "setting_chnl_advanced_common_interface_store_pin_cmp") {
            hiWebOsFrame.createPage('setting_chnl_CI_PIN_set_page', null, hiWebOsFrame.SettingChnlAdvancedPage, null, function (SettingChnlCIPINSet) {
                DBG_INFO("SettingChnlCIPINSet");
                PageDataSettingChnlCIPINSet.operateData.slotID = 1;
                hiWebOsFrame.SettingChnlCIPINSet = SettingChnlCIPINSet;
                SettingChnlCIPINSet.open();
                SettingChnlCIPINSet.hiFocus();
                SettingChnlCIPINSet.rewriteDataOnly();
            });

        } else if (ciPinDivId == "setting_chnl_advanced_common_interface_store_pin_cmp_second") {
            hiWebOsFrame.createPage('setting_chnl_CI_PIN_set_page', null, hiWebOsFrame.SettingChnlAdvancedPage, null, function (SettingChnlCIPINSet) {
                DBG_INFO("SettingChnlCIPINSet~~~~~~~~~~~~~~~~");
                PageDataSettingChnlCIPINSet.operateData.slotID = 2;
                hiWebOsFrame.SettingChnlCIPINSet = SettingChnlCIPINSet;
                SettingChnlCIPINSet.open();
                SettingChnlCIPINSet.hiFocus();
                SettingChnlCIPINSet.rewriteDataOnly();
            });
        }
        SetRecentUse("CI card PIN", 2, FirPageSndIdx.ChnlAdvanced);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


//var actOpenCICnt = 0;
//
//
///**
// * idx 卡的序号 0 或 1，openCnt 尝试打开卡的次数
// * @param idx
// * @param openCnt
// * @constructor
// */
//function ActionOpenCI(idx, openCnt) {
//    try {
//        DBG_INFO("openCnt: " + openCnt);
//        actOpenCICnt = openCnt;
//        if (actOpenCICnt >= 20) {
//            actOpenCICnt = 0;
//            DBG_INFO("openCnt >=20, return");
//            return;
//        }
//
//        if (slAndSessId[idx][0] != -1) {
//            DBG_INFO("slAndSessId[idx][0] not -1, open NOWWWWWWWW");
//            actOpenCICnt = 0;
//            model.ci.ActionOpen(slAndSessId[idx][0], slAndSessId[idx][1]);
//        } else {
//            DBG_INFO("slAndSessId[idx][0] still -1, delay 200ms");
//            setTimeout(function () {
//                ActionOpenCI(idx, openCnt + 1);
//            }, 200);
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//
//}

function SettingChnlAdvAftDownHandler() {
    try {
        if ('EU' != InitArea) {
            return;
        }

        var curId = hiWebOsFrame.SettingChnlAdvancedPage.currentSelectedTree[0].id;
        var helpInfo = PageDataSettingChnlAdvanced.operateData.helpInfo;
        PageDataSettingChnlAdvanced.setting_chnl_advanced_help_info.Data = helpInfo[curId].content;
        hiWebOsFrame.SettingChnlAdvancedPage.rewriteDataOnly();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlAdvAftUpHandler() {
    try {
        if ('EU' != InitArea) {
            return;
        }

        var curId = hiWebOsFrame.SettingChnlAdvancedPage.currentSelectedTree[0].id;
        var helpInfo = PageDataSettingChnlAdvanced.operateData.helpInfo;
        PageDataSettingChnlAdvanced.setting_chnl_advanced_help_info.Data = helpInfo[curId].content;
        hiWebOsFrame.SettingChnlAdvancedPage.rewriteDataOnly();


        SettingChlAdvObj.addMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingChannelAdvancedClass() {
    try {
        var self = this;

        self.addMarquee = function () {
            var curId = hiWebOsFrame.SettingChnlAdvancedPage.currentSelectedTree[0].id;
            if ('setting_chnl_advanced_epg_mark_cmp' == curId) {
                var htmlText = $("#setting_chnl_advanced_epg_mark_text").html();
                var fontSize = parseInt($("#setting_chnl_advanced_epg_mark_text").css('font-size'));
                var divTextWidth = $('#span_width_only').css('font-size', fontSize + 'px').html(htmlText).width() / globalfunc.getPageScale();
                if (divTextWidth >= PageDataSettingChnlAdvanced.operateData.EPGMarkText0Marquee) {
                    $("#setting_chnl_advanced_epg_mark_text").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        };

        self.delMarquee = function () {
            var marquee = $("#setting_chnl_advanced_epg_mark_text" + " marquee");
            if (marquee.length > 0) {
                var htmlText = $("#setting_chnl_advanced_epg_mark_text" + " marquee").html();
                var marquee = $("#setting_chnl_advanced_epg_mark_text").html(htmlText);
            }
            $("#setting_chnl_advanced_epg_mark_text").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
        };

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var SettingChlAdvObj = new SettingChannelAdvancedClass();