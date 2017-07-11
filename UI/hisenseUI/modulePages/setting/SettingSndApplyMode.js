/**
 * Created by ghl on 14-6-18.
 */

//created by zjm on 15-10-20
//need a function to change the snd mode from menutree
function getSettingSndApplyModeData(opts) {
    SettingSndApplyModeInit();
    opts.CaE = [
        {
            "id": "setting_snd_apply_mode_title_text_0",
            "description": "apply snd mode Title 0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_apply_mode_title_text_1",
            "description": "apply snd mode Title 1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_apply_mode_cmp",
            "description": "apply Sound Mode de ul",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_apply_mode_li_normal",
                "focus": "setting_snd_apply_mode_li_focus",
                "disable": "",
                "dataSelected": "setting_snd_apply_mode_li_selected_no_focus"
            },
            "handler": {
                "aftEnterHandler": "ApplySoundModeEnterHandler",
                //"aftRightHandler": "ApplySoundModeAftRightHandler",
                //"aftLeftHandler": "ApplySoundModeAftLeftHandler",
                "aftEscHandler": "ApplySoundModeEscHandler"
            },
            "nav": {"leftTo": "", "downTo": "", "rightTo": ""},
            disable: false,
            "oriCaE": [
//
                {
                    "id": "setting_snd_apply_mode_item_text",
                    "description": "apply Sound Mode 的文字",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_apply_mode_item_text_normal", "focus": "setting_snd_apply_mode_item_text_normal", "disable": "", "selected": "setting_snd_apply_mode_item_text_focus"
                    }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
//                    "setting_snd_mode_item_img",
                    "setting_pic_zoom_span"
                    //这里不会改
                ]
            }
        }
    ];
    return PageDataSettingSndApplyMode;
}

var PageDataSettingSndApplyMode;
PageDataSettingSndApplyMode = {
    "setting_snd_apply_mode_title_text_0": {Data: "Apply Sound Mode"},
    "setting_snd_apply_mode_title_text_1": {Data: ""},

    setting_snd_apply_mode_cmp: {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                /*"setting_snd_mode_item_img": {Data: "img/SndModeStandardUnsel.png"},*/
                "setting_snd_apply_mode_item_text": {Data: "All Source"}
            },
            {
//                "setting_snd_mode_item_img": {Data: "img/SndModeMusicUnsel.png"},
                "setting_snd_apply_mode_item_text": {Data: "Current Source"}
            }
        ]
    },
    operateData: {
        "SndModeMarqueeLength": 10,
        "setting_snd_apply_mode_title_text_0": {Data: "Apply Sound Mode"},
        "setting_snd_apply_mode_title_text_1": {Data: ""},
        setting_snd_apply_mode_cmp: {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
//                    "setting_snd_mode_item_img": {Data: "img/SndModeStandardUnsel.png"},
                    "setting_snd_apply_mode_item_text": {Data: "All Source"}
                },
                {
//                    "setting_snd_mode_item_img": {Data: "img/SndModeMusicUnsel.png"},
                    "setting_snd_apply_mode_item_text": {Data: "Current Source"}
                }
            ]
        },
//
        modeEnum: ["All source", "Current source"],
        helpInfo:{
            title: "Apply Sound Mode",
            content: "Adjust current sound mode apply to all source or just current source."
        }
    },
    "langData": {
        "Apply Sound Mode": ["Apply Sound Mode"],
        "All Source": ["All Source"],
        "Current Source": ["Current Source"]

    },
    rewrite: "SettingSndApplyModeRewrite"
};


function SettingSndApplyModeRewrite(pageData) {
    try {
        var sndModeEnum = pageData.operateData.setting_snd_apply_mode_cmp.DataSelectedIndex;
//        pageData.setting_snd_mode_title_text_1.Data = pageData.operateData.modeEnum[sndModeEnum];
        NaviBarRewriteEasy.call(this, pageData, "setting_snd_apply_mode_cmp", sndModeEnum);
    } catch (ex) {
        debugE(ex.message);
    }

}

function ApplySoundModeEscHandler() {
    try {
        CloseSndHelpInfoPage();
        hiWebOsFrame.SettingSndApplyModePage.close();
        hiWebOsFrame.SettingSndApplyModePage.origin.open();
        hiWebOsFrame.SettingSndApplyModePage.origin.hiFocus();
        hiWebOsFrame.SettingSndApplyModePage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndApplyModePage.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}


//需要加底层和上层
function ApplySoundModeEnterHandler() {
    try {
        var sndModeCmp = this;
        var sndModeSelIdx = sndModeCmp.SelectedIndex;
        debugG("SELIDX_" + sndModeSelIdx);
        if (sndModeCmp.DataSelectedIndex != sndModeSelIdx) {
            sndModeCmp.DataSelectedIndex = sndModeSelIdx;

            sndModeCmp.page.operateData[sndModeCmp.id].DataSelectedIndex = sndModeSelIdx;
            sndModeCmp.page.operateData[sndModeCmp.id].SelectedIndex = sndModeSelIdx;
            this.page.rewriteDataOnly();

            SetRecentUse("Apply Sound Mode", 1, FirPageSndIdx.SndApplyMode);

            model.sound.setApplyMode(({0: 1, 1: 0})[this.SelectedIndex]);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndApplyModeOpen() {
    try {
        DBG_INFO("onSettingSndApplyModeOpen");
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndApplyModeDestroy() {
    try {
        hiWebOsFrame.SettingSndApplyModePage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function ApplySoundModeAftLeftHandler() {
    try {
        for (var i = 0; i < 2; i++) {
            SoundModeIndexDelMarquee(i);
        }
        SoundModeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function ApplySoundModeAftRightHandler() {
    try {
        for (var i = 0; i < 2; i++) {
            SoundModeIndexDelMarquee(i);
        }
        SoundModeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

