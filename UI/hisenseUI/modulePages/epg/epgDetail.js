function get_epg_detail_page_pageData (opts) {
    var caedata = {
        span: [
            "epg_detail_back", "epg_detail_title",
            "epg_detail_content_tip", "epg_detail_content",
            "epg_detail_guidance_tip", "epg_detail_guidance"
         ]
    };
    // generate "CaE" data
    opts.CaE = generateCaE(caedata);

    opts.CaE[0].handler = {
        befDownHandler: epgDetail.keyDownOnDetailBtn,
        befUpHandler: epgDetail.keyUpOnDetailBtn
        // befEscHandler: epgDetail.keyEscOnDetailBtn
    };

    // config "CaE" properties
    opts.CaE[2].classes =
    opts.CaE[4].classes = {normal: "epgDetailTip", disable: "epgDetailDisable"}
    opts.CaE[3].classes =
    opts.CaE[5].classes = {normal: "epgDetailContent", disable: "epgDetailDisable"}

    opts.CaE[3].strFilter =
    opts.CaE[5].strFilter = true;

    // all above can be written as JSON directly
    // e.g.
    /*
        {
            id: "epg_detail_back",
            CaEType: "span",
            handler:{
                befDownHandler: epgDetail.keyDownOnDetailBtn,
                befUpHandler: epgDetail.keyUpOnDetailBtn
            }
        }
     */
    return epgDetail.pageData;
}

function epgDetailPage(){
    var self = this;
    self.id = "epg_detail_page";

    var ratio = 0.1, panelHeight = 600, contentHeight = 0, topHeight = 0,
        scrollTop = 0, scrollHeight = 0;
    var oprtData = {
        title: "",
        detail: "",
        guidance: ""
    };

    /**
     * [onOpen set scrollbar after page was openned]
     * @return {[type]} []
     */
    self.onOpen = function(){
        // get content height. (for scroll bar)
        contentHeight = $(".epgContentPanel").height();
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
    self.onClose = function(){
        topHeight = 0;
        $("#epg_detail_scroll").removeAttr("style");
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
            $("#epg_detail_scroll").css("height", scrollHeight + "px");
        }

        topHeight = Math.max(0, Math.min(contentHeight - panelHeight, topHeight));

        // scrollTop / (panelHeight - scrollHeight) = topHeight / (contentHeight - panelHeight)
        scrollTop = Math.round((panelHeight - scrollHeight) * topHeight / (contentHeight - panelHeight));
        $("#epg_detail_scroll").css("margin-top", scrollTop + "px");
        $(".epgContentPanel").css("margin-top", (-topHeight) + "px");
    }

    /**
     * [initOperateData init operate data]
     * @param  {[type]} prgrm [from other page]
     * @return {[type]}       [true]
     */
    self.initOperateData = function(prgrm) {
        oprtData.title = prgrm.title;
        oprtData.detail = prgrm.detail;
        oprtData.guidance = prgrm.guidance ? prgrm.guidance : "";
        hiWebOsFrame[self.id].rewriteDataOnly();
        return true;
    }

    /**
     * [rewritePageData translate operate data to page data]
     * @param  {[type]} pageData [reference]
     * @return {[type]}          []
     */
    function rewritePageData(pageData){
        pageData.epg_detail_title.Data = oprtData.title;
        pageData.epg_detail_content.Data = getCurrentContentLanguage(oprtData.detail);
        pageData.epg_detail_guidance.Data = getCurrentContentLanguage(oprtData.guidance);

        pageData.epg_detail_content_tip.disable =
        pageData.epg_detail_guidance_tip.disable =
        pageData.epg_detail_guidance.disable = ("" == oprtData.guidance);
    }

    // page data [reference]
    self.pageData = {
        epg_detail_title: {Data: ""},
        epg_detail_content_tip: {Data: "Detail"},
        epg_detail_content: {Data: ""},
        epg_detail_guidance_tip: {Data: "Guidance"},
        epg_detail_guidance: {Data: ""},
        epg_detail_back: {Data: "Press BACK button to exit"},
        langData: {
            "Guidance": [],
            "Press BACK button to exit": [],
            "No program": [],
            "No program information": []
        },
        rewrite: rewritePageData
    }

    self.pageData.operateData = oprtData;

}

var epgDetail = new epgDetailPage();
