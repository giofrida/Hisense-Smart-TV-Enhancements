/**
 * Created with JetBrains PhpStorm.
 * User: Lewis
 * Date: 14-9-12
 * Time: 下午3:55
 * To change this template use File | Settings | File Templates.
 */
function getSettingPicWteBal2PotData(opts) {
    opts.CaE = [
        {
            "id": "setting_pic_white_balance_2point_white_balance_text_0",
            "description": "当前的比例容器",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_white_balance_2point_wb_cmp_text",
            "description": "当前的比例容器",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_white_balance_2point_color_gamut_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_r_offset_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_r_offset_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_g_offset_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_g_offset_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_b_offset_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_b_offset_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_r_gain_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_r_gain_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_g_gain_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_g_gain_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_b_gain_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_b_gain_text_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_2point_reset_about_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },

        {
            "id": "setting_pic_white_balance_2point_wb_cmp",
            "description": "当前的比例",
            "CaEType": "div",
            "classes": {
                "normal": "setting_pic_white_balance_2point_wb_cmp_normal",
                "focus": "setting_pic_white_balance_2point_wb_cmp_focus",
                "selected": "setting_pic_white_balance_2point_wb_cmp_focus"
            },
            "handler": {
                "aftEnterHandler": "",
                "aftRightHandler": "",
                "aftLeftHandler": "",
                "befDownHandler": "SettingPicWteBal2PotWteBalCmpBefDownHandler",
                "aftUpHandler": "SettingPicWteBal2PotWteBalCmpAftUpHandler",
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler"
            },
            "nav": {
                "enterTo": "setting_pic_white_balance_2point_wb_ul_content",
                "downTo": "setting_pic_white_balance_2point_color_gamut_cmp",
                "rightTo": ""
            }
        },

        {
            "id": "setting_pic_white_balance_2point_wb_ul_content",
            "description": "当前选中的3D",
            "CaEType": "Container",
            "firstFocusId": "setting_pic_white_balance_2point_wb_ul",
            "classes": {
                "normal": "setting_pic_white_balance_2point_wb_ul_content_normal",
                "focus": "setting_pic_white_balance_2point_wb_ul_content_focus",
                "selected": "setting_pic_white_balance_2point_wb_ul_content_focus"
            },
            "CaE": [
                {
                    "id": "setting_pic_white_balance_2point_wb_ul",//在页面中的按钮或者组件容器Id
                    "description": "安全列表",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "setting_pic_white_balance_2point_wb_li_normal",
                        "focus": "setting_pic_white_balance_2point_wb_li_focus",
                        "selected": "setting_pic_white_balance_2point_wb_li_normal",
                        "dataSelected": "setting_pic_white_balance_2point_wb_li_normal"
                    },
                    "handler": {
                        "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                        "aftEnterHandler": "SettingPicWteBal2PotUlEnterHandler",
                        "aftDownHandler": "",
                        "aftUpHandler": ""
                    },
                    "oriCaE": [
                        {
                            "id": "setting_pic_white_balance_2point_wb_item",
                            "description": "选择图片",
                            "CaEType": "div",
                            enableHtml: true

                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": ["setting_pic_white_balance_2point_wb_item"],
                        "PageSize": 2
                    }
                }
            ]
        },

        {
            "id": "setting_pic_white_balance_2point_color_gamut_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_audio_type_cmp_li_normal",
                "focus": "setting_snd_SAS_audio_type_cmp_li_focus",
                "disable": "setting_snd_SAS_audio_type_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_audio_type_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_audio_type_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicWteBal2PotColorGamutEnterHandler",
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler"
            },
            "nav": {
                "upTo": "setting_pic_white_balance_2point_wb_cmp",
                "downTo": "setting_pic_white_balance_2point_r_offset_cmp"
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_white_balance_2point_color_gamut_cmp_item",

                    "CaEType": "div"
                },
                {
                    "id": "setting_pic_white_balance_2point_color_gamut_cmp_item_text",

                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_white_balance_2point_color_gamut_cmp_item",
                    "setting_pic_white_balance_2point_color_gamut_cmp_item_text"
                ]
            }
        },

        {
            "id": "setting_pic_white_balance_2point_r_offset_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                "aftUpHandler": "SettingPicWteBal2PotRGBOffsetGainAftUpHandler",
                "aftDownHandler": "SettingPicWteBal2PotRGBOffsetGainAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal2PotRGBOffsetGainEnterHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_2point_color_gamut_cmp",
                downTo: "setting_pic_white_balance_2point_g_offset_cmp"
            }
        },
        {
            "id": "setting_pic_white_balance_2point_g_offset_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                "aftUpHandler": "SettingPicWteBal2PotRGBOffsetGainAftUpHandler",
                "aftDownHandler": "SettingPicWteBal2PotRGBOffsetGainAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal2PotRGBOffsetGainEnterHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_2point_r_offset_cmp",
                downTo: "setting_pic_white_balance_2point_b_offset_cmp"
            }
        },
        {
            "id": "setting_pic_white_balance_2point_b_offset_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                "aftUpHandler": "SettingPicWteBal2PotRGBOffsetGainAftUpHandler",
                "aftDownHandler": "SettingPicWteBal2PotRGBOffsetGainAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal2PotRGBOffsetGainEnterHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_2point_g_offset_cmp",
                downTo: "setting_pic_white_balance_2point_r_gain_cmp"
            }
        },

        {
            "id": "setting_pic_white_balance_2point_r_gain_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                "aftUpHandler": "SettingPicWteBal2PotRGBOffsetGainAftUpHandler",
                "aftDownHandler": "SettingPicWteBal2PotRGBOffsetGainAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal2PotRGBOffsetGainEnterHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_2point_b_offset_cmp",
                downTo: "setting_pic_white_balance_2point_g_gain_cmp"
            }
        },

        {
            "id": "setting_pic_white_balance_2point_g_gain_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                "aftUpHandler": "SettingPicWteBal2PotRGBOffsetGainAftUpHandler",
                "aftDownHandler": "SettingPicWteBal2PotRGBOffsetGainAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal2PotRGBOffsetGainEnterHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_2point_r_gain_cmp",
                downTo: "setting_pic_white_balance_2point_b_gain_cmp"
            }
        },
        {
            "id": "setting_pic_white_balance_2point_b_gain_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                "aftUpHandler": "SettingPicWteBal2PotRGBOffsetGainAftUpHandler",
                "aftDownHandler": "SettingPicWteBal2PotRGBOffsetGainAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal2PotRGBOffsetGainEnterHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_2point_g_gain_cmp",
                downTo: "setting_pic_white_balance_2point_reset_about_cmp"
            }
        },

        {
            "id": "setting_pic_white_balance_2point_reset_about_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEscHandler": "SettingPicWteBal2PotWteBalPageAftEscHandler",
                //"aftUpHandler": "SettingPicWteBal2PotRGBOffsetGainAftUpHandler",
                "aftDownHandler": "SettingPicWteBal2PotRGBOffsetGainAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal2PotResetAboutCmpEnterHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_2point_b_gain_cmp",
                downTo: ""
            }
        }
    ];
    SettingPicWhiteBalanceInit();
    return PageDataPicWhiteBalance;
}


var PageDataPicWhiteBalance = {

    "setting_pic_white_balance_2point_reset_about_text_0": {Data: "Restore White Balance Settings"},
    "setting_pic_white_balance_2point_color_gamut_text_0": {Data: "Colour Gamut"},
    "setting_pic_white_balance_2point_reset_about_cmp": {Data: "Restore"},
    "setting_pic_white_balance_2point_white_balance_text_0": {Data: "White Balance"},

    "setting_pic_white_balance_2point_wb_ul_content": {
        "Data": {
            "setting_pic_white_balance_2point_wb_ul": {
                "Data": [
                    {
                        "setting_pic_white_balance_2point_wb_item": {Data: "2 Point"}
                    },
                    {
                        "setting_pic_white_balance_2point_wb_item": {Data: "10 Point"}
                    }
                ],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0
            }
        }
    },

    "setting_pic_white_balance_2point_color_gamut_cmp": {
        Data: [
            {
                "setting_pic_white_balance_2point_color_gamut_cmp_item_text": {Data: "Native"}
            },
            {
                "setting_pic_white_balance_2point_color_gamut_cmp_item_text": {Data: "BT709"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0,
        disable: false
    },

    "setting_pic_white_balance_2point_r_offset_text_0": {Data: "R-Offset"},
    "setting_pic_white_balance_2point_r_offset_text_1": {Data: 0},
    "setting_pic_white_balance_2point_g_offset_text_0": {Data: "G-Offset"},
    "setting_pic_white_balance_2point_g_offset_text_1": {Data: 0},
    "setting_pic_white_balance_2point_b_offset_text_0": {Data: "B-Offset"},
    "setting_pic_white_balance_2point_b_offset_text_1": {Data: 0},
    "setting_pic_white_balance_2point_r_gain_text_0": {Data: "R-Gain"},
    "setting_pic_white_balance_2point_r_gain_text_1": {Data: 0},
    "setting_pic_white_balance_2point_g_gain_text_0": {Data: "G-Gain"},
    "setting_pic_white_balance_2point_g_gain_text_1": {Data: 0},
    "setting_pic_white_balance_2point_b_gain_text_0": {Data: "B-Gain"},
    "setting_pic_white_balance_2point_b_gain_text_1": {Data: 0},
    "setting_pic_white_balance_2point_r_offset_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_2point_g_offset_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_2point_b_offset_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_2point_r_gain_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_2point_g_gain_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_2point_b_gain_cmp": {Data: "Adjust"},


    "setting_pic_white_balance_2point_wb_cmp_text": {Data: "2 Point"},
    "operateData": {
        colorGamutSupport: 0,
        OffsetGainRstCmpMarqueeLength: 9,
        WhiteBalancePointBtnMarqueeLength: 7,
        WhiteBalancePointUlMarqueeLength: 8,
        WteBalRestoreText0MarqueeLength: 24,
        RGBOffsetGainRstCmpIdVec:[
            'setting_pic_white_balance_2point_r_offset_cmp',
            'setting_pic_white_balance_2point_g_offset_cmp',
            'setting_pic_white_balance_2point_b_offset_cmp',
            'setting_pic_white_balance_2point_r_gain_cmp',
            'setting_pic_white_balance_2point_g_gain_cmp',
            'setting_pic_white_balance_2point_b_gain_cmp',
            'setting_pic_white_balance_2point_reset_about_cmp'
        ],
        "setting_pic_white_balance_2point_wb_ul_content": {
            "Data": {
                "setting_pic_white_balance_2point_wb_ul": {
                    "Data": [
                        {
                            "setting_pic_white_balance_2point_wb_item": {Data: "2 Point"}
                        },
                        {
                            "setting_pic_white_balance_2point_wb_item": {Data: "10 Point"}
                        }
                    ],
                    "SelectedIndex": 0,
                    "DataSelectedIndex": 0
                }
            }
        },
        "setting_pic_white_balance_2point_color_gamut_cmp": {
            Data: [
                {
                    "setting_pic_white_balance_2point_color_gamut_cmp_item_text": {Data: "Native"}
                },
                {
                    "setting_pic_white_balance_2point_color_gamut_cmp_item_text": {Data: "BT709"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },
        "setting_pic_white_balance_2point_r_offset_text_1": {Data: 0},
        "setting_pic_white_balance_2point_g_offset_text_1": {Data: 0},
        "setting_pic_white_balance_2point_b_offset_text_1": {Data: 0},
        "setting_pic_white_balance_2point_r_gain_text_1": {Data: 0},
        "setting_pic_white_balance_2point_g_gain_text_1": {Data: 0},
        "setting_pic_white_balance_2point_b_gain_text_1": {Data: 0}

    },
    "langData": {
        "White Balance": [],
        "2 Point": [],
        "10 Point": [],
        "R-Offset": [],
        "G-Offset": [],
        "B-Offset": [],
        "R-Gain": [],
        "G-Gain": [],
        "B-Gain": [],
        "Restore White Balance Settings": [],
        "Adjust": [],
        "Restore": []
    },
    rewrite: SettingPicWteBal2PotRewrite

}

function SettingPicWteBal2PotRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_white_balance_2point_wb_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_wb_cmp_img').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_r_offset_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_g_offset_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_b_offset_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_r_gain_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_g_gain_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_b_gain_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_2point_reset_about_cmp').css('float', dir_1 );

        if (pageData.operateData.colorGamutSupport) {
            $('#setting_pic_white_balance_2point_color_gamut').css('display', 'block');
            $('#setting_pic_white_balance_2point_color_gamut_cmp').css('display', 'block');
            $('#setting_pic_white_balance_2point_page').css('height', '760px');
        } else {
            $('#setting_pic_white_balance_2point_color_gamut').css('display', 'none');
            $('#setting_pic_white_balance_2point_color_gamut_cmp').css('display', 'none');
            $('#setting_pic_white_balance_2point_page').css('height', '625px');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var opeData = pageData.operateData;

        var colorGamut = pageData.operateData.setting_pic_white_balance_2point_color_gamut_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_white_balance_2point_color_gamut_cmp', colorGamut);
        pageData.setting_pic_white_balance_2point_color_gamut_cmp.disable = pageData.operateData.setting_pic_white_balance_2point_color_gamut_cmp.disable;

        pageData.setting_pic_white_balance_2point_r_offset_text_1.Data = opeData.setting_pic_white_balance_2point_r_offset_text_1.Data;
        pageData.setting_pic_white_balance_2point_g_offset_text_1.Data = opeData.setting_pic_white_balance_2point_g_offset_text_1.Data;
        pageData.setting_pic_white_balance_2point_b_offset_text_1.Data = opeData.setting_pic_white_balance_2point_b_offset_text_1.Data;
        pageData.setting_pic_white_balance_2point_r_gain_text_1.Data = opeData.setting_pic_white_balance_2point_r_gain_text_1.Data;
        pageData.setting_pic_white_balance_2point_g_gain_text_1.Data = opeData.setting_pic_white_balance_2point_g_gain_text_1.Data;
        pageData.setting_pic_white_balance_2point_b_gain_text_1.Data = opeData.setting_pic_white_balance_2point_b_gain_text_1.Data;

        SettingPicWteBal2PotRGBOffsetGainRstCmpRefreshMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal2PotRGBOffsetGainRstCmpRefreshMarquee(curCmpId) {
    try {
        var opeData = PageDataPicWhiteBalance.operateData;
        for (var i = 0; i < opeData.RGBOffsetGainRstCmpIdVec.length; i++) {

            var marquee = $("#" + opeData.RGBOffsetGainRstCmpIdVec[i] + " marquee");
            if (marquee.length > 0) {
                var htmlText = $("#" + opeData.RGBOffsetGainRstCmpIdVec[i] + " marquee").html();
                var marquee = $("#" + opeData.RGBOffsetGainRstCmpIdVec[i]).html(htmlText);
            }
            $("#" + opeData.RGBOffsetGainRstCmpIdVec[i]).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
        }

        var htmlText = $("#" + curCmpId).html();
        if(opeData.RGBOffsetGainRstCmpIdVec.indexOf(curCmpId) != -1){
            if (htmlText.length > PageDataPicWhiteBalance.operateData.OffsetGainRstCmpMarqueeLength) {
                $("#" + curCmpId).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
            }
        }

        var marquee1 = $("#setting_pic_white_balance_2point_reset_about_text_0" + " marquee");   //先清空marquee
        if (marquee1.length > 0) {
            var htmlText = $("#setting_pic_white_balance_2point_reset_about_text_0" + " marquee").html();
            $("#setting_pic_white_balance_2point_reset_about_text_0").html(htmlText);
        }

        if (curCmpId == 'setting_pic_white_balance_2point_reset_about_cmp') {
            var htmlText_1 = $("#setting_pic_white_balance_2point_reset_about_text_0").html();
            if (htmlText_1.length > PageDataPicWhiteBalance.operateData.WteBalRestoreText0MarqueeLength) {
                $("#setting_pic_white_balance_2point_reset_about_text_0").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText_1 + '</marquee>');
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal2PotUlEnterHandler() {
    try {
        if (this.SelectedIndex == 1) {
            hiWebOsFrame.SettingPicWteBal2Pot.close();

            if (!!hiWebOsFrame.SettingPicWteBal10Pot) {
                SettingWhiteBalance10PointInit();
                hiWebOsFrame.SettingPicWteBal10Pot.open();
                hiWebOsFrame.SettingPicWteBal10Pot.hiFocus('setting_pic_white_balance_10point_wb_cmp');
                hiWebOsFrame.SettingPicWteBal10Pot.rewriteDataOnly();
            } else {
                hiWebOsFrame.createPage('setting_pic_white_balance_10point_page', null, this.page.origin, null, function (SettingPicWteBal10Pot) {
                    hiWebOsFrame.SettingPicWteBal10Pot = SettingPicWteBal10Pot;
                    SettingPicWteBal10Pot.open();
                    SettingPicWteBal10Pot.rewriteDataOnly();
                    SettingPicWteBal10Pot.hiFocus();
                });
            }
        } else if (this.SelectedIndex == 0) {
//        $("#setting_pic_whiteBalanceSelectListFrame").css("visibility","hidden");
            hiWebOsFrame.SettingPicWteBal2Pot.hiFocus("setting_pic_white_balance_2point_wb_cmp");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


}

function SettingPicWteBal2PotRGBOffsetGainEnterHandler() {
    try {
        DBG_INFO('SettingPicWteBal2PotRGBOffsetGainEnterHandler');
        var cmpId = this.id
        hiWebOsFrame.createPage('setting_pic_white_balance_2point_rgb_offset_gain_page', null, hiWebOsFrame.SettingPicWteBal2Pot, null, function (SettingPicWteBal2PotRGBOffsetGain) {
            hiWebOsFrame.SettingPicWteBal2Pot.close();
            hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain = SettingPicWteBal2PotRGBOffsetGain;
            hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.open();
            hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.hiFocus();
            var cmpVal = 0;
            switch (cmpId) {
                case "setting_pic_white_balance_2point_r_offset_cmp":
                    var cmpText = 'R-Offset';
                    PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(cmpText);
                    break;
                case "setting_pic_white_balance_2point_g_offset_cmp":
                    var cmpText = 'G-Offset';
                    PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(cmpText);
                    break;
                case "setting_pic_white_balance_2point_b_offset_cmp":
                    var cmpText = 'B-Offset';
                    PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(cmpText);
                    break;
                case "setting_pic_white_balance_2point_r_gain_cmp":
                    var cmpText = 'R-Gain';
                    PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(cmpText);
                    break;
                case "setting_pic_white_balance_2point_g_gain_cmp":
                    var cmpText = 'G-Gain';
                    PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(cmpText);
                    break;
                case "setting_pic_white_balance_2point_b_gain_cmp":
                    var cmpText = 'B-Gain';
                    PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(cmpText);
                    break;

                default :
                    DBG_ERROR('SettingPicWteBal2PotRGBOffsetGainEnterHandler CmpId Err!');
                    break;
            }
            //PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain.Data.setDefalutValue = cmpVal;
            SliderInitEasy(PageDataSettingPicWteBal2PotRGBOffsetGain.operateData, 'setting_pic_white_balance_2point_rgb_offset_gain', cmpVal);
            hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.rewrite(); //slider只用rewriteDataOnly不能刷新数据， rewrite之后又丢失焦点
            hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.rewriteDataOnly();
            hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.hiFocus();
        });

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicWteBal2PotResetAboutCmpEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_pic_white_balance_2point_reset', null, hiWebOsFrame.SettingPicWteBal2Pot, null, function (SettingPicWteBal2PotRst) {
            hiWebOsFrame.SettingPicWteBal2PotRst = SettingPicWteBal2PotRst;
            SettingPicWteBal2PotRst.open();
            SettingPicWteBal2PotRst.hiFocus();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicWteBal2PotOpen() {
    try {
        DBG_INFO('onSettingPicWhiteBalanceOpen');
        SettingPicWteBal2PotRGBOffsetGainRstCmpRefreshMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicWteBal2PotFocus() {
    try {
        DBG_INFO('onSettingPicWteBal2PotFocus');
        if ("setting_pic_white_balance_2point_wb_cmp" == hiWebOsFrame.SettingPicWteBal2Pot.currentSelectedTree[0].id) {
            SettingPicWteBal2PotWteBalCmpDelMarquee();
            SettingPicWteBal2PotWteBalCmpAddMarquee();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicWteBal2PotDestroy() {
    try {
        hiWebOsFrame.SettingPicWteBal2Pot = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal2PotWteBalPageAftEscHandler() {
    try {
        hiWebOsFrame.SettingPicWteBal2Pot.close();
        hiWebOsFrame.SettingPicWteBal2Pot.origin.open();
        hiWebOsFrame.SettingPicWteBal2Pot.origin.hiFocus();
        hiWebOsFrame.SettingPicWteBal2Pot.origin.rewriteDataOnly();
        if('EU' == InitArea){
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo['setting_pic_advanced_white_balance_cmp'];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        }
        hiWebOsFrame.SettingPicWteBal2Pot.destroy();

        if (!!hiWebOsFrame.SettingPicWteBal10Pot) {
            hiWebOsFrame.SettingPicWteBal10Pot.destroy();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}




function SettingPicWteBal2PotRGBOffsetGainAftUpHandler() {
    try {
        var curCmpId = this.id;
        SettingPicWteBal2PotRGBOffsetGainRstCmpRefreshMarquee(curCmpId);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal2PotRGBOffsetGainAftDownHandler() {
    try {
        var curCmpId = this.id;
        SettingPicWteBal2PotRGBOffsetGainRstCmpRefreshMarquee(curCmpId);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicWteBal2PotWteBalCmpBefDownHandler() {
    try {
        SettingPicWteBal2PotWteBalCmpDelMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal2PotWteBalCmpAftUpHandler() {
    try {
        SettingPicWteBal2PotWteBalCmpAddMarquee();
        SettingPicWteBal2PotRGBOffsetGainRstCmpRefreshMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal2PotWteBalCmpDelMarquee() {
    try {
        var marquee = $("#setting_pic_white_balance_2point_wb_cmp_text" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_white_balance_2point_wb_cmp_text" + " marquee").html();
            var marquee = $("#setting_pic_white_balance_2point_wb_cmp_text").html(htmlText);
        }
        $("#setting_pic_white_balance_2point_wb_cmp_text").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal2PotWteBalCmpAddMarquee() {
    try {
        var htmlText = $("#setting_pic_white_balance_2point_wb_cmp_text").html();
        if (htmlText.length > PageDataPicWhiteBalance.operateData.WhiteBalancePointBtnMarqueeLength) {
            $("#setting_pic_white_balance_2point_wb_cmp_text").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicWteBal2PotColorGamutEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var colorGamutCmp = this;

            tv && model.video.setColorGamut(this.SelectedIndex);
            DBG_INFO('model.video.setColorGamut(' + this.SelectedIndex + ')');

            NaviBarEasyChange.call(this, colorGamutCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();

            SetRecentUse("Colour Gamut", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}