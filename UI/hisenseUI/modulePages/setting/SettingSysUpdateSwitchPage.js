/**
 * Created by Administrator on 14-9-12.
 */
function getSettingSysUpdateSwitchData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_update_switch_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_update_switch_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },
//                    "classes": {
//                        "normal": "listNormal", "focus": "listFocus", "disable": "listDisable", "selected": "listSelected"
//                    },
            "handler": {
                "befEnterHandler": "SettingSysUpdateSwitchEnHandler", "aftDownHandler": "SettingSysUpdateSwitchDownHandler",
                "aftUpHandler": "SettingSysUpdateSwitchUpHandler","aftEscHandler": "SettingSysUpdateSwitchEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_update_switch_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_update_switch_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_update_switch_txt1", "setting_sys_update_switch_img1"],
                "PageSize":2

            }
        }
    ];
  //  UpdateSwitchinit()
    return PageDataSettingUpdateSwitch;
}
var PageDataSettingUpdateSwitch={

    "setting_sys_update_switch_title":{Data:"Auto Firmware Upgrade"},
    "setting_sys_update_switch_ul1": {Data:[
        {
            "setting_sys_update_switch_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_update_switch_txt1": {Data:"Off"}
        },
        {
            "setting_sys_update_switch_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_update_switch_txt1": {Data:"On"}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "pagetitlelist":["Auto Firmware Upgrade","Auto OAD Upgrade"],
        "curselectindex":0,
        "curpage":0

    },
    "langData":{
        "Auto OAD Upgrade":[],
        "Auto Firmware Upgrade": [],
        "On":["On","Ein","Acceso","Ligado","Encendido","Activé","På","På","Til","Päällä","开"],
        "Off":["Off","Aus","Spento","Desligado","Apagado","Désactivé","Av","Av","Fra","Pois päältä","关"]

    },
    rewrite:function(pageData){
//        pageData.setting_sys_update_switch_ul1.Data=[];
        pageData.setting_sys_update_switch_title.Data=pageData.operateData.pagetitlelist[pageData.operateData.curpage];
        $.each(pageData.setting_sys_update_switch_ul1.Data, function (k, v) {

            if(pageData.operateData.curselectindex==k)
            {
                pageData.setting_sys_update_switch_ul1.Data[k].setting_sys_update_switch_img1.Data="img/selectedBall.png";
            }
            else
            {
                pageData.setting_sys_update_switch_ul1.Data[k].setting_sys_update_switch_img1.Data="img/unselectedBall.png";
            }
        })
        pageData.setting_sys_update_switch_ul1.SelectedIndex=pageData.operateData.curselectindex;
    }
};

function UpdateSwitchopenHandler()
{
    UpdataSwitchScrollBar(this.data);
    if(PageDataSettingUpdateSwitch.setting_sys_update_switch_ul1.Data.length>5)
    {
        var index=this.page.getCaE("setting_sys_update_switch_ul1").BeginIdx;
        debugPrint("index"+index);
        $("#setting_sys_update_switch_srcollbar").css("top",parseInt(425/PageDataSettingUpdateSwitch.setting_sys_update_switch_ul1.Data.length)*index);
    }
    else
    {   var temp=610-(5-PageDataSettingUpdateSwitch.setting_sys_update_switch_ul1.Data.length)*95;
        $("#setting_sys_update_switch").css("height",temp+'px');
        var height=parseInt((1080-temp)/2)
        $("#setting_sys_update_switch").css("top",height+'px');
    }

}

function SettingSysUpdateSwitchonDestroy()
{
    hiWebOsFrame.settingssysupdateswitch=null;
}
function UpdataSwitchScrollBar(pageData)
{
    var i=pageData.setting_sys_update_switch_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_update_switch_srcollbar").css("height",temp);
        $("#setting_sys_update_switch_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_update_switch_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);

 }

function SettingSysUpdateSwitchEnHandler()
{
    hiWebOsFrame.lockAllKeys("setting");
    this.page.operateData.curselectindex=this.SelectedIndex;
    //todo
    if(PageDataSettingUpdateSwitch.operateData.curpage==0)
    {
        PageDataFirstCls.operateData.curupdateswitch=this.page.operateData.curselectindex;
        if(PageDataFirstCls.operateData.curupdateswitch==0)
        {
            model.softupdate.setAutoAnnouncementEnabled(0);
        }
        else{
            model.softupdate.setAutoAnnouncementEnabled(1);
        }
        hiWebOsFrame.settingssysupdateswitch.rewriteDataOnly();
        SetRecentUse("Auto Firmware Upgrade",5,2);
        setTimeout(closeswitchpage,500);

    }
    else
    {
        // to the oad switch
        PageDataFirstCls.operateData.curoadsitch=this.page.operateData.curselectindex;
        if(PageDataFirstCls.operateData.curoadsitch==0)
        {
            model.softupdate.setOadAutoUpdateEnabled(0);
            debugPrint("set the oad switch 0");
        }else
        {
            model.softupdate.setOadAutoUpdateEnabled(1);
            debugPrint("set the oad switch 1");
        }

        hiWebOsFrame.settingssysupdateswitch.rewriteDataOnly();
        SetRecentUse("Auto OAD Upgrade",5,4);
        setTimeout(closeswitchpage,500);
    }

}
function closeswitchpage()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingssysupdateswitch.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.settingsFirst.rewriteDataOnly();
        hiWebOsFrame.settingssysupdateswitch.destroy();
        hiWebOsFrame.unLockAllKeys("setting");
    }
    else
    {
        hiWebOsFrame.settingssysupdateswitch.close();
        hiWebOsFrame.settingssysupdateswitch.destroy();
        hiWebOsFrame.unLockAllKeys("setting");
    }

}
function SettingSysUpdateSwitchEscHandler()
{
    this.page.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
    hiWebOsFrame.settingssysupdateswitch.destroy();

}
function SettingSysUpdateSwitchUpHandler()
{
    var temp=PageDataSettingUpdateSwitch.setting_sys_update_switch_ul1.Data.length;
    if(PageDataSettingUpdateSwitch.setting_sys_update_switch_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
    {
        var temp=this.SelectedIndex*PageDataSettingUpdateSwitch.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_sys_update_switch_srcollbar").css("top",temp);

    }
}
function SettingSysUpdateSwitchDownHandler()
{
    if(this.SelectedIndex < PageDataSettingUpdateSwitch.setting_sys_update_switch_ul1.Data.length&&this.SelectedIndex>4)
    {

        var temp=(this.SelectedIndex-4)*PageDataSettingUpdateSwitch.operateData.step;
        $("#setting_sys_update_switch_srcollbar").css("top",temp);

    }
}

function UpdateSwitchinit()
{
    //todo to get the country list and selectindex
    try
    {
        if(PageDataSettingUpdateSwitch.operateData.curpage==0)
        {
            var temp=model.softupdate.getAutoAnnouncementEnabled();
            if(temp==1)
            {
                PageDataSettingUpdateSwitch.operateData.curselectindex=1;
                debugPrint("the ota switch is on");
            }
            else
            {
                PageDataSettingUpdateSwitch.operateData.curselectindex=0;
                debugPrint("the  ota switch is off");
            }
        }
        else  if(PageDataSettingUpdateSwitch.operateData.curpage==1)
        {
            //todo to get the oad switch
            var temp=model.softupdate.getOadAutoUpdateEnabled();
            if(temp==1)
            {
                PageDataSettingUpdateSwitch.operateData.curselectindex=1;
                debugPrint("the ota switch is on");
            }
            else
            {
                PageDataSettingUpdateSwitch.operateData.curselectindex=0;
                debugPrint("the  ota switch is off");
            }
           // PageDataSettingUpdateSwitch.operateData.curselectindex=PageDataFirstCls.operateData.curoadsitch;
        }
    }catch (e)
    {
        debugPrint(e);
    }
}