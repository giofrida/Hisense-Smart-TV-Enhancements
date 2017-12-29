
var modulesConfig = [
    {
        "id": "OEMlauncherPage",
        "description": "组合后的Launcher网页",
        "pageMode": "module",
        "pageType": "combine",
        "firstFocusId": "",
        "module": "launcher",
        "jsPath": OEMlauncherBaseDir + "OEMlauncherPage.js",
        "cssPath": OEMlauncherBaseDir + "OEMlauncherPage.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "intCombineData",
        "onCreate": "",
        "onOpen": "OEMlauncherPageOnOpen",
        "onClose": "OEMlauncherPageOnClose",
        "onFocus": "OEMlauncherPageOnFocus",
        "onBlur": "OEMlauncherPageOnBlur",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            befEscHandler: "OEMlauncherBackToTV",
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                //以上三项配置必须完全符合
                "brand": ['san','psc','ilo','sei','ton'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/OEMlauncher_ThemeB.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                //以上三项配置必须完全符合
                "brand": ['pio'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/OEMlauncher_ThemeC.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['phi'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/OEMlauncher_ThemeE.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['nob'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/OEMlauncher_ThemeF.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['jvc','cha'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/OEMlauncher_ThemeI.css"
            },
            {
                "subId": "",
                "areas": ['SA', 'COL'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['blu','pan','riv','kal',"cha","cor","mtx"],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/OEMlauncher_ThemeJ.css"
            }

        ]
    },
    {
        "id": "launcher_favoritelist",
        "module": "launcher",
        "jsPath": OEMlauncherBaseDir + "launcherFavlist.js",
        "htmlPath": "OEMLauncher/launcherFavlist.html",
        "cssPath": OEMlauncherBaseDir + "launcherFavlist.css",
        "description": "launcher favlist",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcher_favor_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getLauncherFavlistPageData",
        "onCreate": "",
        "onOpen": "launcherFavlist.onOpen",
        "onClose": "launcherFavlist.onClose",
        "onFocus": "launcherFavlist.onFocus",
        "onBlur": "launcherFavlist.onBlur",
        "onDestroy": "",
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                //以上三项配置必须完全符合
	            "brand": ['san','psc','ilo','sei','ton'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeB.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                //以上三项配置必须完全符合
	            "brand": ['pio'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeC.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
	            "brand": ['phi'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeE.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['nob'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeF.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
	            "brand": ['jvc','cha'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeI.css"
            },
            {
                "subId": "",
                "areas": ['SA','COL'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
	            "brand": ['blu','pan','riv','kal',"cha","cor","mtx"],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeJ.css"
            }

        ]

    },
    {
        "id": "launcher_recentwatch",
        "module": "launcher",
        "jsPath": OEMlauncherBaseDir + "launcherRecentwatch.js",
        "htmlPath": "OEMLauncher/launcherRecentwatch.html",
        "cssPath": OEMlauncherBaseDir + "launcherFavlist.css",
        "description": "launcher recent watch ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcher_recent_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getLauncherRecentWatchPageData",
        "onCreate": "",
        "onOpen": "launcherRecentwatch.onOpen",
        "onClose": "launcherRecentwatch.onClose",
        "onFocus": "launcherRecentwatch.onFocus",
        "onBlur": "launcherRecentwatch.onBlur",
        "onDestroy": "",
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                //以上三项配置必须完全符合
	            "brand": ['san','psc','ilo','sei','ton'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeB.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                //以上三项配置必须完全符合
                "brand": ['pio'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeC.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['phi'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeE.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['nob'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeF.css"
            },
            {
                "subId": "",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                "brand": ['jvc','cha'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeI.css"
            },
            {
                "subId": "",
                "areas": ['SA','COL'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
	            "brand": ['blu','pan','riv','kal',"cha","cor","mtx"],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": OEMlauncherBaseDir + "css/launcherFavlist_ThemeJ.css"
            }

        ]

    },
    {
        "id": "livetv_main",
        "module": "livetv",
        "jsPath": "",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/liveTV.html",
        "cssPath": "",
        "description": "page",
        "pageMode": "module",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getLiveTVPageData",
        "onCreate": "",
        "onOpen": "livetvmain.onOpenLiveTVMain",
        "onClose": "livetvmain.onCloseLiveTVMain",
        "onFocus": "livetvmain.onFocusLiveTVMain",
        "onDestroy": "",
        "noRepeatKeys": [VK_ENTER],
        "pageData": {},
        "handler": liveTVHandler
    },
    {
        "id": "livetv_info_bar",
        "module": "livetv",
        "jsPath": "modulePages/livetv/infoBar.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/infoBar.html",
        "cssPath": "css/livetv/infobar.css",
        "description": "page",
        "pageMode": "module",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getInfoBarPageData",
        "onCreate": "",
        "onOpen": "livetvinfobar.onOpenInfoBar",
        "onClose": "livetvinfobar.onCloseInfoBar",
        "onFocus": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "livetv_volume",
        "module": "livetv",
        "jsPath": "modulePages/livetv/volume.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/volume.html",
        "cssPath": "css/livetv/volume.css",
        "description": "page",
        "pageMode": "module",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getVolumePageData",
        "onCreate": "",
        "onOpen": "vol.onOpenVolume",
        "onClose": "vol.onCloseVolume",
        "onFocus": "",
        "onDestroy": "vol.onCloseVolume",
        "pageData": {}
    },
    {
        "id": "livetv_auto_standby",
        "module": "livetv",
        "jsPath": "modulePages/livetv/autoStandby.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/autoStandby.html",
        "cssPath": "css/livetv/autoStandby.css",
        "description": "page",
        "pageMode": "module",
        "firstFocusId": "livetv_sp_btn",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getAutoStandyPageData",
        "onCreate": "",
        "onOpen": "autostandby.onOpenStandby",
        "onClose": "autostandby.onCloseStandby",
        "onFocus": "",
        "onDestroy": "",
        "pageData": {},
        "receiveAnyKey": true,
        handler: {
            keyAnyHandler: "autostandby.backToLiveTV"
        }
    },
    {
        "id": "livetv_channel_list",
        "module": "livetv",

        "jsPath": "modulePages/livetv/channelList.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/channelList.html",
        "cssPath": "css/livetv/channelList.css",
        "extendPages": [{
            "subId": "livetv_channel_list",
            "areas": ['EU'],
            "subAreas": [],
            "country": [],
            "firstFocusId": "livetv_chlist_channels",
            "brand": [],
            "jsPath": "modulePages/livetv/channelList_EU.js",
            "htmlPath": "UI/hisenseUI/modulePages/livetv/channelList_EU.html",
            "cssPath": "css/livetv/channelList_EU.css"
        }],
        "description": "page",
        "pageMode": "module",
        "firstFocusId": "livetv_chlist_channels",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getChListPageData",
        "onCreate": "",
        "onOpen": "livetvchlist.onOpenChList",
        "onClose": "livetvchlist.onCloseChList",
        "onFocus": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            befEscHandler: "livetvchlist.backToLiveTV",
            keyChListHandler: "livetvchlist.backToLiveTV",
            keyFavCHHandler: "livetvchlist.backToLiveTV"
        },
        "AutoClose": false,
        "AutoCloseTimeLength": 30
    },
    {
        "id": "livetv_channel_list_filter",
        "module": "livetv",
        "jsPath": "modulePages/livetv/channelListFilter.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/channelListFilter.html",
        "cssPath": "css/livetv/channelListFilter.css",
        "description": "page",
        "pageMode": "module",
        "firstFocusId": "chlist_filter_input",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "get_livetv_channel_list_filter_pageData",
        "onCreate": "",
        "onOpen": "livetvchlistfilter.onOpenChListFilter",
        "onClose": "livetvchlistfilter.onCloseChListFilter",
        "onFocus": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            befEscHandler: "livetvchlistfilter.backToChannelList",
            keyChListHandler: "livetvchlistfilter.backToChannelList"
        },
        "AutoClose": false,
        "AutoCloseTimeLength": 30
    },
    {
        "id": "livetv_password_dialog",
        "module": "livetv",
        "jsPath": "modulePages/livetv/passwordDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/passwordDialog.html",
        "cssPath": "css/livetv/passwordDialog.css",
        "description": "page",
        "pageMode": "module",
        "firstFocusId": "pswd_dialog_inputs",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getPasswordDialogPageData",
        "onCreate": "",
        "onOpen": "pswdDialog.onOpenPasswordDialog",
        "onClose": "",
        "onFocus": "",
        "onDestroy": "pswdDialog.onDestroyPasswordDialog",
        "pageData": {},
        "handler": {
            befEscHandler: "pswdDialog.backToLiveTV"
        }
    },
    {
        "id": "livetv_search_dialog",
        "module": "livetv",
        "jsPath": "modulePages/livetv/searchDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/searchDialog.html",
        "cssPath": "css/livetv/searchDialog.css",
        "description": "page",
        "pageMode": "module",
        "firstFocusId": "search_btn_left",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSearchDialogPageData",
        "onCreate": "",
        "onOpen": "srchDialog.onOpenSearchDialog",
        "onClose": "",
        "onFocus": "",
        "onDestroy": "srchDialog.onDestroySearchDialog",
        "pageData": {},
        "handler": {
            befEscHandler: "srchDialog.backToLiveTV"
        }
    },
    {
        "id": "livetv_operate_tip",
        "module": "livetv",
        "jsPath": "modulePages/livetv/operateTip.js",
        "htmlPath": "UI/hisenseUI/modulePages/livetv/operateTip.html",
        "cssPath": "css/livetv/operateTip.css",
        "description": "page",
        "pageMode": "module",
        "firstFocusId": "operate_tip_key_back",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getOperateTipPageData",
        "onCreate": "",
        "onOpen": "opTip.onOpenOperateTip",
        "onClose": "opTip.onCloseOperateTip",
        "onFocus": "",
        "onDestroy": "opTip.onDestroyOperateTip",
        "pageData": {},
        "handler": {
            "befEscHandler": "opTip.backToLiveTV"
        },
        "keys": {
            enable: [VK_ENTER, VK_BACK, VK_VOLUME_DOWN, VK_VOLUME_UP, VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_VOLUME_UP, VK_MUTE]
        }
    },
    {
        "id": "epg",
        "module": "epg",
        "jsPath": "",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epg.html",
        "cssPath": "",
        "pageMode": "module",
        "firstFocusId": 'epg_channel_list',
        "CaE": [],
        "initData": "get_epg_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epg.onOpen",
        "onClose": "epg.onClose",
        "onDestroy": "",
        "onFocus": "epg.onFocus",
        "pageData": {}
    },
    {
        "id": "epg_list_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgList.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgList.html",
        "cssPath": "css/epg/epgList.css",
        "pageMode": "module",
        "firstFocusId": 'epg_list_item',
        "CaE": [],
        "initData": "get_epg_list_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgList.onOpen",
        "onClose": "epgList.onClose",
        "onDestroy": "",
        "onFocus": "epgList.onFocus",
        "pageData": {}
    },
    {
        "id": "epg_detail_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgDetail.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgDetail.html",
        "cssPath": "css/epg/epgDetail.css",
        "pageMode": "module",
        'firstFocusId': "epg_detail_back",
        "CaE": [],
        "initData": "get_epg_detail_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgDetail.onOpen",
        "onClose": "epgDetail.onClose",
        "onDestroy": "",
        "onFocus": "epgDetail.onFocus",
        "pageData": {}
    },
    {
        "id": "epg_fvp_detail_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgFreeviewDetail.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgFreeviewDetail.html",
        "cssPath": "css/epg/epgFreeviewDetail.css",
        "pageMode": "module",
        'firstFocusId': "epg_fvp_detail_image",
        "CaE": [],
        "initData": "get_epg_fvp_detail_page_pageData",
        "onCreate": "",
        "onOpen": "epgFVPDetail.onOpen",
        "onClose": "epgFVPDetail.onClose",
        "onDestroy": "",
        "onFocus": "epgFVPDetail.onFocus",
        "pageData": {},
        "handler": {
            befDownHandler: "epgFVPDetail.keyDownOnDetailBtn",
            befUpHandler: "epgFVPDetail.keyUpOnDetailBtn",
            befEscHandler: "epgBackToOri"
        }
    },
    {
        "id": "epg_book_add_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgBookAdd.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgBookAdd.html",
        "cssPath": "css/epg/epgBookAdd.css",
        "pageMode": "module",
        "firstFocusId": 'epgBookAdd_Nav',
        "CaE": [],
        "initData": "get_epg_book_add_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgBkAdd.onOpen",
        "onClose": "epgBkAdd.onClose",
        "onDestroy": "",
        "onFocus": "epgBkAdd.onFocus",
        "pageData": {}
    },
    {
        "id": "epg_book_edit_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgBookEdit.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgBookEdit.html",
        "cssPath": "css/epg/epgBookEdit.css",
        "pageMode": "module",
        "firstFocusId": 'book_edit_time_mode',
        "CaE": [],
        "initData": "get_epg_book_edit_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgBkEdit.onOpen",
        "onClose": "epgBkEdit.onClose",
        "onDestroy": "",
        "onFocus": "epgBkEdit.onFocus",
        "noRepeatKeys": [VK_ENTER],
        "pageData": {}
    },
    {
        "id": "epg_book_weekly_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgBookWeekly.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgBookWeekly.html",
        "cssPath": "css/epg/epgBookWeekly.css",
        "pageMode": "module",
        "firstFocusId": 'book_weekly_mode',
        "CaE": [],
        "initData": "get_epg_book_weekly_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgBkWeekly.onOpen",
        "onClose": "epgBkWeekly.onClose",
        "onDestroy": "",
        "onFocus": "epgBkWeekly.onFocus",
        "pageData": {}
    },
    {
        "id": "epg_book_schedule_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgBookSchedule.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgBookSchedule.html",
        "cssPath": "css/epg/epgBookSchedule.css",
        "pageMode": "module",
        "firstFocusId": 'book_schedule_list',
        "CaE": [],
        "initData": "get_epg_book_schedule_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgBkSchedule.onOpen",
        "onClose": "epgBkSchedule.onClose",
        "onDestroy": "",
        "onFocus": "epgBkSchedule.onFocus",
        "pageData": {}
    },
    {
        "id": "epg_book_conflict_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgBookConflict.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgBookConflict.html",
        "cssPath": "css/epg/epgBookConflict.css",
        "pageMode": "module",
        "firstFocusId": 'book_conflict_list',
        "CaE": [],
        "initData": "get_epg_book_conflict_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgBkConflict.onOpen",
        "onClose": "epgBkConflict.onClose",
        "onDestroy": "",
        "onFocus": "epgBkConflict.onFocus",
        "pageData": {}
    },
    {
        "id": "epg_theme_color_page",
        "module": "epg",
        "jsPath": "modulePages/epg/epgThemeColor.js",
        "htmlPath": "UI/hisenseUI/modulePages/epg/epgThemeColor.html",
        "cssPath": "css/epg/epgThemeColor.css",
        "pageMode": "module",
        "firstFocusId": 'epg_theme_item_0',
        "CaE": [],
        "initData": "get_epg_theme_color_page_pageData",
        "handler": {"befEscHandler": "epgBackToOri"},
        "onCreate": "",
        "onOpen": "epgTheme.onOpen",
        "onClose": "epgTheme.onClose",
        "onDestroy": "",
        "onFocus": "epgTheme.onFocus",
        "pageData": {}
    },
/*********epos-2014-12-3*********/
    {
        "id": "epos",
        "module": "epos",                         //表示页面所属模块
        "jsPath": "modulePages/epos/epos.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/epos/epos.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/epos.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "epos page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "",//包括button或者Component
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "handler": {"keyAnyHandler": "anyKeyHandler"},
        "receiveAnyKey": true,
        "CaE": "",
        "AutoClose": false,
        "initData": "getEposPageData",                    //页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "eposPageonOpen",                            //页面创建时的回调函数
        "onClose": "eposOnCloseClearHalfAnHour",    //页面创建时的回调函数
        "onDestroy": "eposonDestroy",  //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "epos",
                "areas": ["EM"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": ["Russia_EU","Uzbekistan_EU","Kirghizstan_EU","Tajikistan_EU"],
//                    "firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["-his"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/EM_OEM/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/EM_OEM/epos.html",
                "cssPath": "css/epos_em_oem.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {//
                "subId": "epos",
                "areas": ["EM"],//-运算符必须统一，以第一个为准
                "subAreas": ["-MiddleEast", "CIS", "Africa", "Asian"],
                "country": ["Australia"],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["his"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/EM_AUS/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/EM_AUS/epos.html",
                "cssPath": "css/epos_em_aus.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {//
                "subId": "epos",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["his"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/SA/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/SA/epos.html",
                "cssPath": "css/epos_sa.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {//
                "subId": "epos",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["-his","bgh","jvc","pio","psc","nob","san","phi","ilo","sei","ton"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/SA_OEM/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/SA_OEM/epos.html",
                "cssPath": "css/epos_sa_oem.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {//
                "subId": "epos",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["jvc","pio","psc","nob","san","phi","ilo","sei","ton"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/SA_Newsan/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/SA_Newsan/epos.html",
                "cssPath": "css/epos_sa_newsan.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {//
                "subId": "epos",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["bgh"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/BGH/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/BGH/epos.html",
                "cssPath": "css/epos_bgh.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "epos",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["his"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/EU/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/EU/epos.html",
                "cssPath": "css/epos_eu.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "epos",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["-his"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/EM_OEM/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/EM_OEM/epos.html",
                "cssPath": "css/epos_em_oem.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "epos",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //"firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["-his"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/COL_OEM/epos.js",
                "htmlPath": "UI/hisenseUI/modulePages/epos/COL_OEM/epos.html",
                "cssPath": "css/epos_col_oem.css"
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "epos",
                "areas": ["EM"],//-运算符必须统一，以第一个为准
                "subAreas": ["-Asian"],
                "country": [],
//                    "firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": ["his"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/epos/epos.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
                "htmlPath": "UI/hisenseUI/modulePages/epos/epos.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
                "cssPath": "css/epos.css"       //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }

        ],
        "singleKeyMode": false
    },
/******home-retail mode switch-2015-1-15******/
    {
        "id": "setting_epos_countdown_page",
        "module": "dialog",
        "jsPath": "modulePages/setting/SettingEposStartCountDownBox.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingEposStartCountDownBox.html",
//          "cssPath": "css/channelScanSetStyle.css",
        "description": "Setting Epos Start CountDownBox",
        "AutoClose": false,
        "pageMode": "module",
        "firstFocusId": "setting_sys_wizard_btn_homemode",
//          "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingEposStartCountDownPageData",
        "onCreate": "",
        "onOpen": "onOpenEposCountdownBox",
        "onClose": "",
        "onDestroy": "SettingEposStartCountDownPageonDestroy",
        "pageData": {},
        "keys": { "enable": [VK_LEFT, VK_RIGHT, VK_ENTER] }
    },
/*********   SKB  MODULE Begin *******/
    {
        "id": "softKeyBoard",
        "module": "SKB",                         //表示页面所属模块
        "jsPath": "modulePages/skb/skb.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/skb/skb.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/hiSKB.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "skb page",
        "pageMode": "skb",//可指定module,single,dialog
        "firstFocusId": "letterKey_0",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "handler": {
            "keyRedHandler": "skbKeyLeft",
            "keyGreenHandler": "skbKeyRight",
            "keyYellowHandler": "clearAll",
            "keyBlueHandler": "exitSKB",
            "aftEscHandler": "exitSKBNotSave"
        },
        "CaE": "",
        "initData": "getSKBPageData",                    //页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
//                "enable": [VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
//                    VK_RED, VK_BLUE, VK_GREEN, VK_YELLOW]
            "disable": [
                VK_MENU, VK_STOP, VK_EPG, VK_CHANNEL_UP, VK_CHANNEL_DOWN,
                VK_MENU, VK_INFO, VK_PIP, VK_HOME, VK_PVR, VK_T_SHIFT
                , VK_PLAY, VK_PAUSE, VK_FAST_FWD, VK_FAST_BKW, VK_PRE_CH, VK_MEDIA, VK_LIVETV,
                VK_TOOLS, VK_LAST, VK_NEXT, VK_CH_LIST, VK_ZOOM, VK_PICTURE, VK_S_MODE, VK_CUSTOMER_3D, VK_LANGUAGE, VK_SUBTITLE,
                VK_KEYPAD_VOLUME_UP, VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_CHANNEL_UP,
                VK_KEYPAD_CHANNEL_DOWN
            ]
        }
    },
    // liutiantian add begin
    {
        "id": "iqqi",
        "module": "iqqi",                         //表示页面所属模块
        "jsPath": "modulePages/skb/iqqi/js/iqqi.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/skb/iqqi/iqqi.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "modulePages/skb/iqqi/css/iqqi.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "IQQI输入法",
        "pageMode": "iqqi",//可指定module,single,dialog
        "firstFocusId": "FirstLineKey_0",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "handler": {
            "aftEscHandler": "iqqiPageAftEscHandler",
            "aftEnterHandler": "iqqiPageAftEnterHandler",
            "befLeftHandler": "iqqiPageBefLeftHandler",
            "befRightHandler": "iqqiPageBefRightHandler",
            "keyRedHandler": "iqqiPageKeyRedHandler",
            "keyGreenHandler": "iqqiPageKeyGreenHandler",
            "keyYellowHandler": "iqqiPageKeyYellowHandler",
            "keyBlueHandler": "iqqiPageKeyBlueHandler"
        },
        "CaE": "",
        "initData": "getIQQIPageData",                    //页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
//                "enable": [VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
//                    VK_RED, VK_BLUE, VK_GREEN, VK_YELLOW]
            "disable": [
                VK_MENU, VK_STOP, VK_EPG, VK_CHANNEL_UP, VK_CHANNEL_DOWN,
                VK_MENU, VK_INFO, VK_PIP, VK_HOME, VK_PVR, VK_T_SHIFT
                , VK_PLAY, VK_PAUSE, VK_FAST_FWD, VK_FAST_BKW, VK_PRE_CH, VK_MEDIA, VK_LIVETV,
                VK_TOOLS, VK_LAST, VK_NEXT, VK_CH_LIST, VK_ZOOM, VK_PICTURE, VK_S_MODE, VK_CUSTOMER_3D, VK_LANGUAGE, VK_SUBTITLE,
                VK_KEYPAD_VOLUME_UP, VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_CHANNEL_UP,
                VK_KEYPAD_CHANNEL_DOWN
            ]
        },
        "checkKeyCode": "iqqiCheckKeyCode"
    },
    // liutiantian add end
    {
        "id": "softKeyBoardLanguage",
        "module": "SKB",                         //表示页面所属模块
        "jsPath": "modulePages/skb/skb.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/skb/skblan.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/hiSKB.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "inpout test sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "skbLanListUl",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "keys": {
            "enable": [VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_RED, VK_BLUE, VK_GREEN, VK_YELLOW],
            "disable": [,
                VK_MENU, VK_HOME, VK_MEDIA, VK_PICTURE, VK_EPG, VK_LIVETV,
                VK_TOOLS, VK_LAST, VK_NEXT, VK_EXIT, VK_CH_LIST, VK_ZOOM, VK_S_MODE, VK_CUSTOMER_3D, VK_LANGUAGE, VK_SUBTITLE,
                VK_KEYPAD_VOLUME_UP, VK_KEYPAD_VOLUME_DOWN, VK_KEYPAD_CHANNEL_UP,
                VK_KEYPAD_CHANNEL_DOWN
            ]
        },
        "handler": {
            "aftEscHandler": "exitSKBLan"
        },
        "CaE": "",
        "initData": "getSKBLanPageData",                    //页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
/*********   SKB  MODULE End *******/


/**--------------------- accuweather beg ---------------------**/
    {
        "id": "accuweather_main",
        "module": "accuweather",
        "jsPath": launcherBaseDir + "js/accuweatherMain.js",
        "htmlPath": "launcher/html/accuweatherMain.html",
        "cssPath": launcherBaseDir + "css/accuweatherMain.css",
        "description": "accuweather main panel",
        "pageMode": "module",
        "firstFocusId": "accu_cp_color",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getAccuweatherMainPageData",
        "onCreate": "",
        "onOpen": "accuMain.onOpen",
        "onClose": "accuMain.onClose",
        "onFocus": "accuMain.onFocus",
        "onBlur": "accuMain.onBlur",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "accuweather_deletecity",
        "module": "accuweather",
        "jsPath": launcherBaseDir + "js/accuweatherDeleteCity.js",
        "htmlPath": "launcher/html/accuweatherDeleteCity.html",
        "cssPath": launcherBaseDir + "css/accuweatherDeleteCity.css",
        "description": "accuweather delete city panel",
        "pageMode": "module",
        "firstFocusId": "accu_dc_list",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getAccuweatherDeleteCityPageData",
        "onCreate": "",
        "onOpen": "accuDCity.onOpen",
        "onClose": "",
        "onFocus": "accuDCity.onFocus",
        "onBlur": "accuDCity.onBlur",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK, VK_EXIT, VK_LIVETV, VK_HOME]
        }
    },
    {
        "id": "accuweather_addcity",
        "module": "accuweather",
        "jsPath": launcherBaseDir + "js/accuweatherAddCity.js",
        "htmlPath": "launcher/html/accuweatherAddCity.html",
        "cssPath": launcherBaseDir + "css/accuweatherAddCity.css",
        "description": "accuweather add city panel",
        "pageMode": "module",
        "firstFocusId": "accu_ac_search",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getAccuweatherAddCityPageData",
        "onCreate": "",
        "onOpen": "accuACity.onOpen",
        "onClose": "accuACity.onClose",
        "onFocus": "accuACity.onFocus",
        "onBlur": "accuACity.onBlur",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,VK_KPAD,
                VK_EXIT, VK_LIVETV, VK_0, VK_1, VK_2, VK_3, VK_4, VK_5, VK_6,
                VK_7, VK_8, VK_9, VK_HOME]
        }
    },
    {
        "id": "accuweather_searchlist",
        "module": "accuweather",
        "jsPath": launcherBaseDir + "js/accuweatherSearchList.js",
        "htmlPath": "launcher/html/accuweatherSearchList.html",
        "cssPath": launcherBaseDir + "css/accuweatherSearchList.css",
        "description": "accuweather city search list panel",
        "pageMode": "module",
        "firstFocusId": "accu_ac_list",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getAccuweatherSearchListPageData",
        "onCreate": "",
        "onOpen": "accuSList.onOpen",
        "onClose": "",
        "onFocus": "accuSList.onFocus",
        "onBlur": "accuSList.onBlur",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK, VK_EXIT, VK_LIVETV, VK_HOME]
        }
    },
    {
        id: "accuweather_citylist",
        "module": "accuweather",
        "jsPath": launcherBaseDir + "js/accuweatherCityList.js",
        "htmlPath": "launcher/html/accuweatherCityList.html",
        "cssPath": launcherBaseDir + "css/accuweatherCityList.css",
        "description": "accuweather city list panel",
        "pageMode": "module",
        "firstFocusId": "accu_cl_list",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getAccuweatherCityListPageData",
        "onCreate": "",
        "onOpen": "accuCList.onOpen",
        "onClose": "",
        "onFocus": "accuCList.onFocus",
        "onBlur": "accuCList.onBlur",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK, VK_EXIT, VK_LIVETV, VK_HOME]
        }
    },
/**--------------------- accuweather end ---------------------**/

/**--------------------- dialog beg ---------------------**/
    {
        "id": "dialog_common",
        "module": "dialog",
        "jsPath": "modulePages/dialog/dialogCommon.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogCommon.html",
        "cssPath": "css/dialog/dialogCommon.css",
        "description": "dialog common",
        "pageMode": "module",
        "firstFocusId": "dialog_cpb_cancel",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getDialogCommonData",
        "onCreate": "",
        "onOpen": "dlgCommon.onOpen",
        "onClose": "",
        "onFocus": "dlgCommon.onFocus",
        "onBlur": "dlgCommon.onBlur",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE
            ]
        }
    },
    {
        "id": "dialog_reminder",
        "module": "dialog",
        "jsPath": "modulePages/dialog/dialogReminder.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogReminder.html",
        "cssPath": "css/dialog/dialogReminder.css",
        "description": "dialog common",
        "pageMode": "module",
        "firstFocusId": "dialog_reminder_ok",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getDialogReminderData",
        "onCreate": "",
        "onOpen": "dlgReminder.onOpenReminderPage",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "dlgReminder.onDestroyReminderPage",
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE
            ]
        }
    },
    {
        "id": "dialog_usb",
        "module": "dialog",
        "jsPath": "modulePages/dialog/dialogUSB.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogUSB.html",
        "cssPath": "css/dialog/dialogUSB.css",
        "description": "dialog usb",
        "pageMode": "module",
        "firstFocusId": "dialog_usb_media_list",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "dlgUSB.closeUSBDialog"
        },
        "AutoClose": false,
        "initData": "getDialogUSBData",
        "onCreate": "",
        "onOpen": "dlgUSB.openUSBDialog",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE
            ]
        }
    },
    {
        "id": "dialog_pvr_file_manager",
        "module": "dialog",
        "jsPath": "modulePages/dialog/dialogPVRFileManager.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogPVRFileManager.html",
        "cssPath": "css/dialog/dialogPVRFileManager.css",
        "pageMode": "module",
        "firstFocusId": "pvr_file_manager_cmp",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "dialogPVRFileManager.dialogPVRFileManagerEscHandler"
        },
        "AutoClose": false,
        "initData": "getDialogPVRFileManagerData",
        "onCreate": "",
        "onOpen": "dialogPVRFileManager.dialogPVRFileManagerOnOpen",
        "onClose": "dialogPVRFileManager.dialogPVRFileManagerOnClose",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE, VK_RED
            ]
        }
    },
    {
        "id": "dialog_pvr_file_manager_dialog",
        "module": "dialog",
        "jsPath": "modulePages/dialog/dialogPVRFileManagerDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogPVRFileManagerDialog.html",
        "cssPath": "css/dialog/dialogPVRFileManager.css",
        "pageMode": "module",
        "firstFocusId": "dialog_pvr_file_manager_dialog_btn_1",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "dialogPVRFileManagerDialog.escHandler"
        },
        "AutoClose": false,
        "initData": "getDialogPVRFileManagerDialogData",
        "onCreate": "",
        "onOpen": "dialogPVRFileManagerDialog.dialogPVRFileManagerDialogOnOpen",
        "onClose": "dialogPVRFileManagerDialog.dialogPVRFileManagerDialogOnClose",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "dialogPVRFileManagerDialog.dialogPVRFileManagerDialogOnDestroy",
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE, VK_RED
            ]
        }
    },
    {
        "id": "dialog_headphone_insert",
        "module": "dialog",
        "jsPath": "modulePages/dialog/dialogHeadphoneInsert.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogHeadphoneInsert.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "dialog_headphone_insert_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getDialogHeadphoneInsertData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": 'dialogHeadphoneInsert.onOpenDialogHeadphoneInsert',      //页面创建时的回调函数
        "onClose": 'dialogHeadphoneInsert.onCloseDialogHeadphoneInsert',                        //页面关闭时的回调函数
        "onDestroy": 'dialogHeadphoneInsert.onDestroyDialogHeadphoneInsert',                       //页面销毁时的回调函数
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE
            ]
        }
    },
    {
        "id": "dialog_network",
        "module": "dialog",
        "jsPath": "modulePages/dialog/dialogNetwork.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogNetwork.html",
        "cssPath": "css/dialog/dialogNetwork.css",
        "description": "dialog network",
        "pageMode": "module",
        "firstFocusId": "dialog_np_btn_setup",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "dlgNetwork.backToOri"
        },
        "AutoClose": false,
        "initData": "getDialogNetworkData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "dlgNetwork.onCloseDialogNetwork",
        "onFocus": "dlgNetwork.onFocusDialogNetwork",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE
            ]
        }
    },
    {
        "id": "OEMLauncherAppDeleteDialog",
        "module": "launcher",
        "jsPath": "modulePages/dialog/dialogOEMAppDelete.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/dialogOEMAppDelete.html",
        "cssPath": "",
        "description": "app delete dialog",
        "pageMode": "module",
        "firstFocusId": "OEMLauncherAppDelCancel",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "OEMAppDeleteDialogCancelHandle"
        },
        "AutoClose": false,
        "initData": "getDialogOEMAppDeleteData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {},
        "keys": {
            "enable": [
                VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN, VK_ENTER, VK_BACK,
                VK_VOLUME_DOWN, VK_VOLUME_UP, VK_MUTE, VK_EXIT, VK_HOME
            ]
        }
    },
    {
        "id": "VIDAALiteLauncherEULADialog",
        "module": "dialog",
        "jsPath": "modulePages/dialog/VIDAALiteLauncherEULADialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/dialog/VIDAALiteLauncherEULADialog.html",
        "cssPath": "",
        "description": "EULA dialog",
        "pageMode": "module",
        "firstFocusId": "VIDAALiteLauncherEULACancel",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "VIDAALiteLauncherEULACancelHandle"
        },
        "AutoClose": false,
        "initData": "getVIDAALiteLauncherEULADialogData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "VIDAALiteLauncherEULAOnClose",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "VIDAALiteLauncherEULAOnDestroy",
        "pageData": {}
    },
/**--------------------- dialog end ---------------------**/

/**--------------------- launcher beg ---------------------**/
    {
        "id": "launcher_stabar",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherStaBar.js",
        "htmlPath": "launcher/html/launcherStaBar.html",
        "cssPath": launcherBaseDir + "css/launcherStaBar.css",
        "description": "launcher Status Bar",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcher_hdldt_top",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getLauncherStatusBarPageData",
        "onCreate": "",
        "onOpen": "launcherSBar.onOpen",
        "onClose": "launcherSBar.onClose",
        "onFocus": "launcherSBar.onFocus",
        "onBlur": "launcherSBar.onBlur",
        "onDestroy": "launcherSBar.onDestroy",
        "pageData": {},
        "handler": {
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        }
    },
    {
        "id": "myLauncher",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherNavBar.js",
        "htmlPath": "launcher/html/launcherNavBar.html",
        "cssPath": launcherBaseDir + "css/launcherNavBar.css",
        "description": "launcher navigation bar",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcher_nb_content",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getLauncherNavBarPageData",
        "onCreate": "launcherOnCreate",
        "onOpen": "launcherNBar.onOpen",
        "onClose": "launcherNBar.onClose",
        "onFocus": "launcherNBar.onFocus",
        "onBlur": "launcherNBar.onBlur",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "extendPages": [//多个页面都符合条件,用最后符合的
	        {
		        "subId": "myLauncher",
		        "areas": ['SA'],
		        "subAreas": [],
		        "country": [],
		        "firstFocusId": "launcher_nb_content",
		        //以上三项配置必须完全符合
		        "brand": ['bgh', 'dev', 'riv'],   //空值为All，“-”表示排除，，以第一个为准
		        "cssPath": launcherBaseDir + "css/launcherNavBar_ThemeA.css"
	        },
            {
                "subId": "myLauncher",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "launcher_nb_content",
                //以上三项配置必须完全符合
                "brand": ['tel','cha'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": launcherBaseDir + "css/launcherNavBar_ThemeB.css"
            },
            {
                "subId": "myLauncher",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "launcher_nb_content",
                //以上三项配置必须完全符合
                "brand": ['Hisense', 'his', 'pan'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": launcherBaseDir + "css/launcherNavBar_ThemeC.css"
            },
	        {
		        "subId": "myLauncher",
		        "areas": ['SA'],
		        "subAreas": [],
		        "country": [],
		        "firstFocusId": "launcher_nb_content",
		        //以上三项配置必须完全符合
		        "brand": ['kal'],   //空值为All，“-”表示排除，，以第一个为准
		        "cssPath": launcherBaseDir + "css/launcherNavBar_ThemeD.css"
	        },
            {
                "subId": "myLauncher",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "launcher_nb_content",
                //以上三项配置必须完全符合
                "brand": ['ezy'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": launcherBaseDir + "css/launcherNavBar_ThemeF.css"
            },
            {
                "subId": "myLauncher",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "launcher_nb_content",
                //以上三项配置必须完全符合
                "brand": ['blu', 'ame'],   //空值为All，“-”表示排除，，以第一个为准
                "cssPath": launcherBaseDir + "css/launcherNavBar_ThemeH.css"
            }

        ]
    },
    {
        "id": "launcher_allapps",
        "module": "allapps",
        "jsPath": launcherBaseDir + "js/launcherAllApps.js",
        "htmlPath": "launcher/html/launcherAllApps.html",
        "cssPath": launcherBaseDir + "css/launcherAllApps.css",
        "description": "launcher all apps",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcher_aaa_panel",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": "getlauncherAllAppsPageData",
        "onCreate": "",
        "onOpen": "launcherAApps.onOpen",
        "onClose": "launcherAApps.onClose",
        "onFocus": "launcherAApps.onFocus",
        "onBlur": "launcherAApps.onBlur",
        "onDestroy": "",
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "launcher_allapps",
                "areas": ['EM','EU'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "launcher_aah_content",
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": launcherBaseDir + "js/launcherAllAppsWithHot.js",
                //"htmlPath": "launcher/html/launcherAllAppsWithHot.html",
                "cssPath": launcherBaseDir + "css/launcherAllAppsWithHot.css"
            },
            {
                "subId": "launcher_allapps",
                "areas": ['SA'],
                "subAreas": [],
                "country": [],
                "firstFocusId": "",
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "",
                //"htmlPath": "launcher/html/launcherAllAppsWithHot.html",
                "cssPath": ""
            }
        ]
    },
    {
        "id": "launcher_apps",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherApps.js",
        "htmlPath": "launcher/html/launcherApps.html",
        "cssPath": launcherBaseDir + "css/launcherApps.css",
        "description": "launcher apps",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcher_ap_grid",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getlauncherAppsPageData",
        "onCreate": "",
        "onOpen": "launcherApps.onOpen",
        "onClose": "",
        "onFocus": "launcherApps.onFocus",
        "onBlur": "launcherApps.onBlur",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "launcher_usa_vod",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherUSAVod.js",
        "htmlPath": "launcher/html/launcherUSAVod.html",
        "cssPath": launcherBaseDir + "css/launcherUSAVod.css",
        "description": "launcher vod",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcherUSAVod_vimeo",//包括button或者Component
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherUSAVodPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "LauncherUSAVodOnClose",
        "onFocus": "LauncherUSAVodOnFocus",
        "onBlur": "",
        "onDestroy": "LauncherUSAVodOnDestory",
        "pageData": {}
    },
    {
        "id": "launcher_canada_vod",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherCanadaVod.js",
        "htmlPath": "launcher/html/launcherCanadaVod.html",
        "cssPath": launcherBaseDir + "css/launcherCanadaVod.css",
        "description": "launcher vod",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcherCanadaVod_youtube",//包括button或者Component
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherCanadaVodPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "LauncherCanadaVodOnClose",
        "onFocus": "LauncherCanadaVodOnFocus",
        "onBlur": "",
        "onDestroy": "LauncherCanadaVodOnDestory",
        "pageData": {}
    },
    {
        "id": "launcher_template14_vod",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherTemplate14Vod.js",
        "htmlPath": "launcher/html/launcherTemplate14Vod.html",
        "cssPath": launcherBaseDir + "css/launcherTemplate14Vod.css",
        "description": "launcher vod",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcherCanadaVod_youtube_14",//包括button或者Component
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherCanadaVodPageData_14",
        "onCreate": "",
        "onOpen": "",
        "onClose": "LauncherCanadaVodOnClose_14",
        "onFocus": "LauncherCanadaVodOnFocus_14",
        "onBlur": "",
        "onDestroy": "LauncherCanadaVodOnDestory_14",
        "pageData": {}
    },
	{
		"id": "launcher_template42_apps",
		"module": "launcher",
		"jsPath": launcherBaseDir + "js/launcherTemplate42Apps.js",
		"htmlPath": "launcher/html/launcherTemplate42Apps.html",
		"cssPath": launcherBaseDir + "css/launcherTemplate42Apps.css",
		"description": "launcher apps",
		"pageMode": "module",//可指定module,single,dialog
		"firstFocusId": "launcherTemplate42Apps_2",//包括button或者Component
		"horizontalEdgesJump": false,
		"verticalEdgesJump": true,
		"CaE": [],
		"handler": {
			befEscHandler: "launcherNBar.backToLiveTV",
			aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
		},
		"AutoClose": false,
		"initData": "getLauncherTemplate42AppsPageData",
		"onCreate": "",
		"onOpen": "",
		"onClose": "",
		"onFocus": "",
		"onBlur": "",
		"onDestroy": "",
		"pageData": {}
	},
	{
		"id": "launcher_template43_vod",
		"module": "launcher",
		"jsPath": launcherBaseDir + "js/launcherTemplate43Vod.js",
		"htmlPath": "launcher/html/launcherTemplate43Vod.html",
		"cssPath": launcherBaseDir + "css/launcherTemplate43Vod.css",
		"description": "launcher vod",
		"pageMode": "module",//可指定module,single,dialog
		"firstFocusId": "launcherTemplate43Vod_3",//包括button或者Component
		"horizontalEdgesJump": false,
		"verticalEdgesJump": true,
		"CaE": [],
		"handler": {
			befEscHandler: "launcherNBar.backToLiveTV",
			aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
		},
		"AutoClose": false,
		"initData": "getLauncherTemplate43VodPageData",
		"onCreate": "",
		"onOpen": "",
		"onClose": "",
		"onFocus": "",
		"onBlur": "",
		"onDestroy": "",
		"pageData": {}
	},
    {
        "id": "liveTv_launcher",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherLiveTV.js",
        "htmlPath": "launcher/html/launcherLiveTV.html",
        "cssPath": launcherBaseDir + "css/launcherLiveTV.css",
        "description": "launcher live tv",
        "pageMode": "module",
        "firstFocusId": "launcherLiveTv_right_item_Ul",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherLiveTVPageData",
        "onCreate": "",
        "onOpen": "LauncherLiveTVOnOpenHandler",
        "onClose": "",
        "onFocus": "LauncherLiveTVOnFocusHandler",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "launcher_module8",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherModule8.js",
        "htmlPath": "launcher/html/launcherModule8.html",
        "cssPath": launcherBaseDir + "css/launcherSports8.css",
        "description": "launcher sports",
        "pageMode": "module",
        "firstFocusId": "launcherModule8_position8",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherModule8PageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "launcher_module9",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherModule9.js",
        "htmlPath": "launcher/html/launcherModule9.html",
        "cssPath": launcherBaseDir + "css/launcherYoutube9.css",
        "description": "launcher moudle 9",
        "pageMode": "module",
        "firstFocusId": "launcherModule9_position8",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherModule9PageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "launcher_module25",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherModule25.js",
        "htmlPath": "launcher/html/launcherModule25.html",
        "cssPath": launcherBaseDir + "css/launcherMusic25.css",
        "description": "launcher module 25",
        "pageMode": "module",
        "firstFocusId": "launcherModule25_position8",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherModule25PageData",
        "onCreate": "",
        "onOpen": "launcherModule25OnOpenHandle",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "launcher_EU_movie_Ger",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherMovieEUGer.js",
        "htmlPath": "launcher/html/launcherMovieEUGer.html",
        "cssPath": launcherBaseDir + "css/launcherMovieEUGer.css",
        "description": "launcher movie german",
        "pageMode": "module",
        "firstFocusId": "launcherMovieGerGridUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherMovieGerData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "LauncherMovieGerOndestroy",
        "pageData": {}
    },
    {
        "id": "launcher_EU_movie_Eng",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherMovieEUEng.js",
        "htmlPath": "launcher/html/launcherMovieEUEng.html",
        "cssPath": launcherBaseDir + "css/launcherMovieEUGer.css",
        "description": "launcher movie german",
        "pageMode": "module",
        "firstFocusId": "launcherMovieEngGridUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getlauncherMovieEngData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "LauncherMovieEngOndestroy",
        "pageData": {}
    },
    {
        "id": "launcher_EU_kids",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherKidEU.js",
        "htmlPath": "launcher/html/launcherKidEU.html",
        "cssPath": launcherBaseDir + "css/launcherKidEU.css",
        "description": "launcher movie german",
        "pageMode": "module",
        "firstFocusId": "launcherKidEU_middle_1",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getlauncherKidEUData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "launcherHimediaPageId",
        "module": "launcher",
        "jsPath": launcherBaseDir + "js/launcherHimediaPage.js",
        "htmlPath": "launcher/html/launcherHimediaPage.html",
        "cssPath": launcherBaseDir + "css/launcherHimedia.css",
        "description": "launcher Himedia",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcherHimediaUl",//包括button或者Component
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "launcherNBar.backToLiveTV",
            aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
        },
        "AutoClose": false,
        "initData": "getLauncherHimediaPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "launcherHimediaOnDestory",
        "pageData": {}
    },
	{
		"id": "launcherHimediaPageIdBGH",
		"module": "launcher",
		"jsPath": launcherBaseDir + "js/launcherHimediaPageBGH.js",
		"htmlPath": "launcher/html/launcherHimediaPageBGH.html",
		"cssPath": launcherBaseDir + "css/launcherHimediaBGH.css",
		"description": "launcher Himedia",
		"pageMode": "module",//可指定module,single,dialog
		"firstFocusId": "launcherHimediaUl",//包括button或者Component
		"horizontalEdgesJump": false,
		"verticalEdgesJump": true,
		"CaE": [],
		"handler": {
			befEscHandler: "launcherNBar.backToLiveTV",
			aftLowBatteryHandler: "launcherSBar.LowBatteryHandler"
		},
		"AutoClose": false,
		"initData": "getLauncherHimediaPageDataBGH",
		"onCreate": "",
		"onOpen": "",
		"onClose": "",
		"onFocus": "",
		"onBlur": "",
		"onDestroy": "launcherHimediaOnDestoryBGH",
		"pageData": {}
	},
/**--------------------- launcher end ---------------------**/

/**--------------------- app page beg ---------------------**/
    {
        "id": "app_youtube",
        "module": "app",
        "jsPath": "modulePages/appPages/youtube.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app youtube",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getYoutubePageData',
        "onCreate": "",
        "onOpen": "appYoutube.onOpenYoutube",
        "onClose": "appYoutube.onCloseYoutube",
        "onFocus": "appYoutube.onFocusYoutube",
        "onBlur": "",
        "onDestroy": "appYoutube.onCloseYoutube",
        "pageData": {}
    },
    {
        "id": "app_netflix",
        "module": "app",
        "jsPath": "modulePages/appPages/netflix.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app netflix",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getNetflixPageData',
        "onCreate": "",
        "onOpen": "appNetflix.onOpenNetflix",
        "onClose": "appNetflix.onCloseNetflix",
        "onFocus": "appNetflix.onFocusNetflix",
        "onBlur": "",
        "onDestroy": "appNetflix.onCloseNetflix",
        "pageData": {}
    },
    {
        "id": "app_vudu",
        "module": "app",
        "jsPath": "modulePages/appPages/vudu.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app vudu",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getVuduPageData',
        "onCreate": "",
        "onOpen": "appVudu.onOpenVudu",
        "onClose": "appVudu.onCloseVudu",
        "onFocus": "appVudu.onFocusVudu",
        "onBlur": "",
        "onDestroy": "appVudu.onCloseVudu",
        "pageData": {}
    },
    {
        "id": "app_amazon",
        "module": "app",
        "jsPath": "modulePages/appPages/amazon.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app amazon",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getAmazonPageData',
        "onCreate": "",
        "onOpen": "appAmazon.onOpenAmazon",
        "onClose": "appAmazon.onCloseAmazon",
        "onFocus": "appAmazon.onFocusAmazon",
        "onBlur": "",
        "onDestroy": "appAmazon.onCloseAmazon",
        "pageData": {}
    },
    {
        "id": "app_amazonruby",
        "module": "app",
        "jsPath": "modulePages/appPages/amazonruby.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app amazonruby",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getAmazonrubyPageData',
        "onCreate": "",
        "onOpen": "appAmazonruby.onOpenAmazonruby",
        "onClose": "appAmazonruby.onCloseAmazonruby",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "appAmazonruby.onCloseAmazonruby",
        "pageData": {}
    },
    {
        "id": "app_tv_store",
        "module": "app",
        "jsPath": "modulePages/appPages/appTVStore.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app tv store",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getTVStorePageData',
        "onCreate": "",
        "onOpen": "appTVStore.onOpenTVStore",
        "onClose": "appTVStore.onCloseTVStore",
        "onFocus": "appTVStore.onFocusTVStore",
        "onBlur": "",
        "onDestroy": "appTVStore.onCloseTVStore",
        "pageData": {}
        //"extendPages": [//多个页面都符合条件,用最后符合的
        //{
        //    "subId": "app_tv_store",
        //    "areas": ['EU'],
        //    "subAreas": [],
        //    "country": [],
        //    以上三项配置必须完全符合
        //"brand": [],   //空值为All，“-”表示排除，，以第一个为准
        //"jsPath": "modulePages/appPages/appFoxxum.js"
        //}
        //]
    },
    {
        "id": "app_netrange",
        "module": "app",
        "jsPath": "modulePages/appPages/appNetrange.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app netrange",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getNetrangePageData',
        "onCreate": "",
        "onOpen": "appNetrange.onOpenNetrange",
        "onClose": "appNetrange.onCloseNetrange",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "appNetrange.onCloseNetrange",
        "pageData": {}
    },
    {
        "id": "app_web",
        "module": "app",
        "jsPath": "modulePages/appPages/appWeb.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app web",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getWebAppPageData',
        "onCreate": "",
        "onOpen": "appWeb.onOpenWeb",
        "onClose": "appWeb.onCloseWeb",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "app_hi_browser",
        "module": "app",
        "jsPath": "modulePages/appPages/hiBrowser.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app hibrowser",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getHiBrowserPageData',
        "onCreate": "",
        "onOpen": "appHiBrowser.onOpenHiBrowser",
        "onClose": "appHiBrowser.onCloseHiBrowser",
        "onFocus": "appHiBrowser.onFocusHiBrowser",
        "onBlur": "",
        "onDestroy": "appHiBrowser.onCloseHiBrowser",
        "pageData": {}
    },
    {
        "id": "app_lau_browser",
        "module": "app",
        "jsPath": "modulePages/appPages/browser.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app browser",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            aftEscHandler: "appBrowser.appBrowserEscHandler"
        },
        "AutoClose": false,
        "initData": 'getBrowserPageData',
        "onCreate": "",
        "onOpen": "appBrowser.onOpenBrowser",
        "onClose": "appBrowser.onCloseBrowser",
        "onFocus": "appBrowser.onFocusBrowser",
        "onBlur": "",
        "onDestroy": "appBrowser.onCloseBrowser",
        "pageData": {}
    },
    {
        "id": "app_factory",
        "module": "app",
        "jsPath": "modulePages/appPages/factory.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app factory",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getFactoryPageData',
        "onCreate": "",
        "onOpen": "appFac.onOpenFactory",
        "onClose": "appFac.onCloseFactory",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "appFac.onCloseFactory",
        "pageData": {}
    },
    {
        "id": "app_bridge",
        "module": "bridge",
        "jsPath": "modulePages/appPages/bridgePage.js",
        "htmlPath": "",
        "cssPath": "",
        "description": "app bridge",
        "pageMode": "module",
        "firstFocusId": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {},
        "AutoClose": false,
        "initData": 'getBridgePageData',
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
/**--------------------- app page end ---------------------**/
/**--------------------- wizard  page start ---------------------**/

    {
        "id": "boe_bg_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_bg_page.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_background.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "initData": "getboeBlackBgPageData",//页面创建前的回调函数
        "onDestroy": "boeBackgroundOnDestroy",  //页面创建时的回调函数
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_lang_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_lang.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_lang.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "modulePages/epg.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "boe language page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boeLanGridUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        // "AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "initData": "getboeLanPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeLanPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeLanPageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_cty_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_cty.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_cty.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "modulePages/epg.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "boe country page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boeCtyGridUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeCtyToLangPage"
        },
        "initData": "getboeCtyPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeCtyPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeCtyPageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_timezone_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_timezone.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_timezone.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "modulePages/epg.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "boe timezone page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boetimezoneGridUl",//包括button或者Component
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeTimezoneToCtyPage"
        },
        "initData": "getboeTimezonePageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeTimezonePageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeTimezonePageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },

    {
        "id": "boe_complete_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_complete.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_complete.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "firstFocusId": "complete_btn_no",
        "handler": {
            "aftEscHandler": "boeCompleteToPreviousPage"
        },
        "initData": "getboeCompletePageData",//页面创建前的回调函数
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeCompletePageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeCompleteOnDestroy",  //页面创建时的回调函数
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_retail_dialog",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_retail_dialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_retail_dialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "firstFocusId": "boe_retail_dialog_button2",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getboeRetailDialogPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "boeRetailDialogPageonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "boeRetailDialogPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "boe_disclaimer_page_id",
        "module": "wizard",
        "jsPath": "modulePages/boe/boe_disclaimer.js",
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_disclaimer.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "boe network disclaimer page ",
        "pageMode": "module",
        "firstFocusId": "DisAcceptAllItem",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeDisToPreviousPage"
        },
        "initData": "getboeNetSetDisclaimerPageData",
        "onCreate": "",
        "onOpen": "boeNetSetDisclaimerPageOnOpen",
        "onClose": "",
        "onDestroy": "boeNetSetDisclaimerPageOnDestroy",
        "pageData": {},
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_disinfo_page_id",
        "module": "wizard",
        "jsPath": "modulePages/boe/boe_dis_info.js",
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_dis_info.html",
        "description": "setting disclaimer Info page ",
        "pageMode": "module",
        "firstFocusId": "DisInfoBox",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeDisEscHandler"
        },
        "initData": "getboeDisInfoPageData",
        "onCreate": "",
        "onOpen": "boeDisInfoOpenHandler",
        "onClose": "",
        "onDestroy": "boeDisInfoPageOnDestroy",
        "pageData": {},
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },


/**************************  开机导航 网络设置模块   begin  **********************************/
    {
        "id": "boe_network_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_network.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_network.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "initData": "getboeNetworkPageData",//页面创建前的回调函数
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "firstFocusId": "boeNetworkGridUl",
        "handler": {
            "aftEscHandler": "boeNetworkToDisclaimerPage"
        },
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetworkPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetworkOnDestroy",  //页面创建时的回调函数
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_netbg_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_netbg.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_netbg.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "initData": "getboeNetbgPageData",//页面创建前的回调函数
        "firstFocusId": "NetTypeSelect",
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetbgPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetbgOnDestroy",//页面创建时的回调函数,
        "handler": {
            "aftEscHandler": "NetworkBgToPreviousPage",
            "aftLeftHandler": "",
            "aftRightHandler": ""
        },
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_ethernet_result",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_ethernet_result.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_ethernet_result.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "initData": "getboeEthernetResultPageData",//页面创建前的回调函数
        "firstFocusId": "result_done_btn",
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeEthernetResultPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeEthernetResultPageOnDestroy",//页面创建时的回调函数,
        "handler": {
            "aftEscHandler": "EthernetResultToPreviousPage",
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_search_wifi",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_search_wifi.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_search_wifi.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set search wifi dialog ",
        "pageMode": "module",//可指定module,single,dialog
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeNetWifiSearchEscHandle"
        },
        //"firstFocusId": "boeSearWifiCancelBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getboeNetSetSearWifiDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetSearWifiDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetSearWifiDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_search_ethernet",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_search_ethernet.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_search_ethernet.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set search wifi dialog ",
        "pageMode": "module",//可指定module,single,dialog
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeNetEthernetSearchEscHandle"
        },
        //"firstFocusId": "boeSearWifiCancelBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getboeNetSetSearEtherentDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetSearEthernetDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetSearEthernetDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_wifi_notplugin",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetSetWifiNotPlugin.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetSetWifiNotPlugin.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set search wifi dialog ",
        "pageMode": "module",//可指定module,single,dialog
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        //"firstFocusId": "boeSearWifiCancelBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getboeNetSetWifiNotPluginDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetWifiNotPluginDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetWifiNotPluginDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkWifiSetPage",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetworkWifiSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetworkWifiSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "navigation wifi set page ",
        "pageMode": "module",//可指定module,single,dialog
//        "firstFocusId": "boeNetworkManualAddBtn",//包括button或者Component
        "firstFocusId": "boeNetworkWifiAutoResultUl",
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeNetSetWifiPageEscHandle",
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },
        "initData": "getboeNetSetWifiSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetWifiSetPageOnOpen",                            //页面创建时的回调函数
//            "onFocus": "wizardNetSetWifiAutoListFoucsHandler",
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetWifiSetPageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkWifiWPS",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boeNetSetWPS.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boeNetSetWPS.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "navigation wifi set page ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boeNetSetWPSCancelBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeNetSetWPSEscHandle",
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },
        "initData": "getboeNetSetWPSPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetWPSPageOnOpen",                            //页面创建时的回调函数
//            "onFocus": "wizardNetSetWifiAutoListFoucsHandler",
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetWPSPageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkWifiPWInputDialog",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetworkWifiPWInputDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetworkWifiPWInputDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "navigation wifi set page ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boeWifiAutoPWInput0",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "boeNetSetWifiPWInputEscHandle",
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },
        "initData": "getboeNetSetPWInputDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetPWInputDialogOnOpen",                            //页面创建时的回调函数
//            "onFocus": "wizardNetSetWifiAutoListFoucsHandler",
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetPWInputDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkWifiAddDialog",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetworkWifiAddDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetworkWifiAddDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "network set add wifi manually",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boeNetSetSSIDInput",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "boeNetSetWifiAddDialogEscHandle",
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "initData": "getboeNetSetWifiAddDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetWifiAddDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetWifiAddDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkConnNetDialog",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetworkConnNetDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetworkConnNetDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set connect network dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boeNetworkLoadingDialogText",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "initData": "getboeNetSetConnNetDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetConnNetDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetConnNetDialogOnDestroy",  //页面创建时的回调函数
        "handler": {
            "aftEscHandler": "boeWifiConnNetCancel"
        },
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkConnResDialog",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetworkConnResDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetworkConnResDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set connect network result dialog ",
        "pageMode": "module",//可指定module,single,dialog
//            "firstFocusId": "",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },
        // "AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "initData": "getboeNetSetConnResDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetConnResDialogOnOpen",                            //页面创建时的回调函数
        "onFocus": "boeNetSetConnResDialogOnFocus",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeNetSetConnResDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkEthernetType",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetworkEthernetType.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetworkEthernetType.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set connect network result dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "navNetworkEthernetTypeUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "networkEthertnetTypePageEscHandle",
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },

        "initData": "getNetworkEthernetTypePageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "networkEthertnetTypePageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "networkEthertnetTypePageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
    {
        "id": "boe_NetworkEthernetSetPage",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_NetworkEthernetSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_NetworkEthernetSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/boe_network.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "nav network set ether set page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "navNetworkEtherIPV4InfoUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "handler": {
            "aftEscHandler": "navNetworkEtherIPEscHandle",
            "befLeftHandler": "networkBgPageAftLeftHandler"
        },
        "initData": "getNavNetworkEtherSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeNetSetEtherSetPageOnOpen",                            //页面创建时的回调函数
        "onClose": "boeNetSetEtherSetOnClose",    //页面创建时的回调函数
        "onDestroy": "boeNetSetEtherSetPageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },

/**************************  开机导航 网络设置模块   end **********************************/



    {
        "id": "boe_input_source_page_id",
        "module": "wizard",                         //表示页面所属模块
        "jsPath": "modulePages/boe/boe_input_source.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/boe/boe_input_source.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "modulePages/epg.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "boe input source select page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "boeInputSourceGridUl",//包括button或者Component
        "handler": {
            "aftEscHandler": "boeInputSourceToNetworkPage"
        },
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        //"AutoClose": true,
        //"AutoCloseTimeLength": 600,
        "initData": "getboeInputSourcePageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "boeInputSourcePageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "boeInputSourceOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "disable": [
                VK_MENU, VK_EPG, VK_INFO, VK_NETFLIX
            ]
        }
    },
/**--------------------- wizard page end ---------------------**/
/**--------------------- setting start ---------------------**/
    {
        "id": "setting_sys_qs_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingQSPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingQSPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingQSPage.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting quick page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_qsp_Modes",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "AutoClose": true,
//            "isStatic":false,
        // "AutoCloseTimeLength": 30,
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "noRepeatKeys": [13],   //KeyEnter
        "CaE": [],
        "initData": "getQuickSetupPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "QuickSetupOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "QuickSetupOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
            "aftEscHandler": "QuickSetupEscHandler"
        },
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_qs_page",
                "areas": ["SA", "NA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/settingQSPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/SA/settingQSPage.html"
            },
            {
                "subId": "setting_sys_qs_page",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/settingQSPage.js"
            },
            {
                "subId": "setting_sys_qs_page",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "firstFocusId": "setting_qsp_ul",
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/COL/settingQSPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/COL/settingQSPage.html"

            }

        ],
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
//                        {"mode":"fadeIn","param":[]},
//                        {"mode":"leftFlip","param":[200],"speed":"fast"},
//                        {"mode":"rightFlip","param":[1000]},
//                        {"mode":"width","param":["toggle"]},
//                        {"mode":"upFlip","param":[200],"speed":"fast"},
//                        {"mode":"downFlip","param":[200],"speed":"fast"},
//                        {"mode":"scale","param":[0.1,0.1,'15%','50%'],"speed":5000}//初始x大小，y大小，原始参考点,speed可用毫秒表示，为整型
//                        {"mode":"scale","param":[0.1],"speed":"fast"}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
//                        {"mode":"fadeOut","param":[]},
//                        {"mode":"rightFlip","param":[1000],"speed":"fast"},
//                        {"mode":"downFlip","param":[1000],"speed":"slow"},
//                        {"mode":"scale","param":[0.1,0.1,'15%','50%'],"speed":"slow"}//初始x大小，y大小，原始参考点
                ]
            }
        }
    },
    //RobMyth
    {
        "id": "setting_sys_qs_list",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingQSList.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingQSList.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//          "cssPath": "css/abcd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting quick setup list",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_qs_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingQsListPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "qslistopenHandler",         //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingQslistonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_qs_list",
                "areas": ["SA", "NA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/settingQSList.js"
            },
            {
                "subId": "setting_sys_qs_list",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/settingQSList.js"
            },
            {
                "subId": "setting_sys_qs_list",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                //以上三项配置必须完全符合
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/COL/settingQSList.js"
            }
        ]
    },
    //RobMyth
    {
        "id": "setting_sys_qs_list1",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingQSList1.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingQSList1.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//          "cssPath": "css/abcd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting quick setup list",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_qs_list1_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingQsList1PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "qslist1openHandler",         //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingQslist1onDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_qs_list1",
                "areas": ["SA", "NA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/settingQSList1.js"
            },
            {
                "subId": "setting_sys_qs_list1",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/settingQSList1.js"
            },
            {
                "subId": "setting_sys_qs_list1",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/COL/settingQSList1.js"
            }

        ]
    },
    {
        "id": "setting_fircls_page",
        "module": "settingfirst",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingFirPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingFirPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting first page",
        "AutoClose": true,
        "isStatic": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settings_first_ul",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingFirPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingFirOpenhandler",                            //页面创建时的回调函数
        "onClose": "SettingFirOnClose",                        //页面创建时的回调函数
        "onDestroy": "SettingFirPageOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_fircls_page",
                "areas": ["SA", "NA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/SettingFirPage.js"
//                    "htmlPath": "modulePages/setting/SA/settingQSList1.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "setting_fircls_page",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/SettingFirPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingFirPage.html"

//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "setting_fircls_page",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/COL/SettingFirPage.js",
                     "htmlPath": "UI/hisenseUI/modulePages/setting/COL/SettingFirPage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }

        ]
    },
    {
        "id": "setting_sys_lang1_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingLang1Page.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingLang1Page.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting lang page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_lang_menu3",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingLang1PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "getSettingLang1OnOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingLang1PageOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_lang1_page",
                "areas": ["SA", "NA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/SettingLang1Page.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingLang1Page.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "setting_sys_lang1_page",
                "areas": ["EU","COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/SettingLang1Page.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingLang1Page.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }

        ]
    },
    {
        "id": "setting_sys_lang2_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingLang2Page.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingLang2Page.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting lang2 page",
        "AutoClose": true,
        "noRepeatKeys": [VK_ENTER],
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_lang2_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingLang2PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingLang2OpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingLang2PageOnDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_mode_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUsermodePage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUsermodePage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting user mode page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_mode_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingUsermodePageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingUsermodePageOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_mode_page",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/SettingUsermodePage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingUsermodePage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }

        ]
    },
    {
        "id": "setting_sys_menu_timeout_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingMenuTimeoutPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingMenuTimeoutPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting timeout page",
        "AutoClose": true,
        "noRepeatKeys": [VK_ENTER],
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_mt_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingMenutimeoutPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "mennutimeoutopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingMenutimeoutPageOnDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_cec_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingCecPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingCecPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system cec page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_cec_control1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingCecPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingCecPageonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingCecPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_time_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SA/SettingTimePage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingTimePage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_time_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingTimePageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingTimePageonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingTimePageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
                {
                    "subId": "setting_sys_time_page",
                    "areas": ["EU","EM","COL"],//-运算符必须统一，以第一个为准
                    "subAreas": [],
                    "country": [],
                    "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                    "jsPath": "modulePages/setting/SettingTimePage.js",
                    "htmlPath": "UI/hisenseUI/modulePages/setting/SettingTimePage.html",
                    "firstFocusId": "setting_sys_time_mode_btn"
                }

            ]
//            "extendPages": [//多个页面都符合条件,用最后符合的
//                {
//                    "subId": "setting_sys_time_page",
//                    "areas": ["SA", "EU", "EM"],//-运算符必须统一，以第一个为准
//                    "subAreas": [],
//                    "country": [],
//                    "brand": [],   //空值为All，“-”表示排除，，以第一个为准
//                    "jsPath": "modulePages/setting/SA/SettingTimePage.js",
//                    "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingTimePage.html"
//                }
//
//            ]
    },
    {
        "id": "setting_sys_security_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSecurityPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSecurityPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_sec_control_flip1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSecurityPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSecurityPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
//            {
//                "subId": "setting_sys_chgpwd2_page",
//                "areas": ["EU"],//-运算符必须统一，以第一个为准
//                "subAreas": [],
//                "country": [],
//                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
//                "jsPath": "modulePages/setting/EU/SettingSecurityPage.js",
//                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingSecurityPage.html"
////                    "cssPath": ""
////                    "handler": {
////                        "aftEscHandler": "exitSKBLan"
////                    }
//            }

        ]

    },
    {
        "id": "setting_sys_agelock_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingAgelockPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingAgelockPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_agelock_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingAgelodkPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "AgelockOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingAgelodkPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_locaton_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysLocationPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysLocationPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "noRepeatKeys": [VK_ENTER],
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_list2_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysLocationPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "list2openHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysLocationPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_pvrlist_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysPvrListPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysPvrListPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_pvr_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysPvrListPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysPvrListopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysPvrListonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "SettingThiftHdSizeList",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingThiftHdSizeList.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingThiftHdSizeList.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_shiftHdSizeList_OK",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "setting_getShiftHdSizeListPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "setting_shiftHdSizeListOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "setting_shiftHdSizeListOnDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {   //RobMyth-12-10-2014
        "id": "setting_sys_pvr_check_page",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSysPvrCheck.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysPvrCheck.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system pvr page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_pvr_check_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysPvrCheckData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysPvrCheckonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {   //RobMyth-12-15-2014
        "id": "setting_sys_pvr_format_page",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSysPvrFormat.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysPvrFormat.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system pvr page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_pvr_format_btn2",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysPvrFormatData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysPvrFormatonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_cc_list_page",
        "module": "closedcaption",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysCClistPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysCClistPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "cc page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_cc_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingCClistPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "CClistopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingCClistPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
//            "keys": {
//                "disable": [
//                    VK_MENU
//                ]
//            }
    },
    {
        "id": "setting_subtitle_list_page",
        "module": "subtitle",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysSubtlistPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysSubtlistPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "subtitle page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_subtitle_list1_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingsubtlistPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "subtlistopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingsubtlistPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
//            "keys": {
//                "disable": [
//                    VK_MENU
//                ]
//            }
    },
    {
        "id": "setting_txt_list_page",
        "module": "teletext",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSystxtlistPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSystxtlistPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "teletext page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_txt_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingtxtlistPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "txtlistopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingtxtlistPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
//            "keys": {
//                "disable": [
//                    VK_MENU
//                ]
//            }
    },
    {
        "id": "setting_sleep_list_page",
        "module": "sleep",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysSleeplistPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysSleeplistPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sleep_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSleeplistPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SleeplistopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSleeplistPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "disable": [
                VK_MENU, VK_HOME, VK_ALLAPP, VK_MEDIA, VK_SOURCE, VK_AMAZON, VK_NETFLIX, VK_VUDU, VK_YOUTUBE
            ]
        }
    },
    {
        "id": "setting_sys_weekly_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysWeeklyPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysWeeklyPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_weekly_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysweeklyPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingweeklyopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysweeklyPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_time_standby_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysTimeStandbyPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysTimeStandbyPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_time_standby_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingTimeStandbyPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingTimeStandbyopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingTimeStandbyonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_inputlable_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysInputLabelPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysInputLabelPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting input label page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_inputlable_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysInputLabelPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysInputLabelonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysInputLabelonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_timelist_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSystimelistPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSystimelistPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "noRepeatKeys": [VK_ENTER],  
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_time_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSystimelistPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "timelistopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSystimelistonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_timedate_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSystimeDatePage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSystimeDatePage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_timedate_format_btn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSystimedatePageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "timedateopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSystimedateonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_time_poweron_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSystimePoweronPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSystimePoweronPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time poweron page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_time_ul2",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSystimePoweronPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "timePoweronopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSystimePoweronDestroy",                       //页面创建时的回调函数
        "pageData": {}

    },
    {
        "id": "setting_sys_time_poweroff_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSystimePoweroffPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSystimePoweroffPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time poweroff page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_time_ul3",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSystimePoweroffPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "timePoweroffopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSystimePoweroffonDestroy",                       //页面创建时的回调函数
        "pageData": {}

    },
    {
        "id": "setting_sys_appset_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysAppSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysAppSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system app setting page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_appset_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysAppSetPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysAppSetonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_appset_page",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/SettingSysAppSetPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingSysAppSetPage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }

        ]
    },
    {
        "id": "setting_sys_appset_sa_page2",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SA/SettingSysAppSetSAPage2.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingSysAppSetSAPage2.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system app setting page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_sa_appset_btn1",//包括button或者Component
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysAppSetSAPage2Data", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysAppSeSApage2onDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_blocktime_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysBlockTimePage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysBlockTimePage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system app setting page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_block_time_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysBlockTimetPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysSysBlockTimeOnOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysSysBlockTimeDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_locktime2_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysLocktime2.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysLocktime2.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "system lock time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_input1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingLocktime2PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingLocktime2onDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_chgpwd2_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysChgpwd2.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysChgpwd2.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "system lock time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_chgpwd2_input1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingChgpwd2PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingChgpwd2onDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_proglock_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysProglock.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysProglock.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "system lock time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_proglock_control1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingProglockPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingProglockonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_cc_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysCloseCaption.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysCloseCaption.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "system lock time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_cc_ul2",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingCloseCaptionPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingCloseCaptiononOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingCloseCaptiononDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_cc_page",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/SettingSysCloseCaption.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingSysCloseCaption.html"
            },
            {
                "subId": "setting_sys_cc_page",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/COL/SettingSysCloseCaption.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/COL/SettingSysCloseCaption.html",
                "firstFocusId": "setting_sys_cc_ul1"
            }

        ]

    },
    {
        "id": "setting_sys_inputdate_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysinputdate.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysinputdate.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_inputdate_input1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysinputdateData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysinputdateonDestroy",                       //页面创建时的回调函数
        "pageData": {},
	    "extendPages": [//多个页面都符合条件,用最后符合的
                    {
                        "subId": "setting_sys_inputdate_page",
                        "firstFocusId": "setting_sys_inputdate_input2",
                        "areas": ["SA","EU"],//-运算符必须统一，以第一个为准
                        "subAreas": [],
                        "country": [],
                        "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                        "jsPath": "modulePages/setting/SA/SettingSysinputdate.js",
                        "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingSysinputdate.html"
                    }

                ]
    },
    {
        "id": "setting_sys_inputtime_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysinputtime.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysinputtime.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_inputtime_div1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysinputtimeData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysinputtimeonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysinputtimeonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_update_switch_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysUpdateSwitchPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysUpdateSwitchPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_update_switch_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysUpdateSwitchData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "UpdateSwitchopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysUpdateSwitchonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_inputblock_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysinputblock.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysinputblock.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "sys input lock page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_inputblock_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingInputBlockPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "InputBlockOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingInputBlockonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {}
    },
    {
        "id": "setting_sys_open_vchip_cls1_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysOpenVchipCls1.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysOpenVchipCls1.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_open_vchip_cls1_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingOpenvchipCls1PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingOpenvchipCls1onDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {}
    },
    {
        "id": "setting_sys_open_vchip_cls2_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysOpenVchipCls2.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysOpenVchipCls2.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "sys input lock page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_open_vchip_cls2_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingOpenvchipCls2PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingOpenvchipCls2onDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {}
    },
    {
        "id": "setting_sys_open_vchip_cls3_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysOpenVchipCls3.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysOpenVchipCls3.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "sys input lock page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_openvichip_cls3_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingOpenvchipCls3PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "OpenvchipCls3openHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingOpenvchipCls3onDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {}
    },
    {
        "id": "setting_sys_tvrating_list1_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysRatinglist1Page.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysRatinglist1Page.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting",
        "AutoClose": true,
        "noRepeatKeys": [VK_ENTER],
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_tvrating_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysRatinglist1Data", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "Ratinglist1openHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysRatinglist1onDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_us_tvrating_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysUsRating.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysUsRating.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_us_tvrating_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysUSRatingData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysUSRatingopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysUSRatingonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_ver_list_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingVerlistPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingVerlistPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_ver_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingVerlistPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "verlistopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingVerlistPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }

    },
    {
        "id": "setting_sys_cecdev_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingCecDevPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingCecDevPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting system time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_cecdev_list1_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingCecDevPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingCecDevPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_nav_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingNavPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingNavPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting wizard page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_nav_btn2",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingNavPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingNavPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_towizard_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingWizard2page.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingWizard2page.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting wizard page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_wizard_btn2",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingWizardPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingWizardPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_pvrdialog_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingPvrdialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPvrdialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_pvr_dialog1_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingpvrdialogPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingpvrdialogonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_dialog1_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/Settingdialog1Page.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/Settingdialog1Page.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting wizard page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_dialog1_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingdialog1PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "Settingdialog1PageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_update_report_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateReport.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateReport.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "update report page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_error_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingupdatereportPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingupdatereportonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_update_spacecheck_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateSpaceCheckPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateSpaceCheckPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "update disk check page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_spacechaeck_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getupdateSpacecheckPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "updateSpacecheckonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_sys_diskcheck_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingDiskcheckPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingDiskcheckPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting wizard page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_diskcheck_title",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingDiskcheckPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingDiskcheckonOpen",                            //页面创建时的回调函数
        "onClose": "SettingDiskcheckonClose",                        //页面创建时的回调函数
        "onDestroy": "SettingDiskcheckonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_pvr_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingPVRPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPVRPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting pvr page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_pvr_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPVRPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingPVRpageOnOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingPVRpageOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
		"handler": {
			"befLeftHandler": "SettingSysPvrEscPageLeft",
			"befRightHandler": "SettingSysPvrEscPageRight"
		}
    },
    {
        "id": "setting_sys_ad_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SA/SettingAdPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingAdPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting sys advance page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_ad_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingAdPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingAdPageonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingAdPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_ad_page",
                "areas": ["EU","COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/SettingAdPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingAdPage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "setting_sys_ad_page",
                "areas": ["EM"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EM/SettingAdPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EM/SettingAdPage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }
        ]
    },
    {
        "id": "setting_sys_ad_page2",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/EU/SettingAdPage2.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingAdPage2.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting sys advance page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_ad_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingAdPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingAdPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}

    },
    {
        "id": "setting_sys_ad_submode_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysADlistPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysADlistPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "cc page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_ad_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysADlistPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SysADlistopenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysADlistPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_xt910ad_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SA/SettingAdxt910Page.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingAdxt910Page.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting sys advance page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_ad_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingXT910AdPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingXT910AdPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_xt910ad_page",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/SettingAdxt910Page.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingAdxt910Page.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "setting_sys_xt910ad_page",
                "areas": ["EM"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EM/SettingAdxt910Page.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EM/SettingAdxt910Page.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }
        ]
    },
    {
        "id": "setting_sys_ind_light_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysAdLightPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysAdLightPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting sys advance page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_ind_light_control1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingAdLightPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingAdLightPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_update_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/EU/SettingSysUpdatePage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingSysUpdatePage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting sys update page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_update_control1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysUpdatePageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysUpdateOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysUpdatePageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_update_page2",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/EU/SettingSysUpdatePage2.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingSysUpdatePage2.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting sys update page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_update2_control1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysUpdate2PageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysUpdate2OpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysUpdate2PageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_disclaimer_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysdis.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysdis.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting sys update page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_dis_box",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysDisPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "DisOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysDisPageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_dis_fir_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysdisfir.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysdisfir.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_dis_fir_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysDisFirPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "DisfirstOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysDisFirPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_sys_dis_fir_page",
                "areas": ["EU","EM","COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/SettingSysdisfir.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/SettingSysdisfir.html",
                "firstFocusId": "setting_sys_dis_fir_btn1"
            },
            {
                "subId": "setting_sys_dis_fir_page",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": ["nob","jvc","san","phi","ilo","pio","sei","ton","psc"],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/SettingSysdisfir.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingSysdisfir.html"
            }
        ]
    },
    {
        "id": "setting_sys_channel_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysChl.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysChl.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "sys channel lock page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_chl_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingChlPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "ChannelOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingChlPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
//                "enable":[],
//                "disable":[]
        }
    },
    {
        "id": "setting_about_ver_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingAbVer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingAbVer.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "about ver page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_about_ver_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingAdVerPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingAdVerPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "setting_about_ver_page",
                "areas": ["EM", "EU","COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EM/SettingAbVer.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EM/SettingAbVer.html"
            }
        ]
    },
    {
        "id": "setting_sys_locktime_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysLocktime.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysLocktime.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "system lock time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_input1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingLocktimePageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingLocktimeonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_autotime_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysAutotime.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysAutotime.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "system lock time page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_autotime_input1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingAutotimePageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingAutotimePageonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_update_fir_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateFir.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateFir.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "system lock time page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_fir_detect_text",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingUpdateFirPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingUpdateFirPageonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingUpdateFirPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK, VK_ESCAPE],
            "disable": []
        },
        "handler": {
            "aftEscHandler": "settingUpdatefirEscHandler"
        }
    },
    {
        "id": "setting_update_load_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateLoad.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateLoad.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "loading page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_load_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingUpdateLoadPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_update_progressing_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateProgress.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateProgress.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "loading page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_progressing_progress1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingUpdateProgressData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingUpdateProgressonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }

    },
    {
        "id": "setting_update_verifying_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateVerifying.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateVerifying.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//      "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "loading page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_verifying_text",//包括button或者Component
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingUpdateVerifyingData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingUpdatedownloadPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }

    },
    {
        "id": "setting_update_verifyok_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateVerifyok.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateVerifyok.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "loading page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_verify_btn1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingUpdateVerifyokData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_update_ver_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingUpdateVerpage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingUpdateVerpage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "loading page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_update_ver_btn1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getUpdateVersionData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "VerpageOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "UpdateVersionPageonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_autoupdate_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingAutoUpdatePage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingAutoUpdatePage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "autoupdate page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_autoupdate_ver_btn1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getAutoUpdateVersionData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "AutoUpdateOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "AutoUpdateonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_forceupdate_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingForceUpdatePage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingForceUpdatePage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "force update page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_forceupdate_ver_btn1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getForceUpdateVersionData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "ForceUpdateOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "ForceUpdateonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_appupdate_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingAppUpdateVerPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingAppUpdateVerPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "force update page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_appupdate_ver_btn1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getAppUpdateVersionData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "AppUpdateOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "AppUpdateonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_appForupdate_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingAppForUpdateVerPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingAppForUpdateVerPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "force update page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_appupdate_ver_btn1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getAppUpdateVersionData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "AppUpdateOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "AppUpdateonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_appupdate_progress_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingAppUpdateProPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingAppUpdateProPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "app update page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_appupdate_progress_title",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getAppUpdateProData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingAppUpdateProOnOpen",                            //页面创建时的回调函数
        "onClose": "SettingAppUpdateProOnClose",                        //页面创建时的回调函数
        "onDestroy": "SettingAppUpdateProOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_appupdate_dialog_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingappupdatedialogPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingappupdatedialogPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "settting wizard page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_appupdate_dialog1_btn1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettinappupdategdialogData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingappupdatedialogonDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "enable": [VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": []
        }
    },
    {
        "id": "setting_sys_chgpwd_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysChgpwd.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysChgpwd.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_chgpwd_container1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysChgpwdData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysChgpwdonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_inputmodule_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysinput.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysinput.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_inputmodule_input1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysinputData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysinputonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_tvname_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysTvname.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysTvname.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_tvname_container1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSysTvnameData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "SettingSysTvnameonOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingSysTvnameonDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_pwd_error_dialog",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingPwdError.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPwdError.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPwdErrorData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingPwdErroronDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_sys_time_info_dialog",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSysTimeInfo.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSysTimeInfo.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_sys_time_info_text1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingTimeInfoData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SettingTimeInfoDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },

    {
        "id": "setting_chnl_ci",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingChnlCI.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingChnlCI.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "setting snd CI info page",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "setting_chnl_CI_ul",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": false,
        "CaE": [],
        "initData": "getSettingChnlCIData",
        "onCreate": "",
        "onOpen": "onSettingChnlCIOpen",
        "onFocus": "onSettingChnlCIFocus",
        "onClose": "onSettingChnlCIClose",
        "onDestroy": "onSettingChnlCIDestroy",
        "pageData": {}
    },
    {
        "id": "setting_chnl_CI_PIN_set_page",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingChnlCIPINSet.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingChnlCIPINSet.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "CI set pin page",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "setting_chnl_CI_PIN_input_container",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": false,
        "CaE": [],
        "initData": "getSettingChnlCIPINSetData",
        "onCreate": "",
        "onOpen": "onSettingChnlCIPINSetOpen",
        "onClose": "onSettingChnlCIPINSetClose",
        "onDestroy": "onSettingChnlCIPINSetDestroy",
        "pageData": {}
    },
    {
        "id": "setting_chnl_EPG_mark",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingChnlEPGMark.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingChnlEPGMark.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "setting_chnl_EPG_mark",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "setting_chnl_EPG_mark_color_0_cmp",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": false,
        "CaE": [],
        "onFocus": "",
        "initData": "getSettingChnlEPGMarkData",
        "onCreate": "",
        "onOpen": "onSettingChnlEPGMarkOpen",
        "onClose": "",
        "onDestroy": "onSettingChnlEPGMarkDestroy",
        "pageData": {}
    },
    {
        "id": "setting_chnl_advanced_export_to_usb_dialog",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingChnlExportToUSB.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingChnlExportToUSB.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "Setting Channel Export To USB页",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "setting_chnl_advanced_export_to_usb_cancel_btn",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingChnlExportToUSBData",
        "onCreate": "",
        "onFocus": "",
        "onOpen": "onSettingChnlExportToUSBOpen",
        "onClose": "onSettingChnlExportToUSBClose",
        "onDestroy": "onSettingChnlExportToUSBDestroy",
        "pageData": {}
    },
    {
        "id": "setting_chnl_advanced_import_from_usb_dialog",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingChnlImportFromUSB.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingChnlImportFromUSB.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "Setting Channel Import form USB页",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "setting_chnl_advanced_import_from_usb_cancel_btn",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingChnlImportFromUSBData",
        "onCreate": "",
        "onFocus": "",
        "onOpen": "onSettingChnlImportFromUSBOpen",
        "onClose": "onSettingChnlImportFromUSBClose",
        "onDestroy": "onSettingChnlImportFromUSBDestroy",
        "pageData": {}
    },
    {
        "id": "setting_chnl_advanced",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingChnlAdvanced.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingChnlAdvanced.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "Setting Channel 高级设置页",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_chnl_advanced_export_to_usb_cmp",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingChnlAdvancedData",
        "onCreate": "",
        "onOpen": "onSettingChnlAdvancedOpen",
        "onClose": "",
        "onDestroy": "onSettingChnlAdvancedDestroy",
        "pageData": {}
    },
    {
        "id": "mheg5_password_osd",
        "module": "mheg5",
        "jsPath": "modulePages/mheg5/Mheg5PasswordOsd.js",
        "htmlPath": "UI/hisenseUI/modulePages/mheg5/Mheg5PasswordOsd.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "mheg5_password_osd",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "mheg5_password_input_container",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": false,
        "CaE": [],
        "initData": "getMheg5PasswordOsdData",
        "onCreate": "",
        "onOpen": "onMheg5PasswordOsdOpen",
        "onFocus": "",
        "onClose": "onMheg5PasswordOsdClose",
        "onDestroy": "onMheg5PasswordOsdDestroy",
        "pageData": {}
    },
    //////////////////////////////////////////////setting end ////////////////
/**************************new pic*********************/
    {
        "id": "setting_pic_3d",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingPic3D.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPic3D.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "settting pic 3d page",
        "pageMode": "module",//可指定module,single,dialog
        "AutoClose": true,
        "firstFocusId": "setting_pic_3dmode_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPic3DData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPic3DOpen",      //页面创建时的回调函数
        "onClose": "onSettingPic3DClose",                        //页面关闭时的回调函数
        "onDestroy": "onSettingPic3DDestroy",                       //页面销毁时的回调函数
        "pageData": {}
    },

    //////////////////////////////////////////////snd Start ////////////////

    {
        /**ModernTV Apply*/
        "id": "setting_snd_mode",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSndMode.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndMode.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "settting SndMode page",
        "pageMode": "module",//可指定module,single,dialog
        "AutoClose": true,
        "firstFocusId": "setting_snd_mode_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndModeData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndModeOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndModeDestroy",                       //页面销毁时的回调函数
        "pageData": {}
    },
    {
        /**ModernTV Apply*/
        "id": "setting_snd_apply_mode",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSndApplyMode.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndApplyMode.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "settting SndMode page",
        "pageMode": "module",//可指定module,single,dialog
        "AutoClose": true,
        "firstFocusId": "setting_snd_apply_mode_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndApplyModeData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndApplyModeOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndApplyModeDestroy",                       //页面销毁时的回调函数
        "pageData": {}
    },
    {
        /**ModernTV Apply*/
        "id": "setting_snd_tv_speaker",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingSndTvSpeaker.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndTvSpeaker.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "setting SndMode page",
        "pageMode": "module",//可指定module,single,dialog
        "AutoClose": true,
        "firstFocusId": "setting_snd_tv_speaker_flipSwitch",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndTvSpeakerData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndTvSpeakerOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndTvSpeakerDestroy",                       //页面销毁时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_snd_dbx",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndDBX.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndDBX.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "setting snd DBX page",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_dbx_sonic_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndDBXData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndDBXOpen",      //页面创建时的回调函数
        "onClose": "onSettingSndDBXClose",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndDBXDestroy",                       //页面销毁时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_snd_sap",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndSAP.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndSAP.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "setting snd SAP page",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_sap_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndSAPData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndSAPOpen",      //页面创建时的回调函数
        "onClose": "onSettingSndSAPClose",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndSAPDestroy",                       //页面销毁时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_snd_advanced_settings",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndAdvanced.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndAdvanced.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音：高级设置页",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_head_phone_mode_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndAdvancedData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndAdvancedOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndAdvancedDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },
    {
        id: "setting_snd_equalizer_dialog",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndEqualizer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndEqualizer.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音设置频率调整页面",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_equalizer_hz_0",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndEqualizerData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndEqualizerOpen",      //页面创建时的回调函数
        "onClose": "onSettingSndEqualizerClose",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndEqualizerDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },
    {
        "id": "setting_snd_reset_audio_settings",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndResetAudio.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndResetAudio.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_RAS_btn_1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndResetAudioData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndResetAudioOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndResetAudioDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },
    {
        "id": "setting_snd_head_phone",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndHeadPhone.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndHeadPhone.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": true,
        //"firstFocusId": "setting_snd_HP_headphone_switch_cmp",//包括button或者Component
        "firstFocusId": "setting_snd_HP_headphone_volume_slider",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndHeadPhoneData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndHeadPhoneOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndHeadPhoneDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },

    {
        "id": "setting_snd_bassboost",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndBassBoost.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndBassBoost.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_SSB_bassboost",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndBassBoostData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndBassBoostOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndBassBoostDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },

    {
        "id": "setting_snd_subwoofer",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndSubWoofer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndSubWoofer.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_subwoofer_ul",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndSubWooferData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndSubWooferOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndSubWooferDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },

    {
        "id": "setting_snd_help_info",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingSndHelpInfo.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndHelpInfo.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_snd_help_info_content",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndHelpInfoData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "sndHelpInfo.onSettingSndHelpInfoOpen",      //页面创建时的回调函数
        "onClose": "sndHelpInfo.onSettingSndHelpInfoClose",                        //页面关闭时的回调函数
        "onDestroy": "sndHelpInfo.onSettingSndHelpInfoDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },
    {
        "id": "setting_snd_popup_headphone_speaker",
        "module": "audioout_popup",                         //不能属于Setting
        "jsPath": "modulePages/setting/SettingSndPopUpHeadphoneSpeaker.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingSndPopUpHeadphoneSpeaker.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "settting SndMode page",
        "pageMode": "module",//可指定module,single,dialog
        "AutoClose": true,
        "firstFocusId": "setting_snd_popup_headphone_speaker_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingSndPopUpHeadPhoneSpeakerData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingSndPopUpHeadPhoneSpeakerOpen",      //页面创建时的回调函数
        "onClose": "onSettingSndPopUpHeadPhoneSpeakerClose",                        //页面关闭时的回调函数
        "onDestroy": "onSettingSndPopUpHeadPhoneSpeakerDestroy",                       //页面销毁时的回调函数
        "pageData": {}
    },

    {
        "id": "ci_op_search_answer_page",
        "module": "setting",
        "jsPath": "modulePages/setting/CIOPSearchAnswer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/CIOPSearchAnswer.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": false,
        "firstFocusId": "ci_op_search_answer_btn_0",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getCIOPSearchAnswerData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onCIOPSearchAnswerOpen",      //页面创建时的回调函数
        "onClose": "onCIOPSearchAnswerClose",                        //页面关闭时的回调函数
        "onDestroy": "onCIOPSearchAnswerDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },
    {
        "id": "setting_msg_page",
        "module": "cimsg",
        "jsPath": "modulePages/setting/SettingMsgPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingMsgPage.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "ci msg page",
        "pageMode": "module",
        "AutoClose": false,
        //"AutoCloseTimeLength": 5,
        "firstFocusId": "setting_msg_info_span_0",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": false,
        "CaE": [],
        "initData": "getSettingMsgPageData",
        "onCreate": "",
        "onOpen": "onSettingMsgPageOpen",
        "onClose": "onSettingMsgPageClose",
        "onDestroy": "onSettingMsgPageDestroy",
        "pageData": {}
    },
    {
        "id": "setting_energy_warning",
        "module": "energymsg",
        "jsPath": "modulePages/setting/SettingEnergyWarningMsg.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingEnergyWarningMsg.html",
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "SettingEnergyWarningMsg",
        "pageMode": "module",
        "AutoClose": true,
        "AutoCloseTimeLength": 5,
        "firstFocusId": "setting_energy_warning_content",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": false,
        "CaE": [],
        "initData": "getSettingEnergyWarningMsgPageData",
        "onCreate": "",
        "onOpen": "onSettingEnergyWarningMsgPageOpen",
        "onClose": "onSettingEnergyWarningMsgPageClose",
        "onDestroy": "onSettingEnergyWarningMsgPageDestroy",
        "pageData": {}
    },
/*******************************setting Pic Start***************************/
    {
        "id": "setting_pic_backlight",
        "module": "setting",
        "jsPath": "modulePages/setting/SettingPicBackLight.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicBackLight.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "setting_pic_dynamic_control_cmp",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicBackLightData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicBackLightOpen",      //页面创建时的回调函数
        "onClose": "onSettingPicBackLightClose",                        //页面关闭时的回调函数
        "onDestroy": "onSettingPicBackLightDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },


    {
        "id": "setting_pic_aspect_ratio",
        "description": "Zoom sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_aspect_ratio_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicAspectRatio.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicAspectRatio.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicAspectRatioData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicAspectRatioOpen",                            //页面创建时的回调函数
        "onClose": "onSettingPicAspectRatioClose",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicAspectRatioDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_mode",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_mode_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicMode_New.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicMode_New.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicModeData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicModeOpen",                            //页面创建时的回调函数
        "onClose": "onSettingPicModeClose",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicModeDestroy",                       //页面创建时的回调函数
        "pageData": {}
//            "extendPages": [//多个页面都符合条件,用最后符合的
//                {
//                    "subId": "S001010",
//                    "areas": ["-大区1"],//-运算符必须统一，以第一个为准
//                    "subAreas": ["abc", "-subarea03"],
//                    "country": ["country33333", "-country44", "-country444", "-country4444"],
//                    //以上三项配置必须完全符合
//                    "brand": ["-brand1"],   //空值为All，“-”表示排除，，以第一个为准
//                    "jsPath": "testjsPath",
//                    "htmlPath": "UI/hisenseUI/modulePages/skb/skblan.html",
//                    "cssPath": "css/hiSKB.css",
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
//                },
//                {
//                    "subId": "S001011",
//                    "areas": ["大区1", "-大区2"],
//                    "subAreas": ["-Asia"],
//                    "country": ["-中国"],
//                    "brand": ["-brand1"],   //空值为All，“-”表示排除
//                    "jsPath": "modulePages/setting/country1/settingPicMode.js",
//                    "htmlPath": "UI/hisenseUI/modulePages/setting/country1/settingPicMode.html",
//                    "cssPath": "css/hiSKB.css",
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
//                }
//            ]
    },

    {
        "id": "setting_pic_apply_mode_page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_apply_mode_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicApplyMode.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicApplyMode.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicApplyModeData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicApplyModeOpen",                            //页面创建时的回调函数
        "onClose": "onSettingPicApplyModeClose",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicApplyModeDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_advanced_page_new",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_advanced_color_gamut_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicAdvanced_New.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicAdvanced_New.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicAdvancedData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicAdvancedOpen",                            //页面创建时的回调函数
        "onClose": "onSettingPicAdvancedClose",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicAdvancedDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_tint_page_new",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_tint_slider",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicTint_New.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicTint_New.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicTintData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicTintDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_sharpness_page_new",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_sharpness_slider",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicSharpness_New.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicSharpness_New.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicSharpnessData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicSharpnessDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_display_component_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_display_component_phase_slider",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicDisplayComponent.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicDisplayComponent.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicDisplayComponentPage", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicDisplayComponentDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_display_component_reset_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_display_component_component_reset_btn_1",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicDisplayComponentReset.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicDisplayComponentReset.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicDisplayComponentResetData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicDisplayComponentResetDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_reset",
        "description": "setting_pic_reset",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_RAS_btn_1",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicReset.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicReset.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicResetPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "onSettingPicResetClose",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicResetDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_brightness_contrast_color",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_brightness",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicBrtCtrColor.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicBrtCtrColor.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicBrtCtrColorData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicBrightnessOpen",                            //页面创建时的回调函数
        "onClose": "onSettingPicBrightnessClose",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicBrightnessDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_color_tuner",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_color_tuner_color_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicColorTuner_New.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicColorTuner_New.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicColorTunerData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicColorTunerOpen",                            //页面创建时的回调函数
        "onFocus": "onSettingPicColorTunerFocus",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicColorTunerDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_hue_sat_bri_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_hue_sat_bri_slider",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicHueSatBri.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicHueSatBri.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicHueSatBriData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicHueSatBriDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_color_tuner_reset",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_color_tuner_btn_1",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicColorTunerReset.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicColorTunerReset.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicColorTunerResetData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicColorTunerResetDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_white_balance_2point_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_white_balance_2point_wb_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicWteBal2Pot.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicWteBal2Pot.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicWteBal2PotData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onFocus": "onSettingPicWteBal2PotFocus",
        "onOpen": "onSettingPicWteBal2PotOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicWteBal2PotDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_white_balance_2point_rgb_offset_gain_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_white_balance_2point_rgb_offset_gain_slider",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicWteBal2PotRGBOffsetGain.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicWteBal2PotRGBOffsetGain.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicWteBal2PotRGBOffsetGainData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicWteBal2PotRGBOffsetGainDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_white_balance_2point_reset",
        "description": "",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_white_balance_2point_reset_btn_1",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicWteBal2PotRst.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicWteBal2PotRst.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicWteBal2PotRstData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicWteBal2PotRstDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_white_balance_10point_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_white_balance_10point_wb_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicWteBal10Pot.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicWteBal10Pot.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicWteBal10PotData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicWteBal10PotOpen",                            //页面创建时的回调函数
        "onFocus": "onSettingPicWteBal10PotFocus",
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicWteBal10PotDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_white_balance_10point_rgb_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_white_balance_10point_rgb_slider",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicWteBal10PotRGB.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicWteBal10PotRGB.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicWteBal10PotRGBData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicWteBal10PotRGBDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_white_balance_10point_level",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_white_balance_10point_level_cmp",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicWteBal10PotLevel.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicWteBal10PotLevel.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicWteBal10PotLevelData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onSettingPicWteBal10PotLevelOpen",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicWteBal10PotLevelDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_white_balance_10point_reset",
        "description": "",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_white_balance_10point_reset_btn_1",
        "module": "setting",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/SettingPicWteBal10PotRst.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingPicWteBal10PotRst.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSettingPicWte10PotRstData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "onSettingPicWte10PotRstDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "setting_pic_Source_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_SourceItem",
        "module": "input",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/settingPicSource.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingPicSource.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingPicSource.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getPicSourceData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "inputOnopen",                            //页面创建时的回调函数
        "onClose": "inputOnclose",                        //页面创建时的回调函数
        "onDestroy": "inputOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
            "aftEscHandler": "closeSource",
            "befLeftHandler": "settingPicSourceLeftHandler",
            "befRightHandler": "settingPicSourceRightHandler"
        }

    },
    {
        "id": "setting_pic_SourceLock_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "setting_pic_inputContainer1",
        "module": "input",                         //表示页面所属模块
        "AutoClose": true,
        "jsPath": "modulePages/setting/settingPicSourceLock.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingPicSourceLock.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingPicSource.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSourceinputData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "SourceinputOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
            "aftEscHandler": ""
        }
    },
    {
        "id": "setting_pic_Mira_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "setting_pic_Mira_Mode",
        "module": "miracast",
        "jsPath": "modulePages/miracast/miracast.js",
        "htmlPath": "UI/hisenseUI/modulePages/miracast/miracast.html",
        "cssPath": "css/miracast.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getmiracastPageData",
        "onCreate": "",
        "onOpen": "gettvname",
        "onClose": "closemira",
        "onDestroy": "mirabackhome",
        "pageData": {},
        "handler": {
            "aftEscHandler": "exitMira"
        },
        "keys": {
            "disable": [
                VK_MENU, VK_SUBTITLE
            ]
        }
    },
    {
        "id": "setting_Mira_exit_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "setting_Mira_exit_btn_1",
        "module": "miracast",
        "jsPath": "modulePages/miracast/exitmira.js",
        "htmlPath": "UI/hisenseUI/modulePages/miracast/exitmira.html",
        "cssPath": "css/miracast.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getmiraExitPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "miracastexitDestory",
        "pageData": {},
        "handler": {
            "aftEscHandler": ""
        },
        "keys": {
            "disable": [
                VK_MENU, VK_SUBTITLE
            ]
        }
    },
    {
        "id": "setting_Mira_wifi_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "setting_Mira_wifi_btn_1",
        "module": "miracast",
        "jsPath": "modulePages/miracast/mirawifi.js",
        "htmlPath": "UI/hisenseUI/modulePages/miracast/mirawifi.html",
        "cssPath": "css/miracast.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getmiraWifiPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": ""
        },
        "keys": {
            "disable": [
                VK_MENU, VK_SUBTITLE
            ]
        }
    },
    {
        "id": "setting_HotelMenu_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "switch_hotelMode_flipSwitch",
        "module": "hotel",
        "jsPath": "modulePages/setting/SettingHotelMenu.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingHotelMenu.html",
        "cssPath": "css/SettingHotelMenu.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getHotelMenuData",
        "onCreate": "",
        "onOpen": "addHotelMenuScrollbar",
        "onClose": "onSettingHotelMenuPageClose",
        "onDestroy": "onSettingHotelMenuPageDestroy",
        "pageData": {},
        "handler": {
            "aftEscHandler": "SettingHotelMenuEscHandler"
        },
        "keys": {
            "disable": []
        }
    },
    {
        "id": "setting_HotelInputLock_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "SourceLock_TV_flipSwitch",
        "module": "hotel",
        "jsPath": "modulePages/setting/SettingHotelMenuInputLock.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingHotelMenuInputLock.html",
        "cssPath": "css/SettingHotelMenu.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getHotelMenuInputLockData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": "HotelInputLockEscFun"
        },
        "keys": {
            "disable": [
            ]
        }
    },
    {
        "id": "setting_HotelInputLockSA_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "SourceLock_TV_flipSwitch",
        "module": "hotel",
        "jsPath": "modulePages/setting/SA/SettingHotelMenuInputLock.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/SA/SettingHotelMenuInputLock.html",
        "cssPath": "css/SettingHotelMenu.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getHotelMenuInputLockData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": "HotelInputLockEscFun"
        },
        "keys": {
            "disable": [
            ]
        }

    },
    {
        "id": "setting_HotelUsbClone_Page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "HotelCloneUsbSecTypeListContUl",
        "module": "setting",
        "jsPath": "modulePages/setting/settingHotelCloneUsb.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingHotelCloneUsb.html",
        "cssPath": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getHotelUsbCloneData",
        "onCreate": "",
        "onOpen": "HotelUsbCloneOpenHandler",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": "HotelUsbCloneEscHandler"
        },
        "keys": {

        }
    },
    {
        "id": "setting_HotelCloneDialog_Page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "settingHotelCloneInfo",
        "module": "setting",
        "jsPath": "modulePages/setting/settingHotelModeCloneDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingHotelModeCloneDialog.html",
        "cssPath": "",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getHotelCloneDialogData",
        "onCreate": "",
        "onOpen": "DialogHotelCloneOnOpen",
        "onClose": "",
        "onDestroy": "DialogHotelCloneOnDestroy",
        "pageData": {},
        "handler": {
            "aftEscHandler": ""
        },
        "keys": {

        }
    },

/*********************************setting network************************************/
    {
        "id": "settingNetSetMainPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetMainPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetMainPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "wizard network set main page ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetMainNetTypeList",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingNetSetMainPageEscHandle"
        },
        "initData": "getSettingNetSetMainPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetMainOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetSetMainPageOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetStatusDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetStatusDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetStatusDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network status dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetworkStatusOK",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetStatusEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetStatusDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetStatusDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetWakeUpByWifiDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetWakeUpByWifiDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetWakeUpByWifiDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network wake up by wifi dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetWakeUpByWifiSwitchUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetWakeUpByWifiDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetWakeUpByWifiDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetWakeUpByWifiDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetWakeUpPowerDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetWakeUpPowerDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetWakeUpPowerDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network wake up by wifi warning dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetWakeUpPowerOkBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetWakeUpPowerEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetWakeUpPowerDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetWakeUpPowerDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetDMRDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetDMRDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetDMRDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network anyview stream dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetDMRSwitch",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetDMRDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetDMRDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetDMRDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetTVNameListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetTVNameListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetTVNameListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network TV Name List dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetTVNameListUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetTVNameListDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetTVNameListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetTVNameListDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetTVNameListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetTVNameInputDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetTVNameInputDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetTVNameInputDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network TV Name List dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetTVNameInput",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetTVNameInputEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetTVNameInputData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetTVNameInputOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetTVNameInputOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetNetTypeListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetNetTypeListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetNetTypeListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "network type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "wizardNetSetNetTypeListUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "wizardNetSetNetTypeListDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getWizardNetSetNetTypeListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetWifiSecListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetSearWifiDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetSearWifiDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetSearWifiDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set search wifi dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetSearWifiLoadingImg",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetSetSearWifiEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetSetSearWifiDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetSearWifiOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetSetSearWifiOnDestroy",  //页面创建时的回调函数
        "pageData": {},                          //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "enable": [VK_BACK,VK_ESCAPE,VK_LEFT]
        }
    },
    {
        "id": "settingNetSetWifiSetPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetWifiSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetWifiSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting wifi set page ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetWifiSetAdvanceBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingNetSetWifiSetPageEscHandle"
        },
        "initData": "getSettingNetSetWifiSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetWifiSetPageOnOpen",                            //页面创建时的回调函数
        "onFocus": "settingNetSetWifiSetPageOnFocus",
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetSetWifiSetPageOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetAdvanceListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetAdvanceListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetAdvanceListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "network set advance setting type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetAdvanceListUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetSetAdvanceListDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetSetAdvanceListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetSetAdvanceListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetPinDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetPinDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetPinDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "network set pin dialog",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetPinCancelBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetSetPinDialogEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetSetPinDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetPinDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetSetPinDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetPBCDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetPBCDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetPBCDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "network set PBC dialog",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetPBCCancelBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetSetPBCDialogEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetSetPBCDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetPBCDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetSetPBCDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetWifiAddDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetWifiAddDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetWifiAddDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "network set add wifi manually",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "wizardNetSetSSIDInput",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingNetSetWifiAddDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetSetWifiAddDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetWifiAddDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingNetSetWifiAddDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetPWInputDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetPWInputDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetPWInputDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set password input dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "wizardWifiAutoPWInput0",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "wizardNetSetWifiPWInputEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getWizardNetSetPWInputDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetPWInputDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetPWInputDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetEtherSetPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetEtherSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetEtherSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set ether set page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetEtherTypeNav",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "wizardNetSetEtherSetPageEscHandle"
        },
        "initData": "getWizardNetSetEtherSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "wizardNetSetEtherSetPageOnOpen",                            //页面创建时的回调函数
        "onClose": "wizardNetSetEtherSetOnClose",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetEtherSetPageOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetEtherIpSetPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetEtherIpSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetEtherIpSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set ether set page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetEtherIpTypeNav",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingNetSetEtherIpSetPageEscHandle"
        },
        "initData": "getSettingNetSetEtherIpSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetEtherIpSetPageOnOpen",                            //页面创建时的回调函数
        "onClose": "settingNetSetEtherIpSetOnClose",    //页面创建时的回调函数
        "onDestroy": "settingNetSetEtherIpSetPageOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetWifiIpSetDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetWifiIpSetDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetWifiIpSetDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set wifi set page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingNetSetWifiIpSetTypeNav",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingNetSetWifiIpSetDialogEscHandle"
        },
        "initData": "getSettingNetSetWifiIpSetDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingNetSetWifiIpSetDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "settingNetSetWifiIpSetDialogOnClose",    //页面创建时的回调函数
        "onDestroy": "settingNetSetWifiIpSetDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetTestDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetTestDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetTestDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network test dialog",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "wizardNetSetTestCancelBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getWizardNetSetTestDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "wizardNetSetTesDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetTestDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetTestResDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetTestResDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetTestResDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network test result dialog",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "wizardNetSetTestResDialogEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getWizardNetSetTestResDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "wizardNetSetTestResDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetTestResDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingNetSetConnNetDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetConnNetDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetConnNetDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set connect network dialog ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingConnNetCancel",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getWizardNetSetConnNetDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "wizardNetSetConnNetDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetConnNetDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {
            "enable": [VK_BACK,VK_ENTER,VK_LEFT]
        }
    },
    {
        "id": "settingNetSetConnResDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetConnResDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetConnResDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set connect network result dialog ",
        "pageMode": "module",//可指定module,single,dialog
//            "firstFocusId": "",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getWizardNetSetConnResDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "wizardNetSetConnResDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetConnResDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "enable": [VK_BACK,VK_ENTER,VK_LEFT]
    },
    {
        "id": "settingNetSetWifiNotPluginDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingNetSetWifiNotPluginDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingNetSetWifiNotPluginDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "setting network set connect network result dialog ",
        "pageMode": "module",//可指定module,single,dialog
//            "firstFocusId": "",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingNetSetWifiNotPluginDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "wizardNetSetWifiNotPluginDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "wizardNetSetWifiNotPluginDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetScanTypeListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetScanTypeListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetScanTypeListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel scan type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetScanTypeListUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetScanTypeListDialogEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetScanTypeListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetScanTypeListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetChListUpSwitchDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetChListUpSwitchDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetChListUpSwitchDialog.html",
        "cssPath": "css/wizardDialogStyle.css",
        "description": "setting channel list updata SWITCH dialog ",
        "pageMode": "module",
        "firstFocusId": "settingChSetChListUpSwitch",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetChListUpSwitchEscHandle"
        },
        "initData": "getSettingChSetChListUpSwitchDialogData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetChListUpSwitchDialogOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetParLockInputDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetParLockInputDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetParLockInputDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "page",
        "AutoClose": true,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetParLockInput1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetParLockInputEscHandle"
        },
        "initData": "getSettingChSetParLockInputDialogData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "settingChSetParLockInputOnDestroy",                       //页面创建时的回调函数
        "pageData": {}
    },
    {
        "id": "settingChSetAutoScanPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetAutoScanPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetAutoScanPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel scan type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetChScanBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetChScanPageEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetAutoScanPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetAutoScanPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetAutoScanPageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                         //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys":{
//            "enable":[VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK]
            "disable":[VK_NETFLIX,VK_YOUTUBE, VK_VUDU]
        },
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "settingChSetAutoScanPageId",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/settingChSetAutoScanPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/SA/settingChSetAutoScanPage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "settingChSetAutoScanPageId",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/settingChSetAutoScanPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetAutoScanPage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "settingChSetAutoScanPageId",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/COL/settingChSetAutoScanPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/COL/settingChSetAutoScanPage.html"
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }
        ]
    },
    {
        "id": "settingChSetClearChannelDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetClearChannelDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetClearChannelDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetClearChannelOk",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetClearChannelEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetClearChannelData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetClearChannelOnDestroy",  //页面创建时的回调函数
        "pageData": {},                          //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {}
    },
    {
        "id": "settingChSetDTVManuPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/SettingChSetDTVManuPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/SettingChSetDTVManuPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel scan type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChManuSetTabsFrame",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetDTVManuEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetDTVManuPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetDTVManuOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetDTVManuOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetDTVTManuSetPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetDTVTManuSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDTVTManuSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel scan type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetDTVTManuNumberBtn",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetDTVTManuSetEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetDTVTManuSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetDTVTManuSetPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetDTVTManuPageOnDestroy",  //页面创建时的回调函数
        "pageData": {}                          //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetDTVCManuSetPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetDTVCManuSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDTVCManuSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel scan type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetDTVCManuFreInput",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetDTVCManuSetEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetDTVCManuSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetDTVCManuSetPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetDTVCManuPageOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetChNumberChangeDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetChNumberChangeDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetChNumberChangeDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel scan type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetChNumberPlus",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetChNumberChangeEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetChNumberChangeDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetChNumberChangeOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetChNumberChangeOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "settingChSetChNumberChangeDialogId",
                "areas": ["COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/COL/settingChSetChNumberChangeDialog.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/COL/settingChSetChNumberChangeDialog.html",
                "firstFocusId": "settingChSetChNumberPlus"//包括button或者Component
            }
        ]
    },
    {
        "id": "settingChSetATVManuSetPageId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetATVManuSetPage.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetATVManuSetPage.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel scan type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetATVManuFreqInput",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetATVManuSetPageEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetATVManuSetPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetATVManuSetPageOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetATVManuPageOnDestroy",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "settingChSetATVManuSetPageId",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/EU/settingChSetATVManuSetPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetATVManuSetPage.html",
                "firstFocusId": "settingChSetATVTunerModeList"//包括button或者Component
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            },
            {
                "subId": "settingChSetATVManuSetPageId",
                "areas": ["SA","COL"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/setting/SA/settingChSetATVManuSetPage.js",
                "htmlPath": "UI/hisenseUI/modulePages/setting/SA/settingChSetATVManuSetPage.html",
                "firstFocusId": "settingChSetATVManuNumberBtn"//包括button或者Component
//                    "cssPath": ""
//                    "handler": {
//                        "aftEscHandler": "exitSKBLan"
//                    }
            }
        ]
    },
    {
        "id": "settingChSetATVColorSysListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetATVColorSysListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetATVColorSysListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetATVColorSysListUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetATVColorSysListDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetATVColorSysListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetATVColorSysListDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetATVColorSysListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetATVSoundSysListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetATVSoundSysListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetATVSoundSysListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/wizardDialogStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetATVSoundSysListUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetATVSoundSysListDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetATVSoundSysListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetATVSoundSysListDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetATVSoundSysListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetFavListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetFavListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetFavListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel Favourite list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetFavListContUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetFavListDialogEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetFavListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetFavListDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetFavListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetSkipListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetSkipListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetSkipListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel Favourite list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetSkipListContUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetSkipListDialogEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetSkipListDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetSkipListDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetSkipListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetNoChannelDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetNoChannelDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetNoChannelDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "if no channel enter channel skip or fav it will display",
        "pageMode": "module",//可指定module,single,dialog
//            "firstFocusId": "",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetNoChannelDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "settingChSetNoChannelDialogOnOpen",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetNoChannelDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetTunerModePageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetTunerModePage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetTunerModePage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "wizard channel set tuner mode page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetTMList",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetTunerModeEscHandle"
        },
        "initData": "getSettingChSetTunerModePageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetTunerModeOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetScanModePageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetScanModePage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetScanModePage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "wizard channel set scan mode page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetSMList",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetScanModeEscHandle"
        },
        "initData": "getSettingChSetScanModePageData",
        "onCreate": "",
        "onOpen": "settingChSetScanModeOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetScanModeOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetSatelliteModePageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetSatelliteModePage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetSatelliteModePage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "wizard channel set tuner mode page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetSMList",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetSatelliteModePageEscHandle"
        },
        "initData": "getSettingChSetSatelliteModePageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetSatelliteModeOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBOperatorPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetDVBOperatorPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetDVBOperatorPage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "dvb operator selector page",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBOperatorList",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBOperatorPageEscHandle"
        },
        "initData": "getSettingChSetDVBOperatorPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetDVBOperatorOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetSelSatellitePageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetSelSatellitePage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetSelSatellitePage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "wizard channel set select satellite page",
        "pageMode": "module",
        "firstFocusId": "settingChSetSateModeUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetSelSatelliteEscHandle"
        },
        "initData": "getSettingChSetSelSatellitePageData",
        "onCreate": "",
        "onOpen": "settingChSetSelSatelliteOnOpen",
        "onClose": "settingChSetSelSatelliteOnClose",
        "onDestroy": "settingChSetSelSatelliteOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetAntSetupPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetAntSetupPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetAntSetupPage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "wizard channel set antenna setup",
        "pageMode": "module",
        "firstFocusId": "settingChSetAntSetupPowerSwitch",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetAntSetupEscHandle"
        },
        "initData": "getSettingChSetAntSetupPageData",
        "onCreate": "",
        "onOpen": "settingChSetAntSetupPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetAntSetupPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetAutoSatelliteListDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetAutoSatelliteListDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetAutoSatelliteListDialog.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "satellite select dialog ",
        "pageMode": "module",
        "firstFocusId": "settingChSetAutoSatelliteListUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": true,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetAutoSatelliteListDialogEscHandle"
        },
        "initData": "getSettingChSetAutoSatelliteListDialogData",
        "onCreate": "",
        "onOpen": "settingChSetAutoSatelliteListDialogOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetAutoSatelliteListDialogOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetFransatOpListDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetFransatOpListDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetFransatOpListDialog.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "FransatOp select dialog ",
        "pageMode": "module",
        "firstFocusId": "settingChSetFransatOpListUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetFransatOpListDialogEscHandle"
        },
        "initData": "getSettingChSetFransatOpListDialogData",
        "onCreate": "",
        "onOpen": "settingChSetFransatOpListDialogOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetFransatOpListDialogOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetCommDVBSPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetCommDVBSPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetCommDVBSPage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "channel set antenna setup",
        "pageMode": "module",
        "firstFocusId": "ChannelCommChannelItem",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetCommDVBSPageEscHandle"
        },
        "initData": "getSettingChSetCommDVBSData",
        "onCreate": "",
        "onOpen": "settingChSetCommDVBSPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetCommDVBSPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetCommDVBTPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetCommDVBTPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetCommDVBTPage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "channel set antenna setup",
        "pageMode": "module",
        "firstFocusId": "ChannelCommChannelItem",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetCommDVBTPageEscHandle"
        },
        "initData": "getSettingChSetCommDVBTData",
        "onCreate": "",
        "onOpen": "settingChSetCommDVBTPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetCommDVBTPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetCommDVBCPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetCommDVBCPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetCommDVBCPage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "channel set antenna setup",
        "pageMode": "module",
        "firstFocusId": "ChannelCommChannelItem",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetCommDVBCPageEscHandle"
        },
        "initData": "getSettingChSetCommDVBCData",
        "onCreate": "",
        "onOpen": "settingChSetCommDVBCPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetCommDVBCPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetEUAutoPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetEUAutoPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetEUAutoPage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "channel set DVB Auto page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetAutoRescanBtn",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBAutoEscHandle"
        },
        "initData": "getSettingChSetDVBAutoPageData",
        "onCreate": "",
        "onOpen": "settingChSetDVBAutoPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBAutoPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetEUAutoScanPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/EU/settingChSetEUAutoScanPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetEUAutoScanPage.html",
        "cssPath": "css/settingChannelStyle.css",
        "description": "channel set DVB Auto Scan page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetAutoScanDoneBtn",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetAutoScanPageEscHandle"
        },
        "initData": "getSettingChSetAutoScanPageData",
        "onCreate": "",
        "onOpen": "settingChSetAutoScanPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetAutoScanPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetExitSetupDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/EU/settingChSetExitSetupDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/EU/settingChSetExitSetupDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetExitSetupOk",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetExitSetupEscHandle"
        },
        "AutoClose": false,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetExitSetupData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetExitSetupOnDestroy",  //页面创建时的回调函数
        "pageData": {},                          //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "keys": {}
    },
    {
        "id": "settingChSetMainPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetMainPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetMainPage.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "wizard channel set main page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetMainTunerModeList",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetMainPageEscHandle"
        },
        "initData": "getSettingChSetMainPageData",
        "onCreate": "",
        "onOpen": "settingChSetMainPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetMainPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBC2PageId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBC2Page.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBC2Page.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "channel set DVBC2 page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBC2NetBtn",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBC2ToMainPage"
        },
        "initData": "getSettingChSetDVBC2PageData",
        "onCreate": "",
        "onOpen": "settingChSetDVBC2PageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBC2PageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetScramListDialogId",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/setting/settingChSetScramListDialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetScramListDialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelScanSetStyle.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "scram type list",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "settingChSetScramListUl",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": "settingChSetScramListDialogEscHandle"
        },
        "AutoClose": true,
//            "AutoCloseTimeLength":30,
        "initData": "getSettingChSetScramDialogData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "settingChSetScramListDialogOnDestroy",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "settingChSetNetIdInputDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetNetIdInputDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetNetIdInputDialog.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "DVBC network id input",
        "pageMode": "module",
        "firstFocusId": "settingChSetNetIdInput",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetNetIdInputEscHandle"
        },
        "initData": "getSettingChSetNetIdInputDialogData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetNetIdInputDialogOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBCOperListDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBCOperListDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBCOperListDialog.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "DVBC Operator List",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBCOperListContUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBCOperListEscHandle"
        },
        "initData": "getSettingChSetDVBCOperListDialogData",
        "onCreate": "",
        "onOpen": "settingChSetDVBCOperListOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBCOperListOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBSOperListDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBSOperListDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBSOperListDialog.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "DVBS Operator List",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBSOperListContUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBSOperListEscHandle"
        },
        "initData": "getSettingChSetDVBSOperListDialogData",
        "onCreate": "",
        "onOpen": "settingChSetDVBSOperListOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBSOperListOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBT2PageId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBT2Page.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBT2Page.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "channel set DVBT2 page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBT2ScanMNav",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBT2ToMainPage"
        },
        "initData": "getSettingChSetDVBT2PageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetDVBT2PageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBTUKAreaListDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBTUKAreaListDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBTUKAreaListDialog.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "DVBT UK Area List",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBTUKAreaListContUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBTUKAreaListEscHandle"
        },
        "initData": "getSettingChSetDVBTUKAreaListDialogData",
        "onCreate": "",
        "onOpen": "settingChSetDVBTUKAreaListOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBTUKAreaListOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBTLCNListDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBTLCNListDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBTLCNListDialog.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "DVBT LCN List",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBTLCNListContUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBTLCNListEscHandle"
        },
        "initData": "getSettingChSetDVBTLCNListDialogData",
        "onCreate": "",
        "onOpen": "settingChSetDVBTLCNListOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBTLCNListOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBS2PageId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBS2Page.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBS2Page.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "channel set DVBS2 page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBS2SateNav",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBS2ToMainPage"
        },
        "initData": "getSettingChSetDVBS2PageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetDVBS2PageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBS3PageId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBS3Page.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBS3Page.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "channel set DVBS3 page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetStep3SateFreUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        "handler": {
            "aftEscHandler": "settingChSetDVBS3PageEscHandle"
        },
        "initData": "getSettingChSetDVBS3PageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetDVBS3PageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBS4PageId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBS4Page.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBS4Page.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "channel set DVBS4 page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBS4PowerSwitch",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBS4EscHandle"
        },
        "initData": "getSettingChSetDVBS4PageData",
        "onCreate": "",
        "onOpen": "settingChSetDVBS4PageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBS4PageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetDVBAutoPageId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetDVBAutoPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetDVBAutoPage.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "channel set DVB Auto page ",
        "pageMode": "module",
        "firstFocusId": "settingChSetDVBAutoSetBtn",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetDVBAutoEscHandle"
        },
        "initData": "getSettingChSetDVBAutoPageData",
        "onCreate": "",
        "onOpen": "settingChSetDVBAutoPageOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetDVBAutoPageOnDestroy",
        "pageData": {}
    },
    {
        "id": "settingChSetSatelliteListDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetSatelliteListDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetSatelliteListDialog.html",
        //"cssPath": "css/channelScanSetStyle.css",
        "description": "satellite manu scan satellite list",
        "pageMode": "module",
        "firstFocusId": "settingChSetSatelliteListUl",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetSatelliteListDialogEscHandle"
        },
        "initData": "getSettingChSetSatelliteListDialogData",
        "onCreate": "",
        "onOpen": "settingChSetSatelliteListDialogOnOpen",
        "onClose": "",
        "onDestroy": "settingChSetSatelliteListDialogOnDestroy",
        "pageData": {}
    },

    {
        "id": "settingChSetBandFreInputDialogId",
        "module": "setting",
        "jsPath": "modulePages/setting/settingChSetBandFreInputDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/setting/settingChSetBandFreInputDialog.html",
//            "cssPath": "css/wizardDialogStyle.css",
        "description": "channel set band freq input dialog ",
        "pageMode": "module",
        "firstFocusId": "settingChSetBandFreInput",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        //"AutoCloseTimeLength":30,
        "handler": {
            "aftEscHandler": "settingChSetBandFreInputEscHandle"
        },
        "initData": "getSettingChSetBandFreInputDialogData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "settingChSetBandFreInputOnDestroy",
        "pageData": {}
    },

/**--------------------- setting end ---------------------**/

/**--------------------- channel manager start ---------------------**/
    {
        "id": "channel_manager_page",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/channelManager/channelmanager.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/channelManager/channelmanager.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/channelmanager.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel manager page ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "chl_manager_list_display",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": ""
        },
        "AutoClose": true,
        "initData": "getchlmanagerPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "channelmanagerpage.onOpenChlManager",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "channelmanagerpage.onDestroyPage",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "channel_manager_page",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/channelManager/EU/channelmanager.js",
                "htmlPath": "UI/hisenseUI/modulePages/channelManager/EU/channelmanager.html",
//                    "cssPath": ""
                "firstFocusId": "chl_manager_list_edit",//包括button或者Component
                "handler": {
                    befEscHandler: ""
                }
            }
        ]
    },
    {
        "id": "channel_manager_bg",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/channelManager/EU/channelmanagerbg.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/channelManager/EU/channelmanagerbg.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/channelmanagerbg.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel manager backgroud ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "chl_manager_list_type1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "channelmanagerbg.returnManagerPage"
        },
        "AutoClose": true,
        "initData": "getchlmanagerBgData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "channelmanagerbg.onOpenChlManagerBg",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "channelmanagerbg.onDestroyPage",  //页面创建时的回调函数
        "pageData": {},                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "channel_manager_bg",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/channelManager/EU/channelmanagerbg.js",
                "htmlPath": "UI/hisenseUI/modulePages/channelManager/EU/channelmanagerbg.html",
//                    "cssPath": ""
                "handler": {
                    befEscHandler: "channelmanagerbg.returnManagerPage"
                }
            },
            {
                "subId": "channel_manager_bg",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/channelManager/SA/channelmanagerbg.js",
                "htmlPath": "UI/hisenseUI/modulePages/channelManager/SA/channelmanagerbg.html",
//                    "cssPath": ""
                "handler": {
                    befEscHandler: "channelmanagerbg.returnManagerPage"
                }
            }
        ]
    },

    {
        "id": "channel_manager_fav_edit",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/channelManager/EU/channelmanager_fav.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/channelManager/EU/channelmanager_fav.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/channelmanagerbg.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel manager fav ",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "chl_manager_list_type2",//包括button或者Component  chl_manager_list_type2
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            befEscHandler: "channelmanagerfav.returnManagerPage"
        },
        "AutoClose": true,
        "initData": "getchlmanagerFavEditData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "channelmanagerfav.onOpenChlManagerfav",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "channelmanagerfav.onDestroyPage",  //页面创建时的回调函数
        "pageData": {},                          //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
        "extendPages": [//多个页面都符合条件,用最后符合的
            {
                "subId": "channel_manager_fav_edit",
                "areas": ["EU"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/channelManager/EU/channelmanager_fav.js",
                "htmlPath": "UI/hisenseUI/modulePages/channelManager/EU/channelmanager_fav.html",
//                    "cssPath": ""
                "handler": {
                    befEscHandler: "channelmanagerfav.returnManagerPage"
                }
            },
            {
                "subId": "channel_manager_fav_edit",
                "areas": ["SA"],//-运算符必须统一，以第一个为准
                "subAreas": [],
                "country": [],
                "brand": [],   //空值为All，“-”表示排除，，以第一个为准
                "jsPath": "modulePages/channelManager/channelmanager_fav.js",
                "htmlPath": "UI/hisenseUI/modulePages/channelManager/channelmanager_fav.html",
//                    "cssPath": ""
                "handler": {
                    befEscHandler: "channelmanagerfav.returnManagerPage"
                }
            }
        ]
    },
    {
        "id": "channel_manager_fliter",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/channelManager/channelmanager_fliter.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/channelManager/channelmanager_fliter.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/channelmanager_fliter.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel manager fliter",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "chl_manager_fliter_src_list",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": ""
        },
        "AutoClose": true,
        "initData": "getchlmanagerfliterPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "chlmanagerfliterpage.onOpenChlManagerFilter",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "chlmanagerfliterpage.onDestroyPage",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "channel_manager_rename",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/channelManager/channelmanager_rename.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/channelManager/channelmanager_rename.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/channelmanager_rename.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel manager rename",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "chl_manager_rename_list",//包括button或者Component  chl_mananger_rename_name
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": ""
        },
        "AutoClose": true,
        "initData": "getchlmanagerRenamePageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onFocus": "channelmanagerrenamepage.resetRenamePagePositon",//页面创建时的回调函数
        "onBlur": "channelmanagerrenamepage.DynamicResetPosition",  //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "channelmanagerrenamepage.onDestroyPage",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    {
        "id": "channel_manager_dialog",
        "module": "setting",                         //表示页面所属模块
        "jsPath": "modulePages/channelManager/channelmanager_dialog.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/channelManager/channelmanager_dialog.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/channelmanager_dialog.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "channel manager dialog",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "chl_manager_dialog_btn_1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {
            "aftEscHandler": ""
        },
        "AutoClose": true,
        "initData": "getchlmanagerDialogPageData",//页面创建前的回调函数
        "onCreate": "",                 //页面创建时的回调函数
        "onOpen": "channelmanagerdialogpage.OpenRenameDialog",                            //页面创建时的回调函数
        "onClose": "",    //页面创建时的回调函数
        "onDestroy": "channelmanagerdialogpage.onDestroyPage",  //页面创建时的回调函数
        "pageData": {}                           //此处节点可以为空，如果为空，则可利用导入Js文件中函数，在onCreate中进行赋值
    },
    /*----------------------- PVR And Tshift start ------------------------*/
    /*tshift start*/
    {
        "id": "tshiftProgressPage_id",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/tshift.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/tShift.html",
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "tshift_play_btn",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "noRepeatKeys": [VK_DOWN, VK_LEFT, VK_RIGHT],
        "keys": {
            "disable": [
                VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
                VK_RECORD
            ]
        },
        //"AutoClose": true,
        //"AutoCloseTimeLength": 30,
        "handler": {
            "aftEscHandler": "exitTShift",
            "befDownHandler": "exitTShift",
            //"keyPvrHandler": "keyTShfitToPvrHandler",
            "keyStopHandler": "pageTtshiftStopBtnEnter",
            "keyFastFWDHandler": "pageTshiftFrontBtnEnter",
            "keyFastBKWHandler": "pageTshiftBackBtnEnter",
            "keyPauseHandler": "pageTshiftPauseKeyBtnEnter",
            "keyPlayHandler": "pageTshiftPlayKeyBtnEnter",
            "keyNum0Handler": "tshiftCuttingMachine_keyNum0",
            "keyNum1Handler": "tshiftCuttingMachine_keyNum1",
            "keyNum2Handler": "tshiftCuttingMachine_keyNum2",
            "keyNum3Handler": "tshiftCuttingMachine_keyNum3",
            "keyNum4Handler": "tshiftCuttingMachine_keyNum4",
            "keyNum5Handler": "tshiftCuttingMachine_keyNum5",
            "keyNum6Handler": "tshiftCuttingMachine_keyNum6",
            "keyNum7Handler": "tshiftCuttingMachine_keyNum7",
            "keyNum8Handler": "tshiftCuttingMachine_keyNum8",
            "keyNum9Handler": "tshiftCuttingMachine_keyNum9",
            "keyChannelUpHandler": "tshiftCuttingMachine_keyChannelUp",
            "keyChannelDownHandler": "tshiftCuttingMachine_keyChannelDown"
        },
        "CaE": "",
        "initData": "getTshiftPageInfo",
        "onCreate": "",
        "onOpen": "",
        "onClose": "closeTshiftPage",
        "onDestroy": "destoryTshiftHandler",
        "pageData": {}
    },
    {
        "id": "tshiftMediaDialog",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/tshiftMediaDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/tshiftMediaDialog.html",
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
//            "keys": {
//                "enable": [
//                    VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
//                "disable": [
//                    VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
//                    VK_MENU, VK_HOME, VK_MEDIA
//                ]
        //          },
        "handler": {
            "aftEscHandler": "exitTshiftMedia"
        },
        "CaE": "",
        "initData": "getTMDialogPageData",
        "onCreate": "",
        "onOpen": "tshiftMediaDialogOnOpen",
        "onClose": "forceToExitTshiftMedia",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "tShiftMsg_id",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/tShiftMsgPage.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/tShiftMsgPage.html",
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
//            "keys": {
//                "enable": [
//                    VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
//                "disable": [
//                    VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
//                    VK_MENU, VK_HOME, VK_MEDIA
//                ]
//            },
        "handler": {
            "aftEscHandler": "exitTMsgPage"
        },
        "CaE": "",
        "initData": "getTMsgPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "forceToExitTMsgPage",
        "onDestroy": "",
        "pageData": {}
    },
    /*tshift end*/
    /* pvr_ortshift dialog start */
    {
        "id": "pvrOrtShiftDialogPage_id",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrOrtShiftDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrOrtShiftDialog.html",
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "pvr_tshift_dialog_pvr",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": true,
//            "keys": {
//                "enable": [
//                    VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK, VK_EXIT],
//                "disable": [
//                    VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
//                    VK_MENU, VK_HOME, VK_MEDIA
//                ]
//            },
        "handler": {
            "aftEscHandler": "exitPvrTShiftDialog"
        },
        "CaE": "",
        "initData": "getPvrTshiftDialogPageData",
        "onCreate": "",
        "onOpen": "pvrDialogonOpen",
        "onClose": "pvrDialogonClose",
        "onDestroy": "pvrDialogonDestroy",
        "pageData": {}
    },
    //pvr-2014-12-17
    {
        "id": "pvrtshift_pvr_page",
        "description": "PVR page",
        "pageMode": "module",
        "firstFocusId": "button_stop",
        "module": "pvr",
        "jsPath": "modulePages/pvrtshift/pvrtshift_pvr.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrtshift_pvr.html",
        "cssPath": "css/pvrtshift_pvr.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        "groupNavMode": "nearest",
        "initData": "getPvrPageData",
        "onCreate": "",
        "onOpen": "pvrPageonOpen",
        "onClose": "pvrPageonClose",
        "onDestroy": "pvrPageonDestroy",
        "pageData": {},
        "keys": {
            /*"enable": [
             VK_HOME, VK_ALLAPP, VK_YOUTUBE, VK_AMAZON, VK_VUDU, VK_DOWN, VK_PVR, VK_T_SHIFT, VK_ENTER, VK_LEFT, VK_RIGHT,
             VK_BACK, VK_EXIT, VK_MUTE, VK_VOLUME_UP, VK_VOLUME_DOWN, VK_KEYPAD_VOLUME_UP, VK_KEYPAD_VOLUME_DOWN, VK_STOP,
             VK_0, VK_1, VK_2, VK_3, VK_4, VK_5, VK_6, VK_7, VK_8, VK_9
             ],*/
            "disable": [
                VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN, VK_MEDIA, VK_PAUSE
            ]
        },
        "handler": {
            "aftEscHandler": "exitPVR",
            "befDownHandler": "exitPVR",
            "keyTimeShiftHandler": "recordTimeShiftHandler",
            "keyStopHandler": "keyStopRecordHandler",
            "keyNum0Handler": "PVRKeyNumHandler('keyNum0')",
            "keyNum1Handler": "PVRKeyNumHandler('keyNum1')",
            "keyNum2Handler": "PVRKeyNumHandler('keyNum2')",
            "keyNum3Handler": "PVRKeyNumHandler('keyNum3')",
            "keyNum4Handler": "PVRKeyNumHandler('keyNum4')",
            "keyNum5Handler": "PVRKeyNumHandler('keyNum5')",
            "keyNum6Handler": "PVRKeyNumHandler('keyNum6')",
            "keyNum7Handler": "PVRKeyNumHandler('keyNum7')",
            "keyNum8Handler": "PVRKeyNumHandler('keyNum8')",
            "keyNum9Handler": "PVRKeyNumHandler('keyNum9')",
            "keyChannelUpHandler": "PVRKeyNumHandler('keyChannelUp')",
            "keyChannelDownHandler": "PVRKeyNumHandler('keyChannelDown')"
        }
    },
    //pvr finish-2015-1-27
    {
        "id": "pvrFinishDialog",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrFinishDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrFinishDialog.html",
        "cssPath": "css/pvrtshift_pvrfinish.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "recordDialogTip",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
        "keys": {
            "enable": [
                VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK, VK_EXIT],
            "disable": [
                VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
                VK_MENU, VK_HOME, VK_MEDIA
            ]
        },
        "handler": {
        },
        "CaE": "",
        "initData": "getPFDialogPageData",
        "onCreate": "",
        "onOpen": "pvrFinishDialogOnOpen",
        "onClose": "pvrFinishDialogOnClose",
        "onDestroy": "pvrFinishDialogOnDestory",
        "pageData": {}
    },
    //standby record-2015-1-26
    {
        "id": "standbyRecordDialog",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/standbyRecord.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/standbyRecord.html",
        "cssPath": "css/standbyRecord.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "standbyRecordSave",
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "keys": {},
        "handler": {
            "aftEscHandler": "exitStandbyRecordDiglog"
        },
        "AutoClose": true,
        "AutoCloseTimeLength": 5,
        "CaE": "",
        "initData": "getStandbyRecordPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "standbyRecordDestory",
        "pageData": {}
    },
    //pvr tshift show dialog-2015-2-9
    {
        "id": "pvrTshiftShowDialog",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrTshiftShowDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrTshiftShowDialog.html",
        "cssPath": "css/pvrtshift_pvrtshiftswitch.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "pvrTshiftOK",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "keys": {
            "enable": [
                VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": [
                VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
                VK_MENU, VK_HOME, VK_MEDIA
            ]
        },
        "handler": {
            "aftEscHandler": "exitPTShowDiglog"
        },
        "AutoClose": false,
        "CaE": "",
        "initData": "getPTShowDialogPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "PTShowDialogDestroy",
        "onDestroy": "PTShowDialogDestroy",
        "pageData": {}
    },
    //pvr stop to switch-2015-3-4
    {
        "id": "pvrStopToSwitchDialog",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrStopToSwitch.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrStopToSwitch.html",
        "cssPath": "css/pvrtshift_pvrtshiftswitch.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "pvrStopToSwitchOK",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "keys": {
            "enable": [
                VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK],
            "disable": [
                VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
                VK_MENU, VK_HOME, VK_MEDIA
            ]
        },
        "handler": {
            "aftEscHandler": "exitpvrStopToSwitchDialog"
        },
        "AutoClose": true,
        "AutoCloseTimeLength": 5,
        "CaE": "",
        "initData": "getPvrStopToSwitchPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "pvrStopToSwitchDialogDestroy",
        "onDestroy": "pvrStopToSwitchDialogDestroy",
        "pageData": {}
    },
    //new record tip dialog-2015-3-7
    {
        "id": "newRecordTipDialog",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/newRecordTipDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/newRecordTipDialog.html",
        "cssPath": "css/newRecordTipDialog.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "beginNewRecord",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
        "keys": {
            "enable": [
                VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK, VK_EXIT],
            "disable": [
                VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
                VK_MENU, VK_HOME, VK_MEDIA
            ]
        },
        "handler": {
        },
        "CaE": "",
        "initData": "getNewRecordTipDialogPageData",
        "onCreate": "",
        "onOpen": "newRecordTipDialogOnOpen",
        "onClose": "newRecordTipDialogOnClose",
        "onDestroy": "newRecordTipDialogOnDestory",
        "pageData": {}
    },
    //pvr hard disk check-2015-3-8
    {
        "id": "pvrHardDiskCheck",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrHardDiskCheck.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrHardDiskCheck.html",
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "pvrtshift_diskcheck_title",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
        "handler": {},
        "CaE": "",
        "initData": "getPvrHardDiskcheckPageData",
        "onCreate": "",
        "onOpen": "pvrHardDiskcheckOnOpen",
        "onClose": "pvrHardDiskcheckOnClose",
        "onDestroy": "pvrHardDiskcheckOnDestroy",
        "pageData": {},
        "keys": {
            "disable": [
                VK_HOME, VK_EPG, VK_MENU, VK_MEDIA, VK_ALLAPP, VK_CC, VK_LIVETV, VK_INPUT, VK_KEYPAD_INPUT,
                VK_SLEEP
            ]
        }
    },
    //pvr hard disk check retry-2015-3-8
    {
        "id": "pvrHDCheckRetryDialog",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrHDCheckRetryDialog.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrHDCheckRetryDialog.html",
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "pvrtshift_dialog1_btn1",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
        //"keys": {},
        "handler": {
            "aftEscHandler": "exitPvrHDCheckRetryDialog"
        },
        "CaE": "",
        "initData": "getPvrHDCheckRetryDialogPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "pvrHDCheckRetryDialogOnDestroy",
        "pageData": {}
    },
    //pvr hard disk list-2015-3-8
    {
        "id": "pvrHDList",
        "module": "pvrtshift",                         //表示页面所属模块
        "jsPath": "modulePages/pvrtshift/pvrHDList.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrHDList.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "pvrtshift_usb_list_ul1",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getPvrHDListPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "pvrHDListOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "pvrHDListOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "keys": {
            "disable": [
                VK_HOME, VK_EPG, VK_MENU, VK_MEDIA, VK_ALLAPP, VK_CC, VK_LIVETV, VK_INPUT, VK_KEYPAD_INPUT,
                VK_SLEEP
            ]
        }
    },
    {
        "id": "shiftHdSizeList",
        "module": "pvrtshift",                         //表示页面所属模块
        "jsPath": "modulePages/pvrtshift/shiftHdSizeList.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/shiftHdSizeList.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "AutoClose": false,
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "shiftHdSizeList_OK",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getShiftHdSizeListPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "shiftHdSizeListOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "shiftHdSizeListOnDestroy",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
        "aftEscHandler": "shiftHdSizeListPageEscHandler"
    },
        "keys": {
            "disable": [
                VK_HOME, VK_EPG, VK_MENU, VK_MEDIA, VK_ALLAPP, VK_CC, VK_LIVETV, VK_INPUT, VK_KEYPAD_INPUT,
                VK_SLEEP
            ]
        }
    },
    //pvr begin or cancel record dialog-2015-3-25
    {
        "id": "beginRecordDialog",
        "description": "PVR page",
        "pageMode": "module",
        "firstFocusId": "beginRecordBtn",
        "module": "pvr",
        "jsPath": "modulePages/pvrtshift/beginRecord.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/beginRecord.html",
        "cssPath": "css/beginRecord.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        "groupNavMode": "nearest",
        "initData": "getBeginRecordDialogPageData",
        "onCreate": "",
        "onOpen": "beginRecordDialogOnOpen",
        "onClose": "beginRecordDialogOnClose",
        "onDestroy": "beginRecordDialogOnDestory",
        "pageData": {},
        "keys": {
            "enable": [
                VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK, VK_EXIT, VK_LIVETV
            ]

        }
    },
    //pvr hard disk speed check result-2015-3-29
    {
        "id": "pvrHDSpeedCheckResult",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrHDSpeedCheckResult.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrHDSpeedCheckResult.html",
        "cssPath": "css/tshift.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "pvrtshift_usb_speed_check_result_btn1",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
        "handler": {},
        "CaE": "",
        "initData": "getPvrHDSpeedCheckResultPageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "pvrHDSpeedCheckResultOnDestroy",
        "pageData": {},
        "keys": {
            "disable": [
                VK_HOME, VK_EPG, VK_MENU, VK_MEDIA, VK_ALLAPP, VK_CC, VK_LIVETV, VK_INPUT, VK_KEYPAD_INPUT,
                VK_SLEEP
            ]
        }
    },
    //pvr record tip-2015-4-3
    {
        "id": "pvrRecordTip",
        "module": "pvrtshift",
        "jsPath": "modulePages/pvrtshift/pvrRecordTip.js",
        "htmlPath": "UI/hisenseUI/modulePages/pvrtshift/pvrRecordTip.html",
        "cssPath": "css/pvrRecordTip.css",
        "description": "inpout test sample page",
        "pageMode": "module",
        "firstFocusId": "pvrRecordTipTitle",
        "groupNavMode": "nearest",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "AutoClose": false,
        "keys": {
            "enable": [
                VK_UP, VK_DOWN, VK_LEFT, VK_RIGHT, VK_ENTER, VK_BACK, VK_EXIT],
            "disable": [
                VK_RED, VK_BLUE, VK_YELLOW, VK_GREEN,
                VK_MENU, VK_HOME, VK_MEDIA
            ]
        },
        "handler": {
        },
        "CaE": "",
        "initData": "getPvrRecordTipPageData",
        "onCreate": "",
        "onOpen": "pvrRecordTipOnOpen",
        "onClose": "pvrRecordTipOnClose",
        "onDestroy": "pvrRecordTipOnDestroy",
        "pageData": {}
    },
    /* pvr_ortshift dialog end */
    /*----------------------- PVR And Tshift end ------------------------*/
    //Player for DLNA
    {
        "id": "dlna_videoPlayer",
        "module": "dlna_videoPlayer",                         //表示页面所属模块
        "jsPath": "modulePages/himedia/dlna_videoPlayer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/himedia/videoPlayer_dlna.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelCommon.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "videoPlayer",
        "pageMode": "module",//可指定module,single,dialog
        // "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        "initData": "",
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",
        "onFocus": "HiVideoPlayer.initDlnaData",//页面创建时的回调函数
        "onClose": "",                         //页面创建时的回调函数
        "onDestroy": "HiVideoPlayer.closeVideoPlayer",                       //页面创建时的回调函数
        "pageData": {},
        "singleKeyMode": true,
        "keyEventSet": {"keyDown": "HiVideoPlayer.keydownhander", "keyUp": "", "keyPress": ""},
        "keys": {
            "disable": [
                VK_MEDIA,VK_BT_CONNECT,VK_VOICE
            ]
        }
    },

    //musicPlayer
    {
        "id": "dlna_musicPlayer",
        "module": "dlna_musicPlayer",                         //表示页面所属模块
        "jsPath": "modulePages/himedia/dlna_musicPlayer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/himedia/musicPlayer_dlna.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelCommon.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "musicPlayer",
        "pageMode": "module",//可指定module,single,dialog
        // "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        "initData": "",
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",
        "onFocus": "HiAudioPlayer.initDlnaData",//页面创建时的回调函数
        "onClose": "",                         //页面创建时的回调函数
        "onDestroy": "HiAudioPlayer.closeAudioPlayer",                       //页面创建时的回调函数
        "pageData": {},
        "singleKeyMode": true,
        "keyEventSet": {"keyDown": "HiAudioPlayer.keydownhander", "keyUp": "", "keyPress": ""},
        "keys": {
            "disable": [
                VK_MEDIA,VK_BT_CONNECT,VK_VOICE
            ]
        }
    },
    //picPlayer
    //picPlayer
    {
        "id": "dlna_picPlayer",
        "module": "dlna_picPlayer",                         //表示页面所属模块
        "jsPath": "modulePages/himedia/dlna_picPlayer.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/himedia/picPlayer_dlna.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
//            "cssPath": "css/channelCommon.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "description": "picPlayer",
        "pageMode": "module",//可指定module,single,dialog
        // "firstFocusId": "setting_sys_pwd_error_text1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "AutoClose": false,
        "initData": "",
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",
        "onFocus": "HiPicPlayer.initDlnaData",//页面创建时的回调函数
        "onClose": "",                         //页面创建时的回调函数
        "onDestroy": "HiPicPlayer.closePicPlayer",                       //页面创建时的回调函数
        "pageData": {},
        "singleKeyMode": true,
        "keyEventSet": {"keyDown": "HiPicPlayer.keydownhander", "keyUp": "", "keyPress": ""},
        "keys": {
            "disable": [
                VK_MEDIA,VK_BT_CONNECT,VK_VOICE
            ]
        }
    },
    // PLAYER FOR DLNA END-----
    /* speech dialog start */
    {
        "id": "Voice_assistant_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "Voice_assistant_bottom_3",
        "module": "speech",                         //表示页面所属模块
        "AutoClose": false,
        "jsPath": "modulePages/speech/speech.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/speech/speech.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/speech.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getVoicePageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "getSpeechState",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "VoiceOnClose",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
            "aftEscHandler": "",
            "befLeftHandler":"SpeechLanMoveLeftHandler",
            "befRightHandler":"SpeechLanMoveRightHandler"
        },
        "keys": {
            "enable": [
                VK_EXIT,VK_VOLUME_DOWN, VK_VOLUME_UP,VK_LEFT,VK_RIGHT
            ]
        }
    },
    {
        "id": "speech_Lan_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "speechLanSecTypeListContUl",
        "module": "speech",                         //表示页面所属模块
        "AutoClose": false,
        "jsPath": "modulePages/speech/speechLan.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/speech/speechLan.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/speech.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSpeechLanData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "speechLanOpenHandler",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
            "aftEscHandler": ""
        },
        "keys": {
            "enable": [
                VK_ENTER,VK_UP,VK_DOWN
            ]
        }
    },
    {
        "id": "speech_LanResure_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "speechLanResure_btn_0",
        "module": "speech",                         //表示页面所属模块
        "AutoClose": false,
        "jsPath": "modulePages/speech/speechLanResure.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/speech/speechLanResure.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/speech.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getSpeechLanResureData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
            "aftEscHandler": ""
        },
        "keys": {
            "enable": [
                VK_ENTER,VK_LEFT,VK_RIGHT
            ]
        }
    },
    {
        "id": "voice_help_mainpage",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "VoiceHelp_Ul",
        "module": "voice",
        "jsPath": "modulePages/speech/voice_help_mainpage.js",
        "htmlPath": "UI/hisenseUI/modulePages/speech/voice_help_mainpage.html",
        "cssPath": "css/voice_help.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getVoiceHelpMainpageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEnterHandler": "enterSubpage",
            "aftEscHandler": "exitVoiceHelp"
        }
    },
    {
        "id": "voice_help_subpage",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "",
        "module": "voice",
        "jsPath": "modulePages/speech/voice_help_subpage.js",
        "htmlPath": "UI/hisenseUI/modulePages/speech/voice_help_subpage.html",
        "cssPath": "css/voice_help.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getVoiceHelpSubpageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": "exitSubpage"
        }
    },
    {
        "id": "Bluetooth_speech_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "bluetooth_tip_start_btn_1",
        "module": "bluetooth",
        "jsPath": "modulePages/speech/bluetooth.js",
        "htmlPath": "UI/hisenseUI/modulePages/speech/bluetooth.html",
        "cssPath": "css/speech.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getBlueToothpageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "BluetoothOnClose",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": "exitBluetoothpage"
        },
        "keys": {
            "enable": [
                VK_EXIT,VK_ENTER
            ]
        }
    },
    {
        "id": "BluetoothMatch_speech_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "bluetoothMatch_tip_start_span_1",
        "module": "bluetooth",
        "jsPath": "modulePages/speech/bluetoothMatch.js",
        "htmlPath": "UI/hisenseUI/modulePages/speech/bluetoothMatch.html",
        "cssPath": "css/speech.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getBlueToothMatchpageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": "exitBluetoothMatchpage"
        },
        "keys": {
            "enable": [
                VK_EXIT
            ]
        }
    },
    {
        "id": "BluetoothResult_speech_page",
        "description": "Mode sample page",
        "pageMode": "module",
        "firstFocusId": "bluetoothResult_tip_start_btn_1",
        "module": "bluetooth",
        "jsPath": "modulePages/speech/bluetoothResult.js",
        "htmlPath": "UI/hisenseUI/modulePages/speech/bluetoothResult.html",
        "cssPath": "css/speech.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getBlueToothResultpageData",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
            "aftEscHandler": "exitBluetoothResultpage"
        },
        "keys": {
            "enable": [
                VK_ENTER,VK_LEFT,VK_RIGHT
            ]
        }
    },
    {
        "id": "mixBar_page",
        "description": "Mode sample page",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "mixBar_Item",
        "module": "mixBar",                         //表示页面所属模块
        "AutoClose": true,
        "AutoCloseTimeLength": 5,
        "jsPath": "modulePages/mixBar/mixBar.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/mixBar/mixBar.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/mixBar.css",        //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getMixBarPageData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "",                            //页面创建时的回调函数
        "onClose": "",                        //页面创建时的回调函数
        "onDestroy": "MixBarOnDestory",                       //页面创建时的回调函数
        "pageData": {},
        "handler": {
            "aftEscHandler": ""

        }
    },
    /*-----------------------  speech dialog end ------------------------*/
    {
        "id": "ginga_app",
        "description": "ginga_app",
        "pageMode": "module",
        "firstFocusId": "ginga_app_list",
        "module": "ginga",
        "jsPath": "modulePages/ginga/ginga.js",
        "htmlPath": "UI/hisenseUI/modulePages/ginga/ginga.html",
        "cssPath": "css/ginga.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getGingaPageData",
        "onCreate": "",
        "onOpen": "ginga.onOpenGinga",
        "onClose": "",
        "onDestroy": "",
        "pageData": {}
//            ,
//            "handler": {
//                "aftEscHandler": "ginga.exitGingaPage"
//            }
    },
    {
        "id": "ginga_cc_switch",
        "module": "setting",
        "jsPath": "modulePages/ginga/GingaCCSwitch.js",          //导入Js文件,由于回调问题，当前版本仅提供单一js文件
        "htmlPath": "UI/hisenseUI/modulePages/ginga/GingaCCSwitch.html",      //创建页面需要导入的HTML文件，由于回调问题，当前版本仅提供单一html文件
        "cssPath": "css/settingsnd.css",        //创建页面需要导入的css文件，由于回调问题，当前版本仅提供单一css文件
        "description": "声音恢复出厂设置",
        "pageMode": "module",
        "AutoClose": true,
        "firstFocusId": "ginga_cc_switch_btn_1",//包括button或者Component
        "groupNavMode": "nearest",//nearest,sequence
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "initData": "getGingaCCSwitchData", //页面创建前的回调函数
        "onCreate": "",                        //页面创建时的回调函数
        "onOpen": "onGingaCCSwitchOpen",      //页面创建时的回调函数
        "onClose": "",                        //页面关闭时的回调函数
        "onDestroy": "onGingaCCSwitchDestroy",                       //页面销毁时的回调函数
        "pageData": {}

    },
    {
        "id": "VIDAALiteNavPage",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "js/VIDAALiteNavPage.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteNavPage.html",
        "cssPath": VIDAALiteLauncherBaseDir + "css/VIDAALiteNavPage.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "",//包括button或者Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(最近原则)，sequence(正序原则)，
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [],
        "handler": {

        },
        "AutoClose": false,
        "initData": "getVIDAALiteLauncherPageData",
        "onCreate": "",
        "onOpen": "VIDAALiteLauncherOnOpen",
        "onClose": "VIDAALiteLauncherOnClose",
        "onFocus": "VIDAALiteLauncherOnFocus",
        "onBlur": "",
        "onDestroy": "",
        "pageData": {}
    },
    {
        "id": "VIDAALiteAppPage",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteApp.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteApp.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteApp.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "VidaaLitelauncherAppGridList",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "autoLocation":{
            "layer":"VidaaLiteLauncherAppContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":50,//边界宽度
            "left":0//边界宽度
        },
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
//                        {"mode":"leftFlip","param":[200],"speed":"fast"},
//                        {"mode":"rightFlip","param":[1000]},
//                        {"mode":"width","param":["toggle"]},
//                        {"mode":"upFlip","param":[200],"speed":"fast"},
//                        {"mode":"downFlip","param":[200],"speed":"fast"},
//                        {"mode":"scale","param":[0.1,0.1,'15%','50%'],"speed":5000}//初始x大小，y大小，原始参考点,speed可用毫秒表示，为整型
//                        {"mode":"scale","param":[0.1],"speed":"fast"}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
//                        {"mode":"rightFlip","param":[1000],"speed":"fast"},
//                        {"mode":"downFlip","param":[1000],"speed":"slow"},
//                        {"mode":"scale","param":[0.1,0.1,'15%','50%'],"speed":"slow"}//初始x大小，y大小，原始参考点
                ]
            }
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : function(){
                if(VIDAALiteLauncherAppPageData.operateData.state == 1){//change
                    return false;
                }else{
                    VIDAALiteNavPageCommonDownHandler.call(this);
                }
            },
            'befUpHandler' : function(){
                if(VIDAALiteLauncherAppPageData.operateData.state == 1){//change
                    return false;
                }else{
                    VIDAALiteNavPageCommonUpHandler.call(this);
                }
            },
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler',
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "AutoClose": false,
        "initData": "getVIDAALiteLauncherAppPageData",
        "onCreate": "",
        "onOpen": "VIDAALiteLauncherAppOnOpen",
        "onClose": "",
        "onFocus": "",
        "onBlur": "VIDAALiteLauncherOnBlur",
        "onDestroy": "VIDAALiteLauncherAppOnDestroy",
        "pageData": {}
    },
    {
        "id": "VIDAALiteAppPage_2006",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteApp_2006.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteApp_2006.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteApp_2006.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "VidaaLitelauncherAppNavList",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "autoLocation":{
            "layer":"VidaaLiteLauncherAppContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":50,//边界宽度
            "left":0//边界宽度
        },
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
//                        {"mode":"leftFlip","param":[200],"speed":"fast"},
//                        {"mode":"rightFlip","param":[1000]},
//                        {"mode":"width","param":["toggle"]},
//                        {"mode":"upFlip","param":[200],"speed":"fast"},
//                        {"mode":"downFlip","param":[200],"speed":"fast"},
//                        {"mode":"scale","param":[0.1,0.1,'15%','50%'],"speed":5000}//初始x大小，y大小，原始参考点,speed可用毫秒表示，为整型
//                        {"mode":"scale","param":[0.1],"speed":"fast"}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
//                        {"mode":"rightFlip","param":[1000],"speed":"fast"},
//                        {"mode":"downFlip","param":[1000],"speed":"slow"},
//                        {"mode":"scale","param":[0.1,0.1,'15%','50%'],"speed":"slow"}//初始x大小，y大小，原始参考点
                ]
            }
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : function(){
                if(VIDAALiteLauncherAppPageData.operateData.state == 1){//change
                    return false;
                }else{
                    VIDAALiteNavPageCommonDownHandler.call(this);
                }
            },
            'befUpHandler' : function(){
                if(VIDAALiteLauncherAppPageData.operateData.state == 1){//change
                    return false;
                }else{
                    VIDAALiteNavPageCommonUpHandler.call(this);
                }
            },
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler'
        },
        "AutoClose": false,
        "initData": "getVIDAALiteLauncherAppPageData",
        "onCreate": "",
        "onOpen": "VIDAALiteLauncherAppOnOpen",
        "onClose": "",
        "onFocus": "",
        "onBlur": "",
        "onDestroy": "VIDAALiteLauncherAppOnDestroy",
        "pageData": {}
    },
    {
        "id": "VIDAALiteMediaPage",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteMedia.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteMedia.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteMedia.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "VidaaLiteMediaList",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
                ]
            }
        },
        "autoLocation":{
            "layer":"VidaaLiteMediaContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":50,//边界宽度
            "left":0//边界宽度
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : 'VIDAALiteNavPageCommonDownHandler',
            'befUpHandler' : 'VIDAALiteNavPageCommonUpHandler',
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler',
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "AutoClose": false,
        "initData": "getVidaaLiteMediaPageData",
        "onCreate": "",
        "onOpen": "VidaaLiteMediaonOpen",
        "onClose": "",
        "onFocus": "VIDAALiteLauncherMediaOnFocus",
        "onBlur": "VIDAALiteLauncherOnBlur",
        "onDestroy": "VidaaLiteMediaOnDestory",
        "pageData": {}
    },
    {
        "id": "VIDAALiteRecommendPage",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteRecommend.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteRecommend.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteRecommend.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "VidaaLiteRecommendList",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
                ]
            }
        },
        "autoLocation":{
            "layer":"VidaaLiteRecommendContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":50,//边界宽度
            "left":0//边界宽度
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : 'VIDAALiteNavPageCommonDownHandler',
            'befUpHandler' : 'VIDAALiteNavPageCommonUpHandler',
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler',
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "AutoClose": false,
        "initData": "getVidaaLiteRecommendPageData",
        "onCreate": "",
        "onOpen": "VidaaLiteRecommendonOpen",
        "onClose": "",
        "onFocus": "",
        "onBlur": "VIDAALiteLauncherOnBlur",
        "onDestroy": "VidaaLiteRecommendOnDestory",
        "pageData": {}
    },
    {
        "id": "VIDAALiteRecommendationEUPage",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteRecommendation_EU.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteRecommendation_EU.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteRecommendation_EU.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "VidaaLiteRecommendationEUList",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
                ]
            }
        },
        "autoLocation":{
            "layer":"VidaaLiteRecommendationEUContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":50,//边界宽度
            "left":0//边界宽度
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : 'VIDAALiteNavPageCommonDownHandler',
            'befUpHandler' : 'VIDAALiteNavPageCommonUpHandler',
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler',
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "AutoClose": false,
        "initData": "getVidaaLiteRecommendationEUPageData",
        "onCreate": "",
        "onOpen": "VidaaLiteRecommendationEUonOpen",
        "onClose": "",
        "onFocus": "",
        "onBlur": "VIDAALiteLauncherOnBlur",
        "onDestroy": "VidaaLiteRecommendationEUOnDestory",
        "pageData": {}
    },
    {
        "id": "VIDAALiteFreeViewPage",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteFreeView.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteFreeView.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteFreeView.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "VidaaLiteFreeViewList",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
                ]
            }
        },
        "autoLocation":{
            "layer":"VidaaLiteFreeViewContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":50,//边界宽度
            "left":0//边界宽度
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : 'VIDAALiteNavPageCommonDownHandler',
            'befUpHandler' : 'VIDAALiteNavPageCommonUpHandler',
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler',
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "AutoClose": false,
        "initData": "getVidaaLiteFreeViewPageData",
        "onCreate": "",
        "onOpen": "VidaaLiteFreeViewonOpen",
        "onClose": "",
        "onFocus": "",
        "onBlur": "VIDAALiteLauncherOnBlur",
        "onDestroy": "VidaaLiteFreeViewOnDestory",
        "pageData": {}
    },
    {
        "id": "VIDAALiteVideoPage",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteVideo.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteVideo.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteVideo.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "VidaaLiteVideoGridList",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
                ]
            }
        },
        "autoLocation":{
            "layer":"VidaaLiteVideoContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":0,//边界宽度
            "left":0//边界宽度
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : 'VIDAALiteNavPageCommonDownHandler',
            'befUpHandler' : 'VIDAALiteNavPageCommonUpHandler',
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler',
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "AutoClose": false,
        "initData": "getVidaaLiteVideoPageData",
        "onCreate": "",
        "onOpen": "VidaaLiteVideoonOpen",
        "onClose": "",
        "onFocus": "",
        "onBlur": "VIDAALiteLauncherOnBlur",
        "onDestroy": "VidaaLiteVideoOnDestory",
        "pageData": {}
    },
    {
        "id": "VIDAALiteTvInput",
        "module": "launcher",
        "jsPath": VIDAALiteLauncherBaseDir + "/js/VIDAALiteTvInput.js",
        "htmlPath": "VIDAALiteLauncher/html/VIDAALiteTvInput.html",
        "cssPath": VIDAALiteLauncherBaseDir + "/css/VIDAALiteTvInput.css",
        "description": "launcher",
        "pageMode": "module",//可指定module,single,dialog
        "firstFocusId": "launcherLiveTv_signal_item_Ul",//包括button或�?�Component
//            "groupNavMode": "nearest",//nearest,sequence
        //导航进入到数组按钮的方式：nearby(�?近原�?)，sequence(正序原则)�?
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "animation": {//动画配置中的实验结果，当前的库不支持分步动画
            "winOpen": {
                "enable": false,
                "series": false,
                "effects": [//由于不支持分布动画，在最后一条记录中配置动画速度
                    {"mode":"fadeIn","param":[]}
                ]
            },
            "winClose": {
                "enable": false,
                "series": false,
                "effects": [
                    {"mode":"fadeOut","param":[]}
                ]
            }
        },
        "autoLocation":{
            "layer":"VidaaLiteInputContent",//自动平移的div id注册
            "width":1692,//显示范围宽度
            "edgeWidthL":0,//边界宽度
            "edgeWidthR":50,//边界宽度
            "left":0//边界宽度
        },
        "CaE": [],
        "handler": {
            'befDownHandler' : 'VIDAALiteNavPageCommonDownHandler',
            'befUpHandler' : 'VIDAALiteNavPageCommonUpHandler',
            'befEscHandler' : 'VIDAALiteNavPageCommonEscHandler',
            keyNum1Handler: "setDefaultDataFlag",
            keyNum6Handler: "setDefaultDataFlag",
            keyNum9Handler: "setDefaultDataFlag"
        },
        "AutoClose": false,
        "initData": "getVidaaLiteInputPageData",
        "onCreate": "",
        "onOpen": "VIDAALiteLauncherInputOnOpen",
        "onClose": "",
        "onFocus": "VIDAALiteLauncherInputOnFocus",
        "onBlur": "VIDAALiteLauncherOnBlur",
        "onDestroy": "VIDAALiveTVInputDestroy",
        "pageData": {}
    }
];
