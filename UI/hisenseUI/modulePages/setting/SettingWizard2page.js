/**
 * Created by Administrator on 14-8-20.
 */
function getSettingWizardPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_wizard_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_wizard_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "rightTo":"setting_sys_wizard_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysWizardokHandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysWzardEscEnHandler"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_wizard_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "leftTo":"setting_sys_wizard_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysWzardEscEnHandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysWzardEscEnHandler"//点击enter事件后处理开关转换

            }

        }
    ];
    return PageDataSetttingSysWzard;

}
var PageDataSetttingSysWzard={
    "setting_sys_wizard_content":{Data:"Your security setting will restore to the factory setting, continue?"},
    "setting_sys_wizard_btn1":{Data:"OK"},
    "setting_sys_wizard_btn2":{Data:"Cancel"},
    "operateData": {
        "parentpagelist":["sysfir","about","appset","appset2"],
        "parentpage":"sysfir",
        "curdatatype":0,
        "datalist":[
            {
                "content":"Entering wizard,and the pvr and timeshift recording will be stoped.Sure to continue?",
                "button1":"OK",
                "button2":"Cancel"
            },
            {
                "content":"Reset will clear your personal setup and information,the pvr and timeshift recording will be stopped Sure to continue?",
                "button1":"OK",
                "button2":"Cancel"
            },
            {
                "content":"Deactivating service on this TV only. Please contact your service provider if you want to stop service.",
                "button1":"OK",
                "button2":"Cancel"
            }
        ]

    },
    "langData":{
        "OK":["OK","",""],
        "Cancel":["Cancel","",""],
        "Deactivating service on this TV only. Please contact your service provider if you want to stop service.": ["Deactivating service on this TV. Please contact your service provider if you want to stop service.","Désactiver le service sur ce téléviseur. Veuillez contactez votre fournisseur de service si vous souhaitez mettre fin à votre abonnement.","Desactivando el servicio en este televisor. Póngase en contacto con su proveedor de servicios si desea detener el servicio."]

    },
    rewrite:function(pageData){
        pageData.setting_sys_wizard_content.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].content;
        pageData.setting_sys_wizard_btn1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].button1;
        pageData.setting_sys_wizard_btn2.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].button2;

    }

};

function SettingWizardPageonDestroy()
{
    hiWebOsFrame.settingssysstartwizard=null;
}
function SettingSysWizardokHandler()
{
    debugPrint("SettingSysWizardokHandler ")
    if(this.page.operateData.parentpage=="sysfir")// installsion navigation
    {
        if (model.hdr.getRecorderState() == 1 && model.hdr.getPlayerState() ==2)
        {    //正在时移
            model.hdr.PlayerStop();
            model.hdr.setRecorderTsbActive(0);
        }
        if (model.hdr.getRecorderState() == 2 ) {//正在录制
            try{
                PVR_StopRecordParams();
            }catch (ex){
                debugPrint("------------------:"+ex.message);
            }
            var STOP_RECORDING = 221;
            model.hdr.PlayerStop();
            setTimeout(function(){
                model.message.ActionConfirm(STOP_RECORDING, 2);
            },50);
        }
//        closeDOthersModule("setting");
//        startWizardFromSetting();
        startWizard(1);

    }
    else if(this.page.operateData.parentpage=="about")// reset the system setting
    {
        if (model.hdr.getRecorderState() == 1 && model.hdr.getPlayerState() ==2)
        {//正在时移
            model.hdr.PlayerStop();
            model.hdr.setRecorderTsbActive(0);
        }
        if (model.hdr.getRecorderState() == 2 )
        {

            try{
                PVR_StopRecordParams();
            }catch (ex){
                debugPrint("wizardChSetStopPVROkHandle:"+ex.message);
            }
            var STOP_RECORDING = 221;
            model.hdr.PlayerStop();
            setTimeout(function(){
                model.message.ActionConfirm(STOP_RECORDING, 2);
            },50);
        }
        debugPrint("to reset the setting");
        closeDOthersModule("setting");
        resetSettings();
    }
    else if(this.page.operateData.parentpage=="appset")
    {
        try
        {
        this.page.close();
        //to deactiva app
        if( PageDataSetttingSysWzard.operateData.option==1)
        {
            model.appsetting.NetflixDeactive();
            debugPrint("11111111111111111");
        }
        else if( PageDataSetttingSysWzard.operateData.option==2)
        {
            model.appsetting.VuduDeactive();
            debugPrint("2222222222222222222");
        }
        hiWebOsFrame.settingssysappset.open();
        hiWebOsFrame.settingssysappset.hiFocus();
        SetRecentUse("Application Settings",4,APP_SETTING);

        }catch (e)
        {
            debugE(e.message)
        }
    }
    else if(this.page.operateData.parentpage=="appset2")
    {
        //to deactiva app
        this.page.close();
        if( PageDataSetttingSysWzard.operateData.option==1)
        {
            model.appsetting.NetflixDeactive();
           
        }
        else if( PageDataSetttingSysWzard.operateData.option==2)
        {
            model.appsetting.VuduDeactive();
           
        }
        hiWebOsFrame.settingssysappsetsa2.open();
        hiWebOsFrame.settingssysappsetsa2.hiFocus();
        SetRecentUse("Application Settings",4,APP_SETTING);
    }

}
function SettingSysWzardEscEnHandler()
{
    debugPrint("SettingSysWzardEscEnHandler")
    if(this.page.operateData.parentpage=="sysfir")
    {
        this.page.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        this.page.destroy();

    }
    else if(this.page.operateData.parentpage=="about")
    {
        //todo
        this.page.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        this.page.destroy();

    }else if(this.page.operateData.parentpage=="appset")
    {
        this.page.close();
        hiWebOsFrame.settingssysappset.open();
        hiWebOsFrame.settingssysappset.hiFocus();
    }
    else if(this.page.operateData.parentpage=="appset2")
    {
        this.page.close();
        hiWebOsFrame.settingssysappsetsa2.open();
        hiWebOsFrame.settingssysappsetsa2.hiFocus();
    }
}

function resetSettings()
{
    // debugPrint("to reset the setting")
    hiWebOsFrame.startLoading();
    model.system.FactoryReset();
    //debugPrint(" reset the setting end ");

}


