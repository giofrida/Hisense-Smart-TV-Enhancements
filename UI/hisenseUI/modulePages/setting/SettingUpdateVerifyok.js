/**
 * Created by Administrator on 14-6-18.
 */
function getSettingUpdateVerifyokData(opt)
{
    opt.CaE=[
        {
            "id": "setting_update_verifyok_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_update_fir_verify_text1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_fir_verify_note1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id":"setting_update_verify_btn1",
            "description":"ok",
            "classes": {
                "normal": "setting_update_load_button", "focus": "setting_update_load_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':""//点击enter事件后处理开关转换

            },
            "nav":{"rightTo":"setting_update_verify_btn2"}

        },
        {
            "id":"setting_update_verify_btn2",
            "description":"cancel",
            "classes": {
                "normal": "setting_update_load_button", "focus": "setting_update_load_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':""//点击enter事件后处理

            },
            "nav":{"leftTo":"setting_update_verify_btn1"}

        }

    ];
    return PageDateSettingUpdateverifyok;
}
var PageDateSettingUpdateverifyok={
    "setting_update_verifyok_img1":{Data:"img/setting_ok.png"},
    "setting_update_fir_verify_text1":{Data:"The packge is ready,You can upgrade now or next time "},
    "setting_update_fir_verify_note1":{Data:"Note: please keep the network connection."},
    "setting_update_verify_btn1":{Data:"OK"},
    "setting_update_verify_btn2":{Data:"Cancel"},
    "operateData": {

    },
    "langData":{
        "The packge is ready,You can upgrade now or next time":["The packge is ready,You can upgrade now or next time","",""],
        "Note: please keep the network connection.":["Note: please keep the network connection.","",""],
        "OK":["OK","",""],
        "Cancel":["Cancel","",""]

    },
    rewrite:function(pageData){
//        pageData.setting_update_fir_verify_text1.Data=pageData.langData.text1[langIdx]
//        pageData.setting_update_fir_verify_note1.Data=pageData.langData.note1[langIdx];
//        pageData.setting_update_verify_btn1.Data=pageData.langData.btn1[langIdx]
//        pageData.setting_update_verify_btn2.Data=pageData.langData.btn2[langIdx];

    }

};