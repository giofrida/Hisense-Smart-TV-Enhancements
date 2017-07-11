/**
 * Created by ghl on 14-6-19.
 */

function getSettingSndHeadPhoneData(opts) {
    SettingSndHeadPhonePageInit();
    opts.CaE = [
        {
            "id": "setting_snd_HP_headphone_switch_text_0",
            "CaEType": "span",
            "description": "独立调节 Text"
        },
        {
            "id": "setting_snd_HP_headphone_volume_text_0",
            "CaEType": "span",
            "description": "耳机音量 Text0"
        },

        {
            "id": "setting_snd_HP_headphone_switch_cmp",
            "description": "耳机 开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_snd_HP_headphone_volume",
                "downTo": "setting_snd_HP_headphone_volume"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingSndHeadPhoneFlip',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingSndHeadPhoneEscHandler"
            }
        },
        {
            "id": "setting_snd_HP_headphone_volume",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_snd_HP_headphone_volume_slider",
//                    "nav": {  "downTo": "", "upTo": "setting_pic_backLightItem"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingSndHeadPhoneVolRightHandler",
                "aftLeftHandler": "SettingSndHeadPhoneVolLeftHandler",
                "aftEscHandler": "SettingSndHeadPhoneEscHandler"
            },
            "CaE": [
                {
                    "id": "setting_snd_HP_headphone_volume_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_HP_headphone_volume_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_snd_HP_headphone_switch_cmp",
                        "downTo": "setting_snd_HP_headphone_switch_cmp"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "setting_snd_HP_headphone_volume_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_HP_headphone_volume_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_HP_headphone_volume_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_HP_headphone_volume_slider_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_HP_headphone_volume_slider_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_HP_headphone_volume_slider_line",
                "sliderId": "setting_snd_HP_headphone_volume_slider",
                "completeId": "setting_snd_HP_headphone_volume_slider_complete",
                "sliderSpanId": "setting_snd_HP_headphone_volume_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_HP_headphone_volume_slider_min_val",
                "sliderMaxValueId": "setting_snd_HP_headphone_volume_slider_max_val"
            }

        }

    ];
    return PageDataSettingSndHeadPhone;
}

function onSettingSndHeadPhoneOpen() {

}

function onSettingSndHeadPhoneDestroy() {
    try {
        hiWebOsFrame.SettingSndHeadPhonePage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndHeadPhoneEscHandler() {

    try {
        CloseSndHelpInfoPage();
        hiWebOsFrame.SettingSndHeadPhonePage.close();
        hiWebOsFrame.SettingSndHeadPhonePage.origin.open();
        if (!!hiWebOsFrame.settingsysqS && hiWebOsFrame.settingsysqS.operateData.cursubselect == "headphoneVolume") {
            hiWebOsFrame.settingsysqS.getCaE('setting_headphone_ul').setSelectedIndex(0);
            debugRM("Exit to QS. Focus On Headphone Volume");
        }
        hiWebOsFrame.SettingSndHeadPhonePage.origin.hiFocus();
        hiWebOsFrame.SettingSndHeadPhonePage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndHeadPhonePage.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

}

var PageDataSettingSndHeadPhone = {
    "setting_snd_HP_headphone_switch_text_0": {Data: "Separate control"},
    "setting_snd_HP_headphone_volume_text_0": {Data: "Headphone Volume"},
    "setting_snd_HP_headphone_switch_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        },
        disable: false
    },
    "setting_snd_HP_headphone_volume": {
        disable: false,
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 20   //显示的数值   默认设置为电视音量？
        }
//        disable: false
    },
    operateData: {
        "setting_snd_HP_headphone_switch_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "setting_snd_HP_headphone_volume": {
            disable: false,
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 20   //显示的数值   默认设置为电视音量？
            }

        },
        helpInfo:{
            title: "Headphone Volume",
            content: "Independent adjust the volume of audio out device."
        }
    },

    langData: {
        "Separate control": ["Separate control"],
        "Headphone Volume": ["Headphone Volume"],
        "On": ["On"],
        "Off": ["Off"]
    },
    rewrite: "SettingSndHeadPhonePageRewrite"

};


function SettingSndHeadPhonePageRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_snd_HP_headphone_switch_cmp').css('float', dir_1 );
        $('#setting_snd_HP_headphone_volume_slider_cmp').css('float', dir_1);

    } catch (ex) {
        debugE(ex.message);
    }

    try {
        debugG("sndHeadphoneRewrite Start");
//        var isHeadPhoneFlwTV = model.sound.getHeadphoneVolumeSyncTv();

        //switch 为true时是unflow，为 false时是flow
        //var hpSwState = pageData.operateData.setting_snd_HP_headphone_switch_cmp.switchType;
        //debugG("isHeadPhoneFlwTV " + Bool2Num(!hpSwState));
        //
        //FlipSwitchRewriteEasy.call(this, pageData, "setting_snd_HP_headphone_switch_cmp", hpSwState);


        var headPhoneVolVal = pageData.operateData.setting_snd_HP_headphone_volume.Data.setDefalutValue; //获取主机音量

        SliderRewriteEasy.call(this, pageData, "setting_snd_HP_headphone_volume", headPhoneVolVal);


        pageData.operateData.setting_snd_HP_headphone_volume.disable = false;

        pageData.setting_snd_HP_headphone_volume.disable = false;
        EnableSettingSndHeadPhoneVolStyle();


        //if (false  && hpSwState == false) { //开关为关时
        //    pageData.operateData.setting_snd_HP_headphone_volume.disable = true;
        //
        //    pageData.setting_snd_HP_headphone_volume.disable = true;
        //    DisableSettingSndHeadPhoneVolStyle();
        //} else {
        //    pageData.operateData.setting_snd_HP_headphone_volume.disable = false;
        //
        //    pageData.setting_snd_HP_headphone_volume.disable = false;
        //    EnableSettingSndHeadPhoneVolStyle();
        //}
        debugG("sndHeadphoneRewrite End");

    } catch (ex) {
        debugE(ex.message);
    }
}

/**
 *
 * @constructor
 */
function DisableSettingSndHeadPhoneVolStyle() {
    $("#setting_snd_HP_headphone_volume_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
    $("#setting_snd_headphone_volume_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
//    $("#setting_snd_HP_headphone_volume_text_1").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
}

function EnableSettingSndHeadPhoneVolStyle() {
    $("#setting_snd_HP_headphone_volume_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
    $("#setting_snd_headphone_volume_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
//    $("#setting_snd_HP_headphone_volume_text_1").attr("class", "setting_snd_equalizer_hz_0_text_0");
}


/**
 * headphone flip
 * @constructor
 */
function SettingSndHeadPhoneFlip() {
    try {

        var isHeadPhoneFlwTV = model.sound.getHeadphoneVolumeSyncTv();
        var hpSwState = !isHeadPhoneFlwTV

        model.sound.setHeadphoneVolumeSyncTv(Bool2Num(!isHeadPhoneFlwTV));


        var headPhoneFlipCmp = this;
        FlipSwitchEasyChange.call(this, headPhoneFlipCmp, !hpSwState);


        var headPhoneVolCmp = this.page.getCaE("setting_snd_HP_headphone_volume");

        if (!hpSwState == false) { //开关为关时

            var headPhoneVolVal = model.sound.getHeadphoneVolume(); //
            headPhoneVolCmp.hiSliderValue(headPhoneVolVal);


            this.page.data.setting_snd_HP_headphone_volume.disable = true;
            headPhoneVolCmp.disabled();
            DisableSettingSndHeadPhoneVolStyle();

        } else {    //开关为开时

            this.page.data.setting_snd_HP_headphone_volume.disable = false;
            headPhoneVolCmp.enabled();
            EnableSettingSndHeadPhoneVolStyle();
            var headPhoneVolVal = model.sound.getHeadphoneVolume(); //获取耳机音量
            headPhoneVolCmp.hiSliderValue(headPhoneVolVal);

        }
        SetRecentUse("Separate control", 1, FirPageSndIdx.SndHeadphoneVolume);

    }
    catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndHeadPhoneVolRightHandler() {
    try {
        var Cmp = this;
//        var headPhoneVolVal = model.sound.getHeadphoneVolume();
        var headPhoneVolVal = PageDataSettingSndHeadPhone.operateData.setting_snd_HP_headphone_volume.Data.setDefalutValue;
        debugG("PageDataSettingSndHeadPhone.operateData.setting_snd_HP_headphone_volume.Data.setDefalutValue: " + headPhoneVolVal);
        headPhoneVolVal += 1;
        if (headPhoneVolVal < 0) {
            headPhoneVolVal = 0;
        }
        if (headPhoneVolVal > 100) {
            headPhoneVolVal = 100;
        }

        SliderEasyChange.call(this, Cmp, headPhoneVolVal);
        model.sound.setHeadphoneVolume(headPhoneVolVal);
        SetRecentUse("Headphone Volume", 1, FirPageSndIdx.SndHeadphoneVolume);
//        if (typeof  PageDataFirstCls != UNDEFINED_DEFSTR) {
//            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.HeadphoneVolume].setting_first_content_text2.Data = headPhoneVolVal;
//        }


    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndHeadPhoneVolLeftHandler() {
    try {
        var Cmp = this;
//        var headPhoneVolVal = model.sound.getHeadphoneVolume();
        var headPhoneVolVal = PageDataSettingSndHeadPhone.operateData.setting_snd_HP_headphone_volume.Data.setDefalutValue;
        debugG("PageDataSettingSndHeadPhone.operateData.setting_snd_HP_headphone_volume.Data.setDefalutValue: " + headPhoneVolVal);
        headPhoneVolVal -= 1;
        if (headPhoneVolVal < 0) {
            headPhoneVolVal = 0;
        }
        if (headPhoneVolVal > 100) {
            headPhoneVolVal = 100;
        }

        SliderEasyChange.call(this, Cmp, headPhoneVolVal);
        model.sound.setHeadphoneVolume(headPhoneVolVal);


//        if (typeof  PageDataFirstCls != UNDEFINED_DEFSTR) {
//            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.HeadphoneVolume].setting_first_content_text2.Data = headPhoneVolVal;
//        }
        SetRecentUse("Headphone Volume", 1, FirPageSndIdx.SndHeadphoneVolume);

    } catch (ex) {
        debugE(ex.message);
    }
}
