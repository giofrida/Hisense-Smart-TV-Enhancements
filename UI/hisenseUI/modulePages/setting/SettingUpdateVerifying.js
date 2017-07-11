/**
 * Created by Administrator on 14-6-18.
 */
function getSettingUpdateVerifyingData(opt)
{
    opt.CaE=[
        {
            "id": "setting_update_verifying_img",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_update_verifying_text",
            "description": "",
            "CaEType": "div",
            classes:
            {
                "normal":"setting_update_fir_detect_text",
                "focus":"setting_update_fir_detect_text"
            },
            "disable": false

        }

    ]
    return PageDateSettingUpdateverifying;
}
var PageDateSettingUpdateverifying={
    "setting_update_verifying_text":{Data:"Downloading"},
    "setting_update_verifying_img":{Data:"img/loading.png"},
    "operateData": {
        "manual":false

    },
    "langData":{
        "Downloading":[],
        "verify":["verifying...","",""]

    },
    rewrite:function(pageData){
//        pageData.setting_update_verifying_text.Data=pageData.langData.verify[langIdx];

    }

};
function SettingUpdatedownloadPageonDestroy()
{
    hiWebOsFrame.settingsupdatedownload=null;
}
