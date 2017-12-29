/**
 * Created by BOB on 14-6-26.
 */



var ScheduleList = function () {


    var self = this;
    self.bookingList = [];

    var maxScheduleNum = 5;
    var afterOperationCallBack;
    var pcBookId = 0;

    function eventRowsToRecordList(rows, standByFlag) {
        var lists = [], vecLen = !!standByFlag ? 12 : 11;
        //rows = strToObject(rows);
        DBG_ALWAYS("schedule rows: " + objToString(rows));
        for (var i = 0; i < rows.length / vecLen; i++) {
            var list = {}, row = rows.slice(i * vecLen, (i + 1) * vecLen);

            list.uid = row[0];
            list.channelUid = row[1];
            list.startTime = parseInt(row[2]);
            list.endTime = list.startTime + parseInt(row[3]);
            list.title = row[4];
            list.repeatMode = parseInt(row[5]);
            list.bookType = parseInt(row[6]);
            list.channelNumber = !!row[7] ? row[7] : "";
            list.channelName = !!row[8] ? row[8] : "";
            list.listUid = row[9];
            list.playId = row[10];
            list.standbyScheduleRecord = !!standByFlag ? row[11] : false;
            lists.push(list);
        }
        return lists;
    }

    self.getScheduleList = function () {
        try {
            if (!tv) {
                return;
            }

            if (!model.timerlist.onAddRecordTimerResult) {
                model.timerlist.onAddRecordTimerResult = onOperateTimerResult;
                model.timerlist.onEditRecordTimerResult = onOperateTimerResult;
                model.timerlist.onRemoveRecordTimerResult = onOperateTimerResult;
            }

            self.bookingList = eventRowsToRecordList(model.timerlist.getTimerList(), false);
        }
        catch (ex) {
            self.bookingList = [];
            DBG_ERROR("get schedule list error: " + ex.message);
        }
        DBG_ALWAYS("schedule list: " + objToString(self.bookingList));
    }

    self.getRefBookingItems = function () {
        return self.bookingList;
    }

    self.getIsBookingByProgram = function (prgrm) {
        var bookingFlag = {
            reminder: false,
            record: false
        }

        for (var i = 0; i < self.bookingList.length; i++) {
            //The same channel
            if (prgrm.channelUid == self.bookingList[i].channelUid && prgrm.playId == self.bookingList[i].playId) {
                //all match
                if (prgrm.startTime == self.bookingList[i].startTime && prgrm.endTime == self.bookingList[i].endTime) {
                    self.bookingList[i].bookType == BookType.REMINDER ? bookingFlag.reminder = true : bookingFlag.record = true;
                    break;
                }
            }
        }
        if (bookingFlag.reminder || bookingFlag.record) {
            //DBG_INFO("program[" + objToString(prgrm) + "] booking flag is " + objToString(bookingFlag));
        }
        return bookingFlag;
    }

    function filterBookingListByKey(key, val) {
        var prgrm = null;
        for (var i = 0; i < self.bookingList.length; i++) {
            if (val == self.bookingList[i][key]) {
                prgrm = copyObj(self.bookingList[i]);
                break;
            }
        }
        return prgrm;
    }

    self.getBookingInfoByProgram = function (prgrm) {
        var prgrm_cpy = null;
        var prgrmSeconds = getDaylightSeconds(prgrm.startTime, prgrm.endTime);
        for (var i = 0; i < self.bookingList.length; i++) {
            //The same channel
            if (prgrm.channelUid == self.bookingList[i].channelUid && prgrm.playId == self.bookingList[i].playId) {

                var itemSeconds = getDaylightSeconds(self.bookingList[i].startTime, self.bookingList[i].endTime);
                if (prgrmSeconds.bg >= itemSeconds.ed || prgrmSeconds.ed <= itemSeconds.bg) {
                    continue;
                }
                else {
                    if (checkTimeIntersection(prgrm, self.bookingList[i]) ||
                        (self.bookingList[i].repeatMode == BookRepeatMode.DAILY &&
                        prgrm.startTime >= self.bookingList[i].endTime)) {
                        DBG_INFO("founded: startTime[" + prgrm.startTime + ", " + self.bookingList[i].startTime +
                        "], endTime[" + prgrm.endTime + "," + self.bookingList[i].endTime + "]");
                        prgrm_cpy = copyObj(self.bookingList[i]);
                        break;
                    }
                    else {
                        continue;
                    }
                }

            }
        }
        return prgrm_cpy;
    }

    self.getBookingInfoByChannelId = function (channelId) {
        return filterBookingListByKey("channelUid", channelId);
    }

    function isListCountOverFlow() {
        DBG_ALWAYS("current schedule list count is " + self.bookingList.length);
        return (self.bookingList.length >= maxScheduleNum);
    }

    self.addProgramToSchedule = function (prgrm, afterAdd) {
        if (isListCountOverFlow()) {
            showMsg('', 'Maximum number of schedules reached!');
            return false;
        }
        DBG_ALWAYS("add schedule[" + objToString(prgrm) + "]");
        var conflicted = getConflictedProgram(prgrm);
        if (null != conflicted) {
            afterAdd.call(this, conflicted);
        }
        else {
            afterOperationCallBack = afterAdd;
            if (tv) {
                model.timerlist.addRecordTimer(prgrm);
            }
            else {
                prgrm.uid = ++pcBookId;
                self.bookingList.push(prgrm);
                afterOperationCallBack(null);
                if (!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible) {
                    hiWebOsFrame.epg.rewriteDataOnly();
                    // epg.rewriteEPGUI();
                }
            }
        }

    }

    self.deleteProgramToSchedule = function (uids, afterDelete) {
        DBG_ALWAYS("delete schedule[" + objToString(uids) + "]");
        if (!!uids || uids === 0 || uids === "0") {
            afterOperationCallBack = afterDelete;
            if (tv) {
                model.timerlist.removeRecordTimer(uids);
            }
            else {
                var uidArr = (uids + "").split(",");
                while (uidArr.length > 0) {
                    var flag;
                    for (var i = 0; i < self.bookingList.length; i++) {
                        if (parseInt(uidArr[0].replace('"', '')) == self.bookingList[i].uid) {
                            self.bookingList.splice(i, 1);
                            uidArr.splice(0, 1);
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        DBG_ERROR("can not find this uid[" + uidArr[0] + "]");
                        uidArr.splice(0, 1);
                    }
                }
                afterOperationCallBack(null);
                if (!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible) {
                    hiWebOsFrame.epg.rewriteDataOnly();
                    //epg.rewriteEPGUI();
                }
            }

        }
        else {
            DBG_ALWAYS("this timer[" + uids + "] have not added.");
            afterDelete();
        }
    }

    self.editProgramToSchedule = function (prgrm, afterEdit) {
        DBG_ALWAYS("edit schedule[" + objToString(prgrm) + "]");
        var conflicted = getConflictedProgram(prgrm);
        if (null != conflicted) {
            afterEdit.call(this, conflicted);
        }
        else {
            afterOperationCallBack = afterEdit;
            if (tv) {
                model.timerlist.editRecordTimer(prgrm);
            }
            else {
                for (var i = 0; i < self.bookingList.length; i++) {
                    if (prgrm.uid == self.bookingList[i].uid) {
                        self.bookingList[i] = prgrm;
                        break;
                    }
                }
                afterOperationCallBack(null);
                if (!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible) {
                    hiWebOsFrame.epg.rewriteDataOnly();
                    //epg.rewriteEPGUI();
                }
            }
        }
    }


    self.parseScheduleItem = function (val, flag) {
        var item = eventRowsToRecordList(val, flag)[0];
        var crntTime = getDVBLongTime();
        if (!!item && (item.startTime + 60) < crntTime) {
            DBG_INFO("startTime[" + item.startTime + "] is lower than current[" + crntTime + "], reset.");
            item.startTime = crntTime;
        }
        return item;
    }

    function isContainChannelId(arr, id) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == id) return true;
        }
        return false;
    }

    self.updateSchedueAftRemove = function (listUid, channelIds) {
        try {
            var rmvIds = '';
            for (var i = 0; i < self.bookingList.length; i++) {
                if (self.bookingList[i].listUid != listUid) continue;
                if (isContainChannelId(channelIds, self.bookingList[i].channelUid)) {
                    rmvIds += ('"' + self.bookingList[i].uid + '",');
                }
            }
            self.deleteProgramToSchedule(rmvIds.slice(0, -1), function () {
                DBG_INFO("updated");
            });
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function onOperateTimerResult() {
        try {
            DBG_ALWAYS("on operate timer list");
            self.getScheduleList(false);
            if (typeof afterOperationCallBack == "function") {
                afterOperationCallBack();
            }
            if (!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible) {
                hiWebOsFrame.epg.rewriteDataOnly();
                //epg.rewriteEPGUI();
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function checkTimeIntersection(time_1, time_2) {
        return !(time_1.startTime >= time_2.endTime || time_1.endTime <= time_2.startTime);
    }

    function getConflictedProgram(prgrm) {
        var conflictedProgram = null;
        var prgrmSeconds = getDaylightSeconds(prgrm.startTime, prgrm.endTime);
        var aft_7_day_prgrm = {
            startTime: prgrm.startTime + 7 * 24 * 3600,
            endTime: prgrm.endTime + 7 * 24 * 3600
        }
        for (var i = 0; i < self.bookingList.length; i++) {
            var bkItem = self.bookingList[i];
            if (prgrm.channelUid == bkItem.channelUid && prgrm.playId == bkItem.playId && prgrm.uid == bkItem.uid) {
                continue;
            }
            else {
                var itemSeconds = getDaylightSeconds(bkItem.startTime, bkItem.endTime);
                if (prgrmSeconds.bg >= itemSeconds.ed || prgrmSeconds.ed <= itemSeconds.bg) {
                    continue;
                }
                else if ((BookType.REMINDER == prgrm.bookType || BookType.REMINDER == bkItem.bookType) &&
                    Math.abs(prgrmSeconds.bg - itemSeconds.bg) > 60) {
                    DBG_ALWAYS("reminder watch start time interval is more than 60s.");
                    continue;
                }
                else { //have conflict time span
                    var aft_7_day_bkItem = {
                        startTime: bkItem.startTime + 7 * 24 * 3600,
                        endTime: bkItem.endTime + 7 * 24 * 3600
                    }
                    if (prgrm.repeatMode != BookRepeatMode.DAILY && bkItem.repeatMode != BookRepeatMode.DAILY // not everyday
                        && !checkTimeIntersection(prgrm, bkItem) // once is ok
                        && !checkTimeIntersection(aft_7_day_prgrm, bkItem) // weekly is ok
                        && !checkTimeIntersection(prgrm, aft_7_day_bkItem)) {
                        continue
                    }
                    else if ((prgrm.repeatMode == BookRepeatMode.DAILY && bkItem.repeatMode == BookRepeatMode.ONCE && prgrm.startTime >= bkItem.endTime)
                        || (bkItem.repeatMode == BookRepeatMode.DAILY && prgrm.repeatMode == BookRepeatMode.ONCE && bkItem.startTime >= prgrm.endTime)) {
                        continue
                    }

                    conflictedProgram = {
                        id: bkItem.uid,
                        programs: [prgrm, bkItem]
                    }
                    DBG_ERROR("conflict[" + objToString(conflictedProgram) + "]");
                    break;
                }
            }
        }
        return conflictedProgram;
    }
}

var schedule = new ScheduleList();

