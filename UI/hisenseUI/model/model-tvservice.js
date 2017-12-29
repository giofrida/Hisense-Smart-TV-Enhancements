// --------------------------------------------------------
/**
 * @brief Convenience sub model for accessing
 * the middleware servicelist model objects as defined in
 * loewe/common/biz/api/include/model/values/values-tvservice.h.
 *
 * @author Sascha Radike
 *
 * Copyright (c) 2014 LOEWE Opta GmbH, Kronach. All rights reserved. */
//--------------------------------------------------------

/**
 * TvserviceModelDefines class.
 * Contains all defined constants from values-tvservice.h for
 * internal use.
 */
function TvserviceModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------

    TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_PLAY_MAIN            = "tvapi.vstr.tvservice.play.main";

    TvserviceModelDefines.TVAPI_ACTION_TVSERVICE_PLAY               = "tvapi.action.tvservice.play";
    TvserviceModelDefines.TVAPI_I32_TVSERVICE_NO_SIGNAL_MAIN        = "tvapi.i32.tvservice.nosignal.main";

    TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_UNLOCK_PLAY           = "tvapi.action.tvservice.unlock.play";
    TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_VIDEO_FORMAT_INFO  = "tvapi.str.tvservice.video.format.info";
    TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_AUDIO_INFORMATION  = "tvapi.str.tvservice.audio.information";


    TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO      = "tvapi.action.tvservice.get.pfinfo";
    TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO2     = "tvapi.action.tvservice.get.pfinfo2";

    TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_GET_DATETIME      = "tvapi.i64.datetime.time.utc";
    TvserviceModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALLEVELS = "tvapi.vint32.servicemode.tunersignalinfo.signallevels";
    TvserviceModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALQUALITIES= "tvapi.vint32.servicemode.tunersignalinfo.signalqualities";

    TvserviceModelDefines.SL2_TVAPI_HBBTV_I32_KEYSET = "tvapi.hbbtv.i32.keyset";
    TvserviceModelDefines.SL2_TVAPI_HBBTV_I32_STATE = "tvapi.hbbtv.i32.state";
    TvserviceModelDefines.SL2_TVAPI_HBBTV_I32_HBBTVSTATUS = "tvapi.hbbtv.i32.hbbtvstatus";
	TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_SOURCE_VIDEO_FORMAT_INFO = "tvapi.str.tvservice.source.video.format.info";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAYED_SUCCESS_LIVETV    = "tvapi.i32.tvservice.played.success.livetv";
	TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_MESSAGE_CAM_INDEX= "tvapi.i32.tvservice.message.cam.index";

	TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_UPDATE    = "tvapi.i32.tvservice.list.update";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_NAME_UPDATE    = "tvapi.i32.tvservice.list.name.update";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_SAVED    = "tvapi.i32.tvservice.list.saved";

	TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LOCK_STATUS    = "tvapi.i32.tvservice.lock.status";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_BANNER_ENABLE    = "tvapi.i32.tvservice.banner.enable";
    TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_AUTHURL = "tvapi.str.tvservice.authurl";
}

/**
 * TvserviceModel class derived from SubModel
 */
function TvserviceModel( parentModel ) {
    SubModel.call( this, parentModel, TvserviceModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------

    // Main Play
    this.registerStringVectorObject(
            TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_PLAY_MAIN,
            "getMainPlay", null, "onMainPlayChanged",
            null, null );
    // Action play
    this.registerActionObject(
            TvserviceModelDefines.TVAPI_ACTION_TVSERVICE_PLAY,
            [
                 { name: "playChannel", method: function( object,action,uuid,dvbs, srch) {
                     return object.invoke(action, uuid ,dvbs,srch);
                    }
                 }
            ],
            "onPlayResult" );

    this.registerActionObject(
        TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_UNLOCK_PLAY,
        [
            { name: "unLockPlayChannel", method: function( object,uuid) {
                return object.invoke(uuid );
            }
            }
        ],
        "onPlayResult" );

    this.registerActionObject(
        TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO,
        [
            { name: "getChannelNowPfInfo", method: function( object) {
                return object.invoke(0);
            }
            }
        ],
        "getChannelNowPfInfoCallBack");

    this.registerActionObject(
        TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO2,
        [
            { name: "getChannelNextPfInfo", method: function( object) {
                return object.invoke(1);
            }
            }
        ],
        "getChannelNextPfInfoCallBack");

    // NosignalMain
    this.registerIntegerObject(
        TvserviceModelDefines.TVAPI_I32_TVSERVICE_NO_SIGNAL_MAIN,
        "getNoSignalMain", "setNoSignalMain", "onNoSignalMainChanged",
        null, null );

    this.registerIntegerVectorObject(
        TvserviceModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALLEVELS,
        "getSignalMainLevels", "setSignalMainLevels", "onSignalMainLevelsChanged",
        null, null );
    // TunersignalinfoSignalqualities
    this.registerIntegerVectorObject(
        TvserviceModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALQUALITIES,
        "getTunersignalinfoSignalqualities", "setTunersignalinfoSignalqualities", "onTunersignalinfoSignalqualitiesChaged",
        null, null );
    // Main Play
    this.registerStringObject(
        TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_VIDEO_FORMAT_INFO,
        "getMainPlayVideoFormatInfo", null, "onMainPlayVideoFormatInfoChanged",
        null, null );

    this.registerStringObject(
        TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_AUDIO_INFORMATION,
        "getMainPlayAudioFormatInfo", null, "onMainPlayAudioFormatInfoChanged",
        null, null );

    // this.registerStringObject(
    //     TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_GET_DATETIME,
    //     "getDateTime", null, "set",
    //     null, null );

    this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_HBBTV_I32_KEYSET,
        "getHbbTvKeySet", "setHbbTvKeySet", "onHbbTvKeySetChanged",
        null, null );

    this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_HBBTV_I32_STATE,
        "getI32Switch", "setI32Switch", "onI32SwitchChaged",
        null, null );
    this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_HBBTV_I32_HBBTVSTATUS,
        "getHbbTvStatus", "setHbbTvStatus", "onHbbTvStatusChanged",
        null, null );

	this.registerStringObject(
        TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_SOURCE_VIDEO_FORMAT_INFO,
        "getCurrentSourceVideoFormat", "setCurrentSourceVideoFormat", "onCurrentSourceVideoFormatChanged",
        null, null );

	 this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAYED_SUCCESS_LIVETV,
        "getPlaySuccessLiveTV", "setPlaySuccessLiveTV", "onPlaySuccessLiveTVChanged",
        null, null );
    // MessageCamIndex
              this.registerIntegerObject(
              TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_MESSAGE_CAM_INDEX,
              "getMessageCamIndex", "setMessageCamIndex", "onMessageCamIndexChaged",
              null, null );

		this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LOCK_STATUS,
        "getLockStatus", "setLockStatus", "onLockStatusChanged",
        null, null );

    this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_UPDATE,
        "getChannelListUpdate", "setChannelListUpdate", "onChannelListUpdate",
        null, null );

    this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_NAME_UPDATE,
        "getChannelListNameUpdate", "setChannelListNameUpdate", "onChannelListNameUpdate",
        null, null );
    this.registerIntegerObject(
        TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_SAVED,
        "getChannelListSaved", "setChannelListSaved", "onChannelListSavedChanged",
        null, null );

    if ("EU" == InitArea) {

        this.registerIntegerObject(
            TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_BANNER_ENABLE,
            "getBannerEnable", "setBannerEnable", "onBannerEnableChanged",
            null, null);
    }
    this.registerStringObject(TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_AUTHURL, "getAuthUrl", null, null, null, null);


}
TvserviceModel.prototype = new SubModel();
TvserviceModel.prototype.constructor = TvserviceModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    SubModel.registerStaticConstants(
            TvserviceModel, TvserviceModelDefines,
            [ { groupPrefix: "SL2_TVAPI_VSTR_TVSERVICE_PLAY_", stripPrefix: "SL2_TVAPI_VSTR_TVSERVICE_" },
              { groupPrefix: "ENUM_TVSERVICE_EIT_FIELD_", stripPrefix: "ENUM_TVSERVICE_" },
                { groupPrefix: "ENUM_TVSERVICE_AUDIO_", stripPrefix: "ENUM_TVSERVICE_" }
            ] );

}
