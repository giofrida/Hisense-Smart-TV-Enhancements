/**
 * Created by BOB.J on 2014/12/16.
 */

function getVolumePageData(opts) {
    opts.CaE = [
        {
            id: 'volume_bar_icon',
            CaEType: 'img'
        },
        {
            id: "volume_bar_txt",
            CaEType: 'div'
        }
    ]

    return vol.pageData;
}

function liveTVVolume() {
    var self = this;
    self.id = "livetv_volume";

    self.pageData = {
        volume_bar_icon: {Data: "img/common/muteon.png"},
        volume_bar_txt: {Data: ""},
        rewrite: rewritePageData
    }

    var oprtData = {}

    self.pageData.operateData = oprtData;

    var volume = 0, maxVol = 100, minVol = 0;
    var baseLen = 752;
    var isMute = false;
    var isBarShowed = false;
    var firstPress = true, onlyOpen = false;
    var noneNfyVal = false;
    var vFlag = 0;

    var volumeTimer = 0, volRepeatTimer = 0, repeatMode = false, realSetFlag = 0;
    var firstInitUI = true;
    self.headPhoneInsertState = false;
    var SpeedMap = [1, 1, 1, 2, 2, 2, 4, 4, 4, 8], rpt;

    self.onOpenVolume = function () {
        //displayOfMute(isMute);
        //displayOfBar(true);
        if (tv && !model.sound.onMainMuteChaged) {
            model.sound.onMainMuteChaged = onMainMuteChanged;
            model.sound.onMainVolumeChaged = onMainVolumeChanged;
        }

        if (!onlyOpen) {
            isMute = tv ? (model.sound.getMainMute() == 1) : false;
            if (!firstInitUI) {
                if (vol.headPhoneInsertState) {
                    volume = tv ? model.sound.getHeadphoneVolume() : 20;
                } else {
                    volume = tv ? model.sound.getMainVolume() : 20;
                }
            }
        }
        setPageVolume(parseInt(volume));
        displayOfMute(isMute);
        firstInitUI = false;
    }

    function canProcVolume() {

        if (!hiWebOsFrame[self.id].visible) {
            DBG_INFO("current page can not process volume.");
            return false;
        }
        return true;

    }

    self.setBizVolume = function (v) {

        if (repeatMode) return;
        repeatMode = hiWebOsFrame.getKeyRepeatMode();

        maxVol = (hotelVolume.switch && !isCECByPass()) ? hotelVolume.maxVolume : 100;
        minVol = (hotelVolume.switch && !isCECByPass()) ? hotelVolume.minVolume : 0;

        if (!canProcessVolume()) {
            DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not receive volume changed");
            return;
        }

        if (isCECByPass()) {
            keyboard.SendKeyResult(false);
            return;
        }

        if (!isBarShowed) {
            var oldvolume = 0;
            if (vol.headPhoneInsertState) {
                oldvolume = parseInt(model.sound.getHeadphoneVolume());
            } else {
                oldvolume = parseInt(model.sound.getMainVolume());
            }
            if (Math.abs(oldvolume - parseInt(volume)) > 1) {
                volume = oldvolume;
                setPageVolume(parseInt(volume));
            }
            displayOfBar(true);
            return;
        }

        repeatSetVolume(v);

    }


    function getVolGain(x) {
        if (x >= SpeedMap.length) x = SpeedMap.length - 1;
        return SpeedMap[x];
    }

    function _doSetVol() {
        var presetVal = volume + vFlag * getVolGain(rpt);
        if (presetVal < minVol) presetVal = minVol;
        if (presetVal > maxVol) presetVal = maxVol;
        if (1 == vFlag && volume < maxVol) {
            if (tv) {
                if (vol.headPhoneInsertState) {
                    DBG_INFO('model.sound.setHeadphoneVolume(' + (presetVal) + ')');
                    model.sound.setHeadphoneVolume(presetVal);
                    onMainVolumeChanged(presetVal, noneNfyVal);
                }
                else {
                    model.sound.setMainVolume(presetVal);
                }
            } else {
                onMainVolumeChanged(presetVal, noneNfyVal);
            }
            //realSetFlag = 1 - realSetFlag;
            rpt++;
        } else if (-1 == vFlag && volume > minVol) {
            if (tv) {
                if (vol.headPhoneInsertState) {
                    DBG_INFO('model.sound.setHeadphoneVolume(' + (presetVal) + ')');
                    model.sound.setHeadphoneVolume(presetVal);
                    onMainVolumeChanged(presetVal, noneNfyVal);
                } else {
                    model.sound.setMainVolume(presetVal);
                }
            } else {
                onMainVolumeChanged(presetVal, noneNfyVal);
            }
            //realSetFlag = 1 - realSetFlag;
            rpt++;
        } else if (isMute && 1 == vFlag && volume == maxVol) {
            self.setBizMute();
        }
    }

    function repeatSetVolume(v) {
        vFlag = v;
        realSetFlag = 1;
        rpt = 0;
        if (repeatMode) {
            volRepeatTimer = setInterval(_doSetVol, 100);
        }
        else {
            _doSetVol();
        }

    }

    self.stopRepeatSetVolume = function () {
        clearInterval(volRepeatTimer);
        repeatMode = false;
        realSetFlag = 0;
        rpt = 0;
    }

    self.setBizMute = function () {

        if (!canProcessVolume()) {
            DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not receive mute changed");
            return;
        }

        if (isCECByPass()) {
            keyboard.SendKeyResult(false);
            return;
        }

        var v = isMute ? 0 : 1;
        if (tv) {
            model.sound.setMainMute(v);
        }
        else {
            onMainMuteChanged(v);
        }
    }

    self.setBizVolumeByVal = function (val) {
        if (!canProcessVolume()) {
            DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not receive volume changed");
            return;
        }
        displayOfBar(true);
        if (val <= maxVol && val >= minVol) {
            if (tv) {
                if (vol.headPhoneInsertState) {
                    DBG_INFO('model.sound.setHeadphoneVolume(' + val + ')');
                    model.sound.setHeadphoneVolume(val);
                    onMainVolumeChanged(val, noneNfyVal);
                } else {
                    model.sound.setMainVolume(val);
                }
            }
            else {
                onMainVolumeChanged(val, noneNfyVal);
            }
        }
        else {
            DBG_ERROR("set volume error [" + val + "]");
        }
    }

    self.setBizMuteByVal = function (val) {

        if (!canProcessVolume()) {
            DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not receive mute changed");
            return;
        }

        if (tv) {
            model.sound.setMainMute(!!val ? 1 : 0);
        }
        else {
            onMainMuteChanged(val);
        }
    }

    function setPageVolume(val) {

        maxVol = (hotelVolume.switch && !isCECByPass()) ? hotelVolume.maxVolume : 100;
        minVol = (hotelVolume.switch && !isCECByPass()) ? hotelVolume.minVolume : 0;
        if (volume < val && isMute) {
            self.setBizMute();
        }
        if (val > maxVol || val < minVol) {
            DBG_ERROR("volume error [" + val + "], set to default.");
            volume = val > maxVol ? maxVol : minVol;
        }
        else {
            volume = val;
        }
        if (!isEPOSON()) {
            $("#volume_bar_txt").text(volume);
            $("#volume_bar_top").width(Math.round(volume / 100 * baseLen));
        }
        resetVolumeTimeout();
    }

    self.getPageVolume = function () {
        return volume;
    }

    function setPageMute(val) {

        if (!canProcessVolume()) {
            DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not receive mute changed");
            return;
        }
        isMute = !!val;
        displayOfMute(isMute);
    }

    self.getPageMute = function () {
        DBG_INFO("mute[" + isMute + "]");
        return isMute ? 1 : 0;
    }

    function rewritePageData(pageData) {
        // pageData.volume_bar_txt = volume;
    }

    function displayOfBar(val) {
        //if(val && firstPress){
        //recheck volume
        //volume = tv ? model.sound.getMainVolume() : 20;
        //setPageVolume(parseInt(volume));
        //firstPress = false;
        //}

        isBarShowed = val;
        if (!isEPOSON()) {
            var v = val ? "visible" : "hidden";
            $("#volume_bar").css("visibility", v);
        }
        else{
            if(!val && "hidden" != $("#volume_bar").css("visibility")){
                $("#volume_bar").css("visibility", "hidden");
            }
        }

        if (isBarShowed) {
            resetVolumeTimeout();
        }
    }

    function resetVolumeTimeout() {
        clearTimeout(volumeTimer);
        volumeTimer = setTimeout(function () {
            displayOfBar(false);
        }, tv ? 3000 : 100000000);
    }

    function displayOfMute(val) {
        if (!isEPOSON()) {
            var v = val ? "visible" : "hidden";
            $("#volume_mute").css("visibility", v);
        }
        else{
            if(!val && "hidden" != $("#volume_mute").css("visibility")){
                $("#volume_mute").css("visibility", "hidden");
            }
        }
    }

    function onMainVolumeChanged(value, isNfyVal) {
        DBG_ALWAYS("volume changed[" + value + "]: isNfyVal: " + (typeof (isNfyVal) != UNDEFINED_DEFSTR));
        if (!canProcessVolume()) {
            DBG_ALWAYS("current page[" + hiWebOsFrame.getCurrentPageId() + "] do not receive volume changed");
        }
        else {
            !isBarShowed && displayOfBar(true);
            //if (vol.headPhoneInsertState && typeof (isNfyVal) != UNDEFINED_DEFSTR) {
            //    value = model.sound.getHeadphoneVolume();
            //    DBG_ALWAYS("volume changed ==>headphoneVal: " + value);
            //}
            //
            setPageVolume(parseInt(value));
            if ('EM' == InitArea && 'thailand' == hiWebOsFrame.getCurrentCountry().toLowerCase()) {
                try {
                    DBG_INFO("'EM' == InitArea && 'thailand' == curCountry, set description volume");
                    model.sound.setDescriptionVolume(parseInt(value));
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }
            }
        }
    }

    function onMainMuteChanged(value) {
        DBG_INFO("mute changed[" + value + "]");
        setPageMute(value);

    }

    self.onCloseVolume = function () {
        isBarShowed = false;
        DBG_INFO("volume bar closed.");
    }

    self.openMutePage = function (flag) {
        onlyOpen = !!flag;
        hiWebOsFrame[self.id].open();
    }
    self.closeMutePage = function () {
        displayOfMute(false);
        displayOfBar(false);
        hiWebOsFrame[self.id].close();
    }

    self.reCheckVolume = function () {
        if (vol.headPhoneInsertState) {
            volume = model.sound.getHeadphoneVolume();
        } else {
            volume = model.sound.getMainVolume();
        }
        if (canProcessVolume()) {
            isMute = (1 == model.sound.getMainMute());
        }
        if(!isEPOSON()){
            $("#volume_bar_txt").text(volume);
            $("#volume_bar_top").css("width", (volume / 100 * baseLen) + "px");
            DBG_INFO("get tv volume[" + volume + "], mute[" + isMute + "]");
        }
    }

    self.tryToSendKeyUpToCEC = function () {
        if (isCECByPass()) {
            keyboard.SendKeyResult(false);
            return;
        }
    };

    function isEPOSON() {
        try {
            if (hiWebOsFrame.getCurrentPageId() != "app_lau_browser") return false;
            return (CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType());
        } catch (ex) {
            DBG_ERROR(ex.message);
            return false;
        }
    }


}
var vol = new liveTVVolume();
