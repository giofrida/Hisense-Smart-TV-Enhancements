/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBT2PageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBT2PageTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBT2ScanMTitle",
            "description":"搜台模式标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBT2ScanMValue",
            "description":"搜台模式",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDVBT2ScanMNav",
            "description":"搜台模式列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBT2ScanM",
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
                "NavigationBarDataItem":["settingChSetDVBT2ScanM"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"","downTo":"settingChSetDVBT2ScramMNav","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingChSetDVBT2ScanMode"
            }
        },
        {
            "id":"settingChSetDVBT2ScramMTitle",
            "description":"搜索模式标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBT2ScramMValue",
            "description":"当前搜索模式",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBT2ScramMNav",
            "description":"搜索模式列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetDVBT2ScramM",
                    "description":"搜索模式名称",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_2_Normal","focus":"wizardSetItemListLi_2_Focus",
                "dataSelected":"wizardSetItemListLi_2_Selected","disable":"wizardSetItemListLi_2_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetDVBT2ScramM"],
                "PageSize":2,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"settingChSetDVBT2ScanMNav","downTo":"settingChSetDVBT2LCNSwitch","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingDVBT2ScramMode"
            }
        },
        {
            "id":"settingChSetDVBT2LCNTitle",
            "description":"LCN标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetDVBT2LCNSwitch",
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
                "upTo":"settingChSetDVBT2ScramMNav","downTo":"settingChSetDVBT2NextBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"setSettingChSetDVBT2LCNSwitch"
            }
        },
        {
            "id":"settingChSetDVBT2PrvBtn",
            "description":"上一步",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetDVBT2LCNSwitch","downTo":"","leftTo":"","rightTo":"settingChSetDVBT2NextBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBT2ToMainPage"
            }
        },
        {
            "id":"settingChSetDVBT2NextBtn",
            "description":"完成",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetDVBT2LCNSwitch","downTo":"","leftTo":"settingChSetDVBT2PrvBtn","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBT2ToAutoPage"
            }
        }
    ];
    settingInitChSetDVBT2PageData();
    return settingChSetDVBT2PageData;
}
var settingChSetDVBT2PageData={
    "settingChSetDVBT2PageTitle":{"Data":"Search setup"},
    "settingChSetDVBT2ScanMTitle":{"Data":"Scan Mode:"},
    "settingChSetDVBT2ScanMValue":{"Data":"DTV"},
    "settingChSetDVBT2ScanMNav":{
        "Data":[
            {
                "settingChSetDVBT2ScanM":{"Data":"ATV"}
            },
            {
                "settingChSetDVBT2ScanM":{"Data":"DTV"}
            },
            {
                "settingChSetDVBT2ScanM":{"Data":"ATV+DTV"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBT2ScramMTitle":{"Data":"Channel:"},
    "settingChSetDVBT2ScramMValue":{"Data":"All Channels"},
    "settingChSetDVBT2ScramMNav":{
        "Data":[
            {
                "settingChSetDVBT2ScramM":{"Data":"All channels"}
            },
            {
                "settingChSetDVBT2ScramM":{"Data":"Free channels"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBT2LCNTitle":{"Data":"LCN:"},
    "settingChSetDVBT2LCNSwitch":{
        "Data":{
            switchType:true,
            switchText:""
        }

    },
    "settingChSetDVBT2PrvBtn":{"Data":"Back"},
    "settingChSetDVBT2NextBtn":{"Data":"Done"},
    "operateData":{
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
        "LCNSwitchEnable":1,
        "LCNSwitch":0
    },
    "langData":{
        "Search setup":["Search setup"],
        "Scan Mode:":["Scan Mode:"],
        "ATV":["ATV"],
        "DTV":["DTV"],
        "ATV+DTV":["ATV+DTV"],
        "Channel:":["Channel:"],
        "All Channels":["All Channels"],
        "Free Channels":["Free Channels"],
        "LCN:":["LCN:"],
        "Back":["Back"],
        "Done":["Done"]
    },
    rewrite:"settingRewriteChSetDVBT2Page"
}
/*******************************************************************
 name:settingInitChSetDVBT2PageData
 description:初始化DVBT第二部设置页
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBT2PageData(){
    try{
        var data = settingChSetDVBT2PageData;
        if(tv == false){
            data.operateData.currScanModeIdx = 0;
            data.operateData.LCNSwitchEnable = 0;
            data.operateData.LCNSwitch = 0;
            data.operateData.currScramModeIdx = 0;
        }else{
            var currScanMode = model.channelSearch.getScanMode();
            debugPrint("settingInitChSetDVBT2PageData:currScanMode="+currScanMode,DebugLevel.ALWAYS);
            for(var i = 0; i < data.operateData.scanModeMapList.length;i++){
                if(currScanMode == data.operateData.scanModeMapList[i].map){
                    data.operateData.currScanModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.scanModeMapList.length){
                data.operateData.currScanModeIdx = 0;
                model.channelSearch.setScanMode(data.operateData.scanModeMapList[0].map);
            }
            var currScramMode = model.channelSearch.getScramble();
            for(i = 0; i < data.operateData.scramModeMapList.length;i++){
                if(currScramMode == data.operateData.scramModeMapList[i].map){
                    data.operateData.currScramModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.scramModeMapList.length){
                debugPrint("settingInitDVBT2PageData:currScramMode="+currScramMode,DebugLevel.ERROR);
                model.channelSearch.setScramble(data.operateData.scramModeMapList[0].map);
                data.operateData.currScramModeIdx = 0;
            }
            data.operateData.LCNSwitchEnable = model.channelSearch.getLcnEnable();
            data.operateData.LCNSwitch = model.channelSearch.getLcn();
            DBG_INFO("settingInitChSetDVBT2PageData:LCNSwitchEnable="+data.operateData.LCNSwitchEnable);
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBT2PageData"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDVBT2Page
 description:刷新DVBT2页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBT2Page(data){
    try{
        if(data.settingChSetDVBT2ScanMNav.Data.length > data.operateData.scanModeMapList.length){
            data.settingChSetDVBT2ScanMNav.Data.splice(data.operateData.scanModeMapList.length);
        }else{
            while(data.settingChSetDVBT2ScanMNav.Data.length < data.operateData.scanModeMapList.length){
                var itemData = {
                    "settingChSetDVBT2ScanM":{"Data":""}
                }
                data.settingChSetDVBT2ScanMNav.Data.push(itemData);
            }
        }
        $.each(data.operateData.scanModeMapList,function(idx,item){
            data.settingChSetDVBT2ScanMNav.Data[idx].settingChSetDVBT2ScanM.Data = item.name;
        })
        data.settingChSetDVBT2ScanMNav.DataSelectedIndex = data.operateData.currScanModeIdx;
        data.settingChSetDVBT2ScanMNav.SelectedIndex = data.operateData.currScanModeIdx;
        data.settingChSetDVBT2ScanMValue.Data = data.operateData.scanModeMapList[data.operateData.currScanModeIdx].name;
        if(data.settingChSetDVBT2ScramMNav.Data.length > data.operateData.scramModeMapList.length){
            data.settingChSetDVBT2ScramMNav.Data.splice(data.operateData.scramModeMapList.length);
        }else{
            while(data.settingChSetDVBT2ScramMNav.Data.length < data.operateData.scramModeMapList.length){
                var itemData = {
                    "settingChSetDVBT2ScramM":{"Data":""}
                }
                data.settingChSetDVBT2ScramMNav.Data.push(itemData);
            }
        }
        $.each(data.operateData.scramModeMapList,function(idx,item){
            data.settingChSetDVBT2ScramMNav.Data[idx].settingChSetDVBT2ScramM.Data = item.name;
        })
        data.settingChSetDVBT2ScramMNav.SelectedIndex = data.operateData.currScramModeIdx;
        data.settingChSetDVBT2ScramMNav.DataSelectedIndex = data.operateData.currScramModeIdx;
        data.settingChSetDVBT2ScramMValue.Data = data.operateData.scramModeMapList[data.operateData.currScramModeIdx].name;


        if(data.operateData.LCNSwitch == 0){
            data.settingChSetDVBT2LCNSwitch.Data.switchType = false;
        }else{
            data.settingChSetDVBT2LCNSwitch.Data.switchType = true;
        }
        if(data.operateData.LCNSwitchEnable == 0){
            data.settingChSetDVBT2LCNSwitch.disable = true;
        }else{
            data.settingChSetDVBT2LCNSwitch.disable = false;
        }

    }catch (ex){
        debugPrint("settingRewriteChSetDVBT2Page"+ex.message,DebugLevel.ERROR)
    }
}
/*******************************************************************
 name:setSettingChSetDVBT2ScanMode
 description:设置使用的搜台方式
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBT2ScanMode(){
    try{
        var data = settingChSetDVBT2PageData;
        this.DataSelectedIndex = this.SelectedIndex;
        data.operateData.currScanModeIdx =  this.SelectedIndex;
        if(tv == true){
            model.channelSearch.setScanMode(data.operateData.scanModeMapList[this.SelectedIndex].map);
        }
        hiWebOsFrame.ChSetDVBT2Page.rewriteDataOnly();
    }catch (ex){
        debugPrint("setSettingChSetDVBT2ScanMode:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingDVBT2ScramMode
 description:设置加密方式
 input:
 output:
 return
 *******************************************************************/
function setSettingDVBT2ScramMode(){
    var data = settingChSetDVBT2PageData;
    data.operateData.currScramModeIdx = this.SelectedIndex;
    if(tv == true){
        model.channelSearch.setScramble(data.operateData.scramModeMapList[data.operateData.currScramModeIdx].map);
    }
    hiWebOsFrame.ChSetDVBT2Page.rewriteDataOnly();
}
/*******************************************************************
 name:setSettingChSetDVBT2LCNSwitch
 description:设置LCN开关
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBT2LCNSwitch(){
    try{
        var data = settingChSetDVBT2PageData;
        if(data.operateData.LCNSwitch == 0){
            data.operateData.LCNSwitch = 1;
        }else{
            data.operateData.LCNSwitch = 0;
        }
        hiWebOsFrame.ChSetDVBT2Page.rewriteDataOnly();
        if(tv == true){
            model.channelSearch.setLcn(data.operateData.LCNSwitch);
        }
    }catch (ex){
        debugPrint("setSettingChSetDVBT2LCNSwitch:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDVBT2ToAutoPage
 description:从DVBC设置主页DVBC信息展示页
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBT2ToAutoPage(){
    hiWebOsFrame.createPage('settingChSetDVBAutoPageId',null, null, null,function(a){
        hiWebOsFrame.ChSetDVBAutoPage = a;
        hiWebOsFrame.ChSetDVBT2Page.close();
        a.open();
        a.hiFocus("settingChSetDVBAutoStartBtn");
        hiWebOsFrame.ChSetDVBT2Page.destroy();
        hiWebOsFrame.ChSetMainPage.destroy();
    });
}
/*******************************************************************
 name:settingChSetDVBT2ToMainPage
 description:从设置DVBS第2部到设置主页
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBT2ToMainPage(){
    hiWebOsFrame.ChSetDVBT2Page.close();
    hiWebOsFrame.ChSetDVBT2Page.destroy();

    hiWebOsFrame.ChSetMainPage.open();
    hiWebOsFrame.ChSetMainPage.hiFocus();
}

function settingChSetDVBT2PageOnDestroy(){
    hiWebOsFrame.ChSetDVBT2Page = null;
}
