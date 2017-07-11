
//该页面没有使用到，稍后删掉
//页面数据
var newRecordTipDialogPageData = {
    "newRecordTipTitle": {
        "Data": "A new Record!"
    },
    "channelInfo": {
        "Data": "101 ShanDongTV"
    },
    "pragramInfo": {
        "Data": "ShanDongNews"
    },
    "period": {
        "Data": "Weekly"
    },
    "scheduleTime": {
        "Data": "26 Mar. 13:00-14:30"
    },
    "beginNewRecord": {
        "Data": "Begin New Record"
    },
    "cancelNewRecord": {
        "Data": "Cancel New Record"
    },
    "operateData": {
        "channelInfo": {Data: "101 ShanDongTV"},
        "pragramInfo": {Data: "ShanDongNews"},
        "period": {Data: "Weekly"},
        "scheduleTime": {Data: "26 Mar. 13:00-14:30"},
        "exitTimer": null
    },
    "langData": {},
    "rewrite": "rewriteNewRecordTipDialogPageData"
};
//获取页面数据
var getNewRecordTipDialogPageData = function (page) {
    page.CaE = [
        {
            "id": "newRecordTipTitle",
            "description": "提示内容",
            "CaEType": "div"
        },
        {
            "id": "channelInfo",
            "description": "频道信息",
            "CaEType": "div"
        },
        {
            "id": "pragramInfo",
            "description": "节目信息",
            "CaEType": "div"
        },
        {
            "id": "period",
            "description": "重复周期",
            "CaEType": "div"
        },
        {
            "id": "scheduleTime",
            "description": "预约时间",
            "CaEType": "div"
        },
        {
            "id": "beginNewRecord",
            "description": "开始新的录制按钮",
            "classes": {
                "normal": "beginNewRecordBtnNormal",
                "focus": "beginNewRecordBtnFocus",
                "disable": "beginNewRecordBtnNormal",
                "selected": "beginNewRecordBtnFocus"
            },
            "nav": {
                "rightTo": "cancelNewRecord"
            },
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "beginNewRecordHandler"
            }
        },
        {
            "id": "cancelNewRecord",
            "description": "取消新的录制按钮",
            "classes": {
                "normal": "cancelNewRecordBtnNormal",
                "focus": "cancelNewRecordBtnFocus",
                "disable": "cancelNewRecordBtnNormal",
                "selected": "cancelNewRecordBtnFocus"
            },
            "nav": {
                "leftTo": "beginNewRecord"
            },
            "CaEType": "div",
            "handler": {
                "aftEnterHandler": "cancelNewRecordHandler"
            }
        }
    ];
    return newRecordTipDialogPageData;
};
//重写页面数据
function rewriteNewRecordTipDialogPageData(pageData) {
    try {
        var opData = pageData.operateData;
        pageData.channelInfo.Data = opData.channelInfo.Data;
        pageData.pragramInfo.Data = opData.pragramInfo.Data;
        pageData.scheduleTime.Data = opData.scheduleTime.Data;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//打开页面时定时15秒，15秒关闭
function newRecordTipDialogOnOpen() {
    try {
        newRecordTipDialogPageData.operateData.exitTimer = setTimeout(function () {
            exitNewRecordTipDialog();
            //用户不操作自动开始录制
            DBG_INFO("pauseHBBTV() before start record");
            pauseHBBTV();
            model.pvr.StartRecord();
        }, 15 * 1000);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//响应开始新的录制按钮
function beginNewRecordHandler() {
    try {
        hiWebOsFrame.beginNewRecord.close();
        hiWebOsFrame.createPage("pvrFinishDialog", null, null, null, function (page) {
            DBG_INFO('stop record tip!');
            hiWebOsFrame.pvrfinishDialog = page;
            hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTip.Data = 'Record has finish!';
            hiWebOsFrame.pvrfinishDialog.rewriteDataOnly();
            hiWebOsFrame.pvrfinishDialog.open();
        });
        setTimeout(function () {
            //如果当前source不是tv，需要切source
            if (0 != model.source.getCurrentSource()) {
                model.source.InputSet(0);
            }
            liveTVHandlerProcess(VK_ENTER);
        });
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//响应取消新的录制按钮
function cancelNewRecordHandler() {
    try {
        exitNewRecordTipDialog();
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//关闭页面
function newRecordTipDialogOnClose() {
    try {
        clearTimeout(newRecordTipDialogPageData.operateData.exitTimer);
        newRecordTipDialogPageData.operateData.exitTimer = null;
        DBG_INFO("close timer: " + newRecordTipDialogPageData.operateData.exitTimer);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//销毁页面
function newRecordTipDialogOnDestory() {
    try {
        hiWebOsFrame.newRecordTipDialog.close();
        hiWebOsFrame.newRecordTipDialog = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//退出页面
function exitNewRecordTipDialog() {
    try {
        hiWebOsFrame.newRecordTipDialog.destroy();
        clearTimeout(newRecordTipDialogPageData.operateData.exitTimer);
        newRecordTipDialogPageData.operateData.exitTimer = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}