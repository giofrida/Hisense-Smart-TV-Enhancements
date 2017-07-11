/**
 * Created by Administrator on 15-5-19.
 */
var kPadIndex = 1;
var initKPad = function () {
    kPadIndex = 1;
}
var kPadKeyDownFunction = function (keycode) {
    DBG_ALWAYS("KEY  Down   :   " + keycode);
    switch (keycode) {
        case VK_LEFT:
            if (kPadIndex % 5 != 1) {
                //DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (kPadIndex - 1)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex - 1);
                kPadIndex--;
            }
            else {
                DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (kPadIndex + 4)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex + 4);
                kPadIndex = kPadIndex + 4;
            }
            break;
        case VK_RIGHT:
            if (kPadIndex % 5 > 0) {
                //DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (kPadIndex + 1)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex + 1);
                kPadIndex++;
            }
            else {
                DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (kPadIndex - 4)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex - 4);
                kPadIndex = kPadIndex - 4;
            }
            break;
        case VK_UP:
            if (kPadIndex <= 5) {
                //DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (10 + kPadIndex)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex + 10);
                kPadIndex = 10 + kPadIndex;
            }
            else {
                //DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (kPadIndex - 5)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex - 5);
                kPadIndex = kPadIndex - 5;
            }
            break;

        case VK_DOWN:
            if (kPadIndex > 10) {
                //DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (kPadIndex - 10)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex - 10);
                kPadIndex = kPadIndex - 10;
            }
            else {
                //DBG_INFO(kPadIndex);
                $("#kpad" + kPadIndex).css("background-color", "#49525c");
                $("#kpad" + (kPadIndex + 5)).css("background-color", "#00aaa6");
                changeButtonPic(kPadIndex, kPadIndex + 5);
                kPadIndex = kPadIndex + 5;
            }

            break;
        //BACK和ENTER在VK_UP中处理
        case VK_BACK:
            break;
        case VK_ENTER:

        default :
            break;
    }
}
var EU_keySet = [guijs.SYSCMD_1, guijs.SYSCMD_2, guijs.SYSCMD_3, guijs.SYSCMD_4, guijs.SYSCMD_5,
    guijs.SYSCMD_6, guijs.SYSCMD_7, guijs.SYSCMD_8, guijs.SYSCMD_9, guijs.SYSCMD_0, guijs.SYSCMD_MENU,
    guijs.SYSPRG_ALLAPP, guijs.SYSCMD_TEXT, guijs.SYSCMD_SUBTITLE, guijs.SYSCMD_EPG];
var kPadKeyUpFunction = function (keycode) {
    DBG_ALWAYS("KEY  Up   :   " + keycode);
    switch (keycode) {
        case VK_ENTER:
            //区分地区
            DBG_ALWAYS("KEY CODE IS " + kPadIndex);
            keyboard.send_key_to_dfb(EU_keySet[kPadIndex - 1]);
            if (kPadIndex > 10) {
                try {
                    //DBG_ALWAYS("NOW DISPLAY IS : " + hiWebOsFrame.icon);
                    if (kPadIndex != 11) {
                        closeKpad();
                    }
                    else {
                        closeKpadwithMenu();
                    }
                }
                catch (ex) {
                    DBG_ERROR("error !!!" + ex.message);
                }
            }
            break;

        case VK_BACK:
            try {
                //DBG_ALWAYS("NOW DISPLAY IS : " + hiWebOsFrame.icon);
                closeKpad();
            }
            catch (ex) {
                DBG_ERROR("error !!!" + ex.message);
            }

            break;
        default :
            break;
    }
}

var EUPicButtonArray = ["setting", "apps", "txt", "Subtitle", "EPG"];
var SAPicButtonArray = ["setting", "apps", "cc", "EPG"];
var changeButtonPic = function (lastIndex, nextIndex) {
    //需要区分区域,北美有-,南美有.其他用五个图片的。
    //暂时使用EM/EU版的定义
    if (lastIndex > 10) {
        $("#kpad" + lastIndex + "img").attr("src", "img/kPad/" + EUPicButtonArray[lastIndex - 11] + ".png");
    }
    if (nextIndex > 10) {
        $("#kpad" + nextIndex + "img").attr("src", "img/kPad/" + EUPicButtonArray[nextIndex - 11] + "_focus.png");
    }


}

var openKpad = function () {
    hiWebOsFrame.setKPadDisplay(true);
    $("#kpad").css("display", "block");
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (!!crntPage) {
        if (hiWebOsFrame.isCurrentModule("app")) {
            if ("app_lau_browser" == crntPage.id) {
                switch (appBrowser.getCurrentCommandType()) {
                    case CmdURLType.LAU_BROWSER_HIMEDIA:
                    case CmdURLType.LAU_BROWSER_PICASA:
                        //model......通知himedia取消按键
                        if (16 != GlobalFlagShareInBrowser) {
                            model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                        }
                        registerKeyCodesForKpadOnApp();
                        break;
                    default :
                        break;
                }
            }
            else if ("app_amazon" == crntPage.id
                || "app_vudu" == crntPage.id
                || "app_youtube" == crntPage.id
                || "app_netflix" == crntPage.id
                || "app_tv_store" == crntPage.id
                || "app_hi_browser" == crntPage.id) {
                registerKeyCodesForKpadOnApp();
            }
        }
    }
    else {
        DBG_ERROR("NO CUR PAGE");
    }
}

var closeKpad = function () {
    hiWebOsFrame.setKPadDisplay(false);
    $("#kpad").css("display", "none");
    var tempOri = hiWebOsFrame.getCurrentPage();
    if ("app" == tempOri.module) {
        if ("app_lau_browser" == tempOri.id) {
            switch (appBrowser.getCurrentCommandType()) {
                case CmdURLType.LAU_BROWSER_HIMEDIA:
                    //model......通知himedia注册按键
                    if (16 != GlobalFlagShareInBrowser) {
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
                    }
                    hiWebOsFrame.registerKeyCodesForAppWithKey([VK_BACK]);
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
        DBG_ERROR("NO CUR PAGE");
    }
}


var closeKpadwithMenu = function () {
    hiWebOsFrame.setKPadDisplay(false);
    $("#kpad").css("display", "none");


}


function registerKeyCodesForKpadOnApp() {
    var baseKey = [
        VK_EXIT, VK_LIVETV, VK_MENU, VK_LEFT, VK_ASPECT,
        VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
        VK_HOME,
        VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
        VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE, VK_ALLAPP,
        VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_VOLUME_UP,
        VK_KEYPAD_CHANNEL_DOWN, VK_KEYPAD_CHANNEL_UP, VK_EPG, VK_GUIDE,VK_KPAD,VK_BT_CONNECT,VK_LOWBATTERY
    ];
    keyboard.registerKeyCodes(baseKey);
    keyboard.setWantGroup(6);
}