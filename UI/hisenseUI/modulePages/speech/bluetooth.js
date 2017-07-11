var BlueToothPageData = {

    bluetooth_tip_start_span_1:{Data:"Pairing the remote control"},
    bluetooth_tip_start_text_1:{Data:"Keep the remote control close to the TV set, press and hold the blue button until the red light on the remote control remains lit, and wait until the remote pairing is complete"},
    bluetooth_tip_start_btn_1:{Data:"Cancel"},
    operateData:{



    },
    "langData":{
        "Pairing the remote control":["Pairing the remote control"],
        "Keep the remote control close to the TV set, press and hold the blue button until the red light on the remote control remains lit, and wait until the remote pairing is complete":[],
        "Cancel":[]


    } ,
    "rewrite":BlueToothRewrite
};


function getBlueToothpageData(page){
    page.CaE = [
        {
            "id": "bluetooth_tip_start_span_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "bluetooth_tip_start_text_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "bluetooth_tip_start_btn_1",
            "description": "Brightnessspan",
            "CaEType": "div",
            "classes": {"normal": "bluetooth_tip_start_btn_class_normal",
                "focus": "bluetooth_tip_start_btn_class_focus", "selected": "bluetooth_tip_start_btn_class_focus"},
            "handler": {
                "aftEnterHandler": "bluetoothEnterHandler"
            },
            "nav": {

            }
        }



    ] ;

    return BlueToothPageData;
}



function BlueToothRewrite(pageData) {

}
function bluetoothEnterHandler(){
    if (hiWebOsFrame.isCurrentModule("bluetooth")) {
        this.page.close();
        this.page.destroy();
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
    }
    else{
        this.page.close();
        this.page.destroy();
    }
}
function exitBluetoothpage(){
    bluetoothEnterHandler();
}
function BluetoothOnClose(){
    try{
        model.bluetooth.setDevicesConnect(1);
    }
    catch(ex){
        debugE(ex);
    }

}


