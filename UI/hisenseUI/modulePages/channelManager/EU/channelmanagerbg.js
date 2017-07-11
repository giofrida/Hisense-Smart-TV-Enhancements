/**
 * Created on 14-9-28.
 */

function getchlmanagerBgData(opts) {
    opts.CaE = [
        {
            "id": "chl_manager_bg_head",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_chlist_title1",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id":"chl_manager_bg_chlist_input",
            "description":"",
            "CaEType":"input",
            "inputAttr":"number",
//            "maxlength":4,
            "supportCursor":false,
            "classes":{
                "normal":"chlmanagerNumberInputNormal","focus":"chlmanagerNumberInputFocus","disable":"chlmanagerNumberInputNormal"
            },
            "nav":{
                "downTo":"","upTo":""
            },
            "handler":{
                "aftEnterHandler":"channelmanagerbg.changeChannelFocus",
                "befEscHandler":"channelmanagerbg.returnManagerInputPage"
            },
            "onChange":"channelmanagerbg.chnlNumInputOnChange"
        },
        {
            "id":"chl_manager_bg_chlist_input_move",
            "description":"",
            "CaEType":"input",
            "inputAttr":"number",
//            "maxlength":4,
            "supportCursor":false,
            "classes":{
                "normal":"chlmanagerNumberInputNormal","focus":"chlmanagerNumberInputFocus","disable":"chlmanagerNumberInputNormal"
            },
            "nav":{
                "downTo":"chl_manager_bg_dialog_btn_0","upTo":""
            },
            "handler":{
                "aftEnterHandler":"channelmanagerbg.changeChannelFocus",
                "befEscHandler":"channelmanagerbg.returnManagerInputPage"
            },
            "onChange":"channelmanagerbg.chnlNumInputOnChange"
        },
        {
            "id": "chl_manager_bg_dialog_btn_0",
            "description": "取消按键",
            "CaEType": "div",
            "classes": {
                "normal": "chl_manager_bg_dialog_btn_class_normal",
                "focus": "chl_manager_bg_dialog_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "channelmanagerbg.returnManagerInputPage",
                "aftEscHandler": "channelmanagerbg.returnManagerInputPage"
            },
            "nav": {
                "leftTo": "chl_manager_bg_dialog_btn_1",
                "rightTo": "chl_manager_bg_dialog_btn_1",
                "upTo": "chl_manager_bg_chlist_input_move"
            }
        },
        {
            "id": "chl_manager_bg_dialog_btn_1",
            "description": "保存按键",
            "CaEType": "div",
            "classes": {
                "normal": "chl_manager_bg_dialog_btn_class_normal",
                "focus": "chl_manager_bg_dialog_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "channelmanagerbg.changeChannelFocus",
                "befEscHandler":"channelmanagerbg.returnManagerInputPage"
            },
            "nav": {
                "leftTo": "chl_manager_bg_dialog_btn_0",
                "rightTo": "chl_manager_bg_dialog_btn_0",
                "upTo": "chl_manager_bg_chlist_input_move"
            }
        },
        {
            id: 'chl_manager_list_type1',
            CaEType: 'Ul',
            nav: {
//                rightTo: 'chl_manager_list_delete'
            },
            handler: {
//                befEscHandler: channelmanagerbg.returnManagerPage,
                befRightHandler: channelmanagerbg.rightlist,
                befDownHandler: channelmanagerbg.keyDownOnTypePage,
                befUpHandler: channelmanagerbg.keyUpOnTypePage,
                aftRightHandler:channelmanagerbg.ChNameAddMarqueen,
                aftDownHandler:channelmanagerbg.ChNameAddMarqueen,
                aftUpHandler: channelmanagerbg.ChNameAddMarqueen,
                befEnterHandler: channelmanagerbg.setshowImg,
//                keyNum1Handler: channelmanagerbg.setDeleteChannel,
                keyRedHandler: channelmanagerbg.setDeleteChannel,
                //keyNum2Handler: channelmanagerbg.setMovePostion,
                keyGreenHandler: channelmanagerbg.setMovePostion,
//                keyNum3Handler: channelmanagerbg.selectAllChannels,//channelmanagerbg.openRenamePage,
//                keyYellowHandler: channelmanagerbg.selectAllChannels,  //channelmanagerbg.openRenamePage,
               //keyNum4Handler: channelmanagerbg.openFliterPage,
                keyBlueHandler: channelmanagerbg.openFliterPage,
                keyChannelDownHandler: channelmanagerbg.flipDownOnTypePage,
                keyChannelUpHandler: channelmanagerbg.flipUpOnTypePage,
                keyNum0Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_0, 0),
                keyNum1Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_1, 0),
                keyNum2Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_2, 0),
                keyNum3Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_3, 0),
                keyNum4Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_4, 0),
                keyNum5Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_5, 0),
                keyNum6Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_6, 0),
                keyNum7Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_7, 0),
                keyNum8Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_8, 0),
                keyNum9Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_9, 0)
            },
            "onFocusFun":channelmanagerbg.AddButtonClass,
            oriCaE: [
                {
                    id: 'chlManagerList1SelectImg',
                    "CaEType": "SwitchDiv",
                    "imageList": {
                        "openImg": "img/channellist/mark.png",
                        "closeImg": "img/channellist/nomark.png"
                    }
                },
                {
                    id: 'chlManagerList1Num',
                    CaEType: 'span'
                },
                {
                    id: 'chlManagerList1Chlname',
                    CaEType: 'span',
                    noLangData: true
                }
            ],
            UlConfig: {
//                PageSize: 7,
                UlDataItem: ['chlManagerList1SelectImg', 'chlManagerList1Num', 'chlManagerList1Chlname']
            }
        },
        {
            "id": "chl_manager_chlist_title2",
            "description": "标题",
            "CaEType": "span"
        },
        {
            id: 'chl_manager_list_delete',
            CaEType: 'Ul',
            nav: {
//                leftTo: 'chl_manager_list_type1'
            },
            handler: {
//                befEscHandler: channelmanagerbg.returnManagerPage,
                befLeftHandler: channelmanagerbg.leftlist,
                befDownHandler: channelmanagerbg.keyDownOnDeletePage,
                befUpHandler: channelmanagerbg.keyUpOnDeletePage,
                aftLeftHandler:channelmanagerbg.ChNameAddMarqueen,
                aftDownHandler:channelmanagerbg.ChNameAddMarqueen,
                aftUpHandler: channelmanagerbg.ChNameAddMarqueen,
                befEnterHandler: channelmanagerbg.setshowImg,
//                keyNum1Handler: channelmanagerbg.setRestoreChannel,
                keyRedHandler: channelmanagerbg.setRestoreChannel,
//                keyNum3Handler: channelmanagerbg.selectAllChannels,
//                keyYellowHandler: channelmanagerbg.selectAllChannels,
                keyChannelDownHandler: channelmanagerbg.flipDownOnDeletePage,
                keyChannelUpHandler: channelmanagerbg.flipUpOnDeletePage,
                keyNum0Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_0, 1),
                keyNum1Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_1, 1),
                keyNum2Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_2, 1),
                keyNum3Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_3, 1),
                keyNum4Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_4, 1),
                keyNum5Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_5, 1),
                keyNum6Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_6, 1),
                keyNum7Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_7, 1),
                keyNum8Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_8, 1),
                keyNum9Handler: channelmanagerbg.ChnlManagerHandlerProcess.bind(this, VK_9, 1)
            },
            "onFocusFun":"channelmanagerbg.removeButtonClass",
            oriCaE: [
                {
                    id: 'chlManagerList2SelectImg',
                    "CaEType": "SwitchDiv",
                    "imageList": {
                        "openImg": "img/channellist/mark.png",
                        "closeImg": "img/channellist/nomark.png"
                    }
                },
                {
                    id: 'chlManagerList2Num',
                    CaEType: 'span'
                },
                {
                    id: 'chlManagerList2Chlname',
                    CaEType: 'span',
                    noLangData: true
                }

            ],
            UlConfig: {
//                PageSize: 7,
                UlDataItem: ['chlManagerList2SelectImg', 'chlManagerList2Num', 'chlManagerList2Chlname']
            }
        },
        {
            "id": "chl_manager_bg_button_txtOk",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_bg_button_txt1",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_bg_button_txt2",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_bg_button_txt3",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_bg_button_txt4",
            "description": "标题",
            "CaEType": "span"
        }
    ]

    return channelmanagerbg.pageData;
}

function ChannelManagerBg() {
    var self = this;
    var moveflag = false;
    var moveItems = [];

    /*左侧type页面是否有内容决定焦点位置 */
    var channelsBakup = [];
    var oprData = {
        list: {},
        channels: [],
        visChannels: [],
        hidChannels: [],
        ListRights: 0,
        refreshFavforLiveTv : false
    };

    var pageCount = 8, pageSize = 7, selectedItems = [],
        visPgIndex = 0, hidPgIndex = 0, visSelIndex = 0, hidSelIndex = 0;

    var visScrlHeight = 0, hidScrHeight = 0;

    var repeatMum = 0,  UnselectedType1Img = true, UnselectedDeleteImg = true;
    var filterNum = "" ,chnlfilterTimer = 0, filterIndex = 0, inputFrom = 0;
    var chnlDeleteTimer = 0, chnlCancelTimer = 0,chnlMoveTimer = 0;

    self.pageData = {
        chl_manager_bg_head: {Data: "Channel Management"},
        chl_manager_chlist_title1: {Data: ""},
        chl_manager_chlist_title2: {Data: "List of deleted channels"},
        chl_manager_bg_chlist_input:{Data: ""},
        chl_manager_bg_chlist_input_move:{Data: ""},
        chl_manager_bg_dialog_btn_0:{Data: "Cancel"},
        chl_manager_bg_dialog_btn_1:{Data: "Ok"},
        chl_manager_list_type1: {Data: [], SelectedIndex: 0},
        chl_manager_list_delete: {Data: [], SelectedIndex: 0},
        chl_manager_bg_button_txtOk:{ Data:"Use the number keys to quickly locate the channel"},
        chl_manager_bg_button_txt1: {Data: "Delete/Undo"},
        chl_manager_bg_button_txt2: {Data: "Move"},
        chl_manager_bg_button_txt3: {Data: "Select All"},
        chl_manager_bg_button_txt4: {Data: "Filter"},
        langData: {
            "Channel Management": [],
            "List of deleted channels":[],
            "Delete/Undo": [],
            "Move": [],
            "Rename": [],
            "Filter": [],
            "Antenna":[],
            "Cable":[],
            "Select all":[],
            "Use the number keys to quickly locate the channel":[]
        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprData;
    function REWRITETYPE() {
    }

    REWRITETYPE.CURRENT = 0;
    REWRITETYPE.DELETE = 1;
    REWRITETYPE.RECOVER = 2;
    REWRITETYPE.MOVE = 3;
    REWRITETYPE.FILTER = 4;

    function rewritePageData(pageData) {
        if (!oprData.channels) return;
        pageData.chl_manager_chlist_title1.Data = oprData.list.name;
        pageData.chl_manager_list_type1.Data = [];
        pageData.chl_manager_list_delete.Data = [];
        pageData.chl_manager_list_type1.disableItem = [];
        pageData.chl_manager_list_delete.disableItem = [];

        for (var i = 0; i < pageCount; i++) {

//            fetch visible data from page index
            var visI = pageSize * visPgIndex + i;
            if (visI < oprData.visChannels.length) {
                pageData.chl_manager_list_type1.Data.push({
                    chlManagerList1SelectImg: {Data: oprData.visChannels[visI].img},
                    chlManagerList1Num: {Data: oprData.visChannels[visI].number},
                    chlManagerList1Chlname: {Data: oprData.visChannels[visI].name}
                });
            }
            else {
                pageData.chl_manager_list_type1.Data.push({
                    chlManagerList1SelectImg: {Data: ""},
                    chlManagerList1Num: {Data: ""},
                    chlManagerList1Chlname: {Data: ""}
                });
                pageData.chl_manager_list_type1.disableItem.push(i);
            }

//            fetch hidden data from page index
            var hidI = pageSize * hidPgIndex + i;
            if (hidI < oprData.hidChannels.length) {
                pageData.chl_manager_list_delete.Data.push({
                    chlManagerList2SelectImg: {Data: oprData.hidChannels[hidI].img},
                    chlManagerList2Num: {Data: oprData.hidChannels[hidI].number},
                    chlManagerList2Chlname: {Data: oprData.hidChannels[hidI].name}
                });
            }
            else {
                pageData.chl_manager_list_delete.Data.push({
                    chlManagerList2SelectImg: {Data: ""},
                    chlManagerList2Num: {Data: ""},
                    chlManagerList2Chlname: {Data: ""}
                });
                pageData.chl_manager_list_delete.disableItem.push(i);
            }
        }
        pageData.chl_manager_list_type1.SelectedIndex = visSelIndex;
        pageData.chl_manager_list_delete.SelectedIndex = hidSelIndex;
        if(oprData.visChannels.length){
            visScrlHeight = 686 / Math.ceil(oprData.visChannels.length / pageSize);
            visScrlHeight = 686 == visScrlHeight ? 0 : visScrlHeight;
        }else {
            visScrlHeight = 0;
        }
        if(oprData.hidChannels.length){
            hidScrHeight = 686 / Math.ceil(oprData.hidChannels.length / pageSize);
            hidScrHeight = 686 == hidScrHeight ? 0 : hidScrHeight;
        }else{
            hidScrHeight  = 0;
        }
//        pageData.chl_manager_list_type1.disableItem.pushpageSize;
//        pageData.chl_manager_list_delete.disableItem.pushpageSize;
    }

    function eventRowsToChannel(rows) {
        var ret = {
            all: [],
            vis: [],
            hid: []
        };
//        debugPrint('eventRowsToChannel::::::::::::::::::::::'+JSON.stringify(rows));
        for (var i = 0; i < rows.length; i++) {
            var chnl = {
                number: rows[i][0],
                name: rows[i][1],
                uid: rows[i][2],
                type: rows[i][3],
                attr: parseInt(rows[i][4]),
//                skip: !(rows[i][4] & (1 << 9)),   //PC 调试
                skip: !(rows[i][4] & (1 << 3)),
                uuid: rows[i][5],
                HdSd: getDefinitionFlag(parseInt(rows[i][6])),
                tvType: rows[i][7],
                SvlRecID: rows[i][8],
                img: false
            };
            if (chnl.skip) {
                ret.hid.push(chnl);
            }
            else {
                ret.vis.push(chnl);
            }
            ret.all.push(chnl);
        }
        return ret;
    }
    function getDefinitionFlag(flag) {
        if((flag == 17) || (flag >= 25 && flag <= 30)){
            return 1;//HD
        }
        else if(flag == 31){
            return 3;//UHD
        }
        else{
            return 2;//SD
        }
    }
    function refreshCurrentPage(list, event) {
        try {
            if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
                var ret = eventRowsToChannel(event.rows);
                oprData.channels = ret.all;
                oprData.visChannels = ret.vis;
                oprData.hidChannels = ret.hid;
                channelsBakup = $.extend([], oprData.channels);
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
        catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function refreshWhenDel(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {

            var ret = eventRowsToChannel(event.rows);
            oprData.channels = ret.all;
            oprData.visChannels = ret.vis;
            oprData.hidChannels = ret.hid;
            oprData.refreshFavforLiveTv = true;
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                //livetvchlist.recheckFavList();
            }
            channelsBakup = $.extend([], oprData.channels);
            setIndexAndRewrite(REWRITETYPE.DELETE);
//            if(typeof chlmanagerfliterpage != 'undefined'){
//                chlmanagerfliterpage.onDestroyPageDefault();
//            }
            hiWebOsFrame.endLoading();
            repeatMum = 0;
            UnselectedType1Img = true;
            UnselectedDeleteImg = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenDel(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []})
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }

    }

    function refreshWhenCancelDel(list, event) {

        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {

            var ret = eventRowsToChannel(event.rows);
            oprData.channels = ret.all;
            oprData.visChannels = ret.vis;
            oprData.hidChannels = ret.hid;
            oprData.refreshFavforLiveTv = true;
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                //livetvchlist.recheckFavList();
            }
            channelsBakup = $.extend([], oprData.channels);
            setIndexAndRewrite(REWRITETYPE.RECOVER);
            hiWebOsFrame.endLoading();
            repeatMum = 0;
            UnselectedType1Img = true;
            UnselectedDeleteImg = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenCancelDel(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []})
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshWhenMove(list, event) {
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {

            var ret = eventRowsToChannel(event.rows);
            oprData.channels = ret.all;
            oprData.visChannels = ret.vis;
            oprData.hidChannels = ret.hid;
            oprData.refreshFavforLiveTv = true;
            if (tv) {
                livetvchlist.updateChannelListByEventRows(list, event.rows);
                //livetvchlist.recheckFavList();
            }

            channelsBakup = $.extend([], oprData.channels);
            setIndexAndRewrite(REWRITETYPE.MOVE);
//            if(typeof chlmanagerfliterpage != 'undefined'){
//                chlmanagerfliterpage.onDestroyPageDefault();
//            }
            hiWebOsFrame.endLoading();
            repeatMum = 0;
            UnselectedType1Img = true;
            UnselectedDeleteImg = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenMove(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []})
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function refreshWhenRename(list, event) {
//        debugPrint('chl_data_onServiceListIteratorEvent::::::::::::::::::::::' + JSON.stringify(event));
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {

            var ret = eventRowsToChannel(event.rows);
            oprData.channels = ret.all;
            oprData.visChannels = ret.vis;
            oprData.hidChannels = ret.hid;
//            if (tv) {
//                livetvchlist.updateChannelListByEventRows(list, event.rows);
//                livetvchlist.recheckFavList();
//            }
            channelsBakup = $.extend([], oprData.channels);
//            if(typeof chlmanagerfliterpage != 'undefined'){
//                chlmanagerfliterpage.onDestroyPageDefault();
//            }
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            hiWebOsFrame.channel_manager_bg.hiFocus("chl_manager_list_type1");
            repeatMum = 0;
            UnselectedType1Img = true;
            UnselectedDeleteImg = true;
        }
        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
            debugPrint("list name: " + list.name + "    event.totalCount:" + event.totalCount);
            if (event.totalCount <= 0) {
                refreshWhenRename(list, {type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []})
            }
            else {
                m_getservicelistIterator.readNextRows(event.totalCount);
            }
        }
    }

    function clearOperateData() {
        oprData.list = {};
        oprData.channels = [];
        oprData.visChannels = [];
        oprData.hidChannels = [];
        oprData.refreshFavforLiveTv = false;
        visPgIndex = hidPgIndex = 0;
        visSelIndex = hidSelIndex = 0;
        filterNum ="";
        filterIndex = 0;
        repeatMum = 0;
        UnselectedType1Img = true;
        UnselectedDeleteImg = true;
        $("#chl_manager_bg_mask").css("display","none");
        $("#chl_manager_bg_input_content").css("display","none");
        $("#chl_manager_bg_input_content_move").css("display","none");
    }

    self.onOpenChlManagerBg = function () {
        //read data
//        clearOperateData();
//        oprData.list = channelmanagerpage.getCurrentSelecedList();
//        debugPrint('________oprData.list.uid::::::::::::::::::::::' + oprData.list.uid);
//        getChannelsByListId(oprData.list, refreshCurrentPage);

    }
    function eventToChannel(rows) {
        var ret = {
            all: [],
            vis: [],
            hid: []
        };
//        debugPrint('eventRowsToChannel::::::::::::::::::::::'+JSON.stringify(rows));
        for (var i = 0; i < rows.length; i++) {
            var chnl = {
                number: rows[i].number,
                name: rows[i].name,
                uid: rows[i].uid,
                type: rows[i].type,
                attr: rows[i].attr,
                uuid: rows[i].playId,
                HdSd: rows[i].Definition,
                tvType: rows[i].serviceType,
                SvlRecID: rows[i].SvlRecID,
                skip: rows[i].isSkip,
                img: false
            };
            if (chnl.skip) {
                ret.hid.push(chnl);
            }
            else {
                ret.vis.push(chnl);
            }
            ret.all.push(chnl);
        }
        return ret;
    }
    self.onOpenChlManagerBgNew = function () {
        //read data
//        clearOperateData();
        if(hiWebOsFrame.getCurrentArea() == 'EU'){
            if(hiWebOsFrame.isCurrentModule("livetv")){
                oprData.list = livetvchlist.getCurrentList();
            }else {
                oprData.list = channelmanagerpage.getCurrentSelecedList();
            }
        }else{
            oprData.list = channelmanagerpage.getCurrentSelecedList();
        }
        filterNum ="";
        filterIndex = 0;
        repeatMum = 0;
        UnselectedType1Img = true;
        UnselectedDeleteImg = true;
        debugPrint('________oprData.list.uid::::::::::::::::::::::' + oprData.list.uid);
        var ret = eventToChannel(livetvchlist.getChannelListById(oprData.list));
        oprData.channels = ret.all;
        oprData.visChannels = ret.vis;
        oprData.hidChannels = ret.hid;
        channelsBakup = $.extend([], oprData.channels);
        setIndexAndRewrite(REWRITETYPE.CURRENT);
        hiWebOsFrame.endLoading();
        //getChannelsByListId(oprData.list, refreshCurrentPage);
    }
    self.keyDownOnTypePage = function () {
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId+" marquee").html();
        if(!!txt){
            $("#"+currId).html(txt);
        }
        if (this.SelectedIndex == pageSize - 1 &&
            (visPgIndex + 1) * pageSize < oprData.visChannels.length) {
            visPgIndex++;
            visSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
        if(visPgIndex * pageSize + this.SelectedIndex == oprData.visChannels.length - 1){
            visPgIndex = 0;
            visSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }
    self.keyUpOnTypePage = function () {
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId+" marquee").html();
        if(!!txt){
            $("#"+currId).html(txt);
        }
        if (this.SelectedIndex == 0 && visPgIndex > 0) {
            visPgIndex--;
            visSelIndex = pageSize - 1;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
        if (this.SelectedIndex == 0 && visPgIndex == 0) {
            visPgIndex = Math.floor(oprData.visChannels.length / pageSize);
            if((oprData.visChannels.length % pageSize )==0) visPgIndex = visPgIndex-1;
            visSelIndex = oprData.visChannels.length % pageSize - 1;
            if(visSelIndex < 0) visSelIndex = 6;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }

    self.flipDownOnTypePage = function () {
        if ((visPgIndex + 1) * pageSize < oprData.visChannels.length) {
            visPgIndex++;
            visSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }

        if(visPgIndex == Math.floor(oprData.visChannels.length / pageSize)){
            visPgIndex = 0;
            visSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }
    self.flipUpOnTypePage = function () {
        if (visPgIndex > 0) {
            visPgIndex--;
            visSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
        if (visPgIndex == 0) {
            visPgIndex = Math.floor(oprData.visChannels.length / pageSize);
            visSelIndex = oprData.visChannels.length % pageSize - 1;
            if(visSelIndex < 0) visSelIndex = 6;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(0);
            return false;
        }
    }

    self.keyDownOnDeletePage = function () {
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId+" marquee").html();
        if(!!txt){
            $("#"+currId).html(txt);
        }
        if (this.SelectedIndex == pageSize - 1 &&
            (hidPgIndex + 1) * pageSize < oprData.hidChannels.length) {
            hidPgIndex++;
            hidSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }

        if(hidPgIndex * pageSize + this.SelectedIndex == oprData.hidChannels.length - 1){
            hidPgIndex = 0;
            hidSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }

    }
    self.keyUpOnDeletePage = function () {
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId+" marquee").html();
        if(!!txt){
            $("#"+currId).html(txt);
        }
        if (this.SelectedIndex == 0 && hidPgIndex > 0) {
            hidPgIndex--;
            hidSelIndex = pageSize - 1;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }
        if (this.SelectedIndex == 0 && hidPgIndex == 0) {
            hidPgIndex = Math.floor(oprData.hidChannels.length / pageSize);
            if((oprData.hidChannels.length % pageSize)== 0)  hidPgIndex = hidPgIndex-1;
            hidSelIndex = oprData.hidChannels.length % pageSize - 1;
            if(hidSelIndex < 0) hidSelIndex = 6;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }
    }

    self.flipDownOnDeletePage = function () {
        if ((hidPgIndex + 1) * pageSize < oprData.hidChannels.length) {
            hidPgIndex++;
            hidSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }
        if(hidPgIndex == Math.floor(oprData.hidChannels.length / pageSize)){
            hidPgIndex = 0;
            hidSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }

    }
    self.flipUpOnDeletePage = function () {
        if (hidPgIndex > 0) {
            hidPgIndex--;
            hidSelIndex = 0;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }
        if (hidPgIndex == 0) {
            hidPgIndex = Math.floor(oprData.hidChannels.length / pageSize);
            hidSelIndex = oprData.hidChannels.length % pageSize - 1;
            if(hidSelIndex < 0) hidSelIndex = 6;
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            setScrollBar(1);
            return false;
        }
    }

    function setIndexAndRewrite(tp) {
        switch (tp) {
            case REWRITETYPE.FILTER:
            case REWRITETYPE.CURRENT:
                visPgIndex = hidPgIndex = 0;
                visSelIndex = hidSelIndex = 0;
                break;
            case REWRITETYPE.DELETE:

                while (visPgIndex * pageSize > oprData.visChannels.length - 1) {
                    visPgIndex--;
                }

                while (visSelIndex > oprData.visChannels.length - visPgIndex * pageSize - 1) {
                    visSelIndex--;
                }

                if (oprData.visChannels.length == 0) {
                    visPgIndex = 0;
                    visSelIndex = 0;
                }
                hidPgIndex = hidSelIndex = 0;

                break;
            case REWRITETYPE.RECOVER:

                while (hidPgIndex * pageSize > oprData.hidChannels.length - 1) {
                    hidPgIndex--;
                }

                while (hidSelIndex > oprData.hidChannels.length - hidPgIndex * pageSize - 1) {
                    hidSelIndex--;
                }

                if (oprData.hidChannels.length == 0) {
                    hidPgIndex = 0;
                    hidSelIndex = 0;
                }
                visPgIndex = visSelIndex = 0;
                break;
        }

        if(tp==REWRITETYPE.CURRENT)
        {
            hiWebOsFrame.channel_manager_bg.rewrite();
            hiWebOsFrame.channel_manager_bg.open();
        }else{
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
        }
        if (tp != REWRITETYPE.RECOVER && tp != REWRITETYPE.FILTER) {
            if (oprData.visChannels.length > 0) {
                hiWebOsFrame.channel_manager_bg.hiFocus("chl_manager_list_type1");
            }
            else {
                hiWebOsFrame.channel_manager_bg.hiFocus("chl_manager_list_delete");
            }
        }
        else if (tp != REWRITETYPE.FILTER) {
            if (oprData.hidChannels.length > 0) {
                hiWebOsFrame.channel_manager_bg.hiFocus("chl_manager_list_delete");
            }
            else {
                hiWebOsFrame.channel_manager_bg.hiFocus("chl_manager_list_type1");
            }
        }
        setScrollBar(0);
        setScrollBar(1);
    }

    self.onDestroyPage = function () {
        DBG_INFO('________channel_managerbg onDestroyPage::::::::' + oprData.list.uid,DebugLevel.ALWAYS);
        if(typeof chlmanagerfliterpage != 'undefined'){
            chlmanagerfliterpage.onDestroyPageDefault();
        }
        if (tv && oprData.refreshFavforLiveTv) {
            livetvchlist.recheckFavList();
        }
        clearOperateData();
        hiWebOsFrame.channel_manager_bg = null;
    }
    self.returnManagerInputPage = function(){
        $("#chl_manager_bg_mask").css("display","none");
        $("#chl_manager_bg_input_content").css("display","none");
        $("#chl_manager_bg_input_content_move").css("display","none");
        if(moveflag ==1){
            $("#chl_manager_bg_chlist_input_move").val("");
        }else{
            $("#chl_manager_bg_chlist_input").val("");
        }
        if(inputFrom == 0){
            hiWebOsFrame.channel_manager_bg.hiFocus('chl_manager_list_type1');
        }else{
            hiWebOsFrame.channel_manager_bg.hiFocus('chl_manager_list_delete');
        }
    }
    self.returnManagerPage = function () {
        if (moveflag) {
            $("#chl_manager_list_type1").removeClass("chl_manager_list_style1");
            $("#chl_manager_list_type1").addClass("chl_manager_list_content");
            moveflag = false;
            moveItems = [];
            return;
        }
        /* 移动模式下不返回上一页退出移动模式 */
        hiWebOsFrame.channel_manager_bg.origin.hiFocus();
        hiWebOsFrame.channel_manager_bg.destroy();
        if(typeof chlmanagerfliterpage != 'undefined'){
            debugPrint('________init chlmanagerfliterpage::::::::::::::::::::::');
        chlmanagerfliterpage.onDestroyPageDefault();
        }
    }
    self.rightlist = function () {
        if (oprData.hidChannels.length < 1) return;
        /* 右侧deleted列表为空焦点不能右移  */
        if (moveflag) return;
        /* 移动模式下焦点不能右移  */
        hiWebOsFrame.channel_manager_bg.hiFocus('chl_manager_list_delete');
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId+" marquee").html();
        if(!!txt){
            $("#"+currId).html(txt);
        }
    }
    self.leftlist = function () {
        if (oprData.visChannels.length < 1) return;
        /* 左侧列表为空焦点不能左移  */
        hiWebOsFrame.channel_manager_bg.hiFocus('chl_manager_list_type1');
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId+" marquee").html();
        if(!!txt){
            $("#"+currId).html(txt);
        }
    }

    self.setshowImg = function () {
        if (moveflag) {
            $("#chl_manager_list_type1").removeClass("chl_manager_list_style1");
            $("#chl_manager_list_type1").addClass("chl_manager_list_content");
            visSelIndex = this.SelectedIndex;

            var destItem = oprData.visChannels[pageSize * visPgIndex + visSelIndex];

//            DBG_INFO('moveItems::::::' + objToString(moveItems));
            DBG_INFO('destItem::::: ' + objToString(destItem));
            var moveItemsNum = [], moveItemsChannelId = [], moveItemsSvlRecID =[];
            moveItems.forEach(function (v) {
                moveItemsNum.push(v.number);
                moveItemsChannelId.push(v.uid);
                moveItemsSvlRecID.push(v.SvlRecID);
            });
            hiWebOsFrame.startLoading();
            clearTimeout(chnlMoveTimer);
            chnlMoveTimer = setTimeout(function() {
                if (tv) {
                    try {
                        model.servicelist.MoveMoreChannel(oprData.list.uid, destItem.SvlRecID, moveItemsSvlRecID);
                    } catch (ex) {
                        DBG_ERROR("Move func error, begin read channel list refresh UI"+ex.message);
                        getChannelsByListId(oprData.list, refreshWhenMove);
                        moveItemsNum = [];
                        moveItemsChannelId = [];
                        moveItemsSvlRecID =[];
                        moveflag = false;
                    }
                }
                else {
                    moveChannelsToDestNum(oprData.list.uid, moveItemsChannelId, destItem.number);
                }

                getChannelsByListId(oprData.list, refreshWhenMove);
                moveItemsNum = [];
                moveItemsChannelId = [];
                moveItemsSvlRecID =[];
                moveflag = false;
            }, 500);
        }
        else {
            if (this.id == "chl_manager_list_type1") {
                ClearSelectedItems(1);
                DBG_INFO('getKeyRepeatMode::::: ' + objToString(hiWebOsFrame.getKeyRepeatMode()));
                if(0) {  //hiWebOsFrame.getKeyRepeatMode()
                    repeatMum++;
                    DBG_INFO('repeatMum::::: '+repeatMum);
                    if(repeatMum == 1){
                        DBG_INFO('repeatMum::::: ');
                        for(var i = 0;i<oprData.visChannels.length;i++){
                            if(i != this.SelectedIndex ){
                                if(UnselectedType1Img){
                                    oprData.visChannels[i].img = true;
                                }else{
                                    oprData.visChannels[i].img = false;
                                }
//                                oprData.visChannels[i].img  = !oprData.visChannels[i].img;
                            }
                        }
                        UnselectedType1Img = !UnselectedType1Img;
                    }
                }else{
                    DBG_INFO('__________no repeat');
                    visSelIndex = this.SelectedIndex;
                    oprData.visChannels[pageSize * visPgIndex + visSelIndex].img = !oprData.visChannels[pageSize * visPgIndex + visSelIndex].img;
              //      keyboard.send_key_to_dfb(guijs.SYSCMD_ARROW_DOWN);   //选中后焦点下移虚拟发一次向下按键
                }
            }
            else {
                ClearSelectedItems(0);
                DBG_INFO('getKeyRepeatMode::::: ' + objToString(hiWebOsFrame.getKeyRepeatMode()));
                if(0) {  //hiWebOsFrame.getKeyRepeatMode()
                    repeatMum++;
                    if(repeatMum == 1){
                        DBG_INFO('repeatMum::::: ');
                        for(var i = 0;i<oprData.hidChannels.length;i++){
                            if(i != this.SelectedIndex ){
                                if(UnselectedDeleteImg){
                                    oprData.hidChannels[i].img = true;
                                }else{
                                    oprData.hidChannels[i].img = false;
                                }
//                                oprData.hidChannels[i].img  = !oprData.hidChannels[i].img;
                            }
                        }
                        UnselectedDeleteImg = !UnselectedDeleteImg;
                    }
                }else{
                    DBG_INFO('__________no repeat');
                    hidSelIndex = this.SelectedIndex;
                    oprData.hidChannels[pageSize * hidPgIndex + hidSelIndex].img = !oprData.hidChannels[pageSize * hidPgIndex + hidSelIndex].img;
//                    keyboard.send_key_to_dfb(guijs.SYSCMD_ARROW_DOWN);
                }
            }
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
        }

    }
    self.selectAllChannels = function(){
        debugPrint("selectAllChannels");
        if (this.id == "chl_manager_list_type1") {
            ClearSelectedItems(1);
            for(var i = 0;i<oprData.visChannels.length;i++){
                    if(UnselectedType1Img){
                        oprData.visChannels[i].img = true;
                    }else{
                        oprData.visChannels[i].img = false;
                    }
//           oprData.visChannels[i].img  = !oprData.visChannels[i].img;
            }
            UnselectedType1Img = !UnselectedType1Img;
        }else{
            ClearSelectedItems(0);
            for(var i = 0;i<oprData.hidChannels.length;i++){
                    if(UnselectedDeleteImg){
                        oprData.hidChannels[i].img = true;
                    }else{
                        oprData.hidChannels[i].img = false;
                    }
//          oprData.hidChannels[i].img  = !oprData.hidChannels[i].img;
            }
            UnselectedDeleteImg = !UnselectedDeleteImg;
        }
        hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
    }
    self.stopRepeatBgSetSelected = function() {
        debugPrint("____repeatMum___"+repeatMum);
        repeatMum = 0;
    }
    function getSelectedItems(flag) {

        //0: type, 1: delete
        var items = [];
        if (flag == 0) {
            items = oprData.visChannels.filter(function (v) {
                return v.img == true;
            });
        }
        else {
            items = oprData.hidChannels.filter(function (v) {
                return v.img == true;
            });
        }
        return items;
    }
    self.ChNameLoseMarqueen = function(){
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId+" marquee").html();
        if(!!txt){
            $("#"+currId).html(txt);
        }
    }
    self.ChNameAddMarqueen= function(){
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[2].id;
        var txt = $("#"+currId).html();
        if(txt.length > 20){
            $("#"+currId).html('<marquee>'+txt +'</marquee>');
        }
    }
    function ClearSelectedItems(flag) {
        //0: type, 1: delete
        if (flag == 0) {
            for(var i=0;i<oprData.visChannels.length;i++){
                if(oprData.visChannels[i].img==true)
                {
                    oprData.visChannels[i].img=false;
                }
            }
            UnselectedType1Img = true;
        }
        else {
                for(var i=0;i<oprData.hidChannels.length;i++){
                    if(oprData.hidChannels[i].img==true)
                    {
                        oprData.hidChannels[i].img=false;
                    }
                }
            UnselectedDeleteImg = true;
        }
    }
    self.setDeleteChannel = function (pageData) {

        if (oprData.list.name == "SKY") return;

        /* 移动模式下不响应此按键  */
        if (moveflag)  return;

        /* 无选择中频道不响应此按键  */
        var items = getSelectedItems(0);
        if (items.length == 0) return;
        hiWebOsFrame.startLoading();
        var delUid = [];//or number;
        var delAttr = [];
        var delName = [];

        items.forEach(function (v) {
//            v.attr &= 523775 //not use   PC调试
            v.img = false;
            delUid.push(v.uid);
            delAttr.push(v.attr);
            delName.push(v.name);
        });
        clearTimeout(chnlDeleteTimer);
        chnlDeleteTimer = setTimeout(function() {
//        DBG_INFO('delUid::::::' + objToString(delUid) + this.selectedIndex);
            if (tv) {
                try{
                    model.servicelist.RemoveChannel(oprData.list.uid, 1, delUid);
                    schedule.updateSchedueAftRemove(oprData.list.uid, delUid);
                }catch (ex){
                    DBG_ERROR("Delete func error ,begin read channel list refresh UI"+ex.message);
                    getChannelsByListId(oprData.list, refreshWhenDel);
                }
            }
            else {
                setChannelsAttrByUid(oprData.list.uid, delUid, delAttr);
            }
            getChannelsByListId(oprData.list, refreshWhenDel);
        }, 500);
    }
    self.cancelDeleteChannel = function (uids, attrs) {
        hiWebOsFrame.startLoading();
        clearTimeout(chnlCancelTimer);
        chnlCancelTimer = setTimeout(function(){
            if (tv) {
                try{
                    model.servicelist.RemoveChannel(oprData.list.uid, 0, uids);
                }catch (ex){
                    DBG_ERROR("Cancel Delete func error, begin read channel list refresh UI"+ex.message);
                    getChannelsByListId(oprData.list, refreshWhenCancelDel);
                }
            }
            else {
                setChannelsAttrByUid(oprData.list.uid, uids, attrs);
            }

            getChannelsByListId(oprData.list, refreshWhenCancelDel);
        },500);
    }
    self.setRestoreChannel = function () {

        var items = getSelectedItems(1);
        if (items.length == 0) return;

        var restoreUid = [];//or number
        var restoreAttr = [];
        items.forEach(function (v) {

            v.img = false;
//            v.attr |= (1 << 9);     //PC调试
            restoreUid.push(v.uid);
            restoreAttr.push(v.attr);

        });
//        DBG_INFO('restoreUid::::::' + objToString(restoreUid));
        channelmanagerbg.cancelDeleteChannel(restoreUid, restoreAttr);
    }
    self.setMovePostion = function () {
        /* SKY 频道列表不支持移动  */
        if (oprData.list.name == "SKY") return;
        if(oprData.ListRights == 1) return;  // LCN列表不支持move功能
        /* 无选择中频道不响应此按键  */
        moveItems = getSelectedItems(0);
        if (moveItems.length == 0) {
            moveItems = [];
            return;
        }
        DBG_INFO('moveItems::::::' + objToString(moveItems));
        oprData.visChannels = splitChannels(channelsBakup).vis;
        hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
        moveflag = true;
        $("#chl_manager_list_type1").removeClass("chl_manager_list_content");
        $("#chl_manager_list_type1").addClass("chl_manager_list_style1");
    }

    self.openRenamePage = function (pageData) {
        /* 移动模式下不响应此按键  */
        if (moveflag)  return;

        var items = getSelectedItems(0);
        /* 无选中频道不响应此按键  */
        if (items.length == 0) return;

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
        if(hiWebOsFrame.getCurrentArea() == 'EM'||hiWebOsFrame.getCurrentArea() == 'COL'){
            return;
        }
        hiWebOsFrame.startLoading();
        hiWebOsFrame.createPage("channel_manager_fliter", null, this.page, null, function (a) {
            hiWebOsFrame.channel_manager_fliter = a;
            a.operateData.typeUidLeft = oprData.list;
            a.open();
            a.hiFocus();
        })
    }

    self.resetOprtDataAftRename = function (items) {
        items.forEach(function (v) {
            for (var i = 0; i < oprData.channels.length; i++) {
                if (v.number == oprData.channels[i].number) {
                    oprData.channels[i].name = v.name;
                    break;
                }
            }
        });
    }
    function splitChannels(chnls) {
        var ret = {
            vis: [],
            hid: []
        }
        for (var i = 0; i < chnls.length; i++) {
            if (!chnls[i].skip) {
                ret.vis.push(chnls[i]);
            }
            else {
                ret.hid.push(chnls[i]);
            }
        }
        return ret;
    }

    self.setFilterChannels = function (chnls) {
        oprData.channels = channelsBakup;
        var ret_old=splitChannels(channelsBakup);
        var ret = splitChannels(chnls);
        oprData.visChannels = ret.vis;
        oprData.hidChannels = ret_old.hid;  //使用原数据，避免过滤后右侧deleted列表数据也进行过滤了
        setIndexAndRewrite(REWRITETYPE.FILTER);
    }
   self.AddButtonClass =function(){
        if(oprData.ListRights == 1){
            $("#chl_manager_bg_buttonOk").attr("src","img/common/ok.png");
            $("#chl_manager_bg_button1").attr("src","img/common/red.png");
            //$("#chl_manager_bg_button2").attr("src","img/common/brown.png");
            $("#chl_manager_bg_button3").attr("src","img/common/yellow.png");
            $("#chl_manager_bg_button4").attr("src","img/common/blue.png");
            $("#chl_manager_bg_button2").css("display","none");
            $("#chl_manager_bg_button_txt2").css("display","none");
            //$("#chl_manager_bg_button4").css("display","block");
            //$("#chl_manager_bg_button_txt4").css("display","block");
        }else{
            $("#chl_manager_bg_buttonOk").attr("src","img/common/ok.png");
            $("#chl_manager_bg_button1").attr("src","img/common/red.png");
            $("#chl_manager_bg_button2").attr("src","img/common/green.png");
            $("#chl_manager_bg_button3").attr("src","img/common/yellow.png");
            $("#chl_manager_bg_button4").attr("src","img/common/blue.png");
            $("#chl_manager_bg_button2").css("display","block");
            $("#chl_manager_bg_button_txt2").css("display","block");
            //$("#chl_manager_bg_button4").css("display","block");
            //$("#chl_manager_bg_button_txt4").css("display","block");
        }
    }
    self.removeButtonClass=function(){
        $("#chl_manager_bg_buttonOk").attr("src","img/common/ok.png");
        $("#chl_manager_bg_button1").attr("src","img/common/red.png");
        //$("#chl_manager_bg_button2").attr("src","img/common/brown.png");
        $("#chl_manager_bg_button3").attr("src","img/common/yellow.png");
        $("#chl_manager_bg_button4").attr("src","img/common/brown.png");
        $("#chl_manager_bg_button2").css("display","none");
        $("#chl_manager_bg_button_txt2").css("display","none");
        //$("#chl_manager_bg_button4").css("display","none");
        //$("#chl_manager_bg_button_txt4").css("display","none");
    }
    self.getBackUpChannels = function () {

        return $.extend([], channelsBakup);
    }
    self.setToListLeftAftRename = function () {
        debugPrint('setToListLeftAftRename::::::::::::::::::::::');
        getChannelsByListId(oprData.list, refreshWhenRename);
    }

    self.setSelectedIndex = function (comp) {
        comp.setSelectedIndex(0);
    }

    function setScrollBar(flag) {

        if (0 == flag) {
            var top = visPgIndex * visScrlHeight;
            $("#chl_manager_list_type_scroll").css("height", visScrlHeight + "px");
            $("#chl_manager_list_type_scroll").css("margin-top", top + "px");
        }
        else {
            var top = hidPgIndex * hidScrHeight;
            $("#chl_manager_list_delete_scroll").css("height", hidScrHeight + "px");
            $("#chl_manager_list_delete_scroll").css("margin-top", top + "px");
        }
//        $("#chl_manager_bg_button_txtOk").css("display","none");
        $("#chl_manager_bg_buttonOk").css("display","none");
        if(hiWebOsFrame.getCurrentArea() == 'EM' || hiWebOsFrame.getCurrentArea() == 'COL'){
            $("#chl_manager_bg_button_txt4").css("display","none");
            $("#chl_manager_bg_button4").css("display","none");
        }

        $("#chl_manager_bg_button_txt3").css("display","none");
        $("#chl_manager_bg_button3").css("display","none");

        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $("#chl_manager_list_type_scroll").css({"float":"right","margin-right": "15px"});
	        $("#chl_manager_list_delete_scroll").css({"float": "right","margin-right": "15px"});
            $("#chl_manager_bg_button_txtOk").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_bg_button_txt1").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_bg_button_txt2").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_bg_button_txt3").css({"float":"right","margin-right":"80px"});
            $("#chl_manager_bg_button_txt4").css({"float":"right","margin-right":"102px"});
            $("#chl_manager_bg_buttonOk").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_bg_button1").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_bg_button2").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_bg_button3").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_bg_button4").css({"float":"right","margin-right":"20px"});
            $("#chl_manager_list_type1").css({"float": "left","margin-left":"32px"});
            $("#chl_manager_list_delete").css("margin-left", "32px");
	        $("#chl_manager_chlist_1").css("left", "104px");
            $("#chl_manager_chlist_2").css("left", "1030px");
        }
        else {
            $("#chl_manager_list_type_scroll").css({"float":"left","margin-left": "15px"});
            $("#chl_manager_list_delete_scroll").css({"float": "left","margin-left": "15px"});
            $("#chl_manager_bg_button_txtOk").css({"float":"left","margin-left":"80px"});
            $("#chl_manager_bg_button_txt1").css({"float":"left","margin-left":"80px"});
            $("#chl_manager_bg_button_txt2").css({"float":"left","margin-left":"80px"});
            $("#chl_manager_bg_button_txt3").css({"float":"left","margin-left":"80px"});
            $("#chl_manager_bg_button_txt4").css({"float":"left","margin-left":"102px"});
            $("#chl_manager_bg_buttonOk").css({"float":"left","margin-left":"20px"});
            $("#chl_manager_bg_button1").css({"float":"left","margin-left":"20px"});
            $("#chl_manager_bg_button2").css({"float":"left","margin-left":"20px"});
            $("#chl_manager_bg_button3").css({"float":"left","margin-left":"20px"});
            $("#chl_manager_bg_button4").css({"float":"left","margin-left":"20px"});
	        $("#chl_manager_list_type1").css({"float": "right","margin-right": "32px"});
            $("#chl_manager_list_delete").css("margin-right", "32px");
            $("#chl_manager_chlist_1").css("left", "1030px");
            $("#chl_manager_chlist_2").css("left", "104px");
        }
    }
    self.ChnlManagerHandlerProcess = function(keyCode,type){
        debugPrint("______ChnlManagerHandlerProcess____"+keyCode);
        switch(keyCode) {
            case VK_0:
            case VK_1:
            case VK_2:
            case VK_3:
            case VK_4:
            case VK_5:
            case VK_6:
            case VK_7:
            case VK_8:
            case VK_9:
                inputFrom = type;
                filterNum = (keyCode - VK_0);
                if(moveflag == 1) {
                    $("#chl_manager_bg_chlist_input_move").val(parseInt(filterNum,10));
                }else{
                    $("#chl_manager_bg_chlist_input").val(parseInt(filterNum,10));
                }
               break;
            default :
                break;
        }
        $("#chl_manager_bg_mask").css("display","block");
        if(moveflag == 1){
            $("#chl_manager_bg_input_content_move").css("display","block");
            hiWebOsFrame.channel_manager_bg.hiFocus('chl_manager_bg_chlist_input_move');
        }else{
            $("#chl_manager_bg_input_content").css("display","block");
            hiWebOsFrame.channel_manager_bg.hiFocus('chl_manager_bg_chlist_input');
        }
      }
    self.chnlNumInputOnChange = function(){
        debugPrint("chnlNumInputOnChange:");
        if(moveflag == 1){
            var inputValue = $("#chl_manager_bg_chlist_input_move").val();
            if(inputValue.length > 4)
            {
                inputValue = inputValue.substr(1);
            }
            if(!!inputValue){
                $("#chl_manager_bg_chlist_input_move").val(parseInt(inputValue,10));
            }
        }else{
            var inputValue = $("#chl_manager_bg_chlist_input").val();
            if(inputValue.length > 4)
            {
                inputValue = inputValue.substr(1);
            }
            if(!!inputValue){
                $("#chl_manager_bg_chlist_input").val(parseInt(inputValue,10));
            }
        }

    }
  self.changeChannelFocus =function(){
      $("#chl_manager_bg_mask").css("display","none");
      if(moveflag ==1){
          filterNum = $("#chl_manager_bg_chlist_input_move").val();
          $("#chl_manager_bg_input_content_move").css("display","none");
      }else{
          filterNum = $("#chl_manager_bg_chlist_input").val();
          $("#chl_manager_bg_input_content").css("display","none");
      }
      filterIndex = 0;
      debugPrint("_____filterNum_____"+filterNum);
      debugPrint("_____filterIndex_____"+filterIndex);
        if(inputFrom == 0){     //左侧列表
            for(var i= 0; i < oprData.visChannels.length;i++ ){
                filterIndex++;
                if(oprData.visChannels[i].number >= parseInt(filterNum,10)){
                    oprData.filterchannels = oprData.visChannels[i];
                    break;
                }
            }
            channelmanagerbg.pageData.chl_manager_list_type1.SelectedIndex = filterIndex - 1;
            visPgIndex =  Math.floor((filterIndex - 1) / pageSize);
            visSelIndex = (filterIndex - 1) % pageSize;
            hiWebOsFrame.channel_manager_bg.hiFocus("chl_manager_list_type1");
        }else{    //右侧列表
            for(var i= 0; i < oprData.hidChannels.length;i++ ){
                filterIndex++;
                if(oprData.hidChannels[i].number >= parseInt(filterNum,10)){
                    oprData.filterchannels = oprData.hidChannels[i];
                    break;
                }
            }
            channelmanagerbg.pageData.chl_manager_list_delete.SelectedIndex = filterIndex - 1;
            hidPgIndex =  Math.floor((filterIndex - 1) / pageSize);
            hidSelIndex = (filterIndex - 1) % pageSize;
            hiWebOsFrame.channel_manager_bg.hiFocus("chl_manager_list_delete");
        }
      hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
      setScrollBar(0);
      setScrollBar(1);
  }
}
var channelmanagerbg = new ChannelManagerBg();

