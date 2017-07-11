function getSettingPicResetPageData(page) {
    page.CaE = [
        {
            "id": "setting_pic_RAS_content_text",
            "description": "图像出厂化设置 文字内容",
            "CaEType": "span"
        },
        {
            "id": "setting_pic_RAS_btn_0",
            "description": "图像出厂化设置 btn0",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingPicResetOKEnterHandler",
                "aftEscHandler": "SettingPicResetOKEscHandler"
            },
            "nav": {
                "leftTo": "setting_pic_RAS_btn_1",
                "rightTo": "setting_pic_RAS_btn_1"
            }
        },
        {
            "id": "setting_pic_RAS_btn_1",
            "description": "图像出厂化设置 btn1",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingPicResetOKEscHandler",
                "aftEscHandler": "SettingPicResetOKEscHandler"

            },
            "nav": {
                "leftTo": "setting_pic_RAS_btn_0",
                "rightTo": "setting_pic_RAS_btn_0"
            }
        }
    ]

    return PageDataSettingPicReset;
}


var PageDataSettingPicReset = {
    "setting_pic_RAS_content_text": {Data: "The current picture settings will revert back to the factory default settings. Do you want to continue?"},
    "setting_pic_RAS_btn_0": {Data: "OK"},
    "setting_pic_RAS_btn_1": {Data: "Cancel"},
    operateData: {
        helpInfo:{
            title: "Restore Default Picture Settings",
            content: "Restore the colour settings to the factory default values."
        }
    },
    rewrite: "SettingPicResetRewrite",
    langData: {
        "The current picture settings will revert back to the factory default settings. Do you want to continue?": [""],
        "OK": ["OK", "是"],
        "Cancel": ["Cancel", "取消"]
    }
}
function SettingPicResetRewrite() {

}


function SettingPicResetOKEnterHandler() {
    try {
        // Pic很多onChange函数不好用，所以放到这里面主动get
        DBG_INFO("SettingPicResetOKEnterHandler");
        model.video.ResetDefaultPictureSettings(0);
        var picZoomEnumMode = model.video.getEnumZoom();
        onEnumZoomChaged(picZoomEnumMode);
        var picBrightness = model.video.getBrightness();
        onBrightnessChaged(picBrightness);
        var picContrast = model.video.getContrast();
        onContrastChaged(picContrast);
        var picColor = model.video.getColourIntensity();
        onColourIntensityChaged(picColor);
        SetRecentUse("Restore Default Picture Settings", 0, FirPageSndIdx.PicReset);

        RefreshSomeFirPageDisableItem();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    SettingPicResetOKEscHandler();
}

function SettingPicResetOKEscHandler() {
    try {
        hiWebOsFrame.SettingPicRestore.close();
        hiWebOsFrame.SettingPicRestore.origin.open();
        hiWebOsFrame.SettingPicRestore.origin.hiFocus();
        hiWebOsFrame.SettingPicRestore.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicRestore.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicResetClose(){
    try {
        //CloseSndHelpInfoPage();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function onSettingPicResetDestroy() {
    hiWebOsFrame.SettingPicRestore = null;
}


