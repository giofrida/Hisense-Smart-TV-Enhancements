function getSettingPicWteBal10PotRGBData(opts) {
    opts.CaE = [
        {
            "id": "setting_pic_white_balance_10point_rgb_text_0",
            "CaEType": "span",
            "description": "独立调节 Text"
        },

        {
            "id": "setting_pic_white_balance_10point_rgb",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_white_balance_10point_rgb_slider",
//                    "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicWteBal10PotRGBRightHandler",
                "aftLeftHandler": "SettingPicWteBal10PotRGBLeftHandler",
                "aftEscHandler": "SettingPicWteBal10PotRGBEscHandler",
                "befUpHandler": "SettingPicWteBal10PotRGBefUpHandler",
                "befDownHandler": "SettingPicWteBal10PotRGBefDownHandler"
            },
            "CaE": [
                {
                    "id": "setting_pic_white_balance_10point_rgb_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_white_balance_10point_rgb_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "",
                        "downTo": ""
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_pic_white_balance_10point_rgb_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_white_balance_10point_rgb_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_white_balance_10point_rgb_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_white_balance_10point_rgb_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_white_balance_10point_rgb_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_white_balance_10point_rgb_slider_line",
                "sliderId": "setting_pic_white_balance_10point_rgb_slider",
                "completeId": "setting_pic_white_balance_10point_rgb_slider_complete",
                "sliderSpanId": "setting_pic_white_balance_10point_rgb_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_white_balance_10point_rgb_min_val",
                "sliderMaxValueId": "setting_pic_white_balance_10point_rgb_max_val"
            }
        }

    ];

    return PageDataSettingPicWteBal10PotRGB;
}
var PageDataSettingPicWteBal10PotRGB = {
    setting_pic_white_balance_10point_rgb_text_0: {Data: "Red"},

    "setting_pic_white_balance_10point_rgb": {
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
        setting_pic_white_balance_10point_rgb_text_0: {Data: "Red"},
        RGBVec: ['Red', 'Green', 'Blue'],
        "setting_pic_white_balance_10point_rgb": {
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
        "Red": [],
        "Green": [],
        "Blue": []
    },
    rewrite: SettingPicWteBal10PotRGBRewrite
}

function SettingPicWteBal10PotRGBRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_pic_white_balance_10point_rgb_slider_cmp').css('float', dir_1)

        PageDataSettingPicWteBal10PotRGB.setting_pic_white_balance_10point_rgb_text_0.Data = PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data;

        var curCmpVal = pageData.operateData.setting_pic_white_balance_10point_rgb.Data.setDefalutValue; //获取主机音量

        SliderRewriteEasy.call(this, pageData, "setting_pic_white_balance_10point_rgb", curCmpVal);

        SettingPicWteBal10PotRGBRefreshArrow(PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal10PotRGBRefreshArrow(cmpId) {
    try {
        try {
            $("#setting_pic_white_balance_10point_rgb_uparrow").css("visibility", "visible");
            $("#setting_pic_white_balance_10point_rgb_downarrow").css("visibility", "visible");
            if(cmpId == 'Red'){
                $("#setting_pic_white_balance_10point_rgb_uparrow").css("visibility", "hidden");
            }
            if(cmpId == 'Blue'){
                $("#setting_pic_white_balance_10point_rgb_downarrow").css("visibility", "hidden");
            }

        } catch (ex) {
            debugE(ex.message);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function onSettingPicWteBal10PotRGBDestroy() {
    try {
        hiWebOsFrame.SettingPicWteBal10PotRGB = null;
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal10PotRGBLeftHandler() {
    try {
        var Cmp = this;
        var rgbVal = PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb.Data.setDefalutValue;
        debugG("PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb.Data.setDefalutValue: " + rgbVal);
        rgbVal -= 1;
        if (rgbVal < -10) {
            rgbVal = -10;
        }
        if (rgbVal > 10) {
            rgbVal = 10;
        }

        SliderEasyChange.call(this, Cmp, rgbVal);

        SettingPicWteBal10PotRGBSetCmpVal(PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data, rgbVal);

    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal10PotRGBRightHandler() {
    try {
        var Cmp = this;
        var rgbVal = PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb.Data.setDefalutValue;
        debugG("PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb.Data.setDefalutValue: " + rgbVal);
        rgbVal += 1;
        if (rgbVal < -10) {
            rgbVal = -10;
        }
        if (rgbVal > 10) {
            rgbVal = 10;
        }

        SliderEasyChange.call(this, Cmp, rgbVal);

        SettingPicWteBal10PotRGBSetCmpVal(PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data, rgbVal);

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal10PotRGBSetCmpVal(cmpId, cmpVal) {
    try {
        debugG('SettingPicWteBal10PotRGBSetCmpVal()');
        switch (cmpId) {
            case  'Red':
                model.video.setRed(cmpVal);
                debugG('model.video.setRed(' + cmpVal + ')');
                break;
            case 'Green':
                model.video.setGreen(cmpVal);
                debugG('model.video.setGreen(' + cmpVal + ')');
                break;
            case 'Blue':
                model.video.setBlue(cmpVal);
                debugG('model.video.setBlue(' + cmpVal + ')');
                break;
            default :
                debugG('SettingPicWteBal10PotRGBSetCmpVal Error cmpId!!');
                break;
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal10PotRGBefUpHandler(){
    try {
        debugG('SettingPicWteBal10PotRGBefUpHandler() && curCmp' + PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data);
        var curCmp = this;
        var curCmpId = PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data;
        var curCmpIndex = PageDataSettingPicWteBal10PotRGB.operateData.RGBVec.indexOf(curCmpId);
        curCmpIndex -= 1;
        if(curCmpIndex < 0){
            curCmpIndex = 0;
        }
        var nextCmpId = PageDataSettingPicWteBal10PotRGB.operateData.RGBVec[curCmpIndex];

        var nextCmpVal = SettingPicWteBal10PotRGBGetCmpVal(nextCmpId);

        PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data = nextCmpId;
        SliderEasyChange.call(this, curCmp, nextCmpVal);
        hiWebOsFrame.SettingPicWteBal10PotRGB.rewriteDataOnly();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal10PotRGBefDownHandler(){
    try {
        debugG('SettingPicWteBal10PotRGBefUpHandler() && curCmp' + PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data);
        var curCmp = this;
        var curCmpId = PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data;
        var curCmpIndex = PageDataSettingPicWteBal10PotRGB.operateData.RGBVec.indexOf(curCmpId);
        curCmpIndex += 1;
        if(curCmpIndex > 2){
            curCmpIndex = 2;
        }
        var nextCmpId = PageDataSettingPicWteBal10PotRGB.operateData.RGBVec[curCmpIndex];

        var nextCmpVal = SettingPicWteBal10PotRGBGetCmpVal(nextCmpId);

        PageDataSettingPicWteBal10PotRGB.operateData.setting_pic_white_balance_10point_rgb_text_0.Data = nextCmpId;
        SliderEasyChange.call(this, curCmp, nextCmpVal);
        hiWebOsFrame.SettingPicWteBal10PotRGB.rewriteDataOnly();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal10PotRGBGetCmpVal(cmpId){
    debugG('SettingPicWteBal10PotRGBGetCmpVal()');
    var cmpVal = 0;

    try {
        switch (cmpId) {
            case  'Red':
                cmpVal = model.video.getRed();
                debugG('model.video.getRed(): ' + cmpVal);
                break;
            case 'Green':
                cmpVal = model.video.getGreen();
                debugG('model.video.getGreen(): ' + cmpVal);
                break;
            case 'Blue':
                cmpVal = model.video.getBlue();
                debugG('model.video.getBlue(): ' + cmpVal);
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


function SettingPicWteBal10PotRGBEscHandler() {
    try {
        SettingWhiteBalance10PointInit();
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        hiWebOsFrame.SettingPicWteBal10PotRGB.close();
        hiWebOsFrame.SettingPicWteBal10PotRGB.origin.open();
        hiWebOsFrame.SettingPicWteBal10PotRGB.origin.hiFocus();
        hiWebOsFrame.SettingPicWteBal10PotRGB.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicWteBal10PotRGB.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}