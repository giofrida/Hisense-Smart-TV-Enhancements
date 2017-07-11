/**
 * Created by hisense on 2015/4/3.
 */
var pvrRecordTipPageData = {
    "pvrRecordTipTitle": {
        "Data": "Start recording!"
    },
    "pvrRecordTipChannelInfo": {
        "Data": ""
    },
    "pvrRecordTipPragramInfo": {
        "Data": ""
    },
    "operateData": {
        "pvrRecordTipTitle": {Data: "Start recording!"},
        "pvrRecordTipChannelInfo": {},
        "pvrRecordTipPragramInfo": {},
        "exitTimer": null
    },
    "langData": {
        "Start recording!": []
    },
    "rewrite": "rewritePvrRecordTipPageData"
};
var getPvrRecordTipPageData = function (page) {
    page.CaE = [
        {
            "id": "pvrRecordTipTitle",
            "description": "提示内容",
            "CaEType": "div",
            "classes": {
                "normal": "pvrRecordTipTitle", "focus": "pvrRecordTipTitle"
            }
        },
        {
            "id": "pvrRecordTipChannelInfo",
            "description": "频道信息",
            "CaEType": "div"
        },
        {
            "id": "pvrRecordTipPragramInfo",
            "description": "节目信息",
            "CaEType": "div"
        }
    ];
    return pvrRecordTipPageData;
}
function pvrRecordTipOnOpen() {
    try {
        hiWebOsFrame.lockAllKeys();
        pvrRecordTipPageData.operateData.exitTimer = setTimeout(function () {
            //hiWebOsFrame.pvrRecordTip.close();
            // hiWebOsFrame.pvrRecordTip.destroy();
            try {
                pvrRecordTipbackToTV();
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }
        }, 5 * 1000);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function pvrrecordTipcallback() {
    try {
        DBG_INFO("pvrrecordTipcallback");
        hiWebOsFrame.lockAllKeys();
        hiWebOsFrame.blankPage.operateData.callBackFunc = null;
        if (!!hiWebOsFrame.pvrRecordTip) {
            //DBG_INFO("5555555555555555555");
            hiWebOsFrame.pvrRecordTip.close();
            hiWebOsFrame.pvrRecordTip.destroy();
        }
        //DBG_INFO("3333333333333333333333333333333333");
        var crntSrc = livetvmain.getCurrentSource();
        if (crntSrc.innerId != SourceList.TV) {
            model.source.InputSet(0);
        }
        else {
            /*openLiveTVModule([Msg.INFO, 0]);
             hiWebOsFrame.unLockAllKeys();*/
            g_resumeDtvForRecord = true;
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function pvrRecordTipOnClose() {
}
function pvrRecordTipbackToTV() {
    try {
        //当前频道下，5秒钟之后会自动开始录制，此时需要以新的节目信息进行录制
        prgrmInfoOfPvrTshift = copyObj(prgrmInfoOfRecordTip);
        //当前频道下，5秒钟之后会自动开始录制，用新的节目的结束时间作为录制结束时间
        endTimeOfScheduleRecord = prgrmInfoOfPvrTshift.endTime;
        debugE("endTimeOfScheduleRecord=" + endTimeOfScheduleRecord);
        clearTimeout(pvrRecordTipPageData.operateData.exitTimer);
        pvrRecordTipPageData.operateData.exitTimer = null;
        DBG_INFO("unLock all keys on close!=====>" + pvrRecordTipPageData.operateData.exitTimer);
        hiWebOsFrame.unLockAllKeys("lockSign41");
        if (checkIsAppOn()) {
            hiWebOsFrame.blankPage.operateData.callBackFunc = pvrrecordTipcallback;
            checkAndCloseIfAppOn(hiWebOsFrame.blankPage);
            return;
        }
        else if (hiWebOsFrame.pvrRecordTip.origin.id == "pvrtshift_pvr_page") {
            hiWebOsFrame.pvrPage.close();
        }
        else if (hiWebOsFrame.pvrRecordTip.origin.id == "tshiftProgressPage_id") {
            hiWebOsFrame.tshiftProgressPage.close();
        }
        else {
            closePagesOrModuleByPage(hiWebOsFrame.pvrRecordTip.origin);
            tryToCloseLauncher();
            tryToCloseAllApps();
        }
        hiWebOsFrame.lockAllKeys();
        hiWebOsFrame.pvrRecordTip.close();
        hiWebOsFrame.pvrRecordTip.destroy();

        //若当前有录制或者时移的话停止时移
        if (isMainArchiveRecording()) {
            try {
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
                hiWebOsFrame.needOpenBlankPage = true;
                setAfterStopPvrWantDo(stopPvrOrTshiftCallBackOfTipPage.bind(this, 0));
                return;
            }
            catch (ex) {
                DBG_INFO("error: " + ex.message);
            }
        }
        if (isTimeShiftStatus()) {
            model.timeshift.Stop();
            setAfterStopTShiftWantDo(stopPvrOrTshiftCallBackOfTipPage.bind(this, 1));
            return;
        }
        //若source不是TV，切到TV
        var crntSrc = livetvmain.getCurrentSource();
        if (crntSrc.innerId != SourceList.TV) {
            model.source.InputSet(0);
        }
        else {
            openLiveTVModule([Msg.INFO, 0]);
            debugE("open livetv module!!!!!!!");
            hiWebOsFrame.unLockAllKeys();
            debugE("unlock all key!!!!!!!");
            g_resumeDtvForRecord = true;
            livetvchlist.changeChannelFromReminder.call(this, pvrRecordTipPageData.operateData.pvrRecordTipChannelInfo);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function pvrRecordTipOnDestroy() {
    try {
        hiWebOsFrame.pvrRecordTip = null;
        DBG_INFO("pvrRecordTipOnDestroy!");
        //hiWebOsFrame.unLockAllKeys("lockSign42");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function rewritePvrRecordTipPageData(page) {
    try {
        var opData = page.operateData;
        page.pvrRecordTipTitle.Data = getCurrentContentLanguage(opData.pvrRecordTipTitle.Data);
        page.pvrRecordTipChannelInfo.Data = opData.pvrRecordTipChannelInfo.channelNumber + "         " + getCurrentContentLanguage(opData.pvrRecordTipChannelInfo.channelName);
        page.pvrRecordTipPragramInfo.Data = getCurrentContentLanguage(opData.pvrRecordTipChannelInfo.title);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function stopPvrOrTshiftCallBackOfTipPage(flag) {
    try {
        DBG_ALWAYS("stopPvrOrTshiftCallBackOfTipPage" + flag);

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
            g_resumeDtvForRecord = true;
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}