/**
 *
 * Created by ghl on 14-6-19.
 */

var Factory1969Vector = [];

function getSettingSndAdvancedData(opts) {
    SettingSndAdvancedInit();

    opts.CaE = [
        {
            "id": "setting_snd_head_phone_mode_text_0",
            "description": "headphone mode text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_head_phone_mode_text_1",
            "description": "headphone mode text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_head_phone_volume_text_0",
            "description": "headphone volume text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_head_phone_volume_text_1",
            "description": "headphone volume text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_tv_speaker_title",
            "description": "apply_pic_settings_title",
            "CaEType": "span",
            "class": "apply_pic_settings_title_text_0"
        },

        {
            "id": "setting_snd_equalizer_text_0",
            "description": "Equalizer text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_lip_sync_text_0",
            "description": "setting_snd_lip_sync_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_balance_text_0",
            "description": "sound balance text 0",
            "CaEType": "span"
        },

        {
            "id": "setting_snd_digital_audio_out_text_0",
            "description": "setting_snd_digital_audio_out_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_digital_audio_out_text_1",
            "description": "setting_snd_digital_audio_out_text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_digital_audio_delay_text_0",
            "description": "setting_snd_digital_audio_delay_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_tv_speaker_and_arc_text_0",
            "description": "setting_snd_tv_speaker_and_arc_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_tv_speaker_and_arc_text_1",
            "description": "setting_snd_tv_speaker_and_arc_text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_audio_out_text_0",
            "description": "setting_snd_audio_out_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_audio_out_text_1",
            "description": "setting_snd_audio_out_text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_description_out_text_0",
            "description": "setting_snd_description_out",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_description_out_text_1",
            "description": "setting_snd_audio_out_text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_description_volume_text_0",
            "description": "setting_snd_description_volume_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_description_volume_text_1",
            "description": "setting_snd_description_volume_text_1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_audio_type_text_0",
            "description": "setting_snd_audio_type_text_0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_audio_type_text_1",
            "description": "setting_snd_audio_type_text_1",
            "CaEType": "span"
        },
//zjm add headphone mode
        {
            "id": "setting_snd_head_phone_mode_cmp",
            "description": "设置耳机的开关模式",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "head_phone_mode_cmp_li_normal",
                "focus": "head_phone_mode_cmp_li_focus",
                "disable": "head_phone_mode_cmp_li_disable",
                "dataSelected": "head_phone_mode_cmp_li_selected_no_focus",
                "disableDataSelected": "head_phone_mode_cmp_li_disable_selected"
            },
            "handler": {
                "aftEnterHandler": "HeadPhoneModeEnterHandler",
                "aftDownHandler": "DigitalAudioOutDownHandler",
                "aftUpHandler": "DigitalAudioOutUpHandler",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "befDownHandler": "DigitalAudioOutDownHandler",
                "befUpHandler": "DigitalAudioOutUpHandler"

            },
            "nav": {
                "upTo": "",
                "leftTo": "",
                "downTo": "setting_snd_head_phone_volume",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_snd_head_phone_mode_cmp_item",
                    "description": "setting_snd_head_phone_mode_cmp_item",
                    "CaEType": "div",
                    "classes": {
                        "normal": "apply_pic_settings_item_text_normal", "focus": "apply_pic_settings_item_text_normal",
                        "disable": "apply_pic_settings_item_text_normal"
                    }
                },
                {
                    "id": "setting_snd_head_phone_mode_cmp_item_text",
                    "description": "setting_snd_head_phone_mode_cmp_item_text",
                    "CaEType": "div",
                    "classes": {
                        "normal": "apply_pic_settings_item_text_normal", "focus": "apply_pic_settings_item_text_normal",
                        "disable": "apply_pic_settings_item_text_normal"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_head_phone_mode_cmp_item",
                    "setting_snd_head_phone_mode_cmp_item"
                ]
            }
//                    "linkZoonSpan": "setting_pic_currentZoom"

        },

        //zjm add head phone volume
        {
            "id": "setting_snd_head_phone_volume",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "setting_snd_head_phone_volume_slider",
            "nav": {"downTo": "setting_snd_digital_audio_out_cmp", "upTo": "setting_snd_head_phone_mode_cmp"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingSndHPVolumeRightHandel",
                "aftLeftHandler": "SettingSndHPVolumeLeftHandel",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "aftUpHandler": "RefreshScrollAndPageInfo",
                "aftDownHandler": "RefreshScrollAndPageInfo"
            },
            "CaE": [
                {
                    "id": "setting_snd_head_phone_volume_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_head_phone_volume_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"},
                    "nav": {"upTo": "setting_snd_head_phone_mode_cmp", "downTo": "setting_snd_audio_out_cmp"}

                },
                {
                    "id": "setting_snd_head_phone_volume_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_head_phone_volume_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_head_phone_volume_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_head_phone_volume_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_head_phone_volume_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_head_phone_volume_slider_line",
                "sliderId": "setting_snd_head_phone_volume_slider",
                "completeId": "setting_snd_head_phone_volume_slider_complete",
                "sliderSpanId": "setting_snd_head_phone_volume_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_head_phone_volume_min_val",
                "sliderMaxValueId": "setting_snd_head_phone_volume_max_val"
            }

        },

        {
            "id": "setting_snd_audio_out_cmp",
            "description": "setting_snd_audio_out_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_audio_type_cmp_li_normal",
                "focus": "setting_snd_SAS_audio_type_cmp_li_focus",
                "disable": "setting_snd_SAS_audio_type_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_audio_type_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_audio_type_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "AudioOutEnterHandler",
                "aftUpHandler": "AudioOutAftUpHandler",
                "aftDownHandler": "AudioOutAftDownHandler",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "befDownHandler": "AudioOutBefDownHandler",
                "befUpHandler": "AudioOutBefUpHandler",
                "aftRightHandler": "AudioOutAftRightHandler",
                "aftLeftHandler": "AudioOutAftLeftHandler"
            },
            "nav": {
                "upTo": "setting_snd_head_phone_volume",
                "leftTo": "",
                "downTo": "setting_snd_digital_audio_out_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_snd_audio_out_cmp_item",
                    "description": "setting_snd_audio_out_cmp_item",
                    "CaEType": "div"
                },
                {
                    "id": "setting_snd_audio_out_cmp_item_text",
                    "description": "setting_snd_audio_out_cmp_item_text",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_audio_out_cmp_item",
                    "setting_snd_audio_out_cmp_item_text"
                ]
            }
        },


        {
            "id": "setting_snd_equalizer_cmp",
            "description": "Equalizer 的部件",
            "CaEType": "div",
            "classes": {
                "normal": "setting_chnl_advanced_export_to_usb_cmp_normal",
                "disable": "setting_chnl_advanced_export_to_usb_cmp_disable",
                "focus": "setting_chnl_advanced_export_to_usb_cmp_focus"
            },
            "handler": {
                "aftEnterHandler": "openEqualizerSettingPage",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "aftUpHandler": "RefreshScrollAndPageInfo",
                "aftDownHandler": "RefreshScrollAndPageInfo"
            },
            "nav": {
//                "upTo": "setting_snd_audio_type_cmp",
                "upTo": "setting_snd_balance",
                "downTo": "setting_snd_audio_type_cmp"
            }
        },
        {
            "id": "setting_snd_lip_sync",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "setting_snd_lip_sync_slider",
            "nav": {"downTo": "setting_snd_balance", "upTo": "setting_snd_digital_audio_delay"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingSndLipSyncRightHandel",
                "aftLeftHandler": "SettingSndLipSyncLeftHandel",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "aftUpHandler": "RefreshScrollAndPageInfo",
                "aftDownHandler": "RefreshScrollAndPageInfo"
            },
            "CaE": [
                {
                    "id": "setting_snd_lip_sync_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_lip_sync_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"},
                    "nav": {"upTo": "setting_snd_digital_audio_delay", "downTo": "setting_snd_balance"}

                },
                {
                    "id": "setting_snd_lip_sync_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_lip_sync_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_lip_sync_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_lip_sync_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_lip_sync_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_lip_sync_slider_line",
                "sliderId": "setting_snd_lip_sync_slider",
                "completeId": "setting_snd_lip_sync_slider_complete",
                "sliderSpanId": "setting_snd_lip_sync_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_lip_sync_min_val",
                "sliderMaxValueId": "setting_snd_lip_sync_max_val"
            }

        },
        {
            "id": "setting_snd_balance",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_snd_balance_slider",
            "nav": {"downTo": "setting_snd_equalizer_cmp", "upTo": "setting_snd_lip_sync"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingSndBalRightHandler",
                "aftLeftHandler": "SettingSndBalLeftHandler",
                "aftDownHandler": "SettingSndBalAftDownHandler",
                "aftUpHandler": "SettingSndBalAftUpHandler",
                "aftEscHandler": "SettingSndAdvancedEscHandler"
            },
            "CaE": [
                {
                    "id": "setting_snd_balance_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_balance_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_lip_sync",
                        "downTo": "setting_snd_equalizer_cmp"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"},
                    handler: {
                        "keyNum0Handler": "Factory1969VectorAdd0",
                        "keyNum1Handler": "Factory1969VectorAdd1",
                        "keyNum2Handler": "Factory1969VectorAdd2",
                        "keyNum3Handler": "ClearFactory1969Vector",
                        "keyNum4Handler": "Factory1969VectorAdd4",
                        "keyNum5Handler": "Factory1969VectorAdd5",
                        "keyNum6Handler": "Factory1969VectorAdd6",
                        "keyNum7Handler": "ClearFactory1969Vector",
                        "keyNum8Handler": "Factory1969VectorAdd8",
                        "keyNum9Handler": "Factory1969VectorAdd9",
                        "befDownHandler": "ClearFactory1969Vector",
                        "befUpHandler": "ClearFactory1969Vector"
                    }

                },
                {
                    "id": "setting_snd_balance_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }

                },
                {
                    "id": "setting_snd_balance_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_balance_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_balance_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_balance_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_balance_slider_line",
                "sliderId": "setting_snd_balance_slider",
                "completeId": "setting_snd_balance_slider_complete",
                "sliderSpanId": "setting_snd_balance_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_balance_slider_min_val",
                "sliderMaxValueId": "setting_snd_balance_slider_max_val"
            }

        },
        {
            "id": "setting_snd_digital_audio_out_cmp",
            "description": "声音设置 digital audio 外包的部件",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
                "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
                "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "DigitalAudioOutEnterHandler",
                "aftDownHandler": "DigitalAudioOutDownHandler",
                "aftUpHandler": "DigitalAudioOutUpHandler",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "befDownHandler": "DigitalAudioOutDownHandler",
                "befUpHandler": "DigitalAudioOutUpHandler"

            },
            "nav": {
                "upTo": "setting_snd_audio_out_cmp",
                "leftTo": "",
                "downTo": "setting_snd_digital_audio_delay",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_snd_digital_audio_out_cmp_item",
                    "description": "setting_snd_digital_audio_out_cmp_item",
                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_snd_digital_audio_out_cmp_item_text",
                    "description": "setting_snd_digital_audio_out_cmp_item_text",
                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_digital_audio_out_cmp_item",
                    "setting_snd_digital_audio_out_cmp_item"
                ]
            }
//                    "linkZoonSpan": "setting_pic_currentZoom"

        },
        {
            "id": "setting_snd_digital_audio_delay",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "nav": {
                "upTo": "setting_snd_digital_audio_out_cmp",
                "downTo": "setting_snd_lip_sync"
            },
            disable: false,
            "firstFocusId": "setting_snd_digital_audio_delay_slider",
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingSndDigitalAudioDelayRightHandel",
                "aftLeftHandler": "SettingSndDigitalAudioDelayLeftHandel",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "aftUpHandler": "RefreshScrollAndPageInfo",
                "aftDownHandler": "RefreshScrollAndPageInfo"
            },
            "CaE": [
                {
                    "id": "setting_snd_digital_audio_delay_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_digital_audio_delay_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_digital_audio_out_cmp",
                        "downTo": "setting_snd_lip_sync"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_snd_digital_audio_delay_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_digital_audio_delay_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_digital_audio_delay_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_digital_audio_delay_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_digital_audio_delay_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_digital_audio_delay_slider_line",
                "sliderId": "setting_snd_digital_audio_delay_slider",
                "completeId": "setting_snd_digital_audio_delay_slider_complete",
                "sliderSpanId": "setting_snd_digital_audio_delay_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_digital_audio_delay_min_val",
                "sliderMaxValueId": "setting_snd_digital_audio_delay_max_val"
            }
        },
        //{
        //    "id": "setting_snd_tv_speaker_and_arc_cmp",
        //    "description": "Spearker And Arc 外包的Container",
        //    "CaEType": "NavigationBar",
        //    "classes": {
        //        "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
        //        "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
        //        "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
        //        "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
        //        "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
        //    },
        //    "handler": {
        //        "aftEnterHandler": "SpeakerAndArcEnterHandler",
        //        "aftDownHandler": "SpeakerAndArcAftDownHandler",
        //        "aftUpHandler": "SpeakerAndArcAftUpHandler",
        //        "aftEscHandler": "SettingSndAdvancedEscHandler",
        //        "befDownHandler": "SpeakerAndArcBefDownHandler",
        //        "befUpHandler": "SpeakerAndArcBefUpHandler",
        //        "aftLeftHandler": "SpeakerAndArcLeftHandler",
        //        "aftRightHandler": "SpeakerAndArcRightHandler"
        //    },
        //    "nav": {
        //        "upTo": "setting_snd_digital_audio_delay",
        //        "leftTo": "",
        //        "downTo": "setting_snd_audio_out_cmp",
        //        "rightTo": ""
        //    },
        //    disable: false,
        //
        //    "oriCaE": [
        //        {
        //            "id": "setting_snd_tv_speaker_and_arc_cmp_item",
        //            "description": "setting_snd_tv_speaker_and_arc_cmp_item",
        //            "CaEType": "div"
        //        },
        //        {
        //            "id": "setting_snd_tv_speaker_and_arc_cmp_item_text",
        //            "description": "setting_snd_tv_speaker_and_arc_cmp_item_text",
        //            "CaEType": "div"
        //        }
        //    ],
        //    "NavigationBarConfig": {
        //        "NavigationBarDataItem": [
        //            "setting_snd_tv_speaker_and_arc_cmp_item",
        //            "setting_snd_tv_speaker_and_arc_cmp_item_text"
        //        ]
        //    }
        //},
        {
            "id": "setting_snd_audio_type_cmp",
            "description": "setting_snd_audio_out_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_audio_type_cmp_li_normal",
                "focus": "setting_snd_SAS_audio_type_cmp_li_focus",
                "disable": "setting_snd_SAS_audio_type_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_audio_type_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_audio_type_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "AudioTypeEnterHandler",
                "aftUpHandler": "AudioTypeUpHandler",
                "aftDownHandler": "AudioTypeDownHandler",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "befDownHandler": "AudioTypeDownHandler_BEF",
                "befUpHandler": "AudioTypeDownHandler_BEF"
            },
            "nav": {
                "upTo": "setting_snd_equalizer_cmp",
                "leftTo": "",
                "downTo": "setting_snd_description_out_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_snd_audio_type_cmp_item",
                    "description": "setting_snd_audio_type_cmp_item",
                    "CaEType": "div"
                },
                {
                    "id": "setting_snd_audio_type_cmp_item_text",
                    "description": "setting_snd_audio_type_cmp_item_text",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_audio_type_cmp_item",
                    "setting_snd_audio_type_cmp_item_text"
                ]
            }
        },
        {
            "id": "setting_snd_description_out_cmp",
            "description": "setting_snd_description_out_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
                "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
                "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "DescriptionOutEnterHandler",
                "aftUpHandler": "DescriptionOutUpHandler",
                "aftDownHandler": "DescriptionOutDownHandler",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "befDownHandler": "DescriptionOutDownHandler",
                "befUpHandler": "DescriptionOutUpHandler"
            },
            "nav": {
                "upTo": "setting_snd_audio_type_cmp",
                "leftTo": "",
                "downTo": "setting_snd_description_volume",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_snd_description_out_cmp_item",
                    "description": "setting_snd_description_out_cmp_item",
                    "CaEType": "div"
                },
                {
                    "id": "setting_snd_description_out_cmp_item_text",
                    "description": "setting_snd_description_out_cmp_item_text",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_description_out_cmp_item",
                    "setting_snd_description_out_cmp_item_text"
                ]
            }
        },
        {
            "id": "setting_snd_description_volume",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "nav": {
                "upTo": "setting_snd_description_out_cmp",
                "downTo": "setting_snd_tv_speaker_flipSwitch"
            },
            disable: false,
            "firstFocusId": "setting_snd_description_volume_slider",
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingSndDescriptionVolumeRightHandel",
                "aftLeftHandler": "SettingSndDescriptionVolumeLeftHandel",
                "aftEscHandler": "SettingSndAdvancedEscHandler",
                "aftUpHandler": "RefreshScrollAndPageInfo",
                "aftDownHandler": "RefreshScrollAndPageInfo"
            },
            "CaE": [
                {
                    "id": "setting_snd_description_volume_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_description_volume_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_description_out_cmp",
                        //"downTo": "setting_snd_audio_type_cmp"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_snd_description_volume_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_description_volume_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_description_volume_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_description_volume_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_description_volume_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_description_volume_slider_line",
                "sliderId": "setting_snd_description_volume_slider",
                "completeId": "setting_snd_description_volume_slider_complete",
                "sliderSpanId": "setting_snd_description_volume_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_description_volume_min_val",
                "sliderMaxValueId": "setting_snd_description_volume_max_val"
            }
        },
        {
            "id": "setting_snd_tv_speaker_flipSwitch",
            "description": "",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_snd_description_volume",

            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",
            "FlipSwitchConfig": {switchTypeId: "switchType", switchTextId: "switchText"},
            "handler": {
                "aftEnterHandler": "SettingSndTvSpeakerSwitchEnterHandler",
                "aftUpHandler": "RefreshScrollAndPageInfo",
                "aftDownHandler": "RefreshScrollAndPageInfo",
                "aftEscHandler": "SettingSndAdvancedEscHandler"

            }
        }
    ];
    return PageDataSettingSndAdvanced;
}

var sndadvancedfunc = new sndAdvancedfunc();
function sndAdvancedfunc() {
    var self = this;
    self.getPageScale = function () {
        try {
            if (PageDataSettingSndAdvanced.operateData.pageScale != null) {
                return PageDataSettingSndAdvanced.operateData.pageScale;
            } else {
                var pageScaleWidth = $('#setting_snd_advanced_settings').offset().width;
                var pageWidth = parseInt($('#setting_snd_advanced_settings').css('width'));
                var scale = Math.round(pageScaleWidth / pageWidth * 100) / 100;
                PageDataSettingSndAdvanced.operateData.pageScale = scale;
                return scale;
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
}


function SndAdvancedRefreshScrollContentHeight() {
    try {
        var curArea = "EM";
        if ("EU" == InitArea) {
            curArea = "EU";
        }
        var offsetContentHeight = $('#setting_snd_scroll_content').offset().height;
        offsetContentHeight == 0 && (offsetContentHeight = 1000);
        var scale = sndadvancedfunc.getPageScale();
        PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].scrollContentHeight = parseInt(offsetContentHeight / scale);
        DBG_INFO('PageDataSettingSndAdvanced.operateData.ScrollCfg.scrollContentHeight: ' + PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].scrollContentHeight);

        var scrollCfg = PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea];
        var scrollBarHeight = parseInt(scrollCfg.scrollRailHeight / scrollCfg.scrollContentHeight * scrollCfg.scrollRailHeight);
        PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].scrollBarHeight = scrollBarHeight;
        DBG_INFO('PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].scrollBarHeight: ' + scrollBarHeight);
        $('#setting_snd_scroll_bar').css('height', scrollBarHeight + 'px');
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function onSettingSndAdvancedOpen() {

    try {
        DBG_INFO("CreateSndHelpInfoPage");
        if (1 == getARCDeviceWorkingState()) {
            hiWebOsFrame.SettingSndAdvancedPage.firstFocusId = "setting_snd_digital_audio_out_cmp";
            //CreateSndHelpInfoPage("Digital Audio Out", "Select the digital audio output format that best suits the audio device type.");
        } else {
            if ("EU" == InitArea) {
                if (1 == PageDataSettingSndAdvanced.operateData.headPhoneInsert) {
                    hiWebOsFrame.SettingSndAdvancedPage.firstFocusId = "setting_snd_head_phone_mode_cmp";
                } else {
                    hiWebOsFrame.SettingSndAdvancedPage.firstFocusId = "setting_snd_digital_audio_out_cmp";
                }
            }
            else {
                hiWebOsFrame.SettingSndAdvancedPage.firstFocusId = "setting_snd_audio_out_cmp";
            }
            //hiWebOsFrame.SettingSndAdvancedPage.firstFocusId = "setting_snd_equalizer_cmp";
            //CreateSndHelpInfoPage("Equalizer", "Boost the volume at different frequencies.");
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingSndAdvancedDestroy() {
    try {

        hiWebOsFrame.SettingSndAdvancedPage = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndAdvancedEscHandler() {
    try {
        CloseSndHelpInfoPage();

        ClearFactory1969Vector();
        RefreshSomeFirPageDisableItem(); //退出时更新下；
        settingFirDisableChannelItem();
        // var i= _getIndex(PageDataFirstCls.operateData.settingdisablelist[5],4);

//        var hotelmode = tv ? model.hotel.getHotelMode() : true;
//        if(checkIsAppOn()||hotelmode)
//        {
//            if(i<0)
//            {
//                PageDataFirstCls.operateData.settingdisablelist[5].push(4);
//            }
//        }
//        else
//        {
//            if(i>=0)
//            {
//                PageDataFirstCls.operateData.settingdisablelist[5].splice(i,1);
//            }
//        }
        hiWebOsFrame.SettingSndAdvancedPage.close();
        hiWebOsFrame.SettingSndAdvancedPage.origin.open();
        hiWebOsFrame.SettingSndAdvancedPage.origin.hiFocus();
        hiWebOsFrame.SettingSndAdvancedPage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndAdvancedPage.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var PageDataSettingSndAdvanced = {
    "setting_snd_equalizer_text_0": {Data: "Equalizer"},
    "setting_snd_equalizer_cmp": {Data: "Adjust"},
    "setting_snd_lip_sync_text_0": {Data: "Lip Sync"},
    "setting_snd_balance_text_0": {Data: "Balance"},
    //zjm add
    "setting_snd_head_phone_mode_text_0": {Data: "Headphone Mode"},
    "setting_snd_head_phone_mode_text_1": {Data: ""},
    "setting_snd_head_phone_volume_text_0": {Data: "Headphone Volume"},
    //"setting_snd_head_phone_volume_text_1":{Data:""},

    "setting_snd_digital_audio_out_text_0": {Data: "Digital Audio Out"},
    "setting_snd_digital_audio_out_text_1": {Data: "Off"},
    "setting_snd_digital_audio_delay_text_0": {Data: "Digital Audio Delay"},
    "setting_snd_tv_speaker_and_arc_text_0": {Data: "TV Speaker & ARC"},
    "setting_snd_tv_speaker_and_arc_text_1": {Data: ""},
    "setting_snd_audio_out_text_0": {Data: "Audio Out"},
    "setting_snd_audio_out_text_1": {Data: "Audio Out Variable"},
    "setting_snd_description_out_text_0": {Data: "Voiceover Out"},
    "setting_snd_description_out_text_1": {Data: "All"},
    "setting_snd_description_volume_text_0": {Data: "Voiceover Volume"},
    "setting_snd_audio_type_text_0": {Data: "Audio Type"},
    "setting_snd_audio_type_text_1": {Data: "Audio Type"},
    "setting_snd_tv_speaker_title": {Data: "TV Speaker"},
    //zjm add
    "setting_snd_head_phone_mode_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_head_phone_mode_cmp_item": "",
                "setting_snd_head_phone_mode_cmp_item_text": {Data: "Headphone with TV Speaker"}
            },
            {
                "setting_snd_head_phone_mode_cmp_item": "",
                "setting_snd_head_phone_mode_cmp_item_text": {Data: "Headphone Only"}
            }
        ]
    },
    "setting_snd_head_phone_volume": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0
        }
    },

    setting_snd_tv_speaker_flipSwitch: {
        Data: {
            switchType: true,
            switchText: ''
        }
    },

    "setting_snd_lip_sync": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 10},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }

    },
    "setting_snd_balance": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -50, max: 50},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }
    },
    "setting_snd_digital_audio_out_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_digital_audio_out_cmp_item": "",
                "setting_snd_digital_audio_out_cmp_item_text": {Data: "Off"}
            },
            {
                "setting_snd_digital_audio_out_cmp_item": "",
                "setting_snd_digital_audio_out_cmp_item_text": {Data: "PCM"}
            },
            {
                "setting_snd_digital_audio_out_cmp_item": "",
                "setting_snd_digital_audio_out_cmp_item_text": {Data: "RAW"}
            }
        ]
    },
    "setting_snd_digital_audio_delay": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 25},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }
    },
    //"setting_snd_tv_speaker_and_arc_cmp": {
    //    DataSelectedIndex: 0,
    //    SelectedIndex: 0,
    //    Data: [
    //        {
    //            "setting_snd_tv_speaker_and_arc_cmp_item": "",
    //            "setting_snd_tv_speaker_and_arc_cmp_item_text": {Data: "Off"}
    //        },
    //        {
    //            "setting_snd_tv_speaker_and_arc_cmp_item": "",
    //            "setting_snd_tv_speaker_and_arc_cmp_item_text": {Data: "Speaker"}
    //        },
    //        {
    //            "setting_snd_tv_speaker_and_arc_cmp_item": "",
    //            "setting_snd_tv_speaker_and_arc_cmp_item_text": {Data: "ARC First"}
    //        }
    //    ],
    //    disableItem: []
    //},
    "setting_snd_audio_out_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_audio_out_cmp_item": "",
//                "setting_snd_audio_out_cmp_item_text": {Data: "Headphone/Audio Out Variable"}
                "setting_snd_audio_out_cmp_item_text": {Data: "Audio Out Variable"}
            },

            {
                "setting_snd_audio_out_cmp_item": "",
                "setting_snd_audio_out_cmp_item_text": {Data: "Audio Out Fixed"}
            }
//            {
//                "setting_snd_audio_out_cmp_item": "",
//                "setting_snd_audio_out_cmp_item_text": {Data: "Headphone with TV Speaker"}
//            }
        ]
    },
    "setting_snd_description_volume": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }

    },
    "setting_snd_description_out_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_description_out_cmp_item": "",
                "setting_snd_description_out_cmp_item_text": {Data: "All"}
            },

            {
                "setting_snd_description_out_cmp_item": "",
                "setting_snd_description_out_cmp_item_text": {Data: "Speaker"}
            },
            {
                "setting_snd_description_out_cmp_item": "",
                "setting_snd_description_out_cmp_item_text": {Data: "Headphone"}
            }
        ]
    },
    "setting_snd_audio_type_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_audio_type_cmp_item": "",
                "setting_snd_audio_type_cmp_item_text": {Data: "Normal"}
            },

            {
                "setting_snd_audio_type_cmp_item": "",
                "setting_snd_audio_type_cmp_item_text": {Data: "Visually Impaired"}
            }
        ]
    },

    "operateData": {
        pageScale: null,
        //zjm add
        headPhoneInsert: 0,
        "setting_snd_head_phone_mode_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_head_phone_mode_cmp_item": "",
                    "setting_snd_head_phone_mode_cmp_item_text": {Data: "Headphone with TV Speaker"}
                },
                {
                    "setting_snd_head_phone_mode_cmp_item": "",
                    "setting_snd_head_phone_mode_cmp_item_text": {Data: "Headphone Only"}
                }
            ]
        },
        "setting_snd_head_phone_volume": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0
            }
        },
        "setting_snd_lip_sync": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 10},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            }

        },
        "setting_snd_balance": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -50, max: 50},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            }
        },
        "setting_snd_digital_audio_out_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_digital_audio_out_cmp_item": "",
                    "setting_snd_digital_audio_out_cmp_item_text": {Data: "Off"}
                },
                {
                    "setting_snd_digital_audio_out_cmp_item": "",
                    "setting_snd_digital_audio_out_cmp_item_text": {Data: "PCM"}
                },
                {
                    "setting_snd_digital_audio_out_cmp_item": "",
                    "setting_snd_digital_audio_out_cmp_item_text": {Data: "RAW"}
                }
            ]
        },
        "setting_snd_digital_audio_delay": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 25},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            }
        },
        //"setting_snd_tv_speaker_and_arc_cmp": {
        //    DataSelectedIndex: 0,
        //    SelectedIndex: 0,
        //    Data: [
        //        {
        //            "setting_snd_tv_speaker_and_arc_cmp_item": "",
        //            "setting_snd_tv_speaker_and_arc_cmp_item_text": {Data: "Off"}
        //        },
        //        {
        //            "setting_snd_tv_speaker_and_arc_cmp_item": "",
        //            "setting_snd_tv_speaker_and_arc_cmp_item_text": {Data: "Speaker"}
        //        },
        //        {
        //            "setting_snd_tv_speaker_and_arc_cmp_item": "",
        //            "setting_snd_tv_speaker_and_arc_cmp_item_text": {Data: "ARC First"}
        //        }
        //    ],
        //    disableItem: []
        //},
        "setting_snd_audio_out_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_audio_out_cmp_item": "",
//                    "setting_snd_audio_out_cmp_item_text": {Data: "Headphone/Audio Out Variable"}
                    "setting_snd_audio_out_cmp_item_text": {Data: "Audio Out Variable"}
                },

                {
                    "setting_snd_audio_out_cmp_item": "",
                    "setting_snd_audio_out_cmp_item_text": {Data: "Audio Out Fixed"}
                }
//                {
//                    "setting_snd_audio_out_cmp_item": "",
//                    "setting_snd_audio_out_cmp_item_text": {Data: "Headphone with TV Speaker"}
//                }
            ]
        },
        "setting_snd_description_volume": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            }

        },
        "setting_snd_description_out_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_description_out_cmp_item": "",
                    "setting_snd_description_out_cmp_item_text": {Data: "All"}
                },

                {
                    "setting_snd_description_out_cmp_item": "",
                    "setting_snd_description_out_cmp_item_text": {Data: "Speaker"}
                },
                {
                    "setting_snd_description_out_cmp_item": "",
                    "setting_snd_description_out_cmp_item_text": {Data: "Headphone"}
                }
            ]
        },
        "setting_snd_audio_type_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_audio_type_cmp_item": "",
                    "setting_snd_audio_type_cmp_item_text": {Data: "Normal"}
                },
                {
                    "setting_snd_audio_type_cmp_item": "",
                    "setting_snd_audio_type_cmp_item_text": {Data: "Visually Impaired"}
                }
            ]
        },
        "setting_snd_tv_speaker_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "DigitalAudioOutModeEnum": ["Off", "PCM", "RAW"],
        "SpeakerAndArcEnum": ["Off", "Speaker", "ARC First"],
//        "AudioOutEnum": ["Headphone/Audio Out Variable", "Audio Out Fixed", "Headphone with TV Speaker"],
        "AudioOutEnum": ["Audio Out Variable", "Audio Out Fixed"],
        ScrollCfg: {


            "EM": {
                pageHeight: 520,
                scrollContentHeight: 700, //暂时默认，需要修改已确定上滑/下滑高度比
                scrollRailHeight: 400,
                scrollBarHeight: 100,
                "limTop": 60,   //不取60是因为边缘显示原因， 后期手动修改的
                "limBtm": 400   // 本身最高margin 60 多 670-60 -60；后期手动修改的
            },
            "EU": {
                pageHeight: 520,
                scrollContentHeight: 1000, //暂时默认，需要修改已确定上滑/下滑高度比
                scrollRailHeight: 400,
                scrollBarHeight: 100,
                "limTop": 60,   //不取60是因为边缘显示原因， 后期手动修改的
                "limBtm": 400   // 本身最高margin 60 多 670-60 -60；后期手动修改的
            }
        },
        "helpInfo": {

            //need add
            "setting_snd_head_phone_mode_cmp": {
                title: "Headphone Mode",
                content: "Change the way audio is sent through the type of device that's connected to your TV Audio Out port."
            },
            "setting_snd_head_phone_volume": {
                title: "Headphone Volume",
                content: "Independently adjust the volume of audio out devices."
            },
            "setting_snd_audio_out_cmp": {
                title: "Audio Out",
                content: "Change the way audio is sent through the type of device that's connected to your TV Audio Out port."
            },
            "setting_snd_digital_audio_out_cmp": {
                title: "Digital Audio Out",
                content: "Select the digital audio output format that best suits the audio device type."
            },
            "setting_snd_digital_audio_delay": {
                title: "Digital Audio Delay",
                content: "Adjust the digital audio output delay time to sync sound from an external speaker with the images on the TV."
            },
            "setting_snd_lip_sync": {
                title: "Lip Sync",
                content: "Synchronize the displayed image with the audio output."
            },
            "setting_snd_balance": {
                title: "Balance",
                content: "Adjust the left and right speaker strength to optimize audio for a specific location."
            },

            "setting_snd_equalizer_cmp": {title: "Equalizer", content: "Boost the volume at different frequencies."},
            "setting_snd_audio_type_cmp": {title: "Audio Type", content: "Select the audio type of programs."},
            "setting_snd_description_out_cmp": {title: "Voiceover Out", content: "Select the voiceover audio out."},
            "setting_snd_description_volume": {
                title: "Voiceover Volume",
                content: "Independently adjust the volume of voiceover."
            },
            "setting_snd_tv_speaker_flipSwitch": {
                title: "TV Speaker",
                content: "Disable TV speaker when you are using sound bar, ARC or any other external audio amplifier."
            }

            //"setting_snd_tv_speaker_and_arc_cmp": {title: "TV Speaker & ARC", content: "Select the TV speaker or an external speaker for sound output."},
        },
//        "AudioOutMarqueeLength": 15
        "AudioOutMarqueeLength": 18,
        SpeakerArcMarqueeLength: 12
    },
    rewrite: SettingSndAdvancedRewrite,
    "langData": {
//        "switchOn":["On"],
//        "switchOFF":["Off"],
        "Headphone with TV Speaker": ["Headphone with TV Speaker"],
        "Headphone Only": ["Headphone Only"],
        "Headphone Volume": ["Headphone Volume"],
        "Headphone Mode": ["Headphone Mode"],
        "Balance": ["Balance"],
        "Equalizer": ["Equalizer"],
        "Auto Volume": ["Auto Volume"],
        "On": ["On"],
        "Off": ["Off"],
        "Speaker & ARC": ["Speaker & ARC"],
        "Speaker": ["Speaker"],
        "ARC First": ["ARC First"],
        "SPDIF Output": ["SPDIF Output"],
        "RAW": ["RAW"],
        "PCM": ["PCM"],
        "SPDIF Delay": ["SPDIF Delay"],
        "Audio Type": ["Audio Type"],
        "Normal": ["Normal"],
        "Visually Impaired": ["Visually Impaired"],
        "Description Output": ["Description Output"],
        "Headphone": ["Headphone"],
        "All": ["All"],
        "Description Volume": ["Description Volume"],
        "Adjust": ["Adjust"],
        "Lip Sync": ["Lip Sync"],
        "Digital Audio Out": ["Digital Audio Out"],
        "Digital Audio Delay": ["Digital Audio Delay"],
        "TV Speaker & ARC": ["TV Speaker & ARC"],
        "Audio Out": [],
        "Audio Out Variable": [],
        "Audio Out Fixed": [],
        "Voiceover Out": [],
        "Voiceover Volume": [],
        "TV Speaker": []

    }
//        flipSwitchRewrite: "myFlipSwitchRewrite"


};

//zjm add
function HeadPhoneModeEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var HeadPhoneModeCmp = this;
            NaviBarEasyChange.call(this, HeadPhoneModeCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();

            DBG_INFO("model.sound.setHeadphoneInsertTvMute(" + this.SelectedIndex + ")");
            tv && model.sound.setHeadphoneInsertTvMute(this.SelectedIndex);

            if (0 == this.SelectedIndex) {
                // 0 Headphone With TV Speaker
                vol.headPhoneInsertState = false;
                typeof dialogHeadphoneInsert != UNDEFINED_DEFSTR && dialogHeadphoneInsert.setMuteTVState(false);
            } else {
                // 1 Headphone Only
                vol.headPhoneInsertState = true;
                typeof dialogHeadphoneInsert != UNDEFINED_DEFSTR && dialogHeadphoneInsert.setMuteTVState(true);
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndTvSpeakerSwitchEnterHandler() {
    try {
        var TvSpeakerState = tv ? model.sound.getTvSpeaker() : 0;
        DBG_INFO('model.sound.getTvSpeaker(): ' + TvSpeakerState);
        DBG_INFO(' model.sound.setTvSpeaker(' + Bool2Num(!TvSpeakerState) + ')');
        var TvSpeakerSwitch = this;
        FlipSwitchEasyChange.call(this, TvSpeakerSwitch, !TvSpeakerState);

        SetRecentUse("TV Speaker", 1, FirPageSndIdx.SndAdvanced);

        tv && model.sound.setTvSpeaker(Bool2Num(!TvSpeakerState));

    } catch (ex) {
        debugE(ex.message);
    }

}
function SettingSndAdvancedRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_snd_tv_speaker_flipSwitch').css('float', dir_1);
        $("#setting_snd_equalizer_cmp").css('float', dir_1);
        $("#setting_snd_lip_sync_slider_cmp").css('float', dir_1);
        $("#setting_snd_balance_slider_cmp").css('float', dir_1);
        $("#setting_snd_digital_audio_delay_slider_cmp").css('float', dir_1);
        $("#setting_snd_description_volume_slider_cmp").css('float', dir_1);
        //$("#setting_snd_head_phone_mode_cmp").css('float', dir_1);
        $("#setting_snd_head_phone_volume_slider_cmp").css('float', dir_1);
        $("#setting_snd_digital_audio_delay_text_0").css('float',dir_0);
        $("#setting_snd_lip_sync_text_0").css('float',dir_0);


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    try {
        DBG_INFO("SettingSndAdvancedRewrite()");
        //zjm add head phone mode cmp rewrite
        var TvSpeakerState = pageData.operateData.setting_snd_tv_speaker_flipSwitch.switchType;
//        pageData.setting_snd_mode_title_text_1.Data = pageData.operateData.modeEnum[sndModeEnum];
        FlipSwitchRewriteEasy(pageData, 'setting_snd_tv_speaker_flipSwitch', TvSpeakerState);

        var headphoneMode = pageData.operateData.setting_snd_head_phone_mode_cmp.DataSelectedIndex;
        NaviBarRewriteEasy.call(this, pageData, "setting_snd_head_phone_mode_cmp", headphoneMode);
        PageDataSettingSndAdvanced.setting_snd_head_phone_mode_cmp.disable = PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_mode_cmp.disable;


        //zjm add head phone mode cmp rewrite
        var headphoneVal = pageData.operateData.setting_snd_head_phone_volume.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_snd_head_phone_volume", headphoneVal);
        PageDataSettingSndAdvanced.setting_snd_head_phone_volume.disable = PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_volume.disable;

        if ('EU' == InitArea && 0 == pageData.operateData.headPhoneInsert) {
            PageDataSettingSndAdvanced.setting_snd_head_phone_mode_cmp.disable = true;
            PageDataSettingSndAdvanced.setting_snd_head_phone_volume.disable = true;
            DisableSndAdvHeadphoneCss();
        } else {
            EnableSndAdvHeadphoneCss();
        }

        PageDataSettingSndAdvanced.setting_snd_audio_out_cmp.disable = PageDataSettingSndAdvanced.operateData.setting_snd_audio_out_cmp.disable;


        var lipSyncVal = pageData.operateData.setting_snd_lip_sync.Data.setDefalutValue;
        DBG_INFO("lipSyncVal: " + lipSyncVal);
        SliderRewriteEasy.call(this, pageData, "setting_snd_lip_sync", lipSyncVal);

        var balVal = pageData.operateData.setting_snd_balance.Data.setDefalutValue;
        DBG_INFO("balVal " + balVal);
        SliderRewriteEasy.call(this, pageData, "setting_snd_balance", balVal);

        var diAudOutMode = pageData.operateData.setting_snd_digital_audio_out_cmp.DataSelectedIndex;
        pageData.setting_snd_digital_audio_out_text_1.Data = "";//pageData.operateData.DigitalAudioOutModeEnum[diAudOutMode];
        DBG_INFO("diAudOutMode: " + diAudOutMode);
        NaviBarRewriteEasy.call(this, pageData, "setting_snd_digital_audio_out_cmp", diAudOutMode);

        if (0 == diAudOutMode) {
            DisableSPDIFDelay.call(this, pageData);
        } else {
            EnableSPDIFDelay.call(this, pageData);
        }

        var diAudDelay = pageData.operateData.setting_snd_digital_audio_delay.Data.setDefalutValue;
        DBG_INFO("diAudDelay: " + diAudDelay);
        SliderRewriteEasy.call(this, pageData, "setting_snd_digital_audio_delay", diAudDelay);


        //var spAndArcMode = pageData.operateData.setting_snd_tv_speaker_and_arc_cmp.DataSelectedIndex;
        //pageData.setting_snd_tv_speaker_and_arc_text_1.Data = "";//pageData.operateData.SpeakerAndArcEnum[spAndArcMode];
        //DBG_INFO("spAndArcMode: " + spAndArcMode);
        //NaviBarRewriteEasy.call(this, pageData, "setting_snd_tv_speaker_and_arc_cmp", spAndArcMode);

        var audOutMode = pageData.operateData.setting_snd_audio_out_cmp.DataSelectedIndex;
        pageData.setting_snd_audio_out_text_1.Data = "";//pageData.operateData.AudioOutEnum[audOutMode];
        DBG_INFO("audOutMode: " + audOutMode);
        NaviBarRewriteEasy.call(this, pageData, "setting_snd_audio_out_cmp", audOutMode);


        PageDataSettingSndAdvanced.setting_snd_description_out_cmp.disable = PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable;
        PageDataSettingSndAdvanced.setting_snd_description_volume.disable = PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable;
        PageDataSettingSndAdvanced.setting_snd_audio_type_cmp.disable = PageDataSettingSndAdvanced.operateData.setting_snd_audio_type_cmp.disable;


        if ("EU" == InitArea) {
            if (isCurrentCoutryWSG()) {
                DBG_INFO('true == isCurrentCoutryWSG(), do not rewrite audioType description_output and description_volume');
            } else {
                DBG_INFO('"EU" == InitArea, rewrite audioType description_output and description_volume');
                var audioType = pageData.operateData.setting_snd_audio_type_cmp.DataSelectedIndex;
                pageData.setting_snd_audio_type_text_1 = "";
                DBG_INFO("audioType: " + audioType);
                NaviBarRewriteEasy.call(this, pageData, "setting_snd_audio_type_cmp", audioType);

                var descriptionOut = pageData.operateData.setting_snd_description_out_cmp.DataSelectedIndex;
                pageData.setting_snd_description_out_text_1 = "";
                DBG_INFO("descriptionOut: " + descriptionOut);
                NaviBarRewriteEasy.call(this, pageData, "setting_snd_description_out_cmp", descriptionOut);

                var descriptionOutVol = pageData.operateData.setting_snd_description_volume.Data.setDefalutValue;
                DBG_INFO("descriptionOutVol: " + descriptionOutVol);
                SliderRewriteEasy.call(this, pageData, "setting_snd_description_volume", descriptionOutVol);

                if (1 == audioType) { //Enable desc about
                    DBG_INFO('1 == audioType, enable desc about');
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable = false;
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable = false;
                    EnableDescriptionFeather();
                } else {    //disable desc about
                    DBG_INFO('1 != audioType, disable desc about');
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable = true;
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable = true;
                    DisableDescriptionFeather();
                }
            }
        } else if('EM' == InitArea){
            DBG_INFO('"EU" == InitArea, rewrite audioType description_output and description_volume');
            var audioType = pageData.operateData.setting_snd_audio_type_cmp.DataSelectedIndex;
            pageData.setting_snd_audio_type_text_1 = "";
            DBG_INFO("audioType: " + audioType);
            NaviBarRewriteEasy.call(this, pageData, "setting_snd_audio_type_cmp", audioType);
        } else {
            DBG_INFO('"EU" != InitArea, Not rewrite audioType description_output and description_volume');
        }
        //
        if (1 == getARCDeviceWorkingState()) {
            DisableSndAdvARCAbout(pageData);
        } else {
            EnableSndAdvARCAbout(pageData);
        }
        //
        //if (1 == getHeadphoneInsertTvMuteState()) {
        //    DisableSpeakerAndArcCmp(pageData);
        //} else {
        //    EnableSpeakerAndArcCmp(pageData);
        //}


    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function Factory1969VectorAdd1() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "1", time: new Date().getTime()});

    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));
}

function Factory1969VectorAdd0() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "0", time: new Date().getTime()});

    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));
}

function Factory1969VectorAdd2() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "2", time: new Date().getTime()});

    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));
}
function Factory1969VectorAdd4() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "4", time: new Date().getTime()});

    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));
    if (Factory1969Vector.length >= 4) {
        if (Factory1969Vector[0].key == 1 && Factory1969Vector[1].key == 0 && Factory1969Vector[2].key == 2 && Factory1969Vector[3].key == 4) {
            if (Factory1969Vector[3].time - Factory1969Vector[0].time <= 5000) {
                DBG_INFO("Hotel Menu Mode is OK");
                try {
                    var launcherExist = canProcessVolume();
                    var HimediaExist = isCurrentAppHimedia();
                    if (!launcherExist || HimediaExist) {
                        DBG_INFO("------>launcherExist and hotel mode meun is limited:" + launcherExist);
                        return;
                    }
                }
                catch (ex) {
                    DBG_ERROR(ex);
                }
                try {
                    hiWebOsFrame.createPage('setting_log_out_page', null, hiWebOsFrame.SettingSndAdvancedPage, null, function (LogOutPage) {
                        DBG_INFO("setting_log_out_page page create");
                        hiWebOsFrame.LogOutPage = LogOutPage;
                        LogOutPage.open();
                        LogOutPage.hiFocus();
                        hiWebOsFrame.SettingSndAdvancedPage.close();
                    });
                    //hiWebOsFrame.SettingSndAdvancedPage.close();
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }
            } else {
                DBG_INFO("Hotel Menu Mode is OK, but TimeOut");
            }
//            Factory1969Vector = [];
        }
    }

}
function Factory1969VectorAdd5() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "5", time: new Date().getTime()});

    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));
}
function Factory1969VectorAdd6() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "6", time: new Date().getTime()});

    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));
}
function Factory1969VectorAdd8() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "8", time: new Date().getTime()});

    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));

    if (Factory1969Vector.length >= 4) {
        if (Factory1969Vector[0].key == 0 && Factory1969Vector[1].key == 5 && Factory1969Vector[2].key == 4 && Factory1969Vector[3].key == 8) {
            if (Factory1969Vector[3].time - Factory1969Vector[0].time <= 5000) {
                DBG_INFO("Hotel Menu Mode is OK");
                try {
                    var showHotelMenu = canShowHotelMenu();
                    var HimediaExist = isCurrentAppHimedia();
                    if (!showHotelMenu || HimediaExist || checkIsAppOn()) {
                        DBG_INFO("------>launcherExist and hotel mode meun is limited:" + showHotelMenu);
                        return;
                    }
                }
                catch (ex) {
                    DBG_ERROR(ex);
                }
                try {
                    hiWebOsFrame.createPage('setting_HotelMenu_page', null, hiWebOsFrame.SettingSndAdvancedPage, null, function (setting_HotelMenu_page) {
                        setting_HotelMenu_page.open();
                        setting_HotelMenu_page.hiFocus();
                        hiWebOsFrame.setting_HotelMenu_page = setting_HotelMenu_page;

                    });

                    CloseSndHelpInfoPage();
                    hiWebOsFrame.SettingSndAdvancedPage.close();

                    //model.hisfactory.setStateOpen(1); //0 off 1 on  //ok
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }
            } else {
                DBG_INFO("Hotel Menu Mode is OK, but TimeOut");
            }
//            Factory1969Vector = [];
        }
    }
}
function Factory1969VectorAdd9() {
    if (Factory1969Vector.length >= 4) {
        Factory1969Vector.shift();
    }

    Factory1969Vector.push({key: "9", time: new Date().getTime()});
    DBG_INFO("Factory1969Vector " + JSON.stringify(Factory1969Vector));

    if (Factory1969Vector.length >= 4) {
        if (Factory1969Vector[0].key == 1 && Factory1969Vector[1].key == 9 && Factory1969Vector[2].key == 6 && Factory1969Vector[3].key == 9) {
            if (Factory1969Vector[3].time - Factory1969Vector[0].time <= 5000) {
                DBG_INFO("Factory1969Vector is OK");
                try {
                    CloseSndHelpInfoPage();
                    //model.hisfactory.setStateOpen(1); //0 off 1 on  //ok
                    startFactory();
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }
            } else {
                DBG_INFO("Factory1969Vector is OK, but TimeOut");
            }
//            Factory1969Vector = [];
        }
    }
}
function ClearFactory1969Vector() {
    try {
        DBG_INFO("beforeClear " + JSON.stringify(Factory1969Vector));
        Factory1969Vector = [];
        DBG_INFO("AfterClear " + JSON.stringify(Factory1969Vector));
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function SettingSndBalAftUpHandler() {
    try {
        RefreshScrollAndPageInfo();
        ClearFactory1969Vector();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndBalAftDownHandler() {
    try {
        RefreshScrollAndPageInfo();
        ClearFactory1969Vector();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function openEqualizerSettingPage() {
    try {
        CloseSndHelpInfoPage();

        hiWebOsFrame.createPage('setting_snd_equalizer_dialog', null, hiWebOsFrame.SettingChnlAdvancedPage, null, function (SettingSndEqualizer) {
            DBG_INFO("Equalizer------------");
            hiWebOsFrame.SettingSndEqualizer = SettingSndEqualizer;
            SettingSndEqualizer.open();
            SettingSndEqualizer.hiFocus();
        });

        hiWebOsFrame.SettingSndAdvancedPage.close();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

//function SpeakerAndArcEnterHandler() {
//    try {
//        DBG_INFO("SpeakerAndarcEnterHandler");
//        if (this.DataSelectedIndex != this.SelectedIndex) {
//            var SpeakerAndARCCmp = this;
//            model.sound.setSpeakerArc(this.SelectedIndex);
//            NaviBarEasyChange.call(this, SpeakerAndARCCmp, this.SelectedIndex);
//            this.page.rewriteDataOnly();
//            SetRecentUse("TV Speaker & ARC", 1, FirPageSndIdx.SndAdvanced);
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//
//}
//function SpeakerAndArcAftUpHandler() {
//    try {
//        RefreshScrollAndPageInfo();
//        if (this.SelectedIndex != this.DataSelectedIndex) {
//            this.SelectedIndex = this.DataSelectedIndex;
//        }
//        SndSpearkerARCAddMarquee(this.SelectedIndex);
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//function SpeakerAndArcAftDownHandler() {
//    try {
//        RefreshScrollAndPageInfo();
//        if (this.SelectedIndex != this.DataSelectedIndex) {
//            this.SelectedIndex = this.DataSelectedIndex;
//        }
//        SndSpearkerARCAddMarquee(this.SelectedIndex);
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//function SpeakerAndArcBefUpHandler() {
//    try {
//        SndSpearkerARCDelMarquee(this.SelectedIndex);
//        if (this.SelectedIndex != this.DataSelectedIndex) {
//            this.SelectedIndex = this.DataSelectedIndex;
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//function SpeakerAndArcBefDownHandler() {
//    try {
//        SndSpearkerARCDelMarquee(this.SelectedIndex);
//        if (this.SelectedIndex != this.DataSelectedIndex) {
//            this.SelectedIndex = this.DataSelectedIndex;
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//function SpeakerAndArcLeftHandler() {
//    try {
//        for (var i = 0; i < 3; i++) {
//            SndSpearkerARCDelMarquee(i);
//        }
//        SndSpearkerARCAddMarquee(this.SelectedIndex);
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//function SpeakerAndArcRightHandler() {
//    try {
//        for (var i = 0; i < 3; i++) {
//            SndSpearkerARCDelMarquee(i);
//        }
//        SndSpearkerARCAddMarquee(this.SelectedIndex);
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}


function DigitalAudioOutEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {


            var DiAudOutCmp = this;
            var digitalAudioOutTmp = DiAudOutUI2Mid(this.SelectedIndex);
            DBG_INFO("model.sound.setDigitalAudioOut(" + digitalAudioOutTmp + ")");

            tv && model.sound.setDigitalAudioOut(digitalAudioOutTmp);

            NaviBarEasyChange.call(this, DiAudOutCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();

            SetRecentUse("Digital Audio Out", 1, FirPageSndIdx.SndAdvanced);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function SettingSndDigitalAudioDelayRightHandel() {
    try {
        var diAudDelayCmp = this;
        var delayVal = diAudDelayCmp.page.operateData[diAudDelayCmp.id].Data.setDefalutValue;
        delayVal += 1;
        if (delayVal < 0) {
            delayVal = 0;
        }
        if (delayVal > 25) {
            delayVal = 25;
        }

        SliderEasyChange.call(this, diAudDelayCmp, delayVal);
//        setValTest(delayVal);
        tv && model.sound.setDigitalAudioDelay(delayVal);
        SetRecentUse("Digital Audio Delay", 1, FirPageSndIdx.SndAdvanced);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndDigitalAudioDelayLeftHandel() {
    try {
        var diAudDelayCmp = this;
        var delayVal = diAudDelayCmp.page.operateData[diAudDelayCmp.id].Data.setDefalutValue;
        delayVal -= 1;
        if (delayVal < 0) {
            delayVal = 0;
        }
        if (delayVal > 25) {
            delayVal = 25;
        }

        SliderEasyChange.call(this, diAudDelayCmp, delayVal);
        tv && model.sound.setDigitalAudioDelay(delayVal);
        SetRecentUse("Digital Audio Delay", 1, FirPageSndIdx.SndAdvanced);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function AudioOutEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {

            var AudioOutCmp = this;
            DBG_INFO(" model.sound.setAudioOut(" + AudioOutUI2Mid(this.SelectedIndex) + ")");
            tv && model.sound.setAudioOut(AudioOutUI2Mid(this.SelectedIndex));
            NaviBarEasyChange.call(this, AudioOutCmp, this.SelectedIndex);

            this.page.rewriteDataOnly();
            SetRecentUse("Audio Out", 1, FirPageSndIdx.SndAdvanced);

        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


}
function AudioOutAftUpHandler() {
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }

        AudioOutIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioOutAftDownHandler() {
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }

        AudioOutIndexAddMarquee(this.SelectedIndex);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioOutBefUpHandler() {
    try {
        RefreshScrollAndPageInfo();
        AudioOutIndexDelMarquee(this.SelectedIndex);
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioOutBefDownHandler() {
    try {
        RefreshScrollAndPageInfo();
        AudioOutIndexDelMarquee(this.SelectedIndex);
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioOutIndexAddMarquee(idx) {
    try {
        for (var i = 0; i < 3; i++) {
            $("#setting_snd_audio_out_cmp_setting_snd_audio_out_cmp_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_snd_audio_out_cmp_setting_snd_audio_out_cmp_item_text_sys" + i).html();
                if (htmlText.length > PageDataSettingSndAdvanced.operateData.AudioOutMarqueeLength) {
                    $("#setting_snd_audio_out_cmp_setting_snd_audio_out_cmp_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioOutIndexDelMarquee(idx) {
    try {
        var marquee = $("#setting_snd_audio_out_cmp_setting_snd_audio_out_cmp_item_text_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_snd_audio_out_cmp_setting_snd_audio_out_cmp_item_text_sys" + idx + " marquee").html();
            var marquee = $("#setting_snd_audio_out_cmp_setting_snd_audio_out_cmp_item_text_sys" + idx).html(htmlText);
        }
        $("#setting_snd_audio_out_cmp_setting_snd_audio_out_cmp_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioOutAftLeftHandler() {
    try {
        for (var i = 0; i < 3; i++) {
            AudioOutIndexDelMarquee(i);
        }
        AudioOutIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioOutAftRightHandler() {
    try {
        for (var i = 0; i < 3; i++) {
            AudioOutIndexDelMarquee(i);
        }
        AudioOutIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DisableSPDIFDelay(pageData) {
    try {
        pageData.setting_snd_digital_audio_delay.disable = true;
        pageData.operateData.setting_snd_digital_audio_delay.disable = true;

        $("#setting_snd_digital_audio_delay_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
        $("#setting_snd_digital_audio_delay_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function EnableSPDIFDelay(pageData) {
    try {
        pageData.setting_snd_digital_audio_delay.disable = false;
        pageData.operateData.setting_snd_digital_audio_delay.disable = false;

        $("#setting_snd_digital_audio_delay_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0")
        $("#setting_snd_digital_audio_delay_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndBalRightHandler() {
    try {
        var Cmp = this;
        var balVal = Cmp.page.operateData[Cmp.id].Data.setDefalutValue;
        balVal += 1;
        if (balVal < -50) {
            balVal = -50;
        }
        if (balVal > 50) {
            balVal = 50;
        }

        SliderEasyChange.call(this, Cmp, balVal);
        ClearFactory1969Vector();
        SetRecentUse("Balance", 1, FirPageSndIdx.SndAdvanced);
        tv && model.sound.setBalance(balVal);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndBalLeftHandler() {
    try {
        var Cmp = this;
        var balVal = Cmp.page.operateData[Cmp.id].Data.setDefalutValue;
        balVal -= 1;
        if (balVal < -50) {
            balVal = -50;
        }
        if (balVal > 50) {
            balVal = 50;
        }

        SliderEasyChange.call(this, Cmp, balVal);
        ClearFactory1969Vector();

        SetRecentUse("Balance", 1, FirPageSndIdx.SndAdvanced);

        tv && model.sound.setBalance(balVal);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function SettingSndLipSyncLeftHandel() {
    try {
        var lipSyncCmp = this;
        var lipSyncVal = lipSyncCmp.page.operateData[lipSyncCmp.id].Data.setDefalutValue;

        DBG_INFO("lipSyncVal " + lipSyncVal);
        lipSyncVal -= 1;
        if (lipSyncVal < 0) {
            lipSyncVal = 0;
        }
        if (lipSyncVal > 10) {
            lipSyncVal = 10;
        }

//        setValTest(lipSyncVal);
        tv && model.sound.setLipsync(lipSyncVal);
        SliderEasyChange.call(this, lipSyncCmp, lipSyncVal);

        SetRecentUse("Lip Sync", 1, FirPageSndIdx.SndAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndLipSyncRightHandel() {

    try {
        var lipSyncCmp = this;

        var lipSyncVal = lipSyncCmp.page.operateData[lipSyncCmp.id].Data.setDefalutValue;
        DBG_INFO("lipSyncVal " + lipSyncVal);

        lipSyncVal += 1;
        if (lipSyncVal < 0) {
            lipSyncVal = 0;
        }
        if (lipSyncVal > 10) {
            lipSyncVal = 10;
        }

//        setValTest(lipSyncVal);
        tv && model.sound.setLipsync(lipSyncVal);
        SliderEasyChange.call(this, lipSyncCmp, lipSyncVal);

        SetRecentUse("Lip Sync", 1, FirPageSndIdx.SndAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


// zjm add
function SettingSndHPVolumeLeftHandel() {
    try {
        var HPVolumeCmp = this;
        var HPVolumeVal = HPVolumeCmp.page.operateData[HPVolumeCmp.id].Data.setDefalutValue;

        DBG_INFO("HPVolumeVal " + HPVolumeVal);
        HPVolumeVal -= 1;
        if (HPVolumeVal < 0) {
            HPVolumeVal = 0;
        }
        if (HPVolumeVal > 100) {
            HPVolumeVal = 100;
        }
        tv && model.sound.setHeadphoneVolume(HPVolumeVal);
        SliderEasyChange.call(this, HPVolumeCmp, HPVolumeVal);

        //SetRecentUse("Lip Sync", 1, FirPageSndIdx.SndAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndHPVolumeRightHandel() {

    try {
        var HPVolumeCmp = this;

        var HPVolumeVal = HPVolumeCmp.page.operateData[HPVolumeCmp.id].Data.setDefalutValue;
        DBG_INFO("HPVolumeVal " + HPVolumeVal);

        HPVolumeVal += 1;
        if (HPVolumeVal < 0) {
            HPVolumeVal = 0;
        }
        if (HPVolumeVal > 100) {
            HPVolumeVal = 100;
        }


        tv && model.sound.setHeadphoneVolume(HPVolumeVal);
        SliderEasyChange.call(this, HPVolumeCmp, HPVolumeVal);
        //SetRecentUse("Lip Sync", 1, FirPageSndIdx.SndAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function DigitalAudioOutDownHandler() {
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        SettingSndAdvancedRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function DigitalAudioOutUpHandler() {
    try {
        if ("EU" == InitArea) {
            curArea = "EU";
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        SettingSndAdvancedRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DescriptionOutDownHandler() {
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function DescriptionOutUpHandler() {
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function AudioTypeDownHandler() {
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function AudioTypeDownHandler_BEF() {
    try {

        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function AudioTypeUpHandler() {
    try {
        RefreshScrollAndPageInfo();
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function AudioTypeEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {

            var AudioTypeCmp = this;
            DBG_INFO(" model.sound.setAudioType(" + this.SelectedIndex + ")");

            tv && model.sound.setAudioType(this.SelectedIndex);
            NaviBarEasyChange.call(this, AudioTypeCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            SetRecentUse("Audio Type", 1, FirPageSndIdx.SndAdvanced);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DescriptionOutEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {

            var descOutCmp = this;
            DBG_INFO(" model.sound.getDescriptionOutput(" + this.SelectedIndex + ")");

            tv && model.sound.setDescriptionOutput(this.SelectedIndex);
            NaviBarEasyChange.call(this, descOutCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            SetRecentUse("Voiceover Out", 1, FirPageSndIdx.SndAdvanced);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndDescriptionVolumeRightHandel() {
    try {
        var descOutVolCmp = this;

        var descOutVolVal = descOutVolCmp.page.operateData[descOutVolCmp.id].Data.setDefalutValue;
        DBG_INFO("descOutVolVal " + descOutVolVal);

        descOutVolVal += 1;
        if (descOutVolVal < 0) {
            descOutVolVal = 0;
        }
        if (descOutVolVal > 100) {
            descOutVolVal = 100;
        }

        tv && model.sound.setDescriptionVolume(descOutVolVal);
        SliderEasyChange.call(this, descOutVolCmp, descOutVolVal);

        SetRecentUse("Voiceover Volume", 1, FirPageSndIdx.SndAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndDescriptionVolumeLeftHandel() {
    try {
        var descOutVolCmp = this;

        var descOutVolVal = descOutVolCmp.page.operateData[descOutVolCmp.id].Data.setDefalutValue;
        DBG_INFO("descOutVolVal " + descOutVolVal);

        descOutVolVal -= 1;
        if (descOutVolVal < 0) {
            descOutVolVal = 0;
        }
        if (descOutVolVal > 100) {
            descOutVolVal = 100;
        }

        tv && model.sound.setDescriptionVolume(descOutVolVal);
        SliderEasyChange.call(this, descOutVolCmp, descOutVolVal);

        SetRecentUse("Voiceover Volume", 1, FirPageSndIdx.SndAdvanced);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SetContentMarginTop(magTop) {
    try {
        //if ("EM" == InitArea) {
        //    return;
        //}
        if (magTop > 0) {
            magTop = 0;
        }
        //var defTop = -167;  //计算出来的
        //if ("EU" == InitArea)
        //{
        //    defTop = -490;  //看着估计的
        //    defTop = -650;  //看着估计的
        //}
        //if (magTop < defTop) {
        //    magTop = defTop;
        //}
        if ($("#setting_snd_scroll_content") != null) {
            $("#setting_snd_scroll_content").css("margin-top", magTop + "px");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SetSBarMarginTop(magTop) {
    try {

        if (magTop < 0) {
            magTop = 0;
        }
        //var defTop = 115; //551-436;
        ////if ("EU" == InitArea)
        //{
        //    defTop = 231;//估算
        //}
        //if (magTop > defTop) {
        //    magTop = defTop;
        //}
        if ($("#setting_snd_scroll_bar") != null) {
            $("#setting_snd_scroll_bar").css("margin-top", magTop + "px")
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function RefreshScrollAndPageInfo() {
    SettingSndAdvancedRefreshHelpInfo();
    try {
        var curArea = "EM";
        if ("EU" == InitArea) {
            curArea = "EU";
        }
        DBG_INFO("-------------------RefreshScrollAndPageInfo--curArea:" + curArea + "------------------------");
        var curId = hiWebOsFrame.SettingSndAdvancedPage.currentSelectedTree[0].id;
        var scrollCfg = PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea];

        if ("EU" == InitArea) {
            if ("setting_snd_head_phone_mode_cmp" == curId) { //setting_snd_equalizer_cmp
                SetContentMarginTop(0);
                SetSBarMarginTop(0);
                return;
            }
            //else if ("setting_snd_audio_type_cmp" == curId && PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable == true) {
            //    SetContentMarginTop(-(scrollCfg.scrollContentHeight - scrollCfg.pageHeight + 60));
            //    SetSBarMarginTop(scrollCfg.scrollRailHeight - scrollCfg.scrollBarHeight);
            //    return;
            //}
            else if ("setting_snd_tv_speaker_flipSwitch" == curId) {
//            SetContentMarginTop(-490);
                SetContentMarginTop(-(scrollCfg.scrollContentHeight - scrollCfg.pageHeight + 60));
                SetSBarMarginTop(scrollCfg.scrollRailHeight - scrollCfg.scrollBarHeight);
                return;
            }
        }
        else {
            if ("setting_snd_audio_out_cmp" == curId) { //setting_snd_equalizer_cmp
                SetContentMarginTop(0);
                SetSBarMarginTop(0);
                return;
            }
            if ("setting_snd_tv_speaker_flipSwitch" == curId) {
//            SetContentMarginTop(-490);
                SetContentMarginTop(-(scrollCfg.scrollContentHeight - scrollCfg.pageHeight + 60));
                SetSBarMarginTop(scrollCfg.scrollRailHeight - scrollCfg.scrollBarHeight);
                return;
            }
        }

        DBG_INFO("curMainId: " + curId);

        var scale = sndadvancedfunc.getPageScale();

        DBG_INFO("curMainId: " + curId + ', sndadvancedfunc.getPageScale(): ' + scale);

        var bkgTop = $("#setting_snd_advanced_settings").offset().top;
        var curRelativeTop = $("#" + curId).offset().top - bkgTop;
        //curRelativeTop是相对高度，已经缩放了
        if (curRelativeTop < PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].limTop * scale) {
            DBG_INFO("too High");
            var tmpH = parseInt((PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].limTop * scale - curRelativeTop) / scale);
            var curContentMarginTop = parseInt(($("#setting_snd_scroll_content").offset().top - $("#setting_snd_advanced_settings").offset().top) / scale);
            SetContentMarginTop(curContentMarginTop + tmpH);


            //以下计算sBar
            var tmpMarginTop = Math.abs(parseInt($("#setting_snd_scroll_content").css("margin-top")));
            SetSBarMarginTop(Math.round(tmpMarginTop / scrollCfg.scrollContentHeight * scrollCfg.scrollRailHeight)); // 暂不修改
        } else if (curRelativeTop > PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].limBtm * scale) {
            DBG_INFO("too low$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
            var tmpH = parseInt(curRelativeTop / scale - PageDataSettingSndAdvanced.operateData.ScrollCfg[curArea].limBtm);
            var curContentMarginTop = parseInt(($("#setting_snd_scroll_content").offset().top - $("#setting_snd_advanced_settings").offset().top) / scale);
            SetContentMarginTop(curContentMarginTop - tmpH);

            //以下计算sBar
            var tmpMarginTop = Math.abs(parseInt($("#setting_snd_scroll_content").css("margin-top")));
            SetSBarMarginTop(Math.round(tmpMarginTop / scrollCfg.scrollContentHeight * scrollCfg.scrollRailHeight)); //暂不修改
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

//
//
//function debugHeight() {
//    var curId = hiWebOsFrame.SettingSndAdvancedPage.currentSelectedTree[0].id;
//    var bkgTop = $("#setting_snd_advanced_settings").offset().top;
//    DBG_INFO("curId: " + curId + ": " + ($("#" + curId).offset().top - bkgTop));
//}


function DisableSndAdvARCAbout(pageData) {
    try {
        DBG_INFO('DisableSndAdvARCAbout(pageData)');
//        PageDataSettingSndAdvanced.operateData.setting_snd_SAS_balance.disable = true;
//        PageDataSettingSndAdvanced.operateData.setting_snd_SAS_equalizer_cmp.disable = true;
//        PageDataSettingSndAdvanced.operateData.setting_snd_SAS_auto_volume_cmp.disable = true;
//        PageDataSettingSndAdvanced.operateData.setting_snd_SAS_audio_type_cmp.disable = true;
//        PageDataSettingSndAdvanced.operateData.setting_snd_SAS_description_output_cmp.disable = true;
//        PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable = true;
        //zjm add
        pageData.setting_snd_head_phone_mode_cmp.disable = true;
        pageData.setting_snd_head_phone_volume.disable = true;
        pageData.setting_snd_equalizer_cmp.disable = true;
        pageData.setting_snd_lip_sync.disable = true;
        pageData.setting_snd_balance.disable = true;
//        pageData.setting_snd_digital_audio_out_cmp.disable = true;
//        pageData.setting_snd_digital_audio_delay.disable = true;
        pageData.setting_snd_audio_out_cmp.disable = true;


        //ARC时不用禁止AudioType相关
        //if ("EU" == InitArea) {
        //    if (isCurrentCoutryWSG()) {
        //
        //    } else {
        //        pageData.setting_snd_audio_type_cmp.disable = true;
        //        $("#setting_snd_audio_type_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
        //        DisableDescriptionFeather();
        //    }
        //}

        $("#setting_snd_equalizer_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
        $("#setting_snd_lip_sync_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
        $("#setting_snd_lip_sync_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
        $("#setting_snd_balance_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
        $("#setting_snd_balance_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
        DisableSndAdvHeadphoneCss();

//        $("#setting_snd_digital_audio_out_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");

//        $("#setting_snd_digital_audio_delay_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
//        $("#setting_snd_digital_audio_delay_text_separate").attr("class", "setting_snd_auto_volume_text_0_disable");

        $("#setting_snd_audio_out_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");

//
////        $("#setting_snd_SAS_description_output_cmp").css("background-color", "rgba(68,81,98,0.9)");
////        $("#setting_snd_SAS_description_output_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
////        $("#setting_snd_SAS_description_output_text_1").attr("class", "setting_snd_auto_volume_text_1_disable");
//        $("#setting_snd_description_volume_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
////        $("#setting_snd_SAS_desc_output_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
//        $("#setting_snd_desc_volume_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable")
//

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function EnableSndAdvARCAbout(pageData) {
    try {
        DBG_INFO('EnableSndAdvARCAbout(pageData)');

        pageData.setting_snd_equalizer_cmp.disable = false;
        pageData.setting_snd_lip_sync.disable = false;
        pageData.setting_snd_balance.disable = false;
//        pageData.setting_snd_digital_audio_out_cmp.disable = false;
//        pageData.setting_snd_digital_audio_delay.disable = pageData.operateData.setting_snd_digital_audio_delay.disable;
        if ("EU" == InitArea) {
            pageData.setting_snd_audio_out_cmp.disable = true;  //欧洲一直disable

            if (1 == pageData.operateData.headPhoneInsert) {
                pageData.setting_snd_head_phone_mode_cmp.disable = false;
                pageData.setting_snd_head_phone_volume.disable = false;
            }
        } else {
            pageData.setting_snd_audio_out_cmp.disable = false;
        }

        //ARC时不用禁止AudioType相关
        //if ("EU" == InitArea) {
        //    if (isCurrentCoutryWSG()) {
        //
        //    } else {
        //        pageData.setting_snd_audio_type_cmp.disable = false;
        //        $("#setting_snd_audio_type_text_0").attr("class", "setting_snd_auto_volume_text_0");
        //        if (true == pageData.operateData.setting_snd_description_out_cmp.disable) {
        //            DisableDescriptionFeather();
        //        } else {
        //            EnableDescriptionFeather();
        //        }
        //    }
        //}


        if (1 == pageData.operateData.headPhoneInsert) {
            EnableSndAdvHeadphoneCss();
        }

        $("#setting_snd_equalizer_text_0").attr("class", "setting_snd_auto_volume_text_0");
        $("#setting_snd_lip_sync_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
        $("#setting_snd_lip_sync_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
        $("#setting_snd_balance_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
        $("#setting_snd_balance_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");

//        $("#setting_snd_digital_audio_out_text_0").attr("class", "setting_snd_auto_volume_text_0");

//        $("#setting_snd_digital_audio_delay_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");

        $("#setting_snd_audio_out_text_0").attr("class", "setting_snd_auto_volume_text_0");


//        if (true == pageData.setting_snd_digital_audio_delay.disable) {
//            DisableSPDIFDelay.call(this, pageData);
//        } else {
//            EnableSPDIFDelay.call(this, pageData);
//        }


//        pageData.setting_snd_SAS_description_output_cmp.disable = pageData.operateData.setting_snd_SAS_description_output_cmp.disable;
//        pageData.setting_snd_description_volume.disable = pageData.operateData.setting_snd_description_volume.disable;


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DisableSndAdvHeadphoneCss() {
    try {
        $("#setting_snd_head_phone_mode_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
        $("#setting_snd_head_phone_volume_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
        $("#setting_snd_head_phone_volume_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function EnableSndAdvHeadphoneCss() {
    try {
        $("#setting_snd_head_phone_mode_text_0").attr("class", "setting_snd_auto_volume_text_0");
        $("#setting_snd_head_phone_volume_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
        $("#setting_snd_head_phone_volume_text_0").attr("class", "setting_snd_auto_volume_text_0");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


//function DisableSpeakerAndArcCmp(pageData) {
//    try {
//        DBG_INFO('DisableSpeakerAndArcCmp');
//        pageData.setting_snd_tv_speaker_and_arc_cmp.disable = true;
//        $('#setting_snd_tv_speaker_and_arc_text_0').attr('class', 'setting_snd_auto_volume_text_0_disable');
//        $('#setting_snd_tv_speaker_and_arc_text_separate').attr('class', 'setting_snd_equalizer_hz_0_text_separate_disable');
//
//
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//
//function EnableSpeakerAndArcCmp(pageData) {
//    try {
//        DBG_INFO('EnableSpeakerAndArcCmp');
//        pageData.setting_snd_tv_speaker_and_arc_cmp.disable = false;
//        $('#setting_snd_tv_speaker_and_arc_text_0').attr('class', 'setting_snd_auto_volume_text_0');
//        $('#setting_snd_tv_speaker_and_arc_text_separate').attr('class', 'setting_snd_equalizer_hz_0_text_separate');
//
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}

function EnableDescriptionFeather() {
    try {
        PageDataSettingSndAdvanced.setting_snd_description_out_cmp.disable = false;//PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable;
        PageDataSettingSndAdvanced.setting_snd_description_volume.disable = false;//PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable;

        $("#setting_snd_description_out_text_0").attr("class", "setting_snd_auto_volume_text_0");
        $("#setting_snd_description_volume_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
        $("#setting_snd_description_volume_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DisableDescriptionFeather() {
    try {
        PageDataSettingSndAdvanced.setting_snd_description_out_cmp.disable = true;//PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable;
        PageDataSettingSndAdvanced.setting_snd_description_volume.disable = true;//PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable;
        $("#setting_snd_description_out_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
        $("#setting_snd_description_volume_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
        $("#setting_snd_description_volume_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

//function SndSpearkerARCAddMarquee(idx) {
//    try {
//        for (var i = 0; i < 3; i++) {
//            $("#setting_snd_tv_speaker_and_arc_cmp_setting_snd_tv_speaker_and_arc_cmp_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
//            if (i == idx) {
//                var htmlText = $("#setting_snd_tv_speaker_and_arc_cmp_setting_snd_tv_speaker_and_arc_cmp_item_text_sys" + i).html();
//                if (htmlText.length > PageDataSettingSndAdvanced.operateData.SpeakerArcMarqueeLength) {
//                    $("#setting_snd_tv_speaker_and_arc_cmp_setting_snd_tv_speaker_and_arc_cmp_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
//                }
//            }
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
//
//function SndSpearkerARCDelMarquee(idx) {
//    try {
//        var marquee = $("#setting_snd_tv_speaker_and_arc_cmp_setting_snd_tv_speaker_and_arc_cmp_item_text_sys" + idx + " marquee");
//        if (marquee.length > 0) {
//            var htmlText = $("#setting_snd_tv_speaker_and_arc_cmp_setting_snd_tv_speaker_and_arc_cmp_item_text_sys" + idx + " marquee").html();
//            var marquee = $("#setting_snd_tv_speaker_and_arc_cmp_setting_snd_tv_speaker_and_arc_cmp_item_text_sys" + idx).html(htmlText);
//        }
//        $("#setting_snd_tv_speaker_and_arc_cmp_setting_snd_tv_speaker_and_arc_cmp_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}
function SettingSndAdvancedRefreshHelpInfo() {
    try {

        var curId = hiWebOsFrame.SettingSndAdvancedPage.currentSelectedTree[0].id;
        var helpInfo = PageDataSettingSndAdvanced.operateData.helpInfo[curId];
        sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

//var aa=[
//"setting_snd_equalizer_cmp",
//
//    "setting_snd_lip_sync",
//    "setting_snd_balance",
//    "setting_snd_digital_audio_out_cmp",
//    "setting_snd_digital_audio_delay",
//    "setting_snd_tv_speaker_and_arc_cmp",  //565
//    "setting_snd_audio_out_cmp",    //539
//    "setting_snd_description_out_cmp",    //680
//    "setting_snd_description_volume",    //763
//    "setting_snd_audio_type_cmp"]
//for(var i=0; i< aa.length;i++){
//    DBG_INFO(aa[i]+":  "+($("#"+aa[i]).offset().top -35));
//}


function canShowHotelMenu() {
    if (!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible) {
        return false;
    }
    else {
        return true;
    }
}