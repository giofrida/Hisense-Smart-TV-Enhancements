/**
 * Created by yangcheng3 on 2016-12-20.
 */
var http_adapter = {};
var forbidRequestList = [];
var lastModifiedTimeList = [];
var lastAuthTime = 0, authBackStatus = false;
(function () {
    http_adapter.init = function (callback) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.init does not need callback");
            };
        }
        DBG_INFO("http_adapter.init");
        try {
            DBG_INFO("forbidRequestList:" + forbidRequestList);
            if(typeof(forbidRequestList) == "undefined" || !forbidRequestList) {
                forbidRequestList = [];
            }
            mds_error_request = {};
        } catch (e) {
            DBG_ERROR("forbidRequestList error!!!:" + e.message);
        }
        cache_adapter.init();
        if (freeview_util.checkNetworkConnected()) {
            fvpAuth(callback);
        } else {
            setTimeout(function () {
                callback(false);
            }, 0);
        }
    };
    http_adapter.destroy = function () {
        DBG_INFO("http_adapter.destroy");
        //TODO:
    };

    var mds_error_request = {};
    /**
     * get app list xml
     * @param {Array} nids network ids
     * @param callback
     */
    http_adapter.getAppList = function (nids, callback, ifModified) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getAppList does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getAppList fvpAuth failed");
            callback([]);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/applications?" + getNidsString(nids);
        DBG_INFO("http_adapter http request : sendAppList askUrl:" + askUrl);
        var encodeUrlStr = encodeURI(askUrl);
        if(!!mds_error_request[encodeUrlStr] && (mds_error_request[encodeUrlStr] < 0 || getUtcTime() < mds_error_request[encodeUrlStr])){
            DBG_ERROR("http_adapter.getAppList forbid request again");
            callback([]);
            return;
        }
        var lastModifiedTime = 0;
        if(jQuery.lastModified.hasOwnProperty(encodeUrlStr) && !!jQuery.lastModified[encodeUrlStr]) {
            lastModifiedTime = jQuery.lastModified[encodeUrlStr];
        }
        if(jQuery.lastModified.hasOwnProperty(askUrl) && !!jQuery.lastModified[askUrl]) {
            lastModifiedTime = jQuery.lastModified[askUrl];
        }
        if(lastModifiedTimeList.hasOwnProperty(encodeUrlStr)) {
            lastModifiedTime = lastModifiedTimeList[encodeUrlStr];
            DBG_INFO("lastModifiedTime=" + lastModifiedTime);
        }

        var headerObj;
        if(lastModifiedTime != 0 && ifModified) {
            headerObj = {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp,
                "HTTP_IF_MODIFIED_SINCE": lastModifiedTime
            }
        } else {
            headerObj = {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            }
        }
        jQuery.ajax({
            type: 'get',
            url: encodeUrlStr,
            headers: headerObj,
            ifModified: ifModified,  // detault true
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendAppList Ask success!!!");
                var lastModified = xhr.getResponseHeader("Last-Modified");
                if(!lastModified) {
                    var unixTimestamp = new Date(getExpiresTime(xhr) * 1000 ) ;
                    var commonTime = unixTimestamp.toGMTString();
                    lastModified = commonTime;
                }
                lastModifiedTimeList[encodeUrlStr] = lastModified;
                var time_stamp = getExpiresTime(xhr);
                try {
                    if(xhr.status == 304) {
                        callback([], time_stamp, true);
                        return;
                    }
                    delete mds_error_request[encodeUrlStr];
                    parserAppList(data, time_stamp, function(data) {
                        callback(data, time_stamp);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendAppList Ask success!!!:" + e.message);
                    callback([], time_stamp);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendAppList Ask fail!!!" + xhr.status);
                var unixTimestamp = new Date(getExpiresTime(xhr) * 1000 ) ;
                var commonTime = unixTimestamp.toGMTString();
                lastModifiedTimeList[encodeUrlStr] = commonTime;

                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getAppList(nids,callback);
                    });
                } else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[encodeUrlStr] = timeout;
                    if (null != callback) callback([], unixTimestamp);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[encodeUrlStr] = -1;
                    }
                    if (null != callback) callback([], unixTimestamp);
                }
            }
        });
    };
    /**
     * get app player ait xml
     * @param {String} url the url of app player ait xml
     * @param callback
     */
    http_adapter.getAppPlayerInfo = function (nids, url, callback, force_request) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getAppPlayerInfo does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getAppPlayerInfo fvpAuth failed");
            callback(null);
            return;
        }
        var ask_url = generateAitUrl(url, nids, "playerpage");
        var encode_url = encodeURI(ask_url);
        if(!!mds_error_request[encode_url] && (mds_error_request[encode_url] < 0 || getUtcTime() < mds_error_request[encode_url])){
            DBG_ERROR("http_adapter.getAppPlayerInfo forbid request again");
            callback([]);
            return;
        }
        DBG_INFO("http_adapter http request : http_adapter.getAppPlayerInfo url = " + ask_url);
        //1.get data from cache
        var cache_name = "PlayerInfo_" + ask_url;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }
        jQuery.ajax({
            type: 'get',
            url: encode_url,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.dvb.ait+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            cache: !force_request,
            ifModified: !force_request,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendAppPlayerInfoRequest Ask success!!! " + url);

                try {
                    delete mds_error_request[encode_url];
                    if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                            http_adapter.getAppPlayerInfo(nids, url, callback, true);
                        })) {
                        DBG_ERROR("getAppPlayerInfo 304 status");
                        return;
                    }
                    parserAppPlayerInfo(data, function (data) {
                        if(!data) {
                            data = "noData";
                        }
                        cache_adapter.setCache(cache_name, data, getExpiresTime(xhr));
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendAppPlayerInfoRequest Ask success!!!:" + e.message);
                    callback(null);
                }

            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendAppPlayerInfoRequest Ask fail[" + url + "]!!!" + xhr.status);
                if(xhr.status == 401 || xhr.status == 403 || xhr.status == 404){
                    mds_error_request[encode_url] = -1;
                    if (null != callback) callback([]);
                    return;
                }
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getAppPlayerInfo(nids, url, callback);
                    });
                }else if(timeout>0){
                    mds_error_request[encode_url] = getUtcTime()+timeout;
                    if (null != callback) callback(null);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[encode_url] = -1;
                    }
                    if (null != callback) callback(null);
                }
            }
        });
    };
    /**
     * get channel list xml
     * @param {Number} nid network ids
     * @param callback
     */
    http_adapter.getChannelList = function (nid, callback, ifModified) {

        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getChannelList does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getChannelList fvpAuth failed");
            callback([]);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/services?nid=" + nid;
        var encodeUrlStr = encodeURI(askUrl);
        if(!!mds_error_request[encodeUrlStr] && (mds_error_request[encodeUrlStr] < 0 || getUtcTime() < mds_error_request[encodeUrlStr])) {
            DBG_ERROR("http_adapter.getChannelList forbid request again");
            callback([]);
            return;
        }
        DBG_INFO("http_adapter http request : getChannelList askUrl:" + askUrl);


        var lastModifiedTime = 0;
        if(jQuery.lastModified.hasOwnProperty(encodeUrlStr) && !!jQuery.lastModified[encodeUrlStr]) {
            lastModifiedTime = jQuery.lastModified[encodeUrlStr];
        }
        if(jQuery.lastModified.hasOwnProperty(askUrl) && !!jQuery.lastModified[askUrl]) {
            lastModifiedTime = jQuery.lastModified[askUrl];
        }


        var headerObj;
        if(lastModifiedTime != 0) {
            headerObj = {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp,
                "HTTP_IF_MODIFIED_SINCE": lastModifiedTime
            }
        } else {
            headerObj = {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            }
        }

        jQuery.ajax({
            type: 'get',
            url: encodeUrlStr,
            headers: headerObj,
            cache: ifModified,
            ifModified: ifModified,  // detault true
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendChannelList Ask success!!! "+ xhr.status);

                if(xhr.status == 304) {
                    callback([], getExpiresTime(xhr), true);
                    return;
                }
                try {
                    delete mds_error_request[encodeUrlStr];
                    parserChannelList(data, getExpiresTime(xhr), callback);
                } catch (e) {
                    DBG_ALWAYS("parserChannelList fail!!!:" + e.message);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("getChannelList Ask fail!!!" + xhr.status);
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getChannelList(nid,callback);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[encodeUrlStr] = getUtcTime()+timeout;
                    if (null != callback) callback([]);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[encodeUrlStr] = -1;
                    }
                    if (null != callback) callback([]);
                }
            }
        });
    };
    http_adapter.getContentOwingChannelList = function (callback, ifModified) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getContentOwingChannelList does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getContentOwingChannelList fvpAuth failed");
            callback([]);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/services?service_type=content_owning";

        if(!!mds_error_request[askUrl] && (mds_error_request[askUrl] < 0 || getUtcTime() < mds_error_request[askUrl])) {
            DBG_ERROR("http_adapter.getContentOwingChannelList forbid request again");
            callback([]);
            return;
        }
        var cache_name = "ContentChannelList_" + askUrl;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }
        DBG_INFO("http_adapter http request : getContentOwingChannelList");
        jQuery.ajax({
            type: 'get',
            url: askUrl,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            ifModified: false,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("getContentOwingChannelList Ask success!!!");
                try {
                    delete mds_error_request[askUrl];
                    var exp = getExpiresTime(xhr);
                    if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                            http_adapter.getContentOwingChannelList(callback, true);
                        })){
                        DBG_ERROR("getContentOwingChannelList 304 status");
                        return;
                    }
                    parserChannelList(data, exp, function (data, time) {
                        if (!!data && data.length == 0) {
                            data = freeview_util.CONST.NO_DATA;
                        }
                        cache_adapter.setCache(cache_name, data, time);
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("getContentOwingChannelList fail!!!:" + e.message);
                    callback([], 0);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("getContentOwingChannelList Ask fail!!!" + xhr.status);
                var RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getContentOwingChannelList(callback, false);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[askUrl] = getUtcTime()+timeout;
                    if (null != callback) callback([], 0);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[askUrl] = -1;
                    }
                    if (null != callback) callback([], 0);
                }
            }
        });
    };
    /**
     * get the detailed program information xml
     * @param {String} pid program id
     * @param callback
     */
    var detail_xhr = null;
    http_adapter.getProgramDetail = function (pid, callback, force_request) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getProgramDetail does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getProgramDetail fvpAuth failed");
            callback(null);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/program?pid=" + encodeURIComponent(pid);
        if(!!mds_error_request[askUrl] && (mds_error_request[askUrl] < 0 || getUtcTime() < mds_error_request[askUrl])){
            DBG_ERROR("http_adapter.getProgramDetail forbid request again3");
            callback([]);
            return;
        }
        DBG_INFO("http_adapter.getProgramDetail pid = " + pid);
        //1.get data from cache
        var cache_name = "ProgramDetail_" + pid;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }
        DBG_INFO("http_adapter http request : getProgramDetail askUrl:" + askUrl);
        if (!!detail_xhr) {
            // detail_xhr.abort();
            setTimeout(function () {
                http_adapter.getProgramDetail(pid, callback, force_request);
            }, 200);
            return;
        }

        detail_xhr = jQuery.ajax({
            type: 'get',
            url: askUrl,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            ifModified: !force_request,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendProgramDetail Ask success!!!");
                try {
                    //3. if data is not modified, use data in cache
                    delete mds_error_request[askUrl];
                    detail_xhr = null;
                    if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                            http_adapter.getProgramDetail(pid, callback, true);
                        })) {
                        DBG_ERROR("getProgramDetail 304 status");
                        return;
                    }
                    parserProgramDetail(data, function (data) {
                        if(!data) {
                            data = "noData";
                        }
                        cache_adapter.setCache(cache_name, data, getExpiresTime(xhr));
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendProgramDetail fail!!!:" + e.message);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendProgramDetail Ask fail!!!" + xhr.status);
                detail_xhr = null;
                if(textStatus == "abort") {
                    DBG_INFO("abort this request, just return");
                    return;
                }
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getProgramDetail(pid, callback,false);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[askUrl] = getUtcTime()+timeout;
                    if (null != callback) callback([]);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[askUrl] = -1;
                    }
                    if (null != callback) callback([]);
                }
            }
        });
    };
    /**
     * get content deep-linked xml ait
     * @param {String} purl program url
     * @param callback
     */
    http_adapter.getContentAit = function (purl, lloc, callback, force_request) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getContentAit does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getContentAit fvpAuth failed");
            callback(null);
            return;
        }
        var ask_url = generateAitUrl(purl, freeview_util.getNids(), lloc);
        if(!!mds_error_request[ask_url] && (mds_error_request[ask_url] < 0 || getUtcTime() < mds_error_request[ask_url])){
            DBG_ERROR("http_adapter.getContentAi forbid request again");
            callback(null);
            return;
        }
        DBG_INFO("http_adapter http request : http_adapter.getContentAit purl = " + purl);

        //1.get data from cache
        var cache_name = "ContentAit_" + purl;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }

        jQuery.ajax({
            type: 'get',
            url: ask_url,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.dvb.ait+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            ifModified: !force_request,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("getContentAit Ask success!!!");
                try {
                    //3. if data is not modified, use data in cache
                    delete mds_error_request[ask_url];
                    if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                            http_adapter.getContentAit(purl, lloc, callback, true);
                        })) {
                        DBG_ERROR("getContentAit 304 status");
                        return;
                    }
                    parserContentAitData(data, getExpiresTime(xhr), function (data, exp) {
                        if(!data) {
                            data = "noData";
                        }
                        cache_adapter.setCache(cache_name, data, exp);
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("getContentAit Ask success!!!:" + e.message);
                }

            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("getContentAit Ask fail!!!" + xhr.status);
                if(xhr.status == 401 || xhr.status == 403 || xhr.status == 404){
                    mds_error_request[ask_url] = -1;
                    if (null != callback) callback(null);
                    return;
                }
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getContentAit(purl, lloc, callback, false);
                    });
                }else if(timeout>0){
                    mds_error_request[ask_url] = getUtcTime()+timeout;
                    if (null != callback) callback(null);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[ask_url] = -1;
                    }
                    if (null != callback) callback(null);
                }
            }
        });
    };
    /**
     * get schedule xml
     * @param {Number} sid service id
     * @param {Number} start_time start time of request
     * @param {Number} end_time end time of request
     * @param callback pass the data
     */
    http_adapter.getScheduleData = function (sid, start_time, end_time, callback) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getScheduleData does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getScheduleData fvpAuth failed");
            callback([]);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/schedules?start=" + start_time
            + "&end=" + end_time + "&sids[]=" + sid;
        var encodeUrlStr = encodeURI(askUrl);
        // DBG_ERROR("getScheduleData1:"+ScheduleNextReqTime);
        // DBG_ERROR("getScheduleData2:"+getUtcTime());
        if(!!mds_error_request[encodeUrlStr] && (mds_error_request[encodeUrlStr] < 0 || getUtcTime() < mds_error_request[encodeUrlStr])) {
            DBG_ERROR("http_adapter.getScheduleData forbid request again");
            callback([]);
            return;
        }
        DBG_INFO("http_adapter http request : http_adapter.getScheduleData askUrl:" + askUrl);

        var lastModifiedTime = 0;
        if(jQuery.lastModified.hasOwnProperty(encodeUrlStr) && !!jQuery.lastModified[encodeUrlStr]) {
            lastModifiedTime = jQuery.lastModified[encodeUrlStr];
        }
        if(jQuery.lastModified.hasOwnProperty(askUrl) && !!jQuery.lastModified[askUrl]) {
            lastModifiedTime = jQuery.lastModified[askUrl];
        }
        if(lastModifiedTimeList.hasOwnProperty(encodeUrlStr)) {
            lastModifiedTime = lastModifiedTimeList[encodeUrlStr];
            DBG_INFO("lastModifiedTime=" + lastModifiedTime);
        }

        var headerObj;
        if(lastModifiedTime != 0) {
            headerObj = {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp,
                "HTTP_IF_MODIFIED_SINCE": lastModifiedTime
            }
        } else {
            headerObj = {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            }
        }
        var startRequestTime = new Date();
        DBG_ALWAYS("sendScheduleData Ask Start sid[" + sid + "]" + new Date());
        jQuery.ajax({
            type: 'get',
            url: encodeUrlStr,
            headers: headerObj,
            cache: true,
            ifModified: true,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                var endRequesTime = new Date();
                DBG_ALWAYS("sendScheduleData Ask success!!! sid[" + sid + "]"  +" back time:" + endRequesTime +",request use "+((endRequesTime - startRequestTime) / 1000) + "s");
                var lastModified = xhr.getResponseHeader("Last-Modified");
                if(!lastModified) {
                    var unixTimestamp = new Date(getExpiresTime(xhr) * 1000 ) ;
                    var commonTime = unixTimestamp.toGMTString();
                    lastModified = commonTime;
                }
                lastModifiedTimeList[encodeUrlStr] = lastModified;
                try {
                    if(xhr.status == 304) {
                        callback([], getExpiresTime(xhr), true);
                        return;
                    }
                    delete mds_error_request[encodeUrlStr];
                    parserScheduleData(data, getExpiresTime(xhr), callback);
                } catch (e) {
                    DBG_ALWAYS("parserScheduleData sid[" + sid + "] fail!!!:" + e.message);
                    callback([]);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                var endRequesTime = new Date();
                DBG_ALWAYS("sendScheduleData sid[" + sid + "] Ask fail!!!" + xhr.status +" back time:" + endRequesTime +",request use "+((endRequesTime - startRequestTime) / 1000) + "s");
                var unixTimestamp = new Date(getExpiresTime(xhr) * 1000 ) ;
                var commonTime = unixTimestamp.toGMTString();
                lastModifiedTimeList[encodeUrlStr] = commonTime  // xhr.getResponseHeader("Last-Modified");
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getScheduleData(sid, start_time, end_time,callback);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[encodeUrlStr] = getUtcTime()+timeout;
                    if (null != callback) callback([]);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[encodeUrlStr] = -1;
                    }
                    if (null != callback) callback([]);
                }
            }
        });
    };
    /**
     * get template ait xml
     * @param {String} url auxiliary url of the program
     * @param callback
     */
    var template_request = {};
    http_adapter.getTemplateData = function (url, callback) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getTemplateData does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getTemplateData fvpAuth failed");
            callback(null);
            return;
        }
        if(!!mds_error_request[url] && mds_error_request[url] < 0 || getUtcTime() < mds_error_request[url]){
            DBG_ERROR("http_adapter.getTemplateData forbid request again");
            callback(null);
            return;
        }

        var cache_name = "TemplateAit_" + url;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }
        var ask_url = generateAitUrl(url, freeview_util.getNids(), "epg");
        if (!!template_request[ask_url]) {
            setTimeout(function () {
                http_adapter.getTemplateData(url, callback);
            }, 300);
            DBG_INFO("http_adapter.getTemplateData the same request is sending, this request should be delay 300ms");
            return;
        }
        DBG_INFO("http_adapter http request : http_adapter.getTemplateData url = " + url);
        jQuery.ajax({
            type: 'get',
            url: ask_url,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.dvb.ait+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            timeout: g_requestTimeout,
            success: function (data, textStatus, xhr) {
                DBG_ALWAYS("sendTemplateData Ask success!!!");
                try {
                    delete mds_error_request[url];
                    if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                            //http_adapter.getTemplateData(url, callback);
                            callback();
                        })) {
                        DBG_ERROR("getTemplateData 304 status");
                        return;
                    }
                    parserTemplateData(data, getExpiresTime(xhr), function (data, exp) {
                        if(!data) {
                            data = "noData";
                        }
                        cache_adapter.setCache(cache_name, data, exp);
                        setTimeout(function () {
                            DBG_INFO("setcahe for templaye ait");//test
                            delete template_request[ask_url];
                        }, 100);
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendTemplateData Ask success parse fail:" + e.message);
                    callback(null);
                }

            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendTemplateData Ask fail!!!" + xhr.status);
                delete template_request[ask_url];
                if(xhr.status == 401 || xhr.status == 403 || xhr.status == 404){
                    mds_error_request[url] = -1;
                    if (null != callback) callback(null);
                    return;
                }
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getTemplateData(url, callback);
                    });
                }else if(timeout>0){
                    mds_error_request[url] = getUtcTime()+timeout;
                    if (null != callback) callback(null);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[url] = -1;
                    }
                    if (null != callback) callback(null);
                }
            }
        });
        template_request[ask_url] = 1;
    };

    http_adapter.getSearchSuggestions = function (keyword, callback, force_request) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getSearchSuggestions does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getSearchSuggestions fvpAuth failed");
            callback([]);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/programs/suggestions?q=" + encodeURIComponent(keyword) + "&type=ondemand";
        if(!!mds_error_request[askUrl] && (mds_error_request[askUrl] < 0 || getUtcTime() < mds_error_request[askUrl])) {
            DBG_ERROR("http_adapter.getSearchSuggestions forbid request again");
            callback([]);
            return;
        }
        DBG_INFO("http_adapter http request : sendSearchSuggestionsAjaxRequest askUrl:" + askUrl);

        //1.get data from cache
        var cache_name = "SearchSuggestions_" + askUrl;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }

        jQuery.ajax({
            type: 'get',
            url: askUrl,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            ifModified: !force_request,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendSearchSuggestions Ask success!!!");
                //3. if data is not modified, use data in cache
                if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                        http_adapter.getSearchSuggestions(keyword,callback, true);
                    })) {
                    DBG_ERROR("getSearchSuggestions 304 status");
                    return;
                }
                try {
                    delete mds_error_request[askUrl];
                    parserSearchSuggestions(data, function (data) {
                        if(!data) {
                            data = "noData";
                        }
                        cache_adapter.setCache(cache_name, data, getExpiresTime(xhr));
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendSearchSuggestions Ask success!!!:" + e.message);
                    callback([]);
                }

            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendSearchSuggestions Ask fail!!!" + xhr.status);
                if(xhr.status == 500 || xhr.status == 502 || xhr.status == 504 ||
                    xhr.status == 503){
                    mds_error_request[askUrl] = -1;
                    if (null != callback) callback([]);
                    return;
                }
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getSearchSuggestions(keyword,callback,false);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[askUrl] = getUtcTime()+timeout;
                    if (null != callback) callback([]);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[askUrl] = -1;
                    }
                    if (null != callback) callback([]);
                }
            }
        });
    };

    http_adapter.getSearchResults = function (nids, keyword, url, callback, force_request) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getSearchResults does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getSearchResults fvpAuth failed");
            callback([],[]);
            return;
        }
        var askUrl = "";
        if (!url) {
            askUrl = g_fvpBaseUrl + "/programs/search?q=" + encodeURIComponent(keyword) + "&type=ondemand&" + getNidsString(nids);
            // var askUrl = g_fvpBaseUrl + "/programs/search?q=" + keyword + "&type=ondemand&nids[]=12360";
            // askUrl = encodeURI(askUrl);
        } else {
            askUrl = url;
        }
        if(!!mds_error_request[askUrl] && (mds_error_request[askUrl] < 0 || getUtcTime() < mds_error_request[askUrl])) {
            DBG_ERROR("http_adapter.getSearchResults forbid request again");
            callback([],[]);
            return;
        }
        DBG_INFO("http_adapter http request : sendSearchResultsAjaxRequest askUrl:" + askUrl);

        //1.get data from cache
        var cache_name_program = "Search_Result1_" + askUrl;
        var cache_name_group = "Search_Result2_" + askUrl;
        var cache_1 = cache_adapter.getCache(cache_name_program);
        var cache_2 = cache_adapter.getCache(cache_name_group);
        if (!!cache_1 && !!cache_2) {
            if(cache_1 == "noData") {
                cache_1 = null;
            }
            if(cache_2 == "noData") {
                cache_2 = null;
            }
            callback(cache_1, cache_2);
            return;
        }

        jQuery.ajax({
            type: 'get',
            url: askUrl,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            ifModified: !force_request,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendSearchResults Ask success!!!");

                try {
                    delete mds_error_request[askUrl];
                    //3. if data is not modified, use data in cache
                    if (xhr.status == 304) {
                        DBG_ERROR("getSearchResults 304 status");
                        var cache_1 = cache_adapter.getCache(cache_name_program);
                        var cache_2 = cache_adapter.getCache(cache_name_group);
                        if (!!cache_1 && !!cache_2) {
                            if(cache_1 == "noData") {
                                cache_1 = null;
                            }
                            if(cache_2 == "noData") {
                                cache_2 = null;
                            }
                            callback(cache_1, cache_2);
                        } else {
                            http_adapter.getSearchResults(nids, keyword, url, callback, true);
                        }
                        return;
                    }
                    var exp = getExpiresTime(xhr);
                    parserSearchResults(data, function (ProgramData, GroupData) {
                        if(!ProgramData) {
                            ProgramData = "noData";
                        }
                        if(!GroupData) {
                            GroupData = "noData";
                        }
                        cache_adapter.setCache(cache_name_program, ProgramData, exp);
                        cache_adapter.setCache(cache_name_group, GroupData, exp);
                        if(ProgramData == "noData") {
                            ProgramData = null;
                        }
                        if( GroupData == "noData") {
                            GroupData = null;
                        }
                        callback(ProgramData, GroupData);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendSearchResults Ask success!!!:" + e.message);
                    callback([], []);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendSearchResults Ask fail!!!" + xhr.status);
                if(xhr.status == 500 || xhr.status == 502 || xhr.status == 504 ||
                    xhr.status == 503){
                    mds_error_request[askUrl] = -1;
                    if (null != callback) callback([],[]);
                    return;
                }
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getSearchResults(nids, keyword, url,callback,false);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[askUrl] = getUtcTime()+timeout;
                    if (null != callback) callback([],[]);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[askUrl] = -1;
                    }
                    if (null != callback) callback([],[]);
                }
            }
        });
    };

    http_adapter.getRecommendationsCategories = function (callback, force_request) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getRecommendationsCategories does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getRecommendationsCategories fvpAuth failed");
            callback([]);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/groups/recommendations?type=ondemand";
        if(!!mds_error_request[askUrl] && (mds_error_request[askUrl] < 0 || getUtcTime() < mds_error_request[askUrl])) {
            DBG_ERROR("http_adapter.getRecommendationsCategories forbid request again");
            callback([]);
            return;
        }
        DBG_INFO("http_adapter http request : sendRecommendationsCategories askUrl:" + askUrl);

        //1.get data from cache
        var cache_name = "RecommendationsCategories";
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }

        //2.get data from http
        jQuery.ajax({
            type: 'get',
            url: encodeURI(askUrl),
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            ifModified: !force_request,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendRecommendationsCategories Ask success!!!");
                try {
                    delete mds_error_request[askUrl];
                    //3. if data is not modified, use data in cache
                    if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                            http_adapter.getRecommendationsCategories(callback, true);
                        })) {
                        DBG_ERROR("getRecommendationsCategories 304 status");
                        return;
                    }
                    parserRecommendationsCategories(data, function (data) {
                        //4.set data to cache
                        if(!data) {
                            data = "noData";
                        }
                        cache_adapter.setCache(cache_name, data, getExpiresTime(xhr));
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendRecommendationsCategories Ask success!!!:" + e.message);
                    callback([]);
                }

            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendRecommendationsCategories Ask fail!!!" + xhr.status);
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getRecommendationsCategories(callback,false);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[askUrl] = getUtcTime()+timeout;
                    if (null != callback) callback([]);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[askUrl] = -1;
                    }
                    if (null != callback) callback([]);
                }
            }
        });
    };
    http_adapter.getCategoryFiltered = function (groupId, callback, force_request) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("http_adapter.getCategoryFiltered does not need callback");
            };
        }
        if (!checkBaseUrl()) {
            DBG_ERROR("http_adapter.getCategoryFiltered fvpAuth failed");
            callback([]);
            return;
        }
        var askUrl = g_fvpBaseUrl + "/programs/recommendations?groupId=" + encodeURIComponent(groupId) + "&type=ondemand&" + getNidsString(freeview_util.getNids());

        if(!!mds_error_request[askUrl] && (mds_error_request[askUrl] < 0 || getUtcTime() < mds_error_request[askUrl])){
            DBG_ERROR("http_adapter.getCategoryFiltered forbid request again");
            callback([]);
            return;
        }
        // var askUrl = g_fvpBaseUrl + "/programs/recommendations?groupId=" + groupId + "&type=ondemand&nids[]=12360";
        DBG_INFO("http_adapter http request : sendCategoryFiltered askUrl:" + askUrl);
        //1.get data from cache
        var cache_name = "Category_" + groupId;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            if(cache == "noData") {
                cache = null;
            }
            callback(cache);
            return;
        }

        jQuery.ajax({
            type: 'get',
            url: askUrl,
            headers: {
                'x-auth-hash': g_fvpAuthHash,
                "Accept": "application/vnd.fvc.v1+xml",
                "x-auth-timestamp": g_fvpTimeStamp
            },
            ifModified: !force_request,
            timeout: g_requestTimeout,
            success: function (data, status, xhr) {
                DBG_ALWAYS("sendCategoryFiltered Ask success!!!");
                if (checkNotModifiedRequest(xhr, cache_name, callback, function () {
                        http_adapter.getCategoryFiltered(groupId, callback, true);
                    })) {
                    DBG_ERROR("sendCategoryFiltered 304 status");
                    return;
                }
                try {
                    delete mds_error_request[askUrl];
                    parserRecommendationsFiltered(data, function (data) {
                        if(!data) {
                            data = "noData";
                        }
                        cache_adapter.setCache(cache_name, data, getExpiresTime(xhr));
                        if(data == "noData") {
                            data = null;
                        }
                        callback(data);
                    });
                } catch (e) {
                    DBG_ALWAYS("sendCategoryFiltered Ask success!!!:" + e.message);
                    callback([]);
                }

            },
            error: function (xhr, textStatus, errorThrown) {
                DBG_ALWAYS("sendCategoryFiltered Ask fail!!!" + xhr.status);
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleMDSErrCode(xhr.status,RetryAfter,0,0);
                if(0 == timeout)
                {
                    fvpAuth(function(){
                        http_adapter.getCategoryFiltered(groupId, callback,false);
                    });
                }else if(timeout>0){
                    if(xhr.status == FVPHTTPSTATUS.AUTHENTICATION_REQUIRED){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(null);},timeout*1000);
                    }
                    mds_error_request[askUrl] = getUtcTime()+timeout;
                    if (null != callback) callback([]);
                }
                else{
                    if(timeout == -2000){
                        mds_error_request[askUrl] = -1;
                    }
                    if (null != callback) callback([]);
                }
            }
        });
    };

    function handleMDSErrCode(errCode,RetryAfter,lastErrcode,lastTimeout){
        DBG_ERROR("handleMDSErrCode:"+RetryAfter);
        var timeout = -1;
        if(!!RetryAfter){
            timeout =  parseInt(RetryAfter);
        }
        if(timeout>0){
            timeout = timeout + 3;
        }
        switch (errCode){
            case FVPHTTPSTATUS.BAD_REQUEST:
            case FVPHTTPSTATUS.NOT_ACCEPTABLE:
            {
                //error code 400:The client credentials presented by the Device were either invalid or missing altogether.
                //error code 406:The resource identified by the request is not capable of generating a response entity with the content characteristics in the Accept headers sent in the request.
                timeout = -2000;
            }
                break;
            case FVPHTTPSTATUS.AUTHENTICATION_REQUIRED:
            {
                //error code 401:The client credentials presented by the Device were either invalid or missing altogether.
                //retry auth as Retry-After, if no Retry-After, auth immediately
                if(0 > timeout)
                {
                    timeout = 0;
                }
            }
                break;
            case FVPHTTPSTATUS.FORBIDDEN:
            case FVPHTTPSTATUS.NOT_FOUND:
            {
                //error code 403:The authenticated user does not have permission to access this endpoint.
                //error code 404:The requested resource was not found.
                //retry auth & request, if errcode still 403,404, 24hous later retry
                //if(lastErrcode == errCode)
                {
                    timeout = (24*3600);
                }
                //else
                {
                    //    timeout = 0;
                }
            }
                break;
            case FVPHTTPSTATUS.SYSTEM_ERROR:
            case FVPHTTPSTATUS.BAD_GATEWAY:
            case FVPHTTPSTATUS.GATEWAY_TIMEOUT:
            {
                //error code 500:There was an error processing the request and it could not be completed at this time.
                //error code 504:The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
                //retry continues, max 104857600 ms
                /*            if(lastErrcode == errCode)
                 {
                 timeout = lastTimeout + (long)10;
                 }
                 else
                 {
                 timeout = 10;
                 }*/
                timeout = 104857;
            }
                break;
            case FVPHTTPSTATUS.SERVICE_UNAVAILABLE:
            {
                //error code 503:The Metadata Delivery System is unavailable or experiencing high load, and is unable to accept the transaction at this time.
                //if have not Retry-After, retry continues, max 104857600 ms
                if(0 >= timeout)
                {
                    /*             if(lastErrcode == errCode)
                     {
                     timeout = lastTimeout + (long)10;
                     }
                     else
                     {
                     timeout = 10;
                     }*/
                    timeout = 104857;
                }
            }
                break;
            case FVPHTTPSTATUS.MOVED_PERMANENTLY:
            case FVPHTTPSTATUS.MOVED_TEMPORARILY:
            //error code 301:The redirect URL SHALL be indicated in the Location HTTP response header. The device SHOULD cache the new URL.
            //error code 302:The redirect URL SHALL be indicated in the Location HTTP response header.
            default:
            {
                timeout = -1;
            }
                break;
        }

        return timeout;
    }
    var reAuthStatus = [401, 403, 404];
    var g_fvpAuthHash = null;
    var g_fvpTimeStamp = null;
    var g_fvpBaseUrl = null;
    var g_requestTimeout = 99 * 1000;
    var g_HttpStatus = {
        "lastErrcode":0,
        "lastTimeout":3,
        "nextAuthTime":0,
        "authTimer":0
    };

    function getUtcTime(){
        return new Date().valueOf()/ GLOBAL.MILLIBASE;
    }
    function handleAuthErrCode(errCode,RetryAfter,lastErrcode,lastTimeout){
        DBG_ERROR("handleMDSErrCode:"+RetryAfter);
        var timeout = -1;
        if(!!RetryAfter){
            timeout =  parseInt(RetryAfter);
        }
        if(timeout>0){
            timeout = timeout + 3;
        }
        switch (errCode){
            case FVPHTTPSTATUS.NOT_MODIFIED:
                //error code 304:The resource has not been modified.
                //It is already the newest data
                //no retry
                timeout = -2000;
                break;
            case FVPHTTPSTATUS.BAD_REQUEST:
            case FVPHTTPSTATUS.NOT_ACCEPTABLE:
                //error code 400:The client credentials presented by the Device were either invalid or missing altogether.
                //error code 406:The resource identified by the request is not capable of generating a response entity with the content characteristics in the Accept headers sent in the request.
                //no retry
                timeout = -2000;
                break;
            case FVPHTTPSTATUS.AUTHENTICATION_REQUIRED:
                //error code 401:The client credentials presented by the Device were either invalid or missing altogether.
                //retry as Retry-After
                if(0 > timeout)
                {
                    timeout = 0;
                }
                break;
            case FVPHTTPSTATUS.FORBIDDEN:
            case FVPHTTPSTATUS.NOT_FOUND:
                //error code 403:The authenticated user does not have permission to access this endpoint.
                //error code 404:The requested resource was not found.
                //retry & 24hous later retry
                if(lastErrcode == errCode)
                {
                    timeout = (24*3600);
                }
                else
                {
                    timeout = 0;
                }
                break;
            case FVPHTTPSTATUS.SYSTEM_ERROR:
            case FVPHTTPSTATUS.BAD_GATEWAY:
            case FVPHTTPSTATUS.GATEWAY_TIMEOUT:
                //error code 500:There was an error processing the request and it could not be completed at this time.
                //error code 504:The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
                //retry continues, max 104857600 ms
//                if(lastErrcode == errCode)
//                {
//                    timeout = lastTimeout + (2*3600);
//                }
//                else
//                {
                    timeout = 104857;
//                }
                break;
            case FVPHTTPSTATUS.SERVICE_UNAVAILABLE:
                //error code 503:The Metadata Delivery System is unavailable or experiencing high load, and is unable to accept the transaction at this time.
                //if have not Retry-After, retry continues, max 104857600 ms
                if(0 >= timeout)
                {
//                    if(lastErrcode == errCode)
//                    {
//                        timeout = lastTimeout + (2*3600);
//                    }
//                    else
//                    {
                        timeout = 104857;
//                    }
                }
                break;
            default:
                timeout = -1;
                break;
        }

        return timeout;
    }
    var fvpAuth = function (callback) {
        clearTimeout(g_HttpStatus.authTimer);
        var authUrl = freeview_util.getAuthUrl();
        var thisAuthTime = getUtcTime();
        DBG_INFO("http_adapter http request : http_adapter.fvpAuth:" + authUrl);
        DBG_ALWAYS("g_HttpStatus.nextAuthTime:" + g_HttpStatus.nextAuthTime);
        DBG_ALWAYS("getUtcTime():" + thisAuthTime);
        if((thisAuthTime - lastAuthTime)  < 35)  { //last Auth in 30s
            if(!authBackStatus) {
                DBG_ERROR("(thisAuthTime - lastAuthTime)<35 && !authBackStatus, and return");
                return;
            }
        }
        if(g_HttpStatus.nextAuthTime < 0 || thisAuthTime < g_HttpStatus.nextAuthTime){
            DBG_ERROR("http_adapter.fvpAuth forbid request again1");
            callback(false);
            return;
        }
        lastAuthTime = thisAuthTime;
        authBackStatus = false;
        jQuery.ajax({
            type: 'HEAD',
            url: authUrl,
            timeout: g_requestTimeout,
            headers: {
                "Accept": "application/vnd.fvc.v1+xml"
            },
            success: function (data, status, xhr) {
                authBackStatus = true;
                DBG_ALWAYS("fvpAuth Ask success!!!");
                try {
                    g_fvpTimeStamp = xhr.getResponseHeader("x-auth-timestamp");
                    g_fvpAuthHash = xhr.getResponseHeader("x-auth-hash");
                    g_fvpBaseUrl = xhr.getResponseHeader("x-baseurl");
                    g_HttpStatus.nextAuthTime = 0;
                    if (null != callback) callback(true);
                } catch (e) {
                    DBG_ERROR("fvpAuth Ask success4!!!:" + e.message);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                authBackStatus = true;
                DBG_ALWAYS("fvpAuth Ask fail!!!" + xhr.status);
                var RetryAfter = -1;
                RetryAfter = xhr.getResponseHeader("Retry-After");
                var timeout = handleAuthErrCode(xhr.status,RetryAfter,g_HttpStatus.lastErrcode,g_HttpStatus.lastTimeout);
                g_HttpStatus.lastErrcode = xhr.status;
                g_HttpStatus.lastTimeout = timeout;
                DBG_ALWAYS("fvpAuth Ask fail!!! timeout" + timeout);
                if(0 == timeout)
                {
                    fvpAuth(callback);
                }else if(timeout>0){
                    g_HttpStatus.nextAuthTime = getUtcTime() + timeout;
                    if (null != callback) callback(false);
                    clearTimeout(g_HttpStatus.authTimer);
                    g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(callback);},timeout*1000);
                }
                else{
                    if(timeout == -2000){
                        g_HttpStatus.nextAuthTime = -1;
                        if (null != callback) callback(false);
                    }
                    if(timeout == -1){
                        clearTimeout(g_HttpStatus.authTimer);
                        g_HttpStatus.authTimer = setTimeout(function(){fvpAuth(callback);},3000);
                    }
//                    if (null != callback) callback(false);
                }
            }
        });
    };
    var checkBaseUrl = function () {
        if(!g_fvpBaseUrl){
            DBG_ERROR("checkBaseUrl NO AUTH");
        }
        return !!g_fvpBaseUrl && !!g_fvpAuthHash && !!g_fvpTimeStamp;
    };
    var parserAppList = function (data, time_stamp, callback) {
        DBG_INFO("http_adapter.parserAppList");
        try {
            var appList = [];
            var promotedApp = [], otherApp = [];
            try {
                var freeviewObj = getFreeviewOBJ(FreeviewAPP.GroupInformation, data);
                var groups = getFreeviewGroups(freeviewObj);
                for (var i = 0; i < freeviewObj.length; i++) {
                    var item = freeviewObj[i];
//                    if (item.icon) {
//                        item.icon += "?w=368";
//                    }
                    if (isFreeviewGroup(item)) continue;
                    if (isFreeviewPromoted(groups, item)) {
                        promotedApp.push(item);
                    }
                    else if (isFreeviewOther(groups, item)) {
                        item.index = parseInt(item.index) + 1000;
                        otherApp.push(item);
                    }
                    item.time_stamp = time_stamp;
                }
                appList = promotedApp.concat(otherApp);
                DBG_INFO("appList:" + JSON.stringify(appList), DebugLevel.ERROR);
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
            DBG_INFO("parserAppList length = " + appList.length);
            callback(appList);
        } catch (e) {
            DBG_INFO("error in parserAppList: " + e.message, DebugLevel.ERROR);
            callback([]);
        }
    };
    var parserSearchSuggestions = function (data, callback) {
        DBG_INFO("http_adapter.parserSearchSuggestions");
        try {
            var Suggestions = [];
            try {
                var freeviewObj = getNodesByKey("Suggestion", data);
                for (var i = 0; i < freeviewObj.length; i++) {
                    Suggestions.push(freeviewObj[i].textContent);
                }
//                DBG_INFO("Suggestions:" + JSON.stringify(Suggestions), DebugLevel.ERROR);
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
            if (typeof callback == "function") {
                callback(Suggestions);
            }
        } catch (e) {
            DBG_INFO("error in parserAppList: " + e.message, DebugLevel.ERROR);
            if (typeof callback == "function") {
                callback([]);
            }
        }
    };
    var parserSearchResults = function (data, callback) {
        DBG_INFO("http_adapter.parserSearchResults");
        var ProgramData = [];
        var GroupData = [];
        var OnDemandData = [];
        try {
            ProgramData = getSearchProgramOBJ(FreeviewAPP.ProgramInformation, data);
            GroupData = getSearchGroupInformationOBJ(FreeviewAPP.GroupInformation, data);
            OnDemandData = getSearchOnDemandProgramOBJ(FreeviewAPP.OnDemandProgram, data);
//            DBG_INFO("length:"+ProgramData.length+" ProgramData:"+JSON.stringify(ProgramData));
//            DBG_INFO("length:"+GroupData.length+" GroupData:"+JSON.stringify(GroupData));

//            DBG_ALWAYS("length:"+OnDemandData.length+" OnDemandData:"+JSON.stringify(OnDemandData));
            for (var i = 0; i < ProgramData.length; i++) {
                if (ProgramData[i].programId == OnDemandData[i].Program) {
                    ProgramData[i].duration = OnDemandData[i].duration;
                    ProgramData[i].ProgramURL = OnDemandData[i].ProgramURL;
                    ProgramData[i].serviceIdRef = OnDemandData[i].serviceIdRef;
                }
                ProgramData[i].icon += "?w=368";
            }
        } catch (e) {
            DBG_INFO("error in parserSearchResults: " + e.message, DebugLevel.ERROR);
        }
        if (typeof callback == "function") {
            callback(ProgramData, GroupData);
        }
    };
    var parserRecommendationsFiltered = function (data, callback) {
        DBG_INFO("parserRecommendationsFiltered");
        var ProgramData = [];
        var GroupData = [];
        var OnDemandData = [];
        try {
            ProgramData = getSearchProgramOBJ(FreeviewAPP.ProgramInformation, data);
//            GroupData = getSearchGroupInformationOBJ(FreeviewAPP.GroupInformation, data);
            OnDemandData = getSearchOnDemandProgramOBJ(FreeviewAPP.OnDemandProgram, data);
//            DBG_INFO("length:"+ProgramData.length+" ProgramData:"+JSON.stringify(ProgramData));
//            DBG_ALWAYS("length:"+GroupData.length+" GroupData:"+JSON.stringify(GroupData));

//            DBG_INFO("length:"+OnDemandData.length+" OnDemandData:"+JSON.stringify(OnDemandData));
            for (var i = 0; i < ProgramData.length; i++) {
                for(var j=0;j<OnDemandData.length;j++){
                    if (ProgramData[i].programId == OnDemandData[j].Program) {
                        ProgramData[i].duration = OnDemandData[j].duration;
                        ProgramData[i].ProgramURL = OnDemandData[j].ProgramURL;
                        ProgramData[i].serviceIdRef = OnDemandData[j].serviceIdRef;
                        break;
                    }
                }
                ProgramData[i].icon += "?w=368";
            }
        } catch (e) {
            DBG_INFO("error in parserRecommendationsFiltered: " + e.message, DebugLevel.ERROR);
        }
        if (typeof callback == "function") {
            callback(ProgramData);
        }

    };
    var parserRecommendationsCategories = function (data, callback) {
        DBG_INFO("http_adapter.parserRecommendationsCategories");
        try {
            var appList = [];
            var tmpList = [];
            try {
                var freeviewObj = getFreeviewOBJ(FreeviewAPP.GroupInformation, data);
//            var groups = getFreeviewGroups(freeviewObj);
                for (var i = 0; i < freeviewObj.length; i++) {
                    var item = freeviewObj[i];
                    if (isFreeviewGroup(item) && ("" == item.memberOf && -1 == item.index)) continue;
                    if ("" == item.title) continue;
                    if(jQuery.inArray(item.groupId,tmpList)==-1){
                        appList.push(item);
                    }
                    tmpList.push(item.groupId);
                }
//                DBG_INFO("appList:" + JSON.stringify(appList), DebugLevel.ERROR);
                if (typeof callback == "function") {
                    callback(appList);
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }

        } catch (e) {
            DBG_INFO("error in parserAppList: " + e.message, DebugLevel.ERROR);
        }
    };
    var parserAppPlayerInfo = function (data, callback) {
        DBG_INFO("http_adapter.parserAppPlayerInfo");
        var appInfo = getAitObj(data);
        DBG_INFO("parserAppPlayerInfo info.length = " + appInfo.length);
        var ret = [];
        for (var i = 0; i < appInfo.length; i++) {
            if (getPlayerAvailablility(appInfo[i])) {
                ret.push(appInfo[i]);
            }
        }
        callback(getHighPriorityItem(ret));
    };

    var parserChannelList = function (data, time, callback) {
        DBG_INFO("http_adapter.parserChannelList");
        var channel_list = getServiceTableObj(data);
        DBG_INFO("parserChannelList length = " + channel_list.length);
        for (var i = 0; i < channel_list.length; i++) {
            channel_list[i].icon += "?w=128";
            channel_list[i].time_stamp = time;
            if (channel_list[i].genre.indexOf(freeview_util.ENUM.ENHANCED_ONDEMAND) >= 0) {
                channel_list[i].service_type = freeview_util.ENUM.ENHANCED_ONDEMAND;
            } else if (channel_list[i].genre.indexOf(freeview_util.ENUM.ENHANCED) >= 0) {
                channel_list[i].service_type = freeview_util.ENUM.ENHANCED;
            } else {
                channel_list[i].service_type = freeview_util.ENUM.UNENHANCED;
            }
        }
        callback(channel_list, time);
    };
    var parserScheduleData = function (data, time, callback) {
        DBG_INFO("http_adapter.parserScheduleData");
        var programs = getProgramInformationTableObj(data);
        var info = getProgramLocationTableObj(data);
        var schedule = info.schedule;
        var ondemand = info.ondemand;
        var events = [];
        if (schedule && schedule.events) {
            events = schedule.events;
            for (var i = 0; i < events.length; i++) {
                events[i].serviceId = schedule.serviceId;
                events[i].time_stamp = time;
                for (var j = 0; j < programs.length; j++) {
                    if (events[i].programId == programs[j].programId) {
                        events[i].main_title = programs[j].main_title;
                        events[i].secondary_title = programs[j].secondary_title;
                        events[i].synopsis = !!programs[j].long_synopsis ? (programs[j].long_synopsis) :
                            (!!programs[j].medium_synopsis ? programs[j].medium_synopsis : programs[j].short_synopsis);
                        events[i].genre = getIDByGenreString(programs[j].genre);
                        // events[i].icon =  programs[j].icon + "?w=368";
                        events[i].url =  programs[j].url;
                        break;
                    }
                }
                if (ondemand) {
                    for (var k = 0; k < ondemand.length; k++) {
                        if (events[i].programId == ondemand[k].programId) {
                            events[i].programUrl = ondemand[k].programUrl;
                            events[i].auxiliaryURL = ondemand[k].auxiliaryURL;
                            events[i].media_availability = ondemand[k].media_availability;
                            events[i].fepg_availability = ondemand[k].fepg_availability;
                            // events[i].duration = ondemand[k].duration;
                            events[i].startAvailable = ondemand[k].startAvailable;
                            events[i].endAvailable = ondemand[k].endAvailable;
                            events[i].video_desc = ondemand[k].video_desc;
                            events[i].audio_desc = ondemand[k].audio_desc;
                            events[i].subtitle = ondemand[k].subtitle;
                            events[i].program_ad = ondemand[k].program_ad;
                            break;
                        }
                    }
                }
                if (!!events[i].video_desc && events[i].video_desc.length > 0) {
                    if (events[i].video_desc == "SD") {
                        events[i].hd_or_sd = 0;
                    } else {
                        events[i].hd_or_sd = 1;
                    }
                } else {
                    events[i].hd_or_sd = 0;
                }

            }
        }

        DBG_INFO("parserScheduleData length = " + events.length);
        if (typeof callback == "function") {
            callback(events, time);
        }
    };
    var parserTemplateData = function (data, exp, callback) {
        DBG_INFO("http_adapter.parserTemplateData");
        var templateInfo = getAitObj(data);
        var ret = [];
        for (var i = 0; i < templateInfo.length; i++) {
            if (getPlayerAvailablility(templateInfo[i])) {
                ret.push(templateInfo[i]);
            }
        }
        callback(getHighPriorityItem(ret), exp);
    };
    var parserProgramDetail = function (data, callback) {
        DBG_INFO("http_adapter.parserProgramDetail");
        var program = getProgramInformationTableObj(data)[0];
        var info = getProgramLocationTableObj(data);
        var ondemand = {};
        if (info) {
            ondemand = info.ondemand[0];
        }
        if (program.icon) {
            program.icon += "?w=320";
        }

        //merge data
        if (ondemand) {
            program.video_desc = ondemand.video_desc;
            program.audio_desc = ondemand.audio_desc;
            program.subtitle = ondemand.subtitle;
            program.program_ad = ondemand.program_ad;
            program.programUrl = ondemand.programUrl;
            program.auxiliaryURL = ondemand.auxiliaryURL;
            program.duration = ondemand.duration;
            program.fepg_availability = ondemand.fepg_availability;
            program.media_availability = ondemand.media_availability;
            program.startAvailable = ondemand.startAvailable;
            program.endAvailable = ondemand.endAvailable;
            program.signFlag = ondemand.signFlag;
        }
        if (!!program.video_desc && program.video_desc.length > 0) {
            if (program.video_desc == "SD") {
                program.hd_or_sd = 0;
            } else {
                program.hd_or_sd = 1;
            }
        } else {
            program.hd_or_sd = 0;
        }
        callback(program);
    };
    var parserContentAitData = function (data, exp, callback) {
        DBG_INFO("http_adapter.parserContentAitData");
        var contentInfo = getAitObj(data);
        var ret = [];
        for (var i = 0; i < contentInfo.length; i++) {
            if (getPlayerAvailablility(contentInfo[i])) {
                ret.push(contentInfo[i]);
            }
        }
        callback(getHighPriorityItem(ret), exp);
    };
    var getIDByGenreString = function (genre) {
        var ret = 0;
        switch (genre) {
            case "Other":
                ret = 0;
                break;
            case "Movie":
                ret = 16;
                break;
            case "News":
                ret = 32;
                break;
            case "Factual":
                ret = 112;
                break;
            case "Entertainment":
                ret = 49;
                break;
            case "Shows":
                ret = 48;
                break;
            case "Music":
                ret = 96;
                break;
            case "Sport":
                ret = 64;
                break;
            case "Kids":
                ret = 80;
                break;
            case "Education":
                ret = 144;
                break;
            case "Lifestyle":
                ret = 160;
                break;
            case "Drama":
                ret = 17;
                break;
            case "Unclassified":
                ret = 0;
                break;
            default:
                ret = -2;
                break;
        }
        return ret;
    };
    var getHighPriorityItem = function (data) {
        var ret = null;
        for (var i = 0; i < data.length; i++) {
            if (ret) {
                if (parseInt(ret.priority) > parseInt(data[i].priority)) {
                    ret = data[i];
                }
            } else {
                ret = data[i];
            }
        }
        return ret;
    };
    var getPlayerAvailablility = function (info) {
        return !(info.type !== "application/vnd.hbbtv.xhtml+xml"
            || info.profile != 0
            || info.versionMinor > 3 || info.versionMajor != 1 || info.versionMicro != 1);
    };
    var getExpiresTime = function (xhr) {
        var expires_time = 0;
        var last_modified = Date.parse(xhr.getResponseHeader("Last-Modified"));
        if (isNaN(last_modified)) {
            last_modified = new Date().valueOf();
        }
        last_modified = last_modified / GLOBAL.MILLIBASE;
        var max_age_tmp = xhr.getResponseHeader("Cache-Control");
        var max_age = NaN;
        if (typeof max_age_tmp == "string") {
            max_age = parseInt(max_age_tmp.substr(max_age_tmp.indexOf("=")+1));
        }
        //1.use Cache-Control
        if(!isNaN(max_age)) {
            expires_time = new Date().valueOf() / GLOBAL.MILLIBASE + max_age;
        } else {
            //2.if no Cache-Control, use Expires
            expires_time = Date.parse(xhr.getResponseHeader("Expires"));
            if (!isNaN(expires_time)) {
                expires_time = expires_time / GLOBAL.MILLIBASE;
            } else {
                //3.neither, use 24h as default value
                max_age = 86400;
                expires_time = last_modified + max_age;
            }
        }
        return expires_time;
    };
    var getNidsString = function (nids) {
        var ret = "";
        if (nids.length && nids.length > 0) {
            ret = "nids[]=" + nids[0];
            for (var i = 1; i < nids.length; i++) {
                ret += "&nids[]=" + nids[i];
            }
        }
        return ret;
    };
    var generateAitUrl = function (url, nids, lloc) {
        if (url.indexOf("?") >= 0) {
            url += "&";
        } else {
            url += "?";
        }
        url += getNidsString(nids);
        if (lloc) {
            url += "&lloc=" + lloc;
        }
        return url;
    }
    /**
     * if status eq 400,406 push list forbidRequestList
     * @param status
     * @param askUrl
     */
    var putForbidRequestList = function(status, askUrl) {
        DBG_ERROR("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD:"+askUrl+",status="+status);
        if(status == 400 || status == 406) {
            forbidRequestList.push(askUrl);
        }
    }
    /**
     * check the http status of not modified
     * @param xhr the xhr obj
     * @param cache_key the key of the data in cache
     * @param callback the callback after the data gotted
     * @param force_request if the data is missing in cache, force to reload it
     * @returns {boolean} status is notmodified or not
     */
    var checkNotModifiedRequest = function (xhr, cache_key, callback, force_request) {
        if (xhr.status == 304) {
            cache_adapter.touchCache(cache_key, getExpiresTime(xhr));
            var cache = cache_adapter.getCache(cache_key);
            if (!!cache) {
                if(cache == "noData") {
                    cache = null;
                }

                if (callback) {
                    DBG_INFO("checkNotModifiedRequest get data from cache");
                    callback(cache);
                }
            } else {
                if (force_request) {
                    DBG_INFO("checkNotModifiedRequest force to reload data from http");
                    force_request();
                }
            }
            return true;
        }
        return false;
    }


    function arrToStr(defs) {
        var str = "";
        for (key in defs) {
            str += " " + key + " = " + defs[key] + ", ";
        }
        return str;
    }

})();