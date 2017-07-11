/**
 * Created by Administrator on 14-6-18.
 */
var g_sys_updating=false;
var g_updatestate=0;
function getSettingSysUpdatePageData(opt)
{
  opt.CaE= [
      {
          "id": "setting_sys_update_head_img1",
          "description": "menulanusge",
          "CaEType": "img"
      },
      {
          "id": "setting_sys_update_head_text1",
          "description": "menulanusge",
          "CaEType": "span"
      },
      {
          "id": "setting_sys_update_net",
          "description": "",
          "CaEType": "div"
      },
      {
          "id": "setting_sys_auto_net_str1",
          "description": "",
          "CaEType": "div"
      },
      {
          "id":"setting_sys_update_control1",
          "description":"开关控件",
          "classes": {
              "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
          },
          "nav": { "downTo":"setting_sys_update_btn1"},
          "CaEType": "FlipSwitch",
          "SwitchRadio":"50%",//显示的比例
          "FlipSwitchConfig":{
              switchTypeId:"switchType",//目前开(true)还是关(false) id
              switchTextId:"switchText"//目前显示的字体的id
          },
          "handler":{
              "aftDownHandler":"SettingSysUpdatefocus",
              "aftUpHandler":"SettingSysUpdatefocus",
              'aftEnterHandler':'SettingSysUpdateCtrlEnHandler',//点击enter事件后处理开关转换
              "befLeftHandler":"SettingSysUpdateEsc",
              "aftEscHandler": "SettingSysUpdateEsc"
          }


      },
      {
          "id": "setting_sys_manual_net_str1",
          "description": "",
          "CaEType": "div"
      },
      {
          "id": "setting_sys_update_btn1",
          "description": "",
          "CaEType": "div",
          "disable": false,
          "classes": {
              "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
          },
          "nav":{"downTo": "setting_sys_update_btn2","upTo":"setting_sys_update_control1"},
          "handler": {
                "aftDownHandler":"SettingSysUpdatefocus",
                "aftUpHandler":"SettingSysUpdatefocus",
              'aftEnterHandler':'SettingSysUpdateBtnEnHandler',//点击enter事件后处理开关转换
              "befLeftHandler":"SettingSysUpdateEsc",
              "aftEscHandler": "SettingSysUpdateEsc"
          }
      },
      {
          "id": "setting_sys_update_oad",
          "description": "",
          "CaEType": "div"
      },
//      {
//          "id": "setting_sys_auto_oad_str1",
//          "description": "",
//          "CaEType": "div"
//      },
//      {
//          "id":"setting_sys_update_control2",
//          "description":"开关控件",
//          "classes": {
//              "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
//          },
//          "nav": { "downTo":"setting_sys_update_btn2","upTo":"setting_sys_update_btn1"},
//          "CaEType": "FlipSwitch",
//          "SwitchRadio":"50%",//显示的比例
//          "FlipSwitchConfig":{
//              switchTypeId:"switchType",//目前开(true)还是关(false) id
//              switchTextId:"switchText"//目前显示的字体的id
//          },
//          "handler":{
//              "aftDownHandler":"SettingSysUpdatefocus",
//              "aftUpHandler":"SettingSysUpdatefocus",
//              'aftEnterHandler':'SettingSysUpdateCtrlEnHandler',//点击enter事件后处理开关转换
//              "befLeftHandler":"SettingSysUpdateEsc",
//              "aftEscHandler": "SettingSysUpdateEsc"
//          }
//
//
//      },
      {
          "id": "setting_sys_manual_oad_str1",
          "description": "",
          "CaEType": "div"
      },
      {
          "id": "setting_sys_update_btn2",
          "description": "",
          "CaEType": "div",
          "disable": false,
          "classes": {
              "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"

          },
          "nav":{"downTo": "","upTo":"setting_sys_update_btn1"},
          "handler": {
              "aftDownHandler":"SettingSysUpdatefocus",
              "aftUpHandler":"SettingSysUpdatefocus",
              'aftEnterHandler':'SettingSysUpdateBtnEnHandler',//点击enter事件后处理开关转换
              "befLeftHandler":"SettingSysUpdateEsc",
              "aftEscHandler": "SettingSysUpdateEsc"
          }
      }
//      {
//          "id": "setting_sys_usb_str1",
//          "description": "",
//          "CaEType": "div"
//      },
//      {
//          "id": "setting_sys_update_usb",
//          "description": "",
//          "CaEType": "div"
//      },
//      {
//          "id": "setting_sys_update_btn3",
//          "description": "",
//          "CaEType": "div",
//          "disable": false,
//          "classes": {
//              "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
//          },
//          "nav":{"upTo":"setting_sys_update_btn1"},
//          "handler": {
//              'aftEnterHandler':'SettingSysUpdateBtnEnHandler',//点击enter事件后处理开关转换
//              "aftEscHandler": "SettingSysUpdateEsc"
//          }
//      }
  ]
  SettingUpdateInit();
  return PageDateSettingSysUpdate;
}
var PageDateSettingSysUpdate={
    "setting_sys_update_head_img1":{Data:"img/head_arrow.png"},
    "setting_sys_update_head_text1":{Data:"System Update"},
    "setting_sys_update_net":{Data:"Internet Upgrade"},
    "setting_sys_auto_net_str1":{Data:"Auto Firmware Upgrade"},
    "setting_sys_update_control1":{Data:{ switchType:false, switchText:''}},
    "setting_sys_manual_net_str1":{Data:"Check Firmware Upgrade"},
    "setting_sys_update_btn1":{Data:"Detect"},
    "setting_sys_update_oad":{Data:"OAD Upgrade"},
   // "setting_sys_auto_oad_str1":{Data:"Auto OAD Upgrade"},
   // "setting_sys_update_control2":{Data:{ switchType:false, switchText:'Off'}},
    "setting_sys_manual_oad_str1":{Data:"Check OAD Upgrade"},
    "setting_sys_update_btn2":{Data:"Detect","disable":false},
//    "setting_sys_update_usb":{Data:"USB Upgrade"},
//    "setting_sys_usb_str1":{Data:"USB Upgrade:"},
//    "setting_sys_update_btn3":{Data:"Detect"},
    "operateData": {
//        "curnettype":false,// false off
//        "curoadtype":false,
        "helplist":[
            {
                "title":"Auto Firmware Upgrade",
                "content":"Set your TV to automatically receive the latest firmware."
            },
            {
                "title":"Check Firmware Upgrade",
                "content":"Check to ensure that your TV has received the latest firmware."
            },
//            {
//                "title":"Auto OAD Upgrade",
//                "content":"Set your TV to automatically receive the latest firmware via the tuner."
//
//            },
            {
                "title":"Check OAD Upgrade",
                "content":"Check to ensure that your TV has received the latest firmware via the tuner."
            }
        ],
        "setting_sys_update_control1":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
//        "setting_sys_update_control2":{
//            switchType:true,
//            switchTextList:{
//                switchOFF:'',
//                switchOn:''
//            }
//        }

    },
    "langData":{
        "System Update":[],
        "Upgrade":["Upgrade","Aktualisierung","Aggiornamento","Atualizar","Actualizar","Mise à niveau","Oppgradering","Uppgradera","Opgrader","Päivitys","软件升级"],
        "Internet Upgrade":["Internet Upgrade","Online-Aktualisierung","Aggiornamento Internet","Atualização da Internet","Actualizar Internet ","Mise à niveau Internet","Oppgradering via Internett","Internet-uppgradering","Internet opgradering","Internetin päivitys","网络升级"],
        "OAD Upgrade":["USB Upgrade","Aktualisierung per USB","Aggiornamento USB","Atualização USB","Actualizar USB ","Mise à niveau USB","USB-oppgradering","USB-uppgradering","USB-opgradering","USB-päivitys","USB升级"],
        "On":["On","Ein","Acceso","Ligado","Encendido","Activé","På","På","Til","Päällä","开"],
        "Off":["Off","Aus","Spento","Desligado","Apagado","Désactivé","Av","Av","Fra","Pois päältä","关"] ,
        "Auto Firmware Upgrade":["USB update","",""],
        "Check Firmware Upgrade":["USB update:","",""],
        "Auto OAD Upgrade":["USB update","",""],
        "Check OAD Upgrade":["USB update:","",""],
        "Detect":["Detect","",""]

    },
    rewrite:function(data){
        var _this = this,
            opeData = data.operateData;
        $.each(data,function(key,val){

            if(!key) return true;

            var localData = data[key],
                localOpeData =opeData[key];
            switch(key)
            {
                case "setting_sys_update_control1":
             //   case "setting_sys_update_control2":
                    //更新data里面的数据
                    localData.Data.switchType = localOpeData.switchType;
                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                    break;
            }
        })
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            data.setting_sys_update_head_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
            // $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");
            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_switch_name").css("float","left")
            $(".setting_sys_lang1__cls").css("left","510px");
            // $("#setting_sys_timedata_control1").css("float","right")
        }
        else {
            data.setting_sys_update_head_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right")
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
            //  $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
            // $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");
            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left")
            $(".setting_sys_switch_name").css("float","right")
            $(".setting_sys_lang1__cls").css("left","358px");
            // $("#setting_sys_timedata_control1").css("float","left")

        }

    }
};

function SettingSysUpdatePageonDestroy()
{
    hiWebOsFrame.settingssysupdate = null;

}
function SettingSysUpdatefocus()
{
    var index;
    if(this.id=="setting_sys_update_control1")
    {
        index = 0;
    }
    else if(this.id=="setting_sys_update_btn1")
    {
        index = 1;
    }
//    if(this.id=="setting_sys_update_control2")
//    {
//        index = 2;
//    }
    else if(this.id=="setting_sys_update_btn2")
    {
        index = 2;
    }
    SettingSysUpdateHelpinfo(PageDateSettingSysUpdate.operateData.helplist[index].content);
}


function SettingSysUpdateHelpinfo(content)
{
    PageDateSettingSysUpdate.operateData.helpcontent=content;
    try {
        if (content != "" && !!langPackages[content]) {
            $("#setting_sys_update_helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_sys_update_helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }

}
function SettingSysUpdateOpenHandler()
{
    debugPrint("update page open handler")

}
function SettingSysUpdateCtrlEnHandler(operateData,data)
{
    var page = this.page;

    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    if(this.id=="setting_sys_update_control1")
    {
        SetOTActrl( operateData[this.id].switchType)
    }
//    else if(this.id=="setting_sys_update_control2")
//    {
//        SetOADctrl( operateData[this.id].switchType)
//    }
    page.rewriteDataOnly();
    SetRecentUse("System Update",5,2);
}
function SettingSysUpdateBtnEnHandler()
{
    //版本升级中三种方式的检测， 可以采用同一个接口进行调用
    if(this.id=="setting_sys_update_btn1")
    {
        hiWebOsFrame.createPage('setting_update_fir_page', null, null, null, function (fir) {
            hiWebOsFrame.settingsupdatefir = fir;
            fir.close();
            hiWebOsFrame.createPage('setting_update_progressing_page', null, null, null, function (page) {
                hiWebOsFrame.settingsupdateprogress = page;
                page.close();
                PageDateSettingUpdateFir.operateData.curtype=0;
                PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=0;
                hiWebOsFrame.settingsupdatefir.open();
                hiWebOsFrame.settingsupdatefir.hiFocus();
                hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                StartDetectVer(0);
                SetRecentUse("System Update",5,2);

            });
        });


    }
    else if(this.id=="setting_sys_update_btn2")//oad
    {
        hiWebOsFrame.createPage('setting_update_fir_page', null, null, null, function (fir) {
            hiWebOsFrame.settingsupdatefir = fir;
            fir.close();
            hiWebOsFrame.createPage('setting_update_progressing_page', null, null, null, function (page) {
                hiWebOsFrame.settingsupdateprogress = page;
                page.close();
                PageDateSettingUpdateFir.operateData.curtype=0;
                PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=0;
                hiWebOsFrame.settingsupdatefir.open();
                hiWebOsFrame.settingsupdatefir.hiFocus();
                hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
                StartDetectVer(1);
                SetRecentUse("System Update",5,2);

            });
        });
    }
//    else if(this.id=="setting_sys_update_btn3")//usb
//    {
//        PageDateSettingUpdateFir.operateData.curtype=2;
//        //g_updatestate=0;
//        StartDetectVer(2);
//        PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=0;
//        hiWebOsFrame.settingsupdatefir.open();
//        hiWebOsFrame.settingsupdatefir.hiFocus();
//        hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
//    }
    SetRecentUse("System Update",5,2);


}
function SettingSysUpdateEsc()
{
    this.page.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    this.page.destroy();
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

function SettingUpdateInit()
{
    try
    {
   // model.softupdate.onSearchStateChaged=onSearchStateChaged;
    if(hiWebOsFrame.getCurrentArea()=="EU")
    {
       $("#setting_sys_update_helpinfo").css("display","block") ;
    }
     else
    {
        $("#setting_sys_update_helpinfo").css("display","none") ;

    }
    var temp=model.softupdate.getAutoAnnouncementEnabled();
    if(temp==1)
    {
        PageDateSettingSysUpdate.operateData.setting_sys_update_control1.switchType=true;
    }
    else{
        PageDateSettingSysUpdate.operateData.setting_sys_update_control1.switchType=false;

    }

//    var temp=model.softupdate.getOadAutoUpdateEnabled();
//    if(temp==1)
//    {
//        PageDateSettingSysUpdate.operateData.setting_sys_update_control2.switchType=true;
//    }
//    else{
//        PageDateSettingSysUpdate.operateData.setting_sys_update_control2.switchType=false;
//
//    }
    }catch (e)
    {
        debugE(e.message)
    }

}


function SetOTActrl(type)
{
    if(type)
    {
        model.softupdate.setAutoAnnouncementEnabled(1);
    }
    else
    {
        model.softupdate.setAutoAnnouncementEnabled(0);
    }
}
//function SetOADctrl(type)
//{
//    if(type)
//    {
//        model.softupdate.setOadAutoUpdateEnabled(1);
//    }
//    else
//    {
//        model.softupdate.setOadAutoUpdateEnabled(0);
//    }
//}
