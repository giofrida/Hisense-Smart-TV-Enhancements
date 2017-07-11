// --------------------------------------------------------
/**
 * @brief Convenience sub model for accessing
 * the middleware videoPlayer model objects as defined in
 * loewe/common/biz/api/include/model/values/values-mpctrl.h.
 *
 * @author ZZY
 *
 //--------------------------------------------------------

 /**
 * MpCtrlModelDefines class.
 * Contains all defined constants from values-videoplayer.h for
 * internal use.
 */
function MpCtrlModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PREPARE_MEDIA = "tvapi.action.videoplayer.init";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PLAY_MEDIA = "tvapi.action.videoplayer.start";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PVR_UNLOCK = "tvapi.action.videoplayer.pvrunlock";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_STATE = "tvapi.i32.videoplayer.enum.state";
    //MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_STATE = "tvapi.mpctrl.vstr.state";
    MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_STOP = "tvapi.action.videoplayer.stop";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_ENUM_SPEED = "tvapi.i32.videoplayer.enum.speed";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_TOTAL = "tvapi.i32.videoplayer.playtime.total";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_CURRENT = "tvapi.i32.videoplayer.playtime.current";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_GUI_RENDER = "tvapi.mpctrl.i32.gui.render";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA = "tvapi.mpctrl.vstr.metadata";
    MpCtrlModelDefines.SL2_TVAPI_I32_REQACTION = "tvapi.mpctrl.i32.reqaction";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS = "tvapi.i32.videoplayer.flag.status";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT = "tvapi.i32.videoplayer.enum.repeat";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT = "tvapi.i32.videoplayer.enum.format";
    MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_VIDEO_URL = "tvapi.str.videoplayer.video.url";
    MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_THUMBNAIL_URL = "tvapi.str.videoplayer.thumbnail.url";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_JUMP_DISTANCE = "tvapi.i32.videoplayer.jump.distance";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_SMART_JUMP = "tvapi.i32.videoplayer.smartjump";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT = "tvapi.i32.videoplayer.enum.sort";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_PLAYLIST_INDEX = "tvapi.i32.videoplayer.playlist.index";
    MpCtrlModelDefines.SL2_TVAPI_VSTR_MPCTRL_INFO = "tvapi.vstr.videoplayer.info";
    MpCtrlModelDefines.SL2_TVAPI_ACTION_MPCTRL_SKIP_BACK = "tvapi.action.videoplayer.skip.back";
    MpCtrlModelDefines.SL2_TVAPI_ACTION_MPCTRL_SKIP_FORW = "tvapi.action.videoplayer.skip.forward";
    MpCtrlModelDefines.SL2_TVAPI_ACTION_MPCTRL_SET_WINDOW = "tvapi.action.videoplayer.set.window";
//用于通知中间层事件使用
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_SPEED = "tvapi.mpctrl.action.speed";

    MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_FORMAT_INFO = "tvapi.str.videoplayer.format.info";
//    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_AV_UPDATE = "tvapi.mpctrl.int32.av.update";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_PLAYER_ERROR = "tvapi.mpctrl.i32.player.error";
    MpCtrlModelDefines.SL2_TVAPI_STR_VIDEOPLAYER_MUSIC_COVER = "tvapi.i32.videoplayer.music.cover";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_CAN_SEEK = "tvapi.i32.videoplayer.can.seek";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_TOTAL_NUM = "tvapi.i32.videoplayer.vd.subtitle.total.num";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_NO = "tvapi.i32.videoplayer.vd.subtitle.no";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_TOTAL_NUM = "tvapi.i32.videoplayer.pvrvd.subtitle.total.num";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_NO = "tvapi.i32.videoplayer.pvrvd.subtitle.no";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_ENCODE = "tvapi.i32.videoplayer.vd.subtitle.encode";
    MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_MUSIC_FIND_LYRIC = "tvapi.action.videoplayer.music.find.lyric";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_TEXT_SIZE = "tvapi.i32.videoplayer.music.subtitle.text.size";
    MpCtrlModelDefines.SL2_TVAPI_VINT_VIDEOPLAYER_MUSIC_SUBTITLE_POSITION = "tvapi.vint.videoplayer.music.subtitle.position";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_LINE_NUM = "tvapi.i32.videoplayer.music.subtitle.line.num";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_HIGHLIGHT = "tvapi.i32.videoplayer.music.subtitle.highlight";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_AUDIO_TRACK = "tvapi.i32.videoplayer.audio.track";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_UNSUPPORT_FORMAT = 4;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_UNSUPPORT_VIDEO_FORMAT = 5;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_UNSUPPORT_AUDIO_FORMAT = 6;

    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_IDLE = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARING = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARED = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAYING = 3;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PAUSE = 4;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_STOP = 5;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_RELEASING = 6;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARE_DONE = 7;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_AUTO_STOP = 8;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAY_DONE = 9;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_REPLAY = 10;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PVR_CHANNEL_LOCK = 21;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PVR_RATING_LOCK = 22;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_UNKNOWN = 1201;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_INVALID_ARG = 1202;
    /*invalid parameter*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_INITIALIZED = 1203;
    /*play error without prepared*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PARSER_ERROR = 1204;
    /*URI parser failed*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_MEMORY_NOT_ENOUGH = 1205;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_ENGINE_START_FAIL = 1206;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_DECODING_ERROR = 1207;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_INVALID_DRMDATA = 1208;

    /*Media format & A/V codec related*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_AUDIO_UNPLAYABLE = 1301;
    /*audio playback failed*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_VIDEO_UNPLAYABLE = 1302;
    /*video playback failed*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FRAME_RATE = 1303;
    /*cannot support frame rate*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_RESOLUTION = 1304;
    /*cannot support resolution*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_VIDEO_CODEC = 1305;
    /*cannot support video codec*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_AUDIO_CODEC = 1306;
    /*cannot support audio codec*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FILE = 1307;
    /*cannot support file format*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NO_VIDEO = 1308;
    /*no video stream when video playing*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NO_AUDIO = 1309;
    /*no audio stream when video playing*/

    /*Media format & PHOTO codec related*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PHOTO_UNPLAYABLE = 1401;
    /*photo playback failed*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_PHOTO_CODEC = 1402;
    /*cannot support photo codec*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PHOTO_PRELOAD_ERROR = 1403;
    /*some error fires when preload next pic*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PHOTO_NEXTPLAY_ERROR = 1404;
    /*some error fires when play next pic*/

    /*file and network operation related*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_SERVER_DISCONNECTED = 1501;
    /*the connection between client and server has been disconnected*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_READ_DATA_ERROR = 1502;
    /*read data error*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FILE_SEEK = 1503;
    /*cannot support seek*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_OPEN_FILE_FAIL = 1504;
    /*open file error*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NETWORK_ERROR = 1505;
    /*network error*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_MEDIA_LOST = 1506;
    /* Media lost(network breakdown etc.)*/
    /*pvr expert*/
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_FILE_EXPIRED = 1601;

    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_ERROR = 200;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_BUFFERING = 0x00000001;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_CAN_SEEK = 0x00000002;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_CAN_SET_SPEED = 0x00000004;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_CAN_PAUSE = 0x00000008;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_FAVOURITE = 0x00000010;


    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_PAUSE = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_PLAY = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_SLOW = 200;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_MEDIUM = 201;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_HIGH = 202;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_MAX = 250;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_SLOW = 300;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_MEDIUM = 301;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_HIGH = 302;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_MAX = 350;


    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT_OFF = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT_SINGLE = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT_ALL = 2;


    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_FULLSCREEN = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_WINDOW = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_WINDOW_RELATIVE = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_WINDOW_TOP_60 = 3;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_URL_MAX_LENGTH = 2048;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_PLAYTIME_MAX = 100 * 3600;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_JUMP_DISTANCE_MIN = 60;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_JUMP_DISTANCE_MAX = 960;


    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_A_Z = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_Z_A = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_SIZE = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_DATE_ASCENDING = 3;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_DATE_DESCENDING = 4;


    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_PLAYLIST_INDEX_MIN = 0;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_PLAYLIST_INDEX_MAX = 99;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INFO_MAX = 24;


    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_CAPTION = 0;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_TYPE = 1;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_SUBTYPE = 2;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_LOCATOR = 3;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_UUID = 4;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_THUMBURL = 5;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_STATION_NAME = 6;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_STATION_DESCRIPTION = 7;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_TITLE = 8;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_DESCRIPTION = 9;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_COMMENT = 10;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_GENRE = 11;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_DATE = 12;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_ARTIST = 13;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_ALBUM = 14;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_TRACK_NUMBER = 15;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_USER_INDEX = 16;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_YEAR = 17;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_BITRATE = 18;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_ACTOR = 19;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_DIRECTOR = 20;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_VOLUME_ID = 21;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_COUNT = 22;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_URL = 23;
}


/**
 * MpCtrlModel class derived from SubModel.
 */
function MpCtrlModel(parentModel) {
    SubModel.call(this, parentModel, MpCtrlModelDefines);

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------
    // Play Video

    // Action loadPage
    this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_ACTION_MPCTRL_SET_WINDOW, [
        { name: "setScreenPosition", method: function (object, x, y, w, h) {
            return object.invoke(x, y, w, h);
        } }
    ], "onStartResult1");
    this.registerActionObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PREPARE_MEDIA,
        [
            { name: "PlayMovie", method: function (object, url) {
                return object.invoke(url, "video");
            } },
            { name: "PlayMusic", method: function (object, url) {
                return object.invoke(url, "music");
            }},
            { name: "PlayBackgroundMusic", method: function (object, url) {
                return object.invoke(url, "backgroundMusic");
            } }
        ],
        "onStartResult");
    this.registerActionObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PLAY_MEDIA,
        [
            { name: "PlayNow", method: function (object) {
                return object.invoke();
            } }
        ],
        "onStartResult");

    this.registerActionObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PVR_UNLOCK,
        [
            { name: "UnlockPvr", method: function (object) {
                return object.invoke();
            } }
        ],
        "onUnlockPvrResult");

    this.registerActionObject(
        MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_STOP,
        [
            { name: "StopMpctrl", method: function (object, url) {
                return object.invoke(url);
            } }
        ],
        "onStartResult");
    //   MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_NO="tvapi.i32.videoplayer.video.subtitle.no";
//    MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_MUSIC_FIND_LYRIC="tvapi.action.videoplayer.music.find.lyric";
//    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_TEXT_SIZE="tvapi.i32.videoplayer.music.subtitle.text.size";
//    MpCtrlModelDefines.SL2_TVAPI_VINT_VIDEOPLAYER_MUSIC_SUBTITLE_POSITION="tvapi.vint.videoplayer.music.subtitle.position";
//    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_LINE_NUM="tvapi.i32.videoplayer.music.subtitle.line.num";
//    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_HIGHLIGHT="tvapi.i32.videoplayer.music.subtitle.highlight";
//    this.registerActionObject(
//        MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_MUSIC_FIND_LYRIC,
//        [
//            { name: "FindMusicLyric", method: function (object, url) {
//                return object.invoke(url);
//            } }
//        ],
//        "onStartResult");
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_NO,
        "getMpCtrlSubtitleNo", "setMpCtrlSubtitleNo", "onMpCtrlSubtitleNochanged", null, null
    );
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_TOTAL_NUM,
        "getMpCtrlSubtitleTotalNo", "setMpCtrlSubtitleTotalNo", "onMpCtrlSubtitleTotalNochanged", null, null
    );

    //PVR SUBTITLE
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_NO,
        "getMpCtrlPvrSubtitleNo", "setMpCtrlPvrSubtitleNo", "onMpCtrlPvrSubtitleNochanged", null, null
    );
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_TOTAL_NUM,
        "getMpCtrlPvrSubtitleTotalNo", "setMpCtrlPvrSubtitleTotalNo", "onMpCtrlPvrSubtitleTotalNochanged", null, null
    );


    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_ENCODE,
        "getMpCtrlSubtitleEncode", "setMpCtrlSubtitleEncode", "onMpCtrlSubtitleEncodechanged", null, null
    );
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_LINE_NUM,
        "getMusicSubtitleLineNum", "setMusicSubtitleLineNum", "onMusicSubtitleLineNumchanged", null, null
    );
    //SL2_TVAPI_VINT_VIDEOPLAYER_MUSIC_SUBTITLE_POSITION
    this.registerIntegerVectorObject(
        MpCtrlModelDefines.SL2_TVAPI_VINT_VIDEOPLAYER_MUSIC_SUBTITLE_POSITION,
        "getMusicSubtitlePosition", "setMusicSubtitlePosition", "onMusicSubtitlePositionChaged",
        null, null);
    //action speed
    this.registerActionObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_SPEED,
        [
            { name: "setMpctrlFlag", method: function (object, flag) {
                return object.invoke(flag);
            } }
        ],
        "onStartResult");
//    this.registerActionObject(
//        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_STATE_CTRL,
//        [
//            { name: "MpCtrlPlay", method: function (object, currentID) {
//                return object.invoke(1, currentID, null);
//            }},
//            { name: "MpCtrlPause", method: function (object, currentID) {
//                return object.invoke(2, currentID, null);
//            } },
//            { name: "MpCtrlStop", method: function (object, currentID) {
//                return object.invoke(3, currentID, null);
//            }},
//            { name: "MpCtrlRelease", method: function (object, currentID) {
//                return object.invoke(4, currentID, null);
//            }}
//        ],
//        "onStartResult2");

    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_STATE,
        "getMpCtrlStat", "setMapCtrlStat", "onMpCtrlStatchanged", null, null
    );

    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_PLAYER_ERROR,
        "getMpCtrlPlayerError", "setMpCtrlPlayerError", "onMpCtrlPlayerErrorchanged", null, null
    );

    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_AUDIO_TRACK,
        "getMpCtrlAudioTrack", "setMpCtrlAudioTrack", "onMpCtrlAudioTrackchanged", null, null, "getMaxAudioTrack"
    );

    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_CAN_SEEK,
        "getVideoPlayerCanSeek", "setVideoPlayerCanSeek", "onVideoPlayerCanSeekchanged", null, null
    );
//    this.registerIntegerObject(
//        MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_AV_UPDATE,
//        "getMpCtrlAVUpdate", "setMpCtrlAVUpdate", "onMpCtrlAVUpdatechanged", null, null
//    );

    //获取音乐缩略图
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_STR_VIDEOPLAYER_MUSIC_COVER,
        "getMpCtrlMusicCover", "setMpCtrlMusicCover", "onMpCtrlMusicCoverchanged", null, null
    );
//    this.registerStringVectorObject(
//        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_STATE,
//        "getUSBSTATE", "setUSBSTATE", "onUSBSTATEChanged", null, null
//    );
    this.registerStringVectorObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA,
        "getMetadata", "setMetadata", "onMetadataChanged", null, null
    );

    this.registerStringObject(
        MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_FORMAT_INFO,
        "getFormatInfo", "setFormatInfo", "onFormatInfoChanged", null, null
    );
    this.registerStringVectorObject(
        MpCtrlModelDefines.SL2_TVAPI_VSTR_MPCTRL_INFO,
        "getMpctrlInfo", "setMpctrlInfo", "onMpctrlInfoChanged", null, null
    );

//    this.registerIntegerVectorObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VI32_SCREEN_POSITION,
//        "getScreenPosition", "setScreenPosition", "onScreenPositionChanged", null, null);
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_TOTAL,
        "getMpCtrlPlaytimeTotal", "setMapCtrlPlaytimeTotal", "onMpCtrlPlaytimeTotalchanged", null, null
    );
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_REQACTION,
        "getMpCtrlReqation", "setMpCtrlReqation", "onMpCtrlReqationchanged", null, null
    );

    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_ENUM_SPEED,
        "getMpCtrlSpeed", "setMpCtrlSpeed", "onMpCtrlSpeedchanged", null, null
    );
//    this.registerIntegerObject(
//        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR,
//        "getMpCtrlError", "setMapCtrlError", "onMpCtrlErrorchanged", null, null
//    );
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_CURRENT,
        "getMpCtrlPlaytimeCurrent", "setMpCtrlPlaytimeCurrent", "onMpCtrlPlaytimeCurrentchanged", null, null
    );
    this.registerIntegerObject(
        MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_GUI_RENDER,
        "getMpCtrlRender", "setMpCtrlRender", "onMpCtrlRenderchanged", null, null
    );


}


MpCtrlModel.prototype = new SubModel();
MpCtrlModel.prototype.constructor = MpCtrlModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        MpCtrlModel, MpCtrlModelDefines,
        [
//            {
//                groupPrefix: "SL2_TVAPI_MPCTRL_ACTION_",
//                stripPrefix: "SL2_TVAPI_MPCTRL_"
//            },
//            {
//                groupPrefix: "SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_UNSUPPORT_",
//                stripPrefix: "SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_"
//            }

        ]);
    //debugPrint("mpctrl Loading");
}

