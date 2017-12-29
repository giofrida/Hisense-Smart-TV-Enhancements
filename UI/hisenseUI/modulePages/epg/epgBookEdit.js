function get_epg_book_edit_page_pageData(opts) {

	var caedata = {
		span: [
			"book_edit_channel", "book_edit_program",
			"book_edit_time", "book_edit_time_tip",
			"book_edit_repeat_tip"
		],
		NavigationBar: [{
			id: "book_edit_time_mode",
			ori: {
				span: ["time_item"]
			}
		}, {
			id: "book_edit_repeat_mode",
			ori: {
				span: ["repeat_item"]
			}
		}, {
			id: "book_edit_operate_btn",
			ori: {
				span: ["btn_item"]
			}
		}, {
			id: "book_edit_time_inputs_box",
			ori: {
				span: ["time_number"]
			}
		}]
	};

	opts.CaE = generateCaE(caedata, epgBkEdit);

	var navIndex = caedata.span.length;
	for (var i = 0; i < navIndex; i++) {
		opts.CaE[i].enableHtml = true;
	}
	opts.CaE[navIndex + 3].oriCaE[0].enableHtml = true;

	opts.CaE[navIndex].nav = {
		// enterTo: "book_edit_time_inputs_box",
		downTo: "book_edit_repeat_mode"
	};

	opts.CaE[navIndex + 1].nav = {
		downTo: "book_edit_operate_btn",
		upTo: "book_edit_time_mode"
	};

	opts.CaE[navIndex + 2].nav = {
		upTo: "book_edit_repeat_mode"
	};

	opts.CaE[navIndex].handler = {
		befEnterHandler: epgBkEdit.keyEnterOnTimeMode
	};

	opts.CaE[navIndex + 1].handler = {
		befEnterHandler: epgBkEdit.keyEnterOnRepeatMode
	};

	opts.CaE[navIndex + 2].handler = {
		befEnterHandler: epgBkEdit.keyEnterOnBtn
	};

	// opts.CaE[navIndex + 3].nav = {
		// enterTo: "book_edit_time_mode"
	// }
	opts.CaE[navIndex + 3].handler = {
		befEnterHandler: epgBkEdit.keyEnterOnInputBox,
        keyNum0Handler: epgBkEdit.keyNumOnInputBox,
        keyNum1Handler: epgBkEdit.keyNumOnInputBox,
        keyNum2Handler: epgBkEdit.keyNumOnInputBox,
        keyNum3Handler: epgBkEdit.keyNumOnInputBox,
        keyNum4Handler: epgBkEdit.keyNumOnInputBox,
        keyNum5Handler: epgBkEdit.keyNumOnInputBox,
        keyNum6Handler: epgBkEdit.keyNumOnInputBox,
        keyNum7Handler: epgBkEdit.keyNumOnInputBox,
        keyNum8Handler: epgBkEdit.keyNumOnInputBox,
        keyNum9Handler: epgBkEdit.keyNumOnInputBox
	};
	return epgBkEdit.pageData;

}

function epgBookEdit() {
	var self = this;
	self.id = "epg_book_edit_page";

	var oprtData = {
		program: null,
		isContain: false,
		bookType: BookType.NONE,
		manualStop: false,
		// repeateIndex: 0,
		timeIndex: 0,
		inputIndex: 0,
		userTime:{
			startTime: 0,
			endTime: 0,
			timeArr: []
		}
	};

	self.onOpen = function() {
		setSpecialStyle();
	}
	self.onFocus = function() {

	}
	self.onClose = function() {
	    $("#book_edit_time_inputs_box li").removeAttr("style");
		$("#book_edit_input_panel").css("display", "none");
	}

	self.initOperateData = function(chnl, prgrm, isContain, manualStop, bookType){
		if(null == prgrm){
			DBG_ERROR("program info error");
			return false;
		}

		if(isContain || null == chnl){
			oprtData.program = copyObj(prgrm);
			if(UNDEFINED_DEFSTR == typeof oprtData.program.bookType) oprtData.program.bookType = BookType.RECORD;
			if(UNDEFINED_DEFSTR == typeof oprtData.program.repeatMode) oprtData.program.repeatMode = BookRepeatMode.ONCE;
		}
		else{
			oprtData.program = {
	            uid: "",
	            channelUid: chnl.uid,
	            startTime: prgrm.startTime,
	            endTime: prgrm.endTime,
	            title: prgrm.title,
				repeatMode: BookRepeatMode.ONCE,
	            bookType: bookType,
	            channelNumber: chnl.number,
	            channelName: chnl.name,
	            listUid: chnl.listUid,
	            playId: chnl.playId
	        }
		}
		oprtData.manualStop = manualStop;
		oprtData.timeIndex = 1;//BookType.REMINDER == bookType ? 0 : 1;
		oprtData.inputIndex = 0;
		// oprtData.timeSelIndex = oprtData.timeIndex;
		// oprtData.repeateIndex = 0;
		oprtData.isContain = isContain;

		oprtData.userTime.startTime = prgrm.startTime;
		oprtData.userTime.endTime = prgrm.endTime;
		if(BookType.REMINDER == bookType){
			oprtData.userTime.timeArr = UTCTimeToArr(prgrm.startTime);
		}
		else{
			oprtData.userTime.timeArr = UTCTimeToArr(prgrm.startTime).concat([" ", "-", " "]).concat(UTCTimeToArr(prgrm.endTime));
		}

		hiWebOsFrame[self.id].rewriteDataOnly();
		return true;
	}



	function setSpecialStyle(){
		if(BookType.REMINDER == oprtData.program.bookType){
			$("#book_edit_time_mode span").css("width", "892px");
			$("#book_edit_time_mode li").eq(0).css("display", "none");
			$("#book_edit_input_panel").attr("class", "epgBookEditInputsReminder");
		}
		else{
			$("#book_edit_time_mode li").eq(0).removeAttr("style");
			$("#book_edit_time_mode span").css("width", "446px");
			$("#book_edit_input_panel").attr("class", "epgBookEditInputsRecord");
		}

		if(oprtData.isContain){
			$("#book_edit_operate_btn span").css("width", "341px");
		}
		else{
			$("#book_edit_operate_btn span").css("width", "511px");
		}
	}

    self.keyNumOnInputBox = function(operateData, data, num) {
        num -= VK_0;
        var idx = this.SelectedIndex;

        if(num == 2) {
            if((idx == 0 || idx == 8) && oprtData.userTime.timeArr[idx + 1] > 3) {
                return;
            }
        }
        if(num > 2) {
            if(idx == 0 || idx == 8) {
                return;
            }
        }

        if(num > 3) {
            if((idx == 1 || idx == 9) && oprtData.userTime.timeArr[idx - 1] == 2) {
                return;
            }
        }

        if(num > 5) {
            if(idx == 3 || idx == 11) {
                return;
            }
        }
        oprtData.userTime.timeArr[idx] = '' + num;
        oprtData.inputIndex = this.SelectedIndex;
        hiWebOsFrame[self.id].rewriteDataOnly();
    }


	self.keyEnterOnInputBox = function(){

		var newBegin, newEnd, crntTime;
		crntTime = getDVBLongTime();
		newBegin = timeAttrToUTCTime(oprtData.program.startTime, oprtData.userTime.timeArr.slice(0, 5));

		if(BookType.REMINDER == oprtData.program.bookType){
			newEnd = oprtData.program.endTime;
		}
		else{
			newEnd = timeAttrToUTCTime(oprtData.program.endTime, oprtData.userTime.timeArr.slice(8));
			var bgDate = getDateByUTC(oprtData.program.startTime);
			var edDate = getDateByUTC(oprtData.program.endTime);
			if (bgDate != edDate) {
				while (newEnd - newBegin > 24 * 3600)
					newEnd -= 24 * 3600;
			}
		}

		DBG_INFO("time adjust begin[" + newBegin + "], end[" + newEnd + "], current[" + crntTime + "]");
		if(newBegin >= newEnd || newBegin + 60 < crntTime || newEnd < crntTime + 60) {
		    DBG_ERROR('time error: ' + objToString(oprtData.userTime.timeArr));
		    $("#book_edit_time_inputs_box li").css("color", "red");
		}
		else{
		    $("#book_edit_time_inputs_box li").removeAttr("style");
			oprtData.userTime.startTime = newBegin;
			oprtData.userTime.endTime = newEnd;

			oprtData.timeIndex = 1;
			hiWebOsFrame[self.id].rewriteDataOnly();
			$("#book_edit_input_panel").css("display", "none");
			hiWebOsFrame[self.id].hiFocus("book_edit_time_mode");
		}
	}

	self.keyEnterOnTimeMode = function(){
		// oprtData.manualStop = 0 == this.SelectedIndex;
		if(0 == this.SelectedIndex){
			oprtData.timeIndex = this.SelectedIndex;
			hiWebOsFrame[self.id].rewriteDataOnly();
		}
		else{
			$("#book_edit_input_panel").css("display", "block");
			hiWebOsFrame[self.id].hiFocus("book_edit_time_inputs_box");
		}
	}

	function aftSetWeekly(d){
		oprtData.program.repeatMode = d;
		hiWebOsFrame[self.id].rewriteDataOnly();
	}

	self.keyEnterOnRepeatMode = function(){
		if(0 == this.SelectedIndex){
			oprtData.program.repeatMode = BookRepeatMode.ONCE;
			hiWebOsFrame[self.id].rewriteDataOnly();
		}
		else if(1 == this.SelectedIndex){
			oprtData.program.repeatMode = BookRepeatMode.DAILY;
			hiWebOsFrame[self.id].rewriteDataOnly();
		}
		else{
			openEPGWeeklyPage(oprtData.program.repeatMode, hiWebOsFrame[self.id], aftSetWeekly);
			// oprtData.program.repeatMode = getDayByUTC(Date.now() / milliBase);
		}
	}

	function cancelSaveSchedule() {
	    epgBackToOri(null, null, hiWebOsFrame[self.id]);
	}

	function afterOpeRateschedule(conflict) {
		if(null == conflict){
			epgBackToOri(null, null, hiWebOsFrame[self.id]);
		}
		else{
			oprtData.dialogOptions = {
				titleName: "",//'Adjust conflict',
				contentName: 'No idle resource is available',
				okName: 'Delete',
				cancelName: 'Cancel',
				okCommand: openBookConflictPage.bind(this, conflict, hiWebOsFrame[self.id].origin),
				cancelCommand: cancelSaveSchedule
				// pageClass: 'dialog_cflct_page',
				// panelClass: 'dialog_cflct_panel',
				// btnClass: 'dialog_cflct_btns'
			}
			hiWebOsFrame[self.id].close();
			openEPGDialog(hiWebOsFrame[self.id]);
		}
	}

	function adjustWeeklyTime(prgrm){
		try {
			if((prgrm.repeatMode < BookRepeatMode.SUNDAY || prgrm.repeatMode > BookRepeatMode.SATURDAY) && prgrm.repeatMode!=BookRepeatMode.DAILY) return;
			recheckDSTSeconds();
			var rd = (prgrm.repeatMode == BookRepeatMode.DAILY) ? -1 : prgrm.repeatMode, td = 0, crntTime = getDVBLongTime();
			var dstSeconds = getDSTSeconds();
			if(oprtData.isContain){
				td = (new Date((oprtData.userTime.startTime + hisenseUITZSeconds + dstSeconds) * milliBase)).getUTCDay();
			}
			else{
				td = (new Date((crntTime + hisenseUITZSeconds + dstSeconds) * milliBase)).getUTCDay();
			}
			var offset = rd - td - 7;
			//DBG_INFO("weekly offset[" + offset + "].");
			oprtData.userTime.startTime += offset * 24 * 3600;
			oprtData.userTime.endTime += offset * 24 * 3600;
			var time_off = (prgrm.repeatMode == BookRepeatMode.DAILY) ? 24 * 3600 : 7 * 24 * 3600;
			while(oprtData.userTime.startTime < crntTime) {
				oprtData.userTime.startTime += time_off;
				oprtData.userTime.endTime += time_off;
			}
		}
		catch (ex){
			DBG_ERROR(ex.message);
		}
	}

	self.keyEnterOnBtn = function(){
		if(0 == this.SelectedIndex){//save
			if(0==oprtData.timeIndex)
            {
                isScheduleRecord = false;
                hiWebOsFrame.manualStopOfPvr = true;
                sendRecordCommand();
                epgBackToOri(null, null, hiWebOsFrame[self.id]);
                return;
            }
			else
			{
				adjustWeeklyTime(oprtData.program);
				oprtData.program.startTime = oprtData.userTime.startTime;
				oprtData.program.endTime = oprtData.userTime.endTime;

				if(BookType.RECORD == oprtData.program.bookType &&
					oprtData.program.endTime - oprtData.program.startTime < 60){
					DBG_ERROR("start time and endtime are too close.");
					afterOpeRateschedule(null);
				}
				else{
					if(oprtData.isContain){
						schedule.editProgramToSchedule(oprtData.program, afterOpeRateschedule);
					}
					else{
						schedule.addProgramToSchedule(oprtData.program, afterOpeRateschedule);
					}
				}
			}
		}
		else if(1 == this.SelectedIndex){//delete
			schedule.deleteProgramToSchedule(oprtData.program.uid, afterOpeRateschedule);
		}
		else {
			epgBackToOri(null, null, hiWebOsFrame[self.id]);
		}
	}

	function rewritePageData(pageData) {
		if(null == oprtData.program) return;
		pageData.book_edit_channel.Data = oprtData.program.channelNumber + getHTMLSpace(4) + oprtData.program.channelName;
		pageData.book_edit_program.Data = oprtData.program.title;
		pageData.book_edit_time.Data = getProgramLocalTime(oprtData.program.startTime, oprtData.program.endTime, 1, 1);

		// display time
		pageData.book_edit_time_tip.Data = getCurrentContentLanguage("Time") + ": ";
		if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
			if (0 == oprtData.timeIndex && BookType.RECORD == oprtData.program.bookType) {
				pageData.book_edit_time_tip.Data += getCurrentContentLanguage("Manual stop");
			}
			else {
				pageData.book_edit_time_tip.Data += getProgramLocalTime(oprtData.userTime.startTime, oprtData.userTime.endTime, 1, 1);
			}
		}
		else{
			if (0 == oprtData.timeIndex && BookType.RECORD == oprtData.program.bookType) {
				pageData.book_edit_time_tip.Data = " :" + getCurrentContentLanguage("Time");
				pageData.book_edit_time_tip.Data = getCurrentContentLanguage("Manual stop") + pageData.book_edit_time_tip.Data;
			}
			else {
				// pageData.book_edit_time_tip.Data = getCurrentContentLanguage("Time") + ": ";
				// pageData.book_edit_time_tip.Data = getProgramLocalTime(oprtData.userTime.startTime, oprtData.userTime.endTime, 1, 1) + pageData.book_edit_time_tip.Data;
				pageData.book_edit_time_tip.Data += getProgramLocalTime(oprtData.userTime.endTime, oprtData.userTime.startTime, 1, 1);
			}
		}
		//display repeat
		pageData.book_edit_repeat_tip.Data = getCurrentContentLanguage("Repeat mode") + ": ";
		if(null == oprtData.program.repeatMode || BookRepeatMode.ONCE == oprtData.program.repeatMode){
			pageData.book_edit_repeat_tip.Data += getCurrentContentLanguage("Once");
			pageData.book_edit_repeat_mode.SelectedIndex = 0;
			pageData.book_edit_repeat_mode.DataSelectedIndex = 0;
		}
		else if(BookRepeatMode.DAILY == oprtData.program.repeatMode){
			pageData.book_edit_repeat_tip.Data += getCurrentContentLanguage("Everyday");
			pageData.book_edit_repeat_mode.SelectedIndex = 1;
			pageData.book_edit_repeat_mode.DataSelectedIndex = 1;
		}
		else{
			pageData.book_edit_repeat_tip.Data += getCurrentContentLanguage("Weekly");
			pageData.book_edit_repeat_mode.SelectedIndex = 2;
			pageData.book_edit_repeat_mode.DataSelectedIndex = 2;
		}

		//display innner time

		if(BookType.REMINDER == oprtData.program.bookType){
			pageData.book_edit_time_mode.Data[1].time_item.Data = getProgramLocalTime(oprtData.userTime.startTime, oprtData.userTime.endTime, 2, 1);
		}
		else{
			pageData.book_edit_time_mode.Data[1].time_item.Data = getProgramLocalTime(oprtData.userTime.startTime, oprtData.userTime.endTime, 0, 1);
		}
		pageData.book_edit_time_mode.SelectedIndex = oprtData.timeIndex;
		pageData.book_edit_time_mode.DataSelectedIndex = oprtData.timeIndex;

		if(!oprtData.manualStop || BookType.REMINDER == oprtData.program.bookType){
			pageData.book_edit_time_mode.disableItem = [0];
		}
		else{
			pageData.book_edit_time_mode.disableItem = [];
		}
		//display input box
		pageData.book_edit_time_inputs_box.disableItem = [];
		pageData.book_edit_time_inputs_box.SelectedIndex = oprtData.inputIndex;
		for(var i = 0; i < pageData.book_edit_time_inputs_box.Data.length; i++){

			var str = '' + oprtData.userTime.timeArr[i];
			str = "undefined" != str ? str : "";
			str = " " == str ? "&nbsp": str;
			pageData.book_edit_time_inputs_box.Data[i] = {time_number: {Data: str}};
			if("" === str.trim() || isNaN(str)){
				pageData.book_edit_time_inputs_box.disableItem.push(i);
			}
		}

		//display button
		pageData.book_edit_operate_btn.disableItem = !oprtData.isContain ? [1] : [];
		pageData.book_edit_operate_btn.SelectedIndex = 0;

        pageData.book_edit_repeat_mode.disable = (0==oprtData.timeIndex);//omg 2015-12-1


	}

	function generateNullPageData(k, l){
		var data = [];
		for(var i = 0; i < l; i++){
			var obj = {};
			obj[k] = {Data: ""};
			data.push(obj);
		}
		return data;
	}

	self.pageData = {
		book_edit_channel: {Data: ""},
		book_edit_program: {Data: ""},
		book_edit_time: {Data: ""},
		book_edit_time_tip: {Data: ""},
		book_edit_repeat_tip: {Data: ""},
		book_edit_time_mode: {Data: [
			{
				time_item: {Data: "Manual stop"}
			},
			{
				time_item: {Data: ""}
			}]},
		book_edit_repeat_mode: {Data: [
			{
				repeat_item: {Data: "Once"}
			},
			{
				repeat_item: {Data: "Everyday"}
			},
			{
				repeat_item: {Data: "Weekly"}
			}]},
		book_edit_operate_btn: {Data: [
			{
				btn_item: {Data: "Save"}
			},
			{
				btn_item: {Data: "Delete"}
			},
			{
				btn_item: {Data: "Cancel"}
			}]},
		book_edit_time_inputs_box: {Data: generateNullPageData("time_number", 16)},
        langData: {
            'Jan.': [],
            'Feb.': [],
            'Mar.': [],
            'Apr.': [],
            'May.': [],
            'Jun.': [],
            'Jul.': [],
            'Aug.': [],
            'Sept.': [],
            'Oct.': [],
            'Nov.': [],
            'Dec.': [],
            'Time:': [],
            'Time of current program': [],
            'Repeat mode:': [],
            'Manual stop': [],
            'Once': [],
            'Everyday': [],
            'Weekly': [],
            'On': [],
            'Off': [],
            'Save': [],
            'Delete': [],
            'Cancel': []
        },
		rewrite: rewritePageData
	};

	self.pageData.operateData = oprtData;

}

var epgBkEdit = new epgBookEdit();
