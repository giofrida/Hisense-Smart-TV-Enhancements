function getSettingPicSharpnessData(opts) {

    opts.CaE = [
        {
            "id": "setting_pic_sharpness_text_0",
            "CaEType": "span",
            "description": "独立调节 Text"
        },

        {
            "id": "setting_pic_sharpness",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_sharpness_slider",
//                    "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicSharpnessRightHandler",
                "aftLeftHandler": "SettingPicSharpnessLeftHandler",
                "aftEscHandler": "SettingPicSharpnessEscHandler"
            },
            "CaE": [
                {
                    "id": "setting_pic_sharpness_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_sharpness_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "",
                        "downTo": ""
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_sharpness_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_sharpness_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_sharpness_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_sharpness_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_sharpness_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_sharpness_slider_line",
                "sliderId": "setting_pic_sharpness_slider",
                "completeId": "setting_pic_sharpness_slider_complete",
                "sliderSpanId": "setting_pic_sharpness_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_sharpness_min_val",
                "sliderMaxValueId": "setting_pic_sharpness_max_val"
            }
        }

    ];

    try {
        var picSharpness = model.video.getSharpness();
        debugG("model.video.getSharpness(): " + picSharpness);
        SliderInitEasy.call(this, PageDataSettingPicSharpness.operateData, "setting_pic_sharpness", picSharpness);

    } catch (ex) {
        debugE(ex.message);
    }

    return PageDataSettingPicSharpness;
}

var PageDataSettingPicSharpness = {
    "setting_pic_sharpness_text_0": {Data: "Sharpness"},

    "setting_pic_sharpness": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 20},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 10
        }  //显示的数值

    },
    operateData:{
        "setting_pic_sharpness": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 20},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 10
            }  //显示的数值

        }
    },
    langData: {
        "Sharpness": []
    },
    rewrite: SettingPicSharpnessRewrite
}

function SettingPicSharpnessRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_sharpness_slider_cmp').css('float', dir_1);

    } catch (ex) {
        debugE(ex.message);
    }

    try {
        var picSharpnessVal = pageData.operateData.setting_pic_sharpness.Data.setDefalutValue; //获取主机音量

        SliderRewriteEasy.call(this, pageData, "setting_pic_sharpness", picSharpnessVal);
    } catch (ex) {
        debugE(ex.message);
    }
}




function SettingPicSharpnessRightHandler() {
    try {
        var Cmp = this;
        var picSharpnessVal = PageDataSettingPicSharpness.operateData.setting_pic_sharpness.Data.setDefalutValue;
        debugG("PageDataSettingPicSharpness.operateData.setting_pic_sharpness.Data.setDefalutValue: " + picSharpnessVal);
        picSharpnessVal += 1;
        if (picSharpnessVal < 0) {
            picSharpnessVal = 0;
        }
        if (picSharpnessVal > 20) {
            picSharpnessVal = 20;
        }
        SliderEasyChange.call(this, Cmp, picSharpnessVal);

        model.video.setSharpness(picSharpnessVal);

        PageDataPicAdvanced.operateData.sharpnessCurrent = picSharpnessVal;

        SetRecentUse("Sharpness", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicSharpnessLeftHandler() {
    try {
        var Cmp = this;
        var picSharpnessVal = PageDataSettingPicSharpness.operateData.setting_pic_sharpness.Data.setDefalutValue;
        debugG("PageDataSettingPicSharpness.operateData.setting_pic_sharpness.Data.setDefalutValue: " + picSharpnessVal);
        picSharpnessVal -= 1;
        if (picSharpnessVal < 0) {
            picSharpnessVal = 0;
        }
        if (picSharpnessVal > 20) {
            picSharpnessVal = 20;
        }
        SliderEasyChange.call(this, Cmp, picSharpnessVal);

        model.video.setSharpness(picSharpnessVal);

        PageDataPicAdvanced.operateData.sharpnessCurrent = picSharpnessVal;

        SetRecentUse("Sharpness", 0, FirPageSndIdx.PicAdvanced); //增加最近使用的设置0702
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicSharpnessEscHandler() {
    try {
        SettingPicAdvancedInit();
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        hiWebOsFrame.SettingPicSharpness.close();
        hiWebOsFrame.SettingPicSharpness.origin.open();
        hiWebOsFrame.SettingPicSharpness.origin.hiFocus();
        hiWebOsFrame.SettingPicSharpness.origin.rewriteDataOnly();
        if('EU' == InitArea){
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo['setting_pic_advanced_sharpness_cmp'];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        }
        hiWebOsFrame.SettingPicSharpness.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicSharpnessDestroy(){
    try {
        hiWebOsFrame.SettingPicSharpness = null;
    } catch (ex) {
        debugE(ex.message);
    }
}