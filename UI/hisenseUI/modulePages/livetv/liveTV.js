/**
 * Created by BOB.J on 2014/12/16.
 */



function getLiveTVPageData(opts) {
    return {};
}

function liveTVMain() {
    var self = this;
    self.id = LiveTVModule.MAIN;

    self.pageData = {};

    var oprtData = {}, crntChannel = null;

    var signalTimer = 0, noSignal = 0, notSupportedShowed = false, tiemrReseted = false, audioTimer = 0;
    var ciEncryptedFlag = false, bannerEnable = true;//ci encrypted标志
    var auEnergyWarningCheckedBefore = false, auEnergyWarningTimer = null; //澳洲市场EnnergyWarining是否已检测过
    var crntSubPage = LiveTVModule.MAIN, teletexTimer = 0;
    var afterInitLiveTV = null, firstStartLiveTV = true;
    var currentSource = SourceList.TV, sourceList = [], currenState = CurrentState.NONE, infoBarFlag = true,
        upgradMsgPoped = true, OadupgradMsgPoped = true, lockArr = [0, 0, 0, 0, 0], openFlag = [], oriSourceList = [],
        userMode = true, firstPlay = false, unlocked = false, firstLockTime = -1, firstLockStatus = -1;
    var needUpdateList = false;
    var waitSourceChange = false;
    var globalLockState = false;
    var pvrChannelMem = {
        current: {},
        last: {}
    };
    var pvrECodeMem = [];
    var camEcryTimer = null; //延时1s显示ci encrypt消息
    var firstInitUI = true;
    var disableChannelNotify = false;
    var enableTeletextKey = true;
    self.pageData.operateData = oprtData;

    function resetOpenFlag() {
        openFlag = new Array(Msg.ARRAY.length);
        for (var i = 0; i < Msg.ARRAY.length; i++) {
            openFlag[i] = 1;
        }
    }
    self.setDisableChannelNFY = function(val){
        disableChannelNotify = val;
        DBG_INFO("disable current channel notify[" + val + "].");
    }

    self.onOpenLiveTVMain = function () {
        enableTeletextKey = true;
    }

    self.getEnableTeletextKey = function() {
        return enableTeletextKey;
    }

    self.setEnableTeletextKey = function(val) {
        enableTeletextKey = val;
    }

    self.onFocusLiveTVMain = function () {
        try {
            try {
                if (!!hiWebOsFrame["dialog_common"] && hiWebOsFrame["dialog_common"].visible) {
                    DBG_ERROR("dialog_common have not been closed.");
                    hiWebOsFrame["dialog_common"].close();
                }
                if (!!hiWebOsFrame["dialog_reminder"] && hiWebOsFrame["dialog_reminder"].visible) {
                    DBG_ERROR("dialog_reminder have not been closed.");
                    hiWebOsFrame["dialog_reminder"].close();
                }
                if (enableHbbTVControl() && ("stopped" == deviceKeySet.HBBTVSTATE || "none" == deviceKeySet.HBBTVSTATE)  && !isMainArchiveRecording() && !isTimeShiftStatus()) {
                    startHBBTV();
                }
                if (currentSource == SourceList.TV && !isMainArchiveRecording() && !isTimeShiftStatus()) {
                    if(!!deviceKeySet.HBBTVNEEDRESUME && !appStarting) {
                        resumeHBBTV();
                    }
                    deviceKeySet.HBBTVNEEDRESUME = true;
                }
                if (!firstInitUI) {
                    deviceKeySet.HBBTV = tv ? parseHBBTVKeyCodes(model.tvservice.getHbbTvKeySet(), true) : [];
                }

                // if(lastClosedPage.toLowerCase().indexOf("setting") > -1 && !checkHBBTVKeySet()){
                // model.tvservice.playChannel(0xffff, 0, 0, 0);
                // }
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }
            crntSubPage = LiveTVModule.MAIN;
            if (!upgradMsgPoped && !g_sysisdownloadingflag) {
                try {
                    closeLiveTVModule();
                    StartAutoUpdate(hiWebOsFrame.blankPage, 0);
                    upgradMsgPoped = true;
                }
                catch (ex) {
                    DBG_ERROR(ex.message);
                }
            }
            if (!OadupgradMsgPoped) {
                try {
                    closeLiveTVModule();
                    StartAutoUpdate(hiWebOsFrame.blankPage, 1);
                    OadupgradMsgPoped = true;
                }
                catch (ex) {
                    DBG_ERROR(ex.message);
                }
            }
            else if (needUpdateList) {
                onChannellistNeedUpdateChaged(1);
            }
            else {
                if (!!crntChannel && !!crntChannel.uid &&
                    userMode && firstPlay && "undefined" != typeof(livetvchlist)
                    && livetvchlist.hasChannels() && 0 == model.source.getCurrentSource()) {
                    setOperateTipShowFlag(true);//add by ghl, 在operate_tip页面中关闭msg 和energy_warning不成功,直接用变量判断
                    openLiveTVSubPage(LiveTVModule.OPERATE_TIP);
                }
                else {
                    DBG_ALWAYS("open flag " + objToString(openFlag));
                    if (waitSourceChange) {
                        DBG_ALWAYS("wait for change source, do not open any subpage.");
                    }
                    else if (!checkHBBTVKeySet()) {
                        showOSDOnLiveTV();
                    }
                }
            }

            checkPageNeedShow();    //add by ghl
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        resetOpenFlag();
        firstInitUI = false;
    }

    self.onCloseLiveTVMain = function () {
//        try {
//            closeMsgPage(false);
//        }
//        catch(ex) {
//            DBG_ERROR(ex.message);
//        }
        try {
            DBG_INFO('self.onCloseLiveTVMain, hiWebOsFrame.SendMheg5Status(0)');
            hiWebOsFrame.SendMheg5Status(0);
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        self.clearLastPlayedChannel();
        hideNoSignalIcon();
        hideAudioIcon();
        hideCIEncryptedMsg();
        self.hideTeletextHelp();
        try {
            livetvchlist.clearNumDialog();
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        hiWebOsFrame[LiveTVModule.INFO_BAR].close();

    }

    self.initLiveTVMain = function (afterInit) {
        DBG_INFO("initLiveTVMain");
        // notify function
        resetOpenFlag();
        if (tv) {
            model.tvservice.onMainPlayChanged = mainPlayChanged;
            model.tvservice.onNoSignalMainChanged = signalChanged;
            model.source.onCurrentSourceChaged = parseCurrentSource;

            //add by ghl
            model.tvservice.onMessageCamIndexChaged = onMessageCamIndexChaged;

            model.softupdate.onAutoAnnouncementChaged = softwareUpdateNotify;
            try {
                if (hiWebOsFrame.getCurrentArea() == "EM"||FREEVIEWTEST) {
                    model.softupdate.onOadAutoAnnouncementChaged = softwareOadUpdateNotify;

                }
            } catch (e) {
                DBG_ERROR(e.message);
            }
            //model.softupdate.onChagedHisenseAppUpdateAnnounced = appUpdateNotify;
            model.cec.onCecSourceChanged = onCecNotifyChangeSource;
            model.tvservice.onHbbTvKeySetChanged = parseHBBTVKeyCodes;
            model.parentlock.onSModelChaged = onLockSwitchModeChanged;
            model.source.onInputCurrentInLockChaged = onCurrentInputLockChaged;
            model.servicelist.onChannellistNeedUpdateChaged = onChannellistNeedUpdateChaged;
            if ("EU" == InitArea) model.tvservice.onBannerEnableChanged = onBannerEnableChanged;
            lockArr[ParentLock.SWITCH] = model.parentlock.getSModel();
            noSignal = ( 1 == model.tvservice.getNoSignalMain());
            notSupportedShowed = false;
            needUpdateList = false;
            upgradMsgPoped = true;
            OadupgradMsgPoped = true;
            pvrChannelMem = {
                current: {},
                last: {}
            };
            sourceList = parseSourceList(model.source.getInputName());
            parseCurrentSource(model.source.getCurrentSource());

            userMode = !!parseInt(model.hisfactory.getTofactoryOpition());
            firstPlay = !parseInt(model.tvservice.getPlaySuccessLiveTV());//init value = 0
            //DBG_ALWAYS("userMode[" + userMode + "], firstPlay[" + firstPlay + "]");
            firstLockTime = tv ? parseInt(model.source.getCurrentTimeInLock()) : 0;
            //DBG_ALWAYS("first lock time[ " + firstLockTime + "]");
            setTimeout(function () {
                if (currentSource == SourceList.TV && 1 == model.servicelist.getChannellistNeedUpdate()) {
                    onChannellistNeedUpdateChaged(1);
                }
            }, 10000);
        }
        else {
            sourceList = parseSourceList([
                "0", "TV", "0", "0", "", "0",
                "1", "AV", "1", "0", "", "0",
                "2", "COMPONENT", "1", "0", "", "0",
                "3", "HDMI 1", "1", "0", "", "0",
                "4", "HDMI 2", "1", "0", "", "0",
                "5", "HDMI 3", "1", "0", "", "0",
                "6", "HDMI 4", "1", "0", "", "0"
            ]);
        }
        if (SourceList.TV == currentSource) {
            crntChannel = mainPlayToChannel();
            firstLockStatus = tv ? model.tvservice.getLockStatus() : 0;
            //DBG_ALWAYS("first lock status[" + firstLockStatus + "]");
            if (1 == firstLockStatus) {
                crntChannel.eCode = ECode.LOCK;
            }
        }
        else {
            crntChannel = {
                listUid: "",
                uid: "",
                number: "",
                name: SourceList.ARRAY[currentSource],
                type: "",
                favType: "",
                isSkip: "",
                isLock: "",
                isEncrypt: ""
            };
        }
        afterInitLiveTV = afterInit;
    }

    self.getCurrentChannelInfo = function () {
        //crntChannel.listUid = 1;
        if (!crntChannel.name) crntChannel.name = "";
        if (!crntChannel.number && 0 != crntChannel.number) crntChannel.number = "";
        return copyObj(crntChannel);
    }
    self.recheckCurrentChannelInfo = function () {
        //DBG_ALWAYS("recheck current channel");
        var ecode = ECode.NONE;
        if (!!crntChannel && !!crntChannel.eCode) {
            ecode = crntChannel.eCode;
        }
        crntChannel = mainPlayToChannel(ecode);
        return copyObj(crntChannel);
    }

    self.getNoSignalVar = function () {
        return noSignal;
    }

    self.getNoSignalFlag = function () {
        if (!tv) return false;
        noSignal = (1 == model.tvservice.getNoSignalMain());
        if (!noSignal && currentSource == SourceList.TV) {
            var nochnl = (0 == model.tvservice.getChannelListSaved());
            //var ecode5 = (crntChannel.eCode == ECode.NOSIGNAL);
            if (nochnl) {
                DBG_ERROR("no signal flag error, recheck: nochannel[" + nochnl + "]");
                noSignal = true;
            }
        }
        DBG_ALWAYS("nosignal[" + noSignal + "]");
        return noSignal;
    }

    self.getIsDataChannelFlag = function () {
        if (!tv) return false;
        var ret = !crntChannel || (crntChannel.eCode == ECode.NO_SERVICE);
        DBG_ERROR("crntChannel[" + objToString(crntChannel) + "]");
        DBG_ERROR("is data channel[" + ret + "]");
        return ret;
    }
    //check
    self.getCIEncryptedFlag = function () {
        try {
            if (!tv) return false;
            // DBG_INFO('currentSource == SourceList.TV:' + currentSource == SourceList.TV + ', model.tvservice.getMessageCamIndex():' + model.tvservice.getMessageCamIndex());
            return (currentSource == SourceList.TV && 1 == model.tvservice.getMessageCamIndex());
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.getEnergyWarningFlag = function () {
        try {
            if (!tv) return false;
            if (false != auEnergyWarningCheckedBefore || 'EM' != InitArea) {
                //DBG_INFO('auEnergyWarningCheckedBefore: ' + auEnergyWarningCheckedBefore + ', InitArea: ' + InitArea);
                //DBG_INFO("false != auEnergyWarningCheckedBefore || 'EM' != InitArea, return false");
                return false;
            }

            DBG_INFO('energy warning will show if au market && if possible');

            var tvInfo = model.basicSetting.getTvsetLocation();
            DBG_INFO('model.basicSetting.getTvsetLocation(): ' + tvInfo);
            if (-1 == tvInfo.toLowerCase().indexOf('aus')) {
                DBG_INFO('TV is not au market, do not show energy warning && set auEnergyWarningCheckedBefore true, return false');
                auEnergyWarningCheckedBefore = true; //设为true，下次直接不用判断此接口了
                return false;
            }

            //TODO 是否不用判断当前页面为liveTV
            if (self.id != hiWebOsFrame.getCurrentPageId() || !hiWebOsFrame[LiveTVModule.MAIN].visible) {
                DBG_INFO('curPage not livetv || livetv not visible, return false');
                return false;
            }


            //var picBrightness = model.video.getBrightness();
            //DBG_INFO('model.video.getBrightness(): ' + picBrightness);
            //var picContrast = model.video.getContrast();
            //DBG_INFO('model.video.getContrast(): ' + picContrast);
            var picBacklightVal = model.video.getBacklight();
            DBG_INFO('model.video.getBacklight(): ' + picBacklightVal);

            DBG_INFO('now test brightness and contrast, set auEnergyWarningCheckedBefore = true');
            auEnergyWarningCheckedBefore = true;
            if (picBacklightVal > 50) {
                DBG_INFO('picBacklightVal > 50, energy warning will show in livetv');
                return true;
            }
            else {
                DBG_INFO('picBacklightVal > 50 not true, return;');
                return false;
            }

        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.hideEnergyWarning = function () {
        hideEnergyWarning();
    }

    self.showEnergyWarning = function () {
        showEnergyWarning();
    }

    self.hideCIEncryptedMsg = function () {
        hideCIEncryptedMsg();
    }

    self.showCIEncryptedMsg = function () {
        showCIEncryptedMsg();
    };

    self.notifyMainplay = function (val) {
        mainPlayChanged(val);
    };

    var lastPlayedChannel = null;
    self.getIsSameChannel = function(){
        try{
            if(null == lastPlayedChannel || null == crntChannel) return false;
            return (lastPlayedChannel.uid == crntChannel.uid);
        }
        catch (ex){
            DBG_ERROR(ex.message);
            return false;
        }
    }
    self.clearLastPlayedChannel = function(){
        lastPlayedChannel = null;
    }
    function recordLastPlayedChannel(uid){
        try {//uid is a new notify
            if (null == lastPlayedChannel || uid != crntChannel.uid) {
                lastPlayedChannel = crntChannel;
            }
        }
        catch(ex){
            lastPlayedChannel = null;
        }
        //DBG_ERROR(lastPlayedChannel);
    }
    function compareChannel(a, b) {
        if (null == a || null == b) return false;
        return (a.uid == b.uid && a.playId == b.playId);
    }
    function mainPlayChanged(val) {
        if(disableChannelNotify) return;
        DBG_ALWAYS("current channel info is --" + objToString(val) + "--");

        if (currentSource != SourceList.TV) {
            DBG_ERROR("current source[" + SourceList.ARRAY[currentSource] + "] is not TV.");
            return;
        }
        if ("app_factory" == hiWebOsFrame.getCurrentPageId()) {
            DBG_INFO("factory do not receive current channel changed.");
            return;
        }
        if (0 == val.length) {
            crntChannel = null;
        }
        else {
            //var lastChanel = livetvmain.getCurrentChannelInfo();
            recordLastPlayedChannel(val[MPChannel.UID]);
            var hasSatId = (9 == val.length);
            crntChannel = {
                listUid: val[MPChannel.LISTUID],
                uid: val[MPChannel.UID],
                number: val[MPChannel.NUMBER],
                name: val[MPChannel.NAME],
                type: val[MPChannel.TYPE],
                favType: getMaskValue(Mask.FAVTYPE, val[MPChannel.ATTRIBUTE]),
                isSkip: getMaskValue(Mask.SKIP, val[MPChannel.ATTRIBUTE]),
                isLock: getMaskValue(Mask.LOCK, val[MPChannel.ATTRIBUTE]),
                isEncrypt: getMaskValue(Mask.ENCRYPT, val[MPChannel.ATTRIBUTE]),
                isHidden: getMaskValue(Mask.HIDDEN, val[MPChannel.ATTRIBUTE]),
                playId: val[MPChannel.PLAYID],
                satId: hasSatId ? val[MPChannel.SATELLITEID] : 0,
                eCode: ECode.NONE,
                playTime: Date.now()
            }

            if (hasSatId) {
                crntChannel.eCode = !!val[MPChannel.ECODE] ? val[MPChannel.ECODE] : ECode.NONE;
            }
            else {
                crntChannel.eCode = !!val[MPChannel.ECODE - 1] ? val[MPChannel.ECODE - 1] : ECode.NONE;
            }
        }
        var chgChannel = false;
        if (livetvchlist.getChannelChangeFlag() &&
            null != livetvchlist.getExpectedChannel() &&
            !compareChannel(crntChannel, livetvchlist.getExpectedChannel())) {
            DBG_ERROR("channel info is diffrent with expectedChannel");
            return;
        }
        if (crntChannel.eCode != ECode.VIDEO_FMT_UPDATE && crntChannel.eCode != ECode.LOCKED &&
            crntChannel.eCode != ECode.STOPPED) {
            try {
                chgChannel = livetvchlist.getChannelChangeFlag();
                livetvchlist.tryToUpdateChannel(crntChannel);
                if (hiWebOsFrame.epg) epg.refreshPIPChannelInfo(crntChannel);
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }
        if (self.id != hiWebOsFrame.getCurrentPageId() || !hiWebOsFrame[LiveTVModule.MAIN].visible) {
            if (hiWebOsFrame.getCurrentPageId() == LiveTVModule.PASSWORD_DIALOG
                && crntChannel.eCode != ECode.LOCK && crntChannel.eCode != ECode.LOCKED) {
                DBG_INFO("not locked close password dialog");
                globalLockState = parseLockState();
                pswdDialog.backToLiveTV();
            }
            else {
                DBG_INFO("current page[" + hiWebOsFrame.getCurrentPageId() + "] is not livetv, skip.");
            }
        }
        else {
            if (crntChannel.eCode != ECode.VIDEO_FMT_UPDATE && crntChannel.eCode != ECode.LOCKED &&
                crntChannel.eCode != ECode.STOPPED) {
                if ("SA" == hiWebOsFrame.getCurrentArea()) {
                    if (userMode && firstPlay && crntChannel.ECODE == ECode.NONE) {
                        setOperateTipShowFlag(true);//add by ghl, 在operate_tip页面中关闭msg 和energy_warning不成功,直接用变量判断
                        openLiveTVSubPage(LiveTVModule.OPERATE_TIP);
                    }
                    else {
                        showOSDOnLiveTV(false, chgChannel);
                    }
                }
                else {
                    showOSDOnLiveTV(false, chgChannel);
                }//true, show infobar
            }
            else if (crntChannel.eCode == ECode.VIDEO_FMT_UPDATE) {
                hideAudioIcon();
            }
        }
        try {
            if (pvrECodeMem[0] != crntChannel.uid || pvrECodeMem[1] != crntChannel.playId) {
                pvrECodeMem = [crntChannel.uid, crntChannel.playId, crntChannel.eCode];
            }
            else {
                pvrECodeMem.indexOf(crntChannel.eCode) < 0 && pvrECodeMem.push(crntChannel.eCode);
            }
            //DBG_INFO("pvrECodeMem: " + objToString(pvrECodeMem));
            if (crntChannel.eCode == ECode.VIDEO_FMT_UPDATE ||
                ((firstStartLiveTV || scheduleItemChagedBackGroundRecord) && crntChannel.eCode == ECode.NONE) ||
                (pvrECodeMem.indexOf(ECode.LOCK) > -1 && pvrECodeMem.indexOf(ECode.LOCKED) > -1)) {
                //预约频道不是当前频道，要换台，换台成功后检测文件录制路径是否ok；只有是预约录制并且要换换台时才执行
                firstStartLiveTV = false;
                //DBG_INFO("pvrChannelMem[" + objToString(pvrChannelMem) + "]");
                pvrChannelMem.last = copyObj(pvrChannelMem.current);
                pvrChannelMem.current = copyObj(crntChannel);
                changeChannelToStartRecord(pvrChannelMem.current, pvrChannelMem.last);
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
    var time_tick;
    function signalChanged(val) {
        DBG_ALWAYS("signal changed to [" + val + "]");
        try {
            clearTimeout(time_tick);//omg 2016-1-21  两个操作时间大于等于2s时，清空videoInfo,下次打开infobar，会显示
            if (1 == val) {
                DBG_INFO('1 == noSignal, model.tvservice.setMessageCamIndex(0)');
                model.tvservice.setMessageCamIndex(0);
                time_tick=setTimeout(function (){
                    livetvinfobar.clearVideoInfo();
                },2000);
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        noSignal = !!val;
        var crntPageId = hiWebOsFrame.getCurrentPageId();
        if (!noSignal && crntPageId == LiveTVModule.AUTO_STANDBY) {
            if (hiWebOsFrame[LiveTVModule.AUTO_STANDBY].operateData.powerOffReason == 1) {
                autostandby.backToLiveTV();
            }
            else {
                DBG_INFO("not nosignal standy.");
            }
        }
        if (self.id != crntPageId) {
            //hideNoSignalIcon();
            DBG_ALWAYS("do not process signal tip on page[" + crntPageId + "]");
        }
        else {
            if (0 == val) {
                hideNoSignalIcon();
            }
            else {
                showNoSignalIcon();
            }
            //hiWebOsFrame[self.id].hiFocus();// need focus again??
        }
        try {
            if (hiWebOsFrame.isCurrentModule("launcher")) {
                if (g_launcherBrand == "SA_OEM") {
                    OEMLauncherRefreshNoSignal(noSignal);
                } else if (g_launcherBrand == "VIDAALite") {
                    VIDDALiteLauncherSetBackgroundNotify();
                }
                else {
                    if (launcherNBar.getCurPageId() == "liveTv_launcher") {
                        LauncherRefreshNoSignal(noSignal);
                    }
                }
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }

        //针对EUXT910的商场模式，添加对Nosignal的写文件机制
        var currentMode = 0;
        try {
            currentMode = model.system.getUserMode();
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        if (!!isEUXT910() && (currentMode == 1)) {
            var nosignalFlag = val;
            if (!val && currentSource == SourceList.TV) {
                var nochnl = (0 == model.tvservice.getChannelListSaved());
                var ecode5 = (crntChannel.eCode == ECode.NOSIGNAL);
                if (nochnl || ecode5) {
                    DBG_ERROR("no signal flag error, recheck: nochannel[" + nochnl + "], ecode5[" + ecode5 + "]");
                    nosignalFlag = 1;
                }
            }
            try {
                Hisense.File.write("nosignal", nosignalFlag, 0);
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }
        }
    }

    function onMessageCamIndexChaged(val) {
        try {
            DBG_ALWAYS("onMessageCamIndexChaged [" + val + "]");
            ciEncryptedFlag = !!val;
            clearCamEcryTimer();    //先清空延时显示timer

            var crntPageId = hiWebOsFrame.getCurrentPageId();
            if (self.id != crntPageId) {
                DBG_ALWAYS("do not show ciEncryptedFlag on page[" + crntPageId + "]");
            }
            else {
                if (0 == val) {
                    hideCIEncryptedMsg();
                }
                else {
                    showCIEncryptedMsg();
                }
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function parseCurrentSource(uid) {
        var obj = objectFindByKey(sourceList, "uid", uid);
        DBG_ALWAYS("current source changed: " + objToString(obj));
        currentSource = (null == obj) ? SourceList.TV : obj.innerId;
        if(ENABLE_FVP && currentSource == SourceList.TV) {
            DBG_ERROR("freeview_manager.onEnvChanged() - parseCurrentSource");
            freeview_manager.onEnvChanged();
        }

        MHLDevice.AVAILABLE = model.source.getInputMhlAvailable();
        if (currentSource != SourceList.TV) {
            pauseHBBTV();
            //sendAM(":hbbtv,am,:unfocus=hbbtv");
        }
        else {
            resumeHBBTV();
        }

        if (waitSourceChange && hiWebOsFrame.isCurrentModule("livetv")) {
            showOSDOnLiveTV();
        }
        waitSourceChange = false;

        try {
            if (currentSource == SourceList.TV) {
                changeSourceToStartRecord();
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function onCecNotifyChangeSource(val) {
        DBG_ALWAYS("cec notify to change source[" + val + "]");
        try {
            if (tv && 1 == model.channelSearch.getRunning()) {
                DBG_ALWAYS("channel searching, do not receive update.");
                return;
            }
            if (isMainArchiveRecording() || isTimeShiftStatus()) {
                if (!!hiWebOsFrame.setting_source_page) {
                    hiWebOsFrame.setting_source_page.close();
                    hiWebOsFrame.setting_source_page.destroy();
                }
                clearInterval(inputInterval);
                PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                    "Sure to exit from PVR or T.Shift?", cecSourceStopPVROrTshift.bind(this, val), cecSourceCanCancelPVRTshift);
                return;
            }
            var crntobj = self.getCurrentSource();
            var sameSrc = crntobj.uid == val;
            if(!sameSrc) changeSourceTo(val);

            if (hiWebOsFrame.isCurrentModule("livetv")) {
                closeLiveTVModule();
                if(!sameSrc) {
                    openLiveTVModule([Msg.WAIT_SOURCE_CHANGE, 1]);
                }
                else{
                    openLiveTVModule();
                }
            }
            else if (hiWebOsFrame.isCurrentModule("epg")) {
                closeEPGModule();
                if(!sameSrc) {
                    openLiveTVModule([Msg.WAIT_SOURCE_CHANGE, 1]);
                }
                else{
                    openLiveTVModule();
                }
            }
            else{

            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }

    }

    function cecSourceStopPVROrTshift(id) {
        if (!!hiWebOsFrame["dialog_common"]) {
            hiWebOsFrame["dialog_common"].destroy();
        }
        hiWebOsFrame.startLoading(5, "stoppvr");
        if (isMainArchiveRecording()) {
            setAfterStopPvrWantDo(cecSourceStopPvrOrTShiftCallBack.bind(this, 0, id));
            setTimeout(function () {
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
            }, 100);
        }
        if (isTimeShiftStatus()) {
            setAfterStopTShiftWantDo(cecSourceStopPvrOrTShiftCallBack.bind(this, 1, id));
            setTimeout(function () {
                model.timeshift.Stop();
            }, 100);

        }
    }

    function cecSourceStopPvrOrTShiftCallBack(stopWho, id) {
        try {
            if (stopWho == 0) {
                g_AfterStopPvrWantDo = null;
            }
            else if (stopWho == 1) {
                g_AfterStopTShiftWantDo = null;
            }
            hiWebOsFrame.endLoading("stoppvr");
            changeSourceTo(id);
            openLiveTVModule();
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function cecSourceCanCancelPVRTshift() {
        hiWebOsFrame.endLoading();
        if (!!hiWebOsFrame["dialog_common"]) {
            hiWebOsFrame["dialog_common"].destroy();
        }
        openLiveTVModule();
    }

    function onLockSwitchModeChanged(val) {
        lockArr[ParentLock.SWITCH] = val;
        // if(1 == val) self.setUnlockFlag(false);
    }

    function onCurrentInputLockChaged(val) {
        DBG_ALWAYS("onCurrentInputLockChaged[" + val + "], currentPage[" + hiWebOsFrame.getCurrentPageId() + "]");
        globalLockState = parseLockState();
        if (globalLockState && (hiWebOsFrame.getCurrentPageId() == LiveTVModule.MAIN || hiWebOsFrame.isCurrentModule("input"))) {
            openLiveTVSubPage(LiveTVModule.PASSWORD_DIALOG);
        }
        else if (!globalLockState && hiWebOsFrame.getCurrentPageId() == LiveTVModule.PASSWORD_DIALOG) {
            DBG_INFO("not locked close password dialog");
            pswdDialog.backToLiveTV();
        }
    }

    function onChannellistNeedUpdateChaged(val) {
        try {
            DBG_INFO("onChannellistNeedUpdateChaged[" + val + "]");
            needUpdateList = (1 == val);
            switch (val) {
                case 1:
                {
                    if (LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId()
                        && hiWebOsFrame[LiveTVModule.MAIN].visible
                        && !hiWebOsFrame.getIsLocking()) {

                        hiWebOsFrame[LiveTVModule.MAIN].operateData.dialogOptions = {
                            titleName: "",
                            contentName: getCurrentContentLanguage("Channel network information changes. Sure to update? If yes, the channel list and channel editing may vary"),
                            okName: getCurrentContentLanguage('Yes'),
                            cancelName: getCurrentContentLanguage('Cancel'),
                            pageClass: "dialog_default_page",
                            panelClass: "dialog_channel_update_panel",
                            btnClass: "dialog_default_btns",
                            okCommand: function () {
                                if ("EU" == hiWebOsFrame.getCurrentArea()) {
                                    LauncherquickopenSetting(2, 0, hiWebOsFrame.blankPage);
                                }
                                else {
                                    startSearchChannelFromLiveTv();
                                }
                            },
                            cancelCommand: function () {
                                openLiveTVModule([Msg.INFO, 0]);
                            }
                        }

                        hiWebOsFrame.createPage("dialog_common", null, hiWebOsFrame[LiveTVModule.MAIN], null, function (dialogPage) {
                            hiWebOsFrame["dialog_common"] = dialogPage;
                            if (LiveTVModule.MAIN != hiWebOsFrame.getCurrentPageId() || !hiWebOsFrame[LiveTVModule.MAIN].visible) {
                                DBG_ERROR("current page is not livetv. do not popup.");
                                hiWebOsFrame[LiveTVModule.MAIN].operateData.dialogOptions = null;
                                return;
                            }
                            closeLiveTVModule();
                            hiWebOsFrame["dialog_common"].open();
                            hiWebOsFrame["dialog_common"].hiFocus();

                            hiWebOsFrame[LiveTVModule.MAIN].operateData.dialogOptions = null;
                            needUpdateList = false;
                            model.servicelist.setChannellistNeedUpdate(0);
                        });

                    }
                    else {
                        DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not popup app update.");
                        return;
                    }

                    break;
                }
                case 0:
                {
                    break;
                }
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    //function hbbtvKeySetChanged(value){
    //   hbbtvKeySet = parseHBBTVKeyCodes(value);
    //}
    //self.getHBBTVKeySet = function(){
    //    return hbbtvKeySet;
    //}

    function parseSourceList(arr) {
        var srcKey, itemCount = 6, items = [];

        if (InitArea == "EU" && "5655_EU_MARKET" != currentPlatform_config) {
            srcKey = [
                SourceList.TV, SourceList.AV,
                SourceList.COMPONENT,
                SourceList.HDMI1, SourceList.HDMI2,
                SourceList.HDMI3, SourceList.HDMI4
            ];
            for (var i = 0; i < arr.length/6; i++) {
                if (null != (arr[i*6 + 1] + "").toLowerCase().match("scart")) {
                    srcKey = [
                        SourceList.TV, SourceList.AV,
                        SourceList.COMPONENT, SourceList.SCART,
                        SourceList.HDMI1, SourceList.HDMI2,
                        SourceList.HDMI3, SourceList.HDMI4
                    ];
                    break;
                }
            }
        }
        else {
            srcKey = [
                SourceList.TV, SourceList.AV,
                SourceList.COMPONENT, SourceList.HDMI1,
                SourceList.HDMI2, SourceList.HDMI3,
                SourceList.HDMI4, SourceList.SCART
            ];
        }
        oriSourceList = arr;
        DBG_ALWAYS("source list: [" + objToString(arr) + "]");
        for (var i = 0; i < arr.length / itemCount; i++) {
            var row = arr.slice(i * itemCount, (i + 1) * itemCount);
            items.push({
                uid: row[SourceAttr.UID],
                innerId: srcKey[row[SourceAttr.UID]],
                name: row[SourceAttr.NAME],
                noSignal: 1 == row[SourceAttr.SIGNAL],
                isLock: 1 == row[SourceAttr.LOCK],
                rename: !!row[SourceAttr.RENAME] ? row[SourceAttr.RENAME] : row[SourceAttr.NAME],
                hotelLock: 1 == row[SourceAttr.HOTELLOCK]
            });
        }
        DBG_ALWAYS(items);
        return items;

    }

    function showOSDOnLiveTV(showInfo, chgChannel) {
        // judge either to popup message box or not
        if (shouldPopUpMsg(Msg.ENERGY_WARNING)) {
            showEnergyWarning();
        }
        else if (shouldPopUpMsg(Msg.SEARCH)) {
            openLiveTVSubPage(LiveTVModule.SEARCH_DIALOG);
        }
        else if (shouldPopUpMsg(Msg.PASSWORD)) {
            openLiveTVSubPage(LiveTVModule.PASSWORD_DIALOG);
        }
//        else if(shouldPopUpMsg(Msg.CI_MMI_ENQUIRY)) {
//            DBG_INFO('shouldPopUpMsg(Msg.CI_MMI_ENQUIRY) just for test, now do nothing');
//        }
        else if (shouldPopUpMsg(Msg.NOTSUPPORT)) {
            showNoSignalIcon(true);
        }
        else if (shouldPopUpMsg(Msg.AUDIO)) {
            showAudioIcon();
        }
        else if (shouldPopUpMsg(Msg.CI_ENCRYPTED)) {
            //TODO openFlag作用？
            showCIEncryptedMsg();
        }
        else if (!!openFlag[Msg.SIGNAL] && (globalLockState || shouldPopUpMsg(Msg.SIGNAL))) {
            showNoSignalIcon();
        }

        if(shouldPopUpMsg(Msg.INFO, showInfo, chgChannel)) {
            openLiveTVSubPage(LiveTVModule.INFO_BAR);
            ctlr_memc_for_osd(0);
        }
        else {
            ctlr_memc_for_osd(1);
        }
    }

    self.setInfoBarFlag = function (val) {
        infoBarFlag = val;
    }

    self.recoverCurrentSubPage = function (val) {
        if (crntSubPage == val) {
            crntSubPage = LiveTVModule.MAIN;
        }
        DBG_INFO("livetv current page is [" + crntSubPage + "]");
    }

    //self.getCurrentSubPage = function() {
    //    return crntSubPage;
    //}
    //self.setCurrentSubPage = function(val) {
    //    crntSubPage = val;
    //}

    function getMheg5StatusIdx() {
        try {
            var mheg5Status = 0;
            if (tv && ("EU" == InitArea || "EM" == InitArea)) {
                mheg5Status = model.mheg5.getI32Status();
            }
            return mheg5Status;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function showNoSignalIcon(notSupport) {
        if (checkHBBTVKeySet() && currentSource == SourceList.TV) {
            DBG_INFO("hbbtv is on, do not show nosignal.");
            hideNoSignalIcon();
            return;
        }
        else if (2 == TeletextDevice.status) {
            DBG_INFO("teletext is on, do not show nosignal.");
            hideNoSignalIcon();
            return;
        }
        clearInterval(signalTimer);
        notSupportedShowed = !!notSupport;
        if (globalLockState) {
            DBG_ALWAYS("show lock icon.");
            $(".noSignalTip").text(getCurrentContentLanguage("Locked"));
        }
        else if (notSupport) {
            $(".noSignalTip").text(getCurrentContentLanguage("Not Supported"));
        }
        else {
            $(".noSignalTip").text(getCurrentContentLanguage("No Signal"));
        }

        var powerOffCount = 0, crntArea = hiWebOsFrame.getCurrentArea();

        var totalMinutes = ("SA" == crntArea) ? 4 : 14;

        if (tv && 1 == model.hotel.getHotelMode() && 0 == model.hotel.getAutoSleep()) {
            DBG_ALWAYS("hotel model sleep off.");
            totalMinutes = 90000000;
        }
        //DBG_ALWAYS("currentArea[" + crntArea + "] will power off after " + totalMinutes + "minutes");

        function _drawNosignalIcon() {
            if (hiWebOsFrame.getCurrentPageId() != self.id || !hiWebOsFrame[LiveTVModule.MAIN].visible) {
                hideNoSignalIcon();
                DBG_ERROR("current page is not livetv, but no signal icon has been showed");
                return;
            }
            else if (2 == TeletextDevice.status) {
                //DBG_INFO("teletext is on, do not show nosignal.");
                powerOffCount = 1;
                $(".noSignalTip").css("display", "none");
                return;
            }
            else if (checkHBBTVKeySet() && currentSource == SourceList.TV) {
                //DBG_INFO("hbbtv is on, do not show nosignal.");
                powerOffCount = 1;
                $(".noSignalTip").css("display", "none");
                return;
            }
            if (1 == getMheg5StatusIdx()) {
                //DBG_INFO("Mheg5 is on");
                powerOffCount = 0;
                $(".noSignalTip").css("display", "none");
                return;
            }
            powerOffCount > 0 && $(".noSignalTip").css("display", "block");
            var left = fRandomBy(0, 1652);
            var top = fRandomBy(0, 930);
            $(".noSignalTip").css("left", left + "px");
            $(".noSignalTip").css("top", top + "px");
            if (tiemrReseted) {
                powerOffCount = 0;
                tiemrReseted = false;
                DBG_INFO("reset poweroff count.");
            }
            powerOffCount++;
            if (powerOffCount >= totalMinutes * 60 / 1.5) {
                //show power off
                hideNoSignalIcon();
                openLiveTVSubPage(LiveTVModule.AUTO_STANDBY);
            }
        }

        signalTimer = setInterval(_drawNosignalIcon, 1500);

    }

    self.resetNosignalTimer = function () {
        tiemrReseted = true;
        //DBG_INFO("reset nosignal timer.");
    }

    function hideNoSignalIcon() {

        clearInterval(signalTimer);
        notSupportedShowed = false;
        $(".noSignalTip").css("display", "none");
    }

    function showAudioIcon() {
        clearInterval(audioTimer);
        audioTimer = setTimeout(function () {
            if (hiWebOsFrame.getCurrentPageId() != self.id || !hiWebOsFrame[LiveTVModule.MAIN].visible) {
                hideAudioIcon();
                DBG_ERROR("current page is not livetv, do not show icon");
                return;
            }
            else if (checkHBBTVKeySet() && currentSource == SourceList.TV) {
                hideAudioIcon();
                DBG_INFO("hbbtv is on, do not show Audio Channel.");
                return;
            }
            if (1 == getMheg5StatusIdx()) {
                hideAudioIcon();
                DBG_INFO("Mheg5 is on");
                return;
            }
            var showTxt = (crntChannel.eCode == ECode.AUDIO) ? "Audio Channel" : "Not available";
            $(".audioOnlyText").text(getCurrentContentLanguage(showTxt));
            $(".audioOnly").css("display", "block");

        }, 2000);
    }

    function hideAudioIcon() {
        clearInterval(audioTimer);
        $(".audioOnly").css("display", "none");
    }
    self.checkShowAudioIcon = function(){
        if (hiWebOsFrame[LiveTVModule.MAIN].visible && shouldPopUpMsg(Msg.AUDIO)) {
            showAudioIcon();
        }
    };
    self.hideAudioIcon = hideAudioIcon;

    function showEnergyWarning() {
        DBG_INFO('showEnergyWarning');
        if (auEnergyWarningTimer != null) {
            clearTimeout(auEnergyWarningTimer);
        }
        auEnergyWarningTimer = setTimeout(function () {
            DBG_INFO('setTimeout 5s for hide EnergyWarning');
            hideEnergyWarning();
        }, 5000);
        $("#livetv_energy_warning_title").text(getCurrentContentLanguage('Warning'));
        $("#livetv_energy_warning_content").text(getCurrentContentLanguage('Energy consumption in the current picture mode may be higher than indicated in the energy rating label.\n\nPlease use Standard picture mode for normal energy consumption.'));
        $("#livetv_energy_warning_info").css("display", "block");
    }

    function hideEnergyWarning() {
        //DBG_INFO('hideEnergyWarning');
        if ("none" == $("#livetv_energy_warning_info").css("display")) {
            return;
        }
        $("#livetv_energy_warning_info").css("display", "none");
        if (auEnergyWarningTimer != null) {
            clearTimeout(auEnergyWarningTimer);
            auEnergyWarningTimer = null;
        }
        showOSDOnLiveTV();
    }


    function showCIEncryptedMsg() {
        // 添加不该显示的判断
        try {
            clearCamEcryTimer();
            if ('EU' != InitArea && 'EM' != InitArea) {
                DBG_INFO("'EU' != InitArea && 'EM' != InitArea, do not showCIEncryptedMsg, return;");
                return;
            }
            camEcryTimer = setTimeout(function () {   //延时1s显示
                DBG_INFO("showCIEncryptedMsg");
                if ("block" == $("#livetv_energy_warning_info").css("display")) {
                    DBG_INFO('"block" == $("#livetv_energy_warning_info").css("display"), do not show ci encrypted msg return');
                    return;
                }

                $("#setting_msg_info_span_0").text(getCurrentContentLanguage("The channel is encrypted. Please check whether the CI+ module / CA module and smartcard have been inserted correctly."));
                $("#setting_msg_info").css("display", "block");
                hideAudioIcon();
            }, 1000);

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function hideCIEncryptedMsg() {
        try {
            clearCamEcryTimer();
            DBG_INFO("hideCIEncryptedMsg");
            $("#setting_msg_info").css("display", "none");
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function shouldPopUpMsg(name, showInfo, chgChannel) {
        var flag = false;
        if (!openFlag[name]) {
            DBG_ALWAYS("do not show msg[" + Msg.ARRAY[name] + "]");
            return flag;
        }
        if (checkHBBTVKeySet() && name != Msg.INFO) {
            DBG_ALWAYS("hbbtv is on, do not show msg.");
            return;
        }
        //livetvdef.js have already exist this judgement
        if (hiWebOsFrame.getCurrentPageId() != LiveTVModule.MAIN && !showInfo) {
            DBG_ALWAYS("current page" + hiWebOsFrame.getCurrentPageId() + " do not show msg[" + Msg.ARRAY[name] + "]");
            return flag;
        }
        switch (name) {
            case Msg.ENERGY_WARNING:
                flag = self.getEnergyWarningFlag();
                break;
            case Msg.SEARCH:
                if (SourceList.TV == currentSource) {
                    var ret = tv ? 1 == model.tvservice.getChannelListSaved() : true;
                    DBG_ALWAYS("has channel[" + ret + "]");
                    flag = !ret;
                }
                break;
            case Msg.SIGNAL:
                flag = self.getNoSignalFlag();
                break;
            case Msg.PASSWORD:
                flag = parseLockState();
                globalLockState = flag;
                break;
            case Msg.INFO:
                //flag = true;//!(SourceList.TV == currentSource && (!crntChannel || !crntChannel.uid));
                //flag = !(!!crntChannel && !!crntChannel.eCode &&
                //(crntChannel.eCode.trim() == ECode.NO_SERVICE ||
                //crntChannel.eCode.trim() == ECode.NO_STREAM));
                if(SourceList.TV != currentSource || waitSourceChange) return true;
                if(!crntChannel || !crntChannel.eCode) return false;
                flag = (crntChannel.eCode.trim() == ECode.NONE || chgChannel);
                break;
            case Msg.AUDIO:
                flag = (SourceList.TV == currentSource && !!crntChannel && !!crntChannel.eCode &&
                (crntChannel.eCode.trim() == ECode.AUDIO ||
                crntChannel.eCode.trim() == ECode.NO_SERVICE ||
                crntChannel.eCode.trim() == ECode.NO_STREAM) && 1 != getMheg5StatusIdx());
                if (!flag) hideAudioIcon();
                break;
//            case Msg.CI_MMI_ENQUIRY:
//                //TODO 判断
//                flag = false;
//                break;
            case Msg.CI_ENCRYPTED:
                flag = self.getCIEncryptedFlag();
                break;
            case Msg.NOTSUPPORT:
                if (typeof(livetvinfobar) == "undefined") return false;
                flag = getVideoNotSupportFlag();
                if (!flag && notSupportedShowed) {
                    hideNoSignalIcon();
                }
                break;
            default:
                break;
        }
        return flag;
    }

    function getVideoNotSupportFlag(vInfo) {
        var crntSourceObj = livetvmain.getCurrentSource();
        if (!!crntSourceObj && !!crntSourceObj.name &&crntSourceObj.name.match("UHD")) {
            return false;
        }
        if (SourceList.HDMI1 != currentSource && SourceList.HDMI2 != currentSource) {
            if(SourceList.TV != currentSource || TVTYPE.ATV == crntChannel.type) return false;
            if(tv && "undefined" == typeof(vInfo)) vInfo = model.tvservice.getMainPlayVideoFormatInfo();
            return ("Not Support" == vInfo);
        }
        var videoInfo = tv ? model.tvservice.getCurrentSourceVideoFormat() : "";
        if (!videoInfo) return false;

        var dpi = videoInfo.split(',');
        if (dpi[1] >= 2150 && dpi[1] <= 2170 && dpi[3] >= 48 && dpi[3] <= 62) {
            DBG_INFO("video " + videoInfo + " not support");
            return true;
        } else {
            return false;
        }
    }

    self.checkToShowNotSupported = function (vInfo) {
        if (typeof(livetvinfobar) == "undefined") return false;
        var flag = getVideoNotSupportFlag(vInfo);
        if (!flag) {
            if (notSupportedShowed) hideNoSignalIcon();
        }
        else {
            showNoSignalIcon(flag);
        }
    }

    function mainPlayToChannel(ecode) {
        if (!tv) return temp_channel;

        var val = model.tvservice.getMainPlay();
        DBG_ALWAYS("current channel info is --" + objToString(val) + "--");
        var tempChannel = null;
        //["0","210763905","804","DT65_576p","8719","2","1","e_code:0"]
        if (0 != val.length) {
            var hasSatId = (8 <= val.length);
            tempChannel = {
                listUid: val[MPChannel.LISTUID],
                uid: val[MPChannel.UID],
                number: val[MPChannel.NUMBER],
                name: val[MPChannel.NAME],
                type: val[MPChannel.TYPE],
                favType: getMaskValue(Mask.FAVTYPE, val[MPChannel.ATTRIBUTE]),
                isSkip: getMaskValue(Mask.SKIP, val[MPChannel.ATTRIBUTE]),
                isLock: getMaskValue(Mask.LOCK, val[MPChannel.ATTRIBUTE]),
                isEncrypt: getMaskValue(Mask.ENCRYPT, val[MPChannel.ATTRIBUTE]),
                isHidden: getMaskValue(Mask.HIDDEN, val[MPChannel.ATTRIBUTE]),
                playId: val[MPChannel.PLAYID],
                satId: hasSatId ? val[MPChannel.SATELLITEID] : 0,
                eCode: !!ecode ? ecode : (!!val[MPChannel.ECODE] ? val[MPChannel.ECODE] : ECode.NONE),
                playTime: Date.now()
            }
            //if(hasSatId) {
            //    tempChannel.eCode = !!val[MPChannel.ECODE] ? val[MPChannel.ECODE] : ECode.NONE;
            //}
            //else {
            //    tempChannel.eCode = !!val[MPChannel.ECODE - 1] ? val[MPChannel.ECODE - 1] : ECode.NONE;
            //}
            pvrChannelMem.current = copyObj(tempChannel);
        }
        return tempChannel;
    }

    function parseLockState() {
        var lockState = false;
        //DBG_ALWAYS("lock array" + objToString(lockArr) + ", unlocked[" + unlocked + "]");
        if (0 == lockArr[0] || unlocked) {
            return lockState;
        }

        if (currentSource == SourceList.TV) {
            //lockState = crntChannel.isLock;
            //DBG_ALWAYS("current channel lock state[" + crntChannel.isLock + "]");
            if (!!crntChannel.eCode && crntChannel.eCode.trim() == ECode.LOCK) {
                lockState = true;
            }
            //DBG_ALWAYS("current e_code[" + crntChannel.eCode + "]");
        }
        //else {
        var obj = objectFindByKey(sourceList, "innerId", currentSource);
        if (null != obj) {
            var isSrcLock = (1 == model.source.getInputCurrentInLock());
            var lockTime = (1 == model.source.getCurrentTimeInLock());
            //DBG_ALWAYS("current source lock state[" + isSrcLock + "]");
            //DBG_ALWAYS("current source lock time[" + lockTime + "]");

            lockState = lockState || (isSrcLock && lockTime);
        }
        //}
        return lockState;
    }


    function softwareUpdateNotify(value) {
        DBG_ALWAYS("softwareUpdateNotify[" + value + "]");
        try {
            if (value == 5 && !g_sysisdownloadingflag) {
                if (LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId()
                    && hiWebOsFrame[LiveTVModule.MAIN].visible
                    && !hiWebOsFrame.getIsLocking()) {
                    closeLiveTVModule();
                    StartAutoUpdate(hiWebOsFrame.blankPage, 0);
                    upgradMsgPoped = true;
                }
                else {
                    DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not popup app update.");
                    upgradMsgPoped = false;
                }
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function softwareOadUpdateNotify(value) {
        DBG_ALWAYS("softwareOadUpdateNotify[" + value + "]");
        try {
            if (value == 5) {
                if (LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId()
                    && hiWebOsFrame[LiveTVModule.MAIN].visible
                    && !hiWebOsFrame.getIsLocking()) {
                    closeLiveTVModule();
                    StartAutoUpdate(hiWebOsFrame.blankPage, 1);
                    OadupgradMsgPoped = true;
                }
                else {
                    DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not popup app update.");
                    OadupgradMsgPoped = false;
                }
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.clearautoOadupdateflag = function () {
        OadupgradMsgPoped = true;
    }
    self.getautoOadupdateflag = function () {
        var flag = OadupgradMsgPoped;
        return flag;
    }

    self.getCurrentSource = function () {
        var crntSrc = objectFindByKey(sourceList, "innerId", currentSource);
        if (null == crntSrc) {
            var obj = objectFindByKey(sourceList, "uid", model.source.getCurrentSource());
            DBG_ALWAYS("current source " + objToString(obj));
            currentSource = (null == obj) ? SourceList.TV : obj.innerId;
            return copyObj(obj);
        }
        else {
            return copyObj(crntSrc);
        }
    }

    self.getCurrentSourceInnerId = function () {
        return currentSource;
    }

    self.getSourceByUid = function (uid) {
        return objectFindByKey(sourceList, "uid", uid);
    }

    self.updateSourceAttribute = function (sourceuid, keyIdx, val) {
        var ret = objectFindByKey(sourceList, "uid", sourceuid);
        if (null != ret) {
            ret[SourceAttr.ARRAY[keyIdx]] = val;
        }
        else {
            DBG_ERROR("can not find source id [" + sourceuid + "]");
        }
    }

    self.getCurrentState = function () {
        return currenState;
    }
    self.setOpenFlag = function (arr) {
        switch (arr[0]) {
            case Msg.OPERATETIP:
                DBG_ALWAYS("set play success[" + arr[1] + "]");
                tv && model.tvservice.setPlaySuccessLiveTV(arr[1]);
                firstPlay = !arr[1];
                break;
            case Msg.RESUMEHBBTV:
                resumeHBBTV();
                break;
            case Msg.WAIT_SOURCE_CHANGE:
                waitSourceChange = (1 == arr[1]);
                break;
            default :
                for (var i = 0; i < arr.length / 2; i++) {
                    var group = arr.slice(i * 2, (i + 1) * 2);
                    openFlag[group[0]] = group[1];
                }
                break;
        }
    }

    self.judgeToShowChannelSearch = function (val) {
        //noChannelList = val;
        //temp add
        if (val && LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId() && SourceList.TV == currentSource) {
            openLiveTVSubPage(LiveTVModule.SEARCH_DIALOG);
        }
    }

    self.judgeToShowPasswordDialog = function () {

    }

    self.judgeToShowRadioOnly = function () {
        if (LiveTVModule.MAIN == hiWebOsFrame.getCurrentPageId() &&
            SourceList.TV == currentSource && !noSignal) {
            crntChannel.eCode = ECode.AUDIO;
            showAudioIcon();
        }
    }

    self.getUnlockFlag = function () {
        return unlocked;
    }

    self.setUnlockFlag = function (val) {
        DBG_ALWAYS("set unlock[" + val + "]");
        unlocked = val;
    }
    self.resetLockSwitchMode = function () {
        lockArr[ParentLock.SWITCH] = model.parentlock.getSModel();
    }

    function onBannerEnableChanged(val) {
        DBG_INFO("on banner enable changed[" + val + "]");
        bannerEnable = (1 == val);
    }

    self.clearSourceBlock = function () {
        for (var i = 0; i < sourceList.length; i++) {
            var ret = sourceList[i];
            if (null != ret) {
                ret[SourceAttr.ARRAY[SourceAttr.LOCK]] = false;
            }
        }
    }

    self.canPopupInfoBar = function (keycode) {
        if (!bannerEnable) {
            DBG_ERROR("banner enable is false");
            return false;
        }
        var flag = false;
        DBG_ALWAYS("source[" + SourceList.ARRAY[currentSource] + "], crntChannel[" + objToString(crntChannel) + "]");
        if (SourceList.TV == currentSource) {
            if (!crntChannel || !crntChannel.uid || 0 == crntChannel.uid
                || 256 == crntChannel.listUid || (checkHBBTVKeySet() && keycode != VK_INFO)) {
                flag = false;
            }
            else {
                flag = true;
            }
        }
        else {
            flag = true;
        }
        return flag;
    }

    self.getChannelLockState = function () {
        DBG_INFO("channel lock[" + crntChannel.isLock + "], unlocked[" + unlocked + "]");
        return crntChannel.isLock && !unlocked;
    }

    self.getGloableLockState = function () {
        return globalLockState;
    }
    self.clearLiveTVUI = function () {
        hideAudioIcon();
        hideNoSignalIcon();
        hideEnergyWarning();
        hideCIEncryptedMsg();
        closeLiveTVModule(LiveTVModule.INFO_BAR);
    }

    self.getOriSourceList = function () {
        return copyObj(oriSourceList);
    }

    self.getLockSwitch = function () {
        return lockArr[ParentLock.SWITCH];
    }

    self.showTeletextHelp = function () {
        var txts = ["Hold", "Reveal", "Cancel", "Index", "Sub.code", "Exit"];
        for (var i = 1; i <= txts.length; i++) {
            $("#livetv_text_bar_text" + i).text(getCurrentContentLanguage(txts[i - 1]));
        }
        $(".livetv_text_help_bar").css("display", "block");
        teletexTimer = setTimeout(function () {
            self.hideTeletextHelp();
        }, 5000);
    }
    self.hideTeletextHelp = function () {
        $(".livetv_text_help_bar").css("display", "none");
        clearInterval(teletexTimer);
        teletexTimer = 0;
    }
    self.manualNotify = function () {
        onChannellistNeedUpdateChaged(1);
    }

    self.isDisableKeyBack = function () {
        var flag = false;
        try {
            var disableBackMap = ["GBR", "AUS", "NZL", "gbr", "aus", "nzl"];
            flag = (disableBackMap.indexOf(model.basicSetting.getTvsetLocation()) > -1);
        }
        catch (ex) {
            DBG_ERROR(ex);
        }
        return flag;
    }

    self.checkIfNeedSendKeyToMheg5First = checkIfNeedSendKeyToMheg5First;

    function clearCamEcryTimer() {
        try {
            if (!!camEcryTimer) {
                clearTimeout(camEcryTimer);
                camEcryTimer = null;
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function checkPageNeedShow() {
        try {
            if ('SA' == InitArea) {
                if (typeof ginga != UNDEFINED_DEFSTR) {
                    ginga.GingaStart();
                    ginga.CheckIfNeedSendKeyToGingaFirst();
                }
            } else {
                checkIfNeedSendKeyToMheg5First();
            }
            checkIfCIOPSearchPageNeedShow();
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function checkIfNeedSendKeyToMheg5First() {
        if (tv) {
            try {
                var isMhge5Active = getMheg5StatusIdx();
                DBG_INFO("model.mheg5.getI32Status(): " + isMhge5Active);
                onI32Mheg5StatusChaged(isMhge5Active);
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }
    }

    function checkIfCIOPSearchPageNeedShow() {
        try {
            if (0 != CI_OP_SEARCH_FLAG) {
                DBG_INFO("CI_OP_SEARCH_FLAG == " + CI_OP_SEARCH_FLAG + ", check OPCamMessage now");
                var OPCamMessage = model.ci.getCamOpmessage();
                DBG_INFO("model.ci.getCamOpmessage(): " + OPCamMessage);
                if (OPCamMessage >= 1 && OPCamMessage <= 4) {
                    onCamOpmessageChaged(OPCamMessage);
                } else {
                    CI_OP_SEARCH_FLAG = 0;
                }
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
}

var livetvmain = new liveTVMain();
