//11-26-2014
function getSettingQsListPageData(opt)
{
	opt.CaE= [
		{
			"id": "setting_qs_list_title",
			"description": "setting head",
			"CaEType": "span"
		},
		{
			"id": "setting_qs_list_ul1",
			"description": "列表项目",
			"CaEType": "Ul",
			"disable": false,
			"SelectedIndex": 0,
			"classes": {
				"normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
			},
			"handler": {
				"befEnterHandler": "SettingQsListEnHandler",
				"aftDownHandler": "SettingQsListDownHandler",
				"aftUpHandler": "SettingQsListUpHandler",
				"aftEscHandler": "SettingQsListEscHandler"
			},
			oriCaE: [
				{
					"id": "setting_qs_list_txt1",
					"description": "名称",
					"CaEType": "span"
				},
				{
					"id": "setting_qs_list_img1",
					"description": "图片",
					"CaEType": "img"
				}
			],
			UlConfig: {
				"UlDataItem": [ "setting_qs_list_txt1", "setting_qs_list_img1"],
				"PageSize":3
			}
		}
	];

	audioTrackListAndTeletextListInit();

	return PageDataSettingQsList;
}

function audioTrackListAndTeletextListInit()
{
	PageDataSettingQsList.operateData.curoption = PageDateQuickSet.operateData.cursubselect
	PageDataSettingQsList.operateData.curtvtype = PageDateQuickSet.operateData.ATVorDTV;

	if(PageDataSettingQsList.operateData.curoption == "audioTrack")
	{
		if(PageDataSettingQsList.operateData.curtvtype == "DTV")
		{
			var tmpAudioTrackList = [];
			var tmpAudioTrackSelect = -1;
			try{
				tmpAudioTrackList = model.system.getCurChannelAudioTrackList();
				tmpAudioTrackSelect = model.system.getCurChannelAudioTrackSelect();
			}catch(e) {
				debugE(e.message);
			}
			debugRM("DTV_audioTrack_receivedList:"+tmpAudioTrackList);
			PageDataSettingQsList.operateData.curdatalist = tmpAudioTrackList;
			debugRM("DTV_audioTrack_receivedSelect:"+tmpAudioTrackSelect);
			PageDataSettingQsList.operateData.curselectindex = tmpAudioTrackSelect;
		}
		else if(PageDataSettingQsList.operateData.curtvtype == "ATV")
		{
			var tmpAudioTrackList = [];
			var tmpAudioTrackSelect = -1;
			try{
				tmpAudioTrackList = model.system.getATVAudioTrackList();
				tmpAudioTrackSelect = model.system.getATVAudioTrackSelect();
			}catch(e) {
				debugE(e.message);
			}
			debugRM("ATV_audioTrack_receivedList:"+tmpAudioTrackList);
			debugRM("ATV_audioTrack_receivedSelect:"+tmpAudioTrackSelect);

			var tmpList = [];
			for(var i = 0; i < tmpAudioTrackList.length; ++i)
			{
				for(var j = 0; j < PageDataSettingQsList.operateData.audiotracklist.length; ++j)
				{
					if(tmpAudioTrackList[i] == PageDataSettingQsList.operateData.audiotracklist[j].code)
					{
						var tmp = PageDataSettingQsList.operateData.audiotracklist[j].name;
						tmpList.push(tmp);
					}
				}
			}
			tmpAudioTrackSelect = _getIndex(tmpList,PageDataSettingQsList.operateData.audiotrack[tmpAudioTrackSelect]);
			tmpAudioTrackSelect = tmpAudioTrackSelect < 0 ? 0 : tmpAudioTrackSelect;
			tmpAudioTrackList = tmpList;
			debugRM("ATV_audioTrack_InitList:"+tmpAudioTrackList);
			debugRM("ATV_audioTrack_InitSelect:"+tmpAudioTrackSelect);
			PageDataSettingQsList.operateData.curdatalist = tmpAudioTrackList;
			PageDataSettingQsList.operateData.curselectindex = tmpAudioTrackSelect;
		}
	}
	else if(PageDataSettingQsList.operateData.curoption == "Teletext")
	{
		PageDataSettingQsList.operateData.curdatalist = ["Off","On"];
		var tmpTeletextSelect = -1;

		if(!tv)
		{
			PageDataSettingQsList.operateData.curselectindex = 0;
		}
		else
		{
			try{
				tmpTeletextSelect = model.system.getCurChannelTeletextSelect();
				PageDataSettingQsList.operateData.curselectindex = tmpTeletextSelect;
			}catch(e) {
				debugE(e.message);
				tmpTeletextSelect = 0;
			}
			debugRM("teletext_receivedSelect:"+tmpTeletextSelect);
		}
	}

}

var PageDataSettingQsList= {

	"setting_qs_list_title":{Data:"Location"},
	"setting_qs_list_ul1": {Data:[
		{
			"setting_qs_list_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list_txt1": {Data:"c"}
		},
		{
			"setting_qs_list_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list_txt1": {Data:"d"}
		},
		{
			"setting_qs_list_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list_txt1": {Data:"e"}
		},
		{
			"setting_qs_list_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list_txt1": {Data:"f"}
		}
	],
		"SelectedIndex":0
	},

	"operateData": {
		"curoption":"",
		"titlelist":["Audio Track","Teletext"],
		"curselectindex":0,
		"curdatalist":[],
		"curtvtype":"",
		"audiotrack":["Mono","Dual1","Dual2","Stereo"],
		"audiotracklist":[
			{
				"num":0,
				"name":"Mono",
				"code":"MONO"
			},
			{
				"num":1,
				"name":"Dual1",
				"code":"DUAL1"
			},
			{
				"num":2,
				"name":"Dual2",
				"code":"DUAL2"
			},
			{
				"num":3,
				"name":"Stereo",
				"code":"STEREO"
			}
		]
	},

	"langData":{
		"Audio Track": [],
		"Mono": [],
		"Stereo": [],
		"Dual1": [],
		"Dual2": []
	},

	rewrite:function(pageData) {

		var element={};
		if(PageDataSettingQsList.operateData.curoption=="audioTrack")
		{
			pageData.setting_qs_list_title.Data=pageData.operateData.titlelist[0];
		}
		else if(PageDataSettingQsList.operateData.curoption=="Teletext")
		{
			pageData.setting_qs_list_title.Data=pageData.operateData.titlelist[1];
		}

		pageData.setting_qs_list_ul1.Data=[];
		$.each(pageData.operateData.curdatalist, function (k, v) {
			element.setting_qs_list_img1={};
			element.setting_qs_list_txt1={};
			if(pageData.operateData.curselectindex==k)
			{
				element.setting_qs_list_img1.Data="img/selectedBall.png";
			}
			else
			{
				element.setting_qs_list_img1.Data="img/unselectedBall.png";
			}
			element.setting_qs_list_txt1.Data= v;
			pageData.setting_qs_list_ul1.Data.push(_cloneObj(element));
		});

		pageData.setting_qs_list_ul1.SelectedIndex=pageData.operateData.curselectindex;
	}
};

function qslistopenHandler()
{
	UpdataqslistScrollBar(this.data);
	if(PageDataSettingQsList.setting_qs_list_ul1.Data.length>3)
	{
		var index=this.page.getCaE("setting_qs_list_ul1").BeginIdx;
		$("#setting_qs_list_srcollbar").css("top",parseInt(235/PageDataSettingQsList.setting_qs_list_ul1.Data.length)*index);
	}
}

function UpdataqslistScrollBar(pageData)
{
	var i=pageData.setting_qs_list_ul1.Data.length;
	if(i>3)
	{
		var temp=parseInt(235/i*3);
		$("#setting_qs_list_srcollbar").css("height",temp);
		$("#setting_qs_list_srcollbar").css("visibility","visible");
	}
	else
	{
		$("#setting_qs_list_srcollbar").css("visibility","hidden");
	}
	pageData.operateData.step=parseInt(235/i);
}

function SettingQsListEnHandler()
{
	this.page.operateData.curselectindex=this.SelectedIndex;

	if( PageDataSettingQsList.operateData.curoption=="audioTrack")
	{
		//todo the js 向底层写入用户当前选择的Audio Track值
		if(PageDataSettingQsList.operateData.curtvtype == "DTV")
		{
			try{
				model.system.setCurChannelAudioTrackSelect(this.SelectedIndex); //UI 与底层对应
			}catch (e){
				debugE(e.message);
			}
			debugRM("DTV_currentAudioTrackSet:"+this.SelectedIndex);
		}
		else if(PageDataSettingQsList.operateData.curtvtype == "ATV")
		{
			var realSet = -1;
			for(var k = 0; k < PageDataSettingQsList.operateData.audiotracklist.length; ++k)
			{
				if( PageDataSettingQsList.operateData.audiotracklist[k].name == PageDataSettingQsList.operateData.curdatalist[this.SelectedIndex] )
				{
					realSet = PageDataSettingQsList.operateData.audiotracklist[k].num;
				}
			}

			try{
				model.system.setATVAudioTrackSelect(realSet); //UI 与底层对应
			}catch (e){
				debugE(e.message);
			}
			debugRM("ATV_currentAudioTrackSet:"+realSet);
		}
		hiWebOsFrame.settingqslist.rewriteDataOnly();
		setTimeout(closeCurrentPage,1000);
	}
	else if( PageDataSettingQsList.operateData.curoption=="Teletext")
	{
		//todo the js 向底层写入用户当前选择的Teletext值

		try{
		model.system.setCurChannelTeletextSelect(this.SelectedIndex);
		}catch (e) {
			debugE(e.message);
		}
		debugRM("currentTeletextSet:"+this.SelectedIndex);

		if(1 == this.SelectedIndex)
		{
			this.page.close();
//			this.page.destroy();
			hiWebOsFrame.settingsysqS.origin.open();
			hiWebOsFrame.settingsysqS.origin.hiFocus();
			hiWebOsFrame.destroyModule("setting");
			hiWebOsFrame.settingsFirst.close();
		}
	}
}

function closeCurrentPage()
{
	hiWebOsFrame.settingqslist.close();
	// this.page.destroy();
	hiWebOsFrame.settingsysqS.origin.open();
	hiWebOsFrame.settingsysqS.origin.hiFocus();
	hiWebOsFrame.destroyModule("setting");
	hiWebOsFrame.settingsFirst.close();
}

function SettingQsListDownHandler()
{
	if(this.SelectedIndex < PageDataSettingQsList.setting_qs_list_ul1.Data.length&&this.SelectedIndex>2)
	{
		var temp=(this.SelectedIndex-2)*PageDataSettingQsList.operateData.step;
		$("#setting_qs_list_srcollbar").css("top",temp);
	}
}

function SettingQsListUpHandler()
{
	var temp=PageDataSettingQsList.setting_qs_list_ul1.Data.length;
	if(PageDataSettingQsList.setting_qs_list_ul1.Data.length>3 &&this.SelectedIndex < (temp-3))
	{
		var temp=this.SelectedIndex*PageDataSettingQsList.operateData.step;
		$("#setting_qs_list_srcollbar").css("top",temp);
	}
}

function SettingQsListEscHandler()
{
	this.page.close();
	hiWebOsFrame.settingsysqS.open();
	if(this.page.operateData.curoption=="Teletext")
	{
		hiWebOsFrame.settingsysqS.getCaE('setting_qsp_ul').setSelectedIndex(3);
		PageDateQuickSet.setting_qsp_ul.SelectedIndex = 3;
		debugRM("Exit to QS. Focus On Teletext");
	}
	else
	{
		debugRM("Exit to QS. Focus On Audio Track");
	}
	this.page.destroy();
	hiWebOsFrame.settingsysqS.hiFocus();
}

function SettingQslistonDestroy()
{
	debugRM("Attention==>QsListPageDestroy!!!");
	hiWebOsFrame.settingqslist=null;
}