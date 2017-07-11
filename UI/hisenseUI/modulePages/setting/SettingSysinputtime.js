/**
 * Created by Administrator on 14-9-11.
 */

function getSettingSysinputtimeData(opt)
{
    opt.CaE=[

        {
            "id": "setting_sys_inputtime_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_inputtime_text1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_inputtime_div1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_sys_format2_cls", "focus": "setting_sys_format2_focus_cls"
            },
            "nav": { "rightTo":"setting_sys_inputtime_input1","downTo":"setting_sys_inputtime_btn1"},
            "handler":{
                "aftEnterHandler":"SettingSystimeFormatEnter",
                'aftEscHandler':"SettingSysInputTimeCancel"//点击enter事件后处理开关转换

            }

        },
        {
            "id": "setting_sys_inputtime_input1",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_timeformat2_input1_cls", "focus": "setting_sys_timeformat2_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_inputtime_div1","rightTo":"setting_sys_inputtime_input2","downTo":"setting_sys_inputtime_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysInputTimeCancel"//点击enter事件后处理开关转换


            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":12,
            "min":1
        },
        {
            "id": "setting_sys_inputtime_input2",
            "description": "",
            "CaEType": "input",
            "disable": false,
            "classes": {
                "normal": "setting_sys_timeformat2_input1_cls", "focus": "setting_sys_timeformat2_input1_focus_cls"
            },
            "nav": { "leftTo":"setting_sys_inputtime_input1","downTo":"setting_sys_inputtime_btn1"},
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"SettingSysInputTimeCancel"//点击enter事件后处理开关转换


            },
            "inputAttr":"number",
            "maxlength":"2",
            "max":59,
            "min":00
        },
        {
            "id":"setting_sys_inputtime_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_inputtime_div1","rightTo":"setting_sys_inputtime_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysInputTimeSave",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysInputTimeCancel"//点击enter事件后处理开关转换


            }

        },
        {
            "id":"setting_sys_inputtime_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_inputtime_input1","leftTo":"setting_sys_inputtime_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysInputTimeCancel",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysInputTimeCancel"//点击enter事件后处理开关转换


            }

        },
        {

            "id": "setting_inputtime_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"upTo": ""},

            "classes": {
                "normal": "setting_sys_timeformat2_li_normal", "focus": "setting_sys_timeformat2_li_focus"
            },
            "handler": {
                "aftEnterHandler": "SettingSysInputTimeUl1Enter",
                "aftEscHandler": "SettingSysInputTimeCancel"

            },
            oriCaE: [
                {
                    "id": "setting_inputtime_ul1_text",
                    "description": "名称",
                    "CaEType": "div"
                }

            ],
            UlConfig: {

                "UlDataItem": ["setting_inputtime_ul1_text"],
                "PageSize":2

            }

        }

    ];
    return PageDateSettingSysinputtime;
}

var PageDateSettingSysinputtime={
    "setting_sys_inputtime_btn1":{Data:"Save"},
    "setting_sys_inputtime_btn2":{Data:"Cancel"},
    "setting_sys_inputtime_input1":{Data:""},
    "setting_sys_inputtime_input2":{Data:""},
    "setting_sys_inputtime_tip":{Data:"Please enter with numerical keypad."},
    "setting_sys_inputtime_text1":{Data:"AM"},
    "setting_inputtime_ul1":{Data:
        [
            {"setting_inputtime_ul1_text":{Data:"AM"}},
            {"setting_inputtime_ul1_text":{Data:"PM"}}
        ],
        "SelectedIndex":0
    },
    "operateData": {
        "parentlist":["powerontime","powerofftime","date","lockstart","lockend"],
        "curparent":"0",
        "timefomat":["AM","PM"],
        "curformat":0

    },
    "langData":{
        "Please enter with numerical keypad.":[],
        "Save":["Save","Speichern","Salva","Guardar","Guardar","Sauvegarder","Lagre","Spara","Gem","Tallenna"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"]
    },
    rewrite:function(pageData){
        pageData.setting_sys_inputtime_text1.Data=pageData.operateData.timefomat[pageData.operateData.curformat];
//        pageData.setting_sys_autotime_btn2.Data=pageData.langData.Cancel[langIdx];
//        pageData.setting_sys_autotime_tip.Data=pageData.langData.tip[langIdx];
        pageData.setting_inputtime_ul1.SelectedIndex=pageData.operateData.curformat;
//        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
//            $("#setting_sys_inputtime_div1").css("margin","0  0 0 65px");
//        }
//        else {
//            $("#setting_sys_inputtime_div1").css("margin","0 65px 0 0")
//        }
    }
};

function SettingSysinputtimeonDestroy()
{
    hiWebOsFrame.settingssysinputtime=null;
}

function SettingSystimeFormatEnter()
{
    $("#setting_inputtime_ul1").css("visibility","visible");
    hiWebOsFrame.settingssysinputtime.hiFocus("setting_inputtime_ul1");


}
function SettingSysinputtimeonOpen()
{
    $("#setting_inputtime_ul1").css("visibility","hidden");
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) 
    {
        $("#setting_inputtime_ul1").css("left","80px")
    }else
    {
        $("#setting_inputtime_ul1").css("left","720px")
    }

}

function SettingSysInputTimeUl1Enter()
{
    this.page.operateData.curformat=this.SelectedIndex;
    $("#setting_inputtime_ul1").css("visibility","hidden");
    hiWebOsFrame.settingssysinputtime.rewriteDataOnly();
    hiWebOsFrame.settingssysinputtime.hiFocus("setting_sys_inputtime_div1");
    debugPrint(" this.page.operateData.curformat"+this.page.operateData.curformat)
}
function SettingSysInputTimeSave()
{
    var value1=$("#setting_sys_inputtime_input1").val();
    var value2=$("#setting_sys_inputtime_input2").val();
    if((value1=="")||(value2=="")||(parseInt(value1,10)<1))
    {
        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=1;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();
            hiWebOsFrame.lockAllKeys("setting");
            setTimeout(settinginputtimeclose,3 * 1000);
        });
    }
    else
    {
        if(this.page.data.operateData.curparent==0)//powerontime
        {

            //SetPoweronTime(value1, value2);
            debugPrint("poweron "+value2+value2.length)
//            if(value2.length<2)
//            {
//                value2 ="0"+value2;
//            }

            if(PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat]=="PM")
            {
                if(parseInt(value1,10)<12)
                {
                   value1=parseInt(value1,10)+12;
                }
            }
            else
            {
                if(parseInt(value1,10)==12)
                {
                    value1=parseInt(value1,10)-12;
                }

            }
            this.page.operateData.curtime=value1*3600+value2*60;//value1+":"+value2+" "+PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat];;

            if(PageDateSettingSysinputtime.operateData.patentmode==1)
            {
                PageDataSettingSysTime.operateData.curpowerontime=this.page.operateData.curtime;
            }
            else if(PageDateSettingSysinputtime.operateData.patentmode==2)
            {
                PageDataSettingSysTime.operateData.curpowerontime=this.page.operateData.curtime;
            }

            model.timerfunc.setAlarmTime(this.page.operateData.curtime);
            this.page.close();
            $("#setting_sys_inputtime_input1").val("");
            $("#setting_sys_inputtime_input2").val("");
//            hiWebOsFrame.settingssystimestandby.open();
//            hiWebOsFrame.settingssystimestandby.hiFocus();
//            hiWebOsFrame.settingssystimestandby.rewriteDataOnly();
            hiWebOsFrame.settingssystimepoweron.open();
            hiWebOsFrame.settingssystimepoweron.hiFocus();
            hiWebOsFrame.settingssystimepoweron.rewriteDataOnly();
            SetRecentUse("Time",4,SYSTEM_TIME);
        }
        else if(this.page.data.operateData.curparent==1)//powerofftime
        {
            //todo
            //  SetPoweroffTime(value1, value2);
//            if(value2.length<2)
//            {
//                value2="0"+value2;
//            }
            if(PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat]=="PM")
            {
                if(parseInt(value1,10)<12)
                {
                    value1=parseInt(value1,10)+12;
                }
            }
            else
            {
                if(parseInt(value1,10)==12)
                {
                    value1=parseInt(value1,10)-12;
                }
            }
//            if(PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat]=="PM")
//            {
//                value1=parseInt(value1)+12;
//            }
            this.page.close();
            this.page.operateData.curtime=value1*3600+value2*60;//value1+":"+value2+" "+PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat];
            if(PageDateSettingSysinputtime.operateData.patentmode==1)
            {
                PageDataSettingSysTime.operateData.curpowerofftime=this.page.operateData.curtime;
            }
            else if(PageDateSettingSysinputtime.operateData.patentmode==2)
            {
                PageDataSettingSysTime.operateData.curpowerofftime=this.page.operateData.curtime;
            }
            model.timerfunc.setStandbyTime(this.page.operateData.curtime);
            $("#setting_sys_inputtime_input1").val("");
            $("#setting_sys_inputtime_input2").val("");
//            hiWebOsFrame.settingssystimestandby.open();
//            hiWebOsFrame.settingssystimestandby.hiFocus();
//            hiWebOsFrame.settingssystimestandby.rewriteDataOnly();
            hiWebOsFrame.settingssystimepoweroff.open();
            hiWebOsFrame.settingssystimepoweroff.hiFocus();
            hiWebOsFrame.settingssystimepoweroff.rewriteDataOnly();
            SetRecentUse("Time",4,SYSTEM_TIME);
        }
        else if(this.page.data.operateData.curparent==2)//date
        {
            //todo to set the system time
            //
//            if(value2.length<2)
//            {
//                value2="0"+value2;
//            }
            if(PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat]=="PM")
            {
                if(parseInt(value1,10)<12)
                {
                    value1=parseInt(value1,10)+12;
                }
            }
            else
            {
                if(parseInt(value1,10)==12)
                {
                    value1=parseInt(value1,10)-12;
                }

            }
//            if(PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat]=="PM")
//            {
//                value1=parseInt(value1)+12;
//            }
            this.page.close();
            $("#setting_sys_inputtime_input1").val("");
            $("#setting_sys_inputtime_input2").val("");
            PageDataSettingTimedate.operateData.curtime=value1+":"+value2;//+" "+PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat];
            PageDataSettingTimedate.operateData.AmPmflag=PageDateSettingSysinputtime.operateData.curformat;
            PageDataSettingSysTime.operateData.curtime=value1+":"+value2;
            //SettingTimeSetSysUTC(PageDataSettingSysTime.operateData.curdate,PageDataSettingSysTime.operateData.curtime,0,false);
            SettingTimeSetLocaltime(PageDataSettingSysTime.operateData.curdate,PageDataSettingSysTime.operateData.curtime);
            hiWebOsFrame.settingssystimedate.rewriteDataOnly();
            hiWebOsFrame.settingssystimedate.open();
            hiWebOsFrame.settingssystimedate.hiFocus();
            SetRecentUse("Time",4,SYSTEM_TIME);
        }
        else if(this.page.data.operateData.curparent==3||this.page.data.operateData.curparent==4)
        {
//            if((""+value2).length<2)
//            {
//                value2="0"+value2;
//            }
             try
             {
            if(PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat]=="PM")
            {
                if(parseInt(value1,10)<12)
                {
                    value1=parseInt(value1,10)+12;
                }
            }
            else
            {
                if(parseInt(value1,10)==12)
                {
                    value1=parseInt(value1,10)-12;
                }
            }
            if(PageDateSettingSysinputtime.operateData.curparent==3)

            {
                PageDataSettingSysBlocktime.operateData.curstarttime=value1*3600+value2*60;//value1+":"+value2+" "+PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat];
                model.parentlock.setStart(PageDataSettingSysBlocktime.operateData.curstarttime);

            }
            else if(PageDateSettingSysinputtime.operateData.curparent==4)
            {
                PageDataSettingSysBlocktime.operateData.curendtime=value1*3600+value2*60;//value1+":"+value2+" "+PageDateSettingSysinputtime.operateData.timefomat[PageDateSettingSysinputtime.operateData.curformat];
                model.parentlock.setEnd(PageDataSettingSysBlocktime.operateData.curendtime);

            }

            this.page.close();
            $("#setting_sys_inputtime_input1").val("");
            $("#setting_sys_inputtime_input2").val("");
            hiWebOsFrame.settingsysblocktime.open();
            hiWebOsFrame.settingsysblocktime.hiFocus();
            hiWebOsFrame.settingsysblocktime.rewriteDataOnly();
            SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);
             }catch (e)
             {
                 debugPrint(e.message)
             }
        }

    }
}

function settinginputtimeclose() {

    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror")
        hiWebOsFrame.settingsyspwderror.close();
        $("#setting_sys_inputtime_input1").val("");
        $("#setting_sys_inputtime_input2").val("");
        hiWebOsFrame.settingssysinputtime.open();
        hiWebOsFrame.settingssysinputtime.hiFocus();
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
function SettingSysInputTimeCancel()
{
    if(this.page.data.operateData.curparent==0)
    {
        this.page.close();
        $("#setting_sys_inputtime_input1").blur();
        $("#setting_sys_inputtime_input2").blur();
        /*hiWebOsFrame.settingssystime.open();
        hiWebOsFrame.settingssystime.hiFocus();
        hiWebOsFrame.settingssystime.rewriteDataOnly();*/
        hiWebOsFrame.settingssystimepoweron.open();
        hiWebOsFrame.settingssystimepoweron.hiFocus();
        hiWebOsFrame.settingssystimepoweron.rewriteDataOnly();
        $("#setting_sys_inputtime_input1").val("");
        $("#setting_sys_inputtime_input2").val("");
//        hiWebOsFrame.settingssystimestandby.open();
//        hiWebOsFrame.settingssystimestandby.hiFocus();

    }
    else if(this.page.data.operateData.curparent==1)
    {
        this.page.close();
        $("#setting_sys_inputtime_input1").blur();
        $("#setting_sys_inputtime_input2").blur();
        hiWebOsFrame.settingssystimepoweroff.open();
        hiWebOsFrame.settingssystimepoweroff.hiFocus();
        hiWebOsFrame.settingssystimepoweroff.rewriteDataOnly();
        $("#setting_sys_inputtime_input1").val("");
        $("#setting_sys_inputtime_input2").val("");
    }
    else if(this.page.data.operateData.curparent==2)
    {
        this.page.close();
        $("#setting_sys_inputtime_input1").blur();
        $("#setting_sys_inputtime_input2").blur();
        $("#setting_sys_inputtime_input1").val("");
        $("#setting_sys_inputtime_input2").val("");
        hiWebOsFrame.settingssystimedate.open();
        hiWebOsFrame.settingssystimedate.hiFocus();
    }
    else
    {
        this.page.close();
        $("#setting_sys_inputtime_input1").blur();
        $("#setting_sys_inputtime_input2").blur();
        $("#setting_sys_locktime_input1").val("");
        $("#setting_sys_locktime_input2").val("");
        hiWebOsFrame.settingsysblocktime.open();
        hiWebOsFrame.settingsysblocktime.hiFocus();
    }
}
