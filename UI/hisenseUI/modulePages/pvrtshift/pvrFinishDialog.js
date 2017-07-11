/**
 * Created by hicom on 14-7-9.
 * modified on 2015-1-27
 */
var PFDiglogPageData = {
    "recordDialogTipName": {
        "Data": "Name."
    },
    "recordDialogTip": {
        "Data": ""
    },
    "recordDialogTipImgPic": {
        "Data": "img/pvr/pvrStop.png"
    },
    "operateData": {
        closeLiveTVPasswordFirst: null,
        "imgList": [
            "img/pvr/pvrStop.png",
            "img/pvr/pvrFinish.png"
        ],
        "recordDialogTipName": {
            "Data": ""
        },
        "recordDialogTip": {
            "Data": "Record is finished."
        },
        "recordDialogTipImgPic": {
            "Data": "img/pvr/pvrStop.png"
        },
        "langIndex": 0
    },
    "langData": {
        "Record is finished.": [],
        "Start recording!": [],
        "Recording has ended!": [],
        "Disk no space!": []
    },
    rewrite: "PFDiglogPageDataRewrites"
};
function getPFDialogPageData(page) {
    page.CaE = [
        {
            "id": "recordDialogTip",
            "description": "提示内容",
            "CaEType": "span",
            "classes": {
                "normal": "recordDialogTipNormal",
                "focus": "recordDialogTipNormal",
                "disable": "recordDialogTipNormal",
                "selected": "recordDialogTipNormal"
            }
        },
        {
            "id": "recordDialogTipImgPic",
            "description": "pic",
            "CaEType": "img"
        },
        {
            "id": "recordDialogTipName",
            "description": "pic",
            "CaEType": "span"
        }
    ];

    return PFDiglogPageData;
}
//重写页面数据，以刷新页面数据
function PFDiglogPageDataRewrites(data) {
    try {
        var opeData = data.operateData;
        DBG_INFO('pvrfinish data:' + JSON.stringify(opeData));
        data.recordDialogTip.Data = getCurrentContentLanguage(opeData.recordDialogTip.Data);
        data.recordDialogTipImgPic.Data = opeData.recordDialogTipImgPic.Data;
        data.recordDialogTipName.Data = opeData.recordDialogTipName.Data;
    }
    catch (ex) {
        DBG_INFO(ex.message);
    }
}
//打开pvr finish dialog页面后的回调函数
function pvrFinishDialogOnOpen() {
    try {
        hiWebOsFrame.lockAllKeys();
        setTimeout(function () {
            if (true == hiWebOsFrame.pvrfinishDialog.operateData.closeLiveTVPasswordFirst) {
                hiWebOsFrame.pvrfinishDialog.operateData.closeLiveTVPasswordFirst = null;
                DBG_INFO('closeLiveTVPasswordFirst true-> null, openLiveTVModule()');
                openLiveTVModule();
            }
            hiWebOsFrame.pvrfinishDialog.destroy();
        }, 2000);
        DBG_INFO('PFDiglogPageData.operateData.closeLiveTVPasswordFirst: ' + PFDiglogPageData.operateData.closeLiveTVPasswordFirst);
        DBG_INFO('curpage:' + hiWebOsFrame.getCurrentPageId());
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//关闭pvr finish dialog页面后的回掉函数
function pvrFinishDialogOnClose() {
    try {
        DBG_INFO('PFDialogPageDataClose:------------------');
        //所有按键解锁
        hiWebOsFrame.unLockAllKeys("lockSign41");
        //没有录制的情况下，不需要停止pvr；有录制的情况下，则停止pvr
        DBG_INFO("noNeedStopRecord=" + isNoNeedStopRecord);
        if (isNoNeedStopRecord) {
            isNoNeedStopRecord = false;
        }
        else {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//销毁pvr finish dialog页面后的回掉函数
function pvrFinishDialogOnDestory() {
    try {
        DBG_INFO('pvrFinishExit');
        hiWebOsFrame.pvrfinishDialog = null;
        DBG_INFO('PFDialogPageDataDestory:------------------');
        //所有按键解锁
        hiWebOsFrame.unLockAllKeys("lockSign42");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
