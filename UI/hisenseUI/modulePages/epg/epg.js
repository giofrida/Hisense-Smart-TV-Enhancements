function EPG() {
    var self = this;
    self.id = "epg";

    function FLIPMODE() {
        ENUM_INDEX = 0
    }

    FLIPMODE();
    FLIPMODE.NONE = ENUM_INDEX++;
    FLIPMODE.UP = ENUM_INDEX++;
    FLIPMODE.DOWN = ENUM_INDEX++;
    FLIPMODE.LEFT = ENUM_INDEX++;
    FLIPMODE.RIGHT = ENUM_INDEX++;
    FLIPMODE.DAY = ENUM_INDEX++;
    FLIPMODE.CHFLIP = ENUM_INDEX++;
    FLIPMODE.LIST = ENUM_INDEX++;
    FLIPMODE.START = ENUM_INDEX++;
    FLIPMODE.UPDATE = ENUM_INDEX++;

    var oprtData = {
        currentUTC: 0,
        colorTheme: [
            'Movie', 'News', 'Shows',
            'Sport', 'Kids', 'Music',
            'Arts', 'Social', 'Education',
            'Hobby', 'Series', 'Others'
        ],
        themeValue: [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xA, 0xB, 0xC],
        themeIndex: [0, 1, 2],
        channels: []
    };

    var epgChannelIterator, epgEventIterator = [], epgEventOneWinIterator, oneActiveWin = true, currentChannel = {}, currentList = {};
    var channelMaxRows = 6, programMaxCols = 10, maxDay = 7, totalSeconds = 3600 * 3, totalWidth = 1348;
    var startIndex = 0, channelIndex = 0, programIndex = 0, currentPlayIndex = [0, 0, 0, 0, 0, 0];
    var currentTime, baseLine, startLine, endLine, leftEdge, rightEdge, freeviewEPG = false;
    var readedCount = 0, timeLineBaseL = 448, timeLineTimer = 0;
    var flipFlag = FLIPMODE.NONE, epgUpdateQue = [];
    var ccControl = -1, enableThemeColor = true;

    var REGOBJ = {
        "&": "&amp;",
        "'": "&apos;",
        '"': '&quot;',
        "<": "&lt;",
        ">": "&gt;",
        "\n": "<br>"
    };

    var EPGSTYLE = {
        NORMAL: 0,
        FOCUS: 1,
        DISABLE: 2,
        SELECTED: 3
    }


    var noFilterIds = [];

    function initTVState() {
        if (!tv) return;
        if ("SA" == InitArea) {
            if (ccControl == -1) {
                ccControl = model.closedcaption.getControl();
                ginga.GingaStop();
                model.closedcaption.setControl(0);
            }
        }
        else {
            model.system.setCurChannelSubtitleStatus(2);
        }
        pauseHBBTV();
        if (FREEVIEWTEST) {
            model.epg.setBarkerChannelActive(parseInt(currentChannel.channelId));
        }
        setMheg5Status(0xe);
    }

    function initTimeLineTimer() {
        var timeLineL = timeLineBaseL + durationTimeToWidth(currentTime - baseLine);
        $("#epg_time_line_current").css("left", timeLineL + "px");
        clearInterval(timeLineTimer);
        timeLineTimer = setInterval(refreshTimeLine, 30 * 1000);
    }

    function initTimeLine() {
        recheckDSTSeconds();
        currentTime = getDVBLongTime();
        var d = (new Date((currentTime + hisenseUITZSeconds) * milliBase));
        d.setUTCMinutes(0);
        d.setUTCSeconds(0);
        d.setUTCMilliseconds(0);
        baseLine = d.getTime() / milliBase - hisenseUITZSeconds;
        startLine = baseLine;
        endLine = startLine + totalSeconds;
        leftEdge = freeviewEPG ? (baseLine - (d.getUTCHours() + maxDay * 24) * 3600) : baseLine;
        rightEdge = baseLine + ((24 - d.getUTCHours()) + maxDay * 24) * 3600;
        initTimeLineTimer();
    }

    function initThemeColor() {
        oprtData.themeIndex = [0, 1, 2];
        if (!enableThemeColor) return false;
        try {
            oprtData.themeIndex = tv ? model.epg.getThemsColor() : [0, 1, 2];
            if (0 == oprtData.themeIndex[0] + oprtData.themeIndex[1] + oprtData.themeIndex[2]) {
                oprtData.themeIndex = [0, 1, 2];
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function initEPGData() {
        currentChannel = livetvchlist.getEPGCurrentChannel();
        if (null == currentChannel || currentChannel.channelIndex < 0) return false;
        currentList = currentChannel.list;
        startIndex = channelMaxRows * Math.floor(currentChannel.channelIndex / channelMaxRows);
        channelIndex = currentChannel.channelIndex;
        programIndex = 0;
        currentPlayIndex = [0, 0, 0, 0, 0, 0];
        flipFlag = FLIPMODE.START;
        return true;
    }

    function getChannelEvent(list) {
        hiWebOsFrame.lockAllKeys("get channel");
        epgChannelIterator = createChannelIterator(list, onGetChannelsEvent, 1);
        if (null != epgChannelIterator) {
            epgChannelIterator.fetchTotalCount();
        }
        else {
            DBG_ERROR("create iterator error");
            hiWebOsFrame.unLockAllKeys("get channel");
        }
    }

    function seekRowIndex(iterator, idx, callback) {
        iterator.seekToRow(idx, TableIterator.SEEK_SET);
        callback({type: TableIterator.EVENT_TYPE_SEEK_TO_ROW});//temp
    }

    function onGetChannelsEvent(list, m_event) {
        if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            if (m_event.rows.length <= 0) return;

            oprtData.channels = eventRowsToChannels(m_event.rows, list);

            currentList = list;

            if (FLIPMODE.LIST == flipFlag) {
                channelIndex = 0;
                startIndex = 0;
            }

            getProgramEvent();
            hiWebOsFrame.unLockAllKeys("get channel");
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            if (m_event.totalCount <= 0) {
                showMsg('', 'Selected channel list is empty.');
                hiWebOsFrame.unLockAllKeys("get channel");
                showEPGPage();
            }
            else {
                // seekRowIndex(epgChannelIterator, startIndex, onGetChannelsEvent.bind(this, list));
                epgChannelIterator.readNextRows(m_event.totalCount);
            }

        }
        else if (m_event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {
            epgChannelIterator.readNextRows(channelMaxRows);
        }
    }

    function getProgramEventByChannel(channel_id) {
        // hiWebOsFrame.lockAllKeys("get program");
        lockEPGPageKeys();
        for (var i = 0; i < channelMaxRows; i++) {
            var chnl = oprtData.channels[i + startIndex];
            if (!chnl || "" == chnl.uid) continue;
            if (channel_id == chnl.uid) {
                chnl.FEPG = baseLine > startLine;
                if (chnl.FEPG) {
                    epgUpdateQue.push(channel_id);
                    var iterator = createFreeviewIterator(chnl, startLine, endLine, onGetProgramsEventByChannel);
                    iterator.readNextRows(programMaxCols);
                    return;
                }
                else {

                }
            }
        }
        flipFlag = FLIPMODE.NONE;
    }

    function onGetProgramsEventByChannel(chnl, m_event) {
        if (null == m_event) {
            chnl.program = getNoProgramData();
            checkReadedCount(channelMaxRows, chnl.uid);
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            if (chnl.FEPG) {
                chnl.program = eventRowsToFreeview(chnl, m_event.rows);
                chnl.logo = chnl.program[0].channelLogo;
            }
            else {

            }
            checkReadedCount(channelMaxRows, chnl.uid);
        }

    }

    function getProgramEvent() {
        try {
            DBG_INFO("start[" + startLine + "], end[" + endLine + "]");
            // hiWebOsFrame.lockAllKeys("get program");
            lockEPGPageKeys();
            readedCount = 0;
            programIndex = 0;
            epgEventIterator = [];
            var channelIds = "",
                serviceIds = "",
                i;
            for (i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + startIndex];
                if (!chnl || "" == chnl.uid) {
                    if (!oneActiveWin) {
                        checkReadedCount(readedCount + 1);
                    }
                    continue;
                }
                chnl.FEPG = baseLine > startLine;
                if (chnl.FEPG) {
                    epgEventIterator[i] = createFreeviewIterator(chnl, startLine, endLine, onGetProgramsEvent);
                } else {
                    if (oneActiveWin) {
                        channelIds += (chnl.uid + ",");
                        serviceIds += (chnl.playId + ",");

                    } else {
                        epgEventIterator[i] = createProgramIterator(chnl, startLine, endLine, onGetProgramsEvent);
                    }
                }
                if (chnl.FEPG || !oneActiveWin) epgEventIterator[i].readNextRows(programMaxCols);
            }
            if (oneActiveWin && "" !== channelIds) {
                channelIds = channelIds.slice(0, -1);
                serviceIds = serviceIds.slice(0, -1);
                epgEventOneWinIterator = createOneActiveWinProgram(
                    channelIds, serviceIds, startLine, endLine,
                    onGetProgramEventInActiveWin);
                epgEventOneWinIterator.seekToRow(0, TableIterator.SEEK_SET);
                epgEventOneWinIterator.readNextRows(programMaxCols);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function onGetProgramsEvent(chnl, m_event) {
        if (null == m_event) {
            chnl.program = getNoProgramData();
            checkReadedCount(readedCount + 1);
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            if (chnl.FEPG) {
                chnl.program = eventRowsToFreeview(chnl, m_event.rows);
                chnl.logo = chnl.program[0].channelLogo;
            }
            else {
                chnl.program = eventRowsToProgram(chnl, m_event.rows);
                chnl.logo = "";
            }
            checkReadedCount(readedCount + 1);
        }

    }

    function onGetProgramEventInActiveWin(m_event) {
        var chnl = oprtData.channels[readedCount + startIndex];
        if (null == m_event) {
            if (chnl) {
                chnl.program = getNoProgramData();
            }
            checkReadedCount(readedCount + 1);
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            chnl.program = eventRowsToProgram(chnl, m_event.rows);
            readedCount++;
            // DBG_ERROR("next uid: " + oprtData.channels[readedCount + startIndex].uid);
            if (readedCount == channelMaxRows) {
                checkReadedCount(readedCount);
            }
            else if (!oprtData.channels[readedCount + startIndex] || "" == oprtData.channels[readedCount + startIndex].uid) {
                // onGetProgramEventInActiveWin(null);
                checkReadedCount(channelMaxRows);
            }
            else {
                epgEventOneWinIterator.seekToRow(readedCount, TableIterator.SEEK_SET);
                epgEventOneWinIterator.readNextRows(programMaxCols);
            }
        }
    }

    function seekToChannel(chnlId, idx) {
        try {
            DBG_ALWAYS("seek to channel[" + chnlId + "]");
            if (!chnlId) {
                DBG_INFO("channel[" + chnlId + "] is null");
                onGetProgramsEventByOneWin({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []})
            }
            else {
                m_epgOneWinIterator.seekToRow(idx, 0);
                m_epgOneWinIterator.readNextRows(programMaxCols);
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function getLastVisibleProgram() {
        var i, prgrms = oprtData.channels[channelIndex].program;
        for (i = programMaxCols - 1; i >= 0; i--) {
            if ("" == prgrms[i].eventId) continue;
            if (prgrms[i].startTime < endLine) return i;
        }
        return 0;
    }

    function getFirstPlayingProgram() {
        if (startLine > baseLine) return 0;
        var i, prgrms = oprtData.channels[channelIndex].program;
        for (i = 0; i < prgrms.length; i++) {
            if ("" == prgrms[i].eventId) continue;
            if (isCurrentPlay(prgrms[i].startTime, prgrms[i].endTime)) return i;
        }
        return 0;
    }

    function checkReadedCount(cnt, uid) {
        readedCount = cnt;
        if (readedCount == channelMaxRows) {
            resetEventOperateData();
            if (!refreshTimeAxises()) return;
            switch (flipFlag) {
                case FLIPMODE.LEFT:
                    programIndex = getLastVisibleProgram();
                    break;
                case FLIPMODE.START:
                case FLIPMODE.CHFLIP:
                case FLIPMODE.LIST:
                case FLIPMODE.DAY:
                    programIndex = getFirstPlayingProgram();
                    break;
                case FLIPMODE.UPDATE:
                    if ("undefined" != typeof uid) {
                        var idx = epgUpdateQue.indexOf(uid);
                        if (idx > -1) {
                            epgUpdateQue.splice(idx, 1);
                        }
                        if (epgUpdateQue.length > 0) {
                            self.refreshEPGWhenTimeChanged(1, epgUpdateQue[0]);
                        }
                    }
                    programIndex = 0;
                    break;
                default:
                    break;
            }
            rewriteEPGUI();
            unLockEPGPageKeys();
            showEPGPage();
        }
    }

    function getEPGTime() {
        recheckDSTSeconds();
        // var utcdate = new Date((currentTime + hisenseUITZSeconds + hisenseUIDSTSeconds) * milliBase);
        var utcdate = new Date(getLocalTimeByUTC(currentTime) * milliBase);
        var formatHour = getHourByFormat(utcdate.getUTCHours(), hisenseUITimeFormat);
        var localtime = formatHour.HOUR + ':' + ("0" + utcdate.getUTCMinutes()).slice(-2) + formatHour.APM.replace(/\s+$/, '');
        var localweek = weekShort[utcdate.getUTCDay()];
        var localdate = ('0' + utcdate.getUTCDate()).slice(-2) + ", " + getCurrentContentLanguage(month[utcdate.getUTCMonth()]);

        if("Thailand" == hiWebOsFrame.getCurrentCountry()){
            localdate += (" " + utcdate.getUTCFullYear());
        }

        return localtime + " " + getCurrentContentLanguage(localweek) + " " + localdate;
    }


    function getPBBTypeColor(theme) {
        var src = imgList.noImg;
        if (!enableThemeColor) return src;
        switch ((theme >> 4)) {
            case oprtData.themeValue[oprtData.themeIndex[0]]:
                src = imgList.PURPLE;
                break;
            case oprtData.themeValue[oprtData.themeIndex[1]]:
                src = imgList.GREEN;
                break;
            case oprtData.themeValue[oprtData.themeIndex[2]]:
                src = imgList.PINK;
                break;
            default:
                break;
        }
        return src;
    }

    function doHTMLFilter(str, fullFilter) {
        var destStr = str + "";
        if (fullFilter) {
            for (var reg in REGOBJ) {
                destStr = destStr.replace(new RegExp(reg, "g"), REGOBJ[reg]);
            }
            destStr = destStr == "\\" ? "" : destStr;
        }
        else {
            destStr = destStr.replace(/\n/g, "<br>");
        }

        return translateNoProgram(destStr);
    }

    function setEPGText(id, text) {
        try {
            $("#" + id).html(getCurrentContentLanguage(doHTMLFilter(text, noFilterIds.indexOf(id) > -1)));
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function setEPGImage(id, src) {
        $("#" + id).attr("src", src);
    }

    function setElementStyle(id, style) {
        switch (style) {
            case EPGSTYLE.DISABLE:
                $("#" + id).css("display", "none");
                break;
            case EPGSTYLE.NORMAL:
                $("#" + id).removeAttr("style");
                break;
        }
    }

    function getImgSrcByAttr(chnl, prgrm, attr) {
        var src = imgList.noImg;
        switch (attr) {
            case Mask.LOCK:
                if (chnl.isLock) src = imgList.lock;
                break;
            case Mask.FAVTYPE:
                if (chnl.favType) src = imgList.fav;
                break;
            case Mask.ENCRYPT:
                if (chnl.isEncrypt) src = imgList.encrypt;
                break;
            case Mask.BOOK:
                var bookFlag = schedule.getIsBookingByProgram(prgrm);
                prgrm.reminder = bookFlag.reminder;
                prgrm.record = bookFlag.record;
                if (durationTimeToWidth(prgrm.endTime - prgrm.startTime) > 60) {
                    if (prgrm.record) src = imgList.record;
                    if (prgrm.reminder) src = imgList.reminder;
                }
                break;
            default :
                break;
        }
        return src;
    }

    function createEPGHTML(chnls) {

        var htmlStr = "";
        var chnl, prgrm, CHClass, eventClass, eventWidth, eventOffset, eventLen, leftEndTime;
        var rowCnt = 0;
        for (var i = startIndex; i < startIndex + channelMaxRows; i++) {
            chnl = chnls[i];
            if (!chnl) continue;
            rowCnt++;
            eventLen = 0;
            leftEndTime = startLine;
            eventClass = "";
            CHClass = (i == channelIndex) ? "selected" : "normal";
            htmlStr += (
            '<li id="epg_ch_' + i + '" class="' + CHClass + '">' + '\n' +
            '<div id="epg_ch_' + i + '_panel" class="epgChannels">' + '\n' +
            '<span id="epg_ch_' + i + '_number" class="epgListChannelNum">' + chnl.number + '</span>' + '\n' +
                //'<img id="epg_ch_' + i + '_logo" onError="javascript:this.src=\'img/common/transparent.png\';">' + '\n' +
            '<span id="epg_ch_' + i + '_name" class="epgListChannelName">' + doHTMLFilter(chnl.name, true) + '</span>' + '\n' +
            '<img id="epg_ch_' + i + '_lock" class="epgListChannelImg" src="' + getImgSrcByAttr(chnl, null, Mask.LOCK) + '">' + '\n' +
            '<img id="epg_ch_' + i + '_encrypt" class="epgListChannelImg" src="' + getImgSrcByAttr(chnl, null, Mask.ENCRYPT) + '">' + '\n' +
            '</div>' + '\n' +
            '<ul id="epg_ch_' + i + '_program">' + '\n');
            for (var j = 0; j < programMaxCols; j++) {
                prgrm = chnl.program[j];
                if (!prgrm || "" == prgrm.eventId) continue;

                if (i == channelIndex && j == programIndex) {
                    eventClass = "epgEventListFocus";
                }
                else {
                    eventClass = "epgEventListNormal";
                }

                if (isCurrentPlay(prgrm.startTime, prgrm.endTime)) {
                    currentPlayIndex[i] = j;
                    eventClass = (i == channelIndex && j == programIndex) ?
                        "epgEventListFocus epgEventListSelected" : "epgEventListSelected";
                }

                eventWidth = durationTimeToWidth(prgrm.endTime - prgrm.startTime);
                eventOffset = durationTimeToWidth(prgrm.startTime - leftEndTime);
                //DBG_ERROR("program[" + i + "][" + j + "][" + startLine + "][" + leftEndTime + "]" +
                //"[" + currentTime + "]["+eventOffset+"]["+eventWidth+"][" + prgrm.startTime + "][" + prgrm.endTime + "]");
                if (eventOffset <= 0) {
                    eventWidth += eventOffset;
                    eventOffset = 0;
                }
                if (eventLen + eventOffset + eventWidth >= totalWidth) {
                    eventWidth = Math.max(totalWidth - eventLen - eventOffset, 0);
                    eventLen = totalWidth;
                    //DBG_ERROR("reset width: " + eventWidth);
                }
                else {
                    eventLen += (eventOffset + eventWidth);
                }
                if (eventWidth < 1) eventWidth = 1;
                leftEndTime = prgrm.endTime;

                htmlStr += (
                '<li id="epg_ch_' + i + '_program_' + j + '" class="' + eventClass + '" ' +
                'style="width:' + (eventWidth - 1) + 'px; margin-left:' + eventOffset + 'px;">' + '\n' +
                '<span id="epg_ch_' + i + '_program_' + j + '_name">' + doHTMLFilter(prgrm.title, true) + '</span>' + '\n' +
                '<img id="epg_ch_' + i + '_program_' + j + '_theme" src="' + getPBBTypeColor(prgrm.theme) + '">' + '\n' +
                '<div><img id="epg_ch_' + i + '_program_' + j + '_book" src="' + getImgSrcByAttr(chnl, prgrm, Mask.BOOK) + '"></div>' + '\n' +
                '</li>' + '\n');
            }
            htmlStr += (
            '</ul>' + '\n' +
            '</li>' + '\n');
        }
        $("#epg_time_line_current").css("height", (55 + 85 * rowCnt) + "px");
        return htmlStr;
    }

    function rewriteEPGUI() {
        //if (oprtData.channels.length == 0) return;
        hiWebOsFrame[self.id].rewriteDataOnly();
        $("#epg_channel_list").html(createEPGHTML(oprtData.channels));
    }

    self.rewriteEPGUI = rewriteEPGUI;

    function rewritePageData(pageData) {
        if (oprtData.channels.length == 0) return;
        var chnl = oprtData.channels[channelIndex];

        var crntChannel = livetvmain.getCurrentChannelInfo();
        var cur_prgrm = chnl.program[programIndex];

        var bookFlag = schedule.getIsBookingByProgram(cur_prgrm);
        cur_prgrm.reminder = bookFlag.reminder;
        cur_prgrm.record = bookFlag.record;


        pageData.epg_time.Data = getEPGTime();

        pageData.epg_channel_number.Data = chnl.number;
        pageData.epg_channel_name.Data = chnl.name;

        // pageData.epg_pip_channel.Data = pageData.epg_channel_number.Data + " " + pageData.epg_channel_name.Data;

        pageData.epg_pip_channel.Data = crntChannel.number + " " + crntChannel.name;

        pageData.epg_channel_lock.Data = chnl.isLock ? imgList.lock : imgList.noImg;
        pageData.epg_channel_encrypt.Data = chnl.isEncrypt ? imgList.encrypt : imgList.noImg;

        pageData.epg_type_color_purple.Data = oprtData.colorTheme[oprtData.themeIndex[0]];
        pageData.epg_type_color_green.Data = oprtData.colorTheme[oprtData.themeIndex[1]];
        pageData.epg_type_color_pink.Data = oprtData.colorTheme[oprtData.themeIndex[2]];

        pageData.epg_type_color_purple.disable = !enableThemeColor;
        pageData.epg_type_color_green.disable = !enableThemeColor;
        pageData.epg_type_color_pink.disable = !enableThemeColor;


        pageData.epg_progrm_name.Data = cur_prgrm.title;
        if (cur_prgrm.secondaryTitle) {
            pageData.epg_progrm_name.Data += (" - " + cur_prgrm.secondaryTitle);
        }
        pageData.epg_program_book.Data = cur_prgrm.reminder ? imgList.reminder : imgList.noImg;
        pageData.epg_program_time.Data = getProgramLocalTime(oprtData.channels[channelIndex].program[programIndex].startTime, oprtData.channels[channelIndex].program[programIndex].endTime, 4);
        //pageData.epg_program_detail.Data = oprtData.channels[channelIndex].program[programIndex].detail;
        pageData.epg_program_detail.Data = translateNoProgram(oprtData.channels[channelIndex].program[programIndex].detail)
        // pageData.epg_program_detail.Data = readHTMLString("UI/hisenseUI/shy_no_wrap.txt", 3);


        pageData.epg_tip_date.Data = getEPGDisplayDate(startLine);
        pageData.epg_tip_tuner.Data = currentList.name;
        pageData.epg_time_line_current.Data = UTCToLocalTime(currentTime);
        pageData.epg_time_line_current.disable = (startLine != baseLine);
        pageData.epg_time_axis_0.Data = UTCToLocalTime(startLine);
        pageData.epg_time_axis_1.Data = UTCToLocalTime(startLine + 3600);
        pageData.epg_time_axis_2.Data = UTCToLocalTime(startLine + 3600 * 2);
    }

    function eventRowsToFreeview(chnl, rows) {
        var prgrms = [], i, leftEnd = startLine;
        var emptyFlag = 0;
        for (i = 0; i < programMaxCols; i++) {
            var row = rows[i], prgrm = {};
            if (row) {
                prgrm.channelUid = chnl.uid;
                prgrm.playId = chnl.playId;
                prgrm.eventId = row[FVPField.PROGRAM_ID];
                prgrm.attr = i + 1;

                prgrm.channelLogo = row[FVPField.CHANNEL_LOGO];
                prgrm.contentImage = row[FVPField.CONTENT_IMAGE];
                prgrm.title = row[FVPField.MAIN_TITLE];
                prgrm.secondaryTitle = row[FVPField.SECONDARY_TITLE];
                // prgrm.runningTime = row[FVPField.RUNNING_TIME];
                prgrm.text = row[FVPField.DESCRIPTION];
                prgrm.detail = row[FVPField.DESCRIPTION];
                prgrm.theme = 0;//row[FVPField.PROGRAM_TYPE];
                prgrm.startTime = parseInt(row[FVPField.START_TIME_UTC]);
                prgrm.endTime = parseInt(row[FVPField.END_TIME_UTC]);
                prgrm.mediaURL = row[FVPField.MEDIA_URL];
                prgrm.available = row[FVPField.PROGRAM_AVAILABLE_FLAG];
                prgrm.guidance = "";
                prgrm.reminder = false;
                prgrm.record = false;
                if (0 == i && prgrm.startTime > startLine) {
                    prgrms.push({
                        channelUid: "",
                        playId: "",
                        eventId: "N/A",
                        attr: 0,
                        channelLogo: "",
                        contentImage: "",
                        title: "No catch up program",
                        secondaryTitle: "",
                        // runningTime: 0,
                        text: "No catch up program information",
                        detail: "No catch up program information",
                        guidance: "",
                        theme: 0,
                        startTime: startLine,
                        endTime: prgrm.startTime,
                        mediaURL: "",
                        available: 0,
                        reminder: false,
                        record: false
                    });
                }
            }
            else {
                prgrm.channelUid = "";
                prgrm.playId = "";
                prgrm.eventId = (0 === emptyFlag) ? "N/A" : "";
                prgrm.attr = 0;

                prgrm.channelLogo = "";
                prgrm.contentImage = "";
                prgrm.title = "No catch up program";
                prgrm.secondaryTitle = "";
                // prgrm.runningTime = 0;
                prgrm.text = "No catch up program information";
                prgrm.detail = "No catch up program information";
                prgrm.guidance = "";
                prgrm.theme = 0;
                prgrm.startTime = leftEnd;
                prgrm.endTime = endLine > leftEnd ? endLine : (leftEnd + totalSeconds);
                prgrm.mediaURL = "";
                prgrm.available = 0;
                prgrm.reminder = false;
                prgrm.record = false;
                emptyFlag = 1;
            }
            leftEnd = prgrm.endTime;
            prgrms.push(prgrm);
        }
        return prgrms;
    }

    function eventRowsToProgram(chnl, rows) {
        var prgrms = [], i, leftEnd = startLine;
        var emptyFlag = 0;
        for (i = 0; i < programMaxCols; i++) {
            var row = rows[i], prgrm = {};
            if (row) {
                prgrm.channelUid = chnl.uid;
                prgrm.playId = chnl.playId;
                prgrm.eventId = row[0];
                prgrm.title = row[1];
                prgrm.secondaryTitle = "";
                prgrm.text = row[2];
                prgrm.theme = row[3];
                prgrm.startTime = parseInt(row[4]);
                prgrm.endTime = parseInt(row[5]);
                prgrm.attr = row[6];
                prgrm.detail = row[7];
                prgrm.guidance = row[8];
                prgrm.reminder = false;
                prgrm.record = false;
                if (0 == i && prgrm.startTime > startLine) {
                    prgrms.push({
                        channelUid: "",
                        playId: "",
                        eventId: "N/A",
                        title: "No program",
                        secondaryTitle: "",
                        text: "No program information",
                        theme: 0,
                        startTime: startLine,
                        endTime: prgrm.startTime,
                        attr: 0,
                        detail: "No program information",
                        guidance: "",
                        reminder: false,
                        record: false
                    });
                }
            }
            else {
                prgrm.channelUid = "";
                prgrm.playId = "";
                prgrm.eventId = (0 === emptyFlag) ? "N/A" : "";
                prgrm.title = "No program";
                prgrm.secondaryTitle = "";
                prgrm.text = "No program information";
                prgrm.theme = 0
                prgrm.startTime = leftEnd;
                prgrm.endTime = endLine > leftEnd ? endLine : (leftEnd + totalSeconds);
                prgrm.attr = 0;
                prgrm.detail = "No program information";
                prgrm.guidance = "";
                prgrm.reminder = false;
                prgrm.record = false;
                emptyFlag = 1;
            }
            leftEnd = prgrm.endTime;
            prgrms.push(prgrm);
        }
        return prgrms;
    }

    function eventRowsToChannels(rows, list) {
        var chnls = [];
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i], chnl = {};
            if (row) {
                chnl.number = row[SPChannel.NUMBER];
                chnl.name = row[SPChannel.NAME];
                chnl.uid = row[SPChannel.UID];
                chnl.type = row[SPChannel.TYPE];
                chnl.attr = parseInt(row[SPChannel.ATTRIBUTE]);
                chnl.listUid = list.uid;
                chnl.satId = MT5655 ? 0 : list.satId;
                chnl.playId = MT5655 ? parseInt(list.uid) + 1 : row[SPChannel.PLAYID];
                chnl.serviceType = row[SPChannel.SERVICETYPE];
                chnl.program = initProgramData();
                chnl.updateTime = 0;
                chnl.favType = getMaskValue(Mask.FAVTYPE, chnl.attr);
                chnl.isLock = getMaskValue(Mask.LOCK, chnl.attr);
                chnl.isEncrypt = getMaskValue(Mask.ENCRYPT, chnl.attr);
            }
            else {
                chnl.number = "";
                chnl.name = "";
                chnl.uid = "";
                chnl.type = "";
                chnl.attr = "";
                chnl.listUid = "";
                chnl.satId = "";
                chnl.playId = "";
                chnl.serviceType = "";
                chnl.program = initProgramData();
                chnl.favType = "";
                chnl.isLock = "";
                chnl.isEncrypt = "";
            }
            chnls.push(chnl);
        }
        return chnls;
    }


    function getEPGDisplayDate(longTime) {
        var curDate = new Date(getLocalTimeByUTC(currentTime) * milliBase);
        var destDate = new Date(getLocalTimeByUTC(longTime) * milliBase);
        if (curDate.getUTCDate() == destDate.getUTCDate()) {
            return 'Today';
        }
        var d = '0' + destDate.getUTCDate();
        return d.slice(-2) + ' ' + getCurrentContentLanguage(month[destDate.getUTCMonth()]);
    }

    function durationTimeToWidth(durationTime) {
        // if(durationTime <= 0) {
        //     return 0;
        // }
        // else {
        return Math.round(durationTime / totalSeconds * totalWidth);
        // }
    }

    function isCurrentPlay(startTime, endTime) {
        return (currentTime >= startTime && currentTime <= endTime);
    }

    function resetEventOperateData() {
        if (currentTime > endLine || currentTime < startLine) {
            currentPlayIndex = [-1, -1, -1, -1, -1, -1];
        }
        else {

        }
    }

    function refreshTimeAxises() {
        var timeLineL = timeLineBaseL + durationTimeToWidth(currentTime - startLine);
        if (currentTime < baseLine) {
            DBG_ERROR("current time changed error. current[" + currentTime + "], base[" + baseLine + "]");
            closeEPGModule();
            openLiveTVModule([Msg.INFO, 0]);
            return false;
        }
        else {
            $("#epg_time_line_current").css("left", timeLineL + "px");
            $("#epg_time_line_current").text(UTCToLocalTime(currentTime));
            return true;
        }
    }

    function refreshTimeLine() {
        currentTime = getDVBLongTime();
        DBG_INFO("refresh epg time line[" + currentTime + "]");

        if (currentTime >= baseLine + totalSeconds) {
            DBG_INFO("epg opened more than 3 hours, auto close.")
            hiWebOsFrame[self.id].close();
            openLiveTVModule([Msg.INFO, 0]);
        }
        else {
            if (!refreshTimeAxises()) return;
            $("#epg_time").text(getEPGTime());
            var i, j, needUpdate = false;
            for (i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + startIndex];
                if (!chnl || "" == chnl.uid) continue;
                for (j = 0; j < chnl.program.length; j++) {
                    var prgrm = chnl.program[j];
                    if ("" == prgrm.eventId) continue;
                    if (isCurrentPlay(prgrm.startTime, prgrm.endTime)) {
                        if (currentPlayIndex[i] != j) needUpdate = true;
                        currentPlayIndex[i] = j;
                        break;
                    }
                }
            }
            if (needUpdate) rewriteEPGUI();
        }
    }

    function resetEventPosition() {
        var i, j, eventLen;
        for (i = 0; i < channelMaxRows; i++) {
            var chnl = oprtData.channels[i + startIndex];
            if (!chnl || "" == chnl.uid) continue;
            eventLen = 0;
            var leftEndTime = startLine;
            for (j = 0; j < programMaxCols; j++) {
                var prgrm = oprtData.channels[i + startIndex].program[j];
                var prgrmDom = $("#epg_channel_list ul li").eq(programMaxCols * i + j);
                if ("" == prgrm.eventId) {
                    // DBG_ERROR("channel["+i+"]["+j+"]no event");
                    $(prgrmDom).css("width", "0px");
                    $(prgrmDom).css("margin-left", "0px");
                    continue;
                }

                if (isCurrentPlay(prgrm.startTime, prgrm.endTime)) {
                    currentPlayIndex[i] = j;
                }

                var eventWidth = durationTimeToWidth(prgrm.endTime - prgrm.startTime);
                var eventOffset = durationTimeToWidth(prgrm.startTime - leftEndTime);
                // DBG_ERROR("program["+i+"]["+j+"]["+objToString(prgrm)+"]");
                if (eventOffset <= 0) {
                    eventWidth += eventOffset;
                    eventOffset = 0;
                }
                if (eventLen + eventOffset + eventWidth >= totalWidth) {
                    eventWidth = Math.max(totalWidth - eventLen - eventOffset, 0);
                    eventLen = totalWidth;
                }
                else {
                    eventLen += (eventOffset + eventWidth);
                }
                if (eventWidth < 1) eventWidth = 1;
                // DBG_ERROR("set width["+i+"]["+j+"]["+eventWidth+"]");
                prgrmDom.css("width", (eventWidth - 1) + "px");//-1: for li border
                prgrmDom.css("margin-left", eventOffset + "px");
                leftEndTime = prgrm.endTime;
            }


        }
    }

    function startEPGFailed() {
        if (hiWebOsFrame[self.id]) {

        }
    }

    function showEPGPage() {
        try {
            if (hiWebOsFrame.getCurrentPageId() == self.id || !hiWebOsFrame[self.id].visible) {
                hiWebOsFrame[self.id].open();
                hiWebOsFrame[self.id].hiFocus();
                setNextSelectedProgram(null, null, channelIndex, programIndex);
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        if (hiWebOsFrame.getIsLoading()) {
            hiWebOsFrame.endLoading("epg");
        }
        flipFlag = FLIPMODE.NONE;
    }

    function setMheg5Status(v) {
        try {
            if (tv && ("UK" == hiWebOsFrame.getCurrentCountry())) {
                model.mheg5.setI32Status(v);
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.openEPG = function () {
        if (!initEPGData()) return false;
        initTVState();
        initTimeLine();
        initThemeColor();
        schedule.getScheduleList(false);
        getChannelEvent(currentChannel.list);
        if (FREEVIEWTEST) {
            $(".freeviewLogo").css("display", "block");
        }


        return true;
    }

    self.onOpen = function () {
        if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            setWindowSizeDirectly(40, 111, 520, 292);
        } else {
            setWindowSizeDirectly(1360, 111, 520, 292);
        }

    }

    self.onClose = function () {

        if ("SA" == InitArea) {
            if (-1 != ccControl) {
                tv && model.closedcaption.setControl(ccControl);
                ccControl = -1;
            }
        } else {
            tv && model.system.setCurChannelSubtitleStatus(3);
        }
        setMheg5Status(0xf);
        oprtData.channels = [];
        epgChannelIterator = null;
        epgEventIterator = [];
        clearInterval(timeLineTimer);
        setWindowSizeDirectly(0, 0, 1920, 1080);
    }

    self.onFocus = function () {

    }
    self.onDestroy = function () {

    }

    function setNextSelectedChannel(destCIndex, oriCIndex) {

        var crntSelProgram = oprtData.channels[channelIndex].program[programIndex];
        var nextSelProgram, i;
        channelIndex = destCIndex;
        var oriPIndex = programIndex;
        for (i = 0; i < oprtData.channels[channelIndex].program.length; i++) {
            nextSelProgram = oprtData.channels[channelIndex].program[i];
            if (nextSelProgram.endTime > crntSelProgram.startTime) {
                programIndex = i;
                break;
            }
        }

        $("#epg_channel_number").text(oprtData.channels[channelIndex].number);
        $("#epg_channel_name").text(oprtData.channels[channelIndex].name);
        $("#epg_channel_fav").attr("src", oprtData.channels[channelIndex].favType ? imgList.favorite : imgList.noImg);
        $("#epg_channel_lock").attr("src", oprtData.channels[channelIndex].isLock ? imgList.lock : imgList.noImg);
        $("#epg_channel_encrypt").attr("src", oprtData.channels[channelIndex].isEncrypt ? imgList.encrypt : imgList.noImg);

        setNextSelectedProgram(oriCIndex, oriPIndex, channelIndex, programIndex);
        //_this.children[(idx + 1) * 7 - 1].setSelectedIndex(programIndex);
    }

    function translateNoProgram(msg) {
        var translated = msg;
        switch (msg) {
            case "No program":
            case "No program information":
                translated = getCurrentContentLanguage(msg);
                break;
            default:
                break;
        }
        return translated;
    }

    function setNextSelectedProgram(oriC, oriP, curC, curP) {
        var nextSelProgram = oprtData.channels[channelIndex].program[curP];

        if (nextSelProgram.secondaryTitle) {
            $("#epg_progrm_name").html(translateNoProgram(nextSelProgram.title) + " - " + nextSelProgram.secondaryTitle);
        }
        else {
            $("#epg_progrm_name").html(translateNoProgram(nextSelProgram.title));
        }
        $("#epg_program_book").attr("src", nextSelProgram.reminder ? imgList.reminder : imgList.noImg);
        //$("#epg_program_record").attr("src", nextSelProgram.record ? imgList.record : imgList.noImg);
        $("#epg_program_time").html(getProgramLocalTime(nextSelProgram.startTime, nextSelProgram.endTime, 4));
        $("#epg_program_detail").html(translateNoProgram(nextSelProgram.detail));
        if ($("#epg_program_detail").height() >= 110) {
            $("#epg_detail_ellipsis").css("visibility", "visible");
        }
        else {
            $("#epg_detail_ellipsis").css("visibility", "hidden");
        }
        programIndex = curP;
        focusToEvent(oriC, oriP, curC, curP);
    }

    function setParamsBeforeFlip(flag) {

        startLine += flag * totalSeconds;
        if (startLine <= leftEdge) startLine = leftEdge;
        if (startLine + totalSeconds >= rightEdge) startLine = rightEdge - totalSeconds;
        endLine = startLine + totalSeconds;
    }


    self.eventOnFocus = function () {
        // console.log("%c current selected index["+this.parent.SelectedIndex+"]["+this.SelectedIndex+"]", "color: green");
    }

    self.KeyUpEventProcess = function () {

    }

    self.keyPressEventProcess = function (m_event) {
        self.KeyDownEventProcess(m_event, true);
    };
    self.KeyDownEventProcess = function (m_event, isRepeat) {
        if (isRepeat && VK_ENTER == m_event.keyCode) return;

        var keyCode = m_event.keyCode;
        switch (keyCode) {
            case VK_CHANNEL_UP:
                keyCHUpHandler();
                break;
            case VK_CHANNEL_DOWN:
                keyCHDownHandler();
                break;
            case VK_INFO:
                keyInfoHandler();
                break;
            case VK_ENTER:
                keyEnterHandler();
                break;
            case VK_RED:
                keyRedHandler();
                break;
            case VK_GREEN:
                keyGreenHandler();
                break;
            case VK_YELLOW:
                keyYellowHandler();
                break;
            case VK_BLUE:
                keyBlueHandler();
                break;
            case VK_RIGHT:
                keyRightHandler();
                break;
            case VK_LEFT:
                keyLeftHandler();
                break;
            case VK_DOWN:
                keyDownHandler();
                break;
            case VK_UP:
                keyUpHandler();
                break;
            case VK_BACK:
                hiWebOsFrame[self.id].close();
                openLiveTVModule([Msg.INFO, 0]);
                break;
            default :
                break;
        }
    }

    function getChSelectedIndex() {
        return channelIndex - startIndex;
    }

    function focusToEvent(oriC, oriP, curC, curP) {
        if (null !== oriC && null !== oriP) {
            if (oriC != curC) {
                $("#epg_ch_" + oriC).attr("class", "normal");
                $("#epg_ch_" + curC).attr("class", "selected");
            }
            if (oriP == currentPlayIndex[oriC]) {
                $("#epg_ch_" + oriC + "_program_" + oriP).attr("class", "epgEventListSelected");
            }
            else{
                $("#epg_ch_" + oriC + "_program_" + oriP).attr("class", "epgEventListNormal");
            }
        }
        if (curP == currentPlayIndex[curC]) {
            $("#epg_ch_" + curC + "_program_" + curP).attr("class", "epgEventListFocus epgEventListSelected");
        }
        else {
            $("#epg_ch_" + curC + "_program_" + curP).attr("class", "epgEventListFocus");
        }
    }

    function keyCHUpHandler() {
        if (!checkFlipMode()) return;

        if (startIndex == 0) {
            if (oprtData.channels.length <= channelMaxRows) {
                //var oriIndex = this.SelectedIndex;
                //this.setSelectedIndex(oprtData.channels.length - 1);
                setNextSelectedChannel(oprtData.channels.length - 1, channelIndex);
            }
            else {
                startIndex = channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows);
                channelIndex = oprtData.channels.length - 1;
                flipFlag = FLIPMODE.CHFLIP;
                getProgramEvent();
            }
        }
        else {
            startIndex -= channelMaxRows;
            channelIndex = startIndex;
            flipFlag = FLIPMODE.CHFLIP;
            getProgramEvent();
        }
        return false;

    }

    function keyCHDownHandler() {
        if (!checkFlipMode()) return;
        if (startIndex == channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows)) {
            if (oprtData.channels.length <= channelMaxRows) {
                //var oriIndex = this.SelectedIndex;
                //this.setSelectedIndex(0);
                setNextSelectedChannel(0, channelIndex);
            }
            else {
                startIndex = 0;
                channelIndex = 0;
                flipFlag = FLIPMODE.CHFLIP;
                getProgramEvent();
            }
        }
        else {
            startIndex += channelMaxRows;
            channelIndex = Math.min(oprtData.channels.length, startIndex + channelMaxRows) - 1;
            flipFlag = FLIPMODE.CHFLIP;
            getProgramEvent();
        }
        return false;

    }

    function keyInfoHandler() {
        var chnl = oprtData.channels[channelIndex];
        var prgrm = chnl.program[programIndex];
        if (chnl.FEPG) {
            openFVPEPGDetailPage(chnl, prgrm, hiWebOsFrame[self.id]);
        }
        else {
            openEPGDetailPage(prgrm, hiWebOsFrame[self.id]);
        }
    }

    function keyEnterHandler() {
        var chnl = oprtData.channels[channelIndex];
        var prgrm = chnl.program[programIndex];
        if (prgrm.endTime < currentTime) {
            DBG_TODO("Freeview key enter.");
        }
        else if (prgrm.startTime > currentTime) {
            if ("" != prgrm.eventId && ("N/A" != prgrm.eventId)) {
                openBookAddOrEditPage(chnl, prgrm, hiWebOsFrame[self.id]);
            }
            else {
                DBG_ERROR("program startTime[" + prgrm.startTime + "], currentTime[" + currentTime + "]");
            }
        }
        else {
            if ("N/A" == prgrm.eventId) {
                // $("#epg_pip_channel").text((chnl.number) + " " + chnl.name);//omg
                // $("#epg_pip_channel").text("");
                var crntChannel = livetvmain.getCurrentChannelInfo();
                if (crntChannel.listUid != chnl.listUid ||
                    crntChannel.playId != chnl.playId ||
                    crntChannel.uid != chnl.uid) {
                    livetvchlist.changeChannel(null, chnl);
                }
                if (livetvmain.getNoSignalVar()) return;
                hiWebOsFrame.lockAllKeys("refresh_epg");
                setTimeout(function () {
                    getProgramEvent();
                    hiWebOsFrame.unLockAllKeys("refresh_epg");
                }, 1000);
            }
            else {
                closeEPGModule();//omg
                openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0]);//omg-2015-11-12
                livetvchlist.changeChannel(null, chnl);
            }
        }
    }

    function keyRedHandler() {
        if (!checkFlipMode()) return;
        openBookSchedulePage(hiWebOsFrame[self.id]);
    }

    function keyGreenHandler() {
        if (!checkFlipMode()) return;
        if (enableThemeColor) {
            openEPGColorPage();
        } else {
            openSwitchListPage();
        }
    }

    function keyYellowHandler() {
        if (!checkFlipMode()) return;
        if (startLine <= leftEdge) {
            DBG_INFO("reach the min day.");
            return false;
        }
        else {
            setParamsBeforeFlip(-8);
            flipFlag = FLIPMODE.DAY;
            getProgramEvent();
        }
    }

    function keyBlueHandler() {
        if (!checkFlipMode()) return;
        if (endLine >= rightEdge) {
            DBG_INFO("reach the max day.");
            return false;
        }
        else {
            setParamsBeforeFlip(8);
            flipFlag = FLIPMODE.DAY;
            getProgramEvent();
        }
    }

    function keyRightHandler() {
        if (!checkFlipMode()) return;
        var crntSelProgram = oprtData.channels[channelIndex].program[programIndex];

        if (crntSelProgram.endTime >= endLine - 60 || programMaxCols - 1 == programIndex) {
            //flip to the next page
            if (endLine < rightEdge) {
                setParamsBeforeFlip(1);
                flipFlag = FLIPMODE.RIGHT;
                getProgramEvent();
                return false;
            }
            else {
                DBG_INFO("reach the right edge.");
                return false;
            }
        }
        else {
            setNextSelectedProgram(channelIndex, programIndex, channelIndex, programIndex + 1);
        }
        return true;

    }

    function keyLeftHandler() {
        if (!checkFlipMode()) return;

        if (0 == programIndex) {
            //flip to the last page
            if (startLine > leftEdge) {
                setParamsBeforeFlip(-1);
                flipFlag = FLIPMODE.LEFT;
                getProgramEvent();
                return false;
            }
            else {
                DBG_INFO("reach the left edge.");
                return false;
            }
        }
        else {
            setNextSelectedProgram(channelIndex, programIndex, channelIndex, programIndex - 1);
        }
        return true;
    }

    function keyDownHandler() {
        if (!checkFlipMode()) return;
        if (oprtData.channels.length - 1 == channelIndex) {
            if (oprtData.channels.length <= channelMaxRows) {
                //var oriIndex = this.SelectedIndex;
                //this.setSelectedIndex(0);
                setNextSelectedChannel(0, channelIndex);
            }
            else {
                startIndex = 0;
                channelIndex = 0;
                flipFlag = FLIPMODE.DOWN;
                getProgramEvent();
            }
            return false;
        }
        else if (channelMaxRows - 1 == channelIndex - startIndex) {
            startIndex += channelMaxRows;
            channelIndex += 1;
            flipFlag = FLIPMODE.DOWN;
            getProgramEvent();
            return false;
        }
        else {
            setNextSelectedChannel(channelIndex + 1, channelIndex);
        }
        return true;
    }

    function keyUpHandler() {
        if (!checkFlipMode()) return;
        if (0 == channelIndex) {
            if (oprtData.channels.length <= channelMaxRows) {
                //var oriIndex = this.SelectedIndex;
                //this.setSelectedIndex(oprtData.channels.length - 1);
                setNextSelectedChannel(oprtData.channels.length - 1, channelIndex);
            }
            else {
                startIndex = channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows);
                channelIndex = oprtData.channels.length - 1;
                flipFlag = FLIPMODE.UP;
                getProgramEvent();
            }
            return false;
        }
        else if (0 == channelIndex - startIndex) {
            startIndex -= channelMaxRows;
            channelIndex -= 1;
            flipFlag = FLIPMODE.UP;
            getProgramEvent();
            return false;
        }
        else {
            setNextSelectedChannel(channelIndex - 1, channelIndex);
        }
        return true;
    }

    function checkFlipMode() {
        if (FLIPMODE.NONE != flipFlag) {
            DBG_ERROR("flip mode error: " + flipFlag);
            return false;
        }
        return true;
    }

    self.switchList = function (list) {
        hiWebOsFrame.startLoading(10, "epg");
        flipFlag = FLIPMODE.LIST;
        initTimeLine();
        getChannelEvent(list);
        hiWebOsFrame[self.id].hiFocus("epg_channel_list");
    }

    self.refreshEPGWhenTimeChanged = function (type, channel_id) {
        if (!hiWebOsFrame[self.id] || !hiWebOsFrame[self.id].visible) return;
        if (!checkFlipMode()) {
            DBG_INFO("epg busy, update queue: " + objToString(epgUpdateQue));
            // if(epgUpdateQue.indexOf(channel_id) < 0) epgUpdateQue.push(channel_id);
            return;
        }
        flipFlag = FLIPMODE.UPDATE;
        hiWebOsFrame.lockAllKeys("update");
        if (1 == type && "undefined" != typeof channel_id) {
            getProgramEventByChannel(channel_id);
        }
        else {
            getProgramEvent();
        }
        refreshTimeLine();
        hiWebOsFrame.unLockAllKeys("update");
    }

    self.refreshPIPChannelInfo = function (chnl) {
        if (!hiWebOsFrame[self.id].visible || null == chnl) return;
        $("#epg_pip_channel").text((chnl.number) + " " + chnl.name);//omg
    }
    self.refreshEPGColorTheme = function (themes) {
        if (!hiWebOsFrame[self.id].visible) return;
        if (oprtData.themeIndex.toString() == themes.toString()) return;
        oprtData.themeIndex = tv ? model.epg.getThemsColor() : themes;
        rewriteEPGUI();
        hiWebOsFrame[self.id].hiFocus();
    }

    function openEPGColorPage() {
        var pageId = "epg_theme_color_page";
        hiWebOsFrame.lockAllKeys("open theme");
        hiWebOsFrame.createPage(pageId, null, hiWebOsFrame[self.id], null, function (p) {
            hiWebOsFrame[pageId] = p;
            epgTheme.rewriteThemePage();
            hiWebOsFrame[pageId].open();
            hiWebOsFrame[pageId].hiFocus();
            hiWebOsFrame.unLockAllKeys("open theme");
        });

    }

    function openSwitchListPage() {
        var pageId = "epg_list_page";
        hiWebOsFrame.lockAllKeys("open list");
        hiWebOsFrame.createPage(pageId, null, hiWebOsFrame[self.id], null, function (p) {
            hiWebOsFrame[pageId] = p;
            epgList.rewriteListPage(currentList);
            hiWebOsFrame[pageId].open();
            hiWebOsFrame[pageId].hiFocus();
            hiWebOsFrame.unLockAllKeys("open list");
        });
    }

    function getNoProgramData() {
        var prgrms = initProgramData();
        prgrms[0] =
        {
            eventId: "N/A",
            name: "No program",
            text: "No program",
            detail: "No program information",
            startTime: startLine,
            endTime: endLine
        };
        return prgrms;
    }

    function initProgramData() {
        var prgrms = [], j;
        for (j = 0; j < programMaxCols; j++) {
            prgrms.push({eventId: j + 1, name: (j + 1) + ""});
        }
        return prgrms;
    }

    function initChannelData() {
        var chnls = [], i, j;
        for (i = 0; i < channelMaxRows; i++) {
            chnls.push({uid: "", program: initProgramData()});
        }
        return chnls;
    }


    function lockEPGPageKeys() {
        DBG_INFO("epg_lock");
        hiWebOsFrame.enablePageKeys(hiWebOsFrame[self.id], []);
    }

    function unLockEPGPageKeys() {
        DBG_INFO("epg_unlock");
        hiWebOsFrame.clearEnablePageKeys(hiWebOsFrame[self.id]);
    }

    function setEnableThemeColor() {
        if ("EU" != InitArea || FREEVIEWTEST) {
            enableThemeColor = false;
            return;
        }
        var currentCountry = hiWebOsFrame.getCurrentCountry();
        var EM_Country = ["Russia_EU", "Uzbekistan_EU", "Kirghizstan_EU", "Tajikistan_EU"];
        if (EM_Country.indexOf(currentCountry) > -1) {
            enableThemeColor = false;
        } else {
            enableThemeColor = true;
        }
    }

    setEnableThemeColor();

    var imgList = {
        noImg: "img/common/transparent.png",
        encrypt: "img/epg/disturb.png",
        lock: "img/epg/lock.png",
        fav: "img/epg/favorite.png",
        record: "img/epg/record.png",
        reminder: "img/epg/reminder.png",
        PURPLE: "img/epg/theme_purple.png",
        GREEN: "img/epg/theme_green.png",
        PINK: "img/epg/theme_pink.png",
        CHFLIP: "img/epg/channelUpDown.png",
        INFO: "img/epg/epg_info.png",
        red: "img/common/red.png",
        green: "img/common/green.png",
        yellow: "img/common/yellow.png",
        blue: "img/common/blue.png"
    };

    self.pageData = {
        epg_title: {Data: "EPG"},
        epg_time: {Data: ""},
        epg_pip_channel: {Data: ""},
        epg_channel_number: {Data: ""},
        epg_channel_name: {Data: ""},
        epg_channel_lock: {Data: imgList.noImg},
        epg_channel_encrypt: {Data: imgList.noImg},
        epg_type_color_purple: {Data: ""},
        epg_type_color_pink: {Data: ""},
        epg_type_color_green: {Data: ""},
        epg_progrm_name: {Data: ""},
        epg_program_book: {Data: imgList.noImg},
        epg_program_time: {Data: ""},
        epg_program_detail: {Data: ""},
        epg_tip_date: {Data: ""},
        epg_tip_tuner: {Data: ""},
        epg_time_line_current: {Data: ""},
        epg_time_axis_0: {Data: ""},
        epg_time_axis_1: {Data: ""},
        epg_time_axis_2: {Data: ""},
        epg_opertion_btn: {
            Data: [{
                flip_text: {Data: "24 +"},
                flip_img: {Data: imgList.blue}
            }, {
                flip_text: {Data: "24 -"},
                flip_img: {Data: imgList.yellow}
            }, {
                flip_text: {Data: enableThemeColor ? "Program Colour" : "Ch. List"},
                flip_img: {Data: imgList.green}
            }, {
                flip_text: {Data: "Schedule"},
                flip_img: {Data: imgList.red}
            }, {
                flip_text: {Data: "More Info"},
                flip_img: {Data: imgList.INFO}
            }, {
                flip_text: {Data: "Page Up/Down"},
                flip_img: {Data: imgList.CHFLIP}
            }]
        },
        langData: {
            "EPG": [],
            "No program": [],
            "No program information": [],
            'Page Up/Down': [],
            "More Info": [],
            'Schedule': [],
            'Day': [],
            'Today': [],
            'Ch. List': [],
            'Program details': [],
            "Program Colour": [],
            'Movie': [],
            'News': [],
            'Sport': [],
            'Shows': [],
            'Child': [],
            'Kids': [],
            'Music': [],
            'Arts': [],
            'Social': [],
            'Education': [],
            'Hobby': [],
            'Series': [],
            'Drama': [],
            'Sun': [],
            'Mon': [],
            'Tue': [],
            'Wed': [],
            'Thu': [],
            'Fri': [],
            'Sat': [],
            'Jan.': [],
            'Feb.': [],
            'Mar.': [],
            'Apr.': [],
            'May.': [],
            'Jun.': [],
            'Jul.': [],
            'Aug.': [],
            'Sep.': [],
            'Oct.': [],
            'Nov.': [],
            'Dec.': [],
            'EPG service is in preparation.': [],
            'Selected channel list is empty.': [],
            "Antenna": [],
            "Cable": [],
            "Satellite": []
        },
        rewrite: rewritePageData
    }

    oprtData.channels = initChannelData();

    self.pageData.operateData = oprtData;

    try {

        if (FREEVIEWTEST) {
            model.epg.onEPGAutoUpdateChaged = self.refreshEPGWhenTimeChanged.bind(this, 0);
        }
        model.fvpepg.onFEPGIsReadyChanged = self.refreshEPGWhenTimeChanged.bind(this, 1);
    }
    catch (ex) {
        // DBG_ERROR(ex.message);
    }
}

var epg = new EPG();

function get_epg_pageData(opts) {
    var caedata = {
        span: [
            "epg_title", "epg_time", "epg_pip_channel", "epg_channel_number",
            "epg_channel_name", "epg_type_color_purple", "epg_type_color_pink",
            "epg_type_color_green", "epg_progrm_name", "epg_program_time",
            "epg_tip_date", "epg_tip_tuner", "epg_time_axis_0", "epg_time_axis_1",
            "epg_time_axis_2"
        ],
        div: ["epg_program_detail", "epg_time_line_current"],
        img: ["epg_channel_lock", "epg_channel_encrypt", "epg_program_book"],
        Ul: [{
            id: "epg_opertion_btn",
            ori: {
                span: ["flip_text"],
                img: ["flip_img"]
            }
        }]
    }
    opts.CaE = generateCaE(caedata, epg);
    opts.CaE[9].enableHtml = true;
    opts.CaE[caedata.span.length].strFilter = true;
    //var ulIdx = caedata.span.length + caedata.div.length + caedata.img.length;
//    opts.CaE[ulIdx].firstFocusId = "epg_program_event";
//    opts.CaE[ulIdx].oriCaE[0].classes = {
//        normal: "epgListChannelNum",
//        disable: "epgListChannelNum",
//        focus: "epgListChannelNum"
//    };
//    opts.CaE[ulIdx].oriCaE[1].classes = {
//        normal: "epgListChannelName",
//        disable: "epgListChannelName",
//        focus: "epgListChannelName"
//    };
//    opts.CaE[ulIdx].oriCaE[2].classes =
//        opts.CaE[ulIdx].oriCaE[3].classes =
//            opts.CaE[ulIdx].oriCaE[4].classes =
//                opts.CaE[ulIdx].oriCaE[5].classes = {
//                    normal: "epgListChannelImg",
//                    disable: "epgListChannelImg",
//                    focus: "epgListChannelImg"
//                };
//    opts.CaE[ulIdx].oriCaE[6].classes = {
//        normal: "epgEventListNormal",
//        disable: "epgEventListDisable",
//        focus: "epgEventListFocus",
//        // selected: "epgEventListFocus",//SDK bug
//        dataSelected: "epgEventListSelected"
//    };
//    opts.CaE[ulIdx].oriCaE[6].NavigationBarConfig.DoubleClass = true;
//
//    opts.CaE[ulIdx].handler = {
//        befDownHandler: epg.keyDownHandler,
//        befUpHandler: epg.keyUpHandler,
//
//        // keyNum1Handler: epg.keyCHUpHandler,
//        // keyNum2Handler: epg.keyCHDownHandler,
//        // keyNum3Handler: epg.keyRedHandler,
//        // keyNum4Handler: epg.keyGreenHandler,
//
//        keyChannelUpHandler: epg.keyCHUpHandler,
//        keyChannelDownHandler: epg.keyCHDownHandler,
//        keyRedHandler: epg.keyRedHandler,
//        keyGreenHandler: epg.keyGreenHandler
//    };
//    // opts.CaE[ulIdx].oriCaE[6].firstFocusId = "event_name";
//    opts.CaE[ulIdx].oriCaE[6].handler = {
//        befRightHandler: epg.keyRightHandler,
//        befLeftHandler: epg.keyLeftHandler,
//        befEnterHandler: epg.keyEnterHandler,
//
//
//        // keyNum5Handler: epg.keyYellowHandler,
//        // keyNum6Handler: epg.keyBlueHandler,
//        // keyNum7Handler: epg.keyInfoHandler,
//
//        keyYellowHandler: epg.keyYellowHandler,
//        keyBlueHandler: epg.keyBlueHandler
//    };
//
//
//    opts.CaE[ulIdx].oriCaE[6].onFocusFun = epg.eventOnFocus;
    return epg.pageData;
}

