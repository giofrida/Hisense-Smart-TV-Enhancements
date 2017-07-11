/**
 * Created by BOB.J on 2014/12/16.
 */
function getChListPageData(opts) {
    var caeData = {
        span: ["livetv_chlist_name", "livetv_chlist_other",
            "livetv_chlist_chi_number", "livetv_chlist_chi_name",
            "livetv_chlist_btnR_name", "livetv_chlist_btnL_name",
            "livetv_list_title"],
        img: ["livetv_chlist_chi_encrypt", "livetv_chlist_chi_lock",
            "livetv_chlist_chi_fav", "livetv_chlist_btnR_img",
            "livetv_chlist_btnL_img"],
        Ul: [{
            id: "livetv_chlist_channels",
            ori: {
                span: ["channel_number", "channel_name", "channel_prgrmname"],
                img: ["channel_encrypt", "channel_lock", "channel_fav"]
            }
        }, {
            id: "livetv_chlist_infos",
            ori: {
                span: ["program_name", "program_start_time",
                    "program_end_time", "program_detail"],
                img: ["program_reminde", "program_record"]
            }
        }, {
            id: "livetv_list_ul",
            ori: {
                div: ["list_icon"],
                span: ["list_name"]
            }
        }]
    };
    opts.CaE = generateCaE(caeData);
    opts.CaE[0].classes = {normal: "listTitleHighlight"};
    opts.CaE[1].classes = {normal: "listTitleNormal"};
    opts.CaE[2].classes = {normal: "channelNumClass"};
    opts.CaE[3].noLangData = true;
    var ulInd = caeData.span.length + caeData.img.length;
    opts.CaE[ulInd].nav = {leftTo: "livetv_list_ul"};
    opts.CaE[ulInd].oriCaE[0].classes = {normal: "channelNumClass"};
    opts.CaE[ulInd].oriCaE[1].noLangData = true;
    opts.CaE[ulInd].handler = {
        befDownHandler: livetvchlist.befKeyDown,
        befUpHandler: livetvchlist.befKeyUp,
        keyChannelDownHandler: livetvchlist.befKeyCHDown,
        keyChannelUpHandler: livetvchlist.befKeyCHUp,
        //keyNum1Handler: livetvchlist.befKeyCHDown,
        //keyNum2Handler: livetvchlist.befKeyCHUp,
        befRightHandler: livetvchlist.openInfoPage,
        befLeftHandler: livetvchlist.openListPage,
        befEnterHandler: livetvchlist.switchToCurrentChannel
    }
    opts.CaE[ulInd].onFocusFun = livetvchlist.onChannelsFocus;
    opts.CaE[ulInd].onBlurFun = livetvchlist.onChannelsBlur;
    opts.CaE[ulInd + 1].nav = {leftTo: "livetv_chlist_channels"};
    opts.CaE[ulInd + 1].handler = {
        befLeftHandler: livetvchlist.openChannelPage,
        //befRightHandler: livetvchlist.checkRolloverRight,
        befEnterHandler: livetvchlist.addProgrmReminder,
        keyBlueHandler: livetvchlist.openPrgrmDetail,
        befDownHandler: livetvchlist.checkRolloverDown,
        befUpHandler: livetvchlist.checkRolloverUp,
        aftDownHandler: livetvchlist.setEllipsisiByHandler,
        aftUpHandler: livetvchlist.setEllipsisiByHandler
    };
    opts.CaE[ulInd + 1].oriCaE[3].strFilter = true;
    opts.CaE[ulInd + 2].nav = {rightTo: "livetv_chlist_channels"};
    opts.CaE[ulInd + 2].handler = {
        befRightHandler: livetvchlist.keyRightOnList,
        //befLeftHandler: livetvchlist.checkRolloverLeft,
        befEnterHandler: livetvchlist.switchCurrentList,
        befDownHandler: livetvchlist.checkRolloverDown,
        befUpHandler: livetvchlist.checkRolloverUp
    };
    opts.CaE[ulInd + 2].onFocusFun = livetvchlist.listPageOnFocus;
    opts.CaE[ulInd + 2].onBlurFun = livetvchlist.listPageOnBlur;
    return livetvchlist.pageData;
}
function liveTVChannelList() {
    var pageFlip = (null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882"));//true: page; false: item
    var self = this;
    self.id = LiveTVModule.CHANNEL_LIST;
    var lockOn = false;
    var imgList = {
        lock: "img/common/lock30.png",
        encrypt: "img/common/encrypt30.png",
        reminder: "img/common/reserve30.png",
        record: "img/common/record30.png",
        noImg: 'img/common/transparent.png',
        rightArrow: 'img/channellist/info32.png',
        leftArrow: 'img/channellist/left32.png',
        detail: 'img/channellist/detail40.png',
        list: 'img/channellist/chllist32.png',
        favorite: 'img/common/favorite30.png',
        blue: 'img/common/blue.png'
    }
    var txtList = {
        info: "Information",
        chListSel: "Ch. List",//"Channel list selection",
         chList: "Ch. List",
        detail: "Program details"
    }
    self.pageData = {
        "livetv_chlist_name": {Data: "DVBC"},
        "livetv_chlist_other": {Data: "Information"},
        "livetv_chlist_chi_number": {Data: "101"},
        "livetv_chlist_chi_name": {Data: "Rbb Berlin"},
        "livetv_chlist_btnR_name": {Data: ""},
        "livetv_chlist_btnL_name": {Data: ""},
        "livetv_chlist_chi_encrypt": {Data: imgList.noImg},
        "livetv_chlist_chi_lock": {Data: imgList.noImg},
        "livetv_chlist_chi_fav": {Data: imgList.noImg},
        "livetv_chlist_btnR_img": {Data: imgList.noImg},
        "livetv_chlist_btnL_img": {Data: imgList.noImg},
        "livetv_list_title": {Data: "Channel List"},
        "livetv_chlist_channels": {
            Data: [],
            SelectedIndex: 0
        },
        "livetv_chlist_infos": {
            Data: [],
            SelectedIndex: 0
        },
        "livetv_list_ul": {
            Data: [],
            SelectedIndex: 0
        },
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
            "Program details": []
        }
    }
    var oprtData = {
        curChannel: {},
        channelList: [],
        channels: {},
        fullChannels: {},
        programs: []
    };
    self.pageData.operateData = oprtData;
    var rptChgChannel = false, rptInterval = 0, tempIndex = -1;
    var currentList = {}, initList = false, initAgain = false, initName = false, changeList = false;
    var listIterator = null, channelIterator = null, channelUpdateIterator = null, canFlipInfo = true;
    var readAllChannels = true;
    var inputedNum = "", inputTimer = 0, reachMax = false;//change channel by number
    var readedCount = 0, readOneByOne = true;
    var chnlInfoTimer = 0, currentTime = 0, exitOri = null, closeTimer = 0, chgChnlTimer = 0;
    var indexReseted = false, lastChannel = null, lstMaxRow = 20, recentWatch = [];
    var numChange = false, channelChanging = false, numChangeList = null, chgErrorTiemr = 0;
    var pubPreChangeChannel = null, imgTipFlag = 0;
    var hotelOnChannel = false, crntEPGIterator = [], dtlEPGIterator = [];
    var lstNameMap = ["Antenna", "Cable", "Satellite", "Satellite"];
    var repeatStep = 0, maxNumLenMaps = {}, crntArea = "";
    var firstInited = false;
    var beginIndex = 0,
        topItem = 0,
        listSelIndex = 0,
        allSelIndex = 0,
        totalSize = 0,
        scrollHeight = 0,
        panelHeight = 945,
        itemHeight = 135,
        pageSize = pageFlip ? 7 : 14,
        listSize = 7;

    function FLIPFLAG(){ENUM_INDEX = 0;}
    FLIPFLAG();
    FLIPFLAG.FIRST = ENUM_INDEX++;
    FLIPFLAG.NEXT = ENUM_INDEX++;
    FLIPFLAG.LAST = ENUM_INDEX++;
    FLIPFLAG.END = ENUM_INDEX++;
    self.onOpenChList = function() {
        try {
            (null == exitOri) && (exitOri = ExitOrigin.BACK);
            imgTipFlag = 0;
            currentTime = getDVBLongTime();
            lockOn = !!livetvmain.getLockSwitch();
            resetSelectedIndexByChannel(true);
            setChannelsPanelPostion(1);
            resetStyleWhenFlipChInfo(0);
            if(null != currentList && null != currentList.name) {
                clearUpdateTime();
                getCurrentPageProgramsInfo();
            }
            autoCloseTimer();
        }
        catch(ex) {
            DBG_ERROR("open channel list error: " + ex.message);
            autoCloseTimer();
        }
        //showChannelsPanel();
    }
    self.onCloseChList = function() {
        resetStyleWhenFlipChInfo(0);
        clearTimeout(closeTimer);
        clearInterval(chnlInfoTimer);
        dtlEPGIterator = [];
        crntEPGIterator = [];
        clearChannelProgram();
    }
    self.backToLiveTV = function() {
        hotelOnChannel = false;
        exitOri = ExitOrigin.BACK;
        hiWebOsFrame[self.id].close();
        openLiveTVModule([Msg.INFO, 0]);
    }
    function initChannelListOnlyCurrent(curChannel) {
        if(!!curChannel) {
            initList = true;
            listIterator = createListIterator(onGetChannelList);
            if(null != listIterator) {
                listIterator.readNextRows(lstMaxRow);
            }
            else {
                DBG_ERROR("create list iterator failed.");
            }
        }
        else {
            DBG_ERROR("get current channel error. [" + objToString(curChannel) + "]");
            livetvmain.judgeToShowChannelSearch(true);
        }
    }
    function checkInitAgain() {
        initList = false;
        if(initAgain) {
            DBG_ALWAYS("do init channel list again.");
            initAgain = false;
            if(!!hiWebOsFrame[self.id] && hiWebOsFrame[self.id].visible) {
                self.backToLiveTV();
            }
            if(initName){
                DBG_ALWAYS("do init list name again.");
                initName = false;
                listUpdateNotify();
            }
            else{
                self.initChannelList();
            }
        }
    }
    self.getChannelListInited = function(){
        return firstInited;
    }
    self.initChannelList = function() {
        firstInited = true;
        if(initList) {
            DBG_ALWAYS("channel list is initing, will init again after inited.");
            initAgain = true;
            return;
        }
        schedule.getScheduleList(false);
        if(tv && !model.tvservice.onChannelListNameUpdate) {
            model.tvservice.onChannelListNameUpdate = listUpdateNotify;
            model.tvservice.onChannelListUpdate = channelsUpdateNotify;
        }
        crntArea = hiWebOsFrame.getCurrentArea();
        oprtData.channelList = [];
        oprtData.channels = {};
        oprtData.fullChannels = {};
        oprtData.programs = [];
        currentList = {};
        maxNumLenMaps = {};
        totalSize = 0;
        topItem = beginIndex = allSelIndex = listSelIndex = 0;
        initList = true;
        initAgain = false;
        lastChannel = null;
        pubPreChangeChannel = null;
        setRecentWatch(true);
        //oprtData.curChannel = livetvmain.recheckCurrentChannelInfo();
        if(readAllChannels) {
            listIterator = createListIterator(onGetChannelList);
            if(null != listIterator) {
                listIterator.readNextRows(lstMaxRow);
            }
            else {
                DBG_ERROR("create list iterator failed.");
            }
        }
        else {
            initChannelListOnlyCurrent(oprtData.curChannel);
        }
    }
    function initMultiLanguage() {
        txtList.info = getCurrentContentLanguage("Information");
        txtList.chListSel = getCurrentContentLanguage("Ch. List");
        txtList.detail = getCurrentContentLanguage("Program details");
    }
    function toleranceCurrentList() {
        if(null == currentList) {
            DBG_INFO("current channel is not in any list: " + objToString(oprtData.curChannel) + ", reset.");
            currentList = copyObj(objectFindByKey(oprtData.channelList, "uid", oprtData.curChannel.listUid));
        }
        else if(!currentList.display) {
            DBG_INFO("current list is not display. Set to the first one.");
            currentList = copyObj(oprtData.channelList[0]);
        }
    }
    function resetSelectedIndexByChannel(rewriteFlag) {
        oprtData.curChannel = livetvmain.getCurrentChannelInfo();
        currentList = copyObj(objectFindByKey(oprtData.channelList,
            ["uid", "satId"], [oprtData.curChannel.listUid, oprtData.curChannel.satId]));
        if(null == currentList || null == currentList.name) {
            topItem = beginIndex = allSelIndex = listSelIndex = 0;
            rewriteFlag && hiWebOsFrame[self.id].rewrite();
        }
        else {
            if(!currentList.display) {
                DBG_INFO("current list[" + currentList.name + "] is hidden, reset.");
                for(var i = 0; i < oprtData.channelList.length - 1; i++) {
                    if(oprtData.channelList[i].display) {
                        currentList = copyObj(oprtData.channelList[i]);
                        topItem = beginIndex = allSelIndex = listSelIndex = 0;
                        break;
                    }
                }
            }
            else {
                allSelIndex = getCurrentChannelIndex(currentList);
            }
            if(rewriteFlag) {
                if(!!oprtData.channels[currentList.name] && totalSize != oprtData.channels[currentList.name].length){
                    hiWebOsFrame[self.id].rewrite();
                }
                else {
                    hiWebOsFrame[self.id].rewriteDataOnly();
                }
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
        if(allSelIndex + chFlag < 0) {
            allSelIndex = chnls.length - 1;
        }
        else if(allSelIndex + chFlag > chnls.length - 1) {
            allSelIndex = 0;
        }
        else {
            allSelIndex += chFlag;
        }
        return chnls[allSelIndex];
    }
    function getPreChangedIndex(chFlag) {
        var crntIdex = allSelIndex;
        var chnls = oprtData.channels[currentList.name];
        if(crntIdex + chFlag < 0) {
            crntIdex = chnls.length - 1;
        }
        else if(crntIdex + chFlag > chnls.length - 1) {
            crntIdex = 0;
        }
        else {
            crntIdex += chFlag;
        }
        return crntIdex;
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
    var channelFlag = null;
    self.changeChannel = function(chFlag, chParam) {
        try {
            livetvmain.setDisableChannelNFY(false);
            channelFlag = null;
            hiWebOsFrame.needOpenBlankPage = false;
            if(tv && (isMainArchiveRecording() || isTimeShiftStatus())) {
                channelFlag = {flag: chFlag, param: chParam};
                PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                    "Sure to exit from PVR or T.Shift?", stopPVROrTshift, canCancelPVRTshift);
                setFlagAfterChange(1);
                return false;
            }
            if(checkChannelListInit()) return false;
            if(1 == chFlag || -1 == chFlag) {
                indexReseted = false;
                var preChannel = getPreChangedChannel(chFlag);
                DBG_ALWAYS("change channel to " + objToString(preChannel));
                livetvmain.clearLiveTVUI();
                setFlagVarBeforeChange(preChannel);
                playChannel(preChannel.playId, preChannel.uid, preChannel.listUid, 0);
            }
            else if(!!chParam) {
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
    self.switchToCurrentChannel = function() {
        var chnl = oprtData.channels[currentList.name][allSelIndex];
        hiWebOsFrame[self.id].close();
        oprtData.curChannel = livetvmain.getCurrentChannelInfo();
        if(!!chnl) {
            if(hotelOnChannel) {
                hotelOnChannel = false;
                var strArr = ["g_hotel__hotel_swo_air_ch", "g_hotel__hotel_swo_cab_ch", "g_hotel__hotel_swo_sat_ch"];
                var tunerStr = strArr[parseInt(chnl.playId) - 1];
                model.hotel.hotelOnChannel(tunerStr, chnl.uid, 1);
            }
            exitOri = ExitOrigin.CHANGECHANNEL;
            if(chnl.uid == oprtData.curChannel.uid &&
                chnl.playId == oprtData.curChannel.playId &&
                chnl.listUid == oprtData.curChannel.listUid) {
                openLiveTVModule([Msg.INFO, 0]);
            }
            else {
                setTimeout(function() {
                    if(livetvmain.getCurrentSourceInnerId() != SourceList.TV) {
                        model.source.InputSet("0");
                        ReadInputRecent("0");
                    }
                    if(!!chnl && self.changeChannel(null, chnl)) {
                        openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0, Msg.AUDIO, 0, Msg.SIGNAL, 0]);
                    }
                    else {
                    }
                }, 20);
            }
        }
        else {
            exitOri = ExitOrigin.BACK;
            DBG_ERROR("current channel error");
            openLiveTVModule([Msg.INFO, 0]);
        }
    }
    self.getNumChangeFlag = function() {
        return numChange;
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
        var iterval = (!!numChangeList && "SA" != crntArea && "COL" != crntArea &&
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
            numChange = false;
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

    function adjustFlipIndex(idx){
        beginIndex = Math.floor(idx / listSize) * listSize;
        while(totalSize > listSize && totalSize < beginIndex + listSize){
            beginIndex -= listSize;
        }
        listSelIndex = idx - beginIndex;
        topItem = listSelIndex;
        while(topItem > 0 && (beginIndex + topItem + listSize > totalSize)) {
            topItem--;
        }
    }

    function flipToFlag(flag){
        switch (flag){
            case FLIPFLAG.FIRST:
                beginIndex =  topItem = allSelIndex = listSelIndex = 0;
                break;
            case FLIPFLAG.NEXT:
                beginIndex += listSize;
                listSelIndex = pageFlip ? 0 : listSize;
                allSelIndex = beginIndex + listSelIndex;
                topItem = 1;
                break;
            case FLIPFLAG.LAST:
                beginIndex -= listSize;
                topItem = listSelIndex = listSize - 1;
                allSelIndex = beginIndex + listSelIndex;
                break;
            case FLIPFLAG.END:
                allSelIndex = totalSize - 1;
                if(pageFlip){
                    beginIndex = Math.floor((totalSize - 1) / listSize) * listSize;
                    listSelIndex = allSelIndex % listSize;
                }
                else{
                    adjustFlipIndex(allSelIndex);
                }
                break;
            default :
                break;
        }
        hiWebOsFrame[self.id].rewriteDataOnly();
        //setScrollBarPosition(1);
        //setChannelsPanelPostion(1);
        //getCurrentPageProgramsInfo();
        return false;
    }

    function pageFlipScroll(idx, dir){
        var flag;
        switch (dir){
            case KeyDir.DOWN:
                if(beginIndex + idx == totalSize - 1){
                    flag = flipToFlag(FLIPFLAG.FIRST);
                }
                else if(idx == pageSize - 1){
                    flag = flipToFlag(FLIPFLAG.NEXT);
                }
                else if(!pageFlip && idx >= topItem + listSize - 1){
                    topItem++;
                    listSelIndex++;
                    allSelIndex++;
                    flag = true;
                }
                else{
                    allSelIndex++;
                    listSelIndex++;
                    flag = true;
                }
                break;
            case KeyDir.UP:
                if(0 == allSelIndex){
                    flag = flipToFlag(FLIPFLAG.END);
                }
                else if(0 == listSelIndex){
                    flag = flipToFlag(FLIPFLAG.LAST);
                }
                else if(!pageFlip && topItem > 0 && idx == topItem){
                    topItem--;
                    listSelIndex--;
                    allSelIndex--;
                    flag = true;
                }
                else{
                    allSelIndex--;
                    listSelIndex--;
                    flag = true;
                }
                break;
            case KeyDir.CHDOWN:
                if((pageFlip && beginIndex == Math.floor((totalSize - 1) / listSize) * listSize) ||
                    (!pageFlip && beginIndex + topItem + listSize >= totalSize - 1)){
                    flag = flipToFlag(allSelIndex == totalSize - 1 ? FLIPFLAG.FIRST : FLIPFLAG.END);
                }
                else if(!pageFlip){
                    allSelIndex = beginIndex + topItem + listSize;
                    allSelIndex = Math.min(totalSize - 1, allSelIndex);
                    adjustFlipIndex(allSelIndex);
                    hiWebOsFrame[self.id].rewriteDataOnly();
                }
                else{
                    flag = flipToFlag(FLIPFLAG.NEXT);
                }
                break;
            case KeyDir.CHUP:
                if(pageFlip) {
                    if (0 == beginIndex) {
                        flag = flipToFlag(0 == listSelIndex ? FLIPFLAG.END : FLIPFLAG.FIRST);
                    }
                    else{
                        flag = flipToFlag(FLIPFLAG.LAST);
                    }
                }
                else{
                    if(0 == allSelIndex){
                        flag = flipToFlag(0 == listSelIndex ? FLIPFLAG.END : FLIPFLAG.FIRST);
                    }
                    else{
                        allSelIndex = Math.max(0, beginIndex + topItem - 1);
                        beginIndex = Math.floor(allSelIndex / pageSize) * pageSize;
                        listSelIndex = allSelIndex - beginIndex;
                        while(beginIndex > 0 && listSelIndex < listSize - 1){
                            beginIndex -= listSize;
                            listSelIndex = allSelIndex - beginIndex;
                        }
                        topItem = Math.max(0, allSelIndex - beginIndex - listSize + 1);

                    }
                    //adjustFlipIndex(allSelIndex);
                    hiWebOsFrame[self.id].rewriteDataOnly();
                }
                break;
            default :
                break;
        }
        setChannelsPanelPostion(1);
        return flag;
    }

    function setChannelsPanelPostion(flag) {
        if (0 == flag) {
            $("#livetv_chlist_srcoll").removeAttr("style");
            return;
        }

        var focus_top = 0, ch_top = 0, scr_top = 0;
        $("#livetv_chlist_srcoll").css("height", scrollHeight + "px");
        if (!pageFlip) {
            ch_top = -topItem * itemHeight;
            focus_top = (listSelIndex - topItem) * itemHeight;
            scr_top =  totalSize > 0 ? (beginIndex + topItem) / totalSize * panelHeight : 0;
            $("#livetv_chlist_channels").css("margin-top", ch_top + "px");
            $("#livetv_chlist_srcoll").css("margin-top", scr_top + "px");
            $("#no_item_span").css("margin-top", focus_top + "px");
        }
        else {
            scr_top = beginIndex / listSize * scrollHeight;
            focus_top = listSelIndex * itemHeight;
            $("#livetv_chlist_srcoll").css("margin-top", scr_top + "px");
            $("#no_item_span").css("margin-top", focus_top + "px");
        }
    }

    self.befKeyDown = function(){
        autoCloseTimer();
        if(0 == totalSize) return false;
        var flag = pageFlipScroll(this.SelectedIndex, KeyDir.DOWN);
        getCurrentPageProgramsInfo();
        return flag;
    }
    self.befKeyUp = function(){
        autoCloseTimer();
        if(0 == totalSize) return false;
        var flag = pageFlipScroll(this.SelectedIndex, KeyDir.UP);
        getCurrentPageProgramsInfo();
        return flag;
    }
    self.befKeyCHDown = function(){
        autoCloseTimer();
        if(0 == totalSize) return false;
        var flag = pageFlipScroll(this.SelectedIndex, KeyDir.CHDOWN);
        getCurrentPageProgramsInfo();
        return flag;
    }
    self.befKeyCHUp = function(){
        autoCloseTimer();
        if(0 == totalSize) return false;
        var flag = pageFlipScroll(this.SelectedIndex, KeyDir.CHUP);
        getCurrentPageProgramsInfo();
        return flag;
    }
    self.openInfoPage = function() {
        if(canFlipInfo) {
            tempIndex = allSelIndex;
            var tempChnl = oprtData.channels[currentList.name][tempIndex];
            if(!tempChnl) return;
            dtlEPGIterator[tempIndex] = getEPGInfoForChannelList(tempChnl.uid, tempChnl.playId, onGetPrograms, currentTime);
            if(null != dtlEPGIterator[tempIndex]) {
                dtlEPGIterator[tempIndex].readNextRows(4);
            }
            else {
                DBG_ERROR("create epg iterator error");
            }
        }
        else {
            DBG_ALWAYS("can not flip to information page in current TV production");
        }
        autoCloseTimer();
    }
    self.openListPage = function() {
        tempIndex = allSelIndex;
        resetStyleWhenFlipChInfo(-1);
        var ind = 0;
        for(var i = 0; i < oprtData.channelList.length; i++) {
            if(oprtData.channelList[i].name == currentList.name) {
                ind = i;
            }
        }
        hiWebOsFrame[self.id].getCaE("livetv_list_ul").setSelectedIndex(ind);
        autoCloseTimer();
    }
    function clearUpdateTime() {
        if(!oprtData.channels[currentList.name]) {
            DBG_ERROR("list[" + currentList.name + "] do not need clear update time.");
        }
        else {
            var chnls = oprtData.channels[currentList.name];
            for(var i = 0; i < chnls.length; i++) {
                chnls[i].updateTime = 0;
            }
            $("#livetv_chlist_channels .listProgramLine div").removeAttr("style");
            DBG_ALWAYS("list[" + currentList.name + "] update time cleared.")
        }
    }
    function clearChannelProgram() {
        try {
            if (!currentList.name || !oprtData.channels[currentList.name]) {
            } else {
                var chnls = oprtData.channels[currentList.name];
                for (var i = 0; i < chnls.length; i++) {
                    chnls[i].program = {name: "", startTime: 0, endTime: 0};
                    chnls[i].updateTime = 0;
                }
                $("#livetv_chlist_channels li > span").html("");
                $("#livetv_chlist_channels .listProgramLine div").removeAttr("style");
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
    function showChannelsPanel(){
        $("#livetv_chlist_channels_content").attr("class", "channelContentVisible");
    }
    self.openChannelPage = function() {
        try{
            if("livetv_chlist_infos" == this.id){
                this.hiBlur();
            }
        }
        catch(ex){
        }
        clearUpdateTime();
        imgTipFlag = 0;
        resetStyleWhenFlipChInfo(0);
        getCurrentPageProgramsInfo();
        hiWebOsFrame[self.id].hiFocus("livetv_chlist_channels");
        autoCloseTimer();
        //showChannelsPanel();
    }
    self.addProgrmReminder = function() {
        if (this.SelectedIndex == 0) {
            try {
                hiWebOsFrame[self.id].close();
                var chnl = oprtData.channels[currentList.name][tempIndex];
                if(!chnl) {
                    openLiveTVModule([Msg.INFO, 0]);
                    return;
                }
                oprtData.curChannel = livetvmain.getCurrentChannelInfo();
                exitOri = ExitOrigin.CHANGECHANNEL;
                if (chnl.uid == oprtData.curChannel.uid &&
                    chnl.playId == oprtData.curChannel.playId &&
                    chnl.listUid == oprtData.curChannel.listUid) {
                    openLiveTVModule([Msg.INFO, 0]);
                }
                else {
                    setTimeout(function() {
                        self.changeChannel(null, chnl);
                        openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0, Msg.AUDIO, 0]);
                    }, 20);
                }
            }
            catch (ex) {
                DBG_ERROR(ex.message);
                closeLiveTVModule();
                openLiveTVModule([Msg.INFO, 0]);
            }
        }
        else {
            var prgrm = oprtData.programs[this.SelectedIndex];
            if (!prgrm) {
                DBG_ERROR("this program[" + objToString(oprtData.programs) + "] is error.");
                return;
            }
            prgrm.title = prgrm.name; //omg 2015-12-2 add prgrm.title for parameter prgrm
            var chnl = oprtData.channels[currentList.name][tempIndex],
                prgrmParam = {};
            closeLiveTVModule();
            openBookAddPage(chnl, prgrm, hiWebOsFrame[LiveTVModule.MAIN]);
        }
    }
    self.openPrgrmDetail = function() {
        var prgrm = oprtData.programs[this.SelectedIndex];
        if(!prgrm) {
            DBG_ERROR("this program[" + objToString(oprtData.programs) + "] is error.");
            return;
        }
        var detailPrgrm = {
            title: prgrm.name,
            detail: prgrm.description
        }
        closeLiveTVModule();
        openEPGDetailPage(detailPrgrm, hiWebOsFrame[LiveTVModule.MAIN]);//omg 2015-12-4 repair cannot open
    }
    self.switchCurrentList = function() {
        if(this.SelectedIndex == oprtData.channelList.length - 1) {
            //closeLiveTVModule();
            //LauncherquickopenSetting(2, CHANNEL_EDIT, hiWebOsFrame[LiveTVModule.MAIN]);
            hiWebOsFrame[self.id].close();
            openChannelManager(hiWebOsFrame[LiveTVModule.MAIN]);
            return;
        }
        var tempList = copyObj(oprtData.channelList[this.SelectedIndex]);
        if(!oprtData.channels[tempList.name]) {//have not gotted this list
            changeList = true;
            currentList = copyObj(tempList);
            channelIterator = createChannelIterator(tempList, onGetChannels,0);
            if(null != channelIterator) {
                channelIterator.fetchTotalCount();
            }
            else {
                DBG_ERROR("create channel iterator failed.");
            }
        }
        else if(tempList.name == currentList.name) {// current list
            self.openChannelPage();
        }
        else if(tempList.uid == oprtData.curChannel.listUid && tempList.satId == oprtData.curChannel.satId) { //current played list
            currentList = copyObj(tempList);
            tempIndex = allSelIndex = getCurrentChannelIndex(tempList);
            imgTipFlag = 0;
            clearChannelProgram();
            hiWebOsFrame[self.id].rewrite();
            self.openChannelPage();
        }
        else {//have gotted this list but it is not current list nor palyed list
            currentList = copyObj(tempList);
            topItem = beginIndex = tempIndex = allSelIndex = listSelIndex = 0;
            imgTipFlag = 0;
            clearChannelProgram();
            hiWebOsFrame[self.id].rewrite();
            self.openChannelPage();
        }
    }
    self.listPageOnFocus = function() {
        self.restoreListMarquee(null, this.id, null, this.SelectedIndex, 300);
    }
    self.listPageOnBlur = function(){
        self.restoreListMarquee(this.id, null, this.SelectedIndex, null, 300);
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
    function getCurrentChannelIndex(list, chnl) {
        var idx = 0;
        !list && (list = currentList);
        !chnl && (chnl = oprtData.curChannel);
        topItem = beginIndex = listSelIndex = 0;
        if(null == chnl || null == list || !oprtData.channels[list.name]) return idx;
        var founded = false;
        totalSize = oprtData.channels[list.name].length;
        for(var i = 0; i < totalSize; i++) {
            if(chnl.uid == oprtData.channels[list.name][i].uid
                && chnl.playId == oprtData.channels[list.name][i].playId) {
                idx = i;
                founded = true;
                break;
            }
        }
        if(!founded) {
            DBG_ERROR("can not find the index.[" + objToString(chnl) + "], list[" + list.name + "], index[" + idx + "]");
        }
        if(pageFlip){
            beginIndex = Math.floor(idx / listSize) * listSize;
            listSelIndex = idx % listSize;
        }
        else{
            adjustFlipIndex(idx);
        }
        return idx;
    }
    function rewritePageData(pageData) {
        try {
            pageData.livetv_chlist_infos.Data = [];
            pageData.livetv_chlist_infos.disableItem = [];
            pageData.livetv_chlist_infos.disable = !canFlipInfo;
            pageData.livetv_list_ul.Data = [];
            pageData.livetv_list_ul.disableItem = [];
            for(var i = 0; i < oprtData.channelList.length; i++) {
                var tempList = oprtData.channelList[i];
                pageData.livetv_list_ul.Data.push({
                    list_icon: {Data: ""},
                    list_name: {Data: tempList.name}
                });
                if(!tempList.display) {
                    pageData.livetv_list_ul.disableItem.push(i);
                }
            }
            try {
                var lstName = currentList.name, selectedChannel = {};
                if(!lstName) {
                }
                else if(!oprtData.channels[lstName]) {
                    DBG_ERROR("current list[" + lstName + "] channels are " + objToString(oprtData.channels[lstName]));
                }
                else {
                    selectedChannel = oprtData.channels[lstName][allSelIndex];
                }
                if(!selectedChannel) {
                    DBG_ALWAYS("currentList[" + oprtData.channels[lstName].length + "]");
                    DBG_ERROR("can not find current channel[" + lstName + "][" + allSelIndex + "]");
                }
            }
            catch(ex) {
                DBG_ERROR(ex.message);
            }
            pageData.livetv_chlist_name.Data = !!lstName ? lstName : lstNameMap[oprtData.curChannel.listUid];
            pageData.livetv_chlist_other.Data = "Information";
            pageData.livetv_chlist_chi_number.Data = !!selectedChannel ? selectedChannel.number : "";
            pageData.livetv_chlist_chi_name.Data = !!selectedChannel ? selectedChannel.name : "";
            pageData.livetv_chlist_chi_encrypt.Data = (!!selectedChannel && selectedChannel.isEncrypt) ? imgList.encrypt : imgList.noImg;
            pageData.livetv_chlist_chi_lock.Data = (lockOn && !!selectedChannel && selectedChannel.isLock) ? imgList.lock : imgList.noImg;
            pageData.livetv_chlist_chi_fav.Data = (!!selectedChannel && selectedChannel.favType) ? imgList.favorite : imgList.noImg;
            if(imgTipFlag == 0 || imgTipFlag == -1) {
                pageData.livetv_chlist_btnR_img.Data = imgList.rightArrow;
                pageData.livetv_chlist_btnL_img.Data = imgList.leftArrow;
                pageData.livetv_chlist_btnR_name.Data = txtList.info;
                pageData.livetv_chlist_btnL_name.Data = txtList.chListSel;
            }
            else if(imgTipFlag == 1) {
                pageData.livetv_chlist_btnR_img.Data = imgList.blue;
                pageData.livetv_chlist_btnL_img.Data = imgList.leftArrow;
                pageData.livetv_chlist_btnR_name.Data = txtList.detail;
                pageData.livetv_chlist_btnL_name.Data = txtList.chListSel;
            }
            for(var i = 0; i < 4; i++) {
                var tempPrgrm = oprtData.programs[i];
                if(!tempPrgrm) {
                    pageData.livetv_chlist_infos.Data.push({
                        program_name: {Data: ""},
                        program_start_time: {Data: 0},
                        program_end_time: {Data: 0},
                        program_detail: {Data: ""},
                        program_reminde: {Data: imgList.noImg},
                        program_record: {Data: imgList.noImg}
                    });
                    pageData.livetv_chlist_infos.disableItem.push(i);
                }
                else {
                    pageData.livetv_chlist_infos.Data.push({
                        program_name: {Data: tempPrgrm.name},
                        program_start_time: {Data: UTCToLocalTime(tempPrgrm.startTime)},
                        program_end_time: {Data: UTCToLocalTime(tempPrgrm.endTime)},
                        program_detail: {Data: getCurrentContentLanguage(tempPrgrm.description)},
                        program_reminde: {Data: tempPrgrm.reminder ? imgList.reminder : imgList.noImg},
                        program_record: {Data: tempPrgrm.record ? imgList.record : imgList.noImg}
                    });
                }
            }
            pageData.livetv_chlist_infos.SelectedIndex = 0;
            totalSize = !!oprtData.channels[lstName] ? oprtData.channels[lstName].length : 0;
            if(totalSize > 0){
                scrollHeight = panelHeight / Math.ceil(totalSize / listSize);
                scrollHeight = panelHeight == scrollHeight ? 0 : scrollHeight;
            }
            else{
                scrollHeight = 0;
            }
            pageData.livetv_chlist_channels.Data = [];
            pageData.livetv_chlist_channels.disableItem = [];
            for(var i = 0; i < pageSize; i++) {
                var pos = beginIndex + i, tempNode = null;
                var tempChnl = oprtData.channels[currentList.name][pos];
                if(tempChnl) {
                    tempNode = {
                        channel_number: {Data: tempChnl.number},
                        channel_name: {Data: tempChnl.name},
                        channel_encrypt: {Data: tempChnl.isEncrypt ? imgList.encrypt : imgList.noImg},
                        channel_lock: {Data: (lockOn && tempChnl.isLock) ? imgList.lock : imgList.noImg},
                        channel_fav: {Data: tempChnl.favType ? imgList.favorite : imgList.noImg},
                        channel_prgrmname: {Data: tempChnl.program.name}
                    }
                }
                else{
                    tempNode = {
                        channel_number: {Data: ""},
                        channel_name: {Data: ""},
                        channel_encrypt: {Data: imgList.noImg},
                        channel_lock: {Data: imgList.noImg},
                        channel_fav: {Data: imgList.noImg},
                        channel_prgrmname: {Data: ""}
                    }
                    if (i > 0) {
                        pageData.livetv_chlist_channels.disableItem.push(i);
                    }
                }
                pageData.livetv_chlist_channels.Data.push(tempNode);
                if(false && tempChnl.isSkip) {
                    pageData.livetv_chlist_channels.disableItem.push(pos);
                }
            }
            pageData.livetv_chlist_channels.SelectedIndex = listSelIndex;
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
    }
    function onGetChannelList(m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprtData.curChannel = livetvmain.recheckCurrentChannelInfo();
            oprtData.channelList = eventRowsToChannelList(m_event.rows);
            if(oprtData.channelList.length < 2) {
                try {
                    livetvmain.judgeToShowChannelSearch(true);
                    hiWebOsFrame[self.id].rewrite();
                    checkInitAgain();
                }
                catch(ex) {
                    initList = false;
                    DBG_ERROR(ex.message);
                }
            }
            else {
                if(readAllChannels) {
                    channelIterator = [];
                    readedCount = 0;
                    if(readOneByOne) {
                        readChannelOneByOne(readedCount);
                    }
                    else {
                        for(var idx = 0; idx < oprtData.channelList.length - 1; idx++) {
                            var lst = oprtData.channelList[idx];
                            channelIterator[lst.name] = createChannelIterator(lst, onGetChannels,0);
                            if(null != channelIterator[lst.name]) {
                                channelIterator[lst.name].fetchTotalCount();
                            }
                            else {
                                DBG_ERROR("create channel iterator failed.");
                            }
                        }
                    }
                }
                else {
                    channelIterator = createChannelIterator(currentList, onGetChannels,0);
                    if(null != channelIterator) {
                        channelIterator.fetchTotalCount();
                    }
                    else {
                        DBG_ERROR("create channel iterator failed.");
                    }
                }
            }
        }
    }
    function readChannelOneByOne(idx) {
        var lst = oprtData.channelList[idx];
        channelIterator[lst.name] = createChannelIterator(lst, onGetChannels,0);
        if(null != channelIterator[lst.name]) {
            channelIterator[lst.name].fetchTotalCount();
        }
        else {
            DBG_ERROR("create channel iterator failed.");
        }
    }
    function onGetChannels(list, m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprtData.channels[list.name] = eventRowsToChannels(m_event.rows, list);
            if(readAllChannels) {
                if(oprtData.channelList.length - 1 == ++readedCount) {
                    try {
                        DBG_ALWAYS("all list gotted");
                        if(!!currentList && !!currentList.name) {
                            tempIndex = allSelIndex = getCurrentChannelIndex(currentList);
                            totalSize = oprtData.channels[currentList.name].length;// for PC
                        }
                        else {
                            tempIndex = topItem = beginIndex = allSelIndex = listSelIndex = 0;
                            totalSize = 0;
                        }
                        hiWebOsFrame[self.id].rewrite();
                        if(!self.hasChannels()) {
                            livetvmain.judgeToShowChannelSearch(true);
                        }
                        checkInitAgain();
                    }
                    catch(ex) {
                        initList = false;
                        DBG_ERROR(ex.message);
                    }
                }
                else {
                    DBG_ALWAYS("list[" + list.name + "][" + m_event.rows.length + "] gotted.");
                    if(readOneByOne) {
                        readChannelOneByOne(readedCount);
                    }
                }
            }
            else {
                if(initList) {
                    try {
                        tempIndex = allSelIndex = getCurrentChannelIndex(list);
                        totalSize = oprtData.channels[list.name].length;// for PC
                        hiWebOsFrame[self.id].rewrite();
                        checkInitAgain();
                    }
                    catch(ex) {
                        DBG_ERROR(ex.message);
                    }
                }
                else if(changeList) {
                    tempIndex = topItem = beginIndex = allSelIndex = listSelIndex = 0;
                    hiWebOsFrame[self.id].rewrite();
                    self.openChannelPage();
                    changeList = false;
                }
                else {
                    tempIndex = topItem = beginIndex = allSelIndex = listSelIndex = 0;
                    hiWebOsFrame[self.id].rewrite();
                }
                if(oprtData.channels[list.name].length == 0) {
                    livetvmain.judgeToShowChannelSearch(true);
                }
            }
        }
        else if(m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            DBG_ALWAYS("total channels of list[" + list.name + "] is " + m_event.totalCount);
            totalSize = m_event.totalCount;
            if(m_event.totalCount == 0) {
                onGetChannels(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else if(readAllChannels) {
                channelIterator[list.name].readNextRows(m_event.totalCount);
            }
            else {
                channelIterator.readNextRows(m_event.totalCount);
            }
        }
    }
    function onGetPrograms(m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprtData.programs = eventRowsToProgram(m_event.rows);
            var chnl = oprtData.channels[currentList.name][allSelIndex];
            if(oprtData.programs.length == 0) {
                DBG_ALWAYS("this channel do not have any programs.");
                oprtData.programs.push({
                    name: "No program",
                    startTime: 0,
                    endTime: 0,
                    description: "No program information",
                    guidance: "",
                    channelUid: chnl.uid
                });
            }
            try {
                if (m_event.rows.length > 0 &&
                    parseInt(m_event.rows[0][SPProgram.STARTTIME]) > parseInt(currentTime)) {
                    oprtData.programs.splice(0, 0, {
                        name: "No program",
                        startTime: 0,
                        endTime: 0,
                        description: "No program information",
                        guidance: "",
                        channelUid: chnl.uid
                    });
                }
            }
            catch (ex) {
                DBG_ERROR(ex.message)
            }
            imgTipFlag = 1;
            hiWebOsFrame[self.id].rewriteDataOnly();
            hiWebOsFrame[self.id].hiFocus("livetv_chlist_infos");
            var dom = $(".liveTVChListPrgrmProgress div");
            dom.eq(0).css("width", calculateProgress(chnl.program.startTime, chnl.program.endTime, currentTime, 190) + "px");
            if(oprtData.programs[0].startTime == 0) {
                $(".liveTVChListTime").eq(0).css("visibility", "hidden");
            }
            else {
                $(".liveTVChListTime").eq(0).css("visibility", "visible");
            }
            for(var i = 1; i < oprtData.programs.length; i++) {
                dom.eq(i).css("width", calculateProgress(oprtData.programs[i].startTime, oprtData.programs[i].endTime, currentTime, 190) + "px");
            }
            resetStyleWhenFlipChInfo(1);
            setEllipsisi(0);
        }
    }
    function onGetCurrentProgram(key, idx, m_event) {
        if(m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            DBG_ALWAYS("on get current[" + key + "][" + idx + "] program: " + objToString(m_event));
            setCurrentProgramInfo(key, idx, eventRowsToProgram(m_event.rows)[0]);
        }
    }
    function eventRowsToChannelList(rows) {
        var lists = [], founded = false;
        for(var i = 0; i < rows.length; i++) {
            var row = rows[i], lst = {};
            lst.name = !!row[ChannelList.NAME] ? row[ChannelList.NAME] : "N/A";
            lst.uid = row[ChannelList.UID];
            lst.satId = row[ChannelList.ATTRIBUTE];
            lst.display = 1 == row[ChannelList.DISPLAY];
            lst.rights = 1 == row[ChannelList.RIGHTS];
            if(null != oprtData.curChannel &&
                lst.uid == oprtData.curChannel.listUid &&
                lst.satId == oprtData.curChannel.satId) {
                founded = true;
                currentList = copyObj(lst);
            }
            lists.push(lst);
        }
        if(!founded) {
            DBG_ERROR("can not find current list by current channel[" + objToString(oprtData.curChannel) + "]");
        }
        lists.push({
            name: "Management",
            manager: true,
            display: true
        })
        return lists;
    }
    function eventRowsToChannels(rows, list) {
        var chnls = [];
        maxNumLenMaps[list.name] = 0;
        oprtData.fullChannels[list.name] = [];
        for(var i = 0; i < rows.length; i++) {
            var row = rows[i], chnl = {};
            chnl.number = row[SPChannel.NUMBER];
            chnl.name = row[SPChannel.NAME];
            chnl.uid = row[SPChannel.UID];
            chnl.type = row[SPChannel.TYPE];
            chnl.attr = parseInt(row[SPChannel.ATTRIBUTE]);
            chnl.listUid = list.uid;
            chnl.satId = list.satId;
            chnl.playId = row[SPChannel.PLAYID];
            chnl.serviceType = row[SPChannel.SERVICETYPE];
            chnl.SvlRecID =  row[SPChannel.SVLRECID];
            chnl.program = {name: "", startTime: 0, endTime: 0};
            chnl.updateTime = 0;
            setFlagByAttr(chnl, chnl.attr);
            oprtData.fullChannels[list.name].push(chnl);
            if(chnl.isSkip) {
                if(!!lastChannel && lastChannel.uid == chnl.uid && lastChannel.playId == chnl.playId) {
                    lastChannel = null;
                }
                continue;
            }
            if(2 == chnl.serviceType && chnl.uid == oprtData.curChannel.uid && chnl.playId == oprtData.curChannel.playId
                && chnl.satId == oprtData.curChannel.satId) {
                livetvmain.judgeToShowRadioOnly();
            }
            maxNumLenMaps[list.name] = Math.max(maxNumLenMaps[list.name], ("" + chnl.number).length);
            chnls.push(chnl);
        }
        return chnls;
    }
    function eventRowsToProgram(rows) {
        var prgrms = [];
        for(var i = 0; i < rows.length; i++) {
            var row = rows[i], prgrm = {};
            prgrm.name = row[SPProgram.TITLE];
            prgrm.startTime = parseInt(row[SPProgram.STARTTIME]);
            prgrm.endTime = parseInt(row[SPProgram.ENDTIME]);
            prgrm.description = !!row[SPProgram.DESCRIPTION] ? row[SPProgram.DESCRIPTION] : "No program information";
            prgrm.guidance = row[SPProgram.GUIDANCE];
            prgrm.channelUid = oprtData.channels[currentList.name][tempIndex].uid;
            prgrm.playId = oprtData.channels[currentList.name][tempIndex].playId;
            var bkFlag = schedule.getIsBookingByProgram(prgrm);
            prgrm.reminder = bkFlag.reminder;
            prgrm.record = bkFlag.record;
            prgrms.push(prgrm);
        }
        return prgrms;
    }
    function setFlagByAttr(chnl, attr) {
        chnl.isSkip = tv ? getMaskValue(Mask.SKIP, attr) : false;
        chnl.favType = getMaskValue(Mask.FAVTYPE, attr);
        chnl.isLock = getMaskValue(Mask.LOCK, attr);
        chnl.isEncrypt = getMaskValue(Mask.ENCRYPT, attr);
    }
    self.onChannelsFocus = function() {
        restoreMarqueeCommon("#livetv_chlist_channels .channelNameClass span", -1, this.SelectedIndex, 300);//omg
        // 2016-1-20
        showChannelsPanel();
        $("#no_item_span").css("display", "block");
    }
    self.onChannelsBlur = function() {
        restoreMarqueeCommon("#livetv_chlist_channels .channelNameClass span", this.SelectedIndex,-1, 300);//omg
        // 2016-1-20
    }
    self.onInfoFocus = function() {
    }
    self.onInfoBlur = function() {
    }
    self.getCurrentList = function() {
        return copyObj(oprtData.channelList);
    }
    self.getChannelLength = function() {
        var crntChnls = oprtData.channels[currentList.name], len = 0;
        if(!!crntChnls) {
            len = crntChnls.length;
        }
        return len;
    }
    function resetStyleWhenFlipChInfo(flag) {
        imgTipFlag = flag;
        if(0 == flag) { // focus channel
            $(".liveTVChListInfoPanel").css("display", "none");
            $(".liveTVListPanel").css("visibility", "hidden");
            $("#livetv_chlist_channels").css("display", "block");
            $("#livetv_chlist_name").attr("class", "listTitleHighlight");
            $("#livetv_chlist_other").attr("class", "listTitleNormal");
            $(".liveTVChListTiltle").css("background", "url(img/channellist/title_list.png) no-repeat");
            $("#livetv_chlist_btnL_name").text(getCurrentContentLanguage(txtList.chListSel));
            $("#livetv_chlist_btnL_img").attr("src", imgList.leftArrow);
            if(canFlipInfo) {
                $(".listTitleHighlight").css("width", "330px");
                $(".listTitleHighlight").css("background-size", "330px 75px");
                $(".listTitleNormal").css("width", "240px");
                $("#livetv_chlist_btnR_name").text(getCurrentContentLanguage(txtList.info));
                $("#livetv_chlist_btnR_img").attr("src", imgList.rightArrow);
            }
            else {
                $(".listTitleHighlight").css("width", "570px");
                $(".listTitleHighlight").css("background-size", "570px 75px");
                $(".listTitleNormal").css("width", "0px");
            }
            if(totalSize == 0) {
                showNoItem();
            }
            else {
                hideNoItem();
            }
            //setScrollBarPosition(1);
            setChannelsPanelPostion(1);
            $("#no_item_span").css("display", "block");
        }
        else if(1 == flag) {//focus info
            DBG_ALWAYS("info focus");
            $("#livetv_chlist_channels").css("display", "none");
            $("#livetv_chlist_name").attr("class", "listTitleNormal");
            $(".liveTVChListTiltle").css("background", "none");
            $(".listTitleNormal").css("width", "240px");
            $(".liveTVChListInfoPanel").css("display", "block");
            $("#livetv_chlist_other").attr("class", "listTitleHighlight");
            $(".listTitleHighlight").css("width", "380px");
            $(".listTitleHighlight").css("background-size", "380px 75px");
            $("#livetv_chlist_btnL_name").text(getCurrentContentLanguage(txtList.chList));
            $("#livetv_chlist_btnL_img").attr("src", imgList.leftArrow);
            hideNoItem();
            $("#no_item_span").css("display", "none");
            //setScrollBarPosition(0);
            setChannelsPanelPostion(0);
        }
        else {//focus list
            $("#livetv_chlist_name").attr("class", "listTitleUnFocus");
            $(".liveTVChListTiltle").css("background", "url(img/channellist/title_list_2.png) no-repeat");
            $(".liveTVListPanel").css("visibility", "visible");
            hideNoItem();
            $("#no_item_span").css("display", "none");
        }
    }
    self.focusDivByIndex = function(idx) {
        resetStyleWhenFlipChInfo(idx);
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
        for(var i = 1; i <= 4; i++) {
            var ret = objectFindByKey(oprtData.channels["FAV" + i], ["uid", "playId"], [channeluid, playId]);
            if(null != ret) {
                ret[SPChannel.ARRAY[keyIdx]] = val;
                if(keyIdx == SPChannel.ATTRIBUTE) {
                    setFlagByAttr(ret, val);
                }
            }
        }
    }
    self.clearChannelBlock = function() {
        for(var i = 0; i < oprtData.channelList.length - 1; i++) {
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
        if(null != ret) {
            ret[ChannelList.ARRAY[keyIdx]] = val;
        }
        else {
            DBG_ERROR("can not find list[" + listuid + "]")
        }
    }
    self.updateChannelListByEventRows = function(list, eventRows) {
        try {
            livetvmain.recheckCurrentChannelInfo();
            var updated = false;
            for(var i = 0; i < oprtData.channelList.length; i++) {
                if(list.name == oprtData.channelList[i].name) {
                    oprtData.channels[list.name] = eventRowsToChannels(eventRows, list);
                    updated = true;
                    break;
                }
            }
            DBG_ALWAYS("list[" + list.name + "] updated");
            !updated && DBG_ERROR("update list[" + list.name + "] failed.");
        }
        catch(ex) {
            DBG_ERROR("update list[" + list.name + "] failed. Error[" + ex.message + "]");
        }
    }
    self.syncOtherListWhenEditFav = function(playIds, channelIds,favBit) {
        try {
            for (var k = 0; k < playIds.length; k++) {
                for (var i = 0; i < oprtData.channelList.length - 1; i++) {
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
    /**
     * [updateChannelName description]
     * @param  {[type]} channelPlayIdArr [FRONTEND]
     * @param  {[type]} channelIdArr     [CHANNELID]
     * @param  {[type]} channelNameArr   [NAME]
     * @return {[type]}                  []
     */
    self.updateChannelName = function(channelPlayIdArr, channelIdArr, channelNameArr){
        try {
            for (var i = 0; i < oprtData.channelList.length - 1; i++) {
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
            if(null != channelIterator[lst.name]) {
                channelIterator[lst.name].fetchTotalCount();
            }
            else {
                DBG_ERROR("create channel iterator failed.");
            }
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
                        updateFullChannels(lst.name, keys[i]);
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
        if(null != listIterator) {
            listIterator.readNextRows(lstMaxRow);
        }
        else {
            DBG_ERROR("create list iterator failed.");
        }
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
            if(null != channelUpdateIterator) {
                channelUpdateIterator.fetchTotalCount();
            }
            else {
                initList = false;
                DBG_ERROR("create channel iterator failed.");
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
            if(null != listIterator) {
                listIterator.readNextRows(lstMaxRow);
            }
            else {
                DBG_ERROR("create list iterator failed.");
            }
        }
        else {

            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.CHANNEL_LIST) {
                DBG_ALWAYS("channel list is on focus, close channel list first");
                self.backToLiveTV();
            }
            initList = true;
            channelUpdateIterator = createChannelIterator(tempList, onUpdateChannels,0);
            if(null != channelUpdateIterator) {
                channelUpdateIterator.fetchTotalCount();
            }
            else {
                DBG_ERROR("create channel iterator failed.");
            }
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
            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.CHANNEL_LIST) {
                if(initList){
                    DBG_ALWAYS("channel list is on focus, close channel list first");
                    self.backToLiveTV();
                }
                /*
                MT5655EM-248: 弱信号会频繁更新，导致列表rewrite没有焦点
                else if(hiWebOsFrame[self.id].visible){
                    hiWebOsFrame[self.id].open();
                }*/
            }
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
    }
    self.hasChannels = function() {
        var ret = tv ? 1 == model.tvservice.getChannelListSaved() : true;
        DBG_ALWAYS("has channel ret[" + ret + "]");
        return ret;// || chnlCount > 0;
    }
    self.getListVisibleCount = function() {
        var cnt = 0;
        for(var i = 0; i < oprtData.channelList.length - 1; i++) {
            if(oprtData.channelList[i].display) {
                cnt++;
            }
        }
        return cnt;
    }
    self.getRefLists = function(){
        return oprtData.channelList;
    }
    self.getAllChannels = function() {
        var chnlKey = Object.keys(oprtData.channels), obj = [];
        var element = {};
        for(var i = 0; i < chnlKey.length; i++) {
            if(chnlKey[i].indexOf("FAV") < 0 && !!oprtData.channels[chnlKey[i]]) {
                element.name = chnlKey[i];
                element.list = copyObj(oprtData.channels[chnlKey[i]]);
                obj.push(copyObj(element));
            }
            else {
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
            }
            else {
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

    function getCurrentPageProgramsInfo(){
        clearInterval(chnlInfoTimer);
        chnlInfoTimer = setTimeout(function() {
            currentTime = getDVBLongTime();
            DBG_ALWAYS("start to get current channel's program info");
            var key = currentList.name;
            if(!oprtData.channels[key]) {
                DBG_ERROR("currentList[" + key + "] do not have any channels.");
                return;
            }
            for(var i = 0; i < listSize; i++) {
                var pos = pageFlip ? beginIndex + i : beginIndex + topItem + i;
                var chnl = oprtData.channels[key][pos];
                if(!chnl) continue
                if(chnl.updateTime + 60 < currentTime) {
                    crntEPGIterator[i] = getEPGInfoForChannelList(chnl.uid, chnl.playId, onGetCurrentProgram.bind(this, key, pos), 0);
                    if(null != crntEPGIterator[i]) {
                        crntEPGIterator[i].readNextRows(1);
                    }
                    else {
                        DBG_ERROR("create epg iterator error");
                    }
                }
                else {
                    DBG_INFO("channel[" + chnl.name + "] has been updated.");
                }
            }
        }, 400);
    }
    function setCurrentProgramInfo(key, idx, prgrm) {
        if(key != currentList.name) {
            DBG_ERROR("key[" + key + "] is not current list[" + currentList.name + "]");
        }
        else {
            prgrm = !!prgrm ? prgrm : {
                name: "",
                startTime: 0,
                endTime: 0,
                description: "No program information"
            }
            if(!oprtData.channels[key]) {
                DBG_ERROR("current list[" + key + "] is null");
            }
            else {
                DBG_ALWAYS("channel[" + oprtData.channels[key][idx].name + "] update success.");
                oprtData.channels[key][idx].program = prgrm;
                oprtData.channels[key][idx].updateTime = currentTime;
                var domIndex = idx - beginIndex;
                var domItem = $("#livetv_chlist_channels .listProgramLine div").eq(domIndex);
                domItem.css("width", calculateProgress(prgrm.startTime, prgrm.endTime, currentTime, 500) + "px");
                $("#livetv_chlist_channels li > span").eq(domIndex).text(getCurrentContentLanguage(prgrm.name));
            }
        }
    }
    self.getEPGCurrentChannel = function(){
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
    self.openEPGPage = function() {
        if(!tv) {
            if(hiWebOsFrame.getCurrentPageId() != "epg") {
                openPageOnPC("epg");
            }
            else {
                epg.EPGBack();
            }
            return;
        }
        try {
            var curChannel = livetvmain.getCurrentChannelInfo();
            hiWebOsFrame.openEPGFromPVR = false;
            if(hiWebOsFrame.getCurrentPageId() == LiveTVModule.MAIN &&
                SourceList.TV == livetvmain.getCurrentSourceInnerId() && !!curChannel &&
                TVTYPE.ATV != curChannel.type) {
                if(checkChannelListInit() || channelChanging) return;
                if(isMainArchiveRecording() || isTimeShiftStatus()) {
                    PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                        "Sure to exit from PVR or T.Shift?", stopPVROrTshiftToEPG, canCancelPVRTshift);
                    return;
                }
                var curList = objectFindByKey(oprtData.channelList, ["uid", "satId"], [curChannel.listUid, curChannel.satId]);
                if(null == curList) {
                    DBG_ERROR("can not find the list by channel[" + objToString(curChannel) + "]");
                    return;
                }
                var currentPlay = {
                    listUid: curChannel.listUid,
                    listName: curList.name,
                    satId: curChannel.satId,
                    channelIndex: getEPGChannelIndex(curList, curChannel),
                    channelId: curChannel.uid
                };
                DBG_ALWAYS("open epg with[" + objToString(currentPlay) + "]");
                closeLiveTVModule();
                hiWebOsFrame.startLoading(10, "EPG");
                hiWebOsFrame.createPage('epg', null, null, null, function(pageEPG) {
                    hiWebOsFrame.endLoading("EPG");
                    hiWebOsFrame.epgPage = pageEPG;
                    epg.openPage(currentPlay);
                });
            }
            else if(hiWebOsFrame.getCurrentPageId() == "epg") {
                epg.closePage();
            }
            else {
                DBG_ALWAYS(oprtData.curChannel);
                DBG_ALWAYS("current state can not open EPG");
            }
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
    }
    function checkChannelListInit() {
        if(!initList) return false;
        showMsg("", "Reading the channel list. Please try again later");
        return true;
    }
    self.getChannelListInitState = function() {
        return initList;
    }
    self.restoreChannelListMarquee = function(crntid, nxtid, crntIndex, nxtIndex, len) {
        try {
            var crntSelector, nxtSelector;
            if(!!crntid) {
                crntSelector = $("#" + crntid + " .listChannelLine span").eq(crntIndex * 2 + 1);
                var txt = crntSelector.text();
                crntSelector.html(txt.replace(/\</g, "&lt;"));
            }
            if(!!nxtid) {
                nxtSelector = $("#" + nxtid + " .listChannelLine span").eq(nxtIndex * 2 + 1);
                var txt = !!nxtSelector ? nxtSelector.text() : null;
                if(null != txt && nxtSelector.width() >= len) {
                    nxtSelector.html('<marquee scrollAmount=10 scrollDelay=150>' + (txt.replace(/\</g, "&lt;")) + '</marquee>');
                }
            }
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
    }
    self.restoreListMarquee = function(crntid, nxtid, crntIndex, nxtIndex, len) {
        try {
            var crntSelector, nxtSelector;
            if(!!crntid) {
                crntSelector = $("#" + crntid + " span").eq(crntIndex);
                var txt = crntSelector.text();
                crntSelector.html(txt.replace(/\</g, "&lt;"));
            }
            if(!!nxtid) {
                nxtSelector = $("#" + nxtid + " span").eq(nxtIndex);
                var txt = !!nxtSelector ? nxtSelector.text() : null;
                if(null != txt && nxtSelector.width() >= len) {
                    nxtSelector.html('<marquee scrollAmount=10 scrollDelay=150>' + (txt.replace(/\</g, "&lt;")) + '</marquee>');
                }
            }
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
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
                model.source.InputSet("0");
                ReadInputRecent("0");
            }
            ret = self.changeChannel(null, chnlParam);
        }
        else {
            DBG_ERROR("change channel from reminder parameters error: " + objToString(prgrm));
        }
        return ret;
    }
    self.findChannelById = function(uid) {
        var chnl = null;
        for(var i = 0; i < oprtData.channelList.length - 1; i++) {
        }
    }
    function ExitOrigin() {
    }
    ExitOrigin.BACK = 0;
    ExitOrigin.CHANGECHANNEL = 1;
    function autoCloseTimer() {
        var interval = tv ? 30000 : 10000000;
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function() {
            self.backToLiveTV();
        }, interval);
    }
    self.setAutoClose = function() {
        autoCloseTimer();
    }
    function showNoItem() {
        $("#no_item_span").text(getCurrentContentLanguage("No results"));
    }
    function hideNoItem() {
        $("#no_item_span").text("");
    }
    self.openChannelList = function() {
        hotelOnChannel = true;
        hiWebOsFrame[self.id].open();
        hiWebOsFrame[self.id].hiFocus();
    }
    function setScrollBarPosition(flag){
        if(0 == flag) {
            $("#livetv_chlist_srcoll").removeAttr("style");
        }
        else {
            var top = beginIndex / listSize * scrollHeight;
            $("#livetv_chlist_srcoll").css("height", scrollHeight + "px");
            $("#livetv_chlist_srcoll").css("margin-top", top + "px");
        }
    }
    self.keyRightOnList = function(){
        self.restoreListMarquee(this.id, null, this.SelectedIndex, null, 300);
        self.openChannelPage();
    }
    self.checkRolloverLeft = function(){
        self.restoreListMarquee(this.id, null, this.SelectedIndex, null, 300);
        resetStyleWhenFlipChInfo(0);
        self.openInfoPage();
    }
    self.checkRolloverRight = function(){
        resetStyleWhenFlipChInfo(0);
        self.openListPage();
    }
    self.checkRolloverDown = function(){
        var oprtKey = this.id == "livetv_list_ul" ? "channelList" : "programs";
        if(this.SelectedIndex == oprtData[oprtKey].length - 1){
            this.setSelectedIndex(0);
            if("channelList" == oprtKey){
                self.restoreListMarquee(this.id, this.id, oprtData[oprtKey].length - 1, 0, 300);
            }
            return false;
        }
        if("channelList" == oprtKey){
            self.restoreListMarquee(this.id, this.id, this.SelectedIndex, this.SelectedIndex + 1, 300);
        }
    }
    self.checkRolloverUp = function(){
        var oprtKey = this.id == "livetv_list_ul" ? "channelList" : "programs";
        if(this.SelectedIndex == 0 && oprtData[oprtKey].length > 0){
            this.setSelectedIndex(oprtData[oprtKey].length - 1);
            if("channelList" == oprtKey){
                self.restoreListMarquee(this.id, this.id, 0, oprtData[oprtKey].length - 1, 300);
            }
            return false;
        }
        if("channelList" == oprtKey){
            self.restoreListMarquee(this.id, this.id, this.SelectedIndex, this.SelectedIndex - 1, 300);
        }
    }
    self.setEllipsisiByHandler = function() {
        setEllipsisi(this.SelectedIndex);
    }
    function setEllipsisi(idx) {
        try {
            var cdom = $("#livetv_chlist_infos .listDetailPanel span").eq(idx);
            var ellipsisItem = $("#livetv_chlist_infos .liveTVChListDetail > span").eq(idx);
            if(!!cdom && cdom.height() > 350) {
                ellipsisItem.css("visibility", "visible");
            }
            else {
                ellipsisItem.css("visibility", "hidden");
            }
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
    }
    function setRecentWatch(reset, chnl) {
        if("SA" != crntArea&&"COL" != crntArea) return;
        if(reset) {
            recentWatch = readFileFromNative("hisenseUI/recentWatch", 1);
            (null == recentWatch) && (recentWatch = []);
        }
        else {
            if(null == chnl || !chnl.playTime) return;
            var playIter = Math.abs(Date.now() - chnl.playTime) / 1000;
            if(playIter >= 5 * 60) {
                for(var i = 0; i < recentWatch.length; i++) {
                    if(recentWatch[i].playId == chnl.playId && recentWatch[i].uid == chnl.uid) {
                        recentWatch.splice(i, 1);
                        break;
                    }
                }
                recentWatch.push(copyObj(chnl));
                writeFileToNative("hisenseUI/recentWatch", objToString(recentWatch), 1);
            }
            else {
                DBG_INFO("current channel play time[" + playIter + "] is too close ," +
                " do not need set recent watch.")
            }
        }
    }
    self.getRecentWatch = function() {
        return recentWatch;
    }
    function setSpecialHTMLDirection(){
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
            $("#livetv_chlist_channels li img").css("float", "right");
        }
        else{
            $("#livetv_chlist_channels li img").css("float", "left");
        }
    }
    self.clearRecentWatch = function() {
        recentWatch=[];
        Hisense.File.delete("hisenseUI/recentWatch", 1);
    }
}
var livetvchlist = new liveTVChannelList();
