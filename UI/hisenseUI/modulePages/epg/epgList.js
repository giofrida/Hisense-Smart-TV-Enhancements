function get_epg_list_page_pageData(opts){
	var caedata = {
		Ul:[{
			id: "epg_list_item",
			ori: {
				span:["item_name"]
			}
		}]
	};

	opts.CaE = generateCaE(caedata, epgList);
	opts.CaE[0].handler = {
		befDownHandler: epgList.keyDownHandler,
		befUpHandler: epgList.keyUpHandler,
		befEnterHandler: epgList.keyEnterHandler
	};
	return epgList.pageData;
}

function epgListPage(){

	var self = this;
	self.id = "epg_list_page";


    var topItem = 0,
        listSize = 4,
        panelHeight = 400,
        itemHeight = 100,
        totalItem = 0;

	var oprtData = {
		channelList: [],
		copyList: [],
		SelectedIndex: 0
	};

	self.onOpen = function(){
        setScrollbarPostion(oprtData.SelectedIndex, KeyDir.NONE);
	}
	self.onFocus = function(){

	}
	self.onClose = function(){

	}

	self.keyDownHandler = function() {
        var ret = setScrollbarPostion(this.SelectedIndex, KeyDir.DOWN);
        return ret;
	}

	self.keyEnterHandler = function(){
		hiWebOsFrame[self.id].close();
		//var list = oprtData.channelList[this.SelectedIndex];
		var list = oprtData.copyList[this.SelectedIndex];
		epg.switchList(list);
	}

	self.keyUpHandler = function() {
        var ret = setScrollbarPostion(this.SelectedIndex, KeyDir.UP);
        return ret;
	}

	self.rewriteListPage = function(list){
		oprtData.channelList = livetvchlist.getRefLists();
		oprtData.copyList = [];
		oprtData.currentList = list;
		totalItem = 0;
		hiWebOsFrame[self.id].rewrite();
	}


	function setScrollbarPostion(idx, dir) {
	    var scrollHeight = 0,
	        scrollTop, resetIndex = -1;
	    // var total = oprtData.channelList.length;

	    if (totalItem - listSize > 0) {
	        scrollHeight = Math.round(panelHeight * listSize / totalItem);
	    }
	    if (KeyDir.DOWN == dir) {
	        if (idx == totalItem - 1) {
	            topItem = 0;
	            resetIndex = 0;
	        } else if (idx == listSize + topItem - 1) {
	            topItem++;
	        } else {
	            return true;
	        }
	    }
	    else if (KeyDir.UP == dir) {
	        if (idx == 0) {
	            topItem = Math.max(0, totalItem - listSize);
	            resetIndex = totalItem - 1;
	        } else if (idx == topItem) {
	            topItem--;
	        } else {
	            return true;
	        }
	    }
	    else{
	    	topItem = Math.max(0, idx + 1 - listSize);
	    }

	    scrollTop = Math.round(panelHeight * topItem / totalItem);
	    $("#epg_list_scroll").css("height", scrollHeight + "px");
	    $("#epg_list_scroll").css("margin-top", scrollTop + "px");
	    $("#epg_list_item").css("margin-top", (-itemHeight * topItem) + "px");

	    if (resetIndex > -1) {
	        hiWebOsFrame[self.id].getCaE("epg_list_item").setSelectedIndex(resetIndex);
	    }
	    //restoreMarquee("list_channels_ul", (KeyDir.NONE == dir || rewriteFlag) ? -1 : (idx * 2 + 1), (nxtIdx * 2 + 1), 350);
	    return (resetIndex == -1);
	}


	function rewritePageData(pageData){
		var i = 0;
		pageData.epg_list_item.Data = [];
		oprtData.SelectedIndex = 0;
		for(i = 0; i < oprtData.channelList.length; i++){
			var list = oprtData.channelList[i];
			if(!list.display || list.manager) continue;
			if("COL" == InitArea && (list.uid == 0 || list.uid == 2)) continue;
			oprtData.copyList.push(list);
			pageData.epg_list_item.Data.push({
				item_name: {Data: list.name}
			});
			if(list.uid == oprtData.currentList.uid){
				oprtData.SelectedIndex = totalItem;
			}
			totalItem++;
		}
		pageData.epg_list_item.SelectedIndex = oprtData.SelectedIndex;
		pageData.epg_list_item.DataSelectedIndex = oprtData.SelectedIndex;
	}

	self.pageData = {
		epg_list_item: {Data:[]},
		langData: {
            "Antenna": [],
            "Antenna ATV": [],
            "Antenna DTV": [],
            "Cable": [],
            "Satellite": []
		},
		rewrite: rewritePageData
	}

	self.operateData = oprtData;

}

var epgList = new epgListPage();