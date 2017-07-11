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
    screenMode: ["Full Screen", "Fit", "Original"],
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
    pvrfrSpeed: [4, 10, 11, 12, 12]


};
//只适用于关闭后的状态
HiVideoPlayer.playNextWhenStop = function () {
    switch (HiVideoPlayer.repeatIndex) {
        case 0:
            if (HiVideoPlayer.cIndex < HiVideoPlayer.videoList.length - 1) {
                HiVideoPlayer.cIndex++;
                HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);
            }
            else if (HiVideoPlayer.cIndex >= HiVideoPlayer.videoList.length - 1) {
                mpCtrlStatus_launcher = 0;
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
            break;
        case 2:

            HiVideoPlayer.playVideoByUrl(HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoUrl, HiVideoPlayer.videoList[HiVideoPlayer.cIndex].videoName);

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
//DLNA显示
HiVideoPlayer.openDlnaPlayer = function (dlnaVideoName) {
    $("#videoPlayerPanel").css("visibility", "visible");
    $("#videoPlayerController").css("visibility", "hidden");
//    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
    $("#videoTitle").html(dlnaVideoName);
//    if (!!HiVideoPlayer.progressInternal) {
//        clearInterval(HiVideoPlayer.progressInternal);
//    }
//    HiVideoPlayer.progressInternal = window.setInterval("HiVideoPlayer.getProgress()", 1000);
    HiVideoPlayer.isController = false;
    // $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
};
//EPOS显示
HiVideoPlayer.openEposPlayer = function () {
    debugPrint("______________EPOS___PLAYER____________________________________________");
    $("#videoPlayerPanel").css("visibility", "hidden");
    $("#videoPlayerController").css("visibility", "hidden");
//    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
    $("#videoTitle").html("Hisense_TV_Demo");
//    if (!!HiVideoPlayer.progressInternal) {
//        clearInterval(HiVideoPlayer.progressInternal);
//    }
//    HiVideoPlayer.progressInternal = window.setInterval("HiVideoPlayer.getProgress()", 1000);
    HiVideoPlayer.isController = false;
};
//***************PVR***********************//
HiVideoPlayer.playPvr = function (PVRurl, PVRname) {
    HiVideoPlayer.isPVROpen = true;
    debugPrint("pvr url:   " + PVRurl);
    model.hdr.PlayerPlay(PVRurl);
    $("#videoPlayerPanel").css("visibility", "visible");
    //$("#videoPlayerController").css("visibility", "visible");
    $("#videoPlayerStatus").css("visibility", "hidden");
    HiVideoPlayer.isController = false;
    //model.mpctrl.PlayPvr(PVRurl);
    $("#videoTitle").html(PVRname);
    $("#VinfoTableTd1").html('<span>' + PVRname + '</span>');
    $("#VinfoTableTd2").html('<span>' + HiVideoPlayer.videoList[HiVideoPlayer.cIndex].mime_type + '</span>');
//    if (!!HiVideoPlayer.PVRprogressInternal) {
//        clearInterval(HiVideoPlayer.PVRprogressInternal);
//    }
//    HiVideoPlayer.PVRprogressInternal = window.setInterval("HiVideoPlayer.getPVRProgress()", 1000);
};
//***************PVR***********************//
HiVideoPlayer.playVideoByUrl = function (videoUrl, videoName) {
    if (videoUrl != null) {
        debugPrint("videoTEST___:" + videoUrl);
        //重置快进快退按钮样式
        HiVideoPlayer.ffIndex = 0;
        changeFFClass();
        HiVideoPlayer.frIndex = 0;
        changeFRClass();

        model.mpctrl.PlayMovie(videoUrl);
        $("#videoPlayerController").css("visibility", "hidden");

        //需要重置屏幕分辨率选项
        //model.mpctrl.setScreenPosition([0, 0, 0, 0, 0, 0]);
        HiVideoPlayer.screenIndex = 0;
        $("#VsettingTableTd1").html(HiVideoPlayer.screenMode[HiVideoPlayer.screenIndex]);

        //model.mpctrl.onMpCtrlPlaytimeCurrentchanged=HiVideoPlayer.getProgress();
        $("#videoPlayerPanel").css("visibility", "visible");
        $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
        if (HiVideoPlayer.videoPlayerFocus == 0)
            $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
        else
            $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
        HiVideoPlayer.playerStatus = 1;

//        if (!!HiVideoPlayer.progressInternal) {
//            clearInterval(HiVideoPlayer.progressInternal);
//        }
//        HiVideoPlayer.progressInternal = window.setInterval("HiVideoPlayer.getProgress()", 1000);
//        HiVideoPlayer.isController = true;
        //$("#videoPlayer").data = videoUrl;

        //HiVideoPlayer.resolution = model.video.getFormatInfo().split("/")[0];
        $("#videoTitle").html('<span>' + videoName + '</span>');
        $("#VinfoTableTd1").html('<span>' + videoName + '</span>');
        $("#VinfoTableTd2").html('<span>' + HiVideoPlayer.videoList[HiVideoPlayer.cIndex].fileSize + '</span>');

//        debugPrint("get Error Code________________" + model.mpctrl.getMpCtrlError());
        HiVideoPlayer.ControlTimer = setTimeout(function () {
            HiVideoPlayer.hidePlayerPanel();
        }, 6000);
        //$("#VinfoTableTd4").html(HiVideoPlayer.resolution);
        //myVideo.onPlayStateChange = checkPlayState();

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
        //model.mpctrl.setSpeed(100);
//        }

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
    //var canSpeed = model.mpctrl.getMpCtrlStat();
    //debugPrint("canSpeed___:" + canSpeed);
    debugPrint("NOW FF INDEX IS       " + HiVideoPlayer.ffIndex);
    if (HiVideoPlayer.ffIndex < 4) {
        HiVideoPlayer.ffIndex++;
    }
    else {
        HiVideoPlayer.ffIndex = 0;
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


};
HiVideoPlayer.fr = function () {
    if (HiVideoPlayer.frIndex < 4) {
        HiVideoPlayer.frIndex++;
    }
    else {
        HiVideoPlayer.frIndex = 0;
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
//    var a = model.mpctrl.getMpCtrlPlaytimeTotal() * HiVideoPlayer.ffScale;
//    model.mpctrl.setMpCtrlPlaytimeCurrent(model.mpctrl.getMpCtrlPlaytimeCurrent() - a);
};
HiVideoPlayer.videoInfoShow = function () {
    HiVideoPlayer.dialogShowStatus = 4;
    $("#VinfoTableTd4").html(model.mpctrl.getMpCtrlStat());
    $("#videoInformation").css("display", "block");
    //var currentVideo = model.mpctrl.getMetadata();
    //debugPrint(currentVideo);


};
HiVideoPlayer.videoSettingShow = function () {
    HiVideoPlayer.dialogShowStatus = 3;

    //HiVideoPlayer.resolution = model.video.getVideoFormatInfo().split("/")[0];
    HiVideoPlayer.Vwidth = parseInt(HiVideoPlayer.resolution.split("*")[0]);
    HiVideoPlayer.Vheight = parseInt(HiVideoPlayer.resolution.split("*")[1]);
    //debugPrint("INFO_______________:" + model.video.getVideoFormatInfo());
    $("#videoSetting").css("display", "block");

};
HiVideoPlayer.videoTimeShow = function () {

    HiVideoPlayer.dialogShowStatus = 1;
    $("#videoPlayTimeSetting").css("display", "block");

};
HiVideoPlayer.videoListShow = function () {

    HiVideoPlayer.dialogShowStatus = 2;
    //滚动条无法记忆，改为每次进入都放在第一个
    HiVideoPlayer.focusIndex = 0;
    HiVideoPlayer.listIndex = 0;
    $("#video_list_focus").css("top", 123);
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
    $("#startTime").html(HiVideoPlayer.getTimeText(currentTime));
    $("#endTime").html(HiVideoPlayer.getTimeText(totalTime));
    $("#VinfoTableTd3").html(HiVideoPlayer.getTimeText(totalTime));
    $("#PlayTime_3").html("/ " + HiVideoPlayer.getTimeText(totalTime));
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
HiVideoPlayer.init = function (videoList, cIndex) {
    HiVideoPlayer.videoPlayerFocus = 0;
    HiVideoPlayer.listIndex = 0;
    HiVideoPlayer.focusIndex = 0;
    HiVideoPlayer.settingIndex = 0;
    HiVideoPlayer.timeFocus = 0;
    HiVideoPlayer.ffIndex = 0;
    HiVideoPlayer.frIndex = 0;
    var url = videoList[cIndex].videoUrl;
    var name = videoList[cIndex].videoName;
    HiVideoPlayer.videoList = videoList;
    HiVideoPlayer.cIndex = cIndex;
    //给CEC添加标志
    try{
        model.cec.setIsMiracastExist(1);
    }
    catch(ex){
        debugE(ex);
    }
    //添加完成
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
    switch (event.keyCode) {



        case VK_BACK:
        case VK_EXIT:
        case VK_STOP:
             HiVideoPlayer.closeVideoPlayer(1);
        break;

//        case VK_PLAY:
//            if (HiVideoPlayer.playerStatus == 0) {
//                model.mpctrl.MpCtrlPlay(null);
//                $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
//                //判断当前焦点位置
//                if (HiVideoPlayer.videoPlayerFocus == 0)
//                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
//                else
//                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
//
//
//                HiVideoPlayer.playerStatus = 1;
//            }
//            else {
//                //处理快进状态下的回到播放状态的问题
//                if (HiVideoPlayer.ffIndex != 0 || HiVideoPlayer.frIndex != 0) {
//                    HiVideoPlayer.ffIndex = 0;
//                    HiVideoPlayer.frIndex = 0;
//                    model.mpctrl.setMpCtrlSpeed(1);
//                    changeFFClass();
//                    changeFRClass();
//
//                }
//            }
//
//            break;
//        case
//        VK_PAUSE:
//            if (HiVideoPlayer.playerStatus == 1) {
//                model.mpctrl.MpCtrlPause(null);
//                $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
//                //判断当前焦点位置
//                if (HiVideoPlayer.videoPlayerFocus == 0)
//                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
//                else
//                    $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
//                HiVideoPlayer.playerStatus = 0;
//
//            }
//
//            break;
//        case
//        VK_FAST_FWD:
//            HiVideoPlayer.ff();
//            break;
//        case
//        VK_FAST_BKW:
//            HiVideoPlayer.fr();
//            break;
//        case
//        VK_NEXT:
//            HiVideoPlayer.playNext();
//            break;
//        case
//        VK_LAST:
//            HiVideoPlayer.playBack();
//            break;
//
//        VK_STOP:
//            HiVideoPlayer.closeVideoPlayer(1);
//            break;
//        case
//        VK_PICTURE:
//            OpenPicModePage(hiWebOsFrame.getCurrentPage());
//            break;
//        case
//        VK_S_MODE:
//            OpenSndModePage(hiWebOsFrame.getCurrentPage());
//            break;
//        case
//        VK_ZOOM:
//            //HiVideoPlayer.videoSettingShow();
//            OpenPicSizePage(hiWebOsFrame.getCurrentPage());
//            break;
//        case VK_CUSTOMER_3D:
//
//            OpenPic3DPage(hiWebOsFrame.getCurrentPage());
//            break;
        default:
            break;
    }
}
;
HiVideoPlayer.closeVideoPlayer = function (value) {
    debugPrint("HiVideoPlayer.closeVideoPlayer");
    //给CEC添加标志
    try{
        model.cec.setIsMiracastExist(0);
    }
    catch(ex){
        debugE(ex);
    }
    //添加完成

    if (value == 1) {
        debugPrint("close videoPlayer");
        hiWebOsFrame.getCurrentPage().destroy();
        HiVideoPlayer.videoPlayerFocus = 0;
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        try {
            resumeDTV();
        } catch (e) {
            debugE(e.message);
        }
        // mpCtrlStatus_launcher = 0;
        // HiVideoPlayer.videoStop();

//        if (!!HiVideoPlayer.progressInternal)
//            clearInterval(HiVideoPlayer.progressInternal);

        if (mpCtrlStatus_launcher == 1 && epos_mpctrl == 1) {
            epos_mpctrl = 0;
            model.mpctrl.setMpCtrlRender(1);
            mpCtrlStatus_launcher = 0;
        }
    } else {
        debugPrint("on close");

        if (!!dlna_video_timer) {
            debugPrint("clearTimeout.dlna_video_timer!");
            clearTimeout(dlna_video_timer);
            dlna_video_timer = null;

        }
        if (!!timerDlna) {
            debugPrint("clearTimeout.timerDlna!");
            clearTimeout(timerDlna);
            timerDlna = null;
        }
        mpCtrlStatus_launcher = 0;
        HiVideoPlayer.videoStop();
        //}
        if (HiVideoPlayer.isPVROpen) {
            HiVideoPlayer.isPVROpen = false;
            model.hdr.PlayerStop();
        }
        var nowKeycode = null;
        try {
            nowKeycode = hiWebOsFrame.getKeyStackTop();
        } catch (e) {
            debugE(e.message);
        }
        debugPrint("Now keycode is : " + nowKeycode);
        if (nowKeycode == VK_LIVETV || nowKeycode == VK_EXIT ||
            nowKeycode == VK_HOME || nowKeycode == VK_SOURCE ||
            nowKeycode == VK_MENU || nowKeycode == VK_ALLAPP) {
            try {
                debugPrint("RESUME dtv from dlna_videoPlayer");
                resumeDTV();
            }
            catch (e) {
                debugE("RESUME ERROR : " + e.message);
            }
        }
    }
};
function changeFFClass() {
    switch (HiVideoPlayer.ffIndex) {
        case 0:
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
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
            $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
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
var dlna_video_timer = null;
var timerDlna = null;
HiVideoPlayer.initDlnaData = function () {
    debugPrint("HiVideoPlayer.initDlnaData Fun begin!");
    hiWebOsFrame.startLoading(3, "dlna_videoPlayer");
    dlna_video_timer = setTimeout(function () {
        try {
            debugPrint("reset window size before dlna ", DebugLevel.ALWAYS);
            setWindowSizeDirectly(0, 0, 1920, 1080);
            pauseDTV();
        }
        catch (ex) {
            debugE(ex.message);
        }
        if (!!timerDlna) {
            debugPrint("clear timerDlna");
            clearTimeout(timerDlna);
        }
        timerDlna = setTimeout(function () {

            HiVideoPlayer.init(HiVideoPlayer.videoList, HiVideoPlayer.cIndex);
            hiWebOsFrame.endLoading("dlna_videoPlayer");
        }, 1000);

    }, 1000);

}
