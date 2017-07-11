function getSettingPicHueSatBriData(opts) {
    opts.CaE = [
        {
            "id": "setting_pic_hue_sat_bri_text_0",
            "CaEType": "span",
            "description": "独立调节 Text"
        },

        {
            "id": "setting_pic_hue_sat_bri",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_hue_sat_bri_slider",
//                    "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicHueSatBriRightHandler",
                "aftLeftHandler": "SettingPicHueSatBriLeftHandler",
                "aftEscHandler": "SettingPicHueSatBriEscHandler",
                "befUpHandler": "SettingPicHueSatBriBefUpHandler",
                "befDownHandler": "SettingPicHueSatBriBefDownHandler"
            },
            "CaE": [
                {
                    "id": "setting_pic_hue_sat_bri_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_hue_sat_bri_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "",
                        "downTo": ""
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_hue_sat_bri_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_hue_sat_bri_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_hue_sat_bri_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_hue_sat_bri_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_hue_sat_bri_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_hue_sat_bri_slider_line",
                "sliderId": "setting_pic_hue_sat_bri_slider",
                "completeId": "setting_pic_hue_sat_bri_slider_complete",
                "sliderSpanId": "setting_pic_hue_sat_bri_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_hue_sat_bri_min_val",
                "sliderMaxValueId": "setting_pic_hue_sat_bri_max_val"
            }
        }

    ];

    return PageDataSettingPicHueSatBri;
}
var PageDataSettingPicHueSatBri = {
    setting_pic_hue_sat_bri_text_0: {Data: "Hue"},

    "setting_pic_hue_sat_bri": {
        disable: false,
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值   默认设置为电视音量？
        }
//        disable: false
    },
    operateData: {
        setting_pic_hue_sat_bri_text_0: {Data: "Hue"},
        HueSatBriDataVec:['Hue','Saturation','Brightness'],
        "setting_pic_hue_sat_bri": {
            disable: false,
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -10, max: 10},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值   默认设置为电视音量？
            }
//        disable: false
        }
    },
    langData: {
        "Hue": [],
        "Brightness": [],
        "Saturation": []
    },
    rewrite: SettingPicHueSatBriRewrite
}

function onSettingPicHueSatBriDestroy() {
    try {
        hiWebOsFrame.SettingPicHueSatBri = null;
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingPicHueSatBriRewrite(pageData) {
    try {
        debugG('SettingPicHueSatBriRewrite');
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_hue_sat_bri_slider_cmp').css('float', dir_1 );
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        PageDataSettingPicHueSatBri.setting_pic_hue_sat_bri_text_0.Data = PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data;

        var curCmpVal = pageData.operateData.setting_pic_hue_sat_bri.Data.setDefalutValue; //获取主机音量
        debugG('curCmpVal: '+curCmpVal);
        SliderRewriteEasy.call(this, pageData, "setting_pic_hue_sat_bri", curCmpVal);

        SettingPicHueSatBriRefreshArrow(PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicHueSatBriGetCmpVal(cmpId) {
    debugG('SettingPicHueSatBriGetCmpVal()');
    var cmpVal = 0;

    try {
        switch (cmpId) {
            case  'Hue':
                cmpVal = model.video.getColorHue();
                debugG('model.video.getColorHue(): ' + cmpVal);
                break;
            case 'Saturation':
                cmpVal = model.video.getColorSaturation();
                debugG('model.video.getColorSaturation(): ' + cmpVal);
                break;
            case 'Brightness':
                cmpVal = model.video.getColorBrightness();
                debugG('model.video.getColorBrightness(): ' + cmpVal);
                break;
            default :
                debugG('SettingPicHueSatBriGetCmpVal Error cmpId!!');
                break;
        }
    } catch (ex) {
        debugE(ex.message);
    }

    return cmpVal;
}

function SettingPicHueSatBriSetCmpVal(cmpId, cmpVal) {
    try {
        debugG('SettingPicHueSatBriSetCmpVal()');
        switch (cmpId) {
            case  'Hue':
                model.video.setColorHue(cmpVal);
                debugG('model.video.setColorHue(' + cmpVal+')');
                break;
            case 'Saturation':
                model.video.setColorSaturation(cmpVal);
                debugG('model.video.setColorSaturation(' + cmpVal+')');
                break;
            case 'Brightness':
                model.video.setColorBrightness(cmpVal);
                debugG('model.video.setColorBrightness(' + cmpVal+')');
                break;
            default :
                debugG('SettingPicHueSatBriSetCmpVal Error cmpId!!');
                break;
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicHueSatBriRefreshArrow(cmpId){
    try {
        $("#setting_pic_hue_sat_bri_uparrow").css("visibility", "visible");
        $("#setting_pic_hue_sat_bri_downarrow").css("visibility", "visible");
        if(cmpId == 'Hue'){
            $("#setting_pic_hue_sat_bri_uparrow").css("visibility", "hidden");
        }
        if(cmpId == 'Brightness'){
            $("#setting_pic_hue_sat_bri_downarrow").css("visibility", "hidden");
        }

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicHueSatBriBefDownHandler() {
    try {
        debugG('SettingPicHueSatBriBefDownHandler() && curCmp' + PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data);
        var curCmp = this;
        var curCmpId = PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data;
        var curCmpIndex = PageDataSettingPicHueSatBri.operateData.HueSatBriDataVec.indexOf(curCmpId);
        curCmpIndex += 1;
        if(curCmpIndex > 2){
            curCmpIndex = 2;
        }
        var nextCmpId = PageDataSettingPicHueSatBri.operateData.HueSatBriDataVec[curCmpIndex];

        var nextCmpVal = SettingPicHueSatBriGetCmpVal(nextCmpId);

        PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data = nextCmpId;
        SliderEasyChange.call(this, curCmp, nextCmpVal);
        hiWebOsFrame.SettingPicHueSatBri.rewriteDataOnly();
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingPicHueSatBriBefUpHandler() {
    try {
        debugG('SettingPicHueSatBriBefDownHandler() && curCmp: ' + PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data);
        var curCmp = this;
        var curCmpId = PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data;
        var curCmpIndex = PageDataSettingPicHueSatBri.operateData.HueSatBriDataVec.indexOf(curCmpId);
        curCmpIndex -= 1;
        if(curCmpIndex < 0){
            curCmpIndex = 0;
        }
        var nextCmpId = PageDataSettingPicHueSatBri.operateData.HueSatBriDataVec[curCmpIndex];

        var nextCmpVal = SettingPicHueSatBriGetCmpVal(nextCmpId);

        PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data = nextCmpId;
        SliderEasyChange.call(this, curCmp, nextCmpVal);
        hiWebOsFrame.SettingPicHueSatBri.rewriteDataOnly();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicHueSatBriLeftHandler() {
    try {
        var Cmp = this;
        var hueSatBriVal = PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri.Data.setDefalutValue;
        debugG("PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri.Data.setDefalutValue: " + hueSatBriVal);
        hueSatBriVal -= 1;
        if (hueSatBriVal < -10) {
            hueSatBriVal = -10;
        }
        if (hueSatBriVal > 10) {
            hueSatBriVal = 10;
        }

        SliderEasyChange.call(this, Cmp, hueSatBriVal);
        SettingPicHueSatBriSetCmpVal(PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data, hueSatBriVal);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicHueSatBriRightHandler() {
    try {
        var Cmp = this;
        var hueSatBriVal = PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri.Data.setDefalutValue;
        debugG("PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri.Data.setDefalutValue: " + hueSatBriVal);
        hueSatBriVal += 1;
        if (hueSatBriVal < -10) {
            hueSatBriVal = -10;
        }
        if (hueSatBriVal > 10) {
            hueSatBriVal = 10;
        }

        SliderEasyChange.call(this, Cmp, hueSatBriVal);
        SettingPicHueSatBriSetCmpVal(PageDataSettingPicHueSatBri.operateData.setting_pic_hue_sat_bri_text_0.Data, hueSatBriVal);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicHueSatBriEscHandler() {
    try {
        SettingPicColorTunerInit();
        hiWebOsFrame.SettingPicHueSatBri.close();
        hiWebOsFrame.SettingPicHueSatBri.origin.open();
        hiWebOsFrame.SettingPicHueSatBri.origin.hiFocus();
        hiWebOsFrame.SettingPicHueSatBri.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicHueSatBri.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}