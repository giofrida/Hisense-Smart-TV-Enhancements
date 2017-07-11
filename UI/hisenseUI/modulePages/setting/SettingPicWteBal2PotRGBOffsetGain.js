function getSettingPicWteBal2PotRGBOffsetGainData(opts) {
    opts.CaE = [
        {
            "id": "setting_pic_white_balance_2point_rgb_offset_gain_text_0",
            "CaEType": "span",
            "description": "独立调节 Text"
        },

        {
            "id": "setting_pic_white_balance_2point_rgb_offset_gain",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_white_balance_2point_rgb_offset_gain_slider",
//                    "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicWteBal2PotRGBOffsetGainRightHandler",
                "aftLeftHandler": "SettingPicWteBal2PotRGBOffsetGainLeftHandler",
                "aftEscHandler": "SettingPicWteBal2PotRGBOffsetGainEscHandler",
                "befUpHandler": "SettingPicWteBal2PotRGBOffsetGainefUpHandler",
                "befDownHandler": "SettingPicWteBal2PotRGBOffsetGainefDownHandler"
            },
            "CaE": [
                {
                    "id": "setting_pic_white_balance_2point_rgb_offset_gain_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_white_balance_2point_rgb_offset_gain_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "",
                        "downTo": ""
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_white_balance_2point_rgb_offset_gain_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_white_balance_2point_rgb_offset_gain_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_white_balance_2point_rgb_offset_gain_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_white_balance_2point_rgb_offset_gain_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_white_balance_2point_rgb_offset_gain_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_white_balance_2point_rgb_offset_gain_slider_line",
                "sliderId": "setting_pic_white_balance_2point_rgb_offset_gain_slider",
                "completeId": "setting_pic_white_balance_2point_rgb_offset_gain_slider_complete",
                "sliderSpanId": "setting_pic_white_balance_2point_rgb_offset_gain_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_white_balance_2point_rgb_offset_gain_min_val",
                "sliderMaxValueId": "setting_pic_white_balance_2point_rgb_offset_gain_max_val"
            }
        }

    ];

    return PageDataSettingPicWteBal2PotRGBOffsetGain;
}
var PageDataSettingPicWteBal2PotRGBOffsetGain = {
    setting_pic_white_balance_2point_rgb_offset_gain_text_0: {Data: "R-Offset"},

    "setting_pic_white_balance_2point_rgb_offset_gain": {
        disable: false,
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -10, max: 10},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值   默认设置为电视音量？
        }
//        disable: false
    },
    operateData: {
        setting_pic_white_balance_2point_rgb_offset_gain_text_0: {Data: "R-Offset"},
        RGBOffsetGainVec: ['R-Offset', 'G-Offset', 'B-Offset', 'R-Gain', 'G-Gain', 'B-Gain', ],
        "setting_pic_white_balance_2point_rgb_offset_gain": {
            disable: false,
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -10, max: 10},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值   默认设置为电视音量？
            }
//        disable: false
        }
    },

    "langData": {
        "R-Offset": [],
        "G-Offset": [],
        "B-Offset": [],
        "R-Gain": [],
        "G-Gain": [],
        "B-Gain": []
    },
    rewrite: SettingPicWteBal2PotRGBOffsetGainRewrite
}

function SettingPicWteBal2PotRGBOffsetGainRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_white_balance_2point_rgb_offset_gain_slider_cmp').css('float', dir_1)

        PageDataSettingPicWteBal2PotRGBOffsetGain.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data;

        var curCmpVal = pageData.operateData.setting_pic_white_balance_2point_rgb_offset_gain.Data.setDefalutValue; //获取主机音量

        SliderRewriteEasy.call(this, pageData, "setting_pic_white_balance_2point_rgb_offset_gain", curCmpVal);

        SettingPicWteBal2PotRGBOffsetGainRefreshArrow(PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal2PotRGBOffsetGainRefreshArrow(cmpId) {
    try {
        try {
            $("#setting_pic_white_balance_2point_rgb_offset_gain_uparrow").css("visibility", "visible");
            $("#setting_pic_white_balance_2point_rgb_offset_gain_downarrow").css("visibility", "visible");
            if(cmpId == 'R-Offset'){
                $("#setting_pic_white_balance_2point_rgb_offset_gain_uparrow").css("visibility", "hidden");
            }
            if(cmpId == 'B-Gain'){
                $("#setting_pic_white_balance_2point_rgb_offset_gain_downarrow").css("visibility", "hidden");
            }

        } catch (ex) {
            debugE(ex.message);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function onSettingPicWteBal2PotRGBOffsetGainDestroy() {
    try {
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain = null;
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal2PotRGBOffsetGainLeftHandler() {
    try {
        var Cmp = this;
        var rgbOffsetGainVal = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain.Data.setDefalutValue;
        debugG("PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain.Data.setDefalutValue: " + rgbOffsetGainVal);
        rgbOffsetGainVal -= 1;
        if (rgbOffsetGainVal < -10) {
            rgbOffsetGainVal = -10;
        }
        if (rgbOffsetGainVal > 10) {
            rgbOffsetGainVal = 10;
        }

        SliderEasyChange.call(this, Cmp, rgbOffsetGainVal);

        SettingPicWteBal2PotRGBOffsetGainSetCmpVal(PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data, rgbOffsetGainVal);

    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal2PotRGBOffsetGainRightHandler() {
    try {
        var Cmp = this;
        var rgbOffsetGainVal = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain.Data.setDefalutValue;
        debugG("PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain.Data.setDefalutValue: " + rgbOffsetGainVal);
        rgbOffsetGainVal += 1;
        if (rgbOffsetGainVal < -10) {
            rgbOffsetGainVal = -10;
        }
        if (rgbOffsetGainVal > 10) {
            rgbOffsetGainVal = 10;
        }

        SliderEasyChange.call(this, Cmp, rgbOffsetGainVal);

        SettingPicWteBal2PotRGBOffsetGainSetCmpVal(PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data, rgbOffsetGainVal);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal2PotRGBOffsetGainSetCmpVal(cmpId, cmpVal) {
    try {
        debugG('SettingPicWteBal2PotRGBOffsetGainSetCmpVal()');
        switch (cmpId) {
            case  'R-Offset':
                model.video.setRoffset(cmpVal);
                debugG('model.video.setRoffset(' + cmpVal + ')');
                break;
            case 'G-Offset':
                model.video.setGoffset(cmpVal);
                debugG('model.setGoffset.setGreen(' + cmpVal + ')');
                break;
            case 'B-Offset':
                model.video.setBoffset(cmpVal);
                debugG('model.setBoffset.setBlue(' + cmpVal + ')');
                break;
            case  'R-Gain':
                model.video.setRgain(cmpVal);
                debugG('model.video.setRgain(' + cmpVal + ')');
                break;
            case 'G-Gain':
                model.video.setGgain(cmpVal);
                debugG('model.setGgain.setGreen(' + cmpVal + ')');
                break;
            case 'B-Gain':
                model.video.setBgain(cmpVal);
                debugG('model.setBgain.setBlue(' + cmpVal + ')');
                break;
            default :
                debugG('SettingPicWteBal2PotRGBOffsetGainSetCmpVal Error cmpId!!');
                break;
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal2PotRGBOffsetGainefUpHandler(){
    try {
        debugG('SettingPicWteBal2PotRGBOffsetGainefUpHandler() && curCmp' + PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data);
        var curCmp = this;
        var curCmpId = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data;
        var curCmpIndex = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.RGBOffsetGainVec.indexOf(curCmpId);
        curCmpIndex -= 1;
        if(curCmpIndex < 0){
            curCmpIndex = 0;
        }
        var nextCmpId = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.RGBOffsetGainVec[curCmpIndex];

        var nextCmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(nextCmpId);

        PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = nextCmpId;
        SliderEasyChange.call(this, curCmp, nextCmpVal);
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.rewriteDataOnly();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal2PotRGBOffsetGainefDownHandler(){
    try {
        debugG('SettingPicWteBal2PotRGBOffsetGainefUpHandler() && curCmp' + PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data);
        var curCmp = this;
        var curCmpId = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data;
        var curCmpIndex = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.RGBOffsetGainVec.indexOf(curCmpId);
        curCmpIndex += 1;
        if(curCmpIndex > 5){
            curCmpIndex = 5;
        }
        var nextCmpId = PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.RGBOffsetGainVec[curCmpIndex];

        var nextCmpVal = SettingPicWteBal2PotRGBOffsetGainGetCmpVal(nextCmpId);

        PageDataSettingPicWteBal2PotRGBOffsetGain.operateData.setting_pic_white_balance_2point_rgb_offset_gain_text_0.Data = nextCmpId;
        SliderEasyChange.call(this, curCmp, nextCmpVal);
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.rewriteDataOnly();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal2PotRGBOffsetGainGetCmpVal(cmpId){
    debugG('SettingPicWteBal2PotRGBOffsetGainGetCmpVal()');
    var cmpVal = 0;

    try {
        switch (cmpId) {
            case  'R-Offset':
                cmpVal = model.video.getRoffset();
                debugG('model.video.getRoffset(): ' + cmpVal);
                break;
            case 'G-Offset':
                cmpVal = model.video.getGoffset();
                debugG('model.video.getGoffset(): ' + cmpVal);
                break;
            case 'B-Offset':
                cmpVal = model.video.getBoffset();
                debugG('model.video.getBoffset(): ' + cmpVal);
                break;
            case  'R-Gain':
                cmpVal = model.video.getRgain();
                debugG('model.video.getRgain(): ' + cmpVal);
                break;
            case 'G-Gain':
                cmpVal = model.video.getGgain();
                debugG('model.video.getGgain(): ' + cmpVal);
                break;
            case 'B-Gain':
                cmpVal = model.video.getBgain();
                debugG('model.video.getBgain(): ' + cmpVal);
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


function SettingPicWteBal2PotRGBOffsetGainEscHandler() {
    try {
        SettingPicWhiteBalanceInit();
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.close();
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.origin.open();
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.origin.hiFocus();
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicWteBal2PotRGBOffsetGain.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}