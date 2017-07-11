/**
 * Created by Administrator on 14-9-10.
 */
function getSettingCloseCaptionPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_cc_img1",
            "description": "",
            "CaEType": "img",
            "disable": false

        },
        {
            "id": "setting_sys_cc_text1",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
//        {
//            "id": "setting_sys_cc1_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc1_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul1",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul2"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//                //"aftEnterHandler": "SettingSysCCUl1Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler",
//                "aftRightHandler": "SettingSysCCUl1Enter",
//                "aftLeftHandler": "SettingSysCCUl1Enter"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul1_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul1_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
        {
            "id": "setting_sys_cc2_str1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_cc2_str2",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {

            "id": "setting_sys_cc_ul2",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo": "setting_sys_cc_ul3","upTo":"setting_sys_cc_ul1"},

            "classes": {
                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
            },
            "handler": {
                //"aftEnterHandler": "SettingSysCCUl2Enter",
                "befLeftHandler": "SettingSysCCUlleft",
                "aftEscHandler": "SettingSysCCEsc",
                "aftDownHandler":"SettingsysCCDownHandler",
                "aftUpHandler":"SettingsysCCDownHandler",
                "aftRightHandler": "SettingSysCCUl2Enter",
                "aftLeftHandler": "SettingSysCCUl2Enter"
            },
            oriCaE: [

                {
                    "id": "setting_sys_cc_ul2_txt1",
                    "description": "名称",
                    "CaEType": "span"
                }

            ],
            "NavigationBarConfig":{
                "NavigationBarDataItem":["setting_sys_cc_ul2_txt1"],
                "PageSize":1,
                "ArrowFlag":true

            }

        },
        {
            "id": "setting_sys_cc3_str1",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_sys_cc3_str2",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {

            "id": "setting_sys_cc_ul3",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo": "","upTo":"setting_sys_cc_ul2"},

            "classes": {
                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
            },
            "handler": {
                "befLeftHandler": "SettingSysCCUlleft",
                "aftRightHandler": "SettingSysCCUl3Enter",
                "aftLeftHandler": "SettingSysCCUl3Enter",
                "aftEscHandler": "SettingSysCCEsc",
                "aftDownHandler":"SettingsysCCDownHandler",
                "aftUpHandler":"SettingsysCCDownHandler"
            },
            oriCaE: [

                {
                    "id": "setting_sys_cc_ul3_txt1",
                    "description": "名称",
                    "CaEType": "span"
                }

            ],
            "NavigationBarConfig":{
                "NavigationBarDataItem":["setting_sys_cc_ul3_txt1"],
                "PageSize":1,
                "ArrowFlag":true

            }

        }
//        {
//            "id": "setting_sys_cc_setting_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc4_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc4_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul4",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul5","upTo":"setting_sys_cc_ul3"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//              //  "aftEnterHandler": "SettingSysCCUl4Enter",
//                "aftRightHandler": "SettingSysCCUl4Enter",
//                "aftLeftHandler": "SettingSysCCUl4Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul4_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul4_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc5_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc5_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul5",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul6","upTo":"setting_sys_cc_ul4"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//                //"aftEnterHandler": "SettingSysCCUl5Enter",
//                "aftRightHandler": "SettingSysCCUl5Enter",
//                "aftLeftHandler": "SettingSysCCUl5Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul5_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul5_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc6_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc6_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul6",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul7","upTo":"setting_sys_cc_ul5"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//               // "aftEnterHandler": "SettingSysCCUl6Enter",
//                "aftRightHandler": "SettingSysCCUl6Enter",
//                "aftLeftHandler": "SettingSysCCUl6Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul6_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul6_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc7_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc7_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul7",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul8","upTo":"setting_sys_cc_ul6"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//               // "aftEnterHandler": "SettingSysCCUl7Enter",
//                "aftRightHandler": "SettingSysCCUl7Enter",
//                "aftLeftHandler": "SettingSysCCUl7Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul7_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                },
//                {
//                    "id": "setting_sys_cc_ul7_img",
//                    "description": "名称",
//                    "CaEType": "img"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul7_txt1","setting_sys_cc_ul7_img"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc8_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc8_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul8",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul9","upTo":"setting_sys_cc_ul7"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//                //"aftEnterHandler": "SettingSysCCUl8Enter",
//                "aftRightHandler": "SettingSysCCUl8Enter",
//                "aftLeftHandler": "SettingSysCCUl8Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul8_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul8_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc9_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc9_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul9",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul10","upTo":"setting_sys_cc_ul8"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//                //"aftEnterHandler": "SettingSysCCUl9Enter",
//                "aftRightHandler": "SettingSysCCUl9Enter",
//                "aftLeftHandler": "SettingSysCCUl9Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul9_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                },
//                {
//                    "id": "setting_sys_cc_ul9_img",
//                    "description": "名称",
//                    "CaEType": "img"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul9_txt1","setting_sys_cc_ul9_img"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc10_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc10_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul10",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul11","upTo":"setting_sys_cc_ul9"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//               // "aftEnterHandler": "SettingSysCCUl10Enter",
//                "aftRightHandler": "SettingSysCCUl10Enter",
//                "aftLeftHandler": "SettingSysCCUl10Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul10_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul10_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc11_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc11_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul11",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "setting_sys_cc_ul12","upTo":"setting_sys_cc_ul10"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//               // "aftEnterHandler": "SettingSysCCUl11Enter",
//                "aftRightHandler": "SettingSysCCUl11Enter",
//                "aftLeftHandler": "SettingSysCCUl11Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul11_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                }
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul11_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//
//            }
//
//        },
//        {
//            "id": "setting_sys_cc12_str1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//            "id": "setting_sys_cc12_str2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false
//
//        },
//        {
//
//            "id": "setting_sys_cc_ul12",
//            "description": "列表项目",
//            "CaEType": "NavigationBar",
//            "disable": false,
//            "SelectedIndex": 0,
//            "nav": {"downTo": "","upTo":"setting_sys_cc_ul11"},
//
//            "classes": {
//                "normal": "setting_sys_navibar1_normal", "focus": "setting_sys_navibar1_focus","dataSelected":"setting_sys_navibar1_dataselect",
//                "disable":"setting_sys_navibar1_disable","disableDataSelected":"setting_sys_navibar1_data_dis_select"
//            },
//            "handler": {
//               // "aftEnterHandler": "SettingSysCCUl12Enter",
//                "aftRightHandler": "SettingSysCCUl12Enter",
//                "aftLeftHandler": "SettingSysCCUl12Enter",
//                "aftEscHandler": "SettingSysCCEsc",
//                "aftDownHandler":"SettingsysCCDownHandler",
//                "aftUpHandler":"SettingsysCCDownHandler"
//            },
//            oriCaE: [
//
//                {
//                    "id": "setting_sys_cc_ul12_txt1",
//                    "description": "名称",
//                    "CaEType": "span"
//                },
//                {
//                    "id": "setting_sys_cc_ul12_img",
//                    "description": "名称",
//                    "CaEType": "img"
//                }
//
//
//            ],
//            "NavigationBarConfig":{
//                "NavigationBarDataItem":["setting_sys_cc_ul12_img","setting_sys_cc_ul12_txt1"],
//                "PageSize":1,
//                "ArrowFlag":true
//            }
 //       }

    ];
    SettingCloseCaptioninit();
    return PageDataSettingSysClosecaption;
}
var PageDataSettingSysClosecaption={

    "setting_sys_cc_img1":{Data:"img/head_arrow.png"},
    "setting_sys_cc_text1":{Data:"Closed Caption"},
//    "setting_sys_cc1_str1":{Data:"Caption Control"},
//    "setting_sys_cc1_str2":{Data:""},
//    "setting_sys_cc_ul1":{Data: [
//        {"setting_sys_cc_ul1_txt1": {Data:"CC off"}},
//        {"setting_sys_cc_ul1_txt1": {Data:"CC on"}},
//        {"setting_sys_cc_ul1_txt1": {Data:"CC on when mute"}}
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
    "setting_sys_cc2_str1":{Data:"Analog Caption"},
    "setting_sys_cc2_str2":{Data:""},
    "setting_sys_cc_ul2":{Data: [
        {"setting_sys_cc_ul2_txt1": {Data:"Off"}},
        {"setting_sys_cc_ul2_txt1": {Data:"CC1"}},
        {"setting_sys_cc_ul2_txt1": {Data:"CC2"}},
        {"setting_sys_cc_ul2_txt1": {Data:"CC3"}},
        {"setting_sys_cc_ul2_txt1": {Data:"CC4"}},
        {"setting_sys_cc_ul2_txt1": {Data:"Text1"}},
        {"setting_sys_cc_ul2_txt1": {Data:"Text2"}},
        {"setting_sys_cc_ul2_txt1": {Data:"Text3"}},
        {"setting_sys_cc_ul2_txt1": {Data:"Text4"}}
    ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disable":false
    },
    "setting_sys_cc3_str1":{Data:"Digital Caption"},
    "setting_sys_cc3_str2":{Data:""},
  //  "setting_sys_cc_setting_str1":{Data:"Digital CC Settings"},
    "setting_sys_cc_ul3":{Data: [
        {"setting_sys_cc_ul3_txt1": {Data:"Off"}},
        {"setting_sys_cc_ul3_txt1": {Data:"CS1"}},
        {"setting_sys_cc_ul3_txt1": {Data:"CS2"}},
        {"setting_sys_cc_ul3_txt1": {Data:"CS3"}},
        {"setting_sys_cc_ul3_txt1": {Data:"CS4"}},
        {"setting_sys_cc_ul3_txt1": {Data:"CS5"}},
        {"setting_sys_cc_ul3_txt1": {Data:"CS6"}}

    ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disable":false
    },
//    "setting_sys_cc4_str1":{Data:"Style"},
//    "setting_sys_cc4_str2":{Data:""},
//    "setting_sys_cc_ul4":{Data: [
//        {"setting_sys_cc_ul4_txt1": {Data:"Automatic"}},
//        {"setting_sys_cc_ul4_txt1": {Data:"Custom"}}
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc5_str1":{Data:"Size"},
//    "setting_sys_cc5_str2":{Data:""},
//    "setting_sys_cc_ul5":{Data: [
//        {"setting_sys_cc_ul5_txt1": {Data:"Small"}},
//        {"setting_sys_cc_ul5_txt1": {Data:"Medium"}},
//        {"setting_sys_cc_ul5_txt1": {Data:"Large"}}
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc6_str1":{Data:"Font"},
//    "setting_sys_cc6_str2":{Data:""},
//    "setting_sys_cc_ul6":{Data: [
//        {"setting_sys_cc_ul6_txt1": {Data:"Style1"}},
//        {"setting_sys_cc_ul6_txt1": {Data:"Style2"}},
//        {"setting_sys_cc_ul6_txt1": {Data:"Style3"}},
//        {"setting_sys_cc_ul6_txt1": {Data:"Style4"}},
//        {"setting_sys_cc_ul6_txt1": {Data:"Style5"}},
//        {"setting_sys_cc_ul6_txt1": {Data:"Style6"}},
//        {"setting_sys_cc_ul6_txt1": {Data:"Style7"}}
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc7_str1":{Data:"Text Color"},
//    "setting_sys_cc7_str2":{Data:""},
//    "setting_sys_cc_ul7":{Data: [
//        {
//            "setting_sys_cc_ul7_txt1": {Data:"Black"},
//            "setting_sys_cc_ul7_img":{Data:"img/black.png"}},
//        { "setting_sys_cc_ul7_txt1": {Data:"White"},
//          "setting_sys_cc_ul7_img":{Data:"img/White.png"}},
//        {"setting_sys_cc_ul7_txt1": {Data:"Green"},
//            "setting_sys_cc_ul7_img":{Data:"img/Green.png"}},
//        {"setting_sys_cc_ul7_txt1": {Data:"Blue"},
//            "setting_sys_cc_ul7_img":{Data:"img/Blue.png"}},
//        {"setting_sys_cc_ul7_txt1": {Data:"Red"},
//            "setting_sys_cc_ul7_img":{Data:"img/Red.png"}},
//        {"setting_sys_cc_ul7_txt1": {Data:"Cyan"},
//            "setting_sys_cc_ul7_img":{Data:"img/Cyan.png"}},
//        {"setting_sys_cc_ul7_txt1": {Data:"Yellow"},
//            "setting_sys_cc_ul7_img":{Data:"img/Yellow.png"}},
//        {"setting_sys_cc_ul7_txt1": {Data:"Magenta"},
//            "setting_sys_cc_ul7_img":{Data:"img/Magenta.png"}}
//
//
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc8_str1":{Data:"Text Opacity"},
//    "setting_sys_cc8_str2":{Data:""},
//    "setting_sys_cc_ul8":{Data: [
//        {"setting_sys_cc_ul8_txt1": {Data:"Solid"}},
//        {"setting_sys_cc_ul8_txt1": {Data:"Translucent"}},
//        {"setting_sys_cc_ul8_txt1": {Data:"Transparent"}}
//
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc9_str1":{Data:"Background Color"},
//    "setting_sys_cc9_str2":{Data:""},
//    "setting_sys_cc_ul9":{Data: [
//        {"setting_sys_cc_ul9_txt1": {Data:"Black"},
//            "setting_sys_cc_ul9_img":{Data:"img/black.png"}},
//        {"setting_sys_cc_ul9_txt1": {Data:"White"},
//            "setting_sys_cc_ul9_img":{Data:"img/White.png"}},
//        {"setting_sys_cc_ul9_txt1": {Data:"Green"},
//            "setting_sys_cc_ul9_img":{Data:"img/Green.png"}},
//        {"setting_sys_cc_ul9_txt1": {Data:"Blue"},
//            "setting_sys_cc_ul9_img":{Data:"img/Blue.png"}},
//        {"setting_sys_cc_ul9_txt1": {Data:"Red"},
//            "setting_sys_cc_ul9_img":{Data:"img/Red.png"}},
//        {"setting_sys_cc_ul9_txt1": {Data:"Cyan"},
//            "setting_sys_cc_ul9_img":{Data:"img/Cyan.png"}},
//        {"setting_sys_cc_ul9_txt1": {Data:"Yellow"},
//            "setting_sys_cc_ul9_img":{Data:"img/Yellow.png"}},
//        {"setting_sys_cc_ul9_txt1": {Data:"Magenta"},
//            "setting_sys_cc_ul9_img":{Data:"img/Magenta.png"}}
//
//
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc10_str1":{Data:"Background Opacity"},
//    "setting_sys_cc10_str2":{Data:""},
//    "setting_sys_cc_ul10":{Data: [
//        {"setting_sys_cc_ul10_txt1": {Data:"Solid"}},
//        {"setting_sys_cc_ul10_txt1": {Data:"Translucent"}},
//        {"setting_sys_cc_ul10_txt1": {Data:"Transparent"}}
//
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc11_str1":{Data:"Edge Effect"},
//    "setting_sys_cc11_str2":{Data:""},
//    "setting_sys_cc_ul11":{Data: [
//        {"setting_sys_cc_ul11_txt1": {Data:"None"}},
//        {"setting_sys_cc_ul11_txt1": {Data:"Raised"}},
//        {"setting_sys_cc_ul11_txt1": {Data:"Depressed"}},
//        {"setting_sys_cc_ul11_txt1": {Data:"Uniform"}},
//        {"setting_sys_cc_ul11_txt1": {Data:"Left Shadow"}},
//        {"setting_sys_cc_ul11_txt1": {Data:"Right Shadow"}}
//
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
//    "setting_sys_cc12_str1":{Data:"Edge Color"},
//    "setting_sys_cc12_str2":{Data:""},
//    "setting_sys_cc_ul12":{Data: [
//        {"setting_sys_cc_ul12_txt1": {Data:"Black"},
//            "setting_sys_cc_ul12_img":{Data:"img/black.png"}},
//        {"setting_sys_cc_ul12_txt1": {Data:"White"},
//            "setting_sys_cc_ul12_img":{Data:"img/White.png"}},
//        {"setting_sys_cc_ul12_txt1": {Data:"Green"},
//            "setting_sys_cc_ul12_img":{Data:"img/Green.png"}},
//        {"setting_sys_cc_ul12_txt1": {Data:"Blue"},
//            "setting_sys_cc_ul12_img":{Data:"img/Blue.png"}},
//        {"setting_sys_cc_ul12_txt1": {Data:"Red"},
//            "setting_sys_cc_ul12_img":{Data:"img/Red.png"}},
//        {"setting_sys_cc_ul12_txt1": {Data:"Cyan"},
//            "setting_sys_cc_ul12_img":{Data:"img/Cyan.png"}},
//        {"setting_sys_cc_ul12_txt1": {Data:"Yellow"},
//            "setting_sys_cc_ul12_img":{Data:"img/Yellow.png"}},
//        {"setting_sys_cc_ul12_txt1": {Data:"Magenta"},
//            "setting_sys_cc_ul12_img":{Data:"img/Magenta.png"}}
//
//
//    ],
//        "SelectedIndex":0,
//        "DataSelectedIndex":0,
//        "disable":false
//    },
    "operateData": {
        "captionlist":["CC off","CC on","CC on when mute"],
        "curcontrol":2,
        "analoglist":["Off","CC1","CC2","CC3","CC4","Text1","Text2","Text3","Text4"],
        "curanalog":2,
        "digitallist":["Off","CS1","CS2","CS3","CS4","CS5","CS6"],
        "curdigital":2,
        "digstyle":["Automatic","Custom"],
        "curdigstyle":0,
        "digsize":["Small","Medium","Large"],
        "curdigsize":0,
        "digfontstyle":["Style1","Style2","Style3","Style4","Style5","Style6","Style7"],
        "curfontstyle":0,
        "digtextcolor":["Black","White","Green","Blue","Red","Cyan","Yellow","Magenta"],
        "curtextcolor":0,
        "digtextopacity":["Solid","Translucent","Transparent"],
        "curtextopacity":0,
        "digbgcolor":["Black","White","Green","Blue","Red","Cyan","Yellow","Magenta"],
        "curdigbgcolor":0,

        "digbgopacity":["Solid","Translucent","Transparent"],
        "curdigbgopacity":0,
        "digedgeeffect":["None","Raised","Depressed","Uniform","Left Shadow","Right Shadow"],
        "curdigedgeeffect":0,
        "edgecolor":["Black","White","Green","Blue","Red","Cyan","Yellow","Magenta"],
        "curedgecolor":0
    },
    "langData":{
        "Closed Caption": ["Closed Caption","Sous-titrage","Subtítulos ocultos"],
        "Caption Control": ["Caption Control","Contrôle de sous-titrage","Control de subtítulos"],
        "Turn Closed Captioning On or Off.": ["Turn Closed Captioning On or Off.","Activez ou désactivez le sous-titrage.","Activar o desactivar los subtítulos ocultos"],
        "Analog Caption": ["Analog Caption","Sous-titrage analogique ","Subtítulos analógicos "],
        "Select the Closed Caption mode when you view an analog program.": ["Select the Closed Caption mode when you view an analog program.","Sélectionnez le mode de sous-titrage lorsque vous visionnez un programme analogique.","Seleccionar el modo de subtítulos ocultos cuando ve un programa analógico."],
        "Digital Caption": ["Digital Caption","Sous-titrage numérique  ","Subtítulos digitales  "],
        "Select the Closed Caption mode when you view a digital program.": ["Select the Closed Caption mode when you view a digital program.","Sélectionnez le mode de sous-titrage lorsque vous visionnez un programme numérique.","Seleccionar el modo de subtítulos ocultos cuando ve un programa digital."],
        "Digital CC Settings": ["Digital CC Settings","Paramètres CC numériques","Configuración de subtítulos ocultos digitales"],
        "Modify digital closed caption options.": ["Modify digital closed caption options.","Modifiez les options de sous-titrage numérique codé.","Modificar opciones de subtítulos ocultos digitales."],
        "Style1": ["Style1","Style1","Estilo1"],
        "Style2": ["Style2","Style2","Estilo2"],
        "Style3": ["Style3","Style3","Estilo3"],
        "Style4": ["Style4","Style4","Estilo4"],
        "Style5": ["Style5","Style5","Estilo5"],
        "Style6": ["Style6","Style6","Estilo6"],
        "Style7": ["Style7","Style7","Estilo7"],
        "Style": ["Style","Style","Estilo"],
        "Automatic": ["Automatic","Automatique","Automático"],
        "Custom": ["Custom","Personnalisé","Personalizado"],
        "Modify the style for closed captions.": ["Modify the style for closed captions.","Modifiez le style de sous-titres codés.","Modificar el estilo de los subtítulos ocultos."],
        "Size": ["Size","Taille","Tamaño"],
        "Small": ["Small","Petit","Pequeño"],
        "Medium": ["Medium","Moyenne","Medio"],
        "Large": ["Large","Grand","Grande"],
        "Modify the font size for closed captions.": ["Modify the font size for closed captions.","Modifiez la taille de la police pour les sous-titrages codés.","Modificar el tamaño de fuente para los subtítulos ocultos."],
        "Font": ["Font","Police","Fuente"],

        "Modify the font type for closed captions.": ["Modify the font type for closed captions.","Modifier le type de police pour les sous-titres codés.","Modificar el tipo de fuente para los subtítulos ocultos."],
        "Text Color": ["Text Color","Couleur du texte","Color de texto"],
        "White": ["White","Blanc","Blanco"],
        "Green": ["Green","Vert","Verde"],
        "Blue": ["Blue","Bleu","Azul"],
        "Red": ["Red","Rouge","Rojo"],
        "Cyan": ["Cyan","Cyan","Cian"],
        "Yellow": ["Yellow","Jaune","Amarillo"],
        "Magenta": ["Magenta","Magenta","Magenta"],
        "Black": ["Black","Noir","Negro"],
        "Modify the text color for closed captions.": ["Modify the text color for closed captions.","Modifiez la couleur du texte pour les sous-titres codés.","Modificar el color del texto de los subtítulos ocultos."],
        "Text Opacity": ["Text Opacity","Opacité du texte","Opacidad del texto"],
        "Solid": ["Solid","Solide","Sólido"],
        "Translucent": ["Translucent","Translucide","Translúcido"],
        "Transparent": ["Transparent","Transparent","Transparente"],
        "Modify the text opacity for closed captions.": ["Modify the text opacity for closed captions.","Modifier l'opacité du texte pour les sous-titres codés.","Modificar la opacidad del texto para los subtítulos ocultos."],
        "Background Color": ["Background Color","Couleur de l’arrière-plan","Color de fondo"],
        "Modify the background color for closed captions.": ["Modify the background color for closed captions.","Modifiez la couleur de l’arrière-plan du sous-titrage.","Modificar el color de fondo para los subtítulos ocultos."],
        "Background Opacity": ["Background Opacity","Opacité de l’arrière-plan","Opacidad de fondo"],
        "Modify the background opacity for closed captions.": ["Modify the background opacity for closed captions.","Modifiez l'opacité de l’arrière-plan du sous-titrage.","Modificar la opacidad de fondo para los subtítulos ocultos."],
        "Edge Effect": ["Edge Effect","Effet de bord","Efecto del borde"],
        "None": ["None","Aucun","Ninguno"],
        "Raised": ["Raised","Relevés","En relieve"],
        "Depressed": ["Depressed","Abaissés","Hundido"],
        "Uniform": ["Uniform","Uniformes","Uniforme"],
        "Left Shadow": ["Left Shadow","Ombre à gauche","Sombra izquierda"],
        "Right Shadow": ["Right Shadow","Ombre à droite","Sombra derecha"],
        "Modify the font edge effect.": ["Modify the font edge effect.","Modifiez l'effet de bord de la police.","Modificar el efecto del borde de la fuente."],
        "Edge Color": ["Edge Color","Couleur du bord","Color del borde"],
        "Modify the font edge color.": ["Modify the font edge color.","Modifiez la couleur du bord de la police.","Modificar el color del borde de la fuente."],
        "Off": ["Off","Désactivé","Apagado"]
    },
    rewrite:function(pageData){
        //todo
        var i;
       // pageData.setting_sys_cc1_str2.Data=pageData.operateData.captionlist[pageData.operateData.curcontrol];
       // pageData.setting_sys_cc_ul1.DataSelectedIndex=pageData.operateData.curcontrol;
        //pageData.setting_sys_cc_ul1.SelectedIndex=pageData.operateData.curcontrol;

       // pageData.setting_sys_cc2_str2.Data=pageData.operateData.analoglist[pageData.operateData.curanalog];
        pageData.setting_sys_cc_ul2.DataSelectedIndex=pageData.operateData.curanalog;
        //pageData.setting_sys_cc_ul2.SelectedIndex=pageData.operateData.curanalog;

      //  pageData.setting_sys_cc3_str2.Data=pageData.operateData.digitallist[pageData.operateData.curdigital];
        pageData.setting_sys_cc_ul3.DataSelectedIndex=pageData.operateData.curdigital;
       // pageData.setting_sys_cc_ul3.SelectedIndex=pageData.operateData.curdigital;

//      //  pageData.setting_sys_cc4_str2.Data=pageData.operateData.digstyle[pageData.operateData.curdigstyle];
//        pageData.setting_sys_cc_ul4.DataSelectedIndex=pageData.operateData.curdigstyle;
//       // pageData.setting_sys_cc_ul4.SelectedIndex=pageData.operateData.curdigstyle;
//
//        //pageData.setting_sys_cc5_str2.Data=pageData.operateData.digsize[pageData.operateData.curdigsize];
//        pageData.setting_sys_cc_ul5.DataSelectedIndex=pageData.operateData.curdigsize;
//        //pageData.setting_sys_cc_ul5.SelectedIndex=pageData.operateData.curdigsize;
//
//      //  pageData.setting_sys_cc6_str2.Data=pageData.operateData.digfontstyle[pageData.operateData.curfontstyle];
//        pageData.setting_sys_cc_ul6.DataSelectedIndex=pageData.operateData.curfontstyle;
//       // pageData.setting_sys_cc_ul6.SelectedIndex=pageData.operateData.curfontstyle;
//
//      //  pageData.setting_sys_cc7_str2.Data=pageData.operateData.digtextcolor[pageData.operateData.curtextcolor];
//        pageData.setting_sys_cc_ul7.DataSelectedIndex=pageData.operateData.curtextcolor;
//        //pageData.setting_sys_cc_ul7.SelectedIndex=pageData.operateData.curtextcolor;
//
//       // pageData.setting_sys_cc8_str2.Data=pageData.operateData.digtextopacity[pageData.operateData.curtextopacity];
//        pageData.setting_sys_cc_ul8.DataSelectedIndex=pageData.operateData.curtextopacity;
//        //pageData.setting_sys_cc_ul8.SelectedIndex=pageData.operateData.curtextopacity;
//
//      //  pageData.setting_sys_cc9_str2.Data=pageData.operateData.digbgcolor[pageData.operateData.curdigbgcolor];
//        pageData.setting_sys_cc_ul9.DataSelectedIndex=pageData.operateData.curdigbgcolor;
//       // pageData.setting_sys_cc_ul9.SelectedIndex=pageData.operateData.curdigbgcolor;
//
//       // pageData.setting_sys_cc10_str2.Data=pageData.operateData.digbgopacity[pageData.operateData.curdigbgopacity];
//        pageData.setting_sys_cc_ul10.DataSelectedIndex=pageData.operateData.curdigbgopacity;
//        //pageData.setting_sys_cc_ul10.SelectedIndex=pageData.operateData.curdigbgopacity;
//
//       // pageData.setting_sys_cc11_str2.Data=pageData.operateData.digedgeeffect[pageData.operateData.curdigedgeeffect];
//        pageData.setting_sys_cc_ul11.DataSelectedIndex=pageData.operateData.curdigedgeeffect;
//        //pageData.setting_sys_cc_ul11.SelectedIndex=pageData.operateData.curdigedgeeffect;
//
//       // pageData.setting_sys_cc12_str2.Data=pageData.operateData.edgecolor[pageData.operateData.curedgecolor];
//        pageData.setting_sys_cc_ul12.DataSelectedIndex=pageData.operateData.curedgecolor;
//       // pageData.setting_sys_cc_ul12.SelectedIndex=pageData.operateData.curedgecolor;
//         if(pageData.operateData.curcontrol==0)
//         {
//             pageData.setting_sys_cc_ul2.disable=true;
//             pageData.setting_sys_cc_ul3.disable=true;
//             pageData.setting_sys_cc_ul4.disable=true;
//             pageData.setting_sys_cc_ul5.disable=true;
//             pageData.setting_sys_cc_ul6.disable=true;
//             pageData.setting_sys_cc_ul7.disable=true;
//             pageData.setting_sys_cc_ul9.disable=true;
//             pageData.setting_sys_cc_ul10.disable=true;
//             pageData.setting_sys_cc_ul11.disable=true;
//             pageData.setting_sys_cc_ul8.disable=true;
//             pageData.setting_sys_cc_ul12.disable=true;
//
//
//
//         }
//         else
//         {
//             pageData.setting_sys_cc_ul2.disable=false;
//             pageData.setting_sys_cc_ul3.disable=false;
//             pageData.setting_sys_cc_ul4.disable=false;

//             if(pageData.operateData.curdigstyle==0)
//             {
//                 pageData.setting_sys_cc_ul5.disable=true;
//                 pageData.setting_sys_cc_ul6.disable=true;
//                 pageData.setting_sys_cc_ul7.disable=true;
//                 pageData.setting_sys_cc_ul9.disable=true;
//                 pageData.setting_sys_cc_ul10.disable=true;
//                 pageData.setting_sys_cc_ul11.disable=true;
//                 pageData.setting_sys_cc_ul8.disable=true;
//                 pageData.setting_sys_cc_ul12.disable=true;
//             }
//             else
//             {
//                 pageData.setting_sys_cc_ul5.disable=false;
//                 pageData.setting_sys_cc_ul6.disable=false;
//                 pageData.setting_sys_cc_ul7.disable=false;
//                 pageData.setting_sys_cc_ul9.disable=false;
//                 pageData.setting_sys_cc_ul10.disable=false;
//                 pageData.setting_sys_cc_ul11.disable=false;
//                 pageData.setting_sys_cc_ul8.disable=false;
//                 pageData.setting_sys_cc_ul12.disable=false;
//             }
////         }

    }
};
function SettingCloseCaptiononOpen()
{

    var contenthigh=$("#setting_sys_cc_content").height();
    var boxheigh=944;
    if(contenthigh>boxheigh)
    {
        var temp=parseInt(944/contenthigh*boxheigh);
        $("#setting_sys_cc_srcollbar").css("height",temp);
        $("#setting_sys_cc_srcollbar").css("visibility","visible");
        this.data.operateData.step=141;//parseInt((contenthigh-boxheigh)/6)+1;
        this.data.operateData.scrollstep=parseInt((944-50-temp)/5);
        this.data.operateData.currenheight=25;
        $("#setting_sys_cc_srcollbar").css("top", this.data.operateData.currenheight+"px");

    }
    else
    {
        $("#setting_sys_cc_srcollbar").css("visibility","hidden");
    }
    hiWebOsFrame.settingssyscc.hiFocus("setting_sys_cc_ul2");


}

function SettingSysCCUlleft()
{
    if(this.SelectedIndex==0)
    {
        SettingSysCCEsc();
    }
}

function SettingSysCCUl1Enter()
{
    this.page.operateData.curcontrol=this.SelectedIndex;
    //todo
    debugPrint("SettingSysCCUl1Enter"+this.SelectedIndex);
    model.closedcaption.setControl(this.page.operateData.curcontrol);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}
function SettingSysCCUl2Enter()
{
    this.page.operateData.curanalog=this.SelectedIndex;
    model.closedcaption.setControlAnalogMode(this.page.operateData.curanalog);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}
function SettingSysCCUl3Enter()
{

    this.page.operateData.curdigital=this.SelectedIndex;
    model.closedcaption.setControlDigitalMode(this.page.operateData.curdigital);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}
function SettingSysCCUl4Enter()
{
    this.page.operateData.curdigstyle=this.SelectedIndex;
    model.closedcaption.setControlDigitalStyle(this.page.operateData.curdigstyle);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}
function SettingSysCCUl5Enter()
{
    this.page.operateData.curdigsize=this.SelectedIndex;
    model.closedcaption.setControlDigitalSize(this.page.operateData.curdigsize);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}

function SettingSysCCUl6Enter()
{
    this.page.operateData.curfontstyle=this.SelectedIndex;
    model.closedcaption.setControlDigitalFont(this.page.operateData.curfontstyle);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}
function SettingSysCCUl7Enter()
{
    this.page.operateData.curtextcolor=this.SelectedIndex;
    model.closedcaption.setControlDigitalTextcolor(this.page.operateData.curtextcolor);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}

function SettingSysCCUl8Enter()
{
    this.page.operateData.curtextopacity=this.SelectedIndex;
    model.closedcaption.setControlDigitalTextopacity(this.page.operateData.curtextopacity);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}

function SettingSysCCUl9Enter()
{
    this.page.operateData.curdigbgcolor=this.SelectedIndex;
    model.closedcaption.setControlDigitalBgcolor(this.page.operateData.curdigbgcolor);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}

function SettingSysCCUl10Enter()
{
    this.page.operateData.curdigbgopacity=this.SelectedIndex;
    model.closedcaption.setControlDigitalBgopacity(this.page.operateData.curdigbgopacity);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}

function SettingSysCCUl11Enter()
{
    this.page.operateData.curdigedgeeffect=this.SelectedIndex;
    model.closedcaption.setControlDigitalEdgeeffect(this.page.operateData.curdigedgeeffect);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}

function SettingSysCCUl12Enter()
{
    this.page.operateData.curedgecolor=this.SelectedIndex;
    model.closedcaption.setControlDigitalEdgecolor(this.page.operateData.curedgecolor);
    this.page.rewriteDataOnly();
    SetRecentUse("Closed Caption",4,5);
}

function SettingCloseCaptiononDestroy()
{
    hiWebOsFrame.settingssyscc=null;
}

function SettingsysCCDownHandler()
{
    var index=0;
//    if(this.id=="setting_sys_cc_ul7")
//    {
//        index=1;
//    }
//    else
    if(this.id=="setting_sys_cc_ul8")
    {
        index=1;
    }
    else if(this.id=="setting_sys_cc_ul9")
    {
        index=2;
    }
    else if(this.id=="setting_sys_cc_ul10")
    {
        index=3;
    }
    else if(this.id=="setting_sys_cc_ul11")
    {
        index=4;
    }
    else if(this.id=="setting_sys_cc_ul12")
    {
        index=5;
    }

    $("#setting_sys_cc_content").css("top","-"+ this.page.operateData.step*index+"px");
    $("#setting_sys_cc_srcollbar").css("top",this.page.operateData.scrollstep*index+25);
}


function SettingCloseCaptioninit()
{
    try{
       // PageDataSettingSysClosecaption.operateData.curcontrol=model.closedcaption.getControl();
        PageDataSettingSysClosecaption.operateData.curanalog=model.closedcaption.getControlAnalogMode();
        PageDataSettingSysClosecaption.operateData.curdigital= model.closedcaption.getControlDigitalMode();
//        PageDataSettingSysClosecaption.operateData.curdigstyle= model.closedcaption.getControlDigitalStyle();
//        PageDataSettingSysClosecaption.operateData.curdigsize= model.closedcaption.getControlDigitalSize();
//        PageDataSettingSysClosecaption.operateData.curfontstyle= model.closedcaption.getControlDigitalFont();
//        PageDataSettingSysClosecaption.operateData.curtextcolor= model.closedcaption.getControlDigitalTextcolor();
//        PageDataSettingSysClosecaption.operateData.curtextopacity= model.closedcaption.getControlDigitalTextopacity();
//        PageDataSettingSysClosecaption.operateData.curdigbgcolor= model.closedcaption.getControlDigitalBgcolor();
//        PageDataSettingSysClosecaption.operateData.curdigbgopacity= model.closedcaption.getControlDigitalBgopacity();
//        debugPrint("PageDataSettingSysClosecaption.operateData.curdigbgopacity"+PageDataSettingSysClosecaption.operateData.curdigbgopacity);
//        PageDataSettingSysClosecaption.operateData.curdigedgeeffect= model.closedcaption.getControlDigitalEdgeeffect();
//        debugPrint("PageDataSettingSysClosecaption.operateData.curdigedgeeffect"+PageDataSettingSysClosecaption.operateData.curdigedgeeffect);
//        PageDataSettingSysClosecaption.operateData.curedgecolor= model.closedcaption.getControlDigitalEdgecolor();
//        debugPrint("PageDataSettingSysClosecaption.operateData.curedgecolor"+PageDataSettingSysClosecaption.operateData.curedgecolor);
//        PageDataSettingSysClosecaption.setting_sys_cc_ul1.SelectedIndex=PageDataSettingSysClosecaption.operateData.curcontrol;
        PageDataSettingSysClosecaption.setting_sys_cc_ul2.SelectedIndex=PageDataSettingSysClosecaption.operateData.curanalog;
        PageDataSettingSysClosecaption.setting_sys_cc_ul3.SelectedIndex=PageDataSettingSysClosecaption.operateData.curdigital;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul4.SelectedIndex=PageDataSettingSysClosecaption.operateData.curdigstyle;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul5.SelectedIndex=PageDataSettingSysClosecaption.operateData.curdigsize;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul6.SelectedIndex=PageDataSettingSysClosecaption.operateData.curfontstyle;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul7.SelectedIndex=PageDataSettingSysClosecaption.operateData.curtextcolor;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul8.SelectedIndex=PageDataSettingSysClosecaption.operateData.curtextopacity;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul9.SelectedIndex=PageDataSettingSysClosecaption.operateData.curdigbgcolor;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul10.SelectedIndex=PageDataSettingSysClosecaption.operateData.curdigbgopacity;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul11.SelectedIndex=PageDataSettingSysClosecaption.operateData.curdigedgeeffect;
//        PageDataSettingSysClosecaption.setting_sys_cc_ul12.SelectedIndex=PageDataSettingSysClosecaption.operateData.curedgecolor;
//      //  hiWebOsFrame.settingssyscc.rewrite();
    }catch (e)
    {
        debugPrint(e)
    }

}
function SettingSysCCEsc()
{
    hiWebOsFrame.settingssyscc.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.settingssyscc.destroy();
}
