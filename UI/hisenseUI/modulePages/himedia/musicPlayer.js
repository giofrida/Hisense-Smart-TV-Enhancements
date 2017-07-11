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
    musicTotalTime: 0,
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
    progressInternal: null,
    audioName: ""
};

HiAudioPlayer.openDlnaPlayer = function (dlnaName, dlnaArtist, dlnaAlbum, dlnaThumb) {
//    if (!!dlnaName) {
//        return false;
//    }
    debugPrint("dlna____" + dlnaName + dlnaArtist);
    HiAudioPlayer.audioList = [
        {"audioUrl": "", "audioName": dlnaName}
    ];
    HiAudioPlayer.cIndex = 0;
    HiAudioPlayer.createPlaylist();
    //debugPrint("___________________________url is " + url + ";audio name is " + name);
    HiAudioPlayer.scrollBarFrom = 0;//初始化滚动条位置
    HiAudioPlayer.focusTop = 130;
    HiAudioPlayer.focusIndex = HiAudioPlayer.playingIndex = HiAudioPlayer.musicIndex;

    //创建滚动条
//    $('#wrapper').jscrollbar({
//        width: 5, //滚动条宽度
//        color: '#999999', //滚动条颜色
//        opacity: 0.7, //透明度
//        position: 'inner',//滚动条位置
//        //  mouseScrollDirection: 'horizontal',
//        //  showXBar: false,
//        keyControl: false,
//        showYBar: true
//
//    });
    HiAudioPlayer.currentMode = HiAudioPlayer.modes.all;//初始化播放模式
//    HiAudioPlayer.jsb2 = $('#wrapper').jscrollbar('getObject');
//    $("#cPage").text(Math.floor(HiAudioPlayer.musicIndex / 8) + 1);
//    $("#aPage").text("/" + (Math.floor((HiAudioPlayer.audioList.length - 1) / 8) + 1));
//    if (!!HiAudioPlayer.progressInternal) {
//        clearInterval(HiAudioPlayer.progressInternal);
//    }
//    HiAudioPlayer.progressInternal = window.setInterval("HiAudioPlayer.getProgress()", 1000);
    if (!!dlnaThumb) {
        debugPrint("________audio__________thumb____________" + dlnaThumb);

        $('#musicIcon').attr("src", dlnaThumb);
    }
    //$("#audioPlayer").data = audioUrl;
    $("#audioTitle").html(dlnaName);
    $('#audioSinger').html(dlnaArtist);
    $('#audioCD').html(dlnaAlbum);
};

HiAudioPlayer.playMusicByUrl = function (audioUrl, audioName, pIndex, audioThumb, audioArtist, audioAlbum) {
    if (audioUrl != null) {
        debugPrint("___________________" + audioUrl);
        model.mpctrl.PlayMusic(audioUrl);
        $("#indicate" + HiAudioPlayer.playingIndex).css("visibility", "hidden");
        HiAudioPlayer.playingIndex = pIndex;
        HiAudioPlayer.playerStatus = 1;
        HiAudioPlayer.audioName = audioName;
        //model.mpctrl.onMpCtrlPlaytimeCurrentchanged=HiAudioPlayer.getProgress();

        //myVideo.onPlayStateChange = checkPlayState();

        //显示出Player界面
    }
};
//UI change
HiAudioPlayer.UIchange = function () {

    $("#indicate" + HiAudioPlayer.playingIndex).css("visibility", "visible");
    $("#status").attr('src', 'img/himedia/musicPlayer/status-pause.png');
    //$('#musicIcon').attr("src", "img/himedia/musicPlayer/music-icon.png");

    //$("#audioPlayer").data = audioUrl;
    $("#audioTitle").html(HiAudioPlayer.audioName);

}
HiAudioPlayer.playLastForBT = function () {
    if (HiAudioPlayer.playingIndex > 0) {
        HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[HiAudioPlayer.playingIndex - 1].audioUrl,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex - 1].audioName,
            HiAudioPlayer.playingIndex - 1,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex - 1].audioThumb,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex - 1].audioArtist,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex - 1].audioAlbum);
        //playOrPause();
    }
};
HiAudioPlayer.playNextForBT = function () {
    if (HiAudioPlayer.playingIndex < HiAudioPlayer.audioList.length - 1) {
        HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioUrl,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioName,
            HiAudioPlayer.playingIndex + 1,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioThumb,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioArtist,
            HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioAlbum);
        //playOrPause();
    }
};
HiAudioPlayer.playNext = function () {
    debugPrint(HiAudioPlayer.currentMode + "_____________currentPage___________");
    switch (HiAudioPlayer.currentMode) {
        case HiAudioPlayer.modes.all:
            if (HiAudioPlayer.playingIndex < HiAudioPlayer.audioList.length - 1) {
                HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioUrl,
                    HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioName,
                    HiAudioPlayer.playingIndex + 1,
                    HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioThumb,
                    HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioArtist,
                    HiAudioPlayer.audioList[HiAudioPlayer.playingIndex + 1].audioAlbum);
                //playOrPause();
            }
            else {
                HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[0].audioUrl,
                    HiAudioPlayer.audioList[0].audioName, 0, HiAudioPlayer.audioList[0].audioThumb,
                    HiAudioPlayer.audioList[0].audioArtist, HiAudioPlayer.audioList[0].audioAlbum);
                //playOrPause();
            }
            break;
        case HiAudioPlayer.modes.single:
            debugPrint("do single playing_____________");
            HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[HiAudioPlayer.playingIndex].audioUrl,
                HiAudioPlayer.audioList[HiAudioPlayer.playingIndex].audioName,
                HiAudioPlayer.playingIndex,
                HiAudioPlayer.audioList[HiAudioPlayer.playingIndex].audioThumb,
                HiAudioPlayer.audioList[HiAudioPlayer.playingIndex].audioArtist,
                HiAudioPlayer.audioList[HiAudioPlayer.playingIndex].audioAlbum
            );
            //playOrPause();
            break;
        case HiAudioPlayer.modes.random:
            var randomIndex = HiAudioPlayer.getRandomNum(0, HiAudioPlayer.audioList.length - 1);
            HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[randomIndex].audioUrl,
                HiAudioPlayer.audioList[randomIndex].audioName,
                randomIndex,
                HiAudioPlayer.audioList[randomIndex].audioThumb,
                HiAudioPlayer.audioList[randomIndex].audioArtist,
                HiAudioPlayer.audioList[randomIndex].audioAlbum);
            //playOrPause();
            break;


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
        clearInterval(HiAudioPlayer.progressInternal);

        HiAudioPlayer.playerStatus = 0;

    }

};


HiAudioPlayer.ff = function () {
    var a = model.mpctrl.getMpCtrlPlaytimeTotal() * this.ffScale;
    model.mpctrl.setMpCtrlPlaytimeCurrent(model.mpctrl.getMpCtrlPlaytimeCurrent() + a);
    //myVideo.currentTime += a;
};
HiAudioPlayer.fr = function () {
    var a = model.mpctrl.getMpCtrlPlaytimeTotal() * this.ffScale;
    model.mpctrl.setMpCtrlPlaytimeCurrent(model.mpctrl.getMpCtrlPlaytimeCurrent() - a);
};
HiAudioPlayer.audioInfoShow = function () {
    debugPrint("______________________________" + model.mpctrl.getMpCtrlPlaytimeTotal());
//    Dialog.type = 2;
//    Dialog.param = {
//        image: 'launcher/img/loading.png',
//        text1: "ffffff",
//        text2: "tttttt"
//    };
//    $("#msgbox").html(Dialog.get());
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
        $("#currentTime").text(HiAudioPlayer.getTimeTextWithHour(currentTime));
//        $("#currentTime").css("margin-left", "570px");
//        $("#duration").html(HiAudioPlayer.getTimeTextWithHour(totalTime));
    }
    else {
        $("#currentTime").text(HiAudioPlayer.getTimeText(currentTime));
//        $("#currentTime").css("margin-left", "650px");
//        $("#duration").html(HiAudioPlayer.getTimeText(totalTime));
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

var cLanguage;
HiAudioPlayer.initLanguage = function () {
    //初始化多语言
    cLanguage = getCurrentLan();
    hiWebOsFrame.setLanguage(cLanguage);
    debugPrint("[HiMusicPlayer] current Language is : " + playerLang[cLanguage]["Play mode"]);
    $("#change_font").html(playerLang[cLanguage]["Play mode"]);//info
    $("#chupdown_font").html(playerLang[cLanguage]["Page Up/Down"]);
    $("#list_header").html(playerLang[cLanguage]["Name:"]);
    if (hiWebOsFrame.getHTMLDir() == HTMLDIR.RTL) {
        $("#footer").attr("dir", "rtl");
    } else {
        $("#footer").attr("dir", "ltr");
    }

}
HiAudioPlayer.init = function (audioList, cIndex) {
    DBG_ALWAYS("____" + hiWebOsFrame.getHTMLDir());

    var url = audioList[cIndex].audioUrl;
    var name = audioList[cIndex].audioName;
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
    HiAudioPlayer.jsb2 = $('#wrapper').jscrollbar('getObject');

    if (HiAudioPlayer.cIndex < 8) {
        HiAudioPlayer.focusIndex = HiAudioPlayer.musicIndex = HiAudioPlayer.cIndex;
        $("#music_focus").css("top", 130 + 94 * HiAudioPlayer.cIndex);
    }
    else {
        HiAudioPlayer.musicIndex = HiAudioPlayer.cIndex;
        HiAudioPlayer.scrollBarFrom = HiAudioPlayer.scrollBarFrom + 94 * (HiAudioPlayer.cIndex - 7);
        debugPrint("_________________" + HiAudioPlayer.scrollBarFrom);
        HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
        $("#music_focus").css("top", 788);
        HiAudioPlayer.focusIndex = 7;
    }

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
        case VK_ENTER:
//        case keyValues.Green:
            debugPrint("________________" + HiAudioPlayer.playingIndex + "______________" + HiAudioPlayer.musicIndex);
            if (HiAudioPlayer.playingIndex != HiAudioPlayer.musicIndex) {
                debugPrint("________2________" + HiAudioPlayer.playingIndex + "_______2_______" + HiAudioPlayer.musicIndex);
                HiAudioPlayer.playMusicByUrl(HiAudioPlayer.audioList[HiAudioPlayer.musicIndex].audioUrl,
                    HiAudioPlayer.audioList[HiAudioPlayer.musicIndex].audioName,
                    HiAudioPlayer.musicIndex,
                    HiAudioPlayer.audioList[HiAudioPlayer.musicIndex].audioThumb,
                    HiAudioPlayer.audioList[HiAudioPlayer.musicIndex].audioArtist,
                    HiAudioPlayer.audioList[HiAudioPlayer.musicIndex].audioAlbum);
                //HiAudioPlayer.playOrPause();
            }
            else HiAudioPlayer.audioPlayOrPause();

            break;
        case VK_UP:
            HiAudioPlayer.moveLast();
            // playMusicByUrl(musicArray[musicIndex].audioUrl, musicArray[musicIndex].audioName);


            break;
        case VK_DOWN:
            HiAudioPlayer.moveNext();
            //  playMusicByUrl(musicArray[musicIndex].audioUrl, musicArray[musicIndex].audioName);
            break;
        case VK_RED:
            if (HiAudioPlayer.currentMode < 2)
                HiAudioPlayer.currentMode++;
            else HiAudioPlayer.currentMode = 0;
            $("#mode").attr("src", "img/himedia/musicPlayer/mode" + HiAudioPlayer.currentMode + ".png");
            break;
        case VK_BACK:
        case VK_STOP:
            HiAudioPlayer.closeAudioPlayer(1);
            break;
        case VK_PLAY:
            if (HiAudioPlayer.playerStatus == 0) {
                model.mpctrl.setMpCtrlSpeed(1);
                $("#status").attr('src', 'img/himedia/musicPlayer/status-pause.png');
                HiAudioPlayer.playerStatus = 1;
            }

            break;
        case VK_PAUSE:
            if (HiAudioPlayer.playerStatus == 1) {
                model.mpctrl.setMpCtrlSpeed(0);
                $("#status").attr('src', 'img/himedia/musicPlayer/status-play.png');
                HiAudioPlayer.playerStatus = 0;

            }
            break;
        case VK_NEXT:
            HiAudioPlayer.playNextForBT();
            break;
        case VK_LAST:
            HiAudioPlayer.playLastForBT();
            break;
        case VK_FAST_FWD:
            // HiAudioPlayer.ff();
            break;
        case VK_FAST_BKW:
            //HiAudioPlayer.fr();
            break;
//        case VK_PICTURE:
//            OpenPicModePage(hiWebOsFrame.getCurrentPage());
//            break;
        case VK_S_MODE:
            OpenSndModePage(hiWebOsFrame.getCurrentPage());
            break;
        case VK_CHANNEL_DOWN://下翻页
            HiAudioPlayer.pageDown();
            break;
        case VK_CHANNEL_UP://上翻页
            HiAudioPlayer.pageUp();
            break;
//        case VK_ZOOM:
//            //HiVideoPlayer.videoSettingShow();
//            OpenPicSizePage(hiWebOsFrame.getCurrentPage());
//            break;
        default:
            break;
    }
};

HiAudioPlayer.pageDown = function () {
    if (HiAudioPlayer.audioList.length > 8) {
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
    }
    //$("#aPage").text("/" + (Math.floor((HiAudioPlayer.audioList.length - 1) / 8) + 1));
}
HiAudioPlayer.pageUp = function () {
    if (HiAudioPlayer.audioList.length > 8) {
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
        if (HiAudioPlayer.audioList.length > 8) {
            HiAudioPlayer.listPageChange(HiAudioPlayer.scrollBarFrom);
        }

        HiAudioPlayer.listTop = HiAudioPlayer.focusTop;
        $("#music_focus").css("top", HiAudioPlayer.listTop);
    }
    $("#cPage").text(Math.floor(HiAudioPlayer.musicIndex / 8) + 1);
};
HiAudioPlayer.closeAudioPlayer = function (value) {
    debugPrint("audioPlayer_keydown_back");
    //mpCtrlStatus_launcher = 0;
    //   HiAudioPlayer.audioStop();
    if (value == 1) {
        debugPrint("close audioPlayer");
        hiWebOsFrame.musicPlayerPage.destroy();

//        if (HiAudioPlayer.lastPage != null) {
//            if (HiAudioPlayer.lastPage.module == 'setting' || HiAudioPlayer.lastPage.id == 'musicPlayer' || HiAudioPlayer.lastPage.id == 'picPlayer' || HiAudioPlayer.lastPage.id == 'videoPlayer') {
//                HiAudioPlayer.lastPage = hiWebOsFrame.blankPage;
//            }
        hiWebOsFrame.himedia_fileBrowser.open();
        hiWebOsFrame.himedia_fileBrowser.hiFocus();
        HiAudioPlayer.audioStop();
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
        mpCtrlStatus_launcher = 0;
        HiAudioPlayer.audioStop();
        //if (model.mpctrl.getMpCtrlStat() == 3) {
//        debugPrint("press HOME, do nothing!");
//       // model.mpctrl.MpCtrlStop(null);
//        //}
//        debugPrint("press HOME,do nothing!");
    }
};