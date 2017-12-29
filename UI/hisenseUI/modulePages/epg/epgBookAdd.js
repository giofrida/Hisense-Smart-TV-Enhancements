
function get_epg_book_add_page_pageData (opts) {
	var caedata = {
		span: [
		 	"book_add_channel", "book_add_program", "book_add_time",
		 	"book_add_type"
		 ],
        NavigationBar:[//omg add navgiationbar
            {
                id:"epgBookAdd_Nav",
                ori:{
                    span:["item_name"]
                }
            }

        ]
	};
	opts.CaE = generateCaE(caedata, epgBkAdd);
	opts.CaE[0].enableHtml = true;
	opts.CaE[1].enableHtml = true;
	opts.CaE[2].enableHtml = true;
    opts.CaE[4].onFocusFun= epgBkAdd.epgBookAdd_onFocus;//omg
    opts.CaE[4].onBlurFun=epgBkAdd.epgBookAdd_onBlur;//omg
	opts.CaE[4].handler ={

        befEnterHandler: epgBkAdd.keyEnterHandler
    }
    opts.CaE[4].classes={//omg
        normal:"epgBookAddBtn_normal",
        dataSelected:"epgBookAddBtn_normal",
        focus:"epgBookAddBtn_focus",
        disable: "epgBookAddBtn_diable"
    }

	return epgBkAdd.pageData;
}


function epgBookAdd(){
	var self = this;
	self.id = "epg_book_add_page";

	var oprtData = {
		channel: null,
		program: null
	};
    self.epgBookAdd_onFocus=function(){//omg 2015-12-23 add Marquee
        var beginidc=(undefined===this.BeginIdx)?0:this.BeginIdx;
        var idc=this.SelectedIndex-beginidc;
        restoreMarqueeCommon("#"+this.id+" span", -1, idc , 426);
    }
    self.epgBookAdd_onBlur=function(){//omg 2015-12-23 add Marquee
        var beginidc=(undefined===this.BeginIdx)?0:this.BeginIdx;
        var idc=this.SelectedIndex-beginidc;
        restoreMarqueeCommon("#"+this.id+" span", idc, -1 , 426);
    }
	self.onOpen = function(){

	}
	self.onFocus = function(){

	}
	self.onClose = function(){

	}
	self.initOperateData = function(chnl, prgrm, frmEPG){
		if(null == prgrm){
			DBG_ERROR("program info error");
			return false;
		}
		if(null == chnl){
			oprtData.channel = {
	            uid: prgrm.channelUid,
	            number: prgrm.channelNumber,
	            name: prgrm.channelName,
	            listUid: prgrm.listUid,
	            playId: prgrm.playId
	        }
		}
		else{
			oprtData.channel = chnl;
		}
		oprtData.program = prgrm;
        //oprtData.enableFVP = FREEVIEWTEST && ENABLE_FVP && !!frmEPG;
        oprtData.enableFVP = FREEVIEWTEST && ENABLE_FVP && !!frmEPG && AVLFlag.AVAILABLE == prgrm.available;
		hiWebOsFrame[self.id].rewriteDataOnly();
        if(oprtData.enableFVP) {
            $("#epgBookAdd_Nav >li").css("width","260px");
        } else {
            $("#epgBookAdd_Nav >li").css("width","426px");
        }
		return true;
	}


	function checkUsbReadyForPVR() {
		var usbUuid = model.pvr.getStationUuid();
		DBG_INFO("checkUsbReadyForPVR: " + usbUuid);
		return pvrOrTsIsUsbPathOk(usbUuid);
	}

	self.keyEnterHandler = function(){
		hiWebOsFrame[self.id].close();
		if(0== this.SelectedIndex){
			if (false == checkUsbReadyForPVR()) {
				try {
					DBG_INFO("false == checkUsbReadyForPVR(); oprtData.program" + JSON.stringify(oprtData.program));
					hiWebOsFrame.createPage("pvrHardDiskCheck", null, hiWebOsFrame[self.id].origin, null, function (pvrHardDiskCheck) {
						currentSelected = "pvr";

						//tmpProgrameInfoReminder �ݽ��� reminderʹ��
						pvrHardDiskCheckPageData.operateData.tmpEpgVal = {
							tmpProgrameInfoReminder: funcopyobj(oprtData.program),
							starter: 'epg_or_livetv',
							channel: oprtData.channel
						};

						hiWebOsFrame.pvrHardDiskCheck = pvrHardDiskCheck;
						hiWebOsFrame.pvrHardDiskCheck.open();
						hiWebOsFrame.pvrHardDiskCheck.searchHDTimer = setTimeout(function () {
							pvrPartitionsInit();
						}, 1000);
						hiWebOsFrame.pvrHardDiskCheck.hiFocus();
					});
					return;

				} catch (ex) {
					DBG_ERROR(ex.message);
				}
			}
			openBookEditPage(oprtData.channel, oprtData.program, false, false, BookType.RECORD, hiWebOsFrame[self.id].origin);
		}
        else if(1 == this.SelectedIndex){
            openBookEditPage(oprtData.channel, oprtData.program, false, false, BookType.REMINDER, hiWebOsFrame[self.id].origin);
        }
        else{
            epgBackToOri(null, null, hiWebOsFrame[self.id]);
            epg.startFetchMediaURL(oprtData.program.mediaURL);
		}
	}

	function rewritePageData(pageData){
		if(null == oprtData.program) return;
        pageData.epgBookAdd_Nav.DataSelectedIndex =
        pageData.epgBookAdd_Nav.SelectedIndex = !getPVRFlag() ? 1 : 0;
		pageData.book_add_channel.Data = oprtData.channel.number + getHTMLSpace(4) + oprtData.channel.name;
		pageData.book_add_program.Data = oprtData.program.title;
		pageData.book_add_time.Data = getProgramLocalTime(oprtData.program.startTime, oprtData.program.endTime, 1, 1);
        pageData.epgBookAdd_Nav.disableItem = [];
        if(!getPVRFlag()) pageData.epgBookAdd_Nav.disableItem.push(0);
        if(!oprtData.enableFVP)  pageData.epgBookAdd_Nav.disableItem.push(2);
	}

	self.pageData = {
		book_add_channel: {Data: ""},
		book_add_program: {Data: ""},
		book_add_time: {Data: ""},
		book_add_type: {Data: "Type:"},
        epgBookAdd_Nav: {
            Data: [
                {//omg add navgiationbar
                    item_name: {Data: "PVR"}
                },
                {
                    item_name: {Data: "Reminder"}
                },
                {
                    item_name: {Data: "Watch"}
                }
            ]
        },
        langData: {
            'Jan.': [],
            'Feb.': [],
            'Mar.': [],
            'Apr.': [],
            'May.': [],
            'Jun.': [],
            'Jul.': [],
            'Aug.': [],
            'Sep.': [],
            'Oct.': [],
            'Nov.': [],
            'Dec.': [],
            'Type:': [],
            'PVR': [],
            'Watch': [],
            'Reminder': []
        },
		rewrite: rewritePageData
	}
	self.pageData.operateData = oprtData;

}

var epgBkAdd = new epgBookAdd();
