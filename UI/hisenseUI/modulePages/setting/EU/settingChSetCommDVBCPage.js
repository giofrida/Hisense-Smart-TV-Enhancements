function getSettingChSetCommDVBCData(opt) {
    opt.CaE = [
        {
            "id":"settingChSetCommDVBCHeadTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingChSetCommDVBCItemTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id": "ChannelCommChannel",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommTitle", "disable": "ChannelCommTitle"}
        },
        {
            "id": "ChannelCommChannelItemSpan",
            "description": "",
            "CaEType": "span"
//            "classes": {"normal": "ChannelCommChannelItemSpan", "disable": "ChannelCommChannelItemSpan"}
        },
        {
            "id": "ChannelCommChannelItem",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommItemNormal", "focus": "ChannelCommItemFocus"},
            "nav": {
                "enterTo": "ChannelCommChannelListFrame",
                "downTo": "ChannelCommScanModeItem",
                "rightTo": "settingChSetCommDVBCRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBCPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBCToNextPage"
            }

        },
        {
            "id": "ChannelCommChannelListFrame",
            "description": "",
            "CaEType": "Container",
            "firstFocusId": "ChannelCommChannelListUl",
            "classes": {
                "normal": "ChannelCommChannelListFrameNormal",
                "focus": "ChannelCommChannelListFrameFocus",
                "selected": "ChannelCommChannelListFrameFocus"
            },
            "nav": {
                "enterTo": "",
                "downTo": "",
                "upTo": "ChannelCommChannelItem"
            }
            ,
            "CaE": [
                {
                    "id": "ChannelCommChannelListUl",
                    "description": "",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "settingChannelCommChannelListLiNormal",
                        "focus": "settingChannelCommChannelListLiFocus",
                        "selected": "settingChannelCommChannelListLiSelect",
                        "dataSelected": "settingChannelCommChannelListLiSelect"
                    },
                    "handler": {
                        "aftEnterHandler": "ChannelCommDVBCChannelOkHandler",
                        "aftDownHandler": "",
                        "aftUpHandler": ""
                    },
                    "oriCaE": [
                        {
                            "id": "ChannelCommChannelSecTypeItem",
                            "description": "",
                            "CaEType": "div",
                            enableHtml: true

                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": ["ChannelCommChannelSecTypeItem"],
                        "PageSize": 2
                    }
                }
            ]
        },
        {
            "id": "ChannelCommScanMode",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommTitle", "disable": "ChannelCommTitle"}
        },
        {
            "id": "ChannelCommScanModeItemSpan",
            "description": "",
            "CaEType": "span"
//            "classes": {"normal": "ChannelCommChannelItemSpan", "disable": "ChannelCommChannelItemSpan"}
        },
        {
            "id": "ChannelCommScanModeItem",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommItemNormal", "focus": "ChannelCommItemFocus"},
            "nav": {
                "enterTo": "ChannelCommScanModeListFrame",
                "downTo": "ChannelCommSeachModeItem",
                "upTo": "ChannelCommChannelItem",
                "rightTo":"settingChSetCommDVBCRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBCPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBCToNextPage"
            },
            "onFocusFun":function(){
                var width  = $("#ChannelCommScanModeItemSpan").width();
                if(width > 464){
                    var txt = $("#ChannelCommScanModeItemSpan").html();
                    $("#ChannelCommScanModeItemSpan").html('<marquee>'+txt+'</marquee>');
                }
            },
            "onBlurFun":function(){
                var marquee = $("#ChannelCommScanModeItemSpan"+" marquee");
                if(marquee.length > 0){
                    var txt = $("#ChannelCommScanModeItemSpan"+" marquee").html();
                    $("#ChannelCommScanModeItemSpan").html(txt);
                }
            }
        },
        {
            "id": "ChannelCommScanModeListFrame",
            "description": "",
            "CaEType": "Container",
            "firstFocusId": "ChannelCommScanModeListUl",
            "classes": {
                "normal": "ChannelCommChannelListFrameNormal",
                "focus": "ChannelCommChannelListFrameFocus",
                "selected": "ChannelCommChannelListFrameFocus"
            },
            "nav": {
                "enterTo": "",
                "downTo": "",
                "upTo": "ChannelCommScanModeItem"
            },
            "CaE": [
                {
                    "id": "ChannelCommScanModeListUl",
                    "description": "",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "settingChannelCommChannelListLiNormal",
                        "focus": "settingChannelCommChannelListLiFocus",
                        "selected": "settingChannelCommChannelListLiSelect",
                        "dataSelected": "settingChannelCommChannelListLiSelect",
                        "disable":"settingChannelCommChannelListLiDisable"
                    },
                    "handler": {
                        "aftEnterHandler": "ChannelCommDVBCScanModeOkHandler",
                        "aftDownHandler": "",
                        "aftUpHandler": ""
                    },
                    "oriCaE": [
                        {
                            "id": "ChannelCommScanModeSecTypeItem",
                            "description": "",
                            "CaEType": "div",
                            enableHtml: true

                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": ["ChannelCommScanModeSecTypeItem"],
                        "PageSize": 3
                    }
                }
            ]
        },
        {
            "id": "ChannelCommSeachMode",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommTitle", "disable": "ChannelCommTitle"}
        },
        {
            "id": "ChannelCommSeachModeItemSpan",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommChannelItemSpan", "disable": "ChannelCommChannelItemSpan"}
        },
        {
            "id": "ChannelCommSeachModeItem",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommItemNormal", "focus": "ChannelCommItemFocus","disable":"ChannelCommItemDisable"},
            "nav": {
                "enterTo": "ChannelCommSeachModeListFrame",
                "downTo": "ChannelCommNetIdItem",
                "upTo": "ChannelCommScanModeItem",
                "rightTo":"settingChSetCommDVBCRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBCPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBCToNextPage"
            }
        },
        {
            "id": "ChannelCommSeachModeListFrame",
            "description": "",
            "CaEType": "Container",
            "firstFocusId": "ChannelCommSeachModeListUl",
            "classes": {
                "normal": "ChannelCommChannelListFrameNormal",
                "focus": "ChannelCommChannelListFrameFocus",
                "selected": "ChannelCommChannelListFrameFocus"
            },
            "nav": {
                "enterTo": "",
                "downTo": "",
                "upTo": "ChannelCommSeachModeItem"
            },
            "CaE": [
                {
                    "id": "ChannelCommSeachModeListUl",
                    "description": "",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "settingChannelCommChannelListLiNormal",
                        "focus": "settingChannelCommChannelListLiFocus",
                        "selected": "settingChannelCommChannelListLiSelect",
                        "dataSelected": "settingChannelCommChannelListLiSelect",
                        "disable":"settingChannelCommChannelListLiDisable"
                    },
                    "handler": {
                        "aftEnterHandler": "ChannelCommDVBCSeachModeOkHandler",
                        "aftDownHandler": "",
                        "aftUpHandler": ""
                    },
                    "oriCaE": [
                        {
                            "id": "ChannelCommSeachModeSecTypeItem",
                            "description": "",
                            "CaEType": "div",
                            enableHtml: true

                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": ["ChannelCommSeachModeSecTypeItem"],
                        "PageSize": 3
                    }
                }
            ]
        },

        {
            "id": "ChannelCommNetIdTitle",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommTitle", "disable": "ChannelCommTitleDisable"}
        },
        {
            "id": "ChannelCommNetIdItem",
            "description": "",
            "CaEType": "Container",
            "classes": {"normal": "ChannelCommItemNormal", "focus": "ChannelCommItemFocus","disable":"ChannelCommItemDisable"},
            "nav": {
                "enterTo": "ChannelCommNetIdListFrame",
                "downTo": "ChannelCommNetworkFreItem",
                "upTo": "ChannelCommSeachModeItem",
                "rightTo":"settingChSetCommDVBCRightImg"
            },
            "CaE":[
                {
                    "id": "ChannelCommNetIdSpan",
                    "description": "",
                    "CaEType": "span",
                    "classes": {"normal": "ChannelCommChannelItemSpan", "disable": "ChannelCommChannelItemSpan"}
                }
            ],
            "handler":{
                "befLeftHandler":"settingChSetCommDVBCPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBCToNextPage"
            }

        },
        {
            "id": "ChannelCommNetIdListFrame",
            "description": "",
            "CaEType": "Container",
            "firstFocusId": "ChannelCommNetIdListUl",
            "classes": {
                "normal": "ChannelCommChannelListFrameNormal",
                "focus": "ChannelCommChannelListFrameFocus",
                "selected": "ChannelCommChannelListFrameFocus"
            },
            "nav": {
                "enterTo": "",
                "downTo": "",
                "upTo": "ChannelCommNetIdItem"
            },
            "CaE": [
                {
                    "id": "ChannelCommNetIdListUl",
                    "description": "",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "settingChannelCommChannelListLiNormal",
                        "focus": "settingChannelCommChannelListLiFocus",
                        "selected": "settingChannelCommChannelListLiSelect",
                        "dataSelected": "settingChannelCommChannelListLiSelect"
                    },
                    "handler": {
                        "aftEnterHandler": "ChannelCommDVBCNetIdOKHandler",
                        "aftDownHandler": "",
                        "aftUpHandler": ""
                    },
                    "oriCaE": [
                        {
                            "id": "ChannelCommNetIdSecTypeItem",
                            "description": "",
                            "CaEType": "div",
                            enableHtml: true

                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": ["ChannelCommNetIdSecTypeItem"],
                        "PageSize": 2
                    }
                }
            ]
        },
        {
            "id": "ChannelCommNetworkFre",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommTitle", "disable": "ChannelCommTitleDisable"}
        },
        {
            "id": "ChannelCommNetworkFreItem",
            "description": "",
            "CaEType": "Container",
            "firstFocusId": "ChannelCommNetworkFreInput",
            "classes": {
                "normal": "ChannelCommItemNormal",
                "focus": "ChannelCommItemFocus",
                "selected": "ChannelCommItemFocus",
                "disable":"ChannelCommItemDisable"
            },
            "nav": {
                "rightTo": "settingChSetCommDVBCRightImg", "downTo": "ChannelCommLCNflipSwitch","upTo":"ChannelCommNetIdItem"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBCPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBCToNextPage"
            },
            "CaE": [
                {
                    "id": "ChannelCommNetworkFreInput",
                    "description": "",
                    "CaEType": "input",
                    "disable": false,
                    "classes": {
                        "normal": "ChannelCommUserBandFreInput", "focus": "ChannelCommUserBandFreInput"
                    },
                    "nav": {
//                        "leftTo": "", "downTo": "ChannelCommLCNflipSwitch","upTo":"ChannelCommNetIdItem"
                    },
                    "handler": {
                        "aftEnterHandler":"invokeSKB",
                        'befUpHandler': "settingChSetCommDVBCSetNetworkFre",
                        'befDownHandler':"settingChSetCommDVBCSetNetworkFre"
                    },
                    "onChange": "",
                    "inputAttr": "number",
                    "maxlength": "8"

                }
            ]
        },
        {
            "id": "ChannelCommLCN",
            "description": "",
            "CaEType": "div",
            "classes": {"normal": "ChannelCommLCN ", disable: ""},
            enableHtml: true
        },
        {
            "id": "ChannelCommLCNflipSwitch",
            "description": "",
            "onFocusFun": "",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"rightTo": "settingChSetCommDVBCRightImg", "upTo": "ChannelCommNetworkFreItem"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",
            "FlipSwitchConfig": {
                switchTypeId: "switchType",
                switchTextId: "switchText"
            },
            "handler": {
                'aftEnterHandler': 'ChannelCommDVBCLCNflipSwitchOKHandler',
                "befLeftHandler":"settingChSetCommDVBCPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBCToNextPage"

            }
        },
        {
            "id": "settingChSetCommDVBCLeftImg",
            "description": "",
            "CaEType": "img",
            "classes": {"normal": "settingChSetCommDVBCLeftImg", "disable": "settingChSetCommDVBCLeftImg"}
        },
        {
            "id": "settingChSetCommDVBCRightImg",
            "description": "",
            "CaEType": "img",
            "nav":{
                "leftTo":"ChannelCommChannelItem"
            },
            "classes": {
                "normal": "settingChSetCommDVBCRightImg",
                "focus":"settingChSetCommDVBCRightImg",
                "disable": "settingChSetCommDVBCRightImg"
            },
            "handler":{
                "aftEnterHandler":"settingChSetCommDVBCToNextPage",
                "befRightHandler":"settingChSetCommDVBCToNextPage"
            },
            "onFocusFun":function(){
                $("#"+this.id).attr("src","img/RightArrowFocus.png");
            },
            "onBlurFun":function(opData){
                $("#"+this.id).attr("src","img/channel_right_arrow.png");
            }
        },
        {
            "id": "settingChSetCommDVBCRightSpan",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "settingChSetCommDVBCRightSpan", "disable": "settingChSetCommDVBCRightSpan"}
        }
    ]
    settingInitChSetCommDVBCPageData();
    return settingChSetCommDVBCPageData;
}
function settingInitChSetCommDVBCPageData(){
    var opData = settingChSetCommDVBCPageData.operateData;
    if(!tv){
        opData.LCNSwitchEnable = 1;
        opData.LCNSwitch = 0;
        opData.currScramModeIdx = 0;
        opData.currScanModeIdx = 0;
        opData.currSearchModeIdx = 0;
        opData.searchModeSupport=[0,1,2];
        for(var i=0; i < opData.allSearchModeMapList.length;i++){
            if($.inArray(opData.allSearchModeMapList[i].map,opData.searchModeSupport) != -1){
                opData.searchModeMapList.push(opData.allSearchModeMapList[i]);
            }
        }
    }else{
        opData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
        if(opData.LCNSwitchEnable == 1){
            opData.LCNSwitch = model.channelSearch.getLcn();
        }

        //加密方式
        var currScramMode = model.channelSearch.getScramble();
        for(var i = 0; i < opData.scramModeMapList.length;i++){
            if(currScramMode == opData.scramModeMapList[i].map){
                opData.currScramModeIdx = i;
                break;
            }
        }
        if(i == opData.scramModeMapList.length){
            debugPrint( "settingInitChSetCommPageData:currScramMode="+currScramMode,DebugLevel.ERROR);
            model.channelSearch.setScramble(opData.scramModeMapList[0].map);
            opData.currScramModeIdx = 0;
        }
        //搜台方式
        var currScanMode = model.channelSearch.getScanMode();
        for(i = 0; i < opData.scanModeMapList.length;i++){
            if(currScanMode == opData.scanModeMapList[i].map){
                opData.currScanModeIdx = i;
                break;
            }
        }
        if(i == opData.scanModeMapList.length){
            model.channelSearch.setScanMode(opData.scanModeMapList[0].map);
            opData.currScanModeIdx = 0;
        }

        //搜索方式
        opData.searchModeSupport = model.channelSearch.getSearchModeSupport();
        if(opData.searchModeSupport.length == 0){
            debugE("settingInitChSetCommDVBCPageData:search mode support is error!!");
            opData.searchModeSupport=[0];
            model.channelSearch.setSearchMode(0);
        }

        opData.searchModeMapList = [];
        for(var i=0; i < opData.allSearchModeMapList.length;i++){
            if($.inArray(opData.allSearchModeMapList[i].map,opData.searchModeSupport) != -1){
                opData.searchModeMapList.push(opData.allSearchModeMapList[i]);
            }
        }
        var currSearMode = model.channelSearch.getSearchMode();
        if($.inArray(currSearMode,opData.searchModeSupport) == -1){
            debugE("settingInitChSetCommDVBCPageData:currSearMode not in support list");
            model.channelSearch.setSearchMode(opData.searchModeSupport[0]);
            opData.currSearchModeIdx = 0;
        }
        for(var i=0; i < opData.searchModeMapList.length;i++){
            if(currSearMode == opData.searchModeMapList[i].map){
                opData.currSearchModeIdx = i;
                break;
            }
        }
        if(i == opData.searchModeMapList.length){
            opData.currSearchModeIdx = 0;
            model.channelSearch.setSearchMode(data.operateData.searchModeMapList[0].map);
        }

        //network
        opData.currNetworkFre = model.channelSearch.getNetworkFrequency();
        opData.networkAutoFlag = model.channelSearch.getNetworkAuto();//use
        opData.networkId = model.channelSearch.getNetworkId();
    }

}

var settingChSetCommDVBCPageData = {
    settingChSetCommDVBCHeadTitle:{"Data":"Auto Channel Scan"},
    settingChSetCommDVBCItemTitle:{"Data":"Mode setup"},
    ChannelCommChannel: {Data: "Channel"},
    ChannelCommChannelItemSpan: {Data: "All Channel"},
    ChannelCommScanMode: {Data: "Scan Mode"},
    ChannelCommScanModeItemSpan: {Data: ""},

    ChannelCommSeachMode: {Data: "Search Mode"},
    ChannelCommSeachModeItemSpan: {Data: "Full Scan"},
    ChannelCommNetIdTitle:{"Data":"Network ID"},
    ChannelCommNetIdItem:{
        "Data":{
            ChannelCommNetIdSpan:{Data:""}
        }
    },
    ChannelCommNetworkFre: {Data: "Frequency"},
    "ChannelCommChannelListFrame": {
        "Data": {
            "ChannelCommChannelListUl": {
                "Data": [
                    {
                        "ChannelCommChannelSecTypeItem": {Data: "All Channels"}
                    },
                    {
                        "ChannelCommChannelSecTypeItem": {Data: "Free Channels"}
                    }
                ],
                "SelectedIndex": 1,
                "DataSelectedIndex": 1

            }
        }
    },
    "ChannelCommScanModeListFrame": {
        "Data": {
            "ChannelCommScanModeListUl": {
                "Data": [
                    {
                        "ChannelCommScanModeSecTypeItem": {Data: "ATV"}
                    },
                    {
                        "ChannelCommScanModeSecTypeItem": {Data: "DTV"}
                    },
                    {
                        "ChannelCommScanModeSecTypeItem": {Data: "ATV+DTV"}
                    }
                ],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0

            }
        }
    },
    "ChannelCommSeachModeListFrame": {
        "Data": {
            "ChannelCommSeachModeListUl": {
                "Data": [
                    {
                        "ChannelCommSeachModeSecTypeItem": {Data: "Frequency Scan"}
                    },
                    {
                        "ChannelCommSeachModeSecTypeItem": {Data: "Quick Scan"}
                    },
                    {
                        "ChannelCommSeachModeSecTypeItem": {Data: "Advance Scan"}
                    }
                ],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0

            }
        }
    },
    "ChannelCommNetIdListFrame": {
        "Data": {
            "ChannelCommNetIdListUl": {
                "Data": [
                    {
                        "ChannelCommNetIdSecTypeItem": {Data: "Auto"}
                    },
                    {
                        "ChannelCommNetIdSecTypeItem": {Data: "Custom"}
                    }

                ],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0
            }
        }
    },
    "ChannelCommNetworkFreItem": {
        "Data": {
            "ChannelCommNetworkFreInput": {"Data": ""}
        }
    },
    "ChannelCommLCNflipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    settingChSetCommDVBCLeftImg:{Data:"img/channel_left_arrow.png"},
    settingChSetCommDVBCRightImg:{Data:"img/channel_right_arrow.png"},
    settingChSetCommDVBCRightSpan:{Data:""},
    operateData: {
        "currSatelliteMode":0,//0:single,1:tune burst,2:diseqc,3:unicable
        "LCNSwitchEnable":0,
        "LCNSwitch":0,
        "currScramModeIdx":0,
        "scramModeMapList":[
            {
                "name":"All Channels",
                "map":1
            },
            {
                "name":"Free Channels",
                "map":0
            }
        ],
        "currScanModeIdx":0,
        "scanModeMapList":[
            {
                "map":0,
                "name":"ATV"
            },
            {
                "map":1,
                "name":"DTV"
            },
            {
                "map":2,
                "name":"ATV+DTV"
            }
        ],
        "currSearchModeIdx":0,
        "allSearchModeMapList":[
            {
                "map":0,
                "name":"Frequency Scan"
            },
            {
                "map":1,
                "name":"Quick Scan"
            },
            {
                "map":2,
                "name":"Advance Scan"
            }
        ],
        "searchModeMapList":[
        ],
        "searchModeSupport":[0,1],
        "currNetworkFre":0,
        "networkAutoFlag":1,
        "networkId":"1400"
    },
    "langData":{
        "Auto Channel Scan":["Auto Channel Scan"],
        "Scan Mode":[],
        "Mode setup":[],
        "ATV":[],
        "DTV":[],
        "ATV+DTV":[],
        "Channel":[],
        "All Channels":[],
        "Free Channels":[],
        "Search Mode":[],
        "Frequency Scan":[],
        "Quick Scan":[],
        "Advance Scan":[],
        "LCN":[],
        "Network ID":[],
        "Auto":[],
        "Frequency":[]
    },

    rewrite: "settingRewriteChSetCommDVBCPage"


}
function settingRewriteChSetCommDVBCPage(data) {
    var opData = data.operateData;

    data.ChannelCommLCNflipSwitch.Data.switchType = (opData.LCNSwitch == 1)?true:false;
    data.ChannelCommLCNflipSwitch.disable = (opData.LCNSwitchEnable == 1)?false:true;

    data.ChannelCommChannelItemSpan.Data = opData.scramModeMapList[opData.currScramModeIdx].name;
    data.ChannelCommChannelListFrame.Data.ChannelCommChannelListUl.SelectedIndex = opData.currScramModeIdx;

    data.ChannelCommScanModeItemSpan.Data = opData.scanModeMapList[opData.currScanModeIdx].name;
    data.ChannelCommScanModeListFrame.Data.ChannelCommScanModeListUl.SelectedIndex = opData.currScanModeIdx;

    var searchModeListUl = data.ChannelCommSeachModeListFrame.Data.ChannelCommSeachModeListUl;
    searchModeListUl.Data = [];
    for(var i = 0; i < opData.searchModeMapList.length;i++){
        var itemData = {
                "ChannelCommSeachModeSecTypeItem": {Data:opData.searchModeMapList[i].name}
            }
        searchModeListUl.Data.push(itemData);
    }

    data.ChannelCommSeachModeItemSpan.Data = opData.searchModeMapList[opData.currSearchModeIdx].name;
    searchModeListUl.SelectedIndex = opData.currSearchModeIdx;

    var netIdListUl = data.ChannelCommNetIdListFrame.Data.ChannelCommNetIdListUl;
    netIdListUl.Data[0].ChannelCommNetIdSecTypeItem.Data = "Auto";
    netIdListUl.Data[1].ChannelCommNetIdSecTypeItem.Data = opData.networkId;
    netIdListUl.SelectedIndex = (opData.networkAutoFlag == 1) ? 0:1;
    data.ChannelCommNetIdItem.Data.ChannelCommNetIdSpan.Data = netIdListUl.Data[netIdListUl.SelectedIndex].ChannelCommNetIdSecTypeItem.Data;
    data.ChannelCommNetworkFreItem.Data.ChannelCommNetworkFreInput.Data = opData.currNetworkFre;

    if(opData.searchModeMapList[opData.currSearchModeIdx].map == 0){
        data.ChannelCommNetIdItem.disable = true;
        data.ChannelCommNetIdTitle.disable = true;

        data.ChannelCommNetworkFreItem.disable = true;
        data.ChannelCommNetworkFre.disable = true;
    }else if(opData.searchModeMapList[opData.currSearchModeIdx].map == 1){
        data.ChannelCommNetIdItem.disable = false;
        data.ChannelCommNetIdTitle.disable = false;
        data.ChannelCommNetworkFreItem.disable = true;
        data.ChannelCommNetworkFre.disable = true;
    }else{
        data.ChannelCommNetIdItem.disable = false;
        data.ChannelCommNetIdTitle.disable = false;
        data.ChannelCommNetworkFreItem.disable = false;
        data.ChannelCommNetworkFre.disable = false;
    }
    if($.inArray(2,opData.searchModeSupport) != -1){//support Advance

    }else if($.inArray(1,opData.searchModeSupport) != -1){
        data.ChannelCommNetworkFreItem.disable = true;
    }else{
        data.ChannelCommNetIdItem.disable = true;
        data.ChannelCommNetworkFreItem.disable = true;
    }
}
function ChannelCommDVBCChannelOkHandler() {
    var scramModeUl = settingChSetCommDVBCPageData.ChannelCommChannelListFrame.Data.ChannelCommChannelListUl,
        opData = settingChSetCommDVBCPageData.operateData;
    opData.currScramModeIdx = this.SelectedIndex;
    this.page.hiFocus("ChannelCommChannelItem");
    if(tv){
        model.channelSearch.setScramble(opData.scramModeMapList[opData.currScramModeIdx].map);
    }
    this.page.rewriteDataOnly();

}
function ChannelCommDVBCScanModeOkHandler(){
    var data = settingChSetCommDVBCPageData.ChannelCommScanModeListFrame.Data.ChannelCommScanModeListUl,
        opData = settingChSetCommDVBCPageData.operateData;

    opData.currScanModeIdx = this.SelectedIndex;
    if(tv){
        model.channelSearch.setScanMode(opData.scanModeMapList[opData.currScanModeIdx].map);
    }
    this.page.rewriteDataOnly();
    this.page.hiFocus("ChannelCommScanModeItem");
}

function ChannelCommDVBCSeachModeOkHandler(){
    var data = settingChSetCommDVBCPageData.ChannelCommSeachModeListFrame.Data.ChannelCommSeachModeListUl,
        opData = settingChSetCommDVBCPageData.operateData;

    opData.currSearchModeIdx = this.SelectedIndex;
    this.page.hiFocus("ChannelCommSeachModeItem");
    if(tv){
        model.channelSearch.setSearchMode(opData.searchModeMapList[opData.currSearchModeIdx].map);

    }
    this.page.rewriteDataOnly();
}
function ChannelCommDVBCLCNflipSwitchOKHandler(operateData){
    var page = this.page;
    operateData.LCNSwitch = (operateData.LCNSwitch == 1) ? 0:1;
    if(tv){
        model.channelSearch.setLcn(operateData.LCNSwitch);
    }
    page.rewriteDataOnly();
}
function ChannelCommDVBCNetIdOKHandler(opData){
    if(this.SelectedIndex == 0){
        opData.networkAutoFlag = 1;
        if(tv){
            model.channelSearch.setNetworkAuto(opData.networkAutoFlag);
        }
        this.page.hiFocus("ChannelCommNetIdItem");
        this.page.rewriteDataOnly();
    }else{
        //页面进行跳转到networkID输入界面
        hiWebOsFrame.createPage('settingChSetNetIdInputDialogId',null, this.page, null,function(a){
            hiWebOsFrame.ChSetNetIdInputDialog = a;
            a.open();
            a.hiFocus();
        });
    }
}
function setChSetCommDVBCNetworkId(networkId){
    try{
        var opData = settingChSetCommDVBCPageData.operateData;
        opData.networkId = networkId;
        opData.networkAutoFlag = 0;
        if(tv == true){
            model.channelSearch.setNetworkAuto(opData.networkAutoFlag);
            model.channelSearch.setNetworkId(parseInt(networkId));
        }
    }catch (ex){
        debugPrint("setChSetCommDVBCNetworkId:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetCommDVBCSetNetworkFre(){
    var opData = settingChSetCommDVBCPageData.operateData;
    var inputValue = $("#ChannelCommNetworkFreInput").val();
    if(inputValue == ""){
        $("#ChannelCommNetworkFreInput").val(opData.currNetworkFre);
    }else if(parseInt(inputValue) != opData.currNetworkFre){
        opData.currNetworkFre = parseInt(inputValue);
        if(tv){
            model.channelSearch.setNetworkFrequency(opData.currNetworkFre)
        }
    }
    this.page.rewriteDataOnly();
}
function settingChSetCommDVBCToNextPage(){
    hiWebOsFrame.createPage("settingChSetEUAutoScanPageId", null, null, null, function (a) {
        hiWebOsFrame.ChSetChannelScanPage = a;
        settingChSetCommDVBCClosePrePage();
        a.open();
        a.hiFocus();
    });
}
function settingChSetCommDVBCClosePrePage(){
    if(!!hiWebOsFrame.ChSetCommDVBCPage){
        hiWebOsFrame.ChSetCommDVBCPage.destroy();
    }
    if(!!hiWebOsFrame.ChSetDVBOperatorPage){
        hiWebOsFrame.ChSetDVBOperatorPage.destroy();
    }
    if(!!hiWebOsFrame.ChSetTunerModePage){
        hiWebOsFrame.ChSetTunerModePage.destroy();
    }
}
function settingChSetCommDVBCPageEscHandle(){
    hiWebOsFrame.ChSetCommDVBCPage.close();
    hiWebOsFrame.ChSetCommDVBCPage.origin.open();
    hiWebOsFrame.ChSetCommDVBCPage.origin.hiFocus();
    hiWebOsFrame.ChSetCommDVBCPage.destroy();
}
function settingChSetCommDVBCPageOnOpen(){
    var opData = settingChSetCommDVBCPageData.operateData;
    if($.inArray(2,opData.searchModeSupport) != -1){//support Advance

    }else if($.inArray(1,opData.searchModeSupport) != -1){
        $("#settingChSetCommNetworkFreCon").css("display","none");
    }else{
        $("#settingChSetCommNetIdCon").css("display","none");
        $("#settingChSetCommNetworkFreCon").css("display","none");
    }
    if(opData.LCNSwitchEnable == 0){
        $("#settingChSetCommLCNCon").css("display","none");
    }else{
        $("#settingChSetCommLCNCon").css("display","block");
    }
}
function settingChSetCommDVBCPageOnDestroy(){
    hiWebOsFrame.ChSetCommDVBCPage = null;
}
