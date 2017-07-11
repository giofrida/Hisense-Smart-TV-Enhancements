/**
 * Mheg5ModelDefines  class.
 * Contains all defined constants from C:/Users/ghl/Desktop/values-mheg5.h for
 * internal use.
 */

 function Mheg5ModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	Mheg5ModelDefines.SL2_TVAPI_MHEG5_I32_STATUS= "tvapi.mheg5.i32.status";
	Mheg5ModelDefines.SL2_TVAPI_MHEG5_STR_PFG_INFO= "tvapi.mheg5.str.pfginfo";
	Mheg5ModelDefines.SL2_TVAPI_MHEG5_I32_INTERNAL_SCRN= "tvapi.mheg5.i32.internal_scrn";
	Mheg5ModelDefines.SL2_TVAPI_MHEG5_ACTION_SET_PFG_RESULT= "tvapi.mheg5.action.set.pfgresult";


	 // enum or defined is here



	Mheg5ModelDefines.MHEG5_NFY_MSG_NONE  =  0;
}
/**
 * Mheg5Model class derived from SubModel.
 */
function Mheg5Model( parentModel ) {
    SubModel.call( this, parentModel, Mheg5ModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // I32Status
              this.registerIntegerObject(
              Mheg5ModelDefines.SL2_TVAPI_MHEG5_I32_STATUS,
              "getI32Status", "setI32Status", "onI32StatusChaged",
              null, null );

    // StrPfginfo
              this.registerStringObject(
              Mheg5ModelDefines.SL2_TVAPI_MHEG5_STR_PFG_INFO,
              "getStrPfginfo", "setStrPfginfo", "onStrPfginfoChaged",
              null, null );

    // I32Internal_scrn
              this.registerIntegerObject(
              Mheg5ModelDefines.SL2_TVAPI_MHEG5_I32_INTERNAL_SCRN,
              "getI32Internal_scrn", "setI32Internal_scrn", "onI32Internal_scrnChaged",
              null, null );

// Need to fix
//	Mheg5ModelDefines.SL2_TVAPI_MHEG5_ACTION_SET_PFG_RESULT=  "tvapi.mheg5.action.set.pfgresult "

    // ActionSetPfgresult
              this.registerActionObject(
              Mheg5ModelDefines.SL2_TVAPI_MHEG5_ACTION_SET_PFG_RESULT,
			  [
			  	{name:"ActionSetPfgresult",method:function(object, result){
			  		return object.invoke(result);
			  		}}
              ],"null"
			  );


}
Mheg5Model.prototype = new SubModel();
Mheg5Model.prototype.constructor = Mheg5Model;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            Mheg5Model, Mheg5ModelDefines,
            [
            ] );
}
