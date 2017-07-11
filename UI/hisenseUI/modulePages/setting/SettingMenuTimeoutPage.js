/**
 * Created by Administrator on 14-6-18.
 */
function getSettingMenutimeoutPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_mt_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_sys_mt_ul1",
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
                "aftEnterHandler": "SettingMenuTimeoutENHandler",
                "aftEscHandler": "SettingMenuTimeoutEscHandler",
                "aftUpHandler": "SettingSysmenutimeoutUpHandler",
                "aftDownHandler": "SettingSysmenutimeoutDownHandler"
            },
            oriCaE: [

                {
                    "id": "setting_sys_mt_txt1",
                    "description": "名称",
                    "CaEType": "span",
                    enableHtml: true
                },
                {
                    "id": "setting_sys_mt_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_sys_mt_txt1", "setting_sys_mt_img1"]
                //"PageSize":5
            }
        }
    ];
    return PageDataSettingSysTimeout;
}
var PageDataSettingSysTimeout={

    "setting_sys_mt_title":{Data:"Menu Timeout"},
    "setting_sys_mt_ul1": {Data:[
        {
            "setting_sys_mt_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mt_txt1": {Data:"OFF"}
        }
        ,
        {
            "setting_sys_mt_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mt_txt1": {Data:"5s"}
        },
        {
            "setting_sys_mt_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mt_txt1": {Data:"10s"}
        },
        {
            "setting_sys_mt_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mt_txt1": {Data:"20s"}
        },
        {
            "setting_sys_mt_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mt_txt1": {Data:"30s"}
        },
        {
            "setting_sys_mt_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_mt_txt1": {Data:"60s"}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        "parentpagelist":["menutimeout","inputtable","defaultsource","autosleep"],
        "parentpage":0,
        "parentindex":0,
        "beginindex":0,
        "curselect":0,
        "tvnamelist":["Manual Input","Cable TV","Antenna TV","Satellite TV","DVR","Blu-ray Player","DVD Player","AV Receiver","Game Console","Streaming Box","Computer"],
        "menlist":["Off","10s","20s","30s","60s"],
        "inputlist":[
            {
                "name":"TV",
                "uid":0

            },
            {
                "name":"Hdmi1",
                "uid":1
            },
            {
                "name":"Hdmi2",
                "uid":2
            },
            {
                "name":"Hdmi3",
                 "uid":3
            },
            {
                "name":"Hdmi4",
                "uid":4
            }
            ,
            {
                "name":"AV",
                "uid":5
            }],
        "autosleeplist":["Off","3H","4H"],
        "titlelist":["Menu Timeout","Rename","Default LiveTV Source","Auto Sleep"]
    },
    "langData":{
        "Auto Sleep": [],
        "3H": [],
        "4H": [],
        "Rename": [],
        "Manual Input": [],
        "10s":[],
        "20s":[],
        "30s":[],
        "60s":[],
        "Default LiveTV Source":[],
        "Menu Timeout":["Menu Timeout","Menü-Timeout","Timeout di menu","Timeout do Menu","Límite de tiempo de menú","Temporisation Menu","Tidsavbrudd for meny","Timeout för menyn","Menu Timeout","Valikon viive","菜单时间"],
        "TV Name":["TV Name","TV-Name","Nome della TV","Nome da TV","Nombre de TV","Nom TV","TV-navn","TV-namn","TV-navn","TV nimi","本机名称"],
        "On":["On","Ein","Acceso","Ligado","Encendido","Activé","På","På","Til","Päällä","开"],
        "Off":["Off","Aus","Spento","Desligado","Apagado","Désactivé","Av","Av","Fra","Pois päältä","关"]
    },
    rewrite:function(pageData){
       pageData.setting_sys_mt_title.Data=pageData.operateData.titlelist[pageData.operateData.parentpage]

        var element={};
        pageData.setting_sys_mt_ul1.Data=[];
        if(pageData.operateData.parentpage==0)
        {
            $.each(pageData.operateData.menlist, function (k, v) {
            element.setting_sys_mt_img1={};
            element.setting_sys_mt_txt1={};
            if(pageData.operateData.curselect==k)
            {
                element.setting_sys_mt_img1.Data="img/selectedBall.png";
            }
            else
            {
                element.setting_sys_mt_img1.Data="img/unselectedBall.png";
            }
            element.setting_sys_mt_txt1.Data= v;
            pageData.setting_sys_mt_ul1.Data.push(_cloneObj(element));
        });
        }
        else if(pageData.operateData.parentpage==1)
        {
            $.each(pageData.operateData.tvnamelist, function (k, v) {
                element.setting_sys_mt_img1={};
                element.setting_sys_mt_txt1={};
                if(pageData.operateData.curselect==k)
                {
                    element.setting_sys_mt_img1.Data="img/selectedBall.png";
                }
                else
                {
                    element.setting_sys_mt_img1.Data="img/unselectedBall.png";
                }
                element.setting_sys_mt_txt1.Data= v;
                pageData.setting_sys_mt_ul1.Data.push(_cloneObj(element));
            });
        }
        else if(pageData.operateData.parentpage==2)
        {
            $.each(pageData.operateData.inputlist, function (k, v) {
                element.setting_sys_mt_img1={};
                element.setting_sys_mt_txt1={};
                if(pageData.operateData.curselect==k)
                {
                    element.setting_sys_mt_img1.Data="img/selectedBall.png";
                }
                else
                {
                    element.setting_sys_mt_img1.Data="img/unselectedBall.png";
                }
                element.setting_sys_mt_txt1.Data= v.name;
                if(hiWebOsFrame.getCurrentArea()=="SA"&&v.name.toLowerCase()=="component"&&!!langPackages["Component"])
                {
                    element.setting_sys_mt_txt1.Data = langPackages["Component"][hiWebOsFrame.getCurrentLanguageIndex()];
                }
                pageData.setting_sys_mt_ul1.Data.push(_cloneObj(element));
            });
        }
        else if(pageData.operateData.parentpage==3)
        {
            $.each(pageData.operateData.autosleeplist, function (k, v) {
                element.setting_sys_mt_img1={};
                element.setting_sys_mt_txt1={};
                if(pageData.operateData.curselect==k)
                {
                    element.setting_sys_mt_img1.Data="img/selectedBall.png";
                }
                else
                {
                    element.setting_sys_mt_img1.Data="img/unselectedBall.png";
                }
                element.setting_sys_mt_txt1.Data= v;
                pageData.setting_sys_mt_ul1.Data.push(_cloneObj(element));
            });
        }
        pageData.setting_sys_mt_ul1.SelectedIndex=pageData.operateData.curselect;
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_mt_ul1").css("float","left");
            $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
            $(".setting_sys_list1_srcobar_container").css("float","right");
            $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0");

        }
        else {
            $(".setting_sys_mt_ul1").css("float","right");
            $(".setting_sys_mt_ul1").css("margin","0 65px 0 0");
            $(".setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px ");


        }
    }
};

function SettingMenutimeoutPageOnDestroy()
{
    hiWebOsFrame.settingssysmenutimeout=null;
}
function SettingMenuTimeoutENHandler()
{
    if(this.page.operateData.parentpage==0)//menutimeout
    {
        // todo setvalue
        hiWebOsFrame.lockAllKeys("setting");
       SetMenuTimeout(this.SelectedIndex)
        this.page.operateData.curselect=this.SelectedIndex;
        this.page.rewriteDataOnly();
        setTimeout(closelmentimeoutpage,500);
        SetRecentUse("Menu Timeout",4,RECNT_AD);

    }
    else if(this.page.operateData.parentpage==1)//input name
    {
        if(this.SelectedIndex>0)
        {
            // todo setvalue
            hiWebOsFrame.lockAllKeys("setting");
            this.page.operateData.curselect=this.SelectedIndex;
            this.page.rewriteDataOnly();
           //  eval('PageDataSettingSysInputLabel.operateData.curname'+this.page.operateData.parentindex+'=this.page.operateData.tvnamelist[this.page.operateData.curselect]')
            PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].curname=this.page.operateData.tvnamelist[this.page.operateData.curselect];
            debugPrint("to rename the input uid"+PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].uid+"name"+this.page.operateData.tvnamelist[this.page.operateData.curselect]);
            model.source.InputRename(PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].uid,this.page.operateData.tvnamelist[this.page.operateData.curselect]);
            //CHL_setSourceRename(PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].uid,this.page.operateData.tvnamelist[this.page.operateData.curselect])
            livetvmain.updateSourceAttribute(PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].uid, 4, this.page.operateData.tvnamelist[this.page.operateData.curselect]);
            hiWebOsFrame.settingssysinputtable.rewriteDataOnly();
            setTimeout(closelmentimeoutpage,500);
            SetRecentUse("Input Labels",4,RECNT_AD);
//            PageDataFirstCls.operateData.curname=this.page.operateData.tvnamelist[this.page.operateData.curselect];
//            SetTVname( PageDataFirstCls.operateData.curname);
//            SetRecentUse("TV Name",5,2);
////            hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
//                hiWebOsFrame.settingsyspwderror=page;
//                PageDateSettingSysPwderror.operateData.datatype=2;
//                page.rewriteDataOnly();
//                page.open();
//                page.hiFocus();
//
//            });
;
        //    setTimeout(tvnameinfoclose,3 * 1000);

        }
        else if(this.SelectedIndex==0)
        {
            //todo
            //  this.page.operateData.curselect=this.SelectedIndex;
            this.page.close();
            hiWebOsFrame.createPage('setting_sys_tvname_page', null, null, null, function (name) {
                hiWebOsFrame.settingsystvname = name;
                $("#setting_sys_tvname_input1").val("");
                 hiWebOsFrame.settingsystvname.open();
                 hiWebOsFrame.settingsystvname.hiFocus("setting_sys_tvname_input1");
            });
        }

    }
    else if(this.page.operateData.parentpage==2)
    {
        hiWebOsFrame.lockAllKeys("setting");
        SetDefaultSource(PageDataSettingSysTimeout.operateData.inputlist[this.SelectedIndex].uid);
        this.page.operateData.curselect=this.SelectedIndex;
        PageDataSettingSysAd.operateData.curinputselect=PageDataSettingSysTimeout.operateData.curselect;
        this.page.rewriteDataOnly();
        setTimeout(closelmentimeoutpage,500);
        SetRecentUse("Default LiveTV Source",4,RECNT_AD);
    }
    if(this.page.operateData.parentpage==3)//autosleep
    {
        // todo setvalue
	 hiWebOsFrame.lockAllKeys("setting");
        SetAutoSleepSwitch(this.SelectedIndex)
        this.page.operateData.curselect=this.SelectedIndex;
        this.page.rewriteDataOnly();
        setTimeout(closelmentimeoutpage,500);
        SetRecentUse("Auto Sleep",4,RECNT_AD);

    }
}

function closelmentimeoutpage()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        if(PageDataSettingSysTimeout.operateData.parentpage==0)//menutimeout
        {
            hiWebOsFrame.settingssysmenutimeout.close();
            PageDataSettingSysAd.operateData.curmenutimeout=PageDataSettingSysTimeout.operateData.curselect;
            hiWebOsFrame.settingssysad.rewriteDataOnly();
            hiWebOsFrame.settingssysad.open();
            hiWebOsFrame.settingssysad.hiFocus();

        }
        else if(PageDataSettingSysTimeout.operateData.parentpage==1)
        {
            hiWebOsFrame.settingssysmenutimeout.close();
            hiWebOsFrame.settingssysinputtable.open();
            hiWebOsFrame.settingssysinputtable.hiFocus();
            debugPrint(" closelmentimeoutpage");

        }
        else if(PageDataSettingSysTimeout.operateData.parentpage==3)
        {
            hiWebOsFrame.settingssysmenutimeout.close();
            PageDataSettingSysAd.operateData.curautosleep=PageDataSettingSysTimeout.operateData.curselect;
            hiWebOsFrame.settingssysad.open();
            hiWebOsFrame.settingssysad.hiFocus();
            hiWebOsFrame.settingssysad.rewriteDataOnly();

        }
        else{
            hiWebOsFrame.settingssysmenutimeout.close();
            hiWebOsFrame.settingssysad.open();
            hiWebOsFrame.settingssysad.hiFocus();
        }
        hiWebOsFrame.unLockAllKeys("setting");
    }
    else
    {
        hiWebOsFrame.unLockAllKeys("setting");
        hiWebOsFrame.settingssysmenutimeout.close();
      //  hiWebOsFrame.settingssyslist2.destroy();
    }

}
function tvnameinfoclose() {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingssysmenutimeout.open();
        hiWebOsFrame.settingssysmenutimeout.hiFocus();
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    else{
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();
    }


}
function SettingMenuTimeoutEscHandler()
{
    if(this.page.operateData.parentpage==0)//menutimeout
    {
        this.page.close();
        PageDataSettingSysAd.operateData.curmenutimeout=this.page.operateData.curselect;
        hiWebOsFrame.settingssysad.rewriteDataOnly();
        hiWebOsFrame.settingssysad.open();
        hiWebOsFrame.settingssysad.hiFocus();

    }
    else if(this.page.operateData.parentpage==1)//name
    {
        this.page.close();
        hiWebOsFrame.settingssysinputtable.open();
        hiWebOsFrame.settingssysinputtable.hiFocus();
       // hiWebOsFrame.settingssysinputtable.rewriteDataOnly();

    }
    else if(this.page.operateData.parentpage==2)//name
    {
        this.page.close();
        hiWebOsFrame.settingssysad.open();
        hiWebOsFrame.settingssysad.hiFocus();
        hiWebOsFrame.settingssysad.rewriteDataOnly();

    }
    else if(PageDataSettingSysTimeout.operateData.parentpage==3)
    {
        hiWebOsFrame.settingssysmenutimeout.close();
        PageDataSettingSysAd.operateData.curautosleep=PageDataSettingSysTimeout.operateData.curselect;
        hiWebOsFrame.settingssysad.open();
        hiWebOsFrame.settingssysad.hiFocus();
        hiWebOsFrame.settingssysad.rewriteDataOnly();

    }
}
function SetMenuTimeout(type)
{   var timeoutlist=[0,10,20,30,60];
    if(type<6&&type>=0)
    {
        model.basicSetting.setMenuDelayDisappear(timeoutlist[type]);
        hiWebOsFrame.setAutoCloseTimeLength(timeoutlist[type]);
        debugPrint("setting the menu timeout "+timeoutlist[type]);
    }
}

function SetAutoSleepSwitch(index)
{
    try
    {
         model.system.setAutoSleepSwitch(index);
         debugPrint("SetAutoSleepSwitch on",index);


    }catch (e)
    {
        debugE(e.message);
    }


}
function SetDefaultSource(uid)
{
    try
    {
        model.system.setSystemDefaultInput(parseInt(uid,10));//入参为要求为整形
        debugPrint("set the source "+uid)
    }catch (e)
    {
        debugE(e.message)
    }
}
function SettingSysmenutimeoutUpHandler()
{
        if(PageDataSettingSysTimeout.operateData.beginindex>this.SelectedIndex)
        {
            PageDataSettingSysTimeout.operateData.beginindex=PageDataSettingSysTimeout.operateData.beginindex-1;
            debugPrint("PageDataSettingSysTimeout.operateData.beginindex"+PageDataSettingSysTimeout.operateData.beginindex);
            var temp=parseInt(PageDataSettingSysTimeout.operateData.beginindex*PageDataSettingSysTimeout.operateData.step);
            $("#setting_sys_menutimeout_srcollbar").css("top",temp);
            {
                $("#setting_sys_mt_ul1").css("top","-"+95*(PageDataSettingSysTimeout.operateData.beginindex)+"px");
            }

    }
}
function SettingSysmenutimeoutDownHandler()
{
       if((PageDataSettingSysTimeout.operateData.beginindex+4)<this.SelectedIndex)
       {
        var temp=parseInt((this.SelectedIndex-4)*PageDataSettingSysTimeout.operateData.step);
        $("#setting_sys_menutimeout_srcollbar").css("top",temp);
        $("#setting_sys_mt_ul1").css("top","-"+95*(this.SelectedIndex-4)+"px");
         PageDataSettingSysTimeout.operateData.beginindex=this.SelectedIndex-4;
         debugPrint("PageDataSettingSysTimeout.operateData.beginindex"+PageDataSettingSysTimeout.operateData.beginindex);
       }

}

function mennutimeoutopenHandler()
{
    UpdatatimeoutScrollBar(this.data);
    if(PageDataSettingSysTimeout.setting_sys_mt_ul1.Data.length>5)
    {   var index2=0;
        var index=this.page.getCaE("setting_sys_mt_ul1").SelectedIndex;
        if(index>4)
        {
             index2=index-4;
        }
        debugPrint("index"+index);
        $("#setting_sys_menutimeout_srcollbar").css("top",parseInt(425/PageDataSettingSysTimeout.setting_sys_mt_ul1.Data.length)*index2);
        if(index<4)
        {
            $("#setting_sys_mt_ul1").css("top","0px");
            PageDataSettingSysTimeout.operateData.beginindex=0;
        }else
        {
            $("#setting_sys_mt_ul1").css("top","-"+95*(index-4)+"px");
            PageDataSettingSysTimeout.operateData.beginindex=index-4;
        }
        debugPrint("PageDataSettingSysTimeout.operateData.beginindex"+PageDataSettingSysTimeout.operateData.beginindex);

    }
    else
    {   var temp=610-(5-PageDataSettingSysTimeout.setting_sys_mt_ul1.Data.length)*95
        $("#setting_sys_menu_time_content").css("height",temp+'px');
        PageDataSettingSysTimeout.operateData.beginindex=0;
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".setting_sys_mt_ul1").css("float","left");
        $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
        $(".setting_sys_list1_srcobar_container").css("float","right");
        $(".setting_sys_list1_srcobar_container").css("margin","25px  15px 0 0");

    }
    else {
        $(".setting_sys_mt_ul1").css("float","right");
        $(".setting_sys_mt_ul1").css("margin","0 65px 0 0");
        $(".setting_sys_list1_srcobar_container").css("float","left");
        $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px ");


    }


}

function UpdatatimeoutScrollBar(pageData)
{
    var i=pageData.setting_sys_mt_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_menutimeout_srcollbar").css("height",temp);
        $("#setting_sys_menutimeout_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_menutimeout_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=425/i;

}
