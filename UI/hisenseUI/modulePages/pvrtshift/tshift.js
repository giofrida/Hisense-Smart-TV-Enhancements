/**
 * Created by Henry on 2014-11-13.
 */

/* 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18*/
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

var gTShiftFocus = 1;

var currentDate = new Date();
var g_thsiftRecordTime = 0;
var g_thsiftRecordTimeShow = 0;
var g_tshiftRecordTimeout = null;
function getTShiftProgress() {

    var currentTime = '', nowTime = 0;

    //nowTime = Math.floor(getProgress(this.id) /1000 / 60);
    switch (this.id) {
        case 'tshift_progress_range':
            debugPrint("recordTime does not add!!!!!"+g_thsiftRecordTimeShow);
            var tmpDate = new Date(g_thsiftRecordTimeShow * 1000);
            var date = tmpDate.Format("hh:mm");
            currentTime = "" + date;
            break;
        //return testRangeProgress();
        case "tshift_program_progress":
            var time = Math.floor((tsGetStartTime()-getTShiftOffsetTime())/60);
            if(time > 0){
                time = 0;
            }
            debugE('getTShiftProgress range:'+time);
            currentTime = time + "min";
            break;
        case 'tshift_progress_location':
            var location = Math.round((getLongTime()-getTShiftOffsetTime()) / 60);
            if(location > 0){
                location = 0;
            }
            debugE('getTShiftProgress location:'+location);
            currentTime = location + "min";
           // currentTime = "0min";
            break;
        //return testLocationProgress(times);
    }

//    try
//    {
//        var config = this.opts.ProgressBarConfig,
//            step = !!this.page.operateData[this.id].StepDuration ? this.page.operateData[this.id].StepDuration:this.StepDuration,
//            curTime ='';
//        var nowTime = Math.round((this.running_value - this.page.operateData.tshiftStartTime) * step/1000/60);
//        nowTime = nowTime < 0?0:nowTime;
//        curTime = nowTime +'min';
//    }
//    catch(ex){
//        debugPrint('getthshiftTime error:'+ex);
//    }
//    debugPrint('getthshiftTime error:'+curTime);
//    return curTime;
    return currentTime;
}

/**
 * 更新播放暂停按钮背景，并根据情况是否显示焦点
 * @param opData 当前页的operateData
 * @param reset 是否需要更新焦点
 */
function updatePlayBtnBackground(opData, reset) {
    debugPrint("updatePlayBtnBackground!!!!!!!!"+times+reset);
    if(!!hiWebOsFrame.tshiftProgressPage.timeOut){
        debugPrint( "clear!!!!!!!!!!!!!!!!!!!!! timeout  ");
        clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);
    }
    debugPrint( "create!!!!!!!!!!!!!!!!!!!!! timeout");
    hiWebOsFrame.tshiftProgressPage.timeOut = setTimeout(exitTShift, 12*1000);

    var playBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_play_btn');
    var ffBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_forward_btn');
    ffBtn.opts.classes.focus = 'cls_tshift_forward_btn_focus';

    var fbBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_backward_btn');
    fbBtn.opts.classes.focus = 'cls_tshift_backward_btn_focus';
    //times = opData.tshift_play_btn;
    if (times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY) {
        debugPrint( "show pause style");
        hiWebOsFrame.tshiftProgressPage.operateData.tshift_play_btn = 0;
        playBtn.opts.classes.normal = 'cls_tshift_pause_btn_normal';
        playBtn.opts.classes.focus = 'cls_tshift_pause_btn_focus';
        $('#' + playBtn.id).attr('class', reset ? playBtn.opts.classes.normal : playBtn.opts.classes.focus);
        resetTshiftTimes(opData);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_play_btn');

    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE){
        debugPrint( "show play style");
        hiWebOsFrame.tshiftProgressPage.operateData.tshift_play_btn = 1;
        playBtn.opts.classes.normal = 'cls_tshift_play_btn_normal';
        playBtn.opts.classes.focus = 'cls_tshift_play_btn_focus';
        $('#' + playBtn.id).attr('class', reset ? playBtn.opts.classes.normal : playBtn.opts.classes.focus);
        resetTshiftTimes(opData);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_play_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_forward_btn'].index = 0;
        opData['tshift_forward_times'].index = opData['tshift_forward_btn'].index;
        updatetShiftTimesBackground('tshift_forward_times', opData['tshift_forward_btn'].index);
        $('#' + ffBtn.id).attr('class',ffBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_forward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_forward_btn'].index = 1;
        opData['tshift_forward_times'].index = opData['tshift_forward_btn'].index;
        updatetShiftTimesBackground('tshift_forward_times', opData['tshift_forward_btn'].index);
        $('#' + ffBtn.id).attr('class',ffBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_forward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_forward_btn'].index = 2;
        opData['tshift_forward_times'].index = opData['tshift_forward_btn'].index;
        updatetShiftTimesBackground('tshift_forward_times', opData['tshift_forward_btn'].index);
        $('#' + ffBtn.id).attr('class',ffBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_forward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_forward_btn'].index = 3;
        opData['tshift_forward_times'].index = opData['tshift_forward_btn'].index;
        updatetShiftTimesBackground('tshift_forward_times', opData['tshift_forward_btn'].index);
        $('#' + ffBtn.id).attr('class',ffBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_forward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_forward_btn'].index = 4;
        opData['tshift_forward_times'].index = opData['tshift_forward_btn'].index;
        updatetShiftTimesBackground('tshift_forward_times', opData['tshift_forward_btn'].index);
        $('#' + ffBtn.id).attr('class',ffBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_forward_btn');

    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_backward_btn'].index = 0;
        opData['tshift_backward_times'].index = opData['tshift_backward_btn'].index;
        updatetShiftTimesBackground('tshift_backward_times', opData['tshift_backward_btn'].index);
        $('#' + fbBtn.id).attr('class',fbBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_backward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_backward_btn'].index = 1;
        opData['tshift_backward_times'].index = opData['tshift_backward_btn'].index;
        updatetShiftTimesBackground('tshift_backward_times', opData['tshift_backward_btn'].index);
        $('#' + fbBtn.id).attr('class',fbBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_backward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_backward_btn'].index = 2;
        opData['tshift_backward_times'].index = opData['tshift_backward_btn'].index;
        updatetShiftTimesBackground('tshift_backward_times', opData['tshift_backward_btn'].index);
        $('#' + fbBtn.id).attr('class',fbBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_backward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_backward_btn'].index = 3;
        opData['tshift_backward_times'].index = opData['tshift_backward_btn'].index;
        updatetShiftTimesBackground('tshift_backward_times', opData['tshift_backward_btn'].index);
        $('#' + fbBtn.id).attr('class',fbBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_backward_btn');
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X){
        $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
        resetTshiftTimes(opData);
        opData['tshift_backward_btn'].index = 4;
        opData['tshift_backward_times'].index = opData['tshift_backward_btn'].index;
        updatetShiftTimesBackground('tshift_backward_times', opData['tshift_backward_btn'].index);
        $('#' + fbBtn.id).attr('class',fbBtn.opts.classes.focus);
        hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_backward_btn');
    }

}

function clickTShiftPausePlayButton() {
    debugPrint( 'opData.tshiftPlayBtn:');
    var opData = hiWebOsFrame.tshiftProgressPage.operateData;
    resetTshiftTimes(opData);

    //opData.tshift_play_btn = opData.tshift_play_btn == 1 ? 0 : 1;

    updatePlayBtnBackground(opData, false);
    //resetTShiftTimeout();
    debugPrint( 'opData.tshiftPlayBtn:' + opData.tshift_play_btn);
    if(opData.tshift_play_btn == 1){
        debugPrint( 'UI call Play !!!!!!!!!!');
        model.timeshift.Play();
        debugPrint( 'opData.tshiftPlayBtn, play():');
    }else if(opData.tshift_play_btn == 0){
        debugPrint( 'UI call Pause !!!!!!:');
        model.timeshift.Pause();
    }
}

function clickTShiftStopButton() {
    debugPrint( "click tShift stop btn.");
    exitTShift();
    //model.timeshift.Stop();
    setTimeout(uiCallStopTShift,300);
}
function uiCallStopTShift(){
    debugPrint( 'UI call Stop !!!!!!!!!!');
    model.timeshift.Stop();
}

function onFocusBackWardButton(){
    gTShiftFocus = 0;
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    resetTShiftTimeout();
}


function onFocusPlayPauseButton(){
    gTShiftFocus = 1;
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    resetTShiftTimeout();
}


function onFocusFastButton(){
    gTShiftFocus = 2;
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    resetTShiftTimeout();
}

function onFocusStopButton(){
    gTShiftFocus = 3;
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    resetTShiftTimeout();
}
function resetTShiftTimeout() {
    debugPrint( "debug:reset timeout  "+times);
    if(hiWebOsFrame.tshiftProgressPage.timeOut!=null){
        debugPrint( "clear!!!!!!!!!!!!!!!!!!!!! timeout  ");
        clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);
    }
//    if(times != TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY){
//        return;
//    }
    debugPrint( "create!!!!!!!!!!!!!!!!!!!!! timeout  ");
    hiWebOsFrame.tshiftProgressPage.timeOut = setTimeout(exitTShift, 12000);
}

function resetTshiftTimes(opData) {
    opData['tshift_forward_btn'].index = -1;
    opData['tshift_backward_btn'].index = -1;
    opData['tshift_forward_times'].index = -1;
    opData['tshift_backward_times'].index = -1;
    var ffBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_forward_btn');
    ffBtn.opts.classes.normal = 'cls_tshift_forward_btn_normal';
    $('#' + ffBtn.id).attr('class',ffBtn.opts.classes.normal);
    var fbBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_backward_btn');
    fbBtn.opts.classes.normal = 'cls_tshift_backward_btn_normal';
    $('#' + fbBtn.id).attr('class',fbBtn.opts.classes.normal);
    updatetShiftTimesBackground('hide_times', 0);
}

function refreshTshiftBtn(state){
   // hiWebOsFrame.tshiftProgressPage.operateData.tshift_play_btn = state;
    times = state;
    gWantTimes = state;
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    updatePlayBtnBackground(hiWebOsFrame.tshiftProgressPage.operateData, false);
}

function refreshTshiftBackwardBtnForNoWork(){
    debugE("refreshTshiftBackwardBtnForNoWork!!!!!!!!!!!!!"+times + " "+gWantTimes +" "+ gTShiftFocus);
    if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY){
        if(gWantTimes != times){
            if(gTShiftFocus == 0){
                if(gWantTimes == -2 || gWantTimes == -4 || gWantTimes == -8 || gWantTimes == -16
                    || gWantTimes == -32){
                    updatePlayBtnBackground(hiWebOsFrame.tshiftProgressPage.operateData, false);
                }
            }else if(gTShiftFocus == 2){
                if(gWantTimes == 2 || gWantTimes == 4 || gWantTimes == 8 || gWantTimes == 16
                    || gWantTimes == 32){
                    updatePlayBtnBackground(hiWebOsFrame.tshiftProgressPage.operateData, false);
                }
            }
        }
    }else if(times == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE){
        if(gWantTimes != times){
            if(gTShiftFocus == 0){
                if(gWantTimes == -2 || gWantTimes == -4 || gWantTimes == -8 || gWantTimes == -16
                    || gWantTimes == -32){
                    updatePlayBtnBackground(hiWebOsFrame.tshiftProgressPage.operateData, false);
                }
            }
        }
    }
}

function clickTShiftFastForwardButton() {
    debugPrint( 'opData.ForwardBtn clicked');
    var opData = hiWebOsFrame.tshiftProgressPage.operateData;
    opData['tshift_forward_btn'].index = opData['tshift_forward_btn'].index > 3?
        0 : opData['tshift_forward_btn'].index + 1;
    //opData.tshift_play_btn = 0;
    //update the image index.
    opData['tshift_forward_times'].index = opData['tshift_forward_btn'].index;

    debugPrint( 'opData.tshiftForwardBtn:' + opData['tshift_forward_times'].index);
    updatetShiftTimesBackground('tshift_forward_times', opData['tshift_forward_btn'].index);
    var ffBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_forward_btn');
    ffBtn.opts.classes.focus = 'cls_tshift_forward_btn_focus';
    $('#' + ffBtn.id).attr('class',ffBtn.opts.classes.focus);
    //updatePlayBtnBackground(opData, true);
    var playBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_play_btn');
    $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
    var speed = 0;
    if(opData['tshift_forward_times'].index == 0){
        speed = 2;
    }else if(opData['tshift_forward_times'].index == 1){
        speed = 4;
    }else if(opData['tshift_forward_times'].index == 2){
        speed = 8;
    }else if(opData['tshift_forward_times'].index == 3){
        speed = 16;
    }else if(opData['tshift_forward_times'].index == 4){
        speed = 32;
    }
    gWantTimes = speed;
    if (tv) {
        debugPrint( 'UI call opData.ForwardBtn clicked!!!!!!!!!!!'+speed);
        model.timeshift.TriplePlay(speed);
    }
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    hiWebOsFrame.tshiftProgressPage.clickTimeOut = setTimeout(refreshTshiftBackwardBtnForNoWork,2500);
   // resetTShiftTimeout();

}

function clickTShiftFastBackwardButton() {
    debugPrint( 'opData.BackwardBtn clicked');
    var opData = hiWebOsFrame.tshiftProgressPage.operateData;
    opData['tshift_backward_btn'].index = opData['tshift_backward_btn'].index > 3 ?
        0 : opData['tshift_backward_btn'].index + 1;
   // opData.tshift_play_btn = 0;
    opData['tshift_backward_times'].index = opData['tshift_backward_btn'].index;
    debugPrint( 'opData.tshiftBackwardBtn:' + opData['tshift_backward_btn'].index);
    updatetShiftTimesBackground('tshift_backward_times', opData['tshift_backward_btn'].index);
   // updatePlayBtnBackground(opData, true);
    var fbBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_backward_btn');
    fbBtn.opts.classes.focus = 'cls_tshift_backward_btn_focus';
    $('#' + fbBtn.id).attr('class',fbBtn.opts.classes.focus);
    
    var playBtn = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_play_btn');
    $('#' + playBtn.id).attr('class',playBtn.opts.classes.normal);
    debugPrint( 'opData.BackwardBtn clicked!!!!!!!!!!!'+opData['tshift_backward_btn'].index);
    //times = -(opData['tshift_backward_btn'].index);
    var speed = 0;
    if(opData['tshift_backward_btn'].index == 0)
    {
        speed = -2;
    }else if(opData['tshift_backward_btn'].index == 1)
    {
        speed = -4;
    }else if(opData['tshift_backward_btn'].index == 2)
    {
        speed = -8;
    }else if(opData['tshift_backward_btn'].index == 3)
    {
        speed = -16;
    }else if(opData['tshift_backward_btn'].index == 4)
    {
        speed = -32;
    }
    gWantTimes = speed;
    if (tv) {
        debugPrint( 'UI call opData.BackwardBtn clicked!!!!!!!!!!!'+speed);
        model.timeshift.TriplePlay(speed);
    }
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    hiWebOsFrame.tshiftProgressPage.clickTimeOut = setTimeout(refreshTshiftBackwardBtnForNoWork,2500);
    //resetTShiftTimeout();
}


/**
 * 更新快进、快退背景
 * @param id 需要更新的图标id，当id为hide_times时，快进、快退均隐藏
 * @param index 更新的背景图index
 */
function updatetShiftTimesBackground(id, index) {
    debugPrint( !!id + "update Times image ");
    if (!!id && index > -1) {
        var forward_times = $('#tshift_forward_times');
        var backward_times = $('#tshift_backward_times');
        switch (id) {
            case 'tshift_backward_times':
                debugPrint( 'update backward imag');
                forward_times.css('visibility', 'hidden');
                backward_times.css('visibility', 'visible');
                backward_times.css('background-image', 'url('
                + hiWebOsFrame.tshiftProgressPage.operateData[id].imgList[index] + ')');
                break;
            case 'tshift_forward_times':
                debugPrint( 'update forward imag');
                backward_times.css('visibility', 'hidden');
                forward_times.css('visibility', 'visible');
                forward_times.css('background-image', 'url('
                + hiWebOsFrame.tshiftProgressPage.operateData[id].imgList[index] + ')');
                break;
            case 'hide_times':
                forward_times.css('visibility', 'hidden');
                backward_times.css('visibility', 'hidden');
                break;
            default :
                debugPrint( "the id is invalid.");
                break;
        }
    }
}


function getTshiftPageInfo(page) {
    page.CaE = [
        {
            "id": "tshift_program_title",
            "description": "T.Shift当前节目名",
            "CaEType": "div",
            "strFilter":true,
            "classes": {
                "normal": "cls_tshift_program_title"
            }
        },
        {
            "id": "tshift_program_progress",
            "description": "当前节目进度条",
            "CaEType": "ProgressBar",
            "classes": {
                "normal": "cls_tshift_program_progress_bar"
            },
            "CaE": [
                {
                    "id": "tshift_program_progress_label",
                    "description": "进度标题",
                    "CaEType": "div",
                    "classes":{
                        "normal":"cls_tshift_program_progress_label"
                    }
                },
                {
                    "id": "tshift_program_progressbar_location",
                    "description": "当前节目进度",
                    "CaEType": "div",
                    "classes": {
                        "normal": "cls_tshift_program_progressbar_location"
                    }
                }],
            "ProgressBarConfig": {
                PBTitleid: "tshift_program_progress_label",//进度条的标题
                PBProcessId: "tshift_program_progressbar_location",//进度条的进程id
                ShowTextId: "tshift_start_location",
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型，“animation”动画模式 “direction”直接模式
                StepDuration: 1000,// settimeout的时间参数，单位ms 表示每增加1%d的时间间隔
                MinValue: 0,  //最小值，不设定的话默认为0；
                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 250,//进度条总宽度
                TextFormat: "getTShiftProgress",
                //TextFormat: "per",//	ShowText的显示形式，“per”表示百分数，“fra”表示分数，其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id": "tshift_program_progress_text",
            "description": "T.Shift标签",
            "CaEType": "div",
            "classes": {
                "normal": "cls_tshift_program_progress_text"
            }
        },
        {
            "id": "tshiftLabel",
            "description": "T.Shift标签",
            "CaEType": "div",
            "classes": {
                "normal": "cls_tshiftLabel"
            }
        },
        {
            "id": "tshift_progress_location",
            "description": "当前进度条",
            "disable": false,
            "CaEType": "ProgressBar",
            "classes": {
                "normal": "cls_tshift_progress_bar"
            },
            "CaE": [
                {
                    "id": "tshift_progressbar_location",
                    "description": "当前进度",
                    "CaEType": "div",
                    "classes": {
                        "normal": "cls_tshift_progressbar_location"
                    }
                }],
            "ProgressBarConfig": {
                PBTitleid: "tshiftLabel",//进度条的标题
                PBProcessId: "tshift_progressbar_location",//进度条的进程id
                ShowTextId: "tshift_current_location_label",//在进度条旁边用百分数或者分数显示进度与否，默认为空是不显示，有的时候需要进行提供id
                ShowTextIsMoved: true,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型，“animation”动画模式 “direction”直接模式
                StepDuration: 1000,// settimeout的时间参数，单位ms 表示每增加1%d的时间间隔
                MinValue: 0,  //最小值，不设定的话默认为0；
                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 940,//进度条总宽度
                TextFormat: "getTShiftProgress",//	ShowText的显示形式，“per”表示百分数，“fra”表示分数，其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id": "tshift_progress_range",
            "description": "可播放进度",
            "CaEType": "ProgressBar",
            "classes": {
                "normal": "cls_tshift_progress_bar"
            },
            "CaE": [
                {
                    "id": "tshift_progressbar_range",
                    "description": "可用进度",
                    "CaEType": "div",
                    "classes": {
                        "normal": "cls_tshift_progressbar_range"
                    }
                }],
            "ProgressBarConfig": {
                PBTitleid: "",//进度条的标题
                PBProcessId: "tshift_progressbar_range",//进度条的进程id
                ShowTextId: "tshift_end_location",//在进度条旁边用百分数或者分数显示进度与否，默认为空是不显示，有的时候需要进行提供id
                ShowTextIsMoved: true,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型，“animation”动画模式 “direction”直接模式
                StepDuration: 1000,// settimeout的时间参数，单位ms 表示每增加1%d的时间间隔
                MinValue: 0,  //最小值，不设定的话默认为0；
                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 940,//进度条总宽度
                TextFormat: "getTShiftProgress",//	ShowText的显示形式，“per”表示百分数，“fra”表示分数，其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id": "tshift_backward_btn",
            "description": "时移快退",
            "CaEType": "div",
            "nav": {
                "rightTo": "tshift_play_btn"
            },
            "classes": {
                "normal": "cls_tshift_backward_btn_normal", "focus": "cls_tshift_backward_btn_focus","disable":"cls_tshift_backward_btn_disable"
            },
            "onFocusFun": "onFocusBackWardButton",
            "handler": {
                "aftEnterHandler": " clickTShiftFastBackwardButton"
            }
        },

        {
            "id": "tshift_play_btn",
            "description": "播放",
            "CaEType": "div",
            "classes": {
                "normal": "cls_tshift_play_btn_normal", "focus": "cls_tshift_play_btn_focus","disable":"cls_tshift_play_btn_disable"
            },
            "nav": {
                "leftTo": "tshift_backward_btn", "rightTo": "tshift_forward_btn"
            },
            "onFocusFun": "onFocusPlayPauseButton",
            "handler": {
                "aftEnterHandler": "clickTShiftPausePlayButton"
            }
        },

        {
            "id": "tshift_forward_btn",
            "description": "时移快进",
            "CaEType": "div",
            "classes": {
                "normal": "cls_tshift_forward_btn_normal", "focus": "cls_tshift_forward_btn_focus"
            },
            "nav": {
                "leftTo": "tshift_play_btn", "rightTo": "tshift_stop_btn"
            },
            "onFocusFun": "onFocusFastButton",
            "handler": {
                "aftEnterHandler": " clickTShiftFastForwardButton"
            }
        },

        {
            "id": "tshift_stop_btn",
            "description": "停止",
            "CaEType": "div",
            "classes": {
                "normal": "cls_tshift_stop_btn_normal", "focus": "cls_tshift_stop_btn_focus"
            },
            "nav": {
                "leftTo": "tshift_forward_btn", "rightTo": "tshift_stop_btn"
            },
            "onFocusFun": "onFocusStopButton",
            "handler": {
                aftEnterHandler: "clickTShiftStopButton"
            }
        }
//        ,
//        {
//            id:"tshift_start_location",
//            "description":"开始时间",
//            "CaEType":"div"
//        }

    ];

    return tshiftPagedata;
}
var tshiftPagedata = {
    "tshift_program_title": {
        Data: ""
    },
    "tshift_program_progress": {
        "Data": {
            "tshift_program_progressbar_location": {
                Data: ""
            },
            "tshift_program_progress_label":{Data:""}
        },
        "DefaultValue": 0
    },
    "tshiftLabel": {
        Data: "T.Shift"
    },
    "tshift_program_progress_text": {
        Data: getMarketLangKey("Program Progress:", "Program Progress:")
    },
    "tshift_progress_location": {
        "Data": {
            "tshift_progressbar_location": {
                Data: ""
            }
        },
        "DefaultValue": 0
    },
    "tshift_progress_range": {
        "Data": {
            "tshift_progressbar_range": {
                Data: ""
            }
        },
        "DefaultValue": 100
    },
    "tshift_start_location":{
        Data:""
    },
    "tshift_backward_times": {
        Data: ""
    },
    "tshift_backward_btn": {
        Data: ""
    },
    "tshift_forward_btn": {
        Data: ""
    },
    "tshift_forward_times": {
        Data: ""
    },
    "tshift_play_btn": {
        Data: ""
    },
    "tshift_stop_btn": {
        Data: ""
    },
    "operateData": {
        "tshift_program_title": {
            Data: ""
        },
        "tshift_program_progress": {
            "Data": {
                "tshift_program_progressbar_location": {
                    Data: ""
                },
                "tshift_program_progress_label":{Data:""}
            },
            "DefaultValue": 10
        },
        "tshift_play_btn": 1,
        "tshift_program_progress_text": {
            Data:  getMarketLangKey("Program Progress:", "Program Progress")
        },
        "tshiftLabel": {
            Data: "T.Shift"
        },
        "tshift_backward_btn": {
            Data: "",
            "index": -1
        },
        "tshift_forward_btn": {
            Data: "",
            "index": -1
        },
        "tshift_progress_range": {
            "Data": {
                "tshift_progressbar_range": {
                    Data: ""
                }
            },
            "DefaultValue": 0
        },
        "tshift_start_location":{
            Data:""
        },
        "tshift_progress_location": {
            "Data": {
                "tshift_progressbar_location": {
                    Data: ""
                }
            },
            "DefaultValue": 0
        },
        "tshift_current_location_label": {
            Data: ""
        },
        "tshift_end_location": {
            Data: ""
        },
        "tshift_backward_times": {
            Data: "",
            "index": -1,
            "imgList": [
                "img/tshift/times2.png", "img/tshift/times4.png",
                "img/tshift/times8.png", "img/tshift/times16.png",
                "img/tshift/times32.png"
            ]
        },
        "tshift_forward_times": {
            Data: "",
            "index": -1,
            "imgList": [
                "img/tshift/times2_forward.png", "img/tshift/times4_forward.png",
                "img/tshift/times8_forward.png", "img/tshift/times16_forward.png",
                "img/tshift/times32_forward.png"

            ]
        }

    },
    "langData":{
        "Program Progress":[],
        "Program Progress:":[],
        "T.Shift":[]
    },
    "recordTime":0,
    "playTime":0,
    rewrite: "tshiftPageFresh"

};

var tShiftTimer;
function tshiftPageFresh(data) {
    var opeData = data.operateData;
    data.tshift_program_title.Data =   opeData.tshift_program_title.Data;
    data.tshift_program_progress.MaxValue = opeData.tshift_program_progress.MaxValue;
    data.tshift_program_progress.MinValue = opeData.tshift_program_progress.MinValue;
    data.tshift_program_progress.DefaultValue = opeData.tshift_program_progress.DefaultValue;

    data.tshift_progress_location.MaxValue = opeData.tshift_progress_location.MaxValue;
    data.tshift_progress_location.MinValue = opeData.tshift_progress_location.MinValue;
    data.tshift_progress_location.DefaultValue = opeData.tshift_progress_location.DefaultValue;

    data.tshift_progress_range.DefaultValue = opeData.tshift_progress_range.DefaultValue;
    data.tshift_progress_range.MaxValue = opeData.tshift_progress_range.MaxValue;
    data.tshift_progress_range.MinValue = opeData.tshift_progress_range.MinValue;
}
var times = 1;
var gWantTimes = 1;
function drawProgressBar() {
    debugPrint( 'drawProgressBar');
    //return;
    updateStartLabel();
    const rate = 940 / (tsGetEndTime() - tsGetStartTime());
   // setCurrentDvbTime();
    var location = getCurrentDvbTime();// testRangeProgress() / 1000 / 60;
    var rangeEnd = getTShiftOffsetTime();//testLocationProgress(times) / 1000 / 60;
    var tmpPage = hiWebOsFrame.tshiftProgressPage;
    var loBar = tmpPage.getCaE('tshift_progress_location'), ranBar = tmpPage.getCaE('tshift_progress_range');
    //loBar.MaxValue = getEndTime();
    //ranBar.MaxValue = loBar.MaxValue;
    //debugPrint("drawPro,startTime()="+tsGetStartTime()+" endtitime:"+tsGetEndTime());
   // debug(I,"current playstate:"+model.timeshift.getPlayerState()+" playermode"+model.timeshift.getPlayerMode());
    location -= tsGetStartTime();
    rangeEnd -= tsGetStartTime();
    loBar.setvalue(0);
    ranBar.setvalue(0);
    debugPrint("drawProgressBar:::::::::rate:"+rate);
    debugPrint("drawProgressBar:::::::::location:"+location);
    debugPrint("drawProgressBar:::::::::rangeEnd:"+rangeEnd);
    //debugPrint(tsGetStartTime()+"=startTime(),"+ 'lobar:' + location + ". ranBar:" + rangeEnd);
    $("#tshift_progressbar_location").css("width", location * rate + "px");
    $("#tshift_progressbar_range").css("width", rangeEnd * rate + "px");
    $("#tshift_current_location_label").css("left", (location * rate - 40) + "px");
    $("#tshift_end_location").css("left", (rangeEnd * rate - 40) + "px");
    if(!!hiWebOsFrame.tshiftProgressPage.timeOutDraw){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOutDraw);
    }
    hiWebOsFrame.tshiftProgressPage.timeOutDraw = setTimeout("drawProgressBar()", 1000);
}
function updateStartLabel(){
    var opData = hiWebOsFrame.tshiftProgressPage.operateData;
    var off = Math.floor((tsGetStartTime()-getTShiftOffsetTime())/60);
    debugPrint("updateStartLabel!!!!!!!!!!!"+off);
    //hiWebOsFrame.tshiftProgressPage.rewriteDataOnly();

}
function exitTShift() {
    isShowing = false;
    debugPrint( "exit tshift!!!!!!!!!!!!!!");
    //debugWhoCallMe('exitTShift');
    try
    {
        if(!!hiWebOsFrame.tshiftProgressPage){
           // debugPrint( "clear  exit tshift!!!!!!!!!!!!!!"+hiWebOsFrame.tshiftProgressPage.timeOut);
            if(hiWebOsFrame.tshiftProgressPage.timeOut!=null){
                debugPrint( "clear  exit tshift!!!!!!!!!!!!!!");
                clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);

            }
            if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
                clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
                hiWebOsFrame.tshiftProgressPage.clickTimeOut = null;
            }
            if(hiWebOsFrame.getCurrentPageId() == "tshiftProgressPage_id")
            {
                debugPrint( "exit tshift, focus back to blank page");
                openLiveTVModule([Msg.INFO, 0]);
            }

            var tshiftCPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_location');
            tshiftCPB.stop();

            var tshiftPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_program_progress');
            tshiftPB.stop();

            var tshiftCurPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_range');
            tshiftCurPB.stop();
            hiWebOsFrame.tshiftProgressPage.operateData.tshiftCurrentTime = null;
            hiWebOsFrame.tshiftProgressPage.timeOut = null;
            hiWebOsFrame.tshiftProgressPage.close();
           // hiWebOsFrame.tshiftProgressPage = null;
        }
    }
    catch (ex)
    {
        debugE("exit tshift error:" + ex);
    }
}
/**
 * 全局按键响应事件
 */
function pageTtshiftStopBtnEnter(){
    debugPrint('pageTtshiftStopBtnEnter:stop');
   // hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_stop_btn');
    gTShiftFocus = 3;
    clickTShiftStopButton();
}
function pageTshiftPauseBtnEnter(){
    ///hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_play_btn');
    clickTShiftPausePlayButton();
}
function pageTshiftFrontBtnEnter(){
    //hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_forward_btn');
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    gTShiftFocus = 2;
    resetTShiftTimeout();
    clickTShiftFastForwardButton();
}
function pageTshiftBackBtnEnter(){
   // hiWebOsFrame.tshiftProgressPage.hiFocus('tshift_backward_btn');
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    gTShiftFocus = 0;
    resetTShiftTimeout();
    clickTShiftFastBackwardButton();
}

function pageTshiftPlayKeyBtnEnter(){
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    resetTShiftTimeout();
    var value = model.timeshift.getPlayState();
    model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
    var status = parseInt(value);
    if( status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X )
    {
        debugPrint( 'UI call Play !!!!!!!!!!');
        model.timeshift.Play();
    }
}


function pageTshiftPauseKeyBtnEnter(){
    if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
        clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
    }
    resetTShiftTimeout();
    var value = model.timeshift.getPlayState();
    model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
    var status = parseInt(value);
    if( status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X )
    {
        debugPrint( 'UI call Pause !!!!!!!!!!');
        gTShiftFocus = 1;
        model.timeshift.Pause();
    }
}

/**
 * 数字键切台操作
 * @type {*}
 */
var MapKeyValues = hiWebOsFrame.getKeyValues();

function tshiftCuttingMachine_keyNum0(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum0'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    //CHL_blankPageKeyDown(event);
}
function tshiftCuttingMachine_keyNum1(){
    exitTShift();
    var event={};
    event.keyCode = MapKeyValues['keyNum1'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    //CHL_blankPageKeyDown(event);
}
function tshiftCuttingMachine_keyNum2(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum2'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyNum3(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum3'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyNum4(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum4'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyNum5(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum5'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyNum6(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum6'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyNum7(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum7'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyNum8(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum8'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyNum9(){
    exitTShift();

    var event={};
    event.keyCode = MapKeyValues['keyNum9'];
    debugPrint('cuttingmachine:'+ JSON.stringify(event));
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyChannelUp(){
    exitTShift();
    //debugPrint('cuttingmachine:'+ JSON.stringify(event));
    var event={};
    event.keyCode = MapKeyValues['keyChannelUp'];
    liveTVHandlerProcess(event.keyCode);
}
function tshiftCuttingMachine_keyChannelDown(){
    exitTShift();
   // debugPrint('cuttingmachine:'+ JSON.stringify(event));
    var event={};
    event.keyCode = MapKeyValues['keyChannelDown'];
    liveTVHandlerProcess(event.keyCode);
}

function closeTshiftPage(){
    if(!!hiWebOsFrame.tshiftProgressPage){
        debugE("close TshiftPage!!!!!!!!!!!!!!!!");
        $("#tshiftProgressPage_id").css("display", "none");
        if (!!hiWebOsFrame.tshiftProgressPage.timeOut){
            clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);
            hiWebOsFrame.tshiftProgressPage.timeOut = null;
        }
        if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
            clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
            hiWebOsFrame.tshiftProgressPage.clickTimeOut = null;
        }
        var tshiftCPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_location');
        tshiftCPB.stop();

        var tshiftPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_program_progress');
        tshiftPB.stop();

        var tshiftCurPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_range');
        tshiftCurPB.stop();

        hiWebOsFrame.tshiftProgressPage.operateData.tshiftCurrentTime = null;
    }

}
function destoryTshiftHandler(){
    debugPrint( "destoryTshiftHandler!");
    if(!!hiWebOsFrame.tshiftProgressPage){
        if (!!hiWebOsFrame.tshiftProgressPage.timeOut){
            clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);
            hiWebOsFrame.tshiftProgressPage.timeOut = null;
        }
        if(!!hiWebOsFrame.tshiftProgressPage.clickTimeOut){
            clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
            hiWebOsFrame.tshiftProgressPage.clickTimeOut = null;
        }
        var tshiftCPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_location');
        tshiftCPB.stop();

       var tshiftPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_program_progress');
        tshiftPB.stop();

        var tshiftCurPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_range');
        tshiftCurPB.stop();
        hiWebOsFrame.tshiftProgressPage.operateData.tshiftCurrentTime = null;
        hiWebOsFrame.tshiftProgressPage = null;
    }


//    if(hiWebOsFrame.getCurrentPageId() != "pvrTshiftShowDialog" && !!tv){
//        hiWebOsFrame.blankPage.open();
//        hiWebOsFrame.blankPage.hiFocus();
//    }
}

var isShowing = true;

function tshiftcallback(){
    var prgrm = hiWebOsFrame.ptDialog.operateData.curprgrm;
    var opeData = hiWebOsFrame.tshiftProgressPage.operateData;
    if(tv)
    {
        if(!opeData.tshiftStartTime){
            opeData.tshiftStartTime = tsGetStartTime();
            opeData.tshiftEndTime = tsGetEndTime();
            opeData.BarInterval = opeData.tshiftEndTime - opeData.tshiftStartTime;
        }
        hiWebOsFrame.ptDialog.operateData.tshiftCurrentTime = parseInt(getDVBLongTime());

        opeData.tshift_program_title.Data =  prgrm.title;
        opeData.tshift_program_progress.MaxValue =parseInt(prgrm.endTime);
        opeData.tshift_program_progress.MinValue =parseInt(prgrm.startTime);
        opeData.tshift_program_progress.DefaultValue =parseInt(getDVBLongTime()) ;

        opeData.tshift_progress_location.MaxValue = getTShiftMaxValue();
        opeData.tshift_progress_location.MinValue = getTShiftMinValue();
        opeData.tshift_progress_location.DefaultValue = getLongTime() ;

        opeData.tshift_progress_range.DefaultValue = offsetTime;
        opeData.tshift_progress_range.MaxValue = opeData.tshift_progress_location.MaxValue;
        opeData.tshift_progress_range.MinValue = opeData.tshift_progress_location.MinValue;

        opeData.tshift_program_progress.begin = prgrm.begin;
        opeData.tshift_program_progress.end  = prgrm.end;

        if(g_thsiftRecordTime == 0){
            g_thsiftRecordTimeShow = offsetTime;
            g_thsiftRecordTime = offsetTime;
            if(g_tshiftRecordTimeout!=null){
                clearTimeout(g_tshiftRecordTimeout);
            }
            g_tshiftRecordTimeout = setTimeout(tShiftAddRecordTime,1000);
        }
    }

    hiWebOsFrame.tshiftProgressPage.rewriteDataOnly();

    var tshiftCPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_location');
    tshiftCPB.stop();
    startTShiftAnimation(tshiftCPB);
    var tshiftPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_program_progress');
    tshiftPB.stop();
    startTShiftAnimation(tshiftPB);

    var tshiftCurPB = hiWebOsFrame.tshiftProgressPage.getCaE('tshift_progress_range');
    tshiftCurPB.stop();
    startTShiftAnimation(tshiftCurPB);

}

function tShiftAddRecordTime(){
   // debugE("tShiftAddRecordTime!!!!!!!!!!!!!");
    g_thsiftRecordTimeShow++;
    if(g_tshiftRecordTimeout!=null){
        clearTimeout(g_tshiftRecordTimeout);
    }
    g_tshiftRecordTimeout = setTimeout(tShiftAddRecordTime,1000);
}

function startTShiftAnimation(pb) {
    var _this = pb,
        configs = _this.opts.ProgressBarConfig;
//    if(!!tshiftStop){
//        if (!!configs.timeout)clearTimeout(configs.timeout);
//        debugPrint(pb.id+'stop Animation----');
//    }
    if(tv)
    {
        switch(pb.id){
            case "tshift_progress_range":
                configs.value = parseInt(getTShiftOffsetTime());
                _this.MaxValue =getTShiftMaxValue();
                _this.MinValue = getTShiftMinValue();
                break;
            case "tshift_program_progress":
                setCurrentTShiftDvbTime();
                configs.value = getCurrentTShiftDvbTime();
                break;
            case "tshift_progress_location":
                //configs.value = Math.min(parseInt(getLongTime()),parseInt(getTShiftOffsetTime())) ;
                configs.value = getLongTime();
                _this.MaxValue = getTShiftMaxValue();
                _this.MinValue = getTShiftMinValue();
               // debugPrint('tshiftCurProgressbar value:'+configs.value);
                break;
        }
    }
    //debugPrint('getCursorTime :'+configs.value);
    _this.running_value = configs.value;

    if ((_this.running_value >= _this.MaxValue && _this.running_value > _this.MinValue)) {
        if (!!configs.timeout)clearTimeout(configs.timeout);
        if (!!configs.CompleteCallBack) {
            eval(configs.CompleteCallBack + '.call(_this)');
        }
        return;
    }

    _this.setvalue(pb.running_value);

    var timeout = setTimeout(startTShiftAnimation, _this.StepDuration, _this);

    configs.timeout = timeout;
}


var date =  Date.now();
var minute = 60 * 1000;
var second = 1000;
function initProgressInfo() {
    debugPrint(" initProgressInfo");
    try{
        var opData = hiWebOsFrame.tshiftProgressPage.operateData;
        opData.tshiftCurrentTime = date / second;
        opData.tshiftLocationTime = date / second;

        var time = model.timeshift.getBeginEndTime();
        opData.tshiftStartTime = Math.floor(time[0]);
        opData.tshiftEndTime = Math.floor(time[1]);
        drawProgressBar();
       // hiWebOsFrame.tshiftProgressPage.rewriteDataOnly();
    }catch(e){
        debugPrint(" initProgressInfo"+ e.message);
    }
}
/**
 * 当前时间，单位为s
 * @returns {number|*}
 */
function getCurrentTShiftDvbTime() {
    try {
        if(!hiWebOsFrame.ptDialog.operateData.tshiftCurrentTime){
            hiWebOsFrame.ptDialog.operateData.tshiftCurrentTime=parseInt(getDVBLongTime());
        }
        return hiWebOsFrame.ptDialog.operateData.tshiftCurrentTime;
    } catch (ex) {
        debugPrint("current dvb time error" + ex);
        return 0;
    }
}

function setCurrentTShiftDvbTime() {
    try {
        if (!hiWebOsFrame.ptDialog.operateData.tshiftCurrentTime) {
            hiWebOsFrame.ptDialog.operateData.tshiftCurrentTime
                = Math.floor(getDVBLongTime());
        } else {
            hiWebOsFrame.ptDialog.operateData.tshiftCurrentTime += 1;
            //debugPrint("i", "manual currenttime +1");
        }
    } catch (ex) {
        debugPrint("e", "set currentDvbTime" + ex);
    }
}

function getLongTime() {
    return tv ? model.timeshift.getCurrentPlayTime() : Date.now() / second;
}

function tsGetStartTime() {
    //var time = 0;
    var time = model.timeshift.getBeginEndTime();
    return parseInt(time[0]);
}

//最大容量结束时间，单位(s)
function tsGetEndTime() {
   // var time = 0;
    var time = model.timeshift.getBeginEndTime();
    var endTime = parseInt(time[1])-1;
    return endTime;
}

var offsetTime;
function getTShiftOffsetTime() {
    try{
        offsetTime = tv? Math.max(model.timeshift.getCurrentRecordTime(), 0):Date.now()/second;//todo 从api获得的当前播放时间
        //debugPrint("RecordTime:" + offsetTime);
    }catch (ex){
        debugPrint('model.getCurrentRecordTime, error:'+ex );
        return 0;
    }
    return offsetTime;
}

function getTShiftMinValue() {
    //todo
    var MinValue = tsGetStartTime();
    var MaxValue = tsGetEndTime();
    try
    {
        var offset = parseInt(getTShiftOffsetTime());
       // var tshiftpro = hiWebOsFrame.getPageByIdFromSdkPages('tshiftProgressPage_id');
        //var opeData = hiWebOsFrame.tshiftProgressPage.operateData;
        //MinValue = offset > opeData.tshiftEndTime?(offset-opeData.BarInterval):tsGetStartTime();
        if(offset>MaxValue){
            MinValue = offset - (MaxValue - MinValue);
        }

        debugPrint('MinValue:'+MinValue);
    }
    catch(ex){
        debugPrint('getTShiftMinValue:error '+ex);
    }

    return MinValue;
}


function getTShiftMaxValue() {
    //todo

    var MaxValue = tsGetEndTime();
    try
    {
        //var tshiftpro = hiWebOsFrame.getPageByIdFromSdkPages('tshiftProgressPage_id');
        var offset = parseInt(getTShiftOffsetTime());
//        var opeData = hiWebOsFrame.tshiftProgressPage.operateData;
//        MaxValue = offset > opeData.tshiftEndTime?offset: tsGetEndTime();
        if(offset > MaxValue){
            MaxValue = offset;
        }
        debugPrint('MaxValue:'+MaxValue);
    }
    catch(ex){
        debugPrint('getTShiftMaxValue:error '+ex);
    }
    return MaxValue;
}
