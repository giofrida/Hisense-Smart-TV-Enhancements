function getSettingEnergyWarningMsgPageData(opts) {
    try {
        opts.CaE = [
            {
                "id": "setting_energy_warning_title",
                "description": "setting_energy_warning_title",
                "CaEType": "div"
            },
            {
                "id": "setting_energy_warning_content",
                "description": "setting_energy_warning_content",
                "CaEType": "div",
                "classes": {
                    "normal": "setting_energy_warning_content",
                    "focus": "setting_energy_warning_content",
                    "selected": "setting_energy_warning_content"
                },
                "handler": {
                    "aftEnterHandler": "SettingEnergyWarningEnterHandler",
                    "aftEscHandler": "SettingEnergyWarningEnterHandler",
                    "keyExitHandler": "SettingEnergyWarningEnterHandler"
                }
            }
        ];

        return PageDataSettingEnergyWarning;


    } catch (ex) {
        debugE(ex.message);
    }

}


var PageDataSettingEnergyWarning = {
    "setting_energy_warning_title": {Data: "WARNING"},
    "setting_energy_warning_content": {Data: "Energy consumption in the current picture mode may be higher than indicated in the energy rating label.Please use Standard picture mode for normal energy consumption."},

    operateData: {
        "EnergyWarningAutoCloseTimer": null,
        "setting_energy_warning_title": {Data: "WARNING"},
        "setting_energy_warning_content": {Data: "Energy consumption in the current picture mode may be higher than indicated in the energy rating label.Please use Standard picture mode for normal energy consumption."}

    },
    langData:{
        "WARNING":[],
        "Energy consumption in the current picture mode may be higher than indicated in the energy rating label.Please use Standard picture mode for normal energy consumption.":[]
    },
    rewrite: "SettingEnergyWarningMsgPageRewrite"

}


function onSettingEnergyWarningMsgPageOpen() {
    try {
        debugG('onSettingEnergyWarningMsgPageOpen');
        if(PageDataSettingEnergyWarning.operateData.EnergyWarningAutoCloseTimer != null){
            clearTimeout(PageDataSettingEnergyWarning.operateData.EnergyWarningAutoCloseTimer);
        }

        PageDataSettingEnergyWarning.operateData.EnergyWarningAutoCloseTimer = setTimeout(function(){
            if(!!hiWebOsFrame.SettingEnergyWarning && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingEnergyWarning.id)){
                debugG('EnergyWarningAutoCloseTimer Timer Out,');
                SettingEnergyWarningEnterHandler();
            }
        },5200);

    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingEnergyWarningMsgPageClose() {
    try {
        debugG('onSettingEnergyWarningMsgPageClose');
        clearTimeout(PageDataSettingEnergyWarning.operateData.EnergyWarningAutoCloseTimer);
    } catch (ex) {
        debugE(ex.message);
    }
}

function onSettingEnergyWarningMsgPageDestroy() {
    try {
        debugG('onSettingEnergyWarningMsgPageDestroy');
        hiWebOsFrame.SettingEnergyWarning = null;
    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingEnergyWarningMsgPageRewrite(pageData) {
    try {
        debugG("SettingEnergyWarningMsgPageRewrite");
        pageData.setting_energy_warning_title.Data = pageData.operateData.setting_energy_warning_title.Data;
        pageData.setting_energy_warning_content.Data = pageData.operateData.setting_energy_warning_content.Data;

    } catch (ex) {
        debugE(ex.message);
    }
}

function SettingEnergyWarningEnterHandler(){
    try {
        debugG('SettingEnergyWarning Esc Enter or Exist Handler');
        hiWebOsFrame.SettingEnergyWarning.close();
        hiWebOsFrame.SettingEnergyWarning.origin.open();
        hiWebOsFrame.SettingEnergyWarning.origin.hiFocus();
        hiWebOsFrame.SettingEnergyWarning.destroy();
    } catch (ex) {
        debugE(ex.message);
    }
}

























