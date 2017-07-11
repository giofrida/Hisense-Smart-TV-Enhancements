/**
 * Created by Brad on 14-1-6.
 */
//播放列表以及播放信息
var HiVideoPlayer = {
    videoList: [],
    cIndex: 0,
    isController: true,
    keyValues: {
        "keyLeft": 37,
        "keyUp": 38,
        "keyRight": 39,
        "keyDown": 40,
        "keyEnter": 13
    },
    PLAY_STATE: {
        STOPPED: 0,
        PLAYING: 1,
        PAUSED: 2,
        CONNECTING: 3,
        BUFFERING: 4,
        FINISHED: 5,
        ERROR: 6
    },
    progressWidth: 0,
    ffScale: 0.05,
    seekDisabled: false,
    playerStatus: 1,
    videoPlayerFocus: 0,
    dialogShowStatus: 0,   //0 no dialog  1.clock 2.list 3.setting 4.info
    settingIndex: 0,
    repeateMode: ["Once", "Repeat All", "Repeat One"],
    repeatIndex: 0,
    screenMode: ["Fit","Full Screen","Original"],
    screenIndex: 0,
    listIndex: 0,
    timeFocus: 0,
    timeStr: [0, 0],
    timeIndex: 0,
    videoTotaltime: 0,
    jsb2: null, //获取滚动控件
    focusTop: 150,
    listTop: 0,
    scrollBarFrom: 0,
    focusIndex: 0,
    resolution: "",
    Vwidth: 0,
    Vheight: 0,
    lastPage: null,
    isPVROpen: false,
    PVRprogressInternal: null,
    progressInternal: null,
    ControlTimer: null,
    ffIndex: 0,
    frIndex: 0,
    ffSpeed: [1, 200, 201, 202, 250],
    frSpeed: [1, 300, 301, 302, 350],
    pvrffSpeed: [4, 1, 2, 3, 3],
    pvrfrSpeed: [4, 10, 11, 12, 12],
    pvrPassword: "",
    subtitleList: [],
    audioTrackList: [],
    //多语言  两个标题，AUTO,hebrew,OFF
    subtitleLan: ["Default", "Hebrew", "Western", "Central European", "Arabic", "Chinese Simplified", "Cyrillic"],
    subtitleLanIndex: 0,
    subtitleIndex: 0,
    audioTrackIndex: 0,
    videoSettingContrl: 1,
    needUnlockPvr: false,
    currentPlayerIsPlayDone: false,
    isISR: false




};
//只适用于关闭后的状态
HiVideoPlayer.playNextWhenStop = function () {
    switch (HiVideoPlayer.repeatIndex) {
        case 0:
            if (HiVideoPlayer.cIndex < HiVideoPlayer.videoList.length - 1) {
                HiVideoPlayer.cIndex++;
                HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);
                //hiWebOsFrame.endLoading("himedia_videoPlayer");
            }
            else if (HiVideoPlayer.cIndex >= HiVideoPlayer.videoList.length - 1) {
                mpCtrlStatus_launcher = 0;
                //hiWebOsFrame.endLoading("himedia_videoPlayer");
                HiVideoPlayer.closeVideoPlayer(1);
//                hiwebosframeLauncher.hideCurrentMenuPage();
//                $("#homebody").css("display", "block");
//                $("#videoPlayerDiv").css("display", "none");
//                hiwebosframeLauncher.openExternalPage('pDropbox');
            }
            break;
        case 1:
            if (HiVideoPlayer.cIndex < HiVideoPlayer.videoList.length - 1) {
                HiVideoPlayer.cIndex++;
                HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);
            }
            else if (HiVideoPlayer.cIndex >= HiVideoPlayer.videoList.length - 1) {
                HiVideoPlayer.cIndex = 0;
                HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[0].videoUrl, HiVideoPlayer.videoList[0].videoName);
            }
            //hiWebOsFrame.endLoading("himedia_videoPlayer");
            break;
        case 2:

            HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);
            //hiWebOsFrame.endLoading("himedia_videoPlayer");
            break;
    }

}
;
HiVideoPlayer.refreshTimeInfo = function () {
    if (HiVideoPlayer.timeIndex == 0)
        $("#PlayTime_" + HiVideoPlayer.timeFocus).html(HiVideoPlayer.timeStr[1] + "" + HiVideoPlayer.timeStr[0] + "");
    else
        $("#PlayTime_" + HiVideoPlayer.timeFocus).html(HiVideoPlayer.timeStr[0] + "" + HiVideoPlayer.timeStr[1] + "");
};

//***************PVR***********************//
HiVideoPlayer.playPvr = function (PVRurl, PVRname) {
    HiVideoPlayer.isPVROpen = true;
    debugPrint("pvr url:   " + PVRurl);
    model.hdr.PlayerPlay(PVRurl);
    $("#videoPlayerPanel").css("visibility", "visible");
    try {
        debugPrint('clos MEMC when bar show');
        ctlr_memc_for_osd(0);
    }
    catch (ex) {
        debugE("clos MEMC ----" + ex.message);
    }
    //$("#videoPlayerController").css("visibility", "visible");
    $("#videoPlayerStatus").css("visibility", "hidden");
    HiVideoPlayer.isController = false;
    //model.mpctrl.PlayPvr(PVRurl);
    $("#videoTitle").html(PVRname);
    $("#VinfoTableTd1").html('<span>' + PVRname + '</span>');
    $("#VinfoTableTd2").html('<span>' + HiVideoPlayer.videoList[HiVideoPlayer.cIndex].mime_type + '</span>');
    if (!!HiVideoPlayer.PVRprogressInternal) {
        clearInterval(HiVideoPlayer.PVRprogressInternal);
    }
    HiVideoPlayer.PVRprogressInternal = window.setInterval("HiVideoPlayer.getPVRProgress()", 1000);
};
//***************PVR***********************//
HiVideoPlayer.playVideoByUrl = function (videoUrl, videoName) {
    if (videoUrl != null) {
        //重置所有对话框
        $("#videoPlayTimeSetting").css("display", "none");
        $("#videoList").css("display", "none");
        $("#videoSetting").css("display", "none");
        $("#videoInformation").css("display", "none");
        HiVideoPlayer.dialogShowStatus = 0;

        debugPrint("video Url is :" + videoUrl);
        hiWebOsFrame.startLoading(30, "videoPlayer");
        //重置PVR解锁标志
        HiVideoPlayer.needUnlockPvr = false;
        HiVideoPlayer.currentPlayerIsPlayDone = false;
        //重置快进快退按钮样式
        HiVideoPlayer.ffIndex = 0;
        changeFFClass();
        HiVideoPlayer.frIndex = 0;
        changeFRClass();
        //重置设置时间
        HiVideoPlayer.timeFocus = 0;
        HiVideoPlayer.timeStr = [0, 0];
        HiVideoPlayer.timeIndex = 0;
        $("#PlayTime_0").html("00");
        $("#PlayTime_1").html("00");
        $("#PlayTime_2").html("00");

        $("#PlayTime_0").attr("class", "PlayTime_focus");
        $("#PlayTime_1").attr("class", "PlayTime");
        $("#PlayTime_2").attr("class", "PlayTime");

        //重置setting
        HiVideoPlayer.settingIndex = 0;
        $("#VsettingTableTd0").attr("class", "VsettingButtonFocus");
        $("#VsettingTableTd1").attr("class", "VsettingButton");
        $("#VsettingTableTd2").attr("class", "VsettingButton");
        $("#VsettingTableTd3").attr("class", "VsettingButton");
        $("#VsettingTableTd4").attr("class", "VsettingButton");
        model.mpctrl.PlayMovie(videoUrl);
//        try {
//            HiVideoPlayer.videoTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();
//        }
//        catch (e) {
//            debugE(e.message);
//        }
//        debugPrint("GET CURRENT TOTAL TIME IS : " + HiVideoPlayer.videoTotaltime);
        //需要重置屏幕分辨率选项,放到prepare_done中
        //model.mpctrl.setScreenPosition(0, 0, 1920, 1080);
        HiVideoPlayer.screenIndex = 0;
        HiVideoPlayer.subtitleIndex = 0;
        HiVideoPlayer.subtitleLanIndex = 0;
        $("#VsettingTableTd1").html(HiVideoPlayer.screenMode[HiVideoPlayer.screenIndex]);
        $("#VsettingTableTd3").html(HiVideoPlayer.subtitleLan[HiVideoPlayer.subtitleLanIndex]);

        //model.mpctrl.onMpCtrlPlaytimeCurrentchanged=HiVideoPlayer.getProgress();
        $("#videoPlayerPanel").css("visibility", "visible");
        try {
            debugPrint('clos MEMC when bar show');
            ctlr_memc_for_osd(0);
        }
        catch (ex) {
            debugE("clos MEMC ----" + ex.message);
        }
        $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
        if (HiVideoPlayer.videoPlayerFocus == 0)
            $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
        else
            $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
        HiVideoPlayer.playerStatus = 1;

//        if (!!HiVideoPlayer.progressInternal) {
//            clearInterval(HiVideoPlayer.progressInternal);
//        }
        // HiVideoPlayer.progressInternal = window.setInterval("HiVideoPlayer.getProgress()", 1000);
        HiVideoPlayer.isController = true;
        //$("#videoPlayer").data = videoUrl;

        //HiVideoPlayer.resolution = model.video.getFormatInfo().split("/")[0];
        $("#videoTitle").html('<span>' + videoName + '</span>');
        $("#VinfoTableTd1").html('<span>' + videoName + '</span>');
        $("#VinfoTableTd2").html('<span>' + HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize + " bytes" + '</span>');

//        debugPrint("get Error Code________________" + model.mpctrl.getMpCtrlError());
        clearTimeout(HiVideoPlayer.ControlTimer);
        HiVideoPlayer.ControlTimer = setTimeout(function () {
            HiVideoPlayer.hidePlayerPanel();
        }, 6000);
        //$("#VinfoTableTd4").html(HiVideoPlayer.resolution);
        //myVideo.onPlayStateChange = checkPlayState();
        //重置subtitleList
        HiVideoPlayer.subtitleList = [];

        //显示出Player界面
    }
};
HiVideoPlayer.playBack = function () {

    if (HiVideoPlayer.cIndex > 0) {
        HiVideoPlayer.cIndex = HiVideoPlayer.cIndex - 1;
        if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl != null && HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName != null)
            if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl != null && HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName != null) {
                if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize == "pvr") {
                    HiVideoPlayer.playPvr(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);

                }
                else {
                    HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);

                }
            }


//        if (HiVideoPlayer.playerStatus == 1)
//            myVideo.play();
//        else {//doError()
//        }
    }
    else {//doError()
        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang2[getCurrentLan()]["Already last file"], 3);

    }
};
HiVideoPlayer.playNext = function () {

    if (HiVideoPlayer.cIndex < HiVideoPlayer.videoList.length - 1) {
        HiVideoPlayer.cIndex = HiVideoPlayer.cIndex + 1;
        if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl != null && HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName != null) {
            if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize == "pvr") {
                HiVideoPlayer.playPvr(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);
            }
            else {
                HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);
            }
        }
//        if (HiVideoPlayer.playerStatus == 1)
//            myVideo.play();
//        else {//doError()
//        }
    }
    else {//doError()
        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang2[getCurrentLan()]["Already last file"], 3);
    }
};


HiVideoPlayer.videoPlayOrPause = function () {
    if (HiVideoPlayer.playerStatus == 0) {
        $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
        HiVideoPlayer.ffIndex = 0;
        HiVideoPlayer.frIndex = 0;
        changeFFClass();
        changeFRClass();
//        if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize == "pvr") {
//            model.hdr.setPlayerSpeed(4);
//        } else {
        model.mpctrl.setMpCtrlSpeed(1);
        debugE(model.mpctrl.getMpctrlInfo());
        //model.mpctrl.setSpeed(100);
//        }

        //       }
        $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
        HiVideoPlayer.playerStatus = 1;
    }
    else if (HiVideoPlayer.playerStatus == 1) {
//        if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize == "pvr") {
//            model.hdr.setPlayerSpeed(1);
//        } else {
        model.mpctrl.setMpCtrlSpeed(0);
//        }
        $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
        HiVideoPlayer.playerStatus = 0;

    }

};

HiVideoPlayer.videoStop = function () {
    debugPrint("STOP MPCTRL !!");
    model.mpctrl.StopMpctrl(null);
    //  model.mpctrl.MpCtrlRelease(null);
};

HiVideoPlayer.ff = function () {
    var canSpeed = model.mpctrl.getVideoPlayerCanSeek();
    debugPrint("canSpeed___:" + canSpeed);
    if (canSpeed) {
        if (HiVideoPlayer.playerStatus == 0) {
            //model.mpctrl.MpCtrlPlay(null);
            //model.mpctrl.setMpCtrlSpeed(1);
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/ff_status.png");
            //判断当前焦点位置

        } else if (HiVideoPlayer.playerStatus == 1) {
            if (HiVideoPlayer.videoPlayerFocus == 0)
                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
            else
                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
            HiVideoPlayer.playerStatus = 0;
        }

        debugPrint("NOW FF INDEX IS       " + HiVideoPlayer.ffIndex);
        if (HiVideoPlayer.ffIndex < 4) {
            HiVideoPlayer.ffIndex++;
        }
        else {
            HiVideoPlayer.ffIndex = 0;
            if (HiVideoPlayer.playerStatus == 0) {
                if (HiVideoPlayer.videoPlayerFocus == 0)
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                else
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
                $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
                HiVideoPlayer.playerStatus == 1;
            }
        }
        if (HiVideoPlayer.frIndex != 0) {
            HiVideoPlayer.frIndex = 0;
            changeFRClass();

        }
//    if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize == "pvr") {
//        model.hdr.setPlayerSpeed(HiVideoPlayer.pvrffSpeed[HiVideoPlayer.ffIndex]);
//    } else {
        debugPrint("now set Speed is :   " + HiVideoPlayer.ffSpeed[HiVideoPlayer.ffIndex]);
        model.mpctrl.setMpCtrlSpeed(HiVideoPlayer.ffSpeed[HiVideoPlayer.ffIndex]);
//    }
        changeFFClass();
    }
    else {
        //show Dailog
        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[cLanguage]["Time seek function is not support!"], 3);
    }


};
HiVideoPlayer.fr = function () {
    var canSpeed = model.mpctrl.getVideoPlayerCanSeek();
    debugPrint("canSpeed___:" + canSpeed);
    if (canSpeed) {
        if (HiVideoPlayer.playerStatus == 0) {
            //model.mpctrl.MpCtrlPlay(null);
           // model.mpctrl.setMpCtrlSpeed(1);
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/fr_status.png");

        } else if (HiVideoPlayer.playerStatus == 1) {
            if (HiVideoPlayer.videoPlayerFocus == 0)
                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
            else
                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
            HiVideoPlayer.playerStatus = 0;
        }
        if (HiVideoPlayer.frIndex < 4) {
            HiVideoPlayer.frIndex++;
        }
        else {
            HiVideoPlayer.frIndex = 0;
            if (HiVideoPlayer.playerStatus == 0) {
                if (HiVideoPlayer.videoPlayerFocus == 0)
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                else
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
                $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
                HiVideoPlayer.playerStatus == 1;
            }
        }
        if (HiVideoPlayer.ffIndex != 0) {
            HiVideoPlayer.ffIndex = 0;
            changeFFClass();
        }
        if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize == "pvr") {
            model.hdr.setPlayerSpeed(HiVideoPlayer.pvrfrSpeed[HiVideoPlayer.frIndex]);
        } else {
            model.mpctrl.setMpCtrlSpeed(HiVideoPlayer.frSpeed[HiVideoPlayer.frIndex]);
        }
        changeFRClass();
    }
    else {
        //show Dailog
        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[cLanguage]["Time seek function is not support!"], 3);
    }

//    var a = model.mpctrl.getMpCtrlPlaytimeTotal() * HiVideoPlayer.ffScale;
//    model.mpctrl.setMpCtrlPlaytimeCurrent(model.mpctrl.getMpCtrlPlaytimeCurrent() - a);
};
HiVideoPlayer.videoInfoShow = function () {
    HiVideoPlayer.dialogShowStatus = 4;
    if ('error' != model.mpctrl.getFormatInfo())
        $("#VinfoTableTd4").html(model.mpctrl.getFormatInfo());
    else
        $("#VinfoTableTd4").html("");
    if (!HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize) {
        if (!!model.mpctrl.getMpctrlInfo()[24])
            $("#VinfoTableTd2").html('<span>' + parseInt(model.mpctrl.getMpctrlInfo()[24] / 1024 / 1024) + " MB" + '</span>');
        else {
            $("#VinfoTableTd2").html('');

        }
    }
    debugPrint(model.mpctrl.getMpCtrlStat() + "GET STATE TEST");
    $("#videoInformation").css("display", "block");
    //var currentVideo = model.mpctrl.getMetadata();
    //debugPrint(currentVideo);


};
HiVideoPlayer.videoSettingShow = function () {
    $("#VsettingTableTd2").css("color", "#ffffff");
    $("#VsettingTableTd3").css("color", "#ffffff");
    $("#VsettingTableTd4").css("color", "#ffffff");
    HiVideoPlayer.dialogShowStatus = 3;
    //debugPrint(model.mpctrl.getFormatInfo() + "_____getFormatInfo");
    HiVideoPlayer.resolution = tv ? model.mpctrl.getFormatInfo() : "400*400";
    HiVideoPlayer.Vwidth = parseInt(HiVideoPlayer.resolution.split("*")[0]);
    HiVideoPlayer.Vheight = parseInt(HiVideoPlayer.resolution.split("*")[1]);
    if (HiVideoPlayer.subtitleList.length > 0) {
        $("#VsettingTableTd2").html(HiVideoPlayer.subtitleList[HiVideoPlayer.subtitleIndex]);
    }
    else {
        $("#VsettingTableTd2").html(subtitleLang[cLanguage]["None"]);
        $("#VsettingTableTd2").css("color", "#999999");
        $("#VsettingTableTd3").css("color", "#999999");

    }
    if (HiVideoPlayer.audioTrackList.length > 1) {
        $("#VsettingTableTd4").html(subtitleLang[cLanguage]["Audio Track"] + " " + (parseInt(HiVideoPlayer.audioTrackList[HiVideoPlayer.audioTrackIndex]) + 1));
    }
    else {
        $("#VsettingTableTd4").html(subtitleLang[cLanguage]["None"]);
        $("#VsettingTableTd4").css("color", "#999999");

    }
    //debugPrint("INFO_______________:" + model.video.getVideoFormatInfo());
    $("#videoSetting").css("display", "block");

};
HiVideoPlayer.videoTimeShow = function () {
//需要判断是否能设置速度
    HiVideoPlayer.dialogShowStatus = 1;
    $("#videoPlayTimeSetting").css("display", "block");

};
HiVideoPlayer.videoListShow = function () {
    HiVideoPlayer.jsb2 = null;
    $("#Vwrapper").html("");
    HiVideoPlayer.dialogShowStatus = 2;
    HiVideoPlayer.focusIndex = HiVideoPlayer.listIndex = 0;
    HiVideoPlayer.scrollBarFrom = 0;
    //滚动条无法记忆，改为每次进入都放在第一个
//    HiVideoPlayer.focusIndex = 0;
//    HiVideoPlayer.listIndex = 0;
//    if (HiVideoPlayer.scrollBarFrom != 0) {
//        HiVideoPlayer.scrollBarFrom = 0;
//        $('#Vwrapper').jscrollbar('getObject').scrollTo('y', HiVideoPlayer.scrollBarFrom);
//    }
//    $("#video_list_focus").css("top", 123);
    $("#videoList").css("display", "block");
    var VplayList = '<ul id="thelist">';
    for (var i = 0; i < HiVideoPlayer.videoList.length; i++)
        VplayList = VplayList + '<li><div>' + HiVideoPlayer.videoList[i].videoName + '</div></li>';
    VplayList = VplayList + '</ul>';
    $("#Vwrapper").html(VplayList);
    $('#Vwrapper').jscrollbar({
        width: 4, //滚动条宽度
        color: '#414e5d', //滚动条颜色
        opacity: 0.7, //透明度
        position: 'inner',//滚动条位置
        //  mouseScrollDirection: 'horizontal',
        showXBar: false,
        keyControl: false,
        showYBar: true


    });
    HiVideoPlayer.jsb2 = $('#Vwrapper').jscrollbar('getObject');
    if (HiVideoPlayer.cIndex < 7) {
        HiVideoPlayer.focusIndex = HiVideoPlayer.listIndex = HiVideoPlayer.cIndex;
        $("#video_list_focus").css("top", 123 + 96 * HiVideoPlayer.cIndex);
    }
    else {
        HiVideoPlayer.listIndex = HiVideoPlayer.cIndex;
        HiVideoPlayer.scrollBarFrom = HiVideoPlayer.scrollBarFrom + 96 * (HiVideoPlayer.cIndex - 6);
        debugPrint("_________________" + HiVideoPlayer.scrollBarFrom);
        $("#video_list_focus").css("top", 123 + 96 * 6);
        HiVideoPlayer.focusIndex = 6;
        try {
            HiVideoPlayer.listPageChange(HiVideoPlayer.scrollBarFrom);
        } catch (e) {
            debugE(e.message);
        }
    }


};


HiVideoPlayer.getTimeText = function (c) {
    var d = Math.floor(c);
    var b = Math.floor(d / 3600);
    var e = Math.floor((d % 3600) / 60);
    var a = Math.floor(d % 60);
    if (b > 100)
        return HiVideoPlayer.formatTimeHMS(0, 0, 0);
    else
        return HiVideoPlayer.formatTimeHMS(b, e, a);
};
HiVideoPlayer.formatTimeHMS = function (c, a, b) {
    return HiVideoPlayer.checkTime(c) + ":" + HiVideoPlayer.checkTime(a) + ":" + HiVideoPlayer.checkTime(b);
};
HiVideoPlayer.getProgress = function (currentTime) {

    //var currentTime = model.mpctrl.getMpCtrlPlaytimeCurrent();
    var totalTime = 0;

    //debugPrint("cur____" + currentTime + "_total___" + totalTime);
    totalTime = HiVideoPlayer.videoTotaltime;
    $("#startTime").text(HiVideoPlayer.getTimeText(currentTime));
//    $("#endTime").html(HiVideoPlayer.getTimeText(totalTime));
//    $("#VinfoTableTd3").html(HiVideoPlayer.getTimeText(totalTime));
//    $("#PlayTime_3").html("/ " + HiVideoPlayer.getTimeText(totalTime));

    if (totalTime != 0) {
        HiVideoPlayer.progressWidth = Math.floor(1510 * currentTime / totalTime);
    }
    else {
        HiVideoPlayer.progressWidth = 0;
    }
    $("#vpb").css("width", HiVideoPlayer.progressWidth + "px");
};
//**************PVR*****BAR*******************//
HiVideoPlayer.getPVRProgress = function () {
    var currentTime = model.hdr.getCursorTime();
    var totalTime = model.hdr.getBarEndTime();
    HiVideoPlayer.videoTotaltime = totalTime;
    $("#startTime").html(HiVideoPlayer.getTimeText(currentTime));
    $("#endTime").html(HiVideoPlayer.getTimeText(totalTime));
    // $("#VinfoTableTd3").html(HiVideoPlayer.getTimeText(totalTime));
    //$("#PlayTime_3").html(HiVideoPlayer.getTimeText(totalTime));
    HiVideoPlayer.progressWidth = Math.floor(1510 * currentTime / totalTime);
    $("#vpb").css("width", HiVideoPlayer.progressWidth + "px");
};
HiVideoPlayer.checkTime = function (a) {
    return(a < 10 ? "0" : "") + a;
};
HiVideoPlayer.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
var cLanguage;
HiVideoPlayer.initLanguage = function () {
    //初始化多语言
    cLanguage = getCurrentLan();
    hiWebOsFrame.setLanguage(cLanguage);
    $("#videoInformationTitle").html(playerLang[cLanguage]["Information"]);//info
    $("#videoName").html(playerLang[cLanguage]["Name:"]);
    $("#videoSize").html(playerLang[cLanguage]["File Size:"]);
    $("#videoDuration").html(playerLang[cLanguage]["Duration:"]);//duration
    $("#videoResolution").html(playerLang[cLanguage]["Resolution:"]);
    $("#videoSettingTitle").html(playerLang[cLanguage]["Advanced Settings"]);//setting
    $("#repeatMode").html(playerLang[cLanguage]["Repeat mode"]);
    $("#zoomMode").html(playerLang[cLanguage]["Zoom mode"]);
    $("#videoPlayTimeTitle").html(playerLang[cLanguage]["Time select play"]);//Playing Time
    $("#playtimeItem").html(playerLang[cLanguage]["Set the start time of play with the help of numerical key on the remote control"]);//Use the number ke
    $("#videoListTitle").html(playerLang[cLanguage]["Play List"]);//
    $("#subtitle").html(subtitleLang[cLanguage]["Subtitle"]);
    $("#subtitleLan").html(subtitleLang[cLanguage]["Subtitle Language"]);
    $("#audioTrack").html(subtitleLang[cLanguage]["Audio Track"]);
    switch (HiVideoPlayer.repeatIndex) {
        case 0:
            $("#VsettingTableTd0").html(playerLang[cLanguage]["Once"]);
            break;
        case 1:
            $("#VsettingTableTd0").html(playerLang[cLanguage]["All"]);
            break;
        case 2:
            $("#VsettingTableTd0").html(playerLang[cLanguage]["Single"]);
            break;
        default:
            break;
    }
    switch (HiVideoPlayer.screenIndex) {
        case 1:
            $("#VsettingTableTd1").html(playerLang[cLanguage]["Full Screen"]);
            break;
        case 0:
            $("#VsettingTableTd1").html(playerLang[cLanguage]["Normal"]);
            break;
        case 2:
            $("#VsettingTableTd1").html(playerLang[cLanguage]["Original Size"]);
            break;
        default:
            break;
    }
    if (HiVideoPlayer.isISR) {
        switch (HiVideoPlayer.subtitleLanIndex) {
            case 0:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Default"]);
                break;
            case 1:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Hebrew"]);
                break;
            case 2:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Western"]);
                break;
            case 3:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Central European"]);
                break;
            case 4:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Arabic"]);
                break;
            case 5:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Chinese Simplified"]);
                break;
            case 6:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Cyrillic"]);
                break;
            default:
                break;
        }
        ;
        HiVideoPlayer.subtitleLan = [subtitleLang[cLanguage]["Default"], subtitleLang[cLanguage]["Hebrew"],
            subtitleLang[cLanguage]["Western"], subtitleLang[cLanguage]["Central European"], subtitleLang[cLanguage]["Arabic"],
            subtitleLang[cLanguage]["Chinese Simplified"], subtitleLang[cLanguage]["Cyrillic"]];
    } else {
        switch (HiVideoPlayer.subtitleLanIndex) {
            case 0:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Default"]);
                break;
            case 1:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Western"]);
                break;
            case 2:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Central European"]);
                break;
            case 3:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Arabic"]);
                break;
            case 4:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Chinese Simplified"]);
                break;
            case 5:
                $("#VsettingTableTd3").html(subtitleLang[cLanguage]["Cyrillic"]);
                break;
            default:
                break;
        }
        ;
        HiVideoPlayer.subtitleLan = [subtitleLang[cLanguage]["Default"],
            subtitleLang[cLanguage]["Western"], subtitleLang[cLanguage]["Central European"], subtitleLang[cLanguage]["Arabic"],
            subtitleLang[cLanguage]["Chinese Simplified"], subtitleLang[cLanguage]["Cyrillic"]];
    }
    //$("#VsettingTableTd0").html(playerLang[cLanguage].once);//
    //$("#VsettingTableTd1").html(playerLang[cLanguage].full);
    if (HiVideoPlayer.subtitleList.length > 0) {
        switch (HiVideoPlayer.subtitleIndex) {
            case 0:
                $("#VsettingTableTd2").html(subtitleLang[cLanguage]["Off"]);
                break;

            default:
                break;
        }
        HiVideoPlayer.subtitleList[0] = subtitleLang[cLanguage]["Off"];
    }


    HiVideoPlayer.repeateMode = [playerLang[cLanguage]["Once"], playerLang[cLanguage]["All"], playerLang[cLanguage]["Single"]];
    HiVideoPlayer.screenMode = [playerLang[cLanguage]["Normal"],playerLang[cLanguage]["Full Screen"],  playerLang[cLanguage]["Original Size"]];
    if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $("#videoPlayerDiv ul li").css("float", "left");
        $(".videoPlayerController").css("left", "400px");
        $(".Vinfoleft").css("text-align", "right");
    }
    else {
        $("#videoPlayerDiv ul li").css("float", "right");
        $(".videoPlayerController").css("right", "400px");
        $(".Vinfoleft").css("text-align", "left");
    }
}
HiVideoPlayer.init = function (videoList, cIndex) {
    HiVideoPlayer.videoPlayerFocus = 0;
    HiVideoPlayer.listIndex = 0;
    HiVideoPlayer.focusIndex = 0;
    HiVideoPlayer.settingIndex = 0;
    //清零标志位
    HiVideoPlayer.repeatIndex = 0;
    HiVideoPlayer.screenIndex = 0;
    HiVideoPlayer.subtitleIndex = 0;
    HiVideoPlayer.subtitleLanIndex = 0;
    HiVideoPlayer.audioTrackIndex = 0;
    HiVideoPlayer.inputPwdFocusIndex = 1;
    HiVideoPlayer.timeFocus = 0;
    HiVideoPlayer.ffIndex = 0;
    HiVideoPlayer.frIndex = 0;
    var url = videoList[cIndex].videoUrl;
    var name = videoList[cIndex].videoName;
    HiVideoPlayer.videoList = videoList;
    HiVideoPlayer.cIndex = cIndex;
    //初始视频播放器时关闭3D
    try {
        ctlr_memc_for_osd(3);
        //close 3D
        var pic3DMode = model.video.getEnum3dMode();
        var countrycode = model.basicSetting.getTvsetLocation();
        DBG_ALWAYS("countrycode IS " + countrycode);
        debugPrint("current 3D mode is :" + pic3DMode);
        if (pic3DMode != 0 && pic3DMode != 1) {
            debugPrint("[UI] UI need to close 3D mode!", DebugLevel.ALWAYS);
            model.video.setEnum3dMode(0);
            model.video.set3dDepth(4);
            model.video.set3dViewPoint(8);
        }
        if (countrycode == "ISR") {
            HiVideoPlayer.isISR = true;
        } else {
            HiVideoPlayer.isISR = false;
        }
    }
    catch (ex) {
        debugE(ex.message);
    }
    //HiVideoPlayer.jsb2 = $('#Vwrapper').jscrollbar('getObject');
    HiVideoPlayer.focusTop = 123;
    // debugPrint("init_data", fileName + "  " + cIndex);
//    model.onModelReady = onModelReady;
//    model.initialize();
//    $("#homebody").css("display", "none");
//    $("#videoPlayerDiv").css("display", "block");
    debugPrint("Vinit_____" + name);
    //*****************************暂时使用fileSize来区别pvr和普通视频**********//
    //debugPrint("miniType_____" + videoList[cIndex].mime_type);
    if (videoList[cIndex].fileSize == "pvr") {
        HiVideoPlayer.playPvr(url, name);
    }
    else
    //**************************修改结束**********************************//
        HiVideoPlayer.playVideoByUrl(url, name);
};
HiVideoPlayer.listPageChange = function (to) {
    HiVideoPlayer.jsb2.scrollTo('y', to);

};
HiVideoPlayer.hidePlayerPanel = function () {
    $("#videoPlayerPanel").css("visibility", "hidden");
    $("#videoPlayTimeSetting").css("display", "none");
    $("#videoList").css("display", "none");
    $("#videoSetting").css("display", "none");
    $("#videoInformation").css("display", "none");
    HiVideoPlayer.dialogShowStatus = 0;
    HiVideoPlayer.isController = false;
    if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
        try {
            if (model.system.getReturnlocalappFlag() != 14) {
                debugPrint('open MEMC when bar hide');
                ctlr_memc_for_osd(1);
            }
        }
        catch (ex) {
            debugE("open MEMC ----" + ex.message);
        }
    }
}

HiVideoPlayer.keydownhander = function (event) {
//    if (launcher_player_switch != 1) {
//        return false;
//    }

    event = event || window.event;
    if (!!HiVideoPlayer.ControlTimer && HiVideoPlayer.isController) {
        //任何键按下后清空留秒计时
        debugPrint("clear Timer");
        clearTimeout(HiVideoPlayer.ControlTimer);
        HiVideoPlayer.ControlTimer = setTimeout(function () {
            HiVideoPlayer.hidePlayerPanel();
        }, 6000);
    }

    var key = checkDMPkeycode(event.keyCode);
    switch (key) {
        case VK_ENTER:
            debugPrint("HiVideoPlayer.videoPlayerFocus" + HiVideoPlayer.videoPlayerFocus);
            if (HiVideoPlayer.isController) {
                switch (parseInt(HiVideoPlayer.dialogShowStatus)) {
                    case 0:
                        switch (HiVideoPlayer.videoPlayerFocus) {
                            case 0:
                                HiVideoPlayer.videoPlayOrPause();
                                break;
                            case 1:
                                HiVideoPlayer.playBack();
                                break;
                            case 2:
                                HiVideoPlayer.playNext();
                                break;
                            case 3:
                                HiVideoPlayer.fr();
                                break;
                            case 4:
                                HiVideoPlayer.ff();
                                break;
                            case 5:
                                var canSpeed = model.mpctrl.getVideoPlayerCanSeek();
                                debugPrint("canSpeed___:" + canSpeed);
                                if (canSpeed && (HiVideoPlayer.ffIndex == 0) && (HiVideoPlayer.frIndex == 0)) {
                                    HiVideoPlayer.videoTimeShow();
                                }
                                else {
                                    //show Dailog
                                    toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[cLanguage]["Time seek function is not support!"], 3);
                                }
                                break;
                            case 6:
                                HiVideoPlayer.videoListShow();
                                break;
                            case 7:
                                HiVideoPlayer.videoSettingShow();
                                break;
                            case 8:
                                HiVideoPlayer.videoInfoShow();
                                break;


                            default :
                                break;
                        }
                        break;
                    case 1:
                        var userHour = parseInt($("#PlayTime_0").text(), 10);
                        debugPrint($("#PlayTime_1").text() + "----------------");
                        var userMin = parseInt($("#PlayTime_1").text(), 10);
                        var userSec = parseInt($("#PlayTime_2").text(), 10);
                        var userTime = userHour * 3600 + userMin * 60 + userSec;
                        debugPrint("H:" + userHour + "M:" + userMin + "S:" + userSec);
                        if (userMin < 60 && userSec < 60 && userTime < HiVideoPlayer.videoTotaltime) {
                            debugPrint("usertime is    :   " + userTime);
                            model.mpctrl.setMpCtrlPlaytimeCurrent(userTime);

                        }
                        else {
                            //do error show: Wrong Time Input!
                            $("#playtimeError").html(playerLang[getCurrentLan()]["Time setting error!\nContinue?"].split("\n")[0]);
                            setTimeout(function () {
                                $("#playtimeError").html("")
                            }, 3000);

                        }
                        break;
                    case 2:
                        //list确定操作
                        if (HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize == "pvr") {
                            HiVideoPlayer.playPvr(HiVideoPlayer.videoList[HiVideoPlayer.listIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.listIndex].videoName);

                        } else {
                            HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.listIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.listIndex].videoName);
                        }//需要同步当前播放Index
                        HiVideoPlayer.cIndex = HiVideoPlayer.listIndex;
                        $("#videoList").css("display", "none");

                        HiVideoPlayer.dialogShowStatus = 0;
                        break;
                    case 3:
                        //setting确定操作
                        switch (HiVideoPlayer.settingIndex) {
                            case 0:
                                HiVideoPlayer.repeatIndex++;
                                if (HiVideoPlayer.repeatIndex >= (HiVideoPlayer.repeateMode.length))
                                    HiVideoPlayer.repeatIndex = 0;
                                $("#VsettingTableTd" + HiVideoPlayer.settingIndex).html(HiVideoPlayer.repeateMode[HiVideoPlayer.repeatIndex]);

                                break;
                            case 1:
                                //添加对3D模式的屏蔽
                                var pic3DMode = 0;
                                try {
                                    pic3DMode = model.video.getEnum3dMode();
                                } catch (ex) {
                                    DBG_ERROR(ex.message);
                                }
                                if (pic3DMode == 0) {
                                    HiVideoPlayer.screenIndex++;
                                    if (HiVideoPlayer.screenIndex >= (HiVideoPlayer.screenMode.length ))
                                        HiVideoPlayer.screenIndex = 0;
                                    $("#VsettingTableTd" + HiVideoPlayer.settingIndex).html(HiVideoPlayer.screenMode[HiVideoPlayer.screenIndex]);

                                    switch (HiVideoPlayer.screenIndex) {
                                        case 1:
                                            model.mpctrl.setScreenPosition(0, 0, 1920, 1080);
                                            break;
                                        case 0:
                                            if (HiVideoPlayer.Vheight <= 1080 && HiVideoPlayer.Vwidth <= 1920) {
                                                var wh = HiVideoPlayer.Vwidth / HiVideoPlayer.Vheight;
                                                if (wh < 1920 / 1080) {
                                                    var w1 = 1080 * wh;
                                                    var x1 = (1920 - w1) / 2;
                                                    model.mpctrl.setScreenPosition(x1, 0, w1, 1080);
                                                } else if (wh > 1920 / 1080) {
                                                    var h1 = 1920 / wh;
                                                    var y1 = (1080 - h1) / 2;
                                                    model.mpctrl.setScreenPosition(0, y1, 1920, h1);
                                                } else {
                                                    model.mpctrl.setScreenPosition(0, 0, 1920, 1080);
                                                }
                                            }
                                            break;
                                        case 2:
                                            if (HiVideoPlayer.Vheight <= 1080 && HiVideoPlayer.Vwidth <= 1920) {
                                                var x2 = (1920 - HiVideoPlayer.Vwidth) / 2;
                                                var y2 = (1080 - HiVideoPlayer.Vheight) / 2;
                                                model.mpctrl.setScreenPosition(x2, y2, HiVideoPlayer.Vwidth, HiVideoPlayer.Vheight);
                                            }

                                            break;
                                        default:
                                            break;
                                    }
                                } else {
                                    toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[getCurrentLan()]["Not available"], 3);

                                }
                                break;
                            case 2:
                                if (HiVideoPlayer.subtitleList.length > 0) {
                                    HiVideoPlayer.subtitleIndex++;
                                    if (HiVideoPlayer.subtitleIndex >= (HiVideoPlayer.subtitleList.length))
                                        HiVideoPlayer.subtitleIndex = 0;
                                    $("#VsettingTableTd" + HiVideoPlayer.settingIndex).html(HiVideoPlayer.subtitleList[HiVideoPlayer.subtitleIndex]);
                                    try {
                                        debugPrint("[videoPlayer] Try to set player subtitle to " + HiVideoPlayer.subtitleIndex)
                                        if (HiVideoPlayer.subtitleIndex == 0) {
                                            if (!pvrIsPlaying) {
                                                model.mpctrl.setMpCtrlSubtitleNo(65535);
                                            }
                                            else {
                                                model.mpctrl.setMpCtrlPvrSubtitleNo(65535);
                                            }
                                        }
                                        else {
                                            if (!pvrIsPlaying) {
                                                model.mpctrl.setMpCtrlSubtitleNo(HiVideoPlayer.subtitleIndex - 1);
                                            }
                                            else {
                                                //添加PVR新的逻辑包括两部分字幕普通字幕和图文字幕，优先普通字幕
                                                //需要先关一下字幕
                                                try {
                                                    model.mpctrl.setMpCtrlSubtitleNo(65535);
                                                    model.mpctrl.setMpCtrlPvrSubtitleNo(65535);
                                                } catch (ex) {
                                                    DBG_ERROR("PVR Subtitle error!" + ex.message);
                                                }
                                                var subtileTotalNo = model.mpctrl.getMpCtrlSubtitleTotalNo();
                                                var subtileTotalNo_pvr = model.mpctrl.getMpCtrlPvrSubtitleTotalNo();
                                                DBG_ALWAYS("PVR SUBTITLE:subtileTotalNo is " + subtileTotalNo +
                                                    "  subtileTotalNo_pvr is : " + subtileTotalNo_pvr +
                                                    "  subtitleIndex:" + HiVideoPlayer.subtitleIndex);
                                                if (subtileTotalNo > 0) {
                                                    if (subtileTotalNo_pvr > 0) {
                                                        if (HiVideoPlayer.subtitleIndex > subtileTotalNo) {
                                                            model.mpctrl.setMpCtrlPvrSubtitleNo(HiVideoPlayer.subtitleIndex - subtileTotalNo - 1);
                                                        } else {
                                                            model.mpctrl.setMpCtrlSubtitleNo(HiVideoPlayer.subtitleIndex - 1);
                                                        }

                                                    }
                                                    else {
                                                        model.mpctrl.setMpCtrlSubtitleNo(HiVideoPlayer.subtitleIndex - 1);
                                                    }
                                                } else {
                                                    model.mpctrl.setMpCtrlPvrSubtitleNo(HiVideoPlayer.subtitleIndex - 1);
                                                }
                                            }
                                        }
                                        //增加逻辑，每次切换多字幕是把字幕语言设为DEFAULT
                                        if (HiVideoPlayer.subtitleLanIndex != 0) {
                                            HiVideoPlayer.subtitleLanIndex = 0;
                                            $("#VsettingTableTd3").html(HiVideoPlayer.subtitleLan[HiVideoPlayer.subtitleLanIndex]);

                                        }
                                    }
                                    catch (ex) {
                                        debugE(ex.message);
                                    }
                                }
                                //字幕
                                break;
                            case 3:
                                //字幕语言
                                HiVideoPlayer.subtitleLanIndex++;
                                if (HiVideoPlayer.subtitleLanIndex >= (HiVideoPlayer.subtitleLan.length))
                                    HiVideoPlayer.subtitleLanIndex = 0;
                                $("#VsettingTableTd" + HiVideoPlayer.settingIndex).
                                    html(HiVideoPlayer.subtitleLan[HiVideoPlayer.subtitleLanIndex]);
                                try {
                                    debugPrint("[videoPlayer] Try to set player encode to " + HiVideoPlayer.subtitleLanIndex);
                                    if (HiVideoPlayer.isISR) {
                                        switch (HiVideoPlayer.subtitleLanIndex) {
                                            case 0:
                                                model.mpctrl.setMpCtrlSubtitleEncode(100);
                                                break;
                                            case 1:
                                                model.mpctrl.setMpCtrlSubtitleEncode(118);
                                                break;
                                            case 2:
                                                model.mpctrl.setMpCtrlSubtitleEncode(102);
                                                break;
                                            case 3:
                                                model.mpctrl.setMpCtrlSubtitleEncode(105);
                                                break;
                                            case 4:
                                                model.mpctrl.setMpCtrlSubtitleEncode(113);
                                                break;
                                            case 5:
                                                model.mpctrl.setMpCtrlSubtitleEncode(128);
                                                break;
                                            case 6:
                                                model.mpctrl.setMpCtrlSubtitleEncode(111);
                                                break;
                                            default :
                                                break;

                                        }
                                    } else {
                                        switch (HiVideoPlayer.subtitleLanIndex) {
                                            case 0:
                                                model.mpctrl.setMpCtrlSubtitleEncode(100);
                                                break;
                                            case 1:
                                                model.mpctrl.setMpCtrlSubtitleEncode(102);
                                                break;
                                            case 2:
                                                model.mpctrl.setMpCtrlSubtitleEncode(105);
                                                break;
                                            case 3:
                                                model.mpctrl.setMpCtrlSubtitleEncode(113);
                                                break;
                                            case 4:
                                                model.mpctrl.setMpCtrlSubtitleEncode(128);
                                                break;
                                            case 5:
                                                model.mpctrl.setMpCtrlSubtitleEncode(111);
                                                break;
                                            default :
                                                break;

                                        }


                                    }
                                }
                                catch (ex) {
                                    debugE(ex.message);
                                }
                                break;
                            case 4:
                                //音轨相关
                                DBG_ALWAYS("AUDIO TRACK CHANGED!");
                                try {
                                    if (HiVideoPlayer.audioTrackList.length > 0) {
                                        HiVideoPlayer.audioTrackIndex++;
                                        if (HiVideoPlayer.audioTrackIndex >= (HiVideoPlayer.audioTrackList.length)) {
                                            HiVideoPlayer.audioTrackIndex = 0;
                                        }
                                        $("#VsettingTableTd4").
                                            html(subtitleLang[cLanguage]["Audio Track"] + " " + (parseInt(HiVideoPlayer.audioTrackList[HiVideoPlayer.audioTrackIndex]) + 1));
                                        try {
                                            debugPrint("[videoPlayer] Try to set player audioTrack to " + HiVideoPlayer.audioTrackIndex);
                                            model.mpctrl.setMpCtrlAudioTrack(HiVideoPlayer.audioTrackIndex);
                                        }
                                        catch (ex) {
                                            debugE(ex.message);
                                        }
                                    }
                                } catch (ex) {
                                    DBG_ERROR(ex.message);
                                }
                                //字幕
                                break;
                        }
                        break;

                    default :
                        break;
                }
            }
            else {
                if (HiVideoPlayer.dialogShowStatus != 5) {
                    $("#videoPlayerPanel").css("visibility", "visible");
                    try {
                        debugPrint('clos MEMC when bar show');
                        ctlr_memc_for_osd(0);
                    }
                    catch (ex) {
                        debugE("clos MEMC ----" + ex.message);
                    }
                    HiVideoPlayer.isController = true;
                    debugPrint("clear Timer");
                    clearTimeout(HiVideoPlayer.ControlTimer);
                    HiVideoPlayer.ControlTimer = setTimeout(function () {
                        HiVideoPlayer.hidePlayerPanel();
                    }, 6000);
                }

            }
            break;
        case VK_RIGHT:
            if (HiVideoPlayer.isController) {
                if (HiVideoPlayer.dialogShowStatus == 0)
                    switch (HiVideoPlayer.videoPlayerFocus) {
                        case 0:
                            if (HiVideoPlayer.playerStatus == 1) {
                                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
                            }
                            else if (HiVideoPlayer.playerStatus == 0) {
                                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                            }
                            $("#videoPlayerButton2").attr("src", "img/himedia/videoPlayer/last2.png");
                            HiVideoPlayer.videoPlayerFocus++;
                            break;
                        case 1:
                            $("#videoPlayerButton2").attr("src", "img/himedia/videoPlayer/last1.png");
                            $("#videoPlayerButton3").attr("src", "img/himedia/videoPlayer/next2.png");
                            HiVideoPlayer.videoPlayerFocus++;
                            break;
                        case 2:
                            HiVideoPlayer.videoPlayerFocus++;
                            if (HiVideoPlayer.frIndex != 0 || HiVideoPlayer.ffIndex != 0)
                                changeFRClass();
                            else
                                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/fr2.png");

                            $("#videoPlayerButton3").attr("src", "img/himedia/videoPlayer/next1.png");

                            break;
                        case 3:
                            HiVideoPlayer.videoPlayerFocus++;
                            if (HiVideoPlayer.frIndex != 0 || HiVideoPlayer.ffIndex != 0) {
                                changeFFClass();
                                changeFRClass();
                            } else {
                                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/ff2.png");
                                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/fr1.png");
                            }

                            break;
                        case 4:
                            HiVideoPlayer.videoPlayerFocus++;
                            $("#videoPlayerButton6").attr("src", "img/himedia/videoPlayer/clock2.png");
                            if (HiVideoPlayer.frIndex != 0 || HiVideoPlayer.ffIndex != 0)
                                changeFFClass();
                            else
                                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/ff1.png");

                            break;
                        case 5:
                            $("#videoPlayerButton7").attr("src", "img/himedia/videoPlayer/list2.png");
                            $("#videoPlayerButton6").attr("src", "img/himedia/videoPlayer/clock1.png");
                            HiVideoPlayer.videoPlayerFocus++;
                            break;
                        case 6:
                            $("#videoPlayerButton8").attr("src", "img/himedia/videoPlayer/setting2.png");
                            $("#videoPlayerButton7").attr("src", "img/himedia/videoPlayer/list1.png");
                            HiVideoPlayer.videoPlayerFocus++;
                            break;
                        case 7:
                            $("#videoPlayerButton9").attr("src", "img/himedia/videoPlayer/info2.png");
                            $("#videoPlayerButton8").attr("src", "img/himedia/videoPlayer/setting1.png");
                            HiVideoPlayer.videoPlayerFocus++;
                            break;
                        default :
                            break;
                    }
                else if (HiVideoPlayer.dialogShowStatus == 1) {
                    switch (HiVideoPlayer.timeFocus) {
                        case 0:
                            HiVideoPlayer.timeStr = [0, 0];
                            $("#PlayTime_0").removeClass("PlayTime_focus").addClass("PlayTime");
                            $("#PlayTime_1").removeClass("PlayTime").addClass("PlayTime_focus");
                            HiVideoPlayer.timeFocus++;
                            break;
                        case 1:
                            HiVideoPlayer.timeStr = [0, 0];
                            $("#PlayTime_1").removeClass("PlayTime_focus").addClass("PlayTime");
                            $("#PlayTime_2").removeClass("PlayTime").addClass("PlayTime_focus");
                            HiVideoPlayer.timeFocus++;
                            break;
                        default :
                            break;
                    }
                }
            }
            else {
                if (HiVideoPlayer.dialogShowStatus != 5) {
                    $("#videoPlayerPanel").css("visibility", "visible");
                    try {
                        debugPrint('clos MEMC when bar show');
                        ctlr_memc_for_osd(0);
                    }
                    catch (ex) {
                        debugE("clos MEMC ----" + ex.message);
                    }
                    HiVideoPlayer.isController = true;
                    debugPrint("clear Timer");
                    clearTimeout(HiVideoPlayer.ControlTimer);
                    HiVideoPlayer.ControlTimer = setTimeout(function () {
                        HiVideoPlayer.hidePlayerPanel();
                    }, 6000);
                }

            }
            break;
        case
        VK_LEFT:
            if (HiVideoPlayer.isController) {
                if (HiVideoPlayer.dialogShowStatus == 0)
                    switch (HiVideoPlayer.videoPlayerFocus) {
                        case 1:
                            if (HiVideoPlayer.playerStatus == 1) {
                                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                            }
                            else if (HiVideoPlayer.playerStatus == 0) {
                                $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                            }
                            $("#videoPlayerButton2").attr("src", "img/himedia/videoPlayer/last1.png");
                            HiVideoPlayer.videoPlayerFocus--;
                            break;
                        case 2:
                            $("#videoPlayerButton2").attr("src", "img/himedia/videoPlayer/last2.png");
                            $("#videoPlayerButton3").attr("src", "img/himedia/videoPlayer/next1.png");
                            HiVideoPlayer.videoPlayerFocus--;
                            break;
                        case 3:
                            HiVideoPlayer.videoPlayerFocus--;
                            if (HiVideoPlayer.frIndex != 0 || HiVideoPlayer.ffIndex != 0)
                                changeFRClass();
                            else
                                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/fr1.png");

                            $("#videoPlayerButton3").attr("src", "img/himedia/videoPlayer/next2.png");

                            break;
                        case 4:
                            HiVideoPlayer.videoPlayerFocus--;
                            // $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/ff1.png");
                            if (HiVideoPlayer.frIndex != 0 || HiVideoPlayer.ffIndex != 0) {
                                changeFFClass();
                                changeFRClass();
                            } else {
                                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/fr2.png");
                                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/ff1.png");
                            }

                            break;
                        case 5:
                            HiVideoPlayer.videoPlayerFocus--;
                            $("#videoPlayerButton6").attr("src", "img/himedia/videoPlayer/clock1.png");
                            if (HiVideoPlayer.frIndex != 0 || HiVideoPlayer.ffIndex != 0)
                                changeFFClass();
                            else
                                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/ff2.png");

                            break;
                        case 6:
                            $("#videoPlayerButton7").attr("src", "img/himedia/videoPlayer/list1.png");
                            $("#videoPlayerButton6").attr("src", "img/himedia/videoPlayer/clock2.png");
                            HiVideoPlayer.videoPlayerFocus--;
                            break;
                        case 7:
                            $("#videoPlayerButton8").attr("src", "img/himedia/videoPlayer/setting1.png");
                            $("#videoPlayerButton7").attr("src", "img/himedia/videoPlayer/list2.png");
                            HiVideoPlayer.videoPlayerFocus--;
                            break;
                        case 8:

                            $("#videoPlayerButton9").attr("src", "img/himedia/videoPlayer/info1.png");
                            $("#videoPlayerButton8").attr("src", "img/himedia/videoPlayer/setting2.png");
                            HiVideoPlayer.videoPlayerFocus--;
                            break;
                        default :
                            break;
                    }
                else if (HiVideoPlayer.dialogShowStatus == 1) {
                    switch (HiVideoPlayer.timeFocus) {
                        case 1:
                            HiVideoPlayer.timeStr = [0, 0];
                            $("#PlayTime_1").removeClass("PlayTime_focus").addClass("PlayTime");
                            $("#PlayTime_0").removeClass("PlayTime").addClass("PlayTime_focus");
                            HiVideoPlayer.timeFocus--;
                            break;
                        case 2:
                            HiVideoPlayer.timeStr = [0, 0];
                            $("#PlayTime_2").removeClass("PlayTime_focus").addClass("PlayTime");
                            $("#PlayTime_1").removeClass("PlayTime").addClass("PlayTime_focus");
                            HiVideoPlayer.timeFocus--;
                            break;
                        default :
                            break;
                    }
                }
            }
            else {
                if (HiVideoPlayer.dialogShowStatus != 5) {
                    $("#videoPlayerPanel").css("visibility", "visible");
                    try {
                        debugPrint('clos MEMC when bar show');
                        ctlr_memc_for_osd(0);
                    }
                    catch (ex) {
                        debugE("clos MEMC ----" + ex.message);
                    }
                    HiVideoPlayer.isController = true;
                    debugPrint("clear Timer");
                    clearTimeout(HiVideoPlayer.ControlTimer);
                    HiVideoPlayer.ControlTimer = setTimeout(function () {
                        HiVideoPlayer.hidePlayerPanel();
                    }, 6000);
                }

            }
            break;
        case VK_UP:
            if (HiVideoPlayer.isController) {
                switch (HiVideoPlayer.dialogShowStatus) {
                    case 1:
                        break;
                    case 2:
                        debugPrint("listIndex:  " + HiVideoPlayer.listIndex + "    focusIndex:  " +
                            HiVideoPlayer.focusIndex + "   scrollBarFrom:  " + HiVideoPlayer.scrollBarFrom);
                        if (HiVideoPlayer.listIndex > 0) {

                            HiVideoPlayer.listIndex--;
                            if (HiVideoPlayer.focusIndex > 0) {
                                HiVideoPlayer.focusIndex--;
                                debugPrint(HiVideoPlayer.focusIndex);
                                HiVideoPlayer.listTop = HiVideoPlayer.focusTop + 96 * HiVideoPlayer.focusIndex;
                                $("#video_list_focus").css("top", HiVideoPlayer.listTop);
                            }
                            else if (HiVideoPlayer.focusIndex == 0 && HiVideoPlayer.scrollBarFrom > 0) {
                                HiVideoPlayer.scrollBarFrom = HiVideoPlayer.scrollBarFrom - 96;
                                try {
                                    HiVideoPlayer.listPageChange(HiVideoPlayer.scrollBarFrom);
                                } catch (e) {
                                    debugE(e.message);
                                }
                            }
                        }
                        break;
                    case 3:
                        if (HiVideoPlayer.videoSettingContrl != 2) {
                            if (HiVideoPlayer.settingIndex > 0 && HiVideoPlayer.settingIndex <= HiVideoPlayer.videoSettingContrl) {
                                $("#VsettingTableTd" + HiVideoPlayer.settingIndex).removeClass("VsettingButtonFocus").addClass("VsettingButton");
                                $("#VsettingTableTd" + (HiVideoPlayer.settingIndex - 1)).removeClass("VsettingButton").addClass("VsettingButtonFocus");
                                HiVideoPlayer.settingIndex--;
                            }
                        } else {
                            switch (HiVideoPlayer.settingIndex) {
                                case 1:
                                    $("#VsettingTableTd" + HiVideoPlayer.settingIndex).removeClass("VsettingButtonFocus").addClass("VsettingButton");
                                    $("#VsettingTableTd" + (HiVideoPlayer.settingIndex - 1)).removeClass("VsettingButton").addClass("VsettingButtonFocus");
                                    HiVideoPlayer.settingIndex--;
                                    break;
                                case 4:
                                    $("#VsettingTableTd" + HiVideoPlayer.settingIndex).removeClass("VsettingButtonFocus").addClass("VsettingButton");
                                    $("#VsettingTableTd" + (HiVideoPlayer.settingIndex - 3)).removeClass("VsettingButton").addClass("VsettingButtonFocus");
                                    HiVideoPlayer.settingIndex = 1;
                                    break;
                                default :
                                    break;
                            }
                        }
                        break;

                    default :
                        break;
                }
            }
            else {
                if (HiVideoPlayer.dialogShowStatus != 5) {
                    $("#videoPlayerPanel").css("visibility", "visible");
                    try {
                        debugPrint('clos MEMC when bar show');
                        ctlr_memc_for_osd(0);
                    }
                    catch (ex) {
                        debugE("clos MEMC ----" + ex.message);
                    }
                    HiVideoPlayer.isController = true;
                    debugPrint("clear Timer");
                    clearTimeout(HiVideoPlayer.ControlTimer);
                    HiVideoPlayer.ControlTimer = setTimeout(function () {
                        HiVideoPlayer.hidePlayerPanel();
                    }, 6000);
                }

            }
            break;
        case VK_DOWN:
            if (HiVideoPlayer.isController) {
                switch (HiVideoPlayer.dialogShowStatus) {
                    case 1:
                        break;
                    case 2:
                        if (HiVideoPlayer.listIndex < HiVideoPlayer.videoList.length - 1) {
                            HiVideoPlayer.listIndex++;
                            if (HiVideoPlayer.focusIndex < 6) {
                                HiVideoPlayer.focusIndex++;
                                debugPrint(HiVideoPlayer.focusIndex);
                                HiVideoPlayer.listTop = HiVideoPlayer.focusTop + 96 * HiVideoPlayer.focusIndex;
                                $("#video_list_focus").css("top", HiVideoPlayer.listTop);
                            }
                            else if (HiVideoPlayer.focusIndex == 6) {
                                HiVideoPlayer.scrollBarFrom = HiVideoPlayer.scrollBarFrom + 96;
                                //debugPrint(HiVideoPlayer.scrollBarFrom);
                                //$('#Vwrapper').jscrollbar('getObject').scrollTo('y', HiVideoPlayer.scrollBarFrom);
                                // HiVideoPlayer.listPageChange(HiVideoPlayer.scrollBarFrom);
                                try {
                                    HiVideoPlayer.listPageChange(HiVideoPlayer.scrollBarFrom);
                                } catch (e) {
                                    debugE(e.message);
                                }
                            }
                        }
                        break;
                    case 3:
                        DBG_ALWAYS("HiVideoPlayer.videoSettingContrl IS : " + HiVideoPlayer.videoSettingContrl);
                        if (HiVideoPlayer.videoSettingContrl != 2) {
                            if (HiVideoPlayer.settingIndex >= 0 && HiVideoPlayer.settingIndex < HiVideoPlayer.videoSettingContrl) {
                                $("#VsettingTableTd" + HiVideoPlayer.settingIndex).removeClass("VsettingButtonFocus").addClass("VsettingButton");
                                $("#VsettingTableTd" + (HiVideoPlayer.settingIndex + 1)).removeClass("VsettingButton").addClass("VsettingButtonFocus");
                                HiVideoPlayer.settingIndex++;
                            }
                        } else {
                            switch (HiVideoPlayer.settingIndex) {
                                case 0:
                                    $("#VsettingTableTd" + HiVideoPlayer.settingIndex).removeClass("VsettingButtonFocus").addClass("VsettingButton");
                                    $("#VsettingTableTd" + (HiVideoPlayer.settingIndex + 1)).removeClass("VsettingButton").addClass("VsettingButtonFocus");
                                    HiVideoPlayer.settingIndex++;
                                    break;
                                case 1:
                                    $("#VsettingTableTd" + HiVideoPlayer.settingIndex).removeClass("VsettingButtonFocus").addClass("VsettingButton");
                                    $("#VsettingTableTd" + (HiVideoPlayer.settingIndex + 3)).removeClass("VsettingButton").addClass("VsettingButtonFocus");
                                    HiVideoPlayer.settingIndex = 4;
                                    break;
                                default :
                                    break;
                            }
                        }
                        break;

                    default :
                        break;
                }
            }
            else {
                if (HiVideoPlayer.dialogShowStatus != 5) {
                    $("#videoPlayerPanel").css("visibility", "visible");
                    try {
                        debugPrint('clos MEMC when bar show');
                        ctlr_memc_for_osd(0);
                    }
                    catch (ex) {
                        debugE("clos MEMC ----" + ex.message);
                    }
                    HiVideoPlayer.isController = true;
                    debugPrint("clear Timer");
                    clearTimeout(HiVideoPlayer.ControlTimer);
                    HiVideoPlayer.ControlTimer = setTimeout(function () {
                        HiVideoPlayer.hidePlayerPanel();
                    }, 6000);
                }

            }
            break;


        case VK_BACK:
            switch (HiVideoPlayer.dialogShowStatus) {
                case 0:
                    HiVideoPlayer.closeVideoPlayer(1);
                    break;
                case 1:
                    $("#videoPlayTimeSetting").css("display", "none");
                    HiVideoPlayer.dialogShowStatus = 0;
                    break;
                case 2:
                    $("#videoList").css("display", "none");
                    HiVideoPlayer.dialogShowStatus = 0;
                    break;
                case 3:
                    $("#videoSetting").css("display", "none");
                    HiVideoPlayer.dialogShowStatus = 0;
                    break;
                case 4:
                    $("#videoInformation").css("display", "none");
                    HiVideoPlayer.dialogShowStatus = 0;
                    break;
                case 5:
                    pvr_ui_hideInputPassword();
                    HiVideoPlayer.dialogShowStatus = 0;
                    break;
                default :
                    break;
            }
            break;
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
        	var keyNumber = key - '0'.charCodeAt(0);

            debugE(HiVideoPlayer.dialogShowStatus);
            if (HiVideoPlayer.dialogShowStatus == 1) {
                HiVideoPlayer.timeStr[HiVideoPlayer.timeIndex] = keyNumber;
                HiVideoPlayer.refreshTimeInfo();
                HiVideoPlayer.timeIndex++;
                if (HiVideoPlayer.timeIndex > 1) {
                    HiVideoPlayer.timeIndex = 0;
                }
            }
            else if (HiVideoPlayer.dialogShowStatus == 5) {
                pvr_inputNum(keyNumber);
            }
            else if (HiVideoPlayer.dialogShowStatus == 0) {
            	model.mpctrl.setMpCtrlPlaytimeCurrent(keyNumber * HiVideoPlayer.videoTotaltime / 10);
            }
            break;
        case VK_PLAY:
            if (HiVideoPlayer.playerStatus == 0) {
                model.mpctrl.setMpCtrlSpeed(1);
                $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
                //判断当前焦点位置
                if (HiVideoPlayer.videoPlayerFocus == 0)
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                else
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");


                if (HiVideoPlayer.ffIndex != 0 || HiVideoPlayer.frIndex != 0) {
                    HiVideoPlayer.ffIndex = 0;
                    HiVideoPlayer.frIndex = 0;
                    //model.mpctrl.setMpCtrlSpeed(1);
                    changeFFClass();
                    changeFRClass();

                }
                HiVideoPlayer.playerStatus = 1;
            }
            else {
                //处理快进状态下的回到播放状态的问题
                if (HiVideoPlayer.ffIndex != 0 || HiVideoPlayer.frIndex != 0) {
                    HiVideoPlayer.ffIndex = 0;
                    HiVideoPlayer.frIndex = 0;
                    model.mpctrl.setMpCtrlSpeed(1);
                    changeFFClass();
                    changeFRClass();

                }
            }

            break;
        case
        VK_PAUSE:

            if (HiVideoPlayer.playerStatus == 1) {
                model.mpctrl.setMpCtrlSpeed(0);
                $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                //判断当前焦点位置
                if (HiVideoPlayer.videoPlayerFocus == 0)
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                else
                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                HiVideoPlayer.playerStatus = 0;

            } else {
                //处理快进状态下的回到暂停状态的问题
                if (HiVideoPlayer.frIndex != 0 || HiVideoPlayer.ffIndex != 0) {
                    HiVideoPlayer.ffIndex = 0;
                    HiVideoPlayer.frIndex = 0;
                    model.mpctrl.setMpCtrlSpeed(0);
                    changeFFClass();
                    changeFRClass();
                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                    if (HiVideoPlayer.videoPlayerFocus == 0)
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                    else
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                }
            }

            break;
        case
        VK_FAST_FWD:
            if (!!HiVideoPlayer.isController) {
                HiVideoPlayer.ff();
            }
            else {
                $("#videoPlayerPanel").css("visibility", "visible");
                try {
                    debugPrint('clos MEMC when bar show');
                    ctlr_memc_for_osd(0);
                }
                catch (ex) {
                    debugE("clos MEMC ----" + ex.message);
                }
                HiVideoPlayer.isController = true;
                debugPrint("clear Timer");
                clearTimeout(HiVideoPlayer.ControlTimer);
                HiVideoPlayer.ControlTimer = setTimeout(function () {
                    HiVideoPlayer.hidePlayerPanel();
                }, 6000);
                HiVideoPlayer.ff();
            }
            break;
        case
        VK_FAST_BKW:
            if (!!HiVideoPlayer.isController) {
                HiVideoPlayer.fr();
            }
            else {
                $("#videoPlayerPanel").css("visibility", "visible");
                try {
                    debugPrint('clos MEMC when bar show');
                    ctlr_memc_for_osd(0);
                }
                catch (ex) {
                    debugE("clos MEMC ----" + ex.message);
                }
                HiVideoPlayer.isController = true;
                debugPrint("clear Timer");
                clearTimeout(HiVideoPlayer.ControlTimer);
                HiVideoPlayer.ControlTimer = setTimeout(function () {
                    HiVideoPlayer.hidePlayerPanel();
                }, 6000);
                HiVideoPlayer.fr();
            }
            break;
        case
        VK_NEXT:
            HiVideoPlayer.playNext();
            break;
        case
        VK_LAST:
            HiVideoPlayer.playBack();
            break;
        case
        VK_STOP:
            HiVideoPlayer.closeVideoPlayer(1);
            break;
        case
        VK_PICTURE:
            OpenPicModePage(hiWebOsFrame.getCurrentPage());
            break;
        case
        VK_S_MODE:
            OpenSndModePage(hiWebOsFrame.getCurrentPage());
            break;
//        case
//        VK_ZOOM:
//            //HiVideoPlayer.videoSettingShow();
//            OpenPicSizePage(hiWebOsFrame.getCurrentPage());
//            break;
        case VK_CUSTOMER_3D:

            OpenPic3DPage(hiWebOsFrame.getCurrentPage());
            break;
        default:
            break;
    }
}
;
HiVideoPlayer.closeVideoPlayer = function (value) {
    debugPrint("HiVideoPlayer.closeVideoPlayer");


    if (value == 1) {
        debugPrint("close videoPlayer");
        hiWebOsFrame.getCurrentPage().destroy();
        HiVideoPlayer.videoPlayerFocus = 0;
        hiWebOsFrame.himedia_fileBrowser.open();
        hiWebOsFrame.himedia_fileBrowser.hiFocus();
        // mpCtrlStatus_launcher = 0;
        //退出时重置一次pvrIsPlaying=false;
        pvrIsPlaying = false;
        HiVideoPlayer.videoStop();
        //需要关闭MEMC
        try {
            debugPrint('clos MEMC when close videoPlayer');
            ctlr_memc_for_osd(0);
            ctlr_memc_for_osd(2);
            clearTimeout(HiVideoPlayer.ControlTimer);
        }
        catch (ex) {
            debugE("clos MEMC ----" + ex.message);
        }

//        if (!!HiVideoPlayer.progressInternal)
//            clearInterval(HiVideoPlayer.progressInternal);

        try {//close 3D
            var pic3DMode = model.video.getEnum3dMode();
            debugPrint("current 3D mode is :" + pic3DMode);
            if (pic3DMode != 0 && pic3DMode != 1) {
                debugPrint("[UI] UI need to close 3D mode!", DebugLevel.ALWAYS);
                model.video.setEnum3dMode(0);
                model.video.set3dDepth(4);
                model.video.set3dViewPoint(8);
            }
        }
        catch (ex) {
            debugE(ex.message);
        }
    } else {
        debugPrint("on close");
        mpCtrlStatus_launcher = 0;
        //if (model.mpctrl.getMpCtrlStat() == 3) {
        //退出时重置一次pvrIsPlaying=false;
        pvrIsPlaying = false;
        HiVideoPlayer.videoStop();
        //}
//        if (HiVideoPlayer.isPVROpen) {
//            HiVideoPlayer.isPVROpen = false;
//            model.hdr.PlayerStop();
//            if (!!HiVideoPlayer.PVRprogressInternal)
//                clearInterval(HiVideoPlayer.PVRprogressInternal);
//        }
//        if (!!HiVideoPlayer.progressInternal)
//            clearInterval(HiVideoPlayer.progressInternal);
    }
};
function changeFFClass() {
    DBG_ALWAYS("NOW FFINDEX IS " + HiVideoPlayer.ffIndex);
    switch (HiVideoPlayer.ffIndex) {
        case 0:

            if (HiVideoPlayer.frIndex == 0) {
//                if (HiVideoPlayer.playerStatus == 1)
//                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
//                else
//                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                if (HiVideoPlayer.playerStatus == 0) {
                    if (HiVideoPlayer.videoPlayerFocus == 0)
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                    else
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
                    HiVideoPlayer.playerStatus = 1;
                }
            }
            //model.mpctrl.setSpeed(100);
            if (HiVideoPlayer.videoPlayerFocus == 4) {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/ff2.png");
            }
            else {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/ff1.png");
            }
            break;
        case 1:
            // model.mpctrl.setSpeed(200);
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/ff_status.png");
            if (HiVideoPlayer.videoPlayerFocus == 4) {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/2x2.png");
            }
            else {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/2x1.png");
            }
            break;
        case 2:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/ff_status.png");
            //model.mpctrl.setSpeed(400);
            if (HiVideoPlayer.videoPlayerFocus == 4) {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/4x2.png");
            }
            else {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/4x1.png");
            }
            break;
        case 3:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/ff_status.png");
            //model.mpctrl.setSpeed(800);
            if (HiVideoPlayer.videoPlayerFocus == 4) {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/8x2.png");
            }
            else {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/8x1.png");
            }
            break;
        case 4:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/ff_status.png");
            // model.mpctrl.setSpeed(1600);
            if (HiVideoPlayer.videoPlayerFocus == 4) {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/16x2.png");
            }
            else {
                $("#videoPlayerButton5").attr("src", "img/himedia/videoPlayer/16x1.png");
            }
            break;
        default :
            break;
    }
};
function changeFRClass() {
    switch (HiVideoPlayer.frIndex) {
        case 0:

            if (HiVideoPlayer.ffIndex == 0) {
//                if (HiVideoPlayer.playerStatus == 1)
//                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
//                else
//                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                if (HiVideoPlayer.playerStatus == 0) {
                    if (HiVideoPlayer.videoPlayerFocus == 0)
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                    else
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
                    HiVideoPlayer.playerStatus = 1;
                }
            }

            // model.mpctrl.setSpeed(100);
            if (HiVideoPlayer.videoPlayerFocus == 3) {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/fr2.png");
            }
            else {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/fr1.png");
            }
            break;
        case 1:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/fr_status.png");
            // model.mpctrl.setSpeed(100200);
            if (HiVideoPlayer.videoPlayerFocus == 3) {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/2x2.png");
            }
            else {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/2x1.png");
            }
            break;
        case 2:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/fr_status.png");
            //model.mpctrl.setSpeed(100400);
            if (HiVideoPlayer.videoPlayerFocus == 3) {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/4x2.png");
            }
            else {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/4x1.png");
            }
            break;
        case 3:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/fr_status.png");
            //model.mpctrl.setSpeed(100800);
            if (HiVideoPlayer.videoPlayerFocus == 3) {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/8x2.png");
            }
            else {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/8x1.png");
            }
            break;
        case 4:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/fr_status.png");
            // model.mpctrl.setSpeed(101600);
            if (HiVideoPlayer.videoPlayerFocus == 3) {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/16x2.png");
            }
            else {
                $("#videoPlayerButton4").attr("src", "img/himedia/videoPlayer/16x1.png");
            }
            break;
        default :
            break;
    }
}


HiVideoPlayer.refreshFrButton = function () {
    HiVideoPlayer.frIndex = 0;
    changeFRClass();
}

HiVideoPlayer.checkPinRequest = function () {

    debugPrint("__checkPinRequest_PVR__VIDEO______" + HiVideoPlayer.pvrPassword + "   and now player is play_done status is " + HiVideoPlayer.currentPlayerIsPlayDone);
    if (!!HiVideoPlayer.pvrPassword) {
        if (!!HiVideoPlayer.currentPlayerIsPlayDone) {
            model.mpctrl.UnlockPvr();
        }
        else {
            HiVideoPlayer.needUnlockPvr = true;
        }
        //model.mpctrl.UnlockPvr();

    }
    else
        pvr_ui_showInputPassword(pvrLang[getCurrentLan()]["Please enter password"]);

}


//PVR密码框处理程序
function pvr_ui_showInputPassword(passwordText) {
    clearTimeout(HiVideoPlayer.ControlTimer);
    HiVideoPlayer.hidePlayerPanel();
    $("#pvr_showInputPassword").css("display", "block");
    HiVideoPlayer.dialogShowStatus = 5;
    pvr_ui_clearInputPassword();
    $("#pvr_sip_zipContainer1").removeClass("chl_sip_zipContainerNormal");
    $("#pvr_sip_zipContainer1").addClass("chl_sip_zipContainerFocus");
    var str = passwordText;
    str = str.replace(/\n/g, "<br>");
    var str1 = suolve(100, str);
    $("#pvr_sip_text").html(str1);
    $("#pvr_sip_input1").focus();
}
function pvr_ui_clearInputPassword() {
    for (var i = 1; i < 5; i++) {
        $("#pvr_sip_zipContainer" + i).removeClass("chl_sip_zipContainerFocus");
        $("#pvr_sip_zipContainer" + i).addClass("chl_sip_zipContainerNormal");
        $("#pvr_sip_input" + i).val('');
        $("#pvr_sip_input" + i).blur();
    }
}

function pvr_ui_hideInputPassword() {
    $("#pvr_showInputPassword").css("display", "none");
    HiVideoPlayer.dialogShowStatus = 0;
    pvr_ui_clearInputPassword();
    HiVideoPlayer.closeVideoPlayer(1);

}

function pvr_ui_setInputPasswordFocus(index, num) {
    debugPrint("index", index);
    //chl_ui_clearInputPassword();
    if (index > 1) {
        $("#pvr_sip_zipContainer" + (index - 1)).removeClass("chl_sip_zipContainerFocus");
        $("#pvr_sip_zipContainer" + (index - 1)).addClass("chl_sip_zipContainerNormal");
        $("#pvr_sip_zipContainer" + index).removeClass("chl_sip_zipContainerNormal");
        $("#pvr_sip_zipContainer" + index).addClass("chl_sip_zipContainerFocus");
        $("#pvr_sip_input" + (index - 1)).val(num);
        $("#pvr_sip_input" + (index - 1)).blur();
        $("#pvr_sip_input" + index).focus();
    } else {
        $("#pvr_sip_input4").val(num);
    }

}
function pvr_getPasswordFromInput() {
    var str = "";
    for (var i = 1; i < 5; i++) {
        str = str + $("#pvr_sip_input" + i).val();
    }
    return str;
}


function pvr_inputNum(Num) {
    debugPrint("pvr_inputNum funciton begin!");
    if (HiVideoPlayer.inputPwdFocusIndex < 4) {
        HiVideoPlayer.inputPwdFocusIndex++;
        pvr_ui_setInputPasswordFocus(HiVideoPlayer.inputPwdFocusIndex, Num);
    } else if (HiVideoPlayer.inputPwdFocusIndex == 4) {
        HiVideoPlayer.inputPwdFocusIndex = 1;
        pvr_ui_setInputPasswordFocus(HiVideoPlayer.inputPwdFocusIndex, Num);
        var password = "";
        var pin = "";
        try {
            pin = model.parentlock.getPin();
        }
        catch (ex) {
            debugE(ex.message);

        }
        var allpin = g_SystemFallbackPwd;
        password = pvr_getPasswordFromInput();
        debugPrint("pin_" + pin + "____allpin_" + allpin + "____passwd_" + password);
        debugPrint("password:" + password);
        if (password == pin || password == allpin) {
            try {
                model.mpctrl.UnlockPvr();
                HiVideoPlayer.pvrPassword = password;
                //model.parentlock.pinRequestConfirmCallback = getpinRequest;
            } catch (e) {
                debugPrint(e.message);
            }
            $("#pvr_showInputPassword").css("display", "none");
            HiVideoPlayer.dialogShowStatus = 0;
            debugPrint("**pvr Name is : " + HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);
            HiVideoPlayer.playPvr(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName, false);

        } else {
            HiVideoPlayer.inputPwdFocusIndex = 1;
            pvr_ui_showInputPassword(pvrLang[getCurrentLan()]["Invalid password. Please re-enter"]);
        }
    }
}

