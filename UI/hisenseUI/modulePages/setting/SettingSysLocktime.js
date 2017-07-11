/**
 * Created by Administrator on 14-6-18.
 */
function getSettingLocktimePageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_locktime_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_locktime_start",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_locktime_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_locktime_end",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_input1",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_input2","downTo":"setting_sys_input3"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":23,
            "min":00
        },
        {
            "id": "setting_sys_input2",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_input1","downTo":"setting_sys_input4"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":59,
            "min":00
        },
        {
            "id": "setting_sys_input3",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_input4","upTo":"setting_sys_input1","downTo":"setting_sys_locktime_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":23,
            "min":00

        },
        {
            "id": "setting_sys_input4",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_input3","downTo":"setting_sys_locktime_btn1","upTo":"setting_sys_input2"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":59,
            "min":00
        },
        {
            "id":"setting_sys_locktime_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_input3","rightTo":"setting_sys_locktime_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysLockTimeSave",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_locktime_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_input4","leftTo":"setting_sys_locktime_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysLockTimeCancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            }

        }

    ];
    return PageDateSettingSysLocktime;
}
var PageDateSettingSysLocktime={

    "setting_sys_locktime_text1":{Data:"Lock time"},
    "setting_sys_locktime_start":{Data:"Start"},
    "setting_sys_locktime_end":{Data:"End"},
    "setting_sys_locktime_btn1":{Data:"Save"},
    "setting_sys_locktime_btn2":{Data:"Cancel"},
    "setting_sys_input1":{Data:""},
    "setting_sys_input2":{Data:""},
    "setting_sys_input3":{Data:""},
    "setting_sys_input4":{Data:""},
    "setting_sys_locktime_tip":{Data:"Please enter with numerical keypad"},
    "operateData": {

    },
    "langData":{
        "Start":["Start","Start","Inizio","Início","Inicio","Démarrer","Start","Början","Start","Aloita"],
        "End":["End","Ende","Fine","Fim","Fin","Fin","Stopp","Slut","Afslut","Lopeta"],
        "Lock time":["Lock time","Sperrzeit","Blocca l'ora","Hora de bloqueio","Tiempo de bloqueo","Durée Verrouillage","Låsetid","Låsningstid","Lås tid","Lukitsemis aika"],
        "Save":["Save","Speichern","Salva","Guardar","Guardar","Sauvegarder","Lagre","Spara","Gem","Tallenna"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"],
        "Please enter with numerical keypad":["Please enter with numerical keypad","Eingabe über Zahlentastatur","Si prega di inserire con il tastierino numerico","Digite com o teclado numérico","Por favor"," introduzca el teclado numérico ","Merci d'entrer via le clavier numérique","Skriv inn verdi med tallknappene","Ange med numeriskt tangentbord","Indtast venligst med numerisk tastatur"]
    },
    rewrite:function(pageData){
//        pageData.setting_sys_locktime_text1.Data=pageData.langData.title[langIdx]
//        pageData.setting_sys_locktime_start.Data=pageData.langData.start1[langIdx]
//        pageData.setting_sys_locktime_end.Data=pageData.langData.end1[langIdx]
//        pageData.setting_sys_locktime_btn1.Data=pageData.langData.save1[langIdx]
//        pageData.setting_sys_locktime_btn2.Data=pageData.langData.Cancel[langIdx];
//        pageData.setting_sys_locktime_tip.Data=pageData.langData.tip[langIdx];
    }
};

function SettingLocktimeonDestroy()
{
    hiWebOsFrame.settingssyslocktime=null;
}
function SettingSysLockTimeCancel()
{
    this.page.close();
    $("#setting_sys_input1").val("");
    $("#setting_sys_input2").val("");
    $("#setting_sys_input3").val("");
    $("#setting_sys_input4").val("");
    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();
}
function SettingSysLockTimeSave()
{
    //todo
    var value1=$("#setting_sys_input1").val();
    var value2=$("#setting_sys_input2").val();
    var value3=$("#setting_sys_input3").val();
    var value4=$("#setting_sys_input4").val();

    if((value1=="")||(value2=="")||(value3=="")||(value4==""))
    {
           hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=1;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();
            hiWebOsFrame.lockAllKeys("setting");
            setTimeout(settingslocktimeclose,3 * 1000);
        });
    }
    else
    {
        SettingSecSetLockTime(value1,value2,value3,value4);
        if((""+value2).length<2)
        {
            value2="0"+value2;
        }
        if((""+value4).length<2)
        {
            value4="0"+value4;
        }
        PageDataSettingSysSecurity.operateData.curlocktime=value1+":"+value2+"-"+value3+":"+value4;
        this.page.close();

        $("#setting_sys_input1").val("");
        $("#setting_sys_input2").val("");
        $("#setting_sys_input3").val("");
        $("#setting_sys_input4").val("");
        hiWebOsFrame.settingssyssecurity.open();
        hiWebOsFrame.settingssyssecurity.hiFocus();
        hiWebOsFrame.settingssyssecurity.rewriteDataOnly();
        SetRecentUse("Security",4,SYS_SECURITY);
    }
}
function settingslocktimeclose() {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();
        $("#setting_sys_input1").val("");
        $("#setting_sys_input2").val("");
        $("#setting_sys_input3").val("");
        $("#setting_sys_input4").val("");
        hiWebOsFrame.settingssyslocktime.open();
        hiWebOsFrame.settingssyslocktime.hiFocus();
    }
    else
    {
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    hiWebOsFrame.unLockAllKeys("setting");

}
function SettingSecSetLockTime(starth,startl, endh,endl)
{
    debugPrint( "set lock time  "+starth+startl+endh+endl);
    model.parentlock.setDailyStart(parseInt(starth)*3600+parseInt(startl)*60);
    model.parentlock.setDailyEnd(parseInt(endh)*3600+parseInt(endl)*60);

}
