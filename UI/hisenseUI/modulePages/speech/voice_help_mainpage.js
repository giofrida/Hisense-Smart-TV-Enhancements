/**
 * Created by HISENSE on 14-11-13.
 */
var voiceHelpMainpageData = {
	vhm_title_txt:  {Data: "Voice assistant can provide the following services "},
	"VoiceHelp_Ul": {
		"Data": [
			{
				"VoiceHelpGridUlimg": {"Data": "img/speech/channel_switch.png"},
				"VoiceHelpGridUlspan": {Data: "Channel switch"}
			},
			{
				"VoiceHelpGridUlimg": {"Data": "img/speech/browser.png"},
				"VoiceHelpGridUlspan": {Data: "Google search"}
			},
			{
				"VoiceHelpGridUlimg": {"Data": "img/speech/source_switch.png"},
				"VoiceHelpGridUlspan": {Data: "Switch input"}
			},
			{
				"VoiceHelpGridUlimg": {"Data": "img/speech/volume_control.png"},
				"VoiceHelpGridUlspan": {Data: "Volume control"}
			},
			{
				"VoiceHelpGridUlimg": {"Data": "img/speech/system_setting.png"},
				"VoiceHelpGridUlspan": {Data: "System settings"}
			},
			{
				"VoiceHelpGridUlimg": {"Data": "img/speech/app_management.png"},
				"VoiceHelpGridUlspan": {Data: "Applications management"}
			}
		],
		"DataSelectedIndex": 0,
		"SelectedIndex": 0
	},
	"langData": {
		"Voice assistant can provide the following services ": ["Voice assistant can provide the following services "],
		"Channel switch":[],
		"Google search":[],
		"Switch input":[],
		"Volume control":[],
		"System settings":[],
		"Applications management":[]
	},
	"operateData": {"SelectedIndex": 0},
	"rewrite": voice_help_mainpage_rewrite
}

function voice_help_mainpage_rewrite() {
	voiceHelpMainpageData.VoiceHelp_Ul.SelectedIndex = voiceHelpMainpageData.operateData.SelectedIndex;
}

function getVoiceHelpMainpageData(page) {
	page.CaE = [
		{
			"id": "vhm_title_txt",
			"CaEType": "span",
			"classes": {"normal": "vhm_title_txt", "focus": "vhm_title_txt", "selected": "vhm_title_txt"}
		},
		{
			"id": "VoiceHelp_Ul",//在页面中的按钮或者组件容器Id
			"description": "用于显示国家列表",
			"CaEType": "GridUl",
			"disable": false,
			"SelectedIndex": 0,
			"classes": {
				"normal": "VoiceHelpUlColumnli_normal", "focus": "VoiceHelpUlColumnli_focus",
				"dataSelected": "VoiceHelpUlColumnli_normal"
			},
			"nav": {
				"upTo": "", "enterTo": ""
			},
			"onFocusFun":"",
			"onBlurFun":"",
			"handler": {
				"aftEnterHandler": "VoiceHelpOKHandler",
				"aftRightHandler": "",
				"aftLeftHandler": "",
				"befUpHandler": "",
				"befDownHandler": "VoiceHelpMoveHandler"
			},
			"oriCaE": [//todo 需修改为oriCaE

				{
					"id": "VoiceHelpGridUlimg",
					"description": "城市名称",
					"CaEType": "img",
					"classes": {
						"normal": "VoiceHelpGridUlimg_normal", "focus": "VoiceHelpGridUlimg_normal",
						"dataSelected": "VoiceHelpGridUlimg_normal"
					}

				},
				{
					"id": "VoiceHelpGridUlspan",
					"description": "城市名称",
					"CaEType": "span",
					"classes": {
						"normal": "VoiceHelpGridUlspan_normal", "focus": "VoiceHelpGridUlspan_normal",
						"dataSelected": "VoiceHelpGridUlspan_normal"
					}

				}

			],
			"GridUlConfig": {
				"GridUlDataItem": ["VoiceHelpGridUlimg"],
				"LineNum": 4,
				"PageSize": 6,
				"FlipType": 'HOR',
				"ArrowFlag": true
			}
		}

	];
	return voiceHelpMainpageData;
}

function VoiceHelpOKHandler(){
	var index  = this.SelectedIndex;
	hiWebOsFrame.createPage('voice_help_subpage', null, null, null, function (a) {
		$('#voice_help_mainpage').css('display','none');
		var opData = voiceHelpSubpageData.operateData;
		opData.vhs_title_txt = opData.VoiceHelpMap[index].vhs_title_txt;
		opData.vhs_intro_txt = opData.VoiceHelpMap[index].vhs_intro_txt;
		opData.vhs_demo2_txt = opData.VoiceHelpMap[index].vhs_demo2_txt;
		hiWebOsFrame.voice_help_subpage = a;
		hiWebOsFrame.voice_help_subpage.rewriteDataOnly();
		a.open();
		a.hiFocus();
	});
}
function exitVoiceHelp(){
	if (hiWebOsFrame.isCurrentModule("voice"))
	{
		hiWebOsFrame.voice_help.destroy();
		hiWebOsFrame.blankPage.open();
		hiWebOsFrame.blankPage.hiFocus();
		clearInterval(inputInterval);
	}
	else{
		hiWebOsFrame.voice_help.close()
		hiWebOsFrame.voice_help.destroy();
		clearInterval(inputInterval);
	}
}
function VoiceHelpMoveHandler(){
	if(this.SelectedIndex==3){
		voiceHelpMainpageData.operateData.SelectedIndex = 4;
	}
	hiWebOsFrame.voice_help.rewrite();
	hiWebOsFrame.voice_help.hiFocus();
}