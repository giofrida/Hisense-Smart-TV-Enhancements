/**
 * Created by BOB.J on 2014/12/16.
 */

var ENUM_INDEX = 0;

function openLiveTVSubPage(pageId) {
    //DBG_ALWAYS("open livetv sub page[" + pageId + "]");
    try {
        if(!hiWebOsFrame[pageId]) {
            hiWebOsFrame.createPage(pageId, null, null, null, function(page) {
                hiWebOsFrame[pageId] = page;
                //remove can not open channel list
                //if(!hiWebOsFrame[LiveTVModule.MAIN].visible) {
                //    DBG_ALWAYS("current module is not livetv, can not open livetv subpage");
                //    return;
                //}
                if(doNotPopupLiveTVMsg(pageId)) {
                    DBG_ALWAYS("current module is not livetv, can not open livetv subpage[" + pageId + "]");
                    return;
                }
                if(pageId == LiveTVModule.AUTO_STANDBY) {
                    if(tv && 1 == model.hotel.getHotelMode() && 0 == model.hotel.getAutoSleep()) {
                        DBG_ALWAYS("hotel model sleep off.");
                        return;
                    }
                    page.operateData.powerOffReason = 1;
                }
                if(LiveTVModule.INFO_BAR != pageId) {
                    closeLiveTVModule(LiveTVModule.MAIN);
                    hiWebOsFrame[pageId].open();
                    hiWebOsFrame[pageId].hiFocus(hiWebOsFrame[pageId].firstFocusId);

                }
                else {
                    if(livetvmain.canPopupInfoBar()) {
                        hiWebOsFrame[pageId].open();
                    }
                    //DBG_ALWAYS("gui loaded");
                    //tv && keyboard.set_listen(1);
                }
            });
        }
        else {
            //remove can not open channel list
            //if(!hiWebOsFrame[LiveTVModule.MAIN].visible) {
            //    DBG_ALWAYS("current module is not livetv, can not open livetv subpage");
            //    return;
            //}
            if(doNotPopupLiveTVMsg(pageId)) {
                DBG_ALWAYS("current module is not livetv, can not open livetv subpage[" + pageId + "]");
                return;
            }
            if(pageId == LiveTVModule.AUTO_STANDBY) {
                hiWebOsFrame[pageId].operateData.powerOffReason = 1;
            }
            if(LiveTVModule.INFO_BAR != pageId) {
                closeLiveTVModule(LiveTVModule.MAIN);
                hiWebOsFrame[pageId].open();
                hiWebOsFrame[pageId].hiFocus(hiWebOsFrame[pageId].firstFocusId);
            }
            else {
                if(livetvmain.canPopupInfoBar()) {
                    hiWebOsFrame[pageId].open();
                }
            }
        }
        //livetvmain.setCurrentSubPage(pageId);
    }
    catch(ex) {
        DBG_ERROR(ex.message);
    }
}

function liveTVHandlerProcess(keyCode, keytype) {
    try {
        livetvmain.clearLastPlayedChannel();
        livetvmain.hideEnergyWarning();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    var srcInnerId = livetvmain.getCurrentSourceInnerId();
    // change the prd, the teletext key will send to the am anyway.
    if(keyCode == VK_TELETEXT) {
        if (livetvmain.getEnableTeletextKey()) {
            keyboard.SendKeyResult(false);
            livetvmain.setEnableTeletextKey(false);
            setTimeout(function() {
                livetvmain.setEnableTeletextKey(true);
            }, 2000);

            if(1 != keytype) {
                try {
                    debugPrint("logReport__________begin", DebugLevel.WARNING);
                    logReport('GTRemoteControl', 'TXT');
                    debugPrint("logReport__________end", DebugLevel.WARNING);
                }
                catch(ex) {
                    DBG_ERROR(ex.message);
                }
            }
        }
        else {
            DBG_ERROR("teletext key repeat too fast")
        }
        return;
    }
    else if(deviceKeySet.HBBTV.indexOf(keyCode) > -1) {//temp add hbbtv
        if(VK_BLUE == keyCode && !!hiWebOsFrame[LiveTVModule.INFO_BAR] &&
            hiWebOsFrame[LiveTVModule.INFO_BAR].visible && 1 == livetvinfobar.getCurrentInfoPage()) {
            livetvinfobar.keyHandler(keyCode);
        }
        else{
            DBG_ALWAYS("send key to hbbtv");
            keyboard.SendKeyResult(false);
        }
    }
    else if(AudioDevice.CEC_CTRL && deviceKeySet.CEC.indexOf(keyCode) > -1 &&
        srcInnerId >= SourceList.HDMI1 && srcInnerId <= SourceList.HDMI4 && !livetvmain.getGloableLockState()) {// cec
        if(MHLDevice.AVAILABLE && keytype != 1) {
            model.source.InputMhlKeyPress(keyCode);
        }
        else {
            DBG_ALWAYS("send key to cec");
            keyboard.SendKeyResult(false);
        }
    }
    else if(TeletextDevice.status == 2
        && (deviceKeySet.TEXT.indexOf(keyCode) > -1)) {
        DBG_ALWAYS("send key to teletext");
        keyboard.SendKeyResult(false);
    }
    else {
        if(!!keytype && keytype == 1) {
            livetvmain.resetNosignalTimer();
            return;
        }
        if(SourceList.TV != srcInnerId && VK_UP != keyCode && VK_INFO != keyCode && VK_CC != keyCode ) {
            DBG_ALWAYS("current source is not TV and the key is not up.");
            return;
        }
        if(TeletextDevice.status == 2) {
            DBG_ALWAYS(" in the teletext active status");
            return;
        }

        switch(keyCode) {
            case VK_UP:
            case VK_INFO:
            {
                if(checkHBBTVKeySet()) return;
                if(livetvchlist.getChannelChangeFlag()) {
                    DBG_INFO("channel changing...");
                    return;
                }
                if(livetvchlist.getNumChangeFlag()) {
                    livetvchlist.clearNumDialog();
                }
                livetvinfobar.keyHandler(keyCode);

	            if(keyCode == VK_INFO) {
		            try {
			            debugPrint("logReport__________begin", DebugLevel.WARNING);
			            logReport('GTRemoteControl', 'Info');
			            debugPrint("logReport__________end", DebugLevel.WARNING);
		            }
		            catch(ex) {
			            DBG_ERROR(ex.message);
		            }
	            }

                break;
            }
            case VK_DOWN://PVR or T.Shift
            case VK_PVR:
            case VK_T_SHIFT:
            case VK_STOP:
            case VK_PAUSE:
            case VK_PLAY:
            case VK_FAST_BKW:
            case VK_FAST_FWD:
            {
                if (0 && deviceKeySet.HBBTVKEYSET > 0x1f && (VK_PVR == keyCode || VK_T_SHIFT == keyCode)) {
                    DBG_ERROR("hbbtv disable the key");
                    return;
                }
                //do not support pvr
                if(!getPVRFlag()) return;
                //使用之前先清空上次的节目信息
                prgrmInfoOfPvrTshift = null;
                var crntChannel = livetvmain.getCurrentChannelInfo();
                DBG_ALWAYS("crntChannel: " + JSON.stringify(crntChannel));
                if(!livetvmain.getNoSignalFlag() && !livetvmain.getIsDataChannelFlag() && !!crntChannel && crntChannel.type != TVTYPE.ATV && crntChannel.eCode != ECode.AUDIO) {
                    try {
                        // 补丁 add by ghl
                        if (typeof pvrHardDiskCheckPageData != UNDEFINED_DEFSTR && !!pvrHardDiskCheckPageData.operateData.tmpEpgVal) {
                            pvrHardDiskCheckPageData.operateData.tmpEpgVal = null;
                        }
                        startRecordOrTshift(crntChannel, keyCode);
                    }
                    catch (ex) {
                        DBG_ERROR(ex.message);
                    }
                }
                else {
                    DBG_ERROR("current state can not start pvr or t.shift. crntChannel[" + objToString(crntChannel) + "]");
                }

	            var logReportTmpVar = "";
	            switch (keyCode) {
		            case VK_PVR:        logReportTmpVar = 'PVR';break;
		            case VK_T_SHIFT:    logReportTmpVar = 'T.shift';break;
			        case VK_STOP:       logReportTmpVar = 'Stop';break;
		            case VK_PAUSE:      logReportTmpVar = 'Pause';break;
		            case VK_PLAY:       logReportTmpVar = 'Play';break;
		            case VK_FAST_BKW:   logReportTmpVar = 'Fast Backward';break;
		            case VK_FAST_FWD:   logReportTmpVar = 'Fast Forward';break;
		            default :           break;
	            }
	            try {
		            debugPrint("logReport__________begin", DebugLevel.WARNING);
		            logReport('GTRemoteControl', logReportTmpVar);
		            debugPrint("logReport__________end", DebugLevel.WARNING);
	            }
	            catch(ex) {
		            DBG_ERROR(ex.message);
	            }

                break;
            }
            case VK_LEFT:
            case VK_RIGHT:
            {
                if(!!hiWebOsFrame[LiveTVModule.INFO_BAR] && hiWebOsFrame[LiveTVModule.INFO_BAR].visible) {
                    livetvinfobar.keyHandler(keyCode);
                }
                else {
                    DBG_INFO("LiveTV do not response key[" + keyCode + "]");
                }

                break;
            }
            case VK_ENTER:
            case VK_CH_LIST:
            case VK_FAV_CH:
            {
                if (0 && deviceKeySet.HBBTVKEYSET > 0x1f) {
                    DBG_ERROR("hbbtv disable the key");
                    return;
                }

                if(typeof (livetvchlist) == "undefined" || livetvchlist.getChannelListInitState()) {
                    showMsg("", "Reading the channel list. Please try again later");
                }
                else if(livetvchlist.getChannelChangeFlag()) {
                    DBG_INFO("channel changing...");
                    return;
                }
                else {

                    if(livetvchlist.getNumChangeFlag() && VK_ENTER) {
                        livetvchlist.changeNumDirectly();
                    }
                    else {
                        livetvchlist.clearNumDialog();
                        if(!livetvchlist.hasChannels()) {
                            DBG_ALWAYS("do not have any channels.");
                        }
                        else if(0 == livetvchlist.getListVisibleCount()) {
                            closeLiveTVModule();
                            LauncherquickopenSetting(2, CHANNEL_EDIT, hiWebOsFrame[LiveTVModule.MAIN]);
                        }
                        else {
                            closeLiveTVModule(LiveTVModule.MAIN);
                            openLiveTVSubPage(LiveTVModule.CHANNEL_LIST);
                            if (keyCode == VK_FAV_CH) {
                                livetvchlist.switchToFavList();
                            }
                        }

                    }
                }

	            if(keyCode == VK_CH_LIST) {
		            try {
			            debugPrint("logReport__________begin", DebugLevel.WARNING);
			            logReport('GTRemoteControl', 'CH.List');
			            debugPrint("logReport__________end", DebugLevel.WARNING);
		            }
		            catch(ex) {
			            DBG_ERROR(ex.message);
		            }
	            }

                break;
            }
            case VK_CHANNEL_UP:
            {
                if (0 && deviceKeySet.HBBTVKEYSET > 0x1f) {
                    DBG_ERROR("hbbtv disable the key");
                    return;
                }

                if(hiWebOsFrame.getKeyRepeatMode()) {
                    livetvchlist.changeInfoBar(1);
                }
                else {
                    closeLiveTVModule(LiveTVModule.INFO_BAR);
                    livetvchlist.waitForChangeChannel(1);
                    //if(hiWebOsFrame[LiveTVModule.INFO_BAR].visible){
                    //    hiWebOsFrame[LiveTVModule.INFO_BAR].close();
                    //}
                    //livetvchlist.changeChannel(1);
                }
                break;
            }
            case VK_CHANNEL_DOWN:
            {
                if (0 && deviceKeySet.HBBTVKEYSET > 0x1f) {
                    DBG_ERROR("hbbtv disable the key");
                    return;
                }

                if(hiWebOsFrame.getKeyRepeatMode()) {
                    livetvchlist.changeInfoBar(-1);
                }
                else {
                    closeLiveTVModule(LiveTVModule.INFO_BAR);
                    livetvchlist.waitForChangeChannel(-1);
                    //if(hiWebOsFrame[LiveTVModule.INFO_BAR].visible){
                    //    hiWebOsFrame[LiveTVModule.INFO_BAR].close();
                    //}
                    //livetvchlist.changeChannel(-1);
                }

                break;
            }
            case VK_BACK:
            {
                if(hiWebOsFrame[LiveTVModule.INFO_BAR].visible) {
                    hiWebOsFrame[LiveTVModule.INFO_BAR].close();
                }
                else if(srcInnerId == SourceList.TV) {
                    DBG_ALWAYS("return to the last channel.");

                    closeLiveTVModule(LiveTVModule.INFO_BAR);
                    livetvchlist.waitForChangeChannel(0);
                    //livetvchlist.returnToTheLastChannel();
                }
                break;
            }
            case VK_PRE_CH:{
                if(srcInnerId == SourceList.TV) {
                    DBG_ALWAYS("return to the last channel.");
                    closeLiveTVModule(LiveTVModule.INFO_BAR);
                    livetvchlist.waitForChangeChannel(0);
                }
            }
            case VK_BLUE:
            {
                if(!!hiWebOsFrame[LiveTVModule.INFO_BAR] && hiWebOsFrame[LiveTVModule.INFO_BAR].visible) {
                    livetvinfobar.keyHandler(keyCode);
                }
                else {
                    DBG_INFO("LiveTV do not response key[" + keyCode + "]");
                }
                break;
            }
            case VK_0:
            case VK_1:
            case VK_2:
            case VK_3:
            case VK_4:
            case VK_5:
            case VK_6:
            case VK_7:
            case VK_8:
            case VK_9:
            case VK_SHORT_LINE:
            {
                if (0 && deviceKeySet.HBBTVKEYSET > 0x1f) {
                    DBG_ERROR("hbbtv disable the key");
                    return;
                }

                if(typeof (livetvchlist) == "undefined" || livetvchlist.getChannelListInitState()) {
                    showMsg("", "Reading the channel list. Please try again later");
                    return;
                }
                if(livetvchlist.getChannelChangeFlag()) {
                    DBG_INFO("channel changing...");
                    return;
                }
                if(hiWebOsFrame[LiveTVModule.INFO_BAR].visible) {
                    hiWebOsFrame[LiveTVModule.INFO_BAR].close();
                }
                var num = (keyCode == VK_SHORT_LINE) ? "." : (keyCode - VK_0);
                livetvchlist.changeChannelByNumKey(num + "");

                break;
            }
            case VK_TELETEXT:
//                if(!livetvmain.getNoSignalFlag()&&SourceList.TV == srcInnerId)
//                {
//                    DBG_ALWAYS(" SEND THE TELETEXT KEY ALWAYS")
//                  //  StartTeletextControl(hiWebOsFrame.blankPage);
//                  //  closeLiveTVModule();
//                }

                break;
            case VK_SUBTITLE:
            {
                if (0 && deviceKeySet.HBBTVKEYSET > 0x1f) {
                    DBG_ERROR("hbbtv disable the key");
                    return;
                }

                
                if(!livetvmain.getNoSignalFlag()
                    && SourceList.TV == srcInnerId
                    &&livetvmain.getCurrentChannelInfo().type != TVTYPE.ATV)
                {
                    DBG_ALWAYS(" dtv open subtitle key");
                    StartSubtitleControl(hiWebOsFrame.blankPage);
                    closeLiveTVModule();
                }
                else if(hiWebOsFrame.getCurrentArea()=="COL"
                    &&!livetvmain.getNoSignalFlag()
                    && SourceList.TV == srcInnerId
                    &&livetvmain.getCurrentChannelInfo().type == TVTYPE.ATV)
                 {
                    DBG_ALWAYS("COL ATV open CC key");
                    StartClosedCaptionControl(hiWebOsFrame.blankPage);
                    closeLiveTVModule();
                 }

	            try {
		            debugPrint("logReport__________begin", DebugLevel.WARNING);
		            logReport('GTRemoteControl', 'Subtitle');
		            debugPrint("logReport__________end", DebugLevel.WARNING);
	            }
	            catch(ex) {
		            DBG_ERROR(ex.message);
	            }

                break;
            }
            case VK_CC:
            {
                if(!livetvmain.getNoSignalFlag() && SourceList.TV == srcInnerId) {
                    DBG_ALWAYS("open CC key");
                    StartClosedCaptionControl(hiWebOsFrame.blankPage);
                    closeLiveTVModule();
                }
                else if(hiWebOsFrame.getCurrentArea()=="SA"
                       &&(!livetvmain.getNoSignalFlag())
                       && SourceList.AV == srcInnerId){
	                DBG_ALWAYS("open CC key");
                    StartClosedCaptionControl(hiWebOsFrame.blankPage);
                    closeLiveTVModule();
                }
                break;
            }
            default:

                break;
        }
    }
}
function currentProgramCallback(crntChannel, keyCode, result) {
    try {
        DBG_INFO('currentProgramCallback: crntChannel: ' + crntChannel + ', keyCode: ' + keyCode + ', result: ' + result);
        //将节目所在的频道号，频道名称，节目名称，节目的开始时间，结束时间保存在program对象中
        var program = {
            startTime: !!result[0] ? parseInt(result[0]) : 0,
            endTime: !!result[1] ? parseInt(result[1]) : 0,
            title: !!result[3] ? result[3] : "No program",
            detail: !!result[4] ? result[4] : "No program information"
        };
        program.channelNumber = crntChannel.number;
        program.channelName = crntChannel.name;
        program.channelUid = crntChannel.uid;
        program.listUid = crntChannel.listUid;
        program.playId = crntChannel.playId;

        debugPrint("current program: " + JSON.stringify(program));

        closeLiveTVModule();
        chl_startPVRTShiftDialog(program, keyCode);
    }
    catch(ex) {
        DBG_ERROR(ex.message);
    }
}
function getMaskValue(name, val) {
    var flag = 0;
    val = parseInt(val);
    switch(name) {
        case Mask.HD:
            flag = val & (1 << 2);
            break;
        case Mask.SKIP:
            flag = !(val & (1 << 3));
            break;
        case Mask.FAVTYPE:
            flag = val & (1 << 4);
            flag = flag || (val & (1 << 5));
            flag = flag || (val & (1 << 6));
            flag = flag || (val & (1 << 7));
            break;
        case Mask.LOCK:
            flag = val & (1 << 8);
            break;
        case Mask.ENCRYPT:
            flag = val & (1 << 11);
            break;
        case Mask.VISIBLE:
            flag = val & (1 << 15);
            break;
        case Mask.HIDDEN:
            flag = !(val & (1 << 1));
            break;
        default :
            break;
    }
    return !!flag;
}

function getDefinitionFlag(flag) {
    if((flag == 17) || (flag >= 25 && flag <= 30)){
        return 1;//HD
    }
    else if(flag == 31){
        if(null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882")){
            return 1;//HD     5655不支持uhd，uhd的频道归类为hd
        }else{
            return 3;//UHD
        }
    }
    else{
        return 2;//SD
    }
}

var liveTVHandler = {
    befRightHandler: liveTVHandlerProcess.bind(this, VK_RIGHT),
    befLeftHandler: liveTVHandlerProcess.bind(this, VK_LEFT),
    befUpHandler: liveTVHandlerProcess.bind(this, VK_UP),
    befDownHandler: liveTVHandlerProcess.bind(this, VK_DOWN),
    befEscHandler: liveTVHandlerProcess.bind(this, VK_BACK),
    keyChannelUpHandler: liveTVHandlerProcess.bind(this, VK_CHANNEL_UP),
    keyChannelDownHandler: liveTVHandlerProcess.bind(this, VK_CHANNEL_DOWN),
    befEnterHandler: liveTVHandlerProcess.bind(this, VK_ENTER),
    keyChListHandler: liveTVHandlerProcess.bind(this, VK_CH_LIST),
    keyNum0Handler: liveTVHandlerProcess.bind(this, VK_0),
    keyNum1Handler: liveTVHandlerProcess.bind(this, VK_1),
    keyNum2Handler: liveTVHandlerProcess.bind(this, VK_2),
    keyNum3Handler: liveTVHandlerProcess.bind(this, VK_3),
    keyNum4Handler: liveTVHandlerProcess.bind(this, VK_4),
    keyNum5Handler: liveTVHandlerProcess.bind(this, VK_5),
    keyNum6Handler: liveTVHandlerProcess.bind(this, VK_6),
    keyNum7Handler: liveTVHandlerProcess.bind(this, VK_7),
    keyNum8Handler: liveTVHandlerProcess.bind(this, VK_8),
    keyNum9Handler: liveTVHandlerProcess.bind(this, VK_9),
    keyPvrHandler: liveTVHandlerProcess.bind(this, VK_PVR),
    keyTimeShiftHandler: liveTVHandlerProcess.bind(this, VK_T_SHIFT),
    keyRedHandler: liveTVHandlerProcess.bind(this, VK_RED),
    keyGreenHandler: liveTVHandlerProcess.bind(this, VK_GREEN),
    keyYellowHandler: liveTVHandlerProcess.bind(this, VK_YELLOW),
    keyBlueHandler: liveTVHandlerProcess.bind(this, VK_BLUE),
    keySUBTHandler: liveTVHandlerProcess.bind(this, VK_SUBTITLE),
    keyTeletextHandler: liveTVHandlerProcess.bind(this, VK_TELETEXT),
    keyPlayHandler: liveTVHandlerProcess.bind(this, VK_PLAY),
    keyPauseHandler: liveTVHandlerProcess.bind(this, VK_PAUSE),
    keyStopHandler: liveTVHandlerProcess.bind(this, VK_STOP),
    keyFastFWDHandler: liveTVHandlerProcess.bind(this, VK_FAST_FWD),
    keyFastBKWHandler: liveTVHandlerProcess.bind(this, VK_FAST_BKW),
    keyCCHandler: liveTVHandlerProcess.bind(this, VK_CC),
    keyShortLineHandler: liveTVHandlerProcess.bind(this, VK_SHORT_LINE),
    keyPreCHHandler: liveTVHandlerProcess.bind(this, VK_PRE_CH),
    keyFavCHHandler: liveTVHandlerProcess.bind(this, VK_FAV_CH)

}


function parseHBBTVKeyCodes(value, active) {
    DBG_ALWAYS("hbbtv keyset[" + value + "]");
    var arrDivKeyCode = new Array();
    var j = 0;

    if(value & 0x1) {
        arrDivKeyCode[j++] = VK_RED;
    }

    if(value & 0x2) {
        arrDivKeyCode[j++] = VK_GREEN;
    }

    if(value & 0x4) {
        arrDivKeyCode[j++] = VK_YELLOW;
    }

    if(value & 0x8) {
        arrDivKeyCode[j++] = VK_BLUE;
    }

    if(value & 0x10) {
        arrDivKeyCode[j++] = VK_UP;
        arrDivKeyCode[j++] = VK_DOWN;
        arrDivKeyCode[j++] = VK_LEFT;
        arrDivKeyCode[j++] = VK_RIGHT;
        arrDivKeyCode[j++] = VK_ENTER;
        arrDivKeyCode[j++] = VK_BACK;
    }

    if(value & 0x20) {
        arrDivKeyCode[j++] = VK_PLAY;
        arrDivKeyCode[j++] = VK_PAUSE;
        arrDivKeyCode[j++] = VK_STOP;
        arrDivKeyCode[j++] = VK_NEXT;
        //arrDivKeyCode[j++] = VK_PREV;
        arrDivKeyCode[j++] = VK_LAST;
        arrDivKeyCode[j++] = VK_FAST_FWD;
        arrDivKeyCode[j++] = VK_FAST_BKW;
        //arrDivKeyCode[j++] = VK_PLAY_PAUSE;
    }

    if(value & 0x40) {
        arrDivKeyCode[j++] = VK_PAGE_UP;
        arrDivKeyCode[j++] = VK_PAGE_DOWN;
    }

    if(value & 0x80) {
        arrDivKeyCode[j++] = VK_INFO;
        arrDivKeyCode[j++] = VK_SUBTITLE;
    }

    if(value & 0x100) {
        arrDivKeyCode[j++] = VK_0;
        arrDivKeyCode[j++] = VK_1;
        arrDivKeyCode[j++] = VK_2;
        arrDivKeyCode[j++] = VK_3;
        arrDivKeyCode[j++] = VK_4;
        arrDivKeyCode[j++] = VK_5;
        arrDivKeyCode[j++] = VK_6;
        arrDivKeyCode[j++] = VK_7;
        arrDivKeyCode[j++] = VK_8;
        arrDivKeyCode[j++] = VK_9;
    }

    if(value & 0x200) {
        arrDivKeyCode[j++] = VK_A;
        arrDivKeyCode[j++] = VK_B;
        arrDivKeyCode[j++] = VK_C;
        arrDivKeyCode[j++] = VK_D;
        arrDivKeyCode[j++] = VK_E;
        arrDivKeyCode[j++] = VK_F;
        arrDivKeyCode[j++] = VK_G;
        arrDivKeyCode[j++] = VK_H;
        arrDivKeyCode[j++] = VK_I;
        arrDivKeyCode[j++] = VK_J;
        arrDivKeyCode[j++] = VK_K;
        arrDivKeyCode[j++] = VK_L;
        arrDivKeyCode[j++] = VK_M;
        arrDivKeyCode[j++] = VK_N;
        arrDivKeyCode[j++] = VK_O;
        arrDivKeyCode[j++] = VK_P;
        arrDivKeyCode[j++] = VK_Q;
        arrDivKeyCode[j++] = VK_R;
        arrDivKeyCode[j++] = VK_S;
        arrDivKeyCode[j++] = VK_T;
        arrDivKeyCode[j++] = VK_U;
        arrDivKeyCode[j++] = VK_V;
        arrDivKeyCode[j++] = VK_W;
        arrDivKeyCode[j++] = VK_X;
        arrDivKeyCode[j++] = VK_Y;
        arrDivKeyCode[j++] = VK_Z;
        arrDivKeyCode[j++] = VK_a;
        arrDivKeyCode[j++] = VK_b;
        arrDivKeyCode[j++] = VK_c;
        arrDivKeyCode[j++] = VK_d;
        arrDivKeyCode[j++] = VK_e;
        arrDivKeyCode[j++] = VK_f;
        arrDivKeyCode[j++] = VK_g;
        arrDivKeyCode[j++] = VK_h;
        arrDivKeyCode[j++] = VK_i;
        arrDivKeyCode[j++] = VK_j;
        arrDivKeyCode[j++] = VK_k;
        arrDivKeyCode[j++] = VK_l;
        arrDivKeyCode[j++] = VK_m;
        arrDivKeyCode[j++] = VK_n;
        arrDivKeyCode[j++] = VK_o;
        arrDivKeyCode[j++] = VK_p;
        arrDivKeyCode[j++] = VK_q;
        arrDivKeyCode[j++] = VK_r;
        arrDivKeyCode[j++] = VK_s;
        arrDivKeyCode[j++] = VK_t;
        arrDivKeyCode[j++] = VK_u;
        arrDivKeyCode[j++] = VK_v;
        arrDivKeyCode[j++] = VK_w;
        arrDivKeyCode[j++] = VK_x;
        arrDivKeyCode[j++] = VK_y;
        arrDivKeyCode[j++] = VK_z;
    }

    if(value & 0x400) {
    }
    deviceKeySet.HBBTV = arrDivKeyCode;
    deviceKeySet.HBBTVKEYSET = value;

    if (deviceKeySet.HBBTV.length > 0 && !!livetvinfobar && livetvinfobar.getInfoBarOpened()) {
        livetvinfobar.rewriteForHbbtv();
    }

    if(checkHBBTVKeySet()){
        try {
            livetvmain.hideCIEncryptedMsg();
            livetvmain.hideAudioIcon();
            if(deviceKeySet.HBBTVAPPON) {
                DBG_INFO("hbbtv app started.");
                if(!active && hiWebOsFrame[LiveTVModule.MAIN].visible){
                    livetvmain.clearLiveTVUI();
                }
                if(appLoading) {
                    endLoadingOrUnlockKey();
                }
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
//        closeMsgPage();
    } else {
        try {
            if(true == livetvmain.getCIEncryptedFlag() && hiWebOsFrame[LiveTVModule.MAIN].visible){
                livetvmain.showCIEncryptedMsg();
            }
            livetvmain.checkShowAudioIcon();
            if(deviceKeySet.HBBTVKEYSET==0){
            try {
                if("SA" != InitArea && !model.mheg5.getI32Enable())
                model.mheg5.setI32Enable(1);
            }
            catch(ex){
                DBG_ERROR(ex.message);
            }
            }
    	    if(deviceKeySet.HBBTVAPPON) {
                resumeDTV();
                deviceKeySet.HBBTVAPPON = false;
                deviceKeySet.HBBTVNEEDRESUME = true;
                if(!active && hiWebOsFrame[LiveTVModule.MAIN].visible){
                    if(null == deviceKeySet.HBBTVORIGIN){
                        openLiveTVModule();
                    }
                    else {
                        closeDOthersModule("");
                        switch (deviceKeySet.HBBTVORIGIN.module) {
                            case "launcher":
                                if("Hisense" == g_launcherBrand){
                                    launcherNBar.setFocusContent(true);
                                }
                                hiWebOsFrame.myLauncher.open();
                                hiWebOsFrame.myLauncher.hiFocus();
                                break;
                            case "allapps":
                                hiWebOsFrame["launcher_allapps"].open();
                                launcherAApps.focusAllApp();
                                break;
                            default:
                                openLiveTVModule();
                            break;
                        }

                    }
                }
                deviceKeySet.HBBTVORIGIN = null;
                DBG_INFO("hbbtv app stopped.");
            }
            if(needStartWuaki&&value==0){
                needStartWuaki = false;
                sendCommndToTV(CmdURLType.START_HBBTV_APP, HSAPPURL.WUAKI, true);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
//        openMsgEventCheck();
    }
    return arrDivKeyCode;
}

function doNotPopupLiveTVMsg(pageId) {
    var doNotPop = (!!hiWebOsFrame["dialog_usb"] && hiWebOsFrame["dialog_usb"].visible)


    if(pageId == LiveTVModule.SEARCH_DIALOG || pageId == LiveTVModule.PASSWORD_DIALOG
        || pageId == LiveTVModule.OPERATE_TIP) {
        if(!hiWebOsFrame[LiveTVModule.MAIN] || !hiWebOsFrame[LiveTVModule.MAIN].visible) {
            doNotPop = true;
        }
    }

    return doNotPop;
}

function MPChannel() {
    ENUM_INDEX = 0;
}

MPChannel();
MPChannel.LISTUID = ENUM_INDEX++;
MPChannel.UID = ENUM_INDEX++;
MPChannel.NUMBER = ENUM_INDEX++;
MPChannel.NAME = ENUM_INDEX++;
MPChannel.ATTRIBUTE = ENUM_INDEX++;
MPChannel.TYPE = ENUM_INDEX++;
MPChannel.PLAYID = ENUM_INDEX++;
MPChannel.SATELLITEID = ENUM_INDEX++;
MPChannel.ECODE = ENUM_INDEX++;

function Mask() {
    ENUM_INDEX = 0;
}

Mask();
Mask.LOCK = ENUM_INDEX++;
Mask.ENCRYPT = ENUM_INDEX++;
Mask.FAVTYPE = ENUM_INDEX++;
Mask.SKIP = ENUM_INDEX++;
Mask.VISIBLE = ENUM_INDEX++;
Mask.HD = ENUM_INDEX++;
Mask.HIDDEN = ENUM_INDEX++;
Mask.BOOK = ENUM_INDEX++;

function Msg() {
    ENUM_INDEX = 0;
}

Msg();
Msg.ENERGY_WARNING = ENUM_INDEX++;
Msg.SEARCH = ENUM_INDEX++;
Msg.PASSWORD = ENUM_INDEX++;
Msg.SIGNAL = ENUM_INDEX++;
Msg.INFO = ENUM_INDEX++;
Msg.OPERATETIP = ENUM_INDEX++;
Msg.AUDIO = ENUM_INDEX++;
Msg.CI_ENCRYPTED = ENUM_INDEX++;
Msg.RESUMEHBBTV = ENUM_INDEX++;
//Msg.CI_MMI_ENQUIRY = ENUM_INDEX++;
Msg.WAIT_SOURCE_CHANGE = ENUM_INDEX++;
Msg.TTX = ENUM_INDEX++;
Msg.WAIT_FOR_START_PVR = ENUM_INDEX++;
Msg.NOTSUPPORT = ENUM_INDEX++;
Msg.ARRAY = ["energy_warning", "search", "password", "signal", "info", "operate tip", "audio", "ci_encrypted", "rewume hbbtv", "wait source change", "ttx", "wait for start pvr", "not support"];

function LiveTVModule() {
}

LiveTVModule();
LiveTVModule.MAIN = "livetv_main";
LiveTVModule.VOLUME = "livetv_volume";
LiveTVModule.INFO_BAR = "livetv_info_bar";
LiveTVModule.AUTO_STANDBY = "livetv_auto_standby";
LiveTVModule.CHANNEL_LIST = "livetv_channel_list";
LiveTVModule.CHANNEL_LIST_FILTER = "livetv_channel_list_filter";
LiveTVModule.PASSWORD_DIALOG = "livetv_password_dialog";
LiveTVModule.SEARCH_DIALOG = "livetv_search_dialog";
LiveTVModule.OPERATE_TIP = "livetv_operate_tip";

function SourceList() {
    ENUM_INDEX = 0;
}
SourceList();
SourceList.NONE = ENUM_INDEX++;
SourceList.AV = ENUM_INDEX++;
SourceList.TV = ENUM_INDEX++;
SourceList.HDMI1 = ENUM_INDEX++;
SourceList.HDMI2 = ENUM_INDEX++;
SourceList.HDMI3 = ENUM_INDEX++;
SourceList.HDMI4 = ENUM_INDEX++;
SourceList.COMPONENT = ENUM_INDEX++;
SourceList.SCART = ENUM_INDEX++;
SourceList.ARRAY = [
    "None", "AV", "TV", "HDMI 1", "HDMI 2",
    "HDMI 3", "HDMI 4", "Component", "Scart"
];

function SourceAttr() {
    ENUM_INDEX = 0;
}
SourceAttr();
SourceAttr.UID = ENUM_INDEX++;
SourceAttr.NAME = ENUM_INDEX++;
SourceAttr.SIGNAL = ENUM_INDEX++;
SourceAttr.LOCK = ENUM_INDEX++;
SourceAttr.RENAME = ENUM_INDEX++;
SourceAttr.HOTELLOCK = ENUM_INDEX++;
SourceAttr.ARRAY = ["uid", "name", "noSignal", "isLock", "rename", "hotelLock"];

function CurrentState() {
    ENUM_INDEX = 0;
}
CurrentState();
CurrentState.NONE = ENUM_INDEX++;
CurrentState.CEC = ENUM_INDEX++;
CurrentState.MHL = ENUM_INDEX++;
CurrentState.HBBTV = ENUM_INDEX++;
CurrentState.TTX = ENUM_INDEX++;

var deviceKeySet = {
    CEC: [
        VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_PLAY, VK_STOP,
        VK_BACK, VK_PAUSE, VK_FAST_BKW, VK_FAST_FWD
    ],
    HBBTVENABLE: false,
    HBBTVCOUNTRY:["AUS"],
    HBBTVSTATE: "none",
    HBBTVCOEXIST:["app_netflix"],
    HBBTV: [],
    HBBTVAPPON: false,
    HBBTVNEEDRESUME:true,
    HBBTVORIGIN: null,
    HBBTVKEYSET: 0,
    MHL: [
        VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_PLAY, VK_STOP,
        VK_BACK, VK_PAUSE, VK_FAST_BKW, VK_FAST_FWD
    ],
    "TEXT": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_PLAY, VK_STOP, VK_PAUSE, VK_FAST_BKW, VK_FAST_FWD, VK_0, VK_1,
        VK_2, VK_3, VK_4, VK_5, VK_6, VK_7, VK_8, VK_9, VK_RED, VK_GREEN, VK_YELLOW, VK_BLUE, VK_TELETEXT, VK_EXIT,VK_CHANNEL_DOWN,VK_CHANNEL_UP]

}

function ParentLock() {
    ENUM_INDEX = 0;
}
ParentLock();
ParentLock.SWITCH = ENUM_INDEX++;
ParentLock.INPUT = ENUM_INDEX++;
ParentLock.CHANNEL = ENUM_INDEX++;
ParentLock.PROGRAM = ENUM_INDEX++;
ParentLock.TIMESPAN = ENUM_INDEX++;

function ChannelList() {
    ENUM_INDEX = 0;
}
ChannelList();
ChannelList.NAME = ENUM_INDEX++;
ChannelList.UID = ENUM_INDEX++;
ChannelList.ATTRIBUTE = ENUM_INDEX++;
ChannelList.DISPLAY = ENUM_INDEX++;
ChannelList.RIGHTS = ENUM_INDEX++;
ChannelList.ARRAY = ["name", "uid", "attr", "display", "rights"]

function SPChannel() {
    ENUM_INDEX = 0;
}

SPChannel();
SPChannel.NUMBER = ENUM_INDEX++; //0
SPChannel.NAME = ENUM_INDEX++; //1
SPChannel.UID = ENUM_INDEX++;  //2
SPChannel.TYPE = ENUM_INDEX++; //3
SPChannel.ATTRIBUTE = ENUM_INDEX++; //4
SPChannel.PLAYID = ENUM_INDEX++; //5
SPChannel.HDSDFLAG = ENUM_INDEX++;
SPChannel.SERVICETYPE = ENUM_INDEX++;
SPChannel.SVLRECID = ENUM_INDEX++;
SPChannel.SERVICEID = ENUM_INDEX++; //9
SPChannel.NETWORKID = ENUM_INDEX++; //10
SPChannel.ORIGINALLCN = ENUM_INDEX++; //11

SPChannel.ARRAY = ["number", "name", "uid", "type", "attr", "listUid",  "HDSDFLAG","serviceType","SVLRECID", "serviceId"];

function SPProgram() {
    ENUM_INDEX = 0;
}

SPProgram();
SPProgram.EVENTID = ENUM_INDEX++;
SPProgram.TITLE = ENUM_INDEX++;
SPProgram.STARTTIME = ENUM_INDEX++;
SPProgram.ENDTIME = ENUM_INDEX++;
SPProgram.DESCRIPTION = ENUM_INDEX++;
SPProgram.GUIDANCE = ENUM_INDEX++;
function ECode() {

}
ECode.NONE = "e_code:0";
ECode.AUDIO = "e_code:20";
ECode.LOCK = "e_code:9";
ECode.NOSIGNAL = "e_code:5";
ECode.LOCKED = "e_code:4";
ECode.STOPPED = "e_code:13";
ECode.VIDEO_FMT_UPDATE = "e_code:37";
ECode.NO_STREAM = "e_code:33";
ECode.NO_SERVICE = "e_code:19";

function TVTYPE() {

}
TVTYPE.ATV = 1;


function FVPField() {
    ENUM_INDEX = 0;
}
FVPField();
FVPField.CHANNEL_LOGO = ENUM_INDEX++;
FVPField.CONTENT_IMAGE = ENUM_INDEX++;
FVPField.MAIN_TITLE = ENUM_INDEX++;
FVPField.SECONDARY_TITLE = ENUM_INDEX++;
// FVPField.RUNNING_TIME = ENUM_INDEX++;
FVPField.DESCRIPTION = ENUM_INDEX++;
// FVPField.PROGRAM_TYPE = ENUM_INDEX++;
FVPField.START_TIME_UTC = ENUM_INDEX++;
FVPField.END_TIME_UTC = ENUM_INDEX++;
FVPField.MEDIA_URL = ENUM_INDEX++;
FVPField.PROGRAM_AVAILABLE_FLAG = ENUM_INDEX++;
FVPField.PROGRAM_ID = ENUM_INDEX++;
FVPField.PROGRAM_GUIDANCE = ENUM_INDEX++;
FVPField.PROGRAM_THEME = ENUM_INDEX++;
FVPField.PROGRAM_HDSD = ENUM_INDEX++;
FVPField.PROGRAM_SUBT = ENUM_INDEX++;
FVPField.PROGRAM_AD = ENUM_INDEX++;


function AVLFlag() {
    ENUM_INDEX = 0
}

AVLFlag();
AVLFlag.NOT_AVAILABLE = ENUM_INDEX++;
AVLFlag.COMMING_SOON = ENUM_INDEX++;
AVLFlag.AVAILABLE = ENUM_INDEX++;

