function getcolorTunerRestoreData(page){
    page.CaE =
        [
            {
                "id": "setting_pic_colorTunerRe_RAS_content_text",
                "description": "图像出厂化设置 文字内容",
                "CaEType": "span"
            },
            {
                "id": "setting_pic_colorTunerRe_RAS_btn_0",
                "description": "图像出厂化设置 btn0",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_pic_component_RAS_btn_class_normal",
                    "focus": "setting_pic_component_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "colorTunerReRestoreOKHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_colorTunerRe_RAS_btn_1",
                    "rightTo": "setting_pic_colorTunerRe_RAS_btn_1"
                }
            },
            {
                "id": "setting_pic_colorTunerRe_RAS_btn_1",
                "description": "图像出厂化设置 btn1",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_pic_component_RAS_btn_class_normal",
                    "focus": "setting_pic_component_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "colorTunerReRestoreCancelHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_colorTunerRe_RAS_btn_0",
                    "rightTo": "setting_pic_colorTunerRe_RAS_btn_0"
                }
            }
        ];

    return colorTunerReRestoreData;

}

var colorTunerReRestoreData = {
    "setting_pic_colorTunerRe_RAS_content_text": {Data: "The colour settings will revert back to the factory default settings. Do you want to continue?"},
    "setting_pic_colorTunerRe_RAS_btn_0": {Data: "OK"},
    "setting_pic_colorTunerRe_RAS_btn_1": {Data: "Cancel"},
    operateData: {
        "setting_pic_colorTunerRe_RAS_content_text": {Data: "Sound Reset factory"},
        "setting_pic_colorTunerRe_RAS_btn_0": {Data: "OK"},
        "setting_pic_colorTunerRe_RAS_btn_1": {Data: "Cancel"}
    },
    rewrite: "colorTunerRerestoreRewrite",
    langData: {
        "Sound Reset factory": ["图像恢复出厂设置"],
        "The colour settings will revert back to the factory default settings. Do you want to continue?": ["图像恢复出厂设置"],
        "OK": ["OK", "是"],
        "Cancel": ["Cancel", "取消"]
    }
}

function oncolorTunerRestoreDestroy(){
    try {
        hiWebOsFrame.SettingPicResetColorTuner = null;
    } catch (ex) {
        debugE(ex.message);
    }
}
function colorTunerRerestoreRewrite(){

}

function returncolorTunerRe(){
    hiWebOsFrame.SettingPicResetColorTuner.close();
    hiWebOsFrame.SettingPicResetColorTuner.origin.open();
    hiWebOsFrame.SettingPicResetColorTuner.origin.hiFocus();
    hiWebOsFrame.SettingPicResetColorTuner.origin.rewriteDataOnly();
    hiWebOsFrame.SettingPicResetColorTuner.destroy();
}

function colorTunerReRestoreOKHandler(){
    hiWebOsFrame.SettingPicResetColorTuner.close();
    hiWebOsFrame.SettingPicResetColorTuner.origin.open();
    hiWebOsFrame.SettingPicResetColorTuner.origin.hiFocus();
    hiWebOsFrame.SettingPicResetColorTuner.origin.rewriteDataOnly();
    hiWebOsFrame.SettingPicResetColorTuner.destroy();
    model.video.ResetColorTunerSettings();
    model.video.OnResetColorTuner = OnResetColorTunerCallback
}
function colorTunerReRestoreCancelHandler(){
    hiWebOsFrame.SettingPicResetColorTuner.close();
    hiWebOsFrame.SettingPicResetColorTuner.origin.open();
    hiWebOsFrame.SettingPicResetColorTuner.origin.hiFocus();
    hiWebOsFrame.SettingPicResetColorTuner.origin.rewriteDataOnly();
    hiWebOsFrame.SettingPicResetColorTuner.destroy();
}

function OnResetColorTunerCallback(){
    var opData = PageDataSettingPicColorTuner.operateData;
    var colorTuner = model.video.getColor();
    debugPrint("--------------------colorTuner:"+colorTuner);
    var colorIndex = $.inArray(colorTuner, opData.colorList) == -1 ? 0 : $.inArray(colorTuner, opData.colorList);
    debugPrint("***************colorIndexIndex:" + colorIndex);
    opData.setting_pic_colorTuner_current = opData.colorTunerCurrentList[colorIndex];
    opData.SelectedIndex = colorIndex;
    opData.DataSelectedIndex = colorIndex;

    var colorHue = model.video.getColorHue();
    PageDataSettingPicColorTuner.operateData.color_hue = colorHue;


    var saturation = model.video.getColorSaturation();
    PageDataSettingPicColorTuner.operateData.color_saturation = saturation;

    var bri = model.video.getColorBrightness();
    PageDataSettingPicColorTuner.operateData.color_brightness = bri;

    hiWebOsFrame.colorTuner.rewrite();
    hiWebOsFrame.colorTuner.hiFocus("pic_colorTuner_restore_btn");
}