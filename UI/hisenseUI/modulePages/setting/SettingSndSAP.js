/**
 * Created by ghl on 14-6-19.
 */

function getSettingSndSAPData(opts) {
    try {
        SettingSndSAPInit();
        opts.CaE = [
            {
                "id": "setting_snd_sap_mode_text_0",
                "CaEType": "span",
                "description": "setting_snd_sap_mode_text_0"
            },
            {
                "id": "setting_snd_sap_mode_text_1",
                "CaEType": "span",
                "description": "setting_snd_sap_mode_text_1"
            },

            {
                "id": "setting_snd_sap_cmp",
                "description": "setting_snd_sap_cmp",
                "CaEType": "NavigationBar",
                "classes": {
                    "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
                    "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
                    "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
                    "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
                    "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
                },
                "handler": {
                    "aftEnterHandler": "SAPCmpEnterHandler",
                    "aftDownHandler": "SAPCmpDownHandler",
                    "aftUpHandler": "SAPCmpUpHandler",
                    "aftEscHandler": "SettingSndSAPEscHandler",
                    "befDownHandler": "SAPCmpDownHandler",
                    "befUpHandler": "SAPCmpUpHandler"
                },
                "nav": {
                    "upTo": "",
                    "leftTo": "",
                    "downTo": "",
                    "rightTo": ""
                },
                disable: false,

                "oriCaE": [
                    {
                        "id": "setting_snd_sap_cmp_item",
                        "description": "setting_snd_sap_cmp 的单个选项",
                        "CaEType": "div"
                    },
                    {
                        "id": "setting_snd_sap_cmp_item_text",
                        "description": "setting_snd_sap_cmp 单个选项文字",
                        "CaEType": "div"
                    }
                ],
                "NavigationBarConfig": {
                    "NavigationBarDataItem": [
                        "setting_snd_sap_cmp_item",
                        "setting_snd_sap_cmp_item_text"
                    ]
                }
            }


        ];
        return PageDataSettingSndSAP;
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingSndSAPOpen() {
    try {

    } catch (ex) {
        debugE(ex.message);
    }
}
function onSettingSndSAPClose() {
    try {

    } catch (ex) {
        debugE(ex.message);
    }
}
function onSettingSndSAPDestroy() {
    try {
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingSndSAPEscHandler() {

    try {
        hiWebOsFrame.SettingSndSAP.close();
        hiWebOsFrame.SettingSndSAP.origin.open();
        hiWebOsFrame.SettingSndSAP.origin.hiFocus();
        hiWebOsFrame.SettingSndSAP.origin.rewriteDataOnly();
        hiWebOsFrame.SettingSndSAP.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

}

var PageDataSettingSndSAP = {
    "setting_snd_sap_mode_text_0": {Data: "SAP"},
    "setting_snd_sap_mode_text_1": {Data: ""},

    "setting_snd_sap_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_snd_sap_cmp_item": "",
                "setting_snd_sap_cmp_item_text": {Data: "Mono"}
            },
            {
                "setting_snd_sap_cmp_item": "",
                "setting_snd_sap_cmp_item_text": {Data: "Stereo"}
            },
            {
                "setting_snd_sap_cmp_item": "",
                "setting_snd_sap_cmp_item_text": {Data: "SAP"}
            }
        ]
    },


    operateData: {
        "setting_snd_sap_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_snd_dbx_volume_item": "",
                    "setting_snd_dbx_volume_item_text": {Data: "Mono"}
                },
                {
                    "setting_snd_dbx_volume_item": "",
                    "setting_snd_dbx_volume_item_text": {Data: "Stereo"}
                },
                {
                    "setting_snd_dbx_volume_item": "",
                    "setting_snd_dbx_volume_item_text": {Data: "SAP"}
                }
            ]
        },
        "sapTextEnum": ["Mono", "Stereo", "SAP"]
    },
    langData: {
        "SAP": ["SAP"],
        "Mono": ["Mono"],
        "Stereo": ["Stereo"]
    },
    rewrite: "SettingSndSAPRewrite"

};


function SettingSndSAPRewrite(pageData) {
    try {
        var sapMode = pageData.operateData.setting_snd_sap_cmp.DataSelectedIndex;
        pageData.setting_snd_sap_mode_text_1.Data = "";//pageData.operateData.sapTextEnum[sapMode];
        NaviBarRewriteEasy.call(this, pageData, "setting_snd_sap_cmp", sapMode);
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

function SAPCmpEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var SAPCmp = this;
            model.sound.setSap(this.SelectedIndex + 1); //UI 与底层对应
            debugG("model.sound.setSap(" + this.SelectedIndex + ")");

//            switch (this.SelectedIndex) {
//                case 0:     //Off
//                    //TODO   Disable SPDIF Delay
//                    break;
//                case 1:     //RAW
//                    //TODO Enable SPDIF Delay
//
//                    break;
//                case 2:     //PCM
//                    //TODO Enable SPDIF Delay
//
//                    break;
//                default :
//                    break;
//            }

            NaviBarEasyChange.call(this, SAPCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();

            //SetRecentUse("SAP", 1, FirPageSndIdx.SndSAP);
        }

    } catch (ex) {
        debugE(ex.message);
    }
}

function SAPCmpUpHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        debugE(ex.message);
    }

}

function SAPCmpDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
    } catch (ex) {
        debugE(ex.message);
    }

}

