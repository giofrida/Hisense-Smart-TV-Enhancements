function get_epg_theme_color_page_pageData(opts){
	var caedata = {
		span: [
		"epg_theme_arrow_left_0", "epg_theme_arrow_right_0",
		"epg_theme_arrow_left_1", "epg_theme_arrow_right_1",
		"epg_theme_arrow_left_2", "epg_theme_arrow_right_2",
		"epg_theme_item_title_0", "epg_theme_item_title_1", "epg_theme_item_title_2"],
		NavigationBar: [{
			id: "epg_theme_item_0",
			ori: {
				span:["item_name"]
			}
		},{
			id: "epg_theme_item_1",
			ori: {
				span:["item_name"]
			}
		},{
			id: "epg_theme_item_2",
			ori: {
				span:["item_name"]
			}
		}]
	};

	var ulIdx = caedata.span.length;
	opts.CaE = generateCaE(caedata, epgTheme);

	for (var i = 0; i < 3; i++) {
		opts.CaE[i * 2].classes = {normal: "epgThemeArrowLeft", disable: "epgThemeArrowDisable"};
		opts.CaE[i * 2 + 1].classes = {normal: "epgThemeArrowRight", disable: "epgThemeArrowDisable"};

		opts.CaE[ulIdx + i].handler = {
			befEnterHandler: epgTheme.keyEnterHandler,
            befUpHandler:epgTheme.EpgTheme_UpHandler,//omg 2016-1-25
            befDownHandler:epgTheme.EpgTheme_DownHandler//omg 2016-1-25

		}
        opts.CaE[ulIdx+i].onFocusFun= epgTheme.EpgTheme_onFocus;
        opts.CaE[ulIdx+i].onBlurFun=epgTheme.EpgTheme_onBlur;
		opts.CaE[ulIdx + i].nav = {
			upTo: i == 0 ? "" : opts.CaE[ulIdx + i - 1].id,
			downTo: i == 2 ? "" : opts.CaE[ulIdx + i + 1].id
		}
		opts.CaE[ulIdx + i].classes = {
			normal: "epgThemeNameNormal",
			focus: "epgThemeNameFocus",
			dataSelected: "epgThemeNameSelected",
			selected: "epgThemeNameSelected",
            disable: "epgThemeNameDisabled"
		}
		opts.CaE[ulIdx + i].NavigationBarConfig.DoubleClass = true;
		opts.CaE[ulIdx + i].NavigationBarConfig.PageSize = 4;
		opts.CaE[ulIdx + i].NavigationBarConfig.ArrowFlag = true;

        opts.CaE[ulIdx + i].linkZoomArrowleft = "epg_theme_arrow_left_" + i;
        opts.CaE[ulIdx + i].linkZoomArrowRight = "epg_theme_arrow_right_" + i;
	}

	return epgTheme.pageData;
}

function epgThemeColorPage(){

	var self = this;
	self.id = "epg_theme_color_page";
	var themeName = [
		'Off','Movie', 'News/Factual', 'Shows',
		'Sport', 'Kids', 'Music',
		'Factual', 'Entertainment','Education',
		'Lifestyle', 'Drama', 'Others'

	];
	var oprtData = {
		selectedItems: [1, 2, 3],
        disabledItem:[[2,3],[1,3],[1,2]]//omg 2016-1-26
	};
    self.EpgTheme_UpHandler=function(){
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            hiWebOsFrame[self.id].rewrite();
        }
    }
    self.EpgTheme_DownHandler=function(){
        if (this.SelectedIndex != this.DataSelectedIndex) {
            this.SelectedIndex = this.DataSelectedIndex;
            hiWebOsFrame[self.id].rewrite();
        }

    }

	self.onOpen = function(){
	}
	self.onFocus = function(){

     }
    self.onBlur=function(){

    }
	self.onClose = function(){
		epg.refreshEPGColorTheme(oprtData.selectedItems);
	}
	self.keyEnterHandler = function(){
		var row = this.id.charAt(this.id.length - 1);
		var col = this.SelectedIndex;
		var containRow = oprtData.selectedItems.indexOf(col);
		if( containRow > -1 && containRow != row && col != 0) return;
		this.setDataSelectedIndex(col);
		oprtData.selectedItems[row] = col;
       for (var i= 0;i<3;i++)//omg 2016-1-26 add disabledItems' style
       {   var temp_arrary = [];
           for(var j= 0;j<3;j++) {
               if (i == j) continue;
			   if(oprtData.selectedItems[j] != 0) temp_arrary.push(oprtData.selectedItems[j]);
           }
		   oprtData.disabledItem[i] = temp_arrary;
       }

		if(tv) model.epg.setThemsColor(oprtData.selectedItems);
		hiWebOsFrame[self.id].rewriteDataOnly();

	}

	self.rewriteThemePage = function(){
		oprtData.selectedItems = tv ? model.epg.getThemsColor() : [1, 2, 3];
		for (var i= 0;i<3;i++)//omg 2016-1-26 add disabledItems' style
		{   var temp_arrary = [];
			for(var j= 0;j<3;j++) {
				if (i == j) continue;
				if(oprtData.selectedItems[j] != 0) temp_arrary.push(oprtData.selectedItems[j]);
			}
			oprtData.disabledItem[i] = temp_arrary;
		}
		if(oprtData.selectedItems[0] + oprtData.selectedItems[1] + oprtData.selectedItems[2] == 0){  //增加规则Off后取消
			//oprtData.selectedItems = [1, 2, 3];
		}
		hiWebOsFrame[self.id].rewrite();
	}
    self.EpgTheme_onFocus = function(){//omg 2015-12-21 add marquee
        var beginidc=(undefined===this.BeginIdx)?0:this.BeginIdx;
        var idc=this.SelectedIndex-beginidc;
        if (idc <= 3)
            restoreMarqueeCommon("#"+this.id+" span", -1, idc , 185);
    }
    self.EpgTheme_onBlur = function(){//omg 2015-12-21 add marquee
        var beginidc=(undefined===this.BeginIdx)?0:this.BeginIdx;
        var idc=this.SelectedIndex-beginidc;
        if (idc <= 3)
            restoreMarqueeCommon("#"+this.id+" span", idc, -1 , 185);
    }

	function setScrollbarPostion(idx, dir) {

	}


	function rewritePageData(pageData) {
		//oprtData.selectedItems = tv ? model.epg.getThemsColor() : [1, 2, 3];
		for (var i = 0; i < 3; i++) {
			pageData["epg_theme_item_" + i].Data = [];
			for (var j = 0; j < themeName.length; j++) {
				pageData["epg_theme_item_" + i].Data.push({
					item_name: {
						Data: themeName[j]
					}
				});
			}
			pageData["epg_theme_item_" + i].SelectedIndex = oprtData.selectedItems[i];
			pageData["epg_theme_item_" + i].DataSelectedIndex = oprtData.selectedItems[i];
			pageData["epg_theme_item_title_" + i].Data = themeName[oprtData.selectedItems[i]];
            pageData["epg_theme_item_" + i].disableItem=oprtData.disabledItem[i];
		}
	}
	self.pageData = {
		epg_theme_item_title_0: {Data:""},
		epg_theme_item_title_1: {Data: ""},
		epg_theme_item_title_2: {Data: ""},
		epg_theme_arrow_left_0: {Data: ""},
		epg_theme_arrow_right_0: {Data: ""},
		epg_theme_arrow_left_1: {Data: ""},
		epg_theme_arrow_right_1: {Data: ""},
		epg_theme_arrow_left_2: {Data: ""},
		epg_theme_arrow_right_2: {Data: ""},
		epg_theme_item_0: {Data:[], PageSize: 4},
		epg_theme_item_1: {Data:[], PageSize: 4},
		epg_theme_item_2: {Data:[], PageSize: 4},
	    langData: {
	        "EPG Mark": ["EPG Mark"],
			"Off":"Off",
	        "Movie": ["Movie"],
	        "News": ["News"],
	        "Shows": ["Shows"],
	        "Sport": ["Sport"],
	        "Kids": [],
	        "Music": ["Music"],
	        "Factual": "Factual",
	        "Entertainment": "Entertainment",
	        "Education": ["Education"],
	        "Lifestyle": "Lifestyle",
	        "Drama": "Drama",
	        "Others": ["Others"]
	    },
		rewrite: rewritePageData
	}

	self.operateData = oprtData;

}

var epgTheme = new epgThemeColorPage();
