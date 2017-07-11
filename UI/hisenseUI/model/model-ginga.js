/**
 * GingaModelDefines  class.
 * Contains all defined constants from C:/Users/wanxingzhen/Desktop/values-ginga.h for
 * internal use.
 */

 function GingaModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	GingaModelDefines.SL2_TVAPI_GINGA_I32_AUTO_RUN= "tvapi.ginga.i32.auto.run";
	GingaModelDefines.SL2_TVAPI_GINGA_I32_ENABLE= "tvapi.ginga.i32.enable";
	GingaModelDefines.SL2_TVAPI_GINGA_ACTION_START= "tvapi.ginga.action.start";
    GingaModelDefines.SL2_TVAPI_GINGA_ACTION_ACTIVE= "tvapi.ginga.action.active";
    GingaModelDefines.SL2_TVAPI_GINGA_VSTR_APP_LIST= "tvapi.ginga.vstr.applist";
	GingaModelDefines.SL2_TVAPI_GINGA_ACTION_CTRL_APP= "tvapi.ginga.action.ctrl_ginga_app";


	 // enum or defined is here

}
/**
 * GingaModel class derived from SubModel.
 */
function GingaModel( parentModel ) {
    SubModel.call( this, parentModel, GingaModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // I32AutoRun
            this.registerIntegerObject(
            GingaModelDefines.SL2_TVAPI_GINGA_I32_AUTO_RUN,
            "getI32AutoRun", "setI32AutoRun", "onI32AutoRunChaged", 
            null, null );

    // I32Enable
            this.registerIntegerObject(
            GingaModelDefines.SL2_TVAPI_GINGA_I32_ENABLE,
            "getI32Enable", "setI32Enable", "onI32EnableChaged", 
            null, null );

// Need to fix
//	GingaModelDefines.SL2_TVAPI_GINGA_ACTION_START=  "tvapi.ginga.action.start "

    // ActionStart
            this.registerActionObject(
            GingaModelDefines.SL2_TVAPI_GINGA_ACTION_START,
			[
				{name:"ActionStart",method:function(object,cmdStr){
					return object.invoke(cmdStr);
					}}
            ],"null"
			);

			// Need to fix
//	GingaModelDefines.SL2_TVAPI_GINGA_ACTION_ACTIVE=  "tvapi.ginga.action.active "

    // ActionStart
            this.registerActionObject(
            GingaModelDefines.SL2_TVAPI_GINGA_ACTION_ACTIVE,
			[
				{name:"ActionActive",method:function(object,cmdStr){
					return object.invoke(cmdStr);
					}}
            ],"null"
			);

    // VstrApplist
            this.registerStringVectorObject(
            GingaModelDefines.SL2_TVAPI_GINGA_VSTR_APP_LIST,
            "getVstrApplist", "setVstrApplist", "onVstrApplistChaged",
            null, null );

// Need to fix
//	GingaModelDefines.SL2_TVAPI_GINGA_ACTION_CTRL_APP=  "tvapi.ginga.action.ctrl_ginga_app "

    // ActionCtrl_ginga_app
            this.registerActionObject(
            GingaModelDefines.SL2_TVAPI_GINGA_ACTION_CTRL_APP,
			[
				{name:"ActionCtrl_ginga_app",method:function(object, cmd, gingaId){
					return object.invoke(cmd, gingaId);
					}}
            ],"null"
			);


}
GingaModel.prototype = new SubModel();
GingaModel.prototype.constructor = GingaModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            GingaModel, GingaModelDefines,
            [
            ] );
}
