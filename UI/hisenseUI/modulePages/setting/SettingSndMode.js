/**
 * Created by ghl on 14-6-18.
 */

function getSettingSndModeData(opts) {
    SettingSndModeInit();
    opts.CaE = [
        {
            "id": "setting_snd_mode_title_text_0",
            "description": "snd mode Title 0",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_mode_title_text_1",
            "description": "snd mode Title 1",
            "CaEType": "span"
        },
        {
            "id": "setting_snd_mode_cmp",
            "description": "Sound Mode de ul",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_pic_color_tuner_color_cmp_li_normal",
                "focus": "setting_pic_color_tuner_color_cmp_li_focus",
                "disable": "",
                "dataSelected": "setting_pic_color_tuner_color_cmp_li_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SndModeEnterHandler",
                "aftRightHandler": "SoundModeAftRightHandler",
                "aftLeftHandler": "SoundModeAftLeftHandler",
                "aftDownHandler": "SndModeRefreshHelpInfo",
                "aftUpHandler": "SndModeRefreshHelpInfo",
                "aftEscHandler": "SettingSndModeEscHandler",
                "befDownHandler": "DBXVolumeBefDownHandler",
                "befUpHandler": "DBXVolumeBefUpHandler"

            },
            "nav": {
                "upTo": "setting_snd_dbx_volume_cmp",
                "leftTo": "",
                "downTo": "setting_snd_dbx_sonic_cmp",
                "rightTo": ""
            },
            disable: false,
            "oriCaE": [
                {
                    "id": "setting_snd_mode_item",
                    "description": "setting_snd_mode_item",
                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                },
                {
                    "id": "setting_snd_mode_item_text",
                    "description": "Sound Mode 的文字",
                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
//                    "setting_snd_mode_item_img",
                    "setting_pic_zoom_span"
                ],
                "PageSize": 4,
                "ArrowFlag": true
            }
        },
        {
            "id": "setting_snd_dbx_sonic_text_0",
            "CaEType": "span",
            "description": "dbx sonic Text"
        },
        {
            "id": "setting_snd_dbx_surround_text_0",
            "CaEType": "span",
            "description": "setting_snd_dbx_surround_text_0"
        },
        {
            "id": "setting_snd_dbx_volume_text_0",
            "CaEType": "span",
            "description": "setting_snd_dbx_volume_text_0"
        },
        {
            "id": "setting_snd_dbx_volume_text_1",
            "CaEType": "span",
            "description": "setting_snd_dbx_volume_text_1"
        },


        {
            "id": "setting_snd_dbx_sonic_cmp",
            "description": "sonic 控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_snd_mode_cmp",
                "downTo": "setting_snd_dbx_surround_cmp"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingSndDBXSonicFlip',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingSndModeEscHandler",
                "aftUpHandler": "SndModeRefreshHelpInfo",
                "aftDownHandler": "SndModeRefreshHelpInfo"
            }
        },
        {
            "id": "setting_snd_dbx_surround_cmp",
            "description": "surround 控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_snd_dbx_sonic_cmp",
                "downTo": "setting_snd_dbx_volume_cmp"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingSndDBXSurroundFlip',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingSndModeEscHandler",
                "aftUpHandler": "SndModeRefreshHelpInfo",
                "aftDownHandler": "SndModeRefreshHelpInfo"
            }
        },

        {
            "id": "setting_snd_dbx_volume_cmp",
            "description": "setting_snd_dbx_volume_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
                "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
                "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "DBXVolumeEnterHandler",
                "aftDownHandler": "DBXVolumeAftDownHandler",
                "aftUpHandler": "DBXVolumeAftUpHandler",
                "aftEscHandler": "SettingSndModeEscHandler",
                "befDownHandler": "DBXVolumeBefDownHandler",
                "befUpHandler": "DBXVolumeBefUpHandler",
                "aftRightHandler": "DBXVolumeAftRightHandler",
                "aftLeftHandler": "DBXVolumeAftLeftHandler"
            },
            "nav": {
                "upTo": "setting_snd_dbx_surround_cmp",
                "leftTo": "",
                "downTo": "setting_snd_mode_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_snd_dbx_volume_item",
                    "description": "setting_snd_dbx_volume 的单个选项",
                    "CaEType": "div"
                },
                {
                    "id": "setting_snd_dbx_volume_item_text",
                    "description": "setting_snd_dbx_volume 单个选项文字",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_snd_dbx_volume_item",
                    "setting_snd_dbx_volume_item_text"
                ]
            }
        }
    ];
    return PageDataSettingSndMode;
}

var PageDataSettingSndMode = {
    //
    "setting_snd_dbx_sonic_text_0": {Data: "Total Sonics"},
    "setting_snd_dbx_surround_text_0": {Data: "Total Surround"},
    "setting_snd_dbx_volume_text_0": {Data: "Total Volume"},
    "setting_snd_dbx_volume_text_1": {Data: ""},

    "setting_snd_dbx_sonic_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        },
        disable: false
    },
    "setting_snd_dbx_surround_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        },
        disable: false
    },
    "setting_snd_dbx_volume_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_dbx_volume_item": "",
                "setting_snd_dbx_volume_item_text": {Data: "Off"}
            },
            {
                "setting_snd_dbx_volume_item": "",
                "setting_snd_dbx_volume_item_text": {Data: "Normal Mode"}
            },
            {
                "setting_snd_dbx_volume_item": "",
                "setting_snd_dbx_volume_item_text": {Data: "Night Mode"}
            }
        ]
    },
    //
    "setting_snd_mode_title_text_0": {Data: "Sound Mode"},
    "setting_snd_mode_title_text_1": {Data: ""},

    setting_snd_mode_cmp: {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                /*"setting_snd_mode_item_img": {Data: "img/SndModeStandardUnsel.png"},*/
                "setting_snd_mode_item_text": {Data: "Standard"}
            },
            {
//                "setting_snd_mode_item_img": {Data: "img/SndModeMusicUnsel.png"},
                "setting_snd_mode_item_text": {Data: "Theatre"}
            },
            {
//                "setting_snd_mode_item_img": {Data: "img/SndModeTheaterUnsel.png"},
                "setting_snd_mode_item_text": {Data: "Music"}
            },
            {
//                "setting_snd_mode_item_img": {Data: "img/SndModeSpeechUnsel.png"},
                "setting_snd_mode_item_text": {Data: "Speech"}
            },
            {
//                "setting_snd_mode_item_img": {Data: "img/SndModeSpeechUnsel.png"},
                "setting_snd_mode_item_text": {Data: "Late Night"}
            }
        ]
    },
    operateData: {
//
        "DBXVolumeMarqueeLength": 12,
        "setting_snd_dbx_sonic_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "setting_snd_dbx_surround_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "setting_snd_dbx_volume_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_dbx_volume_item": "",
                    "setting_snd_dbx_volume_item_text": {Data: "Off"}
                },
                {
                    "setting_snd_dbx_volume_item": "",
                    "setting_snd_dbx_volume_item_text": {Data: "Normal Mode"}
                },
                {
                    "setting_snd_dbx_volume_item": "",
                    "setting_snd_dbx_volume_item_text": {Data: "Night Mode"}
                }
            ]
        },
        "volCmpTextEnum": ["Off", "Normal", "Night"],
        //CfgHelpInfo
        helpInfo: {
            "setting_snd_dbx_sonic_cmp": {
                title: "Total Sonics",
                content: "Optimizes overall sound quality by increasing bass, widening the sound field and provides a clear, natural dialog."
            },
            "setting_snd_dbx_surround_cmp": {
                title: "Total Surround",
                "content": "Provides surround sound experience by utilizing psychoacoustic processing to place sounds beside, behind and above the viewer. For best results use with Total Sonics."
            },
            "setting_snd_dbx_volume_cmp": {
                title: "Total Volume",
                content: "Maintains consistent loudness levels from wide dynamic range programs, loud commercials, and channel or input changes."
            }
            //setting_snd_mode_cmp: {  title: "Sound Mode", content: "Select a preset sound mode to suit the type of content you are listening to."}
        },
        helpInfoVec: [
            //
            {
                title: "Standard",
                content: "In Standard mode, the TV delivers a flat frequency response, which preserves the natural characteristics of the original sound."
            },
            {
                title: "Theatre",
                "content": "Theater mode increases the surround sound effect and provides a more prominent subwoofer response."
            },
            {
                title: "Music",
                "content": "In Music mode low and high frequencies are emphasized to enhance musical instrument reproduction."
            },
            {
                title: "Speech",
                content: "In Speech mode low and high frequencies are attenuated to improve the reproduction and clarity of the human voice."
            },
            {
                title: "Late Night",
                content: "In Late Night mode, the TV will improve the reproduction and clarity of the human voice with a low volume level."
            }
        ],
        "SndModeMarqueeLength": 10,
        "setting_snd_mode_title_text_0": {Data: "Sound Mode:"},
        "setting_snd_mode_title_text_1": {Data: ""},
        setting_snd_mode_cmp: {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
//                    "setting_snd_mode_item_img": {Data: "img/SndModeStandardUnsel.png"},
                    "setting_snd_mode_item_text": {Data: "Standard"}
                },
                {
//                    "setting_snd_mode_item_img": {Data: "img/SndModeMusicUnsel.png"},
                    "setting_snd_mode_item_text": {Data: "Theatre"}
                },
                {
//                    "setting_snd_mode_item_img": {Data: "img/SndModeTheaterUnsel.png"},
                    "setting_snd_mode_item_text": {Data: "Music"}
                },
                {
//                    "setting_snd_mode_item_img": {Data: "img/SndModeSpeechUnsel.png"},
                    "setting_snd_mode_item_text": {Data: "Speech"}
                },
                {
//                    "setting_snd_mode_item_img": {Data: "img/SndModeSpeechUnsel.png"},
                    "setting_snd_mode_item_text": {Data: "Late Night"}
                }
            ]
        },
//        imgData: {
//            img_0: {
//                normal: "img/SndModeStandardUnsel.png",
//                focus: "img/SndModeStandardSel.png"
//            },
//            img_1: {
//                normal: "img/SndModeMusicUnsel.png",
//                focus: "img/SndModeMusicSel.png"
//            },
//            img_2: {
//                normal: "img/SndModeTheaterUnsel.png",
//                focus: "img/SndModeTheaterSel.png"
//            },
//            img_3: {
//                normal: "img/SndModeSpeechUnsel.png",
//                focus: "img/SndModeSpeechSel.png"
//            },
//            img_4: {
//                normal: "img/SndModeUserUnsel.png",
//                focus: "img/SndModeUserSel.png"
//            }
//        },
        modeEnum: ["Standard", "Theatre", "Music", "Speech", "Late Night"]
    },
    "langData": {
        "Sound Mode": ["Sound Mode"],
        "Standard": ["Standard"],
        "Music": ["Music"],
        "Theatre": ["Theatre"],
        "Speech": ["Speech"],
        "Late Night": ["Late Night"],
        "Separate control": ["Total Sonics"],
        "Headphone Volume": ["Total Surround"],
        "On": ["On"],
        "Off": ["Off"],
        "Normal": ["Normal"],
        "Night": ["Night"],
        "Normal Mode": [],
        "Night Mode": []
    },
    rewrite: "SettingSndModeRewrite"
}


/**
 * 声音模式页rewrite
 *
 SL2_TVAPI_I32_SOUND_ENUM_ADJUSTMENT_OFF     = 0,
 SL2_TVAPI_I32_SOUND_ENUM_ADJUSTMENT_SPEECH    = 1,         //Speech
 SL2_TVAPI_I32_SOUND_ENUM_ADJUSTMENT_CLASSICAL  = 2,
 SL2_TVAPI_I32_SOUND_ENUM_ADJUSTMENT_POP    = 3,
 SL2_TVAPI_I32_SOUND_ENUM_ADJUSTMENT_CUSTOM_MUSIC = 4,      //Music
 SL2_TVAPI_I32_SOUND_ENUM_ADJUSTMENT_CUSTOM_FILM  = 5       //Theatre
 * @constructor     //user standard是哪个
 */
function SettingSndModeRewrite(pageData) {
    try {
        var sndModeEnum = pageData.operateData.setting_snd_mode_cmp.DataSelectedIndex;
//        pageData.setting_snd_mode_title_text_1.Data = pageData.operateData.modeEnum[sndModeEnum];
        NaviBarRewriteEasy.call(this, pageData, "setting_snd_mode_cmp", sndModeEnum);
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        var sonicState = pageData.operateData.setting_snd_dbx_sonic_cmp.switchType;
        FlipSwitchRewriteEasy.call(this, pageData, "setting_snd_dbx_sonic_cmp", sonicState);
        var surroundState = pageData.operateData.setting_snd_dbx_surround_cmp.switchType;
        FlipSwitchRewriteEasy.call(this, pageData, "setting_snd_dbx_surround_cmp", surroundState);
        var dbxVolMode = pageData.operateData.setting_snd_dbx_volume_cmp.DataSelectedIndex;
        pageData.setting_snd_dbx_volume_text_1.Data = "";// pageData.operateData.volCmpTextEnum[dbxVolMode];
        NaviBarRewriteEasy.call(this, pageData, "setting_snd_dbx_volume_cmp", dbxVolMode);
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#setting_snd_dbx_sonic_img").css('float', dir_0);
        $("#setting_snd_dbx_surround_img").css('float', dir_0);
        $("#setting_snd_dbx_volume_img").css('float', dir_0);

        $("#setting_snd_dbx_sonic_cmp").css('float', dir_1);
        $("#setting_snd_dbx_surround_cmp").css('float', dir_1);
        //$("#setting_snd_dbx_volume_cmp").css('float', dir_1);

    }
    catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndModeEscHandler() {
    try {
        CloseSndHelpInfoPage();
        hiWebOsFrame.SettingSndModePage.close();
        hiWebOsFrame.SettingSndModePage.origin.open();
        hiWebOsFrame.SettingSndModePage.origin.hiFocus();
        hiWebOsFrame.SettingSndModePage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndModePage.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingSndModeRefreshHelpInfo(selIdx) {
    try {
        var helpInfoVec = PageDataSettingSndMode.operateData.helpInfoVec;
        sndHelpInfo.setHelpInfoText(helpInfoVec[selIdx].title, helpInfoVec[selIdx].content);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SndModeEnterHandler() {
    try {
        var sndModeCmp = this;
        var sndModeSelIdx = sndModeCmp.SelectedIndex;
        debugG("SELIDX_" + sndModeSelIdx);
        if (sndModeCmp.DataSelectedIndex != sndModeSelIdx) {
            sndModeCmp.DataSelectedIndex = sndModeSelIdx;

            sndModeCmp.page.operateData[sndModeCmp.id].DataSelectedIndex = sndModeSelIdx;
            sndModeCmp.page.operateData[sndModeCmp.id].SelectedIndex = sndModeSelIdx;

//            sndModeCmp.page.data.setting_snd_mode_title_text_1.Data = sndModeCmp.page.operateData.modeEnum[sndModeSelIdx];
//            sndModeCmp.page.operateData.setting_snd_mode_title_text_1.Data = sndModeCmp.page.operateData.modeEnum[sndModeSelIdx];

            if (sndModeSelIdx >= 0 && sndModeSelIdx <= 4) {
                debugG("model.sound.setSoundMode(" + sndModeSelIdx + ")");
                model.sound.setSoundMode(sndModeSelIdx);

            } else {
                debugE("Snd Mode Selected Index Err!")
            }
            SettingSndModeInit();
            this.page.rewriteDataOnly();

//            SndModeImgRefresh(sndModeSelIdx);

            //TODO 修改二级页面数据 & SetRecentUse
//            if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
//                PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[0].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.ModeEnum[sndModeSelIdx];
//            }
            SetRecentUse("Sound Mode", 1, FirPageSndIdx.SndMode);

        }
    } catch (ex) {
        debugE(ex.message);
    }
}

//function SndModeRightHandler() {
//    for (var i = 0; i < 5; i++) {
//        if (i == this.SelectedIndex) {
//            $("#setting_snd_mode_cmp_setting_snd_mode_item_img_sys" + i).attr("src", this.page.operateData.imgData["img_" + i].focus);
//        } else {
//            $("#setting_snd_mode_cmp_setting_snd_mode_item_img_sys" + i).attr("src", this.page.operateData.imgData["img_" + i].normal);
//        }
//    }
//}

//function SndModeLeftHandler() {
//    for (var i = 0; i < 5; i++) {
//        if (i == this.SelectedIndex) {
//            $("#setting_snd_mode_cmp_setting_snd_mode_item_img_sys" + i).attr("src", this.page.operateData.imgData["img_" + i].focus);
//        } else {
//            $("#setting_snd_mode_cmp_setting_snd_mode_item_img_sys" + i).attr("src", this.page.operateData.imgData["img_" + i].normal);
//        }
//    }
//}

//function SndModeImgRefresh(idx) {
//    for (var i = 0; i < 5; i++) {
//        if (i == idx) {
//            $("#setting_snd_mode_cmp_setting_snd_mode_item_img_sys" + i).attr("src", PageDataSettingSndMode.operateData.imgData["img_" + i].focus);
//        } else {
//            $("#setting_snd_mode_cmp_setting_snd_mode_item_img_sys" + i).attr("src", PageDataSettingSndMode.operateData.imgData["img_" + i].normal);
//        }
//    }
//}


function onSettingSndModeOpen() {
    try {
//        SndModeImgRefresh(PageDataSettingSndMode.setting_snd_mode_cmp.SelectedIndex);
        for (var i = 0; i < 5; i++) {
            SoundModeIndexDelMarquee(i);
        }
        SoundModeIndexAddMarquee(this.data.setting_snd_mode_cmp.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndModeDestroy() {
    try {
        hiWebOsFrame.SettingSndModePage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SoundModeAftLeftHandler() {
    try {
        for (var i = 0; i < 5; i++) {
            SoundModeIndexDelMarquee(i);
        }
        SoundModeIndexAddMarquee(this.SelectedIndex);
        SettingSndModeRefreshHelpInfo(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SoundModeAftRightHandler() {
    try {
        for (var i = 0; i < 5; i++) {
            SoundModeIndexDelMarquee(i);
        }
        SoundModeIndexAddMarquee(this.SelectedIndex);
        SettingSndModeRefreshHelpInfo(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SoundModeIndexDelMarquee(idx) {
    try {
        var marquee = $("#setting_snd_mode_cmp_setting_snd_mode_item_text_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_snd_mode_cmp_setting_snd_mode_item_text_sys" + idx + " marquee").html();
            var marquee = $("#setting_snd_mode_cmp_setting_snd_mode_item_text_sys" + idx).html(htmlText);
        }
        $("#setting_snd_mode_cmp_setting_snd_mode_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        debugE(ex.message);
    }
}

function SoundModeIndexAddMarquee(idx) {
    try {
        var sclDir = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        for (var i = 0; i < 5; i++) {
            $("#setting_snd_mode_cmp_setting_snd_mode_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_snd_mode_cmp_setting_snd_mode_item_text_sys" + i).html();
                if (htmlText.length > PageDataSettingSndMode.operateData.SndModeMarqueeLength) {
                    $("#setting_snd_mode_cmp_setting_snd_mode_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150' + ' direction=' + sclDir + '>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingSndDBXSonicFlip() {
    try {
        var sonicState = model.sound.getTotalSonics();
        debugG("sonicState before change: " + sonicState);
        model.sound.setTotalSonics(Bool2Num(!sonicState));
        debugG("model.sound.setTotalSonics(" + Bool2Num(!sonicState) + ")");
        var sonicCmp = this;

        sonicState = UIMidValOpposite(sonicState);
        FlipSwitchEasyChange.call(this, sonicCmp, !sonicState);
        SetRecentUse("Total Sonics", 1, FirPageSndIdx.SndDBX);

    }
    catch (ex) {
        debugE(ex.message);
    }
}
function SettingSndDBXSurroundFlip() {
    try {

        var surroundState = model.sound.getTotalSurround();
        debugG("surroundState before change: " + surroundState);
        model.sound.setTotalSurround(Bool2Num(!surroundState));
        debugG("model.sound.setTotalSurround(" + Bool2Num(!surroundState) + ")");

        var surroundCmp = this;

        surroundState = UIMidValOpposite(surroundState);
        FlipSwitchEasyChange.call(this, surroundCmp, !surroundState);
        SetRecentUse("Total Surround", 1, FirPageSndIdx.SndDBX);

    }
    catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var DBXVolCmp = this;
            debugG("dbxTotalVolume before change: " + this.DataSelectedIndex);

            var dbxTotalVol = DBXTotalVolUI2Mid(this.SelectedIndex);

            debugG("dbxTotalVol aft DBXTotalVolUI2Mid: " + dbxTotalVol);
            model.sound.setTotalVolume(dbxTotalVol);
            debugG("model.sound.setTotalVolume(" + this.SelectedIndex + ")");
            NaviBarEasyChange.call(this, DBXVolCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();

            SetRecentUse("Total Volume", 1, FirPageSndIdx.SndDBX);
        }

    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeAftDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        SndModeRefreshHelpInfo();
        DBXVolumeIndexAddMarquee(this.SelectedIndex);

    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeAftUpHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        SndModeRefreshHelpInfo();
        DBXVolumeIndexAddMarquee(this.SelectedIndex);

    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeBefDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
            this.page.rewriteDataOnly();

        }

        DBXVolumeIndexDelMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}
function DBXVolumeBefUpHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();

            this.page.rewriteDataOnly();

        }

        DBXVolumeIndexDelMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeIndexAddMarquee(idx) {
    try {
        for (var i = 0; i < 3; i++) {
            $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + i).html();
                if (htmlText.length > PageDataSettingSndMode.operateData.DBXVolumeMarqueeLength) {
                    $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeIndexDelMarquee(idx) {
    try {
        var marquee = $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + idx + " marquee").html();
            var marquee = $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + idx).html(htmlText);
        }
        $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeAftRightHandler() {
    try {
        for (var i = 0; i < 3; i++) {
            DBXVolumeIndexDelMarquee(i);
        }
        DBXVolumeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeAftLeftHandler() {
    try {
        for (var i = 0; i < 3; i++) {
            DBXVolumeIndexDelMarquee(i);
        }
        DBXVolumeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}
function SndModeRefreshHelpInfo() {
    try {
        var curId = hiWebOsFrame.SettingSndModePage.currentSelectedTree[0].id;
        if('setting_snd_mode_cmp' != curId){
            var helpInfo = PageDataSettingSndMode.operateData.helpInfo[curId];
            sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);
        }
    }
    catch (ex) {
        debugE(ex.message);
    }
    try {
        if('setting_snd_mode_cmp' == curId){
            SettingSndModeRefreshHelpInfo(PageDataSettingSndMode.setting_snd_mode_cmp.SelectedIndex);
        }
    }
    catch (e) {
        DBG_ERROR(e.message);
    }
}