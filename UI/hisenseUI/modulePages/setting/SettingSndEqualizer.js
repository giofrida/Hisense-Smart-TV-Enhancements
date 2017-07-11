/**
 * Created by ghl on 14-6-19.
 */

function getSettingSndEqualizerData(opts) {
    SettingEqualizerPageInit();
    opts.CaE = [
        {
            "id": "setting_snd_equalizer_hz_0",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_snd_equalizer_hz_0_slider",
            "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingEqualizerRightHandel",
                "aftLeftHandler": "SettingEqualizerLeftHandel",
                "aftEscHandler": "SettingEqualizerEscHandel",
                "aftUpHandler": "EqualizerRefreshHelpInfo",
                "aftDownHandler": "EqualizerRefreshHelpInfo"
            },
            "CaE": [
                {
                    "id": "setting_snd_equalizer_hz_0_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_equalizer_hz_0_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_equalizer_hz_4",
                        "downTo": "setting_snd_equalizer_hz_1"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_snd_equalizer_hz_0_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_0_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_equalizer_hz_0_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_0_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_0_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_equalizer_hz_0_slider_line",
                "sliderId": "setting_snd_equalizer_hz_0_slider",
                "completeId": "setting_snd_equalizer_hz_0_slider_complete",
                "sliderSpanId": "setting_snd_equalizer_hz_0_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_equalizer_hz_0_slider_min_val",
                "sliderMaxValueId": "setting_snd_equalizer_hz_0_slider_max_val"
            }

        },
        {
            "id": "setting_snd_equalizer_hz_1",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_snd_equalizer_hz_1_slider",
            "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingEqualizerRightHandel",
                "aftLeftHandler": "SettingEqualizerLeftHandel",
                "aftEscHandler": "SettingEqualizerEscHandel",
                "aftUpHandler": "EqualizerRefreshHelpInfo",
                "aftDownHandler": "EqualizerRefreshHelpInfo"
            },

            "CaE": [
                {
                    "id": "setting_snd_equalizer_hz_1_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_equalizer_hz_1_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_equalizer_hz_0",
                        "downTo": "setting_snd_equalizer_hz_2"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "setting_snd_equalizer_hz_1_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {"normal": "setting_snd_equalizer_hz_0_slider_img_normal", "focus": "setting_snd_equalizer_hz_0_slider_img_focus"}

                },
                {
                    "id": "setting_snd_equalizer_hz_1_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_equalizer_hz_1_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_1_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_1_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_equalizer_hz_1_slider_line",
                "sliderId": "setting_snd_equalizer_hz_1_slider",
                "completeId": "setting_snd_equalizer_hz_1_slider_complete",
                "sliderSpanId": "setting_snd_equalizer_hz_1_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_equalizer_hz_1_slider_min_val",
                "sliderMaxValueId": "setting_snd_equalizer_hz_1_slider_max_val"
            }

        },
        {
            "id": "setting_snd_equalizer_hz_2",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_snd_equalizer_hz_2_slider",
            "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingEqualizerRightHandel",
                "aftLeftHandler": "SettingEqualizerLeftHandel",
                "aftEscHandler": "SettingEqualizerEscHandel",
                "aftUpHandler": "EqualizerRefreshHelpInfo",
                "aftDownHandler": "EqualizerRefreshHelpInfo"
            },

            "CaE": [
                {
                    "id": "setting_snd_equalizer_hz_2_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_equalizer_hz_2_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_equalizer_hz_1",
                        "downTo": "setting_snd_equalizer_hz_3"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "setting_snd_equalizer_hz_2_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_2_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_equalizer_hz_2_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_2_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_2_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_equalizer_hz_2_slider_line",
                "sliderId": "setting_snd_equalizer_hz_2_slider",
                "completeId": "setting_snd_equalizer_hz_2_slider_complete",
                "sliderSpanId": "setting_snd_equalizer_hz_2_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_equalizer_hz_2_slider_min_val",
                "sliderMaxValueId": "setting_snd_equalizer_hz_2_slider_max_val"
            }

        },
        {
            "id": "setting_snd_equalizer_hz_3",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_snd_equalizer_hz_3_slider",
            "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingEqualizerRightHandel",
                "aftLeftHandler": "SettingEqualizerLeftHandel",
                "aftEscHandler": "SettingEqualizerEscHandel",
                "aftUpHandler": "EqualizerRefreshHelpInfo",
                "aftDownHandler": "EqualizerRefreshHelpInfo"
            },

            "CaE": [
                {
                    "id": "setting_snd_equalizer_hz_3_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_equalizer_hz_3_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_equalizer_hz_2",
                        "downTo": "setting_snd_equalizer_hz_4"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "setting_snd_equalizer_hz_3_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {"normal": "setting_snd_equalizer_hz_0_slider_img_normal", "focus": "setting_snd_equalizer_hz_0_slider_img_focus"}

                },
                {
                    "id": "setting_snd_equalizer_hz_3_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_equalizer_hz_3_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_3_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_3_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_equalizer_hz_3_slider_line",
                "sliderId": "setting_snd_equalizer_hz_3_slider",
                "completeId": "setting_snd_equalizer_hz_3_slider_complete",
                "sliderSpanId": "setting_snd_equalizer_hz_3_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_equalizer_hz_3_slider_min_val",
                "sliderMaxValueId": "setting_snd_equalizer_hz_3_slider_max_val"
            }

        },
        {
            "id": "setting_snd_equalizer_hz_4",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_snd_equalizer_hz_4_slider",
            "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingEqualizerRightHandel",
                "aftLeftHandler": "SettingEqualizerLeftHandel",
                "aftEscHandler": "SettingEqualizerEscHandel",
                //"aftUpHandler": "EqualizerRefreshHelpInfo",
                //"aftDownHandler": "EqualizerRefreshHelpInfo"
            },

            "CaE": [
                {
                    "id": "setting_snd_equalizer_hz_4_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_equalizer_hz_4_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_equalizer_hz_3",
                        "downTo": "setting_snd_equalizer_hz_0"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "setting_snd_equalizer_hz_4_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_4_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_equalizer_hz_4_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_4_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_equalizer_hz_4_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_equalizer_hz_4_slider_line",
                "sliderId": "setting_snd_equalizer_hz_4_slider",
                "completeId": "setting_snd_equalizer_hz_4_slider_complete",
                "sliderSpanId": "setting_snd_equalizer_hz_4_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_equalizer_hz_4_slider_min_val",
                "sliderMaxValueId": "setting_snd_equalizer_hz_4_slider_max_val"
            }

        },

        {
            "id": "setting_snd_equalizer_hz_0_text_0",
            "description": "120hz频率文字 0",
            "CaEType": "div"
        },
        {
            "id": "setting_snd_equalizer_hz_1_text_0",
            "description": "500hz频率文字 0",
            "CaEType": "div"
        },

        {
            "id": "setting_snd_equalizer_hz_2_text_0",
            "description": "1.5khz频率文字 0",
            "CaEType": "div"
        },
        {
            "id": "setting_snd_equalizer_hz_3_text_0",
            "description": "5khz频率文字 0",
            "CaEType": "div"
        },

        {
            "id": "setting_snd_equalizer_hz_4_text_0",
            "description": "10khz频率文字 0",
            "CaEType": "div"
        }
    ];
    return PageDataSettingSndEqualizer;
}

function onSettingSndEqualizerOpen() {
    try {
        //CreateSndHelpInfoPage("100HZ", "Adjust the equalizer setting to 100Hz.");
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndEqualizerClose() {
    try {
        debugG("-----------close------------");

        CloseSndHelpInfoPage();
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndEqualizerDestroy() {
    try {
        debugG("-----------destroy------------");
        hiWebOsFrame.SettingSndEqualizer = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataSettingSndEqualizer = {
    "setting_snd_equalizer_hz_0": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }

    },
    "setting_snd_equalizer_hz_1": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0  //显示的数值
        }

    },
    "setting_snd_equalizer_hz_2": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0  //显示的数值
        }
    },
    "setting_snd_equalizer_hz_3": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0  //显示的数值
        }
    },
    "setting_snd_equalizer_hz_4": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0  //显示的数值
        }
    },

    setting_snd_equalizer_hz_0_text_0: {Data: "100Hz"},
    setting_snd_equalizer_hz_1_text_0: {Data: "500Hz"},
    setting_snd_equalizer_hz_2_text_0: {Data: "1.5KHz"},
    setting_snd_equalizer_hz_3_text_0: {Data: "5KHz"},
    setting_snd_equalizer_hz_4_text_0: {Data: "10KHz"},
    operateData: {
        "setting_snd_equalizer_hz_0": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -10, max: 10},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0  //显示的数值
            }

        },
        "setting_snd_equalizer_hz_1": {Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0  //显示的数值
        }

        },
        "setting_snd_equalizer_hz_2": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -10, max: 10},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0  //显示的数值
            }
        },
        "setting_snd_equalizer_hz_3": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -10, max: 10},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0  //显示的数值
            }
        },
        "setting_snd_equalizer_hz_4": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -10, max: 10},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0  //显示的数值
            }
        },
        "CfgHelpInfo": {
            "setting_snd_equalizer_hz_0": {title: "100Hz", content: "Adjust the equalizer setting to 100Hz."},
            "setting_snd_equalizer_hz_1": {title: "500Hz", content: "Adjust the equalizer setting to 500Hz."},
            "setting_snd_equalizer_hz_2": {title: "1.5KHz", content: "Adjust the equalizer setting to 1.5KHz."},
            "setting_snd_equalizer_hz_3": {title: "5KHz", content: "Adjust the equalizer setting to 5KHz."},
            "setting_snd_equalizer_hz_4": {title: "10KHz", content: "Adjust the equalizer setting to 10KHz."}
        }

    },
    langData: {
        "100Hz": [],
        "500Hz": [],
        "1.5KHz": [],
        "5KHz": [],
        "10KHz": []
    },
    rewrite: "SettingEqualizerPageRewrite"


}


function SettingEqualizerPageRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#setting_snd_equalizer_hz_0_slider_cmp").css('float', dir_1);
        $("#setting_snd_equalizer_hz_1_slider_cmp").css('float', dir_1);
        $("#setting_snd_equalizer_hz_2_slider_cmp").css('float', dir_1);
        $("#setting_snd_equalizer_hz_3_slider_cmp").css('float', dir_1);
        $("#setting_snd_equalizer_hz_4_slider_cmp").css('float', dir_1);

    } catch (ex) {
        debugE(ex.message);
    }
    try {
        var hz0val = pageData.operateData.setting_snd_equalizer_hz_0.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_snd_equalizer_hz_0", hz0val);


        var hz1val = pageData.operateData.setting_snd_equalizer_hz_1.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_snd_equalizer_hz_1", hz1val);


        var hz2val = pageData.operateData.setting_snd_equalizer_hz_2.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_snd_equalizer_hz_2", hz2val);


        var hz3val = pageData.operateData.setting_snd_equalizer_hz_3.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_snd_equalizer_hz_3", hz3val);


        var hz4val = pageData.operateData.setting_snd_equalizer_hz_4.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_snd_equalizer_hz_4", hz4val);


    } catch (ex) {
        debugE(ex.message);
    }

}


function SettingEqualizerRightHandel() {
    try {
        //TODO 是否需要修改声音模式
//        if (4 != EQUALIZER_SND_MODE_FLAG) {
//            ChangeSndMode2User();
//        }

        var hzIndex;
        switch (this.id) {
            case "setting_snd_equalizer_hz_0":
                hzIndex = 0;
                break;
            case "setting_snd_equalizer_hz_1":
                hzIndex = 1;
                break;
            case "setting_snd_equalizer_hz_2":
                hzIndex = 2;
                break;
            case "setting_snd_equalizer_hz_3":
                hzIndex = 3;
                break;
            case "setting_snd_equalizer_hz_4":
                hzIndex = 4;
                break;
            case "setting_snd_equalizer_hz_5":
                hzIndex = 5;
                break;
            default :
                break;
        }

        var EqualCmp = this;
        var EqualVal = getEqualizerVal(hzIndex);
        EqualVal += 1;
        if (EqualVal < -10) {
            EqualVal = -10;
        }
        if (EqualVal > 10) {
            EqualVal = 10;
        }

        setEqualizerVal(hzIndex, EqualVal);
        SliderEasyChange.call(this, EqualCmp, EqualVal);

        SetRecentUse("Equalizer", 1, FirPageSndIdx.SndAdvanced);

    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingEqualizerLeftHandel() {
    try {
//        if (4 != EQUALIZER_SND_MODE_FLAG) {
//            ChangeSndMode2User();
//        }

        var hzIndex;
        switch (this.id) {
            case "setting_snd_equalizer_hz_0":
                hzIndex = 0;
                break;
            case "setting_snd_equalizer_hz_1":
                hzIndex = 1;
                break;
            case "setting_snd_equalizer_hz_2":
                hzIndex = 2;
                break;
            case "setting_snd_equalizer_hz_3":
                hzIndex = 3;
                break;
            case "setting_snd_equalizer_hz_4":
                hzIndex = 4;
                break;
            case "setting_snd_equalizer_hz_5":
                hzIndex = 5;
                break;
            default :
                break;
        }

        var EqualCmp = this;
        var EqualVal = getEqualizerVal(hzIndex);
        EqualVal -= 1;
        if (EqualVal < -10) {
            EqualVal = -10;
        }
        if (EqualVal > 10) {
            EqualVal = 10;
        }

        setEqualizerVal(hzIndex, EqualVal);
        SliderEasyChange.call(this, EqualCmp, EqualVal);
        SetRecentUse("Equalizer", 1, FirPageSndIdx.SndAdvanced);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingEqualizerEscHandel() {
    try {
        var oriPage = hiWebOsFrame.SettingSndEqualizer.origin;
        hiWebOsFrame.SettingSndEqualizer.close();
        hiWebOsFrame.SettingSndEqualizer.destroy(); //此处修改顺序是因为destroy里面还会调用一次colse，放到最后面的话会close HelpInfoPage
        oriPage.open();
        CreateSndHelpInfoPage("Equalizer", "Boost the volume at different frequencies.");
        oriPage.hiFocus();
        oriPage.rewriteDataOnly();

//        hiWebOsFrame.SettingSndEqualizer.origin.open();
//        hiWebOsFrame.SettingSndEqualizer.origin.hiFocus();
//        hiWebOsFrame.SettingSndEqualizer.origin.rewriteDataOnly();
    } catch (ex) {
        debugE(ex.message);
    }
}

function getEqualizerVal(equalizerIndex) {
    try {
        switch (equalizerIndex) {
            case 0:
                return model.sound.getEqualizerFreq120hz();
                break;
            case 1:
                return model.sound.getEqualizerFreq500hz();
                break;
            case 2:
                return  model.sound.getEqualizerFreq1k5hz();
                break;
            case 3:
                return  model.sound.getEqualizerFreq5khz();
                break;
            case 4:
                return   model.sound.getEqualizerFreq10khz();
                break;
            default :
                break;
        }

    } catch (ex) {
        debugE(ex.message);
    }
}

function setEqualizerVal(equalizerIndex, val) {
    try {
        switch (equalizerIndex) {
            case 0:
                model.sound.setEqualizerFreq120hz(val);
                break;
            case 1:
                model.sound.setEqualizerFreq500hz(val);
                break;
            case 2:
                model.sound.setEqualizerFreq1k5hz(val);
                break;
            case 3:
                model.sound.setEqualizerFreq5khz(val);
                break;
            case 4:
                model.sound.setEqualizerFreq10khz(val);
                break;
            default :
                break;
        }


    } catch (ex) {
        debugE(ex.message);
    }
}

function ChangeSndMode2User() {
    try {
//        model.sound.setEnumAdjust(SndModeHis2Loewe(4));
    } catch (ex) {
        debugE(ex.message);
    }
}

function EqualizerRefreshHelpInfo() {
    try {
        debugG("EqualizerRefreshHelpInfo")
        var curId = hiWebOsFrame.SettingSndEqualizer.currentSelectedTree[0].id;
        var tmpJson = PageDataSettingSndEqualizer.operateData.CfgHelpInfo[curId];
        //sndHelpInfo.setHelpInfoText(tmpJson.title, tmpJson.content);

    } catch (ex) {
        debugE(ex.message);
    }
}

