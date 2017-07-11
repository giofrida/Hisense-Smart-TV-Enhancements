/**
 * Created by Administrator on 14-9-9.
 */

function getSettingProglockPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_proglock_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_proglock_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_proglock_ctrl_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_proglock_control1",
            "description":"开关控件",
            "classes":
            {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"downTo":"setting_sys_proglock_btn1","upTo": ""},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                "aftDownHandler":"SettingSysprogblockfocus",
                "aftUpHandler":"SettingSysprogblockfocus",
                'aftEnterHandler':'SettingSysProglockCtrlEnter',
                "aftEscHandler": "SettingSysProglockEscHandler"

            }

        },
        {
            "id": "setting_sys_proglock1_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock1_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_proglock_btn2","upTo":"setting_sys_proglock_control1"},
            "handler": {
                "aftDownHandler":"SettingSysprogblockfocus",
                "aftUpHandler":"SettingSysprogblockfocus",
                "aftEnterHandler": "SettingSysProglockBtn1Enter",
                "aftEscHandler": "SettingSysProglockEscHandler"
            }
        },
        {
            "id": "setting_sys_proglock2_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock2_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock_btn2",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_proglock_btn3","upTo":"setting_sys_proglock_btn1"},
            "handler": {
                "aftDownHandler":"SettingSysprogblockfocus",
                "aftUpHandler":"SettingSysprogblockfocus",
                "aftEnterHandler": "SettingSysProglockBtn2Enter",
                "aftEscHandler": "SettingSysProglockEscHandler"
            }
        }
        ,
        {
            "id": "setting_sys_proglock3_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock3_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock_btn3",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_proglock_btn4","upTo":"setting_sys_proglock_btn2"},
            "handler": {
                "aftDownHandler":"SettingSysprogblockfocus",
                "aftUpHandler":"SettingSysprogblockfocus",
                "aftEnterHandler": "SettingSysProglockBtn3Enter",
                "aftEscHandler": "SettingSysProglockEscHandler"
            }
        }
        ,
        {
            "id": "setting_sys_proglock4_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock4_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock_btn4",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_proglock_btn5","upTo":"setting_sys_proglock_btn3"},
            "handler": {
                "aftDownHandler":"SettingSysprogblockfocus",
                "aftUpHandler":"SettingSysprogblockfocus",
                "aftEnterHandler": "SettingSysProglockBtn4Enter",
                "aftEscHandler": "SettingSysProglockEscHandler"
            }
        }
        ,
        {
            "id": "setting_sys_proglock5_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock5_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_proglock_btn5",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "","upTo":"setting_sys_proglock_btn4"},
            "handler": {
                "aftDownHandler":"SettingSysprogblockfocus",
                "aftUpHandler":"SettingSysprogblockfocus",
                "aftEnterHandler": "SettingSysProglockBtn5Enter",
                "aftEscHandler": "SettingSysProglockEscHandler"
            }
        }




    ];
    // SettingTimerinit();
    Proglockinit();
    return PageDataSettingsysProglock;
}
var PageDataSettingsysProglock={

    "setting_sys_proglock_img1":{Data:"img/head_arrow.png"},
    "setting_sys_proglock_text1":{Data:"Program Block"},

    "setting_sys_proglock1_str1":{Data:"US TV Ratings"},
    "setting_sys_proglock1_str2":{Data:""},
    "setting_sys_proglock_btn1":{Data:"Adjust"},

    "setting_sys_proglock2_str1":{Data:"US Movie Ratings"},
    "setting_sys_proglock2_str2":{Data:""},
    "setting_sys_proglock_btn2":{Data:"Adjust"},

    "setting_sys_proglock3_str1":{Data:"Canadian English Ratings"},
    "setting_sys_proglock3_str2":{Data:""},
    "setting_sys_proglock_btn3":{Data:"Adjust"},

    "setting_sys_proglock4_str1":{Data:"Canadian French Ratings"},
    "setting_sys_proglock4_str2":{Data:""},
    "setting_sys_proglock_btn4":{Data:"Adjust"},

    "setting_sys_proglock5_str1":{Data:"Open V-Chip"},
    "setting_sys_proglock5_str2":{Data:""},
    "setting_sys_proglock_btn5":{Data:"Adjust"},

    "setting_sys_proglock_ctrl_str1":{Data:"Block Unrated"},
    "setting_sys_proglock_control1":{Data:{ switchType:true, switchText:''},disable:false},
    "operateData": {
        "curfocuslist":["ustv","usmovie","canadaeng","canadafre","vchio"],
        "curfocus":0,
        "setting_sys_proglock_control1":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "usmovielist":["G","PG","PG-13","R","NC-17","X"],
        "canadaenglist":["C","C8+","G","PG","14+","18+"],
        "canadafrelist":["G","8+","13+","16+","18+"],
        "helplist":[
            {
                "title":"Block Unrated",
                "content":"Block or unblock unrated movies."
            },
            {
                "title":"US TV Ratings",
                "content":"Block certain TV programs by rating."
            },

            {
                "title":"US Movie Ratings",
                "content":"Block certain movies by rating."
            }
            ,

            {
                "title":"Canadian English Ratings",
                "content":"Block certain programs by Canadian English ratings."
            },
            {
                "title":"Canadian French Ratings",
                "content":"Block certain programs by Canadian French ratings."
            },
            {
                "title":"Open V-Chip",
                "content":"Turn this On to automatically block programs based on the US rating."
            }
        ],
        "curusmovieselect":0,
        "curcannadaengselect":1,
        "curcanadafreselect":2

    },
    "langData":{
        "Program Block": [],
        "Block Unrated": [],
        "US TV Ratings": ["US TV Ratings","Classification des programmes télévisés aux États-Unis","Clasificación de TV de EE. UU."],
        "Block certain TV programs by rating.": ["Block certain TV programs by rating.","Bloquez certains programmes télévisés selon leur classification.","Bloquear ciertos programas de televisión por clasificación."],
        "Rating": ["Rating","Classification","Clasificación"],
        "All(A)": ["All(A)","Tout public (A)","Todos(A)"],
        "Suggestive dialog(D)": ["Suggestive dialog(D)","Propos suggestifs (D)","Diálogo insinuante(D)"],
        "Coarse or crude language(L)": ["Coarse or crude language(L)","Langage grossier (L)","Lenguaje grosero o vulgar(L)"],
        "Sexual situations(S)": ["Sexual situations(S)","Situations sexuelles (S)","Situaciones sexuales(S)"],
        "Violence(V)": ["Violence(V)","Violence (V)","Violencia(V)"],
        "Fantasy violence(FV)": ["Fantasy violence(FV)","Violence fantastique (FV)","Violencia de fantasía(FV)"],
        "US Movie Ratings": ["US Movie Ratings","Classification des films aux États-Unis","Clasificación de películas en EE. UU."],
        "Block certain movies by rating.": ["Block certain movies by rating.","Bloquez certains films en fonction de leur classification.","Bloquear ciertas películas por clasificación."],
        "Canadian English Ratings": ["Canadian English Ratings","Classifications pour l’anglais canadien","Clasificación en inglés canadiense"],
        "Block certain programs by Canadian English ratings.": ["Block certain programs by Canadian English ratings.","Bloquez certains programmes en fonction des classifications pour l’anglais canadien.","Bloquear ciertos programas por clasificaciones de inglés canadiense"],
        "Canadian French Ratings": ["Canadian French Ratings","Classifications pour le français du Canada","Clasificación en francés canadiense."],
        "Block certain programs by Canadian French ratings.": ["Block certain programs by Canadian French ratings.","Bloquez certains programmes en fonction des classification pour le français du Canada.","Bloquear ciertos programas por clasificaciones en francés canadiense."],
        "Open V-Chip": ["Open V-Chip","Puce anti-violence activée ","Abrir V-Chip"],

        "Adjust":["Adjust","Einstellen","Regolare","Ajustar","Ajuste","Ajuster","Justere","Justera","Juster","Säätö"]

    },
    rewrite:function(pageData){
        var i;
        var _this = this,
            opeData = pageData.operateData;
        $.each(pageData,function(key,val){

            if(!key) return true;

            var localData = pageData[key],
                localOpeData =opeData[key];
            switch(key)
            {
                case "setting_sys_proglock_control1":
                    //更新data里面的数据
                    localData.Data.switchType = localOpeData.switchType;
                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                    break;
            }
        })

    }

};

var g_curprogblock_cls=0;

function SettingSysprogblockfocus()
{
    var index;
    if(this.id=="setting_sys_proglock_control1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_proglock_btn1")
    {
        index = 1;
    }
    else if(this.id=="setting_sys_proglock_btn2")
    {
        index = 2;
    }
    else if(this.id=="setting_sys_proglock_btn3")
    {
        index = 3;
    }
    else if(this.id=="setting_sys_proglock_btn4")
    {
        index = 4;
    }
    else if(this.id=="setting_sys_proglock_btn5")
    {
        index = 5;
    }

    SettingFirUpdateHelpinfo(PageDataSettingsysProglock.operateData.helplist[index].title,PageDataSettingsysProglock.operateData.helplist[index].content)

}
function SettingProglockonDestroy()
{
    hiWebOsFrame.settingssysproglock = null;
}

function  Proglockinit()
{
    PageDataSettingsysProglock.operateData.curusmovieselect=model.parentlock.getUsMovieRating();
    PageDataSettingsysProglock.operateData.curcanadafreselect=model.parentlock.getCanFrenchRating();
    PageDataSettingsysProglock.operateData.curcannadaengselect=model.parentlock.getCanEnglishRating();
    debugPrint("curusmovieselect"+PageDataSettingsysProglock.operateData.curusmovieselect);
    debugPrint("curcanadafreselect"+PageDataSettingsysProglock.operateData.curcanadafreselect);
    debugPrint("curcannadaengselect"+PageDataSettingsysProglock.operateData.curcannadaengselect);
    if(model.parentlock.getBlockUnrated()==0)
    {
        PageDataSettingsysProglock.operateData.setting_sys_proglock_control1.switchType=false;
    }
    else{
        PageDataSettingsysProglock.operateData.setting_sys_proglock_control1.switchType=true;
    }
    model.parentlock.GetOpenVchipHandler=GetOpenVchipHandler;
    model.parentlock.GetLevelPageHandler=GetLevelPageHandler;
    g_curprogblock_cls=0;
}
function SettingSysProglockCtrlEnter(operateData,data)
{
    var page = this.page;
    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    if(this.id="setting_sys_proglock_control1")
    {
        if(!this.SwitchType)
        {
            model.parentlock.setBlockUnrated(1);
            debugPrint("set the BLOCK_UNRATED  1")

        }
        else
        {
            model.parentlock.setBlockUnrated(0);
            debugPrint("set the BLOCK_UNRATED  0");
        }
    }
    page.rewriteDataOnly();
    SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);

}
function SettingSysProglockEscHandler()
{
    hiWebOsFrame.settingssysproglock.close();
    SettingFirUpdateHelpinfo(PageDataSettingSysSecurity.operateData.helplist[3].title,PageDataSettingSysSecurity.operateData.helplist[3].content)
    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();
}
function SettingSysProglockBtn1Enter()
{
    hiWebOsFrame.createPage('setting_sys_us_tvrating_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
        hiWebOsFrame.settingssysusrating = page;
        PageDataSettingUSRating.operateData.curageselect=0;
        PageDataSettingUSRating.setting_sys_us_tvrating_ul1.SelectedIndex=0;
        var templist=model.parentlock.getUsTvRating();
        debugPrint("templist"+templist);
        var temp=PageDataSettingUSRating.operateData.curageselect;
        for(var i=0;i<6;i++)
        {
            if(templist[temp*6+i]==2)
            {
                PageDataSettingUSRating.operateData.subselect[i].disable=true;
            }
            else if(templist[temp*6+i]==1)
            {
                PageDataSettingUSRating.operateData.subselect[i].selectflag=true;
                PageDataSettingUSRating.operateData.subselect[i].disable=false;
            }
            else if(templist[temp*6+i]==0)
            {
                PageDataSettingUSRating.operateData.subselect[i].selectflag=false;
                PageDataSettingUSRating.operateData.subselect[i].disable=false;
            }
        }
        hiWebOsFrame.settingssysusrating.rewrite();
        hiWebOsFrame.settingssysusrating.open();
        hiWebOsFrame.settingssysusrating.hiFocus("setting_sys_us_tvrating_ul1");
    });
}
function SettingSysProglockBtn2Enter()
{
    hiWebOsFrame.createPage('setting_sys_tvrating_list1_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
        hiWebOsFrame.settingssysratinglist1 = page;
        PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingsysProglock.operateData.usmovielist;
        PageDataSettingRatinglist1.operateData.curparent=0;
        PageDataSettingRatinglist1.operateData.curselectindex=PageDataSettingsysProglock.operateData.curusmovieselect;
        PageDataSettingRatinglist1.operateData.curfocus=PageDataSettingRatinglist1.operateData.curselectindex;
        hiWebOsFrame.settingssysratinglist1.rewrite();
        hiWebOsFrame.settingssysratinglist1.open();
        hiWebOsFrame.settingssysratinglist1.hiFocus("setting_sys_tvrating_ul1");
    });
}
function SettingSysProglockBtn3Enter()
{
    hiWebOsFrame.createPage('setting_sys_tvrating_list1_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
        hiWebOsFrame.settingssysratinglist1 = page;
        PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingsysProglock.operateData.canadaenglist;
        PageDataSettingRatinglist1.operateData.curparent=1;
        PageDataSettingRatinglist1.operateData.curselectindex=PageDataSettingsysProglock.operateData.curcannadaengselect;
        PageDataSettingRatinglist1.operateData.curfocus=PageDataSettingRatinglist1.operateData.curselectindex;
        hiWebOsFrame.settingssysratinglist1.rewrite();
        hiWebOsFrame.settingssysratinglist1.open();
        hiWebOsFrame.settingssysratinglist1.hiFocus("setting_sys_tvrating_ul1");
    });
}
function SettingSysProglockBtn4Enter()
{
    hiWebOsFrame.createPage('setting_sys_tvrating_list1_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
        hiWebOsFrame.settingssysratinglist1 = page;
        PageDataSettingRatinglist1.operateData.curdatalist=PageDataSettingsysProglock.operateData.canadafrelist;
        PageDataSettingRatinglist1.operateData.curparent=2;
        PageDataSettingRatinglist1.operateData.curselectindex=PageDataSettingsysProglock.operateData.curcanadafreselect;
        PageDataSettingRatinglist1.operateData.curfocus=PageDataSettingRatinglist1.operateData.curselectindex;

        hiWebOsFrame.settingssysratinglist1.rewrite();
        hiWebOsFrame.settingssysratinglist1.open();
        hiWebOsFrame.settingssysratinglist1.hiFocus("setting_sys_tvrating_ul1");
    });
}
function SettingSysProglockBtn5Enter()
{
    model.parentlock.OpenvchipPage(0,0,0,0);
    g_curprogblock_cls=0;
//    hiWebOsFrame.createPage('setting_sys_open_vchip_cls1_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
//        hiWebOsFrame.settingssysopenvichip1 = page;
//        hiWebOsFrame.settingssysopenvichip1.open();
//        hiWebOsFrame.settingssysopenvichip1.hiFocus();
//    });
}

function GetOpenVchipHandler(actionId, convertedResult)
{
    try
    {
        var element={};
       debugPrint("in the GetOpenVchipHandler" + actionId);
       debugPrint(JSON.stringify(convertedResult));
        if(g_curprogblock_cls==0)
        {
            if(convertedResult.length>0)
            {

                hiWebOsFrame.createPage('setting_sys_open_vchip_cls1_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
                hiWebOsFrame.settingssysopenvichip1 = page;
                PageDataSettingSysOpenvichipcls1.operateData.curopenvchiplist=[];
                for(var i=0;i<convertedResult.length;i++)
                {
                    element.name=convertedResult[i];
                    PageDataSettingSysOpenvichipcls1.operateData.curopenvchiplist.push(_cloneObj(element));

                }
                debugPrint("PageDataSettingSysOpenvichipcls1"+PageDataSettingSysOpenvichipcls1.operateData.curopenvchiplist);
                PageDataSettingSysOpenvichipcls1.operateData.curselect=0;
                hiWebOsFrame.settingssysopenvichip1.rewrite();
                hiWebOsFrame.settingssysopenvichip1.open();
                hiWebOsFrame.settingssysopenvichip1.hiFocus();
                });
            }
            else
            {
                hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
                    hiWebOsFrame.settingsyspwderror=page;
                    PageDateSettingSysPwderror.operateData.datatype=3;
                    page.rewriteDataOnly();
                    page.open();
                    page.hiFocus();
                    setTimeout(openvichipclose,2 * 1000);
                });
            }
       }
        else if(g_curprogblock_cls==1)
        {
            hiWebOsFrame.createPage('setting_sys_open_vchip_cls2_page', null, hiWebOsFrame.settingssysproglock, null, function (page) {
                hiWebOsFrame.settingssysopenvichip2 = page;
                //to get the new values
                PageDataSettingSysOpenvichipcls2.operateData.curchllist=[];
                for(var i=0;i<convertedResult.length;i++)
                {
                    element.name=convertedResult[i];
                    PageDataSettingSysOpenvichipcls2.operateData.curchllist.push(_cloneObj(element));

                }
                PageDataSettingSysOpenvichipcls2.operateData.curselect=0;
                debugPrint("PageDataSettingSysOpenvichipcls2 data"+JSON.stringify(PageDataSettingSysOpenvichipcls2.operateData.curchllist));
                hiWebOsFrame.settingssysopenvichip2.rewrite();
                hiWebOsFrame.settingssysopenvichip2.open();
                hiWebOsFrame.settingssysopenvichip2.hiFocus();
            });
        } else if(g_curprogblock_cls==2)
        {
            hiWebOsFrame.createPage('setting_sys_open_vchip_cls3_page', null, hiWebOsFrame.settingssysopenvichip2, null, function (page) {
                hiWebOsFrame.settingssysopenvichip3 = page;
                PageDataSettingSysOpenvchipCls3.operateData.curdatalist=[];
                for(var i=0;i<convertedResult.length;i++)
                {
                   // element.name=convertedResult[i];
                    PageDataSettingSysOpenvchipCls3.operateData.curdatalist[i]=convertedResult[i];

                }
                PageDataSettingSysOpenvchipCls3.operateData.curselectindex=0;
                debugPrint("PageDataSettingSysOpenvchipCls3 "+PageDataSettingSysOpenvchipCls3.operateData.curdatalist);
               // PageDataSettingSysOpenvchipCls3.operateData.curdatalist=["openvichip3","openvichip3","openvichip3","openvichip3","openvichip3","openvichip3"];
                model.parentlock.LevelPageState(PageDataSettingSysOpenvichipcls1.operateData.curselect,PageDataSettingSysOpenvichipcls2.operateData.curselect);
                hiWebOsFrame.settingssysopenvichip3.rewrite();
                hiWebOsFrame.settingssysopenvichip3.close();
                });

        }
    }catch(e)
    {
        debugPrint(e);
    }

}

function GetLevelPageHandler(actionId, convertedResult)
{
    debugPrint("in the GetLevelPageHandler" + actionId);
   // hiWebOsFrame.unLockAllKeys();
    debugPrint(JSON.stringify(convertedResult));
    if(convertedResult.length>0)
    {
        PageDataSettingSysOpenvchipCls3.operateData.curselectlist=[];
        for(var i=0;i<convertedResult.length;i++)
        {
            if(convertedResult[i]!=0)
            {
                PageDataSettingSysOpenvchipCls3.operateData.curselectlist.push(i);
            }
        }
    }
    hiWebOsFrame.settingssysopenvichip3.rewriteDataOnly();
    hiWebOsFrame.settingssysopenvichip3.open();
    hiWebOsFrame.settingssysopenvichip3.hiFocus("setting_sys_openvichip_cls3_ul1");

}

function openvichipclose()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        debugPrint("setting module close pwderror")
        hiWebOsFrame.settingsyspwderror.close();
        $("#setting_sys_autotime_input1").val("");
        $("#setting_sys_autotime_input2").val("");
        hiWebOsFrame.settingssysproglock.open();
        hiWebOsFrame.settingssysproglock.hiFocus();
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    else
    {
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();
    }
}