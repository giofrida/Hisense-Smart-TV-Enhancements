/**
 * Created by Administrator on 14-9-11.
 */
function getSettingSysinputdateData(opt)
{
    opt.CaE=[

        {
            "id": "setting_sys_inputdate_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },

        {
            "id": "setting_sys_inputdate_input1",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_date_input1_cls", "focus": "setting_sys_date_input1_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_inputdate_input2","downTo":"setting_sys_inputdate_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysinpurdateCancel"//点击enter事件后处理开关转换


            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":12,
            "min":01
        },
        {
            "id": "setting_sys_inputdate_input2",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_date_input1_cls", "focus": "setting_sys_date_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_inputdate_input1","rightTo":"setting_sys_inputdate_input3","downTo":"setting_sys_inputdate_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysinpurdateCancel"//点击enter事件后处理开关转换


            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":31,
            "min":01
        },
        {
            "id": "setting_sys_inputdate_input3",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_date_input1_cls", "focus": "setting_sys_date_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_inputdate_input2","rightTo":"","downTo":"setting_sys_inputdate_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysinpurdateCancel"//点击enter事件后处理开关转换


            },
            "inputAttr":"number",
            "maxlength":"4",
            "max":9999,
            "min":0
        },
        {
            "id":"setting_sys_inputdate_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_inputdate_input1","rightTo":"setting_sys_inputdate_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysinpurdateSave",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysinpurdateCancel"//点击enter事件后处理开关转换


            }

        },
        {
            "id":"setting_sys_inputdate_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_inputdate_input3","leftTo":"setting_sys_inputdate_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysinpurdateCancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysinpurdateCancel"//点击enter事件后处理开关转换


            }

        }

    ];
    return PageDateSettingSysinputdata;
}

var PageDateSettingSysinputdata={
    "setting_sys_inputdate_btn1":{Data:"Save"},
    "setting_sys_inputdate_btn2":{Data:"Cancel"},
    "setting_sys_inputdate_input1":{Data:""},
    "setting_sys_inputdate_input2":{Data:""},
    "setting_sys_inputdate_input3":{Data:""},
    "setting_sys_inputdate_tip":{Data:"Please enter with numerical keypad."},
    "operateData": {

    },
    "langData":{
        "Please enter with numerical keypad.":[],
        "Save":["Save","Speichern","Salva","Guardar","Guardar","Sauvegarder","Lagre","Spara","Gem","Tallenna"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"]
    },
    rewrite:function(pageData){
//        pageData.setting_sys_autotime_btn1.Data=pageData.langData.save1[langIdx]
//        pageData.setting_sys_autotime_btn2.Data=pageData.langData.Cancel[langIdx];
//        pageData.setting_sys_autotime_tip.Data=pageData.langData.tip[langIdx];
//        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
//            $("#setting_sys_inputdate_input1").css("margin","0  0 0 65px");
//        }
//        else {
//            $("#setting_sys_inputdate_input1").css("margin","0 65px 0 0")
//        }
    }
};

function SettingSysinputdateonDestroy()
{
    hiWebOsFrame.settingssysinputdate=null;
}
function isdate(intYear,intMonth,intDay)
{

    if(isNaN(intYear)||isNaN(intMonth)||isNaN(intDay)) return false;
    if(intYear>2099||intYear<2000) return false;

    if(intMonth>12||intMonth<1) return false;

    if ( intDay<1||intDay>31)return false;

    if((intMonth==4||intMonth==6||intMonth==9||intMonth==11)&&(intDay>30)) return false;

    if(intMonth==2){

        if(intDay>29) return false;

        if((((intYear%100==0)&&(intYear%400!=0))||(intYear%4!=0))&&(intDay>28))return false;

    }

    return true;
}
function SettingSysinpurdateSave()
{
    //  debugPrint("curparent"+this.page.data.operateData.curparent)
    var value1=$("#setting_sys_inputdate_input1").val();
    var value2=$("#setting_sys_inputdate_input2").val();
    var value3=$("#setting_sys_inputdate_input3").val();
    if((value1=="")||(value2=="")||(value3==""))
    {
        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=1;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();
            hiWebOsFrame.lockAllKeys("setting");
            setTimeout(inputdateclose,3 * 1000);
        });
        return;
    }
    if(value3.length==2
        &&parseInt(value3)>=0
        &&parseInt(value3)<=99)
    {
        value3="20"+value3;
    }
    var temp=isdate(parseInt(value3,10),parseInt(value1,10),parseInt(value2,10))
   if(temp==false)
    {

          hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
              hiWebOsFrame.settingsyspwderror=page;
              PageDateSettingSysPwderror.operateData.datatype=1;
              page.rewriteDataOnly();
              page.open();
              page.hiFocus();

          });
        hiWebOsFrame.lockAllKeys("setting");
        setTimeout(inputdateclose,3 * 1000);

    }
    else
    {


            //todo
            //  Setdate(value1, value2,value3);
            if(value2.length<2)
            {
                value2="0"+value2;
            }
//
            this.page.close();
            $("#setting_sys_inputdate_input1").val("");
            $("#setting_sys_inputdate_input2").val("");
            $("#setting_sys_inputdate_input3").val("");
            //  $("#setting_sys_autotime_input2").val()="";
            PageDataSettingTimedate.operateData.curdate=value1+"/"+value2+"/"+value3;
            PageDataSettingSysTime.operateData.curdate=PageDataSettingTimedate.operateData.curdate;
           // SettingTimeSetSysUTC(PageDataSettingSysTime.operateData.curdate,PageDataSettingSysTime.operateData.curtime,0,false);
            SettingTimeSetLocaltime(PageDataSettingSysTime.operateData.curdate,PageDataSettingSysTime.operateData.curtime);
            debugPrint("22222222222222222222222222")
            hiWebOsFrame.settingssystimedate.rewriteDataOnly();
            hiWebOsFrame.settingssystimedate.open();
            hiWebOsFrame.settingssystimedate.hiFocus();
            debugPrint("333333333333333333333333333")
            SetRecentUse("Time",4,SYSTEM_TIME);
    }
}

function inputdateclose() {

    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror")
        hiWebOsFrame.settingsyspwderror.close();
        $("#setting_sys_inputdate_input1").val("");
        $("#setting_sys_inputdate_input2").val("");
        $("#setting_sys_inputdate_input3").val("");
        hiWebOsFrame.settingssysinputdate.open();
        hiWebOsFrame.settingssysinputdate.hiFocus();
        hiWebOsFrame.unLockAllKeys("setting");
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    else
    {
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.unLockAllKeys("setting");
        hiWebOsFrame.settingsyspwderror.destroy();



    }

}
function SettingSysinpurdateCancel()
{

    this.page.close();
    $("#setting_sys_inputdate_input1").val("");
    $("#setting_sys_inputdate_input2").val("");
    $("#setting_sys_inputdate_input3").val("");
    hiWebOsFrame.settingssystimedate.open();
    hiWebOsFrame.settingssystimedate.hiFocus();

}