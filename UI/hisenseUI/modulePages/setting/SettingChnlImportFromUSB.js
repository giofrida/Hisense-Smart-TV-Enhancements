/**
 * Created by ghl on 14-6-19.
 */
var impErrTimer;

function getSettingChnlImportFromUSBData(opts) {
    opts.CaE = [
        {
            "id": "setting_chnl_advanced_import_from_usb_dialog_text",
            "description": "Setting Channel Import From USB 对话框文字",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_import_from_usb_cancel_btn",
            "description": "Setting Channel Import From USB 对话框 取消按钮",
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "SettingChnlAbortImportFromUSB",
                "aftEscHandler": "SettingChnlAbortImportFromUSB"
            },
            "classes": {
                "normal": "",
                "focus": "setting_chnl_advanced_export_to_usb_cancel_btn"
            }
        }
    ];
    return PageDataSettingChnlImportFromUSB;
}

function onSettingChnlImportFromUSBOpen() {
    try {
//        SettingChnlImExFlag = 0;
        impErrTimer = setTimeout(function () {
            debugG("Import from USB Time Outttttttt");
            SettingChnlImportFromUSBErr();
        }, 30000);
        model.servicelist.ListImport();
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlImportFromUSBClose() {
    try {
//        SettingChnlImExFlag = -1;
//        var msgId = model.message.getMessageid();
//        if (288 == msgId) {
//            model.message.ActionConfirm(288, 6);
//        }
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_dialog_text.Data = PageDataSettingChnlImportFromUSB.operateData.textContentEnum.wait;
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_cancel_btn.Data = PageDataSettingChnlImportFromUSB.operateData.btnTextEnum.Cancel;
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlImportFromUSBDestroy() {
    try {
        hiWebOsFrame.SettingChnlImportFromUSBPage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataSettingChnlImportFromUSB = {
    "setting_chnl_advanced_import_from_usb_dialog_text": {Data: "Importing list"},
    "setting_chnl_advanced_import_from_usb_cancel_btn": {Data: "Cancel"},
    operateData: {
        "setting_chnl_advanced_import_from_usb_dialog_text": {Data: "Importing list"},
        "setting_chnl_advanced_import_from_usb_cancel_btn": {Data: "Cancel"},
        "textContentEnum": {
            "wait": "Importing list",
            "success": "Imported successfully",
            "error": "Failed to import"
        },
        "btnTextEnum": {
            "Cancel": "Cancel",
            "OK": "OK"
        }
    },
    langData: {
        "Importing list": ["Importing list"],
        "Imported successfully": ["Imported successfully"],
        "Failed to import": ["Failed to import"],
        "OK": ["OK"],
        "Cancel": ["Cancel"]
    },
    rewrite: "SettingChnlImportFromUSBRewrite"
};

function SettingChnlImportFromUSBRewrite(pageData) {
    try {
        pageData.setting_chnl_advanced_import_from_usb_dialog_text.Data = pageData.operateData.setting_chnl_advanced_import_from_usb_dialog_text.Data;
        pageData.setting_chnl_advanced_import_from_usb_cancel_btn.Data = pageData.operateData.setting_chnl_advanced_import_from_usb_cancel_btn.Data;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlAbortImportFromUSB() {
    try {
        clearTimeout(impErrTimer);
        hiWebOsFrame.SettingChnlImportFromUSBPage.close();
        hiWebOsFrame.SettingChnlImportFromUSBPage.origin.open();
        hiWebOsFrame.SettingChnlImportFromUSBPage.origin.hiFocus();
        hiWebOsFrame.SettingChnlImportFromUSBPage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingChnlImportFromUSBPage.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

//    setTimeout(function () {
//        if (true == hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlAdvancedPage.id)) {


//        }
//    }, 500);
}

//function ImExUSBMsg(val) {
//    /***Station list import successfully finished.**/
//    try {
//        debugG("Import message is " + val);
//
//        var valStr = val.toLocaleString();
//
//        if (valStr.indexOf("successfully") > -1) {
//            debugG("message is success");
//            SettingChnlImportFromUSBSuccess();
//        } else if (valStr.indexOf("fail") > -1) {
//            debugG("Msg is fail");
//            SettingChnlImportFromUSBErr();
//        } else if (valStr.indexOf("progress") > -1) {
//            debugG("Msg in progress");
//            SettingChnlImportFromUSBErr();
//        }
//    } catch (ex) {
//        debugE(ex.message);
//    }
//}

function SettingChnlImportFromUSBErr() {
    try {
        clearTimeout(impErrTimer);
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_dialog_text.Data = PageDataSettingChnlImportFromUSB.operateData.textContentEnum.error;
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_cancel_btn.Data = PageDataSettingChnlImportFromUSB.operateData.btnTextEnum.OK;
        hiWebOsFrame.SettingChnlImportFromUSBPage.rewriteDataOnly();

        if ($("#setting_chnl_advanced_import_from_usb_dialog_img").length > 0) {
            $("#setting_chnl_advanced_import_from_usb_dialog_img").attr("class", "setting_chnl_advanced_export_to_usb_dialog_img_fail");
        }

        //复原
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_dialog_text.Data = PageDataSettingChnlImportFromUSB.operateData.textContentEnum.wait;
        setTimeout(function () {
            if(null != hiWebOsFrame.SettingChnlImportFromUSBPage){
                SettingChnlAbortImportFromUSB();
            }
        }, 5000);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlImportFromUSBSuccess() {
    try {
        //更新列表
        livetvchlist.initChannelList();
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        clearTimeout(impErrTimer);
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_dialog_text.Data = PageDataSettingChnlImportFromUSB.operateData.textContentEnum.success;
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_cancel_btn.Data = PageDataSettingChnlImportFromUSB.operateData.btnTextEnum.OK;
        hiWebOsFrame.SettingChnlImportFromUSBPage.rewriteDataOnly();

        if ($("#setting_chnl_advanced_import_from_usb_dialog_img").length > 0) {
            $("#setting_chnl_advanced_import_from_usb_dialog_img").attr("class", "setting_chnl_advanced_export_to_usb_dialog_img_success");
        }

        //复原
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_dialog_text.Data = PageDataSettingChnlImportFromUSB.operateData.textContentEnum.wait;
        setTimeout(function () {
            if(null != hiWebOsFrame.SettingChnlImportFromUSBPage){
                SettingChnlAbortImportFromUSB();
            }
        }, 3000);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlImportFromUSBProgress() {
    try {
        clearTimeout(impErrTimer);
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_dialog_text.Data = PageDataSettingChnlImportFromUSB.operateData.textContentEnum.wait;
        PageDataSettingChnlImportFromUSB.operateData.setting_chnl_advanced_import_from_usb_cancel_btn.Data = PageDataSettingChnlImportFromUSB.operateData.btnTextEnum.Cancel;
        hiWebOsFrame.SettingChnlImportFromUSBPage.rewriteDataOnly();
        if ($("#setting_chnl_advanced_import_from_usb_dialog_img").length > 0) {
            $("#setting_chnl_advanced_import_from_usb_dialog_img").attr("class", "setting_chnl_advanced_export_to_usb_dialog_img");
        }
    } catch (ex) {
        debugE(ex.message);
    }
}