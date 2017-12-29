/**
 * Created by Admin on 14-6-20.
 */
//调用软键盘公用方法
var appStopping = false, speechRec = false;
var appStarting = false;
var appLoading = false;
var FABaseUrl = "";
//var originMute = 0;
var g_SystemFallbackPwd = "0532";//系统万能密码

var month = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    weekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var milliBase = 1000;
//pvr tshift switch-2015-2-9
var currentSelected = "";
var isExistProgramRecording = false;
var prgrmInfoOfPvrTshift = {};
var prgrmInfoOfRecordTip = {};
var isStandbyScheduleRecord = false;
var isTshiftToPvr = false;
var isScheduleRecord = false;
var isCurrentChannelOfSchedule = false;
var isNoNeedStopRecord = false;
var g_resumeDtvForRecord = false;
var endTimeOfScheduleRecord = null;
var opera4xStarted = false;

var dstUpdateTime = 0;
function recheckDSTSeconds(){
	if(!tv || FREEVIEWTEST) return;
	var nw = Date.now();
    if(Math.abs(nw - dstUpdateTime) > 1000){
        hisenseUIDSTSeconds = (parseInt(model.timerfunc.getDST()) * 3600);
        dstUpdateTime = nw;
    }
}

function getLocalTimeByUTC(utc){
    if(utc == null || !utc) return;
    if(!tv) return (utc + hisenseUITZSeconds);
    if(!FREEVIEWTEST) return (utc + hisenseUITZSeconds + hisenseUIDSTSeconds);
    model.timerfunc.setUTCToLocalTime(utc);
    return parseInt(model.timerfunc.getUTCToLocalTime());
}

function UTCToLocalTime(longTime, f) {
    recheckDSTSeconds();
    var d = new Date(getLocalTimeByUTC(longTime) * milliBase);
    var formatHour = getHourByFormat(d.getUTCHours(), (undefined != f) ? f : hisenseUITimeFormat);
    var m = "0" + d.getUTCMinutes();
    return formatHour.HOUR + ':' + m.slice(-2) + formatHour.APM.replace(/\s+$/, '');//hh:mm
}

function utcTimeToLocalTime24(longTime) {

    var d = new Date(longTime);
    var h = '0' + d.getUTCHours();
    var m = '0' + d.getUTCMinutes();
    return h.slice(-2) + ':' + m.slice(-2);//hh:mm

}

function utcTimeToLocalTime12(longTime) {

    var d = new Date(longTime);
    var h = d.getUTCHours(), str = 'AM';

    if (h > 12) {
        h -= 12;
        str = 'PM';
    }

    h = "" + h;
    var m = "0" + d.getUTCMinutes();
    return h.slice(-2) + ':' + m.slice(-2) + ' ' + str;//hh:mm

}

function UTCToLocalDate(longTime) {
    recheckDSTSeconds();
    var utcdate = new Date(getLocalTimeByUTC(longTime) * milliBase);
    var d = '0' + utcdate.getUTCDate();
    return d.slice(-2) + ' ' + getCurrentContentLanguage(month[utcdate.getUTCMonth()]);
}
function UTCToLocalWeek(longTime) {
    var utcdate = new Date(getLocalTimeByUTC(longTime) * milliBase);
    return getCurrentContentLanguage(weekShort[utcdate.getUTCDay()]);
}
function getHourByFormat(hour, format) {

    var formatHour = {}, str = " ";
    if (0 == format) {// 12h
        if (hour > 12) {
            hour -= 12;
            str = " PM"
        }
        else if (hour == 12) {
            str = " PM";
        }
        else if (hour == 0) {
            hour = 12;
            str = " AM"
        }
        else {
            str = " AM"
        }
    }
    else {
        hour = ('0' + hour).slice(-2);
    }
    formatHour.HOUR = hour;
    formatHour.APM = str;
    return formatHour;
}

function parseLocalTime() {
    var t = {};
    var localTime = [];
    if (tv) {
        localTime = model.timerfunc.getCurLocalTime();
    }
    else {
        var d = new Date();
        localTime = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    }

    DBG_INFO(objToString(localTime) + "; " + hisenseUITimeFormat);

    if("EU" == InitArea || 'SA' == InitArea){
        t.date = ('0' + localTime[2]).slice(-2) + ", " + getCurrentContentLanguage(month[localTime[1] - 1]) + " " + localTime[0];
    }
    else{
        t.date = getCurrentContentLanguage(month[localTime[1] - 1]) + " " + ('0' + localTime[2]).slice(-2) + ", " + localTime[0];
    }

    var formatHour = getHourByFormat(localTime[3], hisenseUITimeFormat);
    localTime[4] = ('0' + localTime[4]).slice(-2);
    t.time = formatHour.HOUR + ":" + localTime[4] + formatHour.APM.replace(/\s+$/, '');
    return t;
}
function getDVBTime() {

    var utcTime = 0;
    if (tv) {
        utcTime = parseInt(model.timerfunc.getBroadcastTime());
    }
    else {
        var d = new Date();
        utcTime = Math.ceil(d.getTime() / milliBase);
    }
    //utcTime += (parseInt(model.timerfunc.getDaylightSavings()) * 3600);
    return (new Date((utcTime + hisenseUITZSeconds) * milliBase));

}
function getDVBLongTime() {
    var utcTime = 0;
    if (tv) {
        utcTime = parseInt(model.timerfunc.getBroadcastTime());
        DBG_INFO("utcTime[" + utcTime + "], timeZone[" + hisenseUITZSeconds +
            "], localTime[" + UTCToLocalTime(utcTime, 1) + "]");
    }
    else {
        utcTime = Math.ceil(Date.now() / milliBase);
    }
    return utcTime;
}

function getSYSLongTime(){
    var utcTime = 0;
    if (tv) {
        utcTime = parseInt(model.timerfunc.getCurTime());
        DBG_INFO("system utcTime[" + utcTime + "]");
    }
    else {
        utcTime = Math.ceil(Date.now() / milliBase);
    }
    return utcTime;
}

function timeArrToSeconds(timeArr) {
    var arr = [];
    for (var i = 0; i < timeArr.length; i++) {
        var str = '' + timeArr[i];
        if("" === str.trim() || isNaN(str)){
            continue;
        }
        else{
            arr.push(parseInt(str));
        }
    }
    if(arr.length < 4) {
        DBG_ERROR("time array error: " + objToString(timeArr));
        return 0;
    }
    var hour = arr[0] * 10 + arr[1],
        minute = arr[2] * 10 + arr[3];
    return (hour * 60 + minute) * 60;

}

function timeAttrToUTCTime(utc, arr) {
    recheckDSTSeconds();
    var dstSeconds = getDSTSeconds();
    var d = new Date((utc + hisenseUITZSeconds + dstSeconds) * milliBase);
    d.setUTCHours(0);
    d.setUTCMinutes(0);
    d.setUTCSeconds(0);
    d.setUTCMilliseconds(0);

    return (d.getTime() / milliBase - hisenseUITZSeconds - dstSeconds + timeArrToSeconds(arr));
}

function getDateByUTC(utc){
    recheckDSTSeconds();
    var dstSeconds = getDSTSeconds();
    var d = new Date((utc + hisenseUITZSeconds + dstSeconds) * milliBase);
    return d.getUTCDate();
}

function UTCTimeToArr(utc){
    var arr=[];
    recheckDSTSeconds();
    var dstSeconds = getDSTSeconds();
    var d = new Date((utc + hisenseUITZSeconds + dstSeconds) * milliBase);
    var str = ('0' + d.getUTCHours()).slice(-2) + ":" + ('0' + d.getUTCMinutes()).slice(-2);
    for (var i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    return arr;
}

function getDSTSeconds() {
    recheckDSTSeconds();
    var dst = hisenseUIDSTSeconds;
    try {
        if(!tv || FREEVIEWTEST) {
            dst = (parseInt(model.timerfunc.getDST()) * 3600);
        }
    } catch (e){
        debugPrint("getDSTSeconds model.timerfunc.getDST() ex = "+e.message, DebugLevel.ERROR);
    }
    return dst;
}

function getDayByUTC(utc) {
    return (new Date((parseInt(utc) + hisenseUITZSeconds) * milliBase)).getUTCDay();
}

function repeatModeToRepeatStr(repeatMode) {

    var repeatStr = 'Once';
    switch (parseInt(repeatMode)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            repeatStr = 'Weekly';
            break;
        case 7:
            repeatStr = 'Once';
            break;
        case 8:
            repeatStr = 'Everyday';
            break;
    }
    return repeatStr;
}

function repeatStrToRepeatMode(repeat) {
    var repeatMode = 0;

    switch (repeat) {
        case 'Once':
            repeatMode = 7;
            break;
        case 'Everyday':
            repeatMode = 8;
            break;
        case 'Weekly':
            repeatMode = getDayByUTC(Date.now() / milliBase);
            break;
    }
    return repeatMode;
}


function RmdDef() {

}


var globalEnumIndex = 0;
RmdDef.RMD_PVR = globalEnumIndex++;
RmdDef.RMD_WATCH = globalEnumIndex++;

RmdDef.RMD_ADD = globalEnumIndex++;
RmdDef.RMD_EDIT = globalEnumIndex++;
var msgTimer = null;
function suolve(height, str) {
    var sub_length = height;
    var temp1 = str.replace(/[^\x00-\xff]/g, "**");
    var temp2 = temp1.substring(0, sub_length);
    var x_length = temp2.split("\*").length - 1;
    var hanzi_num = x_length / 2;
    sub_length = sub_length - hanzi_num;
    var res = str.substring(0, sub_length);
    if (sub_length < str.length) {
        var end = res + "...";
    }
    else {
        var end = res;
    }
    return end;
}

function fRandomBy(under, over) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * under + 1);
        case 2:
            return parseInt(Math.random() * (over - under + 1) + under);
        default:
            return 0;
    }
}

function subStringByKey(content, startKey, endKey) {
    var ret = "";
    if (content == null || startKey == null || endKey == null) {
        return ret;
    }
    var array = content.split(startKey);
    if (array.length > 1) {
        var str = array[1].split(endKey);
        if (str.length > 0) {
            ret = str[0];
        }
    }
    return ret;
}
function getCurrentContentLanguage(content) {
    //var sdkLangs = ['eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'chi'];
    //var crntLang = hiWebOsFrame.getCurrentLanguage();
    //var idx = Math.max(sdkLangs.indexOf(crntLang), 0);
    //var idx = hiWebOsFrame.getCurrentLanguageIndex();
    try {
        return !!langPackages[content] ? langPackages[content][0] : content; //OneLangPackageXHR
    }
    catch (ex) {
        DBG_ERROR(ex.message);
        return content;
    }
}
function showMsg(title, content, timeOut, callBack, unlock) {

    title = !title ? 'Information' : title;

    timeOut = !timeOut ? 3 : timeOut;
    $('#msg_title').html(getCurrentContentLanguage(title));
    $('#msg_content').html(getCurrentContentLanguage(content));
    $('#mymsgbox').css('display', 'block');
    if(unlock) {
        if(!!msgTimer) {
            clearTimeout(msgTimer);
            msgTimer = null;
        }
    } else {
        hiWebOsFrame.lockAllKeys("msg");
    }
    msgTimer = setTimeout(function () {
        $('#mymsgbox').css('display', 'none');
        $('#msg_title').html('');
        $('#msg_content').html('');
        if(!unlock) {
            hiWebOsFrame.unLockAllKeys("msg");
        }
        if(!!callBack){
            callBack();
        }
        if(unlock) {
            msgTimer = null;
        }
    }, timeOut * 1000);

}

var tvTipTimer = null;
function showTVTip(content, timeOut, callBack) {

    if (!!tvTipTimer) {
        clearTimeout(tvTipTimer);
    }
    timeOut = !timeOut ? 3 : timeOut;

    $('#tv_tips_content').html(getCurrentContentLanguage(content));
    $('#tv_tips_bkg').css('display', 'block');

    tvTipTimer = setTimeout(function () {
        $('#tv_tips_bkg').css('display', 'none');
        $('#tv_tips_content').html('');
        if (!!callBack) {
            callBack();
        }
    }, timeOut * 1000);
}

function readXMLDOM(url, workRoot){


    if (!tv) {
        var xmlBasePath = (workRoot == 2) ? '../../' : "../../appdata/";
        var dom = loadxmldoc(xmlBasePath + url + "?time=" + Date.now());
        return dom;
    }
    var dom = null;
    DBG_INFO('xml path = ' + url + '; workRoot = ' + workRoot);
    var obj = Hisense.File.read(url, workRoot);
    if (isNaN(obj)) {
        try {
            dom = (new DOMParser()).parseFromString(obj, "text/xml");
        }
        catch (e) {
            debugPrint("launcher_debug_readXML_error:" + e.message, DebugLevel.ERROR);
            dom = null;
        }
        return dom;
    }
    else {
        debugPrint("error in reading xml: " + obj, DebugLevel.ERROR);
        return null;
    }
}

function readXML(url, workRoot) {
    var dom = readXMLDOM(url, workRoot);

    var myJsonObject = JSON.parse(xml2json(dom, "  "));
    //需要判断是否转换成功
    if (isJson(myJsonObject)) {
        return myJsonObject;
    }
    else {
        debugPrint("launcher_debug_myJsonObject: " +
        objToString(myJsonObject), DebugLevel.ERROR);
        return null;
    }
}

var xmlhttpMain = null;
function getxmlhttp() {
    if (window.ActiveXObject) {
        try {
            xmlhttpMain = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            xmlhttpMain = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    else if (window.XMLHttpRequest) {
        xmlhttpMain = new XMLHttpRequest();
    }
    return xmlhttpMain;
}

function getxml(x) {
    if(null == xmlhttpMain){
        getxmlhttp();
    }
    if (xmlhttpMain != null) {
        xmlhttpMain.open("GET", x, false);
        xmlhttpMain.send(null);
    }
    else {
        DBG_INFO("Your browser does not support XMLHTTP.11");
        return false;
    }
    return (xmlhttpMain);
}


function loadxmldoc(x) {
    try {
        DBG_INFO("XMLHttpRequest[" + x + "]");
        var xmlDoc;
        if(window.ActiveXObject) {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.load(x);
        }
        else if(window.XMLHttpRequest) {
            xmlDoc = getxml(x).responseXML;
        }
        else {
            return false;
        }


        return xmlDoc;
    }
    catch (ex){
        DBG_ERROR(ex.message);
	return null;
    }
}


function isJson(obj) {
    var isjson = typeof (obj) == "object" && !obj.length &&
        obj.toString().toLowerCase() == "[object object]";
    return isjson;
}


function isFileExist(path, workRoot) {
    var ret = false;
    try{
        ret = Hisense.File.exists(path, workRoot);
        DBG_INFO("file[" + path + "] exist[" + ret + "]");
    }
    catch(ex){
        DBG_ERROR(ex.message);
    }
    return ret;
}
var fileDataTemp = {}
/**
 * 从本地读文件，如果tv=false，从内存创建新的在读
 * @param path
 * @param workRoot
 * @returns {*}
 */
function readFileFromNative(path, workRoot) {
    if (!tv) {

        if (!fileDataTemp[path]) {
            switch (path) {
                case "weather/cities":
                    fileDataTemp[path] = accuweatherTempData
                    break;
                case "weather/current/15-349727_1_AL":
                    fileDataTemp[path] = dataTemp["15-349727_1_AL"]["current"];
                    break;
                case "weather/current/7894":
                    fileDataTemp[path] = dataTemp["7894"]["current"];
                    break;
                case "weather/forecast/15-349727_1_AL":
                    fileDataTemp[path] = dataTemp["15-349727_1_AL"]["forecast"];
                    break;
                case "weather/forecast/7894":
                    fileDataTemp[path] = dataTemp["7894"]["forecast"];
                    break;
                case "launcher/Appinfo.json":
                    fileDataTemp[path] = favappinfo;
                    break

            }
        }
        return fileDataTemp[path];
    }
    DBG_INFO('read native file "' + path + '"; workRoot = ' + workRoot);
    var res = Hisense.File.read(path, workRoot);
    var obj = null;
    if (isNaN(res)) {
        obj = strToObject(res);
    }
    else {
        // DBG_INFO('read native file "' + path + '" error, code =' + res, DebugLevel.ERROR);
    }
    return obj;
}

/**
 * 写文件到本地，如果tv==false，写入内存
 * @param path
 * @param content
 * @param workRoot
 */
function writeFileToNative(path, content, workRoot) {
    if (!tv) {
        fileDataTemp[path] = strToObject(content);
        return true;
    }
    var res = Hisense.File.write(path, content, workRoot);
    if (0 != res) {
        DBG_INFO('write file "' + path + '" error, code = ' + res, DebugLevel.ERROR);
        return false;
    }

    return true;
}

/**
 * 缓存网路文件到本地
 * @param urlArr
 * @param cacheDir
 * @param cacheIndex
 * @returns {boolean}
 */
function cacheFileToNative(urlArr, cacheDir, cacheIndex) {

    if (0 == urlArr.length) return;

    if (!tv) {
        if (!fileDataTemp[cacheIndex]) fileDataTemp[cacheIndex] = [];
        var str = objToString(fileDataTemp[cacheIndex]);

        for (var i = 0; i < urlArr.length; i++) {
            if (0 > str.indexOf(urlArr[i])) {
                fileDataTemp[cacheIndex].push({
                    local_url: urlArr[i],
                    original_url: urlArr[i]
                });
            }
        }
        return true;
    }

    var res = Hisense.File.cache(objToString(urlArr), cacheDir, cacheIndex);
    if (0 != res) {
        DBG_INFO('cache file error, code = ' + res, DebugLevel.ERROR);
        return false;
    }

    return true;
}

function readCacheIndex(path) {
    if (!tv) {

        return fileDataTemp[path];
    }
    DBG_INFO('read cache file "' + path + '"');
    var res = Hisense.File.readCacheIndex(path);
    var obj = null;
    if (isNaN(res)) {
        obj = strToObject(res);
    }
    else {
        DBG_INFO('read cache file "' + path + '" error, code =' + res, DebugLevel.ERROR);
    }
    return obj;
}

function readAmStatus(isStart, destapp, onReadStatus) {

    if (!tv) {
        onReadStatus(true);
        return;
    }
    var maxTimes = 10, readedTimes = 0, readedInterval = 0;
    DBG_INFO("dest app = " + destapp);
    readedInterval = setInterval(function () {
        if (readedTimes > maxTimes) {

            DBG_INFO("read am status timeout");
            clearInterval(readedInterval);
            onReadStatus(false);
        }
        else {
            readedTimes++;
            var res = Hisense.File.read("am_status", 0);
            DBG_INFO("am_status =" + res + "; read times = " + readedTimes);
            if ((isStart && res == destapp) || (!isStart && res != destapp)) {
                clearInterval(readedInterval);
                onReadStatus(true);
            }
        }
    }, 200);
}

function getFreeRam() {
    var ram = 0;
    try {
        ram = Math.ceil(parseInt(Hisense.System.getFreeRam()) / 1024 / 1024);
        DBG_INFO("free ram is " + ram + "MB", DebugLevel.ALWAYS);
        if (ram < 100) {
            DBG_ERROR("current tv ram should be enlarged, free ram is " + ram);
            ram = 10000;
        }
    }
    catch (ex) {
        DBG_INFO("get free ram error: " + ex.message, DebugLevel.ERROR);
        ram = 10000;
    }
    return ram;
}

/**
 * 下载文件到本地
 * @param url
 * @param path
 * @param workRoot
 * @param timeout
 * @returns {boolean}
 */
function downloadFileToNative(url, path, workRoot, timeout) {

    try {
        timeout = !!timeout ? timeout : 10;
        deleteNativeFile(path, workRoot);
        DBG_INFO('download url = ' + url);
        var asyncSuccess = tv ? Hisense.File.downloadAsync(url, path, workRoot, timeout) : 0;
        DBG_ALWAYS("async success flag[" + asyncSuccess + "]");
        if (asyncSuccess != 0) {
            DBG_INFO('async download failed "' + url + '"', DebugLevel.ERROR);
            return false;
        } else {
            return true;
        }
    } catch (ex) {
        DBG_ERROR(ex);
    }
}

/**
 * 从本地删除文件，如果tv==false，从内存删除
 * @param path
 * @param workRoot
 */
function deleteNativeFile(path, workRoot) {
    if (!tv) {
        fileDataTemp[path] = null;
        return;
    }
    var ret = Hisense.File.delete(path, workRoot);
    if (0 != ret) {
        //DBG_INFO('remove native file: "' + path + '" error. Error code = ' + ret, DebugLevel.ERROR);
    }
    else {
        DBG_INFO('remove native file: "' + path + '" success');
    }
}

/**
 * 重命名(移动)本地文件，如果tv==false，从内存修改
 * @param destPath
 * @param srcPath
 * @param destWorkingRoot
 * @param srcWorkingRoot
 */
function moveNativeFile(destPath, srcPath, destWorkingRoot, srcWorkingRoot) {
    if (!tv) {
        var tempSrcData = {}, tempDestData = {};
        cloneObj(fileDataTemp[srcPath], tempSrcData);
        cloneObj(fileDataTemp[destPath], tempDestData);

        fileDataTemp[srcPath] = tempDestData;
        fileDataTemp[destPath] = tempSrcData;

        return;
    }
    var ret = Hisense.File.move(destPath, srcPath, destWorkingRoot, srcWorkingRoot)
    if (0 != ret) {
        DBG_INFO('move native file: "' + srcPath + '"' +
            ' to file:  "' + destPath + '" error. Error code = ' + ret, DebugLevel.ERROR);
    }
    else {
        DBG_INFO('move native file: "' + srcPath + '"' +
            ' to file:  "' + destPath + '" success');
    }
}

/**
 * 检查文件下载状态
 * @param path
 * @param workRoot
 * @param callback
 * @param identify
 * @param m_interval
 * @param max_times
 */
var dnldChkTimer = {
    current: -1,
    forecast: -1,
    search: -1,
    lnchrState: -1
};
function checkDownloadState(path, workRoot, callback, identify, m_interval, max_times) {

    !m_interval && (m_interval = 2000);
    !max_times && (max_times = 5);
    var m_times = 0;

    var timerKey = null;

    if (null != identify.match("current")) {
        timerKey = "current";
    }
    else if (null != identify.match("forecast")) {
        timerKey = "forecast";
    }
    else if (null != identify.match("search")) {
        timerKey = "search";
    }
    else if (null != identify.match("lnchrState")) {
        timerKey = "lnchrState";
    }
    else {
        DBG_INFO("download checktimer error:" + identify);
        callback.call(this, null, identify);
        return;
    }

    clearInterval(dnldChkTimer[timerKey]);

    dnldChkTimer[timerKey] = setInterval(function () {
        var obj = readFileFromNative(path, workRoot);
        DBG_INFO('check file: "' + path + '" download state. times = ' + (m_times++));

        if (!!obj) {

            clearInterval(dnldChkTimer[timerKey]);
            dnldChkTimer[timerKey] = -1;
            DBG_INFO('download file: "' + path + '" success');
            callback.call(this, obj, identify);

        }
        else if (m_times >= max_times) {

            clearInterval(dnldChkTimer[timerKey]);
            dnldChkTimer[timerKey] = -1;
            DBG_INFO('download file: "' + path + '" failed', DebugLevel.WARNING);
            callback.call(this, null, identify);

        }
    }, m_interval);
}


function isHiPageApp(command) {
    var hipageApp =
        "setting_pic_Mira_page" == command ||
            "accuweather_main" == command ||
            "launcher_allapps" == command;

    return hipageApp;
}
function startHiPageApp(command, storeType) {

    DBG_INFO("start hipage app: " + command);
    if (command == 'setting_pic_Mira_page') {
        hiWebOsFrame.createPage('setting_pic_Mira_page', null, null, null, function (a) {
            //closeDOthersModule("miracast");
            setWindowSize(0, 0, 1920, 1080);
            pauseDTV();
            hiWebOsFrame.miracast = a;
            if(g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite"){
                if (!canProcessVolume()){
                    if(tv && 0 == vol.getPageMute()){
                        model.sound.setMainMute(0);
                    }
                    vol.openMutePage();
                }
            }else{
                if (!canProcessVolume() && typeof (launcherNBar) != 'undefined') {// recover volume directly
                    launcherNBar.recoverMuteAndIconDirectly();
                }
            }
            if (hiWebOsFrame.getCurrentPageId() == "launcher_allapps") {
                hiWebOsFrame.miracast.origin = hiWebOsFrame["launcher_allapps"];
            }
            else {
                hiWebOsFrame.miracast.origin = hiWebOsFrame.myLauncher;
            }
            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            tryToCloseLauncher();
            tryToCloseAllApps();

            model.miracast.ActionStartApp();
            model.miracast.onStatusChaged = onMiracastChanged;
            var statu = model.miracast.getStatus();
            DBG_INFO("2.!!!statu:" + statu);
            // miracastData.setting_pic_Mira_state.Data = "Wait for connecting to external devices";
            a.open();
            a.hiFocus();
            DBG_INFO("4.open end....:");

            try {
//		        debugE(hiWebOsFrame.getCurrentPage().module);
//		        debugE(hiWebOsFrame.getCurrentPage().origin.module);
                var logParam = "";
                if ((hiWebOsFrame.getCurrentPage().module == "launcher") || (hiWebOsFrame.getCurrentPage().origin.module == "launcher")) {
//			        debugE(command);
                    if(g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite"){
	                    logParam = "Anyview Cast";
                    }else{
                        logParam = launcherNBar.getLauncherAppName(command);
                    }
                }
                else if ((hiWebOsFrame.getCurrentPage().module == "allapps") || (hiWebOsFrame.getCurrentPage().origin.module == "allapps")) {
//			        debugE(command);
                    logParam = launcherAApps.getAllAppsName(command);
                }
                else {
                    debugPrint("Can't get the App's name", DebugLevel.ERROR);
                }
                debugPrint("logReport__________begin", DebugLevel.WARNING);
                logReport("GTAPPRun", logParam, 1);

                debugPrint("logReport__________end", DebugLevel.WARNING);
            }
            catch (ex) {
                debugE(ex.message);
            }

        });
    }
    else {
        if (isLauncherOpen()) {
            if(g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite"){

            }else{
                launcherNBar.setNeedRecoverMute(false);
            }
	        createModulePage(command, hiWebOsFrame.myLauncher);
        }
        else {
            createModulePage(command, hiWebOsFrame.getCurrentPage());
        }
        if (HSAPPURL.ACCUWEATHER == command) {

            try {
//				debugE(hiWebOsFrame.getCurrentPage().module);
//				debugE(hiWebOsFrame.getCurrentPage().origin.module);
                var logParam = "";
                if (!storeType) {
                    logParam = "AccuWeather";
                }
                else {
                    if ((hiWebOsFrame.getCurrentPage().module == "launcher") || (hiWebOsFrame.getCurrentPage().origin.module == "launcher")) {
//					debugE(command);
                        if(g_launcherBrand == "SA_OEM"){
	                        logParam = "AccuWeather";
                        }
                        else if(g_launcherBrand == "VIDAALite") {
                            logParam = VIDAALiteLauncherAccuWeatherLogReport();
                        }
                        else{
                            logParam = launcherNBar.getLauncherAppName(command);
                        }
                    }
                    else if ((hiWebOsFrame.getCurrentPage().module == "allapps") || (hiWebOsFrame.getCurrentPage().origin.module == "allapps")) {
//					debugE(command);
                        logParam = launcherAApps.getAllAppsName(command);
                    }
                    else {
                        debugPrint("Can't get the App's name", DebugLevel.ERROR);
                    }
                }

                debugPrint("logReport__________begin", DebugLevel.WARNING);
                logReport("GTAPPRun", logParam, 1);
                debugPrint("logReport__________end", DebugLevel.WARNING);
            }
            catch (ex) {
                debugE(ex.message);
            }

        }
    }
}

function isPicasa(command) {
    return (!!command && command.indexOf("picasaIndex.html") > -1);
}

/**
 * 发送am命令
 * @param cmdType
 * @param command
 */
function sendCommndToTV(cmdType, command, setRunTimes, storeType) {

    DBG_ERROR('command = ' + command + '; command type = ' + cmdType + ';command storeType = ' + storeType);
    // if(storeType == 97){
    // open Wuaki (Rakuten TV) with HbbTV to avoid UHD/DASH/PlayReady issues
    if(storeType == 97 || command == HSAPPURL.WUAKI){
        cmdType = CmdURLType.START_HBBTV_APP;
    }
    switch (cmdType) {

        case CmdURLType.START_BROWSER:
            if(command && command.indexOf("mediaIndex.html")>-1){
                asyncStartApp("app_lau_browser", assembleMediaURL(command), false, false, false, false, storeType);
            }else{
                asyncStartApp("app_lau_browser", command, false, false, false, false, storeType);
            }


            break;
        case CmdURLType.STOP_BROWSER:


            break;
        case CmdURLType.HIPAGE:
        case CmdURLType.START_NATIVEAPP:
            if (!command) {
                DBG_ALWAYS("command is null");
                showMsg("", "Trying to update the recommendation");
                return;
            }
            if ("accuweather" == command) {
                if(isLauncherOpen() && null != hiWebOsFrame.getCurrentPage() &&
                    "launcher_stabar" != hiWebOsFrame.getCurrentPageId()){
                    if(g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite"){

                    }else{
                        launcherNBar.setFocusContent(true);
                    }
                }
                startHiPageApp(HSAPPURL.ACCUWEATHER, storeType);
            }
            else if ("allapps" == command) {

                if (typeof launcherAApps != UNDEFINED_DEFSTR) {
                    launcherAApps.resetExitedIndex(true);
                }
                startHiPageApp(HSAPPURL.ALLAPPS);
            }
            else if ("miracast" == command) {
                startHiPageApp(HSAPPURL.MIRACAST);
            }
            else if ("picasa" == command) {
                DBG_INFO("this app is picasa, redirect");
	            HSAPPURL.PICASA = hiWebOsFrame.getCurrentArea() == "SA" ? "file:///3rd_rw/picasa/picasaIndex.html" : "file://3rd_rw/picasa/picasaIndex.html";
                sendCommndToTV(CmdURLType.START_BROWSER, HSAPPURL.PICASA, true, storeType);
                return;
            }
            else if ("terratv" == command) {
                DBG_INFO("this app is terratv, redirect");
                sendCommndToTV(CmdURLType.START_BROWSER, HSAPPURL.TERRATV, true, storeType);
                return;
            }
            else if ("dailymotion" == command) {
                sendCommndToTV(CmdURLType.START_WEBAPP, HSAPPURL.DAILYMOTION, true, storeType);
                return;
            }
            else if ("gamecenter" == command) {
                storeType = 96;
                sendCommndToTV(CmdURLType.START_WEBAPP, HSAPPURL.GAMECENTER, true, storeType);
                return;
            }
            else if ("pandora" == command) {
                sendCommndToTV(CmdURLType.START_WEBAPP, HSAPPURL.PANDORA, true, storeType);
                return;
            }
            else if ("media" == command) {
	            HSAPPURL.DMP = getMediaURL(0);
	            sendCommndToTV(CmdURLType.START_BROWSER, HSAPPURL.DMP, true, storeType);
                return;
            }
            else if ("recentwatch" == command) {
	            openlauncherrecentwatch();
	            g_oemlauncherfocusindex = LaucherFocuspageIndex.recentwatch;
	            return;
            }
            else if ("CATAL" == command || "IPLAYER" == command ||
                "NEWS" == command || "SPORT" == command || "HDPLUS" == command) {
				if(model.tvservice.getHbbTvKeySet()==0x2000)
				{
					DBG_ALWAYS("HBBTV IS STARTING CANT OPEN URL");
					return;
				}

                sendCommndToTV(CmdURLType.START_HBBTV_APP, HSAPPURL[command], true);
	            return;
            }
            else if (command.indexOf("bbc.co.uk") > -1 || command.indexOf("bbctvapps.co.uk") > -1) {
				if(model.tvservice.getHbbTvKeySet()==0x2000)
				{
					DBG_ALWAYS("HBBTV IS STARTING CANT OPEN URL");
					return;
				}
				sendCommndToTV(CmdURLType.START_HBBTV_APP, command, true);
	            return;
            }
            else {
                //native app start by am
                if ("browser" == command) {
                    asyncStartApp("app_hi_browser", HSAPPURL.BROWSER, false);
                }
                else if ("appstore" == command) {

                    if ("EU" == hiWebOsFrame.getCurrentArea()) {
                        storeType = 81;
                    }
                    else if ("EM" == hiWebOsFrame.getCurrentArea()) {
                        storeType = 95;
                    }
                    asyncStartApp("app_tv_store", HSAPPURL.APPSTORE, false, false, false, false, storeType);
                    //asyncStartApp("app_netrange", HSAPPURL.APPSTORE, false);
                }
                else {
                    var appId = 'app_' + command;
//                    if(command.indexOf("vudu_movies") > -1 // vudu movie
//                        || command.indexOf("http") > -1) { // vudu poster
//                        appId = "app_vudu";
//                    }
                    if (command.indexOf("http") > -1) {

                        asyncStartApp("app_tv_store", command, false, false, false, false, storeType);
                    }
                    else {

                        asyncStartApp(appId, command, false, false, false, false, storeType);
                    }
                }
            }

            break;

        case CmdURLType.VUDU_POSTER:
            asyncStartApp("app_vudu", command, false);
            break;
        case CmdURLType.STOP_NATIVEAPP:


            break;
        case CmdURLType.POSTER:
        case CmdURLType.START_WEBAPP:

            if ("terratv" == command) {
		        DBG_INFO("this app is terratv, redirect");
	            sendCommndToTV(CmdURLType.START_BROWSER, HSAPPURL.TERRATV, true, storeType);
		        return;
            }
            else if ("dailymotion" == command) {
	            command = HSAPPURL.DAILYMOTION;
            }
	        else if (!command || command.indexOf("http") < 0) {
                DBG_INFO("url error");
                showMsg("", "Trying to update the recommendation");
                return;
            }

	        if('SA' == hiWebOsFrame.getCurrentArea() && '94' == storeType && // judgement for Newsan AD
		        ( ( command.indexOf('||3') > -1 && '||3' == command.substring(command.length - 3, command.length) ) ||
			      ( command.indexOf('||20') > -1 && '||20' == command.substring(command.length - 4, command.length) ) ||
			      ( command.indexOf('||30') > -1 && '||30' == command.substring(command.length - 4, command.length) ) ) ) {

				var tmpVar = command.substring(command.indexOf('||') + 2, command.length);

				switch (tmpVar) {
					case '3' :
						asyncStartApp("app_hi_browser", command, false);
						break;
					case '20' :
						command = command.substring(0, command.indexOf('||20'));
						asyncStartApp("app_tv_store", command, false, false, false, false, storeType);
						break;
					case '30' :
						command = command.substring(0, command.indexOf('||30'));
						asyncStartApp("app_youtube", command, false);
						break;
					default :
						break;
				}
		        return;
	        }

            //asyncStartApp("app_netrange", command, false);
            asyncStartApp("app_tv_store", command, false, false, false, false, storeType);

            break;
        case CmdURLType.STOP_WEBAPP:


            break;
        case CmdURLType.START_HBBTV_APP:
            //asyncStartApp("app_tv_store", command, false);
            DBG_ERROR('start a hbbtv app!!!!!!!!!!!!!!!!!'  +command);
            var tmpCmd = command;
            deviceKeySet.HBBTVORIGIN = hiWebOsFrame.getCurrentPage();
            setWindowSize(0, 0, 1920, 1080);
            pauseDTV();
            closeDOthersModule();
            startHBBTVAppLoading();
            deviceKeySet.HBBTVNEEDRESUME = false;
            openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0, Msg.SEARCH, 0, Msg.AUDIO, 0, Msg.SIGNAL, 0]);
            setTimeout(function() {
                deviceKeySet.HBBTVAPPON = true;
                // sendAM(":am,hbbtv,:open=" + command);
                sendAM(":am,opera4x,hbbtv:open=" + tmpCmd);
            },1000);
            break;
        case CmdURLType.YOUTUBE:
	        if (!command) {
		        DBG_ALWAYS("command is null");
		        showMsg("", "Trying to update the recommendation");
		        return;
	        }
            asyncStartApp("app_youtube", command, false);
            break;
        case CmdURLType.FREEVIEW_APP:
            //startHBBTVAppLoading(command);
            //sendCommndToTV(CmdURLType.START_HBBTV_APP, command, true);
            //return false;
            //model.fvpepg.setFEPGAppURL([command, getFileName(command)]);
            break;
        default :
            setRunTimes = false;
            DBG_INFO('can not find this command type');
            break;
    }

    if (setRunTimes) {
        if (!!HSAPPURLREVERSE[command]) {
            command = HSAPPURLREVERSE[command];
        }
        setAppRunTimesByUrl(command);
	    if(g_launcherBrand == "SA_OEM") {
		    setAppInfoForSettingRecentUse(command,cmdType);
	    }
    }
}

function onFEPGAppURLChanged(url){
    DBG_INFO(url);
    if (url && FABaseUrl == url[0]) {
        sendCommndToTV(CmdURLType.START_HBBTV_APP, url[1], true);
    }
}

function CmdURLType() {

}
CmdURLType.NONE = 0;

CmdURLType.DEFAULT = 10;
CmdURLType.POSTER = 14;
CmdURLType.VUDU_POSTER = 92;

CmdURLType.START_NATIVEAPP = 37;
CmdURLType.HIPAGE = 37; // old == 60, now same as nativeapp

CmdURLType.STOP_NATIVEAPP = 130;

CmdURLType.START_WEBAPP = 36;
CmdURLType.STOP_WEBAPP = 136;

CmdURLType.START_BROWSER = 40;
CmdURLType.STOP_BROWSER = 140;

CmdURLType.AMCOMMAND = 50;
CmdURLType.YOUTUBE = 51;
CmdURLType.LAU_BROWSER_PICASA = 100;
CmdURLType.LAU_BROWSER_HIMEDIA = 200;
CmdURLType.LAU_BROWSER_WIZARD = 300;
CmdURLType.LAU_BROWSER_EPOS = 400;
CmdURLType.LAU_BROWSER_TERRATV = 1000;

CmdURLType.PAUSE_NETFLIX = 500;
CmdURLType.STOP_NETFLIX = 600;
CmdURLType.START_FROM_DIALSERVER = 700;
CmdURLType.START_FROM_STANDBY = 800;

CmdURLType.STOP_FROM_DIALSERVER = 900;

CmdURLType.START_HBBTV_APP = 60;
CmdURLType.FREEVIEW_APP = 360;
function HSAPPURL() {
}
HSAPPURL.CATAL = "http://www.test.bbc.co.uk/catal/?config=precert";
HSAPPURL.IPLAYER = "http://www.test.bbc.co.uk/iplayer/?config=precert";
HSAPPURL.NEWS = "http://www.test.bbc.co.uk/newsontal/?config=precert"
HSAPPURL.SPORT = "http://www.test.bbc.co.uk/tvapp/sport/?config=precert"
HSAPPURL.HDPLUS = "http://test.hdpportal.de/smarttv/hdplus/replayportal/index.html"
HSAPPURL.ACCUWEATHER = "accuweather_main";
HSAPPURL.ALLAPPS = "launcher_allapps";
HSAPPURL.MIRACAST = "setting_pic_Mira_page";
//HSAPPURL.PANDORA = "https://tv.pandora.com?model=MTK5655FHDTV&vendor=Hisense&type=TV&modelYear=2015&badge=fqq53jv4jertlm4sgosds73nrnfikwaxpsktfgo2yj3o3dit44ha&mouseEnabled=true&playKey=415&skipKey=417&pauseKey=19&backKey=8";
//HSAPPURL.PANDORA = "https://tv-beta.savagebeast.com/?model=test&vendor=hisenseusa_corp.&type=HTML5&modelYear=2014&badge=w3ley5fgqgqcxphfnhqeodswuy3axpxp77chusfrwg27esr22rta&mouseEnabled=true&playKey=415&skipKey=417&pauseKey=19&backKey=8"
HSAPPURL.PANDORA = "https://tv.pandora.com/?model=MTK5657&vendor=Hisense&type=HTML5&modelYear=2015&badge=anzi24klahxflijrfrgcwc7irn5ylgcyv4dg4e3idowzoolbiyta&mouseEnabled=true&playKey=415&skipKey=417&pauseKey=19&backKey=8";
HSAPPURL.DAILYMOTION = "http://www.dailymotion.com/tv";
HSAPPURL.GAMECENTER = "http://appsol.accedo.tv/hisense/matrix.html";
HSAPPURL.BROWSER = "hi_browser";
HSAPPURL.APPSTORE = "tv_store";//netrange
HSAPPURL.TERRATV = "file:///3rd_rw/terratv/terratv.html";
HSAPPURL.WUAKI = "https://hisense-app.wuaki.tv/";


var HSAPPURLREVERSE = {

    "file://3rd_rw/picasa/picasaIndex.html": "picasa",
	"file:///3rd_rw/picasa/picasaIndex.html": "picasa",
    // "file://3rd_rw/UI/hisenseUI/mediaIndex.html?module=fileBrowser&type=0": "media",
    // "file:///3rd_rw/UI/hisenseUI/mediaIndex.html?module=fileBrowser&type=0": "media",
    "accuweather_main": "accuweather",
    "setting_pic_Mira_page": "miracast",
//    "file://3rd_rw/terratv/terratv.html": "terratv",
    "file:///3rd_rw/terratv/terratv.html": "terratv",
    //"https://tv.pandora.com?model=MTK5655FHDTV&vendor=Hisense&type=TV&modelYear=2015&badge=fqq53jv4jertlm4sgosds73nrnfikwaxpsktfgo2yj3o3dit44ha&mouseEnabled=true&playKey=415&skipKey=417&pauseKey=19&backKey=8": "pandora",
    "https://tv.pandora.com/?model=MTK5657&vendor=Hisense&type=HTML5&modelYear=2015&badge=anzi24klahxflijrfrgcwc7irn5ylgcyv4dg4e3idowzoolbiyta&mouseEnabled=true&playKey=415&skipKey=417&pauseKey=19&backKey=8": "pandora",

    "http://www.dailymotion.com/tv": "dailymotion",
    "http://appsol.accedo.tv/hisense/matrix.html": "gamecenter",
    "hi_browser": "browser",
    "tv_store": "appstore",
    "https://hisense-app.wuaki.tv/": "wuaki"
}

//CmdURLType.START_HI_BROWSER = 70;
//CmdURLType.STOP_HI_BROWSER = 170;

function setAppRunTimesByUrl(url) {

    if ('launcher_allapps' == url || !url) return;

    var runTimes = readFileFromNative('launcher/appRunTimes.dat', 1);

    if (null == runTimes) {
        runTimes = [
            {url: url, times: 1}
        ];
    }
    else {
        var added = false;
        for (var i = 0; i < runTimes.length; i++) {
            if (url == runTimes[i].url) {
                runTimes[i].times++;
                added = true;
                break;
            }
        }
        if (!added) {
            runTimes.push({
                url: url,
                times: 1
            });
        }
    }
    writeFileToNative('launcher/appRunTimes.dat', objToString(runTimes), 1);
}
/***********************************************************************
 * name:initNetworkPara
 * description:UI初始化时注册网络，并开始ping路由器，底层进行维护网络状态
 ************************************************************************/
function initNetworkPara() {
    debugPrint("initNetworkPara networkConfig=" + model.network.getEnumNetworkConfig());
    model.network.TestStart();
}
function initMHLPara() {
    model.source.setInputMhlAvailable(0);
}
/**
 * 获取网络状态
 * @returns {number}
 */
function getNetworkSatus() {


    if (!tv) return 1;

    try {

        var netStatus = model.network.getEnumNetworkAvailable();
        if (netStatus == 1) {
            var net = 0;
            switch (model.network.getEnumNetworking()) {
                case 0:
                    net = 1;
                    break;
                case 1:
                    var quality = model.network.getLink_quality();
                    net = 10 + Math.ceil(quality / 25);//model.network.getApSignal();
                    break;
                default :
                    net = 0;
                    break;
            }
            DBG_INFO('network status = ' + net);
            return net;
        }
        else {
            DBG_INFO('network status = 0');
            return 0;
        }
    }
    catch (ex) {
        DBG_INFO(ex.message, DebugLevel.ERROR)
        return 0;
    }
}

function networkConnected() {
    try {
        var cnnct = tv ? model.network.getEnumNetworkAvailable() : 1;
        return (1 == cnnct);
    }
    catch (ex) {
        DBG_INFO(ex.message, DebugLevel.ERROR);
        return false;
    }
}

/**
 * 克隆对象
 * @param fromObj
 * @param toObj
 */
function cloneObj(fromObj, toObj) {
    for (var i in fromObj) {
        if (Array.isArray(fromObj[i])) {
            toObj[i] = [];
            cloneObj(fromObj[i], toObj[i]);
            continue;
        }
        else if (typeof fromObj[i] == "object") {
            toObj[i] = {};
            cloneObj(fromObj[i], toObj[i]);
            continue;
        }
        toObj[i] = fromObj[i];
    }
}

/**
 * 数组按照某一个属性排序
 * @param arr
 * @param prop
 * @param ascending 默认降序, ascending = false
 * @returns {*}
 */
function sortByProperty(arr, prop, ascending) {

    try {
        for(var i = 0; i < arr.length - 1; i++) {
            var maxInd = i, maxnum = arr[i][prop];
            for(var j = i + 1; j < arr.length; j++) {
                if(maxnum < arr[j][prop]) {
                    maxnum = arr[j][prop];
                    maxInd = j;
                }
            }

            var maxObj = arr.splice(maxInd, 1);
            arr.splice(i, 0, maxObj[0]);
        }

        if(ascending) {
            return arr.reverse();
        }
    }
    catch (ex){
        DBG_ERROR(objToString(arr) + ex.message);
        return [];
    }
    return arr;
}

function objToString(obj) {
    return JSON.stringify(obj);
}

function strToObject(str) {
    var obj = null;
    try {
        obj = JSON.parse(str);
    }
    catch (ex) {
        obj = str;
        //DBG_INFO(str + ' to object error: ' + ex.message, DebugLevel.ERROR);
    }
    return obj;
}


function swapObj(obj1, obj2) {
    for (var x in obj1) {
        var temp = obj1[x];
        obj1[x] = obj2[x];
        obj2[x] = temp;
    }
}

function copyObj(frmObj) {
    var toObj = Array.isArray(frmObj) ? [] : {};
    return $.extend(toObj, frmObj);
}

function arrMax(arr) {
    return Math.max.apply({}, arr);
}

function arrMin(arr) {
    return Math.min.apply({}, arr);
}

/*******************************************************************
 name:checkWizardSetFlagExit
 description:判断开机导航标志是否存在，只在tv为false的情况下有用
 input:
 output:
 return
 *******************************************************************/
function checkWizardSetFlagExit() {
    if (!!localStorage.getItem("wizardSetFlag")) {
        return true;
    }
    else {
        return false;
    }
}
/*******************************************************************
 name:getWizardSetFlag
 description:判断是否处于开机导航状态
 input:
 output: 0: diabled wizard; >0: enable wizard
 return
 *******************************************************************/
function getWizardSetFlag() {
    if (tv == false) {
        if (!!localStorage.getItem("wizardSetFlag")) {
            return parseInt(localStorage.getItem("wizardSetFlag"));
        }
        else {
            localStorage.setItem("wizardSetFlag", 1);
            return 1;
        }
    }
    else {
        try {
            var wizardSetFlag = model.system.getFirstInstallation();
//            switch(wizardSetFlag) {
//                case 1: //disable
//                    debugPrint("getWizardSetFlag:wizardSetFlag=" + wizardSetFlag,DebugLevel.ALWAYS);
//                    return 0;
//                case 0:
//                    debugPrint("getWizardSetFlag:wizardSetFlag=" + wizardSetFlag,DebugLevel.ALWAYS);
//                    return 1;
//
//                default:
//                    debugPrint("getWizardSetFlag:wizardSetFlag=" + wizardSetFlag,DebugLevel.ALWAYS);
            return wizardSetFlag;
//            }
        }
        catch (e) {
            return 0;
        }
    }

}
/*******************************************************************
 name:setWizardSetFlag
 description:设置开机导航标志
 input: 1: enable wizard; 0: disable wizard; 2: enable wizard from setting(wizard need to clear history)
 output:
 return
 *******************************************************************/
function setboeSetFlag(flag) {
//    debugPrint("setWizardSetFlag:" + flag,DebugLevel.ALWAYS);
    if (tv == false) {
        localStorage.setItem("wizardSetFlag", flag);
    }
    else {
        model.system.setFirstInstallation(flag);//0 facotry ok ,1 setting->reset ,2 setting->wizard
    }
}
/*******************************************************************
 name:getNetworkDisclaimerAgreeFlag
 description:获取免责声明同意标志
 input:
 output:
 return
 *******************************************************************/
function getNetworkDisclaimerAgreeFlag() {
    if (tv == false) {
        if (!!localStorage.getItem("agreeDisclaimerFlag")) {
            return parseInt(localStorage.getItem("agreeDisclaimerFlag"));
        }
        else {
            localStorage.setItem("agreeDisclaimerFlag", 0);
            return 0;
        }
    }
    else {
        //todo
        var flag = model.basicSetting.getDisclaimer();
        debugPrint("getNetworkDisclaimerAgreeFlag:flag = " + flag);
        return flag;
    }
}
/*******************************************************************
 name:setNetworkDisclaimerAgreeFlag
 description:设置免责声明同意标志
 input:
 output:
 return
 *******************************************************************/
function setNetworkDisclaimerAgreeFlag(flag) {
    if (tv == false) {
        localStorage.setItem("agreeDisclaimerFlag", flag);
    }
    else {
        //todo
        model.basicSetting.setDisclaimer(flag);
    }
}

/***************************************************************
 name:function wizardRefreshChListAftSearchChannel
 description:搜台后更新频道列表
 input:
 output:
 return
 */

function refreshChListAftSearchChannel() {
    try {
        debugPrint("refreshChListAftSearchChannel");
        //chl_updateChannelList();
        //livetvchlist.updateChannelList();
        livetvchlist.initChannelList();
        if(ENABLE_FVP) {
            freeview_manager.changeByScan();
        }
        sendAM(":am,opera4x,hbbtv:retune=" + true); //add by hhx for send message to opera4x

    }
    catch (ex) {
        debugPrint("wizardRefreshChListAftSearchChannel:" + ex.message, DebugLevel.ERROR);
    }
}

function getShowCancelPowerOffText(number) {
    var str = "Press any key to exit";
    switch (number) {
        case 0:
            str = "Beliebige Taste zum Verlassen drücken";
            break;
        case 1:
            str = "Press any key to exit";
            break;
        case 2:
            str = "Appuyer sur n'importe quelle touche pour quitter";
            break;
        case 3:
            str = "Premere qualsiasi tasto per uscire";
            break;
        case 4:
            str = "Presione cualquier tecla para salir";
            break;
        case 10:
            str = "Poistut painamalla jotain painiketta";
            break;
        case 14:
            str = "Tryck på valfri knapp för att avsluta";
            break;
        case 15:
            str = "Tryk en hvilken som helst tast for at forlade";
            break;
        case 16:
            str = "Pressione qualquer tecla para sair";
            break;
        case 18:
            str = "Trykk på en tast for å avslutte";
            break;
        case 19:
            str = "按任意键退出";
            break;
        default:
            str = "Press any key to exit";
            break;

    }
    return str;
}
function getShowPowerOffText(number, cnt) {
    var str = "Turn off in" + cnt + " seconds";
    switch (number) {
        case 0:
            str = "In " + cnt + " Sekunden ausschalten";
            break;
        case 1:
            str = "Turn off in " + cnt + " seconds";
            break;
        case 2:
            str = "Extinction dans " + cnt + " secondes";
            break;
        case 3:
            str = "Spegnere entro " + cnt + " secondi";
            break;
        case 4:
            str = "Apagar en " + cnt + " segundos";
            break;
        case 10:
            str = "Sammuta " + cnt + " sekuntia kuluttua";
            break;
        case 14:
            str = "Stäng av i " + cnt + " sekunder";
            break;
        case 15:
            str = "Sluk i " + cnt + " sekunder";
            break;
        case 16:
            str = "Desligar daqui a " + cnt + " sekund";
            break;
        case 18:
            str = "Slå av om " + cnt + " sekunder";
            break;
        case 19:
            str = cnt + " 秒后将关机";
            break;
        default:
            str = "Turn off in" + cnt + " seconds";
            break;

    }
    return str;
}

function useDefaultImg(imgele) {
    //imgele.onerror = null;
    //imgele.src = launcherBaseDir + 'img/appsicon/default.png';
}


function sendAM(command) {


    if (command == ":am,dtv_app_mtk,:resume=dtv") {
        dtvPaused = false;
    }
    else {
        dtvPaused = true;
    }
    DBG_ALWAYS(command);
    try {
        tv && modeljs.sendam(command);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }

}

var globalDTVTimer = 0;
function resumeDTV() {
   if(suspendFlag) {
        DBG_ALWAYS("suspend......");
        //suspendFlag = false;
        return;
    }
    clearTimeout(globalDTVTimer);
    globalDTVTimer = setTimeout(function () {
        clearTimeout(globalDTVTimer);
        sendAM(":am,opera4x,hbbtv:needresumetv=" + 1);
        sendAM(":am,dtv_app_mtk,:resume=dtv");
        if(ENABLE_FVP) {
            freeview_manager.onEnvChanged();
        }
    }, 400);

}

function pauseDTV() {

    clearTimeout(globalDTVTimer);
    sendAM(":am,opera4x,hbbtv:needresumetv=" + 0);
    sendAM(":am,dtv_app_mtk,:pause=dtv");
    if(ENABLE_FVP) {
        freeview_manager.onEnvChanged();
    }
}


function setWindowSizeDirectly(x, y, w, h) {

    var rX = Math.round(10000 * x / 1920),
        ry = Math.round(10000 * y / 1080),
        rw = Math.round(10000 * w / 1920),
        rh = Math.round(10000 * h / 1080);
    var size = [rX, ry, rw, rh];
    DBG_ALWAYS("set window size:" + objToString(size));
    try {
        tv && model.video.setWindow0(size);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function setWindowSize(x, y, w, h) {
    clearTimeout(globalWindowsizeTimer);
    setWindowSizeDirectly(x, y, w, h);
    !appLoading && hiWebOsFrame.unLockAllKeys("window_size");
}
var globalWindowsizeTimer = 0;
function setWindowSizeLater(x, y, w, h, fromLauncher) {

    clearTimeout(globalWindowsizeTimer);
    hiWebOsFrame.lockAllKeys("window_size");
    globalWindowsizeTimer = setTimeout(function () {// exit from app need timeout
        setWindowSize(x, y, w, h);
        if (!fromLauncher) {
            hiWebOsFrame.unLockAllKeys("window_size");
        }
    }, 600);
}


function setLauncherMainBackground(show) {
    if (show) {
        $("#backgroundPreload").css("visibility", "visible");
    }
    else {
        $("#backgroundPreload").css("visibility", "hidden");
    }
}


var appStateObj = {}
function initAppStateParam() {
    appStateObj = {
        crntAppPageId: "",
        changeApp: false,
        param: null
    }
}
function setAppChangedParam(pageId, command, isRemoteKey, isDialserver, isStandby) {
    appStateObj = {
        crntAppPageId: "",
        changeApp: true,
        param: {
            pageId: pageId,
            command: command,
            isRemoteKey: !!isRemoteKey,
            isDialserver: !!isDialserver,
            isStandby: !!isStandby
        }
    };
}

var appStateTimeout = 0;
function showLoadingOrLockKey(pageId, isStart) {
    //lock keys
    //hiWebOsFrame.setIsLoading(true);
    var tmpTimeOut = 15000;
    //DBG_ALWAYS("startEUXT910EPOS"+startEUXT910EPOS);
    if ("APP_5890_SA" != currentPlatform || pageId != "app_tv_store") {
        if(!startEUXT910EPOS){
            openBlackScreen();
            //$('#sdkLoading').css('display', 'block');
            hiWebOsFrame.showDynamicLoading(-1, 0);
        }
    }
    else {
        tmpTimeOut = 1000;
	}
    hiWebOsFrame.lockAllKeys("app");
    appLoading = true;
    clearTimeout(appStateTimeout);
    appStateTimeout = setTimeout(function () {
        //endLoadingOrUnlockKey();
        var st = (isStart ? "started" : "stopped");
        DBG_INFO(pageId + " " + st + " time out, set to default state.");
        onAppStateChanged(pageId.split("app_")[1] + " timeout " + st);
        //MT5657VL2EU-4024
        if(st == "stopped"){
            recoverMuteWhenAppStopped();
        }
    }, tmpTimeOut);
}

function endLoadingOrUnlockKey() {
    clearTimeout(appStateTimeout);
    //if("APP_5890_SA" != currentPlatform) {
    //$('#sdkLoading').css('display', 'none');
    hiWebOsFrame.hideDynamicLoading();
    closeBlackScreen();
    //}
    hiWebOsFrame.unLockAllKeys("app");
    appLoading = false;

    //var tempCurrentPage = hiWebOsFrame.getCurrentPage();
    //if(!!tempCurrentPage && "app" == tempCurrentPage.module) {
    //    keyboard.setWantGroup(0);
    //}
    //hiWebOsFrame.setIsLoading(false);

}
function startHBBTVAppLoading(baseUrl){
    openBlackScreen();
    hiWebOsFrame.lockAllKeys("app");
    //$('#sdkLoading').css('display', 'block');
    hiWebOsFrame.showDynamicLoading(-1, 0);
    appLoading = true;
    FABaseUrl = baseUrl;
    clearTimeout(appStateTimeout);
    appStateTimeout = setTimeout(function () {
        DBG_ERROR("hbbtv keyset timeout.");
        FABaseUrl = "";
        deviceKeySet.HBBTVNEEDRESUME = true;
        endLoadingOrUnlockKey();
    }, 15000);
}

var appPagesList = [
    "app_youtube",
    "app_netflix",
    "app_vudu",
    "app_amazon",
    "app_amazonruby",
    "app_tv_store",
    "app_netrange",
    "app_web",
    "app_hi_browser",
    "app_lau_browser",
    "app_factory",
    "app_bridge",
    "launcher_allapps"
]
function asyncStartApp(pageId, command, isRemoteKey, isDialserver, isStandby, setRunTimes, storeType, crtPageFromEULA) {

    try {
        var ifSayYesToDisclaimerOrNot = model.basicSetting.getDisclaimer();
        debugE('ifSayYesToDisclaimerOrNot:' + ifSayYesToDisclaimerOrNot);
        if(!ifSayYesToDisclaimerOrNot) {
            if ('app_lau_browser' != pageId && 'launcher_allapps' != pageId) {

                var tmpArg = Array.prototype.slice.call(arguments);
                var crtPage = hiWebOsFrame.getCurrentPage();

                debugE('Trying to open VIDAALiteLauncherEULADialog page:' + pageId);
                if (!!isStandby) {
                    sendAM(":dtv_app_mtk,am,:hotkey=0x8f000");
                    sendAM(":am,dtv_app_mtk,:resume=dtv");
                }

                hiWebOsFrame.createPage("VIDAALiteLauncherEULADialog", null, crtPage, crtPage.priority+3, function (page) {
                    hiWebOsFrame.VIDAALiteLauncherEULADialogPage = page;
                    VIDAALiteLauncherEULADialogData.operateData.argList = tmpArg;
                    VIDAALiteLauncherEULADialogData.operateData.crtPage = crtPage;

                    if ("app_lau_browser" == crtPage.id) {
                        switch (appBrowser.getCurrentCommandType()) {
                            case CmdURLType.LAU_BROWSER_HIMEDIA:
                            case CmdURLType.LAU_BROWSER_PICASA:
                                if (16 != GlobalFlagShareInBrowser) {
                                    model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                                }
                                debugPrint("pressMenuOnApp function begin!!!");
                                //startMainSetting(crntPage);
                                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                                break;
                            case CmdURLType.LAU_BROWSER_PICASA:
                            case CmdURLType.LAU_BROWSER_TERRATV:
                                debugPrint("TERRATV pressMenuOnApp function begin!!!");
                                //startMainSetting(crntPage);
                                hiWebOsFrame.registerKeyCodesForSettingOnApp();
                                break;
                            case CmdURLType.LAU_BROWSER_EPOS:
                                hiWebOsFrame.unLockAllKeys("setting");
                                break;
                            default :
                                hiWebOsFrame.unLockAllKeys("setting");
                                break;
                        }
                    }

                    page.open();
                    page.hiFocus('VIDAALiteLauncherEULACancel');
                    page.rewriteDataOnly();
                });
                return;
            }
        }
    }
    catch (e) {
        debugE(e.message);
    }


    debugRM("asyncStartApp: pageId = " + pageId + ",command = " + command + ",storeType = " + storeType);

    try {
        if (!!hiWebOsFrame[pageId] && hiWebOsFrame[pageId].visible) {
            DBG_INFO("app started: " + pageId, DebugLevel.WARNING);
            return;
        }
        else if (appPagesList.indexOf(pageId) < 0) {
            DBG_INFO("can not find this app[" + pageId + "]");
            return;
        }

        var crntPage = !!crtPageFromEULA ? crtPageFromEULA : hiWebOsFrame.getCurrentPage();

        //if ("app_lau_browser" != pageId
        //    && "launcher_allapps" != pageId
        //    && !networkConnected()) {
        //showMsg("", "Network is not connected!");
        //if((typeof dlgNetwork) == undefined){
        //    hiWebOsFrame.createPage('dialog_network', null, null, null, function (a) {
        //        hiWebOsFrame["dialog_network"] = a;
        //        dlgNetwork.showNetworkBrokenDialog(crntPage)
        //    });
        //    return;
        //}
        //if(dlgNetwork.showNetworkBrokenDialog(crntPage)){
        //    return;
        //}
        //}

        if (("app_hi_browser" == pageId && getFreeRam() < 80)
            || ("app_tv_store" == pageId && getFreeRam() < 60)) {
            showMsg("", "Available system buffer is not enough, please close current application.");
            return;
        }
        DBG_INFO("start app: " + pageId);
        if (!appStateObj.changeApp && null != crntPage) {
            if ("app" == crntPage.module) {//change app
                setAppChangedParam(pageId, command, isRemoteKey, isDialserver, isStandby);
                asyncStopApp(crntPage.id, crntPage.origin);
                return false;
            }
            else if ("setting" == crntPage.module || "settingfirst" == crntPage.module) {//setting on app
                var settingPage = hiWebOsFrame.getPageByIdFromSdkPages('setting_fircls_page');
                if (!!settingPage && !!settingPage.origin && "app" == settingPage.origin.module) {
                    closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                    //settingPage.origin.hiFocus();// get origin when change app, so hifocus
                    asyncStopApp(settingPage.origin.id, settingPage.origin.origin);
                    setAppChangedParam(pageId, command, isRemoteKey, isDialserver, isStandby);
                    return false;
                }
            }
            else if ("dialog" == crntPage.module) {
                var dialogOri = null;
                if (!!crntPage.origin) {
                    if ("launcher" == crntPage.origin.module) {
                        dialogOri = hiWebOsFrame.myLauncher;
                    }
                    else if ("allapps" == crntPage.origin.module) {
                        dialogOri = hiWebOsFrame["launcher_allapps"];
                    }
                    else if ("accuweather" == crntPage.origin.module) {
                        dialogOri = hiWebOsFrame["accuweather_main"];
                    }
                    else {
                        dialogOri = crntPage.origin;
                    }
                }
                closePagesOrModuleByPage(crntPage);
                crntPage = dialogOri;
            }
            else if ("livetv" == crntPage.module) {
                closeLiveTVModule();
                crntPage = hiWebOsFrame[LiveTVModule.MAIN];
            }
        }
        else if (null != crntPage) {
            //change to the next app
            crntPage = hiWebOsFrame.getCurrentPage().origin;
        }
        else {
            DBG_INFO("current page:null");
        }
        initAppStateParam();
        setWindowSize(0, 0, 1920, 1080);
        deviceKeySet.HBBTVAPPON = false;
        deviceKeySet.HBBTVORIGIN = null;
        writeFileToNative("netflix_exit","exit",0);
        pauseDTV();
        if (enableHbbTVControl()) {
            if (deviceKeySet.HBBTVENABLE) {
                if (deviceKeySet.HBBTVCOEXIST.indexOf(pageId) > -1) {
                    pauseHBBTV();
                }
                else {
                    stopHBBTV();
                }
            }
        }
        else {
            pauseHBBTV();
        }

        showLoadingOrLockKey(pageId, true);
        hiWebOsFrame.createPage(pageId, null, crntPage, null, function (a) {
            a.operateData.command = command;
            a.operateData.isRemoteKey = isRemoteKey;
            a.operateData.commandType = getCommandType(isDialserver, isStandby);
            a.operateData.logParam = getLogReportParam(command, pageId, null == crntPage ? "" : crntPage.module, isRemoteKey, storeType, isStandby, null == crntPage ? "" : crntPage.id);
            debugRM("!!!!!!!!!!!!!!!!!!!!!!!" + storeType);
            a.operateData.storeType = storeType;
            a.open();
            hiWebOsFrame[pageId] = a;
            appStateObj.crntAppPageId = pageId;
            if (null != crntPage) {
                if ("launcher" == crntPage.module) {
                    hiWebOsFrame[pageId].origin = hiWebOsFrame.myLauncher;
                }
                else {
                    hiWebOsFrame[pageId].origin = crntPage;
                }
                if(g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite"){
                    setTimeout(function() {
                        if (!canProcessVolume()) {// recover volume directly
                            if (!canProcessVolume()){
                                if(tv && 0 == vol.getPageMute()){
                                    model.sound.setMainMute(0);
                                }
                                vol.openMutePage();
                            }
                        }
                    }, 500);
                }else{
                    if (!canProcessVolume() && typeof (launcherNBar) != 'undefined') {// recover volume directly
                        launcherNBar.recoverMuteAndIconDirectly();
                    }
                }
                //setTimeout(function(){//avoid of screen flicker
                if (!!hiWebOsFrame["app_bridge"] && hiWebOsFrame["app_bridge"].visible) {
                    hiWebOsFrame["app_bridge"].close();
                }
                if (crntPage.visible) {
                    closePagesOrModuleByPage(crntPage);
                }
                tryToCloseLauncher();
                tryToCloseAllApps();
                //}, 200);
            }
        });
        if (!!setRunTimes) {
            setAppRunTimesByUrl(command);
        }

        appStarting = true;
    }
    catch (ex) {
        DBG_INFO(ex.message, DebugLevel.ERROR);
    }
}
function asyncReStartApp(pageId, appReStartData /*, command, isRemoteKey, isDialserver, isStandby*/) {
    try {
        DBG_INFO("Restart app: " + pageId);
        hiWebOsFrame[pageId].operateData.appReStartData = appReStartData;
        showLoadingOrLockKey(pageId, true);
        sendAM(":am,am,:stop=lau_browser");
    }
    catch (ex) {
        DBG_INFO(ex.message, DebugLevel.ERROR);
    }
}
function asyncStopApp(pageId, origin, commandType) {
    try {
        showLoadingOrLockKey(pageId, false);
        DBG_INFO("stop app: " + pageId);
        if (!!commandType) {
            hiWebOsFrame[pageId].operateData.commandType = commandType;
        }
        else {
            //hiWebOsFrame[pageid].operateData.commandType = CmdURLType.NONE;
        }
        if (!!origin) {
            hiWebOsFrame[pageId].origin = origin;
        }
        else {
            hiWebOsFrame[pageId].origin = null;
        }
        muteWhenAppStopping();
        hiWebOsFrame[pageId].close();

        //temp add
        //setTimeout(function() {
        //    onAppStateChanged(pageId.split("app_")[1] + " stopped");
        //}, 6000);
    }
    catch (ex) {
        DBG_INFO(ex.message, DebugLevel.ERROR);
    }
}
function asyncChangeApp(crntPageId, nextPageId, command, isRemoteKey, isDialserver, isStandby) {
    //asyncStopApp(crntPageId, origin, commandType);
}
function onAppStateChanged(val) {
    var strvec = val.split(" ");
    var pageId = getPageIdByAppName(strvec[0]);
    DBG_ALWAYS(val + "; pageId = " + pageId);
    if (("navigator" == strvec[0] && "resumed" == strvec[2]) ||
        ("hbbtv" == strvec[0] && "paused" == strvec[2])) {
        if (!!hiWebOsFrame.myLauncher && hiWebOsFrame.myLauncher.visible) {
            DBG_INFO("reset window size after navigator resumed");
            if(g_launcherBrand == "SA_OEM"){
                setWindowSizeDirectly(70, 195,870, 488);
            }else if(g_launcherBrand == "VIDAALite"){

            }
            else{
                setWindowSizeDirectly(177, 161, 1130, 636);
            }
        }
    }
    if ("hbbtv" == strvec[0]) {
        deviceKeySet.HBBTVSTATE = strvec[2];
    }
    if ("app_factory_lite" == pageId) {
        factoryLoading = false;
        hiWebOsFrame.unLockAllKeys("start/stop:Fac");
        DBG_INFO("factory " + strvec[2]);
    }
    if("opera4x" == strvec[0] && "started" == strvec[2]){
        DBG_INFO("do not receive this state");
        return;
    }
    if (!hiWebOsFrame[pageId] && "app_netflix" != pageId) {
        if ("start_dail" != strvec[2] && !("dail" == strvec[2] && "app_BBC_iPlayer" == pageId)) {
            DBG_INFO("do not receive this state");
            return;
        }
        else {
            DBG_INFO("start/stop from dail");
        }
    }
    
    if("stopped"==strvec[2] && "app_netflix" == pageId&& (!opera4xStarted)){
        DBG_ALWAYS("[startOpera4x] after NETFLIX stopped");
        startOpera4x();
    }

    switch (strvec[2]) {
        case "started":
        case "resumed":
            if (appStopping) {
                recoverMuteWhenAppStopped();
            }
            DBG_ALWAYS("current page:" + hiWebOsFrame.getCurrentPageId());
            if (!hiWebOsFrame[pageId] || !hiWebOsFrame[pageId].visible) {
                // notified from system
                try {
                    DBG_ALWAYS("notified from system");
                    endLoadingOrUnlockKey();
                    var crntPage = hiWebOsFrame.getCurrentPage();
                    hiWebOsFrame.createPage(pageId, null, crntPage, null, function (a) {
                        appStateObj.crntAppPageId = pageId;
                        if (null != crntPage) {
                            if ("launcher" == crntPage.module
                                || (!!crntPage.origin && "launcher" == crntPage.origin.module )) {
                                a.origin = hiWebOsFrame.myLauncher;
                            }
                            else if ("allapps" == crntPage.module
                                || (!!crntPage.origin && "allapps" == crntPage.origin.module )) {
                                a.origin = hiWebOsFrame["launcher_allapps"];
                            }
                            if (!canProcessVolume()) {// recover volume directly
                                if(g_launcherBrand == "SA_OEM" || g_launcherBrand == "VIDAALite"){
                                    if(tv && 0 == vol.getPageMute()){
                                        model.sound.setMainMute(0);
                                    }
                                    vol.openMutePage();
                                }else{
                                    launcherNBar.recoverMuteAndIconDirectly();
                                }
                            }
                        }
                        closePagesOrModuleByPage(crntPage);
                        tryToCloseLauncher();
                        tryToCloseAllApps();
                        pauseDTV();//need pause dtv??
                        hiWebOsFrame[pageId] = a;
                        hiWebOsFrame[pageId].operateData.appStarted = true;
                        hiWebOsFrame[pageId].open();
                        hiWebOsFrame[pageId].hiFocus();
                        appStarting = false;
                    });
                }
                catch (ex) {
                    DBG_ERROR(ex.message);
                }
            }
            else {
                hiWebOsFrame[pageId].hiFocus();
                appStarting = false;
                if ("app_lau_browser" == pageId && hiWebOsFrame[pageId].operateData.commandType == CmdURLType.LAU_BROWSER_HIMEDIA) {
                    DBG_ALWAYS("HiMedia started");
                    //解决刚进入HiMedia时就退出的问题
                    clearTimeout(appStateTimeout);
                    appLoading = false;
                    closeBlackScreen();
                    //$('#sdkLoading').css('display', 'none');
                    hiWebOsFrame.hideDynamicLoading();
                    setTimeout(function () {
//锁键延时正好与HImedia内初始化时间相同
                        hiWebOsFrame.unLockAllKeys("app");
                    }, 5000);


                }
                else {
                    endLoadingOrUnlockKey();
                }

                //if("app_lau_browser" == pageId) {
                //    setTimeout(endLoadingOrUnlockKey, 3000);
                //}
                //else {
                //    endLoadingOrUnlockKey();
                //}
            }

            try {
                debugPrint("logReport__________begin", DebugLevel.WARNING);
                logReport('GTAPPRun', hiWebOsFrame[pageId].operateData.logParam, 1);
                debugPrint("logReport__________end", DebugLevel.WARNING);
            }
            catch (ex) {
                debugE(ex.message);
            }

            break;
        case "stopped":
        case "paused":

            try {
                debugPrint("logReport__________begin", DebugLevel.WARNING);
                logReport('GTAPPRun', hiWebOsFrame[pageId].operateData.logParam, 0);
                debugPrint("logReport__________end", DebugLevel.WARNING);
                deleteNativeFile("netflix_exit",0);
            }
            catch (ex) {
                debugE(ex.message);
            }

            if ("app_lau_browser" == pageId) {
                var param = objToString(hiWebOsFrame[pageId].operateData.logParam);
                if(!!flushUITimer){
                    clearTimeout(flushUITimer);
                    flushUITimer=null;}
                try{
                    //开启UI刷新
                    DBG_ALWAYS("epos flush!");
                    enableBrowserFlush(true);
                    flushFullscreen();
                }
                catch (ex){
                    DBG_ERROR(ex.message);
                }
                if (!!param && null != param.toLowerCase().match("picasa")) {
                    endLoadingOrUnlockKey();
                }
                else {
                    //setTimeout(function() {
                    endLoadingOrUnlockKey();//time out for flip dtv video, temp remove
                    //}, 3000);
                }
            }
            else {
                endLoadingOrUnlockKey();
            }

            //hiWebOsFrame[appStateObj.crntAppPageId].origin.open();
            //hiWebOsFrame[appStateObj.crntAppPageId].origin.hiFocus();
            if ("lau_browser" == strvec[0]) {
                var picasaPageId = 'app_lau_browser';
                if ("return" == hiWebOsFrame[picasaPageId].operateData.appReStartData || "token" == hiWebOsFrame[picasaPageId].operateData.appReStartData) {
                    debugG('return or token is in cmd,showLoadingOrLockKey("app_lau_browser", true)')
                    showLoadingOrLockKey('app_lau_browser', true);
                    // debugG('sendAM' + ':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/picasa/picasaIndex.html?" + hiWebOsFrame[picasaPageId].operateData.appReStartData + ']');
                    // sendAM(':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/picasa/picasaIndex.html?" + hiWebOsFrame[picasaPageId].operateData.appReStartData + ']');
                    startLauBrowser("file:///3rd_rw/picasa/picasaIndex.html?" + hiWebOsFrame[picasaPageId].operateData.appReStartData);
                    hiWebOsFrame[picasaPageId].operateData.appReStartData = 'normal';
                    recoverMuteWhenAppStopped();
                    return;
                }
                else if ("dropbox_return" == hiWebOsFrame[picasaPageId].operateData.appReStartData) {
                    // debugPrint('sendAM' + ':am,am,:start=[lau_browser,-u,' + getMediaURL(0) + ']');
                    showLoadingOrLockKey('app_lau_browser', true);
                    // sendAM(':am,am,:start=[lau_browser,-u,' + getMediaURL(0) + ']');
                    startLauBrowser(getMediaURL(0));
                    //sendAM(':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/picasa/picasaIndex.html?"+ hiWebOsFrame[picasaPageId].operateData.appReStartData + ']');
                    hiWebOsFrame[picasaPageId].operateData.appReStartData = 'normal';
                    recoverMuteWhenAppStopped();
                    return;
                }
                else if ("dropbox_token" == hiWebOsFrame[picasaPageId].operateData.appReStartData) {
                    // debugPrint('sendAM' + ':am,am,:start=[lau_browser,-u,' + getMediaURL(0) + ']');
                    // sendAM(':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/UI/hisenseUI/mediaIndex.html?module=dropbox" + ']');
                    startLauBrowser("file:///3rd_rw/UI/hisenseUI/mediaIndex.html?module=dropbox");
                    //sendAM(':am,am,:start=[lau_browser,-u,' + "file:///3rd_rw/picasa/picasaIndex.html?"+ hiWebOsFrame[picasaPageId].operateData.appReStartData + ']');
                    hiWebOsFrame[picasaPageId].operateData.appReStartData = 'normal';
                    recoverMuteWhenAppStopped();
                    return;
                }
            }
            if (!hiWebOsFrame[pageId].operateData.appStarted) {
                DBG_INFO("app[" + pageId + "] have not started", DebugLevel.WARNING);
                return;
            }
            hiWebOsFrame[pageId].operateData.appStarted = false;
            if (hiWebOsFrame[pageId].visible) {
                // notified from system
                DBG_INFO("stopped by system, current page id:[" + hiWebOsFrame.getCurrentPageId() + "]");
                var crntPageOnApp = hiWebOsFrame.getCurrentPage();
                if (!!crntPageOnApp
                    && ("setting" == crntPageOnApp.module
                    || "settingfirst" == crntPageOnApp.module
                    || "sleep" == crntPageOnApp.module)) {
                    closePagesOrModuleByPage(crntPageOnApp);
                }
                hiWebOsFrame[pageId].close();
                if(typeof launcherNBar != UNDEFINED_DEFSTR &&
                    null != hiWebOsFrame[pageId].origin &&
                    "launcher" == hiWebOsFrame[pageId].origin.module){
                    launcherNBar.setFocusContent(true);
                }
            }
            if (appStateObj.changeApp) {
                DBG_INFO("change app");
                hiWebOsFrame.createPage("app_bridge", null, hiWebOsFrame[pageId].origin, null, function (a) {
                    a.open();
                    a.hiFocus();
                    hiWebOsFrame["app_bridge"] = a;
                    if ("launcher_allapps" == appStateObj.param.pageId) {
                        appStopping = false;
                        resumeDTV();
                        if(g_launcherBrand == "VIDAALite" || g_launcherBrand == "SA_OEM") {
                            recoverMuteWhenAppStopped();
                        }
                        oneKeyOpenLauncherApp(CmdURLType.HIPAGE, 'launcher_allapps');
                        initAppStateParam();
                    }
                    else {
                        asyncStartApp(appStateObj.param.pageId, appStateObj.param.command,
                            appStateObj.param.isRemoteKey, appStateObj.param.isDialserver,
                            appStateObj.param.isStandby);
                    }
                });
                return;
            }
            resumeDTV();
            recoverMuteWhenAppStopped();
            if (null == hiWebOsFrame[pageId].origin) {
                DBG_INFO("do not have origin, focus to livetv");
                closeDOthersModule("livetv");
                setWindowSizeLater(0, 0, 1920, 1080);
                hiWebOsFrame.blankPage.open();
                hiWebOsFrame.blankPage.hiFocus();
                return;
            }
            DBG_INFO("app[" + pageId + "] stopped, focus " + hiWebOsFrame[pageId].origin.id);
            if ("livetv" == hiWebOsFrame[pageId].origin.module
                || "input" == hiWebOsFrame[pageId].origin.module
                || "hotel" == hiWebOsFrame[pageId].origin.module
                || "miracast" == hiWebOsFrame[pageId].origin.module
                || "speech" == hiWebOsFrame[pageId].origin.module
                || "setting" == hiWebOsFrame[pageId].origin.module
                || "settingfirst" == hiWebOsFrame[pageId].origin.module
                || "sleep" == hiWebOsFrame[pageId].origin.module
                || "pvrtshift"  == hiWebOsFrame[pageId].origin.module
                || "epg" == hiWebOsFrame[pageId].origin.module) {
                closeDOthersModule("livetv");
                setWindowSizeLater(0, 0, 1920, 1080);
                hiWebOsFrame.blankPage.open();
                hiWebOsFrame.blankPage.hiFocus();
            }
            else if ("dlna_picPlayer" == hiWebOsFrame[pageId].origin.module
                || "dlna_videoPlayer" == hiWebOsFrame[pageId].origin.module
                || "dlna_musicPlayer" == hiWebOsFrame[pageId].origin.module) {
                if (!!dlnaClosedByAppHotkey) {
                    DBG_ALWAYS("App origin is dlna and app opened by hotkey!");
                    dlnaClosedByAppHotkey = false;
                    closeDOthersModule("livetv");
                    setWindowSizeLater(0, 0, 1920, 1080);
                    hiWebOsFrame.blankPage.open();
                    hiWebOsFrame.blankPage.hiFocus();
                }
                else {
                    setWindowSizeLater(0, 0, 1920, 1080);
                    hiWebOsFrame[pageId].origin.open();
                    hiWebOsFrame[pageId].origin.hiFocus();
                }

            }
            else if ("launcher" == hiWebOsFrame[pageId].origin.module) {
               // DBG_INFO("isPageExist:"+hiWebOsFrame.isPageExist("myLauncher"));
                if (hiWebOsFrame.isPageExist("myLauncher")||hiWebOsFrame.isPageExist("OEMlauncherPage")
                    ||hiWebOsFrame.isPageExist("VIDAALiteNavPage")) {
                    if(g_launcherBrand == "VIDAALite" && hiWebOsFrame.isPageExist("VIDAALiteNavPage")){
                        if(!VIDAALiteLauncherFirstCreateFromSourceKey){
                            hiWebOsFrame.myLauncher.open();
                            hiWebOsFrame.myLauncher.hiFocus();
                        }
                    }else{
                        hiWebOsFrame.myLauncher.open();
                        hiWebOsFrame.myLauncher.hiFocus();
                    }
                    if(hiWebOsFrame.isPageExist("OEMlauncherPage")){
                        hiWebOsFrame.myLauncher.hiFocus();//规避rewrite OEMlauncherPage后AllApp焦点样式未加载
                    }
                }
                else {
                    if(g_launcherBrand == "SA_OEM"){
                        createSAOEMLauncher();
                    }else if(g_launcherBrand == "VIDAALite"){
                        createVIDAALitelauncher();
                    }
                    else{
                        createModulePage('myLauncher');
                    }
                }
            }
            else if ("allapps" == hiWebOsFrame[pageId].origin.module) {
                setWindowSizeLater(0, 0, 1920, 1080);
                hiWebOsFrame["launcher_allapps"].open();
                // hiWebOsFrame["launcher_allapps"].hiFocus(hiWebOsFrame["launcher_allapps"].firstFocusId);
                launcherAApps.focusAllApp();
            }
            else {
                setWindowSizeLater(0, 0, 1920, 1080);
                hiWebOsFrame[pageId].origin.open();
                hiWebOsFrame[pageId].origin.hiFocus();
            }
            //endLoadingOrUnlockKey();
            if (!!hiWebOsFrame[pageId].origin.operateData.callBackFunc) {
                var func = hiWebOsFrame[pageId].origin.operateData.callBackFunc;
                if (typeof func == 'function') {
                    func.call(this);
                }
                else if (typeof func == 'string') {
                    eval(func + '.call(this)');
                }
            }

            if(suspendFlag && "app_netflix" == pageId){
                DBG_ALWAYS("netflix on suspend, insert black screen");
                openBlackScreen();
            }
            break;
        case "start_dail":
            if("app_BBC_iPlayer" == pageId){
                BBCDialStart();
            }
            else{
                asyncStartApp(pageId, strvec[0], false, true, false);
            }
            break;
        case "hotkey":
            asyncStartApp(pageId, strvec[0], false, false, true);
            break;
        case "dail":
            if("app_BBC_iPlayer" == pageId){
                BBCDialStop();
            }
            else{
                asyncStopApp(pageId, null, CmdURLType.STOP_FROM_DIALSERVER);
            }
            break;
        default :
            DBG_INFO("can not parse this am state:" + val);
            break;
    }
}

function startAppByBBCDial(){
    hiWebOsFrame[LiveTVModule.MAIN].operateData.callBackFunc = null;
    deviceKeySet.HBBTVORIGIN = hiWebOsFrame.getCurrentPage();
    setWindowSize(0, 0, 1920, 1080);
    pauseDTV();
    closeDOthersModule();
    startHBBTVAppLoading();
    openLiveTVModule([Msg.INFO, 0, Msg.PASSWORD, 0, Msg.SEARCH, 0, Msg.AUDIO, 0, Msg.SIGNAL, 0]);
    setTimeout(function() {
        deviceKeySet.HBBTVAPPON = true;
        var bbc_url = readFileFromNative("hbbtv/BBC_iPlayer", 0);
        sendAM(":am,opera4x,hbbtv:open=" + bbc_url);
    }, 1000);
}

function BBCDialStart() {
    if(checkIsAppOn()){
        hiWebOsFrame[LiveTVModule.MAIN].operateData.callBackFunc = startAppByBBCDial;
        checkAndCloseIfAppOn(hiWebOsFrame[LiveTVModule.MAIN]);
    }
    else{
        startAppByBBCDial();
    }
}

function BBCDialStop() {
    if (deviceKeySet.HBBTVAPPON && hiWebOsFrame[LiveTVModule.MAIN].visible) {
        pauseHBBTV();
    }
}
function getCommandType(dialsrv, standby) {
    if (!!dialsrv) {
        return CmdURLType.START_FROM_DIALSERVER;
    }
    else if (!!standby) {
        return CmdURLType.START_FROM_STANDBY;
    }
    else {
        return CmdURLType.NONE;
    }
}

function getLogReportParam(cmd, pageId, ori, isHotKey, storeType, isStandby, crntPageId) {

	debugRM("getLogReportParam: cmd = " + cmd + ",pageId = " + pageId + ",ori = " + ori + ",isHotKey = " + isHotKey + ",storeType = " + storeType + ",isStandby = " + isStandby);

    var logParam = "", tmplocalVar = g_launcherBrand;

//	cmd = hiWebOsFrame.getCurrentArea() == "SA" ? cmd.indexOf("file:///") > -1 && cmd[cmd.length-1] != 0 ? cmd.replace("file:///","file://") : cmd : cmd;

    if (!storeType && cmd == HSAPPURL.DMP) {
        logParam = "Media";
        return logParam;
    }
    else if (!!isStandby && cmd == 'netflix') {
	    logParam = "Netflix";
	    try {
		    debugPrint("logReport__________begin", DebugLevel.WARNING);
		    logReport('GTRemoteControlNetFlix', 'Netflix', 'oneKeyOpen');
		    debugPrint("logReport__________end", DebugLevel.WARNING);
	    }
	    catch (ex) {
		    debugE(ex.message);
	    }
	    return logParam;
    }

    if (!!pageId) {
        if (isHotKey) {
            logParam = !!appNameChangeForLogReport[cmd] ? appNameChangeForLogReport[cmd] : cmd;
            debugRM("isHotKey");
        }
        else if (ori == "launcher") {
            if(tmplocalVar == "SA_OEM"){
	            logParam = OEMForLogReportFunction(cmd);
            }
            else if(tmplocalVar == "VIDAALite") {
                logParam = VIDAALiteLauncherLogReport(crntPageId, cmd);
            }
            else {
                logParam = typeof (launcherNBar) == "undefined" ? cmd : launcherNBar.getLauncherAppName(cmd);//omg
                // vidda 1.0
            }
        }
        else if (ori == "allapps") {
            logParam = typeof (launcherAApps) == "undefined" ? cmd : launcherAApps.getAllAppsName(cmd);//omg vidda 1.0
        }
        else {
            debugPrint("Can't get the App's name", DebugLevel.ERROR);
        }
    }
    debugRM(JSON.stringify(logParam));
    return logParam;
}

function getPageIdByAppName(appName) {
    var pageId = "";
    switch (appName) {
        case "vudu_movies":
            pageId = "app_vudu"
            break;
        case "foxxum":
	    case "opera4x":
            pageId = "app_tv_store";
            break;
        default :
            pageId = "app_" + appName;
            break;
    }
    return pageId;
}

function isLauncherOpen() {
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (null == crntPage) return false;

    if ("launcher" == crntPage.module) {
        return true;
    }
    else if (!!crntPage.origin) {
        if (crntPage.origin.module == "launcher" && crntPage.origin.visible) {
            return true;
        }
        else if ((crntPage.origin.module == "setting" || crntPage.origin.module == "settingfirst")) {
            var settingorigin = hiWebOsFrame.settingsFirst.origin;
            if (!!settingorigin && settingorigin.module == "launcher" && settingorigin.visible) {
                return true;
            }
        }
    }
    return false;
}

function canProcessVolume() {
    if (appStopping) {
        DBG_ALWAYS("app is stopping");
        return false;
    }
    if(speechRec) {
        DBG_ALWAYS("speech recording.")
        return false;
    }
    var crntPage = hiWebOsFrame.getCurrentPage();
    if (null == crntPage) return true;
    var modules = ["allapps", "accuweather"];

//    var modules = g_launcherBrand == "SA_OEM" ? ["launcher", "allapps", "accuweather"] : ["allapps", "accuweather"];

    if (modules.indexOf(crntPage.module) > -1) {
        return false;
    }
    else if (!!crntPage.origin) {
        if (modules.indexOf(crntPage.origin.module) > -1 && crntPage.origin.visible) {
            return false;
        }
        else if ((crntPage.origin.module == "setting" || crntPage.origin.module == "settingfirst")) {
            var settingorigin = hiWebOsFrame.settingsFirst.origin;
            if (!!settingorigin && modules.indexOf(settingorigin.module) > -1 && settingorigin.visible) {
                return false;
            }
        }
    }
    return true;
}

function openBlackScreen() {
    $("#black_screen").css("display", "block");
}

function closeBlackScreen() {
    $("#black_screen").css("display", "none");
}

function muteWhenAppStopping() {
    try {
        appStopping = true;
        //originMute = g_mute;
        DBG_INFO("set mute when app is stopping");
        if (0 == model.sound.getMainMute()) {
            model.sound.setMainMute(1);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function recoverMuteWhenAppStopped() {
    try {
        appStopping = false;
        DBG_INFO("recover mute[" + vol.getPageMute() + "] when app stopped");
        model.sound.setMainMute(vol.getPageMute());
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


/*******************************************************************
 name:startSearchChannelFromLiveTv
 description:从TV通道下直接打开搜台模式设置页
 input:
 output:
 return
 *******************************************************************/
function startSearchChannelFromLiveTv() {
    debugPrint("startSearchChannelFromLiveTv:");
    try {
        hiWebOsFrame.createPage('settingChSetScanTypeListDialogId', null, hiWebOsFrame.blankPage, null, function (a) {
            hiWebOsFrame.ChSetScanTypeListDialog = a;
            hiWebOsFrame.pushProtectPages(a);
            a.open();
            a.hiFocus();
        });
    }
    catch (ex) {
        debugPrint("startSearchChannelFromLiveTv:" + ex.message, DebugLevel.ERROR);
    }
}

/*******************************************************************
 name:sendKeyValueToMHL
 description:发送按键到MHL设备
 input:
 output:
 return
 *******************************************************************/
function sendKeyValueToMHL(keyValue) {
    debugPrint("sendKeyValueToMHL:" + keyValue);
    try {
        switch (keyValue) {
            case VK_PLAY:
            case VK_STOP:
            case VK_PAUSE:
            case VK_FAST_FWD:
            case VK_FAST_BKW:
            case VK_LEFT:
            case VK_UP:
            case VK_RIGHT:
            case VK_DOWN:
            case VK_ENTER:
            case VK_BACK:
                model.source.InputMhlKeyPress(keyValue);
                break;
            default :
                break;
        }

    }
    catch (ex) {
        debugPrint("sendKeyValueToMHL:" + ex.message, DebugLevel.ERROR);
    }
}

var g_main_inputPwd = false;
var g_main_inputPwdEnter = false;

function setMainInputPasswordStatus(status, enter) {
    g_main_inputPwd = status;
    if (enter) {
        g_main_inputPwdEnter = true;
    }
}

function clearMainInputPasswordStatus() {
    g_main_inputPwd = false;
    g_main_inputPwdEnter = false;
}


function getMainInputPasswordStatus() {
    if (g_main_inputPwdEnter) {
        return true;
    }
    var value = model.parentlock.getSModel();
    if (value == 0) {
        g_main_inputPwd = true;
    }
    else if (value == 1) {
        g_main_inputPwd = false;
    }
    return g_main_inputPwd;
}

function getMainInputPasswordStatusByEnter() {
    return g_main_inputPwdEnter;
}
function getMainInputPasswordStatusByEnterByParentLock() {
    var value = model.parentlock.getSModel();
    if (value == 0) {
        return true;
    }
    else {
        return false;
    }
}

function getCurrentLockTime() {
    if (!tv) return false;
//    var d = model.tvservice.getDateTime();
//    var zone = model.timerfunc.getTimeZone();
//    time = new Date(d * 1000 + (3600000 * timeZone));
//    var week = time.getUTCDay();
//    debugPrint("current week:" + time.getUTCDay() , DebugLevel.ALWAYS);
//    var weekly = model.parentlock.getEndWeekly();
//    // debugPrint("current:" + weekly, DebugLevel.ALWAYS);
//    if(weekly[week] == 0){
//        return false;
//    }

    var dateC = model.timerfunc.getCurLocalTime();
    var current = {};
    current.h = parseInt(clearFirstNumber0("" + dateC[3]));
    current.m = parseInt(clearFirstNumber0("" + dateC[4]));


    var dateTmpS = model.parentlock.getStart();
    var dateS = ChangeInttoTime(dateTmpS, 1);
    var start = {};
    start.h = parseInt(clearFirstNumber0("" + dateS.split(":")[0]));
    start.m = parseInt(clearFirstNumber0("" + dateS.split(":")[1]));

    var dateTmpE = model.parentlock.getEnd();
    var dateE = ChangeInttoTime(dateTmpE, 1);

    var end = {};
    end.h = parseInt(clearFirstNumber0("" + dateE.split(":")[0]));
    end.m = parseInt(clearFirstNumber0("" + dateE.split(":")[1]));
    debugPrint("current:" + JSON.stringify(current) + "start:" + JSON.stringify(start) + "end:" + JSON.stringify(end));

    var twoDays = false;
    if (end.h < start.h) {
        end.h = end.h + 24;
    }
    else if (end.h == start.h) {
        if (end.m < start.m) {
            end.h = end.h + 24;
        }
    }
    debugPrint("current:" + JSON.stringify(current) + "start:" + JSON.stringify(start) + "end:" + JSON.stringify(end));

    if (!twoDays) {
        if (current.h > start.h) {
            if (current.h < end.h) {
                return true;
            }
            else if (current.h == end.h) {
                if (current.m >= end.m) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else if (current.h > end.h) {
                return false;
            }
        }
        else if (current.h == start.h) {
            if (current.m >= start.m) {
                if (current.h < end.h) {
                    return true;
                }
                else if (current.h == end.h) {
                    if (current.m >= end.m) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else if (current.h > end.h) {
                    return false;
                }
            }
            else if (current.m < start.m) {
                return false;
            }
        }
        else if (current.h < start.h) {
            return false;
        }
    }
    return false;
}

function clearFirstNumber0(num) {
    var tmp = num;
    if (num.length > 1) {
        tmp = num.substring(0, 1);
        if (tmp == 0) {
            tmp = num.substring(1, 2);
            return tmp;
        }
    }
    return num;
}


Date.prototype.addDays = Date.prototype.addDays || function (days) {
    this.setUTCDate(this.getUTCDate() + days);
    return this;
}

Date.prototype.addHours = Date.prototype.addHours || function (hours) {
    this.setUTCHours(this.getUTCHours() + hours);
    return this;
}
/*
 * 启动录制命令
 * */
function sendRecordCommand() {
    //当前没有页面获取焦点时，为防止焦点丢失，在收到录制消息之前，让空白页面获取焦点
    if (hiWebOsFrame.getCurrentPageId() == '') {
        openLiveTVModule([Msg.INFO, 0]);
    }
    //若为3D模式，关闭3D模式
    if(1 == model.video.get3dSupported() && 0 != model.video.getEnum3dMode())
    {
        model.video.setEnum3dMode(0);
    }
    //检查一下磁盘剩余空间
    try {
        DBG_ALWAYS("model.pvr.ParInfo()");
        model.pvr.getPvrParInfo = getPvrParInfo;
        model.pvr.ParInfo();
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}
/*
 * 监听录制过程中硬盘的状态
 * 说明：
 *   录制过程中，拔出硬盘时提示用户
 * */
function pvrRecorderMediaAvailableChaged(messageID) {
    DBG_ALWAYS("media is not available: messageID=" + messageID);
    switch (parseInt(messageID)) {
        case PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_NO_DEVICE:
        case PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_CHG_ANOTHER_AVAIL:
        {
            try {
                debugPrint("media is not available! pvr stop!");
                try {
                    var origin = hiWebOsFrame.getCurrentPage();
                }
                catch (ex) {
                    debugPrint("error: " + ex.message);
                }
                if (hiWebOsFrame.getCurrentPageId() == '') {
                    origin = hiWebOsFrame.blankPage;
                }
                debugPrint("origin: " + hiWebOsFrame.getCurrentPageId());
                if (hiWebOsFrame.getCurrentPageId() == "pvrtshift_pvr_page") {
                    hiWebOsFrame.pvrPage.close();
                    origin = hiWebOsFrame.blankPage;
                    hiWebOsFrame.needOpenBlankPage = true;
                }
                hiWebOsFrame.createPage("pvrFinishDialog", null, origin, null, function (page) {
                    hiWebOsFrame.pvrfinishDialog = page;
                    hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTip.Data = "HDD is unavailable";
                    hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipName.Data = '';
                    hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipImgPic.Data = hiWebOsFrame.pvrfinishDialog.operateData.imgList[0];
                    hiWebOsFrame.pvrfinishDialog.rewriteDataOnly();
                    hiWebOsFrame.pvrfinishDialog.open();
                });
            }
            catch (ex) {
                debugPrint("error: " + ex.message);
            }
        }
            break;
        default :
            break;
    }
}
/*
 * 监听录制状态变化的回调函数
 * pvr-2015-1-27
 * */
var g_pvrrecodstatetimer = 0;
var g_currentIsRecording = false;
function pvrRecordStateChanged(value) {
    DBG_ALWAYS("pvrRecordStateChanged: value=" + value);
    if (value != PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_RECORDING && value != PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_STOPPED
        && value != PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_STOPPED_NOTIFY_3RD) {
        DBG_INFO("pvrRecordStateChanged: " + value + ", no used, return;");
        return;
    }

    var messageID = value;
    clearTimeout(g_pvrrecodstatetimer);
    g_pvrrecodstatetimer = setTimeout(function () {
        switch (messageID) {
            case PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_RECORDING://录制
                hiWebOsFrame.endLoading("ENUM_SL2_TVAPI_PVR_STATE_RECORDING");
                g_currentIsRecording = true;
                pauseHBBTV();
                closeDOthersModule("livetv");
                closeLiveTVModule();
                startRecordPage();
                break;
            case PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_STOPPED_NOTIFY_3RD:
                sendAM(":dtv_app_mtk,am,:wakeup=hotkey");    //need fall though
                sendAM(":am,am,:start=opera4x");
            case PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_STOPPED://停止
                g_currentIsRecording = false;
                hiWebOsFrame.endLoading("ENUM_SL2_TVAPI_PVR_STATE_STOPPED");
                isScheduleRecord = false;
                debugPrint("stop pvr message stop pvr!");
                try {
                    if (hiWebOsFrame.pvrPage != null) {
                        pvrPageDestroy();
                    }
                    if (hiWebOsFrame.needOpenBlankPage) {
                        hiWebOsFrame.needOpenBlankPage = false;
                        openLiveTVModule([Msg.INFO, 0]);
                    }
                    var channelFlag = livetvchlist.getChangeChannelFlag();
                    if (!!channelFlag) {
                        hiWebOsFrame.endLoading("stoppvr");
                        livetvchlist.changeChannel(channelFlag.flag, channelFlag.param);
                    }
                    if (hiWebOsFrame.openEPGFromPVR) {
                        hiWebOsFrame.endLoading("stoppvr");
                        hiWebOsFrame.openEPGFromPVR = false;
                        openLiveTVModule([Msg.INFO, 0]);
                        openEPGPage();
                    }
                    mainAfterStopPvrProcess();
                }
                catch (ex) {
                    debugPrint("error: " + ex.message);
                }
                if (1 == model.system.getPVRStandby()) {
                    DBG_INFO("standby record completed.");
                    model.system.SwitchOffTv();
                }
                break;
            default:
                break;
        }
    }, 2000);
}

/**
 * 获取启动录制失败的原因，提示用户启动录制失败
 * 说明：
 *   1-UUID设置不正确
 *   2-MTK底层set disk错误
 *   3-MTK底层start pvr错误
 */
function getStartRecordInfo(id, messageID) {
    DBG_ALWAYS("getStartRecordInfo() (if -1/-2/-3 then fail): " + messageID);
    switch (parseInt(messageID)) {
        case -1:
        case -2:
        case -3:
            try {
                //若是预约录制启动失败，将预约标志位置为false
                if (isScheduleRecord == true) {
                    isScheduleRecord = false;
                }
                hiWebOsFrame.endLoading();
                try {
                    var origin = hiWebOsFrame.getCurrentPage();
                } catch (ex) {
                    DBG_ERROR(ex.message);
                }
                if (hiWebOsFrame.getCurrentPageId() == '') {
                    origin = hiWebOsFrame.blankPage;
                }
                debugPrint("origin: " + hiWebOsFrame.getCurrentPageId());
                if (hiWebOsFrame.getCurrentPageId() == "pvrtshift_pvr_page"
                    || hiWebOsFrame.getCurrentPageId() == "pvrHDSpeedCheckResult"
                    || hiWebOsFrame.getCurrentPageId() == "epg_book_add_page"
                ) {
                    hiWebOsFrame.getCurrentPage().close();
                    origin = hiWebOsFrame.blankPage;
                }
                //录制启动失败时，并没有启动录制，所以在退出提示框的时候不需要发停止录制命令
                isNoNeedStopRecord = true;
                hiWebOsFrame.createPage("pvrFinishDialog", null, origin, null, function (page) {
                    hiWebOsFrame.pvrfinishDialog = page;
                    hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTip.Data = "Failed to start recording";
                    hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipName.Data = '';
                    hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipImgPic.Data = hiWebOsFrame.pvrfinishDialog.operateData.imgList[0];
                    hiWebOsFrame.pvrfinishDialog.rewriteDataOnly();
                    hiWebOsFrame.pvrfinishDialog.open();
                });
            } catch (ex) {
                DBG_ERROR("error: " + ex.message);
            }
            break;
        default :
            break;
    }
}
/*
 * 计算硬盘能够启动录制所需的最小剩余空间
 * 说明：
 *   以录制两分钟所需的剩余空间
 * */
function getHardDiskMinFreeSizeOfRecord() {
    try {
        var hardDiskRecordSpeed = 1.6 * 1024 * 1024;//HD 12.8Mbit/s
        var hardDiskRecordTime = 2 * 60;//2minutes
        DBG_INFO("min free size of record=" + hardDiskRecordSpeed * hardDiskRecordTime);
        return (hardDiskRecordSpeed * hardDiskRecordTime);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
/*
 * 获取硬盘信息，判断硬盘剩余空间是否满足开始录制的条件（剩余空间足够满足录制两分钟）
 * */
function getPvrParInfo(id, value) {
    try {
        DBG_INFO("getPvrParInfo: " + JSON.stringify(value));
        var hardDiskFreeSize = parseInt(value[1]);
        var minFreeSizeOfRecord = getHardDiskMinFreeSizeOfRecord();
        DBG_INFO("minFreeSizeOfRecord=" + minFreeSizeOfRecord);
        //如果硬盘剩余空间足够满足录制两分钟，则启动录制
        if (hardDiskFreeSize > minFreeSizeOfRecord) {
            hiWebOsFrame.startLoading(10, "prepare_pvr");
            DBG_INFO("free size is big enough to send Record Command!");
            model.pvr.getStartRecordInfo = getStartRecordInfo;//获取录制启动失败的原因
            DBG_INFO("pauseHBBTV() before start record");
            pauseHBBTV();
            DBG_INFO('model.pvr.StartRecord()');
            model.pvr.StartRecord();
        }
        else {
            try {
                var origin = hiWebOsFrame.getCurrentPage();
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }
            if (hiWebOsFrame.getCurrentPageId() == '') {
                origin = hiWebOsFrame.blankPage;
            }
            DBG_INFO("origin: " + hiWebOsFrame.getCurrentPageId());
            if (hiWebOsFrame.getCurrentPageId() == "pvrtshift_pvr_page"
                || hiWebOsFrame.getCurrentPageId() == "pvrHDSpeedCheckResult"
                || hiWebOsFrame.getCurrentPageId() == "epg_book_add_page") {

                DBG_INFO('curPageId is "pvrtshift_pvr_page" || "pvrHDSpeedCheckResult" || "epg_book_add_page", close and set oriPage  hiWebOsFrame.blankPage');
                hiWebOsFrame.getCurrentPage().close();
                origin = hiWebOsFrame.blankPage;
            }
            isNoNeedStopRecord = true;
            if (isScheduleRecord) {
                //空间不够，没有启动录制，标志位重置为false
                isScheduleRecord = false;
            }
            hiWebOsFrame.createPage("pvrFinishDialog", null, origin, null, function (page) {
                hiWebOsFrame.pvrfinishDialog = page;
                hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTip.Data = "Insufficient external storage space";
                hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipName.Data = '';
                hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipImgPic.Data = hiWebOsFrame.pvrfinishDialog.operateData.imgList[0];
                hiWebOsFrame.pvrfinishDialog.rewriteDataOnly();
                hiWebOsFrame.pvrfinishDialog.open();
            });
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function openReminderDialog(origin, bookingItem) {
    try {
        hiWebOsFrame["dialog_reminder"].origin = origin;
        hiWebOsFrame["dialog_reminder"].operateData.program = bookingItem;
        hiWebOsFrame["dialog_reminder"].open();
        hiWebOsFrame["dialog_reminder"].hiFocus();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function startReminderDialogOnApp(bookingItem) {
    try {
        var crntPage = hiWebOsFrame.getCurrentPage();
        if ("app_lau_browser" == crntPage.id) {
            switch (appBrowser.getCurrentCommandType()) {
                case CmdURLType.LAU_BROWSER_HIMEDIA:
                    if (16 != GlobalFlagShareInBrowser) {
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                    }
                    openReminderDialog(crntPage, bookingItem);
                    hiWebOsFrame.registerKeyCodesForSettingOnApp();
                    break;
                default :

                    break;
            }
        } else {
            openReminderDialog(crntPage, bookingItem);
            hiWebOsFrame.registerKeyCodesForSettingOnApp();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/*
 * 预约录制时间到
 * */

//待机录制状态
var scheduleItemChagedBackGroundRecord = 0;

function onScheduleItemChaged(value) {
    var disableIdList = [
        "epos", "pvrHDCheckRetryDialog", "pvrHardDiskCheck", "pvrHDList",
        "dialog", "setting_epos_countdown_page", LiveTVModule.OPERATE_TIP];
    var disableModuleList = [
        "miracast", "dlna_videoPlayer", "dlna_musicPlayer", "dlna_picPlayer",
        "sleep", "iqqi"];
    DBG_INFO("onScheduleItemChaged: " + value);

    value.length >= 12 && (scheduleItemChagedBackGroundRecord = value[11]);
    if (typeof pvrHardDiskCheckPageData != UNDEFINED_DEFSTR && !!pvrHardDiskCheckPageData.operateData.tmpEpgVal) {
        pvrHardDiskCheckPageData.operateData.tmpEpgVal = null;
    }
    var crntPage = hiWebOsFrame.getCurrentPage();

    if (null != crntPage && (hiWebOsFrame.isCurrentPageBeProtected() ||
        (disableIdList.indexOf(crntPage.id) > -1) ||
        disableModuleList.indexOf(crntPage.module) > -1 ||
        factoryMode != FACTORY_MODE_ENUM.MODE_NORMAL || hiWebOsFrame.getIsLocking())) {
        DBG_ALWAYS("current page[" + crntPage.id + "] can not popup reminder.");
        schedule.getScheduleList(false);
    }
    else {
        var scheduleItemInfo = schedule.parseScheduleItem(value, true);
        debugPrint("scheduleItemInfo: " + JSON.stringify(scheduleItemInfo));

        schedule.getScheduleList(false);
        //预约时间到达时检测是否存在pvr相关界面，如果存在close掉;
        if(hiWebOsFrame.getCurrentPageId() == "epg_book_edit_page" || hiWebOsFrame.getCurrentPageId() == "pvrOrtShiftDialogPage_id"){
            hiWebOsFrame.getCurrentPage().close();
        }
        if (scheduleItemInfo.bookType == 0) {
            if (crntPage.module == "setting" || crntPage.module == "settingfirst") {
                DBG_ALWAYS("current page[" + crntPage.id + "] can not popup reminder.");
            }
            else {
                hiWebOsFrame.createPage("dialog_reminder", null, null, null, function (page) {
                    hiWebOsFrame["dialog_reminder"] = page;
                    if (checkIsAppOn()) {
                        startReminderDialogOnApp(scheduleItemInfo);
                    }
                    else if("dialog_reminder" == hiWebOsFrame.getCurrentPageId()){
                        // closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                        openReminderDialog(hiWebOsFrame["dialog_reminder"].origin, scheduleItemInfo);
                    }
                    else {
                        closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
                        openReminderDialog(hiWebOsFrame.blankPage, scheduleItemInfo);
                    }

                });
            }
        }
        else {
            //如果预约到时电视待机，在此判断主要是解决此种情况下，硬盘没有准备好，需要设置一个默认分区
            if (parseInt(scheduleItemInfo.standbyScheduleRecord) == 1) {
                isStandbyScheduleRecord = true;
            }
            else {
                isStandbyScheduleRecord = false;
            }
            prgrmInfoOfRecordTip = null;
            //第三方应用下叠加setting的情况不弹提示
            if (checkIsAppOn()
                && (crntPage.module == "setting"
                || crntPage.module == "settingfirst")) {
                DBG_ALWAYS("current page[" + crntPage.id + "] can not popup reminder.");
                return;
            }
            isScheduleRecord = true;
            hiWebOsFrame.manualStopOfPvr = false;
            hiWebOsFrame.noRecordOfCurChannel = false;
            isCurrentChannelOfSchedule = false;
            isExistProgramRecording = false;
            //endTimeOfScheduleRecord = null;
            var curChlInfo = livetvmain.getCurrentChannelInfo();
            debugPrint("curChlInfo: " + JSON.stringify(curChlInfo));
            var prgram = {};
            try {
                prgram.startTime = scheduleItemInfo.startTime;
                prgram.endTime = scheduleItemInfo.endTime;
                prgram.title = scheduleItemInfo.title;
                prgram.period = scheduleItemInfo.repeatMode;
                prgram.channelNumber = scheduleItemInfo.channelNumber;
                prgram.channelName = scheduleItemInfo.channelName;
                prgram.channelUid = scheduleItemInfo.channelUid;
                prgram.playId = scheduleItemInfo.playId;
                prgram.listUid = scheduleItemInfo.listUid;
                debugPrint("program: " + JSON.stringify(prgram));
                prgrmInfoOfRecordTip = copyObj(prgram);
                debugPrint("prgrmInfoOfRecordTip: " + JSON.stringify(prgrmInfoOfRecordTip));
                //endTimeOfScheduleRecord = scheduleItemInfo.endTime;//要考虑修不修改！
                //debugE("endTimeOfScheduleRecord=" + endTimeOfScheduleRecord);
            }
            catch (ex) {
                debugPrint("prgram error: " + ex.message);
            }
            if (checkIsAppOn() || !!deviceKeySet.HBBTVAPPON) {
                hiWebOsFrame.noRecordOfCurChannel = false;
                debugPrint("start record dialog open!");
                isExistProgramRecording = false;
                //若不是当前频道，需要换台;若是当前频道，等待播放成功后起录制
                if (parseInt(scheduleItemInfo.channelUid) == parseInt(curChlInfo.uid)) {
                    isCurrentChannelOfSchedule = true;
                }
                else {
                    isCurrentChannelOfSchedule = false;
                }
                BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                return;
            }
            var crntSrc = livetvmain.getCurrentSource();
            if (crntSrc.innerId != SourceList.TV) {
                hiWebOsFrame.noRecordOfCurChannel = false;
                isExistProgramRecording = false;
                debugPrint("start record dialog open!");
                BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                return;
            }
            debugPrint("getCurrentPageId:::::::::::" + hiWebOsFrame.getCurrentPageId());
            if (hiWebOsFrame.getCurrentPageId() != "livetv_main" && 'livetv_password_dialog' != hiWebOsFrame.getCurrentPageId()) {
                hiWebOsFrame.noRecordOfCurChannel = false;
                if (parseInt(scheduleItemInfo.channelUid) == parseInt(curChlInfo.uid)) {
                    isCurrentChannelOfSchedule = true;
                }
                else {
                    isCurrentChannelOfSchedule = false;
                }
                if (isMainArchiveRecording()) {
                    isExistProgramRecording = true;
                }
                else {
                    isExistProgramRecording = false;
                }
                BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                return;
            }
            //若预约录制的节目正是当前节目
            if (parseInt(scheduleItemInfo.channelUid) == parseInt(curChlInfo.uid)) {
                debugPrint("scheduleItem program is current program!");
                isCurrentChannelOfSchedule = true;
                //若预约节目到时当前节目正在录制，提示用户是否开始新的录制
                if (isMainArchiveRecording()) {
                    debugPrint("newRecordTipDialog open!");
                    isExistProgramRecording = true;
                    hiWebOsFrame.noRecordOfCurChannel = false;
                    BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                }
                else if (isTimeShiftStatus()) {
                    debugPrint("RecordTipDialog open!");
                    isExistProgramRecording = false;
                    hiWebOsFrame.noRecordOfCurChannel = false;
                    BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                }
                else//若预约节目到时没有节目在录制
                {
                    //预约录制到，提示用户录制开始
                    isExistProgramRecording = false;
                    hiWebOsFrame.noRecordOfCurChannel = true;
                    debugPrint("start record tip open!");
                    BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                }
            }
            else//若预约录制的节目不是当前节目，切台
            {
                debugPrint("scheduleItem program is not current program!");
                isCurrentChannelOfSchedule = false;
                //UI提示用户是否开始录制
                if (isMainArchiveRecording()) {
                    debugPrint("newRecordTipDialog open!");
                    isExistProgramRecording = true;
                    hiWebOsFrame.noRecordOfCurChannel = false;
                    BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                }
                else {
                    debugPrint("beginRecordDialog open!");
                    isExistProgramRecording = false;
                    hiWebOsFrame.noRecordOfCurChannel = false;
                    BeginRecordScheduleProgram(prgrmInfoOfRecordTip);
                }
            }
        }
    }
}
/*
 * 在节目播放的时候，响应按键-向下键、T.shift键、PVR键
 * pvr-2015-1-28
 * */
var g_tshift_status = 0;
function chl_startPVRTShiftDialog(prgrm, keyValue) {
    debugPrint('chl_startPVRTShiftDialog:' + JSON.stringify(prgrm));
    //如果当前页面不是blankPage，退出
    if (hiWebOsFrame.getCurrentPageId() != "livetv_main") {
        debugPrint("current page id: " + hiWebOsFrame.getCurrentPageId());
        return;
    }
    if (!!deviceKeySet.HBBTVAPPON) {
        debugPrint("hbbtv app is runing, ignore");
        return;
    }
    //没有用
    //try {
    //    if (hiWebOsFrame.getCurrentPageId() == "dialog_usb") {
    //        debugPrint("close usb dialog page!");
    //        hiWebOsFrame.dialog_usb.destroy();
    //    }
    //}
    //catch (ex) {
    //    debugPrint("error:" + ex.message);
    //}

    //已经是blankPage，不再需要
    //closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
    hiWebOsFrame.lockAllKeys();
    hiWebOsFrame.createPage("pvrOrtShiftDialogPage_id", null, hiWebOsFrame.blankPage, null, function (page) {
        debugPrint("start pvr or timeshift?");
        hiWebOsFrame.ptDialog = page;
        hiWebOsFrame.ptDialog.rewriteDataOnly();
        debugPrint("isScheduleRecord?= " + isScheduleRecord);
        prgrmInfoOfPvrTshift = copyObj(prgrm);

        hiWebOsFrame.ptDialog.operateData.curprgrm = funcopyobj(prgrm);

        //starter变量没用任何地方用到
        //hiWebOsFrame.ptDialog.starter = "livetv_main";

        if (keyValue == VK_DOWN)//chl_keyValues.keyDown
        {
            try {
                if (!!isTimeShiftStatus()) {
                    hiWebOsFrame.unLockAllKeys();
                    debugPrint("blankPage start TShift Page!!!");
                    //startTShiftPage();
                    launchTshift();
                }
                else if (isMainArchiveRecording()) {
                    hiWebOsFrame.unLockAllKeys();
                    debugPrint("blankPage start pvr Page!!!");
                    startRecordPage();
                }
                else if (!!hiWebOsFrame.ptDialog.operateData.curprgrm.lock) {
                    hiWebOsFrame.unLockAllKeys();
                    openRemindRecordSettingPage();
                }
                else {
                    debugPrint("[blankPage] open pvrTshift page dialog!");
                    if (!!hiWebOsFrame.ptDialog.exittimeout) {
                        clearTimeout(hiWebOsFrame.ptDialog.exittimeout);
                        hiWebOsFrame.ptDialog.exittimeout = null;
                    }
                    hiWebOsFrame.ptDialog.exittimeout = setTimeout("exitPvrTShiftDialog()", 30 * 1000);
                    page.open();
                    page.hiFocus();
                    hiWebOsFrame.unLockAllKeys();
                    debugPrint("[blankPage] open pvrTshift page dialog sucess!");
                }
            }
            catch (ex) {
                hiWebOsFrame.unLockAllKeys();
                debugPrint('start error:' + ex, DebugLevel.ERROR);
            }
        } else {
            hiWebOsFrame.unLockAllKeys();
            if (keyValue == VK_PVR && !isTimeShiftStatus())//chl_keyValues.keyPvr
            {
                try {
                    debugPrint("keyPvr is pressed!");
                    //若当前节目没有播放，直接退出
                    if (prgrm == null) {
                        debugPrint("current dtv info is null!");
                        return null;
                    }
                    else {
                        if (isMainArchiveRecording()) {
                            startRecordPage();
                        }
                        else {
                            launchPvr();
                        }
                    }
                }
                catch (ex) {
                    debugPrint(ex.message, DebugLevel.ERROR);
                }
            }
            else if (keyValue == VK_PVR && !!isTimeShiftStatus())//chl_keyValues.keyPvr
            {
                try {
                    PVRAndTshiftSwitch(1);
                }
                catch (ex) {
                    debugPrint('keyTimeShift error:' + ex.message, DebugLevel.ERROR);
                }
            }
            else if (keyValue == VK_T_SHIFT && !isMainArchiveRecording() && !isTimeShiftStatus())//chl_keyValues.keyTimeShift
            {
                try {
                    startTShiftPageFromMain();
                }
                catch (ex) {
                    debugPrint('keyTimeShift error:' + ex.message, DebugLevel.ERROR);
                }
            }
            else if (keyValue == VK_T_SHIFT && isMainArchiveRecording())//chl_keyValues.keyTimeShift
            {
                try {
                    PVRAndTshiftSwitch(2);
                }
                catch (ex) {
                    debugPrint('keyTimeShift error:' + ex.message, DebugLevel.ERROR);
                }
            } else if (keyValue == VK_T_SHIFT && !!isTimeShiftStatus()) {
                launchTshift();
            }
            else if (keyValue == VK_PAUSE && !!isTimeShiftStatus()) {
                //model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
                var status = g_tshift_status;
                if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X) {
                    model.timeshift.Pause();
                }

            }
            else if (keyValue == VK_PLAY && !!isTimeShiftStatus()) {
                //model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
                var status = g_tshift_status;
                if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X) {
                    model.timeshift.Play();
                }
            }
            else if (keyValue == VK_STOP) {
                if (!!isTimeShiftStatus()) {
                    // model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
                    exitTShift();
                    //model.timeshift.Stop();
                    setTimeout(uiCallStopTShift, 300);
                }
                else if (!!isMainArchiveRecording()) {
                    stopBtnPressedHandler();
                }
            }
            else if (keyValue == VK_PAUSE && !isTimeShiftStatus() && !isMainArchiveRecording()) {
                startTShiftPageFromMain();
            }
            else if (keyValue == VK_FAST_BKW && !!isTimeShiftStatus()) {
                //model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
                var status = g_tshift_status;
                if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X) {
                    model.timeshift.TriplePlay(-2);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X) {
                    model.timeshift.TriplePlay(-4);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X) {
                    model.timeshift.TriplePlay(-8);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X) {
                    model.timeshift.TriplePlay(-16);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X) {
                    model.timeshift.TriplePlay(-32);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X) {
                    model.timeshift.TriplePlay(-2);
                }
            }
            else if (keyValue == VK_FAST_FWD && !!isTimeShiftStatus()) {
                // model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
                var status = g_tshift_status;
                if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X ||
                    status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X) {
                    model.timeshift.TriplePlay(2);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X) {
                    model.timeshift.TriplePlay(4);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X) {
                    model.timeshift.TriplePlay(8);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X) {
                    model.timeshift.TriplePlay(16);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X) {
                    model.timeshift.TriplePlay(32);
                }
                else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X) {
                    model.timeshift.TriplePlay(2);
                }
            }
        }


    });
    //hiWebOsFrame.unLockAllKeys(); //unlockAllKeys 暂时移到回调函数里面
}

function startTShiftPageFromMain() {
    try {
//        if (livetvmain.getCurrentChannelInfo().eCode == ECode.LOCK && !livetvmain.getUnlockFlag()) {
//            DBG_INFO("the current channle is locked!!!!!!!!!!!!!");
//
//            return;
//        }
        currentSelected = "tshift";
        var tuid = model.timeshift.getUuid();
        debugPrint('model.timeshift.getUuid:' + tuid);
        var size = model.timeshift.getMemSize();
        debugPrint('model.timeshift.getMemSize:' + size);
        if (!pvrOrTsIsUsbPathOk(tuid) || parseInt(size) == 0) {
            hiWebOsFrame.createPage("pvrHardDiskCheck", null, null, null, function (page) {
                hiWebOsFrame.pvrHardDiskCheck = page;
                page.open();
                hiWebOsFrame.pvrHardDiskCheck.searchHDTimer = setTimeout(function () {
                    pvrPartitionsInit(0);
                }, 1000);
                page.hiFocus();
            });
        }
        else {
            debugPrint('getTshiftIsRegistered:');
            model.timeshift.getTshiftIsRegistered = mainTshiftIsRegistered.bind(this, tuid);
            var path = getUsbPathByUid(tuid);
            debugPrint('getTshiftIsRegistered:' + path);
            model.timeshift.IsRegistered(path);
            // startSetParTShift();
//            startTshiftMediaDialog();
//            //model.timeshift.BeginShift();
//            model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
//            setTimeout(startPlayShift,100);
        }

    }
    catch (ex) {
        debugPrint('getDiskState error:' + ex);
    }
}

function mainTshiftIsRegistered(uid, id, value) {
    debugPrint("mainTshiftIsRegistered!!!!" + value + " =:" + uid);
    if (value == -1) {
        hiWebOsFrame.createPage("pvrHardDiskCheck", null, null, null, function (page) {
            hiWebOsFrame.pvrHardDiskCheck = page;
            page.open();
            hiWebOsFrame.pvrHardDiskCheck.searchHDTimer = setTimeout(function () {
                pvrPartitionsInit(0);
            }, 1000);
            page.hiFocus();
        });
    } else {
        debugPrint("mainTshiftIsRegistered: switch to test speed!");
        //hiWebOsFrame.pvrHDList.close();
        var memSize = value / 1024;
        var memIndex = 2;
        if (memSize == 1) {
            memIndex = 2;
        } else if (memSize > 1 && memSize < 2) {
            memIndex = 3;
        } else if (memSize == 2) {
            memIndex = 4;
        } else if (memSize > 2 && memSize < 3) {
            memIndex = 5;
        } else if (memSize == 3) {
            memIndex = 6;
        } else if (memSize > 3 && memSize < 4) {
            memIndex = 7;
        } else if (memSize == 4) {
            memIndex = 8;
        }
        openLiveTVModule([Msg.INFO, 0]);
        //startTshiftMediaDialog();
        model.timeshift.setUuid(uid);
        model.timeshift.setMemSize(memIndex);
        g_tshiftmediaShow = true;
        model.timeshift.getRegisterReturnValue = speedTestResultForTshift;
        model.timeshift.SetPar();
    }
}
var g_tshiftmediaShow = true;
function startTshiftMediaDialog() {
    if (!!hiWebOsFrame.tshiftmedia && !!hiWebOsFrame.tshiftmedia.timer) {
        clearTimeout(hiWebOsFrame.tshiftmedia.timer);
    }
    hiWebOsFrame.createPage('tshiftMediaDialog', null, null, null, function (page) {
        hiWebOsFrame.tshiftmedia = page;
        if (!!hiWebOsFrame.tshiftmedia && !!hiWebOsFrame.tshiftmedia.timer) {
            clearTimeout(hiWebOsFrame.tshiftmedia.timer);
        }
        g_tshiftmediaShow = true;
        hiWebOsFrame.tshiftmedia.open();
        hiWebOsFrame.tshiftmedia.hiFocus();
        hiWebOsFrame.tshiftmedia.timer = setTimeout(exitTshiftMediaToTMsg, 30 * 1000);
    });
}
function exitTshiftMediaToTMsg() {
    try {
        debugPrint('exit thiftmedia!!!!!!!!!!');
        if (!!hiWebOsFrame.tshiftmedia) {
            if (!!hiWebOsFrame.tshiftmedia.timer) {
                clearTimeout(hiWebOsFrame.tshiftmedia.timer);
            }
            hiWebOsFrame.tshiftmedia.timer = null;
            hiWebOsFrame.tshiftmedia.close();
        }
        if (!!hiWebOsFrame.tshiftProgressPage) {
            if (!!hiWebOsFrame.tshiftProgressPage.timeOut) {
                clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);
            }
            if (!!hiWebOsFrame.tshiftProgressPage.clickTimeOut) {
                clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
                hiWebOsFrame.tshiftProgressPage.clickTimeOut = null;
            }
            hiWebOsFrame.tshiftProgressPage.timeOut = null;
            hiWebOsFrame.tshiftProgressPage.operateData.tshiftCurrentTime = null;
            hiWebOsFrame.tshiftProgressPage.close();
            //hiWebOsFrame.tshiftProgressPage = null;
        }
        if (hiWebOsFrame.getCurrentPageId() == "livetv_main" || hiWebOsFrame.getCurrentPageId() == "tshiftMediaDialog") {
            debugPrint("current page id: " + hiWebOsFrame.getCurrentPage().id);
            hiWebOsFrame.createPage('tShiftMsg_id', null, null, null, function (page) {
                debugPrint('launch tShiftMsg_id start !!!!!');
                hiWebOsFrame.tshiftMsg = page;
                hiWebOsFrame.tshiftMsg.operateData.showFlag = 0;
                page.open();
                page.hiFocus();
                debugPrint("UI call time shift stop command!!!!!");
                hiWebOsFrame.tshiftMsg.rewriteDataOnly();
                model.timeshift.Stop();
                hiWebOsFrame.tshiftMsg.timer = setTimeout(exitTMsgPage, 10 * 1000);
            });
        }
    }
    catch (ex) {
        debugPrint('exit thift error:' + ex);
    }
}

function startPlayShift() {
    debugPrint("UI call time shift begin command!!!!!");
    pauseHBBTV();
    if (1 == model.video.get3dSupported() && 0 != model.video.getEnum3dMode()) {
        model.video.setEnum3dMode(0);
    }
    model.timeshift.BeginShift();
    model.timeshift.beginShiftCallBack = beginShiftCommandCallBack;
    model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
}

function beginShiftCommandCallBack(id, value) {
    DBG_INFO("beginShiftCommandCallBack!!!!!!!!!!!!" + value);
    if (value[0] == 0 && value[1] == 0) {
        debugPrint("current page id: " + hiWebOsFrame.getCurrentPage().id);
        if (hiWebOsFrame.getCurrentPageId() == "livetv_main" || hiWebOsFrame.getCurrentPageId() == "tshiftMediaDialog") {
            hiWebOsFrame.createPage('tShiftMsg_id', null, null, null, function (page) {
                debugPrint('launch tShiftMsg_id start !!!!!');
                if (!!hiWebOsFrame.tshiftmedia) {
                    if (!!hiWebOsFrame.tshiftmedia.timer) {
                        clearTimeout(hiWebOsFrame.tshiftmedia.timer);
                    }
                    hiWebOsFrame.tshiftmedia.timer = null;
                    hiWebOsFrame.tshiftmedia.close();
                }
                hiWebOsFrame.tshiftMsg = page;
                hiWebOsFrame.tshiftMsg.operateData.showFlag = 0;
                page.open();
                page.hiFocus();
                debugPrint("UI call time shift stop command!!!!!");
                hiWebOsFrame.tshiftMsg.rewriteDataOnly();
                model.timeshift.Stop();
                hiWebOsFrame.tshiftMsg.timer = setTimeout(exitTMsgPage, 10 * 1000);
            });
        }
    }
}

function startSetParTShift() {
    //startTshiftMediaDialog();
    debugPrint("model.timeshift.SetPar!!!!!!!!!!!!");
    g_tshiftmediaShow = true;
    model.timeshift.getRegisterReturnValue = speedTestResultForTshift;
    model.timeshift.SetPar();
}
function launchTshift() {
    debugPrint('launch tshift!');
    exitTshiftMediaToTShift();

    if (hiWebOsFrame.getCurrentPageId() == "pvrOrtShiftDialogPage_id") {
        hiWebOsFrame.ptDialog.close();
    }

    hiWebOsFrame.createPage('tshiftProgressPage_id', null, null, null, function (page) {
        debugPrint('launch tshift! start !!!!!');
        hiWebOsFrame.tshiftProgressPage = page;
        if (!!hiWebOsFrame.tshiftProgressPage) {
            hiWebOsFrame.tshiftProgressPage.close();
        }
        if (!!hiWebOsFrame.tshiftProgressPage.timeOut) {
            clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);
        }
        if (!!hiWebOsFrame.tshiftProgressPage.clickTimeOut) {
            clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
            hiWebOsFrame.tshiftProgressPage.clickTimeOut = null;
        }
        try {
            var playState = model.timeshift.getPlayState();
            DBG_ALWAYS('launch tshift!' + playState);
            refreshTshiftBtn(playState);
            tshiftcallback();
            page.open();
            //initProgressInfo();
        }
        catch (e) {
            debugE('launch tshift!' + e.message);
        }

    });

}
var startTshiftAfterPwd = false;
var startTshiftAfterPwdValue = -100;
function speedTestResultForTshift(id, ret) {

    var value = 0;
    value = parseInt(ret);

    DBG_ALWAYS("pvrHDList: speedTestResultForTshift, value=" + value + g_tshiftmediaShow);
    DBG_ALWAYS("pvrHDList: speedTestResultForTshift, currentpage=" + hiWebOsFrame.getCurrentPageId());
    if (!!hiWebOsFrame.tshiftmedia) {
        if (!!hiWebOsFrame.tshiftmedia.timer) {
            clearTimeout(hiWebOsFrame.tshiftmedia.timer);
        }
        hiWebOsFrame.tshiftmedia.timer = null;
        //hiWebOsFrame.tshiftmedia.destroy();
    }

    if (!g_tshiftmediaShow) {
        startTshiftAfterPwd = false;
        return;
    }
    DBG_ALWAYS("ifTvLockedForTshift()!!!!!!!!!!!!!!!" + ifTvLockedForTshift());
    if ((hiWebOsFrame.getCurrentPageId() == "livetv_main" || hiWebOsFrame.getCurrentPageId() == "tshiftMediaDialog"
        || hiWebOsFrame.getCurrentPageId() == "pvrOrtShiftDialogPage_id" || hiWebOsFrame.getCurrentPageId() == "pvrHDList")
        && !ifTvLockedForTshift()) {
        startTshiftAfterPwd = false;
        if (hiWebOsFrame.getCurrentPageId() == "pvrOrtShiftDialogPage_id") {
            hiWebOsFrame.ptDialog.close();
        }
        else if (hiWebOsFrame.getCurrentPageId() == "pvrHDList") {
            hiWebOsFrame.pvrHDList.close();
        }
        if (TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_START_REG_FAIL == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_ANALYSIS_FAIL == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_CREATE_FILE_FAIL == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_FAIL == value ||
            -2 == value) {
            speedFailExitTshiftMediaToTMsg();
        }
        else if (TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_OK == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_LOW == value) {
            try {
                if (!isTimeShiftStatus()) {
                    tshiftJudgeToOpenPage();
                }
            }
            catch (ex) {
                debugPrint(ex);
            }
        }
        else if (TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_STRG_STATUS_CHANGE == value) {
            clearTimeout(hiWebOsFrame.tshiftmedia.timer);
            hiWebOsFrame.tshiftmedia.timer = setTimeout(tshiftJudgeToOpenPage, 15 * 1000);
        }
    } else if (hiWebOsFrame.getCurrentPageId() == "livetv_password_dialog" || ifTvLockedForTshift()) {

        if (TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_START_REG_FAIL == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_ANALYSIS_FAIL == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_CREATE_FILE_FAIL == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_FAIL == value ||
            -2 == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_OK == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_SPEED_TEST_LOW == value ||
            TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_NTFY_STRG_STATUS_CHANGE == value) {
            if (!!hiWebOsFrame.tshiftmedia) {
                hiWebOsFrame.tshiftmedia.close();
            }
            startTshiftAfterPwd = true;
            startTshiftAfterPwdValue = value;
            openLiveTVModule([Msg.INFO, 0]);
        }
    }
    else {
        startTshiftAfterPwd = false;
    }
}

function getIsInlockTime() {
    var isInLock = 1;
    try {
        isInLock = tv ? model.source.getCurrentTimeInLock() : 1;
    }
    catch (ex) {
        isInLock = 1;
        DBG_ERROR("getIsInlockTime: " + ex.message);
    }
    DBG_INFO("isInLock is " + isInLock);
    return isInLock
}

function ifTvLockedForTshift() {
    var sourceInfo = livetvmain.getCurrentSource();
    if (sourceInfo != null && sourceInfo.uid == 0) {
        var isLock = model.source.getInputCurrentInLock();
        var sMode = livetvmain.getLockSwitch();
        var lockTime = model.source.getCurrentTimeInLock();
        if (isLock == 1 && sMode != 0 && !livetvmain.getUnlockFlag() && lockTime == 1) {
            return true;
        }
        if (livetvmain.getCurrentChannelInfo().eCode == ECode.LOCK && !livetvmain.getUnlockFlag() && sMode != 0 && lockTime == 1) {
            return true;
        }
    }
    return false;
}
function startTshiftFromInputPwd() {
    DBG_ALWAYS("startTshiftFromInputPwd" + startTshiftAfterPwd);
    if (startTshiftAfterPwd) {
        startTshiftAfterPwd = false;
        var sourceInfo = livetvmain.getCurrentSource();
        if (sourceInfo != null && sourceInfo.uid == 0) {
            speedTestResultForTshift(0, startTshiftAfterPwdValue);
        }
    }
}
function clearTshiftFromInputPwdStatus() {
    DBG_ALWAYS("clearTshiftFromInputPwdStatus" + startTshiftAfterPwd);
    startTshiftAfterPwd = false;
    startTshiftAfterPwdValue = 0;
}
function speedFailExitTshiftMediaToTMsg() {
    try {
        debugPrint('exit thiftmedia');
        if (!!hiWebOsFrame.tshiftmedia) {
            if (!!hiWebOsFrame.tshiftmedia.timer) {
                clearTimeout(hiWebOsFrame.tshiftmedia.timer);
            }
            hiWebOsFrame.tshiftmedia.timer = null;
            hiWebOsFrame.tshiftmedia.close();
        }
        hiWebOsFrame.createPage('tShiftMsg_id', null, null, null, function (page) {
            debugPrint('launch tShiftMsg_id start !!!!!');
            hiWebOsFrame.tshiftMsg = page;
            hiWebOsFrame.tshiftMsg.operateData.showFlag = 0;
            page.open();
            page.hiFocus();
            hiWebOsFrame.tshiftMsg.rewriteDataOnly();
            hiWebOsFrame.tshiftMsg.timer = setTimeout(exitTMsgPage, 10 * 1000);
        });
    }
    catch (ex) {
        debugPrint('exit thift error:' + ex);
    }
}
function tshiftJudgeToOpenPage() {
    try {
        if (!!isTimeShiftStatus()) {//
            debugPrint(' start to tshift **** open page !');
            launchTshift();
        }
        else { //todo
            //launchTshift();
            debugPrint(' start  to call tshift **** open page !');
            //model.timeshift.BeginShift();
            openLiveTVModule([Msg.INFO, 0]);
            model.timeshift.onPlayStateChaged = tShiftPlayStatusChanged;
            setTimeout(startPlayShift, 100);

        }

    }
    catch (ex) {
        debugPrint(ex.message);
    }
}

function tShiftPlayStatusChanged(value) {
    DBG_ALWAYS(' tShiftPlayStatusChanged !' + value);
    if (!!hiWebOsFrame.tshiftmedia) {
        if (!!hiWebOsFrame.tshiftmedia.timer) {
            clearTimeout(hiWebOsFrame.tshiftmedia.timer);
        }
        hiWebOsFrame.tshiftmedia.timer = null;
        hiWebOsFrame.tshiftmedia.close();
    }
    var status = parseInt(value);
    g_tshift_status = status;
    if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PLAY ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_PAUSE ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_2X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_4X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_8X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_16X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FF_32X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_2X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_4X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_8X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_16X ||
        status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_FB_32X) {
        if (!!hiWebOsFrame.tshiftProgressPage && !!hiWebOsFrame.tshiftProgressPage.timeOut) {
            refreshTshiftBtn(status);
        }
        else {
            DBG_INFO("current page id: " + hiWebOsFrame.getCurrentPage().id);
            if (hiWebOsFrame.getCurrentPageId() == "livetv_main" || hiWebOsFrame.getCurrentPageId() == "tshiftMediaDialog"
                || hiWebOsFrame.getCurrentPageId() == "pvrOrtShiftDialogPage_id" || hiWebOsFrame.getCurrentPageId() == "pvrHDList") {
                launchTshift();
            }
        }

    }
    else if (status == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_STOP) {
        if (!!hiWebOsFrame.tshiftProgressPage) {
            if (!!hiWebOsFrame.tshiftProgressPage.timeOut) {
                clearTimeout(hiWebOsFrame.tshiftProgressPage.timeOut);
                if (hiWebOsFrame.getCurrentPageId() == "tshiftProgressPage_id") {
                    debugPrint("exit tshift, focus back to blank page");
                    openLiveTVModule([Msg.INFO, 0]);
                }
            }
            if (!!hiWebOsFrame.tshiftProgressPage.clickTimeOut) {
                clearTimeout(hiWebOsFrame.tshiftProgressPage.clickTimeOut);
                hiWebOsFrame.tshiftProgressPage.clickTimeOut = null;
            }
            g_thsiftRecordTime = 0;
            g_thsiftRecordTimeShow = 0;
            if (g_tshiftRecordTimeout != null) {
                clearTimeout(g_tshiftRecordTimeout);
            }
            hiWebOsFrame.tshiftProgressPage.timeOut = null;
            hiWebOsFrame.tshiftProgressPage.operateData.tshiftCurrentTime = null;
            hiWebOsFrame.tshiftProgressPage.close();
            //hiWebOsFrame.tshiftProgressPage = null;
        }
        if (hiWebOsFrame.needOpenBlankPage) {
            hiWebOsFrame.needOpenBlankPage = false;
            openLiveTVModule([Msg.INFO, 0]);
        }
        var channelFlag = livetvchlist.getChangeChannelFlag();
        if (!!channelFlag) {
            hiWebOsFrame.endLoading("stoppvr");
            livetvchlist.changeChannel(channelFlag.flag, channelFlag.param);
        }
        if (hiWebOsFrame.openEPGFromPVR) {
            hiWebOsFrame.endLoading("stoppvr");
            hiWebOsFrame.openEPGFromPVR = false;
            openLiveTVModule([Msg.INFO, 0]);
            openEPGPage();
        }
        mainAfterStopTShiftProcess();
    }
    else {
        if (!!hiWebOsFrame.tshiftProgressPage) {
            hiWebOsFrame.tshiftProgressPage.destroy();
        }
        if (hiWebOsFrame.getCurrentPageId() == "livetv_main" || hiWebOsFrame.getCurrentPageId() == "tshiftMediaDialog" ||
            hiWebOsFrame.getCurrentPageId() == "tshiftProgressPage_id") {
            exitTshiftMediaToTMsg();
        }
    }
}
/*
 * 深度复制对象
 * pvr-2015-1-23
 * */
function funcopyobj(oldobject) {
    var newobject = $.extend(true, {}, oldobject);//深度拷贝，嵌套的子对象也进行合并
    return newobject;
}
/*
 * 判断节目是否获得录制权限
 * 返回：
 *   true-获得录制权限；false-没有获得录制权限
 * */
function isMainArchiveRecording() {
    debugPrint("archive recording: " + g_currentIsRecording);
    return g_currentIsRecording;
}
/*
 * 检测是不是在时移
 * 返回：
 *   true-正在时移；false-没有时移
 * pvr-2015-1-23
 * */
function isTimeShiftStatus() {
    //获取时移状态 0-idle 1-playback 2-tshift playback 3-media prepare
    // var timeShiftValue = model.timeshift.getPlayState();
    //var timeShiftValue = g_tshift_status;
    DBG_INFO("getTimeShiftPlayerState:" + g_tshift_status);
    if (parseInt(g_tshift_status) == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_LIVE_PLAY ||
        parseInt(g_tshift_status) == TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_STATE_STOP) {
        return false;
    }
    else {
        return true;
    }

    //return (1 == timeShiftValue);
}
/*
 * 节目录制和时移切换
 * pvr-2015-1-26
 * */
function PVRAndTshiftSwitch(flag) {
    try {
        var tip = "";
        switch (flag) {
            case 1:
                exitTShift();
                tip = 'Are you sure you want to stop time shifting and start recording?';
                debugPrint('stop thift and to  pvr!');
                break;
            case 2:
                exitPVR();
                tip = 'Are you sure you want to stop recording and start time shifting?';
                debugPrint('stop pvr and to  thift!');
                break;
        }
        closeDOthersModule("livetv");
        hiWebOsFrame.createPage('pvrTshiftShowDialog', null, null, null, function (page) {
            hiWebOsFrame.ptShowDialog = page;
            hiWebOsFrame.ptShowDialog.operateData.flag = flag;
            hiWebOsFrame.ptShowDialog.operateData.pvrTshiftTip.Data = tip;
            hiWebOsFrame.ptShowDialog.rewriteDataOnly();
            hiWebOsFrame.ptShowDialog.open();
            hiWebOsFrame.ptShowDialog.hiFocus();
            debugPrint('pvrTshiftShowDialog create over!');
        });
    }
    catch (ex) {
        debugPrint('recordTimeShiftHandler err:' + ex, DebugLevel.ERROR);
    }
}

function onAudioDeviceExistChanged(val) {
    try {
        AudioDevice.EXIST = val;
        if (0 == val) vol.reCheckVolume();
        DBG_INFO("audio device exist changed to [" + val + "]");
    }
    catch (ex) {
        debugE(ex.message);
    }
    try {
        onIsAudioDeviceExistChagedSndInterface(val);
    }
    catch (ex) {
        debugE(ex.message);
    }
}

function onARCStateChanged(val) {
    try {
        AudioDevice.ARC_STATE = val;
        if (0 == val) vol.reCheckVolume();
        DBG_INFO("arc state changed to [" + val + "]");
    }
    catch (ex) {
        debugE(ex.message);
    }
    try {
        onHdmiDevicesArcStateChagedSndInterface(val);
    }
    catch (ex) {
        debugE(ex.message);
    }
    try {
//        if (!!hiWebOsFrame.settingssyscec) {
//            if (PageDataSettingSysCecDev.operateData.curdevlist.type == 5) {
//                if (val == 1) {
//                    PageDataSettingSysCecDev.operateData.curdevlist.arc = true;
//
//                }
//                else {
//                    PageDataSettingSysCecDev.operateData.curdevlist.arc = false;
//
//                }
//                hiWebOsFrame.settingssyscecdev.rewriteDataOnly();
//            }
//
//        }
//        else {
//            DBG_ALWAYS(" the page is not exist ")
//        }
        if (!!hiWebOsFrame.settingssyscec) {
            if (val == 1)
            {
                PageDateSettingSysCec.operateData.setting_sys_cec_control4.switchType=true;

            }
            else{
                PageDateSettingSysCec.operateData.setting_sys_cec_control4.switchType=false;

            }
            hiWebOsFrame.settingssyscec.rewriteDataOnly();
//            for (var i = 0; i < PageDateSettingSysCec.operateData.curdevlist.length; i++) {
//                if (PageDateSettingSysCec.operateData.curdevlist[i].type == 5) {
//                    if (val == 1) {
//                        PageDateSettingSysCec.operateData.curdevlist[i].arc = true;
//
//                    }
//                    else {
//                        PageDateSettingSysCec.operateData.curdevlist[i].arc = false;
//
//                    }
//                }
//            }
        }
    }
    catch (e) {
        debugE(e.message);
    }
}

function onInputMhlAvailableChanged(val) {
    DBG_ALWAYS("mhl changed[" + val + "]");
    MHLDevice.AVAILABLE = parseInt(val);
}

function isCECByPass() {
    //DBG_INFO("CEC_CTRL["+AudioDevice.CEC_CTRL+"]," +
    //" EXIST["+AudioDevice.EXIST+"]," +
    //" ARC_STATE["+AudioDevice.ARC_STATE+"]");

    return (1 == AudioDevice.CEC_CTRL
        && 1 == AudioDevice.EXIST
        && 1 == AudioDevice.ARC_STATE);
}

function restoreMarqueeByLiId(crntid, nxtid, crntIndex, nxtIndex, len) {
    try {
        var crntSelector, nxtSelector;
        if (!!crntid) {
            crntSelector = $("#" + crntid + " span").eq(crntIndex);
            //remove
            crntSelector.html(crntSelector.text());
        }

        if (!!nxtid) {
            nxtSelector = $("#" + nxtid + " span").eq(nxtIndex);
            //add
            var txt = nxtSelector.text();
            if (!!txt && len <= txt.length) {
                nxtSelector.html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + txt + '</marquee>');
            }
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/******************************************************
 * 初始化platform信息
 ******************************************************/
var currentPlatform = "";
function initPlatformParam() {
    try {
        currentPlatform = model.system.getCurPlatform();
        DBG_ERROR("currentPlatform is "+ currentPlatform);
    }
    catch (ex) {
        DBG_ERROR("Get platform error! ex_message is "+ex.message);

    }

}
///******************************************************
// * 初始化运营商信息
// ******************************************************/
//function initDVBOperatorInfo() {
//    if (hiWebOsFrame.getCurrentArea() == "EU") {
//        settingChSetDVBCOperatorInfo.settingChSetDVBCOperateNum = 0;
//        readDVBCOperatorList(settingChSetOnDVBCOperatorListEvent); //获取运营商信息
//    }
//}
//var settingChSetDVBCOperatorInfo = {
//    "settingChSetDVBCOperateNum": 0,
//    "settingChSetDVBCOperateList": [
//        //    {
////        "networkId":"",
//        //       "networkName":"",
////        "selectedFlag":"",
////        "recvType":"",
////        "satelliteId":""
////    }
//    ]
//}
//
//var chSetDVBCOperatorListIterator = null; //DVBC列表迭代器
///*******************************************************************
// name:readDVBCOperatorList
// description:注册读取运营上列表的迭代器，开机或者修改国家时调用
// input:
// output:
// return
// *******************************************************************/
//var readDVBCOperatorList = function (onOperatorListIteratorEvent) {
//    debugPrint('readDVBCOperatorList:prepare to read read DVBC OperatorList', DebugLevel.ALWAYS);
//    chSetDVBCOperatorListIterator = model.channelSearch.creatNetworksIterator(
//        true,
//        [
//            {
//                field: Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_TYPE,
//                condition: Model.FIELD_COND_EQUAL,
//                value: 0
//            }
//        ],
//        [
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_ID,
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_NAME,
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_SELECTED,
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_SATELLITE_ID
//        ],
//        [
//            {field: Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_ID, direction: 1}
//        ],
//        onOperatorListIteratorEvent);
//
//    chSetDVBCOperatorListIterator.readNextRows(200);
//}
//
///*******************************************************************
// name:settingChSetOnDVBCOperatorListEvent
// description:接收运营商列表消息
// input:
// output:
// return
// *******************************************************************/
//function settingChSetOnDVBCOperatorListEvent(event) {
//    try {
//        debugPrint("settingChSetOnDVBCOperatorListEvent receive event.type=" + event.type, DebugLevel.ALWAYS);
//        var settingChSetDVBCOperateList = settingChSetDVBCOperatorInfo.settingChSetDVBCOperateList;
//        if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
//            var lastFoundChannelCount = settingChSetDVBCOperatorInfo.settingChSetDVBCOperateNum;
//            settingChSetDVBCOperatorInfo.settingChSetDVBCOperateNum = event.totalCount;
//            debugPrint("onFoundChannelListIteratorEvent:settingChSetDVBCOperateNum=" + event.totalCount, DebugLevel.ALWAYS);
//            if (settingChSetDVBCOperatorInfo.settingChSetDVBCOperateNum == 0) {
//                chSetDVBCOperatorListIterator.disconnect();
//            }
//        }
//        else if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
//            debugPrint("settingChSetOnDVBCOperatorListEvent:event.rows.length=" + event.rows.length, DebugLevel.ALWAYS);
//            if (event.rows.length > 0) {
//                settingChSetDVBCOperateList = [];
//                for (var i = 0; i < event.rows.length; i++) {
//                    settingChSetDVBCOperateList[i] = {};
//                    settingChSetDVBCOperateList[i].networkId = event.rows[i][0];
//                    settingChSetDVBCOperateList[i].networkName = event.rows[i][1];
//                    settingChSetDVBCOperateList[i].selectedFlag = event.rows[i][2];
//                    settingChSetDVBCOperateList[i].recvType = event.rows[i][3];
//                    settingChSetDVBCOperateList[i].satelliteId = event.rows[i][4];
//                    debugPrint("settingChSetOnDVBCOperatorListEvent:" + event.rows[i][0] + "," + event.rows[i][1] + "," + event.rows[i][2] + "," + event.rows[i][3]);
//                }
//                settingChSetDVBCOperatorInfo.settingChSetDVBCOperateNum = event.rows.length;
//                chSetDVBCOperatorListIterator.disconnect();
//            }
//            else {
//                settingChSetDVBCOperatorInfo.settingChSetDVBCOperateNum = 0;
//            }
//
//        }
//    }
//    catch (ex) {
//        debugE("settingChSetOnDVBCOperatorListEvent:" + ex.message);
//    }
//}
//function getSettingChSetDVBCOperatorInfo() {
//    if (tv == false) {
//        var settingTestDVBCOperatorInfo = {
//            "settingChSetDVBCOperateNum": 2,
//            "settingChSetDVBCOperateList": [
//                {
//                    "networkId": -1,
//                    "networkName": "Others",
//                    "selectedFlag": 1,
//                    "recvType": 0,
//                    "satelliteId": -1
//                },
//                {
//                    "networkId": 5,
//                    "networkName": "Astra LCN",
//                    "selectedFlag": 0,
//                    "recvType": 0,
//                    "satelliteId": -1
//                }
//            ]
//        }
//        return settingTestDVBCOperatorInfo;
//    }
//    else {
//        return settingChSetDVBCOperatorInfo;
//    }
//}
//
//var settingChSetDVBSOperatorInfo = {
//    "settingChSetDVBSOperateNum": 0,
//    "settingChSetDVBSOperateList": [
//        //    {
////        "networkId":"",
//        //       "networkName":"",
////        "selectedFlag":"",
////        "recvType":"",
////        "satelliteId":""
////    }
//    ]
//}
//
//var chSetDVBSOperatorListIterator = null; //DVBS列表迭代器
///*******************************************************************
// name:readDVBSOperatorList
// description:注册读取运营上列表的迭代器，开机或者修改国家时调用
// input:
// output:
// return
// *******************************************************************/
//var readDVBSOperatorList = function (onOperatorListIteratorEvent) {
//    debugPrint('readDVBSOperatorList:prepare to read read DVBS OperatorList', DebugLevel.ALWAYS);
//    chSetDVBSOperatorListIterator = model.channelSearch.creatNetworksIterator(
//        true,
//        [
//            {
//                field: Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_TYPE,
//                condition: Model.FIELD_COND_EQUAL,
//                value: 0
//            }
//        ],
//        [
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_ID,
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_NAME,
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_SELECTED,
//            Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_SATELLITE_ID
//        ],
//        [
//            {field: Channelsearch_dvbModelDefines.ENUM_DVB_CHANNEL_SEARCH_NETWORK_ID, direction: 1}
//        ],
//        onOperatorListIteratorEvent);
//
//    chSetDVBSOperatorListIterator.readNextRows(200);
//}
//
///*******************************************************************
// name:settingChSetOnDVBSOperatorListEvent
// description:接收运营商列表消息
// input:
// output:
// return
// *******************************************************************/
//function settingChSetOnDVBSOperatorListEvent(event) {
//    try {
//        debugPrint("settingChSetOnDVBSOperatorListEvent receive event.type=" + event.type, DebugLevel.ALWAYS);
//        var settingChSetDVBSOperateList = settingChSetDVBSOperatorInfo.settingChSetDVBSOperateList;
//        if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
//            var lastFoundChannelCount = settingChSetDVBSOperatorInfo.settingChSetDVBSOperateNum;
//            settingChSetDVBSOperatorInfo.settingChSetDVBSOperateNum = event.totalCount;
//            debugPrint("onFoundChannelListIteratorEvent:settingChSetDVBSOperateNum=" + event.totalCount, DebugLevel.ALWAYS);
//            if (settingChSetDVBSOperatorInfo.settingChSetDVBSOperateNum == 0) {
//                chSetDVBSOperatorListIterator.disconnect();
//            }
//        }
//        else if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
//            debugPrint("settingChSetOnDVBSOperatorListEvent:event.rows.length=" + event.rows.length, DebugLevel.ALWAYS);
//            if (event.rows.length > 0) {
//                settingChSetDVBSOperateList = [];
//                for (var i = 0; i < event.rows.length; i++) {
//                    settingChSetDVBSOperateList[i] = {};
//                    settingChSetDVBSOperateList[i].networkId = event.rows[i][0];
//                    settingChSetDVBSOperateList[i].networkName = event.rows[i][1];
//                    settingChSetDVBSOperateList[i].selectedFlag = event.rows[i][2];
//                    settingChSetDVBSOperateList[i].recvType = event.rows[i][3];
//                    settingChSetDVBSOperateList[i].satelliteId = event.rows[i][4];
//                    debugPrint("settingChSetOnDVBSOperatorListEvent:" + event.rows[i][0] + "," + event.rows[i][1] + "," + event.rows[i][2] + "," + event.rows[i][3]);
//                }
//                settingChSetDVBSOperatorInfo.settingChSetDVBSOperateNum = event.rows.length;
//                chSetDVBSOperatorListIterator.disconnect();
//            }
//            else {
//                settingChSetDVBSOperatorInfo.settingChSetDVBSOperateNum = 0;
//            }
//
//        }
//    }
//    catch (ex) {
//        debugE("settingChSetOnDVBSOperatorListEvent:" + ex.message);
//    }
//}
//function getSettingChSetDVBSOperatorInfo() {
//    if (tv == false) {
//        var settingTestDVBSOperatorInfo = {
//            "settingChSetDVBSOperateNum": 2,
//            "settingChSetDVBSOperateList": [
//                {
//                    "networkId": -1,
//                    "networkName": "Others",
//                    "selectedFlag": 1,
//                    "recvType": 0,
//                    "satelliteId": -1
//                },
//                {
//                    "networkId": 5,
//                    "networkName": "Astra LCN",
//                    "selectedFlag": 0,
//                    "recvType": 0,
//                    "satelliteId": 1
//                }
//            ]
//        }
//        return settingTestDVBSOperatorInfo;
//    }
//    else {
//        return settingChSetDVBSOperatorInfo;
//    }
//}
function generateCaE(caeData) {

    var CaE = [], keys = Object.keys(caeData);
    keys.forEach(function (v) {
        if (!Array.isArray(caeData[v])) {
            DBG_ERROR(caeData[v] + "is not an array");
        }
        else {
            for (var i = 0; i < caeData[v].length; i++) {
                CaE.push({
                    id: caeData[v][i],
                    CaEType: v
                });

                var len = CaE.length - 1;
                if ("NavigationBar" == v || "Ul" == v) {
                    var dataItem = [];
                    for (var x in caeData[v][i].ori) {
                        dataItem = dataItem.concat(caeData[v][i].ori[x]);
                    }
                    CaE[len].id = caeData[v][i].id;
                    CaE[len].oriCaE = generateCaE(caeData[v][i].ori);
                    CaE[len][v + "Config"] = {};
                    CaE[len][v + "Config"][v + "DataItem"] = dataItem;
                    CaE[len][v + "Config"]["SelectedIndex"] = 0;
                }
            }

        }
    });

    return CaE;
}

function setAppInfoForSettingRecentUse(url,cmdType) {

	var information = null, current = null, appInfo = null;

	information = readFileFromNative("launcher/preset.txt", 1);
	current = readFileFromNative("hisenseUI/recentapps.txt", 1);
	appInfo = readFileFromNative("launcher/Appinfo.json", 1);

	if(information == null) {
        DBG_INFO('Launcher is not ready! Return form setAppInfoForSettingRecentUse!');
		return;
	}
    if(!!cmdType){
        DBG_INFO('Launcher is not ready! Return form setAppInfoForSettingRecentUse!'+cmdType);
        if(cmdType == CmdURLType.YOUTUBE){
            url = "youtube";
        }
    }

	if(current == null) {
		current = {
			AppInfo:[]
		};
	}

	var currentObj = $.extend(true,{},current);
	var maxLength = 20, flag = 0, tmp = null;

	if(current.AppInfo.length != 0) {
		$.each(information.AppInfo, function(k,v) {
			if(v.URL == url) {
				$.each(current.AppInfo, function(kk,vv) {
					if(vv.URL == url) {
						tmp = vv;
						currentObj.AppInfo.splice(kk,1);
						currentObj.AppInfo.unshift(tmp);
						return false;
					}
					else if(kk == current.AppInfo.length - 1) {
						if(current.AppInfo.length < maxLength) {
							currentObj.AppInfo.unshift(v);
						}
						else {
							currentObj.AppInfo.pop();
							currentObj.AppInfo.unshift(v);
						}
					}
				});
				flag = 1;
				return false;
			}
		});
		if(!flag && appInfo != null) {
			$.each(appInfo.AppInfo, function(k,v) {
				if(v.URL == url) {
					$.each(current.AppInfo, function(kk,vv) {
						if(vv.URL == url) {
							tmp = vv;
							currentObj.AppInfo.splice(kk,1);
							currentObj.AppInfo.unshift(tmp);
							return false;
						}
						else if(kk == current.AppInfo.length - 1) {
							if(current.AppInfo.length < maxLength) {
								v.UrlType = 36;
								v.IconURL = v.Image;
								currentObj.AppInfo.unshift(v);
							}
							else {
								currentObj.AppInfo.pop();
								v.UrlType = 36;
								v.IconURL = v.Image;
								currentObj.AppInfo.unshift(v);
							}
						}
					});
					return false;
				}
			})
		}
	}
	else {
		$.each(information.AppInfo,function(k,v) {
			if(v.URL == url) {
				currentObj.AppInfo.unshift(v);
				return false;
			}
		})
	}

	writeFileToNative('hisenseUI/recentapps.txt', objToString(currentObj), 1);

}

function onTvSwitchTriggerCauseChanged(value) {
    DBG_ALWAYS("notify standby value[" + value + "]");
    if (value == -1 || value == -2 || value == -3) {
        if (1 == model.hotel.getHotelMode() && 0 == model.hotel.getAutoSleep()) {
            DBG_ALWAYS("hotel model sleep off.");
            if (value == -1) {
                model.timerfunc.setHotelmodeSleepTimer(0);
                return;
            }
            else if (value == -2) {
                model.timerfunc.setStandbyTime(-1);
                return;
            }

        }
        if(value ==-3&&model.channelSearch.getRunning() == 1)
        {
            debugPrint(" autoscan , do not power off")
            return;
        }
        var crntPage = hiWebOsFrame.getCurrentPage();
        if (factoryMode != FACTORY_MODE_ENUM.MODE_NORMAL || null != crntPage && (crntPage.module == "epos" || (crntPage.id == "app_lau_browser" && CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType()))) {
            // DBG_ALWAYS("epos do not open auto standby.");
            if (value == -1) {
                model.timerfunc.setHotelmodeSleepTimer(0);
            }
            else if (value == -2) {
                model.timerfunc.setStandbyTime(-1);
            }
            return;
        }
        hiWebOsFrame.createPage('livetv_auto_standby', null, crntPage, null, function (a) {
            hiWebOsFrame.livetv_auto_standby = a;
            a.operateData.powerOffReason = value;
            if (checkIsAppOn()) {
                if (isCurrentAppHimedia()) {
                    if (16 != GlobalFlagShareInBrowser) {
                        model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_PAUSE_TO_SETTING);
                    }
                }
                if (crntPage.module == "setting" || crntPage.module == "settingfirst") {
                    a.operateData.originPage = hiWebOsFrame.settingsFirst.origin;
                    hiWebOsFrame.destroyModule("setting");
                    hiWebOsFrame.settingsFirst.close();
                }
                else {
                    a.operateData.originPage = crntPage;
                }

                hiWebOsFrame.registerKeyCodesNormal();

            }
            else {
                a.operateData.originPage = crntPage;
            }
            a.open();
            a.hiFocus();
        });
    }
}

var currentOperateTime = 0;
var currentOperateName = "";
var currentContentTime = 0;
var currentContentName = "";
var currentTagType = 0;
var currentLauncherTime = 0;
var currentNetflixHotKeyTime = 0;
var batteryFlag = 0;

function logReport(category, param, start) {
//	debugE("return!!!!!");
//	return;

	var local_var = g_launcherBrand;

    if(local_var == "SA_OEM"){
	    switch (category) {
		    case 'GTLauncherCategoryBrowser':
		    case 'GTAllAppClick':
			    return;
		    default :
			    break;
	    }
    }

	var hasProp = false;
	if (typeof param === "object") {
		for (var prop in param){
			if(!param[prop] && param[prop] !== 0) {
				debugE('Found undefined in param object, just return!');
				return;
			}
			hasProp = true;
		}
		if (!hasProp) {
			debugE("Log report's param is empty object, just return!");
			return;
		}
	}
	else if (!tv || !param) {
		debugE("The log report param is null, just return!")
		return;
	}

	var curTime = "", curCountry = "", curZone = "", curBrand = "";
	try {
		curTime = model.timerfunc.getCurTime();
		curCountry = model.basicSetting.getTvsetLocation();
		curZone = model.timerfunc.getNewTimeZone() / 3600;
	}
	catch (e) {
		debugPrint(e.message);
	}

    var testStr = "", deviceID = "", remoteType = "", platform = "", DeviceMsg = "";
    if ('EM' == hiWebOsFrame.getCurrentArea()) {
            //deviceID = "86100300900000b00000070c";
            remoteType = "EN2B27";
            platform = "MT5657";

    }
    else if ('EU' == hiWebOsFrame.getCurrentArea()) {
        if("5655_EU_MARKET" == currentPlatform_config) {
            //deviceID = "861003009000008000000711";
            remoteType = "EN2X27";
            platform = "MT5655";
        }
        else {
            //deviceID = "86100300900000a00000070c";
            remoteType = "EN2X27";
            platform = "MT5657";
        }
    }
    else if ('COL' == hiWebOsFrame.getCurrentArea()) {
        //deviceID = "86100300900000a000000711";
        remoteType = "EN2D27";
        platform = "MT5655";
    }
    else {
	    if("APP_5890_SA" == currentPlatform_config) {
		    //deviceID = "86100300900000400000070c";
		    remoteType = "EN2H27";
		    platform = "MT5657";
	    }
	    else {
		    //deviceID = "86100300900000b000000711";
		    remoteType = "EN2H27";
		    platform = "MT5655";
	    }
    }

    try {

        deviceID=tv?model.network.getSystem_featureCode():"";
        DBG_INFO('get deviceID is:'+deviceID);

        testStr = Hisense.File.read("am_tv_mac_address", 0);
	    DeviceMsg = Hisense.File.read("am_tv_model_name", 0);
	    curBrand = Hisense.File.read("am_tv_brand", 0);
        debugPrint("am_tv_mac_address :" + testStr);
        debugPrint("length: " + testStr.length);
    }
    catch (e) {
        debugPrint(e.message);
    }
    if (!!testStr) {
        for (var i = 6; i < testStr.length; ++i) {
            if (testStr[i] != ':') {
                deviceID += testStr[i];
            }
        }
    }
    debugRM("deviceID :" + deviceID);

    switch (category) {
        case 'GTAPPRun':
            if (start) {
                if (param != "") {
                    if (typeof (param) == "object") {
                        Hisense.RunLog.writeTvRunLog(122, "1.2|122|" + deviceID + "|" + curTime + "|" + param.categoryName + "|" + param.recommandId + "|" + param.contentName + "|" + param.contentType + "|" + curZone + "|" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                        Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + curTime + "|0|" + param.contentName + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                        currentOperateTime = curTime;
                        currentOperateName = param.contentName;
                        writeFileToNative("logReportAppRun", curTime + "|" + param.contentName + "|1", 0);
                    }
                    else {
	                    if(!!currentNetflixHotKeyTime) {
		                    writeFileToNative("logReportAppRun", curTime + "|" + param + "|0", 0);
		                    currentOperateTime = curTime;
		                    currentOperateName = param;
		                    return;
	                    }
                        Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + curTime + "|0|" + param + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);

                        writeFileToNative("logReportAppRun", curTime + "|" + param + "|1", 0);
                        currentOperateTime = curTime;
                        currentOperateName = param;

                    }
                }
            }
            else {
	            if(!!currentNetflixHotKeyTime) {
		            Hisense.RunLog.writeTvRunLog(141, "1.1|141|" + deviceID + "|" + currentNetflixHotKeyTime + "|" + currentOperateName + "|0|" + curZone + "|" + remoteType + "|" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
		            Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + currentOperateTime + "|0|" + currentOperateName + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
		            Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + currentOperateTime + "|" + curTime + "|" + currentOperateName + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
		            deleteNativeFile("logReportAppRun", 0);
		            currentNetflixHotKeyTime = 0;
		            return;
	            }
                Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + currentOperateTime + "|" + curTime + "|" + currentOperateName + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                deleteNativeFile("logReportAppRun", 0);
            }
            break;
        case 'GTRemoteControl':
            Hisense.RunLog.writeTvRunLog(120, "1.2|120|" + deviceID + "|" + curTime + "|" + param + "|" + curCountry + "|" + curZone + "|" + remoteType + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
            break;
        case 'HBBTVRun':
            if(param){
                if(typeof (param) == "object"){
                    Hisense.RunLog.writeTvRunLog(122, "1.2|122|" + deviceID + "|" + curTime + "|" + param.categoryName + "|" + param.recommandId + "|" + param.contentName + "|" + param.contentType + "|" + curZone + "|" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                    Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + curTime + "|0|" + param.contentName + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                }else{
                    Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + curTime + "|0|" + param + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                }
            }
            break;
	    case 'GTRemoteControlNetFlix':
		    if(!!arguments[2]) {
			    currentNetflixHotKeyTime = curTime;
			    return;
		    }
            Hisense.RunLog.writeTvRunLog(141, "1.1|141|" + deviceID + "|" + curTime + "|" + param + "|1|" + curZone + "|" + remoteType + "|" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
            break;
        case 'GTLauncherCategoryBrowser':
            if (start) {
                if( local_var == "Hisense") {
                    currentTagType = launcherNBar.getCurPageTagType();
                }
                else {
                    currentTagType = getVIDAALiteLauncherCurrentPageTagType();
                }
                Hisense.RunLog.writeTvRunLog(123, "1.2|123|" + deviceID + "|" + curTime + "||" + currentTagType + "|" + curCountry + "|" + curZone + "|0|" + param + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                currentContentTime = curTime;
                currentContentName = param;
            }
            else {
                Hisense.RunLog.writeTvRunLog(123, "1.2|123|" + deviceID + "|" + currentContentTime + "||" + currentTagType + "|" + curCountry + "|" + curZone + "|" + curTime + "|" + currentContentName + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
            }

            break;
        case 'GTAllAppClick':
            Hisense.RunLog.writeTvRunLog(142, "1.1|142|" + deviceID + "|" + curTime + "|" + param + "|" + curZone + "|" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
            break;
        case 'launcherRun':
            if (start) {
                Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + curTime + "|0|" + param + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
                currentLauncherTime = curTime;
            }
            else {
                Hisense.RunLog.writeTvRunLog(101, "1.2|101|" + deviceID + "|" + currentLauncherTime + "|" + curTime + "|" + param + "|" + curZone + "||" + curCountry + "|" + platform + "|" + curBrand + "|" + DeviceMsg);
            }
            break;
        default :
            break;
    }

}

function objectFindByKey(array, key, value) {
    if (!Array.isArray(array)) {
        //DBG_ERROR(objToString(array) + "is not an array.");
        return null;
    }
    if (Array.isArray(key)) {
        for (var i = 0; i < array.length; i++) {
            var founded = true;
            for (var k = 0; k < key.length; k++) {
                if (array[i][key[k]] != value[k]) {
                    founded = false;
                    break;
                }
            }
            if (founded) {
                return array[i];
            }
        }
    }
    else {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                return array[i];
            }
        }
    }
    return null;
}

/*
 * 切台时退出录制时移的提示对话框
 * @param:
 *   originPage-上级页面；
 *   content-提示内容；
 *   OKCommand-点击ok按钮响应函数;
 *   cancelCommand-点击Cancel按钮响应函数
 * */
function PVROrTShiftDialog(originPage, content, okCommand, cancelCommand) {

    if (null == originPage) return;

    var pvrOrTShiftDialogBackToPage = hiWebOsFrame[LiveTVModule.MAIN];

    pvrOrTShiftDialogBackToPage.operateData.dialogOptions = {
        titleName: "",
        contentName: getCurrentContentLanguage(content),
        okName: getCurrentContentLanguage('Yes'),
        cancelName: getCurrentContentLanguage('Cancel'),
        okCommand: okCommand,
        cancelCommand: cancelCommand
    };
    try {
        if (hiWebOsFrame.pvrPage != null) {
            hiWebOsFrame.pvrPage.close();
        }
        if (hiWebOsFrame.tshiftProgressPage != null) {
            hiWebOsFrame.tshiftProgressPage.close();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    closePagesOrModuleByPage(originPage);
    createModulePage('dialog_common', pvrOrTShiftDialogBackToPage);
}
/*
 * 切launcher时退出pvr提示框的okCommand
 * */

function okCommandMenu() {
    try {
        debugPrint("setting stop record ");
        if (!!hiWebOsFrame["dialog_common"]) {
            hiWebOsFrame["dialog_common"].destroy();
        }
        hiWebOsFrame.startLoading(5, "stoppvr");
        openLiveTVModule([Msg.INFO, 0]);
        if (isMainArchiveRecording()) {
            setAfterStopPvrWantDo(menuKeyStopPvrOrTShiftCallBack.bind(this, 0));
            setTimeout(function () {
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
            }, 100);

        }
        if (isTimeShiftStatus()) {
            setAfterStopTShiftWantDo(menuKeyStopPvrOrTShiftCallBack.bind(this, 1));
            setTimeout(function () {
                model.timeshift.Stop();
            }, 100);

        }

    }
    catch (ex) {
        debugE("okCommandMenu:" + ex.message);
    }
}

function menuKeyStopPvrOrTShiftCallBack(stopWho) {
    if (stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if (stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    if (settingInited) {
        openMenuPage();
    }
    else {
        settingInited = true;
        createSettingPage(openMenuPage);
    }
}

function okCommandKeyHomeSource(){
    debugPrint("stop record ");
    if (!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    openLiveTVModule([Msg.INFO, 0]);
    if (isMainArchiveRecording()) {
        setAfterStopPvrWantDo(homeSourceKeyStopPvrOrTShiftCallBack.bind(this, 0));
        setTimeout(function () {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);
    }
    if (isTimeShiftStatus()) {
        setAfterStopTShiftWantDo(homeSourceKeyStopPvrOrTShiftCallBack.bind(this, 1));
        setTimeout(function () {
            model.timeshift.Stop();
        }, 100);
    }
}

function homeSourceKeyStopPvrOrTShiftCallBack(stopWho) {
    if (stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if (stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    if (!canCurrentPageProcEvent()) {
        return;
    }
    oneKeyOpenVIDAALauncherInput();
}

function okCommandHome() {
    debugPrint("stop record ");
    if (!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    openLiveTVModule([Msg.INFO, 0]);
    if (isMainArchiveRecording()) {
        setAfterStopPvrWantDo(homeKeyStopPvrOrTShiftCallBack.bind(this, 0));
        setTimeout(function () {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);

    }
    if (isTimeShiftStatus()) {
        setAfterStopTShiftWantDo(homeKeyStopPvrOrTShiftCallBack.bind(this, 1));
        setTimeout(function () {
            model.timeshift.Stop();
        }, 100);

    }
}

function homeKeyStopPvrOrTShiftCallBack(stopWho) {
    if (stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if (stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    if(g_launcherBrand == "SA_OEM"){
        if (hiWebOsFrame.isPageExist("myLauncher")||hiWebOsFrame.isPageExist("OEMlauncherPage")) {
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
        }
        else {
            createSAOEMLauncher();
        }
    }else if(g_launcherBrand == "VIDAALite"){
        if (hiWebOsFrame.isPageExist("myLauncher")||hiWebOsFrame.isPageExist("VIDAALiteNavPage")) {
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
        }
        else {
            createVIDAALitelauncher();
        }
    }
    else{
        if (hiWebOsFrame.isPageExist("myLauncher")) {
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
        }
        else {
            createModulePage('myLauncher');
        }
    }
}

function okCommandLiveTV() {
    if (!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    openLiveTVModule([Msg.INFO, 0]);
    if (isMainArchiveRecording()) {
        setAfterStopPvrWantDo(liveTvKeyStopPvrOrTShiftCallBack.bind(this, 0));
        setTimeout(function () {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);

    }
    if (isTimeShiftStatus()) {
        setAfterStopTShiftWantDo(liveTvKeyStopPvrOrTShiftCallBack.bind(this, 1));
        setTimeout(function () {
            model.timeshift.Stop();
        }, 100);

    }
}

function liveTvKeyStopPvrOrTShiftCallBack(stopWho) {
    if (stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if (stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    var defaultSource = model.system.getSystemDefaultInput();
    changeSourceTo(defaultSource);
    openLiveTVModule([Msg.WAIT_SOURCE_CHANGE, 1]);
}
/*
 * 进第三方应用时退出pvr提示框的okCommand
 * */
function okCommandApp(keyCode) {
    debugPrint("stop record");
    if (keyCode == VK_YOUTUBE || keyCode == VK_AMAZON || keyCode == VK_NETFLIX) {
        if (!!hiWebOsFrame["dialog_common"]) {
            hiWebOsFrame["dialog_common"].destroy();
        }
        hiWebOsFrame.startLoading(5, "stoppvr");
        openLiveTVModule([Msg.INFO, 0]);
        if (isMainArchiveRecording()) {
            setAfterStopPvrWantDo(appKeyStopPvrOrTShiftCallBack.bind(this, 0, keyCode));
            setTimeout(function () {
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
            }, 100);

        }
        if (isTimeShiftStatus()) {
            setAfterStopTShiftWantDo(appKeyStopPvrOrTShiftCallBack.bind(this, 1, keyCode));
            setTimeout(function () {
                model.timeshift.Stop();
            }, 100);
        }
    }
}


function appKeyStopPvrOrTShiftCallBack(stopWho, keyCode) {
    if (stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if (stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    var app_c = getAppByKey(keyCode);
    if (hiWebOsFrame.getCurrentPageId() == app_c.pageId) {
        DBG_INFO("do not process himself: " + app_c.name);
    }
    else {
        var crntPage = hiWebOsFrame.getCurrentPage();
        if ("setting" == crntPage.module || "settingfirst" == crntPage.module) {
            var settingorigin = hiWebOsFrame.settingsFirst.origin;
            if (!!settingorigin && settingorigin.visible) {
                if (settingorigin.module == "launcher") {
                    closePagesOrModuleByPage(crntPage);
                    hiWebOsFrame.myLauncher.hiFocus();
                }
                else if (settingorigin.module == "allapps") {
                    closePagesOrModuleByPage(crntPage);
                    hiWebOsFrame["launcher_allapps"].open();
                    // hiWebOsFrame["launcher_allapps"].hiFocus();
                    launcherAApps.focusAllApp();
                }
            }

        }
    }
    asyncStartApp(app_c.pageId, app_c.name, true, false, false, true);
}
/*
 * 进AllApps时退出pvr提示框的okCommand
 * */
function okCommandAllApps() {
    debugPrint("stop record ");
    if (!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    openLiveTVModule([Msg.INFO, 0]);
    if (isMainArchiveRecording()) {
        setAfterStopPvrWantDo(allAppKeyStopPvrOrTShiftCallBack.bind(this, 0));
        setTimeout(function () {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);

    }
    if (isTimeShiftStatus()) {
        setAfterStopTShiftWantDo(allAppKeyStopPvrOrTShiftCallBack.bind(this, 1));
        setTimeout(function () {
            model.timeshift.Stop();
        }, 100);

    }

}

function allAppKeyStopPvrOrTShiftCallBack(stopWho) {
    if (stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if (stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    if (!canCurrentPageProcEvent()) {
        return;
    }

    if (hiWebOsFrame.getCurrentPageId() == "launcher_allapps") {
        launcherAApps.backToOri();
    }
    else {

        oneKeyOpenLauncherApp(CmdURLType.HIPAGE, 'launcher_allapps');

    }
}
/*
 * 退出pvr提示框的cancelCommand
 * */
function pvrTshiftCancelCommand() {
    debugPrint("@@@@@@@@@");
    hiWebOsFrame.endLoading();
    if (!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    openLiveTVModule([Msg.INFO, 0]);
}
function calculateProgress(start, end, crntTime, total) {

    if (end - start < 1) {
        DBG_ERROR("end[" + end + "], start[" + start + "]");
        return 0;
    }
    crntTime = !!crntTime ? crntTime : start;
    var wdth = total * Math.min((crntTime - start) / (end - start), 1);
    wdth = Math.max(wdth, 0);
    // DBG_ALWAYS("progress width[" + parseInt(wdth) + "]");
    return parseInt(wdth);

}
/*
 * 检测磁盘的剩余空间
 * 说明：
 *   如果磁盘剩余空间不足时，提示用户
 * pvr-2015-1-24
 * */
function PVRRecorderMediumFreespaceChaged(messageID) {
    DBG_ALWAYS("pvr record medium free space changed messageID=" + messageID);
    var MSGID_ENUM = {
        TEN_MINUTES: 1,
        TWO_MINUTES: 2
    };

    switch (parseInt(messageID)) {
        case MSGID_ENUM.TEN_MINUTES:
            DBG_INFO("MSGID_ENUM.TEN_MINUTES, This function has been cut, do nothing");
            //DBG_INFO("Close pvr and open dialog_pvr_file_manager");
            //// todo ghl; if pvraboutpage->pvraboutpage close, open pvr file manager
            //
            //
            //hiWebOsFrame.createPage('dialog_pvr_file_manager_dialog', null, null, null, function (dialog_pvr_file_manager_dialog) {
            //    hiWebOsFrame.dialog_pvr_file_manager_dialog = dialog_pvr_file_manager_dialog;
            //
            //    var curPage = hiWebOsFrame.getCurrentPage();
            //    closePagesOrModuleByPage(curPage);
            //    //exitPVR();  //该func里面会有closeLiveTVModule的操作
            //    closeLiveTVModule();
            //
            //    dialogPVRFileManagerDialog.setPageSign(dialogPVRFileManagerDialog.pageData.operateData.CONTENT_TEXT_ENUM.DEL_QUERY);
            //    dialog_pvr_file_manager_dialog.open();
            //    dialog_pvr_file_manager_dialog.rewriteDataOnly();
            //    dialog_pvr_file_manager_dialog.hiFocus();
            //});

            break;
        case MSGID_ENUM.TWO_MINUTES:
            DBG_INFO("MSGID_ENUM.TWO_MINUTES")
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
            setAfterStopPvrWantDo(noFreeSpaceCallBack);
            break;
        default :
            break;
    }
}

function noFreeSpaceCallBack()
{
    debugPrint("no free space call back is called!");
    g_AfterStopPvrWantDo = null;
    var origin = hiWebOsFrame.getCurrentPage();
    debugPrint("origin: " + hiWebOsFrame.getCurrentPageId());
    if(hiWebOsFrame.getCurrentPageId() == "pvrtshift_pvr_page")
    {
        if(hiWebOsFrame.pvrPage != null)
        {
            hiWebOsFrame.pvrPage.close();
        }
        openLiveTVModule([Msg.INFO, 0]);
    }
    isNoNeedStopRecord = true;
    hiWebOsFrame.createPage("pvrFinishDialog", null, origin, null, function(page){
        hiWebOsFrame.pvrfinishDialog = page;
        hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTip.Data = 'Insufficient external storage space';
        hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipName.Data = '';
        hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipImgPic.Data = hiWebOsFrame.pvrfinishDialog.operateData.imgList[0];
        hiWebOsFrame.pvrfinishDialog.rewriteDataOnly();
        hiWebOsFrame.pvrfinishDialog.open();
        debugPrint("pvrFinishDialog open!");
    });
}
/*
 * 预约录制检测pvr的保存路径
 * */
function checkSavingPathOfScheduleRecord() {
    //当前是pvr功能要检测USB
    currentSelected = "pvr";
    var usbStationUuid = model.pvr.getStationUuid();
    debugPrint("checkSavingPathOfScheduleRecord:" + usbStationUuid + "###" + isScheduleRecord);
    //若此时电视待机，设置一个默认分区来保存录制文件
    if(isStandbyScheduleRecord)
    {
        isStandbyScheduleRecord = false;
        var usbList = pvrOrTsGetUsbList();
        if(usbList == null)
        {
            DBG_INFO("usbList is null!");
            if(isScheduleRecord)
            {
                isScheduleRecord = false;
            }
            return;
        }
        else
        {
            var usb_0 = usbList[0].split(";");
            var tempUuid = usb_0[usb_0.length - 1];
            DBG_INFO("tempUuid=" + tempUuid);
            model.pvr.setStationUuid(tempUuid);
            sendRecordCommand();
        }
        return;
    }
    if ((!pvrOrTsIsUsbPathOk(usbStationUuid))) {
        debugPrint("usb path is not ok!");
        closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
        hiWebOsFrame.createPage("pvrHardDiskCheck", null, null, null, function (pvrHDCheckPage) {
            hiWebOsFrame.pvrHardDiskCheck = pvrHDCheckPage;
            hiWebOsFrame.pvrHardDiskCheck.open();
            hiWebOsFrame.pvrHardDiskCheck.operateData.searchHDTimer = setTimeout(function () {
                pvrPartitionsInit(1);
            }, 1000);
            hiWebOsFrame.pvrHardDiskCheck.hiFocus();
            debugPrint("open pvrHD check page!" + hiWebOsFrame.pvrHardDiskCheck.operateData.searchHDTimer);
        });
    }
    else {
        debugPrint("usb path is ok!" + isScheduleRecord);
        sendRecordCommand();
    }
}
function getUsbPathByUid(uid) {
    if (uid == null) {
        return null;
    }
    var usbList = pvrOrTsGetUsbList();
    if (usbList == null)//没有插入USB
    {
        return null;
    }
    var path = null;
    for (var i = 0, temp = 0; i < usbList.length; i++) {
        if (!!usbList[i]) {
            if (usbList[temp].split(";")[2] == uid) {
                debugPrint("Current path:" + usbList[temp].split(";")[0]);
                path = usbList[temp].split(";")[0];
                break;
            }
            debugPrint("Current path:" + usbList[temp].split(";")[0]);
            ++temp;
        }
    }

    return path;
}
/*
 * 判断USB是不是ok
 * 返回：
 *   true-USB存在 && USB路径正确(插入的USB与之前的匹配）
 * */
function pvrOrTsIsUsbPathOk(uid) {
    if (uid == null) {
        return false;
    }
    var usbList = pvrOrTsGetUsbList();
    if (usbList == null)//没有插入USB
    {
        return false;
    }
    var findUsbUuid = false;
    var usb_temp = [];
    for (var i = 0, temp = 0; i < usbList.length; i++) {
        if (!!usbList[i]) {
            usb_temp = usbList[temp].split(";");
            if (usb_temp[usb_temp.length-1] == uid) {
                debugPrint("Current Uuid:" + usb_temp[usb_temp.length-1]);
                findUsbUuid = true;
                break;
            }
            debugPrint("Current Uuid:" + usb_temp[usb_temp.length-1]);
            ++temp;
        }
    }

    return findUsbUuid;
}

function pvrPartitionsInit() {
    try {
        clearTimeout(hiWebOsFrame.pvrHardDiskCheck.searchHDTimer);
        var usbList = pvrOrTsGetUsbList();
        debugPrint("Now List is (are) :~" + usbList + "~");
        var tmp_parinfo = [];
        var tmpParPath = [];
        var tmpParName = [];
        var tmpParUuid = [];
        if (!!usbList) {
            debugPrint("usbLength :" + usbList.length);
            for (var i = 0; i < usbList.length; i++) {
                if (!!usbList[i]) {
                    tmp_parinfo = usbList[i].split(";");
                    tmpParPath[i] = tmp_parinfo[0];
                    tmpParName[i] = tmp_parinfo[1];
                    tmpParUuid[i] = tmp_parinfo[tmp_parinfo.length - 1];
                    debugPrint("Current mnt path :" + tmpParPath[i] + "Current par name:" + tmpParName[i] + "Current Uuid:" + tmpParUuid[i]);
                }
            }
            debugPrint("Current par's num :" + tmpParPath.length);
            pvrHardDiskCheckPageData.operateData.partitionNumber = tmpParPath.length;
            pvrVolumeList = [];
            for (var j = 0; j < tmpParPath.length; ++j) {
                var info = {};
                info.path = tmpParPath[j];
                if (tmpParName[j] != "") {
                    info.name = tmpParName[j];
                }
                else {
                    info.name = "External device " + (j + 1);
                }
                info.uuid = tmpParUuid[j];
                info.free = 0;
                pvrVolumeList.push(info);
            }
            hiWebOsFrame.pvrHardDiskCheck.close();
            if (hiWebOsFrame.blankPage) {
                closeLiveTVModule();
            }
            debugPrint("after close hard disk check page!");
            hiWebOsFrame.createPage("pvrHDList", null, null, null, function (page) {
                hiWebOsFrame.pvrHDList = page;
                hiWebOsFrame.pvrHDList.operateData.curPage = currentSelected;
                pvrHDListPageData.operateData.curstep = 0;
                debugPrint("pvrHDListPageData.operateData.curstep=" + pvrHDListPageData.operateData.curstep);
                hiWebOsFrame.pvrHDList.open();
                hiWebOsFrame.pvrHDList.hiFocus();
                debugPrint("open HD list page!");
            });
        }
        else {
            debugPrint("before close hard disk check page!");
            hiWebOsFrame.pvrHardDiskCheck.close();
            if (hiWebOsFrame.blankPage) {
                closeLiveTVModule();
            }
            debugPrint("after close hard disk check page!");
            hiWebOsFrame.createPage("pvrHDCheckRetryDialog", null, null, null, function (page) {
                hiWebOsFrame.pvrHDCheckRetryDialog = page;
                hiWebOsFrame.pvrHDCheckRetryDialog.open();
                hiWebOsFrame.pvrHDCheckRetryDialog.hiFocus();
                debugPrint("open HD check retry page!");
            });
        }
    }
    catch (ex) {
        debugPrint(ex.message);
    }
}

//获取硬盘列表
function pvrOrTsGetUsbList() {
    var testStr = "";
    try {
        testStr = Hisense.File.read("usbs", 0);
        debugPrint("usbs list: " + testStr);
    }
    catch (ex) {
        debugPrint("read usbs error:" + ex.message);
    }
    if (isNaN(testStr)) {
        if (testStr.split("\n").length > 0) {
            return uniqueUsbList(testStr.split("\n"));
        }
        else {
            debugPrint("NO USB DEVICE NOW!!!!");
            return null;
        }
    }
    else {
        debugPrint("Can't read the file:/tmp/usbs!!!!!!!!!!!!!!!!!", DebugLevel.ERROR);
        return null;
    }
}

function uniqueUsbList(arr) {
    var arrTmp = [];
    for (var i = 0; i < arr.length; i++) {
        debugPrint(arr[i] + "_____" + arrTmp.indexOf(arr[i]));
        if (arr[i] != ";") {
            if (arrTmp.indexOf(arr[i]) == -1) {
                arrTmp.push(arr[i]);
            }
        }
    }
    return arrTmp;
}

var pvrVolumeList = [];
/*
 * 启动录制画面
 * 说明：
 *   节目录制之前的准备工作，向别的UI提供接口
 * */
function startRecordPage() {
    debugPrint("do something to prepare for pvr!");
    try {
        if (isScheduleRecord == true) {
            DBG_INFO("schedule record to start pvr!");
        }
        else {
            DBG_INFO("instant record to start pvr!");
        }
        //开始进行录制
        startToPvr();
    }
    catch (ex) {
        debugPrint("start record page error:" + ex, DebugLevel.ERROR);
    }
}
/*
 * 开始进行节目录制
 * 说明：
 *  节目录制中
 * */
function startToPvr() {
    debugPrint("start pvr!");
    prgrmInfoOfPvrTshift = !!prgrmInfoOfPvrTshift ? prgrmInfoOfPvrTshift : {};
    debugPrint("startTime: " + UTCToLocalTime(parseInt(prgrmInfoOfPvrTshift.startTime), 1) + "endTime: " + UTCToLocalTime(parseInt(prgrmInfoOfPvrTshift.endTime), 1));

    //录制时监听硬盘是否一直可以使用
    //model.pvr.onParAvailableChaged = pvrRecorderMediaAvailableChaged;
    //监听磁盘空闲空间
    model.pvr.onFreeMemThresholdChaged = PVRRecorderMediumFreespaceChaged;
    //创建pvr页面
    hiWebOsFrame.createPage("pvrtshift_pvr_page", null, null, null, function (page) {
        hiWebOsFrame.pvrPage = page;
        try {
            //将pvr页面中的操作数据传给opeData变量
            var opeData = hiWebOsFrame.pvrPage.operateData;
            if (!!tv) {
                //获得开始标准时间
                if (opeData.beginUTCTime == null) {
                    opeData.beginUTCTime = parseInt(getDVBLongTime());
                    debugPrint("opeData.recordProgressBar.beginUTCTime" + opeData.beginUTCTime + UTCToLocalTime(parseInt(opeData.beginUTCTime), 1));
                }
                if (prgrmInfoOfPvrTshift !== null) {
                    try {
                        //当前节目名称
                        opeData.proName.Data = prgrmInfoOfPvrTshift.title;
                        //节目进度条的operateData(最小值：开始时间 最大值：结束时间 DefaultValue：当前播放时间)
                        opeData.programProgressBar.MinValue = parseInt(prgrmInfoOfPvrTshift.startTime);
                        opeData.programProgressBar.MaxValue = parseInt(prgrmInfoOfPvrTshift.endTime);
                        opeData.programProgressBar.DefaultValue = parseInt(getDVBLongTime());
                        //录制进度条的operateData(最小值：开始时间 最大值：结束时间 DefaultValue：当前播放时间)
                        opeData.recordProgressBar.MinValue = parseInt(opeData.beginUTCTime);
                        if (isScheduleRecord) {
                            DBG_INFO("schedule record to set recordProgressBar MaxValue");
                            DBG_INFO("endTimeOfScheduleRecord=" + endTimeOfScheduleRecord);
                            opeData.recordProgressBar.MaxValue = endTimeOfScheduleRecord;
                        }
                        else {
                            DBG_INFO("instant record to set recordProgressBar MaxValue");
                            opeData.recordProgressBar.MaxValue = parseInt(prgrmInfoOfPvrTshift.endTime);
                        }
                        opeData.recordProgressBar.DefaultValue = parseInt(getDVBLongTime());
                        debugPrint("recordProgressBar.DefaultValue: " + opeData.recordProgressBar.DefaultValue + "-" + UTCToLocalTime(opeData.recordProgressBar.DefaultValue, 1));
                    }
                    catch (ex) {
                        debugPrint("error: " + ex.message);
                    }
                    //录制进度条显示的录制开始时间和录制结束时间
                    try {
                        opeData.beginTime.Data = UTCToLocalTime(opeData.recordProgressBar.MinValue, 1);//longTimeToString(opeData.recordProgressBar.MinValue * 1000)
                        opeData.endTime.Data = UTCToLocalTime(opeData.recordProgressBar.MaxValue, 1);//longTimeToString(opeData.recordProgressBar.MaxValue * 1000)
                        debugPrint("beginTime: " + opeData.beginTime.Data + "endTime: " + opeData.endTime.Data);
                    }
                    catch (ex) {
                        debugPrint("begin_time and end_time error!" + ex, DebugLevel.ERROR);
                    }
                }
                else {
                    debugPrint("prgrmInfoOfPvrTshift is null");
                }
            }

            //更新页面数据
            hiWebOsFrame.pvrPage.rewriteDataOnly();

            var programPB = hiWebOsFrame.pvrPage.getCaE("programProgressBar");
            var recordPB = hiWebOsFrame.pvrPage.getCaE("recordProgressBar");

            var crntTime = parseInt(getDVBLongTime());
            if (!!hiWebOsFrame.pvrPage.operateData.progressTimer) {
                clearInterval(hiWebOsFrame.pvrPage.operateData.progressTimer);
            }
            hiWebOsFrame.pvrPage.operateData.progressTimer = setInterval(function () {
                startProgressBar(programPB.id, crntTime);
                startProgressBar(recordPB.id, crntTime);
                crntTime = parseInt(getDVBLongTime());
            }, 5 * 1000);

            try {
                if (!!hiWebOsFrame.ptDialog) {
                    hiWebOsFrame.ptDialog.close();
                }
            }
            catch (ex) {
                debugPrint("close ptDialog page error: " + ex.message);
            }

            hiWebOsFrame.pvrPage.open();
            hiWebOsFrame.pvrPage.hiFocus();

            //关闭上次的退出定时器
            if (!!pvrData.operateData.exittimeout) {
                clearTimeout(pvrData.operateData.exittimeout);
                pvrData.operateData.exittimeout = null;
            }
            //定时10秒，10秒后退出pvr
            pvrData.operateData.exittimeout = setTimeout('exitPVR()', 10 * 1000);
        }
        catch (ex) {
            debugPrint("create pvr page error!" + ex, DebugLevel.ERROR);
        }
    });
}
//录制和时移切换
var g_AfterStopTShiftWantDo = null;
function setAfterStopTShiftWantDo(callback) {
    debugPrint("setAfterStopTShiftWantDo is called!");
    g_AfterStopTShiftWantDo = callback;
}
function mainAfterStopTShiftProcess() {
    if (g_AfterStopTShiftWantDo != null) {
        g_AfterStopTShiftWantDo.call(null);
    }
}
var g_AfterStopPvrWantDo = null;
function setAfterStopPvrWantDo(callback) {
    debugPrint("setAfterStopPvrWantDo is called!");
    g_AfterStopPvrWantDo = callback;
}
function mainAfterStopPvrProcess() {
    debugPrint("mainAfterStopPvrProcess is called!");
    if (g_AfterStopPvrWantDo != null) {
        g_AfterStopPvrWantDo.call(null);
    }
}
/*
 * 响应按键启动录制或者时移
 * @param:
 *   crntChannel-当前频道
 *   keyCode-按键值
 * */
function startRecordOrTshift(crntChannel, keyCode) {
    try {
        //如果当前频道加密，并且没有解密，提示用户不能录制
        DBG_INFO("Encrypt[" + crntChannel.isEncrypt + "], CamIndex[" + model.tvservice.getMessageCamIndex() + "]");
        if (crntChannel.isEncrypt && (1 == model.tvservice.getMessageCamIndex())) {
            isNoNeedStopRecord = true;
            hiWebOsFrame.createPage("pvrFinishDialog", null, hiWebOsFrame.blankPage, null, function (page) {
                hiWebOsFrame.pvrfinishDialog = page;
                hiWebOsFrame.pvrfinishDialog.open();
                hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTip.Data = 'The current program is encrypted';
                hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipName.Data = '';
                hiWebOsFrame.pvrfinishDialog.operateData.recordDialogTipImgPic.Data = hiWebOsFrame.pvrfinishDialog.operateData.imgList[0];
                hiWebOsFrame.pvrfinishDialog.rewriteDataOnly();
                hiWebOsFrame.pvrfinishDialog.open();
            });
        } else {
            if (hiWebOsFrame[LiveTVModule.INFO_BAR].visible) {
                hiWebOsFrame[LiveTVModule.INFO_BAR].close();
            }

            //回调函数在infobar里面，所以只能绑定到livetvinfobar.getCurrentProgramInfo回调函数里面去了
            livetvinfobar.getCurrentProgramInfo(currentProgramCallback.bind(this, crntChannel, keyCode));
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
//切source成功后启动录制
function changeSourceToStartRecord() {
    DBG_INFO("changeSourceToStartRecord is calling!");
    try {
        if (isScheduleRecord) {
            var crntChannel = livetvmain.getCurrentChannelInfo();
            var prgrmInfo = beginRecordTipDialogPageData.operateData.pragramInfo;
            if (prgrmInfoOfPvrTshift.channelUid == crntChannel.uid) {
                DBG_INFO("current channel call changeChannelToStartRecord!");
                openLiveTVModule([Msg.INFO, 0]);
                g_resumeDtvForRecord = true;
            }
            else {
                DBG_INFO("not current channel call changeChannelToStartRecord!");
                openLiveTVModule([Msg.INFO, 0]);
            }
            model.tvservice.playChannel(prgrmInfo.playId, prgrmInfo.channelUid, prgrmInfo.listUid, 0);
        }
    }
    catch (ex) {
        DBG_ERROR(ex);
    }
}
/*
 * 切换频道成功之后，开始录制
 * @params:
 *   crntChannel-当前频道
 *   lastChannel-上一个频道 && !isCurrentChannelOfSchedule
 **/
function changeChannelToStartRecord(crntChannel, lastChanel) {
    //DBG_INFO("changeChannelToStartRecord is calling!");
    //时移和即时录制切换
    if(isTshiftToPvr && (!!prgrmInfoOfPvrTshift.channelUid) && (prgrmInfoOfPvrTshift.channelUid == crntChannel.uid))
    {
        DBG_INFO("isTshiftToPvr=" + isTshiftToPvr);
        isTshiftToPvr = false;
        checkSavingPathOfScheduleRecord();
        return;
    }
    if (isScheduleRecord && (prgrmInfoOfPvrTshift.channelUid == crntChannel.uid)) {
        if (lastChanel == null) {
            checkSavingPathOfScheduleRecord();
        }
        else {
            DBG_INFO("list uid=" + lastChanel.listUid + " crntChannel.listUid=" + lastChanel.listUid);
            if (lastChanel.listUid != crntChannel.listUid) {
                checkSavingPathOfScheduleRecord();
            }
            else {
                DBG_INFO("uid=" + lastChanel.uid + " crntChannel.Uid=" + crntChannel.uid);
                if (lastChanel.uid != crntChannel.uid) {
                    checkSavingPathOfScheduleRecord();
                }
                else {
                    DBG_INFO("g_resumeDtvForRecord=" + g_resumeDtvForRecord);
                    if (g_resumeDtvForRecord) {
                        g_resumeDtvForRecord = false;
                        checkSavingPathOfScheduleRecord();
                    }
                }
            }
        }
    }
}
function getListIdAndServiceId(par) {
    var ret = {
        listId: 0,
        serviceId: 0
    }

    ret.listId = (parseInt(par) >> 4) + "";
    ret.serviceId = (parseInt(par) & 0x0F) + "";
    return ret;
}

function setListIdAndServiceId(listId, serviceId) {
    var par_1 = parseInt(listId) << 4;
    var par_2 = parseInt(serviceId);
    return par_1 + par_2;
}


function getDaylightSeconds(bgutc, edutc) {
    var bgdate = new Date((bgutc + hisenseUITZSeconds) * milliBase),
        eddate = new Date((edutc + hisenseUITZSeconds) * milliBase);

    var seconds = {
        bg: bgdate.getUTCHours() * 3600 + bgdate.getUTCMinutes() * 60 + bgdate.getUTCSeconds(),
        ed: eddate.getUTCHours() * 3600 + eddate.getUTCMinutes() * 60 + eddate.getUTCSeconds()
    }

    var offset = 0;
    while (seconds.ed < seconds.bg) {
        DBG_INFO("over across day+" + (++offset));
        seconds.ed += 24 * 3600;
    }
    return seconds;
}
function daylightSecondsToLocal(sec) {
    var hh = Math.floor(sec / 3600);
    var mm = Math.floor((sec - hh * 3600) / 60);
    return ('0' + hh).slice(-2) + ":" + ('0' + mm).slice(-2);
}

function filterUnicaode(str) {
    var ret = str;
    try {
        ret = str.replace("\u001b", "");
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    return ret;
}

var launcherDefaultPath = 'launcher/data/';

function getLauncherAllAppsData_main() {
	DBG_INFO('get launcher data');
	var dd = null;

	var serviceUpdate = loadServiceUpdateData_main();
	var currentCountryCode = tv ? model.basicSetting.getTvsetLocation() : 'DEU';
	var cTimestamp = serviceUpdate.timeStamp;
	var serviceCountryCode = serviceUpdate.countryCode;

	DBG_INFO('launcher cTimestamp: ' + cTimestamp);
	DBG_INFO('service country code = ' + serviceCountryCode);
	DBG_INFO('current country code = ' + currentCountryCode);

	var mainJSON = null;
	var defaultData = (serviceCountryCode != currentCountryCode);
	if(defaultData) {
		//default data
		DBG_INFO('service country not equal current country, use default data', DebugLevel.WARNING);
		mainJSON = loadDefaultData_main(currentCountryCode);
	}
	else {
		mainJSON = readXML(launcherDefaultPath + "CategoryIndex.xml", 1);
		if(null == mainJSON) {
			DBG_INFO('get launcher data error, use default data', DebugLevel.ERROR);
			mainJSON = loadDefaultData_main(currentCountryCode);
			defaultData = true;
		}
	}

	if(null != mainJSON) {
		var footerJSON = readXML(launcherDefaultPath + mainJSON.root.CategoryListPath, defaultData ? 2 : 1);
		dd = parseLauncherData_main(footerJSON, defaultData);
	}

	return dd;
}

function loadServiceUpdateData_main() {

	var srvUpdate = {};
	var cTimestampJson = readXML(launcherDefaultPath + 'serviceUpdate.xml', 1);
	if(null != cTimestampJson) {
		srvUpdate.timeStamp = cTimestampJson.root.updateTimestamp;
		srvUpdate.countryCode = cTimestampJson.root.countryCode;
	}
	else {
		srvUpdate.timeStamp = 0;
		srvUpdate.countryCode = '';
	}
	return srvUpdate;
}

function loadDefaultData_main(countryCode) {
	var obj = null;
	var curAreaLocation = hiWebOsFrame.getCurrentArea();
	debugRM("hiWebOsFrame.getCurrentArea() :" + curAreaLocation);
	var curSubAreaLocation = hiWebOsFrame.getCurrentSubArea();
	debugRM("hiWebOsFrame.getCurrentSubArea() :" + curSubAreaLocation);
	switch(curAreaLocation) {
		case 'EM':
			switch(curSubAreaLocation) {
				case 'MiddleEast':
					switch(countryCode) {
						case "DXB":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_DXB.xml', 2);
							break;
						default :
							obj = readXML(launcherDefaultPath + 'CategoryIndex_EGY.xml', 2);
							break;
					}
					break;
				case 'Asian':
					switch(countryCode) {
						case "IND":
						case "IDN":
						case "LKA":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_IND.xml', 2);
							break;
						case "AUS":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_AUS.xml', 2);
							break;
						case "TWN":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_TWN.xml', 2);
							break;
						default :
							obj = readXML(launcherDefaultPath + 'CategoryIndex_ZAF.xml', 2);
							break;
					}
					break;
				case 'Africa':
					obj = readXML(launcherDefaultPath + 'CategoryIndex_ZAF.xml', 2);
					break;
				case 'CIS':
					switch(countryCode) {
						case "ISR":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_ISR.xml', 2);
							break;
						case "RUS":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_RUS.xml', 2);
							break;
						case "AZE":
						case "GEO":
						case "ARM":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_AZE.xml', 2);
							break;
						default :
							obj = readXML(launcherDefaultPath + 'CategoryIndex_UZB.xml', 2);
							break;
					}
					break;
				default :
					obj = readXML(launcherDefaultPath + 'CategoryIndex.xml', 2);
					break;
			}
			break;
		case 'SA':
			switch(hiWebOsFrame.getCurrentBrand()) {
				case "bgh":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_ARG_bgh.xml', 2);
					break;
				case "blu":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_ARG_blu.xml', 2);
					break;
				case "dev":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_PHL_dev.xml', 2);
					break;
				case "ezy":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_PHL_ezy.xml', 2);
					break;
				case "ame":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_PHL_ame.xml', 2);
					break;
				case "pan":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_URY_pan.xml', 2);
					break;
				case "dik":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_URY_dik.xml', 2);
					break;
				case "cyb":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_VEN_cyb.xml', 2);
					break;
				case "hyu":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_VEN_hyu.xml', 2);
					break;
				case "gfo":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_PAN_gfo.xml', 2);
					break;
				case "riv":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_ECU_riv.xml', 2);
					break;
				case "kal":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_COL_kal.xml', 2);
					break;
				case "Hisense":
				case "his":
					switch(countryCode) {
						case "ARG":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_ARG_his.xml', 2);
							break;
						case "BRA":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_BRA_his.xml', 2);
							break;
						case "PHL":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_PHL_his.xml', 2);
							break;
						case "PER":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_PER_his.xml', 2);
							break;
						case "COL":
							obj = readXML(launcherDefaultPath + 'CategoryIndex_COL_his.xml', 2);
							break;
						default :
							obj = readXML(launcherDefaultPath + 'CategoryIndex_ARG_his.xml', 2);
							break;
					}
					break;
				default :
					obj = readXML(launcherDefaultPath + 'CategoryIndex_ARG_his.xml', 2);
					break;
			}
			break;
		case 'EU':
			debugPrint("++++++>countryCode:" + countryCode);
			switch(countryCode) {
				case "FRA":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_Fra.xml', 2);
					break;
				case "DEU":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_DEU.xml', 2);
					break;
				case "GBR":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_GBR.xml', 2);
					break;
				case "ESP":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_ESP.xml', 2);
					break;
				case "ITA":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_ITA.xml', 2);
					break;
				case "AUT":
				case "CHE":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_AUT.xml', 2);
					break;
				case "SWE":
				case "DNK":
				case "FIN":
				case "NOR":
					obj = readXML(launcherDefaultPath + 'CategoryIndex_SWE.xml', 2);
					break;
				default :
					obj = readXML(launcherDefaultPath + 'CategoryIndex_EU.xml', 2);
					break;
			}
			break;
		default :
			obj = readXML(launcherDefaultPath + 'CategoryIndex.xml', 2);
			break;
	}
	return obj;
}

function parseLauncherData_main(footer, defaultData) {

	if(null == footer) {
		return null;
	}

	var containerData = [];

	var footerTmp = footer.root.CategoryInfos.CategoryInfo;
	if(footerTmp.length > 1)
		footerTmp.sort(function(a, b) {
			return (a.displayOrder - b.displayOrder);
		});
	else {
		footerTmp = [footerTmp];
	}

	for(var i = 0; i < footerTmp.length; i++) {
		var contentItem = {}, tagType = '';
		contentItem.tagType = footerTmp[i].tagType;
		tagType = "p" + footerTmp[i].tagType;

		if(tagType == "p57") {
			parseContentData_main(footerTmp[i].CategoryUrl, contentItem, defaultData);
            containerData.push(contentItem);
		}
	}

	return containerData;
}

function parseContentData_main(url, contentItem, defaultData) {

	contentItem.txts = [];
//	contentItem.imgs = [];
	contentItem.urls = [];
	contentItem.urlTypes = [];
	contentItem.storeTypes = [];
	if(!url) {
		return;
	}
	var contentJSON = null;
	if(defaultData) {
		contentJSON = readXML(launcherDefaultPath + url, 2);
	}
	else {
		contentJSON = readXML(launcherDefaultPath + url, 1);
	}

	if(null == contentJSON) {
		DBG_INFO('read category ' + url + 'error. ', DebugLevel.ERROR);
		return;
	}

	var objectTmp = contentJSON.root.ObjectInfos.ObjectInfo;
	if(!objectTmp.length) {
		objectTmp = [objectTmp];
	}
	for(var j = 0; j < objectTmp.length; j++) {
		contentItem.txts[j] = getNameByLanguage_main(objectTmp[j].ObjectNames.Item);
//		contentItem.imgs[j] = getIconByLanguage(objectTmp[j].ObjectPictures.Item, 'pictureUrl');
		contentItem.urlTypes[j] = parseInt(objectTmp[j].objectType);
		contentItem.urls[j] = objectTmp[j].objectUrl;
		if(objectTmp[j].Owner.ownerId == null) {
			contentItem.storeTypes[j] = 10000;
		}
		else {
			contentItem.storeTypes[j] = parseInt(objectTmp[j].Owner.ownerId);
		}
	}
}

function getNameByLanguage_main(names, defaultData) {

	var name = '';

	var langs = ["chi", "eng", "fre", "kor", "rus", "jpn", "spa", "ger", "zho", "ara", "per",
		"tha", "ita", "dut", "por", "cze", "hun", "gre", "bul", "rum","msa",
		"hbr","tur","ind","uzb","nor","swe","dan","fin","vie"
		,"mya","hin","eng","ukr","slk","pol","mal"];
	var languageId = langs.indexOf(hiWebOsFrame.getCurrentLanguage());

	if(languageId < 0) {
		return '';
	}
	else if(36 == languageId) {
		languageId = 31;
	}
	for(var j = 0; j < names.length; j++) {
		if(names[j].languageId == 1) {
			name = names[j].name;
			if(!!defaultData && defaultData == true && name != null) {
				name = getCurrentContentLanguage(name);
				break;
			}
		}
		if((names[j].name != null) && (names[j].languageId == languageId)) {
			return names[j].name;
		}
	}
	return name;
}
function startSpeech() {
    try {
        if (!canCurrentPageProcEvent())return false;
        if (hiWebOsFrame.getCurrentPageId() != "Voice_assistant_page") {
            hiWebOsFrame.createPage('Voice_assistant_page', null, null, null, function (Voice_assistant_page) {
                if (!checkAndCloseIfAppOn(Voice_assistant_page)) {
                    hiWebOsFrame.Voice_assistant_page = Voice_assistant_page;
                    closeDOthersModule("speech");
                    Voice_assistant_page.open();
                    Voice_assistant_page.hiFocus();
                    //hiWebOsFrame.lockAllKeys();
                    debugPrint("-------closeDOthersModule");
                }
                else {
                    Voice_assistant_page.origin = hiWebOsFrame.blankPage;
                    debugPrint("-------elseDOthersModule");
                }
            });
        }


    }
    catch (ex) {
        debugE(ex);
    }


}

function flipHTML(){
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
        hiWebOsFrame.setLanguage("ara");
    }
    else{
        hiWebOsFrame.setLanguage("eng");
    }
}

function readHTMLString(path) {
    var res = getxml("../../" + path);
    return res.responseText;
}


function setScrollbarStyle(cntnt, cntnr, scrl, hideHeight) {
    try {
        hideHeight = !!hideHeight ? hideHeight : 0;
        var contentHeight = $("#" + cntnt).height(),
            containerHeight = $("#" + cntnr).height() - hideHeight;
        $("#" + scrl).css("margin-top", "0px");
        $("#" + cntnt).css("margin-top", "0px");
        if(containerHeight >= contentHeight) {
            $("#" + scrl).css("height", "0px");
        }
        else {
            var h = Math.floor(containerHeight * containerHeight / contentHeight);
            $("#" + scrl).css("height", h + "px");
        }
    }
    catch(ex) {
        DBG_ERROR(ex.message);
    }
}

function moveScrollbar(dir, scrl, cntnt, cntnr, step, hideHeight) {
    try {
        hideHeight = !!hideHeight ? hideHeight : 0;
        var scrollTop = parseInt($("#" + scrl).css("margin-top").split("px")[0]),
            contentOver = Math.abs(parseInt($("#" + cntnt).css("margin-top").split("px")[0])),
            contentHeight = $("#" + cntnt).height(),
            containerHeight = $("#" + cntnr).height() - hideHeight,
            scrollHeight = $("#" + scrl).height();
        if((scrollTop == 0 && dir == SCROLLDIR.UP) || scrollHeight == 0 ||
            (scrollTop == containerHeight - scrollHeight && dir == SCROLLDIR.DOWN)) {
            return;
        }
        var scroll_step = 0,content_step=0;
        if(!!step || 0 === step){
            content_step = step;
            scroll_step = containerHeight * step / contentHeight;
        }
        else{
            scroll_step = Math.floor(0.1 * containerHeight);
            content_step = Math.floor(0.1 * contentHeight);
        }

        var scrollDistance = dir == SCROLLDIR.UP ? Math.max(0, scrollTop - scroll_step) :
            Math.min(scrollTop + scroll_step, containerHeight - scrollHeight);

        var contentDistance = dir == SCROLLDIR.UP ? Math.max(0, contentOver - content_step) :
            Math.min(contentOver + content_step, contentHeight - containerHeight);

        $("#" + scrl).css("margin-top", scrollDistance + "px");
        $("#" + cntnt).css("margin-top", -contentDistance + "px");
    }
    catch(ex) {
        DBG_ERROR(ex.message);
    }
}

function SCROLLDIR() {
}

SCROLLDIR.DOWN = 0;
SCROLLDIR.UP = 1;

function createSAOEMLauncher(){
    hiWebOsFrame.startLoading(20, "createModulePage");
    hiWebOsFrame.createPage("OEMlauncherPage", null, null, null, function(page) {
        hiWebOsFrame.myLauncher = page;
        hiWebOsFrame.myLauncher.origin = null;
        hiWebOsFrame.createPage("launcher_stabar", null, page, null, function(state_bar) {
            hiWebOsFrame["launcher_stabar"] = state_bar;
            hiWebOsFrame.endLoading();
            page.open();
            page.hiFocus();
            launcherSBar.openOEMStateBar();
        });
    });
}

function enableHbbTVControl(){
    return "EM" == InitArea || ("5655_EU_MARKET" == currentPlatform_config);
}

function setHBBTVEnableState(country) {
    if(!enableHbbTVControl()) return;
    deviceKeySet.HBBTVENABLE = "EU" == InitArea || (deviceKeySet.HBBTVCOUNTRY.indexOf(country) > -1);
    if(deviceKeySet.HBBTVENABLE) {
        writeFileToNative("hisenseUI/hbbtv_enable", country, 1);
        if("stopped" == deviceKeySet.HBBTVSTATE || "none" == deviceKeySet.HBBTVSTATE){
            startHBBTV();
        }
    }
    else{
        deleteNativeFile("hisenseUI/hbbtv_enable", 1);
        if("stopped" != deviceKeySet.HBBTVSTATE){
            stopHBBTV(true);
        }
    }
}
function onTvsetLocationChaged(country) {
    try
    {
        onTvLocationChaged(country);
        if(hiWebOsFrame.getCurrentArea()=="EU")
        {
            if((country=="RUS"
                ||country=="UZB"
                ||country=="KGZ"
                ||country=="TJK")
                &&(hiWebOsFrame.getCurrentArea()=="EU"))
            {
                g_systemautosleepflag=0;
                clearTimeout(g_systemautosleepTimer);
                g_systemautosleepTimer=null;
            }
            else {
                var  value=model.system.getAutoSleepSwitch();
                if( value > 0)
                {
                    var sleepvalue=[0,3,4];
                    var timer=4;
                    if(value>0&&value<3)
                    {
                        timer = sleepvalue[value];
                    }
                    g_systemautosleepflag=1;
                    clearTimeout(g_systemautosleepTimer);
                    g_systemautosleepTimer=null;
                    g_systemautosleepTimer=setTimeout(function(){onTvSwitchTriggerCauseChanged(-3)},4*3600* 1000);

                }
            }
            var isUK = hiWebOsFrame.getCurrentCountry() == "UK";
            ENABLE_FVP = tv ? (1 == parseInt(model.basicSetting.getDisclaimer()) && isUK) : true;
        }
    }catch (e)
    {
        debugE(e.message)
    }
    if(!enableHbbTVControl() || !country) return;
    setHBBTVEnableState(country.toUpperCase());

}
function pauseHBBTV() {
    if(enableHbbTVControl() && !deviceKeySet.HBBTVENABLE || "SA" == InitArea) return;
    deviceKeySet.HBBTVORIGIN = null;
    sendAM(":am,opera4x,hbbtv:pause");
    try {
            if("SA" != InitArea && !model.mheg5.getI32Enable())
            model.mheg5.setI32Enable(1);
        }
    catch(ex){
        DBG_ERROR(ex.message);
    }

}
function resumeHBBTV(){
    if(enableHbbTVControl() && !deviceKeySet.HBBTVENABLE || "SA" == InitArea) return;
    sendAM(":am,opera4x,hbbtv:resume");
}
function stopHBBTV(direct){
    if(enableHbbTVControl() && !direct && !deviceKeySet.HBBTVENABLE || "SA" == InitArea) return;
    sendAM(":am,am,:stop=hbbtv");
}
function startHBBTV(){
    if(enableHbbTVControl() && !deviceKeySet.HBBTVENABLE || "SA" == InitArea) return;
    sendAM(":am,am,:start=hbbtv");
}

function setLauncherStarting(val){
    try{
        DBG_INFO("launcher[" + val + "]");
        model.system.setLauncherIsStarting(val);
    }
    catch(ex){
        DBG_ERROR(ex.message);
    }
}


function getMediaURL(type){
    if(tv){
        return "file:///3rd_rw/UI/hisenseUI/mediaIndex.html?module=fileBrowser&type=" + type + "&area=" + InitArea;
    }
    else {
        return "mediaIndex.html?module=fileBrowser&type=" + type + "&area=" + InitArea;
    }
}

HSAPPURLREVERSE[getMediaURL(0)] = "media";

function startOpera4x(){
    if(!opera4xStarted){
        sendAM(":am,am,:start=opera4x");
        opera4xStarted = true;
    }
}

function getMarketLangKey(SAKey, EMKey){
    return "SA" == InitArea ? SAKey : EMKey;
}


function KeyDir(){
    ENUM_INDEX = 0;
}
KeyDir();
KeyDir.NONE = ENUM_INDEX++;
KeyDir.DOWN = ENUM_INDEX++;
KeyDir.UP = ENUM_INDEX++;
KeyDir.LEFT = ENUM_INDEX++;
KeyDir.RIGHT = ENUM_INDEX++;
KeyDir.CHDOWN = ENUM_INDEX++;
KeyDir.CHUP = ENUM_INDEX++;



function BookType(){
    ENUM_INDEX = 0;
}
BookType();
BookType.REMINDER = ENUM_INDEX++;
BookType.RECORD = ENUM_INDEX++;
BookType.NONE = ENUM_INDEX++;

function BookRepeatMode(){
    ENUM_INDEX = 0;
}
BookRepeatMode();
BookRepeatMode.SUNDAY = ENUM_INDEX++;
BookRepeatMode.MONDAY = ENUM_INDEX++;
BookRepeatMode.TUESDAY = ENUM_INDEX++;
BookRepeatMode.WEDNESDAY = ENUM_INDEX++;
BookRepeatMode.THURSDAY = ENUM_INDEX++;
BookRepeatMode.FRIDAY = ENUM_INDEX++;
BookRepeatMode.SATURDAY = ENUM_INDEX++;
BookRepeatMode.ONCE = ENUM_INDEX++;
BookRepeatMode.DAILY = ENUM_INDEX++;


function getHTMLSpace(cnt){
    var str = "";

    for (var i = 0; i < cnt; i++) {
        str += "&nbsp;";
    }
    return str;
}


function getProgramLocalTime(startTime, endTime, mode, f){
    var localStartDate = new Date(getLocalTimeByUTC(startTime) * milliBase);
    var localEndDate = new Date(getLocalTimeByUTC(endTime) * milliBase);

    var localStartTime = UTCToLocalTime(startTime, f);
    var localEndTime = UTCToLocalTime(endTime, f);

    var str, localStartDay, localEndDay;

    if(0 && "EU" == InitArea){
    localStartDay = ('0' + localStartDate.getUTCDate()).slice(-2) + "-" + ('0' + (localStartDate.getUTCMonth() + 1)).slice(-2) + "-" + (localStartDate.getFullYear());
    localEndDay = ('0' + localEndDate.getUTCDate()).slice(-2) + "-" + ('0' + (localEndDate.getUTCMonth() + 1)).slice(-2) + "-" + (localEndDate.getFullYear());
    }
    else{
    localStartDay = ('0' + localStartDate.getUTCDate()).slice(-2) + " " + getCurrentContentLanguage(month[localStartDate.getUTCMonth()]);
    localEndDay = ('0' + localEndDate.getUTCDate()).slice(-2) + " " + getCurrentContentLanguage(month[localEndDate.getUTCMonth()]);

    }


    switch(mode){
        case 1:
            str = localStartTime + " - " + localEndTime + getHTMLSpace(4) + localStartDay;
            break;
        case 2:
            str = localStartTime;
            break;
        case 3 :
            str = localStartTime + getHTMLSpace(4) + localStartDay;
            break;
        case 4:
            str = localStartTime + getHTMLSpace(2) + localStartDay + " - " + localEndTime + getHTMLSpace(2) + localEndDay;
        break;
        case 5:
            str = localStartTime + " - " + localEndTime ;
            break;
        default:
            str = localStartTime + " - " + localEndTime;
            break;
    }

    return str;

}

function getFvpPrograms(chnls, startLine, endLine, FirstDay, notPreLoad, onGetFvpPrograms){
    var ids = [];
    for (var i = 0; i < chnls.length; i++) {
        ids.push(chnls[i].serviceId);
    }

    if (tv) {
        freeview_manager.getScheduleData(ids, startLine, endLine, FirstDay, notPreLoad, onGetFvpPrograms);
    } else {
        freeview_data_adapter.getProgramList(chnls, startLine, endLine, onGetFvpPrograms);
    }
}

function openBookSchedulePage (ori) {
    var pageId = "epg_book_schedule_page";
    hiWebOsFrame.lockAllKeys("open book schedule");
    hiWebOsFrame.createPage(pageId, null, ori, null, function (p) {
        hiWebOsFrame[pageId] = p;
        epgBkSchedule.initOperateData(false);
        hiWebOsFrame[pageId].open();
        hiWebOsFrame[pageId].hiFocus("book_schedule_list");
        hiWebOsFrame.unLockAllKeys("open book schedule");
    });
}

function openBookAddPage(chnl, prgrm, ori, frmEPG){
    var pageId = "epg_book_add_page";
    hiWebOsFrame.lockAllKeys("open book add");
    hiWebOsFrame.createPage(pageId, null, ori, null, function (p) {
        hiWebOsFrame[pageId] = p;
        if(epgBkAdd.initOperateData(chnl, prgrm, frmEPG)){
            hiWebOsFrame[pageId].open();
            hiWebOsFrame[pageId].hiFocus();
        }
        hiWebOsFrame.unLockAllKeys("open book add");
    });
}

function openBookEditPage(chnl, prgrm, isContain, manualStop, bookType, ori){
    var pageId = "epg_book_edit_page";
    hiWebOsFrame.lockAllKeys("open book edit");
    hiWebOsFrame.createPage(pageId, null, ori, null, function (p) {
        hiWebOsFrame[pageId] = p;
        if(epgBkEdit.initOperateData(chnl, prgrm, isContain, manualStop, bookType)){
            hiWebOsFrame[pageId].open();
            hiWebOsFrame[pageId].hiFocus("book_edit_time_mode");
        }
        hiWebOsFrame.unLockAllKeys("open book edit");
    });
}

function openBookAddOrEditPage(chnl, prgrm, ori, frmEPG){
    var bkedPrgrm = schedule.getBookingInfoByProgram(prgrm);
    if (null != bkedPrgrm) {
        openBookEditPage(chnl, bkedPrgrm, true, false, bkedPrgrm.bookType, ori);
    }
    else {
        openBookAddPage(chnl, prgrm, ori, frmEPG);
    }
}

function openEPGDialog(oriPage) {
     var pageId = "dialog_common";
     hiWebOsFrame.lockAllKeys("dialog");
     hiWebOsFrame.createPage(pageId, null, oriPage, null, function (p) {
        hiWebOsFrame[pageId] = p;
        hiWebOsFrame[pageId].open();
        hiWebOsFrame[pageId].hiFocus();
        hiWebOsFrame.unLockAllKeys("dialog");
     });
}

function openBookConflictPage(conflict, oriPage) {
    var pageId = "epg_book_conflict_page";
    hiWebOsFrame.lockAllKeys("conflict");
    hiWebOsFrame.createPage(pageId, null, oriPage, null, function(p) {
        hiWebOsFrame[pageId] = p;
        epgBkConflict.initOperateData(conflict);
        hiWebOsFrame[pageId].open();
        hiWebOsFrame[pageId].hiFocus("book_conflict_list");
        hiWebOsFrame.unLockAllKeys("conflict");
    });
}

function openEPGDetailPage(prgrm, oriPage){
    var pageId = "epg_detail_page";
    hiWebOsFrame.lockAllKeys("detail");
    hiWebOsFrame.createPage(pageId, null, oriPage, null, function(p) {
        hiWebOsFrame[pageId] = p;
        epgDetail.initOperateData(prgrm);
        hiWebOsFrame[pageId].open();
        hiWebOsFrame[pageId].hiFocus();
        hiWebOsFrame.unLockAllKeys("detail");
    });

}

function openFVPEPGDetailPage(chnl, prgrm, oriPage){
    var pageId = "epg_fvp_detail_page";
    hiWebOsFrame.lockAllKeys("detail");
    hiWebOsFrame.createPage(pageId, null, oriPage, null, function(p) {
        hiWebOsFrame[pageId] = p;
        epgFVPDetail.initOperateData(chnl, prgrm);
        hiWebOsFrame[pageId].open();
        hiWebOsFrame[pageId].hiFocus();
        hiWebOsFrame.unLockAllKeys("detail");
    });

}

function openEPGWeeklyPage(d, oriPage, callback){
    var pageId = "epg_book_weekly_page";
    hiWebOsFrame.lockAllKeys("weekly");
    hiWebOsFrame.createPage(pageId, null, oriPage, null, function(p) {
        hiWebOsFrame[pageId] = p;
        epgBkWeekly.initOperateData(d, callback);
        hiWebOsFrame[pageId].open();
        hiWebOsFrame[pageId].hiFocus();
        hiWebOsFrame.unLockAllKeys("weekly");
    });


}

function openEPGPage() {
    if (hiWebOsFrame.getCurrentPageId() == "epg") {
        closeEPGModule();
        openLiveTVModule([Msg.INFO, 0]);
        return;
    }
    if (livetvchlist.getChannelListInitState() || livetvchlist.getChannelChangeFlag()) return;
    if (tv && (isMainArchiveRecording() || isTimeShiftStatus())) {
        PVROrTShiftDialog(hiWebOsFrame.getCurrentPage(),
            "Sure to exit from PVR or T.Shift?", stopPVROrTshiftToEPG, canCancelPVRTshift);
        return;
    }

    var curChannel = livetvmain.getCurrentChannelInfo();
    hiWebOsFrame.openEPGFromPVR = false;
    if (hiWebOsFrame.getCurrentPageId() == LiveTVModule.MAIN &&
        SourceList.TV == livetvmain.getCurrentSourceInnerId() && !!curChannel &&
        TVTYPE.ATV != curChannel.type) {
        closeLiveTVModule();
        hiWebOsFrame.startLoading(10, "epg");
        hiWebOsFrame.createPage('epg', null, null, null, function(pageEPG) {
            try {
                DBG_INFO("created epg");
                epg.initBcakArguments();
                hiWebOsFrame.epg = pageEPG;
                if (!epg.openEPG()) {
                    openLiveTVModule([Msg.INFO, 0]);
                    hiWebOsFrame.endLoading("epg");
                }
            }
            catch (ex) {
                DBG_ERROR(ex.message);
            }
        });
    }
    else{
        DBG_ALWAYS(objToString(curChannel));
        DBG_ALWAYS("current state can not open EPG");
    }
}


//pvr function modify by ghl
function openRemindRecordSettingPage()
{
    closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
    try
    {
        var prgrm = copyObj(prgrmInfoOfPvrTshift);
        // prgrm.startTime = parseInt(prgrm.startTime);
        // prgrm.endTime = parseInt(prgrm.endTime);
        debugPrint("prgrm: " + JSON.stringify(prgrm));
    }
    catch (ex)
    {
        debugPrint(ex.message);
    }
    if(tv)
    {
        openBookEditPage(null, prgrm, false, true, BookType.RECORD, hiWebOsFrame[LiveTVModule.MAIN])
        // openBookAddOrEditPage(null, prgrm, hiWebOsFrame[LiveTVModule.MAIN]);
    }
}

function getMarqueeTagByLen(txt, len) {
    var htmlTag = '<marquee scrollAmount=10 scrollDelay=150 style="width: '
        + len + 'px">' + (txt.replace(/\</g, "&lt;")) + '</marquee>';
    return htmlTag;
}

function restoreMarqueeCommon(sel, crntIndex, nxtIndex, len) {
    try {
        var crntSelector, nxtSelector, txt, wdth;
        if (crntIndex > -1) {
            crntSelector = $(sel).eq(crntIndex);
            //remove
            txt = crntSelector.text();
            crntSelector.html(txt.replace(/\</g, "&lt;"));
        }
        //add
        if (nxtIndex > -1) {
            nxtSelector = $(sel).eq(nxtIndex);
            txt = nxtSelector.text();
            wdth = Math.ceil(parseFloat(nxtSelector.css("width")));
            if (null != txt && wdth >= len) {
                nxtSelector.html(getMarqueeTagByLen(txt, len));
            }
        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function changeSourceTo(uid) {
    model.source.InputSet("" + uid);
    ReadInputRecent("" + uid);
}

function createVIDAALitelauncher(sourceOpen) {

    hiWebOsFrame.startLoading(20, "createModulePage");
    //根据市场区分加载viddalite lanucher css    5655EU去掉动画
    hiWebOsFrame.setModuleAttr("VIDAALiteNavPage", "cssPath", cssPath_config_Nav);
    hiWebOsFrame.setModuleAttr("VIDAALiteAppPage", "cssPath", cssPath_config_App);
    hiWebOsFrame.setModuleAttr("VIDAALiteAppPage_2006", "cssPath", cssPath_config_App_2006);
    hiWebOsFrame.setModuleAttr("VIDAALiteMediaPage", "cssPath", cssPath_config_Media);
    hiWebOsFrame.setModuleAttr("VIDAALiteRecommendPage", "cssPath", cssPath_config_Recommend);
    hiWebOsFrame.setModuleAttr("VIDAALiteRecommendationEUPage", "cssPath", cssPath_config_RecommendEU);
    hiWebOsFrame.setModuleAttr("VIDAALiteFreeViewPage", "cssPath", cssPath_config_FreeView);
    hiWebOsFrame.setModuleAttr("VIDAALiteVideoPage", "cssPath", cssPath_config_Video);
    hiWebOsFrame.setModuleAttr("VIDAALiteTvInput", "cssPath", cssPath_config_Input);
    try{
        hiWebOsFrame.createPage("VIDAALiteNavPage", null, null, null, function(page) {
            hiWebOsFrame.myLauncher = page;
            hiWebOsFrame.myLauncher.origin = null;
            if(typeof (sourceOpen) != "undefined" && !!sourceOpen){
                VIDAALiteLauncherFirstCreateFromSourceKey = true;
                VIDAALiteLauncherFirstCreateFromAllAppsKey = false;
            }
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
            hiWebOsFrame.endLoading();
        });
    }catch(e){
        debugPrint(e.message);
    }
}

var appNameChangeForLogReport = {

    netflix     :   'Netflix',
    youtube     :   'YouTube',
    amazon      :   'Amazon',
    amazonruby  :   'Amazonruby',
    vudu        :   'VUDU',
    dailymotion :   'Dailymotion',
    browser     :   'Browser',
    wuaki       :   'Wuaki TV'
}

function getFreeviewVersion(){
    DBG_ERROR("hiWebOsFrame.getCurrentCountry():"+hiWebOsFrame.getCurrentCountry());
    if("UK" == hiWebOsFrame.getCurrentCountry()){
        debugAlways('init FREEVIEWTEST true');
        return true;
    }else{
        debugAlways('init FREEVIEWTEST false');
        return false;
    }
}

function onTvLocationChaged(curLocation){
    DBG_ALWAYS('curLocation is:'+curLocation);
    FREEVIEWTEST=(curLocation.toUpperCase()=='GBR')?true:false;
    DBG_ALWAYS('FREEVIEWTEST:'+FREEVIEWTEST);
}

function convertLanguage() {
    var keys = Object.keys(langPackages);
    var lang_arr = [
        'chi', 'eng', 'ger', 'ita', 'por',
        'spa', 'fre', 'nor', 'swe', 'dan',
        'fin', 'tur', 'ara', 'rus', 'vie',
        'tha', 'bur', 'uzb', 'hin', 'ukr',
        'mal', 'hbr', 'cze', 'slk', 'pol',
        'hun', 'bul', 'per', 'ind'
    ];

    var ger_lang = {};
    for (var j = 0; j < keys.length; j++) {
        ger_lang[keys[j]] = langPackages[keys[j]][2];
    }
    return ger_lang;
}

var defaultDataPassword = "";
var alwaysDefaultData = false;
function launcherOnCreate(){

}

function getAlwaysDefaultData(){
    alwaysDefaultData = readFileFromNative("launcher/default_launcher_data", 1);
    if(null == alwaysDefaultData) alwaysDefaultData = false;
    return alwaysDefaultData;
}

function setDefaultDataFlag(o, d, code) {
    var num = (code - hiWebOsFrame.getKeyValues().keyNum0) + "";
    defaultDataPassword += num;

    if ("1969" == defaultDataPassword.slice(-4)) {
        defaultDataPassword = "";
        alwaysDefaultData = !alwaysDefaultData;
        DBG_ALWAYS("always use default data[" + alwaysDefaultData + "]");
        writeFileToNative("launcher/default_launcher_data", alwaysDefaultData + "", 1);
        showLauncherDefaultTip();
    }
}

function showLauncherDefaultTip() {
    $("#launcher_default_data_tip").css("display", alwaysDefaultData ? "block" : "none");
}

function hideLauncherDefaultTip() {
    $("#launcher_default_data_tip").css("display", "none");
}

function recoverFocusToLiveTV() {
    model.pvr.StopRecordCallBack = null;
    model.timeshift.timeShiftStopCallback = null;
    openLiveTVModule([Msg.INFO, 0]);
}

function stopPVROrTshift() {
    hiWebOsFrame.startLoading(5, "stoppvr");
    //hiWebOsFrame.needOpenBlankPage = true;
    try {
        livetvmain.clearLiveTVUI();
        if (!!hiWebOsFrame["dialog_common"]) {
            hiWebOsFrame["dialog_common"].destroy();
        }
//        hiWebOsFrame.startLoading(5, "stoppvr");
        if (isMainArchiveRecording()) {
            //setAfterStopPvrWantDo(recoverFocusToLiveTV.bind(this,0));
            model.pvr.StopRecordCallBack = recoverFocusToLiveTV;
            setTimeout(function() {
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
            }, 100);
        }
        if (isTimeShiftStatus()) {
            //setAfterStopTShiftWantDo(recoverFocusToLiveTV.bind(this,1));
            model.timeshift.timeShiftStopCallback = recoverFocusToLiveTV;
            setTimeout(function() {
                model.timeshift.Stop();
            }, 100);
        }
    } catch (ex) {
        debugPrint("error: " + ex.message);
    }
}

function canCancelPVRTshift() {
    if (!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    livetvchlist.setChangeChannelFlag(null);
    hiWebOsFrame.endLoading();
    openLiveTVModule();
}

function stopPVROrTshiftToEPG() {
    hiWebOsFrame.openEPGFromPVR = true;
    stopPVROrTshift();
}

function startLauBrowser(url) {
    sendAM(':am,am,lau_browser:start=[lau_browser,-u,' + url + ']');
    // sendAM(':am,am,:start=[lau_browser,-u,' + url + ']');
}
function startTVStore(url, type, full) {
    if ("" !== full) {
        sendAM(":am,am,tv_store:start=" + full);
    }
    else {
        var cmd = "";
        if ("" !== url) cmd += ("-u," + url + ",");
        if ("" !== type) cmd += ("-s," + type + ",");

        if ("" !== cmd) {
            cmd = cmd.substring(0, cmd.length - 1);
            sendAM(":am,am,tv_store:start=[tv_store," + cmd + "]");
        }
        else {
            sendAM(":am,am,tv_store:start=tv_store]");
        }
    }
}
function startNetrange(url) {
    if ("" === url) {
        sendAM(":am,am,netrange:start=netrange");
    }
    else {
        sendAM(':am,am,netrange:start=[netrange,-u,' + url + "]");
    }
}
function startHiBrowser(url) {
    if ("" === url) {
        sendAM(":am,am,hi_browser:start=hi_browser");
    }
    else {
        sendAM(':am,am,hi_browser:start=[hi_browser,-u,' + url + ']');
    }
}

function isCurrentCoutryWSG() {
    try {
        if (!tv) return false;
        var WSGCoutryList = ["Russia_EU","Uzbekistan_EU", "Kirghizstan_EU","Tajikistan_EU"];
        var curCountry = hiWebOsFrame.getCurrentCountry();
        return WSGCoutryList.indexOf(curCountry) != -1;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    //当前国家是否是外三高
}

function GlobalFuncClass() {
    var pageScale = null;
    var self = this;
    this.getPageScale = function () {
        try {
            if (null == pageScale) {
                var width = parseInt($('#span_scale_only').css('width'));
                var scaleWidth = $('#span_scale_only').offset().width;
                pageScale = Math.round(scaleWidth * 100 / width) / 100;
            }
            DBG_INFO('pageScale: ' + pageScale);
            return pageScale;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }
}

var globalfunc = new GlobalFuncClass();

function checkHBBTVKeySet(){
    return (deviceKeySet.HBBTVKEYSET > 15 && deviceKeySet.HBBTVKEYSET != 0x2000);
}
function getFileName(crid) {
    try {
        var arr = crid.split(/\/|\./g).reverse();
        var str = arr[3] + arr[2] + arr[1] + arr[0];
        return str.replace(/[^a-zA-Z0-9]/g, "");
    } catch (ex) {
        DBG_ERROR(ex.message);
        return "";
    }
}
function startFreeviewEPGPlayer(url) {
    //deviceKeySet.HBBTVORIGIN = hiWebOsFrame.getCurrentPage();
    pauseDTV();
    startHBBTVAppLoading();
    setTimeout(function() {
        deviceKeySet.HBBTVAPPON = true;
        sendAM(":am,opera4x,hbbtv:open=" + url);
    }, 1000);
    logReport('HBBTVRun', 'Hbbtv', 1);
}

function isNULLProgram(prgrm){
    return !prgrm || ("" == prgrm.eventId && "" == prgrm.programId);
}

function isNAProgram(prgrm){
    return (!prgrm || "N/A" == prgrm.eventId || "N/A" == prgrm.programId);
}

function checkFVAvailable(){

}

function assembleMediaURL(mediaURL) {
    if(!mediaURL){
        return "";
    }
    var returnURL = mediaURL;
    if(returnURL.indexOf("pvrflag=")>-1){
        var paramName = "pvrflag";
        var re=eval('/('+ paramName+'=)([^&]*)/gi');
        try{
            if(re){
                var newURL = returnURL.replace(re,paramName+'='+getPVRFlag());
                if(newURL){
                    returnURL = newURL;
                }
            }
        }catch(ex){
            DBG_ERROR(ex.message);
        }
    }else{
        returnURL +="&pvrflag="+getPVRFlag();
    }
    return returnURL;
}
function getSourceIdbyKey(keycode){
    var sourceid="";
    var name;
    var searchlist=[];
    debugPrint("keycode"+keycode);
    switch (keycode){
        case VK_AV1:
            searchlist=["av1","av"];
            break;
        case VK_AV2:
            searchlist=["av2"];
            break;
        case VK_AV3:
            searchlist=["scart","av3"];
            break;
        case VK_COMPONENT1:
            searchlist=["component1","component"];
            break;
        case VK_HDMI1:
            searchlist=["hdmi1","hdmi1_uhd"];
            break;
        case VK_HDMI2:
            searchlist=["hdmi2","hdmi2_uhd"];
            break;
        case VK_HDMI3:
            searchlist=["hdmi3","hdmi3_uhd"];
            break;
        case VK_HDMI4:
            searchlist=["hdmi4","hdmi4_uhd"];
            break;
        case VK_HDMI5:
            searchlist=["hdmi5","hdmi5_uhd"];
            break;
        case VK_VGA:
            searchlist=["vga"];
            break;
    }
    var temp=tv?model.source.getInputName():[0,"TV",0,0,"TV",0,1,"AV",0,0,"AV",0,3,"HDMI1",0,0,"HDMI1",0,4,"HDMI2",0,0,"HDMI2",0];
    var cout=parseInt(temp.length/6);
    debugPrint("get sourcelist"+temp);
    for(var i=0;i<cout;i++)
    {
        name=temp[i*6+1];
        for(var j=0;j<searchlist.length;j++){
            if(name.toLowerCase()==searchlist[j]){
                sourceid=temp[i*6];
                return sourceid;
            }
        }
    }
    debugPrint("can not find the source in current source list ");
    return ;
}
