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
    zoomScale: [1, 2, 4, 8, 8],
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
HiPicPlayer.init = function (picList, picIndex) {
    //debugPrint(picList[picIndex].thum);
    //playVideoByUrl(demourl, demoname);
    picflag = false;
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
    HiPicPlayer.winHeight = $(window).height();
    HiPicPlayer.winWidth = $(window).width();
    //给CEC添加标志
    try{
        model.cec.setIsMiracastExist(1);
    }
    catch(ex){
        debugE(ex);
    }
    //添加完成
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
    debugPrint([picList[picIndex]][0].picUrl);
    HiPicPlayer.playPicByUrl([picList[picIndex]]);
//        }

    //debugPrint("zzy", "finish?");
    //setSize(1);

};

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
            }

        }, 1000);
    }

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


HiPicPlayer.keydownhander = function (event) {
    debugPrint("key_event:____" + event.keyCode);
    event = event || window.event;
    switch (event.keyCode) {

        case VK_BACK:
        case VK_EXIT:
        case VK_STOP:
//            switch (HiPicPlayer.dialogShowStatus) {
//                case 0:
                    HiPicPlayer.closePicPlayer(1);
//                    break;
//                case 1:
//                    HiPicPlayer.dialogShowStatus = 0;
//                    //0 no dialog  1.setting 2.info  3.speedList
//                    $("#picPlayBackSetting").css("display", "none");
//                    break;
//                case 2:
//                    HiPicPlayer.dialogShowStatus = 0;
//                    $("#picInformation").css("display", "none");
//                    break;
//                case 3:
//                    HiPicPlayer.dialogShowStatus = 0;
//                    $("#picSpeedSetting").css("display", "none");
//                    break;
//                default:
//                    break;
//            }
            break;

//        case VK_S_MODE:
//            OpenSndModePage(hiWebOsFrame.getCurrentPage());
//            break;
//        case VK_ZOOM:
//            //HiVideoPlayer.videoSettingShow();
//            OpenPicSizePage(hiWebOsFrame.getCurrentPage());
//            break;
        default:
            break;
    }
}
;
HiPicPlayer.closePicPlayer = function (value) {
    //给CEC添加标志
    try{
        model.cec.setIsMiracastExist(0);
    }
    catch(ex){
        debugE(ex);
    }
    debugPrint("dlna_picPlayer closePicPlayer function begin,NOW MODE IS " + value);
    // mpCtrlStatus_launcher = 0;
    if (value == 1) {
        clearTimeout(picStartTimer);
        clearTimeout(getImageSizeTimer1);
        clearTimeout(getImageSizeTimer2);
        clearInterval(HiPicPlayer.playTime);
        try {
            resumeDTV();
        } catch (e) {
            debugE(e.message);
        }
        hiWebOsFrame.picPlayerPage.destroy();
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();

    }
    else {
        if (!!dlna_pic_timer) {
            debugPrint("clearTimeout.dlna_pic_timer!");
            clearTimeout(dlna_pic_timer);
            dlna_pic_timer = null;
        }
        if (!!timerDlna) {
            debugPrint("clearTimeout.timerDlna!");
            clearTimeout(timerDlna);
            timerDlna = null;
        }
        debugPrint("closePicPlayer without value");
        hiWebOsFrame.endLoading("picPlayer");
        clearTimeout(picStartTimer);
        clearTimeout(getImageSizeTimer1);
        clearTimeout(getImageSizeTimer2);
        clearInterval(HiPicPlayer.playTime);
        if(!picflag) {
            debugPrint("picflag false,stopPic function start");
            model.picture.stopPic();
            model.picture.setDLNAPictureRunning(0);
            picflag = true;
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
                debugPrint("RESUME dtv from dlna_picPlayer");
                resumeDTV();
            }
            catch (e) {
                debugE("RESUME ERROR : " + e.message);
            }
        }
//        try {
//            debugPrint("RESUME DTV");
//            resumeDTV();
//        } catch (e) {
//            debugE(e.message);
//        }
//        if (dlnaStatus_pic == 1) {
//            dlnaStatus_pic = 0;
//            //model.picture.setPictureRunning(0);
//        }
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
var dlna_pic_timer = null;
var timerDlna = null;
HiPicPlayer.initDlnaData = function () {
//    hiWebOsFrame.endLoading("onPictureRunning");
    dlna_pic_timer = setTimeout(function () {
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
            hiWebOsFrame.endLoading("onPictureRunning");
            HiPicPlayer.init(HiPicPlayer.picList, 0);
        }, 1000);
    }, 1000);

}