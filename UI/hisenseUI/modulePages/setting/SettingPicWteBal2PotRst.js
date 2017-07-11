function getSettingPicWteBal2PotRstData(opts) {
    opts.CaE =
        [
            {
                "id": "setting_pic_white_balance_2point_reset_content_div_text",
                "description": "",
                "CaEType": "span"
            },

            {
                "id": "setting_pic_white_balance_2point_reset_btn_0",
                "description": "",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingPicWteBal2PotRstOKEnterHandler",
                    "aftEscHandler": "SettingPicWteBal2PotRstOKEscHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_white_balance_2point_reset_btn_1",
                    "rightTo": "setting_pic_white_balance_2point_reset_btn_1"
                }
            },
            {
                "id": "setting_pic_white_balance_2point_reset_btn_1",
                "description": "",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingPicWteBal2PotRstOKEscHandler",
                    "aftEscHandler": "SettingPicWteBal2PotRstOKEscHandler"
                },
                "nav": {
                    "leftTo": "setting_pic_white_balance_2point_reset_btn_0",
                    "rightTo": "setting_pic_white_balance_2point_reset_btn_0"
                }
            }
        ];

    return PageDataPicWteBal2PotRst;
}


var PageDataPicWteBal2PotRst = {
    "setting_pic_white_balance_2point_reset_content_div_text": {Data: "The white balance will revert back to the factory default settings. Do you want to continue?"},
    "setting_pic_white_balance_2point_reset_btn_0": {Data: "OK"},
    "setting_pic_white_balance_2point_reset_btn_1": {Data: "Cancel"},
    operateData: {

    },
    rewrite: SettingPicPicWteBal2PotRstRewrite,
    langData: {
        "The white balance will revert back to the factory default settings. Do you want to continue?": ["图像恢复出厂设置"],
        "OK": ["OK", "是"],
        "Cancel": ["Cancel", "取消"]
    }
}

function SettingPicPicWteBal2PotRstRewrite(){

}



function SettingPicWteBal2PotRstOKEnterHandler() {
    try {
        hiWebOsFrame.SettingPicWteBal2PotRst.close();

        model.video.ResetWhiteBalanceSettings();
        model.video.OnResetWhite2Point = OnResetWhite2PointCallBack;
    }
    catch (ex) {
        debugE(ex.message);
    }
    try {
        SettingPicWteBal2PotRstOKEscHandler();
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingPicWteBal2PotRstOKEscHandler() {
    try {
        hiWebOsFrame.SettingPicWteBal2PotRst.close();
        hiWebOsFrame.SettingPicWteBal2PotRst.origin.open();
        hiWebOsFrame.SettingPicWteBal2PotRst.origin.hiFocus();
        hiWebOsFrame.SettingPicWteBal2PotRst.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicWteBal2PotRst.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}

function OnResetWhite2PointCallBack() {
    try {
        SettingPicWhiteBalanceInit();
        //hiWebOsFrame.SettingPicWteBal2Pot.rewrite();
        hiWebOsFrame.SettingPicWteBal2Pot.rewriteDataOnly();//单独rewriteOnly不能刷新slider
        hiWebOsFrame.SettingPicWteBal2Pot.hiFocus('setting_pic_white_balance_2point_reset_about_cmp');

    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicWteBal2PotRstDestroy(){
    try {
        hiWebOsFrame.SettingPicWteBal2PotRst = null;
    } catch (ex) {
        debugE(ex.message);
    }
}