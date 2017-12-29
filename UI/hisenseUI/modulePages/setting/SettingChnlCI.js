/**
 * Created by ghl on 14-6-19.
 */


function getSettingChnlCIData(opts) {
//    SettingChnlCIInit();  //此处调用会导致第一次是enquiry页面时出来mmi覆盖enquiry,修改到Setting页面OpenCI处
    opts.CaE = [
        {
            "id": "setting_chnl_CI_head",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_CI_title_0",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_CI_title_1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_CI_foot_tip",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_CI_upgrade_percent_text_0",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_CI_upgrade_percent_text_1",
            "description": "",
            "CaEType": "div",
            handler: {
                aftEscHandler: "SettingChnlCIEnquiryEscHandler"
            }
        },
        {
            "id": "setting_chnl_CI_upgrade_result_btn_ok",
            "description": "",
            "CaEType": "div",
            handler: {
                aftEnterHandler: "SettingChnlCIEnquiryEscHandler",
                aftEscHandler: "SettingChnlCIEnquiryEscHandler"
            }
        },
        {
            "id": "setting_chnl_CI_input_placeholder",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_CI_input_container",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId": "setting_chnl_CI_input",
            "classes": {
                "normal": "setting_chnl_CI_input_container_normal",
                "focus": "setting_chnl_CI_input_container_focus",
                "selected": "setting_chnl_CI_input_container_focus"
            },
            handler: {
                "aftUpHandler": "SettingChnlCIInputAftUpHandler",
                "aftDownHandler": "SettingChnlCIInputAftDownHandler",
                "befUpHandler": "SettingChnlCIInputBefUpHandler",
                "befDownHandler": "SettingChnlCIInputBefDownHandler"
            },
            "nav": {
                "upTo": "setting_chnl_CI_input_btn",
                "downTo": "setting_chnl_CI_input_btn"
            },
            "CaE": [
                {
                    "id": "setting_chnl_CI_input",
                    "description": "CI input",
                    "CaEType": "input",
                    "classes": {
                        "normal": "setting_chnl_CI_input",
                        "focus": "setting_chnl_CI_input_focus"
                    },
                    "nav": {
                        "upTo": "setting_chnl_CI_input_btn",
                        "downTo": "setting_chnl_CI_input_btn"
                    },
                    "inputAttr": "numberpassword",
                    "onChange": "SettingChnlCIEnquiryInputOnChange",
                    "handler": {
                        "aftEnterHandler": "invokeSKB",
                        "aftUpHandler": "SettingChnlCIInputAftUpHandler",
                        "aftDownHandler": "SettingChnlCIInputAftDownHandler",
                        "befUpHandler": "SettingChnlCIInputBefUpHandler",
                        "befDownHandler": "SettingChnlCIInputBefDownHandler",
                        "aftEscHandler": "SettingChnlCIEnquiryEscHandler",
                        "keyChannelUpHandler": "SettingChnlCIkeyChannelUpHandler",
                        "keyChannelDownHandler": "SettingChnlCIkeyChannelDownHandler"
                    },
                    "maxlength": 10,
                    "min": 000,
                    "max": 10000000000

                }
            ]
        },
        {
            "id": "setting_chnl_CI_input_foot_text",
            "description": "setting_chnl_CI_input_foot_text",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_CI_input_btn",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_chnl_CI_input_btn",
                "focus": "setting_chnl_CI_input_btn_focus"
            },
            "nav": {
                "downTo": "setting_chnl_CI_input_container",
                "upTo": "setting_chnl_CI_input_container"
            },
            "handler": {
                "aftEnterHandler": "SettingChnlInputBtnEnterHandler",
                "aftEscHandler": "SettingChnlCIEnquiryEscHandler",
                "keyChannelUpHandler": "SettingChnlCIkeyChannelUpHandler",
                "keyChannelDownHandler": "SettingChnlCIkeyChannelDownHandler"
            }

        },
        {
            id: 'setting_chnl_CI_ul',
            description: 'List Item',
            CaEType: 'Ul',
            classes: {
                "normal": "setting_chnl_CI_li_normal",
                "focus": "setting_chnl_CI_li_focus",
                "dataSelected": "setting_chnl_CI_li_normal"
            },
            disable: false,
            handler: {
                aftEnterHandler: "SettingChnlCIEnterHandler",
                aftEscHandler: "SettingChnlCIEscHandler",
                aftUpHandler: "SettingChnlUpHandler",
                aftDownHandler: "SettingChnlDownHandler",
                "keyChannelUpHandler": "SettingChnlCIkeyChannelUpHandler",
                "keyChannelDownHandler": "SettingChnlCIkeyChannelDownHandler"
            },
            oriCaE: [
                {
                    "id": "ci_item",
                    "description": "名称",
                    classes: {
                        "normal": "ci_item_normal",
                        "focus": "ci_item_focus"
                    },

                    "CaEType": "div"
                }
            ],
            UlConfig: {
                "UlDataItem": ["ci_item"],
                "PageSize": 5
            },
            "SelectedIndex": 0

        }

    ];
    return PageDataChnlCIData;
}

function onSettingChnlCIOpen() {
    try {
        debugG("CIOPEN-------------");

        if (PageDataChnlCIData.operateData.osdOrInputFlag == PageDataChnlCIData.operateData.EnumOsdInput.OSD) {
            if ($("#setting_chnl_CI_input_frame") != null) {
                $("#setting_chnl_CI_input_frame").attr("class", "setting_chnl_CI_input_frame_none");
            }
            if ($("#setting_chnl_CI_frame") != null) {
                $("#setting_chnl_CI_frame").attr("class", "setting_chnl_CI_frame_block");
            }

            $("#setting_chnl_CI_input_placeholder").css("visibility", "hidden")
        } else {
            if ($("#setting_chnl_CI_input_frame") != null) {
                $("#setting_chnl_CI_input_frame").attr("class", "setting_chnl_CI_input_frame_block");
            }
            if ($("#setting_chnl_CI_frame") != null) {
                $("#setting_chnl_CI_frame").attr("class", "setting_chnl_CI_frame_none");
            }

            $("#setting_chnl_CI_input_placeholder").css("visibility", "visible")
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlCIFocus() {
    try {
        debugG("onSettingChnlCIFocus");
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlCIClose() {
    try {
        debugG("onSettingChnlCIClose()");
        if (hiWebOsFrame.isCurrentModule("iqqi")) {
            exitIQQINotSave();
        }
    } catch (ex) {
        debugE(ex.message);
    }

}

function onSettingChnlCIDestroy() {
    try {
        debugG("onSettingChnlCIDestroy()");
        var oriPage = hiWebOsFrame.blankPage;
        try {

            if (null == hiWebOsFrame.SettingChnlCIPage) {
                debugG('null == hiWebOsFrame.SettingChnlCIPage, return');
                return;
            }
            oriPage = hiWebOsFrame.SettingChnlCIPage.origin;
        } catch (ex) {
            debugE(ex.message);
        }
        hiWebOsFrame.SettingChnlCIPage = null;

        try {
            if (true == OSDSlAndSessIdState()) {
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
            } else {
                var menuStr = model.ci.getCIVStrMenu();
                if (menuStr.length >= 2) {
                    OSDSlAndSessId[0] = menuStr[0];
                    OSDSlAndSessId[1] = menuStr[1];
                    debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                    model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
                }

                var strEnquiry = model.ci.getCIVStrEnquiry();
                if (strEnquiry.length >= 2) {
                    OSDSlAndSessId[0] = strEnquiry[0];
                    OSDSlAndSessId[1] = strEnquiry[1];
                    debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                    model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
                }

                var strUpProgress = model.ci.getUpgradeProgress();
                if (strUpProgress.length >= 2) {
                    OSDSlAndSessId[0] = strUpProgress[0];
                    OSDSlAndSessId[1] = strUpProgress[1];
                    debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                    model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
                }

                var strResult = model.ci.getUpgradeResult();
                if (strResult.length >= 2) {
                    OSDSlAndSessId[0] = strResult[0];
                    OSDSlAndSessId[1] = strResult[1];
                    debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                    model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
                }

            }
        } catch (ex) {
            debugE(ex.message);
        }

        DBG_INFO('PageDataChnlCIData.operateData.closedAllPageFuncCalled: ' + PageDataChnlCIData.operateData.closedAllPageFuncCalled);
        if (PageDataChnlCIData.operateData.closedAllPageFuncCalled == true) {
            PageDataChnlCIData.operateData.closedAllPageFuncCalled = false;
            DBG_INFO('CI Do not open originPage, return;');
            return;
        }


        if (!!oriPage && "videoPlayer" == oriPage.module) {
            debugG("Return to videoPlayer");
            oriPage.open();
            oriPage.hiFocus();
        } else if (!!hiWebOsFrame.SettingChnlAdvancedPage && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlAdvancedPage.id)) {
            debugG("Return to hiWebOsFrame.SettingChnlAdvancedPage");
            hiWebOsFrame.SettingChnlAdvancedPage.open();
            hiWebOsFrame.SettingChnlAdvancedPage.hiFocus();
            hiWebOsFrame.SettingChnlAdvancedPage.rewriteDataOnly();
        } else if (!!oriPage && oriPage.module == 'livetv') {
            openLiveTVModule();
        } else if (!!oriPage && hiWebOsFrame.isPageExist(oriPage.id)) {
            debugG("CI close, return to: " + oriPage.id);
            if (!!hiWebOsFrame.blankPage && (hiWebOsFrame.blankPage.id == oriPage.id)) {
                closeLiveTVModule();
            }
            oriPage.open();
            oriPage.hiFocus();
        } else {
            debugE("CI Return To NULL Page, may lead to Err!!!, openLiveTVModule");
            openLiveTVModule();
        }

    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingChnlCIInfoRewrite(pageData) {
    try {
        debugG("oldPageDataul" + JSON.stringify(pageData.setting_chnl_CI_ul.Data));
        PageDataChnlCIData.setting_chnl_CI_head.Data = PageDataChnlCIData.operateData.setting_chnl_CI_head.Data;

        pageData.setting_chnl_CI_title_0.Data = pageData.operateData.setting_chnl_CI_title_0.Data;
        pageData.setting_chnl_CI_title_1.Data = pageData.operateData.setting_chnl_CI_title_1.Data;
        pageData.setting_chnl_CI_foot_tip.Data = pageData.operateData.setting_chnl_CI_foot_tip.Data;

        pageData.setting_chnl_CI_upgrade_percent_text_1.Data = pageData.operateData.setting_chnl_CI_upgrade_percent_text_1.Data;

        pageData.setting_chnl_CI_ul.Data = [];

        debugG("operateDataUl " + JSON.stringify(pageData.operateData.setting_chnl_CI_ul.Data));
        for (var i = 0; i < pageData.operateData.setting_chnl_CI_ul.Data.length; i++) {
            pageData.setting_chnl_CI_ul.Data.push(pageData.operateData.setting_chnl_CI_ul.Data[i]);
        }

//        pageData.setting_chnl_CI_ul.DataSelectedIndex = pageData.operateData.setting_chnl_CI_ul.DataSelectedIndex;
        pageData.setting_chnl_CI_ul.SelectedIndex = pageData.operateData.setting_chnl_CI_ul.SelectedIndex;
        debugG("pageData.setting_chnl_CI_ul.SelectedIndex: " + pageData.setting_chnl_CI_ul.SelectedIndex);

//        pageData.setting_chnl_CI_foot_tip.Data = pageData.operateData.setting_chnl_CI_foot_tip.Data;
        pageData.setting_chnl_CI_input_foot_text.Data = pageData.operateData.setting_chnl_CI_input_foot_text.Data;
        debugG("newPageData" + JSON.stringify(pageData.setting_chnl_CI_ul.Data));
        try {
            $('#setting_chnl_CI_input_placeholder').css('visibility', 'hidden');
        } catch (ex) {
            debugE(ex.message);
        }
        if ($("#setting_chnl_CI_osd") != null) {
            if (pageData.operateData.osdOrInputFlag == pageData.operateData.EnumOsdInput.OSD) {   //不该在这处理，因Dom可能还没生成
                $("#setting_chnl_CI_osd").css("height", "816px");
            } else if (pageData.operateData.osdOrInputFlag == pageData.operateData.EnumOsdInput.INPUT) {
                $("#setting_chnl_CI_osd").css("height", "488px");
                try {
                    $('#setting_chnl_CI_input_placeholder').css('visibility', 'visible');
                } catch (ex) {
                    debugE(ex.message);
                }
            } else if (pageData.operateData.osdOrInputFlag == pageData.operateData.EnumOsdInput.UPGRADE_RESULT) {
                $("#setting_chnl_CI_osd").css("height", "365px");
            } else if (pageData.operateData.osdOrInputFlag == pageData.operateData.EnumOsdInput.UPGRADE_PROGRESS) {
                $("#setting_chnl_CI_osd").css("height", "298px");
            } else {
                $("#setting_chnl_CI_osd").css("height", "816px");
            }
        }


    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIEnterHandler() {
    try {
        debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1] + ", index: " + (this.SelectedIndex + 1));
        debugG("SettingChnlCIEnterHandler index: " + (this.SelectedIndex + 1));
        if (true == OSDSlAndSessIdState()) {
            debugG("model.ci.ActionMenuAnswer:slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1] + ", index: " + (this.SelectedIndex + 1));
            model.ci.ActionMenuAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], this.SelectedIndex + 1);    //已修改成MenuAnswer
        } else {
            debugE("OSDSlAndSessIdState ------->" + OSDSlAndSessIdState());
            var menuStr = model.ci.getCIVStrMenu();
            if (menuStr.length <= 1) {
                debugE("menuStr length under 1,ERR!!!!!!!!");
                debugG("CIStrNullFunc() function called");
                CIStrNullFunc();
            } else {
                OSDSlAndSessId[0] = menuStr[0];
                OSDSlAndSessId[1] = menuStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1] + ", index: " + (this.SelectedIndex + 1));
                model.ci.ActionMenuAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], this.SelectedIndex + 1);
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlInputBtnEnterHandler() {
    try {
        debugG("SettingChnlInputBtnEnterHandler");
        var inputVal = $("#setting_chnl_CI_input").val();
        if (true == OSDSlAndSessIdState()) {
            debugG("true == OSDSlAndSessIdState()");
            model.ci.ActionEnquiryAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 1, inputVal);
            debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1] + "SettingChnlInputBtnEnterHandler: inputVal:" + inputVal);
        } else {
            debugG("OSDSlAndSessIdState ------->" + OSDSlAndSessIdState());
            var enqStr = model.ci.getCIVStrEnquiry();
            if (enqStr.length <= 1) {
                debugE("enqStr length under 1,ERR!!!!!!!!");
                debugG("CIStrNullFunc() function called");
                CIStrNullFunc();
            } else {
                OSDSlAndSessId[0] = enqStr[0];
                OSDSlAndSessId[1] = enqStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1] + "SettingChnlInputBtnEnterHandler: inputVal:" + inputVal);
                model.ci.ActionEnquiryAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 1, inputVal);
            }
        }
        hiWebOsFrame.SettingChnlCIPage.close();
        hiWebOsFrame.SettingChnlCIPage.origin.open();
        hiWebOsFrame.SettingChnlCIPage.origin.hiFocus();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIEscHandler() {
    try {
        debugG("SettingChnlCIEscHandler(): slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1] + ", index: " + (this.SelectedIndex + 1));
        if (true == OSDSlAndSessIdState()) {
            model.ci.ActionMenuAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0);
        } else {
            var menuStr = model.ci.getCIVStrMenu();
            if (menuStr.length >= 2) {
                OSDSlAndSessId[0] = menuStr[0];
                OSDSlAndSessId[1] = menuStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                model.ci.ActionMenuAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0);
                return;
            }

            debugG("menuStr under 2,  model.ci.getCIVStrEnquiry");
            var enquiryStr = model.ci.getCIVStrEnquiry();
            if (enquiryStr.length >= 2) {
                OSDSlAndSessId[0] = enquiryStr[0];
                OSDSlAndSessId[1] = enquiryStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                model.ci.ActionEnquiryAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0, "");
                return;
            }

            debugG("enquiryStr under 2,  model.ci.getUpgradeProgress");
            var upPercentStr = model.ci.getUpgradeProgress();
            if (upPercentStr.length >= 2) {
                OSDSlAndSessId[0] = upPercentStr[0];
                OSDSlAndSessId[1] = upPercentStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                model.ci.ActionMenuAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0);
                return;
            }

            debugG("upPercentStr under 2,  model.ci.getUpgradeResult");
            var upResultStr = model.ci.getUpgradeResult();
            if (upResultStr.length >= 2) {
                OSDSlAndSessId[0] = upResultStr[0];
                OSDSlAndSessId[1] = upResultStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                model.ci.ActionMenuAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0);
                return;
            }

            debugE("All Str is NULL, CI Page should Close. ESC HandlerFunc Err!!!!!!");

        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIEnquiryEscHandler() {
    try {
        debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
        if (true == OSDSlAndSessIdState()) {
            model.ci.ActionEnquiryAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0, "");
        } else {
            var menuStr = model.ci.getCIVStrMenu();
            if (menuStr.length >= 2) {
                OSDSlAndSessId[0] = menuStr[0];
                OSDSlAndSessId[1] = menuStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                model.ci.ActionMenuAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0);
                return;
            }

            debugG("menuStr under 2,  model.ci.getCIVStrEnquiry");
            var enquiryStr = model.ci.getCIVStrEnquiry();
            if (enquiryStr.length >= 2) {
                OSDSlAndSessId[0] = enquiryStr[0];
                OSDSlAndSessId[1] = enquiryStr[1];
                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
                model.ci.ActionEnquiryAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0, "");
                return;
            }

//            debugG("enquiryStr under 2,  model.ci.getVstrUpgradeProgress");
//            var upPercentStr = model.ci.getVstrUpgradeProgress();
//            if (upPercentStr.length >= 2) {
//                OSDSlAndSessId[0] = upPercentStr[0];
//                OSDSlAndSessId[1] = upPercentStr[1];
//                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
//                model.ci.ActionEnquiryAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0, "");
//                return;
//            }
//
//            debugG("upPercentStr under 2,  model.ci.getVstrUpgradeResult");
//            var upResultStr = model.ci.getVstrUpgradeResult();
//            if (upResultStr.length >= 2) {
//                OSDSlAndSessId[0] = upResultStr[0];
//                OSDSlAndSessId[1] = upResultStr[1];
//                debugG("slotId: " + OSDSlAndSessId[0] + ", sessionId: " + OSDSlAndSessId[1]);
//                model.ci.ActionEnquiryAnswer(OSDSlAndSessId[0], OSDSlAndSessId[1], 0, "");
//                return;
//            }

            debugE("All Str is NULL, CI Page should Close. ESC HandlerFunc Err!!!!!!");

        }
    } catch (ex) {
        debugE(ex.message);
    }
    hiWebOsFrame.SettingChnlCIPage.close();
    hiWebOsFrame.SettingChnlCIPage.origin.open();
    hiWebOsFrame.SettingChnlCIPage.origin.hiFocus();
}
function SettingChnlUpHandler() {
    try {
        debugG("selIdx: " + PageDataChnlCIData.setting_chnl_CI_ul.SelectedIndex);

        var beginIdx = hiWebOsFrame.SettingChnlCIPage.getCaE("setting_chnl_CI_ul").BeginIdx;

        if (beginIdx == UNDEFINED_DEFSTR) {
            debugE("beginIdx Err!!");
        } else {
            CIScrollMoveTo(beginIdx);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlDownHandler() {
    try {
        debugG("selIdx: " + PageDataChnlCIData.setting_chnl_CI_ul.SelectedIndex);

        var beginIdx = hiWebOsFrame.SettingChnlCIPage.getCaE("setting_chnl_CI_ul").BeginIdx;

        if (beginIdx == UNDEFINED_DEFSTR) {
            debugE("beginIdx Err!!");
        } else {
            CIScrollMoveTo(beginIdx);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function RefreshCIScrollBar(pageData) {
    try {
//        390
        debugG("RefreshCIScrollBar called");
        var OpeData = PageDataChnlCIData.operateData;
        if (pageData.setting_chnl_CI_ul.Data.length <= 5) {
            $("#setting_chnl_CI_scroll_container").css("visibility", "hidden");
            OpeData.scrollHeight = 390;
            OpeData.scrollStep = 0;
            debugG("scrollHeight: " + OpeData.scrollHeight + ", scrollStep: " + OpeData.scrollStep);

        } else {
            $("#setting_chnl_CI_scroll_container").css("visibility", "visible");

            var listCnt = pageData.setting_chnl_CI_ul.Data.length;
            OpeData.scrollHeight = 5 / listCnt * 390;
//            OpeData.scrollStep = (390 - OpeData.scrollHeight ) / (listCnt - 5);
            OpeData.scrollStep = 390 / listCnt;

            debugG("OpeData.scrollHeight" + OpeData.scrollHeight);
            debugG("OpeData.scrollStep" + OpeData.scrollStep);

            $("#setting_chnl_CI_scroll_scrollbar").css("height", OpeData.scrollHeight + "px");

            debugG("scrollHeight: " + OpeData.scrollHeight + ", scrollStep: " + OpeData.scrollStep);
            CIScrollMoveTo(0);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function CIScrollMoveTo(beginIdx) {
    try {
        debugG("beginIdx: " + beginIdx);
        var scrollMarginTop = beginIdx * PageDataChnlCIData.operateData.scrollStep;
        debugG("scrollMarginTop:" + scrollMarginTop);
        $("#setting_chnl_CI_scroll_scrollbar").css("margin-top", scrollMarginTop + "px");

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIEnquiryInputOnChange() {
    try {
        var inputVal = $("#setting_chnl_CI_input").val();


        if (PageDataChnlCIData.operateData.osdOrInputFlag == PageDataChnlCIData.operateData.EnumOsdInput.INPUT) {
            if (inputVal.length > 0) {
                $("#setting_chnl_CI_input_placeholder").css("visibility", "hidden");
            }
            else {
                $("#setting_chnl_CI_input_placeholder").css("visibility", "visible");
            }
        } else {
            $("#setting_chnl_CI_input_placeholder").css("visibility", "hidden");
        }


    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingChnlCIInputAftUpHandler() {
    try {
        SettingChnlCIPlaceholderAddMarquee();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIInputBefUpHandler() {
    try {
        SettingChnlCIPlaceholderDelMarquee();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIInputAftDownHandler() {
    try {
        SettingChnlCIPlaceholderAddMarquee();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIInputBefDownHandler() {
    try {
        SettingChnlCIPlaceholderDelMarquee();
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingChnlCIPlaceholderDelMarquee() {
    try {
        debugG('SettingChnlCIPlaceholderDelMarquee');
        var marquee = $("#setting_chnl_CI_input_placeholder" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_chnl_CI_input_placeholder" + " marquee").html();
            var marquee = $("#setting_chnl_CI_input_placeholder").html(htmlText);
        }
        $("#setting_chnl_CI_input_placeholder").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIPlaceholderAddMarquee() {
    try {
        debugG('SettingChnlCIPlaceholderAddMarquee');
        SettingChnlCIPlaceholderDelMarquee();
        var htmlText = $("#setting_chnl_CI_input_placeholder").html();
        if (htmlText.length > PageDataChnlCIData.operateData.InputPlaceholderMarqueeLength) {
            $("#setting_chnl_CI_input_placeholder").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
    } catch (ex) {
        debugE(ex.message);
    }
}
