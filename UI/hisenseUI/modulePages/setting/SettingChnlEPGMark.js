/**
 * Created by ghl on 14-6-19.
 */


function getSettingChnlEPGMarkData(opts) {
    SettingChnlEPGMarkInit();
    opts.CaE = [
        {
            "id": "setting_chnl_EPG_mark_title_text",
            "description": "EPG Mark title",
            "CaEType": "span"
        },
        {
            "id": "setting_chnl_EPG_mark_color_0_text",
            "description": "EPG Mark color 0 Text",
            "CaEType": "span"
        },
        {
            "id": "setting_chnl_EPG_mark_color_1_text",
            "description": "EPG Mark color 1 Text",
            "CaEType": "span"
        },
        {
            "id": "setting_chnl_EPG_mark_color_2_text",
            "description": "EPG Mark color 2 Text",
            "CaEType": "span"
        },
        {
            "id": "setting_chnl_EPG_mark_color_0_left_arrow",
            "description": "setting_chnl_EPG_mark_color_0_left_arrow",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_EPG_mark_color_1_left_arrow",
            "description": "setting_chnl_EPG_mark_color_1_left_arrow",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_EPG_mark_color_2_left_arrow",
            "description": "setting_chnl_EPG_mark_color_2_left_arrow",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_EPG_mark_color_0_right_arrow",
            "description": "setting_chnl_EPG_mark_color_0_right_arrow",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_EPG_mark_color_1_right_arrow",
            "description": "setting_chnl_EPG_mark_color_1_right_arrow",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_EPG_mark_color_2_right_arrow",
            "description": "setting_chnl_EPG_mark_color_2_right_arrow",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_EPG_mark_color_0_cmp",
            "description": "EPG Mark设置页 color 0 部件",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_chnl_EPG_mark_color_0_cmp_item_normal",
                "focus": "setting_chnl_EPG_mark_color_0_cmp_item_focus",
                "disable": "setting_chnl_EPG_mark_color_0_cmp_item_disable",
                "dataSelected": "setting_chnl_EPG_mark_color_0_cmp_item_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingChnlEPGEnterHandlerFunc",
                "aftRightHandler": "SettingChnlEPGRightHandlerFunc",
                "aftLeftHandler": "SettingChnlEPGLeftHandlerFunc",
                "befLeftHandler": "SettingChnlEPGBefLeftHandlerFunc",
                "aftDownHandler": "SettingChnlEPGAftDownHandlerFunc",
                "aftUpHandler": "SettingChnlEPGAftUpHandlerFunc",
                "befDownHandler": "SettingChnlEPGBefDownHandlerFunc",
                "befUpHandler": "SettingChnlEPGBefUpHandlerFunc",
                "aftEscHandler": "SettingChnlEPGEscHandler"
            },
            "nav": {"leftTo": "", "downTo": "setting_chnl_EPG_mark_color_1_cmp", "rightTo": "", "upTo": "setting_chnl_EPG_mark_color_2_cmp"},
            disable: false,
            "oriCaE": [
                {
                    "id": "setting_chnl_EPG_mark_color_0_cmp_item",
                    "description": "EPG Mark 设置页 color 0的单个选项",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_chnl_EPG_mark_color_0_cmp_item"
                ],

//                        "SelectedIndex": 2, //need to be delete
                "PageSize": 4,
                "ArrowFlag": true
//                        "OldSelectedIndex": 2   //need to be delete
            },
            "linkZoomArrowleft": "setting_chnl_EPG_mark_color_0_left_arrow",
            "linkZoomArrowRight": "setting_chnl_EPG_mark_color_0_right_arrow"
//                    "linkZoonSpan": "setting_pic_currentZoom"
        },
        {
            "id": "setting_chnl_EPG_mark_color_1_cmp",
            "description": "EPG Mark设置页 color 1 部件",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_chnl_EPG_mark_color_0_cmp_item_normal",
                "focus": "setting_chnl_EPG_mark_color_0_cmp_item_focus",
                "disable": "setting_chnl_EPG_mark_color_0_cmp_item_disable",
                "dataSelected": "setting_chnl_EPG_mark_color_0_cmp_item_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingChnlEPGEnterHandlerFunc",
                "aftRightHandler": "SettingChnlEPGRightHandlerFunc",
                "aftLeftHandler": "SettingChnlEPGLeftHandlerFunc",
                "befLeftHandler": "SettingChnlEPGBefLeftHandlerFunc",
                "aftDownHandler": "SettingChnlEPGAftDownHandlerFunc",
                "aftUpHandler": "SettingChnlEPGAftUpHandlerFunc",
                "befDownHandler": "SettingChnlEPGBefDownHandlerFunc",
                "befUpHandler": "SettingChnlEPGBefUpHandlerFunc",
                "aftEscHandler": "SettingChnlEPGEscHandler"
            },
            "nav": {"leftTo": "", "downTo": "setting_chnl_EPG_mark_color_2_cmp", "rightTo": "", "upTo": "setting_chnl_EPG_mark_color_0_cmp"},
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_chnl_EPG_mark_color_1_cmp_item",
                    "description": "EPG Mark 设置页 color 1的单个选项",
                    "CaEType": "div"
//                            "classes": {
//                                "normal": "setting_chnl_EPG_mark_color_0_cmp_item_normal", "focus": "setting_chnl_EPG_mark_color_0_cmp_item_focus", "disable": "", "selected": "setting_chnl_EPG_mark_color_0_cmp_item_selected"
//                            }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_chnl_EPG_mark_color_1_cmp_item"
                ],
//                        "SelectedIndex": 2, //need to be delete
                "PageSize": 4,
                "ArrowFlag": true
//                        "OldSelectedIndex": 2   //need to be delete
            },
            "linkZoomArrowleft": "setting_chnl_EPG_mark_color_1_left_arrow",
            "linkZoomArrowRight": "setting_chnl_EPG_mark_color_1_right_arrow"
//                    "linkZoonSpan": "setting_pic_currentZoom"
        },
        {
            "id": "setting_chnl_EPG_mark_color_2_cmp",
            "description": "EPG Mark设置页 color 2 部件",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_chnl_EPG_mark_color_0_cmp_item_normal",
                "focus": "setting_chnl_EPG_mark_color_0_cmp_item_focus",
                "disable": "setting_chnl_EPG_mark_color_0_cmp_item_disable",
                "dataSelected": "setting_chnl_EPG_mark_color_0_cmp_item_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingChnlEPGEnterHandlerFunc",
                "aftRightHandler": "SettingChnlEPGRightHandlerFunc",
                "aftLeftHandler": "SettingChnlEPGLeftHandlerFunc",
                "befLeftHandler": "SettingChnlEPGBefLeftHandlerFunc",
                "aftDownHandler": "SettingChnlEPGAftDownHandlerFunc",
                "aftUpHandler": "SettingChnlEPGAftUpHandlerFunc",
                "befDownHandler": "SettingChnlEPGBefDownHandlerFunc",
                "befUpHandler": "SettingChnlEPGBefUpHandlerFunc",
                "aftEscHandler": "SettingChnlEPGEscHandler"
            },
            "nav": {"leftTo": "", "downTo": "setting_chnl_EPG_mark_color_0_cmp", "rightTo": "", "upTo": "setting_chnl_EPG_mark_color_1_cmp"},
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_chnl_EPG_mark_color_2_cmp_item",
                    "description": "EPG Mark 设置页 color 2的单个选项",
                    "CaEType": "div"
//                            "classes": {
//                                "normal": "setting_chnl_EPG_mark_color_0_cmp_item_normal", "focus": "setting_chnl_EPG_mark_color_0_cmp_item_focus", "disable": "", "selected": "setting_chnl_EPG_mark_color_0_cmp_item_selected"
//                            }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_chnl_EPG_mark_color_2_cmp_item"
                ],
//                        "SelectedIndex": 2, //need to be delete
                "PageSize": 4,
                "ArrowFlag": true
//                        "OldSelectedIndex": 2   //need to be delete
            },
            "linkZoomArrowleft": "setting_chnl_EPG_mark_color_2_left_arrow",
            "linkZoomArrowRight": "setting_chnl_EPG_mark_color_2_right_arrow"
//                    "linkZoonSpan": "setting_pic_currentZoom"
        }


    ];
    return PageDataSettingChnlEPGMark;

}

function SettingChnlEPGMarkInit() {

    try {
        var colorVector = tv ? model.epg.getThemsColor() : [0, 1, 2];
        DBG_INFO("colorVector To String is" + colorVector.toString());

        var Color0Mode, Color1Mode, Color2Mode;//   //此处可能是枚举

        if (colorVector.length < 3) {
            DBG_INFO("colorVector.length little than 3~~~~~~~~~~~~~~~~~");
            var tmpVector = [0, 1, 2];
            tv && model.epg.setThemsColor(tmpVector);
            DBG_INFO("epg Color changed to default");
            Color0Mode = 0;
            Color1Mode = 1;
            Color2Mode = 2;
        } else {
            if (colorVector[0] == colorVector[1] || colorVector[1] == colorVector[2] || colorVector[0] == colorVector[2]) {
                var tmpVector = [0, 1, 2];
                tv && model.epg.setThemsColor(tmpVector);
                DBG_INFO("epg Color changed to default");
                colorVector = tmpVector;
            }

            Color0Mode = colorVector[0];
            Color1Mode = colorVector[1];
            Color2Mode = colorVector[2];
        }

        if (typeof PageDataSettingChnlEPGMark != UNDEFINED_DEFSTR) {
            var EPGMarkOpeData = PageDataSettingChnlEPGMark.operateData;
            SettingChnlEPGDisableItemUpdate([Color0Mode, Color1Mode, Color2Mode]);
            NaviBarInitEasy.call(this, EPGMarkOpeData, "setting_chnl_EPG_mark_color_0_cmp", Color0Mode);
            NaviBarInitEasy.call(this, EPGMarkOpeData, "setting_chnl_EPG_mark_color_1_cmp", Color1Mode);
            NaviBarInitEasy.call(this, EPGMarkOpeData, "setting_chnl_EPG_mark_color_2_cmp", Color2Mode);
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGDisableItemUpdate(disableItemVector) {
    try {
        if (disableItemVector[0] == disableItemVector[1] || disableItemVector[1] == disableItemVector[2] || disableItemVector[0] == disableItemVector[2]) {
            DBG_ERROR("EPG color Mark disableItemVector Err:" + disableItemVector);
        }
        var EPGMarkOpeData = PageDataSettingChnlEPGMark.operateData;
        EPGMarkOpeData.EPGColor0DisableItem = [disableItemVector[1], disableItemVector[2]];
        EPGMarkOpeData.EPGColor1DisableItem = [disableItemVector[0], disableItemVector[2]];
        EPGMarkOpeData.EPGColor2DisableItem = [disableItemVector[0], disableItemVector[1]];
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingChnlEPGMarkOpen() {
    try {
        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 3; j++)
                SettingChnlEPGMarkDelMarquee(i, j);
        }
        SettingChnlEPGMarkAddMarquee(this.data.setting_chnl_EPG_mark_color_0_cmp.SelectedIndex, 0);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingChnlEPGMarkDestroy() {
    try {
        hiWebOsFrame.SettingChnlEPGMarkPage = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGEscHandler() {
    try {
        hiWebOsFrame.SettingChnlEPGMarkPage.close();
        hiWebOsFrame.SettingChnlEPGMarkPage.origin.open();
        hiWebOsFrame.SettingChnlEPGMarkPage.origin.hiFocus();
        hiWebOsFrame.SettingChnlEPGMarkPage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingChnlEPGMarkPage.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


}

var PageDataSettingChnlEPGMark = {
    "setting_chnl_EPG_mark_title_text": {Data: "EPG Mark"},
    "setting_chnl_EPG_mark_color_0_text": {Data: "News"}, /*不一定需要*/
    "setting_chnl_EPG_mark_color_1_text": {Data: "Shows"},
    "setting_chnl_EPG_mark_color_2_text": {Data: getMarketLangKey("Child", "Kids")},
    "setting_chnl_EPG_mark_color_0_cmp": {
//        leftArrowShow: true,
//        rightArrowShow: false,
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Movie"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "News"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Shows"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Sport"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: getMarketLangKey("Child", "Kids")}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Music"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Arts"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Social"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Education"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Hobby"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Series"}},
            {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Others"}}
        ],
        disableItem: []
    },
    "setting_chnl_EPG_mark_color_1_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
//        leftArrowShow: true,
//        rightArrowShow: false,
        Data: [
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Movie"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "News"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Shows"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Sport"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: getMarketLangKey("Child", "Kids")}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Music"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Arts"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Social"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Education"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Hobby"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Series"}},
            {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Others"}}
        ],
        disableItem: []
    },
    "setting_chnl_EPG_mark_color_2_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
//        leftArrowShow: true,
//        rightArrowShow: false,
        Data: [
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Movie"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "News"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Shows"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Sport"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: getMarketLangKey("Child", "Kids")}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Music"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Arts"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Social"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Education"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Hobby"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Series"}},
            {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Others"}}
        ],
        disableItem: []
    },
    operateData: {
//            "setting_chnl_EPG_mark_color_0_cmp": {
//                leftArrowShow: true,
//                rightArrowShow: false,
//                DataSelectedIndex: 0,
//                SelectedIndex: 0
//            },
//            "setting_chnl_EPG_mark_color_1_cmp": {
//                leftArrowShow: true,
//                rightArrowShow: false,
//                DataSelectedIndex: 0,
//                SelectedIndex: 0
//            },
//            "setting_chnl_EPG_mark_color_2_cmp": {
//                leftArrowShow: true,
//                rightArrowShow: false,
//                DataSelectedIndex: 0,
//                SelectedIndex: 0,
//                Data: [
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "News"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Shows"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Sport"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Child"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Music"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Arts"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Social"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Education"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Hobby"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Series"}},
//                    {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Others"}}
//                ]
//            },
        "setting_chnl_EPG_mark_color_0_cmp": {
//            leftArrowShow: true,
//            rightArrowShow: false,
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Movie"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "News"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Shows"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Sport"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: getMarketLangKey("Child", "Kids")}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Music"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Arts"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Social"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Education"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Hobby"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Series"}},
                {"setting_chnl_EPG_mark_color_0_cmp_item": {Data: "Others"}}
            ]
        },
        "setting_chnl_EPG_mark_color_1_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
//            leftArrowShow: true,
//            rightArrowShow: false,
            Data: [
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Movie"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "News"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Shows"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Sport"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: getMarketLangKey("Child", "Kids")}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Music"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Arts"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Social"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Education"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Hobby"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Series"}},
                {"setting_chnl_EPG_mark_color_1_cmp_item": {Data: "Others"}}
            ]
        },
        "setting_chnl_EPG_mark_color_2_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
//            leftArrowShow: true,
//            rightArrowShow: false,
            Data: [
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Movie"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "News"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Shows"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Sport"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: getMarketLangKey("Child", "Kids")}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Music"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Arts"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Social"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Education"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Hobby"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Series"}},
                {"setting_chnl_EPG_mark_color_2_cmp_item": {Data: "Others"}}
            ]
        },
//        "EPGMarkTypeEnum": ["Movie", "News", "Shows", "Sport", "Child", "Music", "Arts", "Social", "Education", "Hobby", "Series", "Others"],
        "EPGMarkTypeEnum": ["Movie", "News", "Shows", "Sport", getMarketLangKey("Child", "Kids"), "Music", "Arts", "Social", "Education", "Hobby", "Series", "Others"],
//        "EPGTypeEnum": [0x0001, 0x0002, 0x0004, 0x0008, 0x0010, 0x0020, 0x0040, 0x0080, 0x0100, 0x0200, 0x0400, 0x0800, 0x1000, 0xFFFF]
        "EPGColor0DisableItem": [],
        "EPGColor1DisableItem": [],
        "EPGColor2DisableItem": [],
        EPGColorMarqueeLength: 9
    },
    langData: {
        "EPG Mark": ["EPG Mark"],
        "Movie": ["Movie"],
        "News": ["News"],
        "Shows": ["Shows"],
        "Sport": ["Sport"],
        "Kids": [],
        "Child": [],
        "Music": ["Music"],
        "Arts": ["Arts"],
        "Social": ["Social"],
        "Education": ["Education"],
        "Hobby": ["Hobby"],
        "Series": ["Series"],
        "Others": ["Others"]
    },
    rewrite: "SettingChnlEPGMarkRewrite"


};


//function SettingChnlRefreshArrows(pageData) {
//    for (var i = 0; i < 3; i++) {
//        if (pageData.operateData["setting_chnl_EPG_mark_color_" + i + "_cmp"].leftArrowShow == true) {
//            $("#setting_chnl_EPG_mark_color_" + i + "_left_arrow").css("visibility", "visible")
//        } else {
//            $("#setting_chnl_EPG_mark_color_" + i + "_left_arrow").css("visibility", "hidden")
//        }
//
//        if (pageData.operateData["setting_chnl_EPG_mark_color_" + i + "_cmp"].rightArrowShow == true) {
//            $("#setting_chnl_EPG_mark_color_" + i + "_right_arrow").css("visibility", "visible")
//        } else {
//            $("#setting_chnl_EPG_mark_color_" + i + "_right_arrow").css("visibility", "hidden")
//        }
//    }
//
//}

function SettingChnlEPGMarkRewrite(pageData) {
    try {
        var Color0Mode = pageData.operateData.setting_chnl_EPG_mark_color_0_cmp.DataSelectedIndex;//   //此处可能是枚举
        pageData.setting_chnl_EPG_mark_color_0_text.Data = pageData.operateData.EPGMarkTypeEnum[Color0Mode];
        NaviBarRewriteEasy.call(this, pageData, "setting_chnl_EPG_mark_color_0_cmp", Color0Mode);

        var Color1Mode = pageData.operateData.setting_chnl_EPG_mark_color_1_cmp.DataSelectedIndex;//   //此处可能是枚举
        pageData.setting_chnl_EPG_mark_color_1_text.Data = pageData.operateData.EPGMarkTypeEnum[Color1Mode];
        NaviBarRewriteEasy.call(this, pageData, "setting_chnl_EPG_mark_color_1_cmp", Color1Mode);

        var Color2Mode = pageData.operateData.setting_chnl_EPG_mark_color_2_cmp.DataSelectedIndex;//   //此处可能是枚举
        pageData.setting_chnl_EPG_mark_color_2_text.Data = pageData.operateData.EPGMarkTypeEnum[Color2Mode];
        NaviBarRewriteEasy.call(this, pageData, "setting_chnl_EPG_mark_color_2_cmp", Color2Mode);

//        for (var i = 0; i < 3; i++) {
//            if (eval("Color" + i + "Mode") >= 4) {
//                pageData.operateData["setting_chnl_EPG_mark_color_" + i + "_cmp"].leftArrowShow = true;
//            } else {
//                pageData.operateData["setting_chnl_EPG_mark_color_" + i + "_cmp"].leftArrowShow = false;
//            }
//
//            if (eval("Color" + i + "Mode") <= 6) {   //11-4=7
//
//                pageData.operateData["setting_chnl_EPG_mark_color_" + i + "_cmp"].rightArrowShow = true;
//
//            } else {
//                pageData.operateData["setting_chnl_EPG_mark_color_" + i + "_cmp"].rightArrowShow = false;
//            }
//        }


//        SettingChnlRefreshArrows.call(this, pageData);

        pageData.setting_chnl_EPG_mark_color_0_cmp.disableItem = [];
        pageData.setting_chnl_EPG_mark_color_0_cmp.disableItem.push(pageData.operateData.EPGColor0DisableItem[0]);
        pageData.setting_chnl_EPG_mark_color_0_cmp.disableItem.push(pageData.operateData.EPGColor0DisableItem[1]);

        pageData.setting_chnl_EPG_mark_color_1_cmp.disableItem = [];
        pageData.setting_chnl_EPG_mark_color_1_cmp.disableItem.push(pageData.operateData.EPGColor1DisableItem[0]);
        pageData.setting_chnl_EPG_mark_color_1_cmp.disableItem.push(pageData.operateData.EPGColor1DisableItem[1]);

        pageData.setting_chnl_EPG_mark_color_2_cmp.disableItem = [];
        pageData.setting_chnl_EPG_mark_color_2_cmp.disableItem.push(pageData.operateData.EPGColor2DisableItem[0]);
        pageData.setting_chnl_EPG_mark_color_2_cmp.disableItem.push(pageData.operateData.EPGColor2DisableItem[1]);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function SettingChnlEPGEnterHandlerFunc() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var SelIdx = this.SelectedIndex;
            var colorVector = tv ? model.epg.getThemsColor() : [0, 1, 2];
            DBG_INFO("model.epg.getThemsColor()" + colorVector);
            DBG_INFO("this.id" + this.id);

            switch (this.id) {
                case "setting_chnl_EPG_mark_color_0_cmp":
                    colorVector[0] = SelIdx;
                    break;
                case "setting_chnl_EPG_mark_color_1_cmp":
                    colorVector[1] = SelIdx;
                    break;
                case "setting_chnl_EPG_mark_color_2_cmp":
                    colorVector[2] = SelIdx;
                    break;
                default :
                    break;
            }

            DBG_INFO("SettingChnlEPGEnterHandlerFunc,  colorVector: " + colorVector);
            tv && model.epg.setThemsColor(colorVector);
            SettingChnlEPGDisableItemUpdate(colorVector);
            this.page.operateData[this.id].SelectedIndex = SelIdx;
            this.page.operateData[this.id].DataSelectedIndex = SelIdx;
            this.page.rewriteDataOnly();
            SetRecentUse("EPG Mark", 2, FirPageSndIdx.ChnlEPGMark);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGRightHandlerFunc() {
    try {
        var curCmpIdx = $.inArray(hiWebOsFrame.SettingChnlEPGMarkPage.currentSelectedTree[0].id, EPGMarkCmpIdxVec);
        for(var i=0; i<12; i++){
            SettingChnlEPGMarkDelMarquee(i, curCmpIdx);
        }
        SettingChnlEPGMarkAddMarquee(this.SelectedIndex, curCmpIdx);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
//    if (this.BeginIdx > 0) {
//        this.data.leftArrowShow = true;
//        this.page.operateData[this.id].leftArrowShow = true;
//    } else {
//        this.data.leftArrowShow = false
//        this.page.operateData[this.id].leftArrowShow = false;
//    }
//
//    if (this.BeginIdx < this.data.Data.length - this.PageSize) {
//        this.data.rightArrowShow = true;
//        this.page.operateData[this.id].rightArrowShow = true;
//    } else {
//        this.data.rightArrowShow = false;
//        this.page.operateData[this.id].rightArrowShow = false;
//    }
//
//    SettingChnlRefreshArrows.call(this, this.page.data);

}

function SettingChnlEPGBefLeftHandlerFunc(){
    try {
        var curCmpDisableItem = copyObj(this.disableItem);
        curCmpDisableItem.push(this.SelectedIndex);
        if(-1 != curCmpDisableItem.indexOf(0) && -1 != curCmpDisableItem.indexOf(1) && -1 != curCmpDisableItem.indexOf(2)){
            DBG_INFO('curSelIdx nav to firPage');
            SettingChnlEPGEscHandler();
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGLeftHandlerFunc() {
    try {
        var curCmpIdx = $.inArray(hiWebOsFrame.SettingChnlEPGMarkPage.currentSelectedTree[0].id, EPGMarkCmpIdxVec);
        for(var i=0; i<12; i++){
            SettingChnlEPGMarkDelMarquee(i, curCmpIdx);
        }
        SettingChnlEPGMarkAddMarquee(this.SelectedIndex, curCmpIdx);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
//    if (this.BeginIdx > 0) {
//        this.data.leftArrowShow = true;
//        this.page.operateData[this.id].leftArrowShow = true;
//    } else {
//        this.data.leftArrowShow = false
//        this.page.operateData[this.id].leftArrowShow = false;
//    }
//
//    if (this.BeginIdx < this.data.Data.length - this.PageSize) {
//        this.data.rightArrowShow = true;
//        this.page.operateData[this.id].rightArrowShow = true;
//    } else {
//        this.data.rightArrowShow = false;
//        this.page.operateData[this.id].rightArrowShow = false;
//    }
//
//    SettingChnlRefreshArrows.call(this, this.page.data);

}

var EPGMarkCmpIdxVec = ['setting_chnl_EPG_mark_color_0_cmp', 'setting_chnl_EPG_mark_color_1_cmp', 'setting_chnl_EPG_mark_color_2_cmp'];

function SettingChnlEPGBefUpHandlerFunc() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
        }

//        var curCmpIdx = $.inArray(hiWebOsFrame.SettingChnlEPGMarkPage.currentSelectedTree[0].id, EPGMarkCmpIdxVec);

        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 3; j++)
                SettingChnlEPGMarkDelMarquee(i, j);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGBefDownHandlerFunc() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
        }

//        var curCmpIdx = $.inArray(hiWebOsFrame.SettingChnlEPGMarkPage.currentSelectedTree[0].id, EPGMarkCmpIdxVec);

        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 3; j++)
                SettingChnlEPGMarkDelMarquee(i, j);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGAftUpHandlerFunc() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
        }
        var curCmpIdx = $.inArray(hiWebOsFrame.SettingChnlEPGMarkPage.currentSelectedTree[0].id, EPGMarkCmpIdxVec);

        SettingChnlEPGMarkAddMarquee(this.SelectedIndex, curCmpIdx);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGAftDownHandlerFunc() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
        }

        var curCmpIdx = $.inArray(hiWebOsFrame.SettingChnlEPGMarkPage.currentSelectedTree[0].id, EPGMarkCmpIdxVec);

        SettingChnlEPGMarkAddMarquee(this.SelectedIndex, curCmpIdx);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingChnlEPGMarkAddMarquee(idx, cmpIdx) {
    try {
        for (var i = 0; i < 12; i++) {
            if ($("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + i).length == 0) {
                continue;
            }
            $("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + i).html();
                if (htmlText.length > PageDataSettingChnlEPGMark.operateData.EPGColorMarqueeLength) {
                    $("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlEPGMarkDelMarquee(idx, cmpIdx) {
    try {
        var marquee = $("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + idx + " marquee").html();
            var marquee = $("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + idx).html(htmlText);
        }
        $("#setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_setting_chnl_EPG_mark_color_" + cmpIdx + "_cmp_item_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


