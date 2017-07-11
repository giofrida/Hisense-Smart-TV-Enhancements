function getSettingPicWte10PotRstData(opts) {
    opts.CaE =
        [
            {
                "id": "setting_pic_white_balance_10point_reset_content_div_text",
                "description": "",
                "CaEType": "span"
            },

            {
                "id": "setting_pic_white_balance_10point_reset_btn_0",
                "description": "",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingPicWteBal10PotRstOKEnterHandler",
                    "aftEscHandler": "SettingPicWteBal10PotRstOKEscHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_white_balance_10point_reset_btn_1",
                    "rightTo": "setting_pic_white_balance_10point_reset_btn_1"
                }
            },
            {
                "id": "setting_pic_white_balance_10point_reset_btn_1",
                "description": "",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingPicWteBal10PotRstOKEscHandler",
                    "aftEscHandler": "SettingPicWteBal10PotRstOKEscHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_white_balance_10point_reset_btn_0",
                    "rightTo": "setting_pic_white_balance_10point_reset_btn_0"
                }
            }
        ];

    return PageDataPicWteBal10PotRst;

}

var PageDataPicWteBal10PotRst = {
    "setting_pic_white_balance_10point_reset_content_div_text": {Data: "The white balance will revert back to the factory default settings. Do you want to continue?"},
    "setting_pic_white_balance_10point_reset_btn_0": {Data: "OK"},
    "setting_pic_white_balance_10point_reset_btn_1": {Data: "Cancel"},
    operateData: {

    },
    rewrite: SettingPicWteBal10PotRstRewrite,
    langData: {

        "The white balance will revert back to the factory default settings. Do you want to continue?": ["图像恢复出厂设置"],
        "OK": ["OK", "是"],
        "Cancel": ["Cancel", "取消"]
    }
}

function SettingPicWteBal10PotRstRewrite(){

}

function SettingPicWteBal10PotRstOKEnterHandler() {
    try {
        hiWebOsFrame.SettingPicWteBal10PotRst.close();

        model.video.Reset10PointWhiteBalanceSettings();
        model.video.OnResetWhite10Point = OnResetWhite10PointCallBack;
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        SettingPicWteBal10PotRstOKEscHandler();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal10PotRstOKEscHandler(){
    try {
        hiWebOsFrame.SettingPicWteBal10PotRst.close();
        hiWebOsFrame.SettingPicWteBal10PotRst.origin.open();
        hiWebOsFrame.SettingPicWteBal10PotRst.origin.hiFocus();
        hiWebOsFrame.SettingPicWteBal10PotRst.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicWteBal10PotRst.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicWte10PotRstDestroy(){
    try {
        hiWebOsFrame.SettingPicWteBal10PotRst = null;
    } catch (ex) {
        debugE(ex.message);
    }
}


function OnResetWhite10PointCallBack() {
    try {
        SettingWhiteBalance10PointInit();
        //hiWebOsFrame.SettingPicWteBal10Pot.rewrite();
        hiWebOsFrame.SettingPicWteBal10Pot.rewriteDataOnly();//单独rewriteOnly不能刷新slider
        hiWebOsFrame.SettingPicWteBal10Pot.hiFocus('setting_pic_white_balance_10point_wb_cmp');
    } catch (ex) {
        debugE(ex.message);
    }
}