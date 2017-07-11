

function get_epg_book_schedule_page_pageData(opts){
	var caedata = {
		span: [
		 	"schedule_title", "book_schedule_clean"
		 ],
		 Ul:[{
		 	id: "book_schedule_list",
		 	ori: {
		 		span: ["channel_number", "channel_name", "program_time",
			 		"program_name", "repeat_mode"],
			 	img: ["book_img"]
		 	}
		 }]
	};


	opts.CaE = generateCaE(caedata, epgBkSchedule);

	var classList = [
		"bookScheduleChNum", "bookScheduleChName", "bookSchedulePrgrmTime",
		"bookSchedulePrgrmName", "bookScheduleRepeat", "bookScheduleImg"
	];
	var ulIdx = caedata.span.length;
	opts.CaE[ulIdx].handler = {
		befDownHandler: epgBkSchedule.keyDownHandler,
		befUpHandler: epgBkSchedule.keyUpHandler,
		befEnterHandler: epgBkSchedule.keyEnterHandler
	}

	for(var i = 0; i < opts.CaE[ulIdx].oriCaE.length; i++){
		opts.CaE[ulIdx].oriCaE[i].classes = {normal: classList[i]};
		opts.CaE[ulIdx].oriCaE[i].enableHtml = true;
	}

	opts.CaE[1].nav = {
		upTo: "book_schedule_list"
	}
	opts.CaE[1].handler = {
		befEnterHandler: epgBkSchedule.cleanAllHandler
	}
	opts.CaE[ulIdx].nav = {
		downTo: "book_schedule_clean"
	}

	return epgBkSchedule.pageData;
}

function epgBookSchedule () {
	var self = this;
	self.id = "epg_book_schedule_page";

	var oprtData = {
		program: null,
		SelectedIndex: 0
	};

    var topItem = 0,
        listSize = 6,
        panelHeight = 780,
        itemHeight = 130;


	self.onOpen = function() {
        setScrollbarPostion(oprtData.SelectedIndex, KeyDir.NONE);
	}
	self.onFocus = function() {

	}
	self.onClose = function() {

	}

	self.keyDownHandler = function() {
        var ret = setScrollbarPostion(this.SelectedIndex, KeyDir.DOWN);
        return ret;
	}


    function cancelClear() {
        self.initOperateData(true);
        hiWebOsFrame[self.id].open();
        hiWebOsFrame[self.id].hiFocus();
    }

    function clearAllItem() {

        var parms = '';
        for(var i = 0; i < oprtData.program.length; i++) {
            parms += ('"' + oprtData.program[i].uid + '",');
        }
        schedule.deleteProgramToSchedule(parms.substring(0, parms.length - 1), function() {
	        self.initOperateData(false);
	        hiWebOsFrame[self.id].open();
	        hiWebOsFrame[self.id].hiFocus();
        });
    }


	self.cleanAllHandler = function(){
			oprtData.dialogOptions = {
				titleName: "",//'Adjust conflict',
				contentName: 'Delete all planned recordings?',
				okName: 'OK',
				cancelName: 'Cancel',
	            okCommand: clearAllItem,
	            cancelCommand: cancelClear
				// pageClass: 'dialog_cflct_page',
				// panelClass: 'dialog_cflct_panel',
				// btnClass: 'dialog_cflct_btns'
			}
			hiWebOsFrame[self.id].close();
			openEPGDialog(hiWebOsFrame[self.id]);
	}

	self.keyEnterHandler = function(){
        if (0>=oprtData.program.length) return true;//omg 2015-12-14 bug:MT5657VL2EU-209
        hiWebOsFrame[self.id].close();
		oprtData.SelectedIndex = this.SelectedIndex;
		openBookEditPage(null, oprtData.program[this.SelectedIndex], true, false, null, hiWebOsFrame[self.id]);
	}

	self.keyUpHandler = function() {
        var ret = setScrollbarPostion(this.SelectedIndex, KeyDir.UP);
        return ret;
	}

	self.initOperateData = function(fromKeyBack){
		oprtData.program = schedule.getRefBookingItems();
		if(!fromKeyBack){
			topItem = 0;
			oprtData.SelectedIndex = 0;
		}
		else{
			if(oprtData.program.length - topItem < listSize && topItem > 0){
				topItem = Math.max(0, oprtData.program.length - listSize);
			}
			if(oprtData.SelectedIndex >= oprtData.program.length){
				oprtData.SelectedIndex = oprtData.program.length - 1;
			}
		}

		hiWebOsFrame[self.id].rewrite();
	}

	function setScrollbarPostion(idx, dir) {
	    var scrollHeight = 0,
	        scrollTop, resetIndex = -1;
	    var total = oprtData.program.length;

	    if (total - listSize > 0) {
	        scrollHeight = Math.round(panelHeight * listSize / total);
	    }
	    if (KeyDir.DOWN == dir) {
	        if (idx == total - 1) {
	            // topItem = 0;
	            // resetIndex = 0;
	            return true;
	        } else if (idx == listSize + topItem - 1) {
	            topItem++;
	        } else {
	            return true;
	        }
	    }
	    else if (KeyDir.UP == dir) {
	        if (idx == 0) {
	            // topItem = Math.max(0, total - listSize);
	            // resetIndex = total - 1;
	            return true;
	        } else if (idx == topItem) {
	            topItem--;
	        } else {
	            return true;
	        }
	    }
	    else{
	    	topItem = Math.max(0, idx + 1 - listSize);
	    }

	    scrollTop = Math.round(panelHeight * topItem / total);
	    $("#epg_schedule_scroll").css("height", scrollHeight + "px");
	    $("#epg_schedule_scroll").css("margin-top", scrollTop + "px");
	    $("#book_schedule_list").css("margin-top", (-itemHeight * topItem) + "px");

	    if (resetIndex > -1) {
	        hiWebOsFrame[self.id].getCaE("book_schedule_list").setSelectedIndex(resetIndex);
	    }
	    //restoreMarquee("list_channels_ul", (KeyDir.NONE == dir || rewriteFlag) ? -1 : (idx * 2 + 1), (nxtIdx * 2 + 1), 350);
	    return (resetIndex == -1);
	}


	function rewritePageData (pageData) {
		if(null == oprtData.program) return;
		pageData.book_schedule_list.Data = [];
		for(var i = 0; i < oprtData.program.length; i++){
			var prgrm = oprtData.program[i];
			var item = {
				channel_number: {Data: prgrm.channelNumber},
				channel_name: {Data: prgrm.channelName},
				program_time: {Data: ""},
				program_name: {Data: prgrm.title},
				repeat_mode: {Data: repeatModeToRepeatStr(prgrm.repeatMode)},
				book_img: {Data: ""}
			};

			if(BookType.REMINDER == prgrm.bookType){
				item.program_time.Data = getProgramLocalTime(prgrm.startTime, prgrm.endTime, 3, 1);
				item.book_img.Data = "img/epg/reminder.png";
			}
			else{
				item.program_time.Data = getProgramLocalTime(prgrm.startTime, prgrm.endTime, 1, 1);
				item.book_img.Data = "img/epg/record.png";
			}

			pageData.book_schedule_list.Data.push(item);
		}
		pageData.book_schedule_list.SelectedIndex = oprtData.SelectedIndex;
		pageData.book_schedule_clean.disable = oprtData.program.length <= 0;
	}

	self.pageData = {
		schedule_title: {Data: "Schedule"},
		book_schedule_clean: {Data: "Empty"},
		book_schedule_list: {Data: []},
		rewrite: rewritePageData,
		langData: {
			"Schedule": [],
			"Empty":[],//omg 2015-12-4
			"Once":[],//omg 2015-12-8
            "Weekly":[],//omg 2015-12-8
            "Everyday":[]//omg 2015-12-8
		}
	};

	self.pageData.operateData = oprtData;

}

var epgBkSchedule = new epgBookSchedule();
