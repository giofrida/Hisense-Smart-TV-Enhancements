/**
 * Channelsearch_isdbModelDefines  class.
 * Contains all defined constants from C:/Users/haoyunying/Desktop/values/values/values-channelsearch-isdb.h for
 * internal use.
 */

 function Channelsearch_isdbModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_SOURCE= "tvapi.i32.isdb.channel.search.source";
	Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_START= "tvapi.action.isdb.channel.search.start";
	Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_MANUAL_START= "tvapi.action.isdb.channel.search.manual.start";
	Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_STOP= "tvapi.action.isdb.channel.search.stop";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_RUNNING= "tvapi.i32.isdb.channel.search.running";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_PROGRESS= "tvapi.i32.isdb.channel.search.progress";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_DIGIT_SERVICES= "tvapi.i32.isdb.channel.search.found.digit.services";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_ANALOG_SERVICES= "tvapi.i32.isdb.channel.search.found.analog.services";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_RADIO_SERVICES= "tvapi.i32.isdb.channel.search.found.radio.services";
	Channelsearch_isdbModelDefines.SL2_TVAPI_STR_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_NAME= "tvapi.str.isdb.channel.search.found.services.name";
	Channelsearch_isdbModelDefines.SL2_TVAPI_STR_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_NUMBER= "tvapi.str.isdb.channel.search.found.services.number";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_FREQUENCY= "tvapi.i32.isdb.channel.search.found.services.frequency";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_STATE= "tvapi.i32.isdb.channel.search.state";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_BAND_WIDTH= "tvapi.i32.isdb.channel.search.band.width";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_COLOR_SYSTEM= "tvapi.i32.isdb.channel.search.color.system";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_SOUND_SYSTEM= "tvapi.i32.isdb.channel.search.sound.system";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FINE_SCAN_LOW= "tvapi.i32.isdb.channel.search.fine.scan.low";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FINE_SCAN_HIGH= "tvapi.i32.isdb.channel.search.fine.scan.high";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_QAM= "tvapi.i32.isdb.channel.search.found.services.qam";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_SYMBOLRATE= "tvapi.i32.isdb.channel.search.found.services.symbolrate";
	Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_TOTAL_SERVICES= "tvapi.i32.isdb.channel.search.found.total.services";


	 // enum or defined is here



	Channelsearch_isdbModelDefines.SL2_TVAPI_ISDB_CHANNEL_SEARCH_SOURCE_DVBT  =  0;
	Channelsearch_isdbModelDefines.SL2_TVAPI_ISDB_CHANNEL_SEARCH_SOURCE_DVBC  =  1;


	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_STATE_FINISHED  =  0;


	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_COLOR_SYSTEM_ATUO  =  0;
	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_COLOR_SYSTEM_SECAM  =  1;
	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_COLOR_SYSTEM_PALM  =  2;
	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_COLOR_SYSTEM_PALN  =  3;


	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_SOUND_SYSTEM_BG  =  0;
	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_SOUND_SYSTEM_DK  =  1;
	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_SOUND_SYSTEM_L  =  2;
	Channelsearch_isdbModelDefines.ENUM_ISDB_CHANNEL_SEARCH_SOUND_SYSTEM_L1  =  3;
}
/**
 * Channelsearch_isdbModel class derived from SubModel.
 */
function Channelsearch_isdbModel( parentModel ) {
    SubModel.call( this, parentModel, Channelsearch_isdbModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // Source
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_SOURCE,
            "getSource", "setSource", "onSourceChaged", 
            null, null );

// Need to fix
//	Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_START=  "tvapi.action.isdb.channel.search.start "

    // Start
            this.registerActionObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_START,
			[
				{name:"Start",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);

// Need to fix
//	Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_MANUAL_START=  "tvapi.action.isdb.channel.search.manual.start "

    // ManualStart
            this.registerActionObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_MANUAL_START,
			[
				{name:"ManualStart",method:function(object,tvType){
					return object.invoke(tvType);
					}}
            ],"null"
			);

// Need to fix
//	Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_STOP=  "tvapi.action.isdb.channel.search.stop "

    // Stop
            this.registerActionObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_ACTION_ISDB_CHANNEL_SEARCH_STOP,
			[
				{name:"Stop",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);

    // Running
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_RUNNING,
            "getRunning", "setRunning", "onRunningChaged", 
            null, null );

    // Progress
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_PROGRESS,
            "getProgress", "setProgress", "onProgressChaged", 
            null, null );

    // FoundDigitServices
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_DIGIT_SERVICES,
            "getFoundDigitServices", "setFoundDigitServices", "onFoundDigitServicesChaged", 
            null, null );

    // FoundAnalogServices
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_ANALOG_SERVICES,
            "getFoundAnalogServices", "setFoundAnalogServices", "onFoundAnalogServicesChaged", 
            null, null );

    // FoundRadioServices
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_RADIO_SERVICES,
            "getFoundRadioServices", "setFoundRadioServices", "onFoundRadioServicesChaged", 
            null, null );

    // FoundServicesName
            this.registerStringObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_STR_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_NAME,
            "getFoundServicesName", "setFoundServicesName", "onFoundServicesNameChaged",
            null, null );

    // FoundServicesNumber
            this.registerStringObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_STR_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_NUMBER,
            "getFoundServicesNumber", "setFoundServicesNumber", "onFoundServicesNumberChaged",
            null, null );

    // FoundServicesFrequency
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_FREQUENCY,
            "getFoundServicesFrequency", "setFoundServicesFrequency", "onFoundServicesFrequencyChaged", 
            null, null );

    // State
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_STATE,
            "getState", "setState", "onStateChaged", 
            null, null );

    // BandWidth
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_BAND_WIDTH,
            "getBandWidth", "setBandWidth", "onBandWidthChaged", 
            null, null );

    // ColorSystem
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_COLOR_SYSTEM,
            "getColorSystem", "setColorSystem", "onColorSystemChaged", 
            null, null );

    // SoundSystem
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_SOUND_SYSTEM,
            "getSoundSystem", "setSoundSystem", "onSoundSystemChaged", 
            null, null );

    // FineScanLow
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FINE_SCAN_LOW,
            "getFineScanLow", "setFineScanLow", "onFineScanLowChaged", 
            null, null );

    // FineScanHigh
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FINE_SCAN_HIGH,
            "getFineScanHigh", "setFineScanHigh", "onFineScanHighChaged", 
            null, null );

    // FoundServicesQam
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_QAM,
            "getFoundServicesQam", "setFoundServicesQam", "onFoundServicesQamChaged", 
            null, null );

    // FoundServicesSymbolrate
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_SERVICES_SYMBOLRATE,
            "getFoundServicesSymbolrate", "setFoundServicesSymbolrate", "onFoundServicesSymbolrateChaged", 
            null, null );

    // FoundTotalServices
            this.registerIntegerObject(
            Channelsearch_isdbModelDefines.SL2_TVAPI_I32_ISDB_CHANNEL_SEARCH_FOUND_TOTAL_SERVICES,
            "getFoundTotalServices", "setFoundTotalServices", "onFoundTotalServicesChaged", 
            null, null );


}
Channelsearch_isdbModel.prototype = new SubModel();
Channelsearch_isdbModel.prototype.constructor = Channelsearch_isdbModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            Channelsearch_isdbModel, Channelsearch_isdbModelDefines,
            [
            ] );
}
