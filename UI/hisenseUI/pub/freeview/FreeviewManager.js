/**
 * Created by yangcheng3 on 2016-12-20.
 */
var GLOBAL = {
    MILLIBASE:1000,
    TIMEZONE_SECONDS: 8 * 3600,
    DST_SECONDS: 0
}
function FVPHTTPSTATUS() {

}
FVPHTTPSTATUS.OK = 200;
FVPHTTPSTATUS.MOVED_PERMANENTLY = 301;
FVPHTTPSTATUS.MOVED_TEMPORARILY         =    302;
FVPHTTPSTATUS.NOT_MODIFIED              =    304; //The resource has not been modified.
FVPHTTPSTATUS.BAD_REQUEST               =    400;
FVPHTTPSTATUS.AUTHENTICATION_REQUIRED   =    401;
FVPHTTPSTATUS.FORBIDDEN                 =    403;
FVPHTTPSTATUS.NOT_FOUND                 =    404;
FVPHTTPSTATUS.NOT_ACCEPTABLE            =    406;
FVPHTTPSTATUS.SYSTEM_ERROR              =    500;
FVPHTTPSTATUS.BAD_GATEWAY               =    502;
FVPHTTPSTATUS.SERVICE_UNAVAILABLE       =    503;
FVPHTTPSTATUS.GATEWAY_TIMEOUT           =    504;

var freeview_manager = {};
(function () {
    var oprtData = {
        allChannels:[]
    };
    /* ========================================
     * ===========public interfaces============
     * ========================================
     */
    /**
     * init freeview manager
     */
    freeview_manager.init = function () {
        if(!tv) return;
        if (manager_state != STATE.IDLE) {
            DBG_INFO("freeview_manager has been inited/in init status, just return[" + manager_state + "]");
            return;
        }
        if (isInBackgroundMode()) {
            DBG_INFO("freeview_manager TV is in BGM, do not init freeview!");
            return;
        }
        manager_state = STATE.INIT;
        clearTimeout(init_timer);
        init_timer = null;
        DBG_INFO("freeview_manager: init");
        var pre_init_check_failed = function () {
            var ret = false;
            var net_state = false;
            try {
                net_state = freeview_util.checkNetworkConnected();
                if (!livetvchlist || livetvchlist.channelListInitFlag()) {
                    DBG_INFO("freeview init: channel list is not ready!");
                    ret = true;
                } else {
                    nids = freeview_util.getNids();
                    ret = (!nids || !nids.length);
                DBG_INFO("freeview init: nids is ready["+ !ret +"]");
                DBG_INFO("freeview init: net is ready["+ net_state +"]");

                ret = ret || !net_state || (new Date().valueOf()/ GLOBAL.MILLIBASE < freeview_util.config.MAGIC_TIME);
                }
            } catch(e) {
                ret = true;
                manager_state = STATE.INIT;
            } finally {
                return ret;
            }
        };
        if (pre_init_check_failed()) {
            DBG_INFO("freeview_manager: env is not ready, init later(10s)");
            if(!ENABLE_FVP) return;

            init_timer = setTimeout(freeview_manager.init, 10000);
            manager_state = STATE.IDLE;
            return;
        }
        freeview_data_manager.init(onDataManagerInit);
    };


    var onDataManagerInit = function (ret) {
        if (!ret) {
            DBG_ERROR("data manager init fail!");
            manager_state = STATE.IDLE;
            return;
        }
        freeview_data_manager.getAppList(nids,function(data) {
            if (data.length && data.length > 0) {
                backData = [];
                for (i = 0; i < data.length; i++) {
                    if (!!data[i].baseURL) {
                        backData.push(data[i]);
                    } else {
                        (function (j) {
                            http_adapter.getAppPlayerInfo(nids, data[j].playerType, function (player_info) {
                                if (player_info && player_info.baseURL) {
                                    var baseURL = "" + player_info.baseURL + player_info.location;
                                    //data[j].baseURL = baseURL;
                                    web_sql_adapter.setOneApp({
                                        "Id": data[j].Id,
                                        "imageURL": data[j].imageURL,
                                        "applocation": data[j].applocation,
                                        "title": data[j].title,
                                        "playerType": data[j].playerType,
                                        "baseURL": baseURL,
                                        "time_stamp": data[j].time_stamp
                                    });
                                }
                            }, true);
                        })(i);
                    }
                }
                setLancherAppData(backData); //更新Lancher 数据
            }
        });
        freeview_data_manager.getChannelList(nids, onGetChannelList);
        freeview_data_manager.getContentOwingChannelList(onGetContentOwingChannelList);
    };
    var onGetContentOwingChannelList = function (list) {
        DBG_INFO("ongetContentOwingChannelList = " + list.length);
        if (!!list && list.length > 0) {
            ContentOwingList = list;
        } else {
            ContentOwingList = [];
        }
    };
    var onGetChannelList = function (list) {
        DBG_INFO("freeview_manager: init channelList.length = " + list.length);
        if (!!list && list.length > 0) {
            fvp_channels = list;
            fvp_channel_sids = [];
           /* var  liveTVoprtData = liveTV.getChannelListOprtData();
            var fvp_list = [], fvp_list_org = [];
            var fvp_channel = [];
            oprtData.allChannels = [];*/

            for (var i = 0; i < list.length; i++) {
                fvp_channel_sids.push("" + list[i].service_id);
                //fvp_list_org.push(list[i])
            }
            /*for (key in liveTVoprtData.allChannels) {
                oprtData.allChannels[key] = [];
                fvp_list = fvp_list_org.slice(0);
                for(liveTVIndex = 0; liveTVIndex < liveTVoprtData.allChannels[key].length; liveTVIndex++) {
                    for (var i = 0; i < fvp_list.length; i++) {
                        if(liveTVoprtData.allChannels[key][liveTVIndex].serviceId == fvp_list[i].service_id) {
                            fvp_channel = $.extend({}, liveTVoprtData.allChannels[key][liveTVIndex]);
                            fvp_channel["channel_logo"] = fvp_list[i].mediauri_image;
                            fvp_channel["fvpServiceType"] = fvp_list[i].service_type;
                            fvp_channel["channel_player_url"] = fvp_list[i].mediauri_vnd_dvb_ait;
                            oprtData.allChannels[key].push(fvp_channel)//��ȿ���
                            fvp_list.splice(i, 1);  //z
                            break;
                        }
                    }
                }
            }*/
            //check dtv is running
            if (freeview_util.checkDTV()) {
                manager_state = STATE.RUNNING;
                task_queue.init();
            } else {
                DBG_ERROR("freeview_manager: init, dtv is paused, do not init task_queue");
                manager_state = STATE.PAUSE;
            }
        } else {
            //if channel list is empty, do not need to init task_queue
            fvp_channel_sids = [];
            DBG_ERROR("freeview_manager: init failed, fvp_channels is empty");
            manager_state = STATE.IDLE;
        }
    };

    /**
     * ��ǰ�б��Ӧ��fvpƵ���б�
     * @param listName
     * @returns {*}
     */
    freeview_manager.fvpChannelList = function() {
        return !!oprtData.allChannels?oprtData.allChannels:[];
    }
    /**
     * destroy freeview manager
     */
    freeview_manager.destroy = function () {
        DBG_ERROR("freeview_manager destroy");
        manager_state = STATE.IDLE;
        clearTimeout(init_timer);
        init_timer = null;
        task_queue.destroy();
        freeview_data_manager.destroy();
    };
    freeview_manager.pause = function () {
        if (manager_state != STATE.RUNNING) {
            DBG_ERROR("freeview_manager pause: state error["+manager_state+"], do nothing");
            return;
        }
        DBG_ERROR("freeview_manager pause");
        task_queue.destroy();
        manager_state = STATE.PAUSE;
    };
    freeview_manager.resume = function () {
        if (manager_state != STATE.PAUSE) {
            DBG_ERROR("freeview_manager resume: state error["+manager_state+"], do nothing");
            return;
        }
        DBG_ERROR("freeview_manager resume");
        task_queue.init();
        manager_state = STATE.RUNNING;
    };
    freeview_manager.changeByScan = function () {
        DBG_ERROR("freeview_manager.changeByScan");
        freeview_manager.destroy();
        setTimeout(function() {
            DBG_ERROR("freeview_manager.changeByScan Start Init");
            freeview_manager.init();
        }, 15 * 1000);
    };
    /**
     * get freeview channel list
     * @returns {Array} channel list
     */
    freeview_manager.getChannelList = function () {
        DBG_INFO("freeview_manager.getChannelList length is " + fvp_channel_sids.length);
        return fvp_channels;
    };
    freeview_manager.getChannelLogo = function (sid) {
        //sid = sid - 0;
        var index = fvp_channel_sids.indexOf(sid);
        var ret = null;
        if (!tv) {
            ret = "EPG/epgMain/logo_freevirw_epg.png?w=128";
        } else if (index >= 0) {
            ret = fvp_channels[index].mediauri_image;
        }
        // DBG_INFO("freeview_manager.getChannelLogo sid[" + sid + "], logo[" + ret + "]");
        return ret;
    };

    freeview_manager.getChannelServiceType = function (sid) {
        //sid = sid - 0;
        var index = fvp_channel_sids.indexOf(sid);
        var ret = null;
        if (!tv) {
            ret = freeview_util.ENUM.ENHANCED_ONDEMAND;
        } else if (index >= 0) {
            ret = fvp_channels[index].service_type;
        }
        return ret;
    };
    freeview_manager.getChannelPlayerUrl = function (sid, callback) {
        var index = fvp_channel_sids.indexOf(sid);
        var url = null;
        if (index >= 0) {
            url = fvp_channels[index].mediauri_vnd_dvb_ait;
        }

        freeview_data_manager.getChannelPlayerUrl(url, function (playerUrl) {
            var ret = [sid, playerUrl];
            if (typeof callback == "function") {
                callback(ret);
            }
        })
    };
    /**
     * get schedule data
     * interface for epg page
     * @param {Array} sids service ids
     * @param {Number} start_time start time
     * @param {Number} end_time end time
     * @param callback pass the data && refresh page
     */
    freeview_manager.getScheduleData = function (sids, start_time, end_time, first_day, notPreLoad, callback) {
        if (manager_state != STATE.RUNNING) {
            DBG_ERROR("getScheduleData: freeview_manager has not been ready");
            callback([]);
            return;
        }
        DBG_INFO("freeview_manager.getScheduleData sids[" + sids + "], start_time[" + start_time + "], " +
            "end_time[" + end_time + "]");
        var task = null, sids_available = [];
        for (var i = 0; i < sids.length; i++) {
            if (fvp_channel_sids.indexOf(sids[i]) >= 0) {
                sids_available.push(sids[i]);
            }
        }
        if (sids_available.length > 0) {
            if ((end_time - start_time) < 21600) {
                task = generateTask(sids, start_time, end_time, notPreLoad ? task_type.GET_DATA_TYPE:task_type.UPDATE_DATA_TYPE, callback);
            } else {
                task = generateTask(sids, start_time, end_time, notPreLoad ? task_type.GET_DATA_TYPE:task_type.UPDATE_DATA_TYPE, function (d) {
                   if(!!d) onGetBEPGDataCallback(d, sids[0], start_time, end_time, first_day, callback);
                });
            }
            if (!!task) {
                task_queue.reset(task, notPreLoad, "left");
            } else {
                DBG_ERROR("freeview_manager.getScheduleData no available sid!");
                callback([]);
            }
        } else {
            DBG_ERROR("freeview_manager.getScheduleData no available sid!");
            callback([]);
        }
    };
    var onGetBEPGDataCallback = function (d, sid, start_time, end_time, first_day, callback) {
        var data = d["a_" + sid];
        DBG_INFO("freeview_manager.getScheduleData construct data for bepg, data.length = " + data.length);
        var ret = {};
        for (var i = 0; i < 4; i++) {
            ret[sid + "_" + i] = [];
        }
        var r = 0;
        var currentPageStartTime = start_time;
        if(!first_day) {
            currentPageStartTime = end_time - (3600 * 24 * 4);
        }
        for (var j = data.length - 1; j > -1; j--) {
            if (data[j].available != AVLFlag.NOT_AVAILABLE) {
                r = 3 - Math.floor((data[j].startTime - currentPageStartTime) / 86400)                                                                                                                                                 ;
                if (r <= 0) {
                    r = 0;
                } else if (r > 3) {
                    r = 3;
                }

                data[j].adFlag = parseInt(data[j].program_ad);
                data[j].detail = data[j].medium_desc;
                data[j].hdFlag = parseInt(data[j].hd_or_sd);
                data[j].subt = parseInt(data[j].subtitle);
                data[j].theme = parseInt(data[j].genre);
                ret[sid + "_" + r].push(data[j]);
            }
        }
        DBG_INFO("freeview_manager.getScheduleData fepg");
        callback(ret);
    };
    /**
     * get the program detail info
     * interface for epg page
     * @param {Number} pid program id
     * @param callback pass the data && refresh page
     */
    freeview_manager.getProgramDetail = function (pid, callback) {
        if (manager_state != STATE.RUNNING) {
            DBG_ERROR("getProgramDetail: freeview_manager has not been ready");
            callback([]);
            return;
        }
        DBG_INFO("freeview_manager.getProgramDetail pid[" + pid + "]");
        if (tv) {
            freeview_data_manager.getProgramDetail(pid, function (detail) {
                if (typeof callback == "function") {
                    var ret = [];
                    ret.push(detail.program_id);
                    ret.push(detail.synopsis);
                    ret.push(detail.parent_rating);
                    ret.push(detail.explanatory);
                    ret.push(detail.signFlag);
                    ret.push(detail.icon);
                    ret.push(":::::");
                    if (detail.keywords && detail.keywords.length && detail.keywords.length > 0) {
                        for (var i = 0; i < detail.keywords.length; i++) {
                            ret.push(detail.keywords[i]);
                        }
                    }
                    ret.push(":::::");
                    if (detail.actors && detail.actors.length && detail.actors.length > 0) {
                        for (i = 0; i < detail.actors.length; i++) {
                            ret.push(detail.actors[i].person_given_name);
                            ret.push(detail.actors[i].person_family_name);
                            if (detail.actors[i].character_given_name) {
                                ret.push(detail.actors[i].character_given_name);
                            } else {
                                ret.push("");
                            }
                            if (detail.actors[i].character_family_name) {
                                ret.push(detail.actors[i].character_family_name);
                            } else {
                                ret.push("");
                            }
                        }
                    }
                    ret.push(":::::");
                    if (detail.crews && detail.crews.length && detail.crews.length > 0) {
                        for (i = 0; i < detail.crews.length; i++) {
                            ret.push(detail.crews[i].person_given_name);
                            ret.push(detail.crews[i].person_family_name);
                            ret.push(detail.crews[i].role);
                        }
                    }
                    ret.push(":::::");
                    ret.push(!!detail.org ? detail.org : "");

                    callback(ret);
                }
            });
        } else {
            //test code
            setTimeout(function () {
                callback([
                    pid, "computer test detail",
                    ":::::",
                    "Keyword_1", "Keyword_2", "Keyword_3", "Keyword_4", "Keyword_5",
                    ":::::",
                    "A10_FName", "A10_LName", "A11_FName", "A11_LName",
                    "A20_FName", "A20_LName", "A21_FName", "A21_LName",
                    "A30_FName", "A30_LName", "A31_FName", "A31_LName",
                    "A40_FName", "A40_LName", "A41_FName", "A41_LName",
                    ":::::",
                    "C1_FName", "C1_LName", "C1_Role",
                    "C2_FName", "C2_LName", "C2_Role",
                    "C3_FName", "C3_LName", "C3_Role",
                    "C4_FName", "C4_LName", "C4_Role",
                    ":::::",
                    "Organization"
                ]);
            }, 1000);
        }
    };
    /**
     * get the program url for playing
     * interface for epg page
     * @param {String} purl program id
     * @param callback pass the data && refresh page
     */
    freeview_manager.getProgramPlayerUrl = function (purl, callback) {
        if (manager_state != STATE.RUNNING) {
            DBG_ERROR("getProgramPlayerUrl: freeview_manager has not been ready");
            callback([]);
            return;
        }
        DBG_INFO("freeview_manager.getProgramPlayerUrl purl[" + purl + "]");
        freeview_data_manager.getProgramPlayerUrl(purl, callback);
    };
    freeview_manager.getContentOwingChannelList = function () {
          return ContentOwingList;
    };
    /**
     * get the list of freeview apps
     * interface for launcher
     * @param callback pass the data && refresh page
     */
    freeview_manager.getAppList = function (callback) {
        if (manager_state != STATE.RUNNING && manager_state != STATE.PAUSE) {
            DBG_ERROR("getAppList: freeview_manager has not been ready");
            callback([]);
            return;
        }
        DBG_INFO("freeview_manager.getAppList");
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("freeview_manager.getAppList does not need callback");
            };
        }
        freeview_data_manager.getAppList(nids, function (data) {
            if (data.length && data.length > 0) {
                backData = [];
                for(i=0; i<data.length;i++) {
                    if(!!data[i].baseURL) {
                        backData.push(data[i]);
                    } else {
                        (function (j) {
                            http_adapter.getAppPlayerInfo(nids, data[j].playerType, function (player_info) {
                                if (player_info && player_info.baseURL) {
                                    var baseURL = "" + player_info.baseURL + player_info.location;
                                    //data[j].baseURL = baseURL;
                                    web_sql_adapter.setOneApp({"Id": data[j].Id, "imageURL":data[j].imageURL, "applocation":data[j].applocation, "title": data[j].title, "playerType": data[j].playerType, "baseURL": baseURL, "time_stamp": data[j].time_stamp});
                                }
                            }, true);
                        })(i);
                    }
                }
                setLancherAppData(backData); //更新Lancher 数据
                callback(backData);
            } else {
                callback();
            }
        });
    };

    var setLancherAppData = function(list) {
        var appObj = {
            Icon: "",
            Name: "Freeview",
            Order: -1,
            canPlay: false,
            data: consLauncherData(),
            isPage: false,
            postfix: "",
            tagType: "92",
            template: "template2000",
            timeStamp: 0

        };
        if(!list){
            list = [];
        }
        if(!!list && list.length == 0){
            FREEVIEWAPP.APP_LIST = null;
            FREEVIEWAPP.UPDATE_TIME = 0;
            return null;
        }
        if(!!FREEVIEWAPP.APP_LIST) {
            var appData = FREEVIEWAPP.APP_LIST.data;
            if(!!appData && !!appData.txts && list.length == appData.txts.length) {
                for(var i = 0; i < list.length;i++){
                    if(appData.txts[i] !=  list[i].title){
                        FREEVIEWAPP.ALL_GET = false;
                        break;
                    }
                }
            } else {
                FREEVIEWAPP.ALL_GET = false;
            }
        } else {
            FREEVIEWAPP.ALL_GET = false;
        }

        var fApp;
        for(var i = 0; i < list.length;i++){
            appObj.timeStamp = 0;
            fApp = {
                timeStamp: 0,
                icon: list[i].imageURL,
                fakeUrl: list[i].baseURL,
                title: list[i].title,
                url:list[i].baseURL
            }
            freeviewToLauncher(fApp, appObj.data);
        }

        FREEVIEWAPP.APP_LIST = appObj;
        FREEVIEWAPP.UPDATE_TIME =1;
    }

    /* ========================================
     * ===========private functions============
     * ========================================
     */
    /**
     * pre-load the schedule data
     * if channel is changed or sth. else happened to pre-load data of another channel, call this method
     * @param {Array} sids service ids
     * @param {Number} start_time start time
     * @param {Number} end_time end time
     */
    var updateScheduleData = function (sids, start_time, end_time) {
        DBG_INFO("updateScheduleData sids[" + sids + "], start_time[" + start_time + "], " +
            "end_time[" + end_time + "]");
        var task = generateTask(sids, start_time, end_time, task_type.UPDATE_DATA_TYPE, null);
        task_queue.setFirst(task);
        task_queue.reset(task, "down");
    };
    /**
     * generate a task
     * @param {Array} sids service ids
     * @param {Number} start_time start time
     * @param {Number} end_time end time
     * @param {Number} type get/update type
     * @param callback
     * @returns {Object} the task to push into task_queue
     */
    var generateTask = function (sids, start_time, end_time, type, callback) {
        var sids_available = [];
        var checkServiceIdAvailablility = function (sid, startTime) {
            var ret = false;
            var index = fvp_channel_sids.indexOf(sid);
            if (index >= 0) {
                if (fvp_channels[index].service_type !== freeview_util.ENUM.UNENHANCED) {
                    ret = true;
                } else if (startTime < new Date().valueOf() / GLOBAL.MILLIBASE) {
                    ret = true;
                }
            }
            return ret;
        };
        for (var i = 0; i < sids.length; i++) {
            if (checkServiceIdAvailablility(sids[i], start_time)) {
                sids_available.push(sids[i]);
            }
        }
        if (sids_available.length == 0) {
            DBG_ERROR("generateTask no available sids");
            return null;
        }
        DBG_INFO("generateTask sids[" + sids_available + "], start_time[" + start_time + "], " +
            "end_time[" + end_time + "], type[" + type + "]");
        var task = {
            params: {
                sids: sids_available,
                start_time: start_time,
                end_time: end_time
            },
            type: type,
            func: null,
            callback: callback
        };
        switch (type) {
            case task_type.GET_DATA_TYPE:
                task.func = freeview_data_manager.getScheduleData;
                break;
            case task_type.UPDATE_DATA_TYPE:
                task.func = freeview_data_manager.updateScheduleData;
                break;
            default:
                DBG_ERROR("generateTask undefined task type");
                break;
        }
        return task;
    };

    var onChannelChanged = function () {
        if (!!UI.getCurrModule() && !!UI.getCurrSubModule() && UI.getCurrSubModule().name.indexOf("epg") >= 0) {
            DBG_INFO("freeview_manager onChannelChanged in epg now, do nothing");
            return;
        }
        if (manager_state != STATE.RUNNING) {
            DBG_ERROR("freeview_manager onChannelChanged current state is ["+manager_state+"], do nothing");
            return;
        }
        DBG_INFO("freeview_manager onChannelChanged");
        var sids = generateIds(freeview_util.getCurrentChannelSid());
        var p = generateTimePeriod(freeview_util.getCurrentTime());
        var task = generateTask(sids, p[0], p[1], task_type.UPDATE_DATA_TYPE, null);
        task_queue.setFirst(task);
        task_queue.reset(task, "down");
    };

    var onEnvChanged = function () {
        DBG_INFO("freeview_manager onEnvChanged");
        if (manager_state == STATE.IDLE) {
            freeview_manager.init();
            return;
        }
        if (checkEnv()) {
            freeview_manager.resume();
        } else {
            freeview_manager.pause();
        }
    };
    var checkEnv = function () {
        return freeview_util.checkNetworkConnected() && freeview_util.checkDTV();
    };
    var onBackgroundModeChanged = function (data) {
        DBG_INFO("freeview_manager onBackgroundModeChanged");
        //TODO:
        if (isInBackgroundMode()) {
            if (manager_state != STATE.IDLE) {
                freeview_manager.destroy();
            }
        } else {
            if (manager_state == STATE.IDLE) {
                freeview_manager.init();
            }
        }
    };
    var isInBackgroundMode = function () {
        //TODO:
        DBG_ERROR("freeview_manager isInBackgroundMode check");
        var bgmStatus = 0;
        try {
            var bgmStatus = parseInt(model.system.getBgmStatus());
        } catch (e) {
            bgmStatus = 0;
        } finally {
            return !!bgmStatus; //0 is not BGM
        }
    };
    var onBgmPowerKeyListener = function (data) {
        if(ENABLE_FVP) {
            DBG_INFO("freeview_manager  BgmReceivePowerKeyChanged");
            checkBGMend();
        }
    };
    var checkBGMend = function() {
        setTimeout(function() {
            if(isInBackgroundMode()) {
                DBG_INFO("freeview_manager checkBGMend try again");
                checkBGMend();
            } else {
                freeview_manager.init();
            }
        }, 5 * 1000);
    }
    var generateIds = function (sid) {
        var index = fvp_channel_sids.indexOf(sid);
        if (index < 0) {
            index = 0;
        }
        var start_i = Math.floor(index / freeview_util.config.CHANNELS_PER_PAGE) * freeview_util.config.CHANNELS_PER_PAGE;
        return fvp_channel_sids.slice(start_i, start_i + freeview_util.config.CHANNELS_PER_PAGE);
    };
    var generateTimePeriod = function (time) {
        var start = freeview_util.calculateLowerTime(time);
        var end = freeview_util.calculateUpperTime(time);
        if (end <= start) {
            end = start + 12 * 3600;
        }
        return [start, end];
    };

    /* ========================================
     * ===========private variable=============
     * ========================================
     */
    var STATE = {
        IDLE: 0,
        INIT: 1,
        RUNNING: 2,
        PAUSE: 3
    };
    var nids = [];
    var init_timer = null;
    var manager_state = STATE.IDLE;
    // var inited_retry_time = 15000;
    var fvp_channel_sids = [];
    var fvp_channels = [];
    var task_queue = {};
    var ContentOwingList = [];

    (function () {
        var queue_directions = ["left", "right", "down", "up"];
        var queue = [];
        var pre_task = null, first_task = null;
        var task_direction = "down";
        var queue_direction = "left";
        var TASK_SLEEP = freeview_util.config.TASK_SLEEP;
        var execute_timer = null;

        //is_running is the flag of task queue running status.
        //if is_running is true, task_queue should run execute periodically
        //if is_running is false, task_queue should not run any more.
        var is_running = false;

        //
        var watch_dog_timer = null;
        var last_exe_time = 0;
        var watch_dog = function () {
            var c_time = getSYSLongTime();
            if (c_time - last_exe_time > 30) {
                DBG_INFO("freeview dog working, clear task queue");
                task_queue.clear();
                clearTimeout(execute_timer);
                execute_timer = null;
                is_running = false;
                clearInterval(watch_dog_timer);
                watch_dog_timer = null;
                last_exe_time = 0;
            }
        };
        task_queue.init = function () {
            DBG_INFO("task_queue.init");
            var current_sid = freeview_util.getCurrentChannelSid();
            if (fvp_channel_sids.indexOf(current_sid) < 0) {
                current_sid = fvp_channel_sids[0];
            }
            var sids = generateIds(current_sid);
            var period = generateTimePeriod(freeview_util.getCurrentTime());
            var start_time = period[0];
            var end_time = period[1];
            task_queue.clear();
            clearTimeout(execute_timer);
            first_task = generateTask(sids, start_time, end_time, task_type.UPDATE_DATA_TYPE, null);
            task_queue.reset(first_task, task_direction);
        };
        task_queue.clear = function () {
            DBG_INFO("task_queue.clear");
            queue = [];
        };
        task_queue.destroy = function () {
            DBG_INFO("task_queue.destroy");
            task_queue.clear();
            clearTimeout(execute_timer);
            is_running = false;
            clearInterval(watch_dog_timer);
            watch_dog_timer = null;
        };
        task_queue.setFirst = function (t) {
            first_task = t;
        };
        task_queue.execute = function () {
            DBG_INFO("task_queue.execute queue.length = " + queue.length);
            var task = queue.shift();
            if (task && typeof task.func == "function") {
                last_exe_time = getSYSLongTime();
                var params = task.params;
                DBG_INFO("task_queue.execute params = " + objToString(params) + ", type = " + task.type);
                task.func(params.sids, params.start_time, params.end_time, function (data) {
                    DBG_INFO("task_queue.execute another task is comming[" + TASK_SLEEP + "ms]");
                    execute_timer = setTimeout(task_queue.execute, TASK_SLEEP);
                    if (typeof task.callback == "function") {
                        task.callback(data);
                    }
                });
            } else {
                DBG_INFO("task_queue.execute no task any more");
                task_queue.clear();
                is_running = false;
                if (!freeview_util.config.GENERATE_QUEUE_ONCE) {
                    var another = generateNextTask(pre_task, queue_direction);
                    task_queue.reset(another, task_direction);
                }
            }
        };
        task_queue.reset = function (task, notPreLoad, type) {
            DBG_INFO("task_queue.reset is_running = " + is_running);
            //if reset a same task queue, do nothing
            if (!pre_task || !(pre_task.params.sids[4] == task.params.sids[4] && pre_task.params.start_time == task.params.start_time)
                || task_direction != type
                || queue.length == 0) {
                if(notPreLoad) {
                    task_queue.clear();
                    queue.push(task);
                    pre_task = task;
                } else {
                    queue.push(task);
                }

                // var task_arr = generateQueue(task, type);
                var task_arr = [];
                for (var i = 0; i < task_arr.length; i++) {
                    queue.push(task_arr[i]);
                }
                task_direction = type;
                if (type == "left" || type == "right") {
                    if (queue_direction == "left" || queue_direction == "right") {
                        queue_direction = "down";
                    }
                } else {
                    if (queue_direction == "up" || queue_direction == "down") {
                        queue_direction = "left";
                    }
                }
            }
            if (!is_running || notPreLoad) {
                task_queue.execute();
                is_running = true;
                //clearInterval(watch_dog_timer);
                //watch_dog_timer = setInterval(watch_dog, 2 * freeview_util.config.TASK_SLEEP);
            }
            // task_queue.execute();
        };
        var generateQueue = function (task, type) {
            DBG_INFO("generateQueue");
            var arr = [];
            var init_period = generateTimePeriod(task.params.start_time);
            var current_time = getDVBLongTime();
            var sids = task.params.sids;
            var init = task;
            if (task.type == task_type.GET_DATA_TYPE) {
                if (task.params.end_time < current_time) {
                    //forward epg
                    sids = generateIds(task.params.sids[0]);
                }
                init = generateTask(sids, init_period[0], init_period[1], task_type.UPDATE_DATA_TYPE, null);
                arr.push(init);
                first_task = init;
            }
            for (var i = 0; i < 4; i++) {
                var t_1 = generateNextTaskByDirection(init, queue_directions[i], 1);
                if (t_1) {
                    arr.push(t_1);
                }
            }
            if (type == "left" || type == "right") {
                var t_2 = null;
                for (var j = 0; j < 2; j++) {
                    t_2 = generateNextTaskByDirection(task, queue_directions[j], 2);
                    while (!!t_2) {
                        arr.push(t_2);
                        t_2 = generateNextTaskByDirection(t_2, queue_directions[j], 1);
                    }
                }
            } else {
                var t_3 = generateNextTaskByDirection(task, "down", 2);
                for (var k = 2; k < 4; k++) {
                    t_3 = generateNextTaskByDirection(task, queue_directions[k], 2);
                    while (!!t_3) {
                        arr.push(t_3);
                        t_3 = generateNextTaskByDirection(t_3, queue_directions[k], 1);
                    }
                }
            }
            return arr;
        };
        var generateNextTaskByDirection = function (task, direction, step) {
            DBG_INFO("generateNextTaskByDirection direction[" + direction + "], step[" + step + "]");
            var next_task = {
                params: {
                    sids: task.params.sids,
                    start_time: task.params.start_time,
                    end_time: task.params.end_time
                },
                type: task.type,
                func: task.func,
                callback: task.callback
            };
            var current_time = getSYSLongTime();
            switch (direction) {
                case "up":
                    (function () {
                        var index = fvp_channel_sids.indexOf(task.params.sids[0]) - step * freeview_util.config.CHANNELS_PER_PAGE;
                        if (index < 0) {
                            //change to last page
                            next_task = null;
                        } else {
                            next_task.params.sids = fvp_channel_sids.slice(index, index + freeview_util.config.CHANNELS_PER_PAGE);
                        }
                    })();
                    break;
                case "down":
                    (function () {
                        var index = fvp_channel_sids.indexOf(task.params.sids[0]) + step * freeview_util.config.CHANNELS_PER_PAGE;
                        if (index > fvp_channel_sids.length || index < freeview_util.config.CHANNELS_PER_PAGE) {
                            //change to first page
                            next_task = null;
                        } else {
                            next_task.params.sids = fvp_channel_sids.slice(index, index + freeview_util.config.CHANNELS_PER_PAGE);
                        }
                    })();
                    break;
                case "right":
                    (function () {
                        var start_time = task.params.end_time + (step - 1) * 12 * 3600;
                        //out of range
                        if (start_time > current_time + 7 * 24 * 3600) {
                            next_task = null;
                        } else {
                            next_task.params.start_time = start_time;
                            next_task.params.end_time = start_time + 12 * 3600;
                        }
                    })();
                    break;
                case "left":
                default:
                    (function () {
                        var end_time = task.params.start_time - (step - 1) * 12 * 3600;
                        //out of range
                        if (end_time < current_time - 7 * 24 * 3600) {
                            next_task = null;
                        } else {
                            next_task.params.start_time = end_time - 12 * 3600;
                            next_task.params.end_time = end_time;
                        }
                    })();
                    break;
            }
            return next_task;
        };
        var generateNextTask = function (task, type) {
            DBG_INFO("generateNextTask type[" + type + "]");
            var t = generateNextTaskByDirection(task, type, 1);
            if (!t) {
                switch (type) {
                    case "down":
                        type = "up";
                        break;
                    case "right":
                        type = "left";
                        break;
                    case "up":
                        type = "down";
                        break;
                    case "left":
                    default:
                        type = "right";
                        break;
                }
                t = generateNextTaskByDirection(first_task, type, 1);
                if (!t) {
                    t = first_task;
                } else {
                    queue_direction = type;
                }
            }
            return t;
        };
    })();
    var task_type = {
        UPDATE_DATA_TYPE: 0,
        GET_DATA_TYPE: 1
    };
 /*
    UIObserver.subscribeMessage(UIObserver.MESSAGE_NAME.NETWORK_CHANGED, onEnvChanged); //网络监听
    UIObserver.subscribeMessage(UIObserver.MESSAGE_NAME.DTV_CHANGED, onEnvChanged);  //resumeDTV
    UIObserver.subscribeMessage(UIObserver.MESSAGE_NAME.CURRENT_CHANNEL_CHANGED, onChannelChanged); //切台监听
    UIObserver.subscribeMessage(UIObserver.MESSAGE_NAME.CHANNEL_UPDATED, onEnvChanged);*/ //频道列表变化监听

    freeview_manager.onEnvChanged = onEnvChanged; //监听
    freeview_manager.onChannelChanged = onChannelChanged;

     model.system.onBgmReceivePowerKeyChanged = onBgmPowerKeyListener;
})();