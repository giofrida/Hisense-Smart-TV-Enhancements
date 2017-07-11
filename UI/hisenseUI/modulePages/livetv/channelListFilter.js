function get_livetv_channel_list_filter_pageData(opts){
	var caeData = {
        input: ["chlist_filter_input"],
		span: ["chlist_filter_name"],
        NavigationBar: [{
            id: "chlist_filter_row_0",
            ori: {
                div: ["filter_ratio"],
                span: ["filter_name"]
            }
        },{
            id: "chlist_filter_row_1",
            ori: {
                div: ["filter_ratio"],
                span: ["filter_name"]
            }
        },{
            id: "chlist_filter_row_2",
            ori: {
                div: ["filter_ratio"],
                span: ["filter_name"]
            }
        },{
            id: "chlist_filter_row_3",
            ori: {
                div: ["filter_ratio"],
                span: ["filter_name"]
            }
        }]
	};
    opts.CaE = generateCaE(caeData);
    var ulIdx = caeData.input.length + caeData.span.length;
    opts.CaE[0].onFocusFun = livetvchlistfilter.onFocusInput;
    opts.CaE[0].onBlurFun = livetvchlistfilter.onBlurInput;
    opts.CaE[0].nav = {
        downTo: "chlist_filter_row_0"
    };
    opts.CaE[0].handler = {
        befEnterHandler: livetvchlistfilter.invokeSKBByCHListFilter
    }
    opts.CaE[0].onChange = livetvchlistfilter.onInputChanged;

    opts.CaE[1].classes = {normal: "filterNameNormal",focus: "filterNameFocus"};

    for (var i = 0; i < 4; i++) {
        opts.CaE[ulIdx + i].nav = {
            downTo: "chlist_filter_row_" + (i + 1),
            upTo: "chlist_filter_row_" + (i - 1)
        };

        opts.CaE[ulIdx + i].handler = {
            befEnterHandler: livetvchlistfilter.keyEnterOnFilterList
        };

        opts.CaE[ulIdx + i].onFocusFun = livetvchlistfilter.itemOnFocus;
        opts.CaE[ulIdx + i].onBlurFun = livetvchlistfilter.itemOnBlur;

        opts.CaE[ulIdx + i].classes = {
            normal: "filterItemNormal",
            focus: "filterItemFocus",
            dataSelected: "filterItemSelected",
            disable: "filterItemDisable"
        }
        opts.CaE[ulIdx + i].NavigationBarConfig.DoubleClass = true;
        if(0 === i) opts.CaE[ulIdx + i].nav.upTo = "chlist_filter_input";
        if(3 === i) opts.CaE[ulIdx + i].nav.downTo = "";
    }
	return livetvchlistfilter.pageData;
}


function liveTVChannelListFilter () {
	var self = this;
	self.id = LiveTVModule.CHANNEL_LIST_FILTER
    var closeTimer, filterFlag = [0, 0, 0, 0], filterList;
    var filterArr = [
        ["All", "TV", "Radio", "Data"],
        ["All", "HD", "SD", "UHD"],
        ["All", "Lock", "Unlock"],
        ["All", "Free", "Scrambled"]
    ];
    self.onOpenChListFilter = function() {
        autoCloseTimer();
        filterFlag = livetvchlist.getFilterFlag();
        filterList = livetvchlist.getFilterList();
        hiWebOsFrame[self.id].rewriteDataOnly();
    }

    self.onCloseChListFilter = function() {
        clearTimeout(closeTimer);
        hiWebOsFrame[self.id].hiBlur();
    }

    self.backToChannelList = function() {
        hiWebOsFrame[self.id].close();
        livetvchlist.focusListAftFilter();
    }
	self.backToLiveTV = function() {
        closeLiveTVModule();
        openLiveTVModule([Msg.INFO, 0]);
	}

    self.onBlurInput = function(){
        $("#chlist_filter_name").attr("class", "filterNameNormal");
    }
    self.onFocusInput = function(){
        $("#chlist_filter_name").attr("class", "filterNameFocus");
    }

    self.onInputChanged = function(opr, d, iqqi){
        autoCloseTimer();
        var filter_name = $('#chlist_filter_input').val();
        if ('' != filter_name && iqqi) {
            livetvchlist.refreshListAftFilter(filterList, filterFlag, filter_name);
            $('#chlist_filter_input').val("");
        }
    }

    self.invokeSKBByCHListFilter = function(o, d){
        clearTimeout(closeTimer);
        invokeSKB.call(this, o, d);
    }

    self.itemOnFocus = function() {
        try {
            var v = parseInt(this.id.split("chlist_filter_row_")[1]) < 2 ? 100 : 200;
            restoreMarqueeCommon($("#" + this.id + " span"), -1, this.SelectedIndex, v);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.itemOnBlur = function() {
        try {
            var v = parseInt(this.id.split("chlist_filter_row_")[1]) < 2 ? 100 : 200;
            restoreMarqueeCommon($("#" + this.id + " span"), this.SelectedIndex, -1, v);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.keyEnterOnFilterList = function(){
        var row = parseInt(this.id.split("chlist_filter_row_")[1]);
        filterFlag[row] = this.SelectedIndex;
        this.setDataSelectedIndex(this.SelectedIndex);
        livetvchlist.refreshListAftFilter(filterList, filterFlag, null);
        hiWebOsFrame[self.id].rewriteDataOnly();
    }

    function rewritePageData(pageData) {
        var row, col, item, key = "chlist_filter_row";
        for (row = 0; row < 4; row++) {
            pageData[key + "_" + row].Data = [];
            for (col = 0; col < 4; col++) {
                if(!filterArr[row][col]) continue;
                pageData[key + "_" + row].Data.push({
                    filter_ratio: {Data: ""},
                    filter_name: {Data: filterArr[row][col]}
                });
            }
            pageData[key + "_" + row].DataSelectedIndex = filterFlag[row];
            pageData[key + "_" + row].SelectedIndex = filterFlag[row];
        }
        if(null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882")){
            pageData.chlist_filter_row_1.disableItem = [3];
        }
        else{
            pageData.chlist_filter_row_1.disableItem = [];
        }
    }
    function autoCloseTimer() {
        var interval = tv ? 30000 : 10000000;
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function() {
            self.backToLiveTV();
        }, interval);
    }

    var imgList = {
    }


    self.pageData = {
        chlist_filter_input: {Data: ""},
    	chlist_filter_name: {Data: "Search"},
        chlist_filter_row_0: {Data: []},
        chlist_filter_row_1: {Data: []},
        chlist_filter_row_2: {Data: []},
        chlist_filter_row_3: {Data: []},
        rewrite: rewritePageData,
        langData: {
        	"Search": []
        }
    }
    var oprtData = {
    };
    self.pageData.operateData = oprtData;
}


var livetvchlistfilter = new liveTVChannelListFilter();
