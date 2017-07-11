/**
 * UsbModelDefines  class.
 * Contains all defined constants from Y:/values/values-volume.h for
 * internal use.
 */

function UsbModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
    UsbModelDefines.SL2_TVAPI_USB_TABLE_MAIN = "tvapi.usb.table.main";
    UsbModelDefines.SL2_TVAPI_USB_ACTION_DELETE_PVR = "tvapi.usb.action.delete.pvr";
    UsbModelDefines.SL2_TVAPI_USB_VSTR_LATEST_EVENT = "tvapi.vstr.usb.latest.event";

    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH = 0;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE = 1;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR = 2;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_NONE = 0;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PHOTO = 1;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO = 2;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_MUSIC = 3;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR = 4;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_ALL = 5;

    // enum or defined is here

}
/**
 * UsbModel class derived from SubModel.
 */
function UsbModel(parentModel) {
    SubModel.call(this, parentModel, UsbModelDefines);

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // TableMain
    this.registerTableObject(
        UsbModelDefines.SL2_TVAPI_USB_TABLE_MAIN,
        "creatUSBTableMainIterator");

//Need to fix


    // Action
    this.registerActionObject(
        UsbModelDefines.SL2_TVAPI_USB_ACTION_DELETE_PVR,
        [
            {name: "deletePVR", method: function (object, url) {
                return object.invoke(url);
            }}
        ], "deletePVRHandler"
    );

    // VstrLatestEvent
    this.registerStringVectorObject(
        UsbModelDefines.SL2_TVAPI_USB_VSTR_LATEST_EVENT,
        "getVstrLatestEvent", "setVstrLatestEvent", "onVstrLatestEventChaged",
        null, null);


}
UsbModel.prototype = new SubModel();
UsbModel.prototype.constructor = UsbModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        UsbModel, UsbModelDefines,
        [
        ]);
}
