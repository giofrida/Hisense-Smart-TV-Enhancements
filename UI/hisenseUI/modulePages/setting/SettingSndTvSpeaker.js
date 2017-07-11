function getSettingSndTvSpeakerData(opts) {

    SettingsndTvSpeakerInit();
    opts.CaE = [
        {
            "id": "setting_snd_tv_speaker_title",
            "description": "apply_pic_settings_title",
            "CaEType": "span",
            "class": "apply_pic_settings_title_text_0"
        },
        {
            "id": "setting_snd_tv_speaker_flipSwitch",
            "description": "",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",
            "FlipSwitchConfig": {switchTypeId: "switchType", switchTextId: "switchText"},
            "handler": {
                "aftEnterHandler": "SettingSndTvSpeakerSwitchEnterHandler",
                "aftEscHandler": "SettingSndTvSpeakerEscHandler"

            }
        }

    ];
    return PageDataSettingSndTvSpeaker;
}

var PageDataSettingSndTvSpeaker;
PageDataSettingSndTvSpeaker = {
    setting_snd_tv_speaker_title: {Data: "TV Speaker"},
    setting_snd_tv_speaker_flipSwitch: {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "operateData": {
        "setting_snd_tv_speaker_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "helpInfo": {
            title: "TV Speaker",
            content: "Disable TV speaker when you are using sound bar, ARC or any other external audio amplifier"

        },

    },
    langData: {
        "TV Speaker":[]
    },
    rewrite: "SettingSndTvSpeakerRewrite"
};


function SettingSndTvSpeakerRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';
        $('#setting_snd_tv_speaker_flipSwitch').css('float', dir_1);

        var TvSpeakerState = pageData.operateData.setting_snd_tv_speaker_flipSwitch.switchType;
//        pageData.setting_snd_mode_title_text_1.Data = pageData.operateData.modeEnum[sndModeEnum];
        FlipSwitchRewriteEasy(pageData, 'setting_snd_tv_speaker_flipSwitch', TvSpeakerState);

    } catch (ex) {
        debugE(ex.message);
    }

}

function SettingSndTvSpeakerEscHandler() {
    try {
        CloseSndHelpInfoPage();
        hiWebOsFrame.SettingSndTvSpeakerPage.close();
        hiWebOsFrame.SettingSndTvSpeakerPage.origin.open();
        hiWebOsFrame.SettingSndTvSpeakerPage.origin.hiFocus();
        hiWebOsFrame.SettingSndTvSpeakerPage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndTvSpeakerPage.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}


//需要加底层和上层
function SettingSndTvSpeakerSwitchEnterHandler() {
    try {
        var TvSpeakerState = model.sound.getTvSpeaker();
        DBG_INFO('model.sound.getTvSpeaker(): ' + TvSpeakerState);
        DBG_INFO(' model.sound.setTvSpeaker(' + Bool2Num(!TvSpeakerState) + ')');
        var TvSpeakerSwitch = this;
        FlipSwitchEasyChange.call(this, TvSpeakerSwitch, !TvSpeakerState);

        SetRecentUse("TV Speaker", 1, FirPageSndIdx.SndTvSpeaker);

        model.sound.setTvSpeaker(Bool2Num(!TvSpeakerState));

    } catch (ex) {
        debugE(ex.message);
    }

}


//function SettingSndTvSpeakerEnterHandler() {
//    try {
//        var sndModeCmp = this;
//        var sndModeSelIdx = sndModeCmp.SelectedIndex;
//        debugG("SELIDX_" + sndModeSelIdx);
//        if (sndModeCmp.DataSelectedIndex != sndModeSelIdx) {
//            sndModeCmp.DataSelectedIndex = sndModeSelIdx;
//
//            sndModeCmp.page.operateData[sndModeCmp.id].DataSelectedIndex = sndModeSelIdx;
//            sndModeCmp.page.operateData[sndModeCmp.id].SelectedIndex = sndModeSelIdx;
//            debugG('tv speaker  changed!!!!!!');
//            model.sound.setTvSpeaker(sndModeSelIdx);
//
//            this.page.rewriteDataOnly();
//
//        }
//    } catch (ex) {
//        debugE(ex.message);
//    }
//}

function onSettingSndTvSpeakerOpen() {
    try {

    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndTvSpeakerDestroy() {
    try {
        hiWebOsFrame.SettingSndTvSpeakerPage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

