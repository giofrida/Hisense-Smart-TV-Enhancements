/**
 * Created on 14-9-28.
 */

function getchlmanagerPageData(opts) {
    opts.CaE = [
        {
            "id": "chlManagerPageTitle",
            "description": "标题",
            "CaEType": "span"
        },
        {
            id: 'chl_manager_list_type',
            CaEType: 'Ul',
            oriCaE: [
                {
                    id: 'chl_manager_list_type_item',
                    CaEType: 'span'
                }
            ],
            UlConfig: {
                UlDataItem: ['chl_manager_list_type_item']
            }
        },
        {
            id: 'chl_manager_list_display',
            CaEType: 'Ul',
            nav:{
              rightTo:  'chl_manager_list_edit'
            },
            handler:{
                befRightHandler:  channelmanagerpage.setNextSelectedIndex,
                befDownHandler: channelmanagerpage.befkeyDown,
                befUpHandler: channelmanagerpage.befkeyUp,
                befEnterHandler: channelmanagerpage.setDisplay,
                befEscHandler: channelmanagerpage.escManagerPage
            },
            oriCaE: [
                {
                    id: 'chl_manager_list_display_img',
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/channellist/mark.png",
                        "closeImg":"img/channellist/nomark.png"
                    }
                },
                {
                    id: 'chl_manager_list_display_item',
                    CaEType: 'span'
                }
            ],
            UlConfig: {
                UlDataItem: ['chl_manager_list_display_img', 'chl_manager_list_display_item']
            }
        },
        {
            id: 'chl_manager_list_edit',
            CaEType: 'Ul',
            nav:{
                leftTo:  'chl_manager_list_display'
            },
            handler:{
                befEnterHandler:channelmanagerpage.openEditPage,
                befLeftHandler:channelmanagerpage.setNextSelectedIndex,
                befDownHandler: channelmanagerpage.befkeyDown,
                befUpHandler: channelmanagerpage.befkeyUp,
                aftDownHandler: channelmanagerpage.aftkeyDown,
                aftUpHandler: channelmanagerpage.aftkeyUp,
                befEscHandler: channelmanagerpage.escManagerPage

            },
            oriCaE: [
                {
                    id: 'chl_manager_list_edit_item',
                    CaEType: 'span'
                }
            ],
            UlConfig: {
                UlDataItem: ['chl_manager_list_edit_item']
            }
        }
    ]

    return channelmanagerpage.pageData;
}

function ChannelManagerPage() {
    var self = this;
//    var itemCount = 0;
    var oprData = {
        channelList: []
    };

    self.pageData = {
        chlManagerPageTitle: {"Data": "Channel Edit"},
        chl_manager_list_type: {Data: []},
        chl_manager_list_display: {Data: [], SelectedIndex: 0,DataSelectedIndex:0},
        chl_manager_list_edit: {Data: [], SelectedIndex: 0},
        langData: {
            "Management": [],
            "Channel Edit":[],
            "Display":[],
            "Edit": [],
            "Antenna:":[],
            "Cable:":[],
            "No channel information, please scan channels":[]
        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprData;

    function rewritePageData(pageData) {
        if (0 == oprData.channelList.length) return;
        pageData.chl_manager_list_type.Data = [];
        pageData.chl_manager_list_display.Data = [];
        pageData.chl_manager_list_edit.Data = [];
//        pageData.chl_manager_list_type.disableItem = [];
//        pageData.chl_manager_list_display.disableItem = [];
//        pageData.chl_manager_list_edit.disableItem = [];

        for (var i = 0; i < oprData.channelList.length; i++) {
            var item = oprData.channelList[i];
            pageData.chl_manager_list_type.Data.push({
                chl_manager_list_type_item: {
                    Data: item.name+":"
                }
            });
            pageData.chl_manager_list_display.Data.push({
                chl_manager_list_display_img: {
                    Data: item.display
                },
                chl_manager_list_display_item: {
                    Data: 'Display'
                }
            });
            pageData.chl_manager_list_edit.Data.push({
                chl_manager_list_edit_item: {
                    Data: 'Edit'
                }
            });
//            if ('' == item.uid) {
//                pageData.chl_manager_list_type.disableItem.push(i);
//                pageData.chl_manager_list_display.disableItem.push(i);
//                pageData.chl_manager_list_edit.disableItem.push(i);
//            }
        }

//        pageData.chl_manager_list_display.SelectedIndex = 0;

    }
    function eventRowsToChannelList(rows) {

        //[name, id, attr, active, rights, containservice]
//        var pages = Math.ceil(rows.length / 7);
        var convertList = [];
        for (var i = 0; i < rows.length ; i++) {      //|| i < pages * 7
//            if (i >= rows.length) {
//                convertList.push({
//                    name: '',
//                    uid: '',
//                    attr: '',
//                    display: '',
//                    rights: ''
//                });
//                continue;
//            }
            var row = rows[i];
                convertList.push({
                    name:row[0],
                    uid: row[1],
                    satId: row[2],
                    display: 1 == row[3],
                    rights: row[4]
                });
        }
        return convertList;
    }

    function refreshCurrentPage(event) {

        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {

            oprData.channelList = eventRowsToChannelList(event.rows);

            DBG_INFO(objToString(oprData.channelList));

            hiWebOsFrame.channel_manager_page.rewrite();
            hiWebOsFrame.channel_manager_page.open();
            hiWebOsFrame.channel_manager_page.hiFocus();
            channelmanagerpage.setSelectedIndex(hiWebOsFrame.channel_manager_page.getCaE("chl_manager_list_display"));
            topItem = 0;
            if (oprData.channelList.length > 7) {
            setScrollbarStyle("chl_manager_content","chl_manager_container","chl_manager_scroll", 74);
            }
            //if (oprData.channelList.length > 7) {
            //    addScrollbar();
            //}
            hiWebOsFrame.endLoading();
        }

    }

    self.onOpenChlManager = function () {
        //read data
        //getAllChannelList(refreshCurrentPage);
    }

    var topItem = 0;
    self.befkeyDown = function() {

//        if(0 == (this.SelectedIndex + 1) % 7){
//            debugPrint('______keydown',this.SelectedIndex);
//            managerScroll.afterKeyDownHandler();
//        }
        var marquee = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys" +this.SelectedIndex+ " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys" +this.SelectedIndex+ " marquee").html();
            var marquee = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex ).html(htmlText);
        }
        //if (this.SelectedIndex > 5 && this.SelectedIndex < this.data.Data.length - 1) {
        //    managerScroll.afterKeyDownHandler();
        //    topItem++;
        //}
        if(this.SelectedIndex != this.data.Data.length - 1 &&
            this.SelectedIndex - topItem == 6) {
            topItem++;
            moveScrollbar(SCROLLDIR.DOWN,"chl_manager_scroll", "chl_manager_content","chl_manager_container", 98, 74);
        }
    }

    self.befkeyUp = function() {
//        if(0 == this.SelectedIndex % 7){
//
//            managerScroll.afterKeyUpHandler();
//        }
       //  DelMarquee
        var marquee = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys" +this.SelectedIndex+ " marquee");
        if (marquee.length > 0) {
            var htmlText = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys" +this.SelectedIndex+ " marquee").html();
            var marquee = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex ).html(htmlText);
        }
        //if(this.SelectedIndex > 0 && this.SelectedIndex == topItem) {
        //    managerScroll.afterKeyUpHandler();
        //    topItem--;
        //}
        if(this.SelectedIndex == topItem && topItem > 0) {
            topItem--;
            moveScrollbar(SCROLLDIR.UP,"chl_manager_scroll", "chl_manager_content","chl_manager_container", 98, 74);
        }
    }
    self.aftkeyDown = function() {
        //AddMarquee
        var htmlText = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex).html();
        if (htmlText.length >10) {
            $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
    }

    self.aftkeyUp = function() {
        var htmlText = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex).html();
        if (htmlText.length >10) {
            $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
    }
    var managerScroll;
    function addScrollbar() {
        //TODO add scroll, temp
        // if it merged to SDK, abandoned this
        if(!$('#chl_manager_container').attr('data-scroll')) {
            managerScroll = new Scrollbar({
                height: 686,
                hideHeight: 74,
                width: 1005,
                scrollAxis: 'vertical',
                sliderMode: 'step',
                step: 98,
                scrollMode: 'active',
                placeholder: false,
//                flipMode: 'page',
//                animationMode: 'ease-in-out',
                class: 'scrollbar_class_detail'
            }, 'chl_manager_content');
            managerScroll.createScrollbar();
        }
        else {
            managerScroll.refreshScrollbar();
        }
        $('#chl_manager_content').attr('data-scroll', 'true');
    }

    self.onDestroyPage = function(){
        hiWebOsFrame.channel_manager_page  = null;
        oprData = {
            channelList: []
        };
    }

    self.setNextSelectedIndex = function(){
        var componment = null;
        if('chl_manager_list_edit' == this.id){
            componment = this.page.getCaE('chl_manager_list_display');
            componment.setSelectedIndex(this.SelectedIndex);
            var marquee = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys" +this.SelectedIndex+ " marquee");
            if (marquee.length > 0) {
                var htmlText = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys" +this.SelectedIndex+ " marquee").html();
                var marquee = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex ).html(htmlText);
            }
        }
        else if('chl_manager_list_display' == this.id){
            componment = this.page.getCaE('chl_manager_list_edit')
            componment.setSelectedIndex(this.SelectedIndex);
            var htmlText = $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex).html();
            if (htmlText.length >10) {
                $("#chl_manager_list_edit_chl_manager_list_edit_item_sys"+this.SelectedIndex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
            }
        }

    }

    self.getCurrentListType = function(){
      return oprData.channelList[oprData.SelectedIndex].name;
    }

    self.getCurrentSelecedList = function () {
        return $.extend({}, oprData.channelList[oprData.SelectedIndex]);
    }

    self.setDisplay = function () {

//        try {
//            if(oprData.channelList[this.SelectedIndex].uid == livetvmain.getCurrentChannelInfo().listUid) {
//                showMsg("", "Please do not hide current channel list.");
//                return;
//            }
//        }
//        catch (ex){
//            DBG_ERROR(ex.message);
//        }
        oprData.channelList[this.SelectedIndex].display = !oprData.channelList[this.SelectedIndex].display;
        debugPrint('____this.SelectedIndex__display: ' +this.SelectedIndex+ oprData.channelList[this.SelectedIndex].display);
        var displayFlag=(oprData.channelList[this.SelectedIndex].display==true?1:0);
        //save
        if(tv)
        {
         model.servicelist.setFavouriteDisplay(oprData.channelList[this.SelectedIndex].uid,displayFlag,oprData.channelList[this.SelectedIndex].satId);
        //  m_getallchannellist_iterator.writerows(oprData.channelList[this.SelectedIndex].name,oprData.channelList[this.SelectedIndex].uid,oprData.channelList[this.SelectedIndex].display);
//            getAllChannelList(refreshCurrentPage);
        }
        hiWebOsFrame.channel_manager_page.rewriteDataOnly();

        //chl_data_refreshChannelTypeList(oprData.channelList[this.SelectedIndex].uid,displayFlag);
        livetvchlist.updateListAttribute(oprData.channelList[this.SelectedIndex].uid, oprData.channelList[this.SelectedIndex].satId, ChannelList.DISPLAY, displayFlag);
    }


    self.openEditPage = function (pageData) {
        if(oprData.channelList.length<=4)
        {
            debugPrint("No channel information, please scan channels");
            showMsg("", "No channel information, please scan channels");
            return; //只有FAV列表则不进入下一页
        }
        this.page.close();
        oprData.SelectedIndex = this.SelectedIndex;
        debugPrint(channelmanagerpage.getCurrentListType());
        isFavPage= oprData.channelList[oprData.SelectedIndex].name;
        if(isFavPage=="FAV1"||isFavPage=="FAV2"||isFavPage=="FAV3"||isFavPage=="FAV4")
        {
            hiWebOsFrame.startLoading(10, "channeledit");
                hiWebOsFrame.createPage("channel_manager_fav_edit", null, null, null, function (b) {
                    hiWebOsFrame.channel_manager_fav_edit = b;
                    channelmanagerfav.onOpenChlManagerfavNew();
//                    b.open();
//                    b.hiFocus();
//                    channelmanagerfav.setRightSelectedIndex(hiWebOsFrame.channel_manager_fav_edit.getCaE("chl_manager_list_type2"));
                })
        }
       else{
            hiWebOsFrame.startLoading(10, "channeledit");
            hiWebOsFrame.createPage("channel_manager_bg", null, this.page, null, function (a) {
                hiWebOsFrame.channel_manager_bg = a;
                a.operateData.ListRights= oprData.channelList[oprData.SelectedIndex].rights;
                channelmanagerbg.onOpenChlManagerBgNew();
//                a.open();
//                a.hiFocus();
            })

        }

    }
    self.escManagerPage = function(){

        hiWebOsFrame.channel_manager_page.close();
        this.page.origin.hiFocus();

    }
    self.getLists = function(){
        return oprData.channelList;
    }
    self.setSelectedIndex = function (comp) {
        comp.setSelectedIndex(0);
    }

    self.openChannelManager = function(){
        getAllChannelList(refreshCurrentPage);
        if(hiWebOsFrame.getCurrentArea() == 'SA'){
            $("[name='contentPanel']").css("float", "left");
        }else{
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                $("[name='contentPanel']").css("float", "left");
            }
            else {
                $("[name='contentPanel']").css("float", "right");
            }
        }
    }
}


var channelmanagerpage = new ChannelManagerPage();

