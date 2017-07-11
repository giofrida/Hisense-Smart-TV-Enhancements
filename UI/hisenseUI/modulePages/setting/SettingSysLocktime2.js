/**
 * Created by Administrator on 14-9-9.
 */
function getSettingLocktime2PageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_locktime2_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },

        {
            "id": "setting_sys_locktime_input1",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_locktime_input2","downTo":"setting_sys_locktime2_btn1"},
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
            "id": "setting_sys_locktime_input2",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_locktime_input1","downTo":"setting_sys_locktime2_btn1"},
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
            "id":"setting_sys_locktime2_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_locktime_input1","rightTo":"setting_sys_locktime2_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysLockTimeSave",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_locktime2_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_locktime_input2","leftTo":"setting_sys_locktime2_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysLockTimeCancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysLockTimeCancel"//点击enter事件后处理开关转换

            }

        }

    ];
    return PageDateSettingSysLocktime2;
}
var PageDateSettingSysLocktime2={


    "setting_sys_locktime2_btn1":{Data:"Save"},
    "setting_sys_locktime2_btn2":{Data:"Cancel"},
    "setting_sys_locktime_input1":{Data:""},
    "setting_sys_locktime_input2":{Data:""},
    "setting_sys_locktime2_tip":{Data:"Please enter with numerical keypad."},
    "operateData": {
        "parentlist":["lockstart","lockend"],
        "curparent":"0"

    },
    "langData":{
        "Save":["Save","Speichern","Salva","Guardar","Guardar","Sauvegarder","Lagre","Spara","Gem","Tallenna"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"],
        "Please enter with numerical keypad.":[]
    },
    rewrite:function(pageData){

    }
};

function SettingLocktime2onDestroy()
{
    hiWebOsFrame.settingssyslocktime2=null;
}
function SettingSysLockTimeCancel()
{
    this.page.close();
    $("#setting_sys_locktime_input1").val("");
    $("#setting_sys_locktime_input2").val("");
    hiWebOsFrame.settingsysblocktime.open();
    hiWebOsFrame.settingsysblocktime.hiFocus();
}
function SettingSysLockTimeSave()
{
    //todo
    var value1=$("#setting_sys_locktime_input1").val();
    var value2=$("#setting_sys_locktime_input2").val();
    if((value1=="")||(value2==""))
    {
        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=1;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();
            hiWebOsFrame.lockAllKeys("setting");
            setTimeout(syslocktime2,3 * 1000);
        });
    }
    else
    {    //todo
        //SettingSecSetLockTime(value1,value2,value3,value4);
//        if((""+value2).length<2)
//    {
//        value2="0"+value2;
//    }
        if(PageDateSettingSysLocktime2.operateData.curparent==0)
        {
            PageDataSettingSysBlocktime.operateData.curstarttime=value1*3600+value2*60;
            model.parentlock.setStart(PageDataSettingSysBlocktime.operateData.curstarttime);

        }
        else if(PageDateSettingSysLocktime2.operateData.curparent==1)
        {
            PageDataSettingSysBlocktime.operateData.curendtime=value1*3600+value2*60;
            model.parentlock.setEnd(PageDataSettingSysBlocktime.operateData.curendtime);
        }
        this.page.close();
        $("#setting_sys_locktime_input1").val("");
        $("#setting_sys_locktime_input2").val("");
        hiWebOsFrame.settingsysblocktime.open();
        hiWebOsFrame.settingsysblocktime.hiFocus();
        hiWebOsFrame.settingsysblocktime.rewriteDataOnly();
        SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);
    }
}
function syslocktime2() {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();
        $("#setting_sys_input1").val("");
        $("#setting_sys_input2").val("");
        $("#setting_sys_input3").val("");
        $("#setting_sys_input4").val("");
        hiWebOsFrame.settingssyslocktime2.open();
        hiWebOsFrame.settingssyslocktime2.hiFocus();
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
 //  debugPrint( "set lock time  "+starth+startl+endh+endl);
 //   model.parentlock.setDailyStart(parseInt(starth)*3600+parseInt(startl)*60);
//    model.parentlock.setDailyEnd(parseInt(endh)*3600+parseInt(endl)*60);

}