/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBAutoPageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetDVBAutoPageTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoTunerModeTitle",
            "description":"DVBT TnerMode标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoTunerModeValue",
            "description":"DVBT Tuner Mode",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoScanModeTitle",
            "description":"DVBT 搜台方式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoScanModeValue",
            "description":"DVBT 搜台方式",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoScramModeTitle",
            "description":"DVBT加密方式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoScramModeValue",
            "description":"DVBT加密方式",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoLCNTitle",
            "description":"DVBT LCN 开关状态标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBTAutoLCNValue",
            "description":"DVBT LCN开关状态",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoTunerModeTitle",
            "description":"DVBC TnerMode标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoTunerModeValue",
            "description":"DVBC Tuner Mode",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoOperatorTitle",
            "description":"DVBC Operator标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoOperatorValue",
            "description":"DVBC Operator",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoScanModeTitle",
            "description":"DVBC 搜台方式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoScanModeValue",
            "description":"DVBC 搜台方式",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoSearModeTitle",
            "description":"DVBC 搜台方式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoSearModeValue",
            "description":"DVBC 搜台方式",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoScramModeTitle",
            "description":"DVBC 搜台方式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoScramModeValue",
            "description":"DVBC 搜台方式",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoLCNTitle",
            "description":"DVBC LCN 开关状态标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBCAutoLCNValue",
            "description":"DVBC LCN开关状态",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoTunerModeTitle",
            "description":"DVBS TnerMode标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoTunerModeValue",
            "description":"DVBS Tuner Mode",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBSAutoSateUl",
            "description":"satellite list",
            "CaEType":"Ul",
            "oriCaE":[
                {
                    "id":"settingChSetDVBSAutoSateName",
                    "description":"卫星名",
                    "CaEType":"span"
                }
            ],
            UlConfig:{
                UlDataItem:["settingChSetDVBSAutoSateName"]
            }
        },
        {
            "id":"settingChDVBSAutoScramModeTitle",
            "description":"DVBS 搜台方式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoScramModeValue",
            "description":"DVBS 搜台方式",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoOperatorTitle",
            "description":"DVBS Operator标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoOperatorValue",
            "description":"DVBS Operator",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoSearModeTitle",
            "description":"DVBS 搜台方式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoSearModeValue",
            "description":"DVBS 搜台方式",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoLCNTitle",
            "description":"DVBS LCN 开关状态标题",
            "CaEType":"span"
        },
        {
            "id":"settingChDVBSAutoLCNValue",
            "description":"DVBS LCN开关状态",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBAutoSetBtn",
            "description":"搜台设置按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "rightTo":"settingChSetDVBAutoStartBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBAutoToChMainPage",
                "befRightHandler":"settingChSetDVBAutobefkeyDelMarquee",
                "befLeftHandler":"settingChSetDVBAutobefkeyDelMarquee",
                "aftRightHandler":"settingChSetDVBAutoaftkeyAddMarquee",
                "aftLeftHandler":"settingChSetDVBAutoaftkeyAddMarquee"
            }
        },
        {
            "id":"settingChSetDVBAutoStartBtn",
            "description":"开始搜台按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "leftTo":"settingChSetDVBAutoSetBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBAutoToChScanPage"
            }
        }
    ];
    settingInitChSetDVBAutoPageData();
    return settingChSetDVBAutoPageData;
}
var settingChSetDVBAutoPageData={
    "settingChSetDVBAutoPageTitle":{"Data":"Auto Scan"},

    "settingChDVBTAutoTunerModeTitle":{"Data":"Tuner Mode:"},
    "settingChDVBTAutoTunerModeValue":{"Data":""},
    "settingChDVBTAutoScanModeTitle":{"Data":"Scan Mode:"},
    "settingChDVBTAutoScanModeValue":{"Data":""},
    "settingChDVBTAutoScramModeTitle":{"Data":"Channel:"},
    "settingChDVBTAutoScramModeValue":{"Data":""},
    "settingChDVBTAutoLCNTitle":{"Data":"LCN:"},
    "settingChDVBTAutoLCNValue":{"Data":""},

    "settingChDVBCAutoTunerModeTitle":{"Data":"Tuner Mode:"},
    "settingChDVBCAutoTunerModeValue":{"Data":""},
    "settingChDVBCAutoOperatorTitle":{"Data":"Operator:"},
    "settingChDVBCAutoOperatorValue":{"Data":""},
    "settingChDVBCAutoScanModeTitle":{"Data":"Scan Mode:"},
    "settingChDVBCAutoScanModeValue":{"Data":""},
    "settingChDVBCAutoSearModeTitle":{"Data":"Search Mode:"},
    "settingChDVBCAutoSearModeValue":{"Data":""},
    "settingChDVBCAutoScramModeTitle":{"Data":"Channel:"},
    "settingChDVBCAutoScramModeValue":{"Data":""},
    "settingChDVBCAutoLCNTitle":{"Data":"LCN:"},
    "settingChDVBCAutoLCNValue":{"Data":""},

    "settingChDVBSAutoTunerModeTitle":{"Data":"Tuner Mode:"},
    "settingChDVBSAutoTunerModeValue":{"Data":""},
    "settingChSetDVBSAutoSateUl":{
        "Data":[
            {
                "settingChSetDVBSAutoSateName":{"Data":""}
            }
        ]
    },
    "settingChDVBSAutoScramModeTitle":{"Data":"Channel:"},
    "settingChDVBSAutoScramModeValue":{"Data":""},
    "settingChDVBSAutoOperatorTitle":{"Data":"Operator:"},
    "settingChDVBSAutoOperatorValue":{"Data":""},
    "settingChDVBSAutoSearModeTitle":{"Data":"Search Mode:"},
    "settingChDVBSAutoSearModeValue":{"Data":""},
    "settingChDVBSAutoLCNTitle":{"Data":"LCN:"},
    "settingChDVBSAutoLCNValue":{"Data":""},

    "settingChSetDVBAutoSetBtn":{"Data":"Setup"},
    "settingChSetDVBAutoStartBtn":{"Data":"Start"},
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
        "Tuner Mode:":["Tuner Mode:"],
        "Antenna":["Antenna"],
        "Cable":["Cable"],
        "Satellite":["Satellite"],
        "Channel:":["Channel:"],
        "All Channels":["All Channels"],
        "Free Channels":["Free Channels"],
        "Scan Mode:":["Scan Mode:"],
        "ATV":["ATV"],
        "DTV":["DTV"],
        "ATV+DTV":["ATV+DTV"],
        "Search Mode:":["Search Mode:"],
        "Operator:":["Operator:"],
        "Frequency Scan":["Frequency Scan"],
        "Network Scan":["Network Scan"],
        "Quick Scan":["Quick Scan"],
        "Advance Scan":["Advance Scan"],
        "LCN:":["LCN:"],
        "On":["On"],
        "Off":["Off"],
        "Setup":["Setup"],
        "Start":["Start"],
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
            data.operateData.currTunerModeIdx = 2;
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
        data.operateData.currScanModeIdx = 0;
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
//        var currDVBCSearMode = model.channelSearch.getSearchMode();
//        for(i = 0; i < data.operateData.DVBCSearchModeMapList.length; i++){
//            if(currDVBCSearMode == data.operateData.DVBCSearchModeMapList[i].map){
//                data.operateData.currDVBCSearchModeIdx = i;
//                break;
//            }
//        }
//        if(i == data.operateData.DVBCSearchModeMapList.length){
//            data.operateData.currDVBCSearchModeIdx = 0;
//            model.channelSearch.setSearchMode(data.operateData.DVBCSearchModeMapList[0].map);
//        }
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
                "name":"Astra 19.2"
            },
            {
                "id":2,
                "name":"HotBord"
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
        for(var i = 0; i < selectSatelliteIdList.length; i++){
            if(selectSatelliteIdList[i] != -1){
                var satelliteItemData = {
                    "id":"",
                    "name":""
                }
                satelliteItemData.id = selectSatelliteIdList[i];
                satelliteItemData.name = selectSatelliteNameList[i];
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
    data.settingChDVBTAutoTunerModeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;
    data.settingChDVBTAutoScanModeValue.Data = data.operateData.scanModeMapList[data.operateData.currScanModeIdx].name;
    data.settingChDVBTAutoScramModeValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
    if(data.operateData.currLcnSwitch == 0||data.operateData.LCNSwitchEnable==0){
        data.settingChDVBTAutoLCNValue.Data = "Off";
    }else{
        data.settingChDVBTAutoLCNValue.Data = "On";
    }
}
function settingRewriteChSetDVBCAuto(data){
    data.settingChDVBCAutoTunerModeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;
    data.settingChDVBCAutoOperatorValue.Data = data.operateData.currDVBCOperatorName;
    data.settingChDVBCAutoScanModeValue.Data = data.operateData.scanModeMapList[data.operateData.currScanModeIdx].name;
    data.settingChDVBCAutoSearModeValue.Data = data.operateData.DVBCSearchModeMapList[data.operateData.currDVBCSearchModeIdx].name
    data.settingChDVBCAutoScramModeValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
    if(data.operateData.currLcnSwitch == 0||data.operateData.LCNSwitchEnable==0){
        data.settingChDVBCAutoLCNValue.Data = "Off";
    }else{
        data.settingChDVBCAutoLCNValue.Data = "On";
    }
}
function settingRewriteChSetDVBSAuto(data){
    data.settingChDVBSAutoTunerModeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;
    if(data.settingChSetDVBSAutoSateUl.Data.length > data.operateData.selectedSatelliteList.length){
        data.settingChSetDVBSAutoSateUl.Data.splice(data.operateData.selectedSatelliteList.length)
    }else if(data.settingChSetDVBSAutoSateUl.Data.length < data.operateData.selectedSatelliteList.length){
        while(data.settingChSetDVBSAutoSateUl.Data.length < data.operateData.selectedSatelliteList.length){
            var itemData = {
                "settingChSetDVBSAutoSateName":{"Data":""}
            }
            data.settingChSetDVBSAutoSateUl.Data.push(itemData);
        }
    }
    $.each(data.settingChSetDVBSAutoSateUl.Data,function(idx,item){
        item.settingChSetDVBSAutoSateName.Data = data.operateData.selectedSatelliteList[idx].name;
    })
    data.settingChDVBSAutoScramModeValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
    data.settingChDVBSAutoOperatorValue.Data = data.operateData.currDVBSOperatorName;
    data.settingChDVBSAutoSearModeValue.Data = data.operateData.DVBSSearchModeMapList[data.operateData.currDVBSSearchModeIdx].name;
    if(data.operateData.currLcnSwitch == 0||data.operateData.LCNSwitchEnable==0){
        data.settingChDVBSAutoLCNValue.Data = "Off";
    }else{
        data.settingChDVBSAutoLCNValue.Data = "On";
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
        var hasChannels = true;
    }
    if(hasChannels){
        hiWebOsFrame.createPage('settingChSetClearChannelDialogId',null, hiWebOsFrame.ChSetDVBAutoPage, null,function(a){
            hiWebOsFrame.ChSetClearChannelDialog = a;
            a.open();
            a.hiFocus();
        });
    }else{
        hiWebOsFrame.createPage('settingChSetAutoScanPageId',null, hiWebOsFrame.settingsFirst, null,function(a){
            hiWebOsFrame.ChSetChannelScanPage = a;
            hiWebOsFrame.ChSetDVBAutoPage.close();
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
function settingChSetDVBAutoToChMainPage(){
    hiWebOsFrame.createPage('settingChSetMainPageId',null, null, null,function(a){
        hiWebOsFrame.ChSetMainPage = a;
        hiWebOsFrame.ChSetDVBAutoPage.close();
        a.open();
        a.hiFocus();
        hiWebOsFrame.ChSetDVBAutoPage.destroy();
    });
}
function settingChSetDVBAutobefkeyDelMarquee(){
    //  DelMarquee
    var marquee = $("#settingChSetDVBAutoSetBtn" +" marquee");
    if (marquee.length > 0) {
        var htmlText = $("#settingChSetDVBAutoSetBtn" + " marquee").html();
        var marquee = $("#settingChSetDVBAutoSetBtn" ).html(htmlText);
    }
}
function settingChSetDVBAutoaftkeyAddMarquee(){
    //AddMarquee
    var htmlText = $("#settingChSetDVBAutoSetBtn").html();
    if (htmlText.length >8) {
        $("#settingChSetDVBAutoSetBtn").html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
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
    $("#settingChSetDVBTAutoContent").css("display","none");
    $("#settingChSetDVBCAutoContent").css("display","none");
    $("#settingChSetDVBSAutoContent").css("display","none");
    switch (data.operateData.currTunerModeIdx){
        case 0:
            $("#settingChSetDVBTAutoContent").css("display","block");
            break;
        case 1:
            $("#settingChSetDVBCAutoContent").css("display","block");
            break;
        case 2:
            $("#settingChSetDVBSAutoContent").css("display","block");
            break;
    }
}
function settingChSetDVBAutoPageOnDestroy(){
    hiWebOsFrame.ChSetDVBAutoPage = null;
}