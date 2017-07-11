function getSettingPicBackLightData(opts) {
    SettingPicBackLightInit();
    opts.CaE = [
        {
            "id": "setting_pic_dynamic_control_text_0",
            "description": "setting_pic_dynamic_control_text_0",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_localdimming_switch_text_0",
            "description": "setting_pic_localdimming_switch_text_0",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_backlight_backlight_text_0",
            "description": "setting_pic_backlight_backlight_text_0",
            "CaEType": "div"
        },


        {
            "id": "setting_pic_dynamic_control_cmp",
            "description": "setting_pic_dynamic_control_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
                "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
                "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicDynamicEnterHandler",
                "aftDownHandler": "SettingPicDynamicDownHandler",
                "aftUpHandler": "SettingPicDynamicUpHandler",
                "aftEscHandler": "SettingPicBackLightEscHandler",
                "befDownHandler": "SettingPicDynamicDownHandler",
                "befUpHandler": "SettingPicDynamicUpHandler"
            },
            "nav": {
                "upTo": "setting_pic_backlight_backlight",
                "leftTo": "",
                "downTo": "setting_pic_localdimming_switch_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
                {
                    "id": "setting_pic_dynamic_control_cmp_item",
                    "description": "setting_pic_dynamic_control_cmp_item",
                    "CaEType": "div"
                },
                {
                    "id": "setting_pic_dynamic_control_cmp_item_text",
                    "description": "setting_pic_dynamic_control_cmp_item_text",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    "setting_pic_dynamic_control_cmp_item",
                    "setting_pic_dynamic_control_cmp_item_text"
                ]
            }
        },

        {
            "id": "setting_pic_localdimming_switch_cmp",
            "description": "setting_pic_localdimming_switch_cmp",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_pic_dynamic_control_cmp",
                "downTo": "setting_pic_backlight_backlight"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingPicLocalDimingEnterHandler',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingPicBackLightEscHandler"
//                "aftUpHandler": "DBXRefreshHelpInfo",
//                "aftDownHandler": "DBXRefreshHelpInfo"
            }
        },

        {
            "id": "setting_pic_backlight_backlight",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "setting_pic_backlight_backlight_slider",
            "nav": {"upTo": "setting_pic_localdimming_switch_cmp", "downTo": "setting_pic_dynamic_control_cmp"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicBackLightBackLightRightHandler",
                "aftLeftHandler": "SettingPicBackLightBackLightLeftHandler",
                "aftEscHandler": "SettingPicBackLightEscHandler",
                "aftUpHandler": "SettingPicBackLightUpHandler",
                "aftDownHandler": "SettingPicBackLightDownHandler"
            },
            "CaE": [
                {
                    "id": "setting_pic_backlight_backlight_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_backlight_backlight_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"},
                    "nav": {"upTo": "setting_pic_localdimming_switch_cmp", "downTo": "setting_pic_dynamic_control_cmp"}

                },
                {
                    "id": "setting_pic_backlight_backlight_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_backlight_backlight_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_backlight_backlight_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_backlight_backlight_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_backlight_backlight_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_backlight_backlight_slider_line",
                "sliderId": "setting_pic_backlight_backlight_slider",
                "completeId": "setting_pic_backlight_backlight_slider_complete",
                "sliderSpanId": "setting_pic_backlight_backlight_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_backlight_backlight_min_val",
                "sliderMaxValueId": "setting_pic_backlight_backlight_max_val"
            }

        }


    ];
    return PageDataSettingPicBackLight;
}

function onSettingPicBackLightOpen() {
    try {
        if (false == PageDataSettingPicBackLight.operateData.localDimmingSupport) {
            hiWebOsFrame.SettingPicBackLight.firstFocusId = "setting_pic_dynamic_control_cmp";
        } else {
            //hiWebOsFrame.SettingPicBackLight.firstFocusId = "setting_pic_localdimming_switch_cmp";
            hiWebOsFrame.SettingPicBackLight.firstFocusId = "setting_pic_backlight_backlight";
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicBackLightClose() {
    try {
        CloseSndHelpInfoPage();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPicBackLightDestroy() {
    try {

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var PageDataSettingPicBackLight = {
    "setting_pic_dynamic_control_text_0": {Data: 'Dynamic Backlight Control'},
    "setting_pic_localdimming_switch_text_0": {Data: 'Local Dimming'},
    "setting_pic_backlight_backlight_text_0": {Data: 'Backlight'},


    "setting_pic_dynamic_control_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_pic_dynamic_control_cmp_item": "", "setting_pic_dynamic_control_cmp_item_text": {Data: "Off"}
            },
            {
                "setting_pic_dynamic_control_cmp_item": "", "setting_pic_dynamic_control_cmp_item_text": {Data: "Low"}
            },
            {
                "setting_pic_dynamic_control_cmp_item": "", "setting_pic_dynamic_control_cmp_item_text": {Data: "High"}
            }
        ],
        disableItem: []
    },

    "setting_pic_backlight_backlight": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 100},
            size: {barWidth: 210, sliderWidth: 16},
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }
    },

    "setting_pic_localdimming_switch_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        },
        disable: false
    },

    operateData: {
        helpInfo: {
            setting_pic_dynamic_control_cmp: {
                title: "Dynamic Backlight Control",
                content: "Automatically adjust how bright images appear."
            },
            setting_pic_backlight_backlight: {
                title: "Backlight",
                content: "Adjust how bright you want images to appear. Lower settings create darker images."
            }
        },
        'localDimmingSupport': 0,
        "setting_pic_localdimming_switch_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "setting_pic_backlight_backlight": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 100},
                size: {barWidth: 210, sliderWidth: 16},
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            }
        },
        "setting_pic_dynamic_control_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_pic_dynamic_control_cmp_item": "",
                    "setting_pic_dynamic_control_cmp_item_text": {Data: "Off"}
                },
                {
                    "setting_pic_dynamic_control_cmp_item": "",
                    "setting_pic_dynamic_control_cmp_item_text": {Data: "Low"}
                },
                {
                    "setting_pic_dynamic_control_cmp_item": "",
                    "setting_pic_dynamic_control_cmp_item_text": {Data: "High"}
                }
            ],
            disableItem: []
        }
    },
    langData: {
        'Dynamic Backlight Control': [],
        'Local Dimming': [],
        'Backlight': [],
        'Off': [],
        'Low': [],
        'High': []
    },
    rewrite: "SettingPicBackLightRewrite"
};


function SettingPicBackLightEscHandler() {
    try {
        hiWebOsFrame.SettingPicBackLight.close();
        hiWebOsFrame.SettingPicBackLight.origin.open();
        hiWebOsFrame.SettingPicBackLight.origin.hiFocus();
        hiWebOsFrame.SettingPicBackLight.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPicBackLight.destroy();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}



function SettingPicBackLightRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $('#setting_pic_localdimming_switch_cmp').css('float', dir_1)
        $('#setting_pic_backlight_backlight_slider_cmp').css('float', dir_1)

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {

        var dynmic = pageData.operateData.setting_pic_dynamic_control_cmp.DataSelectedIndex;
        DBG_INFO("dynmic: " + dynmic);
        NaviBarRewriteEasy.call(this, pageData, 'setting_pic_dynamic_control_cmp', dynmic);

        //var localDimming = pageData.operateData.setting_pic_localdimming_switch_cmp.switchType; //获取主机音量
        //DBG_INFO('localDimming: ' + Bool2Num(localDimming));
        //FlipSwitchRewriteEasy.call(this, pageData, 'setting_pic_localdimming_switch_cmp', localDimming);

        var backlight = pageData.operateData.setting_pic_backlight_backlight.Data.setDefalutValue;
        DBG_INFO('backlight: ' + backlight);
        SliderRewriteEasy.call(this, pageData, "setting_pic_backlight_backlight", backlight);


        if (false == pageData.operateData.localDimmingSupport) {
            DisableLocalDimming();
        } else {
            EnableLocalDimming();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicDynamicDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }

        SettingPicBackLightRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBackLightRefreshHelpInfo(){
    try {
        var curId = hiWebOsFrame.SettingPicBackLight.currentSelectedTree[0].id;
        var helpInfo = PageDataSettingPicBackLight.operateData.helpInfo[curId];
        sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicDynamicUpHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        SettingPicBackLightRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBackLightUpHandler(){
    try {
        SettingPicBackLightRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBackLightDownHandler(){
    try {
        SettingPicBackLightRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function EnableLocalDimming() {
    try {
        DBG_INFO('EnableLocalDimming()');

        $('#setting_pic_backlight').css('height', '240px');

        $('#setting_pic_dynamic_control').css('display', 'none');
        $('#setting_pic_dynamic_control_cmp').css('display', 'none');

        //$('#setting_pic_localdimming_switch').css('display', 'block');
        $('#setting_pic_localdimming_switch').css('display', 'none');

        $('#setting_pic_backlight_backlight').css('margin-top', '95px');
        PageDataSettingPicBackLight.setting_pic_dynamic_control_cmp.disable = true;
        //PageDataSettingPicBackLight.setting_pic_localdimming_switch_cmp.disable = false;
        PageDataSettingPicBackLight.setting_pic_localdimming_switch_cmp.disable = true;

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DisableLocalDimming() {
    try {
        DBG_INFO('DisableLocalDimming()');

        $('#setting_pic_backlight').css('height', '300px');

        $('#setting_pic_dynamic_control').css('display', 'block');
        $('#setting_pic_dynamic_control_cmp').css('display', 'block');

        $('#setting_pic_localdimming_switch').css('display', 'none');

        $('#setting_pic_backlight_backlight').css('margin-top', '16px');

        PageDataSettingPicBackLight.setting_pic_dynamic_control_cmp.disable = false;
        PageDataSettingPicBackLight.setting_pic_localdimming_switch_cmp.disable = true;

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicDynamicEnterHandler() {
    try {
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var DynamicCmp = this;
            var dynamicVal = this.SelectedIndex;
            model.video.setDynamicBacklight(dynamicVal);
            NaviBarEasyChange.call(this, DynamicCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();

            SetRecentUse("Dynamic Backlight Control", 0, FirPageSndIdx.PicBacklight);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBackLightBackLightRightHandler() {
    try {
        var backlightCmp = this;

        var backlightVal = backlightCmp.page.operateData[backlightCmp.id].Data.setDefalutValue;
        DBG_INFO("backlightVal " + backlightVal);

        backlightVal += 1;
        if (backlightVal < 0) {
            backlightVal = 0;
        }
        if (backlightVal > 100) {
            backlightVal = 100;
        }

//        setValTest(lipSyncVal);
        model.video.setBacklight(backlightVal);
        SliderEasyChange.call(this, backlightCmp, backlightVal);

        SetRecentUse("Backlight", 0, FirPageSndIdx.PicBacklight);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBackLightBackLightLeftHandler() {
    try {
        var backlightCmp = this;

        var backlightVal = backlightCmp.page.operateData[backlightCmp.id].Data.setDefalutValue;
        DBG_INFO("backlightVal " + backlightVal);

        backlightVal -= 1;
        if (backlightVal < 0) {
            backlightVal = 0;
        }
        if (backlightVal > 100) {
            backlightVal = 100;
        }

//        setValTest(lipSyncVal);
        model.video.setBacklight(backlightVal);
        SliderEasyChange.call(this, backlightCmp, backlightVal);

        SetRecentUse("Backlight", 0, FirPageSndIdx.PicBacklight);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicLocalDimingEnterHandler() {
    try {
        var localDimming = model.video.getEnumLocalDimming();
        DBG_INFO('model.video.getEnumLocalDimming(): ' + localDimming);
        var localDimming = !localDimming

        DBG_INFO('model.video.setEnumLocalDimming(' + Bool2Num(localDimming) + ')');
        model.video.setEnumLocalDimming(Bool2Num(localDimming));

        var localDimmingCmp = this;
        FlipSwitchEasyChange.call(this, localDimmingCmp, localDimming);

        SetRecentUse("Local Dimming", 0, FirPageSndIdx.PicBacklight);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}