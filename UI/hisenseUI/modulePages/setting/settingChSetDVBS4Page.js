/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBS4PageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetDVBS4PageTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS4PowerTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS4PowerSwitch",
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
                "upTo":"","downTo":"settingChSetDVBS4Tone22KNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingDVBS4PowerSwitch"
            }
        },
        {
            "id":"settingChSetDVBS4Tone22KTitle",
            "description":"当前使用22K标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBS4Tone22KValue",
            "description":"当前使用22K值",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDVBS4Tone22KNav",
            "description":"22K选项列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBS4Tone22K",
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
                "NavigationBarDataItem":["settingChSetDVBS4Tone22K"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBS4PowerSwitch","downTo":"settingChSetDVBS4BandNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingDVBS4Tone22K"
            }
        },
        {
            "id":"settingChSetDVBS4BandTitle",
            "description":"当前使用BAND标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBS4BandValue",
            "description":"当前使用BAND",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDVBS4BandNav",
            "description":"Band列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBS4Band",
                    "description":"Band名",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_4_Normal","focus":"wizardSetItemListLi_4_Focus",
                "dataSelected":"wizardSetItemListLi_4_Selected","disable":"wizardSetItemListLi_4_Disable",
                "disableDataSelected":"wizardSetItemListLi_4_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetDVBS4Band"],
                "PageSize":4,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBS4Tone22KNav","downTo":"settingChSetDVBS4BandFreBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingDVBS4UseBand"
            }
        },
        {
            "id":"settingChSetDVBS4BandFreTitle",
            "description":"Band Frequency标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBS4BandFreValue",
            "description":"Band Frequency",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemTitleValue"
            }
        },
        {
            "id":"settingChSetDVBS4BandFreBtn",
            "description":"Band Frequency调整按钮",
            "CaEType": "div",
            "classes":{
                "normal": "wizardAdjustBtnNormal", "focus": "wizardAdjustBtnFocus","disable":"wizardAdjustBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetDVBS4BandNav","downTo":"settingChSetDVBS4SearMNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetChangeBandFre"
            }
        },
        {
            "id":"settingChSetDVBS4SearMTitle",
            "description":"搜台模式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS4SearMValue",
            "description":"当前搜台模式",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS4SearMNav",
            "description":"搜台模式列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBS4SearM",
                    "description":"搜索模式名称",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_2_Normal","focus":"wizardSetItemListLi_2_Focus",
                "dataSelected":"wizardSetItemListLi_2_Selected","disable":"wizardSetItemListLi_2_Disable",
                "disableDataSelected":"wizardSetItemListLi_2_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetDVBS4SearM"],
                "PageSize":2,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBS4BandFreBtn","downTo":"settingChSetDVBS4ScramMNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingDVBS4SearMode"
            }
        },
        {
            "id":"settingChSetDVBS4ScramMTitle",
            "description":"搜索模式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS4ScramMValue",
            "description":"当前搜索模式",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS4ScramMNav",
            "description":"搜索模式列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBS4ScramM",
                    "description":"搜索模式名称",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_2_Normal","focus":"wizardSetItemListLi_2_Focus",
                "dataSelected":"wizardSetItemListLi_2_Selected","disable":"wizardSetItemListLi_2_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetDVBS4ScramM"],
                "PageSize":2,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBS4SearMNav","downTo":"settingChSetDVBS4LCNSwitch","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingDVBS4ScramMode"
            }
        },
        {
            "id":"settingChSetDVBS4LCNTitle",
            "description":"LCN标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS4LCNSwitch",
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
                "upTo":"settingChSetDVBS4ScramMNav","downTo":"settingChSetDVBS4NextBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingDVBS4LCNSwitch"
            }
        },
        {
            "id":"settingChSetDVBS4PrvBtn",
            "description":"上一步",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetDVBS4LCNSwitch","downTo":"","leftTo":"","rightTo":"settingChSetDVBS4NextBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBS4ToDVBS3"
            }
        },
        {
            "id":"settingChSetDVBS4NextBtn",
            "description":"下一步",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetDVBS4LCNSwitch","downTo":"","leftTo":"settingChSetDVBS4PrvBtn","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBS4ToNextPage"
            }
        }
    ];
    settingInitDVBS4PageData();
    return  settingChSetDVBS4PageData;
}
var settingChSetDVBS4PageData={
    "settingChSetDVBS4PageTitle":{"Data":"Search Setup"},
    "settingChSetDVBS4PowerTitle":{"Data":"LNB Power:"},
    "settingChSetDVBS4PowerSwitch":{
        "Data":{
            switchType:true,
            switchText:''
        }
    },
    "settingChSetDVBS4Tone22KTitle":{"Data":"Tone 22KHz:"},
    "settingChSetDVBS4Tone22KValue":{"Data":""},
    "settingChSetDVBS4Tone22KNav":{
        "Data":[
            {
                "settingChSetDVBS4Tone22K":{"Data":"Auto"}
            },
            {
                "settingChSetDVBS4Tone22K":{"Data":"Open"}
            },
            {
                "settingChSetDVBS4Tone22K":{"Data":"Close"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },

    "settingChSetDVBS4BandTitle":{"Data":"User Band:"},
    "settingChSetDVBS4BandValue":{"Data":""},
    "settingChSetDVBS4BandNav":{
        "Data":[
            {
                "settingChSetDVBS4Band":{"Data":"Band1"}
            },
            {
                "settingChSetDVBS4Band":{"Data":"Band2"}
            },
            {
                "settingChSetDVBS4Band":{"Data":"Band3"}
            },
            {
                "settingChSetDVBS4Band":{"Data":"Band4"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBS4BandFreTitle":{"Data":"Band Frequency:"},
    "settingChSetDVBS4BandFreValue":{"Data":""},
    "settingChSetDVBS4BandFreBtn":{"Data":"Adjust"},

    "settingChSetDVBS4SearMTitle":{"Data":"Search Mode:"},
    "settingChSetDVBS4SearMValue":{"Data":"Frequency Scan"},
    "settingChSetDVBS4SearMNav":{
        "Data":[

            {
                "settingChSetDVBS4SearM":{"Data":"Frequency Scan"}
            },
            {
                "settingChSetDVBS4SearM":{"Data":"Network Scan"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },

    "settingChSetDVBS4ScramMTitle":{"Data":"Channel:"},
    "settingChSetDVBS4ScramMValue":{"Data":"All Channels"},
    "settingChSetDVBS4ScramMNav":{
        "Data":[
            {
                "settingChSetDVBS4ScramM":{"Data":"All channels"}
            },
            {
                "settingChSetDVBS4ScramM":{"Data":"Free channels"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBS4LCNTitle":{"Data":"LCN:"},
    "settingChSetDVBS4LCNSwitch":{
        "Data":{
            switchType:true,
            switchText:''
        }
    },
    "settingChSetDVBS4PrvBtn":{"Data":"Back"},
    "settingChSetDVBS4NextBtn":{"Data":"Next"},
    "operateData":{
        "currSatelliteMode":0,//0 single,1:tone burst,2:desiqc,3:unicable
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
        ],
        "currUseBandIdx":0,
        "currBandFreq":"",
        "bandList":[],
        "oriBandFreq":[],

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
        "currSearchModeIdx":0,
        "searchModeMapList":[
            {
                "map":0,
                "name":"Frequency Scan"
            },
            {
                "map":1,
                "name":"Network Scan"
            }
        ],
        "LNBPowerSwitch":0,
        "LCNSwitchEnable":1,
        "LCNSwitch":0
    },
    "langData":{
        "Search Setup":["Search Setup"],
        "LNB Power:":["LNB Power:"],
        "Tone 22KHz:":["Tone 22KHz:"],
        "Auto":["Auto"],
        "Open":["Open"],
        "Close":["Close"],
        "Channel:":["Channel:"],
        "All Channels":["All Channels"],
        "Free Channels":["Free Channels"],
        "Search Mode:":["Search Mode:"],
        "Frequency Scan":["Frequency Scan"],
        "Network Scan":["Network Scan"],
        "User Band:":["User Band:"],
        "Band1":["Band1"],
        "Band2":["Band2"],
        "Band3":["Band3"],
        "Band4":["Band4"],
        "Band5":["Band5"],
        "Band6":["Band6"],
        "Band7":["Band7"],
        "Band8":["Band8"],
        "Band Frequency:":["Band Frequency:"],
        "Adjust":["Adjust"],
        "LCN:":["LCN"],
        "Back":["Back"],
        "Next":["Next"],
        "Others":["Others"]
    },
    rewrite:"settingRewriteDVBS4Page"
}
/*******************************************************************
 name:settingInitDVBS4PageData
 description:初始化第五步
 input:
 output:
 return
 *******************************************************************/
function settingInitDVBS4PageData(){
    var data = settingChSetDVBS4PageData;
    try{
        if(tv == false){
            data.operateData.currSatelliteMode = 3;
            if(data.operateData.currSatelliteMode == 3){
                data.operateData.currUseBandIdx = 0;
                data.operateData.currBandFreq = 0;
                data.operateData.bandList = [1,2,3,4,5,6,7,8];
                data.operateData.oriBandFreq = [1000,2000,3000,4000,5000,6000,7000,8000];
            }else{
                data.operateData.currTone22KIdx = 0;
                data.operateData.LNBPowerSwitch = 0;
            }

            data.operateData.currScramModeIdx = 0;
            data.operateData.currSearchModeIdx = 0;
            data.operateData.LCNSwitchEnable = 0;
            data.operateData.LCNSwitch = 0;
        }else{

            data.operateData.currSatelliteMode = model.satellite.getInstallation();
            if(data.operateData.currSatelliteMode == 3){
                data.operateData.bandList = model.satellite.getUnicableBandList();
                var currUseBand = model.satellite.getUnicableBand();
                for(var i = 0; i < data.operateData.bandList.length; i++){
                    if(currUseBand == data.operateData.bandList[i]){
                        data.operateData.currUseBandIdx = i;
                        break;
                    }
                }
                if(currUseBand == data.operateData.bandList.length){
                    debugPrint("settingInitDVBS4PageData:currUseBand="+currUseBand,DebugLevel.ERROR);
                    model.satellite.setUnicableBand(data.operateData.bandList[0]);
                    data.operateData.currUseBandIdx = 0;
                }
                data.operateData.currBandFreq = model.satellite.getUnicableBandFrequency();
                data.operateData.oriBandFreq = model.satellite.getUnicableBandFrequencyList();
                //debugPrint("settingInitDVBS4PageData:"+data.operateData.oriBandFreq,DebugLevel.ALWAYS);
            }else{
                var currTone22K = model.satellite.get22kSwitch();
                for(var i = 0; i < data.operateData.tone22KMapList.length; i++){
                    if(currTone22K == data.operateData.tone22KMapList[i].map){
                        data.operateData.currTone22KIdx = i;
                        break;
                    }
                }
                if(i == data.operateData.tone22KMapList.length){
                    debugPrint("settingInitDVBS4PageData:currTone22K="+currTone22K,DebugLevel.ERROR);
                    model.channelSearch.set22kSwitch(data.operateData.tone22KMapList[0].map);
                    data.operateData.currTone22KIdx = 0;
                }
                try{
                    data.operateData.LNBPowerSwitch = model.satellite.getLnbPower();
                }catch (ex){
                    data.operateData.LNBPowerSwitch = 0;

                }
            }
            try{
                var currScramMode = model.channelSearch.getScramble();
            }catch (ex){
                currScramMode = 0;
            }

            for(i = 0; i < data.operateData.scramModeMapList.length;i++){
                if(currScramMode == data.operateData.scramModeMapList[i].map){
                    data.operateData.currScramModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.scramModeMapList.length){
                debugPrint("settingInitDVBS4PageData:currScramMode="+currScramMode,DebugLevel.ERROR);
                model.channelSearch.setScramble(data.operateData.scramModeMapList[0].map);
                data.operateData.currScramModeIdx = 0;
            }
            try{
                var currSearchMode = model.satellite.getSearchMode();
            }catch (ex){
                currSearchMode = 0;
            }
            for(i = 0; i < data.operateData.searchModeMapList.length;i++){
                if(currSearchMode == data.operateData.searchModeMapList[i].map){
                    data.operateData.currSearchModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.searchModeMapList.length){
                model.satellite.setSearchMode(data.operateData.searchModeMapList[0].map);
                data.operateData.currSearchModeIdx = 0;
            }
            try{
                data.operateData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
                data.operateData.LCNSwitch = model.channelSearch.getLcn();
            }catch (ex){
                data.operateData.LCNSwitch = 0;
            }
        }
    }catch (ex){
        debugPrint("settingInitDVBS4PageData:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteDVBS4Page
 description:
 input:
 output:
 return
 *******************************************************************/
function settingRewriteDVBS4Page(data){
    try{
        var currentOperatorName=settingChSetMainPagegetcurrOperatorName();
        if(data.operateData.currSatelliteMode == 3){
            data.settingChSetDVBS4PowerTitle.disable = true;
            data.settingChSetDVBS4PowerSwitch.disable = true;
            data.settingChSetDVBS4Tone22KTitle.disable = true;
            data.settingChSetDVBS4Tone22KValue.disable = true;
            data.settingChSetDVBS4Tone22KNav.disable = true;
            data.settingChSetDVBS4BandTitle.disable = false;
            data.settingChSetDVBS4BandValue.disable = false;
            data.settingChSetDVBS4BandNav.disable = false;
            $.each(data.settingChSetDVBS4BandNav.Data,function(idx,item){
                item.settingChSetDVBS4Band.disable = false;
            })
            data.settingChSetDVBS4BandFreBtn.disable = false;
            if(data.operateData.bandList.length > 0){
                if(data.settingChSetDVBS4BandNav.Data.length > data.operateData.bandList.length){
                    data.settingChSetDVBS4BandNav.Data.splice(data.operateData.bandList.length);
                }else{
                    while(data.settingChSetDVBS4BandNav.Data.length < data.operateData.bandList.length){
                        var item = {
                            settingChSetDVBS4Band:{"Data":""}
                        };
                        data.settingChSetDVBS4BandNav.Data.push(item);
                    }
                }
                $.each(data.operateData.bandList,function(idx,item){
                    var currBandInfo = parseInt(item)+1;
                    var htmlData = "Band"+currBandInfo;
                    data.settingChSetDVBS4BandNav.Data[idx].settingChSetDVBS4Band.Data = htmlData;
                })
                data.settingChSetDVBS4BandNav.SelectedIndex = data.operateData.currUseBandIdx;
                data.settingChSetDVBS4BandNav.DataSelectedIndex = data.operateData.currUseBandIdx;
                data.settingChSetDVBS4BandValue.Data =
                    data.settingChSetDVBS4BandNav.Data[data.operateData.currUseBandIdx].settingChSetDVBS4Band.Data;
                data.settingChSetDVBS4BandFreValue.Data = data.operateData.currBandFreq+" KHz";
            }
        }else{
            data.settingChSetDVBS4BandTitle.disable = true;
            data.settingChSetDVBS4BandValue.disable = true;
            data.settingChSetDVBS4BandNav.disable = true;
            data.settingChSetDVBS4BandFreBtn.disable = true;

            data.settingChSetDVBS4PowerTitle.disable = false;
            data.settingChSetDVBS4PowerSwitch.disable = false;
            data.settingChSetDVBS4Tone22KTitle.disable = false;
            data.settingChSetDVBS4Tone22KValue.disable = false;
            data.settingChSetDVBS4Tone22KNav.disable = false;
            $.each(data.settingChSetDVBS4Tone22KNav.Data,function(idx,item){
                item.settingChSetDVBS4Tone22K.disable = false;
            })
            if(data.operateData.LNBPowerSwitch == 0){
                data.settingChSetDVBS4PowerSwitch.Data.switchText = "";
                data.settingChSetDVBS4PowerSwitch.Data.switchType = false;
            }else{
                data.settingChSetDVBS4PowerSwitch.Data.switchText = "";
                data.settingChSetDVBS4PowerSwitch.Data.switchType = true;
            }
            if(data.operateData.tone22KMapList.length > 0){
                if(data.settingChSetDVBS4Tone22KNav.Data.length > data.operateData.tone22KMapList.length){
                    data.settingChSetDVBS4Tone22KNav.Data.splice(data.operateData.tone22KMapList.length);
                }else{
                    while(data.settingChSetDVBS4Tone22KNav.Data.length < data.operateData.tone22KMapList.length){
                        var item = {
                            settingChSetDVBS4Tone22K:{"Data":""}
                        };
                        data.settingChSetDVBS4Tone22KNav.Data.push(item);
                    }
                }
                $.each(data.operateData.tone22KMapList,function(idx,item){
                    data.settingChSetDVBS4Tone22KNav.Data[idx].settingChSetDVBS4Tone22K.Data = item.name;
                })
                data.settingChSetDVBS4Tone22KNav.SelectedIndex = data.operateData.currTone22KIdx;
                data.settingChSetDVBS4Tone22KNav.DataSelectedIndex = data.operateData.currTone22KIdx;
                data.settingChSetDVBS4Tone22KValue.Data = data.operateData.tone22KMapList[data.operateData.currTone22KIdx].name;
            }
            if(data.operateData.currSatelliteMode == 2){
                //desiqc
                data.settingChSetDVBS4Tone22KNav.disable = false;
                for(var i = 0; i < data.settingChSetDVBS4Tone22KNav.Data.length; i++){
                    data.settingChSetDVBS4Tone22KNav.Data[i].settingChSetDVBS4Tone22K.disable = false;
                }
            }else{
                data.settingChSetDVBS4Tone22KNav.disable = true;
            }
        }

        if(data.settingChSetDVBS4ScramMNav.Data.length > data.operateData.scramModeMapList.length){
            data.settingChSetDVBS4ScramMNav.Data.splice(data.operateData.scramModeMapList.length);
        }else{
            while(data.settingChSetDVBS4ScramMNav.Data.length < data.operateData.scramModeMapList.length){
                var itemData = {
                    "settingChSetDVBS4ScramM":{"Data":""}
                }
                data.settingChSetDVBS4ScramMNav.Data.push(itemData);
            }
        }
        $.each(data.operateData.scramModeMapList,function(idx,item){
            data.settingChSetDVBS4ScramMNav.Data[idx].settingChSetDVBS4ScramM.Data = item.name;
        })
        data.settingChSetDVBS4ScramMNav.SelectedIndex = data.operateData.currScramModeIdx;
        data.settingChSetDVBS4ScramMNav.DataSelectedIndex = data.operateData.currScramModeIdx;
        data.settingChSetDVBS4ScramMValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;

        if(data.settingChSetDVBS4SearMNav.Data.length > data.operateData.searchModeMapList.length){
            data.settingChSetDVBS4SearMNav.Data.splice(data.operateData.searchModeMapList.length);
        }else{
            while(data.settingChSetDVBS4SearMNav.Data.length < data.operateData.searchModeMapList.length){
                var itemData = {
                    "settingChSetDVBS4SearM":{"Data":""}
                }
                data.settingChSetDVBS4SearMNav.Data.push(itemData);
            }
        }
        $.each(data.operateData.searchModeMapList,function(idx,item){
            debugPrint(""+item.name);
            data.settingChSetDVBS4SearMNav.Data[idx].settingChSetDVBS4SearM.Data = item.name;
        })

        data.settingChSetDVBS4SearMNav.SelectedIndex = data.operateData.currSearchModeIdx;
        data.settingChSetDVBS4SearMNav.DataSelectedIndex = data.operateData.currSearchModeIdx;

        data.settingChSetDVBS4SearMValue.Data = data.operateData.searchModeMapList[data.operateData.currSearchModeIdx].name;

        if(currentOperatorName!="Others"){
            data.settingChSetDVBS4SearMNav.disable=true;
        }
        else
        {
            data.settingChSetDVBS4SearMNav.disable = false;
            for(var i = 0; i < data.settingChSetDVBS4SearMNav.Data.length; i++){
                data.settingChSetDVBS4SearMNav.Data[i].settingChSetDVBS4SearM.disable = false;
            }
        }
        if(data.operateData.LCNSwitch == 0){
            data.settingChSetDVBS4LCNSwitch.Data.switchText = "";
            data.settingChSetDVBS4LCNSwitch.Data.switchType = false;
        }else{
            data.settingChSetDVBS4LCNSwitch.Data.switchText = "";
            data.settingChSetDVBS4LCNSwitch.Data.switchType = true;
        }
        if(data.operateData.LCNSwitchEnable == 0||currentOperatorName!="Others"){
            data.settingChSetDVBS4LCNSwitch.disable = true;
        }else{
            data.settingChSetDVBS4LCNSwitch.disable = false;
        }
    }catch (ex){
        debugPrint("settingRewriteDVBS4Page "+ex.message,DebugLevel.ERROR);
    }
}
function setSettingDVBS4PowerSwitch(){
    var data = settingChSetDVBS4PageData;
    if(data.operateData.LNBPowerSwitch == 0){
        data.operateData.LNBPowerSwitch=1;
    }else{
        data.operateData.LNBPowerSwitch=0;
    }
    if(tv == true){
        try{
            model.satellite.setLnbPower(data.operateData.LNBPowerSwitch);
        }catch (ex){
            debugPrint("setSettingDVBS4PowerSwitch:"+ex.message,DebugLevel.ERROR);
        }

    }
    hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
}
/*******************************************************************
 name:setSettingDVBS4Tone22K
 description:设置使用的频带
 input:
 output:
 return
 *******************************************************************/
function setSettingDVBS4Tone22K(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = settingChSetDVBS4PageData;
    data.operateData.currTone22KIdx = this.SelectedIndex;
    if(tv == true){
        try{
            model.satellite.set22kSwitch(data.operateData.tone22KMapList[this.SelectedIndex].map);
        }catch (ex){
            debugPrint("setSettingDVBS4Tone22K:"+ex.message,DebugLevel.ERROR);
        }
    }
    hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
}
/*******************************************************************
 name:setSettingDVBS4UseBand
 description:设置使用的频带
 input:
 output:
 return
 *******************************************************************/
function setSettingDVBS4UseBand(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = settingChSetDVBS4PageData;
    data.operateData.currUseBandIdx = this.SelectedIndex;
    data.operateData.currBandFreq = data.operateData.oriBandFreq[this.SelectedIndex];
    if(tv == true){
        model.satellite.setUnicableBand(data.operateData.bandList[this.SelectedIndex]);
    }
    hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
}
function settingChSetChangeBandFre(){
    hiWebOsFrame.createPage('settingChSetBandFreInputDialogId', null, null, null, function(a) {
        hiWebOsFrame.ChSetBandFreInputDialog = a;
        a.open();
        a.hiFocus();
    });
}
function setSettingChSetBandFre(fre){
    try{
        var data = settingChSetDVBS4PageData;
        debugPrint("setSettingChSetBandFre:fre="+fre,DebugLevel.ALWAYS);
        data.operateData.currBandFreq = fre;
        if(tv == true){
            model.satellite.setUnicableBandFrequency(parseInt(fre));
        }
        hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
    }catch (ex){
        debugE("setSettingChSetBandFre:"+ex.message);
    }
}
function settingChSetGetDefaultBandFre(){
    var data = settingChSetDVBS4PageData;
    return data.operateData.oriBandFreq[data.operateData.currUseBandIdx];
}
function setSettingDVBS4SearMode(){
    var data = settingChSetDVBS4PageData;
    data.operateData.currSearchModeIdx = this.SelectedIndex;
    if(tv == true){
        try{
            model.satellite.setSearchMode(data.operateData.searchModeMapList[data.operateData.currSearchModeIdx].map);
        }catch (ex){
            debugPrint("setSettingDVBS4SearMode"+ex.message,DebugLevel.ERROR);
        }
    }
    hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
}
function setSettingDVBS4LCNSwitch(){
    var data = settingChSetDVBS4PageData;
    if(data.operateData.LCNSwitch == 0){
        data.operateData.LCNSwitch=1;
    }else{
        data.operateData.LCNSwitch=0;
    }
    if(tv == true){
        try{
            model.channelSearch.setLcn(data.operateData.LCNSwitch);
        }catch (ex){
            debugE(ex.message);
        }
    }
    hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
}
function setSettingDVBS4ScramMode(){
    var data = settingChSetDVBS4PageData;
    data.operateData.currScramModeIdx = this.SelectedIndex;
    if(tv == true){
        try{
            model.channelSearch.setScramble(data.operateData.scramModeMapList[data.operateData.currScramModeIdx].map);
        }catch (ex){
            debugE(ex.message);
        }
    }
    hiWebOsFrame.ChSetDVBS4Page.rewriteDataOnly();
}
function settingChSetDVBS4ToNextPage(){
    hiWebOsFrame.createPage("settingChSetDVBAutoPageId",null, null, null,function(a){
        hiWebOsFrame.ChSetDVBAutoPage= a;
        hiWebOsFrame.ChSetDVBS4Page.close();
        a.open();
        a.hiFocus("settingChSetDVBAutoStartBtn");
        hiWebOsFrame.ChSetDVBS4Page.destroy();
        hiWebOsFrame.ChSetDVBS3Page.destroy();
        hiWebOsFrame.ChSetDVBS2Page.destroy();
        hiWebOsFrame.ChSetMainPage.destroy();
    });
}
function settingChSetDVBS4ToDVBS3(){
    hiWebOsFrame.ChSetDVBS4Page.close();
    hiWebOsFrame.ChSetDVBS3Page.open();
    hiWebOsFrame.ChSetDVBS3Page.hiFocus();
    hiWebOsFrame.ChSetDVBS4Page.destroy();
}
/*******************************************************************
 name:settingChSetDVBS4EscHandle
 description:从第5步返回到第4步
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBS4EscHandle(){
    settingChSetDVBS4ToDVBS3();
}
function settingChSetDVBS4PageOnOpen(){
    var data = settingChSetDVBS4PageData;
    if(data.operateData.currSatelliteMode == 3){
        hiWebOsFrame.ChSetDVBS4Page.firstFocusId = "settingChSetDVBS4BandNav";
        $("#settingChSetDVBS4PowerTitle").parent().css("display","none");
        $("#settingChSetDVBS4Tone22KTitle").parent().css("display","none");
        $("#settingChSetDVBS4Tone22KNav").parent().css("display","none");
    }else{
        hiWebOsFrame.ChSetDVBS4Page.firstFocusId = "settingChSetDVBS4PowerSwitch";
        $("#settingChSetDVBS4BandTitle").parent().css("display","none");
        $("#settingChSetDVBS4BandNav").parent().css("display","none");
        $("#settingChSetDVBS4BandFreTitle").parent().css("display","none");

    }
}
function settingChSetDVBS4PageOnDestroy(){
    hiWebOsFrame.ChSetDVBS4Page = null;
}