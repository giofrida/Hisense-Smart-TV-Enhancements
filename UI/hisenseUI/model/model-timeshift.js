/**
 * TimeshiftModelDefines  class.
 * Contains all defined constants from Z:/4ui/values-timeshift.h for
 * internal use.
 */

 function TimeshiftModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_SET_PAR= "tvapi.action.tshift.set.par";
	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAR_INFO= "tvapi.action.tshift.par.info";
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_FORMAT_PAR= "tvapi.action.tshift.format.par";
	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_BEGIN_SHIFT= "tvapi.action.tshift.begin.shift";
	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_TRIPLE_PLAY= "tvapi.action.tshift.triple.play";
	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PLAY= "tvapi.action.tshift.play";
	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAUSE= "tvapi.action.tshift.pause";
	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_STOP= "tvapi.action.tshift.stop";
	TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PLAY_STATE= "tvapi.i32.tshift.play.state";
//	TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PAR_AVAILABLE= "tvapi.i32.tshift.par.available";
	TimeshiftModelDefines.SL2_TVAPI_I64_TSHIFT_CURRENT_PLAY_TIME= "tvapi.i64.tshift.current.play.time";
	TimeshiftModelDefines.SL2_TVAPI_I64_TSHIFT_CURRENT_RECORD_TIME= "tvapi.i64.tshift.current.record.time";
//	TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PLAYER_STATE= "tvapi.i32.tshift.player.state";
	TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_MEM_SIZE= "tvapi.i32.tshift.mem.size";
	TimeshiftModelDefines.SL2_TVAPI_STR_TSHIFT_UUID= "tvapi.str.tshift.uuid";
    TimeshiftModelDefines.SL2_TVAPI_VSTR_TSHIFT_BEGIN_END_TIME= "tvapi.vstr.tshift.begin.end.time";
	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_IS_REGISTERED= "tvapi.action.tshift.is.registered";


	 // enum or defined is here

	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_START_REG_FAIL  =  -1;


	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_STATUS_CHANGE  =  0;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_STRG_STATUS_CHANGE  =  1;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_ANALYSIS_BEGIN  =  2;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_ANALYSIS_PROGRESS  =  3;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_ANALYSIS_OK  =  4;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_ANALYSIS_FAIL  =  5;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_CREATE_FILE_BEGIN  =  6;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_CREATE_FILE_PROGRESS  =  7;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_CREATE_FILE_OK  =  8;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_CREATE_FILE_FAIL  =  9;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_BEGIN  =  10;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_PROGRESS  =  11;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_LOW  =  12;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_OK  =  13;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_FAIL  =  14;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_REG_FINISHED  =  15;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_CHANGE  =  16;


	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_INFO_MEM_INDEX  =  0;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_INFO_FREE_MEM_INDEX  =  1;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_1X  =  1;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_2X  =  2;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_4X  =  4;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_8X  =  8;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_16X  =  16;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_32X  =  32;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_1X  =  -1;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_2X  =  -2;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_4X  =  -4;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_8X  =  -8;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_16X  =  -16;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_32X  =  -32;

    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_LIVE_PLAY  =  0;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY  =  1;

	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X  =  2;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X  =  4;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X  =  8;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X  =  16;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X  =  32;

    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X  =  -2;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X  =  -4;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X  =  -8;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X  =  -16;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X  =  -32;

    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE  =  33;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_STOP  =  34;


	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_NO_DEVICE  =  0;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_INSETTED  =  1;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_REMOVED  =  2;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_FORMATED  =  3;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_SELECTED  =  4;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_AVAIL  =  5;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_CHG_ANOTHER_AVAIL  =  6;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_READY  =  7;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_FULL  =  8;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_TOO_SMALL  =  9;
	TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_READ_ONLY  =  10;
}
/**
 * TimeshiftModel class derived from SubModel.
 */
function TimeshiftModel( parentModel ) {
    SubModel.call( this, parentModel, TimeshiftModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_SET_PAR=  "tvapi.action.tshift.set.par "

    // SetPar
              this.registerActionObject(
              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_SET_PAR,
			  [
			  	{name:"SetPar",method:function(object){
			  		return object.invoke();
			  		}}
              ],"getRegisterReturnValue"
			  );

// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAR_INFO=  "tvapi.action.tshift.par.info "

    // ParInfo
              this.registerActionObject(
              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAR_INFO,
			  [
			  	{name:"ParInfo",method:function(object){
			  		return object.invoke();
			  		}}
              ],"getTshiftParInfo"
			  );

// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_FORMAT_PAR=  "tvapi.action.tshift.format.par "

    // FormatPar
//              this.registerActionObject(
//              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_FORMAT_PAR,
//			  [
//			  	{name:"FormatPar",method:function(object){
//			  		return object.invoke();
//			  		}}
//              ],"null"
//			  );

// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_BEGIN_SHIFT=  "tvapi.action.tshift.begin.shift "

    // BeginShift
              this.registerActionObject(
              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_BEGIN_SHIFT,
			  [
			  	{name:"BeginShift",method:function(object){
			  		return object.invoke();
			  		}}
              ],"beginShiftCallBack"
			  );

// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_TRIPLE_PLAY=  "tvapi.action.tshift.triple.play "

    // TriplePlay
              this.registerActionObject(
              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_TRIPLE_PLAY,
			  [
			  	{name:"TriplePlay",method:function(object,speed){
			  		return object.invoke(speed);
			  		}}
              ],"null"
			  );

// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PLAY=  "tvapi.action.tshift.play "

    // Play
              this.registerActionObject(
              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PLAY,
			  [
			  	{name:"Play",method:function(object){
			  		return object.invoke();
			  		}}
              ],"null"
			  );

// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAUSE=  "tvapi.action.tshift.pause "

    // Pause
              this.registerActionObject(
              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAUSE,
			  [
			  	{name:"Pause",method:function(object){
			  		return object.invoke();
			  		}}
              ],"null"
			  );

// Need to fix
//	TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_STOP=  "tvapi.action.tshift.stop "

    // Stop
              this.registerActionObject(
              TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_STOP,
			  [
			  	{name:"Stop",method:function(object){
			  		return object.invoke();
			  		}}
              ],"timeShiftStopCallback"
			  );

    // PlayState
              this.registerIntegerObject(
              TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PLAY_STATE,
              "getPlayState", "setPlayState", "onPlayStateChaged",
              null, null );

    // ParAvailable
//              this.registerIntegerObject(
//              TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PAR_AVAILABLE,
//              "getParAvailable", "setParAvailable", "onParAvailableChaged",
//              null, null );

    // CurrentPlayTime
              this.registerIntegerObject(
              TimeshiftModelDefines.SL2_TVAPI_I64_TSHIFT_CURRENT_PLAY_TIME,
              "getCurrentPlayTime", "setCurrentPlayTime", "onCurrentPlayTimeChaged",
              null, null );

    // CurrentRecordTime
              this.registerIntegerObject(
              TimeshiftModelDefines.SL2_TVAPI_I64_TSHIFT_CURRENT_RECORD_TIME,
              "getCurrentRecordTime", "setCurrentRecordTime", "onCurrentRecordTimeChaged",
              null, null );

    // PlayerState
//              this.registerIntegerObject(
//              TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PLAYER_STATE,
//              "getPlayerState", "setPlayerState", "onPlayerStateChaged",
//              null, null );

    // MemSize
              this.registerIntegerObject(
              TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_MEM_SIZE,
              "getMemSize", "setMemSize", "onMemSizeChaged",
              null, null );

    // Uuid
              this.registerStringObject(
              TimeshiftModelDefines.SL2_TVAPI_STR_TSHIFT_UUID,
              "getUuid", "setUuid", "onUuidChaged",
              null, null );

    this.registerStringVectorObject(
        TimeshiftModelDefines.SL2_TVAPI_VSTR_TSHIFT_BEGIN_END_TIME,
        "getBeginEndTime", "setBeginEndTime", "onBeginEndTimeChanged",
        null, null );

	this.registerActionObject(
		TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_IS_REGISTERED,
		[
			{name:"IsRegistered",method:function(object,path){
				return object.invoke(path);
			}}
		],"getTshiftIsRegistered"
	);

}
TimeshiftModel.prototype = new SubModel();
TimeshiftModel.prototype.constructor = TimeshiftModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            TimeshiftModel, TimeshiftModelDefines,
            [
            ] );
}
