/**
 * Created by yangcheng3 on 2016-12-20.
 */
var freeview_util = {};
(function () {
    freeview_util.config = {
        TASK_SLEEP: 1*1000,
        CHANNELS_PER_PAGE: 5,
        GENERATE_QUEUE_ONCE: true,
        USE_LINQ: true,
        MAGIC_TIME: 1494258156
    };
    freeview_util.ENUM = {
        UNENHANCED: "unenhanced",
        ENHANCED: "enhanced",
        ENHANCED_ONDEMAND: "enhanced_ondemand"
    };
    freeview_util.CONST = {
        NO_DATA: "no data"
    };
    freeview_util.checkNetworkConnected = function () {
        var ret = tv ? model.network.getEnumNetworkAvailable() : 0;
        if (!!ret && request_time >= 0) {
            syncDSTFromNetwork();
        }
        return ret; //1 success  0 fail;
    };
    var request_time = 0;
    var requesting = false;
    var syncDSTFromNetwork = function () {
        var request_dst = function () {
            if (requesting) {
                DBG_ERROR("network_dst request_dst is sending, just cancel this request");
                return;
            }
            clearTimeout(timer);
            DBG_INFO("network_dst send geo request");
            jQuery.ajax({
                type: 'get',
                url: "https://freegeoip.net/json/",
                timeout: 20000,
                success: function (data, status, xhr) {
                    var geo = JSON.parse(xhr.responseText);
                    DBG_INFO("network_dst send tz request");
                    $.ajax({
                        type: 'get',
                        url: "http://api.timezonedb.com/v2/get-time-zone?key=GHS0EBXPP3H6&format=json&by=zone&zone=" + geo.time_zone,
                        timeout: 20000,
                        success: function (data, status, xhr) {
                            var tz = JSON.parse(xhr.responseText);
                            request_time = -2;
                            requesting = false;
                            try {
                                DBG_INFO("network_dst " + objToString(tz));
                                var ret = parseInt(tz.dst);
                                if (!!isNaN(ret)) {
                                    ret = 0;
                                }
                                model.timerfunc.setDSTFromNetwork(ret);
                            } catch (ex) {
                                DBG_ERROR("network_dst interface error" + ex.message);
                            }
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            DBG_ERROR("network_dst tz request error " + textStatus);
                            onRequestErr();
                        }
                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    DBG_ERROR("network_dst geo request error " + textStatus);
                    onRequestErr();
                }
            });
            requesting = true;
        };
        var onRequestErr = function () {
            request_time++;
            requesting = false;
            DBG_INFO("network_dst onRequestErr request_time=" + request_time);
            if (request_time > 3) {
                DBG_ERROR("network_dst out of retry time");
                request_time = 0;
                return;
            }
            timer = setTimeout(request_dst, 1000*Math.pow(2,request_time));
        };
        var timer = null;
        request_dst();
    };
    freeview_util.getNids = function () {
        var nids = livetvchlist.getNetworkIds();
        if (!nids || nids.length == 0) {
            DBG_ERROR("getNids, there is no nid, use default value");
            nids = [65535];
        }
        return nids;
    };
    freeview_util.getAuthUrl = function () {
        var testMdsUrl = Hisense.File.read("test_mds", 1);
        if (isNaN(testMdsUrl)) {
            testMdsUrl = testMdsUrl.split('\n')[0];
            DBG_INFO("getAuthUrl --> got overridden test mds url: " + testMdsUrl);
            return testMdsUrl;
        }
        try {
            testMdsUrl = model.tvservice.getAuthUrl();
        }
        catch (ex) {
            DBG_ERROR("getAuthUrl  model.tvservice.getAuthUrl() error=" + ex.message);
        }
        if (!!testMdsUrl && testMdsUrl.length > 0) {
            DBG_INFO("getAuthUrl get auth url from ts: " + testMdsUrl);
            return testMdsUrl;
        }
        DBG_INFO("getAuthUrl get nothing, use default value");
        // return "https://fvp-auth.testing.digitaluk.co.uk/cert";
        return "https://auth-ctv.digitaluk.co.uk/";
    };
    freeview_util.checkDTV = function () {
        var curSource = model.source.getCurrentSource();
        DBG_ERROR("@@@@@@@@@@@@@@@@@ curSource =" + curSource);
        DBG_ERROR("@@@@@@@@@@@@@@@@@  SourceList.TV =" +  SourceList.TV);
        DBG_ERROR("@@@@@@@@@@@@@@@@@ dtvPaused =" + dtvPaused);
       //  return (curSource == SourceList.TV) && !dtvPaused;
        return curSource == 0;//
    };
    freeview_util.getCurrentChannelSid = function () {
        var sid = -1;
        var current_channel = livetvmain.getCurrentChannelInfo(); //liveTV.getCurrentChannelInfo();
        if (current_channel){
            sid = current_channel.serviceId;
        }
        DBG_INFO("freeview_util.getCurrentChannelSid " + sid);
        return sid;
    };
    freeview_util.getCurrentTime = function () {
        return getSYSLongTime();
    };
    freeview_util.calculateUpperTime = function (time) {
        //suppose 12-hour
        var date = new Date(getLocalTimeByUTC(time) * GLOBAL.MILLIBASE);
        var utc_12 = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 12) / GLOBAL.MILLIBASE;
        var utc_0 = utc_12 - 12 * 3600;
        return (time == utc_0) ? utc_0 : ((time > utc_12) ? utc_12 + 12 * 3600 : utc_12);
    };
    freeview_util.calculateLowerTime = function (time) {
        //suppose 12-hour
        var date = new Date(getLocalTimeByUTC(time) * GLOBAL.MILLIBASE);
        var utc_12 = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 12) / GLOBAL.MILLIBASE;
        var utc_0 = utc_12 - 12 * 3600;
        return (time == utc_0) ? utc_0 : ((time < utc_12) ? utc_0 : utc_12);
    };
    freeview_util.getProgramAvailablility = function (end_time, start_available, end_available, media_availablity, fepg_availablity, current_time, auxiliary) {
        var ret = AVLFlag.NOT_AVAILABLE;
        if(!auxiliary) return ret;

        try {
            if (end_time <= current_time || !!fepg_availablity) {
                if (current_time >= start_available && current_time < end_available) {
                    ret = (!!media_availablity) ? AVLFlag.AVAILABLE : AVLFlag.COMMING_SOON;
                } else if (start_available < (current_time + 7200) && current_time < end_available) {
                    ret = AVLFlag.COMMING_SOON;
                }
            }
        } catch (ex) {
            DBG_ERROR("freeview_util.getProgramAvailablility err = " + ex.message);
        }
        return ret;
    };
    var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');

    freeview_util.hash = function (input) {
        var hash = 5381;
        var i = input.length - 1;

        if(typeof input == 'string'){
            for (; i > -1; i--) {
                hash += (hash << 5) + input.charCodeAt(i);
            }
        }
        else{
            for (; i > -1; i--) {
                hash += (hash << 5) + input[i];
            }
        }
        var value = hash & 0x7FFFFFFF;

        var retValue = '';
        do{
            retValue += I64BIT_TABLE[value & 0x3F];
        }
        while(value >>= 6);
        return retValue;
    };
    freeview_util.getDefaultAppIndex = function (groupId) {
        var order_12339 = {
            "crid://bbc.co.uk/nitro/application/ondemand/iplayer": 1,
            "crid://syndication.itv.com/services/ITVPlayer": 2,
            "crid://www.channel4.com/vps/application/ondemand/all4": 3,
            "crid://channel5.com/services/vod/player": 4,
            "crid://www.uktv.co.uk/application/ondemand/uktvplay": 1001,
            "crid://freeview.co.uk/application/ondemand/app": 1002,
            "crid://bbc.co.uk/nitro/application/ondemand/news": 1003,
            "crid://bbc.co.uk/nitro/application/ondemand/sport": 1004
        };
        var order_12360 = {
            "crid://bbc.co.uk/nitro/application/ondemand/iplayer": 1,
            "crid://www.stv.tv/mas/application/ondemand/stvplayer": 2,
            "crid://www.channel4.com/vps/application/ondemand/all4": 3,
            "crid://channel5.com/services/vod/player": 4,
            "crid://syndication.itv.com/services/ITVPlayer": 5,
            "crid://www.uktv.co.uk/application/ondemand/uktvplay": 1001,
            "crid://freeview.co.uk/application/ondemand/app": 1002,
            "crid://bbc.co.uk/nitro/application/ondemand/news": 1003,
            "crid://bbc.co.uk/nitro/application/ondemand/sport": 1004
        };
        var order_65535 = {
            "crid://bbc.co.uk/nitro/application/ondemand/iplayer": 1,
            "crid://syndication.itv.com/services/ITVPlayer": 2,
            "crid://www.channel4.com/vps/application/ondemand/all4": 3,
            "crid://channel5.com/services/vod/player": 4,
            "crid://www.uktv.co.uk/application/ondemand/uktvplay": 1001,
            "crid://freeview.co.uk/application/ondemand/app": 1002,
            "crid://www.stv.tv/mas/application/ondemand/stvplayer": 1003,
            "crid://bbc.co.uk/nitro/application/ondemand/news": 1004,
            "crid://bbc.co.uk/nitro/application/ondemand/sport": 1005
        };
        var obj={};
        //TODO
        var nids = freeview_util.getNids();
        if (nids.indexOf("12360")) {
            //for scotland
            obj = order_12360;
        } else if (nids.indexOf("12339")){
            //for england
            obj = order_12339;
        } else {
            obj = order_65535;
        }
        return obj[groupId];
    };
})();
