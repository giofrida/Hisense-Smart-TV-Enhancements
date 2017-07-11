var HiAudioPlayer = {
    keyValues: {
        "keyLeft": 37,
        "keyUp": 38,
        "keyRight": 39,
        "keyDown": 40,
        "Red": 404,
        "Green": 406,
        "keyEnter": 13
    },
    modes: {
        "all": 0,
        "single": 1,
        "random": 2
    },
    currentMode: null,
    focusTop: 0,
    listTop: 0,
    scrollBarFrom: 0,
    focusIndex: 0,
    musicIndex: 0,
    musicTotaltime: 0,
    playingIndex: 0,
    audioList: null,
    cIndex: null,
    isController: true,
    progressWidth: 0,
    seekDisabled: false,
    playerStatus: 1,
    audioPlayerFocus: 0,
    jsb2: null,
    dlnaStatus: 0,
    lastPage: null,
    progressInternal: null
};

HiAudioPlayer.playMusicByUrl = function (audioUrl, audioName, pIndex, audioThumb, audioArtist, audioAlbum) {
    if (audioUrl != null) {
        debugPrint("___________________" + audioUrl);
        model.mpctrl.PlayMusic(audioUrl);
        //model.mpctrl.onMpCtrlPlaytimeCurrentchanged=HiAudioPlayer.getProgress();
        $("#indicate" + HiAudioPlayer.playingIndex).css("visibility", "hidden");
        HiAudioPlayer.playingIndex = pIndex;
        $("#indicate" + HiAudioPlayer.playingIndex).css("visibility", "visible");
        HiAudioPlayer.playerStatus = 1;
        $("#status").attr('src', 'img/himedia/musicPlayer/status-pause.png');

        //debugPrint("______________________________" + model.mpctrl.getMpCtrlStat());
        //HiPlayer.player._init(myVideo);
//        myVideo.src = audioUrl;
//        //myVideo.load();
//        //myVideo.preload="auto";
//        myVideo.addEventListener("playing", function () {
//            setTimeout(function () {
//                $("#audioPlayerPanel").css("visibility", "hidden");
//                isController = false;
//            }, 3000);
//        }, false);
//        myVideo.addEventListener("waiting", function () {
//            setTimeout(function () {
//                debugPrint("waiting", "waiting");
//                $("#audioPlayerPanel").css("visibility", "visible");
//                $("#audioPlayerStatus").attr("src", "launcher/img/loading.png");
//                isController = true;
//            }, 1000);
//        }, false);
//        myVideo.addEventListener("ended", function () {
//            debugPrint("ended", "ended");
//            $("#audioPlayerPanel").css("visibility", "visible");
//            //play next
//            playNext();
//            // $("#audioPlayerStatus").attr("src","launcher/img/loading.png");
//            isController = true;
//        }, false);

//        if (!!HiAudioPlayer.progressInternal) {
//            clearInterval(HiAudioPlayer.progressInternal);
//        }
//        HiAudioPlayer.progressInternal = window.setInterval("HiAudioPlayer.getProgress()", 1000);
        if (audioThumb != "") {
            debugPrint("________audio__________thumb____________" + audioThumb);
            var img = new Image();
            img.src = audioThumb;

            img.onerror = function () {
                debugPrint("___________________onerror");
            };
            setTimeout(function () {
                debugPrint(img.width + "width_________________" + img.height + "height____________");
                if (img.width > 0) {
                    $('#musicIcon').attr("src", audioThumb);
                }
                else {
                    $('#musicIcon').attr("src", "img/himedia/musicPlayer/music-icon.png");
                }
            }, 300);

        }
        else {
            $('#musicIcon').attr("src", "img/himedia/musicPlayer/music-icon.png");
        }
        //$("#audioPlayer").data = audioUrl;
        HiAudioPlayer.createPlaylist();
        $("#indicate" + HiAudioPlayer.playingIndex).css("visibility", "visible");

        $("#audioTitle").html(audioName);
        $('#audioSinger').html(audioArtist);
        $('#audioCD').html(audioAlbum);
        //myVideo.onPlayStateChange = checkPlayState();

        //显示出Player界面
    }
};
HiAudioPlayer.audioPlayOrPause = function () {

    if (HiAudioPlayer.playerStatus == 0) {
        model.mpctrl.setMpCtrlSpeed(1);
//        if (!!HiAudioPlayer.progressInternal) {
//            clearInterval(HiAudioPlayer.progressInternal);
//        }
//        HiAudioPlayer.progressInternal = window.setInterval("HiAudioPlayer.getProgress()", 1000);

        $("#status").attr('src', 'img/himedia/musicPlayer/status-pause.png');
        HiAudioPlayer.playerStatus = 1;
    }
    else if (HiAudioPlayer.playerStatus == 1) {
        model.mpctrl.setMpCtrlSpeed(0);
        $("#status").attr('src', 'img/himedia/musicPlayer/status-play.png');
        //  clearInterval(HiAudioPlayer.progressInternal);

        HiAudioPlayer.playerStatus = 0;

    }

};


HiAudioPlayer.getTimeText = function (c) {
    var d = Math.floor(c);
    var b = Math.floor(d / 3600);
    var e = Math.floor((d % 3600) / 60);
    var a = Math.floor(d % 60);

    return HiAudioPlayer.formatTimeHMS(e, a);

    //return HiAudioPlayer.checkTime(b) + ":" + HiAudioPlayer.checkTime(a) + ":" + HiAudioPlayer.checkTime(b);

};
HiAudioPlayer.getTimeTextWithHour = function (c) {
    var d = Math.floor(c);
    var b = Math.floor(d / 3600);
    var e = Math.floor((d % 3600) / 60);
    var a = Math.floor(d % 60);

    //return HiAudioPlayer.formatTimeHMS(e, a);

    return HiAudioPlayer.checkTime(b) + ":" + HiAudioPlayer.checkTime(e) + ":" + HiAudioPlayer.checkTime(a);

};
HiAudioPlayer.formatTimeHMS = function (a, b) {
    return HiAudioPlayer.checkTime(a) + ":" + HiAudioPlayer.checkTime(b);
};
HiAudioPlayer.getProgress = function (currentTime) {
    var totalTime = 0;
    totalTime = HiAudioPlayer.musicTotaltime;
    if (totalTime > 3600) {
        $("#currentTime").css("margin-left", "570px");
        $("#currentTime").html(HiAudioPlayer.getTimeTextWithHour(currentTime));
        $("#duration").html(HiAudioPlayer.getTimeTextWithHour(totalTime));
    }
    else {
        $("#currentTime").css("margin-left", "650px");
        $("#currentTime").html(HiAudioPlayer.getTimeText(currentTime));
        $("#duration").html(HiAudioPlayer.getTimeText(totalTime));
    }
    if (totalTime != 0) {
        HiAudioPlayer.progressWidth = Math.floor(917 * currentTime / totalTime);
    }
    else {
        HiAudioPlayer.progressWidth = 0;
    }
    $("#pg").css("width", HiAudioPlayer.progressWidth + "px");
};
HiAudioPlayer.checkTime = function (a) {
    return(a < 10 ? "0" : "") + a;
};
HiAudioPlayer.listPageChange = function (to) {
    HiAudioPlayer.jsb2//
        .scrollTo('y', to);

};
HiAudioPlayer.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

HiAudioPlayer.createPlaylist = function () {
    var playList = '<ul id="thelist">';
    for (var i = 0; i < HiAudioPlayer.audioList.length; i++)
        playList = playList + '<li><div><img src="img/himedia/musicPlayer/indicate.png" id="indicate' + i + '"/>' + HiAudioPlayer.audioList[i].audioName + '</div></li>';
    playList = playList + '</ul>';
    $("#wrapper").html(playList);
};
HiAudioPlayer.getRandomNum = function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
};
HiAudioPlayer.audioStop = function () {
    debugPrint("STOP MPCTRL !!");
    model.mpctrl.StopMpctrl(null);
    //model.mpctrl.MpCtrlStop(null);
    //  model.mpctrl.MpCtrlRelease(null);
};

function getCurrentLan() {
    var HiMediaLanguages = ['ger', 'eng', 'fre', 'ita', 'spa'];
    try {
        //return HiMediaLanguages[model.language.getOsd()];
        return "eng";
    }
    catch (e) {
        debugE(e.message);
        return "eng";
    }
}

var cLanguage;
HiAudioPlayer.initLanguage = function () {
    //初始化多语言
    cLanguage = getCurrentLan();
    debugPrint("[DLNAMusicPlayer] current Language is : " + playerLang[cLanguage]["Name:"]);
//    $("#change_font").html(playerLang[cLanguage].playmode);//info
//    $("#chupdown_font").html(playerLang[cLanguage].pageupdown);
    $("#list_header").html(playerLang[cLanguage]["Name:"]);

}
HiAudioPlayer.init = function (audioList, cIndex) {
    var url = audioList[cIndex].audioUrl;
    var name = audioList[cIndex].audioName;
    //给CEC添加标志
    try{
        model.cec.setIsMiracastExist(1);
    }
    catch(ex){
        debugE(ex);
    }
    //添加完成
    HiAudioPlayer.audioList = audioList;
    HiAudioPlayer.cIndex = cIndex;
    HiAudioPlayer.createPlaylist();
    debugPrint("___________________________url is " + url + ";audio name is " + name);

    HiAudioPlayer.scrollBarFrom = 0;//初始化滚动条位置
    HiAudioPlayer.focusTop = 130;
    HiAudioPlayer.focusIndex = HiAudioPlayer.musicIndex = 0;//展示默认开启播放器时焦点在顶端

    HiAudioPlayer.playingIndex = HiAudioPlayer.cIndex;

    //创建滚动条
    $('#wrapper').jscrollbar({
        width: 5, //滚动条宽度
        color: '#999999', //滚动条颜色
        opacity: 0.7, //透明度
        position: 'inner',//滚动条位置
        //  mouseScrollDirection: 'horizontal',
        //  showXBar: false,
        keyControl: false,
        showYBar: true

    });
    HiAudioPlayer.currentMode = HiAudioPlayer.modes.all;//初始化播放模式
    //  HiAudioPlayer.jsb2 = $('#wrapper').jscrollbar('getObject');
    $("#cPage").text(Math.floor(HiAudioPlayer.musicIndex / 8) + 1);
    $("#aPage").text("/" + (Math.floor((HiAudioPlayer.audioList.length - 1) / 8) + 1));
    HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[HiAudioPlayer.cIndex].audioUrl,
        HiAudioPlayer.audioList[HiAudioPlayer.cIndex].audioName,
        HiAudioPlayer.playingIndex,
        HiAudioPlayer.audioList[HiAudioPlayer.cIndex].audioThumb,
        HiAudioPlayer.audioList[HiAudioPlayer.cIndex].audioArtist,
        HiAudioPlayer.audioList[HiAudioPlayer.cIndex].audioAlbum);

};
HiAudioPlayer.keydownhander = function (event) {
//    if (launcher_player_switch != 2) {
//        return false;
//    }
    event = event || window.event;

    switch (event.keyCode) {


        case VK_BACK:
        case VK_STOP:
        case VK_EXIT:
            HiAudioPlayer.closeAudioPlayer(1);
            break;
//        case VK_PLAY:
//            if (HiAudioPlayer.playerStatus == 0) {
//                model.mpctrl.MpCtrlPlay(null);
//                $("#status").attr('src', 'img/himedia/musicPlayer/status-pause.png');
//                HiAudioPlayer.playerStatus = 1;
//            }
//
//            break;
//        case VK_PAUSE:
//            if (HiAudioPlayer.playerStatus == 1) {
//                model.mpctrl.MpCtrlPause(null);
//                $("#status").attr('src', 'img/himedia/musicPlayer/status-play.png');
//                HiAudioPlayer.playerStatus = 0;
//
//            }
//            break;

//        case VK_PICTURE:
//            OpenPicModePage(hiWebOsFrame.getCurrentPage());
//            break;
   
//        case VK_ZOOM:
//            //HiVideoPlayer.videoSettingShow();
//            OpenPicSizePage(hiWebOsFrame.getCurrentPage());
//            break;
        default:
            break;
    }
};

HiAudioPlayer.pageDown = function () {
    debugPrint("DOWN_cPage_musicIndex_______" + HiAudioPlayer.musicIndex);
    var cPage = Math.floor(HiAudioPlayer.musicIndex / 8) + 1;
    var aPage = Math.floor((HiAudioPlayer.audioList.length - 1) / 8) + 1;
    if (cPage <= aPage) {
        HiAudioPlayer.musicIndex = HiAudioPlayer.musicIndex + 8;
        if (HiAudioPlayer.musicIndex < (HiAudioPlayer.audioList.length - 9)) {
            HiAudioPlayer.scrollBarFrom = HiAudioPlayer.scrollBarFrom + 94 * 8;
            HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
        }
        else {

            HiAudioPlayer.musicIndex = HiAudioPlayer.audioList.length - 1;
            HiAudioPlayer.scrollBarFrom = 94 * (HiAudioPlayer.audioList.length - 8);
            HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
            $("#music_focus").css("top", 788);
            HiAudioPlayer.focusIndex = 7;
        }
    }

    $("#cPage").text(Math.floor(HiAudioPlayer.musicIndex / 8) + 1);
    debugPrint("DOWN_lastPage_musicIndex_______" + HiAudioPlayer.musicIndex);
    //$("#aPage").text("/" + (Math.floor((HiAudioPlayer.audioList.length - 1) / 8) + 1));
}
HiAudioPlayer.pageUp = function () {
    debugPrint("UP_cPage_musicIndex_______" + HiAudioPlayer.musicIndex);
    var cPage = Math.floor(HiAudioPlayer.musicIndex / 8) + 1;
    //var aPage = Math.floor((HiAudioPlayer.audioList.length - 1) / 8) + 1;
    if (cPage > 0) {
        HiAudioPlayer.musicIndex = HiAudioPlayer.musicIndex - 8;
        if (HiAudioPlayer.musicIndex > 7) {
            HiAudioPlayer.scrollBarFrom = HiAudioPlayer.scrollBarFrom - 94 * 8;
            HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
        }
        else {

            HiAudioPlayer.musicIndex = 0;
            HiAudioPlayer.scrollBarFrom = 0;
            HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
            $("#music_focus").css("top", 130);
            HiAudioPlayer.focusIndex = 0;
        }
    }

    $("#cPage").text(Math.floor(HiAudioPlayer.musicIndex / 8) + 1);
    debugPrint("UP_lastPage_musicIndex_______" + HiAudioPlayer.musicIndex);
}
HiAudioPlayer.moveLast = function () {
    if (HiAudioPlayer.musicIndex > 0) {
        HiAudioPlayer.musicIndex--;
        if (HiAudioPlayer.focusIndex > 0) {
            HiAudioPlayer.focusIndex--;
            HiAudioPlayer.listTop = HiAudioPlayer.focusTop + 94 * HiAudioPlayer.focusIndex;
            $("#music_focus").css("top", HiAudioPlayer.listTop);
        }
        else if (HiAudioPlayer.focusIndex == 0 && HiAudioPlayer.scrollBarFrom > 0) {
            debugPrint("scrllBarFrom_____" + HiAudioPlayer.scrollBarFrom);
            HiAudioPlayer.scrollBarFrom = HiAudioPlayer.scrollBarFrom - 94;
            HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
        }
    }
    debugPrint("UP_focus___" + HiAudioPlayer.focusIndex + "__UP_music_" + HiAudioPlayer.musicIndex);
    $("#cPage").text(Math.floor(HiAudioPlayer.musicIndex / 8) + 1);
}
HiAudioPlayer.moveNext = function () {
    if (HiAudioPlayer.musicIndex < HiAudioPlayer.audioList.length - 1) {
        HiAudioPlayer.musicIndex++;
        if (HiAudioPlayer.focusIndex < 7) {
            HiAudioPlayer.focusIndex++;
            HiAudioPlayer.listTop = HiAudioPlayer.focusTop + 94 * HiAudioPlayer.focusIndex;
            $("#music_focus").css("top", HiAudioPlayer.listTop);
            debugPrint("get ListTOP____________:" + HiAudioPlayer.listTop);
        }
        else if (HiAudioPlayer.focusIndex == 7) {
            HiAudioPlayer.scrollBarFrom = HiAudioPlayer.scrollBarFrom + 94;
            HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
        }

    }
    else {
        HiAudioPlayer.musicIndex = 0;
        HiAudioPlayer.focusIndex = 0;
        HiAudioPlayer.scrollBarFrom = 0;
        HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
        HiAudioPlayer.listTop = HiAudioPlayer.focusTop;
        $("#music_focus").css("top", HiAudioPlayer.listTop);
    }
    $("#cPage").text(Math.floor(HiAudioPlayer.musicIndex / 8) + 1);
};
HiAudioPlayer.closeAudioPlayer = function (value) {
    debugPrint("audioPlayer_keydown_back");
    //给CEC添加标志
    try{
        model.cec.setIsMiracastExist(0);
    }
    catch(ex){
        debugE(ex);
    }
    //添加完成
    //mpCtrlStatus_launcher = 0;
    //   HiAudioPlayer.audioStop();
    if (value == 1) {
        debugPrint("close audioPlayer");
        hiWebOsFrame.musicPlayerPage.destroy();

        //HiAudioPlayer.audioStop();
//        if (HiAudioPlayer.lastPage != null) {
//            if (HiAudioPlayer.lastPage.module == 'setting' || HiAudioPlayer.lastPage.id == 'musicPlayer' || HiAudioPlayer.lastPage.id == 'picPlayer' || HiAudioPlayer.lastPage.id == 'videoPlayer') {
//                HiAudioPlayer.lastPage = hiWebOsFrame.blankPage;
//            }
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        try {
            resumeDTV();
        } catch (e) {
            debugE(e.message);
        }
//        if (!!HiAudioPlayer.progressInternal) {
//            clearInterval(HiAudioPlayer.progressInternal);
//        }
//        }
//        else {
//            debugPrint(" Can't find video last page.")
//        }
    }
    else {
        debugPrint("on close");
//        if (!!HiAudioPlayer.progressInternal) {
//            clearInterval(HiAudioPlayer.progressInternal);
//        }
        if (!!dlna_audio_timer) {
            debugPrint("clearTimeout.dlna_audio_timer!");
            clearTimeout(dlna_audio_timer);
            dlna_audio_timer = null;


        }
        if (!!timerDlna) {
            debugPrint("clearTimeout.timerDlna!");
            clearTimeout(timerDlna);
            timerDlna = null;

        }
        mpCtrlStatus_launcher = 0;
        HiAudioPlayer.audioStop();
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
                debugPrint("RESUME dtv from dlna_musicPlayer");
                resumeDTV();
            }
            catch (e) {
                debugE("RESUME ERROR : " + e.message);
            }
        }
        //if (model.mpctrl.getMpCtrlStat() == 3) {
//        debugPrint("press HOME, do nothing!");
//       // model.mpctrl.MpCtrlStop(null);
//        //}
//        debugPrint("press HOME,do nothing!");
    }
};
var dlna_audio_timer = null;
var timerDlna = null;
HiAudioPlayer.initDlnaData = function () {
    debugPrint("HiVideoPlayer.initDlnaData Fun begin!");
    try {
        debugPrint("init music Player language  ");
        HiAudioPlayer.initLanguage();
    }
    catch (e) {
        debugE("init music Player language error " + e.message);
    }
    hiWebOsFrame.startLoading(3, "dlna_musicPlayer");
    dlna_audio_timer = setTimeout(function () {
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

            HiAudioPlayer.init(HiAudioPlayer.audioList, 0);
            hiWebOsFrame.endLoading("dlna_musicPlayer");

        }, 1000);
    }, 1000);

}