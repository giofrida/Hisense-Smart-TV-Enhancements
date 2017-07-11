/**
 * Created by summer on 2015/1/26.
 */
//standby record页面数据
var standbyRecordPageData = {
    "standbyRecordTip": {
        "Data": "是否启动待机录制？"
    },
    "standbyRecordSave": {
        "Data": "Save"
    },
    "standbyRecordCancel": {
        "Data": "Cancel"
    },
    "operateData": {},
    "langData": {},
    rewrite: "rewriteStandbyRecordDialogPageData"
};
//获取standby record页面数据
var getStandbyRecordPageData = function (page) {
    page.CaE = [
        {
            "id": "standbyRecordTip",
            "description": "提示内容",
            "CaEType": "div"
        },
        {
            "id": "standbyRecordSave",
            "description": "保存按钮",
            "classes": {
                "normal": "standbyRecordBtnNormal",
                "focus": "standbyRecordBtnFocus",
                "disable": "standbyRecordBtnDisable",
                "selected": "standbyRecordBtnSelected"
            },
            "nav": {
                "rightTo": "standbyRecordCancel"
            },
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "standbyRecordSaveHandler"
            }
        },
        {
            "id": "standbyRecordCancel",
            "description": "取消按钮",
            "classes": {
                "normal": "standbyRecordBtnNormal",
                "focus": "standbyRecordBtnFocus",
                "disable": "standbyRecordBtnDisable",
                "selected": "standbyRecordBtnSelected"
            },
            "nav": {
                "leftTo": "standbyRecordSave"
            },
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "standbyRecordCancelHandler"
            }
        }
    ];
    return standbyRecordPageData;
};
function rewriteStandbyRecordDialogPageData(data) {
}
//按下save button后进行待机录制
function standbyRecordSaveHandler() {
    try {
        if (!!tv) {
            try {
                model.pvr.ScreenOffRecord();//待机录制
            }
            catch (ex) {
                DBG_INFO("[standbyRecordPage]screen off record error:" + ex, DebugLevel.ERROR);
            }
            if (!!pvrData.operateData.exittimeout) {
                clearTimeout(pvrData.operateData.exittimeout);
                pvrData.operateData.exittimeout = null;
            }
            exitPVR();
        }
        else {
            if (!!pvrData.operateData.exittimeout) {
                clearTimeout(pvrData.operateData.exittimeout);
                pvrData.operateData.exittimeout = null;
            }
            exitPVR();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//按下cancel button后正常待机
function standbyRecordCancelHandler() {
    try {
        //退出节目录制
        exitPVR();
        //关闭待机录制提示框页面
        hiWebOsFrame.standbyRecordDialogPage.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
//响应ESC按键退出函数
function exitStandbyRecordDiglog() {
    try {
        DBG_INFO("[standbyRecordPage]exit standbyRecord!");
        hiWebOsFrame.standbyRecordDialogPage.destroy();
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}