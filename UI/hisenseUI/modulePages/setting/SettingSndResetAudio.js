/**
 * Created by ghl on 14-6-19.
 */


function getSettingSndResetAudioData(opts) {
    //没有Init函数
    opts.CaE = [
        {
            "id": "setting_snd_RAS_content_text",
            "description": "声音出厂化设置 文字内容",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_RAS_btn_0",
            "description": "声音出厂化设置 btn0",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingSndResetAudioOKHandler",
                "aftEscHandler": "SettingSndResetAudioCancelHandler"
            },
            "nav": {
                "leftTo": "setting_snd_RAS_btn_1",
                "rightTo": "setting_snd_RAS_btn_1"
            }
        },
        {
            "id": "setting_snd_RAS_btn_1",
            "description": "声音出厂化设置 btn1",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingSndResetAudioCancelHandler",
                "aftEscHandler": "SettingSndResetAudioCancelHandler"
            },
            "nav": {
                "leftTo": "setting_snd_RAS_btn_0",
                "rightTo": "setting_snd_RAS_btn_0"
            }
        }
    ];
    return PageDataSettingSndResetAudio;
}

function onSettingSndResetAudioOpen() {

}

function onSettingSndResetAudioDestroy() {
    try {
        hiWebOsFrame.SettingSndResetAudio = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataSettingSndResetAudio = {
    "setting_snd_RAS_content_text": {Data: "All sound settings will be reset to default. Are you sure you wish to continue?"},
    "setting_snd_RAS_btn_0": {Data: "OK"},
    "setting_snd_RAS_btn_1": {Data: "Cancel"},
    operateData: {
        "setting_snd_RAS_content_text": {Data: "All sound settings will be reset to default. Are you sure you wish to continue?"},
        "setting_snd_RAS_btn_0": {Data: "OK"},
        "setting_snd_RAS_btn_1": {Data: "Cancel"}
    },
    rewrite: "SettingSndResetAudioRewrite",
    langData: {
        "All sound settings will be reset to default. Are you sure you wish to continue?":[],
        "OK": ["OK"],
        "Cancel": ["Cancel"]
    }
};


function SettingSndResetAudioRewrite(pageData) {
    debugG("resetaudio");
}

function SettingSndResetAudioOKHandler() {
    try {
        model.sound.RestoreDefaultAudioSettings();
        SettingSndModeInit();
//        SettingSndSAPInit();
        hiWebOsFrame.SettingSndResetAudio.close();
        hiWebOsFrame.SettingSndResetAudio.origin.open();
        hiWebOsFrame.SettingSndResetAudio.origin.hiFocus();
        hiWebOsFrame.SettingSndResetAudio.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndResetAudio.destroy();
        SetRecentUse("Restore Default Audio Settings", 1, FirPageSndIdx.SndReset);
        RestoreDefaultAudioSettingsCallBack();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndResetAudioCancelHandler() {
    try {
        hiWebOsFrame.SettingSndResetAudio.close();
        hiWebOsFrame.SettingSndResetAudio.origin.open();
        hiWebOsFrame.SettingSndResetAudio.origin.hiFocus();
        hiWebOsFrame.SettingSndResetAudio.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndResetAudio.destroy();

    } catch (ex) {
        debugE(ex.message);
    }
}

function RestoreDefaultAudioSettingsCallBack(){
    try {
        debugG('RestoreDefaultAudioSettingsCallBack');
        if(g_launcherBrand == "SA_OEM"){
            if(!!hiWebOsFrame.myLauncher && true == hiWebOsFrame.myLauncher.visible){
                debugG('launcher exist, set model.sound.setMainMute(1)');
                model.sound.setMainMute(1);
            }
        }
        else{
            if(typeof launcherNBar != UNDEFINED_DEFSTR){
                if(true == hiWebOsFrame[launcherNBar.id].visible){
                    debugG('launcher exist, set model.sound.setMainMute(1)');
                    model.sound.setMainMute(1);
                }
            }
        }

    } catch (ex) {
        debugE(ex.message);
    }
}