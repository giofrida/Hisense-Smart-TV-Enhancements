function getSettingPicBrtCtrColorData(opts) {
    SettingPicBrtnesCtstColorInit();

    opts.CaE = [
        {
            "id": "setting_pic_brightness_text_0",
            "description": "setting_pic_brightness",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_contrast_text_0",
            "description": "setting_pic_brightness",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_color_text_0",
            "description": "setting_pic_brightness",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_brightness",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_brightness_slider",
            "nav": {"downTo": "setting_pic_brightness", "upTo": ""},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicBrightnessRightHandel",
                "aftLeftHandler": "SettingPicBrightnessLeftHandel",
                "aftEscHandler": "SettingPicBrightnessEscHandel",
                "aftUpHandler": "SettingPicBrtnesCtstColorRefreshHelpInfo",
                "aftDownHandler": "SettingPicBrtnesCtstColorRefreshHelpInfo"
            },
            "CaE": [
                {
                    "id": "setting_pic_brightness_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_brightness_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "",
                        "downTo": "setting_pic_contrast"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_brightness_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_brightness_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_brightness_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_brightness_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_brightness_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_pic_brightness_slider_max_val",
                        disable: "setting_pic_brightness_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_brightness_slider_line",
                "sliderId": "setting_pic_brightness_slider",
                "completeId": "setting_pic_brightness_slider_complete",
                "sliderSpanId": "setting_pic_brightness_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_brightness_slider_min_val",
                "sliderMaxValueId": "setting_pic_brightness_slider_max_val"
            }

        },
        {
            "id": "setting_pic_contrast",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_contrast_slider",
            "nav": {"downTo": "setting_pic_color", "upTo": "setting_pic_brightness"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicContrastRightHandel",
                "aftLeftHandler": "SettingPicContrastLeftHandel",
                "aftEscHandler": "SettingPicBrightnessEscHandel",
                "aftUpHandler": "SettingPicBrtnesCtstColorRefreshHelpInfo",
                "aftDownHandler": "SettingPicBrtnesCtstColorRefreshHelpInfo"
            },
            "CaE": [
                {
                    "id": "setting_pic_contrast_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_contrast_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_pic_brightness",
                        "downTo": "setting_pic_color"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_contrast_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_contrast_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_contrast_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_contrast_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_contrast_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_pic_contrast_slider_max_val",
                        disable: "setting_pic_contrast_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_contrast_slider_line",
                "sliderId": "setting_pic_contrast_slider",
                "completeId": "setting_pic_contrast_slider_complete",
                "sliderSpanId": "setting_pic_contrast_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_contrast_slider_min_val",
                "sliderMaxValueId": "setting_pic_contrast_slider_max_val"
            }

        },
        {
            "id": "setting_pic_color",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_color_slider",
            "nav": {"downTo": "", "upTo": "setting_pic_contrast"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicColorRightHandel",
                "aftLeftHandler": "SettingPicColorLeftHandel",
                "aftEscHandler": "SettingPicBrightnessEscHandel",
                "aftUpHandler": "SettingPicBrtnesCtstColorRefreshHelpInfo",
                "aftDownHandler": "SettingPicBrtnesCtstColorRefreshHelpInfo"
            },
            "CaE": [
                {
                    "id": "setting_pic_color_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_color_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_pic_contrast",
                        "downTo": ""
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_color_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_color_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_color_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_color_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_color_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_pic_color_slider_max_val",
                        disable: "setting_pic_color_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_color_slider_line",
                "sliderId": "setting_pic_color_slider",
                "completeId": "setting_pic_color_slider_complete",
                "sliderSpanId": "setting_pic_color_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_color_slider_min_val",
                "sliderMaxValueId": "setting_pic_color_slider_max_val"
            }

        }

    ];

    return PageDataBrtnesCtrstColorData;
}

var PageDataBrtnesCtrstColorData = {
    "setting_pic_brightness": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 50   //显示的数值
        }
    },
    "setting_pic_contrast": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 50   //显示的数值
        }
    },
    "setting_pic_color": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 50   //显示的数值
        }
    },


    "setting_pic_brightness_text_0": {Data: "Brightness"},
    "setting_pic_contrast_text_0": {Data: "Contrast"},
    "setting_pic_color_text_0": {Data: "Colour Saturation"},
    operateData: {
        helpInfo: {
            setting_pic_brightness: {
                title: "Brightness",
                content: "Adjust the Brightness level to generate lighter or darker images."
            },
            setting_pic_contrast: {
                title: "Contrast",
                content: "Adjust the Contrast level to increase or decrease how bright images appear."
            },
            setting_pic_color: {
                title: "Colour Saturation",
                content: "Adjust the colour intensity of the picture for a more vibrant image."
            }
        },
        "setting_pic_brightness": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 50   //显示的数值
            }
        },
        "setting_pic_contrast": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 50   //显示的数值
            }
        },
        "setting_pic_color": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 50   //显示的数值
            }
        },
    },
    "langData": {
        "Brightness": [],
        "Contrast": [],
        "Colour": [],
        "Colour Saturation": []
    },
    "rewrite": "SettingPicBrtnesCtstColorRewrite"
}

function SettingPicBrightnessLeftHandel(operadata, data) {
    try {
        var brightnessCmp = this;
        var brightnessVal = brightnessCmp.page.operateData[brightnessCmp.id].Data.setDefalutValue;
        DBG_INFO("brightnessVal " + brightnessVal);

        brightnessVal -= 1;
        if (brightnessVal < 0) {
            brightnessVal = 0;
        }
        if (brightnessVal > 100) {
            brightnessVal = 100;
        }

        model.video.setBrightness(brightnessVal);
        SliderEasyChange.call(this, brightnessCmp, brightnessVal);
        SetRecentUse("Brightness", 0, FirPageSndIdx.PicBrightness); //增加最近使用的设置0702
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBrightnessRightHandel(operadata, data) {
    try {
        var brightnessCmp = this;
        var brightnessVal = brightnessCmp.page.operateData[brightnessCmp.id].Data.setDefalutValue;
        DBG_INFO("brightnessVal " + brightnessVal);

        brightnessVal += 1;
        if (brightnessVal < 0) {
            brightnessVal = 0;
        }
        if (brightnessVal > 100) {
            brightnessVal = 100;
        }

        model.video.setBrightness(brightnessVal);
        SliderEasyChange.call(this, brightnessCmp, brightnessVal);
        SetRecentUse("Brightness", 0, FirPageSndIdx.PicBrightness); //增加最近使用的设置0702
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicContrastLeftHandel(operadata, data) {
    try {
        var contrastCmp = this;
        var contrastVal = contrastCmp.page.operateData[contrastCmp.id].Data.setDefalutValue;
        DBG_INFO("contrastVal " + contrastVal);

        contrastVal -= 1;
        if (contrastVal < 0) {
            contrastVal = 0;
        }
        if (contrastVal > 100) {
            contrastVal = 100;
        }

        model.video.setContrast(contrastVal);
        SliderEasyChange.call(this, contrastCmp, contrastVal);
        SetRecentUse("Contrast", 0, FirPageSndIdx.PicContrast); //增加最近使用的设置0702
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicContrastRightHandel(operadata, data) {
    try {
        var contrastCmp = this;
        var contrastVal = contrastCmp.page.operateData[contrastCmp.id].Data.setDefalutValue;
        DBG_INFO("contrastVal " + contrastVal);

        contrastVal += 1;
        if (contrastVal < 0) {
            contrastVal = 0;
        }
        if (contrastVal > 100) {
            contrastVal = 100;
        }

        model.video.setContrast(contrastVal);
        SliderEasyChange.call(this, contrastCmp, contrastVal);
        SetRecentUse("Contrast", 0, FirPageSndIdx.PicContrast); //增加最近使用的设置0702
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicColorLeftHandel(operadata, data) {
    try {
        var colorCmp = this;
        var colorVal = colorCmp.page.operateData[colorCmp.id].Data.setDefalutValue;
        DBG_INFO("colorVal " + colorVal);

        colorVal -= 1;
        if (colorVal < 0) {
            colorVal = 0;
        }
        if (colorVal > 100) {
            colorVal = 100;
        }

        model.video.setColourIntensity(colorVal);
        SliderEasyChange.call(this, colorCmp, colorVal);
        SetRecentUse("Colour Saturation", 0, FirPageSndIdx.PicColorSaturation); //增加最近使用的设置0702
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicColorRightHandel(operadata, data) {
    try {
        var colorCmp = this;
        var colorVal = colorCmp.page.operateData[colorCmp.id].Data.setDefalutValue;
        DBG_INFO("colorVal " + colorVal);

        colorVal += 1;
        if (colorVal < 0) {
            colorVal = 0;
        }
        if (colorVal > 100) {
            colorVal = 100;
        }

        model.video.setColourIntensity(colorVal);
        SliderEasyChange.call(this, colorCmp, colorVal);
        SetRecentUse("Colour Saturation", 0, FirPageSndIdx.PicColorSaturation); //增加最近使用的设置0702
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBrtnesCtstColorRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#setting_pic_brightness_cmp").css('float', dir_1);
        $("#setting_pic_color_cmp").css('float', dir_1);
        $("#setting_pic_contrast_cmp").css('float', dir_1);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    try {
        var brightnessVal = pageData.operateData.setting_pic_brightness.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_pic_brightness", brightnessVal);

        var contrastVal = pageData.operateData.setting_pic_contrast.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_pic_contrast", contrastVal);

        var colorVal = pageData.operateData.setting_pic_color.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_pic_color", colorVal);


    } catch (ex) {
        DBG_ERROR(ex.message);
    }


}


function SettingPicBrightnessEscHandel() {
    try {
        hiWebOsFrame.SettingPicBrtCtrColor.close();
        hiWebOsFrame.SettingPicBrtCtrColor.origin.open();
        hiWebOsFrame.SettingPicBrtCtrColor.origin.hiFocus();
        hiWebOsFrame.SettingPicBrtCtrColor.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicBrtCtrColor.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBrtnesCtstColorRefreshHelpInfo() {
    try {
        //var curId = hiWebOsFrame.SettingPicBrtCtrColor.currentSelectedTree[0].id;
        //var helpInfo = PageDataBrtnesCtrstColorData.operateData.helpInfo[curId];
        //sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicBrightnessDestroy() {
    hiWebOsFrame.SettingPicBrtCtrColor = null;
}
function onSettingPicBrightnessOpen() {
    try {
        DBG_INFO('onSettingPicBrightnessOpen')
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function onSettingPicBrightnessClose() {
    try {
        DBG_INFO('onSettingPicBrightnessClose');
        //CloseSndHelpInfoPage();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

