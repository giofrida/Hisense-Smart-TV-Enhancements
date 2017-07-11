/**
 * Created by Brad on 14-6-17.
 */

//playtatus: 0 pause,1 playing
//键值定义
var HiPicPlayer = {
    keyValues: {
        "keyLeft": 37,
        "keyUp": 38,
        "keyRight": 39,
        "keyDown": 40,
        "keyEnter": 13
    },
    playerStatus: 0,
    picPlayerFocus: 0,
    curr: 0,
    playTime: 0,
    winHeight: 0,
    winWidth: 0,
    imgJqr: null,
    imageScr: '',
    imageInfo: null,
    tempImg: null,
    imgArr: [],	//图片对象数组
    imgArr1: [],
    left: 0,
    rockFlag: 0,
    rockTimer: 0,
    zoomScale: [1, 2, 4, 8],
    zoomIndex: 0,
    //rotateDegree: [90, 180, 270, 0, 90, 180, 270],
    rotateDegree: [1, 2, 3, 0, 1, 2, 3],
    demoPicList: '',
    rotateIndex: 3,
    isAnimate: false,
    picList: null,
    dialogShowStatus: 0,   //0 no dialog  1.setting 2.info  3.speedList
    picSettingIndex: 0,
    picLoop: 0,
    picSpeed: [2, 3, 5, 10, 20],
    picSpeedFocus: 2,
    picSpeedIndex: 2,
    lastPage: null,
    isController: true,
    ControlTimer: null
};
//function playVideoByUrl(videoUrl, videoName) {
//    if (videoUrl != null) {
//        myVideo = document.getElementById("picPlayer");
//        myVideo.data = videoUrl;
//        //$("#picPlayer").data = videoUrl;
//        $("#videoTitle").html(videoName);
//        //显示出Player界面
//    }
//}
//function getUrlParam(name) {
//    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//    var r = window.location.search.substr(1).match(reg);
//    if (r != null) return unescape(r[2]);
//    return null;
//}

HiPicPlayer.imgReady = (function () {
    var list = [],
        intervalId = null,

    // 用来执行队列
        tick = function () {
            var i = 0;
            for (; i < list.length; i++) {
                list[i].end ? list.splice(i--, 1) : list[i]();
            }

            !list.length && stop();
        },

    // 停止所有定时器队列
        stop = function () {
            clearInterval(intervalId);
            intervalId = null;
        };

    return function (url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
            img = new Image();

        img.src = url;

        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            ready.call(img);
            load && load.call(img);
            return;
        }

        width = 0;
        height = 0;

        // 加载错误后的事件
        img.onerror = function () {
            error && error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };

        // 图片尺寸就绪
        onready = function () {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height ||
                // 如果图片已经在其他地方加载可使用面积检测
                newWidth * newHeight > 1024
                ) {
                ready.call(img);
                onready.end = true;
            }
        };
        onready();

        // 完全加载完毕的事件
        img.onload = function () {
            // onload在定时器时间差范围内可能比onready快
            // 这里进行检查并保证onready优先执行
            !onready.end && onready();

            load && load.call(img);

            // IE gif动画会循环执行onload，置空onload即可
            img = img.onload = img.onerror = null;
        };

        // 加入队列中定期执行
        if (!onready.end) {
            list.push(onready);
            // 无论何时只允许出现一个定时器，减少浏览器性能损耗
            if (intervalId === null) intervalId = setInterval(tick, 40);
        }
    };
})();
HiPicPlayer.picReturn = function () {
};
var cLanguage;
HiPicPlayer.initLanguage = function () {
    //初始化多语言
    cLanguage = getCurrentLan();
    hiWebOsFrame.setLanguage(cLanguage);
    $("#playBackModes_span_1").html(playerLang[cLanguage]["Play mode"]);//info
    $("#picturePlayBackTitle").html(playerLang[cLanguage]["Advanced Settings"]);//
    $("#pictureListTitle").html(playerLang[cLanguage]["Advanced Settings"]);
    $("#loop_span_1").html(playerLang[cLanguage]["Circulate"]);
    $("#speedControl_span_2").html(playerLang[cLanguage]["Speed control"]);//duration
    $("#speedControl_btn_2").html(playerLang[cLanguage]["Adjust"]);
    $("#picInformationTitle").html(playerLang[cLanguage]["Information"]);//setting
    $("#picPlayerName").html(playerLang[cLanguage]["Name:"]);
    $("#picPlayerRes").html(playerLang[cLanguage]["Resolution:"]);
    $("#videoPlayTimeTitle").html(playerLang[cLanguage]["Time select play"]);//Playing Time
    $("#playtimeItem").html(playerLang[cLanguage]["Set the start time of play with the help of numerical key on the remote control"]);//Use the number ke
    $("#videoListTitle").html(playerLang[cLanguage]["Play List"]);//
    if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".panelUrl li").css("float", "left");
        $(".picPlayerController").css("left", "410px");
        $(".Vinfoleft").css("text-align","right");
        $(".playBackModes_span").css("text-align","right");
        $(".speedControl_span").css("text-align","right");
    }
    else {
        $(".panelUrl li").css("float", "right");
        $(".picPlayerController").css("right", "410px");
        $(".Vinfoleft").css("text-align","left");
        $(".playBackModes_span").css("text-align","left");
        $(".speedControl_span").css("text-align","left");
    }
}

HiPicPlayer.init = function (picList, picIndex) {
    //debugPrint(picList[picIndex].thum);
    //playVideoByUrl(demourl, demoname);
    HiPicPlayer.imgArr = [];
    HiPicPlayer.picPlayerFocus = 0;
    HiPicPlayer.dialogShowStatus = 0;
    HiPicPlayer.picSettingIndex = 0;
    HiPicPlayer.picLoop = 0;
    HiPicPlayer.picSpeedFocus = 2;
    HiPicPlayer.picSpeedIndex = 2;
    HiPicPlayer.playerStatus = 0;
    HiPicPlayer.zoomIndex = 0;
    HiPicPlayer.rotateIndex = 3;
    mpCtrlStatus_launcher = 3;
    HiPicPlayer.currentSlot = 1;
    HiPicPlayer.isController = true;
    HiPicPlayer.initUIButton();
    HiPicPlayer.winHeight = $(window).height();
    HiPicPlayer.winWidth = $(window).width();
    var i = 0;

//    var rotateDegree = [-270, -180, -90, 0, 90, 180, 270];
//    var demoPicList = '';
//    var rotateIndex = 3;
//    var isAnimate = false;
//    var picList = null;
    HiPicPlayer.picList = picList;
    HiPicPlayer.curr = picIndex;
//    var num = HiPicPlayer.picList.length;
//    var cUrl = HiPicPlayer.picList[HiPicPlayer.curr].picUrl;
//    var cName = HiPicPlayer.picList[HiPicPlayer.curr].picName;


    //HiPicPlayer.initPicHtml();
    //预读一幅
//        if (picIndex < picList.length - 1) {
//            HiPicPlayer.playPicByUrl([picList[picIndex], picList[picIndex + 1]]);
//        } else {
    //图片播放器启动时强制关闭一次3D
    try {
        debugPrint("[UI] UI need to close 3D mode!", DebugLevel.ALWAYS);
        model.video.setEnum3dMode(0);
    }
    catch (ex) {
        DBG_ERROR("close 3D error!!" + ex.message);
    }
    debugPrint([picList[picIndex]][0].picUrl);
    HiPicPlayer.playPicByUrl([picList[picIndex]]);
//        }

    //debugPrint("zzy", "finish?");
    //setSize(1);

};

HiPicPlayer.hidePlayerPanel = function () {
    $("#picPlayerPanel").css("visibility", "hidden");
    $("#picInformation").css("display", "none");
    $("#picSpeedSetting").css("display", "none");
    $("#picPlayBackSetting").css("display", "none");
    HiPicPlayer.dialogShowStatus = 0;
    HiPicPlayer.isController = false;
}

function ImgObj(iNum, iWidth, iHeight, ibuffw, ibuffh) {
    this.num = iNum;
    this.width = iWidth;
    this.height = iHeight;
    this.buffw = ibuffw;
    this.buffh = ibuffh;
}

//返回图片对象信息
ImgObj.prototype.printo = function () {
    return    'number:' + this.num + ' - width:' + this.width + ' - height:' + this.height;
};


//新的图片播放器
var picStartTimer;
var picStartCount = 0;
HiPicPlayer.setPlayerUrl = function (Aurl) {
    clearTimeout(picStartTimer);
    var picRunning = model.picture.getPictureRunning();
    debugPrint(picRunning + "_______________running" + HiPicPlayer.currentSlot + "___" + Aurl);
    if (picRunning == 1) {
        //if (true) {
        //model.picture.startPic();
        if (HiPicPlayer.currentSlot == 2) {
            debugPrint("now slot2 decode progress is 1 :" + model.picture.getSLOT2Progress());
            try {
                model.picture.setSLOT2Progress(0);
            } catch (e) {
                debugPrint(e.message, DebugLevel.ERROR);
            }
            debugPrint("now slot2 decode progress is 2 :" + model.picture.getSLOT2Progress());

            try {
                debugPrint("play slot2 now ,try to  release slot 1!");
                model.picture.setSLOTClose(1);
            }
            catch (ex) {
                debugE("release slot 1 error " + ex.message);
            }

            model.picture.setPicUrl2(Aurl);
            //  model.picture.playSlot2();
            debugPrint("now slot2 decode progress is 3 :" + model.picture.getSLOT2Progress());
        }
        else {
            debugPrint("now slot1 decode progress is 1 :" + model.picture.getSLOT1Progress());
            try {
                model.picture.setSLOT1Progress(0);
            } catch (e) {
                debugPrint(e.message, DebugLevel.ERROR);
            }
            debugPrint("now slot1 decode progress is 2 :" + model.picture.getSLOT1Progress());

            try {
                debugPrint("play slot1 now ,try to  release slot 2!");
                model.picture.setSLOTClose(2);
            }
            catch (ex) {
                debugE("release slot 2 error " + ex.message);
            }

            model.picture.setPicUrl1(Aurl);
            //model.picture.playSlot1();
            debugPrint("now slot1 decode progress is 3 :" + model.picture.getSLOT1Progress());
        }
    }
    else {
        picStartTimer = setTimeout(function () {
            if (picStartCount < 10) {
                picStartCount++;
                HiPicPlayer.setPlayerUrl(Aurl);
            }
            else {
                picStartCount = 0;
                debugPrint("DECODER can't be opened!!!", DebugLevel.ERROR);
                HiPicPlayer.closePicPlayer(1);
                clearTimeout(picStartTimer);
                clearTimeout(getImageSizeTimer1);
                clearTimeout(getImageSizeTimer2);
            }
        }, 1000);

    }
}

var decodeLock = false;
HiPicPlayer.playPicByUrl = function (cPicList) {
    decodeLock = true;
    hiWebOsFrame.startLoading(30, "picPlayer");
    debugPrint(model.picture.getPictureRunning());
    if (model.picture.getPictureRunning() == 0) {
        debugPrint("PICURL**************:" + cPicList[0].picUrl);
        model.picture.startPic();
    }
    clearTimeout(picStartTimer);
    clearTimeout(getImageSizeTimer1);
    clearTimeout(getImageSizeTimer2);
    debugPrint("PICURL**************:" + cPicList[0].picUrl);
    HiPicPlayer.setPlayerUrl(cPicList[0].picUrl);

    //$('#PinfoTableTd3').text(cPicList[0].picUrl);
    //$('#li0').css({"width": HiPicPlayer.imgArr[0].width, "height": HiPicPlayer.imgArr[0].height});
    // debugPrint("zzy", $('#li' + HiPicPlayer.curr).src);
    switch (HiPicPlayer.currentSlot) {
        case 1:
            //测试使用延时一秒后播放
//            setTimeout(function () {
//                debugPrint("now slot1 decode progress is :" + model.picture.getSLOT1Progress());
//                model.picture.playSlot1();
//            }, 4000);
            HiPicPlayer.getImageSizeBySlot1(cPicList[0].picUrl);
            break;
        case 2:
            //测试使用延时一秒后播放
//            setTimeout(function () {
//                debugPrint("now slot2 decode progress is :" + model.picture.getSLOT2Progress());
//                model.picture.playSlot2();
//            }, 4000);
            HiPicPlayer.getImageSizeBySlot2(cPicList[0].picUrl);
            break;
        default :
            break;
    }

    clearTimeout(HiPicPlayer.ControlTimer);
    HiPicPlayer.ControlTimer = setTimeout(function () {
        HiPicPlayer.hidePlayerPanel();
    }, 5000);
//        if (HiPicPlayer.curr != 0) {
//            for (var k = 0; k < HiPicPlayer.curr; k++) {
//                HiPicPlayer.left = HiPicPlayer.left + HiPicPlayer.imgArr[k].width;
//            }
//            //   debugPrint("left",left);
//            $('.imgul').css({"left": -HiPicPlayer.left + "px"});
//        }
};


//获取图片大小
var getImageSizeTimer2;
var slot2DecodeTimer = 0;
HiPicPlayer.getImageSizeBySlot2 = function (FilePath) {
    //clearTimeout(getImageSizeTimer1);
    clearTimeout(getImageSizeTimer2);

    var nowSlot2Progress = model.picture.getSLOT2Progress();
    debugPrint(nowSlot2Progress + "slot2___________progress________________");
    if (nowSlot2Progress == 100) {
        decodeLock = false;
        slot2DecodeTimer = 0;
        model.picture.playSlot2();
        var tmpStr = model.picture.getSlot2();
        debugPrint(tmpStr + "2___________________________");
        hiWebOsFrame.endLoading("picPlayer");
        // debugPrint("SLOT1__INFO_IS:" + model.picture.getSlot2());
//        if (tmpStr[3] != 0) {
//            //DO  ERROR
//            debugPrint("error !!!!!!!!!!" + tmpStr[3]);
//            HiPicPlayer.imgArr[0] = null;
//        }
//        else {
        $('#picTitle').text(HiPicPlayer.picList[HiPicPlayer.curr].picName);
        $('#PinfoTableTd1').html('<span>' + HiPicPlayer.picList[HiPicPlayer.curr].picName + '</span>');
        $('#PinfoTableTd2').html('<span>' + tmpStr[6] + "*" + tmpStr[7] + '</span>');
//            decodeLock = false;
//            var tmpWidth = tmpStr[6];
//            var tmpHeight = tmpStr[7];
//            if (tmpWidth > 1920) {
//                tmpHeight = tmpHeight / tmpWidth * 1920;
//                tmpWidth = 1920;
//            }
//            if (tmpHeight > 1080) {
//                tmpWidth = tmpWidth / tmpHeight * 1080;
//                tmpHeight = 1080;
//            }
//
//            HiPicPlayer.tempImg = new ImgObj(0, tmpWidth, tmpHeight, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//            HiPicPlayer.imgArr[0] = new ImgObj(0, tmpWidth, tmpHeight, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//            HiPicPlayer.imgArr1[0] = new ImgObj(0, tmpWidth, tmpHeight, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//            debugPrint("_________________" + tmpWidth + "," + tmpHeight + "," + tmpStr[4] + "," + tmpStr[5]);
//            guijs.showSurface("PIC1", (1920 - tmpWidth) / 2, (1080 - tmpHeight) / 2, tmpWidth, tmpHeight, 0, 300, 0.0, 0.0, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//            guijs.showSurface("PIC2", (1920 - tmpWidth) / 2, (1080 - tmpHeight) / 2, tmpWidth, tmpHeight, 100, 300, 0.0, 0.0, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//
//            //debugPrint("index:  " + index + "  curr  :  " + HiPicPlayer.curr);
//        }
    }
    else {
        getImageSizeTimer2 = setTimeout(function () {
            debugPrint("retry slot2___");
            if (slot2DecodeTimer < 30) {
                slot2DecodeTimer++;
                HiPicPlayer.getImageSizeBySlot2(FilePath);
            }
            else {
                slot2DecodeTimer = 0;
                debugPrint("DECODER ERROR!!!", DebugLevel.ERROR);
                HiPicPlayer.closePicPlayer(1);

                clearTimeout(getImageSizeTimer1);
                clearTimeout(getImageSizeTimer2);
                toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[getCurrentLan()]["File not supported."], 3);

            }

        }, 1000);
    }

};


var getImageSizeTimer1;
var slot1DecodeTimer = 0;
HiPicPlayer.getImageSizeBySlot1 = function (FilePath) {
    clearTimeout(getImageSizeTimer1);
    // clearTimeout(getImageSizeTimer2);


    var nowSlot1Progress = model.picture.getSLOT1Progress();
    debugPrint(nowSlot1Progress + "slot1___________progress________________");
    if (nowSlot1Progress == 100) {
        decodeLock = false;
        slot1DecodeTimer = 0;
        model.picture.playSlot1();
        var tmpStr = model.picture.getSlot1();
        debugPrint(tmpStr[6] + "1___________________________" + tmpStr[7]);
        hiWebOsFrame.endLoading("picPlayer");
//        if (tmpStr[3] != 0) {
//            //DO  ERROR
//            debugPrint("error !!!!!!!!!!" + tmpStr[3]);
//            HiPicPlayer.imgArr[0] = null;
//        }
//        else {
        $('#picTitle').text(HiPicPlayer.picList[HiPicPlayer.curr].picName);
        $('#PinfoTableTd1').html('<span>' + HiPicPlayer.picList[HiPicPlayer.curr].picName + '</span>');
        $('#PinfoTableTd2').html('<span>' + tmpStr[6] + "*" + tmpStr[7] + '</span>');
//            decodeLock = false;
//            var tmpWidth = tmpStr[6];
//            var tmpHeight = tmpStr[7];
//            if (tmpWidth > 1920) {
//                tmpHeight = tmpHeight / tmpWidth * 1920;
//                tmpWidth = 1920;
//            }
//            if (tmpHeight > 1080) {
//                tmpWidth = tmpWidth / tmpHeight * 1080;
//                tmpHeight = 1080;
//            }
//
//            HiPicPlayer.tempImg = new ImgObj(0, tmpWidth, tmpHeight, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//            HiPicPlayer.imgArr[0] = new ImgObj(0, tmpWidth, tmpHeight, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//
//            //用于处理旋转后放大出现的问题
//            HiPicPlayer.imgArr1[0] = new ImgObj(0, tmpWidth, tmpHeight, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//
//            debugPrint("_________________" + tmpWidth + "," + tmpHeight + "," + tmpStr[4] + "," + tmpStr[5]);
//            guijs.showSurface("PIC2", (1920 - tmpWidth) / 2, (1080 - tmpHeight) / 2, tmpWidth, tmpHeight, 0, 300, 0.0, 0.0, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//            guijs.showSurface("PIC1", (1920 - tmpWidth) / 2, (1080 - tmpHeight) / 2, tmpWidth, tmpHeight, 100, 300, 0.0, 0.0, tmpStr[6] / tmpStr[4], tmpStr[7] / tmpStr[5]);
//
//            //debugPrint("index:  " + index + "  curr  :  " + HiPicPlayer.curr);
//        }
    }
    else {
        getImageSizeTimer1 = setTimeout(function () {
            debugPrint("retry slot1___");
            if (slot1DecodeTimer < 30) {
                slot1DecodeTimer++;
                HiPicPlayer.getImageSizeBySlot1(FilePath);
            }
            else {
                slot1DecodeTimer = 0;
                debugPrint("DECODER ERROR!!!", DebugLevel.ERROR);
                HiPicPlayer.closePicPlayer(1);

                clearTimeout(getImageSizeTimer1);
                clearTimeout(getImageSizeTimer2);
                toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[getCurrentLan()]["File not supported."], 3);

            }

        }, 1000);
    }

};
HiPicPlayer.setSize = function (zoomScale) {

    if (HiPicPlayer.currentSlot == 2)
        guijs.showSurface("PIC2", (HiPicPlayer.winWidth - HiPicPlayer.imgArr1[0].width * zoomScale) / 2,
            (HiPicPlayer.winHeight - HiPicPlayer.imgArr1[0].height * zoomScale) / 2,
            HiPicPlayer.imgArr1[0].width * zoomScale, HiPicPlayer.imgArr1[0].height * zoomScale, 100,
            300, 0.0, 0.0, HiPicPlayer.imgArr1[0].buffw, HiPicPlayer.imgArr1[0].buffh, HiPicPlayer.rotateDegree[HiPicPlayer.rotateIndex]);
    else
        guijs.showSurface("PIC1", (HiPicPlayer.winWidth - HiPicPlayer.imgArr1[0].width * zoomScale) / 2,
            (HiPicPlayer.winHeight - HiPicPlayer.imgArr1[0].height * zoomScale) / 2,
            HiPicPlayer.imgArr1[0].width * zoomScale, HiPicPlayer.imgArr1[0].height * zoomScale, 100,
            300, 0.0, 0.0, HiPicPlayer.imgArr1[0].buffw, HiPicPlayer.imgArr1[0].buffh, HiPicPlayer.rotateDegree[HiPicPlayer.rotateIndex]);


};
HiPicPlayer.videoPlayOrPause = function () {

    //playing = true;
    if (HiPicPlayer.playerStatus == 0) {

        //var myVideo = document.getElementById("picPlayer");

        HiPicPlayer.playTime = setInterval(function () {
            if (HiPicPlayer.picLoop == 0) {
                if (HiPicPlayer.curr < HiPicPlayer.picList.length - 1)
                    HiPicPlayer.next();
                else {
                    clearInterval(HiPicPlayer.playTime);
                    $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                    if (HiPicPlayer.picPlayerFocus == 0)
                        $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                    else
                        $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                    HiPicPlayer.playerStatus = 0;
                }
            }
            else if (HiPicPlayer.picLoop == 1) {
                if (HiPicPlayer.curr < HiPicPlayer.picList.length - 1)
                    HiPicPlayer.next();
                else {
                    HiPicPlayer.curr = 0;
                    HiPicPlayer.playPicByUrl([HiPicPlayer.picList[0]]);
                }
            }
        }, HiPicPlayer.picSpeed[HiPicPlayer.picSpeedIndex] * 1000);


//        $("#picPlayer").play(1);
        $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
        if (HiPicPlayer.picPlayerFocus == 0)
            $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
        else
            $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");

        HiPicPlayer.playerStatus = 1;
    }
    else if (HiPicPlayer.playerStatus == 1) {
        clearInterval(HiPicPlayer.playTime);
        $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
        if (HiPicPlayer.picPlayerFocus == 0)
            $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
        else
            $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
        HiPicPlayer.playerStatus = 0;

    }

};

HiPicPlayer.prev = function () {

    if (HiPicPlayer.curr <= 0) {

        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang2[getCurrentLan()]["Already last file"], 3);
        return;
    }
    if (!HiPicPlayer.isAnimate) {
        changeSlot();
        HiPicPlayer.zoomIndex = 0;
        HiPicPlayer.rotateIndex = 3;
        //$('#li0').css({"width": HiPicPlayer.imgArr[0].width, "height": HiPicPlayer.imgArr[0].height});
        //HiPicPlayer.imgScroll(-1);

        HiPicPlayer.curr--;
        HiPicPlayer.playPicByUrl([HiPicPlayer.picList[HiPicPlayer.curr]]);
        //HiPicPlayer.setSize(1);
    }
};

HiPicPlayer.zoomOut = function () {
    if (HiPicPlayer.zoomIndex < HiPicPlayer.zoomScale.length - 1) {
        HiPicPlayer.zoomIndex++;

        //释放资源
        if (HiPicPlayer.currentSlot == 2) {

            try {
                debugPrint("zoom slot2 now ,try to  release slot 1!");
                model.picture.setSLOTClose(1);
            }
            catch (ex) {
                debugE("release slot 1 error " + ex.message);
            }

        }
        else if (HiPicPlayer.currentSlot == 1) {

            try {
                debugPrint("zoom slot1 now ,try to  release slot 2!");
                model.picture.setSLOTClose(2);
            }
            catch (ex) {
                debugE("release slot 2 error " + ex.message);
            }

        }
        //debugPrint("zzy", HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex] + ";" + HiPicPlayer.imgArr[0].width + ";" + HiPicPlayer.imgArr[0].height);
        //$('#li0').css({"width": HiPicPlayer.imgArr[0].width * HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex], "height": HiPicPlayer.imgArr[0].height * HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex]});
        // debugPrint("zzy", $('#li' + HiPicPlayer.curr).src);
        debugPrint(HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex] + "_____get SIze:  " + model.picture.getPictureSize());
        model.picture.setPictureSize(HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex]);
        //HiPicPlayer.setSize(HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex]);

    }
};

HiPicPlayer.zoomIn = function () {
    if (HiPicPlayer.zoomIndex > 0) {
        HiPicPlayer.zoomIndex--;
        //$('#li0').css({"width": HiPicPlayer.imgArr[0].width * HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex], "height": HiPicPlayer.imgArr[0].height * HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex]});
        //HiPicPlayer.setSize(HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex]);
        debugPrint(HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex] + "_____get SIze:  " +
            model.picture.getPictureSize()
        )
        ;
        model.picture.setPictureSize(HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex]);

    }
};

HiPicPlayer.imgLeft = function () {
    debugPrint("current function : imgLEFT");
    if (HiPicPlayer.picList[HiPicPlayer.curr].picName.indexOf(".gif") != -1) {
        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[getCurrentLan()]["Not available"], 3);
        return;
    }
    if (HiPicPlayer.rotateIndex >= 0 && HiPicPlayer.rotateIndex <= 6) {
        // debugPrint("LEFT-1", imgArr[curr].width);
        HiPicPlayer.rotateIndex--;
        if (HiPicPlayer.rotateIndex == -1) {
            HiPicPlayer.rotateIndex = 3;
        }
        HiPicPlayer.rotate(HiPicPlayer.rotateDegree[HiPicPlayer.rotateIndex]);
        //    $('.imgulWrap').css({'height': imgArr[curr].height * zoomScale[zoomIndex] + 'px', 'margin-top': (winHeight - imgArr[curr].height * zoomScale[zoomIndex]) / 2 + 'px'});
    }
};

HiPicPlayer.imgRight = function () {
    debugPrint("current function : imgRight");
    if (HiPicPlayer.picList[HiPicPlayer.curr].picName.indexOf(".gif") != -1) {
        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[getCurrentLan()]["Not available"], 3);
        return;
    }
    if (HiPicPlayer.rotateIndex >= 0 && HiPicPlayer.rotateIndex <= 6) {
        HiPicPlayer.rotateIndex++;
        if (HiPicPlayer.rotateIndex == 7) {
            HiPicPlayer.rotateIndex = 3;
        }
        //debugPrint("HiMedia_____rotateRight______", HiPicPlayer.rotateDegree[HiPicPlayer.rotateIndex]);
        HiPicPlayer.rotate(HiPicPlayer.rotateDegree[HiPicPlayer.rotateIndex]);
    }


};
HiPicPlayer.imgInfo = function () {
    HiPicPlayer.dialogShowStatus = 2;
    $("#picInformation").css("display", "block");
}
HiPicPlayer.imgSetting = function () {
    HiPicPlayer.dialogShowStatus = 1;
    $("#picPlayBackSetting").css("display", "block");

};
HiPicPlayer.rotate = function (degree) {
    //debugPrint("HiMedia______curr________", HiPicPlayer.curr + ";" + degree);
    //$('#li0').css({"-o-transform": "rotate(" + degree + "deg)", "left": 0});
    //HiPicPlayer.setSize(1);
    //转之前，充值缩放标志

    HiPicPlayer.zoomIndex = 0;
    model.picture.setPictureSize(HiPicPlayer.zoomScale[HiPicPlayer.zoomIndex]);
//    var tmpRotateHeight = HiPicPlayer.imgArr[0].height;
//    var tmpRotateWidth = HiPicPlayer.imgArr[0].width;
//    var tmpBuffw = HiPicPlayer.imgArr[0].buffw;
//    var tmpBuffh = HiPicPlayer.imgArr[0].buffh;
//    if (HiPicPlayer.rotateIndex % 2 == 0) {
//        tmpRotateHeight = HiPicPlayer.imgArr[0].width;
//        tmpRotateWidth = HiPicPlayer.imgArr[0].height;
//        if (tmpRotateWidth > 1920) {
//            tmpRotateHeight = tmpRotateHeight / tmpRotateWidth * 1920;
//            tmpRotateWidth = 1920;
//        }
//        if (tmpRotateHeight > 1080) {
//            tmpRotateWidth = tmpRotateWidth / tmpRotateHeight * 1080;
//            tmpRotateHeight = 1080;
//        }
//
//    }
//    HiPicPlayer.imgArr1[0].width = tmpRotateWidth;
//    HiPicPlayer.imgArr1[0].height = tmpRotateHeight;
//    debugPrint(tmpRotateWidth + "," + tmpRotateHeight + "," + tmpBuffw + "," + tmpBuffh);
    if (HiPicPlayer.currentSlot == 2) {
        debugPrint("rotate  slot 2 degree is : " + degree);
        try {
            debugPrint("rotate slot2 now ,try to  release slot 1!");
            model.picture.setSLOTClose(1);
        }
        catch (ex) {
            debugE("release slot 1 error " + ex.message);
        }
        model.picture.rotateSlot2(degree);
    }
//        guijs.showSurface("PIC2", (HiPicPlayer.winWidth - tmpRotateWidth) / 2,
//            (HiPicPlayer.winHeight - tmpRotateHeight) / 2, tmpRotateWidth, tmpRotateHeight,
//            100, 300, 0.0, 0.0, tmpBuffw, tmpBuffh, degree);
    else if (HiPicPlayer.currentSlot == 1) {
        debugPrint("rotate slot 1 degree is : " + degree);
        try {
            debugPrint("rotate slot1 now ,try to  release slot 2!");
            model.picture.setSLOTClose(2);
        }
        catch (ex) {
            debugE("release slot 2 error " + ex.message);
        }
        model.picture.rotateSlot1(degree);
    }
//        guijs.showSurface("PIC1", (HiPicPlayer.winWidth - tmpRotateWidth) / 2,
//            (HiPicPlayer.winHeight - tmpRotateHeight) / 2, tmpRotateWidth, tmpRotateHeight,
//            100, 300, 0.0, 0.0, tmpBuffw, tmpBuffh, degree);

}
;

HiPicPlayer.next = function () {

    if (HiPicPlayer.curr >= HiPicPlayer.picList.length - 1) {
        toastMsg(playerLang[getCurrentLan()]["Information"], playerLang2[getCurrentLan()]["Already last file"], 3);

        return;
    }
    //if (!HiPicPlayer.isAnimate) {
    changeSlot();
    HiPicPlayer.zoomIndex = 0;
    HiPicPlayer.rotateIndex = 3;
    // $('#li0').css({"width": HiPicPlayer.imgArr[0].width, "height": HiPicPlayer.imgArr[0].height});
    //HiPicPlayer.imgScroll(1);
    HiPicPlayer.curr++;
    HiPicPlayer.playPicByUrl([HiPicPlayer.picList[HiPicPlayer.curr]]);
    // HiPicPlayer.setSize(1);
    //}
};

HiPicPlayer.keydownhander = function (event) {
//    if (launcher_player_switch != 3) {
//        return false;
//    }
    debugPrint("key_event:____" + event.keyCode);
    event = event || window.event;
    if (!!HiPicPlayer.ControlTimer && HiPicPlayer.isController) {
        //任何键按下后清空留秒计时
        debugPrint("clear Timer");
        clearTimeout(HiPicPlayer.ControlTimer);
        HiPicPlayer.ControlTimer = setTimeout(function () {
            HiPicPlayer.hidePlayerPanel();
        }, 5000);
    }
    //$("#videoProgressBar").html(event.keyCode);
    switch (checkDMPkeycode(event.keyCode)) {
        case VK_ENTER:
            if (!!HiPicPlayer.isController) {
                debugPrint("HiPicPlayer.picPlayerFocus:" + HiPicPlayer.picPlayerFocus);
                if (HiPicPlayer.dialogShowStatus == 0) {
                    switch (HiPicPlayer.picPlayerFocus) {
                        case 0:
                            HiPicPlayer.videoPlayOrPause();
                            break;
                        case 1:
                            HiPicPlayer.prev();
                            break;
                        case 2:
                            HiPicPlayer.next();
                            break;
                        case 3:
                            if (HiPicPlayer.playerStatus == 1) {
                                clearInterval(HiPicPlayer.playTime);
                                $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                                if (HiPicPlayer.picPlayerFocus == 0)
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                                else
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                                HiPicPlayer.playerStatus = 0;

                            }
                            if (!decodeLock)
                                HiPicPlayer.zoomIn();
                            break;
                        case 4:
                            if (HiPicPlayer.playerStatus == 1) {
                                clearInterval(HiPicPlayer.playTime);
                                $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                                if (HiPicPlayer.picPlayerFocus == 0)
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                                else
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                                HiPicPlayer.playerStatus = 0;

                            }
                            if (!decodeLock)
                                HiPicPlayer.zoomOut();
                            break;
                        case 5:
                            debugPrint("decodeLock" + decodeLock);
                            if (HiPicPlayer.playerStatus == 1) {
                                clearInterval(HiPicPlayer.playTime);
                                $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                                if (HiPicPlayer.picPlayerFocus == 0)
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                                else
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                                HiPicPlayer.playerStatus = 0;

                            }
                            if (!decodeLock)
                                HiPicPlayer.imgLeft();
                            break;
                        case 6:
                            if (HiPicPlayer.playerStatus == 1) {
                                clearInterval(HiPicPlayer.playTime);
                                $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                                if (HiPicPlayer.picPlayerFocus == 0)
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                                else
                                    $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                                HiPicPlayer.playerStatus = 0;

                            }
                            if (!decodeLock)
                                HiPicPlayer.imgRight();
                            break;
                        case 7:
                            HiPicPlayer.imgSetting();
                            break;
                        case 8:
                            HiPicPlayer.imgInfo();
                            break;
                        default :
                            break;
                    }
                }
                else if (HiPicPlayer.dialogShowStatus == 1) {
                    if (HiPicPlayer.picSettingIndex == 0) {
                        if (HiPicPlayer.picLoop == 0) {
                            HiPicPlayer.picLoop = 1;
                            $("#playBackModes_img_1").attr("src", "img/himedia/picPlayer/chacked2.png");

                        }
                        else if (HiPicPlayer.picLoop == 1) {
                            HiPicPlayer.picLoop = 0;
                            $("#playBackModes_img_1").attr("src", "img/himedia/picPlayer/unchecked2.png");
                        }
                    }
                    else if (HiPicPlayer.picSettingIndex == 1) {
                        $("#picPlayBackSetting").css("display", "none");
                        $("#picSpeedSetting").css("display", "block");
                        HiPicPlayer.dialogShowStatus = 3;

                    }
                }
                else if (HiPicPlayer.dialogShowStatus == 3) {
                    $("#picSpeed_img_" + (HiPicPlayer.picSpeedIndex + 1)).attr("src", "img/himedia/videoPlayer/button_choose_normal.png");
                    $("#picSpeed_img_" + (HiPicPlayer.picSpeedFocus + 1)).attr("src", "img/himedia/videoPlayer/button_choose_selected.png");
                    HiPicPlayer.picSpeedIndex = HiPicPlayer.picSpeedFocus;
                    //刷新播放时间。
                    clearInterval(HiPicPlayer.playTime);
                    if (HiPicPlayer.playerStatus == 1) {
                        HiPicPlayer.playTime = setInterval(function () {
                            if (HiPicPlayer.picLoop == 0) {
                                if (HiPicPlayer.curr < HiPicPlayer.picList.length - 1)
                                    HiPicPlayer.next();
                                else {
                                    clearInterval(HiPicPlayer.playTime);
                                    $("#picPlayerStatus").attr("src", "img/himedia/videoPlayer/pause_status.png");
                                    if (HiPicPlayer.picPlayerFocus == 0)
                                        $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                                    else
                                        $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                                    HiPicPlayer.playerStatus = 0;
                                }
                            }
                            else if (HiPicPlayer.picLoop == 1) {
                                if (HiPicPlayer.curr < HiPicPlayer.picList.length - 1)
                                    HiPicPlayer.next();
                                else {
                                    HiPicPlayer.curr = 0;
                                    HiPicPlayer.playPicByUrl([HiPicPlayer.picList[0]]);
                                }
                            }
                        }, HiPicPlayer.picSpeed[HiPicPlayer.picSpeedIndex] * 1000);
                    }

                }
            }
            else {
                $("#picPlayerPanel").css("visibility", "visible");
                HiPicPlayer.isController = true;
                debugPrint("clear Timer");
                clearTimeout(HiPicPlayer.ControlTimer);
                HiPicPlayer.ControlTimer = setTimeout(function () {
                    HiPicPlayer.hidePlayerPanel();
                }, 5000);
            }
            break;
        case VK_UP:
            if (!!HiPicPlayer.isController) {
                if (HiPicPlayer.dialogShowStatus == 1) {
                    if (HiPicPlayer.picSettingIndex == 1) {
                        HiPicPlayer.picSettingIndex--;
                        $("#speedControl_btn_2").removeClass("speedControl_btn_foucs").addClass("speedControl_btn");
                        $("#speedControl_btn_1").removeClass("speedControl_btn").addClass("speedControl_btn_foucs");

                    }
                }
                else if (HiPicPlayer.dialogShowStatus == 3) {
                    if (HiPicPlayer.picSpeedFocus > 0) {
                        $("#picSpeed_li_" + (HiPicPlayer.picSpeedFocus + 1)).removeClass("picSpeed_li_focus").addClass("picSpeed_li");
                        $("#picSpeed_li_" + HiPicPlayer.picSpeedFocus).removeClass("picSpeed_li").addClass("picSpeed_li_focus");
                        HiPicPlayer.picSpeedFocus--;
                    }
                }
            }
            else {
                $("#picPlayerPanel").css("visibility", "visible");
                HiPicPlayer.isController = true;
                debugPrint("clear Timer");
                clearTimeout(HiPicPlayer.ControlTimer);
                HiPicPlayer.ControlTimer = setTimeout(function () {
                    HiPicPlayer.hidePlayerPanel();
                }, 5000);
            }
            break;
        case
        VK_DOWN:
            if (!!HiPicPlayer.isController) {
                if (HiPicPlayer.dialogShowStatus == 1) {
                    if (HiPicPlayer.picSettingIndex == 0) {
                        $("#speedControl_btn_1").removeClass("speedControl_btn_foucs").addClass("speedControl_btn");
                        $("#speedControl_btn_2").removeClass("speedControl_btn").addClass("speedControl_btn_foucs");
                        HiPicPlayer.picSettingIndex++;

                    }
                }
                else if (HiPicPlayer.dialogShowStatus == 3) {
                    if (HiPicPlayer.picSpeedFocus < HiPicPlayer.picSpeed.length - 1) {
                        HiPicPlayer.picSpeedFocus++;
                        $("#picSpeed_li_" + HiPicPlayer.picSpeedFocus).removeClass("picSpeed_li_focus").addClass("picSpeed_li");
                        $("#picSpeed_li_" + (HiPicPlayer.picSpeedFocus + 1)).removeClass("picSpeed_li").addClass("picSpeed_li_focus");
                    }
                }
            }
            else {
                $("#picPlayerPanel").css("visibility", "visible");
                HiPicPlayer.isController = true;
                debugPrint("clear Timer");
                clearTimeout(HiPicPlayer.ControlTimer);
                HiPicPlayer.ControlTimer = setTimeout(function () {
                    HiPicPlayer.hidePlayerPanel();
                }, 5000);
            }
            break;
        case VK_RIGHT:
            if (!!HiPicPlayer.isController) {
                if (HiPicPlayer.dialogShowStatus == 0) {
                    switch (HiPicPlayer.picPlayerFocus) {
                        case 0:
                            if (HiPicPlayer.playerStatus == 1) {
                                $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");
                            }
                            else if (HiPicPlayer.playerStatus == 0) {
                                $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play1.png");
                            }
                            $("#picPlayerButton2").attr("src", "img/himedia/videoPlayer/last2.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        case 1:
                            $("#picPlayerButton2").attr("src", "img/himedia/videoPlayer/last1.png");
                            $("#picPlayerButton3").attr("src", "img/himedia/videoPlayer/next2.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        case 2:
                            $("#picPlayerButton4").attr("src", "img/himedia/videoPlayer/zoomin2.png");
                            $("#picPlayerButton3").attr("src", "img/himedia/videoPlayer/next1.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        case 3:
                            $("#picPlayerButton5").attr("src", "img/himedia/videoPlayer/zoomout2.png");
                            $("#picPlayerButton4").attr("src", "img/himedia/videoPlayer/zoomin1.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        case 4:
                            $("#picPlayerButton6").attr("src", "img/himedia/videoPlayer/clockwise2.png");
                            $("#picPlayerButton5").attr("src", "img/himedia/videoPlayer/zoomout1.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        case 5:
                            $("#picPlayerButton7").attr("src", "img/himedia/videoPlayer/anticlockwise2.png");
                            $("#picPlayerButton6").attr("src", "img/himedia/videoPlayer/clockwise1.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        case 6:
                            $("#picPlayerButton8").attr("src", "img/himedia/videoPlayer/setting2.png");
                            $("#picPlayerButton7").attr("src", "img/himedia/videoPlayer/anticlockwise1.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        case 7:
                            $("#picPlayerButton9").attr("src", "img/himedia/videoPlayer/info2.png");
                            $("#picPlayerButton8").attr("src", "img/himedia/videoPlayer/setting1.png");
                            HiPicPlayer.picPlayerFocus++;
                            break;
                        default :
                            break;
                    }
                }
            }
            else {
                $("#picPlayerPanel").css("visibility", "visible");
                HiPicPlayer.isController = true;
                debugPrint("clear Timer");
                clearTimeout(HiPicPlayer.ControlTimer);
                HiPicPlayer.ControlTimer = setTimeout(function () {
                    HiPicPlayer.hidePlayerPanel();
                }, 5000);
            }
            break;
        case VK_LEFT:
            if (!!HiPicPlayer.isController) {
                if (HiPicPlayer.dialogShowStatus == 0) {
                    switch (HiPicPlayer.picPlayerFocus) {
                        case 1:
                            if (HiPicPlayer.playerStatus == 1) {
                                $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                            }
                            else if (HiPicPlayer.playerStatus == 0) {
                                $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
                            }
                            $("#picPlayerButton2").attr("src", "img/himedia/videoPlayer/last1.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        case 2:
                            $("#picPlayerButton2").attr("src", "img/himedia/videoPlayer/last2.png");
                            $("#picPlayerButton3").attr("src", "img/himedia/videoPlayer/next1.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        case 3:
                            $("#picPlayerButton4").attr("src", "img/himedia/videoPlayer/zoomin1.png");
                            $("#picPlayerButton3").attr("src", "img/himedia/videoPlayer/next2.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        case 4:
                            $("#picPlayerButton5").attr("src", "img/himedia/videoPlayer/zoomout1.png");
                            $("#picPlayerButton4").attr("src", "img/himedia/videoPlayer/zoomin2.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        case 5:
                            $("#picPlayerButton6").attr("src", "img/himedia/videoPlayer/clockwise1.png");
                            $("#picPlayerButton5").attr("src", "img/himedia/videoPlayer/zoomout2.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        case 6:
                            $("#picPlayerButton7").attr("src", "img/himedia/videoPlayer/anticlockwise1.png");
                            $("#picPlayerButton6").attr("src", "img/himedia/videoPlayer/clockwise2.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        case 7:
                            $("#picPlayerButton8").attr("src", "img/himedia/videoPlayer/setting1.png");
                            $("#picPlayerButton7").attr("src", "img/himedia/videoPlayer/anticlockwise2.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        case 8:
                            $("#picPlayerButton9").attr("src", "img/himedia/videoPlayer/info1.png");
                            $("#picPlayerButton8").attr("src", "img/himedia/videoPlayer/setting2.png");
                            HiPicPlayer.picPlayerFocus--;
                            break;
                        default :
                            break;
                    }
                }
            }
            else {
                $("#picPlayerPanel").css("visibility", "visible");
                HiPicPlayer.isController = true;
                debugPrint("clear Timer");
                clearTimeout(HiPicPlayer.ControlTimer);
                HiPicPlayer.ControlTimer = setTimeout(function () {
                    HiPicPlayer.hidePlayerPanel();
                }, 5000);
            }
            break;
        case VK_BACK:
            switch (HiPicPlayer.dialogShowStatus) {
                case 0:
                    HiPicPlayer.closePicPlayer(1);
                    break;
                case 1:
                    HiPicPlayer.dialogShowStatus = 0;
                    //0 no dialog  1.setting 2.info  3.speedList
                    $("#picPlayBackSetting").css("display", "none");
                    break;
                case 2:
                    HiPicPlayer.dialogShowStatus = 0;
                    $("#picInformation").css("display", "none");
                    break;
                case 3:
                    HiPicPlayer.dialogShowStatus = 0;
                    $("#picSpeedSetting").css("display", "none");
                    break;
                default:
                    break;
            }
            break;
        case VK_PICTURE:
            OpenPicModePage(hiWebOsFrame.getCurrentPage());
            break;
//        case VK_S_MODE:
//            OpenSndModePage(hiWebOsFrame.getCurrentPage());
//            break;
//        case VK_ZOOM:
//            //HiPicPlayer.videoSettingShow();
//            OpenPicSizePage(hiWebOsFrame.getCurrentPage());
//            break;
        default:
            break;
    }
}
;
HiPicPlayer.closePicPlayer = function (value) {
    //HiPicPlayer.videoStop();
    mpCtrlStatus_launcher = 0;
    if (value == 1) {
        //guijs.showSurface("PIC2", 0, 0, 0, 0, 0, 0, 0.0, 0.0, 0, 0);
        //guijs.showSurface("PIC1", 0, 0, 0, 0, 0, 0, 0.0, 0.0, 0, 0);
        clearTimeout(picStartTimer);
        clearTimeout(getImageSizeTimer1);
        clearTimeout(getImageSizeTimer2);
        clearInterval(HiPicPlayer.playTime);
        model.picture.stopPic();
        hiWebOsFrame.getCurrentPage().destroy();
        hiWebOsFrame.himedia_fileBrowser.open();
        hiWebOsFrame.himedia_fileBrowser.hiFocus();
    }
    else {
        debugPrint("PRESS HOME ,DO NOTING");
        clearTimeout(picStartTimer);
        clearTimeout(getImageSizeTimer1);
        clearTimeout(getImageSizeTimer2);
        clearInterval(HiPicPlayer.playTime);
        //guijs.showSurface("PIC2", 0, 0, 0, 0, 0, 300, 0.0, 0.0, 0, 0);
//        guijs.showSurface("PIC2", 0, 0, 0, 0, 0, 0, 0.0, 0.0, 0, 0);
//        guijs.showSurface("PIC1", 0, 0, 0, 0, 0, 0, 0.0, 0.0, 0, 0);
        model.picture.stopPic();
        debugPrint("PRESS HOME ,DO NOTING222222222222");
        if (dlnaStatus_pic == 1) {
            dlnaStatus_pic = 0;
            //model.picture.setPictureRunning(0);
        }
    }
};
function changeSlot() {
    if (HiPicPlayer.currentSlot == 1) {
        HiPicPlayer.currentSlot = 2;
    }
    else {
        HiPicPlayer.currentSlot = 1;
    }
}
HiPicPlayer.initUIButton = function () {
    if (HiPicPlayer.playerStatus == 1) {
        $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
    }
    else if (HiPicPlayer.playerStatus == 0) {
        $("#picPlayerButton1").attr("src", "img/himedia/videoPlayer/play2.png");
    }
    $("#picPlayerButton2").attr("src", "img/himedia/videoPlayer/last1.png");

    $("#picPlayerButton3").attr("src", "img/himedia/videoPlayer/next1.png");

    $("#picPlayerButton4").attr("src", "img/himedia/videoPlayer/zoomin1.png");


    $("#picPlayerButton5").attr("src", "img/himedia/videoPlayer/zoomout1.png");

    $("#picPlayerButton6").attr("src", "img/himedia/videoPlayer/clockwise1.png");

    $("#picPlayerButton7").attr("src", "img/himedia/videoPlayer/anticlockwise1.png");


    $("#picPlayerButton8").attr("src", "img/himedia/videoPlayer/setting1.png");

    $("#picPlayerButton9").attr("src", "img/himedia/videoPlayer/info1.png");

}