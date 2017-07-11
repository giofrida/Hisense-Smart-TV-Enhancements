/**
 * FVPEpgModelDefines  class.
 * Contains all defined constants from C:/Users/ghl/Desktop/values-epg.h for
 * internal use.
 */

function FVPEpgModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    FVPEpgModelDefines.SL2_TVAPI_FVP_EPG = "tvapi.table.fvpepg.main";
    FVPEpgModelDefines.SL2_VSTR_FVP_EPG_PROGRAM_DETAILS = "tvapi.vstr.fvpepg.program.details";

    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_SERVICE_ID = 2000;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_TRANSPORT_STREAM_ID = 2001;

    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_START_TIME_UTC = 2007;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_END_TIME_UTC = 2008;

    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_CHANNEL_LOGO = 2023;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_CONTENT_IMAGE = 2024;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_MAIN_TITLE = 2025;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_SECONDARY_TITLE = 2026;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_RUNNING_TIME = 2027;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_DESCRIPTION = 2028;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_PROGRAM_TYPE = 2029;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_MEDIA_URL = 2030;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_PROGRAM_AVAILABLE_FLAG = 2031;
    FVPEpgModelDefines.TABLE_FIELD_FVP_EPG_PROGRAM_ID = 2032;

}
/**
 * FVPEpgModel class derived from SubModel.
 */
function FVPEpgModel(parentModel) {
    SubModel.call(this, parentModel, FVPEpgModelDefines);

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------
// Need to fix
//	FVPEpgModelDefines.SL2_TVAPI_EPG=  "tvapi.epg "

    // EPG items list
    this.registerTableObject(
        FVPEpgModelDefines.SL2_TVAPI_FVP_EPG,
        "createFVPEpgIterator");


    this.registerStringVectorObject(
            FVPEpgModelDefines.SL2_VSTR_FVP_EPG_PROGRAM_DETAILS,
            "getFEPGDetail", "setFEPGDetail", "onFEPGDetailChanged",
            null, null );

}
FVPEpgModel.prototype = new SubModel();
FVPEpgModel.prototype.constructor = FVPEpgModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    SubModel.registerStaticConstants(
        FVPEpgModel, FVPEpgModelDefines,
        [
            {
                groupPrefix: "TABLE_FIELD_",
                stripPrefix: "TABLE_"
            }
        ]);

}
