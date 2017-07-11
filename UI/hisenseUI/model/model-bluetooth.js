/**
 * BluetoothModelDefines  class.
 * Contains all defined constants from X:/MT5657/vm_linux/third_party/source/browser/plugins/jspp/common/include/model/values/values-bluetooth.h for
 * internal use.
 */

 function BluetoothModelDefines() {
 }
 {
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
 	BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_CONNECT= "tvapi.i32.bluetooth.devices.connect";


	 // enum or defined is here



	BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_CMD_AUTO_CONNECT  =  0;
	BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_CMD_STOP_CONNECT  =  1;
	BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_CMD_CLEAR  =  2;


    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_CONNECT_FAIL = 0;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_CONNECT_OK = 1;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_DISCOVERY = 2;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_3D_CONNECT = 3;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_LOADING = 4;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_SHOW_UI = 5;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_START_VOICE = 6;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_CLEAR_LOW_BA = 7;

}
/**
 * BluetoothModel class derived from SubModel.
 */
function BluetoothModel( parentModel ) {
    SubModel.call( this, parentModel, BluetoothModelDefines );

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // DevicesConnect
            this.registerIntegerObject(
            BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_CONNECT,
            "getDevicesConnect", "setDevicesConnect", "onDevicesConnectChaged", 
            null, null );


}
BluetoothModel.prototype = new SubModel();
BluetoothModel.prototype.constructor = BluetoothModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            BluetoothModel, BluetoothModelDefines,
            [
            ] );
}
