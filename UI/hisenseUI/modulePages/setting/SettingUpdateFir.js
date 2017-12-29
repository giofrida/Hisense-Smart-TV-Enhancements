/**
 * Created by Administrator on 14-6-18.
 */
function getSettingUpdateFirPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_update_head_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_update_head_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },

        {
            "id": "setting_update_fir_detect_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_update_fir_detect_text",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "handler": {
                "aftEscHandler": "settingUpdatefirEscHandler"
            },
            classes:
            {
                "normal":"setting_update_fir_detect_text",
                "focus":"setting_update_fir_detect_text"
            }


        },
        {
            "id": "setting_update_fir_ul1",//在页面中的按钮或者组件容器Id
            "description": "setting菜单",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_update_fir_li_normal", "focus": "setting_update_fir_li_focus",
                "dataSelected":"setting_update_fir_li_focus"
            },
            "handler": {
                "aftDownHandler": "",
                "aftUpHandler": ""
            },
            oriCaE: [
                {
                    "id": "setting_update_fir_title_text1",
                    "description": "名称",
                    "CaEType": "span"

                }

            ],
            "UlConfig":
            {
                "UlDataItem": [ "setting_update_fir_title_text1"],
                "PageSize":5
            }
        }
    ];
    updateinint();
    return PageDateSettingUpdateFir;
}
var g_sys_updating=0;
var PageDateSettingUpdateFir={
    "setting_update_head_img1":{Data:"img/quickset_more_hl.png"},
    "setting_update_head_text1":{Data:"Upgrade"},
    "setting_update_fir_ul1":{Data:[
        {

            "setting_update_fir_title_text1": {Data:"Detect version"}
        },
        {

            "setting_update_fir_title_text1": {Data:"Download upgrade package"}
        }
//        {
//
//            "setting_update_fir_title_text1": {Data:"Verify version"}
//        },
//        {
//
//            "setting_update_fir_title_text1": {Data:"Upgrade version"}
//        }

    ],
        // "SelectedIndex":0,
        "DataSelectedIndex":0},

    "setting_update_fir_detect_img1":{Data:"img/loading.png"},
    "setting_update_fir_detect_text":{Data:"Checking for update"},
    "operateData": {
        "curtypelist":["internet","oad","usb"],
        "curtype":0

    },
    "langData":{
        "Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
//        "Check for update":["Check for update","Nach Aktualisierungen suchen","Controlla per l'aggiornamento","Verificar atualizações","Buscar actualizaciones","Recherche de mise à jour","Se etter oppdateringer","Sök uppdatering","Tjek for opdatering","Tarkista päivitykset","版本检测 "]
        "Download upgrade package":["Download update package","Aktualisierungspaket herunterladen","Scarica il pacchetto di aggiornamento","Transferir pacote de atualização","Descargar paquete de actualización","Télécharger ensemble de mises à jour ","Last ned oppdateringspakken","Ladda ner uppdateringspaketet","Hent opdateringspakken","Lataa päivityspakkaus","下载升级包"],
//        "Verify update package":["Verify update package","Aktualisierungspaket verifizieren","Verifica il pacchetto di aggiornamento","Verificar pacote de atualização","Verificar paquete de actualización","Vérifier ensemble de mises à jour ","Kontrollere ned oppdateringspakken","Kontrollera uppdateringspaket","Bekræft opdateringspakke","Tarkistaa päivityspakkaus","校验升级包"]
        "Upgrade version":["Upgrade version","Version aktualisieren","Versione di aggiornamento","Atualizar versão","Versión de actualización","Mettre à niveau la version","Oppgraderingsversjon","Uppgradera version","Opgrader udgave","Päivitä versio","升级版本"],
        "Checking for update":["Checking for update","Nach Aktualisierungen suchen","Controllo per l'aggiornamento","Verificar atualizações","Comprobación de la actualización","Recherche de mise à jour en cours","Ser etter oppdateringer","Söker uppdatering","Kontrol af opdateringen","Tarkista päivitykset","检测版本中...."],
        "Download upgrade pack":["Download upgrade pack","Aktual.-Paket herunterladen","Scarica pacch. Aggiorn","Transferir pacote ","Descargar paq. act.","Télécharger Kit màj.","Last ned oppgr.pakke","Ladda ned uppgraderingspaket","Hent opgraderingspakke","Lataa päivityspakkaus","下载升级包"],


        "detect the version...":["detect the version...","",""],
        "Detect version":["Detect version","",""],
        "Download version":["Download version","",""],
        "Verify version":["Verify version","",""]
       // "Upgrade version":["Upgrade version","",""]

    },
    rewrite:function(pageData){
//        pageData.setting_update_head_text1.Data=pageData.langData.title[langIdx]
//        pageData.setting_update_fir_detect_text.Data=pageData.langData.detectver[langIdx];
//        pageData.setting_update_fir_ul1.Data[0].setting_update_fir_title_text1.Data=pageData.langData.ul1translist[0].text[langIdx];
//        pageData.setting_update_fir_ul1.Data[1].setting_update_fir_title_text1.Data=pageData.langData.ul1translist[1].text[langIdx];
//        pageData.setting_update_fir_ul1.Data[2].setting_update_fir_title_text1.Data=pageData.langData.ul1translist[2].text[langIdx];
//        pageData.setting_update_fir_ul1.Data[3].setting_update_fir_title_text1.Data=pageData.langData.ul1translist[3].text[langIdx];
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $("#setting_update_fir_list1").css("float","left");
          //  $("#setting_update_head_img1").css("margin","18px 0 0 35px");
//            $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
//
//            $("#setting_sys_dis_fir_txt2").css("margin"," 0 0 0 20px");
//            $(".setting_sys_log_report_text").css("margin"," 0 0 0 9px");
//            $(".setting_sys_log_report_discrption").css("margin","5px  0 0 83px");
//            $(".setting_sys_lang1__cls").css("left","510px");
        }
        else {
            $("#setting_update_fir_list1").css("float","right")
            //$("#setting_update_head_img1").css("margin","18px 35px 0 0");
//            $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
//            $("#setting_sys_dis_fir_txt2").css("margin"," 0 20px 0 0");
//            $(".setting_sys_log_report_text").css("margin"," 0 9px 0 0");
//
//            $(".setting_sys_log_report_discrption").css("margin","5px 83px 0 0");
//            $(".setting_sys_lang1__cls").css("left","358px");
        }
    }

};
var g_sys_updatetimer=null;

function updateinint()
{
    try
    {
    model.softupdate.onSearchStateChaged=onSearchStateChaged;
    if(hiWebOsFrame.getCurrentArea()=="EM"||FREEVIEWTEST)
    {
        model.softupdate.onOadSearchStateChaged=onOADSearchStateChaged;

    }
   // SetRecentUse("Check Firmware Upgrade",5,3);
    }catch (e)
    {
        debugPrint(e.message);
    }
}
function SettingUpdateFirPageonDestroy()
{
    hiWebOsFrame.settingsupdatefir=null;
}

function SettingUpdateFirPageonOpen()
{
    if ('APP_5890_SA' == currentPlatform_config || "opera4x" == currOperaVersion)
    {

        $("#setting_update_fir_detect_common").css("display","none")
        $("#setting_update_fir_detect_sa").css("display","block")
    }
    else
    {
        $("#setting_update_fir_detect_common").css("display","block")
        $("#setting_update_fir_detect_sa").css("display","none")

    }
}
function settingUpdatefirEscHandler()
{
    debugE("settingUpdatefirEscHandler");
    try
    {

    g_sys_updating=0;
    if (!!g_sys_updatetimer) {
        clearTimeout(g_sys_updatetimer);
        g_sys_updatetimer = null;
    }
    // todo cancel the update
    debugPrint("curtype"+PageDateSettingUpdateFir.operateData.curtype);
    if(PageDateSettingUpdateFir.operateData.curtype!=1)
    {
     
       try
       {
         model.softupdate.CancelSearch();
       }catch (e)
       {
           debugE(e.message)
       }

    }
    else if(hiWebOsFrame.getCurrentArea()=="EM"||FREEVIEWTEST)
    {
        try
        {
            model.softupdate.CancelOadSearch();
        }catch (e)
        {
            debugE(e.message)
        }
    }
    hiWebOsFrame.settingsupdatefir.close();
//    if(hiWebOsFrame.getCurrentArea()=="EU")
    {
        hiWebOsFrame.settingssysupdate.open();
        hiWebOsFrame.settingssysupdate.hiFocus();
    }
//    else
//    {
//    hiWebOsFrame.settingsFirst.open();
//    hiWebOsFrame.settingsFirst.hiFocus();
//    }
    if(!!hiWebOsFrame.settingsupdatefir)
    {
        hiWebOsFrame.settingsupdatefir.destroy();
    }
    if(!!hiWebOsFrame.settingsupdatedialog1)
    {
        hiWebOsFrame.settingsupdatedialog1.destroy();
    }
    if(!!hiWebOsFrame.settingsupdateverinfo)
    {
        hiWebOsFrame.settingsupdateverinfo.destroy();
    }
    if(!!hiWebOsFrame.settingsupdateprogress)
    {
        hiWebOsFrame.settingsupdateprogress.destroy();
    }
    if(!!hiWebOsFrame.settingsverlist)
    {
        hiWebOsFrame.settingsverlist.destroy();
    }
    if(!!hiWebOsFrame.settingsupdatereport)
    {
        hiWebOsFrame.settingsupdatereport.destroy();
    }
        if(!!hiWebOsFrame.settingupdatediskcheck)
    {
        hiWebOsFrame.settingupdatediskcheck.destroy();
    }
    }catch (e)
    {
        debugE(e.message)
    }
}

function settingaboutUpdateback()
{

    g_sys_updating=0;
    hiWebOsFrame.settingsupdatefir.close();
//    if(hiWebOsFrame.getCurrentArea()=="EU")
    {
        hiWebOsFrame.settingssysupdate.open();
        hiWebOsFrame.settingssysupdate.hiFocus();
    }
//    else
//    {
//        hiWebOsFrame.settingsFirst.open();
//        hiWebOsFrame.settingsFirst.hiFocus();
//    }
    if(!!hiWebOsFrame.settingsupdatefir)
    {
        hiWebOsFrame.settingsupdatefir.destroy();
    }
    if(!!hiWebOsFrame.settingsupdatedialog1)
    {
        hiWebOsFrame.settingsupdatedialog1.destroy();
    }
    if(!!hiWebOsFrame.settingsupdateverinfo)
    {
        hiWebOsFrame.settingsupdateverinfo.destroy();
    }
    if(!!hiWebOsFrame.settingsupdateprogress)
    {
        hiWebOsFrame.settingsupdateprogress.destroy();
    }
    if(!!hiWebOsFrame.settingsverlist)
    {
        hiWebOsFrame.settingsverlist.destroy();
    }
    if(!!hiWebOsFrame.settingsupdatereport)
    {
        hiWebOsFrame.settingsupdatereport.destroy();
    }

}

function StartDetectVer(type)
{
    if(type==0)//internet
    {
        try
        {
          //  model.softupdate.setSource(2);
            model.softupdate.StartSearch(2);
            PageDateSettingUpdateFir.operateData.curtype=0;///internet
            g_sys_updating=1;
            debugPrint("start to search internet version");

        }catch (e)
        {
            debugPrint(e.message);
        }
        if(!tv)
        {
            g_sys_updating=1;
            onSearchStateChaged(5);
        }
    }
    else if(type==1)//oad
    {
        try
        {

            if(hiWebOsFrame.getCurrentArea()=="EU"&&(!FREEVIEWTEST))
            {
                PageDateSettingUpdateFir.operateData.curtype=1;
                g_sys_updating=1;
                debugPrint("start to search oad version");
                g_sys_updatetimer=setTimeout(function(){
                    if (!!g_sys_updatetimer) {
                        clearTimeout(g_sys_updatetimer);
                        g_sys_updatetimer = null;
                    }
                    onSearchStateChaged(3);
                },5000);
            }
            else if(hiWebOsFrame.getCurrentArea()=="EM"||FREEVIEWTEST)
            {
                try
                {
                    if(!livetvmain.getautoOadupdateflag())
                    {
                        model.softupdate.CancelOADUpgrade();
                        livetvmain.clearautoOadupdateflag();
                        debugE(" to cancel the auto upgrade")
                    }
                    PageDateSettingUpdateFir.operateData.curtype=1;
                    g_sys_updating=1;
                    model.softupdate.StartOADSearch();
                }catch (e)
                {
                    debugPrint(e.message);
                }
                debugPrint("start to search   oad version");
            }
            if(!tv)
            {
                g_sys_updating=1;
               onOADSearchStateChaged(-5);
            }

        }catch (e)
        {
            debugPrint(e.message);
        }
    }

}
function mytest2()
{

//    if(PageDateSettingUpdateFir.operateData.curtype==0)
//    {
     // if( g_sys_updating==true)
      {
        hiWebOsFrame.createPage('setting_update_ver_page',null, hiWebOsFrame.settingsupdatefir, null,function(verinfo){
            hiWebOsFrame.settingsupdateverinfo=verinfo;
            PageDateSettingUpdateverinfo.operateData.newver="v10000";// model.softupdate.getNewPacket();
            var temp="-english4564供观赏的自然风光、景物，包括自444然景观和人4444999文景观。是由光对物的反在中甚至写景多于言情，几乎和旅游打成了一片。 \r\n\r\n南朝 宋鲍照《绍古辞》之七：“怨咽对风景，闷My father was a self-taught mandolin player. He was one of the best string instrument players in our town. He could not read music, but if he heard a tune a few times, he could play it. When he was younger, he was a member of a small country music b"
            temp=temp.replace(/&/g, "&amp;");
            temp=temp.replace(/"/g, "&quot;");
            temp=temp.replace(/'/g, "&apos;");
            temp=temp.replace(/</g, "&lt;");
            temp=temp.replace(/>/g, "&gt;");
            temp=temp.replace(/[\r]/g,"");
            PageDateSettingUpdateverinfo.operateData.upgradecontent=temp.replace(/\n/g,"<br>");
            debugPrint("get the internet software description "+temp);
            hiWebOsFrame.settingsupdateverinfo.rewriteDataOnly();
            hiWebOsFrame.settingsupdateverinfo.open();
            hiWebOsFrame.settingsupdateverinfo.hiFocus();


        });
      }

//    }
//    else{
//        hiWebOsFrame.createPage('setting_ver_list_page',null, hiWebOsFrame.settingsupdatefir, null,function(verlist){
//            hiWebOsFrame.settingsverlist=verlist;
//            verlist.open();
//            verlist.hiFocus();
//        });
//    }
}

var onSearchStateChaged=function(value)
{
    debugE("onSearchStateChaged "+value+ g_sys_updating);
    debugE("curtype"+PageDateSettingUpdateFir.operateData.curtype);
    try{
        if(g_sys_updating==0)
        {
            debugPrint("the state is wrong to enter the search state");
            return;
        }
        if(value==5)
        {
            if( PageDateSettingUpdateFir.operateData.curtype==0
                ||PageDateSettingUpdateFir.operateData.curtype==1)//internet
            {
                hiWebOsFrame.createPage('setting_update_ver_page',null, hiWebOsFrame.settingsupdatefir, null,function(verinfo){
                    hiWebOsFrame.settingsupdateverinfo=verinfo;
                    PageDateSettingUpdateverinfo.operateData.curver= model.softupdate.getCurrentPacket();
                    var temp=model.softupdate.getHisenseCurrentVersion();
                    debugPrint("get the internet software "+temp);
                    PageDateSettingUpdateverinfo.operateData.newver=temp;//
                    var temp=model.softupdate.getHisenseVersionDescription();
                    temp=temp.replace(/&/g, "&amp;");
                    temp=temp.replace(/"/g, "&quot;");
                    temp=temp.replace(/'/g, "&apos;");
                    temp=temp.replace(/</g, "&lt;");
                    temp=temp.replace(/>/g, "&gt;");
                    temp=temp.replace(/[\r]/g,"");
                    PageDateSettingUpdateverinfo.operateData.upgradecontent=temp.replace(/\n/g,"<br>");
                    debugPrint("get the internet software description "+temp);
                    hiWebOsFrame.settingsupdateverinfo.rewriteDataOnly();
                    hiWebOsFrame.settingsupdateverinfo.open();
                    hiWebOsFrame.settingsupdateverinfo.hiFocus();

                });

            }
        }
        else if(value==1)
        {
            debugPrint("the detect starting")
        }else {
            if( PageDateSettingUpdateFir.operateData.curtype==0)
            {
                 if(value==3)
                {
                    debugPrint("network is disconnect "+value);
                    hiWebOsFrame.createPage('setting_sys_dialog1_page',null, hiWebOsFrame.settingsupdatefir, null,function(dialog1){
                        hiWebOsFrame.settingsupdatedialog1=dialog1;
                        PageDataSetttingSysdialog1.operateData.curdatatype=1;
                        hiWebOsFrame.settingsupdatedialog1.open();
                        hiWebOsFrame.settingsupdatedialog1.hiFocus();
                        hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();
                    });
                }
                else if(g_sys_updating==1)
                {
                    debugPrint("in state  "+value);
                    hiWebOsFrame.createPage('setting_sys_dialog1_page',null, hiWebOsFrame.settingsupdatefir, null,function(dialog1){
                        hiWebOsFrame.settingsupdatedialog1=dialog1;
                        PageDataSetttingSysdialog1.operateData.curdatatype=0;
                        hiWebOsFrame.settingsupdatedialog1.open();
                        hiWebOsFrame.settingsupdatedialog1.hiFocus();
                        hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();
                    });
                }

            }
            else  if( PageDateSettingUpdateFir.operateData.curtype==1)
            {
                debugPrint("in state  "+value);
                hiWebOsFrame.createPage('setting_sys_dialog1_page',null, hiWebOsFrame.settingsupdatefir, null,function(dialog1){
                    hiWebOsFrame.settingsupdatedialog1=dialog1;
                    PageDataSetttingSysdialog1.operateData.curdatatype=5;
                    hiWebOsFrame.settingsupdatedialog1.open();
                    hiWebOsFrame.settingsupdatedialog1.hiFocus();
                    hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();
                });
            }

        }

    }catch (e)
    {
        debugPrint(e.message);
    }

}

var onOADSearchStateChaged=function(value)
{
    debugE("onOADSearchStateChaged "+value+ g_sys_updating);
    debugE("curtype"+PageDateSettingUpdateFir.operateData.curtype);
    try{
        if(g_sys_updating==0)
        {
            debugPrint("the state is wrong to enter the search state");
            return;
        }
        if(value==5)
        {
                hiWebOsFrame.createPage('setting_update_ver_page',null, hiWebOsFrame.settingsupdatefir, null,function(verinfo){
                    hiWebOsFrame.settingsupdateverinfo=verinfo;
                    PageDateSettingUpdateverinfo.operateData.curver=model.softupdate.getCurrentPacket();
                    var temp=model.softupdate.getOadCurrentVersion();
                    debugPrint("get the internet software "+temp);
                    PageDateSettingUpdateverinfo.operateData.newver=temp;//
                    var temp=model.softupdate.getOadVersionDescription();
                    temp=temp.replace(/&/g, "&amp;");
                    temp=temp.replace(/"/g, "&quot;");
                    temp=temp.replace(/'/g, "&apos;");
                    temp=temp.replace(/</g, "&lt;");
                    temp=temp.replace(/>/g, "&gt;");
                    temp=temp.replace(/[\r]/g,"");
                    PageDateSettingUpdateverinfo.operateData.upgradecontent=temp.replace(/\n/g,"<br>");
                    debugPrint("get the internet software description "+temp);
                    hiWebOsFrame.settingsupdateverinfo.rewriteDataOnly();
                    hiWebOsFrame.settingsupdateverinfo.open();
                    hiWebOsFrame.settingsupdateverinfo.hiFocus();

                });

        }
        else {
                debugPrint("in state  "+value);
                hiWebOsFrame.createPage('setting_sys_dialog1_page',null, hiWebOsFrame.settingsupdatefir, null,function(dialog1){
                    hiWebOsFrame.settingsupdatedialog1=dialog1;
                    PageDataSetttingSysdialog1.operateData.curdatatype=5;
                    hiWebOsFrame.settingsupdatedialog1.open();
                    hiWebOsFrame.settingsupdatedialog1.hiFocus();
                    hiWebOsFrame.settingsupdatedialog1.rewriteDataOnly();
                });
        }

    }catch (e)
    {
        debugPrint(e.message);
    }

}

