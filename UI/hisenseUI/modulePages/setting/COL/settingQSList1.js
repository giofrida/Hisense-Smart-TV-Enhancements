//11-27-2014
function getSettingQsList1PageData(opt)
{
	opt.CaE= [
		{
			"id": "setting_qs_list1_title",
			"description": "setting head",
			"CaEType": "span"
		},
		{
			"id": "setting_qs_subtitle_box_text",
			"description": "",
			"CaEType": "span"
		},
		{
			"id": "setting_qs_list1_ul1",
			"description": "列表项目",
			"CaEType": "Ul",
			"disable": false,
			"SelectedIndex": 0,
			"nav": {
				"downTo": "setting_qs_list1_pl"
			},
			"classes": {
				"normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
			},
			"handler": {
				"befEnterHandler": "SettingQsList1EnHandler",
				"aftDownHandler": "SettingQsList1DownHandler",
				"aftUpHandler": "SettingQsList1UpHandler",
				"aftEscHandler": "SettingQsList1EscHandler"
			},
			oriCaE: [
				{
					"id": "setting_qs_list1_txt1",
					"description": "名称",
					"CaEType": "span"
				},
				{
					"id": "setting_qs_list1_img1",
					"description": "图片",
					"CaEType": "img"
				}
			],
			UlConfig: {
				"UlDataItem": [ "setting_qs_list1_txt1", "setting_qs_list1_img1"],
				"PageSize":3
			}
		},
		{
			"id": "setting_qs_list1_pl",
			"description": "setting text",
			"CaEType": "div",
			"nav": {
				"upTo": "setting_qs_list1_ul1"
			},
			"classes": {
				"normal": "setting_qs_list1_pl", "focus": "setting_qs_list1_pl_focus"
			},
			"handler": {
				"befEnterHandler": "SettingQsPlEnHandler",
				"aftEscHandler": "SettingQsList1EscHandler"
			}
		}
	];

	audioLanguageListAndSubtitleListInit();

	return PageDataSettingQsList1;
}

function audioLanguageListAndSubtitleListInit()
{
	PageDataSettingQsList1.operateData.curoption = PageDateQuickSet.operateData.cursubselect;

	if(PageDataSettingQsList1.operateData.curoption == "audioLanguage")
	{
		var tmpAudioLanguageList = [];

		if(!tv)
		{
			tmpAudioLanguageList = ["Language 1","Language 2","Language 3","Language 4",0];
		}
		else
		{
			try{
				tmpAudioLanguageList = model.system.getCurChannelAudioLanguageList();   //初始化Audio Language列表
			}catch(e) {
				debugE(e.message);
			}
			debugRM("audioLanguage_receivedList:"+tmpAudioLanguageList);
		}

		//底层传入异常判断，这里仅考虑了传入的字符串数组为空时的情况
		if(0 == tmpAudioLanguageList.length)
		{
			PageDataSettingQsList1.operateData.lengthSign     = true;
			PageDataSettingQsList1.operateData.curdatalist    = tmpAudioLanguageList;
			PageDataSettingQsList1.operateData.curselectindex = 0;
		}
		else
		{
			PageDataSettingQsList1.operateData.lengthSign     = false;
			var tmpAudioLanguageIndex = parseInt( tmpAudioLanguageList.pop() );

			var tmpList = [], flag = 0;
			for(var i = 0; i < tmpAudioLanguageList.length; ++i)
			{
				flag = 0;
				for(var j = 0; j < PageDataSettingQsList1.operateData.audiolist.length; ++j)
				{
					if( PageDataSettingQsList1.operateData.audiolist[j].code == tmpAudioLanguageList[i].toLowerCase().substring(0,3) )
					{
						var tmpVar = "";
						try{
							tmpVar = langPackages[PageDataSettingQsList1.operateData.audiolist[j].name][hiWebOsFrame.getCurrentLanguageIndex()];
						}catch (e) {
							debugE(e.message);
						}

						if( (tmpAudioLanguageList[i].indexOf("AD") > 0) )
						{
							tmpVar += "(AD)";
						}
						tmpList.push(tmpVar);
						flag = 1;
						break;
					}
				}
				if(!flag)
				{
					var tempVar = tmpAudioLanguageList[i];
					tmpList.push(tempVar);
				}
			}

			PageDataSettingQsList1.operateData.curdatalist    = tmpList;
			debugRM("audioLanguageInitList:"+tmpList);
			debugRM("audioLanguageInitSelect:"+tmpAudioLanguageIndex);
			PageDataSettingQsList1.operateData.curselectindex = tmpAudioLanguageIndex;
		}
	}
	else if(PageDataSettingQsList1.operateData.curoption == "subtitle")
	{
		var tmpSubtitleList = [];
		var tmpSubtitleStatus = -1;
		var tmpSubtitleSelect = -1;

		if(!tv)
		{
			tmpSubtitleList = ["Subtitle 1","Subtitle 2","Subtitle 3"];
			tmpSubtitleList.unshift("Off");
			PageDataSettingQsList1.operateData.curdatalist    = tmpSubtitleList;
			PageDataSettingQsList1.operateData.curselectindex = 0;
		}
		else
		{
			try{
				tmpSubtitleList = model.system.getCurChannelSubtitleList();   //初始化Subtitle列表
			}catch(e) {
				debugE(e.message);
			}
			debugRM("subtitle_receivedList:"+tmpSubtitleList);
//			tmpSubtitleList = ['eng'];
			if(tmpSubtitleList.length <= 0)
			{
				$("#setting_qs_list1_content").css("display","none");
				$("#setting_qs_subtitle_box").css("display","block");
			}
			else
			{
				$("#setting_qs_subtitle_box").css("display","none");
				$("#setting_qs_list1_content").css("display","block");

				var tmpList = [], flag = 0;
				for(var i = 0; i < tmpSubtitleList.length; ++i)
				{
					flag = 0;
					for(var j = 0; j < PageDataSettingQsList1.operateData.audiolist.length; ++j)
					{
						if( PageDataSettingQsList1.operateData.audiolist[j].code == tmpSubtitleList[i].toLowerCase().substring(0,3) )
						{
							var tmpVar = "";
							try{
								tmpVar = langPackages[PageDataSettingQsList1.operateData.audiolist[j].name][hiWebOsFrame.getCurrentLanguageIndex()];
							}catch (e) {
								debugE(e.message);
							}

							if( (tmpSubtitleList[i].indexOf("H.I") > 0) && (tmpSubtitleList[i].indexOf("TTX") > 0) )
							{
								tmpVar += "(H.I)(TTX)";
							}
							else if( tmpSubtitleList[i].indexOf("H.I") > 0 )
							{
								tmpVar += "(H.I)";
							}
							else if( tmpSubtitleList[i].indexOf("TTX") > 0 )
							{
								tmpVar += "(TTX)";
							}
							tmpList.push(tmpVar);
							flag = 1;
							break;
						}
					}
					if(!flag)
					{
						var tempVar = tmpSubtitleList[i];
						tmpList.push(tempVar);
					}
				}
				tmpList.unshift("Off");
				debugRM("subtitleInitList:"+tmpList);
				PageDataSettingQsList1.operateData.curdatalist = tmpList;

				try{
					tmpSubtitleStatus = model.system.getCurChannelSubtitleStatus(); //获取当前Subtitle是On还是Off
				}catch(e) {
					debugE(e.message);
				}
				debugRM("subtitle_receiveStatus:"+tmpSubtitleStatus);
				if(0 == tmpSubtitleStatus)
				{
					PageDataSettingQsList1.operateData.curselectindex = 0;
				}
				else if(1 == tmpSubtitleStatus)
				{
					try{
						tmpSubtitleSelect = model.system.getCurChannelSubtitleSelect();
					}catch (e){
						debugE(e.message);
					}
					debugRM("subtitle_receivedSelect:"+tmpSubtitleSelect);
					PageDataSettingQsList1.operateData.curselectindex = tmpSubtitleSelect + 1;
				}
			}
		}
	}
}

var PageDataSettingQsList1= {

	"setting_qs_list1_title":{Data:"title"},
	"setting_qs_subtitle_box_text": {Data:"No subtitle"},
	"setting_qs_list1_ul1": {Data:[
		{
			"setting_qs_list1_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list1_txt1": {Data:"c"}
		},
		{
			"setting_qs_list1_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list1_txt1": {Data:"d"}
		},
		{
			"setting_qs_list1_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list1_txt1": {Data:"e"}
		},
		{
			"setting_qs_list1_img1": {Data:"img/unselectedBall.png"},
			"setting_qs_list1_txt1": {Data:"f"}
		}
	],
		"SelectedIndex":0
	},
	"setting_qs_list1_pl": {Data:"pl"},

	"operateData": {
		"curoption":"",
		"titlelist":["Audio Language","Subtitle"],
		"curselectindex":0,
		"curdatalist":[],
		"lengthSign":false,
		"pltxt":["Primary Audio","Primary Subtitle"],
		"audiolist":[
			{
				"name":"English",
				"code":"eng"
			},
			{
				"name":"Chinese",
				"code":"chi"
			},
			{
				"name":"Chinese",
				"code":"zho"
			},
			{
				"name":"Basque",//巴斯克语
				"code":"baq"
			},
			{
				"name":"Basque",//巴斯克语
				"code":"eus"
			},
			{
				"name":"Bulgarian",//保加利亚语
				"code":"bul"
			},
			{
				"name":"Cantonese",//粤语
				"code":"yue"
			},
			{
				"name":"Catalan",//加泰罗尼亚语
				"code":"cat"
			},
			{
				"name":"Croatian",//克罗地亚语
				"code":"scr"
			},
			{
				"name":"Czech",//捷克
				"code":"cze"
			},
			{
				"name":"Czech",//捷克
				"code":"ces"
			},
			{
				"name":"Danish",//丹麦语
				"code":"dan"
			},
			{
				"name":"Dutch",//荷兰语
				"code":"dut"
			},
			{
				"name":"Dutch",//荷兰语
				"code":"nla"
			},
			{
				"name":"Estonian",//爱沙尼亚
				"code":"est"
			},
			{
				"name":"Finnish",//芬兰语
				"code":"fin"
			},
			{
				"name":"French",//法语
				"code":"fre"
			},
			{
				"name":"French",//法语
				"code":"fra"
			},
			{
				"name":"Gaelic",//盖尔语
				"code":"gla"
			},
			{
				"name":"Gaelic",//盖尔语
				"code":"gae"
			},
			{
				"name":"Gaelic",//盖尔语
				"code":"gdh"
			},
			{
				"name":"Irish",//爱尔兰语
				"code":"gle"
			},
			{
				"name":"Irish",//爱尔兰语
				"code":"gai"
			},
			{
				"name":"Irish",//爱尔兰语
				"code":"iri"
			},
			{
				"name":"Galician",//加利西亚语
				"code":"glg"
			},
			{
				"name":"German",//德语
				"code":"ger"
			},
			{
				"name":"German",//德语
				"code":"deu"
			},
			{
				"name":"Greek",//希腊语
				"code":"gre"
			},
			{
				"name":"Greek",//希腊语
				"code":"ell"
			},
			{
				"name":"Hindi",//印度语Hindi
				"code":"hin"
			},
			{
				"name":"Hungarian",//匈牙利语
				"code":"hun"
			},
			{
				"name":"Italian",
				"code":"ita"
			},
			{
				"name":"Icelandic",
				"code":"ice"
			},
			{
				"name":"Icelandic",
				"code":"isl"
			},
			{
				"name":"Japanese",
				"code":"jpn"
			},
			{
				"name":"Korean",
				"code":"kor"
			},
			{
				"name":"Mandarin",//普通话
				"code":"cmn"
			},
			{
				"name":"Maori",//毛利话
				"code":"mao"
			},
			{
				"name":"Maori",//毛利话
				"code":"mri"
			},
			{
				"name":"Norwegian",//挪威语
				"code":"nor"
			},
			{
				"name":"Polish",//波兰语
				"code":"pol"
			},
			{
				"name":"Portuguese",//葡萄牙语
				"code":"por"
			},
			{
				"name":"Romanian",//罗马尼亚语
				"code":"rum"
			},
			{
				"name":"Romanian",//罗马尼亚语
				"code":"ron"
			},
			{
				"name":"Russian",
				"code":"rus"
			},
			{
				"name":"Sami",//萨米
				"code":"smi"
			},
			{
				"name":"Serbian",//塞尔维亚
				"code":"scc"
			},
			{
				"name":"Slovak",//斯洛伐克
				"code":"slo"
			},
			{
				"name":"Slovak",//斯洛伐克
				"code":"slk"
			},
			{
				"name":"Slovenian",//斯洛文尼亚
				"code":"slv"
			},
			{
				"name":"Spanish",
				"code":"spa"
			},
			{
				"name":"Spanish",
				"code":"esl"
			},
			{
				"name":"Swedish",
				"code":"swe"
			},
			{
				"name":"Swedish",
				"code":"sve"
			},
			{
				"name":"Turkish",
				"code":"tur"
			},
			{
				"name":"Welsh",
				"code":"wel"
			},
			{
				"name":"Welsh",
				"code":"cym"
			},
			{
				"name":"Original",
				"code":"qaa"
			},
			{
				"name":"Narrative",
				"code":"nar"
			},
			{
				"name":"Undefined",
				"code":"und"
			},
			{
				"name":"Unknown",
				"code":"nul"
			},
			{
				"name":"Multiple languages",
				"code":"mul"
			}
		]
	},

	"langData": {
		"Audio Language": [],
		"Primary Audio": [],
		"Subtitle": [],
		"Primary Subtitle": [],
		"Off": [],
		"No subtitle": [],
		"Unknown": []
	},

	rewrite:function(pageData) {

		if(pageData.operateData.curoption=="audioLanguage")
		{
			pageData.setting_qs_list1_title.Data=pageData.operateData.titlelist[0];
			pageData.setting_qs_list1_pl.Data=pageData.operateData.pltxt[0];
		}
		else if(pageData.operateData.curoption=="subtitle")
		{
			pageData.setting_qs_list1_title.Data=pageData.operateData.titlelist[1];
			pageData.setting_qs_list1_pl.Data=pageData.operateData.pltxt[1];
		}

		var element={};
		pageData.setting_qs_list1_ul1.Data=[];
		$.each(pageData.operateData.curdatalist, function (k, v) {
			element.setting_qs_list1_img1={};
			element.setting_qs_list1_txt1={};
			if(pageData.operateData.curselectindex==k)
			{
				element.setting_qs_list1_img1.Data="img/selectedBall.png";
			}
			else
			{
				element.setting_qs_list1_img1.Data="img/unselectedBall.png";
			}
			element.setting_qs_list1_txt1.Data= v;
			pageData.setting_qs_list1_ul1.Data.push(_cloneObj(element));
		});

		pageData.setting_qs_list1_ul1.SelectedIndex=pageData.operateData.curselectindex;

		$("#setting_qs_list1_ul1").css("float","left");
		$("#setting_qs_list1_ul1").css("left","65px");

	}

};

function qslist1openHandler()
{
	Updataqslist1ScrollBar(this.data);
	if(PageDataSettingQsList1.setting_qs_list1_ul1.Data.length>3)
	{
		var index=this.page.getCaE("setting_qs_list1_ul1").BeginIdx;
		$("#setting_qs_list1_srcollbar").css("top",parseInt(235/PageDataSettingQsList1.setting_qs_list1_ul1.Data.length)*index);
	}
	else if(PageDataSettingQsList1.setting_qs_list1_ul1.Data.length==0)
	{
		this.page.getCaE("setting_qs_list1_ul1").disable = true;
	}
}

function Updataqslist1ScrollBar(pageData)
{
	var i=pageData.setting_qs_list1_ul1.Data.length;
	if(i>3)
	{
		var temp=parseInt(235/i*3);
		$("#setting_qs_list1_srcollbar").css("height",temp);
		$("#setting_qs_list1_srcollbar").css("visibility","visible");
	}
	else
	{
		$("#setting_qs_list1_srcollbar").css("visibility","hidden");
	}
	pageData.operateData.step=parseInt(235/i);
}

function SettingQsList1EnHandler()
{
	this.page.operateData.curselectindex=this.SelectedIndex;

	if(PageDataSettingQsList1.operateData.curoption=="audioLanguage")
	{
		//todo the js
		try{
			model.system.setCurChannelAudioLanguageSelsect(this.SelectedIndex);
		}catch (e){
			debugE(e.message);
		}
		debugRM("currentAudioLanguageSet:"+this.SelectedIndex);
		hiWebOsFrame.settingqslist1.rewriteDataOnly();
		setTimeout(closeCurrentPage,1000);
	}
	else if(PageDataSettingQsList1.operateData.curoption=="subtitle")
	{
		//todo the js
		if(0 == this.SelectedIndex)
		{
			try{
				model.system.setCurChannelSubtitleStatus(0);
			}catch (e){
				debugE(e.message);
			}
			debugRM("currentSubtitleStatusSet==>Off");
		}
		else
		{
			try{
				model.system.setCurChannelSubtitleStatus(1);
				model.system.setCurChannelSubtitleSelect(this.SelectedIndex - 1);
			}catch (e){
				debugE(e.message);
			}
			debugRM("currentSubtitleStatusSet:==>On");
			var tmpSubtitleSet = this.SelectedIndex - 1;
			debugRM("currentSubtitleSelectSet:"+tmpSubtitleSet);
		}
		hiWebOsFrame.settingqslist1.rewriteDataOnly();
		setTimeout(closeCurrentPage,1000);
	}
}

function closeCurrentPage()
{
	hiWebOsFrame.settingqslist1.close();
	// this.page.destroy();
	hiWebOsFrame.settingsysqS.origin.open();
	hiWebOsFrame.settingsysqS.origin.hiFocus();
	hiWebOsFrame.destroyModule("setting");
	hiWebOsFrame.settingsFirst.close();
}

function SettingQsList1DownHandler()
{
	if(this.SelectedIndex < PageDataSettingQsList1.setting_qs_list1_ul1.Data.length&&this.SelectedIndex>2)
	{
		var temp=(this.SelectedIndex-2)*PageDataSettingQsList1.operateData.step;
		$("#setting_qs_list1_srcollbar").css("top",temp);
	}
}

function SettingQsList1UpHandler()
{
	var temp=PageDataSettingQsList1.setting_qs_list1_ul1.Data.length;
	if(PageDataSettingQsList1.setting_qs_list1_ul1.Data.length>3 &&this.SelectedIndex < (temp-3))
	{
		var temp=this.SelectedIndex*PageDataSettingQsList1.operateData.step;
		$("#setting_qs_list1_srcollbar").css("top",temp);
	}
}

function SettingQsPlEnHandler()
{
	this.page.close();
	if(PageDataSettingQsList1.operateData.curoption=="audioLanguage")
	{
		QuickopenSubtitleSetting("setting_sys_lang_audio3");
	}
	else if(PageDataSettingQsList1.operateData.curoption=="subtitle")
	{
		QuickopenSubtitleSetting("setting_sys_lang_fir_subtitle3");
	}
	this.page.destroy();
}

function SettingQsList1EscHandler()
{
	this.page.close();
	hiWebOsFrame.settingsysqS.open();
	if(this.page.operateData.curoption=="audioLanguage")
	{
		hiWebOsFrame.settingsysqS.getCaE('setting_qsp_ul').setSelectedIndex(2);
		PageDateQuickSet.setting_qsp_ul.SelectedIndex = 2;
		debugRM("Exit to QS. Focus On Audio Language");
	}
	else
	{
		hiWebOsFrame.settingsysqS.getCaE('setting_qsp_ul').setSelectedIndex(3);
		PageDateQuickSet.setting_qsp_ul.SelectedIndex = 3;
		debugRM("Exit to QS. Focus On Subtitle");
	}
	this.page.destroy();
	hiWebOsFrame.settingsysqS.hiFocus();
}

function SettingQslist1onDestroy()
{
	debugRM("Attention==>QsListOnePageDestroy!!!");
	hiWebOsFrame.settingqslist1=null;
}