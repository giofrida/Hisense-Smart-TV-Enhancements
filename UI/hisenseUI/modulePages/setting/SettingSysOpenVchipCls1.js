/**
 * Created by Administrator on 14-10-29.
 */
function getSettingOpenvchipCls1PageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_open_vchip_cls1_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_sys_open_vchip_cls1_text1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_open_vchip_cls1_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "firstFocusId": "setting_sys_open_vchip_cls1_btn1",
            "classes": {
                "normal": "setting_sys_inputblock_li_focus", "focus": "setting_sys_inputblock_li_focus","selected": "setting_sys_inputblock_li_focus"
            },
            "handler": {
                "aftEscHandler": "SettingSysOpenvichipcls1Esc"

            },
            oriCaE: [
                {
                    "id": "setting_sys_open_vchip_cls1_str1",
                    "description": "名称",
                    "CaEType": "div"
                },
                {
                    "id": "setting_sys_open_vchip_cls1_btn1",
                    "description": "图片",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
                    },
                    "handler": {
                        "aftEnterHandler": "SettingSysOpenvichipcls1BtnEnter",
                        "aftEscHandler": "SettingSysOpenvichipcls1Esc"

                    }
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_open_vchip_cls1_str1","setting_sys_open_vchip_cls1_btn1"],
                "PageSize":12

            }
        }

    ];
    Openvichipcls1init();
    return PageDataSettingSysOpenvichipcls1;
}
var PageDataSettingSysOpenvichipcls1={
    "setting_sys_open_vchip_cls1_img1":{Data:"img/head_arrow.png"},
    "setting_sys_sys_open_vchip_cls1_text1":{Data:"Open V-Chip"},
    "setting_sys_open_vchip_cls1_ul1": {Data:[
        {
            "setting_sys_open_vchip_cls1_str1": {Data:"TV:"},
            "setting_sys_open_vchip_cls1_btn1": {Data:"Adjust"}
        }

    ],
        "SelectedIndex":0
    },

    "operateData": {
        "curopenvchiplist":[
            {
                "name":"TV"


            },
            {
                "name":"Hdmi1"

            }
        ],
         curselect:0

    },
    "langData":{
        "Adjust":[],
        "Open V-Chip": []

    },
    rewrite:function(pageData){
        var element={};
        pageData.setting_sys_open_vchip_cls1_ul1.SelectedIndex=pageData.operateData.curselect;
        pageData.setting_sys_open_vchip_cls1_ul1.Data=[];
        if(pageData.operateData.curopenvchiplist.length>0)
        {
            debugPrint("curopenvchiplist.length"+pageData.operateData.curopenvchiplist.length);
            $.each(pageData.operateData.curopenvchiplist, function (k, v) {
                element.setting_sys_open_vchip_cls1_str1={};

                element.setting_sys_open_vchip_cls1_btn1={};
                element.setting_sys_open_vchip_cls1_str1.Data = v.name;
                element.setting_sys_open_vchip_cls1_btn1.Data= "Adjust";
                pageData.setting_sys_open_vchip_cls1_ul1.Data.push(_cloneObj(element));
            })
        }
    }
};

function Openvichipcls1init()
{
 // todo get the open vichip data.
}
function SettingOpenvchipCls1onDestroy()
{
    hiWebOsFrame.settingssysopenvichip1=null;
}
function SettingSysOpenvichipcls1Esc()
{
    this.page.close();
    hiWebOsFrame.settingssysproglock.open();
    hiWebOsFrame.settingssysproglock.hiFocus();
    if(!!hiWebOsFrame.settingssysopenvichip1)
    {
        hiWebOsFrame.settingssysopenvichip1.destroy();
    }
    if(!!hiWebOsFrame.settingssysopenvichip2)
    {
        hiWebOsFrame.settingssysopenvichip2.destroy();
    }
    if(!!hiWebOsFrame.settingssysopenvichip3)
    {
        hiWebOsFrame.settingssysopenvichip3.destroy();
    }
}
function SettingSysOpenvichipcls1BtnEnter()
{
    PageDataSettingSysOpenvichipcls1.operateData.curselect=this.parent.SelectedIndex;
    g_curprogblock_cls=1;
    model.parentlock.OpenvchipPage(1,this.parent.SelectedIndex,0,0);
    //to get the data and in the handler to create the page.rewrite the data.


}
