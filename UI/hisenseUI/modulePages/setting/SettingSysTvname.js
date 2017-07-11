/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSysTvnameData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_tvname_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "setting_sys_tvname_tip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_tvname_placehoder",
            "description": "",
            "CaEType": "div",
            "disable": false

        },

        {
            "id":"setting_sys_tvname_container1",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId":"setting_sys_tvname_input1",
            "classes": {
                "normal": "epgInputZipContainerNormal", "focus": "epgInputZipContainerFocus",
                "disable": "epgInputZipContainerDisable", "selected": "epgInputZipContainerSelected"
            },
            "nav": {
                "downTo":"setting_sys_tvname_btn1"
            },
            "CaE":[
                {
                    "id": "setting_sys_tvname_input1",
                    "description": "输入控件",
                    "classes": {
                        "normal": "epgInputZipNormal", "focus": "epgInputZipFocus", "disable": "epgInputZipNormal", "selected": "epgInputZipNormal"
                    },
                    "nav": {
                        "downTo":"epgInputZip"
                    },
                    "CaEType": "input",
                    "inputAttr":"text",
                    "onChange":"SettingSysTVnameinputOnChange",
                    "maxlength":18,
//                            "max":9999,
//                            "min":0000,
                    "handler":{
                        "aftEnterHandler":"invokeSKB",
                        'aftEscHandler':"SettingSysTVnamecancelhandler"//点击enter事件后处理开关转换

                    }
                }
            ]
        },
        {
            "id":"setting_sys_tvname_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "upTo":"setting_sys_tvname_input1","rightTo":"setting_sys_tvname_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysTVnameokhandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysTVnamecancelhandler"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_sys_tvname_btn2",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": {  "upTo":"setting_sys_tvname_input1","leftTo":"setting_sys_tvname_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingSysTVnamecancelhandler",//点击enter事件后处理开关转换
                'aftEscHandler':"SettingSysTVnamecancelhandler"//点击enter事件后处理开关转换

            }

        }

    ];
   // getTVnameinit();
  //  init();
    return PageDateSettingSystvname;

}
var PageDateSettingSystvname={
    "setting_sys_tvname_text1":{Data:"Rename"},
    // "setting_sys_inputmodule_str1":{"Data":"New Password:"},
    "setting_sys_tvname_container1":{
        "Data":{
            "setting_sys_tvname_input1":{"Data":""}
        }
    },
    "setting_sys_tvname_placehoder":{Data:"Show the virtual keyboard by pressing OK button"},
    "setting_sys_tvname_btn1":{Data:"OK"},
    "setting_sys_tvname_btn2":{Data:"Cancel"},
    "setting_sys_tvname_tip":{Data:"Please enter a valid display name upto 18 characters."},
    "operateData": {

    },
    "langData":{
        "Rename":[],
        "Show the virtual keyboard by pressing OK button":[],
        "Please enter a valid display name upto 18 characters.":[],
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"],
        "Edit TV name":["Edit TV name","",""],
        "after define the  name you need to restart":["after define the  name you need to restart","",""],
        "The customized device name requires restart to take effect.":["The customized device name requires restart to take effect.","Neustart des Geräts für die Übernahme des geänderten Gerätenames erforderlich.","Il nome del dispositivo personalizzato richiede di essere riavviato per avere effetto.","É necesário reiniciar para que o nome personalizado do dispositivo tenha efeito. ","El nombre del dispositivo personalizado requiere reiniciar para tener efecto.","Le nom de dispositif personnalisé nécessite un redémarrage pour être effectif.","Egendefinert enhetsnavn krever omstart for å tre i kraft.","Anpassade enheter måste startas om för att de ska gälla.","Den tilpassede enhedsnavn kræver genstart for at træde i kraft.","Kustomoitu laitenimi vaatii uudelleen käynnistämistä toimiakseen.","自定义本机名称需要重启后才可能生效"]

    },
    rewrite:function(pageData){
    }
};

function SettingSysTvnameonDestroy()
{
    hiWebOsFrame.settingsystvname=null;

}
function SettingSysTVnamecancelhandler()
{
    this.page.close();
    hiWebOsFrame.settingssysmenutimeout.open();
    hiWebOsFrame.settingssysmenutimeout.hiFocus()
}

function SettingSysTvnameonOpen()
{
    var name=$("#setting_sys_tvname_input1").val();
    if(name.length>0)
    {
        $("#setting_sys_tvname_placehoder").css("visibility","hidden")
    }
    else
    {
        $("#setting_sys_tvname_placehoder").css("visibility","visible")

    }
}
function SettingSysTVnameokhandler()
{
    var name=$("#setting_sys_tvname_input1").val();
    if(name.length>0&&name.length<=18)
    {
        //SetTVname( PageDataFirstCls.operateData.curname);
       //  SetRecentUse("TV Name",5,2);
        //todo setvalue the input name
        this.page.close();
       // eval('PageDataSettingSysInputLabel.operateData.curname'+PageDataSettingSysTimeout.operateData.parentindex+'=name')
        PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].curname=name;
        model.source.InputRename(PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].uid,name);
        debugPrint("set the name"+name);
        //CHL_setSourceRename(PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].uid,name)
        livetvmain.updateSourceAttribute(PageDataSettingSysInputLabel.operateData.curchllist[PageDataSettingSysInputLabel.operateData.curselect].uid, 4, name);

        SetRecentUse("Input Labels",4,RECNT_AD);
        //PageDataSettingSysTimeout.operateData.curselect=0;
        //PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+"-"+name;
        hiWebOsFrame.settingssysinputtable.rewriteDataOnly();
        hiWebOsFrame.settingssysinputtable.open();
        hiWebOsFrame.settingssysinputtable.hiFocus();
    }
    else
    {
        hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
            hiWebOsFrame.settingsyspwderror=page;
            PageDateSettingSysPwderror.operateData.datatype=1;
            page.rewriteDataOnly();
            page.open();
            page.hiFocus();

        });
//        hiWebOsFrame.settingsyspwderror= hiWebOsFrame.createPage(PageDateSettingSysPwderror, 'setting_sys_pwd_error_dialog');
//        hiWebOsFrame.settingsyspwderror.open();
//        hiWebOsFrame.settingsyspwderror.hiFocus();
        hiWebOsFrame.lockAllKeys("setting");
        setTimeout(mytvnameclose,3 * 1000);
    }
    // this.page.destroy();
    //  hiWebOsFrame.settingssysmenutimeout.destroy();
    //  hiWebOsFrame.settingsFirst.rewrite();
    //  hiWebOsFrame.settingsFirst.open();
    //   hiWebOsFrame.settingsFirst.hiFocus()
}
function SettingSysTVnameinputOnChange()
{
    var name=$("#"+this.id).val();
    if(name.length>0)
    {
        $("#setting_sys_tvname_placehoder").css("visibility","hidden")
    }
    else
    {
        $("#setting_sys_tvname_placehoder").css("visibility","visible")

    }
}
function mytvnameclose() {
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingsyspwderror.close();
        $("#setting_sys_tvname_input1").val("");
        hiWebOsFrame.settingsystvname.open();
        hiWebOsFrame.settingsystvname.hiFocus("setting_sys_tvname_input1");
        hiWebOsFrame.settingsyspwderror.destroy();
    }
    else{
        debugPrint("setting module  has exit ");
        hiWebOsFrame.settingsyspwderror.close();
        hiWebOsFrame.settingsyspwderror.destroy();
    }

    hiWebOsFrame.unLockAllKeys("setting");
}

//var tvname="living";
function SetTVname(name)
{

    //model.system.setMachinename(name);
    debugPrint("set the name"+name)
   // tvname=name;
}
function getTVname()
{
   //   model.system.getMachinename();
    return tvname;
}
function init()
{
    //model.system.onMachinenameChaged=onMachinenameChaged;
}
var onMachinenameChaged=function(string)
{
    debugPrint("machine name changto "+string);
}