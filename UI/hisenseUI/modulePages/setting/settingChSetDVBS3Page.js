/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBS3PageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBS3PageTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetStep3Title",
            "description":"设置小标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetStep3SateFreUl",
            "description":"卫星使用频率, 及频率列表",
            "CaEType":"Ul",
            "firstFocusId":"settingChSetDVBS3FreNav",
            "oriCaE":[
                {
                    "id":"settingChSetDVBS3SateTitle",
                    "description":"当前卫星名",
                    "CaEType":"span",
                    "classes":{
                        "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
                    }
                },
                {
                    "id":"settingChSetDVBS3SateSelFre",
                    "description":"当前卫星使用的频率",
                    "CaEType":"span",
                    "classes":{
                        "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
                    }
                },
                {
                    "id":"settingChSetDVBS3FreNav",
                    "description":"频率列表",
                    "CaEType":"NavigationBar",
                    "oriCaE":[
                        {
                            "id":"settingChSetDVBS3SateFre",
                            "description":"频率",
                            "CaEType":"div"
                        }
                    ],
                    "NavigationBarConfig":{
                        "NavigationBarDataItem":["settingChSetDVBS3SateFre"],
                        "PageSize":3,
                        "ArrowFlag":true
                    },
                    "classes":{
                        "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                        "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable",
                        "disableDataSelected":"wizardSetItemListLi_3_Disable"
                    },
                    "handler":{
                        "aftEnterHandler":"settingChSetDVBS3SetLNBFreq"
                    }
                }
            ],
            "UlConfig":{
                "UlDataItem":["settingChSetDVBS3SateTitle","settingChSetDVBS3SateSelFre","settingChSetDVBS3FreNav"],
                "PageSize":4
            },
            "nav":{
                "upTo":"","downTo":"settingChSetDVBS3NextBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftUpHandler":"wizardDVBS3MoveBetweenSatellite","aftDownHandler":"wizardDVBS3MoveBetweenSatellite"
            }
        },
        {
            "id":"settingChSetDVBS3PrvBtn",
            "description":"上一步",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetStep3SateFreUl","downTo":"","leftTo":"","rightTo":"settingChSetDVBS3NextBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBS3ToDVBS2Page"
            }
        },
        {
            "id":"settingChSetDVBS3NextBtn",
            "description":"下一步",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetStep3SateFreUl","downTo":"","leftTo":"settingChSetDVBS3PrvBtn","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBS3ToNextPage"
            }
        }
    ];
    settingInitChSetDVBS3PageData();
    return settingChSetDVBS3PageData;
}
var settingChSetDVBS3PageData={
    "settingChSetDVBS3PageTitle":{"Data":"Search Setup"},
    "settingChSetStep3Title":{"Data":"LNB Frequency"},
    "settingChSetStep3SateFreUl":{
        "Data":[
            {
                "settingChSetDVBS3SateTitle":{"Data":"Satellite A"},
                "settingChSetDVBS3SateSelFre":{"Data":10000},
                "settingChSetDVBS3FreNav":
                {
                    "Data":[
                        {
                            "settingChSetDVBS3SateFre":{"Data":10000}
                        }
                    ],
                    "SelectedIndex":0,
                    "DataSelectedIndex":0
                }
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBS3PrvBtn":{"Data":"Back"},
    "settingChSetDVBS3NextBtn":{"Data":"Next"},
    "operateData":{
        "currSatelliteIdList":[],
        "currSatelliteNameList":[],
        "currSatelliteLnbLowList":[],
        "currSatelliteLnbHighList":[],
        "selectSatelliteMapList":[],
        "satelliteNum":1,
        "currSateIdx":0,
        "oriFreq":[],//预制频率
        "optionalFreq":[
            {low:9750,high:10600},{low:9750,high:10700},{low:9750,high:10750},{low:5150,high:0},{low:5750,high:0},
            {low:9750,high:0},{low:10600,high:0},{low:10750,high:0},{low:11250,high:0},{low:11300,high:0},
            {low:11475,high:0}],
        "sateUseFreqIdx":[1,2,3,4]
    },
    "langData":{
        "Search Setup":["Search Setup"],
        "LNB Frequency":["LNB Frequency"],
        "Back":["Back"],
        "Next":["Next"]
    },
    rewrite:"settingRewriteChSetDVBS3Page"
}
/*******************************************************************
 name:settingInitChSetDVBS3PageData
 description:初始化DVBS3Data
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBS3PageData(){
    try{
        var data = settingChSetDVBS3PageData;
        data.operateData.currSateIdx = 0;
        if(tv == false){
            data.operateData.currSatelliteIdList = [0,1,-1,-1];
            data.operateData.currSatelliteNameList = ["Astra","Hotbord","",""];
            data.operateData.currSatelliteLnbLowList = [9750,10600,0,0];
            data.operateData.currSatelliteLnbHighList = [9750,10600,0,0];
            data.operateData.satelliteNum = 0;
            data.operateData.selectSatelliteMapList = [];
            for(var i = 0; i < data.operateData.currSatelliteIdList.length; i++){
                if(data.operateData.currSatelliteIdList[i] != -1){
                    var selectSatelliteItem = {};
                    selectSatelliteItem.id = data.operateData.currSatelliteIdList[i];
                    selectSatelliteItem.name = data.operateData.currSatelliteNameList[i];
                    selectSatelliteItem.lnbLow = data.operateData.currSatelliteLnbLowList[i];
                    selectSatelliteItem.lnbHigh = data.operateData.currSatelliteLnbHighList[i];
                    data.operateData.satelliteNum++;
                    data.operateData.selectSatelliteMapList.push(selectSatelliteItem);
                }
            }
            data.operateData.sateUseFreqIdx = [];
            for(i = 0; i < data.operateData.selectSatelliteMapList.length; i++){
                var currLow = data.operateData.selectSatelliteMapList[i].lnbLow;
                var currHigh = data.operateData.selectSatelliteMapList[i].lnbHigh;
                for(var j = 0; j < data.operateData.optionalFreq.length; j++){
                    if(currLow == data.operateData.optionalFreq.low && currHigh == data.operateData.optionalFreq.high){
                        data.operateData.sateUseFreqIdx[i] = j;
                        break;
                    }
                }
                if(j == data.operateData.optionalFreq.length){
                    debugPrint("settingInitChSetDVBS3PageData:can't find lnb fre!!",DebugLevel.ERROR);
                    data.operateData.sateUseFreqIdx[i] = 0;
                    data.operateData.selectSatelliteMapList[i].lnbLow = data.operateData.optionalFreq[0].low;
                    data.operateData.selectSatelliteMapList[i].lnbHigh = data.operateData.optionalFreq[0].high;
                }
            }
        }else{
            data.operateData.currSatelliteIdList = model.satellite.getSelectedIdList();
            data.operateData.currSatelliteNameList = model.satellite.getSelectedNameList();
            data.operateData.currSatelliteLnbLowList = model.satellite.getBandLowList();
            debugPrint("settingInitChSetDVBS3PageData:"+data.operateData.currSatelliteLnbLowList,DebugLevel.ALWAYS);
            data.operateData.currSatelliteLnbHighList = model.satellite.getBandHighList();
            debugPrint("settingInitChSetDVBS3PageData:"+data.operateData.currSatelliteLnbHighList,DebugLevel.ALWAYS);
            data.operateData.satelliteNum = 0;
            data.operateData.selectSatelliteMapList = [];
            for(var i = 0; i < data.operateData.currSatelliteIdList.length; i++){
                if(data.operateData.currSatelliteIdList[i] != -1){
                    var selectSatelliteItem = {};
                    selectSatelliteItem.id = data.operateData.currSatelliteIdList[i];
                    selectSatelliteItem.name = data.operateData.currSatelliteNameList[i];
                    selectSatelliteItem.lnbLow = data.operateData.currSatelliteLnbLowList[i];
                    selectSatelliteItem.lnbHigh = data.operateData.currSatelliteLnbHighList[i];
                    data.operateData.satelliteNum++;
                    data.operateData.selectSatelliteMapList.push(selectSatelliteItem);
                }
            }
            data.operateData.sateUseFreqIdx = [];
            for(i = 0; i < data.operateData.selectSatelliteMapList.length; i++){
                var currLow = data.operateData.selectSatelliteMapList[i].lnbLow;
                var currHigh = data.operateData.selectSatelliteMapList[i].lnbHigh;
                for(var j = 0; j < data.operateData.optionalFreq.length; j++){
                    if(currLow == data.operateData.optionalFreq[j].low && currHigh == data.operateData.optionalFreq[j].high){
                        data.operateData.sateUseFreqIdx[i] = j;
                        break;
                    }
                }
                if(j == data.operateData.optionalFreq.length){
                    debugPrint("settingInitChSetDVBS3PageData:can't find lnb fre!!",DebugLevel.ERROR);
                    data.operateData.sateUseFreqIdx[i] = 0;
                    data.operateData.selectSatelliteMapList[i].lnbLow = data.operateData.optionalFreq[0].low;
                    data.operateData.selectSatelliteMapList[i].lnbHigh = data.operateData.optionalFreq[0].high;
                }
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBS3PageData "+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:wizardRefreshChSetDVBS3Page
 description:刷新DVBS3页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBS3Page(data){
    try{
        debugPrint(data.operateData.selectSatelliteMapList.length);
        var LNBFreUlData = data.settingChSetStep3SateFreUl.Data;
        if(data.settingChSetStep3SateFreUl.Data.length > data.operateData.satelliteNum){
            data.settingChSetStep3SateFreUl.Data.splice(data.operateData.satelliteNum);
        }
        else{
            while(data.settingChSetStep3SateFreUl.Data.length < data.operateData.satelliteNum){
                var itemData = {
                    "settingChSetDVBS3SateTitle":{"Data":""},
                    "settingChSetDVBS3SateSelFre":{"Data":""},
                    "settingChSetDVBS3FreNav":
                    {
                        "Data":[
                            {
                                "settingChSetDVBS3SateFre":{"Data":""}
                            }
                        ],
                        "SelectedIndex":0,
                        "DataSelectedIndex":0
                    }
                }
                data.settingChSetStep3SateFreUl.Data.push(itemData);
            }
        }
        var selectedSatelliteNameMapList = data.operateData.selectSatelliteMapList;
        for(var satelliteIdx = 0;satelliteIdx < selectedSatelliteNameMapList.length;satelliteIdx++){
            LNBFreUlData[satelliteIdx].settingChSetDVBS3SateTitle.Data = selectedSatelliteNameMapList[satelliteIdx].name+":";
            var freqNav = LNBFreUlData[satelliteIdx].settingChSetDVBS3FreNav;
            var freqNavDate = LNBFreUlData[satelliteIdx].settingChSetDVBS3FreNav.Data;
            if(freqNavDate.length > data.operateData.optionalFreq.length){
                freqNavDate.splice(data.operateData.optionalFreq.length);
            }
            else if(freqNavDate.length < data.operateData.optionalFreq.length){
                while(freqNavDate.length < data.operateData.optionalFreq.length){
                    var itemData = {
                        "settingChSetDVBS3SateFre":{"Data":""}
                    };
                    freqNavDate.push(itemData);
                }
            }
            for(var freqIdx = 0; freqIdx < data.operateData.optionalFreq.length;freqIdx++){
                if(data.operateData.optionalFreq[freqIdx].high == 0){
                    freqNavDate[freqIdx].settingChSetDVBS3SateFre.Data =
                        data.operateData.optionalFreq[freqIdx].low;
                }else{
                    freqNavDate[freqIdx].settingChSetDVBS3SateFre.Data =
                        data.operateData.optionalFreq[freqIdx].low + "," +data.operateData.optionalFreq[freqIdx].high;
                }

            }
            freqNav.SelectedIndex = data.operateData.sateUseFreqIdx[satelliteIdx];
            freqNav.DataSelectedIndex = data.operateData.sateUseFreqIdx[satelliteIdx];
            if(data.operateData.optionalFreq[freqNav.SelectedIndex].high == 0){
                LNBFreUlData[satelliteIdx].settingChSetDVBS3SateSelFre.Data =
                    data.operateData.optionalFreq[freqNav.SelectedIndex].low;
            }else{
                LNBFreUlData[satelliteIdx].settingChSetDVBS3SateSelFre.Data =
                    data.operateData.optionalFreq[freqNav.SelectedIndex].low+","+data.operateData.optionalFreq[freqNav.SelectedIndex].high;
            }
        }
        data.settingChSetStep3SateFreUl.SelectedIndex = data.operateData.currSateIdx;
        data.settingChSetStep3SateFreUl.DataSelectedIndex = data.operateData.currSateIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetDVBS3Page "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDVBS3ToDVBS2Page
 description:从设置DVBS设置第3步到第2步
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBS3ToDVBS2Page(){
    hiWebOsFrame.ChSetDVBS3Page.close();
    hiWebOsFrame.ChSetDVBS2Page.open();
    hiWebOsFrame.ChSetDVBS2Page.hiFocus();
    hiWebOsFrame.ChSetDVBS3Page.destroy();
}

/*******************************************************************
 name:wizardDVBS3MoveBetweenSatellite
 description:设置不同卫星的LNB频率时记录当前卫星Idx
 input:
 output:
 return
 *******************************************************************/
function wizardDVBS3MoveBetweenSatellite(){
    var data = settingChSetDVBS3PageData;
    data.operateData.currSateIdx = this.SelectedIndex;
}
/*******************************************************************
 name:settingChSetDVBS3SetLNBFreq
 description:设置当前卫星的频率
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBS3SetLNBFreq(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = settingChSetDVBS3PageData;
    data.operateData.sateUseFreqIdx[data.operateData.currSateIdx] = this.DataSelectedIndex;
    debugPrint(data.operateData.sateUseFreqIdx);
    var selectLowFre = data.operateData.optionalFreq[data.operateData.sateUseFreqIdx[data.operateData.currSateIdx]].low;
    var selectHighFre = data.operateData.optionalFreq[data.operateData.sateUseFreqIdx[data.operateData.currSateIdx]].high;
    var selectSatelliteId = data.operateData.selectSatelliteMapList[data.operateData.currSateIdx].id;
    debugPrint("settingChSetDVBS3SetLNBFreq:satellite="+selectSatelliteId+",lowFre="+selectLowFre+",highFre="+selectHighFre,DebugLevel.ALWAYS);
    if(tv == true){
        model.satellite.BandLow(selectSatelliteId,selectLowFre);
        model.satellite.BandHigh(selectSatelliteId,selectHighFre);
    }
    hiWebOsFrame.ChSetDVBS3Page.rewriteDataOnly();
}

/*******************************************************************
 name:settingChSetDVBS3ToNextPage
 description:从设置DVBS设置第3步到下一步
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBS3ToNextPage(){
    var data = settingChSetDVBS3PageData;
    for(var i = 0; i < data.operateData.sateUseFreqIdx.length; i++){
        if(data.operateData.optionalFreq[data.operateData.sateUseFreqIdx[i]].high != 0){
            if(tv == true){
                model.satellite.set22kSwitch(2);
            }
            break;
        }
    }
    hiWebOsFrame.createPage('settingChSetDVBS4PageId', null, null, null, function(a) {
        hiWebOsFrame.ChSetDVBS4Page = a;
        hiWebOsFrame.ChSetDVBS3Page.close();
        a.open();
        a.hiFocus();
    });
}
function settingChSetDVBS3PageEscHandle(){
    settingChSetDVBS3ToDVBS2Page();
}
function settingChSetDVBS3PageOnDestroy(){
    hiWebOsFrame.ChSetDVBS3Page = null;
}

