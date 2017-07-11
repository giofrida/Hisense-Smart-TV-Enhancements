/**
 * Created by Administrator on 2015-1-15.
 */
var needStartEpos = false;
function getSettingEposStartCountDownPageData(opt) {
    opt.CaE = [
        {
            "id": "setting_epos_countdown_content",
            "SelectedIndex": 1,
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "timer_text_pre",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "timer_text",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_wizard_btn_retailmode",
            "description": "retailmode",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "rightTo": "setting_sys_wizard_btn_homemode"},
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': "SettingStartRetailokHandler",//点击enter事件后处理开关转换
                'aftEscHandler': "SettingEposCountDownEscEnHandler"//点击enter事件后处理开关转换
            }
        },
        {
            "id": "setting_sys_wizard_btn_homemode",
            "description": "homemode",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": {"leftTo": "setting_sys_wizard_btn_retailmode"},
            "CaEType": "div",
            "handler": {
                'aftEnterHandler': "SettingStartHomeModeokHandler",//点击enter事件后处理开关转换
                'aftEscHandler': "SettingEposCountDownEscEnHandler"//点击enter事件后处理开关转换
            }
        }
    ];
    return PageDataSetttingEposCountdown;

}
var PageDataSetttingEposCountdown = {
    "timer_text_pre": {Data: "TV will enter store mode in 10 seconds"},
    "timer_text": {Data: "10s"},
    "setting_sys_wizard_btn_retailmode": {Data: "Store Mode"},
    "setting_sys_wizard_btn_homemode": {Data: "Cancel"},
    "operateData": {
        "parentpagelist": ["advance", "security", ""],
        "parentpage": 0,
        "curdatatype": 0,
        "datalist": [
            {
                "content": "TV will enter store mode in 10 seconds",
                "button1": "Store Mode",
                "button2": "Home Mode"
            },
            {
                "content": "TV will enter store mode in 10 seconds",
                "button1": "Store Mode",
                "button2": "Home Mode"
            }
        ]
    },
    "langData": {
        "TV will enter store mode in 10 seconds": [],
        "Store Mode": [],
        "Home Mode": []
    },
    rewrite: function (pageData) {
        pageData.timer_text_pre.Data = pageData.operateData.datalist[pageData.operateData.curdatatype].content;
        pageData.setting_sys_wizard_btn_retailmode.Data = pageData.operateData.datalist[pageData.operateData.curdatatype].button1;
        pageData.setting_sys_wizard_btn_homemode.Data = pageData.operateData.datalist[pageData.operateData.curdatatype].button2;
    }
};
function onOpenEposCountdownBox() {
    needStartEpos = false;
    countdowntimer();
}
function SettingEposStartCountDownPageonDestroy() {
    debugPrint("SettingEposStartCountDownPageonDestroy begin!");
    clearTimeout(timeout);
    hiWebOsFrame.setting_epos_countdown_content = null;
//    if (needStartEpos) {
//        //debugPrint(this.page.originPage);
//        startRetailmodeTimer(true);
//        hiWebOsFrame.epos.open();
//        hiWebOsFrame.epos.hiFocus();
//        //startePos(true);
//    }
}
function SettingStartHomeModeokHandler() {
    debugPrint("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$dhtSettingStartHomeModeokHandler", DebugLevel.ERROR);
    clearInterval(timeout);
    model.system.setUserMode(0);
    model.video.setEnumPictureMode(0);//energy saving //new 3->0 standard
    RefreshPicAboutAftSetUserMode();
    startLiveTv();
    needStartEpos = false;
    hiWebOsFrame["setting_epos_countdown_page"].close();
    hiWebOsFrame["setting_epos_countdown_page"].destroy();
}
function SettingStartRetailokHandler() {
    clearInterval(timeout);
    //debugPrint("fte go to ePos now!!\n")
    try {
//              var inputGroup = model.video.getEnumInputGroup();
        model.system.setUserMode(1);
//              model.video.SetPictureAdjustment(7, inputGroup, 1);//shop
    }
    catch (ex) {
        debugPrint("[fte]showRetailmodeTimeoutDialog set usermode error:" + ex, DebugLevel.ERROR);
    }
    debugPrint("go to ePos now!!", DebugLevel.ERROR);
    hiWebOsFrame["setting_epos_countdown_page"].close();
    startRetailmodeTimer(true);

    startePos(true);
    hiWebOsFrame["setting_epos_countdown_page"].destroy();


}
function SettingEposCountDownEscEnHandler() {
    debugPrint("SettingEposCountDownEscEnHandler" + this.page.operateData.parentpage);
    model.system.setUserMode(0);
    if (0 == this.page.operateData.parentpage) {
        this.page.close();
        hiWebOsFrame.settingssysad.open();
        hiWebOsFrame.settingssysad.hiFocus();
    }
    else if (1 == this.page.operateData.parentpage) {
        this.page.close();
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
    }
    else if (2 == this.page.operateData.parentpage) {
        //todo
        this.page.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        needStartEpos = false;
        this.page.destroy();
    }
}


var timer = 10;
var timeout = null;
function countdowntimer() {
    timeout = setInterval(function () {
        timer = parseInt(timer) - 1;
        if (timer <= 0) {
            clearInterval(timeout);
            //debugPrint("fte go to ePos now!!\n")
            try {
                // var inputGroup = model.video.getEnumInputGroup();
                model.system.setUserMode(1);
                //  model.video.SetPictureAdjustment(7, inputGroup, 1);//shop
            }
            catch (ex) {
                debugPrint("[fte]showRetailmodeTimeoutDialog set usermode error:" + ex, DebugLevel.ERROR);
            }
            debugPrint("go to ePos now!!", DebugLevel.ERROR);
//            setTimeout(function(){
            startRetailmodeTimer(true);
            startePos(true);
//            }, 1000);//delay 1s to show no signal first, then when launch ePos can close No Signal by closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());

            hiWebOsFrame["setting_epos_countdown_page"].close();
            hiWebOsFrame["setting_epos_countdown_page"].destroy();


        }
        var reg2 = /10/;

        var testContent = $("#timer_text_pre").html().replace(reg2, timer);
        $("#timer_text_pre").css("display","none");
        DBG_ALWAYS("________timerLANG______"+testContent);
        $("#timer_text_real").html(testContent);
    }, 1000);
}




