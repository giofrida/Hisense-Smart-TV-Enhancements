/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBC2PageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBC2PageTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBC2NetTitle",
            "description":"网络标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBC2NetValue",
            "description":"网络",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBC2NetBtn",
            "description":"调整网络模式",
            "CaEType":"div",
            "classes":{
                "normal":"wizardAdjustBtnNormal","focus":"wizardAdjustBtnFocus",
                "disable":"wizardAdjustBtnDisable"
            },
            "nav":{
                "upTo":"","downTo":"settingChSetDVBC2ScramBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBCOperatorAdjustHandle"
            }
        },
        {
            "id":"settingChSetDVBC2ScramTitle",
            "description":"网络标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBC2ScramValue",
            "description":"网络",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBC2ScramBtn",
            "description":"调整网络模式",
            "CaEType":"div",
            "classes":{
                "normal":"wizardAdjustBtnNormal","focus":"wizardAdjustBtnFocus",
                "disable":"wizardAdjustBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetDVBC2NetBtn","downTo":"settingChSetDVBC2ScanMNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBCScramTypeAdjustHandle"
            }
        },
        {
            "id":"settingChSetDVBC2ScanMTitle",
            "description":"搜台模式标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBC2ScanMValue",
            "description":"搜台模式",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDVBC2ScanMNav",
            "description":"搜台模式列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBC2ScanM",
                    "description":"搜台模式名称",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable",
                "disableDataSelected":"wizardSetItemListLi_3_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetDVBC2ScanM"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBC2ScramBtn","downTo":"settingChSetDVBC2SearMNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingChSetDVBC2ScanMode",
                "befDownHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "befUpHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "befLeftHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "befRightHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "aftDownHandler":"settingChSetDVBC2Nav3AddMarqueen",
                "aftUpHandler":"settingChSetDVBC2Nav3AddMarqueen",
                "aftLeftHandler":"settingChSetDVBC2Nav3AddMarqueen",
                "aftRightHandler":"settingChSetDVBC2Nav3AddMarqueen"
            }
        },
        {
            "id":"settingChSetDVBC2SearMTitle",
            "description":"搜索模式标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBC2SearMValue",
            "description":"搜索模式",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDVBC2SearMNav",
            "description":"搜索模式列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBC2SearM",
                    "description":"搜台模式名称",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable",
                "disableDataSelected":"wizardSetItemListLi_3_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetDVBC2SearM"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBC2ScanMNav","downTo":"settingChSetDVBC2FreInput","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingChSetDVBC2SearMode",
                "befDownHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "befUpHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "befLeftHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "befRightHandler":"settingChSetDVBC2Nav3LoseMarqueen",
                "aftDownHandler":"settingChSetDVBC2Nav3AddMarqueen",
                "aftUpHandler":"settingChSetDVBC2Nav3AddMarqueen",
                "aftLeftHandler":"settingChSetDVBC2Nav3AddMarqueen",
                "aftRightHandler":"settingChSetDVBC2Nav3AddMarqueen"
            }
        },
        {
            "id":"settingChSetDVBC2FreTitle",
            "description":"频率标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBC2FreValue",
            "description":"频率",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDVBC2FreInput",
            "description":"频率",
            "CaEType":"input",
            "classes":{
                "normal":"settingNumberInputNormal","focus":"settingNumberInputFocus","disable":"settingNumberInputDisable"
            },
            "nav":{
                "upTo":"settingChSetDVBC2SearMNav","downTo":"settingChSetDVBC2NetIDNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"invokeSKB"
            }
        },
        {
            "id":"settingChSetDVBC2NetIDTitle",
            "description":"网络ID标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBC2NetIDMValue",
            "description":"网络ID",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDVBC2NetIDNav",
            "description":"网络ID列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBC2NetID",
                    "description":"网络ID",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_2_Normal","focus":"wizardSetItemListLi_2_Focus",
                "dataSelected":"wizardSetItemListLi_2_Selected","disable":"wizardSetItemListLi_2_Disable",
                "disableDataSelected":"wizardSetItemListLi_2_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetDVBC2NetID"],
                "PageSize":2,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBC2FreInput","downTo":"settingChSetDVBC2LCNSwitch","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingChSetDVBC2NetworkType"
            }
        },
        {
            "id":"settingChSetDVBC2LCNTitle",
            "description":"LCN标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBC2LCNSwitch",
            "description":"LCN开关",
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "classes":{
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav":{
                "upTo":"settingChSetDVBC2NetIDNav","downTo":"settingChSetDVBC2NextBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingChSetDVBC2LCNSwitch"
            }
        },
        {
            "id":"settingChSetDVBC2PrvBtn",
            "description":"上一步",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetDVBC2LCNSwitch","downTo":"","leftTo":"","rightTo":"settingChSetDVBC2NextBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBC2ToMainPage"
            }
        },
        {
            "id":"settingChSetDVBC2NextBtn",
            "description":"完成",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetDVBC2LCNSwitch","downTo":"","leftTo":"settingChSetDVBC2PrvBtn","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBC2ToAutoPage"
            }
        }
    ];
    settingInitChSetDVBC2PageData();
    return settingChSetDVBC2PageData;
}
var settingChSetDVBC2PageData={
    "settingChSetDVBC2PageTitle":{"Data":"Search Setup"},
    "settingChSetDVBC2NetTitle":{"Data":"Operator:"},
    "settingChSetDVBC2NetValue":{"Data":"Others"},
    "settingChSetDVBC2NetBtn":{"Data":"Adjust",disable:true},
    "settingChSetDVBC2ScramTitle":{"Data":"Channel:"},
    "settingChSetDVBC2ScramValue":{"Data":"All Channels"},
    "settingChSetDVBC2ScramBtn":{"Data":"Adjust"},
    "settingChSetDVBC2SearMTitle":{"Data":"Search Mode:"},
    "settingChSetDVBC2SearMValue":{"Data":""},
    "settingChSetDVBC2SearMNav":{
        "Data":[
            {
                "settingChSetDVBC2SearM":{"Data":"Frequency Scan"}
            },
            {
                "settingChSetDVBC2SearM":{"Data":"Quick Scan"}
            },
            {
                "settingChSetDVBC2SearM":{"Data":"Advance Scan"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBC2ScanMTitle":{"Data":"Scan Mode:"},
    "settingChSetDVBC2ScanMValue":{"Data":"ATV+DTV"},
    "settingChSetDVBC2ScanMNav":{
        "Data":[
            {
                "settingChSetDVBC2ScanM":{"Data":"ATV"}
            },
            {
                "settingChSetDVBC2ScanM":{"Data":"DTV"}
            },
            {
                "settingChSetDVBC2ScanM":{"Data":"ATV+DTV"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBC2FreTitle":{"Data":"Frequency:","disable":false},
    "settingChSetDVBC2FreInput":{"Data":1400,"disable":false},
    "settingChSetDVBC2NetIDTitle":{"Data":"Network ID:","disable":false},
    "settingChSetDVBC2NetIDMValue":{"Data":"Auto","disable":false},
    "settingChSetDVBC2NetIDNav":{
        "Data":[
            {
                "settingChSetDVBC2NetID":{"Data":"Auto"}
            },
            {
                "settingChSetDVBC2NetID":{"Data":0}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disableItem":[],
        "disable":false

    },
    "settingChSetDVBC2LCNTitle":{"Data":"LCN:"},
    "settingChSetDVBC2LCNSwitch":{
        "Data":{
            switchType:true,
            switchText:'On'
        }

    },
    "settingChSetDVBC2PrvBtn":{"Data":"Back"},
    "settingChSetDVBC2NextBtn":{"Data":"Done"},
    "operateData":{
        "DVBCOperatorNum":0,
        "DVBCOperatorList":[],
        "operatorExistFlag":0,
        "currOperatorId":0,
        "currOperatorName":"Others",
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
        "currSearModeIdx":0,
        "searchModeMapList":[
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
        "searchModeSupport":[],
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
        "currNetworkFre":"1400",
        "networkId":0,
        "networkAutoFlag":0, //0:use,1:not use
        "LCNSwitchEnable":1,
        "LCNSwitch":0
    },
    "langData":{
        "Search Setup":["Search Setup"],
        "Operator:":["Operator:"],
        "Adjust":["Adjust"],
        "Scan Mode:":["Scan Mode:"],
        "ATV":["ATV"],
        "DTV":["DTV"],
        "ATV+DTV":["ATV+DTV"],
        "Search Mode:":["Search Mode:"],
        "Frequency Scan":["Frequency Scan"],
        "Quick Scan":["Quick Scan"],
        "Advance Scan":["Advance Scan"],
        "Channel:":["Channel:"],
        "All Channels":["All Channels"],
        "Free Channels":["All Channels"],
        "Frequency:":["Frequency:"],
        "Network ID:":["Network ID:"],
        "Others":["Others"],
        "LCN:":["LCN:"],
        "On":["On"],
        "Off":["Off"],
        "Back":["Back"],
        "Done":["Done"],
        "Auto":["Auto"]
    },
    rewrite:"settingRewriteChSetDVBC2Page"
}
function getSettingChSetDVBCOperator(){
    var data = settingChSetDVBC2PageData;
    if(tv == false){
        data.operateData.DVBCOperatorNum = 1;
        data.operateData.DVBCOperatorList = [
            {
                "operatorId":0,
                "operatorName":"Others",
                "selectedFlag":1,
                "recvType":0,
                "satelliteId":-1
            },
            {
                "operatorId":5,
                "operatorName":"Astra LCN",
                "selectedFlag":0,
                "recvType":0,
                "satelliteId":-1
            }
        ];
    }else{
//        data.operateData.DVBCOperatorNum = 1;
//        data.operateData.DVBCOperatorList = [
//            {
//                "operatorId":0,
//                "operatorName":"Others",
//                "selectedFlag":1,
//                "recvType":0,
//                "satelliteId":-1
//            }
//        ];
        var operatorList = model.channelSearch.getOperators();
        debugPrint("getSettingChSetDVBCOperator:"+operatorList.length+","+operatorList);
        data.operateData.DVBCOperatorNum = 0;
        data.operateData.DVBCOperatorList = [];
        if(operatorList.length % 5 != 0 || operatorList.length == 0){
            debugE("getSettingChSetDVBCOperator:operator info is error");
            data.operateData.DVBCOperatorNum = 1;
            data.operateData.DVBCOperatorList = [
                {
                    "operatorId":0,
                    "operatorName":"Others",
                    "selectedFlag":1,
                    "recvType":0,
                    "satelliteId":-1
                }
            ];
        }else{
            data.operateData.DVBCOperatorNum = operatorList.length/5;
            for(var i = 0; i <  data.operateData.DVBCOperatorNum; i++){
                var itemData = {
                    "operatorId":0,
                    "operatorName":"",
                    "selectedFlag":1,
                    "recvType":0,
                    "satelliteId":-1
                }
                itemData.operatorId = operatorList[i*5+0];
                itemData.operatorName = operatorList[i*5+1];
                itemData.selectedFlag = operatorList[i*5+2];
                itemData.recvType = operatorList[i*5+3];
                itemData.satelliteId = operatorList[i*5+4];
                data.operateData.DVBCOperatorList.push(itemData);
            }
        }
    }

}

/*******************************************************************
 name:settingInitChSetDVBC2PageData
 description:初始化DVBC第二部设置页
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBC2PageData(){
    try{
        var data = settingChSetDVBC2PageData;
        getSettingChSetDVBCOperator();

        if(data.operateData.DVBCOperatorNum > 1){
            data.operateData.operatorExistFlag = 1;
        }else{
            data.operateData.operatorExistFlag = 0;
        }
        for(var i = 0; i < data.operateData.DVBCOperatorNum; i++){
            if(data.operateData.DVBCOperatorList[i].selectedFlag == 1){
                data.operateData.currOperatorId = data.operateData.DVBCOperatorList[i].operatorId;
                data.operateData.currOperatorName = data.operateData.DVBCOperatorList[i].operatorName;
                break;
            }
        }
        if(tv == false){
            data.operateData.currScramModeIdx = 0;
            data.operateData.currSearModeIdx = 0;
            data.operateData.currScanModeIdx = 0;
            data.operateData.searchModeSupport = [0,1,2];
            data.operateData.currNetworkFre = 1400;
            data.operateData.networkId = 0;
            data.operateData.networkAutoFlag = 0;//use
            data.operateData.LCNSwitchEnable = 1;
            data.operateData.LCNSwitch = 0;
        }else{
            var currScramMode = model.channelSearch.getScramble();
            for(i = 0; i < data.operateData.scramModeMapList.length;i++){
                if(currScramMode == data.operateData.scramModeMapList[i].map){
                    data.operateData.currScramModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.scramModeMapList.length){
                debugPrint("settingInitDVBC2PageData:currScramMode="+currScramMode,DebugLevel.ERROR);
                model.channelSearch.setScramble(data.operateData.scramModeMapList[0].map);
                data.operateData.currScramModeIdx = 0;
            }
            data.operateData.searchModeSupport = model.channelSearch.getSearchModeSupport();
            debugG("settingInitChSetDVBC2PageData:searchModeSupport="+data.operateData.searchModeSupport);
            if(data.operateData.searchModeSupport.length == 0){
                debugE("settingInitChSetDVBC2PageData:search mode support is error!!");
                data.operateData.searchModeSupport=[0];
                model.channelSearch.setSearchMode(0);
            }
            var currSearMode = model.channelSearch.getSearchMode();
            if($.inArray(currSearMode,data.operateData.searchModeSupport) == -1){
                debugE("settingInitChSetDVBC2PageData:currSearMode not in support list");
                model.channelSearch.setSearchMode(data.operateData.searchModeSupport[0]);
                data.operateData.currSearModeIdx = 0;
            }for(var i=0; i < data.operateData.searchModeMapList.length;i++){
                if(currSearMode == data.operateData.searchModeMapList[i].map){
                    data.operateData.currSearModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.searchModeMapList.length){
                data.operateData.currSearModeIdx = 0;
                model.channelSearch.setSearchMode(data.operateData.searchModeMapList[0].map);
            }
            var currScanMode = model.channelSearch.getScanMode();
            debugE("settingInitChSetDVBC2PageData:currScanMode="+currScanMode);
            for(i=0; i < data.operateData.scanModeMapList.length;i++){
                if(currScanMode == data.operateData.scanModeMapList[i].map){
                    data.operateData.currScanModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.scanModeMapList.length){
                data.operateData.currScanModeIdx = 0;
                model.channelSearch.setScanMode(data.operateData.scanModeMapList[0].map);
            }
            data.operateData.currNetworkFre = model.channelSearch.getNetworkFrequency();
            data.operateData.networkAutoFlag = model.channelSearch.getNetworkAuto();//use
            data.operateData.networkId = model.channelSearch.getNetworkId();
            data.operateData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
            data.operateData.LCNSwitch = model.channelSearch.getLcn();
            DBG_ALWAYS("settingInitChSetDVBC2PageData:currNetworkFre="+data.operateData.currNetworkFre+",autoFlag="+ data.operateData.networkAutoFlag);
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBC2PageData"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDVBC2Page
 description:刷新DVBC2页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBC2Page(data){
    try{
        if(data.operateData.operatorExistFlag == 1){
            data.settingChSetDVBC2NetBtn.disable = false;
        }else{
            data.settingChSetDVBC2NetBtn.disable = true;
        }
        data.settingChSetDVBC2NetValue.Data = data.operateData.currOperatorName;
        data.settingChSetDVBC2ScramValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
        data.settingChSetDVBC2SearMNav.disableItem = [];
        $.each(data.operateData.searchModeMapList,function(idx,item){
            data.settingChSetDVBC2SearMNav.Data[idx].settingChSetDVBC2SearM.Data = item.name;
            if($.inArray(item.map,data.operateData.searchModeSupport) == -1){
                data.settingChSetDVBC2SearMNav.disableItem.push(item.map);
            }
        })
        data.settingChSetDVBC2SearMNav.DataSelectedIndex = data.operateData.currSearModeIdx;
        data.settingChSetDVBC2SearMNav.SelectedIndex = data.operateData.currSearModeIdx;
        data.settingChSetDVBC2SearMValue.Data =data.operateData.searchModeMapList[data.operateData.currSearModeIdx].name;


        $.each(data.operateData.scanModeMapList,function(idx,item){
            data.settingChSetDVBC2ScanMNav.Data[idx].settingChSetDVBC2ScanM.Data = item.name;
            if(idx == data.operateData.currScanModeIdx){
                data.settingChSetDVBC2ScanMNav.DataSelectedIndex = idx;
                data.settingChSetDVBC2ScanMNav.SelectedIndex = idx;
            }
        })
        data.settingChSetDVBC2ScanMValue.Data =
            data.settingChSetDVBC2ScanMNav.Data[data.settingChSetDVBC2ScanMNav.DataSelectedIndex].settingChSetDVBC2ScanM.Data;
        data.settingChSetDVBC2FreInput.Data = data.operateData.currNetworkFre;

        data.settingChSetDVBC2NetIDNav.Data[0].settingChSetDVBC2NetID.Data = "Auto";
        data.settingChSetDVBC2NetIDNav.Data[1].settingChSetDVBC2NetID.Data = data.operateData.networkId;
        if(data.operateData.networkAutoFlag == 1){
            data.settingChSetDVBC2NetIDNav.DataSelectedIndex = 0;
            data.settingChSetDVBC2NetIDNav.SelectedIndex = 0;
        }else{
            data.settingChSetDVBC2NetIDNav.DataSelectedIndex = 1;
            data.settingChSetDVBC2NetIDNav.SelectedIndex = 1;
        }

        data.settingChSetDVBC2NetIDMValue.Data=
            data.settingChSetDVBC2NetIDNav.Data[data.settingChSetDVBC2NetIDNav.DataSelectedIndex].settingChSetDVBC2NetID.Data;

        if(data.operateData.currOperatorId != 0){
            data.settingChSetDVBC2SearMTitle.disable = true;
            data.settingChSetDVBC2SearMValue.disable = true;
            data.settingChSetDVBC2SearMNav.disable = true;
            data.settingChSetDVBC2LCNTitle.disable = true;
            data.settingChSetDVBC2LCNSwitch.disable = true;

            data.settingChSetDVBC2FreTitle.disable = true;
            data.settingChSetDVBC2FreInput.disable = true;
            data.settingChSetDVBC2NetIDTitle.disable = true;
            data.settingChSetDVBC2NetIDMValue.disable = true;
            data.settingChSetDVBC2NetIDNav.disable = true;
        }else{

            debugPrint("settingRewriteChSetDVBC2Page:currOperatorId is 0");
            try{
                data.settingChSetDVBC2SearMTitle.disable = false;
                data.settingChSetDVBC2SearMValue.disable = false;
                data.settingChSetDVBC2SearMNav.disable = false;
                for(var i = 0; i < data.settingChSetDVBC2SearMNav.Data.length; i++){
                    data.settingChSetDVBC2SearMNav.Data[i].settingChSetDVBC2SearM.disable = false;
                }
                data.settingChSetDVBC2LCNTitle.disable = false;
                data.settingChSetDVBC2LCNSwitch.disable = false;
            }catch (ex){
                debugPrint("settingRewriteChSetDVBC2Page:"+ex.message,DebugLevel.ERROR);
            }

            switch (data.operateData.currSearModeIdx){
                case 0:
                    data.settingChSetDVBC2FreTitle.disable = true;
                    data.settingChSetDVBC2FreInput.disable = true;
                    data.settingChSetDVBC2NetIDTitle.disable = true;
                    data.settingChSetDVBC2NetIDMValue.disable = true;
                    data.settingChSetDVBC2NetIDNav.disable = true;
                    break;
                case 1:
                    data.settingChSetDVBC2FreTitle.disable = true;
                    data.settingChSetDVBC2FreInput.disable = true;
                    data.settingChSetDVBC2NetIDTitle.disable = false;
                    data.settingChSetDVBC2NetIDMValue.disable = false;
                    data.settingChSetDVBC2NetIDNav.disable = false;
                    for(var i = 0; i < data.settingChSetDVBC2NetIDNav.Data.length; i++){
                        data.settingChSetDVBC2NetIDNav.Data[i].settingChSetDVBC2NetID.disable = false;
                    }
                    break;
                case 2:
                    data.settingChSetDVBC2FreTitle.disable = false;
                    data.settingChSetDVBC2FreInput.disable = false;
                    data.settingChSetDVBC2NetIDTitle.disable = false;
                    data.settingChSetDVBC2NetIDMValue.disable = false;
                    data.settingChSetDVBC2NetIDNav.disable = false;
                    for(var i = 0; i < data.settingChSetDVBC2NetIDNav.Data.length; i++){
                        data.settingChSetDVBC2NetIDNav.Data[i].settingChSetDVBC2NetID.disable = false;
                    }
                    break;
                default :
                    break;
            }
        }
        if(data.operateData.LCNSwitch == 0){
            data.settingChSetDVBC2LCNSwitch.Data.switchType = false;
            data.settingChSetDVBC2LCNSwitch.Data.switchText = "";
        }else{
            data.settingChSetDVBC2LCNSwitch.Data.switchType = true;
            data.settingChSetDVBC2LCNSwitch.Data.switchText = "";
        }
        if(data.operateData.LCNSwitchEnable == 0){
            data.settingChSetDVBC2LCNSwitch.disable = true;
        }else{
            data.settingChSetDVBC2LCNSwitch.disable = false;
        }

    }catch (ex){
        debugPrint("settingRewriteChSetDVBC2Page"+ex.message,DebugLevel.ERROR)
    }
}
/*******************************************************************
 name:setSettingChSetDVBC2SearMode
 description:设置使用的搜索方式
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBC2SearMode(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingChSetDVBC2PageData;
        data.operateData.currSearModeIdx = this.DataSelectedIndex;
        if(tv == true){
            //设置使用方式
            model.channelSearch.onSearchModeChaged = settingChSetDVBC2SearchMChangeCallback;
            model.channelSearch.setSearchMode(data.operateData.searchModeMapList[this.SelectedIndex].map);
        }else{
            hiWebOsFrame.ChSetDVBC2Page.rewriteDataOnly();
        }

    }catch (ex){
        debugPrint("setSettingChSetDVBC2SearMode "+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetDVBC2Nav3LoseMarqueen(){
    var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[0].id;
    var txt = $("#"+currId+" marquee").html();
    if(!!txt){
        $("#"+currId).html(txt);
    }
}
function settingChSetDVBC2Nav3AddMarqueen(){
    var currId = $("#"+this.id+" li").eq(this.SelectedIndex).children()[0].id;
    var txt = $("#"+currId).html();
    if(txt.length > 18){
        $("#"+currId).html('<marquee>'+txt +'</marquee>');
    }
}
function settingChSetDVBC2SearchMChangeCallback(value){
    DBG_ALWAYS("settingChSetDVBC2SearchMChangeCallback:currSearchMode="+value);
    var data = settingChSetDVBC2PageData;
    var currSearMode = model.channelSearch.getSearchMode();
    for(var i=0; i < data.operateData.searchModeMapList.length;i++){
        if(currSearMode == data.operateData.searchModeMapList[i].map){
            data.operateData.currSearModeIdx = i;
            break;
        }
    }
    if(i == data.operateData.searchModeMapList.length){
        data.operateData.currSearModeIdx = 0;
        model.channelSearch.setSearchMode(data.operateData.searchModeMapList[0].map);
    }
    data.operateData.currNetworkFre = model.channelSearch.getNetworkFrequency();
    data.operateData.networkAutoFlag = model.channelSearch.getNetworkAuto();//use
    data.operateData.networkId = model.channelSearch.getNetworkId();
    hiWebOsFrame.ChSetDVBC2Page.rewriteDataOnly();
}
/*******************************************************************
 name:setSettingChSetDVBC2ScanMode
 description:设置使用的搜台方式
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBC2ScanMode(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingChSetDVBC2PageData;
        data.operateData.currScanModeIdx = this.DataSelectedIndex;
        if(tv == true){
            //设置使用方式
            debugPrint("setSettingChSetDVBC2ScanMode"+data.operateData.scanModeMapList[this.SelectedIndex].map,DebugLevel.ALWAYS);
            model.channelSearch.setScanMode(data.operateData.scanModeMapList[this.SelectedIndex].map);
        }
        hiWebOsFrame.ChSetDVBC2Page.rewriteDataOnly();
    }catch (ex){
        debugPrint("setSettingChSetDVBC2ScanMode:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetDVBC2NetworkType
 description:设置使用的网络ID类型
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBC2NetworkType(){
    try{
        var data = settingChSetDVBC2PageData;
        if(this.SelectedIndex == 0){
            this.DataSelectedIndex = this.SelectedIndex;
            data.operateData.networkAutoFlag = 1;
            if(tv == true){
                model.channelSearch.setNetworkAuto(1);
            }
            hiWebOsFrame.ChSetDVBC2Page.rewriteDataOnly();
        }else{
            //页面进行跳转到networkID输入界面
            hiWebOsFrame.createPage('settingChSetNetIdInputDialogId',null, this.page, null,function(a){
                hiWebOsFrame.ChSetNetIdInputDialog = a;
                a.open();
                a.hiFocus();
            });
        }
    }catch (ex){
        debugPrint("setSettingChSetDVBC2NetworkType:"+ex.message,DebugLevel.ERROR);
    }
}
function setSettingChSetDVBC2NetworkId(networkId){
    try{
        var data = settingChSetDVBC2PageData;
        data.operateData.networkId = networkId;
        data.operateData.networkAutoFlag = 0;
        if(tv == true){
            model.channelSearch.setNetworkAuto(data.operateData.networkAutoFlag);
            model.channelSearch.setNetworkId(parseInt(inputNetId));
        }
    }catch (ex){
        debugPrint("setSettingChSetDVBC2NetworkId:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetDVBC2LCNSwitch
 description:设置LCN开关
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBC2LCNSwitch(){
    try{
        var data = settingChSetDVBC2PageData;
        if(data.operateData.LCNSwitch == 0){
            data.operateData.LCNSwitch = 1;
        }else{
            data.operateData.LCNSwitch = 0;
        }
        hiWebOsFrame.ChSetDVBC2Page.rewriteDataOnly();
        if(tv == true){
            model.channelSearch.setLcn(data.operateData.LCNSwitch);
        }
    }catch (ex){
        debugPrint("setSettingChSetDVBC2LCNSwitch:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDVBC2ToAutoPage
 description:从DVBC设置主页DVBC信息展示页
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBC2ToAutoPage(){
    hiWebOsFrame.createPage('settingChSetDVBAutoPageId',null,null, null,function(a){
        hiWebOsFrame.ChSetDVBC2Page.close();
        hiWebOsFrame.ChSetDVBAutoPage = a;
        a.open();
        a.hiFocus("settingChSetDVBAutoStartBtn");
        hiWebOsFrame.ChSetDVBC2Page.destroy();
        hiWebOsFrame.ChSetMainPage.destroy();
    });
}
/*******************************************************************
 name:settingChSetDVBC2ToMainPage
 description:从设置DVBS第2部到设置主页
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBC2ToMainPage(){
    hiWebOsFrame.ChSetDVBC2Page.close();
    hiWebOsFrame.ChSetDVBC2Page.destroy();

    hiWebOsFrame.ChSetMainPage.open();
    hiWebOsFrame.ChSetMainPage.hiFocus();
}

/*******************************************************************
 name:settingChSetDVBCOperatorAdjustHandle
 description:修改DVBC运营商
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBCOperatorAdjustHandle(){
    hiWebOsFrame.createPage('settingChSetDVBCOperListDialogId',null, hiWebOsFrame.ChSetDVBC2Page, null,function(a){
        hiWebOsFrame.ChSetDVBCOperListDialog = a;
        a.open();
        a.hiFocus();
    });
}
function getSettingChSetDVBC2OperatorNum(){
    var data = settingChSetDVBC2PageData;
    return data.operateData.DVBCOperatorNum;
}
function getSettingChSetDVBC2OperatorList(){
    var data = settingChSetDVBC2PageData;
    return  data.operateData.DVBCOperatorList;
}
/*******************************************************************
 name:settingChSetRefreshDVBC2Operator
 description:修改DVBC运营商
 input:
 output:
 return
 *******************************************************************/
function settingChSetRefreshDVBC2Operator(operatorName,operatorId){
    debugPrint("settingChSetRefreshDVBC2Operator:operatorName="+operatorName+",operatorId="+operatorId);
    var data = settingChSetDVBC2PageData;
    for(var i = 0; i < data.operateData.DVBCOperatorNum; i++){
        if(data.operateData.DVBCOperatorList[i].selectedFlag == 1){
            data.operateData.DVBCOperatorList[i].selectedFlag = 0;
        }
        if(data.operateData.DVBCOperatorList[i].operatorId == operatorId){
            data.operateData.DVBCOperatorList[i].selectedFlag = 1;
            data.operateData.currOperatorName = operatorName;
            data.operateData.currOperatorId = operatorId;
        }
    }
    if(tv == true){
        data.operateData.searchModeSupport = model.channelSearch.getSearchModeSupport();
        debugG("settingChSetRefreshDVBC2Operator:searchModeSupport="+data.operateData.searchModeSupport);
        if(data.operateData.searchModeSupport.length == 0){
            debugE("settingChSetRefreshDVBC2Operator:search mode support is error!!");
            data.operateData.searchModeSupport=[0];
            model.channelSearch.setSearchMode(0);
        }
        var currSearMode = model.channelSearch.getSearchMode();
        if($.inArray(currSearMode,data.operateData.searchModeSupport) == -1){
            debugE("settingChSetRefreshDVBC2Operator:currSearMode not in support list");
            model.channelSearch.setSearchMode(data.operateData.searchModeSupport[0]);
            currSearMode = data.operateData.searchModeSupport[0];
        }
        for(var i=0; i < data.operateData.searchModeMapList.length;i++){
            if(currSearMode == data.operateData.searchModeMapList[i].map){
                data.operateData.currSearModeIdx = i;
                break;
            }
        }
        if(i == data.operateData.searchModeMapList.length){
            debugE("settingChSetRefreshDVBC2Operator:not found current map!!");
            data.operateData.currSearModeIdx = 0;
            model.channelSearch.setSearchMode(data.operateData.searchModeMapList[0].map);
        }

        var currScanMode = model.channelSearch.getScanMode();
        debugE("settingChSetRefreshDVBC2Operator:currScanMode="+currScanMode);
        for(i=0; i < data.operateData.scanModeMapList.length;i++){
            if(currScanMode == data.operateData.scanModeMapList[i].map){
                data.operateData.currScanModeIdx = i;
                break;
            }
        }
        if(i == data.operateData.scanModeMapList.length){
            data.operateData.currScanModeIdx = 0;
            model.channelSearch.setScanMode(data.operateData.scanModeMapList[0].map);
        }
        data.operateData.currNetworkFre = model.channelSearch.getNetworkFrequency();
        data.operateData.networkAutoFlag = model.channelSearch.getNetworkAuto();//use
        data.operateData.networkId = model.channelSearch.getNetworkId();
        data.operateData.LCNSwitch = model.channelSearch.getLcn();
    }
    hiWebOsFrame.ChSetDVBC2Page.rewriteDataOnly();
}

function settingChSetDVBCScramTypeAdjustHandle(){
    hiWebOsFrame.createPage('settingChSetScramListDialogId',null, hiWebOsFrame.ChSetDVBC2Page, null,function(a){
        hiWebOsFrame.ChSetScramListDialog = a;
        a.open();
        a.hiFocus();
    });
}
function getSettingChSetDVBC2ScramIdx(){
    var data = settingChSetDVBC2PageData;
    return data.operateData.currScramModeIdx;
}
function getSettingChSetDVBCScramMapList(){
    var data = settingChSetDVBC2PageData;
    return data.operateData.scramModeMapList;
}
function setSettingChSetDVBC2ScramModeIdx(idx){
    var data = settingChSetDVBC2PageData;
    data.operateData.currScramModeIdx = idx;
    if(tv == true){
        model.channelSearch.setScramble(data.operateData.scramModeMapList[idx].map);
    }
    hiWebOsFrame.ChSetDVBC2Page.rewriteDataOnly();
}
function settingChSetDVBC2PageOnOpen(){
    var data = settingChSetDVBC2PageData;
    if(data.operateData.DVBCOperatorNum == 1){
        hiWebOsFrame.ChSetDVBC2Page.firstFocusId = "settingChSetDVBC2ScramBtn"
    }else{
        hiWebOsFrame.ChSetDVBC2Page.firstFocusId = "settingChSetDVBC2NetBtn"

    }
}

function settingChSetDVBC2PageOnDestroy(){
    hiWebOsFrame.ChSetDVBC2Page = null;
}
