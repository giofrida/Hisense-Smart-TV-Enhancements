/**
 * Created by Administrator on 14-6-18.
 */
function  getSettingPVRPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_pvr_head_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_pvr_head_text1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_pvr_time_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_pvr_str1",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_pvr_btn1",
            "description": "",
            "CaEType": "div",
            "disable": false,
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_pvr_btn2"},
            "handler": {
                "aftEnterHandler": "SettingSysPvrBtn1Enter",
                "aftEscHandler": "SettingSysPvrEsc"
            }
        },
        {
            "id": "setting_sys_pvr_str2",
            "description": "",
            "CaEType": "div"
        },
        {
            "id": "setting_sys_pvr_btn2",
            "description": "",
            "CaEType": "div",
            "classes": {
                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus","disable":"setting_select_lang_disable"
            },
            "nav":{"downTo": "setting_sys_pvr_ul1", "upTo": "setting_sys_pvr_btn1"},
            "handler": {
                "aftEnterHandler": "SettingSysPvrBtn2Enter",
                "aftEscHandler": "SettingSysPvrEsc"
            }
        },
        {
            "id": "setting_sys_pvrpre_str1",
            "description": "",
            "CaEType": "div",
            "disable": false
        },
        {
            "id": "setting_sys_pvr_pretime",
            "description": "",
            "CaEType": "div",
            "disable": false,
            enableHtml: true
        },
        {
            "id": "setting_sys_pvr_ul1",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo": "setting_sys_defer_ul1", "upTo": "setting_sys_pvr_btn2"},
            "classes": {
                "normal": "setting_sys_navibar4_normal_pvr", "focus": "setting_sys_navibar4_focus","dataSelected":"setting_sys_navibar4_dataselect",
                "disable":"setting_sys_navibar4_disable", "disableDataSelected":"setting_sys_navibar4_data_dis_select" ,"disable":"setting_sys_navibar4_disable"
            },
            "handler": {
                "aftEnterHandler": "SettingSysPvrUl1Enter",
                "aftEscHandler": "SettingSysPvrEsc"
            },
            oriCaE: [
                {
                    "id": "setting_sys_pvr_pre_li",
                    "description": "名称",
                    "CaEType": "span",
                    enableHtml: true
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_sys_pvr_pre_li"]
            }
        },
        {
            "id": "setting_sys_pvrdefer_str1",
            "description": "",
            "CaEType": "div",
            "disable": false
        },
        {
            "id": "setting_sys_pvr_defertime",
            "description": "",
            "CaEType": "div",
            "disable": false,
            enableHtml: true
        },
        {
            "id": "setting_sys_defer_ul1",
            "description": "列表项目",
            "CaEType": "NavigationBar",
            "disable": false,
            "SelectedIndex": 0,
            "nav": { "upTo": "setting_sys_pvr_ul1"},
            "classes": {
                "normal": "setting_sys_navibar4_normal_pvr", "focus": "setting_sys_navibar4_focus","dataSelected":"setting_sys_navibar4_dataselect",
                "disableDataSelected":"setting_sys_navibar4_data_dis_select" ,"disable":"setting_sys_navibar4_disable"
            },
            "handler": {
                "aftEnterHandler": "SettingSysPvrUl2Enter",
                "aftEscHandler": "SettingSysPvrEsc"
            },
            oriCaE: [
                {
                    "id": "setting_sys_pvr_defer_li",
                    "description": "名称",
                    "CaEType": "span",
                    enableHtml: true
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_sys_pvr_defer_li"]
            }
        }
    ];

    SettingPVRinit();

    return PageDataSettingSysPvr;

}

var PageDataSettingSysPvr={

    "setting_sys_pvr_head_img1":{Data:"img/head_arrow.png"},
    "setting_sys_pvr_head_text1":{Data:"PVR & T.Shift"},
    "setting_sys_pvr_str1":{Data:"PVR setup:"},
    "setting_sys_pvr_btn1":{Data:"Adjust","disable":false},
    "setting_sys_pvr_str2":{Data:"Time shift setup:"},
    "setting_sys_pvr_btn2":{Data:"Adjust","disable":false},
    "setting_sys_pvr_time_str1":{Data:"PVR time setting"},
    "setting_sys_pvrpre_str1":{Data:"Start in advance:"},
    "setting_sys_pvr_pretime":{Data:"0 minute"},
    "setting_sys_pvr_ul1":{Data:[
        {"setting_sys_pvr_pre_li":{Data:"0 minute"}},
        {"setting_sys_pvr_pre_li":{Data:"1 minute"}},
        {"setting_sys_pvr_pre_li":{Data:"2 minutes"}},
        {"setting_sys_pvr_pre_li":{Data:"5 minutes"}}
    ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disable":false},
    "setting_sys_pvrdefer_str1":{Data:"Delay ending:"},
    "setting_sys_pvr_defertime":{Data:"0 minute"},
    "setting_sys_defer_ul1": {Data:[
        {"setting_sys_pvr_defer_li":{Data:"0 minute"}},
        {"setting_sys_pvr_defer_li":{Data:"1 minute"}},
        {"setting_sys_pvr_defer_li":{Data:"2 minutes"}},
        {"setting_sys_pvr_defer_li":{Data:"5 minutes"}}
    ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disable":false
    },
    "operateData":{
	    "partitionNumber":0,
        "pretime":0,
        "defertime":0
    },
    "langData":{
        "PVR & T.Shift": [],
        "Adjust": [],
	    "PVR setup:": [],
	    "Time shift setup:": [],
        "PVR time setting": [],
        "Start in advance:": [],
        "Delay ending:": [],
	    "0 minute": [],
	    "1 minute": [],
	    "2 minutes": [],
	    "5 minutes": []
    },
    rewrite:function(pageData){
        pageData.setting_sys_pvr_pretime.Data=pageData.setting_sys_pvr_ul1.Data[pageData.operateData.pretime].setting_sys_pvr_pre_li.Data;
        pageData.setting_sys_pvr_defertime.Data=pageData.setting_sys_defer_ul1.Data[pageData.operateData.defertime].setting_sys_pvr_defer_li.Data;
        pageData.setting_sys_pvr_ul1.DataSelectedIndex=pageData.operateData.pretime;
        pageData.setting_sys_defer_ul1.DataSelectedIndex=pageData.operateData.defertime;
        pageData.setting_sys_pvr_ul1.SelectedIndex=pageData.operateData.pretime;
        pageData.setting_sys_defer_ul1.SelectedIndex=pageData.operateData.defertime;

	    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
		    pageData.setting_sys_pvr_head_img1.Data="img/head_arrow.png";
		    $(".setting_page_line").css("float","left");
		    $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
		    $("#setting_sys_pvr_btn1").css('float', 'right');
		    $("#setting_sys_pvr_btn2").css('float', 'right');
		    $(".setting_sys_lang1__pvr").css("left","510px");
	    }
	    else {
		    pageData.setting_sys_pvr_head_img1.Data="img/head_arrow_right.png";
		    $(".setting_sys_pvr_whole").css('right', '65px');
		    $(".setting_page_line").css("float","right");
		    $(".setting_sys_lang1__pvr").css("left","328px");
		    $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")');
		    $("#setting_sys_pvr_btn1").css('float', 'left');
		    $("#setting_sys_pvr_btn2").css('float', 'left');
		    $(".setting_sys_lang1_head_blank1").css('display', 'none');
	    }

    }
};

var timeList = [0,1,2,5];

function SettingPVRinit()
{
	var index;
	var tempLeadTime;
	var	tempTrailingTime;

	try {
		tempLeadTime = model.pvr.getLeadTime();
	} catch(e) {
		debugRME(e.message);
	}
	debugRM("getRecorderLeadTime :" + tempLeadTime);

	index = _getIndex(timeList,tempLeadTime);

	if(index > -1)
	{
		PageDataSettingSysPvr.operateData.pretime = index;
	}
	else
	{
		PageDataSettingSysPvr.operateData.pretime = 0;
		try {
			model.pvr.setLeadTime(0);
		} catch(e) {
			debugRME(e.message);
		}
	}

	try {
		tempTrailingTime = model.pvr.getTrailingTime();
	} catch(e) {
		debugRME(e.message);
	}
	debugRM("getRecorderTrailingTime :" + tempTrailingTime);

	index = _getIndex(timeList,tempTrailingTime)

	if(index > -1)
	{
		PageDataSettingSysPvr.operateData.defertime = index;
	}
	else
	{
		PageDataSettingSysPvr.operateData.defertime = 0;
		try {
			model.pvr.setTrailingTime(0);
		} catch(e) {
			debugRME(e.message);
		}
	}
}

function SettingSysPvrBtn1Enter()
{
	SetRecentUse("PVR & T.Shift",4,RECNT_AD);
	PageDataSetttingSysdiskcheck.operateData.parentpage = "pvr";
	setting_sys_volumeList = [];
	PartitionsInit();
}

function SettingSysPvrBtn2Enter()
{
	SetRecentUse("PVR & T.Shift",4,RECNT_AD);
	PageDataSetttingSysdiskcheck.operateData.parentpage = "timeshift";
	setting_sys_volumeList = [];
	PartitionsInit();
}

var setting_sys_volumeList = [];

function PartitionsInit() {

	PageDataSetttingSysdiskcheck.operateData.curTextIndex = 0;
	hiWebOsFrame.settingssysdiskcheck.rewriteDataOnly();
	hiWebOsFrame.settingssysdiskcheck.open();
	hiWebOsFrame.settingssysdiskcheck.hiFocus();

	var usbList = getUsbListPVRTshift();
	debugRM("Now List is (are) :~" + usbList + "~");
	var tmpParPath = [];
	var tmpParName = [];
	var tmpParUuid = [];
	if (!!usbList)
	{
		debugRM("usbLength :" + usbList.length);
		for (var i = 0, temp = 0; i < usbList.length; ++i)
		{
			if(!!usbList[i])
			{
				tmpParPath[temp] = usbList[temp].split(";")[0];
				debugRM("Current mnt path :" + tmpParPath[temp]);
				tmpParName[temp] = usbList[temp].split(";")[1];
				debugRM("Current mnt name :" + tmpParName[temp]);
				tmpParUuid[temp] = usbList[temp].split(";")[2];
				debugRM("Current mnt uuid :" + tmpParUuid[temp]);
				++temp;
			}
		}
		debugRM("Current partition's numbers :" + tmpParPath.length);
		PageDataSettingSysPvr.operateData.partitionNumber = tmpParPath.length;
		if(PageDataSetttingSysdiskcheck.operateData.parentpage == "pvr")
		{
			var tmpUid = "";
			var pvrFlag = 0;
			try{
				tmpUid = model.pvr.getStationUuid();
			}catch (e){
				debugE(e.message);
			}
			debugRM("Last Pvr Uuid :" + tmpUid);
			for(var j = 0; j < tmpParPath.length; ++j)
			{
				var pvrParInfo = {};
				pvrParInfo.path = tmpParPath[j];
				if(tmpParName[j] != "")
				{
					pvrParInfo.name = tmpParName[j];
				}
				else
				{
					pvrParInfo.name = "External device " + (j+1);
				}
				pvrParInfo.uuid = tmpParUuid[j];
				if( !!tmpUid && (tmpUid == tmpParUuid[j]) )
				{
					pvrFlag = 1;
					PageDataSettingPvrList.operateData.curselectpartition = j;
					PageDataSettingPvrList.setting_sys_pvr_list_ul1.SelectedIndex = j;
				}
				pvrParInfo.free = 0;
				setting_sys_volumeList.push(pvrParInfo);
			}
			if(!pvrFlag)
			{
				PageDataSettingPvrList.operateData.curselectpartition = -1;
			}
//			onPvrParInfoChanged(0,0,null);
			debugRM("setting_sys_volumeList :" + JSON.stringify(setting_sys_volumeList));
			hiWebOsFrame.settingssysdiskcheck.close();
			PageDataSettingPvrList.operateData.parentpage = PageDataSetttingSysdiskcheck.operateData.parentpage;
			hiWebOsFrame.settingssyspvrlist.open();
			hiWebOsFrame.settingssyspvrlist.hiFocus();
		}
		else if(PageDataSetttingSysdiskcheck.operateData.parentpage == "timeshift")
		{
			var tmpUuid = "";
			var tmpSize = -1;
			var tshiftFlag = 0;
			try{
				tmpUuid = model.timeshift.getUuid();
			}catch (e){
				debugE(e.message);
			}
			debugRM("Last T-shift Uuid :" + tmpUuid);
			for(var k = 0; k < tmpParPath.length; ++k)
			{
				var tshiftParInfo = {};
				tshiftParInfo.path = tmpParPath[k];
				if(tmpParName[k] != "")
				{
					tshiftParInfo.name = tmpParName[k];
				}
				else
				{
					tshiftParInfo.name = "External device " + (k+1);
				}
				tshiftParInfo.uuid = tmpParUuid[k];
				if( !!tmpUuid && (tmpUuid == tmpParUuid[k]) )
				{
					tshiftFlag =1;
					PageDataSettingPvrList.operateData.curselectpartition = k;
					PageDataSettingPvrList.setting_sys_pvr_list_ul1.SelectedIndex = k;
					PageDataSettingPvrList.operateData.preuuidselect = k
					try{
						tmpSize = parseInt(model.timeshift.getMemSize());
					}catch (e){
						debugE(e.message);
					}
					debugRM("Last T-shift Size :" + tmpSize);
					PageDataSettingPvrList.operateData.presize = tmpSize;
				}
				tshiftParInfo.free = 0;
				setting_sys_volumeList.push(tshiftParInfo);
			}
			if(!tshiftFlag)
			{
				PageDataSettingPvrList.operateData.curselectpartition = -1;
			}
//			onTshiftParInfoChanged(0,0,null);
			debugRM("setting_sys_volumeList :" + JSON.stringify(setting_sys_volumeList));
			hiWebOsFrame.settingssysdiskcheck.close();
			PageDataSettingPvrList.operateData.parentpage = PageDataSetttingSysdiskcheck.operateData.parentpage;
			hiWebOsFrame.settingssyspvrlist.open();
			hiWebOsFrame.settingssyspvrlist.hiFocus();
		}
	}
	else
	{   //无挂载点
		hiWebOsFrame.settingssysdiskcheck.close();
		PageDataSetttingSysPvrCheck.operateData.curListIndex = 3;
		hiWebOsFrame.pvrCheck.rewriteDataOnly();
		hiWebOsFrame.pvrCheck.open();
		hiWebOsFrame.pvrCheck.hiFocus();
	}
}

function onPvrParInfoChanged(i,id,value)
{
	if(i > 0)
	{
		setting_sys_volumeList[i-1].free = value[1];
	}
	var index = i;
	try{
		model.pvr.ParInfo(setting_sys_volumeList[i].path);
		if(i == setting_sys_volumeList.length - 1)
		{
			model.pvr.getPvrParInfo = onPvrParInfoChangedEnd;
		}
		else
		{
			++index;
			model.pvr.getPvrParInfo = onPvrParInfoChanged.bind(this,index);
		}
	}catch (e){
		debugE(e.message);
	}

}

function onPvrParInfoChangedEnd(id,value)
{
	setting_sys_volumeList[setting_sys_volumeList.length - 1].free = value[1];
	debugRM("setting_sys_volumeList :" + JSON.stringify(setting_sys_volumeList));
	hiWebOsFrame.settingssysdiskcheck.close();
	PageDataSettingPvrList.operateData.parentpage = PageDataSetttingSysdiskcheck.operateData.parentpage;
	hiWebOsFrame.settingssyspvrlist.open();
	hiWebOsFrame.settingssyspvrlist.hiFocus();
}

function onTshiftParInfoChanged(i,id,value)
{
	debugRM("~~~~~~~~~~~~~~" + value);
	if(i > 0)
	{
		setting_sys_volumeList[i-1].free = value[1];
	}
	var index = i;
	try{
		model.timeshift.ParInfo(setting_sys_volumeList[i].path);
		debugRM("!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~" + setting_sys_volumeList[i].path);
		if(i == setting_sys_volumeList.length - 1)
		{
			model.timeshift.getTshiftParInfo = onTshiftParInfoChangedEnd;
		}
		else
		{
			++index;
			model.timeshift.getTshiftParInfo = onTshiftParInfoChanged.bind(this,index);
		}
	}catch (e){
		debugE(e.message);
	}
}

function onTshiftParInfoChangedEnd(id,value)
{
	setting_sys_volumeList[setting_sys_volumeList.length - 1].free = value[1];
	debugRM("setting_sys_volumeList :" + JSON.stringify(setting_sys_volumeList));
	hiWebOsFrame.settingssysdiskcheck.close();
	PageDataSettingPvrList.operateData.parentpage = PageDataSetttingSysdiskcheck.operateData.parentpage;
	hiWebOsFrame.settingssyspvrlist.open();
	hiWebOsFrame.settingssyspvrlist.hiFocus();
}

function getUsbListPVRTshift() {
	var testStr = "";
	try {
		testStr = Hisense.File.read("usbs", 0);
	}
	catch (e) {
		debugRME(e.message);

	}
	debugPrint(testStr);
	if (isNaN(testStr)) {
		//debugPrint(testStr.split("\n")[1]);
		if (testStr.split("\n").length > 0) {
			return uniqueListPVRTshift(testStr.split("\n"));
		}
		else {
			debugRM("NO USB DEVICE NOW!!!!");
			return null;
		}
	}
	else {
		debugRME("Can't read the file :/tmp/usbs!");
		return null;
	}
}

function uniqueListPVRTshift(arr) {
	var arrTmp = [];
	for (var i = 0; i < arr.length; i++) {
		debugRM(arr[i] + "_____" + arrTmp.indexOf(arr[i]));
		if (arr[i] != ";")
			if (arrTmp.indexOf(arr[i]) == -1) {
				arrTmp.push(arr[i]);
			}
	}
	return arrTmp;
}

function SettingSysPvrUl1Enter()
{
	SetRecentUse("PVR & T.Shift",4,RECNT_AD);
    SetPVrPretime(this.SelectedIndex);
    PageDataSettingSysPvr.operateData.pretime = this.SelectedIndex;
    this.page.data.setting_sys_pvr_ul1.DataSelectedIndex = this.SelectedIndex;
    this.page.rewriteDataOnly();
}

function SetPVrPretime(value)
{
	debugRM("setLeadTime :" + timeList[value]);
	try {
		model.pvr.setLeadTime(timeList[value]);
	} catch(e) {
		debugRME(e.message);
	}
}

function SettingSysPvrUl2Enter()
{
	SetRecentUse("PVR & T.Shift",4,RECNT_AD);
    SetPVrdefertime(this.SelectedIndex);
    PageDataSettingSysPvr.operateData.defertime = this.SelectedIndex;
    this.page.data.setting_sys_defer_ul1.DataSelectedIndex = this.SelectedIndex;
    this.page.rewriteDataOnly();
}

function SetPVrdefertime(value)
{
	debugRM("setTrailingTime :" + timeList[value]);
	try {
		model.pvr.setTrailingTime(timeList[value]);
	} catch(e) {
		debugRME(e.message);
	}
}

function SettingSysPvrEsc()
{
    this.page.close();
    hiWebOsFrame.settingssysad.open();
    hiWebOsFrame.settingssysad.hiFocus();
}

function SettingPVRpageOnDestroy()
{
    debugRM("hiWebOsFrame.settingssyspvr=null");
    hiWebOsFrame.settingssyspvr=null;
}

function SettingPVRpageOnOpen() {

	debugRM('SettingPVRpageOnOpen');
    if(hiWebOsFrame.getCurrentArea()=="EU")
    {
        $("#setting_sys_pvr_helpinfo").css("display","block");
    }
    else
    {
        $("#setting_sys_pvr_helpinfo").css("display","none");
    }
}

function SettingSysPvrEscPageLeft() {
	if(hiWebOsFrame.getHTMLDir() == HTMLDIR.RTL) {
		return;
	}
	this.page.close();
	hiWebOsFrame.settingssysad.open();
	hiWebOsFrame.settingssysad.hiFocus();
}

function SettingSysPvrEscPageRight() {
	if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
		return;
	}
	this.page.close();
	hiWebOsFrame.settingssysad.open();
	hiWebOsFrame.settingssysad.hiFocus();
}