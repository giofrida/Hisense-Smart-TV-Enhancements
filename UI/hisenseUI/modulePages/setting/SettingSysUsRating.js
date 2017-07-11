/**
 * Created by Administrator on 14-10-10.
 */
function getSettingSysUSRatingData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_us_tvrating_title",
            "description": "setting head",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_us_tvrating_str1",
            "description": "setting head",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_us_tvrating_fre",
            "description": "setting head",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_us_tvrating_ul1",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_navibar4_normal", "focus": "setting_sys_navibar4_focus",
                "dataSelected":"setting_sys_navibar4_dataselect"
            },
            "nav": {"downTo": "setting_sys_us_tvrating_ul2"},
            "handler": {
                "befEnterHandler": "SettingSysUSratingUL1EnHandler",
                "aftEscHandler": "SettingSysUSRatingEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_us_rating_ul1_txt1",
                    "description": "名称",
                    "CaEType": "span"
                }
            ],
            NavigationBarConfig: {
                "NavigationBarDataItem": [ "setting_sys_us_rating_ul1_txt1"],
                "PageSize":4,
                "ArrowFlag":true

            }
        },
        {
            "id": "setting_sys_us_tvrating_ul2",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal2", "focus": "setting_sys_mt_focus",
                "disable":"setting_sys_mt_disable"
            },
            "nav": {"upTo": "setting_sys_us_tvrating_ul1"},
            "handler": {
                "befEnterHandler": "SettingSysUSRatingUL2EnHandler",
                "aftEscHandler": "SettingSysUSRatingEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_sys_us_rating_ul2_txt1",
                    "classes": {
                        "normal": "setting_sys_us_tv_rating_ul1_txt1", "focus": "setting_sys_us_tv_rating_ul1_txt1",
                        "disable":"setting_sys_us_tv_rating_ul1_txt1"
                    },
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_us_rating_ul2_img1",
                    "classes": {
                        "normal": "setting_sys_us_tv_rating_ul1_img1", "focus": "setting_sys_us_tv_rating_ul1_img1",
                        "disable":"setting_sys_us_tv_rating_ul1_img1"
                    },
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_us_rating_ul2_txt1", "setting_sys_us_rating_ul2_img1"],
                "PageSize":6

            }
        }
    ];
    USRatinginit();
    return PageDataSettingUSRating;
}
var PageDataSettingUSRating={


    "setting_sys_us_tvrating_title":{Data:"US TV Ratings"},
    "setting_sys_us_tvrating_str1":{Data:"Rating"},
    "setting_sys_us_tvrating_fre":{Data:"TV-Y"},
    "setting_sys_us_tvrating_ul1": {Data:[
        {
            "setting_sys_us_rating_ul1_txt1": {Data:"TV-Y"}
        },
        {
            "setting_sys_us_rating_ul1_txt1": {Data:"TV-Y7"}
        },
        {
            "setting_sys_us_rating_ul1_txt1": {Data:"TV-G"}
        },
        {
            "setting_sys_us_rating_ul1_txt1": {Data:"TV-PG"}
        },
        {
            "setting_sys_us_rating_ul1_txt1": {Data:"TV-14"}
        },
        {
            "setting_sys_us_rating_ul1_txt1": {Data:"TV-MA"}
        }
    ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "setting_sys_us_tvrating_ul2": {Data:[
        {
            "setting_sys_us_rating_ul2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_us_rating_ul2_txt1": {Data:"All(A)"}
        },
        {
            "setting_sys_us_rating_ul2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_us_rating_ul2_txt1": {Data:"Suggestive dialog(D)"}
        },
        {
            "setting_sys_us_rating_ul2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_us_rating_ul2_txt1": {Data:"Coarse or crude language(L)"}
        },
        {
            "setting_sys_us_rating_ul2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_us_rating_ul2_txt1": {Data:"Sexual situations(S)"}
        },
        {
            "setting_sys_us_rating_ul2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_us_rating_ul2_txt1": {Data:"Violence(V)"}
        },
        {
            "setting_sys_us_rating_ul2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_us_rating_ul2_txt1": {Data:"Fantasy violence(FV)"}
        }
    ],
        "SelectedIndex":0,
        "disableItem":[

        ]
    },
    "operateData": {
        "curageselect":0,
        "subselect":[
            {
                "disable":false,
                "selectflag":false
            },
            {
                "disable":false,
                "selectflag":true
            },
            {
                "disable":true,
                "selectflag":false
            },
            {
                "disable":false,
                "selectflag":false
            },
            {
                "disable":false,
                "selectflag":true
            },
            {
                "disable":true,
                "selectflag":false
            }

        ],
        "ratinglist":["TV-Y","TV-Y7","TV-G","TV-PG","TV-14","TV-MA"]


    },
    "langData":{
        "US TV Ratings": ["US TV Ratings","Classification des programmes télévisés aux États-Unis","Clasificación de TV de EE. UU."],
        "Block certain TV programs by rating.": ["Block certain TV programs by rating.","Bloquez certains programmes télévisés selon leur classification.","Bloquear ciertos programas de televisión por clasificación."],
        "Rating": ["Rating","Classification","Clasificación"],
        "All(A)": ["All(A)","Tout public (A)","Todos(A)"],
        "Suggestive dialog(D)": ["Suggestive dialog(D)","Propos suggestifs (D)","Diálogo insinuante(D)"],
        "Coarse or crude language(L)": ["Coarse or crude language(L)","Langage grossier (L)","Lenguaje grosero o vulgar(L)"],
        "Sexual situations(S)": ["Sexual situations(S)","Situations sexuelles (S)","Situaciones sexuales(S)"],
        "Violence(V)": ["Violence(V)","Violence (V)","Violencia(V)"],
        "Fantasy violence(FV)": ["Fantasy violence(FV)","Violence fantastique (FV)","Violencia de fantasía(FV)"],


    },
    rewrite:function(pageData){
        var element={};
        var disable=[];
        pageData.setting_sys_us_tvrating_fre.Data=pageData.operateData.ratinglist[pageData.operateData.curageselect];
        if(!!pageData.operateData.subselect)
        {
            $.each(pageData.operateData.subselect, function (k, v) {
                if(pageData.operateData.subselect[k].disable)
                {
                    disable.push(k);
                    pageData.setting_sys_us_tvrating_ul2.Data[k].setting_sys_us_rating_ul2_img1.Data="img/unselectedBall.png";

                }
                else
                {
                    if(pageData.operateData.subselect[k].selectflag)
                    {
                        pageData.setting_sys_us_tvrating_ul2.Data[k].setting_sys_us_rating_ul2_img1.Data="img/selectedBall.png";
                    }
                    else
                    {
                        pageData.setting_sys_us_tvrating_ul2.Data[k].setting_sys_us_rating_ul2_img1.Data="img/unselectedBall.png";
                    }
                }
            })
            pageData.setting_sys_us_tvrating_ul2.disableItem=disable;
        }
        pageData.setting_sys_us_tvrating_ul1.DataSelectedIndex=pageData.operateData.curageselect;

    }
};

function SettingSysUSRatingopenHandler()
{

   // PageDataSettingUSRating.operateData.curageselect=0;
   // PageDataSettingUSRating.setting_sys_us_tvrating_ul1.SelectedIndex=0;
    //todo update the ul2c data
   // hiWebOsFrame.settingssysusrating.rewrite();
   // hiWebOsFrame.settingssysusrating.open();
  //  hiWebOsFrame.settingssysusrating.hiFocus("setting_sys_us_tvrating_ul1");

}

function SettingSysUSRatingonDestroy()
{
    hiWebOsFrame.settingssysusrating=null;
}
function USRatinginit()
{
 //todo
    try
    {
        debugPrint("USRatinginit");
        PageDataSettingUSRating.operateData.curageselect=0;
        PageDataSettingUSRating.setting_sys_us_tvrating_ul1.SelectedIndex=0;
        var temp=model.parentlock.getUsTvRating();
        PageDataSettingUSRating.operateData.templist=temp;
        debugPrint("templist"+PageDataSettingUSRating.operateData.templist);
        // to get the us rating.
    }catch (e)
    {
        debugPrint(e.message);
    }
}
function SettingSysUSRatingEscHandler()
{
  this.page.close();
  hiWebOsFrame.settingssysproglock.open();
  hiWebOsFrame.settingssysproglock.hiFocus();
}
function SettingSysUSratingUL1EnHandler()
{
  try{
    this.page.operateData.curageselect=this.SelectedIndex;
    for(var i=0;i<6;i++)
    {
        if(this.page.operateData.templist[this.SelectedIndex*6+i]==2)
        {
            PageDataSettingUSRating.operateData.subselect[i].disable=true;
        }
        else if(this.page.operateData.templist[this.SelectedIndex*6+i]==1)
        {
            PageDataSettingUSRating.operateData.subselect[i].selectflag=true;
            PageDataSettingUSRating.operateData.subselect[i].disable=false;
        }
        else if(this.page.operateData.templist[this.SelectedIndex*6+i]==0)
        {
            PageDataSettingUSRating.operateData.subselect[i].selectflag=false;
            PageDataSettingUSRating.operateData.subselect[i].disable=false;
        }
    }
    hiWebOsFrame.settingssysusrating.rewriteDataOnly();
    hiWebOsFrame.settingssysusrating.hiFocus("setting_sys_us_tvrating_ul1");
  }catch (e)
  {
      debugPrint(e.message);
  }
}
function SettingSysUSRatingUL2EnHandler()
{
   // to unlock ,
    try
    {
    this.page.operateData.subselect[this.SelectedIndex].selectflag=!this.page.operateData.subselect[this.SelectedIndex].selectflag;
    if(this.page.operateData.subselect[this.SelectedIndex].selectflag)
    {
        model.parentlock.ActionSetUsTvRating(this.page.operateData.curageselect,this.SelectedIndex,1);
       debugPrint("lock the"+this.page.operateData.curageselect+this.SelectedIndex+"1");
    }
    else
    {
       model.parentlock.ActionSetUsTvRating(this.page.operateData.curageselect,this.SelectedIndex,0);
        debugPrint("lock the"+this.page.operateData.curageselect+this.SelectedIndex+"0");
    }
  // to get the data and refresh the data
    templist=model.parentlock.getUsTvRating();
    PageDataSettingUSRating.operateData.templist=templist;
    debugPrint("templist"+PageDataSettingUSRating.operateData.templist);
    for(var i=0;i<6;i++)
    {
        if(templist[this.page.operateData.curageselect*6+i]==2)
        {
            PageDataSettingUSRating.operateData.subselect[i].disable=true;
        }
        else if(templist[this.page.operateData.curageselect*6+i]==1)
        {
            PageDataSettingUSRating.operateData.subselect[i].selectflag=true;
            PageDataSettingUSRating.operateData.subselect[i].disable=false;
        }
        else if(templist[this.page.operateData.curageselect*6+i]==0)
        {
            PageDataSettingUSRating.operateData.subselect[i].selectflag=false;
            PageDataSettingUSRating.operateData.subselect[i].disable=false;
        }
    }
    this.page.rewriteDataOnly();
    }catch (e)
    {
        debugPrint(e.message);
    }
}