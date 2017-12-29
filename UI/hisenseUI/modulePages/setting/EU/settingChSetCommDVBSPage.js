function getSettingChSetCommDVBSData(opt) {
    opt.CaE = [
        {
            "id":"settingChSetCommDVBSHeadTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingChSetCommDVBSItemTitle",
            "description":"",
            "CaEType":"div"
        },
        {

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
            "CaEType": "span",
            "classes": {"normal": "ChannelCommChannelItemSpan", "disable": "ChannelCommChannelItemSpan"}
        },
        {
            "id": "ChannelCommChannelItem",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommItemNormal", "focus": "ChannelCommItemFocus"},
            "nav": {
                "enterTo": "ChannelCommChannelListFrame",
                "downTo": "ChannelCommSeachModeItem",
                "rightTo": "settingChSetCommDVBSRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBSPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBSToNextPage"
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
                        "aftEnterHandler": "ChannelDVBSCommChannelOkHandler",
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
            "classes": {"normal": "ChannelCommItemNormal", "focus": "ChannelCommItemFocus"},
            "nav": {
                "enterTo": "ChannelCommSeachModeListFrame",
                "downTo": "ChannelCommLCNflipSwitch",
                "upTo": "ChannelCommChannelItem",
                "rightTo":"settingChSetCommDVBSRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBSPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBSToNextPage"
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
                        "dataSelected": "settingChannelCommChannelListLiSelect"
                    },
                    "handler": {
                        "aftEnterHandler": "ChannelCommDVBSSeachModeOkHandler",
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
            "nav": {
                "downTo": "ChannelCommUserBandItem",
                "upTo": "ChannelCommSeachModeItem",
                "rightTo":"settingChSetCommDVBSRightImg"
            },
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",
            "FlipSwitchConfig": {
                switchTypeId: "switchType",
                switchTextId: "switchText"
            },
            "handler": {
                'aftEnterHandler': 'ChannelCommDVBSLCNflipSwitchOKHandler',
                "befLeftHandler":"settingChSetCommDVBSPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBSToNextPage"
            }
        },
        {
            "id": "ChannelCommUserBand",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommTitle", "disable": "ChannelCommTitle"}
        },
        {
            "id": "ChannelCommUserBandItem",
            "description": "",
            "CaEType": "Container",
            "classes": {"normal": "ChannelCommItemNormal", "focus": "ChannelCommItemFocus"},
            "nav": {
                "enterTo": "ChannelCommUserBandListFrame",
                "downTo": "ChannelCommUserBandFreItem",
                "upTo": "ChannelCommLCNflipSwitch",
                "rightTo":"settingChSetCommDVBSRightImg"
            },
            "CaE":[
                {
                    "id": "ChannelCommUserBandItemSpan",
                    "description": "",
                    "CaEType": "span",
                    "classes": {"normal": "ChannelCommChannelItemSpan", "disable": "ChannelCommChannelItemSpan"}
                }
            ],
            "handler":{
                "befLeftHandler":"settingChSetCommDVBSPageEscHandle",
//                "befRightHandler":"settingChSetCommDVBSToNextPage",
                "aftEnterHandler":"settingChSetCommDVBSOpenScrollBar"
            }

        },
        {
            "id": "ChannelCommUserBandListFrame",
            "description": "",
            "CaEType": "Container",
            "firstFocusId": "ChannelCommUserBandListUl",
            "classes": {
                "normal": "ChannelCommChannelListFrameNormal",
                "focus": "ChannelCommChannelListFrameFocus",
                "selected": "ChannelCommChannelListFrameFocus"
            },
            "nav": {
                "enterTo": "",
                "downTo": "",
                "upTo": "ChannelCommUserBandItem"
            },
            "CaE": [
                {
                    "id": "ChannelCommUserBandListUl",
                    "description": "",
                    "CaEType": "Ul",
                    "classes": {
                        "normal": "settingChannelCommChannelListLiNormal",
                        "focus": "settingChannelCommChannelListLiFocus",
                        "selected": "settingChannelCommChannelListLiSelect",
                        "dataSelected": "settingChannelCommChannelListLiSelect"
                    },
                    "handler": {
                        "aftEnterHandler": "ChannelCommDVBSUserBandOKHandler",
                        "aftDownHandler": "ChannelCommDVBSUserBandMoveHandler",
                        "aftUpHandler": "ChannelCommDVBSUserBandMoveHandler"
                    },
                    "oriCaE": [
                        {
                            "id": "ChannelCommUserBandSecTypeItem",
                            "description": "",
                            "CaEType": "div",
                            enableHtml: true

                        }
                    ],
                    "UlConfig": {
                        "UlDataItem": ["ChannelCommUserBandSecTypeItem"],
                        "PageSize": 3
                    }
                }
            ]
        },
        {
            "id": "ChannelCommBandFre",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "ChannelCommTitle", "disable": "ChannelCommTitle"}
        },
        {
            "id": "ChannelCommUserBandFreItem",
            "description": "",
            "CaEType": "Container",
            "firstFocusId": "ChannelCommUserBandFreInput",
            "classes": {
                "normal": "ChannelCommItemNormal",
                "focus": "ChannelCommItemInputFocus",
                "selected": "ChannelCommItemInputFocus"
            },
            "nav": {
                "upTo": "ChannelCommUserBandItem",
                "rightTo":"settingChSetCommDVBSRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBSPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBSToNextPage"
            },
            "CaE": [
                {
                    "id": "ChannelCommUserBandFreInput",
                    "description": "",
                    "CaEType": "input",
                    "disable": false,
                    "classes": {
                        "normal": "ChannelCommUserBandFreInput", "focus": "ChannelCommUserBandFreInput"
                    },
                    "nav": {"leftTo": "", "downTo": ""},
                    "handler": {
                        "aftEnterHandler":"invokeSKB",
                        'befUpHandler': "settingChSetCommDVBSSetBandFre"
                    },
                    "onChange": "frequencyInputAddSuffix",
                    "inputAttr": "number",
                    "maxlength": "8"

                }
            ]
        },
        {
            "id": "settingChSetCommDVBSLeftImg",
            "description": "",
            "CaEType": "img",
            "classes": {"normal": "settingChSetCommDVBCLeftImg", "disable": "settingChSetCommDVBCLeftImg"}
        },
        {
            "id": "settingChSetCommDVBSRightImg",
            "description": "",
            "CaEType": "img",
            "nav":{
                "leftTo":"ChannelCommChannelItem"
            },
            "classes": {
                "normal": "settingChSetCommDVBCRightImg",
                "focus":"settingChSetCommDVBCRightImg",
                "disable": "settingChSetCommDVBCRightImg"},
            "handler":{
                "aftEnterHandler":"settingChSetCommDVBSToNextPage",
                "befRightHandler":"settingChSetCommDVBSToNextPage"
            },
            "onFocusFun":function(){
                $("#"+this.id).attr("src","img/RightArrowFocus.png");
            },
            "onBlurFun":function(opData){
                $("#"+this.id).attr("src","img/channel_right_arrow.png");
            }
        },
        {
            "id": "settingChSetCommDVBSRightSpan",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "settingChSetCommDVBCRightSpan", "disable": "settingChSetCommDVBCRightSpan"}
        }
    ]
    settingInitChSetCommDVBSPageData();
    return settingChSetCommDVBSPageData;
}
function settingInitChSetCommDVBSPageData(){
    var opData = settingChSetCommDVBSPageData.operateData;
    if(!tv){
        opData.currSatelliteMode = 3;
        opData.LCNSwitchEnable = 1;
        opData.LCNSwitch = 0;
        opData.currScramModeIdx = 0;
        opData.currSearchModeIdx = 0;
        opData.currUseBandIdx = 0;
        opData.bandList = [1,2,3,4,5,6,7,8];
        opData.bandFreList=[100,100,200,200,300,300,400,400];
        opData.currBandFreq = 300;
        opData.searchModeMapList = opData.allSearchModeMapList;
    }else{
        opData.currSatelliteMode = model.satellite.getInstallation();

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

        //搜索方式
        var currOperatorId = getSettingChSetCurrOperatorId();
        if(currOperatorId != 0){//运营商搜台,支持network
            opData.searchModeMapList = [
                {
                    "map":1,
                    "name":"Network Scan"
                }
            ]
        }else{
            opData.searchModeMapList = opData.allSearchModeMapList;
        }
        var currSearchMode = model.satellite.getSearchMode();
        for(i = 0; i < opData.searchModeMapList.length;i++){
            if(currSearchMode == opData.searchModeMapList[i].map){
                opData.currSearchModeIdx = i;
                break;
            }
        }
        if(i == opData.searchModeMapList.length){
            model.satellite.setSearchMode(data.operateData.searchModeMapList[0].map);
            opData.currSearchModeIdx = 0;
        }

        //userband
        if(opData.currSatelliteMode == 3){
            opData.bandList = model.satellite.getUnicableBandList();
            var currUseBand = model.satellite.getUnicableBand();
            for(var i = 0; i < opData.bandList.length; i++){
                if(currUseBand == opData.bandList[i]){
                    opData.currUseBandIdx = i;
                    break;
                }
            }
            if(currUseBand == opData.bandList.length){
                debugPrint("settingInitChSetCommDVBSPageData:currUseBand="+currUseBand,DebugLevel.ERROR);
                model.satellite.setUnicableBand(opData.bandList[0]);
                opData.currUseBandIdx = 0;
            }
            opData.currBandFreq = model.satellite.getUnicableBandFrequency();
            opData.bandFreList = model.satellite.getUnicableBandFrequencyList();
        }

    }
    //

}

var settingChSetCommDVBSPageData = {
    settingChSetCommDVBSHeadTitle:{"Data":"Auto Channel Scan"},
    settingChSetCommDVBSItemTitle:{"Data":"Mode setup"},
    ChannelCommChannel: {Data: "Channel"},
    ChannelCommChannelItemSpan: {Data: "All Channel"},
    ChannelCommSeachMode: {Data: "Search Mode"},
    ChannelCommSeachModeItemSpan: {Data: "Full Scan"},
    ChannelCommUserBandItem:{
        Data:
            {
                ChannelCommUserBandItemSpan: {Data: "1"}
            }
    },
    ChannelCommUserBand: {Data: "User Band"},
    ChannelCommBandFre: {Data: "Frequency Band"},
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
    "ChannelCommSeachModeListFrame": {
        "Data": {
            "ChannelCommSeachModeListUl": {
                "Data": [
                    {
                        "ChannelCommSeachModeSecTypeItem": {Data: "Frequency Scan"}
                    },
                    {
                        "ChannelCommSeachModeSecTypeItem": {Data: "Network Scan"}
                    }
                ],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0

            }
        }
    },
    "ChannelCommUserBandListFrame": {
        "Data": {
            "ChannelCommUserBandListUl": {
                "Data": [
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "1"}
                    },
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "2"}
                    },
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "3"}
                    },
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "4"}
                    },
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "5"}
                    },
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "6"}
                    },
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "7"}
                    },
                    {
                        "ChannelCommUserBandSecTypeItem": {Data: "8"}
                    }
                ],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0

            }
        }
    },
    "ChannelCommUserBandFreItem": {
        "Data": {
            "ChannelCommUserBandFreInput": {"Data": ""}
        }
    },
    "ChannelCommLCNflipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    settingChSetCommDVBSLeftImg:{Data:"img/channel_left_arrow.png"},
    settingChSetCommDVBSRightImg:{Data:"img/channel_right_arrow.png"},
    settingChSetCommDVBSRightSpan:{Data:""},
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
        "currSearchModeIdx":0,
        "allSearchModeMapList":[
            {
                "map":0,
                "name":"Frequency Scan"
            },
            {
                "map":1,
                "name":"Network Scan"
            }
        ],
        "searchModeMapList":[],
        "currUseBandIdx":0,
        "bandList":[],
        "currBandFreq":0,
        "bandFreList":[]
    },
    "langData":{
        "Auto Channel Scan":["Auto Channel Scan"],
        "Scan Mode":[],
        "Mode setup":[],
        "Channel":[],
        "All Channels":[],
        "Free Channels":[],
        "Search Mode":[],
        "Frequency Scan":[],
        "Network Scan":[],
        "LCN":[],
        "User Band":[],
        "Frequency Band":[]
    },
    rewrite: "settingRewriteChSetCommDVBSPage"


}
function settingRewriteChSetCommDVBSPage(data) {
    var opData = data.operateData;

    data.ChannelCommUserBandItem.disable = (opData.currSatelliteMode == 3)?false:true;
    data.ChannelCommUserBandFreItem.disable = (opData.currSatelliteMode == 3)?false:true;

    data.ChannelCommLCNflipSwitch.Data.switchType = (opData.LCNSwitch == 1)?true:false;
    data.ChannelCommLCNflipSwitch.disable = (opData.LCNSwitchEnable == 1)?false:true;

    data.ChannelCommChannelItemSpan.Data = opData.scramModeMapList[opData.currScramModeIdx].name;
    data.ChannelCommChannelListFrame.Data.ChannelCommChannelListUl.SelectedIndex = opData.currScramModeIdx;

    var searchModeUl = data.ChannelCommSeachModeListFrame.Data.ChannelCommSeachModeListUl;
    searchModeUl.Data = [];
    for(var i = 0; i < opData.searchModeMapList.length;i++){
        var itemData =  {
                "ChannelCommSeachModeSecTypeItem": {Data: opData.searchModeMapList[i].name}
            };
        searchModeUl.Data.push(itemData);
    }
    data.ChannelCommSeachModeItemSpan.Data = opData.searchModeMapList[opData.currSearchModeIdx].name;
    searchModeUl.SelectedIndex = opData.currSearchModeIdx;

    if(opData.currSatelliteMode == 3){
        var bandListUl = data.ChannelCommUserBandListFrame.Data.ChannelCommUserBandListUl;
        if(bandListUl.Data.length > opData.bandList.length){
            bandListUl.Data.splice(opData.bandList.length);
        }else if(bandListUl.Data.length < opData.bandList.length){
            while(bandListUl.Data.length < opData.bandList.length){
                var itemData = {
                    "ChannelCommUserBandSecTypeItem":{"Data":""}
                }
                bandListUl.Data.push(itemData);
            }
        }
        for(var i = 0; i < opData.bandList.length; i++){
            var currBandInfo = parseInt(opData.bandList[i])+1;
            var htmlData = "Band"+currBandInfo;
            bandListUl.Data[i].ChannelCommUserBandSecTypeItem.Data = htmlData;
        }
        data.ChannelCommUserBandItem.Data.ChannelCommUserBandItemSpan.Data = bandListUl.Data[opData.currUseBandIdx].ChannelCommUserBandSecTypeItem.Data
        //data.ChannelCommUserBandListFrame.Data.ChannelCommUserBandListUl.SelectedIndex = opData.currUseBandIdx;

        data.ChannelCommUserBandFreItem.Data.ChannelCommUserBandFreInput.Data = opData.currBandFreq;
    }
}

function ChannelDVBSCommChannelOkHandler() {
    var scramModeUl = settingChSetCommDVBSPageData.ChannelCommChannelListFrame.Data.ChannelCommChannelListUl,
        opData = settingChSetCommDVBSPageData.operateData;
    opData.currScramModeIdx = this.SelectedIndex;
    this.page.hiFocus("ChannelCommChannelItem");
    if(tv){
        model.channelSearch.setScramble(opData.scramModeMapList[opData.currScramModeIdx].map);
    }
    this.page.rewriteDataOnly();

}
function ChannelCommDVBSSeachModeOkHandler(){
    var data = settingChSetCommDVBSPageData.ChannelCommSeachModeListFrame.Data.ChannelCommSeachModeListUl,
        opData = settingChSetCommDVBSPageData.operateData;

    opData.currSearchModeIdx = this.SelectedIndex;
    this.page.hiFocus("ChannelCommSeachModeItem");
    if(tv){
        model.satellite.setSearchMode(opData.searchModeMapList[opData.currSearchModeIdx].map);
    }
    this.page.rewriteDataOnly();
}
function ChannelCommDVBSUserBandOKHandler(){
    var userBandUl = settingChSetCommDVBSPageData.ChannelCommUserBandListFrame.Data.ChannelCommUserBandListUl,
        opData = settingChSetCommDVBSPageData.operateData;
    opData.currUseBandIdx = this.SelectedIndex;
    opData.currBandFreq = opData.bandFreList[opData.currUseBandIdx];
    DBG_INFO("ChannelCommDVBSUserBandOKHandler:"+opData.currUseBandIdx+","+opData.bandFreList);
    if(tv){
        model.satellite.setUnicableBand(opData.bandList[this.SelectedIndex]);
        model.satellite.setUnicableBandFrequency(parseInt(opData.currBandFreq));
    }
    this.page.hiFocus("ChannelCommUserBandItem");
    this.page.rewriteDataOnly();
}
function settingChSetCommDVBSSetBandFre(){
    var opData = settingChSetCommDVBSPageData.operateData;
    var inputValue = $("#ChannelCommUserBandFreInput").val();
    if(inputValue == ""){
        $("#ChannelCommUserBandFreInput").val(opData.currBandFreq);
        this.page.rewriteDataOnly();
    }else if(parseInt(inputValue) != opData.currBandFreq){
        if(tv){
            model.satellite.setUnicableBandFrequency(parseInt(inputValue));
        }
        opData.currBandFreq = parseInt(inputValue);
        this.page.rewriteDataOnly();
    }

}
function frequencyInputAddSuffix(){
    var opData = settingChSetCommDVBSPageData.operateData;
    var inputValue = $("#ChannelCommUserBandFreInput").val();
     if(parseInt(inputValue) != opData.currBandFreq){
        if(tv){
            model.satellite.setUnicableBandFrequency(parseInt(inputValue));
        }
        opData.currBandFreq = parseInt(inputValue);
    }
}
function ChannelCommDVBSLCNflipSwitchOKHandler(operateData){
    var page = this.page;
    operateData.LCNSwitch = (operateData.LCNSwitch == 1) ? 0:1;
    if(tv){
        model.channelSearch.setLcn(operateData.LCNSwitch);
    }
    page.rewriteDataOnly();
}
function settingChSetCommDVBSToNextPage(){
    hiWebOsFrame.createPage("settingChSetEUAutoScanPageId", null, null, null, function (a) {
        hiWebOsFrame.ChSetChannelScanPage = a;
        settingChSetCommDVBSClosePrePage();
        a.open();
        a.hiFocus();
    });
}
function settingChSetCommDVBSClosePrePage(){
    if(!!hiWebOsFrame.ChSetCommDVBSPage){
        hiWebOsFrame.ChSetCommDVBSPage.destroy();
    }
    if(!!hiWebOsFrame.ChSetSelSatellitePage){
        hiWebOsFrame.ChSetSelSatellitePage.destroy();
    }
    if(!!hiWebOsFrame.ChSetDVBOperatorPage){
        hiWebOsFrame.ChSetDVBOperatorPage.destroy();
    }
    if(!!hiWebOsFrame.ChSetTunerModePage){
        hiWebOsFrame.ChSetTunerModePage.destroy();
    }
}
function settingChSetCommDVBSPageEscHandle(){
    hiWebOsFrame.ChSetCommDVBSPage.close();
    hiWebOsFrame.ChSetCommDVBSPage.origin.open();
    hiWebOsFrame.ChSetCommDVBSPage.origin.hiFocus();
    hiWebOsFrame.ChSetCommDVBSPage.destroy();
}
function settingChSetCommDVBSPageOnOpen(){
    var opData = settingChSetCommDVBSPageData.operateData;
    if(opData.currSatelliteMode != 3){
        $("#settingChSetCommUserBandCon").css("display","none");
        $("#settingChSetCommBandFreCon").css("display","none");
    }else{
        $("#settingChSetCommUserBandCon").css("display","block");
        $("#settingChSetCommBandFreCon").css("display","block");
    }
    if(opData.LCNSwitchEnable == 0){
        $("#settingChSetCommLCNCon").css("display","none");
    }else{
        $("#settingChSetCommLCNCon").css("display","block");
    }
}
function settingChSetCommDVBSPageOnDestroy(){
    hiWebOsFrame.ChSetCommDVBSPage = null;
}
function settingChSetCommDVBSOpenScrollBar() {
    try {
        var OpeData = settingChSetCommDVBSPageData.operateData;
        var userBandUl = settingChSetCommDVBSPageData.ChannelCommUserBandListFrame.Data.ChannelCommUserBandListUl;
        if (userBandUl.Data.length <= 3) {
            //$("#ChannelCommUserBandListScrollCon").css("visibility", "hidden");
            OpeData.scrollHeight = 200;
            OpeData.scrollStep = 0;

        } else {
            //$("#ChannelCommUserBandListScrollCon").css("visibility", "visible");

            var listCnt = userBandUl.Data.length;
            OpeData.scrollHeight = 3 / listCnt * 200;
            OpeData.scrollStep = 200 / listCnt;

            debugG("OpeData.scrollHeight" + OpeData.scrollHeight);
            debugG("OpeData.scrollStep" + OpeData.scrollStep);

            $("#ChannelCommUserBandListScrollBar").css("height", OpeData.scrollHeight + "px");

            debugG("scrollHeight: " + OpeData.scrollHeight + ", scrollStep: " + OpeData.scrollStep);

            var beginIdx = hiWebOsFrame.ChSetCommDVBSPage.getCaE("ChannelCommUserBandListUl").BeginIdx;
            debugG('beginIdx: ' + beginIdx);
            RefreshsettingChSetCommDVBSScrollMoveTo(beginIdx); //TODO 此处不一定为0
        }
    } catch (ex) {
        debugE(ex.message);
    }
}

function RefreshsettingChSetCommDVBSScrollMoveTo(beginIdx) {
    try {
        debugG("beginIdx: " + beginIdx);
        var scrollMarginTop = beginIdx * settingChSetCommDVBSPageData.operateData.scrollStep;
        debugG("scrollMarginTop:" + scrollMarginTop);
        $("#ChannelCommUserBandListScrollBar").css("margin-top", scrollMarginTop + "px");

    } catch (ex) {
        debugE(ex.message);
    }
}
function ChannelCommDVBSUserBandMoveHandler(){
    try {
        var beginIdx = hiWebOsFrame.ChSetCommDVBSPage.getCaE("ChannelCommUserBandListUl").BeginIdx;
        if (beginIdx == UNDEFINED_DEFSTR) {
            debugE("beginIdx Err!!");
        } else {
            RefreshsettingChSetCommDVBSScrollMoveTo(beginIdx);
        }
    } catch (ex) {
        debugE(ex.message);
    }
}