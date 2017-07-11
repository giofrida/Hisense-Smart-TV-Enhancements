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
				"normal": "setting_sys_mt_normal_cc_SA", "focus": "setting_sys_mt_focus_cc_SA"
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
				"PageSize":5
			}
		}
	];

	return PageDataSettingQsList;
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
		"titlelist":["SAP","Caption Control"],
		"curselectindex":0,
		"curdatalist":[]
	},

	"langData":{
		"SAP": [],
		"Mono": [],
		"Stereo": [],
		"SAP": [],
		"Caption Control":[],
		"CC On":[],
		"CC Off":[],
		"CC On When Mute":[]
	},

	rewrite:function(pageData) {

		var element={};
		if(PageDataSettingQsList.operateData.curoption=="sap")
		{
			pageData.setting_qs_list_title.Data=pageData.operateData.titlelist[0];
		}
		else if(PageDataSettingQsList.operateData.curoption=="caption_control")
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
	if(PageDataSettingQsList.setting_qs_list_ul1.Data.length>5)
	{
		var index=this.page.getCaE("setting_qs_list_ul1").BeginIdx;
		$("#setting_qs_list_srcollbar").css("top",parseInt(425/PageDataSettingQsList.setting_qs_list_ul1.Data.length)*index);
	}
	else
	{
		var temp=610-(5-PageDataSettingQsList.setting_qs_list_ul1.Data.length)*95
		$("#setting_qs_list").css("height",temp+'px');
		var height=parseInt((1080-temp)/2);
		$("#setting_qs_list").css("top",height+'px');
	}
}

function UpdataqslistScrollBar(pageData)
{
	var i=pageData.setting_qs_list_ul1.Data.length;
	if(i>5)
	{
		var temp=parseInt(425/i*5);
		$("#setting_qs_list_srcollbar").css("height",temp);
		$("#setting_qs_list_srcollbar").css("visibility","visible");
	}
	else
	{
		$("#setting_qs_list_srcollbar").css("visibility","hidden");
	}
	pageData.operateData.step=parseInt(425/i);
}

function SettingQsListEnHandler()
{
	this.page.operateData.curselectindex=this.SelectedIndex;
	hiWebOsFrame.settingqslist.rewriteDataOnly();

	if( PageDataSettingQsList.operateData.curoption=="sap")
	{
		//todo the js

		var tmpIndex = 3;

		if(this.SelectedIndex == 0) {
			tmpIndex = 2;
		}
		else if(this.SelectedIndex == 1) {
			tmpIndex = 1;
		}

		try{
			model.sound.setSap(tmpIndex); //UI 与底层对应
		}catch (e){
			debugE(e.message);
		}
		debugPrint("currentSAPSet:"+tmpIndex,DebugLevel.ERROR);

		PageDateQuickSet.operateData.cursapindex=this.SelectedIndex;
		hiWebOsFrame.settingsysqS.rewriteDataOnly();
	}
	else if( PageDataSettingQsList.operateData.curoption=="caption_control")
	{
		//todo the js

		try{
			model.closedcaption.setControl(this.SelectedIndex);
		}catch (e){
			debugE(e.message);
		}
		debugPrint("currentCCSelect:"+this.SelectedIndex,DebugLevel.ERROR);

		PageDateQuickSet.operateData.curccindex=this.SelectedIndex;
		hiWebOsFrame.settingsysqS.rewriteDataOnly();
	}
}

function SettingQsListDownHandler()
{
	if(this.SelectedIndex < PageDataSettingQsList.setting_qs_list_ul1.Data.length&&this.SelectedIndex>4)
	{
		var temp=(this.SelectedIndex-4)*PageDataSettingQsList.operateData.step;
		$("#setting_qs_list_srcollbar").css("top",temp);
	}
}

function SettingQsListUpHandler()
{
	var temp=PageDataSettingQsList.setting_qs_list_ul1.Data.length;
	if(PageDataSettingQsList.setting_qs_list_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
	{
		var temp=this.SelectedIndex*PageDataSettingQsList.operateData.step;
		$("#setting_qs_list_srcollbar").css("top",temp);
	}
}

function SettingQsListEscHandler()
{
	this.page.close();
	hiWebOsFrame.settingsysqS.open();
	if( PageDataSettingQsList.operateData.curoption=="caption_control")
	{
		hiWebOsFrame.settingsysqS.getCaE('setting_qsp_ul').setSelectedIndex(2);
		PageDateQuickSet.setting_qsp_ul.SelectedIndex = 2;
		debugPrint("Exit to QS. Focus On Caption Control",DebugLevel.ERROR);
		if(PageDateQuickSet.operateData.nav.length == 2) {
			hiWebOsFrame.settingsysqS.getCaE('setting_qsp_ul').setSelectedIndex(0);
			PageDateQuickSet.setting_qsp_ul.SelectedIndex = 0;
		}
	}
	else
	{
		debugPrint("Exit to QS. Focus On SAP",DebugLevel.ERROR);
	}
	hiWebOsFrame.settingsysqS.hiFocus();
}

function SettingQslistonDestroy()
{
	hiWebOsFrame.settingqslist=null;
}