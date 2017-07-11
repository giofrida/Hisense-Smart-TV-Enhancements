/**
 * Created on 14-9-28.
 */

function getchlmanagerFavEditData(opts) {
    opts.CaE = [
        {
            "id": "chl_manager_fav_head",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fav_chlist_title1",
            "description": "标题",
            "CaEType": "span"
        },
        {
            id: 'chl_manager_list_fav',
            CaEType: 'Ul',
            nav: {
//                rightTo: 'chl_manager_list_type2'
            },
            handler: {
                befRightHandler: channelmanagerfav.rightlist,
                befDownHandler: channelmanagerfav.keyDownOnFavPage,
                befUpHandler: channelmanagerfav.keyUpOnFavPage,
                befEnterHandler: channelmanagerfav.setshowImg,
//                keyNum1Handler: channelmanagerfav.cancelFavChannel,
                keyRedHandler: channelmanagerfav.cancelFavChannel,
//                keyNum2Handler: channelmanagerfav.setMovePostion,
                keyGreenHandler: channelmanagerfav.setMovePostion,
//                keyNum3Handler: channelmanagerfav.openRenamePage,
                keyYellowHandler: channelmanagerfav.openRenamePage,
//                keyNum4Handler: channelmanagerfav.openFliterPage,
//                keyBlueHandler: channelmanagerfav.openFliterPage,
                keyChannelDownHandler: channelmanagerfav.flipDownOnFavPage,
                keyChannelUpHandler: channelmanagerfav.flipUpOnFavPage
            },
            "onFocusFun":"channelmanagerfav.AddButtonClass",
            oriCaE: [
                {
                    id: 'chlManagerListFav1SelectImg',
                    "CaEType": "SwitchDiv",
                    "imageList": {
                        "openImg": "img/channellist/mark.png",
                        "closeImg": "img/channellist/nomark.png"
                    }
                },
                {
                    id: 'chlManagerListFav1Num',
                    CaEType: 'span'
                },
                {
                    id: 'chlManagerListFav1Chlname',
                    CaEType: 'span',
                    noLangData: true
                }

            ],
            UlConfig: {
//                "PageSize": 7,
                UlDataItem: ['chlManagerListFav1SelectImg', 'chlManagerListFav1Num', 'chlManagerListFav1Chlname']
            }
        },
        {
            id: 'chl_manager_chlist_head_ul',
            CaEType: 'NavigationBar',
            nav: {
                downTo: 'chl_manager_list_type2',
                leftTo: 'chl_manager_list_fav'
            },
            handler: {
                aftLeftHandler: channelmanagerfav.aftSwitchList,
                aftRightHandler: channelmanagerfav.aftSwitchList
            },
            "onFocusFun":"channelmanagerfav.removeButtonClass",
            oriCaE: [
                {
                    id: 'chl_manager_arrow_left_icon',
                    CaEType: 'img'
                },
                {
                    id: 'chl_manager_chlist_title2',
                    CaEType: 'span'
                },
                {
                    id: 'chl_manager_arrow_right_icon',
                    CaEType: 'img'
                }

            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [
                    'chl_manager_arrow_left_icon',
                    "chl_manager_chlist_title2",
                    'chl_manager_arrow_right_icon'
                ],
                "PageSize": 1
            }
        },
        {
            id: 'chl_manager_list_type2',
            CaEType: 'Ul',
            nav: {
                upTo: 'chl_manager_chlist_head_ul'
            },
            handler: {
                befLeftHandler: channelmanagerfav.LeftListPage,
                befDownHandler: channelmanagerfav.keyDownOnListPage,
                befUpHandler: channelmanagerfav.keyUpOnListPage,
                befEnterHandler: channelmanagerfav.setshowImg,
//                keyNum1Handler: channelmanagerfav.setFavChannel,
                keyRedHandler: channelmanagerfav.setFavChannel,
                keyChannelDownHandler: channelmanagerfav.flipDownOnListPage,
                keyChannelUpHandler: channelmanagerfav.flipUpOnListPage
            },
            "onFocusFun":"channelmanagerfav.removeButtonClass",
            oriCaE: [
                {
                    id: 'chlManagerListFav2SelectImg',
                    "CaEType": "SwitchDiv",
                    "imageList": {
                        "openImg": "img/channellist/mark.png",
                        "closeImg": "img/channellist/nomark.png"
                    }
                },
                {
                    id: 'chlManagerListFav2Num',
                    CaEType: 'span',
                    classes: {
                        normal: 'chl_manager_list_num',
                        disable: 'chl_manager_list_num',
                        focus: 'chl_manager_list_num'
                    }
                },
                {
                    id: 'chlManagerListFav2Chlname',
                    CaEType: 'span',
                    noLangData: true,
                    classes: {
                        normal: 'chl_manager_list_name',
                        disable: 'chl_manager_list_name',
                        focus: 'chl_manager_list_name'
                    }
                }

            ],
            UlConfig: {
//                "PageSize": 7,
                UlDataItem: ['chlManagerListFav2SelectImg', 'chlManagerListFav2Num', 'chlManagerListFav2Chlname']
            }
        },
        {
            "id": "chl_manager_fav_button_txtOk",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fav_button_txt1",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fav_button_txt2",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fav_button_txt3",
            "description": "标题",
            "CaEType": "span"
        }
//        {
//            "id": "chl_manager_fav_button_txt4",
//            "description": "标题",
//            "CaEType": "span"
//        }
    ]

    return channelmanagerfav.pageData;
}

function ChannelManagerFAV() {
    var self = this;
    var moveflag = false;
    var moveItems = [];

    var oprData = {
        lists: [],
        listleft: {},
        channels: [],
        favChannels: [],
        listChannels: {}
    };

    var pageCount = 8, pageSize = 7, selectedItems = [],
        favPgIndex = 0, listPgIndex = 0, favSelIndex = 0, listSelIndex = 0;

    var favScrlHeight = 0, listScrHeight = 0;

    var crntListName = "", crntListIdx = 0;

    var channelsBakup = [];

    var repeatMum = 0,  UnselectedFavImg = true, UnselectedType2Img = true;

    self.pageData = {
        chl_manager_fav_head: {Data: "Channel Management"},
        chl_manager_fav_chlist_title1: {Data: ""},
        chl_manager_list_fav: {Data: [], SelectedIndex: 0},
        chl_manager_list_type2: {Data: [], SelectedIndex: 0},
        chl_manager_chlist_head_ul: {Data: [], SelectedIndex: 0},
        chl_manager_fav_button_txtOk:{Data:"Press and hold OK to select all"},
        chl_manager_fav_button_txt1: {Data: "Add/Delete"},
        chl_manager_fav_button_txt2: {Data: "Move"},
        chl_manager_fav_button_txt3: {Data: "Rename"},
//        chl_manager_fav_button_txt4: {Data: "Filter"},
        langData: {
            "Channel Management": [],
            "Add/Delete": [],
            "Move": [],
            "Rename": [],
            "Antenna":[],
            "Cable":[],
            "Press and hold OK to select all":[]
        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprData;
    function REWRITETYPE() {
    }

    REWRITETYPE.CURRENT = 0;
    REWRITETYPE.CANCELFAV = 1;
    REWRITETYPE.ADDFAV = 2;
    REWRITETYPE.MOVE = 3;
    REWRITETYPE.FILTER = 4;
    REWRITETYPE.SWITCHLIST = 5;

    function rewritePageData(pageData) {
        if (!oprData.favChannels || !oprData.listleft.name) return;

        var favBit = parseInt(oprData.listleft.name.charAt(3)) + 3;
        pageData.chl_manager_fav_chlist_title1.Data = oprData.listleft.name;
        pageData.chl_manager_list_fav.Data = [];
        pageData.chl_manager_list_fav.disableItem = [];
        pageData.chl_manager_list_type2.Data = [];
        pageData.chl_manager_list_type2.disableItem = [];
        pageData.chl_manager_chlist_head_ul.Data = [];

        if (0 == oprData.lists.length) return;

        for (var i = 0; i < oprData.lists.length; i++) {
            pageData.chl_manager_chlist_head_ul.Data.push({
                chl_manager_arrow_left_icon: {Data: oprData.lists[i].leftImg},
                chl_manager_chlist_title2: {Data: oprData.lists[i].name},
                chl_manager_arrow_right_icon: {Data: oprData.lists[i].rightImg}
            });
        }
        pageData.chl_manager_chlist_head_ul.SelectedIndex = crntListIdx;

        for (var i = 0; i < pageCount; i++) {

//            fetch fav data from page index
            var favI = pageSize * favPgIndex + i;
            if (favI < oprData.favChannels.length) {
                pageData.chl_manager_list_fav.Data.push({
                    chlManagerListFav1SelectImg: {Data: oprData.favChannels[favI].img},
                    chlManagerListFav1Num: {Data: oprData.favChannels[favI].number},
                    chlManagerListFav1Chlname: {Data: oprData.favChannels[favI].name}
                });
            }
            else {
                pageData.chl_manager_list_fav.Data.push({
                    chlManagerListFav1SelectImg: {Data: ""},
                    chlManagerListFav1Num: {Data: ""},
                    chlManagerListFav1Chlname: {Data: ""}
                });
                pageData.chl_manager_list_fav.disableItem.push(i);
            }

//            fetch list data from page index
            var listI = pageSize * listPgIndex + i;
            if (!!oprData.listChannels[crntListName] && listI < oprData.listChannels[crntListName].length) {
                pageData.chl_manager_list_type2.Data.push({
                    chlManagerListFav2SelectImg: {Data: oprData.listChannels[crntListName][listI].img},
                    chlManagerListFav2Num: {Data: oprData.listChannels[crntListName][listI].number},
                    chlManagerListFav2Chlname: {Data: oprData.listChannels[crntListName][listI].name}
                });
                if (isInFavList(favBit, oprData.listChannels[crntListName][listI])) {
                    pageData.chl_manager_list_type2.disableItem.push(i);
                }
            }
            else {
                pageData.chl_manager_list_type2.Data.push({
                    chlManagerListFav2SelectImg: {Data: ""},
                    chlManagerListFav2Num: {Data: ""},
                    chlManagerListFav2Chlname: {Data: ""}
                });
                pageData.chl_manager_list_type2.disableItem.push(i);
            }
        }

        pageData.chl_manager_list_fav.SelectedIndex = favSelIndex;
        pageData.chl_manager_list_type2.SelectedIndex = listSelIndex;

        if(oprData.favChannels.length) {
            favScrlHeight = 686 / Math.ceil(oprData.favChannels.length / pageSize);
            favScrlHeight = 686 == favScrlHeight ? 0 : favScrlHeight;
        }else{
            favScrlHeight = 0;
        }

        if (!!oprData.listChannels[crntListName]) {
            listScrHeight = 686 / Math.ceil(oprData.listChannels[crntListName].length / pageSize);
            listScrHeight = 686 == listScrHeight ? 0 : listScrHeight;
        }
        else {
            listScrHeight = 0;
        }
    }

    function convertChannelList(oriLists) {
        var lists = [];
        oriLists.forEach(function (v) {
            if (v.name != "FAV1" && v.name != "FAV2" && v.name != "FAV3" && v.name != "FAV4") {
                if(hiWebOsFrame.getCurrentArea() == 'SA'){
                    lists.push({
                        uid: v.uid,
                        name: v.name,
                        satId: v.satId,
                        leftImg: 'img/channellist/white_l_arrow.png',
                        rightImg: 'img/channellist/white_r_arrow.png'
                    });
                }else{
                    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                        lists.push({
                            uid: v.uid,
                            name: v.name,
                            satId: v.satId,
                            leftImg: 'img/channellist/white_l_arrow.png',
                            rightImg: 'img/channellist/white_r_arrow.png'
                        });
                    }
                    else {
                        lists.push({
                            uid: v.uid,
                            name: v.name,
                            satId: v.satId,
                            leftImg: 'img/channellist/white_r_arrow.png',
                            rightImg: 'img/channellist/white_l_arrow.png'
                        });
                        $('#chl_manager_arrow_left_icon').css('margin-right', 235 + 'px');
                    }
                }
            }
        });
        lists[0].leftImg = lists[lists.length - 1].rightImg = 'img/blank.png';
        return lists;
    }

    function eventRowsToChannelLeft(rows) {
        var channelsleft = [];
        for (var i = 0; i < rows.length; i++) {
            if ((rows[i][4] & (1 << 3))) {
                var chnl = {
                    number: rows[i][0],
                    name: rows[i][1],
                    uid: rows[i][2],
                    type: rows[i][3],
                    attr: parseInt(rows[i][4]),
                    uuid: rows[i][5],
                    skip: !(rows[i][4] & (1 << 3)),
                    HdSd: parseInt(rows[i][6]),
                    tvType: rows[i][7],
                    SvlRecID: rows[i][8],
                    img: false
                };
                channelsleft.push(chnl);
            }
        }
        return channelsleft;
    }

    function eventRowsToChannel(rows) {
        var channels = [];
        for (var i = 0; i < rows.length; i++) {
            if ((rows[i][4] & (1 << 3))) {
                var chnl = {
                    number: rows[i][0],
                    name: rows[i][1],
                    uid: rows[i][2],
                    type: rows[i][3],
                    attr: parseInt(rows[i][4]),
                    uuid: (rows[i][5]),
                    skip: !(rows[i][4] & (1 << 3)),
                    HdSd: parseInt(rows[i][6]),
                    tvType: rows[i][7],
                    SvlRecID: rows[i][8],
                    img: false
                };
                channels.push(chnl);
            }
        }
        return channels;
    }

    function refreshWhenSwitchType(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {

            oprData.listChannels[crntListName] = eventRowsToChannel(event.rows);

            setIndexAndRewrite(REWRITETYPE.SWITCHLIST);

        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenSwitchType(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshCurrentPage(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.listChannels[crntListName] = eventRowsToChannel(event.rows);

            setIndexAndRewrite(REWRITETYPE.CURRENT);

            hiWebOsFrame.endLoading();
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshCurrentPage(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshCurrentPageWhenAddFav(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.listChannels[crntListName] = eventRowsToChannel(event.rows);
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                try
                {
                    if(typeof launcherFavlist != 'undefined')
                    {
                        launcherFavlist.setneedupdate();
                    }
                }
                catch (e){
                    debugE(e.message)
                }
            }
            setIndexAndRewrite(REWRITETYPE.ADDFAV);
            if(typeof chlmanagerfliterpage != 'undefined'){
                chlmanagerfliterpage.onDestroyPageDefault();
            }
            hiWebOsFrame.endLoading();
            repeatMum = 0;
            UnselectedFavImg = true;
            UnselectedType2Img = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshCurrentPageWhenAddFav(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshWhenAddFav(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.favChannels = eventRowsToChannelLeft(event.rows);
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                try
                {
                    if(typeof launcherFavlist != 'undefined')
                    {
                        launcherFavlist.setneedupdate();
                    }
                }
                catch (e){
                    debugE(e.message)
                }
            }
            channelsBakup = $.extend([], oprData.favChannels);
            getChannelsByListId(oprData.lists[crntListIdx], refreshCurrentPageWhenAddFav);
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenAddFav(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []})
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshCurrentPageWhenCancelFav(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.listChannels[crntListName] = eventRowsToChannel(event.rows);
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                if(typeof launcherFavlist != 'undefined')
                {
                    launcherFavlist.setneedupdate();
                }
            }
            setIndexAndRewrite(REWRITETYPE.CANCELFAV);
            if(typeof chlmanagerfliterpage != 'undefined'){
                chlmanagerfliterpage.onDestroyPageDefault();
            }
            hiWebOsFrame.endLoading();
            repeatMum = 0;
            UnselectedFavImg = true;
            UnselectedType2Img = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshCurrentPageWhenCancelFav(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshWhenCancelFav(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.favChannels = eventRowsToChannelLeft(event.rows);
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                if(typeof launcherFavlist != 'undefined')
                {
                    launcherFavlist.setneedupdate();
                }
            }
            channelsBakup = $.extend([], oprData.favChannels);
            getChannelsByListId(oprData.lists[crntListIdx], refreshCurrentPageWhenCancelFav);
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenCancelFav(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshWhenMove(list, event) {
        debugPrint('chl_data_onServiceListIteratorEvent::::::::::::::::::::::' + JSON.stringify(event));
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.favChannels = eventRowsToChannelLeft(event.rows);
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                if(typeof launcherFavlist != 'undefined')
                {
                    launcherFavlist.setneedupdate();
                }
            }
            channelsBakup = $.extend([], oprData.favChannels);
            setIndexAndRewrite(REWRITETYPE.MOVE);
            if(typeof chlmanagerfliterpage != 'undefined'){
                chlmanagerfliterpage.onDestroyPageDefault();
            }
            hiWebOsFrame.endLoading();
            repeatMum = 0;
            UnselectedFavImg = true;
            UnselectedType2Img = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenMove(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshWhenRename(list, event) {
//        debugPrint('chl_data_onServiceListIteratorEvent::::::::::::::::::::::' + JSON.stringify(event));
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.favChannels = eventRowsToChannelLeft(event.rows);
            if (tv) {
//                livetvchlist.updateChannelListByEventRows(list, event.rows);
                if(typeof launcherFavlist != 'undefined')
                {
                    launcherFavlist.setneedupdate();
                }
            }
            channelsBakup = $.extend([], oprData.favChannels);
            getChannelsByListId(oprData.lists[crntListIdx], refreshCurrentPageWhenRenameFav);
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenRename(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }
    function refreshCurrentPageWhenRenameFav(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.listChannels[crntListName] = eventRowsToChannel(event.rows);
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
            }
            channelsRightBakup=$.extend([], oprData.listChannels[crntListName]);
            if(typeof chlmanagerfliterpage != 'undefined'){
                chlmanagerfliterpage.onDestroyPageDefault();
            }
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            hiWebOsFrame.channel_manager_fav_edit.hiFocus('chl_manager_list_fav');
            repeatMum = 0;
            UnselectedFavImg = true;
            UnselectedType2Img = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshCurrentPageWhenRenameFav(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function clearOperateData() {
        oprData.lists = {};
        oprData.listleft = {};
        oprData.favChannels = [];
        oprData.listChannels = [];
        favPgIndex = listPgIndex = 0;
        favSelIndex = listSelIndex = 0;
        crntListName = "N/A";
        crntListIdx = 0;
        repeatMum = 0;
        UnselectedFavImg = true;
        UnselectedType2Img = true;
    }

    self.onOpenChlManagerfav = function () {
        //read data
//        clearOperateData();
//        oprData.lists = convertChannelList(channelmanagerpage.getLists());
//        oprData.listleft = channelmanagerpage.getCurrentSelecedList();
//        if (oprData.lists.length > 0) {
//            crntListName = oprData.lists[0].name;
//        }
//        getChannelsByListId(oprData.listleft, onGetCurrentFavList);
    }
    self.onOpenChlManagerfavNew = function () {
        //read data
//        clearOperateData();
        oprData.lists = convertChannelList(channelmanagerpage.getLists());
        oprData.listleft = channelmanagerpage.getCurrentSelecedList();
        if (oprData.lists.length > 0) {
            crntListName = oprData.lists[0].name;
        }
        repeatMum = 0;
        UnselectedFavImg = true;
        UnselectedType2Img = true;
        getChannelsByListId(oprData.listleft, onGetCurrentFavList);
    }
    function onGetCurrentFavList(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            oprData.favChannels = eventRowsToChannelLeft(event.rows);
            channelsBakup = $.extend([], oprData.favChannels);
            getChannelsByListId(oprData.lists[crntListIdx], refreshCurrentPage);
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                onGetCurrentFavList(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    self.keyDownOnFavPage = function () {
        if (this.SelectedIndex == pageSize - 1 &&
            (favPgIndex + 1) * pageSize < oprData.favChannels.length) {
            favPgIndex++;
            favSelIndex = 0;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }

        if(favPgIndex * pageSize + this.SelectedIndex == oprData.favChannels.length - 1){
            favPgIndex = 0;
            favSelIndex = 0;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }
    self.keyUpOnFavPage = function () {
        if (this.SelectedIndex == 0 && favPgIndex > 0) {
            favPgIndex--;
            favSelIndex = pageSize - 1;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
        if (this.SelectedIndex == 0 && favPgIndex == 0) {
            favPgIndex = Math.floor(oprData.favChannels.length / pageSize);
            if((oprData.favChannels.length % pageSize)==0) favPgIndex = favPgIndex-1;
            favSelIndex = oprData.favChannels.length % pageSize - 1;
            if(favSelIndex < 0) favSelIndex = 6;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }

    self.flipDownOnFavPage = function () {
        if ((favPgIndex + 1) * pageSize < oprData.favChannels.length) {
            favPgIndex++;
            favSelIndex = 0;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }

        if(favPgIndex == Math.floor(oprData.favChannels.length / pageSize)){
            favPgIndex = 0;
            favSelIndex = 0;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }
    self.flipUpOnFavPage = function () {
        if (favPgIndex > 0) {
            favPgIndex--;
            favSelIndex = 0;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
        if (favPgIndex == 0) {
            favPgIndex = Math.floor(oprData.favChannels.length / pageSize);
            favSelIndex = oprData.favChannels.length % pageSize - 1;
            if(favSelIndex < 0) favSelIndex = 6;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }

    self.keyDownOnListPage = function () {

        listSelIndex = this.SelectedIndex + 1;
        var ret = findPageIndex(0);
        if (ret.pageIndex != listPgIndex && ret.selIndex > -1) {
            listPgIndex = ret.pageIndex;
            listSelIndex = ret.selIndex;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }

        if (ret.selIndex == -1) {
            listPgIndex = 0;
            listSelIndex = 0;
            var retIdx = findPageIndex(0);
            listPgIndex = retIdx.pageIndex;
            listSelIndex = retIdx.selIndex;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }
    }
    self.keyUpOnListPage = function () {
        if (listPgIndex > 0) {

            var ori = {
                selIndex: listSelIndex,
                pageIndex: listPgIndex
            }
            if (this.SelectedIndex > 0) {
                listSelIndex = this.SelectedIndex - 1;
            }
            else {
                listSelIndex = pageSize - 1;
                listPgIndex--;
            }

            var ret = findPageIndex(1);
            if (ret.pageIndex != ori.pageIndex && ret.selIndex > -1) {
                listPgIndex = ret.pageIndex;
                listSelIndex = ret.selIndex;
                hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
                setScrollBar(1);
                return false;
            }

            if (ret.selIndex == -1) {

                listSelIndex = ori.selIndex;
                listPgIndex = ori.pageIndex;
            }
        }
    }

    self.flipDownOnListPage = function () {

        var ori = {
            selIndex: listSelIndex,
            pageIndex: listPgIndex
        }

        listSelIndex = 0;
        listPgIndex++;

        var ret = findPageIndex(0);
        if (ret.pageIndex != ori.pageIndex && ret.selIndex > -1) {
            listPgIndex = ret.pageIndex;
            listSelIndex = ret.selIndex;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }

        if (ret.selIndex == -1) {

            listPgIndex = 0;
            listSelIndex = 0;
            var retIdx = findPageIndex(0);
            listPgIndex = retIdx.pageIndex;
            listSelIndex = retIdx.selIndex;
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }

    }
    self.flipUpOnListPage = function () {
        if (listPgIndex > 0) {

            var ori = {
                selIndex: listSelIndex,
                pageIndex: listPgIndex
            }

            listSelIndex = pageSize - 1;
            listPgIndex--;

            var ret = findPageIndex(1);
            if (ret.pageIndex != ori.pageIndex && ret.selIndex > -1) {
                listPgIndex = ret.pageIndex;
                listSelIndex = ret.selIndex;
                hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
                setScrollBar(1);
                return false;
            }

            if (ret.selIndex == -1) {

                listSelIndex = ori.selIndex;
                listPgIndex = ori.pageIndex;
            }
        }
    }
    function isInFavList(favBit, chnl) {
        if (tv) {
            return (chnl.attr & (1 << favBit));
        }
        else {

            for (var i = 0; i < oprData.favChannels.length; i++) {
                if ((oprData.favChannels[i].uid == chnl.uid) && (oprData.favChannels[i].uuid == chnl.uuid)) {
                    return true;
                }
            }
            return false;
        }

    }

    function findListSelectedIndex(flag, startPos, favBit, chnls) {
        var idx = -1;
        if (flag == 0) {
            for (var i = startPos; i < pageSize; i++) {
                if (i < chnls.length && !isInFavList(favBit, chnls[i])) {
                    idx = i;
                    break;
                }
            }
        }
        else {
            for (var i = startPos; i >= 0; i--) {
                if (i < chnls.length && !isInFavList(favBit, chnls[i])) {
                    idx = i;
                    break;
                }
            }
        }

        return idx;
    }

    //flag: 0 down
    //flag: 1 up
    //flag: 2 all
    function findPageIndex(flag) {
        var totalPage = Math.ceil(oprData.listChannels[crntListName].length / pageSize);

        var favBit = parseInt(oprData.listleft.name.charAt(3)) + 3;

        var ret = {
            selIndex: -1,
            pageIndex: 0
        }

        if (flag == 0) {
            for (var i = listPgIndex; i < totalPage; i++) {
                var startPos = i == listPgIndex ? listSelIndex : 0;
                ret.selIndex = findListSelectedIndex(flag, startPos, favBit,
                    oprData.listChannels[crntListName].slice(i * pageSize, (i + 1) * pageSize));
                if (ret.selIndex > -1) {
                    ret.pageIndex = i;
                    break;
                }
            }
        }
        else {
            for (var i = listPgIndex; i >= 0; i--) {
                var startPos = i == listPgIndex ? listSelIndex : pageSize - 1;
                ret.selIndex = findListSelectedIndex(flag, startPos, favBit,
                    oprData.listChannels[crntListName].slice(i * pageSize, (i + 1) * pageSize));
                if (ret.selIndex > -1) {
                    ret.pageIndex = i;
                    break;
                }
            }
        }
        return ret;

    }

    function setIndexAndRewrite(tp) {
        switch (tp) {
            case REWRITETYPE.FILTER:
            case REWRITETYPE.CURRENT:
            case REWRITETYPE.SWITCHLIST:
                favPgIndex = listPgIndex = 0;
                favSelIndex = listSelIndex = 0;


                var retIdx = findPageIndex(0);

                listPgIndex = retIdx.pageIndex;
                listSelIndex = retIdx.selIndex;
                break;
            case REWRITETYPE.CANCELFAV:

                while (favPgIndex * pageSize > oprData.favChannels.length - 1) {
                    favPgIndex--;
                }

                while (favSelIndex > oprData.favChannels.length - favPgIndex * pageSize - 1) {
                    favSelIndex--;
                }

                if (oprData.favChannels.length == 0) {
                    favPgIndex = 0;
                    favSelIndex = 0;
                }
                listPgIndex = listSelIndex = 0;

                break;
            case REWRITETYPE.ADDFAV:

                favPgIndex = favSelIndex = 0;

                var retIdx = findPageIndex(0);
                if (retIdx.selIndex == -1) {
                    retIdx = findPageIndex(1);
                }
                listPgIndex = retIdx.pageIndex;
                listSelIndex = retIdx.selIndex;
                break;
            default :
                break;
        }

        var allDisable = (-1 == listSelIndex);
        listSelIndex = Math.max(0, listSelIndex);
        debugG("channel_manager_fav_edit_rewrite");
        if(tp==REWRITETYPE.CURRENT)
        {
            hiWebOsFrame.channel_manager_fav_edit.rewrite();
            hiWebOsFrame.channel_manager_fav_edit.open();
        }else{
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
        }
        if (tp == REWRITETYPE.SWITCHLIST) {
            hiWebOsFrame.channel_manager_fav_edit.hiFocus("chl_manager_chlist_head_ul");
        }
        else if (tp == REWRITETYPE.CANCELFAV || tp == REWRITETYPE.MOVE) {
            if (oprData.favChannels.length > 0) {
                hiWebOsFrame.channel_manager_fav_edit.hiFocus("chl_manager_list_fav");
            }
            else {
                hiWebOsFrame.channel_manager_fav_edit.hiFocus("chl_manager_chlist_head_ul");
            }
        }
        else if (tp == REWRITETYPE.ADDFAV || tp == REWRITETYPE.CURRENT) {
            if (!allDisable) {
                hiWebOsFrame.channel_manager_fav_edit.hiFocus("chl_manager_list_type2");
            }
            else {
                hiWebOsFrame.channel_manager_fav_edit.hiFocus("chl_manager_chlist_head_ul");
            }
        }
        setScrollBar(0);
        setScrollBar(1);
    }

    self.onDestroyPage = function () {
        clearOperateData();
        hiWebOsFrame.channel_manager_fav_edit = null;

    }
    self.returnManagerPage = function () {
        if (moveflag) {
            $("#chl_manager_list_fav").removeClass("chl_manager_list_style1");
            $("#chl_manager_list_fav").addClass("chl_manager_list_content");
            moveflag = false;
            return;
        }
        /* 移动模式下不返回上一页退出移动模式 */
//        hiWebOsFrame.channel_manager_fav_edit.close();

        hiWebOsFrame.channel_manager_fav_edit.origin.hiFocus();
        hiWebOsFrame.channel_manager_fav_edit.destroy();
        if(typeof chlmanagerfliterpage != 'undefined'){
            debugPrint('________init chlmanagerfliterpage::::::::::::::::::::::');
            chlmanagerfliterpage.onDestroyPageDefault();
        }
    }
    self.rightlist = function () {
        if (moveflag) return;
        debugPrint('________go to right all page::::::::::::::::::::::');
//        $("#chl_manager_bg_button2").attr("src","img/common/brown.png");
//        $("#chl_manager_bg_button3").attr("src","img/common/brown.png");
        hiWebOsFrame.channel_manager_fav_edit.hiFocus('chl_manager_chlist_head_ul');
    }
    self.openRenamePage = function (pageData) {
        /* 移动模式下不响应此按键  */
        if (moveflag)  return;

        var items = getSelectedItems(0);

        /* 无选中频道不响应此按键  */
        if (items.length == 0) return;
        DBG_INFO('rename items::::::' + objToString(items));
        hiWebOsFrame.createPage("channel_manager_rename", null, this.page, null, function (a) {
            hiWebOsFrame.channel_manager_rename = a;
//            DBG_INFO('______________________items::::::' + objToString(items));
            a.operateData.renameList = items;
            channelmanagerrenamepage.onOpenChlManagerRename();
//            a.open();
//            a.hiFocus();
        });
        return false;
    }
    self.openFliterPage = function (pageData) {
        /* 移动模式下不响应此按键  */
        if (moveflag)  return;

        hiWebOsFrame.createPage("channel_manager_fliter", null, this.page, null, function (a) {
            hiWebOsFrame.channel_manager_fliter = a;
//            a.open();
//            a.hiFocus();
        })
    }

    self.LeftListPage = function () {
        if (oprData.favChannels.length > 0) {
            debugPrint('________go to left fav page::::::::::::::::::::::');
//            $("#chl_manager_bg_button2").attr("src","img/common/green.png");
//            $("#chl_manager_bg_button3").attr("src","img/common/yellow.png");
            hiWebOsFrame.channel_manager_fav_edit.hiFocus('chl_manager_list_fav');
        }
    }
    self.aftSwitchList = function () {
        crntListIdx = this.SelectedIndex;
        crntListName = oprData.lists[crntListIdx].name;
        UnselectedType2Img = true;
        getChannelsByListId(oprData.lists[crntListIdx], refreshWhenSwitchType);
    }
    self.setshowImg = function () {
        if (moveflag) {
            $("#chl_manager_list_fav").removeClass("chl_manager_list_style1");
            $("#chl_manager_list_fav").addClass("chl_manager_list_content");
            favSelIndex = this.SelectedIndex;

            var destItem = oprData.favChannels[pageSize * favPgIndex + favSelIndex];

//            DBG_INFO('moveItems::::::' + objToString(moveItems));
            DBG_INFO('destItem::::: ' + objToString(destItem));
            var moveItemsNum = [], moveItemsChannelId = [];
            moveItems.forEach(function (v) {
                moveItemsNum.push(v.number);
                moveItemsChannelId.push(v.uid);
            });
            hiWebOsFrame.startLoading();
            if (tv) {
                model.servicelist.MoveMoreChannel(oprData.listleft.uid, destItem.number, moveItemsNum);
            }
            else {
                moveChannelsToDestNum(oprData.listleft.uid, moveItemsChannelId, destItem.number);
            }

            getChannelsByListId(oprData.listleft, refreshWhenMove);//onGetCurrentFavList
            moveItemsNum = [];
            moveItemsChannelId = [];
            moveflag = false;
        }
        else {
            if (this.id == "chl_manager_list_fav") {
                debugPrint('________chl_manager_list_fav::::::::::::::::::::::');
                ClearSelectedItems(1);
                DBG_INFO('getKeyRepeatMode::::: ' + objToString(hiWebOsFrame.getKeyRepeatMode()));
                if(hiWebOsFrame.getKeyRepeatMode()) {
                    repeatMum++;
                    if(repeatMum == 1){
                        DBG_INFO('repeatMum::::: ');
                        for(var i = 0;i<oprData.favChannels.length;i++){
                            if(i != this.SelectedIndex ){
                                if(UnselectedFavImg){
                                    oprData.favChannels[i].img = true;
                                }else{
                                    oprData.favChannels[i].img = false;
                                }
//                                oprData.favChannels[i].img  = !oprData.favChannels[i].img;
                            }
                        }
                        UnselectedFavImg = !UnselectedFavImg;
                    }
                }else{
                    DBG_INFO('__________no repeat');
                    favSelIndex = this.SelectedIndex;
                    oprData.favChannels[pageSize * favPgIndex + favSelIndex].img = !oprData.favChannels[pageSize * favPgIndex + favSelIndex].img;
                }
            }
            else {
                debugPrint('________chl_manager_list_type2::::::::::::::::::::::');
                ClearSelectedItems(0);
                DBG_INFO('getKeyRepeatMode::::: ' + objToString(hiWebOsFrame.getKeyRepeatMode()));
                if(hiWebOsFrame.getKeyRepeatMode()) {
                    repeatMum++;
                    if(repeatMum == 1){
                    DBG_INFO('repeatMum::::: ');
                    for(var i = 0;i< oprData.listChannels[crntListName].length;i++){
                        if(i != this.SelectedIndex ){
                            if(UnselectedType2Img){
                                oprData.listChannels[crntListName][i].img = true;
                            }else{
                                oprData.listChannels[crntListName][i].img = false;
                            }
//                         oprData.listChannels[crntListName][i].img  =  ! oprData.listChannels[crntListName][i].img;
                        }
                    }
                        UnselectedType2Img = !UnselectedType2Img;
                    }
                }else{
                    listSelIndex = this.SelectedIndex;
                    oprData.listChannels[crntListName][pageSize * listPgIndex + listSelIndex].img = !oprData.listChannels[crntListName][pageSize * listPgIndex + listSelIndex].img;
                }
            }
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
        }
    }
    self.stopRepeatFavSetSelected = function() {
        repeatMum = 0;
    }
    function getSelectedItems(flag) {

        //0: fav, 1: list
        var items = [];
        if (flag == 0) {
            items = oprData.favChannels.filter(function (v) {
                return v.img == true;
            });
        }
        else {
            if (!!oprData.listChannels[crntListName]) {
                items = oprData.listChannels[crntListName].filter(function (v) {
                    return v.img == true;
                });
            }
            else {
                items = [];
            }
        }
        return items;
    }
    function ClearSelectedItems(flag) {
        //0: fav, 1: list
        if (flag == 0) {
           for(i=0;i<oprData.favChannels.length;i++){
              if(oprData.favChannels[i].img==true)
              {
                  oprData.favChannels[i].img=false;
              }
           }
            UnselectedFavImg  = true;
        }
        else {
            if (!!oprData.listChannels[crntListName]) {
                for(i=0;i<oprData.listChannels[crntListName].length;i++){
                if(oprData.listChannels[crntListName][i].img==true)
                {
                    oprData.listChannels[crntListName][i].img=false;
                }
                }
                UnselectedType2Img = true;
            }
            else {
            }
        }
//        hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
    }
    self.setMovePostion = function () {
        if (oprData.listleft.name == "SKY") return;
        moveItems = getSelectedItems(0);
//        DBG_INFO('moveItems::::::' + objToString(moveItems));
        if (moveItems.length == 0) {
            moveItems = [];
            return;
        }

        moveflag = true;
        $("#chl_manager_list_fav").removeClass("chl_manager_list_content");
        $("#chl_manager_list_fav").addClass("chl_manager_list_style1");
    }

    self.setFavChannel = function (pageData) {

        var items = getSelectedItems(1);
        if (items.length == 0) return;

        var favuids = [];
        items.forEach(function (v) {
            v.img = false;
            favuids.push(v.uid);

        });
        DBG_INFO('add favuids::::::' + objToString(favuids));
        hiWebOsFrame.startLoading();
        if (tv) {
            model.servicelist.addFavouriteChannel(oprData.lists[crntListIdx].uid, oprData.listleft.uid, favuids);
        }
        else {
            setFavChannelsByUid(oprData.lists[crntListIdx].uid, oprData.listleft.uid, favuids);
        }

        getChannelsByListId(oprData.listleft, refreshWhenAddFav);

    }
    self.cancelFavChannel = function (pageData) {

        if (moveflag)  return;

        var items = getSelectedItems(0);
        if (items.length == 0) return;

        var rmvFavUid = [];// or number??
        var rmvUuid = [];

        items.forEach(function (v) {
            v.img = false;
            rmvFavUid.push(v.uid);
            rmvUuid.push(v.uuid);
        });
        DBG_INFO('cancel favuids::::::' + objToString(rmvFavUid));
        hiWebOsFrame.startLoading();
        if (tv) {
            model.servicelist.removeFavouriteChannel(oprData.listleft.uid, rmvUuid, rmvFavUid);
        }
        else {
            removeFavChannelsByUid(oprData.listleft.uid, rmvFavUid);
        }
        var favBit = parseInt(oprData.listleft.name.charAt(3)) + 3;
        livetvchlist.syncOtherListWhenEditFav(rmvUuid, rmvFavUid,favBit);
        getChannelsByListId(oprData.listleft, refreshWhenCancelFav);

    }
    self.resetOprtDataAftRename = function (items) {
        items.forEach(function (v) {
            for (var i = 0; i < oprData.favChannels.length; i++) {
                if (v.number == oprData.favChannels[i].number) {
                    oprData.favChannels[i].name = v.name;
                    break;
                }
            }
        });
    }
    self.AddButtonClass =function(){
        $("#chl_manager_fav_buttonOk").attr("src","img/common/ok.png");
        $("#chl_manager_fav_button1").attr("src","img/common/red.png");
        $("#chl_manager_fav_button2").attr("src","img/common/green.png");
        $("#chl_manager_fav_button3").attr("src","img/common/yellow.png");
    }
    self.removeButtonClass=function(){
        $("#chl_manager_fav_buttonOk").attr("src","img/common/ok.png");
        $("#chl_manager_fav_button1").attr("src","img/common/red.png");
        $("#chl_manager_fav_button2").attr("src","img/common/brown.png");
        $("#chl_manager_fav_button3").attr("src","img/common/brown.png");
    }
    self.setFilterChannels = function (channels) {
        oprData.favChannels = channels;
        setIndexAndRewrite(REWRITETYPE.FILTER);

    }
    self.getBackUpChannels = function () {
        return $.extend([], channelsBakup);
    }
    self.setToListLeftAftRename = function () {
        getChannelsByListId(oprData.listleft, refreshWhenRename);
    }


    function setScrollBar(flag) {

        if (0 == flag) {
            var top = favPgIndex * favScrlHeight;
            $("#chl_manager_list_fav_scroll").css("height", favScrlHeight + "px");
            $("#chl_manager_list_fav_scroll").css("margin-top", top + "px");
        }
        else {
            var top = listPgIndex * listScrHeight;
            $("#chl_manager_list_list_scroll").css("height", listScrHeight + "px");
            $("#chl_manager_list_list_scroll").css("margin-top", top + "px");
        }
        if(hiWebOsFrame.getCurrentArea() == 'SA'){
            $("#chl_manager_fav_button_txtOk").css("display","none");
            $("#chl_manager_fav_buttonOk").css("display","none");
        }

        if(hiWebOsFrame.getCurrentArea() == 'SA'){
            $("#chl_manager_list_fav_scroll").css({"float": "right","margin-right":"15px"});
            $("#chl_manager_list_list_scroll").css({"float": "right","margin-right":"15px"});
            $("#chl_manager_list_fav").css({"float": "left","margin-left": "32px"});
            $("#chl_manager_list_type2").css({"float": "left","margin-left": "32px"});
            $("#chl_manager_fav_chlist_1").css("left", "104px");
            $("#chl_manager_fav_chlist_2").css("left", "1030px");
            $("#chl_manager_fav_button_txtOk").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_fav_button_txt1").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_fav_button_txt2").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_fav_button_txt3").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_fav_buttonOk").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_fav_button1").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_fav_button2").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_fav_button3").css({"float":"right","margin-right":"20px"});
        }else{
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                $("#chl_manager_list_fav_scroll").css({"float": "right","margin-right":"15px"});
                $("#chl_manager_list_list_scroll").css({"float": "right","margin-right":"15px"});
                $("#chl_manager_list_fav").css({"float": "left","margin-left": "32px"});
                $("#chl_manager_list_type2").css({"float": "left","margin-left": "32px"});
                $("#chl_manager_fav_chlist_1").css("left", "104px");
                $("#chl_manager_fav_chlist_2").css("left", "1030px");
                $("#chl_manager_fav_button_txtOk").css({"float":"right","margin-right":"80px"});
                $("#chl_manager_fav_button_txt1").css({"float":"right","margin-right":"80px"});
                $("#chl_manager_fav_button_txt2").css({"float":"right","margin-right":"80px"});
                $("#chl_manager_fav_button_txt3").css({"float":"right","margin-right":"80px"});
                $("#chl_manager_fav_buttonOk").css({"float":"right","margin-right":"20px"});
                $("#chl_manager_fav_button1").css({"float":"right","margin-right":"20px"});
                $("#chl_manager_fav_button2").css({"float":"right","margin-right":"20px"});
                $("#chl_manager_fav_button3").css({"float":"right","margin-right":"20px"});
            }
            else {
                $("#chl_manager_list_fav_scroll").css({"float": "left","margin-left":"15px"});
                $("#chl_manager_list_list_scroll").css({"float": "left","margin-left":"15px"});
                $("#chl_manager_list_fav").css({"float": "right","margin-right": "32px"});
                $("#chl_manager_list_type2").css({"float": "right","margin-right": "32px"});
                $("#chl_manager_fav_chlist_1").css("left", "1030px");
                $("#chl_manager_fav_chlist_2").css("left", "104px");
                $("#chl_manager_fav_button_txtOk").css({"float":"left","margin-left":"80px"});
                $("#chl_manager_fav_button_txt1").css({"float":"left","margin-left":"80px"});
                $("#chl_manager_fav_button_txt2").css({"float":"left","margin-left":"80px"});
                $("#chl_manager_fav_button_txt3").css({"float":"left","margin-left":"80px"});
                $("#chl_manager_fav_buttonOk").css({"float":"left","margin-left":"20px"});
                $("#chl_manager_fav_button1").css({"float":"left","margin-left":"20px"});
                $("#chl_manager_fav_button2").css({"float":"left","margin-left":"20px"});
                $("#chl_manager_fav_button3").css({"float":"left","margin-left":"20px"});
            }
        }
    }

}


var channelmanagerfav = new ChannelManagerFAV();

