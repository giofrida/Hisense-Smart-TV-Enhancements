/**
 * Created by Administrator on 14-7-1.
 */
function getSettingVerlistPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_ver_list_title",
            "description": "setting head",
            "CaEType": "span"
        },

        {
            "id": "setting_ver_list_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
//                    "firstFocusId": "select_text",//该项目如果存在。则表示在定位该项目时自动定位到其子项
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },

            "handler": {
                "befEnterHandler": "SettingVerlistEnHandler", "aftDownHandler": "SettingVerlistDownHandler",
                "aftUpHandler": "SettingVerlistUpHandler","aftEscHandler": "SettingVerlistEscHandler"

            },
            oriCaE: [

                {
                    "id": "setting_ver_list_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_ver_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_ver_list_txt1", "setting_ver_list_img1"],
                "PageSize":5

            }
        }
    ];
    return PageDataSettingVerlist;
}
var PageDataSettingVerlist={

    "setting_ver_list_title":{Data:"Update package list"},
    "setting_ver_list_ul1": {Data:[
        {
            "setting_ver_list_img1": {Data:"img/unselectedBall.png"},
            "setting_ver_list_txt1": {Data:"v1.00.00"}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "curselect":0,
        "curverlist":[
            {
                name:"v1.00.00"

            },
            {
                name:"v2.00.00"

            }
        ]
    },
    "langData":{
        "Update package list":["Update package list","Liste mit Aktualisierungspaketen","Lista pacchetto di aggiornamento","Atualizar lista de pacotes","Actualizar la lista de paquetes","Liste ensemble de mises à jour","Liste over oppdateringspakker","Uppdatera paketlistan","Opdater pakkelisten","Päivitä pakkauslista"," 升级包列表"]
    },
    rewrite:function(pageData){

        var element={};
        //pageData.setting_ver_list_title.Data=pageData.operateData.titlelist[pageData.operateData.curtitle];
        pageData.setting_ver_list_ul1.Data=[];
        $.each(pageData.operateData.curverlist, function (k, v) {
                element.setting_ver_list_img1={};
                element.setting_ver_list_txt1={};
                if(pageData.operateData.curselect==k)
                {
                    element.setting_ver_list_img1.Data="img/selectedBall.png";
                }
                else
                {
                    element.setting_ver_list_img1.Data="img/unselectedBall.png";
                }
                element.setting_ver_list_txt1.Data= v.name;
                pageData.setting_ver_list_ul1.Data.push(_cloneObj(element));
            })
        if(!!pageData.operateData.curselect)
        {
            pageData.setting_ver_list_ul1.SelectedIndex=pageData.operateData.curselect;
        }
        else{
            pageData.setting_ver_list_ul1.SelectedIndex=0;
        }

    }

};

function SettingVerlistPageonDestroy()
{
    if(!!timer1)
    {
        clearInterval(timer1);
    }
    hiWebOsFrame.settingsverlist=null;
}
function verlistopenHandler()
{
    var element={};
    PageDataSettingVerlist.operateData.curverlist=[];
    for(var i=0;i<g_packetlist.length;i++)
    {
        element.name=g_packetlist[i];
        PageDataSettingVerlist.operateData.curverlist.push(_cloneObj(element));

    }
    PageDataSettingVerlist.operateData.curselect=null;
    //debugPrint("list2openHandler"+JSON.stringify(PageDataSettingSysList2.operateData.curvolumlist));
    this.page.rewrite();
    Updatalist1ScrollBar(this.data);
}
function Updatalist1ScrollBar(pageData)
{
    var i=pageData.setting_ver_list_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_ver_list_srcollbar").css("height",temp);
        $("#setting_ver_list_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_ver_list_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=parseInt(425/i);
}

function SettingVerlistEnHandler()
{
    hiWebOsFrame.enablePageKeysRemove(hiWebOsFrame.settingsverlist,[VK_ENTER]);
    debugPrint("SettingVerlistEnHandler");
    this.page.operateData.curselect=this.SelectedIndex;
    this.page.rewriteDataOnly();
    setTimeout(closeVerlistpage,500);
}
var timer1=null;
function closeVerlistpage()
{
    debugPrint("closepage");
    hiWebOsFrame.settingsverlist.close();
    if(!tv)
    {

        hiWebOsFrame.createPage('setting_update_ver_page',null, hiWebOsFrame.settingsupdatefir, null,function(verinfo){
            hiWebOsFrame.settingsupdateverinfo=verinfo;
            PageDateSettingUpdateverinfo.operateData.newver="v10000";// model.softupdate.getNewPacket();
            hiWebOsFrame.settingsupdateverinfo.open();
            hiWebOsFrame.settingsupdateverinfo.hiFocus();
            hiWebOsFrame.settingsupdateverinfo.rewriteDataOnly();
        });

    }
    else
    {   try
       {
            hiWebOsFrame.createPage('setting_update_ver_page',null, hiWebOsFrame.settingsupdatefir, null,function(verinfo){
            hiWebOsFrame.settingsupdateverinfo=verinfo;
            PageDateSettingUpdateverinfo.operateData.curver= model.softupdate.getCurrentPacket();
            PageDateSettingUpdateverinfo.operateData.newver=g_packetlist[ hiWebOsFrame.settingsverlist.operateData.curselect];// model.softupdate.getNewPacket();
            PageDateSettingUpdateverinfo.operateData.upgradecontent="";
            model.softupdate.SelectPacket( hiWebOsFrame.settingsverlist.operateData.curselect);
            debugPrint("select the version"+hiWebOsFrame.settingsverlist.operateData.curselect);
                if(g_updatestate==1)
                {
                    debugPrint("the imgelist has got ")
                    hiWebOsFrame.settingsupdateverinfo.rewriteDataOnly();
                    hiWebOsFrame.settingsupdateverinfo.open();
                    hiWebOsFrame.settingsupdateverinfo.hiFocus();
                    hiWebOsFrame.enablePageKeys(hiWebOsFrame.settingsverlist,[VK_ENTER]);

                }
                else
                {
                    debugPrint("start the timer to get the g_updatestate");
                    timer1=setInterval(mytimerfunc,200);
                }
            });
         }
        catch (e)
        {
            debugPrint(e.message);
        }
    }

}
function mytimerfunc()
{
    if(g_updatestate==1)
    {
        debugPrint("g_updatestate==1 detect!!!!")
        clearInterval(timer1);
        timer1=null;
        hiWebOsFrame.settingsupdateverinfo.rewriteDataOnly();
        hiWebOsFrame.settingsupdateverinfo.open();
        hiWebOsFrame.settingsupdateverinfo.hiFocus();
        hiWebOsFrame.enablePageKeys(hiWebOsFrame.settingsverlist,[VK_ENTER]);
    }

}
function SettingVerlistEscHandler()
{
    this.page.close();
    hiWebOsFrame.settingsupdatefir.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    settingUpdatefirEscHandler();

}
function SettingVerlistUpHandler()
{
    var temp=PageDataSettingVerlist.setting_ver_list_ul1.Data.length;
    if(PageDataSettingVerlist.setting_ver_list_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
    {
        var temp=this.SelectedIndex*PageDataSettingVerlist.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_ver_list_srcollbar").css("top",temp);

    }
}
function SettingVerlistDownHandler()
{
    if(this.SelectedIndex < PageDataSettingVerlist.setting_ver_list_ul1.Data.length&&this.SelectedIndex>4)
    {
        var temp=(this.SelectedIndex-4)*PageDataSettingVerlist.operateData.step;
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_ver_list_srcollbar").css("top",temp);
    }
}
