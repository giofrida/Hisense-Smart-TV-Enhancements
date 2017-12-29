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
var VK_FAST_BKW = 418; //var VK_PLAY_SPEED_UP = 418;
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
var VK_BACK = 461;
var VK_MENU = tv ?462:103;
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


//var VK_SLEEP = 546;

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
var VK_SERVICE_TUNER1 = 559;    //TV Tuner1
var VK_SERVICE_TUNER2 = 560;    //TV Tuner1
var VK_AV1 = 561;
var VK_AV2 = 562;
var VK_AV3 = 563;
var VK_COMPONENT1 = 564;
var VK_COMPONENT2 = 565;
var VK_COMPONENT3 = 566;
var VK_HDMI1 = 567;
var VK_HDMI2 = 568;
var VK_HDMI3 = 569;
var VK_HDMI4 = 570;
var VK_HDMI5 = 571;
var VK_VGA = 572;
var VK_PICMODE_WIDE = 573;
var VK_PICMODE_NORMAL = 574;
var VK_PICMODE_CINEMA = 575;
var VK_PICMODE_PANORAMA = 576;
var VK_PICMODE_ZOOM = 577;
var VK_ASPECT = 578;

var VK_KEYPAD_MENU = 579;
var VK_KEYPAD_MENU7 = 583;
var VK_BT_CONNECT = 580;
var VK_VOICE = 581;
var VK_LOWBATTERY = tv ? 582 : 103;
var VK_KPAD = 589;

var VK_STICKER = 590;    // GINGA
var VK_AUDIO_DESCRIPTION = 591;
var VK_WUAKI = 592;

var VK_POWER_ON = 703

var VK_POWER_KEY_PAD = 704;
var VK_AUDIOONLY=tv?705:104;
var VK_PIC_CINEMA_NIGHT=706;
var VK_PIC_CINEMA_DAY=707;
var VK_FAV_CH=708;
var VK_ASPECT_AUTO=709;
var VK_ASPECT_DIRECT=710;
var VK_SND_MOVIE=711;
var VK_FREEZE=712;

var m_retailmodeTimer = null;
var g_SystemAudioOnlyFlag = 0;//关屏记录标识
var showPowerOffTimerCnt = 100;