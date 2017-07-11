function get_epg_fvp_detail_page_pageData (opts) {
    var caedata = {
        span: [
            "epg_fvp_detial_channel_name", "epg_fvp_detail_program_name",
            "epg_fvp_detail_program_time", "epg_fvp_detail_content"
        ],
        img: ["epg_fvp_detail_image"]
    };

    opts.CaE = generateCaE(caedata);

    opts.CaE[0].classes = {normal: "epgFVPChannel"};
    opts.CaE[1].classes =
    opts.CaE[2].classes = {normal: "epgFVPProgram"};
    opts.CaE[3].classes = {normal: "epgFVPDetail", focus: "epgFVPDetail"};

    opts.CaE[2].enableHtml = true;

    opts.CaE[3].handler = {
        befDownHandler: epgFVPDetail.keyDownOnDetailBtn,
        befUpHandler: epgFVPDetail.keyUpOnDetailBtn
    };

    return epgFVPDetail.pageData;
}

function epgFVPDetailPage(){
    var self = this;
    self.id = "epg_fvp_detail_page";

    var ratio = 0.1, panelHeight = 740, contentHeight = 0, topHeight = 0,
        scrollTop = 0, scrollHeight = 0;
    var defaultImage = "img/epg/logo_freevirw_epg.png";
    var oprtData = {
        channelName: "",
        programTitle: "",
        programTime: "",
        initDetail: false,
        contentImage: defaultImage
    };

    /**
     * [onOpen set scrollbar after page was openned]
     * @return {[type]} []
     */
    self.onOpen = function(){
        // get content height. (for scroll bar)
        contentHeight = $("#epg_fvp_detail_content").height();
        // init scrollbar position
        setScrollbarPostion(KeyDir.NONE);
    }

    /**
     * [onFocus ]
     * @return {[type]} []
     */
    self.onFocus = function(){
    }

    /**
     * [onClose clear variables after page was closed]
     * @return {[type]} []
     */
    self.onClose = function() {
        oprtData.channelName = "";
        oprtData.programTitle = "";
        oprtData.programTime = "";
        oprtData.initDetail = false;
        oprtData.contentImage = defaultImage;
        topHeight = contentHeight = topHeight = scrollTop = scrollHeight = 0;
        $("#epg_fvp_detail_scroll").removeAttr("style");
        $("#epg_fvp_detail_content").removeAttr("style");
    }

    /**
     * [keyDownOnDetailBtn adjust scrollbar position after key down/up]
     * @return {[type]} [description]
     */
    self.keyDownOnDetailBtn = function() {
        setScrollbarPostion(KeyDir.DOWN);
    }
    self.keyUpOnDetailBtn = function() {
        setScrollbarPostion(KeyDir.UP);
    }

    /**
     * [setScrollbarPostion compute scrollbar position]
     * @param {[type]} dir [key direction]
     */
    function setScrollbarPostion(dir) {
        if(contentHeight <= panelHeight) return;
        if (KeyDir.DOWN == dir) {
            if(topHeight + panelHeight >= contentHeight) return;
            topHeight += ratio * panelHeight;
        }
        else if (KeyDir.UP == dir) {
            if(0 == topHeight) return;
            topHeight -= ratio * panelHeight;
        }
        else {
            topHeight = 0;
            scrollTop = 0;
            scrollHeight = Math.round(panelHeight * panelHeight / contentHeight);
            $("#epg_fvp_detail_scroll").css("height", scrollHeight + "px");
        }

        topHeight = Math.max(0, Math.min(contentHeight - panelHeight, topHeight));

        // scrollTop / (panelHeight - scrollHeight) = topHeight / (contentHeight - panelHeight)
        scrollTop = Math.round((panelHeight - scrollHeight) * topHeight / (contentHeight - panelHeight));
        $("#epg_fvp_detail_scroll").css("margin-top", scrollTop + "px");
        $("#epg_fvp_detail_content").css("margin-top", (-topHeight) + "px");
    }

    /**
     * [initOperateData init operate data]
     * @param  {[type]} prgrm [from other page]
     * @return {[type]}       [true]
     */
    self.initOperateData = function(chnl, prgrm) {
        oprtData.channelName = chnl.name;
        oprtData.programTitle = prgrm.title;
        oprtData.programTime = getProgramLocalTime(prgrm.startTime, prgrm.endTime, 4);
        oprtData.contentImage = prgrm.contentImage ? prgrm.contentImage : defaultImage;
        oprtData.initDetail = true;
        if (tv && "N/A" != prgrm.eventId && !prgrm.eventId) {
            model.fvpepg.setFEPGDetail(prgrm.eventId, getFileName(prgrm.eventId));
        }
        else {
            onFEPGDetailChanged([prgrm.detail + prgrm.detail +prgrm.detail +prgrm.detail]);
        }
        return true;
    }

    function onFEPGDetailChanged(detail){
        if(!oprtData.initDetail) return;
        oprtData.programDetail = detail[0];
        hiWebOsFrame[self.id].rewriteDataOnly();
    }

    function getFileName(eventId) {
        try {
            var arr = eventId.split(/\/|\./g).reverse();
            return arr[3] + arr[2] + arr[1] + arr[0];
        }
        catch (ex) {
            DBG_ERROR(ex.message);
            return "";
        }
    }
    /**
     * [rewritePageData translate operate data to page data]
     * @param  {[type]} pageData [reference]
     * @return {[type]}          []
     */
    function rewritePageData(pageData){
        pageData.epg_fvp_detail_image.Data = oprtData.contentImage;
        pageData.epg_fvp_detial_channel_name.Data = oprtData.channelName;
        pageData.epg_fvp_detail_program_name.Data = oprtData.programTitle;
        pageData.epg_fvp_detail_program_time.Data = oprtData.programTime;

        pageData.epg_fvp_detail_content.Data = oprtData.programDetail;
        // pageData.epg_detail_title.Data = oprtData.title;
        // pageData.epg_detail_content.Data = oprtData.detail;
        // pageData.epg_detail_guidance.Data = oprtData.guidance;

        // pageData.epg_detail_content_tip.disable =
        // pageData.epg_detail_guidance_tip.disable =
        // pageData.epg_detail_guidance.disable = ("" == oprtData.guidance);
    }

    // page data [reference]
    self.pageData = {
        epg_fvp_detail_image: {Data: defaultImage},
        epg_fvp_detial_channel_name: {Data: ""},
        epg_fvp_detail_program_name: {Data: ""},
        epg_fvp_detail_program_time: {Data: ""},
        epg_fvp_detail_content: {Data: ""},
        // epg_detail_title: {Data: ""},
        // epg_detail_content_tip: {Data: "Detail"},
        // epg_detail_content: {Data: ""},
        // epg_detail_guidance_tip: {Data: "Guidance"},
        // epg_detail_guidance: {Data: ""},
        // epg_detail_back: {Data: "Press BACK button to exit"},
        // langData: {
        //     "Guidance": [],
        //     "Press BACK button to exit": [],
        //     "No program": [],
        //     "No program information": []
        // },
        rewrite: rewritePageData,
        langData: {
            "No program": [],
            "No program information": []
        }
    }

    self.pageData.operateData = oprtData;

    if (tv && !model.fvpepg.onFEPGDetailChanged) {
        model.fvpepg.onFEPGDetailChanged = onFEPGDetailChanged;
    }
}

var epgFVPDetail = new epgFVPDetailPage();
