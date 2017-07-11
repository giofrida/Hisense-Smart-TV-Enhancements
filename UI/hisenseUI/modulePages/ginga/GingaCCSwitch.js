/**
 * Created by ghl on 14-6-19.
 */


function getGingaCCSwitchData(opts) {
    //没有Init函数
    opts.CaE = [
        {
            "id": "ginga_cc_switch_content_text",
            "CaEType": "span"
        },
        {
            "id": "ginga_cc_switch_btn_0",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": GingaCCSwitchOKEnterHandler,
                "aftEscHandler": GingaCCSwitchOKEscHandler
            },
            "nav": {
                "leftTo": "ginga_cc_switch_btn_1",
                "rightTo": "ginga_cc_switch_btn_1"
            }
        },
        {
            "id": "ginga_cc_switch_btn_1",
            "description": "声音出厂化设置 btn1",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": GingaCCSwitchOKEscHandler,
                "aftEscHandler": GingaCCSwitchOKEscHandler
            },
            "nav": {
                "leftTo": "ginga_cc_switch_btn_0",
                "rightTo": "ginga_cc_switch_btn_0"
            }
        }
    ];
    return PageDataGingaCCSwitch;
}

function onGingaCCSwitchOpen() {

}

function onGingaCCSwitchDestroy() {
    try {
        hiWebOsFrame.GingaCCSwitch = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataGingaCCSwitch = {
    "ginga_cc_switch_content_text": {Data: "Do you want to stop Ginga application and open CC?"},
    "ginga_cc_switch_btn_0": {Data: "OK"},
    "ginga_cc_switch_btn_1": {Data: "Cancel"},
    operateData: {
        CCIndexSet: 0
    },
    rewrite: GingaCCSwitchRewrite,
    langData: {
        "Do you want to stop Ginga application and open CC?":[],
        "OK": ["OK"],
        "Cancel": ["Cancel"]
    }
};


function GingaCCSwitchRewrite(pageData) {
    try {

    } catch (ex) {
        debugE(ex.message);
    }
}

function GingaCCSwitchOKEnterHandler() {
    try {
        debugG('GingaCCSwitchOKEnterHandler');
        ginga.GingaStop();

        hiWebOsFrame.GingaCCSwitch.close();

        var SelIdx = PageDataGingaCCSwitch.operateData.CCIndexSet;
        hiWebOsFrame.settingscclist.operateData.curselectindex= SelIdx;
        model.closedcaption.setControl(SelIdx);

        hiWebOsFrame.settingscclist.open();
        hiWebOsFrame.settingscclist.hiFocus();
        hiWebOsFrame.settingscclist.rewriteDataOnly();
        setTimeout(closeccbuttonpage,1000);

        hiWebOsFrame.GingaCCSwitch.destroy();


    } catch (ex) {
        debugE(ex.message);
    }
}

function GingaCCSwitchOKEscHandler() {
    try {
        hiWebOsFrame.GingaCCSwitch.close();

        hiWebOsFrame.settingscclist.open();
        hiWebOsFrame.settingscclist.hiFocus();
        hiWebOsFrame.settingscclist.rewriteDataOnly();

        hiWebOsFrame.GingaCCSwitch.destroy();

    } catch (ex) {
        debugE(ex.message);
    }
}
