/**
 * Created by haoyunying on 15-9-6.
 */
function getSettingChSetAntSetupPageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetAntSetupHeadText",
            "description":"设置标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAntSetupPowerTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAntSetupPowerSwitch",
            "description":"LNB POWER",
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
                "upTo":"","downTo":"settingChSetAntSetupSateNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingAntSetupPowerSwitch"
            }
        },
        {
            "id":"settingChSetAntSetupSingleTitle",
            "description":"Single模式",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAntSetupSingleValue",
            "description":"Single模式所选卫星",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAntSetupSateNav",
            "description":"其他模式所选卫星列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetAntSetupSateTitle",
                    "description":"卫星title",
                    "CaEType":"div"
                },
                {
                    "id":"settingChSetAntSetupSateValue",
                    "description":"",
                    "CaEType":"div"
                }
            ],
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetAntSetupSateTitle","settingChSetAntSetupSateValue"],
                "PageSize":2,
                "ArrowFlag":true
            },
            "classes":{
                "normal":"channelAntSetupSateLiNormal","focus":"channelAntSetupSateLiFocus",
                "dataSelected":"channelAntSetupSateLiSelected","disable":"",
                "disableDataSelected":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetAntSetupSatelliteSelEnterHandle",
                "aftLeftHandler":"settingChSetAntSetupSatelliteSelChangeStyle",
                "aftRightHandler":"settingChSetAntSetupSatelliteSelChangeStyle"
            },
            "nav":{
                "upTo":"settingChSetAntSetupPowerSwitch","downTo":"settingChSetAntSetupLNBNav"
            }
        },
        {
            "id":"settingChSetAntSetupLNBTitle",
            "description":"当前卫星名",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetAntSetupLNBValue",
            "description":"当前LNB频率",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetAntSetupLNBNav",
            "description":"频率列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetAntSetupLNBFre",
                    "description":"频率",
                    "CaEType":"div"
                }
            ],
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetAntSetupLNBFre"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "classes":{
                "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable",
                "disableDataSelected":"wizardSetItemListLi_3_Disable"
            },
            "handler":{
                "aftEnterHandler":"setChSetAntSetupSetLNBFreq"
            },
            "nav":{
                "upTo":"settingChSetAntSetupSateNav","downTo":"settingChSetAntSetupTone22KNav"
            }
        },
        {
            "id":"settingChSetAntSetupTone22KTitle",
            "description":"当前使用22K标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetAntSetupTone22KValue",
            "description":"当前使用22K值",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetAntSetupTone22KNav",
            "description":"22K选项列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetAntSetupTone22K",
                    "description":"Tone22K开关项",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable",
                "disableDataSelected":"wizardSetItemListLi_3_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetAntSetupTone22K"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetAntSetupLNBNav","downTo":"","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setChSetAntSetupTone22K"
            }
        }
    ];
    settingInitChSetAntSetupPage();
    return settingChSetAntSetupPageData;
}
var settingChSetAntSetupPageData={
    "settingChSetAntSetupHeadText":{"Data":"Antenna Setup"},
    "settingChSetAntSetupPowerTitle":{"Data":"LNB Power"},
    "settingChSetAntSetupPowerSwitch":{
        "Data":{
            switchType:true,
            switchText:''
        }
    },
    "settingChSetAntSetupSingleTitle":{"Data":"Single Satellite"},
    "settingChSetAntSetupSingleValue":{"Data":""},
    "settingChSetAntSetupSateNav":{
        "Data":[
            {
                "settingChSetAntSetupSateTitle":{"Data":""},
                "settingChSetAntSetupSateValue":{"Data":""}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetAntSetupLNBTitle":{"Data":"LNB Frequency"},
    "settingChSetAntSetupLNBValue":{"Data":10000},
    "settingChSetAntSetupLNBNav":
    {
        "Data":[
            {
                "settingChSetAntSetupLNBFre":{"Data":10000}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetAntSetupTone22KTitle":{"Data":"Tone 22KHz"},
    "settingChSetAntSetupTone22KValue":{"Data":""},
    "settingChSetAntSetupTone22KNav":{
        "Data":[
            {
                "settingChSetAntSetupTone22K":{"Data":"Auto"}
            },
            {
                "settingChSetAntSetupTone22K":{"Data":"Open"}
            },
            {
                "settingChSetAntSetupTone22K":{"Data":"Close"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "LNBPowerSwitch":0,
        "currSatelliteMode":0,//0:single,1:tuner burst,2:diseqc,3:Unicable
        "satelliteModeName":["Single Satellite","Tone Burst","Diseqc","Unicable"],
        "satelliteNameSuffix":["A","B","C","D"],
        "selectedSatelliteIdList":[],
        "selectedSatelliteNameList":[],
        "currSelectSateIdx":0,
        "satelliteNum":0,
        "selectSatelliteMapList":[],
        "currSatelliteLnbLowList":[],
        "currSatelliteLnbHighList":[],
        "currLNBFreIdx":0,
        "optionalFreq":[
            {low:9750,high:10600},{low:9750,high:10700},{low:9750,high:10750},{low:5150,high:0},{low:5750,high:0},
            {low:9750,high:0},{low:10600,high:0},{low:10750,high:0},{low:11250,high:0},{low:11300,high:0},
            {low:11475,high:0}],
        "currTone22KIdx":0,
        "tone22KMapList":[
            {
                "map":2,
                "name":"Auto"
            },
            {
                "map":1,
                "name":"Open"
            },
            {
                "map":0,
                "name":"Close"
            }
        ]
    },
    "langData":{
        "Antenna Setup":[],
        "LNB Power":[],
        "Auto":[],
        "Open":[],
        "Close":[],
        "LNB":[],
        "LNB Frequency":[],
        "Single Satellite":[],
        "DiSeqc":[],
        "DiSeqc A":[],
        "DiSeqc B":[],
        "DiSeqc C":[],
        "DiSeqc D":[],
        "Tone Burst":[],
        "Tone Burst A":[],
        "Tone Burst B":[],
        "Unicable A":[],
        "Unicable B":[]
    },
    rewrite:"settingRewriteChSetAntSetupPage"

}
function settingInitChSetAntSetupPage(){
    var opData = settingChSetAntSetupPageData.operateData;
    try{
        if(!tv){
            opData.currSatelliteMode = 2;
            opData.LNBPowerSwitch = 0;
            opData.selectedSatelliteIdList = [1,-1,-1,-1];
            opData.selectedSatelliteIdList = [1,2,3,4];
//            opData.selectedSatelliteNameList = ["Astra 192.2","","",""];
            opData.selectedSatelliteNameList = ["Astra 192.2","Hotbord","None","None"];
            getChSetAntSelectedSatelliteMap();
            opData.currSelectSateIdx = 0;
            opData.currLNBFreIdx = 0;
            opData.currSatelliteLnbLowList = [10600,0,0,0];
            opData.currSatelliteLnbHightList = [10600,0,0,0];

            opData.currTone22KIdx = 0;

        }else{
            opData.currSatelliteMode = model.satellite.getInstallation();
            //lnb
            opData.LNBPowerSwitch = model.satellite.getLnbPower();
            DBG_INFO("opData.LNBPowerSwitch:"+opData.LNBPowerSwitch);
            //selected satellite list
            opData.selectedSatelliteIdList = model.satellite.getSelectedIdList();
            opData.selectedSatelliteNameList = model.satellite.getSelectedNameList();
            DBG_INFO("settingInitChSetAntSetupPage:"+opData.selectedSatelliteIdList);
            DBG_INFO("settingInitChSetAntSetupPage:"+opData.selectedSatelliteNameList);
            getChSetAntSelectedSatelliteMap();
            opData.currSelectSateIdx = 0;

            //lnb frequency
            getChSetAntSetupLnbFreIdx();

            //22K
            var currTone22K = model.satellite.get22kSwitch();
            for(var i = 0; i < opData.tone22KMapList.length; i++){
                if(currTone22K == opData.tone22KMapList[i].map){
                    opData.currTone22KIdx = i;
                    break;
                }
            }
            if(i == opData.tone22KMapList.length){
                debugPrint("settingInitChSetAntSetupPage:currTone22K="+currTone22K,DebugLevel.ERROR);
                model.satellite.set22kSwitch(data.operateData.tone22KMapList[0].map);
                opData.currTone22KIdx = 0;
            }

        }
    }catch (ex){
        DBG_ERROR("settingInitChSetAntSetupPage:"+ex.message);
    }

}
/*********************************************
 *获取当前显示与底层的对应
 */
function getChSetAntSelectedSatelliteMap(){
    var opData = settingChSetAntSetupPageData.operateData;
    opData.satelliteNum = 0;
    opData.selectSatelliteMapList = [];
    for(var i = 0; i < opData.selectedSatelliteIdList.length;i++){
        if(opData.selectedSatelliteIdList[i] != -1){
            var item = {
                "idx":i,
                "title":opData.satelliteModeName[opData.currSatelliteMode]+" "+opData.satelliteNameSuffix[i],
                "name":opData.selectedSatelliteNameList[i]
            }
            DBG_ALWAYS("getChSetAntSelectedSatelliteMap:"+"idx:"+item.idx+",title:"+item.title+",name:"+item.name);
            opData.selectSatelliteMapList.push(item);
            opData.satelliteNum++;
        }
    }
}
/*********************************************
 *获取获取当前高低本振索引
 */
function getChSetAntSetupLnbFreIdx(){
    var opData = settingChSetAntSetupPageData.operateData;
    opData.currSatelliteLnbLowList = model.satellite.getBandLowList();
    opData.currSatelliteLnbHighList = model.satellite.getBandHighList();
    var currSatelliteMapIdx = opData.selectSatelliteMapList[opData.currSelectSateIdx].idx;
    var currLowFre = opData.currSatelliteLnbLowList[currSatelliteMapIdx];
    var currHighFre = opData.currSatelliteLnbHighList[currSatelliteMapIdx];
    DBG_INFO("getChSetAntSetupLnbFreIdx:"+currSatelliteMapIdx+","+currLowFre+","+currHighFre);
    for(var j = 0; j < opData.optionalFreq.length; j++){
        if(currLowFre == opData.optionalFreq[j].low && currHighFre == opData.optionalFreq[j].high){
            opData.currLNBFreIdx = j;
            break;
        }
    }
    if(j == opData.optionalFreq.length){
        DBG_ERROR("getChSetAntSetupLnbFreIdx:not find the low and high lnb frequency");
        opData.currLNBFreIdx = 0;
        if(tv){
            model.satellite.BandLow(opData.selectedSatelliteIdList[currSatelliteMapIdx],opData.optionalFreq[0].low);
            model.satellite.BandHigh(opData.selectedSatelliteIdList[currSatelliteMapIdx],opData.optionalFreq[0].high);
        }
        opData.currSatelliteLnbLowList[currSatelliteMapIdx] = opData.optionalFreq[0].low;
        opData.currSatelliteLnbHighList[currSatelliteMapIdx] = opData.optionalFreq[0].high;
    }

}
function settingRewriteChSetAntSetupPage(data){
    var opData = data.operateData;
    if(opData.LNBPowerSwitch == 0){
        data.settingChSetAntSetupPowerSwitch.Data.switchText = "";
        data.settingChSetAntSetupPowerSwitch.Data.switchType = false;
    }else{
        data.settingChSetAntSetupPowerSwitch.Data.switchText = "";
        data.settingChSetAntSetupPowerSwitch.Data.switchType = true;
    }
    if(opData.currSatelliteMode == 0){
        data.settingChSetAntSetupSateNav.disable = true;
        data.settingChSetAntSetupSingleValue.Data = opData.selectedSatelliteNameList[0];
    }else{
        data.settingChSetAntSetupSateNav.disable = false;
        if(data.settingChSetAntSetupSateNav.Data.length > opData.satelliteNum){
            data.settingChSetAntSetupSateNav.Data.splice(opData.satelliteNum);
        }
        else{
            while(data.settingChSetAntSetupSateNav.Data.length < opData.satelliteNum){
                var itemData = {
                    "settingChSetAntSetupSateTitle":{"Data":""},
                    "settingChSetAntSetupSateValue":{"Data":""}
                }
                data.settingChSetAntSetupSateNav.Data.push(itemData);
            }
        }
        for(var i = 0; i < opData.satelliteNum; i++){
            var itemData = data.settingChSetAntSetupSateNav.Data[i];
            itemData.settingChSetAntSetupSateTitle.Data = opData.selectSatelliteMapList[i].title;
            itemData.settingChSetAntSetupSateValue.Data = opData.selectSatelliteMapList[i].name;
        }
        data.settingChSetAntSetupSateNav.SelectedIndex = opData.currSelectSateIdx;
        data.settingChSetAntSetupSateNav.DataSelectedIndex = opData.currSelectSateIdx;
    }

    //LNB Nav create
    if(data.settingChSetAntSetupLNBNav.Data.length > opData.optionalFreq.length){
        data.settingChSetAntSetupLNBNav.Data.splice(opData.optionalFreq.length);
    }
    else{
        while(data.settingChSetAntSetupLNBNav.Data.length < opData.optionalFreq.length){
            var itemData = {
                "settingChSetAntSetupLNBFre":{"Data":""}
            }
            data.settingChSetAntSetupLNBNav.Data.push(itemData);
        }
    }
    for(var i = 0; i < opData.optionalFreq.length;i++){
        var itemData = data.settingChSetAntSetupLNBNav.Data[i];
        if(opData.optionalFreq[i].high == 0){
            itemData.settingChSetAntSetupLNBFre.Data = opData.optionalFreq[i].low;
        }else{
            itemData.settingChSetAntSetupLNBFre.Data = opData.optionalFreq[i].low+","+opData.optionalFreq[i].high;
        }
    }
    data.settingChSetAntSetupLNBNav.SelectedIndex = opData.currLNBFreIdx;
    data.settingChSetAntSetupLNBNav.DataSelectedIndex = opData.currLNBFreIdx;
    data.settingChSetAntSetupLNBValue.Data = data.settingChSetAntSetupLNBNav.Data[opData.currLNBFreIdx].settingChSetAntSetupLNBFre.Data;

    data.settingChSetAntSetupTone22KNav.SelectedIndex = opData.currTone22KIdx;
    data.settingChSetAntSetupTone22KNav.DataSelectedIndex = opData.currTone22KIdx;
    data.settingChSetAntSetupTone22KValue.Data = opData.tone22KMapList[opData.currTone22KIdx].name;

}
/*********************************************
 *设置LNBPower
 */

function setSettingAntSetupPowerSwitch(){
    var opData = settingChSetAntSetupPageData.operateData;
    opData.LNBPowerSwitch = (opData.LNBPowerSwitch == 1) ? 0:1;
    if(tv){
        model.satellite.setLnbPower(opData.LNBPowerSwitch);
    }
    this.page.rewriteDataOnly();
}
/*********************************************
 *选择要设置的卫星
 */
function settingChSetAntSetupSatelliteSelEnterHandle(){
    var opData = settingChSetAntSetupPageData.operateData;
    opData.currSelectSateIdx = this.SelectedIndex;
    var currSatelliteMapIdx = opData.selectSatelliteMapList[opData.currSelectSateIdx].idx;
    DBG_INFO("settingChSetAntSetupSatelliteSelEnterHandle:"+currSatelliteMapIdx+",id:"+opData.selectedSatelliteIdList[currSatelliteMapIdx]);
    //get the current satellite lnb frequency
    getChSetAntSetupLnbFreIdx();
    hiWebOsFrame.ChSetAntSetupPage.rewrite();
    hiWebOsFrame.ChSetAntSetupPage.hiFocus("settingChSetAntSetupSateNav");
    settingChSetAntSetupSatelliteSelChangeStyle();
}
function settingChSetAntSetupSatelliteSelChangeStyle(){
    var opData = settingChSetAntSetupPageData.operateData;
    switch (opData.satelliteNum){
        case 1:
            $(".channelAntSetupListUl li").css("width","888px");
            break;
        default :
            $(".channelAntSetupListUl li").css("width","444px");
            break;
    }

}
function setChSetAntSetupSetLNBFreq(){
    var opData = settingChSetAntSetupPageData.operateData;
    opData.currLNBFreIdx = this.SelectedIndex;
    var currSatelliteMapIdx = opData.selectSatelliteMapList[opData.currSelectSateIdx].idx;
    if(tv){
        model.satellite.BandLow(opData.selectedSatelliteIdList[currSatelliteMapIdx],opData.optionalFreq[opData.currLNBFreIdx].low);
        model.satellite.BandHigh(opData.selectedSatelliteIdList[currSatelliteMapIdx],opData.optionalFreq[opData.currLNBFreIdx].high);
    }
    opData.currSatelliteLnbLowList[currSatelliteMapIdx] = opData.optionalFreq[opData.currLNBFreIdx].low;
    opData.currSatelliteLnbHighList[currSatelliteMapIdx] = opData.optionalFreq[opData.currLNBFreIdx].high;
    hiWebOsFrame.ChSetAntSetupPage.rewriteDataOnly();
}
function setChSetAntSetupTone22K(){
    try{
        var opData = settingChSetAntSetupPageData.operateData;
        opData.currTone22KIdx = this.SelectedIndex;
        if(tv){
            model.satellite.set22kSwitch(opData.tone22KMapList[opData.currTone22KIdx].map);
        }
        this.page.rewriteDataOnly();
    }catch (ex){
        DBG_ERROR("setChSetAntSetupTone22K:"+ex.message);
    }

}
function settingChSetAntSetupEscHandle(){
    hiWebOsFrame.ChSetAntSetupPage.close();
    hiWebOsFrame.ChSetAntSetupPage.origin.hiFocus();
    hiWebOsFrame.ChSetAntSetupPage.destroy();
}
function settingChSetAntSetupPageOnOpen(){
    var opData = settingChSetAntSetupPageData.operateData;
    DBG_INFO("settingChSetAntSetupPageOnOpen:"+opData.currSatelliteMode);
    if(opData.currSatelliteMode == 0){
        $("#settingChSetAntSetupBodyId").css("height","720px").css("top","180px");
        $("#settingChSetAntSetupSingleCon").css("display","block");
        $("#settingChSetAntSetupSateNavCon").css("display","none");
    }else{
        $("#settingChSetAntSetupBodyId").css("height","800px").css("top","120px");
        $("#settingChSetAntSetupSingleCon").css("display","none");
        $("#settingChSetAntSetupSateNavCon").css("display","block");
        settingChSetAntSetupSatelliteSelChangeStyle();
    }
}
function settingChSetAntSetupPageOnDestroy(){
    hiWebOsFrame.ChSetAntSetupPage = null;
}