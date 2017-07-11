function getChListPageData(opts) {
    var pageFlip = (null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882"));//true: page; false: item

    var caeData = {
        span: [
            "ch_list_title", "ch_list_info", "ch_list_to_right_tip", "ch_list_no_item",
            "ch_list_to_left_tip", "current_channel_number", "current_channel_name"
        ],
        img: [
            "ch_list_to_right_img", "ch_list_to_left_img", "current_channel_lock",
            "current_channel_encrypt", "current_channel_fav"
        ],
        Ul: [{
            id: "livetv_chlist_channels",
            ori: {
                span: ["channel_number", "channel_name", "program_name"],
                img: ["channel_lock", "channel_encrypt", "channel_fav"]
            }
        },{
            id:"livetv_chlist_programs",
            ori: {
                span:["program_name", "program_start_time", "program_end_time", "program_detail"],
                img: ["program_reminder", "program_record"]
            }
        },{
            id: "livetv_chlist_functions",
            ori: {
                span:["func_name"],
                img: ["func_img"]
            }
        }],
        NavigationBar: [{
            id:"livetv_chlist_list",
            ori: {
                span: ["list_name"]
            }
        }]
    };
    opts.CaE = generateCaE(caeData);

    var ulIdx = caeData.span.length + caeData.img.length;
    opts.CaE[0].classes = {
        normal: "CHListTitleFocus"
    };
    opts.CaE[ulIdx].classes = {
        normal: "normal",
        focus: pageFlip ? "pageFlipFocus" : "nonPageFlipFocus"
    };
    opts.CaE[ulIdx].oriCaE[0].classes = {
        normal: "ChannelNumber",
        disable: "ChannelNumber",
        selected: "ChannelNumber",
        dataSelected: "ChannelNumber",
        focus: "ChannelNumber"
    }
    opts.CaE[ulIdx].oriCaE[1].classes = {
        normal: "ChannelName",
        disable: "ChannelName",
        selected: "ChannelName",
        dataSelected: "ChannelName",
        focus: "ChannelName"
    }

    function getCommonHandler(){
        return {
            befDownHandler: livetvchlist.keyDownOnChannelList,
            befUpHandler: livetvchlist.keyUpOnChannelList,
            befLeftHandler: livetvchlist.keyLeftOnChannelList,
            befRightHandler: livetvchlist.keyRightOnChannelList,
            keyChannelUpHandler: livetvchlist.keyCHUpOnChannelList,
            keyChannelDownHandler: livetvchlist.keyCHDownOnChannelList,
            // keyNum3Handler: livetvchlist.keyCHUpOnChannelList,
            // keyNum4Handler: livetvchlist.keyCHDownOnChannelList,
            befEnterHandler: livetvchlist.keyEnterOnChannelList
        };
    }

    opts.CaE[ulIdx].handler = getCommonHandler();
    opts.CaE[ulIdx + 1].handler = getCommonHandler();
    opts.CaE[ulIdx + 2].handler = getCommonHandler();
    opts.CaE[ulIdx + 3].handler = getCommonHandler();

    opts.CaE[ulIdx + 1].oriCaE[3].strFilter = true;
    opts.CaE[ulIdx + 1].handler.aftDownHandler =
    opts.CaE[ulIdx + 1].handler.aftUpHandler = livetvchlist.aftKeyHandlerOnChannelList;

    opts.CaE[ulIdx + 1].handler.keyBlueHandler = livetvchlist.keyBlueOnChannelList;
    //opts.CaE[ulIdx + 1].handler.keyNum0Handler = livetvchlist.keyBlueOnChannelList;

    opts.CaE[ulIdx].nav = {
        leftTo: "livetv_chlist_functions"
    }
    opts.CaE[ulIdx + 1].nav = {
        leftTo: "livetv_chlist_channels"
    }
    opts.CaE[ulIdx + 2].nav = {
        // enterTo : "livetv_chlist_list",
        rightTo: "livetv_chlist_channels"
    }
    opts.CaE[ulIdx + 3].nav = {
        downTo: "livetv_chlist_functions",
        enterTo : "livetv_chlist_channels"
    }
    opts.CaE[ulIdx + 3].onFocusFun = livetvchlist.onFocusListName;
    opts.CaE[ulIdx + 3].onBlurFun = livetvchlist.onBlurListName
    return livetvchlist.pageData;
}

function liveTVChannelList() {

    var self = this;
    self.id = LiveTVModule.CHANNEL_LIST;

    function LISTINDEX() {}
    LISTINDEX.LIST = 0;
    LISTINDEX.FUNCTION = 1;
    LISTINDEX.CHANNEL = 2;
    LISTINDEX.INFO = 3;

    var pageFlip = (null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882"));//true: page; false: item

    var lstMaxRow = 20,
        pageSize = pageFlip ? 7 : 14,
        listSize = 7,
        topItem = 0,
        panelHeight = 945,
        itemHeight = 135,
        leftItem = 0,
        itemWidth = 180,
        maxItem = 6;
    var lockOn, currentList, currentListForChannelEdit,initList, initAgain, initName, visibleFlag, maxNumLenMaps;
    var listIterator, channelIterator, channelUpdateIterator, readedCount, closeTimer, chnlInfoTimer;
    var crntEPGIterator, dtlEPGIterator, currentTime, prgrmUpdateFlag = {
        count: 0,
        finish: false
    };
    var recentWatch, hotelOnChannel, listIndex, channelFlag, chgErrorTiemr, chgChnlTimer, rptInterval;
    var channelChanging, pubPreChangeChannel, indexReseted, lastChannel, rptChgChannel;
    var numChange, inputedNum, inputTimer, reachMax, numChangeList, repeatStep;

    var firstInited = false;
    var filterList = {
        name: "Filter",
        uid: -1,
        origin: null,
        flag: null
    };
    var visibleListCount = 0;
    var lstNameMap = ["Antenna", "Cable", "Satellite", "Satellite"];
    var hotelTuner = ["g_hotel__hotel_swo_air_ch", "g_hotel__hotel_swo_cab_ch", "g_hotel__hotel_swo_sat_ch"];
    function FLIPFLAG(){ENUM_INDEX = 0;}
    FLIPFLAG();
    FLIPFLAG.FIRST = ENUM_INDEX++;
    FLIPFLAG.NEXT = ENUM_INDEX++;
    FLIPFLAG.LAST = ENUM_INDEX++;
    FLIPFLAG.END = ENUM_INDEX++;
    self.onOpenChList = function() {
        preSetStyle();
        visibleFlag = true;
        autoCloseTimer();
        txtList.info = getCurrentContentLanguage("Information");
        txtList.detail = getCurrentContentLanguage("Program details");
        currentTime = getDVBLongTime();
        lockOn = !!livetvmain.getLockSwitch();
        resetSelectedIndexByChannel(true);
        listIndex = LISTINDEX.CHANNEL;
        if (null != currentList && null != currentList.name) {
            clearUpdateTime();
            getCurrentPageProgramsInfo();
            setScrollbarPostion(0, KeyDir.NONE, oprtData.channels[currentList.name]);
            if(0 == oprtData.channels[currentList.name].length) showNoItem(true);
        }
        showFocusBar();
    }

    self.onCloseChList = function() {
        visibleFlag = false;
        clearTimeout(closeTimer);
        clearInterval(chnlInfoTimer);
        dtlEPGIterator = [];
        crntEPGIterator = [];
        clearFilterList();
        resetStyleWhenFlipChInfo(LISTINDEX.CHANNEL);
        closeNoItem();
        clearChannelProgram();
    }

    self.backToLiveTV = function() {
        hotelOnChannel = false;
        hiWebOsFrame[self.id].close();
        openLiveTVModule([Msg.INFO, 0]);
    }

    function resetSelectedIndexByChannel(rewriteFlag) {
        oprtData.curChannel = livetvmain.getCurrentChannelInfo();
        currentList = objectFindByKey(oprtData.channelList, ["uid", "satId"], [oprtData.curChannel.listUid, oprtData.curChannel.satId]);
        currentListForChannelEdit = objectFindByKey(oprtData.channelList, ["uid", "satId"], [oprtData.curChannel.listUid, oprtData.curChannel.satId]);
        if (null == currentList || null == currentList.name) {
            oprtData.beginIndex = oprtData.channelIndex = 0;
            rewriteFlag && hiWebOsFrame[self.id].rewriteDataOnly();
        } else {
            if (!currentList.display) {
                DBG_INFO("current list[" + currentList.name + "] is hidden, reset.");
                for (var i = 0; i < oprtData.channelList.length; i++) {
                    if (oprtData.channelList[i].display) {
                        currentList = oprtData.channelList[i];
                        oprtData.channelIndex = 0;
                        break;
                    }
                }
            } else {
                oprtData.channelIndex = getCurrentChannelIndex(currentList, null);
            }
            oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
            if (rewriteFlag) {
                hiWebOsFrame[self.id].rewriteDataOnly();
            }
        }
    }


    function getPreChangedChannel(chFlag) {

        if(!indexReseted) {
            resetSelectedIndexByChannel(false);
            indexReseted = true;
        }
        if(null == currentList || null == currentList.name) return null;

        var chnls = oprtData.channels[currentList.name];

        if(oprtData.channelIndex + chFlag < 0) {
            oprtData.channelIndex = chnls.length - 1;
        }
        else if(oprtData.channelIndex + chFlag > chnls.length - 1) {
            oprtData.channelIndex = 0;
        }
        else {
            oprtData.channelIndex += chFlag;
        }
        return chnls[oprtData.channelIndex];
    }


    function getCurrentChannelIndex(list, chnl) {
        var idx = 0;
        !list && (list = currentList);
        !chnl && (chnl = oprtData.curChannel);

        if (null == chnl || null == list || !oprtData.channels[list.name]) return idx;

        var founded = false;
        for (var i = 0; i < oprtData.channels[list.name].length; i++) {
            if (chnl.uid == oprtData.channels[list.name][i].uid && chnl.playId == oprtData.channels[list.name][i].playId) {
                idx = i;
                founded = true;
                break;
            }
        }
        if (!founded) {
            DBG_ERROR("can not find the index.[" + objToString(chnl) + "], list[" + list.name + "], index[" + idx + "]");
        }
        return idx;
    }

    function getCurrentPageProgramsInfo() {
        if(!visibleFlag) return;
        if(!oprtData.channels[currentList.name] || oprtData.channels[currentList.name].length < 1) {
            // DBG_ERROR("currentList[" + currentList.name + "] do not have any channels.");
            return;
        }
        clearInterval(chnlInfoTimer);
        chnlInfoTimer = setTimeout(function() {
            if(listIndex != LISTINDEX.CHANNEL) return;
            currentTime = getDVBLongTime();
            prgrmUpdateFlag.count = 0;
            prgrmUpdateFlag.readed = 0;
            prgrmUpdateFlag.finish = false;
            crntEPGIterator = [];
            var i, key = currentList.name,
                idx = oprtData.channelIndex,
                total = oprtData.channels[currentList.name].length;
            var startIdx = pageFlip ? oprtData.beginIndex : Math.max(idx - 3, 0) ;
            var endIdx = pageFlip ? oprtData.beginIndex + pageSize : idx + 4;
            for (i = startIdx; i < endIdx && i < total; i++) {
                var chnl = oprtData.channels[key][i];
                var last = pageFlip ? (i == endIdx - 1 || i == total - 1) : (i == idx + 3 || i == total - 1); //always read the last one
                if (chnl.updateTime + 60 < currentTime || last) {
                    prgrmUpdateFlag.count++;
                    prgrmUpdateFlag.finish = last;
                    crntEPGIterator[i] = createProgramIterator(chnl, 0, 0, onGetCurrentProgram);
                    crntEPGIterator[i].readNextRows(1);
                } else {
                    DBG_INFO("channel[" + chnl.name + "] has been updated.");
                }
            }
        }, 400);
    }


    function onGetCurrentProgram(chnl, m_event) {
        if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            chnl.updateTime = currentTime;
            chnl.program = eventRowsToProgram(m_event.rows, chnl)[0];
            if (++prgrmUpdateFlag.readed == prgrmUpdateFlag.count && prgrmUpdateFlag.finish) {
                prgrmUpdateFlag.finish = false;

                hiWebOsFrame[self.id].rewriteDataOnly();

                var selChannel = oprtData.channels[currentList.name][oprtData.channelIndex],
                    domIndex = oprtData.channelIndex - oprtData.beginIndex;
                $(".ProgramProgrees div").eq(domIndex).css("width",
                    calculateProgress(selChannel.program.startTime, selChannel.program.endTime, currentTime, 500) + "px");

                setCurrentFocusMarquee(domIndex);
            }
        }
    }

    function removeCurrentFocusMarquee(domIndex) {
        restoreMarqueeCommon(".ChannelItem span", domIndex * 2 + 1, -1, 330);
    }

    function setCurrentFocusMarquee(domIndex) {
        try {
            var selChannel = oprtData.channels[currentList.name][oprtData.channelIndex];
            var crntSelector = $(".ChannelItem span").eq(domIndex * 2 + 1);
            var wdth = Math.ceil(parseFloat(crntSelector.css("width")));
            if (wdth >= 330) {
                crntSelector.html(getMarqueeTagByLen(selChannel.name, 330));
            }
        } catch (ex) {

        }
    }

    function getProgramInfo(chnl) {
        if(!chnl) return;
        hiWebOsFrame.lockAllKeys("info");
        dtlEPGIterator = createProgramIterator(chnl, currentTime, 0, onGetProgramInfo);
        dtlEPGIterator.readNextRows(4);
    }

    function onGetProgramInfo(chnl, m_event) {
        if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprtData.programs = eventRowsToProgram(m_event.rows, chnl);
            try {
                if (m_event.rows.length > 0 &&
                    parseInt(m_event.rows[0][SPProgram.STARTTIME]) > parseInt(currentTime)) {
                    oprtData.programs.splice(0, 0, {
                        title: "No program",
                        startTime: 0,
                        endTime: 0,
                        detail: "No program information",
                        guidance: "",
                        channelUid: chnl.uid,
                        playId: chnl.playId,
                        reminder: false,
                        record: false,
                        noProgram: true
                    });
                }
            }
            catch (ex) {
                DBG_ERROR(ex.message)
            }
            hiWebOsFrame[self.id].rewriteDataOnly();
            hiWebOsFrame[self.id].hiFocus("livetv_chlist_programs");
            resetStyleWhenFlipChInfo(LISTINDEX.INFO);
            hiWebOsFrame.unLockAllKeys("info");
        }
    }

    function clearUpdateTime() {
        try {
            var chnls = oprtData.channels[currentList.name];
            if (!chnls || chnls.length == 0) return;
            for (var i = 0; i < chnls.length; i++) {
                chnls[i].updateTime = 0;
            }
            $(".ProgramProgrees div").css("width", "0px");
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function clearChannelProgram() {
        try {
            if (!currentList.name || !oprtData.channels[currentList.name]) {
                // DBG_ERROR("list[" + currentList.name + "] do not need clear.");
            } else {
                var chnls = oprtData.channels[currentList.name];
                for (var i = 0; i < chnls.length; i++) {
                    chnls[i].program = {
                        title: "",
                        startTime: 0,
                        endTime: 0
                    };
                    chnls[i].updateTime = 0;
                }
                $(".ProgramItem > span").html("");
                $(".ProgramProgrees div").css("width", "0px");
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
    function setProgramInfoEllipsis(idx) {
        if($("#livetv_chlist_programs li > div.CHListProgramDetail span").eq(idx).height() < 380){
            $("#livetv_chlist_programs li > div.CHListEllipsis").eq(idx).css("visibility", "hidden");
        }
    }

    function resetStyleWhenFlipChInfo(idx) {
        listIndex = idx;
        hideNoItem();
        hideFocusBar();
        switch (listIndex) {
            case LISTINDEX.LIST:
                leftItem = 0;
                visibleListCount = self.getListVisibleCount();
                $("#livetv_chlist_list").removeAttr("style");
                $("#ch_list_func_panel").attr("class", "CHListFunctionHalfPanel");
                $(".CHListListPanel").css("visibility", "visible");
                break;
            case LISTINDEX.FUNCTION:
                $(".CHListArrow").css("visibility", "hidden");
                $(".CHListListPanel").css("visibility", "hidden");
                $("#ch_list_func_panel").attr("class", "CHListFunctionPanel").css("visibility", "visible");
                break;
            case LISTINDEX.CHANNEL:
                getCurrentPageProgramsInfo();
                $("#" + LiveTVModule.CHANNEL_LIST + " > div").removeAttr("style");
                $("#ch_list_func_panel").attr("class", "CHListFunctionPanel")
                $(".CHListTop span").removeAttr("class");
                $("#ch_list_title").attr("class", "CHListTitleFocus");
                $(".CHListMiddle").css("margin-left", "0");

                $("#ch_list_to_right_tip").text(txtList.info);
                $("#ch_list_to_right_img").attr("src", imgList.rightArrow);
                showFocusBar();
                if(oprtData.channels[currentList.name].length > 0){
                    closeNoItem();
                }
                else{
                    showNoItem();
                }
                break;
            case LISTINDEX.INFO:
                $(".CHListTop span").removeAttr("class");
                $("#ch_list_info").attr("class", "CHListTitleFocus");
                $("#livetv_chlist_programs li > div").removeAttr("style");
                $("#ch_list_to_right_tip").text(txtList.detail);
                $("#ch_list_to_right_img").attr("src", imgList.detail);

                for(var i = 0; i < 4; i++){
                    var prgrm = oprtData.programs[i];
                    if(!prgrm) continue;
                    if(0 == prgrm.startTime){
                        $("#livetv_chlist_programs li.focus > div").css("visibility", "hidden");
                        $("#livetv_chlist_programs li.focus > div.CHListProgramName").css("visibility", "visible");
                    }
                    else{
                        var duration = calculateProgress(prgrm.startTime, prgrm.endTime, currentTime, 200);
                        $("#livetv_chlist_programs li div.CHListProgramProgress div").eq(i).css("width", duration + "px");
                    }
                }
                setProgramInfoEllipsis(0);
                $(".CHListMiddle").css("margin-left", "-620px");
                break;
            default:

                break
        }
    }

    function showFocusBar() {
        if(pageFlip) return;
        $("#ch_list_focus_bar").css("visibility", "visible");
    }

    function hideFocusBar(){
        if(pageFlip) return;
        $("#ch_list_focus_bar").removeAttr("style");
    }

    function showNoItem(onOpen) {
        $(".CHListNoItem").removeAttr("style");
        $(".CHListItems").css("visibility", "hidden");
        $(".CHListNoItem").css("display", "block");
        if(!onOpen && self.id != hiWebOsFrame.getCurrentPageId()){
            hideNoItem();
        }
    }
    function closeNoItem () {
        $(".CHListItems").removeAttr("style");
        $(".CHListNoItem").removeAttr("style");

    }
    function hideNoItem() {
        $(".CHListNoItem").css("box-shadow", "none");
    }

    function rewritePageData(pageData) {
        if (null == currentList) {
            currentList = {
                uid: oprtData.curChannel.listUid,
                name: lstNameMap[oprtData.curChannel.listUid]
            }
            currentListForChannelEdit = {
                uid: oprtData.curChannel.listUid,
                name: lstNameMap[oprtData.curChannel.listUid]
            }
        }
        var lstName = currentList.name;
        if (!oprtData.channels[lstName]) oprtData.channels[lstName] = [];

        // Title
        pageData.ch_list_title.Data = lstName ? lstName : lstNameMap[oprtData.curChannel.listUid];
        pageData.ch_list_info.Data = "Information";

        // Channel
        var i;
        pageData.livetv_chlist_channels.Data = [];
        pageData.livetv_chlist_channels.disableItem = [];
        for (i = 0; i < pageSize; i++) {
            var chnl = oprtData.channels[lstName][oprtData.beginIndex + i];
            var item;
            if (chnl) {
                item = {
                    channel_number: {Data: chnl.number},
                    channel_name: {Data: chnl.name + " "},
                    program_name: {Data: (chnl.program && !chnl.program.noProgram) ? chnl.program.title : ""},
                    channel_lock: {Data: chnl.isLock ? imgList.lock : imgList.noImg},
                    channel_encrypt: {Data: chnl.isEncrypt ? imgList.encrypt : imgList.noImg},
                    channel_fav: {Data: chnl.favType ? imgList.favorite : imgList.noImg}
                };
            } else {
                item = {
                    channel_number: {Data: ""},
                    channel_name: {Data: ""},
                    program_name: {Data: ""},
                    channel_lock: {Data: imgList.noImg},
                    channel_encrypt: {Data: imgList.noImg},
                    channel_fav: {Data: imgList.noImg}
                };
                if (i > 0) {
                    pageData.livetv_chlist_channels.disableItem.push(i);
                }
            }
            pageData.livetv_chlist_channels.Data.push(item);
        }
        pageData.livetv_chlist_channels.SelectedIndex = oprtData.channels[lstName].length > 0 ? oprtData.channelIndex - oprtData.beginIndex : -1;
        pageData.livetv_chlist_channels.DataSelectedIndex = -1;

        // Info
        var selChannel = oprtData.channels[lstName][oprtData.channelIndex];
        if(selChannel){
            pageData.current_channel_number.Data = selChannel.number;
            pageData.current_channel_name.Data = selChannel.name + " ";
            pageData.current_channel_lock.Data = selChannel.isLock ? imgList.lock : imgList.noImg;
            pageData.current_channel_encrypt.Data = selChannel.isEncrypt ? imgList.encrypt : imgList.noImg;
            pageData.current_channel_fav.Data = selChannel.favType ? imgList.favorite: imgList.noImg;
        }
        pageData.livetv_chlist_programs.Data = [];
        pageData.livetv_chlist_programs.disableItem = [];
        for (i = 0; i < 4; i++) {
            var prgrm = oprtData.programs[i];
            if (!prgrm) {
                pageData.livetv_chlist_programs.Data.push({
                    program_name: {Data: ""},
                    program_start_time: {Data: 0},
                    program_end_time: {Data: 0},
                    program_detail: {Data: ""},
                    program_reminder: {Data: imgList.noImg},
                    program_record: {Data: imgList.noImg}
                });
                pageData.livetv_chlist_programs.disableItem.push(i);
            } else {
                pageData.livetv_chlist_programs.Data.push({
                    program_name: {Data: prgrm.title},
                    program_start_time: {Data: UTCToLocalTime(prgrm.startTime)},
                    program_end_time: {Data: UTCToLocalTime(prgrm.endTime)},
                    program_detail: {Data: getCurrentContentLanguage(prgrm.detail)},
                    program_reminder: {Data: prgrm.reminder ? imgList.reminder : imgList.noImg},
                    program_record: {Data: prgrm.record ? imgList.record : imgList.noImg}
                });
            }
        }
        pageData.livetv_chlist_programs.SelectedIndex = 0;

        //List
        pageData.livetv_chlist_list.Data = [];
        pageData.livetv_chlist_list.disableItem = [];
        pageData.livetv_chlist_list.SelectedIndex = 0;//default 0: for current list will be filtered.
        for(i = 0; i < oprtData.channelList.length; i++){
            var tempList = oprtData.channelList[i];
            pageData.livetv_chlist_list.Data.push({
                list_name: {Data: tempList.name}
            });
            if (!tempList.display){
                pageData.livetv_chlist_list.disableItem.push(i);
            }
            if(tempList.uid == currentList.uid){
                pageData.livetv_chlist_list.SelectedIndex = i;
            }
        }
    }

    self.getChannelListInited = function(){
        return firstInited;
    }

    self.initChannelList = function() {
        if (initList) {
            DBG_ALWAYS("channel list is initing, will init again after inited.");
            initAgain = true;
            return;
        }
        schedule.getScheduleList(false);
        if (tv && !model.tvservice.onChannelListNameUpdate) {
            model.tvservice.onChannelListNameUpdate = listUpdateNotify;
            model.tvservice.onChannelListUpdate = channelsUpdateNotify;
        }

        //oprtData.curChannel = livetvmain.recheckCurrentChannelInfo();
        oprtData.channelList = [];
        oprtData.beginIndex = 0;
        oprtData.channelIndex = 0;
        oprtData.channels = {};
        oprtData.fullChannels = {};
        oprtData.programs = [];

        inputedNum = "";
        inputTimer = 0;
        numChange = false;
        repeatStep = 0;
        numChangeList = null;
        reachMax = false;

        currentList = null;
        currentListForChannelEdit = null;
        maxNumLenMaps = {};
        initList = true;
        initAgain = false;
        lastChannel = null;
        pubPreChangeChannel = null;
        if(firstInited){
            self.clearRecentWatch();
        }
        else{
            setRecentWatch(true);
        }
        listIterator = createListIterator(onGetChannelList);
        listIterator.readNextRows(lstMaxRow);
        firstInited = true;
    }


    function keyHandlerOnChannelList(dir, _this) {
        autoCloseTimer();
        var ret;
        try {
            switch (listIndex) {
                case LISTINDEX.LIST:
                    if (KeyDir.DOWN == dir){
                        resetStyleWhenFlipChInfo(LISTINDEX.FUNCTION);
                        hiWebOsFrame[self.id].getCaE("livetv_chlist_functions").setSelectedIndex(1);
                    }
                    else if(KeyDir.LEFT == dir || KeyDir.RIGHT == dir){
                        setListItemPosition(_this.SelectedIndex, dir);
                    }
                    else{

                    }
                    break;
                case LISTINDEX.FUNCTION:
                    if (KeyDir.RIGHT != dir) return;
                    resetStyleWhenFlipChInfo(LISTINDEX.CHANNEL);
                    //hiWebOsFrame[self.id].getCaE("livetv_chlist_channels").setDataSelectedIndex(-1);
                    break;
                case LISTINDEX.CHANNEL:
                    if (KeyDir.LEFT == dir) {
                        removeCurrentFocusMarquee(_this.SelectedIndex);
                        resetStyleWhenFlipChInfo(LISTINDEX.FUNCTION);
                        //_this.setDataSelectedIndex(_this.SelectedIndex);
                        hiWebOsFrame[self.id].hiFocus("livetv_chlist_functions");
                    } else if (KeyDir.RIGHT == dir) {
                        // resetStyleWhenFlipChInfo(LISTINDEX.INFO);
                        removeCurrentFocusMarquee(_this.SelectedIndex);
                        getProgramInfo(oprtData.channels[currentList.name][oprtData.channelIndex]);
                    } else {
                        ret = setScrollbarPostion(_this.SelectedIndex, dir, oprtData.channels[currentList.name]);
                        getCurrentPageProgramsInfo();
                        if (!ret) _this.hiFocus();
                    }
                    break;
                case LISTINDEX.INFO:
                    if (KeyDir.LEFT == dir) {
                        resetStyleWhenFlipChInfo(LISTINDEX.CHANNEL);
                    } else {

                    }
                    break;
                default:
                    break;
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
        return ret;
    }

    self.keyDownOnChannelList = function() {
        return keyHandlerOnChannelList(KeyDir.DOWN, this);
    }
    self.keyUpOnChannelList = function() {
        return keyHandlerOnChannelList(KeyDir.UP, this);
    }
    self.keyLeftOnChannelList = function() {
        return keyHandlerOnChannelList(KeyDir.LEFT, this);
    }
    self.keyRightOnChannelList = function() {
        return keyHandlerOnChannelList(KeyDir.RIGHT, this);

    }
    self.keyCHUpOnChannelList = function() {
        return keyHandlerOnChannelList(KeyDir.CHUP, this);
    }
    self.keyCHDownOnChannelList = function() {
        return keyHandlerOnChannelList(KeyDir.CHDOWN, this);
    }

    self.keyBlueOnChannelList = function() {
        var prgrm = oprtData.programs[this.SelectedIndex];
        closeLiveTVModule();
        openEPGDetailPage(prgrm, hiWebOsFrame[LiveTVModule.MAIN]);
    }

    self.keyEnterOnChannelList = function() {
        switch (listIndex) {
            case LISTINDEX.LIST:
                var tempList = copyObj(oprtData.channelList[this.SelectedIndex]);
                if (tempList.uid == currentList.uid && tempList.satId == currentList.satId) {
                    //current list
                    clearChannelProgram();
                    resetStyleWhenFlipChInfo(LISTINDEX.CHANNEL);
                    //hiWebOsFrame[self.id].getCaE("livetv_chlist_channels").setDataSelectedIndex(-1);
                    return;
                }
                currentList = tempList;
                currentListForChannelEdit = tempList ;
                if (tempList.uid != oprtData.curChannel.listUid ||
                 tempList.satId != oprtData.curChannel.satId) {//not current played list
                    oprtData.channelIndex = 0;
                }
                else {//current played list
                    oprtData.channelIndex = getCurrentChannelIndex(currentList, null);
                }
                //hiWebOsFrame[self.id].getCaE("livetv_chlist_channels").setDataSelectedIndex(-1);
                oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
                clearChannelProgram();
                hiWebOsFrame[self.id].rewriteDataOnly();
                setScrollbarPostion(0, KeyDir.NONE, oprtData.channels[currentList.name]);
                resetStyleWhenFlipChInfo(LISTINDEX.CHANNEL);
                clearFilterList();
                break;
            case LISTINDEX.FUNCTION:
                if(0 === this.SelectedIndex){
                    var ind = oprtData.channelList.length - 1;
                    while(ind > 0 && (oprtData.channelList[ind].uid != currentList.uid ||
                        oprtData.channelList[ind].satId != currentList.satId)){
                        ind--;
                    }
                    hiWebOsFrame[self.id].getCaE("livetv_chlist_list").setSelectedIndex(ind);
                    resetStyleWhenFlipChInfo(LISTINDEX.LIST);
                    setListItemPosition(ind, KeyDir.NONE);
                    hiWebOsFrame[self.id].hiFocus("livetv_chlist_list");
                }
                else if(1 == this.SelectedIndex){
                    clearTimeout(closeTimer);
                    hiWebOsFrame.lockAllKeys("filter");
                    $("#" + LiveTVModule.CHANNEL_LIST + " > div").removeAttr("style");
                    $("#ch_list_func_panel").attr("class", "CHListFunctionPanel");
                    listIndex = LISTINDEX.CHANNEL;
                    hiWebOsFrame.createPage(LiveTVModule.CHANNEL_LIST_FILTER, null, null, null, function (page) {
                        clearTimeout(closeTimer);
                        hiWebOsFrame[LiveTVModule.CHANNEL_LIST_FILTER] = page;
                        hiWebOsFrame[LiveTVModule.CHANNEL_LIST_FILTER].open();
                        hiWebOsFrame[LiveTVModule.CHANNEL_LIST_FILTER].hiFocus("chlist_filter_row_0");
                        hiWebOsFrame.unLockAllKeys("filter");
                    });
                }
                else{
                    hiWebOsFrame[self.id].close();
                    openChannelManager(hiWebOsFrame[LiveTVModule.MAIN]);
                }
                break;
            case LISTINDEX.CHANNEL:
                if (0 === oprtData.channels[currentList.name].length) return;
                hiWebOsFrame[self.id].close();
                var chnl = oprtData.channels[currentList.name][oprtData.channelIndex];
                oprtData.curChannel = livetvmain.getCurrentChannelInfo();
                if (hotelOnChannel) {
                    hotelOnChannel = false;
                    model.hotel.hotelOnChannel(hotelTuner[parseInt(chnl.playId) - 1], chnl.uid, 1);
                }
                if (chnl.uid == oprtData.curChannel.uid &&
                    chnl.playId == oprtData.curChannel.playId &&
                    chnl.listUid == oprtData.curChannel.listUid) {
                    openLiveTVModule([Msg.INFO, 0]);
                }
                else {
                    setTimeout(
                        function() {
                            if (livetvmain.getCurrentSourceInnerId() != SourceList.TV) changeSourceTo(0);
                            if (self.changeChannel(null, chnl)) openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0, Msg.AUDIO, 0, Msg.SIGNAL, 0]);
                        }, 10);
                }
                break;
            case LISTINDEX.INFO:
                var prgrm = oprtData.programs[this.SelectedIndex];
                if (!prgrm || 0 == this.SelectedIndex) {
                    try {
                        hiWebOsFrame[self.id].close();
                        var chnl = oprtData.channels[currentList.name][oprtData.channelIndex];
                        if(!chnl) {
                            openLiveTVModule([Msg.INFO, 0]);
                            return;
                        }
                        oprtData.curChannel = livetvmain.getCurrentChannelInfo();

                        if (chnl.uid == oprtData.curChannel.uid &&
                            chnl.playId == oprtData.curChannel.playId &&
                            chnl.listUid == oprtData.curChannel.listUid) {
                            openLiveTVModule([Msg.INFO, 0]);
                        }
                        else {
                            setTimeout(function() {
                                self.changeChannel(null, chnl);
                                openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0, Msg.AUDIO, 0]);
                            }, 10);
                        }
                    }
                    catch (ex) {
                        DBG_ERROR(ex.message);
                        closeLiveTVModule();
                        openLiveTVModule([Msg.INFO, 0]);
                    }
                }
                else {
                    closeLiveTVModule();
                    openBookAddOrEditPage(null, prgrm, hiWebOsFrame[LiveTVModule.MAIN]);
                }

                break;
            default:
                break;
        }
    }

    self.aftKeyHandlerOnChannelList = function() {
        if(LISTINDEX.INFO != listIndex) return;
        setProgramInfoEllipsis(this.SelectedIndex);
    }

    self.onFocusListName = function(){
        restoreMarqueeCommon("#livetv_chlist_list span", -1, this.SelectedIndex, 150);
    }
    self.onBlurListName = function(){
        restoreMarqueeCommon("#livetv_chlist_list span", this.SelectedIndex, -1, 150);
    }

    /**
     * [doFilter description]
     * @param  {[type]} chnls [description]
     * @param  {[type]} flag  [description]
     * @return {[type]}       [description]
     *  0: ALL/TV/RADIO/DATA
     *  1: ALL/HD/SD/UHD
     *  2: ALL/LOCK/UNLOCK
     *  3: ALL/FREE/SCRAMBLE
     */
    function doFilter(chnls, flag, name) {
        var filtered = chnls;
        if(null !== name) filtered = filtered.filter(function(v) {return v.name.toLowerCase().indexOf(name.toLowerCase()) > -1});
        if(0 !== flag[0]) filtered = filtered.filter(function(v) {return v.serviceType == flag[0]});
        if(0 !== flag[1]) filtered = filtered.filter(function(v) {return v.Definition == flag[1]});
        // if(2 === flag[1]) filtered = filtered.filter(function(v) {return !v.isHD});
        if(1 === flag[2]) filtered = filtered.filter(function(v) {return v.attr & (1 << 8)});
        if(2 === flag[2]) filtered = filtered.filter(function(v) {return !(v.attr & (1 << 8))});
        if(1 === flag[3]) filtered = filtered.filter(function(v) {return !(v.attr & (1 << 11))});
        if(2 === flag[3]) filtered = filtered.filter(function(v) {return v.attr & (1 << 11)});
        return filtered;
    }

    function clearFilterList(){
        filterList.flag = null;
        filterList.origin = null;
    }

    self.refreshListAftFilter = function(origin, flag, filterName){
        // autoCloseTimer();
        filterList.origin = origin;

        if(0 === flag[0] + flag[1] + flag[2] + flag[3] && null === filterName){
            filterList.flag = null;
            currentList = origin;
            currentListForChannelEdit = origin;
            delete oprtData.channels[filterList.name];
        }
        else{
            filterList.flag = flag;
            currentList = filterList;
            currentListForChannelEdit = origin;
        }
        oprtData.channels[currentList.name] = doFilter(oprtData.channels[origin.name], flag, filterName);
        oprtData.channelIndex = 0;
        oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
        //hiWebOsFrame[self.id].getCaE("livetv_chlist_channels").setDataSelectedIndex(
        //    oprtData.channelIndex - oprtData.beginIndex);
        hiWebOsFrame[self.id].rewriteDataOnly();
        setScrollbarPostion(0, KeyDir.NONE, oprtData.channels[currentList.name]);
        if(oprtData.channels[currentList.name].length > 0){
            closeNoItem();
        }
        else{
            showNoItem();
        }
    }

    self.focusListAftFilter = function() {
        autoCloseTimer();
        //hiWebOsFrame[self.id].getCaE("livetv_chlist_channels").setDataSelectedIndex(-1);
        hiWebOsFrame[self.id].hiFocus("livetv_chlist_channels");
        showFocusBar();
        if(oprtData.channels[currentList.name].length > 0){
            closeNoItem();
        }
        else{
            showNoItem();
        }
    }

    self.getFilterFlag = function(){
        if(null == filterList.flag) return [0, 0, 0, 0];
        return filterList.flag;
    }

    self.getFilterList = function(){
        if(null == filterList.origin) return currentList;
        return filterList.origin;
    }

    function setFlagVarBeforeChange(param) {
        channelChanging = true;
        var crntChannel = livetvmain.getCurrentChannelInfo();
        if (crntChannel.playId != param.playId ||
            crntChannel.uid != param.uid ||
            crntChannel.listUid != param.listUid) {
            lastChannel = crntChannel;
        }

        if(lastChannel && (lastChannel.isSkip || lastChannel.isHidden)) {
            lastChannel = null;
        }
        setRecentWatch(false, lastChannel);
        clearTimeout(chgErrorTiemr);
        chgErrorTiemr = setTimeout(function() {
            DBG_ERROR("change channel failed. reset flag.");
            setFlagAfterChange();
        }, 5000);
       livetvmain.clearautoOadupdateflag();
    }

    function setFlagAfterChange(clear) {
        clearTimeout(chgErrorTiemr);
        if (channelChanging || 1 == clear)pubPreChangeChannel = null;
        channelChanging = false;
        indexReseted = false;
    }

    function playChannel(playId, uid, listUid, num) {
        if (tv) {
            model.tvservice.playChannel(playId, uid, listUid, num);
        }
        else {
            livetvmain.notifyMainplay([listUid, uid, 1, "av_d", 1000, 1, playId, 0, ECode.NONE]);
        }
    }

    self.getChannelChangeFlag = function() {
        return channelChanging;
    }

    self.setKeyUp = function(keyCode) {
        if(livetvmain.getCurrentSourceInnerId() != SourceList.TV ||
            channelChanging || null == pubPreChangeChannel) return;
        clearTimeout(chgChnlTimer);
        chgChnlTimer = setTimeout(function() {
            self.changeChannel(null, pubPreChangeChannel);
        }, 500);
    }
    self.waitForChangeChannel = function(chFlag) {
        if(channelChanging) {
            DBG_ALWAYS("channel changing......");
            return;
        }
        if(chFlag == 0) { // back
            if(null != lastChannel && !livetvmain.isDisableKeyBack()) {
                livetvinfobar.showSimpleInfoByCh(lastChannel, true, 6000);
                clearTimeout(chgChnlTimer);
                self.changeChannel(null, lastChannel);
            }
            else {
                DBG_INFO("country[" + hiWebOsFrame.getCurrentCountry() + "], lastChannel[" + objToString(lastChannel) + "]");
            }
        }
        else {
            pubPreChangeChannel = getPreChangedChannel(chFlag);
            if(null != pubPreChangeChannel) {
                livetvmain.setDisableChannelNFY(true);
                livetvinfobar.showSimpleInfoByCh(pubPreChangeChannel, true, 6000);
            }
        }
    }

    self.changeChannel = function(chFlag, chParam) {
        try {
            livetvmain.setDisableChannelNFY(false);
            channelFlag = null;
            hiWebOsFrame.needOpenBlankPage = false;
            if(checkChannelListInit()) return false;
            if(tv && (isMainArchiveRecording() || isTimeShiftStatus())) {
                channelFlag = {flag: chFlag, param: chParam};
                PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                    "Sure to exit from PVR or T.Shift?", stopPVROrTshift, canCancelPVRTshift);
                setFlagAfterChange(1);
                return false;
            }
            if(1 == chFlag || -1 == chFlag) {
                indexReseted = false;
                var preChannel = getPreChangedChannel(chFlag);
                DBG_ALWAYS("change channel to " + objToString(preChannel));
                livetvmain.clearLiveTVUI();
                setFlagVarBeforeChange(preChannel);
                playChannel(preChannel.playId, preChannel.uid, preChannel.listUid, 0);
            }
            else if(chParam) {
                DBG_ALWAYS("change channel to " + objToString(chParam));
                if(typeof(chParam) == "string" || typeof(chParam) == "number") {
                    if((chParam + "").indexOf(".") >= 0 || (chParam + "").indexOf("-") >= 0){
                        DBG_INFO("current channel do not need search");
                    }
                    else{
                        playChannel(0, 0, 0, chParam);
                    }
                }
                else {
                    livetvmain.clearLiveTVUI();
                    setFlagVarBeforeChange(chParam);
                    playChannel(chParam.playId, chParam.uid, chParam.listUid, 0);
                }
            }
            else {
                DBG_ERROR("change channel error, flag[" + chFlag + "], param[" + objToString(chParam) + "]");
            }
            return true;

        }
        catch(ex) {
            DBG_ERROR(ex.message);
            return false;
        }
    }

    self.changeInfoBar = function(chFlag) {
        if(rptChgChannel || checkChannelListInit()) return;

        clearTimeout(chgChnlTimer);
        clearInterval(rptInterval);
        DBG_ALWAYS("start repeat change channel");
        rptChgChannel = true;
        function _doChangeOperate() {
            pubPreChangeChannel = getPreChangedChannel(chFlag);
            if(null != pubPreChangeChannel) {
                livetvinfobar.showSimpleInfoByCh(pubPreChangeChannel, true, 6000);
                if(!rptChgChannel) {
                    clearInterval(rptInterval);
                }
            }
            else {
                clearInterval(rptInterval);
                DBG_ERROR("get pre changed channel error.");
            }
        }

        rptInterval = setInterval(_doChangeOperate, 200);
    }

    self.stopRepeat = function(keyCode) {
        if(!rptChgChannel) return;
        rptChgChannel = false;
        DBG_ALWAYS("stop repeat change channel");
    }

    self.getNumChangeFlag = function() {
        return numChange;
    }


    function openNumberInput(num) {

        if(num == ".") {
            if(inputedNum == "") {
                inputedNum = "0.";
            }
            else if(inputedNum.indexOf(".") < 0) {
                inputedNum += ".";
            }
        }
        else {
            inputedNum += (num + "");
        }

        inputedNum = inputedNum.substring(inputedNum.length - 4, inputedNum.length)

        //inputedNum = parseFloat(inputedNum) + "";
        $(".numKeyInput").css("display", "block");
        $(".numKeyInput").text(inputedNum);
    }

    function closeNumberInput() {

        clearTimeout(inputTimer);
        $(".numKeyInput").css("display", "none");
        $(".numKeyInput").text("");
        inputedNum = "";
        inputTimer = 0;
        numChange = false;
        repeatStep = 0;
        numChangeList = null;
        reachMax = false;
    }

    self.clearNumDialog = function() {
        closeNumberInput();
    }

    self.changeChannelByNumKey = function(num) {
        if(reachMax || livetvmain.getCurrentSourceInnerId() != SourceList.TV) return;
        numChange = true;
        openNumberInput(num);
        clearTimeout(inputTimer);
        repeatStep = 0;
        if(null == numChangeList) {
            oprtData.curChannel = livetvmain.getCurrentChannelInfo();
            numChangeList = objectFindByKey(oprtData.channelList, ["uid", "satId"],
                [oprtData.curChannel.listUid, oprtData.curChannel.satId]);
            currentList = (null == numChangeList ? {} : copyObj(numChangeList));
        }

        var iterval = (!!numChangeList && "SA" != InitArea && "COL" != InitArea &&
        inputedNum.length == maxNumLenMaps[numChangeList.name]) ? 100 : 3000;
        if(100 == iterval) reachMax = true;
        inputTimer = setTimeout(function() {
            numChange = false;
            reachMax = false;
            self.changeNumDirectly();
        }, iterval);
    }

    self.changeNumByRepeat = function() {
        if(++repeatStep == 2) {
            self.changeNumDirectly();
        }
    }

    self.changeNumDirectly = function() {
        numChange = false;
        inputedNum = parseFloat(inputedNum) + "";
        if(LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId() || "Voice_assistant_page" == hiWebOsFrame.getCurrentPageId()) {
            var chnl = objectFindByKey(oprtData.channels[currentList.name], "number", inputedNum);
            DBG_ALWAYS("inputedNum[" + inputedNum + "], find channel[" + objToString(chnl) + "]");
            if(null != chnl) {
                self.changeChannel(null, chnl);
            }
            else {
                self.changeChannel(null, inputedNum);
            }
        }
        else {
            DBG_ERROR("you have exited from live tv");
        }
        closeNumberInput();
    }

    self.getCurrentList = function() {
        return   currentListForChannelEdit;
    }

    self.updateChannelAttribute = function(listName, channeluid, playId, keyIdx, val) {
        if(channeluid == livetvmain.getCurrentChannelInfo().uid) {
            livetvmain.recheckCurrentChannelInfo();
        }
        if(!!oprtData.channels[listName]) {
            var ret = objectFindByKey(oprtData.channels[listName], ["uid", "playId"], [channeluid, playId]);
            if(null != ret) {
                ret[SPChannel.ARRAY[keyIdx]] = val;
                if(keyIdx == SPChannel.ATTRIBUTE) {
                    setFlagByAttr(ret, val);
                }
            }
            else {
                DBG_ERROR("can not find channel[" + channeluid + "]");
            }
        }
        else {
            DBG_ERROR("list[" + listName + "] have not been got.");
        }

        //update fav
        for(var i = 1; i <= 4; i++) {
            var ret = objectFindByKey(oprtData.channels["FAV" + i], ["uid", "playId"], [channeluid, playId]);
            if(null != ret) {
                //DBG_ALWAYS("before channelUid[" + channeluid + "]" + SPChannel.ARRAY[keyIdx] + "[" + ret[SPChannel.ARRAY[keyIdx]] + "]");
                ret[SPChannel.ARRAY[keyIdx]] = val;
                if(keyIdx == SPChannel.ATTRIBUTE) {
                    setFlagByAttr(ret, val);
                }
                //DBG_ALWAYS("after channelUid[" + channeluid + "]" + SPChannel.ARRAY[keyIdx] + "[" + ret[SPChannel.ARRAY[keyIdx]] + "]");
            }
        }
    }

    self.clearChannelBlock = function() {
        for(var i = 0; i < oprtData.channelList.length; i++) {
            DBG_INFO("clear list[" + oprtData.channelList[i].name + "] channel lock state");
            var chnls = oprtData.channels[oprtData.channelList[i].name];
            if(!chnls) {
                DBG_ERROR("list[" + oprtData.channelList[i].name + "] is null");
                continue;
            }
            for(var j = 0; j < chnls.length; j++) {
                chnls[j].attr = chnls[j].attr & 65279;
                chnls[j].isLock = false;
            }
        }
        DBG_INFO("all channels' lock state have been cleared");
        livetvmain.recheckCurrentChannelInfo();
        livetvmain.resetLockSwitchMode();
        livetvmain.setUnlockFlag(false);
    }

    self.updateListAttribute = function(listuid, satId, keyIdx, val) {
        var ret = objectFindByKey(oprtData.channelList, ["uid", "satId"], [listuid, satId]);
        if (null != ret) {
            ret[ChannelList.ARRAY[keyIdx]] = val;
        } else {
            DBG_ERROR("can not find list[" + listuid + "]")
        }
    }
    self.updateChannelListByEventRows = function(list, eventRows) {
        try {
            livetvmain.recheckCurrentChannelInfo();
            //DBG_ALWAYS("update list[" + list.name + "], rows " + objToString(eventRows));
            var updated = false;
            for (var i = 0; i < oprtData.channelList.length; i++) {
                if (list.name == oprtData.channelList[i].name) {
                    oprtData.channels[list.name] = eventRowsToChannels(eventRows, list);
                    updated = true;
                    break;
                }
            }
            DBG_ALWAYS("list[" + list.name + "] updated");
            !updated && DBG_ERROR("update list[" + list.name + "] failed.");
        } catch (ex) {
            DBG_ERROR("update list[" + list.name + "] failed. Error[" + ex.message + "]");
        }

    }


    self.syncOtherListWhenEditFav = function(playIds, channelIds,favBit) {
        try {
            for (var k = 0; k < playIds.length; k++) {

                for (var i = 0; i < oprtData.channelList.length; i++) {

                    var list = oprtData.channelList[i];
                    if (list.name.indexOf("FAV") > -1) continue;

                    for (var j = 0; j < oprtData.channels[list.name].length; j++) {
                        var chnl = oprtData.channels[list.name][j];
                        if (chnl.playId != playIds[k]) break;
                        if (chnl.uid == channelIds[k]) {
                            chnl.favType = false;
                            break;
                        }
                    }
                    for (var j = 0; j < oprtData.fullChannels[list.name].length; j++) {
                        var chnl = oprtData.fullChannels[list.name][j];
                        if (chnl.playId != playIds[k]) break;
                        if (chnl.uid == channelIds[k]) {
                            chnl.attr = chnl.attr &(~(1 << favBit));
                            break;
                        }
                    }
                }
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.updateChannelName = function(channelPlayIdArr, channelIdArr, channelNameArr) {
        try {
            for (var i = 0; i < oprtData.channelList.length; i++) {
                var lstName = oprtData.channelList[i].name;
                if (!oprtData.channels[lstName]) continue;
                oprtData.channels[lstName].forEach(function(v, k) {
                    for (var j = 0; j < channelPlayIdArr.length; j++) {
                        if (v.uid == channelIdArr[j] && v.playId == channelPlayIdArr[j]) {
                            v.name = channelNameArr[j];
                            break;
                        }
                    }
                });
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function onRecheckFavChannels(list, m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprtData.channels[list.name] = eventRowsToChannels(m_event.rows, list);
            if(4 == ++readedCount) {
                initList = false;
                DBG_ALWAYS("all fav list rechecked.");
            }
            else {
                DBG_ALWAYS("fav list[" + list.name + "][" + m_event.rows.length + "] rechecked.");
                recheckOneByOne(readedCount + 1);
            }
        }
        else if(m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

            DBG_ALWAYS("recheck total channels of list[" + list.name + "] is " + m_event.totalCount);
            if(m_event.totalCount == 0) {
                onRecheckFavChannels(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                channelIterator[list.name].readNextRows(m_event.totalCount);
            }
        }
    }
    function recheckOneByOne(idx) {
        DBG_ALWAYS("recheck fav list[" + idx + "]");
        var lst = objectFindByKey(oprtData.channelList, "name", ("FAV" + idx));
        if(null != lst) {
            channelIterator[lst.name] = createChannelIterator(lst, onRecheckFavChannels,0);
            channelIterator[lst.name].fetchTotalCount();
        }
        else {
            if(idx < 4) {
                readedCount = idx;
                recheckOneByOne(idx + 1);
            }
            else {
                initList = false;
                readedCount = 0;
                DBG_ALWAYS("recheck fav list successed.");
            }
        }
    }
    self.recheckFavList = function() {
        initList = true;
        readedCount = 0;
        livetvmain.recheckCurrentChannelInfo();
        recheckOneByOne(1);
    }

    function updateFullChannels(newName, oldName){
        try{
            oprtData.fullChannels[newName] = oprtData.fullChannels[oldName];
            delete oprtData.fullChannels[oldName];
        }
        catch (ex){
            DBG_ERROR(ex.message);
        }
    }

    function onUpdateChannelListName(m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            DBG_ALWAYS("list updated: " + objToString(m_event));
            oprtData.channelList = eventRowsToChannelList(m_event.rows);
            var keys = Object.keys(oprtData.channels);
            DBG_ALWAYS("old list name: " + objToString(keys));
            for(var i = 0; i < keys.length; i++) {
                var tempChnl = !!oprtData.channels[keys[i]] ? oprtData.channels[keys[i]][0] : null;
                if(!!tempChnl) {
                    var lst = objectFindByKey(oprtData.channelList, ["uid", "satId"], [tempChnl.listUid, tempChnl.satId]);
                    if(lst.name != keys[i]) {
                        DBG_ALWAYS("update " + keys[i] + " to " + lst.name);
                        oprtData.channels[lst.name] = oprtData.channels[keys[i]];
                        delete oprtData.channels[keys[i]];
                        updateFullChannels(lst.name,keys[i]);
                    }
                    else {
                        DBG_ALWAYS("do not need update " + lst.name);
                    }
                }
            }
            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.CHANNEL_LIST) {
                self.backToLiveTV();
            }
            hiWebOsFrame[self.id].rewrite();
        }
    }

    function listUpdateNotify() {
        DBG_ALWAYS("notify to update list.");
        if(initList) {
            DBG_ALWAYS("channel list is initing, will init again after inited.");
            initAgain = true;
            initName = true;
            return;
        }
        oprtData.curChannel = livetvmain.getCurrentChannelInfo();
        listIterator = createListIterator(onUpdateChannelListName);
        listIterator.readNextRows(lstMaxRow);
    }
    self.tempAddNotify = function() {
        channelsUpdateNotify("avid");
    }

    function onUpdateChannelList(listUid, m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            DBG_ALWAYS("list updated: " + objToString(m_event));
            oprtData.channelList = eventRowsToChannelList(m_event.rows);
            var lst = objectFindByKey(oprtData.channelList, "uid", listUid);
            channelUpdateIterator = createChannelIterator(lst, onUpdateChannels,0);
            if(null != channelUpdateIterator){
                channelUpdateIterator.fetchTotalCount();
            }
            else{
                initList = false;
            }
        }
    }

    function onUpdateChannels(list, m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            initList = false;
            oprtData.channels[list.name] = eventRowsToChannels(m_event.rows, list);
            DBG_ALWAYS("list[" + list.name + "] channels updated.");
            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.CHANNEL_LIST) {
                self.backToLiveTV();
            }
            try {
                hiWebOsFrame[self.id].rewrite();
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }
            checkInitAgain();
        }
        else if(m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            DBG_ALWAYS("total channels of list[" + list.name + "] is " + m_event.totalCount);
            if(m_event.totalCount == 0) {
                onUpdateChannels(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                channelUpdateIterator.readNextRows(m_event.totalCount);
            }
        }
    }

    function channelsUpdateNotify(listUid) {
        var searchPageIds = [
            "settingChSetAutoScanPageId",
            "settingChSetEUAutoScanPageId",
            "settingChSetAutoSatelliteListDialogId",
            "settingChSetSelSatellitePageId",
            "settingChSetDTVManuPageId",
            "settingChSetDTVTManuSetPageId",
            "settingChSetDTVCManuSetPageId",
            "settingChSetATVManuSetPageId"];

        var tempList = objectFindByKey(oprtData.channelList, "uid", listUid);
        DBG_INFO("receive channel list update[" + listUid + "].");
        oprtData.curChannel = livetvmain.getCurrentChannelInfo();
        if(initList) {
            DBG_ALWAYS("channel list is reading, do not receive update.");
        }
        else if(searchPageIds.indexOf(hiWebOsFrame.getCurrentPageId()) > -1) {
            DBG_ALWAYS("current is channel search page, do not receive update.");
        }
        else if(tv && 1 == model.channelSearch.getRunning()) {
            DBG_ALWAYS("channel searching, do not receive update.");
        }
        else if(null == tempList) {
            DBG_ALWAYS("can not find this list[" + listUid + "], recheck.");
            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.CHANNEL_LIST) {
                DBG_ALWAYS("channel list is on focus, close channel list first");
                self.backToLiveTV();
            }
            initList = true;
            listIterator = createListIterator(onUpdateChannelList.bind(this, listUid));
            listIterator.readNextRows(lstMaxRow);
        }
        else {
            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.CHANNEL_LIST) {
                DBG_ALWAYS("channel list is on focus, close channel list first");
                self.backToLiveTV();
            }
            initList = true;
            channelUpdateIterator = createChannelIterator(tempList, onUpdateChannels,0);
            channelUpdateIterator.fetchTotalCount();
        }
    }

    self.tryToUpdateChannel = function(newChnl) {

        try {
            setFlagAfterChange();
            if(newChnl.uid == 0) {
                DBG_INFO("invalid channel");
                return;
            }
            var lstName = "", founded = false;
            var tempList = objectFindByKey(oprtData.channelList, ["uid", "satId"], [newChnl.listUid, newChnl.satId]);
            if(null == tempList) {
                DBG_ERROR("can not find any channel list from channel[" + objToString(newChnl) + "], recheck current list");
                channelsUpdateNotify(newChnl.listUid);
            }
            else {
                lstName = tempList.name;
                if(!!oprtData.channels[lstName]) {
                    for(var i = 0; i < oprtData.channels[lstName].length; i++) {
                        if(newChnl.uid == oprtData.channels[lstName][i].uid &&
                            newChnl.playId == oprtData.channels[lstName][i].playId &&
                            newChnl.name == oprtData.channels[lstName][i].name) {
                            founded = true;
                            break;
                        }
                    }
                }

                if(!founded) {
                    DBG_ALWAYS("new added channel. " + objToString(newChnl));
                    channelsUpdateNotify(newChnl.listUid);
                }
            }
            //DBG_ALWAYS("hiWebOsFrame[self.id].visible = " + hiWebOsFrame[self.id].visible);
            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.CHANNEL_LIST) {
                if(initList){
                    DBG_ALWAYS("channel list is on focus, close channel list first");
                    self.backToLiveTV();
                }
                //MT5657VL2EU-1280
                //else if(hiWebOsFrame[self.id].visible){
                    //hiWebOsFrame[self.id].open();
                //}
            }
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.hasChannels = function() {
        var ret = tv ? 1 == model.tvservice.getChannelListSaved() : true;
        DBG_ALWAYS("has channel ret[" + ret + "]");
        return ret;
    }

    function getVisibleIndex(idx){
        var vis_idx = 0;
        for(var i = 0; i <= idx; i++) {
            if(oprtData.channelList[i].display) {
                vis_idx++;
            }
        }
        return vis_idx - 1;
    }

    self.getListVisibleCount = function() {
        var cnt = 0;
        for(var i = 0; i < oprtData.channelList.length; i++) {
            if(oprtData.channelList[i].display) {
                cnt++;
            }
        }
        return cnt;
    }


    self.getRefLists = function() {
        return oprtData.channelList;
    }
    self.getAllChannels = function() {

        var chnlKey = Object.keys(oprtData.channels), obj = [];
        var element = {};
        for(var i = 0; i < chnlKey.length; i++) {
            if(chnlKey[i] == filterList.name) continue;
            if(chnlKey[i].indexOf("FAV") < 0 && !!oprtData.channels[chnlKey[i]]) {
                element.name = chnlKey[i];
                element.list = copyObj(oprtData.channels[chnlKey[i]]);
                obj.push(copyObj(element));
                // obj[chnlKey[i]] = copyObj(oprtData.channels[chnlKey[i]]);
            }
            else {
                // obj[chnlKey[i]] = [];
            }
        }
        return obj;
    }
    self.getAllFavChannels = function() {
        var chnlKey = Object.keys(oprtData.channels), obj = [];
        var element = {};
        for(var i = 0; i < chnlKey.length; i++) {
            if(chnlKey[i].indexOf("FAV") >= 0 && !!oprtData.channels[chnlKey[i]]) {
                element.name = chnlKey[i];
                element.list = copyObj(oprtData.channels[chnlKey[i]]);
                obj.push(copyObj(element));
                // obj[chnlKey[i]] = copyObj(oprtData.channels[chnlKey[i]]);
            }
            else {
                // obj[chnlKey[i]] = [];
            }
        }
        return obj;

    }
    self.getChannelListById = function(list){
        var listUid = list.uid , satId = list.satId;
        var obj = objectFindByKey(oprtData.channelList, ["uid", "satId"], [listUid, satId]);
        if(null == obj || !oprtData.fullChannels[obj.name]) return [];
        return oprtData.fullChannels[obj.name];
    }

    self.getEPGCurrentChannel = function() {
        var curChannel = livetvmain.getCurrentChannelInfo();
        var curList = objectFindByKey(oprtData.channelList, ["uid", "satId"], [curChannel.listUid, curChannel.satId]);
        if(null == curList) {
            DBG_ERROR("can not find the list by channel[" + objToString(curChannel) + "]");
            return null;
        }
        var currentPlay = {
            list: curList,
            listUid: curChannel.listUid,
            listName: curList.name,
            satId: curChannel.satId,
            channelIndex: getEPGChannelIndex(curList, curChannel),
            channelId: curChannel.uid
        };
        return currentPlay;
    }

    function checkChannelListInit() {
        if(!initList) return false;
        showMsg("", "Reading the channel list. Please try again later");
        return true;
    }

    self.getChannelListInitState = function() {
        return initList;
    }

    self.getChangeChannelFlag = function() {
        return channelFlag;
    }

    self.setChangeChannelFlag = function(v) {
        channelFlag = v;
    }

    self.changeChannelFromReminder = function(prgrm) {
        var ret = true;
        hiWebOsFrame[LiveTVModule.MAIN].operateData.callBackFunc = null;
        if(!!prgrm) {
            var chnlParam = {
                playId: prgrm.playId,
                uid: prgrm.channelUid,
                listUid: prgrm.listUid
            }
            var crntSrc = livetvmain.getCurrentSource();
            if(crntSrc.innerId != SourceList.TV) {
                changeSourceTo(0);
            }
            ret = self.changeChannel(null, chnlParam);
        }
        else {
            DBG_ERROR("change channel from reminder parameters error: " + objToString(prgrm));
        }
        return ret;
    }

    self.openChannelList = function() {
        hotelOnChannel = true;
        hiWebOsFrame[self.id].open();
        hiWebOsFrame[self.id].hiFocus();
    }

    self.getRecentWatch = function() {
        return recentWatch;
    }

    self.clearRecentWatch = function() {
        recentWatch = [];
        deleteNativeFile("hisenseUI/recentWatch", 1);
    }

    function getBeginIndex(channelIndex) {
        if(pageFlip){
            return Math.floor(channelIndex / pageSize) * pageSize;
        }
        else{
            return Math.max(0, channelIndex - 3);
        }
    }
    function flipToFlag(flag, totalSize){
        switch (flag){
            case FLIPFLAG.FIRST:
                oprtData.channelIndex = 0;
                break;
            case FLIPFLAG.NEXT:
                oprtData.channelIndex = oprtData.beginIndex + pageSize;
                break;
            case FLIPFLAG.LAST:
                oprtData.channelIndex = oprtData.beginIndex  - 1;
                break;
            case FLIPFLAG.END:
                oprtData.channelIndex = totalSize - 1;
                break;
            default :
                break;
        }
        oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
        hiWebOsFrame[self.id].rewriteDataOnly();
        //setScrollBarPosition(1);
        //getCurrentPageProgramsInfo();
        return false;
    }

    function pageFlipScroll(idx, dir, chnls){
        var total = (null == chnls) ? 0 : chnls.length;

        if (total <= pageSize) {
            $("#channel_list_scroll_bar").removeAttr("style");
            if(total == 0) return false;
        }
        var flag = true;
        var scrollHeight = panelHeight / Math.ceil(total / pageSize);
        scrollHeight = panelHeight == scrollHeight ? 0 : scrollHeight;
        if (KeyDir.DOWN == dir) {
            // reach the end of the total channels
            if (oprtData.channelIndex == total - 1) {
                flag = flipToFlag(FLIPFLAG.FIRST, total);
            }
            // reach the end of this page
            else if (idx == pageSize - 1) {
                flag = flipToFlag(FLIPFLAG.NEXT, total);
            } else {
                oprtData.channelIndex++;
            }
        }
        else if(KeyDir.UP == dir){
            if(0 == oprtData.channelIndex){
                flag = flipToFlag(FLIPFLAG.END, total);
            }
            else if(0 == idx){
                flag = flipToFlag(FLIPFLAG.LAST, total);
            }
            else{
                oprtData.channelIndex--;
            }
        }
        else if(KeyDir.CHDOWN == dir){
            if(oprtData.beginIndex / pageSize == Math.floor((total - 1) / pageSize)){
                flag = flipToFlag(oprtData.channelIndex == total - 1 ? FLIPFLAG.FIRST : FLIPFLAG.END, total);
            }
            else{
                flag = flipToFlag(FLIPFLAG.NEXT, total);
            }
        }
        else if(KeyDir.CHUP == dir){
            if(0 == oprtData.beginIndex){
                flag = flipToFlag(0 == idx ? FLIPFLAG.END : FLIPFLAG.FIRST, total);
            }
            else{
                flag = flipToFlag(FLIPFLAG.LAST, total);
            }
        }
        else{

        }

        var top = oprtData.beginIndex / pageSize * scrollHeight;
        $("#channel_list_scroll_bar").css("height", scrollHeight + "px");
        $("#channel_list_scroll_bar").css("margin-top", top + "px");

        removeCurrentFocusMarquee((KeyDir.NONE == dir || !flag) ? -1 : idx);
        return flag;
    }

    function nonePageFlipScroll(idx, dir, chnls){
        var total = (null == chnls) ? 0 : chnls.length;
        var rewriteFlag = false,
            scrollHeight, scrollTop, nxtIdx;
        if (0 == total) {
            $("#channel_list_scroll_bar").css("height", "0px");
            $("#channel_list_scroll_bar").css("margin-top", "0px");
            $("#livetv_chlist_channels").css("margin-top", "0px");
            return false;
        } else if (total > 4) {
            scrollHeight = Math.round(panelHeight / Math.ceil(total / 4));
        }
        else{
            scrollHeight = 0;
        }

        if (KeyDir.DOWN == dir) {
            nxtIdx = idx + 1;
            // reach the end of the total channels
            if (oprtData.channelIndex == total - 1) {
                nxtIdx = 0;
                oprtData.channelIndex = oprtData.beginIndex = 0;
                rewriteFlag = true;
                hiWebOsFrame[self.id].rewriteDataOnly();
            }
            // reach the end of this page
            else if (idx == pageSize - 4) {
                oprtData.channelIndex++;
                oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
                rewriteFlag = true;
                nxtIdx = 3;
                hiWebOsFrame[self.id].rewriteDataOnly();
            } else {
                oprtData.channelIndex++;
            }
        } else if (KeyDir.UP == dir) {
            nxtIdx = idx - 1;
            if (oprtData.channelIndex == 0) {
                oprtData.channelIndex = total - 1;
                oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
                nxtIdx = oprtData.channelIndex - oprtData.beginIndex;
                rewriteFlag = true;
                hiWebOsFrame[self.id].rewriteDataOnly();
            } else if (idx == 3 && oprtData.beginIndex > 0) {
                oprtData.beginIndex--;
                oprtData.channelIndex--;
                nxtIdx = 3;
                rewriteFlag = true;
                hiWebOsFrame[self.id].rewriteDataOnly();
            } else {
                oprtData.channelIndex--;
            }
        } else if (KeyDir.CHUP == dir) {
            if (0 == oprtData.channelIndex) {
                oprtData.channelIndex = total - 1;
            } else if (oprtData.channelIndex < 4) {
                oprtData.channelIndex = 0;
            } else {
                oprtData.channelIndex -= 4;
            }
            oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
            nxtIdx = oprtData.channelIndex - oprtData.beginIndex;
            rewriteFlag = true;
            hiWebOsFrame[self.id].rewriteDataOnly();
        } else if (KeyDir.CHDOWN == dir) {
            if (oprtData.channelIndex == total - 1) {
                oprtData.channelIndex = 0;
            } else if (oprtData.channelIndex > total - 5) {
                oprtData.channelIndex = total - 1;
            } else {
                oprtData.channelIndex += 4;
            }
            oprtData.beginIndex = getBeginIndex(oprtData.channelIndex);
            nxtIdx = oprtData.channelIndex - oprtData.beginIndex;
            rewriteFlag = true;
            hiWebOsFrame[self.id].rewriteDataOnly();
        } else {
            nxtIdx = oprtData.channelIndex - oprtData.beginIndex;
        }

        // (oprtData.channelIndex + 1 ) / total = top / (panelHeight - scrollHeight)
        scrollTop = Math.round((panelHeight - scrollHeight) * oprtData.channelIndex / (total - 1));
        $("#channel_list_scroll_bar").css("height", scrollHeight + "px");
        $("#channel_list_scroll_bar").css("margin-top", scrollTop + "px");
        //$("#livetv_chlist_channels").css("margin-top", (-itemHeight * nxtIdx - 9) + "px");
        $("#livetv_chlist_channels").css("margin-top", (-itemHeight * nxtIdx) + "px");

        // restoreMarqueeCommon("#livetv_chlist_channels .ChannelItem span", (KeyDir.NONE == dir || rewriteFlag) ? -1 : (idx * 2 + 1), (nxtIdx * 2 + 1), 330);
        removeCurrentFocusMarquee((KeyDir.NONE == dir || rewriteFlag) ? -1 : idx);
        return !rewriteFlag;
    }


    function setScrollbarPostion(idx, dir, chnls) {
        if(pageFlip){
            return pageFlipScroll(idx, dir, chnls);
        }
        else{
            return nonePageFlipScroll(idx, dir, chnls);
        }
    }

    function setListItemPosition(idx, dir) {
        if(visibleListCount <= maxItem) return;
        idx = getVisibleIndex(idx);
        switch(dir){
            case KeyDir.LEFT:
                if(idx > 0 && leftItem == idx){
                    leftItem--;
                }
            break;
            case KeyDir.RIGHT:
                if(idx < visibleListCount - 1 && idx - leftItem == maxItem - 1){
                    leftItem++;
                }
            break;
            case KeyDir.NONE:
                while(idx - leftItem >= maxItem){
                    leftItem++;
                }
            break;
            default:
            break;
        }
        if(leftItem > 0 && leftItem + maxItem < visibleListCount){
            $(".CHListListPanel").css("background-image", "url(" + imgList.listDoubleArrow + ")");
        }
        else if(leftItem > 0){
            $(".CHListListPanel").css("background-image", "url(" + imgList.listLeftArrow + ")");
        }
        else if(leftItem + maxItem < visibleListCount){
            $(".CHListListPanel").css("background-image", "url(" + imgList.listRightArrow + ")");
        }
        else{
            $(".CHListListPanel").css("background-image", "none");
        }
        $("#livetv_chlist_list").css("margin-left", (-leftItem * itemWidth) + "px")
    }

    function checkInitAgain() {
        initList = false;
        if (initAgain) {
            DBG_ALWAYS("do init channel list again.");
            initAgain = false;
            if (!!hiWebOsFrame[self.id] && hiWebOsFrame[self.id].visible) {
                self.backToLiveTV();
            }
            if (initName) {
                DBG_ALWAYS("do init list name again.");
                initName = false;
                listUpdateNotify();
            } else {
                self.initChannelList();
            }
        }
    }

    function listUpdateNotify() {
        DBG_ALWAYS("notify to update list.");
        if (initList) {
            DBG_ALWAYS("channel list is initing, will init again after inited.");
            initAgain = true;
            initName = true;
            return;
        }
        oprtData.curChannel = livetvmain.getCurrentChannelInfo();
        listIterator = createListIterator(onUpdateChannelListName);
        listIterator.readNextRows(lstMaxRow);
    }


    function onUpdateChannelListName(m_event) {
        if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            DBG_ALWAYS("list updated: " + objToString(m_event));
            oprtData.channelList = eventRowsToChannelList(m_event.rows);
            var keys = Object.keys(oprtData.channels);
            DBG_ALWAYS("old list name: " + objToString(keys));
            for (var i = 0; i < keys.length; i++) {
                var tempChnl = !!oprtData.channels[keys[i]] ? oprtData.channels[keys[i]][0] : null;
                if (!!tempChnl) {
                    var lst = objectFindByKey(oprtData.channelList, ["uid", "satId"], [tempChnl.listUid, tempChnl.satId]);
                    if (lst.name != keys[i]) {
                        DBG_ALWAYS("update " + keys[i] + " to " + lst.name);
                        oprtData.channels[lst.name] = oprtData.channels[keys[i]];
                        delete oprtData.channels[keys[i]];
                        updateFullChannels(lst.name,keys[i]);
                    } else {
                        DBG_ALWAYS("do not need update " + lst.name);
                    }
                }
            }
        }
    }

    function onGetChannelList(m_event) {
        if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprtData.curChannel = livetvmain.recheckCurrentChannelInfo();
            oprtData.channelList = eventRowsToChannelList(m_event.rows);
            if (oprtData.channelList.length < 1) {
                hiWebOsFrame[self.id].rewrite();
                checkInitAgain();
            } else {
                channelIterator = [];
                readedCount = 0;
                readChannelOneByOne(readedCount);
            }
        }
    }


    function readChannelOneByOne(idx) {
        var lst = oprtData.channelList[idx];
        channelIterator[lst.name] = createChannelIterator(lst, onGetChannels,0);
        channelIterator[lst.name].fetchTotalCount();
    }


    function onGetChannels(list, m_event) {
        if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprtData.channels[list.name] = eventRowsToChannels(m_event.rows, list);

            if (++readedCount == oprtData.channelList.length) {
                DBG_ALWAYS("all list gotted");
                if (null == currentList) DBG_ERROR("can not find current list");
                hiWebOsFrame[self.id].rewrite();
                checkInitAgain();
            } else {
                DBG_ALWAYS("list[" + list.name + "][" + m_event.rows.length + "] gotted.");
                readChannelOneByOne(readedCount);
            }

        } else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

            DBG_ALWAYS("total channels of list[" + list.name + "] is " + m_event.totalCount);
            if (m_event.totalCount == 0) {
                onGetChannels(list, {
                    type: TableIterator.EVENT_TYPE_ROWS_READ,
                    rows: []
                });
            } else {
                channelIterator[list.name].readNextRows(m_event.totalCount);
            }
        }
    }


    function eventRowsToChannelList(rows) {
        var lists = [],
            founded = false;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i],
                lst = {};
            lst.name = !!row[ChannelList.NAME] ? row[ChannelList.NAME] : "N/A";
            lst.uid = row[ChannelList.UID];
            lst.satId = row[ChannelList.ATTRIBUTE];
            lst.display = ("EU" == InitArea || 1 == row[ChannelList.DISPLAY]);
            lst.rights = 1 == row[ChannelList.RIGHTS];

            if (null != oprtData.curChannel &&
                lst.uid == oprtData.curChannel.listUid &&
                lst.satId == oprtData.curChannel.satId) {
                founded = true;
                currentList = lst;
                currentListForChannelEdit = lst;
            }

            lists.push(lst);

        }
        if (!founded) {
            DBG_ERROR("can not find current list by current channel[" + objToString(oprtData.curChannel) + "]");
        }

        return lists;
    }

    function getDefinitionFlag(flag) {
        if((flag == 17) || (flag >= 25 && flag <= 30)){
            return 1;//HD
        }
        else if(flag == 31){
            return 3;//UHD
        }
        else{
            return 2;//SD
        }
    }

    function eventRowsToChannels(rows, list) {
        var chnls = [];
        maxNumLenMaps[list.name] = 0;
        oprtData.fullChannels[list.name] = [];
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i],
                chnl = {};

            chnl.number = row[SPChannel.NUMBER];
            chnl.name = row[SPChannel.NAME];
            chnl.uid = row[SPChannel.UID];
            chnl.type = row[SPChannel.TYPE];
            chnl.attr = parseInt(row[SPChannel.ATTRIBUTE]);
            chnl.listUid = list.uid;
            chnl.satId = list.satId;
            chnl.playId = row[SPChannel.PLAYID];
            chnl.serviceType = row[SPChannel.SERVICETYPE];
            chnl.Definition = getDefinitionFlag(parseInt(row[SPChannel.HDSDFLAG]));
            chnl.SvlRecID =  row[SPChannel.SVLRECID];
            chnl.program = {
                title: "",
                startTime: 0,
                endTime: 0
            };
            chnl.updateTime = 0;
            setFlagByAttr(chnl, chnl.attr);
            oprtData.fullChannels[list.name].push(chnl);
            if (tv && chnl.isSkip) {
                // DBG_INFO("channel[" + chnl.name + "] has been skipped.");
                if (!!lastChannel && lastChannel.uid == chnl.uid && lastChannel.playId == chnl.playId) {
                    lastChannel = null;
                }
                continue;
            }
            if (2 == chnl.serviceType && chnl.uid == oprtData.curChannel.uid && chnl.playId == oprtData.curChannel.playId && chnl.satId == oprtData.curChannel.satId) {
                livetvmain.judgeToShowRadioOnly();
            }
            maxNumLenMaps[list.name] = Math.max(maxNumLenMaps[list.name], ("" + chnl.number).length);
            chnls.push(chnl);
        }
        return chnls;
    }

    function eventRowsToProgram(rows, chnl) {
        var prgrms = [];
        if (0 === rows.length) {
            prgrms.push({
                title: "No program",
                startTime: 0,
                endTime: 0,
                detail: "No program information",
                channelUid: chnl.uid,
                playId: chnl.playId,
                reminder: false,
                record: false,
                guidance: "",
                noProgram: true
            });
            return prgrms;
        }

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i], prgrm = {};
            prgrm.title = row[SPProgram.TITLE];
            prgrm.startTime = parseInt(row[SPProgram.STARTTIME]);
            prgrm.endTime = parseInt(row[SPProgram.ENDTIME]);
            prgrm.detail = !!row[SPProgram.DESCRIPTION] ? row[SPProgram.DESCRIPTION] : "No program information";
            // prgrm.detail = readHTMLString("UI/hisenseUI/shy_wrap.txt", 3)
            prgrm.guidance = row[SPProgram.GUIDANCE];
            prgrm.channelNumber = chnl.number;
            prgrm.channelName = chnl.name;
            prgrm.channelUid = chnl.uid;
            prgrm.playId = chnl.playId;
            prgrm.listUid = chnl.listUid;
            var bkFlag = schedule.getIsBookingByProgram(prgrm);
            prgrm.reminder = bkFlag.reminder;
            prgrm.record = bkFlag.record;

            prgrms.push(prgrm);
        }
        return prgrms;
    }

    function setFlagByAttr(chnl, attr) {
        chnl.isSkip = getMaskValue(Mask.SKIP, attr);
        chnl.favType = getMaskValue(Mask.FAVTYPE, attr);
        chnl.isLock = getMaskValue(Mask.LOCK, attr);
        chnl.isEncrypt = getMaskValue(Mask.ENCRYPT, attr);
    }


    function setRecentWatch(reset, chnl) {
        if ("SA" != InitArea && "COL" != InitArea) return;
        if (reset) {
            recentWatch = readFileFromNative("hisenseUI/recentWatch", 1);
            (null == recentWatch) && (recentWatch = []);
        } else {
            if (null == chnl || !chnl.playTime) return;
            var playIter = Math.abs(Date.now() - chnl.playTime) / 1000;
            if (playIter >= 5 * 60) {
                for (var i = 0; i < recentWatch.length; i++) {
                    if (recentWatch[i].playId == chnl.playId && recentWatch[i].uid == chnl.uid) {
                        recentWatch.splice(i, 1);
                        break;
                    }
                }
                recentWatch.push(copyObj(chnl));
                writeFileToNative("hisenseUI/recentWatch", objToString(recentWatch), 1);
            } else {
                DBG_INFO("current channel play time[" + playIter + "] is too close ," +
                    " do not need set recent watch.")
            }
        }
    }

    function getEPGChannelIndex(list, chnl) {
        var idx = 0;
        if(null == list || !oprtData.channels[list.name]) {
            DBG_ERROR("get EPG Channel Index error. list[" + objToString(list) +
            "], channel[" + objToString(chnl) + "]");
        }
        else {
            var chlIdx = 0, item;
            while(chlIdx < oprtData.channels[list.name].length) {
                item = oprtData.channels[list.name][chlIdx];
                if(chnl.uid == item.uid && chnl.playId == item.playId) {
                    DBG_ALWAYS("current channel index gotted.[" + objToString(chnl) +
                    "][" + objToString(item) + "]");
                    break;
                }
                else if(TVTYPE.ATV != item.type) {
                    idx++;
                }
                chlIdx++;
            }
            if(chlIdx == oprtData.channels[list.name].length) {
                DBG_ERROR("can not find current index.");
                idx = -1;
            }
        }
        return idx;
    }

    function preSetStyle(){
        if(pageFlip){
            $("#livetv_chlist_channels").attr("class", "pageFlipClass");
        }
        else{
            $("#livetv_chlist_channels").attr("class", "nonPageFlipClass");
        }
    }

    function autoCloseTimer() {
        var interval = tv ? 30000 : 10000000;
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function() {
            self.backToLiveTV();
        }, interval);
    }

    var imgList = {
        lock: "img/common/lock30.png",
        encrypt: "img/common/encrypt30.png",
        reminder: "img/common/reserve30.png",
        record: "img/common/record30.png",
        noImg: 'img/common/transparent.png',
        rightArrow: 'img/channellist/info32.png',
        leftArrow: 'img/channellist/left32.png',
        detail: 'img/common/blue.png',
        list: 'img/channellist/chllist32.png',
        favorite: 'img/common/favorite30.png',
        blue: 'img/common/blue.png',
        funcList: "img/channellist/ic_list_focus.png",
        funcEdit: "img/channellist/ic_edit_focus.png",
        funcSearch: "img/channellist/ic_search_focus.png",
        listLeftArrow: "img/channellist/channelLeftArrow.png",
        listRightArrow: "img/channellist/channelRightArrow.png",
        listDoubleArrow: "img/channellist/channelDoubleArrow.png"
    }

    var txtList = {
        info: "Information",
        chListSel: "Ch. List",
        chList: "Ch. List",
        detail: "Program details"
    }


    self.pageData = {
        ch_list_title: {Data: ""},
        ch_list_info: {Data: txtList.info},
        ch_list_to_right_tip: {Data: txtList.info},
        ch_list_to_left_tip: {Data: txtList.chList},
        ch_list_to_right_img: {Data: imgList.rightArrow},
        ch_list_to_left_img: {Data: imgList.leftArrow},
        ch_list_no_item: {Data: "No results"},
        livetv_chlist_channels: {Data: []},
        livetv_chlist_programs: {Data: []},
        livetv_chlist_functions: {Data: [
            {
                func_img: {Data:imgList.funcList},
                func_name: {Data: "List"}
            }, {
                func_img: {Data: imgList.funcSearch},
                func_name: {Data: "Search"}
            }, {
                func_img: {Data: imgList.funcEdit},
                func_name: {Data: "Edit"}
            }],
            SelectedIndex: 0
        },
        livetv_chlist_list: {Data: []},
        current_channel_number: {Data: ""},
        current_channel_name: {Data: ""},
        current_channel_lock: {Data: imgList.noImg},
        current_channel_encrypt: {Data: imgList.noImg},
        current_channel_fav: {Data: imgList.noImg},
        rewrite: rewritePageData,
        langData: {
            "More Info": [],
            "No program": [],
            "No program information": [],
            "Information": [],
            "Management": [],
            "Channel List": [],
            "Antenna": [],
            "Cable": [],
            "Satellite": [],
            "Ch. List": [],
            "No results": [],
            "Program details": []
        }
    }
    var oprtData = {
        curChannel: {},
        channelList: [],
        beginIndex: 0,
        channelIndex: 0,
        channels: {},
        fullChannels: {},
        programs: []
    };
    self.pageData.operateData = oprtData;
}

var livetvchlist = new liveTVChannelList();
