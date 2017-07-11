/**
 * Created by BOB.J on 2015/3/31.
 */

function getDialogReminderData(opts) {
    var caeData = {
        span: [
            "dialog_reminder_ok", "dialog_reminder_cancel", "dialog_reminder_title",
            "reminder_chnl_name", "reminder_prgrm_name",
            "reminder_repeat_mode", "reminder_prgrm_time"
        ]
    };
    opts.CaE = generateCaE(caeData);
    opts.CaE[0].handler = {
        befEnterHandler: dlgReminder.watchReminder,
        befRightHandler: dlgReminder.setAutoCloseTimer
    }
    opts.CaE[0].nav = {
        rightTo: "dialog_reminder_cancel"
    }
    opts.CaE[1].nav = {
        leftTo: "dialog_reminder_ok"
    }
    opts.CaE[1].handler = {
        befEnterHandler: dlgReminder.cancelReminder,
        befLeftHandler: dlgReminder.setAutoCloseTimer
    }
    return dlgReminder.pageData;
}

var dialogReminder = function() {
    var self = this;
    self.id = "dialog_reminder";
    self.pageData = {
        dialog_reminder_title: {Data: ""},
        reminder_chnl_name: {Data: ""},
        reminder_prgrm_name: {Data: ""},
        reminder_repeat_mode: {Data: ""},
        reminder_prgrm_time: {Data: ""},
        dialog_reminder_ok: {Data: "Watch"},
        dialog_reminder_cancel: {Data: "Cancel"},
        langData: {
            "Booking Reminder": [],
            "Watch": [],
            "Cancel": [],
            "Everyday": [],
            "Once": [],
            "Weekly": []
        },
        rewrite: rewritePageData
    }

    var oprtData = {
        program: {}
    };
    var autoClosetimer = 0;
    self.pageData.operateData = oprtData;

    function rewritePageData(pageData) {
        var prgrm = oprtData.program;
        pageData.dialog_reminder_title.Data = "Booking Reminder";
        pageData.reminder_chnl_name.Data = prgrm.channelNumber + " " + prgrm.channelName;
        pageData.reminder_prgrm_name.Data = prgrm.title;
        pageData.reminder_repeat_mode.Data = repeatModeToRepeatStr(prgrm.repeatMode);
        pageData.reminder_prgrm_time.Data =
            UTCToLocalDate(prgrm.startTime) + " " +
            UTCToLocalTime(prgrm.startTime) + " - " +
            UTCToLocalTime(prgrm.endTime);
    }

    self.onOpenReminderPage = function() {
        hiWebOsFrame[self.id].rewriteDataOnly();
        self.setAutoCloseTimer();
    }

    self.onCloseReminderPage = function(){
        clearTimeout(autoClosetimer);
    }

    self.onDestroyReminderPage = function() {
        hiWebOsFrame[self.id] = null;
        clearTimeout(autoClosetimer);
    }

    self.watchReminder = function() {
        var rmdrOrigin = hiWebOsFrame[self.id].origin;
        hiWebOsFrame[self.id].destroy();
        if(rmdrOrigin.module == "app") {

            hiWebOsFrame[LiveTVModule.MAIN].operateData.callBackFunc =
                livetvchlist.changeChannelFromReminder.bind(this, oprtData.program);
            asyncStopApp(rmdrOrigin.id, hiWebOsFrame[LiveTVModule.MAIN]);
        }
        else {
            if(livetvchlist.changeChannelFromReminder.call(this, oprtData.program)) {
                openLiveTVModule([Msg.INFO, 0]);
            }
            else {
                DBG_INFO("change channel from reminder failed, process other operation.");
            }
        }
    }

    self.cancelReminder = function() {
        if(hiWebOsFrame[self.id].origin.id == "app_lau_browser" && 16 != GlobalFlagShareInBrowser) {
            DBG_ALWAYS("setReturnlocalappFlag[" + FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING + "]");
            tv && model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
        }
        hiWebOsFrame[self.id].origin.open();
        hiWebOsFrame[self.id].origin.hiFocus();
        hiWebOsFrame[self.id].destroy();
    }

    self.setAutoCloseTimer = function(){
        clearTimeout(autoClosetimer);
        autoClosetimer = setTimeout(self.cancelReminder, 15000);
    }

}

var dlgReminder = new dialogReminder();
