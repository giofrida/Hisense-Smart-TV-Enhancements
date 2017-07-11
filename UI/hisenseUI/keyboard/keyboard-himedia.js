/**
 * Created by Administrator on 14-12-5.
 */
// --------------------------------------------------------
/**
 * @brief Keyboard implementation which communicates with
 * "guijs" browser plugin to receive raw syscmd keys.
 * These raw keys will dispatched as key events with
 * CE-HTML VK key codes or a default action will be performed
 * which simulates default browser key handling (like navigating
 * the focus).
 *
 * @author Sascha Radike
 *
 * Copyright (c) 2014 LOEWE Opta GmbH, Kronach. All rights reserved. */
//--------------------------------------------------------

// TODO: IME suport


// ------------------------------------------------------------------
// CE-HTML key codes
// ------------------------------------------------------------------
var VK_UNDEFINED = 0;
var VK_CANCEL = 3;
var VK_BACK_SPACE = 8;
var VK_TAB = 9;
var VK_CLEAR = 12;
var VK_ENTER = 13;
var VK_SHIFT = 16;
var VK_CONTROL = 17;
var VK_ALT = 18;
var VK_PAUSE = 19;
var VK_CAPS_LOCK = 20;
var VK_KANA = 21;
var VK_FINAL = 24;
var VK_KANJI = 25;
var VK_ESCAPE = 27;
var VK_CONVERT = 28;
var VK_NONCONVERT = 29;
var VK_ACCEPT = 30;
var VK_MODECHANGE = 31;
var VK_SPACE = 32;
var VK_PAGE_UP = 33;
var VK_PAGE_DOWN = 34;
var VK_END = 35;
//var VK_HOME = 36;
var VK_LEFT = 37;
var VK_UP = 38;
var VK_RIGHT = 39;
var VK_DOWN = 40;
var VK_COMMA = 44;
var VK_PERIOD = 46;
var VK_SLASH = 47;
var VK_0 = 48;
var VK_1 = 49;
var VK_2 = 50;
var VK_3 = 51;
var VK_4 = 52;
var VK_5 = 53;
var VK_6 = 54;
var VK_7 = 55;
var VK_8 = 56;
var VK_9 = 57;
var VK_SEMICOLON = 59;
var VK_EQUALS = 61;
var VK_A = 65;
var VK_B = 66;
var VK_C = 67;
var VK_D = 68;
var VK_E = 69;
var VK_F = 70;
var VK_G = 71;
var VK_H = 72;
var VK_I = 73;
var VK_J = 74;
var VK_K = 75;
var VK_L = 76;
var VK_M = 77;
var VK_N = 78;
var VK_O = 79;
var VK_P = 80;
var VK_Q = 81;
var VK_R = 82;
var VK_S = 83;
var VK_T = 84;
var VK_U = 85;
var VK_V = 86;
var VK_W = 87;
var VK_X = 88;
var VK_Y = 89;
var VK_Z = 90;
var VK_OPEN_BRACKET = 91;
var VK_BACK_SLASH = 92;
var VK_CLOSE_BRACKET = 93;
var VK_NUMPAD0 = 96;
var VK_NUMPAD1 = 97;
var VK_NUMPAD2 = 98;
var VK_NUMPAD3 = 99;
var VK_NUMPAD4 = 100;
var VK_NUMPAD5 = 101;
var VK_NUMPAD6 = 102;
var VK_NUMPAD7 = 103;
var VK_NUMPAD8 = 104;
var VK_NUMPAD9 = 105;
var VK_MULTIPLY = 106;
var VK_ADD = 107;
var VK_SEPARATER = 108;
var VK_SUBTRACT = 109;
var VK_DECIMAL = 110;
var VK_DIVIDE = 111;
var VK_F1 = 112;
var VK_F2 = 113;
var VK_F3 = 114;
var VK_F4 = 115;
var VK_F5 = 116;
var VK_F6 = 117;
var VK_F7 = 118;
var VK_F8 = 119;
var VK_F9 = 120;
var VK_F10 = 121;
var VK_F11 = 122;
var VK_F12 = 123;
var VK_DELETE = 127;
var VK_NUM_LOCK = 144;
var VK_SCROLL_LOCK = 145;
var VK_PRINTSCREEN = 154;
var VK_INSERT = 155;
var VK_HELP = 156;
var VK_META = 157;
var VK_BACK_QUOTE = 192;
var VK_QUOTE = 222;
var VK_RED = 403;
var VK_GREEN = 404;
var VK_YELLOW = 405;
var VK_BLUE = 406;
var VK_GREY = 407;
var VK_BROWN = 408;
var VK_POWER = 409;
var VK_DIMMER = 410;
var VK_WINK = 411;
var VK_REWIND = 412;
var VK_STOP = 413;
var VK_EJECT_TOGGLE = 414;
var VK_PLAY = 415;
var VK_RECORD = 416;
var VK_FAST_FWD = 417;
var VK_FAST_BKW = 412; //var VK_PLAY_SPEED_UP = 418;
var VK_PLAY_SPEED_DOWN = 419;
var VK_PLAY_SPEED_RESET = 420;
var VK_RECORD_SPEED_NEXT = 421;
var VK_GO_TO_START = 422;
var VK_GO_TO_END = 423;
var VK_TRACK_PREV = 424;
var VK_TRACK_NEXT = 425;
var VK_RANDOM_TOGGLE = 426;
var VK_CHANNEL_UP = 427;
var VK_CHANNEL_DOWN = 428;
var VK_STORE_FAVORITE_0 = 429;
var VK_STORE_FAVORITE_1 = 430;
var VK_STORE_FAVORITE_2 = 431;
var VK_STORE_FAVORITE_3 = 432;
var VK_RECALL_FAVORITE_0 = 433;
var VK_RECALL_FAVORITE_1 = 434;
var VK_RECALL_FAVORITE_2 = 435;
var VK_RECALL_FAVORITE_3 = 436;
var VK_CLEAR_FAVORITE_0 = 437;
var VK_CLEAR_FAVORITE_1 = 438;
var VK_CLEAR_FAVORITE_2 = 439;
var VK_CLEAR_FAVORITE_3 = 440;
var VK_SCAN_CHANNELS_TOGGLE = 441;
var VK_PINP_TOGGLE = 442;
var VK_SPLIT_SCREEN_TOGGLE = 443;
var VK_DISPLAY_SWAP = 444;
var VK_SCREEN_MODE_NEXT = 445;
var VK_VIDEO_MODE_NEXT = 446;
var VK_VOLUME_UP = 447;
var VK_VOLUME_DOWN = 448;
var VK_MUTE = 449;
var VK_SURROUND_MODE_NEXT = 450;
var VK_BALANCE_RIGHT = 451;
var VK_BALANCE_LEFT = 452;
var VK_FADER_FRONT = 453;
var VK_FADER_REAR = 454;
var VK_BASS_BOOST_UP = 455;
var VK_BASS_BOOST_DOWN = 456;
var VK_INFO = 457;
var VK_GUIDE = 458;
var VK_TELETEXT = 459;
var VK_SUBTITLE = 460;
var VK_BACK = 8;
var VK_MENU = 462;
var VK_PIP = 463;
var VK_HOME = tv ? 464 : 102;


var VK_PRE_CH = 465;
var VK_MEDIA = tv ? 466 : 101;//466;
var VK_CUSTOMER_3D = 467;
var VK_EPG = 468;
var VK_LIVETV = 469;
var VK_CH_LIST = 470;
var VK_TOOLS = tv ? 471 : 46;
var VK_EXIT = 472;
var VK_PVR = 473;
var VK_LAST = 474;
var VK_NEXT = 475;
var VK_STILL = 476;
var VK_ZOOM = 477;
var VK_PICTURE = 478;
var VK_T_SHIFT = 479;
var VK_S_MODE = 480;
var VK_LANGUAGE = 481;



var VK_KEYPAD_VOLUME_UP = 482;
var VK_KEYPAD_VOLUME_DOWN = 483;
var VK_KEYPAD_CHANNEL_UP = 484;
var VK_KEYPAD_CHANNEL_DOWN = 485;
/**
 /*************���?��*********************/
var VK_a = 486;
var VK_b = 487;
var VK_c = 488;
var VK_d = 489;
var VK_e = 490;
var VK_f = 491;
var VK_g = 492;
var VK_h = 493;
var VK_i = 494;
var VK_j = 495;
var VK_k = 496;
var VK_l = 497;
var VK_m = 498;
var VK_n = 499;
var VK_o = 500;
var VK_p = 501;
var VK_q = 502;
var VK_r = 503;
var VK_s = 504;
var VK_t = 505;
var VK_u = 506;
var VK_v = 507;
var VK_w = 508;
var VK_x = 509;
var VK_y = 510;
var VK_z = 511;

var VK_KB_Backspace = 512;

var VK_KB_SQM = 513;
var VK_KB_DQM = 514;
var VK_KB_COMMA = 515;
var VK_KB_DOT = 516;
var VK_KB_SLASH = 517;
var VK_KB_COLON = 518;
var VK_KB_SEMICOLON = 519;
var VK_KB_LT = 520;
var VK_KB_GT = 521;
var VK_KB_QUESTION = 522;

var VK_KB_EM = 523;
var VK_KB_AT = 524;
var VK_KB_WELL = 525;
var VK_KB_DOLLOR = 526;
var VK_KB_PERSENT = 527;
var VK_KB_JIAN = 528;
var VK_KB_AND = 529;
var VK_KB_STAR = 530;
var VK_KB_LEFTBR = 531;
var VK_KB_RIGHTBR = 532;
var VK_KB_BIGLEFTBR = 533;


var VK_KB_BIGRIGHTBR = 534;
var VK_KB_LEFTBRACKET = 535;
var VK_KB_RIGHTBRACKET = 536;
var VK_KB_HOR = 537;
var VK_KB_DASH = 538;
var VK_KB_DUN = 539;
var VK_KB_SUB = 540;
var VK_KB_EQEAL = 541;
var VK_KB_ADD = 542;
var VK_KB_WAVE = 543;
var VK_KB_RIGHTDASH = 544;
var VK_KB_BlankString = 545;


var VK_SLEEP = 546;

var VK_SOURCE = 547;
var VK_SHORT_LINE = 548;

//changed by ghl --
var VK_ALLAPP = 549;
var VK_NETFLIX = 550;
var VK_AMAZON = 551;
var VK_VUDU = 552;
var VK_YOUTUBE = 553;
var VK_CC = 554;
var VK_INPUT = 555;
var VK_SLEEP = 556;
var VK_FAC_M = 557;
var VK_KEYPAD_INPUT = 558;

var m_retailmodeTimer = null;
var g_SystemAudioOnlyFlag = 0;//关屏记录标识
var showPowerOffTimerCnt = 100;

function Keyboard() {
    var m_registeredKeyCodes = {};
    var key_hasProcessFlag=false;
    var currkey={};
    //------------------------------------------------------------------
    // SYSCMD TO CE-HTML keycode mapping
    //------------------------------------------------------------------
    var SYSCMD_KEYCODE_MAP = {};
    var KEYBOARD_KEYCODE_SCANCODE_MAP = {};
    {
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_ARROW_UP ] = VK_UP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_ARROW_DOWN ] = VK_DOWN;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_ARROW_LEFT ] = VK_LEFT;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_ARROW_RIGHT ] = VK_RIGHT;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_OK ] = VK_ENTER;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_0 ] = VK_0;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_1 ] = VK_1;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_2 ] = VK_2;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_3 ] = VK_3;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_4 ] = VK_4;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_5 ] = VK_5;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_6 ] = VK_6;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_7 ] = VK_7;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_8 ] = VK_8;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_9 ] = VK_9;

        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_ONOFF ] = VK_POWER;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_MUTE ] = VK_MUTE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_PRE_CH ] = VK_PRE_CH;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_INFO ] = VK_INFO;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_VOLUME_UP ] = VK_VOLUME_UP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_VOLUME_DOWN ] = VK_VOLUME_DOWN;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_CHANNEL_UP ] = VK_CHANNEL_UP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_CHANNEL_DOWN ] = VK_CHANNEL_DOWN;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_DMP ] = VK_MEDIA;//temp media
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_CUSTOMER_3D ] = VK_CUSTOMER_3D;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_PIP ] = VK_PIP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_EPG ] = VK_EPG;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_TV ] = VK_LIVETV;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_CH_LIST ] = VK_CH_LIST;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_MENU ] = VK_MENU;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_SETTINGS ] = VK_TOOLS;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_OK ] = VK_ENTER;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_END ] = VK_END;//temp exit
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_EXIT ] = VK_EXIT;//temp back   //changed by ghl --
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_ASSIST ] = VK_HOME; //tem home
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_RED ] = VK_RED;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_GREEN ] = VK_GREEN;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_YELLOW ] = VK_YELLOW;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_BLUE ] = VK_BLUE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_PLAY ] = VK_PLAY;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_PAUSE ] = VK_PAUSE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_STOP ] = VK_STOP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_DMP_EXIT ] = VK_STOP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_PVR ] = VK_PVR;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_LAST ] = VK_LAST;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_NEXT ] = VK_NEXT;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_FAST_FWD ] = VK_FAST_FWD;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_FAST_BKW ] = VK_FAST_BKW;
//    SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_TEXT ]           = VK_TELETEXT;
//    SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_STILL ]          = VK_STILL;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_ZOOM ] = VK_ZOOM;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_T_SHIFT ] = VK_T_SHIFT;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_PICTURE ] = VK_PICTURE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD__S_MODE ] = VK_S_MODE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_LANGUAGE ] = VK_LANGUAGE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_SUBTITLE ] = VK_SUBTITLE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_FAC_F1 ] = VK_F1;
        SYSCMD_KEYCODE_MAP[ guijs.KEYPAD_CHANNEL_UP ] = VK_KEYPAD_CHANNEL_UP;
        SYSCMD_KEYCODE_MAP[ guijs.KEYPAD_CHANNEL_DOWN ] = VK_KEYPAD_CHANNEL_DOWN;
        SYSCMD_KEYCODE_MAP[ guijs.KEYPAD_VOLUME_UP ] = VK_KEYPAD_VOLUME_UP;
        SYSCMD_KEYCODE_MAP[ guijs.KEYPAD_VOLUME_DOWN ] = VK_KEYPAD_VOLUME_DOWN;
        SYSCMD_KEYCODE_MAP[ guijs.KEYPAD_INPUT ] = VK_KEYPAD_INPUT;

        //add by ghl------------------
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_BACK ] = VK_BACK;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_HOME ] = VK_HOME;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_POWER ] = VK_POWER;
        SYSCMD_KEYCODE_MAP[ guijs.SYSPRG_ALLAPP ] = VK_ALLAPP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSPRG_NETFLIX ] = VK_NETFLIX;
        SYSCMD_KEYCODE_MAP[ guijs.SYSPRG_VUDU ] = VK_VUDU;
        SYSCMD_KEYCODE_MAP[ guijs.SYSPRG_AMAZON ] = VK_AMAZON;
        SYSCMD_KEYCODE_MAP[ guijs.SYSPRG_YOUTUBE ] = VK_YOUTUBE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_DIGIT_DOT] = VK_SHORT_LINE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_CC ] = VK_CC;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_INPUT ] = VK_SOURCE;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_SLEEP ] = VK_SLEEP;
        SYSCMD_KEYCODE_MAP[ guijs.SYSCMD_FAC_M ] = VK_FAC_M;

        //add end-----------------------



        var KEYBOARD_KEYCODE_MAP = {};

        KEYBOARD_KEYCODE_MAP[ VK_0 ] = VK_0;
        KEYBOARD_KEYCODE_MAP[ VK_1 ] = VK_1;
        KEYBOARD_KEYCODE_MAP[ VK_2 ] = VK_2;
        KEYBOARD_KEYCODE_MAP[ VK_3 ] = VK_3;
        KEYBOARD_KEYCODE_MAP[ VK_4 ] = VK_4;
        KEYBOARD_KEYCODE_MAP[ VK_5 ] = VK_5;
        KEYBOARD_KEYCODE_MAP[ VK_6 ] = VK_6;
        KEYBOARD_KEYCODE_MAP[ VK_7 ] = VK_7;
        KEYBOARD_KEYCODE_MAP[ VK_8 ] = VK_8;
        KEYBOARD_KEYCODE_MAP[ VK_9 ] = VK_9;

        KEYBOARD_KEYCODE_MAP[ VK_A ] = VK_A;
        KEYBOARD_KEYCODE_MAP[ VK_B ] = VK_B;
        KEYBOARD_KEYCODE_MAP[ VK_C ] = VK_C;
        KEYBOARD_KEYCODE_MAP[ VK_D ] = VK_D;
        KEYBOARD_KEYCODE_MAP[ VK_E ] = VK_E;
        KEYBOARD_KEYCODE_MAP[ VK_F ] = VK_F;
        KEYBOARD_KEYCODE_MAP[ VK_G ] = VK_G;
        KEYBOARD_KEYCODE_MAP[ VK_H ] = VK_H;
        KEYBOARD_KEYCODE_MAP[ VK_I ] = VK_I;
        KEYBOARD_KEYCODE_MAP[ VK_J ] = VK_J;
        KEYBOARD_KEYCODE_MAP[ VK_K ] = VK_K;
        KEYBOARD_KEYCODE_MAP[ VK_L ] = VK_L;
        KEYBOARD_KEYCODE_MAP[ VK_M ] = VK_M;
        KEYBOARD_KEYCODE_MAP[ VK_N ] = VK_N;
        KEYBOARD_KEYCODE_MAP[ VK_O ] = VK_O;
        KEYBOARD_KEYCODE_MAP[ VK_P ] = VK_P;
        KEYBOARD_KEYCODE_MAP[ VK_Q ] = VK_Q;
        KEYBOARD_KEYCODE_MAP[ VK_R ] = VK_R;
        KEYBOARD_KEYCODE_MAP[ VK_S ] = VK_S;
        KEYBOARD_KEYCODE_MAP[ VK_T ] = VK_T;
        KEYBOARD_KEYCODE_MAP[ VK_U ] = VK_U;
        KEYBOARD_KEYCODE_MAP[ VK_V ] = VK_V;
        KEYBOARD_KEYCODE_MAP[ VK_W ] = VK_W;
        KEYBOARD_KEYCODE_MAP[ VK_X ] = VK_X;
        KEYBOARD_KEYCODE_MAP[ VK_Y ] = VK_Y;
        KEYBOARD_KEYCODE_MAP[ VK_Z ] = VK_Z;

        KEYBOARD_KEYCODE_MAP[ VK_a - 389] = VK_a;
        KEYBOARD_KEYCODE_MAP[ VK_b - 389] = VK_b;
        KEYBOARD_KEYCODE_MAP[ VK_c - 389] = VK_c;
        KEYBOARD_KEYCODE_MAP[ VK_d - 389] = VK_d;
        KEYBOARD_KEYCODE_MAP[ VK_e - 389] = VK_e;
        KEYBOARD_KEYCODE_MAP[ VK_f - 389] = VK_f;
        KEYBOARD_KEYCODE_MAP[ VK_g - 389] = VK_g;
        KEYBOARD_KEYCODE_MAP[ VK_h - 389] = VK_h;
        KEYBOARD_KEYCODE_MAP[ VK_i - 389] = VK_i;
        KEYBOARD_KEYCODE_MAP[ VK_j - 389] = VK_j;
        KEYBOARD_KEYCODE_MAP[ VK_k - 389] = VK_k;
        KEYBOARD_KEYCODE_MAP[ VK_l - 389] = VK_l;
        KEYBOARD_KEYCODE_MAP[ VK_m - 389] = VK_m;
        KEYBOARD_KEYCODE_MAP[ VK_n - 389] = VK_n;
        KEYBOARD_KEYCODE_MAP[ VK_o - 389] = VK_o;
        KEYBOARD_KEYCODE_MAP[ VK_p - 389] = VK_p;
        KEYBOARD_KEYCODE_MAP[ VK_q - 389] = VK_q;
        KEYBOARD_KEYCODE_MAP[ VK_r - 389] = VK_r;
        KEYBOARD_KEYCODE_MAP[ VK_s - 389] = VK_s;
        KEYBOARD_KEYCODE_MAP[ VK_t - 389] = VK_t;
        KEYBOARD_KEYCODE_MAP[ VK_u - 389] = VK_u;
        KEYBOARD_KEYCODE_MAP[ VK_v - 389] = VK_v;
        KEYBOARD_KEYCODE_MAP[ VK_w - 389] = VK_w;
        KEYBOARD_KEYCODE_MAP[ VK_x - 389] = VK_x;
        KEYBOARD_KEYCODE_MAP[ VK_y - 389] = VK_y;
        KEYBOARD_KEYCODE_MAP[ VK_z - 389] = VK_z;

        KEYBOARD_KEYCODE_MAP[10] = VK_ENTER;    //windows
        KEYBOARD_KEYCODE_MAP[13] = VK_ENTER;    //dfb
        KEYBOARD_KEYCODE_MAP[ 44] = VK_KB_COMMA;
        KEYBOARD_KEYCODE_MAP[ 46] = VK_KB_DOT;
        KEYBOARD_KEYCODE_MAP[ 47] = VK_KB_SLASH;
        KEYBOARD_KEYCODE_MAP[ 60] = VK_KB_LT;
        KEYBOARD_KEYCODE_MAP[ 62] = VK_KB_GT;
        KEYBOARD_KEYCODE_MAP[ 59] = VK_KB_SEMICOLON;
        KEYBOARD_KEYCODE_MAP[ 58] = VK_KB_COLON;
        KEYBOARD_KEYCODE_MAP[ 63] = VK_KB_QUESTION;
        KEYBOARD_KEYCODE_MAP[ 39] = VK_KB_SQM;
        KEYBOARD_KEYCODE_MAP[34] = VK_KB_DQM;

        KEYBOARD_KEYCODE_MAP[ 33 ] = VK_KB_EM;
        KEYBOARD_KEYCODE_MAP[64] = VK_KB_AT;
        KEYBOARD_KEYCODE_MAP[35] = VK_KB_WELL;
        KEYBOARD_KEYCODE_MAP[ 36 ] = VK_KB_DOLLOR;
        KEYBOARD_KEYCODE_MAP[ 37 ] = VK_KB_PERSENT;
        KEYBOARD_KEYCODE_MAP[ 94 ] = VK_KB_JIAN;
        KEYBOARD_KEYCODE_MAP[ 38 ] = VK_KB_AND;
        KEYBOARD_KEYCODE_MAP[ 42 ] = VK_KB_STAR;
        KEYBOARD_KEYCODE_MAP[ 40 ] = VK_KB_LEFTBR;
        KEYBOARD_KEYCODE_MAP[ 41 ] = VK_KB_RIGHTBR;
        KEYBOARD_KEYCODE_MAP[ 123] = VK_KB_BIGLEFTBR;
        KEYBOARD_KEYCODE_MAP[ 125] = VK_KB_BIGRIGHTBR;
        KEYBOARD_KEYCODE_MAP[ 91 ] = VK_KB_LEFTBRACKET;
        KEYBOARD_KEYCODE_MAP[ 93 ] = VK_KB_RIGHTBRACKET;
        KEYBOARD_KEYCODE_MAP[ 124] = VK_KB_HOR;
        KEYBOARD_KEYCODE_MAP[ 95 ] = VK_KB_DASH;
        KEYBOARD_KEYCODE_MAP[ 96 ] = VK_KB_DUN;
        KEYBOARD_KEYCODE_MAP[ 45 ] = VK_KB_SUB;
        KEYBOARD_KEYCODE_MAP[ 61 ] = VK_KB_EQEAL;
        KEYBOARD_KEYCODE_MAP[ 43 ] = VK_KB_ADD;
        KEYBOARD_KEYCODE_MAP[126] = VK_KB_WAVE;
        KEYBOARD_KEYCODE_MAP[92] = VK_KB_RIGHTDASH;


        KEYBOARD_KEYCODE_SCANCODE_MAP[ 14] = VK_KB_Backspace;
        KEYBOARD_KEYCODE_SCANCODE_MAP[ 105] = VK_LEFT;
        KEYBOARD_KEYCODE_SCANCODE_MAP[ 106] = VK_RIGHT;
        KEYBOARD_KEYCODE_SCANCODE_MAP[ 103] = VK_UP;
        KEYBOARD_KEYCODE_SCANCODE_MAP[ 108] = VK_DOWN;
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

        currkey=key;
        key_hasProcessFlag=false;
        // Get key state
        // var isKeyDown = !!( key.state & ( guijs.KEY_SINGLE | guijs.KEY_AUTOREP ) );
        var isKeyDown = !!( key.state & ( guijs.KEY_SINGLE ) );
        var isKeyUp = !!( key.state & guijs.KEY_RELEASED );
        var isRepeated = !!( key.state & guijs.KEY_AUTOREP );

        // Convert to CE-HTML key code
        var keyCode = 0;
        if(key.command in SYSCMD_KEYCODE_MAP) {
            keyCode = SYSCMD_KEYCODE_MAP[ key.command ];
            DBG_INFO("receive key[" + keyCode + "]" + "[" + keyStateMap[key.state] + "]", DebugLevel.ALWAYS);
        }

        if(key.alphakey in KEYBOARD_KEYCODE_MAP) {
            keyCode = KEYBOARD_KEYCODE_MAP[ key.alphakey];
            DBG_INFO("receive key[" + keyCode + "]" + "[" + keyStateMap[key.state] + "]", DebugLevel.ALWAYS);
        }

        if(key.scancode in KEYBOARD_KEYCODE_SCANCODE_MAP) {
            keyCode = KEYBOARD_KEYCODE_SCANCODE_MAP[ key.scancode];
            DBG_INFO("receive key[" + keyCode + "]" + "[" + keyStateMap[key.state] + "]", DebugLevel.ALWAYS);
        }

        if(!( keyCode in m_registeredKeyCodes )) {
            key.sendResult(false);
            //debugG("keyCode in m_registeredKeyCodes NOT!")
            return;
        }

        try {
            // Handle as keydown/keyup
            if(keyCode != 0) {
                if(isKeyDown) {
                    handleKeyDown(keyCode);
                }
                else if(isKeyUp) {
                    handleKeyUp(keyCode);
                }
                else if(isRepeated) {
                    handleKeyRepeated(keyCode);
                }
            }
        }
        finally {
            if(isKeyUp){
                key.sendResult(false);
            }
            else{
                key.sendResult(true);
            }
        }
    };


    var handleKeyDown = function(keyCode) {
        // Dispatch as event
        dispatchKeyEvent("keydown", keyCode);

    }
    var handleKeyUp = function(keyCode) {
        dispatchKeyEvent("keyup", keyCode);
    }

    var handleKeyRepeated = function(keyCode) {
        // Dispatch as event
        dispatchKeyEvent("keypress", keyCode);
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
     */
    var dispatchKeyEvent = function(type, keyCode) {
        // Create event
        var event = document.createEvent("Event");
        event.initEvent(type, true, true);
        event.keyCode = keyCode;
        event.which = keyCode;
        event.charCode = 0;

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
            var keyCode = keyCodes[ i ];
            m_registeredKeyCodes[ keyCode ] = true;
        }
    }

    function sendResult(key, val){
        DBG_INFO("send    key[" + SYSCMD_KEYCODE_MAP[key.command] + "]" +
            "[" + keyStateMap[key.state] + "][" + val + "]", DebugLevel.ALWAYS);
        key.sendResult(val);
    }

    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    this.set_listen = function( b_l ) {
        DBG_INFO("key " + (0 == b_l ? "lock" : "unlock"), DebugLevel.ALWAYS);
        guiService.listen(b_l);
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
//var keyboard = tv ? new Keyboard() : null;


