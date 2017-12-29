function getSettingChSetCommDVBTData(opt) {
    opt.CaE = [
        {
            "id":"settingChSetCommDVBTHeadTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingChSetCommDVBTItemTitle",
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
                "downTo": "ChannelCommScanModeItem",
                "rightTo": "settingChSetCommDVBTRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBTPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBTToNextPage"
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
                        "aftEnterHandler": "ChannelCommDVBTChannelOkHandler",
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
                "downTo": "ChannelCommLCNflipSwitch",
                "upTo": "ChannelCommChannelItem",
                "rightTo":"settingChSetCommDVBTRightImg"
            },
            "handler":{
                "befLeftHandler":"settingChSetCommDVBTPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBTToNextPage"
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
                        "dataSelected": "settingChannelCommChannelListLiSelect"
                    },
                    "handler": {
                        "aftEnterHandler": "ChannelCommDVBTScanModeOkHandler",
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
            "nav": {"rightTo": "settingChSetCommDVBTRightImg", "upTo": "ChannelCommScanModeItem"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",
            "FlipSwitchConfig": {
                switchTypeId: "switchType",
                switchTextId: "switchText"
            },
            "handler": {
                'aftEnterHandler': 'ChannelCommDVBTLCNflipSwitchOKHandler',
                "befLeftHandler":"settingChSetCommDVBTPageEscHandle"
//                "befRightHandler":"settingChSetCommDVBTToNextPage"

            }
        },
        {
            "id": "settingChSetCommDVBTLeftImg",
            "description": "",
            "CaEType": "img",
            "classes": {"normal": "settingChSetCommDVBCLeftImg", "disable": "settingChSetCommDVBCLeftImg"}
        },
        {
            "id": "settingChSetCommDVBTRightImg",
            "description": "",
            "CaEType": "img",
            "nav":{
                "leftTo":"ChannelCommChannelItem"
            },
            "classes": {
                "normal": "settingChSetCommDVBCRightImg",
                "focus": "settingChSetCommDVBCRightImg",
                "disable": "settingChSetCommDVBCRightImg"},

            "handler":{
                "aftEnterHandler":"settingChSetCommDVBTToNextPage",
                "befRightHandler":"settingChSetCommDVBTToNextPage"
            },
            "onFocusFun":function(){
                $("#"+this.id).attr("src","img/RightArrowFocus.png");
            },
            "onBlurFun":function(opData){
                $("#"+this.id).attr("src","img/channel_right_arrow.png");
            }
        },
        {
            "id": "settingChSetCommDVBTRightSpan",
            "description": "",
            "CaEType": "span",
            "classes": {"normal": "settingChSetCommDVBCRightSpan", "disable": "settingChSetCommDVBCRightSpan"}
        }
    ]
    settingInitChSetCommDVBTPageData();
    return settingChSetCommDVBTPageData;
}
function settingInitChSetCommDVBTPageData(){
    var opData = settingChSetCommDVBTPageData.operateData;
    if(!tv){
        opData.LCNSwitchEnable = 1;
        opData.LCNSwitch = 0;
        opData.currScramModeIdx = 0;
        opData.currScanModeIdx = 0;
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
    }
    //

}

var settingChSetCommDVBTPageData = {
    settingChSetCommDVBTHeadTitle:{"Data":"Auto Channel Scan"},
    settingChSetCommDVBTItemTitle:{"Data":"Mode setup"},
    ChannelCommChannel: {Data: "Channel"},
    ChannelCommChannelItemSpan: {Data: "All Channel"},
    ChannelCommScanMode: {Data: "Scan Mode"},
    ChannelCommScanModeItemSpan: {Data: "Full Scan"},
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
    "ChannelCommLCNflipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    settingChSetCommDVBTLeftImg:{Data:"img/channel_left_arrow.png"},
    settingChSetCommDVBTRightImg:{Data:"img/channel_right_arrow.png"},
    settingChSetCommDVBTRightSpan:{Data:""},
    operateData: {
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
        ]
    },
    "langData":{
        "Auto Channel Scan":["Auto Channel Scan"],
        "Scan Mode":[],
        "Mode setup":[],
        "Channel":[],
        "All Channels":[],
        "Free Channels":[],
        "ATV":[],
        "DTV":[],
        "ATV+DTV":[],
        "LCN":[]
    },

    rewrite: "settingRewriteChSetCommDVBTPage"


}
function settingRewriteChSetCommDVBTPage(data) {
    var opData = data.operateData;

    data.ChannelCommLCNflipSwitch.Data.switchType = (opData.LCNSwitch == 1)?true:false;
    data.ChannelCommLCNflipSwitch.disable = (opData.LCNSwitchEnable == 1)?false:true;

    data.ChannelCommChannelItemSpan.Data = opData.scramModeMapList[opData.currScramModeIdx].name;
    data.ChannelCommChannelListFrame.Data.ChannelCommChannelListUl.SelectedIndex = opData.currScramModeIdx;

    data.ChannelCommScanModeItemSpan.Data = opData.scanModeMapList[opData.currScanModeIdx].name;
    data.ChannelCommScanModeListFrame.Data.ChannelCommScanModeListUl.SelectedIndex = opData.currScanModeIdx;
}
function ChannelCommDVBTChannelOkHandler() {
    var scramModeUl = settingChSetCommDVBTPageData.ChannelCommChannelListFrame.Data.ChannelCommChannelListUl,
        opData = settingChSetCommDVBTPageData.operateData;
    opData.currScramModeIdx = this.SelectedIndex;
    this.page.hiFocus("ChannelCommChannelItem");
    if(tv){
        model.channelSearch.setScramble(opData.scramModeMapList[opData.currScramModeIdx].map);
    }
    this.page.rewriteDataOnly();

}
function ChannelCommDVBTScanModeOkHandler(){
    var data = settingChSetCommDVBTPageData.ChannelCommScanModeListFrame.Data.ChannelCommScanModeListUl,
        opData = settingChSetCommDVBTPageData.operateData;

    opData.currScanModeIdx = this.SelectedIndex;
    if(tv){
        model.channelSearch.setScanMode(opData.scanModeMapList[opData.currScanModeIdx].map);
    }
    this.page.rewriteDataOnly();
    this.page.hiFocus("ChannelCommScanModeItem");
}
function ChannelCommDVBTLCNflipSwitchOKHandler(operateData){
    var page = this.page;
    operateData.LCNSwitch = (operateData.LCNSwitch == 1) ? 0:1;
    if(tv){
        model.channelSearch.setLcn(operateData.LCNSwitch);
    }
    page.rewriteDataOnly();
}
function settingChSetCommDVBTToNextPage(){
    hiWebOsFrame.createPage("settingChSetEUAutoScanPageId", null, null, null, function (a) {
        hiWebOsFrame.ChSetChannelScanPage = a;
        a.operateData.ScanModeFlag = 0;//normal scan
        settingChSetCommDVBTClosePrePage();
        a.open();
        a.hiFocus();
    });
}
function settingChSetCommDVBTClosePrePage(){
    if(!!hiWebOsFrame.ChSetCommDVBTPage){
        hiWebOsFrame.ChSetCommDVBTPage.destroy();
    }
    if(!!hiWebOsFrame.ChSetTunerModePage){
        hiWebOsFrame.ChSetTunerModePage.destroy();
    }
}
function settingChSetCommDVBTPageEscHandle(){
    hiWebOsFrame.ChSetCommDVBTPage.close();
    hiWebOsFrame.ChSetCommDVBTPage.origin.open();
    hiWebOsFrame.ChSetCommDVBTPage.origin.hiFocus();
    hiWebOsFrame.ChSetCommDVBTPage.destroy();
}

function settingChSetCommDVBTPageOnOpen(){
    var opData = settingChSetCommDVBTPageData.operateData;
    if(opData.LCNSwitchEnable == 0){
        $("#settingChSetCommLCNCon").css("display","none");
    }else{
        $("#settingChSetCommLCNCon").css("display","block");
    }
}
function settingChSetCommDVBTPageOnDestroy(){
    hiWebOsFrame.ChSetCommDVBTPage = null;
}
