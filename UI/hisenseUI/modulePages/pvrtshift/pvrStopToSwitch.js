/**
 * Created by Hisense on 2015-3-4.
 */
    //该页面没有使用到
var pvrStopToSwitchDialogPageData = {
    "pvrStopToSwitchTip": {
        "Data": "Sure to stop recording to do other things?"
    },
    "pvrStopToSwitchOK": {
        "Data": "OK"
    },
    "pvrStopToSwitchCancel": {
        "Data": "Cancel"
    },
    "operateData": {
        "langIndex": 0,
        "pvrStopToSwitchTip": {Data: ""},
        "channelUidList": []
    },
    "langData": {
        "OK": [],
        "Cancel": []
    },
    rewrite: "rewritepvrStopToSwitchDialogPageData"
};
function getPvrStopToSwitchPageData(page) {
    page.CaE = [
        {
            "id": "pvrStopToSwitchTip",
            "description": "提示内容",
            "CaEType": "div"
        },
        {
            "id": "pvrStopToSwitchOK",
            "description": "确定按钮",
            "classes": {
                "normal": "rBtnNormal", "focus": "rBtnFocus", "disable": "rBtnDisable", "selected": "rBtnSelected"
            },
            "nav": {
                "rightTo": "pvrStopToSwitchCancel"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': 'pvrStopToSwitchOKHandler'//点击enter事件后处理开关转换
            }
        },
        {
            "id": "pvrStopToSwitchCancel",
            "description": "取消按钮",
            "classes": {
                "normal": "rBtnNormal", "focus": "rBtnFocus", "disable": "rBtnDisable", "selected": "rBtnSelected"
            },
            "nav": {
                "leftTo": "pvrStopToSwitchOK"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': 'pvrStopToSwitchCancelHandler'
            }
        }
    ];
    return pvrStopToSwitchDialogPageData;
}
//重写页面数据
function rewritepvrStopToSwitchDialogPageData() {
}
//响应ok按钮
function pvrStopToSwitchOKHandler() {
    try {
        //TODO 用户选择ok，停止录制做其它事情
        //isPvrStopToSwitch = false;
        DBG_ALWAYS("model.pvr.StopRecord()");
        model.pvr.StopRecord();
        //isPvrStopToSwitch = true;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//响应cancel按键
function pvrStopToSwitchCancelHandler() {
    try {
        exitpvrStopToSwitchDialog();
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//退出提示用户切换对话框
function exitpvrStopToSwitchDialog() {
    try {
        DBG_INFO('exit pvrStopToSwitchDialog!');
        hiWebOsFrame.pvrStopToSwitchDialog.destroy();
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//销毁提示用户切换对话框
function pvrStopToSwitchDialogDestroy() {
    try {
        if (hiWebOsFrame.pvrStopToSwitchDialog != null) {
            hiWebOsFrame.pvrStopToSwitchDialog = null;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

