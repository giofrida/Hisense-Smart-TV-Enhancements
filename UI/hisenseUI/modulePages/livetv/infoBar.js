/**
 * Created by BOB.J on 2014/12/16.
 */

function getInfoBarPageData(opts) {

    var caeData = {
        span: ["info_bar_num", "info_bar_name",
            "info_bar_time", "info_bar_crnt_start",
            "info_bar_crnt_stop", "info_bar_nxt_time",
            "info_bar_nxt_name", "info_bar_dtl_name",
            "info_bar_dtl_level", "info_bar_dtl_quality",
            "info_bar_dtl_crnt_name", "info_bar_dtl_crnt_description",
            "info_bar_ts", "info_bar_dtl_more", "info_bar_nxt_rating"],
        img: ["info_bar_nxt_reminde", "info_bar_nxt_record"],
        div: ["info_bar_crnt_name"],
        NavigationBar: [{
            id: "info_bar_attr",
            ori: {
                img: ["info_bar_attr_img"]
            }
        }, {
            id: "info_bar_group",
            ori: {
                span: ["info_bar_group_name"]
            }
        }]
    }

    opts.CaE = generateCaE(caeData);

    opts.CaE[3].enableHtml =
    opts.CaE[4].enableHtml =
    opts.CaE[5].enableHtml = true;
    var idx = caeData.span.length + caeData.img.length + caeData.div.length;

    opts.CaE[11].strFilter = true;
    opts.CaE[idx + 1].oriCaE[0].noLangData = true;

    return livetvinfobar.pageData;
}

function liveTVInfoBar() {
    var self = this;
    self.id = LiveTVModule.INFO_BAR;

    self.pageData = {
        info_bar_num: {Data: ''},
        info_bar_attr: {Data: []},
        info_bar_name: {Data: ''},
        info_bar_time: {Data: ''},
        info_bar_crnt_start: {Data: ''},
        info_bar_crnt_stop: {Data: ''},
        info_bar_crnt_name: {Data: ''},
        info_bar_nxt_time: {Data: ''},
        info_bar_nxt_name: {Data: ''},
        info_bar_nxt_reminde: {Data: ''},
        info_bar_nxt_record: {Data: ''},
        info_bar_group: {Data: []},
        info_bar_dtl_name: {Data: ''},
        info_bar_dtl_level: {Data: ''},
        info_bar_dtl_quality: {Data: ''},
        info_bar_dtl_crnt_name: {Data: ''},
        info_bar_dtl_crnt_description: {Data: ''},
        info_bar_ts: {Data: ""},
        info_bar_dtl_more: {Data: "More Info"},
        info_bar_nxt_rating: {Data: ""},
        rewrite: rewritePageData,
        langData: {
            "More Info": [],
            "Subtitle": [],
            "No program": [],
            "No program information": [],
            "Antenna": [],
            "Cable": [],
            "Satellite": []
        }
    };
    var oprtData = {};
    var imgList = {
        fav: 'img/common/favorite30.png',
        lock: 'img/common/lock30.png',
        encrypt: 'img/common/encrypt30.png',
        Antenna: 'img/common/Antenna.png',
        Cable: 'img/common/Cable.png',
        Satellite: 'img/common/Satellite.png',
        signallevel0: 'img/common/signal0.png',
        signallevel1: 'img/common/signal1.png',
        signallevel2: 'img/common/signal2.png',
        signallevel3: 'img/common/signal3.png',
        signallevel4: 'img/common/signal4.png',
        reminde: 'img/common/reserve30.png',
        record: 'img/common/record30.png',
        noImg: 'img/common/transparent.png',
        HDMI1: 'img/mixbar/HDMI1In.png',
        HDMI2: 'img/mixbar/HDMI2In.png',
        HDMI3: 'img/mixbar/HDMI3In.png',
        HDMI4: 'img/mixbar/HDMI4In.png',
        AV: 'img/mixbar/AVIn.png',
        Component: 'img/mixbar/componetIn.png',
        Scart: 'img/mixbar/scartIn.png'
    }
    self.pageData.operateData = oprtData;

    var infoBarDetailTimer = 0, infoBarCloseTimer = 0, pfInd = 0, autoCloseInterval = tv ? 3000 : 1000000000;

    var TSMap = ["Antenna", "Cable", "Satellite"];
    var crntInfoPage = 0, noProgram = false;
    var SAPTEXT = ["", "Mono", "Stereo", "SAP"];
    var crntDVBTime = 0, wkLongTime = 0;
    var crntTunerMode = 0, crntLang = "";
    var dolbySpace = ".", videoInfo = null;
    var pfCallback = null, firstSowInfobar = true;
    var lockOn = false;

    var firstCreate = true;

    self.showInfoBarFirst = function() {
        self.onOpenInfoBar();
    }

    self.onOpenInfoBar = function() {
        pfCallback = null;
        var crntSource = livetvmain.getCurrentSource();
        try {
            $(".infoBarArrow").css("visibility", "hidden");
            wkLongTime = model.timerfunc.getCurTime();
        }
        catch(ex) {
            wkLongTime = 0;
            DBG_ERROR("get current time error.")
        }
        if(crntSource.innerId != SourceList.TV) {
            openOtherInfo(crntSource);
        }
        else {
            openTVInfo();
        }
        // $("#info_bar_dtl_crnt_description").text(readHTMLString("UI/hisenseUI/shy_wrap.txt", 3))
    }

    self.onCloseInfoBar = function() {
        setTimeout(function(){
            livetvmain.checkIfNeedSendKeyToMheg5First();
        },300);
        DBG_INFO("onCloseInfoBar")
        autoCloseInterval = 3000;
        clearTimeout(infoBarDetailTimer);
        clearTimeout(infoBarCloseTimer);
        livetvmain.recoverCurrentSubPage(self.id);
        $("#info_bar_not_tv span").eq(0).text("");
        $("#info_bar_not_tv span").eq(1).text("");
        $("#info_bar_not_tv img").attr("src", imgList.noImg);
        $("#info_bar_ts").text("");
        $("#info_bar_time").text("");
        $(".infoBarArrow").css("visibility", "hidden");
        crntInfoPage = 0;
    }

    function firstLetterToUpper(sapText) {
        try {
            if (!sapText) return "";
            sapText = sapText.toLowerCase();
            return sapText.replace(/(^|\s+)\w/g, function(s) {
                return s.toUpperCase()
            });
        } catch (ex) {
            DBG_ERROR(ex.message);
            return "";
        }
    }

    function openTVInfo() {

        crntTunerMode = tv ? model.channelSearch.getSource() : 1;
        // init data
        self.showSimpleInfoByCh(null, false);
        if(livetvmain.getIsSameChannel()) return;
        if(livetvmain.getCurrentChannelInfo().isHidden) {
            oprtData.crntName = "Hidden Channel";
            pfInd = 2;
            noProgram = true;
            showRightPanel();
            return;
        }

        var isDTV = (TVTYPE.ATV != livetvmain.getCurrentChannelInfo().type);
        var nosignal = livetvmain.getNoSignalVar();
        //get group
        if(!nosignal) {
            if(isDTV) {
                setVideoAudioInfo();
            }
            else {
                if("SA" == InitArea || "COL" == InitArea){
                    var sap = tv ? model.sound.getSap() : "1";
                    DBG_INFO("sap[" + objToString(sap) + "]");
                    oprtData.modeGroup[GroupT.SAP] = SAPTEXT[sap];
                }
                else{
                    var sapArr = tv ? model.system.getATVAudioTrackList() : [];
                    if(sapArr.length == 0) {
                        oprtData.modeGroup[GroupT.SAP] = "";
                    }
                    else{
                        var sapLen = sapArr.length;
                        sapArr = ["Mono", "Dual1", "Dual2", "Stereo"];
                        var sapIdx = tv ? parseInt(model.system.getATVAudioTrackSelect()) : 0;
                        DBG_INFO('parseInt(model.system.getATVAudioTrackSelect()): '+sapIdx);
                        sapLen == 1 && (sapIdx = 0) && DBG_INFO('sapLen.length == 1, set sapIdx = 0');
                        oprtData.modeGroup[GroupT.SAP] = sapArr[sapIdx];
                    }

                }
            }
        }
        //get pf
        if(tv) {
            isDTV && model.tvservice.getChannelNowPfInfo();
            isDTV && model.tvservice.getChannelNextPfInfo();
        }
        else {
            var dvbtime = getDVBLongTime();
            onGetNowPfResult(0, [dvbtime - 1000, dvbtime + 2000, "CC", "program name", "program detail", "TV-None"]);
            onGetNowPfResult(0, [dvbtime + 2000, dvbtime + 4000, "CC", "program name", "program detail", "TV-None"]);
            return;
        }
        //timeout show right
        //ATV also should visible, remove judgement
        //if(TVTYPE.ATV != livetvmain.getCurrentChannelInfo().type) {
        clearTimeout(infoBarDetailTimer);

        infoBarDetailTimer = setTimeout(function() {
            DBG_ERROR("get pf info timeout");
            noProgram = true;
            if(livetvmain.getNoSignalVar()) {
                hiWebOsFrame[self.id].close();
            }
            else {
                pfInd = 2;
                showRightPanel();
            }
        }, (nosignal || isDTV) ? 3000 : 10);
        //}
    }

    function getComponentLang(name){
        if("SA" == InitArea){
            return getCurrentContentLanguage(name);
        }
        else{
            return name;
        }
    }

    self.getVideoInfo = function(){
        if(null === videoInfo && tv) videoInfo = model.tvservice.getCurrentSourceVideoFormat();
        return videoInfo;
    }

    self.clearVideoInfo = function(){
        videoInfo = "";
    }

    function openOtherInfo(crntSource) {
        lockOn = !!livetvmain.getLockSwitch();
        if(tv && !model.tvservice.onCurrentSourceVideoFormatChanged) {
            model.tvservice.onCurrentSourceVideoFormatChanged = onCurrentSourceVideoFormatChanged;
            model.tvservice.onMainPlayVideoFormatInfoChanged = onMainPlayVideoFormatInfoChanged;
        }

        $("#info_bar_page_1").css("display", "none");
        $("#info_bar_page_2").css("display", "none");
        var srcStr = getComponentLang(crntSource.rename);//SourceList.ARRAY[crntSource];
        $("#info_bar_not_tv span").eq(0).text(srcStr);
        $("#info_bar_not_tv .infoBarNTVIcon").attr("src", imgList[SourceList.ARRAY[crntSource.innerId].replace(/ /g, "")]);
        if(lockOn && crntSource.isLock) {
            $("#info_bar_not_tv .infoBarNTVLock").attr("src", imgList.lock);
        }
        videoInfo = "";
        if(!livetvmain.getNoSignalVar()) {
            videoInfo = tv ? model.tvservice.getCurrentSourceVideoFormat() : "1920,1080,1";
            DBG_ALWAYS("videoInfo[" + videoInfo + "]");
            if(!!videoInfo) {
                var dpi = videoInfo.split(','), wide_str = "", hz_str = "";
                if (crntSource.innerId != SourceList.AV) {
                    if (dpi[0] == "0") {
                        $("#info_bar_not_tv span").eq(1).text("");
                    }
                    else {
                        wide_str = dpi[0] + "*" + dpi[1];
                        if (wide_str != "640*480" && wide_str != "800*600" && wide_str != "1024*768") {
                            wide_str = wide_str + (dpi[2] == 0 ? "i" : "p");
                        }
                        if (hiWebOsFrame.getCurrentArea() == "EU") {
                            //5657_EU VIDAA LITE2.0 OTA  HDR
                            if (!!dpi[3] && dpi[3] != "0") {
                                wide_str += "@" + dpi[3] + "Hz";
                            }
                            if (!!dpi[4] && dpi[4] == "1") {
                                wide_str += " " + "HDR";
                            }
                        }

                        $("#info_bar_not_tv span").eq(1).text(wide_str);
                    }
                }
                else {
                    if("SA" == InitArea){
                        $("#info_bar_not_tv span").eq(1).text(videoInfo);
                    }
                    else{
                        wide_str = dpi[1] + (dpi[2] == 0 ? "i" : "p");
                        hz_str = (dpi[1] == "576") ? "PAL" : "NTSC";
                        $("#info_bar_not_tv span").eq(1).text(wide_str + "  " + hz_str);
                    }
                }
            }
            else{
                videoInfo = "";
            }
        }
        else {
            $("#info_bar_not_tv span").eq(1).text("");
        }
        showSimpleInfo();
        $("#info_bar_not_tv").css("display", "block");
        setSpecialHTMLDirection();
        timeOutCloseInfoBar();
    }

    function timeOutCloseInfoBar(dynamicTimer) {
        clearTimeout(infoBarCloseTimer);
        var iterval = !!dynamicTimer ? dynamicTimer : autoCloseInterval + 1000;
        infoBarCloseTimer = setTimeout(function() {
            hiWebOsFrame[self.id].close();
        }, iterval);
    }

    self.showSimpleInfoByCh = function(chInfo, flipInfo, dynamicTimer) {
        try {
            lockOn = !!livetvmain.getLockSwitch();
            $("#info_bar_not_tv").css("display", "none");
            livetvchlist.clearNumDialog();
        }
        catch(ex) {

        }
        initInfoBarData(chInfo, flipInfo);
        hideRightPanel();
        if(flipInfo){
            $("#info_bar_num").html(oprtData.number);
            $("#info_bar_ts").html(oprtData.TS);
            var attrsDom = $("#info_bar_attr img");
            attrsDom.eq(1).attr("src", oprtData.attrs[1]);
            attrsDom.eq(2).attr("src", oprtData.attrs[2]);
            attrsDom.eq(3).attr("src", oprtData.attrs[3]);
            $("#info_bar_name").html(oprtData.name);
            if("" == $("#info_bar_time").html()){
                var d = parseLocalTime();
                $("#info_bar_time").html(d.time + " " + UTCToLocalWeek(wkLongTime) + " " + d.date);
            }
        }
        else{
            hiWebOsFrame[self.id].rewriteDataOnly();
        }
        showSimpleInfo();
        $("#" + self.id).css("display", "block");
        $("#info_bar_page_1").css("display", "block");
        $("#info_bar_page_2").css("display", "block");
        timeOutCloseInfoBar(dynamicTimer);
        //resetInfoBarStyle();
    }

    function showSimpleInfo() {
        crntInfoPage = 0;
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
            $("#livetv_info_bar").css("left", "0px");
            $(".infoBarArrow").css("left","1870px");
            $(".infoBarArrow").css("transform","scaleX(1)");
        }
        else{
            $("#livetv_info_bar").css("left", "-1920px");
            $(".infoBarArrow").css("left","1920px");
            $(".infoBarArrow").css("transform","scaleX(-1)");
        }

    }

    function showDetailInfo(keyCode) {

        if(livetvmain.getNoSignalVar()) {
            DBG_INFO("no detail information");
            if(keyCode == VK_INFO) {
                hiWebOsFrame[self.id].close();
            }
        }
        else {
            timeOutCloseInfoBar();
            crntInfoPage = 1;
            try {
                if(parseInt($("#info_bar_dtl_crnt_description").css("height")) > 105) {
                    $("#info_bar_detail_ellipsis").css("visibility", "visible");
                }
                else {
                    $("#info_bar_detail_ellipsis").css("visibility", "hidden");
                }
            }
            catch(ex) {
                DBG_ERROR(ex.message);
            }

            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
                $("#livetv_info_bar").css("left", "-1920px");
                $(".infoBarArrow").css("left","1920px");
                $(".infoBarArrow").css("transform","scaleX(-1)");
            }
            else{
                $("#livetv_info_bar").css("left", "0px");
            $(".infoBarArrow").css("left","1870px");
            $(".infoBarArrow").css("transform","scaleX(1)");
            }
        }
    }

    self.keyHandler = function(keyCode) {
        DBG_ALWAYS("key[" + keyCode + "] on info bar");

        switch(keyCode) {
            case VK_RIGHT:
                0 == crntInfoPage && showDetailInfo(keyCode);
                break;
            case VK_LEFT:
                1 == crntInfoPage && showSimpleInfo();
                break;
            case VK_UP:
            case VK_INFO:
                if(hiWebOsFrame[self.id].visible) {
                    if(0 == crntInfoPage && keyCode == VK_INFO &&
                        livetvmain.getCurrentSourceInnerId() == SourceList.TV) {
                        showDetailInfo(keyCode);
                    }
                    else {
                        hiWebOsFrame[self.id].close();
                    }
                }
                else if(hiWebOsFrame.isCurrentModule("livetv") &&
                    LiveTVModule.CHANNEL_LIST != hiWebOsFrame.getCurrentPageId()) {
                    if(livetvmain.canPopupInfoBar(VK_INFO)) {
                        autoCloseInterval = 10000;
                        hiWebOsFrame[self.id].open();
                    }
                }
                break;
            case VK_BACK:
                hiWebOsFrame[self.id].close();
                break;
            case VK_BLUE:
                if(crntInfoPage == 1) {
                    var prgrm = {
                        title: oprtData.crntName,
                        detail: oprtData.detailInfo,
                        guidance: oprtData.guidance
                    };
                    closeLiveTVModule();
                    openEPGDetailPage(prgrm, hiWebOsFrame[LiveTVModule.MAIN]);
                }
                break;
            default :
                break;
        }
    }

    self.getCurrentProgramInfo = function(callback) {
        if(!!callback) {
            pfCallback = callback;
            model.tvservice.getChannelNowPfInfo();
            return true;
        }
        else {
            var programInfo = {
                startTime: !!oprtData.crntStart ? oprtData.crntStart : 0,
                endTime: !!oprtData.crntEnd ? oprtData.crntEnd : 0,
                name: !!oprtData.crntName ? oprtData.crntName : "",
                detail: !!oprtData.detailInfo ? oprtData.detailInfo : ""
            };
            return programInfo;
        }
    }

    function hideRightPanel() {
        $(".infoBarRight").css("display", "none");
        $(".infoBarArrow").css("visibility", "hidden");
    }

    function showRightPanel() {
        if(2 == pfInd) {
            // if(!hiWebOsFrame[self.id].visible) return;
            clearTimeout(infoBarDetailTimer);
            pfInd = 0;
            var crntTime = getDVBLongTime();
            var prgrm = {
                channelUid: oprtData.channelUid,
                playId: oprtData.playId,
                startTime: oprtData.nxtStart,
                endTime: oprtData.nxtStop
            }

            DBG_ALWAYS("get program[" + objToString(prgrm) + "] booking info");
            var bkFlag = schedule.getIsBookingByProgram(prgrm);
            oprtData.nxtReminde = bkFlag.reminder;
            oprtData.nxtRecord = bkFlag.record;

            hiWebOsFrame[self.id].rewriteDataOnly();
            $("#info_bar_crnt_progress").css("width", calculateProgress(oprtData.crntStart, oprtData.crntEnd, crntTime, 270) + "px");
            $(".infoBarRight").css("display", "block");
            if(dolbySpace == oprtData.modeGroup[GroupT.DOLBY]) {
                $("#info_bar_group_info_bar_group_name_sys" + GroupT.DOLBY).css("background-image", "url(img/common/dolby.png)");
                $("#info_bar_group_info_bar_group_name_sys" + GroupT.DOLBY).css("width", "30px");
                $("#info_bar_group_info_bar_group_name_sys" + GroupT.DOLBY).css("color", "transparent");
            }
            else {
                $("#info_bar_group_info_bar_group_name_sys" + GroupT.DOLBY).removeAttr("style");
            }
            timeOutCloseInfoBar();
            resetInfoBarStyle();
            if(livetvmain.getNoSignalVar()){
                $(".infoBarArrow").css("visibility", "hidden");
            }
            else{
                $(".infoBarArrow").css("visibility", "visible");
            }
            DBG_INFO('onOpenInfoBar, hiWebOsFrame.SendMheg5Status(0)');
            hiWebOsFrame.SendMheg5Status(0);
        }
    }

    function rewritePageData(pageData) {
        try {
            pageData.info_bar_num.Data = oprtData.number;
            pageData.info_bar_attr.Data = [];
            pageData.info_bar_attr.disableItem = [];
            for(var i = 0; i < oprtData.attrs.length; i++) {
                pageData.info_bar_attr.Data.push({
                    info_bar_attr_img: {Data: oprtData.attrs[i]}
                });
                if(!oprtData.attrs[i]) {
                    pageData.info_bar_attr.disableItem.push(i);
                }
            }
            pageData.info_bar_name.Data = oprtData.name + " ";
            var d = firstCreate ? {} : parseLocalTime();
            pageData.info_bar_time.Data = d.time + " " + UTCToLocalWeek(wkLongTime) + " " + d.date;

            // pageData.info_bar_crnt_start.Data = firstCreate ? "" : UTCToLocalTime(oprtData.crntStart);
            // pageData.info_bar_crnt_stop.Data =  firstCreate ? "" : UTCToLocalTime(oprtData.crntEnd);
            if (HTMLDIR.LTR == hiWebOsFrame.getHTMLDir()) {

                pageData.info_bar_crnt_start.Data = firstCreate ? "" : getProgramLocalTime(oprtData.crntStart, oprtData.crntEnd, 3);
                pageData.info_bar_crnt_stop.Data = firstCreate ? "" : getProgramLocalTime(oprtData.crntEnd, oprtData.crntStart, 3);
            } else {
                pageData.info_bar_crnt_start.Data = firstCreate ? "" : getProgramLocalTime(oprtData.crntEnd, oprtData.crntStart, 3);
                pageData.info_bar_crnt_stop.Data = firstCreate ? "" : getProgramLocalTime(oprtData.crntStart, oprtData.crntEnd, 3);
            }

            //DBG_ALWAYS("tempPrgrm.startTime[" + oprtData.crntStart + "], Data[" + UTCToLocalTime(oprtData.crntStart) + "]");
            pageData.info_bar_crnt_name.Data = oprtData.crntName;
            // pageData.info_bar_nxt_time.Data = firstCreate ? "" : (UTCToLocalTime(oprtData.nxtStart) + "-" + UTCToLocalTime(oprtData.nxtStop));

            pageData.info_bar_nxt_time.Data = firstCreate ? "" : getProgramLocalTime(oprtData.nxtStart,oprtData.nxtStop, 4);

            pageData.info_bar_nxt_name.Data = oprtData.nxtName;
            pageData.info_bar_nxt_reminde.Data = oprtData.nxtReminde ? imgList.reminde : imgList.noImg;
            pageData.info_bar_nxt_record.Data = oprtData.nxtRecord ? imgList.record : imgList.noImg;
            pageData.info_bar_nxt_rating.Data = oprtData.nxtRating ? oprtData.nxtRating : "";
            pageData.info_bar_group.Data = [];
            pageData.info_bar_group.disableItem = [];
            for(var i = 0; i < oprtData.modeGroup.length; i++) {
                pageData.info_bar_group.Data.push({
                    info_bar_group_name: {Data: oprtData.modeGroup[i]}
                });
                if(!oprtData.modeGroup[i]) {
                    pageData.info_bar_group.disableItem.push(i);
                }
            }
            pageData.info_bar_dtl_name.Data = oprtData.name + " ";


            if(crntLang == "per" || crntLang == "ara") {
                pageData.info_bar_dtl_level.Data =
                    getCurrentContentLanguage("Signal Level") + (": " + oprtData.signalLevel);
                pageData.info_bar_dtl_quality.Data =
                    getCurrentContentLanguage("Signal Quality") + (": " + oprtData.signalQuality);
            }
            else {
                pageData.info_bar_dtl_level.Data =
                    getCurrentContentLanguage("Signal Level") + (": " + oprtData.signalLevel + "%");
                pageData.info_bar_dtl_quality.Data =
                    getCurrentContentLanguage("Signal Quality") + (": " + oprtData.signalQuality + "%");
            }
            pageData.info_bar_dtl_level.disable = (0 == oprtData.signalLevel);
            pageData.info_bar_dtl_quality.disable = (0 == oprtData.signalQuality);
            // oprtData.detailInfo = readHTMLString("UI/hisenseUI/shy_no_wrap.txt", 3);
            pageData.info_bar_dtl_crnt_name.Data = oprtData.crntName;
            pageData.info_bar_dtl_crnt_description.Data = getCurrentContentLanguage(oprtData.detailInfo);
            pageData.info_bar_ts.Data = oprtData.TS;
        }
        catch(ex) {
            DBG_ERROR(ex.message);
        }
         firstCreate = false;

    }

    function initInfoBarData(chInfo, flipInfo) {
        resetOperateData();
        var crntChannel = !!chInfo ? chInfo : livetvmain.getCurrentChannelInfo();
        if(null == crntChannel) return;

        //DBG_ALWAYS(objToString(crntChannel));
        oprtData.number = crntChannel.number;
        oprtData.name = crntChannel.name;
        oprtData.channelUid = crntChannel.uid;
        oprtData.playId = crntChannel.playId;
        //oprtData.attrs[0] = (
        if(flipInfo) {
            oprtData.TS = (
                crntChannel.playId == 1 ? getCurrentContentLanguage("Antenna") :
                    crntChannel.playId == 2 ? getCurrentContentLanguage("Cable") :
                        crntChannel.playId == 3 ? getCurrentContentLanguage("Satellite") : "");  // imgList.signallevel4;
        }
        else {
            oprtData.TS = (
                crntTunerMode == 0 ? getCurrentContentLanguage("Antenna") :
                    crntTunerMode == 1 ? getCurrentContentLanguage("Cable") :
                        crntTunerMode == 2 ? getCurrentContentLanguage("Satellite") : "");  // imgList.signallevel4;
        }

        crntChannel.isEncrypt && (oprtData.attrs[1] = imgList.encrypt);
        crntChannel.favType && (oprtData.attrs[2] = imgList.fav);
        lockOn && crntChannel.isLock && (oprtData.attrs[3] = imgList.lock);
        //oprtData.TS = crntChannel.listUid;
        var curLang = hiWebOsFrame.getCurrentLanguage();
        if (curLang == "lav" || curLang == "est" || curLang == "lit") {
            oprtData.modeGroup[GroupT.TVTYPE] = getCurrentContentLanguage(TVTYPE.ATV == crntChannel.type ? "ATV" : "DTV");
        } else {
            oprtData.modeGroup[GroupT.TVTYPE] = (TVTYPE.ATV == crntChannel.type ? "ATV" : "DTV");
        }

        if(!flipInfo) {
            oprtData.signalLevel = tv ? model.tvservice.getSignalMainLevels()[0] : "10";
            oprtData.signalQuality = tv ? model.tvservice.getTunersignalinfoSignalqualities()[0] : "10";
        }

        oprtData.modeGroup[GroupT.ASPECT] = (TVTYPE.ATV == crntChannel.type ? "" : "16:9");
    }

    function refreshPfInfo() {

    }

    function resetOperateData() {
        pfInd = 0;
        noProgram = false;
        oprtData.number = '';
        oprtData.attrs = [imgList.noImg, imgList.noImg, imgList.noImg, imgList.noImg];//new Array(4);
        oprtData.name = '';
        oprtData.crntStart = 0;
        oprtData.crntEnd = 0;
        oprtData.crntName = 'No program';
        oprtData.nxtStart = 0;
        oprtData.nxtStop = 0;
        oprtData.nxtName = '';
        oprtData.nxtRecord = !tv;
        oprtData.nxtReminde = !tv;
        oprtData.modeGroup = new Array(14);
        oprtData.signalLevel = 0;
        oprtData.signalQuality = 0;
        oprtData.detailInfo = "";
        oprtData.guidance = "";
        oprtData.TS = "";
        oprtData.nxtRating = "";
        crntLang = hiWebOsFrame.getCurrentLanguage();
    }

    resetOperateData();

    function setVideoAudioInfo() {
        videoInfo = tv ? model.tvservice.getMainPlayVideoFormatInfo() : "720p,16:9";
        var audioInfo = tv ? model.tvservice.getMainPlayAudioFormatInfo() : "1/4 eng Mono/ac3";
        //var sap = tv ? model.sound.getSap() : "1";
        DBG_INFO("video info[" + objToString(videoInfo) + "]");
        DBG_INFO("audio info[" + objToString(audioInfo) + "]");


        if(!!videoInfo) {
            oprtData.modeGroup[GroupT.DPI] = videoInfo.split(',')[0];
            oprtData.modeGroup[GroupT.ASPECT] = videoInfo.split(',')[1];
            if(oprtData.modeGroup[GroupT.DPI] == "0i" || oprtData.modeGroup[GroupT.ASPECT] == "0:0") {
                oprtData.modeGroup[GroupT.ASPECT] = "";
                oprtData.modeGroup[GroupT.DPI] = "";
            }
        }
        if(!!audioInfo) {
            var aiArr = audioInfo.split("|");
            if(1 == aiArr.length) {
                oprtData.modeGroup[GroupT.SUBT] = audioInfo;
            }
            else if(2 == aiArr.length) {
                //var templang = aiArr[1].split(" ");
                oprtData.modeGroup[GroupT.SUBT] = aiArr[0];

                if(!!aiArr[1] && null != aiArr[1].match("ac3")) {//dolby
                    oprtData.modeGroup[GroupT.DOLBY] = dolbySpace;
                }
                else {
                    oprtData.modeGroup[GroupT.DOLBY] = aiArr[1];
                }
            }
        }
        oprtData.modeGroup[GroupT.SAP] = SAPTEXT[0];
        livetvmain.checkToShowNotSupported(videoInfo);
    }

    function onGetNowPfResult(actionId, result) {
        //DBG_INFO('onGetNowPfResult: '+actionId+', result: '+result);

        if(pfInd == 0) {
            crntDVBTime = getDVBLongTime();
        }

        if(-1 == result){ //ATV or no programeInfo
            var curTitleName = livetvmain.getCurrentChannelInfo().name;
            result = [crntDVBTime,crntDVBTime + 3600 , 0, curTitleName, "", 0];//default

            if(!!pfCallback){
                pfCallback.call(this, result);
                pfCallback = null;
            }
            return;
        }


        DBG_ALWAYS("pf info " + objToString(result));
        if(crntDVBTime >= parseInt(result[Pf.START_TIME]) || !!pfCallback) {
            oprtData.crntStart = !!result[Pf.START_TIME] ? parseInt(result[Pf.START_TIME]) : 0;
            oprtData.crntEnd = !!result[Pf.END_TIME] ? parseInt(result[Pf.END_TIME]) : 0;
            oprtData.crntName = filterUnicaode(!!result[Pf.TITLE] ? result[Pf.TITLE] : "No program");
            oprtData.detailInfo = filterUnicaode(!!result[Pf.DETAIL] ? result[Pf.DETAIL] : "No program information");
            oprtData.modeGroup[GroupT.RATING] = result[Pf.RATING];
            oprtData.modeGroup[GroupT.HBBTV] = deviceKeySet.HBBTV.length > 0 ? "HbbTV" : "";
            oprtData.guidance = !!result[Pf.GUIDANCE] ? result[Pf.GUIDANCE] : "";
            if("NA" == hiWebOsFrame.getCurrentArea() || "SA" == hiWebOsFrame.getCurrentArea()) {
                oprtData.modeGroup[GroupT.CC] = (1 == result[Pf.CC]) ? "CC" : "";
            }
            else {
                oprtData.modeGroup[GroupT.CC] = (1 == result[Pf.CC]) ? getCurrentContentLanguage("Subtitle") : "";
            }

            if(!!pfCallback) {
                pfCallback.call(this, result);
                pfCallback = null;
                return;
            }
        }
        else {
            oprtData.nxtStart = !!result[Pf.START_TIME] ? parseInt(result[Pf.START_TIME]) : 0;
            oprtData.nxtStop = !!result[Pf.END_TIME] ? parseInt(result[Pf.END_TIME]) : 0;
            oprtData.nxtName = filterUnicaode(!!result[Pf.TITLE] ? result[Pf.TITLE] : "No program");
            oprtData.nxtRating = result[Pf.RATING];
        }
        pfInd++;
        showRightPanel();
    }

    function onGetNextPfResult(actionId, result) {

        //pfInd++;
        //showRightPanel();
    }

    function onCurrentSourceVideoFormatChanged(val) {
        if(livetvmain.getCurrentSourceInnerId() == SourceList.TV) return;
        DBG_ALWAYS("current source video format changed[" + val + "]");
        if(LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId()) {
            if(!!val && !livetvchlist.getChannelChangeFlag()) {
                if(!videoInfo){
                    openLiveTVSubPage(LiveTVModule.INFO_BAR);
                }
                else{
                    //DBG_INFO("current source[" + SourceList.ARRAY[crntSource] + "] do not show format changed");
                }
            }
            //videoInfo = val;
            if(!livetvchlist.getChannelChangeFlag()){
                livetvmain.checkToShowNotSupported();
            }
        }
        else {
            DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not receive this change");
        }
    }



    function onMainPlayVideoFormatInfoChanged(val){
        if(LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId()) {
            if(!!val && !livetvchlist.getChannelChangeFlag()) {
                livetvmain.checkToShowNotSupported(val);
            }
        }
    }

    function resetInfoBarStyle() {
        $(".infoBarPanel_top").css("visibility", oprtData.crntStart == 0 ? "hidden" : "visible");
        $(".infoBarPanel_bottom").css("visibility", oprtData.nxtStart == 0 ? "hidden" : "visible");
        setSpecialHTMLDirection();
    }

    function setSpecialHTMLDirection(){
    /*
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".infoBarRightPanel_2 ul").css("float", "right");
            $(".infoBarRightPanel_2 li").css("float", "right");
            //$("#info_bar_right_arrow").css("float", "right");
            $(".infoBarArrow").css("transform", "scaleX(1)");
            $("#info_bar_left_arrow").css("margin", "0px 20px 0px -20px");
            $(".infoBarPanel_top").css("float", "left");
            $(".infoBarRight").css("padding", "30px 0px 30px 30px");
            // $("#info_bar_dtl_btn").css("float", "right");
            $("#info_bar_dtl_btn").css("margin", "0px 40px 0px 0px");
            $("#info_bar_time").css("float", "left");
            $("#info_bar_ts").css("float", "right");
            $("#info_bar_attr").css("float", "right");
            $("#info_bar_not_tv").css("padding", "35px 10px 0px 35px");
        }
        else {
            $(".infoBarRightPanel_2 ul").css("float", "left");
            $(".infoBarRightPanel_2 li").css("float", "left");
            //$("#info_bar_right_arrow").css("float", "left");
            $(".infoBarArrow").css("transform", "scaleX(-1)");
            $("#info_bar_left_arrow").css("margin", "0px -20px 0px 20px");
            $(".infoBarPanel_top").css("float", "right");
            $(".infoBarRight").css("padding", "30px 30px 30px 0px");
            // $("#info_bar_dtl_btn").css("float", "left");
            $("#info_bar_dtl_btn").css("margin", "0px 0px 0px 40px");
            $("#info_bar_time").css("float", "right");
            $("#info_bar_ts").css("float", "left");
            $("#info_bar_attr").css("float", "left");
            $("#info_bar_not_tv").css("padding", "35px 35px 0px 10px");
        }
    */
    }
    self.getCurrentInfoPage = function() {
        return crntInfoPage;
    }
    var enumIndex = 0;

    function Pf() {
        enumIndex = 0;
    }

    Pf();
    Pf.START_TIME = enumIndex++;
    Pf.END_TIME = enumIndex++;
    Pf.CC = enumIndex++;
    Pf.TITLE = enumIndex++;
    Pf.DETAIL = enumIndex++;
    Pf.RATING = enumIndex++;
    Pf.GUIDANCE = enumIndex++;

    function GroupT() {
        enumIndex = 0;
    }

    GroupT();
    GroupT.DPI = enumIndex++;
    GroupT.ASPECT = enumIndex++;
    GroupT.TVTYPE = enumIndex++;
    GroupT.HBBTV = enumIndex++;
    GroupT.RATING = enumIndex++;
    GroupT.CC = enumIndex++;
    GroupT.OTHER = enumIndex++;// temp


    GroupT.SUBT = enumIndex++;
    GroupT.TTX = enumIndex++;
    GroupT.SAP = enumIndex++;
    GroupT.DOLBY = enumIndex++;

    if(tv && !model.tvservice.getChannelNowPfInfoCallBack) {
        model.tvservice.getChannelNowPfInfoCallBack = onGetNowPfResult;
        model.tvservice.getChannelNextPfInfoCallBack = onGetNowPfResult;
    }
}

var livetvinfobar = new liveTVInfoBar();
