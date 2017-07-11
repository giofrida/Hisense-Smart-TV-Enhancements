/**
 * Created by Administrator on 14-6-17.
 */
function getSettingFirPageData(opt) {
    opt.CaE = [
        {
            "id": "setting_fircls_head_img1",
            "description": "setting head",
            "CaEType": "img"
        },
        {
            "id": "setting_fircls_head_text1",
            "description": "setting head",
            "CaEType": "span"
        },
        {
            "id": "setting_fir_helpinfo_title",
            "description": "setting head",
            "CaEType": "div"
        },
        {
            "id": "setting_fir_helpinfo_content",
            "description": "setting head",
            "enableHtml":true,
            "CaEType": "div"
        },
        {
            "id": "settings_first_ul",//在页面中的按钮或者组件容器Id
            "description": "setting菜单",
            "CaEType": "Ul",
            "disable": false,
            "firstFocusId": "setting_first_title",
            "SelectedIndex": 0,
//                    "nav": {"leftTo": 0, "rightTo": 2, "upTo": "detail_btn_timer"},
//                    "classes": {
//                        "normal": "listNormal", "focus": "listFocus", "disable": "listDisable", "selected": "listSelected"
//                    },
            "handler": {
                "aftDownHandler": "SettingMenuDownHandler",
                "aftUpHandler": "SettingMenuUpHandler",
                "aftEscHandler": "SettingMenuEscHandler"

            },
            oriCaE: [
                {
                    "id": "setting_first_ul2",//在页面中的按钮或者组件容器Id
                    "description": "setting二级菜单",
                    "CaEType": "Ul",
                    "disable": false,
                    "SelectedIndex": 0,
                    "nav": {
                        "leftTo": "setting_first_title", "downTo": "setting_first_ul2", "upTo": "setting_first_ul2"
                    },
                    "handler": {
                        "aftEnterHandler": "SettingMenuFirstEnHandler",
                        "aftDownHandler": "SettingsubMenuDownHandler",
                        "aftUpHandler": "SettingsubMenuUpHandler",
                        "aftEscHandler": "SettingMenuEscHandler",
                        "aftRightHandler": "SettingTitleRightHandler"

                    },
                    oriCaE: [
                        {
                            "id": "setting_first_content_text1",
                            "description": "名称",
                            "CaEType": "div"
                        },
                        {
                            "id": "setting_first_content_text2",
                            "description": "value",
                            "CaEType": "div"

                        }
                        ,
                        {
                            "id": "setting_first_content_text3",
                            "description": "value",
                            "CaEType": "div"

                        },
                        {
                            "id": "setting_first_content_text4",
                            "description": "setting head",
                            "CaEType": "div"
                        },
                        {
                            "id": "setting_first_content_text4_img",
                            "description": "setting head",
                            "CaEType": "img"
                        }
                    ],
                    UlConfig: [ "setting_first_content_text1", "setting_first_content_text2", "setting_first_content_text3","setting_first_content_text4", "setting_first_content_text4_img"]

                },
                {
                    "id": "setting_first_title",
                    "description": "名称",
                    "CaEType": "div",
                    "nav": {
                        "rightTo": "setting_first_ul2"
                    },
                    "handler": {
                        "aftLeftHandler": "SettingTitleLeftHandler"
                    }
                },

                {
                    "id": "setting_first_title_text1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_first_title_img1",
                    "description": "选择图片",
                    "CaEType": "img"

                },
                {
                    "id": "setting_first_title_img2",
                    "description": "选择图片",
                    "CaEType": "img"

                }
            ],
            "UlConfig": {
                "UlDataItem": [ "setting_first_title_text1", "setting_first_title_img1", "setting_first_ul2", "setting_first_title"],
                "PageSize": 6
            }
        }
    ]
    //SettingFirInit();
    PageDataFirstClsInit();   //changed by ghl for hide some sound/picture items
    return PageDataFirstCls;
}
var PageDataFirstCls = {

    "setting_fircls_head_img1": {Data: "img/setting_title.png"},
    "setting_fircls_head_text1": {Data: "Setup"},
    "settings_first_ul": { "Data": [
        {
            "setting_first_title_text1": {Data: "Picture"}, "setting_first_title_img1": {Data: "img/setting_fir_pic_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_pic_selsect.png"},
            "setting_first_ul2": {"Data": [],
                "SelectedIndex": 0
            }

        },
        {
            "setting_first_title_text1": { "Data": "Sound"}, "setting_first_title_img1": { "Data": "img/setting_fir_sou_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_sou_selsect.png"},
            "setting_first_ul2": { "Data": [],
                "SelectedIndex": 0,
                "disableItem": []
            }


        },
        {
            "setting_first_title_text1": { "Data": "Channel"}, "setting_first_title_img1": { "Data": "img/setting_fir_chl_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_chl_selsect.png"},
            "setting_first_ul2": { "Data": [
                {
                    "setting_first_content_text1": {Data: "Tuner Mode"}, "setting_first_content_text2": {Data: "Antenna"}, "setting_first_content_text3": { "Data": ""}
                },
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Auto Scan"}
                }
                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "DTV Manual Scan"}
                }
                ,
                {
                    "setting_first_content_text1": { "Data": ""}, "setting_first_content_text2": { "Data": ""}, "setting_first_content_text3": { "Data": "ATV Manual Scan"}
                }
                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Channel Edit"}
                }
                ,
                {
                    "setting_first_content_text1": {Data: "Channel list auto-update"}, "setting_first_content_text2": {Data: "On"}, "setting_first_content_text3": { "Data": ""}
                }
                ,
                //{
                //    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "EPG Mark"}
                //}
                //,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Parental Controls"}
                }
            ],
                "SelectedIndex": 0}

        },
        {
            "setting_first_title_text1": { "Data": "Network"}, "setting_first_title_img1": { "Data": "img/setting_fir_net_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_net_selsect.png"},
            "setting_first_ul2": { "Data": [
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Network Configuration"}
                },
                {
                    "setting_first_content_text1": { "Data": "Network Information"}, "setting_first_content_text2": { "Data": "Connected"}, "setting_first_content_text3": { "Data": ""}
                }
                ,
//                {
//                    "setting_first_content_text1": {Data: "Wake Up By Wi-Fi"}, "setting_first_content_text2": {Data: "Off"}, "setting_first_content_text3": { "Data": ""}
//                }
//                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Connection Test"}
                }
                ,
                {
                    "setting_first_content_text1": {Data: "Anyview Stream"}, "setting_first_content_text2": {Data: "Off"}, "setting_first_content_text3": { "Data": ""}
                }
                ,
                {
                    "setting_first_content_text1": {Data: "TV Name"}, "setting_first_content_text2": {Data: "Smart TV"}, "setting_first_content_text3": { "Data": ""}
                }
            ],
                "SelectedIndex": 0}

        },
        {
            "setting_first_title_text1": { "Data": "System"}, "setting_first_title_img1": { "Data": "img/setting_fir_sys_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_sys_selsect.png"},
            "setting_first_ul2": { "Data": [
//                {
//                    "setting_first_content_text1": {Data: "Location"}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                },
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "System PIN"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                }
                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Time"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                }
                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Language"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                }
//                ,
//                {
//                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Audio Only"}
//                }
                ,
//                {
//                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Parental Controls"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                }
//                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Application Settings"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                }
                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Closed Caption"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                },
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "HDMI & CEC Function"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                },
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Advanced Settings"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                }


            ],
                "SelectedIndex": 0,
                "disableItem": []}

        },
        {
            "setting_first_title_text1": { "Data": "About"}, "setting_first_title_img1": { "Data": "img/setting_fir_tv_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_tv_selsect.png"},
            "setting_first_ul2": { "Data": [
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "System Info"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                },
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "EULA"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                },
                {
                    "setting_first_content_text1": { "Data": ""}, "setting_first_content_text2": { "Data": ""}, "setting_first_content_text3": { "Data": "System Update"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                },

//                {
//                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                },
//                {
//                    "setting_first_content_text1": { "Data": ""}, "setting_first_content_text2": { "Data": ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                },
//
//                {
//                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                },
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Restore To Factory Default"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                }
//                ,
//                {
//                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Reset All Settings"}
//                }


            ],
                "SelectedIndex": 0}

        }


    ],
        "SelectedIndex": 0
//        "DataSelectedIndex":0,
//        "disable":false
//          "disableItem":[0,3]

    },
    "setting_fir_helpinfo_title": {Data: "Setup"},
    "setting_fir_helpinfo_content": {Data: "Setup the system"},
    "operateData": {
        "settingdisablelist":[
        [],
        [],
        [],
        [],
        [],
        []
        ],
        applist:["vudu","netflix"],
        "curlocation": "",
        "countrycode":["ZAF",           "THA",   "VNM",      "MMR"   ,"MYS",    "MAR" ,    "NGA",      "LBY", "GHA",     "SLE"      ,"CIV",         "AGO"    ,"BEN",  "LBR",                "COD",             "CMR",    "ZWE",    "COG" ,             "UGA",   "TZA",    "MUS",      "SDN",    "DJI",  "ETH",        "KEN","MOZ",         "MDG"  ],
        "curcountrylist":["South Africa","Thailand","Vietnam ","Myanmar","Malaysia","Morocco","Nigeria","Libya","Ghana","Sierra Leone","Cote d'Ivoire","Angola","Benin","Republic of Liberia","Congo-Kinshasa","Cameroon","Zimbabwe","Congo-Brazzaville","Uganda","Tanzania","Mauritius","Sudan","Djibouti","Ethiopia","Kenya","Mozambique","Madagascar"],

        "curupdateswitch": 0,
        "curoadsitch":0,
        "helptitle":"",
        "helpcontent":"",
        Pichelplist:[
            {
                "title":"Picture Mode",
                "content":"Select a preset picture mode to best suit the content you're viewing."
            },
            {
                "title":"Apply Picture Mode",
                "content":"Adjust current picture mode to apply to all sources or just current source."
            },
            {
                "title":"Brightness",
                "content":"Adjust the Brightness level to generate lighter or darker images."
            },
            {
                "title":"Contrast",
                "content":"Adjust the Contrast level to increase or decreae how bright images appear."
            },
            {
                "title":"Colour Saturation",
                "content":"Adjust the colour intensity of the picture for a more vibrant image."
            },
            {
                "title":"Aspect Ratio",
                "content":"Adjust the Aspect Ratio to stretch or zoom in on your picture."
            },
            {
                "title":"Backlight",
                "content":"Set the overall brightness of the screen."
            },
            //{
            //    "title":"3D",
            //    "content":"Adjusts 3D display effect and mode."
            //},
            {
                "title":"Advanced Picture Settings",
                "content":"Adjust advanced picture settings based on your viewing preference."
            },
            {
                "title":"Restore Default Picture Settings",
                "content":"Restore all the picture settings in the current picture mode to the factory default values."
            }
        ],
        sndhelplist:[
            {
                "title":"Sound Mode",
                "content":"Select a preset sound mode to suit the type of content you are listening to."
            },
            {
                "title":"Apply Sound Mode",
                "content":"Adjust current sound mode to apply to all source or just current source."
            },
            //{
            //    "title":"TV Speaker",
            //    "content":"Disable TV speaker when you are using sound bar, ARC or any other external audio amplifier"
            //},
            {
                "title":"Advanced Audio Settings",
                "content":"Tune the audio settings and quality of the TV."
            },
            {
                "title":"Restore Default Audio Settings",
                "content":"Restore all of the audio settings in current audio mode to the factory default values."
            }
        ],
        "channelhelplist":[
            {
                "title":"Tuner Mode",
                "content":"Select if you receive TV channels over the air (antenna) or through a Cable TV connection as the input will be used during a channel scan."
            },
            {
                "title":"Automatic Scan",
                "content":"Automatically scan for channels to view programming from your TV source."
            },
            {
                "title":"DTV Manual Scan",
                "content":"Manually scan for DTV channels to view programming from your TV source."
            },
            {
                "title":"ATV Manual Scan",
                "content":"Manually scan for ATV channels to view programming from your TV source."
            },
            {
                "title":"Channel Edit",
                "content":"Manually edit the channel list order to suit yourself"
            },
            {
                "title":"Channel list auto-update",
                "content":"Aollow TV auto update the channel list when content provider change the network information"
            },
            //{
            //    "title":"EPG Mark",
            //    "content":"Highlight your favorite programs with exclusive color"
            //},
            {
                "title":"Parental Controls",
                "content":"Turn On Parental Controls to block children from being able to view certain programs."
            },
            {
                "title":"Advanced Settings",
                "content":"Review the Advanced Settings menu\n-Common interface\n-CI card and PIN\n-CAM Profile search"
            }
        ],
        "networkhelplist":[
            {
                "title":"Network Configuration",
                "content":"Set up the network to gain full access of Smart TV features."
            },
            {
                "title":"Network Information",
                "content":"View Information about your network connection."
            },
            {
                "title":"Connection Test",
                "content":"Test the network to see if connection is available or not."
            },
            {
                "title":"Anyview Stream",
                "content":"Share video, music or other content from another device on to your TV screen."
            },
            {
                "title":"TV Name",
                "content":"Choose a name for your TV. The name will be shown to devices that are available for sharing data."
            }
        ],
        "syshelplist":[
            {
              "title":"Location",
              "content":"Choose the location from where you will watch your TV."
            },
            {
                "title":"System PIN",
                "content":"Change your PIN that you use to access Parental Controls, Auto Channel Scan and Reset To Factory Default."
            },
            {
                "title":"Time",
                "content":"Set the current time based on your location."
            },
            {
                "title":"Language",
                "content":"Adjust the default language settings for the TV."
            },
            {
                "title":"Application Settings",
                "content":"Set settings for apps on your TV."
            },
            {
                "title":"HDMI & CEC Function",
                "content":"Configure how to control CEC-enabled devices with your TV remote."
            }
            ,
            {
                "title":"Advanced Settings",
                "content":"Review the Advanced Settings menu\n-Menu Timeout\n-Auto Sleep-PVR&Time-Shift Settings-Power Indicator-Input Labels-Setup Wizard-Store Mode"
            }
        ],
        "abouthelplist":[
            {
                "title":"System Info",
                "content":"View System information."
            },
            {
                "title":"Disclaimer",
                "content":"Read the Hisense Legal Disclaimer."
            },
            {
                "title":"System Upgrade",
                "content":"Set your TV to receive the latest firmware "
            },

            {
                "title":"Restore To Factory Default",
                "content":"Restore your TV back to the factory default."
            }
            ,
            {
                "title":"",
                "content":""
            }
        ],
        "curselect": 0,
        "subselect": 0,
       // "sysdisableitem": [0,1,2],
        "sndData": {
            "setting_first_ul2": { "Data": [
                {   //sound mode
                    "setting_first_content_text2": { "Data": "33_"}
                },
//                {   //Headphone volume    //新兴和sa去掉
//                    "setting_first_content_text2": { "Data": "33_"}
//                },
                {       //DBX
                    "setting_first_content_text2": { "Data": "33_"}
                },
//                {       //SAP
//                    "setting_first_content_text2": { "Data": "35_"}
//                },
                {       //Subwoofer
                    "setting_first_content_text2": { "Data": ""}
                },
                {       //BassBoost
                    "setting_first_content_text2": { "Data": "35_"}
                },
                {   //advanced setting
                    "setting_first_content_text2": { "Data": ""}
                },
                {   //reset audio factory mode
                    "setting_first_content_text2": { "Data": ""}
                }
            ],
                "SelectedIndex": 0,
                "disableItem": []
            },
            "ModeEnum": ["Standard", "Theatre", "Music", "Speech", "Late Night"],
            "SapModeEnum": ["Mono", "Stereo", "SAP"],
            "ApplySoundModeEnum":["All Source","Current Source"],
            "SndTvSpeakerEnum":["Off","On"]
        },
        /*********************picture start*****************/
        "picData": {
            "setting_first_ul2": {"Data": [
                {
                    "setting_first_content_text2": {Data: "31_"}
                },
                {
                    "setting_first_content_text2": {Data: "32_"}
                },
                {
                    "setting_first_content_text2": {Data: "33_"}
                },
                {
                    "setting_first_content_text2": {Data: "34_"}
                },
                {
                    "setting_first_content_text2": {Data: "35_"}
                },
                {
                    "setting_first_content_text2": {Data: "36_"}
                },
                {
                    "setting_first_content_text2": {Data: "37_"}
                },
                {
                    "setting_first_content_text2": {Data: "38_"}
                },
                {
                    "setting_first_content_text2": {Data: "39_"}
                }
            ],
                "SelectedIndex": 0
            },
            picModeVec: ["Standard", "Cinema day", "Cinema night", "PC/Game", "Dynamic"],
            picApplyModeVec: ["All Source", "Current Source"],
            picZoomModeVec: ["Automatic", "16:9", "4:3", "Panoramic", "Movie Zoom", "Direct"]
        },


        /*********************picture end*****************/

        /*********************channel start*****************/
        "channelListUpdateFlag":0,
        "currTunerModeIdx":0,
        "tunerModeMap":[
            {
                "map":0,
                "name":"Antenna"
            },
            {
                "map":1,
                "name":"Cable"
            }
        ],
        /*********************channel end*****************/
        /*********************Network start*****************/
        "networkStatus":0,
        "currDMRFlag":1,
        "currWakeUpByWifiFlag":1,
        "currTVName":"Smart TV"
        /*********************Network end*****************/
    },
    "langData": {
        //delete langData
    },
    rewrite: function (pageData) {
        try{
            pageData.setting_fir_helpinfo_title.Data=pageData.operateData.helptitle;
            pageData.setting_fir_helpinfo_content.Data=pageData.operateData.helpcontent;

//        Sound Data start-----------------------------

            try {   //Sound
                var sndUpdateItemLength =  3;
                debugG("sndUpdateItemLength");
                for (var i = 0; i < sndUpdateItemLength; i++) {
                    pageData.settings_first_ul.Data[1].setting_first_ul2.Data[i].setting_first_content_text2.Data = pageData.operateData.sndData.setting_first_ul2.Data[i].setting_first_content_text2.Data;
                }
            } catch (ex) {
                debugE(ex.message);
            }

            try {   //Picture
                var picUpdateItemLength = 6;
                for (var i = 0; i < picUpdateItemLength; i++) {
                    pageData.settings_first_ul.Data[0].setting_first_ul2.Data[i].setting_first_content_text2.Data = pageData.operateData.picData.setting_first_ul2.Data[i].setting_first_content_text2.Data;
                }
            } catch (ex) {
                debugE(ex.message);
            }

        pageData.settings_first_ul.Data[0].setting_first_ul2.disableItem = pageData.operateData.settingdisablelist[0];
        pageData.settings_first_ul.Data[1].setting_first_ul2.disableItem = pageData.operateData.settingdisablelist[1];
        pageData.settings_first_ul.Data[2].setting_first_ul2.disableItem = pageData.operateData.settingdisablelist[2];
        pageData.settings_first_ul.Data[3].setting_first_ul2.disableItem = pageData.operateData.settingdisablelist[3];
        pageData.settings_first_ul.Data[4].setting_first_ul2.disableItem = pageData.operateData.settingdisablelist[4];
        pageData.settings_first_ul.Data[5].setting_first_ul2.disableItem = pageData.operateData.settingdisablelist[5];

//        Sound Data End------------------------------

            /*        Pic Data start-----------------------------*/
            var opData = pageData.operateData;
//            PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data[0].setting_first_content_text2.Data = opData.pictureModeCurrent;
//            PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data[1].setting_first_content_text2.Data = opData.brightnessValue;
//            PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data[2].setting_first_content_text2.Data = opData.contrastValue;
//            PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data[3].setting_first_content_text2.Data = opData.colorValue;
//            PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data[4].setting_first_content_text2.Data = opData.backLightCurrent;
//            PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data[5].setting_first_content_text2.Data = opData.zoomCurrent;


            /*       Pic Data End------------------------------*/
//            pageData.settings_first_ul.Data[4].setting_first_ul2.Data[0].setting_first_content_text2.Data = pageData.operateData.curlocation;
//            if(pageData.operateData.curupdateswitch==0)
//            {
//                pageData.settings_first_ul.Data[5].setting_first_ul2.Data[2].setting_first_content_text2.Data = "Off";
//            }
//            else{
//                pageData.settings_first_ul.Data[5].setting_first_ul2.Data[2].setting_first_content_text2.Data = "On";
//
//            }
//            if(pageData.operateData.curoadsitch==0)
//            {
//                pageData.settings_first_ul.Data[5].setting_first_ul2.Data[4].setting_first_content_text2.Data = "Off";
//            }
//            else{
//                pageData.settings_first_ul.Data[5].setting_first_ul2.Data[4].setting_first_content_text2.Data = "On";
//
//            }
            /**********************channel data start******************************/
            if(opData.channelListUpdateFlag == 0){
                PageDataFirstCls.settings_first_ul.Data[2].setting_first_ul2.Data[5].setting_first_content_text2.Data = "Off";
            }else{
                PageDataFirstCls.settings_first_ul.Data[2].setting_first_ul2.Data[5].setting_first_content_text2.Data = "On";

            }
	            PageDataFirstCls.settings_first_ul.Data[2].setting_first_ul2.Data[0].setting_first_content_text2.Data =opData.tunerModeMap[opData.currTunerModeIdx].name;
            /**********************channel data edn******************************/

        /**********************network data start******************************/
            if(opData.networkStatus == 0){
                PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[1].setting_first_content_text2.Data = "Disconnected";
            }else{
                PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[1].setting_first_content_text2.Data = "Connected";

            }
//            if(opData.currWakeUpByWifiFlag == 1){
//                PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[2].setting_first_content_text2.Data = "On";
//            }else{
//                PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[2].setting_first_content_text2.Data = "Off";
//            }
            if(opData.currDMRFlag == 1){
                PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[3].setting_first_content_text2.Data = "On";
            }else{
                PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[3].setting_first_content_text2.Data = "Off";
            }
            PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[4].setting_first_content_text2.Data = opData.currTVName + " ";
            /**********************network data edn******************************/
            pageData.settings_first_ul.SelectedIndex = pageData.operateData.curselect;
            if(pageData.settings_first_ul.Data[pageData.operateData.curselect].setting_first_ul2.Data.length>pageData.operateData.subselect)
            {
                pageData.settings_first_ul.Data[pageData.operateData.curselect].setting_first_ul2.SelectedIndex = pageData.operateData.subselect;

            }
            else
            {
                pageData.settings_first_ul.Data[pageData.operateData.curselect].setting_first_ul2.SelectedIndex = 0;

            }
        }catch (ex){
            debugPrint(ex.message,DebugLevel.ERROR);
        }
     }
};

function PageDataFirstClsInit() {
    try {
        debugG('PageDataFirstClsInit()');
        PageDataFirstClsPicItemInit();//Init Picture相关
        PageDataFirstClsSndItemInit();//Init Sound相关
    } catch (ex) {
        debugE(ex.message);
    }
}

function PageDataFirstClsPicItemInit(){
    try {
        debugG("PageDataFirstClsPicItemInit");
        //Init Picture相关
        PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data = [
            {
                "setting_first_content_text1": {Data: "Picture Mode"}, "setting_first_content_text2": {Data: "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": {Data: "Apply Picture Mode"}, "setting_first_content_text2": {Data: "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": {Data: "Brightness"}, "setting_first_content_text2": {Data: "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": {Data: "Contrast"}, "setting_first_content_text2": {Data: "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": {Data: "Colour Saturation"}, "setting_first_content_text2": {Data: "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": {Data: "Aspect Ratio"}, "setting_first_content_text2": {Data: "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": {Data: "Backlight"}
            },
            //{
            //    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": {Data: "3D"}
            //},
            {
                "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": {Data: "Advanced Picture Settings"}
            },
            {
                "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": {Data: "Restore Default Picture Settings"}
            }
        ];

        if (PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.SelectedIndex >= PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data.length) {
            DBG_INFO("PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.SelectedIndex overflow, set default 0!!!");
            PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.SelectedIndex = 0;
        }
        //暂时先不删除PicData里面的数据了
    } catch (ex) {
        debugE(ex.message);
    }
}

function PageDataFirstClsSndItemInit() {
    try {
        debugG("PageDataFirstClsSndItemInit");
        PageDataFirstCls.settings_first_ul.Data[1].setting_first_ul2.Data = [
            {
                "setting_first_content_text1": { "Data": "Sound Mode"}, "setting_first_content_text2": { "Data": "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": { "Data": "Apply Sound Mode"}, "setting_first_content_text2": { "Data": "33"}, "setting_first_content_text3": {Data: ""}
            },
            {
                "setting_first_content_text1": { "Data": ""}, "setting_first_content_text2": { "Data": ""}, "setting_first_content_text3": {Data: "Advanced Audio Settings"}
            },
            {
                "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Restore Default Audio Settings"}
            }
        ];
        if(PageDataFirstCls.settings_first_ul.Data[1].setting_first_ul2.SelectedIndex >= PageDataFirstCls.settings_first_ul.Data[1].setting_first_ul2.Data.length){
            debugG("PageDataFirstCls.settings_first_ul.Data[1].setting_first_ul2.SelectedIndex overflow, set default 0!!!");
            PageDataFirstCls.settings_first_ul.Data[1].setting_first_ul2.SelectedIndex = 0;
        }

    } catch (ex) {
        debugE(ex.message);
    }
}


function SettingMenuEscHandler() {
    try {
        debugPrint("in the col SettingMenuEscHandler");
        if (!!hiWebOsFrame.settingsFirst.origin) {
            //hiWebOsFrame.settingsFirst.origin.open();
            //hiWebOsFrame.settingsFirst.origin.hiFocus();
            hiWebOsFrame.lockAllKeys();
            debugPrint("destroy setting");
            closePagesOrModuleByPage(hiWebOsFrame.settingsysqS);
            debugE("close setting first");
            hiWebOsFrame.settingsFirst.close();
            settingOnDestroyCallback(hiWebOsFrame.settingsFirst.origin);
            hiWebOsFrame.unLockAllKeys();

        }
        else {
            debugE(" no origin page of the setting first");
            hiWebOsFrame.blankPage.open();
            hiWebOsFrame.blankPage.hiFocus();
            closePagesOrModuleByPage(hiWebOsFrame.settingsysqS);
            hiWebOsFrame.settingsFirst.close();

        }
    } catch (e) {
        debugE(e.message)
        hiWebOsFrame.unLockAllKeys();
    }
}
function SettingFirPageOnDestroy()
{
    hiWebOsFrame.settingsFirst=null;
    debugPrint("the first page destroy")
}
function SettingFirOpenhandler() {
    debugPrint("the first page open");
   if(PageDataFirstCls.operateData.applist.length==0)
    {
       $("#settings_first_ul_setting_first_ul2_sys4>li:nth-child(7)").css("display","none");
    }
    else
    {
        $("#settings_first_ul_setting_first_ul2_sys4>li:nth-child(7)").css("display","block");

    }
}
var onRecorderStatesChaged = function (state) {
    debugPrint("onRecorderStatesChaged" + state);
    if (state.length >= 2) {
        if (state[1] == 1||state[1] ==2||state[0] == 1||state[0] == 2) {
            PageDataFirstCls.operateData.sysdisableitem = [5];
            hiWebOsFrame.settingsFirst.rewriteDataOnly();
        }
        else {
            PageDataFirstCls.operateData.sysdisableitem = [];
            hiWebOsFrame.settingsFirst.rewriteDataOnly();
        }

    }
}

function SettingMenuDownHandler() {
    this.page.operateData.curselect = this.SelectedIndex;
    //this.page.rewrite();
}
function SettingMenuUpHandler() {
    this.page.operateData.curselect = this.SelectedIndex;
    //this.page.rewrite();
}
function SettingsubMenuDownHandler() {
    if(this.page.operateData.subselect!=this.SelectedIndex)
    {
        SettingSubMenuAddMarquee( this.page.operateData.curselect,this.SelectedIndex);
        SettingSubMenuDelMarquee( this.page.operateData.curselect,this.page.operateData.subselect);

    }
    this.page.operateData.subselect = this.SelectedIndex;
    //RefreshHelpInfo(this.page.operateData.curselect,this.page.operateData.subselect);

    // this.page.rewriteDataOnly();
}
function SettingSubMenuAddMarquee(parindex, subindex) {
    try {

        var htmlText=$("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text3_sys" + subindex).html()
        if(htmlText.length>41)
        {
            $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text3_sys" + subindex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
        var htmlText2=$("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text1_sys" + subindex).html()
        if(htmlText2.length>41)
        {
            $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text1_sys" + subindex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText2 + '</marquee>');
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingSubMenuDelMarquee(parindex, subindex) {
    try {
        var marquee = $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text3_sys" + subindex + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text3_sys" + subindex + " marquee").html();
            var marquee = $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text3_sys" + subindex).html(htmlText);
        }
        var marquee2 = $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text1_sys" + subindex + " marquee");
        if (marquee2.length > 0) {
            var htmlText2 = $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text1_sys" + subindex + " marquee").html();
            var marquee2 = $("#settings_first_ul_setting_first_ul2_sys"+parindex+"_setting_first_content_text1_sys" + subindex).html(htmlText2);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}
function SettingsubMenuUpHandler() {
    if(this.page.operateData.subselect!=this.SelectedIndex)
    {
        SettingSubMenuAddMarquee( this.page.operateData.curselect,this.SelectedIndex);
        SettingSubMenuDelMarquee( this.page.operateData.curselect,this.page.operateData.subselect);

    }
    this.page.operateData.subselect = this.SelectedIndex;
    //RefreshHelpInfo(this.page.operateData.curselect,this.page.operateData.subselect);
    // this.page.rewriteDataOnly();
}
function SettingTitleRightHandler()
{
    debugPrint("hhhhhhhhhhhhhhh"+this.SelectedIndex);
    this.page.operateData.subselect = this.SelectedIndex;
    SettingSubMenuAddMarquee( this.page.operateData.curselect,this.SelectedIndex);
    this.page.operateData.curfocus=1;
    //RefreshHelpInfo(this.page.operateData.curselect,this.page.operateData.subselect);

}
function SettingTitleLeftHandler()
{
    this.page.operateData.curfocus=0;
    SettingSubMenuDelMarquee( this.page.operateData.curselect,this.page.operateData.subselect);
    // SettingFirUpdateHelpinfo("");
}
function  RefreshHelpInfo(parentindex, subindex)
{
    try
    {
    switch (parentindex)
    {
        case 0:
        {
            SettingFirUpdateHelpinfo(PageDataFirstCls.operateData.Pichelplist[subindex].content);
            break;
        }
        case 1: //sound
        {
            SettingFirUpdateHelpinfo(PageDataFirstCls.operateData.sndhelplist[subindex].content);
            break;
        }
        case 2:
        {
            SettingFirUpdateHelpinfo(PageDataFirstCls.operateData.channelhelplist[subindex].content);
            break;
        }
        case 3:
        {
            SettingFirUpdateHelpinfo(PageDataFirstCls.operateData.networkhelplist[subindex].content);

            break;
        }
        case 4: //system
        {
           if(!!PageDateQuickSet.operateData.applist&&PageDateQuickSet.operateData.applist.length==0)
           {
               if(subindex==4||subindex==5||subindex==6)
               {
                   subindex=subindex+1;
               }
           }
           SettingFirUpdateHelpinfo(PageDataFirstCls.operateData.syshelplist[subindex].content);
           break;
        }
        case 5: //about tv
        {
            SettingFirUpdateHelpinfo(PageDataFirstCls.operateData.abouthelplist[subindex].content);
            break;
        }

    }
    }catch (e)
    {debugE(e.message)}
}
function SettingFirUpdateHelpinfo(content) {


}

function SettingMenuFirstEnHandler() {
    // this.page.operateData.subselect=this.SelectedIndex;
    //  alert(this.SelectedIndex);
    // alert(this.parent.SelectedIndex);
    try
    {
    switch (this.parent.SelectedIndex) {
        case 0://picture
            switch (this.SelectedIndex) {
                case 0:
                    hiWebOsFrame.createPage('setting_pic_mode', null, hiWebOsFrame.settingsFirst, null, function (SettingPicModePage) {
                        SettingPicModePage.open();
                        SettingPicModePage.hiFocus();
                        hiWebOsFrame.SettingPicModePage = SettingPicModePage;
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 1:
                    hiWebOsFrame.createPage('setting_pic_apply_mode_page', null, hiWebOsFrame.settingsFirst, null, function (SettingPicApplyMode) {

                        SettingPicApplyMode.open();
                        SettingPicApplyMode.hiFocus();
                        hiWebOsFrame.SettingPicApplyMode = SettingPicApplyMode;
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 2: //亮度
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
                        SettingPicBrtCtrColor.open();
                        SettingPicBrtCtrColor.hiFocus("setting_pic_brightness_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 3: //contronst
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
                        SettingPicBrtCtrColor.open();
                        SettingPicBrtCtrColor.hiFocus("setting_pic_contrast_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 4: //color
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
                        SettingPicBrtCtrColor.open();
                        SettingPicBrtCtrColor.hiFocus("setting_pic_color_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 5: //图像比例
                    hiWebOsFrame.createPage('setting_pic_aspect_ratio', null, hiWebOsFrame.settingsFirst, null, function (SettingPicSizePage) {
                        hiWebOsFrame.SettingPicSizePage = SettingPicSizePage;
                        SettingPicSizePage.open();
                        SettingPicSizePage.hiFocus();
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 6: //背光
                    hiWebOsFrame.createPage('setting_pic_backlight', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBackLight) {
                        hiWebOsFrame.SettingPicBackLight = SettingPicBackLight;
                        SettingPicBackLight.open();
                        SettingPicBackLight.hiFocus();
                        hiWebOsFrame.settingsFirst.close();
                    });

                    break;

                //case 7: //3D设置
                //    FirPageOpen3DPage();
                //    break;
                case 7: //高级设置
                    //                    hiWebOsFrame.settingsFirst.close();
                    hiWebOsFrame.createPage('setting_pic_advanced_page_new', null, hiWebOsFrame.settingsFirst, null, function (SettingPicAdvanced) {
                        hiWebOsFrame.settingsFirst.close();
                        hiWebOsFrame.SettingPicAdvanced = SettingPicAdvanced;
                        PicAdvancedRefreshFirstFocusId();
                        SettingPicAdvanced.open();
                        SettingPicAdvanced.hiFocus();
                    });
                    break;
                case 8: //出厂设置
                    hiWebOsFrame.createPage('setting_pic_reset', null, hiWebOsFrame.settingsFirst, null, function (SettingPicRestore) {
                        SettingPicRestore.open();
                        SettingPicRestore.hiFocus('setting_pic_RAS_btn_1');
                        hiWebOsFrame.SettingPicRestore = SettingPicRestore;
                        //                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                default :
                    debugE('firPage pic SelectedIndex err: ' + this.SelectedIndex);
                    break;
            }
            break;
        case 1://sound
            switch (this.SelectedIndex) {
                case 0: //SndMode
                    hiWebOsFrame.createPage('setting_snd_mode', null, hiWebOsFrame.settingsFirst, null, function (SettingSndModePage) {
                        debugG("sndMode page create");
                        hiWebOsFrame.SettingSndModePage = SettingSndModePage;
                        SettingSndModePage.open();
                        SettingSndModePage.hiFocus();
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 1: //apply snd mode
                    hiWebOsFrame.createPage('setting_snd_apply_mode',null,hiWebOsFrame.settingsFirst,null,function(SettingSndApplyModePage)
                    {
                        debugG("apply snd mode page open ");
                        hiWebOsFrame.SettingSndApplyModePage=SettingSndApplyModePage;
                        SettingSndApplyModePage.open();
                        SettingSndApplyModePage.hiFocus();
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 2:  //advanced
                            hiWebOsFrame.createPage('setting_snd_advanced_settings', null, hiWebOsFrame.settingsFirst, null, function (SettingSndAdvancedPage) {
                                debugG("snd Advanced page create");
                                hiWebOsFrame.SettingSndAdvancedPage = SettingSndAdvancedPage;
                                SettingSndAdvancedPage.open();
                                SndAdvancedRefreshScrollContentHeight();
                                SettingSndAdvancedPage.hiFocus();
                                hiWebOsFrame.settingsFirst.close();
                            });
                            break;
                case 3: //reset Audio
                            hiWebOsFrame.createPage('setting_snd_reset_audio_settings', null, hiWebOsFrame.settingsFirst, null, function (SettingSndResetAudio) {
                                debugG("ResetAudio page create");
                                hiWebOsFrame.SettingSndResetAudio = SettingSndResetAudio;
                                SettingSndResetAudio.open();
                                SettingSndResetAudio.hiFocus();
                            });
                            break;

                default :
                    debugE('firPage snd SelectedIndex err');
                    break;
            }
            break;
        case 2://channel
            switch (this.SelectedIndex) {
                case 0:
                    settingChSetCreateScanModeDialog();
                    break;
                case 1:
                    settingChSetCreateChannelScanPage();
                    break;
                case 2:
                    settingChSetCreateDTVManuSetPage();
                    break;
                case 3:
                    settingChSetCreateATVManuSetPage();
                    break;
                case 4://ChannelEdit 挪到此处
                    settingChSetCreateChannelEditPage();
                    break;
                case 5:
                    settingChSetCreateChListUpSwitchDialog();
                    break;
//                case 5: //EPG Mark
//                    settingChSetCreateEPGMarkPage();
//                    break;
                case CHL_PARENTCONTROL: //Parental Controls
                    settingChSetCreateParentalControls();
                    break;
                //case 7: // channelAdvanced
                //    settingChSetCreateAdvancePage();
                //    break;
                default :
                    break;
            }
            break;
        case 3://network
            switch (this.SelectedIndex) {
                case 0:
                    settingNetSetCreateNextPage();
                    break;
                case 1:
                    settingNetStatusDialogCreate();
                    break;
//                case 2:
//                    settingNetWakeUpByWiFiDialogCreate();
//                    break;
                case 2:
                    settingNetworkConnectTestCreate();
                    break;
                case 3:
                    settingNetDMRSwitchDialogCreate();
                    break;
                case 4:
                    settingNetTVNameListDialogCreate();
                    break;
                default :
                    break;
            }
            break;
        case 4://system
            switch (this.SelectedIndex) {
                case SYSTEM_LOCATION://location
                {

                    hiWebOsFrame.createPage('setting_sys_locaton_page', null, hiWebOsFrame.settingsFirst, null, function (lang2page) {
                        hiWebOsFrame.settingssyslist2 = lang2page;
                        hiWebOsFrame.settingssyslist2.open();
                        hiWebOsFrame.settingssyslist2.hiFocus();
                    });
                    break;
                }
                case SYSTEM_PIN://system PIN
                {
                    hiWebOsFrame.createPage('setting_sys_chgpwd2_page', null, hiWebOsFrame.settingsFirst, null, function (createpwd) {
                        hiWebOsFrame.settingsyschgpwd2 = createpwd;
                        PageDateSettingSysChgpwd2.operateData.curparent=1;
                        createpwd.close();
                        hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                            hiWebOsFrame.settingsysinput1 = autotime;
                            PageDateSettingSysinput1.operateData.curparent=3;
                            hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                            SettingSecPincheck();
                        });

                    });
                    break;
                }
                case SYSTEM_TIME://time
                {

                    hiWebOsFrame.createPage('setting_sys_time_page', null, hiWebOsFrame.settingsFirst, null, function (timepage) {
                        hiWebOsFrame.settingssystime = timepage;
                        hiWebOsFrame.createPage('setting_sys_autotime_page', null, hiWebOsFrame.settingssystime, null, function (autotime) {
                            hiWebOsFrame.settingssysautotime = autotime;
                            autotime.close();
                            hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                                hiWebOsFrame.settingsysinput1 = autotime;
                                PageDateSettingSysinput1.operateData.curparent=2;
                                hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                                SettingTimePinCheck();


                            });

                        });

                    });
                    break;
                }
                case SYSTEM_LANG://language
                {

                       hiWebOsFrame.createPage('setting_sys_lang1_page', null, hiWebOsFrame.settingsFirst, null, function (lang1page) {
                        hiWebOsFrame.settingslang1 = lang1page;
                        hiWebOsFrame.createPage('setting_sys_lang2_page', null, hiWebOsFrame.settingslang1, null, function (lang2page) {
                            hiWebOsFrame.settingslang2 = lang2page;
                            lang2page.close();
                           // SettingLangUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[0].content)
                            hiWebOsFrame.settingslang1.open();
                            hiWebOsFrame.settingslang1.hiFocus();
                        });

                    });
                    break;
                }
//                case SYS_SECURITY://security
//                {
//                    hiWebOsFrame.createPage('setting_sys_security_page', null, hiWebOsFrame.settingsFirst, null, function (security) {
//                        hiWebOsFrame.settingssyssecurity = security;
//                        hiWebOsFrame.createPage('setting_sys_chgpwd2_page', null, hiWebOsFrame.settingssyssecurity, null, function (createpwd) {
//                            hiWebOsFrame.settingsyschgpwd2 = createpwd;
//                            createpwd.close();
//                            hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingssyssecurity, null, function (autotime) {
//                                hiWebOsFrame.settingsysinput1 = autotime;
//                                PageDateSettingSysinput1.operateData.curparent=0;
//                                hiWebOsFrame.settingsysinput1.rewriteDataOnly()
//                                SettingSecPincheck();
////                                    hiWebOsFrame.settingssyssecurity.open();
////                                    hiWebOsFrame.settingssyssecurity.hiFocus();
//
//                            });
//
//                        });
//
//                    })
//
//                    break;
//                }
                case APP_SETTING://application setting
                {

                    hiWebOsFrame.createPage('setting_sys_appset_page', null, hiWebOsFrame.settingsFirst, null, function (list2) {
                    hiWebOsFrame.settingssysappset = list2;
                    hiWebOsFrame.settingssysappset.open();
                        if(!!PageDataFirstCls.operateData.applist)
                        {
                            var temp1=_getIndex(PageDataFirstCls.operateData.applist,"netflix");
                            if(temp1>=0)
                            {
                                $("#setting_sys_appset_netflix").css("display","block");

                            }
                            else
                            {
                                $("#setting_sys_appset_netflix").css("display","none");

                            }
                            var temp2=_getIndex(PageDataFirstCls.operateData.applist,"vudu");
                            if(temp2>=0)
                            {
                                $("#setting_sys_appset_vudu").css("display","block");

                            }
                            else
                            {
                                $("#setting_sys_appset_vudu").css("display","none");
                            }
                            if(temp1>=0)
                            {
                                hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn1");
                                var htmlText1 = $("#setting_sys_appset_btn1").html();
                                if (htmlText1.length >12) {
                                    $("#setting_sys_appset_btn1").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                }
                                var marquee = $("#setting_sys_appset_btn2" + " marquee");
                                if (marquee.length > 0) {
                                    var htmlText2 = $("#setting_sys_appset_btn2" + " marquee").html();
                                    var marquee = $("#setting_sys_appset_btn2" ).html(htmlText2);
                                }
                                //SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].title,PageDataSysAppSetting.operateData.helplist[0].content)

                            }
                            else if(temp2>=0)
                            {
                                hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn2");
                                var htmlText1 = $("#setting_sys_appset_btn2").html();
                                if (htmlText1.length >12) {
                                    $("#setting_sys_appset_btn2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                }
                                var marquee = $("#setting_sys_appset_btn1" + " marquee");
                                if (marquee.length > 0) {
                                    var htmlText2 = $("#setting_sys_appset_btn1" + " marquee").html();
                                    var marquee = $("#setting_sys_appset_btn1" ).html(htmlText2);
                                }
                                //SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[1].title,PageDataSysAppSetting.operateData.helplist[1].content)

                            }
                            else
                            {


                                hiWebOsFrame.settingssysappset.hiFocus();
                            }

                            PageDataSysAppSetting.operateData.applist=PageDataFirstCls.operateData.applist;

                        }
                        else{
                            hiWebOsFrame.settingssysappset.hiFocus();
                        }

                    });

                    break;
                }
                case CLOSED_CAPTION://closed caption
                {

                    hiWebOsFrame.createPage('setting_sys_cc_page', null, hiWebOsFrame.settingsFirst, null, function (ccpage) {
                        hiWebOsFrame.settingssyscc = ccpage;
                        hiWebOsFrame.settingsFirst.close();
                        hiWebOsFrame.settingssyscc.open();
                        hiWebOsFrame.settingssyscc.hiFocus("setting_sys_cc_ul1");
                        hiWebOsFrame.settingssyscc.rewriteDataOnly();

                    });
                    break;
                }
                case CEC_FUNCTION://cec function
                {
                    hiWebOsFrame.createPage('setting_sys_cec_page', null, hiWebOsFrame.settingsFirst, null, function (cecpage) {
                        hiWebOsFrame.settingssyscec = cecpage;
                        hiWebOsFrame.createPage('setting_sys_cecdev_page', null, hiWebOsFrame.settingssyscec, null, function (cecdev) {
                            hiWebOsFrame.settingssyscecdev = cecdev;
                            cecdev.close();
                          //  SettingSysCecUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[0].content);
                            hiWebOsFrame.settingssyscec.open();
                            hiWebOsFrame.settingssyscec.hiFocus();
                        });
                    });
                    break;
                }
                case ADVANCE_SETTING://advance setting
                {
//                    var servicenum=model.system.getServiceNo();
//                    var temp=servicenum.toLowerCase().indexOf("xt910");
//                    if(temp>=0)
//                    {
                        hiWebOsFrame.createPage('setting_sys_ad_page', null, hiWebOsFrame.settingsFirst, null, function (ad) {
                            hiWebOsFrame.settingssysad = ad;
                           // SettingSysadUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[0].content)
                            hiWebOsFrame.settingssysad.open();
                            hiWebOsFrame.settingssysad.hiFocus();

                        });
//                    }
//                    else
//                    {
//                    hiWebOsFrame.createPage('setting_sys_ad_page2', null, hiWebOsFrame.settingsFirst, null, function (ad) {
//                        hiWebOsFrame.settingssysad = ad;
//                        SettingFirUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[0].title,PageDataSettingSysAd.operateData.helplist[0].content)
//                        hiWebOsFrame.settingssysad.open();
//                        hiWebOsFrame.settingssysad.hiFocus();
//
//                    });
                  //  }
                    break;
                }
                default:
                    break;
            }
            break;

        case 5://about tv
            switch (this.SelectedIndex) {
                case SYSTEM_INFO://system info
                {
                    hiWebOsFrame.createPage('setting_about_ver_page', null, hiWebOsFrame.settingsFirst, null, function (update) {
                        hiWebOsFrame.settingsaboutver = update;
                        update.open();
                        update.hiFocus();

                    });
                    break;
                }
                case ABOUT_EULA://disclaimer
                {
                    hiWebOsFrame.createPage('setting_sys_dis_fir_page', null, hiWebOsFrame.settingsFirst, null, function (disclaimer) {
                        hiWebOsFrame.settingssysdisfir = disclaimer;
//                        disclaimer.data.operateData.currenheight = 0;
//                        disclaimer.rewriteDataOnly();
                        disclaimer.open();
                        disclaimer.hiFocus();

                    });
                    break;
                }
                case ABOUT_UPDATE://auto update switch
                {
//                    if( PageDataFirstCls.operateData.curlocation!="UK")
//                    {
                        hiWebOsFrame.createPage('setting_sys_update_page2', null, hiWebOsFrame.settingsFirst, null, function (name) {
                            hiWebOsFrame.settingssysupdate = name;
                          //  SettingSysUpdate2Helpinfo(PageDateSettingSysUpdate2.operateData.helplist[0].content);
                            hiWebOsFrame.settingssysupdate.open();
                            hiWebOsFrame.settingssysupdate.hiFocus();

                        });

//                    }else
//                    {
//                        hiWebOsFrame.createPage('setting_sys_update_page', null, hiWebOsFrame.settingsFirst, null, function (name) {
//                            hiWebOsFrame.settingssysupdate = name;
//                           // SettingSysUpdateHelpinfo(PageDateSettingSysUpdate.operateData.helplist[0].content);
//                            hiWebOsFrame.settingssysupdate.open();
//                            hiWebOsFrame.settingssysupdate.hiFocus();
//
//                        });
//
//                    }

                    break;
                }
//                case INTERNET_UPDATE://manual upgrade check
//                {
//
////                    hiWebOsFrame.createPage('setting_sys_update_page', null, null, null, function (update) {
////                        hiWebOsFrame.settingssysupdate = update;
//                        hiWebOsFrame.createPage('setting_update_fir_page', null, null, null, function (fir) {
//                            hiWebOsFrame.settingsupdatefir = fir;
//                            fir.close();
//                            hiWebOsFrame.createPage('setting_update_progressing_page', null, null, null, function (page) {
//                                hiWebOsFrame.settingsupdateprogress = page;
//                                page.close();
//                                PageDateSettingUpdateFir.operateData.curtype=0;
//                                PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=0;
//                                hiWebOsFrame.settingsupdatefir.open();
//                                hiWebOsFrame.settingsupdatefir.hiFocus();
//                                hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
//                                StartDetectVer(0);
//                                SetRecentUse("Check Firmware Upgrade",5,3);
//
//                            });
//                         //   hiWebOsFrame.settingssysupdate.open();
//                        //    hiWebOsFrame.settingssysupdate.hiFocus();
//                        });
//
////                    });
////
//                    break;
//                }
//                case OAD_SWITCH://auto oad upgrade
//                {
//                    hiWebOsFrame.createPage('setting_sys_update_switch_page', null, hiWebOsFrame.settingsFirst, null, function (name) {
//                        //
//                        hiWebOsFrame.settingssysupdateswitch = name;
//                        PageDataSettingUpdateSwitch.operateData.curpage=1;
//                        UpdateSwitchinit();
//                        hiWebOsFrame.settingssysupdateswitch.rewriteDataOnly();
//                        hiWebOsFrame.settingssysupdateswitch.open();
//                        hiWebOsFrame.settingssysupdateswitch.hiFocus();
//
//                    });
//                    break;
//                }
//                case OAD_UPDATE:
//                {
//                    hiWebOsFrame.createPage('setting_update_fir_page', null, null, null, function (fir) {
//                        hiWebOsFrame.settingsupdatefir = fir;
//                        fir.close();
//                        hiWebOsFrame.createPage('setting_update_progressing_page', null, null, null, function (page) {
//                            hiWebOsFrame.settingsupdateprogress = page;
//                            page.close();
//                            PageDateSettingUpdateFir.operateData.curtype=0;
//                            PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=0;
//                            hiWebOsFrame.settingsupdatefir.open();
//                            hiWebOsFrame.settingsupdatefir.hiFocus();
//                            hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
//                            StartDetectVer(1);
//                            SetRecentUse("Check OAD Upgrade",5,5);
//
//                        });
//                    });
//                    break;
//                    }
                case FACTORY_RESET://restore the factory setting
                {
                 try
                 {
                    hiWebOsFrame.createPage('setting_sys_nav_page', null, hiWebOsFrame.settingsFirst, null, function (nav) {
                        hiWebOsFrame.settingssysstartnav = nav;
                        nav.data.operateData.parentpage = 2;
                        nav.data.operateData.curdatatype = 2;
                        nav.rewriteDataOnly();
//                        nav.open();
//                        nav.hiFocus()
                        hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                            hiWebOsFrame.settingsysinput1 = autotime;
                            PageDateSettingSysinput1.operateData.curparent=1;
                            hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                            SettingrestorePincheck();
//                                    hiWebOsFrame.settingssyssecurity.open();
//                                    hiWebOsFrame.settingssyssecurity.hiFocus();

                        });


                    })
                 }catch (e)
                 {
                     debugPrint(e.message);
                 }
                    break;
                }
                case 7://reset all setting
                {
                    try
                    {
                        hiWebOsFrame.createPage('setting_sys_nav_page', null, hiWebOsFrame.settingsFirst, null, function (nav) {
                            hiWebOsFrame.settingssysstartnav = nav;
                            nav.data.operateData.parentpage = 3;
                            nav.data.operateData.curdatatype = 3;
                            nav.rewriteDataOnly();
//                        nav.open();
//                        nav.hiFocus()
                            hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                                hiWebOsFrame.settingsysinput1 = autotime;
                                PageDateSettingSysinput1.operateData.curparent=1;
                                hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                                SettingrestorePincheck();
//                                    hiWebOsFrame.settingssyssecurity.open();
//                                    hiWebOsFrame.settingssyssecurity.hiFocus();

                        });


                    })
                 }catch (e)
                 {
                     debugPrint(e.message);
                 }
                    break;
                }

            }
            break;
        default :
            break;

    }
    }catch (e)
    {debugE(e.message)}


}
/*******************************************************************
 name:settingChSetCreateScanModeDialog
 description:打开搜台模式设置页
 input:
 output:
 return
 *******************************************************************/
function settingChSetCreateScanModeDialog() {
    try {
        hiWebOsFrame.createPage('settingChSetScanTypeListDialogId',null, hiWebOsFrame.settingsFirst, null,function(a){
            hiWebOsFrame.ChSetScanTypeListDialog = a;
            hiWebOsFrame.popProtectPages(a);
            a.open();
            a.hiFocus();
            SetRecentUse("Tuner Mode", 2, 0);
        });
    } catch (ex) {
        debugPrint("settingChSetCreateScanModeDialog:" + ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetCreateChannelScanPage
 description:打开手动搜台页
 input:
 output:
 return
 *******************************************************************/
function settingChSetCreateChannelScanPage() {
    try{
        if(tv == true){
            var hasChannels = livetvchlist.hasChannels();
        }else{
            var hasChannels = true;
        }

        if(hasChannels){
            hiWebOsFrame.createPage('settingChSetClearChannelDialogId',null, hiWebOsFrame.settingsFirst, null,function(a){
                hiWebOsFrame.ChSetClearChannelDialog = a;
                SetRecentUse("Auto Scan", 2, 1);
                if(tv == true){
                    if(model.parentlock.getSModel() == 1){   //任何通道下parentlock打开并且tv通道加锁弹出密码框
                        debugPrint("settingChSetCreateChannelScanPage:need to input password!!",DebugLevel.ALWAYS);
                        hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null,  hiWebOsFrame.ChSetClearChannelDialog, null,function(a){
                            hiWebOsFrame.ChSetParLockInputDialog = a;
                            settingChSetSetCloseFirPageFlag(1);
                            a.open();
                            a.hiFocus();
                        });
                    }else{
                        debugPrint("settingChSetCreateChannelScanPage:not need to input password!!",DebugLevel.ALWAYS);
                        a.open();
                        a.hiFocus();
                    }
                }else{
//                debugPrint("settingChSetCreateChannelScanPage:not need to input password!!",DebugLevel.ALWAYS);
                    hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetClearChannelDialog, null,function(a){
                        hiWebOsFrame.ChSetParLockInputDialog = a;
                        a.open();
                        a.hiFocus();
                    });
//                hiWebOsFrame.settingsFirst.close();
//                a.open();
//                a.hiFocus();
//                SetRecentUse("Auto Channel Scan", 2, 1);
                }
            });
        }else{
            hiWebOsFrame.createPage('settingChSetAutoScanPageId',null, hiWebOsFrame.settingsFirst, null,function(a){
                hiWebOsFrame.ChSetChannelScanPage = a;
                SetRecentUse("Auto Scan", 2, 1);
                if(tv == true){
                    if(model.parentlock.getSModel() == 1){
                        debugPrint("settingChSetCreateChannelScanPage:need to input password!!",DebugLevel.ALWAYS);
                        hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null,  hiWebOsFrame.ChSetChannelScanPage, null,function(a){
                            hiWebOsFrame.ChSetParLockInputDialog = a;
                            settingChSetSetCloseFirPageFlag(1);
                            a.open();
                            a.hiFocus();
                        });
                    }else{
                        debugPrint("settingChSetCreateChannelScanPage:not need to input password!!",DebugLevel.ALWAYS);
                        hiWebOsFrame.settingsFirst.close();
                        a.open();
                        a.hiFocus();
                    }
                }else{
                    hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetChannelScanPage, null,function(a){
                        hiWebOsFrame.ChSetParLockInputDialog = a;
                        settingChSetSetCloseFirPageFlag(1);
                        a.open();
                        a.hiFocus();
                    });
                }
            });
        }

    }catch (ex){
        debugPrint("settingChSetCreateChannelScanPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetCreateDTVManuSetPage(){
    try{
        var data = PageDataFirstCls;
        try{
            debugPrint("settingChSetCreateDTVManuSetPage:"+data.operateData.currTunerModeIdx+","+model.channelSearch.getSource,DebugLevel.ALWAYS);
        }catch (ex){
            debugPrint("settingChSetCreateDTVManuSetPage:"+ex.message,DebugLevel.ERROR);
        }
        if(0 == data.operateData.currTunerModeIdx){
            var pageId = "settingChSetDTVTManuSetPageId"
        }else{
            var pageId = "settingChSetDTVCManuSetPageId"
        }
        hiWebOsFrame.createPage(pageId,null, null, null,function(a){
            hiWebOsFrame.ChSetDTVManuPage = a;
            SetRecentUse("DTV Manual Scan", 2, 2);
            if(tv == true){
                if(model.parentlock.getSModel() == 1){      //任何通道下parentlock打开并且tv通道加锁弹出密码框
                    debugPrint("settingChSetCreateDTVManuSetPage:need to input password!!",DebugLevel.ALWAYS);
                    hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetDTVManuPage, null,function(a){
                        hiWebOsFrame.ChSetParLockInputDialog = a;
                        settingChSetSetCloseFirPageFlag(1);
                        a.open();
                        a.hiFocus();
                    });
                }else{
                    debugPrint("settingChSetCreateDTVManuSetPage:not need to input password!!",DebugLevel.ALWAYS);
                    hiWebOsFrame.settingsFirst.close();
                    a.open();
                    a.hiFocus();
                    SetRecentUse("DTV Manual Scan", 2, 2);
                }
            }else{
//                hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, null, null,function(a){
//                    hiWebOsFrame.ChSetParLockInputDialog = a;
//                    a.open();
//                    a.hiFocus();
//                });
                hiWebOsFrame.settingsFirst.close();
                a.open();
                a.hiFocus();
                SetRecentUse("DTV Manual Scan", 2, 2);
            }
        });
    }catch (ex){
        debugPrint("settingChSetCreateDTVManuSetPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetCreateATVManuSetPage(){
    try{
        hiWebOsFrame.createPage('settingChSetATVManuSetPageId',null, null, null,function(a){
            hiWebOsFrame.ChSetATVManuSetPage = a;
            SetRecentUse("ATV Manual Scan", 2, 3);
            if(tv == true){
                if(model.parentlock.getSModel() == 1){      //任何通道下parentlock打开并且tv通道加锁弹出密码框
                    debugPrint("settingChSetCreateATVManuSetPage:need to input password!!",DebugLevel.ALWAYS);
                    hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetATVManuSetPage, null,function(a){
                        hiWebOsFrame.ChSetParLockInputDialog = a;
                        settingChSetSetCloseFirPageFlag(1);
                        a.open();
                        a.hiFocus();
                    });
                }else{
                    debugPrint("settingChSetCreateATVManuSetPage:not need to input password!!",DebugLevel.ALWAYS);
                    hiWebOsFrame.settingsFirst.close();
                    a.open();
                    a.hiFocus();
                    SetRecentUse("ATV Manual Scan", 2, 3);
                }
            }else{
//                hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, null, null,function(a){
//                    hiWebOsFrame.ChSetParLockInputDialog = a;
//                    a.open();
//                    a.hiFocus();
//                });
                hiWebOsFrame.settingsFirst.close();
                a.open();
                a.hiFocus();
                SetRecentUse("ATV Manual Scan", 2, 3);
            }
        });
    }catch (ex){
        debugPrint("settingChSetCreateATVManuSetPage:"+ex.message,DebugLevel.ERROR);
    }

}

function settingChSetCreateCIPage() {
    try {
        hiWebOsFrame.createPage('settingChSetEpgUpSwitchDialogId', null, null, null, function (a) {
            a.open();
            a.hiFocus();
            hiWebOsFrame.settingChSetEpgUpSwitchDialog = a;
        })
    } catch (ex) {
        debugPrint("settingChSetCreateCIPage:" + ex.message,DebugLevel.ERROR);
    }
}
function settingChSetCreateChannelEditPage(){
    try{
        hiWebOsFrame.settingsFirst.close();
        SetRecentUse("Channel Edit", 2, 4); //增加最近使用的设置
        openChannelManager();
    }catch (ex){
        debugPrint("settingChSetCreateChannelEditPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetCreateChListUpSwitchDialog(){
    try {
        hiWebOsFrame.createPage('settingChSetChListUpSwitchDialogId', null, null, null, function (a) {
            hiWebOsFrame.settingChSetChListUpSwitchDialog = a;
            SetRecentUse("Channel list auto-update", 2, 5);
            a.open();
            a.hiFocus();
        })
    } catch (ex) {
        debugPrint("settingChSetCreateChListUpSwitchDialog:" + ex.message,DebugLevel.INFO);
    }
}
function settingChSetCreateAdvancePage(){
    try {
        hiWebOsFrame.createPage('setting_chnl_advanced', null, hiWebOsFrame.settingsFirst, null, function (SettingChnlAdvancedPage) {
            debugG("ChnlAdvanced");
            hiWebOsFrame.SettingChnlAdvancedPage = SettingChnlAdvancedPage;
            //firstFocusId 在onOpen里指定了
            SettingChnlAdvancedPage.open();
            SettingChnlAdvancedPage.hiFocus();
            SettingChnlAdvancedPage.rewriteDataOnly();
        });
    } catch (ex) {
        debugE(ex.message);
    }
}
function settingChSetCreateParentalControls(){
    try {
        hiWebOsFrame.createPage('setting_sys_security_page', null, hiWebOsFrame.settingsFirst, null, function (security) {
            hiWebOsFrame.settingssyssecurity = security;
            hiWebOsFrame.createPage('setting_sys_chgpwd2_page', null, hiWebOsFrame.settingssyssecurity, null, function (createpwd) {
                hiWebOsFrame.settingsyschgpwd2 = createpwd;
                PageDateSettingSysChgpwd2.operateData.curparent=0;
                createpwd.close();
                hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingssyssecurity, null, function (autotime) {
                hiWebOsFrame.settingsysinput1 = autotime;
                PageDateSettingSysinput1.operateData.curparent=0;
                hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                SettingSecPincheck();
//                                    hiWebOsFrame.settingssyssecurity.open();
//                                    hiWebOsFrame.settingssyssecurity.hiFocus();
                });
            });
        })
    } catch (ex) {
        debugE(ex.message);
    }
}
function settingNetSetCreateNextPage() {
    try {
//        var disclaimerFlag = 0;
//        if(tv){
//            disclaimerFlag = model.basicSetting.getDisclaimer();
//            DBG_INFO("settingNetSetCreateNextPage:"+disclaimerFlag);
//            if(disclaimerFlag == 0){
//                model.network.setEnumNetworkConfig(1);
//            }
//        }
//        if(disclaimerFlag == 0){
//            hiWebOsFrame.createPage('settingNetSetMainPageId',null, null, null,function(a){
//                hiWebOsFrame.NetSetMainPage = a;
//                hiWebOsFrame.createPage('setting_sys_dis_fir_page', null, hiWebOsFrame.NetSetMainPage, null, function (disclaimer) {
//                    hiWebOsFrame.settingssysdisfir = disclaimer;
//                    disclaimer.open();
//                    disclaimer.hiFocus();
//                });
//            });
//        }else{
//            hiWebOsFrame.createPage('settingNetSetMainPageId',null, null, null,function(a){
//                hiWebOsFrame.NetSetMainPage = a;
//                a.hiFocus();
//                a.open();
//            });
//        }
        hiWebOsFrame.createPage('settingNetSetMainPageId',null, null, null,function(a){
            hiWebOsFrame.NetSetMainPage = a;
            $("#setting_fircls_page").css("visibility","visible");
            a.hiFocus();
            a.open();
        });
        SetRecentUse("Network Configuration", 3, 0);
    } catch (ex) {
        debugPrint("settingNetSetCreateNextPage:" + ex.message);
    }
}

function settingNetStatusDialogCreate() {
    try {
        hiWebOsFrame.createPage('settingNetStatusDialogId', null, null, null, function (a) {
            $("#setting_fircls_page").css("visibility","visible");
            a.open();
            a.hiFocus();
            hiWebOsFrame.settingNetStatusDialog = a;
            SetRecentUse("Network Information", 3, 1);
        })
    } catch (ex) {
        debugPrint("settingNetStatusDialogCreate:" + ex.message,DebugLevel.ERROR);
    }
}
function settingNetworkConnectTestCreate(){
    try {
        hiWebOsFrame.createPage('settingNetSetTestDialogId', null, null, null, function (a) {
            $("#setting_fircls_page").css("visibility","visible");
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetSetTestDialog = a;
            SetRecentUse("Connection Test", 3, 2);
        })
    } catch (ex) {
        debugPrint("settingNetworkConnectTestCreate:" + ex.message,DebugLevel.ERROR);
    }
}
function settingNetWakeUpByWiFiDialogCreate(){
    try {
        hiWebOsFrame.createPage('settingNetWakeUpByWifiDialogId', null, null, null, function (a) {
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetWakeUpByWifiDialog = a;
            SetRecentUse("Wake Up By Wi-Fi", 3, 2);
        })
    } catch (ex) {
        debugPrint("settingNetWakeUpByWiFiDialogCreate:" + ex.message,DebugLevel.ERROR);
    }
}
function settingNetDMRSwitchDialogCreate() {
    try {
        hiWebOsFrame.createPage('settingNetDMRDialogId', null, null, null, function (a) {
            $("#setting_fircls_page").css("visibility","visible");
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetDMRDialog = a;
            SetRecentUse("Anyview Stream", 3, 3);
        })
    } catch (ex) {
        debugPrint("settingNetDMRSwitchDialogCreate:" + ex.message,DebugLevel.ERROR);
    }
}
function settingNetTVNameListDialogCreate(){
    try {
        hiWebOsFrame.createPage('settingNetTVNameListDialogId', null, null, null, function (a) {
            $("#setting_fircls_page").css("visibility","visible");
            a.open();
            a.hiFocus();
            hiWebOsFrame.NetTVNameListDialog = a;
            SetRecentUse("TV Name", 3, 4);
        })
    } catch (ex) {
        debugPrint("settingNetTVNameListDialogCreate:" + ex.message,DebugLevel.ERROR);
    }
}
function SettingFirInit() {
    //Pic start
    if (!!tv) {
        try {
            var opData = PageDataFirstCls.operateData;
            SettingSndInit();
            SettingSndChaged();
            SettingPicInit();
            SettingPicChaged();


            settingFirChannelInit();
            settingFirNetworkInit();

            RefreshSomeFirPageDisableItem();
            model.system.FactoryResethandler = FactoryResethandler;

            var temp1 = getSettingCountryMapList();
            if (temp1.length > 0) {
                PageDataFirstCls.operateData.curcountrylist = [];
                PageDataFirstCls.operateData.countrycode = [];
                for (var i = 0; i < temp1.length; i++) {
                    PageDataFirstCls.operateData.curcountrylist.push(temp1[i].name);
                    PageDataFirstCls.operateData.countrycode.push(temp1[i].code);
                }
            }

            var temp = model.basicSetting.getTvsetLocation();
            var index = _getIndex(PageDataFirstCls.operateData.countrycode, temp);
            if (index > -1) {
                PageDataFirstCls.operateData.curlocation = PageDataFirstCls.operateData.curcountrylist[index];
            }
            else {
                debugPrint("the country index error");
                PageDataFirstCls.operateData.curlocation = PageDataFirstCls.operateData.curcountrylist[0];
                model.basicSetting.setTvsetLocation(PageDataFirstCls.operateData.countrycode[0]);
            }
            GetAppStatus();
            var i = _getIndex(PageDataFirstCls.operateData.settingdisablelist[5], 3);
            var hotelmode = tv ? model.hotel.getHotelMode() : true;
            if (checkIsAppOn() || hotelmode) {
                if (i < 0) {
                    PageDataFirstCls.operateData.settingdisablelist[5].push(3);
                }
            } else {
                if (i >= 0) {
                    PageDataFirstCls.operateData.settingdisablelist[5].splice(i, 1);
                }
            }

            debugPrint("the disable list " + JSON.stringify(PageDataFirstCls.operateData.settingdisablelist[5]))
            PageDataFirstCls.operateData.helptitle = "";
            PageDataFirstCls.operateData.helpcontent = "";
        } catch (e) {
            debugE(e.message);
        }

    } else {
        GetAppStatus();
    }


}

function SettingFirResetSelectIndex()
{
    var index=_getIndex(PageDataFirstCls.settings_first_ul.disableItem,PageDataFirstCls.settings_first_ul.SelectedIndex);
    DBG_ERROR("SettingFirResetSelectIndex()"+PageDataFirstCls.settings_first_ul.disableItem+PageDataFirstCls.settings_first_ul.SelectedIndex)

    if(index>=0)
    {
        PageDataFirstCls.operateData.curselect=0;
        PageDataFirstCls.settings_first_ul.SelectedIndex=0;
    }
    PageDataFirstCls.operateData.subselect=0;
    PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.SelectedIndex=0;
    PageDataFirstCls.settings_first_ul.Data[1].setting_first_ul2.SelectedIndex=0;
    PageDataFirstCls.settings_first_ul.Data[2].setting_first_ul2.SelectedIndex=0;
    PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.SelectedIndex=0;
    PageDataFirstCls.settings_first_ul.Data[4].setting_first_ul2.SelectedIndex=0;
    PageDataFirstCls.settings_first_ul.Data[5].setting_first_ul2.SelectedIndex=0;

}

function FactoryResethandler(actionId, convertedResult) {
    try
    {
        debugPrint("in the FactoryResethandler" + actionId);
       // debugPrint(' ' + JSON.stringify(convertedResult));
        hiWebOsFrame.endLoading();
        PageDateQuickSet.operateData.recentuse = defaultRecentUse;
        //startWizardFromSetting();
        Hisense.File.delete("hisenseUI/recentuse.txt", 1);
        startWizard(2);
        startHBBTV();  //sync @zhaotongqing
        livetvchlist.initChannelList();
        if(typeof (launcherSBar) != "undefined"){
            launcherSBar.setEmptyWeather();
        }
        livetvmain.setUnlockFlag(false);
    }catch(e)
    {
        debugPrint(e);
    }

}
function settingFirChannelInit(){
    try{
        var data = PageDataFirstCls;
        data.operateData.currTunerModeIdx = 0;
        if(tv == true){
            var currTunerMode = model.channelSearch.getSource();
            debugPrint("settingFirChannelInit:currTunerMode="+currTunerMode);
            for(var i = 0; i < data.operateData.tunerModeMap.length;i++){
                if(currTunerMode == data.operateData.tunerModeMap[i].map){
                    data.operateData.currTunerModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.tunerModeMap.length){
                debugPrint("settingFirChannelInit:"+currTunerMode,DebugLevel.ERROR);
                model.channelSearch.setSource(data.operateData.tunerModeMap[0].map);
            }
        }else{
            data.operateData.currTunerModeIdx = 1;
        }
        if(tv == false){
            data.operateData.channelListUpdateFlag = 0;
        }else{
            data.operateData.channelListUpdateFlag = model.servicelist.getChannellistUpdateAuto(); //need to change
        }
        settingFirDisableChannelItem();
    }catch(ex){
        debugPrint("settingFirChannelInit:"+ex.message,DebugLevel.ERROR);
    }
}
function settingFirDisableChannelItem() {
    var data = PageDataFirstCls;
    data.operateData.settingdisablelist[2] = [];
    var moduleOriginId = hiWebOsFrame.getModuleOrign(hiWebOsFrame.settingsFirst);
    debugPrint("settingFirChannelInit:ModuleOrigin page is" + moduleOriginId, DebugLevel.ALWAYS);
    try {
        var hotelMode = tv ? hotelModeSearchLock() : 0;//add for hotel mode 2015-03-12
        if (hiWebOsFrame.getPageByIdFromSdkPages(moduleOriginId).module == "app" || hotelMode) {
            if ($.inArray(0, data.operateData.settingdisablelist[2]) == -1) {
                data.operateData.settingdisablelist[2].push(0);
            }
            if ($.inArray(1, data.operateData.settingdisablelist[2]) == -1) {
                data.operateData.settingdisablelist[2].push(1);
            }
            if ($.inArray(2, data.operateData.settingdisablelist[2]) == -1) {
                data.operateData.settingdisablelist[2].push(2);
            }
            if($.inArray(3,data.operateData.settingdisablelist[2]) == -1){
                data.operateData.settingdisablelist[2].push(3);
            }
        }
        if (data.operateData.currTunerModeIdx == 1) {// cable下不支持DTV手动搜台
            if ($.inArray(2, data.operateData.settingdisablelist[2]) == -1) {
                data.operateData.settingdisablelist[2].push(2);
            }
        }
        InitChnlAdvSetMenuItem(); //更新ChannelAdvanced菜单是否可用 add by ghl
    } catch (ex) {
        debugPrint("settingFirChannelInit:" + ex.message, DebugLevel.ERROR);
        data.operateData.settingdisablelist[2] = [];
    }
    if (data.operateData.settingdisablelist[2].length > 0) {
        debugPrint("---COL--- settingFirDisableChannelItem" + data.operateData.settingdisablelist[2], DebugLevel.ALWAYS);
    }
}
function settingFirPageSetChannelCurrTunerMode(type){
    debugPrint("settingFirPageSetChannelCurrTunerMode:"+type);
    var data = PageDataFirstCls;
    data.operateData.currTunerModeIdx = type;
    settingFirDisableChannelItem();
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
}
function settingFirPageSetChListUpFlag(flag){
    var data = PageDataFirstCls;
    data.operateData.channelListUpdateFlag= flag;
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
}
function settingFirNetworkInit(){
    try{
        var data = PageDataFirstCls;
        if(tv == true){
            data.operateData.networkStatus = model.network.getEnumNetworkAvailable();
            debugPrint("settingFirNetworkInit:networkStatus="+data.operateData.networkStatus);
            data.operateData.currDMRFlag = model.network.getAnyviewstreamSwitch();
            debugPrint("settingFirNetworkInit:currDMRFlag="+data.operateData.currDMRFlag);
            data.operateData.currWakeUpByWifiFlag = model.network.getWifiWakeup();
            debugPrint("settingFirNetworkInit:currWakeUpByWifiFlag="+data.operateData.currWakeUpByWifiFlag);
            data.operateData.currTVName = model.system.getMachinename();
            debugPrint("settingFirNetworkInit:currTVName="+data.operateData.currTVName);
            if(!data.operateData.currTVName){
                data.operateData.currTVName = "Smart TV";
                model.system.setMachinename(data.operateData.currTVName);
            }
        }else{
            data.operateData.networkStatus = 0;
            data.operateData.currDMRFlag = 0;
            data.operateData.currWakeUpByWifiFlag = 0;
            data.operateData.currTVName = "Smart TV"
        }
    }catch (ex){
        debugPrint("settingFirNetworkInit:"+ex.message,DebugLevel.ERROR);
    }
}
function settingFirPageSetNetworkStatus(){
    var data = PageDataFirstCls;
    if(tv == true){
        data.operateData.networkStatus = model.network.getEnumNetworkAvailable();
        debugPrint("settingFirPageSetNetworkStatus:networkStatus="+data.operateData.networkStatus);
    }
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
}
function settingFirPageSetNetworkDMRSwitch(type){
    debugPrint("settingFirPageSetNetworkDMRSwitch:type="+type);
    var data = PageDataFirstCls;
    data.operateData.currDMRFlag = type;
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
}
function settingFirPageSetNetworkWakeUpSwitch(type){
    debugPrint("settingFirPageSetNetworkWakeUpSwitch:type="+type);
    var data = PageDataFirstCls;
    data.operateData.currWakeUpByWifiFlag = type;
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
}
function settingFirPageSetNetworkTVName(type){
    debugPrint("settingFirPageSetNetworkTVName:type="+type);
    var data = PageDataFirstCls;
    data.operateData.currTVName = type;
    hiWebOsFrame.settingsFirst.rewriteDataOnly();
}
//function CloseScreen()
//{
//    model.system.setEnumScreenState(0);
//    debugPrint("offthe srceen");
//    g_SystemAudioOnlyFlag=1;
//}

function GetAppStatus()
{
    //todo to get the app list
    try
    {
   PageDataFirstCls.operateData.applist=PageDateQuickSet.operateData.applist;//SettingGetApplist();//["vudu","netflix"];
   if(PageDataFirstCls.operateData.applist.length==0)
   {
        PageDataFirstCls.settings_first_ul.Data[4] = {
                   "setting_first_title_text1": { "Data": "System"}, "setting_first_title_img1": { "Data": "img/setting_fir_sys_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_sys_selsect.png"},
                   "setting_first_ul2": { "Data": [
//                       {
//                           "setting_first_content_text1": {Data: "Location"}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                       },
                       {
                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "System PIN"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       }
                       ,
                       {
                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Time"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       }
                       ,
                       {
                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Language"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       },
//                       ,
//                       {
//                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Audio Only"}
//                       }
                      // ,
//                       {
//                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Parental Controls"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                       },
                       {
                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Closed Caption"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       },
                       {
                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "HDMI & CEC Function"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       },
                       {
                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Advanced Settings"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       },
                       {
                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       }


                   ],
                       "SelectedIndex": 0,
                       "disableItem": []}

               };
        APP_SETTING=100;
        CLOSED_CAPTION=3;
        CEC_FUNCTION=4;
        ADVANCE_SETTING=5;
        debugE("the app list is empty !!!!!!!!!!!!!!!!!!");
        PageDataFirstCls.operateData.settingdisablelist[4]=[6];
       //to delete the "app setting" recentuse
   }
   else
   {
       PageDataFirstCls.settings_first_ul.Data[4] = {
       "setting_first_title_text1": { "Data": "System"}, "setting_first_title_img1": { "Data": "img/setting_fir_sys_unselsect.png"}, "setting_first_title_img2": {Data: "img/setting_fir_sys_selsect.png"},
       "setting_first_ul2": { "Data": [
//           {
//               "setting_first_content_text1": {Data: "Location"}, "setting_first_content_text2": {Data: "USA"}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//           },
           {
               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "System PIN"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           }
           ,
           {
               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Time"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           }
           ,
           {
               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Language"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           }
           ,
//           {
//               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Audio Only"}
//           }
//           ,
//           {
//               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Parental Controls"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//           }
//           ,
           {
               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Application Settings"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           }
           ,
           {
               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Closed Caption"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           },
           {
               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "HDMI & CEC Function"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           },
           {
               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Advanced Settings"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           }


       ],
           "SelectedIndex": 0,
           "disableItem": []}

   };
       APP_SETTING=3;
       CLOSED_CAPTION=4;
       CEC_FUNCTION=5;
       ADVANCE_SETTING=6;
       PageDataFirstCls.operateData.settingdisablelist[4]=[];
   }
    }catch (e)
    {
        debugPrint(e.message)
    }
}
function hotelModeSearchLock(){
  var hotelMode = model.hotel.getHotelMode();
    if(!!hotelMode){
        var searchLock = model.hotel.getSearchLock();
        if(!!searchLock){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false
    }
}