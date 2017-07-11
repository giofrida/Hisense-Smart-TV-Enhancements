/**
 * Created by Administrator on 14-6-18.
 */
function getSettingCecDevPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_cecdev_list1_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_cecdev_list1_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
//                    "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },
            "handler": {
                "befEnterHandler": "SettingSysCecDevEnHandler",
                "aftEscHandler": "SettingSysCecDevEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_cecdev_list1_txt1",
                    "description": "",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_cecdev_list1_txt2",
                    "description": "",
                    "CaEType": "span"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_cecdev_list1_txt1", "setting_sys_cecdev_list1_txt2"],
                "PageSize":3

            }
        }
    ]
    return PageDataSettingSysCecDev;

}
var PageDataSettingSysCecDev={

    "setting_sys_cecdev_list1_title":{Data:"Device 1"},
    "setting_sys_cecdev_list1_ul1": {Data:[
        {
            "setting_sys_cecdev_list1_txt1": {Data:"standby"},
            "setting_sys_cecdev_list1_txt2": {Data:""}
        },
        {
            "setting_sys_cecdev_list1_txt1": {Data:"power on"},
            "setting_sys_cecdev_list1_txt2": {Data:""}
        },
        {
            "setting_sys_cecdev_list1_txt1": {Data:"ARC control"},
            "setting_sys_cecdev_list1_txt2": {Data:"on"}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        "parentdevindex":0,
        "curdevlist":{
            "name":"",
            "type":0,
            "operlist":["Standby","Start","Device Root Menu"],
            "arc":false
        }

    },
    "langData":{
        "Standby": ["Standby","Veille","En espera"],
        "Start": ["Start","Démarrer","Comienzo"],
        "Device Root Menu": ["Device Root menu","Menu racine du périphérique","Menú raíz del dispositivo"],
        "ARC": ["ARC","ARC","ARC"],
        "On":["On","Ein","Acceso","Ligado","Encendido","Activé","På","På","Til","Päällä"],
        "Off":["Off","Aus","Spento","Desligado","Apagado","Désactivé","Av","Av","Fra","Pois päältä"]

    },
    rewrite:function(pageData){
        var element={};
        pageData.setting_sys_cecdev_list1_title.Data=pageData.operateData.curdevlist.name;
        pageData.setting_sys_cecdev_list1_ul1.Data=[];
        $.each(pageData.operateData.curdevlist.operlist, function (k, v) {
            element.setting_sys_cecdev_list1_txt1={};
            element.setting_sys_cecdev_list1_txt2={};
            element.setting_sys_cecdev_list1_txt1.Data= v;
//            if(v.toLowerCase()=="arc"&&pageData.operateData.curdevlist.arc==false)
//            {
//                element.setting_sys_cecdev_list1_txt2.Data="Off";
//            }
//            else  if(v.toLowerCase()=="arc"&&pageData.operateData.curdevlist.arc==true)
//            {
//                element.setting_sys_cecdev_list1_txt2.Data="On";
//            }
//            else {
                element.setting_sys_cecdev_list1_txt2.Data="";
//            }
            pageData.setting_sys_cecdev_list1_ul1.Data.push(_cloneObj(element));
        })

        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_cec_txt2").css("float","right");
//            $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
//            $(".setting_select_langpage2").css("float","left");
//            $(".setting_select_langpage3").css("float","left");
//
//            $(".setting_select_lang_focus").css("float","right")
//            $(".setting_select_langpage4").css("float","right")
//            $(".setting_select_lang_disable").css("float","right");
//            $(".setting_sys_lang1__cls").css("left","510px");
        }
        else {
            $(".setting_sys_cec_txt2").css("float","left");
//            $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
//            $("#setting_sys_list1_srcobar_container").css("float","left");
//            $(".setting_select_langpage2").css("float","right");
//            $(".setting_select_langpage3").css("float","right");
//
//            $(".setting_select_lang_focus").css("float","left");
//            $(".setting_select_langpage4").css("float","left");
//            $(".setting_select_lang_disable").css("float","left")
//            $(".setting_sys_lang1__cls").css("left","358px");
    }
    }
};

function SettingCecDevPageonDestroy()
{
    hiWebOsFrame.settingssyscecdev=null;
}
function SettingSysCecDevEnHandler()
{
    if(PageDataSettingSysCecDev.operateData.curdevlist.operlist[this.SelectedIndex].toLowerCase()=="standby")
    {
        //todo
        SettingDoCECoper(PageDataSettingSysCecDev.operateData.curdevlist.type,0);
       //change for arc device,to rfresh the state
//        if(PageDataSettingSysCecDev.operateData.curdevlist.type==5)
//        {
//            var status=model.cec.getHdmiDevicesArcState();
//            if(status==1)
//            {
//                PageDataSettingSysCecDev.operateData.curdevlist.arc=true;
//                PageDateSettingSysCec.operateData.curdevlist[PageDataSettingSysCecDev.operateData.parentdevindex].arc=true;
//
//            }
//            else{
//                PageDataSettingSysCecDev.operateData.curdevlist.arc=false;
//                PageDateSettingSysCec.operateData.curdevlist[PageDataSettingSysCecDev.operateData.parentdevindex].arc=false;
//
//            }
//        }
       
    }
    else if(PageDataSettingSysCecDev.operateData.curdevlist.operlist[this.SelectedIndex].toLowerCase()=="start")
    {
        SettingDoCECoper(PageDataSettingSysCecDev.operateData.curdevlist.type,1);
        
    }
//    else if(PageDataSettingSysCecDev.operateData.curdevlist.operlist[this.SelectedIndex].toLowerCase()=="arc")
//    {
//        if(PageDataSettingSysCecDev.operateData.curdevlist.arc)
//        {
//            SettingDoCECoper(PageDataSettingSysCecDev.operateData.curdevlist.type,2);
//          //  PageDataSettingSysCecDev.operateData.curdevlist.arc=false;
//          //  PageDateSettingSysCec.operateData.curdevlist[PageDataSettingSysCecDev.operateData.parentdevindex].arc=false;
//        }
//        else {
//            SettingDoCECoper(PageDataSettingSysCecDev.operateData.curdevlist.type,3);
//          //  PageDataSettingSysCecDev.operateData.curdevlist.arc=true;
//         //   PageDateSettingSysCec.operateData.curdevlist[PageDataSettingSysCecDev.operateData.parentdevindex].arc=true;
//        }

  //  }
    if(PageDataSettingSysCecDev.operateData.curdevlist.operlist[this.SelectedIndex].toLowerCase()=="device root menu")
    {
        //todo
        SettingDoCECoper(PageDataSettingSysCecDev.operateData.curdevlist.type,4);
        settingOnDestroyCallback(hiWebOsFrame.settingsFirst.origin);
        closePagesOrModuleByPage(hiWebOsFrame.settingsFirst);
    }
    this.page.rewriteDataOnly();
    SetRecentUse("HDMI & CEC Function",4,RECENT_CEC);
}
function SettingSysCecDevEscHandler()
{
    this.page.close();
    hiWebOsFrame.settingssyscec.open();
    hiWebOsFrame.settingssyscec.hiFocus();
}
function SettingDoCECoper(name,type)
{
    try
    {
    debugPrint("SettingDoCECoper"+name+":"+type);
    if(type==0)//standby
    {
        model.cec.HdmiDevicesOperate(name,0);
    }
    else if(type==1)//power on
    {
        model.cec.HdmiDevicesOperate(name,1);
    }
//    else if(type==2)//arc ctrl off
//    {
//        model.cec.HdmiDevicesOperate(name,2);
//    }
//    else if(type==3)//arc ctrl on
//    {
//        model.cec.HdmiDevicesOperate(name,3);
//    }
    else if(type==4)//DEVICE  root menu
    {
        model.cec.HdmiDevicesOperate(name,4);
    }
    }catch (e)
    {debugE(e.message)}
}