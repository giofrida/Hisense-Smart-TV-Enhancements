function getSettingChnlCIPINSetData(opts) {
    try {
        SettingChnlCIPINSetInit();
        opts.CaE = [
            {
                "id": "setting_chnl_CI_PIN_set_head",
                "description": "setting_chnl_CI_PIN_set_head",
                "CaEType": "div"
            },
            {
                "id": "setting_chnl_CI_PIN_set_text_0",
                "description": "setting_chnl_CI_PIN_set_text_0",
                "CaEType": "div"
            },
            {
                "id": "setting_chnl_CI_PIN_input_container",
                "description": "容器控件",
                "CaEType": "Container",
                "firstFocusId": "setting_chnl_CI_PIN_input",
                "classes": {
                    "normal": "setting_chnl_CI_input_container_normal",
                    "focus": "setting_chnl_CI_input_container_focus",
                    "selected": "setting_chnl_CI_input_container_focus"
                },
                "nav": {
                    "upTo": "setting_chnl_CI_PIN_btn_ok",
                    "downTo": "setting_chnl_CI_PIN_btn_ok"
                },
                "CaE": [
                    {
                        "id": "setting_chnl_CI_PIN_input",
                        "description": "CI PIN input",
                        "CaEType": "input",
                        "classes": {
                            "normal": "setting_chnl_CI_input",
                            "focus": "setting_chnl_CI_input_focus"
                        },
                        "nav": {
                            "upTo": "setting_chnl_CI_PIN_btn_ok",
                            "downTo": "setting_chnl_CI_PIN_btn_ok"
                        },
                        "inputAttr": "numberpassword",
                        "handler": {
                            "aftEnterHandler": "invokeSKB",
                            "aftEscHandler": "SettingChnlCIPINSetEscHandle"
                        },
                        "maxlength": 6,
                        "min": 000,
                        "max": 1000000

                    }
                ]
            },
            {
                "id": "setting_chnl_CI_PIN_btn_ok",
                "description": "setting_chnl_CI_PIN_btn_ok",
                classes: {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingChnlCIPINSetBtnOKEnterHandle",
                    "aftEscHandler": "SettingChnlCIPINSetEscHandle"
                },
                "nav": {
                    "leftTo": "setting_chnl_CI_PIN_btn_cancel",
                    "rightTo": "setting_chnl_CI_PIN_btn_cancel",
                    "upTo": "setting_chnl_CI_PIN_input_container",
                    "downTo": "setting_chnl_CI_PIN_input_container"
                },
                "CaEType": "div"
            },
            {
                "id": "setting_chnl_CI_PIN_btn_cancel",
                "description": "setting_chnl_CI_PIN_btn_cancel",
                classes: {
                    "normal": "setting_snd_RAS_btn_class_normal",
                    "focus": "setting_snd_RAS_btn_class_focus"
                },
                "handler": {
                    "aftEnterHandler": "SettingChnlCIPINSetEscHandle",
                    "aftEscHandler": "SettingChnlCIPINSetEscHandle"
                },
                "nav": {
                    "leftTo": "setting_chnl_CI_PIN_btn_ok",
                    "rightTo": "setting_chnl_CI_PIN_btn_ok",
                    "upTo": "setting_chnl_CI_PIN_input_container",
                    "downTo": "setting_chnl_CI_PIN_input_container"
                },
                "CaEType": "div"
            }
        ];
        return PageDataSettingChnlCIPINSet;
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlCIPINSetOpen() {
    try {

    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlCIPINSetClose() {
    try {
        PageDataSettingChnlCIPINSet.operateData.slotID = -1;
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlCIPINSetDestroy() {
    try {
        hiWebOsFrame.SettingChnlCIPINSet = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataSettingChnlCIPINSet = {
    "setting_chnl_CI_PIN_set_head": {Data: "CA Module 1 PIN Set"},
    "setting_chnl_CI_PIN_set_text_0": {Data: "Please input PIN"},
    "setting_chnl_CI_PIN_btn_ok": {Data: "OK"},
    "setting_chnl_CI_PIN_btn_cancel": {Data: "Cancel"},
    "setting_chnl_CI_PIN_input_container": {
        "Data": {
            "setting_chnl_CI_PIN_input": {"Data": ""}
        }
    },
    operateData: {
        "setting_chnl_CI_PIN_set_head": {Data: "CA Module PIN Set"},
        "headTextEnum": {
            "CA1HeadText": "CA Module 1 PIN Set",
            "CA2HeadText": "CA Module 2 PIN Set"
        },
        "slotID": -1
    },
    langData:{
        "Please input PIN": [],
        "CA Module PIN Set": [],
        "OK": [],
        "Cancel": []
    },
    rewrite: "SettingChnlCIPINSetRewrite"
};

function SettingChnlCIPINSetRewrite(pageData) {
    try {
        pageData.setting_chnl_CI_PIN_set_head.Data = pageData.operateData.setting_chnl_CI_PIN_set_head.Data;

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIPINSetInit() {
    try {
    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingChnlCIPINSetBtnOKEnterHandle() {
    try {
        var inputVal = $("#setting_chnl_CI_PIN_input").val();
        debugG("inputVal is:" + inputVal);

        if (PageDataSettingChnlCIPINSet.operateData.slotID == -1) {
            debugE("PageDataSettingChnlCIPINSet.operateData.slotID == -1 ERR!!");
        } else {
            model.ci.ActionStorePin(PageDataSettingChnlCIPINSet.operateData.slotID, 1, inputVal);
        }

        hiWebOsFrame.SettingChnlCIPINSet.close();
        hiWebOsFrame.SettingChnlCIPINSet.origin.open();
        hiWebOsFrame.SettingChnlCIPINSet.origin.hiFocus();
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlCIPINSetEscHandle() {
    try {
        hiWebOsFrame.SettingChnlCIPINSet.close();
        hiWebOsFrame.SettingChnlCIPINSet.origin.open();
        hiWebOsFrame.SettingChnlCIPINSet.origin.hiFocus();
    } catch (ex) {
        debugE(ex.message);
    }
}