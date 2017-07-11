var DEBUG = false;
isLogOn = true;

var text_uhd = ["", "", ""];
var text_picture = ["", "", ""];
var text_smarttv = ["", "", "", "", ""];
var text_connect = ["", "", "", "", ""];
var scrollToRight = true;
var idList = ['tab_uhd', 'tab_picture', 'tab_smarttv', 'tab_connect'];
var imgIdList = ['img_uhd', 'img_picture', 'img_smarttv', 'img_connect'];
var txtIdList = ['txt_uhd', 'txt_picture', 'txt_smarttv', 'txt_connect'];
var imageList = ["uhd_epos_uhd_down.png", "uhd_epos_picture_down.png", "uhd_epos_smart_down.png", "uhd_epos_connect_down.png", "uhd_epos_uhd_focus.png", "uhd_epos_picture_focus.png", "uhd_epos_smart_focus.png", "uhd_epos_connect_focus.png", "epos_image_1.jpg", "epos_image_2.jpg", "epos_image_3.jpg", "epos_image_4.jpg", "uhd_epos_smart_panel.png", "uhd_epos_picture_panel.png", "uhd_epos_picture_panel_us.png", "uhd_epos_connect_panel.png", "uhd_epos_uhd_panel.png"];
var scrollTimer;
var checkTvSignalTimer;
var slideshowTimer;
var tabIndex = 0;
var languageIndex = 0;
var panelLoopCount = 0;
var PANEL_MAX_LOOP_COUNT = 5;
var PANEL_ANIMATION_DURATION = 7000;
var EPOS_HIDE_DURATION = 30 * 1000;
var sigmaPlugin = null;
var screenWidth = 1920, screenHeight = 1080;
var slide = 0;
var isDMPPlaying = false;
var isInsideVideoPlaying = false;
var lastUsb = "";
var g_currentInput = 0;
var g_prepareToExit = false;
var g_needRepeat = false;
var model = null;
var g_videoPath = "";
var g_repeatVideoTimer = null;
var g_usbArray = [];
var g_usbArrayIndex = 0;
var g_videoList = [];
var g_videoListIndex = 0;
var uniqueUsbListEposFunTimer = null;
var initEposTimer = null;

function initText() {


    text_uhd = ["Performance", "Enjoy flawless moving images with brilliant colors and realistic picture detail", "Enhance viewing with improved sound quality and performance"];
    text_picture = ["Quality", "Stream brilliant\n4K content", "Your HD content\nupscales to 4K", "Warranty on\nparts and labor"];
    text_smarttv = ["Smart TV", "Enjoy movies, shows, and music\nwith the click of a button", "     Web Browser", "Screen share capabilities"];
    text_connect = ["Tech", "Built in Dual <br/>band Wi-Fi", "Faster performance <br/>than ever", "Super Slim Design", "Automatically adjust<br/> TV brightness"];


    var langIdx = 1;
    try {
        langIdx = model.language.getOsd();
    } catch (e) {
        debugPrint(e.message);
    }
    debugPrint(" get osd " + langIdx);
    var lanStr = "English";
    switch (langIdx) {
        case 1:
            lanStr = "English";
            break;
        case 4:
            lanStr = "Spanish";
            text_uhd = ["Desempeño", "Disfrute de imágenes impecables en movimiento con colores brillantes y detalles realistas", "Mejore la visualización con una mejor calidad y rendimiento del sonido"];
            text_picture = ["Calidad", "Reproduzca sorprendentes contenidos 4K", "El contenido HD escala a 4K", "Garantía en partes y mano de obra"];
            text_smarttv = ["Smart TV", "Disfruta películas , programas y música con un solo click", "Navegador Web", "Función de pantalla compartida"];
            text_connect = ["Tecnología", "Construido en Wi-Fi de banda dual", "Un rendimiento más rápido que nunca", "&nbsp Diseño super Delgado", "Ajuste automático de brillantez de la TV"];
            break;
        case 2:
            lanStr = "French";
            text_uhd = ["Performance", "Profitez d’images animées parfaites avec des couleurs éclatantes et des détails réalistes", "Améliorez l’affichage avec une qualité sonore et une performance accrues"];
            text_picture = ["Qualite", "Lisez en continu un\ncontenu 4K brillant", "Votre contenu HD\noptimisé au 4K", "Garantie sur les\npièces et la main-d'oeuvre"];
            text_smarttv = ["Smart TV", "Visionnez instantanément des films et des émissions de télé", "Navigateur Web", "Option de partage d’écran", "Partage à domicile"];
            text_connect = ["Technologie", "Développé en Wi-Fi bi-bande", "Performance plus rapide que jamais auparavant", "Modèle ultra mince", "Ajuste automatiquement la brllance de l'écran"];
            break;
        default:
            lanStr = "English";
            break;
    }
    $("#tab_text_connect").html(text_connect[0]);
    $("#tab_text_picture").html(text_picture[0]);
    $("#tab_text_smarttv").html(text_smarttv[0]);
    $("#tab_text_uhd").html(text_uhd[0]);

    $("#txt_connect1").html(text_connect[1]);
    $("#txt_connect2").html(text_connect[2]);
    $("#txt_connect3").html(text_connect[3]);
    $("#txt_connect4").html(text_connect[4]);

    $("#txt_smarttv1").html(text_smarttv[1]);
    $("#txt_smarttv2").html(text_smarttv[2]);
    $("#txt_smarttv3").html(text_smarttv[3]);

    $("#txt_picture1").html(text_picture[1]);
    $("#txt_picture2").html(text_picture[2]);
    $("#txt_picture3").html(text_picture[3]);
    $("#txt_uhd1").html(text_uhd[1]);
    $("#txt_uhd2").html(text_uhd[2]);

}

function addUSB(usbPath) {
    debugPrint("[epos] addUSB, usb array is:" + g_usbArray.toString());
    for (var i = 0; i < g_usbArray.length; i++) {
        if (g_usbArray[i].length == 0) {
            g_usbArray[i] = usbPath;
            break;
        }
    }
    debugPrint("[epos] addUSB, usb array is:" + g_usbArray.toString());
}

function removeUSB(usbPath) {
    debugPrint("[epos] remove, usb array is:" + g_usbArray.toString());
    for (var i = 0; i < g_usbArray.length; i++) {
        if (g_usbArray[i] == usbPath) {
            g_usbArray[i] = "";
            break;
        }
    }
    debugPrint("[epos] remove, usb array is:" + g_usbArray.toString());
}
var path = '';
function checkUsbToPlayDemoVideo() {
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
            g_usbArray = [];
            for (var i = 0; i < usbStr.split("\n").length; i++) {
                g_usbArray.push(usbStr.split("\n")[i].split(";")[0]);
            }
            //return uniqueUsbListEpos(usbStr.split("\n"));
            g_usbArrayIndex = 0;
            return getVideoListByPath(g_usbArray[0], 1);
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
function repeatDemoVideo() {
    model.mpctrl.PlayMovie(g_videoPath);
    g_repeatVideoTimer = setInterval(function () {
        var status = model.mpctrl.getMpCtrlStat();
        debugPrint("[epos] status is:" + status);
        if (status != 2) {
            model.mpctrl.StopMpctrl(null);
            model.mpctrl.PlayMovie(g_videoPath);
            return;
        }
        var currentTime = model.mpctrl.getMpCtrlPlaytimeCurrent();
        var totalTime = model.mpctrl.getMpCtrlPlaytimeTotal();
        debugPrint("[epos] playing video, currentTime = " + currentTime + ", totalTime = " + totalTime);
        if (currentTime >= totalTime) {
            //repeat playing
            model.mpctrl.StopMpctrl(null);
            model.mpctrl.PlayMovie(g_videoPath);
        }
    }, 1000);
}
function onSignalChanged(status) {

}
var m_usbIterator = null;
var m_VideoList = {};

function getUsbContent(path, type) {
    m_usbIterator = model.usb.creatUSBTableMainIterator(
        true,
        [
            {
                field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH,
                condition: Model.FIELD_COND_EQUAL,
                value: path
            },
            {
                field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE,
                condition: Model.FIELD_COND_EQUAL,
                value: type//all = 4+8+16+64
            }
        ],
        [
            UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, /**< ancestor */
            UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE, /**< item name */
            UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR
        ],
        [
            { field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, direction: 1 }
        ],
        onUSBIteratorEvent.bind(this, path)
    );
    m_usbIterator.fetchTotalCount();
    debugG("[epos]:usb file count:" + m_usbIterator.fetchTotalCount());
    //TODO: get all video files into a array
    //m_VideoList.push(tempName);
    m_usbIterator.readNextRows(100);
}
var onUSBIteratorEvent = function (path, event) {
    debugPrint("onUSBIteratorEvent and path is : " + path);
    if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        function readUsbTable() {
            debugPrint("readUsbTable function begin!");
            for (var i = 0; i < event.rows.length; i++) {
                var tempType = event.rows[i][1];
                var tempName = event.rows[i][0];
                if (tempType == UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO
                    && tempName.substr(tempName.length - 3, 3).toLowerCase() == "mp4") {
                    debugG("[epos]: found video file is " + tempName);
                    m_VideoList.push(tempName);
                }
            }
        }

        readUsbTable();
    } else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        var UsbCount = event.totalCount;
        var UsbTableReadCnt = 0;
        debugPrint("FETCH TOTAL CONT ______________________________" + UsbCount);
        if (UsbCount > 0) {
            if (UsbCount > 100) {
                if (UsbCount % 100 == 0) {
                    UsbTableReadCnt = Math.floor(UsbCount / 100) - 1;
                }
                else {
                    UsbTableReadCnt = Math.floor(UsbCount / 100);
                }
                m_usbIterator.seekToRow(0, TableIterator.SEEK_SET);
                m_usbIterator.readNextRows(100);
            }
            else {
                m_usbIterator.seekToRow(0, TableIterator.SEEK_SET);
                m_usbIterator.readNextRows(UsbCount);
            }
        }
    }
    else if (event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {
        debugPrint('seek to row index = ' + event.result);
        // m_usbIterator.readNextRows(HiFileBrowser.table_read_once);
    }
    else {
        debugPrint("oother Type________________" + event.type);
    }
}

function onUSBChanged(value) {
    if (isplay4kvideo)
        return;
    debugPrint("[ePos]onUSBChanged:" + value, DebugLevel.ALWAYS);
    switch (value[0]) {
        case "online":
            addUSB(value[1]);
            DBG_ALWAYS("isDMPPlaying" + isDMPPlaying + "         isInsideVideoPlaying" + isInsideVideoPlaying);
            if (!isDMPPlaying) {
                //TODO: check to play video, check file API not ready
                //getUsbContent(value[1],UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO);
                return getVideoListByPath(value[1], 2);
            }
            else {
                if (!!isInsideVideoPlaying) {
                    return getVideoListByPath(value[1], 3);
                }
            }
            break;
        case "offline":
            removeUSB(value[1]);
            if (lastUsb == value[1]) {
                //stop playing
                clearInterval(g_repeatVideoTimer);
                g_repeatVideoTimer = null;
                isDMPPlaying = false;
                $('#slideshow').show();
                try {
                    model.mpctrl.StopMpctrl(null);
                }
                catch (e) {
                    debugPrint(e.message);
                }
                g_videoPath = "";
                //check other usbs to find the demo video
                checkUsbToPlayDemoVideo();
            }
            break;
    }
}

function onPlayertimeChanged(value) {
    //debugPrint("[epos]onPlayertimeChanged : " + value);
    var totalTime = model.mpctrl.getMpCtrlPlaytimeTotal();
    //debugPrint("[epos] playing video, currentTime = " + value + ", totalTime = " + totalTime, DebugLevel.ALWAYS);
//    if ((value+1) >= totalTime) {
//        //repeat playing
//        //model.mpctrl.StopMpctrl(null);
//        model.mpctrl.PlayMovie(g_videoPath);
//    }
    if (value >= totalTime) {
        g_needRepeat = true;
        model.mpctrl.StopMpctrl(null);
    }
}
function onPlayerStateChanged(value) {
    debugPrint("[epos]onPlayerStateChanged state changed : " + value, DebugLevel.ALWAYS);
    switch (parseInt(value)) {
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_IDLE:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARING:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARED:
            //准备好后发播放命令
//            g_currentInput = model.source.getCurrentSource();
//            debugPrint("[epos]g_currentInput is "+g_currentInput);
//            model.mpctrl.PlayNow();
//            isDMPPlaying = true;
//            debugPrint("[epos]to hide backup pictures!");
//            $('#slideshow').hide();
//            clearInterval(slideshowTimer);
//            slideshowTimer = null;
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAYING:

            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PAUSE:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_STOP:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_AUTO_STOP: //file playing done
//            if(g_needRepeat){
//                model.mpctrl.StopMpctrl(null);
//            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_RELEASING:
            if (g_prepareToExit) {
                setTimeout(function () {
                    ctlr_memc_for_osd(1);
                    modeljs.sendam(":am,dtv_app_mtk,:resume=dtv");
                    model.system.setReturnlocalappFlag(FlagShareInBrowser_ePos.EPOS_PLAYER_STOPPED);
                    g_prepareToExit = false;
                }, 1000);
            } else {
                if (g_needRepeat) {
                    setTimeout(function () {
                        if (!isInsideVideoPlaying) {
                            DBG_ALWAYS("isInsideVideoPlaying    " + isInsideVideoPlaying);
                            playNextEposVideo();
                        }
                        try {
                            if (!!g_videoPath) {
                                model.mpctrl.PlayMovie(g_videoPath);
                            } else {
                                DBG_ERROR("g_videoPath is null!!!");
                            }
                            g_needRepeat = false;
                        } catch (ex) {
                            DBG_ERROR(ex.message);
                        }
                    }, 500);
                } else {
                    setTimeout(function () {
                        modeljs.sendam(":am,dtv_app_mtk,:resume=dtv");
                    }, 1000);
                }
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARE_DONE:
            g_currentInput = model.source.getCurrentSource();
            debugPrint("[epos]g_currentInput is " + g_currentInput);
            model.mpctrl.PlayNow();
            isDMPPlaying = true;
            debugPrint("[epos]to hide backup pictures!");
            $('#slideshow').hide();
            clearInterval(slideshowTimer);
            slideshowTimer = null;
            break;
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_AUDIO_UNPLAYABLE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_VIDEO_UNPLAYABLE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FILE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_UNKNOWN:
            g_needRepeat = true;
            //播放错误文件直接从播放列表中删除
            g_videoList.splice(g_videoListIndex, 1);
//                            eposPageData.operateData.g_videoListIndex--;//用于平衡删除列表内容后的播放下一首的操作
            DBG_ALWAYS("videoList:" + g_videoList);
            if (g_videoList.length < 1) {
                g_needRepeat = false;
                isDMPPlaying = false;
            }
            debugPrint("g_needRepeat" + g_needRepeat);
            model.mpctrl.StopMpctrl(null);
            break;
        default :
            break;
    }
}


var FlagShareInBrowser_ePos = {  //Picasa 占用 index 1~5; 其他index请从 5以后开始， 建议5个一组或10个一组，方便区分
    "NORMAL": 0, //正常状态

    //1~5: Picasa占用
    "PICASA_GOOGLE": 1,  //要跳转到谷歌页面
    "PICASA_OAUTH_RETURN_PAGE": 2,    //
    "PICASA_OAUTH_TOKEN_PAGE": 3,
    "PICASA_NORMAL_PAGE": 4,
    "EPOS_PLAYER_STOPPED": 6,
    "EPOS_READY_TO_STOP": 7,
    //11~20  HiMedia暂时使用
    "HIMEDIA_RUNNING_NOW": 11,
    "LAUNCHER_START_SETTING_NOW": 12,
    "HIMEDIA_KILL_ITSELF": 13,
    "HIMEDIA_PAUSE_TO_SETTING": 14,
    "HIMEDIA_RESUME_FROM_SETTING": 15,
    "DROPBOX_LOGIN": 16,
    "DROPBOX_LOGIN_RETURN": 17
}
function onRPCChanged(val) {
    debugPrint("[epos]onRPCChanged: " + val, DebugLevel.ALWAYS);
    model.system.onReturnlocalappFlagChaged = null;
    switch (val) {
        case FlagShareInBrowser_ePos.EPOS_READY_TO_STOP:
            g_prepareToExit = true;
            try {
//                $("#pic1").css("visibility", "hidden");
//                $("#pic2").css("visibility", "hidden");
                pic1.visible = false;
                pic2.visible = false;
                setTimeout(function () {
                    try {
                        stopEpos();
                    } catch (ex) {
                        DBG_ERROR(ex.message);
                    }
                }, 50);


            }
            catch (ex) {
                DBG_ERROR("Stop EPOS error!!!" + ex.message);
            }
            if (isDMPPlaying) {
                model.mpctrl.StopMpctrl(null);
            }
            else {
                ctlr_memc_for_osd(1);
                model.system.setReturnlocalappFlag(FlagShareInBrowser_ePos.EPOS_PLAYER_STOPPED);
                g_prepareToExit = false;
            }
            break;
        default :
            break;
    }
}
function ctlr_memc_for_osd(status) //0为页面open,1为页面close,实现osd显示时关闭memc,osd消失时复原memc.
{
    try {
        switch (status) {
            case 0:
                var smooth = model.video.getEnumSmoothMotion();//get 当前ui memc效果
                if (smooth != 0) {                             //只有当前memc为开着的状态，才做关闭的动作，已经关闭什么不做．
                    //var val = 101;
                    var val = 0;
                    model.video.setEnumSmoothMotion(val);   //val为101时，只做memc关闭效果的动作，不会记入eeprom值，从而不影响当前ui设置的值
                }
                break;
            case 1:
                var val = 100;                       //val 为100时，会get当前ui上的memc效果值，页面关闭时恢复memc效果．
                model.video.setEnumSmoothMotion(val);
                break;
        }
    } catch (e) {
        debugG("[epos]ctlr_memc_for_osd error!!")
    }
}
function initPlugin() {
    try {
        DBG_ALWAYS("INIT PLUGIN");
        model = new Model();
        model.initialize();
        model.usb.onVstrLatestEventChaged = onUSBChanged;
        model.mpctrl.onMpCtrlStatchanged = onPlayerStateChanged;
        model.mpctrl.onMpCtrlPlaytimeCurrentchanged = onPlayertimeChanged;
        model.system.onReturnlocalappFlagChaged = onRPCChanged;
        Hisense.File.write("retailmode", "open", 0); //write data to /tmp/retailmode. open: running, close: stopped
        // model.tvservice.onNoSignalMainChanged = onSignalChanged;
        modeljs.sendam(":am,dtv_app_mtk,:resume=dtv");//tony- for 5657
        model.video.setEnumPictureMode(1);
        debugE("[epos] initPlugin done!");
    } catch (e) {
        debugE("[epos]initPlugin error:" + e.message);
    }
}

function doAnimation(id, toRight) {
    var interval = 5;
    if (toRight) {
        if (id == 0) {
            moveElement(idList[id], 1621, 0, interval);
            /*
             $('#' + idList[id]).animate({
             translateX: '980px'
             },500,
             'linear');
             */
        }
        else {
            moveElement(idList[id], 1621 - 190 * id, 0, interval);
            /*
             $('#' + idList[id]).animate({
             translateX: '980px'
             },500,
             'linear');
             */
        }

        /*
         $('#' + idList[id]).anim({
         opacity: 0.25,
         left:
         '50px',
         color:
         '#abcdef',
         rotateZ:
         '0deg',
         translateX: '985px'
         }, 500,
         'linear')
         */
        //$('#' + imgIdList[3]).hide();
        //$('#' + idList[id]).anim({ rotate: '720deg', opacity: .5 }, 2, 'ease-out')
    } else {
        if (id == 2) {
            moveElement(idList[id], 250 * (3 - 2), 0, interval);
        }
        else if (id == 1) {
            moveElement(idList[id], 215 * (3 - 1), 0, interval);
        }
        else {
            moveElement(idList[id], 207 * (3 - id), 0, interval);
        }

        /*
         $('#' + idList[id]).animate({
         translateX: '0px'
         });
         */
    }
}
function animatePanel() {
    //alert(tabIndex);
    if (scrollToRight) {
        $('#' + imgIdList[tabIndex]).hide();

        $('#' + txtIdList[tabIndex]).css({

            "font-family": 'regular'
        })
        $('#' + 'tab_' + tabIndex + '1').hide();
        setTimeout("doAnimation(" + tabIndex + ",1)", 500);
        $('#' + txtIdList[tabIndex + 1]).css({
            "font-family": 'bold'
        })
        $('#' + 'tab_' + (tabIndex + 1) + '1').show();
        setTimeout("showPanel('" + imgIdList[tabIndex + 1] + "', '1')", 1200);
        if (tabIndex == idList.length - 2) {
            scrollToRight = false;
        }
    } else {
        var id = (idList.length - 2 - tabIndex) % idList.length;
        $('#' + imgIdList[id + 1]).hide();
        $('#' + txtIdList[id + 1]).css({
            "font-family": 'regular'
        });

        $('#' + 'tab_' + (id + 1) + '1').hide();
        setTimeout("doAnimation(" + id + ",0)", 500);
        $('#' + txtIdList[id]).css({
            "font-family": 'bold'
        })
        $('#' + 'tab_' + id + '1').show()
        setTimeout("showPanel('" + imgIdList[id] + "', '1')", 1200);
        if (tabIndex == idList.length - 2) {
            scrollToRight = true;
            panelLoopCount++;
            if (panelLoopCount >= PANEL_MAX_LOOP_COUNT) {
                panelLoopCount = 0;
                //showePos(false);
                setTimeout("showePos(0)", PANEL_ANIMATION_DURATION / 2);
            }
        }
    }

    tabIndex = (tabIndex + 1) % (idList.length - 1);
}
function resetPannel() {
    //document.write(text_connect[0]);
    $("#txt_connect").val("text_connect[0]");
    $('#' + 'tab_11').hide();
    $('#' + 'tab_21').hide();
    $('#' + 'tab_31').hide();
    $('#' + 'tab_01').show();
    $("#epos_banner").hide();
    //moveElement("epos_banner",0,1113,80);
    /*
     $("#epos_banner").animate({
     translateY: '250px'
     });
     */
    $("#logo").animate({
        translateY: '-80px'
    });
    setTimeout(function () {
        $('#' + txtIdList[3]).css({
            "font-family": 'bold'
        });
        $('#' + txtIdList[0]).css({
            "font-family": 'bold'
        });
        showPanel(imgIdList[3], 0);
        showPanel(imgIdList[0], 1);
        doAnimation(2, 0);
        doAnimation(1, 0);
        doAnimation(0, 0);
    }, 250);
    setTimeout(function () {
        $("#epos_banner").show();
        //moveElement("epos_banner",0,863,10);
        /*
         $("#epos_banner").animate({
         translateY: '0px'
         });
         */
        $("#logo").animate({
            translateY: '0px'
        });
        tabIndex = 0;
        scrollTimer = setInterval(function () {
            animatePanelSimple();
        }, PANEL_ANIMATION_DURATION);
    }, 3800);
}
function animatePanelSimple() {
    //$('#' + imgIdList[tabIndex]).fadeOut(500);
    $('#' + imgIdList[tabIndex]).hide();
    $('#' + txtIdList[tabIndex]).css({
        "font-family": 'regular'
    })
    $('#' + 'tab_' + tabIndex + '1').hide();
    setTimeout("doAnimation(" + tabIndex + ",1)", 500);
    $('#' + txtIdList[tabIndex + 1]).css({
        "font-family": 'bold'
    })
    $('#' + 'tab_' + (tabIndex + 1) + '1').show();
    setTimeout("showPanel('" + imgIdList[tabIndex + 1] + "', '1')", 1000);
    if (tabIndex == idList.length - 2) {
        clearTimeout(scrollTimer);
        setTimeout(function () {
            resetPannel()
        }, PANEL_ANIMATION_DURATION);
    } else {
        tabIndex = (tabIndex + 1) % (idList.length - 1);
    }
}

function showPanel(id, toShow) {
    if (toShow) {
        //$('#' + id).fadeIn(500);
        $('#' + id).show();
    } else {
        //$('#' + id).fadeOut(500);
        $('#' + id).hide();
    }
}

function showePos(isShow) {
    if (isShow) {

        //ctlr_memc_for_osd(0);
        //moveElement("epos_banner",0,863,10);
        $("#epos_banner").show();
        /*
         $("#epos_banner").animate({
         translateY: '0px'
         });
         */
        $("#logo").animate({
            translateY: '0px'
        });

        scrollTimer = setInterval(function () {
            animatePanel()
        }, PANEL_ANIMATION_DURATION);
    } else {
        //ctlr_memc_for_osd(1);
        clearTimeout(scrollTimer);
        //moveElement("epos_banner",0,1113,10);
        $("#epos_banner").hide();
        /*
         $("#epos_banner").animate({
         translateY: '250px'
         });
         */
        $("#logo").animate({
            translateY: '-80px'
        });
        setTimeout("showePos(1)", EPOS_HIDE_DURATION);
    }
}
function slideshowBackup() {
    $('#blackCanvas').css("visibility", "hidden");
    $('#backup' + slide).css("z-index", "-1");
    slide = (slide + 1) % 4;
    $('#backup' + slide).css("z-index", "100");
}
function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        //var dist = Math.ceil((final_x - xpos)/10);
        var dist = 260;
        xpos = xpos + dist;
        if (xpos > final_x)
            xpos = final_x;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil((ypos - final_y) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}
var isplay4kvideo = false;
var fourkvideopath = "file://" + "/3rd/4kvideo.mkv";
function play4kvideo() {
    g_videoPath = fourkvideopath;
    modeljs.sendam(":am,dtv_app_mtk,:pause=dtv");
    setTimeout(function () {
        model.mpctrl.PlayMovie(g_videoPath);
    }, 1000);

}
var bufImages = new Array();
$(document).ready(function () {
//    if(Hisense.File.read("enable4Kvideo", 1)==1&&Hisense.File.exists("4kvideo.mp4", 4)){
//        isplay4kvideo=true;
//    }else{
//        isplay4kvideo=false;
//    }
//    if(isplay4kvideo){
//        initPlugin();
//        play4kvideo();
//    }else{
    isLogOn = true;
    initPlugin();
    initStage();
    initLoadingBar();

    DBG_ALWAYS("epos ready!!!!");

    var isAUS = false;
    try {
        var countrycode = model.basicSetting.getTvsetLocation();
        DBG_ALWAYS("countrycode IS " + countrycode);
        if ("AUS" == countrycode) {
            isAUS = true;
        }
    }
    catch (ex) {
        DBG_ERROR("countrycode ERROR : " + ex.message);
    }
    initLoader(isAUS);
    //给第一次监测U盘内容留出足够的时间。
    initEposTimer = setTimeout(function () {
        checkTvSignalTimer = setInterval(function () {
            checkTvSignal();
        }, 10000);
    }, 3000);

//        $('#backup0').css("visibility","visible");

//        var countryIdx = "USA";
//        try {
//            countryIdx = model.basicSetting.getTvsetLocation();
//        }catch (e){
//            debugPrint(e.message);
//        }
//        debugPrint("get location index: " + countryIdx);
//
//        if(countryIdx == "MEX"){
//            $("#table_smarttv").css("background-image","url(uhd_epos_smart_panel_mx.png)");
//            $("#table_picture").css("background-image","url(uhd_epos_picture_panel_mx.png)");
//        } else if(countryIdx == "CAN"){
//            $("#table_smarttv").css("background-image","url(uhd_epos_smart_panel_ca.png)");
//            $("#table_picture").css("background-image","url(uhd_epos_picture_panel_ca.png)");
//        } else {
//            $("#table_smarttv").css("background-image","url(uhd_epos_smart_panel.png)");
//            $("#table_picture").css("background-image","url(uhd_epos_picture_panel.png)");
//        }

//    }


})

//$(window).load(function(){
/*//Sigma performance is too bad. Refresh each picture very slowly. Keep it for stronger Chipset.
 $('#slideshow').cycle({
 fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
 fit: 1,
 height: screenHeight,
 timeout: 7000,
 speed:200
 });
 */

//});
function cmd_handler(cmd) {
    logDebug(cmd);
    if (cmd == "StoreDemo_Show") {
        window.location.reload(true);
    }
    else if (cmd == "StoreDemo_Hide") {
        clearTimeout(scrollTimer);
        //moveElement("epos_banner",0,1113,10);
        $("#epos_banner").hide();
        /*
         $("#epos_banner").animate({
         translateY: '250px'
         });
         */
        $("#logo").animate({
            translateY: '-80px'
        });

        $('#slideshow').cycle('pause');
        $('#slideshow').hide();

        /*
         clearTimeout(slideshowTimer);
         $('#slideshow').hide();
         */
    }
}
// check file status to get tv signal status
function checkTvSignal() {
    DBG_ALWAYS("CHECK TV SIGNAL IS " + model.tvservice.getNoSignalMain());
    if (!!isNoSignal() && !isDMPPlaying) {
        //   if (slideshowTimer == null) {
        //$('#blackCanvas').css("visibility", "visible");
        //$('#slideshow').show();
        //播放内置视频
        setTimeout(function () {
            DBG_ALWAYS('checkTvSignal---playInsideMovie!');
            if (!isDMPPlaying) {
                playInsideMovie();
            } else {
                DBG_ERROR("usb come in! can't play inside movie");
            }
            //$('#blackCanvas').css("visibility", "hidden");
        }, 2000);
//            setTimeout(function () {
//                $('#blackCanvas').css("visibility", "hidden");
//                slideshowTimer = setInterval(function () {
//                    slideshowBackup();
//                }, 7000);
//            }, 2000);
        //  }
    } else {
        //$('#slideshow').hide();
        clearInterval(slideshowTimer);
        slideshowTimer = null;
    }

}
/*
 * 新增需求：播放内置视频
 * 优先级：1.USB视频
 *        2.TV信号
 *        3.内置视频（暂时只在欧洲机添加）
 * */
var insideMoviePath = "file:///3rd/4kvideo.mkv";
var playInsideVideoTimer = null;
function playInsideMovie() {
    DBG_ERROR("[epos] checkUsbToPlayDemoVideo, to play:" + insideMoviePath);
    var isInsideVideoExist = true;
    try {
        isInsideVideoExist = Hisense.File.exists("4kvideo.mkv", 4);
        if (!isInsideVideoExist) {
            insideMoviePath = "file:///3rd/4kvideo.mp4";
            isInsideVideoExist = Hisense.File.exists("4kvideo.mp4", 4);
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    DBG_ERROR("isInsideVideoExist" + isInsideVideoExist);
    if (!!isInsideVideoExist) {
        g_videoPath = insideMoviePath;
        lastUsb = "/3rd/";
        modeljs.sendam(":am,dtv_app_mtk,:pause=dtv");
        playInsideVideoTimer = setTimeout(function () {
            model.mpctrl.PlayMovie(g_videoPath);
            isDMPPlaying = true;
            isInsideVideoPlaying = true;
            DBG_ERROR("[epos]playInsideMovie!");
            //$('#slideshow').hide();
            clearInterval(playInsideVideoTimer);
            playInsideVideoTimer = null;
        }, 1000);
    }
    else {
        DBG_ERROR("can not find inside video!!!!!!!!!!!!!!");
        //$('#slideshow').show();
    }
}

function logDebug(msg) {
    //sigmaPlugin.logDebug(msg);
}

function logError(msg) {
    //sigmaPlugin.logError(msg);
}

//新增获取nosignal的标志位方法   无信号：true  有信号:false
function isNoSignal() {
    var isNosignalExist = false;//Hisense.File.exists(path.substring(12), 3);
    try {
        isNosignalExist = Hisense.File.exists("nosignal", 0);
    } catch (e) {
        DBG_ERROR(e.message);
    }
    DBG_ALWAYS("function isNoSignal param isNosignalExist= " + isNosignalExist);
    if (isNosignalExist) {
        var nosignalFlag = Hisense.File.read("nosignal", 0);
        DBG_ALWAYS("function isNoSignal param nosignalFlag= " + nosignalFlag);
        if (nosignalFlag == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }

}


//新增获取指定目录下视频文件的方法
//path:搜索路径  searchType :搜索类型  1.所有USB，2，当前USB  3,用于正在播放内置视频时插入U盘的情况

var m_usbIterator = null;
function getVideoListByPath(path, searchType) {
    debugPrint("getVideoListByPath Function Start,param is path : " + path);
    var params = [path, searchType];

    try {
        m_usbIterator = model.usb.creatUSBTableMainIterator(
            true,
            [

                {
                    field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH,
                    condition: Model.FIELD_COND_EQUAL,
                    value: path
                },
                {
                    field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE,
                    condition: Model.FIELD_COND_EQUAL,
                    value: UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO
                }
            ],
            [
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, /**< ancestor */
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE, /**< item name */
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR
            ],
            [
                { field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, direction: 1 }
            ],
            onUSBIteratorEvent.bind(this, params));
    }
    catch (ex) {
        debugE("model.usb.creatUSBTableMainIterator Error" + ex.message);
    }
    m_usbIterator.fetchTotalCount();

}
//var EposVideoList = [];
var UsbCount = 0;
var onUSBIteratorEvent = function (params, event) {
    var tmp_videoList = [];//用于处理多个硬盘的情况下，硬盘上线出现问题时做容错。
    debugPrint("onUSBIteratorEvent and path is : " + params[0] + "   event.type   :  " + event.type);
    if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        for (var i = 0; i < event.rows.length; i++) {
            var tempName = event.rows[i][0];
            var tempType = event.rows[i][1];
            if (tempType == 2) {
                tmp_videoList.push("file://" + params[0] + tempName);
            }
        }
        //
        DBG_ALWAYS("TEST PLAY VIDEO FUNCTION  " + tmp_videoList.length);
        if (tmp_videoList.length > 0) {
            g_videoList = tmp_videoList;
            if (params[1] != 3) {
                try {
                    DBG_ALWAYS("g_videoList " + g_videoList.length);
                    g_videoListIndex = 0;
                    g_videoPath = g_videoList[g_videoListIndex];
                    lastUsb = params[0];
                    if (!isDMPPlaying) {
                        modeljs.sendam(":am,dtv_app_mtk,:pause=dtv");
                    }
                    setTimeout(function () {
                        if (!isDMPPlaying) {
                            debugPrint("fileIsValid: " + g_videoPath + "play movie");
                            model.mpctrl.PlayMovie(g_videoPath);

                            isDMPPlaying = true;
                            isInsideVideoPlaying = false;
                            //   $('#slideshow').hide();
                            clearInterval(playInsideVideoTimer);
                            playInsideVideoTimer = null;
                        } else {
                            DBG_ALWAYS("EPOS IS PLAYING VIDEO NOW!");
                        }
                    }, 1000);
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }
            } else {
                lastUsb = params[0];
                g_videoPath = g_videoList[g_videoListIndex];

                try {
                    g_needRepeat = true;
                    debugPrint("g_needRepeat" + g_needRepeat);
                    model.mpctrl.StopMpctrl(null);
                    isInsideVideoPlaying = false;

                }
                catch (ex) {
                    debugPrint("stop playing error" + ex.message, DebugLevel.ERROR);
                }
            }
        } else {
            if (params[1] == 1) {
                noVideoInUSB();
            }

        }
    }


    else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        UsbCount = event.totalCount;
        debugPrint("FETCH TOTAL CONT ______________________________" + UsbCount);
        if (UsbCount > 0) {
            if (UsbCount > 100) {
                UsbCount = 100;
            }
            m_usbIterator.seekToRow(0, TableIterator.SEEK_SET);
            m_usbIterator.readNextRows(UsbCount);
        }
        else {
            //未发现视频逻辑
            DBG_ERROR("TEST NO VIDEO FUNCTION");
        }


    }

    else {
        debugPrint("oother Type________________" + event.type);
        //同样执行未发现的逻辑
        DBG_ERROR("TEST NO VIDEO FUNCTION");
    }
    //m_directoryIterator.readNextRows(90);

};
//在当前监测U盘中未找到
//循环播放播放列表中的视频
var playNextEposVideo = function () {
    DBG_INFO("playNextEposVideo");
    g_videoListIndex++;
    if (g_videoListIndex <= g_videoList.length - 1) {
        g_videoPath = g_videoList[g_videoListIndex];
    } else {
        g_videoListIndex = 0;
        g_videoPath = g_videoList[0];
    }
}


function noVideoInUSB() {
    DBG_INFO("noVideoInUSB bigin params is : " + g_usbArrayIndex + "  " + g_usbArray.length);
    if (g_usbArrayIndex < g_usbArray.length - 1) {
        g_usbArrayIndex++;
        getVideoListByPath(g_usbArray[g_usbArrayIndex], 1);
    }
    else {
        DBG_ALWAYS("NO VIDEO IN ALL USB!!!");
    }

}