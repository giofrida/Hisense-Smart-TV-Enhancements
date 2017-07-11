/**
 * Created by ghl on 14-6-19.
 */
var expErrTimer;

function getSettingChnlExportToUSBData(opts) {
    opts.CaE = [
        {
            "id": "setting_chnl_advanced_export_to_usb_dialog_text",
            "description": "Setting Channel Export To USB 对话框文字",
            "CaEType": "div"
        },
        {
            "id": "setting_chnl_advanced_export_to_usb_cancel_btn",
            "description": "Setting Channel Export To USB 对话框 取消按钮",
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "SettingChnlAbortExportToUSB",
                "aftEscHandler": "SettingChnlAbortExportToUSB"
            },
            "classes": {
                "normal": "",
                "focus": "setting_chnl_advanced_export_to_usb_cancel_btn"
            }
        }
    ];
    return PageDataSettingChnlExportToUSB;
}

function onSettingChnlExportToUSBOpen() {
    try {
//        SettingChnlImExFlag = 1;
        expErrTimer = setTimeout(function () {
            debugG("Export To USB Time Outttttttt");
            SettingChnlExportToUSBErr();
        }, 30000);
        model.servicelist.ListExport();
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlExportToUSBClose() {
    try {
//        SettingChnlImExFlag = -1;
//        var msgId = model.message.getMessageid();
//        if (288 == msgId) {
//            model.message.ActionConfirm(288, 6);
//        }
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_dialog_text.Data = PageDataSettingChnlExportToUSB.operateData.textContentEnum.wait;
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_cancel_btn.Data = PageDataSettingChnlExportToUSB.operateData.btnTextEnum.Cancel;
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingChnlExportToUSBDestroy() {
    try {
        hiWebOsFrame.SettingChnlExportToUSBPage = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

var PageDataSettingChnlExportToUSB = {
    "setting_chnl_advanced_export_to_usb_dialog_text": {Data: "Exporting list"},
    "setting_chnl_advanced_export_to_usb_cancel_btn": {Data: "Cancel"},
    operateData: {
        "setting_chnl_advanced_export_to_usb_dialog_text": {Data: "Exporting list"},
        "setting_chnl_advanced_export_to_usb_cancel_btn": {Data: "Cancel"},
        "textContentEnum": {
            "wait": "Exporting list",
            "success": "Exported successfully",
            "error": "Failed to export"
        },
        "btnTextEnum": {
            "Cancel": "Cancel",
            "OK": "OK"
        }
    },
    langData: {
        "Cancel": ["Cancel"],
        "OK": ["OK"],
        "Exporting list": ["Exporting list"],
        "Exported successfully": ["Exported successfully"],
        "Failed to export": ["Failed to export"]
    },
    rewrite: "SettingChnlExportToUSBRewrite"
};

function SettingChnlExportToUSBRewrite(pageData) {
    try {
        pageData.setting_chnl_advanced_export_to_usb_dialog_text.Data = pageData.operateData.setting_chnl_advanced_export_to_usb_dialog_text.Data;
        pageData.setting_chnl_advanced_export_to_usb_cancel_btn.Data = pageData.operateData.setting_chnl_advanced_export_to_usb_cancel_btn.Data;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlAbortExportToUSB() {
    try {
        clearTimeout(expErrTimer);
        hiWebOsFrame.SettingChnlExportToUSBPage.close();
        hiWebOsFrame.SettingChnlExportToUSBPage.origin.open();
        hiWebOsFrame.SettingChnlExportToUSBPage.origin.hiFocus();
        hiWebOsFrame.SettingChnlExportToUSBPage.origin.rewriteDataOnly();
        hiWebOsFrame.SettingChnlExportToUSBPage.destroy();
    } catch (ex) {
        debugE(ex.message);
    }

//    setTimeout(function () {
//        if (true == hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlAdvancedPage.id)) {
//            hiWebOsFrame.SettingChnlAdvancedPage.open();
//            hiWebOsFrame.SettingChnlAdvancedPage.hiFocus();
//        }
//    }, 500);
}

//function ImExUSBMsg(val) {
//    /***Station list export successfully finished.**/
//    try {
//        debugG("Export message is " + val);
//
//        var valStr = val.toLocaleString();
//
//        if (valStr.indexOf("successfully") > -1) {
//            debugG("message is success");
//            SettingChnlExportToUSBSuccess();
//        } else if (valStr.indexOf("fail") > -1) {
//            debugG("Msg is fail");
//            SettingChnlExportToUSBErr();
//        } else if (valStr.indexOf("progress") > -1) {
//            debugG("Msg in progress");
//            SettingChnlImportFromUSBErr();
//        }
//    } catch (ex) {
//        debugE(ex.message);
//    }
//}

function SettingChnlExportToUSBErr() {
    try {
        clearTimeout(expErrTimer);
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_dialog_text.Data = PageDataSettingChnlExportToUSB.operateData.textContentEnum.error;
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_cancel_btn.Data = PageDataSettingChnlExportToUSB.operateData.btnTextEnum.OK;
        hiWebOsFrame.SettingChnlExportToUSBPage.rewriteDataOnly();

        if ($("#setting_chnl_advanced_export_to_usb_dialog_img").length > 0) {
            $("#setting_chnl_advanced_export_to_usb_dialog_img").attr("class", "setting_chnl_advanced_export_to_usb_dialog_img_fail");
        }

        //复原
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_dialog_text.Data = PageDataSettingChnlExportToUSB.operateData.textContentEnum.wait;
        setTimeout(function () {
            if(null != hiWebOsFrame.SettingChnlExportToUSBPage){
                SettingChnlAbortExportToUSB();
            }
        }, 5000);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlExportToUSBSuccess() {
    try {
        clearTimeout(expErrTimer);
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_dialog_text.Data = PageDataSettingChnlExportToUSB.operateData.textContentEnum.success;
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_cancel_btn.Data = PageDataSettingChnlExportToUSB.operateData.btnTextEnum.OK;
        hiWebOsFrame.SettingChnlExportToUSBPage.rewriteDataOnly();

        if ($("#setting_chnl_advanced_export_to_usb_dialog_img").length > 0) {
            $("#setting_chnl_advanced_export_to_usb_dialog_img").attr("class", "setting_chnl_advanced_export_to_usb_dialog_img_success");
        }

        //复原
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_dialog_text.Data = PageDataSettingChnlExportToUSB.operateData.textContentEnum.wait;
        setTimeout(function () {
            if(null != hiWebOsFrame.SettingChnlExportToUSBPage){
                SettingChnlAbortExportToUSB();
            }
        }, 3000);
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingChnlExportToUSBProgress() {
    try {
        clearTimeout(expErrTimer);
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_dialog_text.Data = PageDataSettingChnlExportToUSB.operateData.textContentEnum.wait;
        PageDataSettingChnlExportToUSB.operateData.setting_chnl_advanced_export_to_usb_cancel_btn.Data = PageDataSettingChnlExportToUSB.operateData.btnTextEnum.Cancel;
        hiWebOsFrame.SettingChnlExportToUSBPage.rewriteDataOnly();
        if ($("#setting_chnl_advanced_export_to_usb_dialog_img").length > 0) {
            $("#setting_chnl_advanced_export_to_usb_dialog_img").attr("class", "setting_chnl_advanced_export_to_usb_dialog_img");
        }
    } catch (ex) {
        debugE(ex.message);
    }
}