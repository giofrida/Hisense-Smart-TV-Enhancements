function getSettingMsgPageData(opts) {
    try {
//        SettingMsgPageInit();
        opts.CaE = [
            {
                "id": "setting_msg_info_span_0",
                "description": "setting_msg_info",
                "CaEType": "span"
            },
            {
                "id": "setting_msg_info_span_1",
                "description": "setting_msg_info",
                "CaEType": "span"
            },
            {
                "id": "setting_msg_info_span_2",
                "description": "setting_msg_info",
                "CaEType": "span"
            },            {
                "id": "setting_msg_info_span_3",
                "description": "setting_msg_info",
                "CaEType": "span"
            },
            {
                "id": "setting_msg_info_span_4",
                "description": "setting_msg_info",
                "CaEType": "span"
            }
        ];

        return PageDataSettingMsgPage;


    } catch (ex) {
        debugE(ex.message);
    }

}


var PageDataSettingMsgPage = {
    "setting_msg_info_span_0": {Data: ""},
    "setting_msg_info_span_1": {Data: ""},
    "setting_msg_info_span_2": {Data: ""},
    "setting_msg_info_span_3": {Data: ""},
    "setting_msg_info_span_4": {Data: ""},
    operateData: {
        "msgId": 0,
        "setting_msg_info_span_0": {Data: ""},
        "setting_msg_info_span_1": {Data: ""},
        "setting_msg_info_span_2": {Data: ""},
        "setting_msg_info_span_3": {Data: ""},
        "setting_msg_info_span_4": {Data: ""},
        "msgInfo_16": {Data: "The channel is encrypted. Please check whether the CI+ module / CA module and smartcard have been inserted correctly."},

        "msgInfo_130": {Data: "The CA module is already being used by another application (PIP, recording, main picture, ...)."},
        "msgInfo_196": {Data: ""},
        "msgInfo_197": {Data: ""},
        "msgInfo_197Enum": {
            text_0_slot_1: {Data: 'A communication error occurred with your CI Plus CA module in CI slot 1 (Error code'},
            text_0_slot_2: {Data: 'A communication error occurred with your CI Plus CA module in CI slot 2 (Error code'},
            text_1: {Data: '). For information about the further procedure, please check the printed/online operating instructions'}
        },
        "hiddenTimer": -1
    },
    langData:{
        "The channel is encrypted. Please check whether the CI+ module / CA module and smartcard have been inserted correctly.":[],
        "The CA module is already being used by another application (PIP, recording, main picture, ...).":[],
        "A communication error occurred with your CI Plus CA module in CI slot 1 (Error code":[],
        "A communication error occurred with your CI Plus CA module in CI slot 2 (Error code":[],
        "). For information about the further procedure, please check the printed/online operating instructions":[]
    },
    rewrite: "SettingMsgPageRewrite"

}


function onSettingMsgPageOpen() {
    try {
        if ($("#setting_msg_page") != null) {
            $("#setting_msg_page").attr("class", "setting_msg_info_normal_bkg");
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingMsgPageClose() {
    try {
        debugG("onSettingMsgPageClose");
        //先暂时不在Exist键里清空消息，需要时添加
//        var msgId = model.message.getMessageid();
//        if ($.inArray(msgId, MsgIdCIVec) != -1) {
//            debugG("model.message.ActionConfirm(" + msgId + ", 6)");
//            model.message.ActionConfirm(msgId, 6);
//        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingMsgPageDestroy() {
    try {
        debugG("onSettingMsgPageDestroy");
        hiWebOsFrame.SettingMsgPage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingMsgPageRewrite(pageData) {
    try {
        debugG("SettingMsgPageRewrite==============================");
//        clearTimeout(pageData.hiddenTimer);
        pageData.setting_msg_info_span_0.Data = pageData.operateData.setting_msg_info_span_0.Data;
        pageData.setting_msg_info_span_1.Data = pageData.operateData.setting_msg_info_span_1.Data;
        pageData.setting_msg_info_span_2.Data = pageData.operateData.setting_msg_info_span_2.Data;
        pageData.setting_msg_info_span_3.Data = pageData.operateData.setting_msg_info_span_3.Data;
        pageData.setting_msg_info_span_4.Data = pageData.operateData.setting_msg_info_span_4.Data;
//        pageData.hiddenTimer = setTimeout(function () {
//            var msgId = model.message.getMessageid();
//            if (16 == msgId) {
//                debugG("SettingMsgPage 30S TimeOut, will close this page: model.message.ActionConfirm(16, 6)");
//                model.message.ActionConfirm(16, 6);
//            }
//            hiWebOsFrame.SettingMsgPage.close();
//            hiWebOsFrame.SettingMsgPage.destroy();
//        }, 30000);
    } catch (ex) {
        debugE(ex.message);
    }
}

function ClearMsgPageSpanData(){
    try {
        if(!!PageDataSettingMsgPage){
            PageDataSettingMsgPage.operateData.setting_msg_info_span_0.Data = "";
            PageDataSettingMsgPage.operateData.setting_msg_info_span_1.Data = "";
            PageDataSettingMsgPage.operateData.setting_msg_info_span_2.Data = "";
            PageDataSettingMsgPage.operateData.setting_msg_info_span_3.Data = "";
            PageDataSettingMsgPage.operateData.setting_msg_info_span_4.Data = "";

            PageDataSettingMsgPage.setting_msg_info_span_0.Data = "";
            PageDataSettingMsgPage.setting_msg_info_span_1.Data = "";
            PageDataSettingMsgPage.setting_msg_info_span_2.Data = "";
            PageDataSettingMsgPage.setting_msg_info_span_3.Data = "";
            PageDataSettingMsgPage.setting_msg_info_span_4.Data = "";
        }
    } catch (ex) {
        debugE(ex.message);
    }
}


























