/**
 *
 * Created by ghl on 14-6-19.
 */


function getSettingPic3DData(opts) {
    SettingPic3DInit();
    opts.CaE = [
        {
            "id": "setting_pic_3dmode_text_0",
            "description": "Equalizer text_0",
            "CaEType": "span",
            "classes":{
                "normal":"setting_snd_auto_volume_text_0",
                "disable":"setting_snd_auto_volume_text_0_disable"
            }
        },
        {
            "id": "setting_pic_lrswap_text_0",
            "description": "Equalizer text_0",
            "CaEType": "span",
            "classes":{
                "normal":"setting_snd_auto_volume_text_0",
                "disable":"setting_snd_auto_volume_text_0_disable"
            }
        },
        {
            "id": "setting_pic_depth_text_0",
            "description": "Equalizer text_0",
            "CaEType": "span",
            "classes":{
                "normal":"setting_snd_auto_volume_text_0",
                "disable":"setting_snd_auto_volume_text_0_disable"
            }
        },
        {
            "id": "setting_pic_view_point_text_0",
            "description": "Equalizer text_0",
            "CaEType": "div",
            "classes":{
                "normal":"setting_snd_equalizer_hz_0_text_0",
                "disable":"setting_snd_equalizer_hz_0_text_0_disable"
            }
        },
        {
            "id": "setting_pic_depth_text_separate",
            "description": "Equalizer text_0",
            "CaEType": "div",
            "classes":{
                "normal":"setting_snd_equalizer_hz_0_text_separate",
                "disable":"setting_snd_equalizer_hz_0_text_separate_disable"
            }
        },
        {
            "id": "setting_pic_view_point_text_separate",
            "description": "setting_pic_view_point_text_separate",
            "CaEType": "div",
            "classes":{
                "normal":"setting_snd_equalizer_hz_0_text_separate",
                "disable":"setting_snd_equalizer_hz_0_text_separate_disable"
            }
        },
        {
            "id": "setting_pic_3dto2d_text_0",
            "description": "Equalizer text_0",
            "CaEType": "span",
            "classes":{
                "normal":"setting_snd_auto_volume_text_0",
                "disable":"setting_snd_auto_volume_text_0_disable"
            }
        },
        {
            "id": "setting_pic_3dmode_cmp",
            "description": "3d modecmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_spdif_output_cmp_li_normal",
                "focus": "setting_snd_SAS_spdif_output_cmp_li_focus",
                "disable": "setting_snd_SAS_spdif_output_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_spdif_output_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_spdif_output_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPic3DModeEnterHandler",
                "aftDownHandler": "SettingPic3DModeAftDownHandler",
                "aftUpHandler": "SettingPic3DModeAftUpHandler",
                "aftEscHandler": "SettingPic3DEscHandler",
                "befDownHandler": "SettingPic3DModeBefDownHandler",
                "befUpHandler": "SettingPic3DModeBefUpHandler",
                "aftLeftHandler":"SettingPic3DModeAftLeftHandler",
                "aftRightHandler":"SettingPic3DModeAftRightHandler"

            },
            "nav": {
                "upTo": "setting_pic_3dto2d_cmp",
                "leftTo": "",
                "downTo": "setting_pic_lrswap_cmp",
                "rightTo": ""
            },
            disable: false,

            "oriCaE": [
//                {
//                    "id": "setting_pic_3dmode_cmp_item",
//                    "description": "setting_pic_3dmode_cmp_item",
//                    "CaEType": "div",
//                    "classes": {
//                        "normal": "nromaltest", "focus": "focustest"
//                    }
//                },
                {
                    "id": "setting_pic_3dmode_cmp_item_text",
                    "description": "setting_pic_3dmode_cmp_item_text",
                    "CaEType": "div",
                    "classes": {
                        "normal": "nromaltest", "focus": "focustest"
                    }
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
//                    "setting_pic_3dmode_cmp_item",
                    "setting_pic_3dmode_cmp_item_text"

                ],
                "PageSize": 3,
                "ArrowFlag": true
            },
            "linkZoomArrowleft": "setting_3d_mode_left_arrow",
            "linkZoomArrowRight": "setting_3d_mode_right_arrow"
//                    "linkZoonSpan": "setting_pic_currentZoom"
        },


        {
            "id": "setting_pic_lrswap_cmp",
            "description": "setting_pic_lrswap_cmp",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "setting_snd_SAS_audio_type_cmp_li_normal",
                "focus": "setting_snd_SAS_audio_type_cmp_li_focus",
                "disable": "setting_snd_SAS_audio_type_cmp_li_disable_normal",
                "dataSelected": "setting_snd_SAS_audio_type_cmp_li_selected",
                "disableDataSelected": "setting_snd_SAS_audio_type_cmp_li_disable_data_selected"
            },
            "handler": {
                "aftEnterHandler": "SettingPicLRSwapEnterHandler",
                "aftUpHandler": "SettingPicLRSwapUpHandler",
                "aftDownHandler": "SettingPicLRSwapDownHandler",
                "aftEscHandler": "SettingPic3DEscHandler",
                "befDownHandler": "SettingPicLRSwapUpHandler",
                "befUpHandler": "SettingPicLRSwapDownHandler"
            },
            "nav": {"upTo": "setting_pic_3dmode_cmp", "leftTo": "", "downTo": "setting_pic_view_point", "rightTo": ""},
            disable: false,

            "oriCaE": [
//                {
//                    "id": "setting_snd_audio_out_cmp_item",
//                    "description": "setting_snd_audio_out_cmp_item",
//                    "CaEType": "div"
//                },
                {
                    "id": "setting_pic_lrswap_cmp_item_text",
                    "description": "setting_pic_lrswap_cmp_item_text",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
//                    "setting_snd_audio_out_cmp_item",
                    "setting_pic_lrswap_cmp_item_text"
                ]
            }
        },


        {
            "id": "setting_pic_view_point",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "setting_pic_view_point_slider",
            "nav": {  "downTo": "setting_pic_depth", "upTo": "setting_pic_lrswap_cmp"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicViewPointRightHandler",
                "aftLeftHandler": "SettingPicViewPointLeftHandler",
                "aftEscHandler": "SettingPic3DEscHandler",
                "aftUpHandler": "SettingPic3DRefreshHelpInfo",
                "aftDownHandler": "SettingPic3DRefreshHelpInfo"
            },
            "CaE": [
                {
                    "id": "setting_pic_view_point_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_view_point_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"},
                    "nav": {"upTo": "setting_pic_lrswap_cmp", "downTo": "setting_pic_depth"}

                },
                {
                    "id": "setting_pic_view_point_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_view_point_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_view_point_slider_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_view_point_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_view_point_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                },
                {
                    "id":"setting_pic_view_point_text_1",
                    "description":"左边滑动数值",
                    "CaEType":"div",
                    "classes":{
                        normal:"setting_snd_equalizer_hz_0_text_1",
                        disable:"setting_snd_equalizer_hz_0_text_1_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_view_point_slider_line",
                "sliderId": "setting_pic_view_point_slider",
                "completeId": "setting_pic_view_point_slider_complete",
                "sliderSpanId": "setting_pic_view_point_text_1",
                "sliderMinValueId": "setting_pic_view_point_min_val",
                "sliderMaxValueId": "setting_pic_view_point_max_val",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus"
            }
        },

        {
            "id": "setting_pic_depth",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            "disable": false,
            "firstFocusId": "setting_pic_depth_slider",
            "nav": {  "downTo": "setting_pic_3dto2d_cmp", "upTo": "setting_pic_view_point"},
            "classes": {
                "normal": "setting_snd_equalizer_hz_0",
                "focus": "setting_snd_equalizer_hz_0",
                "disable": "setting_snd_equalizer_hz_0_disable",
                "selected": "setting_snd_equalizer_hz_0_focus"
            },
            "handler": {
                "aftRightHandler": "SettingPicDepthRightHandler",
                "aftLeftHandler": "SettingPicDepthLeftHandler",
                "aftEscHandler": "SettingPic3DEscHandler",
                "aftUpHandler": "SettingPic3DRefreshHelpInfo",
                "aftDownHandler": "SettingPic3DRefreshHelpInfo"
            },
            "CaE": [
                {
                    "id": "setting_pic_depth_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar", "disable": "defaultbarDisable"}
                },

                {
                    "id": "setting_pic_depth_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "classes": {"normal": "slider", "focus": "slider_focus", disable: "sliderDisable"},
                    "nav": {"upTo": "setting_pic_view_point", "downTo": "setting_pic_3dto2d_cmp"}

                },
                {
                    "id": "setting_pic_depth_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_slider_img_normal",
                        "focus": "setting_snd_equalizer_hz_0_slider_img_focus",
                        "disable": "setting_snd_equalizer_hz_0_slider_img_disable"
                    }
                },
                {
                    "id": "setting_pic_depth_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed", "disable": "completedDisable"}
                },
                {
                    "id": "setting_pic_depth_slider_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {
                        "normal": "setting_snd_equalizer_hz_0_text_1",
                        "disable": "setting_snd_equalizer_hz_0_text_1_disable"
                    }
                },
                {
                    "id": "setting_pic_depth_min_val",
                    "description": "滑动的min",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_min_val",
                        disable: "setting_snd_equalizer_hz_0_slider_min_val_disable"
                    }
                },
                {
                    "id": "setting_pic_depth_max_val",
                    "description": "滑动的max",
                    "CaEType": "div",
                    "classes": {
                        normal: "setting_snd_equalizer_hz_0_slider_max_val",
                        disable: "setting_snd_equalizer_hz_0_slider_max_val_disable"
                    }
                },
                {
                    "id":"setting_pic_depth_text_1",
                    "description":"左边滑动数值",
                    "CaEType":"div",
                    "classes":{
                        normal:"setting_snd_equalizer_hz_0_text_1",
                        disable:"setting_snd_equalizer_hz_0_text_1_disable"
                    }
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_depth_slider_line",
                "sliderId": "setting_pic_depth_slider",
                "completeId": "setting_pic_depth_slider_complete",
                "sliderSpanId": "setting_pic_depth_text_1",
                "sliderMinValueId": "setting_pic_depth_min_val",
                "sliderMaxValueId": "setting_pic_depth_max_val"
            }
        },

        {
            "id": "setting_pic_3dto2d_cmp",
            "description": "sonic 控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {
                "upTo": "setting_pic_depth",
                "downTo": "setting_pic_3dmode_cmp"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'SettingPic3Dto2DEnterHandler',//点击enter事件后处理开关转换
                "aftEscHandler": "SettingPic3DEscHandler",
                "aftUpHandler": "SettingPic3DRefreshHelpInfo",
                "aftDownHandler": "SettingPic3DRefreshHelpInfo"
            }
        }
    ];
    return PageDataSettingPic3D;
}

function onSettingPic3DClose() {
    try {
        CloseSndHelpInfoPage();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function onSettingPic3DOpen() {
    try {
        DBG_INFO('onSettingPic3DOpen');
        for(var i=0; i< 3;i++){
            Pic3DModeIndexDelMarquee(i);
        }
        Pic3DModeIndexAddMarquee(this.data.setting_pic_3dmode_cmp.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function onSettingPic3DDestroy() {
    try {
        hiWebOsFrame.SettingPic3D = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3DEscHandler() {
    try {
        RefreshSomeFirPageDisableItem(); //退出时更新下；
        hiWebOsFrame.SettingPic3D.close();
        hiWebOsFrame.SettingPic3D.origin.open();
        hiWebOsFrame.SettingPic3D.origin.hiFocus();
        hiWebOsFrame.SettingPic3D.origin.rewriteDataOnly();
        hiWebOsFrame.SettingPic3D.destroy();

        if('EU' == InitArea){
            var helpInfo = PageDataPicAdvanced.operateData.helpInfo['setting_pic_advanced_3d_cmp'];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_advanced_page_new');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 175 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var PageDataSettingPic3D = {

    "setting_pic_3dmode_text_0": {Data: "3D Mode", disable: false},
    "setting_pic_lrswap_text_0": {Data: "L-R Swap", disable: false},
    "setting_pic_view_point_text_0": {Data: "View Point", disable: false},
    "setting_pic_depth_text_0": {Data: "Depth", disable: false},
    "setting_pic_3dto2d_text_0": {Data: "3D to 2D", disable: false},

    "setting_pic_view_point_text_separate": {Data: ":", disable: false},
    "setting_pic_depth_text_separate": {Data: ":", disable: false},

    "setting_pic_3dmode_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Off"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Auto"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "2D to 3D"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Side by Side"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Top and Bottom"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Line by Line"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Vertical Stripe"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Checker Board"}
            },
            {
                "setting_pic_3dmode_cmp_item_text": {Data: "Frame Sequential"}
            }
        ],
        disableItem: []
    },
    "setting_pic_lrswap_cmp": {
        DataSelectedIndex: 0,
        SelectedIndex: 0,
        Data: [
            {
                "setting_pic_lrswap_cmp_item_text": {Data: "Left-Right"}
            },
            {
                "setting_pic_lrswap_cmp_item_text": {Data: "Right-Left"}
            }
        ]
    },


    "setting_pic_view_point": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }
    },
    "setting_pic_depth": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 10},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 0   //显示的数值
        }
    },
    "setting_pic_3dto2d_cmp": {
        Data: {
            switchType: false,
            switchText: ''
        },
        disable: false
    },


    "operateData": {
        helpInfo:{
            'setting_pic_3dmode_cmp': {
                title: '3D Mode',
                content: 'Select appropriate 3D mode for viewing according to the image'
            },
            'setting_pic_lrswap_cmp': {
                title: 'L-R Swap',
                content: 'This function allows you to correct the images seen by the left and right eye'
            },
            'setting_pic_view_point': {
                title: 'View Point',
                content: 'Adjusts the view point of 3D images'
            },
            'setting_pic_depth': {
                title: 'Depth',
                content: 'Adjusts the depth of field of 3D images'
            },
            'setting_pic_3dto2d_cmp': {
                title: '3D to 2D',
                content: 'Converts 3D images to 2D'
            }
        },

        "pic3dModeMarqueeLength": 12,

        "setting_pic_3dmode_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Off"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Auto"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "2D to 3D"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Side by Side"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Top and Bottom"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Line by Line"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Vertical Stripe"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Checker Board"}
                },
                {
                    "setting_pic_3dmode_cmp_item_text": {Data: "Frame Sequential"}
                }
            ],
            disable: false,
            disableItem: []
        },
        "setting_pic_lrswap_cmp": {
            DataSelectedIndex: 0,
            SelectedIndex: 0,
            Data: [
                {
                    "setting_pic_lrswap_cmp_item_text": {Data: "Left-Right"}
                },
                {
                    "setting_pic_lrswap_cmp_item_text": {Data: "Right-Left"}
                }
            ],
            disable: false
        },

        "setting_pic_view_point": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 10},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            },
            disable: false
        },
        "setting_pic_depth": {
            Data: {
                initPosition: 'min',
                enable: true,
                range: {min: 0, max: 10},
                size: { barWidth: 210, sliderWidth: 16 },
                step: 1,
                spanstyle: "int",
                setDefalutValue: 0   //显示的数值
            },
            disable: false
        },
        "setting_pic_3dto2d_cmp": {
            switchType: false,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            },
            disable: false
        }
    },
    rewrite: "SettingPic3DRewrite",
    "langData": {
        "Off": [],
        "Auto": [],
        "2D to 3D": [],
        "Side by Side": [],
        "Top and Bottom": [],
        "Line by Line": [],
        "Vertical Stripe": [],
        "Checker Board": [],
        "Frame Sequential": [],
        "3D Mode": [],
        "L-R Swap": [],
        "View Point": [],
        "Depth": [],
        "3D to 2D": [],
        "Left-Right": [],
        "Right-Left": []
    }
//        flipSwitchRewrite: "myFlipSwitchRewrite"


}


function SettingPic3DRewrite(pageData) {
    try {
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#setting_pic_view_point_slider_cmp").css('float', dir_1);
        $("#setting_pic_depth_slider_cmp").css('float', dir_1);
        $("#setting_pic_3dto2d_cmp").css('float', dir_1);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {

        DBG_INFO("SettingPic3DRewrite");
        var pic3DMode = pageData.operateData.setting_pic_3dmode_cmp.DataSelectedIndex;
        DBG_INFO("pic3DMode: " + pic3DMode);
        NaviBarRewriteEasy(pageData, "setting_pic_3dmode_cmp", pic3DMode);
        pageData.setting_pic_3dmode_cmp.disable = pageData.operateData.setting_pic_3dmode_cmp.disable;
        pageData.setting_pic_3dmode_text_0.disable = pageData.operateData.setting_pic_3dmode_cmp.disable;

        if (false == pageData.setting_pic_3dmode_cmp.disable) {
            pageData.setting_pic_3dmode_cmp.disableItem = pageData.operateData.setting_pic_3dmode_cmp.disableItem;
            DBG_INFO('3d mode disable item: ' + pageData.operateData.setting_pic_3dmode_cmp.disableItem);
        }

        var picLRSwap = pageData.operateData.setting_pic_lrswap_cmp.DataSelectedIndex;
        DBG_INFO("picLRSwap: " + picLRSwap);
        NaviBarRewriteEasy(pageData, "setting_pic_lrswap_cmp", picLRSwap);
        pageData.setting_pic_lrswap_cmp.disable = pageData.operateData.setting_pic_lrswap_cmp.disable;
        pageData.setting_pic_lrswap_text_0.disable = pageData.operateData.setting_pic_lrswap_cmp.disable;

        var viewPointVal = pageData.operateData.setting_pic_view_point.Data.setDefalutValue;
        DBG_INFO("viewPointVal: " + viewPointVal);
        SliderRewriteEasy(pageData, "setting_pic_view_point", viewPointVal);
        pageData.setting_pic_view_point.disable = pageData.operateData.setting_pic_view_point.disable;
        pageData.setting_pic_view_point_text_0.disable = pageData.operateData.setting_pic_view_point.disable;
        pageData.setting_pic_view_point_text_separate.disable = pageData.operateData.setting_pic_view_point.disable;


        var pic3DDepthVal = pageData.operateData.setting_pic_depth.Data.setDefalutValue;
        DBG_INFO("pic3DDepthVal: " + pic3DDepthVal);
        SliderRewriteEasy(pageData, "setting_pic_depth", pic3DDepthVal);
        pageData.setting_pic_depth.disable = pageData.operateData.setting_pic_depth.disable;
        pageData.setting_pic_depth_text_0.disable = pageData.operateData.setting_pic_depth.disable;
        pageData.setting_pic_depth_text_separate.disable = pageData.operateData.setting_pic_depth.disable;

        var pic3Dto2D = pageData.operateData.setting_pic_3dto2d_cmp.switchType;
        DBG_INFO("pic3Dto2D: " + pic3Dto2D);
        FlipSwitchRewriteEasy(pageData, "setting_pic_3dto2d_cmp", pic3Dto2D);
        pageData.setting_pic_3dto2d_cmp.disable = pageData.operateData.setting_pic_3dto2d_cmp.disable;
        pageData.setting_pic_3dto2d_text_0.disable = pageData.operateData.setting_pic_3dto2d_cmp.disable;

//        RefreshPic3DCmpStyles();

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function SettingPic3DModeEnterHandler() {
    try {
        DBG_INFO("SettingPic3DModeEnterHandler");
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var pic3DModeCmp = this;
            NaviBarEasyChange.call(this, pic3DModeCmp, this.SelectedIndex);
            model.video.setEnum3dMode(this.SelectedIndex);
            SetRecentUse("3D Mode", 0, FirPageSndIdx.Pic3D);
//            SettingPic3DInit();
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3DModeBefUpHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
            this.page.rewriteDataOnly();
            this.page.hiFocus();
        }
        Pic3DModeIndexDelMarquee(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3DModeBefDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            this.page.rewrite();
            this.page.rewriteDataOnly();
            this.page.hiFocus();
        }
        Pic3DModeIndexDelMarquee(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}



function SettingPic3DModeAftUpHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        Pic3DModeIndexAddMarquee(this.SelectedIndex);
        SettingPic3DRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3DModeAftDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        Pic3DModeIndexAddMarquee(this.SelectedIndex);
        SettingPic3DRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicLRSwapEnterHandler() {
    try {

        DBG_INFO("SettingPicLRSwapEnterHandler");
        if (this.DataSelectedIndex != this.SelectedIndex) {
            var picLRSwapCmp = this;
            NaviBarEasyChange.call(this, picLRSwapCmp, this.SelectedIndex);
            this.page.rewriteDataOnly();
            model.video.set3dLrswitch(this.SelectedIndex);
            SetRecentUse("L-R Swap", 0, FirPageSndIdx.Pic3D);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function SettingPicLRSwapUpHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        SettingPic3DRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicLRSwapDownHandler() {
    try {
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
        }
        SettingPic3DRefreshHelpInfo();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicViewPointRightHandler() {
    try {
        var picViewPointCmp = this;
        var viewPointVal = picViewPointCmp.page.operateData[picViewPointCmp.id].Data.setDefalutValue;

        DBG_INFO("viewPointVal " + viewPointVal);
        viewPointVal += 1;
        if (viewPointVal < 0) {
            viewPointVal = 0;
        }
        if (viewPointVal > 10) {
            viewPointVal = 10;
        }

        SliderEasyChange.call(this, picViewPointCmp, viewPointVal);
        model.video.set3dViewPoint(viewPointVal);
        SetRecentUse("View Point", 0, FirPageSndIdx.Pic3D)
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicViewPointLeftHandler() {
    try {
        var picViewPointCmp = this;
        var viewPointVal = picViewPointCmp.page.operateData[picViewPointCmp.id].Data.setDefalutValue;

        DBG_INFO("viewPointVal " + viewPointVal);
        viewPointVal -= 1;
        if (viewPointVal < 0) {
            viewPointVal = 0;
        }
        if (viewPointVal > 10) {
            viewPointVal = 10;
        }

        SliderEasyChange.call(this, picViewPointCmp, viewPointVal);
        model.video.set3dViewPoint(viewPointVal);

        SetRecentUse("View Point", 0, FirPageSndIdx.Pic3D)

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicDepthRightHandler() {
    try {
        var picDepthCmp = this;
        var depthVal = picDepthCmp.page.operateData[picDepthCmp.id].Data.setDefalutValue;

        DBG_INFO("depthVal " + depthVal);
        depthVal += 1;
        if (depthVal < 0) {
            depthVal = 0;
        }
        if (depthVal > 10) {
            depthVal = 10;
        }

        SliderEasyChange.call(this, picDepthCmp, depthVal);
        model.video.set3dDepth(depthVal);

        SetRecentUse("Depth", 0, FirPageSndIdx.Pic3D)


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicDepthLeftHandler() {
    try {
        var picDepthCmp = this;
        var depthVal = picDepthCmp.page.operateData[picDepthCmp.id].Data.setDefalutValue;

        DBG_INFO("depthVal " + depthVal);
        depthVal -= 1;
        if (depthVal < 0) {
            depthVal = 0;
        }
        if (depthVal > 10) {
            depthVal = 10;
        }

        SliderEasyChange.call(this, picDepthCmp, depthVal);
        model.video.set3dDepth(depthVal);

        SetRecentUse("Depth", 0, FirPageSndIdx.Pic3D)

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3Dto2DEnterHandler() {
    try {
        var pic3Dto2D = model.video.get3d3dto2d();
        DBG_INFO("pic3Dto2D before change: " + pic3Dto2D);
        DBG_INFO("model.sound.get3d3dto2d(" + Bool2Num(!pic3Dto2D) + ")");
        var pic3Dto2DCmp = this;
        FlipSwitchEasyChange.call(this, pic3Dto2DCmp, !pic3Dto2D);

        SetRecentUse("3D to 2D", 0, FirPageSndIdx.Pic3D)

        model.video.set3d3dto2d(Bool2Num(!pic3Dto2D));
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 * 刷新3D页面字体样式（是否disable等等）
 * @constructor
 */
function RefreshPic3DCmpStyles() {
    try {
        $("#setting_pic_3dmode_text_0").attr("class", "setting_snd_auto_volume_text_0");
        $("#setting_pic_lrswap_text_0").attr("class", "setting_snd_auto_volume_text_0");
        $("#setting_pic_view_point_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
        $("#setting_pic_view_point_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
        $("#setting_pic_3dmode_text_1").attr("class", "setting_snd_equalizer_hz_0_text_1");
        $("#setting_pic_depth_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0");
        $("#setting_pic_depth_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate");
        $("#setting_pic_depth_text_1").attr("class", "setting_snd_equalizer_hz_0_text_1");
        $("#setting_pic_3dto2d_text_0").attr("class", "setting_snd_auto_volume_text_0");


        if (true == PageDataSettingPic3D.setting_pic_3dmode_cmp.disable) {
            $("#setting_pic_3dmode_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
        }
        if (true == PageDataSettingPic3D.setting_pic_lrswap_cmp.disable) {
            $("#setting_pic_lrswap_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
        }

        if (true == PageDataSettingPic3D.setting_pic_view_point.disable) {
            $("#setting_pic_view_point_text_0").attr("class", "setting_snd_auto_volume_text_0_disable");
            $("#setting_pic_view_point_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
            $("#setting_pic_view_point_text_1").attr("class", "setting_snd_equalizer_hz_0_text_1_disable");
        }

        if (true == PageDataSettingPic3D.setting_pic_depth.disable) {
            $("#setting_pic_depth_text_0").attr("class", "setting_snd_equalizer_hz_0_text_0_disable");
            $("#setting_pic_depth_text_separate").attr("class", "setting_snd_equalizer_hz_0_text_separate_disable");
            $("#setting_pic_depth_text_1").attr("class", "setting_snd_equalizer_hz_0_text_1_disable");
        }
        if (true == PageDataSettingPic3D.setting_pic_3dto2d_cmp.disable) {
            $("#setting_pic_3dto2d_text_0").attr("class", "setting_snd_auto_volume_text_0_disable")
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3DModeAftLeftHandler(){
    try {
        for (var i = 0; i < 9; i++) {
            Pic3DModeIndexDelMarquee(i);
        }
        Pic3DModeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3DModeAftRightHandler(){
    try {
        for (var i = 0; i < 9; i++) {
            Pic3DModeIndexDelMarquee(i);
        }
        Pic3DModeIndexAddMarquee(this.SelectedIndex);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function Pic3DModeIndexDelMarquee(idx){
    try {
        var marquee = $("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + idx + " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + idx + " marquee").html();
            var marquee = $("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + idx).html(htmlText);
        }
        $("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + idx).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function Pic3DModeIndexAddMarquee(idx){
    try {
        for (var i = 0; i < 9; i++) {
            if($("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + i).length == 0){
                continue;
            }
            $("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + i).css("overflow", "hidden").css("white-space", "nowrap").css("text-overflow", "ellipsis");
            if (i == idx) {
                var htmlText = $("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + i).html();
                if (htmlText.length > PageDataSettingPic3D.operateData.pic3dModeMarqueeLength) {
                    $("#setting_pic_3dmode_cmp_setting_pic_3dmode_cmp_item_text_sys" + i).html('<marquee style="width: 290px" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
                }
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPic3DRefreshHelpInfo(){
    try {
        var curId = hiWebOsFrame.SettingPic3D.currentSelectedTree[0].id;
        var helpInfo = PageDataSettingPic3D.operateData.helpInfo[curId];
        sndHelpInfo.setHelpInfoText(helpInfo.title, helpInfo.content);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}