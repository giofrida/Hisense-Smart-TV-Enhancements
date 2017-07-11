/**
 * Created by hisense on 2015/3/7.
 */
//页面数据
var beginRecordTipDialogPageData = {
    "beginRecordTipTitle": {
        "Data": "Booking Reminder"
    },
    "beginRecordChannelInfo": {
        "Data": "101 ShanDongTV"
    },
    "beginRecordPragramName": {
        "Data": "ShanDongNews"
    },
    "beginRecordPeriod": {
        "Data": ""
    },
    "beginRecordScheduleTime": {
        "Data": "26 Mar. 13:00-14:30"
    },
    "beginRecordBtn": {
        "Data": ""
    },
    "cancelRecordBtn": {
        "Data": ""
    },
    "operateData": {
        "pragramInfo": {},
        "period": {Data: "Weekly"},
        "scheduleTime": {Data: "26 Mar. 13:00-14:30"},
        "exitTimer": null,
        "beginRecordBtn": {Data: ""},
        "cancelRecordBtn": {Data: ""}
    },
    "langData": {
        "Booking Reminder": [],
        "Start recording": [],
        "Cancel recording": [],
        "Start a new recording": [],
        "Cancel a new recording": []
    },
    "rewrite": "rewriteBeginRecordTipDialogPageData"
};
//获取页面数据
var getBeginRecordDialogPageData = function (page) {
    page.CaE = [
        {
            "id": "beginRecordTipTitle",
            "description": "提示内容",
            "CaEType": "div"
        },
        {
            "id": "beginRecordChannelInfo",
            "description": "频道信息",
            "CaEType": "div"
        },
        {
            "id": "beginRecordPragramName",
            "description": "节目名称",
            "CaEType": "div"
        },
        {
            "id": "beginRecordPeriod",
            "description": "重复周期",
            "CaEType": "div"
        },
        {
            "id": "beginRecordScheduleTime",
            "description": "预约时间",
            "CaEType": "div"
        },
        {
            "id": "beginRecordBtn",
            "description": "开始新的录制按钮",
            "classes": {
                "normal": "beginRecordBtnNormal",
                "focus": "beginRecordBtnFocus",
                "disable": "beginRecordBtnNormal",
                "selected": "beginRecordBtnFocus"
            },
            "nav": {
                "rightTo": "cancelRecordBtn"
            },
            "CaEType": "div",
            "handler": {
                "befEnterHandler": "beginRecordHandler"
            }
        },
        {
            "id": "cancelRecordBtn",
            "description": "取消新的录制按钮",
            "classes": {
                "normal": "cancelRecordBtnNormal",
                "focus": "cancelRecordBtnFocus",
                "disable": "cancelRecordBtnNormal",
                "selected": "cancelRecordBtnFocus"
            },
            "nav": {
                "leftTo": "beginRecordBtn"
            },
            "CaEType": "div",
            "handler": {
                "befEnterHandler": "cancelRecordHandler"
            }
        }
    ];
    return beginRecordTipDialogPageData;
};
//重写页面数据
function rewriteBeginRecordTipDialogPageData(pageData) {
    try {
        var opData = pageData.operateData;
        pageData.beginRecordChannelInfo.Data = opData.pragramInfo.channelNumber + "  " + getCurrentContentLanguage(opData.pragramInfo.channelName);
        DBG_INFO("chlNum=" + opData.pragramInfo.channelNumber + "chalName=" + opData.pragramInfo.channelName);
        DBG_INFO("pageData.beginRecordChannelInfo" + pageData.beginRecordChannelInfo.Data);
        pageData.beginRecordPragramName.Data = getCurrentContentLanguage(opData.pragramInfo.title);
        pageData.beginRecordScheduleTime.Data = UTCToLocalDate(opData.pragramInfo.startTime) +
            UTCToLocalTime(opData.pragramInfo.startTime, 1) + '-' +
            UTCToLocalTime(opData.pragramInfo.endTime, 1);
        var period = "";
        switch (parseInt(opData.pragramInfo.period)) {
            case 7:
                period = "Once";
                break;
            case 8:
                period = "Everyday";
                break;
            default :
                period = "Weekly";
                break;
        }
        pageData.beginRecordPeriod.Data = getCurrentContentLanguage(period);
        pageData.beginRecordBtn.Data = getCurrentContentLanguage(opData.beginRecordBtn.Data);
        pageData.cancelRecordBtn.Data = getCurrentContentLanguage(opData.cancelRecordBtn.Data);
        if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".beginRecordPeriod").css(" text-align", "right");
        } else {
            $(".beginRecordPeriod").css(" text-align", "left");

        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//打开页面时定时5秒，5秒关闭
function beginRecordDialogOnOpen() {
    try {
        DBG_INFO("begin record dialog open!");
        beginRecordTipDialogPageData.operateData.exitTimer = setTimeout(function () {
            beginRecordHandler();
        }, 10 * 1000);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//响应开始新的录制按钮
function beginRecordcallback() {
    try {

        DBG_INFO("in the beginRecordcallback");
        hiWebOsFrame.lockAllKeys();
        hiWebOsFrame.blankPage.operateData.callBackFunc = null;
        // setWindowSizeLater(0, 0, 1920, 1080);
        if (!!hiWebOsFrame.PvrstartDialog) {
            hiWebOsFrame.PvrstartDialog.close();
            hiWebOsFrame.PvrstartDialog.destroy();
        }
        //若source不是TV，切到TV
        var crntSrc = livetvmain.getCurrentSource();
        if (crntSrc.innerId != SourceList.TV) {
            model.source.InputSet(0);
        }
        else {
            openLiveTVModule([Msg.INFO, 0]);
            hiWebOsFrame.unLockAllKeys();
            //若不是当前频道，换台;若是当前频道，等待播放成功后起录制
            if (!isCurrentChannelOfSchedule) {
                DBG_INFO("schedule record channel is not current channel!");
                livetvchlist.changeChannelFromReminder.call(this, beginRecordTipDialogPageData.operateData.pragramInfo);
            }
            else {
                g_resumeDtvForRecord = true;//从App下回到live会resume DTV，不需要再执行换台动作
            }
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function beginRecordHandler() {
    try {
        DBG_INFO("in the record handler!");
        //点击开始录制按钮，用新的节目信息开始录制，录制界面显示新的节目信息
        prgrmInfoOfPvrTshift = copyObj(prgrmInfoOfRecordTip);
        //点击开始录制按钮，用新的节目的结束时间作为录制结束时间
        endTimeOfScheduleRecord = prgrmInfoOfPvrTshift.endTime;
        DBG_INFO("endTimeOfScheduleRecord=" + endTimeOfScheduleRecord);
        try {
            if (checkIsAppOn()) {
                hiWebOsFrame.blankPage.operateData.callBackFunc = beginRecordcallback;
                checkAndCloseIfAppOn(hiWebOsFrame.blankPage);
                return;
            }
            else if (hiWebOsFrame.PvrstartDialog.origin.id == "pvrtshift_pvr_page") {
                hiWebOsFrame.pvrPage.close();
            }
            else if (hiWebOsFrame.PvrstartDialog.origin.id == "tshiftProgressPage_id") {
                hiWebOsFrame.tshiftProgressPage.close();
            }
            else {
                closePagesOrModuleByPage(hiWebOsFrame.PvrstartDialog.origin);
                tryToCloseLauncher();
                tryToCloseAllApps();
            }
            hiWebOsFrame.lockAllKeys();
            setWindowSizeLater(0, 0, 1920, 1080);
            hiWebOsFrame.PvrstartDialog.close();
            hiWebOsFrame.PvrstartDialog.destroy();

            if (isMainArchiveRecording()) {
                try {
                    DBG_ALWAYS("model.pvr.StopRecord()");
                    model.pvr.StopRecord();
                    hiWebOsFrame.needOpenBlankPage = true;
                    setAfterStopPvrWantDo(stopPvrOrTshiftCallBack.bind(this, 0));
                    return;
                }
                catch (ex) {
                    DBG_INFO(ex.message);
                }
            }
            if (isTimeShiftStatus()) {
                model.timeshift.Stop();
                setAfterStopTShiftWantDo(stopPvrOrTshiftCallBack.bind(this, 1));
                return;
            }
            //若source不是TV，切到TV
            var crntSrc = livetvmain.getCurrentSource();
            if (crntSrc.innerId != SourceList.TV) {
                model.source.InputSet(0);
            }
            else {
                openLiveTVModule([Msg.INFO, 0]);
                hiWebOsFrame.unLockAllKeys();
                //若不是当前频道，换台；若是当前频道，为了待机录制能够成功，也需要切一下台
                if (!isCurrentChannelOfSchedule) {
                    DBG_INFO("schedule record channel is not current channel!");
                }
                else {
                    DBG_INFO("schedule record channel is current channel!");
                    //当节目播放成功后，走changeChannelToStartRecord函数的判断g_resumeDtvForRecord分支
                    g_resumeDtvForRecord = true;
                }
                livetvchlist.changeChannelFromReminder.call(this, beginRecordTipDialogPageData.operateData.pragramInfo);
            }
        }
        catch (ex) {
            DBG_INFO(ex.message);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
//响应取消新的录制按钮
function cancelRecordHandler() {
    try {
        DBG_INFO("in the  cancelRecordHandler");
        DBG_INFO("endTimeOfScheduleRecord=" + endTimeOfScheduleRecord);

        prgrmInfoOfRecordTip = null;
        isScheduleRecord = false;
        hiWebOsFrame.PvrstartDialog.close();
        StartPVRDialogDestroyCallback(hiWebOsFrame.PvrstartDialog.origin);
        hiWebOsFrame.PvrstartDialog.destroy();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//关闭页面
function beginRecordDialogOnClose() {
    try {
        if (beginRecordTipDialogPageData.operateData.exitTimer) {
            clearTimeout(beginRecordTipDialogPageData.operateData.exitTimer);
            beginRecordTipDialogPageData.operateData.exitTimer = null;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
//销毁页面
function beginRecordDialogOnDestory() {
    try {
        hiWebOsFrame.PvrstartDialog.close();
        hiWebOsFrame.PvrstartDialog = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * 当前有录制或者时移时，录制（时移）完全停止后执行的函数
 * */
function stopPvrOrTshiftCallBack(flag) {
    try {
        DBG_INFO("stopPvrOrTshiftCallBack=" + flag);
        isScheduleRecord = true;
        DBG_INFO("isScheduleRecord?=" + isScheduleRecord);
        if (flag == 0) {
            g_AfterStopPvrWantDo = null;
        }
        else if (flag == 1) {
            g_AfterStopTShiftWantDo = null;
        }
        //若source不是TV，切到TV
        var crntSrc = livetvmain.getCurrentSource();
        if (crntSrc.innerId != SourceList.TV) {
            model.source.InputSet(0);
        }
        else {
            openLiveTVModule([Msg.INFO, 0]);
            hiWebOsFrame.unLockAllKeys();
            //若不是当前频道，换台
            if (!isCurrentChannelOfSchedule) {
                DBG_INFO("schedule record channel is not current channel!");
                livetvchlist.changeChannelFromReminder.call(this, beginRecordTipDialogPageData.operateData.pragramInfo);
            }
            else {
                DBG_INFO("schedule record channel is current channel!");
                g_resumeDtvForRecord = true;
                //若是停止上次录制再起预约录制，需要切一下台，不切台的话走不到changeChannelToStartRecord函数
                if (flag == 0) {
                    livetvchlist.changeChannelFromReminder.call(this, beginRecordTipDialogPageData.operateData.pragramInfo);
                }
            }
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
