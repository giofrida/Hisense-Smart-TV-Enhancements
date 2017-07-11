/**
 * Created with JetBrains PhpStorm.
 * User: Lewis
 * Date: 14-3-17
 * Time: 下午3:55
 * To change this template use File | Settings | File Templates.
 */
/**
 * H.position Slider 的左右移动函数
 * @param operadata
 * @param data
 * @constructor
 */
function HSliderMoveRight(operadata, data) {
    this.hiSliderMoveRight();
    if (!!tv) {
        model.video.setPcinHpos(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}

function VSliderMoveRight(operadata, data) {
    this.hiSliderMoveRight();
    if (!!tv) {
        model.video.setPcinVpos(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}

function CSliderMoveRight(operadata, data) {
    this.hiSliderMoveRight();
    if (!!tv) {
        model.video.setVgaClock(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}

function PSliderMoveRight(operadata, data) {
    this.hiSliderMoveRight();
    if (!!tv) {
        model.video.setPcinPhase(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}

function HSliderMoveLeft(operadata, data) {
    this.hiSliderMoveLeft();
    if (!!tv) {
        model.video.setPcinHpos(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}
function VSliderMoveLeft(operadata, data) {
    this.hiSliderMoveLeft();
    if (!!tv) {
        model.video.setPcinVpos(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}
function CSliderMoveLeft(operadata, data) {
    this.hiSliderMoveLeft();
    if (!!tv) {
        model.video.setVgaClock(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}
function PSliderMoveLeft(operadata, data) {
    this.hiSliderMoveLeft();
    if (!!tv) {
        model.video.setPcinPhase(this.SliderValue);
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
}

function rewrite() {

}


var vga = {
    "setting_pic_equalizer_hz_1": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 50},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 1 //显示的数值
        }

    },
    "setting_pic_equalizer_hz_2": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 50},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 1 //显示的数值
        }
    },
    "setting_pic_equalizer_hz_3": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 50},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 1  //显示的数值
        }
    },
    "setting_pic_equalizer_hz_4": {
        Data: {
            initPosition: 'min',
            enable: true,
            range: {min: 0, max: 50},
            size: { barWidth: 210, sliderWidth: 16 },
            step: 1,
            spanstyle: "int",
            setDefalutValue: 1  //显示的数值
        }
    },

    setting_pic_equalizer_hz_0_text_0: {Data: "Auto Adjust"},
    pic_Adjust_btn: {Data: "Adjust"},
    setting_pic_equalizer_hz_1_text_0: {Data: "H.Postion"},
    setting_pic_equalizer_hz_2_text_0: {Data: "V.Postion"},
    setting_pic_equalizer_hz_3_text_0: {Data: "Clock"},
    setting_pic_equalizer_hz_4_text_0: {Data: "Phase"},
    operateData: {

    },
    "langData": {
        "Auto Adjust": ["Auto Adjust:"],
        "Adjust": ["Adjust"],
        "H.Postion":["H.Postion"],
        "V.Postion":["V.Postion"],
        "Clock":["Clock"],
        "Phase":["Phase"]

    },
    rewrite: "rewrite"
}
function adjust() {
    if (tv == true) {
        model.video.PcinStartAutoAdjust();
        model.video.PcinStartAutoAdjustCallback=AutoAdjustchanged;
        debugPrint("Adjust.....");
    }
    SetRecentUse("Display", 0, FirPageSndIdx.PicAdvanced);//增加最近使用的设置0702
//    hiWebOsFrame.VGA.close();
//    hiWebOsFrame.VGA.destroy();


}
function getVGAOperateData(page) {
//    var vga = getPageData(page);
    page.CaE = [
        {
            "id": "setting_pic_equalizer_hz_0_text_0",
            "description": "名称",
            "CaEType": "div"
        },
        {
            "id": "pic_Adjust_btn",
            "description": "名称",
            "CaEType": "div",
            "classes": {
                "normal": "pic_Adjust_btn_list_normal", "focus": "pic_Adjust_btn_list_focus", "disable": "", "selected": ""
            },
            "nav": {  "downTo": "setting_pic_equalizer_hz_1"},
            "handler": {"aftEnterHandler": "adjust"}
        },
        {
            "id": "setting_pic_equalizer_hz_1",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_equalizer_hz_1_slider",
            "nav": {  "downTo": "setting_pic_equalizer_hz_2", "upTo": "pic_Adjust_btn"},
            "classes": {
                "normal": "setting_pic_equalizer_hz_0",
                "focus": "setting_pic_equalizer_hz_0",
                "disable": "setting_pic_equalizer_hz_0_disable",
                "selected": "setting_pic_equalizer_hz_0"
            },
            "handler": {"aftRightHandler": "HSliderMoveRight", "aftLeftHandler": "HSliderMoveLeft"},

            "CaE": [
                {
                    "id": "setting_pic_equalizer_hz_1_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar"}
                },

                {
                    "id": "setting_pic_equalizer_hz_1_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_pic_equalizer_hz_0",
                        "downTo": "setting_pic_equalizer_hz_2"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_1_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {"normal": "setting_pic_equalizer_hz_0_slider_img_normal", "focus": "setting_pic_equalizer_hz_0_slider_img_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_1_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed"}
                },
                {
                    "id": "setting_pic_equalizer_hz_1_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {"normal": "sliderspan"}
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_equalizer_hz_1_slider_line",
                "sliderId": "setting_pic_equalizer_hz_1_slider",
                "completeId": "setting_pic_equalizer_hz_1_slider_complete",
                "sliderSpanId": "setting_pic_equalizer_hz_1_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_equalizer_hz_1_slider_min_val",
                "sliderMaxValueId": "setting_pic_equalizer_hz_1_slider_max_val"
            }

        },
        {
            "id": "setting_pic_equalizer_hz_2",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_equalizer_hz_2_slider",
            "nav": {  "downTo": "setting_pic_equalizer_hz_3", "upTo": "setting_pic_equalizer_hz_1"},
            "classes": {
                "normal": "setting_pic_equalizer_hz_0",
                "focus": "setting_pic_equalizer_hz_0",
                "disable": "setting_pic_equalizer_hz_0_disable",
                "selected": "setting_pic_equalizer_hz_0"
            },
            "handler": {"aftRightHandler": "VSliderMoveRight", "aftLeftHandler": "VSliderMoveLeft"},

            "CaE": [
                {
                    "id": "setting_pic_equalizer_hz_2_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar"}
                },

                {
                    "id": "setting_pic_equalizer_hz_2_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_pic_equalizer_hz_1",
                        "downTo": "setting_pic_equalizer_hz_3"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_2_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {"normal": "setting_pic_equalizer_hz_0_slider_img_normal", "focus": "setting_pic_equalizer_hz_0_slider_img_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_2_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed"}
                },
                {
                    "id": "setting_pic_equalizer_hz_2_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {"normal": "sliderspan"}
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_equalizer_hz_2_slider_line",
                "sliderId": "setting_pic_equalizer_hz_2_slider",
                "completeId": "setting_pic_equalizer_hz_2_slider_complete",
                "sliderSpanId": "setting_pic_equalizer_hz_2_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_equalizer_hz_2_slider_min_val",
                "sliderMaxValueId": "setting_pic_equalizer_hz_2_slider_max_val"
            }

        },
        {
            "id": "setting_pic_equalizer_hz_3",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_equalizer_hz_3_slider",
            "nav": {  "downTo": "setting_pic_equalizer_hz_4", "upTo": "setting_pic_equalizer_hz_2"},
            "classes": {
                "normal": "setting_pic_equalizer_hz_0",
                "focus": "setting_pic_equalizer_hz_0",
                "disable": "setting_pic_equalizer_hz_0_disable",
                "selected": "setting_pic_equalizer_hz_0"
            },
            "handler": {"aftRightHandler": "CSliderMoveRight", "aftLeftHandler": "CSliderMoveLeft"},

            "CaE": [
                {
                    "id": "setting_pic_equalizer_hz_3_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar"}
                },

                {
                    "id": "setting_pic_equalizer_hz_3_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_pic_equalizer_hz_2",
                        "downTo": "setting_pic_equalizer_hz_4"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_3_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {"normal": "setting_pic_equalizer_hz_0_slider_img_normal", "focus": "setting_pic_equalizer_hz_0_slider_img_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_3_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed"}
                },
                {
                    "id": "setting_pic_equalizer_hz_3_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {"normal": "sliderspan"}
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_equalizer_hz_3_slider_line",
                "sliderId": "setting_pic_equalizer_hz_3_slider",
                "completeId": "setting_pic_equalizer_hz_3_slider_complete",
                "sliderSpanId": "setting_pic_equalizer_hz_3_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_equalizer_hz_3_slider_min_val",
                "sliderMaxValueId": "setting_pic_equalizer_hz_3_slider_max_val"
            }

        },
        {
            "id": "setting_pic_equalizer_hz_4",
            "description": "用于显示滑块",
            "CaEType": "Slider",
            disable: false,
            "firstFocusId": "setting_pic_equalizer_hz_4_slider",
            "nav": {   "upTo": "setting_pic_equalizer_hz_3"},
            "classes": {
                "normal": "setting_pic_equalizer_hz_0",
                "focus": "setting_pic_equalizer_hz_0",
                "disable": "setting_pic_equalizer_hz_0_disable",
                "selected": "setting_pic_equalizer_hz_0"
            },
            "handler": {"aftRightHandler": "PSliderMoveRight", "aftLeftHandler": "PSliderMoveLeft"},

            "CaE": [
                {
                    "id": "setting_pic_equalizer_hz_4_slider_line",
                    "description": "滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "defaultbar"}
                },

                {
                    "id": "setting_pic_equalizer_hz_4_slider",
                    "description": "滑块",
                    "CaEType": "div",
                    "nav": {
                        "upTo": "setting_pic_equalizer_hz_3",
                        "downTo": "setting_pic_equalizer_hz_0"
                    },
                    "classes": {"normal": "slider", "focus": "slider_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_4_slider_img",
                    "description": "滑块img",
                    "CaEType": "div",
                    "classes": {"normal": "setting_pic_equalizer_hz_0_slider_img_normal", "focus": "setting_pic_equalizer_hz_0_slider_img_focus"}

                },
                {
                    "id": "setting_pic_equalizer_hz_4_slider_complete",
                    "description": "完成的滑块条",
                    "CaEType": "div",
                    "classes": {"normal": "completed"}
                },
                {
                    "id": "setting_pic_equalizer_hz_4_text_1",
                    "description": "滑动的数值",
                    "CaEType": "div",
                    "classes": {"normal": "sliderspan"}
                }
            ],
            "SliderConfig": {
                "sliderbarId": "setting_pic_equalizer_hz_4_slider_line",
                "sliderId": "setting_pic_equalizer_hz_4_slider",
                "completeId": "setting_pic_equalizer_hz_4_slider_complete",
                "sliderSpanId": "setting_pic_equalizer_hz_4_text_1",
                "sliderNormalClass": "SliderNormal",
                "sliderFocusClass": "SliderFocus",
                "sliderMinValueId": "setting_pic_equalizer_hz_4_slider_min_val",
                "sliderMaxValueId": "setting_pic_equalizer_hz_4_slider_max_val"
            }

        },

        {
            "id": "setting_pic_equalizer_hz_0_text_0",
            "description": "120hz频率文字 0",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_equalizer_hz_1_text_0",
            "description": "500hz频率文字 0",
            "CaEType": "div"
        },

        {
            "id": "setting_pic_equalizer_hz_2_text_0",
            "description": "1.5khz频率文字 0",
            "CaEType": "div"
        },
        {
            "id": "setting_pic_equalizer_hz_3_text_0",
            "description": "5khz频率文字 0",
            "CaEType": "div"
        },

        {
            "id": "setting_pic_equalizer_hz_4_text_0",
            "description": "10khz频率文字 0",
            "CaEType": "div"
        }
    ];
    try{
    if (tv == true) {
        var h = model.video.getPcinHpos();
        debugPrint("getPcinHposExist:" + h);
        vga.setting_pic_equalizer_hz_1.Data.setDefalutValue = h;
        var v = model.video.getPcinVpos();
        vga.setting_pic_equalizer_hz_2.Data.setDefalutValue = v;
        var c = model.video.getVgaClock();
        vga.setting_pic_equalizer_hz_3.Data.setDefalutValue = c;
        var p = model.video.getPcinPhase();
        vga.setting_pic_equalizer_hz_4.Data.setDefalutValue = p;
    }}
    catch(ex){
        debugPrint("ex:"+ex);
    }
    return vga;
}
function returnVGADisplay(){
    hiWebOsFrame.createPage('setting_pic_advanced_page',null, null, null,function(a){
        a.open();
        a.hiFocus();

    });
    this.destroy();
}
function AutoAdjustchanged(){
    var h = model.video.getPcinHpos();
    model.video.onPcinHposChaged = PcinHposChaged;
    debugPrint("getPcinHposExist:" + h);
//    vga.setting_pic_equalizer_hz_1.Data.setDefalutValue = h;
    var v = model.video.getPcinVpos();
    model.video.onPcinVposChaged = PcinVposChaged;
//    vga.setting_pic_equalizer_hz_2.Data.setDefalutValue = v;
    var c = model.video.getVgaClock();
//    vga.setting_pic_equalizer_hz_3.Data.setDefalutValue = c;
    model.video.onVgaClockChaged = VgaClockChaged;
    var p = model.video.getPcinPhase();
//    vga.setting_pic_equalizer_hz_4.Data.setDefalutValue = p;
    model.video.onPcinPhaseChaged=PcinPhaseChaged;
//    this.page.rewriteDataOnly();
}

function VGAdestroy(){
    hiWebOsFrame.VGA=null;
}
function PcinHposChaged(v){
    hiWebOsFrame.VGA.getCaE("setting_pic_equalizer_hz_1").hiSliderValue(v);
    DBG_INFO("************Hpos:"+v);
    hiWebOsFrame.VGA.rewriteDataOnly();
}
function PcinVposChaged(v){
    hiWebOsFrame.VGA.getCaE("setting_pic_equalizer_hz_2").hiSliderValue(v);
    DBG_INFO("************Vpos:"+v);
    hiWebOsFrame.VGA.rewriteDataOnly();
}
function VgaClockChaged(v){
    hiWebOsFrame.VGA.getCaE("setting_pic_equalizer_hz_3").hiSliderValue(v);
    DBG_INFO("************Clock:"+v);
    hiWebOsFrame.VGA.rewriteDataOnly();
}
function PcinPhaseChaged(v){
    hiWebOsFrame.VGA.getCaE("setting_pic_equalizer_hz_4").hiSliderValue(v);
    DBG_INFO("************Phase:"+v);
    hiWebOsFrame.VGA.rewriteDataOnly();
}

