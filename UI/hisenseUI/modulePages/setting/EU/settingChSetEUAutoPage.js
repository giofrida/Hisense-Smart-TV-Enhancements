/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBAutoPageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetAutoHeadTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoItemTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoLeftImg",
            "description":"left arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetAutoRightImg",
            "description":"right arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetAutoRecTypeTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoRecTypeValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoNetworkTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoNetworkValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id": "settingChSetAutoSatelliteList",//在页面中的按钮或者组件容器Id
            "description": "卫星类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSetAutoCenterDiv", "focus": "settingChSetAutoCenterDiv",
                "dataSelected":"settingChSetAutoCenterDiv","disable":"settingChSetAutoCenterDiv"
            },
            "handler": {
                "aftEnterHandler": "",
                "befRightHandler":"",
                "befLeftHandler":""
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetAutoSatelliteTitle",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetAutoScanSetItemTitle"
                    }
                },
                {
                    "id": "settingChSetAutoSatelliteValue",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetAutoScanItemValue"
                    }
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetAutoSatelliteTitle", "settingChSetAutoSatelliteValue"]
            }
        },
        {
            "id":"settingChSetAutoChannelTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoChannelValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoScanModeTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoScanModeValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoSearchModeTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoSearchModeValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoLCNTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoLCNValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoChangeBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"settingChSetAutoScanBtnNormal","focus":"settingChSetAutoScanBtnFocus","disable":"settingChSetAutoScanBtnDisable"
            },
            "nav":{
                "rightTo":"settingChSetAutoRescanBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBAutoToChTMPage",
                "befLeftHandler":"settingChSetDVBAutoEscHandle"
            },
            "onFocusFun":"settingChSetDVBAutoAddMarquee",
            "onBlurFun":"settingChSetDVBAutoDelMarquee"
        },
        {
            "id":"settingChSetAutoRescanBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"settingChSetAutoScanBtnNormal","focus":"settingChSetAutoScanBtnFocus","disable":"settingChSetAutoScanBtnDisable"
            },
            "nav":{
                "leftTo":"settingChSetAutoChangeBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBAutoToChScanPage"
            },
            "onFocusFun":"settingChSetDVBAutoAddMarquee",
            "onBlurFun":"settingChSetDVBAutoDelMarquee"
        }
    ];
    settingInitChSetDVBAutoPageData();
    return settingChSetDVBAutoPageData;
}
var settingChSetDVBAutoPageData={
    "settingChSetAutoItemTitle":{"Data":"Auto Scan"},
    "settingChSetAutoLeftImg":{"Data":"img/channel_left_arrow.png"},
    "settingChSetAutoRightImg":{"Data":"img/blank.png"},
    "settingChSetAutoRecTypeTitle":{"Data":"Reception"},
    "settingChSetAutoRecTypeValue":{"Data":""},
    "settingChSetAutoNetworkTitle":{"Data":"Operator"},
    "settingChSetAutoNetworkValue":{"Data":""},
    "settingChSetAutoSatelliteList":{
        "Data":[
            {
                "settingChSetAutoSatelliteTitle":{"Data":""},
                "settingChSetAutoSatelliteValue":{"Data":""}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetAutoChannelTitle":{"Data":"Channel"},
    "settingChSetAutoChannelValue":{"Data":""},
    "settingChSetAutoScanModeTitle":{"Data":"Scan Mode"},
    "settingChSetAutoScanModeValue":{"Data":""},
    "settingChSetAutoSearchModeTitle":{"Data":"Search Mode"},
    "settingChSetAutoSearchModeValue":{"Data":""},
    "settingChSetAutoLCNTitle":{"Data":"LCN"},
    "settingChSetAutoLCNValue":{"Data":""},
    "settingChSetAutoChangeBtn":{"Data":"Change Setup"},
    "settingChSetAutoRescanBtn":{"Data":"Rescan"},
    "operateData":{
        "currTunerModeIdx":0,
        "tunerModeMapList":[
            {
                "map":0,
                "name":"Antenna"
            },
            {
                "map":1,
                "name":"Cable"
            },
            {
                "map":2,
                "name":"Satellite"
            }
        ],
        "LCNSwitchEnable":1,
        "currLcnSwitch":0,
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
        "currDVBCOperatorName":"Others",
        "DVBCSearchModeSupport":[],
        "currDVBCSearchModeIdx":0,
        "DVBCSearchModeMapList":[
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
        "currScramModeIdx":0,
        "scramModeMapList":[
            {
                "map":1,
                "name":"All Channels"
            },
            {
                "map":0,
                "name":"Free Channels"
            }
        ],
        "selectedSatelliteList":[],
        "currDVBSOperatorName":"Others",
        "currDVBSSearchModeIdx":0,
        "DVBSSearchModeMapList":[
            {
                "map":0,
                "name":"Frequency Scan"
            },
            {
                "map":1,
                "name":"Network Scan"
            }
        ]
    },
    "langData":{
        "Auto Scan":["Auto Scan"],
        "Reception":["Reception"],
        "Antenna":["Antenna"],
        "Cable":["Cable"],
        "Satellite":["Satellite"],
        "Channel":["Channel"],
        "All Channels":["All Channels"],
        "Free Channels":["Free Channels"],
        "Scan Mode":["Scan Mode"],
        "ATV":["ATV"],
        "DTV":["DTV"],
        "ATV+DTV":["ATV+DTV"],
        "Search Mode":["Search Mode"],
        "Operator":["Operator"],
        "Frequency Scan":["Frequency Scan"],
        "Network Scan":["Network Scan"],
        "Quick Scan":["Quick Scan"],
        "Advance Scan":["Advance Scan"],
        "LCN":["LCN"],
        "Single Satellite":[],
        "Tone Burst A":[],
        "Tone Burst B":[],
        "DiSeqc A":[],
        "DiSeqc B":[],
        "DiSeqc C":[],
        "DiSeqc D":[],
        "Unicable A":[],
        "Unicable B":[],
        "On":["On"],
        "Off":["Off"],
        "Setup":["Setup"],
        "Start":["Start"],
        "Rescan":[],
        "Change Setup":[],
        "Others":["Others"]
    },
    rewrite:"settingRewriteChSetDVBAutoPage"
}
/*******************************************************************
 name:settingInitChSetDVBAutoPageData
 description:初始化DVBC中Operate的值
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBAutoPageData(){
    var data = settingChSetDVBAutoPageData;
    try{
        if(tv == false){
            data.operateData.currTunerModeIdx = 1;
            data.operateData.currScramModeIdx = 0;
        }else{
            var currTunerMode = model.channelSearch.getSource();
            for(var i = 0; i < data.operateData.tunerModeMapList.length;i++){
                if(currTunerMode == data.operateData.tunerModeMapList[i].map){
                    data.operateData.currTunerModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.tunerModeMapList.length){
                data.operateData.currTunerModeIdx = 0;
                model.channelSearch.setSource(data.operateData.tunerModeMapList[0].map);
            }
            var currScramFlag = model.channelSearch.getScramble();
            for(var i = 0; i < data.operateData.scramModeMapList.length; i++){
                if(currScramFlag == data.operateData.scramModeMapList[i].map){
                    data.operateData.currScramModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.scramModeMapList.length){
                data.operateData.currScramModeIdx = 0;
                model.channelSearch.setScramble(data.operateData.scramModeMapList[0].map);
            }
        }
        switch (data.operateData.currTunerModeIdx){
            case 0:
                settingInitChSetDVBTAutoData();
                break;
            case 1:
                settingInitChSetDVBCAutoData();
                break;
            case 2:
                settingInitChSetDVBSAutoData();
                break;
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBAutoPageData "+ex.message,DebugLevel.ERROR);
    }
}
function settingInitChSetDVBTAutoData(){
    var data = settingChSetDVBAutoPageData;
    if(tv == false){
        data.operateData.currScanModeIdx = 0;
        data.operateData.currLcnSwitch = 0;
    }else{
        var currScanMode = model.channelSearch.getScanMode();
        debugPrint("settingInitChSetDVBTAutoData:currScanMode="+currScanMode,DebugLevel.ALWAYS);
        for(var i = 0; i < data.operateData.scanModeMapList.length; i++){
            if(currScanMode == data.operateData.scanModeMapList[i].map){
                data.operateData.currScanModeIdx = i;
                break;
            }
        }
        if(i == data.operateData.scanModeMapList.length){
            data.operateData.currScanModeIdx = 0;
            model.channelSearch.setScanMode(data.operateData.scanModeMapList[0].map);
        }
        data.operateData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
        data.operateData.currLcnSwitch = model.channelSearch.getLcn();
        debugPrint("data.operateData.LCNSwitchEnable="+data.operateData.LCNSwitchEnable+"data.operateData.currLcnSwitch"+data.operateData.currLcnSwitch,DebugLevel.ALWAYS);
    }
}

function settingInitChSetDVBCAutoData(){
    var data = settingChSetDVBAutoPageData;
    if(tv == false){
        data.operateData.currScanModeIdx = 2;
        data.operateData.currLcnSwitch = 0;
        data.operateData.currDVBCSearchModeIdx = 0;
        data.operateData.currDVBCOperatorName = "Others";
        data.operateData.DVBCSearchModeSupport = [0,1,2]
    }else{
        data.operateData.currDVBCOperatorName = "Others";
        var operatorList = model.channelSearch.getOperators();
        debugPrint("settingInitChSetDVBCAutoData:"+operatorList.length+","+operatorList);
        if(operatorList.length % 5 != 0 || operatorList.length == 0){
            debugE("settingInitChSetDVBCAutoData:operator info is error");
        }else{
            var DVBCOperatorNum = operatorList.length/5;
            for(var i = 0; i <  DVBCOperatorNum; i++){
                if(operatorList[i*5+2] == 1){
                    data.operateData.currDVBCOperatorName = operatorList[i*5+1];
                    break;
                }
            }
            if(i == DVBCOperatorNum){
                debugE("settingInitChSetDVBCAutoData:can't find operator!!");
            }
        }
        var currScanMode = model.channelSearch.getScanMode();
        debugPrint("settingInitChSetDVBCAutoData:currScanMode="+currScanMode,DebugLevel.ALWAYS);
        for(var i = 0; i < data.operateData.scanModeMapList.length; i++){
            if(currScanMode == data.operateData.scanModeMapList[i].map){
                data.operateData.currScanModeIdx = i;
                break;
            }
        }
        if(i == data.operateData.scanModeMapList.length){
            data.operateData.currScanModeIdx = 0;
            model.channelSearch.setScanMode(data.operateData.scanModeMapList[0].map);
        }
        data.operateData.DVBCSearchModeSupport = model.channelSearch.getSearchModeSupport();
        debugG("settingInitChSetDVBCAutoData:DVBCSearchModeSupport="+data.operateData.DVBCSearchModeSupport);
        if(data.operateData.DVBCSearchModeSupport.length == 0){
            debugE("settingInitChSetDVBCAutoData:search mode support is error!!");
            data.operateData.DVBCSearchModeSupport=[0];
            model.channelSearch.setSearchMode(0);
        }
        var currDVBCSearMode = model.channelSearch.getSearchMode();
        if($.inArray(currDVBCSearMode,data.operateData.DVBCSearchModeSupport) == -1){
            debugE("settingInitChSetDVBCAutoData:currSearMode not in support list");
            model.channelSearch.setSearchMode(data.operateData.DVBCSearchModeSupport[0]);
            data.operateData.currDVBCSearchModeIdx = 0;
        }
        for(var i=0; i < data.operateData.DVBCSearchModeMapList.length;i++){
            if(currDVBCSearMode == data.operateData.DVBCSearchModeMapList[i].map){
                data.operateData.currDVBCSearchModeIdx = i;
                break;
            }
        }
        if(i == data.operateData.DVBCSearchModeMapList.length){
            data.operateData.currDVBCSearchModeIdx = 0;
            model.channelSearch.setSearchMode(data.operateData.DVBCSearchModeMapList[0].map);
        }
        data.operateData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
        data.operateData.currLcnSwitch = model.channelSearch.getLcn();
        debugPrint("data.operateData.LCNSwitchEnable="+data.operateData.LCNSwitchEnable+"data.operateData.currLcnSwitch"+data.operateData.currLcnSwitch,DebugLevel.ALWAYS);
    }
}
function settingInitChSetDVBSAutoData(){
    var data = settingChSetDVBAutoPageData;
    data.operateData.selectedSatelliteList = [];
    if(tv == false){
        data.operateData.selectedSatelliteList = [
            {
                "id":1,
                "name":"Astra 19.2",
                "title":"Disc A"
            },
            {
                "id":2,
                "name":"HotBord",
                "title":"Disc B"
            }
        ];
        data.operateData.currLcnSwitch = 0;
        data.operateData.currDVBSSearchModeIdx = 0;
        data.operateData.currDVBSOperatorName = "Others";
    }else{
        data.operateData.currDVBSOperatorName = "Others";
        var operatorList = model.channelSearch.getOperators();
        debugPrint("settingInitChSetDVBSAutoData:"+operatorList.length+","+operatorList);
        if(operatorList.length % 5 != 0 || operatorList.length == 0){
            debugE("settingInitChSetDVBSAutoData:operator info is error");
        }else{
            var DVBSOperatorNum = operatorList.length/5;
            for(var i = 0; i <  DVBSOperatorNum; i++){
                if(operatorList[i*5+2] == 1){
                    data.operateData.currDVBSOperatorName = operatorList[i*5+1];
                    break;
                }
            }
            if(i == DVBSOperatorNum){
                debugE("settingInitChSetDVBSAutoData:can't find operator!!");
            }
        }
        var selectSatelliteIdList = model.satellite.getSelectedIdList();
        var selectSatelliteNameList = model.satellite.getSelectedNameList();
        debugPrint("settingInitChSetDVBSAutoData:"+selectSatelliteIdList,DebugLevel.ALWAYS);
        debugPrint("settingInitChSetDVBSAutoData:"+selectSatelliteNameList,DebugLevel.ALWAYS);
        var selectSatelliteNum = 0;
        var suffix = [" A"," B"," C"," D"];
        var currSatelliteMode = model.satellite.getInstallation();
        var satelliteModeName = ["Single Satellite","Tone Burst","DiSeqc","Unicable"];
        for(var i = 0; i < selectSatelliteIdList.length; i++){
            if(selectSatelliteIdList[i] != -1){
                var satelliteItemData = {
                    "id":"",
                    "name":"",
                    "title":""
                }
                satelliteItemData.id = selectSatelliteIdList[i];
                satelliteItemData.name = selectSatelliteNameList[i];
                if(currSatelliteMode == 0){
                    satelliteItemData.title = "Single Satellite"
                }else{
                    satelliteItemData.title = satelliteModeName[currSatelliteMode]+suffix[i];
                }
                data.operateData.selectedSatelliteList.push(satelliteItemData);
                selectSatelliteNum = selectSatelliteNum + 1;
            }
        }
        try{
            if(selectSatelliteNum == 0){
                debugE("settingInitChSetDVBSAutoData:satellite is 0");
                model.satellite.setInstallation(2);//默认设置为single模式
                selectSatelliteIdList = model.satellite.getSelectedIdList();
                selectSatelliteNameList = model.satellite.getSelectedNameList();
                data.operateData.selectedSatelliteList[0].id = selectSatelliteIdList[0];
                data.operateData.selectedSatelliteList[0].name =  selectSatelliteNameList[0];
                data.operateData.selectedSatelliteList[0].title =  "Single Satellite";
            }
        }catch (ex){
            debugE("settingInitChSetDVBSAutoData:"+ex.message);
        }

        var currDVBSSearMode = model.satellite.getSearchMode();
        for(i = 0; i < data.operateData.DVBSSearchModeMapList.length; i++){
            if(currDVBSSearMode == data.operateData.DVBSSearchModeMapList[i].map){
                data.operateData.currDVBSSearchModeIdx = i;
                break;
            }
        }
        if(i == data.operateData.DVBSSearchModeMapList.length){
            data.operateData.currDVBSSearchModeIdx = 0;
            model.satellite.setSearchMode(data.operateData.DVBSSearchModeMapList[0].map);
        }
        data.operateData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
        data.operateData.currLcnSwitch = model.channelSearch.getLcn();
        debugPrint("data.operateData.LCNSwitchEnable="+data.operateData.LCNSwitchEnable+"data.operateData.currLcnSwitch"+data.operateData.currLcnSwitch,DebugLevel.ALWAYS);
    }
}
/*******************************************************************
 name:settingRewriteChSetDVBAutoPage
 description:刷新DVBS显示界面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBAutoPage(data){
    switch (data.operateData.currTunerModeIdx){
        case 0:
            settingRewriteChSetDVBTAuto(data);
            break;
        case 1:
            settingRewriteChSetDVBCAuto(data);
            break;
        case 2:
            settingRewriteChSetDVBSAuto(data);
            break;
    }
}

function settingRewriteChSetDVBTAuto(data){
    data.settingChSetAutoRecTypeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;
    data.settingChSetAutoChannelValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
    data.settingChSetAutoScanModeValue.Data = data.operateData.scanModeMapList[data.operateData.currScanModeIdx].name;
    if(data.operateData.currLcnSwitch == 0||data.operateData.LCNSwitchEnable==0){
        data.settingChSetAutoLCNValue.Data = "Off";
    }else{
        data.settingChSetAutoLCNValue.Data = "On";
    }
}
function settingRewriteChSetDVBCAuto(data){
    data.settingChSetAutoRecTypeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;
    data.settingChSetAutoNetworkValue.Data = data.operateData.currDVBCOperatorName;
    data.settingChSetAutoChannelValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
    data.settingChSetAutoScanModeValue.Data = data.operateData.scanModeMapList[data.operateData.currScanModeIdx].name;
    data.settingChSetAutoSearchModeValue.Data = data.operateData.DVBCSearchModeMapList[data.operateData.currDVBCSearchModeIdx].name;
    if(data.operateData.currLcnSwitch == 0||data.operateData.LCNSwitchEnable==0){
        data.settingChSetAutoLCNValue.Data = "Off";
    }else{
        data.settingChSetAutoLCNValue.Data = "On";
    }
}
function settingRewriteChSetDVBSAuto(data){
    var opData = settingChSetDVBAutoPageData.operateData;
    data.settingChSetAutoRecTypeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;
    data.settingChSetAutoNetworkValue.Data = data.operateData.currDVBSOperatorName;
    data.settingChSetAutoChannelValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
    data.settingChSetAutoSearchModeValue.Data = data.operateData.DVBSSearchModeMapList[data.operateData.currDVBSSearchModeIdx].name;
    data.settingChSetAutoSatelliteList.Data = [];
    for(var i = 0; i < opData.selectedSatelliteList.length;i ++){
        var item = {
            "settingChSetAutoSatelliteTitle":{"Data":opData.selectedSatelliteList[i].title},
            "settingChSetAutoSatelliteValue":{"Data":opData.selectedSatelliteList[i].name}
        }
        data.settingChSetAutoSatelliteList.Data.push(item);
    }
    if(data.operateData.currLcnSwitch == 0||data.operateData.LCNSwitchEnable==0){
        data.settingChSetAutoLCNValue.Data = "Off";
    }else{
        data.settingChSetAutoLCNValue.Data = "On";
    }
}
/*******************************************************************
 name:settingChSetDVBAutoToChScanPage
 description:从DVBS的设置信息查看页到搜台页面
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBAutoToChScanPage(){
    if(tv == true){
        var hasChannels = livetvchlist.hasChannels();
    }else{
        var hasChannels = false;
    }
    if(hasChannels){
        hiWebOsFrame.createPage('settingChSetClearChannelDialogId',null, hiWebOsFrame.ChSetDVBAutoPage, null,function(a){
            hiWebOsFrame.ChSetClearChannelDialog = a;
            a.open();
            a.hiFocus();
        });
    }else{
        hiWebOsFrame.createPage('settingChSetEUAutoScanPageId',null, hiWebOsFrame.settingsFirst, null,function(a){
            hiWebOsFrame.ChSetChannelScanPage = a;
            hiWebOsFrame.ChSetDVBAutoPage.close();
            a.operateData.ScanModeFlag = 0;//normal scan
            a.open();
            a.hiFocus();
            hiWebOsFrame.ChSetDVBAutoPage.destroy();
        });
    }


}
/*******************************************************************
 name:settingChSetDVBAutoToChMainPage
 description:从DVBS的设置信息查看页到搜台设置主页
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBAutoToChTMPage(){
    hiWebOsFrame.createPage('settingChSetTunerModePageId',null, null, null,function(a){
        hiWebOsFrame.ChSetTunerModePage = a;
        hiWebOsFrame.ChSetDVBAutoPage.close();
        a.open();
        a.hiFocus();
        hiWebOsFrame.ChSetDVBAutoPage.destroy();
    });
}
function settingChSetDVBAutoDelMarquee(){
    //  DelMarquee
    var marquee = $("#"+this.id +" marquee");
    if (marquee.length > 0) {
        var htmlText = $("#"+this.id + " marquee").html();
        var marquee = $("#"+this.id ).html(htmlText);
    }
}
function settingChSetDVBAutoAddMarquee(){
    //AddMarquee
    var htmlText = $("#"+this.id).html();
    if (htmlText.length > 15) {
        $("#"+this.id).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
}

/*******************************************************************
 name:settingChSetDVBAutoEscHandle
 description:DVBS按返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBAutoEscHandle(){
    hiWebOsFrame.ChSetDVBAutoPage.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.ChSetDVBAutoPage.destroy();
}

function settingChSetDVBAutoPageOnOpen(){
    var data = settingChSetDVBAutoPageData;
    switch (data.operateData.currTunerModeIdx){
        case 0:
            $("#settingChSetAutoNetwork").css("display","none");
            $("#settingChSetAutoSatelliteList").css("display","none");
            $("#settingChSetAutoSearchMode").css("display","none");
            break;
        case 1:
            $("#settingChSetAutoSatelliteList").css("display","none");
            break;
        case 2:
            $("#settingChSetAutoScanMode").css("display","none");
            break;
        default :
            break;
    }
    if(data.operateData.LCNSwitchEnable == 0){
        $("#settingChSetAutoLCNCon").css("display","none");
    }
}
function settingChSetDVBAutoPageOnDestroy(){
    hiWebOsFrame.ChSetDVBAutoPage = null;
}