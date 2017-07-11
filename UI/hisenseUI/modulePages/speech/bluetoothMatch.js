var BluetoothMatchData = {

    bluetoothMatch_tip_start_span_1: {Data: "Pairing the remote control"},
    bluetoothMatch_tip_start_text_1: {Data: "Bluetooth pairing in progress. Please keep the remote control close to the TV set"},

    operateData: {},
    "langData": {
        "Pairing the remote control":[],
        "Bluetooth pairing in progress. Please keep the remote control close to the TV set":[]

    },
    "rewrite": BluetoothMatchRewrite
};
function getBlueToothMatchpageData(page) {
    page.CaE = [
        {
            "id": "bluetoothMatch_tip_start_span_1",
            "description": "当前的比例容器",
            "CaEType": "span",
            "classes": {normal: "bluetooth_tip_speech_span", focus: "bluetooth_tip_speech_span"}

        },
        {
            "id": "bluetoothMatch_tip_start_text_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        }
    ]
    return BluetoothMatchData;
}
function BluetoothMatchRewrite(){

}
function exitBluetoothMatchpage(){

}




