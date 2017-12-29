function get_epg_fvp_detail_page_pageData (opts) {
    var caedata = {
        span: [
            "epg_fvp_detial_channel_name", "epg_fvp_detail_program_name",
            "epg_fvp_detail_program_time", "epg_fvp_detail_content",
            "epg_fvp_detail_guidance_title", "epg_fvp_detail_guidance",
            "epg_fvp_actors", "epg_fvp_keywords", "epg_fvp_crew", "epg_fvp_org",
            "epg_fvp_flag_Rating", "epg_fvp_flag_theme_text", "epg_fvp_detail_channel"
        ],
        img: [
            "epg_fvp_detail_program_book_flag", "epg_fvp_detail_image",
            "epg_fvp_flag_AD", "epg_fvp_flag_HD", "epg_fvp_flag_Subtitle",
            "epg_fvp_flag_Play", "epg_fvp_flag_theme"
        ]
    };

    opts.CaE = generateCaE(caedata);

    opts.CaE[0].classes = {normal: "epgFVPChannel"};
    opts.CaE[1].classes = opts.CaE[2].classes = {normal: "epgFVPProgram"};
    opts.CaE[3].classes = opts.CaE[4].classes = opts.CaE[5].classes =
        opts.CaE[6].classes = opts.CaE[7].classes =
            opts.CaE[8].classes = opts.CaE[9].classes = {
                normal: "normalFVPItem",
                focus: "normalFVPItem",
                disable: "disableFVPItem"
            };

    opts.CaE[caedata.span.length + 2].classes = opts.CaE[caedata.span.length + 3].classes =
        opts.CaE[caedata.span.length + 4].classes = opts.CaE[caedata.span.length + 5].classes =
            opts.CaE[caedata.span.length + 6].classes = {
                normal: "normalFVPFlag",
                focus: "normalFVPFlag",
                disable: "disableFVPFlag"
            }

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
        scrollTop = 0, scrollHeight = 0, programId = "";
    var CAST_LIST = {
        KEYWORD: 0,
        ACTOR: 1,
        CREW: 2,
        ORG: 3
    }
    var defaultImage = "img/epg/photo_epg_normal.png";
    var imgList = {
        AD_FLAG: "img/epg/ic_epg_detail_audio_track.png",
        HD_FLAG: "img/epg/ic_epg_detail_hd.png",
        SD_FLAG: "img/epg/ic_epg_detail_sd.png",
        SUB_T: "img/epg/ic_epg_detail_sabtitle_available.png",

        record: "img/epg/ic_epg_program_pvr.png",
        reminder: "img/epg/ic_epg_program_remind.png",
        comingSoon: "img/epg/ic_epg_detail_coming_soon.png",
        canPlay: "img/epg/ic_epg_detail_available.png",
        noImg: "img/common/transparent.png",
        PURPLE: "img/epg/theme_purple.png",
        GREEN: "img/epg/theme_green.png",
        PINK: "img/epg/theme_pink.png",

        PG: "img/epg/ic_epg_detail_parental_guidance.png",
        PG12: "img/epg/ic_epg_detail_pg_12+.png",
        PG15: "img/epg/ic_epg_detail_pg_15+.png",
        PG16: "img/epg/ic_epg_detail_pg_16+.png",
        PG18: "img/epg/ic_epg_detail_pg_18+.png",
        PGU: "img/epg/ic_epg_detail_pg_unrated.png"

    };
    var oprtData = {
        mainTitle: "",
        channelName: "",
        //programTitle: "", //VL2.0  //TT 
	secondaryTitle: "",
        programTime: "",
        bookFlag: imgList.noImg,
        playFlag: imgList.noImg,
        HDFlag: imgList.noImg,
        eventTheme: 0,
        ADFlag: imgList.noImg,
        SUBTFlag: imgList.noImg,
        rating: "",
        initDetail: false,
        contentImage: defaultImage,
        guidance: "",
        actors: "",
        crews: "",
        keywords: "",
        organization: "",
        ForwardEPG:null
    };
    var allFlagDisabled = false;
    /**
     * [onOpen set scrollbar after page was openned]
     * @return {[type]} []
     */
    self.onOpen = function(){
        // get content height. (for scroll bar)
        //VL2.0 contentHeight = $("#epg_fvp_detail_content").height();
	contentHeight = $(".epgFVPAllContent").height();
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
        oprtData.mainTitle = "";
        oprtData.channelName = "";
	oprtData.secondaryTitle = "";
        oprtData.programTitle = "";
        oprtData.programTime = "";
        oprtData.guidance = "";
        oprtData.initDetail = false;
        oprtData.actors = "";
        oprtData.keywords = "";
        oprtData.crews = "";
        oprtData.organization = "";
        oprtData.bookFlag = imgList.noImg;
        oprtData.playFlag = imgList.noImg;
        oprtData.HDFlag = imgList.noImg;
        oprtData.eventTheme = 0;
        oprtData.ADFlag = imgList.noImg;
        oprtData.SUBTFlag = imgList.noImg;
        oprtData.rating = "";
        oprtData.ForwardEPG = null;
        oprtData.contentImage = defaultImage;
        $("#epg_fvp_detail_image").attr("src", defaultImage);
        oprtData.bookFlag = "img/common/transparent.png";
        programId = "";
        topHeight = contentHeight = topHeight = scrollTop = scrollHeight = 0;
        $("#epg_fvp_detail_scroll").removeAttr("style");
        $("#epg_fvp_detail_content").removeAttr("style");
	$(".epgFVPAllContent").removeAttr("style");
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
        $("#epgFVPAllContent").css("margin-top", (-topHeight) + "px");
       // $("#epg_fvp_detail_content").css("margin-top", (-topHeight) + "px");
	$(".epgFVPAllContent").css("margin-top", (-topHeight) + "px");
    }

    function getEventImg(prgrm, fepg) {
        if (fepg) {
            return AVLFlag.AVAILABLE == prgrm.available ? imgList.canPlay :
                AVLFlag.COMMING_SOON == prgrm.available ? imgList.comingSoon : imgList.noImg;
        }
        else {
            return prgrm.record ? imgList.record :
                prgrm.reminder ? imgList.reminder : imgList.noImg;
        }
    }

    /**
     * [initOperateData init operate data]
     * @param  {[type]} prgrm [from other page]
     * @return {[type]}       [true]
     */
    self.initOperateData = function (chnl, prgrm) {
        DBG_INFO('prgrm:'+objToString(prgrm));
        oprtData.channelName = chnl.name ? chnl.name :'';
        oprtData.mainTitle = prgrm.title ? prgrm.title :'';//chnl.name;
        oprtData.secondaryTitle = prgrm.secondaryTitle ? prgrm.secondaryTitle:'';//prgrm.title;
        //oprtData.programTime = getProgramLocalTime(prgrm.startTime, prgrm.endTime, 4);
        oprtData.programTime = getProgramLocalTime(prgrm.startTime, prgrm.endTime, 1, 1);
        oprtData.contentImage = prgrm.contentImage ? prgrm.contentImage : defaultImage;
        oprtData.bookFlag = getEventImg(prgrm, false);
        oprtData.initDetail = true;
        oprtData.guidance = prgrm.guidance ? prgrm.guidance : "";
        oprtData.ADFlag = 1 === prgrm.adFlag ? imgList.AD_FLAG : imgList.noImg;
        oprtData.HDFlag = 1 === prgrm.hdFlag ? imgList.HD_FLAG : 0 === prgrm.hdFlag ? imgList.SD_FLAG : imgList.noImg;
        oprtData.SUBTFlag = 1 === prgrm.subt ? imgList.SUB_T : imgList.noImg;
        oprtData.rating = '';
        oprtData.eventTheme = prgrm.theme;
        oprtData.ForwardEPG = prgrm.ForwardEPG;
        oprtData.playFlag = getEventImg(prgrm, true);
        oprtData.programDetail = prgrm.detail;
        $(".epgFVPProgramPanel").css("display", "none");
        if (ENABLE_FVP) {
            $("#epg_fvp_detail_logo").css("background-image", "url(img/epg/logo_freevirw_epg.png)");
        }
        else {
            $("#epg_fvp_detail_logo").css("background-image", "none");
            hiWebOsFrame[self.id].rewriteDataOnly();
            contentHeight = $(".epgFVPAllContent").height();
            setScrollbarPostion(KeyDir.NONE);
        }
        if (!tv && ENABLE_FVP) {
            setTimeout(function () {
                onFEPGDetailChanged([
                    programId, prgrm.detail,
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
        if (ENABLE_FVP  && !isNULLProgram(prgrm) && !isNAProgram(prgrm)) {
            $(".epgFVPProgramFlag").removeAttr("style");
            if (tv) startFetchDetail(prgrm.program_id ,onFEPGDetailChanged);
        }
        else {
            $(".epgFVPProgramFlag").css("display", "none");
        }
        hiWebOsFrame[self.id].rewriteDataOnly();
        return true;
    }

    function startFetchDetail(prgrmId ,callback) {
        if (!ENABLE_FVP) return;
        DBG_INFO("program Id: " + prgrmId);
        programId = prgrmId;
        if ("N/A" != programId && programId) {
            freeview_manager.getProgramDetail(prgrmId, callback);
        }
    }

    function checkFetchedDetail(detail) {
        if (detail && programId == detail[0]) {
            programId = "";
            return true;
        }
        DBG_INFO("program id not match.");
        programId = "";
        return false;
    }

    function onFEPGDetailChanged(detail) {
        if (!oprtData.initDetail || !checkFetchedDetail(detail)) return;

        /*
         *
         * programID
         programDescrption
         Parental Guidence
	 Parental Guidence Explanatory Text
         分隔符  ":::::"   5个冒号
         keyword( 最多为20个 每一个都是字符串)
         分隔符  ":::::"   5个冒号
         creditItem(最多40个)
         role
         organizationName
         givenName
         familyName
         character_givenName
         character_FamilyName
         * */
	var guidance = "";
        if (oprtData.ForwardEPG){
            DBG_INFO("FEPG onFEPGDetailChanged icon = " + detail[5]);
            oprtData.contentImage= !!detail[5] ? detail[5]: '';
            hiWebOsFrame[self.id].rewriteDataOnly();
            return;
        }
        oprtData.programDetail = detail[1] ? detail[1] : oprtData.programDetail ? oprtData.programDetail : '';
        oprtData.rating = detail[2] ? detail[2] : "";
	guidance = detail[3] ? detail[3] : "";
	if(guidance)
        oprtData.guidance = guidance;
        oprtData.actors = "";
        oprtData.keywords = "";
        oprtData.crews = "";
        oprtData.organization = "";
        var seekFlag = 0;
        oprtData.contentImage = !!detail[5] ? detail[5]: '';
        for (var i = 7; i < detail.length; i++) {
            if (":::::" == detail[i]) {
                seekFlag++;
                continue;
            }
            var str = "";
            switch (seekFlag) {
                case CAST_LIST.KEYWORD:
                    oprtData.keywords += (detail[i] + ", ");
                    break;
                case CAST_LIST.ACTOR:
                    str = detail[i + 2] + " " + detail[i + 3];
                    if (!!str.trim()) {
                        oprtData.actors += ( detail[i] + " " + detail[i + 1] + "(" + str + "), ");
                    }
                    else {
                        oprtData.actors += ( detail[i] + " " + detail[i + 1] + ", ");
                    }
                    i += 3;
                    break;
                case CAST_LIST.CREW:
                    str = detail[i + 2];
                    if (!!str.trim()) {
                        oprtData.crews += ( detail[i] + " " + detail[i + 1] + "(" + str + "), ");
                    }
                    else {
                        oprtData.crews += ( detail[i] + " " + detail[i + 1] + ", ");
                    }
                    i += 2;
                    break;
                case CAST_LIST.ORG:
                    //oprtData.organization = detail[i];
                    oprtData.organization += (detail[i] + ", ");
                    break;
                default :
                    DBG_ERROR("flag error.");
                    break;
            }
        }
        oprtData.actors = oprtData.actors.slice(0, -2);
        oprtData.keywords = oprtData.keywords.slice(0, -2);
        oprtData.crews = oprtData.crews.slice(0, -2);
        oprtData.organization = oprtData.organization.slice(0, -2);
        hiWebOsFrame[self.id].rewriteDataOnly();
        //if(allFlagDisabled){
        //    $(".epgFVPProgramFlag").css("display", "none");
        //}
        //else{
        //    $(".epgFVPProgramFlag").removeAttr("style");
        //}
        contentHeight = $(".epgFVPAllContent").height();
        setScrollbarPostion(KeyDir.NONE);
    }
    /**
     * [rewritePageData translate operate data to page data]
     * @param  {[type]} pageData [reference]
     * @return {[type]}          []
     */
    function rewritePageData(pageData){
        pageData.epg_fvp_detail_image.Data = oprtData.contentImage;
        pageData.epg_fvp_detail_program_book_flag.Data = oprtData.bookFlag;
        //pageData.epg_fvp_detial_channel_name.Data = oprtData.channelName;
        pageData.epg_fvp_detail_channel.Data = oprtData.channelName;
        pageData.epg_fvp_detial_channel_name.Data = oprtData.mainTitle;
        //VL2.0 pageData.epg_fvp_detail_program_name.Data = oprtData.programTitle;
	pageData.epg_fvp_detail_program_name.Data = oprtData.secondaryTitle;
        pageData.epg_fvp_detail_program_time.Data = oprtData.programTime;

        pageData.epg_fvp_detail_content.Data = oprtData.programDetail;
        // pageData.epg_detail_title.Data = oprtData.title;
        if(oprtData.guidance){
            pageData.epg_fvp_detail_guidance.Data = oprtData.guidance;
        }

        pageData.epg_fvp_actors.Data = "Actors: " + oprtData.actors;
        pageData.epg_fvp_keywords.Data = "Keyword: " + oprtData.keywords;
        pageData.epg_fvp_crew.Data = "Cast & Crew: " + oprtData.crews;
        pageData.epg_fvp_org.Data = "Organization: " + oprtData.organization;

        pageData.epg_fvp_detail_guidance_title.disable =
            pageData.epg_fvp_detail_guidance.disable = (!oprtData.guidance);
        pageData.epg_fvp_actors.disable = (!oprtData.actors);
        pageData.epg_fvp_keywords.disable = (!oprtData.keywords);
        pageData.epg_fvp_crew.disable = (!oprtData.crews);
        pageData.epg_fvp_org.disable = (!oprtData.organization);

        pageData.epg_fvp_flag_Rating.Data = oprtData.rating;
        pageData.epg_fvp_flag_Play.Data = oprtData.playFlag;
        pageData.epg_fvp_flag_theme.Data = "undefined" != typeof epg ? epg.getPBBTypeColor(oprtData.eventTheme) : imgList.noImg;
        pageData.epg_fvp_flag_AD.Data = oprtData.ADFlag;
        pageData.epg_fvp_flag_HD.Data = oprtData.HDFlag;
        pageData.epg_fvp_flag_Subtitle.Data = oprtData.SUBTFlag;
        pageData.epg_fvp_flag_theme_text.Data = "undefined" != typeof epg ? epg.getThemeText(oprtData.eventTheme) : "";

        pageData.epg_fvp_flag_Rating.disable = !oprtData.rating;
        pageData.epg_fvp_flag_Play.disable = imgList.noImg == oprtData.playFlag;
        pageData.epg_fvp_flag_theme_text.disable =
            pageData.epg_fvp_flag_theme.disable = !pageData.epg_fvp_flag_theme_text.Data;
        pageData.epg_fvp_flag_AD.disable = imgList.noImg == oprtData.ADFlag;
        pageData.epg_fvp_flag_HD.disable = imgList.noImg == oprtData.HDFlag;
        pageData.epg_fvp_flag_Subtitle.disable = imgList.noImg == oprtData.SUBTFlag;

        allFlagDisabled =
            pageData.epg_fvp_flag_Rating.disable &&
            pageData.epg_fvp_flag_Play.disable &&
            pageData.epg_fvp_flag_theme.disable &&
            pageData.epg_fvp_flag_AD.disable &&
            pageData.epg_fvp_flag_HD.disable &&
            pageData.epg_fvp_flag_Subtitle.disable;
        $(".epgFVPProgramPanel").css("display", "inline-block");
    }

    // page data [reference]
    self.pageData = {
        epg_fvp_detail_image: {Data: defaultImage},
        epg_fvp_detail_program_book_flag: {Data: imgList.noImg},
        epg_fvp_detial_channel_name: {Data: ""},
        epg_fvp_detail_channel: {Data: ""},
        epg_fvp_detail_program_name: {Data: ""},
        epg_fvp_detail_program_time: {Data: ""},
        epg_fvp_detail_content: {Data: ""},
        epg_fvp_detail_guidance_title: {Data: "Guidance"},
        epg_fvp_detail_guidance: {Data: ""},
        epg_fvp_actors: {Data: ""},
        epg_fvp_crew: {Data: ""},
        epg_fvp_org: {Data: ""},
        epg_fvp_keywords: {Data: ""},
        epg_fvp_flag_Rating: {Data: ""},
        epg_fvp_flag_theme: {Data: imgList.noImg},
        epg_fvp_flag_theme_text: {Data: ""},
        epg_fvp_flag_AD: {Data: imgList.noImg},
        epg_fvp_flag_HD: {Data: imgList.noImg},
        epg_fvp_flag_Subtitle: {Data: imgList.noImg},
        epg_fvp_flag_Play: {Data: imgList.noImg},
        // epg_detail_title: {Data: ""},
        // epg_detail_content_tip: {Data: "Detail"},
        // epg_detail_content: {Data: ""},
        // epg_detail_guidance_tip: {Data: "Guidance"},
        // epg_detail_guidance: {Data: ""},
        // epg_detail_back: {Data: "Press BACK button to exit"},
	//FREEVIEW 没有注释以下代码
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
}

var epgFVPDetail = new epgFVPDetailPage();
