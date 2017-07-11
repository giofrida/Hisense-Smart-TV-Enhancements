/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSysPvrCheckData(opt)
{
	opt.CaE=[
		{
			"id": "setting_sys_pvr_check_text",
			"description": "",
			"CaEType": "span"
		},
		{
			"id": "setting_sys_pvr_check_content",
			"description": "",
			"CaEType": "div"
		},
		{
			"id":"setting_sys_pvr_check_btn1",
			"description":"ok",
			"classes": {
				"normal": "setting_sys_button1_normal", "focus": "setting_sys_button1_focus"
			},
			"CaEType": "div",
			"handler":{
				'aftEnterHandler':"SettingSysPvrCheckEnHandler",//点击enter事件后处理开关转换
				'aftEscHandler':"SettingSysPvrCheckEnHandler"//点击enter事件后处理开关转换
			}
		}
	];
	return PageDataSetttingSysPvrCheck
}

var PageDataSetttingSysPvrCheck={

	"setting_sys_pvr_check_text":{Data:"Hard Disk Speed"},
	"setting_sys_pvr_check_content":{Data:""},
	"setting_sys_pvr_check_btn1":{Data:"Cancel"},
	"operateData": {
		"dataList":[
			{
				"title":"HDD setup",
				"content":"Setting is successful",
				"button":"Done"
			},
			{
				"title":"HDD setup",
				"content":"Setting fails. Hard disk is read-only or NTFS format",
				"button":"Done"
			},
			{
				"title":"HDD setup",
				"content":"The free space is less than 1GB",
				"button":"Done"
			},
			{
				"title":"HDD detecting",
				"content":"No external hard disk was found",
				"button":"Done"
			},
			{
				"title":"HDD setup",
				"content":"Setting is successful, but the speed is lower than 5M/s. It is recommended to replace the hard disk",
				"button":"Done"
			},
			{
				"title":"HDD setup",
				"content":"HDD is unavailable",
				"button":"Done"
			}
		],
		"curListIndex":0
	},

	"langData":{
		"HDD setup": [],
		"HDD detecting": [],
		"Done": [],
		"Setting is successful": [],
		"Setting fails. Hard disk is read-only or NTFS format": [],
		"The free space is less than 1GB": [],
		"No external hard disk was found": [],
		"Setting is successful, but the speed is lower than 5M/s. It is recommended to replace the hard disk": [],
		"HDD is unavailable": []
	},

	rewrite:function(pageData){
		pageData.setting_sys_pvr_check_text.Data=pageData.operateData.dataList[pageData.operateData.curListIndex].title;
		pageData.setting_sys_pvr_check_content.Data=pageData.operateData.dataList[pageData.operateData.curListIndex].content;
		pageData.setting_sys_pvr_check_btn1.Data=pageData.operateData.dataList[pageData.operateData.curListIndex].button;
	}
};

function SettingSysPvrCheckEnHandler() {

	if(0 == this.page.operateData.curListIndex)
	{
		if(PageDataSettingPvrList.operateData.parentpage == "pvr")
		{
			this.page.close();
			PageDataSettingPvrList.operateData.curtitle=0;
			PageDataSettingPvrList.operateData.curstep=0;
			PageDataSettingPvrList.operateData.curselectpartition = 0;
			hiWebOsFrame.settingssyspvr.open();
			hiWebOsFrame.settingssyspvr.hiFocus();
		}
		else if(PageDataSettingPvrList.operateData.parentpage == "timeshift")
		{
			this.page.close();
			PageDataSettingPvrList.operateData.curtitle=0;
			PageDataSettingPvrList.operateData.curstep=0;
			PageDataSettingPvrList.operateData.curselectpartition = 0;
			PageDataSettingPvrList.operateData.curselectmemmory = 0;
			hiWebOsFrame.settingssyspvr.open();
			hiWebOsFrame.settingssyspvr.hiFocus();
		}
	}
	else if(1 == this.page.operateData.curListIndex)
	{
		if(PageDataSettingPvrList.operateData.parentpage == "pvr")
		{
			this.page.close();
			hiWebOsFrame.settingssyspvrlist.open();
			hiWebOsFrame.settingssyspvrlist.hiFocus();
		}
		else if(PageDataSettingPvrList.operateData.parentpage == "timeshift")
		{
			this.page.close();
			PageDataSettingPvrList.operateData.curtitle=0;
			PageDataSettingPvrList.operateData.curstep=0;
			PageDataSettingPvrList.operateData.curselectpartition = 0;
			PageDataSettingPvrList.operateData.curselectmemmory = 0;
			hiWebOsFrame.settingssyspvr.open();
			hiWebOsFrame.settingssyspvr.hiFocus();
		}
	}
	else if(2 == this.page.operateData.curListIndex)
	{
		this.page.close();
		hiWebOsFrame.settingssyspvrlist.open();
		hiWebOsFrame.settingssyspvrlist.hiFocus();
	}
	else if(3 == this.page.operateData.curListIndex || 4 == this.page.operateData.curListIndex)
	{
		this.page.close();
		PageDataSettingPvrList.operateData.curtitle = 0;
		PageDataSettingPvrList.operateData.curstep = 0;
		PageDataSettingPvrList.operateData.curselectpartition = 0;
		PageDataSettingPvrList.operateData.curselectmemmory = 0;
		hiWebOsFrame.settingssyspvr.open();
		hiWebOsFrame.settingssyspvr.hiFocus();
	}
	else if(5 == this.page.operateData.curListIndex)
	{
		this.page.close();
		hiWebOsFrame.settingssyspvrlist.open();
		hiWebOsFrame.settingssyspvrlist.hiFocus();
	}
}

function SettingSysPvrCheckonDestroy() {

	debugRM("hiWebOsFrame.pvrCheck=null");
	hiWebOsFrame.pvrCheck=null;
}