function getSettingPicDisplayComponentPage(opts) {
    opts.CaE =
        [
            {
                "id": "setting_pic_display_component_phase_text_0",
                "description": "",
                "CaEType": "span"
            },
            {
                "id": "setting_pic_display_component_component_reset_text_0",
                "description": "",
                "CaEType": "span"
            },
            {
                "id": "setting_pic_display_component_phase",
                "description": "用于显示滑块",
                "CaEType": "Slider",
                disable: false,
                "firstFocusId": "setting_pic_display_component_phase_slider",
//                    "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
                "classes": {
                    "normal": "setting_snd_equalizer_hz_0",
                    "focus": "setting_snd_equalizer_hz_0",
                    "disable": "setting_snd_equalizer_hz_0_disable",
                    "selected": "setting_snd_equalizer_hz_0_focus"
                },
                "handler": {
                    "aftRightHandler": "SettingPicDisplayComponentPhaseRightHandler",
                    "aftLeftHandler": "SettingPicDisplayComponentPhaseLeftHandler",
                    "aftEscHandler": "SettingPicDisplayComponentPhaseAftEscHandler"
                },
                "CaE": [
                    {
                        "id": "setting_pic_display_component_phase_slider_line",
                        "description": "滑块条",
                        "CaEType": "div",
                        "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                    },

                    {
                        "id": "setting_pic_display_component_phase_slider",
                        "description": "滑块",
                        "CaEType": "div",
                        "nav": {
                            "upTo": "",
                            "downTo": "setting_pic_display_component_component_reset_cmp"
                        },
                        "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                    },
                    {
                        "id": "setting_pic_display_component_phase_slider_img",
                        "description": "滑块img",
                        "CaEType": "div",
                        "classes": {
                            "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                            "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                            "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                        }
                    },
                    {
                        "id": "setting_pic_display_component_phase_slider_complete",
                        "description": "完成的滑块条",
                        "CaEType": "div",
                        "classes": {"normal": "completed", "disable": "completedDisable"}
                    },
                    {
                        "id": "setting_pic_display_component_phase_text_1",
                        "description": "滑动的数值",
                        "CaEType": "div",
                        "classes": {
                            "normal": "setting_snd_equalizer_hz_0_text_1",
                            "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                        }
                    },
                    {
                        "id": "setting_pic_display_component_phase_slider_min_val",
                        "description": "滑动的min",
                        "CaEType": "div",
                        "classes": {
                            normal: "setting_snd_equalizer_hz_0_slider_min_val",
                            disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                        }
                    },
                    {
                        "id": "setting_pic_display_component_phase_slider_max_val",
                        "description": "滑动的max",
                        "CaEType": "div",
                        "classes": {
                            normal: "setting_snd_equalizer_hz_0_slider_max_val",
                            disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                        }
                    }
                ],
                "SliderConfig": {
                    "sliderbarId": "setting_pic_display_component_phase_slider_line",
                    "sliderId": "setting_pic_display_component_phase_slider",
                    "completeId": "setting_pic_display_component_phase_slider_complete",
                    "sliderSpanId": "setting_pic_display_component_phase_text_1",
                    "sliderNormalClass": "SliderNormal",
                    "sliderFocusClass": "SliderFocus",
                    "sliderMinValueId": "setting_pic_display_component_phase_slider_min_val",
                    "sliderMaxValueId": "setting_pic_display_component_phase_slider_max_val"
                }

            },


            {
                "id": "setting_pic_display_component_component_reset_cmp",
                "description": "zoom比例",
                "CaEType": "div",
                "classes": {
                    normal: "setting_chnl_advanced_export_to_usb_cmp_normal",
                    focus: "setting_chnl_advanced_export_to_usb_cmp_focus"
                },
                "handler": {
                    "befUpHandler": "SettingPicDisplayComponentComponentResetCmpBefUpHandler",
                    "aftDownHandler": "SettingPicDisplayComponentComponentResetCmpAftDownHandler",
                    "aftEnterHandler": "SettingPicDisplayComponentComponentResetCmpEnterHandler",
                    "aftEscHandler": "SettingPicDisplayComponentPhaseAftEscHandler"
                },
                "nav": {
                    upTo: "setting_pic_display_component_phase_slider",
                    downTo: ""
                }
            }
        ];
    SettingPicDisplayComponentInit();

    return PageDataSettingPicDisplayComponent;
}

var PageDataSettingPicDisplayComponent = {

    "setting_pic_display_component_phase_text_0": {Data: "Phase"},

    "setting_pic_display_component_phase": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 50
        }
    },

    "setting_pic_display_component_component_reset_text_0": {Data: "Restore Component Settings"},

    "setting_pic_display_component_component_reset_cmp": {Data: "Restore"},
    operateData: {
        ComponentResetCmpMarqueeLength: 9,
        ComponentResetText0MarqueeLength: 24,
        "setting_pic_display_component_phase": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 50
            }
        }
    },
    "langData": {
        "Phase": ["Phase"],
        "Restore Component Settings": [],
        "Restore": []
    },
    "rewrite": SettingPicDisplayComponentRewrite
}

function SettingPicDisplayComponentInit() {
    try {
        var picDisplayComponentPhase = model.video.getPhase();
        debugG("model.video.getPhase(): " + picDisplayComponentPhase);
        SliderInitEasy(PageDataSettingPicDisplayComponent.operateData, 'setting_pic_display_component_phase', picDisplayComponentPhase);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicDisplayComponentPhaseRightHandler() {
    try {
        var Cmp = this;
        var phaseVal = PageDataSettingPicDisplayComponent.operateData.setting_pic_display_component_phase.Data.setDefalutValue;
        debugG("PageDataSettingPicDisplayComponent.operateData.setting_pic_display_component_phase.Data.setDefalutValue: " + phaseVal);
        phaseVal += 1;
        if (phaseVal < 0) {
            phaseVal = 0;
        }
        if (phaseVal > 100) {
            phaseVal = 100;
        }

        SliderEasyChange.call(this, Cmp, phaseVal);
        model.video.setPhase(phaseVal);
        debugG('model.video.setPhase('+phaseVal+')');

        SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingPicDisplayComponentPhaseLeftHandler() {
    try {
        var Cmp = this;
        var phaseVal = PageDataSettingPicDisplayComponent.operateData.setting_pic_display_component_phase.Data.setDefalutValue;
        debugG("PageDataSettingPicDisplayComponent.operateData.setting_pic_display_component_phase.Data.setDefalutValue: " + phaseVal);
        phaseVal -= 1;
        if (phaseVal < 0) {
            phaseVal = 0;
        }
        if (phaseVal > 100) {
            phaseVal = 100;
        }

        SliderEasyChange.call(this, Cmp, phaseVal);
        model.video.setPhase(phaseVal);
        debugG('model.video.setPhase('+phaseVal+')');

        SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicDisplayComponentRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_display_component_phase_slider_cmp').css('float', dir_1);
        $('#setting_pic_display_component_component_reset_cmp').css('float', dir_1);
    } catch (ex) {
        debugE(ex.message);
    }

    try {
        var picDisplayComponentPhase = PageDataSettingPicDisplayComponent.operateData.setting_pic_display_component_phase.Data.setDefalutValue;
        SliderRewriteEasy(pageData, 'setting_pic_display_component_phase', picDisplayComponentPhase);
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicDisplayComponentPhaseAftEscHandler() {
    try {
        hiWebOsFrame.SettingPicDisplayComponent.close();
        hiWebOsFrame.SettingPicDisplayComponent.origin.open();
        hiWebOsFrame.SettingPicDisplayComponent.origin.hiFocus();
        hiWebOsFrame.SettingPicDisplayComponent.origin.rewriteDataOnly();
        if('EU' == InitArea){
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo['setting_pic_advanced_display_cmp'];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        }
        hiWebOsFrame.SettingPicDisplayComponent.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingPicDisplayComponentComponentResetCmpEnterHandler() {
    try {
        hiWebOsFrame.createPage('setting_pic_display_component_reset_page', null, hiWebOsFrame.SettingPicDisplayComponent, null, function (SettingPicDisplayComponentReset) {
            hiWebOsFrame.SettingPicDisplayComponentReset = SettingPicDisplayComponentReset;
            hiWebOsFrame.SettingPicDisplayComponentReset.open();
            hiWebOsFrame.SettingPicDisplayComponentReset.hiFocus();
        });
        hiWebOsFrame.SettingPicDisplayComponent.close();
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicDisplayComponentComponentResetCmpBefUpHandler() {
    try {
        SettingPicDisplayComponentComponentResetCmpDelMarquee();
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingPicDisplayComponentComponentResetCmpAftDownHandler() {
    try {
        SettingPicDisplayComponentComponentResetCmpDelMarquee();
        SettingPicDisplayComponentComponentResetCmpAddMarquee();


    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicDisplayComponentComponentResetCmpDelMarquee() {
    try {
        var marquee = $("#setting_pic_display_component_component_reset_cmp" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_display_component_component_reset_cmp" + " marquee").html();
            var marquee = $("#setting_pic_display_component_component_reset_cmp").html(htmlText);
        }
        $("#setting_pic_display_component_component_reset_cmp").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

        var marquee1 = $("#setting_pic_display_component_component_reset_text_0" + " marquee");   //先清空marquee
        if (marquee1.length > 0) {
            var htmlText1 = $("#setting_pic_display_component_component_reset_text_0" + " marquee").html();
            $("#setting_pic_display_component_component_reset_text_0").html(htmlText1);
        }
        $("#setting_pic_display_component_component_reset_text_0").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");


    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicDisplayComponentComponentResetCmpAddMarquee() {
    try {
        var htmlText = $("#setting_pic_display_component_component_reset_cmp").html();
        if (htmlText.length > PageDataSettingPicDisplayComponent.operateData.ComponentResetCmpMarqueeLength) {
                $("#setting_pic_display_component_component_reset_cmp").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }

        var htmlText_1 = $("#setting_pic_display_component_component_reset_text_0").html();
        if (htmlText_1.length > PageDataSettingPicDisplayComponent.operateData.ComponentResetText0MarqueeLength) {
            $("#setting_pic_display_component_component_reset_text_0").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText_1 + '</marquee>');
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function onSettingPicDisplayComponentDestroy(){
    try {
        hiWebOsFrame.SettingPicDisplayComponent = null;
    } catch (ex) {
        debugE(ex.message);
    }
}
