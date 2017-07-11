function getBlueToothResultpageData(page){
    page.CaE= [
        {
            "id": "bluetoothResult_tip_start_span_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "bluetoothResult_tip_start_text_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "bluetoothResult_tip_start_img_1",
            "description": "当前的比例容器",
            "CaEType": "img"
        },
        {
            "id": "bluetoothResult_tip_start_btn_1",
            "description": "Brightnessspan",
            "CaEType": "div",
            "classes": {"normal": "bluetooth_tip_start_btn_class_normal",
                "focus": "bluetooth_tip_start_btn_class_focus", "selected": "bluetooth_tip_start_btn_class_focus"},
            "handler": {
                "aftEnterHandler": "bluetoothResultEnterHandler"
            },
            "nav": {

            }
        }



    ];
    return BlueToothResultData;
}
var BlueToothResultData = {

    bluetoothResult_tip_start_span_1:{Data:"Pairing the remote control"},
    bluetoothResult_tip_start_text_1:{Data:"Remote control pairing is successful!"},
    bluetoothResult_tip_start_btn_1:{Data:"Done"},
    bluetoothResult_tip_start_img_1:{Data:""},
    operateData:{
        successFlag:0,
        bluetoothResult_tip_start_img_1:{Data:"img/speech/matchOn.png"},
        bluetoothResult_tip_start_text_1:"Remote control pairing is successful!"

    },
    "langData":{
        "Pairing the remote control":[],
        "Remote control pairing is successful!":[],
        "Remote control pairing failed. Please try again":[],
        "Done":[]

    } ,
    "rewrite":BlueToothResultRewrite
};
function BlueToothResultRewrite(data){
    data.bluetoothResult_tip_start_text_1.Data = data.operateData.bluetoothResult_tip_start_text_1;
    data.bluetoothResult_tip_start_img_1.Data = data.operateData.bluetoothResult_tip_start_img_1.Data;
}
function BluetoothResultOnClose(){
    BlueToothResultData.operateData.bluetoothResult_tip_start_text_1 = '';
    BlueToothResultData.operateData.bluetoothResult_tip_start_img_1.Data = '';
}
function bluetoothResultEnterHandler(){
    if (hiWebOsFrame.isCurrentModule("bluetooth")) {
        this.page.close();
        this.page.destroy();
        //hiWebOsFrame.blankPage.open();
        //hiWebOsFrame.blankPage.hiFocus();
    }
    else{
        this.page.close();
        this.page.destroy();
    }
    hiWebOsFrame.BluetoothResult_speech_page.close();
    hiWebOsFrame.BluetoothResult_speech_page.destroy();
    var currentArea = hiWebOsFrame.getCurrentArea();
    if(currentArea == "EU"){
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        return false;
    }
    if(BlueToothResultData.operateData.successFlag ==1){
        hiWebOsFrame.createPage("speech_Lan_page", null, null, null, function (page) {
            hiWebOsFrame.speechLan = page;
            page.open();
            page.hiFocus();
        });
    }
    else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
}