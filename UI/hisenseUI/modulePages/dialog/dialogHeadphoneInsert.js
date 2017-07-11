/**
 * Created by ghl on 14-6-19.
 */


function getDialogHeadphoneInsertData(opts) {
    dialogHeadphoneInsert.DialogHeadphoneInsertInit();
    opts.CaE = [
        {
            "id": "dialog_headphone_insert_cmp",
            "description": "",
            "CaEType": "Ul",
            "classes": {
                "normal": "snd_popup_headphone_speaker_li_normal",
                "focus": "snd_popup_headphone_speaker_li_focus",
                "disable": ""
//                "dataSelected": "snd_mode_li_selected_no_focus"
            },
            "handler": {
                "aftEnterHandler": dialogHeadphoneInsert.DialogHeadPhoneEnterHandlder,
                "aftUpHandler": dialogHeadphoneInsert.DialogHeadPhoneAftUpHandlder,
                "aftDownHandler": dialogHeadphoneInsert.DialogHeadPhoneAftDownHandlder,
//                "aftRightHandler": "SndModeRightHandler",
//                "aftLeftHandler": "SndModeLeftHandler",
                "aftEscHandler": dialogHeadphoneInsert.DialogHeadPhoneEscHandlder
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
                    "id": "dialog_headphone_insert_item_text_img",
                    "description": "",
                    "CaEType": "img"
//                    "classes": {
//                        "normal": "setting_snd_mode_item_text_normal", "focus": "setting_snd_mode_item_text_normal", "disable": "", "selected": "setting_snd_mode_item_text_focus"
//                    }
                },
                {
                    "id": "dialog_headphone_insert_item_text_0",
                    "description": "",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_popup_headphone_speaker_item_text_0_normal",
                        "focus": "setting_snd_popup_headphone_speaker_item_text_0_focus",
                        "disable": "",
                        "selected": ""
                    }
                },
                {
                    "id": "dialog_headphone_insert_item_text_1",
                    "description": "",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_popup_headphone_speaker_item_text_1_normal",
                        "focus": "setting_snd_popup_headphone_speaker_item_text_1_focus",
                        "disable": "",
                        "selected": ""
                    }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "dialog_headphone_insert_item_text_img",
                    "dialog_headphone_insert_item_text_0",
                    "dialog_headphone_insert_item_text_1"
                ]
            }
        }
    ];
    return dialogHeadphoneInsert.pageData;
}


function DialogHeadphoneInsertClass() {
    var self = this;
    self.id = 'dialog_headphone_insert';

    self.muteTV = false;

    self.pageData = {
        dialog_headphone_insert_cmp: {
//        DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "dialog_headphone_insert_item_text_img": {Data: "img/SndPopHeadphoneOnlyNormal.png"},
                    "dialog_headphone_insert_item_text_0": {Data: "Headphone Only"},
                    "dialog_headphone_insert_item_text_1": {Data: "Use the TV remote to adjust the Headphone volume"}
                },
                {
                    "dialog_headphone_insert_item_text_img": {Data: "img/SndPopHeadphoneWithTVSpeakNormal.png"},
                    "dialog_headphone_insert_item_text_0": {Data: "Headphone with TV Speaker"},
                    "dialog_headphone_insert_item_text_1": {Data: "You can adjust the Headphone volume by Setup → Sound → Headphone Volume"}
                }
            ]
        },
        rewrite: DialogHeadphoneInsertRewrite,
        langData: {
            "Headphone Only": [],
            "Use the TV remote to adjust the Headphone volume": [],
            "Headphone with TV Speaker": [],
            "You can adjust the Headphone volume by Setup → Sound → Headphone Volume": []
        }
    };

    var opData = {
        dialog_headphone_insert_cmp: {
//        DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "dialog_headphone_insert_item_text_img": {Data: "img/SndPopHeadphoneOnlyNormal.png"},
                    "dialog_headphone_insert_item_text_0": {Data: "Headphone Only"},
                    "dialog_headphone_insert_item_text_1": {Data: "Use the TV remote to adjust the Headphone volume"}
                },
                {
                    "dialog_headphone_insert_item_text_img": {Data: "img/SndPopHeadphoneWithTVSpeakNormal.png"},
                    "dialog_headphone_insert_item_text_0": {Data: "Headphone with TV Speaker"},
                    "dialog_headphone_insert_item_text_1": {Data: "You can adjust the Headphone volume by Setup → Sound → Headphone Volume"}
                }
            ]
        },
        imgData: [
            {
                'normal': 'img/SndPopHeadphoneOnlyNormal.png',
                'focus': 'img/SndPopHeadphoneOnlyFocus.png'
            },
            {
                'normal': 'img/SndPopHeadphoneWithTVSpeakNormal.png',
                'focus': 'img/SndPopHeadphoneWithTVSpeakFocus.png'
            }
        ]
    };
    self.pageData.operateData = opData;

    self.onOpenDialogHeadphoneInsert = function () {
        try {

        } catch (ex) {
            debugE(ex.message);
        }
    };

    self.onCloseDialogHeadphoneInsert = function () {
        try {

        } catch (ex) {
            debugE(ex.message);
        }
    };

    self.onDestroyDialogHeadphoneInsert = function () {
        try {
            debugG('onDestroyDialogHeadphoneInsert');
            hiWebOsFrame[this.id] = null;
        } catch (ex) {
            debugE(ex.message);
        }
    };

    function DialogHeadphoneInsertRewrite(pageData) {
        try {
            var curSelectedIndex = pageData.operateData.dialog_headphone_insert_cmp.SelectedIndex;
            pageData.dialog_headphone_insert_cmp.SelectedIndex = curSelectedIndex;

            for (var i = 0; i < 2; i++) {
                if (i == curSelectedIndex) {
                    pageData.dialog_headphone_insert_cmp.Data[i].dialog_headphone_insert_item_text_img.Data = pageData.operateData.imgData[i].focus;
                } else {
                    pageData.dialog_headphone_insert_cmp.Data[i].dialog_headphone_insert_item_text_img.Data = pageData.operateData.imgData[i].normal;
                }
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    self.DialogHeadphoneInsertInit = function () {
        try {
            //var sndPopHeadphoneSpeakerTemp = model.sound.getAudioOut();
            //debugG('model.sound.getAudioOut(): ' + sndPopHeadphoneSpeakerTemp);
            //var sndPopHeadphoneSpeaker = AudioOutMid2UI(sndPopHeadphoneSpeakerTemp);
            dialogHeadphoneInsert.pageData.operateData.dialog_headphone_insert_cmp.SelectedIndex = 0;
        } catch (ex) {
            debugE(ex.message);
        }
    }

    self.DialogHeadPhoneEnterHandlder = function () {
        try {
            var curIndex = this.SelectedIndex;
            if (this.page.operateData.dialog_headphone_insert_cmp.SelectedIndex != curIndex) {
                this.page.operateData.dialog_headphone_insert_cmp.SelectedIndex = curIndex;
                this.page.rewriteDataOnly();
                debugG('model.sound.setHeadphoneInsertTvMute(' + (1 - curIndex ) + ')');
                model.sound.setHeadphoneInsertTvMute((1 - curIndex ));
            }
            if (0 == curIndex) {
                dialogHeadphoneInsert.setMuteTVState(true);
            } else {
                dialogHeadphoneInsert.setMuteTVState(false);
            }
            self.DialogHeadPhoneEscHandlder.call(this);
        } catch (ex) {
            debugE(ex.message);
        }
    };
    self.DialogHeadPhoneAftUpHandlder = function () {
        try {
            var curIndex = this.SelectedIndex;
            if (this.page.operateData.dialog_headphone_insert_cmp.SelectedIndex != curIndex) {
                this.page.operateData.dialog_headphone_insert_cmp.SelectedIndex = curIndex;
                this.page.rewriteDataOnly();
                debugG('model.sound.setHeadphoneInsertTvMute(' + (1 - curIndex ) + ')');
                model.sound.setHeadphoneInsertTvMute((1 - curIndex ));
            }
            if (0 == curIndex) {
                dialogHeadphoneInsert.setMuteTVState(true);
            } else {
                dialogHeadphoneInsert.setMuteTVState(false);
            }
        } catch (ex) {
            debugE(ex.message);
        }
    };
    self.DialogHeadPhoneAftDownHandlder = function () {
        try {
            var curIndex = this.SelectedIndex;
            if (this.page.operateData.dialog_headphone_insert_cmp.SelectedIndex != curIndex) {
                this.page.operateData.dialog_headphone_insert_cmp.SelectedIndex = curIndex;
                this.page.rewriteDataOnly();
                debugG('model.sound.setHeadphoneInsertTvMute(' + (1 - curIndex ) + ')');
                model.sound.setHeadphoneInsertTvMute((1 - curIndex ));
            }
            if (0 == curIndex) {
                dialogHeadphoneInsert.setMuteTVState(true);
            } else {
                dialogHeadphoneInsert.setMuteTVState(false);
            }
        } catch (ex) {
            debugE(ex.message);
        }
    };
    self.DialogHeadPhoneEscHandlder = function () {
        try {
            this.page.close();
            if (this.page.origin.module == 'livetv') {
                openLiveTVModule();
            } else {
                this.page.origin.open();
                this.page.origin.hiFocus();
                this.page.origin.rewriteDataOnly();
                if (this.page.origin.module != 'setting') {
                    //origin page is app
                    DialogHeadPhoneEscHandlderCallBack(this.page.origin);
                }
            }
            this.page.destroy();
        } catch (ex) {
            debugE(ex.message);
        }
    };

    self.setMuteTVState = function (state) {
        debugG('setMuteTVState: ' + state);
        dialogHeadphoneInsert.muteTV = state;
        vol.headPhoneInsertState = state;
    };


    function DialogHeadPhoneEscHandlderCallBack(oriPage) {
        try {
            debugG('DialogHeadPhoneEscHandlderCallBack');
            //sync from settingOnDestroyCallback

            if ("app" == oriPage.module) {
                //ghl add
                debugG('hiWebOsFrame.registerKeyCodesForAppWithKey()');
                hiWebOsFrame.registerKeyCodesForAppWithKey();

                if ("app_lau_browser" == oriPage.id) {
                    switch (appBrowser.getCurrentCommandType()) {
                        case CmdURLType.LAU_BROWSER_HIMEDIA:
                            //model......通知himedia注册按键
                            if (16 != GlobalFlagShareInBrowser) {
                                model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
                            }
                            break;
                        case CmdURLType.LAU_BROWSER_PICASA:
                            model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                            break;
                        case CmdURLType.LAU_BROWSER_TERRATV:
                            // model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                            break;
                        default :
                            break;
                    }
                }
            } else {
            }


        } catch (ex) {
            debugE(ex.message);
        }
    }

}


var dialogHeadphoneInsert = new DialogHeadphoneInsertClass();