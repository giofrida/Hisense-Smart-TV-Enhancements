/**
 * EpgModelDefines  class.
 * Contains all defined constants from C:/Users/ghl/Desktop/values-epg.h for
 * internal use.
 */

function EpgModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    EpgModelDefines.SL2_TVAPI_EPG = "tvapi.table.epg.main";
    EpgModelDefines.SL2_TVAPI_I32_EPG_SCHEDULE_REQUESTED = "tvapi.i32.epg.schedule.requested";
    EpgModelDefines.SL2_TVAPI_I32_EPG_READY_FOR_REQUESTS = "tvapi.i32.epg.ready";
    EpgModelDefines.SL2_TVAPI_VI32_EPG_THEMES_COLOR = "tvapi.vint.epg.thems.color";

    EpgModelDefines.SL2_TVAPI_ACTION_GET_PROGRAM_TIME = "tvapi.action.epg.data.import";
    // enum or defined is here
    EpgModelDefines.SL2_TVAPI_I32_EPG_BARKERCHANNEL_ACTIVE = "tvapi.i32.epg.barkerchannel.active";
    EpgModelDefines.SL2_TVAPI_I32_EPG_AUTO_UPDATE = "tvapi.i32.epg.auto.update";

    EpgModelDefines.TABLE_FIELD_EPG_SERVICE_ID = 2000;
    EpgModelDefines.TABLE_FIELD_EPG_TRANSPORT_STREAM_ID = 2001;
    EpgModelDefines.TABLE_FIELD_EPG_ORIGINAL_NETWORK_ID = 2002;
    EpgModelDefines.TABLE_FIELD_EPG_EVENT_ID = 2003;
    EpgModelDefines.TABLE_FIELD_EPG_TITLE = 2004;
    EpgModelDefines.TABLE_FIELD_EPG_SHORT_TEXT = 2005;
    EpgModelDefines.TABLE_FIELD_EPG_DESCRIPTION = 2006;
    EpgModelDefines.TABLE_FIELD_EPG_START_TIME_UTC = 2007;
    EpgModelDefines.TABLE_FIELD_EPG_END_TIME_UTC = 2008;
    EpgModelDefines.TABLE_FIELD_EPG_RUNNING_STATE = 2009;
    EpgModelDefines.TABLE_FIELD_EPG_FREE_CAMODE = 2010;
    EpgModelDefines.TABLE_FIELD_EPG_RATING = 2011;
    EpgModelDefines.TABLE_FIELD_EPG_THEMES = 2012;
    EpgModelDefines.TABLE_FIELD_EPG_CRIDS = 2013;
    EpgModelDefines.TABLE_FIELD_EPG_SERVICE_NAME = 2014;
    EpgModelDefines.TABLE_FIELD_EPG_SERVICE_THUMBNAIL = 2015;
    EpgModelDefines.TABLE_FIELD_EPG_SERVICE_LINK = 2016;
    EpgModelDefines.TABLE_FIELD_EPG_SERVICE_ATTRIBUTES = 2017;
    EpgModelDefines.TABLE_FIELD_EPG_SERVICE_FAVORITE_NO = 2018;
    EpgModelDefines.TABLE_FIELD_EPG_SERVICE_SERVICE_UUID = 2019;
    EpgModelDefines.TABLE_FIELD_EPG_TIMER_LIST_ENTRY_RECORDING_UUID = 2020;
    EpgModelDefines.TABLE_FIELD_EPG_TIMER_LIST_ENTRY_MEMORIZED_UUID = 2021;
    EpgModelDefines.TABLE_FIELD_EPG_LINKAGE = 2022;
    EpgModelDefines.ENUM_EPG_THEME_MOVIE = 0x0001;
    EpgModelDefines.ENUM_EPG_THEME_NEWS = 0x0002;
    EpgModelDefines.ENUM_EPG_THEME_SHOW = 0x0004;
    EpgModelDefines.ENUM_EPG_THEME_SPORTS = 0x0008;
    EpgModelDefines.ENUM_EPG_THEME_CHILDREN = 0x0010;
    EpgModelDefines.ENUM_EPG_THEME_MUSIC = 0x0020;
    EpgModelDefines.ENUM_EPG_THEME_ARTS = 0x0040;
    EpgModelDefines.ENUM_EPG_THEME_SOCIAL = 0x0080;
    EpgModelDefines.ENUM_EPG_THEME_EDUCATION = 0x0100;
    EpgModelDefines.ENUM_EPG_THEME_HOBBIES = 0x0200;
    EpgModelDefines.ENUM_EPG_THEME_SERIES = 0x0400;
    EpgModelDefines.ENUM_EPG_THEME_DRAMA = 0x0800;
    EpgModelDefines.ENUM_EPG_THEME_NOT_SUPPORTED = 0x1000;
    EpgModelDefines.ENUM_EPG_THEME_ALL = 0xFFFF;
    EpgModelDefines.ENUM_EPG_ATTRIBUTES_RECORDING = 0x0001;
    EpgModelDefines.ENUM_EPG_ATTRIBUTES_ACTIVE_RECORDING = 0x0003;
    EpgModelDefines.ENUM_EPG_ATTRIBUTES_MEMORIZED = 0x0004;
    EpgModelDefines.ENUM_EPG_ATTRIBUTES_FAVORITE = 0x0008;
    EpgModelDefines.ENUM_EPG_ATTRIBUTES_ALL = 0xFFFF;

    EpgModelDefines.ENUM_EPG_THEME_RESERVED_COLOR = 0;
    EpgModelDefines.ENUM_EPG_THEME_MOVIE_COLOR = 1;
    EpgModelDefines.ENUM_EPG_THEME_NEWS_COLOR = 2;
    EpgModelDefines.ENUM_EPG_THEME_SHOW_COLOR = 3;
    EpgModelDefines.ENUM_EPG_THEME_SPORTS_COLOR = 4;
    EpgModelDefines.ENUM_EPG_THEME_CHILDREN_COLOR = 5;
    EpgModelDefines.ENUM_EPG_THEME_MUSIC_COLOR = 6;
    EpgModelDefines.ENUM_EPG_THEME_ARTS_COLOR = 7;
    EpgModelDefines.ENUM_EPG_THEME_SOCIAL_COLOR = 8;
    EpgModelDefines.ENUM_EPG_THEME_EDUCATION_COLOR = 9;
    EpgModelDefines.ENUM_EPG_THEME_HOBBIES_COLOR = 10;
    EpgModelDefines.ENUM_EPG_THEME_SERIES_COLOR = 11;
    EpgModelDefines.ENUM_EPG_THEME_DRAMA_COLOR = 12;
}
/**
 * EpgModel class derived from SubModel.
 */
function EpgModel(parentModel) {
    SubModel.call(this, parentModel, EpgModelDefines);

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------
// Need to fix
//	EpgModelDefines.SL2_TVAPI_EPG=  "tvapi.epg "

    // EPG items list
    this.registerTableObject(
        EpgModelDefines.SL2_TVAPI_EPG,
        "createEpgIterator");


    // ScheduleRequested
    this.registerIntegerObject(
        EpgModelDefines.SL2_TVAPI_I32_EPG_SCHEDULE_REQUESTED,
        "getScheduleRequested", "setScheduleRequested", "onScheduleRequestedChaged",
        null, null);

    // Ready
    this.registerIntegerObject(
        EpgModelDefines.SL2_TVAPI_I32_EPG_BARKERCHANNEL_ACTIVE,
        "getBarkerChannelActive", "setBarkerChannelActive", "onBarkerChannelActiveChaged",
        null, null);

    this.registerIntegerObject(
        EpgModelDefines.SL2_TVAPI_I32_EPG_AUTO_UPDATE,
        "getEPGAutoUpdate", "setEPGAutoUpdate", "onEPGAutoUpdateChaged",
        null, null);

//    ThemsColor
    this.registerIntegerVectorObject(
        EpgModelDefines.SL2_TVAPI_VI32_EPG_THEMES_COLOR,
        "getThemsColor", "setThemsColor", "onThemsColorChaged",
        null, null);

    this.registerActionObject(
        EpgModelDefines.SL2_TVAPI_ACTION_GET_PROGRAM_TIME,
        [
            {name:"getProgramTime",method:function(object,channelid, eventid){
                return object.invoke(channelid, eventid);
            }}
        ],"onGetProgramTime");

}
EpgModel.prototype = new SubModel();
EpgModel.prototype.constructor = EpgModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    SubModel.registerStaticConstants(
        EpgModel, EpgModelDefines,
        [
            {
                groupPrefix: "TABLE_FIELD_",
                stripPrefix: "TABLE_"
            },
            {
                groupPrefix: "ENUM_EPG_THEME_",
                stripPrefix: "ENUM_EPG_"
            }
        ]);

}
