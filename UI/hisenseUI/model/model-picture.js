/**
 * Created by Brad on 14-6-28.
 */
function PictureModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    //PictureModelDefines.SL2_TVAPI_PICTURE_I32_DISPLAY_SIZE = "tvapi.picture.display.size";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLIDESHOW_SPEED = "tvapi.picture.slideshow.speed";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_CROSSOVER = "tvapi.picture.crossover";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_AUTOROTATE = "tvapi.picture.autorotate";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_MODE = "tvapi.picture.mode";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SORT = "tvapi.picture.sort";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_RUNNING = "tvapi.picture.running";
    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SET_RUNNING = "tvapi.picture.action.set.running";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT1 = "tvapi.picture.vstr.slot1";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT2 = "tvapi.picture.vstr.slot2";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_HTML5_PLAY = "tvapi.picture.vstr.html5.play";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_ERROR_CODE = "tvapi.picture.slot.error.code";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_STATE = "tvapi.picture.slot.state";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT1_PROGRESS = "tvapi.picture.i32.slot1.progress";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT2_PROGRESS = "tvapi.picture.i32.slot2.progress";
    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_COMMAND = "tvapi.picture.action.command";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_DISPLAY_SIZE = "tvapi.picture.display.size";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_HTML5_PLAY = "tvapi.picture.vstr.html5.play";
//    PictureModelDefines.SL2_TVAPI_PICTURE_I32_RUNNING = "tvapi.picture.picture.running";
//    //PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SETRUNNING = "tvapi.picture.action.set.runing";
//    // PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_ERROR_CODE = "tvapi.picture.slot.error.code";
//    // PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_STATE = "tvapi.picture.slot.state";
//    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SET_RUNNING = "tvapi.picture.action.set.running";
//    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_COMMAND = "tvapi.picture.action.command";
    // PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT2 = "tvapi.picture.vstr.slot2";
    //PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT1 = "tvapi.picture.vstr.slot1";
    PictureModelDefines.SL2_TVAPI_PICTURE_DLNA_I32_RUNNING = "tvapi.picture.dlna.running";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_CLOSE="tvapi.picture.i32.slot.close";
    // enum or defined is here

}
/**
 * PictureModel class derived from SubModel.
 */
function PictureModel(parentModel) {
    SubModel.call(this, parentModel, PictureModelDefines);


    // VstrHTML5Play
    this.registerStringVectorObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_HTML5_PLAY,
        "getVstrHTML5Play", "setVstrHTML5Play", "onVstrHTML5PlayChaged",
        null, null);
    this.registerStringVectorObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT2,
        "getSlot2", "setSlot2", "onSlot2Changed",
        null, null);
    this.registerStringVectorObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT1,
        "getSlot1", "setSlot1", "onSlot1Changed",
        null, null);

    this.registerIntegerObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_I32_RUNNING,
        "getPictureRunning", "setPictureRunning", "onPictureRunningchanged", null, null
    );
    this.registerIntegerObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_I32_DISPLAY_SIZE,
        "getPictureSize", "setPictureSize", "onPictureSizechanged", null, null
    );
    this.registerIntegerObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_DLNA_I32_RUNNING,
        "getDLNAPictureRunning", "setDLNAPictureRunning", "onDLNAPictureRunningchanged", null, null
    );
    this.registerIntegerObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT1_PROGRESS,
        "getSLOT1Progress", "setSLOT1Progress", "onSLOT1Progresschanged", null, null
    );
    this.registerIntegerObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT2_PROGRESS,
        "getSLOT2Progress", "setSLOT2Progress", "onSLOT2Progresschanged", null, null
    );
    this.registerIntegerObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_CLOSE,
        "getSLOTClose", "setSLOTClose", "onSLOTClosechanged", null, null
    );
    this.registerActionObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SET_RUNNING,
        [
            { name: "startPic", method: function (object) {
                return object.invoke("1");
            }},
            { name: "stopPic", method: function (object) {
                return object.invoke("0");
            }},
            { name: "decodePic", method: function (object) {
                return object.invoke("2");
            }}
        ],
        "onPicRuningResult");
    this.registerActionObject(
        PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_COMMAND,
        [
            { name: "setPicUrl1", method: function (object, url) {
                return object.invoke(1, "0", url);
            }},
            { name: "setPicUrl2", method: function (object, url) {
                return object.invoke(1, "1", url);
            } },
            { name: "playSlot1", method: function (object) {
                return object.invoke(4, "0");
            } },
            { name: "playSlot2", method: function (object) {
                return object.invoke(4, "1");
            } },
            { name: "rotateSlot1", method: function (object, degree) {
                return object.invoke(3, "0", degree);
            } },
            { name: "rotateSlot2", method: function (object, degree) {
                return object.invoke(3, "1", degree);
            } }
        ],
        "onPicResult");


}
PictureModel.prototype = new SubModel();
PictureModel.prototype.constructor = PictureModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        PictureModel, PictureModelDefines,
        [
        ]);
}
