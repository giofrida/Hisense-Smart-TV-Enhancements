/**
 * Created by Hisense on 2015-2-12.
 */
var PTShowDialogPageData = {
    "pvrTshiftTip": {
        "Data": ""
    },
    "pvrTshiftOK": {
        "Data": "OK"
    },
    "pvrTshiftCancel": {
        "Data": "Cancel"
    },
    "operateData": {
        "pvrTshiftTip": {Data: "Are you sure you want to stop recording and start time shifting?"}
    },
    "langData": {
        "Are you sure you want to stop recording and start time shifting?": [],
        "Are you sure you want to stop time shifting and start recording?": [],
        "OK": [],
        "Cancel": []
    },
    rewrite: "rewritePTShowDialogPageData"
};
function getPTShowDialogPageData(page) {
    page.CaE = [
        {
            "id": "pvrTshiftTip",
            "description": "提示内容",
            "CaEType": "div"
        },
        {
            "id": "pvrTshiftOK",
            "description": "确定按钮",
            "classes": {
                "normal": "rBtnNormal", "focus": "rBtnFocus", "disable": "rBtnDisable", "selected": "rBtnSelected"
            },
            "nav": {
                "rightTo": "pvrTshiftCancel"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': 'pvrTshiftOKHandler'//点击enter事件后处理开关转换
            }
        },
        {
            "id": "pvrTshiftCancel",
            "description": "取消按钮",
            "classes": {
                "normal": "rBtnNormal", "focus": "rBtnFocus", "disable": "rBtnDisable", "selected": "rBtnSelected"
            },
            "nav": {
                "leftTo": "pvrTshiftOK"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': 'pvrTshiftCancelHandler'
            }
        }
    ];
    return PTShowDialogPageData;
}
//重写页面数据
function rewritePTShowDialogPageData(pageData) {
    try {
        var opData = pageData.operateData;
        pageData.pvrTshiftTip.Data = opData.pvrTshiftTip.Data;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
//响应ok按钮
function pvrTshiftOKHandler() {
    try {
        switch (hiWebOsFrame.ptShowDialog.operateData.flag) {
            case 1:
                DBG_INFO("tshift switch to pvr!");
                exitPTShowDiglog();
                setTimeout(stopTShiftToPvr, 100);
                break;
            case 2:
                DBG_INFO('pvr switch to tshift!');
                exitPTShowDiglog();
                setTimeout(stopPvrToTShift, 100);
                break;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function stopTShiftToPvr() {
    try {
        DBG_INFO('UI call Stop !!!!!!!!!!');
        model.timeshift.Stop();
        setAfterStopTShiftWantDo(stopTshiftToPvrCallBack);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function stopPvrToTShift() {
    try {
        DBG_INFO('UI call Stop !!!!!!!!!!');
        DBG_ALWAYS("model.pvr.StopRecord()");
        model.pvr.StopRecord();
        setAfterStopPvrWantDo(stopPvrToTShiftCallBack);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function stopPvrToTShiftCallBack() {
    try {
        g_AfterStopPvrWantDo = null;
        startTShiftPageFromMain();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function stopTshiftToPvrCallBack() {
    try {
        g_AfterStopTShiftWantDo = null;
        isTshiftToPvr = true;
        /*var crntChannel = livetvmain.getCurrentChannelInfo();
         DBG_INFO("crntChannel: " + JSON.stringify(crntChannel));
         livetvinfobar.getCurrentProgramInfo(getProgramInfoForPvrCallBack.bind(this, crntChannel));*/
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//响应取消按键
function pvrTshiftCancelHandler() {
    try {
        exitPTShowDiglog();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//退出pvr tshift切换对话框
function exitPTShowDiglog() {
    try {
        DBG_INFO('exit ptShowDiglog!');
        hiWebOsFrame.ptShowDialog.destroy();
        openLiveTVModule([Msg.INFO, 0]);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//销毁pvr tshift切换对话框
function PTShowDialogDestroy() {
    try {
        hiWebOsFrame.ptShowDialog = null;

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
/*
 * 时移转到pvr时获取节目信息
 * */
function getProgramInfoForPvrCallBack(crntChannel, result) {
    
    try {
        DBG_ALWAYS("to get current program info!");

        //将节目所在的频道号，频道名称，节目名称，节目的开始时间，结束时间保存在program对象中
        var program = {
            startTime: !!result[0] ? parseInt(result[0]) : 0,
            endTime: !!result[1] ? parseInt(result[1]) : 0,
            title: !!result[3] ? result[3] : "No program",
            detail: !!result[4] ? result[4] : "No program information"
        };
        program.channelNumber = crntChannel.number;
        program.channelName = crntChannel.name;
        program.channelUid = crntChannel.uid;
        program.listUid = crntChannel.listUid;
        program.playId = crntChannel.playId;

        DBG_ALWAYS("current program: " + JSON.stringify(program));
        prgrmInfoOfPvrTshift = copyObj(program);
        model.tvservice.playChannel(prgrmInfoOfPvrTshift.playId, prgrmInfoOfPvrTshift.channelUid, prgrmInfoOfPvrTshift.listUid, 0);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
