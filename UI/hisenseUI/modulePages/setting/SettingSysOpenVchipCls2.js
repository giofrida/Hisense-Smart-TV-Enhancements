/**
 * Created by Administrator on 14-10-29.
 */
function getSettingOpenvchipCls2PageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_open_vchip_cls2_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_sys_open_vchip_cls2_text1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_open_vchip_cls2_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "firstFocusId": "setting_sys_open_vchip_cls2_btn1",
            "classes": {
                "normal": "setting_sys_inputblock_li_focus", "focus": "setting_sys_inputblock_li_focus","selected": "setting_sys_inputblock_li_focus"
            },
            "handler": {
                "aftEscHandler": "SettingSysOpenvichipcls2Esc"

            },
            oriCaE: [
                {
                    "id": "setting_sys_open_vchip_cls2_str1",
                    "description": "名称",
                    "CaEType": "div"
                },
                {
                    "id": "setting_sys_open_vchip_cls2_btn1",
                    "description": "图片",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
                    },
                    "handler": {
                        "aftEnterHandler": "SettingSysOpenvichipcls2BtnEnter",
                        "aftEscHandler": "SettingSysOpenvichipcls2Esc"

                    }
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_open_vchip_cls2_str1","setting_sys_open_vchip_cls2_btn1"],
                "PageSize":12

            }
        }

    ];
    Openvichipcls2init();
    return PageDataSettingSysOpenvichipcls2;
}
var PageDataSettingSysOpenvichipcls2={
    "setting_sys_open_vchip_cls2_img1":{Data:"img/head_arrow.png"},
    "setting_sys_sys_open_vchip_cls2_text1":{Data:"Open V-Chip"},
    "setting_sys_open_vchip_cls2_ul1": {Data:[
        {
            "setting_sys_open_vchip_cls2_str1": {Data:"TV:"},
            "setting_sys_open_vchip_cls2_btn1": {Data:"Adjust"}
        }

    ],
        "SelectedIndex":0
    },

    "operateData": {
        "curchllist":[
            {
                "name":"openvichip1"
            },
            {
                "name":"openvichip2"
            },
            {
                "name":"openvichip3"
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
        pageData.setting_sys_open_vchip_cls2_ul1.SelectedIndex=pageData.operateData.curselect;
        pageData.setting_sys_open_vchip_cls2_ul1.Data=[];
        if(pageData.operateData.curchllist.length>0)
        {
            debugPrint("curchllist.length"+pageData.operateData.curchllist.length);
            $.each(pageData.operateData.curchllist, function (k, v) {
                element.setting_sys_open_vchip_cls2_str1={};

                element.setting_sys_open_vchip_cls2_btn1={};
                element.setting_sys_open_vchip_cls2_str1.Data = v.name;
                element.setting_sys_open_vchip_cls2_btn1.Data= "Adjust";
                pageData.setting_sys_open_vchip_cls2_ul1.Data.push(_cloneObj(element));
            })
        }
    }
};

function Openvichipcls2init()
{

}
function SettingOpenvchipCls2onDestroy()
{
    hiWebOsFrame.settingssysopenvichip2=null;
}
function SettingSysOpenvichipcls2Esc()
{
    this.page.close();
    hiWebOsFrame.settingssysopenvichip1.open();
    hiWebOsFrame.settingssysopenvichip1.hiFocus();
}
function SettingSysOpenvichipcls2BtnEnter()
{
    PageDataSettingSysOpenvichipcls2.operateData.curselect=this.parent.SelectedIndex;
    //to get the data and in the handler to create the page.rewrite the data.
    g_curprogblock_cls=2;
    model.parentlock.OpenvchipPage(2,PageDataSettingSysOpenvichipcls1.operateData.curselect,this.parent.SelectedIndex,0);
   // model.parentlock.LevelPageState(PageDataSettingSysOpenvichipcls1.operateData.curselect,this.parent.SelectedIndex);

//    hiWebOsFrame.createPage('setting_sys_open_vchip_cls3_page', null, hiWebOsFrame.settingssysopenvichip2, null, function (page) {
//        hiWebOsFrame.settingssysopenvichip3 = page;
//        PageDataSettingSysOpenvchipCls3.operateData.curdatalist=["openvichip3","openvichip3","openvichip3","openvichip3","openvichip3","openvichip3"];
//        PageDataSettingSysOpenvchipCls3.operateData.curselectindex=0;
//        PageDataSettingSysOpenvchipCls3.operateData.curselectlist=[1,2,3];
//        hiWebOsFrame.settingssysopenvichip3.rewrite();
//        hiWebOsFrame.settingssysopenvichip3.open();
//        hiWebOsFrame.settingssysopenvichip3.hiFocus("setting_sys_openvichip_cls3_ul1");
//    });

}
