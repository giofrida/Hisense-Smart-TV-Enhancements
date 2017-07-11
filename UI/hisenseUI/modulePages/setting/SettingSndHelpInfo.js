/**
 * Created by ghl on 14-9-18.
 */

function getSettingSndHelpInfoData(opts) {
    try {
//    SettingSndHelpInfoInit();
        opts.CaE = [
            {
                "id": "setting_snd_help_info_title",
                "description": "setting_snd_help_info_title",
                "CaEType": "div"
            },
            {
                "id": "setting_snd_help_info_content",
                "description": "setting_snd_help_info_content",
                "CaEType": "div"
            }

        ];
        return sndHelpInfo.pageData;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndHelpInfoClass() {
    var self = this;

    self.id = 'setting_snd_help_info';
    self.defaultHeight = 155;
    self.pageData = {
        "setting_snd_help_info_title": {Data: ""},
        "setting_snd_help_info_content": {Data: ""},
        "langData": {},
        "rewrite": SettingSndHelpInfoRewrite
    };

    var pageOriPos = {
        TOP_LEFT: 'topleft',
        BOTTOM_RIGHT: 'bottomright'
    };

    self.ScaleCfg = {};

    var opData = {
        //'tlwhCfg':{
        //    'setting_pic_mode':{
        //       top: 770,
        //        left: 265,
        //        width:1390
        //    },
        //    ''
        //},
        "setting_snd_help_info_title": {Data: ""},
        "setting_snd_help_info_content": {Data: ""},

    };

    self.pageData.operateData = opData;


    self.onSettingSndHelpInfoOpen = function () {
        try {

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.onSettingSndHelpInfoClose = function () {
        try {

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };
    self.onSettingSndHelpInfoDestroy = function () {
        try {

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };


    self.setHelpInfoText = function (titleStr, contentStr, top, left) {
        try {
            if ('EU' != InitArea) {
                return;
            }

            self.pageData.operateData.setting_snd_help_info_title.Data = titleStr;
            self.pageData.operateData.setting_snd_help_info_content.Data = contentStr;

            !!titleStr && false == (titleStr in self.pageData.langData) && (typeof langPackages[titleStr] != UNDEFINED_DEFSTR) && (self.pageData.langData[titleStr] = funcopyobj(langPackages[titleStr]));
            !!titleStr && false == (contentStr in self.pageData.langData) && (typeof langPackages[contentStr] != UNDEFINED_DEFSTR) && (self.pageData.langData[contentStr] = funcopyobj(langPackages[contentStr]));

            if (!!hiWebOsFrame[self.id] && hiWebOsFrame.isPageExist(self.id)) {
                hiWebOsFrame[self.id].rewriteDataOnly();
            }

            if (arguments.length == 4) {
                self.setHelpInfoPosZIndex(top, left);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.setHelpInfoPosZIndex = function (top, left, width, height, zIndex) {
        try {
            DBG_INFO('setHelpInfoPosZIndex: tlwhz[' + top + ', ' + left + ', ' + width + ', ' + height + ', ' + zIndex + '];');
            typeof top == UNDEFINED_DEFSTR && (top = 932);
            typeof left == UNDEFINED_DEFSTR && (left = 449);
            typeof width == UNDEFINED_DEFSTR && (width = 1022);
            typeof height == UNDEFINED_DEFSTR && (height = 180);

            $('#setting_snd_help_info').css('top', top + 'px');
            $('#setting_snd_help_info').css('left', left + 'px');
            $('#setting_snd_help_info').css('width', width + 'px');
            $('#setting_snd_help_info').css('height', height + 'px');

            typeof zIndex != UNDEFINED_DEFSTR && ($('#setting_snd_help_info').css('z-index', zIndex));

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };


    function ScaleCfgInit() {
        try {
            var curResolution = tv ? model.system.getCurResolution() : 'HD';
            DBG_INFO("model.system.getCurResolution(): " + curResolution);
            var SADeviceMsg = tv ? Hisense.File.read("am_tv_model_name", 0) : "default_data";
            DBG_INFO('Hisense.File.read("am_tv_model_name",0)' + SADeviceMsg);

            if ("HIS_EPOS_HD" == curResolution) {
                if (SADeviceMsg == 'LHD32K3110WAM') {
                    self.ScaleCfg = {
                        scale: 0.7115,
                        oriPos: pageOriPos.BOTTOM_RIGHT
                    }
                } else {
                    self.ScaleCfg = {
                        scale: 0.7115,
                        oriPos: pageOriPos.TOP_LEFT
                    }
                }
            } else if ("HIS_EPOS_FHD" == curResolution && 'HE32M2161HWTS' == SADeviceMsg) {
                self.ScaleCfg = {
                    scale: 0.7115,
                    oriPos: pageOriPos.BOTTOM_RIGHT
                }
            } else {
                self.ScaleCfg = {
                    scale: 1,
                    oriPos: pageOriPos.TOP_LEFT
                }
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function getPageScale() {
        try {
            //'scale(0.7115)'
            var scale = 1;
            if (typeof self.ScaleCfg.scale == UNDEFINED_DEFSTR) {
                ScaleCfgInit();
            }

            scale = self.ScaleCfg.scale;
            return scale;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function getPageOriPos() {
        try {
            //$('body').css('transform', 'scale(0.7115)');
            //$('body').css('transform-origin', 'bottom right');
            //$('body').css('transform', 'scale(0.7115)');
            //$('body').css('transform-origin', 'top left');
            //$('body').css('transform', 'scale(0.7115)');
            //$('body').css('transform-origin', 'bottom right');

            var oriStr = pageOriPos.TOP_LEFT;
            if (typeof self.ScaleCfg.oriPos == UNDEFINED_DEFSTR) {
                ScaleCfgInit();
            }

            oriStr = self.ScaleCfg.oriPos;
            return oriStr;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }


    self.getPosZIndex = function (pageId) {
        var scale = getPageScale();
        var topOffset = 1080 * (1 - scale) / 2;
        var leftOffset = 1920 * (1 - scale) / 2;

        var oriPos = getPageOriPos();
        var pos;
        if (oriPos == pageOriPos.TOP_LEFT) {
            pos = {
                top: Math.round($("#" + pageId).offset().top / scale),
                left: Math.round($("#" + pageId).offset().left / scale),
                width: Math.round($("#" + pageId).offset().width / scale),
                height: Math.round($("#" + pageId).offset().height / scale),
                zIndex: parseInt($("#" + pageId).css('z-index'))
            };
        } else if (oriPos == pageOriPos.BOTTOM_RIGHT) {
            pos = {
                top: Math.round(($("#" + pageId).offset().top - topOffset * 2) / scale),
                left: Math.round(($("#" + pageId).offset().left - leftOffset * 2) / scale),
                width: Math.round($("#" + pageId).offset().width / scale),
                height: Math.round($("#" + pageId).offset().height / scale),
                zIndex: parseInt($("#" + pageId).css('z-index'))
            };
        } else {
            pos = {
                top: Math.round(($("#" + pageId).offset().top - topOffset) / scale),
                left: Math.round(($("#" + pageId).offset().left - leftOffset) / scale),
                width: Math.round($("#" + pageId).offset().width / scale),
                height: Math.round($("#" + pageId).offset().height / scale),
                zIndex: parseInt($("#" + pageId).css('z-index'))
            };
        }

        //tv适配
        tv == true && scale != 1 && oriPos == pageOriPos.BOTTOM_RIGHT && (pos.left += 1) && (pos.width -= 1);

        DBG_INFO('getPosOfPage: ' + JSON.stringify(pos));
        return pos;
    };

    function SettingSndHelpInfoRewrite(pageData) {
        try {
            DBG_INFO("SettingSndHelpInfoRewrite()");
            pageData.setting_snd_help_info_title.Data = pageData.operateData.setting_snd_help_info_title.Data;
            pageData.setting_snd_help_info_content.Data = pageData.operateData.setting_snd_help_info_content.Data;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
}

var sndHelpInfo = new SettingSndHelpInfoClass();







