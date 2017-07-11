/**
 * Created by Administrator on 14-6-18.
 */
function getSettingChlPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_chl_larrow",
            "description": "",
            "CaEType": "img",
            "disable": false

        },

        {
            "id": "setting_sys_chl_rarrow",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
//        {
//            "id": "setting_sys_chl_title",
//            "description": "setting head",
//            "CaEType": "span"
//        },
        {

            "id": "setting_sys_chl_ul1",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "keepBIdxAfterRewrite":true,
                "nav": {"downTo": "setting_sys_chl_ul2"},

            "classes": {
                "normal": "setting_sys_cha_li_normal", "focus": "setting_sys_cha_li_focus","dataSelected":"setting_sys_cha_li_select"
            },
            "onFocusFun":"SettingSysChlUl1Focus",
            "handler": {
                "aftRightHandler": "SettingSysChlUl1Right",
                "aftLeftHandler": "SettingSysChlUl1Left",
                "befDownHandler":"SettingSysChlUlDown",
                "aftEscHandler": "SettingSysChlEsc"
            },
            oriCaE: [
                {
                    "id": "setting_sys_chl_txt1",
                    "description": "名称",
                    "CaEType": "span"
                }

            ],
            NavigationBarConfig: {

                "UlDataItem": ["setting_sys_chl_txt1"],
                "PageSize":3
            }

        },
        {
            "id": "setting_sys_chl_select",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {

            "id": "setting_sys_chl_ul2",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "ULPageMode":true,
            "SelectedIndex": 0,
            "nav": {"upTo": "setting_sys_chl_ul1","rightTo":"setting_sys_chl_ul1","leftTo":"setting_sys_chl_ul1"},

            "classes": {
                "normal": "setting_sys_chl_ul2_linormal", "focus": "setting_sys_chl_ul2_lifocus"
            },
//            "onFocusFun":"SettingSysChlUl2Focus",
            "handler": {
                "befRightHandler": "SettingSysChlUl2Right",
                "befLeftHandler": "SettingSysChlUl2Left",
                "aftEnterHandler": "SettingSysChlUl2Enter",
                "aftEscHandler": "SettingSysChlEsc",
                "aftDownHandler": "SettingSysChlUl2Down",
                "aftUpHandler": "SettingSysChlUl2Up",
                "keyChannelUpHandler":"SettingSysChannelpageUp",
                "keyChannelDownHandler":"SettingSysChannelpagedown"
            },
            oriCaE: [
                {
                    "id": "setting_sys_chl_num",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_chl_img1",
                    "description": "名称",
                    "CaEType": "img"
                },
                {
                    "id": "setting_sys_chl_name",
                    "description": "名称",
                    "noLangData":true,
                    "CaEType": "span"
                }

            ],
            UlConfig: {

                "UlDataItem": ["setting_sys_chl_num","setting_sys_chl_img1","setting_sys_chl_name"],
                "PageSize":9


            }

        }
    ];
    getChannelListData();
    return PageDataSettingSysChannel;
}

var PageDataSettingSysChannel={
    "setting_sys_chl_larrow":{Data:"img/left_arrow.png"},
    "setting_sys_chl_rarrow":{Data:"img/right_arrow.png"},
    "setting_sys_chl_ul1":{Data:
        [
        {
            "setting_sys_chl_txt1":{Data: "Analog"}
        },
        {
            "setting_sys_chl_txt1":{Data: "DVBT"}
        },
        {
            "setting_sys_chl_txt1": {Data:"DVBC"}
        },
        {
            "setting_sys_chl_txt1": {Data:"DVBS"}
        }
    ],
        "SelectedIndex":0
    },
    //"setting_sys_chl_title":{Data:"Channel Block"},
    "setting_sys_chl_ul2": {Data:[
        {
            "setting_sys_chl_num": {Data:""},
            "setting_sys_chl_img1": {Data:""},
            "setting_sys_chl_name": {Data:""}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curfocus":0,
        "curchllist":[
            {
                "name":"DVBT",
                "list":[
                    {
                        "num":0,
                        "name":"000",
                        "uid":8,
                        "listUid":000,
                        "lockflag":true
                    },
                    {
                        "num":0,
                        "name":"000",
                        "uid":8,
                        "listUid":000,
                        "lockflag":true
                    },
                    {
                        "num":0,
                        "name":"000",
                        "uid":8,
                        "listUid":000,
                        "lockflag":true
                    },
                    {
                        "num":0,
                        "name":"000",
                        "uid":8,
                        "listUid":000,
                        "lockflag":true
                    },
                    {
                        "num":0,
                        "name":"000",
                        "uid":8,
                        "listUid":000,
                        "lockflag":true
                    },
                    {
                        "num":0,
                        "name":"000",
                        "uid":8,
                        "listUid":000,
                        "lockflag":true
                    }
                ]
            },
            {
                "name":"DVBS",
                "list":[]

            },
            {
                "name":"DVBC",
                "list":[]

            },
            {
                "name":"44",
                "list":[

                    ],
                "get":true,
                "uid":0
            }
        ],
        "step":0,
        "curselect":0,
        "pagenum":0
    },
    "langData":{
        "Channel Block": [],
        "Antenna":["天线","Antenna","Antenne","Antenna","Antena","Antena","Antenne","Antenne","Antenn","Antenne","Antenni","Anten","الهوائي","Антенна","Ăng ten","เสาสัญญาณ","အင္တနာ","Antenna","अंटीना","Антена","Antena","אנטנה","Anténa","Anténa","Antena","Antenna","Антена","آنتن","Antena"],
        "Cable":["线缆","Cable","Kabel","Cavo","Cabo","Cable","Câble","Kabel","Kabel","Kabel","Kaapeli","Kablo","الكابل","Кабельное","Cáp","สายเคเบิล","ေကဘယ္ႀကိဳး","Kabel ","केबल","Кабельне","Kabel","כבל","Kabel","Kábel","Kabel","Kábel","Кабел","کابل","Kabel"],
        "Satellite":["卫星","Satellite","Satellit","Satellite","Satélite","Satélite ","Satellite","Satellitt","Satellit","Satellit","Sateliitti","Uydu","قمر صناعي","Спутник","Vệ tinh","ดาวเทียม","ၿဂိဳလ္တု","Yo'ldosh","सेटिलाईट","Супутник","Satelit","לווין","Satelit","Satelit","Satelita","Műhold","Сателит","ماهواره","Satelit"],
        "DVBT":["DVBT","DVBT","DVBT","DVBT","DVBT","DVBT ","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","डीवीबीटी","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT","DVBT (Цифрово видео радиоразпръскване - наземно)","DVBT","DVBT"],
        "DVBC":["DVBC","DVBC","DVBC","DVBC","DVBC","DVBC ","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","डीवीबीसी","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC","DVBC (Цифрово видео радиоразпръскване - кабелно)","DVBC","DVBC"],
        "DVBS":["DVBS","DVBS","DVBS","DVBS","DVBS","DVBS ","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","डीवीबीएस","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS","DVBS (Цифрово видео радиоразпръскване - сателитно)","DVBS","DVBS"]
    },
    rewrite:function(pageData){
        var element={};
        var item={};

     try{
        pageData.setting_sys_chl_ul1.Data=[];
        if(pageData.operateData.curchllist.length>0)
        {
            $.each(pageData.operateData.curchllist, function (k, v)
            {
                item.setting_sys_chl_txt1={};
                item.setting_sys_chl_txt1.Data=pageData.operateData.curchllist[k].name;
                pageData.setting_sys_chl_ul1.Data.push(_cloneObj(item));
            });
        }

        pageData.setting_sys_chl_ul1.SelectedIndex=pageData.operateData.curfocus;
        pageData.setting_sys_chl_ul1.DataSelectedIndex=pageData.operateData.curfocus;
        debugPrint("focus id "+pageData.operateData.curfocus)
        debugPrint("setting_sys_chl_ul1"+JSON.stringify(pageData.setting_sys_chl_ul1));
        pageData.setting_sys_chl_ul2.SelectedIndex=pageData.operateData.curselect;
        pageData.setting_sys_chl_ul2.Data=[];
        if((pageData.operateData.curchllist.length>pageData.operateData.curfocus)&&pageData.operateData.curchllist[pageData.operateData.curfocus].list.length>0)
        {
            debugPrint("curchllist.length"+pageData.operateData.curchllist[pageData.operateData.curfocus].list.length);
            $.each(pageData.operateData.curchllist[pageData.operateData.curfocus].list, function (k, v) {
            element.setting_sys_chl_num={};
            element.setting_sys_chl_name={};
            element.setting_sys_chl_img1={};
            element.setting_sys_chl_num.Data= v.num;
            element.setting_sys_chl_name.Data = v.name;
            if(v.lockflag)
            {
                element.setting_sys_chl_img1.Data="img/setting_channellock.png";
            }
            else
            {
                element.setting_sys_chl_img1.Data="img/blank.png";
            }

            pageData.setting_sys_chl_ul2.Data.push(_cloneObj(element));
        })
        }

         if( pageData.setting_sys_chl_ul2.Data.length==0)
         {
             pageData.setting_sys_chl_ul2.disable=true;
         }
         else
         {
             pageData.setting_sys_chl_ul2.disable=false;
         }

     }catch(e)
     {
         debugPrint(e.message,DebugLevel.ERROR);
     }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_chl_ul2").css("float","left");
            $(".setting_sys_chl_ul2").css("margin"," 0 0 0 64px ");
            $(".setting_sys_list1_srcobar_container").css("float","right");
            $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0");
////            $(".setting_select_langpage2").css("float","left");
////            $(".setting_select_langpage3").css("float","left");
////
////            $(".setting_select_lang_focus").css("float","right")
////            $(".setting_select_langpage4").css("float","right")
////            $(".setting_select_lang_disable").css("float","right");
////            $(".setting_sys_switch_name").css("float","left")
////            // $("#setting_sys_timedata_control1").css("float","right")
        }
        else {
            $(".setting_sys_chl_ul2").css("float","right");
            $(".setting_sys_chl_ul2").css("margin"," 0  64px 0 0");
            $(".setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px");
//            $("#setting_sys_list1_srcobar_container").css("float","left");
//            $(".setting_select_langpage2").css("float","right");
//            $(".setting_select_langpage3").css("float","right");
//
//            $(".setting_select_lang_focus").css("float","left");
//            $(".setting_select_langpage4").css("float","left");
//            $(".setting_select_lang_disable").css("float","left")
//
//            $(".setting_sys_switch_name").css("float","right")
//            // $("#setting_sys_timedata_control1").css("float","left")
        }
    }

};

function SettingSysChlUl1Focus()
{
//  debugPrint("UL1 FOCUS");
    try {
        for(var i=0;i<3;i++)
        {
            var marquee = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i+ " marquee");
            if (marquee.length > 0) {
                var htmlText = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i+" marquee").html();
                var marquee = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i).html(htmlText);
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
    try {
        var width1=$("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+ this.SelectedIndex).width();
        var htmlText = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+this.SelectedIndex).html();
        if(width1>=290)
        {
            $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+ this.SelectedIndex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }

    } catch (ex) {
        debugE(ex.message);
    }
//  this.SelectedIndex

}

function SettingSysChlUlDown()
{
    if(PageDataSettingSysChannel.operateData.curchllist[PageDataSettingSysChannel.operateData.curfocus].list.length>0)
    {
        try {
            for(var i=0;i<3;i++)
            {
                var marquee = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i+ " marquee");
                if (marquee.length > 0) {
                    var htmlText = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i+" marquee").html();
                    var marquee = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i).html(htmlText);
                }
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

}
function SettingSysChlUl2Focus()
{
    try {
        for(var i=0;i<3;i++)
        {
            var marquee = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i+ " marquee");
            if (marquee.length > 0) {
                var htmlText = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i+" marquee").html();
                var marquee = $("#setting_sys_chl_ul1_setting_sys_chl_txt1_sys"+i).html(htmlText);
            }
        }
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingChlPageonDestroy()
{
    hiWebOsFrame.settingssyschl=null;
    PageDataSettingSysChannel.operateData.curfocus=0;
   // chl_setUpdateFlag(false);
}
function getChannelListData()
{
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR)
    {
        PageDataSettingSysChannel.operateData.curhtml=true
    }else{
        PageDataSettingSysChannel.operateData.curhtml=false
    }
    var temp=-1;
    var element={};
    var subelement={};
   // debugPrint("getChannelListData!!!");
    PageDataSettingSysChannel.setting_sys_chl_ul1={Data:[],
        "SelectedIndex":0,
        "BeginIdx":0
    };
    PageDataSettingSysChannel.operateData.curfocus=0;
    PageDataSettingSysChannel.operateData.curselect=0;
    PageDataSettingSysChannel.operateData.curchllist=[];
    var temp=livetvchlist.getAllChannels();
  //  debugPrint("the channel list is"+JSON.stringify(temp));

    try
    {
    if(!!temp&&temp.length>0)
    {
        debugPrint("getChannelListData!!!");
        for (var j = 0; j < temp.length; j++)
        {

               element.name=temp[j].name;
               element.list=[];
               for(var i=0;i<temp[j].list.length;i++)
               {
                   subelement.num=temp[j].list[i].number;
                   subelement.name=temp[j].list[i].name;
                   subelement.uid=temp[j].list[i].uid;
                   subelement.attr=temp[j].list[i].attr;
                   subelement.listUid=temp[j].list[i].playId;
                   if(temp[j].list[i].isLock)
                   {
                       subelement.lockflag=true;
                   }
                   else{
                       subelement.lockflag=false;
                   }
                   element.list.push(_cloneObj(subelement));
               }
               //debugPrint(" element.uid"+element.uid);
               debugPrint(" element.length"+element.list.length);
               PageDataSettingSysChannel.operateData.curchllist.push(_cloneObj(element));
              // debugPrint(" channel list!!!"+JSON.stringify(PageDataSettingSysChannel.operateData.curchllist));


        }
        //if(!PageDataSettingSysChannel.operateData.curchllist[PageDataSettingSysChannel.operateData.curfocus].get)
//        {
//            var index;
//
//            index = chl_data_getChannelTypeListIndexByUid(PageDataSettingSysChannel.operateData.curchllist[PageDataSettingSysChannel.operateData.curfocus].uid);
//            debugPrint(" current focus "+PageDataSettingSysChannel.operateData.curchllist[PageDataSettingSysChannel.operateData.curfocus].uid);
//            debugPrint(" get the first channel list!!!"+index);
//            chl_setRefreshChannelInfoCallback(getfirstchannellist);
//            chl_data_getChannelList(index,2);
//
//        }
    }
      //  debugPrint("the channel list is"+JSON.stringify(PageDataSettingSysChannel.operateData.curchllist));
    }
    catch(e){
        debugPrint(e.message)

    }
}
function SettingSysChlUl1Right()
{

   if(this.SelectedIndex!=this.page.operateData.curfocus)
    {
        debugE("SettingSysChlUl1Right ")
        this.page.operateData.curfocus=this.SelectedIndex;
        this.page.operateData.curselect=0;
        this.page.rewrite();
        this.page.hiFocus("setting_sys_chl_ul1");
        if(this.page.data.setting_sys_chl_ul1.Data.length>3)
        {
            if(this.getFirstPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","hidden");
                $("#setting_sys_chl_rarrow").css("visibility","visible");
                }else{
                    $("#setting_sys_chl_larrow").css("visibility","visible");
                    $("#setting_sys_chl_rarrow").css("visibility","hidden");

                }
            }
            else if(this.getLastPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","hidden");
                }else{
                    $("#setting_sys_chl_larrow").css("visibility","hidden");
                    $("#setting_sys_chl_rarrow").css("visibility","visible");
                }
            }
            else{
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","visible");

            }
            var beginindex=this.page.getCaE("setting_sys_chl_ul1").BeginIdx;
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+(-65));
            }
        }
        else{
            $("#setting_sys_chl_larrow").css("visibility","hidden");
            $("#setting_sys_chl_rarrow").css("visibility","hidden");
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
                $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+(-65));
            }        }
        UpdataChannelScrollBar(this.page.data);
    }

}
function SettingSysChlUl2Right()
{

    if( this.page.operateData.curfocus<this.page.data.setting_sys_chl_ul1.Data.length-1)
    {
        debugE("SettingSysChlUl2Right ")
        this.page.operateData.curfocus++;
        this.page.operateData.curselect=0;
        this.page.rewrite();
        this.page.hiFocus("setting_sys_chl_ul1");
        if(this.page.data.setting_sys_chl_ul1.Data.length>3)
        {
            if(this.page.getCaE("setting_sys_chl_ul1").getFirstPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","hidden");
                $("#setting_sys_chl_rarrow").css("visibility","visible");
                }else{
                    $("#setting_sys_chl_larrow").css("visibility","visible");
                    $("#setting_sys_chl_rarrow").css("visibility","hidden");

                }
            }
            else if(this.page.getCaE("setting_sys_chl_ul1").getLastPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","hidden");
                }else{
                    $("#setting_sys_chl_larrow").css("visibility","hidden");
                    $("#setting_sys_chl_rarrow").css("visibility","visible");
                }
            }
            else{
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","visible");
                // $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-1)+65)
            }
            var beginindex=this.page.getCaE("setting_sys_chl_ul1").BeginIdx;
           // $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+(-65));
            }
        }
        else{
            $("#setting_sys_chl_larrow").css("visibility","hidden");
            $("#setting_sys_chl_rarrow").css("visibility","hidden");
          //  $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65)
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
                $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+(-65));
            }
        }
        UpdataChannelScrollBar(this.page.data);
        this.page.operateData.pageindex=0;
        $("#setting_sys_chl_srcollbar").css("top",0);
    }




}
function GetChannellistcallback(uid)
{
    debugPrint(" GetChannellistcallback call back !!!"+uid);
    //hasBeCalled=1;
    hiWebOsFrame.clearDisablePageKeys(hiWebOsFrame.settingssyschl);
    chl_setRefreshChannelInfoCallback(null);
    var subelement={};
    var temp= chl_data_getChannelTypeListIndex(uid);
    var index=SettingChannlLockGetindexByUid(uid);
    debugPrint("get index is "+index);
    if(index==null)
    {
        debugPrint("error the index failed ",DebugLevel.ERROR);
        return;
    }
    PageDataSettingSysChannel.operateData.curchllist[index].get=true;
    for(var i=0;i<chl_g_channelList[temp].list.length;i++)
    {
        subelement.num=chl_g_channelList[temp].list[i].channelNum;
        subelement.name=chl_g_channelList[temp].list[i].channelName;
        subelement.uid=chl_g_channelList[temp].list[i].uid;
        if(chl_g_channelList[temp].list[i].isLock)
        {
            subelement.lockflag=true;
        }
        else{
            subelement.lockflag=false;
        }
        PageDataSettingSysChannel.operateData.curchllist[index].list.push(_cloneObj(subelement));

    }
    RefreshAgelockPage();
}
function getfirstchannellist(uid)
{
    debugPrint(" getfirstchannellist call back !!!"+uid);
    chl_setRefreshChannelInfoCallback(null);
    var subelement={};
    var temp= chl_data_getChannelTypeListIndex(uid);
    PageDataSettingSysChannel.operateData.curchllist[PageDataSettingSysChannel.operateData.curfocus].get=true;
    debugPrint(" length!!!"+chl_g_channelList[temp].list.length);
    for(var i=0;i<chl_g_channelList[temp].list.length;i++)
    {

        subelement.num=chl_g_channelList[temp].list[i].channelNum;
        subelement.name=chl_g_channelList[temp].list[i].channelName;
        subelement.uid=chl_g_channelList[temp].list[i].uid;
        if(chl_g_channelList[temp].list[i].isLock)
        {
            subelement.lockflag=true;
        }
        else{
            subelement.lockflag=false;
        }
        PageDataSettingSysChannel.operateData.curchllist[PageDataSettingSysChannel.operateData.curfocus].list.push(_cloneObj(subelement));
    }
    RefreshAgelockPage();
}
function SettingChannlLockGetindexByUid(uid) {
    var i = 0;
    var index = null;
    if (PageDataSettingSysChannel.operateData.curchllist.length > 0) {
        for (i = 0; i < PageDataSettingSysChannel.operateData.curchllist.length; i++) {
            if (PageDataSettingSysChannel.operateData.curchllist[i].uid == uid) {
                index = i;
                break;
            }
        }
    }
    return index;
}
function RefreshAgelockPage()
{
    try
    {
    debugPrint(" refresh the page"+PageDataSettingSysChannel.operateData.curfocus);
    PageDataSettingSysChannel.operateData.curselect=0;
    hiWebOsFrame.settingssyschl.rewrite();
    hiWebOsFrame.settingssyschl.hiFocus("setting_sys_chl_ul1");
    if(hiWebOsFrame.settingssyschl.data.setting_sys_chl_ul1.Data.length>3)
    {
        if(hiWebOsFrame.settingssyschl.getCaE("setting_sys_chl_ul1").getFirstPageFlag())
        {
            $("#setting_sys_chl_larrow").css("visibility","hidden");
            $("#setting_sys_chl_rarrow").css("visibility","visible");

        }
        else if((hiWebOsFrame.settingssyschl.getCaE("setting_sys_chl_ul1").getLastPageFlag()))
        {
            $("#setting_sys_chl_larrow").css("visibility","visible");
            $("#setting_sys_chl_rarrow").css("visibility","hidden");
        }
        else
        {
            $("#setting_sys_chl_larrow").css("visibility","visible");
            $("#setting_sys_chl_rarrow").css("visibility","visible");
        }
        var beginindex=hiWebOsFrame.settingssyschl.getCaE("setting_sys_chl_ul1").BeginIdx;
        if( PageDataSettingSysChannel.operateData.curhtml==true)
        {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
        }else
        {
            $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+(-65));
        }
    }
    else
    {
        $("#setting_sys_chl_larrow").css("visibility","hidden");
        $("#setting_sys_chl_rarrow").css("visibility","hidden");
      //  $("#setting_sys_chl_select").css("left", (297*(hiWebOsFrame.settingssyschl.getCaE("setting_sys_chl_ul1").SelectedIndex)+65));
        if( PageDataSettingSysChannel.operateData.curhtml==true)
        {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65);
        }else
        {
            $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+(-65));

        }
    }
    UpdataChannelScrollBar(hiWebOsFrame.settingssyschl.data);
    }
    catch (e)
    {
        debugPrint(e.message,DebugLevel.ERROR)
    }
}
function SettingSysChlUl1Left()
{

    if(this.SelectedIndex!=this.page.operateData.curfocus)
    {
        this.page.operateData.curfocus=this.SelectedIndex;
        this.page.operateData.curselect=0;
        this.page.rewrite();
        this.page.hiFocus("setting_sys_chl_ul1");
        if(this.page.data.setting_sys_chl_ul1.Data.length>3)
        {
            if(this.getFirstPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","hidden");
                $("#setting_sys_chl_rarrow").css("visibility","visible");
                }else
                {
                    $("#setting_sys_chl_larrow").css("visibility","visible");
                    $("#setting_sys_chl_rarrow").css("visibility","hidden");
                }

            }
            else if(this.getLastPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","hidden");
                }else
                {
                    $("#setting_sys_chl_larrow").css("visibility","hidden");
                    $("#setting_sys_chl_rarrow").css("visibility","visible");
                }
            }
            else{
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","visible");
               // $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-1)+65)
            }
            var beginindex=this.page.getCaE("setting_sys_chl_ul1").BeginIdx;
           // $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+(-65));
            }
        }
        else{
            $("#setting_sys_chl_larrow").css("visibility","hidden");
            $("#setting_sys_chl_rarrow").css("visibility","hidden");
            //$("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65)
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
                $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+(-65));
            }
        }
        UpdataChannelScrollBar(this.page.data);

    }



}

function SettingSysChlUl2Left()
{

    if(this.page.operateData.curfocus>0)
    {
        this.page.operateData.curfocus--;
        this.page.operateData.curselect=0;
        this.page.rewrite();
        this.page.hiFocus("setting_sys_chl_ul1");
        if(this.page.data.setting_sys_chl_ul1.Data.length>3)
        {
            if(this.page.getCaE("setting_sys_chl_ul1").getFirstPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","hidden");
                $("#setting_sys_chl_rarrow").css("visibility","visible");
                }else
                {
                    $("#setting_sys_chl_larrow").css("visibility","visible");
                    $("#setting_sys_chl_rarrow").css("visibility","hidden");
                }

            }
            else if(this.page.getCaE("setting_sys_chl_ul1").getLastPageFlag())
            {
                if( PageDataSettingSysChannel.operateData.curhtml==true)
                {
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","hidden");
                }else
                {
                    $("#setting_sys_chl_larrow").css("visibility","hidden");
                    $("#setting_sys_chl_rarrow").css("visibility","visible");
                }
            }
            else{
                $("#setting_sys_chl_larrow").css("visibility","visible");
                $("#setting_sys_chl_rarrow").css("visibility","visible");
                // $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-1)+65)
            }
            var beginindex=this.page.getCaE("setting_sys_chl_ul1").BeginIdx;
           // $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-beginindex)+(-65));
            }
        }
        else{
            $("#setting_sys_chl_larrow").css("visibility","hidden");
            $("#setting_sys_chl_rarrow").css("visibility","hidden");
           // $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65)
            if( PageDataSettingSysChannel.operateData.curhtml==true)
            {
                $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65);
            }else
            {
                $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+(-65));
            }
        }
        UpdataChannelScrollBar(this.page.data);
        $("#setting_sys_chl_srcollbar").css("top",0);
        this.page.operateData.pageindex=0;
    }




}
function SettingSysChlEsc()
{
    this.page.close();
    //this.page.operateData.curfocus=0;
//    PageDataSettingSysSecurity.

    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();
    hiWebOsFrame.settingssyssecurity.rewriteDataOnly();
}
function SettingSysChannelpageUp()
{
    debugPrint(" the channel up key "+PageDataSettingSysChannel.operateData.pageindex);
    this.page.getCaE("setting_sys_chl_ul2").pageUp();
    if(PageDataSettingSysChannel.operateData.pageindex>0)
    {
        PageDataSettingSysChannel.operateData.pageindex--;
        var temp=PageDataSettingSysChannel.operateData.pageindex*PageDataSettingSysChannel.operateData.step;
        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));
    }
//    if(this.SelectedIndex>8&&(this.SelectedIndex-9)%9==0)
//    {
//        var temp=parseInt((this.SelectedIndex+1)/8)*PageDataSettingSysChannel.operateData.step;
//        // var temp=(this.SelectedIndex-8)*PageDataSettingSysChannel.operateData.step;
//        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));
//    }
}
function SettingSysChannelpagedown()
{
    debugPrint(" the channel dopwn key "+PageDataSettingSysChannel.operateData.pageindex);
    this.page.getCaE("setting_sys_chl_ul2").pageDown();
    if(PageDataSettingSysChannel.operateData.pageindex+1<PageDataSettingSysChannel.operateData.pagenum)
    {
        PageDataSettingSysChannel.operateData.pageindex++;
        var temp=PageDataSettingSysChannel.operateData.pageindex*PageDataSettingSysChannel.operateData.step;
        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));
    }
//    if(this.SelectedIndex>8&&(this.SelectedIndex+9)%9==0)
//    {
//        var temp=parseInt((this.SelectedIndex+9)/9)*PageDataSettingSysChannel.operateData.step;
//        // var temp=(this.SelectedIndex-8)*PageDataSettingSysChannel.operateData.step;
//        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));
//    }
}
function SettingSysChlUl2Down()
{

    if((this.SelectedIndex)%9==0)
    {

        var temp=parseInt((this.SelectedIndex)/9)*PageDataSettingSysChannel.operateData.step;
        PageDataSettingSysChannel.operateData.pageindex=parseInt((this.SelectedIndex)/9);
        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));

    }
//    if(this.SelectedIndex < PageDataSettingSysChannel.setting_sys_chl_ul2.Data.length&&this.SelectedIndex>8)
//    {
//
//        var temp=(this.SelectedIndex-8)*PageDataSettingSysChannel.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));
//
//    }

}
function SettingSysChlUl2Up()
{

    if(this.SelectedIndex>0&&(this.SelectedIndex+1)%9==0)
    {

        var temp=parseInt((this.SelectedIndex)/9)*PageDataSettingSysChannel.operateData.step;
        // var temp=(this.SelectedIndex-8)*PageDataSettingSysChannel.operateData.step;
        PageDataSettingSysChannel.operateData.pageindex=parseInt((this.SelectedIndex)/9);
        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));

    }
//    if(this.SelectedIndex <  PageDataSettingSysChannel.setting_sys_chl_ul2.Data.length-9)
//    {
//
//        var temp=this.SelectedIndex*PageDataSettingSysChannel.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_chl_srcollbar").css("top",parseInt(temp));
//
//    }
}

function SettingSysChlUl2Enter()
{

    if(this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].lockflag)
    {
        // todo  js set false
        this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].lockflag=false;

     //   this.page.operateData.curchllist[this.SelectedIndex].lockflag=false;
        model.parentlock.ChannelBlock(0,this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].uid,this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].listUid);
      //  chl_data_setChannelLockInfo(this.page.operateData.curchllist[this.SelectedIndex].uid,false);
        debugPrint("unlock channle id "+this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].uid+"playid"+this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].listUid);
        this.page.operateData.curchllist[this.page.operateData.curfocus].list[this.SelectedIndex].attr= this.page.operateData.curchllist[this.page.operateData.curfocus].list[this.SelectedIndex].attr & (~(1 << 8));
        var tempList = this.page.operateData.curchllist[ this.page.operateData.curfocus];
        var tempChnl = tempList.list[this.SelectedIndex];
        livetvchlist.updateChannelAttribute(tempList.name,tempChnl.uid,tempChnl.listUid,4, tempChnl.attr);
    }
    else
    {// todo  js set true
        this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].lockflag=true;
        //this.page.operateData.curchllist[this.SelectedIndex].lockflag=true;
        model.parentlock.ChannelBlock(1,this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].uid,this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].listUid);
       // chl_data_setChannelLockInfo(this.page.operateData.curchllist[this.SelectedIndex].uid,true);
        debugPrint("lock channle id "+this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].uid+"playid"+this.page.operateData.curchllist[ this.page.operateData.curfocus].list[this.SelectedIndex].listUid);

        this.page.operateData.curchllist[this.page.operateData.curfocus].list[this.SelectedIndex].attr= this.page.operateData.curchllist[this.page.operateData.curfocus].list[this.SelectedIndex].attr | (1 << 8);
        var tempList = this.page.operateData.curchllist[ this.page.operateData.curfocus];
        var tempChnl = tempList.list[this.SelectedIndex];
        livetvchlist.updateChannelAttribute(tempList.name,tempChnl.uid,tempChnl.listUid,4 , tempChnl.attr);
    }
    this.page.operateData.curselect=this.SelectedIndex;
    this.page.rewriteDataOnly();
    SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);

}
function UpdataChannelScrollBar(pageData)
{
    var i=pageData.setting_sys_chl_ul2.Data.length;
    pageData.operateData.pagenum=Math.floor(pageData.setting_sys_chl_ul2.Data.length/9);
    if(pageData.setting_sys_chl_ul2.Data.length>pageData.operateData.pagenum*9)
    {
        pageData.operateData.pagenum=pageData.operateData.pagenum+1;
    }
    if(i>9)
    {
        var temp=parseInt(670/pageData.operateData.pagenum);
        $("#setting_sys_chl_srcollbar").css("visibility","visible");
        $("#setting_sys_chl_srcollbar").css("height",temp);
    }
    else
    {
        $("#setting_sys_chl_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=670/pageData.operateData.pagenum;

}
//var syschlbeginindex=0;
function ChannelOpenHandler()
{
  try{
    UpdataChannelScrollBar(this.page.data);
    if(this.page.data.setting_sys_chl_ul1.Data.length>3)
    {
    if(this.getCaE("setting_sys_chl_ul1").getFirstPageFlag())
    {
        if( PageDataSettingSysChannel.operateData.curhtml==true)
        {
        $("#setting_sys_chl_larrow").css("visibility","hidden");
        $("#setting_sys_chl_rarrow").css("visibility","visible");
        }else{
            $("#setting_sys_chl_larrow").css("visibility","visible");
            $("#setting_sys_chl_rarrow").css("visibility","hidden");

        }
       // $("#setting_sys_chl_select").css("left", 297*(this.getCaE("setting_sys_chl_ul1").SelectedIndex)+65)
        if( PageDataSettingSysChannel.operateData.curhtml==true)
        {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65);
        }else
        {
            $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+(-65));

        }
    }
    else if(this.getCaE("setting_sys_chl_ul1").getLastPageFlag())
    {
        if( PageDataSettingSysChannel.operateData.curhtml==true)
        {
        $("#setting_sys_chl_larrow").css("visibility","visible");
        $("#setting_sys_chl_rarrow").css("visibility","hidden");
        }else{
            $("#setting_sys_chl_larrow").css("visibility","hidden");
            $("#setting_sys_chl_rarrow").css("visibility","visible");
        }
      //  $("#setting_sys_chl_select").css("left", 297*(this.getCaE("setting_sys_chl_ul1").SelectedIndex-1)+65);
        if( PageDataSettingSysChannel.operateData.curhtml==true)
        {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-1)+65);
        }else
        {
            $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-1)+(-65));
        }
    }
    }
    else{
        $("#setting_sys_chl_larrow").css("visibility","hidden");
        $("#setting_sys_chl_rarrow").css("visibility","hidden");
        if( PageDataSettingSysChannel.operateData.curhtml==true)
        {
            $("#setting_sys_chl_select").css("left", 297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+65);
        }else
        {
            $("#setting_sys_chl_select").css("left", -297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex)+(-65));

        }
    }
     // var index=this.page.getCaE("setting_sys_chl_ul1").SelectedIndex;
   //   debugE("index"+index)
   //   var tempstring=$("#setting_sys_chl_line").html();
   //   debugE("tempstring"+(tempstring))
     // document.getElementById("setting_sys_chl_select").style.left=297*(this.page.getCaE("setting_sys_chl_ul1").SelectedIndex-1)+65+"px"
  }catch (e)
  {
      debugE(e.message);
  }

}


function SettingSecChannelLock(uid, action)
{
    try
    {
        model.servicelist.SetServiceAttribute(uid,PARENTAL_LOCK,action);
    }
    catch(e)
    {
        debugPrint(e.message,DebugLevel.ERROR);

    }

}