/**
 * Created with JetBrains PhpStorm.
 * User: Lewis
 * Date: 14-3-5
 * Time: 上午8:57
 * To change this template use File | Settings | File Templates.
 * 2014-12-8 加入页面isStatic属性，表示页面是否在autoclose时是否destroy，页面级别属性，后期开关表版本需设置为模块级属性,临时修改了destroyModule函数
 * 2014-12-9 加入按键堆栈及相关处理
 * 2014-12-10 按键栈处理补充
 * 窗口Open、Close回调函数（系统级）,为两个打开或者关闭完成后的回调函数
 * getOtherConfig\setOtherConfig函数用于设置，比如memc设置等
 */

(function () {
    hiWebOsCore = function (options) {
        var $ = options.framework,
            $body,
            hiSDKSettings = {},
            defaults = {
                debug: true,
                preloadImages: false,
                animations: [ // 列举动画，优先排序
                    {name: 'fade', selector: '.fade'},
                    {name: 'slideup', selector: '.slideup'},
                    {name: 'slideleft', selector: '.slideleft, .slide, #hiweb > * > ul li a'}
                ],
                SDKIntervalFunList: {},//SDK主时钟函数列表，以map形式注册
                keyValues: {
                    "keyLeft": VK_LEFT, "keyUp": VK_UP, "keyRight": VK_RIGHT, "keyDown": VK_DOWN,
                    "keyEnter": VK_ENTER, "keyEsc": VK_BACK, "keyNum0": VK_0, "keyNum1": VK_1,
                    "keyNum2": VK_2, "keyNum3": VK_3, "keyNum4": VK_4, "keyNum5": VK_5, "keyNum6": VK_6,
                    "keyNum7": VK_7, "keyNum8": VK_8, "keyNum9": VK_9, "keyChannelUp": VK_CHANNEL_UP,
                    "keyChannelDown": VK_CHANNEL_DOWN, "keyMenu": VK_MENU, "keyGuide": VK_EPG,
                    "keyInfo": VK_INFO, "keyRed": VK_RED, "keyGreen": VK_GREEN, "keyYellow": VK_YELLOW,
                    "keyBlue": VK_BLUE, "keyPip": VK_PIP, "keyHome": VK_HOME, "keyPvr": VK_PVR, "keyStop": VK_STOP,
                    "keyTimeShift": VK_T_SHIFT, "keyPlay": VK_PLAY, "keyPause": VK_PAUSE, "keyFastFWD": VK_FAST_FWD,
                    "keyFastBKW": VK_FAST_BKW, "keyPreCH": VK_PRE_CH, "keyMedia": VK_MEDIA, "keyLiveTV": VK_LIVETV, "keyF1": VK_F1,
                    "keyTool": VK_TOOLS, "keyLast": VK_LAST, "keyNext": VK_NEXT, "keyExit": VK_EXIT, "keyChList": VK_CH_LIST,
                    "keySize": VK_ZOOM, "keyPMode": VK_PICTURE, "keySMode": VK_S_MODE, "keyLanguage": VK_LANGUAGE, "keySUBT": VK_SUBTITLE, "keyTeletext": VK_TELETEXT, "key3D": VK_CUSTOMER_3D,
                    "keyTVVoUp": VK_KEYPAD_VOLUME_UP, "keyTVVoDown": VK_KEYPAD_VOLUME_DOWN, "keyTVChUp": VK_KEYPAD_CHANNEL_UP,
                    "keyTVChDown": VK_KEYPAD_CHANNEL_DOWN, "keySpace": VK_SPACE, "keySource": VK_SOURCE, "keyPadInput": VK_KEYPAD_INPUT, "keyPadMenu": VK_KEYPAD_MENU, "keyFacM": VK_FAC_M, "keyCC": VK_CC, "keySleep": VK_SLEEP,
                    "keyNetflix": VK_NETFLIX, "keyAmazon": VK_AMAZON, "keyVudu": VK_VUDU, "keyYoutube": VK_YOUTUBE, "keyAllApp": VK_ALLAPP,
                    "keyA": VK_A, "keyB": VK_B, "keyC": VK_C, "keyD": VK_D, "keyE": VK_E, "keyF": VK_F, "keyG": VK_G, "keyH": VK_H, "keyI": VK_I,
                    "keyJ": VK_J, "keyK": VK_K, "keyL": VK_L, "keyM": VK_M, "keyN": VK_N, "keyO": VK_O, "keyP": VK_P, "keyQ": VK_Q,
                    "keyR": VK_R, "keyS": VK_S, "keyT": VK_T, "keyU": VK_U, "keyV": VK_V, "keyW": VK_W, "keyX": VK_X, "keyY": VK_Y,
                    "keyZ": VK_Z, "keya": VK_a, "keyb": VK_b, "keyc": VK_c, "keyd": VK_d, "keye": VK_e, "keyf": VK_f, "keyg": VK_g,
                    "keyh": VK_h, "keyi": VK_i, "keyj": VK_j, "keyk": VK_k, "keyl": VK_l, "keym": VK_m, "keyn": VK_n, "keyo": VK_o,
                    "keyp": VK_p, "keyq": VK_q, "keyr": VK_r, "keys": VK_s, "keyt": VK_t, "keyu": VK_u, "keyv": VK_v, "keyw": VK_w,
                    "keyx": VK_x, "keyy": VK_y, "keyz": VK_z, "keyShortLine": VK_SHORT_LINE, "keySpeech": VK_BT_CONNECT, "keyVoice": VK_VOICE,"keyLowBattery":VK_LOWBATTERY,
                    "keyKBBackspace": VK_KB_Backspace,
                    "keyBackSpace":VK_BACK_SPACE,
                    "VK_KB_COMMA": VK_KB_COMMA,
                    "VK_KB_DOT": VK_KB_DOT,
                    "VK_KB_SLASH": VK_KB_SLASH,
                    "VK_KB_LT": VK_KB_LT,
                    "VK_KB_GT": VK_KB_GT,
                    "VK_KB_SEMICOLON": VK_KB_SEMICOLON,
                    "VK_KB_COLON": VK_KB_COLON,
                    "VK_KB_QUESTION": VK_KB_QUESTION,
                    "VK_KB_SQM": VK_KB_SQM,
                    "VK_KB_DQM": VK_KB_DQM,
                    "VK_KB_EM": VK_KB_EM,
                    "VK_KB_AT": VK_KB_AT,
                    "VK_KB_WELL": VK_KB_WELL,
                    "VK_KB_DOLLOR": VK_KB_DOLLOR,
                    "VK_KB_PERSENT": VK_KB_PERSENT,
                    "VK_KB_JIAN": VK_KB_JIAN,
                    "VK_KB_AND": VK_KB_AND,
                    "VK_KB_STAR": VK_KB_STAR,
                    "VK_KB_LEFTBR": VK_KB_LEFTBR,
                    "VK_KB_RIGHTBR": VK_KB_RIGHTBR,
                    "VK_KB_BIGLEFTBR": VK_KB_BIGLEFTBR,
                    "VK_KB_BIGRIGHTBR": VK_KB_BIGRIGHTBR,
                    "VK_KB_LEFTBRACKET": VK_KB_LEFTBRACKET,
                    "VK_KB_RIGHTBRACKET": VK_KB_RIGHTBRACKET,
                    "VK_KB_HOR": VK_KB_HOR,
                    "VK_KB_DASH": VK_KB_DASH,
                    "VK_KB_DUN": VK_KB_DUN,
                    "VK_KB_SUB": VK_KB_SUB,
                    "VK_KB_EQEAL": VK_KB_EQEAL,
                    "VK_KB_ADD": VK_KB_ADD,
                    "VK_KB_WAVE": VK_KB_WAVE,
                    "VK_KB_RIGHTDASH": VK_KB_RIGHTDASH,
                    "VK_KB_BlankString": VK_KB_BlankString,
                    "keyVolumeDown": VK_VOLUME_DOWN,
                    "keyVolumeUp": VK_VOLUME_UP,
                    "keyMute": VK_MUTE,
                    "keyKPad":VK_KPAD,
                    "keySticker" :VK_STICKER,
                    "keyAudioDescription" : VK_AUDIO_DESCRIPTION,
                    "keyWuaki": VK_WUAKI,
                    "keyPowerKeyPad": VK_POWER_KEY_PAD

                },
                //                keyValues: {"keyLeft": 37, "keyUp": 38, "keyRight": 39, "keyDown": 40, "keyEnter": 13, "keyEsc": 1,
                //                    "keyNum0": 48, "keyNum1": 49, "keyNum2": 50, "keyNum3": 51, "keyNum4": 52, "keyNum5": 53, "keyNum6": 54,
                //                    "keyNum7": 55, "keyNum8": 56, "keyNum9": 57, "keyMenu": 66},
                ////todo                modulePages: null,
                currentPage: null,//当前页面（焦点页面）
                languages: [],
                currentLanguage: 0,
                protectPages: [],
                systemKeys: [],
                keySwitch: true,
                keySwitchExclude: [],
                isLoading: false,
                isLocking: false,
                AutoCloseTimeLength: 30,
                TranslateWay: "Page",//值：Page,SDK,翻译的方式，包括页面以及总体翻译两种，暂不同时支持二者
                SDKTranslatePackages: {},
                KeyStack: null,
                KeyStackLimit: 50,
                CssUrlSet: [],
                JsUrlSet: []

//todo                modulePageShowClass: "_displayShow",
//todo                modulePageHideClass: "_displayHide",
//todo                isDialog: false, //临时加入，代表是否在对话框模式下
//todo                menuCount: 0
            };
        //用于记录当前SDK管理的页面
        var SDKPages = [];
        //SDK内部时钟
        var timer = 0;
        var sh;

        //临时函数，正式发布去掉
        function cb_display() {
            $("#cb_currentTemplateFocusRight").html(hiSDKSettings.cb_currentTemplateFocusRight);
            $("#cb_currentTemplateIdx").html(hiSDKSettings.cb_currentTemplateIdx);
            $("#cb_relativeLeft").html(hiSDKSettings.cb_relativeLeft);
            $("#cb_currentTemplateSign").html(hiSDKSettings.cb_currentTemplateSign);
            $("#cb_currentFocus").html(hiSDKSettings.cb_currentFocus.id);
            $("#cb_templateAmount").html(hiSDKSettings.cb_templateAmount);
            $("#cb_templagePositionArray").html(JSON.stringify(hiSDKSettings.cb_templagePositionArray));
            $("#cb_templageEdgeValue").html(hiSDKSettings.cb_templageEdgeValue);
        }

        function doNotneedTrans(keycode) {
            var need = (
                keycode == VK_VOLUME_DOWN
                    || keycode == VK_VOLUME_UP
                    || keycode == VK_MUTE
                    || keycode == VK_EPG
                    || keycode == VK_KEYPAD_VOLUME_DOWN
                    || keycode == VK_KEYPAD_VOLUME_UP);

            return !need;
        }

        function transAnyKey(_this, keyHandler) {
            if (_this.PCB == 'page') {
                if (!!_this.handler && !!_this.handler[keyHandler]) {
                    if (typeof _this.handler[keyHandler] == 'string') {
                        eval(_this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                    } else if (typeof _this.handler[keyHandler] == 'function') {
                        _this.handler[keyHandler].call(_this, _this.operateData, _this.data);
                    }
                }
            } else if (_this.PCB == 'button' || _this.PCB == 'component') {
                if (!!_this.handler && !!_this.handler[keyHandler]) {
                    if (typeof _this.handler[keyHandler] == 'string') {
                        eval(_this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                    } else if (typeof _this.handler[keyHandler] == 'function') {
                        _this.handler[keyHandler].call(_this, _this.page.operateData, _this.data);
                    }
                }
            }
        }

        //按键栈函数
        var KeyStack = function () {
        }
        KeyStack.prototype = {
            Init: function () {
                this.STACKMAX = hiSDKSettings.KeyStackLimit;
                this.KeyStack = new Array(this.STACKMACK);
                this.top = -1;
                return this.KeyStack;
            },
            Empty: function () {
                if (this.top == -1) {
                    return true;
                }
                else {
                    return false;
                }
            },
            Push: function (elem) {
                if (this.top == this.STACKMAX - 1) {
                    //Todo此处可打印一次按键
                    this.PrintAndClear();
                    //console.log("按键数量达到极限！此处可打印一次按键。");
                    this.top = 0;
                    this.KeyStack[this.top] = elem;
                }
                else {
                    this.top++;
                    this.KeyStack[this.top] = elem;
                }
            },
            Pop: function () {
                if (this.top == -1) {
                    //-GHL_DEL-//console.log("按键数量为零,无法删除！");
                    return 0;
                }
                else {
                    var x = this.KeyStack[this.top];
                    this.top--;
                    return x;
                }
            },
            Top: function () {
                if (this.top != -1) {
                    return this.KeyStack[this.top];
                }
                else {
                    //-GHL_DEL-//console.log("按键数量为零，无法返回！");
                    return 0;
                }
            },
            Clear: function () {
                this.top = -1;
            },
            Length: function () {
                return this.top + 1;
            },
            PrintAndClear: function () {
                var kStr = 'Key Stack:';
                for (var i = 0; i < this.top + 1; i++) {
                    kStr += this.KeyStack[i] + ';';
                }
                this.top = -1;
                //debugPrint(kStr);
            }
        }

        function traceSTree() {
            if (!!hiSDKSettings.currentPage) {
                var result = '';
                var STLen = hiSDKSettings.currentPage.currentSelectedTree.length;
                if (STLen > 0) {
                    for (var i = 0; i < STLen; i++) {
                        result += '-->' + hiSDKSettings.currentPage.currentSelectedTree[i].id + '(' + hiSDKSettings.currentPage.currentSelectedIndexTree[i] + ')'
                    }
                }
                $("#sdkPges").html(result);
            } else {
                $("#sdkPges").html('当前页面为空!');
            }
        }

        //SDK封装函数
        function SDKFunction_test(a) {
            //-GHL_DEL-//console.log('_test SDK封装函数SDKFunction:' + a);
        }

        //hiModulePages根据目录初始化

        function init(options, fun) {
            //-GHL_DEL-//console.log("SDK init")
            ///$.fn.innerComponent();
            hiSDKSettings = $.extend({}, defaults, options);
            hiSDKSettings.html = {};
            //页面栈初始化[按键计算]
            hiSDKSettings.KeyStack = new KeyStack();
            hiSDKSettings.KeyStack.Init();

            // 预载入图片
            if (hiSDKSettings.preloadImages) {
                for (var i = hiSDKSettings.preloadImages.length - 1; i >= 0; i--) {
                    (new Image()).src = hiSDKSettings.preloadImages[i];
                }
            }

            //初始化大区、子区域
            verAreaAndSubArea(hiSDKSettings.verCountry);
            DBG_ALWAYS("verArea:" + hiSDKSettings.verArea);
            //-GHL_DEL-//console.log("verAreaIndex：" + hiSDKSettings.verAreaIndex);
            //-GHL_DEL-//console.log("verSubArea：" + hiSDKSettings.verSubArea);
            //-GHL_DEL-//console.log("verSubAreaIndex：" + hiSDKSettings.verSubAreaIndex);
            //-GHL_DEL-//console.log("verCountry：" + hiSDKSettings.verCountry);
            //-GHL_DEL-//console.log("verCountryIndex：" + hiSDKSettings.verCountryIndex);
            //-GHL_DEL-//console.log("verBrand：" + hiSDKSettings.verBrand);
            //console.log("t2:"+new Date().getTime());

            //语言包处理
            hiSDKSettings.languages = hiSDKSettings.languagesAreas[hiSDKSettings.verArea];
            // var languagesFileStr = hiSDKSettings.languagesFile[hiSDKSettings.verArea];
            // var script = document.createElement('script');
            // script.type = "text/javascript";
            // script.src = languagesFileStr;

            // script.onload = function () {
                //载入keyboardjs
                _loadKeyboardJs(fun);
                //更新多语言变量赋值
                // hiSDKSettings.SDKTranslatePackages = langPackages;//OneLangPackage修改为

                //载入非Common model
                // if (tv) {
                    // loadExtendModel(model, hiSDKSettings.verArea, fun);
                // }
                // else {
                    // fun();
                // }

                // }
            // document.head.appendChild(script);


        }

        function initA(fun) {
            init(options, fun);
        }

        //处理点击事件，暂时未做任何处理
        function clickHandler(e) {
            // 计算是否阻止默认事件
            var $el = $(e.target);

            // 确定点击href元素
            if (!$el.length || !$el.attr('href')) {
                return false;
            }

            var target = $el.attr('target'),
                hash = $el.prop('hash'),
                href = $el.attr('href'),
                animation = null;

            if (target === '_webapp') {
                // 点击开启一个内部连接的app，全屏模式，
                window.location = href;
                return false;

            }
            else if (href === '#') {
                // 无连接动作
                $el.unselect();
                return true;
            }
            else {
                if (hash && hash !== '#') {
                    // 内部 href
                    $el.addClass('active');
                    return false;
                }
                else {
                    // 外部 href
                    return false;
                }
            }
        }

        var tp = 0;

        var repeatPushFlag = false;

        function keyPressHandler(event) {
            //console.log(event.keyCode);
            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.pageMode == 'single')return false;
            event = event || window.event;
            if (!!hiSDKSettings.currentPage) {
                if (!!hiSDKSettings.currentPage.singleKeyMode && doNotneedTrans(event.keyCode)) {
                    eval(hiSDKSettings.currentPage.keyEventSet.keyPress + '(event)');
                } else {//2014-9-3
                    if (!hiSDKSettings.currentPage.filterRepeatKeys &&  $.inArray(event.keyCode, hiSDKSettings.currentPage.noRepeatKeys) == -1   && (event.keyCode == hiSDKSettings.keyValues.keyDown || event.keyCode == hiSDKSettings.keyValues.keyUp
                        || event.keyCode == hiSDKSettings.keyValues.keyLeft || event.keyCode == hiSDKSettings.keyValues.keyRight
                        || event.keyCode == hiSDKSettings.keyValues.keyVolumeDown || event.keyCode == hiSDKSettings.keyValues.keyVolumeUp
                        || event.keyCode == hiSDKSettings.keyValues.keyTVVoDown || event.keyCode == hiSDKSettings.keyValues.keyTVVoUp
                        || event.keyCode == hiSDKSettings.keyValues.keyChannelDown || event.keyCode == hiSDKSettings.keyValues.keyChannelUp
                        || event.keyCode == hiSDKSettings.keyValues.keyTVChDown || event.keyCode == hiSDKSettings.keyValues.keyTVChUp
                        || event.keyCode == hiSDKSettings.keyValues.keyPowerKeyPad)) {
                        tp++;
                        if (tp == 3) {
                            tp = 0;
                            //keyDownHandler(event);
                            if (!repeatPushFlag) {
//                                debugPrint('______________repeat');
                                document.removeEventListener("keypress", keyPressHandler, false);
                                repeatPushKeyDown(event);
                            }
                        }
                    }
                }
            }
        }

        function repeatPushKeyDown(event) {
            repeatPushFlag = true;

            function _pushKeyDownFaster(interval) {

                if (!repeatPushFlag) {
                    return;
                }
                //加入页面级别的重发按键控制
                if ($.inArray(event.keyCode, hiSDKSettings.noRepeatKeys) != -1 || $.inArray(event.keyCode, hiSDKSettings.currentPage.noRepeatKeys) != -1) {
                    return false;
                } else {
                    keyDownHandler(event);
                }

                setTimeout(function () {
                    interval = interval <= 50 ? 50 : interval - 20;
                    _pushKeyDownFaster(interval);
                }, interval);
            }

            _pushKeyDownFaster(150);
        }

        function keyUpHandler(event) {
            if (!!hiSDKSettings.currentPage) {
                debugPrint('SDK print--currentPages(before keyup):' + hiSDKSettings.currentPage.id);
                //定位偏差问题解决，以下代码测试未解决问题，原因由于实时抓取dom引起
                /*if (hiSDKSettings.currentPage.pageType == "combine") {
                 if(hiSDKSettings.cb_checkFun!=undefined)clearTimeout(hiSDKSettings.cb_checkFun);
                 hiSDKSettings.cb_checkFun=setTimeout(function(){
                 setTransition();
                 $('#'+hiSDKSettings.cb_htmlContainer).animate(
                 {transform:'translateX('+hiSDKSettings.cb_relativeLeft+'px)'}, "slow"
                 );
                 },5000);
                 }*/
            }


            //键值映射回调
            if (!!hiSDKSettings.keyMapFun) {
                hiSDKSettings.keyMapFun(event);
            }

            //按键预处理
            if (!!hiSDKSettings.keyPreFun) {
                hiSDKSettings.keyPreFun(event, "keyup");
            }

            //以下测试代码
            //if (event.keyCode == hiSDKSettings.keyValues.keyRed) {
            //    tempDebug = true;
            //    if ($("#sdkPages").css("display") == "block")$("#sdkPagesContent").html(listCurrentPages());
            //} else if (event.keyCode == hiSDKSettings.keyValues.keyYellow) {
            //    if (tempDebug) {
            //        if ($("#sdkPages").css("display") == "none") {
            //            $("#sdkPages").css("display", "block");
            //            $("#sdkPagesContent").html(listCurrentPages());
            //        }
            //        else {
            //            $("#sdkPages").css("display", "none");
            //        }
            //    }
            //    tempDebug = false;
            //} else {
            try {
                if (isLogOn)$("#sdkPagesContent").html(listCurrentPages());
            }
            catch (ex) {

            }
            //    tempDebug = false;
            //}
            //测试代码结束
            //console.log(event.keyCode);
            if (repeatPushFlag) {
//                debugPrint('_________________keyup');
                repeatPushFlag = false;
                document.addEventListener("keypress", keyPressHandler, false);
                if (!!hiSDKSettings.repeatKeyUpFun) {
                    hiSDKSettings.repeatKeyUpFun(event.keyCode);
                }

            }
            clearInterval(sh);
            sh = setInterval(_timerFun, 1000);
            if (hiSDKSettings.kPad.display) {
                if ($.inArray(event.keyCode, hiSDKSettings.kPad.keys) != -1) {
                    hiSDKSettings.kPad.kPadFunUp(event.keyCode);
                    return false;
                }
            }
            timer = 0;
            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.pageMode == 'single')return false;
            event = event || window.event;
            if (!!hiSDKSettings.currentPage) {
                if (!!hiSDKSettings.currentPage.singleKeyMode && doNotneedTrans(event.keyCode)) {
                    eval(hiSDKSettings.currentPage.keyEventSet.keyUp + '(event)');
                } else {
                    //暂不处理
                    traceSTree();
                }
            }

            //winKeyUpHandler处理.注意（2015-3-27）
            if (!!hiSDKSettings.winKeyUpHandler) {
                if (typeof hiSDKSettings.winKeyUpHandler == 'string') {
                    eval(hiSDKSettings.winKeyUpHandler + '.call(this,event)');
                } else if (typeof hiSDKSettings.winKeyUpHandler == 'function') {
                    hiSDKSettings.winKeyUpHandler.call(this, event);
                }
            }
        }

        // 按键处理（SDK核心按键处理及按键分发）
        // SDK控制的各个层级需要实现的按键处理接口函数，
        // 按钮实现btnKeyDownHandler，部件实现cmpKeyDownHandler，页面实现pageKeyDownHandler
        var tempDebug = false;//该变量用于测试SDKpages
        function keyDownHandler(event) {
            hiSDKSettings.KeyStack.Push(event.keyCode);
            //console.log(hiSDKSettings.KeyStack)
            clearInterval(sh);
            if (hiSDKSettings.kPad.display) {
                if ($.inArray(event.keyCode, hiSDKSettings.kPad.keys) != -1) {
                    hiSDKSettings.kPad.kPadFunDown(event.keyCode);
                    return false;
                }
            }

            if (!!hiSDKSettings.keyMapFun) {
                hiSDKSettings.keyMapFun(event);
            }
//            console.log(event.keyCode);
            if (!!hiSDKSettings.currentPage) {
                //debugPrint('SDK print--currentPages(before keypress):' + hiSDKSettings.currentPage.id);
            }
            if (!tv) {
                if (event.keyCode == 97) {
                    hiSDKSettings.keyValues.keyHome = 97;
                }
                else if (event.keyCode == 101) {
                    hiSDKSettings.keyValues.keyAllApp = 101;
                }
                else if (event.keyCode == 18) {
                    hiSDKSettings.keyValues.keyMenu = 18;
                }
                else if (event.keyCode == 27) {
                    hiSDKSettings.keyValues.keyEsc = 27;
                }
                //else if (event.keyCode == 27) {//omg
                //    hiSDKSettings.keyValues.keyGreen = 27;
                //}
            }

            if (!hiSDKSettings.keySwitch && $.inArray(event.keyCode, hiSDKSettings.keySwitchExclude) == -1)return false;//全局按键锁定
            if (!!hiSDKSettings.currentPage && !!hiSDKSettings.currentPage.keys) {
                if (!!hiSDKSettings.currentPage.keys.disable && $.inArray(event.keyCode, hiSDKSettings.currentPage.keys.disable) != -1) {
                    trans = false;
                    return false;
                }
                if (!!hiSDKSettings.currentPage.keys.enable && $.inArray(event.keyCode, hiSDKSettings.currentPage.keys.enable) == -1) {
                    trans = false;
                    return false;
                }
            }

            //console.log(hiSDKSettings.currentPage.pageMode)
            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.pageMode == 'single' && $.inArray(event.keyCode, hiSDKSettings.systemKeys) == -1)return false;
            event = event || window.event;
            if (!!hiSDKSettings.currentPage && $.inArray(event.keyCode, hiSDKSettings.systemKeys) == -1) {
                //blankpage 页面按键入口
                if (!!hiSDKSettings.currentPage.singleKeyMode && doNotneedTrans(event.keyCode)) {
                    eval(hiSDKSettings.currentPage.keyEventSet.keyDown + '(event)');
                    return false;
                }
            }
            var trans = true;
            if (!!hiSDKSettings.currentPage && $.inArray(event.keyCode, hiSDKSettings.systemKeys) == -1) {//新增
                var currentEventIndex = hiSDKSettings.currentPage.currentSelectedTree.length - 1;
                while (trans && currentEventIndex > -1) {
//                    debugPrint('event into ' + hiSDKSettings.currentPage.currentSelectedTree[currentEventIndex].PCB);

                    trans = hiSDKSettings.currentPage.currentSelectedTree[currentEventIndex].PCBKeyDownHandler(event);//在setting中按方向键走这里
                    //console.log(trans)
                    currentEventIndex--;
                }
            }
//            }

            if (trans && !!hiSDKSettings.currentPage && (!!hiSDKSettings.currentPage.receiveAnyKey || $.inArray(event.keyCode, hiSDKSettings.systemKeys) == -1)) {
                trans = hiSDKSettings.currentPage.PCBKeyDownHandler(event);
            }
//            debugPrint('trans = ' + trans + '1');
            if (trans) {
                //Window按键处理（按键传入该处，表示各级全部放行传递）
                if (!!hiSDKSettings.winKeyDownHandler) {
                    if (typeof hiSDKSettings.winKeyDownHandler == 'string') {
                        eval(hiSDKSettings.winKeyDownHandler + '.call(this,event)');
                    } else if (typeof hiSDKSettings.winKeyDownHandler == 'function') {
                        hiSDKSettings.winKeyDownHandler.call(this, event);
                    }
                }
                //winKeyDownHandler(event);
            }
//            debugPrint('trans = ' + trans + '2');
            //win按键处理
//            function winKeyDownHandler(ev) {
//
//            }
        }

        function checkKeyCode(keyCode, _this){
            try {
                if(keyCode != VK_LEFT && keyCode != VK_RIGHT) return keyCode;

                // added by liutiantian for self define checkKeyCode logic. start
                var s_checkKeyCode = _this.opts.checkKeyCode || (_this.PCB != "page"  && _this.page.opts.checkKeyCode);
                if(s_checkKeyCode) {
                    delete checkKeyCode.result;
                    var opeData = (_this.PCB != "page"  && _this.page.operateData) || _this.operateData;
                    if(typeof s_checkKeyCode == "function") {
                        checkKeyCode.result = s_checkKeyCode.call(_this, keyCode, opeData);
                    }
                    else if(typeof s_checkKeyCode == "string") {
                        checkKeyCode.result = eval(s_checkKeyCode + ".call(_this, keyCode, opeData)");
                    }

                    if(typeof checkKeyCode.result == "number") {
                        return checkKeyCode.result;
                    }
                }
                // added by liutiantian for self define checkKeyCode logic. end

                if("ltr" == hiSDKSettings.HTMLDirection) return keyCode;
                if(hiSDKSettings.noKeyReversePages.indexOf(_this.page.id) > -1 ||
                    hiSDKSettings.noKeyReverseModules.indexOf(_this.page.module) > -1 ||
                    hiSDKSettings.noKeyReverseCaETypes.indexOf(_this.CaEType) > -1 ||
                    hiSDKSettings.noKeyReverseId.indexOf(_this.id) > -1 ||
                    _this.noKeyReverse == true) return keyCode;
                return (VK_LEFT + VK_RIGHT - keyCode);
            }
            catch (ex){
                DBG_ERROR(ex.message)
                return keyCode;
            }

        }
        //事件处理接口（在该接口中定义按键前处理，后处理事件）
        function keyDownImp(event) {
            // Added By Liutiantian For IQQI
            this.event = event;
            // Added By Liutiantian Ended
            //键值映射回调
            /*if (!!hiSDKSettings.keyMapFun) {
             hiSDKSettings.keyMapFun(event);
             }*/

            //键值映射回调
            if (!!hiSDKSettings.keyPreFun) {
                hiSDKSettings.keyPreFun(event, "keydown");
            }

            var trans = false;

            if (!!hiSDKSettings.currentPage && !!hiSDKSettings.currentPage.keys) {
                if (!!hiSDKSettings.currentPage.keys.disable && $.inArray(event.keyCode, hiSDKSettings.currentPage.keys.disable) != -1) {
                    trans = false;
                    return false;
                }
                if (!!hiSDKSettings.currentPage.keys.enable && $.inArray(event.keyCode, hiSDKSettings.currentPage.keys.enable) == -1) {
                    trans = false;
                    return false;
                }
            }
            else if (!!hiSDKSettings.currentPage && !!hiSDKSettings.currentPage.receiveAnyKey) {
                transAnyKey(this, "keyAnyHandler");
                return false;
            }

            var trans = false;

            if (!tv && event.keyCode > 96 && event.keyCode < 108) {
                for (var i = 0; i < 4; i++) {
                    hiSDKSettings.keyValues[['keyRed', 'keyGreen', 'keyYellow', 'keyBlue'][i]] = 97 + i;
                }
                hiSDKSettings.keyValues.keyChannelDown = 107;
            }

            //关于页面级别按键映射处理,经测试，该函数在PC上运行Chrome,Oper下无作用，只读原因
            //pageKeyMapFun对象数据格式：[{"ori":15,"tar":16},{"ori":15,"tar":16}]
            if (!!hiSDKSettings.currentPage.pageKeyMapFun) {
                //alert(hiSDKSettings.currentPage.pageKeyMapFun.length)
                for (var i = 0; i < hiSDKSettings.currentPage.pageKeyMapFun.length; i++) {
                    //alert("event.keyCode:"+event.keyCode+",ori:"+hiSDKSettings.currentPage.pageKeyMapFun[i].ori+",tar:"+hiSDKSettings.currentPage.pageKeyMapFun[i].tar);
                    if (event.keyCode == hiSDKSettings.currentPage.pageKeyMapFun[i].ori) {
                        event.keyCode = hiSDKSettings.currentPage.pageKeyMapFun[i].tar;
                        //alert(event.keyCode);
                        break;
                    }
                }
            }

            //关于部件按键映射处理
            //componentKeyMapFun对象数据格式：[{"ori":15,"tar":16},{"ori":15,"tar":16}]
            if (!!this.componentKeyMapFun) {
                for (var i = 0; i < this.componentKeyMapFun.length; i++) {
                    if (event.keyCode == this.componentKeyMapFun[i].ori) {
                        event.keyCode = this.componentKeyMapFun[i].tar;
                    }
                }
            }

            //console.log(event.keyCode);

            switch (checkKeyCode(event.keyCode, this)) {
                case hiSDKSettings.keyValues.keySource:
                case hiSDKSettings.keyValues.keyMedia:
                case hiSDKSettings.keyValues.keyFacM:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyExit:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyLiveTV:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyMenu:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyGuide:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyInfo:
                    trans = true;
                    break;

                case hiSDKSettings.keyValues.keyPMode:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keySMode:
                    trans = true;
                    break;
//                case hiSDKSettings.keyValues.keySUBT:
//                    trans = true;
//                    break;
                case hiSDKSettings.keyValues.key3D:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyLanguage:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keySize:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyNetflix:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyAmazon:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyVudu:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyYoutube:
                    trans = true;
                    break;
                case hiSDKSettings.keyValues.keyVolumeDown:
                case hiSDKSettings.keyValues.keyVolumeUp:
                case hiSDKSettings.keyValues.keyTVVoDown:
                case hiSDKSettings.keyValues.keyTVVoUp:
                case hiSDKSettings.keyValues.keyMute:
                    trans = true;
                    break;

                case hiSDKSettings.keyValues.keyA:
                case hiSDKSettings.keyValues.keyB:
                case hiSDKSettings.keyValues.keyC:
                case hiSDKSettings.keyValues.keyD:
                case hiSDKSettings.keyValues.keyE:
                case hiSDKSettings.keyValues.keyF:
                case hiSDKSettings.keyValues.keyG:
                case hiSDKSettings.keyValues.keyH:
                case hiSDKSettings.keyValues.keyI:
                case hiSDKSettings.keyValues.keyJ:
                case hiSDKSettings.keyValues.keyK:
                case hiSDKSettings.keyValues.keyL:
                case hiSDKSettings.keyValues.keyM:
                case hiSDKSettings.keyValues.keyN:
                case hiSDKSettings.keyValues.keyO:
                case hiSDKSettings.keyValues.keyP:
                case hiSDKSettings.keyValues.keyQ:
                case hiSDKSettings.keyValues.keyR:
                case hiSDKSettings.keyValues.keyS:
                case hiSDKSettings.keyValues.keyT:
                case hiSDKSettings.keyValues.keyU:
                case hiSDKSettings.keyValues.keyV:
                case hiSDKSettings.keyValues.keyW:
                case hiSDKSettings.keyValues.keyX:
                case hiSDKSettings.keyValues.keyY:
                case hiSDKSettings.keyValues.keyZ:
                case hiSDKSettings.keyValues.keya:
                case hiSDKSettings.keyValues.keyb:
                case hiSDKSettings.keyValues.keyc:
                case hiSDKSettings.keyValues.keyd:
                case hiSDKSettings.keyValues.keye:
                case hiSDKSettings.keyValues.keyf:
                case hiSDKSettings.keyValues.keyg:
                case hiSDKSettings.keyValues.keyh:
                case hiSDKSettings.keyValues.keyi:
                case hiSDKSettings.keyValues.keyj:
                case hiSDKSettings.keyValues.keyk:
                case hiSDKSettings.keyValues.keyl:
                case hiSDKSettings.keyValues.keym:
                case hiSDKSettings.keyValues.keyn:
                case hiSDKSettings.keyValues.keyo:
                case hiSDKSettings.keyValues.keyp:
                case hiSDKSettings.keyValues.keyq:
                case hiSDKSettings.keyValues.keyr:
                case hiSDKSettings.keyValues.keys:
                case hiSDKSettings.keyValues.keyt:
                case hiSDKSettings.keyValues.keyu:
                case hiSDKSettings.keyValues.keyv:
                case hiSDKSettings.keyValues.keyw:
                case hiSDKSettings.keyValues.keyx:
                case hiSDKSettings.keyValues.keyy:
                case hiSDKSettings.keyValues.keyz:
                case hiSDKSettings.keyValues.VK_KB_COMMA     :
                case hiSDKSettings.keyValues.VK_KB_DOT       :
                case hiSDKSettings.keyValues.VK_KB_SLASH     :
                case hiSDKSettings.keyValues.VK_KB_LT        :
                case hiSDKSettings.keyValues.VK_KB_GT        :
                case hiSDKSettings.keyValues.VK_KB_SEMICOLON :
                case hiSDKSettings.keyValues.VK_KB_COLON     :
                case hiSDKSettings.keyValues.VK_KB_QUESTION  :
                case hiSDKSettings.keyValues.VK_KB_SQM       :
                case hiSDKSettings.keyValues.VK_KB_DQM       :
                case hiSDKSettings.keyValues.VK_KB_EM:
                case hiSDKSettings.keyValues.VK_KB_AT:
                case hiSDKSettings.keyValues.VK_KB_WELL:
                case hiSDKSettings.keyValues.VK_KB_DOLLOR:
                case hiSDKSettings.keyValues.VK_KB_PERSENT:
                case hiSDKSettings.keyValues.VK_KB_JIAN:
                case hiSDKSettings.keyValues.VK_KB_AND:
                case hiSDKSettings.keyValues.VK_KB_STAR:
                case hiSDKSettings.keyValues.VK_KB_LEFTBR:
                case hiSDKSettings.keyValues.VK_KB_RIGHTBR:
                case hiSDKSettings.keyValues.VK_KB_BIGLEFTBR:
                case hiSDKSettings.keyValues.VK_KB_BIGRIGHTBR:
                case hiSDKSettings.keyValues.VK_KB_LEFTBRACKET:
                case hiSDKSettings.keyValues.VK_KB_RIGHTBRACKET:
                case hiSDKSettings.keyValues.VK_KB_HOR:
                case hiSDKSettings.keyValues.VK_KB_DASH:
                case hiSDKSettings.keyValues.VK_KB_DUN:
                case hiSDKSettings.keyValues.VK_KB_SUB:
                case hiSDKSettings.keyValues.VK_KB_EQEAL:
                case hiSDKSettings.keyValues.VK_KB_ADD:
                case hiSDKSettings.keyValues.VK_KB_WAVE:
                case hiSDKSettings.keyValues.VK_KB_RIGHTDASH:
                case hiSDKSettings.keyValues.VK_KB_BlankString:
                    var keyHandler;
                    var hasDowith = false;
                    if (this.PCB == 'button' || this.PCB == 'component') {
                        if ((this.CaEType == 'input' && !!this.isWrite) || (this.page.pageMode.toLowerCase() == 'skb' && this.CaEType != 'Container')) {
                            var input = this.page.pageMode.toLowerCase() == 'skb' ? this.page.getCaE('skbInput') : this;
                            try {
                                var content = $('#' + input.id).val(),
                                    curserPos = getCursortPosition(input.id),
                                    pre = content.slice(0, curserPos),
                                    back = content.slice(curserPos),
                                    keyCharCode = String.fromCharCode(event.keyCode);

                                var length = 1;
                                if (event.keyCode >= VK_a && event.keyCode <= VK_z)keyCharCode = String.fromCharCode(event.keyCode - 389);
                                if (event.keyCode >= VK_KB_SQM && event.keyCode <= VK_KB_RIGHTDASH)keyCharCode = String.fromCharCode(event.alphakey);
                                if (event.keyCode == VK_KB_BlankString) {
                                    keyCharCode = '';
                                    length = 0;
                                }

                                if (!!input.inputAttr && !(input.inputAttr == 'number' || input.inputAttr == 'numberpassword')) {

                                    content = pre + keyCharCode + back;
                                    if (!!_isValidLengthInputKey.call(input, content)) {
                                        $('#' + input.id).val(content);
                                        _setCaretPosition(input.id, curserPos + length);
                                    }
                                }
                            }
                            catch (ex) {
                                debugPrint('exit skb:' + ex.message, DebugLevel.ERROR);
                            }
                            /*********************  增加输入框的回调函数  ****************************/
                            if (!!input && !!input.opts.onChange) {
                                if (typeof input.opts.onChange == 'function') {
                                    input.opts.onChange.call(this, this.page.operateData, this.data);
                                }
                                else if (typeof input.opts.onChange == 'string') {
                                    eval(input.opts.onChange + '.call(this,this.page.operateData, this.data)');
                                }
                            }
                        }
                    }
                    trans = false;
                    break;
                case hiSDKSettings.keyValues.keyBackSpace:
                case hiSDKSettings.keyValues.keyKBBackspace:
                    var keyHandler;
                    if ((this.CaEType == 'input' && !!this.isWrite) || this.page.pageMode.toLowerCase() == 'skb') {
                        var input = this.page.pageMode.toLowerCase() == 'skb' ? this.page.getCaE('skbInput') : this;
                        _backSpace(input.id);
                    }
                    else if(this.page.pageMode.toLowerCase() == "iqqi"){
                        iqqiBackSpace(this, this.id, this.page, this.page.operateData);
                    }
                    trans = false;
                    break;
                case hiSDKSettings.keyValues.keySpace:
                    var keyHandler;
                    if ((this.CaEType == 'input' && !!this.isWrite) || this.page.pageMode.toLowerCase() == 'skb') {
                        var input = this.page.pageMode.toLowerCase() == 'skb' ? this.page.getCaE('skbInput') : this;
                        _addBlank(input.id);
                    }
                    else if(this.page.pageMode.toLowerCase() == "iqqi"){
                        iqqiWhiteSpace(this.page, this.page.operateData);
                    }
                    trans = false;
                    break;
                case hiSDKSettings.keyValues.keyNum0:
                case hiSDKSettings.keyValues.keyNum1:
                case hiSDKSettings.keyValues.keyNum2:
                case hiSDKSettings.keyValues.keyNum3:
                case hiSDKSettings.keyValues.keyNum4:
                case hiSDKSettings.keyValues.keyNum5:
                case hiSDKSettings.keyValues.keyNum6:
                case hiSDKSettings.keyValues.keyNum7:
                case hiSDKSettings.keyValues.keyNum8:
                case hiSDKSettings.keyValues.keyNum9:
                    var keyHandler;
                    var hasDowith = false;
                    eval('keyHandler = "keyNum' + (event.keyCode - hiSDKSettings.keyValues.keyNum0) + 'Handler"');
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data,event.keyCode)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
//                        if (!!event.from && event.from != "remote") {
//                            if (tv) {
//                                debugPrint("hiUISDK.js, keyDownImp, number key not lunched by remote control, bypass it, we do nothing, all left to browser.", DebugLevel.INFO);
//                            }
//                            break;
//                        }
//                        if (!event.from) {
//                            debugPrint("hiUISDK.js, keyDownImp, logic leak, event does not have from property, check api please. handle it as remote.", DebugLevel.INFO);
//                        }
                        debugPrint("got new event, show pageMode: " + this.page.pageMode);
                        if (this.page.pageMode.toLowerCase() == "iqqi") {
                            try {
                                var opeData = this.page.operateData;
                                if (!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
                                    iqqiInfoLog("hiUISDK", "keyDownImp", "lanSwitchDialog shield every input char.");
                                    break;
                                }
                                if ("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
                                    keyDownImp.number = opeData.iqqiData.ENG.numbers[event.which - 48];
                                }
                                else if (opeData.curMode == IQQIUtils.MODE_NUM1 || opeData.curMode == IQQIUtils.MODE_NUM2) {
                                    keyDownImp.number = opeData.iqqiData.ENG.numbers[event.which - 48];
                                }
                                else {
                                    var numbers = opeData.iqqiData[opeData.curLang].numbers || opeData.iqqiData.ENG.numbers;
                                    keyDownImp.number = numbers[event.which - 48];
                                }
                                iqqiNum(undefined, this.page, opeData, keyDownImp.number);
                                break;
                            }
                            catch (ex) {
                                debugPrint("got new error, show error 1: " + ex);
                            }
                        }
                        else if ((this.CaEType == 'input' && !!this.isWrite)) {
                            var input = this;

                            var content = $('#' + input.id).val(),
                                curserPos = getCursortPosition(input.id),
                                pre = content.slice(0, curserPos),
                                back = content.slice(curserPos),
                                keyNum = (event.keyCode - hiSDKSettings.keyValues.keyNum0);

                            if (!!input.inputAttr && (input.inputAttr == 'number' || input.inputAttr == 'numberpassword')) {
                                if (!!_isValidNumberInputKey.call(input, event.keyCode)) {
                                    content = pre + keyNum + back;
                                    $('#' + input.id).val(content);
                                    _setCaretPosition(input.id, curserPos + 1);
                                }
                            }
                            else {

                                content = pre + keyNum + back;
                                if (!!_isValidLengthInputKey.call(input, content)) {
                                    $('#' + input.id).val(content);
                                    _setCaretPosition(input.id, curserPos + 1);
                                }
                            }
                        }
                        else if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data, event.keyCode);
                            }
                        }
                        /*********************  增加输入框的回调函数  ****************************/
                        if (!!input && !!input.opts.onChange) {
                            if (typeof input.opts.onChange == 'function') {
                                input.opts.onChange.call(this, this.page.operateData, this.data);
                            }
                            else if (typeof input.opts.onChange == 'string') {
                                eval(input.opts.onChange + '.call(this,this.page.operateData, this.data)');
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyRed:
                case hiSDKSettings.keyValues.keyGreen:
                case hiSDKSettings.keyValues.keyYellow:
                case hiSDKSettings.keyValues.keyBlue:
                    var keyHandler;

                    var keyColor = ['keyRed', 'keyGreen', 'keyYellow', 'keyBlue'][event.keyCode - hiSDKSettings.keyValues.keyRed];
                    var hasDowith = false;
                    eval('keyHandler = "' + keyColor + 'Handler"');
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyStop:

                    var hasDowith = false;
                    var keyHandler = "keyStopHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyTimeShift:
                    var hasDowith = false;
                    var keyHandler = "keyTimeShiftHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyPvr:
                    var hasDowith = false;
                    var keyHandler = "keyPvrHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyPlay:
                    var hasDowith = false;
                    var keyHandler = "keyPlayHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyPause:
                    var hasDowith = false;
                    var keyHandler = "keyPauseHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyFastFWD:
                    var hasDowith = false;
                    var keyHandler = "keyFastFWDHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyCC:
                    var hasDowith = false;
                    var keyHandler = "keyCCHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyShortLine:
                    var hasDowith = false;
                    var keyHandler = "keyShortLineHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyTeletext:
                    var hasDowith = false;
                    var keyHandler = "keyTeletextHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keySUBT:
                    var hasDowith = false;
                    var keyHandler = "keySUBTHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyFastBKW:
                    var hasDowith = false;
                    var keyHandler = "keyFastBKWHandler";
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (!!this.handler && !!this.handler[keyHandler]) {
                            if (typeof this.handler[keyHandler] == 'string') {
                                hasDowith = true;
                                eval(this.handler[keyHandler] + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler[keyHandler] == 'function') {
                                hasDowith = true;
                                this.handler[keyHandler].call(this, this.page.operateData, this.data);
                            }
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;

                case hiSDKSettings.keyValues.keyTVChUp:
                case hiSDKSettings.keyValues.keyChannelUp:
                    var hasDowith = false;
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler.keyChannelUpHandler) {
                            if (typeof this.handler.keyChannelUpHandler == 'string') {
                                hasDowith = true;
                                eval(this.handler.keyChannelUpHandler + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler.keyChannelUpHandler == 'function') {
                                hasDowith = true;
                                this.handler.keyChannelUpHandler.call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (typeof this.handler.keyChannelUpHandler == 'string') {
                            hasDowith = true;
                            eval(this.handler.keyChannelUpHandler + '.call(this,this.page.operateData,this.data)');
                        } else if (typeof this.handler.keyChannelUpHandler == 'function') {
                            hasDowith = true;
                            this.handler.keyChannelUpHandler.call(this, this.page.operateData, this.data);
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyChList:
                    var hasDowith = false;
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler.keyChListHandler) {
                            if (typeof this.handler.keyChListHandler == 'string') {
                                hasDowith = true;
                                eval(this.handler.keyChListHandler + '.call(this,this.operateData,this.data)');
                            }
                            else if (typeof this.handler.keyChListHandler == 'function') {
                                hasDowith = true;
                                this.handler.keyChListHandler.call(this, this.operateData, this.data);
                            }
                        }
                    }
                    else if (!!this.handler && !!this.handler.keyChListHandler && (this.PCB == 'button' || this.PCB == 'component')) {
                        if (typeof this.handler.keyChListHandler == 'string') {
                            hasDowith = true;
                            eval(this.handler.keyChListHandler + '.call(this,this.page.operateData,this.data)');
                        }
                        else if (typeof this.handler.keyChListHandler == 'function') {
                            hasDowith = true;
                            this.handler.keyChListHandler.call(this, this.page.operateData, this.data);
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyTVChDown:
                case hiSDKSettings.keyValues.keyChannelDown:
                    var hasDowith = false;
                    if (this.PCB == 'page') {
                        if (!!this.handler && !!this.handler.keyChannelDownHandler) {
                            if (typeof this.handler.keyChannelDownHandler == 'string') {
                                hasDowith = true;
                                eval(this.handler.keyChannelDownHandler + '.call(this,this.operateData,this.data)');
                            } else if (typeof this.handler.keyChannelDownHandler == 'function') {
                                hasDowith = true;
                                this.handler.keyChannelDownHandler.call(this, this.operateData, this.data);
                            }
                        }
                    } else if (this.PCB == 'button' || this.PCB == 'component') {
                        if (typeof this.handler.keyChannelDownHandler == 'string') {
                            hasDowith = true;
                            eval(this.handler.keyChannelDownHandler + '.call(this,this.page.operateData,this.data)');
                        } else if (typeof this.handler.keyChannelDownHandler == 'function') {
                            hasDowith = true;
                            this.handler.keyChannelDownHandler.call(this, this.page.operateData, this.data);
                        }
                    }
                    if (!hasDowith) {
                        trans = true;
                    }
                    break;
                //Todo 以上代码所有键值均需复制

                case hiSDKSettings.keyValues.keyLeft:
                    var _target=this;//ver1.5
                    //ver1.2
                    if (this.page.pageType == "combine") {
                        hiSDKSettings.lastDirKey = 3;
                        hiSDKSettings.cb_TBSign === undefined && (hiSDKSettings.cb_TBSign = 0)
                        console.log("当前习惯：" + hiSDKSettings.cb_TBSign);
                        //if (!!this.nav.leftTo && this.nav.leftTo == "AUTO") {
                        if ($.inArray(this.id, _templateCaELeftToArray[this.templateIndx]) != -1) {
                            console.log(this.id)
                            console.log(this.templateIndx)

                            var currentDx = getMetaRelPosition_left(this.id);
                            var currentDy = getMetaRelPosition_top(this.id) + getMetaRelPosition_height(this.id) / 2;
                            var current_top = getMetaRelPosition_top(this.id);
                            var current_bottom = getMetaRelPosition_top(this.id) + getMetaRelPosition_height(this.id);
                            var currentDDis = Number.MAX_VALUE;
                            var currentTP = Number.MAX_VALUE;
                            var currentBT = 0;
                            if (this.templateIndx > 0) {
                                if (hiSDKSettings.cb_TBSign == 1) {
                                    for (var j = 0; j < _templateCaERightToArray[this.templateIndx - 1].length; j++) {
                                        var target_top = getMetaRelPosition_top(_templateCaERightToArray[this.templateIndx - 1][j]);
                                        if (target_top < currentTP) {
                                            currentTP = target_top;
                                            this.nav.leftTo = _templateCaERightToArray[this.templateIndx - 1][j];
                                        }
                                    }
                                } else if (hiSDKSettings.cb_TBSign == -1) {
                                    for (var j = 0; j < _templateCaERightToArray[this.templateIndx - 1].length; j++) {
                                        var target_bottom = getMetaRelPosition_top(_templateCaERightToArray[this.templateIndx - 1][j]) + getMetaRelPosition_height(_templateCaERightToArray[this.templateIndx - 1][j]);
                                        console.log("target_bottom:" + target_bottom);
                                        if (target_bottom > currentBT) {
                                            currentBT = target_bottom;
                                            this.nav.leftTo = _templateCaERightToArray[this.templateIndx - 1][j];
                                        }
                                    }
                                } else {
                                    for (var j = 0; j < _templateCaERightToArray[this.templateIndx - 1].length; j++) {
//                                    console.log("比较:" + _templateCaERightToArray[this.templateIndx - 1][j])
                                        var targetDx = getMetaRelPosition_right(_templateCaERightToArray[this.templateIndx - 1][j]);
                                        var targetDy = getMetaRelPosition_top(_templateCaERightToArray[this.templateIndx - 1][j]) + getMetaRelPosition_height(_templateCaERightToArray[this.templateIndx - 1][j]) / 2;

                                        var target_top = getMetaRelPosition_top(_templateCaERightToArray[this.templateIndx - 1][j]);
                                        var target_bottom = getMetaRelPosition_top(_templateCaERightToArray[this.templateIndx - 1][j]) + getMetaRelPosition_height(_templateCaERightToArray[this.templateIndx - 1][j]);
                                        console.log("target_top:" + target_top + ",target_bottom:" + target_bottom);
                                        var tempDis = Math.pow((currentDx - targetDx), 2) + Math.pow((currentDy - targetDy), 2);
                                        if (tempDis < currentDDis) {
                                            currentDDis = tempDis;
                                            this.nav.leftTo = _templateCaERightToArray[this.templateIndx - 1][j];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (this.CaEType == 'input' && !!this.isWrite && getCursortPosition(this.id) > 0 && this.supportCursor) {
                        _keyLeft(this.id);
                    }
                    else {
                        var cross = 0;//1为跳出
                        var handlerResult = true;//当该值为false时后续不执行
                        if (!!this.handler && !!this.handler.befLeftHandler) {
                            if (typeof this.handler.befLeftHandler == 'string') {
                                handlerResult = eval(this.handler.befLeftHandler + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler.befLeftHandler == 'function') {
                                handlerResult = this.handler.befLeftHandler.call(this, this.page.operateData, this.data);
                            }
                        }
                        if (handlerResult == undefined || handlerResult == true) {

                            if (this.CaEType == 'NavigationBar') {
                                if (this.SelectedIndex != 0) {
                                    if (!!this.disableItem) {//2014-5-24
                                        var assertIdx = _getPreIndex(this.SelectedIndex, this.disableItem);
                                        if (this.SelectedIndex != assertIdx) {
                                            this.hiBlur();//omg
                                            this.SelectedIndex = assertIdx;
                                            var currentBeginIndex = this.BeginIdx;
//                                    this.BeginIdx = parseInt(this.SelectedIndex / this.PageSize) * this.PageSize;
                                            this.BeginIdx = (this.SelectedIndex < currentBeginIndex) ? this.SelectedIndex : this.BeginIdx;
                                            if (this.BeginIdx != currentBeginIndex)this.refreshData();
                                            this.data.SelectedIndex = this.SelectedIndex;//6-20
                                            this.data.BeginIdx = this.BeginIdx;//7-11
                                            this.hiFocus();
                                            cross = 2;
                                        } else {
                                            /*if (!!this.nav && !!this.nav.leftTo) {
                                             this.hiBlur();
                                             hiSDKSettings.currentPage.getCaE(this.nav.leftTo).hiFocus();
                                             } else {
                                             trans = true;
                                             }*/
                                            cross = 1;
                                        }
                                    } else {
                                        this.hiBlur();
                                        this.SelectedIndex--;
                                        if (this.SelectedIndex < this.BeginIdx) {
                                            this.BeginIdx--;
                                            this.refreshData();
                                            this.data.SelectedIndex = this.SelectedIndex;//6-20
                                            this.data.BeginIdx = this.BeginIdx;//7-11
                                        }
                                        this.hiFocus();
                                        cross = 2;
                                    }
                                } else {
                                    /*if (!!this.nav && !!this.nav.leftTo) {
                                     this.hiBlur();
                                     hiSDKSettings.currentPage.getCaE(this.nav.leftTo).hiFocus();
                                     } else {
                                     trans = true;
                                     }*/
                                    cross = 1;
                                }
                            }
                            else if (this.CaEType == 'GridUl') {
                                if (this.SelectedIndex % this.LineNum != 0) {
                                    //非最左端
                                    cross = 2;//2014-6-18
                                    this.hiBlur();
                                    this.SelectedIndex--;
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.hiFocus();
                                } else {
                                    if (this.BeginIdx != 0 && this.FlipType == 'HOR') {
                                        //非第一页，且允许水平翻页
                                        this.hiBlur();
                                        this.SelectedIndex = this.BeginIdx - this.PageSize;
                                        this.BeginIdx = this.BeginIdx - this.PageSize;
                                        this.refreshData();
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;//2014-6-18
                                    } else {
                                        cross = 1;//2014-6-18
                                        /*if (!!this.nav && !!this.nav.leftTo) {
                                         this.hiBlur();
                                         hiSDKSettings.currentPage.getCaE(this.nav.leftTo).hiFocus();
                                         } else {
                                         trans = true;
                                         }*/
                                    }

                                }
                            }
                            else if (this.CaEType == 'GridList') {
                                if (this.SelectedIndex >= this.LineNum + this.BeginIdx) {
                                    //不在第一行
                                    this.hiBlur();
                                    this.SelectedIndex = this.SelectedIndex - this.LineNum;
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.hiFocus();
                                    cross = 2;
                                }
                                else {
                                    if (this.BeginIdx != 0 && this.FlipType == 'VER') {
                                        //不在第一页，且允许上下翻页
                                        this.hiBlur();
//                                    this.SelectedIndex = this.BeginIdx - this.PageSize;
                                        this.SelectedIndex = this.BeginIdx - this.LineNum;
                                        this.BeginIdx = this.BeginIdx - this.PageSize;
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.refreshData();
                                        this.hiFocus();
                                        cross = 2;
                                    }
                                    else {
//                                    if (!!this.nav && !!this.nav.upTo) {
//                                        this.hiBlur();
//                                        hiSDKSettings.currentPage.getCaE(this.nav.upTo).hiFocus();
//                                    } else {
//                                        trans = true;
//                                    }
                                        cross = 1;
                                    }

                                }
                            }
                            else if (this.CaEType == 'Tabs' && this.SelectedIndex > 0 && this.FlipType == 'HOR') {//2014-05-26
                                //水平翻页
                                this.hiBlur();
                                this.SelectedIndex--;
                                this.data.SelectedIndex = this.SelectedIndex;//6-20
                                this.hiFocus();
                                cross = 2;
                            }
                            else if (this.CaEType == 'Container' && !!this.IsPrevent) {
                                cross = 2;
                            }
                            else if (this.CaEType == 'Slider') {
                                cross = 2;
                            }
                            else {
                                cross = 1;
                            }
                            if (cross == 1) {
                                if (!!this.nav && !!this.nav.leftTo) {
                                    //enable处理
                                    var aTarget = getValidNav(3, this);
                                    if (aTarget != null) {
                                        _target=aTarget;//ver1.5
                                        /*this.hiBlur();
                                         aTarget.hiFocus();
                                         if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                         event.preventDefault();
                                         }
                                         if (!!aTarget.handler && !!aTarget.handler.aftLeftHandler) {
                                         if (typeof aTarget.handler.aftLeftHandler == 'string') {
                                         eval(aTarget.handler.aftLeftHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                         } else if (typeof aTarget.handler.aftLeftHandler == 'function') {
                                         aTarget.handler.aftLeftHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                         }
                                         }修改为*/

                                        if (aTarget.CaEType == "Ul" || aTarget.CaEType == "NavigationBar") {
                                            if (!!aTarget.disableItem) {
                                                var assertIdx = _getPreIndexEq(aTarget.SelectedIndex, aTarget.disableItem);
                                                if (assertIdx >= 0 && aTarget.SelectedIndex >= assertIdx) {
                                                    this.hiBlur();
                                                    aTarget.SelectedIndex = assertIdx;
                                                    var currentBeginIndex = aTarget.BeginIdx;
                                                    aTarget.BeginIdx = (aTarget.SelectedIndex > currentBeginIndex + aTarget.PageSize - 1) ? aTarget.SelectedIndex - aTarget.PageSize + 1 : aTarget.BeginIdx;
                                                    if (aTarget.BeginIdx != currentBeginIndex)aTarget.refreshData();
                                                    aTarget.data.SelectedIndex = aTarget.SelectedIndex;
                                                    aTarget.data.BeginIdx = aTarget.BeginIdx;
                                                    aTarget.hiFocus();
                                                    if (!!aTarget.handler && !!aTarget.handler.aftLeftHandler) {
                                                        if (typeof aTarget.handler.aftLeftHandler == 'string') {
                                                            eval(aTarget.handler.aftLeftHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                        } else if (typeof aTarget.handler.aftLeftHandler == 'function') {
                                                            aTarget.handler.aftLeftHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                        }
                                                    }
                                                }
                                            } else {
                                                this.hiBlur();
                                                aTarget.hiFocus();
                                                if (!!aTarget.handler && !!aTarget.handler.aftLeftHandler) {
                                                    if (typeof aTarget.handler.aftLeftHandler == 'string') {
                                                        eval(aTarget.handler.aftLeftHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                    } else if (typeof aTarget.handler.aftLeftHandler == 'function') {
                                                        aTarget.handler.aftLeftHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                    }
                                                }
                                            }
                                        } else {
                                            this.hiBlur();
                                            aTarget.hiFocus();
                                            if (!!aTarget.handler && !!aTarget.handler.aftLeftHandler) {
                                                if (typeof aTarget.handler.aftLeftHandler == 'string') {
                                                    eval(aTarget.handler.aftLeftHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                } else if (typeof aTarget.handler.aftLeftHandler == 'function') {
                                                    aTarget.handler.aftLeftHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                }
                                            }
                                        }
                                        if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                            event.preventDefault();
                                        }


                                    } else {
                                        trans = true;//不存在导航与无导航指向统一传递交由上级部件处理
                                    }
                                } else {
                                    trans = true;
                                }
                            } else if (cross == 2) {
                                if (!!this.handler && !!this.handler.aftLeftHandler) {
                                    if (typeof this.handler.aftLeftHandler == 'string') {
                                        eval(this.handler.aftLeftHandler + '.call(this,this.page.operateData,this.data)');
                                    } else if (typeof this.handler.aftLeftHandler == 'function') {
                                        this.handler.aftLeftHandler.call(this, this.page.operateData, this.data);
                                    }
                                }
                            }
                            if (this.page.pageMode.toLowerCase() == 'skb') event.preventDefault();
                        }
                        //ver1.5 图层自动定位算法
                        if(!!_target.relPosition && !!this.page.autoLocation){
                            var currentFocusL;
                            if(_target.CaEType=="GridList"){
                                currentFocusL=_target.relPosition[0]+parseInt(_target.SelectedIndex/_target.LineNum)*_target.relPosition[2];
                            }else if(_target.CaEType=="NavigationBar"){
                                currentFocusL=_target.relPosition[0]+_target.SelectedIndex*_target.relPosition[2];
                            }else{
                                currentFocusL=_target.relPosition[0];
                            }
                            //console.log("currentFocusL:"+currentFocusL+"left:"+_target.page.autoLocation.left)
                            if(currentFocusL<_target.page.autoLocation.edgeWidthL+Math.abs(_target.page.autoLocation.left)){

                                if("ltr" == hiSDKSettings.HTMLDirection){

                                _target.page.autoLocation.left=-(currentFocusL-_target.page.autoLocation.edgeWidthL);
                                // $("#"+_target.page.autoLocation.layer).css('margin-left',_target.page.autoLocation.left+'px');//lu
                                // $("#"+_target.page.autoLocation.layer).css('margin-right',"0");//lu
                                }
                                else{

                                _target.page.autoLocation.left=(currentFocusL-_target.page.autoLocation.edgeWidthL);
                                // $("#"+_target.page.autoLocation.layer).css('margin-right',_target.page.autoLocation.left+'px');//lu
                                // $("#"+_target.page.autoLocation.layer).css('margin-left',"0");//lu

                                }

                                // _target.page.autoLocation.left=-(currentFocusL-_target.page.autoLocation.edgeWidthL);
                                //$("#"+_target.page.autoLocation.layer).css('left',_target.page.autoLocation.left+'px');
                                $("#"+_target.page.autoLocation.layer).css('transform','translateX('+_target.page.autoLocation.left+'px)');//lu
                            }
                        }
                    }
                    //ver1.2
                    if (this.page.pageType == "combine") {
                        //定义焦点运算相关变量
                        //全局焦点变量赋值
                        var tempCurrentFocusObj = _getCurrentFocusObj();
                        var oriIdx = hiSDKSettings.cb_currentTemplateIdx;
                        var oriSign = hiSDKSettings.cb_currentTemplateSign;
                        var tempFocus = _getCurrentFocusObj();
                        var currentFocusRight = 0, currentFocusLeft = 0;
                        var __tempCb_relativeLeft = hiSDKSettings.cb_relativeLeft;
                        if (tempFocus.CaEType == "GridUl" || tempFocus.CaEType == "GridList") {
                            var relativeLocal = 0;
                            if (!!tempFocus.locationFun) {
                                if (typeof tempFocus.locationFun == 'function') {
                                    relativeLocal = tempFocus.locationFun.call(this, tempFocus.SelectedIndex);
                                }
                                else if (typeof tempFocus.locationFun == 'string') {
                                    relativeLocal = eval(tempFocus.locationFun + '.call(this,' + tempFocus.SelectedIndex + ')');
                                }
                            }
                            console.log("relativeLocal:" + relativeLocal)
                            currentFocusRight = Math.round(relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft) + tempFocus.Width) + Math.round(getMetaRelPosition_left(tempFocus.id));
                            currentFocusLeft = Math.round(relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft)) + Math.round(getMetaRelPosition_left(tempFocus.id));
                        } else {
                            currentFocusRight = Math.round(getMetaRelPosition_right(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft));
                            currentFocusLeft = Math.round(getMetaRelPosition_left(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft));
                        }

                        if (currentFocusLeft < -hiSDKSettings.cb_relativeLeft + hiSDKSettings.cb_templageEdgeValue) {
                            hiSDKSettings.cb_relativeLeft = -(currentFocusLeft - hiSDKSettings.cb_templageEdgeValue);
                        }


                        if (tempCurrentFocusObj.templateIndx != oriIdx) {
                            hiSDKSettings.cb_currentTemplateIdx--;//todo不确定
                            hiSDKSettings.cb_currentTemplateSign = tempCurrentFocusObj.templateSign;
                            hiSDKSettings.cb_currentFocus = tempCurrentFocusObj;
                        } else {
                            hiSDKSettings.cb_currentFocus = tempCurrentFocusObj;
                        }
                        if (hiSDKSettings.cb_relativeLeft > 0)hiSDKSettings.cb_relativeLeft = 0;

                        hiSDKSettings.cb_currentTemplateFocusLeft = currentFocusLeft;
                        hiSDKSettings.cb_currentTemplateFocusRight = currentFocusRight;

                        //针对live的特殊处理
                        if (__tempCb_relativeLeft < 0 && hiSDKSettings.cb_relativeLeft >= 0) {
                            OEMLauncherLiveTvVideoShow();
                        }

                        /*setTransition();
                         $('#'+hiSDKSettings.cb_htmlContainer).animate(
                         {transform:'translateX('+hiSDKSettings.cb_relativeLeft+'px)'}, "slow"
                         );*/
                        //$('#' + hiSDKSettings.cb_htmlContainer).css("left", hiSDKSettings.cb_relativeLeft + 'px');
                        $("#"+hiSDKSettings.cb_htmlContainer).css('transform','translateX('+hiSDKSettings.cb_relativeLeft+'px)');//lu


                        if (effectSwitch == 1) {
                            var __currentFocus_width = getMetaRelPosition_width(tempFocus.id);
                            var __currentFocus_height = getMetaRelPosition_height(tempFocus.id);
//                            console.log("__currentFocus_width:"+__currentFocus_width)
//                            console.log("__currentFocus_height:"+__currentFocus_height)
                            $('#mainFocusTL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusTR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');
                            $('#mainFocusBL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusBR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');

                        } else if (effectSwitch == 2) {
                            $('#mainFocus').css("top",document.getElementById(tempFocus.id).getBoundingClientRect().top+'px');
                             $('#mainFocus').css("left",(document.getElementById(tempFocus.id).getBoundingClientRect().left-__tempCb_relativeLeft+hiSDKSettings.cb_relativeLeft)+'px');
                             $('#mainFocus').css("height",document.getElementById(tempFocus.id).getBoundingClientRect().height+'px');
                             $('#mainFocus').css("width",document.getElementById(tempFocus.id).getBoundingClientRect().width+'px');
                        } else {
                        }


                        cb_display();
                        trans = false;
                    }

                    break;
                case hiSDKSettings.keyValues.keyRight:
                    var _target=this;//ver1.5
                    //ver1.2
                    if (this.page.pageType == "combine") {
                        hiSDKSettings.lastDirKey = 4;
                        hiSDKSettings.cb_TBSign === undefined && (hiSDKSettings.cb_TBSign = 0)
                        console.log("当前习惯：" + hiSDKSettings.cb_TBSign);
                        //if (this.nav.rightTo == "AUTO") {
                        if ($.inArray(this.id, _templateCaERightToArray[this.templateIndx]) != -1) {
                            console.log(this.id)
                            console.log(this.templateIndx)
                            var currentDx = getMetaRelPosition_right(this.id)
                            var currentDy = getMetaRelPosition_top(this.id) + getMetaRelPosition_height(this.id) / 2;
                            var currentDDis = Number.MAX_VALUE;
                            var currentTP = Number.MAX_VALUE;
                            var currentBT = 0;
                            if (hiSDKSettings.cb_TBSign == 1) {
                                for (var j = 0; j < _templateCaELeftToArray[this.templateIndx + 1].length; j++) {
                                    var target_top = getMetaRelPosition_top(_templateCaELeftToArray[this.templateIndx + 1][j]);
                                    console.log("target_top>>" + target_top)
                                    if (target_top < currentTP) {
                                        currentTP = target_top;
                                        this.nav.rightTo = _templateCaELeftToArray[this.templateIndx + 1][j];
                                    }
                                }
                            } else if (hiSDKSettings.cb_TBSign == -1) {
                                for (var j = 0; j < _templateCaELeftToArray[this.templateIndx + 1].length; j++) {
                                    var target_bottom = getMetaRelPosition_top(_templateCaELeftToArray[this.templateIndx + 1][j]) + getMetaRelPosition_height(_templateCaELeftToArray[this.templateIndx + 1][j]);
                                    console.log("target_bottom>>" + target_bottom)
                                    if (target_bottom > currentBT) {
                                        currentBT = target_bottom;
                                        this.nav.rightTo = _templateCaELeftToArray[this.templateIndx + 1][j];
                                    }
                                }
                            } else {
                                for (var j = 0; j < _templateCaELeftToArray[this.templateIndx + 1].length; j++) {
                                    var targetDx = getMetaRelPosition_left(_templateCaELeftToArray[this.templateIndx + 1][j])
                                    var targetDy = getMetaRelPosition_top(_templateCaELeftToArray[this.templateIndx + 1][j]) + getMetaRelPosition_height(_templateCaELeftToArray[this.templateIndx + 1][j]) / 2;
                                    var tempDis = Math.pow((currentDx - targetDx), 2) + Math.pow((currentDy - targetDy), 2);
                                    if (tempDis < currentDDis) {
                                        currentDDis = tempDis;
                                        this.nav.rightTo = _templateCaELeftToArray[this.templateIndx + 1][j];
                                    }
                                }
                            }
                        } else {

                        }
                    }
                    if (this.CaEType == 'input' && !!this.isWrite && getCursortPosition(this.id) < $.trim($('#' + this.id).val() + '').length) {
                        _keyRight(this.id);
                    }
                    else {
                        var cross = 2;
                        var handlerResult = true;//当该值为false时后续不执行
                        if (!!this.handler && !!this.handler.befRightHandler) {
                            if (typeof this.handler.befRightHandler == 'string') {
                                if(event.from == "singleKey") {
                                    handlerResult = eval(this.handler.befRightHandler + '.call(this,this.page.operateData,this.data, "singleKey")');
                                }
                                else{
                                    handlerResult = eval(this.handler.befRightHandler + '.call(this,this.page.operateData,this.data)');
                                }
                            } else if (typeof this.handler.befRightHandler == 'function') {
                                if(event.from == "singleKey"){
                                    handlerResult = this.handler.befRightHandler.call(this, this.page.operateData, this.data, "singleKey");
                                }
                                else{
                                     handlerResult = this.handler.befRightHandler.call(this, this.page.operateData, this.data);
                                }
                            }
                        }
                        if (handlerResult == undefined || handlerResult == true) {
                            if (this.CaEType == 'NavigationBar') {
                                if (this.SelectedIndex != this.data.Data.length - 1) {

                                    if (!!this.disableItem) {//2014-5-24
                                        var assertIdx = _getNextIndex(this.SelectedIndex, this.disableItem, this.data.Data.length);
                                        if (this.SelectedIndex != assertIdx) {
                                            this.hiBlur();
                                            this.SelectedIndex = assertIdx;
                                            var currentBeginIndex = this.BeginIdx;
//                                    this.BeginIdx = parseInt(this.SelectedIndex / this.PageSize) * this.PageSize;
                                            this.BeginIdx = (this.SelectedIndex > currentBeginIndex + this.PageSize - 1) ? this.SelectedIndex - this.PageSize + 1 : this.BeginIdx;
                                            if (this.BeginIdx != currentBeginIndex)this.refreshData();
                                            this.data.SelectedIndex = this.SelectedIndex;//6-20
                                            this.data.BeginIdx = this.BeginIdx;//7-11
                                            this.hiFocus();
                                            cross = 2
                                        } else {
                                            /*if (!!this.nav && !!this.nav.rightTo) {
                                             this.hiBlur();
                                             hiSDKSettings.currentPage.getCaE(this.nav.rightTo).hiFocus();
                                             } else {
                                             trans = true;
                                             }*/
                                            cross = 1;
                                        }

                                    } else {
                                        this.hiBlur();
                                        this.SelectedIndex++;
                                        if (this.SelectedIndex >= this.BeginIdx + this.PageSize) {
                                            this.BeginIdx++;
                                            this.refreshData();
                                        }
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    }

                                } else {


                                    //Todo 以下跳转应用了页面的水平跳转设置
                                    if (this.page.horizontalEdgesJump) {//2014-11-20加入水平向右导航跳转
                                        if (!!this.disableItem) {
                                            var assertIdx = _getNextIndex(-1, this.disableItem, this.data.Data.length);
                                            if (this.SelectedIndex != assertIdx) {
                                                this.hiBlur();
                                                this.SelectedIndex = assertIdx;
                                                var currentBeginIndex = this.BeginIdx;
                                                this.BeginIdx = this.PageSize * (parseInt((this.BeginIdx / this.PageSize)));
                                                if (this.BeginIdx != currentBeginIndex)this.refreshData();
                                                this.data.SelectedIndex = this.SelectedIndex;//6-20
                                                this.data.BeginIdx = this.BeginIdx;//7-11
                                                this.hiFocus();
                                                cross = 2
                                            } else {
                                                cross = 1;
                                            }
                                        } else {//未测试
                                            this.hiBlur();
                                            this.SelectedIndex = 0;
                                            if (this.BeginIdx != 0) {
                                                this.refreshData();
                                            }
                                            this.BeginIdx = 0;
                                            this.data.SelectedIndex = this.SelectedIndex;//6-20
                                            this.data.BeginIdx = this.BeginIdx;//7-11
                                            this.hiFocus();
                                            cross = 2;
                                        }
                                    }


                                    cross = 1;
                                }
                            }
                            else if (this.CaEType == 'GridUl') {

                                if (this.SelectedIndex < this.data.Data.length - 1 && (this.SelectedIndex + 1) % this.LineNum != 0) {
                                    //非右边界
                                    cross = 2;//2014-6-18
                                    this.hiBlur();
                                    this.SelectedIndex++;
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.hiFocus();
                                } else {
                                    if (this.BeginIdx + this.PageSize < this.data.Data.length && this.FlipType == 'HOR') {
                                        // 非最后一页，且允许水平翻页
                                        this.hiBlur();
                                        this.SelectedIndex = this.BeginIdx + this.PageSize;
                                        this.BeginIdx = this.BeginIdx + this.PageSize;
                                        this.refreshData();
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;//2014-6-18
                                    } else {//2014-6-18
                                        cross = 1;//2014-6-18
                                        /*if (!!this.nav && !!this.nav.leftTo) {
                                         this.hiBlur();
                                         hiSDKSettings.currentPage.getCaE(this.nav.leftTo).hiFocus();
                                         } else {
                                         trans = true;
                                         }*/
                                    }
                                }
                            }
                            else if (this.CaEType == 'GridList') {
                                if (this.SelectedIndex + this.LineNum < Math.min(this.data.Data.length, this.BeginIdx + this.PageSize)) {
                                    //非最后一行
                                    this.hiBlur();
                                    this.SelectedIndex = this.SelectedIndex + this.LineNum;
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.hiFocus();
                                    cross = 2;
                                }
                                else {
                                    if (this.BeginIdx + this.PageSize < this.data.Data.length && this.FlipType == 'VER') {
                                        //非最后一页的最后一行，且允许上下翻页
                                        this.hiBlur();
                                        this.SelectedIndex = this.BeginIdx + this.PageSize;
                                        this.BeginIdx = this.BeginIdx + this.PageSize;
                                        this.refreshData();
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    }
                                    else {
                                        cross = 1;
                                    }
//                                if (!!this.nav && !!this.nav.downTo) {
//                                    this.hiBlur();
//                                    hiSDKSettings.currentPage.getCaE(this.nav.downTo).hiFocus();
//                                } else {
//                                    trans = true;
//                                }

                                }
                            }
                            else if (this.CaEType == 'Tabs' && this.CaELib.length > (this.SelectedIndex + 1) && this.FlipType == 'HOR') {//2014-05-26
                                //水平翻页
                                this.hiBlur();
                                this.SelectedIndex++;
                                this.data.SelectedIndex = this.SelectedIndex;//6-20
                                this.hiFocus();
                                cross = 2;
                            }
                            else if (this.CaEType == 'Container' && !!this.IsPrevent) {
                                cross = 2;
                            }
                            else if (this.CaEType == 'Slider') {
                                cross = 2;
                            }
                            else {
                                cross = 1;
                            }
                            if (cross == 1) {
                                if (!!this.nav && !!this.nav.rightTo) {
                                    //enable处理
                                    var aTarget = getValidNav(1, this);
                                    if (aTarget != null) {
                                        _target=aTarget;//ver1.5
                                        /*this.hiBlur();
                                         aTarget.hiFocus();
                                         if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                         event.preventDefault();
                                         }
                                         if (!!aTarget.handler && !!aTarget.handler.aftRightHandler) {
                                         if (typeof aTarget.handler.aftRightHandler == 'string') {
                                         eval(aTarget.handler.aftRightHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                         } else if (typeof aTarget.handler.aftRightHandler == 'function') {
                                         aTarget.handler.aftRightHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                         }
                                         }修改为*/

                                        if (aTarget.CaEType == "Ul" || aTarget.CaEType == "NavigationBar") {
                                            var assertIdx = _getNextIndexEq(aTarget.SelectedIndex, aTarget.disableItem, aTarget.data.Data.length);
                                            if (!!aTarget.disableItem) {
                                                if (assertIdx >= 0 && aTarget.SelectedIndex <= assertIdx) {
                                                    this.hiBlur();
                                                    aTarget.SelectedIndex = assertIdx;
                                                    var currentBeginIndex = aTarget.BeginIdx;
                                                    aTarget.BeginIdx = (aTarget.SelectedIndex > currentBeginIndex + aTarget.PageSize - 1) ? aTarget.SelectedIndex - aTarget.PageSize + 1 : aTarget.BeginIdx;
                                                    if (aTarget.BeginIdx != currentBeginIndex)aTarget.refreshData();
                                                    aTarget.data.SelectedIndex = aTarget.SelectedIndex;
                                                    aTarget.data.BeginIdx = aTarget.BeginIdx;
                                                    aTarget.hiFocus();
                                                    if (!!aTarget.handler && !!aTarget.handler.aftRightHandler) {
                                                        if (typeof aTarget.handler.aftRightHandler == 'string') {
                                                            eval(aTarget.handler.aftRightHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                        } else if (typeof aTarget.handler.aftRightHandler == 'function') {
                                                            aTarget.handler.aftRightHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                        }
                                                    }
                                                }
                                            } else {
                                                this.hiBlur();
                                                aTarget.hiFocus();
                                                if (!!aTarget.handler && !!aTarget.handler.aftRightHandler) {
                                                    if (typeof aTarget.handler.aftRightHandler == 'string') {
                                                        eval(aTarget.handler.aftRightHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                    } else if (typeof aTarget.handler.aftRightHandler == 'function') {
                                                        aTarget.handler.aftRightHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                    }
                                                }
                                            }
                                        } else {
                                            this.hiBlur();
                                            aTarget.hiFocus();
                                            if (!!aTarget.handler && !!aTarget.handler.aftRightHandler) {
                                                if (typeof aTarget.handler.aftRightHandler == 'string') {
                                                    eval(aTarget.handler.aftRightHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                } else if (typeof aTarget.handler.aftRightHandler == 'function') {
                                                    aTarget.handler.aftRightHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                }
                                            }
                                        }
                                        if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                            event.preventDefault();
                                        }


                                    } else {
                                        trans = true;//不存在导航与无导航指向统一传递交由上级部件处理
                                    }
                                } else {
                                    trans = true;
                                }
                            } else if (cross == 2) {
                                if (!!this.handler && !!this.handler.aftRightHandler) {
                                    if (typeof this.handler.aftRightHandler == 'string') {
                                        eval(this.handler.aftRightHandler + '.call(this,this.page.operateData,this.data)');
                                    } else if (typeof this.handler.aftRightHandler == 'function') {
                                        this.handler.aftRightHandler.call(this, this.page.operateData, this.data);
                                    }
                                }
                            }
                            if (this.page.pageMode.toLowerCase() == 'skb') event.preventDefault();
                        }
                        //ver1.5 图层自动定位算法
                        if(!!_target.relPosition && !!_target.page.autoLocation){
                            var currentFocusR;
                            if(_target.CaEType=="GridList"){
                                currentFocusR=_target.relPosition[0]+(parseInt(_target.SelectedIndex/_target.LineNum)+1)*_target.relPosition[2];
                            }else if(_target.CaEType=="NavigationBar"){
                                currentFocusR=_target.relPosition[0]+(_target.SelectedIndex+1)*_target.relPosition[2];
                            }else{
                                currentFocusR=_target.relPosition[0]+_target.relPosition[2];
                            }
                            //console.log("currentFocusR:"+currentFocusR)
                            if(currentFocusR>Math.abs(_target.page.autoLocation.left)+_target.page.autoLocation.width-_target.page.autoLocation.edgeWidthR){

                                if("ltr" == hiSDKSettings.HTMLDirection){

                                _target.page.autoLocation.left=-(currentFocusR-_target.page.autoLocation.width+_target.page.autoLocation.edgeWidthR);
                                // $("#"+_target.page.autoLocation.layer).css('margin-left',+_target.page.autoLocation.left+'px');//lu
                                }
                                else{

                                _target.page.autoLocation.left=(currentFocusR-_target.page.autoLocation.width+_target.page.autoLocation.edgeWidthR);

                                // $("#"+_target.page.autoLocation.layer).css('margin-right',_target.page.autoLocation.left+'px');//lu
                                }
                                //$("#"+_target.page.autoLocation.layer).css('left',_target.page.autoLocation.left+'px');
                                $("#"+_target.page.autoLocation.layer).css('transform','translateX('+_target.page.autoLocation.left+'px)');//lu
                            }
                        }
                    }
                    //ver1.2
                    if (this.page.pageType == "combine") {
                        //定义焦点运算相关变量
                        //全局焦点变量赋值
                        var tempCurrentFocusObj = _getCurrentFocusObj();
                        var oriIdx = hiSDKSettings.cb_currentTemplateIdx;
                        var oriSign = hiSDKSettings.cb_currentTemplateSign;
                        var tempFocus = _getCurrentFocusObj();
                        var currentFocusRight = 0, currentFocusLeft = 0;
                        var __tempCb_relativeLeft = hiSDKSettings.cb_relativeLeft;
                        if (tempFocus.CaEType == "GridUl" || tempFocus.CaEType == "GridList") {
                            var relativeLocal = 0;
                            if (!!tempFocus.locationFun) {
                                if (typeof tempFocus.locationFun == 'function') {
                                    relativeLocal = tempFocus.locationFun.call(this, tempFocus.SelectedIndex);
                                }
                                else if (typeof tempFocus.locationFun == 'string') {
                                    relativeLocal = eval(tempFocus.locationFun + '.call(this,' + tempFocus.SelectedIndex + ')');
                                }
                            }
                            currentFocusRight = relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft) + tempFocus.Width + Math.round(getMetaRelPosition_left(tempFocus.id));
                            currentFocusLeft = relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft) + Math.round(getMetaRelPosition_left(tempFocus.id));
                        } else {
                            currentFocusRight = getMetaRelPosition_right(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft);
                            currentFocusLeft = getMetaRelPosition_left(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft);
                        }
                        if (currentFocusRight > -hiSDKSettings.cb_relativeLeft + hiSDKSettings.cb_screenWidth - hiSDKSettings.cb_templageEdgeValue) {
                            hiSDKSettings.cb_relativeLeft = -(currentFocusRight - hiSDKSettings.cb_screenWidth + hiSDKSettings.cb_templageEdgeValue);
                        }
                        if (tempCurrentFocusObj.templateIndx != oriIdx) {//todo 判断templateSign有问题，相同模版会出错
                            hiSDKSettings.cb_currentTemplateIdx++;//todo不确定，left相同处理
                            hiSDKSettings.cb_currentTemplateSign = tempCurrentFocusObj.templateSign;
                            hiSDKSettings.cb_currentFocus = tempCurrentFocusObj;
                        } else {
                            hiSDKSettings.cb_currentFocus = tempCurrentFocusObj;
                        }

                        var _allLength = _getArrayAValue(hiSDKSettings.cb_templagePositionArray, hiSDKSettings.cb_templagePositionArray.length)+170;
                        console.log("hiSDKSettings.cb_relativeLeft:" + hiSDKSettings.cb_relativeLeft)
                        console.log(_allLength)
                        if (Math.abs(hiSDKSettings.cb_relativeLeft) > _allLength - hiSDKSettings.cb_screenWidth) {
                            hiSDKSettings.cb_relativeLeft = (_allLength - hiSDKSettings.cb_screenWidth > 0) ? -(_allLength - hiSDKSettings.cb_screenWidth) : 0;
                        }
                        hiSDKSettings.cb_currentTemplateFocusLeft = currentFocusLeft;
                        hiSDKSettings.cb_currentTemplateFocusRight = currentFocusRight;

                        //针对live的特殊处理
                        if (__tempCb_relativeLeft >= 0 && hiSDKSettings.cb_relativeLeft < 0) {
                            OEMLauncherLiveTvVideoDoNotShow();
                        }

                        /*setTransition();
                         $('#'+hiSDKSettings.cb_htmlContainer).animate(
                         {transform:'translateX('+hiSDKSettings.cb_relativeLeft+'px)'}, "slow"
                         );*/
                        //$('#' + hiSDKSettings.cb_htmlContainer).css("left", hiSDKSettings.cb_relativeLeft + 'px');
                        $("#"+hiSDKSettings.cb_htmlContainer).css('transform','translateX('+hiSDKSettings.cb_relativeLeft+'px)');

                        if (effectSwitch == 1) {
                            var __currentFocus_width = getMetaRelPosition_width(tempFocus.id);
                            var __currentFocus_height = getMetaRelPosition_height(tempFocus.id);
//                            console.log("__currentFocus_width:"+__currentFocus_width)
//                            console.log("__currentFocus_height:"+__currentFocus_height)
                            $('#mainFocusTL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusTR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');
                            $('#mainFocusBL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusBR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');

                        } else if (effectSwitch == 2) {
                            $('#mainFocus').css("top",document.getElementById(tempFocus.id).getBoundingClientRect().top+'px');
                             $('#mainFocus').css("left",(document.getElementById(tempFocus.id).getBoundingClientRect().left-__tempCb_relativeLeft+hiSDKSettings.cb_relativeLeft)+'px');
                             $('#mainFocus').css("height",document.getElementById(tempFocus.id).getBoundingClientRect().height+'px');
                             $('#mainFocus').css("width",document.getElementById(tempFocus.id).getBoundingClientRect().width+'px');
                        } else {
                        }
                        cb_display();
                        trans = false;
                    }
                    break;
                case hiSDKSettings.keyValues.keyUp:
                    var _oriPageId = getCurrentPageId();
                    var cross = 0;
                    var handlerResult = true;//当该值为false时后续不执行
                    if (!!this.handler && !!this.handler.befUpHandler) {
                        if (typeof this.handler.befUpHandler == 'string') {
                            handlerResult = eval(this.handler.befUpHandler + '.call(this,this.page.operateData,this.data)');
                        } else if (typeof this.handler.befUpHandler == 'function') {
                            handlerResult = this.handler.befUpHandler.call(this, this.page.operateData, this.data);
                        }
                    }
                    if (handlerResult == undefined || handlerResult == true) {

                        if (this.CaEType == 'Ul') {
                            if (this.SelectedIndex != 0) {
                                if (!!this.disableItem && this.disableItem.length > 0) {//2015-4-13
                                    var assertIdx = _getPreIndex(this.SelectedIndex, this.disableItem);
                                    if (this.SelectedIndex != assertIdx) {
                                        this.SelectedIndex = assertIdx;
                                        var currentBeginIndex = this.BeginIdx;
//                                    this.BeginIdx = parseInt(this.SelectedIndex / this.PageSize) * this.PageSize;
                                        this.BeginIdx = (this.SelectedIndex < currentBeginIndex) ? this.SelectedIndex : this.BeginIdx;
                                        if (this.BeginIdx != currentBeginIndex)this.refreshData();
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    } else {
                                        /*if (!!this.nav && !!this.nav.upTo) {
                                         this.hiBlur();
                                         hiSDKSettings.currentPage.getCaE(this.nav.upTo).hiFocus();
                                         } else {
                                         trans = true;
                                         }*/
                                        cross = 1;
                                    }

                                } else {
                                    if (this.ULPageMode == false) {
                                        this.hiBlur();
                                        this.SelectedIndex--;
                                        if (this.SelectedIndex < this.BeginIdx) {
                                            this.BeginIdx--;
                                            this.refreshData();
                                        }
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    } else {
                                        //在无DisableItem的情况下可启用翻页功能(2015-4-13)
                                        this.hiBlur();
                                        this.SelectedIndex--;
                                        if (this.SelectedIndex < this.BeginIdx) {
                                            this.BeginIdx = (this.BeginIdx >= this.PageSize) ? this.BeginIdx - this.PageSize : 0;
                                            this.refreshData();
                                        }
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    }
                                }

                            } else {
                                /*if (!!this.nav && !!this.nav.upTo) {
                                 this.hiBlur();
                                 hiSDKSettings.currentPage.getCaE(this.nav.upTo).hiFocus();
                                 } else {
                                 trans = true;
                                 }*/
                                cross = 1;
                            }
                        }
                        else if (this.CaEType == 'GridUl') {
                            if (this.SelectedIndex >= this.LineNum + this.BeginIdx) {
                                //不在第一行
                                this.hiBlur();
                                this.SelectedIndex = this.SelectedIndex - this.LineNum;
                                this.data.SelectedIndex = this.SelectedIndex;//6-20
                                this.data.BeginIdx = this.BeginIdx;//7-11
                                this.hiFocus();
                            } else {
                                if (this.BeginIdx != 0 && this.FlipType == 'VER') {
                                    //不在第一页，且允许上下翻页
                                    this.hiBlur();
//                                    this.SelectedIndex = this.BeginIdx - this.PageSize;
                                    this.SelectedIndex = this.BeginIdx - this.LineNum;
                                    this.BeginIdx = this.BeginIdx - this.PageSize;
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.refreshData();
                                    this.hiFocus();
                                    cross = 2;
                                } else {
//                                    if (!!this.nav && !!this.nav.upTo) {
//                                        this.hiBlur();
//                                        hiSDKSettings.currentPage.getCaE(this.nav.upTo).hiFocus();
//                                    } else {
//                                        trans = true;
//                                    }
                                    cross = 1;
                                }

                            }
                        }
                        else if (this.CaEType == 'GridList') {
                            if (this.SelectedIndex % this.LineNum != 0) {
                                //非最左端
                                cross = 2;//2014-6-18
                                this.hiBlur();
                                this.SelectedIndex--;
                                this.data.SelectedIndex = this.SelectedIndex;//6-20
                                this.data.BeginIdx = this.BeginIdx;//7-11
                                this.hiFocus();
                            }
                            else {
                                if (this.BeginIdx != 0 && this.FlipType == 'HOR') {
                                    //非第一页，且允许水平翻页
                                    this.hiBlur();
                                    this.SelectedIndex = this.BeginIdx - this.PageSize;
                                    this.BeginIdx = this.BeginIdx - this.PageSize;
                                    this.refreshData();
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.hiFocus();
                                    cross = 2;//2014-6-18
                                }
                                else {
                                    cross = 1;//2014-6-18
                                    /*if (!!this.nav && !!this.nav.leftTo) {
                                     this.hiBlur();
                                     hiSDKSettings.currentPage.getCaE(this.nav.leftTo).hiFocus();
                                     } else {
                                     trans = true;
                                     }*/
                                }

                            }
                        }
                        else if (this.CaEType == 'Tabs' && this.SelectedIndex > 0 && this.FlipType == 'VER') {//2014-05-26
                            //竖直翻页
                            this.hiBlur();
                            this.SelectedIndex--;
                            this.data.SelectedIndex = this.SelectedIndex;//6-20
                            this.hiFocus();
                            cross = 2;
                        }
                        else if (this.CaEType == 'Container' && !!this.IsPrevent) {
                            cross = 2;
                        }
                        else {
                            cross = 1;
//                        if (!!this.nav && !!this.nav.upTo) {
//                            this.hiBlur();
//                            hiSDKSettings.currentPage.getCaE(this.nav.upTo).hiFocus();
//                        } else {
//                            trans = true;
//                        }
                        }
                        if (cross == 1) {
                            if (!!this.nav && !!this.nav.upTo) {
                                //enable处理
                                var aTarget = getValidNav(0, this);
                                if (aTarget != null) {
                                    //加入Ul部件进入时可用项目处理
                                    /*this.hiBlur();
                                     aTarget.hiFocus();
                                     if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                     event.preventDefault();
                                     }
                                     if (!!aTarget.handler && !!aTarget.handler.aftUpHandler) {
                                     if (typeof aTarget.handler.aftUpHandler == 'string') {
                                     eval(aTarget.handler.aftUpHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                     } else if (typeof aTarget.handler.aftUpHandler == 'function') {
                                     aTarget.handler.aftUpHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                     }
                                     }修改为*/

                                    // Added By Liutiantian For IQQI
                                    aTarget.event = event;
                                    // Added By Liutiantian Ended

                                    if (aTarget.CaEType == "Ul" || aTarget.CaEType == "NavigationBar") {
                                        if (!!aTarget.disableItem) {
                                            var assertIdx = _getPreIndexEq(aTarget.SelectedIndex, aTarget.disableItem);
                                            if (assertIdx >= 0 && aTarget.SelectedIndex >= assertIdx) {
                                                this.hiBlur();
                                                aTarget.SelectedIndex = assertIdx;
                                                var currentBeginIndex = aTarget.BeginIdx;
                                                aTarget.BeginIdx = (aTarget.SelectedIndex > currentBeginIndex + aTarget.PageSize - 1) ? aTarget.SelectedIndex - aTarget.PageSize + 1 : aTarget.BeginIdx;
                                                if (aTarget.BeginIdx != currentBeginIndex)aTarget.refreshData();
                                                aTarget.data.SelectedIndex = aTarget.SelectedIndex;
                                                aTarget.data.BeginIdx = aTarget.BeginIdx;
                                                aTarget.hiFocus();
                                                if (!!aTarget.handler && !!aTarget.handler.aftUpHandler) {
                                                    if (typeof aTarget.handler.aftUpHandler == 'string') {
                                                        eval(aTarget.handler.aftUpHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                    } else if (typeof aTarget.handler.aftUpHandler == 'function') {
                                                        aTarget.handler.aftUpHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                    }
                                                }
                                            }
                                        } else {
                                            this.hiBlur();
                                            aTarget.hiFocus();
                                            if (!!aTarget.handler && !!aTarget.handler.aftUpHandler) {
                                                if (typeof aTarget.handler.aftUpHandler == 'string') {
                                                    eval(aTarget.handler.aftUpHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                } else if (typeof aTarget.handler.aftUpHandler == 'function') {
                                                    aTarget.handler.aftUpHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                }
                                            }
                                        }
                                    } else {
                                        this.hiBlur();
                                        aTarget.hiFocus();
                                        if (!!aTarget.handler && !!aTarget.handler.aftUpHandler) {
                                            if (typeof aTarget.handler.aftUpHandler == 'string') {
                                                eval(aTarget.handler.aftUpHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                            } else if (typeof aTarget.handler.aftUpHandler == 'function') {
                                                aTarget.handler.aftUpHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                            }
                                        }
                                    }
                                    if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                        event.preventDefault();
                                    }


                                } else {
                                    trans = true;//不存在导航与无导航指向统一传递交由上级部件处理
                                }
                            } else {
                                trans = true;
                            }
                        } else if (cross == 2) {
                            if (!!this.handler && !!this.handler.aftUpHandler) {
                                if (typeof this.handler.aftUpHandler == 'string') {
                                    eval(this.handler.aftUpHandler + '.call(this,this.page.operateData,this.data)');
                                } else if (typeof this.handler.aftUpHandler == 'function') {
                                    this.handler.aftUpHandler.call(this, this.page.operateData, this.data);
                                }
                            }
                        }
                        if (this.page.pageMode.toLowerCase() == 'skb') event.preventDefault();

                    }
                    //ver1.2
                    if (this.page.pageType == "combine" && _oriPageId == getCurrentPageId()) {
                        hiSDKSettings.cb_TBSign === undefined && (hiSDKSettings.cb_TBSign = 0)
                        console.log("当前习惯：" + hiSDKSettings.cb_TBSign);
                        var tempCurrentFocusObj = _getCurrentFocusObj();
                        var tempFocus = _getCurrentFocusObj();
                        var currentFocusRight = 0, currentFocusLeft = 0;
                        var __tempCb_relativeLeft = hiSDKSettings.cb_relativeLeft;
                        if (tempFocus.CaEType == "GridUl" || tempFocus.CaEType == "GridList") {
                            var relativeLocal = 0;
                            if (!!tempFocus.locationFun) {
                                if (typeof tempFocus.locationFun == 'function') {
                                    relativeLocal = tempFocus.locationFun.call(this, tempFocus.SelectedIndex);
                                }
                                else if (typeof tempFocus.locationFun == 'string') {
                                    relativeLocal = eval(tempFocus.locationFun + '.call(this,' + tempFocus.SelectedIndex + ')');
                                }
                            }
                            currentFocusRight = relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft) + tempFocus.Width + Math.round(getMetaRelPosition_left(tempFocus.id));
                            currentFocusLeft = relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft) + Math.round(getMetaRelPosition_left(tempFocus.id));
                        } else {
                            currentFocusRight = getMetaRelPosition_right(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft);
                            currentFocusLeft = getMetaRelPosition_left(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft);
                        }
                        if (hiSDKSettings.lastDirKey == 4) {
                            if (currentFocusRight > -hiSDKSettings.cb_relativeLeft + hiSDKSettings.cb_screenWidth - hiSDKSettings.cb_templageEdgeValue) {
                                hiSDKSettings.cb_relativeLeft = -(currentFocusRight - hiSDKSettings.cb_screenWidth + hiSDKSettings.cb_templageEdgeValue);
                            }
                            var _allLength = _getArrayAValue(hiSDKSettings.cb_templagePositionArray, hiSDKSettings.cb_templagePositionArray.length);
                            if (Math.abs(hiSDKSettings.cb_relativeLeft) > _allLength - hiSDKSettings.cb_screenWidth) {
                                hiSDKSettings.cb_relativeLeft = (_allLength - hiSDKSettings.cb_screenWidth > 0) ? -(_allLength - hiSDKSettings.cb_screenWidth) : 0;
                            }
                        } else if (hiSDKSettings.lastDirKey == 3) {
                            if (currentFocusLeft < -hiSDKSettings.cb_relativeLeft + hiSDKSettings.cb_templageEdgeValue) {
                                hiSDKSettings.cb_relativeLeft = -(currentFocusLeft - hiSDKSettings.cb_templageEdgeValue);
                            }
                            if (hiSDKSettings.cb_relativeLeft > 0)hiSDKSettings.cb_relativeLeft = 0;
                        }
                        hiSDKSettings.cb_currentFocus = tempCurrentFocusObj;

                        hiSDKSettings.cb_currentTemplateFocusLeft = currentFocusLeft;
                        hiSDKSettings.cb_currentTemplateFocusRight = currentFocusRight;
                        var current_top = getMetaRelPosition_top(tempFocus.id);
//                        var current_bottom=getMetaRelPosition_top(this.id)+getMetaRelPosition_height(this.id);
                        if (current_top == 0) {
                            hiSDKSettings.cb_TBSign = 1;
                        } else {
                            hiSDKSettings.cb_TBSign = (hiSDKSettings.cb_TBSign == -1) ? 0 : hiSDKSettings.cb_TBSign;
                        }
                        console.log("current_top:" + current_top);
                        console.log(">习惯：" + hiSDKSettings.cb_TBSign);
                        console.log("页面：" + getCurrentPageId());

                        //针对live的特殊处理
                        if (__tempCb_relativeLeft >= 0 && hiSDKSettings.cb_relativeLeft < 0) {
                            OEMLauncherLiveTvVideoDoNotShow();
                        }

                        /*setTransition();
                         $('#'+hiSDKSettings.cb_htmlContainer).animate(
                         {transform:'translateX('+hiSDKSettings.cb_relativeLeft+'px)'}, "slow"
                         );*/
                        //$('#' + hiSDKSettings.cb_htmlContainer).css("left", hiSDKSettings.cb_relativeLeft + 'px');
                        $("#"+hiSDKSettings.cb_htmlContainer).css('transform','translateX('+hiSDKSettings.cb_relativeLeft+'px)');


                        if (effectSwitch == 1) {
                            var __currentFocus_width = getMetaRelPosition_width(tempFocus.id);
                            var __currentFocus_height = getMetaRelPosition_height(tempFocus.id);
//                            console.log("__currentFocus_width:"+__currentFocus_width)
//                            console.log("__currentFocus_height:"+__currentFocus_height)
                            $('#mainFocusTL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusTR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');
                            $('#mainFocusBL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusBR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');

                        } else if (effectSwitch == 2) {
                            $('#mainFocus').css("top",document.getElementById(tempFocus.id).getBoundingClientRect().top+'px');
                             $('#mainFocus').css("left",(document.getElementById(tempFocus.id).getBoundingClientRect().left-__tempCb_relativeLeft+hiSDKSettings.cb_relativeLeft)+'px');
                             $('#mainFocus').css("height",document.getElementById(tempFocus.id).getBoundingClientRect().height+'px');
                             $('#mainFocus').css("width",document.getElementById(tempFocus.id).getBoundingClientRect().width+'px');
                        } else {
                        }

                        cb_display();
                        trans = false;
                    }
                    break;
                case hiSDKSettings.keyValues.keyDown:
                    var cross = 0;
                    var handlerResult = true;//当该值为false时后续不执行
                    if (!!this.handler && !!this.handler.befDownHandler) {
                        if (typeof this.handler.befDownHandler == 'string') {
                            handlerResult = eval(this.handler.befDownHandler + '.call(this,this.page.operateData,this.data)');
                        } else if (typeof this.handler.befDownHandler == 'function') {
                            handlerResult = this.handler.befDownHandler.call(this, this.page.operateData, this.data);
                        }
                    }
                    if (handlerResult == undefined || handlerResult == true) {
                        if (this.CaEType == 'Ul') {
                            if (this.SelectedIndex != this.data.Data.length - 1) {
                                if (!!this.disableItem && this.disableItem.length > 0) {//2015-4-13
                                    var assertIdx = _getNextIndex(this.SelectedIndex, this.disableItem, this.data.Data.length);
                                    if (this.SelectedIndex != assertIdx) {
                                        this.hiBlur();
                                        this.SelectedIndex = assertIdx;
                                        var currentBeginIndex = this.BeginIdx;
                                        //this.BeginIdx = parseInt(this.SelectedIndex / this.PageSize) * this.PageSize;
                                        this.BeginIdx = (this.SelectedIndex > currentBeginIndex + this.PageSize - 1) ? this.SelectedIndex - this.PageSize + 1 : this.BeginIdx;
                                        if (this.BeginIdx != currentBeginIndex)this.refreshData();
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    } else {
                                        /*if (!!this.nav && !!this.nav.downTo) {
                                         this.hiBlur();
                                         hiSDKSettings.currentPage.getCaE(this.nav.downTo).hiFocus();
                                         } else {
                                         trans = true;
                                         }*/
                                        cross = 1;
                                    }
                                } else {
                                    if (this.ULPageMode == false) {
                                        this.hiBlur();
                                        this.SelectedIndex++;
                                        if (this.SelectedIndex >= this.BeginIdx + this.PageSize) {
                                            this.BeginIdx++;
                                            this.refreshData();
                                        }
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    } else {
                                        //在无DisableItem的情况下可启用翻页功能(2015-4-13)
                                        this.hiBlur();
                                        this.SelectedIndex++;
                                        if (this.SelectedIndex >= this.BeginIdx + this.PageSize) {
                                            this.BeginIdx = (this.BeginIdx + this.PageSize < this.data.Data.length) ? this.BeginIdx + this.PageSize : this.SelectedIndex;
                                            this.refreshData();
                                        }
                                        this.data.SelectedIndex = this.SelectedIndex;//6-20
                                        this.data.BeginIdx = this.BeginIdx;//7-11
                                        this.hiFocus();
                                        cross = 2;
                                    }
                                }

                            } else {
                                /*if (!!this.nav && !!this.nav.downTo) {
                                 this.hiBlur();
                                 hiSDKSettings.currentPage.getCaE(this.nav.downTo).hiFocus();
                                 } else {
                                 trans = true;
                                 }*/
                                cross = 1;
                            }
                        }
                        else if (this.CaEType == 'GridUl') {
                            if (this.SelectedIndex + this.LineNum < Math.min(this.data.Data.length, this.BeginIdx + this.PageSize)) {
                                //非最后一行
                                this.hiBlur();
                                this.SelectedIndex = this.SelectedIndex + this.LineNum;
                                this.data.SelectedIndex = this.SelectedIndex;//6-20
                                this.data.BeginIdx = this.BeginIdx;//7-11
                                this.hiFocus();
                                cross = 2;
                            }
                            else {
                                if (this.BeginIdx + this.PageSize < this.data.Data.length && this.FlipType == 'VER') {
                                    //非最后一页的最后一行，且允许上下翻页
                                    this.hiBlur();
                                    this.SelectedIndex = this.BeginIdx + this.PageSize;
                                    this.BeginIdx = this.BeginIdx + this.PageSize;
                                    this.refreshData();
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.hiFocus();
                                    cross = 2;
                                } else {
                                    cross = 1;
                                }
//                                if (!!this.nav && !!this.nav.downTo) {
//                                    this.hiBlur();
//                                    hiSDKSettings.currentPage.getCaE(this.nav.downTo).hiFocus();
//                                } else {
//                                    trans = true;
//                                }

                            }
                        }
                        else if (this.CaEType == 'GridList') {

                            if (this.SelectedIndex < this.data.Data.length - 1 && (this.SelectedIndex + 1) % this.LineNum != 0) {
                                //非右边界
                                cross = 2;//2014-6-18
                                this.hiBlur();
                                this.SelectedIndex++;
                                this.data.SelectedIndex = this.SelectedIndex;//6-20
                                this.data.BeginIdx = this.BeginIdx;//7-11
                                this.hiFocus();
                            }
                            else {
                                if (this.BeginIdx + this.PageSize < this.data.Data.length && this.FlipType == 'HOR') {
                                    // 非最后一页，且允许水平翻页
                                    this.hiBlur();
                                    this.SelectedIndex = this.BeginIdx + this.PageSize;
                                    this.BeginIdx = this.BeginIdx + this.PageSize;
                                    this.refreshData();
                                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                                    this.data.BeginIdx = this.BeginIdx;//7-11
                                    this.hiFocus();
                                    cross = 2;//2014-6-18
                                }
                                else {//2014-6-18
                                    cross = 1;//2014-6-18
                                    /*if (!!this.nav && !!this.nav.leftTo) {
                                     this.hiBlur();
                                     hiSDKSettings.currentPage.getCaE(this.nav.leftTo).hiFocus();
                                     } else {
                                     trans = true;
                                     }*/
                                }
                            }
                        }
                        else if (this.CaEType == 'Tabs' && this.CaELib.length > (this.SelectedIndex + 1) && this.FlipType == 'VER') {//2014-05-26
                            //竖直翻页
                            this.hiBlur();
                            this.SelectedIndex++;
                            this.data.SelectedIndex = this.SelectedIndex;//6-20
                            this.hiFocus();
                            cross = 2;
                        }
                        else if (this.CaEType == 'Container' && !!this.IsPrevent) {
                            cross = 2;
                        }
                        else {
                            cross = 1;
//                        if (!!this.nav && !!this.nav.downTo) {
//                            this.hiBlur();
//                            hiSDKSettings.currentPage.getCaE(this.nav.downTo).hiFocus();
//                        } else {
//                            trans = true;
//                        }
                        }
                        if (cross == 1) {
                            if (!!this.nav && !!this.nav.downTo) {
                                //enable处理
                                var aTarget = getValidNav(2, this);
                                if (aTarget != null) {
                                    //加入Ul部件进入时可用项目处理
                                    /*this.hiBlur();
                                     aTarget.hiFocus();
                                     if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                     event.preventDefault();
                                     }
                                     if (!!aTarget.handler && !!aTarget.handler.aftDownHandler) {
                                     if (typeof aTarget.handler.aftDownHandler == 'string') {
                                     eval(aTarget.handler.aftDownHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                     } else if (typeof aTarget.handler.aftDownHandler == 'function') {
                                     aTarget.handler.aftDownHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                     }
                                     }修改为：*/

                                    if (aTarget.CaEType == "Ul" || aTarget.CaEType == "NavigationBar") {
                                        var assertIdx = _getNextIndexEq(aTarget.SelectedIndex, aTarget.disableItem, aTarget.data.Data.length);
                                        if (!!aTarget.disableItem) {
                                            if (assertIdx >= 0 && aTarget.SelectedIndex <= assertIdx) {
                                                this.hiBlur();
                                                aTarget.SelectedIndex = assertIdx;
                                                var currentBeginIndex = aTarget.BeginIdx;
                                                aTarget.BeginIdx = (aTarget.SelectedIndex > currentBeginIndex + aTarget.PageSize - 1) ? aTarget.SelectedIndex - aTarget.PageSize + 1 : aTarget.BeginIdx;
                                                if (aTarget.BeginIdx != currentBeginIndex)aTarget.refreshData();
                                                aTarget.data.SelectedIndex = aTarget.SelectedIndex;
                                                aTarget.data.BeginIdx = aTarget.BeginIdx;
                                                aTarget.hiFocus();
                                                if (!!aTarget.handler && !!aTarget.handler.aftDownHandler) {
                                                    if (typeof aTarget.handler.aftDownHandler == 'string') {
                                                        eval(aTarget.handler.aftDownHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                    } else if (typeof aTarget.handler.aftDownHandler == 'function') {
                                                        aTarget.handler.aftDownHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                    }
                                                }
                                            }
                                        } else {
                                            this.hiBlur();
                                            aTarget.hiFocus();
                                            if (!!aTarget.handler && !!aTarget.handler.aftDownHandler) {
                                                if (typeof aTarget.handler.aftDownHandler == 'string') {
                                                    eval(aTarget.handler.aftDownHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                                } else if (typeof aTarget.handler.aftDownHandler == 'function') {
                                                    aTarget.handler.aftDownHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                                }
                                            }
                                        }
                                    } else {
                                        this.hiBlur();
                                        aTarget.hiFocus();
                                        if (!!aTarget.handler && !!aTarget.handler.aftDownHandler) {
                                            if (typeof aTarget.handler.aftDownHandler == 'string') {
                                                eval(aTarget.handler.aftDownHandler + '.call(aTarget,aTarget.page.operateData,aTarget.data)');
                                            } else if (typeof aTarget.handler.aftDownHandler == 'function') {
                                                aTarget.handler.aftDownHandler.call(aTarget, aTarget.page.operateData, aTarget.data);
                                            }
                                        }
                                    }
                                    if (aTarget.CaEType == 'input' && !!aTarget.isWrite) {
                                        event.preventDefault();
                                    }


                                } else {
                                    trans = true;//不存在导航与无导航指向统一传递交由上级部件处理
                                }
                            } else {
                                trans = true;
                            }
                        } else if (cross == 2) {
                            if (!!this.handler && !!this.handler.aftDownHandler) {
                                if (typeof this.handler.aftDownHandler == 'string') {
                                    eval(this.handler.aftDownHandler + '.call(this,this.page.operateData,this.data)');
                                } else if (typeof this.handler.aftDownHandler == 'function') {
                                    this.handler.aftDownHandler.call(this, this.page.operateData, this.data);
                                }
                            }
                        }

                        if (this.page.pageMode.toLowerCase() == 'skb') event.preventDefault();
                    }
                    //ver1.2
                    if (this.page.pageType == "combine") {
                        hiSDKSettings.cb_TBSign === undefined && (hiSDKSettings.cb_TBSign = 0)
                        console.log("当前习惯：" + hiSDKSettings.cb_TBSign);
                        var tempCurrentFocusObj = _getCurrentFocusObj();
                        var tempFocus = _getCurrentFocusObj();
                        var currentFocusRight = 0, currentFocusLeft = 0;
                        var __tempCb_relativeLeft = hiSDKSettings.cb_relativeLeft;
                        if (tempFocus.CaEType == "GridUl" || tempFocus.CaEType == "GridList") {
                            var relativeLocal = 0;
                            if (!!tempFocus.locationFun) {
                                if (typeof tempFocus.locationFun == 'function') {
                                    relativeLocal = tempFocus.locationFun.call(this, tempFocus.SelectedIndex);
                                }
                                else if (typeof tempFocus.locationFun == 'string') {
                                    relativeLocal = eval(tempFocus.locationFun + '.call(this,' + tempFocus.SelectedIndex + ')');
                                }
                            }
                            currentFocusRight = relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft) + tempFocus.Width + Math.round(getMetaRelPosition_left(tempFocus.id));
                            currentFocusLeft = relativeLocal + Math.abs(hiSDKSettings.cb_relativeLeft) + Math.round(getMetaRelPosition_left(tempFocus.id));
                        } else {
                            currentFocusRight = getMetaRelPosition_right(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft);
                            currentFocusLeft = getMetaRelPosition_left(tempFocus.id) + Math.abs(hiSDKSettings.cb_relativeLeft);
                        }
                        if (hiSDKSettings.lastDirKey == 4) {
                            if (currentFocusRight > -hiSDKSettings.cb_relativeLeft + hiSDKSettings.cb_screenWidth - hiSDKSettings.cb_templageEdgeValue) {
                                hiSDKSettings.cb_relativeLeft = -(currentFocusRight - hiSDKSettings.cb_screenWidth + hiSDKSettings.cb_templageEdgeValue);
                            }
                            var _allLength = _getArrayAValue(hiSDKSettings.cb_templagePositionArray, hiSDKSettings.cb_templagePositionArray.length)+170;
                            if (Math.abs(hiSDKSettings.cb_relativeLeft) > _allLength - hiSDKSettings.cb_screenWidth) {
                                hiSDKSettings.cb_relativeLeft = (_allLength - hiSDKSettings.cb_screenWidth > 0) ? -(_allLength - hiSDKSettings.cb_screenWidth) : 0;
                            }
                        } else if (hiSDKSettings.lastDirKey == 3) {
                            if (currentFocusLeft < -hiSDKSettings.cb_relativeLeft + hiSDKSettings.cb_templageEdgeValue) {
                                hiSDKSettings.cb_relativeLeft = -(currentFocusLeft - hiSDKSettings.cb_templageEdgeValue);
                            }
                            if (hiSDKSettings.cb_relativeLeft > 0)hiSDKSettings.cb_relativeLeft = 0;
                        }
                        hiSDKSettings.cb_currentFocus = tempCurrentFocusObj;

                        hiSDKSettings.cb_currentTemplateFocusLeft = currentFocusLeft;
                        hiSDKSettings.cb_currentTemplateFocusRight = currentFocusRight;
                        var current_bottom = getMetaRelPosition_top(tempFocus.id) + getMetaRelPosition_height(tempFocus.id);
                        if (current_bottom > 700) {
                            hiSDKSettings.cb_TBSign = -1;
                        } else {
                            hiSDKSettings.cb_TBSign = (hiSDKSettings.cb_TBSign == 1) ? 0 : hiSDKSettings.cb_TBSign;
                        }
                        console.log("current_bottom:" + current_bottom);
                        console.log(">习惯：" + hiSDKSettings.cb_TBSign);
                        console.log("页面：" + getCurrentPageId());

                        //针对live的特殊处理
                        if (__tempCb_relativeLeft >= 0 && hiSDKSettings.cb_relativeLeft < 0) {
                            OEMLauncherLiveTvVideoDoNotShow();
                        }

                        /*setTransition();
                         $('#'+hiSDKSettings.cb_htmlContainer).animate(
                         {transform:'translateX('+hiSDKSettings.cb_relativeLeft+'px)'}, "slow"
                         );*/
                        //$('#' + hiSDKSettings.cb_htmlContainer).css("left", hiSDKSettings.cb_relativeLeft + 'px');
                        $("#" + hiSDKSettings.cb_htmlContainer).css('transform','translateX('+hiSDKSettings.cb_relativeLeft+'px)');


                        if (effectSwitch == 1) {
                            var __currentFocus_width = getMetaRelPosition_width(tempFocus.id);
                            var __currentFocus_height = getMetaRelPosition_height(tempFocus.id);
//                            console.log("__currentFocus_width:"+__currentFocus_width)
//                            console.log("__currentFocus_height:"+__currentFocus_height)
                            $('#mainFocusTL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusTR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180) + 'px');
                            $('#mainFocusTR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');
                            $('#mainFocusBL').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBL').css("left", (-30 + getMetaRelPosition_left(tempFocus.id)) + 'px');
                            $('#mainFocusBR').css("top", (getMetaRelPosition_top(tempFocus.id) + 180 + __currentFocus_height) + 'px');
                            $('#mainFocusBR').css("left", (-30 + getMetaRelPosition_left(tempFocus.id) + __currentFocus_width) + 'px');

                        } else if (effectSwitch == 2) {
                            $('#mainFocus').css("top",document.getElementById(tempFocus.id).getBoundingClientRect().top+'px');
                             $('#mainFocus').css("left",(document.getElementById(tempFocus.id).getBoundingClientRect().left-__tempCb_relativeLeft+hiSDKSettings.cb_relativeLeft)+'px');
                             $('#mainFocus').css("height",document.getElementById(tempFocus.id).getBoundingClientRect().height+'px');
                             $('#mainFocus').css("width",document.getElementById(tempFocus.id).getBoundingClientRect().width+'px');
                        } else {
                        }
                        cb_display();
                        trans = false;
                    }
                    break;
                case hiSDKSettings.keyValues.keyEnter:
                    var doHandler = false;
                    var handlerResult = true;//当该值为false时后续不执行
                    if (!!this.handler && !!this.handler.befEnterHandler) {
                        if (typeof this.handler.befEnterHandler == 'string') {
                            handlerResult = eval(this.handler.befEnterHandler + '.call(this,this.page.operateData,this.data)');
                        } else if (typeof this.handler.befEnterHandler == 'function') {
                            handlerResult = this.handler.befEnterHandler.call(this, this.page.operateData, this.data);
                        }
                        doHandler = true;
                    }
                    if (handlerResult == undefined || handlerResult == true) {
                        if (!!this.nav && !!this.nav.enterTo) {
                            this.hiBlur();
                            hiSDKSettings.currentPage.getCaE(this.nav.enterTo).hiFocus();
                        }
                        if (!!this.handler && !!this.handler.aftEnterHandler) {
                            if (typeof this.handler.aftEnterHandler == 'string') {
                                eval(this.handler.aftEnterHandler + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler.aftEnterHandler == 'function') {
                                this.handler.aftEnterHandler.call(this, this.page.operateData, this.data);
                            }
                            doHandler = true;
                        }
                        trans = doHandler ? false : true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyEsc:
                    var doHandler = false;
                    var handlerResult = true;//当该值为false时后续不执行
                    if (!!this.handler && !!this.handler.befEscHandler) {
                        if (typeof this.handler.befEscHandler == 'string') {
                            handlerResult = eval(this.handler.befEscHandler + '.call(this,this.page.operateData,this.data)');
                        } else if (typeof this.handler.befEscHandler == 'function') {
                            handlerResult = this.handler.befEscHandler.call(this, this.page.operateData, this.data);
                        }
                        doHandler = true;
                    }
                    if (handlerResult == undefined || handlerResult == true) {
                        if (!!this.nav && !!this.nav.escTo) {
                            this.hiBlur();
                            hiSDKSettings.currentPage.getCaE(this.nav.escTo).hiFocus();
                        }
                        if (!!this.handler && !!this.handler.aftEscHandler) {
                            if (typeof this.handler.aftEscHandler == 'string') {
                                eval(this.handler.aftEscHandler + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler.aftEscHandler == 'function') {
                                this.handler.aftEscHandler.call(this, this.page.operateData, this.data);
                            }
                            doHandler = true;
                        }
                        trans = doHandler ? false : true;
                    }
                    break;
                case hiSDKSettings.keyValues.keyLowBattery:
                    var doHandler = false;
                    var handlerResult = true;//当该值为false时后续不执行
                    if (!!this.handler && !!this.handler.befLowBatteryHandler) {
                        if (typeof this.handler.befLowBatteryHandler == 'string') {
                            handlerResult = eval(this.handler.befLowBatteryHandler + '.call(this,this.page.operateData,this.data)');
                        } else if (typeof this.handler.befLowBatteryHandler == 'function') {
                            handlerResult = this.handler.befLowBatteryHandler.call(this, this.page.operateData, this.data);
                        }
                        doHandler = true;
                    }
                    if (handlerResult == undefined || handlerResult == true) {
                        if (!!this.nav && !!this.nav.escTo) {
                            this.hiBlur();
                            hiSDKSettings.currentPage.getCaE(this.nav.escTo).hiFocus();
                        }
                        if (!!this.handler && !!this.handler.aftLowBatteryHandler) {
                            if (typeof this.handler.aftLowBatteryHandler == 'string') {
                                eval(this.handler.aftLowBatteryHandler + '.call(this,this.page.operateData,this.data)');
                            } else if (typeof this.handler.aftLowBatteryHandler == 'function') {
                                this.handler.aftLowBatteryHandler.call(this, this.page.operateData, this.data);
                            }
                            doHandler = true;
                        }
                        trans = doHandler ? false : true;
                    }
                    break;
                default:
                    break;
            }

            if ((this.page.pageMode.toLowerCase() == 'skb' && !!this.page.getCaE('skbInput').inputAttr && (this.page.getCaE('skbInput').inputAttr == 'number' || this.page.getCaE('skbInput').inputAttr == 'numberpassword')) ||
                (this.CaEType == 'input' && !!this.inputAttr && (this.inputAttr == 'number' || this.inputAttr == 'numberpassword'))) {
                if (!_isNumberKey(event))event.preventDefault();
                if (!_isValidNumberInputKey.call((this.page.pageMode.toLowerCase() == 'skb' ? this.page.getCaE('skbInput') : this), event.keyCode)) event.preventDefault();
            }
            //console.log('(' + this.CaEType + ')' + trans)//关键Log
            return trans;
        }

        /*function PCBKeyDownHandler(event) {
         keyDownImp.call(this, event);
         //必须定义返回值，返回为true表示事件传递到上层处理，false表示终止事件传播
         return true;
         }*/


        //获取有效导航目标部件,参数（0~3表示上右下左，第二个参数为源部件指针）
        function getValidNav(dir, oriCaE) {
            var targetNav;
            switch (dir) {
                case 0:
                    targetNav = hiSDKSettings.currentPage.getCaE(oriCaE.nav.upTo)
                    break;
                case 1:
                    targetNav = hiSDKSettings.currentPage.getCaE(oriCaE.nav.rightTo)
                    break;
                case 2:
                    targetNav = hiSDKSettings.currentPage.getCaE(oriCaE.nav.downTo)
                    break;
                case 3:
                    targetNav = hiSDKSettings.currentPage.getCaE(oriCaE.nav.leftTo)
                    break;
                default:
                    break;
            }
            if (!!targetNav) {
                if (targetNav.disable == false) {
                    return targetNav;
                } else {
                    return getValidNav(dir, targetNav);
                }
            } else {
                return null;
            }
        }

        function _isNumberKey(event) {
            var charCode = (event.which) ? event.which : event.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;

            return true;
        }

        function _isValidNumberInputKey(eventCode) {
            var val = $('#' + this.id).val();
            var charCode = parseInt(eventCode, 10);//(eventCode + '').charCodeAt(0);

            var myCurPos = getCursortPosition(this.id);
            var _pre = val.slice(0, myCurPos);
            var _back = val.slice(myCurPos);
//            var _keyNum = (eventCode - hiSDKSettings.keyValues.keyNum0);
            val = _pre + (charCode - 48) + _back;
            //alert("val:"+val);

            if (!!val) {
//                val = (val + '' + (charCode - 48));
                if (((this.max != undefined && this.min != undefined) && (parseInt(val, 10) > this.max )) ||
                    (this.maxlength != undefined && $.trim(val + '').length > this.maxlength))
                    return false;
            }

            return true;
        }

        function _isValidLengthInputKey(content) {
            if (!!content) {
                if ((this.maxlength != undefined && content.length > this.maxlength))
                    return false;
            }

            return true;
        }

        function _backSpace(id) {
            var value = $('#' + id).val();
            var newValue = '';
            var obj = document.getElementById(id);
            var position = getCursortPosition(obj.id);
            debugPrint('position:' + (position) + " id:" + obj.id);
            if (value.length > 0 && position > 0) {
                newValue = value.substring(0, position - 1);
                newValue += value.substring(position, value.length);
                $('#' + id).val(newValue);
                _setCaretPosition(id, position - 1);
                debugPrint('position:' + (position - 1));
            }

        }

        function _addBlank(id) {
            var value = $('#' + id).val();
            var newValue = '';
            var obj = document.getElementById(id),
                position = getCursortPosition(obj.id);
            debugPrint('position:' + (position) + " id:" + obj.id + " value" + value);
            if (value.length > 0 && position > 0) {
                debugPrint('value.length:' + value.length);
                newValue = value.substring(0, position);
                newValue += " ";
                newValue += value.substring(position, value.length);
                $('#' + id).val(newValue);
                _setCaretPosition(id, position + 1);
                debugPrint('position:' + (position + 1));
            }
            obj.blur();
            obj.focus();
        }

        //获取光标位置函数
        function getCursortPosition(ctrlname) {
            var ctrl = document.getElementById(ctrlname),
                CaretPos = 0; // IE Support
            if (!!document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }
            // Firefox support
            else if (!!ctrl.selectionStart || ctrl.selectionStart == '0')
                CaretPos = ctrl.selectionStart;
            return (CaretPos);
        }

        function _keyLeft(name) {
            var obj = document.getElementById(name);
            var position = getCursortPosition(obj.id);
            position = position != undefined ? position : obj.length;
            position = position < 1 ? position : position - 1;
            _setCaretPosition(obj.id, position);
        }

        function _keyRight(name) {
            var obj = document.getElementById(name);
            var position = getCursortPosition(obj.id);
            position = position != undefined ? position : obj.length;
            position = position >= obj.length ? position : position + 1;
            _setCaretPosition(obj.id, position);
        }

        //HTML特殊符号过滤,isFilter，设置是否过滤
        function _htmlFilter(str, isFilter) {
            str = '' + str;
            if (isFilter != undefined && isFilter) {
                return str.replace(/&/g, "&amp;").replace(/\'/g, "&apos;").replace(/\"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\n/g, "<br>");
            } else {
                return str.replace(/\n/g, "<br>");
            }
        }

        //设置光标位置函数
        //参数ctrl为input或者textarea对象
        function _setCaretPosition(ctrlname, pos) {
            var ctrl = document.getElementById(ctrlname);
            if (ctrl.setSelectionRange) {
                try {
                    ctrl.setSelectionRange(pos, pos);
                }
                catch (ex) {
                }

                ctrl.focus();
            }
            else if (ctrl.createTextRange) {
                var range = ctrl.createTextRange();
                range.collapse(false);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }

        function generateSelectedTree() {
            var temp = [], s_temp = [];
            temp.push(this);
            s_temp.push(this.SelectedIndex);

            getParent(this);
            function getParent(a) {
                if (!!a.parent) {
                    temp.push(a.parent);
                    s_temp.push(a.parent.SelectedIndex);
                    //console.log(a.parent.id+a.parent.SelectedIndex)
                    getParent(a.parent);
                }
            }

            this.page.oriCSTree = [];
            this.page.oriCSITree = [];
            for (var i = 0; i < this.page.currentSelectedTree.length; i++) {
                this.page.oriCSTree.push(this.page.currentSelectedTree[i]);
                this.page.oriCSITree.push(this.page.currentSelectedIndexTree[i]);
            }
            this.page.currentSelectedTree = [];
            this.page.currentSelectedIndexTree = [];

            if (temp.length > 0) {
                for (var i = temp.length - 1; i >= 0; i--) {
                    if (temp[i].PCB != 'page') {
                        this.page.currentSelectedTree.push(temp[i]);
                        this.page.currentSelectedIndexTree.push(temp[i].SelectedIndex);
                    }
                }
            }
            //console.log(this.page.currentSelectedTree.length);
            /*console.log('this.page.oriCSTree'+this.page.oriCSTree);
             console.log('this.page.oriCSITree'+this.page.oriCSITree);
             console.log('this.page.currentSelectedTree'+this.page.currentSelectedTree);
             console.log('this.page.currentSelectedIndexTree'+this.page.currentSelectedIndexTree);*/
            moduleChangeButton(this.page.oriCSTree, this.page.oriCSITree, this.page.currentSelectedTree, this.page.currentSelectedIndexTree);
        }

        function eraseSelectedTree() {//2014-10-27未测试
            var temp = [], s_temp = [];
            temp.push(this);
            s_temp.push(this.SelectedIndex);

            getParent(this);
            function getParent(a) {
                if (!!a.parent) {
                    temp.push(a.parent);
                    s_temp.push(a.parent.SelectedIndex);
                    //console.log(a.parent.id+a.parent.SelectedIndex)
                    getParent(a.parent);
                }
            }

            this.page.oriCSTree = [];
            this.page.oriCSITree = [];
            for (var i = 0; i < this.page.currentSelectedTree.length; i++) {
                this.page.oriCSTree.push(this.page.currentSelectedTree[i]);
                this.page.oriCSITree.push(this.page.currentSelectedIndexTree[i]);
            }
            this.page.currentSelectedTree = [];
            this.page.currentSelectedIndexTree = [];
            moduleChangeButton(this.page.oriCSTree, this.page.oriCSITree, this.page.currentSelectedTree, this.page.currentSelectedIndexTree);
        }

        //按钮切换
        function moduleChangeButton(ori, oriIdx, tar, tarIdx) {
            var STATUS_NORMAL = 1, STATUS_SELECTED = 2, STATUS_FOCUS = 3;
            var treeNodeArray = [];
            var treeNodeArray_id = [];
            var treeNodeArray_obj = [];
            //加入按钮树
            for (var i = 0; i < ori.length; i++) {
                var treeNode = {};
                treeNode.id = ori[i].id;
                treeNode.selOriIdx = oriIdx[i];
                treeNode.oriCss = (i == ori.length - 1) ? STATUS_FOCUS : STATUS_SELECTED;
                treeNode.tarCss = STATUS_NORMAL;
                treeNodeArray.unshift(treeNode);
                treeNodeArray_id.unshift(treeNode.id);
                treeNodeArray_obj.unshift(ori[i]);
            }

            for (var i = 0; i < tar.length; i++) {
                var inPosition = $.inArray(tar[i].id, treeNodeArray_id);
                if (inPosition == -1) {
                    var treeNode = {};
                    treeNode.id = tar[i].id;
                    treeNode.selTarIdx = tarIdx[i];
                    treeNode.oriCss = STATUS_NORMAL;
                    treeNode.tarCss = (i == tar.length - 1) ? STATUS_FOCUS : STATUS_SELECTED;
                    treeNodeArray.unshift(treeNode);
                    treeNodeArray_obj.unshift(tar[i]);
                } else {
                    treeNodeArray[inPosition].selTarIdx = tarIdx[i];
                    treeNodeArray[inPosition].tarCss = (i == tar.length - 1) ? STATUS_FOCUS : STATUS_SELECTED;
                }
            }

            $.each(treeNodeArray, function (k, v) {
                //console.log(v.id + '  原css' + v.oriCss + '  现css' + v.tarCss);
                var o = treeNodeArray_obj[k];
                if (v.tarCss != v.oriCss && (o.CaEType != 'Ul' && o.CaEType != 'NavigationBar' && o.CaEType != 'GridUl' && o.CaEType != 'GridList')) {
                    switch (v.tarCss) {
                        case STATUS_NORMAL:
                            //console.log(o.CaEType)
                            if (o.disable == true) {
                                if (!!o.classes && !!o.classes.disable) {
                                    $('#' + v.id).attr('class', o.classes.disable);
                                } else {
                                    $('#' + v.id).attr('class', "disable");
                                }
                            } else {
                                if (!!o.classes && !!o.classes.normal) {
                                    $('#' + v.id).attr('class', o.classes.normal);
                                } else {
                                    $('#' + v.id).attr('class', "normal");
                                }
                            }
                            break;
                        case STATUS_SELECTED:
                            if (!!o.classes && !!o.classes.selected) {
                                $('#' + v.id).attr('class', o.classes.selected);
                            } else {
                                $('#' + v.id).attr('class', "selected");
                            }
                            break;
                        case STATUS_FOCUS:
                            if (!!o.classes && !!o.classes.focus) {
                                $('#' + v.id).attr('class', o.classes.focus);
                            } else {
                                $('#' + v.id).attr('class', "focus");
                            }
                            //判断如果当前是输入状态的input，则获得真正的焦点   2014-05-29
                            if (o.CaEType == 'input' && !!o.isWrite) {
                                $('#' + v.id).focus();
                                _setCaretPosition(v.id, $('#' + v.id).val().length);
                            }
                            break;
                        default:
                            break;
                    }

                    if (o.CaEType == 'FlipSwitch')$('#' + v.id).addClass(!!o.SwitchType ? "FlipSwitchOn" : "FlipSwitchOff");
                }
                if (v.selTarIdx != v.selOriIdx && (o.CaEType == 'Ul' || o.CaEType == 'NavigationBar' ||
                    o.CaEType == 'GridUl' || o.CaEType == 'GridList')) {
                    var prefix = o.CaEType == 'GridList' ? ">ul" : "";
                    //console.log(v.id + '  原选择' + v.selOriIdx + '  现选择' + v.selTarIdx);
                    if (!!o.classes && (!!o.classes.selected || !!o.classes.focus)) {
                        $('#' + o.id + prefix + '>li.' + o.classes.selected).attr('class', o.classes.normal);
                        $('#' + o.id + prefix + '>li.' + o.classes.focus).attr('class', o.classes.normal);
                    } else {
                        $('#' + o.id + prefix + '>li.selected').attr('class', 'normal');
                        $('#' + o.id + prefix + '>li.focus').attr('class', 'normal');
                    }
                    if (o.SelectedIndex != -1) {
                        if (v.tarCss == STATUS_SELECTED) {
                            if (!!o.classes && !!o.classes.selected) {
                                $('#' + o.id + prefix + '>li').eq(o.SelectedIndex - o.BeginIdx).attr('class', o.classes.selected);
                            } else {
                                $('#' + o.id + prefix + '>li').eq(o.SelectedIndex - o.BeginIdx).attr('class', 'selected');
                            }
                        } else if (v.tarCss == STATUS_FOCUS) {
                            if (!!o.classes && !!o.classes.focus) {
                                if(o.DoubleClass && o.SelectedIndex == o.DataSelectedIndex){
                                    $('#' + o.id + prefix + '>li').eq(o.SelectedIndex - o.BeginIdx).attr('class', o.classes.focus + " " + o.classes.dataSelected);
                                }
                                else{
                                    $('#' + o.id + prefix + '>li').eq(o.SelectedIndex - o.BeginIdx).attr('class', o.classes.focus);
                                }
                            } else {
                                $('#' + o.id + prefix + '>li').eq(o.SelectedIndex - o.BeginIdx).attr('class', 'focus');
                            }
                        }
                    }

                }
                else if (v.selTarIdx != v.selOriIdx && (o.CaEType == 'Tabs' )) {
                    if (o.CaELib.length > o.SelectedIndex) {
                        var CaELib = o.CaELib, tabpage;
                        $.each(CaELib, function (index, v) {
                            tabpage = CaELib[index];
                            //-GHL_DEL-//console.log(v.id + '  原选择' + v.selOriIdx + '  现选择' + v.selTarIdx);
                            if (!!tabpage.classes && (!!tabpage.classes.normal)) {
                                $('#' + tabpage.id).attr('class', tabpage.classes.normal);
                            } else {
                                $('#' + tabpage.id).attr('class', 'normal');
                            }
                        })
                        tabpage = CaELib[o.SelectedIndex];
                        if (!!tabpage.classes && (!!tabpage.classes.selected)) {
                            $('#' + tabpage.id).attr('class', tabpage.classes.selected);
                        } else {
                            $('#' + tabpage.id).attr('class', 'selected');
                        }
                    }
                }
//                console.log(o.id + ",数据选中" + o.DataSelectedIndex + ',导航选中' + o.SelectedIndex);
                if (o.DataSelectedIndex != undefined && ((o.DataSelectedIndex != o.SelectedIndex && v.tarCss == STATUS_FOCUS) || (v.tarCss != STATUS_FOCUS)) && o.DataSelectedIndex - o.BeginIdx >= 0) {
                    //todo 未加入disable处理
                    if (!!o.classes && !!o.classes.dataSelected) {
                        $('#' + o.id + prefix + '>li').eq(o.DataSelectedIndex - o.BeginIdx).attr('class', o.classes.dataSelected);
                    } else {
                        $('#' + o.id + prefix + '>li').eq(o.DataSelectedIndex - o.BeginIdx).attr('class', 'dataSelected');
                    }
                }

            })
            traceSTree();
        }

        //SDK按钮定义
        function HiButton(data, opts, page, parent) {
            this.opts = opts;
            this.page = page;
            this.parent = parent;
            this.children = [];//2014-5-24

            var _this = this;//在函数中引用  放在
            this.PCB = 'button';

            if (!!opts.id)this.id = opts.id;
            if (!!opts.description)this.description = opts.description;
            if (!!opts.CaEType)this.CaEType = opts.CaEType;
            if (!!opts.templateSign)this.templateSign = opts.templateSign;//ver1.2用于表示该部件原先属于哪个模版，取值前缀
            if (opts.templateIndx != undefined)this.templateIndx = opts.templateIndx;//ver1.2用于表示该部件原先属于哪个模版，取值前缀
            if (opts.relPosition != undefined)this.relPosition = opts.relPosition;//ver1.2用于表示该部件焦点位置
            if(opts.CaEType == "input") {
                this.inputAttr = opts.inputAttr;
                if(!!opts.inputMethod) {
                    this.inputMethod = opts.inputMethod;
                }
                if(opts.supportCursor != undefined){
                    this.supportCursor = opts.supportCursor;
                }else{
                    this.supportCursor = true;
                }
            }
            if(opts.noKeyReverse != undefined){
                this.noKeyReverse = opts.noKeyReverse;
            }else{
                this.noKeyReverse = false;
            }
            if(!!opts.maxWidth) {
                this.maxWidth = opts.maxWidth;
            }
            if (!!opts.classes)this.classes = opts.classes;
            if (!!opts.nav)this.nav = opts.nav;
            if (!!opts.handler)this.handler = opts.handler;
            if (opts.supportCursor != undefined) {//ver1.2
                this.supportCursor = opts.supportCursor;
            } else {
                this.supportCursor = true;
            }
            if (!!opts.onFocusFun)this.onFocusFun = opts.onFocusFun;//2014-9-19
            if (!!opts.onBlurFun)this.onBlurFun = opts.onBlurFun;//2014-9-19
            if (opts.disable != undefined && opts.disable == true) {
                this.disable = true;
            } else {
                this.disable = false;
            }
            if (opts.enableHtml != undefined && opts.enableHtml == true) {
                this.enableHtml = true;
            } else {
                this.enableHtml = false;
            }

            if (opts.strFilter != undefined && opts.strFilter == true) {
                this.strFilter = true;
            } else {
                this.strFilter = false;
            }

            if (opts.noLangData != undefined && opts.noLangData == true) {
                this.noLangData = true;
            }
            else {
                this.noLangData = false;
            }

            this.$$ = $('#' + this.id);

            //关于data的处理，构建HiButton传入data有两种方式，一种是参数中给定，另一种是通过标签的data携带；
            // 其中后一种方式在列表等自动生成html过程中赋值。第一种方式优先级高
            if (!data && !!$('#' + this.id).data('linkData')) {
                data = $('#' + this.id).data('linkData');
            }

            if ($('#' + this.id).data('linkIndex') != undefined) {
                this.pIndex = $('#' + this.id).data('linkIndex');
                this.pName = $('#' + this.id).data('linkName');
            }

            if (!!data || ( data != undefined && data.Data != undefined)) {
                initData(data, opts, this.page);
            }
            this.data = data;
            if (!!this.data && !!this.data.disable) {
                this.disable = true;
                this.disabled();
            }

            if (parent.dataPath != undefined) {
                if (parent.CaEType == 'Ul' || parent.CaEType == 'NavigationBar'
                    || parent.CaEType == 'GridUl' || parent.CaEType == 'GridList') {
                    this.dataPath = parent.dataPath + '.Data[' + this.pIndex + '].' + (this.pName || this.id);
                } else {
                    if (parent.PCB == 'page') {
                        this.dataPath = '.' + (this.pName || this.id);
                    } else {
                        this.dataPath = parent.dataPath + '.Data.' + (this.pName || this.id);
                    }
                }
            }

            if (!!this.id && !!this.data) {
                $('#' + this.id).data('linkData', this.data);
            }

            if (typeof HiButton.initialize == 'undefined') {
                HiButton.prototype.run = function () {
                    //alert('a');
                }
                HiButton.prototype.PCBKeyDownHandler = function (event) {
                    return keyDownImp.call(this, event);
                    //必须定义返回值，返回为true表示事件传递到上层处理，false表示终止事件传播
                }
                HiButton.prototype.writeData = function () {//该函数用于对HiButton的数据进行重写2014-5-24

                }
                HiButton.prototype.disabled = function () {//2014-5-24
                    this.disable = true;
                    if (!!this.classes && !!this.classes.disable) {
                        $('#' + this.id).attr('class', this.classes.disable);
                    } else {
                        $('#' + this.id).attr('class', "disable");
                    }
                }
                HiButton.prototype.enabled = function () {
                    this.disable = false;

                    if (!!this.classes && !!this.classes.normal) {
                        if (this.page.id == hiSDKSettings.currentPage.id) {
                            if (this.page.currentSelectedTree[this.page.currentSelectedTree.length - 1].id === this.id) {
                                $('#' + this.id).attr('class', this.classes.focus);
                            } else {
                                $('#' + this.id).attr('class', this.classes.normal);
                            }
                        } else {
                            $('#' + this.id).attr('class', this.classes.normal);
                        }
                    } else {
                        if ($('#' + this.id).attr('class') == 'disable' || $('#' + this.id).attr('class') == null) {
                            $('#' + this.id).attr('class', "normal");
                        }
                    }
                    if (_getCurrentFocus() == this.id) {
                        if (!!this.classes && !!this.classes.focus) {
                            $('#' + this.id).attr('class', this.classes.focus);
                        } else {
                            $('#' + this.id).attr('class', "focus");
                        }
                    }
                }
                HiButton.prototype.destroy = function () {
                    //Todo
                }
                HiButton.prototype.refresh = function () {
                    //Todo
                }
                HiButton.prototype.hiFocus = function () {
                    if (!!this.onFocusFun) {
                        if (typeof this.onFocusFun == 'function') {
                            this.onFocusFun.call(this);
                        }
                        else if (typeof this.onFocusFun == 'string') {
                            eval(this.onFocusFun + '.call(this)');
                        }
                    }
                    this.setCurrentSelectTree();
                }
                HiButton.prototype.hiBlur = function () {
                    //Todo
                    if (!!this.onBlurFun) {
                        if (typeof this.onBlurFun == 'function') {
                            this.onBlurFun.call(this);
                        }
                        else if (typeof this.onBlurFun == 'string') {
                            eval(this.onBlurFun + '.call(this)');
                        }
                    }

                    if (this.CaEType == 'input' && !!this.isWrite) document.getElementById(this.id).blur();
                    this.clearSelectedTree();//++blur
                }

                //hiSelected与hiUnSelected与hiFocus相同，为SDK导航控制相关的事件，其内部自动放置了对按钮树的操作
                HiButton.prototype.selected = function () {
                    this.setCurrentSelectTree();
                }
                HiButton.prototype.unselected = function () {
                }

                HiButton.prototype.setCurrentSelectTree = generateSelectedTree;
                HiButton.prototype.clearSelectedTree = eraseSelectedTree;//++blur

                //不生产新对象时更换数据，供作上级节点自动调用，无参数
                HiButton.prototype._changeData = function (a) {
                    //更改Data
                    //-GHL_DEL-//console.log(this.data);
                }

                //用户调用，需保证手动更改数据层，带参数，调用该函数自动更新PageData层数据以及DOM显示
                HiButton.prototype.changeDataOnly = function (d) {
                    //更改Data
                    //console.log(this.id + '(' + this.CaEType + ')');
                    //console.log(this.dataPath);
                    var tempData = eval('this.page.data' + this.dataPath + '');

                    if (!!tempData) {
                        //设置数据changeDataOnly中的disable
                        //console.log(this.id+" "+this.disable+"--"+tempData.disable)
                        if (tempData.disable != undefined && tempData.disable != this.disable) {
                            this.disable = tempData.disable;
                            if (countDisable(this)) {
                                this.disabled();
                            } else {
                                this.enabled();
                            }
                        }
                        //console.log(tempData.Data);
                        var tempLangData = null;
                        switch (this.CaEType) {
                            case 'span':
                                if(this.strFilter){
                                    $('#' + this.id).html(tempData.Data);
                                }else{
                                    if(!this.noLangData){
                                        tempLangData = eval('langPackages["' + _getQuotString(_htmlFilter(tempData.Data, false)) + '"]');
                                    }
                                    if (this.enableHtml) {
                                        //$('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), false));
                                        $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : tempData.Data), false));//OneLangPackage
                                    } else {
                                        //$('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), true));
                                        $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : tempData.Data), true));//OneLangPackage
                                    }
                                }
                                if(!!this.maxWidth){
                                    computeHtmlStr.call(this);

                                }
//                                if (this.strFilter && !this.noLangData) {
//                                    tempLangData = eval('this.page.langData["' + _getQuotString(_htmlFilter(tempData.Data, false)).replace(/\\/g, "\\\\") + '"]');
//                                } else if (!this.noLangData) {
//                                    tempLangData = eval('this.page.langData["' + _getQuotString(_htmlFilter(tempData.Data, false)) + '"]');
//                                }
//                                if (this.enableHtml) {
//                                    $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), false));
//                                } else {
//                                    $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), true));
//                                }
                                break;
                            case 'div':
                                if(this.strFilter){
                                    $('#' + this.id).html(tempData.Data);
                                }else{
                                    if(!this.noLangData){
                                        tempLangData = eval('langPackages["' + _getQuotString(_htmlFilter(tempData.Data, false)) + '"]');
                                    }
                                    if (this.enableHtml) {
                                        //$('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), false));
                                        $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : tempData.Data), false));//OneLangPackage
                                    } else {
                                        //$('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), true));
                                        $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : tempData.Data), true));//OneLangPackage
                                    }
                                }
                                if(!!this.maxWidth){
                                    computeHtmlStr.call(this);
                                }
//                                if (this.strFilter && !this.noLangData) {
//                                    tempLangData = eval('this.page.langData["' + _getQuotString(_htmlFilter(tempData.Data, false)).replace(/\\/g, "\\\\") + '"]');
//                                } else if (!this.noLangData) {
//                                    tempLangData = eval('this.page.langData["' + _getQuotString(_htmlFilter(tempData.Data, false)) + '"]');
//                                }
//                                if (this.enableHtml) {
//                                    $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), false));
//                                } else {
//                                    $('#' + this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : tempData.Data), true));
//                                }
                                break;
                            case 'img':
                                if ($('#' + this.id).attr('src') != tempData.Data) {
                                    $('#' + this.id).attr('src', tempData.Data);
                                }
                                break;
                            case 'input':
                                if (!!tempData.inputAttr)this.inputAttr = !!tempData.inputAttr;
                                if (!!tempData.inputMethod)this.inputMethod = !!tempData.inputMethod;
                                if (!!tempData.isWrite)this.isWrite = tempData.isWrite;
                                var type = 'text';
                                switch (this.inputAttr) {
                                    case "number":
                                        if (tempData.max != undefined)this.max = tempData.max;
                                        if (tempData.min != undefined)this.min = tempData.min;
                                        break;
                                    case "numberpassword":
                                        if (tempData.max != undefined)this.max = tempData.max;
                                        if (tempData.min != undefined)this.min = tempData.min;
                                        type = 'password';
                                        break;
                                    default:
                                        //type = this.inputAttr;
                                        break;
                                }
                                if (tempData.maxlength != undefined) {
                                    this.maxlength = tempData.maxlength;
                                    $('#' + this.id).attr('maxlength', tempData.maxlength);
                                }
                                $('#' + this.id).val(tempData.Data);
                            default:
                                break;
                        }
                    }
                }
                HiButton.prototype.hiInput = function (a, b, c, d, e) {
                    //a为type
                    var type = 'text';
                    switch (a) {
                        case "number":
                            break;
                        case "numberpassword":
                            type = 'password';
                            break;
                        default:
                            type = !!a ? a : type;
                            break;
                    }

                    if (!!this.id) {
                        $('#' + this.id).attr('type', type == 'number' ? 'text' : type);

                        this.inputAttr = a;
                        if (e != undefined) {
                            this.inputMethod = e;
                        }
                        if (b != undefined) {
                            this.max = b;
                        }
                        else {
                            this.max = 18014398509481984;
                        }

                        if (c != undefined) {
                            this.min = c;
                        }
                        else {
                            this.min = -18014398509481984;
                        }
                        if (d != undefined) {
                            this.maxlength = d;
                            $('#' + this.id).attr('maxlength', d);
                        }
                        else {
                            d = 2000;
                            this.maxlength = d;
                            $('#' + this.id).attr('maxlength', d);
                        }
                    }
                }
            }
            HiButton.initialize = true;

            function computeHtmlStr(){
                var fontSize = Math.floor(parseFloat($('#'+this.id).css("font-size")));
                $("#txtComputeWidth").css("font-size",fontSize+"px");
                $("#txtComputeWidth").html($('#' + this.id).html());
                var width = Math.floor(parseFloat($("#txtComputeWidth").css("width")));
                debugPrint(this.id + "," + this.maxWidth + "," + fontSize + ","+ width, DebugLevel.ALWAYS);
                var str = $('#' + this.id).html();
                this.oriText = str;
                if(this.maxWidth < width){
                    var s = "";
                    var htmlStr = "";
                    for(var i = 0; i < str.length; i++){
                        $("#txtComputeWidth").html(s + str.charAt(i) + "...");
                        width = Math.floor(parseFloat($("#txtComputeWidth").css("width")));
                        if(width > this.maxWidth){
                            break;
                        }
                        s = s + str.charAt(i);
                        htmlStr = s + "...";
                    }
                    $('#' + this.id).html(htmlStr);
                }
            }
            function initData(data, opts, page) {
                //对标签操作时，相关属性限定在标签内
                if (_this.disable == true && countDisable(_this) == true) {
                    if (!!_this.classes && !!_this.classes.disable) {
                        $('#' + _this.id).attr('class', _this.classes.disable);
                    } else {
                        $('#' + _this.id).attr('class', "disable");
                    }
                } else {
                    if ($('#' + _this.id).attr('class') == null) {
                        if (!!_this.classes && !!_this.classes.normal) {
                            $('#' + _this.id).attr('class', _this.classes.normal);
                        } else {
                            $('#' + _this.id).attr('class', "normal");
                        }
                    }
                }
                var tempLangData = null;
                switch (_this.CaEType) {
                    case 'span':
                        if(_this.strFilter){
                            $('#' + _this.id).html(data.Data);
                        }else{
                            if(!_this.noLangData){
                                //tempLangData = eval('page.langData["' + _getQuotString(_htmlFilter(data.Data, false)) + '"]');
                                tempLangData = eval('langPackages["' + _getQuotString(_htmlFilter(data.Data, false)) + '"]');
                            }
                            if (_this.enableHtml) {
                                //$('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), false));
                                $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : data.Data), false));//OneLangPackage
                            } else {
                                //$('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), true));
                                $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : data.Data), true));//OneLangPackage
                            }
                        }
                        if(!!_this.maxWidth){
                            computeHtmlStr.call(_this);
                        }
//                        if (_this.strFilter && !_this.noLangData) {
//                            tempLangData = eval('page.langData["' + _getQuotString(_htmlFilter(data.Data, false)).replace(/\\/g, "\\\\") + '"]');
//                        } else if (!_this.noLangData) {
//                            tempLangData = eval('page.langData["' + _getQuotString(_htmlFilter(data.Data, false)) + '"]');
//                        }
//                        if (_this.enableHtml) {
//                            $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), false));
//                        } else {
//                            $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), true));
//                        }

                        break;
                    case 'div':
                        if(_this.strFilter){
                            $('#' + _this.id).html(data.Data);
                        }else{
                            if(!_this.noLangData){
                                tempLangData = eval('page.langData["' + _getQuotString(_htmlFilter(data.Data, false)) + '"]');
                            }
                            if (_this.enableHtml) {
                                //$('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), false));
                                $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : data.Data), false));//OneLangPackage
                            } else {
                                //$('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), true));
                                $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[0] : data.Data), true));//OneLangPackage
                            }
                        }
                        if(!!_this.maxWidth){
                            computeHtmlStr.call(_this);
                        }
//                        if (_this.strFilter && !_this.noLangData) {
//                            tempLangData = eval('page.langData["' + _getQuotString(_htmlFilter(data.Data, false)).replace(/\\/g, "\\\\") + '"]');
//                        } else if (!_this.noLangData) {
//                            tempLangData = eval('page.langData["' + _getQuotString(_htmlFilter(data.Data, false)) + '"]');
//                        }
//                        if (_this.enableHtml) {
//                            $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), false));
//                        } else {
//                            $('#' + _this.id).html(_htmlFilter(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : data.Data), true));
//                        }

                        break;
                    case 'img':
                        if ($('#' + _this.id).attr('src') != data.Data) {
                            $('#' + _this.id).attr('src', data.Data);
                        }
                        break;
                    case 'input':
                        _this.inputMethod = !!opts.inputMethod ? opts.inputMethod : 'text';
                        _this.inputAttr = !!opts.inputAttr ? opts.inputAttr : 'text'
                        _this.isWrite = !!opts.isWrite ? opts.isWrite : true;
                        var type = 'text';
                        switch (_this.inputAttr) {
                            case "number":
                                if (opts.max != undefined)_this.max = opts.max;
                                if (opts.min != undefined)_this.min = opts.min;
                                break;
                            case "numberpassword":
                                if (opts.max != undefined)_this.max = opts.max;
                                if (opts.min != undefined)_this.min = opts.min;
                                type = 'password';
                                break;
                            default:
                                type = _this.inputAttr;
                                break;
                        }
                        if (opts.maxlength != undefined) {
                            _this.maxlength = opts.maxlength;
                            $('#' + _this.id).attr('maxlength', opts.maxlength)
                        }
                        $('#' + _this.id).val(data.Data).attr('type', type);
                    default:
                        break;
                }
            }
        }

        //SDKComponent定义
        function HiComponent(data, opts, page, parent) {
            this.opts = opts;
            this.page = page;
            this.parent = page;
            this.children = [];//2014-5-24
            this.parent = parent;//2014-5-31

            var _this = this;//在函数中引用
            this.PCB = 'component';

            if (!!opts.id)this.id = opts.id;
            if (!!opts.description)this.description = opts.description;
            if (!!opts.CaEType)this.CaEType = opts.CaEType;
            if (!!opts.templateSign)this.templateSign = opts.templateSign;//ver1.2用于表示该部件原先属于哪个模版，取值前缀
            if (opts.templateIndx != undefined)this.templateIndx = opts.templateIndx;//ver1.2用于表示该部件原先属于哪个模版，取值前缀
            if (opts.relPosition != undefined)this.relPosition = opts.relPosition;//ver1.2用于表示该部件焦点位置
            if (!!opts.classes)this.classes = opts.classes;
            if (!!opts.nav)this.nav = opts.nav;
            if (!!opts.handler)this.handler = opts.handler;
            if (!!opts.onFocusFun)this.onFocusFun = opts.onFocusFun;//2014-9-19
            if (!!opts.onBlurFun)this.onBlurFun = opts.onBlurFun;//2014-9-19
            if (!!opts.componentKeyMapFun)this.componentKeyMapFun = opts.componentKeyMapFun;//2015-4-15
            if (opts.disable != undefined && opts.disable == true) {
                this.disable = true;
            } else {
                this.disable = false;
            }
            if (opts.enableHtml != undefined && opts.enableHtml == true) {
                this.enableHtml = true;
            } else {
                this.enableHtml = false;
            }
            if (opts.strFilter != undefined && opts.strFilter == true) {
                this.strFilter = true;
            } else {
                this.strFilter = false;
            }

            if (opts.noLangData != undefined && opts.noLangData == true) {
                this.noLangData = true;
            }
            else {
                this.noLangData = false;
            }
            if (!!opts.CaE)this.CaE = opts.CaE;
            if (!!opts.oriCaE)this.oriCaE = opts.oriCaE;

            if (!!opts.firstFocusId)this.firstFocusId = opts.firstFocusId;

            this.$$ = $('#' + this.id);

            if (!data && !!$('#' + this.id).data('linkData')) {
                data = $('#' + this.id).data('linkData');
            }

            if ($('#' + this.id).data('linkIndex') != undefined) {
                this.pIndex = $('#' + this.id).data('linkIndex');
                this.pName = $('#' + this.id).data('linkName');
            }

            this.data = data;
            if (!!this.id && !!this.data) {
                $('#' + this.id).data('linkData', this.data);
            }

            if (!!this.data && !!this.data.disable) {
                this.disable = true;
            }

            if ((this.CaEType == 'Ul' || this.CaEType == 'NavigationBar' ||
                this.CaEType == 'GridUl' || this.CaEType == "GridList") && !!this.data && !!this.data.disableItem) {
                this.disableItem = this.data.disableItem;
            } else {
                this.disableItem = [];
            }

            if (parent.dataPath != undefined) {
                if (parent.CaEType == 'Ul' || parent.CaEType == 'NavigationBar'
                    || parent.CaEType == 'GridUl' || parent.CaEType == 'GridList') {
                    this.dataPath = parent.dataPath + '.Data[' + this.pIndex + '].' + (this.pName || this.id);
                } else {
                    if (parent.PCB == 'page') {
                        this.dataPath = '.' + (this.pName || this.id);
                    } else {
                        this.dataPath = parent.dataPath + '.Data.' + (this.pName || this.id);
                    }
                }
            }

            //加载Normal样式，考虑去掉
            if (this.CaEType != 'Ul' && this.CaEType != 'NavigationBar'
                && this.CaEType != 'GridUl' && this.CaEType != 'GridList') {
                if (!!this.classes && !!this.classes.normal) {
                    $('#' + this.id).attr('class', this.classes.normal);
                } else {
                    $('#' + this.id).attr('class', "normal");
                }
            }

            if (typeof HiComponent.initialize == 'undefined') {
                HiComponent.prototype.PCBKeyDownHandler = function (event) {
                    return keyDownImp.call(this, event);
                    //console.log('部件事件处理程序');
                    //return true;
                }

                HiComponent.prototype.disabled = function () {//2014-5-24
                }
                HiComponent.prototype.changeDataOnly = function () {
                    //由于更改的一般为末端节点的数据，该处处理为空，switchDiv等PageData中的数据与网页数据不同，需特殊处理

                }
                HiComponent.prototype.enabled = function () {
                    //Todo
                }
                HiComponent.prototype.destroy = function () {
                    //Todo
                }
                HiComponent.prototype.refresh = function () {
                    //Todo
                }
                HiComponent.prototype.hiFocus = function () {
                    if (!!this.onFocusFun) {
                        if (typeof this.onFocusFun == 'function') {
                            this.onFocusFun.call(this);
                        }
                        else if (typeof this.onFocusFun == 'string') {
                            eval(this.onFocusFun + '.call(this)');
                        }
                    }
                    this.setCurrentSelectTree();
                }
                HiComponent.prototype.hiBlur = function () {

                    if (!!this.onBlurFun) {
                        if (typeof this.onBlurFun == 'function') {
                            this.onBlurFun.call(this);
                        }
                        else if (typeof this.onBlurFun == 'string') {
                            eval(this.onBlurFun + '.call(this)');
                        }
                    }
                    this.clearSelectedTree();//++blur
                }

                HiComponent.prototype.selected = function () {
                    //Todo
                }
                HiComponent.prototype.unselected = function () {
                    //Todo
                }
                HiComponent.prototype.test = function () {
                    //console.log('test:' + this.CaEType);
                }
                HiComponent.prototype.setCurrentSelectTree = generateSelectedTree;
                HiComponent.prototype.clearSelectedTree = eraseSelectedTree;//++blur

            }
            HiComponent.initialize = true;
        }

        HiComponent.prototype = {

        }

        //以下为SDK部件
        //ProgressBar部件
        function ProgressBar(data, opts, page, parent) {

            HiComponent.call(this, data, opts, page, parent);

            defaults = {
                PBTitleid: "",//进度条的标题
                PBProcessId: "",//进度条的进程id
                ShowTextId: "",//在进度条旁边用百分数或者分数显示进度与否，默认为空是不显示，有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型，“animation”动画模式 “direction”直接模式
                StepDuration: 20,// settimeout的时间参数，单位ms 表示每增加1%d的时间间隔
                MinValue: 0,  //最小值，不设定的话默认为0；
                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 100,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式，“per”表示百分数，“fra”表示分数，其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
            var configs = $.extend({}, defaults, opts.ProgressBarConfig);

            if (!!this.data.Data && !!configs.PBTitleid && !!this.data.Data[configs.PBTitleid] && !!this.data.Data[configs.PBTitleid].Data) {
                //多语言处理
                var tempLangData = eval('langPackages["' + this.data.Data[configs.PBTitleid].Data + '"]');
                //$('#' + configs.PBTitleid).html(((!!tempLangData) ? tempLangData[hiSDKSettings.currentLanguage] : this.data.Data[configs.PBTitleid].Data));
                $('#' + configs.PBTitleid).html(((!!tempLangData) ? tempLangData[0] : this.data.Data[configs.PBTitleid].Data));//OneLangPackage
            }
            //默认值处理
            configs.DefaultValue = (!!this.data.DefaultValue &&
                (this.data.DefaultValue <= configs.MaxValue && this.data.DefaultValue >= configs.MinValue)) ?
                this.data.DefaultValue : (this.data.DefaultValue >= configs.MaxValue ? configs.MaxValue : configs.MinValue);
            configs.running_value = configs.DefaultValue;

            this.running_value = configs.DefaultValue;
            this.StepDuration = this.data.StepDuration || configs.StepDuration;
            this.MinValue = this.data.MinValue || configs.MinValue;
            this.MaxValue = this.data.MaxValue || configs.MaxValue;
            this.DefaultValue = this.data.DefaultValue || configs.DefaultValue;

            this.CaELib = [];
            this.CaE = opts.CaE;
            var _this = this;
            this.opts.ProgressBarConfig = configs;
            _AnalyzeCaE(_this, this.CaELib, this.page);
            _progressbarRefresh(_this);
        }

        extend(ProgressBar, HiComponent);

        ProgressBar.prototype.getvalue = function () {
            return this.running_value;
        }
        ProgressBar.prototype.setvalue = function (value) {
            var _this = this;
            var configs = _this.opts.ProgressBarConfig;

            if (value == null) {
                return;
            }
            value = value > _this.MaxValue ? _this.MaxValue : (value < _this.MinValue ? _this.MinValue : value);
            configs.value = parseInt(value);
            configs.increment = 1;
            if (configs.PBType == "animation") {
                _progressbarAnimation(_this);
            }
            else {
                _progressbarRefresh(_this);
            }
            //Todo
        }
        ProgressBar.prototype.changeDataOnly = function () {
            var tempData = eval('this.page.data' + this.dataPath + '');
            if (tempData.MinValue != undefined)this.MinValue = tempData.MinValue;
            if (tempData.MaxValue != undefined)this.MaxValue = tempData.MaxValue;
            if (tempData.StepDuration != undefined)this.StepDuration = tempData.StepDuration;

            if (this.opts.ProgressBarConfig.PBType == "direction") {
                var configs = this.opts.ProgressBarConfig;
                var value = this.data.DefaultValue > tempData.MaxValue ? tempData.MaxValue : (this.data.DefaultValue < tempData.MinValue ? tempData.MinValue : this.data.DefaultValue);
                this.running_value = value;
                _progressbarRefresh(this);
            }
        }
        ProgressBar.prototype.stop = function (value) {
            var configs = this.opts.ProgressBarConfig;
            debugPrint('stop:' + configs.timeout);
            if (!!configs.timeout)clearTimeout(configs.timeout);
        }
        function _progressbarRefresh(_this) {
            var configs = _this.opts.ProgressBarConfig;
            if (!!configs.PBProcessId)$('#' + configs.PBProcessId).css("width", getFloatPer(_this) * configs.Width / 100);
            if (!!configs.ShowTextId) $('#' + configs.ShowTextId).html(getText(_this));
            if (!!configs.ShowTextIsMoved && !!configs.ShowTextId) {
                var width = $('#' + configs.ShowTextId).css('width').replace(/[^\d\.]/g, '');

                width = !isNaN(width) ? width : 0;
                $('#' + configs.ShowTextId).css('left', (getFloatPer(_this) * configs.Width / 100 - width / 2));
            }
        }

        function _progressbarAnimation(pb) {

            var _this = pb,
                configs = _this.opts.ProgressBarConfig;
            if (_this.running_value >= _this.MaxValue || _this.running_value < _this.MinValue || _this.running_value == configs.value) {
                if (!!configs.timeout)clearTimeout(configs.timeout);
                if (!!configs.CompleteCallBack) {
                    eval(configs.CompleteCallBack + '.call(_this)');
                }
                return;
            }
//            var pixels = configs.Width / 100;
            if (_this.running_value > configs.value) {

                if (_this.running_value - configs.increment < configs.value) {
                    _this.running_value = configs.value;
                } else {
                    _this.running_value -= configs.increment;
                }
            }
            else if (_this.running_value < configs.value) {
                if (_this.running_value + configs.increment > configs.value) {
                    _this.running_value = configs.value;
                }
                else {
                    _this.running_value += configs.increment;
                }
                configs.running_value = _this.running_value;
            }


            _progressbarRefresh(_this);

            var timeout = setTimeout(_progressbarAnimation, _this.StepDuration, _this);

            configs.timeout = timeout;
        }

        var $st = window.setTimeout;
        // 这里覆盖了setTimeout方法，如果需要原始方法的时候，可以使用$st
        window.setTimeout = function (funRef, delayTime, params) {
            if (typeof funRef === 'function') {
                var args = Array.prototype.slice.call(arguments, 2);
                var f = function () {
                    funRef.apply(null, args);
                }; // 返回无参数方法
                return $st(f, delayTime);//调用无参数方法
            }
            return $st(funRef, delayTime);
        }
        function getText(pb) {
            var configs = pb.opts.ProgressBarConfig;
            if (!configs.ShowTextId || !configs.TextFormat) return "";
            switch (configs.TextFormat) {
                case "per":
                    return getPercentage(pb) + "%";
                    break;
                case "fra":
                    return pb.running_value + '/' + pb.MaxValue;
                    break;
                default :
                    return eval(configs.TextFormat + '.call(pb)');
                    break;
            }
        }

        function getPercentage(pb) {
            var percent = (pb.MaxValue - pb.MinValue) != 0 ?
                Math.round(((pb.running_value - pb.MinValue) * 100) / (pb.MaxValue - pb.MinValue)) : 0;
            percent = percent > 100 ? 100 : (percent < 0 ? 0 : percent);
            return percent;
        }

        function getFloatPer(pb) {
            var percent = (pb.MaxValue - pb.MinValue) != 0 ?
                ((pb.running_value - pb.MinValue) * 100 / (pb.MaxValue - pb.MinValue)) : 0;
            percent = percent > 100 ? 100 : (percent < 0 ? 0 : percent);
            return percent;
        }

        //Tabs部件，分栏控件
        function Tabs(data, opts, page, parent) {
            HiComponent.call(this, data, opts, page, parent);

            defaults = {
                "SelectedIndex": 0,
                "FlipType": "HOR"
            };
            var setting = $.extend({}, defaults, opts.TabsConfig);
            this.SelectedIndex = this.data.SelectedIndex || setting.SelectedIndex;
            this.FlipType = setting.FlipType;
            this.config = opts.TabsConfig;

            this.data = data.Data || {};
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.CaELib = [];
            this.CaE = opts.CaE;
            var _this = this;
            _AnalyzeCaE(_this, this.CaELib, this.page);
        }

        extend(Tabs, HiComponent);

        Tabs.prototype.hiFocus = function () {
            //2014-9-22
            if (!!this.onFocusFun) {
                if (typeof this.onFocusFun == 'function') {
                    this.onFocusFun.call(this);
                }
                else if (typeof this.onFocusFun == 'string') {
                    eval(this.onFocusFun + '.call(this)');
                }
            }
            if (this.SelectedIndex > -1 && this.CaELib.length > this.SelectedIndex) {
                this.CaELib[this.SelectedIndex].hiFocus();
            }
            else {
                this.setCurrentSelectTree();
            }
        };
        Tabs.prototype.changeDataOnly = function () {
            var tempData = eval('this.page.data' + this.dataPath + '');
            if (!!tempData) {
                //关于disable处理
                //设置数据changeDataOnly中的disable
                if (tempData.disable != undefined && tempData.disable != this.disable) {
                    this.disable = !this.disable;
                    if (this.disable) {
                        this.disabled();
                    } else {
                        this.enabled();
                    }
                }
            }
            $.each(this.children, function (key, val) {
                val.changeDataOnly();
            });
        }
        Tabs.prototype.disabled = function () {//2014-5-24
            this.disable = true;
            if (!!this.classes && !!this.classes.disable) {
                $('#' + this.id).attr('class', this.classes.disable);
            } else {
                $('#' + this.id).attr('class', "disable");
            }
        }
        Tabs.prototype.enabled = function () {
            this.disable = false;
            if (!!this.classes && !!this.classes.normal) {
                $('#' + this.id).attr('class', this.classes.normal);
            } else {
                $('#' + this.id).attr('class', "normal");
            }
        }
        //Container部件
        function Container(data, opts, page, parent) {
            HiComponent.call(this, data, opts, page, parent);

            defaults = {
                "IsPrevent": false
            };
            this.config = opts.ContainerConfig;
            this.CaELib = [];
            this.CaE = opts.CaE;
            this.data = data.Data || {};
            var _this = this;
            _AnalyzeCaE(_this, this.CaELib, this.page);
        }

        extend(Container, HiComponent);

        Container.prototype.hiFocus = function () {
            //2014-9-22
            if (!!this.onFocusFun) {
                if (typeof this.onFocusFun == 'function') {
                    this.onFocusFun.call(this);
                }
                else if (typeof this.onFocusFun == 'string') {
                    eval(this.onFocusFun + '.call(this)');
                }
            }
            var _this = this;
            if (!!this.firstFocusId) {
                if (!!countDisable(_getCaEFromCaELibById(this.CaELib, this.firstFocusId))) {
                    $.each(_this.children, function (key, val) {
                        if (!countDisable(val)) {
                            _getCaEFromCaELibById(_this.CaELib, val.id).hiFocus();
                            return false;
                        }
                    });
                }
                else {
                    _getCaEFromCaELibById(this.CaELib, this.firstFocusId).hiFocus();
                }

            }
            else {
                this.setCurrentSelectTree();
            }
        };
        Container.prototype.changeDataOnly = function () {
            var tempData = eval('this.page.data' + this.dataPath + '');
            if (!!tempData) {
                //关于disable处理
                //设置数据changeDataOnly中的disable
                if (tempData.disable != undefined && tempData.disable != this.disable) {
                    this.disable = !this.disable;
                    if (this.disable) {
                        this.disabled();
                    } else {
                        this.enabled();
                    }
                }
            }
            $.each(this.children, function (key, val) {
                val.changeDataOnly();
            });
        }
        Container.prototype.disabled = function () {//2014-5-24
            this.disable = true;
            if (!!this.classes && !!this.classes.disable) {
                $('#' + this.id).attr('class', this.classes.disable);
            } else {
                $('#' + this.id).attr('class', "disable");
            }
        }
        Container.prototype.enabled = function () {
            this.disable = false;
            if (!!this.classes && !!this.classes.normal) {
                $('#' + this.id).attr('class', this.classes.normal);
            } else {
                $('#' + this.id).attr('class', "normal");
            }
        }

        var gloubtimestamp = 0;

        function printTimeStamp(a) {
            var timestamp = (new Date()).valueOf();
            //-GHL_DEL-//console.log(a + ":" + timestamp + "      " + (timestamp - gloubtimestamp));
            gloubtimestamp = timestamp;
        }

        //ul部件
        function Ul(data, opts, page, parent) {
            ///printTimeStamp("beg UI");
            HiComponent.call(this, data, opts, page, parent);
            ///printTimeStamp("beg 1");
            defaults = {
                "SelectedIndex": 0,
                "DataSelectedIndex": 0
            };

            var setting = $.extend({}, defaults, opts.UlConfig);
            ///printTimeStamp("beg 2");
            this.DoubleClass = !!setting.DoubleClass;
            this.SelectedIndex = setting.SelectedIndex || this.data.SelectedIndex;
            if (this.SelectedIndex >= this.data.Data.length) {
                this.SelectedIndex = 0;
            }
            ///printTimeStamp("beg 3");
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.DataSelectedIndex = setting.DataSelectedIndex || this.data.DataSelectedIndex;
            if (this.DataSelectedIndex >= this.data.Data.length) {
                this.DataSelectedIndex = 0;
            }
            this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
            if (!!setting.PageSize && setting.PageSize > 0) {
                this.PageSize = setting.PageSize;
            } else {
                this.PageSize = this.data.Data.length;
            }
            ///printTimeStamp("beg 4");
            //该项目用于标识在rewrite数据后，列表部件的BeginIdx是否改变，为两种不同的导航模式
            if (!!opts.keepBIdxAfterRewrite && opts.keepBIdxAfterRewrite == true) {
                this.keepBIdxAfterRewrite = true;
            } else {
                this.keepBIdxAfterRewrite = false;
            }
            //2015-4-13
            if (opts.ULPageMode != undefined && opts.ULPageMode == true) {
                this.ULPageMode = true;
            } else {
                this.ULPageMode = false;
            }
            ///printTimeStamp("beg 5");
            //计算默认当前页是第几条数据
            if (this.SelectedIndex >= this.PageSize) {
                this.BeginIdx = (this.SelectedIndex + 1) - this.PageSize;
            }
            else {
                this.BeginIdx = this.data.BeginIdx;
                if (this.BeginIdx == undefined)this.BeginIdx = 0;
                if (this.keepBIdxAfterRewrite) {
                    if (this.SelectedIndex < this.BeginIdx) {
                        this.BeginIdx = this.SelectedIndex;
                    }
                } else {
                    this.BeginIdx = 0;
                }
            }
            this.config = opts.UlConfig;
            this.oriCaE = opts.oriCaE;//oriCaE是指原始的列表项目包含的控件
            this.liDom = $('#' + this.id + '>li');
            ///printTimeStamp("beg 6");
            //获得数据项节点
            this.refreshData();
            ///printTimeStamp("end UI");
        }

        extend(Ul, HiComponent);

        Ul.prototype.refreshData = function () {
            ///printTimeStamp("beg 7");
            this.CaELib = [];
            //获得数据项节点
            this.CaE = [];
            var _this = this;
            var sampleListNodeStr = this.liDom.html();
            $('#' + _this.id + '>li').remove();
            //console.log(this.BeginIdx);
            ///printTimeStamp("beg 8");

            //2015-3-26加入(nav未对应做修改)__
            /*if (this.SelectedIndex >= this.PageSize) {
             this.BeginIdx = (this.SelectedIndex + 1) - this.PageSize;
             }
             else {
             this.BeginIdx = this.data.BeginIdx;
             if (this.BeginIdx == undefined)this.BeginIdx = 0;
             if (this.keepBIdxAfterRewrite) {
             if (this.SelectedIndex < this.BeginIdx) {
             this.BeginIdx = this.SelectedIndex;
             }
             } else {
             this.BeginIdx = 0;
             }
             }*/
            //__2015-3-26加入

            for (var key = this.BeginIdx; key < Math.min(this.BeginIdx + this.PageSize, this.data.Data.length); key++) {
                var val = this.data.Data[key];
                //console.log(val);
                //console.log(sampleListNode.eq(0).html());
                //var newListNode = sampleListNode.eq(0).clone(true).appendTo($('#' + _this.id));attr('class', 'normalaaa')
                var newListNode;

                if (!!_this.classes && !!_this.classes.normal) {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="' + _this.classes.disableDataSelected + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="' + _this.classes.dataSelected + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        }
                    }
                    else {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="' + _this.classes.disable + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="' + _this.classes.normal + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        }
                    }
                } else {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="disableDataSelected">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="dataSelected">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        }
                    }
                    else {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="disable">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="normal">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        }
                    }
                }

                $.each(_this.oriCaE, function (k, v) {
                    //自动添加tag
                    $('#' + _this.id + '>li [id=' + v.id + ']').attr('id', _this.id + '_' + v.id + '_sys' + key);
                    //处理Data
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkData', eval('val.' + v.id));
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkIndex', key);
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkName', v.id);
                    //添加CaE
                    var temp = _cloneObj(v);
                    temp.id = _this.id + '_' + temp.id + '_sys' + key;
                    if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                        temp.disable = true;
                    }

                    //复制nav
                    if (!!temp.nav) {
                        var nav = {};
                        if (!!temp.nav.leftTo) {
                            if (__isInSelf(_this.config.UlDataItem, temp.nav.leftTo)) {
                                nav.leftTo = _this.id + '_' + temp.nav.leftTo + '_sys' + key;
                            } else {
                                nav.leftTo = temp.nav.leftTo;
                            }
                        }
                        if (!!temp.nav.rightTo) {
                            if (__isInSelf(_this.config.UlDataItem, temp.nav.rightTo)) {
                                nav.rightTo = _this.id + '_' + temp.nav.rightTo + '_sys' + key;
                            } else {
                                nav.rightTo = temp.nav.rightTo;
                            }
                        }
                        if (!!temp.nav.upTo) {
                            if (__isInSelf(_this.config.UlDataItem, temp.nav.upTo)) {
                                nav.upTo = _this.id + '_' + temp.nav.upTo + '_sys' + key;
                            } else {
                                nav.upTo = temp.nav.upTo;
                            }
                        }
                        /*else {
                         //判断不存在upto的情况，导航到列表中前一项
                         if (key > 0) {
                         nav.upTo = temp.id + '_sys' + (key - 1);
                         } else {
                         if (!!UlItemNode.nav && !!UlItemNode.nav.upTo)nav.upTo = UlItemNode.nav.upTo;
                         }
                         }*/
                        if (!!temp.nav.downTo) {
                            if (__isInSelf(_this.config.UlDataItem, temp.nav.downTo)) {
                                nav.downTo = _this.id + '_' + temp.nav.downTo + '_sys' + key;
                            } else {
                                nav.downTo = temp.nav.downTo;
                            }
                        }
                        /*else {
                         //判断不存在downTo的情况，导航到列表中后一项
                         if (key < data.listViewItem.length-1) {
                         nav.downTo = temp.id + '_sys' + (key + 1);
                         } else {
                         if (!!UlItemNode.nav && !!UlItemNode.nav.downTo)nav.downTo = UlItemNode.nav.downTo;
                         }
                         }*/
                        if (!!temp.nav.enterTo) {
                            if (__isInSelf(_this.config.UlDataItem, temp.nav.enterTo)) {
                                nav.enterTo = _this.id + '_' + temp.nav.enterTo + '_sys' + key;
                            } else {
                                nav.enterTo = temp.nav.enterTo;
                            }
                        }
                        if (!!temp.nav.escTo) {
                            if (__isInSelf(_this.config.UlDataItem, temp.nav.escTo)) {
                                nav.escTo = _this.id + '_' + temp.nav.escTo + '_sys' + key;
                            } else {
                                nav.escTo = temp.nav.escTo;
                            }
                        }
                        temp.nav = nav;
                    }
                    //复制handler
                    /*UlItemNode.CaE.push(tempNode);
                     if(!!temp.handler){
                     alert(99)
                     }*/

                    _this.CaE.push(temp);
                });
            }
            //console.log(_this);
            ///printTimeStamp("beg 9");
            _AnalyzeCaE(_this, this.CaELib, this.page);
            ///printTimeStamp("beg 10");

        }

        Ul.prototype.hiFocus = function () {
            //2014-9-22
            if (!!this.onFocusFun) {
                if (typeof this.onFocusFun == 'function') {
                    this.onFocusFun.call(this);
                }
                else if (typeof this.onFocusFun == 'string') {
                    eval(this.onFocusFun + '.call(this)');
                }
            }
            this.refreshCss();//新增
            //判断如果需要在li内部项目中定位子项，焦点进入，上层样式修改为selected
            if (!!this.firstFocusId) {
                _getCaEFromCaELibById(this.CaELib, this.id + '_' + this.firstFocusId + '_sys' + this.SelectedIndex).hiFocus();
            } else {
                this.setCurrentSelectTree();
            }
        }

        //改变UL部件的SelectedIndex值，使用该函数需要手动维护pageData数据以及OperateData数据
        Ul.prototype.setSelectedIndex = function (idx) {
            this.SelectedIndex = idx;
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.setCurrentSelectTree();
        }

        //改变UL部件的SelectedIndex值，使用该函数需要手动维护pageData数据以及OperateData数据
        Ul.prototype.setDataSelectedIndex = function (idx) {
            this.DataSelectedIndex = idx;
            this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
            this.setCurrentSelectTree();
        }

        Ul.prototype.disabledItem = function (disItems) {
            this.disableItem = disItems;
        }

        Ul.prototype.getLastPageFlag = function () {
            //判断是否是最后一页
            if (this.BeginIdx + this.PageSize >= this.data.Data.length) {
                return true;
            }
            else {
                return false;
            }
        }
        Ul.prototype.getFirstPageFlag = function () {
            //判断是否是第一页
            if (this.BeginIdx == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        Ul.prototype.disabled = function () {
            this.disable = true;
            //Ul的Disable处理统一为Li项Disable
            this.refreshCss();
            //暂时不考虑列表控件整体Disable样式
            /*if (!!this.classes && !!this.classes.disable) {
             $('#' + this.id).attr('class', this.classes.disable);
             } else {
             $('#' + this.id).attr('class', "disable");
             }*/
            //采用countDisable后，以下代码注释，在updateDataOnly中计算disable
            /*$.each(this.children, function (k, v) {
             //v.disabled();
             //修改为仅改变属性，具体执行disable在changedataonly中进行
             v.disable = true;
             })*/
            //this.refreshData();
        }
        Ul.prototype.enabled = function () {
            this.disable = false;
            //Ul的Disable处理统一为Li项Disable
            this.refreshCss();
            /*$.each(this.children, function (k, v) {
             //v.disabled();
             //修改为仅改变属性，具体执行disable在changedataonly中进行
             v.disable = true;
             })*/
            //this.refreshData();
        }

        Ul.prototype.changeDataOnly = function () {
            var tempData = eval('this.page.data' + this.dataPath + '');
            //-GHL_DEL-//console.log(tempData)
            if (!!tempData) {
                //赋值
                //关于disable处理
                //设置数据changeDataOnly中的disable
                if (tempData.disable != undefined && tempData.disable != this.disable) {
                    this.disable = !this.disable;
                    if (this.disable) {
                        this.disabled();
                    } else {
                        this.enabled();
                    }
                }
                if (tempData.disableItem != undefined) {
                    this.disableItem = tempData.disableItem;
                }
                if (tempData.SelectedIndex != undefined) {
                    this.SelectedIndex = tempData.SelectedIndex;
                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                }
                if (tempData.DataSelectedIndex != undefined) {
                    this.DataSelectedIndex = tempData.DataSelectedIndex;
                    this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
                }

                var temp_isChange = false;
                //关于数据项Disable处理
                if (tempData.disableItem != undefined && tempData.disableItem.length != 0) {
                    this.disableItem = tempData.disableItem;
                    temp_isChange = true;
                }
                //关于selectedindex处理
                if (tempData.SelectedIndex != undefined && this.SelectedIndex != tempData.SelectedIndex) {
                    this.SelectedIndex = tempData.SelectedIndex;
                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                    temp_isChange = true;
                }
                //关于dataSelectedIndex处理
                if (tempData.DataSelectedIndex != undefined && this.DataSelectedIndex != tempData.DataSelectedIndex) {
                    this.DataSelectedIndex = tempData.DataSelectedIndex;
                    this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
                    temp_isChange = true;
                }
//                if (temp_isChange) {
                this.refreshCss();
//                }

                //调用子节点changeDataOnly
                $.each(this.children, function (key, val) {
                    //console.log(val.id)
                    val.changeDataOnly();
                });
            }
        }
        //
        Ul.prototype.refreshCss = function () {
            for (var key = this.BeginIdx; key < Math.min(this.BeginIdx + this.PageSize, this.data.Data.length); key++) {
                if (!!this.classes && !!this.classes.normal) {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disableDataSelected);
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.dataSelected);
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.normal);
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {

                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                            }
                        } else {
                            if (_getCurrentFocus() == this.id) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.focus);
                            } else {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.selected);
                            }
                        }
                    }
                } else {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disableDataSelected');
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'dataSelected');
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disable');
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'normal');
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disable');
                            }
                        } else {
                            if (_getCurrentFocus() == this.id) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'focus');
                            } else {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'selected');
                            }
                        }
                    }
                }
            }
        }

        Ul.prototype.next = function () {
            if (this.SelectedIndex != this.data.Data.length - 1) {
                if (!!this.disableItem && this.disableItem.length > 0) {
                    var assertIdx = _getNextIndex(this.SelectedIndex, this.disableItem, this.data.Data.length);
                    if (this.SelectedIndex != assertIdx) {
                        this.hiBlur();
                        this.SelectedIndex = assertIdx;
                        var currentBeginIndex = this.BeginIdx;
                        this.BeginIdx = (this.SelectedIndex > currentBeginIndex + this.PageSize - 1) ? this.SelectedIndex - this.PageSize + 1 : this.BeginIdx;
                        if (this.BeginIdx != currentBeginIndex)this.refreshData();
                        this.data.SelectedIndex = this.SelectedIndex;
                        this.data.BeginIdx = this.BeginIdx;
                        this.hiFocus();
                    }
                } else {
                    if (this.ULPageMode == false) {
                        this.hiBlur();
                        this.SelectedIndex++;
                        if (this.SelectedIndex >= this.BeginIdx + this.PageSize) {
                            this.BeginIdx++;
                            this.refreshData();
                        }
                        this.data.SelectedIndex = this.SelectedIndex;
                        this.data.BeginIdx = this.BeginIdx;
                        this.hiFocus();
                    } else {
                        //在无DisableItem的情况下可启用翻页功能
                        this.hiBlur();
                        this.SelectedIndex++;
                        if (this.SelectedIndex >= this.BeginIdx + this.PageSize) {
                            this.BeginIdx = (this.BeginIdx + this.PageSize < this.data.Data.length) ? this.BeginIdx + this.PageSize : this.SelectedIndex;
                            this.refreshData();
                        }
                        this.data.SelectedIndex = this.SelectedIndex;
                        this.data.BeginIdx = this.BeginIdx;
                        this.hiFocus();
                    }
                }
            }
        }

        Ul.prototype.pre = function () {
            if (this.SelectedIndex != 0) {
                if (!!this.disableItem && this.disableItem.length > 0) {
                    var assertIdx = _getPreIndex(this.SelectedIndex, this.disableItem);
                    if (this.SelectedIndex != assertIdx) {
                        this.SelectedIndex = assertIdx;
                        var currentBeginIndex = this.BeginIdx;
                        this.BeginIdx = (this.SelectedIndex < currentBeginIndex) ? this.SelectedIndex : this.BeginIdx;
                        if (this.BeginIdx != currentBeginIndex)this.refreshData();
                        this.data.SelectedIndex = this.SelectedIndex;
                        this.data.BeginIdx = this.BeginIdx;
                        this.hiFocus();
                    }
                } else {
                    if (this.ULPageMode == false) {
                        this.hiBlur();
                        this.SelectedIndex--;
                        if (this.SelectedIndex < this.BeginIdx) {
                            this.BeginIdx--;
                            this.refreshData();
                        }
                        this.data.SelectedIndex = this.SelectedIndex;
                        this.data.BeginIdx = this.BeginIdx;
                        this.hiFocus();
                    } else {
                        //在无DisableItem的情况下可启用翻页功能
                        this.hiBlur();
                        this.SelectedIndex--;
                        if (this.SelectedIndex < this.BeginIdx) {
                            this.BeginIdx = (this.BeginIdx >= this.PageSize) ? this.BeginIdx - this.PageSize : 0;
                            this.refreshData();
                        }
                        this.data.SelectedIndex = this.SelectedIndex;
                        this.data.BeginIdx = this.BeginIdx;
                        this.hiFocus();
                    }
                }

            }
        }

        Ul.prototype.getPageIndex = function () {
            return Math.floor(this.SelectedIndex / this.PageSize);
        }

        Ul.prototype.getPageCount = function () {
            return Math.floor(this.data.Data.length / this.PageSize);
        }

        //UL翻页函数，仅在disableItem为空状态下作用
        Ul.prototype.pageDown = function () {
            var ulLastPageIndex = this.getPageCount();
            var currentPageIndex = this.getPageIndex();
            if (!(!!this.disableItem && this.disableItem.length > 0) && currentPageIndex != ulLastPageIndex) {
                this.hiBlur();
                this.SelectedIndex = (currentPageIndex + 1) * this.PageSize;
                if (this.SelectedIndex >= this.BeginIdx + this.PageSize) {
                    this.BeginIdx = (this.BeginIdx + this.PageSize < this.data.Data.length) ? this.BeginIdx + this.PageSize : this.SelectedIndex;
                    this.refreshData();
                }
                this.data.SelectedIndex = this.SelectedIndex;
                this.data.BeginIdx = this.BeginIdx;
                this.hiFocus();
            }
        }

        //UL翻页函数，仅在disableItem为空状态下作用
        Ul.prototype.pageUp = function () {
            var ulLastPageIndex = this.getPageCount();
            var currentPageIndex = this.getPageIndex();
            if (!(!!this.disableItem && this.disableItem.length > 0) && currentPageIndex != 0) {
                this.hiBlur();
                this.SelectedIndex = (currentPageIndex - 1) * this.PageSize;
                if (this.SelectedIndex < this.BeginIdx) {
                    this.BeginIdx = (this.BeginIdx >= this.PageSize) ? this.BeginIdx - this.PageSize : 0;
                    this.refreshData();
                }
                this.data.SelectedIndex = this.SelectedIndex;
                this.data.BeginIdx = this.BeginIdx;
                this.hiFocus();
            }
        }

        //GridUl部件
        function GridUl(data, opts, page, parent) {
            //console.log(JSON.stringify(data))
            //console.log(JSON.stringify(opts))
            HiComponent.call(this, data, opts, page, parent);

            defaults = {
                "SelectedIndex": 0,
                "LineNum": 1,
                "FlipType": 'NONE',//默认为不翻页，VER垂直翻页 HOR为水平翻页
                "DataSelectedIndex": 0,
                "ArrowFlag": false, //超出部分是否加左右箭头,默认不加
                "locationFun": function (idx) {
                    return 0;
                }
            };


            var setting = $.extend({}, defaults, opts.GridUlConfig);
            this.DoubleClass = !!setting.DoubleClass;
            this.SelectedIndex = setting.SelectedIndex || this.data.SelectedIndex;
            if (this.SelectedIndex >= this.data.Data.length) {
                this.SelectedIndex = 0;
            }
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.DataSelectedIndex = setting.DataSelectedIndex || this.data.DataSelectedIndex;
            if (this.DataSelectedIndex >= this.data.Data.length) {
                this.DataSelectedIndex = 0;
            }
            this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
            this.LineNum = opts.LineNum || setting.LineNum;
            if (!!setting.PageSize && setting.PageSize > 0) {
                this.PageSize = setting.PageSize;
            } else {
                this.PageSize = Math.max(this.data.Data.length, 1);
            }

            this.FlipType = setting.FlipType;

            //该项目用于标识在rewrite数据后，列表部件的BeginIdx是否改变，为两种不同的导航模式
            if (!!opts.keepBIdxAfterRewrite && opts.keepBIdxAfterRewrite == true) {
                this.keepBIdxAfterRewrite = true;
            } else {
                this.keepBIdxAfterRewrite = false;
            }

            //计算默认当前页是第几条数据
            if (this.SelectedIndex >= this.PageSize) {
                //this.BeginIdx = this.data.Data.length - Math.ceil(((this.SelectedIndex + 1) / this.PageSize) * this.PageSize);
                this.BeginIdx = Math.floor(this.SelectedIndex / this.PageSize) * this.PageSize;
            } else {
                this.BeginIdx = this.data.BeginIdx;
                if (this.BeginIdx == undefined)this.BeginIdx = 0;
                if (this.keepBIdxAfterRewrite) {
                    if (this.SelectedIndex < this.BeginIdx) {
                        this.BeginIdx = this.SelectedIndex;
                    }
                } else {
                    this.BeginIdx = 0;
                }
            }
            this.ArrowFlag = setting.ArrowFlag;
            this.locationFun = setting.locationFun;
            this.Width = setting.Width;
            //-GHL_DEL-//console.log(this.BeginIdx, this.PageSize, this.LineNum)
            this.oriCaE = opts.oriCaE;//oriCaE是指原始的列表项目包含的控件
            this.config = opts.GridUlConfig;
            this.liDom = $('#' + this.id + '>li');
            this.refreshData();
        }

        extend(GridUl, HiComponent);
        GridUl.prototype.refreshData = function () {
            this.CaELib = [];
            //获得数据项节点
            this.CaE = [];
            var sampleListNodeStr = this.liDom.html();
            //-GHL_DEL-//console.log(sampleListNodeStr);
            var _this = this;
            $('#' + _this.id + '>li').remove();
            for (var key = this.BeginIdx; key < Math.min((this.BeginIdx + this.PageSize), this.data.Data.length); key++) {
                var val = this.data.Data[key];
                //console.log(sampleListNode.eq(0).html());
                //var newListNode = sampleListNode.eq(0).clone(true).appendTo($('#' + _this.id));attr('class', 'normalaaa')
                var newListNode;
                if (!!_this.classes && !!_this.classes.normal) {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        newListNode = $('<li class="' + _this.classes.dataSelected + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                    }
                    else {
                        newListNode = $('<li class="' + _this.classes.normal + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                    }
                } else {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        newListNode = $('<li class="dataSelected">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                    }
                    else {
                        newListNode = $('<li class="normal">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                    }
                }


                $.each(_this.oriCaE, function (k, v) {
                    //自动添加tag
                    $('#' + _this.id + '>li [id=' + v.id + ']').attr('id', _this.id + '_' + v.id + '_sys' + key);
                    //处理Data
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkData', eval('val.' + v.id));
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkIndex', key);
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkName', v.id);
                    //添加CaE
                    var temp = _cloneObj(v);
                    temp.id = _this.id + '_' + temp.id + '_sys' + key;

                    //复制nav
                    if (!!temp.nav) {
                        var nav = {};
                        if (!!temp.nav.leftTo) {
                            if (__isInSelf(_this.config.GridUlDataItem, temp.nav.leftTo)) {
                                nav.leftTo = _this.id + '_' + temp.nav.leftTo + '_sys' + key;
                            } else {
                                nav.leftTo = temp.nav.leftTo;
                            }
                        }
                        if (!!temp.nav.rightTo) {
                            if (__isInSelf(_this.config.GridUlDataItem, temp.nav.rightTo)) {
                                nav.rightTo = _this.id + '_' + temp.nav.rightTo + '_sys' + key;
                            } else {
                                nav.rightTo = temp.nav.rightTo;
                            }
                        }
                        if (!!temp.nav.upTo) {
                            if (__isInSelf(_this.config.GridUlDataItem, temp.nav.upTo)) {
                                nav.upTo = _this.id + '_' + temp.nav.upTo + '_sys' + key;
                            } else {
                                nav.upTo = temp.nav.upTo;
                            }
                        }
                        /*else {
                         //判断不存在upto的情况，导航到列表中前一项
                         if (key > 0) {
                         nav.upTo = temp.id + '_sys' + (key - 1);
                         } else {
                         if (!!UlItemNode.nav && !!UlItemNode.nav.upTo)nav.upTo = UlItemNode.nav.upTo;
                         }
                         }*/
                        if (!!temp.nav.downTo) {
                            if (__isInSelf(_this.config.GridUlDataItem, temp.nav.downTo)) {
                                nav.downTo = _this.id + '_' + temp.nav.downTo + '_sys' + key;
                            } else {
                                nav.downTo = temp.nav.downTo;
                            }
                        }
                        /*else {
                         //判断不存在downTo的情况，导航到列表中后一项
                         if (key < data.listViewItem.length-1) {
                         nav.downTo = temp.id + '_sys' + (key + 1);
                         } else {
                         if (!!UlItemNode.nav && !!UlItemNode.nav.downTo)nav.downTo = UlItemNode.nav.downTo;
                         }
                         }*/
                        if (!!temp.nav.enterTo) {
                            if (__isInSelf(_this.config.GridUlDataItem, temp.nav.enterTo)) {
                                nav.enterTo = _this.id + '_' + temp.nav.enterTo + '_sys' + key;
                            } else {
                                nav.enterTo = temp.nav.enterTo;
                            }
                        }
                        if (!!temp.nav.escTo) {
                            if (__isInSelf(_this.config.GridUlDataItem, temp.nav.escTo)) {
                                nav.escTo = _this.id + '_' + temp.nav.escTo + '_sys' + key;
                            } else {
                                nav.escTo = temp.nav.escTo;
                            }
                        }
                        temp.nav = nav;
                    }
                    //复制handler
                    //UlItemNode.CaE.push(tempNode);

                    _this.CaE.push(temp);
                });
            }

            _AnalyzeCaE(_this, this.CaELib, this.page);
            if (this.ArrowFlag == true) {
                if (this.BeginIdx > 0) {
                    $("#" + this.id).prev().css("visibility", "visible");
                }
                else {
                    $("#" + this.id).prev().css("visibility", "hidden");
                }
                if (this.BeginIdx + this.PageSize >= this.data.Data.length) {
                    $("#" + this.id).next().css("visibility", "hidden");
                }
                else {
                    $("#" + this.id).next().css("visibility", "visible");
                }
            }

        }
        GridUl.prototype.hiFocus = function () {
            //2014-9-22
            if (!!this.onFocusFun) {
                if (typeof this.onFocusFun == 'function') {
                    this.onFocusFun.call(this);
                }
                else if (typeof this.onFocusFun == 'string') {
                    eval(this.onFocusFun + '.call(this)');
                }
            }
            this.refreshCss();//新增
            //判断如果需要在li内部项目中定位子项，焦点进入，上层样式修改为selected
            if (!!this.firstFocusId) {
                _getCaEFromCaELibById(this.CaELib, this.id + '_' + this.firstFocusId + '_sys' + this.SelectedIndex).hiFocus();
            } else {
                this.setCurrentSelectTree();
            }
        }

        //改变GridUl部件的SelectedIndex值，使用该函数需要手动维护pageData数据以及OperateData数据
        GridUl.prototype.setSelectedIndex = function (idx) {
            this.SelectedIndex = idx;
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.setCurrentSelectTree();
        }

        //改变GridUl部件的SelectedIndex值，使用该函数需要手动维护pageData数据以及OperateData数据
        GridUl.prototype.setDataSelectedIndex = function (idx) {
            this.DataSelectedIndex = idx;
            this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
            this.setCurrentSelectTree();
        }

        GridUl.prototype.disabledItem = function (disItems) {
            this.disableItem = disItems;
        }

        GridUl.prototype.getLastPageFlag = function () {
            //判断是否是最后一页
            if (this.BeginIdx + this.PageSize >= this.data.Data.length) {
                return true;
            }
            else {
                return false;
            }
        }
        GridUl.prototype.getFirstPageFlag = function () {
            //判断是否是第一页
            if (this.BeginIdx == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        GridUl.prototype.disabled = function () {
            this.disable = true;
            this.refreshCss();
        }
        GridUl.prototype.enabled = function () {
            this.disable = false;
            this.refreshCss();
        }
        GridUl.prototype.changeDataOnly = function () {
            var tempData = eval('this.page.data' + this.dataPath + '');
            if (!!tempData) {
                //赋值
                //关于disable处理
                //设置数据changeDataOnly中的disable
                if (tempData.disable != undefined && tempData.disable != this.disable) {
                    this.disable = !this.disable;
                    if (this.disable) {
                        this.disabled();
                    } else {
                        this.enabled();
                    }
                }
                if (tempData.disableItem != undefined)this.disableItem = tempData.disableItem;
                if (tempData.SelectedIndex != undefined) {
                    this.SelectedIndex = tempData.SelectedIndex;
                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                }
                if (tempData.DataSelectedIndex != undefined) {
                    this.DataSelectedIndex = tempData.DataSelectedIndex;
                    this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
                }

                var temp_isChange = false;
                //关于数据项Disable处理
                if (tempData.disableItem != undefined && tempData.disableItem.length != 0) {
                    this.disableItem = tempData.disableItem;
                    temp_isChange = true;
                }
                //关于selectedindex处理
                if (tempData.SelectedIndex != undefined && this.SelectedIndex != tempData.SelectedIndex) {
                    this.SelectedIndex = tempData.SelectedIndex;
                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                    temp_isChange = true;
                }
                //关于dataSelectedIndex处理
                if (tempData.DataSelectedIndex != undefined && this.DataSelectedIndex != tempData.DataSelectedIndex) {
                    this.DataSelectedIndex = tempData.DataSelectedIndex;
                    this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
                    temp_isChange = true;
                }
                this.refreshCss();

                //调用子节点changeDataOnly
                $.each(this.children, function (key, val) {
                    //-GHL_DEL-//console.log(val.id)
                    val.changeDataOnly();
                });
            }
        }
        GridUl.prototype.refreshCss = function () {
            for (var key = this.BeginIdx; key < Math.min(this.BeginIdx + this.PageSize, this.data.Data.length); key++) {
                if (!!this.classes && !!this.classes.normal) {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disableDataSelected);
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.dataSelected);
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.normal);
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {

                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                            }
                        } else {
                            if (_getCurrentFocus() == this.id) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.focus);
                            } else {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.selected);
                            }
                        }
                    }
                } else {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disableDataSelected');
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'dataSelected');
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disable');
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'normal');
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disable');
                            }
                        } else {
                            if (_getCurrentFocus() == this.id) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'focus');
                            } else {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'selected');
                            }
                        }
                    }
                }
            }
        }

        //Grid List
        function GridList(data, opts, page, parent) {
            HiComponent.call(this, data, opts, page, parent);

            defaults = {
                "SelectedIndex": 0,
                "LineNum": 1,
                "FlipType": 'NONE',//默认为不翻页，VER垂直翻页 HOR为水平翻页
                "DataSelectedIndex": 0,
                "ArrowFlag": false, //超出部分是否加左右箭头,默认不加
                "locationFun": function (idx) {
                    return 0;
                }
            };

            var setting = $.extend({}, defaults, opts.GridListConfig);
            this.DoubleClass = !!setting.DoubleClass;
            this.SelectedIndex = setting.SelectedIndex || this.data.SelectedIndex;
            if (this.SelectedIndex >= this.data.Data.length) {
                this.SelectedIndex = 0;
            }
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.DataSelectedIndex = setting.DataSelectedIndex || this.data.DataSelectedIndex;
            if (this.DataSelectedIndex >= this.data.Data.length) {
                this.DataSelectedIndex = 0;
            }
            this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
            this.LineNum = opts.LineNum || setting.LineNum;
            if (!!setting.PageSize && setting.PageSize > 0) {
                this.PageSize = setting.PageSize;
            }
            else {
                this.PageSize = Math.max(this.data.Data.length, 1);
            }

            this.FlipType = setting.FlipType;

            //该项目用于标识在rewrite数据后，列表部件的BeginIdx是否改变，为两种不同的导航模式
            if (!!opts.keepBIdxAfterRewrite && opts.keepBIdxAfterRewrite == true) {
                this.keepBIdxAfterRewrite = true;
            }
            else {
                this.keepBIdxAfterRewrite = false;
            }

            //计算默认当前页是第几条数据
            if (this.SelectedIndex >= this.PageSize) {
                //this.BeginIdx = this.data.Data.length - Math.ceil(((this.SelectedIndex + 1) / this.PageSize) * this.PageSize);
                this.BeginIdx = Math.floor(this.SelectedIndex / this.PageSize) * this.PageSize;
            }
            else {
                this.BeginIdx = this.data.BeginIdx;
                if (this.BeginIdx == undefined)this.BeginIdx = 0;
                if (this.keepBIdxAfterRewrite) {
                    if (this.SelectedIndex < this.BeginIdx) {
                        this.BeginIdx = this.SelectedIndex;
                    }
                }
                else {
                    this.BeginIdx = 0;
                }
            }
            this.ArrowFlag = setting.ArrowFlag;
            this.locationFun = setting.locationFun;
            this.Width = setting.Width;
            //-GHL_DEL-//console.log(this.BeginIdx, this.PageSize, this.LineNum)
            this.oriCaE = opts.oriCaE;//oriCaE是指原始的列表项目包含的控件
            this.config = opts.GridListConfig;
            this.liDom = $('#' + this.id + '>li').clone();
            this.refreshData();
        }

        extend(GridList, HiComponent);
        GridList.prototype.refreshData = function () {
            this.CaELib = [];
            //获得数据项节点
            this.CaE = [];
            var sampleListNodeStr = this.liDom.html();
            //-GHL_DEL-//console.log(sampleListNodeStr);
            var _this = this;
            $('#' + _this.id + ' *').remove();
            var ulIndx = -1;
            for (var key = this.BeginIdx; key < Math.min((this.BeginIdx + this.PageSize), this.data.Data.length); key++) {
                if (key % _this.LineNum == 0) {
                    if(getHTMLDirection() == "ltr"){
                        $('#' + _this.id).append('<ul style="float:left"></ul>');
                    }else{
                        $('#' + _this.id).append('<ul style="float:right"></ul>');
                    }
                    ulIndx++;
                }
                var val = this.data.Data[key];
                //console.log(sampleListNode.eq(0).html());
                //var newListNode = sampleListNode.eq(0).clone(true).appendTo($('#' + _this.id));attr('class', 'normalaaa')
                var newListNode;
                if (!!_this.classes && !!_this.classes.normal) {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        newListNode = $('<li class="' + _this.classes.dataSelected + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id + ">ul").eq(ulIndx));
                    }
                    else {
                        newListNode = $('<li class="' + _this.classes.normal + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id + ">ul").eq(ulIndx));
                    }
                }
                else {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        newListNode = $('<li class="dataSelected">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id + ">ul").eq(ulIndx));
                    }
                    else {
                        newListNode = $('<li class="normal">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id + ">ul").eq(ulIndx));
                    }
                }


                $.each(_this.oriCaE, function (k, v) {
                    //自动添加tag
                    $('#' + _this.id + '>ul >li [id=' + v.id + ']').attr('id', _this.id + '_' + v.id + '_sys' + key);
                    //处理Data
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkData', eval('val.' + v.id));
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkIndex', key);
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkName', v.id);
                    //添加CaE
                    var temp = _cloneObj(v);
                    temp.id = _this.id + '_' + temp.id + '_sys' + key;

                    //复制nav
                    if (!!temp.nav) {
                        var nav = {};
                        if (!!temp.nav.leftTo) {
                            if (__isInSelf(_this.config.GridListDataItem, temp.nav.leftTo)) {
                                nav.leftTo = _this.id + '_' + temp.nav.leftTo + '_sys' + key;
                            }
                            else {
                                nav.leftTo = temp.nav.leftTo;
                            }
                        }
                        if (!!temp.nav.rightTo) {
                            if (__isInSelf(_this.config.GridListDataItem, temp.nav.rightTo)) {
                                nav.rightTo = _this.id + '_' + temp.nav.rightTo + '_sys' + key;
                            }
                            else {
                                nav.rightTo = temp.nav.rightTo;
                            }
                        }
                        if (!!temp.nav.upTo) {
                            if (__isInSelf(_this.config.GridListDataItem, temp.nav.upTo)) {
                                nav.upTo = _this.id + '_' + temp.nav.upTo + '_sys' + key;
                            }
                            else {
                                nav.upTo = temp.nav.upTo;
                            }
                        }
                        /*else {
                         //判断不存在upto的情况，导航到列表中前一项
                         if (key > 0) {
                         nav.upTo = temp.id + '_sys' + (key - 1);
                         } else {
                         if (!!UlItemNode.nav && !!UlItemNode.nav.upTo)nav.upTo = UlItemNode.nav.upTo;
                         }
                         }*/
                        if (!!temp.nav.downTo) {
                            if (__isInSelf(_this.config.GridListDataItem, temp.nav.downTo)) {
                                nav.downTo = _this.id + '_' + temp.nav.downTo + '_sys' + key;
                            }
                            else {
                                nav.downTo = temp.nav.downTo;
                            }
                        }
                        /*else {
                         //判断不存在downTo的情况，导航到列表中后一项
                         if (key < data.listViewItem.length-1) {
                         nav.downTo = temp.id + '_sys' + (key + 1);
                         } else {
                         if (!!UlItemNode.nav && !!UlItemNode.nav.downTo)nav.downTo = UlItemNode.nav.downTo;
                         }
                         }*/
                        if (!!temp.nav.enterTo) {
                            if (__isInSelf(_this.config.GridListDataItem, temp.nav.enterTo)) {
                                nav.enterTo = _this.id + '_' + temp.nav.enterTo + '_sys' + key;
                            }
                            else {
                                nav.enterTo = temp.nav.enterTo;
                            }
                        }
                        if (!!temp.nav.escTo) {
                            if (__isInSelf(_this.config.GridListDataItem, temp.nav.escTo)) {
                                nav.escTo = _this.id + '_' + temp.nav.escTo + '_sys' + key;
                            }
                            else {
                                nav.escTo = temp.nav.escTo;
                            }
                        }
                        temp.nav = nav;
                    }
                    //复制handler
                    //UlItemNode.CaE.push(tempNode);

                    _this.CaE.push(temp);
                });
            }

            _AnalyzeCaE(_this, this.CaELib, this.page);
            if (this.ArrowFlag == true) {
                if (this.BeginIdx > 0) {
                    $("#" + this.id).prev().css("visibility", "visible");
                }
                else {
                    $("#" + this.id).prev().css("visibility", "hidden");
                }
                if (this.BeginIdx + this.PageSize >= this.data.Data.length) {
                    $("#" + this.id).next().css("visibility", "hidden");
                }
                else {
                    $("#" + this.id).next().css("visibility", "visible");
                }
            }

        }

        GridList.prototype.hiFocus = GridUl.prototype.hiFocus;
        GridList.prototype.setSelectedIndex = GridUl.prototype.setSelectedIndex
        GridList.prototype.setDataSelectedIndex = GridUl.prototype.setDataSelectedIndex
        GridList.prototype.disabledItem = GridUl.prototype.disabledItem
        GridList.prototype.getLastPageFlag = GridUl.prototype.getLastPageFlag
        GridList.prototype.getFirstPageFlag = GridUl.prototype.getFirstPageFlag
        GridList.prototype.changeDataOnly = GridUl.prototype.changeDataOnly
        GridList.prototype.refreshCss = function () {
            for (var key = this.BeginIdx; key < Math.min(this.BeginIdx + this.PageSize, this.data.Data.length); key++) {
                if (!!this.classes && !!this.classes.normal) {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', this.classes.disableDataSelected);
                        }
                        else {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', this.classes.dataSelected);
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                        }
                        else {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', this.classes.normal);
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {

                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                            }
                        }
                        else {
                            if (_getCurrentFocus() == this.id) {
                                $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', this.classes.focus);
                            }
                            else {
                                $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', this.classes.selected);
                            }
                        }
                    }
                }
                else {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', 'disableDataSelected');
                        }
                        else {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', 'dataSelected');
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', 'disable');
                        }
                        else {
                            $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', 'normal');
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', 'disable');
                            }
                        }
                        else {
                            if (_getCurrentFocus() == this.id) {
                                $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', 'focus');
                            }
                            else {
                                $('#' + this.id + ">ul>li").eq((key - this.BeginIdx)).attr('class', 'selected');
                            }
                        }
                    }
                }
            }
        }

        //Epg横向列表控件NavigationBar
        function NavigationBar(data, opts, page, parent) {
            //console.log(JSON.stringify(data))
            //console.log(JSON.stringify(opts))

            HiComponent.call(this, data, opts, page, parent);

            defaults = {
                "SelectedIndex": 0,
                "DataSelectedIndex": 0,
                "ArrowFlag": false  //超出部分是否加左右箭头，默认为不加
            };

            var setting = $.extend({}, defaults, opts.NavigationBarConfig);
            this.DoubleClass = !!setting.DoubleClass;
            this.SelectedIndex = setting.SelectedIndex || this.data.SelectedIndex;
            if (!this.SelectedIndex || this.SelectedIndex >= this.data.Data.length) {
                this.SelectedIndex = 0;
            }
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.DataSelectedIndex = setting.DataSelectedIndex || this.data.DataSelectedIndex;
            if (!this.DataSelectedIndex || this.DataSelectedIndex >= this.data.Data.length) {
                this.DataSelectedIndex = 0;
            }
            this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20

            if (!!setting.PageSize && setting.PageSize > 0) {
                this.PageSize = setting.PageSize;
            } else {
                this.PageSize = this.data.Data.length;
            }

            //该项目用于标识在rewrite数据后，列表部件的BeginIdx是否改变，为两种不同的导航模式
            if (!!opts.keepBIdxAfterRewrite && opts.keepBIdxAfterRewrite == true) {
                this.keepBIdxAfterRewrite = true;
            } else {
                this.keepBIdxAfterRewrite = false;
            }
            //console.log('前BeginInx:' + this.BeginIdx + ';this.data.BeginIdx:' + this.data.BeginIdx);

            //计算默认当前页是第几条数据
            if (this.SelectedIndex >= this.PageSize) {
                this.BeginIdx = (this.SelectedIndex + 1) - this.PageSize;
            }
            else {
                this.BeginIdx = this.data.BeginIdx;
                if (this.BeginIdx == undefined)this.BeginIdx = 0;
                if (this.keepBIdxAfterRewrite) {
                    if (this.SelectedIndex < this.BeginIdx) {
                        this.BeginIdx = this.SelectedIndex;
                    }
                } else {
                    this.BeginIdx = 0;
                }

            }
            //console.log('后BeginInx:' + this.BeginIdx + ';this.data.BeginIdx:' + this.data.BeginIdx);

            this.ArrowFlag = setting.ArrowFlag;
            this.oriCaE = opts.oriCaE;//oriCaE是指原始的列表项目包含的控件
            this.config = opts.NavigationBarConfig;
            this.liDom = $('#' + this.id + '>li');
            this.refreshData();
        }

        extend(NavigationBar, HiComponent);
        NavigationBar.prototype.refreshData = function () {
            //该函数会执行两次，追究问题001233

            this.CaELib = [];
            //获得数据项节点
            this.CaE = [];
            var _this = this;
            var sampleListNodeStr = this.liDom.html();
            //console.log(_this.id);
            $('#' + _this.id + '>li').remove();
            for (var key = this.BeginIdx; key < Math.min(this.BeginIdx + this.PageSize, this.data.Data.length); key++) {
                var val = this.data.Data[key];
                //var newListNode = sampleListNode.eq(0).clone(true).appendTo($('#' + _this.id));
                //todo
                var newListNode;
                if (!!_this.classes && !!_this.classes.normal) {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="' + _this.classes.disableDataSelected + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="' + _this.classes.dataSelected + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        }
                    }
                    else {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="' + _this.classes.disable + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="' + _this.classes.normal + '">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        }
                    }
                } else {
                    if (_this.DataSelectedIndex != undefined && _this.DataSelectedIndex - _this.BeginIdx >= 0 && key == _this.DataSelectedIndex) {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="disableDataSelected">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="dataSelected">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        }
                    }
                    else {
                        if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                            newListNode = $('<li class="disable">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));
                        } else {
                            newListNode = $('<li class="normal">' + sampleListNodeStr + '</li>').clone(true).appendTo($('#' + _this.id));

                        }
                    }
                }


                $.each(_this.oriCaE, function (k, v) {
                    //自动添加tag
                    $('#' + _this.id + '>li [id=' + v.id + ']').attr('id', _this.id + '_' + v.id + '_sys' + key);
                    //处理Data
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkData', eval('val.' + v.id));
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkIndex', key);
                    $('#' + _this.id + '_' + v.id + '_sys' + key).data('linkName', v.id);
                    //添加CaE
                    var temp = _cloneObj(v);
                    temp.id = _this.id + '_' + temp.id + '_sys' + key;
                    if (!!_this.disable || (_this.disableItem && $.inArray(key, _this.disableItem) != -1)) {//加入判断disable条件2014-5-24
                        temp.disable = true;
                    }

                    //复制nav
                    if (!!temp.nav) {
                        var nav = {};
                        if (!!temp.nav.leftTo) {
                            if (__isInSelf(_this.config.NavigationBarDataItem, temp.nav.leftTo)) {
                                nav.leftTo = _this.id + '_' + temp.nav.leftTo + '_sys' + key;
                            } else {
                                nav.leftTo = temp.nav.leftTo;
                            }
                        }
                        if (!!temp.nav.rightTo) {
                            if (__isInSelf(_this.config.NavigationBarDataItem, temp.nav.rightTo)) {
                                nav.rightTo = _this.id + '_' + temp.nav.rightTo + '_sys' + key;
                            } else {
                                nav.rightTo = temp.nav.rightTo;
                            }
                        }
                        if (!!temp.nav.upTo) {
                            if (__isInSelf(_this.config.NavigationBarDataItem, temp.nav.upTo)) {
                                nav.upTo = _this.id + '_' + temp.nav.upTo + '_sys' + key;
                            } else {
                                nav.upTo = temp.nav.upTo;
                            }
                        }
                        if (!!temp.nav.downTo) {
                            if (__isInSelf(_this.config.NavigationBarDataItem, temp.nav.downTo)) {
                                nav.downTo = _this.id + '_' + temp.nav.downTo + '_sys' + key;
                            } else {
                                nav.downTo = temp.nav.downTo;
                            }
                        }
                        if (!!temp.nav.enterTo) {
                            if (__isInSelf(_this.config.NavigationBarDataItem, temp.nav.enterTo)) {
                                nav.enterTo = _this.id + '_' + temp.nav.enterTo + '_sys' + key;
                            } else {
                                nav.enterTo = temp.nav.enterTo;
                            }
                        }
                        if (!!temp.nav.escTo) {
                            if (__isInSelf(_this.config.NavigationBarDataItem, temp.nav.escTo)) {
                                nav.escTo = _this.id + '_' + temp.nav.escTo + '_sys' + key;
                            } else {
                                nav.escTo = temp.nav.escTo;
                            }
                        }
                        temp.nav = nav;
                    }

                    //复制handler
                    _this.CaE.push(temp);
                });

            }
//            console.log(JSON.stringify(_this.CaE));
            _AnalyzeCaE(_this, this.CaELib, this.page);
            if (this.ArrowFlag == true) {
                if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
                    if (this.BeginIdx > 0) {
                        $("#" + this.id).prev().css("visibility", "visible");
                    }
                    else {
                        $("#" + this.id).prev().css("visibility", "hidden");
                    }
                    if (this.BeginIdx + this.PageSize >= this.data.Data.length) {
                        $("#" + this.id).next().css("visibility", "hidden");
                    }
                    else {
                        $("#" + this.id).next().css("visibility", "visible");
                    }
                } else{
                    if (this.BeginIdx > 0) {
                        $("#" + this.id).next().css("visibility", "visible");
                    }
                    else {
                        $("#" + this.id).next().css("visibility", "hidden");
                    }
                    if (this.BeginIdx + this.PageSize >= this.data.Data.length) {
                        $("#" + this.id).prev().css("visibility", "hidden");
                    }
                    else {
                        $("#" + this.id).prev().css("visibility", "visible");
                    }
                }

            }
        }
        NavigationBar.prototype.hiFocus = function () {
            //2014-9-22
            if (!!this.onFocusFun) {
                if (typeof this.onFocusFun == 'function') {
                    this.onFocusFun.call(this);
                }
                else if (typeof this.onFocusFun == 'string') {
                    eval(this.onFocusFun + '.call(this)');
                }
            }
            this.refreshCss();//新增
            //判断如果需要在li内部项目中定位子项，焦点进入，上层样式修改为selected
            if (!!this.firstFocusId) {
                _getCaEFromCaELibById(this.CaELib, this.id + '_' + this.firstFocusId + '_sys' + this.SelectedIndex).hiFocus();
            } else {
                this.setCurrentSelectTree();
            }
        }

        //改变NavigationBar部件的SelectedIndex值，使用该函数需要手动维护pageData数据以及OperateData数据
        NavigationBar.prototype.setSelectedIndex = function (idx) {
            this.SelectedIndex = idx;
            this.data.SelectedIndex = this.SelectedIndex;//6-20
            this.setCurrentSelectTree();
        }

        //改变NavigationBar部件的SelectedIndex值，使用该函数需要手动维护pageData数据以及OperateData数据
        NavigationBar.prototype.setDataSelectedIndex = function (idx) {
            this.DataSelectedIndex = idx;
            this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
            this.setCurrentSelectTree();
        }

        NavigationBar.prototype.disabledItem = function (disItems) {
            this.disableItem = disItems;
        }

        NavigationBar.prototype.getLastPageFlag = function () {
            //判断是否是最后一页
            if (this.BeginIdx + this.PageSize >= this.data.Data.length) {
                return true;
            }
            else {
                return false;
            }
        }
        NavigationBar.prototype.getFirstPageFlag = function () {
            //判断是否是第一页
            if (this.BeginIdx == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        NavigationBar.prototype.disabled = function () {
            this.disable = true;
            this.refreshCss();
        }
        NavigationBar.prototype.enabled = function () {
            this.disable = false;
            this.refreshCss();
        }
        NavigationBar.prototype.changeDataOnly = function () {
            var tempData = eval('this.page.data' + this.dataPath + '');
            if (!!tempData) {
                //赋值
                //关于disable处理
                //设置数据changeDataOnly中的disable
                if (tempData.disable != undefined && tempData.disable != this.disable) {
                    this.disable = !this.disable;
                    if (this.disable) {
                        this.disabled();
                    } else {
                        this.enabled();
                    }
                }
                if (tempData.disableItem != undefined)this.disableItem = tempData.disableItem;
                if (tempData.SelectedIndex != undefined) {
                    this.SelectedIndex = tempData.SelectedIndex;
                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                }
                if (tempData.DataSelectedIndex != undefined) {
                    this.DataSelectedIndex = tempData.DataSelectedIndex;
                    this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
                }

                var temp_isChange = false;
                //关于数据项Disable处理
                if (tempData.disableItem != undefined && tempData.disableItem.length != 0) {
                    this.disableItem = tempData.disableItem;
                    temp_isChange = true;
                }
                //关于selectedindex处理
                if (tempData.SelectedIndex != undefined && this.SelectedIndex != tempData.SelectedIndex) {
                    this.SelectedIndex = tempData.SelectedIndex;
                    this.data.SelectedIndex = this.SelectedIndex;//6-20
                    temp_isChange = true;
                }
                //关于dataSelectedIndex处理
                if (tempData.DataSelectedIndex != undefined && this.DataSelectedIndex != tempData.DataSelectedIndex) {
                    this.DataSelectedIndex = tempData.DataSelectedIndex;
                    this.data.DataSelectedIndex = this.DataSelectedIndex;//6-20
                    temp_isChange = true;
                }
                this.refreshCss();
                //console.log('tempData.DataSelectedIndex:' + tempData.DataSelectedIndex)
                //console.log('this.DataSelectedIndex:' + this.DataSelectedIndex)

                //调用子节点changeDataOnly
                $.each(this.children, function (key, val) {
                    //-GHL_DEL-//console.log(val.id)
                    val.changeDataOnly();
                });
            }
        }
        NavigationBar.prototype.refreshCss = function () {
            for (var key = this.BeginIdx; key < Math.min(this.BeginIdx + this.PageSize, this.data.Data.length); key++) {
                if (!!this.classes && !!this.classes.normal) {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disableDataSelected);
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.dataSelected);
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.normal);
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {

                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.disable);
                            }
                        } else {
                            if (_getCurrentFocus() == this.id) {
                                if(this.DoubleClass && key == this.DataSelectedIndex){
                                    $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.focus + " " + this.classes.dataSelected);
                                }
                                else{
                                    $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.focus);
                                }
                            } else {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', this.classes.selected);
                            }
                        }
                    }
                } else {
                    if (this.DataSelectedIndex != undefined && this.DataSelectedIndex - this.BeginIdx >= 0 && key == this.DataSelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disableDataSelected');
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'dataSelected');
                        }
                    }
                    else {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disable');
                        } else {
                            $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'normal');
                        }
                    }
                    if (this.SelectedIndex != undefined && this.SelectedIndex - this.BeginIdx >= 0 && key == this.SelectedIndex) {
                        if (!!this.disable || (this.disableItem && $.inArray(key, this.disableItem) != -1)) {
                            if (key != this.DataSelectedIndex) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'disable');
                            }
                        } else {
                            if (_getCurrentFocus() == this.id) {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'focus');
                            } else {
                                $('#' + this.id + '>li').eq((key - this.BeginIdx)).attr('class', 'selected');
                            }
                        }
                    }
                }
            }
        }


        //Epg横向列表控件end

        //Slider控件
        function Slider(data, opts, page, parent) {
            HiComponent.call(this, data, opts, page, parent);
            defaults = {
                initPosition: 'max',
                enable: true,
                size: { barWidth: 200, sliderWidth: 5 },
                spanstyle: "int",
                setDefalutValue: 10
            };
            var setting = $.extend({}, defaults, opts.SliderConfig);
//            this.SliderValue = setting.setDefalutValue || data.Data.setDefalutValue;
            this.SliderValue = data.Data.setDefalutValue;
            debugPrint("--------this.SliderValue##&&:" + data.Data.setDefalutValue);
            this.CaELib = [];
            this.CaE = opts.CaE;
            var _this = this;
            this.config = opts.SliderConfig;
            this.opts.SliderConfig = opts.SliderConfig;
            _AnalyzeCaE(_this, this.CaELib, this.page);
            initSlider(opts, data);
            function initSlider(slidercfg, data) {

                var sliderbar = $('#' + slidercfg.SliderConfig.sliderbarId).attr('class',
                        _getCaEFromCaELibById(slidercfg.CaE, slidercfg.SliderConfig.sliderbarId).classes.normal)
                    .css('width', data.Data.size.barWidth);
                var completedbar = $('#' + slidercfg.SliderConfig.completeId).attr('class',
                    _getCaEFromCaELibById(slidercfg.CaE, slidercfg.SliderConfig.completeId).classes.normal);

                var slider = $('#' + slidercfg.SliderConfig.sliderId).attr('class',
                    _getCaEFromCaELibById(slidercfg.CaE, slidercfg.SliderConfig.sliderId).classes.normal).css('width', data.Data.size.sliderWidth);
                ;
                if (typeof window.$sliderProcess == 'undefined') {
                    window.$sliderProcess = new Function('obj1', 'obj2', 'left',
                        'obj1.css(\'left\',left);obj2.css(\'width\',left);');
                }
                var bw = sliderbar.css("width").replace(/[^\d\.]/g, ''), sw = slider.css("width").replace(/[^\d\.]/g, '');
                if (!!slidercfg.SliderConfig.sliderMinValueId && !!slidercfg.SliderConfig.sliderMaxValueId) {
                    $('#' + slidercfg.SliderConfig.sliderMinValueId).html(data.Data.range.min);
                    $('#' + slidercfg.SliderConfig.sliderMaxValueId).html(data.Data.range.max);

                }

                //bw,sw用来存储sliderbar和slider的长度
                //make sure that the slider was displayed in the bar(make a limited)
                slidercfg.limited = { min: 0, max: bw - sw };
                //-GHL_DEL-//console.log(slidercfg.limited);
                slidercfg.changeBar = {sliderbar: sliderbar, completedbar: completedbar, slider: slider};
                $sliderProcess(slider, completedbar, eval('slidercfg.limited.' + data.Data.initPosition));
                $('#' + slidercfg.SliderConfig.sliderSpanId).html(eval('data.Data.range.' + data.Data.initPosition));
                //增加是否是整数的判断
                if (data.Data.setDefalutValue <= data.Data.range.max && data.Data.setDefalutValue >= data.Data.range.min) {
                    setSliderValue(slidercfg, data.Data.setDefalutValue, function (showValue) {
                        $('#' + slidercfg.SliderConfig.sliderSpanId).html(Math.round(showValue));

                    });
                }

            }

            function setSliderValue(slidercfg, v, callback) {
                try {
                    //validate
                    if (typeof v == 'undefined' || v < data.Data.range.min || v > data.Data.range.max) {
                        throw new Error('\'v\' must be a Float variable between 0 and 1.');
                    }
                    var value = Math.round((v - data.Data.range.min) / (data.Data.range.max - data.Data.range.min) * 10000 * slidercfg.limited.max) / 10000;
                    //-GHL_DEL-//console.log(value);
                    //-GHL_DEL-//console.log(data);
                    //-GHL_DEL-//console.log(v);
                    $sliderProcess(slidercfg.changeBar.slider, slidercfg.changeBar.completedbar, value);
                    if (typeof callback != 'undefined') {
                        callback(v);
                    }
                }
                catch (e) {
                    alert(e.message);
                }
            }


        }

        extend(Slider, HiComponent);
        Slider.prototype.changeDataOnly = function () {
            //Slider  disable
            var tempData = eval('this.page.data' + this.dataPath + '');
            if (tempData.disable != undefined && tempData.disable != this.disable) {
                this.disable = !this.disable;
                if (this.disable) {
                    this.disabled();
                } else {
                    this.enabled();
                }
            }
            $.each(this.children, function (k, v) {
                v.changeDataOnly(v.data);
            })

        }
        Slider.prototype.disabled = function () {
            this.disable = true;
            this.refreshSlider();
        }
        Slider.prototype.enabled = function () {
            this.disable = false;
            this.refreshSlider();
        }
        Slider.prototype.refreshSlider = function () {
            if (!!this.disable) {
                if (!!this.id && !!this.classes.disable) {
                    $('#' + this.id).attr('class', this.classes.disable);
                }
                else {
                    $('#' + this.id).attr('class', 'disable');
                }
                $.each(this.children, function (k, v) {
                    v.disabled();
                })
            }
            else {
                if (!!this.id && !!this.classes.normal) {
                    $('#' + this.id).attr('class', this.classes.normal);
                }
                else {
                    $('#' + this.id).attr('class', 'normal');
                }
                $.each(this.children, function (k, v) {
                    v.enabled();
                })
            }


        }
        Slider.prototype.hiFocus = function () {
            //2014-9-22
            if (!!this.onFocusFun) {
                if (typeof this.onFocusFun == 'function') {
                    this.onFocusFun.call(this);
                }
                else if (typeof this.onFocusFun == 'string') {
                    eval(this.onFocusFun + '.call(this)');
                }
            }
            //Slider焦点处理
            if (!!this.firstFocusId) {
                _getCaEFromCaELibById(this.CaELib, this.firstFocusId).hiFocus();
            }
            else {
                this.setCurrentSelectTree();
            }

        }
        Slider.prototype.hiBlur = function () {

        }
        Slider.prototype.hiSliderValue = function (v) {
            if (v <= this.data.Data.range.max && v >= this.data.Data.range.min) {
                var value = (v - this.data.Data.range.min) / (this.data.Data.range.max - this.data.Data.range.min);
                $sliderProcess(this.opts.changeBar.slider, this.opts.changeBar.completedbar, value * this.opts.limited.max);
                $('#' + this.opts.SliderConfig.sliderSpanId).html(Math.round(v));
                this.SliderValue = v;

            }

        }
        Slider.prototype.hiSliderMoveLeft = function () {

            var width = Math.round(this.opts.changeBar.completedbar.css("width").replace(/[^\d\.]/g, '') * 10000) / 10000;
            //-GHL_DEL-//console.log(width);
            if (this.opts.limited.min < Math.round(width * 100) / 100 && this.opts.limited.max >= Math.round(width * 100) / 100 && (this.data.Data.range.max - this.data.Data.range.min) != 0) {
                var curLeft = Math.round((width - this.data.Data.step * this.opts.limited.max / (this.data.Data.range.max - this.data.Data.range.min)) * 10000) / 10000;
                curLeft = curLeft < 0.00001 ? 0 : curLeft;
                //-GHL_DEL-//console.log(curLeft);
                $sliderProcess(this.opts.changeBar.slider, this.opts.changeBar.completedbar, curLeft);
                width = this.opts.changeBar.completedbar.css("width").replace(/[^\d\.]/g, '');
                var value = Math.round(width / this.opts.limited.max * (this.data.Data.range.max - this.data.Data.range.min) + this.data.Data.range.min);
                if (this.opts.limited.max > 0) {
                    $('#' + this.opts.SliderConfig.sliderSpanId).html(value);
                }
                this.SliderValue = value;
                //-GHL_DEL-//console.log(value);

            }

        }
        Slider.prototype.hiSliderMoveRight = function () {
            var width = Math.round(this.opts.changeBar.completedbar.css("width").replace(/[^\d\.]/g, '') * 10000) / 10000;
            if (this.opts.limited.min <= Math.round(width * 100) / 100 && this.opts.limited.max > Math.round(width * 100) / 100 && (this.data.Data.range.max - this.data.Data.range.min) != 0) {
                var curLeft = Math.round((width + this.data.Data.step * this.opts.limited.max / (this.data.Data.range.max - this.data.Data.range.min)) * 10000) / 10000;
                //-GHL_DEL-//console.log(curLeft);
                if (curLeft > this.opts.limited.max) {
                    curLeft = this.opts.limited.max;
                }
                $sliderProcess(this.opts.changeBar.slider, this.opts.changeBar.completedbar, curLeft);
                width = this.opts.changeBar.completedbar.css("width").replace(/[^\d\.]/g, '');
                var value = Math.round(width / this.opts.limited.max * (this.data.Data.range.max - this.data.Data.range.min) + this.data.Data.range.min);
                if (value > this.data.Data.range.max) {
                    value = this.data.Data.range.max;
                }
                if (this.opts.limited.max > 0) {
                    $('#' + this.opts.SliderConfig.sliderSpanId).html(value);
                }
                this.SliderValue = value;
                //-GHL_DEL-//console.log(value);
            }

        }

        //Slider控件end

        //SwitchDiv控件
        function SwitchDiv(data, opts, page, parent) {
            HiComponent.call(this, data, opts, page, parent);

            //关于data的处理，构建SwitchDiv传入data有两种方式，一种是参数中给定，另一种是通过标签的data携带；
            // 其中后一种方式在列表等自动生成html过程中赋值。第一种方式优先级高
            if (data == undefined && $('#' + this.id).data('linkData') != undefined) {
                data = $('#' + this.id).data('linkData');
            }
            var _this = this;
            this.data = data;
            this.hiSwitch.call(this, this.data.Data);

        };
        extend(SwitchDiv, HiComponent);
        //增加Switch的转换图片的方法，可直接将值传递给此方法，进行更改图片
        //a:当a为''时，此switchdiv隐藏；当a为true时，显示openimg；当a为false时，显示closeimg;
        SwitchDiv.prototype.hiSwitch = function (a) {
            var imglist = this.opts.imageList,
                imgSrc = !!a ? ((!!imglist && !!imglist.openImg) ? imglist.openImg : '') : ((!!imglist && !!imglist.closeImg) ? imglist.closeImg : '');
            if ($.trim(a) != '' && $.trim(imgSrc) != '' && !!this.id) {
                $('#' + this.id).css('display', 'inline-block');
                $('#' + this.id).find('img').attr('src', imgSrc);
            }
            else {
                $('#' + this.id).css('display', 'none');
            }
        }
        SwitchDiv.prototype.changeDataOnly = function () {
            var tempData = eval('this.page.data' + this.dataPath + '');
            this.hiSwitch(tempData.Data);

            //设置数据changeDataOnly中的disable
            if (tempData.disable != undefined && tempData.disable != this.disable) {
                if (tempData.disable) {
                    this.disable = true;
                } else {
                    this.disable = false;
                }
            }
            if (countDisable(this)) {
                this.disabled();
            }
            else {
                this.enabled();
            }
        }
        SwitchDiv.prototype.disabled = function () {//2014-5-24
            this.disable = true;
            if (!!this.classes && !!this.classes.disable) {
                $('#' + this.id).attr('class', this.classes.disable);
            } else {
                $('#' + this.id).attr('class', "disable");
            }
        }
        SwitchDiv.prototype.enabled = function () {
            this.disable = false;
            if (_getCurrentFocus() == this.id && !!this.classes && !!this.classes.focus) {
                if (!!this.classes && !!this.classes.focus) {
                    $('#' + this.id).attr('class', this.classes.focus);
                } else {
                    $('#' + this.id).attr('class', "focus");
                }
            }
            else {
                if (!!this.classes && !!this.classes.normal) {
                    $('#' + this.id).attr('class', this.classes.normal);
                } else {
                    $('#' + this.id).attr('class', "normal");
                }
            }
        }


        //创建开关控件
        function FlipSwitch(data, opts, page, parent) {
            HiComponent.call(this, data, opts, page, parent);
            defaults = {
                "SwitchType": true,
                "SwitchRadio": "50%"
            }
            var setting = $.extend({}, defaults, opts.FlipSwitchConfig);
            this.SwitchType = setting.SwitchType || data.Data[setting.switchTypeId];

            if (!data && !!$('#' + this.id).data('linkData')) {
                data = $('#' + this.id).data('linkData');
            }
            this.data = data;
            if (!!this.id && !!this.data) {
                $('#' + this.id).data('linkData', this.data.Data[setting.switchTypeId]);
            }
            this.hiFlipSwitch.call(this, this.data.Data[setting.switchTypeId]);
        };
        extend(FlipSwitch, HiComponent);
        //增加FlipSwitch的转换开关的方法，可直接将值传递给此方法，更改当前显示开关状态
        //a:当a为true时，默认右边为显示状态；当a为false时，默认左边为显示状态;
        FlipSwitch.prototype.hiFlipSwitch = function (a) {
            if (!!this.id && !!this.data && a != undefined && !!this.opts.FlipSwitchConfig) {
                var direct = !!a ? 'right' : 'left',
                    flipSwitchClass = !!a ? ' FlipSwitchOn' : ' FlipSwitchOff',
                    tempLangData = eval('langPackages["' + this.data.Data[this.opts.FlipSwitchConfig.switchTextId] + '"]');
                var newClass = $('#' + this.id).attr('class').split(' ')[0] + flipSwitchClass;
                $('#' + this.id).css('text-align', direct)
                    .attr('class', newClass)
                    .children()
                    .html(((!!tempLangData) ? tempLangData[0] : this.data.Data[this.opts.FlipSwitchConfig.switchTextId]))//OneLangPackage
                    .css({width: this.opts.SwitchRadio});
                this.SwitchType = a;
            }
        }
        FlipSwitch.prototype.changeDataOnly = function (a) {
            var tempData = eval('this.page.data' + this.dataPath + '');
            this.hiFlipSwitch(tempData.Data[this.opts.FlipSwitchConfig.switchTypeId]);

            //设置数据changeDataOnly中的disable
            if (tempData.disable != undefined && tempData.disable != this.disable) {
                if (tempData.disable) {
                    this.disable = true;
                } else {
                    this.disable = false;
                }
            }
            if (countDisable(this)) {
                this.disabled();
            }
            else {
                this.enabled();
            }
        }

        FlipSwitch.prototype.disabled = function () {//2014-5-24
            this.disable = true;
            var newClass = !!this.SwitchType ? ' FlipSwitchOn' : ' FlipSwitchOff';
            if (!!this.classes && !!this.classes.disable) {
                $('#' + this.id).attr('class', this.classes.disable + newClass);
            } else {
                $('#' + this.id).attr('class', "disable" + newClass);
            }
        }
        FlipSwitch.prototype.enabled = function () {
            this.disable = false;
            var newClass = !!this.SwitchType ? ' FlipSwitchOn' : ' FlipSwitchOff';
            if (_getCurrentFocus() == this.id && !!this.classes && !!this.classes.focus) {
                if (!!this.classes && !!this.classes.focus) {
                    $('#' + this.id).attr('class', this.classes.focus + newClass);
                } else {
                    $('#' + this.id).attr('class', "focus" + newClass);
                }
            }
            else {
                if (!!this.classes && !!this.classes.normal) {
                    $('#' + this.id).attr('class', this.classes.normal + newClass);
                } else {
                    $('#' + this.id).attr('class', "normal" + newClass);
                }
            }
        }

        /*****************FlipSwitch end***************************/

        function _cloneObj(obj) {
            return $.extend({}, obj);
        };

        function __isInSelf(a, id) {
            //todo
            for (var i = 0; i < a.length; i++) {
                if (a[i] == id)return true;
            }
            return false;
        }

        //从CaELib中获取部件，参数（CaELib，id）
        function _getCaEFromCaELibById(caeLib, id) {
            for (var i = 0; i < caeLib.length; i++) {
                if (caeLib[i].id == id)return caeLib[i];
            }
            return null;
        }

        function _AnalyzeCaE(ccp, ccpLib, page) {
            /*currentComponent.componentsAndButtons = [];
             var trunkData={};
             if(ccp.CaEType==undefined){
             //此时表示Page
             trunkData.Data=ccp.data;
             console.log('----page')
             }else{
             //此时表示复合部件
             trunkData=ccp.data;
             console.log('----component')

             }
             alert(ccp.CaEType)
             console.log(ccp.CaE)*/
            $.each(ccp.CaE, function (key, val) {
                var _tempCaE;
                //console.log('---------------' + val.id + '   ' + val.CaEType);
                switch (val.CaEType) {
                    case 'span':
                        //console.log(val.id)
                        //console.log(trunkData.Data[val.id])
                        //console.log(trunkData)
                        _tempCaE = new HiButton(ccp.data[val.id], val, page, ccp);
                        //console.log(_tempCaE.pIndex)
                        //console.log(_tempCaE.pName)
                        //console.log(_tempCaE.dataPath);

                        //_tempCaE.parent = ccp;
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);  //存在parent就不能放在该数组中
                        }
                        break;
                    case 'div':
                        _tempCaE = new HiButton(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'img':
                        _tempCaE = new HiButton(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break
                    case 'input':
                        _tempCaE = new HiButton(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'Ul':
                        _tempCaE = new Ul(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'GridUl':
                        _tempCaE = new GridUl(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'GridList':
                        _tempCaE = new GridList(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'NavigationBar':
                        _tempCaE = new NavigationBar(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'SwitchDiv':
                        _tempCaE = new SwitchDiv(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable || !!_tempCaE.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'FlipSwitch':
                        _tempCaE = new FlipSwitch(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable || !!_tempCaE.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'Container':
                        _tempCaE = new Container(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'Tabs':
                        _tempCaE = new Tabs(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'button':
                        _tempCaE = new button(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'ProgressBar':
                        _tempCaE = new ProgressBar(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (_tempCaE.PCB != 'page' && _tempCaE.parent.PCB != 'page' && _inArray(_tempCaE, _tempCaE.page.componentsAndButtons) == -1) {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    case 'Slider':
                        _tempCaE = new Slider(ccp.data[val.id], val, page, ccp);
                        ccp.children.push(_tempCaE);//2014-5-24
                        if (!!val.disable || !!_tempCaE.disable) {//加入disable处理2014-5-24
                            _tempCaE.disable = true;
                            _tempCaE.disabled();
                        }
                        ccpLib.push(_tempCaE);
                        if (this.PCB != 'page') {
                            _tempCaE.page.componentsAndButtons.push(_tempCaE);
                        }
                        break;
                    default:
                        break;
                }
            });
        }

        function _inArray(a, b) {
            for (var i = 0; i < b.length; i++) {
                if (a.id == b[i].id)return 1;
            }
            return -1;
        }

        //根据Id值获取json中的数据项(json,id)
        function _getItemById(a, b) {
            for (var i = 0; i < a.length; i++) {
                if (a[i].id == b)return a[i];
            }
            return null;
        }

        //a:当前Index，b:disableArray,c:是否参与计算
        function _getPreIndex(a, b) {
            for (var i = a - 1; i >= 0; i--) {
                if ($.inArray(i, b) == -1)return i;
            }
            return a;
        }

        //a:当前Index，b：disableArray,c:Length
        function _getNextIndex(a, b, c) {
            for (var i = a + 1; i < c; i++) {
                if ($.inArray(i, b) == -1)return i;
            }
            return a;
        }

        //参考 _getPreIndex，但是该控件适合从另外控件导航进入到Ul的情况
        function _getPreIndexEq(a, b) {
            for (var i = a; i >= 0; i--) {
                if ($.inArray(i, b) == -1)return i;
            }
            return -1;
        }

        //参考 _getNextIndex，但是该控件适合从另外控件导航进入到Ul的情况
        function _getNextIndexEq(a, b, c) {
            for (var i = a; i < c; i++) {
                if ($.inArray(i, b) == -1)return i;
            }
            return -1;
        }


        function button(data, opts, page, parent) {
            HiComponent.call(this, data, opts, page, parent);

        };
        extend(button, HiComponent);


        /*从Page中根据id获取按钮或者控件(pageObj,CaEid)
         function _getCaEFromPageById(a,b){
         for(var i=0;i< a.componentsAndButtons.length;i++){
         if(a.componentsAndButtons[i].id===b)return a.componentsAndButtons[i];
         }
         return null;
         }*/

        function extend(subClass, superClass) {
            var F = function () {
            };
            F.prototype = superClass.prototype;
            subClass.prototype = new F();
            subClass.prototype.constructor = subClass;
            subClass.superclass = superClass.prototype; //加多了个属性指向父类本身以便调用父类函数
            if (superClass.prototype.constructor == Object.prototype.constructor) {
                superClass.prototype.constructor = superClass;
            }
        }

        //HiPage($obj,opts)
        function HiPage(data, opts) {
            this.data = data;
            if (!!this.data.operateData) {
                this.operateData = this.data.operateData;
            } else {
                this.operateData = {};
            }
            if (!!this.data.langData) {
                this.langData = this.data.langData;
            } else {
                this.langData = {};
            }
            this.opts = opts;

            var _this = this;//在函数中引用
            this.page = _this;//设定页面的Page属性，未验证
            this.PCB = 'page';
            this.children = [];//2014-5-24
            this.dataPath = '';

            if (!!opts.id)this.id = opts.id;
            if (!!opts.description)this.description = opts.description;
            if (!!opts.firstFocusId)this.firstFocusId = opts.firstFocusId;
            if (!!opts.groupNavMode)this.groupNavMode = opts.groupNavMode;
            if (!!opts.singleKeyMode)this.singleKeyMode = opts.singleKeyMode;//该页面是否独立处理按键
            if (!!opts.filterRepeatKeys) {
                this.filterRepeatKeys = opts.filterRepeatKeys;
            } else {
                this.filterRepeatKeys = false;
            }//是否过滤repeat，默认为不过滤

            if (!!opts.noRepeatKeys) {
                this.noRepeatKeys = opts.noRepeatKeys;
            } else {
                this.noRepeatKeys = [];
            }//页面级别不重复按键集合2015-11-25 Lu

            if (!!opts.keyEventSet)this.keyEventSet = opts.keyEventSet;//页面独立按键事件设置
            //keyEventSet形式如：
            //{"keyDown":"myKeyDown","keyUp":"myKeyUp","keyPress":"myKeyPress"}
            if (!!opts.horizontalEdgesJump)this.horizontalEdgesJump = opts.horizontalEdgesJump;
            if (!!opts.verticalEdgesJump)this.verticalEdgesJump = opts.verticalEdgesJump;
            if (!!opts.autoLocation)this.autoLocation = opts.autoLocation;//ver1.5
            if (!!opts.CaE)this.CaE = opts.CaE;
            if (!!opts.AutoClose) {
                this.AutoClose = opts.AutoClose;
            } else {
                this.AutoClose = false;
            }
            if (!!opts.AutoCloseTimeLength) {
                this.AutoCloseTimeLength = opts.AutoCloseTimeLength;
                this.pageAutoCloseTimeLength = opts.AutoCloseTimeLength;
                this.isACFromSysValue = false;//是否使用系统过期时间
            } else {
                this.isACFromSysValue = true;
            }
            if (!!opts.isStatic) {
                this.isStatic = opts.isStatic;
            } else {
                this.isStatic = false;
            }

            if (!!opts.name)this.name = opts.name;
            if (!!opts.handler)this.handler = opts.handler;

            if (!!opts.module)this.module = opts.module;
            if (!!opts.htmlPath)this.htmlPath = opts.htmlPath;
            if (!!opts.jsPath)this.jsPath = opts.jsPath;
            if (!!opts.initData)this.initData = opts.initData;
            if (!!opts.onCreate)this.onCreate = opts.onCreate;
            if (!!opts.onOpen)this.onOpen = opts.onOpen;
            if (!!opts.onClose)this.onClose = opts.onClose;
            if (!!opts.onFocus)this.onFocus = opts.onFocus;
            if (!!opts.onBlur)this.onBlur = opts.onBlur;
            if (!!opts.onDestroy)this.onDestroy = opts.onDestroy;
            if (!!opts.onAutoClose)this.onAutoClose = opts.onAutoClose;
            if (!!opts.pageData)this.pageData = opts.pageData;
            if (!!opts.keys)this.keys = opts.keys;
            if (!!opts.animation)this.animation = opts.animation;
            if (!!opts.receiveAnyKey)this.receiveAnyKey = opts.receiveAnyKey;
            if (!!opts.pageKeyMapFun)this.pageKeyMapFun = opts.pageKeyMapFun;//2015-4-15 页面级别按键映射
            if (opts.noRepeatKeys != undefined) {
                this.noRepeatKeys = opts.noRepeatKeys;
            } else {
                this.noRepeatKeys = [];
            }

            //Page以下属性，在CreatePage中进行赋值
            this.dom = null;
            this.visible = false;
            this.priority = 0;
            this.origin = null;

            this.currentSelectedTree = []; //按钮树概念，修改为currentSelectedTree
            this.currentSelectedIndexTree = [];//按钮树中的每个节点包含两部分内容，该数组用于记录选中的Index值

            this.pageMode = !!opts.pageMode ? opts.pageMode : 'module';//三种页面类型module、single、dialog
            //ver1.2
            this.pageType = !!opts.pageType ? opts.pageType : 'common';

            this.componentsAndButtons = [];
            //-GHL_DEL-//console.log(this)
            _AnalyzeCaE(this, this.componentsAndButtons, this);

            //console.log('page<' + this.description + '> is created;');

            if (typeof HiPage.initialize == 'undefined') {
                HiPage.prototype.PCBKeyDownHandler = function (event) {
                    //console.log('页面事件处理程序');//关键Log

                    return keyDownImp.call(this, event);
                    //return true;
                }
                HiPage.prototype.close = function (isAutoClose) {
                    var stThis = this;
                    if (!!this.animation && !!this.animation.winClose && !!this.animation.winClose.enable) {
                        var aniTarget = {};
                        var aniTargets = [];
                        var aniSeries = !!this.animation.winClose.series ? this.animation.winClose.series : false;
                        var aniSpeed = "slow";
                        var aniSpeeds = [];
                        if (!!this.animation.winClose.effects) {
                            for (var i = 0; i < this.animation.winClose.effects.length; i++) {
                                var x = this.animation.winClose.effects[i];
                                if (x.mode == "fadeOut") {
                                    $('#' + stThis.id).css('opacity', '1');
                                    if (aniSeries) {
                                        aniTargets.push({opacity: '0'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.opacity = '0';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "leftFlip") {
                                    $('#' + stThis.id).css('transform', 'translateX(0px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateX(-' + (x.param.length > 0 ? x.param[0] : 0) + 'px)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateX(-' + (x.param.length > 0 ? x.param[0] : 0) + 'px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "rightFlip") {
                                    $('#' + stThis.id).css('transform', 'translateX(0px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateX(' + (x.param.length > 0 ? x.param[0] : 0) + 'px)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateX(' + (x.param.length > 0 ? x.param[0] : 0) + 'px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "upFlip") {
                                    $('#' + stThis.id).css('transform', 'translateY(0px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateY(-' + (x.param.length > 0 ? x.param[0] : 0) + 'px)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateY(-' + (x.param.length > 0 ? x.param[0] : 0) + 'px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "downFlip") {
                                    $('#' + stThis.id).css('transform', 'translateY(0px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateY(' + (x.param.length > 0 ? x.param[0] : 0) + 'px)' });
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateY(' + (x.param.length > 0 ? x.param[0] : 0) + 'px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "scale") {
                                    $('#' + stThis.id).css('transform', 'scale(1,1)');
                                    $('#' + stThis.id).css('transform-origin', '' + (x.param.length > 2 ? x.param[2] : '50%') + ' ' + (x.param.length > 3 ? x.param[3] : '50%'));
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'scale(' + (x.param.length > 0 ? x.param[0] : 1) + ',' + (x.param.length > 1 ? x.param[1] : (x.param.length > 0 ? x.param[0] : 1)) + ')'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'scale(' + (x.param.length > 0 ? x.param[0] : 1) + ',' + (x.param.length > 1 ? x.param[1] : (x.param.length > 0 ? x.param[0] : 1)) + ')';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                            }
                        }

                        setTimeout(function () {
                            if (aniSeries) {
                                for (var i = 0; i < aniTargets.length; i++) {
                                    $('#' + stThis.id).animate(
                                        aniTargets[i], aniSpeeds[i]
                                    );
                                }
                            } else {
                                $('#' + stThis.id).animate(
                                    aniTarget, aniSpeed
                                );
                            }
                        }, 200);


//                        $('#' + this.id).animate(
//                            { transform: 'translateX(-500px)', opacity: '0'}
//                        );
//                        setTimeout(function () {
//                            $('#div1').css('display', 'none')
//                        }, 500);
                    } else {
                        //无动画
                        $('#' + this.id).css('display', 'none');
                    }

                    if (!!this.onClose) {
                        if (typeof this.onClose == 'function') {
                            this.onClose.call(this);
                        }
                        else if (typeof this.onClose == 'string') {
                            eval(this.onClose + '.call(this)');
                        }
                    }

                    if (this.id == getCurrentPageId() && !!isAutoClose && !!this.onAutoClose) {
                        if (typeof this.onAutoClose == 'function') {
                            this.onAutoClose.call(this);
                        }
                        else if (typeof this.onAutoClose == 'string') {
                            eval(this.onAutoClose + '.call(this)');
                        }
                    }


                    this.visible = false;
                    if (!!hiSDKSettings.winCloseFun) {
                        hiSDKSettings.winCloseFun(this.id);
                    }
                }
                HiPage.prototype.pause = function () {
                    $('#' + this.id).css('display', 'none');
                    this.visible = false;
                }
                HiPage.prototype.open = function () {
                    var stThis = this;
                    if (!!this.animation && !!this.animation.winOpen && !!this.animation.winOpen.enable) {
                        var aniTarget = {};
                        var aniTargets = [];
                        var aniSeries = !!this.animation.winOpen.series ? this.animation.winOpen.series : false;
                        var aniSpeed = "slow";
                        var aniSpeeds = [];
                        if (!!this.animation.winOpen.effects) {
                            for (var i = 0; i < this.animation.winOpen.effects.length; i++) {
                                var x = this.animation.winOpen.effects[i];
                                if (x.mode == "fadeIn") {
                                    $('#' + stThis.id).css('opacity', '0');
                                    if (aniSeries) {
                                        aniTargets.push({opacity: '1'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.opacity = '1';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "leftFlip") {
                                    $('#' + stThis.id).css('transform', 'translateX(' + (x.param.length > 0 ? x.param[0] : 0) + 'px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateX(0px)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateX(0px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "rightFlip") {
                                    $('#' + stThis.id).css('transform', 'translateX(-' + (x.param.length > 0 ? x.param[0] : 0) + 'px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateX(0px)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateX(0px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "upFlip") {
                                    $('#' + stThis.id).css('transform', 'translateY(' + (x.param.length > 0 ? x.param[0] : 0) + 'px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateY(0px)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateY(0px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "downFlip") {
                                    $('#' + stThis.id).css('transform', 'translateY(-' + (x.param.length > 0 ? x.param[0] : 0) + 'px)');
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'translateY(0px)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'translateY(0px)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                if (x.mode == "scale") {
                                    $('#' + stThis.id).css('transform', 'scale(' + (x.param.length > 0 ? x.param[0] : 1) + ',' + (x.param.length > 1 ? x.param[1] : (x.param.length > 0 ? x.param[0] : 1)) + ')');
                                    $('#' + stThis.id).css('transform-origin', '' + (x.param.length > 2 ? x.param[2] : '50%') + ' ' + (x.param.length > 3 ? x.param[3] : '50%'));
                                    if (aniSeries) {
                                        aniTargets.push({transform: 'scale(1,1)'});
                                        aniSpeeds.push(!!x.speed ? x.speed : "slow");
                                    } else {
                                        aniTarget.transform = 'scale(1,1)';
                                        aniSpeed = !!x.speed ? x.speed : "slow";
                                    }
                                }
                                /*if (x.mode == "width") {
                                 aniTarget.width = 'toggle';
                                 }*/
                            }
                        }

                        $('#' + stThis.id).css('display', 'block');
                        $('#' + stThis.id).css('z-index', stThis.priority);
                        setTimeout(function () {
                            if (aniSeries) {
                                for (var i = 0; i < aniTargets.length; i++) {
                                    $('#' + stThis.id).animate(
                                        aniTargets[i], aniSpeeds[i]
                                    );
                                }

//                                $('#' + stThis.id).animate({width:'100px',opacity:'0.9'},"slow");

                            } else {
                                $('#' + stThis.id).animate(
                                    aniTarget, aniSpeed
                                );
                            }
                        }, 200);
                    } else {
                        $('#' + this.id).css('display', 'block');
                        $('#' + this.id).css('z-index', this.priority);
                    }

                    if (!!stThis.onOpen) {
                        if (typeof stThis.onOpen == 'function') {
                            this.onOpen.call(stThis);
                        }
                        else if (typeof stThis.onOpen == 'string') {
                            eval(stThis.onOpen + '.call(this)');
                        }
                    }

                    if (!!hiSDKSettings.winOpenFun) {
                        hiSDKSettings.winOpenFun(stThis.id);
                    }

                    stThis.visible = true;//修改为激活状态
                }
                HiPage.prototype.resume = function () {
                    $('#' + this.id).css('display', 'block');
                    this.visible = true;
                }
                HiPage.prototype.hiFocus = function (a) {
                    //重置定时器2014-10-30
                    clearInterval(sh);
                    sh = setInterval(_timerFun, 1000);
                    timer = 0;

                    $('#' + this.id).css('display', 'block');
                    $('#' + this.id).css('z-index', this.priority);
                    this.visible = true;
//                    var b = (!!a) ? a : this.firstFocusId;
                    var b;
                    hiSDKSettings.currentPage = this;//改变页面
                    if (!!a) {
                        if (this.pageType == "combine") {//ver1.2
                            hiSDKSettings.cb_TBSign = 0;
                            console.log("cb_TBSign设置为0");
                        }
                        b = a;
                    } else {
                        if (this.pageType == "combine") {//ver1.2
                            hiSDKSettings.cb_TBSign = 0;
                            console.log("cb_TBSign设置为0");
                            if (!!hiSDKSettings.cb_currentFocus) {
                                b = hiSDKSettings.cb_currentFocus.id;
                            } else {
                                if (!!this.currentSelectedTree && this.currentSelectedTree.length > 0) {
                                    b = this.currentSelectedTree[this.currentSelectedTree.length - 1].id;
                                } else {
                                    b = this.firstFocusId;
                                }
                            }
                        } else {
                            if (!!this.currentSelectedTree && this.currentSelectedTree.length > 0) {
                                b = this.currentSelectedTree[this.currentSelectedTree.length - 1].id;
                            } else {
                                b = this.firstFocusId;
                            }
                        }
                    }
                    if (!!b) {
                        this.getCaE(b).hiFocus();
                        //ver1.2 加入组合焦点控制项目
                        if (this.pageType == "combine") {
                            if (hiSDKSettings.cb_relativeLeft == undefined)
                                hiSDKSettings.cb_relativeLeft = 0;//右侧偏移量
                            hiSDKSettings.cb_currentFocus = this.getCaE(b);//当前焦点
                            hiSDKSettings.cb_currentTemplateSign = hiSDKSettings.cb_currentFocus.templateSign;//当前哪个模版处于激活状态
                            hiSDKSettings.cb_currentTemplateIdx = hiSDKSettings.cb_currentFocus.templateIndx;//当前哪个模版处于激活状态
                            var tempFocus = _getCurrentFocus();
                            var currentFocusLeft = getMetaRelPosition_left(tempFocus);
//                            console.log(this.getCaE(tempFocus).relPosition);
//                            console.log("getMetaRelPosition_left",getMetaRelPosition_left(hiSDKSettings.cb_currentTemplateIdx,tempFocus));
                            hiSDKSettings.cb_currentTemplateFocusLeft = currentFocusLeft;
                            $("#cb_currentTemplateFocusLeft").html(hiSDKSettings.cb_currentTemplateFocusLeft);
                            var currentFocusRight = getMetaRelPosition_right(tempFocus);
                            hiSDKSettings.cb_currentTemplateFocusRight = currentFocusRight;
                            cb_display();
                        }
                    }
                    if (!!this.onFocus) {
                        if (typeof this.onFocus == 'function') {
                            this.onFocus.call(this);
                        }
                        else if (typeof this.onFocus == 'string') {
                            eval(this.onFocus + '.call(this)');
                        }
                    }


                }
                //HiPage.prototype.hiBlur = function (a) {++blur
                HiPage.prototype.hiBlur = function () {  //++blur
                    //8-15加入
                    if (hiSDKSettings.currentPage.id == this.id) {
                        hiSDKSettings.currentPage = null;
                    }
                    //todo 按钮树最后一项由Focus转为Selected
                    if (!!this.onBlur) {
                        if (typeof this.onBlur == 'function') {
                            this.onBlur.call(this);
                        }
                        else if (typeof this.onBlur == 'string') {
                            eval(this.onBlur + '.call(this)');
                        }
                    }

                    /*var b = (!!a) ? a : this.firstFocusId;
                     hiSDKSettings.currentPage = this;//改变页面
                     if (!!b) {
                     this.getCaE(b).hiFocus();
                     }++blur*/
//                    if (!!this.currentSelectedTree && this.currentSelectedTree.length > 0) {
//                        console.log(this.currentSelectedTree[1].id)
//                        console.log(this.currentSelectedTree[0].id)
////                        for (var i = this.currentSelectedTree.length; i > 0; i--) {
////                            console.log(this.currentSelectedTree[i - 1])
////                            b = this.currentSelectedTree[i - 1].id;
////                            this.getCaE(b).hiBlur();
////                        }
//                        b = this.currentSelectedTree[1].id;
//                        this.getCaE(b).hiBlur();
//                    }
                    if (this.currentSelectedTree.length > 0) {
                        b = this.currentSelectedTree[this.currentSelectedTree.length - 1].id;
                        this.getCaE(b).hiBlur();
                    }

                    //改变页面状态
                    var ind = _getIndexById(SDKPages, this.id);
                    if (ind != -1) {
                        SDKPages[ind].status = 1;//修改为激活状态
                    }

                }
                HiPage.prototype.destroy = function () {
                    if (this.pageType == "combine") {//ver1.2
                        hiSDKSettings.cb_currentFocus = null;
                        hiWebOsFrame.OEMlauncherFirstInited = undefined;
                        hiSDKSettings.cb_currentTemplateIdx = undefined;
                        hiSDKSettings.cb_currentTemplateSign = undefined;
                        hiSDKSettings.cb_relativeLeft = 0;

                        hiSDKSettings.cb_currentTemplateFocusRight=0;
                        hiSDKSettings.cb_currentTemplateFocusLeft=0;
                        hiSDKSettings.cb_templateAmount=0;
                        hiSDKSettings.cb_templagePositionArray=[];
                        hiSDKSettings.cb_templageEdgeValue=0;
                        hiSDKSettings.cb_TBSign = 1;
                    }
                    //恢复HTML到初始状态，并隐藏显示
                    try {
                        var ind = _getIndexById(SDKPages, this.id);
                        if (ind != -1) {
                            if (!!this.onDestroy) {
                                if (typeof this.onDestroy == 'function') {
                                    this.onDestroy.call(this);
                                }
                                else if (typeof this.onDestroy == 'string') {
                                    eval(this.onDestroy + '.call(this)');
                                }
                            }
                            this.close();
                            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.id == this.id) {
                                hiSDKSettings.currentPage = null;
                            }
                            $('#' + this.id).empty();
                            //$('#' + this.id).html(SDKPages[ind].dom);更改为直接删除节点
                            SDKPages.splice(ind, 1);
                        }
                    } catch (e) {
                        //-GHL_DEL-//console.log(e.message)
                    }
                    //Todo
                }

                //有两种更新页面数据的方式，DOM更新以及DATA更新，以下为DOM更新方式（注意更新和执行hiFocus分开）
                HiPage.prototype.changeData = function () {
                    //console.log(this.dom)
                    //更改Data(此时componentsAndButton已经生成，为提高效率，在不清空componentsAndButtons的情况下遍历写入Data数据)
                    //var _this = this;//在函数中引用
                    if (this.pageType != "combine") {
                        $('#' + this.id).empty();
                        $('#' + this.id).html(this.dom);
                    }

                    this.children = [];//2014-5-24

                    this.currentSelectedTree = []; //按钮树概念，修改为currentSelectedTree
                    this.currentSelectedIndexTree = [];//按钮树中的每个节点包含两部分内容，该数组用于记录选中的Index值

                    this.componentsAndButtons = [];
                    _AnalyzeCaE(this, this.componentsAndButtons, this);
                    //this.hiFocus();//6-19去掉该代码
                }

                //不改变DOM，仅更新数据(仅在确认DOM未发生改变的情况下执行该更新)
                HiPage.prototype.changeDataOnly = function () {
                    //更改Data(此时componentsAndButton已经生成，为提高效率，在不清空componentsAndButtons的情况下遍历写入Data数据)
                    /*$.each(this.componentsAndButtons, function (key, val) {
                     console.log(val.id)
                     val.changeDataOnly();
                     })*/
                    //以上在componentsAndButtons中统一检索的方式，修改为在children中递归方式
                    $.each(this.children, function (key, val) {
                        //console.log(val.id)
                        //console.log(val.CaEType)
                        val.changeDataOnly();
                    });
                }

                HiPage.prototype.rewrite = function () {
                    if (typeof this.data.rewrite == 'function') {
                        this.data.rewrite.call(this, this.data);
                    }
                    else if (typeof this.data.rewrite == 'string') {
                        eval(this.data.rewrite + '.call(this,this.data)');
                    }
                    //todo 重写数据后更新到页面
                    this.changeData();
                }

                HiPage.prototype.rewriteDataOnly = function () {
                    if (this.pageType != "combine") {
                        if (typeof this.data.rewrite == 'function') {
                            this.data.rewrite.call(this, this.data);
                        }
                        else if (typeof this.data.rewrite == 'string') {
                            eval(this.data.rewrite + '.call(this,this.data)');
                        }
                        //todo 重写数据后更新到页面
                    } else {
                        if (typeof this.data.rewriteDataOnly == 'function') {
                            this.data.rewriteDataOnly.call(this, this.data);
                        }
                        else if (typeof this.data.rewriteDataOnly == 'string') {
                            eval(this.data.rewriteDataOnly + '.call(this,this.data)');
                        }
                    }
                    this.changeDataOnly();
                }

                HiPage.prototype.getCaE = function (a) {
                    for (var i = 0; i < this.componentsAndButtons.length; i++) {
                        if (this.componentsAndButtons[i].id === a)return this.componentsAndButtons[i];
                    }
                    return null;
                }
                HiPage.prototype.focusId = function (a) {
                    //Todo
                }
            }
            HiPage.initialize = true;
        }

        function translatePageData(data) {
            var operLangData = data.langData;
            for (x in operLangData) {
                eval('operLangData["' + x + '"] =hiSDKSettings.SDKTranslatePackages["' + x + '"]');
                //console.log(x)
            }
        }


        //获取第一节点名称(OK)
        function getFName(a) {
            for (var x in a) {
                return x;
            }
            return null;
        }

        //获取第一节点内容(OK)
        function getFContent(a) {
            for (var x in a) {
                return a[x];
            }
            return null;
        }

        //根据当前国家计算当前区域，当前大区(OK)
        function verAreaAndSubArea(inputCountry) {
            function getFirstNode(a) {
                for (var b in a) {
                    return a[b];
                }
            }

            function getKeyName(a) {
                for (var b in a) {
                    return b;
                }
            }

            var keys = [];
            for (var x = 0; x < hiSDKSettings.areas.length; x++) {
                var yNodeArray = getFirstNode(hiSDKSettings.areas[x]);
                for (var y = 0; y < yNodeArray.length; y++) {
                    var zNodeArray = getFirstNode(getFirstNode(hiSDKSettings.areas[x])[y]);
                    for (var z = 0; z < zNodeArray.length; z++) {
                        if (inputCountry == zNodeArray[z]) {
                            //-GHL_DEL-//console.log(x + ' ' + y + ' ' + z);
                            hiSDKSettings.verAreaIndex = x;
                            hiSDKSettings.verSubAreaIndex = y;
                            hiSDKSettings.verCountryIndex = z;
                            hiSDKSettings.verArea = getKeyName(hiSDKSettings.areas[x]);
                            hiSDKSettings.verSubArea = getKeyName(getFirstNode(hiSDKSettings.areas[x])[y]);
                            return;
                        }
                    }
                }
            }
        }

        //获取区域数组(OK)
        function getAllAreas() {
            function getKeyName(a) {
                for (var b in a) {
                    return b;
                }
            }

            var result = [];
            if (!!hiSDKSettings.areas) {
                for (var i = 0; i < hiSDKSettings.areas.length; i++) {
                    result.push(getKeyName(hiSDKSettings.areas[i]));
                }
            }
            return result;
        }

        //获取某区域包含的子区域，参数：区域名称(OK)
        function getSubAreas(a) {
            var tempArea = null;
            var result = [];
            for (var c = 0; c < hiSDKSettings.areas.length; c++) {
                for (var d in hiSDKSettings.areas[c]) {
                    if (d == a) {
                        tempArea = hiSDKSettings.areas[c][d];
                        if (!!tempArea) {
                            for (var i = 0; i < tempArea.length; i++) {
                                for (var y in tempArea[i])
                                    result.push(y);
                            }
                            return result;
                        }
                        break;
                    }
                }
            }
        }

        //根据名称获取区域内容数组(OK)
        function getAreaArrayByName(a) {
            for (var i = 0; i < hiSDKSettings.areas.length; i++) {
                for (var x in hiSDKSettings.areas[i]) {
                    if (x == a)
                        return hiSDKSettings.areas[i][x];
                }
            }
            return null;
        }

        //根据子区域名称获取子区域内容数组(OK)
        function getSubAreaArrayByName(a) {
            for (var i = 0; i < hiSDKSettings.areas.length; i++) {
                var temp1 = getFContent(hiSDKSettings.areas[i]);
                for (var j = 0; j < temp1.length; j++) {
                    if (getFName(temp1[j]) == a) {
                        return getFContent(temp1[j]);
                    }
                }
            }
            return null;
        }

        //获取所有国家(OK)
        function getAllCountries() {
            var result = [];
            for (var i = 0; i < hiSDKSettings.areas.length; i++) {
                var temp1 = getFContent(hiSDKSettings.areas[i]);
                for (var j = 0; j < temp1.length; j++) {
                    var temp2 = getFContent(temp1[j]);
                    for (var k = 0; k < temp2.length; k++) {
                        result.push(temp2[k]);
                    }
                }
            }
            return result;
        }

        //获取某一子区域包含的国家
        function getCountries(subAreaName) {
            var result = [];
            for (var c = 0; c < hiSDKSettings.areas.length; c++) {
                var temp = getFContent(hiSDKSettings.areas[c]);
                for (var s = 0; s < temp.length; s++) {
                    if (subAreaName == getFName(temp[s])) {
                        result = result.concat(getFContent(temp[s]));
                        return result;
                    }
                }
            }
            return result;
        }

        //获取子区域数组包含的国家(OK)
        function getCountriesFromSubAreas(subAreaArray) {
            var result = [];
            for (var c = 0; c < hiSDKSettings.areas.length; c++) {
                var temp = getFContent(hiSDKSettings.areas[c]);
                for (var s = 0; s < temp.length; s++) {
                    if ($.inArray(getFName(temp[s]), subAreaArray) != -1) {
                        result = result.concat(getFContent(temp[s]));
                    }
                }
            }
            return result;
        }

        function unique(data) {
            data = data || [];
            var a = {};
            for (var i = 0; i < data.length; i++) {
                var v = data[i];
                if (typeof(a[v]) == 'undefined') {
                    a[v] = 1;
                }
            }
            ;
            data.length = 0;
            for (var i in a) {
                data[data.length] = i;
            }
            return data;
        }

        //计算extendPages中某一数据的品牌，返回品牌数组
        function getBrandsFromExtendPage(a) {
            //计算品牌
            var _brand = [];
            if (!!a.brand && a.brand.length > 0) {
                if (a.brand[0].slice(0, 1) == "-") {
                    _brand = _brand.concat(hiSDKSettings.brands)
                    for (var i = 0; i < a.brand.length; i++) {
                        if (a.brand[i].slice(0, 1) == "-") {
                            var temp1 = a.brand[i].slice(1);
                            _brand.splice($.inArray(temp1, _brand), 1);
                            //-GHL_DEL-//console.log(_brand)
                        } else {
                            var pos = $.inArray(a.brand[i], _brand);
                            if (pos != -1)
                                _brand.splice($.inArray(a.brand[i], _brand), 1);
                        }
                    }
                } else {
                    for (var i = 0; i < a.brand.length; i++) {
                        if (a.brand[i].slice(0, 1) == "-") {
                            var temp1 = a.brand[i].slice(1);
                            _brand.push(temp1);
                        } else {
                            _brand.push(a.brand[i]);
                        }
                    }
                }
                //console.log(_brand);
                unique(_brand);
            } else {
                _brand = _brand.concat(hiSDKSettings.brands)
            }
            //console.log(_brand);
            return _brand;
        }

        //计算extendPages中某一数据的国家,返回国家数组
        function getCountrysFromExtendPage(a) {
            //首先计算总区域
            var _areas = [];
            if (!!a.areas && a.areas.length > 0) {
                if (a.areas[0].slice(0, 1) == "-") {
                    _areas = getAllAreas();
                    //console.log(_areas);
                    for (var i = 0; i < a.areas.length; i++) {
                        if (a.areas[i].slice(0, 1) == "-") {
                            var temp1 = a.areas[i].slice(1);
                            _areas.splice($.inArray(temp1, _areas), 1);
                            //console.log(_areas)
                        } else {
                            _areas.splice($.inArray(a.areas[i], _areas), 1);
                            //_areas.push(a.areas[i]);
                        }
                    }
                } else {
                    for (var i = 0; i < a.areas.length; i++) {
                        if (a.areas[i].slice(0, 1) == "-") {
                            var temp1 = a.areas[i].slice(1);
                            _areas.push(temp1);
                        } else {
                            _areas.push(a.areas[i]);
                        }
                    }
                }
                unique(_areas);
            } else {
                _areas = getAllAreas();
            }
            //console.log(_areas);

            //计算子区域
            var _subAreas = [];
            for (var i = 0; i < _areas.length; i++) {
                _subAreas = _subAreas.concat(getSubAreas(_areas[i]))
            }
            //console.log(_subAreas)

            if (!!a.subAreas && a.subAreas.length > 0) {
                if (a.subAreas[0].slice(0, 1) == "-") {
                    for (var i = 0; i < a.subAreas.length; i++) {
                        if (a.subAreas[i].slice(0, 1) == "-") {
                            var temp1 = a.subAreas[i].slice(1);
                            _subAreas.splice($.inArray(temp1, _subAreas), 1);
                            //console.log(_subAreas)
                        } else {
                            //var temp1=a.subAreas[i].slice(1);
                            var pos = $.inArray(a.subAreas[i], _subAreas);
                            if (pos != -1)
                                _subAreas.splice($.inArray(a.subAreas[i], _subAreas), 1);
                            //_subAreas.push(a.subAreas[i]);
                        }
                    }
                } else {
                    for (var i = 0; i < a.subAreas.length; i++) {
                        if (a.subAreas[i].slice(0, 1) == "-") {
                            var temp1 = a.subAreas[i].slice(1);
                            _subAreas.push(temp1);
                        } else {
                            _subAreas.push(a.subAreas[i]);
                        }
                    }
                }
                //console.log(_subAreas);
                unique(_subAreas);
            }
            //console.log(_subAreas)

            //计算国家
            var _country = [];
            for (var i = 0; i < _subAreas.length; i++) {
                _country = _country.concat(getCountries(_subAreas[i]))
            }
            //console.log(_country)

            if (!!a.country && a.country.length > 0) {
                if (a.country[0].slice(0, 1) == "-") {
                    for (var i = 0; i < a.country.length; i++) {
                        if (a.country[i].slice(0, 1) == "-") {
                            var temp1 = a.country[i].slice(1);
                            _country.splice($.inArray(temp1, _country), 1);
                            //-GHL_DEL-//console.log(_country)
                        } else {
                            var pos = $.inArray(a.country[i], _country);
                            if (pos != -1)
                                _country.splice($.inArray(a.country[i], _country), 1);
                        }
                    }
                } else {
                    for (var i = 0; i < a.country.length; i++) {
                        if (a.country[i].slice(0, 1) == "-") {
                            var temp1 = a.country[i].slice(1);
                            _country.push(temp1);
                        } else {
                            _country.push(a.country[i]);
                        }
                    }
                }
                //console.log(_country);
                unique(_country);
            }
            //console.log(_country);
            return _country;
        }

        //
        function getExtendPageIdIndex(extendPages) {
            for (var i = 0; i < extendPages.length; i++) {

            }
        }

        function createPage(pid, data, oriPage, priority, onSuccess, transObject, onError) {
//            console.log(getSubAreas("大区3"))
//            console.log(getAreaArrayByName("大区3"))
//            console.log(getSubAreaArrayByName("Europe"));
//            console.log(getAllCountries());
//            console.log(getCountries("Asia"));
//            console.log(getCountriesFromSubAreas(["Africa","Pub"]));
            //-GHL_DEL-//console.log("tbegin(" + pid + "):" + new Date().getTime());

            var pageIndex = _getIndexById(hiSDKSettings.hiModulePages, pid);
            //目录相关页面数据生成计算
            if (!!pid && !!hiSDKSettings.hiModulePages[pageIndex].extendPages && hiSDKSettings.hiModulePages[pageIndex].extendPages.length > 0 && !hiSDKSettings.hiModulePages[pageIndex].hasCreate) {
                //-GHL_DEL-//console.log("getAllAreas:" + getAllAreas());

                var selectExtendPageIndex = -1;
                for (var i = 0; i < hiSDKSettings.hiModulePages[pageIndex].extendPages.length; i++) {
                    var _countryArray = getCountrysFromExtendPage(hiSDKSettings.hiModulePages[pageIndex].extendPages[i]);
                    //-GHL_DEL-//console.log(_countryArray);
                    var _brandArray = getBrandsFromExtendPage(hiSDKSettings.hiModulePages[pageIndex].extendPages[i]);
                    //-GHL_DEL-//console.log(_brandArray);
                    if ($.inArray(hiSDKSettings.verCountry, _countryArray) != -1 && $.inArray(hiSDKSettings.verBrand, _brandArray) != -1) {
                        selectExtendPageIndex = i;
                    }
                }
                //获取到最终extendPageIndex,选择最后一个适合的页面
                //-GHL_DEL-//console.log("selectExtendPageIndex:" + selectExtendPageIndex)
                if (selectExtendPageIndex != -1) {
                    //动态将extendPage页面内容拷贝至页面主体Json中
                    //if(!!hiSDKSettings.hiModulePages[pageIndex].jsPath)hiSDKSettings.hiModulePages[pageIndex].jsPath=hiSDKSettings.hiModulePages[pageIndex].extendPages[selectExtendPageIndex].jsPath;
                    _cpyNode(hiSDKSettings.hiModulePages[pageIndex], hiSDKSettings.hiModulePages[pageIndex].extendPages[selectExtendPageIndex]);
                }
                function _cpyNode(a, b) {
                    if (!!a.jsPath && b.jsPath)a.jsPath = b.jsPath;
                    if (!!a.htmlPath && b.htmlPath)a.htmlPath = b.htmlPath;
                    if (!!a.cssPath && b.cssPath)a.cssPath = b.cssPath;
                    if (!!a.pageMode && b.pageMode)a.pageMode = b.pageMode;

                    if (!!a.firstFocusId && b.firstFocusId)a.firstFocusId = b.firstFocusId;
                    if (!!a.initData && b.initData)a.initData = b.initData;
                    if (!!a.onCreate && b.onCreate)a.onCreate = b.onCreate;
                    if (!!a.onOpen && b.onOpen)a.onOpen = b.onOpen;
                    if (!!a.onClose && b.onClose)a.onClose = b.onClose;
                    if (!!a.onDestroy && b.onDestroy)a.onDestroy = b.onDestroy;
                    if (!!a.pageData && b.pageData)a.pageData = b.pageData;
                    if (!!a.handler && b.handler)a.handler = b.handler;
                }


                hiSDKSettings.hiModulePages[pageIndex].hasCreate = true;
            }

            var result;
            //将页面原始Dom结构保存，以便恢复，判断条件可以去掉
            //debugPrint("SDK:Begin createPage " + pid);
            //console.log("t3:"+new Date().getTime());
            if (_getIndexById(SDKPages, pid) == -1) {
                try {
                    //debugPrint("SDK:createPage(new)");
                    //在页面管理器中不存在，创建新页面
                    var pageIndex = _getIndexById(hiSDKSettings.hiModulePages, pid);
                    //载入html
                    if (!!hiSDKSettings.hiModulePages[pageIndex].htmlPath) {
                        if (false) {
                            $('#' + pid).html(Hisense.File.read(hiSDKSettings.hiModulePages[pageIndex].htmlPath, 2));
                        }
                        else {
                            try {
                                var htmlContent = "";
                                if (!!hiSDKSettings.html[pid]) {
                                    htmlContent = hiSDKSettings.html[pid];
                                    //console.log("从SDK读取"+pid)
                                } else if (tv) {
                                    htmlContent = Hisense.File.read(hiSDKSettings.hiModulePages[pageIndex].htmlPath, 2);
                                    if (htmlContent != "")hiSDKSettings.html[pid] = htmlContent;
                                } else{
                                    htmlContent = readHTMLString(hiSDKSettings.hiModulePages[pageIndex].htmlPath);
                                    if (htmlContent != "")hiSDKSettings.html[pid] = htmlContent;
                                }
                                $('#' + pid).html(htmlContent);
                            } catch (e) {
                                throw new Error(e.message + "(Read html failed!)")
                            }

                        }
                    }
//                    var needCss = false;
                    var dom = $('#' + pid).clone().html();
//                    if (!!hiSDKSettings.hiModulePages[pageIndex].cssPath) {
//                        if (($('#' + _getFileName(hiSDKSettings.hiModulePages[pageIndex].cssPath) + '_css').attr('id'))) {
//                            //css未导入情况
//                            needCss = false;
//                        } else {
//                            needCss = true;
//                        }
//                    } else {
//                        //css已导入情况
//                        needCss = false;
//                    }
                    var _cssURL = "", _cssURLId = "";
                    if (!!hiSDKSettings.hiModulePages[pageIndex].cssPath) {
                        _cssURL = hiSDKSettings.hiModulePages[pageIndex].cssPath;
                        _cssURLId = _getFileName(_cssURL);
                    }
                    ;
                    var _jsURL = "", _jsURLId = "";
                    if (!!hiSDKSettings.hiModulePages[pageIndex].jsPath) {
                        _jsURL = hiSDKSettings.hiModulePages[pageIndex].jsPath;
                        _jsURLId = _getFileName2(_jsURL);
                    }
                    /*if (needCss) {*/
                    try {
                        _loadCss(_cssURLId, _cssURL, function () {
                            /*if (!!hiSDKSettings.hiModulePages[pageIndex].jsPath) {*/
                            /*if ($('#' + _jsURLId + '_script').attr('id') == undefined) {*/
                            try {
                                _loadScript(pid, _jsURL, function () {
                                    if (hiSDKSettings.hiModulePages[pageIndex].pageType == "combine") {
                                        if (!data) {
                                            var b = function (dd) {
                                                if (typeof(dd.rewrite) == 'function') {
                                                    dd.rewrite(dd);//创建页面初始化数据
                                                } else if (typeof(dd.rewrite) == 'string') {
                                                    eval(dd.rewrite + '(dd)');
                                                }
                                                translatePageData(dd);//翻译data
                                                result = new HiPage(dd, hiSDKSettings.hiModulePages[pageIndex]);

                                                if (!!result.onCreate) {
                                                    if (typeof result.onCreate == 'string') {
                                                        eval(result.onCreate + '()');
                                                    } else if (typeof result.onCreate == 'function') {
                                                        result.onCreate();
                                                    }
                                                }

                                                result.dom = dom;
                                                //result.visible = true;
                                                if (!!priority) {
                                                    result.priority = priority;
                                                } else {
                                                    if (!!oriPage) {
                                                        result.priority = oriPage.priority + 1;
                                                    } else {
                                                        if (!!hiSDKSettings.currentPage) {
                                                            result.priority = hiSDKSettings.currentPage.priority + 1;
                                                        }
                                                    }
                                                }
                                                if (!!oriPage) {
                                                    result.origin = oriPage;
                                                } else {
                                                    result.origin = hiSDKSettings.currentPage;
                                                }
                                                //hiSDKSettings.currentPage = result;//改变页面
                                                SDKPages.push(result);
                                                if (!!transObject) {
                                                    onSuccess(result, transObject);
                                                } else {
                                                    onSuccess(result);
                                                }
                                            }
                                            var a = {}
                                            data = eval(hiSDKSettings.hiModulePages[pageIndex].initData + '(hiSDKSettings.hiModulePages[pageIndex],a,b)');
                                        }

                                    } else {
                                        if (!data) {
                                            data = eval(hiSDKSettings.hiModulePages[pageIndex].initData + '(hiSDKSettings.hiModulePages[pageIndex])');
                                        }
                                        if (typeof(data.rewrite) == 'function') {
                                            data.rewrite(data);//创建页面初始化数据
                                        } else if (typeof(data.rewrite) == 'string') {
                                            eval(data.rewrite + '(data)');
                                        }
                                        translatePageData(data);//翻译data
                                        result = new HiPage(data, hiSDKSettings.hiModulePages[pageIndex]);

                                        if (!!result.onCreate) {
                                            if (typeof result.onCreate == 'string') {
                                                eval(result.onCreate + '()');
                                            } else if (typeof result.onCreate == 'function') {
                                                result.onCreate();
                                            }
                                        }

                                        result.dom = dom;
                                        //result.visible = true;
                                        if (!!priority) {
                                            result.priority = priority;
                                        } else {
                                            if (!!oriPage) {
                                                result.priority = oriPage.priority + 1;
                                            } else {
                                                if (!!hiSDKSettings.currentPage) {
                                                    result.priority = hiSDKSettings.currentPage.priority + 1;
                                                }
                                            }
                                        }
                                        if (!!oriPage) {
                                            result.origin = oriPage;
                                        } else {
                                            result.origin = hiSDKSettings.currentPage;
                                        }
                                        //hiSDKSettings.currentPage = result;//改变页面
                                        SDKPages.push(result);
                                        if (!!transObject) {
                                            onSuccess(result, transObject);
                                        } else {
                                            onSuccess(result);
                                        }
                                    }
                                });
                            } catch (e) {
                                throw new Error(e.message + "(load Js failed);");
                            }
                            /*} else {
                             try {
                             if (!data) {
                             data = eval(hiSDKSettings.hiModulePages[pageIndex].initData + '(hiSDKSettings.hiModulePages[pageIndex])');
                             }
                             if (typeof(data.rewrite) == 'function') {
                             data.rewrite(data);//创建页面初始化数据
                             } else if (typeof(data.rewrite) == 'string') {
                             eval(data.rewrite + '(data)');
                             }
                             translatePageData(data);//翻译data
                             result = new HiPage(data, hiSDKSettings.hiModulePages[pageIndex]);

                             if (!!result.onCreate) {
                             if (typeof result.onCreate == 'string') {
                             eval(result.onCreate + '()');
                             } else if (typeof result.onCreate == 'function') {
                             result.onCreate();
                             }
                             }

                             result.dom = dom;
                             if (!!priority) {
                             result.priority = priority;
                             } else {
                             if (!!oriPage) {
                             result.priority = oriPage.priority + 1;
                             } else {
                             if (!!hiSDKSettings.currentPage) {
                             result.priority = hiSDKSettings.currentPage.priority + 1;
                             }
                             }
                             }
                             if (!!oriPage) {
                             result.origin = oriPage;
                             } else {
                             result.origin = hiSDKSettings.currentPage;
                             }
                             SDKPages.push(result);
                             if (!!transObject) {
                             onSuccess(result, transObject);
                             } else {
                             onSuccess(result);
                             }
                             } catch (e) {
                             throw new Error(e.message + "(not load Js failed);");
                             }
                             }*/
                            /*}*/
                        });
                    } catch (e) {
                        throw new Error(e.message + "(Need Load CSS,Load Css or Js failed);");
                    }
                    /*} else {
                     try {
                     if (!!hiSDKSettings.hiModulePages[pageIndex].jsPath) {
                     //alert(_getFileName2(hiSDKSettings.hiModulePages[pageIndex].jsPath))
                     if ($('#' + _getFileName2(hiSDKSettings.hiModulePages[pageIndex].jsPath) + '_script').attr('id') == undefined) {
                     try {
                     _loadScript(pid, hiSDKSettings.hiModulePages[pageIndex].jsPath, function () {
                     if (!data) {
                     data = eval(hiSDKSettings.hiModulePages[pageIndex].initData + '(hiSDKSettings.hiModulePages[pageIndex])');
                     }
                     if (typeof(data.rewrite) == 'function') {
                     data.rewrite(data);//创建页面初始化数据
                     } else if (typeof(data.rewrite) == 'string') {
                     eval(data.rewrite + '(data)');
                     }
                     translatePageData(data);//翻译data
                     result = new HiPage(data, hiSDKSettings.hiModulePages[pageIndex]);

                     if (!!result.onCreate) {
                     if (typeof result.onCreate == 'string') {
                     eval(result.onCreate + '()');
                     } else if (typeof result.onCreate == 'function') {
                     result.onCreate();
                     }
                     }

                     result.dom = dom;
                     //result.visible = true;
                     if (!!priority) {
                     result.priority = priority;
                     } else {
                     if (!!oriPage) {
                     result.priority = oriPage.priority + 1;
                     } else {
                     if (!!hiSDKSettings.currentPage) {
                     result.priority = hiSDKSettings.currentPage.priority + 1;
                     }
                     }
                     }
                     if (!!oriPage) {
                     result.origin = oriPage;
                     } else {
                     result.origin = hiSDKSettings.currentPage;
                     }
                     //hiSDKSettings.currentPage = result;//改变页面
                     SDKPages.push(result);
                     if (!!transObject) {
                     onSuccess(result, transObject);
                     } else {
                     onSuccess(result);
                     }
                     //return result;
                     });
                     } catch (e) {
                     throw new Error(e.message + "(load Js failed2);");
                     }
                     } else {
                     try {
                     if (!data) {
                     data = eval(hiSDKSettings.hiModulePages[pageIndex].initData + '(hiSDKSettings.hiModulePages[pageIndex])');
                     }
                     if (typeof(data.rewrite) == 'function') {
                     data.rewrite(data);//创建页面初始化数据
                     } else if (typeof(data.rewrite) == 'string') {
                     eval(data.rewrite + '(data)');
                     }
                     translatePageData(data);//翻译data
                     result = new HiPage(data, hiSDKSettings.hiModulePages[pageIndex]);

                     if (!!result.onCreate) {
                     if (typeof result.onCreate == 'string') {
                     eval(result.onCreate + '()');
                     } else if (typeof result.onCreate == 'function') {
                     result.onCreate();
                     }
                     }

                     result.dom = dom;
                     if (!!priority) {
                     result.priority = priority;
                     } else {
                     if (!!oriPage) {
                     result.priority = oriPage.priority + 1;
                     } else {
                     if (!!hiSDKSettings.currentPage) {
                     result.priority = hiSDKSettings.currentPage.priority + 1;
                     }
                     }
                     }
                     if (!!oriPage) {
                     result.origin = oriPage;
                     } else {
                     result.origin = hiSDKSettings.currentPage;
                     }
                     SDKPages.push(result);
                     if (!!transObject) {
                     onSuccess(result, transObject);
                     } else {
                     onSuccess(result);
                     }
                     } catch (e) {
                     throw new Error(e.message + "(not load Js failed2);");
                     }
                     }
                     }
                     else {
                     try {
                     if (!data) {
                     data = eval(hiSDKSettings.hiModulePages[pageIndex].initData + '(hiSDKSettings.hiModulePages[pageIndex])');
                     }
                     if (typeof(data.rewrite) == 'function') {
                     data.rewrite(data);//创建页面初始化数据
                     } else if (typeof(data.rewrite) == 'string') {
                     eval(data.rewrite + '(data)');
                     }
                     translatePageData(data);//翻译data
                     result = new HiPage(data, hiSDKSettings.hiModulePages[pageIndex]);

                     if (!!result.onCreate) {
                     if (typeof result.onCreate == 'string') {
                     eval(result.onCreate + '()');
                     } else if (typeof result.onCreate == 'function') {
                     result.onCreate();
                     }
                     }

                     result.dom = dom;
                     if (!!priority) {
                     result.priority = priority;
                     } else {
                     if (!!oriPage) {
                     result.priority = oriPage.priority + 1;
                     } else {
                     if (!!hiSDKSettings.currentPage) {
                     result.priority = hiSDKSettings.currentPage.priority + 1;
                     }
                     }
                     }
                     if (!!oriPage) {
                     result.origin = oriPage;
                     } else {
                     result.origin = hiSDKSettings.currentPage;
                     }
                     SDKPages.push(result);
                     if (!!transObject) {
                     onSuccess(result, transObject);
                     } else {
                     onSuccess(result);
                     }
                     } catch (e) {
                     throw new Error(e.message + "(not load Js failed2);");
                     }
                     }
                     } catch (e) {
                     throw new Error(e.message + "(No Load CSS,Load Css or Js failed);");
                     }
                     }*/
                } catch (e) {
                    debugPrint(e.message + "(Create new Page failed);");
                    if (!!onError) {
                        if (!!transObject) {
                            onError(result, transObject);
                        } else {
                            onError(result);
                        }
                    }
                }
            }
            else {
                //在页面管理器中存在(2014-6-14，未测试)
                try {
                    var pageIndex = _getIndexById(hiSDKSettings.hiModulePages, pid);
                    if (!!data) {
                        //如果data存在，根据data初始化页面
                        result = SDKPages[_getIndexById(SDKPages, pid)];

                        result.data = data;
                        if (!!result.data.operateData) {
                            result.operateData = result.data.operateData;
                        } else {
                            result.operateData = {};
                        }
                        if (!!result.data.langData) {
                            result.langData = result.data.langData;
                        } else {
                            result.langData = {};
                        }
                        result.dataPath = '';
                        result.CaE = hiSDKSettings.hiModulePages[pageIndex].CaE;

                        if (!!priority) {
                            result.priority = priority;
                        } else if (!!result.priority && !!result.origin) {
                            result.priority = Math.max((result.origin.priority + 1), result.priority);
                        }
                        else if (!!result.priority && !!hiSDKSettings.currentPage) {
                            result.priority = Math.max((hiSDKSettings.currentPage.priority + 1), result.priority);
                        }

                        if (!!oriPage)result.origin = oriPage;

                        result.rewrite();

                        if (!!result.onCreate) {
                            if (typeof result.onCreate == 'string') {
                                eval(result.onCreate + '()');
                            } else if (typeof result.onCreate == 'function') {
                                result.onCreate();
                            }
                        }
                        if (!!transObject) {
                            onSuccess(result, transObject);
                        } else {
                            onSuccess(result);
                        }
                        return result;
                    } else {
                        //如果data不存在的，直接返回页面
                        result = SDKPages[_getIndexById(SDKPages, pid)];
                        if (!!oriPage)result.origin = oriPage;
                        if (!!priority) {
                            result.priority = priority;
                        } else if (!!result.priority && !!result.origin) {
                            result.priority = Math.max((result.origin.priority + 1), result.priority);
                        }
                        else if (!!result.priority && !!hiSDKSettings.currentPage) {
                            result.priority = Math.max((hiSDKSettings.currentPage.priority + 1), result.priority);
                        }


                        if (!!transObject) {
                            onSuccess(result, transObject);
                        } else {
                            onSuccess(result);
                        }
                        return result;
                    }
                } catch (e) {
                    debugPrint(e.message + "(create by PageManager);");
                    if (!!onError) {
                        if (!!transObject) {
                            onError(result, transObject);
                        } else {
                            onError(result);
                        }
                    }
                }
            }
            return null;
        }

        //参数（移除页面ID，是否返回焦点，回调函数）
        function removePage(pid, isReturn, callback) {
            var oriP = null;
            var ind = _getIndexById(SDKPages, pid);
            if (ind != -1) {
                if (!!SDKPages[ind].origin) {
                    oriP = SDKPages[ind].origin;
                }
                SDKPages[ind].destroy();
            }
            if (isReturn && !!oriP) {
                oriP.focus();
            }
            if (!!callback) {
                callback();
            }
        }

        function destroyModule(mName, callback, isAutoClose) {
            var destroyList = [];
            $.each(SDKPages, function (k, v) {
                if (v.module == mName) {
                    destroyList.push(v);
                }
            })
            $.each(destroyList, function (k, v) {
                if (v.isStatic) {
                    v.close(isAutoClose);
                } else {
                    v.destroy();
                }

            });
            if (!!callback) {
                callback();
            }
        }

        function closeModule(mName, callback) {
            var closeList = [];
            $.each(SDKPages, function (k, v) {
                if (v.module == mName) {
                    closeList.push(v);
                }
            })
            $.each(closeList, function (k, v) {
                v.close();
            });
            if (!!callback) {
                callback();
            }
        }

        //设置SDK超时时间
        function setAutoCloseTimeLength(a) {
            hiSDKSettings.AutoCloseTimeLength = a;
        }

        //获取SDK超时时间
        function getAutoCloseTimeLength() {
            return hiSDKSettings.AutoCloseTimeLength;
        }

        //增加到ProtectPage
        function pushProtectPages(p) {
            if ($.inArray(p.id, hiSDKSettings.protectPages) == -1) {
                hiSDKSettings.protectPages.push(p.id);
            }
        }

        //从ProtectPage移除
        function popProtectPages(p) {//未测试
            if ($.inArray(p.id, hiSDKSettings.protectPages) != -1) {
                hiSDKSettings.protectPages.splice($.inArray(p.id, hiSDKSettings.protectPages), 1);
            }
        }

        function getProtectPages() {
            return hiSDKSettings.protectPages;
        }

        //判断页面管理器里是否存在被保护页面
        function isSDKPagesBeProtected() {
            var result = false;
            $.each(hiSDKSettings.protectPages, function (key, val) {
                $.each(SDKPages, function (k, v) {
                    if (v.id == val)result = true;
                });
            });
            return result;
        }

        //判断当前页面是否被保护
        function isCurrentPageBeProtected() {
            var result = false;
            $.each(hiSDKSettings.protectPages, function (k, v) {
                if (!!hiSDKSettings.currentPage && v == hiSDKSettings.currentPage.id)result = true;
            });
            return result;
        }

        function closeModuleExcludeArray(mName, array) {
            //-GHL_DEL-//console.log(array)
            $.each(SDKPages, function (k, v) {
                if (v.module == mName) {
                    if ($.inArray(v.id, array) == -1) {
                        v.destroy();
                    }
                }
            })
        }

        //设置页面的可用按键集合，参数1：页面，参数2：按键集合
        function enablePageKeys(page, keys) {//已测试
            if (!!page.keys) {
                if (page.keys.enable == undefined) {
                    page.keys.enable = [];
                }
                page.keys.enable = _unique(page.keys.enable.concat(keys));

            } else {
                page.keys = {};
                page.keys.enable = [];
                page.keys.enable = _unique(page.keys.enable.concat(keys));
            }
        }

        //设置页面的不可用按键集合，参数1：页面，参数2：按键集合
        function disablePageKeys(page, keys) {//已测试
            if (!!page.keys) {
                if (page.keys.disable == undefined) {
                    page.keys.disable = [];
                }
                page.keys.disable = _unique(page.keys.disable.concat(keys));

            } else {
                page.keys = {};
                page.keys.disable = [];
                page.keys.disable = _unique(page.keys.disable.concat(keys));
            }
        }

        //移除页面的不可用按键集合中若干元素，参数1：页面，参数2：按键集合
        function disablePageKeysRemove(page, ks) {//已测试
            if (!!page.keys && page.keys.disable) {
                page.keys.disable = _unique(page.keys.disable);
                for (var i = 0; i < ks.length; i++) {
                    if ($.inArray(ks[i], page.keys.disable) != -1) {
                        page.keys.disable.splice($.inArray(ks[i], page.keys.disable), 1);
                    }
                }
            }
        }

        //移除页面的可用按键集合中若干元素，参数1：页面，参数2：按键集合
        function enablePageKeysRemove(page, ks) {//已测试
            if (!!page.keys && page.keys.enable) {
                page.keys.enable = _unique(page.keys.enable);
                for (var i = 0; i < ks.length; i++) {
                    if ($.inArray(ks[i], page.keys.enable) != -1) {
                        page.keys.enable.splice($.inArray(ks[i], page.keys.enable), 1);
                    }
                }
            }
        }

        //清除页面的可用按键集合
        function clearEnablePageKeys(page) {//已测试
            if (!!page.keys) {
                page.keys.enable = null;
            }
        }

        //清除页面的不可用按键集合
        function clearDisablePageKeys(page) {//已测试
            if (!!page.keys) {
                page.keys.disable = null;
            }
        }

        function _array(arr, elt) {
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i] === elt) {
                    return true;
                }
            }
            return false;
        };

        //去除数组重复元素
        function _unique(arr) {
            if (arr.length < 2) return arr;
            var i = 0, len = arr.length;
            re = [];
            for (; i < len; i++) {
                if (!_array(re, arr[i])) {
                    re.push(arr[i]);
                }
            }
            return re;
        };

        function closeTree(nodeName) {
        }

        //递归计算当前按钮是否可用
        function countDisable(a) {
            //todo disableItem相关未判断
            //利用this.pIndex进行计算
            if (a.disable == true) {
                return true;
            } else {
                if (a.parent.PCB == 'page') {
                    return a.disable;
                } else {
                    if (a.parent.CaEType == 'Ul' || a.parent.CaEType == 'NavigationBar' || a.parent.CaEType == 'GridUl') {
                        if (!!a.parent.disableItem && $.inArray(a.pIndex, a.parent.disableItem) != -1) {
                            return true;
                        } else {
                            return countDisable(a.parent);
                        }
                    } else {
                        return countDisable(a.parent);
                    }
                }
            }
        }

        //获取当前SDK使用的语言
        function getCurrentLanguage() {
            return hiSDKSettings.languages[hiSDKSettings.currentLanguage];
        }

        //获取当前SDK使用的语言Index
        function getCurrentLanguageIndex() {
            return 0;
            //return hiSDKSettings.currentLanguage;
        }


        //设置SDK使用的语种，参数为字符串
        function setLanguage(a) {
            /*DBG_ALWAYS("set language["+a+"]")
            hiSDKSettings.currentLanguage = $.inArray(a, hiSDKSettings.languages);
            if (hiSDKSettings.currentLanguage == -1)hiSDKSettings.currentLanguage = 0;

            if(hiSDKSettings.RTLLanguages.indexOf(a) > -1){
                setHTMLDirection("rtl");
            }
            else{
                setHTMLDirection("ltr");
            }*/

            //OneLangPackage
            /*_loadScript(a,'lang/'+a+'.js',function(){
                eval("hiSDKSettings.SDKTranslatePackages="+a);
                DBG_ALWAYS("set language["+a+"]")
                hiSDKSettings.currentLanguage = $.inArray(a, hiSDKSettings.languages);
                if (hiSDKSettings.currentLanguage == -1)hiSDKSettings.currentLanguage = 0;

                if(hiSDKSettings.RTLLanguages.indexOf(a) > -1){
                    setHTMLDirection("rtl");
                }
                else{
                    setHTMLDirection("ltr");
                }
            })*/

            //OneLangPackageXHR
            try {
                DBG_ALWAYS("set language[" + a + "]")
//                var aa=readHTMLString('UI/hisenseUI/lang/' + a + '.js');
//                console.log(aa)
                langPackages = JSON.parse(readHTMLString('UI/hisenseUI/lang/' + a + '.js'));
                hiSDKSettings.SDKTranslatePackages = langPackages;
                hiSDKSettings.currentLanguage = $.inArray(a, hiSDKSettings.languages);
                if (hiSDKSettings.currentLanguage == -1) hiSDKSettings.currentLanguage = 0;

                if (hiSDKSettings.RTLLanguages.indexOf(a) > -1) {
                    setHTMLDirection("rtl");
                }
                else {
                    setHTMLDirection("ltr");
                }
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }

        }

        function getHTMLDirection(){
            return hiSDKSettings.HTMLDirection;
        }

        function setHTMLDirection(v){
            if(!!v) {
                $("html").attr("dir", v);
                hiSDKSettings.HTMLDirection = v;
                $("html").attr("class","html_ltr");
                if("rtl" == v){
                    $("html").attr("class","html_rtl");
                }
            }
            else {
                var dir = $("html").attr("dir");
                if("ltr" == dir || !dir) {
                    $("html").attr("dir", "rtl");
                    $("html").attr("class","html_rtl");
                    hiSDKSettings.HTMLDirection = "rtl";
                }
                else {
                    $("html").attr("dir", "ltr");
                    $("html").attr("class","html_ltr");
                    hiSDKSettings.HTMLDirection = "ltr";
                }
            }
        }
        //获取当前SDK页面ID
        function getCurrentPageId() {
            return (!!hiSDKSettings.currentPage) ? hiSDKSettings.currentPage.id : '';
        }

        //获取当前SDK页面
        function getCurrentPage() {
            return (!!hiSDKSettings.currentPage) ? hiSDKSettings.currentPage : null;
        }

        //在SDK中获取页面
        function getPageByIdFromSdkPages(a) {
            for (var i = 0; i < SDKPages.length; i++) {
                if (SDKPages[i].id == a)return SDKPages[i];
            }
            return null;
        }

        //根据id内容在JsonArray中获取Index
        function _getIndexById(a, b) {
            for (var i = 0; i < a.length; i++) {
                if (a[i].id == b) {
                    return i;
                }
            }
            return -1;
        }

        //获取元素在按钮树中的index
        function _getIndexFromSelTree(cae, selTree) {
            for (var i = 0; i < selTree.length; i++) {
                if (selTree[i].id == cae.id) {
                    return i;
                }
            }
            return -1;
        }

        //处理字符串中包含引号问题
        function _getQuotString(a) {
            var str = '' + a;
            var regObj = {"'": "\\'", '"': '\\"'};
            for (var reg in regObj) {
                str = str.replace(new RegExp(reg, "g"), regObj[reg]);
            }
            str = str == "\\" ? "" : str;
            return str;
        }

        function _getFileName(str) {
            var reg = /[^\\\/]*[\\\/]+/g;
            //xxx\或者是xxx/
            str = str.replace(reg, '');
            var reg2 = /\.css/;
            return str.replace(reg2, '');
        }

        function _getFileName2(str) {
            var reg = /[^\\\/]*[\\\/]+/g;
            //xxx\或者是xxx/
            str = str.replace(reg, '');
            var reg2 = /\.js/;
            return str.replace(reg2, '');
        }

        //ver1.2 设置当前页面所含模版前缀数组
        function initCurrentPageTemplatesInfo(a, b, c, d, e, f) {
            hiSDKSettings.cb_templateArray = a;
            hiSDKSettings.cb_templateAmount = a.length;
            hiSDKSettings.cb_currentTemplateIdx = b;
            hiSDKSettings.cb_templagePositionArray = c;
            hiSDKSettings.cb_templageEdgeValue = d;
            hiSDKSettings.cb_screenWidth = e;
            hiSDKSettings.cb_htmlContainer = f;
        }

        function getCurrentTemplateIdx() {
            return hiSDKSettings.cb_currentTemplateIdx;
        }

        function setCurrentTemplateIdx(a) {
            hiSDKSettings.cb_currentTemplateIdx = a;
        }

        function getCurrentTemplateSign() {
            return hiSDKSettings.cb_currentTemplateSign;
        }

        function getCurrentTemplateFirstFocusId() {
            var result = "";
            for (var i = 0; i < hiSDKSettings.hiTemplatePages.length; i++) {
                if (hiSDKSettings.hiTemplatePages[i].id == hiSDKSettings.cb_currentTemplateSign) {
                    result = hiSDKSettings.hiTemplatePages[i].firstFocusId;
                    break;
                }
            }
            return result;
        }

        function getCurrentTemplateFirstFocusIdByIdx(idx) {
            var result = "";
            for (var i = 0; i < hiSDKSettings.hiTemplatePages.length; i++) {
                if (hiSDKSettings.hiTemplatePages[i].id == hiSDKSettings.cb_templateArray[idx].template) {
                    result = hiSDKSettings.hiTemplatePages[i].firstFocusId;
                    break;
                }
            }
            return result;
        }

        function getCurrentTemplateRelativeLeft() {
            return hiSDKSettings.cb_relativeLeft;
        }

        function setCurrentTemplateRelativeLeft(a) {
            hiSDKSettings.cb_relativeLeft = a;
            //$('#' + hiSDKSettings.cb_htmlContainer).css("left", hiSDKSettings.cb_relativeLeft + 'px');
            $("#"+hiSDKSettings.cb_htmlContainer).css('transform','translateX('+hiSDKSettings.cb_relativeLeft+'px)');//lu
            /*$('#'+hiSDKSettings.cb_htmlContainer).animate(
             {transform:'translateX('+hiSDKSettings.cb_relativeLeft+'px)'}, "slow"
             );*/
        }

        function getCurrentTemplateFocus() {
            return hiSDKSettings.cb_currentFocus;
        }

        function gethiModulePages() {
            return hiSDKSettings.hiModulePages;
        }

        function getModulePageIdx(a) {
            var _result = -1;
            for (var i = 0; i < hiSDKSettings.hiModulePages.length; i++) {
                if (hiSDKSettings.hiModulePages[i].id === a) {
                    _result = i;
                    break;
                }
            }
            return _result;
        }

        //动态设置页面属性，将id页面的attrName属性值设置为attrValue
        function setModuleAttr(id, attrName, attrValue) {
            hiSDKSettings.hiModulePages[getModulePageIdx(id)][attrName] = attrValue;
        }

        function getModuleAttr(id, attrName) {
            return hiSDKSettings.hiModulePages[getModulePageIdx(id)][attrName];
        }

        function getTemplatePositionArray() {
            return hiSDKSettings.cb_templagePositionArray;
        }

        function getTemplateCurrentFocus() {
            return hiSDKSettings.cb_currentFocus;
        }

        function getTemplatePositionByIdx(idx) {
            return _getArrayAValue(hiSDKSettings.cb_templagePositionArray, idx - 1);
        }

        function getTemplatePositionByName(name) {

        }

        function getMetaRelPosition_left(id) {
            var idx = idTemplateIdxMap[id];
//            console.log("id="+id+",idx="+idx)
            return 70 + getTemplatePositionByIdx(idx) + getCurrentPage().getCaE(id).relPosition[0] + hiSDKSettings.cb_relativeLeft;
        }

        function getMetaRelPosition_right(id) {
//            console.log("---getTemplatePositionByIdx(idx):"+getTemplatePositionByIdx(idx))
//            console.log("---relPosition[0]:"+getCurrentPage().getCaE(id).relPosition[0])
//            console.log("---relPosition[2]:"+getCurrentPage().getCaE(id).relPosition[2])
//            console.log("---hiSDKSettings.cb_relativeLeft:" + hiSDKSettings.cb_relativeLeft)
            var idx = idTemplateIdxMap[id];
//            console.log("id="+id+",idx="+idx)
            return 70 + getTemplatePositionByIdx(idx) + getCurrentPage().getCaE(id).relPosition[0] + getCurrentPage().getCaE(id).relPosition[2] + hiSDKSettings.cb_relativeLeft;
        }

        function getMetaRelPosition_top(id) {
            var idx = idTemplateIdxMap[id];
//            console.log("id="+id+",idx="+idx)
            return -1 * getCurrentPage().getCaE(id).relPosition[1];
        }

        function getMetaRelPosition_height(id) {
            return getCurrentPage().getCaE(id).relPosition[3];
        }

        function getMetaRelPosition_width(id) {
            return getCurrentPage().getCaE(id).relPosition[2];
        }

        //动态载入JS
        function _loadScript(id, url, callback) {
            if (id != "" && url != "" && $.inArray(url, hiSDKSettings.JsUrlSet) == -1) {
                hiSDKSettings.JsUrlSet.push(url);
                var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    script,
                    options,
                    s;
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
                s = options || {};
                url = url || s.url;
                callback = callback || s.success;
                script = document.createElement("script");
                script.async = s.async || false;
                script.type = "text/javascript";
                if (s.charset) {
                    script.charset = s.charset;
                }
                if (s.cache === false) {
                    url = url + ( /\?/.test(url) ? "&" : "?" ) + "_=" + (new Date()).getTime();
                }
                script.src = url;
                script.id = _getFileName2(url) + '_script';
                head.appendChild(script);
                if (callback) {
                    document.addEventListener ? script.addEventListener("load", callback, false) : script.onreadystatechange = function () {
                        if (/loaded|complete/.test(script.readyState)) {
                            script.onreadystatechange = null
                            callback();
                        }
                    }
                }
            } else {
                if (callback) {
                    callback()
                }
            }
        }

        function _loadCss(id, url, callback) {
            if (id != "" && url != "" && $.inArray(url, hiSDKSettings.CssUrlSet) == -1) {
                hiSDKSettings.CssUrlSet.push(url);
                var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    css,
                    options,
                    s;
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
                s = options || {};
                url = url || s.url;
                callback = callback || s.success;
                css = document.createElement("link");
                css.async = s.async || false;
                css.type = "text/css";
                if (s.charset) {
                    css.charset = s.charset;
                }
                if (s.cache === false) {
                    url = url + ( /\?/.test(url) ? "&" : "?" ) + "_=" + (new Date()).getTime();
                }
                css.href = url;
                css.rel = "stylesheet"
                css.id = id + '_css';
                head.appendChild(css);
                if (callback) {
                    document.addEventListener ? css.addEventListener("load", callback, false) : css.onreadystatechange = function () {
                        if (/loaded|complete/.test(css.readyState)) {
                            css.onreadystatechange = null
                            callback()
                        }
                    }
                }
            } else {
                if (callback) {
                    callback()
                }
            }
        }

        function _removeScript(id) {
            $('#' + id + '_script').remove();
        }

        //获取当前焦点（丛按钮树获得）
        function _getCurrentFocus() {
            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.currentSelectedTree && hiSDKSettings.currentPage.currentSelectedTree.length > 0) {
                if (hiSDKSettings.currentPage.currentSelectedTree[hiSDKSettings.currentPage.currentSelectedTree.length - 1].CaEType == "GridUl") {
                    alert(hiSDKSettings.currentPage.currentSelectedTree[hiSDKSettings.currentPage.currentSelectedTree.length - 1].SelectedIndex)
                    return  hiSDKSettings.currentPage.currentSelectedTree[hiSDKSettings.currentPage.currentSelectedTree.length - 1].id;
                } else {
                    return  hiSDKSettings.currentPage.currentSelectedTree[hiSDKSettings.currentPage.currentSelectedTree.length - 1].id;
                }
            } else {
                return '';
            }
        }

        //获取当前焦点对象（丛按钮树获得）ver1.2
        function _getCurrentFocusObj() {
            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.currentSelectedTree && hiSDKSettings.currentPage.currentSelectedTree.length > 0) {
                return  hiSDKSettings.currentPage.currentSelectedTree[hiSDKSettings.currentPage.currentSelectedTree.length - 1];
            } else {
                return null;
            }
        }

        //判断SDKPage中是否存在某页面
        function isExistInSDKPages(a) {
            var exist = false;
            var ind = _getIndexById(SDKPages, a);
            if (ind != -1) {
                exist = true;
            }
            return exist;
        }

        //判断当前模块
        function isCurrentModule(a) {
            var isCur = false;
            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.module == a) {
                isCur = true;
            }
            return isCur;
        }

        function getTransXValue(a){
            var re=/translateX/;
            var value=0;
            if(re.test(a)){
                value = parseInt(a.replace(/[^0-9,-]/ig,""));
            }
            return value;
        }
        function getTransYValue(a){
            var re=/translateY/;
            var value=0;
            if(re.test(a)){
                value = parseInt(a.replace(/[^0-9,-]/ig,""));
            }
            return value;
        }

        //用于边界的回弹效果（标签容器，top/bottom/left/right，移动距离,动画时间，恢复动画时间）
        function rebound(tagName,position,dir,time1,time2) {
            if(currentPlatform_config == '5655_EU_MARKET'){ //5655 EU 去动画回弹效果
                time2=0;
            }
            if (!hiWebOsFrame.getKeyRepeatMode()) {
                var soucePos = $("#" + tagName).css("transform");
                if (!!tagName && !!position && !!time1 && time2) {
                    switch (position) {
                        case 'left':
                            offsetVal = getTransXValue(soucePos);
                            $("#" + tagName).css("transition", 'all ' + time1 + 's')
                            hiWebOsFrame.lockAllKeys("rebound");
                            setTimeout(function () {
                                $("#" + tagName).css("transform", 'translateX(' + (offsetVal - dir) + 'px)')
                                setTimeout(function () {
                                    $("#" + tagName).css("transform", 'translateX(' + (offsetVal) + 'px)')
                                    setTimeout(function () {
                                        $("#" + tagName).css("transition", 'all ' + time2 + 's')
                                        hiWebOsFrame.unLockAllKeys();
                                    }, 200)
                                }, 200)
                            }, 1)
                            break;
                        case 'right':
                            offsetVal = getTransXValue(soucePos);
                            $("#" + tagName).css("transition", 'all ' + time1 + 's')
                            hiWebOsFrame.lockAllKeys("rebound");
                            setTimeout(function () {
                                $("#" + tagName).css("transform", 'translateX(' + (offsetVal + dir) + 'px)')
                                setTimeout(function () {
                                    $("#" + tagName).css("transform", 'translateX(' + (offsetVal) + 'px)')
                                    setTimeout(function () {
                                        $("#" + tagName).css("transition", 'all ' + time2 + 's')
                                        hiWebOsFrame.unLockAllKeys();
                                    }, 200)
                                }, 200)
                            }, 1)
                            break;
                        case 'top':
                            offsetVal = getTransYValue(soucePos);
                            $("#" + tagName).css("transition", 'all ' + time1 + 's')
                            hiWebOsFrame.lockAllKeys("rebound");
                            setTimeout(function () {
                                $("#" + tagName).css("transform", 'translateY(' + (offsetVal - dir) + 'px)')
                                setTimeout(function () {
                                    $("#" + tagName).css("transform", 'translateY(' + (offsetVal) + 'px)')
                                    setTimeout(function () {
                                        $("#" + tagName).css("transition", 'all ' + time2 + 's')
                                        hiWebOsFrame.unLockAllKeys();
                                    }, 200)
                                }, 200)
                            }, 1)
                            break;
                        case 'bottom':
                            offsetVal = getTransYValue(soucePos);
                            $("#" + tagName).css("transition", 'all ' + time1 + 's')
                            hiWebOsFrame.lockAllKeys("rebound");
                            setTimeout(function () {
                                $("#" + tagName).css("transform", 'translateY(' + (offsetVal + dir) + 'px)')
                                setTimeout(function () {
                                    $("#" + tagName).css("transform", 'translateY(' + (offsetVal) + 'px)')
                                    setTimeout(function () {
                                        $("#" + tagName).css("transition", 'all ' + time2 + 's')
                                        hiWebOsFrame.unLockAllKeys();
                                    }, 200)
                                }, 200)
                            }, 1)
                            break;
                        default:
                            break;
                    }
                }
            }
        }

        //列出页面控制器内页面
        function listCurrentPages() {
            var str = "<br>按键锁状态:<br>" + hiSDKSettings.keySwitch;
            str += "<br><b>当前语种:</b>" + hiSDKSettings.currentLanguage + "(" + hiSDKSettings.languages[hiSDKSettings.currentLanguage] + ")<br>";
            str += "<br><b>页面管理器信息</b>(id/是否可见/来源/优先级/是否自动关闭):<br>";
            $.each(SDKPages, function (k, v) {
                var oriTxt = (!!v.origin) ? v.origin.id : "---";
                str += 'Page：' + v.id + " / " + v.visible + " / " + oriTxt + " / " + v.priority + " / " + v.module + " / " + v.AutoClose + '<br>';
            })
            if (!!hiSDKSettings.currentPage) {
                str += "<br><b>Current Page:</b><br>";
                str += 'ID:' + hiSDKSettings.currentPage.id;
                str += '<br>来源:';
                str += (!!hiSDKSettings.currentPage.origin) ? hiSDKSettings.currentPage.origin.id : "---";
                str += '<br>';
                str += '优先级:' + hiSDKSettings.currentPage.priority;
                str += '<br>';
                str += '按键信息：';
                if (!!hiSDKSettings.currentPage.keys) {
                    str += '已设定';
                    str += '<br>';
                    str += '<p>可用按键：';
                    if (!!hiSDKSettings.currentPage.keys.enable) {
                        str += hiSDKSettings.currentPage.keys.enable;
                    }
                    str += '</p>';
                    str += '<p>不可用按键：';
                    if (!!hiSDKSettings.currentPage.keys.disable) {
                        str += hiSDKSettings.currentPage.keys.disable;
                    }
                    str += '</p>';
                } else {
                    str += '未设定';
                }
                str += '<br>按键栈:';
                for (var i = 0; i < hiSDKSettings.KeyStack.Length(); i++) {
                    str += ';' + hiSDKSettings.KeyStack.KeyStack[i];
                }
            }
            if (str == '')str = "No pages!";
            return str;
        }

        function getKeyValues() {
            return hiSDKSettings.keyValues;
        }

        //获取前a项数据的累加值
        function _getArrayAValue(a, b) {
            var result = 0;
            for (var i = 0; i < Math.min(a.length, b + 1); i++) {
                result += a[i];
            }
            return result;
        }

        function _timerFun() {
            timer++;
            //console.log('timer:' + timer);
            //计算受保护的模块
            if (hiSDKSettings.AutoCloseTimeLength == 0) {
                hiSDKSettings.AutoCloseTimeLength = 1000000;
            }
            if (!!hiSDKSettings.currentPage && hiSDKSettings.currentPage.AutoClose) {
                hiSDKSettings.currentPage.AutoCloseTimeLength = hiSDKSettings.currentPage.isACFromSysValue ? hiSDKSettings.AutoCloseTimeLength : hiSDKSettings.currentPage.pageAutoCloseTimeLength;
                //检查是否有保护的页面
                var currentModule = hiSDKSettings.currentPage.module;
                var hasProtect = false;
                $.each(SDKPages, function (k, v) {
                    if (v.module == currentModule && v.visible == true && ($.inArray(v.id, hiSDKSettings.protectPages) != -1)) {
                        hasProtect = true;
                    }
                });
                if (!hasProtect && hiSDKSettings.currentPage.AutoCloseTimeLength < timer) {
                    var currentModuleName = currentModule;

                    //获取被关闭页面的来源2014-8-26
                    var beCloseOrigin = null;
                    if (!!hiSDKSettings.currentPage.origin) {
                        beCloseOrigin = getPageByIdFromSdkPages(getModuleOrigin(hiSDKSettings.currentPage));
                    }

                    destroyModule(currentModule, function () {
                        hiSDKSettings.defaultClosePageCallback(currentModuleName, beCloseOrigin);
                    }, true);//参数为true表示自动关闭
                }
            }

            //随时钟执行的函数
            if (!!hiSDKSettings.SDKIntervalFunList && getFName(hiSDKSettings.SDKIntervalFunList) != null) {
                //-GHL_DEL-//console.log(hiSDKSettings.SDKIntervalFunList)
                //-GHL_DEL-//console.log(getFName(hiSDKSettings.SDKIntervalFunList))
                for (var x in hiSDKSettings.SDKIntervalFunList) {
                    hiSDKSettings.SDKIntervalFunList[x](timer);
                }
            }
        }

        function registerKeyCodesNormal() {
            keyboard.registerKeyCodes([ VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_MENU, VK_STOP, VK_EPG, VK_F1,VK_POWER_KEY_PAD,
                VK_0, VK_1, VK_2, VK_3, VK_4, VK_5, VK_6, VK_7, VK_8, VK_9, VK_CHANNEL_UP, VK_CHANNEL_DOWN,
                VK_MENU, VK_INFO, VK_RED, VK_GREEN, VK_YELLOW, VK_BLUE, VK_PIP, VK_HOME, VK_BACK, VK_PVR, VK_T_SHIFT
                , VK_PLAY, VK_PAUSE, VK_FAST_FWD, VK_FAST_BKW, VK_PRE_CH, VK_MEDIA, VK_LIVETV,
                VK_TOOLS, VK_LAST, VK_NEXT, VK_EXIT, VK_CH_LIST, VK_ZOOM, VK_PICTURE, VK_S_MODE, VK_CUSTOMER_3D, VK_LANGUAGE, VK_SUBTITLE,
                VK_KEYPAD_VOLUME_UP, VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_CHANNEL_UP, VK_FAC_M, VK_CC, VK_SLEEP, VK_TELETEXT,
                VK_KEYPAD_CHANNEL_DOWN, VK_SPACE, VK_SOURCE, VK_KEYPAD_INPUT, VK_ALLAPP, VK_VUDU, VK_YOUTUBE, VK_AMAZON, VK_NETFLIX, VK_CC, VK_SHORT_LINE,
                VK_KEYPAD_MENU, VK_BT_CONNECT, VK_VOICE,VK_LOWBATTERY,
                VK_A,
                VK_B,
                VK_C,
                VK_D,
                VK_E,
                VK_F,
                VK_G,
                VK_H,
                VK_I,
                VK_J,
                VK_K,
                VK_L,
                VK_M,
                VK_N,
                VK_O,
                VK_P,
                VK_Q,
                VK_R,
                VK_S,
                VK_T,
                VK_U,
                VK_V,
                VK_W,
                VK_X,
                VK_Y,
                VK_Z,
                VK_a,
                VK_b,
                VK_c,
                VK_d,
                VK_e,
                VK_f,
                VK_g,
                VK_h,
                VK_i,
                VK_j,
                VK_k,
                VK_l,
                VK_m,
                VK_n,
                VK_o,
                VK_p,
                VK_q,
                VK_r,
                VK_s,
                VK_t,
                VK_u,
                VK_v,
                VK_w,
                VK_x,
                VK_y,
                VK_z,
                VK_KB_Backspace,
                VK_BACK_SPACE,
                VK_KB_COMMA,
                VK_KB_DOT,
                VK_KB_SLASH,
                VK_KB_LT,
                VK_KB_GT,
                VK_KB_SEMICOLON,
                VK_KB_COLON,
                VK_KB_QUESTION,
                VK_KB_SQM,
                VK_KB_DQM,
                VK_KB_EM,
                VK_KB_AT,
                VK_KB_WELL,
                VK_KB_DOLLOR,
                VK_KB_PERSENT,
                VK_KB_JIAN,
                VK_KB_AND,
                VK_KB_STAR,
                VK_KB_LEFTBR,
                VK_KB_RIGHTBR,
                VK_KB_BIGLEFTBR,
                VK_KB_BIGRIGHTBR,
                VK_KB_LEFTBRACKET,
                VK_KB_RIGHTBRACKET,
                VK_KB_HOR,
                VK_KB_DASH,
                VK_KB_DUN,
                VK_KB_SUB,
                VK_KB_EQEAL,
                VK_KB_ADD,
                VK_KB_WAVE,
                VK_KB_RIGHTDASH,
                VK_KB_BlankString,
                VK_VOLUME_UP,
                VK_VOLUME_DOWN,
                VK_MUTE,
                VK_ASPECT,
                VK_KPAD,
                VK_STICKER,
                VK_AUDIO_DESCRIPTION,
                VK_WUAKI
            ]);
            keyboard.setWantGroup(7);
        }

        function registerKeyCodesLobster() {
            keyboard.registerKeyCodes([ VK_EPG, VK_MENU, VK_ZOOM, VK_PICTURE,
                VK_PIP, VK_HOME, VK_PVR, VK_EXIT, VK_MEDIA, VK_LIVETV, VK_VOLUME_DOWN, VK_VOLUME_UP, VK_KEYPAD_VOLUME_UP, VK_KEYPAD_VOLUME_DOWN, VK_KPAD, VK_BT_CONNECT,VK_LOWBATTERY,VK_KEYPAD_MENU]);
        }

        function registerKeyCodesExcludeKey(key) {
            var baseKey = [
                VK_HOME, VK_EXIT, VK_LIVETV, VK_MENU, VK_ALLAPP,
                VK_NETFLIX, VK_VUDU, VK_SOURCE, VK_MUTE, VK_YOUTUBE,VK_WUAKI,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_AMAZON, VK_FAC_M,
                VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_VOLUME_UP, VK_ASPECT,
                VK_KEYPAD_CHANNEL_DOWN, VK_KEYPAD_CHANNEL_UP, VK_EPG, VK_GUIDE, VK_KPAD, VK_BT_CONNECT,VK_LOWBATTERY,VK_KEYPAD_MENU, VK_POWER_KEY_PAD
            ];
            if (!key || key.length < 1) {
                key = [];
            }
            for (var i = 0; i < key.length; i++) {
                var idx = baseKey.indexOf(key[i]);
                idx >= 0 && baseKey.splice(idx, 1);
            }
            keyboard.registerKeyCodes(baseKey);
            keyboard.setWantGroup(0);
        }

        function registerKeyCodesForAppWithKey(key) {
            var baseKey = [
                VK_HOME, VK_EXIT, VK_LIVETV, VK_MENU, VK_ALLAPP,
                VK_NETFLIX, VK_VUDU, VK_SOURCE, VK_MUTE, VK_YOUTUBE,VK_WUAKI,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_AMAZON, VK_FAC_M,
                VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_VOLUME_UP, VK_SLEEP, VK_ASPECT,
                VK_KEYPAD_CHANNEL_DOWN, VK_KEYPAD_CHANNEL_UP, VK_EPG, VK_GUIDE, VK_KPAD, VK_BT_CONNECT,VK_LOWBATTERY,VK_KEYPAD_MENU, VK_POWER_KEY_PAD
            ];
            if (!key || key.length < 1) {
                key = [];
            }
            for (var i = 0; i < key.length; i++) {
                baseKey.push(key[i]);
            }
            keyboard.registerKeyCodes(baseKey);
            keyboard.setWantGroup(0);
        }

        function registerKeyCodesForSettingOnApp() {
            var baseKey = [
                VK_EXIT, VK_LIVETV, VK_MENU, VK_LEFT, VK_ASPECT,
                VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_0, VK_1, VK_2, VK_3, VK_4, VK_5, VK_6, VK_HOME,
                VK_7, VK_8, VK_9, VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE, VK_ALLAPP,
                VK_NETFLIX, VK_VUDU, VK_YOUTUBE, VK_AMAZON,VK_WUAKI,
                VK_SOURCE,
                VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_VOLUME_UP, VK_FAC_M,VK_KEYPAD_MENU,
                VK_KEYPAD_CHANNEL_DOWN, VK_KEYPAD_CHANNEL_UP, VK_EPG, VK_GUIDE, VK_KPAD, VK_BT_CONNECT,VK_LOWBATTERY, VK_POWER_KEY_PAD
            ];
            for (var i = VK_A; i <= VK_Z; i++) {
                baseKey.push(i);
            }
            for (var i = VK_a; i <= VK_KB_BlankString; i++) {
                baseKey.push(i);
            }
            keyboard.registerKeyCodes(baseKey);
            keyboard.setWantGroup(7);
        }

        //加锁后自动解锁函数
        function autoUnlock() {
            hiSDKSettings.isLocking = true;
            clearTimeout(hiSDKSettings.lockHandler);
            hiSDKSettings.lockHandler = setTimeout(function () {
                if (hiSDKSettings.isLocking) {
                    DBG_ERROR("lock timeout, unlock all.");
                    hiSDKSettings.isLocking = false;
                    lockCntr = 0;
                    keyboard.set_listen(1);
                    hiSDKSettings.isLoading = false;
                    hiSDKSettings.keySwitch = true;
                    clearTimeout(hiSDKSettings.displayLoading);
                    clearTimeout(hiSDKSettings.lockLoading);
                    //$('#sdkLoading').css('display', 'none');
                    hideDynamicLoading();
                    $("#black_screen").css("display", "none");
                }
            }, 30000);
        }

        var dynamicLoadingTimer = 0, IMAGE_COUNT = 4, dynamicLoadingFlag = false;
        function addLoadingRes(flag){
            dynamicLoadingFlag = !!flag;
            if(!dynamicLoadingFlag) return;
            var resStr = "";
            for (var i = 0; i < IMAGE_COUNT; i++) {
                //resStr += ('<img id="loading_res_' + i + '" src="img/sdk/loading_res/res_' + i + '.png" class="sdkLoadingResHide">');
                resStr += ('<img id="loading_res_' + i + '" src="img/sdk/loading_res_2/res_' + i + '.png" class="sdkLoadingResHide">');
            }
            $("#sdkDynamicLoading").html(resStr);
        }

        function showDynamicLoading(hideInd, showInd){
            if(dynamicLoadingFlag) {
                if (!showInd || showInd > IMAGE_COUNT - 1) showInd = 0;
                if (-1 == hideInd) {
                    $("#sdkDynamicLoading").attr("class", "sdkLoadingPanelShow");
                }
                else {
                    $("#loading_res_" + hideInd).attr("class", "sdkLoadingResHide");
                }
                $("#loading_res_" + showInd).attr("class", "sdkLoadingResShow");
                dynamicLoadingTimer = setTimeout(showDynamicLoading, 400, showInd, showInd + 1);
            }
            else{
                $('#sdkLoading').css('display', 'block');
            }
        }

        function hideDynamicLoading(){
            if(dynamicLoadingFlag) {
                clearTimeout(dynamicLoadingTimer);
                $("#sdkDynamicLoading").attr("class", "sdkLoadingPanelHide");
                $("#sdkDynamicLoading img").attr("class", "sdkLoadingResHide");
            }
            else{
                $('#sdkLoading').css('display', 'none');
            }
        }

        //加入Loading遮罩，屏蔽按键,响应Exit键。参数1：自动关闭秒数，0为不关闭；参数2：标识
        function startLoadingExcludeExit(delaySec, description) {
            if (repeatPushFlag) {
                repeatPushFlag = false;
                document.addEventListener("keypress", keyPressHandler, false);
            }
            lockAllKeysExcludeExitKey(description);
            hiSDKSettings.isLoading = true;
            //hiSDKSettings.isLocking = true;修改为
            autoUnlock();
            //$('#sdkLoading').css('display', 'block');
            showDynamicLoading(-1, 0);
            if (delaySec > 0) {
                hiSDKSettings.lockLoading = setTimeout('hiWebOsFrame.endLoading("' + description + '")', delaySec * 1000);
            }
        }

        function startLoadingExcludeExitForMedia(delaySec, description) {
            if (repeatPushFlag) {
                repeatPushFlag = false;
                document.addEventListener("keypress", keyPressHandler, false);
            }
            lockAllKeysExcludeExitKey(description);
            hiSDKSettings.isLoading = true;
            //hiSDKSettings.isLocking = true;修改为
            autoUnlock();
            hiSDKSettings.displayLoading = setTimeout(function () {
                //$('#sdkLoading').css('display', 'block');
                showDynamicLoading(-1, 0);
            }, 2000);
            if (delaySec > 0) {
                hiSDKSettings.lockLoading = setTimeout('hiWebOsFrame.endLoading("' + description + '")', delaySec * 1000);
            }
        }

        //加入Loading遮罩，屏蔽按键，参数1：自动关闭秒数，0为不关闭；参数2：标识
        function startLoading(delaySec, description) {
            if (repeatPushFlag) {
                repeatPushFlag = false;
                document.addEventListener("keypress", keyPressHandler, false);
            }
            lockAllKeys(description);
            hiSDKSettings.isLoading = true;
            //hiSDKSettings.isLocking = true;修改为
            autoUnlock();
            //$('#sdkLoading').css('display', 'block');
            showDynamicLoading(-1, 0);
            if (delaySec > 0) {
                hiSDKSettings.lockLoading = setTimeout('hiWebOsFrame.endLoading("' + description + '")', delaySec * 1000);
            }
        }

        function startLoadingForMedia(delaySec, description) {
            if (repeatPushFlag) {
                repeatPushFlag = false;
                document.addEventListener("keypress", keyPressHandler, false);
            }
            lockAllKeys(description);
            hiSDKSettings.isLoading = true;
            //hiSDKSettings.isLocking = true;修改为
            autoUnlock();
            hiSDKSettings.displayLoading = setTimeout(function () {
                //$('#sdkLoading').css('display', 'block');
                showDynamicLoading(-1, 0);
            }, 2000);

            if (delaySec > 0) {
                hiSDKSettings.lockLoading = setTimeout('hiWebOsFrame.endLoading("' + description + '")', delaySec * 1000);
            }
        }

        //移除Loading遮罩，解锁按键，参数：识别标识
        function endLoading(description) {
            debugPrint('---SDK endLoading:' + description + '---');
            hiSDKSettings.isLoading = false;
            hiSDKSettings.isLocking = false;
            clearTimeout(hiSDKSettings.displayLoading);
            clearTimeout(hiSDKSettings.lockLoading);
            //$('#sdkLoading').css('display', 'none');
            hideDynamicLoading();
            unLockAllKeys(description);
        }

        var lockCntr = 0;
        //锁定所有按键,参数：调用函数
        function lockAllKeys(description) {
            try {

                if(1 == (++lockCntr)){
                    keyboard.set_listen(0);
                    hiSDKSettings.keySwitch = false;
                    hiSDKSettings.keySwitchExclude = [];
                }
                DBG_ALWAYS("lock lockCntr[" + lockCntr + "], from["+description+"]");
                //hiSDKSettings.isLocking = true;修改为
                autoUnlock();
            }
            catch (ex) {
                debugPrint(ex.message, DebugLevel.ERROR);
            }
        }

        //锁定除Exit之外所有按键
        function lockAllKeysExcludeExitKey(description) {
            try {
                //tv && model.system.setLockKeyState(1);

                if(1 == (++lockCntr)) {
                    keyboard.set_listen(0);
                    hiSDKSettings.keySwitch = false;
                    hiSDKSettings.keySwitchExclude = [hiSDKSettings.keyValues.keyExit];
                }
                DBG_ALWAYS("lock lockCntr[" + lockCntr + "], from["+description+"]");
                //hiSDKSettings.isLocking = true;修改为
                autoUnlock();
            }
            catch (ex) {
                debugPrint(ex.message, DebugLevel.ERROR);
            }
        }

        //解锁所有按键
        function unLockAllKeys(description) {
            try {
                if(1 == (lockCntr--)){
                    keyboard.set_listen(1);
                    hiSDKSettings.isLocking = false;
                    hiSDKSettings.keySwitch = true;
                }
                if(lockCntr < 0){
                    DBG_ERROR("unlock lockCntr["+lockCntr+"], from["+description+"], reset to 0");
                    lockCntr = 0;
                    keyboard.set_listen(1);
                    hiSDKSettings.isLocking = false;
                    hiSDKSettings.keySwitch = true;
                }
                else{
                    DBG_ALWAYS("unlock lockCntr[" + lockCntr + "], from["+description+"]");
                }

            }
            catch (ex) {
                debugPrint(ex.message, DebugLevel.ERROR);
            }
        }

        function SendMheg5Status(is_mheg5_active) {
            try {
                keyboard.set_mheg5_active(is_mheg5_active);
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }



        //关闭定时器，关闭定时关闭检查
        function closeTimeFun() {
            timer = 0;
            clearInterval(sh);
        }

        //恢复定时器，恢复定时关闭检查
        function restoreTimeFun() {
            timer = 0;
            clearInterval(sh);
            sh = setInterval(_timerFun, 1000);
        }

        //获取页面管理器
        function getSDKPages() {
            return SDKPages;
        }

        //获取模块来源，参数，页面
        function getModuleOrigin(page) {
            function getOri(p) {
                if (p.origin != null && p.origin.module == p.module) {
                    return getOri(p.origin);
                } else {
                    return p.origin;
                }
            }

            return getOri(page).id;
        }

        function getIsLoading() {
            return hiSDKSettings.isLoading;
        }

        function getIsLocking() {
            return hiSDKSettings.isLocking;
        }

        function getTimer() {
            return timer;
        }

        function getKeyStackTop() {
            return hiSDKSettings.KeyStack.Top();
        }

        function getKeyRepeatMode() {
            return repeatPushFlag;
        }

        function getKeyStackLength() {
            return hiSDKSettings.KeyStack.Length();
        }

        function clearKeyStack() {
            hiSDKSettings.KeyStack.Clear();
        }

        function getOtherConfig() {
            return hiSDKSettings.otherConfig;
        }

        function setOtherConfig(a, b) {
            eval("hiSDKSettings.otherConfig." + a + "=" + b);
        }

        //增加html文本到SDK
        function setHtmlTxt(a, b) {
            hiSDKSettings.html[a] = b;
        }

        //获取SDK html
        function getHtmlTxt(a) {
            if (!!hiSDKSettings.html[a]) {
                return hiSDKSettings.html[a];
            } else {
                return "";
            }
        }

        //获取整体SDK html
        function getAllHtml() {
            return hiSDKSettings.html;
        }

        //注册SDK主时钟函数
        function registerSDKIntervalFun(sign, fn) {
            if (!!hiSDKSettings.SDKIntervalFunList) {
                hiSDKSettings.SDKIntervalFunList[sign] = fn;
            }
        }

        //注销SDK主时钟函数
        function unRegisterSDKIntervalFun(sign) {
            if (!!hiSDKSettings.SDKIntervalFunList) {
                delete hiSDKSettings.SDKIntervalFunList[sign];
            }
        }

        //根据大区动态载入keyboard.js
        function _loadKeyboardJs(fun) {
            //计算keyboardjs路径
            var keyboardPath = hiSDKSettings.keyboard.common;

            for (var a in hiSDKSettings.keyboard) {
                if (a == hiSDKSettings.verArea && hiSDKSettings.keyboard[a] != "") {
                    keyboardPath = hiSDKSettings.keyboard[a];
                }
            }
            var script = document.createElement('script');
            script.type = "text/javascript";

            script.src = keyboardPath;
            script.onload = function () {
                //-GHL_DEL-//console.log(keyboardPath + " is loaded!")
                fun();
            }
            document.head.appendChild(script);
        }

        //根据大区动态载入Model,参数：a，当前model对象,b,当前大区
        function loadExtendModel(a, b, c) {
            var extendModels = hiSDKSettings.models[b];
            var extendModelJsArr = [];
            var extendModelNameArr = [];
            var extendModelMethodArray = [];
            for (var i = 0; i < extendModels.length; i++) {
                extendModelJsArr.push(extendModels[i].path);
                extendModelNameArr.push(extendModels[i].name);
                extendModelMethodArray.push(extendModels[i].method);
            }
            var extendModelLoader = new ModelLoader(function () {
                for (var j = 0; j < extendModelNameArr.length; j++) {
                    eval('a.registerExtendModel("' + extendModelNameArr[j] + '",' + extendModelMethodArray[j] + ')');
                }
                c();
            }, extendModelJsArr);
            if (extendModelNameArr.length == 0) {
                c();
            }
        }

        //获取当前国家
        function getCurrentCountry() {
            return hiSDKSettings.verCountry;
        }

        function getCurrentArea() {
            return hiSDKSettings.verArea;
        }

        function getCurrentSubArea() {
            return hiSDKSettings.verSubArea;
        }

        //设置当前国家
        function setCurrentCountry(a) {
            hiSDKSettings.verCountry = a;
        }

        //获取当前品牌
        function getCurrentBrand() {
            return hiSDKSettings.verBrand;
        }

        //设置当前品牌
        function setCurrentBrand(a) {
            hiSDKSettings.verBrand = a;
        }

        //获取当前
        function translate(a) {
            var translateResult;
            eval('translateResult =hiSDKSettings.SDKTranslatePackages["' + a + '"]');
            console.log(translate)
            return translateResult[0];
//            return translateResult[hiSDKSettings.currentLanguage];
        }


        //获取kPad display值
        function getKPadDisplay() {
            return hiSDKSettings.kPad.display;
        }

        //设置kPad display值
        function setKPadDisplay(a) {
            hiSDKSettings.kPad.display = a;
        }

        //根据Id获取hiTemplatePages
        function getTemplateConfig(a) {
            for (var i = 0; i < hiSDKSettings.hiTemplatePages.length; i++) {
                if (a == hiSDKSettings.hiTemplatePages[i].id) {
                    return hiSDKSettings.hiTemplatePages[i];
                }
            }
            return null;
        }

        $(document).ready(function () {
            //console.log('_test SDK document ready!');
            //SDK内部使用自定义函数
            //$(document).myFunction_test('内部使用函数');
            //以下为SDK自定义函数、控件部分(documentReady中)
            $.fn.myFunctionOnSDKReady_test = function (options) {
                //console.log('_test SDK在documentReady中的自定义函数myFunctionOnReady：' + options);
            }

            // hiweb id标识
            $body = $('#hiweb');

            if ($body.length === 0) {
                $body = $(document.body).attr('id', 'hiweb');
            }

            $body.bind('click', clickHandler).bind('mousedown', clickHandler);

            var startHash = location.hash;

            if (tv) {
                document.addEventListener("keydown", keyDownHandler, false);
                document.addEventListener("keypress", keyPressHandler, false);
                document.addEventListener("keyup", keyUpHandler, false);
                //registerKeyCodesNormal();
            }
            else {
                $(window).bind('keydown', keyDownHandler).bind('hashchange', clickHandler);
                $(window).bind('keyup', keyUpHandler);
                //$(window).bind('keypress', keyPressHandler);
            }
        })

        //以下为SDK自定义函数、控件部分,
        $.fn.myFunction_test = function (options) {
            //console.log('_test 自定义函数myFunction：' + options);
        }

        var publicObj = {
            SDKFunction_test: SDKFunction_test,
            initA: initA,
            createPage: createPage,
            removePage: removePage,
            closeModule: closeModule,
            destroyModule: destroyModule,
            hiComponent: HiComponent,
            getCurrentLanguage: getCurrentLanguage,
            getCurrentLanguageIndex: getCurrentLanguageIndex,
            setLanguage: setLanguage,
            getCurrentPageId: getCurrentPageId,
            getCurrentPage: getCurrentPage,
            getPageByIdFromSdkPages: getPageByIdFromSdkPages,
            isPageExist: isExistInSDKPages,
            isCurrentModule: isCurrentModule,
            listPages: listCurrentPages,
            getKeyValues: getKeyValues,
            closeModuleExcludeArray: closeModuleExcludeArray,
            setAutoCloseTimeLength: setAutoCloseTimeLength,
            getAutoCloseTimeLength: getAutoCloseTimeLength,
            pushProtectPages: pushProtectPages,
            popProtectPages: popProtectPages,
            getProtectPages: getProtectPages,
            isSDKPagesBeProtected: isSDKPagesBeProtected,
            isCurrentPageBeProtected: isCurrentPageBeProtected,
            //isBeProtected: isBeProtected,
            enablePageKeys: enablePageKeys,
            disablePageKeys: disablePageKeys,
            disablePageKeysRemove: disablePageKeysRemove,
            enablePageKeysRemove: enablePageKeysRemove,
            clearEnablePageKeys: clearEnablePageKeys,
            clearDisablePageKeys: clearDisablePageKeys,
            registerKeyCodesNormal: registerKeyCodesNormal,
            registerKeyCodesLobster: registerKeyCodesLobster,
            registerKeyCodesForAppExcludeKey: registerKeyCodesExcludeKey,
            registerKeyCodesForAppWithKey: registerKeyCodesForAppWithKey,
            registerKeyCodesForSettingOnApp: registerKeyCodesForSettingOnApp,
            addLoadingRes: addLoadingRes,
            showDynamicLoading: showDynamicLoading,
            hideDynamicLoading: hideDynamicLoading,
            startLoading: startLoading,
            startLoadingForMedia: startLoadingForMedia,
            startLoadingExcludeExit: startLoadingExcludeExit,
            startLoadingExcludeExitForMedia: startLoadingExcludeExitForMedia,
            endLoading: endLoading,
            lockAllKeys: lockAllKeys,
            lockAllKeysExcludeExitKey: lockAllKeysExcludeExitKey,
            unLockAllKeys: unLockAllKeys,
            SendMheg5Status: SendMheg5Status,
            clearTimeFun: closeTimeFun,
            restoreTimeFun: restoreTimeFun,
            getSDKPages: getSDKPages,
            getModuleOrign: getModuleOrigin,
            getIsLoading: getIsLoading,
            getIsLocking: getIsLocking,
            getTimer: getTimer,
            getKeyStackTop: getKeyStackTop,
            getKeyStackLength: getKeyStackLength,
            getKeyRepeatMode: getKeyRepeatMode,
            clearKeyStack: clearKeyStack,
            getOtherConfig: getOtherConfig,
            setOtherConfig: setOtherConfig,//参数a、b，其中b为字符串，可加单引号
            setHtmlTxt: setHtmlTxt,
            getHtmlTxt: getHtmlTxt,
            getAllHtml: getAllHtml,
//            _loadKeyboardJs:_loadKeyboardJs 内部
            registerSDKIntervalFun: registerSDKIntervalFun,
            unRegisterSDKIntervalFun: unRegisterSDKIntervalFun,
            loadExtendModel: loadExtendModel,//扩展的Model载入，参数：a，当前model对象,b,当前大区
            getCurrentCountry: getCurrentCountry,
            setCurrentCountry: setCurrentCountry,
            getCurrentArea: getCurrentArea,
            getCurrentSubArea: getCurrentSubArea,
            getCurrentBrand: getCurrentBrand,
            setCurrentBrand: setCurrentBrand,
            translate: translate,
            getKPadDisplay: getKPadDisplay,
            setKPadDisplay: setKPadDisplay,
            getHTMLDir: getHTMLDirection,
            getTemplateConfig: getTemplateConfig,//ver1.2
            SDKLoadCss: _loadCss,//ver1.2
            SDKGetFileName: _getFileName,//ver1.2
            initCurrentPageTemplatesInfo: initCurrentPageTemplatesInfo, //ver1.2
            getCurrentTemplateIdx: getCurrentTemplateIdx,
            setCurrentTemplateIdx: setCurrentTemplateIdx,
            getCurrentTemplateSign: getCurrentTemplateSign,
            getCurrentTemplateFirstFocusId: getCurrentTemplateFirstFocusId,
            getCurrentTemplateFirstFocusIdByIdx: getCurrentTemplateFirstFocusIdByIdx,
            getCurrentTemplateRelativeLeft: getCurrentTemplateRelativeLeft,
            setCurrentTemplateRelativeLeft: setCurrentTemplateRelativeLeft,
            getCurrentTemplateFocus: getCurrentTemplateFocus,
            gethiModulePages: gethiModulePages,
            getModulePageIdx: getModulePageIdx,
            setModuleAttr: setModuleAttr,
            getModuleAttr: getModuleAttr,
            getTemplatePositionArray: getTemplatePositionArray,
            getTemplateCurrentFocus: getTemplateCurrentFocus,
            getTemplatePositionByIdx: getTemplatePositionByIdx,
            getTemplatePositionByName: getTemplatePositionByName,
            rebound:rebound
        }

        return publicObj;
    }

    hiWebOsCore.prototype.extensions = [];

    if (!!window.Zepto) {
        (function ($) {
            $.hiWebOs = function (options) {
                options.framework = $;
                return hiWebOsCore(options);
            }

            $.fn.prop = $.fn.attr;

            $.hiWebOs.addExtension = function (extension) {
                hiWebOsCore.prototype.extensions.push(extension);
            }

            $.fn.innerComponent = function () {
                //alert('SDK内部部件位置')
            };

//            $.fn.switchDiv=function(data,options){
//                alert('switchDiv')
//            };
//            $.fn.button=function(data,options){};

        })(Zepto);
    }
})
    ();
