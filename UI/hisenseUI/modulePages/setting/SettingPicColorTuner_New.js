/**
 * Created with JetBrains PhpStorm.
 * User: Lewis
 * Date: 14-3-17
 * Time: 下午3:55
 * To change this template use File | Settings | File Templates.
 */
function getSettingPicColorTunerData(opts) {
    SettingPicColorTunerInit();
    opts.CaE = [
        {
            "id": "setting_pic_color_tuner_color_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_hue_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_hue_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },

        {
            "id": "setting_pic_saturation_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_saturation_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },

        {
            "id": "setting_pic_brightness_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_brightness_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_color_tuner_color_reset_text_0",
            "description": "zoom比例",
            "CaEType": "span"
        },


        {
            "id": "setting_pic_color_tuner_color_cmp",
            "description": "setting_pic_color_tuner_color_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_pic_color_tuner_color_cmp_li_normal",
                "focus": "setting_pic_color_tuner_color_cmp_li_focus",
                "disable": "setting_pic_color_tuner_color_cmp_li_disable_normal",
                "dataSelected": "setting_pic_color_tuner_color_cmp_li_data_selected",
                "disableDataSelected": "setting_pic_color_tuner_color_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicColorTunerColorEnterHandler",
                //"aftDownHandler": "SettingPicColorTunerColorUpHandler",
                "aftUpHandler": "SettingPicColorTunerColorAftUpHandler",
                "aftEscHandler": "SettingPicColorTunerColorEscHandler",
                "befDownHandler": "SettingPicColorTunerColorBefDownHandler",
                //"befUpHandler": "SettingPicColorTunerColorDownHandler"
                "aftLeftHandler": "SettingPicColorTunerColorLeftHandler",
                "aftRightHandler": "SettingPicColorTunerColorRightHandler"

            },
            "nav": {
                "upTo": "",
                "leftTo": "",
                "downTo": "setting_pic_hue_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_color_tuner_color_cmp_item",
                    "description": "setting_pic_color_tuner_color_cmp_item",
                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_pic_color_tuner_color_cmp_item_text",
                    "description": "setting_pic_color_tuner_color_cmp_item_text",
                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_color_tuner_color_cmp_item",
                    "setting_pic_color_tuner_color_cmp_item_text"
                ],
                "PageSize": 4,
                "ArrowFlag": true
            },
            "linkZoomArrowleft": "setting_pic_color_tuner_color_arrow_left",
            "linkZoomArrowRight": "setting_pic_color_tuner_color_arrow_right",
        },
        {
            "id": "setting_pic_mode_arrow_left",
            "description": "setting_pic_mode_arrow_left",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_mode_arrow_right",
            "description": "setting_pic_mode_arrow_right",
            "CaEType": "div"
        },


        {
            "id": "setting_pic_hue_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftUpHandler": "SettingPicColorTunerHueSatBriColorResetAftUpHandler",
                "aftDownHandler": "SettingPicColorTunerHueSatBriColorResetAftDownHandler",
                "aftEnterHandler": "SettingPicColorTunerHueEnterHandler",
                "aftEscHandler": "SettingPicColorTunerColorEscHandler"
            },
            "nav": {
                upTo: "setting_pic_color_tuner_color_cmp",
                downTo: "setting_pic_saturation_cmp"
            }
        },
        {
            "id": "setting_pic_saturation_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftUpHandler": "SettingPicColorTunerHueSatBriColorResetAftUpHandler",
                "aftDownHandler": "SettingPicColorTunerHueSatBriColorResetAftDownHandler",
                "aftEnterHandler": "SettingPicColorTunerHueEnterHandler",
                "aftEscHandler": "SettingPicColorTunerColorEscHandler"
            },
            "nav": {
                upTo: "setting_pic_hue_cmp",
                downTo: "setting_pic_brightness_cmp"
            }
        },
        {
            "id": "setting_pic_brightness_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftUpHandler": "SettingPicColorTunerHueSatBriColorResetAftUpHandler",
                "aftDownHandler": "SettingPicColorTunerHueSatBriColorResetAftDownHandler",
                "aftEnterHandler": "SettingPicColorTunerHueEnterHandler",
                "aftEscHandler": "SettingPicColorTunerColorEscHandler"
            },
            "nav": {
                upTo: "setting_pic_saturation_cmp",
                downTo: "setting_pic_color_tuner_color_reset_cmp"
            }
        },
        {
            "id": "setting_pic_color_tuner_color_reset_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftUpHandler": "SettingPicColorTunerHueSatBriColorResetAftUpHandler",
                "aftDownHandler": "SettingPicColorTunerHueSatBriColorResetAftDownHandler",
                "aftEnterHandler": "SettingPicColorTunerResetEnterHandler",
                "aftEscHandler": "SettingPicColorTunerColorEscHandler"
            },
            "nav": {
                upTo: "setting_pic_brightness_cmp",
                downTo: ""
            }
        }

    ];

    return PageDataSettingPicColorTuner;
}


var PageDataSettingPicColorTuner = {
    setting_pic_color_tuner_color_cmp: {
        Data: [
            {
                "setting_pic_color_tuner_color_cmp_item_text": {Data: "Red"}
            },
            {
                "setting_pic_color_tuner_color_cmp_item_text": {Data: "Green"}
            },
            {
                "setting_pic_color_tuner_color_cmp_item_text": {Data: "Blue"}
            },
            {
                "setting_pic_color_tuner_color_cmp_item_text": {Data: "Yellow"}
            },
            {
                "setting_pic_color_tuner_color_cmp_item_text": {Data: "Cyan"}
            },
            {
                "setting_pic_color_tuner_color_cmp_item_text": {Data: "Magenta"}
            },
            {
                "setting_pic_color_tuner_color_cmp_item_text": {Data: "Flesh Tone"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0
    },

    "setting_pic_hue_text_0": {Data: "Hue"},
    "setting_pic_brightness_text_0": {Data: "Brightness"},
    "setting_pic_saturation_text_0": {Data: "Saturation"},
    "setting_pic_hue_cmp": {Data: "Adjust"},
    "setting_pic_saturation_cmp": {Data: "Adjust"},
    "setting_pic_brightness_cmp": {Data: "Adjust"},

    "setting_pic_hue_text_1": {Data: 0},
    "setting_pic_saturation_text_1": {Data: 0},
    "setting_pic_brightness_text_1": {Data: 0},

    setting_pic_color_tuner_color_text_0: {Data: "Colour"},

    setting_pic_color_tuner_color_reset_text_0: {Data: "Restore colour settings"},

    setting_pic_color_tuner_color_reset_cmp: {Data: "Restore"},

    "operateData": {
        ColorTunerRestoreBtnMarqueeLength: 9,
        ColorTunerColorMarqueeLength: 9,
        ColorTunerColorRestoreText0MarqueeLength: 24,
        Cmp4IdVector: ['setting_pic_hue_cmp',
            'setting_pic_saturation_cmp',
            'setting_pic_brightness_cmp',
            'setting_pic_color_tuner_color_reset_cmp'
        ],

        "setting_pic_hue_text_1": {Data: 0},
        "setting_pic_saturation_text_1": {Data: 0},
        "setting_pic_brightness_text_1": {Data: 0},
        setting_pic_color_tuner_color_cmp: {
            Data: [
                {
                    "setting_pic_color_tuner_color_cmp_item_text": {Data: "Red"}
                },
                {
                    "setting_pic_color_tuner_color_cmp_item_text": {Data: "Green"}
                },
                {
                    "setting_pic_color_tuner_color_cmp_item_text": {Data: "Blue"}
                },
                {
                    "setting_pic_color_tuner_color_cmp_item_text": {Data: "Yellow"}
                },
                {
                    "setting_pic_color_tuner_color_cmp_item_text": {Data: "Cyan"}
                },
                {
                    "setting_pic_color_tuner_color_cmp_item_text": {Data: "Magenta"}
                },
                {
                    "setting_pic_color_tuner_color_cmp_item_text": {Data: "Flesh Tone"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        }
    },
    "langData": {
        "Colour": [],
        "Red": [],
        "Green": [],
        "Blue": [],
        "Yellow": [],
        "Cyan": [],
        "Magenta": [],
        "Flesh Tone": [],
        "Hue": [],
        "Saturation": [],
        "Brightness": [],
        "Restore colour settings": [],
        "Adjust": [],
        "Restore": []

    },
    rewrite: SettingPicColorTunerRewrite

}

function SettingPicColorTunerInit() {
    try {
        var opeData = PageDataSettingPicColorTuner.operateData;

        var colorTunerColorMode = model.video.getColor();
        debugG('model.video.getColor(): ' + colorTunerColorMode);
        NaviBarInitEasy(opeData, "setting_pic_color_tuner_color_cmp", colorTunerColorMode);

        var colorHueVal = model.video.getColorHue();
        debugG('model.video.getColorHue(): ' + colorHueVal);
        opeData.setting_pic_hue_text_1.Data = colorHueVal;

        var colorSaturationVal = model.video.getColorSaturation();
        debugG('model.video.getColorSaturation(): ' + colorSaturationVal);
        opeData.setting_pic_saturation_text_1.Data = colorSaturationVal;

        var colorBrightnessVal = model.video.getColorBrightness();
        debugG('model.video.getColorBrightness(): ' + colorBrightnessVal);
        opeData.setting_pic_brightness_text_1.Data = colorBrightnessVal;

    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicColorTunerOpen() {
    try {
        PicColorTunerRestoreBtnDelMarquee();
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicColorTunerFocus() {
    try {
        if ("setting_pic_color_tuner_color_cmp" == hiWebOsFrame.SettingPicColorTuner.currentSelectedTree[0].id) {
            var idx = hiWebOsFrame.SettingPicColorTuner.getCaE('setting_pic_color_tuner_color_cmp').SelectedIndex;
            for (var i = 0; i < 7; i++) {
                PicColorTunerColorIndexDelMarquee(i);
            }

            PicColorTunerColorIndexAddMarquee(idx);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicColorTunerDestroy() {
    try {
        hiWebOsFrame.SettingPicColorTuner = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#setting_pic_hue_cmp").css('float', dir_1);
        $("#setting_pic_saturation_cmp").css('float', dir_1);
        $("#setting_pic_brightness_cmp").css('float', dir_1);
        $("#setting_pic_color_tuner_color_reset_cmp").css('float', dir_1);
    } catch (ex) {
        debugE(ex.message);
    }

    try {
        var opeData = pageData.operateData;

        pageData.setting_pic_hue_text_1.Data = opeData.setting_pic_hue_text_1.Data;
        pageData.setting_pic_saturation_text_1.Data = opeData.setting_pic_saturation_text_1.Data;
        pageData.setting_pic_brightness_text_1.Data = opeData.setting_pic_brightness_text_1.Data;

        var picColorTunerColor = pageData.operateData.setting_pic_color_tuner_color_cmp.DataSelectedIndex;
        NaviBarRewriteEasy.call(this, pageData, "setting_pic_color_tuner_color_cmp", picColorTunerColor);

        PicColorTunerRestoreBtnDelMarquee();
    } catch (ex) {
        debugE(ex.message);
    }

}

function SettingPicColorTunerHueEnterHandler() {
    try {
        debugG('SettingPicColorTunerHueEnterHandler');
        var cmpId = this.id;
        hiWebOsFrame.createPage('setting_pic_hue_sat_bri_page', null, hiWebOsFrame.SettingPicColorTuner, null, function (SettingPicHueSatBri) {
            hiWebOsFrame.SettingPicColorTuner.close();
            hiWebOsFrame.SettingPicHueSatBri = SettingPicHueSatBri;
            hiWebOsFrame.SettingPicHueSatBri.open();
            hiWebOsFrame.SettingPicHueSatBri.hiFocus();
            var cmpVal = 0;
            switch (cmpId) {
                case "setting_pic_hue_cmp":
                    var cmpText = 'Hue';
                    PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data = cmpText;
                    cmpVal = SettingPicHueSatBriGetCmpVal(cmpText);
                    break;
                case "setting_pic_saturation_cmp":
                    var cmpText = 'Saturation';
                    PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data = cmpText;
                    cmpVal = SettingPicHueSatBriGetCmpVal(cmpText);
                    break;
                case "setting_pic_brightness_cmp":
                    var cmpText = 'Brightness';
                    PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data = cmpText;
                    cmpVal = SettingPicHueSatBriGetCmpVal(cmpText);
                    break;
                default :
                    debugE('SettingPicColorTunerHueEnterHandler CmpId Err!');
                    break;
            }
            //PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri.Data.setDefalutValue = cmpVal;

            SliderInitEasy(PageDataSettingPicHueSatBri.operateData, 'setting_pic_hue_sat_bri', cmpVal);
            hiWebOsFrame.SettingPicHueSatBri.rewrite(); //slider只用rewriteDataOnly不能刷新数据， rewrite之后又丢失焦点
            hiWebOsFrame.SettingPicHueSatBri.rewriteDataOnly();
            hiWebOsFrame.SettingPicHueSatBri.hiFocus();
        });

    } catch (ex) {
        debugE(ex.message);
    }

}

function onSettingPicColorTunerDestroy() {
    try {
        debugG('onSettingPicColorTunerDestroy');
        hiWebOsFrame.SettingPicColorTuner = null
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerColorEscHandler(){
    try {
        hiWebOsFrame.SettingPicColorTuner.close();
        hiWebOsFrame.SettingPicColorTuner.origin.open();
        hiWebOsFrame.SettingPicColorTuner.origin.hiFocus();
        hiWebOsFrame.SettingPicColorTuner.origin.rewriteDataOnly();
        if('EU' == InitArea){
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo['setting_pic_advanced_color_tuner_cmp'];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        }
        hiWebOsFrame.SettingPicColorTuner.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicColorTunerResetEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_pic_color_tuner_reset', null, hiWebOsFrame.SettingPicColorTuner, null, function (SettingPicResetColorTuner) {
            hiWebOsFrame.SettingPicResetColorTuner = SettingPicResetColorTuner;
            SettingPicResetColorTuner.open();
            SettingPicResetColorTuner.hiFocus();
        });
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerColorEnterHandler() {
    try {
        var picColorTunerColorCmp = this;

        var picColorTunerColorIdx = picColorTunerColorCmp.SelectedIndex;
        debugG("SELIDX_" + picColorTunerColorIdx);
        if (picColorTunerColorCmp.DataSelectedIndex != picColorTunerColorIdx) {
            picColorTunerColorCmp.DataSelectedIndex = picColorTunerColorIdx;

            NaviBarEasyChange(picColorTunerColorCmp, picColorTunerColorIdx);

            if (picColorTunerColorIdx >= 0 && picColorTunerColorIdx <= 6) {
                model.video.setColor(picColorTunerColorIdx);
            } else {
                debugE("PicColorTunerColorIndex Selected Index Err!")
            }

            SettingPicColorTunerInit(); //修改hue等的值
            this.page.rewriteDataOnly();
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerHueSatBriColorResetAftUpHandler() {
    try {
        var curCmpId = hiWebOsFrame.SettingPicColorTuner.currentSelectedTree[0].id;
        SettingPicColorTunerHueSatBriColorResetCmpRefreshMarquee(curCmpId);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerHueSatBriColorResetAftDownHandler() {
    try {
        var curCmpId = hiWebOsFrame.SettingPicColorTuner.currentSelectedTree[0].id;
        SettingPicColorTunerHueSatBriColorResetCmpRefreshMarquee(curCmpId);
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicColorTunerHueSatBriColorResetCmpRefreshMarquee(curCmpId) {
    try {
        var opeData = PageDataSettingPicColorTuner.operateData;
        for (var i = 0; i < opeData.Cmp4IdVector.length; i++) {

            var marquee = $("#" + opeData.Cmp4IdVector[i] + " marquee");
            if (marquee.length > 0) {
                var htmlText = $("#" + opeData.Cmp4IdVector[i] + " marquee").html();
                var marquee = $("#" + opeData.Cmp4IdVector[i]).html(htmlText);
            }
            $("#" + opeData.Cmp4IdVector[i]).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
        }

        var htmlText = $("#" + curCmpId).html();
        if(opeData.Cmp4IdVector.indexOf(curCmpId) != -1){
            if (htmlText.length > PageDataSettingPicColorTuner.operateData.ColorTunerRestoreBtnMarqueeLength) {
                $("#" + curCmpId).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
            }
        }

        var marquee1 = $("#setting_pic_color_tuner_color_reset_text_0" + " marquee");   //先清空marquee
        if (marquee1.length > 0) {
            var htmlText = $("#setting_pic_color_tuner_color_reset_text_0" + " marquee").html();
            $("#setting_pic_color_tuner_color_reset_text_0").html(htmlText);
        }

        if (curCmpId == 'setting_pic_color_tuner_color_reset_cmp') {
            var htmlText_1 = $("#setting_pic_color_tuner_color_reset_text_0").html();
            if (htmlText_1.length > PageDataSettingPicColorTuner.operateData.ColorTunerColorRestoreText0MarqueeLength) {
                $("#setting_pic_color_tuner_color_reset_text_0").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText_1 + '</marquee>');
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerColorAftUpHandler() {
    try {
        var curCmpId = hiWebOsFrame.SettingPicColorTuner.currentSelectedTree[0].id;
        SettingPicColorTunerHueSatBriColorResetCmpRefreshMarquee(curCmpId);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerColorBefDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
            this.page.rewriteDataOnly();
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerColorLeftHandler() {
    try {
        for (var i = 0; i < 7; i++) {
            PicColorTunerColorIndexDelMarquee(i);
        }
        PicColorTunerColorIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerColorRightHandler() {
    try {
        for (var i = 0; i < 7; i++) {
            PicColorTunerColorIndexDelMarquee(i);
        }
        PicColorTunerColorIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}


//function PicColorTunerRestoreBtnAddMarquee() {
//    try {
//        var htmlText = $("#setting_pic_color_tuner_color_reset_cmp").html();
//        if (htmlText.length > PageDataSettingPicColorTuner.operateData.ColorTunerRestoreBtnMarqueeLength) {
//            $("#setting_pic_color_tuner_color_reset_cmp").html('<marquee style="width: inherit;" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
//        }
//    } catch (ex) {
//        debugE(ex.message);
//    }
//}

function PicColorTunerRestoreBtnDelMarquee() {
    try {
        var marquee = $("#setting_pic_color_tuner_color_reset_cmp" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_color_tuner_color_reset_cmp" + " marquee").html();
            var marquee = $("#setting_pic_color_tuner_color_reset_cmp").html(htmlText);
        }
        $("#setting_pic_color_tuner_color_reset_cmp").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        debugE(ex.message);
    }
}

function PicColorTunerColorIndexDelMarquee(idx) {
    try {
        var marquee = $("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + idx + " marquee").html();
            var marquee = $("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + idx).html(htmlText);
        }
        $("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        debugE(ex.message);
    }
}

function PicColorTunerColorIndexAddMarquee(idx) {
    try {
        for (var i = 0; i < 7; i++) {
            if ($("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + i).length == 0) {
                continue;
            }
            $("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + i).html();
                if (htmlText.length > PageDataSettingPicColorTuner.operateData.ColorTunerColorMarqueeLength) {
                    $("#setting_pic_color_tuner_color_cmp_setting_pic_color_tuner_color_cmp_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}
