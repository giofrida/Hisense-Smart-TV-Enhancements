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
                ,
                {
                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Advanced Settings"}
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
                {
                    "setting_first_content_text1": {Data: "Location"}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                },
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
//                {
//                    "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Closed Caption"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                },
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
        "curmachineno":"HE55M7000UWTSG",
        "powIndflag":0,
        "ColPowerIndMachinelist":[],
        "EUPowerIndMachinelist":["HE75K700UXWTS3D","HE65M7000UWTSG","HE55M7000UWTSG","HE65K5500UWTS","HE65K5500UWTS(0001)","HE50K5502UWTS","HE55M5600UCWTS","HE55K5502UWTS","HE75K700UXWTS3D(1)","LTDN65XT910XWTSEU3D"],
        "EULightSetMachinelist":["HE65M7000UWTSG","HE55M7000UWTSG","HE50K5502UWTS","HE55M5600UCWTS","HE55K5502UWTS"],
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
                "content":"Adjust the Contrast level to increase or decrease how bright images appear."
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
            //    "content":"Disable TV speaker when you are using sound bar, ARC or any other external audio amplifier."
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
                "title":"Auto Scan",
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
                "content":"Manually edit the channel list order to your preference."
            },
            {
                "title":"Channel list auto-update",
                "content":"Allows your TV to auto-update the channel list from the content provider."
            },
            //{
            //    "title":"EPG Mark",
            //    "content":"Highlight your favorite programs with exclusive colour."
            //},
            {
                "title":"Parental Controls",
                "content":"Turn On Parental Controls to block children from being able to view certain programs."
            },
            {
                "title":"Advanced Settings",
                "content": FREEVIEWTEST ? "Review the Advanced Settings menu -Common interface -CI card and PIN -CAM Profile search." : "Review the Advanced Settings menu -Common interface -CI card and PIN -CAM Profile search"
            }
        ],
        "networkhelplist":[
            {
                "title":"Network Configuration",
                "content":"Set up the network to gain full access of Smart TV features."
            },
            {
                "title":"Network Information",
                "content":"Review the network connection information."
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
                "content":"Access the Advanced Settings menu."
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
                "content":"Set your TV to receive the latest firmware."
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
                {   //Headphone volume
                    "setting_first_content_text2": { "Data": "33_"}
                },
                {       //DBX
                    "setting_first_content_text2": { "Data": ""}
                },
//                {       //SAP
//                    "setting_first_content_text2": { "Data": "35_"}
//                },
                {       //Subwoofer
                    "setting_first_content_text2": { "Data": "35_"}
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
            picModeVec: isHDRSuport ? ["Standard", "Cinema", "PC/Game", "Dynamic", "HDR"]:["Standard", "Cinema day", "Cinema night", "PC/Game", "Dynamic"],
            picApplyModeVec: ["All Source", "Current Source"],
            picZoomModeVec: ["Automatic", "16:9", "4:3", "Panoramic", "Movie Zoom", "Direct"]
        },


        /*********************picture end*****************/

        /*********************channel start*****************/
        "channelListUpdateFlag":0,
        /*********************channel end*****************/
        /*********************Network start*****************/
        "networkStatus":0,
        "currDMRFlag":1,
        "currWakeUpByWifiFlag":1,
        "currTVName":"Smart TV"
        /*********************Network end*****************/
    },
    "langData": {
        "Setup": ["Setup", "", ""],
        "Picture":[""],
        "EULA":[],
        "Sound":["Sound","Son","Sonido"],
        "Channel":["Channel","Chaîne","Canal"],
        "Network":["Network","Réseau","Red"],
        "System":["System",""],
        "About":["About"],
        "Location":[],
        "Czech Republic":[],
        "System Update":[],
	   "Russia_EU":[],
        "Uzbekistan_EU":[],
        "Kirghizstan_EU":[],
        "Tajikistan_EU":[],
        "Set settings for apps on your TV.":[],
        "Configure how to control CEC-enabled devices with your TV remote.":[],
        "Adjust the default language settings for the TV.":[],
        "Set the current time based on your location.":[],
        "Choose the location from where you will watch your TV.":[],
        "Change your PIN that you use to access Parental Controls, Auto Channel Scan and Reset To Factory Default.":[],
        "UK":["UK","Vereinigtes Königreich","Regno Unito","Reino Unido","Reino Unido","RU","Storbritannia","Storbritannien","England","Iso-Britannia","Velká Británie","Veľká Británia","Wielka Brytania","Egyesült Királyság","Обединено кралство","Birleşik Krallık","BQ"],
        "Germany":["Germany","Deutschland","Germania","Alemanha","Alemania","Allemagne","Tyskland","Tyskland","Tyskland","Saksa","Němčina","Nemecko","Niemcy","Németország","Германия","Almanya","Germaniya"],
        "Italy":["Italy","Italien","Italia","Itália","Italia","Italie","Italia","Italien","Italien","Italia","Itálie","Taliansko","Włochy","Olaszország","Италия","İtalya","Italiya"],
        "Spain":["Spain","Spanien","Spagna","Espanha","España","Espagne","Spania","Spanien","Spanien","Espanja","Španělsko","Španielsko","Hiszpania","Spanyolország","Испания","İspanya","Ispaniya"],
        "Portugal":["Portugal","Portugal","Portogallo","Portugal","Portugal","Portugal","Portugal","Portugal","Portugal","Portugali","Portugalsko","Portugalsko","Portugalia","Portugália","Португалия","Portekiz","Portugaliya "],
        "Switzerland":["Switzerland","Schweiz","Svizzera","Suíça","Suiza","Suisse","Sveits","Schweiz","Schweiz","Sveitsi","Švýcarsko","Švajčiarsko","Szwajcaria","Svájc","Швейцария","İsviçre","Sveytsariya"],
        "Austria":["Austria","Österreich","Austria","Áustria","Austria","Autriche","Østerrike","Österrike","Østrig","Itävalta","Rakousko","Rakúsko","Austria","Ausztria","Австрия","Avusturya","Avstriya"],
        "Norway":["Norway","Norwegen","Norvegia","Noruega","Noruega","Norvège","Norge","Norge","Norge","Norja","Norsko","Nórsko","Norwegia","Norvégia","Норвегия","Norveç","Norvegiya"],
        "Sweden":["Sweden","Schweden","Svezia","Suécia","Suecia","Suède","Sverige","Sverige","Sverige","Ruotsi","Švédsko","Švédsko","Szwecja","Svédország","Швеция","İsveç","Svetsiya"],
        "Denmark":["Denmark","Dänemark","Danimarca","Dinamarca","Dinamarca","Danemark","Danmark","Danmark","Danmark","Tanska","Dánsko","Dánsko","Dania","Dánia","Дания","Danimarka","Daniya"],
        "Finland":["Finland","Finnland","Finlandia","Finlândia","Finlandia","Finlande","Finland","Finland","Finland","Suomi","Finsko","Fínsko","Finlandia","Finnország","Финландия","Finlandiya","Finlandiya"],
        "France":["France","Frankreich","Francia","França","Francia","France","Frankrike","Frankrike","Frankrig","Ranska","Francie","Francúzsko","Francja","Franciaország","Франция","Fransa","Fransiya"],
        "Turkey":["Turkey","Türkei","Turchia","Turquia","Turquía","Turquie","Tyrkia","Turkiet","Tyrkiet","Turkki","Turečtina","Turecko","Turcja","Törökország","Турция","Türkiye","Turkiya"],
        "Slovakia":["Slovakia","Slowakei","Slovacchia ","Eslováquia ","Eslovaquia","Slovaquie","Slovakia","Slovakien","Slovakiet","Slovakki","Slovensko","Slovensko","Słowacja","Szlovákia","Словакия","Slovakya","Slovakiya"],
        "Poland":["Poland","Polen","Polonia","Polónia","Polonia","Pologne","Polen","Polen","Polen","Puola","Polština","Poľština","Polska","Lengyelország","Полша","Polonya","Polsha"],
        "Hungary":["Hungary","Ungarn","Ungheria","Hungria ","Hungría","Hongrie","Ungarn","Ungern","Ungarn","Unkari","Maďarsko","Maďarsko","Węgry","Magyarország","Унгария","Macaristan","Vengriya"],
        "Bulgaria":["Bulgaria","Bulgarien","Bulgaria","Bulgária ","Bulgaria","Bulgarie","Bulgaria","Bulgarien","Bulgarien","Bulgaria","Bulharsko","Bulharsko","Bułgaria","Bulgária","България","Bulgaristan","Bolgariya"],
        "Egypt":["Egypt","Ägypten","Egitto","Egipto","Egipto","Egypte","Egypt","Egypten","Egypten","Egypti","Egypt","Egypt","Egipt","Egyiptom","Египет","Mısır","Misr"],
        "Algeria":["Algeria","Algerien","Algeria","Argélia","Argelia","Algérie","Algerie","Algeriet","Algeriet","Algeria","Alžírsko","Alžírsko","Algieria","Algéria","Алжир","Cezayir","Jazoir"],
        "Iran":["Iran","Iran","Iran","Irão","Irán","Iran","Iran","Iran","Iran","Iran","Írán","Irán","Iran","Irán","Иран","İran","Eron"],
        "Iraq":["Iraq","Irak","Iraq","Iraque","Irak","Iraq","Irak","Irak","Irak","Irak","Irák","Irak","Irak","Irak","Ирак","Irak","Iroq"],
        "Saudi Arabia":["Saudi Arabia","Saudi Arabien","Arabia Saudita","Arábia Saudita","Arabia Saudita","Arabie Saoudite","Saudi-Arabia","Saudiarabien","Saudi-Arabien","Saudi Arabia","Saúdská Arábie","Saudská Arábia","Arabia Saudyjska","Szaúd- Arábia","Саудитска Арабия","Suudi Arabistan","Saudiya Arabistoni"],
        "UAE":["UAE","VAE","EAU","Emiratos Arabés Unidos ","Emiratos Árabes Unidos","Émirats arabes unis","Forente arabiske emirater","Arabemiraterna","UAE","UEA","Spojené arabské emiráty","Spojené arabské emiráty","Zjednoczone Emiraty Arabskie","Egyesült Arab Emirátusok","ОАЕ","BAE","BAA"],
        "Kuwait":["Kuwait","Kuwait","Kuwait","Koweit","Kuwait","Kuwait","Kuwait","Kuwait","Kuwait","Kuwait","Kuvajt","Kuvajt","Kuwejt","Kuwait","Кувейт","Kuveyt","Quvayt"],
        "Yemen":["Yemen","Jemen","Yemen","Iémen","Yemen","Yemen","Jemen","Jemen","Yemen","Yemen","Jemen","Jemen","Jemen","Jemen","Йемен","Yemen","Yaman"],
        "Oman":["Oman","Oman","Oman","Omã","Omán","Oman","Oman","Oman","Oman","Oman","Omán","Omán","Oman","Omán","Оман","Umman","Ummon"],
        "Qatar":["Qatar","Katar","Qatar","Qatar","Qatar","Qatar","Qatar","Qatar","Qatar","Qatar","Katar","Katar","Katar","Qatar","Катар","Katar","Qatar"],
        "Jordan":["Jordan","Jordanien","Giordania","Jordânia","Jordania","Jordanie","Jordan","Jordanien","Jordan","Jordan","Jordánsko","Jordánsko","Jordania","Jordánia","Йордания","Ürdün","Iordaniya"],
        "Dubai":["Dubai","Dubai","Dubai","Dubai","Dubái","Dubai","Dubai","Dubai","Dubai","Dubai","Dubaj","Dubaj","Dubaj","Dubai","Дубай","Dubai","Dubay"],
        "Russia":["Russia","Russland","Russia","Rússia","Rusia","Russie","Russland","Ryssland","Rusland","Venäjä","Rusko","Rusko","Rosja","Oroszország","Русия","Rusya","Rossiya"],
        "Uzbekistan":["Uzbekistan","Usbekistan","Uzbekistan","Urzebequistão","Uzbequistán","Ouzbékistan","Usbekistan","Uzbekistan","Usbekistan","Uzbekistan","Uzbekistán","Uzbekistan","Uzbekistan","Üzbegisztán","Узбекистан","Özbekistan","O'zbekiston"],
        "Kirghizstan":["Kirghizstan","Kirgisien","Kirghizstan","Quirguistão","Kirguistán","Kirghizstan","Kirghizstan","Kirghizstan","Kirgisistan","Kirgisia","Kyrgyzstán","Kirgizsko","Kirgistan","Kirgizisztán","Киргизстан","Kırgızistan","Qirg'iziston"],
        "Turkmenistan":["Turkmenistan","Turkmenistan","Turkmenistan","Turquemenistão","Turkmenistán","Turkménistan","Turkmenistan","Turkmenistan","Turkmenistan","Turkmenistan","Turkmenistán","Turkménsko","Turkmenistan","Türkmenisztán","Туркменистан","Türkmenistan","Turkmaniston"],
        "Ukraine":["Ukraine","Ukraine","Ucraina","Ucrânia ","Ucrania","Ukraine","Ukraina","Ukraina","Ukraine","Ukraina","Ukrajina","Ukrajina","Ukraina","Ukrajna","Украйна","Ukrayna","Ukraina"],
        "Azerbaijan":["Azerbaijan","Aserbaidschan","Azerbaijan","Azerbaijão","Azerbaiyán","Azerbaïdjan","Aserbajdsjan","Azerbajdzjan","Aserbajdsjan","Azerbaidžan","Ázerbájdžán","Azerbajdžan","Azerbejdżan","Azerbajdzsán","Азербайджан","Azerbaycan","Ozorbayjon"],
        "Georgia":["Georgia","Georgien","Georgia","Geórgia","Georgia","Géorgie","Georgia","Georgia","Georgien","Georgia","Gruzie","Gruzínsko","Gruzja","Grúzia","Грузия","Gürcistan","Gruziya"],
        "Armenia":["Armenia","Armenien","Armenia","Arménia","Armenia","Arménie","Armenia","Armenia","Armenien","Armenia","Arménie","Arménsko","Armenia","Örményország","Армения","Ermenistan","Armaniston"],
        "Israel":["Israel","Israel","Israele","Israel","Israel","Israël","Israel","Israel ","Israel","Israel","Izrael","Izrael","Izrael","Izrael","Израел","İsrail","Isroil"],
        "India":["India","Indien","India","Índia","India","Inde","India","Indien","Indien","Intia","Indie","India","Indie","India","Индия","Hindistan","Hindiston"],
        "Indonesia":["Indonesia","Indonesien","Indonesia","Indonésia","Indonesia","Indonésie","Indonesia","Indonesien","Indonesien","Indonesia","Indonésie","Indonézia","Indonezja","Indonézia","Индонезия","Endonezya","Indoneziya"],
        "Thailand":["Thailand","Thailand","Tailandia","Tailândia","Tailandia","Thaïlande","Thailand","Thailand","Thailand","Thaimaa","Thajsko","Thajsko","Tajlandia","Thaiföld","Тайланд","Tayland","Tailand"],
        "Vietnam":["Vietnam","Vietnam","Vietnam","Vietname","Vietnam","Viêt-Nam","Vietnam","Vietnam","Vietnam","Vietnam","Vietnam","Vietnam","Wietnam","Vietnam","Виетнам","Vietnam","Viyetnam"],
        "Myanmar":["Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Mjanmarsko","Birma","Myanmar","Мианмар","Myanmar","Myanma"],
        "Malaysia":["Malaysia","Malaysia","Malesia","Malásia","Malasia","Malaisie","Malaysia","Malaysia","Malaysia","Malesia","Malajsie","Malajzia","Malezja","Malajzia","Малайзия","Malezya","Malayziya"],
        "Australia":["Australia","Australien","Australia","Austrália","Australia","Australie","Australia","Australien","Australien","Australia","Austrálie","Austrália","Australia","Ausztrália","Австралия","Avustralya","Avstraliya"],
        "Taiwan":["Taiwan","Taiwan","Taiwan","Taiwan","Taiwán","Taiwan","Taiwan","Taiwan","Taiwan","Taiwan","Taiwan","Taiwan","Tajwan","Taiwan","Тайван","Tayvan","Tayvan"],
        "Sri Lanka":["Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Srí Lanka","Srí Lanka","Sri Lanka","Sri Lanka","Шри Ланка","Sri Lanka","Shri Lanka"],
        "South Africa":["South Africa","Südafrika","Sudafrica","áfrica do Sul","Sudáfrica","Afrique du sud","Sør-Afrika","Sydafrika","Sydafrika","South Africa","Jižní Afrika","Južná Afrika","Republika Południowej Afryki","Dél-Afrika","ЮАР","Güney Afrika","Janubiy Afrika"],
        "Morocco":["Morocco","Marokko","Marocco","Marrocos","Marruecos","Maroc","Marokko","Marocko","Marokko","Marokko","Maroko","Maroko","Maroko","Marokkó","Мароко","Fas","Marokash"],
        "Nigeria":["Nigeria","Nigeria","Nigeria","Nigéria","Nigeria","Nigéria","Nigeria","Nigeria","Nigeria","Nigeria","Nigérie","Nigéria","Nigeria","Nigéria","Нигерия","Nijerya","Nigeriya"],
        "Libya":["Libya","Libyen","Libia","Líbia","Libia","Libye","Libya","Libyen","Libyen","Libya","Libye","Líbia","Libia","Líbia","Либия","Libya","Liviya"],
        "Ghana":["Ghana","Ghana","Gana","Gana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghána","Гана","Gana","Gana"],
        "Sierra Leone":["Sierra Leone","Sierra Leone","Sierra Leone","Serra Leõa","Sierra Leona","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Сиера Леоне","Sierra Leone","S'erra-Leone"],
        "Côte d'Ivoire":["Côte d'Ivoire","Elfenbeinküste","Costa d'Avorio","Costa do Marfim","Costa de Marfil","Côte d'Ivoire","Elfenbenskysten","Elfenbenskusten","Elfenbenskysten","Norsunluurannikko","Pobřeží slonoviny","Pobrežie Slonoviny","Wybrzeże Kości Słoniowej","Elefántcsontpart","Кот д'Ивоар","Fil Dişi Sahilleri","Kot-d'Ivuar "],
        "Angola":["Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Ангола","Angola","Angola"],
        "Benin":["Benin","Benin","Benin","Benin","Benin","Bénin","Benin","Benin","Benin","Benin","Benin","Benin","Benin","Benin","Бенин","Benin","Benin"],
        "Liberia":["Liberia","Liberia","Liberia","Libéria","Liberia","Libéria","Liberia","Liberia","Liberia","Liberia","Libérie","Libéria","Liberia","Libéria","Либерия","Liberya","Liberiya"],
        "Congo (DRC)":["Congo (DRC)","Kongo (DRK)","Congo (DRC)","República Democrata do Congo","Congo (RDC)","Congo (RDC)","Kongo (DRC)","Kongo (DRC)","Congo (DRC)","Kongo (DRC)","Kongo (DRC)","Kongo (DRC)","Demokratyczna Republika Konga","Kongó (DRC)","Конго (ДРК)","Kongo (DKC)","Kongo (KDR)"],
        "Cameroon":["Cameroon","Kamerun","Camerun","Camarões","Camerún","Cameroun","Kamerun","Kamerun","Cameroun","Kameron","Kamerun","Kamerun","Kamerun","Kamerun","Камерун","Kamerun","Kamerun"],
        "Zimbabwe":["Zimbabwe","Simbabwe","Zimbawe","Zimbabwe","Zimbabue","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Зимбабве","Zimbabve","Zimbabve"],
        "Congo-Brazzaville":["Congo-Brazzaville","Kongo-Brazzaville","Congo-Brazzaville","República do Congo","Congo-Brazzaville","Congo-Brazaville","Kongo-Brazzaville","Kongo-Brazzaville","Congo-Brazzaville","Kongon Tasavalta","Kongo-Brazzaville","Kongo-Brazzaville","Kongo-Brazzaville","Kongó-Brazzaville","Конго-Бразавил","Kongo-Brazzaville","Kongo-Brazzavil "],
        "Uganda":["Uganda","Uganda","Uganda","Uganda","Uganda","Ouganda","Uganda","Uganda","Uganda","Uganda","Uganda","Uganda","Uganda","Uganda","Уганда","Uganda","Uganda"],
        "Tanzania":["Tanzania","Tansania","Tanzania","Tanzânia","Tanzania","Tanzanie","Tanzania","Tanzania","Tanzania","Tansania","Tanzanie","Tanzánia","Tanzania","Tanzánia","Танзания","Tanzanya","Tanzaniya"],
        "Mauritius":["Mauritius","Mauritius","Mauritius","Mauritânia","Mauricio","Ile Maurice","Mauritius","Mauritius","Mauritius","Mauritius","Mauricius","Maurícius","Mauritius","Mauritius","Мавриций","Mauritius","Mavrikiy"],
        "Sudan":["Sudan","Sudan","Sudan","Sudão","Sudán","Soudan","Sudan","Sudan","Sudan","Sudan","Súdán","Sudán","Sudan","Szudán","Судан","Sudan","Sudan"],
        "Djibouti":["Djibouti","Dschibuti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Džibutsko","Džibutsko","Dżibuti","Dzsibuti","Джибути","Cibuti","Jibuti"],
        "Ethiopia":["Ethiopia","Äthiopien","Etiopia","Etiópia","Etiopía","Ethiopie","Etiopia","Etiopien","Etiopien","Etiopia","Etiopie","Etiópia","Etiopia","Etiópia","Етиопия","Etiyopya","Efiopiya"],
        "Kenya":["Kenya","Kenia","Kenya","Quénia","Kenia","Kenya","Kenya","Kenya","Kenya","Kenia","Keňa","Keňa","Kenia","Kenya","Кения","Kenya","Keniya"],
        "Mozambique":["Mozambique","Mosambik","Mozambico","Moçambique","Mozambique","Mozambique","Mosambik","Mocambique","Mozambique","Mosambik","Mosambik","Mozambik","Mozambik","Mozambik","Мозамбик","Mozambik","Mozambik"],
        "Madagascar":["Madagascar","Madagaskar","Madagascar","Madagascar","Madagascar","Madagascar","Madagaskar","Madagaskar","Madagaskar","Madagascar","Madagaskar","Madagaskar","Madagaskar","Madagaszkár","Мадагаскар","Madagaskar","Madagaskar"],
        "Philippines":["Philippines","Philippinen","Filippine","Filipinas","Filipinas","Phillipines","Filippinene","Filippinerna","Filippinerne","Filippiinit","Filipíny","Filipíny","Filipiny","Fülöp-szigetek","Филипини","Filipinler","Filippin"],
        "Argentina":["Argentina","Argentinien","Argentina","Argentina","Argentina","Argentine","Argentina","Argentina","Argentina","Argentiina","Argentina","Argentína","Argentyna","Argentína","Аржентина","Arjantin","Argentina"],
        "Brazil":["Brazil","Brasilien","Brasile","Brasil","Brasil","Brésil","Brasil","Brasilien","Brasilien","Brasilia","Brazílie","Brazília","Brazylia","Brazília","Бразилия","Brezilya","Braziliya"],
        "Panama":["Panama","Panama","Panama","Panamá","Panamá","Panama","Panama","Panama","Panama","Panama","Panama","Panama","Panama","Panama","Панама","Panama","Panama"],
        "Venezuela":["Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Wenezuela","Venezuela","Венесуела","Venezuela","Venesuela"],
        "Uruguay":["Uruguay","Uruguay","Uruguay","Uruguai","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguaj","Urugwaj","Uruguay","Уругвай","Uruguay","Urugvay"],
        "Peru":["Peru","Peru","Perù","Perú","Perú","Pérou","Peru","Peru","Peru","Peru","Peru","Peru","Peru","Peru","Перу","Peru","Peru"],
        "Ecuador":["Ecuador","Ecuador","Ecuador","Equador","Ecuador","Equateur","Ecuador","Ecuador","Ecuador","Ecuador","Ekvádor","Ekvádor","Ekwador","Ecuador","Еквадор","Ekvador","Ekvador"],
        "Colombia":["Colombia","Kolumbien","Colombia","Colómbia","Colombia","Colombie","Colombia","Colombia","Colombia","Kolumbia","Kolumbie","Kolumbia","Kolumbia","Kolumbia","Колумбия","Kolombiya","Kolumbiya"],
        "System PIN": [],
        "Time": ["Time",""],
        "Language":[],
        "Parental Controls": [],
        "Application Settings": [],
        "Closed Caption": [],
        "HDMI & CEC Function":[],
        "Advanced Settings": [],
        "Set your TV to receive the latest firmware.":[],
        "Review the Advanced Settings menu -Common interface -CI card and PIN -CAM Profile search":[],
        "Others":[],
        "Kazakhstan":[],
        "Maldives":[],
        "Fiji":[],
        "Pakistan":[],
        "Mongolia":[],
        "Nepal":[],
        "Cambodia":[],
        "Somalia":[],
        "Moldova":[],
        "Dominica":[],
        "Bahamas":[],
        "Paraguay":[],
        "Cuba":[],
        "Chile":[],
        "Costa Rica":[],
        "Bolivia":[],
        "System Update":[],
        "Tajikistan":[],
        "Guinea":[],
        "Bengal":[],
        "Belarus":[],
        "Bahrain":[],
        "Lebanon":[],
        "Burundi":[],
        "Senegal":[],
        "Tunisia":[],
        "Syria":[],
        "System Info": [],
        "Auto Firmware Upgrade": [],
        "Check Firmware Upgrade": [],
        "Disclaimer": [],
        "Restore To Factory Default": [],
        "USA":[],
        "Canada":[],
        "Mexico":[],
        "Auto OAD Upgrade":[],
        "Check OAD Upgrade":[],
        "Set the current time based on your location.":[],
        "Choose the location from where you will watch your TV.":[],
        "Adjust the default language settings for the TV.":[],
        "Turn On Parental Controls to block children from being able to view certain programs.":[],
        "Set settings for apps on your TV.":[],
        "HDMI & CEC Function ": [],
        "Configure how to control CEC-enabled devices with your TV remote.":[],
        "Access the Advanced Settings menu.":[],
        "On": ["On","Activé","Encendido"],
        "Off": ["Off","Désactivé","Apagado"],
        "Sound Mode":["Sound Mode"],
        "Standard": ["Standard"],
        "Music": ["Music"],
        "Theatre": ["Theatre"],
        "TV Speaker": [],
        "Speech": ["Speech"],
        "User": ["User"],
        "Late Night": [],
        "Volume Adjustment":["Volume Adjustment"],
        "Headphone Volume":["Headphone Volume"],
        "Lip-Sync":["Lip-Sync"],
        "Advanced Settings":["Advanced Settings"],
        "Sound Reset":["Sound Reset"],
        "Connected":["Connected"],
        "Disconnected":["Disconnected"],
        "Network Information":["Network Information"],
        "Network Configuration":["Network Configuration"],
        "Wake Up By Wi-Fi":["Wake Up By Wi-Fi"],
        "Connection Test":["Connection Test"],
        "Multimedia Sharing":["Multimedia Sharing"],
        "Anyview Stream":["Anyview Stream"],
        "TV Name":["TV Name"],
        "Set up the network to gain full access of Smart TV features.":["Set up the network to gain full access of Smart TV features."],
        "View information about your network connection.":["View information about your network connection."],
        "Review the network connection information.":["Review the network connection information."],
        "Test the network to see if connection is available or not.":["Test the network to see if connection is available or not."],
        "Share video, music or other content from another device on to your TV screen.":["Share video, music or other content from another device on to your TV screen."],
        "Choose a name for your TV. The name will be shown to devices that are available for sharing data.":["Choose a name for your TV. The name will be shown to devices that are available for sharing data."],

        "Auto Scan":["Auto Scan"],
        "DTV Manual Scan":["DTV Manual Scan"],
        "ATV Manual Scan":["ATV Manual Scan"],
        "Channel list auto-update":["Channel list auto-update"],
        "Channel Edit":["Channel Edit"],
        "EPG Mark":["EPG Mark"],
        "Automatically scan for channels to view programming from your TV source.":["Automatically scan for channels to view programming from your TV source."],
        "Manually scan for DTV channels to view programming from your TV source.":["Manually scan for DTV channels to view programming from your TV source."],
        "Manually scan for ATV channels to view programming from your TV source.":["Manually scan for ATV channels to view programming from your TV source."],
        "Manually edit the channel list order to your preference.":["Manually edit the channel list order to your preference."],
        "Allows your TV to auto-update the channel list from the content provider.":["Allows your TV to auto-update the channel list from the content provider."],
        "Highlight your favourite programs with exclusive colour.":["Highlight your favourite programs with exclusive colour."],
        "Review the Advanced Settings menu -Common interface -CI card and PIN -CAM Profile search":["Review the Advanced Settings menu -Common interface -CI card and PIN -CAM Profile search"],
        "Click to read the Disclaimer details":[],
        "Audio Enhancements":["Audio Enhancements"],
        "Advanced Audio Settings":["Advanced Audio Settings"],
        "Restore Default Audio Settings":["Restore Default Audio Settings"],
        "Set the sound effects to suit your preference.":["Set the sound effects to suit your preference."],

        "Dynamic": [],
        "Natural": [],
        "Sport": [],
        "Picture Mode": ["Picture Mode", "图像模式"],
        "Vivid": ["Vivid"],
        "Standard": ["Standard"],
        "Theatre": ["Theatre"],
        "Energy Saving": ["Energy Saving"],
        "Game": ["Game", "游戏"],
        "Sports":["Sports"],
        "Brightness": ["Brightness"],
        "Contrast":["Contrast"],
        "Colour":[],
        "Colour Saturation":[],
        "Colour Saturation":[],
        "Aspect Ratio":["Aspect Ratio"],
        "Normal":["Normal"],
        "Zoom":["Zoom"],
        "Wide":["Wide"],
        "Cinema":  ["Cinema"],
        "1:1 PIXEL MAP":["1:1 PIXEL MAP"],
        "Panoramic":["Panoramic"],
        "Direct":   ["Direct"],
        "Auto":   ["Auto"],
        "Backlight":["Backlight"],
        "Advanced Picture Settings":["Advanced Picture Settings"],
        "Restore Default Picture Settings":["Restore Default Picture Settings"],
        "PC/Game": [],
        "Cinema day": [],
        "Cinema night": [],
        "Automatic": [],
        "Movie Zoom": [],
        "Apply Sound Mode":[],
        "All Source": [],
        "Current Source": [],
        "Apply Picture Mode":[],

        "Select a preset picture mode to best suit the content you're viewing.": [],
        "Adjust current picture mode to apply to all sources or just current source.": [],
        "Adjust the Brightness level to generate lighter or darker images.": [],
        "Adjust the Contrast level to increase or decrease how bright images appear.": [],
        "Adjust the colour intensity of the picture for a more vibrant image.": [],
        "Adjust the Aspect Ratio to stretch or zoom in on your picture.": [],
        "Set the overall brightness of the screen.": [],
        "Adjust advanced picture settings based on your viewing preference.": [],
        "Restore all the picture settings in the current picture mode to the factory default values.": [],

        "Select a preset sound mode to suit the type of content you are listening to.": [],
        "Adjust current sound mode to apply to all source or just current source.": [],
        "Disable TV speaker when you are using sound bar, ARC or any other external audio amplifier.": [],
        "Tune the audio settings and quality of the TV.": [],
        "Restore all of the audio settings in current audio mode to the factory default values.": []

    },
    rewrite: function (pageData) {
        try{
           // pageData.setting_fir_helpinfo_title.Data=pageData.operateData.helptitle;
            pageData.setting_fir_helpinfo_content.Data=pageData.operateData.helpcontent;

//        Sound Data start-----------------------------

            try {   //Sound
                var sndUpdateItemLength =  3;
                debugG("sndUpdateItemLength");
                for (var i = 0; i < sndUpdateItemLength; i++) {
                    pageData.settings_first_ul.Data[1].setting_first_ul2.Data[i].setting_first_content_text2.Data = pageData.operateData.sndData.setting_first_ul2.Data[i].setting_first_content_text2.Data;
                    debugG("pageData.settings_first_ul.Data[1].setting_first_ul2.Data[" + i + "].setting_first_content_text2.Data: " + pageData.settings_first_ul.Data[1].setting_first_ul2.Data[i].setting_first_content_text2.Data);
                }
            } catch (ex) {
                debugE(ex.message);
            }

            try {   //Picture
                var picUpdateItemLength = 6;
                for (var i = 0; i < picUpdateItemLength; i++) {
                    pageData.settings_first_ul.Data[0].setting_first_ul2.Data[i].setting_first_content_text2.Data = pageData.operateData.picData.setting_first_ul2.Data[i].setting_first_content_text2.Data;
                    debugG("pageData.settings_first_ul.Data[0].setting_first_ul2.Data[" + i + "].setting_first_content_text2.Data: " + pageData.operateData.picData.setting_first_ul2.Data[i].setting_first_content_text2.Data);
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
            pageData.settings_first_ul.Data[4].setting_first_ul2.Data[0].setting_first_content_text2.Data = pageData.operateData.curlocation;

            var country=pageData.operateData.curlocation
            var index= country.indexOf("_EU");
            if(index>0)
            {

                country= country.replace("_EU","");
                pageData.settings_first_ul.Data[4].setting_first_ul2.Data[0].setting_first_content_text2.Data = country;

            }
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
                PageDataFirstCls.settings_first_ul.Data[2].setting_first_ul2.Data[4].setting_first_content_text2.Data = "Off";
            }else{
                PageDataFirstCls.settings_first_ul.Data[2].setting_first_ul2.Data[4].setting_first_content_text2.Data = "On";

            }
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
            PageDataFirstCls.settings_first_ul.Data[3].setting_first_ul2.Data[3].setting_first_content_text1.Data = OEMFunction.getConditionCheckResult(OEMFunction.OEMConditions.ANYVIEWSTREAM_NAME);
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
        if (!!initBrand  && initBrand != "his" && initBrand !=  "hisense") {
            PageDataFirstCls.operateData.abouthelplist[1].content = "Click to read the Disclaimer details";
        }
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
        //if (!!!PICTURE_3D_SURPPORT) {
        //    DBG_INFO("0 == PICTURE_3D_SURPPORT, delete 3D item menus");
        //    PageDataFirstCls.settings_first_ul.Data[0].setting_first_ul2.Data.splice(7,1);
        //    PageDataFirstCls.operateData.Pichelplist.splice(7,1);
        //}
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


function SettingMenuEscHandler()
{
    try
    {
        debugPrint("in the eu SettingMenuEscHandler");
        if(!!hiWebOsFrame.settingsFirst.origin)
        {
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
        else{
            debugE(" no origin page of the setting first");
            hiWebOsFrame.blankPage.open();
            hiWebOsFrame.blankPage.hiFocus();
            closePagesOrModuleByPage(hiWebOsFrame.settingsysqS);
            hiWebOsFrame.settingsFirst.close();
        }
    }catch(e)
    {
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
    if($("#settings_first_ul_setting_first_ul2_sys1_setting_first_content_text4_img_sys2").length > 0){
        //$("#settings_first_ul_setting_first_ul2_sys1_setting_first_content_text4_img_sys2").css("visibility","visible");
        debugG('eu folder');
    }
  //  setWizardSetFlag(0);
//    var state = model.hdr.getRecorderStates();
//    debugPrint("getRecorderStates"+state);
//    if(state.length>=2&&state[1]==1)
//    {
//      PageDataFirstCls.operateData.sysdisableitem=[5];
//    }
//    else{
//        PageDataFirstCls.operateData.sysdisableitem=[];
//    }
//    hiWebOsFrame.settingsFirst.rewriteDataOnly();
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
    RefreshHelpInfo(this.page.operateData.curselect,this.page.operateData.subselect);

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
    RefreshHelpInfo(this.page.operateData.curselect,this.page.operateData.subselect);
    // this.page.rewriteDataOnly();
}
function SettingTitleRightHandler()
{
    debugPrint("hhhhhhhhhhhhhhh"+this.SelectedIndex);
    this.page.operateData.subselect = this.SelectedIndex;
    SettingSubMenuAddMarquee( this.page.operateData.curselect,this.SelectedIndex);
    this.page.operateData.curfocus=1;
    RefreshHelpInfo(this.page.operateData.curselect,this.page.operateData.subselect);

}
function SettingTitleLeftHandler()
{
    this.page.operateData.curfocus=0;
    SettingSubMenuDelMarquee( this.page.operateData.curselect,this.page.operateData.subselect);
     SettingFirUpdateHelpinfo("");
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
function SettingFirUpdateHelpinfo(content)
{
    PageDataFirstCls.operateData.helpcontent=content;
//    PageDataFirstCls.operateData.helptitle=title;
    try {
//        if (title != "" && !!langPackages[title]) {
//            $("#setting_fir_helpinfo_title").html(langPackages[title][hiWebOsFrame.getCurrentLanguageIndex()]);
//        }
//        else {
//            $("#setting_fir_helpinfo_title").html(title);
//        }
        if (content != "" && !!langPackages[content]) {
            $("#setting_fir_helpinfo_content").html(langPackages[content][hiWebOsFrame.getCurrentLanguageIndex()]);
        }
        else {
            $("#setting_fir_helpinfo_content").html(content);
        }
    } catch (e) {
        debugE(e.message)
    }

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

                        var curMode = PageDataPicModeData.operateData.setting_pic_mode_cmp.DataSelectedIndex;
                        var helpInfoVec = PageDataPicModeData.operateData.helpInfoVec;
                        CreateSndHelpInfoPage(helpInfoVec[curMode].title, helpInfoVec[curMode].content, false);
                        var pos = sndHelpInfo.getPosZIndex('setting_pic_mode');
                        sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;
                case 1:
                    hiWebOsFrame.createPage('setting_pic_apply_mode_page', null, hiWebOsFrame.settingsFirst, null, function (SettingPicApplyMode) {

                        SettingPicApplyMode.open();
                        SettingPicApplyMode.hiFocus();
                        hiWebOsFrame.SettingPicApplyMode = SettingPicApplyMode;
                        hiWebOsFrame.settingsFirst.close();

                        //var helpInfo = PageDataSettingPicApplyMode.operateData.helpInfo;
                        //CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        //var pos = sndHelpInfo.getPosZIndex('setting_pic_apply_mode_page');
                        //sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        //hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;

                case 2: //亮度
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
                        SettingPicBrtCtrColor.open();
                        SettingPicBrtCtrColor.hiFocus("setting_pic_brightness_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();

                        //var helpInfo = PageDataBrtnesCtrstColorData.operateData.helpInfo.setting_pic_brightness;
                        //CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        //var pos = sndHelpInfo.getPosZIndex('setting_pic_brightness_contrast_color');
                        //sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        //hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;
                case 3: //contronst
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
                        SettingPicBrtCtrColor.open();
                        SettingPicBrtCtrColor.hiFocus("setting_pic_contrast_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();

                        //var helpInfo = PageDataBrtnesCtrstColorData.operateData.helpInfo.setting_pic_contrast;
                        //CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        //var pos = sndHelpInfo.getPosZIndex('setting_pic_brightness_contrast_color');
                        //sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        //hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;
                case 4: //color
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
                        SettingPicBrtCtrColor.open();
                        SettingPicBrtCtrColor.hiFocus("setting_pic_color_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();

                        //var helpInfo = PageDataBrtnesCtrstColorData.operateData.helpInfo.setting_pic_color;
                        //CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        //var pos = sndHelpInfo.getPosZIndex('setting_pic_brightness_contrast_color');
                        //sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        //hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;
                case 5: //图像比例
                    hiWebOsFrame.createPage('setting_pic_aspect_ratio', null, hiWebOsFrame.settingsFirst, null, function (SettingPicSizePage) {
                        hiWebOsFrame.SettingPicSizePage = SettingPicSizePage;
                        SettingPicSizePage.open();
                        SettingPicSizePage.hiFocus();
                        hiWebOsFrame.settingsFirst.close();

                        var curAspectRatio = PageDataPicAspectRatioData.operateData.setting_pic_aspect_ratio_cmp.DataSelectedIndex;
                        var helpInfoVec = PageDataPicAspectRatioData.operateData.helpInfoVec;
                        CreateSndHelpInfoPage(helpInfoVec[curAspectRatio].title, helpInfoVec[curAspectRatio].content, false);
                        var pos = sndHelpInfo.getPosZIndex('setting_pic_aspect_ratio');
                        sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;
                case 6: //背光
                    hiWebOsFrame.createPage('setting_pic_backlight', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBackLight) {
                        hiWebOsFrame.SettingPicBackLight = SettingPicBackLight;
                        SettingPicBackLight.open();
                        SettingPicBackLight.hiFocus();
                        hiWebOsFrame.settingsFirst.close();


                        var helpInfo = PageDataSettingPicBackLight.operateData.helpInfo[hiWebOsFrame.SettingPicBackLight.firstFocusId];
                        CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        var pos = sndHelpInfo.getPosZIndex('setting_pic_backlight');
                        sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        hiWebOsFrame[sndHelpInfo.id].open();
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

                        var helpInfo = PageDataPicAdvanced.operateData.helpInfo[hiWebOsFrame.SettingPicAdvanced.firstFocusId];
                        CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
                        sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;
                case 8: //出厂设置
                    hiWebOsFrame.createPage('setting_pic_reset', null, hiWebOsFrame.settingsFirst, null, function (SettingPicRestore) {
                        SettingPicRestore.open();
                        SettingPicRestore.hiFocus('setting_pic_RAS_btn_1');
                        hiWebOsFrame.SettingPicRestore = SettingPicRestore;
                        //                        hiWebOsFrame.settingsFirst.close();


                        //var helpInfo = PageDataSettingPicReset.operateData.helpInfo;
                        //CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        //var pos = sndHelpInfo.getPosZIndex('setting_pic_reset_body');
                        //sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        //hiWebOsFrame[sndHelpInfo.id].open();
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
                        var curMode = PageDataSettingSndMode.operateData.setting_snd_mode_cmp.DataSelectedIndex;
                        var helpInfoVec = PageDataSettingSndMode.operateData.helpInfoVec;//[hiWebOsFrame.SettingSndModePage.firstFocusId]
                        CreateSndHelpInfoPage(helpInfoVec[curMode].title, helpInfoVec[curMode].content, false);
                        var pos = sndHelpInfo.getPosZIndex('setting_snd_mode');
                        sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
                        hiWebOsFrame[sndHelpInfo.id].open();
                    });
                    break;
                case 1: // apply snd mode
                    hiWebOsFrame.createPage('setting_snd_apply_mode',null,hiWebOsFrame.settingsFirst,null,function(SettingSndApplyModePage)
                    {
                        debugG("apply snd mode page open ");
                        hiWebOsFrame.SettingSndApplyModePage=SettingSndApplyModePage;
                        SettingSndApplyModePage.open();
                        SettingSndApplyModePage.hiFocus();
                        hiWebOsFrame.settingsFirst.close();
                        //var helpInfo = PageDataSettingSndApplyMode.operateData.helpInfo;
                        //    CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                        //    var pos = sndHelpInfo.getPosZIndex('setting_snd_apply_mode');
                        //    sndHelpInfo.setHelpInfoPosZIndex(pos.top - 115, pos.left, pos.width, sndHelpInfo.defaultHeight-60, pos.zIndex + 1);
                        //    hiWebOsFrame[sndHelpInfo.id].open();
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

                                var helpInfo = SettingSndAdvancedPage.operateData.helpInfo[hiWebOsFrame.SettingSndAdvancedPage.firstFocusId];
                                CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
                                var pos = sndHelpInfo.getPosZIndex('setting_snd_advanced_settings');
                                sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight-20, pos.zIndex + 1);
                                hiWebOsFrame[sndHelpInfo.id].open();
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
                    settingChSetCreateChannelScanPage();
                    break;
                case 1:
                    settingChSetCreateDTVManuPage();
                    break;
                case 2:
                    settingChSetCreateATVManuSetPage();
                    break;
                case 3://ChannelEdit 挪到此处
                    settingChSetCreateChannelEditPage();
                    break;
                case 4:
                    settingChSetCreateChListUpSwitchDialog();
                    break;
                //case 5: //EPG Mark
                //    settingChSetCreateEPGMarkPage();
                //    break;
                case CHL_PARENTCONTROL: //Parental Controls
                    settingChSetCreateParentalControls();
                    break;
                case 6: // channelAdvanced
                    settingChSetCreateAdvancePage();
                    break;
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
                        SettingTimeUpdateHelpinfo(PageDataSettingSysTime.operateData.helplist[0].title, PageDataSettingSysTime.operateData.helplist[0].content)
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
                            SettingLangUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[0].content)
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
                                SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].content)
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
                                SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[1].content)
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

                                SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].content)

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
//                case CLOSED_CAPTION://closed caption
//                {
//
//                    hiWebOsFrame.createPage('setting_sys_cc_page', null, hiWebOsFrame.settingsFirst, null, function (cecdev) {
//                        hiWebOsFrame.settingssyscc = cecdev;
//                        hiWebOsFrame.settingsFirst.close();
//                        hiWebOsFrame.settingssyscc.open();
//                        hiWebOsFrame.settingssyscc.hiFocus();
//
//                    });
//                    break;
//                }
                case CEC_FUNCTION://cec function
                {
                    hiWebOsFrame.createPage('setting_sys_cec_page', null, hiWebOsFrame.settingsFirst, null, function (cecpage) {
                        hiWebOsFrame.settingssyscec = cecpage;
                        hiWebOsFrame.createPage('setting_sys_cecdev_page', null, hiWebOsFrame.settingssyscec, null, function (cecdev) {
                            hiWebOsFrame.settingssyscecdev = cecdev;
                            cecdev.close();
                            SettingSysCecUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[0].content);
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
                            SettingSysadUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[0].content)
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
                        SettingEULAUpdateHelpinfo(PageDateSettingSysDisfir.operateData.helplist[0].title,PageDateSettingSysDisfir.operateData.helplist[0].content);
                        SettingSysDisFirAddMarquee(0);
//                        disclaimer.data.operateData.currenheight = 0;
//                        disclaimer.rewriteDataOnly();
                        disclaimer.open();
                        disclaimer.hiFocus();

                    });
                    break;
                }
                case ABOUT_UPDATE://auto update switch
                {
                    if( PageDataFirstCls.operateData.curlocation!="UK")
                    {
                        hiWebOsFrame.createPage('setting_sys_update_page2', null, hiWebOsFrame.settingsFirst, null, function (name) {
                            hiWebOsFrame.settingssysupdate = name;
                            SettingSysUpdate2Helpinfo(PageDateSettingSysUpdate2.operateData.helplist[0].content);
                            hiWebOsFrame.settingssysupdate.open();
                            hiWebOsFrame.settingssysupdate.hiFocus();

                        });

                    }else
                    {
                        hiWebOsFrame.createPage('setting_sys_update_page', null, hiWebOsFrame.settingsFirst, null, function (name) {
                            hiWebOsFrame.settingssysupdate = name;
                            SettingSysUpdateHelpinfo(PageDateSettingSysUpdate.operateData.helplist[0].content);
                            hiWebOsFrame.settingssysupdate.open();
                            hiWebOsFrame.settingssysupdate.hiFocus();

                        });

                    }

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
        hiWebOsFrame.createPage('settingChSetScanTypeListDialogId',null, null, null,function(a){
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
            hiWebOsFrame.createPage('settingChSetEUAutoPageId',null, hiWebOsFrame.settingsFirst, null,function(a){
            hiWebOsFrame.ChSetDVBAutoPage = a;
            SetRecentUse("Auto Scan", 2, 0);
            if(tv == true){
                if(model.parentlock.getSModel() == 1){
                    debugPrint("settingChSetCreateChannelScanPage:need to input password!!",DebugLevel.ALWAYS);
                    hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null,  hiWebOsFrame.ChSetDVBAutoPage, null,function(a){
                        hiWebOsFrame.ChSetParLockInputDialog = a;
                            settingChSetSetCloseFirPageFlag(0);
                        a.open();
                        a.hiFocus();
                    });
                }else{
                    debugPrint("settingChSetCreateChannelScanPage:not need to input password!!",DebugLevel.ALWAYS);
//                        hiWebOsFrame.settingsFirst.close();
                    a.open();
                    a.hiFocus();
                }
            }else{
                hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetDVBAutoPage, null,function(a){
                    hiWebOsFrame.ChSetParLockInputDialog = a;
                        settingChSetSetCloseFirPageFlag(0);
                    a.open();
                    a.hiFocus();
                });
                }
            });
        }else{
            hiWebOsFrame.createPage('settingChSetTunerModePageId',null, hiWebOsFrame.settingsFirst, null,function(a){
                hiWebOsFrame.ChSetTunerModePage = a;
                SetRecentUse("Auto Scan", 2, 0);
                if(tv == true){
                    if(model.parentlock.getSModel() == 1){
                        debugPrint("settingChSetCreateChannelScanPage:need to input password!!",DebugLevel.ALWAYS);
                        hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null,  hiWebOsFrame.ChSetTunerModePage, null,function(a){
                            hiWebOsFrame.ChSetParLockInputDialog = a;
                            settingChSetSetCloseFirPageFlag(0);
                            a.open();
                            a.hiFocus();
                        });
                    }else{
                        debugPrint("settingChSetCreateChannelScanPage:not need to input password!!",DebugLevel.ALWAYS);
//                        hiWebOsFrame.settingsFirst.close();
                        a.open();
                        a.hiFocus();
            }
                }else{
                    hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetTunerModePage, null,function(a){
                        hiWebOsFrame.ChSetParLockInputDialog = a;
                        settingChSetSetCloseFirPageFlag(0);
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
function settingChSetCreateDTVManuPage(){
    try{
        var data = PageDataFirstCls;
        hiWebOsFrame.createPage("settingChSetDTVManuPageId",null, null, null,function(a){
            hiWebOsFrame.ChSetDTVManuPage = a;
            SetRecentUse("DTV Manual Scan", 2, 1);
            if(tv == true){
                if(model.parentlock.getSModel() == 1){
                    debugPrint("settingChSetCreateDTVManuPage:need to input password!!",DebugLevel.ALWAYS);
                    hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, hiWebOsFrame.ChSetDTVManuPage, null,function(a){
                        hiWebOsFrame.ChSetParLockInputDialog = a;
                        settingChSetSetCloseFirPageFlag(0);
                        a.open();
                        a.hiFocus();
                    });
                }else{
                    debugPrint("settingChSetCreateDTVManuPage:not need to input password!!",DebugLevel.ALWAYS);
                    a.open();
                    a.hiFocus();
                    SetRecentUse("DTV Manual Scan", 2, 1);
                }
            }else{
//                hiWebOsFrame.createPage('settingChSetParLockInputDialogId',null, null, null,function(a){
//                    hiWebOsFrame.ChSetParLockInputDialog = a;
//                    a.open();
//                    a.hiFocus();
//                });
//                hiWebOsFrame.settingsFirst.close();
                a.open();
                a.hiFocus();
                SetRecentUse("DTV Manual Scan", 2, 1);
            }
        });
    }catch (ex){
        debugPrint("settingChSetCreateDTVManuPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetCreateATVManuSetPage(){
    try{
        hiWebOsFrame.createPage('settingChSetATVManuSetPageId',null, null, null,function(a){
            hiWebOsFrame.ChSetATVManuSetPage = a;
            SetRecentUse("ATV Manual Scan", 2, 2);
            if(tv == true){
                if(model.parentlock.getSModel() == 1){
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
                    SetRecentUse("ATV Manual Scan", 2, 2);
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
                SetRecentUse("ATV Manual Scan", 2, 2);
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
        SetRecentUse("Channel Edit", 2, 3); //增加最近使用的设置
        openChannelManager(hiWebOsFrame.settingsFirst);
    }catch (ex){
        debugPrint("settingChSetCreateChannelEditPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetCreateChListUpSwitchDialog(){
    try {
        hiWebOsFrame.createPage('settingChSetChListUpSwitchDialogId', null, null, null, function (a) {
            hiWebOsFrame.settingChSetChListUpSwitchDialog = a;
            SetRecentUse("Channel list auto-update", 2, 4);
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
            SettingChlAdvObj.addMarquee();
        });
    } catch (ex) {
        debugE(ex.message);
    }
}

function settingChSetCreateEPGMarkPage(){
    try {
        hiWebOsFrame.createPage('setting_chnl_EPG_mark', null, hiWebOsFrame.settingsFirst, null, function (SettingChnlEPGMarkPage) {
            debugG("EPG mark page create");
            hiWebOsFrame.SettingChnlEPGMarkPage = SettingChnlEPGMarkPage;
            SettingChnlEPGMarkPage.open();
            SettingChnlEPGMarkPage.hiFocus();
            SettingChnlEPGMarkPage.rewriteDataOnly();
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
        try
        {
            var opData = PageDataFirstCls.operateData;
            SettingSndInit();
            SettingSndChaged();
            SettingPicInit();
            SettingPicChaged();
            settingFirChannelInit();
            settingFirNetworkInit();
            RefreshSomeFirPageDisableItem();
            model.system.FactoryResethandler = FactoryResethandler;
             var temp1=getSettingCountryMapList();
             if(temp1.length>0)
             {   PageDataFirstCls.operateData.curcountrylist=[];
                 PageDataFirstCls.operateData.countrycode=[];
                    for(var i=0;i<temp1.length;i++)
                    {
                        PageDataFirstCls.operateData.curcountrylist.push(temp1[i].name);
                        PageDataFirstCls.operateData.countrycode.push(temp1[i].code);
                    }
             }

            var temp=model.basicSetting.getTvsetLocation();
            var index=_getIndex(PageDataFirstCls.operateData.countrycode,temp);
            if(index>-1)
            {
                PageDataFirstCls.operateData.curlocation=PageDataFirstCls.operateData.curcountrylist[index];
            }
            else
            {
                debugPrint("the country index error");
                PageDataFirstCls.operateData.curlocation=PageDataFirstCls.operateData.curcountrylist[0];
                model.basicSetting.setTvsetLocation(PageDataFirstCls.operateData.countrycode[0]);
            }
            PageDataFirstCls.operateData.curmachineno=model.system.getServiceNo();
            debugPrint("get the tv num"+PageDataFirstCls.operateData.curmachineno);
            if(hiWebOsFrame.getCurrentArea()=="EU")
            {
                var index=_getIndex( PageDataFirstCls.operateData.EUPowerIndMachinelist,PageDataFirstCls.operateData.curmachineno.toUpperCase());
                if(index>=0)
                {
                    var index2=_getIndex( PageDataFirstCls.operateData.EULightSetMachinelist,PageDataFirstCls.operateData.curmachineno.toUpperCase());
                    if(index2>=0)
                    {
                        PageDataFirstCls.operateData.powIndflag=2;
                    }
                    else
                    {
                        PageDataFirstCls.operateData.powIndflag=1;
                    }

                }
                else
                {
                    PageDataFirstCls.operateData.powIndflag=0;
                }
            }
            else
            {
                var index=_getIndex( PageDataFirstCls.operateData.ColPowerIndMachinelist,PageDataFirstCls.operateData.curmachineno.toUpperCase());
                if(index>=0)
                {
                    PageDataFirstCls.operateData.powIndflag=1;
                }
                else
                {
                    PageDataFirstCls.operateData.powIndflag=0;

                }

            }
         GetAppStatus();
         var i= _getIndex(PageDataFirstCls.operateData.settingdisablelist[5],3);
            var hotelmode = tv ? model.hotel.getHotelMode() : true;

            if(checkIsAppOn()||hotelmode)
         {
            if(i<0)
            {
              PageDataFirstCls.operateData.settingdisablelist[5].push(3);
            }
         }
         else
         {
             if(i>=0)
             {
               PageDataFirstCls.operateData.settingdisablelist[5].splice(i,1);
             }
         }
         debugPrint("the disable list "+JSON.stringify(PageDataFirstCls.operateData.settingdisablelist[5]))
         PageDataFirstCls.operateData.helptitle="";
         PageDataFirstCls.operateData.helpcontent="";
        }catch (e)
        {
            debugE(e.message);
        }

    }
    else{
        GetAppStatus();
    }


}

function SettingFirResetSelectIndex()
{
    var index=_getIndex(PageDataFirstCls.settings_first_ul.disableItem,PageDataFirstCls.settings_first_ul.SelectedIndex);
    debugE("h*******************"+PageDataFirstCls.settings_first_ul.disableItem+PageDataFirstCls.settings_first_ul.SelectedIndex)

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
function settingFirDisableChannelItem(){
    var data = PageDataFirstCls;
    data.operateData.settingdisablelist[2]=[];
    var moduleOriginId = hiWebOsFrame.getModuleOrign(hiWebOsFrame.settingsFirst);
    debugPrint("settingFirChannelInit:ModuleOrigin page is"+moduleOriginId,DebugLevel.ALWAYS);
    try{
        var hotelMode = tv ? hotelModeSearchLock() : 0;//add for hotel mode 2015-03-12
        debugPrint("hiWebOsFrame.getPageByIdFromSdkPages(moduleOriginId).module"+hiWebOsFrame.getPageByIdFromSdkPages(moduleOriginId).module,DebugLevel.ALWAYS);
        debugPrint("deviceKeySet.HBBTVAPPON"+deviceKeySet.HBBTVAPPON,DebugLevel.ALWAYS);
        if(hiWebOsFrame.getPageByIdFromSdkPages(moduleOriginId).module == "app"||hotelMode ||deviceKeySet.HBBTVAPPON){ // hbbtv 的应用hiWebOsFrame.getPageByIdFromSdkPages(moduleOriginId).module是live tv,使用deviceKeySet.HBBTVAPPON判断是否起hbbtv 应用
            if($.inArray(0,data.operateData.settingdisablelist[2]) == -1){
                data.operateData.settingdisablelist[2].push(0);
            }
            if($.inArray(1,data.operateData.settingdisablelist[2]) == -1){
                data.operateData.settingdisablelist[2].push(1);
            }
            if($.inArray(2,data.operateData.settingdisablelist[2]) == -1){
                data.operateData.settingdisablelist[2].push(2);
            }
        }
        InitChnlAdvSetMenuItem(); //更新ChannelAdvanced菜单是否可用 add by ghl
    }catch (ex){
        debugPrint("settingFirChannelInit:"+ex.message,DebugLevel.ERROR);
        data.operateData.settingdisablelist[2]=[];
    }
    if(data.operateData.settingdisablelist[2].length > 0){
        debugPrint("---EU--- settingFirDisableChannelItem"+data.operateData.settingdisablelist[2],DebugLevel.ALWAYS);
    }
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
                       {
                           "setting_first_content_text1": {Data: "Location"}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
                       },
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
//                       ,
//                       {
//                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Audio Only"}
//                       }
                       ,
//                       {
//                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Parental Controls"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                       },
//                       {
//                           "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Closed Caption"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//                       },
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
        //CLOSED_CAPTION=4;
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
           {
               "setting_first_content_text1": {Data: "Location"}, "setting_first_content_text2": {Data: "USA"}, "setting_first_content_text3": { "Data": ""}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
           },
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
//           {
//               "setting_first_content_text1": {Data: ""}, "setting_first_content_text2": {Data: ""}, "setting_first_content_text3": { "Data": "Closed Caption"}, "setting_first_content_text4_img": {Data: ""},"setting_first_content_text4": {Data: ""}
//           },
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
       APP_SETTING=4;
       //CLOSED_CAPTION=5;
       CEC_FUNCTION=5;
       ADVANCE_SETTING=6;
       PageDataFirstCls.operateData.settingdisablelist[4]=[];
   }

//    if(FREEVIEWTEST){
//        PageDataFirstCls.operateData.syshelplist[6].content = "Access the Advanced Settings menu.";
//    }
//   else
//    {
//        PageDataFirstCls.operateData.syshelplist[6].content="Access the Advanced Settings menu.";
//
//    }

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