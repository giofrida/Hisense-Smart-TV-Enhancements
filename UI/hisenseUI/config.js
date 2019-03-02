/**
 * Created with JetBrains PhpStorm.
 * User: Lewis
 * Date: 14-3-17
 * Time: 下午3:55
 * To change this template use File | Settings | File Templates.
 */
var langPackages = {};//OneLangPackageXHR
var applications = [
    {"name": "netflix", "pageId": "app_netflix", "key": VK_NETFLIX, "type": "native"},
    {"name": "amazonruby", "pageId": "app_amazonruby", "key": VK_AMAZON, "type": "native"},
    {"name": "vudu", "pageId": "app_vudu", "key": VK_VUDU, "type": "native"},
    {"name": "youtube", "pageId": "app_youtube", "key": VK_YOUTUBE, "type": "native"},
    {"name": "wuaki", "pageId": "app_tv_store", "key": VK_WUAKI, "type": "native"},
    {"name": "tv_store", "pageId": "app_tv_store", "type": "native"},
    {"name": "hi_browser", "pageId": "app_hi_browser", "type": "native"}
];
var MT5655 = false;
var appPageOrigin = null;
var settingInited = false;
var m_retailmodeTimer = null;
var RETAILMODE_FLAG_FILE = "retailmode";
var m_LiveTvIsOn = false;
var hisenseUIConfig = null;
var defCityList = {};
var hisenseUITZSeconds = 8 * 3600;
var hisenseUITimeFormat = 0;
var hisenseUIDSTSeconds = 0;
var hotelVolume = {
    maxVolume: 100,
    minVolume: 0,
    switch: 0
};
var suspendFlag = false;
var PVRFlag = true;
var MixBarserviceNo;
var waitSuspendPowerOn = false;
var usbNfyTimer = 0;
var AudioDevice = {
    CEC_CTRL: 0,
    EXIST: 0,
    ARC_STATE: 0
}
var MHLDevice = {
    AVAILABLE: 0
}
var IsExitSatePlayChnl = false; //从搜台卫星设置页面出来需要重新播台，否则由于锁频会出现无信号
var TeletextDevice = {
    status: 0
}
var factoryLoading = false;
var g_sysisdownloadingflag = false;
var dtvPaused = false;
var g_systemautosleepflag = 0;
var g_systemautosleepTimer = null;
var HTMLDIR = {
    LTR: "ltr",
    RTL: "rtl"
}
var launcherCreateState = 0;
var FREEVIEWTEST = true, ENABLE_FVP = true;
var isStartFromNetfliex, isWizardFlag, powerOffTipFlag = -1;
var powerOffTipTimer = 0, powerOffSourceTimer = 0;
var lastClosedPage = "";
var onTeletextStatusChaged = function (value) {
    TeletextDevice.status = value;
    DBG_ALWAYS("##########################onTeletextStatusChaged " + value);
    if (value == 2) {
        if (model.tvservice.getHbbTvKeySet() > 15) {
            pauseHBBTV();
            debugPrint("hbbtv app is runing, pause hbbtv and resume hbbtv")
            resumeHBBTV();
        }
        debugPrint("show the help info bar ");
        if (hiWebOsFrame.isCurrentModule("livetv") && livetvmain.getCurrentSourceInnerId() == SourceList.TV) {
            if (hiWebOsFrame.getCurrentPageId() != LiveTVModule.MAIN) {
                closeLiveTVModule(hiWebOsFrame.getCurrentPageId());
                openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0]);
            }
            livetvmain.showTeletextHelp();
        }
    }
    else if (value == 3) {
        livetvmain.hideTeletextHelp();
        if (hiWebOsFrame.getCurrentPageId() == LiveTVModule.MAIN) {
            openLiveTVModule([Msg.INFO, 0]);
        }
    }
    else if (value == 4) {
        livetvmain.hideTeletextHelp();
        if (hiWebOsFrame.isCurrentModule("livetv") && livetvmain.getCurrentSourceInnerId() == SourceList.TV) {
            debugPrint("show no teletext ");
            hiWebOsFrame.getCurrentPage().pause();
            hiWebOsFrame.lockAllKeys();
            $("#livetv_no_text_txt1").text(getCurrentContentLanguage("No Teletext"));
            $("#livetv_no_text_txt1").css("display", "block");
            setTimeout(function () {
                $("#livetv_no_text_txt1").css("display", "none");
                hiWebOsFrame.unLockAllKeys();
                hiWebOsFrame.getCurrentPage().resume();
                if (hiWebOsFrame.getCurrentPage().id == "livetv_main") {
                    livetvmain.onFocusLiveTVMain();
                }
            }, 2000);
        }
        else {
            DBG_INFO("do not show teletext. page[" + hiWebOsFrame.getCurrentPageId() + "]");
        }
    }
}
var onAutoSleepSwitchchanged = function (value) {
    DBG_INFO("onAutoSleepSwitchchanged" + value);
    if (hiWebOsFrame.getCurrentArea() == "EU") {

        if (value == 0) {
            g_systemautosleepflag =0;
            clearTimeout(g_systemautosleepTimer);
            g_systemautosleepTimer = null;
            debugPrint(" to clear the timer")
        }
        else if(g_systemautosleepflag!=value)
        {
            var sleepvalue=[0,3,4];
            var timer=4;
            if(value>0&&value<3)
            {
                timer = sleepvalue[value];
            }
            g_systemautosleepflag = value;
            debugPrint("sleepflag"+g_systemautosleepflag)
            clearTimeout(g_systemautosleepTimer);
            g_systemautosleepTimer=null;
            g_systemautosleepTimer=setTimeout(function(){onTvSwitchTriggerCauseChanged(-3)},timer*3600* 1000);
        }
        try
        {
            if (!!hiWebOsFrame.settingssysad) {
                if (value < 3)
                {
                    PageDataSettingSysAd.operateData.curautosleep =value;
                }
                hiWebOsFrame.settingssysad.rewriteDataOnly();
            }
        }
        catch (e)
        {debugE(e.message)}


    }

}

/******************************************************
 * platform为5657SA时调用非hotapp页面
 ******************************************************/
var currentPlatform_config = "", EPOSresolution = "", DeviceMsgSA = "",currOperaVersion = "",isDoTVScale=false;
var firstFocusId_config = "launcher_aah_content";
var jsPath_config = "../../launcher/js/launcherAllAppsWithHot.js";
var cssPath_config = "../../launcher/css/launcherAllAppsWithHot.css";
function initPlatformParam_config() {
    try {
        currentPlatform_config = tv ? model.system.getCurPlatform() : '5657_EU_MARKET';
        // DBG_ERROR("currentPlatform is " + currentPlatform_config);

        firstFocusId_config = currentPlatform_config == 'APP_5890_SA' ? "launcher_aaa_panel" : "launcher_aah_content";
        // DBG_ERROR("firstFocusId_config:" + firstFocusId_config);
        jsPath_config = currentPlatform_config == 'APP_5890_SA' ? "../../launcher/js/launcherAllApps.js" : "../../launcher/js/launcherAllAppsWithHot.js";
        // DBG_ERROR("jsPath_config:" + jsPath_config);
        cssPath_config = currentPlatform_config == 'APP_5890_SA' ? "../../launcher/css/launcherAllApps.css" : "../../launcher/css/launcherAllAppsWithHot.css";
        // DBG_ERROR("cssPath_config:" + cssPath_config);
        cssPath_config_Nav = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteNavPage.css" : "../../VIDAALiteLauncher/css/VIDAALiteNavPage.css";
        cssPath_config_App = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteApp.css" : "../../VIDAALiteLauncher/css/VIDAALiteApp.css";
        cssPath_config_App_2006 = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteApp_2006.css" : "../../VIDAALiteLauncher/css/VIDAALiteApp_2006.css";
        cssPath_config_Media = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteMedia.css" : "../../VIDAALiteLauncher/css/VIDAALiteMedia.css";
        cssPath_config_Recommend = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteRecommend.css" : "../../VIDAALiteLauncher/css/VIDAALiteRecommend.css";
        cssPath_config_RecommendEU = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteRecommendation_EU.css" : "../../VIDAALiteLauncher/css/VIDAALiteRecommendation_EU.css";
        cssPath_config_FreeView = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteFreeView.css" : "../../VIDAALiteLauncher/css/VIDAALiteFreeView.css";
        cssPath_config_Video = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteVideo.css" : "../../VIDAALiteLauncher/css/VIDAALiteVideo.css";
        cssPath_config_Input = currentPlatform_config == '5655_EU_MARKET' ? "../../VIDAALiteLauncher/css/5655EUcss/VIDAALiteTvInput.css" : "../../VIDAALiteLauncher/css/VIDAALiteTvInput.css";

        if(!!window.opera_omi){
            currOperaVersion = "opera4x";
        }
    }
    catch (ex) {
        DBG_ERROR("Get platform error! ex_message is " + ex.message);
    }
}

var hiWebOsFrame = null;

//调用SDK函数示例
//hiWebOsFrame.SDKFunction_test('调用SDK函数');

//用于记录Wuaki按键启动的全局变量
var needStartWuaki = false;
var isSystemInited = false;
$(document).ready(function () {

    initPlatformParam_config();
    //增加根据平台不同使用不同LOADING圈的机制
    if ('APP_5890_SA' == currentPlatform_config || "opera4x" == currOperaVersion) {
        $('#loadingImg').css("display", "none");
        $('#loadingDiv').css("display", "block");
    }
    else {
        $('#loadingImg').css("display", "block");
        $('#loadingDiv').css("display", "none");
    }
    try {
        hiWebOsFrame = new $.hiWebOs({
            icon: 'hiwebosIcon.png',
            startupScreen: 'hiwebos_Startup.png',
            is_create_memc_timer: false,
            languages: [],
            languagesAreas: {
                "common": ['eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'chi'],
                "SA": ['chi', 'eng', 'por', 'spa'],
                "NA": ['chi', 'eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'tur', 'ara', 'rus', 'vie', 'tha', 'bur', 'uzb', 'hin', 'ukr', 'mal', 'hbr', 'cze', 'slk', 'pol', 'hun', 'bul', 'per', 'ind'],
                "EU": ['chi', 'eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'tur', 'ara', 'rus', 'vie', 'tha', 'bur', 'uzb', 'hin', 'ukr', 'mal', 'hbr', 'cze', 'slk', 'pol', 'hun', 'bul', 'per', 'ind','hrv','srp','mac','alb','lav','est','lit',"gre"],
                "EM": ['chi', 'eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'tur', 'ara', 'rus', 'vie', 'tha', 'bur', 'uzb', 'hin', 'ukr', 'mal', 'hbr', 'cze', 'slk', 'pol', 'hun', 'bul', 'per', 'ind','zho'],
                "COL": ['chi', 'eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'tur', 'ara', 'rus', 'vie', 'tha', 'bur', 'uzb', 'hin', 'ukr', 'mal', 'hbr', 'cze', 'slk', 'pol', 'hun', 'bul', 'per', 'ind','hrv','srp','mac','alb','lav','est','lit']

            },//                                                                                  乌克兰 //希伯来           //印度尼西亚
            languagesFile: {
                "common": "lang/languages.js",
                "SA": "lang/languages_SA.js",
                "NA": "lang/languages.js",
                "EU": "lang/languages.js",
                "EM": "lang/languages.js",
                "COL": "lang/languages.js"
            },
            currentLanguage: 0,
            HTMLDirection: "ltr",
            RTLLanguages: ["ara", "hbr", "per"],
            noKeyReverseModules: ["accuweather", "allapps","iqqi"],
            noKeyReversePages: ["livetv_channel_list", "pvrOrtShiftDialogPage_id",
                "pvrtshift_pvr_page", "setting_sys_pvr_page", "livetv_search_dialog","OEMLauncherAppDeleteDialog","tshiftProgressPage_id"],
            noKeyReverseCaETypes: ["Slider", "ProgressBar"],
            noKeyReverseId: ["book_edit_time_inputs_box"],
            currentIQQIRtl:false,
            "AutoCloseTimeLength": 1000,
            //isMuteBeforeWizard: 0,
            //isStartWizardFromboot: 0,
//    protectAutoClosePages: ['setting_update_progressing_page', "setting_autoupdate_page", "setting_forceupdate_page"],//保护不被关闭的页面

            protectPages: ['setting_update_progressing_page', "setting_autoupdate_page", "setting_forceupdate_page",

			"settingChSetAutoScanPageId","settingChSetEUAutoScanPageId","settingChSetDVBTUKAreaListDialogId", "settingChSetDVBTLCNListDialogId","settingChSetFransatOpListDialogId","beginRecordDialog", "pvrRecordTip", "setting_update_spacecheck_page", "livetv_operate_tip",
            "pvrHDList", "pvrHardDiskCheck","pvrHDSpeedCheckResult"],//保护不被关闭的页面


		noRepeatKeys: [VK_MENU, VK_HOME, VK_ENTER,VK_BACK, VK_EPG, VK_INFO, VK_RED, VK_GREEN, VK_YELLOW, VK_BLUE,
			VK_PIP, VK_PVR, VK_STOP, VK_FAC_M, VK_AMAZON, VK_VUDU, VK_ALLAPP, VK_YOUTUBE, VK_NETFLIX,VK_POWER_KEY_PAD,VK_AUDIOONLY],
		systemKeys: [VK_HOME, VK_EXIT, VK_MEDIA, VK_LIVETV, VK_MENU, VK_FAC_M, VK_AMAZON, VK_VUDU, VK_ALLAPP, VK_YOUTUBE, VK_NETFLIX, VK_SLEEP, VK_SOURCE, VK_KEYPAD_INPUT, VK_F1, VK_KEYPAD_MENU,VK_KEYPAD_MENU7, VK_BT_CONNECT, VK_EPG,VK_KPAD, VK_STICKER,VK_VOICE, VK_AUDIO_DESCRIPTION, VK_WUAKI,VK_AUDIOONLY,
            VK_AV1,VK_AV3,VK_COMPONENT1,VK_HDMI1,VK_HDMI2,VK_HDMI3,VK_HDMI4,VK_HDMI5,VK_VGA,VK_PICTURE,VK_S_MODE,VK_PICMODE_WIDE,VK_PICMODE_NORMAL,VK_PICMODE_CINEMA,
            VK_PICMODE_PANORAMA,VK_PICMODE_ZOOM,VK_PIC_CINEMA_NIGHT,VK_PIC_CINEMA_DAY,VK_ASPECT_AUTO,VK_ASPECT_DIRECT,VK_SND_MOVIE,VK_FREEZE],
		keySwitch: true,
		KeyStackLimit: 5,
		directoryOn: true,//是否启用目录控制
		keyboard: {
			"common": "keyboard/keyboard.js",
			"SA": "keyboard/keyboard_SA.js",
			"NA": "keyboard/keyboard_NA.js",
			"EU": "keyboard/keyboard_EU.js",
			"EM": "keyboard/keyboard_EM.js",
                        "COL": "keyboard/keyboard_EM.js"
		},
		models: {
                "common": [],
                "SA": [],
                "NA": [],
                "EU": [],
                "EM": []
            },
            "areas": [//区域划分定义
                {
                    "SA": [
                        {
						"SA": ["Brazil", "Argentina", "Philippines", "Uruguay", "Peru", "Ecuador", "Chile", "Costa Rica","Bolivia","Paraguay"]
                        }
                    ]
                },
                {
                    "COL": [
                        {
                            "COL": ["Colombia"]
                        }
                    ]
                },
                {
                    "NA": [
                        {
                            "NA": ["USA", "Canada", "Mexico"]
                        }
                    ]
                },
                {
                    "EU": [
                        {//"德国", "奥地利", "意大利", "英国", "西班牙", "法国", "瑞士", "葡萄牙", "瑞典", "丹麦", "芬兰", "挪威", "土耳其", "捷克", "斯洛伐克", "波兰", "匈牙利", "保加利亚"
                            "EU": ["Germany", "Austria", "Italy", "UK", "Spain", "France", "Switzerland", "Portugal",
                                "Sweden", "Denmark", "Finland", "Norway", "Turkey", "Czech Republic", "Slovakia", "Slovenia","Poland", "Hungary", "Bulgaria","Russia_EU","Uzbekistan_EU", "Kirghizstan_EU","Tajikistan_EU","Croatia","Kazakhstan_EU","Latvia","Estonia","Lithuanija","Greece"]
                        },
                        {
                            "EU2": ["Algeria_EU","Iraq_EU","Saudi Arabia_EU"
                            ]
                        }
                    ]
                },
                {//新兴市场
                    "EM": [
                        {
                            //["埃及", "阿尔及利亚", "伊朗", "伊拉克", "沙特", "阿联酋", "科威特", "也门", "阿曼", "卡塔尔", "约旦", "迪拜" ,巴勒斯坦 巴林 黎巴嫩 叙利亚]
                            "MiddleEast": ["Egypt", "Algeria", "Iran", "Iraq", "Saudi Arabia",
                                "UAE", "Kuwait", "Yemen", "Oman", "Qatar", "Jordan", "Dubai", "Palestine", "Bahrain", "Lebanon", "Syria"]
                        },
                        {// ["俄罗斯", "乌兹别克斯坦", "吉尔吉斯斯坦", "土库曼斯坦", "乌克兰", "阿塞拜疆", "格鲁吉亚", "亚美尼亚", "以色列" 塞尔维亚  塔吉克斯坦  白俄罗斯 摩尔多瓦]
                            "CIS": ["Israel", "Russia", "Uzbekistan", "Kirghizstan", "Turkmenistan", "Kazakhstan", "Ukraine", "Azerbaijan", "Georgia", "Armenia", "Serbia", "Tajikistan", "Belarus", "Moldova"]
                        },

                        {//["印度", "印尼", "泰国", "越南", "缅甸", "马来西亚", "澳大利亚", "台湾", "斯里兰卡" 马尔代夫 斐济  孟加拉 巴基斯坦 尼泊尔 柬埔寨 蒙古 ]
                            "Asian": ["India", "Indonesia", "Thailand", "Vietnam", "Myanmar", "Malaysia", "Australia", "Taiwan", "Sri Lanka", "Maldives", "Fiji", "Bengal", "Pakistan", "Nepal", "Cambodia", "Mongolia", "Others"]

                        },
                        {
                            // ["南非", "摩洛哥", "尼日利亚", "利比亚", "加纳", "塞拉利昂", "科特迪瓦", "安哥拉", "贝宁", "利比里亚", "刚果（金）", "喀麦隆", "津巴布韦", "刚果布", "乌干达", "坦桑尼亚", "毛里求斯", "苏丹", "吉布提", "埃塞俄比亚", "肯尼亚", "莫桑比克", "马达加斯加"]
                            "Africa": ["South Africa", "Morocco", "Nigeria", "Libya", "Ghana", "Sierra Leone", "Cote d'Ivoire", "Angola", "Benin", "Liberia", "Congo (DRC)", "Cameroon", "Zimbabwe", "Congo-Brazzaville", "Uganda", "Tanzania", "Mauritius", "Sudan", "Djibouti", "Ethiopia",
                                "Kenya", "Mozambique", "Madagascar", "Tunisia", "Guinea", "Senegal", "Burundi", "Somalia"]
                            // 突尼斯  几内亚     塞内加尔         布隆迪         索马里
                        }
                    ]
                }
            ],
            "brands": sysBrandlist,//品牌集合定义
            //verArea运行时
            //verSubArea运行时
            //verAreaIndex运行时
            //verSubAreaIndex运行时
            verCountry: initCountry,//发行当前版本指定的国家
            //verCountryIndex运行时
            verBrand: initBrand,//发行当前版本指定的品牌
            otherConfig: {
                isLiveTVShowing: 0
            },
            SDKIntervalFunList: {//SDK主时钟函数
//        "a": function () {
//            alert(99)
//        },
//        "b": function () {
//            alert(88)
//        }
            },
            kPad: {
                display: false,
                keys: [VK_LEFT, VK_RIGHT, VK_DOWN, VK_UP, VK_ENTER, VK_BACK],
                kPadFunDown: kPadKeyDownFunction,
                kPadFunUp: kPadKeyUpFunction
            },
            "winOpenFun": function (pageId) {
                //debugPrint("[xuehongfeng] is winOpenFun",DebugLevel.ALWAYS);
//        if (hiWebOsFrame.getCurrentPageId() != "chl_blankPage") {
//            debugPrint("[xuehongfeng] is winOpenFunblank",DebugLevel.ALWAYS);

                if(LiveTVModule.MAIN == pageId || LiveTVModule.VOLUME == pageId) return;

                ctlr_memc_for_osd(0);
                var fullScreenPageIds = ["myLauncher", "launcher_allapps", "setting_fircls_page", "epg", "VIDAALiteNavPage"];
                if (fullScreenPageIds.indexOf(pageId) > -1) {
                    ctlr_memc_for_osd(2);
                }
                // }

            },
            "winCloseFun": function (pageId) {
                //debugPrint("[xuehongfeng] is winCloseFun",DebugLevel.ALWAYS);
//        if (hiWebOsFrame.getCurrentPageId() != "chl_blankPage") {
//            debugPrint("[xuehongfeng] is not ch1_blankpage",DebugLevel.ALWAYS);
                //debugPrint("[xuehongfeng] is close page",DebugLevel.ALWAYS);
                ctlr_memc_for_osd(1);
                var fullScreenPageIds = ["myLauncher", "launcher_allapps", "setting_fircls_page", "epg", "VIDAALiteNavPage"];
                if (fullScreenPageIds.indexOf(pageId) > -1) {
                    if (!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible
                        || !!hiWebOsFrame.launcher_allapps && hiWebOsFrame.launcher_allapps.visible
                        || !!hiWebOsFrame.settingsFirst && hiWebOsFrame.settingsFirst.visible) {
                        DBG_INFO("full screen ui has been opened");
                    }
                    else {
                        ctlr_memc_for_osd(3);
                    }
                }
                lastClosedPage = pageId;
                //}
            },
            //长按键后松开触发事件
            "repeatKeyUpFun": function (keycode) {
                //console.log("keycode:"+keycode);
                try {
                    if (keycode == VK_VOLUME_DOWN || keycode == VK_VOLUME_UP
                        || keycode == VK_KEYPAD_VOLUME_DOWN || keycode == VK_KEYPAD_VOLUME_UP) {
                        vol.stopRepeatSetVolume(keycode);
                    }

                    if (typeof (livetvchlist) != "undefined") {
                        livetvchlist.stopRepeat(keycode);
                    }
                    //if (keycode == VK_ENTER) {
                    //    if (typeof (channelmanagerfav) != "undefined") {
                    //        channelmanagerfav.stopRepeatFavSetSelected();
                    //    }
                    //    if (typeof (channelmanagerbg) != "undefined") {
                    //        channelmanagerbg.stopRepeatBgSetSelected();
                    //    }
                    //}
                }
                catch (ex) {
                    DBG_ERROR(ex.message);
                }
            },

            "defaultClosePageCallback": function (currentModule, beCloseOrigin) {
                debugPrint("currentModule" + currentModule);
                if (!!beCloseOrigin && (!!beCloseOrigin.module))//判断防止 beCloseOrigin 为空的时候打印出错。
                {
                    debugPrint("beCloseOrigin.module" + beCloseOrigin.module);
                }
                if (currentModule == "setting") {
                    try {
                        debugPrint("setting auto close callback!!!!!!!!!!");
                        if (!!hiWebOsFrame.settingsFirst)
                            hiWebOsFrame.settingsFirst.close();
                        var origin = hiWebOsFrame.settingsFirst.origin;
                        debugPrint("origin.module" + origin.module)
                        if (!!origin && origin.module == "app") {
                            settingOnDestroyCallback(origin);
                        }
                        else if (!!origin && origin.module == "launcher") {
                            hiWebOsFrame.myLauncher.hiFocus();
                        }
                        else if (!!origin && origin.module == "allapps") {
                            hiWebOsFrame["launcher_allapps"].open();
                            launcherAApps.focusAllApp();
                        }
                        else {
                            hiWebOsFrame.blankPage.open();
                            hiWebOsFrame.blankPage.hiFocus();
                        }
                        return;
                    }
                    catch (e) {
                        DBG_ERROR(e.message)
                    }
                }
                else if (currentModule == "settingfirst") {
                    try {
                        debugPrint("settingfirst auto close callback!!!!!!!!!!");
                        if (!!beCloseOrigin && beCloseOrigin.module == "app") {
                            settingOnDestroyCallback(beCloseOrigin);
                        }
                        else if (!!beCloseOrigin && beCloseOrigin.module == "launcher") {
                            hiWebOsFrame.myLauncher.hiFocus();
                        }
                        else if (!!beCloseOrigin && beCloseOrigin.module == "allapps") {
                            hiWebOsFrame["launcher_allapps"].open();
                            launcherAApps.focusAllApp();
                        }
                        else {
                            hiWebOsFrame.blankPage.open();
                            hiWebOsFrame.blankPage.hiFocus();
                        }
                        hiWebOsFrame.destroyModule("setting", null);
                        return;
                    }
                    catch (e) {
                        DBG_ERROR(e.message)
                    }
                }
                else if (currentModule == "sleep") {
                    if (!!beCloseOrigin && beCloseOrigin.module == "app") {
                        SleepOnDestroyCallback(beCloseOrigin);
                    }
                    else if (!!beCloseOrigin && beCloseOrigin.module == "launcher") {
                        hiWebOsFrame.myLauncher.hiFocus();
                    }
                    else if (!!beCloseOrigin && beCloseOrigin.module == "allapps") {
                        hiWebOsFrame["launcher_allapps"].open();
                        launcherAApps.focusAllApp();
                    }
                    else {
                        hiWebOsFrame.blankPage.open();
                        hiWebOsFrame.blankPage.hiFocus();
                    }
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
                try {
                    var keyboard = sevenKeyboard();
                    if (keyboard) {
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyPadInput) {
                            if (!HOTElKEYBboardLock) {
                                if ((hiWebOsFrame.getCurrentPage().module == "setting" || hiWebOsFrame.getCurrentPage().module == "settingfirst")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyEnter;
                                }
                                else if(hiWebOsFrame.getCurrentPageId() == "VIDAALiteTvInput"){
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyPadInput;
                                }
                                else {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keySource;
                                }
                            }
                            else {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyPadMenu) {

                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyEnter;
                                }else{
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyMenu;
                                }
                            } else {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyPadMenu7) {

                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyEnter;
                                }else{
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyPadMenu7;
                                }
                            } else {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVChDown) {
                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("setting") || hiWebOsFrame.isCurrentModule("settingfirst") || hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyDown;
                                }
                            } else {
                                event.keyCode = 0;
                            }

                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVChUp) {
                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("setting") || hiWebOsFrame.isCurrentModule("settingfirst") || hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyUp;
                                }
                            } else {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVVoUp) {
                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("setting") || hiWebOsFrame.isCurrentModule("settingfirst")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyRight;
                                }
                            } else {
                                event.keyCode = 0;
                            }

                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVVoDown) {
                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("setting") || hiWebOsFrame.isCurrentModule("settingfirst")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyLeft;
                                }
                            }
                            else {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keySource && hiWebOsFrame.getCurrentPageId() == "setting_pic_Source_page") {

                            event.keyCode = hiWebOsFrame.getKeyValues().keyRight;
                        }
                    }
                    else {
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyPadInput) {

                            if (!HOTElKEYBboardLock) {
                                //-----按照产品经理要求去掉在setting上的映射，20150313 sll
                                if(hiWebOsFrame.getCurrentPageId() == "VIDAALiteTvInput"){
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyPadInput;
                                }else{
                                    event.keyCode = hiWebOsFrame.getKeyValues().keySource;
                                }
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVChDown) {

                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyDown;
                                }
                            } else {
                                event.keyCode = 0;
                            }

                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVChUp) {

                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyUp;
                                }
                            } else {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVVoUp) {

                            if (!!HOTElKEYBboardLock) {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyTVVoDown) {

                            if (!!HOTElKEYBboardLock) {
                                event.keyCode = 0;
                            }
                        }

                        if (event.keyCode == hiWebOsFrame.getKeyValues().keySource) {
                            if (hiWebOsFrame.getCurrentPageId() == "setting_pic_Source_page") {
                                event.keyCode = hiWebOsFrame.getKeyValues().keyRight;
                            }

                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyPadMenu) {

                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyEnter;
                                }

                            } else {
                                event.keyCode = 0;
                            }
                        }
                        if (event.keyCode == hiWebOsFrame.getKeyValues().keyPadMenu7) {

                            if (!HOTElKEYBboardLock) {
                                if (hiWebOsFrame.isCurrentModule("mixBar")) {
                                    event.keyCode = hiWebOsFrame.getKeyValues().keyEnter;
                                }

                            } else {
                                event.keyCode = 0;
                            }
                        }
                    }
                }
                catch (ex) {
                    DBG_ERROR(ex);
                }


                //此处加入物理键盘映射相关处理

                if (parseInt(event.keyCode) >= VK_KB_SQM && event.keyCode <= VK_KB_RIGHTDASH) {
                    var KEYBOARD_KEYCODE_MAP = [];
                    KEYBOARD_KEYCODE_MAP[VK_KB_COMMA] = 44;
                    KEYBOARD_KEYCODE_MAP[VK_KB_DOT] = 46;
                    KEYBOARD_KEYCODE_MAP[VK_KB_SLASH] = 47;
                    KEYBOARD_KEYCODE_MAP[VK_KB_LT] = 60;
                    KEYBOARD_KEYCODE_MAP[VK_KB_GT] = 62;
                    KEYBOARD_KEYCODE_MAP[VK_KB_SEMICOLON] = 59;
                    KEYBOARD_KEYCODE_MAP[VK_KB_COLON] = 58;
                    KEYBOARD_KEYCODE_MAP[VK_KB_QUESTION] = 63;
                    KEYBOARD_KEYCODE_MAP[VK_KB_SQM] = 39;
                    KEYBOARD_KEYCODE_MAP[VK_KB_DQM] = 34;

                    KEYBOARD_KEYCODE_MAP[VK_KB_EM] = 33;
                    KEYBOARD_KEYCODE_MAP[VK_KB_AT] = 64;
                    KEYBOARD_KEYCODE_MAP[VK_KB_WELL] = 35;
                    KEYBOARD_KEYCODE_MAP[VK_KB_DOLLOR] = 36;
                    KEYBOARD_KEYCODE_MAP[VK_KB_PERSENT] = 37;
                    KEYBOARD_KEYCODE_MAP[VK_KB_JIAN] = 94;
                    KEYBOARD_KEYCODE_MAP[VK_KB_AND] = 38;
                    KEYBOARD_KEYCODE_MAP[VK_KB_STAR] = 42;
                    KEYBOARD_KEYCODE_MAP[VK_KB_LEFTBR] = 40;
                    KEYBOARD_KEYCODE_MAP[VK_KB_RIGHTBR] = 41;
                    KEYBOARD_KEYCODE_MAP[VK_KB_BIGLEFTBR] = 123;
                    KEYBOARD_KEYCODE_MAP[VK_KB_BIGRIGHTBR] = 125;
                    KEYBOARD_KEYCODE_MAP[VK_KB_LEFTBRACKET] = 91;
                    KEYBOARD_KEYCODE_MAP[VK_KB_RIGHTBRACKET] = 93;
                    KEYBOARD_KEYCODE_MAP[VK_KB_HOR] = 124;
                    KEYBOARD_KEYCODE_MAP[VK_KB_DASH] = 95;
                    KEYBOARD_KEYCODE_MAP[VK_KB_DUN] = 96;
                    KEYBOARD_KEYCODE_MAP[VK_KB_SUB] = 45;
                    KEYBOARD_KEYCODE_MAP[VK_KB_EQEAL] = 61;
                    KEYBOARD_KEYCODE_MAP[VK_KB_ADD] = 43;
                    KEYBOARD_KEYCODE_MAP[VK_KB_WAVE] = 126;
                    KEYBOARD_KEYCODE_MAP[VK_KB_RIGHTDASH] = 92;

                    event.alphakey = KEYBOARD_KEYCODE_MAP[event.keyCode];
                }
                keyPowerPadMap(event);
            },
            winKeyDownHandler: function (event) {
                if (!!hiWebOsFrame.getCurrentPage()) {
                    //debugPrint('SDK print--currentPages(before winKeyDownHandler):' + hiWebOsFrame.getCurrentPage().id, DebugLevel.ALWAYS);
                }
                if (TeletextDevice.status == 2) {
                    debugPrint(" the teletext is active")
                    if (event.keyCode == hiWebOsFrame.getKeyValues().keyExit) {
                        // to setnf the key to the teletext
                        keyboard.SendKeyResult(false);
                        DBG_ALWAYS(" SEND THE KEY EXIT");
                        return;
                    }
                    else if (event.keyCode == hiWebOsFrame.getKeyValues().keyHome
                        || event.keyCode == hiWebOsFrame.getKeyValues().keyYoutube
                        || event.keyCode == hiWebOsFrame.getKeyValues().keyVudu
                        || event.keyCode == hiWebOsFrame.getKeyValues().keyNetflix
                        || event.keyCode == hiWebOsFrame.getKeyValues().keyAmazon
                        || event.keyCode == hiWebOsFrame.getKeyValues().keyWuaki
                        || event.keyCode == hiWebOsFrame.getKeyValues().keyAllApp
                        || event.keyCode == hiWebOsFrame.getKeyValues().keySource)
                    {
                        DBG_ALWAYS(" close the teletext and process the system key")
                        model.system.setCurChannelTeletextSelect(0)

                    }
                    else if (event.keyCode != hiWebOsFrame.getKeyValues().keyMute
                        && event.keyCode != hiWebOsFrame.getKeyValues().keyVolumeDown
                        && event.keyCode != hiWebOsFrame.getKeyValues().keyVolumeUp
                        && event.keyCode != hiWebOsFrame.getKeyValues().keyTVVoDown
                        && event.keyCode != hiWebOsFrame.getKeyValues().keyTVVoUp) {
                        return;
                    }


                }
                var picAspectRatioVec = ["Automatic", "16:9", "4:3", "Panoramic", "Movie Zoom", "Direct"];
                switch (event.keyCode) {
                    case hiWebOsFrame.getKeyValues().keyF1:
                        //debugPrint("[xuehongfeng]F1keydonw",DebugLevel.ALWAYS);
                        var crntPage = hiWebOsFrame.getCurrentPage();
                        //if (1 == model.hisfactory.getTofactoryOpition()) {
                        //debugPrint("[xuehongfeng]module",DebugLevel.ALWAYS);
                        if (crntPage.module == "wizard") {
                            //debugPrint("[xuehongfeng]module",DebugLevel.ALWAYS);
                            model.mpctrl.StopMpctrl(null);
                            setTimeout(function () {
                                resumeDTV();
                            }, 500);
                            model.cec.setIsMiracastExist(0);    //打开cec消息接收开关
                            if(getCurrVeraForWizard()=='EU')
                            {
                                var countrycode = readFileFromNative("hisenseUI/currentcty.txt", 1);
                                model.basicSetting.setTvsetLocation(countrycode);
                                var countryname = getCountryNamebyCode(countrycode);
                                hiWebOsFrame.setCurrentCountry(countryname);

                                var curzonecodeJson = readFileFromNative("hisenseUI/currentzone.json", 1);
                                var curzonecode = curzonecodeJson.timezonecode;
                                model.timerfunc.setNewTimeZone(curzonecode);

                            }
                            closePagesOrModuleByPage(crntPage);
                            testRemoveSDKIntervalFun();
                            startLiveTv();
                            //var wizardflag = model.system.getFirstInstallation();
                            //if (wizardflag == 3) {
                            //    if (is_mute_before_enter_wizard()) {
                            //        debugPrint("set mute true", DebugLevel.ALWAYS);
                            //        model.sound.setMainMute(1);
                            //    }
                            //    else {
                            //        debugPrint("set mute false", DebugLevel.ALWAYS);
                            //        model.sound.setMainMute(0);
                            //    }
                            //}
                            //else {
                            //    model.sound.setMainMute(0);
                            //}
                            //if (getCurrVeraForWizard() == "EU" || getCurrVeraForWizard() == "EM") {
                            //    var disclaimerFlag = model.basicSetting.getDisclaimer();
                            //    if (disclaimerFlag == 0) {
                            //        model.network.setEnumNetworkConfig(0);
                            //    }
                            //    else {
                            //        model.network.setEnumNetworkConfig(1);
                            //    }
                            //}
                            model.system.setFirstInstallation(3);
                            //var currUsemodeIdx = model.system.getUserMode();
                            //debugPrint("[xuehongfeng]" + currUsemodeIdx, DebugLevel.ALWAYS);
                            //if (currUsemodeIdx == 1)//shop mode下打开epos贴
                            //{
                            //    startRetailmodeTimer(true);
                            //    startePos(true);
                            //}
                            //else {
                            //    startRetailmodeTimer(false);
                            //}
                        }
                        //}
                        break;
                    case hiWebOsFrame.getKeyValues().keyInfo:
                        if("epg" == hiWebOsFrame.getCurrentPageId()){
                            epg.keyInfoHandler();
                        }
                        else if("epg_fvp_detail_page" == hiWebOsFrame.getCurrentPageId()){
                            epgBackToOri(null, null, hiWebOsFrame.getCurrentPage());
                        }
                        else{
                            liveTVHandlerProcess(VK_INFO);
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keyNetflix:
                    case hiWebOsFrame.getKeyValues().keyAmazon:
                    case hiWebOsFrame.getKeyValues().keyVudu:
                    case hiWebOsFrame.getKeyValues().keyYoutube:
                    case hiWebOsFrame.getKeyValues().keyWuaki:

                        //暂时放开Netflix按键
//                var countrycode = model.basicSetting.getTvsetLocation();
//                var currentArea = hiWebOsFrame.getCurrentArea();
//                if ((currentArea == "EM") && (event.keyCode == VK_NETFLIX) && (countrycode != "AUS")) {
//                    debugRM("country[" + countrycode + "] can not response remote key");
//                    return;
//                }

                        if (event.keyCode == VK_NETFLIX) {
                            var curAllAppData = SettingGetApplist();
                            var countrycode = model.basicSetting.getTvsetLocation();
                            var currentArea = hiWebOsFrame.getCurrentArea();
                            DBG_INFO("curAllAppData:" + JSON.stringify(curAllAppData) + ",curArea:" + currentArea + ",curCountry:" + countrycode);
                            if ((currentArea == 'SA') && (curAllAppData.length == 0) && (countrycode == 'PHL')) {
                                showMsg("", "The Netflix service is not available currently in this country.");
                                try {
                                    debugPrint("logReport__________begin", DebugLevel.WARNING);
                                    logReport('GTRemoteControlNetFlix', 'Netflix');
                                    debugPrint("logReport__________end", DebugLevel.WARNING);
                                }
                                catch (ex) {
                                    DBG_ERROR(ex.message);
                                }
                                return false;
                            }
                        }
                        //对于快捷键打开第三方应用时，当前页面为DLNA推送页面时，需要做特殊处理。
                        if (hiWebOsFrame.getCurrentPageId() == "dlna_picPlayer" ||
                            hiWebOsFrame.getCurrentPageId() == "dlna_videoPlayer" ||
                            hiWebOsFrame.getCurrentPageId() == "dlna_musicPlayer") {
                            DBG_INFO("now page is " + hiWebOsFrame.getCurrentPageId() + "  need change dlnaClosedByAppHotkey!!");
                            dlnaClosedByAppHotkey = true;

                        }
                        //进第三方应用，若当前有录制时，UI提示
                        if (isMainArchiveRecording() || isTimeShiftStatus()) {
                            debugPrint("keyNetflix/keyAmazon/keyVudu/keyYoutube/keyWuaki is pressed!");
                            PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                "Sure to exit from PVR or T.Shift?", okCommandApp.bind(this, event.keyCode), pvrTshiftCancelCommand);
                            return;
                        }
                        if (!canCurrentPageProcEvent())return false;

                        var app_c = getAppByKey(event.keyCode);
                        if (hiWebOsFrame.getCurrentPageId() == app_c.pageId) {

                            DBG_INFO("do not process himself: " + app_c.name);

                        }
                        else {
                            var crntPage = hiWebOsFrame.getCurrentPage();
                            if ("setting" == crntPage.module || "settingfirst" == crntPage.module) {
                                var settingorigin = hiWebOsFrame.settingsFirst.origin;
                                if (!!settingorigin && settingorigin.visible) {
                                    if (settingorigin.module == "launcher") {
                                        closePagesOrModuleByPage(crntPage);
                                        hiWebOsFrame.myLauncher.hiFocus();
                                    }
                                    else if (settingorigin.module == "allapps") {
                                        closePagesOrModuleByPage(crntPage);
                                        hiWebOsFrame["launcher_allapps"].open();
                                        launcherAApps.focusAllApp();
                                    }
                                    else if(settingorigin.id == app_c.pageId){
                                        DBG_INFO("do not process himself: " + app_c.name);
                                        return;
                                    }
                                }

                            }

                            if (event.keyCode == VK_WUAKI){
                                needStartWuaki = false;
                                if(deviceKeySet.HBBTVKEYSET!=0){
                                    pauseHBBTV();
                                    needStartWuaki = true;
                                    DBG_ALWAYS("needStartWuaki later");
                                }else if(checkIsAppOn()){
                                    hiWebOsFrame[LiveTVModule.MAIN].operateData.callBackFunc = function(){
                                        hiWebOsFrame[LiveTVModule.MAIN].operateData.callBackFunc = null;
                                        sendCommndToTV(CmdURLType.START_HBBTV_APP, HSAPPURL.WUAKI, true);
                                    };
                                    checkAndCloseIfAppOn(hiWebOsFrame[LiveTVModule.MAIN]);

                                }else{
                                    sendCommndToTV(CmdURLType.START_HBBTV_APP, HSAPPURL.WUAKI, true);
                                }
                            }
                            else{
                                asyncStartApp(app_c.pageId, app_c.name, true, false, false, true);
                            }

                            if (event.keyCode == VK_NETFLIX) {
                                try {
                                    debugPrint("logReport__________begin", DebugLevel.WARNING);
                                    logReport('GTRemoteControlNetFlix', 'Netflix');
                                    debugPrint("logReport__________end", DebugLevel.WARNING);
                                    if (g_launcherBrand == "SA_OEM") {
                                        setAppInfoForSettingRecentUse('netflix',0);
                                    }
                                }
                                catch (ex) {
                                    DBG_ERROR(ex.message);
                                }
                            }
                            else if (event.keyCode == VK_YOUTUBE) {
                                try {
                                    debugPrint("logReport__________begin", DebugLevel.WARNING);
                                    logReport('GTRemoteControl', 'YouTube');
                                    debugPrint("logReport__________end", DebugLevel.WARNING);
                                    if (g_launcherBrand == "SA_OEM") {
                                        setAppInfoForSettingRecentUse('youtube',0);
                                    }
                                }
                                catch (ex) {
                                    DBG_ERROR(ex.message);
                                }
                            }
                            else if (event.keyCode == VK_WUAKI) {
                                try {
                                    debugPrint("logReport__________begin", DebugLevel.WARNING);
                                    logReport('GTRemoteControl', 'Wuaki TV');
                                    debugPrint("logReport__________end", DebugLevel.WARNING);
                                }
                                catch (ex) {
                                    DBG_ERROR(ex.message);
                                }
                            }

                            return false;
                        }

                        break;

                    case hiWebOsFrame.getKeyValues().keyFacM:
                        if (!canCurrentPageProcEvent())return false;

                        if (factoryLoading) {
                            DBG_INFO("factory is starting or stopping.");
                            return false;
                        }

                        DBG_INFO('factory mode = ' + factoryMode);
                        if (factoryMode == FACTORY_MODE_ENUM.MODE_NORMAL) {
                            if (1 == model.hisfactory.getTofactoryOpition()) {
                                DBG_INFO("factory in mode U");
                                return;
                            }
                            //model.hisfactory.setStateOpen(1);
                            factoryLoading = true;
                            startFactory();
                        }
                        else {
                            if (1 == model.hisfactory.getFactoryAging()) {
                                DBG_INFO("factory aging.");
                                return;
                            }
                            else if (8 == model.hisfactory.getFactoryCurrentSource()) {
                                DBG_INFO("current source is dmp");
                                return;
                            }
                            else if(isFileExist("his_factory_do_ok_over", 0)){
                                DBG_INFO("factory OK");
                                return;
                            }
                            needReumeLiveTVFromFac = true;//!facOnApp;
                            factoryLoading = true;
                            hiWebOsFrame.lockAllKeys("stopFac");
                            try {
                                hiWebOsFrame["app_factory"].close();
                            }
                            catch (ex) {
                                factoryLoading = false;
                                hiWebOsFrame.unLockAllKeys("stopFac");
                                DBG_ERROR(ex.message);
                            }
                            //model.hisfactory.setStateOpen(0);
                        }

                        break;

                    case hiWebOsFrame.getKeyValues().keySource:
                        if (!canCurrentPageProcEvent() || isCurrentAppHimedia())return false;
                        if(g_launcherBrand!="VIDAALite"){
                            if (hiWebOsFrame.getCurrentPageId() != "setting_pic_Source_page") {
                                hiWebOsFrame.startLoading(8, "input");
                                hiWebOsFrame.createPage('setting_pic_Source_page', null, null, null, function (setting_source_page) {
                                    hiWebOsFrame.setting_source_page = setting_source_page;
                                    if (!checkAndCloseIfAppOn(setting_source_page)) {

                                        if (hiWebOsFrame.getCurrentPageId() == "setting_pic_SourceLock_page") {
                                            hiWebOsFrame.setting_sourceLock_page.close();
                                            hiWebOsFrame.setting_sourceLock_page.destroy();
                                            clearInterval(inputInterval);
                                        }
                                        setting_source_page.open();
                                        closeDOthersModule("input");
                                        setting_source_page.hiFocus();
                                        hiWebOsFrame.endLoading("input");
                                    }
                                    else {
                                        setting_source_page.origin = hiWebOsFrame.blankPage;
                                    }
                                });
                            }
                        }else{
                            if (CREATE_STATE.CREATING == launcherCreateState) return;

                            //进home，若当前有录制时，UI提示
                            if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
                                debugPrint("keyHome is pressed!");
                                PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                    "Sure to exit from PVR or T.Shift?", okCommandKeyHomeSource, pvrTshiftCancelCommand);
                                return;
                            }
                            //tempDebug = false;//正式去掉
                            if (!canCurrentPageProcEvent())return false;
                            if (hiWebOsFrame.isCurrentModule("launcher") && hiWebOsFrame.getCurrentPageId() == "VIDAALiteTvInput") {
                                VIDAALiteLauncherIfPositionResetFirst = true;
                                hiWebOsFrame.myLauncher.close();
                                hiWebOsFrame.blankPage.open();
                                hiWebOsFrame.blankPage.hiFocus();
                            }else{
                                oneKeyOpenVIDAALauncherInput();
                            }

                        }
                        try {
                            var tmp = hiWebOsFrame.getCurrentArea() == 'SA' ? 'SOURCE' : 'INPUT';
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', tmp);
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    case hiWebOsFrame.getKeyValues().keyPadMenu://add for mixbar 0227

                        if (!canCurrentPageProcEvent())return false;

                        if (hiWebOsFrame.getCurrentPageId() != "mixBar_page") {

                            hiWebOsFrame.createPage('mixBar_page', null, null, null, function (MixBar_page) {
                                hiWebOsFrame.MixBar_page = MixBar_page;
                                if (!checkAndCloseIfAppOn(MixBar_page)) {
                                    closeDOthersModule("mixBar");
                                    MixBar_page.open();
                                    MixBar_page.hiFocus();
                                }
                                else {
                                    MixBar_page.origin = hiWebOsFrame.blankPage;
                                }
                            });
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keyPadMenu7://add for mixbar 0227

                        if (!canCurrentPageProcEvent())return false;

                        if (hiWebOsFrame.getCurrentPageId() != "mixBar_page") {

                            hiWebOsFrame.createPage('mixBar_page', null, null, null, function (MixBar_page) {
                                hiWebOsFrame.MixBar_page = MixBar_page;
                                if (!checkAndCloseIfAppOn(MixBar_page)) {
                                    closeDOthersModule("mixBar");
                                    MixBar_page.open();
                                    MixBar_page.hiFocus();
                                }
                                else {
                                    MixBar_page.origin = hiWebOsFrame.blankPage;
                                }
                            });
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keySpeech:
                        var country = hiWebOsFrame.getCurrentCountry().toLowerCase();
                        if (country == "australia") {
                            return false;
                        }
                        if (!canCurrentPageProcEvent())return false;
                        try {
                            model.bluetooth.setDevicesConnect(0);
                            //	StartBluetoothMatchControl();
                        }
                        catch (ex) {
                            DBG_ERROR(ex);
                        }

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'Speech');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;

                    case hiWebOsFrame.getKeyValues().keyKPad:
                        if (!!hiWebOsFrame.getKPadDisplay()) {
                            try {
                                //DBG_ALWAYS("NOW DISPLAY IS : " + hiWebOsFrame.icon);
                                closeKpad();
                            }
                            catch (ex) {
                                DBG_ERROR("error !!!" + ex.message);
                            }
                        }
                        else {
                            try {
                                //DBG_ALWAYS("NOW DISPLAY IS : " + hiWebOsFrame.icon);
                                openKpad();
                            }
                            catch (ex) {
                                DBG_ERROR("error !!!" + ex.message);
                            }
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keyVoice:
                        var currentArea = hiWebOsFrame.getCurrentArea();
                        if (currentArea == "EU") {
                            showMsg("", "Not available");
                            return false;
                        }
                        var country = hiWebOsFrame.getCurrentCountry().toLowerCase();
                        if (country == "australia") {
                            return false;
                        }
                        try {
                            if (!canCurrentPageProcEvent() || isCurrentAppHimedia() || checkIsAppOn())return false;
                            model.speech.ActionCtrl(1, 1);
                            startSpeech();
                            debugPrint("------>startSpeech:");
                        }
                        catch (ex) {
                            DBG_ERROR(ex);
                        }

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'Voice');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    case hiWebOsFrame.getKeyValues().keyMenu:
                        try {
                            if(!tv) return;
                            if ('SA' == hiWebOsFrame.getCurrentArea()
                                && 'argentina' == hiWebOsFrame.getCurrentCountry().toLowerCase()
                                && !!hiWebOsFrame.blankPage
                                && hiWebOsFrame.blankPage.visible
                                && livetvmain.getCurrentSourceInnerId() == SourceList.TV
                                && typeof ginga != 'undefined'
                                && ginga.getRunningState()) {
                                DBG_INFO('arg--menu--ginga, return');
                                return;
                            }
                        } catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        try {
                            debugPrint("keyMenu________________________", DebugLevel.ERROR);
                            if (hiWebOsFrame.isCurrentModule("setting") || hiWebOsFrame.isCurrentModule("settingfirst") || hiWebOsFrame.isCurrentModule("hotel")) {
                                if ($.inArray(hiWebOsFrame.getCurrentPageId(), hiWebOsFrame.getProtectPages()) != -1) {
                                    return false;
                                }
                                hiWebOsFrame.lockAllKeys();
                                try {
                                    hiWebOsFrame.isCurrentModule("hotel");
                                    hiWebOsFrame.destroyModule('hotel');
                                } catch (ex) {
                                    DBG_ERROR(ex.message);
                                }


                                var tempOri = null;
                                try {
                                    tempOri = hiWebOsFrame.getPageByIdFromSdkPages('setting_sys_qs_page').origin;
                                }
                                catch (ex) {
                                    debugPrint(ex.message, DebugLevel.ERROR);
                                }
                                hiWebOsFrame.destroyModule("setting", settingOnDestroyCallback.bind(this, tempOri));
                                hiWebOsFrame.settingsFirst.close();
                            }
                            else {
                                if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
                                    debugPrint("recording keymenu is pressed!");
                                    PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                        "Sure to exit from PVR or T.Shift?", okCommandMenu, pvrTshiftCancelCommand);
                                    return;
                                }
                                if (settingInited) {
                                    openMenuPage();
                                }
                                else {
                                    settingInited = true;
                                    createSettingPage(openMenuPage);
                                }
                            }

//                hiWebOsFrame.lockAllKeys();
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'Menu');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    case hiWebOsFrame.getKeyValues().keyAudioOnly:
                    {
                        try{
                        model.system.setEnumScreenState(0);
                        debugPrint("Off the screen", DebugLevel.ERROR);
                        g_SystemAudioOnlyFlag=1;
                        }catch (e){
                            debugE(e.message)
                        }
                       break;
                    }
                    case hiWebOsFrame.getKeyValues().keySleep:
                    {
                        debugPrint("[config.js]keysleep pressed!", DebugLevel.ERROR);
                        if (!canCurrentPageProcEvent())return false;
                        if (hiWebOsFrame.isCurrentModule("sleep")) {
                            hiWebOsFrame.destroyModule("sleep", SleepOnDestroyCallback.bind(this, hiWebOsFrame.settingsleeplist.origin));

//                    hiWebOsFrame.getCurrentPage().close();
//                    hiWebOsFrame.getCurrentPage().origin.open();
//                    hiWebOsFrame.getCurrentPage().origin.hiFocus();
//                    closePagesOrModuleByPage(hiWebOsFrame.settingsleeplist);
//                    if ("app" == hiWebOsFrame.settingsleeplist.origin.module) {
//                        if ("app_lau_browser" == tempOri.id) {
//                            switch (appBrowser.getCurrentCommandType()) {
//                                case CmdURLType.LAU_BROWSER_HIMEDIA:
//                                    //model......通知himedia注册按键
//                                    model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
//                                    break;
//                                default :
//                                    break;
//                            }
//                        }
//                    }

                        }
                        else {
                            if (!!hiWebOsFrame.getCurrentPage()) {
                                if (hiWebOsFrame.isCurrentModule("livetv")) {
                                    debugPrint("444444444444444444444444444444");
                                    hiWebOsFrame.lockAllKeys();
                                    StartSleepTimerControl(hiWebOsFrame.blankPage);
                                    closeLiveTVModule();
                                    hiWebOsFrame.unLockAllKeys();

                                }
                                else if (hiWebOsFrame.getCurrentPage().module == "launcher") {
                                    hiWebOsFrame.lockAllKeys();
                                    hiWebOsFrame.getCurrentPage().hiBlur();
                                    StartSleepTimerControl(hiWebOsFrame.myLauncher);
                                    hiWebOsFrame.unLockAllKeys();
                                }
                                else if (hiWebOsFrame.getCurrentPage().module == "allapps"
                                    || hiWebOsFrame.getCurrentPage().module == "accuweather") {
                                    var crntPage = hiWebOsFrame.getCurrentPage();
                                    crntPage.hiBlur();
                                    StartSleepTimerControl(crntPage);
                                }
                                else if (hiWebOsFrame.isCurrentModule("app")) {
                                    pressSleepOnApp();
                                }
                            }

                        }

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'Sleep');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    }
                    case hiWebOsFrame.getKeyValues().keyCC:
                    {
                        debugPrint("!!!!!!!!!!!!!!!!!keycc!!!!!!!!!");
                        if (!canCurrentPageProcEvent())return false;

                        if (!hiWebOsFrame.isCurrentModule("livetv") && hiWebOsFrame.getCurrentPageId() != 'setting_cc_list_page') {
                            return false;
                            debugPrint("the wrong status to react the cc")
                        }
                        else {
                            if (hiWebOsFrame.getCurrentPageId() == 'setting_cc_list_page') {
                                hiWebOsFrame.getCurrentPage().close();
                                hiWebOsFrame.getCurrentPage().origin.open();
                                hiWebOsFrame.getCurrentPage().origin.hiFocus();
                            }
                        }
                        break;
                    }

                    case hiWebOsFrame.getKeyValues().keyExit:
                        //tempDebug = false;//正式去掉

//                closeMsgPage(false);
                        if (hiWebOsFrame.isCurrentModule("ginga")) {
                            hiWebOsFrame.ginga_app.close();
                        }

                        if (hiWebOsFrame.isCurrentModule("SKB")) {
                            exitSKBNotSave();
                            return false;
                        }

                        if (hiWebOsFrame.isCurrentModule("iqqi")) {
                            exitIQQI();
                            return false;
                        }

                        if (!canCurrentPageProcEvent())return false;
                        ClearTimerReadUserIni();
                        if (checkAndCloseIfAppOn(hiWebOsFrame.blankPage)) {
                            //chl_g_sourceInfo.tvShowInfoBar = true;
                            return false;
                        }
                        else if (hiWebOsFrame.isCurrentModule("launcher")) {
                            if (g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite") {
                                hiWebOsFrame.myLauncher.close();
                            } else {
                                launcherNBar.closeLauncher();
                            }
                        }
                        else if (hiWebOsFrame.isCurrentModule("accuweather")) {
                            try {
                                accuMain.backToOri();
                                return;
                            }
                            catch (ex) {
                                DBG_ERROR(ex.message);
                            }
                        }
                        else if (!!hiWebOsFrame.getCurrentPage()) {
                            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                            tryToCloseLauncher();
                            tryToCloseAllApps();
                            tryToCloseEpg();
                        }

					if (hiWebOsFrame.getCurrentPageId() == LiveTVModule.MAIN && 2 != TeletextDevice.status && (deviceKeySet.HBBTVKEYSET > 15 || model.tvservice.getHbbTvStatus() == 2)) {
						pauseHBBTV();
					}
					setWindowSizeLater(0, 0, 1920, 1080);
					//chl_g_sourceInfo.tvShowInfoBar = true;

                    if(hiWebOsFrame.isCurrentModule("epg")){
                        openLiveTVModule([Msg.INFO, 0]);
                    }
                    else{
                        hiWebOsFrame.blankPage.open();
                        hiWebOsFrame.blankPage.hiFocus();
                    }
					if (2 == TeletextDevice.status) {
						// if standard teletext is active, send EXIT to DTV
						keyboard.SendKeyResult(false);
					}

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'Exit');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                            if (typeof launcherAApps != UNDEFINED_DEFSTR) {
                                launcherAApps.resetExitedIndex(true);
                            }
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    case hiWebOsFrame.getKeyValues().keyRed:
                        break;
                    case hiWebOsFrame.getKeyValues().keyYellow:
                        /*if (tempDebug) {
                         if($("#sdkPages").css("display") == "none") {
                         $("#sdkPages").css("display", "block");
                         $("#sdkPagesContent").html(hiWebOsFrame.listPages());
                         }
                         else {
                         $("#sdkPages").css("display", "none");
                         }
                         }
                         tempDebug = false;//正式去掉*/
                        break;
                    case hiWebOsFrame.getKeyValues().keyHome:
                        if(preloadLauncherTimer!=null){
                            clearTimeout(preloadLauncherTimer);
                        }
                        if (CREATE_STATE.CREATING == launcherCreateState) return;
                        if (FACTORY_MODE_ENUM.MODE_FACTORY == factoryMode) {
                            if (1 == model.hisfactory.getFactoryAging()) {
                                DBG_INFO("factory aging.");
                                return;
                            }
                            else if (8 == model.hisfactory.getFactoryCurrentSource()) {
                                DBG_INFO("current source is dmp");
                                return;
                            }
                            else if(isFileExist("his_factory_do_ok_over", 0)){
                                DBG_INFO("factory OK");
                                return;
                            }
                            DBG_INFO('exit factory mode');
                            //model.hisfactory.setStateOpen(0);
                            needReumeLauncherFromFac = true;//!facOnApp;
                            hiWebOsFrame["app_factory"].close();

                            return;
                        }
                        //进home，若当前有录制时，UI提示
                        if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
                            debugPrint("keyHome is pressed!");
                            PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                "Sure to exit from PVR or T.Shift?", okCommandHome, pvrTshiftCancelCommand);
                            return;
                        }
                        //tempDebug = false;//正式去掉
                        if (!canCurrentPageProcEvent())return false;
                        if (typeof launcherNBar != UNDEFINED_DEFSTR) {
                            launcherNBar.setFocusContent(false);
                        }
                        if (hiWebOsFrame.isCurrentModule("launcher")) {
                            if (g_launcherBrand == "SA_OEM") {
                                hiWebOsFrame.myLauncher.close();
                            } else if(g_launcherBrand == "VIDAALite") {
                                VIDAALiteLauncherIfPositionResetFirst = true;
                                hiWebOsFrame.myLauncher.close();
                            } else {
                                launcherNBar.closeLauncher();
                            }
                            //chl_g_sourceInfo.tvShowInfoBar = true;
                            hiWebOsFrame.blankPage.open();
                            hiWebOsFrame.blankPage.hiFocus();
                        }
                        else if (hiWebOsFrame.isPageExist("myLauncher") || hiWebOsFrame.isPageExist("OEMlauncherPage")
                            ||hiWebOsFrame.isPageExist("VIDAALiteNavPage")) {
                            if (checkAndCloseIfAppOn(hiWebOsFrame.myLauncher)) {
                                return false;
                            }
                            else if (hiWebOsFrame.isCurrentModule("accuweather")) {
                                try {
                                    accuMain.backToOri();
                                    return;
                                } catch (ex) {
                                    DBG_ERROR(ex.message);
                                }
                            }
                            else {
                                closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                                tryToCloseAllApps();
                                if(g_launcherBrand == "VIDAALite") {
                                    VIDAALiteLauncherIfPositionResetFirst = true;
                                    if(!!hiWebOsFrame[VIDAALiteLauncherPageIdMap["template2000"]]){
                                        if(VIDAALiteNavPageData.operateData.lastOpenPage!=VIDAALiteLauncherPageIdMap["template2000"]){
                                            var crtPageId = VIDAALiteNavPageData.operateData.lastOpenPage;
                                            VIDAALiteNavPageData.operateData.lastOpenPage = VIDAALiteLauncherPageIdMap["template2000"];
//                                            setTimeout(function(){
                                                $("#"+hiWebOsFrame[VIDAALiteNavPageData.operateData.lastOpenPage].id).css("transform", 'translateY(-200px)');//lu
                                                $("#"+hiWebOsFrame[VIDAALiteNavPageData.operateData.lastOpenPage].id).css("opacity", '1');//lu
                                                setVIDAALiteLauncherNavBarFocusImageForFVP();
                                                setVIDAALiteLauncherNavBarAnimation(crtPageId, VIDAALiteNavPageData.operateData.lastOpenPage);
                                                hiWebOsFrame.unLockAllKeys();
//                                            },10);
                                        }
                                    }
                                }
                                hiWebOsFrame.myLauncher.open();
                                hiWebOsFrame.myLauncher.hiFocus();
                            }
                        }
                        else {
                            var crntPage = hiWebOsFrame.getCurrentPage();
                            if (null == crntPage) {
                                closeDOthersModule("launcher");
                                if (g_launcherBrand == "SA_OEM") {
                                    createSAOEMLauncher();
                                }else if(g_launcherBrand == "VIDAALite"){
                                    createVIDAALitelauncher();
                                }
                                else {
                                    createModulePage('myLauncher');
                                }
                            }
                            else if ('app' == crntPage.module) {
                                if (g_launcherBrand == "SA_OEM") {
                                    hiWebOsFrame.createPage("OEMlauncherPage", null, null, null, function (a) {
                                        hiWebOsFrame.myLauncher = a;
                                        asyncStopApp(hiWebOsFrame.getCurrentPageId(), hiWebOsFrame.myLauncher);
                                    });
                                }else if(g_launcherBrand == "VIDAALite"){
                                    hiWebOsFrame.createPage("VIDAALiteNavPage", null, null, null, function (a) {
                                        hiWebOsFrame.myLauncher = a;
                                        asyncStopApp(hiWebOsFrame.getCurrentPageId(), hiWebOsFrame.myLauncher);
                                    });
                                }
                                else {
                                    hiWebOsFrame.createPage("myLauncher", null, null, null, function (a) {
                                        hiWebOsFrame.myLauncher = a;
                                        asyncStopApp(hiWebOsFrame.getCurrentPageId(), hiWebOsFrame.myLauncher);
                                    });
                                }
                            }
                            else if (("setting" == crntPage.module || "settingfirst" == crntPage.module)
                                && !!hiWebOsFrame.settingsFirst
                                && !!hiWebOsFrame.settingsFirst.origin
                                && ("app" == hiWebOsFrame.settingsFirst.origin.module)) {
                                var oriPage = hiWebOsFrame.settingsFirst.origin;

                                if (g_launcherBrand == "SA_OEM") {
                                    hiWebOsFrame.createPage("OEMlauncherPage", null, null, null, function (a) {
                                        closePagesOrModuleByPage(crntPage);
                                        hiWebOsFrame.myLauncher = a;
                                        asyncStopApp(oriPage.id, hiWebOsFrame.myLauncher);
                                    });
                                }else if(g_launcherBrand == "VIDAALite"){
                                    hiWebOsFrame.createPage("VIDAALiteNavPage", null, null, null, function (a) {
                                        closePagesOrModuleByPage(crntPage);
                                        hiWebOsFrame.myLauncher = a;
                                        asyncStopApp(oriPage.id, hiWebOsFrame.myLauncher);
                                    });
                                }
                                else {
                                    hiWebOsFrame.createPage("myLauncher", null, null, null, function (a) {
                                        closePagesOrModuleByPage(crntPage);
                                        hiWebOsFrame.myLauncher = a;
                                        asyncStopApp(oriPage.id, hiWebOsFrame.myLauncher);
                                    });
                                }
                            }
                            else {
                                closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                                tryToCloseAllApps();
                                if (g_launcherBrand == "SA_OEM") {
                                    createSAOEMLauncher();
                                }
                                else if(g_launcherBrand == "VIDAALite"){
                                    createVIDAALitelauncher();
                                }
                                else {
                                    createModulePage('myLauncher');
                                }
                            }
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keyAllApp:
                        if (CREATE_STATE.CREATING == launcherCreateState) return;
                        //进AllApps，若当前有录制时，UI提示
                        if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
                            debugPrint("keySource is pressed!");
                            PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                "Sure to exit from PVR or T.Shift?", okCommandAllApps, pvrTshiftCancelCommand);
                            return;
                        }
                        //tempDebug = false;//正式去掉
                        if (!canCurrentPageProcEvent())return false;

                        if (typeof launcherAApps != UNDEFINED_DEFSTR) {
                            launcherAApps.resetExitedIndex(true);
                        }
                        if (hiWebOsFrame.getCurrentPageId() == "launcher_allapps") {
                            launcherAApps.backToOri();
                        }
                        else {
                            oneKeyOpenLauncherApp(CmdURLType.HIPAGE, 'launcher_allapps');
                        }

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'All Apps');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    case hiWebOsFrame.getKeyValues().keyLiveTV:

                        //tempDebug = false;//正式去掉
                        if (!canCurrentPageProcEvent())return false;

                        var defaultSource = model.system.getSystemDefaultInput();
                        var hotelMode = model.hotel.getHotelMode();
                        if (checkAndCloseIfAppOn(hiWebOsFrame.blankPage)) {

                            if (defaultSource != livetvmain.getCurrentSource().uid && (hotelMode != 1 || ((hotelMode == 1) && (!livetvmain.getSourceByUid(defaultSource).hotelLock)))) {
                                changeSourceTo(defaultSource);
                            }
                            return false;
                        }
                        else if (hiWebOsFrame.isCurrentModule("launcher")) {
                            if (g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite") {
                                hiWebOsFrame.myLauncher.close();
                            } else {
                                launcherNBar.closeLauncher();
                            }
                        }
                        else if (!!hiWebOsFrame.getCurrentPage()) {
                            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                            tryToCloseLauncher();
                            tryToCloseAllApps();
                        }

                        if (defaultSource != livetvmain.getCurrentSource().uid && (hotelMode != 1 || ((hotelMode == 1) && (!livetvmain.getSourceByUid(defaultSource).hotelLock)))) {
                            if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
                                debugPrint("keyLiveTV is pressed!");
                                PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                    "Sure to exit from PVR or T.Shift?", okCommandLiveTV, pvrTshiftCancelCommand);
                                return;
                            }
                            changeSourceTo(defaultSource);
                            openLiveTVModule([Msg.WAIT_SOURCE_CHANGE, 1]);
                        }
                        else {
                            openLiveTVModule();
                        }
                        setWindowSizeLater(0, 0, 1920, 1080);

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'LiveTV');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                            if (typeof launcherAApps != UNDEFINED_DEFSTR) {
                                launcherAApps.resetExitedIndex(true);
                            }
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    case hiWebOsFrame.getKeyValues().keyAV1:
                    case hiWebOsFrame.getKeyValues().keyAV3:
                    case hiWebOsFrame.getKeyValues().keyAV2:
                    case hiWebOsFrame.getKeyValues().keyCOMPONENT1:
                    case hiWebOsFrame.getKeyValues().keyHDMI1:
                    case hiWebOsFrame.getKeyValues().keyHDMI2:
                    case hiWebOsFrame.getKeyValues().keyHDMI3:
                    case hiWebOsFrame.getKeyValues().keyHDMI4:
                    case hiWebOsFrame.getKeyValues().keyHDMI5:
                    case hiWebOsFrame.getKeyValues().keyVGA:
                    {
                        if (!canCurrentPageProcEvent())return false;
                       // var defaultSource = model.system.getSystemDefaultInput();
                        var defaultSource=getSourceIdbyKey(event.keyCode);
                        if(defaultSource==undefined){
                            return false;
                        }
                        var hotelMode = tv?model.hotel.getHotelMode():0;
                        if (checkAndCloseIfAppOn(hiWebOsFrame.blankPage)) {
                            if (defaultSource != livetvmain.getCurrentSource().uid && (hotelMode != 1 || ((hotelMode == 1) && (!livetvmain.getSourceByUid(defaultSource).hotelLock)))) {
                                changeSourceTo(defaultSource);
                            }
                            return false;
                        }
                        else if (hiWebOsFrame.isCurrentModule("launcher")) {
                            if (g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite") {
                                hiWebOsFrame.myLauncher.close();
                            } else {
                                launcherNBar.closeLauncher();
                            }
                        }
                        else if (!!hiWebOsFrame.getCurrentPage()) {
                            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                            tryToCloseLauncher();
                            tryToCloseAllApps();
                        }
                        if (defaultSource != livetvmain.getCurrentSource().uid && (hotelMode != 1 || ((hotelMode == 1) && (!livetvmain.getSourceByUid(defaultSource).hotelLock)))) {
                            if (tv == true && (isMainArchiveRecording() || isTimeShiftStatus())) {
                                debugPrint("keyLiveTV is pressed!");
                                PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                    "Sure to exit from PVR or T.Shift?", okCommandLiveTV, pvrTshiftCancelCommand);
                                return;
                            }
                            changeSourceTo(defaultSource);
                            openLiveTVModule([Msg.WAIT_SOURCE_CHANGE, 1]);
                        }
                        else {
                            openLiveTVModule();
                            }
                        setWindowSizeLater(0, 0, 1920, 1080);
                        break;
                        }
                    case hiWebOsFrame.getKeyValues().keyPMode:
                        try {
                            var HDRMode = ["Standard", "Dynamic", "HDR", "Cinema", "PC/Game"];
                            var SDRMode = ["Standard", "Dynamic", "Cinema day", "Cinema night", "PC/Game"];
                            var isHDRFlag = tv ? model.video.getHDRSupport() : 1;
                            var picModeTextVec = !!isHDRFlag ?  HDRMode: SDRMode;
                            var curIdx = tv?model.video.getEnumPictureMode():3;
                            var GameFlag = (!isCurrentAppHimedia() && (livetvmain.getCurrentSourceInnerId() != SourceList.TV));
                            if(((curIdx+1)>=picModeTextVec.length) || (curIdx==3 && !GameFlag)){
                                curIdx = 0
                            }else{
                                curIdx = curIdx +1;
                            }
                            tv && model.video.setEnumPictureMode(curIdx);
                            DBG_INFO("model.video.setEnumPictureMode: " + curIdx);
                            showTVTip(picModeTextVec[curIdx]);
                        } catch (ex) {
                            DBG_ERROR(ex.message);
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keySMode:
                        try {
                            var ModeEnum = ["Standard", "Theatre", "Music", "Speech", "Late Night"];
                            var currSndModeIndex = tv ? model.sound.getSoundMode() : 3;
                            var setSndModeIndex;
                            if (currSndModeIndex + 1 >= ModeEnum.length) {
                                setSndModeIndex = 0
                            }else{
                                setSndModeIndex = currSndModeIndex + 1;
                            }
                            DBG_INFO("setSndModeIndex:" + setSndModeIndex);
                            tv && model.sound.setSoundMode(setSndModeIndex);
                            showTVTip(ModeEnum[setSndModeIndex]);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keyASPECT_AUTO:
                        var curIdx = picAspectRatioVec.indexOf("Automatic");
                        tv && model.video.setEnumZoom(curIdx);//3
                        showTVTip("Automatic");
                        break;
                    case hiWebOsFrame.getKeyValues().keyPICMODE_WIDE:
                        var curIdx = picAspectRatioVec.indexOf("16:9");
                        tv && model.video.setEnumZoom(curIdx);//3
                        showTVTip("16:9");
                        break;
                    case hiWebOsFrame.getKeyValues().keyPICMODE_NORMAL:
                        var curIdx = picAspectRatioVec.indexOf("4:3");
                        tv && model.video.setEnumZoom(curIdx);//3
                        showTVTip("4:3");
                        break;
                    case hiWebOsFrame.getKeyValues().keyPICMODE_PANORAMA:
                        var curIdx = picAspectRatioVec.indexOf("Panoramic");
                        tv && model.video.setEnumZoom(curIdx);//3
                        showTVTip("Panoramic");
                        break;
                    case hiWebOsFrame.getKeyValues().keyPICMODE_CINEMA:
                        var curIdx = picAspectRatioVec.indexOf("Movie Zoom");
                        tv && model.video.setEnumZoom(curIdx);//3
                        DBG_ERROR("VK_PICMODE_CINEMA");
                        showTVTip("Movie Zoom");
                        break;
                         break;
                    case hiWebOsFrame.getKeyValues().keyASPECT_DIRECT:
                        var curIdx = picAspectRatioVec.indexOf("Direct");
                        tv && model.video.setEnumZoom(curIdx);//3
                        showTVTip("Direct");
                        break;
                        break;
                    case hiWebOsFrame.getKeyValues().keyPIC_CINEMA_DAY:
                    {
                        var cinemaDayStr = ["Cinema day","HDR"];
                        var isHDRFlag = tv ? model.video.getHDRSupport() : 1;
                        tv && model.video.setEnumPictureMode(2);
                        DBG_INFO("model.video.setEnumPictureMode: " + 2);
                        showTVTip(cinemaDayStr[isHDRFlag]);
                        break;
                    }
                    case hiWebOsFrame.getKeyValues().keyPIC_CINEMA_NIGHT:
                    {
                        var cinemaNightStr = ["Cinema night","Cinema"];
                        var isHDRFlag = 0;
                        isHDRFlag = tv ? model.video.getHDRSupport() : 1;
                        tv && model.video.setEnumPictureMode(3);
                        DBG_INFO("model.video.setEnumPictureMode: " + 3);
                        showTVTip(cinemaNightStr[isHDRFlag]);
                        break;
                    }
                    case hiWebOsFrame.getKeyValues().keySND_MOVIE:
                    {
                        tv && model.sound.setSoundMode(1);
                        DBG_INFO("model.video.setSoundMode: "+1);
                        showTVTip("Theatre");
                        break;
                    }
                    case hiWebOsFrame.getKeyValues().keyFREEZE:
                    {
                        debugPrint("freez key");
                        try {

                            if (model.video.getFreeze() > 0) {
                                model.video.setFreeze(0);

                            } else {
                                model.video.setFreeze(1);
                            }
                        } catch (e) {
                            DBG_ERROR(e.message);
                        }
                        break;
                    }
                    case hiWebOsFrame.getKeyValues().keyMedia:
                    {
                        if (hiWebOsFrame.getCurrentPageId() == "dlna_picPlayer" ||
                        hiWebOsFrame.getCurrentPageId() == "dlna_videoPlayer" ||
                        hiWebOsFrame.getCurrentPageId() == "dlna_musicPlayer") {
                        DBG_INFO("now page is " + hiWebOsFrame.getCurrentPageId() + "  need change dlnaClosedByAppHotkey!!");
                        dlnaClosedByAppHotkey = true;

                    }
                        //进第三方应用，若当前有录制时，UI提示
                        if (isMainArchiveRecording() || isTimeShiftStatus()) {
                            debugPrint("keyNetflix/keyAmazon/keyVudu/keyYoutube/keyWuaki is pressed!");
                            PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
                                "Sure to exit from PVR or T.Shift?", okCommandApp.bind(this, event.keyCode), pvrTshiftCancelCommand);
                            return;
                        }
                        if (!canCurrentPageProcEvent())return false;


                        if (isCurrentAppHimedia()) {

                            DBG_INFO("do not process himself: media");

                        }
                        else {
                            var crntPage = hiWebOsFrame.getCurrentPage();
                            if ("setting" == crntPage.module || "settingfirst" == crntPage.module) {
                                var settingorigin = hiWebOsFrame.settingsFirst.origin;
                                if (!!settingorigin && settingorigin.visible) {
                                    if (settingorigin.module == "launcher") {
                                        closePagesOrModuleByPage(crntPage);
                                        hiWebOsFrame.myLauncher.hiFocus();
                                    }
                                    else if (settingorigin.module == "allapps") {
                                        closePagesOrModuleByPage(crntPage);
                                        hiWebOsFrame["launcher_allapps"].open();
                                        launcherAApps.focusAllApp();
                                    }
                                    else if(settingorigin.id == app_c.pageId){
                                        DBG_INFO("do not process himself: " + app_c.name);
                                        return;
                                    }
                                }

                            }

                            sendCommndToTV(CmdURLType.START_BROWSER, getMediaURL(0), false);
                            debugPrint("keyMedia ");
                            return false;
                        }

                        break;
                    }
                    case hiWebOsFrame.getKeyValues().key3D:
                        //tempDebug = false;//正式去掉
                        debugPrint("key3D____" + hiWebOsFrame.isCurrentModule("videoPlayer"));
                        if (!hiWebOsFrame.isCurrentModule("livetv") && !hiWebOsFrame.isCurrentModule("videoPlayer") &&
                            hiWebOsFrame.getCurrentPageId() != 'setting_pic_3d_page') {
                            return false;
                        }
                        else {
                            if (hiWebOsFrame.getCurrentPageId() == 'setting_pic_3d_page' && hiWebOsFrame.getCurrentPage().origin.module != 'setting') {
                                hiWebOsFrame.getCurrentPage().close();
                                hiWebOsFrame.getCurrentPage().origin.open();
                                hiWebOsFrame.getCurrentPage().origin.hiFocus();
                            }
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keySize:
                        //tempDebug = false;//正式去掉
                        if (!hiWebOsFrame.isCurrentModule("livetv") && !hiWebOsFrame.isCurrentModule("videoPlayer") && !hiWebOsFrame.isCurrentModule("picPlayer") && hiWebOsFrame.getCurrentPageId() != 'setting_pic_Zoom') {
                            return false;
                        }
                        else {
                            if (hiWebOsFrame.getCurrentPageId() == 'setting_pic_Zoom' && hiWebOsFrame.getCurrentPage().origin.module != 'setting') {
                                hiWebOsFrame.getCurrentPage().close();
                                hiWebOsFrame.getCurrentPage().origin.open();
                                hiWebOsFrame.getCurrentPage().origin.hiFocus();
                            }
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keyLanguage:
                        //tempDebug = false;//正式去掉
                        if (!hiWebOsFrame.isCurrentModule("livetv") && hiWebOsFrame.getCurrentPageId() != 'LanguageKeyListDialogId') {
                            return false;
                        }
                        else {
                            if (hiWebOsFrame.getCurrentPageId() == 'LanguageKeyListDialogId' && hiWebOsFrame.getCurrentPage().origin.module != 'setting') {
                                hiWebOsFrame.getCurrentPage().close();
                                hiWebOsFrame.getCurrentPage().origin.open();
                                hiWebOsFrame.getCurrentPage().origin.hiFocus();
                            }
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keySUBT:

                        //tempDebug = false;//正式去掉
                        if (!hiWebOsFrame.isCurrentModule("livetv") && hiWebOsFrame.getCurrentPageId() != 'SUBTKeyListDialogId') {
                            return false;
                        }
                        else {
                            if (hiWebOsFrame.getCurrentPageId() == 'SUBTKeyListDialogId' && hiWebOsFrame.getCurrentPage().origin.module != 'setting') {
                                hiWebOsFrame.getCurrentPage().close();
                                hiWebOsFrame.getCurrentPage().origin.open();
                                hiWebOsFrame.getCurrentPage().origin.hiFocus();
                            }
                        }
                        break;
                    case hiWebOsFrame.getKeyValues().keyVolumeDown:
                    case hiWebOsFrame.getKeyValues().keyTVVoDown:
                        vol.setBizVolume(-1);
                        break;
                    case hiWebOsFrame.getKeyValues().keyVolumeUp:
                    case hiWebOsFrame.getKeyValues().keyTVVoUp:
                        vol.setBizVolume(1);
                        break;
                    case hiWebOsFrame.getKeyValues().keyMute:

                        vol.setBizMute();
                        break;
                    case hiWebOsFrame.getKeyValues().keyGuide:
                        /*if (deviceKeySet.HBBTVKEYSET > 0x1f) { //hbbtv 起来时 不能过滤 EPG按键
                            DBG_ERROR("hbbtv disable the key");
                            return;
                        }*/
                        try {
                            openEPGPage();
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'EPG');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                    case hiWebOsFrame.getKeyValues().keySticker:
                        try {
                            if ("SA" == InitArea) {
                                var curPage = hiWebOsFrame.getCurrentPage();
                                DBG_INFO('hiWebOsFrame.getCurrentPage().id' + curPage.id);
                                if (!!hiWebOsFrame.ginga_app && curPage.id == hiWebOsFrame.ginga_app.id) {
                                    DBG_INFO('curPage Ginga, close it and open livetv');
                                    ginga.gingaAppEscHandler();
                                } else if (!!hiWebOsFrame.blankPage
                                    && hiWebOsFrame.blankPage.visible
                                    && livetvmain.getCurrentSourceInnerId() == SourceList.TV
                                    && livetvmain.getCurrentChannelInfo().type != TVTYPE.ATV) {

                                    DBG_INFO('curPage livetv, close it and open ginga if possible');

                                    if ('brazil' == hiWebOsFrame.getCurrentCountry().toLowerCase() || 'argentina' == hiWebOsFrame.getCurrentCountry().toLowerCase()) {
                                        if (ginga.pageData.operateData.appList.length > 0) {
                                            DBG_INFO('ginga applist not null');
                                            closeLiveTVModule();
                                            hiWebOsFrame.ginga_app.open();
                                            hiWebOsFrame.ginga_app.rewrite();
                                            hiWebOsFrame.ginga_app.hiFocus();
                                            ginga.RefreshGingaScrollBar();
                                        } else {
                                            DBG_INFO('ginga applist null');
                                            //livetv 给出提示no ginga
                                            ginga.GingaInit();
                                            closeLiveTVModule();
                                            hiWebOsFrame.ginga_app.open();
                                            hiWebOsFrame.ginga_app.rewrite();
                                            hiWebOsFrame.ginga_app.hiFocus();
                                            ginga.RefreshGingaScrollBar();
                                        }
                                    } else {
                                        DBG_INFO('cur country not brazil||argentina, do nothing');
                                        showMsg('', 'The Ginga service is not available currently in this country.');
                                    }


                                } else {
                                    DBG_INFO('ginga cant show on curPage: ' + curPage.id);
                                }

                            } else {
                                DBG_INFO('curArea not SA , keySticker do nothing');
                            }
                        } catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        try {
                            debugPrint("logReport__________begin", DebugLevel.WARNING);
                            logReport('GTRemoteControl', 'Sticker');
                            debugPrint("logReport__________end", DebugLevel.WARNING);
                        }
                        catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;

                    case hiWebOsFrame.getKeyValues().keyAudioDescription:
                        try {
                            if ('EM' == InitArea && 'thailand' == hiWebOsFrame.getCurrentCountry().toLowerCase()) {
                                DBG_INFO("EM' == InitArea && 'thailand' == curCountry, keyAudioDescription");

                                if (('block' == $('#tv_tips_bkg').css('display')) || !!hiWebOsFrame.blankPage && hiWebOsFrame.blankPage.visible) {
                                    DBG_INFO('keyAudioDescription useful in curPage');
                                    var curType = model.sound.getAudioType();
                                    DBG_INFO('model.sound.getAudioType(): ' + curType);

                                    //0 normal; 1 hearing impaired
                                    /*AD Mode: Off; AD Mode: On*/
                                    if (0 == curType) {
                                        model.sound.setAudioType(1);
                                        DBG_INFO('model.sound.setAudioType(1)');
                                        showTVTip('AD Mode: On');
                                        var curVolume = model.sound.getMainVolume();
                                        DBG_INFO('model.sound.getMainVolume(): ' + curVolume);
                                        model.sound.setDescriptionVolume(curVolume);
                                        DBG_INFO('model.sound.setDescriptionVolume(' + curVolume + ')');
                                    } else {
                                        model.sound.setAudioType(0);
                                        DBG_INFO('model.sound.setAudioType(0)');
                                        showTVTip('AD Mode: Off');
                                    }
                                } else {
                                    DBG_INFO('keyAudioDescription not useful in curPage');
                                }
                            } else {
                                DBG_INFO('Not EM&&thailand, keyAudioDescription return');
                            }
                        } catch (ex) {
                            DBG_ERROR(ex.message);
                        }

                        break;
                        case hiWebOsFrame.getKeyValues().keyPowerKeyPad:

                        break;
                    default:
                        //tempDebug = false;//正式去掉
                        break;
                }
                if (!!hiWebOsFrame.getCurrentPage()) {
                    //debugPrint('SDK print--currentPages(after winKeyDownHandler):' + hiWebOsFrame.getCurrentPage().id);
                }
            },//window按键处理函数
            winKeyUpHandler: function (event) {
                //debugPrint("event.keyCode"+event.keyCode)
                if (!!hiWebOsFrame.getCurrentPage() &&
                    (hiWebOsFrame.getCurrentPageId() == LiveTVModule.MAIN ||
                    (!!hiWebOsFrame.Mheg5PasswordOSD && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.Mheg5PasswordOSD.id) ||
                    (!!hiWebOsFrame.SettingChnlCIPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingChnlCIPage.id))) {
                    liveTVHandlerProcess(event.keyCode, 1);
                    if (event.keyCode == VK_CHANNEL_DOWN || event.keyCode == VK_CHANNEL_UP ||
                        event.keyCode == VK_KEYPAD_CHANNEL_DOWN || event.keyCode == VK_KEYPAD_CHANNEL_UP) {

                        if (0 && deviceKeySet.HBBTVKEYSET > 0x1f) {
                            DBG_ERROR("hbbtv disable the key");
                        }
                        else {
                            livetvchlist.setKeyUp(event.keyCode);
                        }
                    }
                    if (event.keyCode == VK_EXIT && 2 == TeletextDevice.status) {
                        // if standard teletext is active, send EXIT to DTV
                        keyboard.SendKeyResult(false);
                    }
                }   //liyanhong

                if (event.keyCode == VK_VOLUME_DOWN || event.keyCode == VK_VOLUME_UP || event.keyCode == VK_MUTE
                    || event.keyCode == VK_KEYPAD_VOLUME_UP || event.keyCode == VK_KEYPAD_VOLUME_DOWN) {
                    vol.tryToSendKeyUpToCEC();
                }

//        if (!!hiWebOsFrame.getCurrentPage()) {
//            debugPrint('SDK print--currentPages(before winKeyUpHandler):' + hiWebOsFrame.getCurrentPage().id, DebugLevel.ALWAYS);
//        }

//        if (!!hiWebOsFrame.getCurrentPage()) {
//            debugPrint('SDK print--currentPages(before winKeyUpHandler):' + hiWebOsFrame.getCurrentPage().id, DebugLevel.ALWAYS);
//        }
            },
            hiTemplatePages: templatesConfig,
            hiModulePages: modulesConfig,
            switchTable: [
                {"activePage": "", "activeModule": "", "includePages": [], "excludePages": []}
            ]
        });
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
//    if (window.location.href != "http://dc.hisense.com/saveWeekdayBook") {
//        var dt = new Date();
//        if (!tv && localStorage["saveWeekdayBook"] != dt.getDate()) {
//            localStorage["saveWeekdayBook"] = dt.getDate();
//            window.location.href = "http://dc.hisense.com/saveWeekdayBook";
//        }
//    }
//    else {
//        return;
//    }

    //-GHL_DEL-//console.log("config init")
    hiWebOsFrame.initA(function () {

        hiWebOsFrame.addLoadingRes(currentPlatform_config == '5655_EU_MARKET');
        //-GHL_DEL-//console.log("config init2");
        if (!tv) {
//            $("#setting_subtitle_list_page").css("display", "none");
//            $("#livetv_volume").css("display", "none");
//            $("body").css("background-color", "rgba(203,232,207,1)");
//           openChannelManager();
            hiWebOsFrame.setLanguage("eng");
//            initsystemid();
            //createVIDAALitelauncher();
            //return;
            //$("#hiweb").css("overflow", "visible");
//            openLiveTVModule(function() {
                //closeDOthersModule("");
                //openPageOnPC("epg");
                //openLiveTVSubPage(LiveTVModule.CHANNEL_LIST);
//            });
            //snd.test();
            //return;
            startSetting();
            return;


            //openPageOnPC("epg");
            //return;
//            hiWebOsFrame.setLanguage("eng");
//          openLiveTVModule();
//          return;
//	        setTimeout(function() {
//		        batteryFlag = 0;
//		        if(!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible) {
//			        $('#launcher_head_right').children(':last-child').css("display", "none");
//			        if(hiWebOsFrame.getCurrentPageId() == 'launcher_stabar') {
//				        $('#launcher_head').attr('class', 'launcherHeadFocus');
//				        hiWebOsFrame['launcher_stabar'].rewriteDataOnly();
//			        }
//		        }
//	        }, 15*1000)
//            return;
//            startQuickSetting();
            //startPRDialog();
//            hiWebOsFrame.createPage("beginRecordDialog", null, null, null, function (page) {
//                hiWebOsFrame.beginRecordPage = page;
//                page.open();
//                page.hiFocus();
//            });
        }
        else {
            try {
//	            hiWebOsFrame.setCurrentBrand(initBrand);    //防止出现config比model先加载的情况出现
                model.initialize();
                model.system.onAmStateChanged = onAppStateChanged;
                model.basicSetting.onTvsetLocationChaged = onTvsetLocationChaged;
                model.system.onEnterSuspendChanged = onEnterSuspendChanged;
                //temp add for EM/EU haven't merge fast boot
                // if("SA" != InitArea && 1 == model.hisfactory.getStateOpen()) keyboard.set_listen(1);
                getcurLang();
                createLauncherPage("livetv_main", doTVInit, null);
            }
            catch (ex) {
                log.error("start gui error: " + ex.message);
            }
        }


    });

});
function doTVScale() {
    try {
        EPOSresolution = tv ? model.system.getCurResolution() : 'HD';
        DeviceMsgSA = Hisense.File.read("am_tv_model_name", 0);
        DBG_ERROR("EPOSresolution"+EPOSresolution);
        DBG_ERROR("DeviceMsgSA"+DeviceMsgSA);
        isDoTVScale=false;
        if ("HIS_EPOS_HD" == EPOSresolution) {
            if (DeviceMsgSA == 'LHD32K3110WAM') {
                $('body').css('transform', 'scale(0.7115)');
                $('body').css('transform-origin', 'bottom right');
            } else {
                $('body').css('transform', 'scale(0.7115)');
                $('body').css('transform-origin', 'top left');
            }
            isDoTVScale=true;
        }
        else if ("HIS_EPOS_FHD" == EPOSresolution ){
            if(('HE32M2161HWTS' == DeviceMsgSA ||
                DeviceMsgSA == 'HS32K3110HWT'||
                'LHD32K3110WT' == DeviceMsgSA||
                'HA32N2177WT' == DeviceMsgSA||
                "HT32N2171HW"==DeviceMsgSA)) {
            if("HT32N2171HW"==DeviceMsgSA){
	        if(document.body.style.getPropertyValue("transform") != "scale(0.71)"){
		    $('body').css('transform', 'scale(0.7115)');
                    $('body').css('transform-origin', 'bottom right');
		}
	    }else{
                $('body').css('transform', 'scale(0.7115)');
                $('body').css('transform-origin', 'bottom right');
            }
            isDoTVScale=true;
        }
        else {
            $('body').css('transform', 'scale(0.7115)');
            $('body').css('transform-origin', 'top left');
            isDoTVScale=true;
        }
        }
    } catch (e) {
        DBG_ERROR(e.message);
    }

}

function doTVInit(){
    isStartFromNetfliex = (1 == model.system.getOpenFromStandby());
    isWizardFlag = getWizardSetFlag();
    doTVScale();
    model.system.stopAnimation(0);

    if(!!window.opera_omi) {
        opera_omi.sendPlatformMessage("showUI");
    }
    if (((isWizardFlag != 1) && (isWizardFlag != 2)) || (isStartFromNetfliex == true)) {

        if (1 != model.hisfactory.getFactoryAging()) {
            model.sound.setMainMute(0);
        }
    }
    FREEVIEWTEST = getFreeviewVersion();
    SystemInit();

    try {
        var civStr = tv? model.ci.getCIVStrEnquiry(): [];
        DBG_ERROR("civStr is " + objToString(civStr));
        if (Array.isArray(civStr) && civStr.length > 0) {
            onCIVStrEnquiryChaged(civStr);
        }
    }
    catch (ex) {
        DBG_ERROR("get civStr error: " + ex.message);
    }

    if(ENABLE_FVP) {
        freeview_manager.init();
    }
}

function openlauncherrecentwatch() {
    hiWebOsFrame.createPage("launcher_recentwatch", null, hiWebOsFrame.getCurrentPage(), null, function (page) {
        hiWebOsFrame['launcher_recentwatch'] = page;
        //to get the appdata type
        var appmodule = getallappmoduleindex();
        if (launcherRecentwatch.pageData.operateData.curapptype != appmodule) {
            launcherRecentwatch.pageData.operateData.curapptype = appmodule
            // launcherRecentwatch.initDate();
            launcherRecentwatch.repaintAllPage();

        }
        else {
            launcherRecentwatch.initDate();
            launcherRecentwatch.refreshAllPagedata();
            page.open();
            page.hiFocus("launcher_recent_ul1");
        }
    });
}
function openlauncherfavlist() {
    DBG_INFO("openlauncherfavlist");
    try {
        hiWebOsFrame.createPage("launcher_favoritelist", null, hiWebOsFrame.getCurrentPage(), null, function (page) {
            hiWebOsFrame['launcher_favoritelist'] = page;
            launcherFavlist.initDate();
            launcherFavlist.refreshAllPagedata();
            page.open();
            page.hiFocus("launcher_favor_ul1");
        })
    } catch (e) {
        DBG_ERROR(e.message);
    }
}
//根据键值获取应用
function getAppByKey(k) {
    for (var i = 0; i < applications.length; i++) {
        if (applications[i].key == k)return applications[i];
    }
    return null;
}

function getAppKeyByPageId(pageId) {
    var appKey = [];
    for (var i = 0; i < applications.length && i < 4; i++) {
        if (applications[i].pageId == pageId) {
            appKey = [applications[i].key];
            break;
        }
    }
    return appKey;
}


function openMenuPage() {
    hiWebOsFrame.lockAllKeys("setting");
    if (typeof ginga != UNDEFINED_DEFSTR) {
        ginga.GingaStop();
    }
    //notifyMheg5State(0);
    if (!!hiWebOsFrame.getCurrentPage()) {
        if (hiWebOsFrame.isCurrentModule("livetv")) {
            closeLiveTVModule();
            startQuickSetting(hiWebOsFrame.blankPage);
            // hiWebOsFrame.unLockAllKeys();// delete by jiaguili to fix the setting and dialog_usb conflict
        }
        else if (hiWebOsFrame.getCurrentPage().module == "launcher") {
            hiWebOsFrame.getCurrentPage().hiBlur();
            if (hiWebOsFrame.getHTMLDir() == "rtl") {
            hiWebOsFrame.myLauncher.close();
            }
            startMainSetting(hiWebOsFrame.myLauncher);
        }
        else if (hiWebOsFrame.getCurrentPage().module == "allapps") {
            hiWebOsFrame.getCurrentPage().hiBlur();
            startMainSetting(hiWebOsFrame["launcher_allapps"]);
        }
        else if (hiWebOsFrame.getCurrentPage().module == "accuweather") {
            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            startMainSetting(hiWebOsFrame.blankPage);
        }
        else if (hiWebOsFrame.isCurrentModule("app")) {
            pressMenuOnApp();
        }
        //else if (hiWebOsFrame.isCurrentModule("audioout_popup")) {     //已删
        //    hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker.close();
        //    hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker.destroy();
        //    closeLiveTVModule();
        //    startQuickSetting(hiWebOsFrame.blankPage);
        //}
        else if (hiWebOsFrame.getCurrentPage().module == 'closedcaption') {
           // hiWebOsFrame.lockAllKeys();
            hiWebOsFrame.createPage('setting_sys_qs_page', null, hiWebOsFrame.blankPage, null, function (a) {
                closeLiveTVModule();
                closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                hiWebOsFrame.settingsysqS = a;
                a.open();
                a.hiFocus();
                hiWebOsFrame.createPage('setting_fircls_page', null, hiWebOsFrame.blankPage, null, function (b) {
                    hiWebOsFrame.settingsFirst = b;
                    hiWebOsFrame.unLockAllKeys("setting");
                });
            });


        }
        else {
            debugPrint("222222222222222222222222");
         //   hiWebOsFrame.lockAllKeys();
            hiWebOsFrame.createPage('setting_sys_qs_page', null, hiWebOsFrame.blankPage, null, function (a) {
                hiWebOsFrame.settingsysqS = a;
                hiWebOsFrame.destroyModule(hiWebOsFrame.getCurrentPage().module, null);
                hiWebOsFrame.settingsysqS.open();
                hiWebOsFrame.settingsysqS.hiFocus();
                hiWebOsFrame.createPage('setting_fircls_page', null, hiWebOsFrame.blankPage, null, function (b) {
                    hiWebOsFrame.settingsFirst = b;
                    hiWebOsFrame.unLockAllKeys("setting");
                });
            });
        }
    }
    else {
        hiWebOsFrame.unLockAllKeys("setting");
    }
}

//function SystemInitBrand()
//{
//	try{
//		var brand=model.system.getCurBrand();
//	}catch (e){
//		DBG_ERROR(e.message);
//		brand="his";
//	}
//	debugPrint("the tv brand is "+brand);
//	var string=Hisense.File.read("brandcode",1);
//	if((typeof string!="string")||(string!=brand))
//	{
//		Hisense.File.write("brandcode",brand,1);
//	}
//	hiWebOsFrame.setCurrentBrand(brand);
//}

function SystemInit() {
    keyboard.set_listen(0);
    debugAlways("gui loaded.");
    // hiWebOsFrame.registerKeyCodesNormal();
    //add by ghl; 系统初始化时调用，用于获取ui初始化完成之前ci的相关消息
    try {
        // model.ci.getCamCount();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
//	    SystemInitBrand();
        initPVRFlag();
        var val = model.hisfactory.getStateOpen();
        if (0 == val && !isFileExist("his_factory_do_ok_over", 0)) {
            hiWebOsFrame.registerKeyCodesNormal();
            isSystemInited = true;
            //var isStartFromNetfliex = (1 == model.system.getOpenFromStandby());
            // var isWizardFlag = getWizardSetFlag();
            //debugPrint("================================+++++++++++++++++++==============isWizardFlag = " + isWizardFlag, DebugLevel.ALWAYS);
            //epos count down box-2015-1-15
            //if (!isStartFromNetfliex && ((isWizardFlag == 2 ) || (isWizardFlag == 1))) { //if start from setting-reset and factory ok
			if (((isWizardFlag == 2 ) || (isWizardFlag == 1)) && model.system.getUserMode() != 1) { //if start from setting-reset and factory ok
                //hiWebOsFrame.isStartWizardFromboot = 1;
                startWizardFromboot();
            }
            else {
                startLiveTvFirst(isStartFromNetfliex);
                onTvsetLocationChaged(initCountryCode);
                if (!!isStartFromNetfliex) {
                    if (model.system.getUserMode() == 1) {
                        startRetailmodeTimer(true);
                        debugPrint("startRetailmodeTimer is called!", DebugLevel.ALWAYS);
                    }
                }
                else {
                    if (model.system.getUserMode() == 1) {
                        var tvInfo = model.basicSetting.getTvsetLocation();
                        if ('EM' == InitArea && tvInfo.toLowerCase().indexOf('aus') > -1) {
                            DBG_INFO('curCountry aus, 3s later start epos');
                            setTimeout(function () {
                                startePosCountDown();
                                DBG_ALWAYS("startePosCountDown is called!");
                            }, 4000);
                        } else {
                            startePosCountDown();
                            DBG_ALWAYS("startePosCountDown is called!");
                        }
                    }
                }
            }
        }
        else {
            //isGUILoaded = true;
            //keyboard.registerKeyCodes([VK_HOME, VK_FAC_M]);
            try {
                hiWebOsFrame.createPage('app_factory', null, null, null, function (fac_page) {
                    hiWebOsFrame["app_factory"] = fac_page;
                    fac_page.hiFocus();
                    keyboard.set_listen(1);
                });
            }
            catch (ex) {
                keyboard.set_listen(1);
                DBG_ERROR(ex.message);
            }
        }
        onStateOpenChaged(val);
        model.hisfactory.onStateOpenChaged = onStateOpenChaged;
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//var g_volume = 0;
//var g_mute = 1;
function initModelOnChangeEvent() {
    model.network.onEnumNetworkAvailableChaged = onNetworkStateChanged;
    model.cec.onIsAudioDeviceExistChaged = onAudioDeviceExistChanged;
    model.cec.onHdmiDevicesArcStateChaged = onARCStateChanged;
    model.timerfunc.onNewTimeZoneChaged = onNewTimezoneChanged;
    model.timerfunc.onTimeFormatChaged = onTimeFormatChanged;
    model.hotel.onMaxVolumeChaged = onHotelVolumeChanged;
    model.hotel.onMinVolumeChaged = onHotelVolumeChanged;
    model.hotel.onHotelModeChaged = onHotelModeChanged;
    model.timerfunc.onHotelmodeSleepTimerChaged = onTvSwitchTriggerCauseChanged;
    model.source.onInputMhlAvailableChaged = onInputMhlAvailableChanged;
    model.system.onPVRStatusChanged = onPVRStatusChanged;
    model.timerfunc.onCurTimeChaged = onCurTimeChanged;
    model.system.onEnterSuspendChanged = onEnterSuspendChanged;
    model.fvpepg.onFEPGAppURLChanged = onFEPGAppURLChanged;
}
function openChannelManager(originPage) {
    if(hiWebOsFrame.getCurrentArea() == 'EU'){
        if(hiWebOsFrame.isCurrentModule("livetv")){
        isFavPage= livetvchlist.getCurrentList().name;
        if(isFavPage=="FAV1"||isFavPage=="FAV2"||isFavPage=="FAV3"||isFavPage=="FAV4")
        {
            hiWebOsFrame.startLoading();
            hiWebOsFrame.createPage("channel_manager_fav_edit", null, originPage, null, function (b) {
                hiWebOsFrame.channel_manager_fav_edit = b;
                channelmanagerfav.onOpenChlManagerfavNew();
            })
        }
        else {
            hiWebOsFrame.startLoading();
            hiWebOsFrame.createPage("channel_manager_bg", null, originPage, null, function (a) {
                hiWebOsFrame.channel_manager_bg = a;
                a.operateData.ListRights = livetvchlist.getCurrentList().rights;
                channelmanagerbg.onOpenChlManagerBgNew();
            })
        }
        }else{
            hiWebOsFrame.startLoading();
            hiWebOsFrame.createPage('channel_manager_page', null, originPage, null, function (ChannelManagerPage) {
                hiWebOsFrame.channel_manager_page = ChannelManagerPage;
                channelmanagerpage.openChannelManager();
                //ChannelManagerPage.open();
                //ChannelManagerPage.hiFocus();
            });
        }
    }else{
        hiWebOsFrame.startLoading();
        hiWebOsFrame.createPage('channel_manager_page', null, originPage, null, function (ChannelManagerPage) {
            hiWebOsFrame.channel_manager_page = ChannelManagerPage;
            channelmanagerpage.openChannelManager();
            //ChannelManagerPage.open();
            //ChannelManagerPage.hiFocus();
        });
    }
}
function startDialogNetwork(originPage) {
    hiWebOsFrame.lockAllKeys("create_network_dialog");
    if (!!hiWebOsFrame["dialog_network"]) {
        dlgNetwork.showNetworkBrokenDialog(originPage);
        hiWebOsFrame.unLockAllKeys("create_network_dialog");
    }
    else {
        hiWebOsFrame.createPage('dialog_network', null, originPage, null, function (a) {
            hiWebOsFrame["dialog_network"] = a;
            dlgNetwork.showNetworkBrokenDialog(originPage);
            hiWebOsFrame.unLockAllKeys("create_network_dialog");
        });
    }
}

function startLiveTv() {
    DBG_INFO("startLiveTv");
    var isUK = hiWebOsFrame.getCurrentCountry() == "UK";
    ENABLE_FVP = tv ? (1 == parseInt(model.basicSetting.getDisclaimer()) && isUK) : true;
    hisenseUITZSeconds = parseInt(model.timerfunc.getNewTimeZone());
    setSATimezoneOffset();
    hisenseUITimeFormat = parseInt(model.timerfunc.getTimeFormat());
    recheckDSTSeconds();

    tv && keyboard.set_listen(0);
    showLiveTVUI();
    openDebugLog();
    tv && keyboard.set_listen(1);
    doSomethingInit();
    hiWebOsFrame[LiveTVModule.VOLUME].open();
    var currUsemodeIdx = model.system.getUserMode();
    if (currUsemodeIdx == 1) //shop mode下打开epos贴
    {
        startRetailmodeTimer(true);
        startePos(true);
    }
    else {
        startRetailmodeTimer(false);
    }
}
function doSomethingInitForWizard(){
    initDlnaMode();
    HeadphoneInsertInit();
}
function doSomethingInit() {
    FirPageSndIdxInit();
    initNetworkPara();
    initMHLPara();
    //TODO: decide if need to launch Wizard
    getmenutimeout();
    initModelOnChangeEvent();
    StartInitSetting();
    //startDialogNetwork();
    PicasaFlagInit();
    initDlnaMode();
    hisenseUIConfig = readFileFromNative("hisenseUI/config.ini", 1);
    defCityList = readFileFromNative("launcher/data/weather/cities", 2);
    SettingChnlCIOnChaged();    //添加CI相关
    Mheg5AboutInit();
    GingaAboutInit();
    BluetoothInit();
    Glass3DInit();
    getCurrentTVNO();
    HeadphoneInsertInit();


    hotelVolume.switch = parseInt(model.hotel.getHotelMode());
    hotelVolume.maxVolume = parseInt(model.hotel.getMaxVolume());
    hotelVolume.minVolume = parseInt(model.hotel.getMinVolume());
    HotelModeKeyboardLock();

    //schedule.getScheduleList(false);

    //initDVBOperatorInfo();
    try {
        AudioDevice.CEC_CTRL = model.cec.getFunctionality();
        AudioDevice.EXIST = model.cec.getIsAudioDeviceExist();
        AudioDevice.ARC_STATE = model.cec.getHdmiDevicesArcState();
        MHLDevice.AVAILABLE = model.source.getInputMhlAvailable();
        TeletextDevice.status = model.system.getTeletextStatus();
        model.system.onTeletextStatusChaged = onTeletextStatusChaged;
        DBG_INFO("TeletextDevice.status" + TeletextDevice.status);
        model.softupdate.StartSearch(100);
        debugPrint("start auto update thread");
        model.system.onAutoSleepSwitchchanged = onAutoSleepSwitchchanged;
        model.pvr.onRecordStateChaged = pvrRecordStateChanged;//录制状态监听
        model.pvr.onScheduleItemChaged = onScheduleItemChaged;//预约录制到
        model.pvr.onParAvailableChaged = pvrRecorderMediaAvailableChaged;//监听录制过程中USB被拔出
        model.system.setPVRStandby(2);
        clearTimeout(usbNfyTimer);
        usbNfyTimer = setTimeout(function () {
            model.usb.onVstrLatestEventChaged = onUsbStateChanged;
        }, 20000);
        var sleepswitch=model.system.getAutoSleepSwitch();
        var countrycode=model.basicSetting.getTvsetLocation();
        if ((hiWebOsFrame.getCurrentArea() == "EU")
            &&countrycode!="RUS"
            &&countrycode!="UZB"
            &&countrycode!="KGZ"
            &&countrycode!="TJK"
            && sleepswitch > 0)
        {
            g_systemautosleepflag = sleepswitch;
            var sleepvalue=[0,3,4];
            var timer=4;
            if(sleepswitch<3)
            {
                timer = sleepvalue[sleepswitch];
            }
            g_systemautosleepTimer = setTimeout(function () {
                onTvSwitchTriggerCauseChanged(-3)
            }, timer * 3600 * 1000);
            debugPrint(" start the auto sleep timer");
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    //添加获取platform信息的接口
    initPlatformParam();
    if(1 != model.system.getOpenFromStandby()){
    DBG_ALWAYS("[startopera4x] in doSomethingInit.");	
    startOpera4x();
    }
}

function showLiveTVUI(){
    DBG_INFO("showLiveTVUI");
    hiWebOsFrame["livetv_volume"].open();
    livetvmain.initLiveTVMain();
    if(!livetvchlist.getChannelListInited()){
        livetvchlist.initChannelList();
    }
    DBG_INFO("showLiveTVUI isStartFromNetfliex" + isStartFromNetfliex);
    if(isStartFromNetfliex){
        openLiveTVModule([Msg.INFO, 0]);
    }
    else{
        hiWebOsFrame["livetv_main"].open();
        hiWebOsFrame["livetv_main"].hiFocus();
    }
}

function startLiveTvFirst() {
    DBG_INFO("startLiveTvFirst");
    var isUK = hiWebOsFrame.getCurrentCountry() == "UK";
    ENABLE_FVP = tv ? (1 == parseInt(model.basicSetting.getDisclaimer()) && isUK) : true;
    hisenseUITZSeconds = parseInt(model.timerfunc.getNewTimeZone());
    setSATimezoneOffset();
    hisenseUITimeFormat = parseInt(model.timerfunc.getTimeFormat());
    recheckDSTSeconds();

    showLiveTVUI();
    openDebugLog();
    // debugAlways("gui loaded");
    tv && keyboard.set_listen(1);
    doSomethingInit();
    if (1 == model.system.getOpenFromStandby()) {
        closeLiveTVModule();
        model.system.setOpenFromStandby(0);
        var curAllAppData = SettingGetApplist();
        var countrycode = model.basicSetting.getTvsetLocation();
        var currentArea = hiWebOsFrame.getCurrentArea();
        DBG_INFO("curAllAppData:" + JSON.stringify(curAllAppData) + ",curArea:" + currentArea + ",curCountry:" + countrycode);
        if ((currentArea == 'SA') && (curAllAppData.length == 0) && (countrycode == 'PHL')) {
            sendAM(":dtv_app_mtk,am,:hotkey=0x8f000");
            sendAM(":am,dtv_app_mtk,:resume=dtv");
            showMsg("", "The Netflix service is not available currently in this country.", 3, openLiveTVModule);
            return;
        }

        asyncStartApp("app_netflix", "netflix", false, false, true, true);
    }
    else if (needOpenLauncherFromFac) {
        closeLiveTVModule();
        if (hiWebOsFrame.isPageExist("myLauncher") || hiWebOsFrame.isPageExist("OEMlauncherPage")
            ||hiWebOsFrame.isPageExist("VIDAALiteNavPage")) {
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
        }
        else {
            if (g_launcherBrand == "SA_OEM") {
                createSAOEMLauncher();
            }else if(g_launcherBrand == "VIDAALite"){
                createVIDAALitelauncher();
            }
            else {
                createModulePage('myLauncher');
            }
        }
        needOpenLauncherFromFac = needReumeLauncherFromFac = false;
    }

}
function readUSBWhenStartup() {
    var usbList = readFileFromNative("usbs", 0);
    DBG_INFO(objToString(usbList));
    if (null != usbList) {
        if (!hiWebOsFrame["dialog_usb"]) {
            hiWebOsFrame.createPage("dialog_usb", null, null, null, function (usbPage) {
                hiWebOsFrame["dialog_usb"] = usbPage;
                popuUpUsbDialog();
            });
        }
        else {
            popuUpUsbDialog();
        }
    }
}

function getcurLang() {
    //临时修改，以后修改为统一的函数
    try {
        var osdlanglist = getSettingOSDLanguageMapList();
        var index = _getIndexByNum(osdlanglist, model.language.getOsd());
        debugPrint("the the language index " + index);
        if (index < 0) index = 0;
        hiWebOsFrame.setLanguage(osdlanglist[index].code);
    }
    catch (e) {
        DBG_ERROR(e.message)
    }

}

function getmenutimeout() {
    try {
        var timelength = model.basicSetting.getMenuDelayDisappear();
        debugPrint("to set the menu timeoout length" + timelength);
        hiWebOsFrame.setAutoCloseTimeLength(timelength);
    }
    catch (e) {
        DBG_ERROR(e.message)
    }
}
function startQuickSetting(origin) {
    DBG_INFO("start quick setting. origin = " + (null == origin ? "null" : origin.id));
    try {
       // hiWebOsFrame.lockAllKeys();
        hiWebOsFrame.createPage('setting_sys_qs_page', null, origin, null, function (a) {
            hiWebOsFrame.settingsysqS = a;
            a.open();
            a.hiFocus();
            hiWebOsFrame.createPage('setting_fircls_page', null, origin, null, function (b) {
                hiWebOsFrame.settingsFirst = b;
                hiWebOsFrame.unLockAllKeys("setting");
            });
        });
    } catch (e) {
        DBG_ERROR(E.message);
        hiWebOsFrame.unLockAllKeys("setting");
    }
}

function startMainSetting(origin) {
    DBG_INFO("start main setting. origin = " + (null == origin ? "null" : origin.id));
    //hiWebOsFrame.startLoading();
    var priority = (!!origin && origin.priority >= 1000) ? (origin.priority + 2) : 1000;
    try {
       // hiWebOsFrame.lockAllKeys();
        hiWebOsFrame.createPage('setting_sys_qs_page', null, origin, priority, function (a) {
            hiWebOsFrame.settingsysqS = a;
            hiWebOsFrame.settingsysqS.origin = origin;
            hiWebOsFrame.createPage('setting_fircls_page', null, origin, priority, function (b) {
                hiWebOsFrame.settingsFirst = b;
                hiWebOsFrame.settingsFirst.origin = origin;
                hiWebOsFrame.settingsysqS.open();
                hiWebOsFrame.settingsysqS.hiFocus();
                hiWebOsFrame.unLockAllKeys("setting");
                //hiWebOsFrame.endLoading();
            });
        });
    } catch (e) {
        DBG_ERROR(e.message);
        hiWebOsFrame.unLockAllKeys("setting");
    }
}

function startSetting() {
    hiWebOsFrame.createPage('setting_sys_qs_page', null, null, null, function (qspage) {//rmdr_edit_page
        hiWebOsFrame.settingsysqS = qspage;
        qspage.open();
        qspage.hiFocus();
        debugPrint("new record tip dialog!");
        hiWebOsFrame.createPage('setting_fircls_page', null, null, null, function (a) {
            // a.close();
//            a.open();
//            a.hiFocus();
            hiWebOsFrame.settingsFirst = a;
        });
    });



}
function startPRDialog() {
    hiWebOsFrame.createPage('beginRecordDialog', null, null, null, function (a) {//pvrTshiftShowDialogpvrOrtShiftDialogPage_id
        hiWebOsFrame.PvrstartDialog = a;
        a.open();
        a.hiFocus();
        debugPrint("pvr_tshifdialog.")
    });
}

//function boeSetMuteFlagEnterWizard(flag) {
//    hiWebOsFrame.isMuteBeforeWizard = flag;
//}
//function is_mute_before_enter_wizard() {
//    if (hiWebOsFrame.isMuteBeforeWizard > 0) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}

function start_wizard() {
    testAddSDKIntervalFun();
    hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
//        debugPrint("@@@@@@@@@@@@@@@@");
        hiWebOsFrame.boe_bg_page_id = a;

        hiWebOsFrame.createPage('boe_lang_page_id', null, null, null, function (b) {
//            debugPrint("11111111111111111111111");
            hiWebOsFrame.boe_lang_page_id = b;
            b.open();
            b.hiFocus();
            hiWebOsFrame.boe_bg_page_id.open();

        })
    });


}
//function WizardEnterPage(wizardstep)
//{
//    switch (wizardstep) {
//        case 4:
//            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
////        debugPrint("@@@@@@@@@@@@@@@@");
//                hiWebOsFrame.boe_bg_page_id = a;
//
//                hiWebOsFrame.createPage('boe_lang_page_id', null, null, null, function (b) {
////            debugPrint("11111111111111111111111");
//                    hiWebOsFrame.boe_lang_page_id = b;
//                    b.open();
//                    b.hiFocus();
//                    hiWebOsFrame.boe_bg_page_id.open();
//
//                })
//            });
//            break;
//        case 5:
//            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
////        debugPrint("@@@@@@@@@@@@@@@@");
//                hiWebOsFrame.boe_bg_page_id = a;
//
//                hiWebOsFrame.createPage('boe_cty_page_id', null, null, null, function (b) {
////            debugPrint("11111111111111111111111");
//                    hiWebOsFrame.boe_cty_page_id = b;
//                    b.open();
//                    b.hiFocus();
//                    hiWebOsFrame.boe_bg_page_id.open();
//
//                })
//            });
//            break;
//        case 6:
//            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
////        debugPrint("@@@@@@@@@@@@@@@@");
//                hiWebOsFrame.boe_bg_page_id = a;
//
//                hiWebOsFrame.createPage('boe_timezone_page_id', null, null, null, function (b) {
////            debugPrint("11111111111111111111111");
//                    hiWebOsFrame.boe_timezone_page_id = b;
//                    b.open();
//                    b.hiFocus();
//                    hiWebOsFrame.boe_bg_page_id.open();
//
//                })
//            });
//            break;
//        case 7:
//            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
////        debugPrint("@@@@@@@@@@@@@@@@");
//                hiWebOsFrame.boe_bg_page_id = a;
//
//                hiWebOsFrame.createPage('boe_usemode_page_id', null, null, null, function (b) {
////            debugPrint("11111111111111111111111");
//                    hiWebOsFrame.boe_usemode_page_id = b;
//                    b.open();
//                    b.hiFocus();
//                    hiWebOsFrame.boe_bg_page_id.open();
//
//                })
//            });
//            break;
//        case 8:
//            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
////        debugPrint("@@@@@@@@@@@@@@@@");
//                hiWebOsFrame.boe_bg_page_id = a;
//
//                hiWebOsFrame.createPage('boe_disclaimer_page_id', null, null, null, function (b) {
////            debugPrint("11111111111111111111111");
//                    hiWebOsFrame.boe_disclaimer_page_id = b;
//                    b.open();
//                    b.hiFocus();
//                    hiWebOsFrame.boe_bg_page_id.open();
//
//                })
//            });
//            break;
//        case 9:
//            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
////        debugPrint("@@@@@@@@@@@@@@@@");
//                hiWebOsFrame.boe_bg_page_id = a;
//
//                hiWebOsFrame.createPage('boe_network_page_id', null, null, null, function (b) {
////            debugPrint("11111111111111111111111");
//                    hiWebOsFrame.boe_network_page_id = b;
//                    b.open();
//                    b.hiFocus();
//                    hiWebOsFrame.boe_bg_page_id.open();
//
//                })
//            });
//            break;
//        case 10:
//            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
////        debugPrint("@@@@@@@@@@@@@@@@");
//                hiWebOsFrame.boe_bg_page_id = a;
//
//                hiWebOsFrame.createPage('boe_input_source_page_id', null, null, null, function (b) {
////            debugPrint("11111111111111111111111");
//                    hiWebOsFrame.boe_input_source_page_id = b;
//                    b.open();
//                    b.hiFocus();
//                    hiWebOsFrame.boe_bg_page_id.open();
//
//                })
//            });
//            break;
//        default:
//            break;
//
//    }
//}
//function startWizard(flag) {
//    hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a)
//    {
//
//        hiWebOsFrame.boe_bg_page_id = a;
//        hiWebOsFrame.createPage('boe_lang_page_id', null, null, null, function (b)
//        {
//            setWizardSetFlag(flag);
//            if (tv == true) {
//                model.chScan.setStopallterminal(1);
//            }
//            hiWebOsFrame.boe_lang_page_id = b;
//            b.open();
//            b.hiFocus();
//            hiWebOsFrame.boe_bg_page_id.open();
//            boeChangeCurrSep(1);
//        })
//    });
//}
function setDefaultHDMI1forStore(){
    var defSource = 'HDMI 1';
    var sourceidx = 0;
    var sourceItem=model.source.getInputName();
    for(var id=0;id<sourceItem.length/6;id++)
    {
        if(defSource == sourceItem[id*6+1])
        {
            sourceidx = id;
            break;
        }
    }
    model.source.InputSet(id);
    //model.system.setSystemDefaultInput(parseInt(id,10));
}
function startTshift() {
    hiWebOsFrame.createPage('tshiftProgressPage_id', null, null, null, function (a) {//pvrTshiftShowDialog
        //hiWebOsFrame.ptDialog = a;
        //var prgrm = {};
        //prgrm.title = "ttt";
        //hiWebOsFrame.ptDialog.prgrm = prgrm;
        a.open();
        a.hiFocus();
    });

}
//使用
function closePagesOrModuleByPage(page) {
    try {
        debugPrint("close all pages!!!!!!!!!!!!!");
        if (null == page) return;

        if (page.id == 'epos') {
            page.destroy();
        }
//    if (page.id == 'beginRecordDialog') {
//        page.destroy();
//    }
//    if (page.id == 'pvrRecordTip') {
//        page.destroy();
//    }
        else if (page.module == 'livetv') {
            closeLiveTVModule();
        }
        else if (page.module == 'epg') {
            closeEPGModule();
        }
        else if (page.module == "launcher") {
            if (g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite") {
                hiWebOsFrame.myLauncher.close();
            } else {
                launcherNBar.closeLauncher();
            }
        }
        else if (page.module == "dialog") {
            page.close();
        }
        else if (page.module == 'ginga') {
            page.close();
        }
        else if (page.module == "setting" || page.module == "settingfirst") {
            try {
                if (!!hiWebOsFrame.SettingChnlCIPage && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlCIPage.id)) {
                    PageDataChnlCIData.operateData.closedAllPageFuncCalled = true;
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
            hiWebOsFrame.destroyModule("setting");
            hiWebOsFrame.settingsFirst.close(); //该页面有可能不存在
        }
        else if (page.module == "allapps") {
            hiWebOsFrame["launcher_allapps"].close();
        }
        else if (page.module == "accuweather") {
            hiWebOsFrame["accuweather_main"].close();
        }
        else {
            try {
                var pm = page.module;
                hiWebOsFrame.lockAllKeys("destroy[" + pm + "]");
                hiWebOsFrame.destroyModule(page.module, function () {
                    hiWebOsFrame.unLockAllKeys("destroy[" + pm + "]");
                });
            }
            catch (ex) {
                hiWebOsFrame.unLockAllKeys();
                DBG_ERROR(ex.message);
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function tryToCloseLauncher() {
    if(g_launcherBrand == "VIDAALite" && !!hiWebOsFrame.myLauncher){
        hiWebOsFrame.myLauncher.close();
        return;
    }
    if (!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible == true) {
        if (g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite") {
            hiWebOsFrame.myLauncher.close();
        } else {
            launcherNBar.closeLauncher();
        }
    }
}

function tryToCloseAllApps() {
    if (!!hiWebOsFrame["launcher_allapps"] && hiWebOsFrame["launcher_allapps"].visible) {
        hiWebOsFrame["launcher_allapps"].close();
    }
}

function tryToCloseEpg() {
    if (!!hiWebOsFrame["epg"] && hiWebOsFrame["epg"].visible) {
        debugPrint("Try to close epg");
        closeEPGModule();
    }
}

//关闭除当前模块以外的其它模块
function closeDOthersModule(module) {
    debugPrint("________closeDOthersModule function begin____________");
    try {
        var currentSDKPages = hiWebOsFrame.getSDKPages();
        var destroyList = [];
        $.each(currentSDKPages, function (k, v) {
            if ($.inArray(v.module, destroyList) == -1 && v.module != module) {
                destroyList.push(v.module);
            }
        })

        $.each(destroyList, function (k, v) {
            debugPrint("case______" + v);
            switch (v) {
                case "livetv":
                    closeLiveTVModule();
                    break;
                case "epg":
                    closeEPGModule();
                    break;
                case "launcher":
                    if (!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible) {
                        if (g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite") {
                            hiWebOsFrame.myLauncher.close();
                        } else {
                            launcherNBar.closeLauncher();
                        }
                    }
                    break;
                case "allapps":
                    if (!!hiWebOsFrame["launcher_allapps"] && hiWebOsFrame["launcher_allapps"].visible) {
                        hiWebOsFrame["launcher_allapps"].close();
                    }

                    break;
                case "accuweather":
                    if (!!hiWebOsFrame["accuweather_main"] && hiWebOsFrame["accuweather_main"].visible) {
                        hiWebOsFrame["accuweather_main"].close();
                    }

                    break;
                case "epos":
                    if (!!hiWebOsFrame.epos)hiWebOsFrame.epos.destroy();
                    break;
                case "dialog":
                    var dialogIds = ["dialog_common", "dialog_usb", "dialog_network", "dialog_reminder"];
                    dialogIds.forEach(function (val) {
                        if (!!hiWebOsFrame[val]) hiWebOsFrame[val].close();
                    });
                    break;
                case "setting":
                case "settingfirst":
                    hiWebOsFrame.destroyModule("setting");
                    if(hiWebOsFrame.settingsFirst){
                        hiWebOsFrame.settingsFirst.close();
                    }
                    break;
                case "pvr":
                    if (!isMainArchiveRecording()) {
                        if (hiWebOsFrame.pvrPage != null) {
                            debugPrint("hiWebOsFrame.pvrPage !=null__________" + (hiWebOsFrame.pvrPage != null));
                            hiWebOsFrame.pvrPage.close();
                        }
                        debugPrint("destroyModule PVR______________");
                        hiWebOsFrame.destroyModule("pvr");
                    }
                    else {
                        if (hiWebOsFrame.pvrPage != null) {
                            hiWebOsFrame.pvrPage.close();
                        }
                    }
                    break;
                default :
                    try {
                        hiWebOsFrame.lockAllKeys("destroy[" + v + "]");
                        hiWebOsFrame.destroyModule(v, function () {
                            hiWebOsFrame.unLockAllKeys("destroy[" + v + "]");
                        });
                    }
                    catch (ex) {
                        hiWebOsFrame.unLockAllKeys();
                        DBG_ERROR(ex.message);
                    }
                    break;
            }
        });
    }
    catch (ex) {
        DBG_ERROR(ex);
    }
}
//判断除LiveTV Blankpage之外，当前是否有页面显示
function isUIShowingExcludeBlankpage() {
    if (hiWebOsFrame.getOtherConfig().isLiveTVShowing > 0)return true;

    var currentSDKPages = hiWebOsFrame.getSDKPages();
    for (var k = 0; k < currentSDKPages.length; k++) {
        //debugPrint("[xuehongfeng]current pageid"+currentSDKPages[k].id,DebugLevel.ALWAYS);
        //debugPrint("[xuehongfeng]current pageid"+currentSDKPages[k].visible,DebugLevel.ALWAYS);
        if ((currentSDKPages[k].id != "livetv_volume" && currentSDKPages[k].id != "livetv_main" && currentSDKPages[k].id != "app_lau_browser" && currentSDKPages[k].visible == true) || (isCurrentAppHimedia())) {
            //debugPrint("[xuehongfeng] ui return true",DebugLevel.ALWAYS);
            //debugPrint("[xuehongfeng] is CurrentAppHimedia"+isCurrentAppHimedia(),DebugLevel.ALWAYS);
            return true;
        }
    }


    return false;

}
//var isContinueCreate = false;
function createModulePage(pageId, oriPage, afterCreate) {
    !oriPage && (oriPage = null);
//    try {
//        if('myLauncher' == pageId){
//            DBG_INFO('create myLauncher, closeMsgPage');
//            closeMsgPage();
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }

    hiWebOsFrame.startLoading(20, "createModulePage");
    DBG_INFO('create page ' + pageId);
    /*if (!!hiWebOsFrame.pvrPage) {
     hiWebOsFrame.pvrPage.close();
     }*/
    try {
        hiWebOsFrame.setModuleAttr("launcher_allapps", "firstFocusId", firstFocusId_config);
        hiWebOsFrame.setModuleAttr("launcher_allapps", "jsPath", jsPath_config);
        hiWebOsFrame.setModuleAttr("launcher_allapps", "cssPath", cssPath_config);

        hiWebOsFrame.createPage(pageId, null, oriPage, null, function (a) {


            DBG_INFO('create page ' + pageId + ' success');
            hiWebOsFrame.endLoading();
            hiWebOsFrame[pageId] = a;

            //isContinueCreate = false;

            if (!!afterCreate) {
                afterCreate.call(this);
            }
            switch (pageId) {
                case "launcher_stabar":
                    hiWebOsFrame[pageId].open();
                    break;
                case "myLauncher":
                    hiWebOsFrame[pageId].origin = null;
                    //isContinueCreate = true;
                    //createModulePage('launcher_stabar', a);
                    hiWebOsFrame[pageId].hiFocus();
                    break;
                case "accuweather_main":
                    accuMain.initAccuweather();
                    break;
                case "launcher_allapps":

                    if (!!oriPage) a.priority = oriPage.priority + 2;
                    a.open();
                    if (!!oriPage && "launcher" == oriPage.module) {
                        closePagesOrModuleByPage(oriPage);
                    }
                    a.hiFocus(launcherAApps.firstFocusId);
                    break;
                case "dialog_usb":
                    closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                    a.open();
                    a.hiFocus();
                    break;
                default :
                    a.open();
                    a.hiFocus();
                    //DBG_INFO('page callback failed, can not find pageId: ' + pageId, DebugLevel.WARNING);
                    break;
            }

        });
    }
    catch (ex) {
        hiWebOsFrame.endLoading();
        DBG_ERROR("create page[" + pageId + "] error[" + ex.message + "]");
        closeDOthersModule();
        openLiveTVModule();
    }
}

function oneKeyOpenLauncherApp(appType, appUrl) {


    DBG_INFO('prepare to open app: ' + appUrl);

    switch (appType) {

        //case CmdURLType.START_NATIVEAPP:
        //case CmdURLType.START_WEBAPP:
        //    sendCommndToTV(appType, appUrl, true);
        //    break;

        case CmdURLType.HIPAGE:

            if (hiWebOsFrame.isPageExist('myLauncher') || hiWebOsFrame.isPageExist('OEMlauncherPage')
                ||hiWebOsFrame.isPageExist("VIDAALiteNavPage")) {
                if (hiWebOsFrame.isCurrentModule('launcher')) {
                    if (g_launcherBrand == "SA_OEM") {
                        if (OEMCheckCurrFocusOnAllApp() == true) {
                            DBG_ALWAYS("oneKeyOpenLauncherApp:focus on All app");
                            return;
                        } else {
                            DBG_ALWAYS("oneKeyOpenLauncherApp:focus on Launcher");
                            hiWebOsFrame.myLauncher.origin = null;
                            //hiWebOsFrame.myLauncher.open();
                            hiWebOsFrame.myLauncher.hiFocus();
                            OEMLocateAllAppPosition();

                        }
                    }
                    else if(g_launcherBrand == "VIDAALite") {
                        oneKeyOpenVIDAALiteAllAppsPage();
                    }
                    else {
                        if (hiWebOsFrame.getCurrentPageId() == appUrl) return;
                        launcherNBar.setNeedRecoverMute(false);
                        createModulePage(appUrl, hiWebOsFrame.myLauncher);
                    }
                    //hiWebOsFrame.myLauncher.close();
                }
                else if (hiWebOsFrame.isCurrentModule("setting")
                    || hiWebOsFrame.isCurrentModule("settingfirst")) {
                    var settingorigin = hiWebOsFrame.settingsFirst.origin;
                    if (!settingorigin) {//origin loss
                        DBG_ALWAYS("oneKeyOpenLauncherApp:current Model is setting");
                        closeDOthersModule("");
                        if (g_launcherBrand == "SA_OEM") {
                            hiWebOsFrame.myLauncher.origin = null;
                            hiWebOsFrame.myLauncher.open();
                            hiWebOsFrame.myLauncher.hiFocus();
                            OEMLocateAllAppPosition();

                        }
                        else if(g_launcherBrand == "VIDAALite") {
                            VIDAALiteLauncherFirstCreateFromAllAppsKey = true;
                            VIDAALiteLauncherFirstCreateFromSourceKey = false;
                            hiWebOsFrame.myLauncher.origin = null;
                            hiWebOsFrame.myLauncher.open();
                            hiWebOsFrame.myLauncher.hiFocus();
                            oneKeyOpenVIDAALiteAllAppsPage();
                        }
                        else {
                            createModulePage(0, hiWebOsFrame.blankPage);
                        }
                    }
                    else {
                        if (settingorigin.module == "launcher" && settingorigin.visible) {
                            DBG_ALWAYS("oneKeyOpenLauncherApp:current Model is setting");
                            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                            if (g_launcherBrand == "SA_OEM") {
                                hiWebOsFrame.myLauncher.origin = null;
                                hiWebOsFrame.myLauncher.open();
                                hiWebOsFrame.myLauncher.hiFocus();
                                OEMLocateAllAppPosition();

                            }
                            else if(g_launcherBrand == "VIDAALite") {
                                VIDAALiteLauncherFirstCreateFromAllAppsKey = true;
                                VIDAALiteLauncherFirstCreateFromSourceKey = false;
                                hiWebOsFrame.myLauncher.origin = null;
                                hiWebOsFrame.myLauncher.open();
                                hiWebOsFrame.myLauncher.hiFocus();
                                oneKeyOpenVIDAALiteAllAppsPage();
                            }
                            else {
                                launcherNBar.setNeedRecoverMute(false);
                                createModulePage(appUrl, hiWebOsFrame.myLauncher);
                            }
                            //hiWebOsFrame.myLauncher.close();
                        }
                        else if (settingorigin.module == "allapps" && settingorigin.visible) {
                            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                            hiWebOsFrame["launcher_allapps"].open();
                            launcherAApps.focusAllApp(hiWebOsFrame["launcher_allapps"].firstFocusId);
                        }
                        else if (settingorigin.module == "app" && settingorigin.visible) {
                            asyncStartApp(appUrl, appUrl, false, false, false);
                            return false;
                        }
                        else {
                            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                            DBG_ALWAYS("oneKeyOpenLauncherApp:current Model is setting");
                            if (g_launcherBrand == "SA_OEM") {
                                hiWebOsFrame.myLauncher.origin = null;
                                hiWebOsFrame.myLauncher.open();
                                hiWebOsFrame.myLauncher.hiFocus();
                                OEMLocateAllAppPosition();
                            }else if(g_launcherBrand == "VIDAALite") {
                                VIDAALiteLauncherFirstCreateFromAllAppsKey = true;
                                VIDAALiteLauncherFirstCreateFromSourceKey = false;
                                hiWebOsFrame.myLauncher.origin = null;
                                hiWebOsFrame.myLauncher.open();
                                hiWebOsFrame.myLauncher.hiFocus();
                                oneKeyOpenVIDAALiteAllAppsPage();
                            }
                            else {
                                createModulePage(appUrl, hiWebOsFrame.blankPage);
                            }
                        }
                    }
                }
                else {
                    var originPage = hiWebOsFrame.getCurrentPage();
                    if ("app" == originPage.module) {
                        asyncStartApp(appUrl, appUrl, false, false, false);
                        return false;
                    }
                    else if ("bridge" == originPage.module) {
                        //originPage = hiWebOsFrame.getCurrentPage();
                        originPage = hiWebOsFrame.blankPage;
                    }

                    closePagesOrModuleByPage(originPage);
                    DBG_ALWAYS("oneKeyOpenLauncherApp:current Model is other");
                    if (g_launcherBrand == "SA_OEM") {
                        hiWebOsFrame.myLauncher.origin = null;
                        hiWebOsFrame.myLauncher.open();
                        hiWebOsFrame.myLauncher.hiFocus();
                        OEMLocateAllAppPosition();
                    }else if(g_launcherBrand == "VIDAALite") {
                        VIDAALiteLauncherFirstCreateFromAllAppsKey = true;
                        VIDAALiteLauncherFirstCreateFromSourceKey = false;
                        hiWebOsFrame.myLauncher.origin = null;
                        hiWebOsFrame.myLauncher.open();
                        hiWebOsFrame.myLauncher.hiFocus();
                        oneKeyOpenVIDAALiteAllAppsPage();
                    }
                    else {
                        createModulePage(appUrl, originPage);
                    }
                }
            }
            else {
                var originPage = hiWebOsFrame.getCurrentPage();
                if (hiWebOsFrame.isCurrentModule("app")) {
                    asyncStartApp(appUrl, appUrl, false, false, false);
                    return false;
                }
                else if (hiWebOsFrame.isCurrentModule("setting")
                    || hiWebOsFrame.isCurrentModule("settingfirst")) {
                    var settingorigin = hiWebOsFrame.settingsFirst.origin;
                    if (!!settingorigin && settingorigin.module == "app") {
                        asyncStartApp(appUrl, appUrl, false, false, false);
                        return false;
                    }
                }

                closePagesOrModuleByPage(originPage);

                if (g_launcherBrand == "SA_OEM") {
                    hiWebOsFrame.startLoading(20, "createModulePage");
                    hiWebOsFrame.createPage("OEMlauncherPage", null, null, null, function (page) {
                        hiWebOsFrame.myLauncher = page;
                        hiWebOsFrame.myLauncher.origin = null;
                        hiWebOsFrame.createPage("launcher_stabar", null, page, null, function (state_bar) {
                            hiWebOsFrame["launcher_stabar"] = state_bar;
                            hiWebOsFrame.endLoading();
                            page.open();
                            page.hiFocus();
                            OEMLocateAllAppPosition();
                            launcherSBar.openOEMStateBar();
                        });
                    });

                }
                else if (g_launcherBrand == "VIDAALite") {
                    hiWebOsFrame.startLoading(20, "createModulePage");
                    hiWebOsFrame.createPage("VIDAALiteNavPage", null, null, null, function (page) {
                        hiWebOsFrame.myLauncher = page;
                        hiWebOsFrame.myLauncher.origin = null;
                        page.open();
                        VIDAALiteLauncherFirstCreateFromAllAppsKey = true;
                        VIDAALiteLauncherFirstCreateFromSourceKey = false;
                        page.hiFocus();
                        hiWebOsFrame.endLoading();
                    });
                }
                else {
                    hiWebOsFrame.createPage('myLauncher', null, null, null, function (pageNavBar) {
                        hiWebOsFrame[launcherNBar.id] = pageNavBar;
                        launcherNBar.initLauncherData(false);
                        hiWebOsFrame.createPage('launcher_stabar', null, pageNavBar, null, function (pageStateBar) {
                            hiWebOsFrame.myLauncher = pageNavBar;
                            hiWebOsFrame[launcherSBar.id] = pageStateBar;
                            //hiWebOsFrame.endLoading();
                            createModulePage(appUrl, originPage);
                        });
                    });
                }
            }
            break;

        default :
            DBG_INFO('can not find this app type', DebugLevel.ERROR);
            break;
    }

}
function enterWizardInitPara() {
    //TODO: init environment to show FTE
    keyboard.set_listen(1);
//    closeLiveTVModule();

    closeDOthersModule("wizard");// closeDOthersModule("fte");
    //register callback to listen FTE status
    try {
        model.system.onFirstInstallationChaged = null;
        model.system.onFirstInstallationChaged = onFTEClosed;
    }
    catch (e) {
    }
    startRetailmodeTimer(false);
}
function onFTEClosed(ret) {
    debugPrint("[fte]onFTEClosed:" + ret);
    if (ret == 1) {//FTE need to stop
        //modeljs.sendam(":am,am,:stop=lau_browser");
        closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
        model.system.onFirstInstallationChaged = null;
        //TODO:unmute sound
        hiWebOsFrame.registerKeyCodesNormal();
//        hiWebOsFrame.blankPage.open();
        if (model.system.getUserMode() == 1) {
            startRetailmodeTimer(true);
        }
        //if(!m_LiveTvIsOn){
        startLiveTv();
        initDlnaMode();
        //}
        resumeDTV();
    }
    else if (ret == 11) {//FTE enter into ePos
        closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
        model.system.onFirstInstallationChaged = null;
        Hisense.File.write(RETAILMODE_FLAG_FILE, "open", 0);
        Hisense.File.write("wizard", "close", 0);
        setWizardSetFlag(10);
        hiWebOsFrame.registerKeyCodesNormal();
        if (m_retailmodeTimer == null) {
            startRetailmodeTimer(true);
        }
        startLiveTv();
        initDlnaMode();
        startePos(true);
    }
}
function fte_clear_localStorage() {
    for (var i = localStorage.length - 1; i >= 0; i--) {
        var key = localStorage.key(i);
        if (key.substring(0, 4) === "fte_") {
            //-GHL_DEL-//console.log("Removing [" + key + "] from localStorage");
            localStorage.removeItem(key);
        }
    }
}

/*******************************************************************
 name:startWizard
 description: launch Wizard
 input: 0: launch wizard from factory OK;
 1: launch wizard from factory reset(wizard need to clear history);
 2: launch wizard from setting(wizard need to clear history)
 10: restart wizard;
 11: launched ePos from wizard
 output:
 return
 *******************************************************************/
function startWizard(fromWhere) {
    setboeSetFlag(fromWhere);
    switch (fromWhere) {
        case 2:
            startWizardFromResetFac();
            break;
        case 3:
            startWizardFromSetting();
            break;
        default:
            break;
    }
}

function enterBoeInitPara() {
    keyboard.set_listen(1);
    closeDOthersModule("wizard");// closeDOthersModule("fte");
    testAddSDKIntervalFun();
    if (tv == true) {
        model.cec.setIsMiracastExist(1);    //关闭cec消息开关
        pauseDTV();
        setTimeout(function () {
            var musicPath = "file:///3rd_rw/UI/hisenseUI/wizard_bg.mp3";
            model.mpctrl.PlayMusic(musicPath);
        }, 500);
        startRetailmodeTimer(false);
        model.network.setEnumNetworkConfig(1);
        if(getCurrVeraForWizard()=='EU' && model.system.getWizardStep() < 2)   //开机时，只有是在国家页之前的页面才读model并写currentcty.txt文件
        {
            var countrycode = model.basicSetting.getTvsetLocation();
            writeFileToNative("hisenseUI/currentcty.txt", countrycode, 1);
            var zonecode = model.timerfunc.getNewTimeZone();
            var timezonecodeJson = {};
            timezonecodeJson.timezonecode = zonecode;
            writeFileToNative("hisenseUI/currentzone.json", objToString(timezonecodeJson), 1);
        }
    }

}
function EnterWizardFrom(wizardstep) {
    debugPrint("[xuehongfeng]" + wizardstep, DebugLevel.ALWAYS);
    switch (wizardstep) {
        case 1:
            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
                hiWebOsFrame.boe_bg_page_id = a;

                hiWebOsFrame.createPage('boe_lang_page_id', null, null, null, function (b) {
                    hiWebOsFrame.boe_lang_page_id = b;
                    b.open();
                    b.hiFocus();
                    hiWebOsFrame.boe_bg_page_id.open();
                })
            });
            break;
        case 2:
        case 3:
            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
                hiWebOsFrame.boe_bg_page_id = a;

                hiWebOsFrame.createPage('boe_cty_page_id', null, null, null, function (b) {
                    hiWebOsFrame.boe_cty_page_id = b;
                    b.open();
                    b.hiFocus();
                    hiWebOsFrame.boe_bg_page_id.open();

                })
            });
            break;

        case 4:
        case 5:
                hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
                    hiWebOsFrame.boe_bg_page_id = a;
                    hiWebOsFrame.createPage('boe_disclaimer_page_id', null, null, null, function (b) {
                        hiWebOsFrame.boe_disclaimer_page_id = b;
                        b.open();
                        b.hiFocus();
                        hiWebOsFrame.boe_bg_page_id.open();

                    })
                });

            break;
        case 6:
                hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
                    hiWebOsFrame.boe_bg_page_id = a;
                    hiWebOsFrame.createPage('boe_complete_page_id', null, null, null, function (b) {
                        hiWebOsFrame.boe_complete_page_id = b;
                        b.open();
                        b.hiFocus();
                        hiWebOsFrame.boe_bg_page_id.open();

                    })
                });

            break;
        default:
            hiWebOsFrame.createPage('boe_bg_page_id', null, null, null, function (a) {
                hiWebOsFrame.boe_bg_page_id = a;

                hiWebOsFrame.createPage('boe_lang_page_id', null, null, null, function (b) {
                    hiWebOsFrame.boe_lang_page_id = b;
                    b.open();
                    b.hiFocus();
                    hiWebOsFrame.boe_bg_page_id.open();

                })
            });
            break;


    }


}
function startWizardFromboot() {
    model.sound.setMainMute(0);
    doSomethingInitForWizard();
    vol.openMutePage();
    enterBoeInitPara();
    var wizardstep = model.system.getWizardStep();
    debugPrint("[xuehongfengwizardstep]" + wizardstep, DebugLevel.ALWAYS);
    EnterWizardFrom(wizardstep);
}
function startWizardFromResetFac() {
    enterBoeInitPara();
    if (tv == true) {
        //var mute = model.sound.getMainMute();
        //debugPrint("get mute flag" + mute, DebugLevel.ALWAYS);
        //boeSetMuteFlagEnterWizard(mute);
        model.sound.setMainMute(1);
        debugPrint("close mute page:", DebugLevel.ALWAYS);
        vol.closeMutePage();
        model.system.setWizardStep(0);
    }
    start_wizard();
}
function startWizardFromSetting() {
    enterBoeInitPara();
    if (tv == true) {
        //var mute = model.sound.getMainMute();
        //debugPrint("get mute flag" + mute, DebugLevel.ALWAYS);
        //boeSetMuteFlagEnterWizard(mute);
        //model.sound.setMainMute(1);
        //debugPrint("close mute page:", DebugLevel.ALWAYS);
        //vol.closeMutePage();
        model.system.setWizardStep(0);

    }
    start_wizard();
}
function getCountryNamebyCode(code)
{
    var countrymap = getSettingCountryMapList();
    var countrycode = [];
    for(var i=0;i<countrymap.length;i++)
    {
        countrycode.push(countrymap[i].code);
    }
    var index=_getIndex(countrycode,code);
    return countrymap[index].name;

}
/*
 * 商场模式和home模式切换提示框
 * 说明：
 *   商场模式开机后提示用户是否切换模式
 * */
function startePosCountDown() {
    debugPrint("startePosCountDown is calling!");
    closeDOthersModule("epos");
    setTimeout(function () {
        if (hiWebOsFrame.getIsLoading() || hiWebOsFrame.getIsLocking() || hiWebOsFrame.isCurrentPageBeProtected()) {
            DBG_ERROR("Locking or loading now  , can not popup the eposCountDown page!");
            startRetailmodeTimer(true);
            return false;
        }
        else {
            //model.video.setEnumPictureMode(VideoModelDefines.SL2_TVAPI_I32_VIDEO_ENUM_PICTURE_STANDARD);
            closeDOthersModule("epos");
            createModulePage("setting_epos_countdown_page");
        }
    }, 6000);
}
/*
 * 打开epos
 * @param
 *   show: true-open epos page and change RETAILMODE_FLAG_FILE to open; false-change RETAILMODE_FLAG_FILE to close;
 * */
var startEUXT910EPOS = false;
var flushUITimer = null;
function startePos(show) {
    debugPrint('startePos show:' + show);
    if (show) { //show
        if (!isEUXT910()) {
            try {
                if (hiWebOsFrame.getCurrentPageId() == null) {
                    debugPrint("current page is null!");
                    return;
                }

                //debugPrint("current page is other pages!");
                debugPrint("current page is: " + hiWebOsFrame.getCurrentPageId());
                //closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                //closeDOthersModule("epos");//解决多页面叠加，只关闭当前页面的问题
                //绕过第一次进入时的KEYUP事件。
                hiWebOsFrame.startLoading(5, "epos");
                setTimeout(function () {
                    try {
                        hiWebOsFrame.createPage("epos", null, null, null, function (a) {
                            debugPrint('tabindex:' + eposPageData.operateData.tabIndex);
                            debugPrint("[epos] start ePos!!!!!!");
                            hiWebOsFrame.epos = a;
                            if (checkAndCloseIfAppOn(hiWebOsFrame.epos)) {
                                return false;
                            }
                            else {
                                closeDOthersModule("epos");
                            }
                            a.open();
                            a.hiFocus();
                        });
                        Hisense.File.write(RETAILMODE_FLAG_FILE, "open", 0); //write data to /tmp/retailmode. open: running, close: stopped
                        setHalfAnHourTimer(true);
                        //hiWebOsFrame.endLoading("epos");
                    }
                    catch (ex) {
                        debugPrint("fail to open epos" + ex.message, DebugLevel.ERROR);
                    }
                }, 500);


            }
            catch (ex) {
                debugPrint("error: " + ex.message);
            }
        } else {
            try {
                debugPrint("[epos]start ePos!!", DebugLevel.ALWAYS);
                try{
                //停止NETFLIX
                sendAM(":am,netflix,:stop=netflix");
                //关闭UI刷新
                }
                catch (ex){
                    DBG_ERROR(ex.message);
                }
//                if (tv) {//tony+
//                    ccControl = model.closedcaption.getControl();
//                    model.closedcaption.setControl(0);
//                }
                startEUXT910EPOS = true;
                var url = "/3rd_rw/UI/hisenseUI/modulePages/epos/EU/epos_xt910.html,-s,epos";
                //modeljs.sendam(":am,am,:start=[lau_browser,-u,"+url+"]");
                //TODO: when Apps using lau_browser exit, will conflict with ePos starting process
                var timerInterval = 600;
                if (isCurrentAppHimedia()||checkIsAppOn()) {
                    timerInterval = 6000;
                }
                hiWebOsFrame.lockAllKeys();

                var timerCheckApp = setInterval(function () {

                    debugPrint("[epos]crntPage.id = " + hiWebOsFrame.getCurrentPageId(), DebugLevel.ALWAYS);
                    //when launch ePos, have to stop current running app
                    if (hiWebOsFrame.getCurrentPageId() !== "livetv") {
                        if (checkAndCloseIfAppOn(hiWebOsFrame.blankPage)) {
                            hiWebOsFrame.registerKeyCodesNormal();
                            return;
                        }
                    }
                    closeDOthersModule("livetv");

                    model.sound.setMainMute(0);
//                gCurrentZoomIndex = model.video.getEnumZoom();
//                debugPrint("[epos]gCurrentZoomIndex = "+gCurrentZoomIndex, DebugLevel.ALWAYS);
                    model.video.setEnumPictureMode(1); //EPOS
                    sendCommndToTV(CmdURLType.START_BROWSER, url, false);
                    enableBrowserFlush(false);
                    Hisense.File.write(RETAILMODE_FLAG_FILE, "open", 0); //write data to /tmp/retailmode. open: running, close: stopped
                    hiWebOsFrame.registerKeyCodesNormal();
                    setHalfAnHourTimer(true);
//                getMainVolume();
//                chl_hideNoSignal();
                    model.sound.setMainMute(0);
                    clearInterval(timerCheckApp);
                    hiWebOsFrame.unLockAllKeys();
                }, timerInterval);
            }
            catch (ex) {
                debugPrint("startePos:" + ex.message);
            }
        }

    }
    else { //hide
        //如果epos正在播放视频，释放所有的player resources
        //model.system.setReturnlocalappFlag(FlagShareInBrowser.EPOS_READY_TO_STOP);
        if (!isEUXT910()) {
            Hisense.File.write(RETAILMODE_FLAG_FILE, "close", 0); //write data to /tmp/retailmode. open: running, close: stopped
            hiWebOsFrame.registerKeyCodesNormal();
        }
        else {
            debugPrint("[epos]stop ePos!!");
            flushUITimer=setTimeout(function(){
                if(!!flushUITimer){
                    clearTimeout(flushUITimer);
                    flushUITimer=null;}
                try{
                //开启UI刷新
                    DBG_ALWAYS("come in protect flush!");
                    enableBrowserFlush(true);
                    flushFullscreen();
                }
                catch (ex){
                    DBG_ERROR(ex.message);
                }
            },7000);

            //if ePos is playing video, have to release all player resources
//            model.closedcaption.setControl(ccControl);
            model.system.setReturnlocalappFlag(FlagShareInBrowser.EPOS_READY_TO_STOP);
            startEUXT910EPOS = false;
        }
    }
}
function startRetailmodeTimer(enable) {
    debugPrint('startRetailmodeTimer to start epos!! enable:' + enable);
    if (enable) {


        debugPrint('start to retail mode timer!');
        clearTimeout(m_retailmodeTimer);
        m_retailmodeTimer = setTimeout(function () {

            var currentMode = 1;
            try {
                currentMode = model.system.getUserMode();
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }
            debugPrint('retail mode timer starting……currentMode is ' + currentMode);
            try {
                if (currentMode == 1) {
                    var data = Hisense.File.read(RETAILMODE_FLAG_FILE, 0);
                    var channelScanning = model.channelSearch.getRunning();
                    debugPrint("[configure]channelScanning: " + channelScanning + " data:" + data);
                    if ((data == "close" || data == 2) && channelScanning != 1) {//2 means file not exist
                        startePos(true);
                    }
                    else {
                        DBG_INFO('Need not startEPOS');
                    }
                }
                else {
                    DBG_INFO('Now is not shop mode ? Need not start');
                    clearTimeout(m_retailmodeTimer);
                    m_retailmodeTimer = null;
                }
            }
            catch (ex) {
                debugPrint("[configure]Read retailmode file error: " + ex.message, DebugLevel.ERROR);
                //if cannot read file, means ePos have not run once yet.
                startePos(true);
            }
            startRetailmodeTimer(true);
        }, 60 * 1000);//enter into storemode if no remote action within 1 minutes.

    }
    else {
        debugPrint('clear  retail mode timer!');
        clearTimeout(m_retailmodeTimer);
        m_retailmodeTimer = null;
    }
}

//-----------------------DLNA CODE BEGIN----------------------------
var dlnaClosedByAppHotkey = false;
var picflag = false;
var dlnapictimer = null;
function isEPOSON() {
    try {
        if (hiWebOsFrame.getCurrentPageId() != "app_lau_browser") return false;
        return (CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType());
    } catch (ex) {
        DBG_ERROR(ex.message);
        return false;
    }
}

function initDlnaMode() {
    model.picture.onDLNAPictureRunningchanged = onPictureRunningchanged;
    model.picture.onVstrHTML5PlayChaged = onVstrHTML5PlayChaged_launcher;
    model.mpctrl.onMpCtrlRenderchanged = onMpCtrlRenderchanged;
    model.mpctrl.onMetadataChanged = onMetadataChanged;
    model.mpctrl.onMpCtrlReqationchanged = onMpCtrlReqationchanged;
    model.mpctrl.onMpCtrlStatchanged = onMpCtrlStatchanged;
    model.mpctrl.onMpCtrlPlaytimeCurrentchanged = onMpCtrlPlaytimeCurrentchanged;
    dlnaClosedByAppHotkey = false;
}
var timerDlna = null;
var onMpCtrlRenderchanged = function (value) {
    debugPrint("onMpCtrlRenderchanged--------------" + value);
    if(dlnapictimer != null){
        debugPrint("clear dlnapictimer");
        clearTimeout(dlnapictimer);
        HiPicPlayer.closePicPlayer(1);
        hiWebOsFrame.endLoading("DLNAPICPLAYER");
        dlnapictimer = null;
    }
    var crntPage = hiWebOsFrame.getCurrentPage();
    //if (value == 1) {
    if ($.inArray(hiWebOsFrame.getCurrentPageId(), hiWebOsFrame.getProtectPages()) != -1 ||
        ((hiWebOsFrame.getCurrentPageId() == "app_lau_browser") && (CmdURLType.LAU_BROWSER_WIZARD == appBrowser.getCurrentCommandType())) ||
        hiWebOsFrame.getIsLoading() ||
        hiWebOsFrame.getIsLocking() || isMainArchiveRecording() || isTimeShiftStatus() ||
        (crntPage.module == "wizard")||(hiWebOsFrame.getCurrentPageId() == "dialog_reminder")
    ) {
        DBG_INFO("Current Page is ProtectPage,can't open DLNA PLAYER PAGE! ");
        //model.picture.setDLNAPictureRunning(0);
        model.mpctrl.setMpCtrlPlayerError(0);
        return false;
    }
    var dlnaMetadata = model.mpctrl.getMetadata();
    debugPrint(dlnaMetadata.length);
    if (!!dlnaMetadata) {
        var dlnaType = dlnaMetadata[1];
        var dlnaName = dlnaMetadata[8];
        var dlnaUrl = dlnaMetadata[23];
        var dlnaArtist = dlnaMetadata[13];
        var dlnaAlbum = dlnaMetadata[14];
        if ("epos" == crntPage.id) {
            closeDOthersModule("livetv");
            setTimeout(function () {
                if (dlnaType == "audio") {
                    openAudioPlayer([
                        {
                            "audioUrl": dlnaUrl,
                            "audioName": dlnaName,
                            "audioThumb": "",
                            "audioArtist": dlnaArtist,
                            "audioAlbum": dlnaAlbum
                        }
                    ], 0);
                }
                else if (dlnaType == "video") {
                    openVideoPlayer([
                        {
                            "videoUrl": dlnaUrl,
                            "videoName": dlnaName,
                            "fileSize": ""
                        }
                    ], 0);

                }
            }, 1500);

        }
        else if (isEPOSON()){
            debugPrint("current module is Dynamic Epos__________");
//            startRetailmodeTimer(true);
//            closeDOthersModule("livetv");
            startePos(false);
            setTimeout(function () {
                if (dlnaType == "audio") {
                    openAudioPlayer([
                        {
                            "audioUrl": dlnaUrl,
                            "audioName": dlnaName,
                            "audioThumb": "",
                            "audioArtist": dlnaArtist,
                            "audioAlbum": dlnaAlbum
                        }
                    ], 0);
                }
                else if (dlnaType == "video") {
                    openVideoPlayer([
                        {
                            "videoUrl": dlnaUrl,
                            "videoName": dlnaName,
                            "fileSize": ""
                        }
                    ], 0);

                }
            }, 4000);
        }else {
            if (dlnaType == "audio") {
                openAudioPlayer([
                    {
                        "audioUrl": dlnaUrl,
                        "audioName": dlnaName,
                        "audioThumb": "",
                        "audioArtist": dlnaArtist,
                        "audioAlbum": dlnaAlbum
                    }
                ], 0);
            }
            else if (dlnaType == "video") {
                openVideoPlayer([
                    {
                        "videoUrl": dlnaUrl,
                        "videoName": dlnaName,
                        "fileSize": ""
                    }
                ], 0);

            }
        }
//        }, 500);

    }
    // }
}
var onMetadataChanged = function (value) {
    debugPrint("onMetadataChanged--------------" + value);
}
var onVstrHTML5PlayChaged_launcher = function (value) {
    debugPrint("onVstrHTML5PlayChaged_launcher--------------" + value);

};

var onPictureRunningchanged = function (value) {
    debugPrint("___________________DLNA_PIC________" + value);
    if(dlnapictimer != null && value != 0){
        clearTimeout(dlnapictimer);
        hiWebOsFrame.endLoading("DLNAPICPLAYER");
        dlnapictimer = null;
    }

    if (value == 1) {
        var crntPage = hiWebOsFrame.getCurrentPage();
        //launcher_player_stop = true;
        //还需要判断一下是否有音乐或视频推送，如果有则关闭（USB的播放时也要停掉的处理方式）
//        if (dlnaStatus_mpctrl == 1) {
//            model.mpctrl.MpCtrlStop(null);
//        }
        if ($.inArray(hiWebOsFrame.getCurrentPageId(), hiWebOsFrame.getProtectPages()) != -1 ||
            ((hiWebOsFrame.getCurrentPageId() == "app_lau_browser") && (CmdURLType.LAU_BROWSER_WIZARD == appBrowser.getCurrentCommandType())) ||
            hiWebOsFrame.getIsLoading() ||
            hiWebOsFrame.getIsLocking() ||
            (crntPage.module == "wizard") || isMainArchiveRecording() || isTimeShiftStatus()||(hiWebOsFrame.getCurrentPageId() == "dialog_reminder")
        ) {
            DBG_INFO("Current Page is ProtectPage,can't open DLNA PLAYER PAGE! ");
            model.picture.setDLNAPictureRunning(0);
            return false;
        }
        var picList = [];
        var strTmp = model.picture.getVstrHTML5Play();

        debugPrint("strTmp" + strTmp);
        picList.push({"picUrl": strTmp[0], "picName": strTmp[1]});
        var PcurrentPage = null;
//        try {
//            DBG_INFO("reset window size before dlna ");
//            setWindowSizeDirectly(0, 0, 1920, 1080);
//            pauseDTV();
//        }
//        catch (ex) {
//            DBG_ERROR(ex.message);
//        }
        if (hiWebOsFrame.isCurrentModule("dlna_picPlayer")) {
            debugPrint("第二次推送");
            HiPicPlayer.init(picList, 0);
        }
        else if (hiWebOsFrame.isCurrentModule("epos")) {
            DBG_ALWAYS("EPOS GET DLNA PIC");
            closeDOthersModule("livetv");
            setTimeout(function () {
                hiWebOsFrame.createPage('dlna_picPlayer', null, null, null, function (launP) {
                    hiWebOsFrame.picPlayerPage = launP;
                    HiPicPlayer.lastPage = PcurrentPage;
                    HiPicPlayer.picList = picList;
                    if (!!hiWebOsFrame.getCurrentPage()) {
                        PcurrentPage = hiWebOsFrame.getCurrentPage();
                        if (checkAndCloseIfAppOn(hiWebOsFrame.picPlayerPage)) {
                            dlnaClosedByAppHotkey = false;
                            return false;
                        }
                        else {
                            closeDOthersModule("dlna_picPlayer");
                        }

                    }
                    launP.open();
                    launP.hiFocus();
                    //debugPrint('picPlayer');
                    //mpCtrlStatus_launcher = 3;

                    //避过关闭HiMedia时关闭音视图的回调

                });
            }, 1500);


        }
        else if (isEPOSON()){
            debugPrint("current module is Dynamic Epos__________");
//            startRetailmodeTimer(true);
//            closeDOthersModule("livetv");
            startePos(false);
            setTimeout(function () {
                hiWebOsFrame.createPage('dlna_picPlayer', null, null, null, function (launP) {
                    hiWebOsFrame.picPlayerPage = launP;
                    HiPicPlayer.lastPage = PcurrentPage;
                    HiPicPlayer.picList = picList;
                    if (!!hiWebOsFrame.getCurrentPage()) {
                        PcurrentPage = hiWebOsFrame.getCurrentPage();
                        if (checkAndCloseIfAppOn(hiWebOsFrame.picPlayerPage)) {
                            dlnaClosedByAppHotkey = false;
                            return false;
                        }
                        else {
                            closeDOthersModule("dlna_picPlayer");
                        }

                    }
                    launP.open();
                    launP.hiFocus();
                    //debugPrint('picPlayer');
                    //mpCtrlStatus_launcher = 3;

                    //避过关闭HiMedia时关闭音视图的回调

                });
            }, 4000);
        }
        else {

            hiWebOsFrame.createPage('dlna_picPlayer', null, null, null, function (launP) {
                hiWebOsFrame.picPlayerPage = launP;
                HiPicPlayer.lastPage = PcurrentPage;
                HiPicPlayer.picList = picList;
                if (!!hiWebOsFrame.getCurrentPage()) {
                    PcurrentPage = hiWebOsFrame.getCurrentPage();
                    if (checkAndCloseIfAppOn(hiWebOsFrame.picPlayerPage)) {
                        dlnaClosedByAppHotkey = false;
                        return false;
                    }
                    else {
                        closeDOthersModule("dlna_picPlayer");
                    }

                }
                launP.open();
                launP.hiFocus();
                //debugPrint('picPlayer');
                //mpCtrlStatus_launcher = 3;

                //避过关闭HiMedia时关闭音视图的回调

            });
        }
    }
    else if (value == 2) {
        if(hiWebOsFrame.getIsLoading() || hiWebOsFrame.getIsLocking()){
            if(hiWebOsFrame.isCurrentModule("dlna_picPlayer")){
                debugPrint("getIsLoading || currentmodule is dlna_PicPlayer______");
                HiPicPlayer.closePicPlayer(1);
            }
        }
        else{
            try {
                clearTimeout(getImageSizeTimer1);
                clearTimeout(getImageSizeTimer2);
                model.picture.stopPic();
                model.picture.setDLNAPictureRunning(0);
                picflag = true;
                hiWebOsFrame.startLoading(5, "DLNAPICPLAYER");
            }
            catch(e){
                debugPrint(e.message);
            }

            if(dlnapictimer != null){
                clearTimeout(dlnapictimer);
                dlnapictimer = null;
            }
            dlnapictimer = setTimeout(function()
            {
                hiWebOsFrame.endLoading("DLNAPICPLAYER");
                HiPicPlayer.closePicPlayer(1);
                dlnapictimer = null;
            },2000);
 //       if (hiWebOsFrame.getCurrentPage().id == "dlna_picPlayer") {
 //           HiPicPlayer.closePicPlayer(1);
 //       }
    }
//    if (parseInt(value) == 1) {
//        dlnaStatus_pic = 1;
//    }
//    else if (parseInt(value) == 0) {
//        if (dlnaStatus_pic == 1) {
//            mpCtrlStatus_launcher = 0;
//            hiWebOsFrame.getCurrentPage().close();
//            if (HiPicPlayer.lastPage != null) {
//                HiPicPlayer.lastPage.open();
//                HiPicPlayer.lastPage.hiFocus();
//            }
//            else {
//                debugPrint(" Can't find video last page.")
//            }
//            dlnaStatus_pic = 0;
//        }
//        else {
//            debugPrint(" Back From Player,Do Nothing.")
//        }
    }
}

var onMpCtrlReqationchanged = function (value) {
    debugPrint("REQACTION CHANGED:" + value);
    switch (value) {
        case 1:
            if (hiWebOsFrame.getCurrentPage().id == "dlna_videoPlayer") {
                if (HiVideoPlayer.playerStatus == 0) {
                    HiVideoPlayer.videoPlayOrPause();
                }
            }
            else if (hiWebOsFrame.getCurrentPage().id == "dlna_musicPlayer") {
                if (HiAudioPlayer.playerStatus == 0) {
                    HiAudioPlayer.audioPlayOrPause();
                }
            }
            break;
        case 2:
            if (hiWebOsFrame.getCurrentPage().id == "dlna_videoPlayer") {
                if (HiVideoPlayer.playerStatus == 1) {
                    HiVideoPlayer.videoPlayOrPause();
                }
            }
            else if (hiWebOsFrame.getCurrentPage().id == "dlna_musicPlayer") {
                if (HiAudioPlayer.playerStatus == 1) {
                    HiAudioPlayer.audioPlayOrPause();
                }
            }
            break;
        case 3:
            if (hiWebOsFrame.getCurrentPage().id == "dlna_videoPlayer") {
                HiVideoPlayer.closeVideoPlayer(1);
            }
            else if (hiWebOsFrame.getCurrentPage().id == "dlna_musicPlayer") {
                HiAudioPlayer.closeAudioPlayer(1);
            }
            break;
        default :
            break;
    }
}

function openVideoPlayer(videoList, videoIndex) {
    var VcurrentPage = null;
    if (hiWebOsFrame.isCurrentModule("dlna_videoPlayer")) {
        HiVideoPlayer.init(videoList, videoIndex);
        //dlna有可能会在这个时候推送
//            hiWebOsFrame.closeModule("launcher");
//            hiWebOsFrame.blankPage.open();
//            hiWebOsFrame.blankPage.hiFocus();
    }
    else {

        hiWebOsFrame.createPage('dlna_videoPlayer', null, null, null, function (launP) {
            hiWebOsFrame.videoPlayerPage = launP;
            HiVideoPlayer.lastPage = VcurrentPage;
            HiVideoPlayer.videoList = videoList;
            HiVideoPlayer.cIndex = videoIndex;
            if (!!hiWebOsFrame.getCurrentPage()) {
                VcurrentPage = hiWebOsFrame.getCurrentPage();
                if (checkAndCloseIfAppOn(hiWebOsFrame.videoPlayerPage)) {
                    dlnaClosedByAppHotkey = false;
                    return false;
                }
                else {
                    closeDOthersModule("dlna_videoPlayer");
                }

            }
            launP.open();
            launP.hiFocus();
            //debugPrint('dlna_VideoPlayer');
            //mpCtrlStatus_launcher = 1;

            //避过关闭HiMedia时的onStop回调


        });
    }
//        HiVideoPlayer.init(videoList, videoIndex);
}
function openAudioPlayer(audioList, audioIndex) {
    //关闭当前面板
    debugPrint("openAudioPlayer Fun begin!!!!");
    var AcurrentPage = null;
    // debugPrint("audioList:"+JSON.stringify(audioList)+",audioIndex:"+audioIndex);
    // debugPrint("audioList:"+JSON.stringify(audioList)+",audioIndex:"+audioIndex);
    if (hiWebOsFrame.isCurrentModule("dlna_musicPlayer")) {

        HiAudioPlayer.init(audioList, audioIndex);
    }
    else {

        hiWebOsFrame.createPage('dlna_musicPlayer', null, null, null, function (launP) {
            hiWebOsFrame.musicPlayerPage = launP;
            HiAudioPlayer.lastPage = AcurrentPage;
            HiAudioPlayer.audioList = audioList;
            HiAudioPlayer.cIndex = audioIndex;
            if (!!hiWebOsFrame.getCurrentPage()) {
                AcurrentPage = hiWebOsFrame.getCurrentPage();
                if (checkAndCloseIfAppOn(hiWebOsFrame.musicPlayerPage)) {
                    dlnaClosedByAppHotkey = false;
                    return false;
                }
                else {
                    closeDOthersModule("dlna_musicPlayer");
                }

            }
            launP.open();
            launP.hiFocus();
            try {
                DBG_INFO("init music Player language  ");
                HiAudioPlayer.initLanguage();
            }
            catch (e) {
                DBG_ERROR("init music Player language error " + e.message);
            }


        });
    }
}

function setChannelListUpdate() {
    try {
        model.tvservice.setChannelListUpdate(0);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 * 添加 工厂模式Value监测
 * @param val
 */
var needReumeLiveTVFromFac = false;
var needReumeLauncherFromFac = false;
var needOpenLauncherFromFac = false;
var facOnApp = false, factory_starting = false;
var onStateOpenChaged = function (val) {

    DBG_INFO("onStateOpenChaged=" + val + "-----------------");
    if (0 != val) {
        startRetailmodeTimer(false);
        //startePos(false);
        factory_starting = false;
        factoryMode = FACTORY_MODE_ENUM.MODE_FACTORY;
        try {
            keyboard.registerKeyCodes([VK_HOME, VK_FAC_M]);
            vol.closeMutePage();
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
    else {
        factoryMode = FACTORY_MODE_ENUM.MODE_NORMAL;
        hiWebOsFrame.registerKeyCodesNormal();

        try {
            if (!isSystemInited) {
                setChannelListUpdate();
                needReumeLiveTVFromFac = false;
                needOpenLauncherFromFac = needReumeLauncherFromFac;
                needReumeLauncherFromFac = false;
                isStartFromNetfliex = (1 == model.system.getOpenFromStandby());
                isWizardFlag = getWizardSetFlag();
                doTVScale();
                SystemInit();
            }
            else if (needReumeLiveTVFromFac) {
                setChannelListUpdate();
                vol.openMutePage();
                //CHL_initChannelList();
                livetvmain.initLiveTVMain();
                livetvchlist.initChannelList();
                hiWebOsFrame.blankPage.open();
                hiWebOsFrame.blankPage.hiFocus();
                //openLiveTVModule(null, true);
                needReumeLiveTVFromFac = false;
            }
            else if (needReumeLauncherFromFac) {
                setChannelListUpdate();
                vol.openMutePage();
                livetvmain.initLiveTVMain();
                livetvchlist.initChannelList();
                if (hiWebOsFrame.isPageExist("myLauncher") || hiWebOsFrame.isPageExist("OEMlauncherPage")
                    ||hiWebOsFrame.isPageExist("VIDAALiteNavPage")) {
                    hiWebOsFrame.myLauncher.open();
                    hiWebOsFrame.myLauncher.hiFocus();
                }
                else {
                    if (g_launcherBrand == "SA_OEM") {
                        createSAOEMLauncher();
                    }else if(g_launcherBrand == "VIDAALite"){
                        createVIDAALitelauncher();
                    }
                    else {
                        createModulePage('myLauncher');
                    }
                }
                needReumeLauncherFromFac = false;
                //CHL_initChannelList();
            }
            else if (facOnApp) {
                DBG_INFO("app focus:" + hiWebOsFrame.getCurrentPageId());
            }
        }
        catch (ex) {
            DBG_ERROR(ex.message);
            setChannelListUpdate();
            closeDOthersModule("livetv");
            hiWebOsFrame.createPage('livetv_volume', null, null, 2000, function (vol) {
                hiWebOsFrame["livetv_volume"] = vol;
                hiWebOsFrame["livetv_volume"].open();
                livetvmain.initLiveTVMain();
                livetvchlist.initChannelList();
                hiWebOsFrame.blankPage.open();
                hiWebOsFrame.blankPage.hiFocus();
            });
        }
    }
}
function startFactory() {
    factory_starting = true;
    // Pause Hbbtv when in Factory;
    pauseHBBTV();
    //epos-2015-3-6 工厂模式下关闭商场模式定时器
    startRetailmodeTimer(false);
    //startePos(false);
    hiWebOsFrame.createPage('app_factory', null, null, null, function (fac_page) {
        hiWebOsFrame["app_factory"] = fac_page;
        if (false && isCurrentAppHimedia()) {
            DBG_INFO("do not close himedia");
            fac_page.open();
            fac_page.hiFocus();
        }
        else if (!checkAndCloseIfAppOn(fac_page)) {
            if (!canProcessVolume()) {
                tv && model.sound.setMainMute(vol.getPageMute());
            }
            hiWebOsFrame.lockAllKeys("startFac");
            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            tryToCloseLauncher();
            tryToCloseAllApps();
            fac_page.open();
            fac_page.hiFocus();
        }
        else {
            DBG_INFO("close app and wait to enter factory");
        }
    });
}
function checkIsNetflixOnWhenEnterFac() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    var netflixOn = false;
    if (!!crntPage) {
        if (crntPage.id == "app_netflix") {
            netflixOn = true;
            DBG_INFO("netflix on");
        }
        else if (!!crntPage.origin && crntPage.origin.id == "app_netflix") {
            netflixOn = true;
            crntPage.origin.open();
            crntPage.origin.hiFocus();
            DBG_INFO("netflix on: " + crntPage.id);
            closePagesOrModuleByPage(crntPage);
        }
        else {
            DBG_INFO("netflix off");
        }
    }
    return netflixOn;
}
function checkAndCloseIfAppOn(origin) {
    var crntPage = hiWebOsFrame.getCurrentPage();
    var appOn = false;
    if (!!crntPage) {
        if (crntPage.module == "app" && crntPage.visible) {
            if (hiWebOsFrame.getCurrentPageId() == "app_lau_browser") {
                if (CmdURLType.LAU_BROWSER_WIZARD == appBrowser.getCurrentCommandType()
                    || CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType()) {
                    DBG_INFO("do not process exit");
                    return false;
                }
            }
            appOn = true;
            if ("app_factory" == crntPage.id) {
                try {
                    hiWebOsFrame["app_factory"].close();
                    if (!!origin) {
                        origin.open();
                        origin.hiFocus();
                    }
                }
                catch (ex) {
                    DBG_INFO(ex.message);
                }
            }
            else {
                asyncStopApp(crntPage.id, origin);
            }
        }
        else if (!!crntPage.origin) {
            if (crntPage.origin.module == "app" && crntPage.origin.visible) {
                appOn = true;
                var appid = crntPage.origin.id;
                closePagesOrModuleByPage(crntPage);
                asyncStopApp(appid, origin);
            }
            else if ((crntPage.origin.module == "setting" || crntPage.origin.module == "settingfirst")) {
                try {
                    if( !!hiWebOsFrame.settingsFirst && !!hiWebOsFrame.settingsFirst.origin) {
                        var settingorigin = hiWebOsFrame.settingsFirst.origin;
                        if (!!settingorigin && settingorigin.module == "app" && settingorigin.visible) {
                            appOn = true;
                            var appid = settingorigin.id;
                            closePagesOrModuleByPage(crntPage);
                            asyncStopApp(appid, origin);
                        }
                    }
                }
                catch (ex) {
                    DBG_INFO(ex.message);
                }
            }
        }
        else {
        }
    }
    return appOn;
}
function checkIsAppOn() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    var appOn = false;
    if (!!crntPage) {
        if (crntPage.module == "app" && crntPage.visible) {
            appOn = true;
        }
        else if (crntPage.module == "setting" || crntPage.module == "settingfirst") {
            try {
            if( !!hiWebOsFrame.settingsFirst && !!hiWebOsFrame.settingsFirst.origin) {
                var settingorigin = hiWebOsFrame.settingsFirst.origin;
                if (!!settingorigin && settingorigin.module == "app" && settingorigin.visible) {
                    appOn = true;
                }
            }
            }
            catch (ex) {
                DBG_INFO(ex.message);
            }
        }
        else if (!!crntPage.origin) {
            if (crntPage.origin.module == "app" && crntPage.origin.visible) {
                appOn = true;
            }
        }
    }
    return appOn;
}
function isCurrentAppHimedia() {
    var himediaIsOn = false;
    try {
        var crntPage = hiWebOsFrame.getCurrentPage();
        if (!crntPage) return himediaIsOn;
        if (!!crntPage && crntPage.id == "app_lau_browser") {
            himediaIsOn = (CmdURLType.LAU_BROWSER_HIMEDIA == appBrowser.getCurrentCommandType());
        }
        else if (!!crntPage.origin) {
            if (crntPage.origin.id == "app_lau_browser" && crntPage.origin.visible) {
                himediaIsOn = (CmdURLType.LAU_BROWSER_HIMEDIA == appBrowser.getCurrentCommandType());
            }
            else if ((crntPage.origin.module == "setting" || crntPage.origin.module == "settingfirst")) {
                try {
                    if (!!hiWebOsFrame.settingsFirst && !!hiWebOsFrame.settingsFirst.origin) {
                        var settingorigin = hiWebOsFrame.settingsFirst.origin;
                        if (!!settingorigin && settingorigin.id == "app_lau_browser" && settingorigin.visible) {
                            himediaIsOn = (CmdURLType.LAU_BROWSER_HIMEDIA == appBrowser.getCurrentCommandType());
                        }
                    }
                }
                catch (ex) {
                    DBG_INFO(ex.message);
                }
            }
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    return himediaIsOn;
}

function testFvp(usbStatus) {
    var testMdsPath = usbStatus[1].replace("/mnt/", "") + "test_mds";
    var testMdsUrl = Hisense.File.read(testMdsPath, 3);
    if (isNaN(testMdsUrl)) {
        debugPrint("testFvp --> override mds url: " + testMdsUrl);
        Hisense.File.write("test_mds", testMdsUrl, 1);
    }

    var removeTestMdsPath = usbStatus[1].replace("/mnt/", "") + "remove_test_mds";
    if (Hisense.File.exists(removeTestMdsPath, 3)) {
        debugPrint("testFvp --> recover mds url if it was overridden");
        Hisense.File.delete("test_mds", 1);
    }

    var testAppPath = usbStatus[1].replace("/mnt/", "") + "test_app";
    var testAppUrl = Hisense.File.read(testAppPath, 3);
    if (isNaN(testAppUrl)) {
        debugPrint("testFvp --> open test app: " + testAppUrl);
        sendAM(":am,opera4x,hbbtv:open=" + testAppUrl);
        return true;
    }

    var testAitPath = usbStatus[1].replace("/mnt/", "") + "test_ait";
    var testAitUrl = Hisense.File.read(testAitPath, 3);
    if (isNaN(testAitUrl)) {
        debugPrint("testFvp --> inject test ait: " + testAitUrl);
        sendAM(":am,opera4x,hbbtv:inject=" + testAitUrl);
        return true;
    }

    return false;
}

function onUsbStateChanged(val) {
    try {
        debugPrint("Receive USB state changed!");
        var usbList = readFileFromNative("usbs", 0);
        //debugPrint("val================" + val[0] + hiWebOsFrame.getCurrentPage().id);
        DBG_INFO(objToString(val));
        /********epos-12-24************/
        try {
            if (hiWebOsFrame.getCurrentPageId() == "epos") {
                debugPrint("[ePos]onUSBChanged:" + val);
                switch (val[0]) {
                    case "online":
                        addUSB(val[1]);
                        if (!eposPageData.operateData.isDMPPlaying) {
                            if (InitArea == "EU" || InitArea == "EM") {
                                getVideoListByPath(val[1], 2);
                            }
                            else {
                                var path = "file://" + val[1] + "hisense_demo.mp4";//Hisense_TV_Demo.mp4
                                debugPrint("epos path: " + path);
                                var fileIsValid = false;
                                try {
                                    fileIsValid = Hisense.File.exists(path.substring(12), 3);
                                    debugPrint("[epos]fileIsValid:" + fileIsValid + path.substring(12));
                                }
                                catch (ex) {
                                    debugPrint("[epos]fileIsValid error:" + ex, DebugLevel.ERROR);
                                }
                                if (fileIsValid) {//play video
                                    eposPageData.operateData.lastUsb = val[1];
                                    eposPageData.operateData.g_videoPath = path;
                                    pauseDTV();
                                    setTimeout(function () {
                                        model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
                                        debugPrint("fileIsValid: " + fileIsValid + "play movie");
                                    }, 1000);
                                }
                            }

                        }
                        else {
                            if (!!eposPageData.operateData.isInsideVideoPlaying) {
                                if (InitArea == "EU" || InitArea == "EM") {
                                    getVideoListByPath(val[1], 3);
                                }
                                else {
                                    var path = "file://" + val[1] + "hisense_demo.mp4";//Hisense_TV_Demo.mp4
                                    debugPrint("epos path: " + path);
                                    var fileIsValid = false;
                                    try {
                                        fileIsValid = Hisense.File.exists(path.substring(12), 3);
                                        debugPrint("[epos]fileIsValid:" + fileIsValid + path.substring(12));
                                    }
                                    catch (ex) {
                                        debugPrint("[epos]fileIsValid error:" + ex, DebugLevel.ERROR);
                                    }
                                    if (fileIsValid) {//play video
                                        eposPageData.operateData.lastUsb = val[1];
                                        eposPageData.operateData.g_videoPath = path;
                                        try {
                                            eposPageData.operateData.g_needRepeat = true;
                                            debugPrint("g_needRepeat" + eposPageData.operateData.g_needRepeat);
                                            model.mpctrl.StopMpctrl(null);
                                            eposPageData.operateData.isInsideVideoPlaying = false;
                                            //eposPageData.operateData.isDMPPlaying=false;
                                        }
                                        catch (ex) {
                                            debugPrint("stop playing error" + ex.message, DebugLevel.ERROR);
                                        }

                                        debugPrint("fileIsValid: " + fileIsValid + "play movie");
                                    }
                                }
                            }
                        }
                        break;
                    case "offline":
                        removeUSB(val[1]);
                        debugPrint("val[1]: " + val[1]);
                        if (eposPageData.operateData.lastUsb == val[1]) {
                            //stop playing
                            debugPrint("last usb: " + eposPageData.operateData.lastUsb);
                            clearInterval(eposPageData.operateData.g_repeatVideoTimer);
                            eposPageData.operateData.g_repeatVideoTimer = null;
                            eposPageData.operateData.isDMPPlaying = false;
                            $('#slideshow').show();
                            try {
                                model.mpctrl.StopMpctrl(null);
                            }
                            catch (ex) {
                                debugPrint("stop playing error" + ex.message, DebugLevel.ERROR);
                            }
                            eposPageData.operateData.g_videoPath = "";
                            //check other usbs to find the demo video

                            checkUsbToPlayDemoVideo();
                            //checkDemoVideo();
                        }
                        break;
                }
                return;
            }
        }
        catch (ex) {
            debugPrint("error: " + ex.message);
        }
        if (hiWebOsFrame.isCurrentModule("launcher")) {
            if(g_launcherBrand == "VIDAALite") {    // VIDAALite do not use launcherSBar
                refreshVIDAALiteLauncherUSBState(usbList);
            }
            else {
                launcherSBar.refreshUsbState(usbList);
            }
        }
        if ("online" == val[0] && !testFvp(val)) {
            if (!hiWebOsFrame["dialog_usb"]) {
                hiWebOsFrame.createPage("dialog_usb", null, null, null, function (usbPage) {
                    hiWebOsFrame["dialog_usb"] = usbPage;
                    popuUpUsbDialog();
                });
            }
            else {
                popuUpUsbDialog();
            }
        }
        else if ("offline" == val[0] && "dialog_usb" == hiWebOsFrame.getCurrentPageId()) {
            dlgUSB.closeUSBDialog();
        }
        else if ("offline" == val[0]) {
            debugPrint("USB ofline!!!!!!current page id:" + hiWebOsFrame.getCurrentPageId());
            if ("pvrHardDiskCheck" == hiWebOsFrame.getCurrentPageId()) {
                if (isScheduleRecord == true) {
                    isScheduleRecord = false;
                }
                hiWebOsFrame.pvrHardDiskCheck.destroy();
                openLiveTVModule([Msg.INFO, 0]);
            }
            if ("pvrHDCheckRetryDialog" == hiWebOsFrame.getCurrentPageId()) {
                if (isScheduleRecord == true) {
                    isScheduleRecord = false;
                }
                hiWebOsFrame.pvrHDCheckRetryDialog.destroy();
                openLiveTVModule([Msg.INFO, 0]);
            }
            if ("pvrHDList" == hiWebOsFrame.getCurrentPageId()) {
                if (isScheduleRecord == true) {
                    isScheduleRecord = false;
                }
                hiWebOsFrame.pvrHDList.destroy();
                openLiveTVModule([Msg.INFO, 0]);
            }
            if ("shiftHdSizeList" == hiWebOsFrame.getCurrentPageId()) {
                hiWebOsFrame.shiftHdSizeList.destroy();
                openLiveTVModule([Msg.INFO, 0]);
            }
            if ("pvrHDSpeedCheckResult" == hiWebOsFrame.getCurrentPageId()) {
                if (isScheduleRecord == true) {
                    isScheduleRecord = false;
                }
                hiWebOsFrame.pvrHDSpeedCheckResult.destroy();
                openLiveTVModule([Msg.INFO, 0]);
            }
            if ("pvrOrtShiftDialogPage_id" == hiWebOsFrame.getCurrentPageId()) {
                var tuid = model.timeshift.getUuid();
                var pvruid = model.pvr.getStationUuid();
                debugPrint('model.timeshift.getUuid:' + tuid + "pvruid=" + pvruid);
                if (val[3] == tuid || val[3] == pvruid) {
                    hiWebOsFrame.ptDialog.close();
                    openLiveTVModule([Msg.INFO, 0]);
                    if (isTimeShiftStatus() || isMainArchiveRecording()) {
                        setTimeout(uiCallStopTShift, 200);
                        setTimeout(function () {
                            DBG_ALWAYS("model.pvr.StopRecord()");
                            model.pvr.StopRecord();
                        }, 200);
                    }
                }
            }
            if ("tshiftMediaDialog" == hiWebOsFrame.getCurrentPageId()) {
                var tuid = model.timeshift.getUuid();
                debugPrint('model.timeshift.getUuid:' + tuid);
                if (val[3] == tuid) {
                    hiWebOsFrame.tshiftmedia.close();
                    if (!!hiWebOsFrame.tshiftProgressPage) {
                        exitTShift();
                    }
                    openLiveTVModule([Msg.INFO, 0]);
                    if (isTimeShiftStatus()) {
                        setTimeout(uiCallStopTShift, 200);
                    }
                }
            }
            if ("tshiftProgressPage_id" == hiWebOsFrame.getCurrentPageId()) {
                var tuid = model.timeshift.getUuid();
                debugPrint('model.timeshift.getUuid:' + tuid);
                if (val[3] == tuid) {
                    if (!!hiWebOsFrame.tshiftProgressPage) {
                        exitTShift();
                    }
                    openLiveTVModule([Msg.INFO, 0]);
                    if (isTimeShiftStatus()) {
                        setTimeout(uiCallStopTShift, 200);
                    }
                }
            }
            if (hiWebOsFrame.getCurrentPageId() == "livetv_main") {
                var tuid = model.timeshift.getUuid();
                debugPrint('model.timeshift.getUuid:' + tuid);
                if (val[3] == tuid && isTimeShiftStatus()) {
                    if (!!hiWebOsFrame.tshiftProgressPage) {
                        exitTShift();
                    }
                    setTimeout(uiCallStopTShift, 200);
                }
            }

        }
    }
    catch (ex) {
        DBG_ERROR("usb dialog error." + ex.message);
    }
}

function popuUpUsbDialog() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (canDialogPopUp()) {
        closePagesOrModuleByPage(crntPage);
        tryToCloseLauncher();
        tryToCloseAllApps();
        if ("setting" == crntPage.module
            || "settingfirst" == crntPage.module
            || "input" == crntPage.module
            || "sleep" == crntPage.module
            || "epg" == crntPage.module
            || "livetv" == crntPage.module
        ) {
            crntPage = hiWebOsFrame.blankPage;
        }
        hiWebOsFrame["dialog_usb"].origin = crntPage;
        hiWebOsFrame["dialog_usb"].open();
        hiWebOsFrame["dialog_usb"].hiFocus();
    }
    else if (null != crntPage) {
        DBG_ALWAYS("this page[" + crntPage.id + "] can not pop up usb dialog");
    }
    else {
        DBG_ERROR("current page is null");
    }
}

function popUpHeadphoneInsertDialog() {
    try {
        var crntPage = hiWebOsFrame.getCurrentPage();
        if (canHeadphoneDialogPopUp()) {
            if (checkIsAppOn()) {
                if(crntPage.module != 'setting'){
                    DBG_INFO('checkIsAppOn == true; headphone insert will open, do not call headPhoneInsertDialogPopUpOnApp');
                    headPhoneInsertDialogPopUpOnApp();
                } else {
                    DBG_INFO('checkIsAppOn == true; headphone insert will open, call headPhoneInsertDialogPopUpOnApp');
                }
            } else {
                closeLiveTVModule();
                //closePagesOrModuleByPage(crntPage);
            }

            //tryToCloseLauncher();
            //tryToCloseAllApps();
            //if ("setting" == crntPage.module
            //	|| "settingfirst" == crntPage.module
            //	|| "input" == crntPage.module
            //	|| "sleep" == crntPage.module
            //	|| "epg" == crntPage.module
            //	|| "livetv" == crntPage.module
            //) {
            //	crntPage = hiWebOsFrame.blankPage;
            //}

            hiWebOsFrame["dialog_headphone_insert"].origin = crntPage;
            hiWebOsFrame["dialog_headphone_insert"].open();
            hiWebOsFrame["dialog_headphone_insert"].hiFocus();
        }
        else if (null != crntPage) {
            DBG_ALWAYS("this page[" + crntPage.id + "] can not pop up dialog_headphone_insert");
        }
        else {
            DBG_ERROR("current page is null");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onCurTimeChanged(val) {
    //DBG_ALWAYS("day light saving changed[" + val + "]");
    recheckDSTSeconds();
    if (hiWebOsFrame.getCurrentPageId() == "epg") {
        // epg.refreshEPGWhenTimeChanged();
    }
}

function onNewTimezoneChanged(val) {
    DBG_ALWAYS("timezone changed, val = " + val);
    hisenseUITZSeconds = parseInt(val);
    setSATimezoneOffset();
}

function onTimeFormatChanged(val) {
    DBG_ALWAYS("time format changed, val = " + val);
    hisenseUITimeFormat = parseInt(val);
}
function onHotelVolumeChanged(val) {
    hotelVolume.maxVolume = parseInt(model.hotel.getMaxVolume());
    hotelVolume.minVolume = parseInt(model.hotel.getMinVolume());
}

function onHotelModeChanged(val) {
    hotelVolume.switch = parseInt(val);
    try {
        if (!!val) {
            HotelMenuData.operateData.hotelMode = true;
        }
        else {
            HotelMenuData.operateData.hotelMode = false;
        }
        InitKeyboardValue();
    }
    catch (ex) {
        DBG_ERROR(ex);
    }
}

function onNetworkStateChanged(event) {
    debugPrint("onNetworkStateChanged:" + event, DebugLevel.ALWAYS);
	sendAM(":am,opera4x,hbbtv:network="+event);
    if (isLauncherOpen()) {
        if(g_launcherBrand == "VIDAALite") {
            refreshVIDAALiteLauncherNetworkStateAndUSBState();
        }
        else {
            launcherSBar.refreshNetworkState();
        }
    }
    if (!!hiWebOsFrame.NetSetEtherIpSetPage) {
        settingNetSetEtherIpNetworkOnChange();
    }
    if (!!hiWebOsFrame.NetSetWifiSetPage) {
        if (hiWebOsFrame.getCurrentPageId() == "settingNetSetWifiSetPageId") {
            var currFocusId = hiWebOsFrame.NetSetWifiSetPage.currentSelectedTree[0].id;
            setSettingNetSetWifiSetPageConnState();
            hiWebOsFrame.NetSetWifiSetPage.hiFocus(currFocusId);
        } else {
            setSettingNetSetWifiSetPageConnState();
        }
    }
    if (!!hiWebOsFrame.settingsFirst && hiWebOsFrame.settingsFirst.visible){
        settingFirPageSetNetworkStatus();
    }
    if(ENABLE_FVP) {
        freeview_manager.onEnvChanged();
    }
}

function onPVRStatusChanged(val) {
    DBG_INFO('onPVRStatusChanged: ' + val);
    var PVR_STATUS = {
        STAND_BY_RECORD: 0, //待机录制时候按Power开机
        STAND_BY_RECORD_2: 1,   //待机录制时候按Power开机， Tony没有定义，0和1一样
        STAND_BY_CEC_NOTIFY: 2, //待机录制的时候CEC通知开机
        TV_ON_CEC_NOTIFY: 3,    //CEC切通道？
        STAND_BY_RECORD_DIRECT_WITHOUT_TIP: 4,  //本机按键power键，不提示直接待机录制
        STAND_BY_RECORD_WAKEUP_BY_NETFLIX: 5    //待机录制的时候Netflix一键开机
    };

    if (val == PVR_STATUS.STAND_BY_RECORD_WAKEUP_BY_NETFLIX) {
        hiWebOsFrame.unLockAllKeys();
        model.sound.setMainMute(0);
        PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
            "Sure to exit from PVR or T.Shift?", okCommandApp.bind(this, VK_NETFLIX), pvrTshiftCancelCommand);
        return;
    }


    if (PVR_STATUS.STAND_BY_CEC_NOTIFY == val || PVR_STATUS.TV_ON_CEC_NOTIFY == val) {
        hiWebOsFrame.unLockAllKeys();
        if(PVR_STATUS.STAND_BY_CEC_NOTIFY == val){
            model.sound.setMainMute(0);
        }
        return;
    }

    DBG_ALWAYS("standby record notify.");
    closeDOthersModule("");

    if (PVR_STATUS.STAND_BY_RECORD_DIRECT_WITHOUT_TIP == val) {
        hiWebOsFrame.lockAllKeys("standby_recording", "NaN");
        openLiveTVModule([Msg.INFO, 0]);
        tv && model.system.setPVRStandby(0);
        return;
    }

    var originPage = hiWebOsFrame[LiveTVModule.MAIN];

    if (null == originPage) return;
    originPage.operateData.dialogOptions = {
        titleName: "",
        contentName: getCurrentContentLanguage("Allow recording in standby?"),
        okName: getCurrentContentLanguage('Standby Record'),
        cancelName: getCurrentContentLanguage('Power Off'),
        okCommand: function () {
            if (tv) {
                hiWebOsFrame.lockAllKeys("standby_recording", "NaN");
                openLiveTVModule([Msg.INFO, 0]);
                model.system.setPVRStandby(0);
            }
            else {
                DBG_ALWAYS("standby record success");
            }
        },
        cancelCommand: function () {
            if (tv) {
                try {//关机前关闭页面，否则 hdr开关机有可能出问题
                    hiWebOsFrame['dialog_common'].close();
                    openLiveTVModule([Msg.INFO, 0]);
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }
                hiWebOsFrame.lockAllKeys("stop.pvr.standy");
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
                //model.timeshift.Stop();
                model.system.SwitchOffTv(0);  //follow 5659 pvr
            }
            else {
                DBG_ALWAYS("only power off");
            }
        },
        escCommand: function () {
            DBG_INFO("cancel standby record.");
            openLiveTVModule([Msg.INFO, 0]);
        }
    }
    createModulePage('dialog_common', originPage);
}

function onReadAppAmStaus(focuedPage, originPage, isSuccess) {

    var currentPage = isSuccess ? focuedPage : originPage;
    try {
        if ("app" == currentPage.module) {
            hiWebOsFrame.registerKeyCodesForAppExcludeKey();
        }
        else {
            currentPage.open();
            hiWebOsFrame.registerKeyCodesNormal();
        }
        currentPage.hiFocus();
        DBG_INFO("current page id:" + currentPage.id);
    }
    catch (ex) {
        DBG_INFO(ex.message, DebugLevel.ERROR);
    }
}


function PicasaFlagInit() {
    try {
        try {
            model.system.setReturnlocalappFlag(0);
            DBG_INFO("            model.system.setReturnlocalappFlag(0);            ");
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        model.system.onReturnlocalappFlagChaged = onReturnlocalappFlagChaged;

    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}


var timerToReadUserIni;
var USER_INI_FILE = "hisenseUI/picasauser.ini";

function StartTimerReadUserIni() {
    DBG_INFO("function StartTimerReadUserIni()");
    try {
        ClearTimerReadUserIni();
        timerToReadUserIni = setTimeout(function () {
            ReadUserIni();
        }, 2000);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function ReadUserIni() {
    try {
        DBG_INFO("ReadUserIni");
        var urlToken = Hisense.File.read(USER_INI_FILE, 1);
        DBG_INFO("urlToken: " + urlToken);
        if (urlToken.length > 10) {
            asyncReStartApp('app_lau_browser', 'token');
//            receiveback = false;
//            asyncReStartApp('app_lau_browser', 'return');
//            sendAM(":am,am,:stop=" + "lau_browser");
//            setTimeout(function () {
//                sendAM(':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/picasa/picasaIndex.html?token" + ']');
//            }, 250);
        }
        else {
            DBG_INFO("urlToken invalid");
            StartTimerReadUserIni();
        }

    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function ClearTimerReadUserIni() {
    try {
        if (!!timerToReadUserIni) {
            clearTimeout(timerToReadUserIni);
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}


var timerToReadDropboxUserIni;
var DROPBOX_USER_INI_FILE = "hisenseUI/dropboxuser.ini";

function StartTimerReadDropboxUserIni() {
    debugPrint("StartTimerReadDropboxUserIni Function !!");
    try {
        if (!!timerToReadDropboxUserIni) {
            clearTimeout(timerToReadDropboxUserIni);
        }
        timerToReadDropboxUserIni = setTimeout(function () {
            ReadDropboxUserIni();
        }, 2000);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function ReadDropboxUserIni() {
    try {
        debugPrint("ReadDropboxUserIni Function!!!");
        var urlToken = Hisense.File.read(DROPBOX_USER_INI_FILE, 1);
        debugPrint("urlToken: " + urlToken);
        if (urlToken.length > 10) {
            asyncReStartApp('app_lau_browser', 'dropbox_token');
        }
        else {
            debugPrint("urlToken invalid");
            StartTimerReadDropboxUserIni();
        }

    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
var FlagShareInBrowser = {  //Picasa 占用 index 1~5; 其他index请从 5以后开始， 建议5个一组或10个一组，方便区分
    "NORMAL": 0, //正常状态

    //1~5: Picasa占用
    "PICASA_GOOGLE": 1,  //要跳转到谷歌页面
    "PICASA_OAUTH_RETURN_PAGE": 2,    //
    "PICASA_OAUTH_TOKEN_PAGE": 3,
    "PICASA_NORMAL_PAGE": 4,
    "EPOS_PLAYER_STOPPED": 6,
    "EPOS_READY_TO_STOP": 7,
    //11~20  HiMedia暂时使用

    "HIMEDIA_KILL_BY_GUI": 11,
    "LAUNCHER_START_SETTING_NOW": 12,
    "HIMEDIA_RUNNING_NOW": 13,
    "HIMEDIA_PAUSE_TO_SETTING": 14,
    "HIMEDIA_RESUME_FROM_SETTING": 15,
    "DROPBOX_LOGIN": 16,
    "DROPBOX_LOGIN_RETURN": 17,
    "HIMEDIA_VOLUME_CHANGE_IN": 18,

    //21-30 TerraTv占用
    "SL2_TVAPI_I32_SYSTEM_RETURNLOCALAPP_FLAG_STOP_TERRATV": 21,
    "SL2_TVAPI_I32_SYSTEM_RETURNLOCALAPP_FLAG_START_NETWORK_CONFIGURATION": 22,
    "SL2_TVAPI_I32_SYSTEM_RETURNLOCALAPP_FLAG_LANGUAGE_OSD": 23,
    "SL2_TVPAI_STR_SYSTEM_RETURNLOCALAPP_FLAG_BASIC_SETTINGS_TVSET_LOCATION": 24

};

var GlobalFlagShareInBrowser = 0;
var onReturnlocalappFlagChaged = function (val) {
    try {
        GlobalFlagShareInBrowser = val;
        DBG_INFO("[LAUNCHER]onReturnlocalappFlagChaged: " + val);
        switch (val) {
            case FlagShareInBrowser.NORMAL:
                ClearTimerReadUserIni();
                break;
            case FlagShareInBrowser.PICASA_GOOGLE:
                DBG_INFO("StartTimerReadUserIni");
                StartTimerReadUserIni();
                try {
                    appBrowser.setReceiveKeyBack(true);
                }
                catch (ex) {
                    DBG_ERROR(ex.message);
                }
                //TODO 注册返回键
                break;
            case FlagShareInBrowser.PICASA_OAUTH_RETURN_PAGE:
                //TODO 启动picasa return
                break;
            case FlagShareInBrowser.PICASA_OAUTH_TOKEN_PAGE:
                //TODO 启动picasa token
                break;
            case FlagShareInBrowser.PICASA_NORMAL_PAGE:
                ClearTimerReadUserIni();
                //TODO
                break;
            case FlagShareInBrowser.EPOS_READY_TO_STOP:
                //TODO 退出ePos
                DBG_INFO("[epos]FlagShareInBrowser.EPOS_READY_TO_STOP!")
                Hisense.File.write(RETAILMODE_FLAG_FILE, "close", 0);
                //添加一个锁键功能，在EPOS退出的过程中禁止频繁按键造成无法收到EPOS_PLAYER_STOPPED消息的问题。
//                if (!hiWebOsFrame.getIsLocking())
//                {
//                    hiWebOsFrame.lockAllKeys("eu_epos");
//                }
                break;
            case FlagShareInBrowser.EPOS_PLAYER_STOPPED:
                //TODO 退出ePos
                DBG_INFO("[epos]FlagShareInBrowser.EPOS_PLAYER_STOPPED!")
                //hiWebOsFrame.getCurrentPage() is not safe, so change to send am directly.
//                closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                Hisense.File.write(RETAILMODE_FLAG_FILE, "close", 0); //write data to /tmp/retailmode. open: running, close: stopped
                asyncStopApp("app_lau_browser", hiWebOsFrame.blankPage);

//                hiWebOsFrame.unLockAllKeys("eu_epos");
                break;

            case FlagShareInBrowser.DROPBOX_LOGIN:
                debugPrint("Dropbox login now!");
                try {
                    appBrowser.setReceiveKeyBack(true);
                }
                catch (ex) {
                    DBG_ERROR(ex.message);
                }
                StartTimerReadDropboxUserIni();
                break;
            case FlagShareInBrowser.SL2_TVAPI_I32_SYSTEM_RETURNLOCALAPP_FLAG_START_NETWORK_CONFIGURATION:
                LauncherquickopenSetting(3, 0, hiWebOsFrame["app_lau_browser"]);
                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                break;
            case FlagShareInBrowser.SL2_TVAPI_I32_SYSTEM_RETURNLOCALAPP_FLAG_STOP_TERRATV:
                //modeljs.sendam(":am,am,:stop=lau_browser");
                asyncStopApp("app_lau_browser", hiWebOsFrame.blankPage);
                break;
            default :
                break;
        }


    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function CloseModuleOpenPvrDialog(prgram) {
    debugPrint("prgram: " + JSON.stringify(prgram));
    hiWebOsFrame.lockAllKeys();
    if (!!hiWebOsFrame.getCurrentPage()) {
        if (hiWebOsFrame.isCurrentModule("livetv")) {
            //hiWebOsFrame.lockAllKeys();
            closeLiveTVModule();
            CreateSchdulePvrdialog(hiWebOsFrame.blankPage, prgram);
        }
        else if (hiWebOsFrame.getCurrentPage().module == "launcher") {
            // hiWebOsFrame.lockAllKeys();
            hiWebOsFrame.getCurrentPage().hiBlur();
            CreateSchdulePvrdialog(hiWebOsFrame.myLauncher, prgram);
            // hiWebOsFrame.unLockAllKeys();
        }
        else if (hiWebOsFrame.getCurrentPage().module == "allapps"
            || hiWebOsFrame.getCurrentPage().module == "accuweather") {
            var crntPage = hiWebOsFrame.getCurrentPage();
            crntPage.hiBlur();
            CreateSchdulePvrdialog(crntPage, prgram);
        }
        else if (hiWebOsFrame.isCurrentModule("app")) {
            var crntPage = hiWebOsFrame.getCurrentPage();
            debugPrint("open pvr dialog  On App function begin!!!" + crntPage.id);
            if ("app_lau_browser" == crntPage.id) {
                switch (appBrowser.getCurrentCommandType()) {
                    case CmdURLType.LAU_BROWSER_HIMEDIA:
                        //model......通知himedia取消按键
                        if (16 != GlobalFlagShareInBrowser) {
                            model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                        }
                        debugPrint("open pvr dialog on himedia  function begin!!!");
                        //   hiWebOsFrame.lockAllKeys();
                        CreateSchdulePvrdialog(crntPage, prgram);
                        //    hiWebOsFrame.unLockAllKeys();
                        hiWebOsFrame.registerKeyCodesForSettingOnApp();
                        break;
                    case CmdURLType.LAU_BROWSER_PICASA:
                        debugPrint("open pvr dialog on  picasa function begin!!!");
                        //   hiWebOsFrame.lockAllKeys();
                        CreateSchdulePvrdialog(crntPage, prgram);
                        //   hiWebOsFrame.unLockAllKeys();
                        hiWebOsFrame.registerKeyCodesForSettingOnApp();
                        break;
                    default :
                        hiWebOsFrame.unLockAllKeys();

                        break;
                }
            }
            else if ("app_amazon" == crntPage.id
                || "app_vudu" == crntPage.id
                || "app_youtube" == crntPage.id
                || "app_netflix" == crntPage.id
                || "app_tv_store" == crntPage.id
                || "app_hi_browser" == crntPage.id) {
                //  hiWebOsFrame.lockAllKeys();
                CreateSchdulePvrdialog(crntPage, prgram);
                //   hiWebOsFrame.unLockAllKeys();
                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                debugPrint("start pvr dialog on app");
            }
        }
        else if (hiWebOsFrame.isCurrentModule("setting") || hiWebOsFrame.isCurrentModule("settingfirst")) {
            // var settingorigin = hiWebOsFrame.settingsFirst.origin;
            var crntPage = hiWebOsFrame.getCurrentPage();
            CreateSchdulePvrdialog(crntPage, prgram);
        }
        else {
            var crntPage = hiWebOsFrame.getCurrentPage();
            CreateSchdulePvrdialog(crntPage, prgram);
        }

    }
    else {
        hiWebOsFrame.unLockAllKeys();

    }
}

function StartPVRDialogDestroyCallback(tempOri) {
    //判断退出到Origin
    if (!!tempOri) {
        tempOri.open();
        tempOri.hiFocus();
        if ("app" == tempOri.module) {
            if ("app_lau_browser" == tempOri.id) {
                switch (appBrowser.getCurrentCommandType()) {
                    case CmdURLType.LAU_BROWSER_HIMEDIA:
                        //model......通知himedia注册按键
                        if (16 != GlobalFlagShareInBrowser) {
                            model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
                        }

                        break;
                    case CmdURLType.LAU_BROWSER_PICASA:
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                        break;
                    default :
                        break;
                }
            }
        }
        else {

        }
    }
    else {
        openLiveTVModule([Msg.INFO, 0]);
    }
    hiWebOsFrame.unLockAllKeys();
}
function CreateSchdulePvrdialog(origin, prgram) {
    debugPrint("to create the beginRecordDialog==>" + hiWebOsFrame.noRecordOfCurChannel);
    if (hiWebOsFrame.noRecordOfCurChannel) {
        hiWebOsFrame.noRecordOfCurChannel = false;
        try {
            hiWebOsFrame.createPage("pvrRecordTip", null, origin, 1100, function (page) {
                hiWebOsFrame.pvrRecordTip = page;
                var opData = hiWebOsFrame.pvrRecordTip.operateData;
                opData.pvrRecordTipChannelInfo = copyObj(prgram);
                debugPrint("pvrRecordTipChannelInfo: " + JSON.stringify(opData.pvrRecordTipChannelInfo));
                hiWebOsFrame.pvrRecordTip.rewriteDataOnly();
                hiWebOsFrame.pvrRecordTip.open();
                hiWebOsFrame.pvrRecordTip.hiFocus();

                hiWebOsFrame.unLockAllKeys();
                debugPrint("create the pvr record tip page end");
            });
        }
        catch (ex) {
            debugPrint("create pvr record tip page error: " + ex.message);
            hiWebOsFrame.unLockAllKeys();

        }
    }
    else {
        try {
            hiWebOsFrame.createPage('beginRecordDialog', null, origin, 1100, function (page) {
                hiWebOsFrame.PvrstartDialog = page;
                debugPrint("create pvrstartDialog page!");
                var opData = hiWebOsFrame.PvrstartDialog.operateData;
                if (isExistProgramRecording) {
                    opData.beginRecordBtn.Data = "Start a new recording";
                    opData.cancelRecordBtn.Data = "Cancel a new recording";
                }
                else {
                    opData.beginRecordBtn.Data = "Start recording";
                    opData.cancelRecordBtn.Data = "Cancel recording";
                }
                opData.pragramInfo = copyObj(prgram);
                debugPrint("pragramInfo: " + JSON.stringify(opData.pragramInfo));
                hiWebOsFrame.PvrstartDialog.rewriteDataOnly();
                hiWebOsFrame.PvrstartDialog.open();
                hiWebOsFrame.PvrstartDialog.hiFocus();

                hiWebOsFrame.unLockAllKeys();
                debugPrint("create the beginRecordDialog end");
            });
        }
        catch (ex) {
            debugPrint("create beginRecordDialog page error: " + ex.message);
            hiWebOsFrame.unLockAllKeys();

        }
    }
}

function trytoCloseSetting() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    debugPrint("to destroy setting current pafe " + crntPage.id);
    if (crntPage.origin.module == "setting" || crntPage.origin.module == "settingfirst") {
        debugPrint("to destroy setting current pafe " + crntPage.id);
        hiWebOsFrame.destroyModule("setting");
        hiWebOsFrame.settingsFirst.close();
    }

}

var g_schedulrecordingtimer = null;
var g_schedulerecodingprog = {};
function BeginRecordScheduleProgram(prgram) {
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (crntPage == null) {
        CreateSchdulePvrdialog(hiWebOsFrame.blankPage, prgram);
        DBG_INFO(" the current page is null ,still pop the dialog")
    }
    if (!!crntPage && (crntPage.id == "beginRecordDialog" || crntPage.id == "pvrRecordTip")) {
        debugPrint("schedule recording is running, ignore the new schedule");
    }
    try {
        if (CanScheduleProgrammePopUp()) {
            debugPrint("start to open dialog");
            CloseModuleOpenPvrDialog(prgram);
        }
        else {
            if (g_schedulrecordingtimer == null) {
                g_schedulerecodingprog = prgram;
                g_schedulrecordingtimer = setInterval(
                    function () {
                        if (CanScheduleProgrammePopUp()) {
                            DBG_INFO("start to open dialog");
                            CloseModuleOpenPvrDialog(g_schedulerecodingprog);
                            clearInterval(g_schedulrecordingtimer);
                            g_schedulrecordingtimer = null;
                        }
                        else {
                            DBG_INFO("can not open the pvr dialog ------------------")

                        }
                    }, 4000);
            }
            else {
                debugPrint("schedule is running, ignore the new schedule");
            }
        }

    } catch (e) {
        DBG_ERROR(e.message)

    }
}
function CanScheduleProgrammePopUp() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (null == crntPage) return false;
    var originPage = crntPage.origin;
    var popup = canCurrentPageProcEvent()
            // && ("epos" != crntPage.id)
        && ("pvrHDCheckRetryDialog" != crntPage.id)
        && ("pvrHardDiskCheck" != crntPage.id)
        && ("pvrHDList" != crntPage.id)
        && ("dialog" != crntPage.module)
        && ("setting_epos_countdown_page" != crntPage.id)
        && LiveTVModule.OPERATE_TIP != crntPage.id
        && factoryMode == FACTORY_MODE_ENUM.MODE_NORMAL
        && !factory_starting
        && !hiWebOsFrame.getIsLoading()
        && !hiWebOsFrame.getIsLocking()
            // && !hiWebOsFrame.isCurrentModule("miracast")
        && !hiWebOsFrame.isCurrentModule("dlna_videoPlayer")
        && !hiWebOsFrame.isCurrentModule("dlna_musicPlayer")
        && !hiWebOsFrame.isCurrentModule("dlna_picPlayer");
    return popup;
}


function canDialogPopUp() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (null == crntPage) {
        DBG_ERROR("current page is null.");
        return false;
    }
    var originPage = crntPage.origin;
    var popup = canCurrentPageProcEvent()
        && !checkIsAppOn()
            //epos-2015-1-9
        && ("setting_energy_warning" != crntPage.id)
        && ("epos" != crntPage.id)
        && ("pvrOrtShiftDialogPage_id" != crntPage.id)
        && ("pvrHardDiskCheck" != crntPage.id)
        && ("pvrHDCheckRetryDialog" != crntPage.id)
        && ("pvrHDList" != crntPage.id)
        && ("pvrHDSpeedCheckResult" != crntPage.id)
        && ("dialog" != crntPage.module)
        && ("setting_epos_countdown_page" != crntPage.id)
        && ("tshiftProgressPage_id" != crntPage.id)
        && ("tshiftMediaDialog" != crntPage.id)
        && ("pvrtshift_pvr_page" != crntPage.id)
        && ("epg" != crntPage.module)
        && (LiveTVModule.AUTO_STANDBY != crntPage.id)
        && LiveTVModule.OPERATE_TIP != crntPage.id
        && factoryMode == FACTORY_MODE_ENUM.MODE_NORMAL
        && !factory_starting
        && !hiWebOsFrame.getIsLoading()
        && !hiWebOsFrame.getIsLocking()
        && !hiWebOsFrame.isCurrentModule("miracast")
        && !hiWebOsFrame.isCurrentModule("dlna_videoPlayer")
        && !hiWebOsFrame.isCurrentModule("dlna_musicPlayer")
        && !hiWebOsFrame.isCurrentModule("dlna_picPlayer")
//        && (VIDAALiteLauncherIfOnTheChangePageStatus == false)
        && isVidaaLiteOnTheChangePageStatus()
        && !deviceKeySet.HBBTVAPPON;


    return popup;
}

function isVidaaLiteOnTheChangePageStatus(){
    if(g_launcherBrand == "VIDAALite" && VIDAALiteLauncherIfOnTheChangePageStatus){
        return false;
    }
    return true;
}

function canHeadphoneDialogPopUp() {
    //仅允许livetv and app popup

    var crntPage = hiWebOsFrame.getCurrentPage();
    if (null == crntPage) {
        DBG_ERROR("canHeadphoneDialogPopUp, current page is null.");
        return false;
    }

    if (factoryMode != FACTORY_MODE_ENUM.MODE_NORMAL) {
        DBG_INFO('factoryMode != FACTORY_MODE_ENUM.MODE_NORMAL, headphoneinsertdialog should notpop up');
        return false;
    }

    if ((hiWebOsFrame.getCurrentPageId() == "app_lau_browser" && CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType())
        || hiWebOsFrame.getCurrentPageId() == 'epos') {

        DBG_INFO('curPage Epos, headphoneinsertdialog should notpop up');
        return false;
    }

    if (checkIsAppOn()) {
        DBG_INFO('checkIsAppOn() == true, popup headphoneinsertdialog');
        return true; //app上允许弹出
    }

    var popup = canCurrentPageProcEvent()
            //&& !checkIsAppOn()
            //epos-2015-1-9
        && ("setting_energy_warning" != crntPage.id)
        && ("epos" != crntPage.id)
        && ("pvrOrtShiftDialogPage_id" != crntPage.id)
        && ("pvrHardDiskCheck" != crntPage.id)
        && ("pvrHDCheckRetryDialog" != crntPage.id)
        && ("pvrHDList" != crntPage.id)
        && ("pvrHDSpeedCheckResult" != crntPage.id)
        && ("dialog" != crntPage.module)
        && ("setting_epos_countdown_page" != crntPage.id)
        && ("tshiftProgressPage_id" != crntPage.id)
        && ("tshiftMediaDialog" != crntPage.id)
        && ("pvrtshift_pvr_page" != crntPage.id)
        && ("epg" != crntPage.module)
        && (LiveTVModule.AUTO_STANDBY != crntPage.id)
        && LiveTVModule.OPERATE_TIP != crntPage.id
        && factoryMode == FACTORY_MODE_ENUM.MODE_NORMAL
        && !factory_starting
        && !hiWebOsFrame.getIsLoading()
        && !hiWebOsFrame.getIsLocking()
        && !hiWebOsFrame.isCurrentModule("miracast")
        && !hiWebOsFrame.isCurrentModule("dlna_videoPlayer")
        && !hiWebOsFrame.isCurrentModule("dlna_musicPlayer")
        && !hiWebOsFrame.isCurrentModule("dlna_picPlayer");

    if (false == popup) {
        return false;
    }

    if (hiWebOsFrame.isCurrentModule("livetv")) {
        return true;
    } else {
        return false;
    }
}


function closeAppBlankPage() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    if ("app_netflix" == crntPage.id) {
        crntPage.operateData.commandType = CmdURLType.STOP_NETFLIX;
    }
    closePagesOrModuleByPage(crntPage);
    hiWebOsFrame.registerKeyCodesNormal();
    resumeDTV();
}
//监听DLNA的播放时间
function onMpCtrlPlaytimeCurrentchanged(value) {
  //  debugPrint("onMpCtrlPlaytimeCurrentchanged function begin!  now playtime is:" + value);
    if (hiWebOsFrame.getCurrentPage().id == "dlna_videoPlayer") {
        try {
            HiVideoPlayer.getProgress(value);
        }
        catch (e) {
            DBG_ERROR("_Error !!!!!!!!!" + e.message);
        }
    }
    else if (hiWebOsFrame.getCurrentPage().id == "dlna_musicPlayer") {
        try {
            HiAudioPlayer.getProgress(value);
        }
        catch (e) {
            DBG_ERROR("_Error !!!!!!!!!" + e.message);
        }
    }
    /*******epos-2014-12-24**********/
    else if (hiWebOsFrame.getCurrentPage().id == "epos") {
       // debugPrint("[epos]onPlayertimeChanged:" + value);
        var totalTime = model.mpctrl.getMpCtrlPlaytimeTotal();
        //debugPrint("[epos] playing video, currentTime=" + value + ", totalTime=" + totalTime);
        if (value >= totalTime) {
            //model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
            eposPageData.operateData.g_needRepeat = true;
            debugPrint("g_needRepeat" + eposPageData.operateData.g_needRepeat);
            model.mpctrl.StopMpctrl(null);
        }
    }
}

//监听DLNA播放器的播放状态
function onMpCtrlStatchanged(value) {
    debugPrint("mpctrl_mediaConfig state changed : " + value);
    switch (parseInt(value)) {
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_IDLE:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARING:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARED:

            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAYING:

            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PAUSE:
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_STOP:


            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_RELEASING:
            /*****epos-12-24******/
            switch (hiWebOsFrame.getCurrentPage().id) {
            /*****epos-12-24*******/
                case "epos":
                    try {
                        if (eposPageData.operateData.g_prepareToExit) {
                            setTimeout(function () {
                                ctlr_memc_for_osd(1);
                                modeljs.sendam(":am,dtv_app_mtk,:resume=dtv");
                                eposPageData.operateData.g_prepareToExit = false;
                                debugPrint("eposPageData.operateData.g_prepareToExit: " + eposPageData.operateData.g_prepareToExit);
                            }, 1000);
                        }
                        else {
                            if (eposPageData.operateData.g_needRepeat) {
                                setTimeout(function () {
                                    if ((InitArea == "EU" || InitArea == "EM") && (!eposPageData.operateData.isInsideVideoPlaying)) {
                                        DBG_ALWAYS("isInsideVideoPlaying   " + eposPageData.operateData.isInsideVideoPlaying);
                                        playNextEposVideo();
                                    }

                                    model.mpctrl.PlayMovie(eposPageData.operateData.g_videoPath);
                                    eposPageData.operateData.g_needRepeat = false;
                                    debugPrint("eposPageData.operateData.g_needRepeat>>>" + eposPageData.operateData.g_needRepeat);
                                }, 500);
                            }
                            else {
                                setTimeout(function () {
                                    modeljs.sendam(":am,dtv_app_mtk,:resume=dtv");
                                }, 1000);
                            }
                        }
                    }
                    catch (ex) {
                        DBG_ERROR(ex.message);
                    }
                    break;

                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARE_DONE:
            model.mpctrl.PlayNow();
            switch (hiWebOsFrame.getCurrentPage().id) {
            /*****epos-12-24*******/
                case "epos":
                    try {
                        //初始化全屏
                        model.mpctrl.setScreenPosition(0, 0, 1920, 1080);
                        eposPageData.operateData.g_currentInput = model.source.getCurrentSource();
                        debugPrint("[epos]eposPageData.operateData.g_currentInput is" + eposPageData.operateData.g_currentInput);
                        eposPageData.operateData.isDMPPlaying = true;
                        debugPrint("[epos]to hide backup pictures!");
                        $('#slideshow').hide();
                        clearInterval(eposPageData.operateData.slideshowTimer);
                        eposPageData.operateData.slideshowTimer = null;
                    }
                    catch (ex) {
                        debugPrint(ex, DebugLevel.ERROR);
                    }
                    break;
                case "dlna_videoPlayer":
                    $("#videoPlayerDiv").css("display", "block");
                    try {
                        HiVideoPlayer.videoTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();
                        //初始化全屏
                        model.mpctrl.setScreenPosition(0, 0, 1920, 1080);
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
                        DBG_ERROR(e.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiVideoPlayer.videoTotaltime);
                    break;
                case "dlna_musicPlayer":
                    $("#audioPlayerDiv").css("display", "block");
                    try {
                        HiAudioPlayer.musicTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();
                    }
                    catch (e) {
                        DBG_ERROR(e.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiAudioPlayer.musicTotaltime);
                    break;

                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAY_DONE:
            switch (hiWebOsFrame.getCurrentPage().id) {
                case "dlna_videoPlayer":

                    try {
                        HiVideoPlayer.videoTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();

                    }
                    catch (e) {
                        DBG_ERROR(e.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiVideoPlayer.videoTotaltime);
                    break;
                case "dlna_musicPlayer":

                    try {
                        HiAudioPlayer.musicTotaltime = model.mpctrl.getMpCtrlPlaytimeTotal();
                    }
                    catch (e) {
                        DBG_ERROR(e.message);
                    }
                    debugPrint("GET CURRENT TOTAL TIME IS : " + HiAudioPlayer.musicTotaltime);
                    break;

                default :
                    break;
            }
            break;
        case MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_AUTO_STOP:

            if(hiWebOsFrame.getCurrentPage().module == "wizard")
            {
                var musicPath = "file:///3rd_rw/UI/hisenseUI/wizard_bg.mp3";
                model.mpctrl.PlayMusic(musicPath);
            }
            else {
                switch (hiWebOsFrame.getCurrentPage().id) {
                    case "dlna_videoPlayer":
                        HiVideoPlayer.closeVideoPlayer(1);
                        break;
                    case "dlna_musicPlayer":
                        HiAudioPlayer.closeAudioPlayer(1);
                        break;
                    default :
                        break;
                }
            }
            break;
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_AUDIO_UNPLAYABLE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_VIDEO_UNPLAYABLE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FILE:
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_UNKNOWN:

            try {

                switch (hiWebOsFrame.getCurrentPage().id) {
                    case "dlna_videoPlayer":
                        showMsg(playerLang[hiWebOsFrame.getCurrentLanguage()]["Information"], playerLang[hiWebOsFrame.getCurrentLanguage()]["File not supported."], 5);
                        HiVideoPlayer.closeVideoPlayer(1);
                        break;
                    case "dlna_musicPlayer":
                        showMsg(playerLang[hiWebOsFrame.getCurrentLanguage()]["Information"], playerLang[hiWebOsFrame.getCurrentLanguage()]["File not supported."], 5);
                        HiAudioPlayer.closeAudioPlayer(1);
                        break;
                    case "epos":
                        if (InitArea == "EU" || InitArea == "EM"|| InitArea == "COL") {
                            eposPageData.operateData.g_needRepeat = true;
                            //播放错误文件直接从播放列表中删除
                            eposPageData.operateData.g_videoList.splice(eposPageData.operateData.g_videoListIndex, 1);
//                            eposPageData.operateData.g_videoListIndex--;//用于平衡删除列表内容后的播放下一首的操作
                            DBG_ALWAYS("videoList:" + eposPageData.operateData.g_videoList);
                            debugPrint("g_needRepeat" + eposPageData.operateData.g_needRepeat);
                            model.mpctrl.StopMpctrl(null);
                        }
                        break;
                    default :
                        break;
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
            break;
        case MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_MEDIA_LOST:
            try {
                //showMsg("", playerLang[hiWebOsFrame.getCurrentLanguage()].notsupport, 5);
                switch (hiWebOsFrame.getCurrentPage().id) {
                    case "dlna_videoPlayer":
                        HiVideoPlayer.closeVideoPlayer(1);
                        break;
                    case "dlna_musicPlayer":
                        HiAudioPlayer.closeAudioPlayer(1);
                        break;
                    default :
                        break;
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
            break;
        default :
            break;
    }
}

function pressMenuOnApp() {
    debugPrint("pressMenuOnApp function begin!!!");
    var crntPage = hiWebOsFrame.getCurrentPage();
    if ("app_lau_browser" == crntPage.id) {
        switch (appBrowser.getCurrentCommandType()) {
            case CmdURLType.LAU_BROWSER_HIMEDIA:
            case CmdURLType.LAU_BROWSER_PICASA:
                //model......通知himedia取消按键
                if (16 != GlobalFlagShareInBrowser) {
                    model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                }
                debugPrint("pressMenuOnApp function begin!!!");
                startMainSetting(crntPage);
                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                break;
            case CmdURLType.LAU_BROWSER_PICASA:
            case CmdURLType.LAU_BROWSER_TERRATV:
//                model......通知picasa取消按键
//                model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                debugPrint("TERRATV pressMenuOnApp function begin!!!");
                startMainSetting(crntPage);
                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                break;
            case CmdURLType.LAU_BROWSER_EPOS:
                //startQuickSetting();
                hiWebOsFrame.unLockAllKeys("setting");
                break;

            default :
                hiWebOsFrame.unLockAllKeys("setting");
                break;
        }
    }
    else if ("app_amazon" == crntPage.id
        || "app_vudu" == crntPage.id
        || "app_youtube" == crntPage.id
        || "app_netflix" == crntPage.id
        || "app_tv_store" == crntPage.id
        || "app_amazonruby" == crntPage.id
        || "app_netrange" == crntPage.id
        || "app_hi_browser" == crntPage.id) {
        startMainSetting(crntPage);
        hiWebOsFrame.registerKeyCodesForSettingOnApp();
        DBG_INFO("start setting on app");
    }
    else {
        DBG_INFO("do not start setting");
	  hiWebOsFrame.unLockAllKeys("setting");
    }
}

function headPhoneInsertDialogPopUpOnApp() {
    try {
        debugPrint("headPhoneInsertDialogPopUpOnApp()");
        var crntPage = hiWebOsFrame.getCurrentPage();
        if ("app_lau_browser" == crntPage.id) {
            switch (appBrowser.getCurrentCommandType()) {
                case CmdURLType.LAU_BROWSER_HIMEDIA:
                case CmdURLType.LAU_BROWSER_PICASA:
                    //model......通知himedia取消按键
                    if (16 != GlobalFlagShareInBrowser) {
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                    }
                    debugPrint("headPhoneInsertDialogPopUpOnApp function begin!!!");
                    //startMainSetting(crntPage);
                    hiWebOsFrame.registerKeyCodesForSettingOnApp();
                    break;
                case CmdURLType.LAU_BROWSER_PICASA:
                case CmdURLType.LAU_BROWSER_TERRATV:
//                model......通知picasa取消按键
//                model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                    debugPrint("TERRATV headPhoneInsertDialogPopUpOnApp function begin!!!");
                    //startMainSetting(crntPage);
                    hiWebOsFrame.registerKeyCodesForSettingOnApp();
                    break;
                case CmdURLType.LAU_BROWSER_EPOS:
                    //startQuickSetting();
                    break;

                default :

                    break;
            }
        }
        else if ("app_amazon" == crntPage.id
            || "app_amazonruby" == crntPage.id
            || "app_vudu" == crntPage.id
            || "app_youtube" == crntPage.id
            || "app_netflix" == crntPage.id
            || "app_tv_store" == crntPage.id
            || "app_hi_browser" == crntPage.id) {
            //startMainSetting(crntPage);
            hiWebOsFrame.registerKeyCodesForSettingOnApp();
            DBG_INFO("start headPhoneInsertDialogPopUpOnApp on app");
        }
        else {
            DBG_INFO("do not start headPhoneInsertDialogPopUpOnApp");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function pressSleepOnApp() {
    debugPrint("pressSleepOnApp function begin!!!");
    var crntPage = hiWebOsFrame.getCurrentPage();
    if ("app_lau_browser" == crntPage.id) {
        switch (appBrowser.getCurrentCommandType()) {
            case CmdURLType.LAU_BROWSER_HIMEDIA:
                //model......通知himedia取消按键
                if (16 != GlobalFlagShareInBrowser) {
                    model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                }
                debugPrint("pressSleepOnApp function begin!!!");
                hiWebOsFrame.lockAllKeys();
                StartSleepTimerControl(crntPage);
                hiWebOsFrame.unLockAllKeys();
                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                break;
            case CmdURLType.LAU_BROWSER_PICASA:
                debugPrint("pressSleepOn picasa function begin!!!");
                hiWebOsFrame.lockAllKeys();
                StartSleepTimerControl(crntPage);
                hiWebOsFrame.unLockAllKeys();
                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                break;
            case CmdURLType.LAU_BROWSER_EPOS:
                //startQuickSetting();
                hiWebOsFrame.unLockAllKeys();
                break;

            default :
                hiWebOsFrame.unLockAllKeys();
                break;
        }
    }
    else if ("app_amazon" == crntPage.id
        || "app_vudu" == crntPage.id
        || "app_youtube" == crntPage.id
        || "app_netflix" == crntPage.id
        || "app_tv_store" == crntPage.id
        || "app_hi_browser" == crntPage.id) {
        hiWebOsFrame.lockAllKeys();
        StartSleepTimerControl(crntPage);
        hiWebOsFrame.unLockAllKeys();
        hiWebOsFrame.registerKeyCodesForSettingOnApp();
        DBG_INFO("start sleeo on app");
    }
    else {
        DBG_INFO("do not start sleep");
        hiWebOsFrame.unLockAllKeys();
    }
}
function SleepOnDestroyCallback(tempOri) {
    //判断退出到Origin
    if (!!tempOri) {
        tempOri.open();
        tempOri.hiFocus();
        if ("app" == tempOri.module) {
            if ("app_lau_browser" == tempOri.id) {
                switch (appBrowser.getCurrentCommandType()) {
                    case CmdURLType.LAU_BROWSER_HIMEDIA:
                        //model......通知himedia注册按键
                        if (16 != GlobalFlagShareInBrowser) {
                            model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
                        }

                        break;
                    case CmdURLType.LAU_BROWSER_PICASA:
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                        break;
                    default :
                        break;
                }
            }
        }
        else {

        }
    }
    else {
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    hiWebOsFrame.unLockAllKeys();
}


function settingOnDestroyCallback(tempOri) {
    //判断退出到Origin
    DBG_ALWAYS("settingOnDestroyCallback")
    if (!!tempOri) {
        if (tempOri == hiWebOsFrame.blankPage) {
            //chl_g_sourceInfo.tvShowInfoBar = true;
        }
        tempOri.open();
        tempOri.hiFocus();
        if ("app" == tempOri.module) {
            if ("app_lau_browser" == tempOri.id) {
                switch (appBrowser.getCurrentCommandType()) {
                    case CmdURLType.LAU_BROWSER_HIMEDIA:
                        //model......通知himedia注册按键
                        if (16 != GlobalFlagShareInBrowser) {
                            model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
                        }
                        break;
                    case CmdURLType.LAU_BROWSER_PICASA:
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                        break;
                    case CmdURLType.LAU_BROWSER_TERRATV:
                        // model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                        break;
                    default :
                        break;
                }
            }
        }
        else {
        }
    }
    else {
        //chl_g_sourceInfo.tvShowInfoBar = true;
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    if (hiWebOsFrame.getIsLocking()) {
        hiWebOsFrame.unLockAllKeys();
    }
}
function exitSettingWhenAppisOn() {
    var tempOri;
    if (!!hiWebOsFrame.getPageByIdFromSdkPages('setting_sys_qs_page') && !!hiWebOsFrame.getPageByIdFromSdkPages('setting_sys_qs_page').origin) {
        tempOri = hiWebOsFrame.getPageByIdFromSdkPages('setting_sys_qs_page').origin;
    }
    if (!!tempOri && (tempOri.module == "app")) {
        debugPrint("close app");
        //tempOri.close();
        //hiWebOsFrame.registerKeyCodesNormal();
        closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
        asyncStopApp(tempOri.id, hiWebOsFrame.blankPage);
        return true;
    }
    return false;
}
function canCurrentPageProcEvent() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (null == crntPage) return true;

    // if("wizard" != crntPage.module) return true;

    var proc = !hiWebOsFrame.isCurrentPageBeProtected()
        && "SKB" != crntPage.module && "wizard" != crntPage.module
        && "iqqi" != crntPage.module;

    if (proc && "app_lau_browser" == crntPage.id) {
        if (CmdURLType.LAU_BROWSER_WIZARD == appBrowser.getCurrentCommandType()
            || CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType()) {

            proc = false;
        }
    }

    return proc;
}
function openPageOnPC(pageId) {
    switch (pageId) {
        case "livetv_main":
            hiWebOsFrame.createPage('livetv_volume', null, null, 2000, function (vol) {
                hiWebOsFrame["livetv_volume"] = vol;
                hiWebOsFrame["livetv_volume"].open();
                hiWebOsFrame.createPage('livetv_main', null, null, null, function (pageLive) {
                    hiWebOsFrame.blankPage = hiWebOsFrame["livetv_main"] = pageLive;
                    livetvmain.initLiveTVMain();
                    hiWebOsFrame["livetv_main"].open();
                    hiWebOsFrame["livetv_main"].hiFocus();
                });
            });
            break;
        case 'epg':
            hiWebOsFrame.createPage('epg', null, null, null, function (pageEPG) {
                hiWebOsFrame[pageId] = pageEPG;
                epg.openEPG();
            });
            break;
        case 'channellist':
            hiWebOsFrame.createPage('prgrm_chlist_page', null, null, null, function (pageChannelList) {
                hiWebOsFrame.prgrmchlistPage = pageChannelList;
                prgrmChlist.openPage('blankPage',
                    getChnlList(),
                    {
                        name: 'DVB-C',
                        uid: 'uuid_list_dvbc',
                        attr: 'dvbc'
                    });
            });
            break;
        case 'rmdr_edit_page':
            hiWebOsFrame.createPage('rmdr_edit_page', null, null, null, function (pageRmdrEditPage) {
                hiWebOsFrame.rmdrEditPage = pageRmdrEditPage;
                hiWebOsFrame.rmdrEditPage.operateData.program = {
                    uid: '1',
                    title: 'title',
                    channelUid: 'uid',
                    destination: '',
                    startTime: getDVBLongTime() - 300,
                    endTime: getDVBLongTime() + 600,
                    descrambleTime: '',
                    repeatMode: 1,//getrepeatMode(row[8]);
                    CRID: '',
                    lockPin: '',
                    programPin: '',
                    attr: 0,
                    eventId: 1111,
                    bookType: 1
                };
                rmdrEdit.openPage('blankPasge',
                    hiWebOsFrame.rmdrEditPage.operateData.program,
                    RmdDef.RMD_ADD,
                    RmdDef.RMD_WATCH);
            });
            break;
        case 'reminder':
            hiWebOsFrame.createPage('epgdialog_page', null, null, null, function (pageDialog) {
                var html = '<span name="channel">' + 'prgrm.channelNumber' +
                    '&nbsp;&nbsp;' + 'prgrm.channelName' + '</span>';
                html += '<span name="program">' + 'prgrm.title' + '</span>';
                html += '<span name="date">' + '2014-08-08' +
                    '&nbsp;' + '08:08' +
                    '-' + '08:08' + '</span>';
                html += '<span name="repeat">' + 'repeatMode)' + '</span>'
                var opts = {
                    titleName: 'PVR Remind',
                    contentName: html,
                    okName: 'record',
                    cancelName: 'cancel record',
                    pageClass: 'dialog_notify_watch_page',
                    panelClass: 'dialog_notify_watch_panel',
                    btnClass: 'dialog_notify_watch_btns',
                    okCommand: null,
                    cancelCommand: null
                }
                hiWebOsFrame.epgDialogPage = pageDialog;
                epgDlg.createEPGDialog(null, opts);
            });
            break;
        case "livetv_volume":
            hiWebOsFrame.createPage('livetv_volume', null, null, 2000, function (v) {
                hiWebOsFrame["livetv_volume"] = v;
                hiWebOsFrame["livetv_volume"].open();
            });
            break;
        case "prgrm_schedule_page":
            hiWebOsFrame.createPage(pageId, null, null, 1000, function (page) {
                hiWebOsFrame.prgrmSchdlPage = page;
                prgrmSchedule.openPage();
            });
            break;
        default :
            hiWebOsFrame.createPage(pageId, null, null, 1000, function (page) {
                hiWebOsFrame[pageId] = page;
                hiWebOsFrame[pageId].open();
                hiWebOsFrame[pageId].hiFocus();
            });
            break;
    }
}

function liveTvUIOpen() {
    hiWebOsFrame.getOtherConfig().isLiveTVShowing++;
    ctlr_memc_for_osd(0);
}
function liveTvUIClose() {
    hiWebOsFrame.getOtherConfig().isLiveTVShowing--;
    ctlr_memc_for_osd(1);
}

function Enalbe_memc_page_close() {
    debugPrint("close page open memc", DebugLevel.ALWAYS);
    model.video.setEnumSmoothMotion(100);
    hiWebOsFrame.is_create_memc_timer = false;
}
var memcTimer = 0;
function ctlr_memc_for_osd(status) //0为open页面,1为close页面,实现osd显示时关闭memc,osd消失时复原memc.
{
    if (!tv) return;
    switch (status) {
        case 0:
            //debugPrint("[xuehongfeng] is open page close memc",DebugLevel.ALWAYS);
            if (!!memcTimer) {
                //debugPrint("[xuehongfeng] is opne page close memc cleartime out",DebugLevel.ALWAYS);
                clearTimeout(memcTimer);
                hiWebOsFrame.is_create_memc_timer = false;
                //model.video.onEnumSmoothMotionChaged = null;
                //debugPrint("[xuehongfeng] is opne page close memc" + memcTimer,DebugLevel.ALWAYS);
            }
            //debugPrint("[xuehongfeng] is open page close memc", DebugLevel.ALWAYS);
            model.video.setEnumSmoothMotion(101);   //val为101时，只做memc关闭效果的动作，不会记入eeprom值，从而不影响当前ui设置的值

            //}
            //hiWebOsFrame.memcTimer2 = setTimeout("model.video.setEnumSmoothMotion(101);", 500);
            break;
        case 1:
            var ui = isUIShowingExcludeBlankpage();
            //debugPrint("[xuehongfeng] is close page  ui" + ui,DebugLevel.ALWAYS);
            if (!ui) {
                //debugPrint("[xuehongfeng] is close page open memc",DebugLevel.ALWAYS);
                //model.video.setEnumSmoothMotion(100);
                //debugPrint("[xuehongfeng] is close page open memc" + hiWebOsFrame.is_create_memc_timer,DebugLevel.ALWAYS);
                if (!hiWebOsFrame.is_create_memc_timer) {
                    //debugPrint("[xuehongfeng] is close page open memc", DebugLevel.ALWAYS);
                    memcTimer = setTimeout(Enalbe_memc_page_close, 500);
                    hiWebOsFrame.is_create_memc_timer = true;
                }

            }
            else if (isCurrentAppHimedia() && (hiWebOsFrame.getCurrentPage().id == "app_lau_browser")) {
                if (16 != GlobalFlagShareInBrowser) {
                    model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_VOLUME_CHANGE_IN);
                }
            }
            //else if (100 == GLOBAL_MEMC_STATE_FOR_NETFLIX && hiWebOsFrame.isCurrentModule("app")) {
            //
            //    debugPrint("open netflix memc", DebugLevel.ALWAYS);
            //    if (!!hiWebOsFrame.memcTimer2) {
            //        clearTimeout(hiWebOsFrame.memcTimer2);
            //    }
            //    hiWebOsFrame.memcTimer = setTimeout("model.video.setEnumSmoothMotion(100);", 500);
            //}

            break;
        case 2:

            if (hiWebOsFrame.getCurrentArea() == "EU") {
                DBG_INFO("set enum smooth motion[102]");
                model.video.setEnumSmoothMotion(102);
            }
            break;
        case 3:
            if (hiWebOsFrame.getCurrentArea() == "EU") {
                DBG_INFO("set enum smooth motion[103]");
                model.video.setEnumSmoothMotion(103);
            }
            break;
        default :
            DBG_ERROR("parameter[" + status + "] error");
            break;
    }
}


//以下为临时代码,正式发布删除
function testfocus() {
    hiWebOsFrame.setHtmlTxt("ziduan", "neirong ");
    //-GHL_DEL-//console.log(hiWebOsFrame.getHtmlTxt("ziduan"));
}

function setCurrSignalInput(usemode){
    if(usemode == 1) {
        var defSource = 'HDMI 1';
    }
    else
    {
        var defSource = 'TV';
    }
    var sourceHDMI1idx = 0;
    var SignalInputId = 0;
    var SignalInputItem = [];
    var SignalInputIditem = [];
    var InputSeq = ["HDMI 1","HDMI 2","HDMI 3","HDMI 4","TV","SCART","COMPONENT","AV"];
    var j = 0;
    var sourceItem= tv? model.source.getInputName(): [
        "0", "TV", "0", "0", "", "0",
        "1", "AV", "1", "0", "", "0",
        "2", "COMPONENT", "0", "0", "", "0",
        "3", "HDMI 1", "1", "0", "", "0",
        "4", "HDMI 2_UHD", "0", "1", "", "0",
        "5", "HDMI 3", "1", "0", "", "0",
        "6", "HDMI 4", "1", "0", "", "0"
    ];
    DBG_INFO("sourceItem is " + objToString(sourceItem));
    for(var id=0;id<sourceItem.length/6;id++)
    {
        if(defSource.toLowerCase().replace(" ", "") == sourceItem[id*6+1].toLowerCase().replace(" ", ""))
        {
            sourceHDMI1idx = sourceItem[id*6];
            break;
        }
    }
   SignalInputId = sourceHDMI1idx;
    for(var i=0;i<sourceItem.length/6;i++){
        if(sourceItem[i*6+2] == 0) {
            if (sourceItem[i*6] == 0) {
                    var ret = typeof (livetvchlist) != "undefined" && livetvchlist.hasChannels();
                    var TVsignal = tv ? ret : true;
                    if (TVsignal) {
                        SignalInputItem[j] = sourceItem[i*6+1];
                        SignalInputIditem[j] = sourceItem[i*6];
                        j++;
                    }
            }
            else
            {
                SignalInputItem[j] = sourceItem[i*6+1];
                SignalInputIditem[j] = sourceItem[i*6];
                j++;
            }
        }
        }
    if(SignalInputItem.length>0)
    {
        for(var k=0;k<InputSeq.length;k++)
        {
            for(var n = 0;n<SignalInputItem.length;n++)
            {
                if(!!SignalInputItem[n].toUpperCase().replace(" ", "").match(InputSeq[k].replace(" ", "")))
                {
                    SignalInputId = SignalInputIditem[n];
                    k = InputSeq.length;
                    break;
                }
            }

        }
    }

    debugPrint("[xuehongfeng] current signal input is"+SignalInputId,DebugLevel.ALWAYS);
    model.source.InputSet(SignalInputId);
   //model.system.setSystemDefaultInput(parseInt(SignalInputId,10));

}
function ExitWizardAftTenMinutes(a) {

    if (a > 600 && hiWebOsFrame.getCurrentPage().id != "boe_netbg_page_id") {
        //var pagesIncludingNetbg=['boe_ethernet_result','boe_NetworkWifiSetPage','boe_NetworkWifiPWInputDialog','boe_NetworkWifiAddDialog','boe_NetworkEthernetSetPage']
        var currpage = hiWebOsFrame.getCurrentPage();
        debugPrint("[xuehongfeng]current pageid" + currpage.id, DebugLevel.ALWAYS);
        if (currpage.module != "wizard") {
            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            closePagesOrModuleByPage(hiWebOsFrame.getPageByIdFromSdkPages('boe_bg_page_id'));
            if (tv == true) {
                setCurrSignalInput(1);
                model.mpctrl.StopMpctrl(null);
                setTimeout(function () {
                    resumeDTV();
                }, 500);
                model.cec.setIsMiracastExist(0);
                if(getCurrVeraForWizard()=='EU')
                {
                    var countrycode = readFileFromNative("hisenseUI/currentcty.txt", 1);
                    model.basicSetting.setTvsetLocation(countrycode);
                    var countryname = getCountryNamebyCode(countrycode);
                    hiWebOsFrame.setCurrentCountry(countryname);

                    var curzonecodeJson = readFileFromNative("hisenseUI/currentzone.json", 1);
                    var curzonecode = curzonecodeJson.timezonecode;
                    model.timerfunc.setNewTimeZone(curzonecode);

                }
                model.system.setUserMode(1);
                model.video.setEnumPictureMode(1);
                startLiveTv();
            }
        }
        else {
            hiWebOsFrame.boe_bg_page_id.close();
            if(currpage.id == "boe_disinfo_page_id" || currpage.id == "boe_disclaimer_page_id")
            {
                boeSetFromDialogFlag(1);
                if(currpage.id == "boe_disinfo_page_id") {
                    hiWebOsFrame.boe_disclaimer_page_id.close();
                }
            }
            currpage.close();
            if (!!hiWebOsFrame.boe_netbg_page_id) {
                hiWebOsFrame.boe_netbg_page_id.close();
            }
            hiWebOsFrame.createPage('boe_retail_dialog', null, currpage, null, function (a) {
                hiWebOsFrame.boe_retail_dialog = a;
                a.open();
                a.hiFocus();
            });
            if (tv == true) {
                setCurrSignalInput(1);
                model.mpctrl.StopMpctrl(null);
                setTimeout(function () {
                    resumeDTV();
                }, 500);
                model.cec.setIsMiracastExist(0);
                if(getCurrVeraForWizard()=='EU')
                {
                    var countrycode = readFileFromNative("hisenseUI/currentcty.txt", 1);
                    model.basicSetting.setTvsetLocation(countrycode);
                    var countryname = getCountryNamebyCode(countrycode);
                    hiWebOsFrame.setCurrentCountry(countryname);

                    var curzonecodeJson = readFileFromNative("hisenseUI/currentzone.json", 1);
                    var curzonecode = curzonecodeJson.timezonecode;
                    model.timerfunc.setNewTimeZone(curzonecode);

                }
                model.system.setUserMode(1);
                model.video.setEnumPictureMode(1);
                //closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            }

        }
        testRemoveSDKIntervalFun();
    }
}


function testAddSDKIntervalFun() {
    hiWebOsFrame.registerSDKIntervalFun("aa", ExitWizardAftTenMinutes);
}

function testRemoveSDKIntervalFun() {
    hiWebOsFrame.unRegisterSDKIntervalFun("aa");
}

function openLiveTVModule(openParam, needInit) {
    DBG_INFO("openLiveTVModule");
    if (!hiWebOsFrame[LiveTVModule.MAIN] || !hiWebOsFrame[LiveTVModule.VOLUME] || !hiWebOsFrame[LiveTVModule.INFO_BAR]) {
        hiWebOsFrame.createPage('livetv_volume', null, null, 2000, function (vol) {
            hiWebOsFrame["livetv_volume"] = vol;
            hiWebOsFrame["livetv_volume"].open();
            hiWebOsFrame.createPage('livetv_info_bar', null, null, null, function (pageInfo) {
                hiWebOsFrame["livetv_info_bar"] = pageInfo;
                hiWebOsFrame.createPage('livetv_main', null, null, null, function (pageLive) {
                    hiWebOsFrame.blankPage = hiWebOsFrame["livetv_main"] = pageLive;
                    hiWebOsFrame.createPage(LiveTVModule.CHANNEL_LIST, null, null, null, function (pageList) {
                        hiWebOsFrame[LiveTVModule.CHANNEL_LIST] = pageList;
                        livetvmain.initLiveTVMain();
                        livetvchlist.initChannelList();
                        hiWebOsFrame["livetv_main"].open();
                        hiWebOsFrame["livetv_main"].hiFocus();
                        if (!!openParam && typeof(openParam) == "function") {
                            openParam();
                        }
                    });
                });
            });
        });
    }
    else {
        if (!!needInit) {
            livetvmain.initLiveTVMain();
        }
        if (!!openParam) {
            if (Array.isArray(openParam)) {
                livetvmain.setOpenFlag(openParam);
            }
            else if (typeof(openParam) == "function") {
                openParam();
            }
        }
        hiWebOsFrame["livetv_main"].open();
        hiWebOsFrame["livetv_main"].hiFocus();
    }
}

function closeLiveTVModule(id) {
    debugPrint("__________closeliveTVmodule function begin____________");
    try {
        if (!!id) {
            if (!!hiWebOsFrame[id] && hiWebOsFrame[id].visible) hiWebOsFrame[id].close();
        }
        else {
            // add by ghl, epg_detail_page may open on livetv
            var livetvids = [
                LiveTVModule.MAIN, LiveTVModule.CHANNEL_LIST,
                LiveTVModule.INFO_BAR, LiveTVModule.PASSWORD_DIALOG,
                LiveTVModule.AUTO_STANDBY, LiveTVModule.SEARCH_DIALOG,
                LiveTVModule.OPERATE_TIP, LiveTVModule.CHANNEL_LIST_FILTER];
            for (var i = 0; i < livetvids.length; i++) {
                try {
                    if (!!hiWebOsFrame[livetvids[i]] && hiWebOsFrame[livetvids[i]].visible) {
                        if(LiveTVModule.PASSWORD_DIALOG == hiWebOsFrame[livetvids[i]].id){
                            hiWebOsFrame[livetvids[i]].destroy();
                        }
                        else{
                            hiWebOsFrame[livetvids[i]].close();
                        }
                    }
                }
                catch (ex) {
                    DBG_ERROR("close[" + livetvids[i] + "] error." + ex.message);
                }
            }
        }
    }
    catch (ex) {
        DBG_ERROR("close livetv error:" + ex.message);
    }
}
//解锁之后的回调函数
function unLockPassWordCallBack() {
    DBG_ERROR("input password finish!");
    //获取一下当前时间
    var currentTime = parseInt(getDVBLongTime());
    if (currentTime >= endTimeOfScheduleRecord) {
        DBG_ALWAYS("current time is bigger than endTimeOfScheduleRecord");
        if (isScheduleRecord) {
            isScheduleRecord = false;
        }
        if (prgrmInfoOfRecordTip != null) {
            prgrmInfoOfRecordTip = null;
        }
        return;
    }
}

function GingaAboutInit() {
    try {
        hiWebOsFrame.createPage('ginga_app', null, null, null, function (ginga_app) {
            hiWebOsFrame.ginga_app = ginga_app;
//            gingaApp.open();
//            gingaApp.hiFocus();
//            gingaApp.rewriteDataOnly();
            ginga.GingaInit();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function BluetoothInit() {
    try {
        model.bluetooth.onDevicesConnectChaged = DevicesConnectChaged;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function setSATimezoneOffset() {
    if ("SA" == hiWebOsFrame.getCurrentArea()) {
        hisenseUITZSeconds += 3 * 3600;
        DBG_INFO("SA timezone needs add 3 hours offset");
    }
    else if ("iran" == hiWebOsFrame.getCurrentCountry().toLowerCase()) {
        hisenseUITZSeconds -= 3.5 * 3600;
        DBG_INFO("Iran timezone needs minus 3.5 hours offset");
    }
}

function Glass3DInit() {
    try {
        model.video.on3dGlassHintChaged = on3dGlassHintChaged;
        var glass3dVal = model.video.get3dGlassHint();
        on3dGlassHintChaged(glass3dVal);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function getCurrentTVNO() {
    if(!!MixBarserviceNo){
        return MixBarserviceNo;
    }
    try {
        MixBarserviceNo = model.system.getServiceNo();
        debugE("------------->serviceNo:" + MixBarserviceNo);
        debugE("------------->version:" + DeviceInfo.getInstance().getVersionInfo());

    }
    catch (ex) {
        debugE(ex);
        MixBarserviceNo="";
    }
    return MixBarserviceNo;
}

function getHeadphoneInsertState(){
    try {
        var insertState = 0;
        if ('EU' == InitArea) {
            insertState = model.sound.getHeadphoneInsert();
            DBG_INFO('model.sound.getHeadphoneInsert(): '+insertState);
            (typeof (insertState) == UNDEFINED_DEFSTR) && (insertState = 0);
        }
        return insertState;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function HeadphoneInsertInit() {
    try {
        if ('EU' == InitArea) {
            var headphoneInsertState = getHeadphoneInsertState();
            onHeadphoneInsertChaged(headphoneInsertState, true);
            model.sound.onHeadphoneInsertChaged = onHeadphoneInsertChaged;
            model.sound.onHeadphoneInsertTvMuteChaged = onHeadphoneInsertTvMuteChaged;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var halfAnHourtmr = 0;
function setHalfAnHourTimer(flag) {
    try {
        DBG_INFO("set half an hour timer [" + flag + "]");
        clearInterval(halfAnHourtmr);
        if (flag) {
            halfAnHourtmr = setInterval(function () {
                if ("open" == readFileFromNative(RETAILMODE_FLAG_FILE, 0)) {
                    DBG_INFO("action half an hour on.")
                    model.system.actHalfAnHourIdle();
                }
                else {
                    DBG_ERROR("epos has been stopped.");
                }
            }, 30 * 60 * 1000);
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function eposOnCloseClearHalfAnHour() {
    setHalfAnHourTimer(false);
}
function isEUXT910() {
    if(initBrand != "his"){
        return false;
    }
    var serviceNo = "";
    try {
        serviceNo = model.system.getServiceNo();
        DBG_ALWAYS("serviceNo is : " + serviceNo);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    if(InitArea == "COL"){
        return true;
    }
    if(InitArea == "EM" &&
        ((serviceNo.indexOf("K300") != -1)||
            (serviceNo.indexOf("K3300") != -1)||
            (serviceNo.indexOf("K5501") != -1)||
            (serviceNo.indexOf("K701") != -1)||
            (serviceNo.indexOf("M7000") != -1))){
        return true;
    }
    if (InitArea == "EU" &&
        ((serviceNo.indexOf("XT910") != -1)||
            (serviceNo.indexOf("K321") != -1)||
            (serviceNo.indexOf("K3300") != -1)||
            (serviceNo.indexOf("M2161") != -1)||
            (serviceNo.indexOf("K5500") != -1)||
            (serviceNo.indexOf("K300") != -1)||
            (serviceNo.indexOf("K700") != -1)||
            (serviceNo.indexOf("K720") != -1)||
            (serviceNo.indexOf("M7000") != -1)||
            (serviceNo.indexOf("M5600") != -1)||
            (serviceNo.indexOf("K5502") != -1))) {
        return true;
    } else {

        return false;
    }
}

function locationFun1008(idx) {
    return parseInt(idx / 3) * 240;
}
function locationFun1009(idx) {
    return parseInt(idx / 3) * 240;
}
function locationFun1010(idx) {
    return parseInt(idx / 3) * 426;
}
function locationFun1011(idx) {
    return parseInt(idx / 3) * 426;
}
function locationFun1012(idx) {
    return parseInt(idx / 4) * 255;
}
function locationFun1013(idx) {
    return parseInt(idx / 4) * 255;
}
function t1009WidthFun(w, _count) {
    return parseInt((idx + 1) / 3) * 240 + 1000;
}


function createLauncherPage(pageId, func, idx) {
    hiWebOsFrame.createPage(pageId, null, null, idx, function(page) {
        hiWebOsFrame[pageId] = page;
        switch(pageId){
            case "launcher_stabar":
                if ('SA_OEM' == g_launcherBrand) {
                    createLauncherPage('OEMlauncherPage', null, null);
                }else{
                    createLauncherPage('launcher_allapps', func, null);
                }
            break;
            case "launcher_allapps":
                createLauncherPage('myLauncher', func, null);
            break;
            case "myLauncher":
                var homePage = launcherNBar.preloadlauncherdata();
                if (!!homePage) {
                    hiWebOsFrame.createPage(homePage.id, null, page, null, function(a) {
                        if(CREATE_STATE.NONE == launcherCreateState) return;
                        launcherCreateState = CREATE_STATE.NONE;
                        DBG_INFO("preload success");
                        if (null != func) func();
                    });
                }
                else {
                    launcherCreateState = CREATE_STATE.NONE;
                    DBG_INFO("preload success, but first page open failed");
                    if (null != func) func();
                }
            break;
            case "VIDAALiteNavPage":
                hiWebOsFrame[pageId] = null;
                hiWebOsFrame.myLauncher = page;
                var i = 0;
                preLoadVIDAALiteLauncherPages(i, page, func);
                break;
            case "OEMlauncherPage":
                hiWebOsFrame[pageId] = null;
                hiWebOsFrame.myLauncher = page;
                preloadOEMLauncherdata();
                launcherSBar.setOEMStateBar();
                DBG_ERROR("preload success!!!!!!!!!!!!!!!!!!");
                if(CREATE_STATE.NONE == launcherCreateState) return;
                launcherCreateState = CREATE_STATE.NONE;
                if (null != func) func();
            break;
            case "livetv_volume":
                createLauncherPage("livetv_info_bar", func, null);
            break;
            case "livetv_info_bar":
                createLauncherPage("livetv_channel_list", func, null);
            break;
            case "livetv_main":
                hiWebOsFrame.blankPage = page;
                createLauncherPage("livetv_volume", func, 2000);
            break;
            case "livetv_channel_list":
                if ('5655_EU_MARKET' != currentPlatform_config && 'APP_5882_SA' != currentPlatform_config && currentPlatform_config != '5655_CO_MARKET') {
                    resetStateIfError(func);
                    launcherCreateState = CREATE_STATE.CREATING;
                    if ('SA_OEM' == g_launcherBrand) {
                        createLauncherPage('OEMlauncherPage', func, null);
                    }
                    else if('VIDAALite' == g_launcherBrand){
                        createLauncherPage('VIDAALiteNavPage', func, null);
                    }
                    else {
                        createLauncherPage('launcher_stabar', func, null);
                    }
                }
                else {
                    func();
                    preloadLauncher();
                }
            break;
            default:
            break;
        }
    });
}

function preLoadVIDAALiteLauncherPages(i, page, func) {

    var tmpOrder = VIDAALiteNavPageData.operateData.pageIdOrder;

    try{
        if(i == tmpOrder.length) {
            if(CREATE_STATE.NONE == launcherCreateState) return;
            launcherCreateState = CREATE_STATE.NONE;
            DBG_ERROR("VIDAALite launcher load success");
            if (null != func) func();
            //PreLoadSetting();
            return;
        }
        else {
            if(tmpOrder[i] == 'VIDAALiteTvInput') {
                preLoadVIDAALiteLauncherPages(++i, page, func);
            }
            else {
                hiWebOsFrame.createPage(tmpOrder[i], null, page, null, function(a) {
                    hiWebOsFrame[tmpOrder[i]] = a;
                    preLoadVIDAALiteLauncherPages(++i, page, func);
                });
            }
        }
    }
    catch (e) {
        DBG_ERROR(e.message);
    }
}

var preloadLauncherTimer = null;
function preloadLauncher() {

    preloadLauncherTimer = setTimeout(function () {
        if (hiWebOsFrame["myLauncher"]) return;
        DBG_INFO("preload launcher.");
        launcherCreateState = CREATE_STATE.CREATING;
        resetStateIfError(null);
        if ('SA_OEM' == g_launcherBrand) {
//            createLauncherPage('OEMlauncherPage', null, null);
            createLauncherPage('launcher_stabar', null, null);
//            createSAOEMLauncher();
        }
        else if('VIDAALite' == g_launcherBrand){
            debugE("currentPlatform is " + currentPlatform_config);
            //根据市场区分加载viddalite lanucher css    5655EU去掉动画
            hiWebOsFrame.setModuleAttr("VIDAALiteNavPage", "cssPath", cssPath_config_Nav);
            hiWebOsFrame.setModuleAttr("VIDAALiteAppPage", "cssPath", cssPath_config_App);
            hiWebOsFrame.setModuleAttr("VIDAALiteAppPage_2006", "cssPath", cssPath_config_App_2006);
            hiWebOsFrame.setModuleAttr("VIDAALiteMediaPage", "cssPath", cssPath_config_Media);
            hiWebOsFrame.setModuleAttr("VIDAALiteRecommendPage", "cssPath", cssPath_config_Recommend);
            hiWebOsFrame.setModuleAttr("VIDAALiteRecommendationEUPage", "cssPath", cssPath_config_RecommendEU);
            hiWebOsFrame.setModuleAttr("VIDAALiteFreeViewPage", "cssPath", cssPath_config_FreeView);
            hiWebOsFrame.setModuleAttr("VIDAALiteVideoPage", "cssPath", cssPath_config_Video);
            hiWebOsFrame.setModuleAttr("VIDAALiteTvInput", "cssPath", cssPath_config_Input);
            createLauncherPage('VIDAALiteNavPage', null, null);
        }
        else{
            createLauncherPage('launcher_stabar', null, null);
        }
    }, 5 * 1000);
}


function resetStateIfError(func) {
    setTimeout(function () {
        if (CREATE_STATE.NONE != launcherCreateState) {
            launcherCreateState = CREATE_STATE.NONE;
            DBG_ERROR("preload launcher timeout.");
            if (null != func) func();
        }
    }, 10000)
}

function CREATE_STATE() {
}
CREATE_STATE.NONE = 0;
CREATE_STATE.CREATING = 1;
CREATE_STATE.CREATED = 2;
CREATE_STATE.FOCUSLAUNCHER = 3;
CREATE_STATE.FOCUSALLAPPS = 4;


var lastStateNetflix;
function onEnterSuspendChanged(val){
    // if("EU" != InitArea) return;
    if(0 == val || 1 == model.channelSearch.getRunning())return;

    suspendFlag = (1 == val);
    waitSuspendPowerOn = (1 == val);
    model.usb.onVstrLatestEventChaged = null;
    if (checkIsAppOn()) {
        //closeDOthersModule("");
        lastStateNetflix = !!hiWebOsFrame["app_netflix"] && hiWebOsFrame["app_netflix"].visible;
        return;
    }
    else if(hiWebOsFrame.isCurrentModule("launcher") ||
        hiWebOsFrame.isCurrentModule("allapps")){
        DBG_ALWAYS("stay on this page");
    }
    else if(hiWebOsFrame.isCurrentModule("accuweather")){
        accuMain.backToOri();
    }
    else{
        closeDOthersModule("");
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    vol.closeMutePage();
    //model.system.SwitchOffTv();
}
function recoverAppState(){
    clearTimeout(usbNfyTimer);
    suspendFlag = false;
    //if(canProcessVolume() && 1 == model.sound.getMainMute()) model.sound.setMainMute(0);
    vol.openMutePage();
    if("app_factory" == hiWebOsFrame.getCurrentPageId()){
        hiWebOsFrame.lockAllKeys("recover");
        needReumeLiveTVFromFac = true;
        onStateOpenChaged(0);
        hiWebOsFrame.unLockAllKeys("recover");
    }
    var netFlixPowerOn = (1 == model.system.getOpenFromStandby());
    if(netFlixPowerOn || lastStateNetflix){
        lastStateNetflix = false;
        model.system.setOpenFromStandby(0);
        asyncStartApp("app_netflix", "netflix", false, false, netFlixPowerOn, true);
    }
    usbNfyTimer = setTimeout(function () {
        model.usb.onVstrLatestEventChaged = onUsbStateChanged;
    }, 20000);
 /*
    var content = readFileFromNative("suspended_app", 0);
    if(null == content || !content.pageId){
        return;
    }
    asyncStartApp(content.pageId, content.command, false, false, false, false, true);

 */
}

function closeEPGModule() {
    var epgIds = [
        "epg_list_page",
        "epg_book_add_page",
        "epg_book_edit_page",
        "epg_book_schedule_page",
        "epg_book_conflict_page",
        "epg_detail_page",
        "epg_theme_color_page",
        "epg_book_weekly_page",
        "epg_fvp_detail_page",
        "epg"
    ];
    for (var i = 0; i < epgIds.length; i++) {
        try {
            if (!!hiWebOsFrame[epgIds[i]] && hiWebOsFrame[epgIds[i]].visible) {
                hiWebOsFrame[epgIds[i]].close();
            }
        }
        catch (ex) {
            DBG_ERROR("close[" + epgIds[i] + "] error." + ex.message);
        }
    }
}

function epgBackToOri (oprtData, data, _this) {
    if(!_this) _this = this;
    if (null == _this.origin) {
        DBG_ERROR("page[" + _this.id + "]do not have origin.");

    }
    else {
        _this.close();
        if ("epg" == _this.origin.id) {
            hiWebOsFrame.epg.hiFocus();
        }
        else if("epg_book_schedule_page" == _this.origin.id){
            epgBkSchedule.initOperateData(true);
            _this.origin.open();
            _this.origin.hiFocus();
        }
        else if("epg_book_edit_page" == _this.origin.id){
            _this.origin.hiFocus();
        }
        else {
            openLiveTVModule([Msg.INFO, 0]);
        }
    }
}

function showPowerOffTip(flag,keyCode){
    powerOffTipFlag = flag;
    clearTimeout(powerOffTipTimer);
    clearTimeout(powerOffSourceTimer);
    if (0 == flag && keyCode == hiWebOsFrame.getKeyValues().keyPowerKeyPad) {
        DBG_ALWAYS("show tip");
        $("#power_off_tip").text(getCurrentContentLanguage("Press and hold this button to power off your TV"));
        $("#power_off_tip").css("display", "block");
    }

    powerOffTipTimer = setTimeout(closePowerOffTip, 5000);


}

function closePowerOffTip(){
    powerOffTipFlag = -1;
    powerOffTipTimer = 0;
    powerOffSourceTimer = 0;
    $("#power_off_tip").css("display", "none");
    DBG_ALWAYS("close tip");
}
function keyPowerPadMap(event) {
    clearTimeout(powerOffSourceTimer);

        if (event.keyCode == hiWebOsFrame.getKeyValues().keyPowerKeyPad ||
            event.keyCode == hiWebOsFrame.getKeyValues().keyPadInput) {
            if (!HOTElKEYBboardLock) {
                // DBG_ERROR("event type[" + event.type + "]");
                if (!hiWebOsFrame.getKeyRepeatMode() && hiWebOsFrame.getCurrentPageId() == "setting_pic_Source_page") {
                    showPowerOffTip(1, event.keyCode);
                    event.keyCode = hiWebOsFrame.getKeyValues().keyRight;
                    return;
                }
                else if (!hiWebOsFrame.getKeyRepeatMode() && hiWebOsFrame.getCurrentPageId() == "VIDAALiteTvInput") {
                    showPowerOffTip(1, event.keyCode);
                    event.keyCode = hiWebOsFrame.getKeyValues().keyRight;
                    event.from = "singleKey";
                    powerOffSourceTimer = setTimeout(function () {
                        DBG_INFO("timeout change source");
                        closePowerOffTip();
                        if (tv) {
                            keyboard.dynamicDispatchKeyEvent("keydown", hiWebOsFrame.getKeyValues().keyEnter, "singleKey");
                        }
                    }, 3000);
                    return;
                }

        //if (-1 == powerOffTipFlag) {
        //    showPowerOffTip(0,event.keyCode);
        //    hiWebOsFrame.lockAllKeys("source");
        //    setTimeout(function () {
        //        DBG_INFO("open source");
        //        hiWebOsFrame.unLockAllKeys("source");
        //        if (tv) {
        //            keyboard.dynamicDispatchKeyEvent("keydown", hiWebOsFrame.getKeyValues().keySource, "singleKey");
        //        }
        //
        //        // closePowerOffTip();
        //    }, 20);
        //}
        else if (powerOffTipFlag >= 0 && hiWebOsFrame.getKeyRepeatMode() && "keyup" == event.type) {

                    showPowerOffTip(1, event.keyCode);
                    DBG_INFO("power off by long press");
                    closePowerOffTip();
                    //if (event.keyCode == hiWebOsFrame.getKeyValues().keyPowerKeyPad) {
                    //    model.system.SwitchOffTv();
                    //}
                }
            }
            else {
                event.keyCode = 0;
            }
        }

}

function oneKeyOpenVIDAALauncherInput() {
    DBG_INFO('oneKeyOpenVIDAALauncherInput!!!');
    if (hiWebOsFrame.isCurrentModule("launcher")) {
        onKeySourceOpenVIDAALiteInputsPage();
    }
    else if (hiWebOsFrame.isPageExist("myLauncher") || hiWebOsFrame.isPageExist("OEMlauncherPage")
        ||hiWebOsFrame.isPageExist("VIDAALiteNavPage")) {
        VIDAALiteLauncherFirstCreateFromSourceKey = true;
        VIDAALiteLauncherFirstCreateFromAllAppsKey = false;
        hiWebOsFrame.myLauncher.operateData.callBackFunc = stopAppBackToLauncherInputCallBack;
        if (checkAndCloseIfAppOn(hiWebOsFrame.myLauncher)) {
//            launcherCreateState = CREATE_STATE.CREATING;
            hiWebOsFrame.lockAllKeys();
            setTimeout(function(){hiWebOsFrame.unLockAllKeys();},6000);
            DBG_ERROR('oneKeyOpenVIDAALauncherInput!!!');
            return false;
        }
        else {
            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            tryToCloseAllApps();
            hiWebOsFrame.myLauncher.operateData.callBackFunc = null;
            hiWebOsFrame.myLauncher.origin = null;
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
            onKeySourceOpenVIDAALiteInputsPage();
        }
    }
    else {
        var crntPage = hiWebOsFrame.getCurrentPage();
        DBG_INFO('oneKeyOpenVIDAALauncherInput!!!');
        if (null == crntPage) {
            closeDOthersModule("launcher");
            createVIDAALitelauncher();
        }
        else if ('app' == crntPage.module) {
            DBG_INFO('oneKeyOpenVIDAALauncherInput!!!');
            VIDAALiteLauncherFirstCreateFromSourceKey = true;
            VIDAALiteLauncherFirstCreateFromAllAppsKey = false;
            hiWebOsFrame.createPage("VIDAALiteNavPage", null, null, null, function (a) {
                hiWebOsFrame.myLauncher = a;
                hiWebOsFrame.myLauncher.operateData.callBackFunc = stopAppBackToLauncherInputCallBack;
                asyncStopApp(hiWebOsFrame.getCurrentPageId(), hiWebOsFrame.myLauncher);
            });
        }
        else if (("setting" == crntPage.module || "settingfirst" == crntPage.module)
            && !!hiWebOsFrame.settingsFirst
            && !!hiWebOsFrame.settingsFirst.origin
            && ("app" == hiWebOsFrame.settingsFirst.origin.module)) {
            var oriPage = hiWebOsFrame.settingsFirst.origin;
            VIDAALiteLauncherFirstCreateFromSourceKey = true;
            VIDAALiteLauncherFirstCreateFromAllAppsKey = false;
            hiWebOsFrame.createPage("VIDAALiteNavPage", null, null, null, function (a) {
                closePagesOrModuleByPage(crntPage);
                hiWebOsFrame.myLauncher = a;
                asyncStopApp(oriPage.id, hiWebOsFrame.myLauncher);
            });
        }
        else {
            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            tryToCloseAllApps();
            createVIDAALitelauncher(true);
        }
    }
}

function stopAppBackToLauncherInputCallBack(){
    hiWebOsFrame.myLauncher.operateData.callBackFunc = null;
    VIDAALiteLauncherFirstCreateFromSourceKey = true;
    VIDAALiteLauncherFirstCreateFromAllAppsKey = false;
    hiWebOsFrame.myLauncher.origin = null;
    hiWebOsFrame.myLauncher.open();
    hiWebOsFrame.myLauncher.hiFocus();
    onKeySourceOpenVIDAALiteInputsPage();
}


function SettingFirOnClose(){
   // notifyMheg5State(1);
    //if(hiWebOsFrame.settingsFirst) hiWebOsFrame.settingsFirst.origin = null;
    try {
        var currSource = model.source.getCurrentSource();
        DBG_ALWAYS("SettingFirOnClose:currSource="+currSource);
        DBG_ALWAYS("IsExitSatePlayChnl"+IsExitSatePlayChnl);
        if (currSource == 0 &&IsExitSatePlayChnl) { // 搜台设置页重新锁频退出后livetv下台需要重新起播一次
            IsExitSatePlayChnl = false;
            var crntChannel = livetvmain.getCurrentChannelInfo();
            livetvchlist.changeChannel(null, crntChannel);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function notifyMheg5State(val){
    try{
        if(!FREEVIEWTEST) return;
        if(checkHBBTVKeySet()){
            DBG_ALWAYS("hbbtv is on don`t send menu status");
            return;
        }
        DBG_ALWAYS("notify mheg5[" + val + "]");
        if(tv) model.system.setPauseMheg5(val);
    }
    catch (ex){
        DBG_ERROR(ex.message);
    }
}

function openDebugLog(){
    if("5655_EU_MARKET" == currentPlatform_config) return;
    isLogOn = true;
}
function sevenKeyboard(){
  switch (MixBarserviceNo){
      case "LTDN40K321UWTSEU_1":
      case "LTDN40K321UWTSEU":
      case "LTDN40K321UWAU":
      case "LTDN40K321UWAU(1)":
      case "LTDN55K321UWT":
      case "LTDN50K321UWT":
      case "LTDN50K321UWT(1)":
      case "LTDN58K321UWAU":
      case "LTDN58K321UWAU(1)":
      case "LTDN43K300UWT":
      case "LTDN49K300UWT":
          return true;
      default:
          return false;

  }

}
/**
 * 设备信息类
 */
var DeviceInfo = {
    instance:"",
    createNew: function() {
        //自引用对象
        var deviceInfo = {};
        //设备标识码
        var deviceId= "";
        //版本信息
        var versionInfo = "";
        //机型信息
        var modelName = "";
        //品牌名称，该值也保存在initBrand全局变量中，后续考虑去掉
        var brandName = "";

        /*
         机型信息中可能的括号中的信息，VL2及后续机型中不允许在moduleName中体现括号信息
         此部分信息在versionInfo中包括，即第一个.之前的信息。
         如：HA65K5501UWT(0001)机型，其modelName仅是HA65K5501UWT
         在versionInfo是：V0001.01.00a.G1226。
         */
        var extendVersionInfo = "";

        /*
         * 此变量记录的值根据当前获得的modelName以及extendVersionInfo确定
         * 如果modelName中没有括号版本信息，但extendVersionInfo中是4位版本信息
         * 那么totalModelName的值即是： modelName(extendVersionInfo)
         * 这个变量可用于根据机型信息进行业务判断的场景。
         */
        var totalModelName = "";

        deviceInfo.setDeviceId = function(param) {
            deviceId = param;
        }
        deviceInfo.getDeviceId = function() {
            return deviceId;
        };

        deviceInfo.setVersionInfo = function(param) {
            versionInfo = param;
        }
        deviceInfo.getVersionInfo = function() {
            return versionInfo;
        };
        deviceInfo.setExtendVersionInfo = function(param) {
            extendVersionInfo = param;
        }
        deviceInfo.getExtendVersionInfo = function() {
            return extendVersionInfo;
        };
        deviceInfo.setModelName = function(param) {
            modelName = param;
        }
        deviceInfo.getModelName = function() {
            return modelName;
        };
        deviceInfo.setTotalModelName = function(param) {
            totalModelName = param;
        }
        deviceInfo.getTotalModelName = function() {
            return totalModelName;
        };
        deviceInfo.setBrandName = function(param) {
            brandName = param;
        }
        deviceInfo.getBrandName = function() {
            return brandName;
        };
        //TODO 通过底层接口获取deviceId
        deviceInfo.setDeviceId("");
        if(tv){
            deviceInfo.setVersionInfo(model.softupdate.getCurrentPacket());
            //DBG_ERROR("device versioninfo is :::::::"+deviceInfo.getVersionInfo());
            if(deviceInfo.getVersionInfo()!="" && deviceInfo.getVersionInfo().indexOf(".")!=-1){
                deviceInfo.setExtendVersionInfo(deviceInfo.getVersionInfo().substring(1,deviceInfo.getVersionInfo().indexOf(".")));
                //DBG_ERROR("extend device versioninfo is :::::::"+deviceInfo.getExtendVersionInfo());
            }
            deviceInfo.setModelName(getCurrentTVNO());
            var t = deviceInfo.getModelName();
            if(!!t && t.indexOf("(")<0){
                //DBG_ERROR("to here...get total model name...");
                if(deviceInfo.getExtendVersionInfo().length==4){
                    t = t+"("+deviceInfo.getExtendVersionInfo()+")";
                }else if(deviceInfo.getExtendVersionInfo() == "01"){
                    t = t+"(1)";
                }
                 //DBG_ERROR("total modelname is ::::::::"+deviceInfo.getTotalModelName());
            }
            deviceInfo.setTotalModelName(t);
            DBG_ERROR("total modelname is ::::::::"+deviceInfo.getTotalModelName());
            deviceInfo.setBrandName(initBrand);
        }else{
            deviceInfo.setVersionInfo("");
            deviceInfo.setExtendVersionInfo("");
            deviceInfo.setModelName("");
            deviceInfo.setBrandName("con");
        }

        return deviceInfo;
    },
    getInstance:function(){
        if(!DeviceInfo.instance){
            DeviceInfo.instance = DeviceInfo.createNew();
        }
        return DeviceInfo.instance;
    }


};
function getPVRFlag(){
    return PVRFlag;
}
function initPVRFlag(){
    //  PVRFlag = (!FREEVIEWTEST && initBrand != "con" && initBrand != "tho");
    //2017.02.06 调整PVR使能判断逻辑
    PVRFlag = filterByCondition();
    DBG_ERROR("PVRFlag is ::::::"+PVRFlag);
}
var PVR_FORBIDDEN_MODELS=",HE43N3000UWTS(0A00),HE50N3000UWTS(0A00),HE55N3000UWTS(0A00),HE50N3000UWTS(0011),HE65N3000UWTS(0010),";
/**
 * 如果当前品牌是Con || Tho，则返回 f;alse，否则，判断当前的机型是否在禁用机型之中，若是，则返回false；否则返回true;
 * @returns {boolean}
 */
function filterByCondition(){
    if(DeviceInfo.getInstance().getBrandName() == "con" || DeviceInfo.getInstance().getBrandName() == "tho") {
        return false;
    }else if (PVR_FORBIDDEN_MODELS.indexOf(","+DeviceInfo.getInstance().getTotalModelName()+",")!=-1){
        return false;
    }else{
        return true;
    }
}

/**
 * OEM特殊要求处理类
 */
var OEMFunction = {
    instance:"",
    OEMConditions:{
        FACHOTEL_ENTRY_MODE:1,
        ANYVIEW_NAME:2,
        CHANNELLIST_DISPLAY:3,
        DEFAULT_SATELLITE:4,
        CHANNEL_DELETE:5,
        SATELLITE_LIST:6,
        ANYVIEWSTREAM_NAME:7
    },
    createNew: function() {
        //自引用对象
        var o = {};


        //当前要求进入工厂菜单和酒店菜单的方式，con品牌和其他不同
        //返回true,是con品牌
        o.getFactoryHotelEntryModeFlag = function(){
            return (DeviceInfo.getInstance().getBrandName()=="con");
        };
        //当前要求con品牌时Anyviewcast的名称显示和其他不同
        //返回true,是con品牌
        o.getAnyviewNameFlag = function(){
            //return (DeviceInfo.getInstance().getBrandName()=="con");
            if(DeviceInfo.getInstance().getBrandName()=="con"){
                return "Air Screen";
            }else if(DeviceInfo.getInstance().getBrandName()=="cmo"){
                return "Mirror Share";
            }else{
                return "Anyview Cast";
            }
        }
        //当前要求con/tho/str三个品牌对频道列表展示有特别要求
        o.getChannelListDisplayFlag = function(){
            return new RegExp('con|tho|str','g').test(DeviceInfo.getInstance().getBrandName());
        }
        //当前要求con/tho/str三个品牌对默认卫星有特别要求
        o.getDefaultSatelliteFlag = function(){
            return new RegExp('con|tho|str','g').test(DeviceInfo.getInstance().getBrandName());
        }
        //当前要求con/tho/str三个品牌要有真删除频道的功能
        o.getChannelDeleteFlag = function(){
            return new RegExp('con|tho|str','g').test(DeviceInfo.getInstance().getBrandName());
        }
        //当前要求con/tho/str三个品牌要在手动搜台时选择卫星列表
        o.getSatelliteListFlag = function(){
            return new RegExp('con|tho|str','g').test(DeviceInfo.getInstance().getBrandName());
        }
        o.getAnyviewStreamName = function(){
            if(DeviceInfo.getInstance().getBrandName()=="con"){
                return "Multimedia Sharing";
            }else if(DeviceInfo.getInstance().getBrandName() == "cmo"){
                return "U-Net";
            }else{
                return "Anyview Stream";
            }
        }


        return o;
    },
    getInstance:function(){
        if(!OEMFunction.instance){
            OEMFunction.instance = OEMFunction.createNew();
        }
        return OEMFunction.instance;
    },
    getConditionCheckResult:function(param){
        var o =OEMFunction.getInstance();
        switch (param){
            case OEMFunction.OEMConditions.FACHOTEL_ENTRY_MODE:
                return o.getFactoryHotelEntryModeFlag();
            case OEMFunction.OEMConditions.ANYVIEW_NAME:
                return o.getAnyviewNameFlag();
            case OEMFunction.OEMConditions.CHANNELLIST_DISPLAY:
                return o.getChannelListDisplayFlag();
            case OEMFunction.OEMConditions.DEFAULT_SATELLITE:
                return o.getDefaultSatelliteFlag();
            case OEMFunction.OEMConditions.CHANNEL_DELETE:
                return o.getChannelDeleteFlag();
            case OEMFunction.OEMConditions.SATELLITE_LIST:
                return o.getSatelliteListFlag();
            case OEMFunction.OEMConditions.ANYVIEWSTREAM_NAME:
                return o.getAnyviewStreamName();
            default:
                return "";
        }


    }


};

