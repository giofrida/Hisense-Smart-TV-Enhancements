/*页面中要显示的文字封装成JSON对象*/
var pvrData = {
    "program_name": {Data: ""},
    "programProgressTitle": {Data: getMarketLangKey("Program Progress:", "Program Progress:")},
    "programProgressBar": {
        "Data": {
            "programProgressValue": {Data: ""}
        },
        "DefaultValue": 0/*opeData.programProgressbar.DefaultValue = getTShiftCurDVBTime()*/
    },
    "recordProgressTitle": {Data: getMarketLangKey("Record:", "Record")},
    "recordProgressText": {Data: ""},
    "recordProgressBar": {
        "Data": {
            "recordProgressValue": {Data: ""}
        },
        "DefaultValue": 0/*opeData.recordProgressbar.DefaultValue = getTShiftCurDVBTime();*/
    },
    "begin_time": {Data: ""},
    "end_time": {Data: ""},
    /*解析的最小标签是div，div套div，内层的东西就不会显示，可以把CaEType设为container，然后这样注册*/
    "button_media": {
        Data: {
            //"block_in_media": {Data: ""},
            "text_media": {Data: "SA" == InitArea ? "pvr file" : "PVR file"}
        }
    },
    "button_stop": {
        Data: {
            "block_in_stop": {Data: ""},
            "text_stop": {Data: "Stop"}
        }
    },
    "button_standby_record": {
        Data: {
            "circle_in_standby": {Data: ""},
            "text_standby": {Data: "StandbyRecord"}
        }
    },
    "recordSurplusMinutes": {Data: "剩余空间最多可录制15Min"},
    "operateData": {
        "proName": {Data: "Animal World 121"},
        "programProgressBar": {
            "Data": {
                "programProgressValue": {Data: ""}
            },
            "DefaultValue": 0
        },
        "currentRecordTime": {Data: "08:00"},
        "recordProgressBar": {
            "Data": {
                "recordProgressValue": {Data: ""}
            },
            "DefaultValue": 0
        },
        "beginTime": {Data: "15:00"},
        "endTime": {Data: "16:30"},
        //"recordSurplusMinutes": {Data: "剩余空间最多可录制15Min"},
        "exittimeout": null,
        "beginUTCTime": null
    },
    "langData": {
        "Stop": [],
        "StandbyRecord": [],
        "Record": [],
        "Record:": [],
        "Program Progress": [],
        "Program Progress:": [],
        "pvr file": [],
        "PVR file": []
    },
    rewrite: function (pageData) {
        try {
            var opeData = pageData.operateData;
            pageData.program_name.Data = opeData.proName.Data;
            pageData.recordProgressText.Data = opeData.currentRecordTime.Data;

            pageData.programProgressBar.MaxValue = opeData.programProgressBar.MaxValue;
            pageData.programProgressBar.MinValue = opeData.programProgressBar.MinValue;
            pageData.programProgressBar.DefaultValue = opeData.programProgressBar.DefaultValue;

            pageData.recordProgressBar.MaxValue = opeData.recordProgressBar.MaxValue;
            pageData.recordProgressBar.MinValue = opeData.recordProgressBar.MinValue;
            pageData.recordProgressBar.DefaultValue = opeData.recordProgressBar.DefaultValue;

            pageData.begin_time.Data = opeData.beginTime.Data;
            pageData.end_time.Data = opeData.endTime.Data;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
};
/*获取要显示的文字，并且将页面中要改变样式的元素封装成JSON对象*/
function getPvrPageData(page) {
    page.CaE = [
        /*节目名称*/
        {
            "id": "program_name",
            "description": "节目名称",
            "CaEType": "div"
        },
        /*节目进度条的标题文字*/
        {
            "id": "programProgressTitle",
            "description": "Program Progress",
            "CaEType": "div",
            "classes": {"normal": "programProgressTitleNormal"}
        },
        /*节目进度条*/
        {
            "id": "programProgressBar",
            "description": "节目进度条的外框",
            "CaEType": "ProgressBar",
            "disable": false,
            "classes": {
                "normal": "programProgressBarNormal"
            },
            "CaE": [
                /*节目进度条的进度值*/
                {
                    "id": "programProgressValue",
                    "description": "节目进度条的进度值",
                    "CaEType": "div",
                    "classes": {"normal": "programProgressValueNormal"}
                }
            ],
            "ProgressBarConfig": {
                "PBTitleid": "programProgressTitle",//进度条的标题
                "PBProcessId": "programProgressValue",//进度条的进程id
                "ShowTextId": "",//显示进度条的进度值的id
                "ShowTextIsMoved": false,//进度值是否移动 true-移动false-不移动
                "PBType": "direction",//进度条的类型 direction-普通类型 animate-动画类型
                "StepDuration": 1000,//每增加1%所需的时间，单位ms
                "MinValue": 0,//进度条的最小值
                "MaxValue": 600,//进度条的最大值
                "Width": 250,//进度条的宽度
                "TextFormat": "per",//ShowText的显示形式，“per”表示百分数，“fra”表示分数，其他则为“自定义函数”
                "CompleteCallBack": ""//完成时执行的回调函数
            },
            "globalFocus": false
        },
        /*录制进度条的标题文字*/
        {
            "id": "recordProgressTitle",
            "description": "Record:",
            "CaEType": "div",
            "classes": {"normal": "recordProgressTitleNormal"}
        },
        /*record进度条上方显示的当前进度值文字*/
        {
            "id": "recordProgressText",
            "description": "录制进度条上方显示的的进度值文字",
            "CaEType": "div",
            "classes": {"normal": "recordProgressTextNormal"}
        },
        /*录制进度条*/
        {
            "id": "recordProgressBar",
            "description": "录制进度条的外框",
            "CaEType": "ProgressBar",
            "disable": false,
            "classes": {
                "normal": "recordProgressBarNormal"
            },
            "CaE": [
                /*record进度条的进度值*/
                {
                    "id": "recordProgressValue",
                    "description": "录制进度条的进度值",
                    "CaEType": "div",
                    "classes": {"normal": "recordProgressValueNormal"}
                }
            ],
            "ProgressBarConfig": {
                "PBTitleid": "recordProgressTitle",
                "PBProcessId": "recordProgressValue",
                "ShowTextId": "recordProgressText",
                "ShowTextIsMoved": true,
                "PBType": "direction",
                "StepDuration": 1000,
                "MinValue": 0,
                "MaxValue": 600,
                "Width": 940,
                "TextFormat": "getRecordTime",//自定义显示进度值的文字的样式
                "CompleteCallBack": ""
            },
            "globalFocus": false
        },
        /*录制的起始时间*/
        {
            "id": "begin_time",
            "description": "录制的起始时间",
            "CaEType": "div"
        },
        /*录制的结束时间*/
        {
            "id": "end_time",
            "description": "录制的结束时间",
            "CaEType": "div"
        },
        {
            "id": "button_media",
            "description": "stop按键背景框",
            "CaEType": "Container",
            "classes": {
                "normal": "button_media_bg_unfocus",
                "focus": "button_media_bg_focus",
                "selected": "button_media_bg_focus",
                "disable": "button_media_bg_focus"
            },
            "nav": {"rightTo": "button_stop"},
            "onFocusFun": "mediaButtonOnFocus",
            "onBlurFun": "contentofMediaTurnGray",
            "handler": {
                "befRightHandler": "",
                "aftLeftHandler": "",
                "aftEnterHandler": "mediaBtnPressedHandler"
            },
            "CaE": [
                /*stop按键里的小方块*/
                //{
                //    "id": "block_in_media",
                //    "description": "stop按键框中的小方块",
                //    "classes": {
                //        "normal": "block_in_media_unfocus",
                //        "focus": "block_in_media_focus",
                //        "selected": "block_in_media_focus",
                //        "disable": "block_in_media_unfocus"
                //    },
                //    "CaEType": "div"
                //},
                /*stop按键里的stop文字*/
                {
                    "id": "text_media",
                    "description": "stop按键框中的stop文字",
                    "classes": {
                        "normal": "text_media_unfocus",
                        "focus": "text_media_focus",
                        "selected": "text_media_focus",
                        "disable": "text_media_unfocus"
                    },
                    "CaEType": "div"
                }
            ]
        },
        /*stop按键背景*/
        {
            "id": "button_stop",
            "description": "stop按键背景框",
            "CaEType": "Container",
            "classes": {
                "normal": "button_stop_bg_unfocus",
                "focus": "button_stop_bg_focus",
                "selected": "button_stop_bg_focus",
                "disable": "button_stop_bg_focus"
            },
            "nav": {"rightTo": "button_standby_record", "leftTo": "button_media"},
            "onFocusFun": "stopButtonOnFocus",
            "onBlurFun": "contentofStopTurnGray",
            "handler": {
//                "befRightHandler": "contentofStopTurnGray",
//                "aftLeftHandler": "contentofStopTurnGray",
                "aftEnterHandler": "stopBtnPressedHandler"
            },
            "CaE": [
                /*stop按键里的小方块*/
                {
                    "id": "block_in_stop",
                    "description": "stop按键框中的小方块",
                    "classes": {
                        "normal": "block_in_stop_unfocus",
                        "focus": "block_in_stop_focus",
                        "selected": "block_in_stop_focus",
                        "disable": "block_in_stop_unfocus"
                    },
                    "CaEType": "div"
                },
                /*stop按键里的stop文字*/
                {
                    "id": "text_stop",
                    "description": "stop按键框中的stop文字",
                    "classes": {
                        "normal": "text_stop_unfocus",
                        "focus": "text_stop_focus",
                        "selected": "text_stop_focus",
                        "disable": "text_stop_unfocus"
                    },
                    "CaEType": "div"
                }
            ]
        },
        /*standby按键背景*/
        {
            "id": "button_standby_record",
            "description": "StandByRecord按键背景框",
            "CaEType": "Container",
            "classes": {
                "normal": "button_standby_bg_unfocus",
                "focus": "button_standby_bg_focus",
                "selected": "button_standby_bg_focus",
                "disable": "button_standby_bg_unfocus"
            },
            "nav": {"leftTo": "button_stop"},
            "onFocusFun": "standbyButtonOnFocus",
            "onBlurFun": "contentofRecordTurnGray",
            "handler": {
//                "befLeftHandler": "contentofRecordTurnGray",
//                "aftRightHandler": "contentofRecordHighLight",
                "aftEnterHandler": "standbyBtnPressedHandler"
            },
            "CaE": [
                /*standby按键里的小圆圈*/
                {
                    "id": "circle_in_standby",
                    "description": "StandByRecord按键框中的小圆圈",
                    "CaEType": "div",
                    "classes": {
                        "normal": "circle_in_standby_unfocus",
                        "focus": "circle_in_standby_focus",
                        "selected": "circle_in_standby_focus",
                        "disable": "circle_in_standby_unfocus"
                    }
                },
                /*standby按键里的standby文字*/
                {
                    "id": "text_standby",
                    "description": "StandByRecord按键框中的StandByRecord文字",
                    "CaEType": "div",
                    "classes": {
                        "normal": "text_standby_unfocus",
                        "focus": "text_standby_focus",
                        "selected": "text_standby_focus",
                        "disable": "text_standby_unfocus"
                    }
                }
            ]
        },
        /*剩余时间提示*/
        {
            "id": "recordSurplusMinutes",
            "description": "剩余时间提示",
            "CaEType": "div",
            "classes": {"normal": "recordSurplusMinutesNormal"}
        }
    ];
    return pvrData;
}


function manualStopProgramCallback(crntChannel, result) {
    try {
        //将节目所在的频道号，频道名称，节目名称，节目的开始时间，结束时间保存在program对象中
        var program = {
            startTime: !!result[0] ? parseInt(result[0]) : 0,
            endTime: !!result[1] ? parseInt(result[1]) : 0,
            name: !!result[3] ? result[3] : "No program",
            detail: !!result[4] ? result[4] : "No program information"
        };
        program.channelNumber = crntChannel.number;
        program.channelName = crntChannel.name;
        program.channelUid = crntChannel.uid;
        program.listUid = crntChannel.listUid;
        program.playId = crntChannel.playId;
        program.title = program.name;

        DBG_INFO("current program: " + JSON.stringify(program));

        prgrmInfoOfPvrTshift = copyObj(program);
        if (prgrmInfoOfPvrTshift != null) {
            try {
                var opeData = hiWebOsFrame.pvrPage.operateData;
                //更新节目进度条的信息
                opeData.proName.Data = prgrmInfoOfPvrTshift.title;
                opeData.programProgressBar.MinValue = parseInt(prgrmInfoOfPvrTshift.startTime);
                opeData.programProgressBar.MaxValue = parseInt(prgrmInfoOfPvrTshift.endTime);
                opeData.programProgressBar.DefaultValue = parseInt(getDVBLongTime());

                //更新录制进度条的信息
                opeData.recordProgressBar.MaxValue = parseInt(program.endTime);
                opeData.recordProgressBar.DefaultValue = parseInt(getDVBLongTime());
                opeData.endTime.Data = UTCToLocalTime(opeData.recordProgressBar.MaxValue, 1);
                opeData.currentRecordTime.Data = UTCToLocalTime(opeData.recordProgressBar.DefaultValue, 1);

                DBG_INFO("maxvalue of recordbar is: " + opeData.recordProgressBar.MaxValue + "endTime: " + opeData.endTime.Data);

                var crntTime = parseInt(getDVBLongTime());
                DBG_INFO("crntTime=" + crntTime);
                var programPB = hiWebOsFrame.pvrPage.getCaE("programProgressBar");
                var recordPB = hiWebOsFrame.pvrPage.getCaE("recordProgressBar");
                startProgressBar(programPB.id, crntTime);
                startProgressBar(recordPB.id, crntTime);
                hiWebOsFrame.pvrPage.rewriteDataOnly();
            }
            catch (ex) {
                DBG_INFO("update progress bar info error: " + ex.message);
            }
        }
        else {
            DBG_INFO("reget prgrmInfoOfPvrTshift fail!");
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/*
 * 进度条开始
 * @param：
 *   pb:进度条的id
 * 说明：此函数在pvrOrShiftDialog中调用
 * */
function startProgressBar(pb, crntTime) {

    //configs.value = crntTime;

    //nouse, del by ghl
    //$('#recordSurplusMinutes').css('display', 'none');
    try {
        //_this.running_value = configs.value;
        //更新进度条
        //_this.setvalue(_this.running_value);

        var _this = hiWebOsFrame.pvrPage.getCaE(pb);
        var configs = _this.opts.ProgressBarConfig;
        switch (pb) {
            case "programProgressBar":
                configs.value = crntTime;
                _this.running_value = configs.value;
                _this.setvalue(_this.running_value);
                DBG_INFO("programProgressBar: " + '_this.MaxValue:' + _this.MaxValue + ' _this.MinValue:' + _this.MinValue + " _this.running_value:" + _this.running_value);
                break;
            case "recordProgressBar":
                configs.value = crntTime;
                _this.running_value = configs.value;
                _this.setvalue(_this.running_value);
                DBG_INFO("recordProgressBar: " + '_this.MaxValue:' + _this.MaxValue + ' _this.MinValue:' + _this.MinValue + " _this.running_value:" + _this.running_value);
                //若录制进度条的进度值到了最大值
                // 本来就是recordProgressBar,删掉多余判断条件 ghl
                //if (("recordProgressBar" == pb) && (_this.running_value >= _this.MaxValue) && (_this.running_value > _this.MinValue))
                if ((_this.running_value >= _this.MaxValue) && (_this.running_value > _this.MinValue)) {
                    DBG_INFO("manualStopOfPvr?" + hiWebOsFrame.manualStopOfPvr);
                    //若是即时录制，需要手动停止录制，当进度值达到了最大值时，需要重新获取进度条的最大值，即需要重新获取节目的结束时间
                    if (hiWebOsFrame.manualStopOfPvr) {
                        var crntChannel = livetvmain.getCurrentChannelInfo();
                        DBG_INFO("crntChannel: " + JSON.stringify(crntChannel));
                        livetvinfobar.getCurrentProgramInfo(manualStopProgramCallback.bind(this, crntChannel));
                    }
                    else {
                        DBG_INFO('pvr complete!');
                        clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
                        //pvrCompleteHandler();
                        stopBtnPressedHandler();
                        return;
                    }
                }
                break;
            default :
                DBG_INFO("get pb info error!");
                break;
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//pvr 完成处理
function pvrCompleteHandler() {
    try {
        if (!!hiWebOsFrame.pvrPage && !!pvrData.operateData.exittimeout) {
            clearTimeout(pvrData.operateData.exittimeout);
            pvrData.operateData.exittimeout = null;
        }
        DBG_INFO("pvrCompleteHandler is called!");
        try {
            var programName = prgrmInfoOfPvrTshift.title;
            DBG_INFO("the record program name is: " + programName);
        }
        catch (ex) {
            DBG_INFO("get program name error: " + ex.message);
        }
        //UI提示节目录制完成
        var origin = hiWebOsFrame.getCurrentPage();
        DBG_INFO("origin: " + hiWebOsFrame.getCurrentPageId());
        if (hiWebOsFrame.getCurrentPageId() == "pvrtshift_pvr_page") {
            if (hiWebOsFrame.pvrPage != null) {
                hiWebOsFrame.pvrPage.close();
            }
            openLiveTVModule([Msg.INFO, 0]);
        }
        isNoNeedStopRecord = true;
        hiWebOsFrame.createPage("pvrFinishDialog", null, origin, null, function (page) {
            hiWebOsFrame.pvrfinishDialog = page;
            hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTip.Data = 'Record is finished.';
            hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipName.Data = !!programName ? programName : '';
            hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipImgPic.Data = hiWebOsFrame.pvrfinishDialog.operateData.imgList[0];
            hiWebOsFrame.pvrfinishDialog.rewriteDataOnly();
            if('livetv_password_dialog' == hiWebOsFrame.getCurrentPageId()){
                DBG_INFO('livetv_password_dialog == curPageId, closeLiveTVPasswordFirst null->true, closeLiveTVModule();');
                hiWebOsFrame.pvrfinishDialog.operateData.closeLiveTVPasswordFirst = true;
                closeLiveTVModule();
            }
            hiWebOsFrame.pvrfinishDialog.open();
            DBG_INFO("pvrFinishDialog open!");
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
//获取录制进度(进度条通过call方法调用该函数，然后show text元素通过html()方法写入到页面中，这一操作由SDK的进度条控件实现，在此只需要获取一下时间即可)
function getRecordTime() {
    try {
        if (!!hiWebOsFrame.pvrPage) {
            var _this = hiWebOsFrame.pvrPage.getCaE("recordProgressBar");
            var curTime = UTCToLocalTime(_this.running_value, 1);
            DBG_INFO("recordProgressBar curTime: " + curTime + "_this.running_value" + _this.running_value + "====>" + _this.running_value * 1000);
            return curTime;
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    return '';
}
/*
 * 清空录制参数
 * 说明：
 *   停止录制后，要清除beginUTCTime
 * */
function PVR_StopRecordParams() {
    try {
        //清空节目录制的开始时间
        var opeData = pvrData.operateData;
        opeData.beginUTCTime = null;
        DBG_INFO("recordProgressBar.beginUTCTime: " + opeData.beginUTCTime);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
/**
 * 数字键切台操作
 * @type {*}
 */
var MapKeyValues = hiWebOsFrame.getKeyValues();


function PVRKeyNumHandler(keyVal) {
    try {
        exitPVR();
        clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
        var event = {};
        event.keyCode = MapKeyValues[keyVal];
        DBG_INFO('keyVal: ' + keyVal + ', cuttingmachine: ' + JSON.stringify(event));
        liveTVHandlerProcess(event.keyCode);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/*
 * handle函数：
 * 因为Stop和Standby record两个容器里的内容（小方块、小圆圈以及文字）
 * 无法获得焦点或者被选中，需要通过handle事件改变两元素内容的css样式
 * Stop容器的handle事件：
 * befRightHandle--->contentofStopTurnGray:在Stop容器响应右导航之前改变容器里内容的css样式
 * aftLeftHandle--->contentofStopHighLight:在Standby容器响应左导航之后改变Stop容器里的css样式
 *
 * befLeftHandle--->contentofRecordTurnGray:在Standby容器响应左导航之前改变容器里内容的css样式
 * aftRightHandle--->contentofRecordHighLight:在Stop容器响应右导航之后改变Standby容器里的css样式
 * */

function contentofMediaTurnGray() {
    try {
        //$("#button_stop").blur();
        //$("#block_in_media").removeClass().addClass("block_in_media_unfocus");
        var txt = $("#text_media" + " marquee").html();
        if (txt) {
            $("#text_media").html(txt);
        }
        $("#text_media").removeClass().addClass("text_media_unfocus");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*stop里的block和stop文字高亮，响应Standby的左导航事件*/
function contentofMediaHighLight() {
    try {
        $("#button_media").focus();
        //$("#block_in_media").removeClass().addClass("block_in_media_focus");
        $("#text_media").removeClass().addClass("text_media_focus");
        var txt = $("#text_media").html();
        if (txt.length > 10) {
            $("#text_media").html('<marquee>' + txt + '</marquee>');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*stop里的block和stop文字变暗，响应Stop的右导航事件*/
function contentofStopTurnGray() {
    try {
        //$("#button_stop").blur();
        $("#block_in_stop").removeClass().addClass("block_in_stop_unfocus");
        var txt = $("#text_stop" + " marquee").html();
        if (txt) {
            $("#text_stop").html(txt);
        }
        $("#text_stop").removeClass().addClass("text_stop_unfocus");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*stop里的block和stop文字高亮，响应Standby的左导航事件*/
function contentofStopHighLight() {
    try {
        $("#button_stop").focus();
        $("#block_in_stop").removeClass().addClass("block_in_stop_focus");
        $("#text_stop").removeClass().addClass("text_stop_focus");
        var txt = $("#text_stop").html();
        if (txt.length > 10) {
            $("#text_stop").html('<marquee>' + txt + '</marquee>');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*standby record里的circle和standby record文字变暗，响应Standby的左导航事件*/
function contentofRecordTurnGray() {
    try {
        //$("#button_standby_record").blur();
        $("#circle_in_standby").removeClass().addClass("circle_in_standby_unfocus");
        var txt = $("#text_standby" + " marquee").html();
        if (txt) {
            $("#text_standby").html(txt);
        }
        $("#text_standby").removeClass().addClass("text_standby_unfocus");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*standby record里的circle和standby record文字高亮，响应Stop的右导航事件*/
function contentofRecordHighLight() {
    try {
        //$("#button_standby_record").focus();
        //$("#text_standby").focus();
        $("#circle_in_standby").removeClass().addClass("circle_in_standby_focus");
        $("#text_standby").removeClass().addClass("text_standby_focus");
        var txt = $("#text_standby").html();
        if (txt.length > 13) {
            $("#text_standby").html('<marquee>' + txt + '</marquee>');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * 响应stop按键
 * */
function keyStopRecordHandler() {
    try {
        //hiWebOsFrame.pvrPage.hiFocus("button_stop");
        stopBtnPressedHandler();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * 响应stop button点击事件
 * */
function stopBtnPressedHandler() {
    try {
        DBG_INFO("stop button pressed!");
        if (!!tv) {
            //清空录制时使用的参数
            try {
                //pvrCompleteHandler();
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
                setAfterStopPvrWantDo(stopBtnPressedCallBack);
                if (!!hiWebOsFrame.ptDialog) {
                    hiWebOsFrame.ptDialog.destroy();
                }
            }
            catch (ex) {
                DBG_INFO('stop error:' + ex, DebugLevel.ERROR);
            }
        }
        else {
            PVR_StopRecordParams();
            exitPVR();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function mediaBtnPressedHandler() {
    try {
        hiWebOsFrame.pvrPage.close();
        clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
        if (!!pvrData.operateData.exittimeout) {
            clearTimeout(pvrData.operateData.exittimeout);
            pvrData.operateData.exittimeout = null;
        }
        PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
            "Sure to exit from PVR or T.Shift?", pvrTshiftOkCommandToMedia, pvrTshiftCancelCommand);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function pvrTshiftOkCommandToMedia() {
    try {
        DBG_INFO("stop record ");
        if (!!hiWebOsFrame["dialog_common"]) {
            hiWebOsFrame["dialog_common"].destroy();
        }
        hiWebOsFrame.startLoading(5, "stoppvr");
        openLiveTVModule([Msg.INFO, 0]);
        setAfterStopPvrWantDo(stopPvrCallBackToMedia);
        setTimeout(function () {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function stopPvrCallBackToMedia() {
    try {
        g_AfterStopPvrWantDo = null;
        hiWebOsFrame.endLoading("stoppvr");
        try {
            var pvruid = null;
            var path = null;
            pvruid = model.pvr.getStationUuid();
            if (pvruid != null) {
                path = getUsbPathByUid(pvruid);
            }
            if (path != null) {
                debugE('homeKeyStopPvrOrTShiftCallBack:' + path);
                var codePath = URLencode(path);
                var url = "file:///3rd_rw/UI/hisenseUI/mediaIndex.html?module=pvr&path=" + codePath;
                debugE('homeKeyStopPvrOrTShiftCallBack:' + url);
                sendCommndToTV(40, url, false, 95);
            } else {
                var urlBack = getMediaURL(2);
                debugE('homeKeyStopPvrOrTShiftCallBack:' + urlBack);
                sendCommndToTV(40, urlBack, false, 95);
            }

        } catch (e) {
            debugE('stopPvrCallBackToMedia:' + e.message);
            var urlBackup = getMediaURL(2);
            debugE('homeKeyStopPvrOrTShiftCallBack:' + urlBackup);
            sendCommndToTV(40, urlBackup, false, 95);

        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function URLencode(sStr) {
    try {
        return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
/*
 * 响应standby record点击事件
 * */
function standbyBtnPressedHandler() {
    try {
        DBG_INFO("standby record button pressed!");
        if (!!tv) {
            try {
                //待机录制
                //hiWebOsFrame.lockAllKeys();
                try {
                    keyboard.set_listen(0);
                    DBG_INFO('keyboard.set_listen(0) [for pvr]');
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }

                model.system.setPVRStandby(0);
            }
            catch (ex) {
                DBG_INFO('standbyrecord error:' + ex);
            }
            /*if(!!pvrData.operateData.exittimeout)
             {
             clearTimeout(pvrData.operateData.exittimeout);
             pvrData.operateData.exittimeout = null;
             }
             exitPVR();*/
        }
        else {
            if (!!pvrData.operateData.exittimeout) {
                clearTimeout(pvrData.operateData.exittimeout);
                pvrData.operateData.exittimeout = null;
            }
            exitPVR();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * 销毁 pvr page
 * 说明：
 *   主动停止录制时调用
 * */
function pvrPageDestroy() {
    try {
        if (!!hiWebOsFrame.pvrPage) {
            /*var prgPB = hiWebOsFrame.pvrPage.getCaE("programProgressBar");
             var recordPB = hiWebOsFrame.pvrPage.getCaE("recordProgressBar");
             prgPB.stop();
             recordPB.stop();*/
            clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
            if (!!pvrData.operateData.exittimeout) {
                clearTimeout(pvrData.operateData.exittimeout);
                pvrData.operateData.exittimeout = null;
            }
            pvrData.operateData.beginUTCTime = null;

            hiWebOsFrame.pvrPage.close();

            hiWebOsFrame.pvrPage = null;
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function mediaButtonOnFocus() {
    try {
        pvrResetTimeout();
        contentofMediaHighLight();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function stopButtonOnFocus() {
    try {
        pvrResetTimeout();
        contentofStopHighLight();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function standbyButtonOnFocus() {
    try {
        pvrResetTimeout();
        contentofRecordHighLight();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * 重置定时器
 * 说明：
 *   其中一个按键获得焦点后，10秒后执行exitPVR()，若在此期间另一个按键获得焦点，重新计时10秒后再执行exitPVR()
 * */
function pvrResetTimeout() {
    try {
        if (!!hiWebOsFrame.pvrPage) {
            if (!!pvrData.operateData.exittimeout) {
                clearTimeout(pvrData.operateData.exittimeout);
                pvrData.operateData.exittimeout = null;
            }
            pvrData.operateData.exittimeout = setTimeout('exitPVR()', 10 * 1000);
            DBG_INFO("pvrResetTimeout is called!");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * 响应timeshift按键，切换到时移
 * */
function recordTimeShiftHandler() {
    try {
        DBG_INFO("recordTimeShiftHandler to tshift dialog!");
        //切换到时移
        PVRAndTshiftSwitch(2);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * pvr页面关闭
 * 说明：页面关闭的时候关闭所有定时器
 * */
function pvrPageonClose() {
    try {
        if (!!hiWebOsFrame.pvrPage) {
            //clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
            if (!!pvrData.operateData.exittimeout) {
                clearTimeout(pvrData.operateData.exittimeout);
                pvrData.operateData.exittimeout = null;
            }
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
/*
 * 销毁pvr页面
 * 说明：
 *   onDestroy时调用，关闭定时器，清空pvr页面
 * */
function pvrPageonDestroy() {
    try {
        if (!!pvrData.operateData.exittimeout) {
            clearTimeout(pvrData.operateData.exittimeout);
            //pvrData.operateData.exittimeout = null;
        }
        //若当前还在录制，不将进度条timer清空，解决按下power键待机录制调用destroy函数关闭页面，但是还在录制，进度条不再计时的问题
        //若当前还在录制，不清空beginUTCTime参数-解决调用destroy函数关闭页面，但是还在录制，再次起录制页面时进度条的开始时间会更改的问题
        if (!isMainArchiveRecording()) {
            clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
            PVR_StopRecordParams();
            hiWebOsFrame.pvrPage = null;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
/*
 * 退出pvr page
 * */
function exitPVR() {
    try {
        if (!!hiWebOsFrame.pvrPage) {
            DBG_INFO("exitPVR is called!");
            /*var prgPB = hiWebOsFrame.pvrPage.getCaE("programProgressBar");
             var recordPB = hiWebOsFrame.pvrPage.getCaE("recordProgressBar");
             prgPB.stop();
             recordPB.stop();*/

            //clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
            //contentofRecordTurnGray();     //nouse, del by ghl
            hiWebOsFrame.pvrPage.close();
            //DBG_INFO("current page id: " + hiWebOsFrame.getCurrentPageId());
            openLiveTVModule([Msg.INFO, 0]);
            //DBG_INFO("current page id: " + hiWebOsFrame.getCurrentPageId());
            /*if(hiWebOsFrame.getCurrentPageId() != "pvrTshiftShowDialog")
             {
             }*/
            DBG_INFO('exit pvr success!');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
function pvrPageonOpen() {
    try {
        hiWebOsFrame.pvrPage.hiFocus('button_stop');
        //hiWebOsFrame.pvrPage.hiFocus('block_in_stop');
        hiWebOsFrame.pvrPage.hiFocus('text_stop');
        $("#block_in_stop").removeClass().addClass("block_in_stop_focus");
        $("#circle_in_standby").removeClass().addClass("circle_in_standby_unfocus");
        $("#text_standby").removeClass().addClass("text_standby_unfocus");
        $("#text_media").removeClass().addClass("text_media_unfocus");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


}
function stopBtnPressedCallBack() {
    try {
        g_AfterStopPvrWantDo = null;
        pvrCompleteHandler();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}