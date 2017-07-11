/**
 * Created by Administrator on 14-6-18.
 */


function getSettingUsermodePageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_mode_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_mode_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "settingModelLiNormal", "focus": "settingModelLiFocus"
            },
//                    "classes": {
//                        "normal": "listNormal", "focus": "listFocus", "disable": "listDisable", "selected": "listSelected"
//                    },
            "handler": {
                "aftEnterHandler": "SettingUsrModeENHandler",
                "aftEscHandler": "SettingUsrModeEscHandler"
            },
            oriCaE: [

                {
                    "id": "setting_sys_mode_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_mode_img1",
                    "description": "图片",
                    "CaEType": "img"
                },
                {
                    "id": "setting_sys_mode_txt2",
                    "description": "discription",
                    "CaEType": "div"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_mode_txt1", "setting_sys_mode_img1", "setting_sys_mode_txt2"]

            }
        }
    ];
    return PageDataSettingSysMode;
}


var PageDataSettingSysMode = {
    "setting_sys_mode_title":{Data:"Use Mode"},
    "setting_sys_mode_ul1": {Data:[
        {
            "setting_sys_mode_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mode_txt1": {Data:"Home Mode"},
            "setting_sys_mode_txt2":{Data:"For use at home. Provides balanced energy consumption and processing power with minimal loss to Picture and sound quality."}
        },
        {
            "setting_sys_mode_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mode_txt1": {Data:"Store Mode"},
            "setting_sys_mode_txt2":{Data:"For store use. Provides a fast and easy understanding of the TV's features and functions."}
        },
        {
            "setting_sys_mode_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mode_txt1": {Data:"Premium Mode"},
            "setting_sys_mode_txt2":{Data:"For use at home. Provides you with the best image display and sound processing possible."}
        }

    ],
    "SelectedIndex":0},
    "operateData": {
        "curselect":0

    },
    "langData":{
        "Store Mode":[],
        "Use Mode": ["Use Mode","Utiliser Mode","Modo de uso"],
        "Home Mode": ["Home Mode","Mode maison","Modo doméstico"],
     //   "Recommended mode for the Home use and low power consumption": ["Recommended mode for the Home use and low power consumption","Mode recommandé pour la maison et pour une faible consommation d'énergie","Modo recomendado para el uso en el hogar y de bajo consumo de energía"],
     //   "Store Mode": ["Store Mode","Mode magasin","Modo de almacenamiento"],
     //   "Optimizes the picture for store environments": ["Optimizes the picture for store environments","Optimise l'image pour les environnements commerciaux","Optimiza la imagen para entornos de almacenamiento"],
      //  "Set the TV to use in Home or Store Mode.": ["Set the TV to use in Home or Store Mode.","Configurez votre téléviseur pour une utilisation à la maison ou dans un magasin.","Configurar el televisor para utilizar en el modo doméstico o de almacenamiento."],
      //  "In Home Mode, your TV will automatically adjust the brightness of your screen based on the ambient light in the room.":[],
      //  "Retail mode provides an overview of the key features and functionalities of the TV.":[],
        "User Mode":[],
        "Premium Mode":["Premium Mode","Premium-Modus","Modalità Premium","Modo Premium","Modo premium","Mode Premium","Premiummodus","Premiumläge","Premium-tilstand","Ensisijainen tila","优化模式"],
      //  "Home model default settings are recommended for in-home use.ENERGY ATAR qualified.":["Home model default settings are recommended for in-home use.ENERGY ATAR qualified.","",""],
      //  "Display the best image un home environment, but the energy consumption is high":["Premium model default settings are recommended for in-home use.ENERGY ATAR qualified.","",""]
        "For store use. Provides a fast and easy understanding of the TV's features and functions.":[],
        "For use at home. Provides you with the best image display and sound processing possible.":[],
        "For use at home. Provides balanced energy consumption and processing power with minimal loss to Picture and sound quality.":[]
    },
    rewrite:function(pageData){
//        pageData.setting_sys_mode_title.Data=pageData.langData.title[langIdx];
        $.each( pageData.setting_sys_mode_ul1.Data, function (k, v) {
//            v.setting_sys_mode_txt1.Data=pageData.langData.strlist[k].name[langIdx];
//            v.setting_sys_mode_txt2.Data=pageData.langData.strlist[k].discription[langIdx];
            if(k==pageData.operateData.curselect)
            {
                v.setting_sys_mode_img1.Data="img/selectedBall.png";
            }
            else
            {
                v.setting_sys_mode_img1.Data="img/unselectedBall.png";
            }
        })

    }

};

function SettingUsermodePageOnDestroy()
{
    hiWebOsFrame.settingssysmode=null;
}
function SettingUsrModeENHandler()
{
    //todo set
    SetUserMode(this.SelectedIndex);
    this.page.operateData.curselect=this.SelectedIndex;
    this.page.rewriteDataOnly();
   // setTimeout(closelusermodepage,1000);
    SetRecentUse("Use Mode",4,RECNT_AD);
}
function closelusermodepage()
{
    debugE("inthe closelusermodepage")
    try
    {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingssysmode.close();
        PageDataSettingSysAd.operateData.curmodeselect=PageDataSettingSysMode.operateData.curselect;
        hiWebOsFrame.settingsFirst.rewriteDataOnly();   //add by ghl, rewrite pic_mode
        hiWebOsFrame.settingssysad.open();
        hiWebOsFrame.settingssysad.hiFocus()
        hiWebOsFrame.settingssysad.rewriteDataOnly();
    }
    else
    {
        hiWebOsFrame.settingssysmode.close();
    }
    }catch (e)
    {debugE(e.message)}
}
function SettingUsrModeEscHandler()
{
    this.page.close();
    PageDataSettingSysAd.operateData.curmodeselect=this.page.operateData.curselect;

    hiWebOsFrame.settingsFirst.rewriteDataOnly();   //add by ghl, rewrite pic_mode
    hiWebOsFrame.settingssysad.open();
    hiWebOsFrame.settingssysad.hiFocus()
    hiWebOsFrame.settingssysad.rewriteDataOnly();
}
function SetUserMode(type)
{
    if(type<3&&type>=0)
    {
        model.system.setUserMode(type);
        if(type == 1){ //store mode
            startRetailmodeTimer(true);
            startePos(true);
            model.video.setEnumPictureMode(1);//vivid   //new 0-> dynamic
        }else if(0 == type){    //UserMode
            startRetailmodeTimer(false);
            model.video.setEnumPictureMode(0);//energy saving //new 3->0 standard
        } else {    //PremiumMode
            startRetailmodeTimer(false);
            model.video.setEnumPictureMode(2);//energy saving //new 3->0 Natural
        }

        RefreshPicAboutAftSetUserMode();
    }
}