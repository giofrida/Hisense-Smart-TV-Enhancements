var HotelMenuData = {
    setting_OnSourceItem: {
        Data: [


            {
                "setting_OnSourceItem_span": {Data: ""}
            }
        ]

    },
    "PowerOnVolumeSlider": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0
        }  //显示的数值

    },
    "MinVolumeSlider": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0
        }  //显示的数值

    },
    "MaxVolumeSlider": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 100
        }  //显示的数值

    },
    setting_OnChannelItem: {
        Data: [
            {
                "setting_OnChannelItem_span": {Data: "Existing channels"}
            },
            {
                "setting_OnChannelItem_span": {Data: "Save"}
            }
        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0
    },
    setting_PowerOnModeItem: {
        Data: [
            {
                "setting_PowerOnModeItem_span": {Data: "Off"}
            },
            {
                "setting_PowerOnModeItem_span": {Data: "On"}
            },
            {
                "setting_PowerOnModeItem_span": {Data: "Save"}
            }

        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0
    },
    setting_LogoItem: {
        Data: [
            {
                "setting_LogoItem_span": {Data: "Off"}
            },
            {
                "setting_LogoItem_span": {Data: "Save"}
            },
            {
                "setting_LogoItem_span": {Data: "Welcome"}
            }

        ],
        "SelectedIndex": 1,
        "DataSelectedIndex": 1
    },
    "switch_hotelMode_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "switch_keyboardLock_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "switch_searchLock_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "switch_subMenuLock_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "switch_autoSleep_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "switch_userSetting_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "switch_hotelMode_span": {Data: "Hotel Mode"},
    "switch_keyboardLock_span": {Data: "Keyboard Lock"},
    "switch_searchLock_span": {Data: "Search Lock"},
    "switch_subMenuLock_span": {Data: "Submenu Lock"},
    "switch_autoSleep_span": {Data: "Auto Sleep"},
    switch_userSetting_span: {Data: "Save user settings"},
    MaxVolumespan: {Data: "Max Volume"},
    MinVolumespan: {Data: "Min Volume"},
    PowerOnVolumespan: {Data: "Power On Volume"},
    setting_btn_sourceLock_span: {Data: "Source Lock"},
    setting_btn_sourceLock_btn: {Data: "Adjust"},
    setting_OnSource_content: {Data: "On source"},
    setting_OnChannel_content: {Data: "On channel"},
    setting_PowerOnMode_content: {Data: "Power On Mode"},
    setting_Logo_content: {Data: "Logo"},
    setting_btn_clone_span: {Data: "Clone"},
    setting_btn_copy_btn: {Data: "Copy to USB"},
    setting_btn_recover_btn: {Data: "Restore via USB"},
    "operateData": {
        "switch_hotelMode_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "switch_keyboardLock_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "switch_searchLock_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "switch_subMenuLock_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "switch_autoSleep_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "switch_userSetting_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "OSSelectedIndex":0,
        "OSDataSelectedIndex": 0,
        "OCDataSelectedIndex": 0,
        "POMDataSelectedIndex": 0,
        "LGDataSelectedIndex": 0,
        "hotelMode":false,
        "keyboardLock":false,
        "limTop": 85,
        "limBtm": 611 - 60,

    },
    "langData": {
        "Hotel Mode":["Hotel Mode"],
        "Keyboard Lock":["Keyboard Lock"],
        "Search Lock":["Search Lock"],
        "Submenu Lock":["Submenu Lock"],
        "Auto Sleep":["Auto Sleep"],
        "Save user settings":["Save user settings"],
        "Max Volume":[ "Max volume:"],
        "Min Volume":["Min volume:"],
        "Power On Volume":["Power on volume:"],
        "Source Lock":["Source Lock"],
        "On source":["On source"],
        "On channel":["On channel"],
        "Power On Mode":["Power On Mode"],
        "Logo":["Logo"],
        "Clone":["Clone"],
        "Copy to USB":["Copy to USB"],
        "Restore via USB":["Restore via USB"],
        "Existing channels":[ "Existing channels"],
        "Adjust":["Adjust"],
        "Welcome ":["Welcome"],
        "Save":["Save"],
        "Off":["Off"],
        "Copy succeeded":["Copy succeeded"],
        "On":["On"]






    },
    rewrite: "HotelMenuRewrite"

}
function getHotelMenuData(page) {
    page.CaE = [

        {
            "id": "switch_hotelMode_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes": {"normal": "switch_hotelModespan"}
        },
        {
            "id": "switch_hotelMode_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "switch_keyboardLock_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setHotelModeFlipSwitch',//点击enter事件后处理开关转换
                "aftUpHandler": "refreshHotelModeScroll",
                "aftDownHandler":"refreshHotelModeScroll"
            }
        },
        {
            "id": "switch_keyboardLock_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "switch_keyboardLock_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "switch_searchLock_flipSwitch", "upTo": "switch_hotelMode_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setkeyboardLockFlipSwitch',//点击enter事件后处理开关转换
                "aftDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "befDownhandler":"refreshHotelModeScroll",
                "aftUphandler":"refreshHotelModeScroll"

            }
        },
        {
            "id": "switch_searchLock_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "switch_searchLock_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "switch_subMenuLock_flipSwitch", "upTo": "switch_keyboardLock_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setSearchLockFlipSwitch',
                "aftDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "befDownhandler":"refreshHotelModeScroll",
                "aftUphandler":"refreshHotelModeScroll"

            }
        },
        {
            "id": "switch_subMenuLock_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "switch_subMenuLock_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "switch_autoSleep_flipSwitch", "upTo": "switch_searchLock_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setSubMenuLockFlipSwitch',//点击enter事件后处理开关转换
                "aftDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "befDownhandler":"refreshHotelModeScroll",
                "aftUphandler":"refreshHotelModeScroll"
            }
        },
        {
            "id": "switch_autoSleep_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "switch_autoSleep_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "switch_userSetting_flipSwitch", "upTo": "switch_subMenuLock_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setAutoSleepFlipSwitch',//点击enter事件后处理开关转换
                //"befDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "aftUphandler":"refreshHotelModeScroll",
                //"aftDownHandler": "refreshHotelModeScroll"
            }
        },
        {
            "id": "switch_userSetting_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "switch_userSetting_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "MaxVolumeSlider", "upTo": "switch_autoSleep_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setUserSettingFlipSwitch',
                "befDownHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll"//点击enter事件后处理开关转换
            }
        },
        {
            "id": "MaxVolumeSlider",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "MaxVolumesliderimg",
            "nav": {"downTo": "MinVolumeSlider", "upTo": "switch_userSetting_flipSwitch"},
            "classes": {
                "normal": "sliderNormal", "focus": "sliderFocus", "disable": "sliderNormal", "selected": "sliderSelect"
            },
            "handler": {
                "aftRightHandler": "MaxVolumeSliderMoveRight",
                "aftLeftHandler": "MaxVolumeSliderMoveLeft",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "befDownHandler":"refreshHotelModeScroll"

            },
            "CaE": [
                {
                    "id": "MaxVolumesliderBar",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", disable: "defaultbarDisable"}
                },

                {
                    "id": "MaxVolumesliderimg",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "Setting_MaxVolume_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_pic_slider_img",
                        "focus": "setting_pic_slider_img_focus", disable: "setting_pic_slider_imgDisable"
                    }

                },
                {
                    "id": "MaxVolumecompleteBar",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", disable: "completedDisable"}
                },
                {
                    "id": "MaxVolumesliderSpan",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {"normal": "picModeValue", disable: "picModeValueDiable"}
                },
                {
                    "id": "MaxVolumesliderSpanMin",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {normal: "picModeValueMin", disable: "picModeValueMinDiable"}
                },
                {
                    "id": "MaxVolumesliderSpanMax",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {normal: "picModeValueMax", disable: "picModeValueMaxDiable"}
                }


            ],
            "SliderConfig": {

                "sliderbarId": "MaxVolumesliderBar",
                "sliderId": "MaxVolumesliderimg",
                "completeId": "MaxVolumecompleteBar",
                "sliderSpanId": "MaxVolumesliderSpan",
                "sliderMinValueId": "MaxVolumesliderSpanMin",
                "sliderMaxValueId": "MaxVolumesliderSpanMax"
            }

        },
        {
            "id": "MaxVolumespan",
            "description": "滑块字样",
            "CaEType": "div",
            "classes": {"normal": "picMode", disable: "picModeDisable"}
        },
        {
            "id": "MinVolumeSlider",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "MinVolumesliderimg",
            "nav": {"downTo": "PowerOnVolumeSlider", "upTo": "MaxVolumeSlider"},
            "classes": {
                "normal": "sliderNormal", "focus": "sliderFocus", "disable": "sliderNormal", "selected": "sliderSelect"
            },
            "handler": {
                "aftRightHandler": "MinVolumeSliderMoveRight",
                "aftLeftHandler": "MinVolumeSliderMoveLeft",
                "befDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "CaE": [
                {
                    "id": "MinVolumesliderBar",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", disable: "defaultbarDisable"}
                },

                {
                    "id": "MinVolumesliderimg",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "Setting_MinVolume_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_pic_slider_img",
                        "focus": "setting_pic_slider_img_focus", disable: "setting_pic_slider_imgDisable"
                    }

                },
                {
                    "id": "MinVolumecompleteBar",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", disable: "completedDisable"}
                },
                {
                    "id": "MinVolumesliderSpan",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {"normal": "picModeValue", disable: "picModeValueDiable"}
                },
                {
                    "id": "MinVolumesliderSpanMin",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {normal: "picModeValueMin", disable: "picModeValueMinDiable"}
                },
                {
                    "id": "MinVolumesliderSpanMax",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {normal: "picModeValueMax", disable: "picModeValueMaxDiable"}
                }


            ],
            "SliderConfig": {

                "sliderbarId": "MinVolumesliderBar",
                "sliderId": "MinVolumesliderimg",
                "completeId": "MinVolumecompleteBar",
                "sliderSpanId": "MinVolumesliderSpan",
                "sliderMinValueId": "MinVolumesliderSpanMin",
                "sliderMaxValueId": "MinVolumesliderSpanMax"
            }

        },
        {
            "id": "MinVolumespan",
            "description": "滑块字样",
            "CaEType": "div",
            "classes": {"normal": "picMode", disable: "picModeDisable"}
        },
        {
            "id": "PowerOnVolumeSlider",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "PowerOnVolumesliderimg",
            "nav": {"downTo": "setting_btn_sourceLock_btn", "upTo": "MinVolumeSlider"},
            "classes": {
                "normal": "sliderNormal", "focus": "sliderFocus", "disable": "sliderNormal", "selected": "sliderSelect"
            },
            "handler": {
                "aftRightHandler": "PowerOnSliderMoveRight",
                "aftLeftHandler": "PowerOnSliderMoveLeft",
                "befDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "CaE": [
                {
                    "id": "PowerOnVolumesliderBar",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", disable: "defaultbarDisable"}
                },

                {
                    "id": "PowerOnVolumesliderimg",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"}

                },
                {
                    "id": "Setting_PowerOnVolume_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_pic_slider_img",
                        "focus": "setting_pic_slider_img_focus", disable: "setting_pic_slider_imgDisable"
                    }

                },
                {
                    "id": "PowerOnVolumecompleteBar",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", disable: "completedDisable"}
                },
                {
                    "id": "PowerOnVolumesliderSpan",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {normal: "picModeValue", disable: "picModeValueDiable"}
                },
                {
                    "id": "PowerOnVolumesliderSpanMin",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {normal: "picModeValueMin", disable: "picModeValueMinDiable"}
                },
                {
                    "id": "PowerOnVolumesliderSpanMax",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {normal: "picModeValueMax", disable: "picModeValueMaxDiable"}
                }


            ],
            "SliderConfig": {
                "sliderbarId": "PowerOnVolumesliderBar",
                "sliderId": "PowerOnVolumesliderimg",
                "completeId": "PowerOnVolumecompleteBar",
                "sliderSpanId": "PowerOnVolumesliderSpan",
                "sliderMinValueId": "PowerOnVolumesliderSpanMin",
                "sliderMaxValueId": "PowerOnVolumesliderSpanMax"
            }

        },
        {
            "id": "PowerOnVolumespan",
            "description": "滑块字样",
            "CaEType": "div",
            "classes": {"normal": "picMode", disable: "picModeDisable"}
        },
        {
            "id": "setting_btn_sourceLock_span",
            "description": "名称",
            "CaEType": "div",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "setting_btn_sourceLock_btn",
            "description": "名称",
            "CaEType": "div",
            "classes": {
                "normal": "sourceLock_btn_list_normal", "focus": "sourceLock_btn_list_focus",
                "disable": "sourceLock_btn_list_disable", "selected": ""
            },
            "handler": {
                'aftEnterHandler': 'SourceLockOpenpage',
                "befDownHandler": "OnSourceChangeDownIndex",
                "befUpHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "nav": {"downTo": "setting_OnSourceItem", "upTo": "PowerOnVolumeSlider"}
        },
        {
            "id": "setting_OnSource_content",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {"normal": "setting_OnSourcespan", "disable": "setting_OnSourcespanDisable"}
        },
        {
            "id": "setting_pic_OnSource_right_arrow",
            "description": "zoom比例",
            "CaEType": "div"

        },
        {
            "id": "setting_OnSource_left_arrow",
            "description": "zoom比例",
            "CaEType": "div"

        },
        {
            "id": "setting_OnSourceItem",
            "description": "当前的比例",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_OnSourceItem_li_normal",
                "focus": "setting_OnSourceItem_li_focus",
                "disable": "setting_OnSourceItem_li_disable",
                "selected": "setting_OnSourceItem_li_selected",
                "dataSelected": "setting_OnSourceItem_li_selected",
                "disableDataSelected": "setting_OnSourceItem_li_selectedDisable"
            },
            "onFocusFun": "HotelSourceAddMarquee",
            "onBlurFun": "HotelSourceRemMarquee",
            "handler": {
                "aftEnterHandler": "OnSourceItemSpan", "aftRightHandler": "",
                "aftLeftHandler": "",
                "befUpHandler": "",
                "befUpHandler":"OnSourceItemaftUpHandler",
                "befDownHandler": "OnSourceItemaftDownHandler",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "nav": {"downTo": "setting_OnChannelItem", "upTo": "setting_btn_sourceLock_btn"},
            "oriCaE": [
                {
                    "id": "setting_OnSourceItem_span",
                    "description": "代表3D模式的span",
                    "CaEType": "span",
                    "strFilter":true

                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["setting_OnSourceItem_span"],
                "SelectedIndex": 0,
                "PageSize": 4,
                "ArrowFlag": true
            }

        },
        {
            "id": "setting_OnChannel_content",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {"normal": "setting_OnSourcespan", "disable": "setting_OnSourcespanDisable"}
        },
        {
            "id": "setting_OnChannelItem",
            "description": "当前的比例",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_OnSourceItem_li_normal",
                "focus": "setting_OnSourceItem_li_focus",
                "disable": "setting_OnSourceItem_li_disable",
                "selected": "setting_OnSourceItem_li_selected",
                "dataSelected": "setting_OnSourceItem_li_selected",
                "disableDataSelected": "setting_OnSourceItem_li_selectedDisable"
            },
            "handler": {
                "aftEnterHandler": "OnChannelItemSpan", "aftRightHandler": "", "aftLeftHandler": "",
                "befUpHandler": "OnSourceChangeIndex",
                "befDownHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "nav": {"downTo": "setting_PowerOnModeItem", "upTo": "setting_OnSourceItem"},
            "oriCaE": [
                {
                    "id": "setting_OnChannelItem_span",
                    "description": "代表3D模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["setting_OnChannelItem_span"],
                "SelectedIndex": 0,
                "PageSize": 2
            }

        },
        {
            "id": "setting_PowerOnMode_content",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {"normal": "setting_OnSourcespan", "disable": "setting_OnSourcespanDisable"}
        },
        {
            "id": "setting_PowerOnModeItem",
            "description": "当前的比例",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_OnSourceItem_li_normal",
                "focus": "setting_OnSourceItem_li_focus",
                "disable": "setting_OnSourceItem_li_disable",
                "selected": "setting_OnSourceItem_li_selected",
                "dataSelected": "setting_OnSourceItem_li_selected",
                "disableDataSelected": "setting_OnSourceItem_li_selectedDisable"
            },
            "handler": {
                "aftEnterHandler": "PowerOnModeItemSpan", "aftRightHandler": "",
                "aftLeftHandler": "",
                "befDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "nav": {"downTo": "setting_LogoItem", "upTo": "setting_OnChannelItem"},
            "oriCaE": [
                {
                    "id": "setting_PowerOnModeItem_span",
                    "description": "代表3D模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["setting_PowerOnModeItem_span"],
                "SelectedIndex": 0,
                "PageSize": 4
            }

        },
        {
            "id": "setting_Logo_content",
            "description": "zoom比例",
            "CaEType": "span",
            "classes": {"normal": "setting_OnSourcespan", "disable": "setting_OnSourcespanDisable"}
        },
        {
            "id": "setting_LogoItem",
            "description": "当前的比例",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_OnSourceItem_li_normal",
                "focus": "setting_OnSourceItem_li_focus",
                "disable": "setting_OnSourceItem_li_disable",
                "selected": "setting_OnSourceItem_li_selected",
                "dataSelected": "setting_OnSourceItem_li_selected",
                "disableDataSelected": "setting_OnSourceItem_li_selectedDisable"
            },
            "handler": {
                "aftEnterHandler": "LogoItemSpan", "aftRightHandler": "",
                "aftLeftHandler": "",
                "befDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"

            },
            "nav": {"downTo": "setting_btn_copy_btn", "upTo": "setting_PowerOnModeItem"},
            "oriCaE": [
                {
                    "id": "setting_LogoItem_span",
                    "description": "代表3D模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["setting_LogoItem_span"],
                "SelectedIndex": 0,
                "PageSize": 4
            }

        },
        {
            "id": "setting_btn_clone_span",
            "description": "名称",
            "CaEType": "div",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "setting_btn_copy_btn",
            "description": "名称",
            "CaEType": "div",
            "classes": {
                "normal": "sourceLock_btn_list_normal", "focus": "sourceLock_btn_list_focus",
                "disable": "sourceLock_btn_list_disable", "selected": ""
            },
            "onFocusFun": "HotelIndexAddMarquee",
            "onBlurFun": "HotelIndexDelMarquee",
            "handler": {
                'aftEnterHandler': 'HotelCopyToUsb',
                'befRightHandler':"",
                "befDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "nav": {
                "downTo": "", "upTo": "setting_LogoItem",
                "leftTo": "", "rightTo": "setting_btn_recover_btn"
            }
        },
        {
            "id": "setting_btn_recover_btn",
            "description": "名称",
            "CaEType": "div",
            "classes": {
                "normal": "sourceLock_btn_list_normal", "focus": "sourceLock_btn_list_focus",
                "disable": "sourceLock_btn_list_disable", "selected": ""
            },
            "onFocusFun": "HotelIndexRecoveDelMarquee",
            "onBlurFun": "HotelIndexAddRecoveMarquee",
            "handler": {
                'aftEnterHandler': 'HotelCopyToUsb',  //点击enter事件后处理开关转换,
                "befDownHandler": "refreshHotelModeScroll",
                "befUpHandler": "refreshHotelModeScroll",
                "aftDownHandler": "refreshHotelModeScroll",
                "aftUpHandler": "refreshHotelModeScroll"
            },
            "nav": {
                "downTo": "", "upTo": "setting_LogoItem",
                "leftTo": "setting_btn_copy_btn", "rightTo": ""
            }
        }


    ];
    try {
        hotelDataInit();
    }
    catch(ex) {
        debugPrint("--->ex:" + ex);
    }
    return HotelMenuData;
}
function hotelDataInit() {
    try {
        if(!!tv) {
            var hotelMode = model.hotel.getHotelMode();
            DBG_INFO("--->hotelMode:" + hotelMode);
            HotelMenuData.operateData.hotelMode = hotelMode;
            if (typeof (HotelMenuData) != UNDEFINED_DEFSTR) {
                HotelMenuData.operateData.switch_hotelMode_flipSwitch.switchType = hotelMode;
            }
            var keyboradlock = model.hotel.getKeyboardLock();
            DBG_INFO("---->keyboradlock:" + keyboradlock);
            HotelMenuData.operateData.keyboardLock = keyboradlock;
            if (typeof (HotelMenuData) != UNDEFINED_DEFSTR) {
                HotelMenuData.operateData.switch_keyboardLock_flipSwitch.switchType = keyboradlock;
            }
            var search = model.hotel.getSearchLock();
            DBG_INFO("---->search:" + search);
            if(typeof (HotelMenuData) != UNDEFINED_DEFSTR) {
                HotelMenuData.operateData.switch_searchLock_flipSwitch.switchType = search;
            }
            var subMenuLock = model.hotel.getSubmenuLock();
            debugPrint("----->subMenuLock:" + subMenuLock);
            if(typeof (HotelMenuData) != UNDEFINED_DEFSTR) {
                HotelMenuData.operateData.switch_subMenuLock_flipSwitch.switchType = subMenuLock;
            }
            var autoSleep = model.hotel.getAutoSleep();
            debugPrint("----->getAutoSleep:" + autoSleep);
            if(typeof (HotelMenuData) != UNDEFINED_DEFSTR) {
                HotelMenuData.operateData.switch_autoSleep_flipSwitch.switchType = autoSleep;
            }
            var settingSave = model.hotel.getUserSettingSave();
            debugPrint("---->settingSave:" + settingSave);
            HotelMenuData.operateData.switch_userSetting_flipSwitch.switchType = settingSave;

            var maxVolume = model.hotel.getMaxVolume();
            debugPrint("---->maxVolume:" + maxVolume);
            HotelMenuData.MaxVolumeSlider.Data.setDefalutValue = maxVolume;

            var minVolume = model.hotel.getMinVolume();
            debugPrint("---->minVolume:" + minVolume);
            HotelMenuData.MinVolumeSlider.Data.setDefalutValue = minVolume;

            var powerOnVolume = model.hotel.getPowerOnVolume();
            debugPrint("---->getPowerOnVolume:" + powerOnVolume);
            HotelMenuData.PowerOnVolumeSlider.Data.setDefalutValue = powerOnVolume;

            var powerOnmode = model.hotel.getPowerOnMode();
            HotelMenuData.operateData.POMDataSelectedIndex = powerOnmode;
            debugPrint("----->powerOnmode:" + powerOnmode);

            var hotelmodeLogo = model.hotel.getLogo();
            HotelMenuData.operateData.LGDataSelectedIndex = hotelmodeLogo;
            debugPrint("----->hotelmodeLogo:" + hotelmodeLogo);

        }
        OnSourceInitData();
    }
    catch(ex) {
        debugPrint("--------ex:" + ex);
    }
}
function HotelMenuRewrite(pageData) {
    var opData = pageData.operateData;

    pageData.setting_OnChannelItem.SelectedIndex = opData.OCDataSelectedIndex;
    pageData.setting_OnChannelItem.DataSelectedIndex = opData.OCDataSelectedIndex;
    pageData.setting_LogoItem.DataSelectedIndex = opData.LGDataSelectedIndex;
    pageData.setting_LogoItem.SelectedIndex = opData.LGDataSelectedIndex;
    pageData.setting_PowerOnModeItem.DataSelectedIndex = opData.POMDataSelectedIndex;
    pageData.setting_PowerOnModeItem.SelectedIndex = opData.POMDataSelectedIndex;

    pageData.setting_OnSourceItem.SelectedIndex = opData.OSSelectedIndex;
    pageData.setting_OnSourceItem.DataSelectedIndex = opData.OSDataSelectedIndex;

    $.each(pageData, function(key, val) {

        if(!key) return true;

        var localData = pageData[key],
            localOpeData = opData[key];
        switch(key) {
            case "switch_hotelMode_flipSwitch":
            case "switch_keyboardLock_flipSwitch":
            case "switch_searchLock_flipSwitch":
            case "switch_subMenuLock_flipSwitch":
            case "switch_autoSleep_flipSwitch":
            case "switch_userSetting_flipSwitch":
                localData.Data.switchType = localOpeData.switchType;
                localData.Data.switchText = !!localOpeData.switchType ? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                break;
        }
    })
    try {
        if(pageData.switch_hotelMode_flipSwitch.Data.switchType == true) {
            pageData.switch_keyboardLock_flipSwitch.disable = false;
            pageData.switch_keyboardLock_span.disable = false;

            pageData.switch_subMenuLock_span.disable = false;
            pageData.switch_subMenuLock_flipSwitch.disable = false;

            pageData.switch_autoSleep_span.disable = false;
            pageData.switch_autoSleep_flipSwitch.disable = false;

            pageData.switch_userSetting_span.disable = false;
            pageData.switch_userSetting_flipSwitch.disable = false;

            pageData.switch_searchLock_span.disable = false;
            pageData.switch_searchLock_flipSwitch.disable = false;

            pageData.MaxVolumeSlider.disable = false;
            pageData.MaxVolumespan.disable = false;

            pageData.MinVolumeSlider.disable = false;
            pageData.MinVolumespan.disable = false;

            pageData.PowerOnVolumeSlider.disable = false;
            pageData.PowerOnVolumespan.disable = false;

            pageData.setting_btn_sourceLock_span.disable = false;
            pageData.setting_btn_sourceLock_btn.disable = false;


            pageData.setting_OnSource_content.disable = false;
            pageData.setting_OnSourceItem.disable = false;

            pageData.setting_OnChannel_content.disable = false;
            pageData.setting_OnChannelItem.disable = false;

            pageData.setting_PowerOnMode_content.disable = false;
            pageData.setting_PowerOnModeItem.disable = false;

            pageData.setting_Logo_content.disable = false;
            pageData.setting_LogoItem.disable = false;

            pageData.setting_btn_clone_span.disable = false;
            pageData.setting_btn_recover_btn.disable = false;
            pageData.setting_btn_copy_btn.disable = false;
            if(pageData.operateData.OSDataSelectedIndex==0){
                pageData.setting_OnChannel_content.disable = false;
                pageData.setting_OnChannelItem.disable = false;
            }
            else{
                pageData.setting_OnChannel_content.disable = true;
                pageData.setting_OnChannelItem.disable = true;
            }
            $("#MaxVolumespanCol").css("color","#f0f0f0");
            $("#MinVolumespanCol").css("color","#f0f0f0");
            $("#PVolumespanCol").css("color","#f0f0f0");

        }
        else {
            pageData.switch_keyboardLock_flipSwitch.disable = true;
            pageData.switch_keyboardLock_span.disable = true;

            pageData.switch_subMenuLock_span.disable = true;
            pageData.switch_subMenuLock_flipSwitch.disable = true;

            pageData.switch_autoSleep_span.disable = true;
            pageData.switch_autoSleep_flipSwitch.disable = true;

            pageData.switch_userSetting_span.disable = true;
            pageData.switch_userSetting_flipSwitch.disable = true;

            pageData.switch_searchLock_span.disable = true;
            pageData.switch_searchLock_flipSwitch.disable = true;

            pageData.MaxVolumeSlider.disable = true;
            pageData.MaxVolumespan.disable = true;

            pageData.MinVolumeSlider.disable = true;
            pageData.MinVolumespan.disable = true;

            pageData.PowerOnVolumeSlider.disable = true;
            pageData.PowerOnVolumespan.disable = true;

            pageData.setting_btn_sourceLock_span.disable = true;
            pageData.setting_btn_sourceLock_btn.disable = true;

            pageData.setting_OnSource_content.disable = true;
            pageData.setting_OnSourceItem.disable = true;

            pageData.setting_OnChannel_content.disable = true;
            pageData.setting_OnChannelItem.disable = true;

            pageData.setting_PowerOnMode_content.disable = true;
            pageData.setting_PowerOnModeItem.disable = true;

            pageData.setting_Logo_content.disable = true;
            pageData.setting_LogoItem.disable = true;

            pageData.setting_btn_clone_span.disable = true;
            pageData.setting_btn_recover_btn.disable = true;
            pageData.setting_btn_copy_btn.disable = true;

            $("#MaxVolumespanCol").css("color","rgba(186,184,191,.3)");
            $("#MinVolumespanCol").css("color","rgba(186,184,191,.3)");
            $("#PVolumespanCol").css("color","rgba(186,184,191,.3)");

        }



    }
    catch(ex) {
        debugE(ex);
    }

    try{
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#switch_hotelMode_flipSwitch").css('float', dir_1);
        $("#switch_keyboardLock_flipSwitch").css('float', dir_1);
        $("#switch_searchLock_flipSwitch").css('float', dir_1);
        $("#switch_subMenuLock_flipSwitch").css('float', dir_1);
        $("#switch_autoSleep_flipSwitch").css('float', dir_1);
        $("#switch_userSetting_flipSwitch").css('float', dir_1);
        $("#setting_MaxVolume").css('float', dir_1);
        $("#setting_MinVolume").css('float', dir_1);
        $("#setting_PowerOnVolume").css('float', dir_1);
        $("#setting_btn_sourceLock_btn").css('float', dir_1);
        $("#setting_btn_recover_btn").css('float', dir_1);
        $("#setting_btn_copy_btn").css('float', dir_1);
        $("#setting_hotel_scroll_rail").css('float', dir_1);
    }
    catch(ex){
        debugE(ex);
    }

}
function addHotelMenuScrollbar() {

}

function setHotelModeFlipSwitch(operateData, data) {
    var page = this.page;

    if(operateData[this.id] != "undefined")
        operateData[this.id].switchType = !this.SwitchType;
    page.rewriteDataOnly();
    if(!!tv) {
        model.hotel.setHotelMode(!!this.SwitchType ? 1 : 0);
        //model.hotel.onHotelModeChaged = HotelModeChaged;
    }
}
function setkeyboardLockFlipSwitch(operateData, data) {
    var page = this.page;

    if(operateData[this.id] != "undefined")
        operateData[this.id].switchType = !this.SwitchType;
    page.rewriteDataOnly();
    if(!!tv) {
        model.hotel.setKeyboardLock(!!this.SwitchType ? 1 : 0);
        model.hotel.onKeyboardLockChaged = KeyboardLockChaged;
    }
}
function HotelModeChaged(v){
    if(!!v){
        HotelMenuData.operateData.hotelMode = true;
    }
    else{
        HotelMenuData.operateData.hotelMode = false;
    }
    InitKeyboardValue();
}
function KeyboardLockChaged(v){
    if(!!v){
        HotelMenuData.operateData.keyboardLock = true;
    }
    else{
        HotelMenuData.operateData.keyboardLock = false;
    }
    InitKeyboardValue();
}
function InitKeyboardValue(){
    try {

        if (!!HotelMenuData.operateData.hotelMode) {
            if(!!HotelMenuData.operateData.keyboardLock){
                HOTElKEYBboardLock = true;
            }
            else{
                HOTElKEYBboardLock = false;
            }
        }
        else{
            HOTElKEYBboardLock = false;
        }
    }
    catch (ex) {
        debugE(ex);
    }
}
function setSearchLockFlipSwitch(operateData, data) {
    var page = this.page;

    if(operateData[this.id] != "undefined")
        operateData[this.id].switchType = !this.SwitchType;
    page.rewriteDataOnly();
    if(!!tv) {
        model.hotel.setSearchLock(!!this.SwitchType ? 1 : 0);
    }
}
function setSubMenuLockFlipSwitch(operateData, data) {
    var page = this.page;

    if (operateData[this.id] != "undefined")
        operateData[this.id].switchType = !this.SwitchType;
    page.rewriteDataOnly();
    if (!!tv) {
        model.hotel.setSubmenuLock(!!this.SwitchType ? 1 : 0);
    }
}
function setAutoSleepFlipSwitch(operateData, data) {
    var page = this.page;

    if (operateData[this.id] != "undefined")
        operateData[this.id].switchType = !this.SwitchType;
    page.rewriteDataOnly();
    if (!!tv) {
        model.hotel.setAutoSleep(!!this.SwitchType ? 1 : 0);
    }
}
function setUserSettingFlipSwitch(operateData, data) {
    var page = this.page;

    if (operateData[this.id] != "undefined")
        operateData[this.id].switchType = !this.SwitchType;
    page.rewriteDataOnly();
    if (!!tv) {
        model.hotel.setUserSettingSave(!!this.SwitchType ? 1 : 0);
    }
}
function MaxVolumeSliderMoveRight() {

    this.hiSliderMoveRight();
    if (!!tv) {
        model.hotel.setMaxVolume(this.SliderValue);
    }

}
function MaxVolumeSliderMoveLeft() {
    var minValue = hiWebOsFrame.setting_HotelMenu_page.getCaE("MinVolumeSlider").SliderValue;
    DBG_INFO("----->minValue:" + minValue);
    DBG_INFO("---MaxVolumeSliderMoveLeft--this.SliderValue:" + this.SliderValue);
    if (this.SliderValue > minValue) {
        this.hiSliderMoveLeft();
        if (!!tv) {
            model.hotel.setMaxVolume(this.SliderValue);
        }
    }


}
function MinVolumeSliderMoveRight() {
    var maxValue = hiWebOsFrame.setting_HotelMenu_page.getCaE("MaxVolumeSlider").SliderValue;
    DBG_INFO("----->maxValue:" + maxValue);
    DBG_INFO("---MinVolumeSliderMoveLeft--this.SliderValue:" + this.SliderValue);
    if (this.SliderValue < maxValue) {
        this.hiSliderMoveRight();
        if (!!tv) {
            model.hotel.setMinVolume(this.SliderValue);
        }
    }
}
function MinVolumeSliderMoveLeft() {
    this.hiSliderMoveLeft();
    if (!!tv) {
        model.hotel.setMinVolume(this.SliderValue);
    }
}
function PowerOnSliderMoveRight() {
    var maxValue = hiWebOsFrame.setting_HotelMenu_page.getCaE("MaxVolumeSlider").SliderValue;
    if (this.SliderValue < maxValue) {
        this.hiSliderMoveRight();
        if (!!tv) {
            model.hotel.setPowerOnVolume(this.SliderValue);
        }
    }
}
function PowerOnSliderMoveLeft() {
    var minValue = hiWebOsFrame.setting_HotelMenu_page.getCaE("MinVolumeSlider").SliderValue;
    if (this.SliderValue > minValue) {
        this.hiSliderMoveLeft();
        if (!!tv) {
            model.hotel.setPowerOnVolume(this.SliderValue);
        }
    }
}
function SourceLockOpenpage() {
    //'APP_5882_SA' != currentPlatform
    if ('APP_5882_SA' == currentPlatform) {
        hiWebOsFrame.createPage('setting_HotelInputLockSA_page', null, null, null, function (HotelInputLock_page) {
            hiWebOsFrame.setting_HotelMenu_page.close();
//        hiWebOsFrame.setting_HotelMenu_page.destroy();
            HotelInputLock_page.open();
            var onsource = tv ? model.hotel.getOnSource() : 4;
            if (onsource == 0) {
                HotelInputLock_page.hiFocus("SourceLock_AV_flipSwitch");
            } else {
                HotelInputLock_page.hiFocus();
            }

            hiWebOsFrame.HotelInputLock_page = HotelInputLock_page;
        });

    }
    else {
        hiWebOsFrame.createPage('setting_HotelInputLock_page', null, null, null, function (HotelInputLock_page) {
            hiWebOsFrame.setting_HotelMenu_page.close();
//        hiWebOsFrame.setting_HotelMenu_page.destroy();
            HotelInputLock_page.open();
            var onsource = tv ? model.hotel.getOnSource() : 0;
            var cursource = tv?model.source.getCurrentSource():0;
            if (onsource == 0 || cursource == 0) {
                HotelInputLock_page.hiFocus("SourceLock_AV_flipSwitch");
            } else {
                HotelInputLock_page.hiFocus();
            }
            hiWebOsFrame.HotelInputLock_page = HotelInputLock_page;
        });
    }
}
function OnSourceItemSpan(operateData, data) {
    try{
    var page = this.page;
    operateData.OSDataSelectedIndex = this.SelectedIndex;
    data.SelectedIndex = this.SelectedIndex;
        operateData.OSSelectedIndex = this.SelectedIndex;
    page.rewriteDataOnly();
    if(!!tv) {

        if(this.SelectedIndex == data.Data.length - 1) {
            model.hotel.setOnSource(0xff);
        }
        else {
            model.hotel.setOnSource(this.SelectedIndex);
        }
    }
}
    catch(ex){
        debugE("---->Onsource:"+ex);
    }

}
function OnChannelItemSpan(operateData, data) {
    var page = this.page;
    operateData.OCDataSelectedIndex = this.SelectedIndex;
    data.SelectedIndex = this.SelectedIndex;
    page.rewriteDataOnly();
    if(!!tv) {
        if(this.SelectedIndex == 0) {
            this.page.close();
            livetvchlist.openChannelList();
        }
        else{
            model.hotel.hotelOnChannel(0xff,0xff,0);
        }
    }
}
function PowerOnModeItemSpan(operateData, data) {
    var page = this.page;
    operateData.POMDataSelectedIndex = this.SelectedIndex;
    data.SelectedIndex = this.SelectedIndex;
    page.rewriteDataOnly();
    if(!!tv) {
        model.hotel.setPowerOnMode(this.SelectedIndex);
    }
}
function LogoItemSpan(operateData, data) {
    var page = this.page;
    operateData.LGDataSelectedIndex = this.SelectedIndex;
    data.SelectedIndex = this.SelectedIndex;
    page.rewriteDataOnly();
    if(!!tv) {
        model.hotel.setLogo(this.SelectedIndex);
    }
}
function onSettingHotelMenuPageClose() {
    try {
        //model.hotel.onKeyboardLockChaged = null;
        //model.hotel.onHotelModeChaged = null;
    }
    catch(ex) {
        debugE(ex.message);
    }
}

function onSettingHotelMenuPageDestroy() {
    try {
        hiWebOsFrame.setting_HotelMenu_page = null;
    }
    catch(ex) {
        debugE(ex.message);
    }
}

function SettingHotelMenuEscHandler() {
    try {
        var oriPage = hiWebOsFrame.setting_HotelMenu_page.origin;
        hiWebOsFrame.setting_HotelMenu_page.close();
        oriPage.open();
        CreateSndHelpInfoPage("Balance", "Adjust the left and right speaker strength to optimize audio for a specific location.");
        oriPage.hiFocus();
        oriPage.rewriteDataOnly();
        hiWebOsFrame.setting_HotelMenu_page.destroy(); //此处修改顺序是因为destroy里面还会调用一次colse，放到最后面的话会close HelpInfoPage


        var i = _getIndex(PageDataFirstCls.operateData.settingdisablelist[5], 3);
        var hotelmode = tv ? model.hotel.getHotelMode() : true;
        if (checkIsAppOn() || hotelmode) {
            if (i < 0) {
                PageDataFirstCls.operateData.settingdisablelist[5].push(3);
            }
        }
        else {
            if (i >= 0) {
                PageDataFirstCls.operateData.settingdisablelist[5].splice(i, 1);
            }
        }
        hiWebOsFrame.settingsFirst.rewriteDataOnly();
    }
    catch(ex) {
        debugE(ex.message);
    }
}
function HotelCopyToUsb(opData, data) {
    opData.copyOrRestoreId = this.id;
    hiWebOsFrame.createPage('setting_HotelUsbClone_Page', null, null, null, function(HotelUsbClone_page) {
        hiWebOsFrame.HotelUsbClone_page = HotelUsbClone_page;
        HotelUsbClone_page.open();
        hiWebOsFrame.setting_HotelMenu_page.close();
        HotelUsbClone_page.hiFocus();

    });
}

function OnSourceInitData() {
    try {
        HotelMenuData.setting_OnSourceItem.Data = [];
        HotelMenuData.operateData.sourceArr = [];
        if(!!tv) {
            var sourceItem = model.source.getInputName();
            DBG_INFO("sourceItem:" + JSON.stringify(sourceItem));
            var item = {id: "0", name: "TV", signal: "1", lock: "0", rename: "", hotelLock: ""};
            for(var i = 0; i < sourceItem.length / 6; i++) {
                var newitem = $.extend(true, {}, item);
                newitem.id = sourceItem[i * 6 + 0];
                newitem.name = sourceItem[i * 6 + 1];
                newitem.signal = sourceItem[i * 6 + 2];
                newitem.lock = sourceItem[i * 6 + 3];
                newitem.rename = sourceItem[i * 6 + 4];
                newitem.hotelLock = sourceItem[i * 6 + 5];
                HotelMenuData.operateData.sourceArr.push(newitem);
            }
        }
        else {
            HotelMenuData.operateData.sourceArr = [
                {id: "0", name: "TV", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "0"},
                {id: "1", name: "AV", signal: "1", lock: "0", rename:"tvqqq sss wesw dd",hotelLock: "0"},
                {id: "2", name: "Component", signal: "1", lock: "1",rename:"tvqqq", hotelLock: "0"},
                {id: "3", name: "HDMI1", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "4", name: "HDMI2", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "5", name: "HDMI3", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "6", name: "HDMI4", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"}
            ]
        }
        var itemData = {"setting_OnSourceItem_span": {"Data": "none"}}
        HotelMenuData.setting_OnSourceItem.disableItem = [];
        $.each(HotelMenuData.operateData.sourceArr, function(k, v) {
            HotelMenuData.setting_OnSourceItem.Data.push($.extend(true, {}, itemData));
            if(!!v.rename){
                HotelMenuData.setting_OnSourceItem.Data[k].setting_OnSourceItem_span.Data
                    = v.rename;
            }
            else{
                HotelMenuData.setting_OnSourceItem.Data[k].setting_OnSourceItem_span.Data
                    = v.name;
            }
            if(v.hotelLock == 1) {
                HotelMenuData.setting_OnSourceItem.disableItem.push(k);
            }
        })
        DBG_INFO("HotelMenuData.setting_OnSourceItem.disableItem:" + JSON.stringify(HotelMenuData.setting_OnSourceItem.disableItem));

        HotelMenuData.setting_OnSourceItem.Data.push({
            "setting_OnSourceItem_span": {
                Data: "Save"
            }
        });

        var index;
        index = tv?model.hotel.getOnSource():1;
        var opData = HotelMenuData.operateData;
        if(index ==255){
            opData.OSSelectedIndex = HotelMenuData.operateData.sourceArr.length;
            opData.OSDataSelectedIndex = HotelMenuData.operateData.sourceArr.length;
            HotelMenuData.operateData.SelectedIndex = HotelMenuData.operateData.sourceArr.length;
        }
        else {
            opData.OSSelectedIndex = index;
            opData.OSDataSelectedIndex = index;
            HotelMenuData.operateData.SelectedIndex = index;
        }
        //HotelMenuData.operateData.OSDataSelectedIndex = model.hotel.getOnSource();

        debugPrint("________>HotelMenuData.operateData.OSDataSelectedIndex:" + HotelMenuData.operateData.OSDataSelectedIndex);

    }
    catch(ex) {
        debugE(ex);
    }
}

function HotelIndexAddMarquee() {
    try {

        $("#setting_btn_copy_btn").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
        var htmlText = $("#setting_btn_copy_btn").html();
        var mar = $("#setting_btn_copy_btn").children("marquee").is("marquee");
        if (htmlText.length > 15) {
            if(!mar){
                $("#setting_btn_copy_btn").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
            }
        }


    } catch (ex) {
        debugE(ex.message);
    }
}
function HotelIndexAddRecoveMarquee(){
    try {

        var marquee = $("#setting_btn_recover_btn" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_btn_recover_btn" + " marquee").html();
            var marquee = $("#setting_btn_recover_btn").html(htmlText);
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function HotelIndexDelMarquee() {
    try {
        var marquee = $("#setting_btn_copy_btn" + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_btn_copy_btn" + " marquee").html();
            var marquee = $("#setting_btn_copy_btn").html(htmlText);
        }
        $("#setting_btn_copy_btn").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
    } catch (ex) {
        debugE(ex.message);
    }
}
function HotelIndexRecoveDelMarquee(){
    try {
        $("#setting_btn_recover_btn").css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
        var htmlText = $("#setting_btn_recover_btn").html();
        var mar = $("#setting_btn_recover_btn").children("marquee").is("marquee");
        if (htmlText.length > 15) {
            if(!mar){
                $("#setting_btn_recover_btn").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
            }
        }

    } catch (ex) {
        debugE(ex.message);
    }
}
function RecoveDelMarquee(){
    var marquee = $("#setting_btn_recover_btn" + " marquee");
    if (marquee.length > 0) {
        var htmlText = $("#setting_btn_recover_btn" + " marquee").html();
        var marquee = $("#setting_btn_recover_btn").html(htmlText);
    }
}
function OnSourceItemaftUpHandler(){
    HotelMenuData.operateData.SelectedIndex = this.SelectedIndex;
}
function OnSourceItemaftDownHandler() {
    HotelMenuData.operateData.SelectedIndex = this.SelectedIndex;
}
function OnSourceChangeIndex(){
    hiWebOsFrame.setting_HotelMenu_page.getCaE("setting_OnSourceItem").setSelectedIndex(HotelMenuData.operateData.SelectedIndex );

}
function OnSourceChangeDownIndex(){
    hiWebOsFrame.setting_HotelMenu_page.getCaE("setting_OnSourceItem").setSelectedIndex(HotelMenuData.operateData.SelectedIndex );

}
function HotelSourceAddMarquee(){
    var txtId = "setting_OnSourceItem_setting_OnSourceItem_span_sys"+this.SelectedIndex,
        length = 15;
    var txt = $("#" + txtId).html();
    if (txt.length > length) {
        $("#" + txtId).html('<marquee>' + txt + '</marquee>')
    }
}
function HotelSourceRemMarquee() {
    var txtId = "setting_OnSourceItem_setting_OnSourceItem_span_sys" + this.SelectedIndex,
    marqueenTxt = $("#" + txtId + " marquee").html();
    if (!!marqueenTxt) {
        $("#" + txtId).html(marqueenTxt);
    }
}
function getHotelPageScale() {
    try {

        var pageScaleWidth = $('#setting_HotelMenu_page').offset().width;
        var pageWidth = parseInt($('#setting_HotelMenu_page').css('width'));
        var scale = Math.round(pageScaleWidth / pageWidth * 100) / 100;
        HotelMenuData.operateData.pageScale = scale;
        return scale;

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function refreshHotelModeScroll() {
    var opData = HotelMenuData.operateData

    var curId = hiWebOsFrame.setting_HotelMenu_page.currentSelectedTree[0].id;
    var bkgTop = $("#setting_HotelMenu_page").offset().top;
    var curRelativeTop =$("#" + curId).offset().top-bkgTop;
    if ("switch_hotelMode_flipSwitch" == curId) {
        $("#setting_hotelMode_container").css("top","0");
        $("#setting_hotel_scroll_bar").css("margin-top","0");
        return;
    } else if ("setting_btn_copy_btn" == curId ||"setting_btn_recover_btn" == curId) {
        $("#setting_hotelMode_container").css("top","-857px");
        $("#setting_hotel_scroll_bar").css("margin-top","311px");
        return;
    }
    var scale = getHotelPageScale();
   // DBG_INFO(' getHotelPageScale(): ' + scale);

    if (curRelativeTop < opData.limTop * scale) {
        var tmpH = parseInt((opData.limTop * scale - curRelativeTop) / scale);
        var curContentMarginTop = parseInt(($("#setting_hotelMode_container").offset().top - bkgTop) / scale);
        var top = tmpH + curContentMarginTop;
        $("#setting_hotelMode_container").css("top", top + "px");


        var tmpMarginTop = Math.abs(parseInt($("#setting_hotelMode_container").css("top")));
        var bartop = Math.round(tmpMarginTop / 367 * 115);
        $("#setting_hotel_scroll_bar").css("margin-top",bartop+"px");

    }
    else if (curRelativeTop > opData.limBtm * scale) {
        var tmpH = parseInt(curRelativeTop / scale - opData.limBtm);
        var curContentMarginTop = parseInt(($("#setting_hotelMode_container").offset().top - bkgTop) / scale);
        var bottom = curContentMarginTop - tmpH;
        $("#setting_hotelMode_container").css("top",bottom+"px");


        var tmpMarginTop = Math.abs(parseInt($("#setting_hotelMode_container").css("top")));
        var bartop = Math.round(tmpMarginTop / 367 * 115);
        $("#setting_hotel_scroll_bar").css("margin-top",bartop+"px");
    }

}