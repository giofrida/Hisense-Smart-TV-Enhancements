/**
 * Created by Administrator on 14-6-18.
 */
function getSettingPwdErrorData(opt)
{
    opt.CaE=[

        {
            "id": "setting_sys_pwd_error_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_pwd_error_text1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes":
            {
                "normal": "setting_sys_pwd_error_text1", "focus": "setting_sys_pwd_error_text1"

            }

        }
    ];
    return PageDateSettingSysPwderror;
}
var PageDateSettingSysPwderror={
    "setting_sys_pwd_error_img1":{Data:"img/pwderror.png"},
    "setting_sys_pwd_error_text1":{"Data":" password input error, please retry!"},
    "operateData": {
        "datatype":0,
        "strlist":["Invalid password. Please re-enter","Input value is invalid, please try again!","The customized device name requires restart to take effect.","The current channel does not have Open V-chip data.","This feature is currently unavailable!","The new PIN number is not correct, still use the original PIN number."]
    },
    "langData":{
        "Input value is invalid, please try again!":["Input value is invalid, please try again!","",""],
        "This feature is currently unavailable!":[],
        "Invalid password. Please re-enter":["Invalid password. Please re-enter.","",""],
        "The current channel does not have Open V-chip data.":[],
        "The new PIN number is not correct, still use the original PIN number.":[]

    },
    rewrite:function(pageData){

     pageData.setting_sys_pwd_error_text1.Data=pageData.operateData.strlist[pageData.operateData.datatype];


    }
};

function SettingPwdErroronDestroy()
{
    hiWebOsFrame.settingsyspwderror=null;
}
