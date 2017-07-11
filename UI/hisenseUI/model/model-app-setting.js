/**
 * App_settingModelDefines  class.
 * Contains all defined constants from Z:/MT5655/vm_linux/third_party/source/browser/plugins/jspp/common/include/model/values/values-app-setting.h for
 * internal use.
 */

 function App_settingModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	App_settingModelDefines.SL2_TVAPI_STR_APP_SETTING_ESN= "tvapi.str.app.setting.esn";
	App_settingModelDefines.SL2_TVAPI_I32_APP_SETTING_NETFLIX_STATE= "tvapi.i32.app.setting.netflix.state";
	App_settingModelDefines.SL2_TVAPI_I32_APP_SETTING_VUDU_STATE= "tvapi.i32.app.setting.vudu.state";
	App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_NETFLIX_DEACTIVE= "tvapi.action.app.setting.netflix.deactive";
	App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_VUDU_DEACTIVE= "tvapi.action.app.setting.vudu.deactive";


	 // enum or defined is here

}
/**
 * App_settingModel class derived from SubModel.
 */
function App_settingModel( parentModel ) {
    SubModel.call( this, parentModel, App_settingModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // Esn
            this.registerStringObject(
            App_settingModelDefines.SL2_TVAPI_STR_APP_SETTING_ESN,
            "getEsn", "setEsn", "onEsnChaged",
            null, null );

    // NetflixState
//              this.registerIntegerObject(
//              App_settingModelDefines.SL2_TVAPI_I32_APP_SETTING_NETFLIX_STATE,
//              "getNetflixState", "setNetflixState", "onNetflixStateChaged",
//              null, null );

    // VuduState
//              this.registerIntegerObject(
//              App_settingModelDefines.SL2_TVAPI_I32_APP_SETTING_VUDU_STATE,
//              "getVuduState", "setVuduState", "onVuduStateChaged",
//              null, null );
// Need to fix
//	App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_NETFLIX_DEACTIVE=  "tvapi.action.app.setting.netflix.deactive "

    // NetflixDeactive
            this.registerActionObject(
            App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_NETFLIX_DEACTIVE,
			[
				{name:"NetflixDeactive",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);

// Need to fix
//	App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_VUDU_DEACTIVE=  "tvapi.action.app.setting.vudu.deactive "

    // VuduDeactive
            this.registerActionObject(
            App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_VUDU_DEACTIVE,
			[
				{name:"VuduDeactive",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);


}
App_settingModel.prototype = new SubModel();
App_settingModel.prototype.constructor = App_settingModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            App_settingModel, App_settingModelDefines,
            [
            ] );
}
