function getSettingPicAspectRatioData(opts) {
    SettingPicAspectRatioInit();

    opts.CaE = [
        {
            "id": "setting_pic_aspect_ratio_title_text_0",
            "description": "",
            "CaEType": "div"
        },

        {
            "id": "setting_pic_aspect_ratio_cmp",
            "description": "当前的比例",
            "CaEType": "NavigationBar",
            "firstFocusId": "",
            "classes": {
                "normal": "snd_mode_li_normal",
                "focus": "snd_mode_li_focus",
                "disable": "snd_mode_li_disable",
                "dataSelected": "snd_mode_li_selected_no_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingPicAspectRatioEnterHandler",
                "aftEscHandler": "SettingPicAspectRatioEscHandler",
                "aftRightHandler": "SettingPicAspectRatioAftRightHandler",
                "aftLeftHandler": "SettingPicAspectRatioAftLeftHandler"
            },
            "nav": {"leftTo": "", "downTo": "", "rightTo": ""},
            "oriCaE": [
                {
                    "id": "setting_pic_aspect_ratio_item_text",
                    "description": "代表zoom模式的span",
                    "CaEType": "span",
                    "classes": {
                        "normal": "setting_snd_mode_item_text_normal",
                        "focus": "setting_snd_mode_item_text_normal",
                        "disable": "setting_snd_mode_item_text_disable",
                        "selected": "setting_snd_mode_item_text_focus"
                    }
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["setting_pic_aspect_ratio_item_text"],
                "SelectedIndex": 0,
                "PageSize": 5,
                "ArrowFlag": true

            },
            "linkZoomArrowleft": "setting_pic_aspect_ratio_arrow_left",
            "linkZoomArrowRight": "setting_pic_aspect_ratio_arrow_right",
        },

        {
            "id": "setting_pic_aspect_ratio_arrow_left",
            "description": "setting_pic_aspect_ratio_arrow_left",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_aspect_ratio_arrow_right",
            "description": "setting_pic_aspect_ratio_arrow_left",
            "CaEType": "div"
        }
    ];

    return PageDataPicAspectRatioData;
}

var PageDataPicAspectRatioData = {
    setting_pic_aspect_ratio_cmp: {
        Data: [
            {
                "setting_pic_aspect_ratio_item_text": {Data: "Automatic"}
            },
            {
                "setting_pic_aspect_ratio_item_text": {Data: "16:9"}
            },
            {
                "setting_pic_aspect_ratio_item_text": {Data: "4:3"}
            },
            {
                "setting_pic_aspect_ratio_item_text": {Data: "Panoramic"}
            },
            {
                "setting_pic_aspect_ratio_item_text": {Data: "Movie Zoom"}
            },
            {
                "setting_pic_aspect_ratio_item_text": {Data: "Direct"}
            }
        ],
        disableItem: [],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0
    },
    setting_pic_aspect_ratio_title_text_0: {Data: "Aspect Ratio"},

    operateData: {
        helpInfoVec: [
    //        Automatic解释	基于信号内容在16:9和4:3之间自动调整图像比例。	Automatic switch Aspect Ratio between 16:9 and 4:3 based on the signal information.
    //16:9解释	最适于当前信号为16:9的情况。	Best suitable for current signal ratio is 16:9.
    //4:3解释	最适于当前信号为4:3的情况。	Best suitable for current signal ratio is 4:3.
    //Panoramic解释	全屏显示当前信号的主要内容。	Full screan display main space of current signal.
    //    Movie Zoom解释	全屏显示电影信号的主要内容。	Full screan display main space of current movie signal.
    //    Direct解释	点对点显示当前信号内容。	Point to point display current signal on the screen.
    //    Standard解释	在标准模式下，电视提供了一个平缓的均衡设置，保留了原始声音的自然特性。	In Standard mode, TV delivers a flat frequency response, which preserves the natural characteristics of the original sound.
    //    Theater解释	在影院模式下，加强了环绕音和低音效果。	In Theater mode the surround and subwoofer are accentuated.
    //    Music解释	在音乐模式下，加强了低频和高频的均衡设置，已保证乐器效果再现。	In Music mode the extremes of low and high frequencies are accentuated of enhance musical instrument reproduction.
    //    Speech解释	在语音模式下，抑制低频和高频均衡，提高了人声的还原和清晰度。	In Speech mode low and high frequencies are attenuated to improve the reproduction and intelligibility of the human voice.
    //    Late Night解释	在深夜模式，电视在较低的音量下也可以最大程度的还原人声的清晰度。	In Late Night mode, TV will improve the reproduction and intelligibility of the human voice with a low volume level.

            {
                title: "Automatic",
                content: "Automatically switch Aspect Ratio between 16:9 and 4:3 based on the signal information."
            },
            {
                title: "16:9",
                content: "Best suited for 16:9 Widescreen content. This will also stretch 4.3 content to Widescreen"
            },
            {
                title: "4:3",
                content: "Best suited for 4:3 content."
            },
            {
                title: "Panoramic",
                content: "Provides a full screen image by stretching the edges whilst leaving the middle untouched."
            },
            {
                title: "Movie Zoom",
                content: "Provides a full screen image by zooming in on the movie."
            },
            {
                title: "Direct",
                content: "Point to point display also known as 1:1 Pixel Mapping"
            }


        ],
        PicZoomMarqueeWidth: 249,
        setting_pic_aspect_ratio_cmp: {
            Data: [
                {
                    "setting_pic_aspect_ratio_item_text": {Data: "Automatic"}
                },
                {
                    "setting_pic_aspect_ratio_item_text": {Data: "16:9"}
                },
                {
                    "setting_pic_aspect_ratio_item_text": {Data: "4:3"}
                },
                {
                    "setting_pic_aspect_ratio_item_text": {Data: "Panoramic"}
                },
                {
                    "setting_pic_aspect_ratio_item_text": {Data: "Movie Zoom"}
                },
                {
                    "setting_pic_aspect_ratio_item_text": {Data: "Direct"}
                }
                //Automatic / 16:9 / 4:3 / Panoramic / Movie Zoom/ Direct
            ],
            disableItem: [],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        },
        zoomWidth: 0,
        zoomHeight: 0
    },
    "langData": {
        "Picture Format:": [],
        "Smart Zoom": [],
        "Zoom 1": [],
        "Zoom 2": [],
        "16:9": [],
        "4:3": [],
        "Panorama 1": [],
        "Panorama 2": [],
        "Auto": [],
        "Aspect Ratio": [],
        "Normal": [],
        "Zoom": [],
        "Wide": [],
        "Cinema": [],
        "1:1 PIXEL MAP": [],
        "Panoramic": [],
        "Direct": [],
        "Automatic": [],
        "Movie Zoom": []
    },
    "rewrite": SettingPicAspectRatioRewrite
};

function SettingPicAspectRatioRfreshHelpInfo(selIdx){
    try {
        var helpInfoVec = PageDataPicAspectRatioData.operateData.helpInfoVec;
        sndHelpInfo.setHelpInfoText(helpInfoVec[selIdx].title, helpInfoVec[selIdx].content);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAspectRatioAftLeftHandler() {
    try {
        for (var i = 0; i < 8; i++) {
            PicAspectRatioIndexDelMarquee(i);
        }
        PicAspectRatioIndexAddMarquee(this.SelectedIndex);
        SettingPicAspectRatioRfreshHelpInfo(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAspectRatioAftRightHandler() {
    try {
        for (var i = 0; i < 8; i++) {
            PicAspectRatioIndexDelMarquee(i);
        }
        PicAspectRatioIndexAddMarquee(this.SelectedIndex);
        SettingPicAspectRatioRfreshHelpInfo(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicAspectRatioEnterHandler(operateData, data) {
    try {
        var picAspectRatioCmp = this;
        var picAspectRatioModeIdx = picAspectRatioCmp.SelectedIndex;
        DBG_INFO("SELIDX_" + picAspectRatioModeIdx);
        if (picAspectRatioCmp.DataSelectedIndex != picAspectRatioModeIdx) {
            picAspectRatioCmp.DataSelectedIndex = picAspectRatioModeIdx;

            NaviBarEasyChange.call(this, picAspectRatioCmp, this.SelectedIndex);

            //picAspectRatioCmp.page.operateData[picAspectRatioCmp.id].DataSelectedIndex = picAspectRatioModeIdx;
            //picAspectRatioCmp.page.operateData[picAspectRatioCmp.id].SelectedIndex = picAspectRatioModeIdx;

            if (picAspectRatioModeIdx >= 0 && picAspectRatioModeIdx <= 7) {
                tv && model.video.setEnumZoom(picAspectRatioModeIdx);
                DBG_INFO("model.video.setEnumZoom(" + picAspectRatioModeIdx + ")");
                onEnumZoomChaged(picAspectRatioModeIdx);    //底层没有调用onChange，此处主动调用
            } else {
                DBG_ERROR("Pic AspectRatio Selected Index Err!")
            }
            this.page.rewriteDataOnly();
            SetRecentUse("Aspect Ratio", 0, FirPageSndIdx.PicAspectRatio); //增加最近使用的设置0702
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function SettingPicAspectRatioRewrite(pageData) {
    try {
        var picAspectRatioEnum = pageData.operateData.setting_pic_aspect_ratio_cmp.DataSelectedIndex;
        NaviBarRewriteEasy.call(this, pageData, "setting_pic_aspect_ratio_cmp", picAspectRatioEnum);

        //var opeData = pageData.operateData;

        //if (opeData.zoomWidth == 1280 && opeData.zoomHeight == 1024 ||
        //    opeData.zoomWidth == 640 && opeData.zoomHeight == 480 ||
        //    opeData.zoomWidth == 800 && opeData.zoomHeight == 600 ||
        //    opeData.zoomWidth == 1024 && opeData.zoomHeight == 768) {
        //    pageData.setting_pic_aspect_ratio_cmp.disableItem = [];
        //    DBG_INFO("pageData.setting_pic_aspect_ratio_cmp.disableItem = [];");
        //}
        //else {
        //    pageData.setting_pic_aspect_ratio_cmp.disableItem = [4];
        //    debugPrint("pageData.setting_pic_aspect_ratio_cmp.disableItem = [4]");
        //}
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}


function SettingPicAspectRatioEscHandler() {
    try {
        hiWebOsFrame.SettingPicSizePage.close();
        hiWebOsFrame.SettingPicSizePage.origin.open();
        hiWebOsFrame.SettingPicSizePage.origin.hiFocus();
        hiWebOsFrame.SettingPicSizePage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicSizePage.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicAspectRatioDestroy() {
    hiWebOsFrame.SettingPicSizePage = null;
}


function onSettingPicAspectRatioOpen() {
    try {
        DBG_INFO('onSettingPicAspectRatioOpen');
        for (var i = 0; i < 8; i++) {
            PicAspectRatioIndexDelMarquee(i);
        }
        PicAspectRatioIndexAddMarquee(this.data.setting_pic_aspect_ratio_cmp.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicAspectRatioClose(){
    try {
      CloseSndHelpInfoPage();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function PicAspectRatioIndexDelMarquee(idx) {
    try {
        var marquee = $("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + idx + " marquee").html();
            var marquee = $("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + idx).html(htmlText);
        }
        $("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PicAspectRatioIndexAddMarquee(idx) {
    try {
        for (var i = 0; i < 8; i++) {
            $("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + i).html();

                var fontSize =  parseInt($("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + i).css('font-size'));
                var divTextWidth = $('#span_width_only').css('font-size', fontSize+'px').html(htmlText).width() / globalfunc.getPageScale();
                if (divTextWidth > PageDataPicAspectRatioData.operateData.PicZoomMarqueeWidth) {
                    $("#setting_pic_aspect_ratio_cmp_setting_pic_aspect_ratio_item_text_sys" + i).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
