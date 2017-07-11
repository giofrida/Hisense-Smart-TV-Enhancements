/**
 * Created by Administrator on 14-8-22.
 */
/**
 * Created by Administrator on 14-7-2.
 */
function getupdateSpacecheckPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_update_spacechaeck_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_update_spacechaeck_content",
            "description": "",
            "CaEType": "div"
        },
        {
            "id":"setting_update_spacechaeck_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "rightTo":"setting_update_spacechaeck_btn2"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateSpaceCheckokHandler"//点击enter事件后处理开关转换

            }

        },
        {
            "id":"setting_update_spacechaeck_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
            },
            "nav": { "leftTo":"setting_update_spacechaeck_btn1"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateSpaceCheckescHandler"//点击enter事件后处理开关转换
            }

        }
    ];
    return PageDataSetttingUpdateSpaceCheck;

}
var PageDataSetttingUpdateSpaceCheck={
    "setting_update_spacechaeck_text1":{Data:"Upgrade"},
    "setting_update_spacechaeck_content":{Data:"Download successful. Do you want to restart and upgrade?"},
    "setting_update_spacechaeck_btn1":{Data:"OK"},
    "setting_update_spacechaeck_btn2":{Data:"Later"},
    "operateData": {
          "parentpage":"",
           "type":0

    },
    "langData":{
        "Upgrade":[],
        "Download successful. Do you want to restart and upgrade?":[],
        "Later":[],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta","取消"]
    },
    rewrite:function(pageData)
    {

    }

};

function updateSpacecheckonDestroy()
{
    hiWebOsFrame.settingupdatediskcheck=null;
}
function SettingUpdateSpaceCheckokHandler()
{
    if(this.page.operateData.type==0)
    {
      debugPrint(" to start ota upgrade")
      model.softupdate.StartUpdate();
    }
    else
    {
        debugPrint(" to start oad upgrade")
        model.softupdate.StartOadUpdate();
    }
}
function SettingUpdateSpaceCheckescHandler()
{
 if(!!hiWebOsFrame.settingsupdatedownload
      &&hiWebOsFrame.settingupdatediskcheck.origin==hiWebOsFrame.settingsupdatedownload)
   {
       debugPrint("the oad upgrade ")
       if(PageDateSettingUpdateverifying.operateData.manual)
       {
           hiWebOsFrame.settingsupdatedownload.close();
           hiWebOsFrame.settingupdatediskcheck.close();
           settingaboutUpdateback();
           hiWebOsFrame.settingsupdatedownload.destroy();
           hiWebOsFrame.settingupdatediskcheck.destroy();
       }
       else
       {
           hiWebOsFrame.settingsupdatedownload.close();
           hiWebOsFrame.settingupdatediskcheck.close();
           if(!!hiWebOsFrame.settingsupdatefir)
           {
               hiWebOsFrame.settingsupdatefir.close();

           }
           hiWebOsFrame.settingsupdatedownload.origin.open();
           hiWebOsFrame.settingsupdatedownload.origin.hiFocus();
           hiWebOsFrame.settingsupdatedownload.destroy()
           hiWebOsFrame.settingupdatediskcheck.destroy();
           if(!!hiWebOsFrame.settingsupdatefir)
           {

               hiWebOsFrame.settingsupdatefir.destroy();
           }
           if(!!hiWebOsFrame.settingsupdatedialog1)
           {
               hiWebOsFrame.settingsupdatedialog1.destroy();
           }
           if(!!hiWebOsFrame.settingsupdatedownload)
           {
               hiWebOsFrame.settingsupdatedownload.destroy();
           }

       }

   }
    else
   {

    hiWebOsFrame.settingupdatediskcheck.close();
    upgradedialogDestroyCallback( hiWebOsFrame.settingupdatediskcheck.origin);
    hiWebOsFrame.settingupdatediskcheck.destroy();
}

}