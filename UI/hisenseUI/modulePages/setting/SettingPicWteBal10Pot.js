function getSettingPicWteBal10PotData(opts) {
    opts.CaE = [

        {
            "id": "setting_pic_white_balance_10point_white_balance_text_0",
            "description": "当前的比例容器",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_white_balance_10point_wb_cmp_text",
            "description": "当前的比例容器",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_white_balance_10point_color_gamut_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_white_balance_10point_10point_switch_text_0",
            "description": "当前的比例容器",
            "CaEType": "span"
        },

        {
            "id": "setting_pic_white_balance_10point_level_text_0",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_level_text_separate",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_equalizer_hz_0_text_separate',
                disable: 'setting_snd_equalizer_hz_0_text_separate_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_level_text_1",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_1',
                disable: 'setting_snd_auto_volume_text_1_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_red_text_0",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_red_text_separate",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_equalizer_hz_0_text_separate',
                disable: 'setting_snd_equalizer_hz_0_text_separate_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_red_text_1",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_1',
                disable: 'setting_snd_auto_volume_text_1_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_green_text_0",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_green_text_separate",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_equalizer_hz_0_text_separate',
                disable: 'setting_snd_equalizer_hz_0_text_separate_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_green_text_1",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_1',
                disable: 'setting_snd_auto_volume_text_1_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_blue_text_0",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_blue_text_separate",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_equalizer_hz_0_text_separate',
                disable: 'setting_snd_equalizer_hz_0_text_separate_disable',
            }
        },
        {
            "id": "setting_pic_white_balance_10point_blue_text_1",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_1',
                disable: 'setting_snd_auto_volume_text_1_disable'
            }
        },
        {
            "id": "setting_pic_white_balance_10point_reset_about_text_0",
            "description": "当前的比例容器",
            "CaEType": "span",
            "classes": {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },

        {
            "id": "setting_pic_white_balance_10point_wb_cmp",
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
                "befDownHandler": "SettingPicWteBal10PotWteBalCmpBefDownHandler",
                "aftUpHandler": "SettingPicWteBal10PotWteBalCmpAftUpHandler",
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler"
            },
            "nav": {
                "enterTo": "setting_pic_white_balance_10point_wb_ul_content",
                "downTo": "setting_pic_white_balance_10point_color_gamut_cmp",
                "rightTo": ""
            }
        },

        {
            "id": "setting_pic_white_balance_10point_wb_ul_content",
            "description": "当前选中的3D",
            "CaEType": "Container",
            "firstFocusId": "setting_pic_white_balance_10point_wb_ul",
            "classes": {
                "normal": "setting_pic_white_balance_2point_wb_ul_content_normal",
                "focus": "setting_pic_white_balance_2point_wb_ul_content_focus",
                "selected": "setting_pic_white_balance_2point_wb_ul_content_focus"
            },
            "CaE": [
                {
                    "id": "setting_pic_white_balance_10point_wb_ul",//在页面中的按钮或者组件容器Id
                    "description": "安全列表",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "setting_pic_white_balance_2point_wb_li_normal",
                        "focus": "setting_pic_white_balance_2point_wb_li_focus",
                        "selected": "setting_pic_white_balance_2point_wb_li_normal",
                        "dataSelected": "setting_pic_white_balance_2point_wb_li_normal"
                    },
                    "handler": {
                        "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler",
                        "aftEnterHandler": "SettingPicWteBal10PotUlEnterHandler",
                        "aftDownHandler": "",
                        "aftUpHandler": ""
                    },
                    "oriCaE": [
                        {
                            "id": "setting_pic_white_balance_10point_wb_item",
                            "description": "选择图片",
                            "CaEType": "div",
                            enableHtml: true

                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": ["setting_pic_white_balance_10point_wb_item"],
                        "PageSize": 2
                    }
                }
            ]
        },

        {
            "id": "setting_pic_white_balance_10point_color_gamut_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_audio_type_cmp_li_normal",
                "focus": "setting_snd_SAS_audio_type_cmp_li_focus",
                "disable": "setting_snd_SAS_audio_type_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_audio_type_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_audio_type_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicWteBal10PotColorGamutEnterHandler",
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler"
            },
            "nav": {
                "upTo": "setting_pic_white_balance_10point_wb_cmp",
                "downTo": "setting_pic_white_balance_10point_10point_switch_cmp"
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_white_balance_10point_color_gamut_cmp_item",

                    "CaEType": "div"
                },
                {
                    "id": "setting_pic_white_balance_10point_color_gamut_cmp_item_text",

                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_white_balance_10point_color_gamut_cmp_item",
                    "setting_pic_white_balance_10point_color_gamut_cmp_item_text"
                ]
            }
        },

        {
            "id": "setting_pic_white_balance_10point_10point_switch_cmp",
            "description": "耳机 开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_pic_white_balance_10point_color_gamut_cmp",
                "downTo": "setting_pic_white_balance_10point_level_btn"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingPicWteBal10Pot10PotCmpEnterHandler',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler",
                'aftUpHandler':"SettingPicWteBal10Pot10PotCmpAftUpHandler",
                'aftDownHandler':"SettingPicWteBal10Pot10PotCmpAftDownHandler"
            }
        },
        {
            "id": "setting_pic_white_balance_10point_level_btn",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: "setting_chnl_advanced_export_to_usb_cmp_disable"
            },
            "handler": {
                "aftUpHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftUpHandler",
                "aftDownHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal10PotLevelBtnEnterHandler",
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_10point_10point_switch_cmp",
                downTo: "setting_pic_white_balance_10point_red_cmp"
            }
        },
        {
            "id": "setting_pic_white_balance_10point_red_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: "setting_chnl_advanced_export_to_usb_cmp_disable"
            },
            "handler": {
                "aftUpHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftUpHandler",
                "aftDownHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal10PotRGBCmpEnterHandler",
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_10point_level_btn",
                downTo: "setting_pic_white_balance_10point_green_cmp"
            }
        },
        {
            "id": "setting_pic_white_balance_10point_green_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: "setting_chnl_advanced_export_to_usb_cmp_disable"
            },
            "handler": {
                "aftUpHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftUpHandler",
                "aftDownHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal10PotRGBCmpEnterHandler",
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_10point_red_cmp",
                downTo: "setting_pic_white_balance_10point_blue_cmp"
            }
        },
        {
            "id": "setting_pic_white_balance_10point_blue_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: "setting_chnl_advanced_export_to_usb_cmp_disable"
            },
            "handler": {
                "aftUpHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftUpHandler",
                "aftDownHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal10PotRGBCmpEnterHandler",
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_10point_green_cmp",
                downTo: "setting_pic_white_balance_10point_reset_about_cmp"
            }
        },
        {
            "id": "setting_pic_white_balance_10point_reset_about_cmp",
            "description": "zoom比例",
            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: "setting_chnl_advanced_export_to_usb_cmp_disable"
            },
            "handler": {
                "aftUpHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftUpHandler",
                "aftDownHandler": "SettingPicWteBal10PotLevelRGBRstCmpAftDownHandler",
                "aftEnterHandler": "SettingPicWteBal10PotRstCmpEnterHandler",
                "aftEscHandler": "SettingPicWteBal10PotWteBalPageAftEscHandler"
            },
            "nav": {
                upTo: "setting_pic_white_balance_10point_blue_cmp",
                downTo: ""
            }
        }
    ];
    SettingWhiteBalance10PointInit();

    return PageDataPicWhiteBalance10Point;
}

var PageDataPicWhiteBalance10Point = {

    "setting_pic_white_balance_10point_white_balance_text_0": {Data: "White Balance"},
    "setting_pic_white_balance_10point_wb_cmp_text": {Data: "10 Point"},
    "setting_pic_white_balance_10point_color_gamut_text_0": {Data: "Colour Gamut"},
    "setting_pic_white_balance_10point_10point_switch_text_0": {Data: "10 Point"},
    "setting_pic_white_balance_10point_level_text_0": {Data: "Level"},
    "setting_pic_white_balance_10point_level_text_1": {Data: "10%"},
    "setting_pic_white_balance_10point_red_text_0": {Data: "Red"},
    "setting_pic_white_balance_10point_red_text_1": {Data: "0"},
    "setting_pic_white_balance_10point_green_text_0": {Data: "Green"},
    "setting_pic_white_balance_10point_green_text_1": {Data: "0"},
    "setting_pic_white_balance_10point_blue_text_0": {Data: "Blue"},
    "setting_pic_white_balance_10point_blue_text_1": {Data: "0"},
    "setting_pic_white_balance_10point_reset_about_text_0": {Data: "Restore White Balance Settings"},

    "setting_pic_white_balance_10point_level_text_separate": {Data: ':'},
    "setting_pic_white_balance_10point_red_text_separate": {Data: ':'},
    "setting_pic_white_balance_10point_green_text_separate": {Data: ':'},
    "setting_pic_white_balance_10point_blue_text_separate": {Data: ':'},

    "setting_pic_white_balance_10point_level_btn": {Data: "Adjust"},
    "setting_pic_white_balance_10point_red_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_10point_green_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_10point_blue_cmp": {Data: "Adjust"},
    "setting_pic_white_balance_10point_reset_about_cmp": {Data: "Restore"},


    "setting_pic_white_balance_10point_10point_switch_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        }
    },
    "setting_pic_white_balance_10point_wb_ul_content": {
        "Data": {
            "setting_pic_white_balance_10point_wb_ul": {
                "Data": [
                    {
                        "setting_pic_white_balance_10point_wb_item": {Data: "2 Point"}
                    },
                    {
                        "setting_pic_white_balance_10point_wb_item": {Data: "10 Point"}
                    }
                ],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0
            }
        }
    },
    "setting_pic_white_balance_10point_color_gamut_cmp": {
        Data: [
            {
                "setting_pic_white_balance_10point_color_gamut_cmp_item_text": {Data: "Native"}
            },
            {
                "setting_pic_white_balance_10point_color_gamut_cmp_item_text": {Data: "BT709"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0,
        disable: false
    },

    "operateData": {
        colorGamutSupport: 0,
        "setting_pic_white_balance_10point_color_gamut_cmp": {
            Data: [
                {
                    "setting_pic_white_balance_10point_color_gamut_cmp_item_text": {Data: "Native"}
                },
                {
                    "setting_pic_white_balance_10point_color_gamut_cmp_item_text": {Data: "BT709"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },
        LevelRGBRstCmpVec:[
            'setting_pic_white_balance_10point_level_btn',
            'setting_pic_white_balance_10point_red_cmp',
            'setting_pic_white_balance_10point_green_cmp',
            'setting_pic_white_balance_10point_blue_cmp',
            'setting_pic_white_balance_10point_reset_about_cmp'
        ],
        LevelRGBRstCmpMarqueeLength: 9,
        WhiteBalance10PointBtnMarqueeLength: 7,
        WteBal10PointRestoreText0MarqueeLength: 24,
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
        pointLevelList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        LevelTextVector: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
        "setting_pic_white_balance_10point_level_text_1": {Data: '10%'},
        "setting_pic_white_balance_10point_red_text_1": {Data: "0"},
        "setting_pic_white_balance_10point_green_text_1": {Data: "0"},
        "setting_pic_white_balance_10point_blue_text_1": {Data: "0"},
        "setting_pic_white_balance_10point_10point_switch_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        }


    },
    "langData": {
        "White Balance": [],
        "2 Point": [],
        "10 Point": [],
        "Level": [],
        "Red": [],
        "Green": [],
        "Blue": [],

        "Restore White Balance Settings": [],
        "Adjust": [],
        "Restore": []
    },
    rewrite: SettingPicWteBal10PotRewrite

}
function SettingPicWteBal10PotRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_white_balance_10point_wb_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_10point_wb_cmp_img').css('float', dir_1 );
        $('#setting_pic_white_balance_10point_10point_switch_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_10point_level_btn').css('float', dir_1 );
        $('#setting_pic_white_balance_10point_red_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_10point_green_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_10point_blue_cmp').css('float', dir_1 );
        $('#setting_pic_white_balance_10point_reset_about_cmp').css('float', dir_1 );

        if (pageData.operateData.colorGamutSupport) {
            $('#setting_pic_white_balance_10point_color_gamut').css('display', 'block');
            $('#setting_pic_white_balance_10point_color_gamut_cmp').css('display', 'block');
            $('#setting_pic_white_balance_10point_page').css('height', '690px');
        } else {
            $('#setting_pic_white_balance_10point_color_gamut').css('display', 'none');
            $('#setting_pic_white_balance_10point_color_gamut_cmp').css('display', 'none');
            $('#setting_pic_white_balance_10point_page').css('height', '560px');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    try {
        var opeData = pageData.operateData;

        var colorGamut = pageData.operateData.setting_pic_white_balance_10point_color_gamut_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_white_balance_10point_color_gamut_cmp', colorGamut);
        pageData.setting_pic_white_balance_10point_color_gamut_cmp.disable = pageData.operateData.setting_pic_white_balance_10point_color_gamut_cmp.disable;


        var picPoint10State = opeData.setting_pic_white_balance_10point_10point_switch_cmp.switchType;
        FlipSwitchRewriteEasy.call(this, pageData, "setting_pic_white_balance_10point_10point_switch_cmp", picPoint10State);


        pageData.setting_pic_white_balance_10point_level_text_1.Data = opeData.setting_pic_white_balance_10point_level_text_1.Data;
        pageData.setting_pic_white_balance_10point_red_text_1.Data = opeData.setting_pic_white_balance_10point_red_text_1.Data;
        pageData.setting_pic_white_balance_10point_green_text_1.Data = opeData.setting_pic_white_balance_10point_green_text_1.Data;
        pageData.setting_pic_white_balance_10point_blue_text_1.Data = opeData.setting_pic_white_balance_10point_blue_text_1.Data;

        if (true == opeData.setting_pic_white_balance_10point_10point_switch_cmp.switchType) {
            DBG_INFO('Enable 10point about');
            pageData.setting_pic_white_balance_10point_level_text_0.disable = false;
            pageData.setting_pic_white_balance_10point_red_text_0.disable = false;
            pageData.setting_pic_white_balance_10point_green_text_0.disable = false;
            pageData.setting_pic_white_balance_10point_blue_text_0.disable = false;
            pageData.setting_pic_white_balance_10point_reset_about_text_0.disable = false;

            pageData.setting_pic_white_balance_10point_level_text_1.disable = false;
            pageData.setting_pic_white_balance_10point_red_text_1.disable = false;
            pageData.setting_pic_white_balance_10point_green_text_1.disable = false;
            pageData.setting_pic_white_balance_10point_blue_text_1.disable = false;

            pageData.setting_pic_white_balance_10point_level_text_separate.disable = false;
            pageData.setting_pic_white_balance_10point_red_text_separate.disable = false;
            pageData.setting_pic_white_balance_10point_green_text_separate.disable = false;
            pageData.setting_pic_white_balance_10point_blue_text_separate.disable = false;

            pageData.setting_pic_white_balance_10point_level_btn.disable = false;
            pageData.setting_pic_white_balance_10point_red_cmp.disable = false;
            pageData.setting_pic_white_balance_10point_green_cmp.disable = false;
            pageData.setting_pic_white_balance_10point_blue_cmp.disable = false;
            pageData.setting_pic_white_balance_10point_reset_about_cmp.disable = false;
        } else {
            DBG_INFO('Disable 10point about');
            pageData.setting_pic_white_balance_10point_level_text_0.disable = true;
            pageData.setting_pic_white_balance_10point_red_text_0.disable = true;
            pageData.setting_pic_white_balance_10point_green_text_0.disable = true;
            pageData.setting_pic_white_balance_10point_blue_text_0.disable = true;
            pageData.setting_pic_white_balance_10point_reset_about_text_0.disable = true;

            pageData.setting_pic_white_balance_10point_level_text_1.disable = true;
            pageData.setting_pic_white_balance_10point_red_text_1.disable = true;
            pageData.setting_pic_white_balance_10point_green_text_1.disable = true;
            pageData.setting_pic_white_balance_10point_blue_text_1.disable = true;

            pageData.setting_pic_white_balance_10point_level_text_separate.disable = true;
            pageData.setting_pic_white_balance_10point_red_text_separate.disable = true;
            pageData.setting_pic_white_balance_10point_green_text_separate.disable = true;
            pageData.setting_pic_white_balance_10point_blue_text_separate.disable = true;

            pageData.setting_pic_white_balance_10point_level_btn.disable = true;
            pageData.setting_pic_white_balance_10point_red_cmp.disable = true;
            pageData.setting_pic_white_balance_10point_green_cmp.disable = true;
            pageData.setting_pic_white_balance_10point_blue_cmp.disable = true;
            pageData.setting_pic_white_balance_10point_reset_about_cmp.disable = true;
        }

        SettingPicWteBal10PotLevelRGBRstCmpRefreshMarquee();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function SettingPicWteBal10Pot10PotCmpEnterHandler() {
    try {
        var picPoint10State = model.video.getWhite_balance10Point();

        model.video.setWhite_balance10Point(Bool2Num(!picPoint10State));
        DBG_INFO('model.video.setWhite_balance10Point(' + Bool2Num(!picPoint10State) + ')');


        var picPoint10Cmp = this;
        FlipSwitchEasyChange.call(this, picPoint10Cmp, !picPoint10State);
        this.page.rewriteDataOnly();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicWteBal10PotUlEnterHandler() {
    try {
        if (this.SelectedIndex == 0) {
            if (!!hiWebOsFrame.SettingPicWteBal2Pot) {
                SettingPicWhiteBalanceInit();
                hiWebOsFrame.SettingPicWteBal10Pot.close();
                hiWebOsFrame.SettingPicWteBal2Pot.open();
                hiWebOsFrame.SettingPicWteBal2Pot.hiFocus('setting_pic_white_balance_2point_wb_cmp');
                hiWebOsFrame.SettingPicWteBal2Pot.rewriteDataOnly();
            } else {
                hiWebOsFrame.createPage('setting_pic_white_balance_2point_page', null, this.page.origin, null, function (SettingPicWteBal2Pot) {
                    hiWebOsFrame.SettingPicWteBal10Pot.close();
                    hiWebOsFrame.SettingPicWteBal2Pot = SettingPicWteBal2Pot;
                    SettingPicWteBal2Pot.open();
                    SettingPicWteBal2Pot.rewriteDataOnly();
                    SettingPicWteBal2Pot.hiFocus();
                });
            }
        } else if ((this.SelectedIndex == 1)) {
            hiWebOsFrame.SettingPicWteBal10Pot.hiFocus("setting_pic_white_balance_10point_wb_cmp");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotWteBalPageAftEscHandler() {
    try {
        hiWebOsFrame.SettingPicWteBal10Pot.close();
        hiWebOsFrame.SettingPicWteBal10Pot.origin.open();
        hiWebOsFrame.SettingPicWteBal10Pot.origin.hiFocus();
        hiWebOsFrame.SettingPicWteBal10Pot.origin.rewriteDataOnly();
        if('EU' == InitArea){
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo['setting_pic_advanced_white_balance_cmp'];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        }
        hiWebOsFrame.SettingPicWteBal10Pot.destroy();

        if (!!hiWebOsFrame.SettingPicWteBal2Pot) {
            hiWebOsFrame.SettingPicWteBal2Pot.destroy();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function onSettingPicWteBal10PotOpen() {
    try {
        SettingPicWteBal10PotLevelRGBRstCmpRefreshMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicWteBal10PotFocus() {
    try {
        DBG_INFO('onSettingPicWteBal10PotFocus');
        if ("setting_pic_white_balance_10point_wb_cmp" == hiWebOsFrame.SettingPicWteBal10Pot.currentSelectedTree[0].id) {
            SettingPicWteBal10PotWteBalCmpDelMarquee();
            SettingPicWteBal10PotWteBalCmpAddMarquee();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicWteBal10PotDestroy() {
    try {
        hiWebOsFrame.SettingPicWteBal10Pot = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotWteBalCmpDelMarquee() {
    try {
        var marquee = $("#setting_pic_white_balance_10point_wb_cmp_text" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_white_balance_10point_wb_cmp_text" + " marquee").html();
            var marquee = $("#setting_pic_white_balance_10point_wb_cmp_text").html(htmlText);
        }
        $("#setting_pic_white_balance_10point_wb_cmp_text").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotWteBalCmpAddMarquee() {
    try {
        var htmlText = $("#setting_pic_white_balance_10point_wb_cmp_text").html();
        if (htmlText.length > PageDataPicWhiteBalance10Point.operateData.WhiteBalance10PointBtnMarqueeLength) {
            $("#setting_pic_white_balance_10point_wb_cmp_text").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10Pot10PotCmpAftUpHandler(){
    try {
        SettingPicWteBal10PotLevelRGBRstCmpRefreshMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10Pot10PotCmpAftDownHandler(){
    try {
        SettingPicWteBal10PotWteBalCmpDelMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotWteBalCmpBefDownHandler(){
    try {
        SettingPicWteBal10PotWteBalCmpDelMarquee();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotWteBalCmpAftUpHandler(){
    try {
        SettingPicWteBal10PotWteBalCmpDelMarquee();
        SettingPicWteBal10PotWteBalCmpAddMarquee();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotLevelBtnEnterHandler() {
    try {
        hiWebOsFrame.SettingPicWteBal10Pot.close();
        hiWebOsFrame.createPage('setting_pic_white_balance_10point_level', null, hiWebOsFrame.SettingPicWteBal10Pot, null, function (SettingPicWteBal10PotLevel) {
            hiWebOsFrame.SettingPicWteBal10PotLevel = SettingPicWteBal10PotLevel;
            SettingPicWteBal10PotLevel.open();
            SettingPicWteBal10PotLevel.hiFocus();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicWteBal10PotRGBCmpEnterHandler() {
    try {
        DBG_INFO('SettingPicWteBal10PotRGBCmpEnterHandler');
        var cmpId = this.id
        hiWebOsFrame.createPage('setting_pic_white_balance_10point_rgb_page', null, hiWebOsFrame.SettingPicWteBal10Pot, null, function (SettingPicWteBal10PotRGB) {
            hiWebOsFrame.SettingPicWteBal10Pot.close();
            hiWebOsFrame.SettingPicWteBal10PotRGB = SettingPicWteBal10PotRGB;
            hiWebOsFrame.SettingPicWteBal10PotRGB.open();
            hiWebOsFrame.SettingPicWteBal10PotRGB.hiFocus();
            var cmpVal = 0;
            switch (cmpId) {
                case "setting_pic_white_balance_10point_red_cmp":
                    var cmpText = 'Red';
                    PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal10PotRGBGetCmpVal(cmpText);
                    break;

                case "setting_pic_white_balance_10point_green_cmp":
                    var cmpText = 'Green';
                    PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal10PotRGBGetCmpVal(cmpText);
                    break;
                case "setting_pic_white_balance_10point_blue_cmp":
                    var cmpText = 'Blue';
                    PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data = cmpText;
                    cmpVal = SettingPicWteBal10PotRGBGetCmpVal(cmpText);
                    break;

                default :
                    DBG_ERROR('SettingPicWteBal10PotRGBCmpEnterHandler CmpId Err!');
                    break;
            }
            //PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb.Data.setDefalutValue = cmpVal;
            SliderInitEasy(PageDataSettingPicWteBal10PotRGB.operateData, 'setting_pic_white_balance_10point_rgb', cmpVal);
            hiWebOsFrame.SettingPicWteBal10PotRGB.rewrite(); //slider只用rewriteDataOnly不能刷新数据， rewrite之后又丢失焦点
            hiWebOsFrame.SettingPicWteBal10PotRGB.rewriteDataOnly();
            hiWebOsFrame.SettingPicWteBal10PotRGB.hiFocus();
        });

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotRstCmpEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_pic_white_balance_10point_reset', null, hiWebOsFrame.SettingPicWteBal10Pot, null, function (SettingPicWteBal10PotRst) {
//            hiWebOsFrame.setting_pic_whiteBalance10Point_page.close();
            hiWebOsFrame.SettingPicWteBal10PotRst = SettingPicWteBal10PotRst;
            hiWebOsFrame.SettingPicWteBal10PotRst.open();
            hiWebOsFrame.SettingPicWteBal10PotRst.hiFocus();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

//function Disable10PointSeparateStr() {
//    try {
//        $("#pic_btn_whiteBalance10Point_level_span_separate").attr('class', 'picModeDisable');
//        $("#pic_btn_Red_span_separate").attr('class', 'picModeDisable');
//        $("#pic_btn_Green_span_separate").attr('class', 'picModeDisable');
//        $("#pic_btn_Blue_span_separate").attr('class', 'picModeDisable');
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//
//function Enable10PointSeparateStr() {
//    try {
//        $("#pic_btn_whiteBalance10Point_level_span_separate").attr('class', 'picMode');
//        $("#pic_btn_Red_span_separate").attr('class', 'picMode');
//        $("#pic_btn_Green_span_separate").attr('class', 'picMode');
//        $("#pic_btn_Blue_span_separate").attr('class', 'picMode');
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}


//function PicWhiteBalance10PointRestoreBtnAddMarquee() {
//    try {
//        var htmlText = $("#pic_whiteBalance10Point_restore_btn").html();
//        if (htmlText.length > PageDataPicWhiteBalance10Point.operateData.RestoreBtnMarqueeLength) {
//            $("#pic_whiteBalance10Point_restore_btn").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//
//function PicWhiteBalance10PointRestoreBtnDelMarquee() {
//    try {
//        var marquee = $("#pic_whiteBalance10Point_restore_btn" + " marquee");
//        if (marquee.length > 0) {
//            var htmlText = $("#pic_whiteBalance10Point_restore_btn" + " marquee").html();
//            var marquee = $("#pic_whiteBalance10Point_restore_btn").html(htmlText);
//        }
//        $("#pic_whiteBalance10Point_restore_btn").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
//
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}

function SettingPicWteBal10PotLevelRGBRstCmpAftUpHandler() {
    try {
        var curCmpId = this.id;
        SettingPicWteBal10PotLevelRGBRstCmpRefreshMarquee(curCmpId);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotLevelRGBRstCmpAftDownHandler() {
    try {
        var curCmpId = this.id;
        SettingPicWteBal10PotLevelRGBRstCmpRefreshMarquee(curCmpId);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicWteBal10PotLevelRGBRstCmpRefreshMarquee(curCmpId) {
    try {
        var opeData = PageDataPicWhiteBalance10Point.operateData;
        for (var i = 0; i < opeData.LevelRGBRstCmpVec.length; i++) {

            var marquee = $("#" + opeData.LevelRGBRstCmpVec[i] + " marquee");
            if (marquee.length > 0) {
                var htmlText = $("#" + opeData.LevelRGBRstCmpVec[i] + " marquee").html();
                var marquee = $("#" + opeData.LevelRGBRstCmpVec[i]).html(htmlText);
            }
            $("#" + opeData.LevelRGBRstCmpVec[i]).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
        }

        var htmlText = $("#" + curCmpId).html();
        if(opeData.LevelRGBRstCmpVec.indexOf(curCmpId) != -1){
            if (htmlText.length > PageDataPicWhiteBalance10Point.operateData.LevelRGBRstCmpMarqueeLength) {
                $("#" + curCmpId).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
            }
        }

        var marquee1 = $("#setting_pic_white_balance_10point_reset_about_text_0" + " marquee");   //先清空marquee
        if (marquee1.length > 0) {
            var htmlText = $("#setting_pic_white_balance_10point_reset_about_text_0" + " marquee").html();
            $("#setting_pic_white_balance_10point_reset_about_text_0").html(htmlText);
        }

        if (curCmpId == 'setting_pic_white_balance_10point_reset_about_cmp') {
            var htmlText_1 = $("#setting_pic_white_balance_10point_reset_about_text_0").html();
            if (htmlText_1.length > PageDataPicWhiteBalance10Point.operateData.WteBal10PointRestoreText0MarqueeLength) {
                $("#setting_pic_white_balance_10point_reset_about_text_0").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText_1 + '</marquee>');
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}





//
//
//function setting_pic_whiteBalance10Point_SelectFrame_BefDownHandler() {
//    try {
//        setting_pic_whiteBalance10Point_SelectFrame_DelMarquee();
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//
//function setting_pic_whiteBalance10Point_SelectFrame_AftUpHandler() {
//    try {
//        setting_pic_whiteBalance10Point_SelectFrame_AddMarquee();
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//
//function setting_pic_whiteBalance10Point_SelectFrame_DelMarquee() {
//    try {
//        var marquee = $("#setting_pic_white10Point_SecSelectType" + " marquee");
//        if (marquee.length > 0) {
//            var htmlText = $("#setting_pic_white10Point_SecSelectType" + " marquee").html();
//            var marquee = $("#setting_pic_white10Point_SecSelectType").html(htmlText);
//        }
//        $("#setting_pic_white10Point_SecSelectType").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
//
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//
//function setting_pic_whiteBalance10Point_SelectFrame_AddMarquee() {
//    try {
//        var htmlText = $("#setting_pic_white10Point_SecSelectType").html();
//        if (htmlText.length > PageDataPicWhiteBalance10Point.operateData.WhiteBalance10PointBtnMarqueeLength) {
//            $("#setting_pic_white10Point_SecSelectType").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}


function SettingPicWteBal10PotColorGamutEnterHandler() {
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
