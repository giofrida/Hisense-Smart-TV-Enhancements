/**
 * Created by Administrator on 12-15-2014.
 */
function getSettingSysPvrFormatData(opt)
{
	opt.CaE=[
		{
			"id": "setting_sys_pvr_format_text1",
			"description": "",
			"CaEType": "span"
		},
		{
			"id": "setting_sys_pvr_format_content",
			"description": "",
			"CaEType": "div"
		},
		{
			"id":"setting_sys_pvr_format_btn1",
			"description":"ok",
			"classes": {
				"normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
			},
			"CaEType": "div",
			"nav":{
				rightTo: "setting_sys_pvr_format_btn2"
			},
			"handler":{
				'aftEnterHandler':"SettingSysPvrFormatBtn1EnHandler",//点击enter事件后处理开关转换
				'aftEscHandler':"SettingSysPvrFormatEscHandler"//点击enter事件后处理开关转换
			}
		},
		{
			"id":"setting_sys_pvr_format_btn2",
			"description":"ok",
			"classes": {
				"normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
			},
			"CaEType": "div",
			"nav":{
				leftTo: "setting_sys_pvr_format_btn1"
			},
			"handler":{
				'aftEnterHandler':"SettingSysPvrFormatBtn2EnHandler",//点击enter事件后处理开关转换
				'aftEscHandler':"SettingSysPvrFormatEscHandler"//点击enter事件后处理开关转换
			}
		}
	];
	return PageDataSetttingSysPvrFormat
}

var PageDataSetttingSysPvrFormat={

	"setting_sys_pvr_format_text1":{Data:"Hard Disk Format"},
	"setting_sys_pvr_format_content":{Data:"Hard Disk Format can provide more better experience on Time-Shift. Do you agree?"},
	"setting_sys_pvr_format_btn1":{Data:"Format"},
	"setting_sys_pvr_format_btn2":{Data:"Cancel"},
	"operateData": {},
	"langData":{},

	rewrite:function(pageData){}
};

function SettingSysPvrFormatBtn1EnHandler() {

	//todo Hard Disk Format

}

function SettingSysPvrFormatBtn2EnHandler() {

	this.page.close();
	PageDataSettingPvrList.operateData.curtitle=0;
	PageDataSettingPvrList.operateData.curstep=0;
	PageDataSettingPvrList.operateData.curselectdev = 0;
	PageDataSettingPvrList.operateData.curselectpartition = 0;
	PageDataSettingPvrList.operateData.curselectmemmory = 0;
	hiWebOsFrame.settingssyspvr.open();
	hiWebOsFrame.settingssyspvr.hiFocus();
}

function SettingSysPvrFormatEscHandler() {

	this.page.close();
	PageDataSettingPvrList.operateData.curtitle=0;
	PageDataSettingPvrList.operateData.curstep=0;
	hiWebOsFrame.settingssyspvr.open();
	hiWebOsFrame.settingssyspvr.hiFocus();
}

function SettingSysPvrFormatonDestroy () {

	hiWebOsFrame.pvrFormat=null;
}