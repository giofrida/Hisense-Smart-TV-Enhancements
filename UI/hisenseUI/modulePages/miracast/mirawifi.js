var miracastWifiData = {
    setting_Mira_wifi_span_1: {Data: "Anyview Cast"},
    setting_Mira_wifi_text_1: {Data: "In order to use this application, a Wi-Fi connection is required. Go to Network Settings to connect to Wi-Fi."},
    setting_Mira_wifi_btn_1: {Data: "OK"},
    "langData": {
        "In order to use this application, a Wi-Fi connection is required. Go to Network Settings to connect to Wi-Fi.":[],
        "OK":["OK"],
        "Cancel":["Cancel"]

    },
    "operateData": {

    },
    "rewrite": miracastWifirewrite
}
function miracastWifirewrite(){

}
function getmiraWifiPageData(page){
    page.CaE = [
        {
            "id": "setting_Mira_wifi_span_1",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "setting_Mira_exit_span", "focus": "setting_Mira_exit_span", "selected": "setting_Mira_exit_span"}
        },
        {
            "id": "setting_Mira_wifi_text_1",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "setting_Mira_exit_text", "focus": "setting_Mira_exit_text", "selected": "setting_Mira_exit_text"}
        },
        {
            "id": "setting_Mira_wifi_btn_1",
            "description": "Brightnessspan",
            "CaEType": "span",
            "classes": {"normal": "setting_Mirawifi_btn_class_normal",
                "focus": "setting_Mirawifi_btn_class_focus", "selected": "setting_Mirawifi_btn_class_focus"},
            "handler": {
                "aftEnterHandler": "mirawifiOkHandler"
            },
            "nav": {

            }
        }
    ];
    return miracastWifiData;
}

function mirawifiOkHandler(){
    hiWebOsFrame.miracast.destroy();
    hiWebOsFrame.mirawifi.destroy();
    try {
        if (g_launcherBrand=="VIDAALite") {
            //hiWebOsFrame.blankPage.open();
            //hiWebOsFrame.blankPage.hiFocus();
            model.network.setEnumNetworkConfig(1);//������
            model.network.setEnumNetworking(1);//����Ϊ����
            LauncherquickopenSetting(3, 0, hiWebOsFrame.blankPage);

            return;
        }
        if (!!hiWebOsFrame.myLauncher) {
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
        }
        else {
            hiWebOsFrame.blankPage.open();
            hiWebOsFrame.blankPage.hiFocus();
        }
    }
    catch (ex) {
        debugE(ex);
    }

}
