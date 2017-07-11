/**
 * Created by Administrator on 14-6-18.
 */
function getSettingAdVerPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_about_ver_text",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_about_ver1_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_about_ver1_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_about_ver2_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_about_ver2_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_about_ver3_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_about_ver3_str2",
            "description": "",
            "CaEType": "div"
        },
//        {
//            "id": "setting_about_ver4_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver4_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver5_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver5_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver6_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver6_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver7_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver7_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver8_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver8_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver9_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_about_ver9_str2",
//            "description": "",
//            "CaEType": "div"
//        },
        {
            "id":"setting_about_ver_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button1_normal", "focus": "setting_sys_button1_focus"
            },
//                    "nav": { "rightTo":"setting_sys_nav_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingAboutVerHandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingAboutVerHandler"//点击enter事件后处理开关转换

            }

        }

    ];
    getCurrentVer();
    return PageDateSettingAbVer;
}
var PageDateSettingAbVer={
    "setting_about_ver_text":{Data:"System Info"},
    "setting_about_ver1_str1":{Data:"Service No.:"},
    "setting_about_ver1_str2":{Data:"V1.00.00.00"},
    "setting_about_ver2_str1":{Data:"Service Code:"},
    "setting_about_ver2_str2":{Data:"V1.00.00.00"},
    "setting_about_ver3_str1":{Data:"Software Version:"},
    "setting_about_ver3_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver4_str1":{Data:"Standby controller:"},
//    "setting_about_ver4_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver5_str1":{Data:"FRCX:"},
//    "setting_about_ver5_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver6_str1":{Data:"FRCX bootloader:"},
//    "setting_about_ver6_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver7_str1":{Data:"FRCX s19679:"},
//    "setting_about_ver7_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver8_str1":{Data:"FRCX database:"},
//    "setting_about_ver8_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver9_str1":{Data:"NVRAM:"},
//    "setting_about_ver9_str2":{Data:"V1.00.00.00"},
    "setting_about_ver_btn1":{Data:"OK"},
    "operateData": {
        "curstr1":"package:",
        "curver1":"V1.00.00.00",
        "curstr2":"Main system:",
        "curver2":"V1.00.00.00",
//        "curver2":"V1.00.00.00",
        "curver3":"V1.00.00.00"
//        "curver4":"V1.00.00.00"

    },
    "langData":{
        "System Info": ["System Info","Information du système","Información del sistema"],
        "View System information.": ["View System information.","Afficher les informations système.","Ver información del sistema."],
        "Service No.:": ["Service No","Pas de service","Número de servicio"],
        "Service Code:": ["Service Code","Code de service","Código de servicio"],
        "Software Version:": ["Software Version","Version du logiciel","Versión de software"],

//        "Software Version":["Software Version","Software-Version","Versione software","Versão do Software","Versión de software","Version Logiciel","Programvareversjon","Programversion","Software version","Ohjelmistoversio"],
//        "Main system:":["Main system:","",""],
//        "Main Bootloader:":["Main boot:","",""],
//        "package:":["package:","",""],
//        "NVRAM:":["NVRAM:","",""],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK","确认"]

    },
    rewrite:function(pageData){
    //    pageData.setting_about_ver1_str1.Data=pageData.operateData.curstr1;
        pageData.setting_about_ver1_str2.Data=pageData.operateData.curver1;
    //    pageData.setting_about_ver2_str1.Data=pageData.operateData.curstr2;
        pageData.setting_about_ver2_str2.Data=pageData.operateData.curver2;
   //     pageData.setting_about_ver3_str1.Data=pageData.operateData.curstr3;
        pageData.setting_about_ver3_str2.Data=pageData.operateData.curver3;
//        pageData.setting_about_ver4_str1.Data=pageData.operateData.curstr4;
//        pageData.setting_about_ver4_str2.Data=pageData.operateData.curver4;
//        pageData.setting_about_ver5_str1.Data=pageData.operateData.curstr5;
//        pageData.setting_about_ver5_str2.Data=pageData.operateData.curver5;
//        pageData.setting_about_ver6_str1.Data=pageData.operateData.curstr6;
//        pageData.setting_about_ver6_str2.Data=pageData.operateData.curver6;
//        pageData.setting_about_ver7_str1.Data=pageData.operateData.curstr7;
//        pageData.setting_about_ver7_str2.Data=pageData.operateData.curver7;
//        pageData.setting_about_ver8_str1.Data=pageData.operateData.curstr8;
//        pageData.setting_about_ver8_str2.Data=pageData.operateData.curver8;
//        pageData.setting_about_ver9_str1.Data=pageData.operateData.curstr9;
//        pageData.setting_about_ver9_str2.Data=pageData.operateData.curver9;
//



//        pageData.setting_about_ver2_str2.Data=pageData.operateData.curver2;
//        pageData.setting_about_ver3_str2.Data=pageData.operateData.curver3;
//        pageData.setting_about_ver4_str2.Data=pageData.operateData.curver4;
//        pageData.setting_about_ver_btn1.Data=pageData.langData.ok[langIdx];

    }
};

function SettingAdVerPageonDestroy()
{
    hiWebOsFrame.settingsaboutver = null;
}
function SettingAboutVerHandler()
{
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    this.page.close();
    this.page.destroy();
    SetRecentUse("System Info",5,0);

}
function getCurrentVer()
{
    //debugPrint("to get current version");
//        var temp=model.softupdate.getNewPacketList();
//    debugPrint("????new packet list  "+temp);
   // PageDateSettingAbVer.operateData.curver1
    try{
        PageDateSettingAbVer.operateData.curver1=model.system.getServiceCode();
        PageDateSettingAbVer.operateData.curver2=model.system.getServiceNo();
        PageDateSettingAbVer.operateData.curver3=model.softupdate.getCurrentPacket();
        debugPrint("getServiceNo"+PageDateSettingAbVer.operateData.curver1);
        debugPrint("getServiceCode"+PageDateSettingAbVer.operateData.curver2);
        debugPrint("getCurrentPacket"+PageDateSettingAbVer.operateData.curver3);
//    var temp;
//    var reg=new RegExp("\t","g");
//    var string=model.serviceMode.getVersioninfos();
//    debugPrint("????current version "+JSON.stringify(string));
//    PageDateSettingAbVer.operateData.curstr1=string[3].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr1);
//    PageDateSettingAbVer.operateData.curstr1+=':';
//    PageDateSettingAbVer.operateData.curver1=string[0].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr2=string[11].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr2);
//    PageDateSettingAbVer.operateData.curstr2+=':';
//    PageDateSettingAbVer.operateData.curver2=string[8].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr3=string[15].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr3);
//    PageDateSettingAbVer.operateData.curstr3+=':';
//    PageDateSettingAbVer.operateData.curver3=string[12].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr4=string[19].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr4);
//    PageDateSettingAbVer.operateData.curstr4+=':';
//    PageDateSettingAbVer.operateData.curver4=string[16].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr5=string[23].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr5);
//    PageDateSettingAbVer.operateData.curstr5+=':';
//    PageDateSettingAbVer.operateData.curver5=string[20].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr6=string[27].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr6);
//    PageDateSettingAbVer.operateData.curstr6+=':';
//    PageDateSettingAbVer.operateData.curver6=string[24].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr7=string[31].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr7);
//    PageDateSettingAbVer.operateData.curstr7+=':';
//    PageDateSettingAbVer.operateData.curver7=string[28].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr8=string[35].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr8);
//    PageDateSettingAbVer.operateData.curstr8+=':';
//    PageDateSettingAbVer.operateData.curver8=string[32].replace("Version\t","");
//
//    PageDateSettingAbVer.operateData.curstr9=string[39].replace(reg," ").replace("Subsystem","")
//    debugPrint("string"+PageDateSettingAbVer.operateData.curstr9);
//    PageDateSettingAbVer.operateData.curstr9+=':';
//    PageDateSettingAbVer.operateData.curver9=string[36].replace("Version\t","");
    }
    catch(e)
    {
        debugPrint(e.message);
    }
}