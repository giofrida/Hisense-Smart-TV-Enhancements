function getSettingPicModeData(opts) {
    SettingPicModeInit();

    opts.CaE = [
        {
            "id": "setting_pic_mode_title_text_0",
            "description": "",
            "CaEType": "span"
        },


        {
            "id": "setting_pic_mode_cmp",
            "description": "",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "snd_mode_li_normal",
                "focus": "snd_mode_li_focus",
                "disable": "snd_mode_li_disable",
                "dataSelected": "snd_mode_li_selected_no_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingPicModeEnterHandler",
                "aftRightHandler": "SettingPicModeAftRightHandler",
                "aftLeftHandler": "SettingPicModeAftLeftHandler",
                "aftEscHandler": "SettingPicModeEscHandler",
            },
            "nav": {"leftTo": "", "downTo": "", "rightTo": ""},
            "oriCaE": [
                {
                    "id": "setting_pic_mode_item_text",
                    "description": "",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_mode_item_text_normal",
                        "focus": "setting_snd_mode_item_text_normal",
                        "disable": "setting_snd_mode_item_text_disable",
                        "selected": "setting_snd_mode_item_text_focus"
                    }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["setting_snd_mode_item_text"],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0,
                "PageSize": 5,
                "ArrowFlag": true

            },
            "linkZoomArrowleft": "setting_pic_mode_arrow_left",
            "linkZoomArrowRight": "setting_pic_mode_arrow_right",
        },
        {
            "id": "setting_pic_mode_arrow_left",
            "description": "setting_pic_mode_arrow_left",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_mode_arrow_right",
            "description": "setting_pic_mode_arrow_right",
            "CaEType": "div"
        }

    ];

    return PageDataPicModeData;
}
var PageDataPicModeData = {
    setting_pic_mode_cmp: {
        Data: isHDRSuport ?
        [
            {"setting_pic_mode_item_text": {Data: "Standard"}},
            {"setting_pic_mode_item_text": {Data: "Cinema"}},
            {"setting_pic_mode_item_text": {Data: "PC/Game"}},
            {"setting_pic_mode_item_text": {Data: "Dynamic"}},
            {"setting_pic_mode_item_text": {Data: "HDR"}},
        ]:
        [
            {"setting_pic_mode_item_text": {Data: "Standard"}},
            {"setting_pic_mode_item_text": {Data: "EM" == InitArea ? "Natural" : "Cinema day"} },
            {"setting_pic_mode_item_text": {Data: "EM" == InitArea ? "Theatre" : "Cinema night"}},
            {"setting_pic_mode_item_text": {Data: "PC/Game"}},
            {"setting_pic_mode_item_text": {Data: "Dynamic"}}
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0

    },
    setting_pic_mode_title_text_0: {Data: "Picture Mode"},
    operateData: {
        PicModeMarqueeWidth: 249,
        "langIndex": 0,
        setting_pic_mode_cmp: {
            Data:isHDRSuport ?
            [
                {"setting_pic_mode_item_text": {Data: "Standard"}},
                {"setting_pic_mode_item_text": {Data: "Cinema"}},
                {"setting_pic_mode_item_text": {Data: "PC/Game"}},
                {"setting_pic_mode_item_text": {Data: "Dynamic"}},
                {"setting_pic_mode_item_text": {Data: "HDR"}}
            ]:
            [
                {"setting_pic_mode_item_text": {Data: "Standard"}},
                {"setting_pic_mode_item_text": {Data: "EM" == InitArea ? "Natural" : "Cinema day"}},
                {"setting_pic_mode_item_text": {Data: "EM" == InitArea ? "Theatre" : "Cinema night"}},
                {"setting_pic_mode_item_text": {Data: "PC/Game"}},
                {"setting_pic_mode_item_text": {Data: "Dynamic"}}
                //Standard- Game    -Dynamic    -Natural-   Cinema night
                //Standard - PC/Game - Dynamic - Cinema day - Cinema night
            ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0

        },
        helpInfoVec: isHDRSuport ?
            [
                {   //Standard 0
                    title: "Standard",
                    content: "Best suited for watching normal content e.g. News, Drama or Documentary."
                },
                {   //Cinema
                    title: "Cinema",
                    content: "Best suited for watching movies with dark environment."
                },
                {   //PC/Game 3
                    title: "PC/Game",
                    content: "Best suited for PC or Games console. Reduces Input Lag and improves responsiveness."
                },
                {   //Dynamic 4
                    title: "Dynamic",
                    content: "Best suited for the content that requires vivid picture quality."
                },
                {   //HDR
                    title: "HDR",
                    content: "Best suited for watching the HDR content"
                },
            ]:
            [
            //Standard解释	最适于观看一般的内容，如新闻。	Best suitable for watching the normal content, e.g. news.
            //PC/Game解释	最适于观看电脑或游戏机内容。	Best suitable for conneted with PC or Game Box.
            //Dynamic解释	最适于观看艳丽图像质量的内容。	Best suitable for the content which need vivid picture quality.
            //Cinema day解释	最适于在夜间观看电影。	Best suitable for watching moive with bright environment.
            //Cinema night解释	最适于在日间观看电影。	Best suitable for watching moive with dark environment.
            {   //Standard 0
                title: "Standard",
                content: "Best suited for watching normal content e.g. News, Drama or Documentary."
            },
            {   //Cinema day 1
                title: "Cinema day",
                content: "Best suited for watching movies in a bright environment."
            },
            {   //Cinema night 2
                title: "Cinema night",
                content: "Best suited for watching movies with dark environment."
            },
            {   //PC/Game 3
                title: "PC/Game",
                content: "Best suited for PC or Games console. Reduces Input Lag and improves responsiveness."
            },
            {   //Dynamic 4
                title: "Dynamic",
                content: "Best suited for the content that requires vivid picture quality."
            }
        ]
    },

    "langData": {
        "Picture Mode:": ["Picture Mode:"],
        "Picture Mode": ["Picture Mode:"],
        "Standard": ["Standard"],
        "Dynamic": ["Dynamic"],
        "Natural": ["Natural"],
        "Theatre": ["Theatre"],
        "Game": ["Game"],
        "Sport": ["Sport"],
        "Cinema day": [],
        "Cinema night": [],
        "PC/Game": [],
        "HDR":["HDR"],
        "Cinema":["Cinema"],
        "Best suitable for watching the normal content, e.g. news.": [],
        "Best suitable for watching movie with bright environment.": [],
        "Best suitable for watching movie with dark environment.": [],
        "Best suitable for connected with PC or Game Box.": [],
        "Best suitable for the content which need vivid picture quality.": []
    },
    "rewrite": SettingPicModeRewrite
};

function SettingPicModeEnterHandler(operateData, data) {
    try {
        var picModeCmp = this;
        var picModeSelIdx = picModeCmp.SelectedIndex;
        DBG_INFO("SELIDX_" + picModeSelIdx);
        if (picModeCmp.DataSelectedIndex != picModeSelIdx) {
            picModeCmp.DataSelectedIndex = picModeSelIdx;

            picModeCmp.page.operateData[picModeCmp.id].DataSelectedIndex = picModeSelIdx;
            picModeCmp.page.operateData[picModeCmp.id].SelectedIndex = picModeSelIdx;

            if (picModeSelIdx >= 0 && picModeSelIdx <= 4) {
                //picModeSelIdx = PicModeUI2Mid(picModeSelIdx);
                DBG_INFO("model.video.setEnumPictureMode(" + PicModeUI2Mid(picModeSelIdx) + ")");
                tv && model.video.setEnumPictureMode(PicModeUI2Mid(picModeSelIdx));
            } else {
                DBG_ERROR("Pic Mode Selected Index Err!")
            }
            this.page.rewriteDataOnly();

            SetRecentUse("Picture Mode", 0, FirPageSndIdx.PicMode); //增加最近使用0702

            var picZoomEnumMode = tv && model.video.getEnumZoom();
            onEnumZoomChaged(picZoomEnumMode);
            var picBrightness = tv && model.video.getBrightness();
            onBrightnessChaged(picBrightness);
            var picContrast = tv && model.video.getContrast();
            onContrastChaged(picContrast);
            var picColor = tv && model.video.getColourIntensity();
            onColourIntensityChaged(picColor);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicModeRewrite(pageData) {
    try {
        var picModeEnum = pageData.operateData.setting_pic_mode_cmp.DataSelectedIndex;
        NaviBarRewriteEasy.call(this, pageData, "setting_pic_mode_cmp", picModeEnum);
        pageData.setting_pic_mode_cmp.disableItem = pageData.operateData.setting_pic_mode_cmp.disableItem;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicModeEscHandler() {
    try {
        hiWebOsFrame.SettingPicModePage.close();
        hiWebOsFrame.SettingPicModePage.origin.open();
        hiWebOsFrame.SettingPicModePage.origin.hiFocus();
        hiWebOsFrame.SettingPicModePage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicModePage.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicModeDestroy() {
    hiWebOsFrame.SettingPicModePage = null;
}


function onSettingPicModeOpen() {
    try {
        DBG_INFO('onSettingPicModeOpen');
        for (var i = 0; i < 5; i++) {
            PicModeIndexDelMarquee(i);
        }
        PicModeIndexAddMarquee(this.data.setting_pic_mode_cmp.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicModeClose() {
    try {
        CloseSndHelpInfoPage();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicModeRfreshHelpInfo(selIdx){
    try {
        var helpInfoVec = PageDataPicModeData.operateData.helpInfoVec;
        sndHelpInfo.setHelpInfoText(helpInfoVec[selIdx].title, helpInfoVec[selIdx].content);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function SettingPicModeAftRightHandler() {

    try {
        for (var i = 0; i < 5; i++) {
            PicModeIndexDelMarquee(i);
        }
        PicModeIndexAddMarquee(this.SelectedIndex);
        SettingPicModeRfreshHelpInfo(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicModeAftLeftHandler() {
    try {
        for (var i = 0; i < 5; i++) {
            PicModeIndexDelMarquee(i);
        }
        PicModeIndexAddMarquee(this.SelectedIndex);
        SettingPicModeRfreshHelpInfo(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function PicModeIndexDelMarquee(idx) {
    try {
        var marquee = $("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + idx + " marquee").html();
            var marquee = $("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + idx).html(htmlText);
        }
        $("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PicModeIndexAddMarquee(idx) {
    try {
        for (var i = 0; i < 5; i++) {
            $("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + i).html();
                var fontSize = parseInt($("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + i).css('font-size'));
                var divTextWidth = $('#span_width_only').css('font-size', fontSize + 'px').html(htmlText).width() / globalfunc.getPageScale();
                if (divTextWidth > PageDataPicModeData.operateData.PicModeMarqueeWidth) {
                    $("#setting_pic_mode_cmp_setting_pic_mode_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
