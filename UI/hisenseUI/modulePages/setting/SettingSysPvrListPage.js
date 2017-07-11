/**
 * Created by Administrator on 14-6-18.
 */
function getSettingSysPvrListPageData(opt)
{
    opt.CaE= [
        {
            "id": "setting_sys_pvr_list_title",
            "description": "setting head",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_pvr_list_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
			"ULPageMode": true,
            "disable": false,
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },
            "handler": {
                "befEnterHandler": "SettingSyspvrlistEnHandler", "aftDownHandler": "SettingSysPvrListDownHandler",
                "aftUpHandler": "SettingSysPvrListUpHandler","aftEscHandler": "SettingSysList2EscHandler"
            },
            oriCaE: [
                {
                    "id": "setting_sys_pvr_list_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_pvr_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {
                "UlDataItem": [ "setting_sys_pvr_list_txt1", "setting_sys_pvr_list_img1"],
                "PageSize":3
            }
        }
    ];
    return PageDataSettingPvrList;
}

var PageDataSettingPvrList={

    "setting_sys_pvr_list_title":{Data:"Select disk"},
    "setting_sys_pvr_list_ul1": {Data:[
        {
            "setting_sys_pvr_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_pvr_list_txt1": {Data:"c"}
        },
        {
            "setting_sys_pvr_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_pvr_list_txt1": {Data:"d"}
        },
        {
            "setting_sys_pvr_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_pvr_list_txt1": {Data:"e"}
        },
        {
            "setting_sys_pvr_list_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_pvr_list_txt1": {Data:"f"}
        }
    ],
        "SelectedIndex":0
    },
    "operateData": {
        "titlelist":["Select partition","Select space size"],
        "memlist":["1G","1.5G","2G","2.5G","3G","3.5G","4G"],
        "memindex":[2,3,4,5,6,7,8],
        "parentpage":"pvr",
        "curstep":0,
        "curtitle":0,
        "curselectpartition":-1,
        "curselectmemmory":-1,
	    "preuuidselect":-1,
	    "presize":-1,
        "curvolumlist":[
			{
				"path":"/mnt",
				"name":"c",
				"uuid":"0",
				"free":0
			},
			{
				"path":"/mnt",
				"name":"d",
				"uuid":"0",
				"free":0
			}
        ]
    },
    "langData":{
        "Select partition": [],
        "Select space size": []
    },
    rewrite:function(pageData)
    {
        var element={};
        pageData.setting_sys_pvr_list_title.Data = pageData.operateData.titlelist[pageData.operateData.curtitle];
        pageData.setting_sys_pvr_list_ul1.Data = [];
        if(pageData.operateData.curstep == 0) // select mount for pvr & Tshift
        {
            $.each(pageData.operateData.curvolumlist, function (k, v) {
                element.setting_sys_pvr_list_img1 = {};
                element.setting_sys_pvr_list_txt1 = {};
                if(pageData.operateData.curselectpartition == k)
                {
                    element.setting_sys_pvr_list_img1.Data = "img/selectedBall.png";
                }
                else
                {
                    element.setting_sys_pvr_list_img1.Data = "img/unselectedBall.png";
                }
                element.setting_sys_pvr_list_txt1.Data = v.name;
                pageData.setting_sys_pvr_list_ul1.Data.push(_cloneObj(element));
            });
            if(pageData.operateData.curselectpartition == -1)
            {
                pageData.setting_sys_pvr_list_ul1.SelectedIndex = 0;
            }
        }
        else if(pageData.operateData.curstep == 1) // select memory for Tshift
        {
			for(var i = 0;i < pageData.operateData.memindex.length; i++)
			{
				if(pageData.operateData.curvolumlist[pageData.operateData.curselectpartition].free > pageData.operateData.memindex[i]*512*1024*1024)
				{
					element.setting_sys_pvr_list_img1 = {};
					element.setting_sys_pvr_list_txt1 = {};
					if(pageData.operateData.curselectmemmory == i)
					{
					    element.setting_sys_pvr_list_img1.Data = "img/selectedBall.png";
					}
					else
					{
					    element.setting_sys_pvr_list_img1.Data = "img/unselectedBall.png";
					}
					element.setting_sys_pvr_list_txt1.Data = pageData.operateData.memlist[i];
					pageData.setting_sys_pvr_list_ul1.Data.push(_cloneObj(element));
				}
			}
			if( (pageData.operateData.curselectmemmory == -1) || (pageData.operateData.curselectmemmory > pageData.setting_sys_pvr_list_ul1.Data.length) )
			{
			    pageData.setting_sys_pvr_list_ul1.SelectedIndex = 0;
			}
	        else
			{
				pageData.setting_sys_pvr_list_ul1.SelectedIndex = pageData.operateData.curselectmemmory;
			}
        }

	    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
		    $(".setting_sys_mt_ul1").css("float","left");
		    $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
	    }
	    else {
		    $(".setting_sys_mt_ul1").css("float","right");
		    $(".setting_sys_mt_ul1").css("margin","0 65px 0 0");
	    }

    }
};

function SettingSysPvrListopenHandler()
{
	debugRM("curstep:" + PageDataSettingPvrList.operateData.curstep);
	debugRM("curtitle:" + PageDataSettingPvrList.operateData.curtitle);
	debugRM("curselectpartition:" + PageDataSettingPvrList.operateData.curselectpartition);
	debugRM("curselectmemmory:" + PageDataSettingPvrList.operateData.curselectmemmory);
	debugRM("preuuidselect:" + PageDataSettingPvrList.operateData.preuuidselect);
	debugRM("presize:" + PageDataSettingPvrList.operateData.presize);

	if(0 == PageDataSettingPvrList.operateData.curstep)
	{
		var element = {};
		PageDataSettingPvrList.operateData.curvolumlist=[];
		for(var i = 0;i < PageDataSettingSysPvr.operateData.partitionNumber; ++i)
		{
			element.path = setting_sys_volumeList[i].path;
			element.name = setting_sys_volumeList[i].name;
			element.uuid = setting_sys_volumeList[i].uuid;
			element.free = setting_sys_volumeList[i].free;
			PageDataSettingPvrList.operateData.curvolumlist.push(_cloneObj(element));
		}
	}

	this.page.rewrite();

	Updatalist2ScrollBar(this.data);
	if(PageDataSettingPvrList.setting_sys_pvr_list_ul1.Data.length > 3)
	{
		var index = this.page.getCaE("setting_sys_pvr_list_ul1").BeginIdx;
		$("#setting_sys_pvr_list_srcollbar").css("top",parseInt(235 / PageDataSettingPvrList.setting_sys_pvr_list_ul1.Data.length)*index);
	}
}

function Updatalist2ScrollBar(pageData)
{
    var i = pageData.setting_sys_pvr_list_ul1.Data.length;
    if(i > 3)
    {
        var temp = parseInt(235/i*3);
        $("#setting_sys_pvr_list_srcollbar").css("height",temp);
        $("#setting_sys_pvr_list_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_pvr_list_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step = parseInt(235/i);
}

var tmpSelectIndex = -1;
var tmpSetTimeOut = null;

function SettingSyspvrlistEnHandler()
{
    if(0 == this.page.operateData.curstep)
    {
	    if(this.page.operateData.parentpage == "pvr")
	    {
		    var usbExist = getUsbListPVRTshift();
		    if(!!usbExist)
		    {
			    if( !! (this.page.operateData.curvolumlist[this.SelectedIndex].uuid) )
			    {
				    this.page.operateData.curselectpartition = this.SelectedIndex;
				    this.page.rewriteDataOnly();
				    this.page.close();

				    debugRM("Set Pvr Uuid to e2 :" + this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
				    try{
					    model.pvr.setStationUuid(this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
					    model.pvr.SpeedTest(this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].path);
				    }catch (e){
					    debugE(e.message);
				    }
				    try{
					    model.pvr.getPvrSpeed = onPvrSpeedChanged;
				    }catch (e){
					    debugE(e.message);
				    }
				    tmpSetTimeOut = setTimeout(function(){
					    hiWebOsFrame.settingssysdiskcheck.close();
					    PageDataSetttingSysPvrCheck.operateData.curListIndex = 5;
					    hiWebOsFrame.pvrCheck.rewriteDataOnly();
					    hiWebOsFrame.pvrCheck.open();
					    hiWebOsFrame.pvrCheck.hiFocus();
				    }, 5 * 1000);
			    }
			    else
			    {
				    this.page.close();
				    PageDataSetttingSysPvrCheck.operateData.curListIndex = 5;
				    hiWebOsFrame.pvrCheck.rewriteDataOnly();
				    hiWebOsFrame.pvrCheck.open();
				    hiWebOsFrame.pvrCheck.hiFocus();
			    }
		    }
		    else
		    {
			    this.page.close();
			    PageDataSetttingSysPvrCheck.operateData.curListIndex = 3;
			    hiWebOsFrame.pvrCheck.rewriteDataOnly();
			    hiWebOsFrame.pvrCheck.open();
			    hiWebOsFrame.pvrCheck.hiFocus();
		    }
	    }
	    else if(this.page.operateData.parentpage == "timeshift")
	    {
		    var usbExist = getUsbListPVRTshift();
		    if(!!usbExist)
		    {
			    if( !! (this.page.operateData.curvolumlist[this.SelectedIndex].uuid) )
			    {
				    tmpSelectIndex = this.page.operateData.curselectpartition;
				    this.page.operateData.curselectpartition = this.SelectedIndex;

				    try{
					    debugRM("Set Timeshift Uuid to e2 :" + this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
					    model.timeshift.setUuid(this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
					    debugRM("Set path to config if the current partition registered or not:" + this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].path);
					    model.timeshift.IsRegistered(this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].path);
					    model.timeshift.getTshiftIsRegistered = onTshiftIsRegisteredChanged;
				    }catch (e){
					    debugE(e.message);
				    }
			    }
			    else
			    {
				    this.page.close();
				    PageDataSetttingSysPvrCheck.operateData.curListIndex = 5;
				    hiWebOsFrame.pvrCheck.rewriteDataOnly();
				    hiWebOsFrame.pvrCheck.open();
				    hiWebOsFrame.pvrCheck.hiFocus();
			    }
		    }
		    else
		    {
			    this.page.close();
			    PageDataSetttingSysPvrCheck.operateData.curListIndex = 3;
			    hiWebOsFrame.pvrCheck.rewriteDataOnly();
			    hiWebOsFrame.pvrCheck.open();
			    hiWebOsFrame.pvrCheck.hiFocus();
		    }
	    }
    }
	else if(1 == this.page.operateData.curstep)
    {
	    this.page.operateData.curselectmemmory = this.SelectedIndex;
	    this.page.rewriteDataOnly();
		this.page.close();
	    PageDataSetttingSysdiskcheck.operateData.curTextIndex = 1;
	    hiWebOsFrame.settingssysdiskcheck.rewriteDataOnly();
	    hiWebOsFrame.settingssysdiskcheck.open();
	    hiWebOsFrame.settingssysdiskcheck.hiFocus();

	    var usbExist = getUsbListPVRTshift();
	    if(!!usbExist)
	    {
		    try{
			    debugRM("Set Timeshift Size to e2 :" + this.page.operateData.memindex[this.page.operateData.curselectmemmory]);
			    model.timeshift.setMemSize(this.page.operateData.memindex[this.page.operateData.curselectmemmory]);
			    model.timeshift.SetPar();
			    model.timeshift.getRegisterReturnValue = registerTestResult_Tshift;
		    }catch (e){
			    debugE(e.message);
		    }
		    tmpSetTimeOut = setTimeout(function(){
			    hiWebOsFrame.settingssysdiskcheck.close();
			    PageDataSetttingSysPvrCheck.operateData.curListIndex = 5;
			    hiWebOsFrame.pvrCheck.rewriteDataOnly();
			    hiWebOsFrame.pvrCheck.open();
			    hiWebOsFrame.pvrCheck.hiFocus();
		    }, 10 * 1000);
	    }
		else
		{
			hiWebOsFrame.settingssysdiskcheck.close();
			PageDataSetttingSysPvrCheck.operateData.curListIndex = 3;
			hiWebOsFrame.pvrCheck.rewriteDataOnly();
			hiWebOsFrame.pvrCheck.open();
			hiWebOsFrame.pvrCheck.hiFocus();
		}
    }
}

function onTshiftIsRegisteredChanged(id, value)
{
	debugRM("IsRegisteredReceived:" + value);
	if(-1 == value)
	{
		debugRM("Set path to get free space :" + PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].path);
		model.timeshift.ParInfo(PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].path);
		model.timeshift.getTshiftParInfo = onTshiftParInfoChanged;
	}
	else
	{
		var tmpValue = value / 512;
		debugRM("Registered, now set space size:" + tmpValue);
		try{
			model.timeshift.setMemSize(tmpValue);
		}catch (e){
			debugE(e.message);
		}

		hiWebOsFrame.settingssyspvrlist.close();
		PageDataSetttingSysPvrCheck.operateData.curListIndex = 0;
		hiWebOsFrame.pvrCheck.rewriteDataOnly();
		hiWebOsFrame.pvrCheck.open();
		hiWebOsFrame.pvrCheck.hiFocus();
	}

}

function onPvrSpeedChanged(id,value)
{
	debugRM("PvrSpeedReceived:" + value);
	clearTimeout(tmpSetTimeOut);
	tmpSetTimeOut = null;

//	if(hiWebOsFrame.getCurrentPageId() != "setting_sys_diskcheck_page")
//	{
//		return;
//	}

	if(value >= 5)
	{
		PageDataSetttingSysPvrCheck.operateData.curListIndex = 0;
		hiWebOsFrame.pvrCheck.rewriteDataOnly();
		hiWebOsFrame.pvrCheck.open();
		hiWebOsFrame.pvrCheck.hiFocus();
	}
	else if(value > 0)
	{
		PageDataSetttingSysPvrCheck.operateData.curListIndex = 4;
		hiWebOsFrame.pvrCheck.rewriteDataOnly();
		hiWebOsFrame.pvrCheck.open();
		hiWebOsFrame.pvrCheck.hiFocus();
	}
	else
	{
		PageDataSetttingSysPvrCheck.operateData.curListIndex = 1;
		hiWebOsFrame.pvrCheck.rewriteDataOnly();
		hiWebOsFrame.pvrCheck.open();
		hiWebOsFrame.pvrCheck.hiFocus();
	}
}

function onTshiftParInfoChanged(id,value)
{
	PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].free = value[1];

	debugRM("Current Page :" + PageDataSettingPvrList.operateData.parentpage);
	debugRM("Current path :" + PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].path);
	debugRM("Current name :" + PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].name);
	debugRM("Current uuid :" + PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].uuid);
	debugRM("Current free :" + PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].free);

	var minimumValue = 1073741824;

	if(PageDataSettingPvrList.operateData.curvolumlist[PageDataSettingPvrList.operateData.curselectpartition].free < minimumValue)
	{
		PageDataSettingPvrList.operateData.curselectpartition = tmpSelectIndex;
		hiWebOsFrame.settingssyspvrlist.rewriteDataOnly();
		hiWebOsFrame.settingssyspvrlist.close();
		PageDataSetttingSysPvrCheck.operateData.curListIndex = 2;
		hiWebOsFrame.pvrCheck.rewriteDataOnly();
		hiWebOsFrame.pvrCheck.open();
		hiWebOsFrame.pvrCheck.hiFocus();
	}
	else
	{
		hiWebOsFrame.pvrCheck.rewriteDataOnly();
		hiWebOsFrame.pvrCheck.close();
		tmpSelectIndex = -1;
		PageDataSettingPvrList.operateData.curtitle = 1;
		PageDataSettingPvrList.operateData.curstep = 1;
		if(PageDataSettingPvrList.operateData.preuuidselect == PageDataSettingPvrList.operateData.curselectpartition)
		{
			PageDataSettingPvrList.operateData.curselectmemmory = _getIndex(PageDataSettingPvrList.operateData.memindex,PageDataSettingPvrList.operateData.presize)
		}
		else
		{
			PageDataSettingPvrList.operateData.curselectmemmory = -1;
		}
		debugRM("PageDataSettingPvrList.operateData.curselectmemmory :" + PageDataSettingPvrList.operateData.curselectmemmory);
        if(hiWebOsFrame.getCurrentArea() == "EU"){
            hiWebOsFrame.settingssyspvrlist.close();
            hiWebOsFrame.createPage("SettingThiftHdSizeList", null, null, null, function (page) {
                hiWebOsFrame.SettingThiftHdSizeList = page;
                setting_setLeftParInfo(value[1]);
                page.open();
                page.hiFocus();
            });
        }else{
            hiWebOsFrame.settingssyspvrlist.open();
            hiWebOsFrame.settingssyspvrlist.hiFocus();
        }
	}
}

function registerTestResult_Tshift(id,value)
{
	if(value != 0)
	{
		clearTimeout(tmpSetTimeOut);
		tmpSetTimeOut = null;
	}

	if(hiWebOsFrame.getCurrentPageId() != "setting_sys_diskcheck_page")
	{
		return;
	}
	
	var setTime = null;
	debugRM("T-shift register received :" + value);
	switch (parseInt(value))
	{
		case 1:
//			model.timeshift.getRegisterReturnValue = registerTestResult_Tshift;
			setTime = setTimeout(function(){
				debugRM("T-shift register success!!!");
				hiWebOsFrame.settingssysdiskcheck.close();
				PageDataSetttingSysPvrCheck.operateData.curListIndex = 0;
				hiWebOsFrame.pvrCheck.rewriteDataOnly();
				hiWebOsFrame.pvrCheck.open();
				hiWebOsFrame.pvrCheck.hiFocus();
			}, 15 * 1000);
			break;
		case -1:
		case 5:
		case 9:
		case 14:
			clearTimeout(setTime);
			setTime = null;
			debugRM("T-shift register fail!!!");
			hiWebOsFrame.settingssysdiskcheck.close();
			PageDataSetttingSysPvrCheck.operateData.curListIndex = 1;
			hiWebOsFrame.pvrCheck.rewriteDataOnly();
			hiWebOsFrame.pvrCheck.open();
			hiWebOsFrame.pvrCheck.hiFocus();
			break;
		case 12:
			clearTimeout(setTime);
			setTime = null;
			debugRM("T-shift register success, but low speed!!!");
			hiWebOsFrame.settingssysdiskcheck.close();
			PageDataSetttingSysPvrCheck.operateData.curListIndex = 4;
			hiWebOsFrame.pvrCheck.rewriteDataOnly();
			hiWebOsFrame.pvrCheck.open();
			hiWebOsFrame.pvrCheck.hiFocus();
			break;
		case 13:
			clearTimeout(setTime);
			setTime = null;
			debugRM("T-shift register success!!!");
			hiWebOsFrame.settingssysdiskcheck.close();
			PageDataSetttingSysPvrCheck.operateData.curListIndex = 0;
			hiWebOsFrame.pvrCheck.rewriteDataOnly();
			hiWebOsFrame.pvrCheck.open();
			hiWebOsFrame.pvrCheck.hiFocus();
			break;
		default :
			clearTimeout(setTime);
			setTime = null;
			debugRM("T-shift received value :" + value);
			break;
	}
}

function SettingSysList2EscHandler() {

    if(this.page.operateData.curstep==0)
    {
	    this.page.close();
	    this.page.operateData.curselectpartition=0;
	    hiWebOsFrame.settingssyspvr.open();
	    hiWebOsFrame.settingssyspvr.hiFocus();
    }
	else if(this.page.operateData.curstep==1)
    {
        this.page.operateData.curtitle=0;
        this.page.operateData.curstep=0;
	    this.page.operateData.curselectmemmory=0;
	    this.page.open();
	    this.page.hiFocus();
    }

}

function SettingSysPvrListUpHandler() {

    var temp=PageDataSettingPvrList.setting_sys_pvr_list_ul1.Data.length;
    if(PageDataSettingPvrList.setting_sys_pvr_list_ul1.Data.length>3 &&this.SelectedIndex < (temp-3))
    {
        var temp=this.SelectedIndex*PageDataSettingPvrList.operateData.step;
        $("#setting_sys_pvr_list_srcollbar").css("top",temp);
    }
}

function SettingSysPvrListDownHandler() {

    if(this.SelectedIndex < PageDataSettingPvrList.setting_sys_pvr_list_ul1.Data.length&&this.SelectedIndex>2)
    {
        var temp=(this.SelectedIndex-2)*PageDataSettingPvrList.operateData.step;
        $("#setting_sys_pvr_list_srcollbar").css("top",temp);
    }
}

function SettingSysPvrListonDestroy()
{
	debugRM("hiWebOsFrame.settingssyspvrlist=null");
	PageDataSettingPvrList.operateData.curtitle = 0;
	PageDataSettingPvrList.operateData.curstep = 0;
	PageDataSettingPvrList.operateData.curselectpartition = -1;
	PageDataSettingPvrList.operateData.curselectmemmory = -1;
	PageDataSettingPvrList.operateData.preuuidselect = -1;
	PageDataSettingPvrList.operateData.presize = -1;
	hiWebOsFrame.settingssyspvrlist=null;
}