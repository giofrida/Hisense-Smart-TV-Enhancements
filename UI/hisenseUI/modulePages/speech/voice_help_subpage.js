/**
 * Created by HISENSE on 14-11-13.
 */
var voiceHelpSubpageData = {
	vhs_title_txt:   {Data: ""},
	vhs_intro_txt:  {Data: ""},
	vhs_demo2_txt:  {Data: ""},
	"langData": {

	},
	"operateData": {
		VoiceHelpMap:[
			{
				vhs_title_txt:"Channel switch",
				vhs_intro_txt:"Switch TV channel via voice control",
				vhs_demo2_txt:"For example, Channel 3 / Switch to CNN / Go to FOX. "
			},
			{
				vhs_title_txt:"Google search",
				vhs_intro_txt:"Search content with voice commands, open the browser and display results",
				vhs_demo2_txt:"For example, Search movies on Google. "
			},
			{
				vhs_title_txt:"Switch input",
				vhs_intro_txt:"Switch signal source via voice control",
				vhs_demo2_txt:"For example, Change to HDMI2 / Switch input source. "
			},
			{
				vhs_title_txt:"Volume control",
				vhs_intro_txt:"Adjust TV volume via voice control",
				vhs_demo2_txt:"For example, Set volume to 25 / Volume 10 / Volume up / Mute / Louder."
			},
			{
				vhs_title_txt:"System settings",
				vhs_intro_txt:"Open system setting options via voice control",
				vhs_demo2_txt:"For example, Open settings / Audio settings / Change my location / Start the network settings menu / Go to picture settings."
			},
			{
				vhs_title_txt:"Applications management",
				vhs_intro_txt:"Open an installed application by voice control",
				vhs_demo2_txt:"For example, Netflix / Open Netflix / Start Netflix. "
			}
		],
		vhs_title_txt:"",
		vhs_intro_txt:"",
		vhs_demo2_txt:""
	},
	"langData": {
		"Channel switch": [],
		"Open an installed application by voice control":[],
		"Open system setting options via voice control":[],
		"Switch TV channel via voice control":[],
		"Adjust TV volume via voice control":[],
		"For example, Channel 3 / Switch to CNN / Go to FOX. ":[],
		"Google search":[],
		"search movies":[],
		"Switch input":[],
		"Volume control":[],
		"System settings":[],
		"Adjust TV volume via voice control ":[],
		"Switch signal source via voice control":[],
		"Search content with voice commands, open the browser and display results":[],
		"Applications management":[],
		"For example, Set volume to 25 / Volume 10 / Volume up / Mute / Louder.":[],
		"For example, Search movies on Google. ":[],
		"For example, Change to HDMI2 / Switch input source. ":[],
		"For example, Netflix / Open Netflix / Start Netflix. ":[],
		"For example, Open settings / Audio settings / Change my location / Start the network settings menu / Go to picture settings.":[]
	},
	"rewrite": voice_help_subpage_rewrite
}

function voice_help_subpage_rewrite(data) {
	data.vhs_title_txt.Data = data.operateData.vhs_title_txt;
	data.vhs_intro_txt.Data = data.operateData.vhs_intro_txt;
	data.vhs_demo2_txt.Data = data.operateData.vhs_demo2_txt;
}

function getVoiceHelpSubpageData(page) {

	page.CaE = [
		{
			"id": "vhs_title_txt",
			"CaEType": "span",
			"classes": {"normal": "vhs_title_txt", "focus": "vhs_title_txt", "selected": "vhs_title_txt"}
		},
		{
			"id": "vhs_intro_txt",
			"CaEType": "span",
			"classes": {"normal": "vhs_intro_txt", "focus": "vhs_intro_txt", "selected": "vhs_intro_txt"}
		},
		{
			"id": "vhs_demo2_txt",
			"CaEType": "span",
			"classes": {"normal": "vhs_demo_txt", "focus": "vhs_demo_txt", "selected": "vhs_demo_txt"}
		}
	];
	return voiceHelpSubpageData;
}

function exitSubpage(){
	$('#voice_help_subpage').css('display','none');
	hiWebOsFrame.voice_help_subpage.destroy();
	hiWebOsFrame.voice_help.open();
	hiWebOsFrame.voice_help.hiFocus();
}
