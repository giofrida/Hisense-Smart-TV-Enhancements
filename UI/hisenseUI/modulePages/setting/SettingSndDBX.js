/**
 * Created by ghl on 14-6-19.
 */

function getSettingSndDBXData(opts) {
    try {
        SettingSndDBXInit();
        opts.CaE = [
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
                    "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
                },
                "nav": {
                    "upTo": "setting_snd_dbx_volume_cmp",
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
                    "aftEscHandler": "SettingSndDBXSonicEscHandler",
                    "aftUpHandler": "DBXRefreshHelpInfo",
                    "aftDownHandler": "DBXRefreshHelpInfo"
                }
            },
            {
                "id": "setting_snd_dbx_surround_cmp",
                "description": "surround 控件",
                "classes": {
                    "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
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
                    "aftEscHandler": "SettingSndDBXSonicEscHandler",
                    "aftUpHandler": "DBXRefreshHelpInfo",
                    "aftDownHandler": "DBXRefreshHelpInfo"
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
                    "aftEscHandler": "SettingSndDBXSonicEscHandler",
                    "befDownHandler": "DBXVolumeBefDownHandler",
                    "befUpHandler": "DBXVolumeBefUpHandler",
                    "aftRightHandler": "DBXVolumeAftRightHandler",
                    "aftLeftHandler": "DBXVolumeAftLeftHandler"
                },
                "nav": {
                    "upTo": "setting_snd_dbx_surround_cmp",
                    "leftTo": "",
                    "downTo": "setting_snd_dbx_sonic_cmp",
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
        return PageDataSettingSndDBX;
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndDBXOpen() {
    try {
        //CreateSndHelpInfoPage("Total Sonics", "Optimize the overall sound performance.");
        for (var i = 0; i < 3; i++) {
            DBXVolumeIndexDelMarquee(i);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}
function onSettingSndDBXClose() {
    try {
        CloseSndHelpInfoPage();
    } catch (ex) {
        debugE(ex.message);
    }
}
function onSettingSndDBXDestroy() {
    try {
        hiWebOsFrame.SettingSndDBX = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndDBXSonicEscHandler() {

    try {
        hiWebOsFrame.SettingSndDBX.close();
        hiWebOsFrame.SettingSndDBX.origin.open();
        hiWebOsFrame.SettingSndDBX.origin.hiFocus();
        hiWebOsFrame.SettingSndDBX.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndDBX.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

}

var PageDataSettingSndDBX = {
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


    operateData: {
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
            "setting_snd_dbx_sonic_cmp": {title: "Total Sonics", content: "Optimize the overall sound performance."},
            "setting_snd_dbx_surround_cmp": {title: "Total Surround", "content": "Enable/Disable Surround Sound effects for the content that you're viewing."},
            "setting_snd_dbx_volume_cmp": { title: "Total Volume", content: "Automatically equalize the volume level when switching to another channel." }

        }
    },
    langData: {
        "Separate control": ["Total Sonics"],
        "Headphone Volume": ["Total Surround"],
        "On": ["On"],
        "Off": ["Off"],
        "Normal": ["Normal"],
        "Night": ["Night"],
        "Normal Mode": [],
        "Night Mode": []
    },
    rewrite: "SettingSndDBXRewrite"

};


function SettingSndDBXRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#setting_snd_dbx_sonic_img").css('float', dir_0);
        $("#setting_snd_dbx_surround_img").css('float', dir_0);
        $("#setting_snd_dbx_volume_img").css('float', dir_0);

        $("#setting_snd_dbx_sonic_cmp").css('float', dir_1);
        $("#setting_snd_dbx_surround_cmp").css('float', dir_1);
        $("#setting_snd_dbx_volume_cmp").css('float', dir_1);
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
}


///**
// *
// * @constructor
// */
//function DisableSettingSndHeadPhoneVolStyle() {
//    $("#setting_snd_HP_headphone_volume_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
//    $("#setting_snd_headphone_volume_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
////    $("#setting_snd_HP_headphone_volume_text_1").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
//}
//
//function EnableSettingSndHeadPhoneVolStyle() {
//    $("#setting_snd_HP_headphone_volume_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
//    $("#setting_snd_headphone_volume_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
////    $("#setting_snd_HP_headphone_volume_text_1").attr("class", "setting_snd_equalizer_hz_0_text_0");
//}


/**
 * headphone flip
 * @constructor
 */
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

function DBXVolumeAftDownHandler(){
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        DBXRefreshHelpInfoforBar();
        DBXVolumeIndexAddMarquee(this.SelectedIndex);

    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeAftUpHandler(){
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        //DBXRefreshHelpInfoforBar();
        DBXVolumeIndexAddMarquee(this.SelectedIndex);

    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeBefDownHandler(){
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }

        DBXVolumeIndexDelMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}
function DBXVolumeBefUpHandler(){
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }

        DBXVolumeIndexDelMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeIndexAddMarquee(idx){
    try {
        for (var i = 0; i < 3; i++) {
            $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + i).html();
                if (htmlText.length > PageDataSettingSndDBX.operateData.DBXVolumeMarqueeLength) {
                    $("#setting_snd_dbx_volume_cmp_setting_snd_dbx_volume_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeIndexDelMarquee(idx){
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

function DBXVolumeAftRightHandler(){
    try {
        for (var i = 0; i < 3; i++) {
            DBXVolumeIndexDelMarquee(i);
        }
        DBXVolumeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXVolumeAftLeftHandler(){
    try {
        for (var i = 0; i < 3; i++) {
            DBXVolumeIndexDelMarquee(i);
        }
        DBXVolumeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        debugE(ex.message);
    }
}

//function DBXVolumeUpHandler() {
//    try {
//        DBXRefreshHelpInfo();
//        if (this.SelectedIndex != this.DataSelectedIndex) {
//            this.SelectedIndex = this.DataSelectedIndex;
//        }
//    } catch (ex) {
//        debugE(ex.message);
//    }
//
//}
//
//function DBXVolumeDownHandler() {
//    try {
//        DBXRefreshHelpInfo();
//        if (this.SelectedIndex != this.DataSelectedIndex) {
//            this.SelectedIndex = this.DataSelectedIndex;
//        }
//    } catch (ex) {
//        debugE(ex.message);
//    }
//
//}

function DBXRefreshHelpInfo() {
    try {
        //debugG("DBXRefreshHelpInfo")
        //var curId = hiWebOsFrame.SettingSndDBX.currentSelectedTree[0].id;
        //var tmpJson = PageDataSettingSndDBX.operateData.CfgHelpInfo[curId];
        //////sndHelpInfo.setHelpInfoText(tmpJson.title, tmpJson.content);
        var curId = hiWebOsFrame.SettingSndDBX.currentSelectedTree[0].id;
        var helpInfo = PageDataSettingSndDBX.operateData.helpInfo[curId];
        sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);

    } catch (ex) {
        debugE(ex.message);
    }
}

function DBXRefreshHelpInfoforBar()
{
    try{
        var helpInfo = PageDataSettingSndDBX.operateData.helpInfo.setting_snd_dbx_volume_cmp;
        sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);
    }
    catch(ex){
        debugE(ex.message);
    }
}