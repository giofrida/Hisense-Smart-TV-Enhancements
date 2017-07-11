/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetAutoScanPageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetAutoScanItemTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingChSetRecTypeTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetRecTypeValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoScanLeftImg",
            "description":"left arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetNetworkTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetNetworkValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id": "settingChSetAutoScanSatelliteList",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSetAutoScanLeftDiv", "focus": "settingChSetAutoScanLeftDiv",
                "dataSelected":"settingChSetAutoScanLeftDiv","disable":"settingChSetAutoScanLeftDiv"
            },
            "handler": {
                "aftEnterHandler": "",
                "befRightHandler":"",
                "befLeftHandler":""
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetSatelliteTitle",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetAutoScanSetItemTitle"
                    }
                },
                {
                    "id": "settingChSetSatelliteValue",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetAutoScanItemValue"
                    }
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetSatelliteTitle", "settingChSetSatelliteValue"]
            }
        },
        {
            "id":"settingChSetChannelTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChannelValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetScanModeTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetScanModeValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSearchModeTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSearchModeValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetLCNTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetLCNValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChannelScanTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetATVTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetATVValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChannelScanPercentValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSignalQualityTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSignalLevelTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChannelScanProgressBar",
            "description":"搜台进度",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetChannelScanProgressing",
                    "description": "进度条",
                    "CaEType": "div"
                }
            ],
            "classes":{
                "normal":"settingChSetAutoScanProFrame"
            },
            "ProgressBarConfig": {
                PBProcessId: "settingChSetChannelScanProgressing",//进度条的进程id
                ShowTextId: "settingChSetChannelScanPercentValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 536,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id":"settingChSetSignalQualityProgressBar",
            "description":"信号质量进度",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetSignalQualityProgressing",
                    "description": "进度条",
                    "CaEType": "div"
                }
            ],
            "classes":{
                "normal":"settingChSetAutoScanProFrame"
            },
            "ProgressBarConfig": {
                PBProcessId: "settingChSetSignalQualityProgressing",//进度条的进程id
                ShowTextId: "",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 536,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id":"settingChSetSignalLevelProgressBar",
            "description":"信号水平进度",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetSignalLevelProgressing",
                    "description": "进度条",
                    "CaEType": "div"
                }
            ],
            "classes":{
                "normal":"settingChSetAutoScanProFrame"
            },
            "ProgressBarConfig": {
                PBProcessId: "settingChSetSignalLevelProgressing",//进度条的进程id
                ShowTextId: "",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 536,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id":"settingChSetAutoScanChangeBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"settingChSetAutoScanBtnNormal","focus":"settingChSetAutoScanBtnFocus","disable":"settingChSetAutoScanBtnDisable"
            },
            "nav":{
                "rightTo":"settingChSetAutoScanRescanBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetChScanToTMPage",
                "befLeftHandler":"settingChSetAutoScanPageEscHandle"
            },
            "onFocusFun":"settingChSetDVBAutoScanAddMarquee",
            "onBlurFun":"settingChSetDVBAutoScanDelMarquee"
        },
        {
            "id":"settingChSetAutoScanRescanBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"settingChSetAutoScanBtnNormal","focus":"settingChSetAutoScanBtnFocus","disable":"settingChSetAutoScanBtnDisable"
            },
            "nav":{
                "leftTo":"settingChSetAutoScanChangeBtn",
                "rightTo":"settingChSetAutoScanDoneBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetReStartChScan"
            },
            "onFocusFun":"settingChSetDVBAutoScanAddMarquee",
            "onBlurFun":"settingChSetDVBAutoScanDelMarquee"
        },
        {
            "id":"settingChSetAutoScanDoneBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"settingChSetAutoScanBtnNormal","focus":"settingChSetAutoScanBtnFocus","disable":"settingChSetAutoScanBtnDisable"
            },
            "nav":{
                "leftTo":"settingChSetAutoScanRescanBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetStopChScan"
            },
            "onFocusFun":"settingChSetDVBAutoScanAddMarquee",
            "onBlurFun":"settingChSetDVBAutoScanDelMarquee"
        }

    ];
    settingInitChSetAutoScanPage();
    return settingChSetAutoScanPageData;
}
var settingChSetAutoScanPageData={
    "settingChSetAutoScanItemTitle":{"Data":"Auto Scan"},
    "settingChSetAutoScanLeftImg":{"Data":"img/channel_left_arrow.png"},
    "settingChSetRecTypeTitle":{"Data":"Reception"},
    "settingChSetRecTypeValue":{"Data":""},
    "settingChSetNetworkTitle":{"Data":"Operator"},
    "settingChSetNetworkValue":{"Data":""},
    "settingChSetAutoScanSatelliteList":{
        "Data":[
            {
                "settingChSetSatelliteTitle":{"Data":""},
                "settingChSetSatelliteValue":{"Data":""}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetChannelTitle":{"Data":"Channel"},
    "settingChSetChannelValue":{"Data":""},
    "settingChSetScanModeTitle":{"Data":"Scan Mode"},
    "settingChSetScanModeValue":{"Data":""},
    "settingChSetSearchModeTitle":{"Data":"Search Mode"},
    "settingChSetSearchModeValue":{"Data":""},
    "settingChSetLCNTitle":{"Data":"LCN"},
    "settingChSetLCNValue":{"Data":""},
    "settingChSetChannelScanTitle":{"Data":"Progress"},
    "settingChSetDTVTitle":{"Data":"DTV"},
    "settingChSetDTVValue":{"Data":5},
    "settingChSetATVTitle":{"Data":"ATV"},
    "settingChSetATVValue":{"Data":5},
    "settingChSetChannelScanPercentValue":{"Data":""},
    "settingChSetSignalQualityTitle":{"Data":"Signal Quality"},
    "settingChSetSignalLevelTitle":{"Data":"Signal Level"},
    "settingChSetChannelScanProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "settingChSetSignalQualityProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "settingChSetSignalLevelProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "settingChSetAutoScanChangeBtn":{"Data":"Change Setup","disable":true},
    "settingChSetAutoScanRescanBtn":{"Data":"Rescan","disable": true},
    "settingChSetAutoScanDoneBtn":{"Data":"Done"},
    "operateData":{
        "chScanState":0, //0:正在搜台,1:搜台完成
        "currTunerMode":0,//0:DVBT,1:DVBC,2:DVBS
        "currChNumber":"",
        "currPercent":0,
        "totalChannelNum":0,
        "analogChannelNum":0,
        "digitChannelNum":0,
        "searchTimer":"",
        "SignalQualityValue": 80,
        "SignalLevelValue":80,
        "signalInfoTimer":"",
        "needRefreshChannelListFlag": 0,//0:不需要刷新列表，1：需要刷新列表
        "currScanMode":0, //0:DTV,1:ATV,2:DTV+ATV
        "currScanModeNum":0,
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
        "currDVBOperatorName":"Others",
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
        "Single Satellite":[],
        "Tone Burst A":[],
        "Tone Burst B":[],
        "DiSeqc A":[],
        "DiSeqc B":[],
        "DiSeqc C":[],
        "DiSeqc D":[],
        "Unicable A":[],
        "Unicable B":[],
        "LCN":["LCN"],
        "On":["On"],
        "Off":["Off"],
        "Setup":["Setup"],
        "Start":["Start"],
        "Rescan":[],
        "Progress":[],
        "Change Setup":[],
        "Others":["Others"],
        "Signal Quality":[],
        "Signal Level":[],
        "Change Setup":[],
        "Rescan":[],
        "Done":[]
    },
    rewrite:"settingRewriteChSetChScanPage"
}
/*******************************************************************
 name:settingInitChSetAutoScanPage
 description:初始化OperateData
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetAutoScanPage(){
    try{
        debugPrint("---EU--- settingInitChSetAutoScanPage",DebugLevel.ALWAYS);
        var data = settingChSetAutoScanPageData;
        var opData = settingChSetAutoScanPageData.operateData;
        data.operateData.totalChannelNum = 0;
        data.operateData.currPercent = 0;
        data.operateData.analogChannelNum = 0;
        data.operateData.digitChannelNum = 0;
        data.operateData.chScanState = 0;
        data.operateData.needRefreshChannelListFlag = 0;
        data.operateData.currScanModeNum = 0;
        if(tv == false){
            data.operateData.currTunerMode = 0;
            data.operateData.currScanMode = 0;
            data.operateData.currScanModeIdx = 2;
            data.operateData.currTunerModeIdx = 1;
            data.operateData.selectedSatelliteList=[
                {
                    "id":"0","name":"satellite1","title":"satellite"
                },
                {
                    "id":"0","name":"satellite1","title":"satellite"
                },
                {
                    "id":"0","name":"satellite1","title":"satellite"
                },
                {
                    "id":"0","name":"satellite1","title":"satellite"
                }
            ]
        }else{
            //获取公共设置项
            //tuner Mode
            data.operateData.currTunerMode = model.channelSearch.getSource();
            debugPrint("settingInitChSetAutoScanPage:"+data.operateData.currTunerMode,DebugLevel.ALWAYS);
            for(var i = 0; i < data.operateData.tunerModeMapList.length;i++){
                if(data.operateData.currTunerMode == data.operateData.tunerModeMapList[i].map){
                    data.operateData.currTunerModeIdx = i;
                    break;
                }
            }
            //加密方式
            var currScramFlag = model.channelSearch.getScramble();
            for(var i = 0; i < data.operateData.scramModeMapList.length; i++){
                if(currScramFlag == data.operateData.scramModeMapList[i].map){
                    data.operateData.currScramModeIdx = i;
                    break;
                }
            }
            if(i == opData.scramModeMapList.length){
                data.operateData.currScramModeIdx = 0;
                model.channelSearch.setScramble(opData.scramModeMapList[0].map);
            }
            //LCN
            opData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
            if(opData.LCNSwitchEnable == 1){
                data.operateData.currLcnSwitch = model.channelSearch.getLcn();
            }else{
                data.operateData.currLcnSwitch = 0;
            }
            if(opData.currTunerMode == 2){
                getChSetEUAutoScanDVBSItem();
            }else if(opData.currTunerMode == 0){
                getChSetEUAutoScanDVBTItem();
            }else{
                getChSetEUAutoScanDVBCItem();
            }

//            data.operateData.SignalQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
//            data.operateData.SignalLevelValue = model.tvservice.getSignalMainLevels();
        }
//        data.operateData.signalInfoTimer = setInterval(settingChSetAutoScanSignalInfoTimeOut,2000);
    }catch (ex){
        debugPrint("settingInitChSetAutoScanPage"+ex.message,DebugLevel.ERROR);
    }
}
function getChSetEUAutoScanDVBSItem(){
    var data = settingChSetAutoScanPageData;
    var opData = settingChSetAutoScanPageData.operateData;
    opData.selectedSatelliteList =[];
    opData.currScanMode = 1;//DVBS时只搜索DTV
    var selectSatelliteIdList = model.satellite.getSelectedIdList();
    var selectSatelliteNameList = model.satellite.getSelectedNameList();
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
            model.satellite.setInstallation(0);//默认设置为single模式
            selectSatelliteIdList = model.satellite.getSelectedIdList();
            selectSatelliteNameList = model.satellite.getSelectedNameList();
            data.operateData.selectedSatelliteList[0].id = selectSatelliteIdList[0];
            data.operateData.selectedSatelliteList[0].name =  selectSatelliteNameList[0];
            data.operateData.selectedSatelliteList[0].title = "Single Satellite";
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
    getChSetEUAutoScanOperatorName();

}
function getChSetEUAutoScanDVBTItem(){
    var data = settingChSetAutoScanPageData;
    var opData = settingChSetAutoScanPageData.operateData;
    data.operateData.currScanMode = model.channelSearch.getScanMode();
    for(var i = 0; i < data.operateData.scanModeMapList.length; i++){
        if(data.operateData.currScanMode == data.operateData.scanModeMapList[i].map){
            data.operateData.currScanModeIdx = i;
            break;
        }
    }
}
function getChSetEUAutoScanDVBCItem(){
    var data = settingChSetAutoScanPageData;
    var opData = settingChSetAutoScanPageData.operateData;
    data.operateData.currScanMode = model.channelSearch.getScanMode();
    for(var i = 0; i < data.operateData.scanModeMapList.length; i++){
        if(data.operateData.currScanMode == data.operateData.scanModeMapList[i].map){
            data.operateData.currScanModeIdx = i;
            break;
        }
    }
    getChSetEUAutoScanOperatorName();

    data.operateData.DVBCSearchModeSupport = model.channelSearch.getSearchModeSupport();
    debugG("settingInitChSetAutoScanPage:DVBCSearchModeSupport="+data.operateData.DVBCSearchModeSupport);
    if(data.operateData.DVBCSearchModeSupport.length == 0){
        debugE("settingInitChSetAutoScanPage:search mode support is error!!");
        data.operateData.DVBCSearchModeSupport=[0];
        model.channelSearch.setSearchMode(0);
    }
    var currDVBCSearMode = model.channelSearch.getSearchMode();
    DBG_INFO("settingInitChSetAutoScanPage:currDVBCSearMode="+currDVBCSearMode);
    if($.inArray(currDVBCSearMode,data.operateData.DVBCSearchModeSupport) == -1){
        debugE("settingInitChSetAutoScanPage:currSearMode not in support list");
        model.channelSearch.setSearchMode(data.operateData.DVBCSearchModeSupport[0]);
        data.operateData.currDVBCSearchModeIdx = 0;
    }
    for(var i=0; i < data.operateData.DVBCSearchModeMapList.length;i++){
        if(currDVBCSearMode == data.operateData.DVBCSearchModeMapList[i].map){
            data.operateData.currDVBCSearchModeIdx = i;
            break;
        }
    }
}

function getChSetEUAutoScanOperatorName(){
    var data = settingChSetAutoScanPageData;
    data.operateData.currDVBOperatorName = "Others";
    var operatorList = model.channelSearch.getOperators();
    debugPrint("settingInitChSetAutoScanPage:"+operatorList.length+","+operatorList);
    if(operatorList.length % 5 != 0 || operatorList.length == 0){
        debugE("settingInitChSetAutoScanPage:operator info is error");
    }else{
        var DVBOperatorNum = operatorList.length/5;
        for(var i = 0; i <  DVBOperatorNum; i++){
            if(operatorList[i*5+2] == 1){
                data.operateData.currDVBOperatorName = operatorList[i*5+1];
                break;
            }
        }
        if(i == DVBOperatorNum){
            debugE("settingInitChSetAutoScanPage:can't find operator!!");
        }
    }
}
/*******************************************************************
 name:settingRewriteChSetChScanPage
 description:刷新频道搜索页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetChScanPage(data){
    try{
        var data = settingChSetAutoScanPageData;
        var opData = settingChSetAutoScanPageData.operateData;
//        data.settingChSetAutoScanTotalValue.Data = data.operateData.totalChannelNum;
        data.settingChSetRecTypeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;
        data.settingChSetChannelValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;
        if(data.operateData.currLcnSwitch == 0||data.operateData.LCNSwitchEnable==0){
            data.settingChSetLCNValue.Data = "Off";
        }else{
            data.settingChSetLCNValue.Data = "On";
        }
        if(data.operateData.currTunerModeIdx == 1){
            data.settingChSetScanModeValue.Data = data.operateData.scanModeMapList[data.operateData.currScanModeIdx].name;
            data.settingChSetNetworkValue.Data = data.operateData.currDVBOperatorName;
            data.settingChSetSearchModeValue.Data = data.operateData.DVBCSearchModeMapList[data.operateData.currDVBCSearchModeIdx].name;
        }else if(data.operateData.currTunerModeIdx == 2){
            data.settingChSetNetworkValue.Data = data.operateData.currDVBOperatorName;
            data.settingChSetSearchModeValue.Data = data.operateData.DVBSSearchModeMapList[data.operateData.currDVBSSearchModeIdx].name;
            data.settingChSetAutoScanSatelliteList.Data = [];
            for(var i = 0; i < opData.selectedSatelliteList.length;i ++){
                var item = {
                    "settingChSetSatelliteTitle":{"Data":opData.selectedSatelliteList[i].title},
                    "settingChSetSatelliteValue":{"Data":opData.selectedSatelliteList[i].name}
                }
                data.settingChSetAutoScanSatelliteList.Data.push(item);
            }
        }else{
            data.settingChSetScanModeValue.Data = data.operateData.scanModeMapList[data.operateData.currScanModeIdx].name;
        }
        data.settingChSetATVValue.Data = data.operateData.analogChannelNum;
        data.settingChSetDTVValue.Data = data.operateData.digitChannelNum;
        if(data.operateData.chScanState == 0){
            data.settingChSetAutoScanDoneBtn.Data = "Stop";
            data.settingChSetAutoScanChangeBtn.disable = true;
            data.settingChSetAutoScanRescanBtn.disable = true;
        }else{
            data.settingChSetAutoScanDoneBtn.Data = "Done";
            data.settingChSetAutoScanChangeBtn.disable = false;
            data.settingChSetAutoScanRescanBtn.disable = false;
        }
        data.settingChSetChannelScanProgressBar.DefaultValue = data.operateData.currPercent;
        data.settingChSetChannelScanPercentValue.Data = data.operateData.currPercent;

    }catch (ex){
        debugPrint("settingRewriteChSetChScanPage:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetStartChScan
 description:页面创建后启动搜索
 input:
 output:
 return
 *******************************************************************/
function settingChSetStartChScan(){
    try{

        var data = settingChSetAutoScanPageData;

        if(tv == false){
            data.operateData.searchTimer = setInterval(testProgressBar,100);
        }
        else{
            data.operateData.needRefreshChannelListFlag = 1;
            debugPrint("settingChSetStartChScan:start scan!currScanMode="+data.operateData.currScanMode,DebugLevel.ALWAYS);
            if(data.operateData.currScanMode == 1 || data.operateData.currScanMode == 2){ //DTV或者ATV+DTV
                model.channelSearch.Start(0);//dtv
            }else{
                model.channelSearch.Start(1);//atv
            }
            data.operateData.currScanModeNum = data.operateData.currScanModeNum + 1;
            debugPrint("settingChSetStartChScan:currScanMode="+data.operateData.currScanMode+",currScanModeNum="+data.operateData.currScanModeNum,DebugLevel.ERROR);
        }
    }catch (ex){
        debugPrint("settingChSetStartChScan: "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetReStartChScan
 description:页面重新启动搜索
 input:
 output:
 return
 *******************************************************************/
function settingChSetReStartChScan(){
    try{
        var data = settingChSetAutoScanPageData;
        data.operateData.analogChannelNum = 0;
        data.operateData.digitChannelNum = 0;
        data.operateData.currPercent = 0;
        data.operateData.chScanState = 0;
        data.operateData.currScanModeNum = 0;
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
        hiWebOsFrame.ChSetChannelScanPage.hiFocus("settingChSetAutoScanDoneBtn");
        settingChSetStartChScan();
    }catch (ex){
        debugPrint("settingChSetReStartChScan: "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:testProgressBar
 description:测试电脑方式搜台进度
 input:method:
 output:
 return
 *******************************************************************/
function testProgressBar(){
    var data = settingChSetAutoScanPageData;
    data.operateData.analogChannelNum = data.operateData.analogChannelNum+1;
    data.operateData.digitChannelNum = data.operateData.digitChannelNum+2;
    data.operateData.currPercent += 1;
    if(data.operateData.currPercent >= 100){
        data.operateData.chScanState = 1;
        settingChSetAutoCreateDVBTAreaList();
        clearInterval(data.operateData.searchTimer);
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
    }
    var _this = hiWebOsFrame.ChSetChannelScanPage.getCaE('settingChSetChannelScanProgressBar');
    _this.running_value = data.operateData.currPercent;
    _this.setvalue(_this.running_value);
//    hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();

}
function getChSetAutoScanSignalInfo(){
    var data = settingChSetAutoScanPageData;
    if(tv == false){
        data.operateData.SignalQualityValue = data.operateData.SignalQualityValue-1;
        data.operateData.SignalLevelValue = data.operateData.SignalLevelValue - 1;
    }else{
        data.operateData.SignalQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
        data.operateData.SignalLevelValue = model.tvservice.getSignalMainLevels();
        DBG_ALWAYS("getChSetAutoScanSignalInfo:SignalQuality="+data.operateData.SignalQualityValue+",Level="+data.operateData.SignalLevelValue);
    }
}
function settingChSetAutoScanSignalInfoTimeOut(){
    try{
        getChSetAutoScanSignalInfo();
        var data = settingChSetAutoScanPageData;
        var levelId = "settingChSetSignalLevelProgressBar";
        var qualityId = "settingChSetSignalQualityProgressBar";
        //更新Level进度条
        var _this = hiWebOsFrame.ChSetChannelScanPage.getCaE(levelId);
        _this.running_value = data.operateData.SignalLevelValue;
        _this.setvalue(_this.running_value);

        //更新Quality进度条
        var _this = hiWebOsFrame.ChSetChannelScanPage.getCaE(qualityId);
        _this.running_value =  data.operateData.SignalQualityValue;
        _this.setvalue(_this.running_value);
    }catch (ex){
        debugE("settingChSetAutoScanSignalInfoTimeOut:"+ex.message);
    }
//        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
}
/*******************************************************************
 name:settingChSetStopChScan
 description:停止搜索
 input:
 output:
 return
 *******************************************************************/
function settingChSetStopChScan(){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChSetStopChScan:chScanState="+data.operateData.chScanState,DebugLevel.ALWAYS);
        if(tv == false){
            if(data.operateData.chScanState == 0){
                clearInterval(data.operateData.searchTimer);
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
//                settingChSetAutoCreateDVBTAreaList();
                settingChSetAutoCreateDVBTLCNList();
            }else{
                settingChSetChScanToSettingPage();
            }
        }else{
            if(data.operateData.chScanState == 0){
                debugPrint("settingChSetStopChScan stop!!!!!!!!!!!!!!!",DebugLevel.ALWAYS);
                //正在搜索,取消搜索
                model.channelSearch.Stop();
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                var currCountry = model.basicSetting.getTvsetLocation();
                DBG_INFO("settingChSetStopChScan:"+data.operateData.currTunerMode+","+currCountry);
                if(data.operateData.currTunerMode == 0 && data.operateData.digitChannelNum > 0){
                    var currListInfo = [];
                    if(currCountry == "GBR"){
                        currListInfo = model.channelSearch.getUkArea();
                        DBG_ALWAYS("settingChSetStopChScan:"+currListInfo);
                    }else if(currCountry == "ITA"){
                        currListInfo = model.channelSearch.getLcnConflict();
                        DBG_ALWAYS("settingChSetStopChScan:"+currListInfo);
                    }

                    if(currListInfo.length > 0){
                        if(currCountry == "GBR"){
                            settingChSetAutoCreateDVBTAreaList();
                        }else{
                            settingChSetAutoCreateDVBTLCNList();
                        }
                    }
                }
            }else{
                if(model.channelSearch.getRunning() == 1){
                    debugPrint("settingChSetStopChScan:not stoped,error!",DebugLevel.ERROR);
                    model.channelSearch.Stop();
                }
//                if(this.page.origin.module == "livetv"){
//                    debugPrint("wizardChScanStopScan:origin page is blankPage",DebugLevel.ALWAYS);
//                    //返回到blankPage页面
//                    settingChSetChScanToBlankPage();
//                }else{
//                    //返回到setting页面
//                    settingChSetChScanToSettingPage();
//                }
                settingChSetChScanToBlankPage();
            }
        }

    }catch (ex){
        debugPrint("settingChSetStopChScan"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetChScanToSettingPage
 description:从搜索频道页进入setting
 input:
 output:
 return
 *******************************************************************/
function settingChSetChScanToSettingPage(){
    try{
        hiWebOsFrame.ChSetChannelScanPage.close();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.ChSetChannelScanPage.destroy();
    }catch (ex){
        debugPrint("settingChSetChScanToSettingPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetChScanToBlankPage(){
    try{
        hiWebOsFrame.settingsFirst.close();
        hiWebOsFrame.ChSetChannelScanPage.close();
        tryToCloseLauncher();
        tryToCloseAllApps();
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        //hiWebOsFrame.ChSetChannelScanPage.destroy();
        closePagesOrModuleByPage(hiWebOsFrame.ChSetChannelScanPage);
    }catch (ex){
        debugPrint("settingChSetChScanToBlankPage:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetChScanToTMPage(){
    hiWebOsFrame.createPage('settingChSetTunerModePageId',null, null, null,function(a){
        hiWebOsFrame.ChSetTunerModePage = a;
        hiWebOsFrame.ChSetChannelScanPage.close();
        a.open();
        a.hiFocus();
        hiWebOsFrame.ChSetChannelScanPage.destroy();
    });
}
/*******************************************************************
 name:settingChScanProgressChangeCallBack
 description:监控搜台状态
 input:state:当前搜台状态
 output:
 return
 *******************************************************************/
function settingChScanProgressChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanProgressChangeCallBack:"+"percent:"+value+",currScanMode="+data.operateData.currScanMode+",currScanModeNum="+data.operateData.currScanModeNum,DebugLevel.ALWAYS);
        if(data.operateData.currScanMode == 2 && data.operateData.currScanModeNum == 1){
            data.operateData.currPercent = value/2;
        }else if(data.operateData.currScanMode == 2 && data.operateData.currScanModeNum == 2){
            data.operateData.currPercent = 50 + value/2;
        }else{
            data.operateData.currPercent = value;
        }
//        data.operateData.currPercent = value;
//        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
        
    }catch(ex){
        debugPrint("settingChScanProgressChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChScanDigitServicesChangeCallBack
 description:监控数字台变化
 input:state:当前搜索到的数字信号的个数
 output:
 return
 *******************************************************************/
function settingChScanDigitServicesChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanDigitServicesChangeCallBack:digitChannelNum="+value);
        data.operateData.digitChannelNum = value;
        data.operateData.totalChannelNum = data.operateData.analogChannelNum+data.operateData.digitChannelNum;
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
    }catch(ex){
        debugPrint("settingChScanDigitServicesChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChScanAnalogServicesChangeCallBack
 description:监控模拟型号变化
 input:state:当前搜索到的模拟信号的个数
 output:
 return
 *******************************************************************/
function settingChScanAnalogServicesChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanAnalogServicesChangeCallBack:analogChannelNum="+value);
        data.operateData.analogChannelNum = value;
        data.operateData.totalChannelNum = data.operateData.analogChannelNum+data.operateData.digitChannelNum;
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
    }catch(ex){
        debugPrint("settingChScanAnalogServicesChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChScanStateChangeCallBack
 description:搜台状态变化
 input:state:搜台状态
 output:
 return
 *******************************************************************/
function settingChScanStateChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanStateChangeCallBack:"+value+","+data.operateData.currScanMode+","+data.operateData.currScanModeNum,DebugLevel.ALWAYS);
        switch (value){
            case 1://complete
                if(data.operateData.currScanMode == 2 && data.operateData.currScanModeNum < 2){
                    model.channelSearch.Start(1);
                    data.operateData.currScanModeNum = data.operateData.currScanModeNum + 1;
                }else{
                    data.operateData.chScanState = 1;
//                    model.channelSearch.onProgressChaged = null;
                    hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                    var currCountry = model.basicSetting.getTvsetLocation();
                    DBG_ALWAYS("settingChScanStateChangeCallBack:"+data.operateData.currTunerMode+","+currCountry);
                    var currListInfo = [];

                    if(data.operateData.currTunerMode == 0 && data.operateData.digitChannelNum > 0){
                        if(currCountry == "GBR"){
                            currListInfo = model.channelSearch.getUkArea();
                            DBG_ALWAYS("settingChScanStateChangeCallBack:"+currListInfo);
                        }else if(currCountry == "ITA"){
                            currListInfo = model.channelSearch.getLcnConflict();
                            DBG_ALWAYS("settingChScanStateChangeCallBack:"+currListInfo);
                        }
                    }
                    if(currListInfo.length > 0){
                        if(currCountry == "GBR"){
                            settingChSetAutoCreateDVBTAreaList();
                        }else{
                            settingChSetAutoCreateDVBTLCNList();
                        }
                    }else{
                        data.operateData.needRefreshChannelListFlag = 0;
                        refreshChListAftSearchChannel();
                    }
                }

                break;
            case 2://searching
                break;
            case 4://cancel
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                break;
            default :
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                break;
        }
    }catch(ex){
        debugPrint("settingChScanStateChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetAutoCreateDVBTAreaList(){
    hiWebOsFrame.createPage("settingChSetDVBTUKAreaListDialogId",null,hiWebOsFrame.ChSetChannelScanPage,null,function(a){
        hiWebOsFrame.ChSetDVBTUKAreaListDialog = a;
        a.open();
        a.hiFocus();
    })
}
function settingChSetAutoCreateDVBTLCNList(){
    hiWebOsFrame.createPage("settingChSetDVBTLCNListDialogId",null,hiWebOsFrame.ChSetChannelScanPage,null,function(a){
        hiWebOsFrame.ChSetDVBTLCNListDialog = a;
        a.open();
        a.hiFocus();
    })
}
function settingChSetDVBAutoScanDelMarquee(){
    //  DelMarquee
    var marquee = $("#"+this.id +" marquee");
    if (marquee.length > 0) {
        var htmlText = $("#"+this.id + " marquee").html();
        var marquee = $("#"+this.id ).html(htmlText);
    }
}
function settingChSetDVBAutoScanAddMarquee(){
    //AddMarquee
    var htmlText = $("#"+this.id).html();
    if (htmlText.length > 15) {
        $("#"+this.id).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
}

function settingChSetAutoScanPageEscHandle(){
    var opData = settingChSetAutoScanPageData.operateData;
    if(opData.chScanState == 1){
        hiWebOsFrame.ChSetChannelScanPage.close();
        hiWebOsFrame.settingsFirst.open();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.ChSetChannelScanPage.destroy();
    }
}
function settingChSetAutoScanPageOnOpen(){
    try{
        var data = settingChSetAutoScanPageData;
        $("#settingChSetSignalQualityTitle").css("display","none");
        $("#settingChSetSignalQualityProgressBar").css("display","none");
        $("#settingChSetSignalLevelTitle").css("display","none");
        $("#settingChSetSignalLevelProgressBar").css("display","none");

        if(data.operateData.currTunerMode == 0){// DVBT
            $("#settingChSetAutoScanSatelliteList").css("display","none");
            $("#settingChSetAutoScanNetwork").css("display","none");
            $("#settingChSetSearchMode").css("display","none");
        }else if(data.operateData.currTunerMode == 1){ //DVBC
            $("#settingChSetAutoScanSatelliteList").css("display","none");
        }else if(data.operateData.currTunerMode == 2)  //DVBS
        {
            $("#settingChSetAutoScanScanMode").css("display","none");
        }
        if(data.operateData.LCNSwitchEnable == 0){
            $("#settingChSetEUAutoScanLcnCon").css("display","none");
        }
        if(data.operateData.currScanMode == 0){
            $("#settingChSetDTVText").css("display","none");
            $("#settingChSetATVText").css("display","block");
        }else if(data.operateData.currScanMode == 1){
            $("#settingChSetDTVText").css("display","block");
            $("#settingChSetATVText").css("display","none");
        }else if(data.operateData.currScanMode == 2){
            $("#settingChSetDTVText").css("display","block");
            $("#settingChSetATVText").css("display","block");
        }
        if(tv == true){
            if(model.channelSearch.getRunning() == 1){
                debugE("settingChSetChScanPageOnOpen:channel is searching!!");
                model.channelSearch.Stop();
            }
            var currSource = model.source.getCurrentSource();
            DBG_ALWAYS("settingChSetAutoScanPageOnOpen:currSource="+currSource);
//            model.source.InputSet(0);
            if(currSource != 0){
                model.source.InputSet(0);
            }
            var temp=model.source.getInputName();
            debugPrint("settingChSetAutoScanPageOnOpen:temp"+temp,DebugLevel.ERROR);
            if(temp[3]==1)//判断 tv 通道加锁，搜台前暂时解锁，不设置底层EPPROM
            {
                model.source.unlockInput(0);
                livetvmain.setUnlockFlag(true);
            }
            pauseHBBTV();
            model.channelSearch.onProgressChaged = settingChScanProgressChangeCallBack;
            model.channelSearch.onFoundDigitServicesChaged = settingChScanDigitServicesChangeCallBack;
            model.channelSearch.onFoundAnalogServicesChaged = settingChScanAnalogServicesChangeCallBack;
            model.channelSearch.onStateChaged = settingChScanStateChangeCallBack;
        }
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
        settingChSetStartChScan();
    }catch (ex){
        debugPrint("settingChSetAutoScanPageOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetAutoScanPageOnDestroy(){
    try{
        if(tv == true){
            model.channelSearch.onProgressChaged = null;
            model.channelSearch.onFoundDigitServicesChaged = null;
            model.channelSearch.onFoundAnalogServicesChaged = null;
            model.channelSearch.onStateChaged = null;
        }
        var data = settingChSetAutoScanPageData;
//        clearInterval(data.operateData.signalInfoTimer);
        if(data.operateData.needRefreshChannelListFlag == 1){
            refreshChListAftSearchChannel();
        }
        hiWebOsFrame.ChSetChannelScanPage = null;
    }catch (ex){
        debugPrint("settingChSetAutoScanPageOnDestroy:"+ex.message,DebugLevel.ERROR);
    }

}

