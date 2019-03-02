/**
 * Created with JetBrains PhpStorm.
 * User: Lewis
 * Date: 14-3-17
 * Time: 下午3:55
 * To change this template use File | Settings | File Templates.
 */


var HTMLDIR = {
    LTR: "ltr",
    RTL: "rtl"
}
var hiWebOsFrame = new $.hiWebOs({
    icon: 'hiwebosIcon.png',
    startupScreen: 'hiwebos_Startup.png',
    languages: ['ger', 'eng', 'fre', 'ita', 'spa'],
    currentLanguage: 0,
    HTMLDirection: "ltr",
    RTLLanguages: ["ara", "hbr", "per"],

    "AutoCloseTimeLength": 1000,
//    protectAutoClosePages: ['setting_update_progressing_page', "setting_autoupdate_page", "setting_forceupdate_page"],//保护不被关闭的页面
    protectPages: ['setting_update_progressing_page', "setting_autoupdate_page", "setting_forceupdate_page"],//保护不被关闭的页面
    noRepeatKeys: [VK_MENU, VK_HOME, VK_ENTER, VK_BACK, VK_EPG, VK_INFO, VK_RED, VK_GREEN, VK_YELLOW, VK_BLUE, VK_PIP, VK_PVR, VK_STOP],
    systemKeys: [VK_HOME, VK_EXIT, VK_MEDIA, VK_LIVETV, VK_MENU],
    "keyNameSet": {},//导航按键集合[页面按键计算]
    keySwitch: true,
    "defaultClosePageCallback": function (currentModule, beCloseOrigin) {

        if (currentModule == "setting") {
            debugPrint("setting auto close callback");
            if (!!SettingPageOrigin) {
                SettingPageOrigin.open();
                SettingPageOrigin.hiFocus();
            }
            else {
                if (!!beCloseOrigin && (beCloseOrigin.id == 'videoPlayer' || beCloseOrigin.id == 'musicPlayer' || beCloseOrigin.id == 'picPlayer')) {
                    beCloseOrigin.open();
                    beCloseOrigin.hiFocus();
                }
                else {
                    hiWebOsFrame.blankPage.open();
                    hiWebOsFrame.blankPage.hiFocus();
                }
            }
            return;
        }

        if (!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible == true) {
            hiWebOsFrame.myLauncher.hiFocus();
        }
        else {
            if (hiWebOsFrame.getCurrentPage() == null) {
                hiWebOsFrame.blankPage.open();
                hiWebOsFrame.blankPage.hiFocus();
            }
        }
    },
    keyMapFun: function (event) {
        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVChDown && hiWebOsFrame.isCurrentModule("setting")) {
            event.keyCode = hiWebOsFrame.getKeyValues().keyDown;
        }
        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVChUp && hiWebOsFrame.isCurrentModule("setting")) {
            event.keyCode = hiWebOsFrame.getKeyValues().keyUp;
        }
        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVVoUp && hiWebOsFrame.isCurrentModule("setting")) {
            event.keyCode = hiWebOsFrame.getKeyValues().keyRight;
        }
        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVVoDown && hiWebOsFrame.isCurrentModule("setting")) {
            event.keyCode = hiWebOsFrame.getKeyValues().keyLeft;
        }
        //此处加入物理键盘映射相关处理

        if (parseInt(event.keyCode) >= VK_KB_SQM && event.keyCode <= VK_KB_RIGHTDASH) {
            var KEYBOARD_KEYCODE_MAP = [];
            KEYBOARD_KEYCODE_MAP[VK_KB_COMMA      ] = 44;
            KEYBOARD_KEYCODE_MAP[VK_KB_DOT        ] = 46;
            KEYBOARD_KEYCODE_MAP[VK_KB_SLASH      ] = 47;
            KEYBOARD_KEYCODE_MAP[VK_KB_LT         ] = 60;
            KEYBOARD_KEYCODE_MAP[VK_KB_GT         ] = 62;
            KEYBOARD_KEYCODE_MAP[VK_KB_SEMICOLON  ] = 59;
            KEYBOARD_KEYCODE_MAP[VK_KB_COLON      ] = 58;
            KEYBOARD_KEYCODE_MAP[VK_KB_QUESTION   ] = 63;
            KEYBOARD_KEYCODE_MAP[VK_KB_SQM        ] = 39;
            KEYBOARD_KEYCODE_MAP[VK_KB_DQM        ] = 34;

            KEYBOARD_KEYCODE_MAP[VK_KB_EM            ] = 33;
            KEYBOARD_KEYCODE_MAP[VK_KB_AT            ] = 64;
            KEYBOARD_KEYCODE_MAP[VK_KB_WELL          ] = 35;
            KEYBOARD_KEYCODE_MAP[VK_KB_DOLLOR        ] = 36;
            KEYBOARD_KEYCODE_MAP[VK_KB_PERSENT       ] = 37;
            KEYBOARD_KEYCODE_MAP[VK_KB_JIAN          ] = 94;
            KEYBOARD_KEYCODE_MAP[VK_KB_AND           ] = 38;
            KEYBOARD_KEYCODE_MAP[VK_KB_STAR          ] = 42;
            KEYBOARD_KEYCODE_MAP[VK_KB_LEFTBR        ] = 40;
            KEYBOARD_KEYCODE_MAP[VK_KB_RIGHTBR       ] = 41;
            KEYBOARD_KEYCODE_MAP[VK_KB_BIGLEFTBR     ] = 123;
            KEYBOARD_KEYCODE_MAP[VK_KB_BIGRIGHTBR    ] = 125;
            KEYBOARD_KEYCODE_MAP[VK_KB_LEFTBRACKET   ] = 91;
            KEYBOARD_KEYCODE_MAP[VK_KB_RIGHTBRACKET  ] = 93;
            KEYBOARD_KEYCODE_MAP[VK_KB_HOR           ] = 124;
            KEYBOARD_KEYCODE_MAP[VK_KB_DASH          ] = 95;
            KEYBOARD_KEYCODE_MAP[VK_KB_DUN           ] = 96;
            KEYBOARD_KEYCODE_MAP[VK_KB_SUB           ] = 45;
            KEYBOARD_KEYCODE_MAP[VK_KB_EQEAL         ] = 61;
            KEYBOARD_KEYCODE_MAP[VK_KB_ADD           ] = 43;
            KEYBOARD_KEYCODE_MAP[VK_KB_WAVE          ] = 126;
            KEYBOARD_KEYCODE_MAP[VK_KB_RIGHTDASH] = 92;

            event.alphakey = KEYBOARD_KEYCODE_MAP[event.keyCode];
        }

    },
    winKeyDownHandler: function () {
        if (!!hiWebOsFrame.getCurrentPage()) {
            debugPrint('SDK print--currentPages(before winKeyDownHandler):' + hiWebOsFrame.getCurrentPage().id);
        }
        switch (event.keyCode) {
            case hiWebOsFrame.getKeyValues().keyMenu:
                debugPrint("Press Setting Now");
                //modeljs.sendam(':am,am,:stop=lau_browser');
                break;

//            case hiWebOsFrame.getKeyValues().keyExit:
//            case hiWebOsFrame.getKeyValues().keyHome:
//            case hiWebOsFrame.getKeyValues().keyLiveTV:
//            case hiWebOsFrame.getKeyValues().keySource:
//            case hiWebOsFrame.getKeyValues().keyVudu:
//            case hiWebOsFrame.getKeyValues().keyNetflix:
//            case hiWebOsFrame.getKeyValues().keyAmazon:
//            case hiWebOsFrame.getKeyValues().keyYoutube:
//            case hiWebOsFrame.getKeyValues().keyAllApp:
//                debugPrint("HiMedia need to release source now by event.keyCode=" + event.keyCode);
//                if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
//                    model.mpctrl.StopMpctrl(null);
//                    // HiVideoPlayer.closeVideoPlayer(1);
//                }
//                else if (hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {
//                    model.mpctrl.StopMpctrl(null);
//                    // HiAudioPlayer.closeAudioPlayer(1);
//                }
//                else if (hiWebOsFrame.getCurrentPage().id == "himedia_picPlayer") {
//                    model.picture.stopPic();
//                    //HiPicPlayer.closePicPlayer(1);
//                }
                break;

//            case hiWebOsFrame.getKeyValues().keyPMode:
//
//                break;
//            case hiWebOsFrame.getKeyValues().keySMode:
//
//                break;
//            case hiWebOsFrame.getKeyValues().key3D:
//
//                break;
//            case hiWebOsFrame.getKeyValues().keySize:
//
//                break;
//            case hiWebOsFrame.getKeyValues().keyLanguage:
//
//                break;
//            case hiWebOsFrame.getKeyValues().keySUBT:

//                break;
            default:
                //tempDebug = false;//正式去掉
                break;
        }
        if (!!hiWebOsFrame.getCurrentPage()) {
            debugPrint('SDK print--currentPages(after winKeyDownHandler):' + hiWebOsFrame.getCurrentPage().id);
        }
    },//window按键处理函数
    "systemNav": {
        "leftTo": "", "rightTo": "", "upTo": "", "downTo": "",
        "exitTo": "",
        "returnClose": ""
    },
    "modules": [
        {
            "id": "launcher",
            "nav": {
                "returnTo": "page1"
            }
        },
        {
            "id": "setting",
            "nav": {
                "returnTo": "page2"
            }
        },
        {
            "id": "demo",
            "nav": {
//                "returnTo": "page3",
                "leftTo": "bbb"
            }
        }
    ],
    hiModulePages: [

    /**--------------------- setting end ---------------------**/
        {
            "id": "himedia_fileBrowser",
            "module": "hiMedia",                         //表示页面所属模块
            "jsPath": "modulePages/himedia/fileBrowser.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
//            "jsPath": "launcher/js/launcher.js",
            "htmlPath": "modulePages/himedia/fileBrowser.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelCommon.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
            "description": "page",
            "pageMode": "module",//可指定module,single,dialog
            // "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
            "groupNavMode": "nearest",//nearest,sequence
            //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
            "horizontalEdgesJump": false,
            "verticalEdgesJump": true,
            "CaE": [],
            "initData": "",
            "onCreate": "",                        //页面创建时的回调函数
            "onOpen": "HiFileBrowser.openFileBrowser",                          //页面创建时的回调函数
            "onClose": "HiFileBrowser.closeFileBrowser",                         //页面创建时的回调函数
            "onDestroy": "",                       //页面创建时的回调函数
            "onFocus": "",
            "pageData": {},
            "singleKeyMode": true,
            "keyEventSet": {"keyDown": "HiFileBrowser.dropboxKeyDown", "keyUp": "", "keyPress": ""}
        },
        //Player
        {
            "id": "himedia_videoPlayer",
            "module": "videoPlayer",                         //表示页面所属模块
            "jsPath": "modulePages/himedia/videoPlayer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
            "htmlPath": "modulePages/himedia/videoPlayer.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelCommon.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
            "description": "videoPlayer",
            "pageMode": "module",//可指定module,single,dialog
            // "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
            "groupNavMode": "nearest",//nearest,sequence
            //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
            "horizontalEdgesJump": false,
            "verticalEdgesJump": true,
            "CaE": [],
            "AutoClose": false,
            "initData": "",
            "onCreate": "",                        //页面创建时的回调函数
            "onOpen": "",                  //页面创建时的回调函数
            "onClose": "",                         //页面创建时的回调函数
            "onDestroy": "",                       //页面创建时的回调函数
            "pageData": {},
            "singleKeyMode": true,
            "keyEventSet": {"keyDown": "HiVideoPlayer.keydownhander", "keyUp": "", "keyPress": ""},
            "keys": {
                "disable": [
                    VK_MEDIA
                ]
            }
        },

        //musicPlayer
        {
            "id": "himedia_musicPlayer",
            "module": "musicPlayer",                         //表示页面所属模块
            "jsPath": "modulePages/himedia/musicPlayer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
            "htmlPath": "modulePages/himedia/musicPlayer.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelCommon.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
            "description": "musicPlayer",
            "pageMode": "module",//可指定module,single,dialog
            // "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
            "groupNavMode": "nearest",//nearest,sequence
            //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
            "horizontalEdgesJump": false,
            "verticalEdgesJump": true,
            "CaE": [],
            "AutoClose": false,
            "initData": "",
            "onCreate": "",                        //页面创建时的回调函数
            "onOpen": "",                  //页面创建时的回调函数
            "onClose": "",                         //页面创建时的回调函数
            "onDestroy": "",                       //页面创建时的回调函数
            "pageData": {},
            "singleKeyMode": true,
            "keyEventSet": {"keyDown": "HiAudioPlayer.keydownhander", "keyUp": "", "keyPress": ""},
            "keys": {
                "disable": [
                    VK_MEDIA
                ]
            }
        },
        //picPlayer
        //picPlayer
        {
            "id": "himedia_picPlayer",
            "module": "picPlayer",                         //表示页面所属模块
            "jsPath": "modulePages/himedia/picPlayer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
            "htmlPath": "modulePages/himedia/picPlayer.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelCommon.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
            "description": "picPlayer",
            "pageMode": "module",//可指定module,single,dialog
            // "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
            "groupNavMode": "nearest",//nearest,sequence
            //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
            "horizontalEdgesJump": false,
            "verticalEdgesJump": true,
            "CaE": [],
            "AutoClose": false,
            "initData": "",
            "onCreate": "",                        //页面创建时的回调函数
            "onOpen": "",                  //页面创建时的回调函数
            "onClose": "",                         //页面创建时的回调函数
            "onDestroy": "",                       //页面创建时的回调函数
            "pageData": {},
            "singleKeyMode": true,
            "keyEventSet": {"keyDown": "HiPicPlayer.keydownhander", "keyUp": "", "keyPress": ""},
            "keys": {
                "disable": [
                    VK_MEDIA
                ]
            }
        }
    ],
    switchTable: [
        {"activePage": "", "activeModule": "", "includePages": [], "excludePages": []}
    ]
});

//调用SDK函数示例
hiWebOsFrame.SDKFunction_test('调用SDK函数');
var curArea = null;
var hiMediaReadyTimer = null;
var pvrflag = true;
var curBrand = "his";
$(document).ready(function () {
    /**   file://……/UI/hisenseUI/mediaIndex.html?module=fileBrowser&type=0&area=EU
     * file://……/UI/ hisenseUI/mediaIndex.html?module=videoPlayer&parameter =...
     *file://……/UI/ hisenseUI/mediaIndex.html?module=videoPlayer&parameter =...
     *file://……/UI/ hisenseUI/mediaIndex.html?module=videoPlayer&parameter =...
     *file://……/UI/ hisenseUI/mediaIndex.html?module=videoPlayer&parameter =...
     * */
    debugPrint('Now HiMedia UI is ready!');
    isLogOn = true;
    var str = window.location.href;
    var module = getUrlParam("module");
    var type = getUrlParam("type");
    pvrflag = getUrlParam("pvrflag");
    if (pvrflag != null) {
        pvrflag = eval(pvrflag.toLowerCase());
    }
    curArea = getUrlParam("area");
    debugPrint("type=" + type + "   module =" + module + "   pvrflag = " + pvrflag);
    var pvrPath = getUrlParam("path") + "pvr/";
    //注册给浏览器当前打开的是DMP
    try {
        waitForStopCmd(true);
    }
    catch (ex) {
        DBG_ERROR("waitForStopCmd(true) function error!  " + ex.message);
    }

    hiWebOsFrame.initA();
    //应该是！tv  这里暂时不对接使用假数据
    if (!tv) {
        debugPrint('not tv mode ');
        if (!module && !type) {
            debugPrint("ERROR START CMD...........");
            startHiMedia(0);

            // return false;
        }
        else {
            switch (module) {
                case "fileBrowser":
                    startHiMedia(type);
                    break;
                case "dropbox":
                    startHiMedia(0);
                    try {
                        getAllDropboxData();
                    } catch (ex) {
                        debugE(ex.message);
                    }
                    break;
                case "pvr":
                    startHiMedia(0);
                    try {
                        HiFileBrowser.currentDevice = 3;
                        debugPrint("Now go to PVR by interface!", DebugLevel.ALWAYS);
                        showUsbDetail2(pvrPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR);
                    } catch (ex) {
                        debugE(ex.message);
                    }
                    break;
                default :
                    break;
            }

        }


        //  startHiMedia();
//        startSndTest();
//          startSetting();
//        var id = "setting_sys_qs_page";
//        var id = "myLauncher";
//        createModulePage(id);
//        startQuickSetting();
    }
    else {
        hiMediaReadyTimer = setTimeout(function () {
            debugPrint('start the system');
            try {
                //pauseDTV();
                // model.onModelReady = SystemInit;
                //  debugPrint('start ready');
                model.initialize();
                SystemInit();
            }
            catch (ex) {
                debugE('start error:' + ex);
            }
//        try {
//            debugPrint('start mpctrl_av_update');
//            model.mpctrl.setMpCtrlAVUpdate(1);
//        }
//        catch (ex) {
//            debugE("mpctrl_av_update Error ----" + ex.message);
//        }
            try {
                debugPrint('clos MEMC');
                ctlr_memc_for_osd(0);
                ctlr_memc_for_osd(2);
            }
            catch (ex) {
                debugE("clos MEMC ----" + ex.message);
            }
            if (!module && !type) {
                debugPrint("ERROR START CMD...........");
                startHiMedia(0);

                // return false;
            }
            else {
                switch (module) {
                    case "fileBrowser":
                        startHiMedia(type);
                        hiWebOsFrame.startLoading(1, "initHimedia");
                        break;
                    case "dropbox":
                        hiWebOsFrame.createPage('himedia_fileBrowser', null, null, null, function (a) {
                            hiWebOsFrame.himedia_fileBrowser = a;
                            a.open();
                            a.hiFocus();
                            debugPrint("restart Himedia with dropbox Now!!");
                            try {
                                HiFileBrowser.initLanguage();
                            }
                            catch (e) {
                                debugE("FileBrowser Init Failed!!" + e.message);
                            }
                            initHiMedia(0);
                            HiFileBrowser.openDropbox();
                            try {
                                HiFileBrowser.initLanguage();
                            }
                            catch (e) {
                                debugE("FileBrowser Init Failed!!" + e.message);
                            }
                            // CHL_initChannelList();
                        });
                        hiWebOsFrame.startLoading(8, "initHimedia");
                        break;
                    case "pvr":
                        hiWebOsFrame.createPage('himedia_fileBrowser', null, null, null, function (a) {
                            hiWebOsFrame.himedia_fileBrowser = a;
                            a.open();
                            a.hiFocus();
                            debugPrint("start Himedia with pvr Now!!" + pvrPath);
                            try {
                                HiFileBrowser.initLanguage();
                            }
                            catch (e) {
                                debugE("FileBrowser Init Failed!!" + e.message);
                            }
                            //initHiMedia(0);
                            try {
                                HiFileBrowser.currentDevice = 3;
                                debugPrint("Now go to PVR by interface!", DebugLevel.ALWAYS);
                                showUsbDetail2(pvrPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR);
                            } catch (ex) {
                                debugE(ex.message);
                            }
                            try {
                                HiFileBrowser.initLanguage();
                            }
                            catch (e) {
                                debugE("FileBrowser Init Failed!!" + e.message);
                            }
                            //注册deletePVR的回调函数。
                            try {
                                model.usb.deletePVRHandler = deletePVRHandler;
                            }
                            catch (ex) {
                                debugE(ex.message);
                            }
                            // CHL_initChannelList();
                        });


                        break;
                    default :
                        //hiWebOsFrame.startLoading(5, "initHimedia");
                        break;
                }

            }
//        var id = "launcher_stabar";
            // createModulePage(id);
            initPlatformParam();
            //增加根据平台不同使用不同LOADING圈的机制
            if ('APP_5890_SA' == currentPlatform) {
                $('#loadingImg').css("display", "none");
                $('#loadingDiv').css("display", "block");
            }
            else {
                $('#loadingImg').css("display", "block");
                $('#loadingDiv').css("display", "none");
            }
            initOnchangedMethods();
            try {
                debugPrint("init NetWork", DebugLevel.ALWAYS);
                initNetworkPara();
            }
            catch (ex) {
                debugE(ex.message);
            }
            //重置DMP标志位
            try {
                debugPrint("change flag to 13", DebugLevel.ALWAYS);
                model.system.setReturnlocalappFlag(13);
            }
            catch (ex) {
                debugE(ex.message);
            }
            //关闭软键盘
            try {
                //   Hisense.loadLibrary("libvirtualkeyboard.so");

                if ("APP_5890_SA" == currentPlatform) {
                    Hisense_disableVKB();
                }
                else {
                    Hisense.VirtualKeyBoard.disable();
                }
            }
            catch (ex) {
                debugE(ex.message);
            }
        }, 100);

    }

    //isGUILoaded = true;
    // keyboard.set_listen(1);
    //为了DROPBOX的问题这里修改锁键的位置。
    // hiWebOsFrame.startLoading(5, "initHimedia");
})


function SystemInit() {
    debugPrint("the model ready:");
//    getcurLang();
    // hiWebOsFrame.startLoading(4, "initHimedia");
//    startLiveTv();
}


function startHiMedia(type) {

    hiWebOsFrame.createPage('himedia_fileBrowser', null, null, null, function (a) {
        hiWebOsFrame.himedia_fileBrowser = a;
        a.open();
        a.hiFocus();
        try {
            HiFileBrowser.initLanguage();
        }
        catch (e) {
            debugE("FileBrowser Init Failed!!" + e.message);
        }
        initHiMedia(type);

        // CHL_initChannelList();
    });

}

function getcurLang() {
    //var osdlanglist = [];
    //osdlanglist = getOSDLanguageMapList();
    //var index = _getIndexByNum(osdlanglist, model.language.getOsd());
    //hiWebOsFrame.setLanguage(osdlanglist[index].code);

}


//使用
function closePagesOrModuleByPage(page) {
    if (page.module == "livetv" || page.id == 'myLauncher') {
        page.close();
    }
    else if (page.id == 'epos') {
        page.destroy();
    }
    else {
        hiWebOsFrame.lockAllKeys();
        hiWebOsFrame.destroyModule(page.module, function () {
            hiWebOsFrame.unLockAllKeys();
        });
    }
}

//关闭除当前模块以外的其它模块
function closeDOthersModule(module) {
    var currentSDKPages = hiWebOsFrame.getSDKPages();
    var destroyList = [];
    $.each(currentSDKPages, function (k, v) {
        if ($.inArray(v.module, destroyList) == -1 && v.module != module) {
            destroyList.push(v.module);
        }
    })
    $.each(destroyList, function (k, v) {
        if (v == 'channelList') {
            if (!!hiWebOsFrame.blankPage)closeLiveTVModule();
        }
        else if (v == 'launcher') {
            if (!!hiWebOsFrame.myLauncher)hiWebOsFrame.myLauncher.close();
        }
        else if (v == 'epos') {
            if (!!hiWebOsFrame.epos)hiWebOsFrame.epos.close();
        }
        else {
            hiWebOsFrame.lockAllKeys();
            hiWebOsFrame.destroyModule(v, function () {
                hiWebOsFrame.unLockAllKeys();
            });
        }
    })

}

var isContinueCreate = false;
function createModulePage(pageId, oriPage) {

    !oriPage && (oriPage = null);

    hiWebOsFrame.startLoading();
    debugPrint('create page ' + pageId);

    hiWebOsFrame.createPage(pageId, null, oriPage, null, function (a) {


        hiWebOsFrame[pageId] = a;

        isContinueCreate = false;

        switch (pageId) {
            case "launcher_stabar":
                hiWebOsFrame[pageId].open();
                break;
            case "myLauncher":
                hiWebOsFrame[pageId].origin = null;
                isContinueCreate = true;
                createModulePage('launcher_stabar', a);
                hiWebOsFrame[pageId].hiFocus();
                return;
            //launcherNBar.initLauncherData();
//                break;
            case "accuweather_main":
                accuMain.initAccuweather();
                break;
            default :
                a.open();
                a.hiFocus();
//                debugPrint('page callback failed, can not find pageId: ' + pageId, DebugLevel.WARNING);
                break;
        }

        debugPrint('create page ' + pageId + ' success');
        !isContinueCreate && hiWebOsFrame.endLoading();
    });
}


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    //debugPrint(r);
    if (r != null) return unescape(r[2]);
    return null;
}

function initOnchangedMethods() {
    //监听播放器状态
    // debugPrint(model.mpctrl.getMpCtrlStat() + "ffffffffffffffffffffffffffffffffffff");
    model.mpctrl.onMpCtrlStatchanged = onMpCtrlStatchanged;
    model.usb.onVstrLatestEventChaged = onUSBSTATEChanged;
    model.mpctrl.onMpCtrlPlaytimeCurrentchanged = onMpCtrlPlaytimeCurrentchanged;
    model.mpctrl.onMpCtrlPlaytimeTotalchanged = onMpCtrlPlaytimeTotalchanged;
    model.system.onReturnlocalappFlagChaged = onReturnlocalappFlagChaged;
    model.volume.onVstrLatestEventChaged = onVstrLatestEventChaged;
    model.mpctrl.onUnlockPvrResult = onUnlockPvrResult;
    //model.mpctrl.onMpCtrlSpeedchanged = onMpCtrlSpeedchanged;

//    setInterval(function () {
//        debugPrint("________________LAST EVENT___" + model.mpctrl.getMetadata());
//        debugPrint("________________LAST EVENT___" + model.mpctrl.getUSBSTATE());
//    }, 3000);
}

//用于接收快进快退是否成功
function onMpCtrlSpeedchanged(value) {
    DBG_INFO("onMpCtrlSpeedchanged value is : " + value);
    if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
        if (value != 0) {
            DBG_ERROR("Time seek failed! error code is : " + value);
            toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[getCurrentLan()]["Time seek function is not support!"], 3);
        }
    }
}

//HiFileBrowser.currentConnectedUSBs = [];
var usbTimeOut = null;
var pvrIsPlaying = false;
function onUSBSTATEChanged(value) {
    debugPrint("onUSBSTATEChanged function begin! And Param value is :  " + value);
    if (hiWebOsFrame.getCurrentPage().id == "himedia_fileBrowser") {
        if (!!value[0]) {
            //Brad add to test BT17!!    !!usbTimeOut用于区分第一次启动

            if (value[0] == "offline") {
                //该处更改对应的JIRA两个BUG :   MT5655SA-349和K321-8733
                if (HiFileBrowser.HiMedia_initPage == 1) {
                    clearTimeout(usbTimeOut);
                }
                //
                usbTimeOut = setTimeout(function () {
                    HiFileBrowser.RefreshUSBdata(value[0], value[1]);
                }, 2000);
            }
            else {
                //var usbList = getUsbList();
                if (!!HiFileBrowser.initUSBList) {
                    //当前通知如果在USBLIST里的话，就不再刷新页面了。
                    for (var i = 0; i < HiFileBrowser.initUSBList.length; i++) {

                        var tmpUsbPath = HiFileBrowser.initUSBList[i].split(";")[0];
                        if (value[1] == tmpUsbPath) {
                            DBG_ALWAYS("value[1]" + value[1] + "   tmpUsbPath" + tmpUsbPath);
                            return false;
                        }


                    }
                }
                clearTimeout(usbTimeOut);
                usbTimeOut = setTimeout(function () {
                    DBG_ALWAYS(value[1]);
                    HiFileBrowser.RefreshUSBdata(value[0], value[1]);
                }, 1000);
            }


        }
    }
    if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
        if (value[0] == "offline") {
            if (!!HiFileBrowser.latestUsbId && HiFileBrowser.latestUsbId.indexOf(value[1]) != -1) {
                debugPrint("User remove the device which is playing now!");
                try {
                    HiFileBrowser.RefreshUSBdata(value[0], value[1]);
                } catch (e) {
                }
                setTimeout(function () {
                    HiVideoPlayer.closeVideoPlayer(1);
                }, 500);


            }
            //DBXvars.RefreshUSBdata(value[0], value[1]);
        }
    }
    if (hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {
        if (value[0] == "offline") {
            if (!!HiFileBrowser.latestUsbId && HiFileBrowser.latestUsbId.indexOf(value[1]) != -1) {
                debugPrint("User remove the device which is playing now!");
                try {
                    HiFileBrowser.RefreshUSBdata(value[0], value[1]);
                } catch (e) {
                }
                setTimeout(function () {
                    HiAudioPlayer.closeAudioPlayer(1);
                }, 500);


            }
            //DBXvars.RefreshUSBdata(value[0], value[1]);
        }
    }
    if (hiWebOsFrame.getCurrentPage().id == "himedia_picPlayer") {
        if (value[0] == "offline") {
            if (!!HiFileBrowser.latestUsbId && HiFileBrowser.latestUsbId.indexOf(value[1]) != -1) {
                debugPrint("User remove the device which is playing now!");
                try {
                    HiFileBrowser.RefreshUSBdata(value[0], value[1]);
                } catch (e) {
                }
                setTimeout(function () {
                    HiPicPlayer.closePicPlayer(1)
                }, 500);


            }
            //DBXvars.RefreshUSBdata(value[0], value[1]);
        }
    }
//    switch (value[0]) {
//        case "online":
//            HiFileBrowser.showUSBVOLUME(value[1], value[2]);
//            getUsbList();
////            var testStr = "";
////            try {
////                testStr = Hisense.File.read("usbs", 0);
////            }
////            catch (e) {
////                debugPrint(e.message)
////            }
////            debugPrint(testStr);
//            break;
//        case "offline":
//            HiFileBrowser.showNone();
//            getUsbList();
////            var testStr = "";
////            try {
////                testStr = Hisense.File.read("usbs", 0);
////            }
////            catch (e) {
////                debugPrint(e.message)
////            }
////            debugPrint(testStr);
//            break;
//    }
}
function getVstrLatestEventChaged(value) {


//****************************添加 HiMedia刷新机制开始************************//


}
//新增获取总时间的机制
function onMpCtrlPlaytimeTotalchanged(value) {
    if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
        HiVideoPlayer.videoTotaltime = value;
        $("#endTime").html(HiVideoPlayer.getTimeText(HiVideoPlayer.videoTotaltime));
        $("#VinfoTableTd3").html(HiVideoPlayer.getTimeText(HiVideoPlayer.videoTotaltime));
        $("#PlayTime_3").html("/ " + HiVideoPlayer.getTimeText(HiVideoPlayer.videoTotaltime));
    }
    else if (hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {
        HiAudioPlayer.musicTotaltime = value;
        if (HiAudioPlayer.musicTotaltime > 3600) {

            $("#currentTime").css("margin-left", "570px");
            $("#duration").html(HiAudioPlayer.getTimeTextWithHour(HiAudioPlayer.musicTotaltime));
        }
        else {

            $("#currentTime").css("margin-left", "650px");
            $("#duration").html(HiAudioPlayer.getTimeText(HiAudioPlayer.musicTotaltime));
        }
    }
}

function onMpCtrlPlaytimeCurrentchanged(value) {
    //debugPrint("onMpCtrlPlaytimeCurrentchanged function begin !  now playtime is : " + value);
    if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
        try {
            HiVideoPlayer.getProgress(value);
        }
        catch (e) {
            debugE("_Error !!!!!!!!!" + e.message);
        }

    }
    else if (hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {
        HiAudioPlayer.getProgress(value);
    }
}
function onMpCtrlStatchanged(value) {
    debugPrint("mpctrl_mediaConfig state changed : " + value);
    switch (parseInt(value)) {
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_IDLE:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARING:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARED:
            //准备好后发播放命令
            //model.mpctrl.PlayNow();
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAYING:
            //同步一次UI的播放标志位
            //debugE("HiVideoPlayer.playerStatus");
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    HiVideoPlayer.playerStatus = 1;
                    $("#videoPlayerStatus").attr("src", "img/himedia/videoPlayer/play_status.png");
                    //判断当前焦点位置
                    if (HiVideoPlayer.videoPlayerFocus == 0)
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause2.png");
                    else
                        $("#videoPlayerButton1").attr("src", "img/himedia/videoPlayer/pause1.png");

                    break;
                case "himedia_musicPlayer":
                    HiAudioPlayer.playerStatus = 1;
                    break;

                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PAUSE:
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    HiVideoPlayer.playerStatus = 0;
                    break;
                case "himedia_musicPlayer":
                    HiAudioPlayer.playerStatus = 0;
                    break;

                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_STOP:


            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_RELEASING:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAY_DONE:
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    try {
                        HiVideoPlayer.currentPlayerIsPlayDone = true;
                        hiWebOsFrame.endLoading("videoPlayer");
                        //PVR解锁操作
                        if (!!HiVideoPlayer.needUnlockPvr) {
                            model.mpctrl.UnlockPvr();
                            HiVideoPlayer.needUnlockPvr = false;
                        }
                        //添加初始化的NORMAL处理
                        try {
                            HiVideoPlayer.resolution = model.mpctrl.getFormatInfo();
                            HiVideoPlayer.Vwidth = parseInt(HiVideoPlayer.resolution.split("*")[0]);
                            HiVideoPlayer.Vheight = parseInt(HiVideoPlayer.resolution.split("*")[1]);
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
                        } catch (ex) {
                            DBG_ERROR("[VideoPlayer] Play_done:" + ex.message);
                        }
                        //字幕相关操作
                        HiVideoPlayer.videoTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();
                        $("#endTime").html(HiVideoPlayer.getTimeText(HiVideoPlayer.videoTotaltime));
                        $("#VinfoTableTd3").html(HiVideoPlayer.getTimeText(HiVideoPlayer.videoTotaltime));
                        $("#PlayTime_3").html("/ " + HiVideoPlayer.getTimeText(HiVideoPlayer.videoTotaltime));
                        HiVideoPlayer.getProgress(0);
                        if (!pvrIsPlaying) {
                            var subtileTotalNo = model.mpctrl.getMpCtrlSubtitleTotalNo();
                            var audioTrackTotalNo = model.mpctrl.getMaxAudioTrack();
                            //音轨相关操作
                            DBG_ALWAYS("Audio Track,getMax:  " + audioTrackTotalNo);
                            DBG_ALWAYS("[videoPlayer] subtileNo is : " + subtileTotalNo);
                            //需要先关一下字幕，
                            model.mpctrl.setMpCtrlSubtitleNo(65535);
                            model.mpctrl.setMpCtrlSubtitleEncode(100);

                            HiVideoPlayer.subtitleList = [];
                            HiVideoPlayer.audioTrackList = [];
                            if (subtileTotalNo > 0) {
                                for (var i = 0; i < subtileTotalNo + 1; i++) {
                                    if (i == 0) {
                                        //需要OFF多语言
                                        HiVideoPlayer.subtitleList.push(subtitleLang[getCurrentLan()]["Off"]);
                                    }
                                    else {
                                        HiVideoPlayer.subtitleList.push(i + "");
                                    }
                                }
//用来控制焦点位置
                                HiVideoPlayer.videoSettingContrl = 3;
                            }
                            else {
                                HiVideoPlayer.videoSettingContrl = 1;
                            }
                            if (audioTrackTotalNo > 1) {
                                for (var i = 0; i < audioTrackTotalNo; i++) {

                                    HiVideoPlayer.audioTrackList.push(i + "");

                                }
                                HiVideoPlayer.videoSettingContrl++;
                            } else {
                                HiVideoPlayer.audioTrackList = [];
                                DBG_ALWAYS("No audio Track info.");
                            }
                        } else {
                            var subtileTotalNo = model.mpctrl.getMpCtrlSubtitleTotalNo();
                            var subtileTotalNo_pvr = model.mpctrl.getMpCtrlPvrSubtitleTotalNo();
                            DBG_ALWAYS("[videoPlayer] subtileNo_pvr is : " + subtileTotalNo_pvr);
                            //需要先关一下字幕，
                            model.mpctrl.setMpCtrlPvrSubtitleNo(65535);
                            //model.mpctrl.setMpCtrlPvrSubtitleEncode(100);

                            HiVideoPlayer.subtitleList = [];
                            if (subtileTotalNo_pvr + subtileTotalNo > 0) {
                                for (var i = 0; i < subtileTotalNo_pvr + subtileTotalNo + 1; i++) {
                                    if (i == 0) {
                                        //需要OFF多语言
                                        HiVideoPlayer.subtitleList.push(subtitleLang[getCurrentLan()]["Off"]);
                                    }
                                    else {
                                        HiVideoPlayer.subtitleList.push(i + "");
                                    }
                                }
//用来控制焦点位置
                                HiVideoPlayer.videoSettingContrl = 3;
                            }
                            else {
                                HiVideoPlayer.videoSettingContrl = 1;
                            }

                        }
                        //DBG_ALWAYS("[videoPlayer] subtileEncode is : " + model.mpctrl.getMpCtrlSubtitleEncode());

                    }
                    catch (e) {
                        debugE(e.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiVideoPlayer.videoTotaltime);
                    break;
                case "himedia_musicPlayer":
                    try {
                        HiAudioPlayer.musicTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();

                        HiAudioPlayer.getProgress(0);
                        HiAudioPlayer.UIchange();
                        if (HiAudioPlayer.musicTotaltime > 3600) {

                            $("#currentTime").css("margin-left", "570px");
                            $("#duration").html(HiAudioPlayer.getTimeTextWithHour(HiAudioPlayer.musicTotaltime));
                        }
                        else {

                            $("#currentTime").css("margin-left", "650px");
                            $("#duration").html(HiAudioPlayer.getTimeText(HiAudioPlayer.musicTotaltime));
                        }
                        var audioThumb = model.mpctrl.getMpCtrlMusicCover();
//                    $('#audioSinger').html(info[8]);
                        if (!!audioThumb) {
                            $('#musicIcon').attr("src", "file://" + audioThumb + "?a=" + new Date().getTime());
                        }
                        else {
                            $('#musicIcon').attr("src", "img/himedia/musicPlayer/music-icon.png");
                        }
                    }
                    catch (e) {
                        debugE(e.message);
                    }
                    try {

                        debugPrint("Try to getMpCtrlSubtitleNo_after" + model.mpctrl.getMpCtrlSubtitleNo());
                        model.mpctrl.setMusicSubtitleLineNum(4);
                        debugPrint("Try to getMpCtrlSubtitlePosition" + model.mpctrl.getMusicSubtitlePosition());
                        model.mpctrl.setMusicSubtitlePosition([722, 570, 925, 200]);
                        debugPrint("Try to getMpCtrlSubtitleNo_before" + model.mpctrl.getMpCtrlSubtitleNo());
                        //model.mpctrl.FindMusicLyric(HiAudioPlayer.audioList[HiAudioPlayer.cIndex].audioUrl);
                        model.mpctrl.setMpCtrlSubtitleNo(0);
                    } catch (ex) {
                        debugE(ex.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiAudioPlayer.musicTotaltime);

                    break;

                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARE_DONE:
            model.mpctrl.PlayNow();
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    try {
                        //                       hiWebOsFrame.endLoading("videoPlayer");
                        HiVideoPlayer.videoTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();
                        //初始化全屏
                        //model.mpctrl.setScreenPosition(0, 0, 1920, 1080);

//                        debugE("videoInfo is :" + model.mpctrl.getMpctrlInfo()[25]);
//DOLBY图标处理
                        var dolbyImg = model.mpctrl.getMpctrlInfo()[25];
                        if (!!dolbyImg) {
                            if (dolbyImg.indexOf("Dolby") != -1) {
                                $("#dolby").css("display", "block");
                            }
                            else {
                                $("#dolby").css("display", "none");
                            }
                        }
                        else {
                            $("#dolby").css("display", "none");
                        }
                    }
                    catch (e) {
                        debugE(e.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiVideoPlayer.videoTotaltime);
                    break;
                case "himedia_musicPlayer":
                    try {
                        HiAudioPlayer.musicTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();
                    }
                    catch (e) {
                        debugE(e.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiAudioPlayer.musicTotaltime);
//                    var audioThumb = model.mpctrl.getMpCtrlMusicCover();
                    var info = model.mpctrl.getMpctrlInfo();
                    DBG_ALWAYS("________audio__________thumb____________" + info[8]);
//                    $('#audioSinger').html(info[8]);
//                    if (!!audioThumb) {
//
//                        $('#musicIcon').attr("src", "file://" + audioThumb + "?a=" + new Date().getTime());
//                    }

                    break;

                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_AUTO_STOP:
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    //重置所有对话框
                    $("#videoPlayTimeSetting").css("display", "none");
                    $("#videoList").css("display", "none");
                    $("#videoSetting").css("display", "none");
                    $("#videoInformation").css("display", "none");

                    hiWebOsFrame.startLoading(2, "himedia_videoPlayer");
                    HiVideoPlayer.progressWidth = 1510;
                    try {
                        $("#vpb").css("width", HiVideoPlayer.progressWidth + "px");
                    } catch (ex) {
                        debugE(ex.message);
                    }

                    setTimeout(function () {
                        if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
                            HiVideoPlayer.playNextWhenStop();
                        } else {
                            DBG_ERROR("current page is not videoPlayer!It is " + hiWebOsFrame.getCurrentPage().id);
                        }
                    }, 500);

                    break;
                case "himedia_musicPlayer":
                    //结束时充满进度条
                    HiAudioPlayer.progressWidth = 917;
                    try {
                        $("#pg").css("width", HiAudioPlayer.progressWidth + "px");
                    } catch (ex) {
                        debugE(ex.message);
                    }
                    setTimeout(function () {
                        if (hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {
                            HiAudioPlayer.playNext();
                        } else {
                            DBG_ERROR("current page is not musicPlayer!It is " + hiWebOsFrame.getCurrentPage().id);
                        }
                    }, 500);

                    break;
                default :
                    break;
            }
            break;

        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_REPLAY:
            hiWebOsFrame.startLoading(5, "videoPlayer");
            if (HiVideoPlayer.frIndex != 0) {
                debugPrint("Fr button need refresh!!!!!");
                try {
                    HiVideoPlayer.refreshFrButton();
                }
                catch (e) {
                    debugE(e.message);
                }
            }
            break;

        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_AUDIO_UNPLAYABLE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_VIDEO_UNPLAYABLE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FILE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_OPEN_FILE_FAIL:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_UNKNOWN:
            toastMsg(playerLang[getCurrentLan()]["Information"], playerLang[getCurrentLan()]["File not supported."], 5);
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    hiWebOsFrame.endLoading("videoPlayer");
                    HiVideoPlayer.closeVideoPlayer(1);
                    break;
                case "himedia_musicPlayer":
                    HiAudioPlayer.closeAudioPlayer(1);
                    break;
                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_FILE_EXPIRED:
            toastMsg(playerLang[getCurrentLan()]["Information"], playerLang2[getCurrentLan()]["The file has expired and can not be played."], 5);
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    hiWebOsFrame.endLoading("videoPlayer");
                    HiVideoPlayer.closeVideoPlayer(1);
                    break;
                case "himedia_musicPlayer":
                    HiAudioPlayer.closeAudioPlayer(1);
                    break;
                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_MEDIA_LOST:
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "himedia_videoPlayer":
                    hiWebOsFrame.endLoading("videoPlayer");
                    HiVideoPlayer.closeVideoPlayer(1);
                    break;
                case "himedia_musicPlayer":
                    HiAudioPlayer.closeAudioPlayer(1);
                    break;
                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PVR_CHANNEL_LOCK:
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PVR_RATING_LOCK:
            debugPrint("Need input passwd！！！", DebugLevel.ALWAYS);
            if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
                try {
                    HiVideoPlayer.checkPinRequest();


                }
                catch (ex) {
                    debugE(ex.message);
                }
            }
            else {
                debugE("Now page is not video ----" + hiWebOsFrame.getCurrentPage().id);
            }
            break;
        default :
            break;
    }
}

function onUnlockPvrResult(value) {
    debugE(value);

}
function detectDuplicateUSB(rootPath) {
    if (HiFileBrowser.currentConnectedUSBs.length == 0) {
    }
}

function onStop() {
    debugPrint("HiMedia Stoped by onStop!!!!!");
    try {
        debugPrint("HiMedia Stoped by GUI!!!!!" + hiWebOsFrame.getCurrentPage().id);
        if (hiWebOsFrame.getCurrentPage().id == "himedia_picPlayer") {

            //model.mpctrl.StopMpctrl(null);
            if (!!getImageSizeTimer1) {
                debugPrint("Clear getImageSizeTimer1");
                clearTimeout(getImageSizeTimer1);
                // clearTimeout(getImageSizeTimer2);
            }
            if (!!getImageSizeTimer2) {
                debugPrint("Clear getImageSizeTimer2");
                clearTimeout(getImageSizeTimer2);
            }
            clearInterval(HiPicPlayer.playTime);
            model.picture.stopPic();
            model.mpctrl.setMpctrlFlag(0);
            model.network.setEnumNetworkConfig(2);
            setTimeout(function () {
                sendStopCmd();
            }, 500);

        }
        else if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer"
            || hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {

            model.mpctrl.StopMpctrl(null);
            model.mpctrl.setMpctrlFlag(0);
            model.network.setEnumNetworkConfig(2);
            setTimeout(function () {
                sendStopCmd();
            }, 500);

        }
        else {
            model.mpctrl.setMpctrlFlag(0);
            model.network.setEnumNetworkConfig(2);
            setTimeout(function () {
                sendStopCmd();
            }, 300);
        }
    }
    catch (e) {
        debugE(e.message);
    }
};

function getUsbList() {
    var testStr = "";
    try {
        testStr = Hisense.File.read("usbs", 0);
    }
    catch (e) {
        debugPrint(e.message);

    }
    debugPrint(testStr);
    if (isNaN(testStr)) {
        //debugPrint(testStr.split("\n")[1]);
        if (testStr.split("\n").length > 0) {
            return uniqueList(testStr.split("\n"));

        }
        else {
            debugPrint("NO USB DEVICE NOW!!!!", DebugLevel.WARNING);
            return null;
        }
    }
    else {
        debugPrint("Can't read the file :  /tmp/usbs!!!!!!!!!!!!!!!!!", DebugLevel.ERROR);
        return null;
    }
}

function uniqueList(arr) {
    var arrTmp = [];
    for (var i = 0; i < arr.length; i++) {
        DBG_ALWAYS(arr[i] + "_____" + arrTmp.indexOf(arr[i]));
        if (!!arr[i])
            if (arrTmp.indexOf(arr[i]) == -1) {
                arrTmp.push(arr[i]);
            }
    }
    return arrTmp;
}

var FlagShareInBrowser_HiMedia = {  //Picasa 占用 index 1~5; 其他index请从 5以后开始， 建议5个一组或10个一组，方便区分
    "NORMAL": 0, //正常状态
    //1~5: Picasa占用
    "PICASA_GOOGLE": 1,  //要跳转到谷歌页面
    "PICASA_OAUTH_RETURN_PAGE": 2,    //
    "PICASA_OAUTH_TOKEN_PAGE": 3,
    //11~20  HiMedia暂时使用
    "LAUNCHER_KILL_HIMEDIA": 11,
    "LAUNCHER_START_SETTING_NOW": 12,
    "HIMEDIA_KILL_ITSELF": 13,
    "HIMEDIA_PAUSE_TO_SETTING": 14,
    "HIMEDIA_RESUME_FROM_SETTING": 15
}

var GlobalFlagShareInBrowser = 0;
var dlnaTimeOut;
function onVstrLatestEventChaged(value) {
    debugPrint("onVstrLatestEventChaged function begin! And Param value is :  " + value);
    if (hiWebOsFrame.getCurrentPage().id == "himedia_fileBrowser") {
        if (!!value[5]) {
            //Brad add to test BT17!!

            clearTimeout(dlnaTimeOut);
            dlnaTimeOut = setTimeout(function () {
                HiFileBrowser.RefreshUSBdata(value[5], value[1]);
            }, 1000);

        }
    }
    if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
        if (value[5] == "offline") {
            if (!!HiFileBrowser.latestUsbId && HiFileBrowser.latestUsbId == value[1]) {
                debugPrint("User remove the device which is playing now!");
                try {
                    HiFileBrowser.RefreshUSBdata(value[5], value[1]);
                } catch (e) {
                }
                setTimeout(function () {
                    HiVideoPlayer.closeVideoPlayer(1);
                }, 250);


            }
            //DBXvars.RefreshUSBdata(value[0], value[1]);
        }
    }
    if (hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {
        if (value[5] == "offline") {
            if (!!HiFileBrowser.latestUsbId && HiFileBrowser.latestUsbId == value[1]) {
                debugPrint("User remove the device which is playing now!");
                try {
                    HiFileBrowser.RefreshUSBdata(value[5], value[1]);
                } catch (e) {
                }
                setTimeout(function () {
                    HiAudioPlayer.closeAudioPlayer(1);
                }, 500);


            }
            //DBXvars.RefreshUSBdata(value[0], value[1]);
        }
    }
    if (hiWebOsFrame.getCurrentPage().id == "himedia_picPlayer") {
        if (value[5] == "offline") {
            if (!!HiFileBrowser.latestUsbId && HiFileBrowser.latestUsbId == value[1]) {
                debugPrint("User remove the device which is playing now!");
                try {
                    HiFileBrowser.RefreshUSBdata(value[5], value[1]);
                } catch (e) {
                }
                setTimeout(function () {
                    HiPicPlayer.closePicPlayer(1)
                }, 500);


            }
            //DBXvars.RefreshUSBdata(value[0], value[1]);
        }
    }
//    debugE(value + "_________________");


}
var setFlagTimer = null;
function onReturnlocalappFlagChaged(val) {
    debugPrint("[HiMedia]onReturnlocalappFlagChaged: " + val);
    switch (val) {

        case 14:
            debugPrint("[HiMeida] HIMEDIA_PAUSE_TO_SETTING");
            //keyboard.set_listen(0);
            //hiWebOsFrame.registerKeyCodesNormal();
            //keyboard.registerKeyCodes([]);
            break;
        case 15:
            debugPrint("[HiMeida] HIMEDIA_RESUME_FROM_SETTING");
            //keyboard.set_listen(1);

            //resume的时候需要更新下多语言。
            try {
                debugPrint('clos MEMC when resume DMP');
                ctlr_memc_for_osd(0);

            }
            catch (ex) {
                debugE("clos MEMC ----" + ex.message);
            }
            switch (hiWebOsFrame.getCurrentPage().id) {

                case "himedia_fileBrowser":
                    try {
                        HiFileBrowser.initLanguage();
                        ctlr_memc_for_osd(2);
                    }
                    catch (e) {
                        debugE("FileBrowser Init Failed!!" + e.message);
                    }
                    break;
                case "himedia_videoPlayer":
                    try {
                        var countrycode = model.basicSetting.getTvsetLocation();
                        DBG_ALWAYS("countrycode IS " + countrycode);
                        if (countrycode == "ISR") {
                            HiVideoPlayer.isISR = true;
                        } else {
                            HiVideoPlayer.isISR = false;
                        }
                        HiVideoPlayer.initLanguage();
                        if (!HiVideoPlayer.isController) {
                            debugPrint('enable MEMC when resume DMP & hideUI');
                            ctlr_memc_for_osd(1);
                        }

                    }
                    catch (e) {
                        debugE("HiVideoPlayer Init Failed!!" + e.message);
                    }
                    break;
                case "himedia_musicPlayer":

                    try {
                        ctlr_memc_for_osd(2);
                        HiAudioPlayer.initLanguage();
                    }
                    catch (e) {
                        debugE("HiAudioPlayer Init Failed!!" + e.message);
                    }
                    break;
                case "himedia_picPlayer":
                    try {
                        HiPicPlayer.initLanguage();
                    }
                    catch (e) {
                        debugE("HiPicPlayer Init Failed!!" + e.message);
                    }
                    break;
            }
            //hiWebOsFrame.registerKeyCodesNormal();
//回复标志位
            setFlagTimer = setTimeout(function () {
                if (!!setFlagTimer) {
                    clearTimeout(setFlagTimer);
                    setFlagTimer = null;
                }
                try {
                    model.system.setReturnlocalappFlag(13);
                } catch (ex) {
                    debugE(ex.message);
                }
            }, 200);
            //need init language!!
            break;
        case 18:
            //当音量条消失后如果正在播放视频需要开启MEMC
            try {
                debugPrint('clos MEMC when resume DMP from volume change');
                ctlr_memc_for_osd(0);
           //     ctlr_memc_for_osd(2);
            }
            catch (ex) {
                debugE("clos MEMC ----" + ex.message);
            }
            if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer") {
                try {

                    if (!HiVideoPlayer.isController) {
                        debugPrint('enable MEMC when resume DMP & hideUI');
                        ctlr_memc_for_osd(1);
                    }

                }
                catch (e) {
                    debugE("HiVideoPlayer Init MEMC Failed!!" + e.message);
                }
            }
            //回复标志位
            try {
                model.system.setReturnlocalappFlag(13);
            } catch (ex) {
                debugE(ex.message);
            }
            break;

        default :
            break;
    }


}


function getCurrentLan() {
    var HiMediaLanguages = [
        "eng"     ,  //SL2_TVAPI_LANGUAGE_ENGLISH = 0,
        "fre"     ,  //SL2_TVAPI_LANGUAGE_FRENCH = 1,
        "spa"       ,  //SL2_TVAPI_LANGUAGE_SPANISH = 2,
        "por"       ,  //SL2_TVAPI_LANGUAGE_PORTUGUESE = 3,
        "ara"       ,  //SL2_TVAPI_LANGUAGE_ARABIC = 4,
        "rus"       ,  //SL2_TVAPI_LANGUAGE_RUSSIAN = 5,
        "chi"       ,  //SL2_TVAPI_LANGUAGE_CHINESE = 6,
        "vie"     ,  // SL2_TVAPI_LANGUAGE_Vietnamese = 7, // Vietnamese
        "tha"     ,  // SL2_TVAPI_LANGUAGE_Thai = 8, // Thai
        "bur"     ,  // SL2_TVAPI_LANGUAGE_bru = 9, // bur
        "uzb"     ,  // SL2_TVAPI_LANGUAGE_Uzbek = 10, // Uzbek
        "hin"     ,  // SL2_TVAPI_LANGUAGE_Hindi = 11, // Hindi
        "ukr"     ,  // SL2_TVAPI_LANGUAGE_ukr= 12, // ukr
        "mal"     ,  // SL2_TVAPI_LANGUAGE_mal= 13, // mal
        "hbr"     ,  // SL2_TVAPI_LANGUAGE_hbr= 14, // hbr
        "zho"     ,  // SL2_TVAPI_LANGUAGE_zho = 15, //
        "ger"     ,  //SL2_TVAPI_LANGUAGE_GERMAN = 16,
        "ita"       ,  //SL2_TVAPI_LANGUAGE_ITALIAN = 17
        "swe"       ,  //SL2_TVAPI_LANGUAGE_SWEDISH = 18,
        "dan"       ,  //SL2_TVAPI_LANGUAGE_DANISH = 19,
        "fin"       ,  //SL2_TVAPI_LANGUAGE_FINNISH = 20,
        "nor"       ,  //SL2_TVAPI_LANGUAGE_NORWEGIAN = 21,
        "cze"       ,  //SL2_TVAPI_LANGUAGE_CZECH = 22,
        "slo"       ,  //SL2_TVAPI_LANGUAGE_SLOVAK = 23
        "pol"     ,  //SL2_TVAPI_LANGUAGE_POLISH = 24
        "hun"     ,  //SL2_TVAPI_LANGUAGE_HUNGARIAN = 25
        "bul"     ,  //SL2_TVAPI_LANGUAGE_BULGARIAN = 26
        "tur"     ,  //SL2_TVAPI_LANGUAGE_TURKISH = 27
        "per"     ,  // SL2_TVAPI_LANGUAGE_Persian = 28 / Persian
        "ind"     ,  // SL2_TVAPI_LANGUAGE_Indonesian = 29 // Indonesian
        "hrv"     , //30   "克罗地亚语",
        "srp"     , //31   "塞尔维亚语",
        "mac"     , //32   "马其顿语",
        "alb"     , //33   "阿尔巴尼亚语",
        "lav"     , //34   "拉脱维亚语"
        "est"     , //35   "爱沙尼亚语"
        "lit"     , //36   "立陶宛语"
        "none"     , //37   "none",
        "none"     , //38   "none"
        "none"     , //39   "none"
        "none"     ,  //40   "none"
        "gre"        //41  "希腊语"
    ];
    try {
        var lanIndex = model.language.getOsd();
        debugPrint("NOW LANGUAGE ID IS :" + lanIndex);
        if (lanIndex < HiMediaLanguages.length) {
            return HiMediaLanguages[lanIndex];
        }
        else {
            DBG_ERROR("lanIndex ERROR: " + lanIndex);
            return "eng";
        }
    }
    catch (e) {
        debugE(e.message);
        return "eng";
    }
}


function ctlr_memc_for_osd(status) //0为页面open,1为页面close,实现osd显示时关闭memc,osd消失时复原memc.
{

    switch (status) {
        case 0:
            var smooth = model.video.getEnumSmoothMotion();//get 当前ui memc效果
            if (smooth != 0) {                             //只有当前memc为开着的状态，才做关闭的动作，已经关闭什么不做．
                var val = 101;
                model.video.setEnumSmoothMotion(val);   //val为101时，只做memc关闭效果的动作，不会记入eeprom值，从而不影响当前ui设置的值

            }
            break;
        case 1:
            var val = 100;                       //val 为100时，会get当前ui上的memc效果值，页面关闭时恢复memc效果．
            model.video.setEnumSmoothMotion(val);

            break;
        case 2:
            debugPrint("xuehongfeng set memc 102" + curArea);
            if (!!curArea && curArea == 'EU') {
                debugPrint("set enum smooth motion[102]");
                model.video.setEnumSmoothMotion(102);
            }
            break;
        case 3:
            debugPrint("xuehongfeng set memc 103" + curArea);
            if (!!curArea && curArea == 'EU') {
                debugPrint("set enum smooth motion[103]");
                model.video.setEnumSmoothMotion(103);
            }
            break;
        default :
            DBG_ERROR("parameter[" + status + "] error");
            break;
    }
}


function toastMsg(title, content, timeOut, callBack) {

    //title = !title ? 'Information' : title;
    debugPrint("toastMsg title is :　" + title);
    timeOut = !timeOut ? 3 : timeOut;

    // $('#msg_title').html(getCurrentContentLanguage(title));
    $('#toast_content').html(getCurrentContentLanguage(content));
    $('#toastBox').css('display', 'block');

    hiWebOsFrame.lockAllKeys();
    setTimeout(function () {
        $('#toastBox').css('display', 'none');
        //$('#msg_title').html('');
        $('#toast_content').html('');
        hiWebOsFrame.unLockAllKeys();
        if (!!callBack) {
            callBack();
        }
    }, timeOut * 1000);

}
function checkDMPkeycode(keyCode) {
    try {
        if (keyCode != VK_LEFT && keyCode != VK_RIGHT) return keyCode;
        if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) return keyCode;
        //特殊处理数字输入不需要翻转的情况
        if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer" && HiVideoPlayer.dialogShowStatus == 1)
            return keyCode;
        return (VK_LEFT + VK_RIGHT - keyCode);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
        return keyCode;
    }

}


function DMPonStop() {
    debugPrint("HiMedia Stoped by GUI!!!!!");

    try {
        debugPrint("HiMedia Stoped by GUI!!!!!" + hiWebOsFrame.getCurrentPage().id);
        if (hiWebOsFrame.getCurrentPage().id == "himedia_picPlayer") {
            //model.mpctrl.StopMpctrl(null);
            if (!!getImageSizeTimer1) {
                debugPrint("Clear getImageSizeTimer1");
                clearTimeout(getImageSizeTimer1);
                // clearTimeout(getImageSizeTimer2);
            }
            if (!!getImageSizeTimer2) {
                debugPrint("Clear getImageSizeTimer2");
                clearTimeout(getImageSizeTimer2);
            }
            clearInterval(HiPicPlayer.playTime);
            model.picture.stopPic();

        }
        else if (hiWebOsFrame.getCurrentPage().id == "himedia_videoPlayer"
            || hiWebOsFrame.getCurrentPage().id == "himedia_musicPlayer") {
            model.mpctrl.StopMpctrl(null);

        }
        try {
            model.mpctrl.setMpctrlFlag(0);
        }
        catch (ex) {
            debugE(ex.message);
        }
        try {
            model.network.setEnumNetworkConfig(2);
        } catch (ex) {
            debugE(ex.message);
        }
    }
    catch (e) {
        debugE(e.message);
    }

}
