/**
 * HotelModelDefines  class.
 * Contains all defined constants from D:/Users/values-hotel.h for
 * internal use.
 */

function HotelModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_HOTEL_MODE = "tvapi.i32.hotel.hotel.mode";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_KEYBOARD_LOCK = "tvapi.i32.hotel.keyboard.lock";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_SEARCH_LOCK = "tvapi.i32.hotel.search.lock";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_SUBMENU_LOCK = "tvapi.i32.hotel.submenu.lock";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_AUTO_SLEEP = "tvapi.i32.hotel.auto.sleep";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_USER_SETTING_SAVE = "tvapi.i32.hotel.user.setting.save";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_MAX_VOLUME = "tvapi.i32.hotel.max.volume";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_MIN_VOLUME = "tvapi.i32.hotel.min.volume";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_POWER_ON_VOLUME = "tvapi.i32.hotel.power.on.volume";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE = "tvapi.i32.hotel.on.source";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_POWER_ON_MODE = "tvapi.i32.hotel.power.on.mode";
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_LOGO = "tvapi.i32.hotel.logo";
    HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_COPY_TO_USB = "tvapi.action.hotel.copy.to.usb";
    HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_RECOVER_FROM_USB = "tvapi.action.hotel.recover.from.usb";
    HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_LOCK_INPUT = "tvapi.action.hotel.Lock.input";
    HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_ON_CHANNEL = "tvapi.action.hotel.on.channel";

    // enum or defined is here


    HotelModelDefines.SL2_TVAPI_HOTEL_MAX_VOLUME_MIN = 0;
    HotelModelDefines.SL2_TVAPI_HOTEL_MAX_VOLUME_MAX = 100;
    HotelModelDefines.SL2_TVAPI_HOTEL_MAX_VOLUME_DEFAULT = 100;


    HotelModelDefines.SL2_TVAPI_HOTEL_MIN_VOLUME_MIN = 0;
    HotelModelDefines.SL2_TVAPI_HOTEL_MIN_VOLUME_MAX = 100;


    HotelModelDefines.SL2_TVAPI_HOTEL_MIN_VOLUME_DEFAULT = 0;


    HotelModelDefines.SL2_TVAPI_HOTEL_POWER_ON_VOLUME_MIN = 0;
    HotelModelDefines.SL2_TVAPI_HOTEL_POWER_ON_VOLUME_MAX = 100;


    HotelModelDefines.SL2_TVAPI_HOTEL_POWER_ON_VOLUME_DEFAULT = 0;


    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_TV = 0;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_AV = 1;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_COMPONENT = 2;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_HDMI1 = 3;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_HDMI2 = 4;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_HDMI3 = 5;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_HDMI4 = 6;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE_SAVE = 7;




    HotelModelDefines.SL2_TVAPI_I32_HOTEL_POWER_ON_MODE_OFF = 0;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_POWER_ON_MODE_ON = 1;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_POWER_ON_MODE_SAVE = 2;


    HotelModelDefines.SL2_TVAPI_I32_HOTEL_LOGO_OFF = 0;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_LOGO_HISENSE = 1;
    HotelModelDefines.SL2_TVAPI_I32_HOTEL_LOGO_WELCOME = 2;
}
/**
 * HotelModel class derived from SubModel.
 */
function HotelModel(parentModel) {
    SubModel.call(this, parentModel, HotelModelDefines);

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // HotelMode
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_HOTEL_MODE,
        "getHotelMode", "setHotelMode", "onHotelModeChaged",
        null, null);

    // KeyboardLock
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_KEYBOARD_LOCK,
        "getKeyboardLock", "setKeyboardLock", "onKeyboardLockChaged",
        null, null);

    // SearchLock
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_SEARCH_LOCK,
        "getSearchLock", "setSearchLock", "onSearchLockChaged",
        null, null);

    // SubmenuLock
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_SUBMENU_LOCK,
        "getSubmenuLock", "setSubmenuLock", "onSubmenuLockChaged",
        null, null);

    // AutoSleep
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_AUTO_SLEEP,
        "getAutoSleep", "setAutoSleep", "onAutoSleepChaged",
        null, null);

    // UserSettingSave
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_USER_SETTING_SAVE,
        "getUserSettingSave", "setUserSettingSave", "onUserSettingSaveChaged",
        null, null);

    // MaxVolume
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_MAX_VOLUME,
        "getMaxVolume", "setMaxVolume", "onMaxVolumeChaged",
        null, null);

    // MinVolume
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_MIN_VOLUME,
        "getMinVolume", "setMinVolume", "onMinVolumeChaged",
        null, null);

    // PowerOnVolume
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_POWER_ON_VOLUME,
        "getPowerOnVolume", "setPowerOnVolume", "onPowerOnVolumeChaged",
        null, null);

    // OnSource
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_ON_SOURCE,
        "getOnSource", "setOnSource", "onOnSourceChaged",
        null, null);


    // PowerOnMode
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_POWER_ON_MODE,
        "getPowerOnMode", "setPowerOnMode", "onPowerOnModeChaged",
        null, null);

    // Logo
    this.registerIntegerObject(
        HotelModelDefines.SL2_TVAPI_I32_HOTEL_LOGO,
        "getLogo", "setLogo", "onLogoChaged",
        null, null);

// Need to fix
//	HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_COPY_TO_USB=  "tvapi.action.hotel.copy.to.usb "

    //   CopyToUsb
    this.registerActionObject(
        HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_COPY_TO_USB,
        [
            {
                name: "CopyToUsb", method: function(object, path) {
                return object.invoke(path);
            }
            }
        ], "CopyToUsbResult"
    );

// Need to fix
//	HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_RECOVER_FROM_USB=  "tvapi.action.hotel.recover.from.usb "

    // RecoverFromUsb
    this.registerActionObject(
        HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_RECOVER_FROM_USB,
        [
            {
                name: "RecoverFromUsb", method: function(object, path) {
                return object.invoke(path);
            }
            }
        ], "RecoverToUsbResult"
    );

    // Hotel input Lock
    this.registerActionObject(
        HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_LOCK_INPUT,
        [
            {
                name: "HotelLockInput", method: function(object, id, lock) {
                return object.invoke(id, lock);
            }
            }
        ], ""
    );

    this.registerActionObject(
        HotelModelDefines.SL2_TVAPI_ACTION_HOTEL_ON_CHANNEL,
        [{
            name: "hotelOnChannel", method: function(object, listStr, channelId,flag) {
                return object.invoke(listStr, channelId,flag);
            }
        }], "")

}
HotelModel.prototype = new SubModel();
HotelModel.prototype.constructor = HotelModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        HotelModel, HotelModelDefines,
        []);
}
