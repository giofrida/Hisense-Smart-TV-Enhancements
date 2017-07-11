function getSettingPicTintData(opts) {
    opts.CaE = [
        {
            "id": "setting_pic_tint_text_0",
            "CaEType": "span",
            "description": "独立调节 Text"
        },

        {
            "id": "setting_pic_tint",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_tint_slider",
//                    "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicTintRightHandler",
                "aftLeftHandler": "SettingPicTintLeftHandler",
                "aftEscHandler": "SettingPicTintEscHandler"
            },
            "CaE": [
                {
                    "id": "setting_pic_tint_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_tint_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "",
                        "downTo": ""
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_tint_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_tint_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_tint_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_tint_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_tint_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_tint_slider_line",
                "sliderId": "setting_pic_tint_slider",
                "completeId": "setting_pic_tint_slider_complete",
                "sliderSpanId": "setting_pic_tint_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_tint_min_val",
                "sliderMaxValueId": "setting_pic_tint_max_val"
            }
        }

    ];
    try {
        var picTint = model.video.getTint();
        debugG("model.video.getTint(): " + picTint);
        SliderInitEasy.call(this, PageDataSettingPicTint.operateData, "setting_pic_tint", picTint);

    } catch (ex) {
        debugE(ex.message);
    }

    return PageDataSettingPicTint;
}

var PageDataSettingPicTint= {

    "setting_pic_tint_text_0": {Data: "Tint"},

    "setting_pic_tint": {Data: {
        initPosition: 'min',
        enable: true,
        range: {min: -50, max: 50},
        size: { barWidth: 210, sliderWidth: 16 },
        step: 1,
        spanstyle: "int",
        setDefalutValue: 0 }
    },
    operateData:{
        "setting_pic_tint": {Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -50, max: 50},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0 }
        }
    },
    langData:{
        "Tint":[]
    },
    rewrite: SettingPicTintRewrite
}

function SettingPicTintRightHandler(){
    try {
        var Cmp = this;
        var picTintVal = PageDataSettingPicTint.operateData.setting_pic_tint.Data.setDefalutValue;
        debugG("PageDataSettingPicTint.operateData.setting_pic_tint.Data.setDefalutValue: " + picTintVal);
        picTintVal += 1;
        if (picTintVal < -50) {
            picTintVal = -50;
        }
        if (picTintVal > 50) {
            picTintVal = 50;
        }
        SliderEasyChange.call(this, Cmp, picTintVal);


        if (picTintVal < 0) {
            $("#setting_pic_tint_text_1").html('R' + (-picTintVal));
        }
        else if (picTintVal > 0) {
            $("#setting_pic_tint_text_1").html('G' + picTintVal);
        }

        model.video.setTint(picTintVal);

        try {
            if (typeof (PageDataPicAdvanced) != UNDEFINED_DEFSTR) {
                PageDataPicAdvanced.operateData.tintCurrent = PictureTintValue2UI(picTintVal);
            }
        } catch (ex) {
            debugE(ex.message);
        }
        SetRecentUse("Tint", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicTintRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_tint_slider_cmp').css('float', dir_1);

        $("#setting_pic_tint_max_val").html('G50');
        $("#setting_pic_tint_min_val").html('R50');
    } catch (ex) {
        debugE(ex.message);
    }

    try {
        var picTintVal = pageData.operateData.setting_pic_tint.Data.setDefalutValue; //获取主机音量

        SliderRewriteEasy.call(this, pageData, "setting_pic_tint", picTintVal);

        if (picTintVal < 0) {
            $("#setting_pic_tint_text_1").html('R' + (-picTintVal));
        }
        else if (picTintVal > 0) {
            $("#setting_pic_tint_text_1").html('G' + picTintVal);
        }

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicTintLeftHandler(){
    try {
        var Cmp = this;
        var picTintVal = PageDataSettingPicTint.operateData.setting_pic_tint.Data.setDefalutValue;
        debugG("PageDataSettingPicTint.operateData.setting_pic_tint.Data.setDefalutValue: " + picTintVal);
        picTintVal -= 1;
        if (picTintVal < -50) {
            picTintVal = -50;
        }
        if (picTintVal > 50) {
            picTintVal = 50;
        }
        SliderEasyChange.call(this, Cmp, picTintVal);


        if (picTintVal < 0) {
            $("#setting_pic_tint_text_1").html('R' + (-picTintVal));
        }
        else if (picTintVal > 0) {
            $("#setting_pic_tint_text_1").html('G' + picTintVal);
        }


        model.video.setTint(picTintVal);

        try {
            if (typeof (PageDataPicAdvanced) != UNDEFINED_DEFSTR) {
                PageDataPicAdvanced.operateData.tintCurrent = PictureTintValue2UI(picTintVal);
            }
        } catch (ex) {
            debugE(ex.message);
        }
        SetRecentUse("Tint", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
    } catch (ex) {
        debugE(ex.message);
    }
}



function SettingPicTintEscHandler() {
    try {
        SettingPicAdvancedInit();
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        hiWebOsFrame.SettingPicTint.close();
        hiWebOsFrame.SettingPicTint.origin.open();
        hiWebOsFrame.SettingPicTint.origin.hiFocus();
        hiWebOsFrame.SettingPicTint.origin.rewriteDataOnly();
        if('EU' == InitArea){
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo['setting_pic_advanced_tint_cmp'];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        }
        hiWebOsFrame.SettingPicTint.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

}

function onSettingPicTintDestroy(){
    try {
        hiWebOsFrame.SettingPicTint = null;
    } catch (ex) {
        debugE(ex.message);
    }
}