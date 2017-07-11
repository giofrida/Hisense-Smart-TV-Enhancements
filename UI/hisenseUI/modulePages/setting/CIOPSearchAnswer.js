/**
 * Created by ghl on 14-6-19.
 */


function getCIOPSearchAnswerData(opts) {

    opts.CaE = [
        {
            "id": "ci_op_search_answer_text",
            "description": "ci_op_search_answer_text",
            "CaEType": "span"
        },
        {
            "id": "ci_op_search_answer_btn_0",
            "description": "ci_op_search_answer_btn_0",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "CIOPSearchAnswerOKHandler",
                "aftEscHandler": "CIOPSearchAnswerCancelHandler"
            },
            "nav": {
                "leftTo": "ci_op_search_answer_btn_1",
                "rightTo": "ci_op_search_answer_btn_1"
            }
        },
        {
            "id": "ci_op_search_answer_btn_1",
            "description": "ci_op_search_answer_btn_1",
            "CaEType": "div",
            "classes": {
                "normal": "setting_snd_RAS_btn_class_normal",
                "focus": "setting_snd_RAS_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "CIOPSearchAnswerCancelHandler",
                "aftEscHandler": "CIOPSearchAnswerCancelHandler"
            },
            "nav": {
                "leftTo": "ci_op_search_answer_btn_0",
                "rightTo": "ci_op_search_answer_btn_0"
            }
        }
    ];
    return PageDataCIOPSearchAnswer;
}

function onCIOPSearchAnswerClose() {
    try {
        debugG("onCIOPSearchAnswerClose");
        CI_OP_SEARCH_FLAG = 0;
    } catch (ex) {
        debugE(ex.message);
    }
}

function onCIOPSearchAnswerOpen() {

}

function onCIOPSearchAnswerDestroy() {
    try {
        debugG("onCIOPSearchAnswerDestroy");
        hiWebOsFrame.CIOPSearchAnswerPage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataCIOPSearchAnswer = {
    "ci_op_search_answer_text": {Data: ""},
    "ci_op_search_answer_btn_0": {Data: "OK"},
    "ci_op_search_answer_btn_1": {Data: "Cancel"},
    operateData: {
        "ci_op_search_answer_text": {Data: ""},
        "ci_op_search_answer_btn_0": {Data: "OK"},
        "ci_op_search_answer_btn_1": {Data: "Cancel"},
        "CIOPSearchTextEnum": [
            "CI Plus Network change, you may search to update network~~~",
            "CI Plus Network change, you may search to update network!",
            "CI Plus Network unavailable, you must search to update network!",
            "CI Plus Network not init, you may search to update network!",
            "CI Plus Network search schedule time reached, you may search to update network!"]
    },
    rewrite: "CIOPSearchAnswerRewrite",
    langData: {
        "CI Plus Network change, you may search to update network!": ["CI Plus Network change, you may search to update network!"],
        "CI Plus Network unavailable, you must search to update network!": ["CI Plus Network unavailable, you must search to update network!"],
        "CI Plus Network not init, you may search to update network!": ["CI Plus Network not init, you may search to update network!"],
        "CI Plus Network search schedule time reached, you may search to update network!": ["CI Plus Network search schedule time reached, you may search to update network!"],
        "OK": ["OK"],
        "Cancel": ["Cancel"]
    }
};


function CIOPSearchAnswerRewrite(pageData) {
    try {
        debugG("CIOPSearchAnswerRewrite");
        pageData.ci_op_search_answer_text.Data = pageData.operateData.ci_op_search_answer_text.Data;
    } catch (ex) {
        debugE(ex.message);
    }
}

function CIOPSearchAnswerOKHandler() {
    try {
        debugG("CIOPSearchAnswerOKHandler");
        hiWebOsFrame.CIOPSearchAnswerPage.close();
        hiWebOsFrame.CIOPSearchAnswerPage.origin.open();
        hiWebOsFrame.CIOPSearchAnswerPage.origin.hiFocus();
        hiWebOsFrame.CIOPSearchAnswerPage.origin.rewriteDataOnly();
        hiWebOsFrame.CIOPSearchAnswerPage.destroy();
        model.ci.CamOpmessageAnswer(1);
    } catch (ex) {
        debugE(ex.message);
    }
}

function CIOPSearchAnswerCancelHandler() {
    try {
        hiWebOsFrame.CIOPSearchAnswerPage.close();
        hiWebOsFrame.CIOPSearchAnswerPage.origin.open();
        hiWebOsFrame.CIOPSearchAnswerPage.origin.hiFocus();
        hiWebOsFrame.CIOPSearchAnswerPage.origin.rewriteDataOnly();
        hiWebOsFrame.CIOPSearchAnswerPage.destroy();
        model.ci.CamOpmessageAnswer(0);
    } catch (ex) {
        debugE(ex.message);
    }
}