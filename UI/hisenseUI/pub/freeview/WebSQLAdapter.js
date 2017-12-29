/**
 * Created by yangcheng3 on 2016-12-20.
 */
var web_sql_adapter = {};
var Hi_SQL = {};
(function () {
    web_sql_adapter.ListName = {
        SQL_AppList: "SQL_AppList",
        SQL_ChannelList: "SQL_ChannelList",
        SQL_RqChannelList: "SQL_RqChannelList",
        SQL_ProgramList: "SQL_ProgramList",
        SQL_TemplateAIT: "SQL_TemplateAIT"
    };
    /**
     * create SQL
     */
    web_sql_adapter.init = function () {
        DBG_INFO("web_sql_adapter.init");
        var dbConfig = {};
        function initDB() {
            try {
                html5sql.openDatabase("hisense_DB_V1.3", "1.1" , "Hisense tv Database", 300*1024*1024);
                appListCreateSql = " CREATE TABLE  IF NOT EXISTS SQL_AppList (Id  TEXT PRIMARY KEY, app_index INTEGER, imageURL TEXT, applocation TEXT, title TEXT, playerType TEXT, baseURL TEXT, time_stamp INTEGER); ";
                channelListCreateSql = " CREATE TABLE  IF NOT EXISTS SQL_ChannelList (service_id INTEGER PRIMARY KEY, name TEXT, mediauri_image TEXT, mediauri_vnd_dvb_ait TEXT, service_type TEXT,rquestListNId  TEXT,time_stamp INTEGER); ";
                rqChannelListCreateSql = " CREATE TABLE  IF NOT EXISTS SQL_RqChannelList (Id  TEXT PRIMARY KEY, request_starttime INTEGER, service_id INTEGER,  time_stamp INTEGER); ";
                programListCreateSql = "CREATE TABLE  IF NOT EXISTS SQL_ProgramList (Id TEXT PRIMARY KEY,program_id TEXT, sever_id INTEGER, eventId INTEGER,title TEXT, icon TEXT, secondaryTitle TEXT, medium_desc TEXT,genre INTEGER, startTime INTEGER, endTime INTEGER, channelLogo TEXT, mediaURL TEXT, auxiliary_url TEXT, media_availability INTEGER, fepg_availability INTEGER, hd_or_sd TEXT, audio_desc TEXT, subtitle INTEGER,program_ad  INTEGER, startOfAvailability INTEGER, endOfAvailability INTEGER, rqChannelListId TEXT, time_stamp INTEGER); ";
                templateAITCreateSql = "CREATE TABLE  IF NOT EXISTS SQL_TemplateAIT (Ait_url TEXT PRIMARY KEY, name TEXT, type TEXT, priority INTEGER, profile TEXT, versionMajor INTEGER, versionMinor INTEGER, versionMicro INTEGER, baseURL TEXT); ";

                requestListCreateSql = "CREATE TABLE  IF NOT EXISTS SQL_RquestList (Id  TEXT PRIMARY KEY, typed TEXT,  time_stamp INTEGER); ";

                var sql = appListCreateSql + channelListCreateSql + rqChannelListCreateSql + programListCreateSql + templateAITCreateSql + requestListCreateSql;
                var startTime = new Date();
                html5sql.process(
                    sql,
                    function(){ //Success
                        //var endTime = new Date();
                        clearAllExpiredData();
                        //DBG_INFO("web_sql_adapter.init "+((endTime - startTime) / 1000) + "s");
                    },
                    function(error, failingQuery){ //Failure
                        DBG_ERROR("Error: " + error.message);
                    }
                );
            } catch (error) {
                DBG_ERROR("Error: " + error.message);
            }
        }
        initDB();
        //clearAllExpiredData();
    };
    web_sql_adapter.destroy = function () {
        DBG_INFO("web_sql_adapter.destroy");
        //TODO:
    };
    /**
     * query data from the app list table
     * @param callback
     */
    web_sql_adapter.getAppList = function (callback) {
        DBG_INFO("web_sql_adapter.getAppList " + (typeof callback));

        if (typeof callback === "function") {
            var sql = "select * from SQL_AppList order by app_index";
            Hi_SQL.select(sql,function(data) {
                callback(data);
            });
        }
    };
    /**
     * insert or update data to the app list table
     * @param {Array} list the list data
     */
    web_sql_adapter.setAppList = function (list, callback) {
        DBG_INFO("web_sql_adapter.setAppList list.length = " + list.length);
        if (typeof callback != "function") {
            DBG_INFO("web_sql_adapter.setAppList does not need callback");
        }
        var data = [];
        var appListInsertsql = "" ;

        var sql = "delete from SQL_AppList ";
        Hi_SQL.delete(sql,function() {
            var title = "", groupId = "", playerUrl = "", url = "", icon = "";
            var time_stamp = 0, index = 0;

            var dataSql = " replace into  SQL_AppList (id, app_index, imageURL, applocation, title, playerType, baseURL, time_stamp) VALUES (?,?,?,?,?,?,?,?); ";
            var statements = [];
            for (var i = 0; i < list.length; i++) {
                playerUrl = list[i].playerUrl
                /*if (!playerUrl) {
                    continue;
                }*/
                playerUrl = trimStr(playerUrl);
                if (!list[i].index) {
                    index = freeview_util.getDefaultAppIndex(list[i].groupId);
                } else {
                    index = trimInteger(list[i].index);
                }
                icon = trimStr(list[i].icon);
                url = trimStr(list[i].url);
                title = trimStr(list[i].title);
                groupId = trimStr(list[i].groupId);
                time_stamp = trimInteger(list[i].time_stamp);

                var statement = {
                    sql: dataSql,
                    data: [groupId, index, icon, '', title, url, playerUrl, time_stamp],
                    success: function () {
                        // console.log("insert data into db success.....");
                    }
                }
                statements.push(statement);
            }

            if (list.length > 0) {
                Hi_SQL.insertByObj(statements, 'SQL_AppList', function () {
                    callback();
                });
            } else {
                callback();
            }
        });
    };


    web_sql_adapter.setOneApp = function (app) {
        var title = "", groupId = "", playerUrl = "", url = "", icon = "";
        var time_stamp = 0;
        var dataSql = " replace into  SQL_AppList (id, app_index, imageURL, applocation, title, playerType, baseURL, time_stamp) VALUES (?,?,?,?,?,?,?,?); ";
        var statements = [];
        if (!app.index) {
            app.index = freeview_util.getDefaultAppIndex(app.Id);
        }
        var statement = {
            sql: dataSql,
            data: [app.Id, app.index, app.imageURL, app.applocation, app.title, app.playerType, app.baseURL, app.time_stamp],
            success: function () {
                // console.log("insert data into db success.....");
            }
        }
        statements.push(statement);
        Hi_SQL.insertByObj(statements, 'SQL_AppList', function () {
            //callback();
        });

    };

    /**
     * query data from the channel list table
     * @param callback
     */
    web_sql_adapter.getChannelList = function (callback) {
        DBG_INFO("web_sql_adapter.getChannelList " + (typeof callback));
        if (typeof callback === "function") {
            var sql = "select * from SQL_ChannelList";
            Hi_SQL.select(sql,function(data) {
                callback(data);
            });
        }
    };

    /**
     *
     * @param callback
     */
    web_sql_adapter.getChannelListByNid = function (rquestListNId, callback) {
        DBG_INFO("web_sql_adapter.getChannelList " + (typeof callback));
        if (typeof callback === "function") {
            var sql = "select * from SQL_ChannelList where rquestListNId ='" + rquestListNId + "'";
            Hi_SQL.select(sql,function(data) {
                callback(data);
            });
        }
    };
    /**
     * insert or update data to the channel list table
     * @param {Array} list the list data
     */
    web_sql_adapter.setChannelList = function (list, rquestListNId, callback) {
        DBG_INFO("web_sql_adapter.setChannelList");
        try {
            if (typeof callback != "function") {
                DBG_INFO("web_sql_adapter.setChannelList does not need callback");
            }
            var data = [];
            var channelListInsertsql = "";
            var name = "",time_stamp = 0,serviceId = "",icon = "",url = "";

            var dataSql =" replace into  SQL_ChannelList (service_id, name, mediauri_image, mediauri_vnd_dvb_ait, service_type, rquestListNId, time_stamp) VALUES (?,?,?,?,?,?,?); ";
            var statements =[];
            for (var i = 0; i < list.length; i++) {
                serviceId =trimInteger(list[i].serviceId);
                name = trimStr(list[i].name);
                icon = trimStr(list[i].icon);
                url = trimStr(list[i].url);
                time_stamp = trimInteger(list[i].time_stamp);

                var statement = {
                    sql:dataSql,
                    data:[serviceId, name, icon, url, trimStr(list[i].service_type), rquestListNId, time_stamp],
                    success:function(){
                        // console.log("insert data into db success.....");
                    }
                }
                statements.push(statement);
            }
            if(list.length > 0) {
                Hi_SQL.insertByObj(statements, 'SQL_ChannelList', function() {
                    callback();
                });
            } else {
                callback();
            }
        } catch (ex) {
            DBG_ERROR("web_sql_adapter.setChannelList"+ex.message);
        }
    };
    /**
     * query data from the schedule table
     * get a program info
     * @param {Number} pid program id
     * @param callback
     */
    web_sql_adapter.getProgramDetail = function (pid, callback) {
        if (typeof callback != "function") {
            DBG_INFO("web_sql_adapter.getProgramDetail does not need callback");
        }
        DBG_INFO("web_sql_adapter.getProgramDetail pid = " + pid);
        if (!pid) {
            callback([]);
        } else {
            var sql = "select * from SQL_ProgramList where program_id='"+pid+"' ";
            Hi_SQL.select(sql, function(data) {
                callback(data[0]);
            });
        }
       /* db.linq.from("SQL_ProgramList").where("program_id").like(pid).and("program_id").equals(pid).select().then(function (arg) {
            callback(arg[0]);
        });*/
    };
    /**
     * query data from the schedule table
     * get all schedules
     * @param {Array} sids service ids
     * @param {Number} start_time start time of schedules
     * @param {Number} end_time end time of schedules
     * @param callback
     */
    web_sql_adapter.getScheduleData = function (sids, start_time, end_time, callback) {
        DBG_INFO("web_sql_adapter.getScheduleData ");
        if (typeof callback != "function") {
            DBG_INFO("web_sql_adapter.getScheduleData does not need callback");
        }
        try {
           /* start_time = start_time - 0 - 1;
            end_time = end_time - 0 + 1;
            */
            //var sidString = "'" + sids.join("','") + "'";
            var sidString = sids.join(",");
            //var sidString =  sids.join(",");
            var sql = "select * from SQL_ProgramList where sever_id in("+sidString+") and endTime >"+start_time+
                " and startTime <"+end_time+" order by startTime";

            Hi_SQL.select(sql, function(data) {
                var programList = [];
                for (var i = 0; i < sids.length; i++) {
                    programList["a_" + sids[i]] = [];
                }
                if (data) {
                    var item = null;
                    //var current_time = getDVBLongTime();
                    var current_time = new Date().valueOf()/GLOBAL.MILLIBASE;
                    var auxiliary_url = [], auxiliary = true;
                    for (var j = 0; j < data.length; j++) {
                        item = data[j];
                        if (item && item.sever_id) {
                            if(typeof item.auxiliary_url === "string" && item.auxiliary_url !== "") {
                                auxiliary = true;
                                var template =  web_sql_adapter.queryTemplateArr(item.auxiliary_url);
                                if(!template) {
                                    if (auxiliary_url.indexOf(item.auxiliary_url) < 0) {
                                        //http_adapter.getTemplateData(item.auxiliary_url, function (template_data) {});
                                        auxiliary_url.push(item.auxiliary_url);
                                    }
                                    auxiliary = false;
                                } else {
                                    if (!!template.is_exp) {
                                        if (auxiliary_url.indexOf(item.auxiliary_url) < 0) {
                                            auxiliary_url.push(item.auxiliary_url);
                                        }
                                    }
                                    // {"type":trimStr(template_data.type), "priority":priority, "profile":trimStr(template_data.profile), "versionMajor":versionMajor, "versionMinor":versionMinor, "versionMicro":versionMicro};
                                    if(!template["type"] || template["type"].indexOf("application/vnd.hbbtv") < 0) {
                                        auxiliary = false;
                                    } else if(template["profile"] != 0) {
                                        auxiliary = false;
                                    } else if(!template["versionMinor"] || template["versionMinor"] > 3) {
                                        auxiliary = false;
                                    } else if(!template["versionMajor"] || template["versionMajor"] != 1) {
                                        auxiliary = false;
                                    } else if(!template["versionMicro"] || template["versionMicro"] != 1) {
                                        auxiliary = false;
                                    }
                                }
                            }
                            item.available = freeview_util.getProgramAvailablility(item.endTime, (item.startOfAvailability), (item.endOfAvailability), item.media_availability, item.fepg_availability, current_time, auxiliary);
                            programList["a_" + item.sever_id].push(item);
                        }
                    }
                    for (var i = 0; i < auxiliary_url.length; i++) {
                        http_adapter.getTemplateData(auxiliary_url[i]);
                    }
                }
                DBG_ERROR("web_sql_adapter.getScheduleData programList.length = " + programList.length);
                callback(programList);
                //callback(data);
            });
        } catch (ex) {
            DBG_ERROR("web_sql_adapter.getScheduleData error = " + ex.message);
            callback([]);
        }

    };


    /**
     * save schedule data to web_sql
     * @param sid
     * @param start_time
     * @param schedule_data
     * @param callback
     */
    web_sql_adapter.setScheduleData = function (sid, start_time, schedule_data, callback) {
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("web_sql_adapter.setScheduleData does not need callback");
            };
        }
        DBG_INFO("web_sql_adapter.setScheduleData");
        if (!schedule_data || schedule_data.length <= 0) {
            callback();
            return;
        }
        //TODO:
        //if start time is not 12-hour-unit, do not need to save to web_sql
        var time_stamp = schedule_data[0].time_stamp;
        if(typeof(time_stamp) == "undefined" || time_stamp == "undefined") {
            time_stamp = 0;
        }
        var rqChannelListId =  sid + "-" + start_time;
        web_sql_adapter.updateRequestTable(sid, start_time, time_stamp);

        var sql = "delete from SQL_ProgramList where rqChannelListId = '" + rqChannelListId + "' ";
        Hi_SQL.delete(sql,function() {
            var main_title = "",secondary_title = "",audio_desc = "",subtitle = "",program_ad = "", medium_desc = "",Id = "",programId = "",serviceId = 0;
            var endTime = "",genre = 0,startTime = 0,duration = 0, media_availability = 0, fepg_availability = 0;
            var dataSql  = " replace into  SQL_ProgramList (Id, program_id, sever_id, eventId, title, icon, secondaryTitle, medium_desc,genre, startTime, endTime,  channelLogo, mediaURL, auxiliary_url, media_availability, fepg_availability, hd_or_sd, audio_desc, subtitle,program_ad, startOfAvailability, endOfAvailability, rqChannelListId , time_stamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var statements =[];
            for (var i = 0; i < schedule_data.length; i++) {
                genre = trimInteger(schedule_data[i].genre);
                startTime = trimInteger(schedule_data[i].startTime);
                duration = trimInteger(schedule_data[i].duration);
                endTime = startTime + duration;

                main_title = trimStr(schedule_data[i].main_title);
                secondary_title = trimStr(schedule_data[i].secondary_title);
                medium_desc = trimStr(schedule_data[i].synopsis);
                audio_desc = trimStr(schedule_data[i].audio_desc);
                subtitle = trimInteger(schedule_data[i].subtitle);
                program_ad = trimInteger(schedule_data[i].program_ad);
                programId = trimStr(schedule_data[i].programId);
                serviceId =  trimInteger(schedule_data[i].serviceId);
                time_stamp = trimInteger(schedule_data[i].time_stamp);
                media_availability = !schedule_data[i].media_availability ? 0 : 1;
                fepg_availability = !schedule_data[i].fepg_availability ? 0 : 1;
                Id = serviceId + " - " + programId + "-" + startTime;

                var statement = {
                    sql:dataSql,
                    data:[Id,  programId, serviceId, trimInteger(schedule_data[i].eventId), main_title, trimStr(schedule_data[i].icon), secondary_title, medium_desc, genre, startTime, endTime, trimStr(schedule_data[i].channelLogo), trimStr(schedule_data[i].programUrl), trimStr(schedule_data[i].auxiliaryURL), media_availability, fepg_availability, trimStr(schedule_data[i].hd_or_sd), audio_desc, subtitle,  program_ad, trimInteger(schedule_data[i].startAvailable), trimInteger(schedule_data[i].endAvailable), rqChannelListId, time_stamp],
                    success:function(){
                        // console.log("insert data into db success.....");
                    }
                }
                statements.push(statement);
            }

            if(schedule_data.length > 0) {
                Hi_SQL.insertByObj(statements, 'SQL_ProgramList', function() {
                    callback();
                });
            } else {
                callback();
            }
        });
    };

    web_sql_adapter.updateScheduleTimeStamp = function (sid, start_time, time_stamp) {

        if(typeof(time_stamp) == "undefined" || time_stamp == "undefined" || !time_stamp) {
            return;
        }
        var rqChannelListId =  sid + "-" + start_time;
        web_sql_adapter.updateRequestTable(sid, start_time, time_stamp);

        time_stamp = trimInteger(time_stamp);
        var sql = "update SQL_ProgramList set time_stamp = "+time_stamp+" where rqChannelListId = '" + rqChannelListId + "' ";
        Hi_SQL.update(sql,function() {});
    };


    web_sql_adapter.queryRequestTable = function (keyArrStr, callback) {
        DBG_INFO("web_sql_adapter.queryScheduleData ");
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("web_sql_adapter.queryScheduleData does not need callback");
            };
        }
        try {
            var time = new Date().valueOf()/GLOBAL.MILLIBASE - 5;
            var sql = "select * from SQL_RqChannelList where Id in (" + keyArrStr + ") and time_stamp >" + time;
            DBG_INFO("web_sql_adapter.SQL_RqChannelList sql = " + sql);
            Hi_SQL.select(sql, function(data) {
                callback(data);
            });
        } catch (e) {
            DBG_ERROR("web_sql_adapter.queryScheduleData err = " + e.message);
            callback(false);
        }
    };
    /**
     * query schedule request is valid or not from request table
     * @param sid
     * @param start_time
     * @param callback
     */
    web_sql_adapter.queryScheduleData = function (sid, start_time, callback) {
        DBG_INFO("web_sql_adapter.queryScheduleData ");
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("web_sql_adapter.queryScheduleData does not need callback");
            };
        }
        try {
            var strID = sid + "-" + start_time;
            DBG_INFO("web_sql_adapter.SQL_RqChannelList strID = " + strID);
            var sql = "select * from SQL_RqChannelList where Id='"+strID+"' ";
            Hi_SQL.select(sql, function(data) {
                //callback(data[0]);
                if (data && data.length > 0) {
                    callback(true);
                } else {
                    callback(false);
                }
            });
        } catch (e) {
            DBG_ERROR("web_sql_adapter.queryScheduleData err = " + e.message);
            callback(false);
        }
    };

    web_sql_adapter.updateRequestTable = function (sid, startTime, time_stamp) {
        DBG_INFO("web_sql_adapter.updateRequestTable");
        startTime = trimInteger(startTime);
        time_stamp = trimInteger(time_stamp);
        sid = trimInteger(sid);
        var Id =  sid + "-" + startTime;

        var dataSql =" replace into SQL_RqChannelList (Id,request_starttime,service_id,time_stamp) VALUES (?,?,?,?); ";
        var statements =[];
        DBG_INFO("replace into SQL_RqChannelList (Id,request_starttime,service_id,time_stamp) VALUES ("+Id+", "+startTime+", "+sid +", "+time_stamp+"); ");

        var statement = {
            sql:dataSql,
            data:[Id, startTime, sid, time_stamp],
            success:function(){
                // console.log("insert data into db success.....");
            }
        }
        statements.push(statement);
        if(!!sid) {
            Hi_SQL.insertByObj(statements, 'SQL_RqChannelList', function() {
                DBG_INFO("web_sql_adapter.SQL_RqChannelList success" );
            });
        } else {
            DBG_INFO("web_sql_adapter.SQL_RqChannelList error" );
        }
    };


    /**
     * cache the template data
     * @type {Array}
     */
    var templates = [],templatesObj = [];
    /**
     * query template xml is valid or not
     * @param url
     * @returns {boolean}
     */
    web_sql_adapter.queryTemplate = function (url) {
        var cache_name = "TemplateAit_" + url;
        var cache = cache_adapter.getCache(cache_name);
        if (!!cache) {
            return true;
        } else {
            return false;
        }
        //return !(templates.indexOf(url) < 0);
    };

    web_sql_adapter.queryTemplateArr = function (url) {
        var cache_name = "TemplateAit_" + url;
        var template_data = cache_adapter.getCache(cache_name);
        var template_data_exp = cache_adapter.getCache(cache_name, true);
        //return cache
       if(!!template_data || !!template_data_exp) {
           var is_exp = !template_data;
            var name = template_data_exp.name;
            var priority = template_data_exp.priority;
            var versionMajor = template_data_exp.versionMajor;
            var versionMinor = template_data_exp.versionMinor;
            var versionMicro = template_data_exp.versionMicro;
            var profile = template_data_exp.profile;
            return {"type":template_data_exp.type, "priority":priority, "profile":profile, "versionMajor":versionMajor, "versionMinor":versionMinor, "versionMicro":versionMicro, "is_exp":is_exp};
        } else {
            return null;
        }
    };

    /**
     * save template xml to web_sql
     * @param url
     * @param template_data
     */
    web_sql_adapter.setTemplateData = function (url, template_data) {
        if (!template_data) {
            DBG_ERROR("web_sql_adapter.setTemplateData template_data is not exist");
            return;
        }
        if (templates.indexOf(url) >= 0) {
            DBG_ERROR("web_sql_adapter.setTemplateData template_data is already exist");
            return;
        }
        try {
            var name = trimStr(template_data.name);
            var priority = trimInteger(template_data.priority);
            var versionMajor = trimInteger(template_data.versionMajor);
            var versionMinor = trimInteger(template_data.versionMinor);
            var versionMicro = trimInteger(template_data.versionMicro);

            var templateAITInsertsql  = "  replace into SQL_TemplateAIT (Ait_url, name, type, priority, profile, versionMajor, versionMinor, versionMicro, baseURL) VALUES (?,?,?,?,?,?,?,?,?); ";
            var statements =[];

            templates.push(url);
            templatesObj[url] = {"type":trimStr(template_data.type), "priority":priority, "profile":trimStr(template_data.profile), "versionMajor":versionMajor, "versionMinor":versionMinor, "versionMicro":versionMicro};
            callback();

          /*  var statement = {
                sql:dataSql,
                data:[url, name, trimStr(template_data.type), priority, trimStr(template_data.profile), versionMajor, versionMinor, versionMicro, trimStr(template_data.baseURL)],
                success:function(){

                    // console.log("insert data into db success.....");
                }
            }
            statements.push(statement);
            if(!!sid) {
                Hi_SQL.insertByObj(statements, 'SQL_TemplateAIT', function() {
                    callback();
                });
            } else {
                callback();
            }*/
        } catch (ex) {
            DBG_ERROR("web_sql_adapter.setTemplateData err[" + ex.message + "], template_data[" + objToString(template_data) + "]");
        }
    };

    /**
     *
     * @param Id
     * @param callback
     */
    web_sql_adapter.getRequest = function (Id, callback) {
        DBG_INFO("web_sql_adapter.getRequest " + (typeof callback));
        var time = new Date().valueOf()/GLOBAL.MILLIBASE - 10; //after 10 s request server
        if (typeof callback === "function") {
            var sql = "select * from SQL_RquestList where Id = '" + Id + "' and  time_stamp > "+time;;
            Hi_SQL.select(sql, function(data) {
                callback(data, Id);
            });
        }
    };

    /**
     *
     * @param Id
     * @param typed
     * @param time_stamp
     */
    web_sql_adapter.setRequest =  function (Id, typed, time_stamp) {
        DBG_INFO("web_sql_adapter.setRequest");
        try {
            time_stamp = trimInteger(time_stamp);
            Id = trimStr(Id);

            var dataSql =" replace into SQL_RquestList (Id,typed,time_stamp) VALUES (?,?,?); ";
            var statements =[];
            //time_stamp = time_stamp + 86400;
            var statement = {
                sql:dataSql,
                data:[Id, typed, time_stamp],
                success:function(){
                    // console.log("insert data into db success.....");
                }
            }
            statements.push(statement);
            if(!!Id) {
                Hi_SQL.insertByObj(statements, 'SQL_RquestList', function() {
                    DBG_INFO("web_sql_adapter.SQL_RquestList success" );
                });
            } else {
                DBG_INFO("web_sql_adapter.SQL_RquestList error" );
            }
        } catch (ex) {
            DBG_ERROR("web_sql_adapter.setRequest"+ex.message);
        }
    };


    /**
     *clear SQL
     * @param sqlname
     */
    web_sql_adapter.clearsql = function (sqlname) {
        var sql = " delete from "+sqlname;
        Hi_SQL.delete(sql, function() {
            DBG_INFO("web_sql_adapter.clearsql table:"+sqlname);
        });
    };

    /**
     * delete expired data from table
     */
    var clearAllExpiredData = function () {
        var current_time = new Date().valueOf()/GLOBAL.MILLIBASE;
        var time = 0;
       // web_sql_adapter.clearsql("SQL_RquestList");
        //web_sql_adapter.clearsql("SQL_AppList");

        time = current_time; //freeview_util.getCurrentTime();
        var sql = " delete from SQL_ChannelList where time_stamp < "+time;
        Hi_SQL.delete(sql, function() {
            DBG_INFO("web_sql_adapter.clearsql table: SQL_ChannelList");
        });

        time =  current_time;// - 604800 - 12 * 3600; //7.5 days
        sql = " delete from SQL_RqChannelList where request_starttime < "+time;
        Hi_SQL.delete(sql, function() {
            DBG_INFO("web_sql_adapter.clearsql table:SQL_RqChannelList");
        });

        time =  current_time;// - 604800; //freeview_util.getCurrentTime() - 604800; //7 days
        sql = " delete from SQL_ProgramList where endTime < "+time;
        Hi_SQL.delete(sql, function() {
            DBG_INFO("web_sql_adapter.clearsql table:SQL_ProgramList");
        });

        time =  current_time;// - 604800; //freeview_util.getCurrentTime() - 604800; //7 days
        sql = " delete from SQL_RquestList where endTime < "+time;
        Hi_SQL.delete(sql, function() {
            DBG_INFO("web_sql_adapter.clearsql table:SQL_RquestList");
        });
        web_sql_adapter.clearsql("SQL_TemplateAIT");
    };

    /**
     * replace string
     * @param str
     * @returns {*}
     */
    var trimStr = function(str) {
        try {
            if (typeof(str) == "undefined" || str == "undefined") {
                str = "";
            }
        } catch (e) {
            str = "";
            DBG_ALWAYS("trimStr str" + e.message);
        } finally {
            return str;
        }
    }

    /**
     *
     * @param inInteger
     * @returns {*}
     */
    var trimInteger = function(inInteger) {
        if(!inInteger || typeof(inInteger) == "undefined" || inInteger == "undefined" || isNaN(inInteger)) {
            inInteger = 0;
        }
        return inInteger;
    }
/*})();

(function () {*/
    /**
     * select data
     * @param sql
     * @param callback
     */
    Hi_SQL.select = function(sql,callback) {
        try {
            html5sql.process(
                sql,
                function(transaction, results){ //Success
                    DBG_INFO("back data count : " + results.rows.length);
                    callback(results.rows)
                },
                function(error, failingQuery){ //Failure
                    DBG_ERROR("Error: " + error.message);
                }
            );
        } catch (error) {
            DBG_ERROR("Error: " + error.message);
        }
    }
    /**
     * insert data
     * @param sql
     * @param callback
     */
    Hi_SQL.insert = function(sql,callback) {
        //DBG_INFO("------------------------------------------"+sql);
        try {
            var startTime = new Date();
            html5sql.process(
                sql,
                function(){ //Success
                    //var endTime = new Date();
                    //DBG_INFO(sql+" "+((endTime - startTime) / 1000) + "s");
                    //DBG_INFO("insert use "+((endTime - startTime) / 1000) + "s");
                    callback();
                },
                function(error, failingQuery){ //Failure
                    DBG_ERROR("Error: " + error.message);
                    callback();
                }
            );
        } catch (error) {
            DBG_ERROR("Error: " + error.message);
            callback();
        }
    }

    Hi_SQL.insertByObj = function(statements, tableName, callback) {

        if(!statements) {
            callback();
            return;
        }
        try {
            html5sql.process(
                statements,function(){
                    DBG_INFO("insert success: " + tableName);
                    callback();
                },function(error){
                    DBG_ERROR("Error: " + tableName+" " + error.message);
                    callback();
                }
            );
        } catch (error) {
            DBG_ERROR("Error: " + error.message);
            callback();
        }
    }

    /**
     * delete data from table
     * @param sql
     * @param callback
     */
    Hi_SQL.delete = function(sql,callback) {
        try {
            //var startTime = new Date();
            html5sql.process(
                sql,
                function(){ //Success
                    //var endTime = new Date();
                    //DBG_INFO("delete use "+((endTime - startTime) / 1000) + "s");
                    callback();
                },
                function(error, failingQuery){ //Failure
                    DBG_ERROR("Error: " + error.message);
                    callback();
                }
            );
        } catch (error) {
            DBG_ERROR("Error: " + error.message);
            callback();
        }
    }

    /**
     * update database
     * @param sql
     * @param callback
     */
    Hi_SQL.update = function(sql,callback) {
        try {
            //var startTime = new Date();
            html5sql.process(
                sql,
                function(){ //Success
                    //var endTime = new Date();
                   // DBG_INFO("update use "+((endTime - startTime) / 1000) + "s");
                    callback();
                },
                function(error, failingQuery){ //Failure
                    DBG_ERROR("update Error: " + error.message);
                    callback();
                }
            );
        } catch (error) {
            DBG_ERROR("Error: " + error.message);
            callback();
        }
    }

})();