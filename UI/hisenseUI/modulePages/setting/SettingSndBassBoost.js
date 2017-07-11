/**
 * Created by ghl on 14-6-19.
 */

function getSettingSndBassBoostData(opts) {
    SettingSndBassBoostInit();
    opts.CaE = [
        {
            "id": "setting_snd_SSB_bassboost_text_0",
            "description": "setting_snd_SSB_bassboost",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_SSB_bassboost",
            "description": "用于显示滑块",
            "CaEType": "Slider",
//            "nav": {
//                "upTo": "setting_snd_digital_audio_out_cmp",
//                "downTo": "setting_snd_tv_speaker_and_arc_cmp"
//            },
            disable: false,
            "firstFocusId": "setting_snd_SSB_bassboost_slider",
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0"
            },
            "handler": {
                "aftRightHandler": "SettingSndBassBoostRightHandel",
                "aftLeftHandler": "SettingSndBassBoostLeftHandel",
                "aftEscHandler": "SettingSndBassBoostEscHandler"
//                "aftUpHandler": "RefreshScrollAndPageInfo",
//                "aftDownHandler": "RefreshScrollAndPageInfo"
            },
            "CaE": [
                {
                    "id": "setting_snd_SSB_bassboost_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_snd_SSB_bassboost_slider",
                    "description": "滑块",
                    "CaEType": "div",
//                    "nav": {
//                        "upTo": "setting_snd_digital_audio_out_cmp",
//                        "downTo": "setting_snd_tv_speaker_and_arc_cmp"
//                    },
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}
                },
                {
                    "id": "setting_snd_SSB_bassboost_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_snd_SSB_bassboost_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_snd_SSB_bassboost_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_snd_SSB_bassboost_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_snd_SSB_bassboost_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_snd_SSB_bassboost_slider_line",
                "sliderId": "setting_snd_SSB_bassboost_slider",
                "completeId": "setting_snd_SSB_bassboost_slider_complete",
                "sliderSpanId": "setting_snd_SSB_bassboost_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_snd_SSB_bassboost_min_val",
                "sliderMaxValueId": "setting_snd_SSB_bassboost_max_val"
            }

        }
    ];
    return PageDataSettingSndBassBoost;
}

function onSettingSndBassBoostOpen() {

}
function onSettingSndBassBoostClose() {

}
function onSettingSndBassBoostDestroy(){
    try {
        hiWebOsFrame.SettingSndBassBoost = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndBassBoostEscHandler(){
    try{
        hiWebOsFrame.SettingSndBassBoost.close();
        hiWebOsFrame.SettingSndBassBoost.origin.open();
        hiWebOsFrame.SettingSndBassBoost.origin.hiFocus();
        hiWebOsFrame.SettingSndBassBoost.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndBassBoost.destroy();
    } catch (ex){
        debugE(ex.message);
    }

}

PageDataSettingSndBassBoost = {
    "setting_snd_SSB_bassboost_text_0": {Data: "Bass Boost"},
    "setting_snd_SSB_SRS_cmp": {
        Data: {
            switchType: true,
            switchText: ''
        },
        disable: false

    },
    "setting_snd_SSB_bassboost": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: -5, max: 5},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }
    },
    rewrite: "SettingSndBassBoostRewrite",

    "operateData": {
        "setting_snd_SSB_SRS_text_0": {Data: "SRS Effect"},
        "setting_snd_SSB_subwoofer_text_0": {Data: "Sub Woofer"},
        "setting_snd_SSB_bassboost_text_0": {Data: "Bass Boost"},
        "setting_snd_SSB_bassboost": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: -5, max: 5},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            }
        }
    },
    "langData": {
        "switchOn": ["On", "开"],
        "switchOFF": ["Off", "关"],
        "SRS Effect": ["SRS Effect"],
        "Sub Woofer": ["Sub Woofer"],
        "Bass Boost": ["Bass Boost"]
    }
};

function SettingSndBassBoostRewrite(pageData) {

    try {
//        var SRSMode = pageData.operateData.setting_snd_SSB_SRS_cmp.switchType;
//        FlipSwitchRewriteEasy.call(this, pageData, "setting_snd_SSB_SRS_cmp", SRSMode);
//
//        debugG("SRSMode" + SRSMode);
//
//        var SubWooferMode = pageData.operateData.setting_snd_SSB_subwoofer_cmp.switchType;
//        FlipSwitchRewriteEasy.call(this, pageData, "setting_snd_SSB_subwoofer_cmp", SubWooferMode);
//        debugG("SubWooferMode" + SubWooferMode);

        var BassBoostVal = pageData.operateData.setting_snd_SSB_bassboost.Data.setDefalutValue;
        SliderRewriteEasy.call(this, pageData, "setting_snd_SSB_bassboost", BassBoostVal);
        debugG("BassBoostVal" + BassBoostVal);

//        if (true) {
//            EnableSubWooferBassBoostFeather.call(this);
//        } else {
//            DisableSubWooferBassBoostFeather.call(this);
//        }
    } catch (ex) {
        debugE(ex.message);
    }

}
//
//function SettingSndSRSFlip() {
//    try {
//        var SRSEnable = model.sound.getSrs();
//        model.sound.setSrs(Bool2Num(!SRSEnable));
//        var SRSCmp = this;
//        FlipSwitchEasyChange.call(this, SRSCmp, !SRSEnable);
//
//        //修改二级页面
//        if (typeof PageDataFirstCls != UNDEFINED_DEFSTR) {
//            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[4].setting_first_content_text2.Data = (Bool2Num(!SRSEnable) == 0 ? "Off" : "On");
//        }
//
//        SetRecentUse("SRS",1,4);    //功能已删除
//
//    } catch (ex) {
//        debugE(ex.message);
//    }
//
//}
//
//function SettingSndSubWooferFlip() {
//    try {
//        var SubWooferEnable = model.sound.getSubwoofer();
//        model.sound.setSubwoofer(Bool2Num(!SubWooferEnable));
//        var SubWooferCmp = this;
//        FlipSwitchEasyChange.call(this, SubWooferCmp, !SubWooferEnable);
//        if (typeof PageDataFirstCls != UNDEFINED_DEFSTR) {
//            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[5].setting_first_content_text2.Data = (Bool2Num(!SubWooferEnable) == 0 ? "Off" : "On");
//        }
//
//        SetRecentUse("SubWoofer",1,5);      //功能已删除
//    } catch (ex) {
//        debugE(ex.message);
//    }
//
//}

function SettingSndBassBoostRightHandel() {
    try {
        var BassBoostCmp = this;
        var BassBoostVal =  BassBoostCmp.page.operateData[BassBoostCmp.id].Data.setDefalutValue;
        debugG("BassBoostVal:" + BassBoostVal);
        BassBoostVal += 1;
        if (BassBoostVal < -5) {
            BassBoostVal = -5;
        }
        if (BassBoostVal > 5) {
            BassBoostVal = 5;
        }

        SliderEasyChange.call(this, BassBoostCmp, BassBoostVal);
        model.sound.setBassBoost(BassBoostVal);

        //修改二级列表
//        if(typeof PageDataFirstCls != UNDEFINED_DEFSTR){
//            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.BassBoost].setting_first_content_text2.Data = BassBoostVal;
//        }

        //SetRecentUse("BassBoost",1,FirPageSndIdx.SndBassBoost);      //功能已删除
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndBassBoostLeftHandel() {
    try {
        var BassBoostCmp = this;
        var BassBoostVal =  BassBoostCmp.page.operateData[BassBoostCmp.id].Data.setDefalutValue;
        debugG("BassBoostVal:" + BassBoostVal);
        BassBoostVal -= 1;
        if (BassBoostVal < -5) {
            BassBoostVal = -5;
        }
        if (BassBoostVal > 5) {
            BassBoostVal = 5;
        }

        SliderEasyChange.call(this, BassBoostCmp, BassBoostVal);
        model.sound.setBassBoost(BassBoostVal);
        //修改二级列表
//        if(typeof PageDataFirstCls != UNDEFINED_DEFSTR){
//            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[6].setting_first_content_text2.Data = BassBoostVal;
//        }

        //SetRecentUse("BassBoost",1,FirPageSndIdx.SndBassBoost);      //功能已删除
    } catch (ex) {
        debugE(ex.message);
    }
}


function EnableSubWooferBassBoostFeather() {
    $("#setting_snd_SSB_subwoofer_text_0").attr("class", "setting_snd_SSB_SRS_text_0");
    $("#setting_snd_subwoofer_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
    $("#setting_snd_SSB_bassboost_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
    $("#setting_snd_bassboost_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
    //TODO 其他操作
}

function DisableSubWooferBassBoostFeather() {
    $("#setting_snd_SSB_subwoofer_text_0").attr("class", "setting_snd_SSB_SRS_text_0_disable");
    $("#setting_snd_subwoofer_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
    $("#setting_snd_SSB_bassboost_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
    $("#setting_snd_bassboost_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
    $("#setting_snd_SSB_bassboost_text_1").attr("class", "setting_snd_equalizer_hz_0_text_1_disable");

    //TODO 其他操作
}

