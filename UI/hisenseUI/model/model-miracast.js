/**
 * MiracastModelDefines  class.
 * Contains all defined constants from C:/Users/HHX/Desktop/whale/values-miracast.h for
 * internal use.
 */

 function MiracastModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	//MiracastModelDefines.MIRACAST_LOCAL_NAME_PREFIX= "HIS-TV-SINK-";
	MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_START_APP= "tvapi.miracast.action.start.app";
	MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_STOP_APP= "tvapi.miracast.action.stop.app";
	MiracastModelDefines.SL2_TVAPI_STR_MIRACAST_STATUS= "tvapi.str.miracast.status";



	 // enum or defined is here

	MiracastModelDefines.MIRACAST_LOCAL_NAME_LEN  =  30;
}
/**
 * MiracastModel class derived from SubModel.
 */
function MiracastModel( parentModel ) {
    SubModel.call( this, parentModel, MiracastModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
// Need to fix
//	MiracastModelDefines.MIRACAST_LOCAL_NAME_PREFIX=  "HIS-TV-SINK- "

// Need to fix
//	MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_START_APP=  "tvapi.miracast.action.start.app "

    // ActionStartApp
            this.registerActionObject(
            MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_START_APP,
			[
				{name:"ActionStartApp",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);

// Need to fix
//	MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_STOP_APP=  "tvapi.miracast.action.stop.app "

    // ActionStopApp
            this.registerActionObject(
            MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_STOP_APP,
			[
				{name:"ActionStopApp",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);

    // Status
            this.registerStringObject(
            MiracastModelDefines.SL2_TVAPI_STR_MIRACAST_STATUS,
            "getStatus", "setStatus", "onStatusChaged",
            null, null );

// Need to fix
//	MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_START_RTSP=  "tvapi.miracast.action.start.rtsp "

    // ActionStartRtsp
//            this.registerActionObject(
//            MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_START_RTSP,
//			[
//				{name:"ActionStartRtsp",method:function(object){
//					return object.invoke();
//					}}
//            ],"null"
//			);


}
MiracastModel.prototype = new SubModel();
MiracastModel.prototype.constructor = MiracastModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            MiracastModel, MiracastModelDefines,
            [
            ] );
}
