function getSettingPicApplyModeData(opts) {
    SettingPicApplyModeInit()
    opts.CaE = [
        {
            "id": "setting_pic_apply_mode_text_0",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_apply_mode_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_audio_type_cmp_li_normal",
                "focus": "setting_snd_SAS_audio_type_cmp_li_focus",
                "disable": "setting_snd_SAS_audio_type_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_audio_type_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_audio_type_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicApplyModeEnterHandler",
                "aftEscHandler": "SettingPicApplyModeEscHandler"
            },
            "nav": {},

            "oriCaE": [
                {
                    "id": "setting_pic_apply_mode_cmp_item",
                    "description": "setting_pic_apply_mode_cmp_item",
                    "CaEType": "div"
                },
                {
                    "id": "setting_pic_apply_mode_cmp_item_text",
                    "description": "setting_pic_apply_mode_cmp_item_text",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_audio_out_cmp_item",
                    "setting_snd_audio_out_cmp_item_text"
                ]
            }
        }


    ];
    return PageDataSettingPicApplyMode;
}


var PageDataSettingPicApplyMode = {
    "setting_pic_apply_mode_text_0": {Data: 'Apply Picture Mode'},


    "setting_pic_apply_mode_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_pic_apply_mode_cmp_item": "",
                "setting_pic_apply_mode_cmp_item_text": {Data: "All Source"}
            },
            {
                "setting_pic_apply_mode_cmp_item": "",
                "setting_pic_apply_mode_cmp_item_text": {Data: "Current Source"}
            }
        ]
    },
    operateData: {
        helpInfo: {
            title: "Apply Picture Mode",
            content: "Adjust current picture mode to apply to all sources or just current source."

        },
        "setting_pic_apply_mode_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_pic_apply_mode_cmp_item": "",
                    "setting_pic_apply_mode_cmp_item_text": {Data: "All Source"}
                },
                {
                    "setting_pic_apply_mode_cmp_item": "",
                    "setting_pic_apply_mode_cmp_item_text": {Data: "Current Source"}
                }
            ]
        }
    },

    langData: {
        'All Source': [],
        'Current Source': [],
        'Apply Picture Mode':[]

    },
    rewrite: SettingPicApplyModeRewrite
};


function SettingPicApplyModeEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var applyModeCmp = this;
            NaviBarEasyChange.call(this, applyModeCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();

            model.video.setApplyMode(({0: 1, 1: 0})[this.SelectedIndex]);

            SetRecentUse("Apply Picture Mode", 0, FirPageSndIdx.PicApplyMode);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicApplyModeEscHandler() {
    try {
        hiWebOsFrame.SettingPicApplyMode.close();
        hiWebOsFrame.SettingPicApplyMode.origin.open();
        hiWebOsFrame.SettingPicApplyMode.origin.hiFocus();
        hiWebOsFrame.SettingPicApplyMode.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicApplyMode.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicApplyModeRewrite(pageData) {

    try {
        var applyMode = pageData.operateData.setting_pic_apply_mode_cmp.DataSelectedIndex;
        NaviBarRewriteEasy.call(this, pageData, 'setting_pic_apply_mode_cmp', applyMode);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicApplyModeOpen() {
    DBG_INFO("onSettingPicApplyModeOpen")
}

function onSettingPicApplyModeClose() {
    //CloseSndHelpInfoPage();
}

function onSettingPicApplyModeDestroy() {
    try {
        DBG_INFO("onSettingPicApplyModeDestroy");
        hiWebOsFrame.SettingPicApplyMode = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}



