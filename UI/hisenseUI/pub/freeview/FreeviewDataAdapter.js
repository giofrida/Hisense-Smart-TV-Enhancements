/**
 * Created by shaoxiaoming on 2016-12-28.
 */
var freeview_data_adapter = {};
(function () {
    var programMaxCols = 30;
    var totalSeconds = 3600 * 3;
    var programList = Array(),iteratorProgramList = Array();
    var epgEventIterator = Array();
    var currentPageChannelList = Array(), currentPageServiceIdList = Array(), currentPageStartTime,
        currentPageEndTime,currentPageFirstServiceId = 0,currentPageStartTime = 0,currentPageChannelIdList = Array();
    var REQUEST_TIMEOUT=-300,TOTAL_SECONDS = 3600 * 12;
    var requestStartTimeList = Array(),requestEndTimeList = Array(),requestBakStartTimeList = Array();
    var pageToken = 0;
    var programcallback = function(programList){}, plyerUrlcallback = function(url){}, detailcallback = function(detail){};


    var init = function (callback) {
        regestEpgprogramListener();
        regestProgramPlyerUrlListener();
        regestProgramDetailListener();
    };

    /**
     * get program data to page
     * @param service_id_arr  channel service id service_id_list, player_id_list
     * @param start_time start time
     * @param end_time   end time
     * @param callback  callback page function
     */
    freeview_data_adapter.getProgramList = function (chnls, start_time, end_time, callback) {
        programList = [];
        currentPageServiceIdList = [];
        DBG_INFO("freeview_data_adapter %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% epg page caller");
        if(!chnls || !chnls[0].serviceId) {  //channel service id is null ,not back data
            callback(programList);
            DBG_INFO("freeview_data_adapter channel service id is null ,not back data");
            return;
        }
        iteratorProgramList = [];
        currentPageChannelList = chnls;
        for(var i = 0; i < currentPageChannelList.length; i++) {
            currentPageServiceIdList[i] = currentPageChannelList[i].serviceId;
        }

        if(currentPageFirstServiceId !=  currentPageServiceIdList[0] || currentPageStartTime != start_time ) {  //new epg page ��?create new Token
            currentPageFirstServiceId = currentPageChannelList[0].serviceId;
            currentPageStartTime = start_time;
            currentPageEndTime = end_time;
            requestStartTimeList[0] = start_time;
            requestBakStartTimeList = requestStartTimeList.slice(0);  //Deep copy array
            currentPageChannelIdList = [];
            //create page Token
            var prefixInt = parseInt(Math.random()*10000);
            var postfixInt = parseInt(Math.random()*10000);
            pageToken = prefixInt + "1" + postfixInt;
            DBG_INFO("freeview_data_adapter new epg page caller,create new Token" + pageToken);
            if(tv) model.fvpepg.sendPageToken(pageToken);
        }
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("freeview_data_adapter getProgramList empty callback");
            };
        }
        programcallback = callback;
        var time_step =  currentPageEndTime - currentPageStartTime; //page all time

        //more than 3 hours time
        if(time_step > TOTAL_SECONDS) {  //great than  12hour,page get  many days programs data  ,split request
            if(currentPageChannelList.length > 1) {  //page get many days program ,only permit one channel
                var tempServiceIdList = [];
                tempServiceIdList[0] = currentPageChannelList[0];
                currentPageChannelList = tempServiceIdList;
            }
            var localStartTime = currentPageStartTime + GLOBAL.TIMEZONE_SECONDS;//getLocalTimeByUTC(currentPageStartTime);
            var localEndTime = currentPageEndTime +  GLOBAL.TIMEZONE_SECONDS; //getLocalTimeByUTC(currentPageEndTime);
            var startZeroClock = localStartTime % (TOTAL_SECONDS*2);
            var endZeroClock = localEndTime % (TOTAL_SECONDS*2);
            if(startZeroClock >0 && endZeroClock > 0) {  //page request start time and end time all not at 24:00
                callback(programList);
                DBG_INFO("freeview_data_adapter page request start time and end time all not at 24:00");
                return;
            }
            if(startZeroClock == 0) {  //start time at 24:00
                var chnl = [];
                var thisStartTime,thisEndTime;
                requestStartTimeList = [];
                requestEndTimeList = [];
                epgEventIterator = [];
                for(var i = 0; i >= 0; i++) {
                    chnl = currentPageChannelList[0];
                    chnl.programs = null;
                    preload = 0; //preload data 0 current page data

                    thisStartTime = currentPageStartTime + TOTAL_SECONDS*i;
                    thisEndTime = currentPageStartTime + TOTAL_SECONDS*(i+1);
                    if(thisEndTime > currentPageEndTime) thisEndTime = currentPageEndTime ; //to the left last request
                    requestStartTimeList[i] = thisStartTime;
                    requestEndTimeList[i] = thisEndTime;
                    if(!chnl.serviceId) break;  //serviceid is null ,stop get fvp program

                    currentPageChannelIdList[chnl.serviceId+""+thisStartTime] = chnl;

                    //programList[chnl.serviceId] = null;
                    iteratorProgramList[chnl.serviceId+""+thisStartTime] = [];
                    epgEventIterator[chnl.serviceId+""+thisStartTime] = createFreeviewIterator(chnl, thisStartTime, thisEndTime, onGetProgramsEvent,preload,pageToken);
                    epgEventIterator[chnl.serviceId+""+thisStartTime].readNextRows(programMaxCols);
                    if(thisEndTime >= currentPageEndTime) break; //to the last request, exit
                }
                //requestBakStartTimeList = requestStartTimeList.slice(0);  //Deep copy array
                //programList = [];
                var buffer = 8 - requestStartTimeList.length;
                var key = 0,j = 0;
                var lastKey = -1;
                for(var i = requestStartTimeList.length-1; i >= 0; i--) {
                    thisStartTime = requestStartTimeList[i];
                    key =  Math.floor((j + buffer)/2);
                    if(iteratorProgramList.hasOwnProperty(currentPageChannelList[0].serviceId + "" + thisStartTime)) {
                        if(lastKey != key) {
                            programList[currentPageChannelList[0].serviceId + "_" + key] =   iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime];
                            lastKey = key;
                        } else {
                            programList[currentPageChannelList[0].serviceId + "_" + key] =   iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime].concat(programList[currentPageChannelList[0].serviceId + "_" + key] );
                        }
                    }
                    j++;
                }
                programcallback(programList);
                return;

            } else {  //end time at 24:00
                var chnl = [];
                var thisStartTime,thisEndTime;
                requestStartTimeList = [];
                epgEventIterator = [];
                for(var i = 0; i >= 0; i++) {
                    chnl = currentPageChannelList[0];
                    chnl.programs = null;
                    preload = 0; //preload data 0 current page data
                    thisStartTime = currentPageEndTime - TOTAL_SECONDS * (i+1);
                    thisEndTime = currentPageEndTime - TOTAL_SECONDS * i;
                    if(thisStartTime < currentPageStartTime) thisStartTime = currentPageStartTime ; //to the right last request
                    requestStartTimeList[i] = thisStartTime;
                    requestEndTimeList[i] = thisEndTime;
                    if(!chnl.serviceId) break;  //serviceid is null ,stop get fvp program

                    currentPageChannelIdList[chnl.serviceId+""+thisStartTime] = chnl;

                    iteratorProgramList[chnl.serviceId+""+thisStartTime] = [];
                    epgEventIterator[chnl.serviceId+""+thisStartTime] = createFreeviewIterator(chnl, thisStartTime, thisEndTime, onGetProgramsEvent,preload,pageToken);
                    epgEventIterator[chnl.serviceId+""+thisStartTime].readNextRows(programMaxCols);
                    if(thisStartTime <= currentPageStartTime) break; //to the last request, exit
                }

               // programList = [];
                var lastKey = -1;
                for(var i = 0; i < requestStartTimeList.length; i++) {
                    thisStartTime = requestStartTimeList[i];
                    key =  Math.floor(i/2);
                    if(iteratorProgramList.hasOwnProperty(currentPageChannelList[0].serviceId + "" + thisStartTime)) {
                        if(lastKey != key) {
                            programList[currentPageChannelList[0].serviceId + "_" + key] =   iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime];
                        } else {
                            programList[currentPageChannelList[0].serviceId + "_" + key] =    iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime].concat(programList[currentPageChannelList[0].serviceId + "_" + key] );
                        }
                    }
                }

                programcallback(programList);
                return;
            }
        } else {//3 hours time

            epgEventIterator = [];
            var chnl = [];
            for(var i = 0; i < currentPageChannelList.length; i++) {
                chnl = currentPageChannelList[i];
                chnl.programs = null;
                preload = 0;
                if(!chnl.serviceId) continue;  //serviceid is null goto next
                currentPageChannelIdList[chnl.serviceId+""+currentPageStartTime] = chnl;
                //programList[chnl.serviceId] = null;
                iteratorProgramList[chnl.serviceId+""+currentPageStartTime] = [];
                epgEventIterator[chnl.serviceId+""+currentPageStartTime] = createFreeviewIterator(chnl, currentPageStartTime, currentPageEndTime, onGetProgramsEvent,preload,pageToken);
                epgEventIterator[chnl.serviceId+""+currentPageStartTime].readNextRows(programMaxCols);
            }

            //programList = [];
            for(i = 0; i < currentPageChannelList.length; i++) {
                var key = 0,j = 0;
                var lastKey = -1;
                if(iteratorProgramList.hasOwnProperty(currentPageChannelList[i].serviceId+""+currentPageStartTime)) {
                    programList[currentPageChannelList[i].serviceId] = iteratorProgramList[currentPageChannelList[i].serviceId+""+currentPageStartTime];
                }
            }
            programcallback(programList);
        }
    };

    /**
     * get program player Url
     * @param baseURL
     * @param callback
     */
    freeview_data_adapter.startFetchMediaURL = function(baseURL, callback) {
        DBG_INFO("freeview_data_adapter base url: " + baseURL);
        if (typeof callback != "function") {
            callback = function () {
                DBG_INFO("freeview_data_adapter getProgramList empty callback");
            };
        }
        plyerUrlcallback = callback;
        if (baseURL) {
            model.fvpepg.setFEPGURL([baseURL, getFileName(baseURL)]);
        }
    }

     freeview_data_adapter.startFetchDetail = function(programId, callback) {
        DBG_INFO("freeview_data_adapter program Id: " + programId);
         if (typeof callback != "function") {
             callback = function () {
                 DBG_INFO("freeview_data_adapter getProgramList empty callback");
             };
         }
         detailcallback = callback;
        if ("N/A" != programId && programId) {
            model.fvpepg.setFEPGDetail([programId, getFileName(programId)]);
        }
    }


    /**
     * create program data
     * @param chnl
     * @param m_event
     */
    function onGetProgramsEvent(chnl, startLine, endLine, m_event) {
        if (null == m_event) {
            iteratorProgramList[chnl.serviceId+""+startLine] =  getNoProgramData();
        }
        else if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            iteratorProgramList[chnl.serviceId+""+startLine] = eventRowsToFreeview(chnl, m_event.rows, startLine, endLine);
        }

    }

    /**
     * read table
     * @param chnl
     * @param rows
     * @returns {Array}
     */
    function eventRowsToFreeview(chnl, rows,startLine, endLine) {
        //DBG_ALWAYS('eventRowsToFreeview rows:'+rows);
        var prgrms = [], i, leftEnd = startLine;
        var emptyFlag = 0;
        if(!rows) {
            rows = [];
        }
        var time_step =  currentPageEndTime - currentPageStartTime; //page all time
        if(time_step > TOTAL_SECONDS) {
            maxProgram = rows.length;
        }
        var maxProgram = programMaxCols;
        for (i = 0; i < maxProgram; i++) {
            var row = rows[i], prgrm = {};
            if (row && parseInt(row[FVPField.START_TIME_UTC])) {
                prgrm.channelUid = chnl.uid;
                //DBG_ALWAYS('prgrm.channelUid:'+prgrm.channelUid);
                prgrm.playId = chnl.playId;
                prgrm.eventId = "";
                prgrm.programId = row[FVPField.PROGRAM_ID];
                //DBG_ALWAYS('prgrm.programId:'+prgrm.programId);
                prgrm.attr = i + 1;

                prgrm.channelLogo = (row[FVPField.CHANNEL_LOGO] ? (row[FVPField.CHANNEL_LOGO] + "?w=128") : "");
                prgrm.contentImage = row[FVPField.CONTENT_IMAGE] ? row[FVPField.CONTENT_IMAGE] + "?w=522" : "";
                prgrm.title = row[FVPField.MAIN_TITLE];
                prgrm.secondaryTitle = row[FVPField.SECONDARY_TITLE];
                // prgrm.runningTime = row[FVPField.RUNNING_TIME];
                prgrm.text = row[FVPField.DESCRIPTION];
                prgrm.detail = row[FVPField.DESCRIPTION];
                prgrm.theme = parseInt(row[FVPField.PROGRAM_THEME]);
                prgrm.startTime = parseInt(row[FVPField.START_TIME_UTC]);
                prgrm.endTime = parseInt(row[FVPField.END_TIME_UTC]);
                //DBG_ALWAYS('prgrm.startTime :'+prgrm.startTime)
                //DBG_ALWAYS('prgrm.endTime :'+prgrm.endTime)
                //DBG_ALWAYS('prgrm.startTime :'+UTCToLocalTime(prgrm.startTime))
                //DBG_ALWAYS('prgrm.endTime :'+UTCToLocalTime(prgrm.endTime));
                prgrm.mediaURL = row[FVPField.MEDIA_URL];
                prgrm.guidance = row[FVPField.PROGRAM_GUIDANCE];
                prgrm.reminder = false;
                prgrm.record = false;
                prgrm.available = row[FVPField.PROGRAM_AVAILABLE_FLAG];
                prgrm.adFlag = parseInt(row[FVPField.PROGRAM_AD]);
                prgrm.hdFlag = parseInt(row[FVPField.PROGRAM_HDSD]);
                prgrm.subt = parseInt(row[FVPField.PROGRAM_SUBT]);
                if (1 && 0 == i && prgrm.startTime > startLine) {
                    prgrms.push({
                        channelUid:"",
                        playId: "",
                        eventId: "",
                        programId: "N/A",
                        attr: 0,
                        channelLogo:(row[FVPField.CHANNEL_LOGO] ? (row[FVPField.CHANNEL_LOGO] + "?w=128") : ""),
                        contentImage: "",
                        title: "",
                        secondaryTitle: "",
                        // runningTime: 0,
                        text: "",
                        detail: "",
                        guidance: "",
                        theme: 0,
                        startTime: startLine,
                        endTime: prgrm.startTime,
                        mediaURL: "",
                        reminder: false,
                        record: false,
                        availbale: false
                    });
                }
            }
            else {
                prgrm.channelUid = chnl.uid;
                prgrm.playId = chnl.playId;
                prgrm.eventId = "";
                prgrm.programId = (0 === emptyFlag) ? "N/A" : "";
                prgrm.attr = 0;

                if(row && 0 === parseInt(row[FVPField.START_TIME_UTC])){
                    prgrm.channelLogo = row[FVPField.CHANNEL_LOGO] ? row[FVPField.CHANNEL_LOGO] + "?w=128" : "";
                }
                else{
                    prgrm.channelLogo = "";
                }
                prgrm.contentImage = "";
                if(!!row&&(-200==parseInt(row[FVPField.PROGRAM_ID]))){//No catch up
                    //DBG_ALWAYS('No catch up programme:'+prgrm.channelUid);
                    prgrm.title = "No catch up programme";
                    prgrm.secondaryTitle = "";
                    // prgrm.runningTime = 0;
                    prgrm.text = "No catch up programme information";
                    prgrm.detail = "No catch up programme information";

                }else{
                    //DBG_ALWAYS('Loading...prgrm.channelUid:'+prgrm.channelUid);
                    prgrm.title = "Loading...";
                    prgrm.secondaryTitle = "";
                    // prgrm.runningTime = 0;
                    prgrm.text = "Loading...";
                    prgrm.detail = "Loading...";
                }
                prgrm.guidance = "";
                prgrm.theme = 0;
                prgrm.startTime = leftEnd;
                prgrm.endTime = endLine > leftEnd ? endLine : (leftEnd + totalSeconds);
                prgrm.mediaURL = "";
                prgrm.reminder = false;
                prgrm.record = false;
                prgrm.available = AVLFlag.NOT_AVAILABLE;
                prgrm.adFlag = "";
                prgrm.hdFlag = ""
                prgrm.subt = "";
                emptyFlag = 1;
            }
            leftEnd = prgrm.endTime;
            prgrms.push(prgrm);
            //DBG_ALWAYS('eventRowsToFreeview is end')
        }
        return prgrms;
    }

    /*
    create no data
     */
    function getNoProgramData() {
        prgrms[0] =
        {
            eventId: "N/A",
            programId: "",
            name: "No program",
            text: "No program",
            detail: "No program information",
            startTime: startLine,
            endTime: endLine
        };
        return prgrms;
    }

    /**
     * regest network program call back  message
     */
    function regestEpgprogramListener() {
        if(!tv) return;
        model.fvpepg.onFEPGIsReadyChanged = epgProgramlistener;
    }
    /**
     * regest player url call back massage
     */
    function regestProgramPlyerUrlListener() {
        if(!tv) return;
        model.fvpepg.onFEPGURLChanged = plyerUrllistener;
    }

    /**
     * regest program detail call back
     */
    function regestProgramDetailListener() {
        if(!tv) return;
        model.fvpepg.onFEPGDetailChanged = detaillistener;
    }
    /**
     *
     * @param backArg
     */
    function  epgProgramlistener(backArg) {
        var svl_id = null;
        var start_time = null;
        var end_time = null;
        var localrequestOut = null;
        DBG_INFO("freeview_data_adapter call back data");
        svl_id = backArg[0];
        start_time = backArg[1];
        end_time = backArg[2];
        localrequestOut = backArg[3];
        //DBG_ALWAYS('refreshEPGWhenTimeChanged backArg is:'+objToString(backArg));

        start_time = parseInt(start_time);
        end_time = parseInt(end_time);
        var current_page = false;
        //svl_id = parseInt(svl_id);
        DBG_ALWAYS('svl_id:'+svl_id);

        if(!currentPageChannelIdList.hasOwnProperty(svl_id+""+start_time)) {
            DBG_INFO("freeview_data_adapter not in currentPageChannelIdList");
            return;
        }
        chnl = currentPageChannelIdList[svl_id+""+start_time];

        if(currentPageServiceIdList.indexOf(svl_id) < 0) {
            DBG_INFO("freeview_data_adapter not exit service id exit");
            return;
        } // not exit service id exit
        if(currentPageStartTime > start_time || currentPageEndTime < start_time) {
            DBG_INFO("freeview_data_adapter not current page time exit");
            return;
        } // not current page time exit

        if(currentPageStartTime == start_time && currentPageEndTime == end_time) { //request 3hour program data
            //Time out
            if(localrequestOut == REQUEST_TIMEOUT){
                DBG_ALWAYS('freeview_data_adapter requestTimeOut----');
                iteratorProgramList[svl_id + "" + start_time] = [];
            } else {
                DBG_INFO("freeview_data_adapter back data "+svl_id);
                iteratorProgramList[svl_id + "" + start_time] = [];
                epgEventIterator[svl_id + "" + start_time] = createFreeviewIterator(chnl, start_time, end_time, onGetProgramsEvent,preload,pageToken);
                epgEventIterator[svl_id + "" + start_time].readNextRows(programMaxCols);
            }

            var  programListCount= 0;
            for(i = 0; i < currentPageChannelList.length; i++) {
                if(iteratorProgramList.hasOwnProperty(currentPageChannelList[i].serviceId+""+currentPageStartTime)) {
                    programListCount++;
                    programList[currentPageChannelList[i].serviceId] = iteratorProgramList[currentPageChannelList[i].serviceId+""+currentPageStartTime];
                    if(programListCount == currentPageChannelList.length) {
                        programcallback(programList);
                    }
                }

            }


         /*   programList[svl_id] = iteratorProgramList[svl_id+""+start_time];
            if(!!programList && programList.length == currentPageServiceIdList.length) {
                DBG_INFO("freeview_data_adapter send data to page ");
                programcallback(programList);
            }*/
        } else if(currentPageStartTime <= start_time && currentPageEndTime >= end_time) {  //request 3 or 4 day program data
            if(currentPageServiceIdList.indexOf(svl_id) < 0) {
                DBG_INFO("freeview_data_adapter not exit service id exit");
                return;
            } // not exit service id exit
            if(!requestStartTimeList.indexOf(start_time)) {
                DBG_INFO("freeview_data_adapter not current page time exit");
                return; //back other page data
            }

            //requestStartTimeList.splice(requestStartTimeList.indexOf(start_time),1);
            //Time out
            if(localrequestOut == REQUEST_TIMEOUT){
                DBG_ALWAYS('requestTimeOut----');
                iteratorProgramList[chnl.serviceId+""+start_time] = [];
            } else {
                iteratorProgramList[chnl.serviceId+""+start_time] = [];
                epgEventIterator[svl_id + "" + start_time] = createFreeviewIterator(chnl, start_time, end_time, onGetProgramsEvent,preload,pageToken);
                epgEventIterator[svl_id + "" + start_time].readNextRows(programMaxCols);
            }

           // if(!!iteratorProgramList && iteratorProgramList.length == requestStartTimeList.length) {
                programList = [];
                var localStartTime = currentPageStartTime + GLOBAL.TIMEZONE_SECONDS;//getLocalTimeByUTC(currentPageStartTime);
                var localEndTime = currentPageEndTime +  GLOBAL.TIMEZONE_SECONDS; //getLocalTimeByUTC(currentPageEndTime);
                var startZeroClock = localStartTime % (TOTAL_SECONDS*2);
                var endZeroClock = localEndTime % (TOTAL_SECONDS*2);
                if(startZeroClock == 0) {  //start time at 24:00
                    var buffer = 8 - requestStartTimeList.length;
                    var key = 0,j = 0;
                    var lastKey = -1;
                    for(var i = requestStartTimeList.length-1; i >= 0; i--) {
                        thisStartTime = requestStartTimeList[i];
                        key =  Math.floor((j + buffer)/2);
                        if(iteratorProgramList.hasOwnProperty(currentPageChannelList[0].serviceId + "" + thisStartTime)) {
                            if(lastKey != key) {
                                programList[currentPageChannelList[0].serviceId + "_" + key] =   iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime];
                                lastKey = key;
                            } else {
                                programList[currentPageChannelList[0].serviceId + "_" + key] =   iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime].concat(programList[currentPageChannelList[0].serviceId + "_" + key] );
                            }
                        }
                        j++;
                    }
                    programcallback(programList);
                    return;
                } else {  //end time at 24:00
                    // programList = [];
                    var lastKey = -1;
                    for(var i = 0; i < requestStartTimeList.length; i++) {
                        thisStartTime = requestStartTimeList[i];
                        key =  Math.floor(i/2);
                        if(iteratorProgramList.hasOwnProperty(currentPageChannelList[0].serviceId + "" + thisStartTime)) {
                            if(lastKey != key) {
                                programList[currentPageChannelList[0].serviceId + "_" + key] =   iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime];
                            } else {
                                programList[currentPageChannelList[0].serviceId + "_" + key] =    iteratorProgramList[currentPageChannelList[0].serviceId + "" + thisStartTime].concat(programList[currentPageChannelList[0].serviceId + "_" + key] );
                            }
                        }
                    }
                    programcallback(programList);
                    return;
                }
            //}

        }


    }

    /**
     *
     * @param url
     */
    function plyerUrllistener(url) {
        DBG_INFO("freeview_data_adapter call back player url");
        plyerUrlcallback(url)
    }

    function detaillistener(detail) {
        DBG_INFO("freeview_data_adapter call back program detail");
        detailcallback(detail)
    }
    /**
     *
     * @param local_time
     * @returns {number}
     * @private
     */
    function _getUTCbyLocalTime(local_time) {
        if (!tv) return (local_time - GLOBAL.TIMEZONE_SECONDS);
        return local_time - GLOBAL.TIMEZONE_SECONDS - GLOBAL.DST_SECONDS;
    }

    // init();
})();