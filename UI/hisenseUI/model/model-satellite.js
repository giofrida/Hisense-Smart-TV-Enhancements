/**
 * SatelliteModelDefines  class.
 * Contains all defined constants from C:/Users/haoyunying/Desktop/values/values/values-satellite.h for
 * internal use.
 */

 function SatelliteModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_EXIST= "tvapi.i32.dvb.satellite.exist";
	SatelliteModelDefines.SL2_TVAPI_VSTR_DVB_SATELLITE_NAME_LIST= "tvapi.vstr.dvb.satellite.name.list";
	SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_ID_LIST= "tvapi.vi32.dvb.satellite.id.list";
	SatelliteModelDefines.SL2_TVAPI_VSTR_DVB_SATELLITE_SELECTED_NAME_LIST= "tvapi.vstr.dvb.satellite.selected.name.list";
	SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_SELECTED_ID_LIST= "tvapi.vi32.dvb.satellite.selected.id.list";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_1_ID= "tvapi.i32.dvb.satellite.selected.1.id";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_2_ID= "tvapi.i32.dvb.satellite.selected.2.id";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_3_ID= "tvapi.i32.dvb.satellite.selected.3.id";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_4_ID= "tvapi.i32.dvb.satellite.selected.4.id";
	SatelliteModelDefines.SL2_TVAPI_STR_DVB_SATELLITE_SEARCH_NAME= "tvapi.str.dvb.satellite.search.name";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_CURRENT_SEARCH_ID= "tvapi.i32.dvb.satellite.search.id";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_INSTALLATION= "tvapi.i32.dvb.satellite.installation";
	SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_BAND_LOW_LIST= "tvapi.vi32.dvb.satellite.band.low.list";
	SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_BAND_LOW= "tvapi.action.dvb.satellite.band.low";
	SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_BAND_HIGH_LIST= "tvapi.vi32.dvb.satellite.band.high.list";
	SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_BAND_HIGH= "tvapi.i32.action.satellite.band.high";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_LNB_POWER= "tvapi.i32.dvb.satellite.lnb.power";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SEARCH_MODE= "tvapi.i32.dvb.satellite.search.mode";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_22K_SWITCH= "tvapi.i32.dvb.satellite.22k.switch";
	SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_UNICABLE_BAND_LIST= "tvapi.vi32.dvb.satellite.unicable.band.list";
	SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_UNICABLE_BAND_FREQUENCY_LIST= "tvapi.vi32.dvb.satellite.unicable.band.frequency.list";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_UNICABLE_BAND= "tvapi.i32.dvb.satellite.unicable.band";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_UNICABLE_BAND_FREQUENCY= "tvapi.i32.dvb.satellite.unicable.band.frequency";
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_POLARIZATION= "tvapi.i32.dvb.satellite.polarization";
	SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_LOCK_FREQUNCY= "tvapi.action.dvb.satellite.lock.frequncy";


	 // enum or defined is here



	SatelliteModelDefines.SL2_TVAPI_DVB_SATELLITE_INSTALLATION_SINGLE  =  0;
	SatelliteModelDefines.SL2_TVAPI_DVB_SATELLITE_INSTALLATION_TONEBURST  =  1;
	SatelliteModelDefines.SL2_TVAPI_DVB_SATELLITE_INSTALLATION_DISEQC  =  2;
	SatelliteModelDefines.SL2_TVAPI_DVB_SATELLITE_INSTALLATION_UNICABLE  =  3;


	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SEARCH_MODE_FULL  =  0;
	SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SEARCH_MODE_NETWORK  =  1;
}
/**
 * SatelliteModel class derived from SubModel.
 */
function SatelliteModel( parentModel ) {
    SubModel.call( this, parentModel, SatelliteModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // Exist
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_EXIST,
            "getExist", "setExist", "onExistChaged", 
            null, null );

    // NameList
            this.registerStringVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VSTR_DVB_SATELLITE_NAME_LIST,
            "getNameList", "setNameList", "onNameListChaged",
            null, null );

    // IdList
            this.registerIntegerVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_ID_LIST,
            "getIdList", "setIdList", "onIdListChaged",
            null, null );

    // SelectedNameList
            this.registerStringVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VSTR_DVB_SATELLITE_SELECTED_NAME_LIST,
            "getSelectedNameList", "setSelectedNameList", "onSelectedNameListChaged",
            null, null );

    // SelectedIdList
            this.registerIntegerVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_SELECTED_ID_LIST,
            "getSelectedIdList", "setSelectedIdList", "onSelectedIdListChaged",
            null, null );

    // Selected1Id
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_1_ID,
            "getSelected1Id", "setSelected1Id", "onSelected1IdChaged", 
            null, null );

    // Selected2Id
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_2_ID,
            "getSelected2Id", "setSelected2Id", "onSelected2IdChaged", 
            null, null );

    // Selected3Id
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_3_ID,
            "getSelected3Id", "setSelected3Id", "onSelected3IdChaged", 
            null, null );

    // Selected4Id
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SELECTED_4_ID,
            "getSelected4Id", "setSelected4Id", "onSelected4IdChaged", 
            null, null );

    // SearchName
            this.registerStringObject(
            SatelliteModelDefines.SL2_TVAPI_STR_DVB_SATELLITE_SEARCH_NAME,
            "getSearchName", "setSearchName", "onSearchNameChaged",
            null, null );

    // SearchId
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_CURRENT_SEARCH_ID,
            "getSearchId", "setSearchId", "onSearchIdChaged", 
            null, null );

    // Installation
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_INSTALLATION,
            "getInstallation", "setInstallation", "onInstallationChaged", 
            null, null );

    // BandLowList
            this.registerIntegerVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_BAND_LOW_LIST,
            "getBandLowList", "setBandLowList", "onBandLowListChaged",
            null, null );

// Need to fix
//	SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_BAND_LOW=  "tvapi.action.dvb.satellite.band.low "

    // BandLow
            this.registerActionObject(
            SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_BAND_LOW,
			[
				{name:"BandLow",method:function(object,satelliteId,lnbLow){
					return object.invoke(satelliteId,lnbLow);
					}}
            ],"null"
			);

    // BandHighList
            this.registerIntegerVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_BAND_HIGH_LIST,
            "getBandHighList", "setBandHighList", "onBandHighListChaged",
            null, null );

// Need to fix
//	SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_BAND_HIGH=  "tvapi.i32.action.satellite.band.high "

    // 
            this.registerActionObject(
            SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_BAND_HIGH,
			[
				{name:"BandHigh",method:function(object,satelliteId,lnbHigh){
					return object.invoke(satelliteId,lnbHigh);
					}}
            ],"null"
			);

    // LnbPower
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_LNB_POWER,
            "getLnbPower", "setLnbPower", "onLnbPowerChaged", 
            null, null );

    // SearchMode
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_SEARCH_MODE,
            "getSearchMode", "setSearchMode", "onSearchModeChaged", 
            null, null );

    // 22kSwitch
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_22K_SWITCH,
            "get22kSwitch", "set22kSwitch", "on22kSwitchChaged", 
            null, null );

    // UnicableBandList
            this.registerIntegerVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_UNICABLE_BAND_LIST,
            "getUnicableBandList", "setUnicableBandList", "onUnicableBandListChaged",
            null, null );

    // UnicableBandFrequencyList
            this.registerIntegerVectorObject(
            SatelliteModelDefines.SL2_TVAPI_VI32_DVB_SATELLITE_UNICABLE_BAND_FREQUENCY_LIST,
            "getUnicableBandFrequencyList", "setUnicableBandFrequencyList", "onUnicableBandFrequencyListChaged",
            null, null );

    // UnicableBand
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_UNICABLE_BAND,
            "getUnicableBand", "setUnicableBand", "onUnicableBandChaged", 
            null, null );

    // UnicableBandFrequency
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_UNICABLE_BAND_FREQUENCY,
            "getUnicableBandFrequency", "setUnicableBandFrequency", "onUnicableBandFrequencyChaged", 
            null, null );

    // Polarization
            this.registerIntegerObject(
            SatelliteModelDefines.SL2_TVAPI_I32_DVB_SATELLITE_POLARIZATION,
            "getPolarization", "setPolarization", "onPolarizationChaged", 
            null, null );

    //SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_LOCK_FREQUNCY= "tvapi.action.dvb.satellite.lock.frequncy"
    this.registerActionObject(
        SatelliteModelDefines.SL2_TVAPI_ACTION_DVB_SATELLITE_LOCK_FREQUNCY,
        [
            { name: "LockFrequency", method: function( object,satelliteId) {
                return object.invoke(satelliteId);
            }
            }
        ],
        "satelliteLockFrequencyCallBack");
}
SatelliteModel.prototype = new SubModel();
SatelliteModel.prototype.constructor = SatelliteModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            SatelliteModel, SatelliteModelDefines,
            [
            ] );
}
