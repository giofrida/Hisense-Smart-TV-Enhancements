/**
 * Created by Administrator on 14-6-17.
 */
//RobMyth-11-26-2014
var defaultNav = [
    {
        name: 'SAP'
    },
    {
        name: 'Caption Control'
    },
    {
        name: 'Audio Language'
    },

	{
		name: 'Subtitle'
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
			    befEnterHandler: SettingQsTopFiveEnHandler,
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
//        {
//            id: 'setting_headphone_ul',
//            CaEType: 'Ul',
//            nav: {
//                upTo: 'setting_qsp_ul',
//                downTo: 'setting_qsp_Modes'
//            },
//            handler: {
//                befEnterHandler: SettingQsHeadphoneEnHandler,
//                befRightHandler: SettingQsMoreEnHandler
//            },
//            oriCaE: [
//                {
//                    id: 'setting_headphone_list',
//                    CaEType: 'span'
//                }
//            ],
//            UlConfig: {
//                UlDataItem: [
//                    'setting_headphone_list'
//                ]
//            }
//        },
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
    if(!tv)
    {
        PageDateQuickSet.operateData.daItem = [];
        PageDateQuickSet.operateData.nav = defaultNav;
        var audioTrack_audioLanguage_subtitle_Disable = [0,1,2,3];
        PageDateQuickSet.operateData.daItem = audioTrack_audioLanguage_subtitle_Disable;
        PageDateQuickSet.operateData.selectedFlag = 4;
        PageDateQuickSet.operateData.hideflag = 0;
        return;

    }

    PageDateQuickSet.operateData.selectedFlag = 0;
    PageDateQuickSet.operateData.hideflag = 0;
    try
    {

	    var ifCurrentIn3DMode = 1 == model.video.get3dSupported() && 0 != model.video.getEnum3dMode();
       // var ifCurrentIn3DMode=false;
	     debugE("ifCurrentIn3DMode:" + ifCurrentIn3DMode);

	    if( SourceList.TV == livetvmain.getCurrentSource().innerId )
        //if (1 ==1)
	    {   //当前为LiveTV模式
		    debugRM("Channel:LiveTV...");
		    PageDateQuickSet.operateData.daItem = [];
		    PageDateQuickSet.operateData.nav = defaultNav;

            try{
            var tmpccIndex=model.closedcaption.getControl();    //LiveTV下初始化Caption Control
            debugPrint("CCInit:"+tmpccIndex,DebugLevel.ERROR);
            PageDateQuickSet.operateData.curccindex=tmpccIndex;
            }catch (e)
            {
                debugE(e.message);
            }
            if(true == livetvmain.getNoSignalFlag())
           //  if(false)
		    {   //当前无信号
			    var audioTrack_audioLanguage_subtitle_Disable = [0,1,2,3];
			    debugRM("Signal:No...Disable:Audio Track & Audio Language & Subtitle & Teletext...Received value:" + livetvmain.getNoSignalFlag());
			    PageDateQuickSet.operateData.daItem = audioTrack_audioLanguage_subtitle_Disable;
			    PageDateQuickSet.operateData.selectedFlag = 4;
		    }
		    else
		    {   //当前有信号
			    if( 1 == parseInt(livetvmain.getCurrentChannelInfo().type) )
                //if( false )
			    {   //当前为ATV

				    PageDateQuickSet.operateData.ATVorDTV = "ATV";

				    debugRM("currentChannel:ATV");
				    var audioLanguage_subtitle_Disable = [2,3];
				    //debugRM("Signal:Yes...Received value:" + livetvmain.getNoSignalFlag());
				    if(ifCurrentIn3DMode) {
					    audioLanguage_subtitle_Disable = [2,3,4];
				    }
				    PageDateQuickSet.operateData.daItem = audioLanguage_subtitle_Disable;
				    PageDateQuickSet.operateData.selectedFlag = 0;
                    var tmpsapIndex=model.sound.getSap() - 1;   //与底层获取SAP默认值
                    debugPrint("SAP_received:" + tmpsapIndex);
                    if(tmpsapIndex == 0) {
                        tmpsapIndex = 1;
                    }
                    else if(tmpsapIndex == 1) {
                        tmpsapIndex = 0;
                    }
                    PageDateQuickSet.operateData.cursapindex=tmpsapIndex;
			    }
			    else
			    {   //当前为DTV

				    PageDateQuickSet.operateData.ATVorDTV = "DTV";

				   debugRM("currentChannel:DTV");
				    var audioTrack_Disable = [0,1];
				    if(ifCurrentIn3DMode) {
					    audioTrack_Disable = [0,1,4];
				    }
				    PageDateQuickSet.operateData.daItem = audioTrack_Disable;
				    PageDateQuickSet.operateData.selectedFlag = 2;
			    }
		    }
		    PageDateQuickSet.operateData.hideflag=0;
	    }
	    else
	    {   //当前为非LiveTV模式
		    debugRM("Channel:No LiveTV...");
		    PageDateQuickSet.operateData.daItem = [];
		    debugRM("HDMI_firstFour_hide");
		    if(ifCurrentIn3DMode) {
			    PageDateQuickSet.operateData.daItem = [0];
		    }
		    PageDateQuickSet.operateData.nav = defaultNavOnlyOne;
		    PageDateQuickSet.operateData.selectedFlag = 0;
		    PageDateQuickSet.operateData.hideflag=1;
	    }
	}catch (e)
	{
		debugPrint(e.message);
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
	        debugRM("!!!!!!!!!!!Support3d :" + Support3d);
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

  //  var headphoneInsertState = tv ? model.sound.getHeadphoneInsert() : 0;
//     var headphoneInsertState =  0;
//    if (headphoneInsertState == 1)
//    {
//        PageDateQuickSet.setting_headphone_ul.disable = false;
//        $('#setting_headphone_ul').css('display', 'block');
//    }
//    else
//    {
//        PageDateQuickSet.setting_headphone_ul.disable = true;
//        $('#setting_headphone_ul').css('display', 'none');
//    }

	if(!tv)
	{
        this.page.rewriteDataOnly();
		this.page.getCaE('setting_qsp_Modes').setSelectedIndex(0);
		this.page.getCaE('setting_qsp_ul').setSelectedIndex(PageDateQuickSet.operateData.selectedFlag);
	}
	else
	{
		try{
			getrecentuse();
			debugPrint("@@@@@@@@@@@@@@@@@@@@@@@hiWebOsFrame.settingsysqS.origin.module "+hiWebOsFrame.settingsysqS.origin.module )
			if( hiWebOsFrame.settingsysqS.origin.module != "livetv"&&hiWebOsFrame.settingsysqS.origin.module != "launcher")
			{
				if(PageDateQuickSet.operateData.nav.length>=4)
				{
					PageDateQuickSet.operateData.daItem = [0,1,2,3];
					PageDateQuickSet.operateData.selectedFlag = 4;
				}
			}

			if (hiWebOsFrame.settingsysqS.origin.module == "launcher") {
				if(PageDateQuickSet.operateData.nav.length>=4)
				{
					PageDateQuickSet.operateData.daItem = [0,1,2,3];
					PageDateQuickSet.operateData.selectedFlag = 4;
				}
				else
				{
					PageDateQuickSet.operateData.selectedFlag = 0;
				}
			}

			//todo to get the app list
			PageDateQuickSet.operateData.applist=SettingGetApplist();

			if(PageDateQuickSet.operateData.applist.length!=0)
			{
				PageDateQuickSet.operateData.applist = ['netflix'];
				APP_SETTING=3;
				CLOSED_CAPTION=4;
				CEC_FUNCTION=5;
				ADVANCE_SETTING=6;
			}
			else
			{
				APP_SETTING=100;
				CLOSED_CAPTION=3;
				CEC_FUNCTION=4;
				ADVANCE_SETTING=5;
				debugE("the app list is empty !!!!!!!!!!!!!!!!!!");
				//to delete the "app setting" recentuse
			}
			this.page.rewriteDataOnly();
			if(1 == model.video.get3dSupported() && 0 != model.video.getEnum3dMode() && PageDateQuickSet.operateData.nav.length == 1) {
				this.page.getCaE('setting_qsp_Modes').setSelectedIndex(0);
			}
			else {
				this.page.getCaE('setting_qsp_Modes').setSelectedIndex(0);
				this.page.getCaE('setting_qsp_ul').setSelectedIndex(PageDateQuickSet.operateData.selectedFlag);
			}
		}catch (e){
			debugE(e.message)
		}
	}
//    this.page.rewriteDataOnly();
}

var PageDateQuickSet = {
	setting_qsp_title: {Data: ''},
	setting_qsp_ul:{Data: [],SelectedIndex: 0,disableItem: []},
//    setting_headphone_ul:{Data: [
//        {
//            "setting_headphone_list": {Data: 'Headphone Volume'}
//        }
//        ],
//        SelectedIndex: 0,
//        disableItem: [],
//        disable: false
//    },
	setting_qs_history_txt:{Data: ''},
	setting_qsp_Modes: {Data: [], SelectedIndex: 0},
	setting_qs_all_txt:{Data:''},
	setting_qsp_bottom_txt: {Data: ''},
	"operateData": {
		title_txt: 'Quick Setup',
		history_txt: 'History',
		all_txt: 'All',
		bottom: 'Full menu settings',
		nav: [],
		daItem:[],
        saplist:["Stereo","Mono","SAP"],
        cclist:["CC Off","CC On","CC On When Mute"],
        cursapindex: 0,
        curccindex:0,
		recentuse: defaultRecentUse,
		cursubselect:"",
		applist:["vudu","netflix"],
		teletextIndex:-1,
		selectedFlag:0,
		hideflag:0,
		ATVorDTV:'DTV'
    },
    "langData": {
	    "Quick Setup": [],
	    "Audio Track": [],
	    "Audio Language": [],
	    "Subtitle": [],
	    "Teletext": [],
	    "Audio Only":[],
	    "History":[],
	    "All":[],
	    "Full menu settings":[],
	    "3D": [],
        "System Update":[],
	    "Picture Mode":[],
	    "Brightness": [],
	    "Contrast": [],
	    "Colour": [],
	    "Aspect Ratio": [],
	    "Backlight": [],
	    "Advanced Picture Settings": [],
	    "Restore Default Picture Settings": [],
	    "Sound Mode": [],
	    "DBX Audio Enhancements": [],
	    "Audio Enhancements": [],
	    "Advanced Audio Settings": [],
	    "Restore Default Audio Settings": [],
	    "Tuner Mode": [],
	    "Auto Scan": [],
	    "DTV Manual Scan": [],
	    "ATV Manual Scan": [],
        "Channel list auto-update":["Channel list auto-update"],
        "Channel Edit": [],
	    "Advanced Settings": [],
	    "Network Configuration": [],
	    "Network Information": [],
        "Connection Test":[],
	    "Anyview Stream": [],
	    "TV Name": [],
	    "Location": [],
	    "Time": [],
	    "Language": [],
	    "Parental Controls": [],
	    "HDMI Function": [],
	    "System Info": [],
	    "Disclaimer": [],
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
	    "Colour Temperature": [],
	    "White Balance": [],
	    "Colour Tuner": [],
	    "Equalizer": [],
	    "Lip Sync": [],
	    "Balance": [],
	    "Digital Audio Out": [],
	    "Digital Audio Delay": [],
	    "TV Speaker & ARC": [],
	    "Audio Out": [],
		"Voiceover Volume": [],
		"Voiceover Out": [],
	    "Menu Timeout ": [],
	    "User Mode": [],
	    "PVR & T.Shift": [],
	    "Input Labels": [],
	    "Default LiveTV Source": [],
	    "Setup Wizard": [],
	    "Power Indicator": []
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
	    pageData.setting_qsp_bottom_txt.Data = pageData.operateData.bottom;

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
       if(index==3)
       {
           temp=100;
       }
       else if(index==4||index==5||index==6)
       {
           temp=index-1;
       }
       else
       {
           temp=index;
       }
   }
    else
   {
       temp=index;

   }
    return temp;
}

//RobMyth-11-26-2014
function SettingQsTopFiveEnHandler()
{
	var ind = this.SelectedIndex;

    if( PageDateQuickSet.operateData.hideflag==1)
    {
        CloseScreen_qs();
    }
    else
    {
		switch (ind) {
			case 0:
//
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
			case 2:
                PageDateQuickSet.operateData.cursubselect="audioLanguage";
                hiWebOsFrame.createPage('setting_sys_qs_list1', null, hiWebOsFrame.settingsysqS, null, function (qslist1) {
                    hiWebOsFrame.settingsysqS.close();
                    hiWebOsFrame.settingqslist1 = qslist1;
                    if(hiWebOsFrame.settingqslist1.operateData.lengthSign === true)
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
			case 3:
                PageDateQuickSet.operateData.cursubselect="subtitle";
                hiWebOsFrame.createPage('setting_sys_qs_list1', null, hiWebOsFrame.settingsysqS, null, function (qslist1) {
                    hiWebOsFrame.settingsysqS.close();
                    hiWebOsFrame.settingqslist1 = qslist1;
                    hiWebOsFrame.settingqslist1.open();
                    hiWebOsFrame.settingqslist1.hiFocus();
                });
				break;
			case 4:
					CloseScreen_qs();
				break;
//            case 5: //Headphone Volume
//                PageDateQuickSet.operateData.cursubselect="headphoneVolume";
//                hiWebOsFrame.createPage('setting_snd_head_phone', null, null, null, function (SettingSndHeadPhonePage) {
//                    debugG("Headphone page create");
//                    hiWebOsFrame.settingsysqS.close();
//                    hiWebOsFrame.SettingSndHeadPhonePage = SettingSndHeadPhonePage;
//                    SettingSndHeadPhonePage.open();
//                    SettingSndHeadPhonePage.hiFocus();
//                });
//                break;
			default :
				break;
		}
    }
}

function SettingQsHeadphoneEnHandler() {
    var ind = this.SelectedIndex;
    switch (ind) {
        case 0: //Headphone Volume
            PageDateQuickSet.operateData.cursubselect = "headphoneVolume";
            hiWebOsFrame.createPage('setting_snd_head_phone', null, null, null, function (SettingSndHeadPhonePage) {
                debugG("Headphone page create");
                hiWebOsFrame.settingsysqS.close();
                hiWebOsFrame.SettingSndHeadPhonePage = SettingSndHeadPhonePage;
                SettingSndHeadPhonePage.open();
                SettingSndHeadPhonePage.hiFocus();
            });
            break;
        default :
            break;
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
				case 1:
					hiWebOsFrame.createPage('setting_pic_apply_mode_page', null, hiWebOsFrame.settingsFirst, null, function (SettingPicApplyMode) {

						SettingPicApplyMode.open();
						SettingPicApplyMode.hiFocus();
						hiWebOsFrame.SettingPicApplyMode = SettingPicApplyMode;
						hiWebOsFrame.settingsFirst.close();
						$("#setting_fircls_page").css("visibility", "visible");
					});
					break;
				case 2: //亮度
					hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
						SettingPicBrtCtrColor.open();
						SettingPicBrtCtrColor.hiFocus("setting_pic_brightness_slider");
						hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
						hiWebOsFrame.settingsFirst.close();
						$("#setting_fircls_page").css("visibility", "visible");
					});
					break;
				case 3: //contronst
					hiWebOsFrame.settingsFirst.close();
					hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
						SettingPicBrtCtrColor.open();
						SettingPicBrtCtrColor.hiFocus("setting_pic_contrast_slider");
						hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
						hiWebOsFrame.settingsFirst.close();
						$("#setting_fircls_page").css("visibility", "visible");
					});
					break;
				case 4: //color
					hiWebOsFrame.settingsFirst.close();
					hiWebOsFrame.createPage('setting_pic_brightness_contrast_color', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBrtCtrColor) {
						SettingPicBrtCtrColor.open();
						SettingPicBrtCtrColor.hiFocus("setting_pic_color_slider");
						hiWebOsFrame.SettingPicBrtCtrColor = SettingPicBrtCtrColor;
						hiWebOsFrame.settingsFirst.close();
						$("#setting_fircls_page").css("visibility", "visible");
					});
					break;
				case 5: //图像比例
					hiWebOsFrame.settingsFirst.close();
					$("#setting_fircls_page").css("visibility", "visible");

					hiWebOsFrame.createPage('setting_pic_aspect_ratio', null, hiWebOsFrame.settingsFirst, null, function (SettingPicSizePage) {
						hiWebOsFrame.SettingPicSizePage = SettingPicSizePage;
						SettingPicSizePage.open();
						SettingPicSizePage.hiFocus();
						hiWebOsFrame.settingsFirst.close();
					});
					break;

				case 6: //背光
					hiWebOsFrame.settingsFirst.close();
					$("#setting_fircls_page").css("visibility", "visible");

					hiWebOsFrame.createPage('setting_pic_backlight', null, hiWebOsFrame.settingsFirst, null, function (SettingPicBackLight) {
						hiWebOsFrame.SettingPicBackLight = SettingPicBackLight;
						SettingPicBackLight.open();
						SettingPicBackLight.hiFocus();
					});
					break;

				//case 7: //3D设置
				//	hiWebOsFrame.settingsFirst.close();
				//	$("#setting_fircls_page").css("visibility", "visible");
				//	QSPageOpen3DPage();
				//	break;
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
//                case 1: //HeadPhoneVolume //新兴sa去掉
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
                case 1: //apply snd mode
					hiWebOsFrame.createPage('setting_snd_apply_mode',null,hiWebOsFrame.settingsFirst,null,function(SettingSndApplyModePage)
					{
						debugG("apply snd mode page open ");
						hiWebOsFrame.SettingSndApplyModePage=SettingSndApplyModePage;
						SettingSndApplyModePage.open();
						SettingSndApplyModePage.hiFocus();
						hiWebOsFrame.settingsFirst.close();
					});
					break;
                case 2: //advanced
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
				case 3: //reset Audio
                            hiWebOsFrame.createPage('setting_snd_reset_audio_settings', null, hiWebOsFrame.settingsFirst, null, function (SettingSndResetAudio) {
                                debugG("ResetAudio~~~~~~~~~~~~~~~~");
                                hiWebOsFrame.SettingSndResetAudio = SettingSndResetAudio;
                                $("#setting_fircls_page").css("visibility", "visible");
                                SettingSndResetAudio.open();
                                SettingSndResetAudio.hiFocus();
                            });
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
                case 5:
                    settingChSetCreateChListUpSwitchDialog();
                    break;
                //case 5: //EPG Mark
                //    settingChSetCreateEPGMarkPage();
                //    break;
                case CHL_PARENTCONTROL: //Parental Controls
                    settingChSetCreateParentalControls();
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
                case 2:
//                    settingNetWakeUpByWiFiDialogCreate();
                    settingNetworkConnectTestCreate();
                    break;
                case 3:
                    settingNetDMRSwitchDialogCreate();
                    break;
                case 4:
                    settingNetTVNameListDialogCreate();
                    break;
                default :
                    break;
            }
//            $("#setting_fircls_page").css("visibility","visible");
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
                case SYSTEM_PIN://System_PIN
                {
//                    hiWebOsFrame.createPage('setting_sys_system_pin_page',null, hiWebOsFrame.settingsFirst, null, function(pinpage) {
//                        hiWebOsFrame.settingssyspin = pinpage;
                    hiWebOsFrame.createPage('setting_sys_chgpwd2_page', null, hiWebOsFrame.settingsFirst, null, function (createpwd) {
                        hiWebOsFrame.settingsyschgpwd2 = createpwd;
                        PageDateSettingSysChgpwd2.operateData.curparent=1;
                        createpwd.close();
                        hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingsFirst, null, function (autotime) {
                            hiWebOsFrame.settingsysinput1 = autotime;
                            PageDateSettingSysinput1.operateData.curparent=3;
                            hiWebOsFrame.settingsysinput1.rewriteDataOnly();
                            $("#setting_fircls_page").css("visibility","visible");
                            SettingSecPincheck();
                        });

                    });
//                    });
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
//                            SettingLangUpdateHelpinfo(PageDataSettingSysLang.operateData.helplist[0].content)
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
//                case SYS_SECURITY://security
//                {
//                    hiWebOsFrame.createPage('setting_sys_security_page', null, hiWebOsFrame.settingsFirst, null, function (security) {
//                        hiWebOsFrame.settingssyssecurity = security;
////                        hiWebOsFrame.createPage('setting_sys_chgpwd2_page', null, hiWebOsFrame.settingssyssecurity, null, function (createpwd) {
////                            hiWebOsFrame.settingsyschgpwd2 = createpwd;
////                            createpwd.close();
//                            hiWebOsFrame.createPage('setting_sys_inputmodule_page', null, hiWebOsFrame.settingssyssecurity, null, function (autotime) {
//                                hiWebOsFrame.settingsysinput1 = autotime;
//                                PageDateSettingSysinput1.operateData.curparent=0;
//                                hiWebOsFrame.settingsysinput1.rewriteDataOnly();
//                                $("#setting_fircls_page").css("visibility","visible");
//                                SettingEUPCPincheck();
//
////                                    hiWebOsFrame.settingssyssecurity.open();
////                                    hiWebOsFrame.settingssyssecurity.hiFocus();
//
//                            });
//
////                        });
//
//                    })
//
//                    break;
//                }
                case APP_SETTING://application setting
                {

                    hiWebOsFrame.createPage('setting_sys_appset_page', null, hiWebOsFrame.settingsFirst, null, function (list2) {
                        hiWebOsFrame.settingssysappset = list2;
                       // SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].title,PageDataSysAppSetting.operateData.helplist[0].content)
                        $("#setting_fircls_page").css("visibility","visible");
                        hiWebOsFrame.settingssysappset.open();
                        if(!!PageDataFirstCls.operateData.applist)
                        {
                            var temp1=_getIndex(PageDataFirstCls.operateData.applist,"netflix");
                            if(temp1>=0)
                            {
                                $("#setting_sys_appset_netflix").css("display","block");

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
                                SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].content)
                                hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn1");
                                var htmlText1 = $("#setting_sys_appset_btn1").html();
                                if (htmlText1.length >12) {
                                    $("#setting_sys_appset_btn1").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                }
                                var marquee = $("#setting_sys_appset_btn2" + " marquee");
                                if (marquee.length > 0) {
                                    var htmlText2 = $("#setting_sys_appset_btn2" + " marquee").html();
                                    var marquee = $("#setting_sys_appset_btn2" ).html(htmlText2);
                                }
                                //SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[0].title,PageDataSysAppSetting.operateData.helplist[0].content)

                            }
                            else if(temp2>=0)
                            {
                                SettingSysAppsetUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[1].content)
                                hiWebOsFrame.settingssysappset.hiFocus("setting_sys_appset_btn2");
                                var htmlText1 = $("#setting_sys_appset_btn2").html();
                                if (htmlText1.length >12) {
                                    $("#setting_sys_appset_btn2").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText1 + '</marquee>');
                                }
                                var marquee = $("#setting_sys_appset_btn1" + " marquee");
                                if (marquee.length > 0) {
                                    var htmlText2 = $("#setting_sys_appset_btn1" + " marquee").html();
                                    var marquee = $("#setting_sys_appset_btn1" ).html(htmlText2);
                                }
                                //SettingFirUpdateHelpinfo(PageDataSysAppSetting.operateData.helplist[1].title,PageDataSysAppSetting.operateData.helplist[1].content)

                            }
                            else
                            {
                                hiWebOsFrame.settingssysappset.hiFocus();
                            }

                            PageDataSysAppSetting.operateData.applist=PageDataFirstCls.operateData.applist;

                        }
                        else{
                            hiWebOsFrame.settingssysappset.hiFocus();
                        }


                    });

                    break;
                }
                case CLOSED_CAPTION://closed caption
                {
                    hiWebOsFrame.settingsFirst.close();
                    $("#setting_fircls_page").css("visibility","visible");
                    hiWebOsFrame.createPage('setting_sys_cc_page', null, hiWebOsFrame.settingsFirst, null, function (cecdev) {
                        hiWebOsFrame.settingssyscc = cecdev;
                        $("#setting_fircls_page").css("visibility","visible");
                        hiWebOsFrame.settingssyscc.open();
                        hiWebOsFrame.settingssyscc.hiFocus();
                        hiWebOsFrame.settingssyscc.rewriteDataOnly();
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
                            SettingSysCecUpdateHelpinfo(PageDateSettingSysCec.operateData.helplist[0].content);
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
                        hiWebOsFrame.createPage('setting_sys_ad_page', null, hiWebOsFrame.settingsFirst, null, function (ad) {
                            hiWebOsFrame.settingssysad = ad;
//                            SettingSysadUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[0].content)
                            $("#setting_fircls_page").css("visibility","visible");
                            hiWebOsFrame.settingssysad.open();
                            hiWebOsFrame.settingssysad.hiFocus();

                        });
//                    }
//                    else
//                    {
//                        hiWebOsFrame.createPage('setting_sys_ad_page2', null, hiWebOsFrame.settingsFirst, null, function (ad) {
//                            hiWebOsFrame.settingssysad = ad;
//                            SettingFirUpdateHelpinfo(PageDataSettingSysAd.operateData.helplist[0].title,PageDataSettingSysAd.operateData.helplist[0].content)
//                            $("#setting_fircls_page").css("visibility","visible");
//                            hiWebOsFrame.settingssysad.open();
//                            hiWebOsFrame.settingssysad.hiFocus();
//
//                        });
//                    }
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
                    hiWebOsFrame.createPage('setting_sys_dis_fir_page', null, hiWebOsFrame.settingsFirst, null, function (disclaimer) {
                        hiWebOsFrame.settingssysdisfir = disclaimer;
                        SettingEULAUpdateHelpinfo(PageDateSettingSysDisfir.operateData.helplist[0].title,PageDateSettingSysDisfir.operateData.helplist[0].content);
                        $("#setting_fircls_page").css("visibility","visible");
                        disclaimer.open();
                        disclaimer.hiFocus();

                    });
                    break;
                }
                case 2://auto update switch
                {

                    if( PageDataFirstCls.operateData.curlocation!="UK")
                    {
                        hiWebOsFrame.createPage('setting_sys_update_page2', null, hiWebOsFrame.settingsFirst, null, function (name) {
                            hiWebOsFrame.settingssysupdate = name;
                            $("#setting_fircls_page").css("visibility","visible");
                            SettingSysUpdate2Helpinfo(PageDateSettingSysUpdate2.operateData.helplist[0].content);
                            hiWebOsFrame.settingssysupdate.open();
                            hiWebOsFrame.settingssysupdate.hiFocus();

                        });

                    }else
                    {
                        hiWebOsFrame.createPage('setting_sys_update_page', null, hiWebOsFrame.settingsFirst, null, function (name) {
                            hiWebOsFrame.settingssysupdate = name;
                            $("#setting_fircls_page").css("visibility","visible");
                            SettingSysUpdateHelpinfo(PageDateSettingSysUpdate.operateData.helplist[0].content);
                            hiWebOsFrame.settingssysupdate.open();
                            hiWebOsFrame.settingssysupdate.hiFocus();

                        });

                    }



//                    hiWebOsFrame.createPage('setting_sys_update_switch_page', null, hiWebOsFrame.settingsFirst, null, function (name) {
//                        //
//                        hiWebOsFrame.settingssysupdateswitch = name;
//                        PageDataSettingUpdateSwitch.operateData.curpage=0;
//                        UpdateSwitchinit();
//                        hiWebOsFrame.settingssysupdateswitch.rewriteDataOnly();
//                        $("#setting_fircls_page").css("visibility","visible");
//                        hiWebOsFrame.settingssysupdateswitch.open();
//                        hiWebOsFrame.settingssysupdateswitch.hiFocus();
//
//
//                    });


                    break;
                }
//                case 3://manual upgrade check
//                {
//
                        //
//////
//                       $("#setting_fircls_page").css("visibility","visible");
//
//                    break;
//                }
//                case 4:
//                {
//                    hiWebOsFrame.createPage('setting_sys_update_switch_page', null, hiWebOsFrame.settingsFirst, null, function (name) {
//                        //
//                        hiWebOsFrame.settingssysupdateswitch = name;
//                        PageDataSettingUpdateSwitch.operateData.curpage=1;
//                        UpdateSwitchinit();
//                        hiWebOsFrame.settingssysupdateswitch.rewriteDataOnly();
//                        $("#setting_fircls_page").css("visibility","visible");
//                        hiWebOsFrame.settingssysupdateswitch.open();
//                        hiWebOsFrame.settingssysupdateswitch.hiFocus();
//
//                    });
//                    break;
//                }
//                case 5:
//                    $("#setting_fircls_page").css("visibility","visible");
//                    break;
                case 3://restore the factory setting
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
function SettingCheckItemisDisable(parenindex, subindex) {
	try {
		var index = _getIndex(PageDataFirstCls.settings_first_ul.disableItem, parenindex);
		if (index >= 0) {
			return 1;
		}
		index = _getIndex(PageDataFirstCls.operateData.settingdisablelist[parenindex], subindex);
		debugPrint("parenindex" + parenindex + "subindex" + subindex + "index" + index);
		if (index >= 0) {
			return 1;

		}
		else {
			debugPrint("return 0");
			return 0;

		}
	} catch (e) {
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

function QuickopenSubtitleSetting(tmp)
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
						hiWebOsFrame.settingslang1.hiFocus(tmp);
					});
				});
			}
		});
	}catch (e)
	{
		debugE(e.message);
	}
}

