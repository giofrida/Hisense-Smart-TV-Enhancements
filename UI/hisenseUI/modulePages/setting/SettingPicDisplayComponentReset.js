function getSettingPicDisplayComponentResetData(opts) {
    opts.CaE = [
        {
            "id": "setting_pic_display_component_component_reset_content_text",
            "description": "图像出厂化设置 文字内容",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_display_component_component_reset_btn_0",
            "description": "图像出厂化设置 btn0",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingPicDisplayComponentResetOKEnterHandler",
                "aftEscHandler": "SettingPicDisplayComponentResetOKEscHandler"
            },
            "nav": {
                "leftTo": "setting_pic_display_component_component_reset_btn_1",
                "rightTo": "setting_pic_display_component_component_reset_btn_1"
            }
        },
        {
            "id": "setting_pic_display_component_component_reset_btn_1",
            "description": "图像出厂化设置 btn1",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingPicDisplayComponentResetOKEscHandler",
                "aftEscHandler": "SettingPicDisplayComponentResetOKEscHandler"

            },
            "nav": {
                "leftTo": "setting_pic_display_component_component_reset_btn_0",
                "rightTo": "setting_pic_display_component_component_reset_btn_0"
            }
        }
    ]

    return PageDataSettingPicDisplayComponentReset;
}


var PageDataSettingPicDisplayComponentReset = {


    "setting_pic_display_component_component_reset_content_text": {Data: "The component will revert back to the factory default settings. Do you want to continue?"},
    "setting_pic_display_component_component_reset_btn_0": {Data: "OK"},
    "setting_pic_display_component_component_reset_btn_1": {Data: "Cancel"},
    operateData: {},
    rewrite: SettingPicDisplayComponentResetRewrite,
    langData: {
        "The component will revert back to the factory default settings. Do you want to continue?": [],
        "OK": [],
        "Cancel": []
    }
}

function SettingPicDisplayComponentResetRewrite() {

}

function SettingPicDisplayComponentResetOKEscHandler() {
    try {
        debugG('SettingPicDisplayComponentResetOKEscHandler');
        hiWebOsFrame.SettingPicDisplayComponentReset.close();
        hiWebOsFrame.SettingPicDisplayComponentReset.origin.open();
        hiWebOsFrame.SettingPicDisplayComponentReset.origin.hiFocus();
        hiWebOsFrame.SettingPicDisplayComponentReset.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicDisplayComponentReset.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

}

function SettingPicDisplayComponentResetOKEnterHandler() {
    try {
        debugG('SettingPicDisplayComponentResetOKEnterHandler');
        model.video.ResetComponentSettings();
        debugG('model.video.ResetComponentSettings()');
        ResetPicComponent();
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        SettingPicDisplayComponentResetOKEscHandler();
    } catch (ex) {
        debugE(ex.message);
    }
}


function ResetPicComponent() {
    try {
        SettingPicDisplayComponentInit();
        hiWebOsFrame.SettingPicDisplayComponent.rewrite();
        hiWebOsFrame.SettingPicDisplayComponent.rewriteDataOnly();//单独rewriteOnly不能刷新slider
        hiWebOsFrame.SettingPicDisplayComponent.hiFocus('setting_pic_display_component_component_reset_cmp');
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicDisplayComponentResetDestroy(){
    try {
        hiWebOsFrame.SettingPicDisplayComponentReset = null;
    } catch (ex) {
        debugE(ex.message);
    }
}