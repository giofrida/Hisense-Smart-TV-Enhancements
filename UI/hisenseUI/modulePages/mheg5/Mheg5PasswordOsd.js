/**
 * Created by ghl on 14-6-19.
 */

/*<div id="mheg5_password_osd_page" class="mheg5_password_osd_page">
 <div id="mheg5_password_osd_head" class="mheg5_password_osd_head"></div>
 <div id="mheg5_password_osd_content" class="mheg5_password_osd_content">
 <div id="mheg5_password_osd_content_text_0" class="mheg5_password_osd_content_text_0">
 ci search string hint
 </div>
 </div>
 <div id="mheg5_password_osd_btn_0" class="setting_snd_RAS_btn_class_normal">OK</div>
 <div id="mheg5_password_osd_btn_1" class="setting_snd_RAS_btn_class_normal" style="margin-left: 2px;">Cancel</div>
 </div>*/


function getMheg5PasswordOsdData(opts) {

    opts.CaE = [
        {
            "id": "mheg5_password_osd_head",
            "description": "mheg5_password_osd_head",
            "CaEType": "span"
        },
        {
            "id": "mheg5_password_osd_content_text_0",
            "description": "mheg5_password_osd_content_text_0",
            "CaEType": "div"
        },

        {
            "id": "mheg5_password_input_container",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId": "mheg5_password_input",
            "classes": {
                "normal": "setting_chnl_CI_input_container_normal",
                "focus": "setting_chnl_CI_input_container_focus",
                "selected": "setting_chnl_CI_input_container_focus"
            },
            "nav": {
                "upTo": "mheg5_password_osd_btn_0",
                "downTo": "mheg5_password_osd_btn_0"
            },
            "CaE": [
                {
                    "id": "mheg5_password_input",
                    "description": "CI input",
                    "CaEType": "input",
                    "classes": {
                        "normal": "setting_chnl_CI_input",
                        "focus": "setting_chnl_CI_input_focus"
                    },
                    "nav": {
                        "upTo": "mheg5_password_osd_btn_0",
                        "downTo": "mheg5_password_osd_btn_0"
                    },
                    "inputAttr": "numberpassword",
                    "handler": {
                        "keyChannelUpHandler": "Mheg5keyChannelUpHandler",
                        "keyChannelDownHandler": "Mheg5keyChannelDownHandler",
                        "aftEnterHandler": "invokeSKB"
//                        "aftEscHandler": "Mheg5PasswordOsdCancelHandler"
                    },
                    "maxlength": 10,
                    "min": 000,
                    "max": 10000000000

                }
            ]
        },
        {
            "id": "mheg5_password_osd_btn_0",
            "description": "mheg5_password_osd_btn_0",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "keyChannelUpHandler": "Mheg5keyChannelUpHandler",
                "keyChannelDownHandler": "Mheg5keyChannelDownHandler",
                "aftEnterHandler": "Mheg5PasswordOsdOKHandler"
//                "aftEscHandler": "Mheg5PasswordOsdCancelHandler"
            },
            "nav": {
//                "leftTo": "mheg5_password_osd_btn_1",
//                "rightTo": "mheg5_password_osd_btn_1",
                "upTo":"mheg5_password_input_container",
                "downTo":"mheg5_password_input_container"
            }
        },
        {
            "id": "mheg5_password_osd_btn_1",
            "description": "mheg5_password_osd_btn_1",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "keyChannelUpHandler": "Mheg5keyChannelUpHandler",
                "keyChannelDownHandler": "Mheg5keyChannelDownHandler",
                "aftEnterHandler": "Mheg5PasswordOsdCancelHandler"
//                "aftEscHandler": "Mheg5PasswordOsdCancelHandler"
            },
            "nav": {
                "leftTo": "mheg5_password_osd_btn_0",
                "rightTo": "mheg5_password_osd_btn_0",
                "upTo":"mheg5_password_input_container",
                "downTo":"mheg5_password_input_container"
            }
        }
    ];
    Mheg5PasswordOsdInit();
    return PageDataMheg5PasswordOSD;
}

function onMheg5PasswordOsdOpen() {
    try {
    } catch (ex) {
        debugE(ex.message);
    }
}

function onMheg5PasswordOsdClose() {
    try {
        debugG('onMheg5PasswordOsdClose');
    } catch (ex) {
        debugE(ex.message);
    }
}

function onMheg5PasswordOsdDestroy() {
    try {
        debugG("onCIOPSearchAnswerDestroy");
        hiWebOsFrame.CIOPSearchAnswerPage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataMheg5PasswordOSD = {
    "mheg5_password_osd_head": {Data: "Mheg5 Head Text  TESTTTTTTTTTTTT"},
    "mheg5_password_osd_btn_0": {Data: "OK"},
    "mheg5_password_osd_btn_1": {Data: ""},
    "mheg5_password_osd_content_text_0":{Data:"Enter PIN"},
    "mheg5_password_input_container": {
        "Data": {
            "mheg5_password_input": {"Data": ""}
        }
    },
    operateData: {
        "mheg5_password_osd_head": {Data: "Mheg5 Head Text  Test"},
        "mheg5_password_osd_content_text_0":{Data:"Enter PIN"},
        "mheg5_password_osd_btn_0": {Data: "OK"},
        "mheg5_password_osd_btn_1": {Data: ""}

    },
    rewrite: "Mheg5PasswordOSDRewrite",
    langData: {
        "OK": ["OK"],
        "Cancel": ["Cancel"],
        "Password":[""],
        "Enter PIN":[""]
    }
};


function Mheg5PasswordOSDRewrite(pageData) {
    try {
        debugG("Mheg5PasswordOSDRewrite");
        pageData.mheg5_password_osd_head.Data = pageData.operateData.mheg5_password_osd_head.Data;
        pageData.mheg5_password_osd_content_text_0.Data = pageData.operateData.mheg5_password_osd_content_text_0.Data;


    } catch (ex) {
        debugE(ex.message);
    }
}

function Mheg5PasswordOsdOKHandler() {
    try {
        debugG("Mheg5PasswordOsdOKHandler");
        var sysPwd = g_SystemFallbackPwd;
        var parentLockPin = model.parentlock.getPin();
        var inputVal = $("#mheg5_password_input").val();

        debugG('model.parentlock.getPin(): '+parentLockPin+', inputVal: '+inputVal);

        if(parentLockPin == inputVal || inputVal == sysPwd){
            debugG('parentLockPin == inputVal, model.mheg5.ActionSetPfgresult(1)');
            model.mheg5.ActionSetPfgresult(1);
        } else {
            debugG('parentLockPin != inputVal, model.mheg5.ActionSetPfgresult(0)');
            model.mheg5.ActionSetPfgresult(0);
        }
        try {
            debugG(' hiWebOsFrame.SendMheg5Status(1) && model.mheg5.setI32Status(1) after Mheg5PasswordOsdOKHandler()');
            hiWebOsFrame.SendMheg5Status(1);
            model.mheg5.setI32Status(1);
        } catch (ex) {
            debugE(ex.message);
        }


        hiWebOsFrame.Mheg5PasswordOSD.close();
        hiWebOsFrame.Mheg5PasswordOSD.origin.open();
        hiWebOsFrame.Mheg5PasswordOSD.origin.hiFocus();
        hiWebOsFrame.Mheg5PasswordOSD.origin.rewriteDataOnly();
        hiWebOsFrame.Mheg5PasswordOSD.destroy();

    } catch (ex) {
        debugE(ex.message);
    }
}

function Mheg5PasswordOsdCancelHandler() {
    try {
        hiWebOsFrame.Mheg5PasswordOSD.close();
        hiWebOsFrame.Mheg5PasswordOSD.origin.open();
        hiWebOsFrame.Mheg5PasswordOSD.origin.hiFocus();
        hiWebOsFrame.Mheg5PasswordOSD.origin.rewriteDataOnly();
        hiWebOsFrame.Mheg5PasswordOSD.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}