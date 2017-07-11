/**
 * Created by Administrator on 14-6-18.
 */
function getSettingAutotimePageData(opt)
{
    opt.CaE=[

        {
            "id": "setting_sys_autotime_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },

        {
            "id": "setting_sys_autotime_input1",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_autotime_input2","downTo":"setting_sys_autotime_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysAutoTimeCancel"//点击enter事件后处理开关转换


            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":23,
            "min":00
        },
        {
            "id": "setting_sys_autotime_input2",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_input1_cls", "focus": "setting_sys_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_autotime_input1","downTo":"setting_sys_autotime_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysAutoTimeCancel"//点击enter事件后处理开关转换


            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":59,
            "min":00
        },
        {
            "id":"setting_sys_autotime_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_autotime_input1","rightTo":"setting_sys_autotime_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysAutoTimeSave",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysAutoTimeCancel"//点击enter事件后处理开关转换


            }

        },
        {
            "id":"setting_sys_autotime_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_autotime_input2","leftTo":"setting_sys_autotime_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysAutoTimeCancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysAutoTimeCancel"//点击enter事件后处理开关转换


            }

        }

    ];
    return PageDateSettingSysautotime;
}

var PageDateSettingSysautotime={
    "setting_sys_autotime_btn1":{Data:"Save"},
    "setting_sys_autotime_btn2":{Data:"Cancel"},
    "setting_sys_autotime_input1":{Data:""},
    "setting_sys_autotime_input2":{Data:""},
    "setting_sys_autotime_tip":{Data:"Please enter with numerical keypad."},
    "operateData": {
        "parentlist":["powerontime","powerofftime","date"],
        "curparent":"0"
    },
    "langData":{
        "Please enter with numerical keypad.":[],
        "Save":[],
        "Cancel":[]
    },
    rewrite:function(pageData){
//        pageData.setting_sys_autotime_btn1.Data=pageData.langData.save1[langIdx]
//        pageData.setting_sys_autotime_btn2.Data=pageData.langData.Cancel[langIdx];
//        pageData.setting_sys_autotime_tip.Data=pageData.langData.tip[langIdx];
    }
};

function SettingAutotimePageonDestroy()
{
    hiWebOsFrame.settingssysautotime=null;
}
function SettingSysAutoTimeSave()
{
  //  debugPrint("curparent"+this.page.data.operateData.curparent)
    try
    {
    var value1=$("#setting_sys_autotime_input1").val();
    var value2=$("#setting_sys_autotime_input2").val();
    if((value1=="")||(value2==""))
    {
        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=1;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();
            setTimeout(autotimeclose,3 * 1000);
        });
    }
    else
    {
        if(this.page.data.operateData.curparent==0)
        {

            //SetPoweronTime(value1, value2);
            debugPrint("poweron "+value2+value2.length);
            this.page.operateData.curtime=value1*3600+value2*60;//value1+":"+value2+" "+PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat];;
            model.timerfunc.setAlarmTime(this.page.operateData.curtime);
            if(PageDateSettingSysautotime.operateData.patentmode==1)
            {
                PageDataSettingSysTime.operateData.curpowerontime=this.page.operateData.curtime;
            }
            else if(PageDateSettingSysautotime.operateData.patentmode==2)
            {
                PageDataSettingSysTime.operateData.curpowerontime=this.page.operateData.curtime;
            }
           // PageDataSettingTimesandby.operateData.curtime=value1+":"+value2;
            this.page.close();
            $("#setting_sys_autotime_input1").val("");
            $("#setting_sys_autotime_input2").val("");
//            hiWebOsFrame.settingssystimestandby.open();
//            hiWebOsFrame.settingssystimestandby.hiFocus();
//            hiWebOsFrame.settingssystimestandby.rewriteDataOnly();
            hiWebOsFrame.settingssystimepoweron.open();
            hiWebOsFrame.settingssystimepoweron.hiFocus();
            hiWebOsFrame.settingssystimepoweron.rewriteDataOnly();
        }
        else if(this.page.data.operateData.curparent==1)
        {
            //todo
            this.page.close();
            this.page.operateData.curtime=value1*3600+value2*60;//value1+":"+value2+" "+PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat];;
            model.timerfunc.setStandbyTime(this.page.operateData.curtime);
            //PageDataSettingTimesandby.operateData.curtime=value1+":"+value2;
            if(PageDateSettingSysautotime.operateData.patentmode==1)
            {
                PageDataSettingSysTime.operateData.curpowerofftime=this.page.operateData.curtime;
            }
            else if(PageDateSettingSysautotime.operateData.patentmode==2)
            {
                PageDataSettingSysTime.operateData.curpowerofftime=this.page.operateData.curtime;
            }
            $("#setting_sys_autotime_input1").val("");
            $("#setting_sys_autotime_input2").val("");
            hiWebOsFrame.settingssystimepoweroff.open();
            hiWebOsFrame.settingssystimepoweroff.hiFocus();
            hiWebOsFrame.settingssystimepoweroff.rewriteDataOnly();
        }
        else if(this.page.data.operateData.curparent==2)
        {
            //todo
            if(value2.length<2)
            {
                value2="0"+value2;
            }
            if(value1.length<2)
            {
               value1="0"+value1;
            }
            this.page.close();
            $("#setting_sys_autotime_input1").val("");
            $("#setting_sys_autotime_input2").val("");
            PageDataSettingTimedate.operateData.curtime=value1+":"+value2;
            PageDataSettingSysTime.operateData.curtime=value1+":"+value2;
            SettingTimeSetLocaltime(PageDataSettingSysTime.operateData.curdate,PageDataSettingSysTime.operateData.curtime);
            hiWebOsFrame.settingssystimedate.rewriteDataOnly();
            hiWebOsFrame.settingssystimedate.open();
            hiWebOsFrame.settingssystimedate.hiFocus();


        }
        SetRecentUse("Time",4,SYSTEM_TIME);
    }
    }catch (e)
    {
        debugPrint(e.message);
    }
}

function autotimeclose() {

    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror")
        hiWebOsFrame.settingsyspwderror.close();
        $("#setting_sys_autotime_input1").val("");
        $("#setting_sys_autotime_input2").val("");
        hiWebOsFrame.settingssysautotime.open();
        hiWebOsFrame.settingssysautotime.hiFocus();
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    else
    {
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();
    }

}
function SettingSysAutoTimeCancel()
{
    if(this.page.data.operateData.curparent==0)
    {
        this.page.close();
        $("#setting_sys_autotime_input1").val("");
        $("#setting_sys_autotime_input2").val("");
//        hiWebOsFrame.settingssystimestandby.open();
//        hiWebOsFrame.settingssystimestandby.hiFocus();
        hiWebOsFrame.settingssystimepoweron.open();
        hiWebOsFrame.settingssystimepoweron.hiFocus();
        hiWebOsFrame.settingssystimepoweron.rewriteDataOnly();
    }
    else if(this.page.data.operateData.curparent==1)
    {
        this.page.close();
        $("#setting_sys_autotime_input1").val("");
        $("#setting_sys_autotime_input2").val("");
//        hiWebOsFrame.settingssystimestandby.open();
//        hiWebOsFrame.settingssystimestandby.hiFocus();
        hiWebOsFrame.settingssystimepoweroff.open();
        hiWebOsFrame.settingssystimepoweroff.hiFocus();
        hiWebOsFrame.settingssystimepoweroff.rewriteDataOnly();
    }
    else
    {
        this.page.close();
        $("#setting_sys_autotime_input1").val("");
        $("#setting_sys_autotime_input2").val("");
        hiWebOsFrame.settingssystimedate.open();
        hiWebOsFrame.settingssystimedate.hiFocus();
    }
}
