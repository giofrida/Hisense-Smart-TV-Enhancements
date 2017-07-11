/**
 * Created by Administrator on 14-6-17.
 */
//RobMyth-11-26-2014
var defaultNav = [
	{
		name: 'SAP'
	},
	{
		name: 'Audio Language'
	},
	{
		name: 'Caption Control'
	},
	{
		name: 'Audio Only'
	}
]

var defaultNavOnlyOne = [
	{
		name: 'Audio Only'
	}
]

var defaultNavOnlyTwo = [
	{
		name: 'Caption Control'
	},
	{
		name: 'Audio Only'
	}
]

var defaultRecentUse = [
    {
        name: 'Picture Mode',
        parentindex: 0,
        pageindex: 0
    },
    {
        name: 'Sound Mode',
        parentindex: 1,
        pageindex: 0
    },
	{
		name: 'Aspect Ratio',
		parentindex: 0,
		pageindex: FirPageSndIdx.PicAspectRatio
	},
	{
		name: 'Network Configuration',
		parentindex: 3,
		pageindex: 0
	}
]

var defaultRecentUseWith3D = [
	{
		name: 'Picture Mode',
		parentindex: 0,
		pageindex: 0
	},
	{
		name: 'Sound Mode',
		parentindex: 1,
		pageindex: 0
	},
	{
		name: 'Aspect Ratio',
		parentindex: 0,
		pageindex: FirPageSndIdx.PicAspectRatio
	},
	{
		name: '3D',
		parentindex: 0,
		pageindex: 6
	}
]

function getQuickSetupPageData(opts) {
    opts.CaE = [
        {
            id: 'setting_qsp_title',
            CaEType: 'span'
        },
	    {
		    id: 'setting_qsp_ul',
		    CaEType: 'Ul',
		    nav: {
		        downTo: 'setting_qsp_Modes'
	        },
		    handler: {
			    befEnterHandler: SettingQsTopFourEnHandler,
			    befRightHandler: SettingQsMoreEnHandler
		    },
		    oriCaE: [
			    {
				    id: 'setting_qsm_list',
				    CaEType: 'span'
			    }
		    ],
		    UlConfig: {
			    UlDataItem: [
				    'setting_qsm_list'
			    ]
		    }
	    },
	    {
		    id: 'setting_qs_history_txt',
		    CaEType: 'span'
	    },
        {
            id: 'setting_qsp_Modes',
            CaEType: 'Ul',
            nav: {
                upTo: 'setting_qsp_ul',
	            downTo: 'setting_qs_all_txt'
            },
	        handler: {
	            befEnterHandler: SettingQsRecentEnHandler,
	            befRightHandler: SettingQsMoreEnHandler
        },
            oriCaE: [
                {
                    id: 'setting_qsm_item',
                    CaEType: 'span'
                },
	            {
		            id: 'setting_qsm_marquee',
		            CaEType: 'span',
		            enableHtml: true
	            }
            ],
            UlConfig: {
                UlDataItem: [
                    'setting_qsm_item','setting_qsm_marquee'
                ]
            }
        },
	    {
		    id: 'setting_qs_all_txt',
		    CaEType: 'span',
		    classes: {
			    normal: "all_txt_normal", focus: "all_txt_focus"
		    },
		    nav: {
			    upTo: 'setting_qsp_Modes'
		    },
		    handler: {
			    befEnterHandler: SettingQsMoreEnHandler,
			    befRightHandler: SettingQsMoreEnHandler
		    }
	    },
        {
            id: 'setting_qsp_more',
            CaEType: 'span'
        },
	    {
		    id: 'setting_qsp_bottom_txt',
		    CaEType: 'span'
	    }
    ];
	qsPageDataInit();

    return PageDateQuickSet;

}

function qsPageDataInit()
{
    try
    {
	    debugRM("getCurrentChannelInfo :"+JSON.stringify(livetvmain.getCurrentChannelInfo()));
        PageDateQuickSet.operateData.selectedFlag = 0;
        PageDateQuickSet.operateData.hideflag=0;
	    PageDateQuickSet.operateData.twoFlag=0;
//	    var Support3d = model.video.get3dSupported();
//	    debugRM("!!!!!!!!!!!Support3d :" + Support3d);
//	    if(Support3d)
//	    {
//		    PageDateQuickSet.operateData.recentuse = defaultRecentUseWith3D;
//	    }
//	    else
//	    {
//		    PageDateQuickSet.operateData.recentuse = defaultRecentUse;
//	    }

	    var ifCurrentIn3DMode = 1 == model.video.get3dSupported() && 0 != model.video.getEnum3dMode();
	    debugE("ifCurrentIn3DMode:" + ifCurrentIn3DMode);

		if( SourceList.TV == livetvmain.getCurrentSource().innerId )
		{   //当前为LiveTV模式
			debugRM("Channel:LiveTV...");
			PageDateQuickSet.operateData.daItem = [];
			PageDateQuickSet.operateData.nav = defaultNav;

			var tmpccIndex=model.closedcaption.getControl();    //LiveTV下初始化Caption Control
			debugPrint("CCInit:"+tmpccIndex,DebugLevel.ERROR);
			PageDateQuickSet.operateData.curccindex=tmpccIndex;

			if( true == livetvmain.getNoSignalFlag() )
			{   //当前无信号
				var sap_audioLanguage_Disable = [0,1,2];
				debugPrint("Signal:No. Disable:SAP and Audio Language...Received value:" + livetvmain.getNoSignalFlag(),DebugLevel.ERROR);
				PageDateQuickSet.operateData.daItem = sap_audioLanguage_Disable;
				PageDateQuickSet.operateData.selectedFlag = 3;
			}
			else
			{   //当前有信号
				if( 1 == parseInt(livetvmain.getCurrentChannelInfo().type) )
				{   //当前为ATV
					debugPrint("currentChannel:ATV. Disable:Audio Language...Received value:" + parseInt(livetvmain.getCurrentChannelInfo().type),DebugLevel.ERROR);
					var audioLanguageDisable = [1];
					debugPrint("Signal:Yes...Received value:" + livetvmain.getNoSignalFlag(),DebugLevel.ERROR);
					if(ifCurrentIn3DMode) {
						audioLanguageDisable = [1,3];
					}
					PageDateQuickSet.operateData.daItem = audioLanguageDisable;

					var tmpsapIndex=model.sound.getSap() - 1;   //与底层获取SAP默认值
					debugPrint("SAP_received:" + tmpsapIndex);
					if(tmpsapIndex == 0) {
						tmpsapIndex = 1;
					}
					else if(tmpsapIndex == 1) {
						tmpsapIndex = 0;
					}
					PageDateQuickSet.operateData.cursapindex=tmpsapIndex;
					PageDateQuickSet.operateData.selectedFlag = 0;
				}
				else
				{   //当前为DTV
					debugPrint("currentChannel:DTV. Disable:SAP...Received value:" + parseInt(livetvmain.getCurrentChannelInfo().type),DebugLevel.ERROR);
					var sapDisable = [0];
					debugPrint("Signal:Yes...Received value:" + livetvmain.getNoSignalFlag(),DebugLevel.ERROR);
					if(ifCurrentIn3DMode) {
						sapDisable = [0,3];
					}
					PageDateQuickSet.operateData.daItem = sapDisable;
					PageDateQuickSet.operateData.selectedFlag = 1;
				}
            }
            PageDateQuickSet.operateData.hideflag=0;
		}
		else if( SourceList.AV == livetvmain.getCurrentSource().innerId && false == livetvmain.getNoSignalFlag() ) {
			debugPrint("Channel:AV...Singal:true",DebugLevel.ERROR);

			var tmpccIndex=model.closedcaption.getControl();    //AV下初始化Caption Control
			debugPrint("CCInit:"+tmpccIndex,DebugLevel.ERROR);
			PageDateQuickSet.operateData.curccindex = tmpccIndex;
			PageDateQuickSet.operateData.daItem = [];
			PageDateQuickSet.operateData.nav = defaultNavOnlyTwo;
			if(ifCurrentIn3DMode) {
				PageDateQuickSet.operateData.daItem = [1];
			}
			PageDateQuickSet.operateData.selectedFlag = 0;
			PageDateQuickSet.operateData.twoFlag = 1;
		}
		else
		{   //当前为非LiveTV模式
			debugPrint("Channel:No LiveTV...",DebugLevel.ERROR);
			PageDateQuickSet.operateData.daItem = [];
			debugPrint("HDMI_firstThree_hide",DebugLevel.ERROR);
			if(ifCurrentIn3DMode) {
				PageDateQuickSet.operateData.daItem = [0];
			}
			PageDateQuickSet.operateData.nav = defaultNavOnlyOne;
            PageDateQuickSet.operateData.selectedFlag = 0;
            PageDateQuickSet.operateData.hideflag=1;
		}
	}catch (e)
	{
		debugE(e.message);
	}

}

function getrecentuse() {
    try {
        var ret = readFileFromNative("hisenseUI/recentuse.txt", 1);
        debugPrint("read recent fie ret  " + ret + typeof ret);
        if(null != ret) {

            if(ret.length == 4 && (ret[0].name != undefined) &&
                (ret[0].parentindex != undefined) && (ret[0].pageindex != undefined)) {
                PageDateQuickSet.operateData.recentuse = ret;
            }
            else {
                PageDateQuickSet.operateData.recentuse = defaultRecentUse;
            }
            debugPrint("read the recent use" + JSON.stringify(PageDateQuickSet.operateData.recentuse));
        }
        else {
	        var Support3d = model.video.get3dSupported();
	        if(Support3d)
	        {
		        PageDateQuickSet.operateData.recentuse = [
			        {
				        name: 'Picture Mode',
				        parentindex: 0,
				        pageindex: 0
			        },
			        {
				        name: 'Sound Mode',
				        parentindex: 1,
				        pageindex: 0
			        },
			        {
				        name: 'Aspect Ratio',
				        parentindex: 0,
				        pageindex: FirPageSndIdx.PicAspectRatio
			        },
			        {
				        name: '3D',
				        parentindex: 0,
						pageindex: FirPageSndIdx.Pic3D
			        }
		        ];
	        }
	        else
	        {
		        PageDateQuickSet.operateData.recentuse = [
			        {
				        name: 'Picture Mode',
				        parentindex: 0,
				        pageindex: 0
			        },
			        {
				        name: 'Sound Mode',
				        parentindex: 1,
				        pageindex: 0
			        },
			        {
				        name: 'Aspect Ratio',
				        parentindex: 0,
				        pageindex: FirPageSndIdx.PicAspectRatio
			        },
			        {
				        name: 'Network Configuration',
				        parentindex: 3,
				        pageindex: 0
			        }
		        ];
	        }
        }
    } catch(e) {
        debugPrint(e.message)
    }
}

function QuickSetupOpenHandler() {
  try
  {
      getrecentuse();
      debugPrint("in the sa page ----------------------------")
      debugPrint("settingsysqS.origin.module "+hiWebOsFrame.settingsysqS.origin.module )
      if( hiWebOsFrame.settingsysqS.origin.module != "livetv"&&hiWebOsFrame.settingsysqS.origin.module != "launcher")
      {   if(PageDateQuickSet.operateData.nav.length>=4)
          {
               PageDateQuickSet.operateData.daItem = [0,1,2];
               PageDateQuickSet.operateData.selectedFlag = 3;
          }
	      if(PageDateQuickSet.operateData.nav.length == 2)
	      {
		      PageDateQuickSet.operateData.daItem = [0];
		      PageDateQuickSet.operateData.selectedFlag = 1;
	      }
	      if(1 == model.video.get3dSupported() && 0 != model.video.getEnum3dMode()) {
		      PageDateQuickSet.operateData.daItem = [0,1,2,3];
	      }
      }
      if(hiWebOsFrame.settingsysqS.origin.module == "launcher")
	  {
		  var index=_getIndex(PageDateQuickSet.operateData.daItem,2)
		  if(index<0)
		  {
			  PageDateQuickSet.operateData.daItem.push(2);
		  }
	  }

	  if(hiWebOsFrame.settingsysqS.origin.module == "launcher" && PageDateQuickSet.operateData.nav.length == 2)
	  {
		  var index=_getIndex(PageDateQuickSet.operateData.daItem,0)
		  if(index<0)
		  {
			  PageDateQuickSet.operateData.daItem.push(0);
		  }
		  PageDateQuickSet.operateData.selectedFlag = 1;
	  }

        //todo to get the app list
        PageDateQuickSet.operateData.applist=SettingGetApplist();
	    var tmpCurCountryCode = model.basicSetting.getTvsetLocation();
	    if(PageDateQuickSet.operateData.applist.length!=0 || tmpCurCountryCode != 'PHL')
	    {
		    PageDateQuickSet.operateData.applist = ['netflix'];
	    }
//        if(PageDateQuickSet.operateData.applist.length==0)
//        {
//            APP_SETTING=100;
//            CLOSED_CAPTION=4;
//            CEC_FUNCTION=5;
//            ADVANCE_SETTING=6;
//           // SYSTEM_LIST=["Location","Time","Language","Audio Only","Parental Controls","Closed Caption","CEC Function","Advanced Settings"];
//            debugE("the app list is empty !!!!!!!!!!!!!!!!!!");
//            //to delete the "app setting" recentuse
//        }
//        else
//        {
//            APP_SETTING=4;
//            CLOSED_CAPTION=5;
//            CEC_FUNCTION=6;
//            ADVANCE_SETTING=7;
//           // SYSTEM_LIST=["Location","Time","Language","Audio Only","Parental Controls","Application Settings","Closed Caption","CEC Function","Advanced Settings"];
//            debugPrint("llllllllllllllllllllllll");
//        }
		this.page.rewriteDataOnly();
	    if( 1 == model.video.get3dSupported() && 0 != model.video.getEnum3dMode() &&
		    ( PageDateQuickSet.operateData.nav.length == 1 || PageDateQuickSet.operateData.daItem.length == 4
			  || (PageDateQuickSet.operateData.nav.length == 2) && (PageDateQuickSet.operateData.daItem.length >= 2) ) ) {
		    this.page.getCaE('setting_qsp_Modes').setSelectedIndex(0);
	    }
	    else {
		    this.page.getCaE('setting_qsp_Modes').setSelectedIndex(0);
		    this.page.getCaE('setting_qsp_ul').setSelectedIndex(PageDateQuickSet.operateData.selectedFlag);
	    }

  }catch (e)
  {debugE(e.message)}

}

var PageDateQuickSet = {
    setting_qsp_title: {Data: ''},
	setting_qsp_ul:{Data: [],SelectedIndex: 0,disableItem: []},
	setting_qs_history_txt:{Data: ''},
    setting_qsp_Modes: {Data: [], SelectedIndex: 0},
	setting_qs_all_txt:{Data:''},
	setting_qsp_bottom_txt: {Data: ''},
    "operateData": {
        title_txt: 'Quick Setup',
	    history_txt: 'History',
	    all_txt: 'All',
	    bottom_txt: 'Full menu settings',
	    nav: [],
	    daItem:[],
        recentuse: defaultRecentUseWith3D,
	    saplist:["Stereo","Mono","SAP"],
	    cclist:["CC Off","CC On","CC On When Mute"],
	    cursapindex: 0,
	    curccindex:0,
        applist:["vudu","netflix"],
        selectedFlag:0,
        hideflag:0,
	    twoFlag:0
    },
    "langData": {
	    "Quick Setup": [],
	    "SAP":[],
	    "Audio Language":[],
	    "Caption Control":[],
	    "Audio Only":[],
	    "History":[],
	    "Full menu settings":[],
	    "All":[],
	    "Picture Mode":[],
	    "Brightness": [],
	    "Contrast": [],
	    "Color": [],
	    "Aspect Ratio": [],
	    "Backlight": [],
	    "Advanced Picture Settings": [],
	    "Restore Default Picture Settings": [],
	    "Sound Mode": [],
	    "DBX Audio Enhancements": [],
	    "Audio Enhancements": [],
	    "Advanced Audio Settings": [],
	    "Restore Default Audio Settings": [],

        "Tuner Mode":["Tuner Mode"],
        "Antenna":["Antenna"],
        "Cable":["Cable"],
        "Auto Scan":["Auto Scan"],
        "DTV Manual Scan":["DTV Manual Scan"],
        "ATV Manual Scan":["ATV Manual Scan"],
        "Channel Edit":["Channel Edit"],

	    "Network Configuration": [],
		"Network Information": [],
//	    "Wake Up By Wi-Fi": [],
	    "Anyview Stream": [],
	    "TV Name": [],
	    "Location": [],
	    "Time": [],
	    "Language": [],
	    "Parental Controls": [],
	    "Application Settings": [],
	    "Closed Caption": [],
	    "HDMI Function": [],
	    "Advanced Settings": [],
	    "System Info": [],
	    "Legal Disclaimer": [],
	    "Auto Firmware Upgrade": [],
	    "Check Firmware Upgrade": [],
	    "Restore to factory default": [],
	    "Display": [],
	    "Overscan ": [],
	    "Tint": [],
	    "Sharpness": [],
	    "Ultra Smooth Motion": [],
	    "Noise Reduction": [],
	    "Adaptive Contrast": [],
	    "Color Temperature": [],
	    "White Balance": [],
	    "Color Tuner": [],
	    "Equalizer": [],
	    "Lip Sync": [],
	    "Balance": [],
	    "Digital Audio Out": [],
	    "Digital Audio Delay": [],
	    "TV Speaker & ARC": [],
	    "Audio Out": [],
		"Voiceover Volume":[],
		"Voiceover Out":[],
	    "Menu Timeout ": [],
		"User Mode": [],        //暂无
	    "Input Labels": [],
		"Default Source For LiveTV": [],    //暂无
	    "Setup Wizard": [],
	    "Power Indicator": [],
        "Total Sonics": [],
        "Total Volume": [],
        "Total Surround": []
    },
    rewrite: function(pageData) {

	    pageData.setting_qsp_ul.disableItem = pageData.operateData.daItem;

        pageData.setting_qsp_title.Data = pageData.operateData.title_txt;

	    pageData.setting_qsp_ul.Data = [];
	    pageData.operateData.nav.forEach(function(u){
		    pageData.setting_qsp_ul.Data.push({
			    setting_qsm_list: {Data: u.name}
		    });
	    });

	    pageData.setting_qs_history_txt.Data = pageData.operateData.history_txt;

        pageData.setting_qsp_Modes.Data = [];
        pageData.operateData.recentuse.forEach(function(v)
        {
	        var realText = null;
	        try{
		        realText=langPackages[v.name][hiWebOsFrame.getCurrentLanguageIndex()];
	        }catch (ex){
		        debugE(ex.message);
		        realText= v.name;
	        }
	        debugPrint("now content is : "+ realText);
	        if(realText.length > 30)
	        {
		        pageData.setting_qsp_Modes.Data.push
		        ({
			        setting_qsm_item: {Data: realText},
			        setting_qsm_marquee: {Data: '<marquee>' + realText + '</marquee>'}
		        });
	        }
	        else
	        {
		        pageData.setting_qsp_Modes.Data.push
		        ({
			        setting_qsm_item: {Data: realText},
			        setting_qsm_marquee: {Data: realText}
		        });
	        }
        });

	    pageData.setting_qs_all_txt.Data = pageData.operateData.all_txt;
	    pageData.setting_qsp_bottom_txt.Data = pageData.operateData.bottom_txt;

    }
};

function closequicksetting() {
    debugPrint("!!!!!!!!!!!!!!!!!!close setting module")
    // hiWebOsFrame.closeModule("setting");
    closePagesOrModuleByPage(hiWebOsFrame.settingsysqS);
    hiWebOsFrame.blankPage.open();
    hiWebOsFrame.blankPage.hiFocus();
}

function SettingQsMoreEnHandler()
{
  try
  {
    hiWebOsFrame.createPage('setting_fircls_page', null, hiWebOsFrame.settingsysqS.origin, null, function (b) {
        hiWebOsFrame.settingsFirst = b;
        SettingFirInit();
        SettingFirResetSelectIndex();
        SettingFirUpdateHelpinfo("","");
        //RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
        hiWebOsFrame.settingsFirst.rewriteDataOnly();
        $("#setting_fircls_page").css("visibility","visible");
        hiWebOsFrame.settingsysqS.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
    });
  }catch (e)
  {
      debugE(e.message);
  }
}
//特殊处理函数，采用通用方式无法有效控制。
function getsystemindex(name,index)
{
    var temp;
   if(PageDateQuickSet.operateData.applist.length==0)
   {
       var country=model.basicSetting.getTvsetLocation();
       if(country.toLowerCase()=="arg"||country.toLowerCase()=="bra")
       {
           temp=index;
       }
       else
       {
           if(index==4)
           {
              temp=100;
           }
           else if(index==5||index==6||index==7)
           {
               temp=index-1;
           }
           else
           {
               temp=index;
           }
       }

   }
    else
   {
       temp=index;

   }
    return temp;
}

//RobMyth-11-26-2014
function SettingQsTopFourEnHandler()
{
	var ind = this.SelectedIndex;

	if(PageDateQuickSet.operateData.twoFlag == 1) {
		switch (ind) {
			case 0:
				hiWebOsFrame.createPage('setting_sys_qs_list', null, hiWebOsFrame.settingsysqS, null, function (qslist) {
					PageDataSettingQsList.operateData.curoption="caption_control";
					PageDataSettingQsList.operateData.curdatalist=PageDateQuickSet.operateData.cclist;
					PageDataSettingQsList.operateData.curselectindex=PageDateQuickSet.operateData.curccindex;
					hiWebOsFrame.settingsysqS.close();
					hiWebOsFrame.settingqslist = qslist;
					hiWebOsFrame.settingqslist.rewrite();
					hiWebOsFrame.settingqslist.open();
					hiWebOsFrame.settingqslist.hiFocus();
				});
				break;
			case 1:
				CloseScreen_qs();
				break;
		}
		return;
	}

    if( PageDateQuickSet.operateData.hideflag==1)
    {
         CloseScreen_qs();
    }
    else
    {
		switch (ind) {
			case 0:
				hiWebOsFrame.createPage('setting_sys_qs_list', null, hiWebOsFrame.settingsysqS, null, function (qslist) {
					PageDataSettingQsList.operateData.curoption="sap";
					PageDataSettingQsList.operateData.curdatalist=PageDateQuickSet.operateData.saplist;
					PageDataSettingQsList.operateData.curselectindex=PageDateQuickSet.operateData.cursapindex;
					hiWebOsFrame.settingsysqS.close();
					hiWebOsFrame.settingqslist = qslist;
					hiWebOsFrame.settingqslist.rewrite();
					hiWebOsFrame.settingqslist.open();
					hiWebOsFrame.settingqslist.hiFocus();
				});
				break;
			case 1:
				hiWebOsFrame.createPage('setting_sys_qs_list1', null, hiWebOsFrame.settingsysqS, null, function (qslist1) {
					hiWebOsFrame.settingsysqS.close();
					hiWebOsFrame.settingqslist1 = qslist1;
					if(qslist1.operateData.lengthIsZero === true)
					{
						hiWebOsFrame.settingqslist1.open();
						hiWebOsFrame.settingqslist1.hiFocus('setting_qs_list1_pl');
					}
					else
					{
						hiWebOsFrame.settingqslist1.open();
						hiWebOsFrame.settingqslist1.hiFocus();
					}
				});
				break;
			case 2:
				hiWebOsFrame.createPage('setting_sys_qs_list', null, hiWebOsFrame.settingsysqS, null, function (qslist) {
					PageDataSettingQsList.operateData.curoption="caption_control";
					PageDataSettingQsList.operateData.curdatalist=PageDateQuickSet.operateData.cclist;
					PageDataSettingQsList.operateData.curselectindex=PageDateQuickSet.operateData.curccindex;
					hiWebOsFrame.settingsysqS.close();
					hiWebOsFrame.settingqslist = qslist;
					hiWebOsFrame.settingqslist.rewrite();
					hiWebOsFrame.settingqslist.open();
					hiWebOsFrame.settingqslist.hiFocus();
				});
				break;
			case 3:
					CloseScreen_qs();
				break;
			default :
				break;
		}
    }
}

function SettingQsRecentEnHandler() {
    var ind = this.SelectedIndex;
    var parenindex = PageDateQuickSet.operateData.recentuse[ind].parentindex;
    var index = PageDateQuickSet.operateData.recentuse[ind].pageindex;
    if(parenindex==4)
    {
        var index=getsystemindex(PageDateQuickSet.operateData.recentuse[ind].name,index);

    }
    hiWebOsFrame.createPage('setting_fircls_page', null, hiWebOsFrame.settingsysqS.origin, null, function (b) {
        hiWebOsFrame.settingsFirst = b;
        SettingFirInit();
        if(SettingCheckItemisDisable(parenindex,index)==1||index==100)
        {
            PageDataFirstCls.operateData.curselect=parenindex;
            PageDataFirstCls.operateData.subselect=0;
            //RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
            hiWebOsFrame.settingsFirst.rewriteDataOnly();
            $("#setting_fircls_page").css("visibility","hidden");
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
            hiWebOsFrame.settingsysqS.close();
            hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
                hiWebOsFrame.settingsyspwderror=page;
                PageDateSettingSysPwderror.operateData.datatype=4;
                page.rewriteDataOnly();
                $("#setting_fircls_page").css("visibility","visible");
                page.open();
                page.hiFocus();

            });
            setTimeout(quicksetindicatorclose,2 * 1000);
        }
        else
        {
            PageDataFirstCls.operateData.curselect=parenindex;
            PageDataFirstCls.operateData.subselect=index;
            RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
            hiWebOsFrame.settingsFirst.rewriteDataOnly();
            $("#setting_fircls_page").css("visibility","hidden");
            hiWebOsFrame.settingsFirst.open();
            eval(' hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul_setting_first_ul2_sys' + parenindex + '")');
            hiWebOsFrame.settingsysqS.close();
            switch(parenindex) {
        case 0://picture
            switch (index) {
                case 0:  //picMode
                    hiWebOsFrame.settingsFirst.close();
                    $("#setting_fircls_page").css("visibility", "visible");
                    hiWebOsFrame.createPage('setting_pic_mode', null, hiWebOsFrame.settingsFirst, null, function (SettingPicModePage) {
                        SettingPicModePage.open();
                        SettingPicModePage.hiFocus();
                        hiWebOsFrame.SettingPicModePage = SettingPicModePage;
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 1: //亮度
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
						SettingPicBrtCtrColor.open();
						SettingPicBrtCtrColor.hiFocus("setting_pic_brightness_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();
                        $("#setting_fircls_page").css("visibility", "visible");
                    });
                    break;
                case 2: //contronst
                    hiWebOsFrame.settingsFirst.close();
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
						SettingPicBrtCtrColor.open();
						SettingPicBrtCtrColor.hiFocus("setting_pic_contrast_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();
                        $("#setting_fircls_page").css("visibility", "visible");
                    });
                    break;
                case 3: //color
                    hiWebOsFrame.settingsFirst.close();
                    hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
						SettingPicBrtCtrColor.open();
						SettingPicBrtCtrColor.hiFocus("setting_pic_color_slider");
                        hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
                        hiWebOsFrame.settingsFirst.close();
                        $("#setting_fircls_page").css("visibility", "visible");
                    });
                    break;
                case 4: //图像比例
                    hiWebOsFrame.settingsFirst.close();
                    $("#setting_fircls_page").css("visibility", "visible");

                    hiWebOsFrame.createPage('setting_pic_aspect_ratio', null, hiWebOsFrame.settingsFirst, null, function (SettingPicSizePage) {
                        hiWebOsFrame.SettingPicSizePage = SettingPicSizePage;
                        SettingPicSizePage.open();
                        SettingPicSizePage.hiFocus();
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;

                case 5: //背光
                    hiWebOsFrame.settingsFirst.close();
                    $("#setting_fircls_page").css("visibility", "visible");

                    hiWebOsFrame.createPage('setting_pic_backlight', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBackLight) {
                        hiWebOsFrame.SettingPicBackLight = SettingPicBackLight;
                        SettingPicBackLight.open();
                        SettingPicBackLight.hiFocus();
                    });
                    break;

                case 6: //3D设置
                case 7: //Advanced
                case 8: //reset pic
                    var curSelIdx = index;
                    if (!!!PICTURE_3D_SURPPORT) {
                        curSelIdx += 1;
                        debugG("QuickSetting false == PICTURE_3D_SURPPORT in switch case, set index + 1");
                    }
                    switch (curSelIdx) {
                        case 6: //3D设置
                            hiWebOsFrame.settingsFirst.close();
                            $("#setting_fircls_page").css("visibility", "visible");
                            QSPageOpen3DPage();
                            break;
                        case 7: //高级设置
                            hiWebOsFrame.settingsFirst.close();
                            $("#setting_fircls_page").css("visibility", "visible");
                            hiWebOsFrame.createPage('setting_pic_advanced_page_new', null, hiWebOsFrame.settingsFirst, null, function (SettingPicAdvanced) {
                                hiWebOsFrame.SettingPicAdvanced = SettingPicAdvanced;
								PicAdvancedRefreshFirstFocusId();
								SettingPicAdvanced.open();
								SettingPicAdvanced.hiFocus();
                            });
                            break;
                        case 8: //出厂设置
                            $("#setting_fircls_page").css("visibility", "visible");
                            hiWebOsFrame.createPage('setting_pic_reset', null, hiWebOsFrame.settingsFirst, null, function (SettingPicRestore) {
                                SettingPicRestore.open();
                                SettingPicRestore.hiFocus();
                                hiWebOsFrame.SettingPicRestore = SettingPicRestore;
//                        hiWebOsFrame.settingsFirst.close();
                            });
                            break;
                        default :
                            debugG("pic curSelIdx=" + curSelIdx + ', some err');
                            break;
                    }
                    break;
                default :
                    debugE('firPage pic SelectedIndex err');
                    break;
            }
            $("#setting_fircls_page").css("visibility", "visible");
            break;
        case 1://sound
            switch (index) {
                case 0: //SndMode
                    hiWebOsFrame.settingsFirst.close();
                    $("#setting_fircls_page").css("visibility", "visible");

                    hiWebOsFrame.createPage('setting_snd_mode', null, hiWebOsFrame.settingsFirst, null, function (SettingSndModePage) {
                        debugG("sndMode~~~~~~~~~~~~~~~~");
                        hiWebOsFrame.SettingSndModePage = SettingSndModePage;
                        SettingSndModePage.open();
                        SettingSndModePage.hiFocus();
                    });
                    break;
//                case 1: //HeadPhoneVolume     //sa和em屏蔽掉
//                    hiWebOsFrame.settingsFirst.close();
//                    $("#setting_fircls_page").css("visibility", "visible");
//                    hiWebOsFrame.createPage('setting_snd_head_phone', null, null, null, function (SettingSndHeadPhonePage) {
//                        debugG("Headphone page create")
//                        hiWebOsFrame.SettingSndHeadPhonePage = SettingSndHeadPhonePage;
//                        SettingSndHeadPhonePage.open();
//                        SettingSndHeadPhonePage.hiFocus();
//                        hiWebOsFrame.settingsFirst.close();
//                    });
//                    break;
                case 1: //DBX
                    hiWebOsFrame.settingsFirst.close();
                    $("#setting_fircls_page").css("visibility", "visible");
                    hiWebOsFrame.createPage('setting_snd_dbx', null, hiWebOsFrame.settingsFirst, null, function (SettingSndDBX) {
                        debugG("sndDBX page create");
                        hiWebOsFrame.SettingSndDBX = SettingSndDBX;
                        SettingSndDBX.open();
                        SettingSndDBX.hiFocus();
                        hiWebOsFrame.settingsFirst.close();
                    });
                    break;
                case 2: //SubWoofer
                case 3: //bassboost
                case 4: //snd advanced
                case 5: //reset audio
                    var curSelIdx = index;
                    if (!!!SOUND_BASSBOOST_SUBWOOFER_DEVICE_EXIST) {
                        curSelIdx += 2;
                    }
                    switch (curSelIdx) {
                        case 2: //Subwoofer
                            $("#setting_fircls_page").css("visibility", "visible");
                            hiWebOsFrame.createPage('setting_snd_subwoofer', null, hiWebOsFrame.settingsFirst, null, function (SettingSndSubWoofer) {
                                debugG("setting_snd_subwoofer page create");
                                hiWebOsFrame.SettingSndSubWoofer = SettingSndSubWoofer;
                                SettingSndSubWoofer.open();
                                SettingSndSubWoofer.hiFocus();
                            });
                            break;
                        case 3: //Bass Boost
                            hiWebOsFrame.settingsFirst.close();
                            $("#setting_fircls_page").css("visibility", "visible");
                            hiWebOsFrame.createPage('setting_snd_bassboost', null, hiWebOsFrame.settingsFirst, null, function (SettingSndBassBoost) {
                                debugG("setting_snd_bassboost page create");
                                hiWebOsFrame.SettingSndBassBoost = SettingSndBassBoost;
                                SettingSndBassBoost.open();
                                SettingSndBassBoost.hiFocus();
                            });
                            break;
                        case 4: //advanced
                            hiWebOsFrame.settingsFirst.close();
                            $("#setting_fircls_page").css("visibility", "visible");
                            hiWebOsFrame.createPage('setting_snd_advanced_settings', null, hiWebOsFrame.settingsFirst, null, function (SettingSndAdvancedPage) {
                                debugG("snd Advanced page create");
                                hiWebOsFrame.SettingSndAdvancedPage = SettingSndAdvancedPage;
                                SettingSndAdvancedPage.open();
                                SettingSndAdvancedPage.hiFocus();
                                hiWebOsFrame.settingsFirst.close();
                            });
                            break;
                        case 5: //reset Audio
                            hiWebOsFrame.createPage('setting_snd_reset_audio_settings', null, hiWebOsFrame.settingsFirst, null, function (SettingSndResetAudio) {
                                debugG("ResetAudio~~~~~~~~~~~~~~~~");
                                hiWebOsFrame.SettingSndResetAudio = SettingSndResetAudio;
                                $("#setting_fircls_page").css("visibility", "visible");
                                SettingSndResetAudio.open();
                                SettingSndResetAudio.hiFocus();
                            });
                            break;
                        default :
                            debugE('snd curSelIdx=' + curSelIdx + ', some err');
                            break;
                    }
                    break;
                default :
                    debugE('firPage snd SelectedIndex err');
                    break;
            }
            $("#setting_fircls_page").css("visibility", "visible");
            break;
        case 2://channel
            switch(index) {
                case 0:
                    settingChSetCreateScanModeDialog();
                    break;
                case 1:
                    settingChSetCreateChannelScanPage();
                    break;
                case 2:
                    settingChSetCreateDTVManuSetPage();
                    break;
                case 3:
                    settingChSetCreateATVManuSetPage();
                    break;
                case 4://ChannelEdit 挪到此处
                    settingChSetCreateChannelEditPage();
                    break;
                default :
                    break;
            }
            $("#setting_fircls_page").css("visibility","visible");
            break;
        case 3://network
            switch(index) {
                case 0:
                    settingNetSetCreateNextPage();
                    break;
                case 1:
                    settingNetStatusDialogCreate();
                    break;
//                case 2:
//                    settingNetWakeUpByWiFiDialogCreate();
//                    break;
                case 2:
                    settingNetDMRSwitchDialogCreate();
                    break;
                case 3:
                    settingNetTVNameListDialogCreate();
                    break;
                default :
                    break;
            }
            $("#setting_fircls_page").css("visibility","visible");
            break;
        case 4://system
            switch (index) {
                case SYSTEM_LOCATION://location
                {

                    hiWebOsFrame.createPage('setting_sys_locaton_page', null, hiWebOsFrame.settingsFirst, null, function (lang2page) {
                        hiWebOsFrame.settingssyslist2 = lang2page;
                        $("#setting_fircls_page").css("visibility","visible");
                        hiWebOsFrame.settingssyslist2.open();
                        hiWebOsFrame.settingssyslist2.hiFocus();

                    });
                    break;
                }
                case SYSTEM_TIME://time
                {
                    hiWebOsFrame.createPage('setting_sys_time_page', null, hiWebOsFrame.settingsFirst, null, function (timepage) {
                        hiWebOsFrame.settingssystime = timepage;
                        hiWebOsFrame.createPage('setting_sys_autotime_page', null, hiWebOsFrame.settingssystime, null, function (autotime) {
                            hiWebOsFrame.settingssysautotime = autotime;
                            autotime.close();
                            hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                                hiWebOsFrame.settingsysinput1 = autotime;
                                PageDateSettingSysinput1.operateData.curparent=2;
                                hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                                SettingTimePinCheck();
                                $("#setting_fircls_page").css("visibility","visible");

                            });

                        });

                    });
                    break;
                }
                case SYSTEM_LANG://language
                {

                    hiWebOsFrame.createPage('setting_sys_lang1_page', null, hiWebOsFrame.settingsFirst, null, function (lang1page) {
                        hiWebOsFrame.settingslang1 = lang1page;
                        hiWebOsFrame.createPage('setting_sys_lang2_page', null, hiWebOsFrame.settingslang1, null, function (lang2page) {
                            hiWebOsFrame.settingslang2 = lang2page;
                            lang2page.close();
                            SettingFirUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[0].title,PageDataSettingSysLang.operateData.helplist[0].content)
                            $("#setting_fircls_page").css("visibility","visible");
                            hiWebOsFrame.settingslang1.open();
                            hiWebOsFrame.settingslang1.hiFocus();

                        });


                    });
                    break;
                }
//                case AUDIO_ONLY://audio only
//                {
//                    //todo js close the screen
//                    $("#setting_fircls_page").css("visibility","visible");
//
//                    break;
//                }
                case SYS_SECURITY://security
                {
                    hiWebOsFrame.createPage('setting_sys_security_page', null, hiWebOsFrame.settingsFirst, null, function (security) {
                        hiWebOsFrame.settingssyssecurity = security;
                        hiWebOsFrame.createPage('setting_sys_chgpwd2_page', null, hiWebOsFrame.settingssyssecurity, null, function (createpwd) {
                            hiWebOsFrame.settingsyschgpwd2 = createpwd;
                            createpwd.close();
                            hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingssyssecurity, null, function (autotime) {
                                hiWebOsFrame.settingsysinput1 = autotime;
                                PageDateSettingSysinput1.operateData.curparent=0;
                                hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                                $("#setting_fircls_page").css("visibility","visible");
                                SettingSecPincheck();

//                                    hiWebOsFrame.settingssyssecurity.open();
//                                    hiWebOsFrame.settingssyssecurity.hiFocus();

                            });

                        });

                    })

                    break;
                }
                case APP_SETTING://application setting
                {

                    var temp=model.basicSetting.getTvsetLocation();
                    if(temp.toLowerCase()=="arg"||temp.toLowerCase()=="bra")
                    {
                        hiWebOsFrame.createPage('setting_sys_appset_page', null, hiWebOsFrame.settingsFirst, null, function (list2) {
                            hiWebOsFrame.settingssysappset = list2;
                            hiWebOsFrame.settingssysappset.open();
                            $("#setting_fircls_page").css("visibility","visible");
                            if(!!PageDataFirstCls.operateData.applist)
                            {
                                var temp1=_getIndex(PageDataFirstCls.operateData.applist,"netflix");
                                if(temp1>=0)
                                {
                                    $("#setting_sys_appset_netflix").css("display","block");
                                    // hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn1");
                                    // SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].title,PageDataSysAppSetting.operateData.helplist[0].content)

                                }
                                else
                                {
                                    $("#setting_sys_appset_netflix").css("display","none");

                                }

                                var temp2=_getIndex(PageDataFirstCls.operateData.applist,"vudu");
                                if(temp2>=0)
                                {
                                    $("#setting_sys_appset_vudu").css("display","block");

                                }
                                else
                                {
                                    $("#setting_sys_appset_vudu").css("display","none");

                                }
                                if(temp1>=0)
                                {
                                    hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn1");
                                    var htmlText1 = $("#setting_sys_appset_btn1").html();
                                    if (htmlText1.length >11) {
                                        $("#setting_sys_appset_btn1").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                    }
                                    var marquee = $("#setting_sys_appset_btn2" + " marquee");
                                    if (marquee.length > 0) {
                                        var htmlText2 = $("#setting_sys_appset_btn2" + " marquee").html();
                                        var marquee = $("#setting_sys_appset_btn2" ).html(htmlText2);
                                    }


                                }
                                else if(temp2>=0)
                                {
                                    hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn2");
                                    var htmlText1 = $("#setting_sys_appset_btn2").html();
                                    if (htmlText1.length >11) {
                                        $("#setting_sys_appset_btn2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                    }
                                    var marquee = $("#setting_sys_appset_btn1" + " marquee");
                                    if (marquee.length > 0) {
                                        var htmlText2 = $("#setting_sys_appset_btn1" + " marquee").html();
                                        var marquee = $("#setting_sys_appset_btn1" ).html(htmlText2);
                                    }

                                }
                                else
                                {
                                    hiWebOsFrame.settingssysappset.hiFocus("setting_sys_app_switch1_control1");

                                }
                                PageDataSysAppSetting.operateData.applist=PageDataFirstCls.operateData.applist;


                            }
                            else{
                                hiWebOsFrame.settingssysappset.hiFocus("setting_sys_app_switch1_control1");
                            }


                        });
                    }
                    else
                    {
                        hiWebOsFrame.createPage('setting_sys_appset_sa_page2', null, hiWebOsFrame.settingsFirst, null, function (list2) {
                            hiWebOsFrame.settingssysappsetsa2 = list2;
                            hiWebOsFrame.settingssysappsetsa2.open();
                            $("#setting_fircls_page").css("visibility","visible");
                            if(!!PageDataFirstCls.operateData.applist)
                            {
                                var temp1=_getIndex(PageDataFirstCls.operateData.applist,"netflix");
                                if(temp1>=0)
                                {
                                    $("#setting_sys_appset_sa_netflix").css("display","block");

                                }
                                else
                                {
                                    $("#setting_sys_appset_sa_netflix").css("display","none");

                                }
                                var temp2=_getIndex(PageDataFirstCls.operateData.applist,"vudu");
                                if(temp2>=0)
                                {
                                    $("#setting_sys_appset_sa_vudu").css("display","block");

                                }
                                else
                                {
                                    $("#setting_sys_appset_sa_vudu").css("display","none");
                                }
                                if(temp1>=0)
                                {
                                    hiWebOsFrame.settingssysappsetsa2.hiFocus("setting_sys_sa_appset_btn1");
                                    var htmlText1 = $("#setting_sys_sa_appset_btn1").html();
                                    if (htmlText1.length >11) {
                                        $("#setting_sys_sa_appset_btn1").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                    }
                                    var marquee = $("#setting_sys_sa_appset_btn2" + " marquee");
                                    if (marquee.length > 0) {
                                        var htmlText2 = $("#setting_sys_sa_appset_btn2" + " marquee").html();
                                        var marquee = $("#setting_sys_sa_appset_btn2" ).html(htmlText2);
                                    }
                                    // SettingFirUpdateHelpinfo(PageDataSysAppSettingSA2.operateData.helplist[0].title,PageDataSysAppSettingSA2.operateData.helplist[0].content)

                                }
                                else  if(temp2>=0)
                                {
                                    hiWebOsFrame.settingssysappsetsa2.hiFocus("setting_sys_sa_appset_btn2");
                                    var htmlText1 = $("#setting_sys_sa_appset_btn2").html();
                                    if (htmlText1.length >11) {
                                        $("#setting_sys_sa_appset_btn2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                    }
                                    var marquee = $("#setting_sys_sa_appset_btn1" + " marquee");
                                    if (marquee.length > 0) {
                                        var htmlText2 = $("#setting_sys_sa_appset_btn1" + " marquee").html();
                                        var marquee = $("#setting_sys_sa_appset_btn1" ).html(htmlText2);
                                    }
                                    SettingFirUpdateHelpinfo(PageDataSysAppSettingSA2.operateData.helplist[1].title,PageDataSysAppSettingSA2.operateData.helplist[1].content)

                                }else
                                {

                                }
                                PageDataSysAppSettingSA2.operateData.applist=PageDataFirstCls.operateData.applist;
                            }
                            else{
                                hiWebOsFrame.settingssysappsetsa2.hiFocus();
                            }

                        });

                    }
                    break;
                }
                case CLOSED_CAPTION://closed caption
                {
                    hiWebOsFrame.settingsFirst.close();
                    hiWebOsFrame.createPage('setting_sys_cc_page', null, hiWebOsFrame.settingsFirst, null, function (cecdev) {
                        hiWebOsFrame.settingssyscc = cecdev;
                        $("#setting_fircls_page").css("visibility","visible");
                        hiWebOsFrame.settingssyscc.open();
                        hiWebOsFrame.settingssyscc.hiFocus();

                    });
                    break;
                }
                case CEC_FUNCTION://cec function
                {
                    hiWebOsFrame.createPage('setting_sys_cec_page', null, hiWebOsFrame.settingsFirst, null, function (cecpage) {
                        hiWebOsFrame.settingssyscec = cecpage;
                        hiWebOsFrame.createPage('setting_sys_cecdev_page', null, hiWebOsFrame.settingssyscec, null, function (cecdev) {
                            hiWebOsFrame.settingssyscecdev = cecdev;
                            cecdev.close();
                            SettingFirUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[0].title,PageDateSettingSysCec.operateData.helplist[0].content)
                            $("#setting_fircls_page").css("visibility","visible");
                            hiWebOsFrame.settingssyscec.open();
                            hiWebOsFrame.settingssyscec.hiFocus();

                        });


                    });
                    break;
                }
                case ADVANCE_SETTING://advance setting
                {
//                    var servicenum=model.system.getServiceNo();
//                    var temp=servicenum.toLowerCase().indexOf("xt910");
//                    if(temp>=0)
//                    {
//                        hiWebOsFrame.createPage('setting_sys_xt910ad_page', null, hiWebOsFrame.settingsFirst, null, function (ad) {
//                            hiWebOsFrame.settingssysad = ad;
//                            SettingFirUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[0].title,PageDataSettingSysAd.operateData.helplist[0].content)
//                            $("#setting_fircls_page").css("visibility","visible");
//                            hiWebOsFrame.settingssysad.open();
//                            hiWebOsFrame.settingssysad.hiFocus();
//
//                        });
//                    }
//                    else
                    {
                        hiWebOsFrame.createPage('setting_sys_ad_page', null, hiWebOsFrame.settingsFirst, null, function (ad) {
                            hiWebOsFrame.settingssysad = ad;
                            SettingFirUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[0].title,PageDataSettingSysAd.operateData.helplist[0].content)
                            $("#setting_fircls_page").css("visibility","visible");
                            hiWebOsFrame.settingssysad.open();
                            hiWebOsFrame.settingssysad.hiFocus();

                        });
                    }
                    break;
                }
                default:
                    break;

            }
           // $("#setting_fircls_page").css("visibility","visible");
            break;
        case 5://about tv
            switch (index) {
                case 0://system info
                {
                    hiWebOsFrame.createPage('setting_about_ver_page', null, hiWebOsFrame.settingsFirst, null, function (update) {
                        hiWebOsFrame.settingsaboutver = update;
                        $("#setting_fircls_page").css("visibility","visible");
                        update.open();
                        update.hiFocus();

                    });
                    break;

//                    hiWebOsFrame.createPage('setting_sys_update_page', null, null, null, function (update) {
//                        hiWebOsFrame.settingssysupdate = update;
//                        hiWebOsFrame.createPage('setting_update_fir_page', null, null, null, function (fir) {
//                            hiWebOsFrame.settingsupdatefir = fir;
//                            fir.close();
//                            hiWebOsFrame.createPage('setting_update_progressing_page', null, null, null, function (page) {
//                                hiWebOsFrame.settingsupdateprogress = page;
//                                page.close();
//                            });
//                            hiWebOsFrame.settingssysupdate.open();
//                            hiWebOsFrame.settingssysupdate.hiFocus();
//                        });
//
//
//                    });
                    break;
                }
                case 1://disclaimer
                {
//                    hiWebOsFrame.createPage('setting_sys_disclaimer_page', null, hiWebOsFrame.settingsFirst, null, function (disclaimer) {
//                        hiWebOsFrame.settingssysdis = disclaimer;
//                        disclaimer.data.operateData.currenheight = 0;
//                        disclaimer.rewriteDataOnly();
//                        $("#setting_fircls_page").css("visibility","visible");
//                        disclaimer.open();
//                        disclaimer.hiFocus();
//
//                    });

                    hiWebOsFrame.createPage('setting_sys_dis_fir_page', null, hiWebOsFrame.settingsFirst, null, function (disclaimer) {
                        hiWebOsFrame.settingssysdisfir = disclaimer;
//                        disclaimer.data.operateData.currenheight = 0;
//                        disclaimer.rewriteDataOnly();
                        $("#setting_fircls_page").css("visibility","visible");
                        disclaimer.open();
                        disclaimer.hiFocus();

                    });
                    break;
                }
                case 2://auto update switch
                {
                    hiWebOsFrame.createPage('setting_sys_update_switch_page', null, hiWebOsFrame.settingsFirst, null, function (name) {
                        //
                        hiWebOsFrame.settingssysupdateswitch = name;
                        PageDataSettingUpdateSwitch.operateData.curpage=0;
                        UpdateSwitchinit();
                        hiWebOsFrame.settingssysupdateswitch.rewriteDataOnly();
                        $("#setting_fircls_page").css("visibility","visible");
                        hiWebOsFrame.settingssysupdateswitch.open();
                        hiWebOsFrame.settingssysupdateswitch.hiFocus();


                    });

                    break;
                }
                case 3://manual upgrade check
                {

//                    hiWebOsFrame.createPage('setting_sys_update_page', null, null, null, function (update) {
//                        hiWebOsFrame.settingssysupdate = update;
//                    hiWebOsFrame.createPage('setting_update_fir_page', null, null, null, function (fir) {
//                        hiWebOsFrame.settingsupdatefir = fir;
//                        fir.close();
//                        hiWebOsFrame.createPage('setting_update_progressing_page', null, null, null, function (page) {
//                            hiWebOsFrame.settingsupdateprogress = page;
//                            page.close();
//                            PageDateSettingUpdateFir.operateData.curtype=0;
//                            StartDetectVer(0);
//                            PageDateSettingUpdateFir.setting_update_fir_ul1.DataSelectedIndex=0;
//                            hiWebOsFrame.settingsupdatefir.open();
//                            hiWebOsFrame.settingsupdatefir.hiFocus();
//                            hiWebOsFrame.settingsupdatefir.rewriteDataOnly();
//
//                        });
//                        //   hiWebOsFrame.settingssysupdate.open();
//                        //    hiWebOsFrame.settingssysupdate.hiFocus();
//                    });

//                    });
////
                       $("#setting_fircls_page").css("visibility","visible");

                    break;
                }
                case 4://restore the factory setting
                {

                    hiWebOsFrame.createPage('setting_sys_nav_page', null, hiWebOsFrame.settingsFirst, null, function (nav) {
                        hiWebOsFrame.settingssysstartnav = nav;
                        nav.data.operateData.parentpage = 2;
                        nav.data.operateData.curdatatype = 2;
                        nav.rewriteDataOnly();
//                        nav.open();
//                        nav.hiFocus()
                        hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                            hiWebOsFrame.settingsysinput1 = autotime;
                            PageDateSettingSysinput1.operateData.curparent=1;
                            hiWebOsFrame.settingsysinput1.rewriteDataOnly()
                            SettingrestorePincheck();
                            $("#setting_fircls_page").css("visibility","visible");
//                                    hiWebOsFrame.settingssyssecurity.open();
//                                    hiWebOsFrame.settingssyssecurity.hiFocus();

                        });

                    })
                    break;
                }

            }
           // $("#setting_fircls_page").css("visibility","visible");
            break;
        default :
            break;
    }
        }
    });

}

function quicksetindicatorclose() {
    try{
        if(hiWebOsFrame.isCurrentModule("setting"))
        {
            debugPrint("setting module close pwderror")
            hiWebOsFrame.settingsyspwderror.close();
            var index=_getIndex(PageDataFirstCls.settings_first_ul.disableItem,PageDataFirstCls.settings_first_ul.SelectedIndex);
            debugE("h*****"+PageDataFirstCls.settings_first_ul.disableItem+PageDataFirstCls.settings_first_ul.SelectedIndex)
            if(index>=0)
            {
                PageDataFirstCls.operateData.curselect=0;
                PageDataFirstCls.settings_first_ul.SelectedIndex=0;
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
            }
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
            hiWebOsFrame.settingsyspwderror.destroy();
        }
        else
        {
            debugPrint("setting module  has exit ");
            hiWebOsFrame.settingsyspwderror.close();
            hiWebOsFrame.settingsyspwderror.destroy();

        }
    }catch (e)
    {
        debugPrint(e.message)
    }



}
function SettingCheckItemisDisable(parenindex,subindex)
{
    try
    {
    var index=_getIndex(PageDataFirstCls.settings_first_ul.disableItem,parenindex);
    if(index>=0)
    {
            return 1;
    }
   index=_getIndex(PageDataFirstCls.operateData.settingdisablelist[parenindex],subindex);
  debugPrint("parenindex"+parenindex+"subindex"+subindex+"index"+index);

   if(index>=0)
  {
      return 1;

  }
  else
  {
      debugPrint("return 0");
      return 0;

  }
    }catch (e)
    {
        debugE(e.message)
    }
}

function QuickSetupEscHandler() {
    debugPrint("!!!!!!!!!!!!!!!!!!close setting module");
    if(!!hiWebOsFrame.settingsysqS.origin)
    {
        //hiWebOsFrame.settingsFirst.origin.open();
        //hiWebOsFrame.settingsFirst.origin.hiFocus();
        settingOnDestroyCallback(hiWebOsFrame.settingsysqS.origin);
        closePagesOrModuleByPage(hiWebOsFrame.settingsysqS);

    }
    else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        closePagesOrModuleByPage(hiWebOsFrame.settingsysqS);
        debugPrint(" no origin page of the setting QUICKSET");
    }

//    closePagesOrModuleByPage(hiWebOsFrame.settingsysqS);
//    hiWebOsFrame.blankPage.open();
//    hiWebOsFrame.blankPage.hiFocus();
}
function QuickSetupOnDestroy() {
    hiWebOsFrame.settingsysqS = null;
}

function CloseScreen_qs()
{
	model.system.setEnumScreenState(0);
	debugPrint("Off the screen", DebugLevel.ERROR);
	g_SystemAudioOnlyFlag=1;
}

function QuickopenLangSetting()
{
	try
	{
		hiWebOsFrame.lockAllKeys();
		hiWebOsFrame.createPage('setting_fircls_page', null, null, null, function(b) {
			hiWebOsFrame.settingsFirst = b;
            SettingFirInit();
			if(SettingCheckItemisDisable(4,2)==1)
			{
				PageDataFirstCls.operateData.curselect=4;
				PageDataFirstCls.operateData.subselect=2;
				//RefreshHelpInfo(PageDataFirstCls.operateData.curselect,PageDataFirstCls.operateData.subselect);
				hiWebOsFrame.settingsFirst.rewriteDataOnly();
				$("#setting_fircls_page").css("visibility","hidden");
				hiWebOsFrame.settingsFirst.open();
				hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul");
				hiWebOsFrame.settingsysqS.close();
				hiWebOsFrame.endLoading();
				hiWebOsFrame.unLockAllKeys();
				hiWebOsFrame.createPage('setting_sys_pwd_error_dialog',null, null, null,function(page){
					hiWebOsFrame.settingsyspwderror=page;
					PageDateSettingSysPwderror.operateData.datatype=4;
					page.rewriteDataOnly();
					$("#setting_fircls_page").css("visibility","visible");
					page.open();
					page.hiFocus();

				});
				setTimeout(quicksetindicatorclose,2 * 1000);
			}
			else
			{
				PageDataFirstCls.operateData.curselect=4;
				PageDataFirstCls.operateData.subselect=2;
				hiWebOsFrame.settingsFirst.rewriteDataOnly();
				$("#setting_fircls_page").css("visibility","hidden");
				hiWebOsFrame.settingsFirst.open();
				hiWebOsFrame.settingsFirst.hiFocus("settings_first_ul_setting_first_ul2_sys4");
				hiWebOsFrame.unLockAllKeys();
				hiWebOsFrame.createPage('setting_sys_lang1_page', null, hiWebOsFrame.settingsFirst, null, function (lang1page) {
					hiWebOsFrame.settingslang1 = lang1page;
					hiWebOsFrame.createPage('setting_sys_lang2_page', null, hiWebOsFrame.settingslang1, null, function (lang2page) {
						hiWebOsFrame.settingslang2 = lang2page;
						lang2page.close();
						SettingFirUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[1].title,PageDataSettingSysLang.operateData.helplist[1].content);
						$("#setting_fircls_page").css("visibility","visible");
						hiWebOsFrame.settingslang1.open();
						hiWebOsFrame.settingslang1.hiFocus("setting_sys_lang_audio3");
					});
				});
			}
		});
	}catch (e)
	{
		debugE(e.message);
	}
}

