/**
 * Created by Administrator on 14-6-18.
 */

function getSettingAgelodkPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_agelock_title",
            "description": "setting head",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_agelock_rarrow",
            "description": "setting head",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_agelock_larrow",
            "description": "setting head",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_agelock_ul1",//在页面中的按钮或者组件容器Id
            "description": "用于显示语言列表",
            "CaEType": "GridUl",
            //  "LineNum":2,
            "disable": false,
            "SelectedIndex": 0,
            "classes": {
                "normal": "languageGridLiNormal", "focus": "languageGridLiFocus"
            },
            "nav":{
                // "enterTo":"languagePageFootSBtn"
            },
            "handler": {
                "aftEnterHandler": "SettingSysAgeLockEnter",
                "aftLeftHandler": "SettingSysAgeLockLeft",
                "aftRightHandler": "SettingSysAgeLockRight",
                "aftEscHandler": "SettingSysAgeLockEsc"

            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "setting_sys_agelock_img1",
                    "description": "选择图片",
                    "CaEType": "img"

                },
                {
                    "id": "setting_sys_agelock_txt1",
                    "description": "城市名称",
                    "CaEType": "span"

                }
            ],
            "GridUlConfig": {
                "GridUlDataItem": [ "setting_sys_agelock_img1", "setting_sys_agelock_txt1"],
                "LineNum":2,
                "PageSize":12,
                "FlipType":'HOR'
//                        "SelectedIndex": 0
            }
        }


    ];
   // debugPrint("agelock selec index "+PageDataSettingSysAgeLock.operateData.curselectindex)
    PageDataSettingSysAgeLock.operateData.curselectindex=hiWebOsFrame.settingssyssecurity.data.operateData.curchildlock;
    return PageDataSettingSysAgeLock
}
var PageDataSettingSysAgeLock={
    "setting_sys_agelock_title":{Data:"Age-related lock"},
    "setting_sys_agelock_rarrow":{Data:"img/right_arrow.png"},
    "setting_sys_agelock_larrow":{Data:"img/left_arrow.png"},
    "setting_sys_agelock_ul1":{Data: [
        {
            "setting_sys_agelock_img1": {Data:"img/selectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"none"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"3 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"4 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"5 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"6 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"7 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"8 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"9 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"10 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"11 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"12 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"13 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"14 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"15 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"16 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"17 years"}
        },
        {
            "setting_sys_agelock_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_agelock_txt1": {Data:"18 years"}
        }

    ],
        "SelectedIndex":0

    },
    "operateData": {
        "agelist": ["None","Age 3","Age 4","Age 5","Age 6","Age 7","Age 8","Age 9","Age 10","Age 11","Age 12","Age 13","Age 14","Age 15","Age 16","Age 17","Age 18"],
        "curselectindex":0
    },
    "langData":{
        "Age-related lock":["Age-related lock","Altersabhängige Sperre","Blocco correlato all'età","Bloqueio associado à idade","Bloquear según la edad","Verrouillage relatif à l'âge","Aldersbestemt låsing","Ålderslås","Aldersrelateret lås","Ikään liittyvä lukitus","年龄锁"],
        "None":["None","Ohne","Nessuno","Nenhum","Ninguno","Aucun","Ingen","Inget","Ingen","Ei "],
        "Age 3":["Age 3","Alter 3 Jahre","3 anni","Idade 3","Edad 3","Age 3 ans","3 år","3 år","Alder 3","Ikä 3"],
        "Age 4":["Age 4","Alter 4 Jahre","4 anni","Idade 4","Edad 4","Age 4 ans","4 år","4 år","Alder 4","Ikä 4"],
        "Age 5":["Age 5","Alter 5 Jahre","5 anni","Idade 5","Edad 5","Age 5 ans","5 år","5 år","Alder 5","Ikä 5"],
        "Age 6":["Age 6","Alter 6 Jahre","6 anni","Idade 6","Edad 6","Age 6 ans","6 år","6 år","Alder 6","Ikä 6"],
        "Age 7":["Age 7","Alter 7 Jahre","7 anni","Idade 7","Edad 7","Age 7 ans","7 år","7 år","Alder 7","Ikä 7"],
        "Age 8":["Age 8","Alter 8 Jahre","8 anni","Idade 8","Edad 8","Age 8 ans","8 år","8 år","Alder 8","Ikä 8"],
        "Age 9":["Age 9","Alter 9 Jahre","9 anni","Idade 9","Edad 9","Age 9 ans","9 år","9 år","Alder 9","Ikä 9"],
        "Age 10":["Age 10","Alter 10 Jahre","10 anni","Idade 10","Edad 10","Age 10 ans","10 år","10 år","Alder 10","Ikä 10"],
        "Age 11":["Age 11","Alter 11 Jahre","11 anni","Idade 11","Edad 11","Age 11 ans","11 år","11 år","Alder 11","Ikä 11"],
        "Age 12":["Age 12","Alter 12 Jahre","12 anni","Idade 12","Edad 12","Age 12 ans","12 år","12 år","Alder 12","Ikä 12"],
        "Age 13":["Age 13","Alter 13 Jahre","13 anni","Idade 13","Edad 13","Age 13 ans","13 år","13 år","Alder 13","Ikä 13"],
        "Age 14":["Age 14","Alter 14 Jahre","14 anni","Idade 14","Edad 14","Age 14 ans","14 år","14 år","Alder 14","Ikä 14"],
        "Age 15":["Age 15","Alter 15 Jahre","15 anni","Idade 15","Edad 15","Age 15 ans","15 år","15 år","Alder 15","Ikä 15"],
        "Age 16":["Age 16","Alter 16 Jahre","16 anni","Idade 16","Edad 16","Age 16 ans","16 år","16 år","Alder 16","Ikä 16"],
        "Age 17":["Age 17","Alter 17 Jahre","17 anni","Idade 17","Edad 17","Age 17 ans","17 år","17 år","Alder 17","Ikä 17"],
        "Age 18":["Age 18","Alter 18 Jahre","18 anni","Idade 18","Edad 18","Age 18 ans","18 år","18 år","Alder 18","Ikä 18"]


    },
    rewrite:function(pageData){
        var element={};
        //  pageData.setting_sys_agelock_title.Data=pageData.langData.agetranslist.title[langIdx];
        pageData.setting_sys_agelock_ul1.Data=[];
        $.each(pageData.operateData.agelist, function (k, v) {
            element.setting_sys_agelock_img1={};
            element.setting_sys_agelock_txt1={};
            element.setting_sys_agelock_img1.Data="img/unselectedBall.png";
            element.setting_sys_agelock_txt1.Data= v;
            pageData.setting_sys_agelock_ul1.Data.push(_cloneObj(element));
        })
        //    if(!!pageData.operateData.curselectindex)
        //   {
        pageData.setting_sys_agelock_ul1.Data[pageData.operateData.curselectindex].setting_sys_agelock_img1.Data="img/selectedBall.png";
        pageData.setting_sys_agelock_ul1.SelectedIndex=pageData.operateData.curselectindex;
       // debugPrint("agelock selectindex???????? "+PageDataSettingSysAgeLock.operateData.curselectindex)
        //    }

//        if(pageData.operateData.curselectindex<12)
//        {
//            $("#setting_sys_agelock_larrow").css("visibility","hidden");
//            $("#setting_sys_agelock_rarrow").css("visibility","visible");
//
//        }
//        else
//        {
//            $("#setting_sys_agelock_larrow").css("visibility","visible");
//            $("#setting_sys_agelock_rarrow").css("visibility","hidden");
//        }

    }

};

function SettingAgelodkPageonDestroy()
{
    hiWebOsFrame.settingssysagelock=null;
}
function SettingSysAgeLockEnter()
{
    this.page.operateData.curselectindex=this.SelectedIndex;
    this.page.rewriteDataOnly();
    SetRecentUse("Security",4,4);
}
function SettingSysAgeLockEsc()
{
    this.page.close();
    //todo js set
    SetAgeLock(this.page.operateData.curselectindex)
    PageDataSettingSysSecurity.operateData.curchildlock=this.page.operateData.curselectindex;
    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();
    hiWebOsFrame.settingssyssecurity.rewriteDataOnly();
}
function SettingSysAgeLockLeft()
{
    if(this.data.setting_sys_agelock_ul1.Data.length>12)
    {
        if(this.getCaE("setting_sys_agelock_ul1").getFirstPageFlag())
        {
            $("#setting_sys_agelock_larrow").css("visibility","hidden");
            $("#setting_sys_agelock_rarrow").css("visibility","visible");

        }
        else if(this.getCaE("setting_sys_agelock_ul1").getLastPageFlag())
        {
            $("#setting_sys_agelock_larrow").css("visibility","visible");
            $("#setting_sys_agelock_rarrow").css("visibility","hidden");
        }
        else
        {
            $("#setting_sys_agelock_larrow").css("visibility","visible");
            $("#setting_sys_agelock_rarrow").css("visibility","visible");
        }

    }
    else{
        $("#setting_sys_agelock_larrow").css("visibility","hidden");
        $("#setting_sys_agelock_rarrow").css("visibility","hidden");
    }
//    if(this.SelectedIndex<12)
//    {
//        $("#setting_sys_agelock_larrow").css("visibility","hidden");
//        $("#setting_sys_agelock_rarrow").css("visibility","visible");
//
//    }
//    else
//    {
//        $("#setting_sys_agelock_larrow").css("visibility","visible");
//        $("#setting_sys_agelock_rarrow").css("visibility","hidden");
//    }

}
function SettingSysAgeLockRight()
{
    if(this.data.setting_sys_agelock_ul1.Data.length>12)
    {
        if(this.getCaE("setting_sys_agelock_ul1").getFirstPageFlag())
        {
            $("#setting_sys_agelock_larrow").css("visibility","hidden");
            $("#setting_sys_agelock_rarrow").css("visibility","visible");

        }
        else if(this.getCaE("setting_sys_agelock_ul1").getLastPageFlag())
        {
            $("#setting_sys_agelock_larrow").css("visibility","visible");
            $("#setting_sys_agelock_rarrow").css("visibility","hidden");
        }
        else
        {
            $("#setting_sys_agelock_larrow").css("visibility","visible");
            $("#setting_sys_agelock_rarrow").css("visibility","visible");
        }
    }
    else{
        $("#setting_sys_agelock_larrow").css("visibility","hidden");
        $("#setting_sys_agelock_rarrow").css("visibility","hidden");
    }
//    if(this.SelectedIndex<12)
//    {
//        $("#setting_sys_agelock_larrow").css("visibility","hidden");
//        $("#setting_sys_agelock_rarrow").css("visibility","visible");
//
//    }
//    else
//    {
//        $("#setting_sys_agelock_larrow").css("visibility","visible");
//        $("#setting_sys_agelock_rarrow").css("visibility","hidden");
//    }
}
function AgelockOpenHandler()
{
    if(this.data.setting_sys_agelock_ul1.Data.length>12)
    {
        if(this.getCaE("setting_sys_agelock_ul1").getFirstPageFlag())
        {
            $("#setting_sys_agelock_larrow").css("visibility","hidden");
            $("#setting_sys_agelock_rarrow").css("visibility","visible");

        }
        if(this.getCaE("setting_sys_agelock_ul1").getLastPageFlag())
        {
            $("#setting_sys_agelock_larrow").css("visibility","visible");
            $("#setting_sys_agelock_rarrow").css("visibility","hidden");
        }
    }
    else{
        $("#setting_sys_agelock_larrow").css("visibility","hidden");
        $("#setting_sys_agelock_rarrow").css("visibility","hidden");
    }
}

var agelocklist=[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
function SetAgeLock(ageindex)
{

    var age=agelocklist[ageindex];
    debugPrint("set age lock  "+age);
    if(age==0)//none age lock
    {
        model.parentlock.setAge_related(0);
    }
    else
    {
        model.parentlock.setAge(age);
        model.parentlock.setAge_related(1);
    }

}