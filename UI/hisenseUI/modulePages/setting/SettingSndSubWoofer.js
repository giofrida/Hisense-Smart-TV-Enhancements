/**
 * Created by ghl on 14-6-19.
 */

function getSettingSndSubWooferData(opts) {
    //SettingSndSubWooferInit();
    opts.CaE = [
        {
            "id": "setting_snd_subwoofer_title",
            "description": "setting_snd_subwoofer_title",
            "CaEType": "span"
        },
        {
            id: 'setting_snd_subwoofer_ul',
            description: 'List Item',
            CaEType: 'Ul',
            classes: {
                "normal": "setting_snd_subwoofer_li_normal",
                "focus": "setting_snd_subwoofer_li_focus",
                "dataSelected": "setting_snd_subwoofer_li_dataselected"
            },
            disable: false,
            handler: {
                aftEnterHandler: "SettingSndSubWooferEnterHandler",
                aftEscHandler: "SettingSndSubWooferEscHandler"
//                aftUpHandler: "SettingSndSubWooferUpHandler",
//                aftDownHandler: "SettingSndSubWooferDownHandler"
            },
            oriCaE: [
                {
                    "id": "subwoofer_img",
                    "description": "名称",
                    classes: {
                        "normal": "subwoofer_img_normal",
                        "focus": "subwoofer_img_focus",
                        "dataSelected": "subwoofer_img_dataselected"
                    },
                    "CaEType": "img"
                },
                {
                    "id": "subwoofer_item",
                    "description": "名称",
                    classes: {
                        "normal": "subwoofer_item_normal",
                        "focus": "subwoofer_item_focus",
                        "dataSelected": "subwoofer_item_dataselected"
                    },

                    "CaEType": "div"
                }
            ],
            UlConfig: {
                "UlDataItem": [ "subwoofer_img", "subwoofer_item"],
                "PageSize": 2
            },
            "SelectedIndex": 0

        }
    ];
    return PageDataSettingSndSubWoofer;
}

function onSettingSndSubWooferOpen() {

}
function onSettingSndSubWooferClose() {

}
function onSettingSndSubWooferDestroy() {
    try {
        hiWebOsFrame.SettingSndBassBoost = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndSubWooferEscHandler() {
    try {
        hiWebOsFrame.SettingSndSubWoofer.close();
        hiWebOsFrame.SettingSndSubWoofer.origin.open();
        hiWebOsFrame.SettingSndSubWoofer.origin.hiFocus();
        hiWebOsFrame.SettingSndSubWoofer.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndSubWoofer.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

}

var PageDataSettingSndSubWoofer = {
    "setting_snd_subwoofer_title": {Data: "Subwoofer"},
    "setting_snd_subwoofer_ul": {
        SelectedIndex: 0,
        DataSelectedIndex: 0,
        Data: [
            {
                "subwoofer_img": {Data: "img/skbLan-checked.png"},
                "subwoofer_item": {Data: "On"}
            },
            {
                "subwoofer_img": {Data: "img/skbLan-unchecked.png"},
                "subwoofer_item": {Data: "Off"}
            }
        ]
    },

    rewrite: "SettingSndSubWooferRewrite",

    "operateData": {
        "setting_snd_subwoofer_ul": {
            SelectedIndex: 0,
            DataSelectedIndex: 0,
            Data: [
                {
                    "subwoofer_img": {Data: "img/skbLan-checked.png"},
                    "subwoofer_item": {Data: "On"}
                },
                {
                    "subwoofer_img": {Data: "img/skbLan-unchecked.png"},
                    "subwoofer_item": {Data: "Off"}
                }
            ]
        },
        "langData": {
            "switchOn": ["On", "开"],
            "switchOFF": ["Off", "关"],
            "SRS Effect": ["SRS Effect"],
            "Sub Woofer": ["Sub Woofer"],
            "Bass Boost": ["Bass Boost"]
        }
    }
};


function SettingSndSubWooferRewrite(pageData) {

    try {

        var subwoofer = pageData.operateData.setting_snd_subwoofer_ul.DataSelectedIndex;

        NaviBarRewriteEasy(pageData, "setting_snd_subwoofer_ul", subwoofer);

        if (1 == subwoofer) {
            pageData.setting_snd_subwoofer_ul.Data[0].subwoofer_img.Data = "img/skbLan-unchecked.png";
            pageData.setting_snd_subwoofer_ul.Data[1].subwoofer_img.Data = "img/skbLan-checked.png";
        } else {
            pageData.setting_snd_subwoofer_ul.Data[0].subwoofer_img.Data = "img/skbLan-checked.png";
            pageData.setting_snd_subwoofer_ul.Data[1].subwoofer_img.Data = "img/skbLan-unchecked.png";
        }
//        var SRSMode = pageData.operateData.setting_snd_SSB_SRS_cmp.switchType;
//        FlipSwitchRewriteEasy.call(this, pageData, "setting_snd_SSB_SRS_cmp", SRSMode);
//
//        debugG("SRSMode" + SRSMode);
//
//        var SubWooferMode = pageData.operateData.setting_snd_SSB_subwoofer_cmp.switchType;
//        FlipSwitchRewriteEasy.call(this, pageData, "setting_snd_SSB_subwoofer_cmp", SubWooferMode);
//        debugG("SubWooferMode" + SubWooferMode);

//        var BassBoostVal = pageData.operateData.setting_snd_SSB_bassboost.Data.setDefalutValue;
//        SliderRewriteEasy.call(this, pageData, "setting_snd_SSB_bassboost", BassBoostVal);
//        debugG("BassBoostVal" + BassBoostVal);

//        if (true) {
//            EnableSubWooferBassBoostFeather.call(this);
//        } else {
//            DisableSubWooferBassBoostFeather.call(this);
//        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndSubWooferEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var subWooferCmp = this;
            debugG("this.SelectedIndex: " + this.SelectedIndex);
            var subwoofer = this.SelectedIndex;
            NaviBarEasyChange(subWooferCmp, subwoofer);
            var subwooferTmp = SubWooferUI2Mid(subwoofer);
            debugG("model.sound.setSubwoofer(" + subwooferTmp + ")");
            model.sound.setSubwoofer(subwooferTmp);

            //SetRecentUse("SubWoofer", 1, FirPageSndIdx.SndSubWoofer);
        }
        this.page.rewriteDataOnly();
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

//
//function EnableSubWooferBassBoostFeather() {
//    $("#setting_snd_SSB_subwoofer_text_0").attr("class", "setting_snd_SSB_SRS_text_0");
//    $("#setting_snd_subwoofer_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
//    $("#setting_snd_SSB_bassboost_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
//    $("#setting_snd_bassboost_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
//
//    //TODO 其他操作
//}
//
//function DisableSubWooferBassBoostFeather() {
//    $("#setting_snd_SSB_subwoofer_text_0").attr("class", "setting_snd_SSB_SRS_text_0_disable");
//    $("#setting_snd_subwoofer_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
//    $("#setting_snd_SSB_bassboost_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
//    $("#setting_snd_bassboost_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
//    $("#setting_snd_SSB_bassboost_text_1").attr("class", "setting_snd_equalizer_hz_0_text_1_disable");
//
//    //TODO 其他操作
//}

