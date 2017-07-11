
function getSettingPicColorTunerResetData(opts){
    opts.CaE =
        [
            {
                "id": "setting_pic_color_tuner_content_text",
                "description": "",
                "CaEType": "span"
            },

            {
                "id": "setting_pic_color_tuner_btn_0",
                "description": "",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingPicColorTunerResetOKEnterHandler",
                    "aftEscHandler": "SettingPicColorTunerResetOKEscHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_color_tuner_btn_1",
                    "rightTo": "setting_pic_color_tuner_btn_1"
                }
            },
            {
                "id": "setting_pic_color_tuner_btn_1",
                "description": "",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingPicColorTunerResetOKEscHandler",
                    "aftEscHandler": "SettingPicColorTunerResetOKEscHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_color_tuner_btn_0",
                    "rightTo": "setting_pic_color_tuner_btn_0"
                }
            }
        ];

    return PageDataPicColorTunerReset;

}

var PageDataPicColorTunerReset = {
    "setting_pic_color_tuner_content_text": {Data: "The colour settings will revert back to the factory default settings. Do you want to continue?"},
    "setting_pic_color_tuner_btn_0": {Data: "OK"},
    "setting_pic_color_tuner_btn_1": {Data: "Cancel"},
    operateData: {

    },
    rewrite: "SettingPicColorTunerResetRewrite",
    langData: {
        "The colour settings will revert back to the factory default settings. Do you want to continue?": ["图像恢复出厂设置"],
        "OK": ["OK", "是"],
        "Cancel": ["Cancel", "取消"]
    }
}

function onSettingPicColorTunerResetDestroy(){
    try {
        hiWebOsFrame.SettingPicResetColorTuner = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerResetRewrite(){

}

function SettingPicColorTunerResetOKEscHandler(){
    try {
        hiWebOsFrame.SettingPicResetColorTuner.close();
        hiWebOsFrame.SettingPicResetColorTuner.origin.open();
        hiWebOsFrame.SettingPicResetColorTuner.origin.hiFocus();
        hiWebOsFrame.SettingPicResetColorTuner.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicResetColorTuner.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicColorTunerResetOKEnterHandler(){
    try {
        hiWebOsFrame.SettingPicResetColorTuner.close();
        hiWebOsFrame.SettingPicResetColorTuner.origin.open();
        hiWebOsFrame.SettingPicResetColorTuner.origin.hiFocus();
        hiWebOsFrame.SettingPicResetColorTuner.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicResetColorTuner.destroy();
        model.video.ResetColorTunerSettings();
        model.video.OnResetColorTuner = OnResetColorTunerCallback;
    } catch (ex) {
        debugE(ex.message);
    }
}


function OnResetColorTunerCallback(){
    try {
        SettingPicColorTunerInit();
        hiWebOsFrame.SettingPicColorTuner.rewrite();
        hiWebOsFrame.SettingPicColorTuner.rewriteDataOnly();
        hiWebOsFrame.SettingPicColorTuner.hiFocus('setting_pic_color_tuner_color_reset_cmp');
    } catch (ex) {
        debugE(ex.message);
    }
}