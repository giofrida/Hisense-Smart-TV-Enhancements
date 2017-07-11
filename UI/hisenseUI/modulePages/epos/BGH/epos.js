/**
 * Created by Hisense on 2014/12/1.
 */
//epos page中的operate data
var eposPageData = {
    "operateData": {
        "scrollTimer": null,
        "scrollToRight": true,
        "checkTvSignalTimer": null,
        "slideshowTimer": null,
        "resetPannelFunTimer": null,
        "uniqueUsbListEposFunTimer": null,
        "checkUsbToPlayDemoVideoFunTimer": null,
        "eposPageonOpenfunTimer": null,
        "tabIndex": 0,
        "langIndex": 0,
        "panelLoopCount": 0,
        "PANEL_MAX_LOOP_COUNT": 5,
        "PANEL_ANIMATION_DURATION": 7 * 1000,
        "EPOS_HIDE_DURATION": 30 * 1000,

        "slide": 0,
        "isDMPPlaying": false,
        "lastUsb": "",
        "g_currentInput": 0,
        "g_prepareToExit": false,
        "g_needRepeat": false,
        "isInsideVideoPlaying": false,

        "g_videoPath": "",
        "g_repeatVideoTimer": null,
        "g_checkDemoVideoTimer": null,
        "checkTvSignalFunTimer": null,
        "g_usbArray": ["", ""],

        "imageList": [
            ["img/epos/uhd_epos_uhd_down.png", "img/epos/uhd_epos_picture_down.png", "img/epos/uhd_epos_smart_down.png", "img/epos/uhd_epos_connect_down.png"],
            ["img/epos/uhd_epos_uhd_focus.png", "img/epos/uhd_epos_picture_focus.png", "img/epos/uhd_epos_smart_focus.png", "img/epos/uhd_epos_connect_focus.png"]
        ],
        "idList": ["tab_uhd", "tab_picture", "tab_smarttv", "tab_connect"],
        "imgIdList": ["img_uhd", "img_picture", "img_smarttv", "img_connect"],
        "txtIdList": ["txt_uhd", "txt_picture", "txt_smarttv", "txt_connect"],
        "text_uhd": ["Quality", "Enjoy flawless moving images with brilliant colors and realistic picture detail", "Enhance viewing with improved sound quality and performance"],
        "text_picture": ["Apps", "Browse and enjoy thousand of titles and streaming content.Enjoy movies,shows, and music with the click of a button"],
        "text_smarttv": ["Smart", "Rich content & easy to use", "Web browser, App store, Anyview Cast"],
        "text_connect": ["Connectivity", "Built in Dual band Wi-Fi", "USB Video", "HDMI"]
    },
    rewrite: function (page) {
    }
};
//var text_uhd = ["", "", ""];
//var text_picture = ["", "", ""];
//var text_smarttv = ["", "","","",""];
//var text_connect = ["", "", "","",""];
////初始化多语言
//function initText(){
//    text_uhd = ["Quality", "Enjoy flawless moving images with brilliant colors and realistic picture detail", "Enhance viewing with improved sound quality and performance"];
//    text_picture = ["APPs", "Browse and enjoy thousand of titles and streaming content Enjoy movies,shows, and music with the click of a button"];
//    text_smarttv = ["SMART", "Rich content & easy to use"," Web browser",",App store, Anyview Cast"];
//    text_connect = ["Connectivity", "Built in Dual <br/>band Wi-Fi", "USB 3.0","HDMI 2.0","HiMedia"];
//
//
//    var langIdx = 1;
//    try {
//        langIdx = model.language.getOsd();
//    }catch (e){
//        debugPrint(e.message);
//    }
//    debugPrint(" get osd "+langIdx);
//    var lanStr = "English";
//    switch (langIdx) {
//        case 1:
//            lanStr = "English";
//            break;
//        case 4:
//            lanStr = "Spanish";
//            text_uhd = ["Desempeño", "Disfrute de imágenes impecables en movimiento con colores brillantes y detalles realistas", "Mejore la visualización con una mejor calidad y rendimiento del sonido"];
//            text_picture = ["Calidad","Reproduzca sorprendentes contenidos 4K", "El contenido HD escala a 4K", "Garantía en partes y mano de obra"];
//            text_smarttv = ["Smart TV", "Disfruta películas , programas y música con un solo click","Navegador Web","Función de pantalla compartida"];
//            text_connect = ["Tecnología", "Construido en Wi-Fi de banda dual", "Un rendimiento más rápido que nunca","&nbsp Diseño super Delgado",  "Ajuste automático de brillantez de la TV"];
//            break;
//        case 2:
//            lanStr = "French";
//            text_uhd = ["Performance", "Profitez d’images animées parfaites avec des couleurs éclatantes et des détails réalistes", "Améliorez l’affichage avec une qualité sonore et une performance accrues"];
//            text_picture = ["Qualite", "Lisez en continu un\ncontenu 4K brillant", "Votre contenu HD\noptimisé au 4K", "Garantie sur les\npièces et la main-d'oeuvre"];
//            text_smarttv = ["Smart TV", "Visionnez instantanément des films et des émissions de télé","Navigateur Web","Option de partage d’écran","Partage à domicile"];
//            text_connect = ["Technologie", "Développé en Wi-Fi bi-bande", "Performance plus rapide que jamais auparavant",  "Modèle ultra mince","Ajuste automatiquement la brllance de l'écran"];
//            break;
//        default:
//            lanStr = "English";
//            break;
//    }
//    $("#tab_text_connect").html(text_connect[0]);
//    $("#tab_text_picture").html(text_picture[0]);
//    $("#tab_text_smarttv").html(text_smarttv[0]);
//    $("#tab_text_uhd").html(text_uhd[0]);
//
//    $("#txt_connect1").html(text_connect[1]);
//    $("#txt_connect2").html(text_connect[2]);
//    $("#txt_connect3").html(text_connect[3]);
//    $("#txt_connect4").html(text_connect[4]);
//
//    $("#txt_smarttv1").html(text_smarttv[1]);
//    $("#txt_smarttv2").html(text_smarttv[2]);
//    $("#txt_smarttv3").html(text_smarttv[3]);
//
//    $("#txt_picture1").html(text_picture[1]);
//    $("#txt_picture2").html(text_picture[2]);
//    $("#txt_picture3").html(text_picture[3]);
//    $("#txt_uhd1").html(text_uhd[1]);
//    $("#txt_uhd2").html(text_uhd[2]);
//
//}


//获取epos page的data
function getEposPageData(opts) {
    opts.CaE = [];
    return eposPageData;
}
/*
 * 添加USB
 * @param：
 *   usbPath:usb的路径
 * */
function addUSB(usbPath) {
    for (var i = 0; i < eposPageData.operateData.g_usbArray.length; i++) {
        if (eposPageData.operateData.g_usbArray[i].length == 0) {
            eposPageData.operateData.g_usbArray[i] = usbPath;
            break;
        }
    }
    debugPrint("[epos] addUSB, usb array is:" + eposPageData.operateData.g_usbArray.toString());
}
/*
 * 移除USB
 * @param：
 *   usbPath:usb的路径
 * */
function removeUSB(usbPath) {
    for (var i = 0; i < eposPageData.operateData.g_usbArray.length; i++) {
        if (eposPageData.operateData.g_usbArray[i] == usbPath) {
            eposPageData.operateData.g_usbArray[i] = "";
            break;
        }
    }
    debugPrint("[epos] remove, usb array is:" + eposPageData.operateData.g_usbArray.toString());
}
/*
 * 读取USB列表，查看有没有Demo视频
 * */
function checkDemoVideo() {
    var usbStr = "";
    try {
        usbStr = Hisense.File.read("usbs", 0);
        debugPrint("usbs list: " + JSON.stringify(usbStr));
    }
    catch (ex) {
        debugPrint("read usbs error:" + ex.message, DebugLevel.ERROR);
    }
    if (isNaN(usbStr)) {
        if (usbStr.split("\n").length > 0) {
            return uniqueUsbListEpos(usbStr.split("\n"));
        }
        else {
            debugPrint("NO USB DEVICE NOW!!!!");
            return null;
        }
    }
    else {
        debugPrint("Can't read the file:/tmp/usbs!!!!!!!!!!!!!!!!!", DebugLevel.ERROR);
        return null;
    }
}
function uniqueUsbListEpos(arr) {
    debugPrint("arr: " + JSON.stringify(arr));
    for (var i = 0; i < arr.length; i++) {
        debugPrint("usb arr: " + arr[i] + "#######" + arr.length);
        if (arr[i].indexOf(";") != -1) {
            var tempArr = [];
            tempArr = arr[i].split(";");
            var demoPath = "file://" + tempArr[0] + "video_demo.mp4";
            eposPageData.operateData.g_usbArray[i] = tempArr[0];
            debugPrint("demoPath: " + demoPath + "*****" + JSON.stringify(tempArr) + "*****" + tempArr[0]);
            var demoFileIsValid = false;
            try {
                demoFileIsValid = Hisense.File.exists(demoPath.substring(12), 3);
                debugPrint("video_demo.mp4 ? : " + demoFileIsValid);
                if (!demoFileIsValid) {
                    demoPath = "file://" + tempArr[0] + "hisense_demo.mp4";
                    demoFileIsValid = Hisense.File.exists(demoPath.substring(12), 3);
                    debugPrint("hisense_demo.mp4 ? : " + demoFileIsValid);
                }
            }
            catch (ex) {
                debugPrint(ex.message);
            }
            if (demoFileIsValid == true) {
                debugPrint("demo file is true!");
                eposPageData.operateData.g_videoPath = demoPath;
                eposPageData.operateData.lastUsb = eposPageData.operateData.g_usbArray[i];
                pauseDTV();
                eposPageData.operateData.uniqueUsbListEposFunTimer = setTimeout(function () {
                    model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
                    debugPrint("fileIsValid: " + eposPageData.operateData.g_videoPath + "play movie");
                    eposPageData.operateData.isDMPPlaying = true;
                    $('#slideshow').hide();
                    clearInterval(eposPageData.operateData.slideshowTimer);
                    eposPageData.operateData.slideshowTimer = null;
                }, 1000);
                return;
            }
        }
    }
}
//播放demo视频
function checkUsbToPlayDemoVideo() {
    debugPrint("check usb to play demo video!");
    for (var i = 0; i < eposPageData.operateData.g_usbArray.length; i++) {
        if (eposPageData.operateData.g_usbArray[i].length > 0) {
            var path = "file://" + eposPageData.operateData.g_usbArray[i] + "video_demo.mp4";//Hisense_TV_Demo.mp4
            var fileIsValid = false;//Hisense.File.exists(path.substring(12), 3);
            try {
                fileIsValid = Hisense.File.exists(path.substring(12), 3);
                if(!fileIsValid){
                    path = "file://" + eposPageData.operateData.g_usbArray[i] + "hisense_demo.mp4";
                    fileIsValid = Hisense.File.exists(path.substring(12), 3);
                }
            }
            catch (ex) {
                debugPrint("fileIsValid error:" + ex.message, DebugLevel.ERROR);
            }
            if (!!fileIsValid) {//play video
                debugPrint("[epos] checkUsbToPlayDemoVideo, to play:" + path);
                eposPageData.operateData.g_videoPath = path;
                eposPageData.operateData.lastUsb = eposPageData.operateData.g_usbArray[i];
                pauseDTV();
                eposPageData.operateData.checkUsbToPlayDemoVideoFunTimer = setTimeout(function () {
                    model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
                    eposPageData.operateData.isDMPPlaying = true;
                    debugPrint("[epos]to hide backup pictures!");
                    $('#slideshow').hide();
                    clearInterval(eposPageData.operateData.slideshowTimer);
                    eposPageData.operateData.slideshowTimer = null;
                }, 1000);
                return;
            }
            break;
        }
    }
}
//重复播放demo视频
function repeatDemoVideo() {
    model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
    eposPageData.operateData.g_repeatVideoTimer = setInterval(function () {
        var status = model.mpctrl.getMpCtrlStat();
        debugPrint("[epos] status is:" + status);
        if (status != 2) {
            model.mpctrl.StopMpctrl(null);
            model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
            return;
        }
        var currentTime = model.mpctrl.getMpCtrlPlaytimeCurrent();
        var totalTime = model.mpctrl.getMpCtrlPlaytimeTotal();
        debugPrint("[epos] playing video, currentTime = " + currentTime + ", totalTime = " + totalTime);
        if (currentTime >= totalTime) {
            //repeat playing
            model.mpctrl.StopMpctrl(null);
            model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
        }
    }, 1000);
}
//初始化插件
function initPlugin() {
    try {

        //写retailmode标志为open
        Hisense.File.write("retailmode", "open", 0); //write data to /tmp/retailmode. open: running, close: stopped
        //modeljs.sendam(":am,dtv_app_mtk,:resume=dtv");
        resumeDTV();
        //model.video.setEnumPictureMode(VideoModelDefines.SL2_TVAPI_I32_VIDEO_ENUM_PICTURE_VIVID);//解决商场模式下，设置图像模式不记忆的问题
        debugPrint("[epos] initPlugin done!");
        eposPageData.operateData.g_checkDemoVideoTimer = setTimeout(function () {
            checkDemoVideo();
        }, 2000);
        //checkDemoVideo();
    }
    catch (ex) {
        debugPrint("[epos]initPlugin error:" + ex.message, DebugLevel.ERROR);
    }
}
//初始化文本
function initText() {
    //给Tab写Tech-SmartTV-Apps-Quality
    DBG_ALWAYS("EPOS_BGH initText!");
    $("#tab_text_connect").html(eposPageData.operateData.text_connect[0]);
    $("#tab_text_smarttv").html(eposPageData.operateData.text_smarttv[0]);
    $("#tab_text_picture").html(eposPageData.operateData.text_picture[0]);
    $("#tab_text_uhd").html(eposPageData.operateData.text_uhd[0]);
    //给Tech panel写解释文字
    $("#txt_connect1").html(eposPageData.operateData.text_connect[1]);
    $("#txt_connect2").html(eposPageData.operateData.text_connect[2]);
    $("#txt_connect3").html(eposPageData.operateData.text_connect[3]);
    $("#txt_connect4").html(eposPageData.operateData.text_connect[4]);
    //给SmartTV panel写解释文字
    $("#txt_smarttv1").html(eposPageData.operateData.text_smarttv[1]);
    $("#txt_smarttv2").html(eposPageData.operateData.text_smarttv[2]);
    // $("#txt_smarttv3").html(eposPageData.operateData.text_smarttv[3]);
    //给App panel写解释文字
    $("#txt_picture1").html(eposPageData.operateData.text_picture[1]);
    //给Quality panel写解释文字
    $("#txt_uhd1").html(eposPageData.operateData.text_uhd[1]);
    $("#txt_uhd2").html(eposPageData.operateData.text_uhd[2]);

}
/*
 *tab(Quality/Apps/SmartTV/Tech)执行动画
 * @param：
 *   id：tab的id
 *   toRight: true-右移 false-不移动
 * */
function doAnimation(id, toRight) {
    if (toRight) {
        $('#' + eposPageData.operateData.idList[id]).animate({
            translateX: '985px'
        }, 500, 'ease-out');
    }
    else {
        $('#' + eposPageData.operateData.idList[id]).animate({
            translateX: '0px'
        });
    }
}
//panel执行动画
function animatePanel() {
    //如果tab要滚动到右边
    if (eposPageData.operateData.scrollToRight) {
        //panel隐藏
        $('#' + eposPageData.operateData.imgIdList[eposPageData.operateData.tabIndex]).hide();
        //tab文字字体恢复正常
        $('#' + eposPageData.operateData.txtIdList[eposPageData.operateData.tabIndex]).css({
            "font-weight": "normal"
        });
        //tab图片变暗(高亮的tab图片隐藏，灰色的tab图片显示)
        $('#' + 'tab_' + eposPageData.operateData.tabIndex + '1').hide();
        //500毫秒后下一个tab右移
        setTimeout("doAnimation(" + eposPageData.operateData.tabIndex + ",1)", 500);
        //下一个tab文字字体变粗
        $('#' + eposPageData.operateData.txtIdList[eposPageData.operateData.tabIndex + 1]).css({
            "font-weight": "bold"
        });
        //下一个tab图片高亮(灰色tab图片隐藏，高亮的tab图片显示)
        $('#' + 'tab_' + (eposPageData.operateData.tabIndex + 1) + '1').show();
        //1000-500毫秒后下一个tab的panel显示
        setTimeout("showPanel('" + eposPageData.operateData.imgIdList[eposPageData.operateData.tabIndex + 1] + "', '1')", 1000);
        //如果到了第三个tab(SmartTV)，就不能这样动作(因为第三个tab向右移完后，最后一个tab不能向右移动了)
        if (eposPageData.operateData.tabIndex == eposPageData.operateData.idList.length - 2) {
            eposPageData.operateData.scrollToRight = false;
        }
    }
    else {
        //到了第三个tab,scrollToRight为false。id取0,1,2
        var id = (eposPageData.operateData.idList.length - 2 - eposPageData.operateData.tabIndex) % eposPageData.operateData.idList.length;
        //第id+1个tab(SmartTV)的panel隐藏
        $('#' + eposPageData.operateData.imgIdList[id + 1]).hide();
        //第id+1个tab的文字字体恢复正常
        $('#' + eposPageData.operateData.txtIdList[id + 1]).css({
            "font-weight": "normal"
        });
        //第id+1个tab变暗(高亮tab图片隐藏，灰色的tab图片显示)
        $('#' + 'tab_' + (id + 1) + '1').hide();
        //500毫秒后第id个tab执行动画，不移动
        setTimeout("doAnimation(" + id + ",0)", 500);
        //第id个tab文字字体变粗
        $('#' + eposPageData.operateData.txtIdList[id]).css({
            "font-weight": "bold"
        });
        //第id个tab图片高亮(灰色tab图片隐藏，高亮tab图片显示)
        $('#' + 'tab_' + id + '1').show();
        //1200-500毫秒后第id个tab的panel显示
        setTimeout("showPanel('" + eposPageData.operateData.imgIdList[id] + "', '1')", 1200);
        //如果到了第三个tab(SmartTV)，就不能这样动作
        if (eposPageData.operateData.tabIndex == eposPageData.operateData.idList.length - 2) {
            eposPageData.operateData.scrollToRight = true;
            //panel自加，若panel循环了一周，回到第一个tab的panel
            eposPageData.operateData.panelLoopCount++;
            if (eposPageData.operateData.panelLoopCount >= eposPageData.operateData.PANEL_MAX_LOOP_COUNT) {
                eposPageData.operateData.panelLoopCount = 0;
                setTimeout("showePos(0)", eposPageData.operateData.PANEL_ANIMATION_DURATION / 2);
            }
        }
    }
    //如果是前两个tab，tabIndex自加1
    eposPageData.operateData.tabIndex = (eposPageData.operateData.tabIndex + 1) % (eposPageData.operateData.idList.length - 1);
}
//重置panel
function resetPannel() {
    //给tab写Tech文字
    // $("#txt_connect").val("eposPageData.operateData.text_connect[0]");
    //第2~4个tab图片为灰色显示，第一个tab图片为高亮显示
    $('#' + 'tab_11').hide();
    $('#' + 'tab_21').hide();
    $('#' + 'tab_31').hide();
    $('#' + 'tab_01').show();
    //下方的横幅隐藏
    $("#epos_banner").animate({
        translateY: '250px'
    });
    //250毫秒后执行：
    setTimeout(function () {
        //第四个tab(Tech)字体恢复正常
        $('#' + eposPageData.operateData.txtIdList[3]).css({
            "font-weight": "normal"
        });
        //第一个tab(Quality)字体变粗
        $('#' + eposPageData.operateData.txtIdList[0]).css({
            "font-weight": "bold"
        });
        //第四个tab(Tech)的panel隐藏
        showPanel(eposPageData.operateData.imgIdList[3], 0);
        //第一个tab(Quality)的pannel显示
        showPanel(eposPageData.operateData.imgIdList[0], 1);
        //tab不执行动画
        doAnimation(2, 0);
        doAnimation(1, 0);
        doAnimation(0, 0);
    }, 250);
    //5000-250毫秒后执行：
    eposPageData.operateData.resetPannelFunTimer = setTimeout(function () {
        //下方的横幅复位
        $("#epos_banner").animate({
            translateY: '0px'
        });
        //tabIndex清零
        eposPageData.operateData.tabIndex = 0;
        //定时器scrollTimer开启，5秒后，每隔7秒执行一次panel的简单动画
        if (eposPageData.operateData.scrollTimer != null) {
            DBG_ALWAYS("resetPannel need CLEAR eposPageData.operateData.scrollTimer");
            clearInterval(eposPageData.operateData.scrollTimer);
            eposPageData.operateData.scrollTimer = null;
        }
        eposPageData.operateData.scrollTimer = setInterval(function () {
            animatePanelSimple();
        }, eposPageData.operateData.PANEL_ANIMATION_DURATION);
    }, 5000);
    debugPrint('resetPannel is called!');
}
//panel执行的简单动画
function animatePanelSimple() {
    debugPrint('animate tabindex:' + eposPageData.operateData.tabIndex);
    //panel隐藏
    $('#' + eposPageData.operateData.imgIdList[eposPageData.operateData.tabIndex]).hide();
    //tab文字字体恢复正常
    $('#' + eposPageData.operateData.txtIdList[eposPageData.operateData.tabIndex]).css({
        "font-weight": "normal"
    });
    //tab图片变暗(高亮图片隐藏，灰色图片显示)
    $('#' + 'tab_' + eposPageData.operateData.tabIndex + '1').hide();
    //500毫秒后tab向右移动
    setTimeout("doAnimation(" + eposPageData.operateData.tabIndex + ",1)", 500);
    //下一个tab的文字字体变粗
    $('#' + eposPageData.operateData.txtIdList[eposPageData.operateData.tabIndex + 1]).css({
        "font-weight": "bold"
    });
    //下一个tab的图片高亮显示
    $('#' + 'tab_' + (eposPageData.operateData.tabIndex + 1) + '1').show();
    //大约1000-500毫秒后显示下一个tab的panel
    setTimeout("showPanel('" + eposPageData.operateData.imgIdList[eposPageData.operateData.tabIndex + 1] + "', '1')", 1000);
    //如果到了第三个tab(SmartTV)，关闭scrollTimer；7秒后执行resetPanel
    if (eposPageData.operateData.tabIndex == eposPageData.operateData.idList.length - 2) {
        clearInterval(eposPageData.operateData.scrollTimer);
        debugPrint('after clearInterval, scrollTimer is ' + eposPageData.operateData.scrollTimer);
        eposPageData.operateData.scrollTimer = null;
        var resetPannelTimer = null;
        resetPannelTimer = setTimeout(function () {
            if (!!resetPannelTimer) {
                clearTimeout(resetPannelTimer);
                resetPannelTimer = null;
            }
            resetPannel()
        }, eposPageData.operateData.PANEL_ANIMATION_DURATION);
    }
    //如果是前两个tab(Quality/Apps),tabIndex加1
    else {
        eposPageData.operateData.tabIndex = (eposPageData.operateData.tabIndex + 1) % (eposPageData.operateData.idList.length - 1);
    }
    debugPrint('animate end tabindex:' + eposPageData.operateData.tabIndex);
}
/*
 * 显示panel
 * @param
 *   id: panel的id
 *   toShow: 0-隐藏，1-显示
 * */
function showPanel(id, toShow) {
    if (toShow) {
        $('#' + id).show();
    }
    else {
        $('#' + id).hide();
    }
}
/*
 * 显示epos
 * @param
 *   isShow: 0-关闭scrollTimer定时器，隐藏横幅和logo,30秒后再显示epos;1-上方的logo和下方的横幅都不移动，并且每隔7秒执行一次panel动画
 * */
function showePos(isShow) {
    if (isShow) {
        //横幅显示
        $("#epos_banner").animate({
            translateY: '0px'
        });
        //logo显示
        $("#logo").animate({
            translateY: '0px'
        });
        //每隔7秒钟显示一次panel动画
        if (eposPageData.operateData.scrollTimer != null) {
            DBG_ALWAYS("showePos need CLEAR eposPageData.operateData.scrollTimer");
            clearInterval(eposPageData.operateData.scrollTimer);
            eposPageData.operateData.scrollTimer = null;
        }
        eposPageData.operateData.scrollTimer = setInterval(function () {
            animatePanel()
        }, eposPageData.operateData.PANEL_ANIMATION_DURATION);
    }
    else {
        //关闭scrollTimer定时器
        clearInterval(eposPageData.operateData.scrollTimer);
        //横幅隐藏
        $("#epos_banner").animate({
            translateY: '250px'
        });
        //logo隐藏
        $("#logo").animate({
            translateY: '-80px'
        });
        //30秒后再显示epos
        setTimeout("showePos(1)", eposPageData.operateData.EPOS_HIDE_DURATION);
    }
}
//背景图片
function slideshowBackup() {
    debugPrint('slideshowBackup is called! BackgroundIamge is showing......');
    //黑色画布隐藏(页面打开时，背景图片没加载完成，加载过程中显示画布，显示背景图片时需要隐藏画布)
    $('#blackCanvas').css("visibility", "hidden");
    //隐藏当前图像(页面打开时，backup0显示)
    $('#backup' + eposPageData.operateData.slide).css("z-index", "-1");
    //slide依次为0~3
    eposPageData.operateData.slide = (eposPageData.operateData.slide + 1) % 4;
    //显示下一副图片
    $('#backup' + eposPageData.operateData.slide).css("z-index", "100");
}
//打开页面时要处理的事情,需要添加品牌和地区和国家的判断Brad
function eposPageonOpen() {
    DBG_ALWAYS("EPOS_BGH");
    changeEPOSContent();
    //清除可能存在的Timer
    eposonClose();
    //initText();
    eposPageData.operateData.g_prepareToExit = false;
    initPlugin();

//    initText();
    //隐藏第2~4个panel
    $('#' + eposPageData.operateData.imgIdList[3]).hide();
    $('#' + eposPageData.operateData.imgIdList[2]).hide();
    $('#' + eposPageData.operateData.imgIdList[1]).hide();
    //tabIndex清零
    eposPageData.operateData.tabIndex = 0;
    debugPrint('open tabindex:' + eposPageData.operateData.tabIndex);
    //第2~4个tab的高亮图片隐藏
    $('#' + 'tab_11').hide();
    $('#' + 'tab_21').hide();
    $('#' + 'tab_31').hide();
    //$('#' + 'tab_01').show();/*不需要写，因为CSS中规定了高亮图片在灰度图片的上层*/
    //第一个tab的文字字体变粗
    $('#' + eposPageData.operateData.txtIdList[0]).css({
        "font-weight": "bold"
    });
    //第一张背景图片显示
    $('#backup0').css("z-index", "100");
    //get it  from load function
    //2秒后，第2~4张背景图片加载完成，并且每隔7秒根据slideshowBackup()函数规定的方式显示背景图片
    eposPageData.operateData.eposPageonOpenfunTimer = setTimeout(function () {
        $('#backup3').css("visibility", "visible");
        $('#backup2').css("visibility", "visible");
        $('#backup1').css("visibility", "visible");
        $('#blackCanvas').css("visibility", "hidden");
        debugPrint('show background!');
        try {
            eposPageData.operateData.slideshowTimer = setInterval(function () {
                debugPrint('slideshowTimer start!');
                slideshowBackup();
            }, 7000);
            debugPrint('slideshowTimer:' + eposPageData.operateData.slideshowTimer);
        }
        catch (ex) {
            debugPrint('animate bgimg err:' + ex, DebugLevel.ERROR);
        }
    }, 2000);
    //每隔7秒执行一次panel简单动画
    try {
        if (eposPageData.operateData.scrollTimer != null) {
            DBG_ALWAYS("eposPageonOpen need CLEAR eposPageData.operateData.scrollTimer");
            clearInterval(eposPageData.operateData.scrollTimer);
            eposPageData.operateData.scrollTimer = null;
        }
        eposPageData.operateData.scrollTimer = setInterval(function () {
            debugPrint('scrollTimer start!');
            animatePanelSimple();
        }, eposPageData.operateData.PANEL_ANIMATION_DURATION);
    }
    catch (ex) {
        debugPrint('animate panel err:' + ex, DebugLevel.ERROR);
    }
    //每隔3秒检测一次TV信号和DMP播放
    try {
        eposPageData.operateData.checkTvSignalTimer = setInterval(function () {
            debugPrint('checkTvSignalTimer start!');
            checkTvSignal();
        }, 3000);
    }
    catch (ex) {
        debugPrint('checkTvSignalTimer err:' + ex, DebugLevel.ERROR);
    }
    //第一张背景图片重新显示(第一张背景图片在slideshowBackup函数中被隐藏)
    $('#backup0').css("visibility", "visible");
}
/*
 * 检测tv信号
 * 说明：
 *   如果没有tv信号并且没有播放demo,正常播放背景图（若slideshowtimer关闭了要重新开启）；否则隐藏背景图，关闭slideshowtimer定时器
 * */
function checkTvSignal() {
    debugPrint('no signal:' + livetvmain.getNoSignalFlag() + " isplaying:" + eposPageData.operateData.isDMPPlaying);
    if ((livetvmain.getNoSignalFlag()) && (!eposPageData.operateData.isDMPPlaying)) {
        debugPrint('slideshowTimer is not closed in checkTvSignal!');
        if (eposPageData.operateData.slideshowTimer == null) {
            $('#blackCanvas').css("visibility", "visible");
            $('#slideshow').show();
            eposPageData.operateData.checkTvSignalFunTimer = setTimeout(function () {
                $('#blackCanvas').css("visibility", "hidden");
                eposPageData.operateData.slideshowTimer = setInterval(function () {
                    slideshowBackup();
                }, 7000);
            }, 2000);
            debugPrint('slideshowTimer start in checkTvSignal!');
        }
    }
    else {
        $('#slideshow').hide();
        clearInterval(eposPageData.operateData.slideshowTimer);
        eposPageData.operateData.slideshowTimer = null;
        debugPrint('slideshowTimer is cleared in checkTvSignal!');
    }
}
//关闭epos页面
function eposonClose() {
    debugPrint("stop ePos!!!!!!!!");

    clearInterval(eposPageData.operateData.scrollTimer);
    eposPageData.operateData.scrollTimer = null;
    clearInterval(eposPageData.operateData.slideshowTimer);
    eposPageData.operateData.slideshowTimer = null;
    clearInterval(eposPageData.operateData.checkTvSignalTimer);
    eposPageData.operateData.checkTvSignalTimer = null;
    clearInterval(eposPageData.operateData.g_repeatVideoTimer);
    eposPageData.operateData.g_repeatVideoTimer = null;
    clearTimeout(eposPageData.operateData.g_checkDemoVideoTimer);
    eposPageData.operateData.checkDemoVideoTimer = null;
    clearTimeout(eposPageData.operateData.checkTvSignalFunTimer);
    eposPageData.operateData.checkTvSignalFunTimer = null;
    clearTimeout(eposPageData.operateData.resetPannelFunTimer);
    eposPageData.operateData.resetPannelFunTimer = null;
    clearTimeout(eposPageData.operateData.uniqueUsbListEposFunTimer);
    eposPageData.operateData.uniqueUsbListEposFunTimer = null;
    clearTimeout(eposPageData.operateData.checkUsbToPlayDemoVideoFunTimer);
    eposPageData.operateData.checkUsbToPlayDemoVideoFunTimer = null;
    clearTimeout(eposPageData.operateData.eposPageonOpenfunTimer);
    eposPageData.operateData.eposPageonOpenfunTimer = null;
    debugPrint("clear all timers!!!!!!!!");
}
//销毁epos页面
function eposonDestroy() {
    hiWebOsFrame.startLoading(2, "closeEpos");
    eposonClose();
    hiWebOsFrame.epose = null;
    debugPrint('epos is destroyed!!!!!!!');
    startePos(false);
    //closeDOthersModule("livetv");
    setTimeout(function () {
        try {
            resumeDTV();
        }
        catch (ex) {
            debugE("resumeDTV ERROR:--" + ex.message);
        }
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        hiWebOsFrame.endLoading("closeEpos");
    }, 500);

}
/*
 * 响应任意按键事件
 * 说明：
 *   按下任意按键之后退出epos，并且重新对retail mode timer定时（保证epos关闭之后再次显示的时间一致）
 * */
function anyKeyHandler() {
    debugPrint("anyKeyHandler is calling......");
    eposPageData.operateData.g_prepareToExit = true;
    if (eposPageData.operateData.isDMPPlaying) {
        model.mpctrl.StopMpctrl(null);
        eposPageData.operateData.isDMPPlaying = false;
        debugPrint("eposPageData.operateData.isDMPPlaying: " + eposPageData.operateData.isDMPPlaying);
    }
    else {
        ctlr_memc_for_osd(1);
        eposPageData.operateData.g_prepareToExit = false;
    }

    hiWebOsFrame.epos.close();
    hiWebOsFrame.epos.destroy();
}

//更换quality说明页,更换APP页面的不同国家区分
function changeEPOSContent() {
    //根据机型更换QUALITY内容
    debugPrint("changeEPOSContent begin! currentPlatform is " + currentPlatform);
    if ("APP_5890_SA" == currentPlatform) {
        $("#table_uhd").css("background-image", "url(img/epos/BGH/uhd_epos_uhd_panel_5657.png)");
        debugPrint("changeEPOSContent begin! currentPlatform is " + hiWebOsFrame.getCurrentCountry());


    } else {
        $("#table_uhd").css("background-image", "url(img/epos/BGH/uhd_epos_uhd_panel.png)");
        debugPrint("changeEPOSContent begin! currentPlatform is " + hiWebOsFrame.getCurrentCountry());

    }
    //根据国家切换APP内容

    var EPOSresolution = "";
    try {
        EPOSresolution = model.system.getCurResolution();
        DBG_ALWAYS("Epos resolution is " + EPOSresolution);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    if ("HIS_EPOS_HD" == EPOSresolution) {
        $("#table_uhd").css("background-image", "url(img/epos/BGH/uhd_epos_uhd_panel_led.png)");
    }

}