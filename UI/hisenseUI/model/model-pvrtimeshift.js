/**
 * Pvr_timeshiftModelDefines  class.
 * Contains all defined constants from F:/sharedFile/AAAFtpServer/values/values-pvr-timeshift.h for
 * internal use.
 */

 function Pvr_timeshiftModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_HDD_DEVICES_SEARCH= "tvapi.i32.pvrtimeshift.hdd.devices.search";
	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_HDD_INFO= "tvapi.action.pvrtimeshift.get.hdd.info";
	Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_PVR_HDD_UID= "tvapi.str.pvrtimeshift.pvr.hdd.uid";
	Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_PVR_PARTITION_UID= "tvapi.str.pvrtimeshift.pvr.partiton.uid";
	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_DEVICE_SPEED_DETECT= "tvapi.action.pvrtimeshift.device.speed.detect";
	Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_DEVICES_SPEED_DETECT_STATE= "tvapi.i32.pvrtimeshift.devices.speed.state";
	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_GET_WRITE_SPEED= "tvapi.action.pvrtimeshift.get.write.speed";
	Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_TIMESHIFT_HDD_UID= "tvapi.str.pvrtimeshift.shift.hdd.uid";
	Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_TIMESHIFT_PARTITION_UID= "tvapi.str.pvrtimeshift.shift.partiton.uid";
	Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_TIMESHIFT_STORAGE_SIZE= "tvapi.i32.pvrtimeshift.shift.memory.size";
	Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_PVR_LEAD_TIME= "tvapi.i32.pvrtimeshift.pvr.lead.time";
	Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_PVR_TRAILING_TIME= "tvapi.i32.pvrtimeshift.pvr.trail.time";
	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_DEVICE_FORMAT= "tvapi.action.pvrtimeshift.device.format";
	Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_DEVICES_FORMAT_STATE= "tvapi.i32.pvrtimeshift.devices.format.state";
	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_GET_FORMAT_FLAG= "tvapi.action.pvrtimeshift.device.format.flag";


	 // enum or defined is here



	Pvr_timeshiftModelDefines.ENUM_SL2_TVAPI_ACTION_PVR_TIMESHIFT_HDD_INFO_TYPE  =  0;
	Pvr_timeshiftModelDefines.ENUM_SL2_TVAPI_ACTION_PVR_TIMESHIFT_HDD_INFO_INDEX1  =  1;
}
/**
 * Pvr_timeshiftModel class derived from SubModel.
 */
function Pvr_timeshiftModel( parentModel ) {
    SubModel.call( this, parentModel, Pvr_timeshiftModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // HddDevicesSearch
              this.registerIntegerObject(
              Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_HDD_DEVICES_SEARCH,
              "getHddDevicesSearch", "setHddDevicesSearch", "onHddDevicesSearchChaged",
              null, null );

// Need to fix
//	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_HDD_INFO=  "tvapi.action.pvrtimeshift.get.hdd.info "

    // GetHddInfo
            //  this.registerActionObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_HDD_INFO,
			//  [                  
			//  	{name:"GetHddInfo",method:function(object,type,idx){
			//  		return object.invoke(type,idx);
			//  		}} 
            //  ],"null"
			//  );

    // PvrHddUid
            //  this.registerStringObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_PVR_HDD_UID,
            //  "getPvrHddUid", "setPvrHddUid", "onPvrHddUidChaged",
            //  null, null );

    // PvrPartitonUid
            //  this.registerStringObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_PVR_PARTITION_UID,
            //  "getPvrPartitonUid", "setPvrPartitonUid", "onPvrPartitonUidChaged",
            //  null, null );

// Need to fix
//	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_DEVICE_SPEED_DETECT=  "tvapi.action.pvrtimeshift.device.speed.detect "

    // DeviceSpeedDetect
            //  this.registerActionObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_DEVICE_SPEED_DETECT,
			//  [
			//  	{name:"DeviceSpeedDetect",method:function(object){
			//  		return object.invoke();
			//  		}}
            //  ],"null"
			//  );

    // DevicesSpeedState
            //  this.registerIntegerObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_DEVICES_SPEED_DETECT_STATE,
            //  "getDevicesSpeedState", "setDevicesSpeedState", "onDevicesSpeedStateChaged", 
            //  null, null );

// Need to fix
//	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_GET_WRITE_SPEED=  "tvapi.action.pvrtimeshift.get.write.speed "

    // GetWriteSpeed
            //  this.registerActionObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_GET_WRITE_SPEED,
			//  [
			//  	{name:"GetWriteSpeed",method:function(object){
			//  		return object.invoke();
			//  		}}
            //  ],"null"
			//  );

    // ShiftHddUid
            //  this.registerStringObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_TIMESHIFT_HDD_UID,
            //  "getShiftHddUid", "setShiftHddUid", "onShiftHddUidChaged",
            //  null, null );

    // ShiftPartitonUid
            //  this.registerStringObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_STR_PVR_TIMESHIFT_TIMESHIFT_PARTITION_UID,
            //  "getShiftPartitonUid", "setShiftPartitonUid", "onShiftPartitonUidChaged",
            //  null, null );

    // ShiftMemorySize
            //  this.registerIntegerObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_TIMESHIFT_STORAGE_SIZE,
            //  "getShiftMemorySize", "setShiftMemorySize", "onShiftMemorySizeChaged", 
            //  null, null );

    // PvrLeadTime
            //  this.registerIntegerObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_PVR_LEAD_TIME,
            //  "getPvrLeadTime", "setPvrLeadTime", "onPvrLeadTimeChaged", 
            //  null, null );

    // PvrTrailTime
            //  this.registerIntegerObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_PVR_TRAILING_TIME,
            //  "getPvrTrailTime", "setPvrTrailTime", "onPvrTrailTimeChaged", 
            //  null, null );

// Need to fix
//	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_DEVICE_FORMAT=  "tvapi.action.pvrtimeshift.device.format "

    // DeviceFormat
            //  this.registerActionObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_DEVICE_FORMAT,
			//  [
			//  	{name:"DeviceFormat",method:function(object){
			//  		return object.invoke();
			//  		}}
            //  ],"null"
			//  );

    // DevicesFormatState
            //  this.registerIntegerObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_I32_PVR_TIMESHIFT_DEVICES_FORMAT_STATE,
            //  "getDevicesFormatState", "setDevicesFormatState", "onDevicesFormatStateChaged", 
            //  null, null );

// Need to fix
//	Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_GET_FORMAT_FLAG=  "tvapi.action.pvrtimeshift.device.format.flag "

    // DeviceFormatFlag
            //  this.registerActionObject(
            //  Pvr_timeshiftModelDefines.SL2_TVAPI_ACTION_PVR_TIMESHIFT_GET_FORMAT_FLAG,
			//  [
			//  	{name:"DeviceFormatFlag",method:function(object){
			//  		return object.invoke();
			//  		}}
            //  ],"null"
			//  );


}
Pvr_timeshiftModel.prototype = new SubModel();
Pvr_timeshiftModel.prototype.constructor = Pvr_timeshiftModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            Pvr_timeshiftModel, Pvr_timeshiftModelDefines,
            [
            ] );
}
