/**
 * VolumeModelDefines  class.
 * Contains all defined constants from Y:/values/values-volume.h for
 * internal use.
 */

function VolumeModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
    VolumeModelDefines.SL2_TVAPI_VOLUME_TABLE_MAIN = "tvapi.volume.table.main";
//	VolumeModelDefines.SL2_TVAPI_VOLUME_ACTION= "tvapi.volume.action";
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT = "tvapi.volume.vstr.latest.event";
    // enum or defined is here
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_ID = 0;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_NAME = 1;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_DSCR = 2;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_TYPE = 3;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_PURPOSE = 4;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_STATE = 5;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_SUBSTATE = 6;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_SIZE = 7;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_FREE = 8;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_ATTRS = 9;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_VALID_PURPOSES = 10;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_UNKNOWN = 0;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_FSAL = 1;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_DLNA = 2;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_YOUTUBE = 3;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_VTUNER = 4;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_AUPEO = 5;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_PLAYLIST = 6;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_FAVOURITE = 7;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_CHA0 = 8;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TYPE_PVR0 = 9;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_SYSTEM = 0x00000001;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_SEALED_BOX = 0x00000002;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_EXTERNAL = 0x00000004;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_GENUINE = 0x00000008;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_VIA_NETWORK = 0x00000010;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_VIA_LOGICAL_FS = 0x00000020;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_UPDATE_SOURCE = 0x00000100;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_PVR_ARCHIVE = 0x00000200;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_PVR_TIMESHIFT = 0x00000400;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_MEDIA_SOURCE = 0x000001000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_MEDIA_STORAGE = 0x00002000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_IMAGES = 0x00010000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_MUSIC = 0x00020000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_VIDEOS = 0x00040000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_BROWSABLE = 0x00100000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_SEARCHABLE = 0x00200000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_EXTERNALLY_LAYOUTED = 0x00400000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_PVR_SEARCHABLE = 0x00800000;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_PURPOSE_ALL_CURRENT = 0x00f7373f;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_INVALID = 0;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_DISCONNECTED = 1;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_DISCOVERED = 2;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_REACHABLE = 3;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_LOADING = 4;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_SYNCHRONIZING = 5;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_REJECTED = 6;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_CONNECTED = 7;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_UNLOADING = 8;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_STATE_VALIDATING = 9;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_SUBSTATE_CONTENT_INVALID = 0;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_SUBSTATE_CONTENT_ACCESSIBLE = 1;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_ATTR_READWRITE = 1;
    VolumeModelDefines.SL2_TVAPI_VOLUME_FSAL2_MEDIA_TYPE_HDD = 1;
    VolumeModelDefines.SL2_TVAPI_VOLUME_FSAL2_MEDIA_TYPE_FLASH = 2;
    VolumeModelDefines.SL2_TVAPI_VOLUME_FSAL2_MEDIA_TYPE_ROM = 3;
    VolumeModelDefines.SL2_TVAPI_VOLUME_FSAL2_MEDIA_TYPE_UPNP = 4;
    VolumeModelDefines.SL2_TVAPI_VOLUME_FSAL2_MEDIA_TYPE_RAM = 5;
    VolumeModelDefines.SL2_TVAPI_VOLUME_FSAL2_MEDIA_TYPE_UNKNOWN = 100;
    VolumeModelDefines.SL2_TVAPI_VOLUME_ACTION_CMD_NAME = 0;
    VolumeModelDefines.SL2_TVAPI_VOLUME_ACTION_CMD_VOLID = 1;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_ACTION_UNMOUNT = 1;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_ACTION_FORMAT = 2;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_ACTION_UPDATE_SIZE_INFO = 3;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_ADDED = 1;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_REMOVED = 2;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_SIZE_UPDATE = 3;
    VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_CHANGED = 4;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_INDEX_EVENT_TYPE = 0;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_INDEX_FIELD_ID = 1;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_INDEX_FIELD_NAME = 2;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_INDEX_FIELD_DSCR = 3;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_INDEX_FIELD_TYPE = 4;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_INDEX_FIELD_PURPOSES = 5;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_INDEX_FIELD_VALID_PURPOSES = 6;
    VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT_SIZE = 7;
}
/**
 * VolumeModel class derived from SubModel.
 */
function VolumeModel(parentModel) {
    SubModel.call(this, parentModel, VolumeModelDefines);

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // TableMain
    this.registerTableObject(
        VolumeModelDefines.SL2_TVAPI_VOLUME_TABLE_MAIN,
        "createTableMainIterator");

//Need to fix
//	VolumeModelDefines.SL2_TVAPI_VOLUME_ACTION=  "tvapi.volume.action "

    // Action
//            this.registerActionObject(
//            VolumeModelDefines.SL2_TVAPI_VOLUME_ACTION,
//			[
//				{name:"Action",method:function(object,action,id){
//					return object.invoke(action,id);
//					}},
//                {name:"ActionVolumeList",method:function(object,action,id){
//                    return object.invoke(action,id);
//                }}
//            ],"actionhandler"
//			);

    //   VstrLatestEvent
    this.registerStringVectorObject(
        VolumeModelDefines.SL2_TVAPI_VOLUME_VSTR_LATEST_EVENT,
        "getVstrLatestEvent", "setVstrLatestEvent", "onVstrLatestEventChaged",
        null, null);


}
VolumeModel.prototype = new SubModel();
VolumeModel.prototype.constructor = VolumeModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        VolumeModel, VolumeModelDefines,
        [
        ]);
}
