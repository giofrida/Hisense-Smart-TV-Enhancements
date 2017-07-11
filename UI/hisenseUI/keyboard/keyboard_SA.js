//键值定义部分移至keyDefine.js文件
function Keyboard() {
    var m_registeredKeyCodes = {};
    var key_hasProcessFlag = false;
    var currkey = {};
    //------------------------------------------------------------------
    // SYSCMD TO CE-HTML keycode mapping
    //------------------------------------------------------------------
    var SYSCMD_KEYCODE_MAP = {};
    var KEYBOARD_KEYCODE_SCANCODE_MAP = {};
    {
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ARROW_UP] = VK_UP;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ARROW_DOWN] = VK_DOWN;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ARROW_LEFT] = VK_LEFT;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ARROW_RIGHT] = VK_RIGHT;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_OK] = VK_ENTER;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_0] = VK_0;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_1] = VK_1;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_2] = VK_2;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_3] = VK_3;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_4] = VK_4;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_5] = VK_5;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_6] = VK_6;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_7] = VK_7;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_8] = VK_8;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_9] = VK_9;

        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ONOFF] = VK_POWER;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_MUTE] = VK_MUTE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PRE_CH] = VK_PRE_CH;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_INFO] = VK_INFO;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_VOLUME_UP] = VK_VOLUME_UP;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_VOLUME_DOWN] = VK_VOLUME_DOWN;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_CHANNEL_UP] = VK_CHANNEL_UP;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_CHANNEL_DOWN] = VK_CHANNEL_DOWN;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_DMP] = VK_MEDIA;//temp media
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_CUSTOMER_3D] = VK_CUSTOMER_3D;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PIP] = VK_PIP;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_EPG] = VK_EPG;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_TV] = VK_LIVETV;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_CH_LIST] = VK_CH_LIST;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_MENU] = VK_MENU;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_SETTINGS] = VK_TOOLS;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_OK] = VK_ENTER;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_END] = VK_END;//temp exit
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_EXIT] = VK_EXIT;//temp back   //changed by ghl --
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ASSIST] = VK_HOME; //tem home
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_RED] = VK_RED;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_GREEN] = VK_GREEN;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_YELLOW] = VK_YELLOW;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_BLUE] = VK_BLUE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PLAY] = VK_PLAY;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PAUSE] = VK_PAUSE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_STOP] = VK_STOP;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_DMP_EXIT] = VK_STOP;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PVR] = VK_PVR;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_LAST] = VK_LAST;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_NEXT] = VK_NEXT;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_FAST_FWD] = VK_FAST_FWD;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_FAST_BKW] = VK_FAST_BKW;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_TEXT] = VK_TELETEXT;
        //SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_STILL ]          = VK_STILL;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ZOOM] = VK_ZOOM;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_T_SHIFT] = VK_T_SHIFT;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PICTURE] = VK_PICTURE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD__S_MODE] = VK_S_MODE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_SOUNDMENU] = VK_S_MODE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_LANGUAGE] = VK_LANGUAGE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_SUBTITLE] = VK_SUBTITLE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_FAC_F1] = VK_F1;
        SYSCMD_KEYCODE_MAP[guijs.KEYPAD_CHANNEL_UP] = VK_KEYPAD_CHANNEL_UP;
        SYSCMD_KEYCODE_MAP[guijs.KEYPAD_CHANNEL_DOWN] = VK_KEYPAD_CHANNEL_DOWN;
        SYSCMD_KEYCODE_MAP[guijs.KEYPAD_VOLUME_UP] = VK_KEYPAD_VOLUME_UP;
        SYSCMD_KEYCODE_MAP[guijs.KEYPAD_VOLUME_DOWN] = VK_KEYPAD_VOLUME_DOWN;
        SYSCMD_KEYCODE_MAP[guijs.KEYPAD_INPUT] = VK_KEYPAD_INPUT;
        SYSCMD_KEYCODE_MAP[guijs.KEYPAD_MENU] = VK_KEYPAD_MENU;

        //add by ghl------------------
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_BACK] = VK_BACK;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_HOME] = VK_HOME;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_POWER] = VK_POWER;
        SYSCMD_KEYCODE_MAP[guijs.SYSPRG_ALLAPP] = VK_ALLAPP;
        SYSCMD_KEYCODE_MAP[guijs.SYSPRG_NETFLIX] = VK_NETFLIX;
        SYSCMD_KEYCODE_MAP[guijs.SYSPRG_VUDU] = VK_VUDU;
        SYSCMD_KEYCODE_MAP[guijs.SYSPRG_AMAZON] = VK_AMAZON;
        SYSCMD_KEYCODE_MAP[guijs.SYSPRG_YOUTUBE] = VK_YOUTUBE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_DIGIT_DOT] = VK_SHORT_LINE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_CC] = VK_CC;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_INPUT] = VK_SOURCE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_SLEEP] = VK_SLEEP;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_FAC_M] = VK_FAC_M;

        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PICMODE_WIDE] = VK_PICMODE_WIDE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PICMODE_NORMAL] = VK_PICMODE_NORMAL;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PICMODE_CINEMA] = VK_PICMODE_CINEMA;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PICMODE_PANORAMA] = VK_PICMODE_PANORAMA;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_PICMODE_ZOOM] = VK_PICMODE_ZOOM;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_SERVICE_TUNER1] = VK_SERVICE_TUNER1;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_SERVICE_TUNER2] = VK_SERVICE_TUNER2;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_AV1] = VK_AV1;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_AV2] = VK_AV2;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_AV3] = VK_AV3;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_COMP1] = VK_COMPONENT1;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_COMP2] = VK_COMPONENT2;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_COMP3] = VK_COMPONENT3;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_HDMI1] = VK_HDMI1;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_HDMI2] = VK_HDMI2;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_HDMI3] = VK_HDMI3;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_HDMI4] = VK_HDMI4;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_HDMI5] = VK_HDMI5;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_VGA] = VK_VGA;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_ASPECT] = VK_ASPECT;

        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_BT_CONNECT] = VK_BT_CONNECT;
	SYSCMD_KEYCODE_MAP[guijs.SYSCMD_VOICE] = VK_VOICE;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_KEYPADE] = VK_KPAD;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_STICKER] = VK_STICKER;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_DESCRIPTION] = VK_AUDIO_DESCRIPTION;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_WUAKI] = VK_WUAKI;
        SYSCMD_KEYCODE_MAP[guijs.SYSCMD_LOW_BATTERY] = VK_LOWBATTERY;


        //add end-----------------------


        var KEYBOARD_KEYCODE_MAP = {};

        KEYBOARD_KEYCODE_MAP[VK_0] = VK_0;
        KEYBOARD_KEYCODE_MAP[VK_1] = VK_1;
        KEYBOARD_KEYCODE_MAP[VK_2] = VK_2;
        KEYBOARD_KEYCODE_MAP[VK_3] = VK_3;
        KEYBOARD_KEYCODE_MAP[VK_4] = VK_4;
        KEYBOARD_KEYCODE_MAP[VK_5] = VK_5;
        KEYBOARD_KEYCODE_MAP[VK_6] = VK_6;
        KEYBOARD_KEYCODE_MAP[VK_7] = VK_7;
        KEYBOARD_KEYCODE_MAP[VK_8] = VK_8;
        KEYBOARD_KEYCODE_MAP[VK_9] = VK_9;

        KEYBOARD_KEYCODE_MAP[VK_A] = VK_A;
        KEYBOARD_KEYCODE_MAP[VK_B] = VK_B;
        KEYBOARD_KEYCODE_MAP[VK_C] = VK_C;
        KEYBOARD_KEYCODE_MAP[VK_D] = VK_D;
        KEYBOARD_KEYCODE_MAP[VK_E] = VK_E;
        KEYBOARD_KEYCODE_MAP[VK_F] = VK_F;
        KEYBOARD_KEYCODE_MAP[VK_G] = VK_G;
        KEYBOARD_KEYCODE_MAP[VK_H] = VK_H;
        KEYBOARD_KEYCODE_MAP[VK_I] = VK_I;
        KEYBOARD_KEYCODE_MAP[VK_J] = VK_J;
        KEYBOARD_KEYCODE_MAP[VK_K] = VK_K;
        KEYBOARD_KEYCODE_MAP[VK_L] = VK_L;
        KEYBOARD_KEYCODE_MAP[VK_M] = VK_M;
        KEYBOARD_KEYCODE_MAP[VK_N] = VK_N;
        KEYBOARD_KEYCODE_MAP[VK_O] = VK_O;
        KEYBOARD_KEYCODE_MAP[VK_P] = VK_P;
        KEYBOARD_KEYCODE_MAP[VK_Q] = VK_Q;
        KEYBOARD_KEYCODE_MAP[VK_R] = VK_R;
        KEYBOARD_KEYCODE_MAP[VK_S] = VK_S;
        KEYBOARD_KEYCODE_MAP[VK_T] = VK_T;
        KEYBOARD_KEYCODE_MAP[VK_U] = VK_U;
        KEYBOARD_KEYCODE_MAP[VK_V] = VK_V;
        KEYBOARD_KEYCODE_MAP[VK_W] = VK_W;
        KEYBOARD_KEYCODE_MAP[VK_X] = VK_X;
        KEYBOARD_KEYCODE_MAP[VK_Y] = VK_Y;
        KEYBOARD_KEYCODE_MAP[VK_Z] = VK_Z;

        KEYBOARD_KEYCODE_MAP[VK_a - 389] = VK_a;
        KEYBOARD_KEYCODE_MAP[VK_b - 389] = VK_b;
        KEYBOARD_KEYCODE_MAP[VK_c - 389] = VK_c;
        KEYBOARD_KEYCODE_MAP[VK_d - 389] = VK_d;
        KEYBOARD_KEYCODE_MAP[VK_e - 389] = VK_e;
        KEYBOARD_KEYCODE_MAP[VK_f - 389] = VK_f;
        KEYBOARD_KEYCODE_MAP[VK_g - 389] = VK_g;
        KEYBOARD_KEYCODE_MAP[VK_h - 389] = VK_h;
        KEYBOARD_KEYCODE_MAP[VK_i - 389] = VK_i;
        KEYBOARD_KEYCODE_MAP[VK_j - 389] = VK_j;
        KEYBOARD_KEYCODE_MAP[VK_k - 389] = VK_k;
        KEYBOARD_KEYCODE_MAP[VK_l - 389] = VK_l;
        KEYBOARD_KEYCODE_MAP[VK_m - 389] = VK_m;
        KEYBOARD_KEYCODE_MAP[VK_n - 389] = VK_n;
        KEYBOARD_KEYCODE_MAP[VK_o - 389] = VK_o;
        KEYBOARD_KEYCODE_MAP[VK_p - 389] = VK_p;
        KEYBOARD_KEYCODE_MAP[VK_q - 389] = VK_q;
        KEYBOARD_KEYCODE_MAP[VK_r - 389] = VK_r;
        KEYBOARD_KEYCODE_MAP[VK_s - 389] = VK_s;
        KEYBOARD_KEYCODE_MAP[VK_t - 389] = VK_t;
        KEYBOARD_KEYCODE_MAP[VK_u - 389] = VK_u;
        KEYBOARD_KEYCODE_MAP[VK_v - 389] = VK_v;
        KEYBOARD_KEYCODE_MAP[VK_w - 389] = VK_w;
        KEYBOARD_KEYCODE_MAP[VK_x - 389] = VK_x;
        KEYBOARD_KEYCODE_MAP[VK_y - 389] = VK_y;
        KEYBOARD_KEYCODE_MAP[VK_z - 389] = VK_z;

        KEYBOARD_KEYCODE_MAP[10] = VK_ENTER;    //windows
        KEYBOARD_KEYCODE_MAP[13] = VK_ENTER;    //dfb
        KEYBOARD_KEYCODE_MAP[44] = VK_KB_COMMA;
        KEYBOARD_KEYCODE_MAP[46] = VK_KB_DOT;
        KEYBOARD_KEYCODE_MAP[47] = VK_KB_SLASH;
        KEYBOARD_KEYCODE_MAP[60] = VK_KB_LT;
        KEYBOARD_KEYCODE_MAP[62] = VK_KB_GT;
        KEYBOARD_KEYCODE_MAP[59] = VK_KB_SEMICOLON;
        KEYBOARD_KEYCODE_MAP[58] = VK_KB_COLON;
        KEYBOARD_KEYCODE_MAP[63] = VK_KB_QUESTION;
        KEYBOARD_KEYCODE_MAP[39] = VK_KB_SQM;
        KEYBOARD_KEYCODE_MAP[34] = VK_KB_DQM;

        KEYBOARD_KEYCODE_MAP[33] = VK_KB_EM;
        KEYBOARD_KEYCODE_MAP[64] = VK_KB_AT;
        KEYBOARD_KEYCODE_MAP[35] = VK_KB_WELL;
        KEYBOARD_KEYCODE_MAP[36] = VK_KB_DOLLOR;
        KEYBOARD_KEYCODE_MAP[37] = VK_KB_PERSENT;
        KEYBOARD_KEYCODE_MAP[94] = VK_KB_JIAN;
        KEYBOARD_KEYCODE_MAP[38] = VK_KB_AND;
        KEYBOARD_KEYCODE_MAP[42] = VK_KB_STAR;
        KEYBOARD_KEYCODE_MAP[40] = VK_KB_LEFTBR;
        KEYBOARD_KEYCODE_MAP[41] = VK_KB_RIGHTBR;
        KEYBOARD_KEYCODE_MAP[123] = VK_KB_BIGLEFTBR;
        KEYBOARD_KEYCODE_MAP[125] = VK_KB_BIGRIGHTBR;
        KEYBOARD_KEYCODE_MAP[91] = VK_KB_LEFTBRACKET;
        KEYBOARD_KEYCODE_MAP[93] = VK_KB_RIGHTBRACKET;
        KEYBOARD_KEYCODE_MAP[124] = VK_KB_HOR;
        KEYBOARD_KEYCODE_MAP[95] = VK_KB_DASH;
        KEYBOARD_KEYCODE_MAP[96] = VK_KB_DUN;
        KEYBOARD_KEYCODE_MAP[45] = VK_KB_SUB;
        KEYBOARD_KEYCODE_MAP[61] = VK_KB_EQEAL;
        KEYBOARD_KEYCODE_MAP[43] = VK_KB_ADD;
        KEYBOARD_KEYCODE_MAP[126] = VK_KB_WAVE;
        KEYBOARD_KEYCODE_MAP[92] = VK_KB_RIGHTDASH;
        KEYBOARD_KEYCODE_MAP[8] =  VK_BACK_SPACE;
        KEYBOARD_KEYCODE_MAP[32] =  VK_SPACE;
        KEYBOARD_KEYCODE_MAP[127] =  VK_DELETE;


        KEYBOARD_KEYCODE_SCANCODE_MAP[14] = VK_KB_Backspace;
        KEYBOARD_KEYCODE_SCANCODE_MAP[105] = VK_LEFT;
        KEYBOARD_KEYCODE_SCANCODE_MAP[106] = VK_RIGHT;
        KEYBOARD_KEYCODE_SCANCODE_MAP[103] = VK_UP;
        KEYBOARD_KEYCODE_SCANCODE_MAP[108] = VK_DOWN;
    }
    // --------------------------------------------------------------
    // Key handling
    // --------------------------------------------------------------

    var keyStateMap = {
        "1": "down",
        "2": "repeat",
        "8": "up"
    }

    /**
     * Handles key event received from guijs browser plugin.
     *
     * @param key
     *      The key event received from guijs.
     */
    var onKey = function(key) {

        currkey = key;
        key_hasProcessFlag = false;
        // Get key state
        // var isKeyDown = !!( key.state & ( guijs.KEY_SINGLE | guijs.KEY_AUTOREP ) );
        var isKeyDown = !!( key.state & ( guijs.KEY_SINGLE ) );
        var isKeyUp = !!( key.state & guijs.KEY_RELEASED );
        var isRepeated = !!( key.state & guijs.KEY_AUTOREP );

        //epos-2015-3-6 按任意键退出epos后，重新对retail mode定时器进行定时
        if(isKeyUp) {
            if(m_retailmodeTimer) {
                clearTimeout(m_retailmodeTimer);
                m_retailmodeTimer = null;
                try {
                    var data = Hisense.File.read(RETAILMODE_FLAG_FILE, 0);
                    debugPrint("epos status is:" + data);
                    if(data == "open" && !!hiWebOsFrame.getPageByIdFromSdkPages("epos")) {//running, stop ePos
                        debugPrint("not start epos!");
                        startePos(false);
                        hiWebOsFrame.getPageByIdFromSdkPages("epos").destroy();
                    }
                }
                catch(ex) {
                    debugPrint("[keyboard] read write file error: " + ex.message, DebugLevel.ERROR);
                    startePos(false);
                    hiWebOsFrame.getPageByIdFromSdkPages("epos").destroy();
                }
                startRetailmodeTimer(true);
                setHalfAnHourTimer(false);
            }
        }

        // Convert to CE-HTML key code
        var keyCode = 0;
        if(key.command in SYSCMD_KEYCODE_MAP) {
            keyCode = SYSCMD_KEYCODE_MAP[key.command];
	    onKey.from = "remote";
            debugAlways("receive key[" + keyCode + "]" + "[" + keyStateMap[key.state] + "]", DebugLevel.ALWAYS);
        }

        if(key.alphakey in KEYBOARD_KEYCODE_MAP) {
            keyCode = KEYBOARD_KEYCODE_MAP[key.alphakey];
	    onKey.from = "keyboard";
            debugAlways("receive key[" + keyCode + "]" + "[" + keyStateMap[key.state] + "]", DebugLevel.ALWAYS);
        }

        if(key.scancode in KEYBOARD_KEYCODE_SCANCODE_MAP) {
            keyCode = KEYBOARD_KEYCODE_SCANCODE_MAP[key.scancode];
	    onKey.from = "unknown";
            debugAlways("receive key[" + keyCode + "]" + "[" + keyStateMap[key.state] + "]", DebugLevel.ALWAYS);
        }

        // Pass key back to middleware without handling it
        // if not in list of registered keyCodes
        // press any key to cancel Power off
        if(g_SystemAudioOnlyFlag == 1 && (keyCode != VK_MUTE && keyCode != VK_VOLUME_DOWN && keyCode != VK_VOLUME_UP&& keyCode != VK_KEYPAD_VOLUME_DOWN&& keyCode != VK_KEYPAD_VOLUME_UP)) {

            try {
                if (isRepeated) {
                    sendResult(key, true);
                    return;
                }
                else if (isKeyDown)
                {
                    debugG("receive the key to turn on the screen");
                    model.system.setEnumScreenState(1);
                    g_SystemAudioOnlyFlag = 0;
                    //key.sendResult(true);
                    sendResult(key, true);
                    return;
                }
            }
            catch(e) {
                debugE(e.message);
            }

        }
        if(!( keyCode in m_registeredKeyCodes )) {
            //key.sendResult(false);
            sendResult(key, false);
            //debugG("keyCode in m_registeredKeyCodes NOT!")
            return;
        }
        try {
            // Handle as keydown/keyup
            if(keyCode != 0) {
                if(isKeyDown) {
                    handleKeyDown(keyCode, onKey.from);
                }
                else if(isKeyUp) {
                    handleKeyUp(keyCode, onKey.from);
                }
                else if(isRepeated) {
                    handleKeyRepeated(keyCode, onKey.from);
                    try {
                        if(keyCode >= VK_0 && keyCode <= VK_9 && hiWebOsFrame.getCurrentPageId() == "livetv_main" &&
                            typeof (livetvchlist) != "undefined" && livetvchlist.getNumChangeFlag()) {
                            livetvchlist.changeNumByRepeat();
                        }
                    }
                    catch (ex){
                        DBG_ERROR(ex.message);
                    }
                }
            }
        }
        finally {

            //if(isKeyDown && keyCode == VK_RED) {
            //    debugPrint("come in flase");
            //    key.sendResult(false);
            //}
            //else
            if(!key_hasProcessFlag) {
                //    key.sendResult(true);

                if (typeof  (GlobalFlagShareInBrowser) != UNDEFINED_DEFSTR && ((4 == GlobalFlagShareInBrowser) || (13 == GlobalFlagShareInBrowser)) && keyCode == VK_BACK) {

                    sendResult(key, false); //专门针对Picasa页面
                    DBG_INFO("Picasa normal page ,key.sendResult(true -> false)", DebugLevel.ALWAYS);
                }
                else {
                    sendResult(key, true);
                }
            }
        }
    };

    /**
     * Handles the key if key was pressed.
     *
     * @param key
     *      The key event received from guijs.
     */
    var handleKeyDown = function(keyCode, from) {
        // Dispatch as event
        dispatchKeyEvent("keydown", keyCode, from);

    }
    this.SendKeyResult = function(value) {

        sendResult(currkey, value);
        key_hasProcessFlag = true;
    }

    /**
     * Handles the key if key was released.
     *
     * @param key
     *      The key event received from guijs.
     */
    var handleKeyUp = function(keyCode, from) {
        // Dispatch as event
        dispatchKeyEvent("keyup", keyCode, from);
    }
    var handleKeyRepeated = function(keyCode, from) {
        // Dispatch as event
        dispatchKeyEvent("keypress", keyCode, from);
    }


    // --------------------------------------------------------------
    // Event dispatching
    // --------------------------------------------------------------

    /**
     * Dispatches a javascript key event
     * @param type
     *      The type of the event (keydown, keypress, keyup)
     * @param keyCode
     *      The keycode.
     * @param from
     *      The key event launcher
     */
    var dispatchKeyEvent = function(type, keyCode, from) {
        // Create event
        var event = document.createEvent("Event");
        event.initEvent(type, true, true);
        event.keyCode = keyCode;
        event.which = keyCode;
        event.charCode = 0;
        event.from = from;

        // Dispatch
        if(document.activeElement) {
            document.activeElement.dispatchEvent(event);
        }
        else {
            document.dispatchEvent(event);
        }

        return event.defaultPrevented;
    }

    // --------------------------------------------------------------
    // Functions
    // --------------------------------------------------------------
    this.registerKeyCodes = function(keyCodes) {
        m_registeredKeyCodes = {};
        for(var i = 0; i < keyCodes.length; i++) {
            var keyCode = keyCodes[i];
            m_registeredKeyCodes[keyCode] = true;
        }
    }
    this.setWantGroup = function(n) {
        DBG_INFO("set group: " + n, DebugLevel.ALWAYS);
        guiService.wanted_key_group(n);
    }

    function sendResult(key, val) {
        if(key_hasProcessFlag) return;
        debugAlways("send    key[" + SYSCMD_KEYCODE_MAP[key.command] + "]" +
        "[" + keyStateMap[key.state] + "][" + val + "]", DebugLevel.ALWAYS);
        if(SYSCMD_KEYCODE_MAP[key.command]==VK_TELETEXT&&hiWebOsFrame.isCurrentModule("livetv")) val=false;
        key.sendResult(val);
    }

    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    this.set_listen = function(b_l) {
        guiService.listen(b_l);
        debugAlways("key " + (0 == b_l ? "lock" : "unlock"));
    }
    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    this.set_mheg5_active = function(is_mhge5_active) { //mheg5和ginga公用一个状态值
        DBG_INFO("set key mheg5 active: " + (0 == is_mhge5_active ? "false" : "true"), DebugLevel.ALWAYS);
        guiService.mheg5_active(is_mhge5_active);
    }
    //--------------------------------------------------------------
    //Init
    //--------------------------------------------------------------
    this.send_key_to_dfb = function (keycode) {
        DBG_ERROR("send key to dfb : " + keycode);
        try {
            guiService.sendkeytodfb(keycode);
        }
        catch (ex) {
            DBG_ERROR("send key to dfb error : " + ex.message);
        }
    }
    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    // Connect to guijs browser plugin
    var guiService = guijs.createService();
    guiService.addEventListener("key", onKey);
    guiService.listen(0);


}


// Create global keyboard instance
var keyboard = tv ? new Keyboard() : {
    SendKeyResult: function() {
    },
    registerKeyCodes: function() {
    },
    setWantGroup: function() {
    },
    set_listen: function() {
    },
    set_mheg5_active: function() {
    },
    send_key_to_dfb: function () {

    }
};

