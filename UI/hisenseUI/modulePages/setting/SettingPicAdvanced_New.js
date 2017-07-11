function getSettingPicAdvancedData(opts) {
    opts.CaE = [
        {
            "id": "setting_pic_advanced_3d_text_0",
            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_color_gamut_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_advanced_color_gamut_text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_advanced_display_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_overscan_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_tint_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_tint_text_separate",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_equalizer_hz_0_text_separate',
                disable: 'setting_snd_equalizer_hz_0_text_separate_disable'
            }
        },
        {
            "id": "setting_pic_advanced_tint_text_1",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_1',
                disable: 'setting_snd_auto_volume_text_1_disable'
            }
        },
        {
            "id": "setting_pic_advanced_sharpness_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_sharpness_text_separate",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_equalizer_hz_0_text_separate',
                disable: 'setting_snd_equalizer_hz_0_text_separate_disable'
            }
        },
        {
            "id": "setting_pic_advanced_sharpness_text_1",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_1',
                disable: 'setting_snd_auto_volume_text_1_disable'
            }
        },
        {
            "id": "setting_pic_advanced_ultra_smooth_motion_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_local_dimming_switch_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_local_dimming_advanced_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_noise_reduction_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_adaptive_contrast_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_color_temperature_text_0",

            "CaEType": "span",
            classes: {
                normal: 'setting_snd_auto_volume_text_0',
                disable: 'setting_snd_auto_volume_text_0_disable'
            }
        },
        {
            "id": "setting_pic_advanced_white_balance_text_0",

            "CaEType": "span"
        },
        {
            "id": "setting_pic_advanced_color_tuner_text_0",

            "CaEType": "span"
        },

        {
            "id": "setting_pic_advanced_3d_cmp",

            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: 'setting_chnl_advanced_export_to_usb_cmp_disable'
            },
            "handler": {
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEnterHandler": "SettingPicAdvanced3DEnterHandler",
                "aftEscHandler": "SettingPicAdvancedEscHandler"
            },
            "nav": {
                //upTo: "setting_pic_advanced_noise_reduction_cmp",
                downTo: "setting_pic_advanced_color_gamut_cmp"
            }
        },

        {
            "id": "setting_pic_advanced_color_gamut_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_audio_type_cmp_li_normal",
                "focus": "setting_snd_SAS_audio_type_cmp_li_focus",
                "disable": "setting_snd_SAS_audio_type_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_audio_type_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_audio_type_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicColorGamutEnterHandler",
                "aftUpHandler": "SettingPicColorGamutAftUpHandler",
                "aftDownHandler": "SettingPicColorGamutAftDownHandler",
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "befDownHandler": "SettingPicColorGamutAftDownHandler",
                "befUpHandler": "SettingPicColorGamutAftDownHandler"
                //"aftRightHandler": "SettingPicColorGamutRightHandler",
                //"aftLeftHandler": "SettingPicColorGamutLeftHandler"
            },
            "nav": {
                "upTo": "setting_pic_advanced_3d_cmp",
                "leftTo": "",
                "downTo": "setting_pic_advanced_tint_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_advanced_color_gamut_cmp_item",

                    "CaEType": "div"
                },
                {
                    "id": "setting_pic_advanced_color_gamut_cmp_item_text",

                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_advanced_color_gamut_cmp_item",
                    "setting_pic_advanced_color_gamut_cmp_item_text"
                ]
            }
        },

        {
            "id": "setting_pic_advanced_tint_cmp",

            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: 'setting_chnl_advanced_export_to_usb_cmp_disable'
            },
            "handler": {
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEnterHandler": "SettingPicAdvancedTintEnterHandler",
                "aftEscHandler": "SettingPicAdvancedEscHandler"
            },
            "nav": {
                upTo: "setting_pic_advanced_color_gamut_cmp",
                downTo: "setting_pic_advanced_sharpness_cmp"
            }
        },

        {
            "id": "setting_pic_advanced_sharpness_cmp",

            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: 'setting_chnl_advanced_export_to_usb_cmp_disable'
            },
            "handler": {
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEnterHandler": "SettingPicAdvancedSharpnessEnterHandler",
                "aftEscHandler": "SettingPicAdvancedEscHandler"
            },
            "nav": {
                upTo: "setting_pic_advanced_tint_cmp",
                downTo: "setting_pic_advanced_adaptive_contrast_cmp"
            }
        },

        {
            "id": "setting_pic_advanced_adaptive_contrast_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_pic_color_tuner_color_cmp_li_normal",
                "focus": "setting_pic_color_tuner_color_cmp_li_focus",
                "disable": "setting_pic_color_tuner_color_cmp_li_disable_normal",
                "dataSelected": "setting_pic_color_tuner_color_cmp_li_data_selected",
                "disableDataSelected": "setting_pic_color_tuner_color_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicAdvancedAdaptiveContrastEnterHandler",
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "befDownHandler": "",
                //"befUpHandler": ""
                "aftLeftHandler": "",
                "aftRightHandler": ""

            },
            "nav": {
                "upTo": "setting_pic_advanced_sharpness_cmp",
                "leftTo": "",
                "downTo": "setting_pic_advanced_color_temperature_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_advanced_adaptive_contrast_cmp_item",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_pic_advanced_adaptive_contrast_cmp_item_text",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_advanced_adaptive_contrast_cmp_item",
                    "setting_pic_advanced_adaptive_contrast_cmp_item_text"
                ],
                "PageSize": 4
            }
        },

        {
            "id": "setting_pic_advanced_color_temperature_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
                "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
                "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicAdvancedColorTemperatureEnterHandler",
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "befDownHandler": "",
                "befUpHandler": ""

            },
            "nav": {
                "upTo": "setting_pic_advanced_adaptive_contrast_cmp",
                "leftTo": "",
                "downTo": "setting_pic_advanced_overscan_switch_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_advanced_color_temperature_cmp_item",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_pic_advanced_color_temperature_cmp_item_text",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_advanced_color_temperature_cmp_item",
                    "setting_pic_advanced_color_temperature_cmp_item_text"
                ]
            }
        },

        {
            "id": "setting_pic_advanced_overscan_switch_cmp",

            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_pic_advanced_color_temperature_cmp",
                "downTo": "setting_pic_advanced_ultra_smooth_motion_cmp"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingPicAdvancedOverScanEnterHandler',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo"
            }
        },


        {
            "id": "setting_pic_advanced_ultra_smooth_motion_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_pic_color_tuner_color_cmp_li_normal",
                "focus": "setting_pic_color_tuner_color_cmp_li_focus",
                "disable": "setting_pic_color_tuner_color_cmp_li_disable_normal",
                "dataSelected": "setting_pic_color_tuner_color_cmp_li_data_selected",
                "disableDataSelected": "setting_pic_color_tuner_color_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicAdvancedUltraSmoothMotionEnterHandler",
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "befDownHandler": "",
                //"befUpHandler": ""
                "aftLeftHandler": "",
                "aftRightHandler": ""

            },
            "nav": {
                "upTo": "setting_pic_advanced_overscan_switch_cmp",
                "leftTo": "",
                "downTo": "setting_pic_advanced_local_dimming_switch_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_advanced_ultra_smooth_motion_cmp_item",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_pic_advanced_ultra_smooth_motion_cmp_item_text",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_advanced_ultra_smooth_motion_cmp_item",
                    "setting_pic_advanced_ultra_smooth_motion_cmp_item_text"
                ],
                "PageSize": 4
            }
        },

        {
            "id": "setting_pic_advanced_local_dimming_switch_cmp",

            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_pic_advanced_ultra_smooth_motion_cmp",
                "downTo": "setting_pic_advanced_local_dimming_advanced_cmp"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingPicAdvancedLocalDimmingSwitchEnterHandler',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo"
            }
        },

        {
            "id": "setting_pic_advanced_local_dimming_advanced_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_pic_color_tuner_color_cmp_li_normal",
                "focus": "setting_pic_color_tuner_color_cmp_li_focus",
                "disable": "setting_pic_color_tuner_color_cmp_li_disable_normal",
                "dataSelected": "setting_pic_color_tuner_color_cmp_li_data_selected",
                "disableDataSelected": "setting_pic_color_tuner_color_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicAdvancedLocalDimmingAdvancedEnterHandler",
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "befDownHandler": "",
                //"befUpHandler": ""
                "aftLeftHandler": "",
                "aftRightHandler": ""

            },
            "nav": {
                "upTo": "setting_pic_advanced_local_dimming_switch_cmp",
                "leftTo": "",
                "downTo": "setting_pic_advanced_noise_reduction_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_advanced_local_dimming_advanced_cmp_item",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_pic_advanced_local_dimming_advanced_cmp_item_text",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_advanced_local_dimming_advanced_cmp_item",
                    "setting_pic_advanced_local_dimming_advanced_cmp_item_text"
                ],
                "PageSize": 4
            }
        },


        {
            "id": "setting_pic_advanced_noise_reduction_cmp",

            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_pic_color_tuner_color_cmp_li_normal",
                "focus": "setting_pic_color_tuner_color_cmp_li_focus",
                "disable": "setting_pic_color_tuner_color_cmp_li_disable_normal",
                "dataSelected": "setting_pic_color_tuner_color_cmp_li_data_selected",
                "disableDataSelected": "setting_pic_color_tuner_color_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicAdvancedNoiseReductionEnterHandler",
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEscHandler": "SettingPicAdvancedEscHandler",
                "befDownHandler": "",
                //"befUpHandler": ""
                "aftLeftHandler": "",
                "aftRightHandler": ""

            },
            "nav": {
                "upTo": "setting_pic_advanced_local_dimming_advanced_cmp",
                "leftTo": "",
                "downTo": "setting_pic_advanced_color_tuner_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_advanced_noise_reduction_cmp_item",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_pic_advanced_noise_reduction_cmp_item_text",

                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_advanced_noise_reduction_cmp_item",
                    "setting_pic_advanced_noise_reduction_cmp_item_text"
                ],
                "PageSize": 4
            }
        },

        {
            "id": "setting_pic_advanced_color_tuner_cmp",

            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: 'setting_chnl_advanced_export_to_usb_cmp_disable'
            },
            "handler": {
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEnterHandler": "SettingPicAdvancedColorTunerEnterHandler",
                "aftEscHandler": "SettingPicAdvancedEscHandler"
            },
            "nav": {
                upTo: "setting_pic_advanced_noise_reduction_cmp",
                downTo: "setting_pic_advanced_white_balance_cmp"
            }
        },

        {
            "id": "setting_pic_advanced_white_balance_cmp",

            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: 'setting_chnl_advanced_export_to_usb_cmp_disable'
            },
            "handler": {
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEnterHandler": "SettingPicAdvancedWhiteBalanceEnterHandler",
                "aftEscHandler": "SettingPicAdvancedEscHandler"
            },
            "nav": {
                upTo: "setting_pic_advanced_color_tuner_cmp",
                downTo: "setting_pic_advanced_display_cmp"
            }
        },

        {
            "id": "setting_pic_advanced_display_cmp",

            "CaEType": "div",
            "classes": {
                normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                focus: "setting_chnl_advanced_export_to_usb_cmp_focus",
                disable: 'setting_chnl_advanced_export_to_usb_cmp_disable'
            },
            "handler": {
                "aftUpHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftDownHandler": "SettingPicAdvancedRefreshScrollAndPageInfo",
                "aftEnterHandler": "SettingPicAdvancedDisplayEnterHandler",
                "aftEscHandler": "SettingPicAdvancedEscHandler"
            },
            "nav": {
                upTo: "setting_pic_advanced_white_balance_cmp",
                downTo: ""
            }
        }
    ];
    SettingPicAdvancedInit();
    return PageDataPicAdvanced;
}

var PageDataPicAdvanced = {

    setting_pic_advanced_3d_text_0: {Data: '3D'},
    "setting_pic_advanced_color_gamut_text_0": {Data: "Colour Gamut"},
    "setting_pic_advanced_display_text_0": {Data: "Display"},
    "setting_pic_advanced_overscan_text_0": {Data: "Overscan"},
    "setting_pic_advanced_tint_text_0": {Data: "Tint"},
    "setting_pic_advanced_sharpness_text_0": {Data: "Sharpness"},
    "setting_pic_advanced_ultra_smooth_motion_text_0": {Data: "Ultra Smooth Motion"},
    "setting_pic_advanced_local_dimming_switch_text_0": {Data: "Local Dimming"},
    "setting_pic_advanced_local_dimming_advanced_text_0": {Data: "Local Dimming"},
    "setting_pic_advanced_noise_reduction_text_0": {Data: "Noise Reduction"},
    "setting_pic_advanced_adaptive_contrast_text_0": {Data: "Adaptive Contrast"},
    "setting_pic_advanced_color_temperature_text_0": {Data: "Colour Temperature"},
    "setting_pic_advanced_white_balance_text_0": {Data: "White Balance"},
    "setting_pic_advanced_color_tuner_text_0": {Data: "Colour Tuner"},

    "setting_pic_advanced_tint_text_separate": {Data: ":"},
    "setting_pic_advanced_tint_text_1": {Data: 0},
    "setting_pic_advanced_sharpness_text_separate": {Data: ":"},
    "setting_pic_advanced_sharpness_text_1": {Data: 0},


    "setting_pic_advanced_3d_cmp": {Data: "Adjust"},
    "setting_pic_advanced_display_cmp": {Data: "Adjust", disable: false},
    "setting_pic_advanced_tint_cmp": {Data: "Adjust"},
    "setting_pic_advanced_sharpness_cmp": {Data: "Adjust"},
    "setting_pic_advanced_white_balance_cmp": {Data: "Adjust"},
    "setting_pic_advanced_color_tuner_cmp": {Data: "Adjust"},

    "setting_pic_advanced_color_gamut_cmp": {
        Data: [
            {
                "setting_pic_advanced_color_gamut_cmp_item_text": {Data: "Native"}
            },
            {
                "setting_pic_advanced_color_gamut_cmp_item_text": {Data: "BT709"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0,
        disable: false
    },

    "setting_pic_advanced_ultra_smooth_motion_cmp": {
        Data: [
            {
                "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "Off"}
            },
            {
                "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "Low"}
            },
            {
                "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "Middle"}
            },
            {
                "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "High"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0,
        disable: false
    },
    "setting_pic_advanced_local_dimming_advanced_cmp": {
        Data: [
            {
                "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "Off"}
            },
            {
                "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "Low"}
            },
            {
                "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "Middle"}
            },
            {
                "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "High"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0,
        disable: false
    },
    "setting_pic_advanced_noise_reduction_cmp": {
        Data: [
            {
                "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "Off"}
            },
            {
                "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "Low"}
            },
            {
                "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "Middle"}
            },
            {
                "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "High"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0,
        disable: false
    },
    "setting_pic_advanced_adaptive_contrast_cmp": {
        Data: [
            {
                "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "Off"}
            },
            {
                "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "Low"}
            },
            {
                "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "Middle"}
            },
            {
                "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "High"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0,
        disable: false
    },

    "setting_pic_advanced_color_temperature_cmp": {
        Data: [
            {
                "setting_pic_advanced_color_temperature_cmp_item_text": {Data: "Standard"}
            },
            {
                "setting_pic_advanced_color_temperature_cmp_item_text": {Data: "Warm"}
            },
            {
                "setting_pic_advanced_color_temperature_cmp_item_text": {Data: "Cool"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0
    },

    "setting_pic_advanced_overscan_switch_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        },
        disable: false
    },

    "setting_pic_advanced_local_dimming_switch_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        },
        disable: false
    },


    "operateData": {
        pageScale: null,
        helpInfo: {
            setting_pic_advanced_3d_cmp: {
                title: "3D",
                content: "Adjusts 3D display effect and mode"
            },
            setting_pic_advanced_color_gamut_cmp: {
                title: "Colour Gamut",
                content: "Select the colour gamut to best suit the content you're viewing."
            },
            setting_pic_advanced_display_cmp: {
                title: "Display",
                content: "Adjust advanced picture settings on current source."
            },
            setting_pic_advanced_overscan_switch_cmp: {
                title: "Overscan",
                content: "Change the video size settings to slightly crop the edges of the displayed image."
            },
            setting_pic_advanced_tint_cmp: {
                title: "Tint",
                content: "Adjust the colours from a green to magenta tint to view the natural skin tones of people on the screen."
            },
            setting_pic_advanced_sharpness_cmp: {
                title: "Sharpness",
                content: "Adjust how sharp or soft edges of images appear."
            },
            setting_pic_advanced_ultra_smooth_motion_cmp: {
                title: "Ultra Smooth Motion",
                content: "Reduce seeing afterimages that are left on the screen when viewing fast-moving objects."
            },
            setting_pic_advanced_local_dimming_switch_cmp: {
                title: "Local Dimming",
                content: "Adjust the backlight by sections according to the changes in image and increase the contrast"
            },
            setting_pic_advanced_local_dimming_advanced: {
                title: "Local Dimming",
                content: "Adjust the backlight by sections according to the changes in image and increase the contrast"
            },
            setting_pic_advanced_noise_reduction_cmp: {
                title: "Noise Reduction",
                content: "Improve how clear the picture appears by reducing noise."
            },
            setting_pic_advanced_adaptive_contrast_cmp: {
                title: "Adaptive Contrast",
                content: "Automatically darken dark areas and lighten light areas of images to see more details."
            },
            setting_pic_advanced_color_temperature_cmp: {
                title: "Colour Temperature",
                content: "Adjust how warm(red) or cool(blue) the white areas of an image appears."
            },
            setting_pic_advanced_white_balance_cmp: {
                title: "White Balance",
                content: "Adjust the intensity of red, green and blue lights to view the true colours of all images in the picture."
            },
            setting_pic_advanced_color_tuner_cmp: {
                title: "Colour Tuner",
                content: "Adjust the Hue, Saturation and Brightness of colour settings."
            }
        },
        //"MemcDisable": false,
        //"NoiseReductionDisable": false,
        //"AdaptiveContrastDisable": false,
        //Directflag: 0,  //为1时需要屏蔽overscan
        //startOnHimedia: 0,  //为1时需要屏蔽overscan
        //pic3DMode: 0, //不为0时需要屏蔽overscan
        //"enterCountFlag": 0,

        pic3DSupport: 0,
        colorGamutSupport: 0,
        localDimmingUIShow: 0,
        localDimmingAdvancedUIShow: 0,

        ScrollCfg: {
            pageHeight: 370,
            scrollContentHeight: 1000, //暂时默认，需要修改已确定上滑/下滑高度比
            scrollRailHeight: 260,
            scrollBarHeight: 100,


            "limTop": 60,   //不取60是因为边缘显示原因， 后期手动修改的
            "limBtm": 260   //350 - 60 -30 (底部已调为30px;)                                      本身最高margin 60 多 670-60 -60；后期手动修改的

        },
        "setting_pic_advanced_3d_cmp": {Data: "Adjust"},
        "setting_pic_advanced_display_cmp": {Data: "Adjust", disable: false},
        "setting_pic_advanced_tint_cmp": {Data: "Adjust", disable: false},
        "setting_pic_advanced_sharpness_cmp": {Data: "Adjust", disable: false},


        "setting_pic_advanced_tint_text_1": {Data: 0},
        "setting_pic_advanced_sharpness_text_1": {Data: 0},

        "setting_pic_advanced_color_gamut_cmp": {
            Data: [
                {
                    "setting_pic_advanced_color_gamut_cmp_item_text": {Data: "Native"}
                },
                {
                    "setting_pic_advanced_color_gamut_cmp_item_text": {Data: "BT709"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },


        "setting_pic_advanced_ultra_smooth_motion_cmp": {
            Data: [
                {
                    "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "Off"}
                },
                {
                    "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "Low"}
                },
                {
                    "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "Middle"}
                },
                {
                    "setting_pic_advanced_ultra_smooth_motion_cmp_item_text": {Data: "High"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },

        "setting_pic_advanced_local_dimming_advanced_cmp": {
            Data: [
                {
                    "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "Off"}
                },
                {
                    "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "Low"}
                },
                {
                    "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "Middle"}
                },
                {
                    "setting_pic_advanced_local_dimming_advanced_cmp_item_text": {Data: "High"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },
        "setting_pic_advanced_noise_reduction_cmp": {
            Data: [
                {
                    "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "Off"}
                },
                {
                    "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "Low"}
                },
                {
                    "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "Middle"}
                },
                {
                    "setting_pic_advanced_noise_reduction_cmp_item_text": {Data: "High"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },
        "setting_pic_advanced_adaptive_contrast_cmp": {
            Data: [
                {
                    "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "Off"}
                },
                {
                    "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "Low"}
                },
                {
                    "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "Middle"}
                },
                {
                    "setting_pic_advanced_adaptive_contrast_cmp_item_text": {Data: "High"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },

        "setting_pic_advanced_color_temperature_cmp": {
            Data: [
                {
                    "setting_pic_advanced_color_temperature_cmp_item_text": {Data: "Standard"}
                },
                {
                    "setting_pic_advanced_color_temperature_cmp_item_text": {Data: "Warm"}
                },
                {
                    "setting_pic_advanced_color_temperature_cmp_item_text": {Data: "Cool"}
                }
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0,
            disable: false
        },

        "setting_pic_advanced_overscan_switch_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "setting_pic_advanced_local_dimming_switch_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
    },


    "langData": {
        "3D": [],
        "On": ["On", "开"],
        "Off": ["Off", "关"],
        "Colour Temperature": [""],
        "Standard": ["Standard"],
        "Cold": ["Cold"],
        "Cool": ["Cool"],
        "Warm": ["Warm"],
        "Custom": ["Custom"],
        "Dynamic contrast:": ["Dynamic contrast:"],
        "Skin Tone:": ["Skin Tone:"],
        "Display:": ["Display:"],
        "Motion Smooth:": ["Motion Smooth:"],
        "High": ["High"],
        "Middle": ["Middle"],
        "Low": ["Low"],
        "Tint": [],
        "Noise Reduction:": ["Noise Reduction:"],
        "Adjust": ["Adjust"],
        "Display": [],
        "Overscan": [],
        "Sharpness": [],
        "Ultra Smooth Motion": [],
        "Noise Reduction": [],
        "Adaptive Contrast": [],
        "White Balance": [],
        "Local Dimming": [],
        "Colour Tuner": [],
        "Colour Gamut": [],
        "BT709": [],
        "Native": [],


    },
    rewrite: SettingPicAdvancedRewrite

};

function SettingPicAdvancedRewrite(pageData) {
    try {
        //$('#setting_pic_advanced_page_new').css('height', '1200px;');//todo del later
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_advanced_3d_cmp').css('float', dir_1);
        $('#setting_pic_advanced_display_cmp').css('float', dir_1);
        $('#setting_pic_advanced_local_dimming_switch_cmp').css('float', dir_1);
        $('#setting_pic_advanced_overscan_switch_cmp').css('float', dir_1);
        $('#setting_pic_advanced_tint_cmp').css('float', dir_1);
        $('#setting_pic_advanced_sharpness_cmp').css('float', dir_1);
        $('#setting_pic_advanced_white_balance_cmp').css('float', dir_1);
        $('#setting_pic_advanced_color_tuner_cmp').css('float', dir_1);

        if (pageData.operateData.pic3DSupport) {
            $('#setting_pic_advanced_3d').css('display', 'block');
        } else {
            $('#setting_pic_advanced_3d').css('display', 'none');
        }

        if (pageData.operateData.colorGamutSupport) {
            $('#setting_pic_advanced_color_gamut').css('display', 'block');
            $('#setting_pic_advanced_color_gamut_cmp').css('display', 'block');
        } else {
            $('#setting_pic_advanced_color_gamut').css('display', 'none');
            $('#setting_pic_advanced_color_gamut_cmp').css('display', 'none');
        }

        if (pageData.operateData.localDimmingUIShow) {
            $('#setting_pic_advanced_local_dimming_switch').css('display', 'block');
        } else {
            $('#setting_pic_advanced_local_dimming_switch').css('display', 'none');
        }

        if (pageData.operateData.localDimmingAdvancedUIShow) {
            $('#setting_pic_advanced_local_dimming_advanced').css('display', 'block');
            $('#setting_pic_advanced_local_dimming_advanced_cmp').css('display', 'block');
        } else {
            $('#setting_pic_advanced_local_dimming_advanced').css('display', 'none');
            $('#setting_pic_advanced_local_dimming_advanced_cmp').css('display', 'none');
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {

        pageData.setting_pic_advanced_3d_text_0.disable = pageData.operateData.setting_pic_advanced_3d_cmp.disable;
        pageData.setting_pic_advanced_3d_cmp.disable = pageData.operateData.setting_pic_advanced_3d_cmp.disable;

        pageData.setting_pic_advanced_display_cmp.disable = pageData.operateData.setting_pic_advanced_display_cmp.disable;
        pageData.setting_pic_advanced_display_text_0.disable = pageData.operateData.setting_pic_advanced_display_cmp.disable;

        var colorGamut = pageData.operateData.setting_pic_advanced_color_gamut_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_advanced_color_gamut_cmp', colorGamut);
        pageData.setting_pic_advanced_color_gamut_cmp.disable = pageData.operateData.setting_pic_advanced_color_gamut_cmp.disable;


        var overScanState = pageData.operateData.setting_pic_advanced_overscan_switch_cmp.switchType;
        FlipSwitchRewriteEasy(pageData, 'setting_pic_advanced_overscan_switch_cmp', overScanState);
        pageData.setting_pic_advanced_overscan_switch_cmp.disable = pageData.operateData.setting_pic_advanced_overscan_switch_cmp.disable;
        pageData.setting_pic_advanced_overscan_text_0.disable = pageData.operateData.setting_pic_advanced_overscan_switch_cmp.disable;


        pageData.setting_pic_advanced_tint_text_1.Data = pageData.operateData.setting_pic_advanced_tint_text_1.Data;

        pageData.setting_pic_advanced_tint_cmp.disable = pageData.operateData.setting_pic_advanced_tint_cmp.disable;
        pageData.setting_pic_advanced_tint_text_0.disable = pageData.operateData.setting_pic_advanced_tint_cmp.disable;
        pageData.setting_pic_advanced_tint_text_1.disable = pageData.operateData.setting_pic_advanced_tint_cmp.disable;
        pageData.setting_pic_advanced_tint_text_separate.disable = pageData.operateData.setting_pic_advanced_tint_cmp.disable;


        pageData.setting_pic_advanced_sharpness_text_1.Data = pageData.operateData.setting_pic_advanced_sharpness_text_1.Data;

        //pageData.setting_pic_advanced_sharpness_cmp.disable = pageData.operateData.setting_pic_advanced_sharpness_cmp.disable;
        //pageData.setting_pic_advanced_sharpness_text_0.disable = pageData.operateData.setting_pic_advanced_sharpness_cmp.disable;
        //pageData.setting_pic_advanced_sharpness_text_separate.disable = pageData.operateData.setting_pic_advanced_sharpness_cmp.disable;
        //pageData.setting_pic_advanced_sharpness_text_1.disable = pageData.operateData.setting_pic_advanced_sharpness_cmp.disable;


        var ultraSmoothMotionSelectedIndex = pageData.operateData.setting_pic_advanced_ultra_smooth_motion_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_advanced_ultra_smooth_motion_cmp', ultraSmoothMotionSelectedIndex);
        pageData.setting_pic_advanced_ultra_smooth_motion_cmp.disable = pageData.operateData.setting_pic_advanced_ultra_smooth_motion_cmp.disable;
        pageData.setting_pic_advanced_ultra_smooth_motion_text_0.disable = pageData.operateData.setting_pic_advanced_ultra_smooth_motion_cmp.disable;

        var noiseReductionSelectedIndex = pageData.operateData.setting_pic_advanced_noise_reduction_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_advanced_noise_reduction_cmp', noiseReductionSelectedIndex);
        pageData.setting_pic_advanced_noise_reduction_cmp.disable = pageData.operateData.setting_pic_advanced_noise_reduction_cmp.disable;
        pageData.setting_pic_advanced_noise_reduction_text_0.disable = pageData.operateData.setting_pic_advanced_noise_reduction_cmp.disable;

        var adaptiveContrastSelectedIndex = pageData.operateData.setting_pic_advanced_adaptive_contrast_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_advanced_adaptive_contrast_cmp', adaptiveContrastSelectedIndex);
        pageData.setting_pic_advanced_adaptive_contrast_cmp.disable = pageData.operateData.setting_pic_advanced_adaptive_contrast_cmp.disable;
        pageData.setting_pic_advanced_adaptive_contrast_text_0.disable = pageData.operateData.setting_pic_advanced_adaptive_contrast_cmp.disable;

        var colorTemperatureSelectedIndex = pageData.operateData.setting_pic_advanced_color_temperature_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_advanced_color_temperature_cmp', colorTemperatureSelectedIndex);
        pageData.setting_pic_advanced_color_temperature_cmp.disable = pageData.operateData.setting_pic_advanced_color_temperature_cmp.disable;
        pageData.setting_pic_advanced_color_temperature_text_0.disable = pageData.operateData.setting_pic_advanced_color_temperature_cmp.disable;

        var localDimmingAdvanced = pageData.operateData.setting_pic_advanced_local_dimming_advanced_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_advanced_local_dimming_advanced_cmp', localDimmingAdvanced);
        pageData.setting_pic_advanced_local_dimming_advanced_cmp.disable = pageData.operateData.setting_pic_advanced_local_dimming_advanced_cmp.disable;
        pageData.setting_pic_advanced_local_dimming_advanced_text_0.disable = pageData.operateData.setting_pic_advanced_local_dimming_advanced_cmp.disable;

        var localDimmingSwitch = pageData.operateData.setting_pic_advanced_local_dimming_switch_cmp.switchType;
        FlipSwitchRewriteEasy(pageData, 'setting_pic_advanced_local_dimming_switch_cmp', localDimmingSwitch);
        pageData.setting_pic_advanced_local_dimming_switch_cmp.disable = pageData.operateData.setting_pic_advanced_local_dimming_switch_cmp.disable;
        pageData.setting_pic_advanced_local_dimming_switch_text_0.disable = pageData.operateData.setting_pic_advanced_local_dimming_switch_cmp.disable;


        if (1 == MEMC_SUPPORT) {
            $('#setting_pic_advanced_ultra_smooth_motion').css('display', 'block');
            $('#setting_pic_advanced_ultra_smooth_motion_cmp').css('display', 'block');
        } else {
            $('#setting_pic_advanced_ultra_smooth_motion').css('display', 'none');
            $('#setting_pic_advanced_ultra_smooth_motion_cmp').css('display', 'none');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function onSettingPicAdvancedOpen() {
    try {

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicAdvancedClose() {
    try {
        CloseSndHelpInfoPage();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicAdvancedDestroy() {
    try {
        hiWebOsFrame.SettingPicAdvanced = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedDisplayEnterHandler() {
    try {
        hiWebOsFrame.SettingPicAdvanced.close();
        hiWebOsFrame.createPage('setting_pic_display_component_page', null, hiWebOsFrame.SettingPicAdvanced, null, function (SettingPicDisplayComponent) {
            hiWebOsFrame.SettingPicDisplayComponent = SettingPicDisplayComponent;
            hiWebOsFrame.SettingPicDisplayComponent.open();
            hiWebOsFrame.SettingPicDisplayComponent.hiFocus();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedOverScanEnterHandler() {
    try {
        var overScanState = model.video.getOverscan();
        DBG_INFO('model.video.getOverscan(): ' + overScanState);


        model.video.setOverscan(Bool2Num(!overScanState));
        DBG_INFO(' model.video.setOverscan(' + Bool2Num(!overScanState) + ')');

        var overScanCmp = this;
        FlipSwitchEasyChange.call(this, overScanCmp, !overScanState);

        SetRecentUse("Overscan", 0, FirPageSndIdx.PicAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedTintEnterHandler() {
    try {
        hiWebOsFrame.SettingPicAdvanced.close();
        hiWebOsFrame.createPage('setting_pic_tint_page_new', null, hiWebOsFrame.SettingPicAdvanced, null, function (SettingPicTint) {
            hiWebOsFrame.SettingPicTint = SettingPicTint;
            SettingPicTint.open();
            SettingPicTint.hiFocus();
            SettingPicTint.rewriteDataOnly();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedSharpnessEnterHandler() {
    try {
        hiWebOsFrame.SettingPicAdvanced.close();

        hiWebOsFrame.createPage('setting_pic_sharpness_page_new', null, hiWebOsFrame.SettingPicAdvanced, null, function (SettingPicSharpness) {
            hiWebOsFrame.SettingPicSharpness = SettingPicSharpness;
            hiWebOsFrame.SettingPicSharpness.open();
            hiWebOsFrame.SettingPicSharpness.hiFocus();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedUltraSmoothMotionEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var ultraSmoothMotionCmp = this;

            model.video.setEnumSmoothMotion(this.SelectedIndex);
            NaviBarEasyChange.call(this, ultraSmoothMotionCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            SetRecentUse("Ultra Smooth Motion", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedLocalDimmingSwitchEnterHandler(){
    try {
        var localDimmingCmp = this;

        var localDimming = tv ? model.video.getEnumLocalDimming() : localDimmingCmp.SwitchType;
        DBG_INFO('model.video.getEnumLocalDimming(): ' + localDimming);
        var localDimming = !localDimming;

        tv && model.video.setEnumLocalDimming(Bool2Num(localDimming));
        DBG_INFO('model.video.setEnumLocalDimming(' + Bool2Num(localDimming) + ')');

        FlipSwitchEasyChange.call(this, localDimmingCmp, localDimming);

        SetRecentUse("Local Dimming", 0, FirPageSndIdx.PicAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedLocalDimmingAdvancedEnterHandler() {
    try {

        if (this.DataSelectedIndex != this.SelectedIndex) {
            var localDimmingAdvancedCmp = this;

            tv && model.video.setEnumLocalDimming(this.SelectedIndex);
            DBG_INFO('model.video.setEnumLocalDimming(): ' + this.SelectedIndex);

            NaviBarEasyChange.call(this, localDimmingAdvancedCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            SetRecentUse("Local Dimming", 0, FirPageSndIdx.PicAdvanced);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicAdvancedNoiseReductionEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var noiseReductionCmp = this;

            model.video.setEnumNoiseReduction(this.SelectedIndex);
            NaviBarEasyChange.call(this, noiseReductionCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            SetRecentUse("Noise Reduction", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedAdaptiveContrastEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var adaptiveContrastCmp = this;
            model.video.setAdaptiveContrast(this.SelectedIndex);
            NaviBarEasyChange.call(this, adaptiveContrastCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            SetRecentUse("Adaptive Contrast", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedColorTemperatureEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var adaptiveContrastCmp = this;
            model.video.setEnumColourTemperature(this.SelectedIndex);
            NaviBarEasyChange.call(this, adaptiveContrastCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            SetRecentUse("Colour Temperature", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PicAdvancedRefreshScrollContentHeight() {
    try {
        var offsetContentHeight = $('#setting_pic_advanced_scroll_content').offset().height;
        offsetContentHeight == 0 && (offsetContentHeight = 1000);
        var scale = getSettingPicAdvancedPageScale();
        PageDataPicAdvanced.operateData.ScrollCfg.scrollContentHeight = parseInt(offsetContentHeight / scale);
        DBG_INFO('PageDataPicAdvanced.operateData.ScrollCfg.scrollContentHeight: ' + PageDataPicAdvanced.operateData.ScrollCfg.scrollContentHeight);

        var scrollCfg = PageDataPicAdvanced.operateData.ScrollCfg;
        var scrollBarHeight = parseInt(scrollCfg.scrollRailHeight / scrollCfg.scrollContentHeight * scrollCfg.scrollRailHeight);
        PageDataPicAdvanced.operateData.ScrollCfg.scrollBarHeight = scrollBarHeight;
        DBG_INFO('PageDataPicAdvanced.operateData.ScrollCfg.scrollBarHeight: ' + scrollBarHeight);
        $('#setting_pic_advanced_scroll_bar').css('height', scrollBarHeight + 'px');
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PicAdvancedRefreshFirstFocusId() {
    try {
        var firFocusId = 'setting_pic_advanced_3d_cmp';
        var cmpVec = [
            'setting_pic_advanced_3d_cmp',
            'setting_pic_advanced_color_gamut_cmp',
            'setting_pic_advanced_tint_cmp',
            'setting_pic_advanced_sharpness_cmp'];

        for (var i = 0; i < cmpVec.length; i++) {
            if (false == PageDataPicAdvanced[cmpVec[i]].disable) {
                firFocusId = cmpVec[i];
                break;
            }
        }
        hiWebOsFrame.SettingPicAdvanced.firstFocusId = firFocusId;
        hiWebOsFrame.SettingPicAdvanced.hiFocus(firFocusId);

        PicAdvancedRefreshScrollContentHeight();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicAdvancedEscHandler() {
    try {
        hiWebOsFrame.SettingPicAdvanced.close();
        hiWebOsFrame.SettingPicAdvanced.origin.open();
        hiWebOsFrame.SettingPicAdvanced.origin.hiFocus();
        hiWebOsFrame.SettingPicAdvanced.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicAdvanced.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedColorTunerEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_pic_color_tuner', null, hiWebOsFrame.SettingPicAdvanced, null, function (SettingPicColorTuner) {
            hiWebOsFrame.SettingPicAdvanced.close();
            hiWebOsFrame.SettingPicColorTuner = SettingPicColorTuner;
            SettingPicColorTuner.open();
            SettingPicColorTuner.hiFocus();
        });
        SetRecentUse("Colour Tuner", 0, FirPageSndIdx.PicAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedWhiteBalanceEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_pic_white_balance_2point_page', null, hiWebOsFrame.SettingPicAdvanced, null, function (SettingPicWteBal2Pot) {
            hiWebOsFrame.SettingPicAdvanced.close();
            hiWebOsFrame.SettingPicWteBal2Pot = SettingPicWteBal2Pot;
            SettingPicWteBal2Pot.open();
            SettingPicWteBal2Pot.rewriteDataOnly();
            SettingPicWteBal2Pot.hiFocus();
        });
        SetRecentUse("White Balance", 0, FirPageSndIdx.PicAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvanced3DEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_pic_3d', null, hiWebOsFrame.SettingPicAdvanced, null, function (SettingPic3D) {
            hiWebOsFrame.SettingPic3D = SettingPic3D;
            var firFocusId = getPic3DFirstEnabledCmpId();
            hiWebOsFrame.SettingPic3D.firstFocusId = firFocusId;
            SettingPic3D.origin.close();
            SettingPic3D.open();
            SettingPic3D.hiFocus();

            if('EU' == InitArea){
                var helpInfo = PageDataSettingPic3D.operateData.helpInfo[firFocusId];
                CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                var pos = sndHelpInfo.getPosZIndex('setting_pic_3d');
                sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                hiWebOsFrame[sndHelpInfo.id].open();
            }

        });

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicColorGamutEnterHandler() {
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

function SettingPicColorGamutAftUpHandler() {
    try {
        SettingPicAdvancedRefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicColorGamutAftDownHandler() {
    try {
        SettingPicAdvancedRefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function getSettingPicAdvancedPageScale() {
    try {
        if (PageDataPicAdvanced.operateData.pageScale != null) {
            return PageDataPicAdvanced.operateData.pageScale;
        } else {
            var pageScaleWidth = $('#setting_pic_advanced_page_new').offset().width;
            var pageWidth = parseInt($('#setting_pic_advanced_page_new').css('width'));
            var scale = Math.round(pageScaleWidth / pageWidth * 100) / 100;
            PageDataPicAdvanced.operateData.pageScale = scale;
            return scale;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedRefreshScrollAndPageInfo() {
    try {
        DBG_INFO("SettingPicAdvancedRefreshScrollAndPageInfo");
        var curId = hiWebOsFrame.SettingPicAdvanced.currentSelectedTree[0].id;
        try {
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo[curId];
            sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        if ("setting_pic_advanced_color_gamut_cmp" == curId) {
            SettingPicAdvancedSetContentMarginTop(0);
            SettingPicAdvancedSetSBarMarginTop(0);
            return;
        }

        //else if ("setting_pic_advanced_color_tuner_cmp" == curId) {
        //    if (1 == MEMC_SUPPORT) {
        //        SettingPicAdvancedSetContentMarginTop(-384);
        //        SettingPicAdvancedSetSBarMarginTop(228);
        //    } else {
        //        SettingPicAdvancedSetContentMarginTop(-257);
        //        SettingPicAdvancedSetSBarMarginTop(228);
        //    }
        //    return;
        //}


        var scale = getSettingPicAdvancedPageScale();
        var scrollCfg = PageDataPicAdvanced.operateData.ScrollCfg;

        DBG_INFO("curMainId: " + curId + ', getSettingPicAdvancedPageScale(): ' + scale);


        // if down are all disable, set calculator most down id;
        if ('setting_pic_advanced_white_balance_cmp' == curId && true == PageDataPicAdvanced.operateData['setting_pic_advanced_display_cmp'].disable) {
            curId = 'setting_pic_advanced_display_cmp';
            DBG_INFO("'setting_pic_advanced_white_balance_cmp' == curId && true == PageDataPicAdvanced.operateData['setting_pic_advanced_display_cmp'].disable, set calculator curId = setting_pic_advanced_display_cmp")
        }

        var bkgTop = $("#setting_pic_advanced_page_new").offset().top;
        var curRelativeTop = $("#" + curId).offset().top - bkgTop;
        //curRelativeTop是相对高度，已经缩放了
        if (curRelativeTop < PageDataPicAdvanced.operateData.ScrollCfg.limTop * scale) {
            DBG_INFO("too High");
            var tmpH = parseInt((PageDataPicAdvanced.operateData.ScrollCfg.limTop * scale - curRelativeTop) / scale);
            var curContentMarginTop = parseInt(($("#setting_pic_advanced_scroll_content").offset().top - $("#setting_pic_advanced_page_new").offset().top) / scale);
            SettingPicAdvancedSetContentMarginTop(curContentMarginTop + tmpH);


            //以下计算sBar
            var tmpMarginTop = Math.abs(parseInt($("#setting_pic_advanced_scroll_content").css("margin-top")));
            SettingPicAdvancedSetSBarMarginTop(Math.round(tmpMarginTop / scrollCfg.scrollContentHeight * scrollCfg.scrollRailHeight)); // 暂不修改
        } else if (curRelativeTop > PageDataPicAdvanced.operateData.ScrollCfg.limBtm * scale) {
            DBG_INFO("too low$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
            var tmpH = parseInt(curRelativeTop / scale - PageDataPicAdvanced.operateData.ScrollCfg.limBtm);
            var curContentMarginTop = parseInt(($("#setting_pic_advanced_scroll_content").offset().top - $("#setting_pic_advanced_page_new").offset().top) / scale);
            SettingPicAdvancedSetContentMarginTop(curContentMarginTop - tmpH);

            //以下计算sBar
            var tmpMarginTop = Math.abs(parseInt($("#setting_pic_advanced_scroll_content").css("margin-top")));
            SettingPicAdvancedSetSBarMarginTop(Math.round(tmpMarginTop / scrollCfg.scrollContentHeight * scrollCfg.scrollRailHeight)); //暂不修改
        }

        ////如果最上面都是disable，则移到最上端
        //try {
        //    var upDisableVec = [
        //        'setting_pic_advanced_display_cmp',
        //        'setting_pic_advanced_overscan_switch_cmp',
        //        'setting_pic_advanced_tint_cmp',
        //        'setting_pic_advanced_sharpness_cmp'
        //    ];
        //
        //    var idxOffset = upDisableVec.indexOf(curId);
        //    if (-1 != idxOffset) {
        //        var moveTop = true;
        //        for (var i = 0; i < idxOffset; i++) {
        //            if (false == PageDataPicAdvanced.operateData[upDisableVec[i]].disable) {
        //                moveTop = false;
        //                break;
        //            }
        //        }
        //
        //        if (true == moveTop) {
        //            SettingPicAdvancedSetContentMarginTop(0);
        //            SettingPicAdvancedSetSBarMarginTop(0);
        //        }
        //
        //    }
        //} catch (ex) {
        //    DBG_ERROR(ex.message);
        //}


        //如果最下面是disable，则移到最下端

        //try {
        //    if ('setting_pic_advanced_white_balance_cmp' == curId && true == PageDataPicAdvanced.operateData['setting_pic_advanced_display_cmp'].disable) {
        //        var scrollCfg = PageDataPicAdvanced.operateData.ScrollCfg;
        //        SettingPicAdvancedSetContentMarginTop(-(scrollCfg.scrollContentHeight - scrollCfg.pageHeight + 60));
        //        SettingPicAdvancedSetSBarMarginTop(scrollCfg.scrollRailHeight - scrollCfg.scrollBarHeight);
        //    }
        //} catch (ex) {
        //    DBG_ERROR(ex.message);
        //}

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicAdvancedSetContentMarginTop(magTop) {
    try {
        if (magTop > 0) {
            magTop = 0;
        }
        //var defTop = -720; //1270+60-670+60     //934 + 60 - 670 + 60
        //
        //if (magTop < defTop) {
        //    magTop = defTop;
        //}
        if ($("#setting_pic_advanced_scroll_content") != null) {
            $("#setting_pic_advanced_scroll_content").css("margin-top", magTop + "px");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAdvancedSetSBarMarginTop(magTop) {
    try {
        if (magTop < 0) {
            magTop = 0;
        }
        //var defTop = 311; //551-240 //551-323;
        //if (magTop > defTop) {
        //    magTop = defTop;
        //}
        if ($("#setting_pic_advanced_scroll_bar") != null) {
            $("#setting_pic_advanced_scroll_bar").css("margin-top", magTop + "px")
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}