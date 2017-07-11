/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetSelSatellitePageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetSelSateHeadTitle",
            "description":"设置标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSelSateItemTitle",
            "description":"设置项名称",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSelSateLeftImg",
            "description":"left arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetSelSateRightImg",
            "description":"right arrow",
            "CaEType":"img"
        },
        {
            "id": "settingChSetSateModeUl",//在页面中的按钮或者组件容器Id
            "description": "卫星模式列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChLeftNoTitleLiNormal", "focus": "settingChLeftNoTitleLiFocus",
                "dataSelected":"settingChLeftNoTitleLiSelected","disable":"settingChLeftNoTitleLiDisable"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetSelSatelliteMode",
                "befLeftHandler":"settingChSetSelSatelliteEscHandle"
            },
            "nav":{
                "rightTo":"settingChSetSatelliteNameList"
            },
            "onFocusFun":function(){
                var width  = $("#settingChSetSateModeUl_settingChSetSateModeName_sys"+this.SelectedIndex).width();
                if(width > 470){
                    var txt = $("#settingChSetSateModeUl_settingChSetSateModeName_sys"+this.SelectedIndex).html();
                    $("#settingChSetSateModeUl_settingChSetSateModeName_sys"+this.SelectedIndex).html('<marquee>'+txt+'</marquee>');
                }
            },
            "onBlurFun":function(){
                var marquee = $("#settingChSetSateModeUl_settingChSetSateModeName_sys"+this.SelectedIndex+" marquee");
                if(marquee.length > 0){
                    var txt = $("#settingChSetSateModeUl_settingChSetSateModeName_sys"+this.SelectedIndex+" marquee").html();
                    $("#settingChSetSateModeUl_settingChSetSateModeName_sys"+this.SelectedIndex).html(txt);
                }
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetSateModeName",
                    "description": "Satellite Mode name",
                    "CaEType": "span"
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetSateModeName"]
            }
        },
        {
            "id": "settingChSetSatelliteNameList",//在页面中的按钮或者组件容器Id
            "description": "卫星名称列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChRightWithTitleLiNormal", "focus": "settingChRightWithTitleLiFocus",
                "dataSelected":"settingChRightWithTitleLiSelected","disable":"settingChRightWithTitleLiDisable"
            },
            "handler": {
                "aftEnterHandler": "settingChSetSatelliteSelectHandle",
                "befRightHandler":"settingChSetSelSatelliteToNextPage"
            },
            "nav":{
                "leftTo":"settingChSetSateModeUl",
                "downTo":"settingChSetAntennaSetBtn"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id":"settingChSetSelSatelliteTitle",
                    "description":"satellite Title",
                    "CaEType":"span",
                    "classes":{
                        "normal":"settingChSetRightWithTitleLiTitleCls","disable":"settingChSetRightWithTitleLiTitleCls"
                    }
                },
                {
                    "id": "settingChSetSelSatelliteName",
                    "description": "Satellite Mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetRightWithTitleLiNameCls","disable":"settingChSetRightWithTitleLiNameCls"
                    }
                },
                {
                    "id": "settingChSetSelSatelliteDownImg",
                    "description": "Satellite down img",
                    "CaEType": "img"
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetSelSatelliteTitle","settingChSetSelSatelliteName","settingChSetSelSatelliteDownImg"]
            }
        },
        {
            "id":"settingChSetAntennaSetBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"settingChSetAntennaSetBtnNormal","focus":"settingChSetAntennaSetBtnFocus",
                "disable":"settingChSetAntennaSetBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetSatelliteNameList","leftTo":"settingChSetSateModeUl"
            },
            "handler":{
                "aftEnterHandler":"settingChSetSelSateEnterAntSetup",
                "befRightHandler":"settingChSetSelSatelliteToNextPage"
            },
            "onFocusFun":function(){
                var txt = $("#"+this.id).html();
                if(txt.length > 18){
                    $("#"+this.id).html('<marquee>'+txt +'</marquee>');
                }
            },
            "onBlurFun":function(){
                $("#"+this.id).html(getCurrentContentLanguage("Antenna Setup"));
            }
        }

    ];
    settingInitChSetSelSatelliteData();
    return settingChSetSelSatelliteData;
}
var settingChSetSelSatelliteData={
    "settingChSetSelSateHeadTitle":{"Data":"Auto Channel Scan"},
    "settingChSetSelSateItemTitle":{"Data":"Satellite Mode"},
    "settingChSetSelSateLeftImg":{"Data":"img/channel_left_arrow.png"},
    "settingChSetSelSateRightImg":{"Data":"img/channel_right_arrow.png"},
    "settingChSetSateModeUl":{
        "Data":[
            {
                "settingChSetSateModeName":{"Data":"Single Satellite"}
            },
            {
                "settingChSetSateModeName":{"Data":"Diseqc"}
            },
            {
                "settingChSetSateModeName":{"Data":"Tone Burst"}
            },
            {
                "settingChSetSateModeName":{"Data":"Unicable"}
            }
          
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetSatelliteNameList":{
        "Data":[
            {
                "settingChSetSelSatelliteTitle":{"Data":""},
                "settingChSetSelSatelliteName":{"Data":""},
                "settingChSetSelSatelliteDownImg":{"Data":"img/channel_down_arrow.png"}
            },
            {
                "settingChSetSelSatelliteTitle":{"Data":""},
                "settingChSetSelSatelliteName":{"Data":""},
                "settingChSetSelSatelliteDownImg":{"Data":"img/channel_down_arrow.png"}
            },
            {
                "settingChSetSelSatelliteTitle":{"Data":""},
                "settingChSetSelSatelliteName":{"Data":""},
                "settingChSetSelSatelliteDownImg":{"Data":"img/channel_down_arrow.png"}
            },
            {
                "settingChSetSelSatelliteTitle":{"Data":""},
                "settingChSetSelSatelliteName":{"Data":""},
                "settingChSetSelSatelliteDownImg":{"Data":"img/channel_down_arrow.png"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetAntennaSetBtn":{"Data":"Antenna Setup"},
    "operateData":{
        "currSatelliteModeIdx":0,
        "satelliteModeMapList":[
            {
                "map":0,
                "name":"Single Satellite",
                "selectableSatelliteNum":1,
                "disableItem":[1,2,3],
                "titleSuffix":[""]
            },
            {
                "map":2,
                "name":"Diseqc",
                "selectableSatelliteNum":4,
                "disableItem":[],
                "titleSuffix":[" A"," B"," C"," D"]
            },
            {
                "map":1,
                "name":"Tone Burst",
                "selectableSatelliteNum":2,
                "disableItem":[2,3],
                "titleSuffix":[" A"," B"]
            },
            {
                "map":3,
                "name":"Unicable",
                "selectableSatelliteNum":2,
                "disableItem":[2,3],
                "titleSuffix":[" A"," B"]
            }
        ],
        "selectedSatelliteIdList":[],
        "selectedSatelliteNameList":[],
        "satelliteIdList":[],
        "currLockIdx":0
    },
    "langData":{
        "Auto Channel Scan":[],
        "Satellite Mode":[],
        "Single Satellite":[],
        "DiSeqc":[],
        "DiSeqc A":[],
        "DiSeqc B":[],
        "DiSeqc C":[],
        "DiSeqc D":[],
        "Tone Burst":[],
        "Tone Burst A":[],
        "Tone Burst B":[],
        "Unicable":[],
        "Unicable A":[],
        "Unicable B":[],
        "Antenna Setup":[]
    },
    rewrite:"settingRewriteChSetSelSatellitePage"
}

/*******************************************************************
 name:settingInitChSetSelSatelliteData
 description:初始化Data
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetSelSatelliteData(){
    try{
        var opData = settingChSetSelSatelliteData.operateData;
        opData.currLockIdx = 0;
        //获取搜索类型
        if(tv == false){
            opData.currSatelliteModeIdx = 0;
            opData.selectedSatelliteIdList = [0,1,-1,-1];
            opData.selectedSatelliteNameList = ["Astra 19.2","Hotbord","None","None"];
            opData.satelliteIdList = [-1,0,1,2,3,4,5,6,7];
        }else{
            //get current SatelliteMode
            var currSatelliteMode = model.satellite.getInstallation();
            for(var i = 0; i < opData.satelliteModeMapList.length; i++){
                if(currSatelliteMode == opData.satelliteModeMapList[i].map){
                    opData.currSatelliteModeIdx = i;
                    break;
                }
            }
            if(i == opData.satelliteModeMapList.length){
                debugPrint("settingInitChSetMainPage:currSatelliteMode="+currSatelliteMode,DebugLevel.ERROR);
                opData.currSatelliteModeIdx = 0;
                model.channelSearch.setInstallation(opData.satelliteModeMapList[0].map);
            }
            opData.satelliteIdList = model.satellite.getIdList();
            opData.satelliteIdList.unshift(-1);
            getSettingChSetSelectedSatellite();
        }
    }catch (ex){
        debugPrint("settingInitChSetSelSatelliteData"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingRewriteChSetSelSatellitePage
 description:刷新设置主页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetSelSatellitePage(data){
    try{
        var opData = data.operateData;
        var satelliteModeUl = data.settingChSetSateModeUl;
        if(satelliteModeUl.Data.length > opData.satelliteModeMapList.length){
            satelliteModeUl.Data.splice(opData.satelliteModeMapList.length)
        }else{
            while(satelliteModeUl.Data.length < opData.satelliteModeMapList.length){
                var itemData =
                {
                    "settingChSetSateModeName":{"Data":""}
                }
                satelliteModeUl.Data.push(itemData);
            }
        }
        $.each(satelliteModeUl.Data,function(idx,item){
            item.settingChSetSateModeName.Data = opData.satelliteModeMapList[idx].name;
        });
        satelliteModeUl.SelectedIndex = opData.currSatelliteModeIdx;
        satelliteModeUl.DataSelectedIndex = opData.currSatelliteModeIdx;

        var satelliteNameUl = data.settingChSetSatelliteNameList;
        var disableItem = opData.satelliteModeMapList[opData.currSatelliteModeIdx].disableItem;
        var selectableSatelliteNum = opData.satelliteModeMapList[opData.currSatelliteModeIdx].selectableSatelliteNum;
        for(var i = 0; i < selectableSatelliteNum; i++){
            satelliteNameUl.Data[i].settingChSetSelSatelliteTitle.Data =
                opData.satelliteModeMapList[opData.currSatelliteModeIdx].name +
                opData.satelliteModeMapList[opData.currSatelliteModeIdx].titleSuffix[i];
            satelliteNameUl.Data[i].settingChSetSelSatelliteName.Data =
                opData.selectedSatelliteNameList[i];
        }
        satelliteNameUl.disableItem = disableItem;

        data.settingChSetAntennaSetBtn.disable = true;
        for(var i = 0;
            i < opData.selectedSatelliteIdList.length &&
            i < opData.satelliteModeMapList[opData.currSatelliteModeIdx].selectableSatelliteNum;
            i++){
            if(opData.selectedSatelliteIdList[i] != -1){
                data.settingChSetAntennaSetBtn.disable = false;
            }
        }
    }catch (ex){
        debugPrint("settingRewriteChSetSelSatellitePage "+ex.message,DebugLevel.ERROR);
    }
}
function getSettingChSetSelectedSatellite(){
    var opData = settingChSetSelSatelliteData.operateData;
    if(!tv){
        switch (opData.currSatelliteModeIdx){
            case 0:
                opData.selectedSatelliteIdList = [0,-1,-1,-1];
                opData.selectedSatelliteNameList= ["Astra 192.2","None","None","None"];
                break;
            case 1:
                opData.selectedSatelliteIdList = [0,1,-1,-1];
                opData.selectedSatelliteNameList= ["Astra 192.2","Hotbord","None","None"];
                break;
            case 2:
                opData.selectedSatelliteIdList = [0,1,-1,-1];
                opData.selectedSatelliteNameList= ["Astra 192.2","Awel","None","None"];
                break;
            case 3:
                opData.selectedSatelliteIdList = [0,1,-1,-1];
                opData.selectedSatelliteNameList= ["Astra 192.2","LECD","None","None"];
                break;
        }
    }else{
        var selectedSatelliteIdList = model.satellite.getSelectedIdList();
        DBG_ALWAYS("getSettingChSetSelectedSatellite:"+selectedSatelliteIdList);
        var hasSelectedSatelliteFlag = 0; //exist satellite flag
        for(var i = 0; i < selectedSatelliteIdList.length; i++){
            if($.inArray(selectedSatelliteIdList[i],opData.satelliteIdList) == -1){
                DBG_ERROR("getSettingChSetSelectedSatellite:satelliteId:"+selectedSatelliteIdList[i]+" not in support List");
                switch (i){
                    case 0:
                        model.satellite.setSelected1Id(-1);
                        break;
                    case 1:
                        model.satellite.setSelected2Id(-1);
                        break;
                    case 2:
                        model.satellite.setSelected3Id(-1);
                        break;
                    case 3:
                        model.satellite.setSelected4Id(-1);
                        break;
                    default :
                        break;
                }
            }else if(selectedSatelliteIdList[i] != -1){
                hasSelectedSatelliteFlag = 1;
            }else{

            }
        }
        if(hasSelectedSatelliteFlag == 0){
            DBG_ERROR("getSettingChSetSelectedSatellite:no selected satellite,support satelliteIdList is"+opData.satelliteIdList.length);
            if(opData.satelliteIdList.length > 1){
                model.satellite.setSelected1Id(opData.satelliteIdList[1]);
            }else{
                model.satellite.setSelected1Id(1);
            }
        }
        opData.selectedSatelliteIdList = model.satellite.getSelectedIdList();
        opData.selectedSatelliteNameList = model.satellite.getSelectedNameList();
    }
}

function setChSetSelectedSatellite(satelliteId,satelliteName){
    var opData = settingChSetSelSatelliteData.operateData;
    var selectedIdx = hiWebOsFrame.ChSetSelSatellitePage.getCaE("settingChSetSatelliteNameList").SelectedIndex;
    if(satelliteId == opData.selectedSatelliteIdList[selectedIdx]){
        DBG_ALWAYS("setChSetSelectedSatellite:the same with origin");
    }else if(satelliteId == -1){
        setChSetUseSatelliteId(selectedIdx,-1);
        opData.selectedSatelliteIdList[selectedIdx] = satelliteId;
        opData.selectedSatelliteNameList[selectedIdx] = satelliteName;
        hiWebOsFrame.ChSetSelSatellitePage.rewriteDataOnly();
    }else{
        for(var i = 0; i < opData.satelliteModeMapList[opData.currSatelliteModeIdx].selectableSatelliteNum; i++){
            if(i != selectedIdx){
                if(satelliteId == opData.selectedSatelliteIdList[i]){
                    setChSetUseSatelliteId(i,-1);
                    opData.selectedSatelliteIdList[i] = -1;
                    opData.selectedSatelliteNameList[i] = "None";
                }
            }
        }
        setChSetUseSatelliteId(selectedIdx,satelliteId);
        opData.selectedSatelliteIdList[selectedIdx] = satelliteId;
        opData.selectedSatelliteNameList[selectedIdx] = satelliteName;
        hiWebOsFrame.ChSetSelSatellitePage.rewriteDataOnly();
    }
    setChSetSelSateSignalDisplay();
}

function setChSetUseSatelliteId(idx,id){
    debugPrint("setChSetUseSatelliteId:idx="+idx+","+id,DebugLevel.ALWAYS);
    if(tv == true){
        switch (idx){
            case 0:
                model.satellite.setSelected1Id(id);
                break;
            case 1:
                model.satellite.setSelected2Id(id);
                break;
            case 2:
                model.satellite.setSelected3Id(id);
                break;
            case 3:
                model.satellite.setSelected4Id(id);
                break;
            default :
                debugE("settingChSetDVBS2SetUseSatelliteId:idx="+idx);
                break;
        }
    }
}
function setSettingChSetSelSatelliteMode(){
    var opData = settingChSetSelSatelliteData.operateData;
    opData.currSatelliteModeIdx = this.SelectedIndex;
    if(tv){
        model.satellite.setInstallation(opData.satelliteModeMapList[this.SelectedIndex].map);
    }
    settingChSetSelSatelliteData.settingChSetSatelliteNameList.SelectedIndex = 0;
    getSettingChSetSelectedSatellite();
    hiWebOsFrame.ChSetSelSatellitePage.rewriteDataOnly();
}

function settingChSetSatelliteSelectHandle(){
    hiWebOsFrame.createPage("settingChSetAutoSatelliteListDialogId", null, hiWebOsFrame.ChSetSelSatellitePage, null, function (page) {
        hiWebOsFrame.ChSetAutoSatelliteListDialog = page;
        page.open();
        page.hiFocus();
    });
}
function getChSetCurrSelectedSatelliteId(){
    var opData = settingChSetSelSatelliteData.operateData;
    var selectedIdx = hiWebOsFrame.ChSetSelSatellitePage.getCaE("settingChSetSatelliteNameList").SelectedIndex;
    return opData.selectedSatelliteIdList[selectedIdx];
}
function settingChSetSelSateEnterAntSetup(){
    try{
        hiWebOsFrame.createPage("settingChSetAntSetupPageId", null, hiWebOsFrame.ChSetSelSatellitePage, null, function (page) {
            hiWebOsFrame.ChSetAntSetupPage = page;
            page.open();
            page.hiFocus();
        });
    }catch (ex){
        DBG_ERROR("settingChSetSelSateEnterAntSetup:"+ex.message)
    }

}
function settingChSetSelSatelliteToNextPage(){
    var opData = settingChSetSelSatelliteData.operateData;
    var selectedSatelliteFlag = 0;
    for(var i= 0; i < opData.selectedSatelliteIdList.length && i < opData.satelliteModeMapList[opData.currSatelliteModeIdx].selectableSatelliteNum;i++){
        if(opData.selectedSatelliteIdList[i] != -1){
            selectedSatelliteFlag = 1;
            break;
        }
    }
    if(selectedSatelliteFlag == 1){
        clearTimeout(opData.lockTimer);
        hiWebOsFrame.createPage("settingChSetCommDVBSPageId", null, hiWebOsFrame.ChSetSelSatellitePage, null, function (page) {
            hiWebOsFrame.ChSetCommDVBSPage = page;
            hiWebOsFrame.ChSetSelSatellitePage.close();
            page.open();
            page.hiFocus();
        });
    }
}
/*******************************************************************
 name:settingChSetSelSatelliteEscHandle
 description:exit for satellite selected page
 input:
 output:
 return
 *******************************************************************/
function settingChSetSelSatelliteEscHandle(){
    hiWebOsFrame.ChSetSelSatellitePage.close();
    hiWebOsFrame.ChSetSelSatellitePage.origin.open();
    hiWebOsFrame.ChSetSelSatellitePage.origin.hiFocus();
    hiWebOsFrame.ChSetSelSatellitePage.destroy();
}
/***************************************************
 * 锁频后的callback
 */
function settingChSetSelSateLockFrequencyCallBack(event){
    var opData = settingChSetSelSatelliteData.operateData;
//    clearTimeout(opData.lockTimer);
//    var SignalQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
//    var SignalLevelValue = model.tvservice.getSignalMainLevels();
//    DBG_ALWAYS("settingChSetSelSateLockFrequencyCallBack:"+SignalLevelValue+","+SignalQualityValue);
//    var qualityHigh = parseInt(84 * SignalQualityValue /100);
//    var levelHigh = parseInt(84 * SignalLevelValue /100);
//    qualityHigh = qualityHigh > 84 ? 84 : qualityHigh;
//    levelHigh = levelHigh > 84 ? 84 : levelHigh;
//    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalQ").eq(opData.currLockIdx).css("height",qualityHigh+"px");
//    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalQ").eq(opData.currLockIdx).css("top",(84-qualityHigh)+"px");
//    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalL").eq(opData.currLockIdx).css("height",levelHigh+"px");
//    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalL").eq(opData.currLockIdx).css("top",(84-levelHigh)+"px");
//    opData.currLockIdx = (opData.currLockIdx+1)%4;
//    settingChSetSelLockSatelliteFre();
}
/***************************************************
 * 锁频后超时处理
 */
function settingChSetSelSateLockTimeOut(){
    DBG_ALWAYS("settingChSetSelSateLockTimeOut");
    var opData = settingChSetSelSatelliteData.operateData;
    if(!tv){
        var SignalQualityValue = 50;
        var SignalLevelValue = 50;
    }else{
        var SignalQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
        var SignalLevelValue = model.tvservice.getSignalMainLevels();
        DBG_ALWAYS("settingChSetSelSateLockFrequencyCallBack:"+SignalLevelValue+","+SignalQualityValue);
    }
    var qualityHigh = parseInt(84 * SignalQualityValue / 100);
    var levelHigh = parseInt(84 * SignalLevelValue / 100);
    qualityHigh = qualityHigh > 84 ? 84 : qualityHigh;
    levelHigh = levelHigh > 84 ? 84 : levelHigh;
    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalQ").eq(opData.currLockIdx).css("height",qualityHigh+"px");
    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalQ").eq(opData.currLockIdx).css("top",(84-qualityHigh)+"px");
    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalL").eq(opData.currLockIdx).css("height",levelHigh+"px");
    $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal .settingChSetSelSateSignalL").eq(opData.currLockIdx).css("top",(84-levelHigh)+"px");
    opData.currLockIdx = (opData.currLockIdx+1)%4;
    settingChSetSelLockSatelliteFre();
}
/***************************************************
 * 启动锁频
 */
function settingChSetSelLockSatelliteFre(){
    var opData = settingChSetSelSatelliteData.operateData;
    for(var i = 0; i < 4; i++){
        if(opData.selectedSatelliteIdList[(i+opData.currLockIdx)%4] != -1 && ($.inArray(opData.selectedSatelliteIdList[(i+opData.currLockIdx)%4],[1,2,3]) != -1)){
            DBG_ALWAYS("settingChSetSelLockSatelliteFre:"+opData.selectedSatelliteIdList[(i+opData.currLockIdx)%4]);
            try{
                if(tv){
                    model.satellite.LockFrequency(opData.selectedSatelliteIdList[(i+opData.currLockIdx)%4]);
                }
            }catch (ex){
                DBG_ALWAYS("settingChSetSelLockSatelliteFre:"+ex.message);
            }
            opData.currLockIdx = (opData.currLockIdx+i)%4;
            opData.lockTimer = setTimeout(settingChSetSelSateLockTimeOut,2000);
            break;
        }
    }
}
function setChSetSelSateSignalDisplay(){
    var opData = settingChSetSelSatelliteData.operateData;
    for(var i = 0; i < 4; i++){
        if(opData.selectedSatelliteIdList[i] == -1 && $.inArray(opData.selectedSatelliteIdList[i],[1,2,3]) == -1){
            $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal").eq(i).css("display","none");
        }else{
            $("#settingChSetSatelliteNameList li .settingChSetSelSateSignalNormal").eq(i).css("display","block");
        }
    }
}
function settingChSetSelSatelliteOnOpen(){
    var opData = settingChSetSelSatelliteData.operateData;
    if(tv){
        model.satellite.satelliteLockFrequencyCallBack = settingChSetSelSateLockFrequencyCallBack;
}
    setChSetSelSateSignalDisplay();
    settingChSetSelLockSatelliteFre();
}
function settingChSetSelSatelliteOnDestroy(){
    var opData = settingChSetSelSatelliteData.operateData;
    if(tv){
        model.satellite.satelliteLockFrequencyCallBack = null;
    }
    clearTimeout(opData.lockTimer);
    hiWebOsFrame.ChSetSelSatellitePage = null;
}