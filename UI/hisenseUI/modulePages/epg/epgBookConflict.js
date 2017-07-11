function get_epg_book_conflict_page_pageData(opts){
	var caedata = {
		span: [
			"book_conflict_save", "book_conflict_back", "book_conflict_cancel",
			"book_conflict_title", "book_conflict_time_axis_0", "book_conflict_time_axis_1",
			"book_conflict_time_axis_2", "book_conflict_time_axis_3"
		],
		Ul: [{
			id:"book_conflict_list",
			ori: {
				span: ["event_name"],
				div: ["conflict_area"],
				img: ["delete_img"]
			}
		}]
	}
	opts.CaE = generateCaE(caedata, epgBkConflict);

	opts.CaE[0].nav = {
		rightTo: "book_conflict_back"
	}

	opts.CaE[1].nav = {
		rightTo: "book_conflict_cancel",
		leftTo: "book_conflict_save"
	}

	opts.CaE[2].nav = {
		leftTo: "book_conflict_back"
	}

	opts.CaE[0].handler =
	opts.CaE[1].handler =
	opts.CaE[2].handler = {
		befEnterHandler: epgBkConflict.keyEnterOnConflictButton
	};

	var ulIdx = caedata.span.length;
	opts.CaE[ulIdx].handler = {
		befEnterHandler: epgBkConflict.keyEnterOnConflictPage
	};
	return epgBkConflict.pageData;
}

function epgBookConflict() {
	var self = this;
	self.id = "epg_book_conflict_page";

	var tunerCnt = 1;
    var totalSeconds = 8 * 3600, totalWidth = 1437, baseLeft = 37;
	var oprtData = {
		conflictId: 0,
		conflict: null,
		minStartTime: 0,
		deletedIndex: -1,
		itemIndex: 0,
		baseLine: 0
	};

	self.onOpen = function() {
	}
	self.onFocus = function() {

	}
	self.onClose = function() {
	}

	self.initOperateData = function(conflict){
		oprtData.deletedIndex = -1;
		oprtData.itemIndex = 0;
		oprtData.conflictId = conflict.id;
		oprtData.conflict = conflict.programs;
		oprtData.minStartTime = oprtData.conflict[0].startTime;
		oprtData.maxStartTime = oprtData.conflict[0].startTime;
		oprtData.minEndTime = oprtData.conflict[0].endTime;
		for(var i = 1; i <= tunerCnt; i++){
			oprtData.minStartTime = Math.min(oprtData.minStartTime, oprtData.conflict[i].startTime);
			oprtData.maxStartTime = Math.max(oprtData.maxStartTime, oprtData.conflict[i].startTime);
			oprtData.minEndTime = Math.min(oprtData.minEndTime, oprtData.conflict[i].endTime);
		}

        var d = (new Date((oprtData.minStartTime + hisenseUITZSeconds) * milliBase));
        d.setUTCMinutes(0);
        d.setUTCSeconds(0);
	    d.setUTCMilliseconds(0);
        oprtData.baseLine = d.getTime() / milliBase - hisenseUITZSeconds;
        hiWebOsFrame[self.id].rewriteDataOnly();
        resetEventPosition();
	}

	function durationTimeToWidth(durationTime) {
	    if(durationTime == 0) {
	        return 0;
	    }
	    else {
	        return Math.round(durationTime / totalSeconds * totalWidth);
	    }
	}

	function resetEventPosition() {
		var conflictAreaWidth = durationTimeToWidth(oprtData.minEndTime - oprtData.maxStartTime);

		for(var i = 0; i <= tunerCnt; i++){
			var prgrm = oprtData.conflict[i];
			var prgrmDom = $("#book_conflict_list li .conflictItemPanel").eq(i);
			var panelDom = $("#book_conflict_list li .conflictContentPanel").eq(i);
	        var eventWidth = durationTimeToWidth(prgrm.endTime - prgrm.startTime);
	        var eventOffset = baseLeft + durationTimeToWidth(prgrm.startTime - oprtData.baseLine);
	        var conflictOffset = durationTimeToWidth(oprtData.maxStartTime - prgrm.startTime);
			if (eventOffset + eventWidth >= totalWidth) {
				eventWidth = Math.max(totalWidth - eventOffset, 0);
			}
			panelDom.removeAttr("style");
			panelDom.css("width", eventWidth + "px");
			if(HTMLDIR.LTR == hiWebOsFrame.getHTMLDir()){
				panelDom.css("margin-left", eventOffset + "px");
				panelDom.css("margin-right", "0");
			}
			else{
				panelDom.css("margin-right", eventOffset + "px");
				panelDom.css("margin-left", "0");
			}
			prgrmDom.children().eq(0).removeAttr("style");
			if(eventWidth < 80){//do not show delete icon when width is lower than 80px
				prgrmDom.children().eq(0).css("width", eventWidth + "px");
				prgrmDom.children().eq(1).css("display", "nonoe");
			}
			else{
				prgrmDom.children().eq(0).css("width", (eventWidth - 40) + "px");
				prgrmDom.children().eq(1).css("display", "inline-block");
			}

			if (HTMLDIR.LTR == hiWebOsFrame.getHTMLDir()) {
				panelDom.children().eq(0).css("margin-left", conflictOffset + "px");
				panelDom.children().eq(0).css("margin-right", "0");
			}
			else {
				panelDom.children().eq(0).css("margin-right", conflictOffset + "px");
				panelDom.children().eq(0).css("margin-left", "0");
			}
		}
		$(".conflictArea").css("width", conflictAreaWidth + "px");
	}

	self.keyEnterOnConflictButton = function() {
		switch (this.id) {
			case "book_conflict_save":
				if (undefined != oprtData.conflict[oprtData.deletedIndex].uid &&
					"" !== oprtData.conflict[oprtData.deletedIndex].uid) {
				    hiWebOsFrame.lockAllKeys("conflict_save");
					schedule.deleteProgramToSchedule(oprtData.conflict[oprtData.deletedIndex].uid, function() {
						var prgrm = oprtData.conflict[1 - oprtData.deletedIndex];
						if(undefined != prgrm.uid && "" !== prgrm.uid){
							schedule.editProgramToSchedule(prgrm, function () {
								epgBackToOri(null, null, hiWebOsFrame[self.id]);
								hiWebOsFrame.unLockAllKeys("conflict_save");
							});
						}
						else{
							schedule.addProgramToSchedule(prgrm, function () {
								epgBackToOri(null, null, hiWebOsFrame[self.id]);
								hiWebOsFrame.unLockAllKeys("conflict_save");
							});
						}
					});
				}
				else {
					epgBackToOri(null, null, hiWebOsFrame[self.id]);
				}
				break;
			case "book_conflict_back":
				oprtData.deletedIndex = -1;
				hiWebOsFrame[self.id].rewriteDataOnly();
				hiWebOsFrame[self.id].hiFocus("book_conflict_list");
				break;
			case "book_conflict_cancel":
				epgBackToOri(null, null, hiWebOsFrame[self.id]);
				break;
			default:
				break;
		}
	}

	self.keyEnterOnConflictPage = function(){
		oprtData.itemIndex = this.SelectedIndex;
		oprtData.deletedIndex = this.SelectedIndex;
		hiWebOsFrame[self.id].rewriteDataOnly();
		hiWebOsFrame[self.id].hiFocus("book_conflict_save");
		return false;
	}

	function rewritePageData(pageData) {
		if(null == oprtData.conflict) return;
		var i;
		for(i = 0; i < 4; i++){
			pageData["book_conflict_time_axis_" + i].Data =
				getProgramLocalTime(oprtData.baseLine + i * 3600, oprtData.baseLine + i * 3600, 2, 1);
		}

		pageData.book_conflict_list.disableItem = [];
		for(i = 0; i <= tunerCnt; i++){
			pageData.book_conflict_list.Data[i] = {
				event_name: {Data: oprtData.conflict[i].title},
				conflict_area: {Data: ""},
				delete_img: {Data: "img/epg/delete_program.png"}
			}
			if(i == oprtData.deletedIndex) pageData.book_conflict_list.disableItem.push(i);
		}
		pageData.book_conflict_list.SelectedIndex = oprtData.itemIndex;
	}

	function initConflictItem () {
		var items = [];
		for(var i = 0; i <= tunerCnt; i++){
			items.push({
				event_name: {Data: ""},
				conflict_area: {Data: ""}
			});
		}
		return items;
	}

	self.pageData = {
		book_conflict_title: {Data: "Adjust conflict"},
		book_conflict_time_axis_0: {Data: ""},
		book_conflict_time_axis_1: {Data: ""},
		book_conflict_time_axis_2: {Data: ""},
		book_conflict_time_axis_3: {Data: ""},
		book_conflict_save: {Data: "Save"},
		book_conflict_back: {Data: "Back"},
		book_conflict_cancel: {Data: "Cancel"},
		book_conflict_list: {Data: initConflictItem()},
		rewrite: rewritePageData,
		langData: {
            'Adjust conflict': [],
            'Cancel': [],
            'Back': [],
            'Save': []
        }
	};

	self.pageData.operateData = oprtData;


}

var epgBkConflict = new epgBookConflict();
