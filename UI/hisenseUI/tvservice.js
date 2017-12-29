/**
 * Created by Administrator on 14-10-27.
 */
var m_favoritelistIterator = null;
var m_servicelistIterator = null;
var FAVORITELIST_TYPES = 0x61;

function getEPGInfoForChannelList(channelId, playId, onGetEPGInfo, dvbTime) {
    if(!tv) {
        onGetEPGInfo({
            type: TableIterator.EVENT_TYPE_ROWS_READ,
            rows: [
                [1, "program 1", dvbTime, dvbTime + 2000, "program 1 detail"],
                [2, "program 2", dvbTime + 2000, dvbTime + 4000, "program 2 detail"],
                [3, "program 3", dvbTime + 4000, dvbTime + 6000, "program 3 detail"],
                [4, "program 4", dvbTime + 6000, dvbTime + 8000, "program 4 detail"]
            ]
        });
        return null;
    }
    var epgIterator = model.epg.createEpgIterator(
        true,
        [
            {
                field: EpgModel.FIELD_EPG_SERVICE_ID,
                condition: Model.FIELD_COND_EQUAL,
                value: channelId
            },
            {
                field: EpgModel.FIELD_EPG_TRANSPORT_STREAM_ID,
                condition: Model.FIELD_COND_EQUAL,
                value: playId
            },
            {
                field: EpgModel.FIELD_EPG_START_TIME_UTC,
                condition: Model.FIELD_COND_GREATEREQUAL,
                value: dvbTime
            },
            {
                field: EpgModel.FIELD_EPG_END_TIME_UTC,
                condition: Model.FIELD_COND_LESSEQUAL,
                value: (0 == dvbTime) ? 0 : (dvbTime + 3 * 3600)
            }
        ],
        [
            EpgModel.FIELD_EPG_EVENT_ID,
            EpgModel.FIELD_EPG_TITLE,
            EpgModel.FIELD_EPG_START_TIME_UTC,
            EpgModel.FIELD_EPG_END_TIME_UTC,
            EpgModel.FIELD_EPG_DESCRIPTION,
            EpgModel.FIELD_EPG_CRIDS
        ],
        [
            {
                field: EpgModel.FIELD_EPG_START_TIME_UTC,
                direction: 1
            }
        ],
        onGetEPGInfo);
    return epgIterator;
}

function createListIterator(onGetAllChannelListEvent) {
    var listIterator = null;
    if(!tv) {
        listIterator = {
            readNextRows: function() {
                onGetAllChannelListEvent(tempChannelListEvent);
            }
        }
        return listIterator;
    }
    if("NA" == InitArea){
        listIterator = {
            readNextRows: function() {
                onGetAllChannelListEvent({
                    type: TableIterator.EVENT_TYPE_ROWS_READ,
                    rows: [
                        ["Antenna", "0", "0", "1", "1"],
                        ["Cable", "1", "0", "1", "1"]
                    ]
                });
            }
        }
    }
    else{
        listIterator = model.servicelist.createFavoritelistIterator(
            true,
            [
                {
                    field: ServicelistModel.FIELD_FAVORITE_LIST_ATTR,
                    condition: Model.FIELD_COND_ANY_BIT_SET,
                    value: 0x61
                }
            ],
            [
                ServicelistModel.FIELD_FAVORITE_LIST_NAME,
                ServicelistModel.FIELD_FAVORITE_LIST_ID,
                ServicelistModel.FIELD_FAVORITE_LIST_ATTR,
                ServicelistModel.FIELD_FAVORITE_LIST_ACTIVE,
                ServicelistModel.FIELD_FAVORITE_LIST_RIGHTS
            ],
            [
                {field: ServicelistModel.FIELD_FAVORITE_LIST_NAME, direction: 1}
            ],
            onGetAllChannelListEvent
        );
    }
    if(null == listIterator) DBG_ERROR("create iterator error.");
    return listIterator;
}

function createEPGChannelIterator(list, onGetChannelsEvent,epgFlag)
{
    var channelIterator = null, allChannels=null;
    if(!tv) {
        var allChannels = livetvchlist.pageData.operateData.channels;

        var rows =tempChannelsEvent[list.uid].rows.slice(0, 5);
        var rows2 = allChannels[list.name];
        var dd = rows2;

        channelIterator = {
            index: 0,
            readNextRows: function(idx) {
                var start = channelIterator.index;
                var end = start + idx;
                onGetChannelsEvent(list, {
                    type: TableIterator.EVENT_TYPE_ROWS_READ,
                   // rows: tempChannelsEvent[list.uid].rows.slice(start, end),
                    rows:!!allChannels[list.name] ? allChannels[list.name] : []
                });
            },
            fetchTotalCount: function(){
                onGetChannelsEvent(list, {
                    type: TableIterator.EVENT_TYPE_TOTAL_COUNT,
                    totalCount: tempChannelsEvent[list.uid].rows.length
                });
            },
            seekToRow: function(idx){
                channelIterator.index = idx;
            }
        }
        return channelIterator;
    }
    var channelIterator = null;
    if (!!epgFlag) {
        //var allChannels = liveTV.getEPGAllChannels();
        var allChannels = livetvchlist.pageData.operateData.channels;
        channelIterator = {
            index: 0,
            readNextRows: function (idx) {
                onGetChannelsEvent(list, {
                    type:TableIterator.EVENT_TYPE_ROWS_READ,
                    rows:!!allChannels[list.name] ? allChannels[list.name] : []});
            },
            fetchTotalCount: function () {
                onGetChannelsEvent(list, {
                    type: TableIterator.EVENT_TYPE_TOTAL_COUNT,
                    totalCount: !!allChannels[list.name] ? (!!allChannels[list.name].rows? allChannels[list.name].rows.length:allChannels[list.name].length):0
                });
            },
            seekToRow: function (idx) {
                channelIterator.index = idx;
            }
        }
        return channelIterator;
    }
    if (list == null) return null;

}


function createChannelIterator(list, onGetChannelsEvent,epgFlag)
{
    var channelIterator = null;
    if(!tv) {

        channelIterator = {
            index: 0,
            readNextRows: function(idx) {
                var start = channelIterator.index;
                var end = start + idx;
                onGetChannelsEvent(list, {
                    type: TableIterator.EVENT_TYPE_ROWS_READ,
                    rows: tempChannelsEvent[list.uid].rows.slice(start, end)
                });
            },
            fetchTotalCount: function(){
                onGetChannelsEvent(list, {
                    type: TableIterator.EVENT_TYPE_TOTAL_COUNT,
                    totalCount: tempChannelsEvent[list.uid].rows.length
                });
            },
            seekToRow: function(idx){
                channelIterator.index = idx;
            }
        }
        return channelIterator;
    }
    if(list == null) {
        return null;
    }

    var servicelist_uuid = list.uid, sl_name = list.name;

    var satelliteId = list.satId;
    if(sl_name) {

        channelIterator = model.servicelist.createServicelistIterator(
            true,
            [
                {
                    field: ServicelistModel.SERVICELIST_FIELD_FRONTEND,
                    condition: Model.FIELD_COND_EQUAL,
                    value: servicelist_uuid
                },
                {
                    field: ServicelistModel.SERVICELIST_FIELD_ATTR,
                    condition: Model.FIELD_COND_EQUAL,
                    value: epgFlag
                },
                {
                    field: ServicelistModel.SERVICELIST_FIELD_SATELLITE,
                    condition: Model.FILED_COND_EQUAL,
                    value: satelliteId
                }
            ],
            [
                ServicelistModel.SERVICELIST_FIELD_NO, //0
                ServicelistModel.SERVICELIST_FIELD_NAME, //1
                ServicelistModel.SERVICELIST_FIELD_ID, //2
                ServicelistModel.SERVICELIST_FIELD_TYPE, //3
                ServicelistModel.SERVICELIST_FIELD_ATTR, //4
                ServicelistModel.SERVICELIST_FIELD_FRONTEND, //5 playId
                ServicelistModel.SERVICELIST_FIELD_SUBTYPE, //6
                ServicelistModel.SERVICELIST_FIELD_CNI,  //7
                ServicelistModel.SERVICELIST_FIELD_SERVICE_ID,   //8  svl_rec_id 
		        ServicelistModel.SERVICELIST_FIELD_ORIGINAL_UUID, //9   serviceId
                ServicelistModel.SERVICELIST_FIELD_NETWORK_ID,   // NETWORK_ID 10
                ServicelistModel.SERVICELIST_FIELD_ORIGINAL_LCN  //11

            ],
            [
                {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
            ],
            onGetChannelsEvent.bind(this, list)
        );
    }
    if(null == channelIterator) DBG_ERROR("create iterator error.");
    return channelIterator;
}
function createProgramIterator(chnl, startLine, endLine, onGetProgramsEvent) {
    var programIterator = null;
    if(!tv) {
        programIterator = {
            readNextRows: function(count){
                var m_event = {type: TableIterator.EVENT_TYPE_ROWS_READ};
                m_event.rows = createFakeProgram(chnl, startLine, endLine, count);
                onGetProgramsEvent(chnl, m_event);
            }
        };
        return programIterator;
    }
    try {
        programIterator = model.epg.createEpgIterator(true,
        [
            {
                field: EpgModel.FIELD_EPG_SERVICE_ID,
                condition: Model.FIELD_COND_EQUAL,
                value: chnl.uid
            },
            {
                field: EpgModel.FIELD_EPG_TRANSPORT_STREAM_ID,
                condition: Model.FIELD_COND_EQUAL,
                value: chnl.playId
            },
            {
                field: EpgModel.FIELD_EPG_START_TIME_UTC,
                condition: Model.FIELD_COND_GREATEREQUAL,
                value: startLine
            },
            {
                field: EpgModel.FIELD_EPG_END_TIME_UTC,
                condition: Model.FIELD_COND_LESSEQUAL,
                value: 0 === startLine ? 0 : 0 === endLine ? (startLine + 3 * 3600) : endLine
            }
        ],
        0 === endLine ? [
            EpgModel.FIELD_EPG_EVENT_ID,
            EpgModel.FIELD_EPG_TITLE,
            EpgModel.FIELD_EPG_START_TIME_UTC,
            EpgModel.FIELD_EPG_END_TIME_UTC,
            EpgModel.FIELD_EPG_DESCRIPTION,
            EpgModel.FIELD_EPG_CRIDS
        ] : [
            EpgModel.FIELD_EPG_EVENT_ID,
            EpgModel.FIELD_EPG_TITLE,
            EpgModel.FIELD_EPG_SHORT_TEXT,
            EpgModel.FIELD_EPG_THEMES,
            EpgModel.FIELD_EPG_START_TIME_UTC,
            EpgModel.FIELD_EPG_END_TIME_UTC,
            EpgModel.FIELD_EPG_SERVICE_ATTRIBUTES,
            EpgModel.FIELD_EPG_DESCRIPTION,
            EpgModel.FIELD_EPG_CRIDS
        ],
        [
            {
                field: EpgModel.FIELD_EPG_START_TIME_UTC,
                direction: 1
            }
        ],
        onGetProgramsEvent.bind(this, chnl));
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
    if(null == programIterator) DBG_ERROR("create iterator error.");
    return programIterator;
}

function createFreeviewIterator(chnl, startLine, endLine, onGetProgramsEvent,preload,pageToken) {
    //DBG_ERROR("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY -tvservice  chnl.serviceId="+ chnl.serviceId+", startLine = "+startLine+", endLine="+endLine+",preload="+preload+",pageToken="+pageToken);
    var programIterator = null;
    if(!tv) {
        programIterator = {
            readNextRows: function(count){
                var m_event = {type: TableIterator.EVENT_TYPE_ROWS_READ};
                m_event.rows = createFakeFreeview(chnl, startLine, endLine, count);
                onGetProgramsEvent(chnl, m_event);
            }
        };
        return programIterator;
    }
    try {
        programIterator = model.fvpepg.createFVPEpgIterator(true,
        [
            {
                field: FVPEpgModel.FIELD_FVP_EPG_SERVICE_ID,
                condition: Model.FIELD_COND_EQUAL,
                value: chnl.serviceId
            },
            {
                field: FVPEpgModel.FIELD_FVP_EPG_TRANSPORT_STREAM_ID,
                condition: Model.FIELD_COND_EQUAL,
                value:  chnl.playId
            },
            {
                field: FVPEpgModel.FIELD_FVP_EPG_START_TIME_UTC,
                condition: Model.FIELD_COND_GREATEREQUAL,
                value:  startLine
            },
            {
                field: FVPEpgModel.FIELD_FVP_EPG_END_TIME_UTC,
                condition: Model.FIELD_COND_LESSEQUAL,
                value:  endLine
            },


            {
                field: FVPEpgModel.FIELD_FVP_EPG_PRELOAD,
                condition: Model.FIELD_COND_EQUAL,
                value:  preload
            },
            {
                field: FVPEpgModel.FIELD_FVP_EPG_PAGETOKEN,
                condition: Model.FIELD_COND_EQUAL,
                value:  pageToken
            }
        ],
        [
            FVPEpgModel.FIELD_FVP_EPG_CHANNEL_LOGO,
            FVPEpgModel.FIELD_FVP_EPG_CONTENT_IMAGE,
            FVPEpgModel.FIELD_FVP_EPG_MAIN_TITLE,
            FVPEpgModel.FIELD_FVP_EPG_SECONDARY_TITLE,
            // FVPEpgModel.FIELD_FVP_EPG_RUNNING_TIME,
            FVPEpgModel.FIELD_FVP_EPG_DESCRIPTION,
            // FVPEpgModel.FIELD_FVP_EPG_PROGRAM_TYPE,
            FVPEpgModel.FIELD_FVP_EPG_START_TIME_UTC,
            FVPEpgModel.FIELD_FVP_EPG_END_TIME_UTC,
            FVPEpgModel.FIELD_FVP_EPG_BASE_URL,
            FVPEpgModel.FIELD_FVP_EPG_PROGRAM_AVAILABLE_FLAG,
            FVPEpgModel.FIELD_FVP_EPG_PROGRAM_ID,
            FVPEpgModel.FIELD_FVP_EPG_PROGRAM_PARENT_GUIDANCE,
            FVPEpgModel.FIELD_FVP_EPG_PROGRAM_THEMES,
            FVPEpgModel.FIELD_FVP_EPG_PROGRAM_HDSD,
            FVPEpgModel.FIELD_FVP_EPG_PROGRAM_SUBT,
            FVPEpgModel.FIELD_FVP_EPG_PROGRAM_AD
        ],
        [
            {
                field: FVPEpgModel.FIELD_FVP_EPG_START_TIME_UTC,
                direction: 1
            }
        ],
        onGetProgramsEvent.bind(this, chnl));
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    } finally {
        if(null == programIterator) {
            programIterator = {
                readNextRows: function(count){
                    var m_event = {type: TableIterator.EVENT_TYPE_ROWS_READ};
                    m_event.rows = [];
                    onGetProgramsEvent(chnl, m_event);
                }
            };

            DBG_ERROR("create iterator error.");
        }
        return programIterator;
    }

}

function createOneActiveWinProgram(channelIds, serviceIds, startLine, endLine, onGetOneActiveProgramsEvent) {
    var programIterator = null;
    if (!tv) {
        programIterator = {
            offset: 0,
            readNextRows: function(count) {
                var m_event = {
                    type: TableIterator.EVENT_TYPE_ROWS_READ
                };
                m_event.rows = createFakeProgram({number: this.offset}, startLine, endLine, count);
                onGetOneActiveProgramsEvent(m_event);
            },
            seekToRow: function(offset, type){
                this.offset = offset;
            }
        };
        return programIterator;
    }

    programIterator = model.epg.createEpgIterator(
        true, [{
            field: EpgModel.FIELD_EPG_SERVICE_ID,
            condition: Model.FIELD_COND_EQUAL,
            value: channelIds
        }, {
            field: EpgModel.FIELD_EPG_TRANSPORT_STREAM_ID,
            condition: Model.FIELD_COND_EQUAL,
            value: serviceIds
        }, {
            field: EpgModel.FIELD_EPG_START_TIME_UTC,
            condition: Model.FIELD_COND_GREATEREQUAL,
            value: startLine
        }, {
            field: EpgModel.FIELD_EPG_END_TIME_UTC,
            condition: Model.FIELD_COND_LESSEQUAL,
            value: endLine
        }], [
            EpgModel.FIELD_EPG_EVENT_ID,
            EpgModel.FIELD_EPG_TITLE,
            EpgModel.FIELD_EPG_SHORT_TEXT,
            EpgModel.FIELD_EPG_THEMES,
            EpgModel.FIELD_EPG_START_TIME_UTC,
            EpgModel.FIELD_EPG_END_TIME_UTC,
            EpgModel.FIELD_EPG_SERVICE_ATTRIBUTES,
            EpgModel.FIELD_EPG_DESCRIPTION,
            EpgModel.FIELD_EPG_CRIDS,
            EpgModel.FIELD_EPG_RATING  //9
        ], [{
            field: EpgModel.FIELD_EPG_START_TIME_UTC,
            direction: 1
        }],
        onGetOneActiveProgramsEvent);
    return programIterator;
}
function createFakeFreeview(chnl, startTime, endTime, count) {
    var i, rows = [],
        leftEndTime = startTime;
    for (i = 0; i < count; i++) {
        var row = [];

        row[FVPField.CHANNEL_LOGO] = "img/epg/logo_freevirw_epg.png";
        row[FVPField.CONTENT_IMAGE] = "img/epg/photo_epg_normal.png";
        row[FVPField.MAIN_TITLE] = chnl.number + " fake freeview " + i;
        row[FVPField.SECONDARY_TITLE] = chnl.number + " fake freeview " + i + " second title";
        // row[FVPField.RUNNING_TIME] = ;
        row[FVPField.DESCRIPTION] = chnl.number + " fake freeview " + i + " detail infomation";
        row[FVPField.PROGRAM_THEME] = 0;
        row[FVPField.START_TIME_UTC] = leftEndTime;
        row[FVPField.END_TIME_UTC] = leftEndTime + Math.ceil(Math.random() * 60) * 60;
        row[FVPField.MEDIA_URL] = "url";
        row[FVPField.PROGRAM_AVAILABLE_FLAG] = i > 3 ? 0 : 2;
        row[FVPField.PROGRAM_HDSD] = i > 3 ? 0 : 1;
        row[FVPField.PROGRAM_SUBT] = i > 3 ? 0 : 1;
        row[FVPField.PROGRAM_AD] = i > 3 ? 0 : 1;
        leftEndTime = row[FVPField.END_TIME_UTC];
        rows.push(row);
        if (leftEndTime >= endTime) return rows;
    }
    return rows;
}
function createFakeProgram(chnl, startTime, endTime, count){
    var i, rows = [], leftEndTime = startTime - Math.ceil(Math.random() * 60) * 20;
    if (0 === endTime) {
        startTime = getDVBLongTime();
        endTime = startTime + 3 * 3600;
        count = count == 4 ? Math.floor(Math.random() * 5) : count;
        for (i = 0; i < count; i++) {
            var row = [];
            row[0] = (i + 1);
            row[1] = "channel " + chnl.number + " fake program " + (i + 1);
            row[2] = leftEndTime;
            row[3] = row[2] + Math.ceil(Math.random() * 60) * 60;
            row[4] = chnl.number + " fake program detail";
            leftEndTime = row[3];
            rows.push(row);
            if (leftEndTime >= endTime) return rows;
        }
    } else {
        for (i = 0; i < count; i++) {
            var row = [];
            row[0] = (i + 1);
            row[1] = chnl.number + " fake program " + i;
            row[2] = chnl.number + " fake program short " + i + " short text";
            row[3] = "0x" + Math.floor(Math.random() * 9) + "0";
            row[4] = leftEndTime;
            row[5] = row[4] + Math.ceil(Math.random() * 60) * 60;
            row[6] = 0;
            row[7] = chnl.number + " fake program short " + i + " detail infomation";
            if (i % 2 == 0) {
                row[7] += row[7];
                row[7] += row[7];
                row[7] += row[7];
                row[7] += row[7];
                row[7] += row[7];
            }
            leftEndTime = row[5];
            rows.push(row);
            if (leftEndTime >= endTime) return rows;
        }
    }
    return rows;
}



var m_getallchannellist_iterator = null;
function getAllChannelList(onGetAllChannelListEvent) {

    if (!tv) {
        onGetAllChannelListEvent(tempChannelListEvent);
        return;
    }
    if (null != m_getallchannellist_iterator) {
       m_getallchannellist_iterator.disconnect();
    }

    m_getallchannellist_iterator = model.servicelist.createFavoritelistIterator(
        true,
        [
            {
                field: ServicelistModel.FIELD_FAVORITE_LIST_ATTR,
                condition: Model.FIELD_COND_ANY_BIT_SET,
                value: FAVORITELIST_TYPES
            }
        ],
        [
            ServicelistModel.FIELD_FAVORITE_LIST_NAME,
            ServicelistModel.FIELD_FAVORITE_LIST_ID,
            ServicelistModel.FIELD_FAVORITE_LIST_ATTR,       //卫星subID
            ServicelistModel.FIELD_FAVORITE_LIST_ACTIVE,     //是否display
            ServicelistModel.FIELD_FAVORITE_LIST_RIGHTS      //暂时为判断是否为LCN列表
        ],
        [
           { field: ServicelistModel.FIELD_FAVORITE_LIST_NAME, direction: 1 }
        ],
        onGetAllChannelListEvent
    );

    m_getallchannellist_iterator.readNextRows(999);

};


var m_getservicelistIterator = null;
function getChannelsByListId(list, onGetChannelsEvent) {

    if (!tv) {
        onGetChannelsEvent(list, tempChannelsEvent[list.uid]);
        return;
    }
    if(list == null){
        return;
    }
    var servicelist_uuid = list.uid;

    debugPrint('get selectServiceList: ' + servicelist_uuid);
    debugPrint('get selectServiceList: ' + list.name);
    debugPrint('get selectServiceList: ' + list.satId);
//    var sl_name = list.name;

//    if(sl_name) {

        m_getservicelistIterator = model.servicelist.createServicelistIterator(
            true,
            [
                {
                    field: ServicelistModel.SERVICELIST_FIELD_FRONTEND,
                    condition: Model.FIELD_COND_EQUAL,
                    value: servicelist_uuid
                },
                {
                    field: ServicelistModel.SERVICELIST_FIELD_SATELLITE,   //卫星subID
                    condition: Model.FIELD_COND_EQUAL,
                    value: list.satId
                },
                {   field: ServicelistModel.SERVICELIST_FIELD_ATTR,
                    condition: Model.FIELD_COND_EQUAL,
                    value: 0}
//                {
//                    field: ServicelistModel.SERVICELIST_FIELD_TYPE,
//                    condition: Model.FIELD_COND_ANY_BIT_SET,
//                    value: DirectoryModel.FIELD_TYPE_VIDEO+DirectoryModel.FIELD_TYPE_AUDIO
//                }
//                ,
//                {
//                    field: ServicelistModel.SERVICELIST_FIELD_ATTR,
//                    condition: Model.FIELD_COND_ALL_BITS_SET,
//                    value: 512
//                }
            ],
            [
                ServicelistModel.SERVICELIST_FIELD_NO,
                ServicelistModel.SERVICELIST_FIELD_NAME,
                ServicelistModel.SERVICELIST_FIELD_ID,
                ServicelistModel.SERVICELIST_FIELD_TYPE,
                ServicelistModel.SERVICELIST_FIELD_ATTR,
                ServicelistModel.SERVICELIST_FIELD_FRONTEND,      //UUID
                ServicelistModel.SERVICELIST_FIELD_SUBTYPE,      //用来判定HD or SD
                ServicelistModel.SERVICELIST_FIELD_CNI,         //用来判定TV or Radio
                ServicelistModel.SERVICELIST_FIELD_SERVICE_ID,   // svl_rec_id
                ServicelistModel.SERVICELIST_FIELD_ORIGINAL_UUID, //9   serviceId
                ServicelistModel.SERVICELIST_FIELD_NETWORK_ID,   // NETWORK_ID 10
                ServicelistModel.SERVICELIST_FIELD_ORIGINAL_LCN  //11

            ],
            [
                { field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1 }
            ],
            onGetChannelsEvent.bind(this,list));
        m_getservicelistIterator.fetchTotalCount();
        // m_getservicelistIterator.readNextRows( 100 );
//    }
}


var temp_channel = {
    listUid: "avid",
    playId: "avid",
    uid: "av_c_uid",
    number: 3,
    name: "av_c",
    type: 2,
    favType: true,
    isLock: true,
    isEncrypt: true,
    satId: 0,
    eCode: "e_code:0"
}

var tempChannelListEvent = {
    type: TableIterator.EVENT_TYPE_ROWS_READ,
    rows: [
        //   [name, id, attr, active, rights, containservice]
        ["Analog", "avid", "0", "1", "1", "1"],
        ["DVBC", "dvbcid", "0", "1", "1", "1"],
        ["DVBT", "dvbtid", "0", "1", "1", "1"],
//        ["DVB-S", "dvbsid", "0x00040", "1", "1", "1" ],
        ["FAV1", "fav1id", "0x0001", "1", "1", "1"],
        ["FAV2", "fav2id", "0x0001", "0", "1", "1"],
        ["FAV3", "fav3id", "0x0001", "1", "1", "0"],
        ["FAV4", "fav4id", "0x0001", "1", "1", "1"]
    ]
}

var tempChannelsEvent = {
//[number,name, channalid, type,attr,listuid,svruid, srvid, strmid, ntwkid, uri,]
    avid: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "av_fdgdfga<sdf", "av_a_uid", "1", "262143", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["2", "Av_fghgfhb<?sdfs", "av_b_uid", "4", "261631", "avid", "1", "1", "1", "rec://null", "1", "4"],
            ["3", "av_c", "av_c_uid", "1", "543535", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["4", "av_d", "av_d_uid", "1", "543535", "avid", "1", "1", "1", "rec://null", "1", "4"],
            ["5", "av_e", "av_e_uid", "4", "262139", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["6", "av_f", "av_f_uid", "1", "262166", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["7", "av_aa", "av_aa_uid", "1", "262176", "avid", "1", "1", "1", "rec://null", "1", "4"],
            ["8", "av_bb", "av_bb_uid", "1", "262176", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["9", "av_cc", "av_cc_uid", "1", "262166", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["10", "av_dd", "av_dd_uid", "1", "543535", "avid", "1", "1", "1", "rec://null", "1", "4"],
            ["11", "Bv_ee", "av_ee_uid", "1", "243555", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["12", "av_ff", "av_ff_uid", "1", "262166", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["13", "av_aaa", "av_aaa_uid", "4", "131345", "avid", "1", "1", "1", "rec://null", "1", "4"],
            ["14", "av_bbb", "av_bbb_uid", "1", "141344", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["15", "cv_ccc", "av_ccc_uid", "1", "234346", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["16", "av_ddd", "av_ddd_uid", "4", "543536", "avid", "1", "1", "1", "rec://null", "1", "4"],
            ["17", "av_eee", "av_eee_uid", "1", "243558", "avid", "1", "1", "1", "rec://null", "1", "1"],
            ["18", "av_fff", "av_fff_uid", "1", "262169", "avid", "1", "1", "1", "rec://null", "1", "1"]
        ]
    },
    dvbcid: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "dvbc_a", "dvbc_a_uid", "1", "262143", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["2", "dvbc_b", "dvbc_b_uid", "1", "261631", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["3", "dvbc_c", "dvbc_c_uid", "1", "262142", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["4", "dvbc_d", "dvbc_d_uid", "1", "262127", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["5", "dvbc_e", "dvbc_e_uid", "1", "262139", "dvbcid", "1", "1", "rec://null", "1", "1"]
        ]
    },
    dvbtid: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "dvbt_a", "dvbt_a_uid", "1", "262143", "dvbtid", "1", "1", "rec://null", "1", "1"],
            ["2", "dvbt_b", "dvbt_b_uid", "1", "261631", "dvbtid", "1", "1", "rec://null", "1", "1"],
            ["3", "dvbt_c", "dvbc_c_uid", "1", "262142", "dvbtid", "1", "1", "rec://null", "1", "1"],
            ["4", "dvbt_d", "dvbc_d_uid", "1", "262127", "dvbtid", "1", "1", "rec://null", "1", "1"],
            ["5", "dvbt_e", "dvbt_e_uid", "1", "262139", "dvbtid", "1", "1", "rec://null", "1", "1"]
        ]
    },
    dvbsid: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "dvbs_a", "dvbs_a_uid", "1", "262143", "dvbsid", "1", "1", "rec://null", "1", "1"],
            ["2", "dvbs_b", "dvbs_b_uid", "1", "261631", "dvbsid", "1", "1", "rec://null", "1", "1"],
            ["3", "dvbs_c", "dvbs_c_uid", "1", "262142", "dvbsid", "1", "1", "rec://null", "1", "1"],
            ["4", "dvbs_d", "dvbs_d_uid", "1", "262127", "dvbsid", "1", "1", "rec://null", "1", "1"],
            ["5", "dvbs_e", "dvbs_e_uid", "1", "262139", "dvbsid", "1", "1", "rec://null", "1", "1"]
        ]
    },
    fav1id: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "av_a", "av_a_uid", "1", "262143", "avid", "1", "1", "rec://null", "1", "1"],
            ["2", "av_b", "av_b_uid", "1", "261631", "avid", "1", "1", "rec://null", "1", "1"],
//            ["3","av_c","av_c_uid",  "1" , "262142", "avid",  "1", "1", "rec://null", "1", "1" ],
            ["4", "av_d", "av_d_uid", "1", "262127", "avid", "1", "1", "rec://null", "1", "4"],
            ["5", "av_e", "av_e_uid", "4", "262139", "avid", "1", "1", "rec://null", "1", "1"],
//            ["6","av_f","av_f_uid",  "1" , "262140", "avid",  "1", "1", "rec://null", "1", "1" ],
            ["7", "av_aa", "av_aa_uid", "1", "131344", "avid", "1", "1", "rec://null", "1", "4"],

            ["8", "dvbc_c", "dvbc_c_uid", "1", "262142", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["9", "dvbt_d", "dvbt_d_uid", "1", "262127", "dvbtid", "1", "1", "rec://null", "1", "1"],
            ["11", "av_bb", "av_bb_uid", "1", "141343", "avid", "1", "1", "rec://null", "1", "1"]
        ]
    },
    fav2id: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "av_a", "av_a_uid", "1", "262143", "avid", "1", "1", "rec://null", "1", "1"],
            ["2", "av_b", "av_b_uid", "1", "261631", "avid", "1", "1", "rec://null", "1", "1"],
            ["3", "dvbc_c", "dvbc_c_uid", "1", "262142", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["4", "dvbt_d", "dvbc_d_uid", "1", "262127", "dvbtid", "1", "1", "rec://null", "1", "1"]
        ]
    },
    fav3id: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "av_a", "av_a_uid", "1", "262143", "avid", "1", "1", "rec://null", "1", "1"],
            ["2", "av_b", "av_b_uid", "1", "261631", "avid", "1", "1", "rec://null", "1", "1"],
            ["3", "dvbc_c", "dvbc_c_uid", "1", "262142", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["4", "dvbt_d", "dvbt_d_uid", "1", "262127", "2", "dvbtid", "1", "rec://null", "1", "1"]
        ]
    },
    fav4id: {
        type: TableIterator.EVENT_TYPE_ROWS_READ,
        rows: [
            ["1", "av_a", "av_a_uid", "1", "262143", "avid", "1", "1", "rec://null", "1", "1"],
            ["2", "av_b", "av_b_uid", "1", "261631", "avid", "1", "1", "rec://null", "1", "1"],
            ["3", "dvbc_c", "dvbc_c_uid", "1", "262142", "dvbcid", "1", "1", "rec://null", "1", "1"],
            ["4", "dvbt_d", "dvbt_d_uid", "1", "262127", "dvbtid", "1", "1", "rec://null", "1", "1"]
        ]
    }

}

var tempSourceList = [
    "0", "TV", "0", "0", "",
    "1", "AV", "1", "0", "",
    "2", "COMPONENT", "1", "0", "",
    "3", "HDMI 1", "1", "0", "",
    "4", "HDMI 2", "1", "0", "",
    "5", "HDMI 3", "1", "0", "",
    "6", "HDMI 4", "1", "0", ""
]


function setChannelsAttrByUid(listuid, channeluids, attrs) {
    var rows = tempChannelsEvent[listuid].rows
    for (var i = 0; i < rows.length; i++) {
        for (var j = 0; j < channeluids.length; j++) {
            if (rows[i][2] == channeluids[j]) {
                rows[i][4] = attrs[j];
                break;
            }
        }
    }
}

function moveChannelsToDestNum(listuid, itemsId, destnum) {
    var rows = tempChannelsEvent[listuid].rows;

    var befNum = 0, firstIdx = -1;
    for (var i = 0; i < rows.length && rows[i][0] != destnum; i++) {
        for (var j = 0; j < itemsId.length; j++) {

            if (-1 == firstIdx && rows[i + 1][0] == destnum) {
                firstIdx = i + 1;
            }
            if (rows[i][2] == itemsId[j]) {
                befNum++;
                break;
            }
        }
    }

    var tempRow = [];

        for (var j = 0; j < itemsId.length; j++) {
            for (var i = 0; i < rows.length; i++) {
            if (rows[i][2] == itemsId[j]) {
                tempRow.push(rows.splice(i, 1)[0]);
                break;
            }
        }
    }

    var destIdx = Math.max(0, firstIdx - befNum) + 1;
    for (var i = 0; i < itemsId.length; i++) {
        rows.splice(destIdx + i, 0, tempRow[i]);
    }

}

function setFavChannelsByUid(srcuid, destuid, uids) {
    var srcrows = tempChannelsEvent[srcuid].rows;
    var destrows = tempChannelsEvent[destuid].rows;


    for (var i = 0; i < srcrows.length; i++) {
        for (var j = 0; j < uids.length; j++) {
            if (uids[j] == srcrows[i][2]) {
                destrows.push($.extend([], srcrows[i]));
                break;
            }
        }
    }


}

function removeFavChannelsByUid(srcuid, uids){
    var srcrows = tempChannelsEvent[srcuid].rows;
    for (var i = 0; i < srcrows.length; i++) {
        for (var j = 0; j < uids.length; j++) {
            if (uids[j] == srcrows[i][2]) {
                srcrows.splice(i, 1);
                i--;
                break;
            }
        }
    }

}
function renameChannelsBynum(srcuid,itemsName,itemsNum){
    var srcrows = tempChannelsEvent[srcuid].rows;
        for(var i=0;i<srcrows.length;i++){
            for(var j = 0; j < itemsName.length; j++)
            {
                if(itemsNum[j] == srcrows[i][0]){
                    srcrows[i][1] = itemsName[j];
                    break;
                }
            }
        }
}

function FILETER() {

}
FILETER.ENUM = 0;
FILETER.SCREAMALL = FILETER.ENUM++;
FILETER.SCREAMYES = FILETER.ENUM++;
FILETER.SCREAMNO = FILETER.ENUM++;
FILETER.HDALL = FILETER.ENUM++;
FILETER.HDYES = FILETER.ENUM++;
FILETER.HDNO = FILETER.ENUM++;
FILETER.UHD = FILETER.ENUM++;
FILETER.LOCKALL = FILETER.ENUM++;
FILETER.LOCKYES = FILETER.ENUM++;
FILETER.LOCKNO = FILETER.ENUM++;
FILETER.TYPEALL = FILETER.ENUM++;
FILETER.TYPETV = FILETER.ENUM++;
FILETER.TYPERADIO = FILETER.ENUM++;
FILETER.TYPEDATA = FILETER.ENUM++;
FILETER.SORTA = FILETER.ENUM++;
FILETER.SORT0 = FILETER.ENUM++;



