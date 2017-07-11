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
   "setting_about_ver1_str1":{Data:"Software Version:"},
    "setting_about_ver1_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver2_str1":{Data:"Service Code:"},
//    "setting_about_ver2_str2":{Data:"V1.00.00.00"},
//    "setting_about_ver3_str1":{Data:"Software Version:"},
//    "setting_about_ver3_str2":{Data:"V1.00.00.00"},
    "setting_about_ver_btn1":{Data:"OK"},
    "operateData": {
       // "curstr1":"package:",
      //  "curver1":"V1.00.00.00",
      //  "curstr2":"Main system:",
     //   "curver2":"V1.00.00.00",
        "curver3":"V1.00.00.00"

    },
    "langData":{
        "System Info": ["System Info","Information du système","Información del sistema"],
        "View System information.": ["View System information.","Afficher les informations système.","Ver información del sistema."],
       // "Service No.:": ["Service No","Pas de service","Número de servicio"],
       // "Service Code:": ["Service Code","Code de service","Código de servicio"],
        "Software Version:": ["Software Version","Version du logiciel","Versión de software"],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK","确认"]

    },
    rewrite:function(pageData){
    //    pageData.setting_about_ver1_str1.Data=pageData.operateData.curstr1;
    //    pageData.setting_about_ver1_str2.Data=pageData.operateData.curver1;
    //    pageData.setting_about_ver2_str1.Data=pageData.operateData.curstr2;
   //     pageData.setting_about_ver2_str2.Data=pageData.operateData.curver2;
   //     pageData.setting_about_ver3_str1.Data=pageData.operateData.curstr3;
        pageData.setting_about_ver1_str2.Data=pageData.operateData.curver3;

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
    try{
     //   PageDateSettingAbVer.operateData.curver1=model.system.getServiceCode();
     //   PageDateSettingAbVer.operateData.curver2=model.system.getServiceNo();
        PageDateSettingAbVer.operateData.curver3=model.softupdate.getCurrentPacket();
     //   debugPrint("getServiceNo"+PageDateSettingAbVer.operateData.curver1);
     //   debugPrint("getServiceCode"+PageDateSettingAbVer.operateData.curver2);
        debugPrint("getCurrentPacket"+PageDateSettingAbVer.operateData.curver3);
    }
    catch(e)
    {
        debugPrint(e.message);
    }
}