/**
 * Created by yangcheng3 on 2016-12-20.
 */
var freeview_data_manager = {};
(function () {

    /* ========================================
     * ===========public interfaces============
     * ========================================
     */
    /**
     * init freeview data manager
     * @param callback notify the result
     */
    freeview_data_manager.init = function (callback) {
        DBG_INFO("freeview_data_manager.init");
        http_adapter.init(function (init_result) {
            if (!!init_result) {
                web_sql_adapter.init();
            }
            callback(init_result);
        });
    };
    /**
     * destroy freeview manager
     */
    freeview_data_manager.destroy = function () {
        DBG_INFO("freeview_data_manager.destroy");
        http_adapter.destroy();
        web_sql_adapter.destroy();
    };
    /**
     * get freeview app list
     * @param {Array} nids network ids
     * @param callback pass the data
     */
    var appList_request = false;
    freeview_data_manager.getAppList = function (nids, cb) {
        var callback;
        if (typeof cb != "function") {
            callback = function (data) {
                appList_request = false;
                DBG_INFO("freeview_data_manager getAppList empty callback data.length = " + data.length);
            };
        } else {
            callback = function (data) {
                appList_request = false;
                cb(data);
            };
        }
        DBG_INFO("freeview_data_manager.getAppList nids[" + nids + "]");
        if(!nids && nids.length == 0) {
            callback([]);
            return;
        }
        var Id = "app" + nids.join("_");
        if (!!appList_request) {
            setTimeout(function () {
                freeview_data_manager.getAppList(nids, callback)
            }, 300);
            DBG_ERROR("freeview_data_manager.getAppList the same request is sending, this request should be delay 300ms");
            return;
        }
        web_sql_adapter.getRequest(Id, function(request_list) {
            if (!!request_list && request_list.length > 0) { //  requestde from server and not out of date
                //1.get app list from database
                web_sql_adapter.getAppList(function (db_app_list) {
                    DBG_INFO("freeview_data_manager getAppList db_app_list length " + db_app_list.length);
                    if (!!db_app_list && db_app_list.length > 0) {
                        callback(db_app_list);
                    } else {
                        //2.get app list from http
                        //2.1 get app list
                        getAppListFromServer(nids, false, callback);  //database not data ��http requested��not out of data
                    }
                });
            } else {
                getAppListFromServer(nids, true, callback);
            }
        })
        appList_request = true;
    };

    freeview_data_manager.getContentOwingChannelList = function (callback) {
        if (typeof callback != "function") {
            callback = function (data) {
                DBG_INFO("freeview_data_manager getContentOwingChannelList empty callback data.length = " + data.length);
            };
        }
        DBG_INFO("freeview_data_manager.getContentOwingChannelList");
        http_adapter.getContentOwingChannelList(function (data) {
            if (data == freeview_util.CONST.NO_DATA) {
                data = [];
            }
            callback(data);
        });
    };

    /**
     * get freeview channel list
     * @param {Array} nids network ids
     * @param callback pass the data
     */
    freeview_data_manager.getChannelList = function (nids, callback) {
        if (typeof callback != "function") {
            callback = function (data) {
                DBG_INFO("freeview_data_manager getChannelList empty callback data.length = " + data.length);
            };
        }
        DBG_INFO("freeview_data_manager.getChannelList nids[" + nids + "]");
        var index = 0;
        for (var i = 0; i < nids.length; i++) {
            (function (j) {
                    var Id = "service_" + nids[j];
                    web_sql_adapter.getRequest(Id, function(request_list, Id) {
                        if (!!request_list && request_list.length > 0) { //  requestde from server and not out of date
                            index++;
                            if (index == nids.length) {
                                web_sql_adapter.getChannelList(callback);
                            }
                            // not care this case
                        } else {
                            var nid = Id.split("_")[1];
                            getChannelListFromServer(nid, true, function(time_stamp, dataNoChange) {
                                //index++;
                                if(!!dataNoChange) {
                                    web_sql_adapter.getChannelListByNid(nid, function(data) {
                                        if(!data || data.length <= 0) {
                                            getChannelListFromServer(nid, false, function(time_stamp, dataNoChange) {
                                                index++;
                                                web_sql_adapter.setRequest (Id, "channellist", time_stamp);
                                                if (index == nids.length) {
                                                    web_sql_adapter.getChannelList(function(data) {
                                                        callback(data);
                                                    });
                                                }
                                            });
                                        } else {
                                            index++;
                                            web_sql_adapter.setRequest (Id, "channellist", time_stamp);
                                            if (index == nids.length) {
                                                web_sql_adapter.getChannelList(function(data) {
                                                    callback(data);
                                                });
                                            }
                                        }
                                    });
                                } else {
                                    index++;
                                    web_sql_adapter.setRequest (Id, "channellist", time_stamp);
                                    if (index == nids.length) {
                                        web_sql_adapter.getChannelList(function(data) {
                                            callback(data);
                                        });
                                    }
                                }
                            });
                        }
                    });

            })(i);
        }
    };

    freeview_data_manager.getChannelPlayerUrl = function (channel_url, callback) {
        if (!!channel_url && channel_url.length > 0) {
            http_adapter.getContentAit(channel_url, "epg", function (ait_data) {
                var ret = null;
                if (ait_data && ait_data.baseURL) {
                    ret = ait_data.baseURL;
                    if (!!ait_data.location) {
                        ret += ait_data.location.replace(/,/g,"%2C");
                    }
                }
                if (typeof callback == "function") {
                    callback(ret);
                }
            });
        } else {
            if (typeof callback == "function") {
                callback(null);
            }
        }

    };
    /**
     * get schedule data
     * @param {Array} sids service ids
     * @param {Number} start_time start time
     * @param {Number} end_time end time
     * @param callback pass the data
     */
    freeview_data_manager.getScheduleData = function (sids, start_time, end_time, callback) {
        var units = decomposeToUnit(sids, start_time, end_time);
        var index = 0;
        var unit = null;
        DBG_INFO("freeview_data_manager.getScheduleData units = " + units.length);
        if (units.length && units.length == 0) {
            callback([]);
            return;
        }

        var keyArrStr = "";
        for (var i = 0, unit = ""; i < units.length; i++) {
            unit = units[i];
            if(i == 0) {
                keyArrStr = "'"+unit.sid + "-" + unit.start_time+"'";
            } else {
                keyArrStr += ",'"+unit.sid + "-" + unit.start_time+"'";
            }
        }
        DBG_ERROR("@freeview_data_manager "+keyArrStr);
        web_sql_adapter.queryRequestTable(keyArrStr, function (data) {
            DBG_ERROR("@freeview_data_manager RequestTable data" + objToString(data));
            if (data && data.length > 0) {
               var  requestedArr = [];
                for(var i = 0; i< data.length; i++) {
                    requestedArr.push(data[i]["Id"]);
                }
                DBG_ERROR("@freeview_data_manager requestedArr" + objToString(requestedArr));
                for (var i = 0,strID = ""; i < units.length; i++) {
                    unit = units[i];
                    strID = unit.sid + "-" + unit.start_time;
                    if(requestedArr.indexOf(strID) > -1) {
                        index++;
                        if (index == units.length) {
                            web_sql_adapter.getScheduleData(sids, start_time, end_time, callback);
                        }
                    } else {
                        fetchScheduleDataFromServer(unit.sid, unit.start_time, unit.end_time, function () {
                            index++;
                            if (index == units.length) {
                                web_sql_adapter.getScheduleData(sids, start_time, end_time, callback);
                            }
                        });
                    }
                }
            } else {
                for (var i = 0; i < units.length; i++) {
                    unit = units[i];
                   // fetchScheduleDataFromServer(sid, start_time, end_time, callback)
                    fetchScheduleDataFromServer(unit.sid, unit.start_time, unit.end_time, function () {
                        index++;
                        if (index == units.length) {
                            web_sql_adapter.getScheduleData(sids, start_time, end_time, callback);
                        }
                    });
                }
            }
        });




        /*for (var i = 0; i < units.length; i++) {
            unit = units[i];
            updateScheduleData(unit.sid, unit.start_time, unit.end_time, function () {
                index++;
                if (index == units.length) {
                    web_sql_adapter.getScheduleData(sids, start_time, end_time, callback);
                }
            });
        }*/
    };
    /**
     * update schedule data
     * @param {Array} sids service ids
     * @param {Number} start_time start time
     * @param {Number} end_time end time
     * @param callback notify the result
     */
    freeview_data_manager.updateScheduleData = function (sids, start_time, end_time, callback) {
        var units = decomposeToUnit(sids, start_time, end_time);
        var index = 0;
        var unit = null;
        DBG_INFO("freeview_data_manager.updateScheduleData units = " + units.length);
        if (units.length && units.length == 0) {
            DBG_INFO("freeview_data_manager.updateScheduleData do nothing but callback");
            callback();
            return;
        }
        var keyArrStr = "";
        for (var i = 0, unit = ""; i < units.length; i++) {
            unit = units[i];
            if(i == 0) {
                keyArrStr = "'"+unit.sid + "-" + unit.start_time+"'";
            } else {
                keyArrStr += ",'"+unit.sid + "-" + unit.start_time+"'";
            }
        }

        web_sql_adapter.queryRequestTable(keyArrStr, function (data) {
            if (data && data.length > 0) {
                var  requestedArr = []
                for(var i = 0; i< data.length; i++) {
                    requestedArr.push(data[i]["Id"]);
                }
                for (var i = 0,strID = ""; i < units.length; i++) {
                    unit = units[i];
                    strID = unit.sid + "-" + unit.start_time;
                    if(requestedArr.indexOf(strID) > -1) {
                        index++;
                        if (index == units.length) {
                            if (typeof callback == "function") {
                                callback();
                            }
                        }
                    } else {
                        fetchScheduleDataFromServer(unit.sid, unit.start_time, unit.end_time, function () {
                            index++;
                            if (typeof callback == "function") {
                                callback();
                            }
                        });
                    }
                }
            } else {
                for (var i = 0; i < units.length; i++) {
                    unit = units[i];
                    // fetchScheduleDataFromServer(sid, start_time, end_time, callback)
                    fetchScheduleDataFromServer(unit.sid, unit.start_time, unit.end_time, function () {
                        index++;
                        if (index == units.length) {
                            if (typeof callback == "function") {
                                callback();
                            }
                        }
                    });
                }
            }
        });
        /*
        for (var i = 0; i < units.length; i++) {
            unit = units[i];
            updateScheduleData(unit.sid, unit.start_time, unit.end_time, function () {
                index++;
                if (index == units.length) {
                    if (typeof callback == "function") {
                        callback();
                    }
                }
            });
        }*/
    };
    /**
     * get the program detail info
     * @param {Number} pid program id
     * @param callback pass the data
     */
    freeview_data_manager.getProgramDetail = function (pid, callback) {
        DBG_INFO("freeview_data_manager.getProgramDetail pid is " + pid);
        //suppose the schedule data is clean
        //1.get program data from database
        web_sql_adapter.getProgramDetail(pid, function (program) {
            if (!program) {
                DBG_ERROR("freeview_data_manager.getProgramDetail program is null");
                program = {};
            }
            DBG_INFO("freeview_data_manager.getProgramDetail program is " + objToString(program));
            //2.get details from http
            http_adapter.getProgramDetail(pid, function (info) {
                DBG_INFO("freeview_data_manager.getProgramDetail info is " + objToString(info));
                //3.merge data
                program.icon = info.icon;
                program.synopsis = !!info.long_synopsis ? (info.long_synopsis) : "";
                //todo:add more info
                program.parent_rating = info.parent_rating;
                program.explanatory = info.explanatory;
                program.keywords = info.keywords;
                program.actors = info.actors;
                program.crews = info.crews;
                program.org = info.org;
                program.signFlag = info.signFlag;
                callback(program);
            });
        });
    };
    /**
     * get the program url for playing
     * @param {String} purl program id
     * @param callback pass the data
     */
    freeview_data_manager.getProgramPlayerUrl = function (purl, callback) {
        DBG_INFO("freeview_data_manager.getProgramPlayerUrl purl is " + purl);
        http_adapter.getContentAit(purl, "epg", function (ait_data) {
            var url = [], tmp = "";
            if (ait_data && ait_data.baseURL) {
                tmp = ait_data.baseURL;
                if (!!ait_data.location) {
                    tmp += ait_data.location.replace(/,/g,"%2C");
                }
                url.push(purl);
                url.push(tmp);
            }
            DBG_INFO("freeview: getProgramPlayerUrl callback, url = " + url);
            setTimeout(function () {
                callback(url);
            }, 100);
        });
    };

    /* ========================================
     * ===========private interfaces===========
     * ========================================
     */
    /**
     * decompose a task to request units to run
     * @param {Array} sids service ids
     * @param {Number} start_time start time of the request
     * @param {Number} end_time end time of the request
     * @returns {Array} units
     * @private
     */
    var decomposeToUnit = function (sids, start_time, end_time) {
        var units = [], periods = [], index = 0;
        var start = freeview_util.calculateLowerTime(start_time);
        var end = freeview_util.calculateUpperTime(end_time);
        while (start < end && index < 32) {
            periods.push([start, start + 12 * 3600]);
            index++;
            start += 12 * 3600;
        }
        for (var i = 0; i < sids.length; i++) {
            for (var j = 0; j < periods.length; j++) {
                units.push({
                    sid: sids[i],
                    start_time: periods[j][0],
                    end_time: periods[j][1]
                });
            }
        }
        return units;
    };
    /**
     * update the template data
     * @param {Array} schedules the schedules info
     * @param callback
     * @private
     */
    var updateTemplateData = function (schedules, callback) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("getTemplateData empty callback");
            };
        }
        DBG_INFO("updateTemplateData schedules.length = " + schedules.length);
        var templates_not_cached = [];
        var i;
        //1.query template is cached or not
        for (i = 0; i < schedules.length; i++) {
            if (schedules[i].auxiliaryURL && !web_sql_adapter.queryTemplate(schedules[i].auxiliaryURL)
                && (templates_not_cached.indexOf(schedules[i].auxiliaryURL) >= 0)) {
                templates_not_cached.push(schedules[i].auxiliaryURL);
            }
        }
        var index = 0;
        DBG_INFO("updateTemplateData templates_not_cached.length = " + templates_not_cached.length);
        if (templates_not_cached.length > 0) {
            for (i = 0; i < templates_not_cached.length; i++) {
                (function (j) {
                    //2.get template through http
                    http_adapter.getTemplateData(templates_not_cached[j], function (template_data) {
                        //3.save template to database
                        //web_sql_adapter.setTemplateData(templates_not_cached[j], template_data);
                        index++;
                        if (index == templates_not_cached.length) {
                            callback();
                        }
                    });
                })(i);
            }
        } else {
            callback();
        }
    };
    /**
     * update the service schedules
     * @param {Number} sid service id
     * @param {Number} start_time start time of request
     * @param {Number} end_time end time of request
     * @param callback
     * @private
     */
    var updateScheduleData = function (sid, start_time, end_time, callback) {
        DBG_INFO("updateScheduleData");
        //1.query data from database
        web_sql_adapter.queryScheduleData(sid, start_time, function (data_is_exit) {
            DBG_INFO("updateScheduleData data_is_exit = " + data_is_exit);
            if (!data_is_exit) {
                //2.get schedule through http
                http_adapter.getScheduleData(sid, start_time, end_time, function (schedule_data, time_stamp, dataNoChange) {
                    if(!!time_stamp) {
                        web_sql_adapter.updateRequestTable(sid, start_time, time_stamp);
                    }
                    if(!!dataNoChange) {  //server back 304 new data update
                        callback();
                        return;
                    }
                    //set channel logo to program info
                    var logo = freeview_manager.getChannelLogo(sid);
                    for (var i = 0; i < schedule_data.length; i++) {
                        schedule_data[i].channelLogo = logo;
                    }
                    //3.save http data to database
                    web_sql_adapter.setScheduleData(sid, start_time, schedule_data, function () {
                        //4.update template data
                        updateTemplateData(schedule_data, callback);
                    });
                });
            } else if (typeof callback == "function") {
                callback();
            }
        });
    };

    var fetchScheduleDataFromServer = function (sid, start_time, end_time, callback) {
        DBG_INFO("fetchScheduleDataFromServer");
        http_adapter.getScheduleData(sid, start_time, end_time, function (schedule_data, time_stamp, dataNoChange) {
            if(!!time_stamp){
                web_sql_adapter.updateRequestTable(sid, start_time, time_stamp);
            }
            if(!!dataNoChange) {  //server back 304 new data update
                callback();
                return;
            }
            //set channel logo to program info
            var img = freeview_manager.getChannelLogo(sid);
            var templates_not_cached = [];
            for (var i = 0; i < schedule_data.length; i++) {
                schedule_data[i].channelLogo = img;
                if (schedule_data[i].auxiliaryURL && !web_sql_adapter.queryTemplate(schedule_data[i].auxiliaryURL)
                    && (templates_not_cached.indexOf(schedule_data[i].auxiliaryURL) < 0)) {
                    templates_not_cached.push(schedule_data[i].auxiliaryURL);
                }
            }
            //save http data to database
            web_sql_adapter.setScheduleData(sid, start_time, schedule_data, function () {
                //update template data
                updateProgramOtherInfo(schedule_data,templates_not_cached, callback);
            });
        });
    };
    var updateProgramOtherInfo = function (schedules, templates_not_cached, callback) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("getTemplateData empty callback");
            };
        }
        DBG_INFO("updateTemplateData schedules.length = " + schedules.length);
        var index = 0;
        DBG_INFO("updateTemplateData templates_not_cached.length = " + templates_not_cached.length);
        if (templates_not_cached.length > 0) {
            for (i = 0; i < templates_not_cached.length; i++) {
                (function (j) {
                    //2.get template through http
                    http_adapter.getTemplateData(templates_not_cached[j], function (template_data) {
                        //3.save template to database
                        //web_sql_adapter.setTemplateData(templates_not_cached[j], template_data);
                        index++;
                        if (index == templates_not_cached.length) {
                            callback();
                        }
                    });
                })(i);
            }
        } else {
            callback();
        }
    };

    /**
     * get app data list from server
     * @param nids
     * @param callback
     */
    var getAppListFromServer = function(nids, ifModified, callback) {
        http_adapter.getAppList(nids, function (http_app_list,  time_stamp,  dataNoChange) {
            //2.2 get player ait for each app

            if(!!dataNoChange) {  //server back 304 new data update
                var Id = "app" + nids.join("_");
                //var time_stamp = time_stamp;
                web_sql_adapter.setRequest (Id, "applist", time_stamp);

                web_sql_adapter.getAppList(function (data) {
                    if(data.length == 0) {
                        getAppListFromServer(nids, !dataNoChange, callback)
                    } else {
                        callback(data);
                    }
                });
                return;
            }

            var Id = "app" + nids.join("_");
            web_sql_adapter.setRequest (Id, "applist", time_stamp);
            var index = 0;
            DBG_INFO("freeview_data_manager getAppList http_app_list length " + http_app_list.length);
            if (!!http_app_list && http_app_list.length > 0) {
                for (var i = 0; i < http_app_list.length; i++) {
                    (function (j) {
                        http_adapter.getAppPlayerInfo(nids, http_app_list[j].url, function (player_info) {
                            if (player_info && player_info.baseURL) {
                                http_app_list[j].playerUrl = "" + player_info.baseURL + player_info.location;
                            } else {
                                http_app_list[j].playerUrl = "";
                            }
                            DBG_INFO("freeview_data_manager getAppList player_info = " + http_app_list[j].playerUrl);
                            index++;
                            //3.update database
                            if (index == http_app_list.length) {
                                web_sql_adapter.setAppList(http_app_list, function () {
                                    web_sql_adapter.getAppList(callback);
                                });
                            }
                        });
                    })(i);
                }
            } else {
                callback([]);
            }
        }, ifModified);
    }

    /**
     *
     * @param nid
     * @param ifModified
     * @param callback
     */
    var getChannelListFromServer = function(nid, ifModified, callback) {
        DBG_INFO("getChannelListFromServer CALL ");
        try {
            http_adapter.getChannelList(nid, function(http_channel_list, time_stamp, dataNoChange) {
                DBG_INFO("freeview_data_manager getChannelList http_channel_list.lenhth = " + http_channel_list.length);
                if (!!http_channel_list && http_channel_list.length > 0) {
                    web_sql_adapter.setChannelList(http_channel_list, nid, function() {
                        callback(time_stamp);
                    });
                } else {
                    callback(time_stamp, dataNoChange);
                }
            }, ifModified);
        } catch (ex) {
            DBG_ERROR("getChannelListFromServer error = " + ex.message);
            callback([]);
        }

    }

})();