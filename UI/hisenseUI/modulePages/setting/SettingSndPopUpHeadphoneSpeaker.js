/**
 * Created by ghl on 14-6-18.
 */

function getSettingSndPopUpHeadPhoneSpeakerData(opts) {
    SettingSndPopUpHeadPhoneSpeakerInit();
    opts.CaE = [
        {
            "id": "setting_snd_popup_headphone_speaker_cmp",
            "description": "",
            "CaEType": "Ul",
            "classes": {
                "normal": "snd_popup_headphone_speaker_li_normal",
                "focus": "snd_popup_headphone_speaker_li_focus",
                "disable": ""
//                "dataSelected": "snd_mode_li_selected_no_focus"
            },
            "handler": {
                "aftEnterHandler": "SndPopUpHeadphoneSpeakerEnterHandler",
                "aftUpHandler": "SndPopUpHeadphoneSpeakerUpHandler",
                "aftDownHandler": "SndPopUpHeadphoneSpeakerDownHandler",
//                "aftRightHandler": "SndModeRightHandler",
//                "aftLeftHandler": "SndModeLeftHandler",
                "aftEscHandler": "SndPopUpHeadphoneSpeakerEscHandler"
            },
            "nav": {"leftTo": "", "downTo": "", "rightTo": ""},
            disable: false,
            "oriCaE": [
//                {
//                    "id": "setting_snd_mode_item_img",
//                    "description": "Sound Mode 的图片",
//                    "CaEType": "img"
//                },
                {
                    "id": "setting_snd_popup_headphone_speaker_item_img",
                    "description": "",
                    "CaEType": "img"
//                    "classes": {
//                        "normal": "setting_snd_mode_item_text_normal", "focus": "setting_snd_mode_item_text_normal", "disable": "", "selected": "setting_snd_mode_item_text_focus"
//                    }
                },
                {
                    "id": "setting_snd_popup_headphone_speaker_item_text_0",
                    "description": "",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_popup_headphone_speaker_item_text_0_normal", "focus": "setting_snd_popup_headphone_speaker_item_text_0_focus", "disable": "", "selected": ""
                    }
                },
                {
                    "id": "setting_snd_popup_headphone_speaker_item_text_1",
                    "description": "",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_popup_headphone_speaker_item_text_1_normal", "focus": "setting_snd_popup_headphone_speaker_item_text_1_focus", "disable": "", "selected": ""
                    }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_popup_headphone_speaker_item_img",
                    "setting_snd_popup_headphone_speaker_item_text_0",
                    "setting_snd_popup_headphone_speaker_item_text_1"
                ]
            }
        }
    ];
    return PageDataSettingSndPopUpHeadphoneSpeaker;
}

var PageDataSettingSndPopUpHeadphoneSpeaker = {

    setting_snd_popup_headphone_speaker_cmp: {
//        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_popup_headphone_speaker_item_img": {Data: "img/SndPopHeadphoneAudioOutVariableNormal.png"},
                "setting_snd_popup_headphone_speaker_item_text_0": {Data: "Headphone/Audio Out Variable"},
                "setting_snd_popup_headphone_speaker_item_text_1": {Data: "Use the TV remote to adjust the volume and TV speaker is off."}
            },
            {
                "setting_snd_popup_headphone_speaker_item_img": {Data: "img/SndPopAudioOutFixedNormal.png"},
                "setting_snd_popup_headphone_speaker_item_text_0": {Data: "Audio Out Fixed"},
                "setting_snd_popup_headphone_speaker_item_text_1": {Data: "Use the amplifier or sound bar's remote control to adjust the volume."}
            },
            {
                "setting_snd_popup_headphone_speaker_item_img": {Data: "img/SndPopHeadphoneWithTVSpeakNormal.png"},
                "setting_snd_popup_headphone_speaker_item_text_0": {Data: "Headphone with TV Speaker"},
                "setting_snd_popup_headphone_speaker_item_text_1": {Data: "You can adjust the Headphone volume by Setup → Sound → Headphone Volume"}
            }
        ]
    },
    operateData: {

        setting_snd_popup_headphone_speaker_cmp: {
//            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_popup_headphone_speaker_item_img": {Data: "img/SndPopHeadphoneAudioOutVariableNormal.png"},
                    "setting_snd_popup_headphone_speaker_item_text_0": {Data: "Headphone/Audio Out Variable"},
                    "setting_snd_popup_headphone_speaker_item_text_1": {Data: "Use the TV remote to adjust the volume and TV speaker is off."}
                },
                {
                    "setting_snd_popup_headphone_speaker_item_img": {Data: "img/SndPopAudioOutFixedNormal.png"},
                    "setting_snd_popup_headphone_speaker_item_text_0": {Data: "Audio Out Fixed"},
                    "setting_snd_popup_headphone_speaker_item_text_1": {Data: "Use the amplifier or sound bar's remote control to adjust the volume."}
                },
                {
                    "setting_snd_popup_headphone_speaker_item_img": {Data: "img/SndPopHeadphoneWithTVSpeakNormal.png"},
                    "setting_snd_popup_headphone_speaker_item_text_0": {Data: "Headphone with TV Speaker"},
                    "setting_snd_popup_headphone_speaker_item_text_1": {Data: "You can adjust the Headphone volume by Setup → Sound → Headphone Volume"}
                }
            ]
        },
        imgData: [
            {
                'normal': 'img/SndPopHeadphoneAudioOutVariableNormal.png',
                'focus': 'img/SndPopHeadphoneAudioOutVariableFocus.png'
            },
            {
                'normal': 'img/SndPopAudioOutFixedNormal.png',
                'focus': 'img/SndPopAudioOutFixedFocus.png'
            },
            {
                'normal': 'img/SndPopHeadphoneWithTVSpeakNormal.png',
                'focus': 'img/SndPopHeadphoneWithTVSpeakFocus.png'
            }
        ]
    },
    "langData": {
        "Headphone/Audio Out Variable": [],
        "Use the TV remote to adjust the volume and TV speaker is off.": [],
        "Audio Out Fixed": [],
        "Use the amplifier or sound bar's remote control to adjust the volume.": [],
        "Headphone with TV Speaker": [],
        "You can adjust the Headphone volume by Setup → Sound → Headphone Volume": []
    },
    rewrite: "SettingSndPopUpHeadphoneSpeakerRewrite"
}


function SettingSndPopUpHeadphoneSpeakerRewrite(pageData) {
    try {
        var curSelectedIndex = pageData.operateData.setting_snd_popup_headphone_speaker_cmp.SelectedIndex;
        pageData.setting_snd_popup_headphone_speaker_cmp.SelectedIndex = curSelectedIndex;

        for (var i = 0; i < 3; i++) {
            if (i == curSelectedIndex) {
                pageData.setting_snd_popup_headphone_speaker_cmp.Data[i].setting_snd_popup_headphone_speaker_item_img.Data = pageData.operateData.imgData[i].focus;
            } else {
                pageData.setting_snd_popup_headphone_speaker_cmp.Data[i].setting_snd_popup_headphone_speaker_item_img.Data = pageData.operateData.imgData[i].normal;
            }
        }
//        var sndModeEnum = pageData.operateData.setting_snd_mode_cmp.DataSelectedIndex;
////        pageData.setting_snd_mode_title_text_1.Data = pageData.operateData.modeEnum[sndModeEnum];
//        NaviBarRewriteEasy.call(this, pageData, "setting_snd_mode_cmp", sndModeEnum);
    } catch (ex) {
        debugE(ex.message);
    }

}

function SndPopUpHeadphoneSpeakerEscHandler() {
    try {
        debugG('SndPopUpHeadphoneSpeakerEscHandler()');
        hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker.close();
        hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker.origin.close();
        hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker.origin.hiFocus();
        hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SndPopUpHeadphoneSpeakerEnterHandler() {
    try {
        debugG("SndPopUpHeadphoneSpeakerEnterHandler not use full");
//        if(this.DataSelectedIndex != this.SelectedIndex){
//            var sndPopUpHeadphoneSpeakerCmp = this;
//            debugG("SELIDX: "+this.SelectedIndex);
//
//            model.sound.setAudioOut(AudioOutUI2Mid(this.SelectedIndex));
//            debugG("model.sound.setAudioOut("+AudioOutUI2Mid(this.SelectedIndex)+")");
//            NaviBarEasyChange.call(this, sndPopUpHeadphoneSpeakerCmp, this.SelectedIndex);
//        this.page.rewriteDataOnly();
//        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function onSettingSndPopUpHeadPhoneSpeakerOpen() {
    try {

    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndPopUpHeadPhoneSpeakerClose() {
    try {
        debugG('onSettingSndPopUpHeadPhoneSpeakerClose');
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndPopUpHeadPhoneSpeakerDestroy() {
    try {
        debugG('onSettingSndPopUpHeadPhoneSpeakerDestroy');
        hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SndPopUpHeadphoneSpeakerUpHandler() {
    try {
        var curIndex = this.SelectedIndex;
        if (PageDataSettingSndPopUpHeadphoneSpeaker.operateData.setting_snd_popup_headphone_speaker_cmp.SelectedIndex != this.SelectedIndex) {
            PageDataSettingSndPopUpHeadphoneSpeaker.operateData.setting_snd_popup_headphone_speaker_cmp.SelectedIndex = this.SelectedIndex;
            this.page.rewriteDataOnly();
            debugG("model.sound.setAudioOut("+AudioOutUI2Mid(curIndex)+')');
            model.sound.setAudioOut(AudioOutUI2Mid(curIndex));
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SndPopUpHeadphoneSpeakerDownHandler() {
    try {
        var curIndex = this.SelectedIndex;
        if (PageDataSettingSndPopUpHeadphoneSpeaker.operateData.setting_snd_popup_headphone_speaker_cmp.SelectedIndex != this.SelectedIndex) {
            PageDataSettingSndPopUpHeadphoneSpeaker.operateData.setting_snd_popup_headphone_speaker_cmp.SelectedIndex = this.SelectedIndex;
            this.page.rewriteDataOnly();
            debugG("model.sound.setAudioOut("+AudioOutUI2Mid(curIndex)+')');
            model.sound.setAudioOut(AudioOutUI2Mid(curIndex));
        }
    } catch (ex) {
        debugE(ex.message);
    }
}