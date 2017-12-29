/**
 * PvrModelDefines  class.
 * Contains all defined constants from Y:/jspp/common/include/model/values/values-pvr.h for
 * internal use.
 */

 function PvrModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	PvrModelDefines.SL2_TVAPI_ACTION_PVR_SPEED_TEST= "tvapi.action.pvr.speed.test";
	PvrModelDefines.SL2_TVAPI_ACTION_PVR_PAR_INFO= "tvapi.action.pvr.par.info";
	PvrModelDefines.SL2_TVAPI_ACTION_PVR_START_RECORD= "tvapi.action.pvr.start.record";
	PvrModelDefines.SL2_TVAPI_ACTION_PVR_STOP_RECORD= "tvapi.action.pvr.stop.record";
	PvrModelDefines.SL2_TVAPI_I32_PVR_LEAD_TIME= "tvapi.i32.pvr.lead.time";
	PvrModelDefines.SL2_TVAPI_I32_PVR_TRAILING_TIME= "tvapi.i32.pvr.trailing.time";
	PvrModelDefines.SL2_TVAPI_I32_PVR_RECORD_STATE= "tvapi.i32.pvr.record.state";
	PvrModelDefines.SL2_TVAPI_I32_PVR_PAR_AVAILABLE= "tvapi.i32.pvr.par.available";
	PvrModelDefines.SL2_TVAPI_STR_PVR_STATION_UUID= "tvapi.str.pvr.station.uuid";
	PvrModelDefines.SL2_TVAPI_I32_PVR_MAIN_IS_ARCHIVE_RECORDING= "tvapi.i32.pvr.main.is.archive.recording";
	PvrModelDefines.SL2_TVAPI_VSTR_PVR_SCHEDULE_ITEM= "tvapi.vstr.pvr.schedule.item";
	PvrModelDefines.SL2_TVAPI_I32_PVR_FREE_MEM_THRESHOLD= "tvapi.i32.pvr.free.mem.threshold";
	PvrModelDefines.SL2_TVAPI_I32_PVR_SIGNAL_STATE= "tvapi.i32.pvr.signal.state";


	 // enum or defined is here



	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_INFO_MEM_INDEX  =  0;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_INFO_FREE_MEM_INDEX  =  1;


	PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_UNKNOWN  =  0;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_RECORDING  =  1;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_SAVING  =  2;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_STOPPED  =  3;//别忘了修改成3
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_STOPPED_NOTIFY_3RD =  4;


	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_NO_DEVICE  =  0;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_INSETTED  =  1;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_REMOVED  =  2;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_FORMATED  =  3;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_SELECTED  =  4;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_AVAIL  =  5;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_CHG_ANOTHER_AVAIL  =  6;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_READY  =  7;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_FULL  =  8;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_TOO_SMALL  =  9;
	PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_READ_ONLY  =  10;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_SIGNAL_LOSS  =  5;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_SERVICE_BLOCKED  =  9;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_NO_AUDIO_VIDEO_SVC  =  19;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_AUDIO_ONLY_SVC  =  20;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_VIDEO_ONLY_SVC  =  21;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_SCRAMBLED_AUDIO_VIDEO_SVC  =  23;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_SCRAMBLED_AUDIO_CLEAR_VIDEO_SVC  =  24;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_SCRAMBLED_AUDIO_NO_VIDEO_SVC  =  25;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_SCRAMBLED_VIDEO_CLEAR_AUDIO_SVC  =  26;
	PvrModelDefines.ENUM_SL2_TVAPI_SVCTX_NTFY_CODE_SCRAMBLED_VIDEO_NO_AUDIO_SVC  =  27;
}
/**
 * PvrModel class derived from SubModel.
 */
function PvrModel( parentModel ) {
    SubModel.call( this, parentModel, PvrModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
// Need to fix
//	PvrModelDefines.SL2_TVAPI_ACTION_PVR_SPEED_TEST=  "tvapi.action.pvr.speed.test "

    // SpeedTest
              this.registerActionObject(
              PvrModelDefines.SL2_TVAPI_ACTION_PVR_SPEED_TEST,
			  [
			  	{name:"SpeedTest",method:function(object, path){
			  		return object.invoke(path);
			  		}}
              ],"getPvrSpeed"
			  );

// Need to fix
//	PvrModelDefines.SL2_TVAPI_ACTION_PVR_PAR_INFO=  "tvapi.action.pvr.par.info "

    // ParInfo
              this.registerActionObject(
              PvrModelDefines.SL2_TVAPI_ACTION_PVR_PAR_INFO,
			  [
			  	{name:"ParInfo",method:function(object){
			  		return object.invoke();
			  		}}
              ],"getPvrParInfo"
			  );

// Need to fix
//	PvrModelDefines.SL2_TVAPI_ACTION_PVR_START_RECORD=  "tvapi.action.pvr.start.record "

    // StartRecord
              this.registerActionObject(
              PvrModelDefines.SL2_TVAPI_ACTION_PVR_START_RECORD,
			  [
			  	{name:"StartRecord",method:function(object){
			  		return object.invoke();
			  		}}
              ],"getStartRecordInfo"
			  );

// Need to fix
//	PvrModelDefines.SL2_TVAPI_ACTION_PVR_STOP_RECORD=  "tvapi.action.pvr.stop.record "

    // StopRecord
              this.registerActionObject(
              PvrModelDefines.SL2_TVAPI_ACTION_PVR_STOP_RECORD,
			  [
			  	{name:"StopRecord",method:function(object){
			  		return object.invoke();
			  		}}
              ],"StopRecordCallBack"
			  );

    // LeadTime
              this.registerIntegerObject(
              PvrModelDefines.SL2_TVAPI_I32_PVR_LEAD_TIME,
              "getLeadTime", "setLeadTime", "onLeadTimeChaged",
              null, null );

    // TrailingTime
              this.registerIntegerObject(
              PvrModelDefines.SL2_TVAPI_I32_PVR_TRAILING_TIME,
              "getTrailingTime", "setTrailingTime", "onTrailingTimeChaged",
              null, null );

    // RecordState
              this.registerIntegerObject(
              PvrModelDefines.SL2_TVAPI_I32_PVR_RECORD_STATE,
              "getRecordState", "setRecordState", "onRecordStateChaged",
              null, null );

    // ParAvailable
              this.registerIntegerObject(
              PvrModelDefines.SL2_TVAPI_I32_PVR_PAR_AVAILABLE,
              "getParAvailable", "setParAvailable", "onParAvailableChaged",
              null, null );

    // StationUuid
              this.registerStringObject(
              PvrModelDefines.SL2_TVAPI_STR_PVR_STATION_UUID,
              "getStationUuid", "setStationUuid", "onStationUuidChaged",
              null, null );

    // MainIsArchiveRecording
              this.registerIntegerObject(
              PvrModelDefines.SL2_TVAPI_I32_PVR_MAIN_IS_ARCHIVE_RECORDING,
              "getMainIsArchiveRecording", "setMainIsArchiveRecording", "onMainIsArchiveRecordingChaged",
              null, null );

    // ScheduleItem
              this.registerStringVectorObject(
              PvrModelDefines.SL2_TVAPI_VSTR_PVR_SCHEDULE_ITEM,
              "getScheduleItem", "setScheduleItem", "onScheduleItemChaged",
              null, null );

    // FreeMemThreshold
              this.registerIntegerObject(
              PvrModelDefines.SL2_TVAPI_I32_PVR_FREE_MEM_THRESHOLD,
              "getFreeMemThreshold", "setFreeMemThreshold", "onFreeMemThresholdChaged", 
              null, null );

    // SignalState
              this.registerIntegerObject(
              PvrModelDefines.SL2_TVAPI_I32_PVR_SIGNAL_STATE,
              "getSignalState", "setSignalState", "onSignalStateChaged", 
              null, null );


}
PvrModel.prototype = new SubModel();
PvrModel.prototype.constructor = PvrModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            PvrModel, PvrModelDefines,
            [
            ] );
}
