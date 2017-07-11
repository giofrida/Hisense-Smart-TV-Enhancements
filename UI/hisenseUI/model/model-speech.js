/**
 * SpeechModelDefines  class.
 * Contains all defined constants from E:/svn_checkout/PlatForm/mtk565x/nuance_prj/jspp/common/include/model/values/values-speech.h for
 * internal use.
 */

 function SpeechModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
    SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_STATE = "tvapi.speech.i32.recogintion.state";
    SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_RESULT = "tvapi.speech.i32.recogintion.result";
    SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_CONN_STATE = "tvapi.speech.i32.recogintion.conn.state";
    SpeechModelDefines.TVAPI_SPEECH_I32_RECORDING_LEVEL = "tvapi.speech.i32.recording.level.value";
    SpeechModelDefines.TVAPI_SPEECH_ACTION_CTRL = "tvapi.speech.action.ctrl";
    SpeechModelDefines.TVAPI_SPEECH_ACTION_SET_SERVICE = "tvapi.speech.action.set.service";
    SpeechModelDefines.TVAPI_SPEECH_ACTION_DEL_SLOT = "tvapi.speech.action.del.slot";
    SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_TYPE = "tvapi.speech.i32.recogintion.type";
    SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_SUBTYPE = "tvapi.speech.i32.recogintion.subtype";
    SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_PARARM_VALUE = "tvapi.speech.i32.recogintion.param.value";
    SpeechModelDefines.TVAPI_SPEECH_STR_RECOG_PARARM_STRING = "tvapi.speech.str.recogintion.param.value";
    SpeechModelDefines.TVAPI_SPEECH_STR_VSTR_SET_SLOT_CHANNELS = "tvapi.speech.vstr.set.slot.channels";
    SpeechModelDefines.TVAPI_SPEECH_STR_VSTR_SET_SLOT_APPLICATIONS = "tvapi.speech.vstr.set.slot.applications";
    SpeechModelDefines.TVAPI_SPEECH_I32_SET_RECOG_LANGUAGE = "tvapi.speech.i32.set.recogintion.language";
    SpeechModelDefines.TVAPI_SPEECH_STR_CONTROL_SPEEAK = "tvapi.speech.str.control.speak";
    SpeechModelDefines.TVAPI_SPEECH_I32_RECOGNITION_ERROR_CODE = "tvapi.speech.i32.recogintion.error.code";


	 // enum or defined is here



	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_INVALID  =  0;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_STARTED  =  1;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_VOICE_DETECTED  =  2;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_SPEECH_DETECTED  =  3;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_STOPPED  =  4;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_FINISHED  =  5;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_RETRY  =  6;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_STATE_COUNT  =  7;


	SpeechModelDefines.TVAPI_SPEECH_RECOG_RESULT_OK  =  0;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_RESULT_CANCELLED  =  1;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_RESULT_NO_RESULT  =  2;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_RESULT_RECOG_ERROR  =  3;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_RESULT_FATAL_ERROR  =  4;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_RESULT_COUNT  =  5;


	SpeechModelDefines.TVAPI_SPEECH_RECOG_CONN_OK  =  0;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_CONN_LOCAL  =  1;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_CONN_FULL  =  3;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_CONN_COUNT  =  4;


	SpeechModelDefines.TVAPI_SPEECH_CTRL_ACTION_TYPE  =  0;
	SpeechModelDefines.TVAPI_SPEECH_CTRL_ACTION_PARAM  =  1;


	SpeechModelDefines.TVAPI_SPEECH_CTRL_ACTION_TYPE_INIT  =  0;
	SpeechModelDefines.TVAPI_SPEECH_CTRL_ACTION_TYPE_START  =  1;
	SpeechModelDefines.TVAPI_SPEECH_CTRL_ACTION_TYPE_CANCEL  =  2;
	SpeechModelDefines.TVAPI_SPEECH_CTRL_ACTION_TYPE_STOP  =  3;
	SpeechModelDefines.TVAPI_SPEECH_CTRL_ACTION_TYPE_EXIT  =  4;


	SpeechModelDefines.TVAPI_SPEECH_RECOG_MODE_ONE_SHOT  =  0;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_MODE_CONTINUOUS  =  1;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_MOD_PROCESS_GATE_COMMAND  =  2;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_MOD_PROCESS_TEXT_COMMAND  =  3;


	SpeechModelDefines.TVAPI_SPEECH_SET_SERVICE_PROVIDER  =  0;
	SpeechModelDefines.TVAPI_SPEECH_SET_SERVICE_POSTAL_CODE  =  1;


	SpeechModelDefines.TVAPI_SPEECH_DYNVOCAB_SLOT_CHANNELS  =  0;
	SpeechModelDefines.TVAPI_SPEECH_DYNVOCAB_SLOT_EVENTS  =  1;
	SpeechModelDefines.TVAPI_SPEECH_DYNVOCAB_SLOT_INPUT_SOURCES  =  2;
	SpeechModelDefines.TVAPI_SPEECH_DYNVOCAB_SLOT_APPLICATIONS  =  3;
	SpeechModelDefines.TVAPI_SPEECH_DYNVOCAB_SLOT_MEDIA_TITLES  =  4;
	SpeechModelDefines.TVAPI_SPEECH_DYNVOCAB_SLOT_CONTACTS  =  5;
	SpeechModelDefines.TVAPI_SPEECH_DYNVOCAB_SLOT_ALL  =  6;


	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_UNKNOWN  =  0;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_SOURCE  =  1;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_VOLUME  =  2;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_CHANNEL  =  3;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_SETTING  =  4;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_APP  =  5;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_PLAYER  =  6;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_SEARCH  =  7;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_MUTE  =  8;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_TYPE_COUNT  =  9;


	SpeechModelDefines.TVAPI_SPEECH_RECOG_SUBTYPE_UNKNOWN  =  0;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_SUBTYPE_VALUE  =  1;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_SUBTYPE_STRING  =  2;
	SpeechModelDefines.TVAPI_SPEECH_RECOG_SUBTYPE_COUNT  =  3;
	SpeechModelDefines.TVAPI_SPEECH_STR_RECOG_PARARM_LENGTH  =  256;


    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_EN_US = 0;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_EN_GB = 1;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_EN_AU = 2;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_FR_FR = 3;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_DE_DE = 4;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_IT_IT = 5;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_PT_BR = 6;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_RU_RU = 7;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_ES_ES = 8;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_ES_MX = 9;
    SpeechModelDefines.TVAPI_SPEECH_RECOG_LANGUAGE_DEF = 10;
}
/**
 * SpeechModel class derived from SubModel.
 */
function SpeechModel( parentModel ) {
    SubModel.call( this, parentModel, SpeechModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // I32RecogintionState
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_STATE,
            "getI32RecogintionState", "setI32RecogintionState", "onI32RecogintionStateChaged", 
            null, null );

    // I32RecogintionResult
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_RESULT,
            "getI32RecogintionResult", "setI32RecogintionResult", "onI32RecogintionResultChaged", 
            null, null );

    // I32RecogintionConnState
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_CONN_STATE,
            "getI32RecogintionConnState", "setI32RecogintionConnState", "onI32RecogintionConnStateChaged", 
            null, null );

    // I32RecordingLevelValue
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_RECORDING_LEVEL,
            "getI32RecordingLevelValue", "setI32RecordingLevelValue", "onI32RecordingLevelValueChaged", 
            null, null );
    // I32RecognitionErrorCode
    this.registerIntegerObject(
        SpeechModelDefines.TVAPI_SPEECH_I32_RECOGNITION_ERROR_CODE,
        "getI32RecognitionErrorCode", "setI32RecognitionErrorCode", "onI32RecognitionErrorCode",
        null, null);

// Need to fix
//	SpeechModelDefines.TVAPI_SPEECH_ACTION_CTRL=  "tvapi.speech.action.ctrl "

    // ActionCtrl
            this.registerActionObject(
            SpeechModelDefines.TVAPI_SPEECH_ACTION_CTRL,
			[
				{name:"ActionCtrl",method:function(object,type,param){
					return object.invoke(type,param);
					}}
            ],"null"
			);

// Need to fix
//	SpeechModelDefines.TVAPI_SPEECH_ACTION_SET_SERVICE=  "tvapi.speech.action.set.service "

    // ActionSetService
            this.registerActionObject(
            SpeechModelDefines.TVAPI_SPEECH_ACTION_SET_SERVICE,
			[
				{name:"ActionSetService",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);

// Need to fix
//	SpeechModelDefines.TVAPI_SPEECH_ACTION_DEL_SLOT=  "tvapi.speech.action.del.slot "

    // ActionDelSlot
            this.registerActionObject(
            SpeechModelDefines.TVAPI_SPEECH_ACTION_DEL_SLOT,
			[
				{name:"ActionDelSlot",method:function(object){
					return object.invoke();
					}}
            ],"null"
			);

    // I32RecogintionType
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_TYPE,
            "getI32RecogintionType", "setI32RecogintionType", "onI32RecogintionTypeChaged", 
            null, null );

    // I32RecogintionSubtype
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_SUBTYPE,
            "getI32RecogintionSubtype", "setI32RecogintionSubtype", "onI32RecogintionSubtypeChaged", 
            null, null );

    // I32RecogintionParamValue
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_RECOG_PARARM_VALUE,
            "getI32RecogintionParamValue", "setI32RecogintionParamValue", "onI32RecogintionParamValueChaged", 
            null, null );

    // StrRecogintionParamValue
            this.registerStringObject(
            SpeechModelDefines.TVAPI_SPEECH_STR_RECOG_PARARM_STRING,
            "getStrRecogintionParamValue", "setStrRecogintionParamValue", "onStrRecogintionParamValueChaged",
            null, null );

    // VstrSetSlotChannels
            this.registerStringVectorObject(
            SpeechModelDefines.TVAPI_SPEECH_STR_VSTR_SET_SLOT_CHANNELS,
            "getVstrSetSlotChannels", "setVstrSetSlotChannels", "onVstrSetSlotChannelsChaged",
            null, null );

    // VstrSetSlotApplications
            this.registerStringVectorObject(
            SpeechModelDefines.TVAPI_SPEECH_STR_VSTR_SET_SLOT_APPLICATIONS,
            "getVstrSetSlotApplications", "setVstrSetSlotApplications", "onVstrSetSlotApplicationsChaged",
            null, null );

    // I32SetRecogintionLanguage
            this.registerIntegerObject(
            SpeechModelDefines.TVAPI_SPEECH_I32_SET_RECOG_LANGUAGE,
            "getI32SetRecogintionLanguage", "setI32SetRecogintionLanguage", "onI32SetRecogintionLanguageChaged", 
            null, null );

    // StrControlSpeak
            this.registerStringObject(
            SpeechModelDefines.TVAPI_SPEECH_STR_CONTROL_SPEEAK,
            "getStrControlSpeak", "setStrControlSpeak", "onStrControlSpeakChaged",
            null, null );


}
SpeechModel.prototype = new SubModel();
SpeechModel.prototype.constructor = SpeechModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            SpeechModel, SpeechModelDefines,
            [
            ] );
}
