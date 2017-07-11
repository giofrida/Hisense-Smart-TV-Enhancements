/**
 * SourceModelDefines  class.
 * Contains all defined constants from C:/Users/ghl/Desktop/xiugai/values-source.h for
 * internal use.
 */

 function SourceModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	SourceModelDefines.SL2_TVAPI_VSTR_SYSTEM_INPUT_NAME= "tvapi.vstr.source.input.name";
	SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME= "tvapi.action.source.input.rename";
	SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_SET= "tvapi.action.source.input.set";
    SourceModelDefines.SL2_TVAPI_I32_SYSTEM_INPUT_GET_CURRENT_SOURCE= "tvapi.i32.source.input.current";

	SourceModelDefines.SL2_TVAPI_I32_SOURCE_MHL_AVAILABLE= "tvapi.i32.source.input.mhl.available";
	SourceModelDefines.SL2_TVAPI_ACTION_SOURCE_MHL_KEY_PRESS= "tvapi.action.source.input.mhl.key.press";
     SourceModelDefines.SL2_TVAPI_I32_SYSTEM_INPUT_CURRENT_IN_LOCK="tvapi.i32.system.input.current.inLock";
     SourceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_UNLOCK_INPUT="tvapi.action.tvservice.unlock.input";
     SourceModelDefines.SL2_TVAPI_I32_SYSTEM_CURRENT_TIME_IN_LOCK="tvapi.i32.parental.lock.current.time.inLock";

     // enum or defined is here

	SourceModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME_ARG_INPUT_UID  =  0;
	SourceModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME_ARG_NEW_NAME  =  1;
	SourceModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_SET_ARG_INPUT_UID  =  0;
}
/**
 * SourceModel class derived from SubModel.
 */
function SourceModel( parentModel ) {
    SubModel.call( this, parentModel, SourceModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // InputName
              this.registerStringVectorObject(
              SourceModelDefines.SL2_TVAPI_VSTR_SYSTEM_INPUT_NAME,
              "getInputName", "setInputName", "onInputNameChaged",
              null, null );

   // getCurrentSource
    this.registerIntegerObject(
        SourceModelDefines.SL2_TVAPI_I32_SYSTEM_INPUT_GET_CURRENT_SOURCE,
        "getCurrentSource", "setCurrentSource", "onCurrentSourceChaged",
        null, null );

// Need to fix
//	SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME=  "tvapi.action.source.input.rename "

    // InputRename
              this.registerActionObject(
              SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME,
			  [
			  	{name:"InputRename",method:function(object,uid,rename){
			  		return object.invoke(uid,rename);
			  		}}
              ],"null"
			  );

// Need to fix
//	SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_SET=  "tvapi.action.source.input.set "

    //InputSet
              this.registerActionObject(
              SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_SET,
			  [
			  	{name:"InputSet",method:function(object,configflag){
			  		return object.invoke(configflag);
			  		}}
              ],"null"
			  );

    //	SourceModelDefines.SL2_TVAPI_I32_SOURCE_MHL_AVAILABLE= "tvapi.i32.source.input.mhl.available"
    // InputMhlAvailable
            this.registerIntegerObject(
            SourceModelDefines.SL2_TVAPI_I32_SOURCE_MHL_AVAILABLE,
            "getInputMhlAvailable", "setInputMhlAvailable", "onInputMhlAvailableChaged", 
            null, null );


// Need to fix
//	SourceModelDefines.SL2_TVAPI_ACTION_SOURCE_MHL_KEY_PRESS=  "tvapi.action.source.input.mhl.key.press "

    // InputMhlKeyPress
            this.registerActionObject(
            SourceModelDefines.SL2_TVAPI_ACTION_SOURCE_MHL_KEY_PRESS,
			[
				{name:"InputMhlKeyPress",method:function(object,keyValue){
					return object.invoke(keyValue);
					}}
            ],"null"
			);
    this.registerIntegerObject(
        SourceModelDefines.SL2_TVAPI_I32_SYSTEM_INPUT_CURRENT_IN_LOCK,
        "getInputCurrentInLock", "setInputCurrentInLock", "onInputCurrentInLockChaged",
        null, null );

    this.registerActionObject(
        SourceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_UNLOCK_INPUT,
        [
            {name:"unlockInput",method:function(object,keyValue){
                return object.invoke(keyValue);
            }}
        ],"null"
    );
    this.registerIntegerObject(
        SourceModelDefines.SL2_TVAPI_I32_SYSTEM_CURRENT_TIME_IN_LOCK,
        "getCurrentTimeInLock", "setCurrentTimeInLock", "onCurrentTimeInLockChaged",
        null, null );



}
SourceModel.prototype = new SubModel();
SourceModel.prototype.constructor = SourceModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            SourceModel, SourceModelDefines,
            [
            ] );
}
