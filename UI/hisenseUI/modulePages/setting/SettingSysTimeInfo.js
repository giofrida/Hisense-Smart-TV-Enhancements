/**
 * Created by Administrator on 14-7-17.
 */
function getSettingTimeInfoData(opt)
{
    opt.CaE=[

        {
            "id": "setting_sys_time_info_text1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes":
            {
                "normal": "setting_sys_time_info", "focus": "setting_sys_time_info"

            }

        }
    ];
    return PageDateSettingSysTimeInfo;
}
var PageDateSettingSysTimeInfo={
    "setting_sys_time_info_text1":{"Data":"To make sure the setting is effective, please keep the power on."},
    "operateData": {

    },
    "langData":{
        "To make sure the setting is effective, please keep the power on.":[" ","",""]
    },
    rewrite:function(pageData){

    }
};

function SettingTimeInfoDestroy()
{
    hiWebOsFrame.settingsystimeinfo=null;
}