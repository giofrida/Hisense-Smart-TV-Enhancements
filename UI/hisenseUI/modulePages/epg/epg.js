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
    FLIPMODE.MERGE = ENUM_INDEX++;
    FLIPMODE.SEEK = ENUM_INDEX++;
    FLIPMODE.TIMEOUT = ENUM_INDEX++;

    var oprtData = {
        currentUTC: 0,
        colorTheme: [
            'Off','Movie', 'News/Factual', 'Shows',
            'Sport', 'Kids', 'Music',
            'Factual', 'Entertainment','Education',
            'Lifestyle', 'Drama', 'Others'
        ],
        themeValue: [0xAAA, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xA, 0xB, 0xC],
        themeValue_freeview: [-1,16, 32, 48,
                        64, 80, 96,
                        112, 49, 144,
                        160, 17, 0
                      ],
        themeIndex: [0, 1, 2],
        channels: []
    };

    var epgChannelIterator, epgEventIterator = [], epgEventOneWinIterator, oneActiveWin = true, currentChannel = {}, currentList = {};
    var channelMaxRows = 5, programMaxCols = 30, maxDay = 7, totalSeconds = 3600 * 3, totalWidth = 1344;
    var startIndex = 0, channelIndex = 0, programIndex = 0, currentPlayIndex = [0, 0, 0, 0, 0, 0];
    var currentTime, baseLine, startLine, endLine, leftEdge, rightEdge;
    var readedCount = 0, timeLineBaseL = 570 - 51, timeLineTimer = 0;
    var flipFlag = FLIPMODE.NONE, epgUpdateQue = [],backStartTime = [],backEndTime = [],requestOut = [];
    var mediaBaseURL = "", mediaTimeout = 0, enableThemeColor = true;
    var backChannelIndex = -1,backStartLine = -1,backEndLine = -1,backProgramIndex = -1;
    var preloadingTimer = null,delayLoadMS = 600,delayLoadTimer = null,refreshDelayTimer=null;
    var InputTimeout=null,inputedNum='';
    var requestTimeOut=-300;
    var pre_data_loading = false;
    var pageToken = "0";
    var pagePreloadedArr = [];
    var lockOn;
    var preLoadTimer = null;

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


    function resetBackArguments() {
       // backChannelIndex = backStartLine = backEndLine = backProgramIndex = -1;
    }
     self.initBcakArguments = function() {
        // resetBackArguments();
     }

    function initTVState() {
        if (!tv) return;
        navStatePause(true);
        pauseHBBTV();
        if (FREEVIEWTEST) {
            model.epg.setBarkerChannelActive(parseInt(currentChannel.channelId));
        }
        setMheg5Status(0);
    }

    function initTimeLineTimer() {
        var timeLineL = timeLineBaseL + durationTimeToWidth(currentTime - baseLine);
        $("#epg_time_line_current").css("left", timeLineL + "px");
        clearInterval(timeLineTimer);
        timeLineTimer = setInterval(refreshTimeLine, 30 * 1000);
    }

    function preLoadData(thisPageToken) {
        //clearPreloadingTimer();
        //preloadingTimer = setTimeout(function() {
        //    pre_data_loading = true;
        //    //DBG_INFO("start all preload thisPageToken="+thisPageToken);
        //    getPreLeftProgramEvent(thisPageToken);
        //    getPreTopProgramEvent(thisPageToken);
        //    getPreBottomProgramEvent(thisPageToken);
        //    getPreRightProgramEvent(thisPageToken);
        //    //DBG_INFO("end all preload thisPageToken="+thisPageToken);
        //},3000);
    }

    function creatPacktoken() {
        //var prefixInt = parseInt(Math.random()*10000);
        //var postfixInt = parseInt(Math.random()*10000);
        //pageToken = prefixInt + "1" + postfixInt;
        //if(tv) model.fvpepg.sendPageToken(pageToken);
        //preLoadData(pageToken);
        //var pageKey = startIndex+"_"+startLine;
        //pagePreloadedArr[pageKey] = true;
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
        if(backStartLine >=0) {
            startLine = backStartLine;
            endLine = backEndLine;
            //backStartLine = backEndLine = -1
        }
        endLine = startLine + totalSeconds;
        leftEdge = ENABLE_FVP ? (baseLine - (maxDay * 24) * 3600) : baseLine;
        rightEdge = baseLine + ((24 - d.getUTCHours()) + maxDay * 24) * 3600;
        initTimeLineTimer();
    }

    function initThemeColor() {

        if ("EU" != InitArea) {
            enableThemeColor = false;
            oprtData.themeIndex = [0, 1, 2];
            return;
        }
        try {
            var currentCountry = hiWebOsFrame.getCurrentCountry();
            var EM_Country = ["Russia_EU", "Uzbekistan_EU", "Kirghizstan_EU", "Tajikistan_EU"];
            if (EM_Country.indexOf(currentCountry) > -1) {
                enableThemeColor = false;
            } else {
                enableThemeColor = true;

                oprtData.themeIndex = tv ? model.epg.getThemsColor() : [1, 2, 3];
                //if (0 == oprtData.themeIndex[0] + oprtData.themeIndex[1] + oprtData.themeIndex[2]) {
                   // oprtData.themeIndex = [0, 1, 2];
                //}
                DBG_ALWAYS("theme color: " + objToString(oprtData.themeIndex));
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
        if(backChannelIndex >=0) {
            channelIndex = backChannelIndex;
            startIndex = channelMaxRows * Math.floor(channelIndex / channelMaxRows);
            //backChannelIndex = -1
        }

        programIndex = 0;
        currentPlayIndex = [0, 0, 0, 0, 0, 0];
        flipFlag = FLIPMODE.START;
        pagePreloadedArr = [];
        return true;
    }

    function navStatePause(pauseFlag){
        try{
            if(tv){
                if(pauseFlag==true){
                    model.system.setLauncherIsStarting(0);//pause
                }else{
                    model.system.setLauncherIsStarting(1);//resume
                }
            }
        }catch(ex){DBG_ERROR('navStatePauseOrResume is error:'+ex.message)}
    }

    function getChannelEvent(list) {
        hiWebOsFrame.lockAllKeys("get channel");
       //epgChannelIterator = createChannelIterator(list, onGetChannelsEvent, 1);

        epgChannelIterator = createEPGChannelIterator(list, onGetChannelsEvent, 1);
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

    function getProgramEventByChannel(svl_id,requestOut) {
         //hiWebOsFrame.lockAllKeys("get program");
        //DBG_ALWAYS('getProgramEventByChannel');
        lockEPGPageKeys();
        for (var i = 0; i < channelMaxRows; i++) {
            var chnl = oprtData.channels[i + startIndex];
            if (!chnl || "" == chnl.serviceId) continue;
            if (svl_id == chnl.serviceId) {
                chnl.FEPG = baseLine > startLine;
                if (chnl.FEPG) {
                    // epgUpdateQue.push(svl_id);
                    //DBG_ALWAYS('createFreeviewIterator');
                    //DBG_ALWAYS('send to bottom startLine:'+startLine+',endLine:'+endLine);
                    //DBG_ALWAYS('send to bottom startLine:'+startLine+',endLine:'+endLine);
                    var iterator = createFreeviewIterator(chnl, startLine, endLine, onGetProgramsEventByChannel, '0', pageToken);
                    //DBG_ALWAYS('iterator.readNextRows');
                    iterator.readNextRows(programMaxCols);
                    return;
                }
                else {

                }
            }
        }
        //hiWebOsFrame.unLockAllKeys("get program");
        unLockEPGPageKeys();
        flipFlag = FLIPMODE.NONE;
        checkFVEPGUpdate(svl_id);
    }

    function getNoProgramEventByChannel(svl_id,requestOut) {
        for (var i = 0; i < channelMaxRows; i++) {
            var chnl = oprtData.channels[i + startIndex];
            if (!chnl || "" == chnl.serviceId) continue;
            if (svl_id == chnl.serviceId) {
                chnl.FEPG = baseLine > startLine;
                if (chnl.FEPG) {
                    // epgUpdateQue.push(svl_id);
                    try{
                        onGetNOProgramsEventByChannel(chnl,requestOut)
                    }catch(ex){DBG_ERROR('getNoProgramEventByChannel is error')}
                    return;
                }
            }
        }
        flipFlag = FLIPMODE.NONE;
        //checkFVEPGUpdate(svl_id);
    }

    function onGetProgramsEventByChannel(chnl, m_event) {
        //DBG_ALWAYS('start onGetProgramsEventByChannel');
        if (null == m_event) {
            chnl.program = getNoProgramData();
            checkReadedCount(channelMaxRows, chnl.serviceId, chnl.FEPG);
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            if (chnl.FEPG) {
                //DBG_ALWAYS('onGetProgramsEventByChannel');
                chnl.program = eventRowsToFreeview(chnl, m_event.rows);
                //DBG_ALWAYS("chnl:"+chnl+'chnl.program:'+objToString(chnl.program));
                chnl.logo = chnl.program[0].channelLogo;
            }
            else {

            }
            checkReadedCount(channelMaxRows, chnl.serviceId, chnl.FEPG);
        }

    }

    function onGetNOProgramsEventByChannel(chnl,requestOut) {
        if (requestOut==requestTimeOut) {
            //DBG_ALWAYS('chnl:'+chnl+"-requestTimeOut:"+requestOut);
            chnl.program = getNoCatchUpProgram();
            //DBG_ALWAYS('getNoCatchUpProgram chl.program:'+objToString(chnl));
            checkReadedCount(channelMaxRows, chnl.serviceId, chnl.FEPG,requestOut);
        }

    }

    function getNoCatchUpProgram(){
        var prgrms = initProgramData();
        var prgrm={};
        prgrm.eventId = "";
        prgrm.programId = "N/A";
        prgrm.attr = 0;
        prgrm.channelLogo = "";
        prgrm.contentImage = "";

        //prgrm.title = "Loading...";
        //prgrm.secondaryTitle = "";
        //// prgrm.runningTime = 0;
        //prgrm.text = "Loading...";
        //prgrm.detail = "Loading...";
        prgrm.title = "No catch up programme";
        prgrm.secondaryTitle = "";
        // prgrm.runningTime = 0;
        prgrm.text = "No catch up programme information";
        prgrm.detail = "No catch up programme information";


        prgrm.guidance = "";
        prgrm.theme = 0;
        prgrm.startTime = startLine;
        prgrm.endTime = endLine;
        prgrm.mediaURL = "";
        prgrm.reminder = false;
        prgrm.record = false;
        prgrm.available = AVLFlag.NOT_AVAILABLE;
        prgrm.adFlag = "";
        prgrm.hdFlag = ""
        prgrm.subt = "";
        prgrms[0]=prgrm;
        //DBG_ALWAYS('getNoCatchUpProgram prgrms:'+objToString(prgrms));
        return prgrms;
    }

    var preLoadTimePeriod = function (time) {
        var start = freeview_util.calculateLowerTime(time);
        var step = time - start;
        if(step <(4 * 3600)) {
            //进行左侧预计加载
            return [start - 12 * 3600 , start];
        }

        if(step >(8 * 3600)) {
            //进行右侧预计加载
            return [start + 12 * 3600 , start + 24 * 3600 ];
        }
        return [0, 0];
    };

    var preLoadLRData = function(chnls, preTime) {
        if(!!chnls) getFvpPrograms(chnls, preTime[0], preTime[1], null, false, function() {});
    };

    var  preLoadUDData = function(startIndex, startLine, endLine) {
            //getPreTopProgramEvent(startIndex, startLine, endLine);
            //getPreBottomProgramEvent(startIndex, startLine, endLine);
    };

    function getProgramEvent( noDelayFlag ) {
        try {
            //DBG_INFO("start[" + startLine + "], end[" + endLine + "]");
            epgUpdateQue = [];
            backStartTime = [];
            backEndTime = [];
            requestOut = [];

            // hiWebOsFrame.lockAllKeys("get program");
            lockEPGPageKeys("getProgramEvent");
            readedCount = 0;
            programIndex = 0;
            epgEventIterator = [];
            var channelIds = "",
                serviceIds = "",
                i, chnl = null;
            if (ENABLE_FVP && baseLine > startLine) {
                serviceIds=[];
                var playIds=[],chnls=[];
                for (i = 0; i < channelMaxRows; i++) {
                    chnl = oprtData.channels[i + startIndex];
                    if (!chnl || "" == chnl.serviceId) continue;
                    chnl.FEPG=true;
                    serviceIds.push(chnl.serviceId);
                    playIds.push(chnl.playId);
                    chnls.push($.extend({},chnl));
                }
                DBG_ALWAYS('fvp serviceIds:'+objToString(serviceIds)+",playIds:"+objToString(playIds));
                if (!!serviceIds) {
                    if(!!chnls) getFvpPrograms(chnls, startLine, endLine, null, true, onGetFvpNotMergePrograms);
                }
                unLockEPGPageKeys("getProgramEvent bepg");
            } else {
                for (i = 0; i < channelMaxRows; i++) {
                    chnl = oprtData.channels[i + startIndex];
                    if (!chnl || "" == chnl.uid)continue;
                    channelIds += (chnl.uid + ",");
                    serviceIds += (chnl.playId + ",");
                }
                if ("" !== channelIds) {
                    channelIds = channelIds.slice(0, -1);
                    serviceIds = serviceIds.slice(0, -1);
                    epgEventOneWinIterator = createOneActiveWinProgram(
                        channelIds, serviceIds, startLine, endLine,
                        onGetProgramEventInActiveWin);
                    epgEventOneWinIterator.seekToRow(0, TableIterator.SEEK_SET);
                    epgEventOneWinIterator.readNextRows(programMaxCols);
                }
            }
            var preTime = preLoadTimePeriod(startLine);
            if(preLoadTimer) {
                clearTimeout(preLoadTimer);
                preLoadTimer = null;
            }
            if(preTime[0] > 0) {
                preLoadTimer = setTimeout(preLoadLRData.bind(null, chnls, preTime), 2000);
            }

           /* if(preloadingTimer) {
                clearTimeout(preloadingTimer);
                preloadingTimer = null;
            }
            preloadingTimer = setTimeout(preLoadUDData.bind(null,startIndex, startLine, endLine), 3000);*/

        } catch ( ex ) {
            DBG_ERROR(ex.message);
            unLockEPGPageKeys();
        }
    }


    function getPreLeftProgramEvent(thisPageToken) {
        try {
            //DBG_INFO("start getPreLeftProgramEvent now start[" + startLine + "], PRE start[" + (startLine - totalSeconds) + "] 1 thisPageToken="+thisPageToken);
            for (i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + startIndex];
                if (!chnl || "" == chnl.uid) {
                    continue;
                }
                createFreeviewIterator(chnl, (startLine - totalSeconds), (endLine - totalSeconds), onGetProgramsEvent, '1', thisPageToken);
                createFreeviewIterator(chnl, (startLine - 2 * totalSeconds), (endLine - 2 * totalSeconds), onGetProgramsEvent, '1', thisPageToken);

            }
            //DBG_INFO("end getPreLeftProgramEvent now start[" + startLine + "], PRE start[" + (startLine - totalSeconds) + "]  1 thisPageToken="+thisPageToken);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
    function getPreTopProgramEvent(startIndex, startLine, endLine) {
        var top_startIndex = startIndex - channelMaxRows;
        if (startIndex == 0) {
            if (oprtData.channels.length <= channelMaxRows) {
                return;
            }
            else {
                top_startIndex = channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows);
            }
        }
        try {
            //DBG_INFO("start getPreTopProgramEvent now start[" + startLine + "] 1 thisPageToken="+thisPageToken);
            var serviceIds=[],playIds=[],chnls=[];
            for (i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + top_startIndex];
                if (!chnl || "" == chnl.uid) {
                    continue;
                }
                serviceIds.push(chnl.serviceId);
                playIds.push(chnl.playId);
                chnls.push($.extend({},chnl));
            }

            if(!!chnls) getFvpPrograms(chnls,  startLine, endLine, null, function() {});
            //DBG_INFO("end getPreTopProgramEvent now start[" + startLine + "] 1 thisPageToken="+thisPageToken);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
    function getPreBottomProgramEvent(startIndex, startLine, endLine) {
        var bottom_startIndex = startIndex + channelMaxRows;
        if (startIndex == channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows)) {
            if (oprtData.channels.length <= channelMaxRows) {
               return;
            }
            else {
                bottom_startIndex = 0;
            }
        }
        try {
            //DBG_INFO("start getPreBottomProgramEvent now start[" + startLine + "] 1 thisPageToken="+thisPageToken);
            var serviceIds=[],playIds=[],chnls=[];
            for (i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + bottom_startIndex];
                if (!chnl || "" == chnl.uid) {
                    continue;
                }
                serviceIds.push(chnl.serviceId);
                playIds.push(chnl.playId);
                chnls.push($.extend({},chnl));
            }
            if(!!chnls) getFvpPrograms(chnls,  startLine, endLine, null, function() {});
            //DBG_INFO("end getPreBottomProgramEvent now start[" + startLine + "] 1 thisPageToken="+thisPageToken);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
    function getPreRightProgramEvent(thisPageToken) {
        try {
            //DBG_INFO("start getPreRightProgramEvent now start[" + startLine + "] 1 thisPageToken="+thisPageToken);
            for (i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + startIndex];
                if (!chnl || "" == chnl.uid) {
                    continue;
                }
                createFreeviewIterator(chnl, (startLine + totalSeconds), (endLine + totalSeconds), onGetProgramsEvent, '1', thisPageToken);
            }
            //DBG_INFO("end getPreRightProgramEvent now start[" + startLine + "] 1 thisPageToken="+thisPageToken);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function onGetProgramsEvent(chnl, m_event) {
        if (null == m_event) {
            chnl.program = getNoProgramData();
            checkReadedCount(readedCount + 1, null, chnl.FEPG);
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            if (chnl.FEPG) {
                //DBG_ALWAYS('onGetProgramsEvent')
                chnl.program = eventRowsToFreeview(chnl, m_event.rows);
                chnl.logo = chnl.program[0].channelLogo;
            }
            else {
                chnl.program = eventRowsToProgram(chnl, m_event.rows);
                chnl.logo = "";
            }
            checkReadedCount(readedCount + 1, null, chnl.FEPG);
        }

    }


    function onGetProgramEventInActiveWin(m_event) {
        var chnl = oprtData.channels[readedCount + startIndex];
        if (null == m_event) {
            if (chnl) {
                chnl.program = getNoProgramData();
            }
            checkReadedCount(readedCount + 1, null, false);
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            chnl.program = eventRowsToProgram(chnl, m_event.rows);
            readedCount++;
            // DBG_ERROR("next uid: " + oprtData.channels[readedCount + startIndex].uid);
            if (readedCount == channelMaxRows) {
                checkReadedCount(readedCount, null, false);
            }
            else if (!oprtData.channels[readedCount + startIndex] || "" == oprtData.channels[readedCount + startIndex].uid) {
                // onGetProgramEventInActiveWin(null);
                checkReadedCount(channelMaxRows, null, false);
            }
            else {
                epgEventOneWinIterator.seekToRow(readedCount, TableIterator.SEEK_SET);
                epgEventOneWinIterator.readNextRows(programMaxCols);
            }
        }
    }

    function mergeFEPG(chlEvents) {
        try{
            if(readedCount!=channelMaxRows){
                DBG_ERROR('discard FEPG data, bottom data not ready. readCount:'+readedCount);
                return;
            }
            flipFlag = FLIPMODE.MERGE;
            lockEPGPageKeys('merge');
            var i;
            for ( i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + startIndex];
                if(tv){
                    if (!chnl || "" == chnl.serviceId ) {
                        continue;
                    }
                    if( !chlEvents["a_" + chnl.serviceId] || chlEvents["a_" + chnl.serviceId].length == 0)  {
                        chnl.logo = freeview_manager.getChannelLogo(chnl.serviceId);
                        continue;
                    }
                    onMergeFEPG(chnl,chlEvents["a_" + chnl.serviceId])
                }else{
                    if (!chnl || "" == chnl.serviceId || !chlEvents[chnl.serviceId]) {
                        continue;
                    }
                    onMergeFEPG(chnl,chlEvents[chnl.serviceId])
                }
            }
            if(i==channelMaxRows){
                flipFlag = FLIPMODE.NONE;
            }
            checkReadedCount(channelMaxRows, null, true);
        }catch(ex){DBG_ERROR('mergeFEPG is error:'+ex.message)}

    }

    function onMergeFEPG(chnl, m_event) {
        try {
            //DBG_ALWAYS('onMergeFEPG');
            mergeProgramAttr(m_event, chnl.program);
            chnl.logo = chnl.program[0].channelLogo;
            if(!chnl.logo && !!m_event && m_event.length > 0) {
                chnl.logo =m_event[0].channelLogo;
            }
            if(!chnl.logo) {
                chnl.logo = chnl.program[1].channelLogo;
            }
            if(!chnl.logo) {
                chnl.logo = freeview_manager.getChannelLogo(chnl.serviceId);
            }
        } catch ( ex ) {
            DBG_ERROR(ex.message);
            flipFlag = FLIPMODE.NONE;
        }

    }

    function mergeProgramAttr(src, dest) {
        for (var j = 0; j < dest.length; j++) {
            for (var i = 0; i < src.length; i++) {
                if (parseInt(src[i].eventId) == dest[j].eventId)
                {
                    dest[j].secondaryTitle = src[i].secondaryTitle;
                    dest[j].contentImage = src[i].contentImage;
                    if(src[i].channelLogo!=''){
                        dest[j].channelLogo = src[i].channelLogo;
                    }
                    dest[j].available = src[i].available;
                    dest[j].program_id = src[i].program_id;
                    //dest[j].availableForBook = src[i].available;
                    dest[j].mediaURL = src[i].mediaURL;
                    //adFlag hdFlag subt
                    dest[j].adFlag = parseInt(src[i].program_ad);
                    dest[j].hdFlag = parseInt(src[i].hd_or_sd);
                    dest[j].subt = parseInt(src[i].subtitle);
                    dest[j].theme = parseInt(src[i].genre);
                    src.splice(i, 1);
                    break;
                }
            }
        }
    }


    function getLastVisibleProgram() {
        var i, prgrms = oprtData.channels[channelIndex].program;
        for (i = programMaxCols - 1; i >= 0; i--) {
            if (isNULLProgram(prgrms[i])) continue;
            if (prgrms[i].startTime < endLine) return i;
        }
        return 0;
    }

    function getFirstPlayingProgram() {
        if (startLine != baseLine) return 0;
        var i, prgrms = oprtData.channels[channelIndex].program;
        for (i = 0; i < prgrms.length; i++) {
            if (isNULLProgram(prgrms[i])) continue;
            if (isCurrentPlay(prgrms[i].startTime, prgrms[i].endTime)) return i;
        }
        return 0;
    }

    function checkReadedCount( cnt, uid , EPGOnMerge) {
        readedCount = cnt;
            if (readedCount == channelMaxRows) {
                resetEventPosition();
                resetEventOperateData();
                if (!refreshTimeAxises()) return; //[场测][意大利]意大利DVb-T搜台-进入EPG，在某个显示No program的频道上点击OK键，导致时间线跑到了屏幕左侧
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
                    case FLIPMODE.TIMEOUT:
                        programIndex = 0;
                        break;
                    default:
                        break;
                }
            //DBG_ALWAYS('rewriteDataOnly');
            if(flipFlag!=FLIPMODE.UPDATE || !ENABLE_FVP){
                hiWebOsFrame[self.id].rewriteDataOnly();
            }
            // hiWebOsFrame.unLockAllKeys("get program");
            unLockEPGPageKeys();
            showEPGPage();
            //DBG_ALWAYS('requestOut:'+requestOut);
            handleFVPProcess(EPGOnMerge);
        }
    }

    /**
     * 获取fvp节目信息
     * @param EPGNotMerge 是否合并网络节目信息
     */
    function handleFVPProcess(EPGNotMerge){
        try{
            if (ENABLE_FVP && !EPGNotMerge) {
                var serviceIds=[],playIds=[],chnls=[];
                for (var i = 0; i < channelMaxRows; i++) {
                    var chnl = oprtData.channels[i + startIndex];
                    if (!chnl || "" == chnl.serviceId) continue;
                    serviceIds.push(chnl.serviceId);
                    playIds.push(chnl.playId);
                    chnls.push($.extend({},chnl));
                }
                DBG_ERROR('fvp serviceIds:'+objToString(serviceIds)+",playIds:"+objToString(playIds));
                if (!!serviceIds) {
                    if(!!chnls) getFvpPrograms(chnls, startLine, endLine, null, true, onGetFvpPrograms)
                }
            }
        }catch(ex){DBG_ERROR(ex.stack)}

    }

    function onGetFvpPrograms(fvpEvents){
        //DBG_INFO("fvpEvents:"+objToString(fvpEvents));
        //DBG_INFO("fvpEvents length:"+fvpEvents.length);
            if (!hiWebOsFrame.isCurrentModule("epg")) {
                DBG_ERROR("currentModule："+hiWebOsFrame.currentPage);
                return;
            }
            //get program from network
            mergeFEPG(fvpEvents);

    }

    function onGetFvpNotMergePrograms( fvpEvents ) {
        //DBG_INFO("fvpEvents:"+objToString(fvpEvents));
        DBG_INFO("fvpEvents length:" + fvpEvents.length);
        lockEPGPageKeys("onGetFvpNotMergePrograms");
        if (!hiWebOsFrame.isCurrentModule("epg")) {
            DBG_ERROR("currentModule：" + hiWebOsFrame.currentPage);
            unLockEPGPageKeys("onGetFvpNotMergePrograms return");
            return;
        }
        var i;
        for (i = 0; i < channelMaxRows; i++) {
            var chnl = oprtData.channels[i + startIndex];
            if (tv) {
                if (!chnl || "" == chnl.serviceId ) {
                    //chnl.program=getNoProgramData(); error
                    continue;
                }
                if(!fvpEvents["a_" + chnl.serviceId]) {
                    chnl.program=getNoProgramData();
                    chnl.logo = freeview_manager.getChannelLogo(chnl.serviceId);
                    continue;
                }
                chnl.program = eventRowsToFreeview(chnl, fvpEvents["a_" + chnl.serviceId]);
                chnl.logo = chnl.program[0].channelLogo;
                if(chnl.logo == "") {
                    chnl.logo = freeview_manager.getChannelLogo(chnl.serviceId);
                }
		if(!chnl.logo) {
                    chnl.logo = chnl.program[1].channelLogo;
                }
            }
        }
        //if (i == channelMaxRows) {
        //    flipFlag = FLIPMODE.NONE;
        //}
        unLockEPGPageKeys("onGetFvpNotMergePrograms");
        checkReadedCount(channelMaxRows, null, true);

    }

    function getEPGTime() {
        recheckDSTSeconds();
        if(currentTime == null || !currentTime)  {
           return;
        }
        // var utcdate = new Date((currentTime + hisenseUITZSeconds + hisenseUIDSTSeconds) * milliBase);
        var utcdate = new Date(getLocalTimeByUTC(currentTime) * milliBase);
        var formatHour = getHourByFormat(utcdate.getUTCHours(), hisenseUITimeFormat);
        var localtime = formatHour.HOUR + ':' + ("0" + utcdate.getUTCMinutes()).slice(-2) + formatHour.APM.replace(/\s+$/, '');
        var localweek = weekShort[utcdate.getUTCDay()];
        var localdate = ('0' + utcdate.getUTCDate()).slice(-2) + ", " + getCurrentContentLanguage(month[utcdate.getUTCMonth()]);
        if (0 && "EU" == InitArea) {
            localdate = ('0' + utcdate.getUTCDate()).slice(-2) + "-" + ('0' + (utcdate.getUTCMonth() + 1)).slice(-2) + "-" + (utcdate.getFullYear());
        }
        return localtime + " " + getCurrentContentLanguage(localweek) + " " + localdate;
    }


    function getPBBTypeColor(theme) {
        var src = imgList.noImg;
        if (!enableThemeColor) return src;
        if(baseLine > startLine) { //freeview
            switch (theme) {
                case oprtData.themeValue_freeview[oprtData.themeIndex[0]]:
                    src = imgList.PURPLE;
                    break;
                case oprtData.themeValue_freeview[oprtData.themeIndex[1]]:
                    src = imgList.GREEN;
                    break;
                case oprtData.themeValue_freeview[oprtData.themeIndex[2]]:
                    src = imgList.PINK;
                    break;
                default:
                    break;
            }
        } else {
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




    self.getThemeText = function(theme){
        if (!enableThemeColor) return "";
        var text = ""

        if(baseLine > startLine) { //freeview
            switch (theme) {
                case oprtData.themeValue_freeview[oprtData.themeIndex[0]]:
                    text = oprtData.colorTheme[oprtData.themeIndex[0]];
                    break;
                case oprtData.themeValue_freeview[oprtData.themeIndex[1]]:
                    text =  oprtData.colorTheme[oprtData.themeIndex[1]];
                    break;
                case oprtData.themeValue_freeview[oprtData.themeIndex[2]]:
                    text = oprtData.colorTheme[oprtData.themeIndex[2]];
                    break;
                default:
                    break;
            }
            return text;
        }else {
            switch ((theme >> 4)) {
                case oprtData.themeValue[oprtData.themeIndex[0]]:
                    text = oprtData.colorTheme[oprtData.themeIndex[0]];
                    break;
                case oprtData.themeValue[oprtData.themeIndex[1]]:
                    text = oprtData.colorTheme[oprtData.themeIndex[1]];
                    break;
                case oprtData.themeValue[oprtData.themeIndex[2]]:
                    text = oprtData.colorTheme[oprtData.themeIndex[2]];
                    break;
                default:
                    break;
            }
            return text;
        }

    }
    self.getPBBTypeColor = getPBBTypeColor;

    function getEventImg(prgrm, fepg) {
        if(fepg){
            return AVLFlag.AVAILABLE == prgrm.available ? imgList.canPlay :
            AVLFlag.COMMING_SOON == prgrm.available ? imgList.comingSoon : imgList.noImg;
        }
        else {
            return prgrm.record ? imgList.record :
                prgrm.reminder ? imgList.reminder : imgList.noImg;
        }
    }

    function getKeyEventImg(prgrm, fepg) {
        if(fepg){
            return AVLFlag.AVAILABLE == prgrm.available ? imgList.canPlay :(FREEVIEWTEST && ENABLE_FVP && AVLFlag.AVAILABLE == prgrm.available) ? imgList.canPlay:
                AVLFlag.COMMING_SOON == prgrm.available ? imgList.comingSoon : imgList.noImg;
        }
        else {
            return prgrm.record ? imgList.record :
                prgrm.reminder ? imgList.reminder : (FREEVIEWTEST && ENABLE_FVP && AVLFlag.AVAILABLE == prgrm.available) ? imgList.canPlay:imgList.noImg;
        }

        /*if(fepg){
            return AVLFlag.AVAILABLE == prgrm.available ? imgList.canPlay :(FREEVIEWTEST && ENABLE_FVP && AVLFlag.AVAILABLE == prgrm.availableForBook) ? imgList.canPlay:
                AVLFlag.COMMING_SOON == prgrm.available ? imgList.comingSoon : imgList.noImg;
        }
        else {
            return prgrm.record ? imgList.record :
                prgrm.reminder ? imgList.reminder : (FREEVIEWTEST && ENABLE_FVP && AVLFlag.AVAILABLE == prgrm.availableForBook) ? imgList.canPlay:imgList.noImg;
        }*/
    }

    function getKeyEventBookImg(prgrm, fepg) {
        if(fepg){
            return imgList.noImg;
        }
        else {
            return prgrm.record ? imgList.record :
                prgrm.reminder ? imgList.reminder : imgList.noImg;
        }
    }

    var hide_div_for_epg_img;
    hide_div_for_epg_img = document.createElement("div");
    hide_div_for_epg_img.style.display = "none";
    document.body.appendChild(hide_div_for_epg_img);

    function rewritePageData(pageData) {
        if (oprtData.channels.length == 0) return;
        var chnl = oprtData.channels[channelIndex];
        //DBG_ALWAYS('rewite Page:channelIndex'+channelIndex+",chnl:"+objToString(chnl));
       /* if(backProgramIndex >= 0) {
            programIndex = backProgramIndex;
            var tempProgramId = chnl.program[programIndex].programId;
            if(tempProgramId=="") {
                programIndex = 0;
            }
            //DBG_INFO("programIndex = " + programIndex);
            //backProgramIndex = -1
        }*/
        var cur_prgrm  = chnl.program[programIndex];
        //DBG_ALWAYS('rewite Page cur_prgrm programIndex:'+programIndex);
        //DBG_ALWAYS('rewite Page cur_prgrm:'+objToString(cur_prgrm));
        var bookFlag = schedule.getIsBookingByProgram(cur_prgrm);
        cur_prgrm.reminder = bookFlag.reminder;
        cur_prgrm.record = bookFlag.record;

        pageData.epg_title.Data = FREEVIEWTEST ? "" : "EPG";
        pageData.epg_fvp_logo.Data = ENABLE_FVP ? imgList.fvpLogo :FREEVIEWTEST?imgList.fhdLogo: imgList.noImg;
        pageData.epg_time.Data = getEPGTime();

        // pageData.epg_channel_number.Data = chnl.number;
        // pageData.epg_channel_name.Data = chnl.name;


        // pageData.epg_pip_channel.Data = pageData.epg_channel_number.Data + " " + pageData.epg_channel_name.Data;

        var crntChannel = livetvmain.getCurrentChannelInfo();
        pageData.epg_pip_channel.Data = crntChannel.name;

        // pageData.epg_channel_fav.Data = chnl.favType ? imgList.fav : imgList.noImg;
        // pageData.epg_channel_lock.Data = chnl.isLock ? imgList.lock : imgList.noImg;
        // pageData.epg_channel_encrypt.Data = chnl.isEncrypt ? imgList.encrypt : imgList.noImg;

        pageData.epg_type_color_purple.Data = oprtData.colorTheme[oprtData.themeIndex[0]];
        pageData.epg_type_color_green.Data = oprtData.colorTheme[oprtData.themeIndex[1]];
        pageData.epg_type_color_pink.Data = oprtData.colorTheme[oprtData.themeIndex[2]];

        pageData.epg_type_color_purple.disable = !enableThemeColor;
        pageData.epg_type_color_green.disable = !enableThemeColor;
        pageData.epg_type_color_pink.disable = !enableThemeColor;

        try {
            pageData.epg_opertion_btn.Data[2].flip_text.Data = enableThemeColor ? "Program Colour" : "Ch. List";
        }
        catch (ex) {

        }


        pageData.epg_channel_name.Data = cur_prgrm.title;
        //DBG_ALWAYS('cur_prgrm.title:'+cur_prgrm.title);
        pageData.epg_progrm_name.Data = cur_prgrm.secondaryTitle;
        pageData.epg_program_book_flag.Data = getEventImg(cur_prgrm, chnl.FEPG);
        // if(cur_prgrm.secondaryTitle){
        // pageData.epg_progrm_name.Data += (" - " + cur_prgrm.secondaryTitle);
        // }
        //pageData.epg_program_time.Data = getProgramLocalTime(oprtData.channels[channelIndex].program[programIndex].startTime, oprtData.channels[channelIndex].program[programIndex].endTime, 4);
        pageData.epg_program_time.Data = getProgramLocalTime(oprtData.channels[channelIndex].program[programIndex].startTime, oprtData.channels[channelIndex].program[programIndex].endTime, 1,1);
        pageData.epg_program_detail.Data = oprtData.channels[channelIndex].program[programIndex].detail;

        pageData.epg_tip_tuner.Data = currentList.name;
        pageData.epg_time_line_current.Data = UTCToLocalTime(currentTime);
        pageData.epg_time_line_current.disable = ( currentTime > endLine || currentTime < startLine);
        pageData.epg_channel_list.Data = [];
        pageData.epg_channel_list.disableItem = [];
        var i, j;
        for (i = 0; i < 3; i++) {
            var axisItem = pageData.epg_time_axis_panel.Data[i];
            axisItem.axis_time.Data = UTCToLocalTime(startLine + i * 3600);
            axisItem.axis_title.Data = "";
        }
        setAxisItemTitle(pageData.epg_time_axis_panel.Data, startLine);

        pageData.epg_time_left_tip.disable = startLine <= leftEdge;
        pageData.epg_time_right_tip.disable = endLine >= rightEdge;

        try{
            for (i = 0; i <= oprtData.channels.length; i++) {
            if((typeof(oprtData.channels[i].logo) != "undefined")&&
               (hide_div_for_epg_img.querySelectorAll("img[src='" +oprtData.channels[i].logo+ "']").length <= 0)){
                hide_div_for_epg_img.innerHTML += "<img src ='" + oprtData.channels[i].logo + "'/>";
            }
        }
        }catch(e){

        }

        for (i = 0; i < channelMaxRows; i++) {
            var chnl = oprtData.channels[i + startIndex];
            if (chnl) {
                pageData.epg_channel_list.Data.push({
                    channel_number: {Data: chnl.number, disable: false},
                    channel_name: {Data: chnl.name, disable: false},
                    channel_fav: {Data: chnl.favType ? imgList.favorite : imgList.noImg, disable: false},
                    channel_lock: {Data: (lockOn && chnl.isLock) ? imgList.lock : imgList.noImg, disable: false},
                    channel_encrypt: {Data: chnl.isEncrypt ? imgList.encrypt : imgList.noImg, disable: false},

                    channel_logo: {Data: chnl.logo ? chnl.logo : imgList.noImg, disable: !chnl.logo}
                });
            }
            else {
                pageData.epg_channel_list.Data.push({
                    channel_number: {Data: "", disable: true},
                    channel_name: {Data: "", disable: true},
                    channel_fav: {Data: imgList.noImg, disable: true},
                    channel_lock: {Data: imgList.noImg, disable: true},
                    channel_encrypt: {Data: imgList.noImg, disable: true}
                });
            }

            pageData.epg_channel_list.Data[i].epg_program_event = {
                Data: [],
                disable: false,
                disableItem: [],
                notAvailableItem: []
            };

            for (j = 0; j < programMaxCols; j++) {
                var prgrm = chnl ? chnl.program[j] : null;
                if (prgrm) {
                    bookFlag = schedule.getIsBookingByProgram(prgrm);
                    prgrm.reminder = bookFlag.reminder;
                    prgrm.record = bookFlag.record;

                    pageData.epg_channel_list.Data[i].epg_program_event.Data.push({
                        event_name: {Data: prgrm.title, disable: false},
                        event_theme: {Data: getPBBTypeColor(prgrm.theme), disable: false},
                        event_book: {
                            Data: getEventImg(prgrm, false),
                            disable: false
                        }
                    });

                    if (durationTimeToWidth(prgrm.endTime - prgrm.startTime) <= 150) {
                        pageData.epg_channel_list.Data[i].epg_program_event.Data[j].event_book.Data = imgList.noImg;
                    }

                }
                else {
                    pageData.epg_channel_list.Data[i].epg_program_event.Data.push({
                        event_name: {Data: "", disable: true},
                        event_theme: {Data: imgList.noImg, disable: true},
                        event_book: {Data: imgList.noImg, disable: true}
                    });
                }

                if (isNULLProgram(prgrm)) {
                    pageData.epg_channel_list.Data[i].epg_program_event.disableItem.push(j);
                }
                else if (AVLFlag.AVAILABLE != prgrm.available) {
                    if (ENABLE_FVP && baseLine > startLine) {
                        pageData.epg_channel_list.Data[i].epg_program_event.notAvailableItem.push(j);
                    }
                    ///==== pageData.epg_channel_list.Data[i].epg_program_event.notAvailableItem = [];
                }
            }

            if (!chnl || "" == chnl.uid) {
                pageData.epg_channel_list.disableItem.push(i);
            }
            pageData.epg_channel_list.Data[i].epg_program_event.DataSelectedIndex = currentPlayIndex[i];
            pageData.epg_channel_list.Data[i].epg_program_event.SelectedIndex = -1;
        }
        pageData.epg_channel_list.SelectedIndex = channelIndex % channelMaxRows;
       /* if(backProgramIndex >= 0) {
            programIndex = backProgramIndex;
        }*/
        pageData.epg_channel_list.Data[channelIndex % channelMaxRows].epg_program_event.SelectedIndex = programIndex;

    }

    function eventRowsToFreeview(chnl, rows) {
        //DBG_ALWAYS('eventRowsToFreeview rows:'+rows);
        var prgrms = [], i, leftEnd = startLine;
        var emptyFlag = 0;
        for (i = 0; i < programMaxCols; i++) {
            var row = rows[i], prgrm = {};
            if (row && parseInt(row.startTime)) {
                prgrm.channelUid = chnl.uid;
                //DBG_ALWAYS('prgrm.channelUid:'+prgrm.channelUid);
                prgrm.playId = chnl.playId;
                prgrm.eventId = row.eventId;
                prgrm.programId = row.program_id;//[FVPField.PROGRAM_ID];
                prgrm.program_id = row.program_id;//[FVPField.PROGRAM_ID];
                //DBG_ALWAYS('prgrm.programId:'+prgrm.programId);
                prgrm.attr = i + 1;

                prgrm.channelLogo = (row.channelLogo ? row.channelLogo : "");
                prgrm.contentImage = row.icon ? row.icon + "?w=522" : "";
                prgrm.title = row.title;
                prgrm.secondaryTitle = row.secondaryTitle;
                // prgrm.runningTime = row[FVPField.RUNNING_TIME];
                prgrm.text = row.medium_desc;//[FVPField.DESCRIPTION];?????????????????????? liubangbo
                prgrm.detail = row.medium_desc;// [FVPField.DESCRIPTION];??????????????????????liubangbo
                prgrm.theme = parseInt(row.genre);
                prgrm.startTime = parseInt(row.startTime);
                prgrm.endTime = parseInt(row.endTime);

                prgrm.mediaURL = row.mediaURL;
                prgrm.guidance = "";//row[FVPField.PROGRAM_GUIDANCE];
                prgrm.reminder = false;
                prgrm.record = false;
                prgrm.available = row.available;
                prgrm.adFlag = parseInt(row.program_ad);
                prgrm.hdFlag = parseInt(row.hd_or_sd);
                prgrm.subt = parseInt(row.subtitle);
                if (0 == i && prgrm.startTime > startLine) {
                    prgrms.push({
                        channelUid:"",
                        playId: "",
                        eventId: "",
                        programId: "N/A",
                        attr: 0,
                        channelLogo:(row[FVPField.CHANNEL_LOGO] ? (row[FVPField.CHANNEL_LOGO] + "?w=128") : ""),
                        contentImage: "",
                        title: "",
                        secondaryTitle: "",
                        // runningTime: 0,
                        text: "",
                        detail: "",
                        guidance: "",
                        theme: 0,
                        startTime: startLine,
                        endTime: prgrm.startTime,
                        mediaURL: "",
                        reminder: false,
                        record: false,
                        availbale: false
                    });
                }
            }
            else {
                prgrm.channelUid = chnl.uid;
                prgrm.playId = chnl.playId;
                prgrm.eventId = "";
                prgrm.programId = (0 === emptyFlag) ? "N/A" : "";
                prgrm.attr = 0;

                if(row && 0 === parseInt(row[FVPField.START_TIME_UTC])){
                    prgrm.channelLogo = row[FVPField.CHANNEL_LOGO] ? row[FVPField.CHANNEL_LOGO] + "?w=128" : "";
                }
                else{
                    prgrm.channelLogo = "";
                }
                prgrm.contentImage = "";
                prgrm.title = "";
                prgrm.secondaryTitle = "";
                // prgrm.runningTime = 0;
                prgrm.text = "";
                prgrm.detail = "";
                prgrm.guidance = "";
                prgrm.theme = 0;
                prgrm.startTime = leftEnd;
                prgrm.endTime = endLine > leftEnd ? endLine : (leftEnd + totalSeconds);
                prgrm.mediaURL = "";
                prgrm.reminder = false;
                prgrm.record = false;
                prgrm.available = AVLFlag.NOT_AVAILABLE;
                prgrm.adFlag = "";
                prgrm.hdFlag = ""
                prgrm.subt = "";
                emptyFlag = 1;
            }
            leftEnd = prgrm.endTime;
            prgrms.push(prgrm);
            //DBG_ALWAYS('eventRowsToFreeview is end')
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
                prgrm.programId = "";
                prgrm.channelLogo = "";
                prgrm.contentImage = "";
                prgrm.title = row[1];
                prgrm.secondaryTitle = "";
                prgrm.text = row[2];
                prgrm.theme = row[3];
                prgrm.startTime = parseInt(row[4]);
                prgrm.endTime = parseInt(row[5]);
                prgrm.attr = row[6];
                prgrm.detail = row[7];
                prgrm.guidance = row[8];
                prgrm.rating = row[9];
                prgrm.reminder = false;
                prgrm.record = false;
                prgrm.available = AVLFlag.NOT_AVAILABLE;
                prgrm.adFlag = "";
                prgrm.hdFlag = ""
                prgrm.subt = "";
                if (0 == i && prgrm.startTime > startLine) {
                    prgrms.push({
                        channelUid: "",
                        playId: "",
                        eventId: "N/A",
                        programId: "",
                        channelLogo: "",
                        contentImage: "",
                        title: "",
                        secondaryTitle: "",
                        text: "No program information",
                        theme: 0,
                        startTime: startLine,
                        endTime: prgrm.startTime,
                        attr: 0,
                        detail: "No program information",
                        guidance: "",
                        reminder: false,
                        record: false,
                        available: false
                    });
                }
            }
            else {
                prgrm.channelUid = "";
                prgrm.playId = "";
                prgrm.eventId = (0 === emptyFlag) ? "N/A" : "";
                prgrm.programId = "";
                prgrm.channelLogo = "";
                prgrm.contentImage = "";
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
                prgrm.available = AVLFlag.NOT_AVAILABLE;
                prgrm.adFlag = "";
                prgrm.hdFlag = ""
                prgrm.subt = "";
                emptyFlag = 1;
            }
            leftEnd = prgrm.endTime;
            prgrms.push(prgrm);
        }
        return prgrms;
    }

    function eventRowsToChannels(rows, list) {
        var chnls = [];
        //serviceIdMap = [40960, 4352, 4287, 17472, 4284, 17920, 4288, 40992, 4672, 8384 ];
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i], chnl = {};
            if (row) {
                chnl.number = row.number; // row[SPChannel.NUMBER];
                chnl.name = row.name;  //row[SPChannel.NAME];
                chnl.uid = row.uid;   //row[SPChannel.UID];
                //chnl.serviceId = serviceIdMap[i] + "";//row[SPChannel.SERVICEID];
                chnl.serviceId = row.serviceId;  //row[SPChannel.SERVICEID];
                chnl.type = row.type; // row[SPChannel.TYPE];
                chnl.attr = parseInt(row.attr);  //parseInt(row[SPChannel.ATTRIBUTE]);
                chnl.listUid = list.uid;
                chnl.satId = MT5655 ? 0 : list.satId;
                chnl.playId = MT5655 ? parseInt(list.uid) + 1 : row.playId; //MT5655 ? parseInt(list.uid) + 1 : row[SPChannel.PLAYID];
                chnl.serviceType = row.serviceType;  //row[SPChannel.SERVICETYPE];
                chnl.program = initProgramData();
                chnl.updateTime = 0;
                chnl.favType = getMaskValue(Mask.FAVTYPE, chnl.attr);
                chnl.isLock = getMaskValue(Mask.LOCK, chnl.attr);
                chnl.isEncrypt = getMaskValue(Mask.ENCRYPT, chnl.attr);

               /* chnl.number = row[SPChannel.NUMBER];
                chnl.name = row[SPChannel.NAME];
                chnl.uid = row[SPChannel.UID];
                //chnl.serviceId = serviceIdMap[i] + "";//row[SPChannel.SERVICEID];
                chnl.serviceId = row[SPChannel.SERVICEID];
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
                chnl.isEncrypt = getMaskValue(Mask.ENCRYPT, chnl.attr);*/
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
            if (TVTYPE.ATV != chnl.type) {
                chnls.push(chnl);
            }
        }
        return chnls;
    }

    function setAxisItemTitle(axises, longTime) {
        var titleArr = [];
        for (var i = 0; i < 3; i++) {
            var timeOffset = (longTime + i * 3600);
            if (currentTime - timeOffset >= 0 && currentTime - timeOffset < 3600) {
                axises[i].axis_title.Data = titleArr[i] = "On Now";
            }
            else {
                var temp = getEPGDisplayDate(timeOffset);
                if (titleArr.indexOf(temp) < 0) {
                    axises[i].axis_title.Data = titleArr[i] = temp;
                }
            }
        }
    }

    function getEPGDisplayDate(longTime) {
        var curDate = new Date((currentTime + hisenseUITZSeconds + hisenseUIDSTSeconds) * milliBase);
        var destDate = new Date((longTime + hisenseUITZSeconds + hisenseUIDSTSeconds) * milliBase);
        curDate.setUTCHours(0);
        curDate.setUTCMinutes(0);
        curDate.setUTCSeconds(0);
        curDate.setUTCMilliseconds(0);
        var timeOffset = destDate.getTime() - curDate.getTime();
        if (timeOffset >= 0 && timeOffset < 24 * 3600 * 1000) {
            return "Today";
        }
        else if (timeOffset >= -24 * 3600 * 1000 && timeOffset < 0) {
            return "Yesterday";
        }
        else if (timeOffset >= 24 * 3600 * 1000 && timeOffset < 48 * 3600 * 1000) {
            return "Tomorrow";
        }
        else {
            var d = '0' + destDate.getUTCDate();
            return d.slice(-2) + ' ' + getCurrentContentLanguage(month[destDate.getUTCMonth()]);
        }
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
        //DBG_INFO("refresh epg time line[" + currentTime + "]");

        if (currentTime >= baseLine + totalSeconds) {
            //DBG_INFO("epg opened more than 3 hours, auto close.")
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
                    if (isNULLProgram(prgrm)) continue;
                    if (isCurrentPlay(prgrm.startTime, prgrm.endTime)) {
                        if (currentPlayIndex[i] != j) needUpdate = true;
                        currentPlayIndex[i] = j;
                        break;
                    }
                }
            }
            if (needUpdate) hiWebOsFrame[self.id].rewriteDataOnly();
        }
    }

    function clearStyle(selector) {
        try {
            selector.removeAttr("style");
            selector.children().removeAttr("style");
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function resetEventPosition() {
        try {
            var i, j, eventLen;
            for (i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + startIndex];
                if (!chnl || "" == chnl.uid) continue;
                eventLen = 0;
                var leftEndTime = startLine;
                for (j = 0; j < programMaxCols; j++) {
                    var prgrm = oprtData.channels[i + startIndex].program[j];
                    var prgrmDom = $("#epg_channel_list ul li").eq(programMaxCols * i + j);
                    clearStyle(prgrmDom);
                    if (isNULLProgram(prgrm)) {
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
                    } else {
                        eventLen += (eventOffset + eventWidth);
                    }
                    if (eventWidth < 0) eventWidth = 0;
                    // DBG_ERROR("set width["+i+"]["+j+"]["+eventWidth+"]");

                    prgrmDom.width(eventWidth - 6);//margin-right: 6
                    if (eventWidth >= 100) {
                        prgrmDom.find("span").width(eventWidth - 60);
                    } else {
                        prgrmDom.find("span").css("width", "inherit");
                    }
                    prgrmDom.css("margin-left", eventOffset + "px");
                    leftEndTime = prgrm.endTime;
                }
            }
            clearStyle($("#epg_time_axis_panel li").eq(0));
            $("#epg_time_axis_panel li").eq(0).children().css("text-indent", "60px");
            $("#epg_time_axis_panel li").eq(0).css("border-left", "2px solid rgba(255,255,255,0)")
        } catch (ex) {
            DBG_ERROR(ex.message);
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
                hiWebOsFrame[self.id].hiFocus("epg_channel_list");
                setNextSelectedProgram(programIndex);
                if (hiWebOsFrame.getIsLoading()) {
                    hiWebOsFrame.endLoading("epg");
                }
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        flipFlag = FLIPMODE.NONE;
    }

    function setMheg5Status(v) {
        try {
            if (tv && ("UK" == hiWebOsFrame.getCurrentCountry())) {
                //model.mheg5.setI32Status(v);
                model.system.setPauseMheg5(v);
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
        //creatPacktoken();
        getChannelEvent(currentChannel.list);
        return true;
    }

    self.onOpen = function () {
        if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            setWindowSizeDirectly(48, 124, 484, 267);
        } else {
            setWindowSizeDirectly(1360, 111, 520, 292);
        }
        lockOn = !!livetvmain.getLockSwitch() && getIsInlockTime();
    }

    self.onClose = function () {

        navStatePause(false);
        setMheg5Status(1);
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

    function setNextSelectedChannel(_this, idx) {
        removeAvailableIcon(channelIndex - startIndex, programIndex);
        var crntSelProgram = oprtData.channels[channelIndex].program[programIndex];
        var nextSelProgram, i;

        channelIndex = idx + startIndex;
        for (i = 0; i < oprtData.channels[channelIndex].program.length; i++) {
            nextSelProgram = oprtData.channels[channelIndex].program[i];
            if (nextSelProgram.endTime > crntSelProgram.startTime) {
                programIndex = i;
                break;
            }
        }
        // $("#epg_channel_number").text(oprtData.channels[channelIndex].number);
        // $("#epg_channel_name").text(oprtData.channels[channelIndex].name);
        // $("#epg_channel_fav").attr("src", oprtData.channels[channelIndex].favType ? imgList.favorite : imgList.noImg);
        // $("#epg_channel_lock").attr("src", oprtData.channels[channelIndex].isLock ? imgList.lock : imgList.noImg);
        // $("#epg_channel_encrypt").attr("src", oprtData.channels[channelIndex].isEncrypt ? imgList.encrypt : imgList.noImg);

        setNextSelectedProgram(programIndex);
        _this.children[(idx + 1) * 7 - 1].setSelectedIndex(programIndex);
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

    function removeAvailableIcon(chIdx, prgrmIdx) {
        var rmSelProgram = oprtData.channels[chIdx + startIndex].program[prgrmIdx];
        //$("#epg_channel_list_epg_program_event_sys" + chIdx + "_event_book_sys" + prgrmIdx).attr("src", imgList.noImg);
        $("#epg_channel_list_epg_program_event_sys" + chIdx + "_event_book_sys" + prgrmIdx).attr("src", getKeyEventBookImg(rmSelProgram, oprtData.channels[chIdx].FEPG));
    }

    function setNextSelectedProgram(idx) {
        var nextSelProgram = oprtData.channels[channelIndex].program[idx];

        $("#epg_channel_name").text(translateNoProgram(nextSelProgram.title));
        $("#epg_progrm_name").text(translateNoProgram(nextSelProgram.secondaryTitle));
        //$("#epg_program_book_flag").attr("src", getEventImg(nextSelProgram, oprtData.channels[channelIndex].FEPG));
        $("#epg_program_book_flag").attr("src", getKeyEventImg(nextSelProgram, oprtData.channels[channelIndex].FEPG));
       $("#epg_program_time").html(getProgramLocalTime(nextSelProgram.startTime, nextSelProgram.endTime, 5));
        //  $("#epg_program_time").html(getProgramLocalTime(nextSelProgram.startTime, nextSelProgram.endTime, 1, 1));

        $("#epg_program_detail").text(translateNoProgram(nextSelProgram.detail));
        if ($("#epg_program_detail").height() >= 90) {
            $("#epg_detail_ellipsis").css("visibility", "visible");
        }
        else {
            $("#epg_detail_ellipsis").css("visibility", "hidden");
        }
        programIndex = idx;
        //display when focus on

        if ((oprtData.channels[channelIndex].FEPG || FREEVIEWTEST && ENABLE_FVP) && durationTimeToWidth(nextSelProgram.endTime - nextSelProgram.startTime) > 150) {
            $("#epg_channel_list_epg_program_event_sys" + (channelIndex - startIndex) +
                "_event_book_sys" + programIndex).attr("src", getKeyEventImg(nextSelProgram, oprtData.channels[channelIndex].FEPG));
        }

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


    self.keyCHUpHandler = function () {
        if (!checkFlipMode()) return;

        if (startIndex == 0) {
            if (oprtData.channels.length <= channelMaxRows) {
                this.setSelectedIndex(oprtData.channels.length - 1);
                setNextSelectedChannel(this, oprtData.channels.length - 1);
            }
            else {
                startIndex = channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows);
                channelIndex = oprtData.channels.length - 1;
                flipFlag = FLIPMODE.CHFLIP;
                //creatPacktoken();
                getProgramEvent();
            }
        }
        else {
            startIndex -= channelMaxRows;
            channelIndex = startIndex;
            flipFlag = FLIPMODE.CHFLIP;
            //creatPacktoken();
            getProgramEvent();
        }
        return false;

    }
    self.keyCHDownHandler = function () {
        if (!checkFlipMode()) return;
        if (startIndex == channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows)) {
            if (oprtData.channels.length <= channelMaxRows) {
                this.setSelectedIndex(0);
                setNextSelectedChannel(this, 0);
            }
            else {
                startIndex = 0;
                channelIndex = 0;
                flipFlag = FLIPMODE.CHFLIP;
                //creatPacktoken();
                getProgramEvent();
            }
        }
        else {
            startIndex += channelMaxRows;
            channelIndex = Math.min(oprtData.channels.length, startIndex + channelMaxRows) - 1;
            flipFlag = FLIPMODE.CHFLIP;
            //creatPacktoken();
            getProgramEvent();
        }
        return false;

    }


    self.switchList = function (list) {
        hiWebOsFrame.startLoading(10, "epg");
        flipFlag = FLIPMODE.LIST;
        initTimeLine();
        getChannelEvent(list);
        hiWebOsFrame[self.id].hiFocus("epg_channel_list");
    }

    self.keyInfoHandler = function () {
        var chnl = oprtData.channels[channelIndex];
        var prgrm = chnl.program[programIndex];
        prgrm.ForwardEPG = baseLine <= startLine;
        if (ENABLE_FVP) {
            openFVPEPGDetailPage(chnl, prgrm, hiWebOsFrame[self.id]);
        }
        else {
            openEPGDetailPage(prgrm, hiWebOsFrame[self.id]);
        }
    }

    function onFEPGURLChanged(url) {
        clearTimeout(mediaTimeout);
        if (checkFetchedMediaURL(url)) {
            deviceKeySet.HBBTVORIGIN = hiWebOsFrame.getCurrentPage();
            closeEPGModule(); //omg
            openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0, Msg.SEARCH, 0, Msg.AUDIO, 0, Msg.SIGNAL, 0]);
            startFreeviewEPGPlayer(url[1]);
        }
    }

    self.keyEnterHandler = function () {
        var chnl = oprtData.channels[channelIndex];
        var prgrm = chnl.program[this.SelectedIndex];

        if (prgrm.endTime < currentTime) {
            if (AVLFlag.AVAILABLE != prgrm.available) {
                showMsg("", "Programme not available.");
            }else{
                startFetchMediaURL(prgrm.mediaURL);
            }
        }
        else if (prgrm.startTime > currentTime) {
            if (!isNULLProgram(prgrm) && !isNAProgram(prgrm)) {
                openBookAddOrEditPage(chnl, prgrm, hiWebOsFrame[self.id], true);
            }
            else {
                DBG_ERROR("program startTime[" + prgrm.startTime + "], currentTime[" + currentTime + "]");
            }
        }
        else {
            if (isNAProgram(prgrm)) {
                // $("#epg_pip_channel").text((chnl.number) + " " + chnl.name);//omg
                // $("#epg_pip_channel").text("");
                var crntChannel = livetvmain.getCurrentChannelInfo();
                if (crntChannel.listUid != chnl.listUid ||
                    crntChannel.playId != chnl.playId ||
                    crntChannel.uid != chnl.uid) {
                    livetvchlist.changeChannel(null, chnl);
                }
                if (livetvmain.getNoSignalVar()) return;
               /* hiWebOsFrame.lockAllKeys("refresh_epg");
                setTimeout(function () {
                    getProgramEvent();
                    hiWebOsFrame.unLockAllKeys("refresh_epg");
                }, 1000);*/
            }
            else {
                closeEPGModule();//omg
                openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0]);//omg-2015-11-12
                livetvchlist.changeChannel(null, chnl);
            }
        }
    }

    self.keyRedHandler = function () {
        if (!checkFlipMode()) return;
        openBookSchedulePage(hiWebOsFrame[self.id]);
    }
    self.keyGreenHandler = function () {
        if (!checkFlipMode()) return;
        if (enableThemeColor) {
            openEPGColorPage();
        } else {
            openSwitchListPage();
        }
    }
    self.keyYellowHandler = function () {
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
    self.keyBlueHandler = function () {
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
    self.keyRightHandler = function () {
        if (!checkFlipMode()) return;
        resetBackArguments();
        var crntSelProgram = oprtData.channels[channelIndex].program[this.SelectedIndex];
        if (crntSelProgram.endTime >= endLine - 60 || programMaxCols - 1 == this.SelectedIndex || !!delayLoadTimer) {
            //flip to the next page
            if (endLine < rightEdge) {
                setParamsBeforeFlip(1);
                flipFlag = FLIPMODE.RIGHT;
                //creatPacktoken();
                getProgramEvent();
                return false;
            }
            else
            {
                showMsg('','You have reached the end of the guide', 2, null, true);
                DBG_INFO("reach the right edge.");
                return false;
            }
        }
        else {
            removeAvailableIcon(channelIndex - startIndex, this.SelectedIndex);
            setNextSelectedProgram(this.SelectedIndex + 1);
        }
        return true;

    }

    function clearPreloadingTimer() {
        if(preloadingTimer) {
            clearTimeout(preloadingTimer);
            preloadingTimer = null;
        }
        pre_data_loading = false;
    }
    function delayTitle() {
        var titleArr = [];
        var timeArr = [];
        //设置外框
        var thisselectedIndex = channelIndex % channelMaxRows;
        for(i=0;i<channelMaxRows;i++) {
            var chnl = oprtData.channels[startIndex + i]
            if (!chnl || "" == chnl.uid) continue;
            var tempProgram = chnl.program[0];
            tempProgram.title = "Loading...";

            var domobj =  $("#epg_channel_list_epg_program_event_sys"+i+" li").eq(0).removeClass().css({"width":"1338px","margin-left":"0px"});
            $("#epg_channel_list_epg_program_event_sys"+i+"_event_name_sys0").html(getCurrentContentLanguage("Loading...")).removeClass().addClass("normal").css("width","1284px");
            $("#epg_channel_list_epg_program_event_sys"+i+" li img").attr("src","img/common/transparent.png");
            if(i==thisselectedIndex) {
                domobj.addClass("epgEventNotAvailableFocus");
            } else {
                domobj.addClass("epgEventNotAvailable");
            }
        }

        for (var i = 0; i < 3; i++) {
            var temp_time = UTCToLocalTime(startLine + i * 3600)
            $("#epg_time_axis_panel_axis_time_sys"+i).html(temp_time);
            timeArr[i] = temp_time;
            var timeOffset = (startLine + i * 3600);
            if (currentTime - timeOffset >= 0 && currentTime - timeOffset < 3600) {
                $("#epg_time_axis_panel_axis_title_sys"+i).html(getCurrentContentLanguage("On Now"));
            }
            else {
                var temp_title = getEPGDisplayDate(timeOffset);
                if (titleArr.indexOf(temp_title) < 0) {
                    titleArr[i] = temp_title;
                } else {
                    titleArr[i] = "";
                }
                if(titleArr[i] != "") {
                    $("#epg_time_axis_panel_axis_title_sys" + i).html(titleArr[i]);
                } else {
                    $("#epg_time_axis_panel_axis_title_sys" + i).html("");
                }


            }
        }

        $("#epg_program_book_flag").attr("src","img/common/transparent.png");
        $("#epg_channel_name").html(getCurrentContentLanguage("Loading..."));
        $("#epg_progrm_name").html("");
        $("#epg_program_detail").html("");
        $("#epg_detail_ellipsis").html("");
        $("#epg_program_time").html(timeArr[0] +"-" + timeArr[2] + "&nbsp;&nbsp;&nbsp;&nbsp;" + titleArr[0]);
        flipFlag = FLIPMODE.NONE;
    }

    self.keyLeftHandler = function () {
        if (!checkFlipMode()) return;
        resetBackArguments();
        var crntSelProgram = oprtData.channels[channelIndex].program[this.SelectedIndex];
        if (0 == this.SelectedIndex) {
            //flip to the last page
            if (startLine > leftEdge) {
                setParamsBeforeFlip(-1);
                flipFlag = FLIPMODE.LEFT;
                //creatPacktoken();
                getProgramEvent();
                return false;
            }
            else {
                showMsg('','You have reached the beginning of the guide', 2, null, true);
                DBG_INFO("reach the left edge.");
                return false;
            }
        }
        else {
            removeAvailableIcon(channelIndex - startIndex, this.SelectedIndex);
            setNextSelectedProgram(this.SelectedIndex - 1);
        }
        return true;
    }

    self.keyDownHandler = function () {
        if (!checkFlipMode()) return;
        if (oprtData.channels.length - 1 == channelIndex) {
            if (oprtData.channels.length <= channelMaxRows) {
                this.setSelectedIndex(0);
                setNextSelectedChannel(this, 0);
            }
            else {
                startIndex = 0;
                channelIndex = 0;
                flipFlag = FLIPMODE.DOWN;
                //creatPacktoken();
                getProgramEvent();
            }
            return false;
        }
        else if (channelMaxRows - 1 == this.SelectedIndex) {
            startIndex += channelMaxRows;
            channelIndex += 1;
            flipFlag = FLIPMODE.DOWN;
            //creatPacktoken();
            getProgramEvent();
            return false;
        }
        else {
            setNextSelectedChannel(this, this.SelectedIndex + 1);
        }
        return true;
    }

    self.keyUpHandler = function () {
        if (!checkFlipMode()) return;
        if (0 == channelIndex) {
            if (oprtData.channels.length <= channelMaxRows) {
                this.setSelectedIndex(oprtData.channels.length - 1);
                setNextSelectedChannel(this, oprtData.channels.length - 1);
            }
            else {
                startIndex = channelMaxRows * Math.floor((oprtData.channels.length - 1) / channelMaxRows);
                channelIndex = oprtData.channels.length - 1;
                flipFlag = FLIPMODE.UP;
                //creatPacktoken();
                getProgramEvent();
            }
            return false;
        }
        else if (0 == this.SelectedIndex) {
            startIndex -= channelMaxRows;
            channelIndex -= 1;
            flipFlag = FLIPMODE.UP;
            //creatPacktoken();
            getProgramEvent();
            return false;
        }
        else {
            setNextSelectedChannel(this, this.SelectedIndex - 1);
        }
        return true;
    }


    self.EPGNumKeyMapProcess=function (keyValue){
        try{
            var num = keyValue;
            inputedNum += (num + "");
            clearTimeout(InputTimeout);
            InputTimeout =setTimeout(function(){
                    if(false==GoToChnlNum(parseInt(inputedNum,10))){
                        showMsg('','Channel not found.')
                    }
                    inputedNum='';
                }
                ,1000);
        }catch(ex){DBG_ERROR('EPGNumKeyMapProcess is error'+ex.message)}
    }
    function GoToChnlNum(num) {
        try{
            if(!oprtData.channels[oprtData.channels.length-1].number||
                num>parseInt(oprtData.channels[oprtData.channels.length-1].number,10)){
                return false;
            }
            var seekIndx=-1;
            for(var i=0;i<oprtData.channels.length;i++){
                if(oprtData.channels[i].number==num){
                    seekIndx=i;
                    break
                }
            }
            if(seekIndx<=-1){
                return false;
            }
            if (!checkFlipMode()) return true;
            epg.checkFlipOrNot(seekIndx);
        }catch(ex){DBG_ERROR('GoToChnlNum is error'+ex.message)}
    }

    self.checkFlipOrNot=function(seekIndx){
        var setSelectedIndex=seekIndx;
        var localProgramIndex=null;
        var localStartIndex=startIndex;
        if(seekIndx!=channelIndex){
            localProgramIndex=0;
        }else{
            return;
        }
        channelIndex=seekIndx;

        startIndex=channelMaxRows * Math.floor(seekIndx / channelMaxRows);
        flipFlag=FLIPMODE.SEEK;
        if(seekIndx>=localStartIndex&&seekIndx<localStartIndex+channelMaxRows){
            programIndex=localProgramIndex;
            refreshTimeAxises();
            hiWebOsFrame[self.id].rewriteDataOnly();
            showEPGPage();
        }else{
            DBG_ALWAYS('checkFlip getProgramEvent');
            //creatPacktoken();
            getProgramEvent(true);
        }
    }

    function checkFlipMode() {
        if (FLIPMODE.NONE != flipFlag) {
            DBG_ERROR("flip mode error: " + flipFlag);
            return false;
        }
        return true;
    }

    function checkFVEPGUpdate(svl_id) {
        if(!ENABLE_FVP) return;
        if (null !== svl_id) svl_id = parseInt(svl_id);
        DBG_ALWAYS("svl_id: " + svl_id);
        if (svl_id && "undefined" != typeof svl_id) {
            var idx = epgUpdateQue.indexOf(svl_id);
            try{
                if (idx > -1) {
                    epgUpdateQue.splice(idx, 1);
                    backStartTime.splice(idx, 1);
                    backEndTime.splice(idx, 1);
                    //DBG_ALWAYS('before splice requesout queue:'+objToString(requestOut));
                    if(requestOut.length>0){
                        requestOut.splice(idx, 1);
                    }else{
                        DBG_ERROR('requeout queue length is error')
                    }
                    //DBG_ALWAYS('after splice requesout queue:'+objToString(requestOut));

                }
            }catch(ex){DBG_ERROR('checkFVEPGUpdate is error:'+ex.message)}

        }
        //else {
        //    epgUpdateQue = [];
        //}
        //DBG_ALWAYS('epgUpdateQue:'+epgUpdateQue);
        if (epgUpdateQue.length > 0) {
            //self.refreshEPGWhenTimeChanged(1, epgUpdateQue[0]);
            DBG_ALWAYS('length >0 self.refreshEPGWhenTimeChanged');
            self.refreshEPGWhenTimeChanged(1, [epgUpdateQue[0],backStartTime[0],backEndTime[0],requestOut[0]]);
        }
    }


    self.refreshEPGWhenTimeChanged = function (type, backArg) {
        if(1 == type && !ENABLE_FVP) return;
        //DBG_INFO("refreshEPGWhenTimeChanged type[" + type + "]");
        var svl_id = null;
        var start_time = null;
        var end_time = null;
        var localrequestOut = null;
        //DBG_ALWAYS('refreshEPGWhenTimeChanged backArg is:'+objToString(backArg));
        if(1 == type) {
            svl_id = backArg[0];
            start_time = backArg[1];
            end_time = backArg[2];
            localrequestOut = backArg[3];
            //DBG_ALWAYS('refreshEPGWhenTimeChanged backArg is:'+objToString(backArg));

            start_time = parseInt(start_time);
            end_time = parseInt(end_time);
            var current_page = false;
            for (var i = 0; i < channelMaxRows; i++) {
                var chnl = oprtData.channels[i + startIndex];
                if (!chnl || "" == chnl.serviceId) continue;
                if (svl_id == chnl.serviceId) {
                    current_page = true;
                    break;
                }
            }
            if(!current_page) return;
            if(start_time != startLine) return;
        } else {
            if(baseLine > startLine)  return;
            svl_id = backArg;
        }

        svl_id = parseInt(svl_id);
        if (!hiWebOsFrame[self.id] || !hiWebOsFrame[self.id].visible) return;

        try{
            if (1 == type && !!svl_id && epgUpdateQue.indexOf(svl_id) < 0 ) {
                epgUpdateQue.push(svl_id);
                backStartTime.push(start_time);
                backEndTime.push(end_time);
                //DBG_ALWAYS('before push requestOut queue is:'+objToString(requestOut));
                requestOut.push(localrequestOut);
                //DBG_ALWAYS('after push requestOut queue is:'+objToString(requestOut));
            }
        }catch(ex){DBG_ERROR('push epgUpdateQue is error')}
        if (!checkFlipMode()) {
            DBG_INFO("epg busy, update queue: " + objToString(epgUpdateQue));
            return;
        }
        if(localrequestOut==requestTimeOut){
            DBG_ALWAYS('requestTimeOut----');
            flipFlag=FLIPMODE.TIMEOUT;
            //getNoProgramEventByChannel(svl_id,requestTimeOut);
            return;
        }
        DBG_ALWAYS('epgUpdateQue');
        DBG_ALWAYS('epg busy');

        flipFlag = FLIPMODE.UPDATE;
        hiWebOsFrame.lockAllKeys("update");
        if (1 == type && !!svl_id) {
            DBG_ALWAYS('svl_id:'+svl_id);
            //getProgramEventByChannel(svl_id);
        }
        else {
            getProgramEvent();
        }
        refreshTimeLine();
        hiWebOsFrame.unLockAllKeys("update");
    }

    self.refreshPIPChannelInfo = function (chnl) {
        if (!hiWebOsFrame[self.id].visible || null == chnl) return;
        $("#epg_pip_channel").text(chnl.name);//omg
    }
    self.refreshEPGColorTheme = function (themes) {
        if (!hiWebOsFrame[self.id].visible) return;
        if (oprtData.themeIndex.toString() == themes.toString()) return;
        oprtData.themeIndex = tv ? model.epg.getThemsColor() : themes;
        hiWebOsFrame[self.id].rewriteDataOnly();
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
            programId: "",
            name: "No program",
            title:"No program",
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
            prgrms.push({eventId: j + 1, programId: "", name: (j + 1) + ""});
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


    function lockEPGPageKeys(msg) {
        DBG_INFO("epg_lock " +(!msg?"" : msg));
        hiWebOsFrame.enablePageKeys(hiWebOsFrame[self.id], []);
    }

    function unLockEPGPageKeys(msg) {
        DBG_INFO("epg_unlock" +(!msg?"" : msg));
        hiWebOsFrame.clearEnablePageKeys(hiWebOsFrame[self.id]);
    }

    function startFetchMediaURL(baseURL) {
        mediaBaseURL = baseURL;
        if (baseURL) {
            hiWebOsFrame.lockAllKeys("mediaurl");
            $('#sdkLoading').css('display', 'block');
            clearTimeout(mediaTimeout);
            mediaTimeout = setTimeout(onFEPGURLChanged, 10 * 1000);
            freeview_manager.getProgramPlayerUrl(baseURL,onFEPGURLChanged)
        }
    }

    self.startFetchMediaURL = startFetchMediaURL;

    function checkFetchedMediaURL(url) {
        hiWebOsFrame.unLockAllKeys("mediaurl");
        $('#sdkLoading').css('display', 'none');
        if (url && mediaBaseURL == url[0]) {
            mediaBaseURL = "";
            return true;
        }
        DBG_INFO("base url not match or timeout.");
        mediaBaseURL = "";
        return false;
    }

    var imgList = {
        noImg: "img/common/transparent.png",
        encrypt: "img/epg/ic_epg_program_scrambel.png",
        lock: "img/epg/ic_epg_program_locked.png",
        fav: "img/epg/favorite.png",
        record: "img/epg/ic_epg_program_pvr.png",
        reminder: "img/epg/ic_epg_program_remind.png",
        comingSoon: "img/epg/ic_epg_program_coming_soon.png",
        canPlay: "img/epg/ic_epg_program_play.png",
        PURPLE: "img/epg/theme_purple.png",
        GREEN: "img/epg/theme_green.png",
        PINK: "img/epg/theme_pink.png",
        CHFLIP: "img/epg/hotkey_epg_ch+-.png",
        INFO: "img/epg/hotkey_epg_info.png",
        red: "img/epg/hotkey_epg_red.png",
        green: "img/epg/hotkey_epg_green.png",
        yellow: "img/epg/hotkey_epg_yellow.png",
        blue: "img/epg/hotkey_epg_blue.png",
        fvpLogo: "img/epg/logo_freevirw_epg.png",
        fhdLogo:"img/epg/FHDFreeview.png",
        leftArrow: "img/epg/arrow_epg_time_left.png",
        rightArrow: "img/epg/arrow_epg_time_right.png"
    };

    self.pageData = {
        epg_title: {Data: ""},
        epg_time: {Data: ""},
        epg_pip_channel: {Data: ""},
        // epg_channel_number: {Data: ""},
        epg_channel_name: {Data: ""},
        // epg_channel_fav: {Data: imgList.noImg},
        // epg_channel_lock: {Data: imgList.noImg},
        // epg_channel_encrypt: {Data: imgList.noImg},
        epg_type_color_purple: {Data: ""},
        epg_type_color_pink: {Data: ""},
        epg_type_color_green: {Data: ""},
        epg_progrm_name: {Data: ""},
        epg_program_book_flag: {Data: imgList.noImg},
        epg_fvp_logo: {Data: ENABLE_FVP ? imgList.fvpLogo :FREEVIEWTEST?imgList.fhdLogo:imgList.noImg},
        epg_program_time: {Data: ""},
        epg_program_detail: {Data: ""},
        epg_tip_date: {Data: ""},
        epg_tip_tuner: {Data: ""},
        epg_time_line_current: {Data: ""},
        epg_time_left_tip: {Data: imgList.leftArrow},
        epg_time_right_tip: {Data: imgList.rightArrow},
        epg_channel_list: {Data: []},
        epg_opertion_btn: {
            Data: [{
                flip_text: {Data: "+24h"},
                flip_img: {Data: imgList.blue}
            }, {
                flip_text: {Data: "-24h"},
                flip_img: {Data: imgList.yellow}
            }, {
                flip_text: {Data: "EU" == InitArea ? "Program Colour" : "Ch. List"},
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
        epg_time_axis_panel: {
            Data: [{
                axis_title: {Data: "On Now"},
                axis_time: {Data: "12:00"}
            }, {
                axis_title: {Data: "Tomorrow"},
                axis_time: {Data: "12:00"}
            }, {
                axis_title: {Data: "12:00"},
                axis_time: {Data: "12:00"}
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
            'News/Factual':[],
            'Movie': [],
            'News': [],
            'Sport': [],
            'Shows': [],
            'Child': [],
            'Kids': [],
            'Music': [],
            'Arts': [],
            'Social': [],
            'Factual':[],
            'Education': [],
            'Entertainment':[],
            'Hobby': [],
            'Lifestyle':[],
            'Series': [],
            'Drama': [],
            'Others':[],
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
            "Loading...":[],
            "Satellite": [],
            "Programme not available.":[]
        },
        rewrite: rewritePageData
    }

    oprtData.channels = initChannelData();

    self.pageData.operateData = oprtData;

    try {
        model.epg.onEPGAutoUpdateChaged = self.refreshEPGWhenTimeChanged.bind(this, 0);
        //model.fvpepg.onFEPGIsReadyChanged = self.refreshEPGWhenTimeChanged.bind(this, 1);
        //model.fvpepg.onFEPGURLChanged = onFEPGURLChanged;
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }

}

var epg = new EPG();

function get_epg_pageData(opts) {
    var caedata = {
        span: [
            "epg_title", "epg_time", "epg_pip_channel",
            "epg_channel_name", "epg_type_color_purple", "epg_type_color_pink",
            "epg_type_color_green", "epg_tip_date", "epg_tip_tuner"
        ],
        div: [
            "epg_program_time", "epg_progrm_name",
            "epg_program_detail", "epg_time_line_current"
        ],
        img: ["epg_program_book_flag", "epg_fvp_logo", "epg_time_left_tip", "epg_time_right_tip"
        ],
        Ul: [{
            id: "epg_channel_list",
            ori: {
                span: ["channel_number", "channel_name"],
                img: ["channel_fav", "channel_lock", "channel_encrypt", "channel_logo"],
                NavigationBar: [{
                    id: "epg_program_event",
                    ori: {
                        span: ["event_name"],
                        img: ["event_theme", "event_book"]
                    }
                }]
            }
        }, {
            id: "epg_opertion_btn",
            ori: {
                span: ["flip_text"],
                img: ["flip_img"]
            }
        }, {
            id: "epg_time_axis_panel",
            ori: {
                span: ["axis_title", "axis_time"]
            }
        }]
    }

    opts.CaE = generateCaE(caedata, epg);

    opts.CaE[caedata.span.length].enableHtml = true;
    opts.CaE[caedata.span.length + 2].strFilter = true;

    var ulIdx = caedata.span.length + caedata.div.length + caedata.img.length;
    opts.CaE[ulIdx].firstFocusId = "epg_program_event";
    opts.CaE[ulIdx].oriCaE[0].classes = {
        normal: "epgListChannelNum",
        disable: "epgListChannelNum",
        focus: "epgListChannelNum"
    };
    opts.CaE[ulIdx].oriCaE[1].classes = {
        normal: "epgListChannelName",
        disable: "epgListChannelName",
        focus: "epgListChannelName"
    };
    opts.CaE[ulIdx].oriCaE[2].classes =
        opts.CaE[ulIdx].oriCaE[3].classes =
            opts.CaE[ulIdx].oriCaE[4].classes = {
                normal: "epgListChannelImg",
                disable: "epgListChannelImgDisable",
                focus: "epgListChannelImg"
            };
    opts.CaE[ulIdx].oriCaE[5].classes = {
        normal: "epgListChannelLogoImg",
        disable: "epgListChannelImgDisable",
        focus: "epgListChannelLogoImg"
    };
    opts.CaE[ulIdx].oriCaE[6].classes = {
        normal: "epgEventListNormal",
        disable: "epgEventListDisable",
        focus: "epgEventListFocus",
        // selected: "epgEventListFocus",//SDK bug
        dataSelected: "epgEventListSelected",
        notAvailable: "epgEventNotAvailable",
        notAvailableFocus: "epgEventNotAvailableFocus"
    };
    opts.CaE[ulIdx].oriCaE[6].NavigationBarConfig.DoubleClass = true;

    opts.CaE[ulIdx].handler = {
        befDownHandler: epg.keyDownHandler,
        befUpHandler: epg.keyUpHandler,
        keyChannelUpHandler: epg.keyCHUpHandler,
        keyChannelDownHandler: epg.keyCHDownHandler,
        keyRedHandler: epg.keyRedHandler,
        keyGreenHandler: epg.keyGreenHandler,
        keyNum0Handler: epg.EPGNumKeyMapProcess.bind(this,0),
        keyNum1Handler: epg.EPGNumKeyMapProcess.bind(this,1),
        keyNum2Handler: epg.EPGNumKeyMapProcess.bind(this,2),
        keyNum3Handler: epg.EPGNumKeyMapProcess.bind(this,3),
        keyNum4Handler: epg.EPGNumKeyMapProcess.bind(this,4),
        keyNum5Handler: epg.EPGNumKeyMapProcess.bind(this,5),
        keyNum6Handler: epg.EPGNumKeyMapProcess.bind(this,6),
        keyNum7Handler: epg.EPGNumKeyMapProcess.bind(this,7),
        keyNum8Handler: epg.EPGNumKeyMapProcess.bind(this,8),
        keyNum9Handler: epg.EPGNumKeyMapProcess.bind(this,9),
    };
    // opts.CaE[ulIdx].oriCaE[6].firstFocusId = "event_name";
    opts.CaE[ulIdx].oriCaE[6].handler = {
        befRightHandler: epg.keyRightHandler,
        befLeftHandler: epg.keyLeftHandler,
        befEnterHandler: epg.keyEnterHandler,

        //keyNum6Handler: epg.keyGreenHandler,
        //keyNum5Handler: epg.keyYellowHandler,
        //keyNum6Handler: epg.keyInfoHandler,
        keyYellowHandler: epg.keyYellowHandler,
        keyBlueHandler: epg.keyBlueHandler
    };


    opts.CaE[ulIdx].oriCaE[6].onFocusFun = epg.eventOnFocus;

    opts.CaE[ulIdx + 2].oriCaE[0].classes = {
        normal: "epgAxisTitle",
        disable: "epgAxisTitle",
        focus: "epgAxisTitle"
    };

    return epg.pageData;
}
