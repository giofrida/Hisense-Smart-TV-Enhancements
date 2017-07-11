/**
 * Created by Admin on 14-6-18.
 */
function getSettingPicWteBal10PotLevelData(opts) {
    SettingPicWteBal10PotLevelDataInit();
    opts.CaE = [
        {
            "id": "setting_pic_white_balance_10point_level_head_text",
            "description": "列表头",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_white_balance_10point_level_cmp",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "ULPageMode": true,
            "classes": {
                "normal": "setting_pic_white_balance_10point_level_li_normal",
                "focus": "setting_pic_white_balance_10point_level_li_focus",
                "dataSelected": "setting_pic_white_balance_10point_level_li_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicWteBal10PotLevelEnterHandler",
                "aftUpHandler": "SettingPicWteBal10PotLevelAftUpHandler",
                "aftDownHandler": "SettingPicWteBal10PotLevelAftDownHandler",
                "aftEscHandler": "SettingPicWteBal10PotLevelAftEscHandler"
            },
            "oriCaE": [
                {
                    "id": "setting_pic_white_balance_10point_level_cmp_item_img",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList": {
                        "openImg": "img/selectedBall.png",
                        "closeImg": "img/unselectedBall.png"
                    },
                    "classes": {
//                                "normal":"languageListSelectImg"
                    }
                },
                {
                    "id": "setting_pic_white_balance_10point_level_cmp_item_text",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes": {
//                                "normal":"languageListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": ["setting_pic_white_balance_10point_level_cmp_item_img",
                    "setting_pic_white_balance_10point_level_cmp_item_text"],
                "PageSize": 5
            }
        }
    ];


    return PageDataSettingPicWteBal10PotLevel;
}

var PageDataSettingPicWteBal10PotLevel = {
    "setting_pic_white_balance_10point_level_head_text": {"Data": "Level"},
    "setting_pic_white_balance_10point_level_cmp": {
        "Data": [
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "10%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "20%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "30%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "40%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "50%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "60%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "70%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "80%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "90%"}
            },
            {
                "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "100%"}
            }
        ],
        SelectedIndex: 0,
        DataSelectedIndex: 0
    },
    "operateData": {
        "setting_pic_white_balance_10point_level_cmp": {
            "Data": [
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "10%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "20%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "30%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "40%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "50%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "60%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "70%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "80%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "90%"}
                },
                {
                    "setting_pic_white_balance_10point_level_cmp_item_img": {"Data": false},
                    "setting_pic_white_balance_10point_level_cmp_item_text": {"Data": "100%"}
                }
            ],
            SelectedIndex: 0,
            DataSelectedIndex: 0
        },

        scrollStep: 0,
        scrollHeight: 400
    },
    langData: {
        "Level": []
    },
    rewrite: SettingPicWteBal10PotLevelRewrite
}

function SettingPicWteBal10PotLevelDataInit(){
    try {
        var opeData = PageDataSettingPicWteBal10PotLevel.operateData;
        var levelVal = model.video.getLevel();
        debugG('model.video.getLevel(): ' + levelVal);

        NaviBarInitEasy(opeData, 'setting_pic_white_balance_10point_level_cmp', levelVal);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal10PotLevelEnterHandler() {
    try {

        var levelCmp = this;
        var levelSelIdx = levelCmp.SelectedIndex;
        debugG("SELIDX_" + levelSelIdx);
        if (levelCmp.DataSelectedIndex != levelSelIdx) {
            levelCmp.DataSelectedIndex = levelSelIdx;

            NaviBarEasyChange(levelCmp, levelSelIdx);

            model.video.setLevel(levelSelIdx);
            debugG('model.video.setLevel(' + levelSelIdx + ')');
            this.page.rewriteDataOnly();

            //TODO recent use
        }

    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal10PotLevelRewrite(pageData) {
    try {
        var levelSelIdx = pageData.operateData.setting_pic_white_balance_10point_level_cmp.SelectedIndex;
        NaviBarRewriteEasy(pageData, 'setting_pic_white_balance_10point_level_cmp', levelSelIdx);

        $.each(pageData.setting_pic_white_balance_10point_level_cmp.Data, function (k, v) {
            v.setting_pic_white_balance_10point_level_cmp_item_img.Data = false;
        });

        pageData.setting_pic_white_balance_10point_level_cmp.Data[levelSelIdx].setting_pic_white_balance_10point_level_cmp_item_img.Data = true;
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingPicWteBal10PotLevelAftEscHandler() {
    try {
        SettingWhiteBalance10PointInit();
        hiWebOsFrame.SettingPicWteBal10PotLevel.close();
        hiWebOsFrame.SettingPicWteBal10PotLevel.origin.open();
        hiWebOsFrame.SettingPicWteBal10PotLevel.origin.hiFocus();
        hiWebOsFrame.SettingPicWteBal10PotLevel.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicWteBal10PotLevel.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

}
function onSettingPicWteBal10PotLevelOpen() {
    try {
        RefreshWhiteBalance10PointLevelScrollBar(PageDataSettingPicWteBal10PotLevel);
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingPicWteBal10PotLevelDestroy(){
    try {
        hiWebOsFrame.SettingPicWteBal10PotLevel = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingPicWteBal10PotLevelAftUpHandler() {
    try {
        var beginIdx = hiWebOsFrame.SettingPicWteBal10PotLevel.getCaE("setting_pic_white_balance_10point_level_cmp").BeginIdx;
        if (beginIdx == UNDEFINED_DEFSTR) {
            debugE("beginIdx Err!!");
        } else {
            RefreshWhiteBalance10PointLevelScrollMoveTo(beginIdx);
        }
    } catch (ex) {
        debugE(ex.message);
    }

}
function SettingPicWteBal10PotLevelAftDownHandler() {
    try {
        var beginIdx = hiWebOsFrame.SettingPicWteBal10PotLevel.getCaE("setting_pic_white_balance_10point_level_cmp").BeginIdx;
        if (beginIdx == UNDEFINED_DEFSTR) {
            debugE("beginIdx Err!!");
        } else {
            RefreshWhiteBalance10PointLevelScrollMoveTo(beginIdx);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function RefreshWhiteBalance10PointLevelScrollBar(pageData) {
    try {
        debugG("RefreshWhiteBalance10PointLevelScrollBar called");
        var OpeData = pageData.operateData;
        if (pageData.setting_pic_white_balance_10point_level_cmp.Data.length <= 5) {
            $("#setting_pic_white_balance_10point_level_scroll_container").css("visibility", "hidden");
            OpeData.scrollHeight = 400;
            OpeData.scrollStep = 0;
            debugG("scrollHeight: " + OpeData.scrollHeight + ", scrollStep: " + OpeData.scrollStep);

        } else {
            $("#setting_pic_white_balance_10point_level_scroll_container").css("visibility", "visible");

            var listCnt = pageData.setting_pic_white_balance_10point_level_cmp.Data.length;
            OpeData.scrollHeight = 5 / listCnt * 400;
            OpeData.scrollStep = 400 / listCnt;

            debugG("OpeData.scrollHeight" + OpeData.scrollHeight);
            debugG("OpeData.scrollStep" + OpeData.scrollStep);

            $("#setting_pic_white_balance_10point_level_scroll_bar").css("height", OpeData.scrollHeight + "px");

            debugG("scrollHeight: " + OpeData.scrollHeight + ", scrollStep: " + OpeData.scrollStep);

            var beginIdx = hiWebOsFrame.SettingPicWteBal10PotLevel.getCaE("setting_pic_white_balance_10point_level_cmp").BeginIdx;
            debugG('beginIdx: ' + beginIdx);
            RefreshWhiteBalance10PointLevelScrollMoveTo(beginIdx); //TODO 此处不一定为0
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function RefreshWhiteBalance10PointLevelScrollMoveTo(beginIdx) {
    try {
        debugG("beginIdx: " + beginIdx);
        var scrollMarginTop = beginIdx * PageDataSettingPicWteBal10PotLevel.operateData.scrollStep;
        debugG("scrollMarginTop:" + scrollMarginTop);
        $("#setting_pic_white_balance_10point_level_scroll_bar").css("margin-top", scrollMarginTop + "px");

    } catch (ex) {
        debugE(ex.message);
    }
}
