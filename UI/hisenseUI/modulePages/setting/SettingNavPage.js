/**
 * Created by Administrator on 14-6-18.
 */
function getSettingNavPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_nav_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_nav_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "rightTo":"setting_sys_nav_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysGuideokHandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysGuideEscEnHandler"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_nav_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "leftTo":"setting_sys_nav_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysGuideEscEnHandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysGuideEscEnHandler"//点击enter事件后处理开关转换

            }

        }
    ];
    return PageDataSetttingSysNav;

}
var PageDataSetttingSysNav={
    "setting_sys_nav_content":{Data:"Your security setting will restore to the factory setting, continue?"},
    "setting_sys_nav_btn1":{Data:"OK"},
    "setting_sys_nav_btn2":{Data:"Cancel"},
    "operateData": {
        "parentpagelist":["advance","security",""],
        "parentpage":0,
        "curdatatype":0,
        "datalist":[
            {
                "content":"Entering setup wizard. Are you sure you wish to continue?",
                "button1":"OK",
                "button2":"Cancel"
            },
            {
                "content":"The parental control will revert back to the factory default settings. Do you want to continue?",
                "button1":"OK",
                "button2":"Cancel"
            },
            {
                "content":"Reset will clear your personal setup and information. Are you sure you wish to continue?",
                "button1":"OK",
                "button2":"Cancel"
            },
            {
                "content":"Reset will clear all system setting Sure to continue?",
                "button1":"OK",
                "button2":"Cancel"
            }
        ]

    },
    "langData":{
        "Your customized setup information will be erased once you restore the TV back to factory default settings. Do you still want to continue?":[],
        "The Setup Wizard is about to begin. Are you sure you want to continue?": ["The Setup Wizard is about to begin. Are you sure you want to continue?","L'assistant de configuration est sur le point de démarrer. Êtes-vous sûr de vouloir continuer?","El asistente de instalación está a punto de comenzar. ¿Está seguro de que desea continuar?"],
        "Entering setup wizard. Are you sure you wish to continue?":["Entering wizard. Sure to continue?","Wizard wird gestartet. Wirklich fortfahren?","Inserimento di wizard in corso. Sei sicuro di voler continuare?","A entrar no assistente. Tem a certeza que quer continuar?","Introduciendo asistente. ¿Desea continuar?","Activation de l'assistant. Continuer?","Starter veiviser. Er du sikker på at du vil fortsette?","Öppnar guiden. Är du säker på att du vill fortsätta?","Går til guiden. Sikker på at du vil fortsætte?","Siirrytään ohjaukseen. Haluatko jatkaa?"],
        "Reset will clear your personal setup and information. Are you sure you wish to continue?":["Reset will clear your personal setup and information. Sure to continue?","Durch die Rückstellung werden alle persönlichen Einstellungen und Daten gelöscht. Wirklich fortfahren?","Il reset cancellerà la tua installazione e le tue  informazioni personali. Sei sicuro di voler continuare?","A reposição irá eliminar as configurações e informação pessoais. Tem a certeza que pretende continuar?","Restablecer borrará su configuración personal y la información. ¿Quiere continuar?","Réinitialiser effacera vos informations et réglages personnels. Continuer?","Nullstilling vil fjerne personlig oppsett og informasjon. Er du sikker på at du vil fortsette?","Återställning kommer att ta bort dina personliga inställningar och information. Är du säker på att du vill fortsätta?","Reset rydde din personlige opsætning og information. Sikker på at fortsætte?","Resetointi poistaa henkilökohtaiset asetukset ja tiedot. Haluatko jatkaa?"],
        "The parental control will revert back to the factory default settings. Do you want to continue?":[],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK","确认"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peru toiminto","取消"]


    },
    rewrite:function(pageData){
        pageData.setting_sys_nav_content.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].content;
        pageData.setting_sys_nav_btn1.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].button1;
        pageData.setting_sys_nav_btn2.Data=pageData.operateData.datalist[pageData.operateData.curdatatype].button2;

    }

};

function SettingNavPageonDestroy()
{
    hiWebOsFrame.settingssysstartnav=null;
}
function SettingSysGuideokHandler()
{
    //todo"parentpagelist":["sysfir","security"],
    if(this.page.operateData.parentpage==0)// installsion navigation
    {
        //todo
        SetRecentUse("Setup Wizard",4,RECNT_AD);
        //启动开机导航
        closeDOthersModule("setting");
        //startWizardFromSetting();
        startWizard(3);
    }
    if(this.page.operateData.parentpage==2)// reset the system setting
    {
        RestoreSettings();
		clearMainInputPasswordStatus();
        closeDOthersModule("setting");
        //临时代码，等待handlerok后使用。
       // FactoryResethandler(0,0)
    }
    else if(this.page.operateData.parentpage==1)// reset the secuirty setting
    {
        //todo set and refresh the security 页面
        SettingSecReset();
      //  this.page.close();
        SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);
        //临时代码，等待handlerok后使用。
      //  Resethandler(0, 0);
    }
    if(this.page.operateData.parentpage==3)// reset the system setting
    {
        Resetallsetting();

    }

}
function SettingSysGuideEscEnHandler()
{
    if(this.page.operateData.parentpage==0)
    {
        this.page.close();
        hiWebOsFrame.settingssysad.open();
        hiWebOsFrame.settingssysad.hiFocus();

    }
    else if(this.page.operateData.parentpage==1)
    {

        this.page.close();
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
    }
    else if(this.page.operateData.parentpage==2||this.page.operateData.parentpage==3)
    {
        //todo
        this.page.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        this.page.destroy();

    }
}

function RestoreSettings()
{
    debugPrint(" start to reset the setting");
    hiWebOsFrame.startLoading();
    model.system.FactoryReset();
    debugPrint(" reset the setting end ");

}
function SettingSecReset()
{
    model.parentlock.Reset();
    debugPrint("security reset!!!!!!!!!!!!!! ");
}
function Resetallsetting()
{
    // debugPrint("to reset the setting")

//    model.system.FactoryReset();
//    debugPrint(" reset the setting end ");

}
