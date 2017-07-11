/**
 * Created by Administrator on 2015-3-29.
 */
var pvrHDSpeedCheckResultPageData = {

    "pvrtshift_usb_speed_check_result_text": {Data: ""},
    "pvrtshift_usb_speed_check_result_content": {Data: ""},
    "pvrtshift_usb_speed_check_result_btn1": {Data: ""},
    "operateData": {
        "dataList": [
            {
                "title": "HDD speed detecting",
                "content": "HDD speed detecting is successful",
                "button": "Done"
            },
            {
                "title": "HDD speed detecting",
                "content": "HDD speed detecting fails",
                "button": "Done"
            },
            {
                "title": "HDD settings",
                "content": "HDD is unavailable",
                "button": "Done"
            }
        ],
        "curListIndex": 0
    },

    "langData": {
        "HDD speed detecting": [],
        "HDD speed detecting is successful": [],
        "HDD speed detecting fails": [],
        "HDD settings": [],
        "HDD is unavailable": [],
        "Done": []
    },

    rewrite: function (pageData) {
        try {
            var opData = pageData.operateData;
            DBG_INFO("opData.curListIndex " + opData.curListIndex);
            pageData.pvrtshift_usb_speed_check_result_text.Data = opData.dataList[opData.curListIndex].title;
            pageData.pvrtshift_usb_speed_check_result_content.Data = opData.dataList[opData.curListIndex].content;
            pageData.pvrtshift_usb_speed_check_result_btn1.Data = opData.dataList[opData.curListIndex].button;

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
};
function getPvrHDSpeedCheckResultPageData(opt) {
    opt.CaE = [
        {
            "id": "pvrtshift_usb_speed_check_result_text",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "pvrtshift_usb_speed_check_result_content",
            "description": "提示内容",
            "CaEType": "div"
        },
        {
            "id": "pvrtshift_usb_speed_check_result_btn1",
            "description": "ok",
            "classes": {
                "normal": "setting_sys_button1_normal", "focus": "setting_sys_button1_focus"
            },
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': "pvrHDSpeedCheckBtnHandler",
                'aftEscHandler': "pvrHDSpeedCheckBtnHandler"
            }
        }
    ];
    return pvrHDSpeedCheckResultPageData;
}

function pvrHDSpeedCheckBtnHandler() {
    try {
        DBG_INFO('pvrHDSpeedCheckBtnHandler: + curListIndex: ' + this.page.operateData.curListIndex);
        //0 ok;1 speed not ok;2 uuid not exist --summer
        if (0 == this.page.operateData.curListIndex) {
            hiWebOsFrame.pvrHDSpeedCheckResult.destroy();
            pvrHDListPageData.operateData.curtitle = 0;
            pvrHDListPageData.operateData.curstep = 0;
            pvrHDListPageData.operateData.curselectpartition = 0;

            //todo ghl; if epg -> open pvr reminder

            if (!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible) {
                DBG_INFO('!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible');
                openBookEditPage(pvrHardDiskCheckPageData.operateData.tmpEpgVal.channel, pvrHardDiskCheckPageData.operateData.tmpEpgVal.tmpProgrameInfoReminder, false, false, BookType.RECORD, hiWebOsFrame.epg);
                return;
            } else if (pvrHardDiskCheckPageData.operateData.tmpEpgVal && pvrHardDiskCheckPageData.operateData.tmpEpgVal.starter == 'epg_or_livetv') {
                DBG_INFO("pvrHardDiskCheckPageData.operateData.tmpEpgVal.starter == 'epg_or_livetv'");
                pvrHardDiskCheckPageData.operateData.tmpEpgVal.starter = null;

                openBookEditPage(pvrHardDiskCheckPageData.operateData.tmpEpgVal.channel, pvrHardDiskCheckPageData.operateData.tmpEpgVal.tmpProgrameInfoReminder, false, false, BookType.RECORD, 'livetv_main');
                return;
            }

            //若当前是预约录制，检测完速度之后直接打开录制页面；不是则打开预约设置界面
            if (isScheduleRecord) {
                sendRecordCommand();
            }
            else {
                openRemindRecordSettingPage();
            }
            DBG_INFO("HD speed test and start pvr finish!");
        }
        else if (1 == this.page.operateData.curListIndex) {
            hiWebOsFrame.pvrHDSpeedCheckResult.destroy();
            pvrHDListPageData.operateData.curtitle = 0;
            pvrHDListPageData.operateData.curstep = 0;
            pvrHDListPageData.operateData.curselectpartition = 0;
            hiWebOsFrame.createPage("pvrHDList", null, null, null, function (page) {
                hiWebOsFrame.pvrHDList = page;
                hiWebOsFrame.pvrHDList.open();
                hiWebOsFrame.pvrHDList.rewriteDataOnly();
                hiWebOsFrame.pvrHDList.hiFocus();
            });
        }
        else if (2 == this.page.operateData.curListIndex) {
            hiWebOsFrame.pvrHDSpeedCheckResult.destroy();
            pvrHDListPageData.operateData.curtitle = 0;
            pvrHDListPageData.operateData.curstep = 0;
            pvrHDListPageData.operateData.curselectpartition = 0;
            hiWebOsFrame.createPage("pvrHDList", null, null, null, function (page) {
                hiWebOsFrame.pvrHDList = page;
                hiWebOsFrame.pvrHDList.open();
                hiWebOsFrame.pvrHDList.rewriteDataOnly();
                hiWebOsFrame.pvrHDList.hiFocus();
            });
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function pvrHDSpeedCheckResultOnDestroy() {
    try {
        hiWebOsFrame.pvrHDSpeedCheckResult.close();
        hiWebOsFrame.pvrHDSpeedCheckResult = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}