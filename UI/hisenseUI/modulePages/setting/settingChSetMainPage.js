/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetMainPageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetMainPageTitle",
            "description":"页标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetTunerModeTitle",
            "description":"Tuner Mode title",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetTunerModeValue",
            "description":"接收方式",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetMainTunerModeList",
            "description":"搜台方式",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetTunerModeName",
                    "description":"搜台方式",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetTunerModeName"],
                "PageSize":3,
                "ArrowFlag":true

            },
            "nav":{
                "upTo":"","downTo":"settingChSetMainSateOperBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetMainSetTunerMode"
            }
        },
        {
            "id":"settingChSetMainSateOperTitle",
            "description":"运营商title",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetMainSateOperValue",
            "description":"运营商value",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetMainSateOperBtn",
            "description":"运营商btn",
            "CaEType":"div",
            "classes":{
                "normal":"wizardAdjustBtnNormal","focus":"wizardAdjustBtnFocus","disable":"wizardAdjustBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetMainTunerModeList","downTo":"settingChSetMainSateTypeList"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBSOperatorAdjustHandle"
            }
        },
        {
            "id":"settingChSetSateTypeTitle",
            "description":"卫星模式标题",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetSateTypeValue",
            "description":"卫星模式",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetMainSateTypeList",
            "description":"卫星模式",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetSateTypeName",
                    "description":"卫星模式名",
                    "CaEType":"div"
                }
            ],

            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetSateTypeName"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "classes":{
                "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable",
                "disableDataSelected":"wizardSetItemListLi_3_Disable"
            },
            "nav":{
                "upTo":"settingChSetMainSateOperBtn","downTo":"settingChSetMainPageNextBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetMainSetSateMode"
            }
        },
        {
            "id":"settingChSetMainPageNextBtn",
            "description":"下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetMainSateTypeList","downTo":"","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetMainToNextPage"
            }
        }
    ];
    settingInitChSetMainPage();
    return settingChSetMainPageData;
}
var settingChSetMainPageData={
    "settingChSetMainPageTitle":{"Data":"Search Setup"},

    "settingChSetTunerModeTitle":{"Data":"Tuner Mode:"},
    "settingChSetTunerModeValue":{"Data":""},
    "settingChSetMainTunerModeList":{
        "Data":[
            {
                "settingChSetTunerModeName":{"Data":"Satellite"}
            },
            {
                "settingChSetTunerModeName":{"Data":"Cable"}
            },
            {
                "settingChSetTunerModeName":{"Data":"Antenna"}
            }
        ],
        "DataSelectedIndex":0,
        "SelectedIndex":0
    },
    "settingChSetMainSateOperTitle":{"Data":"Satellite Operator:"},
    "settingChSetMainSateOperValue":{"Data":"Others"},
    "settingChSetMainSateOperBtn":{"Data":"Adjust"},
    "settingChSetSateTypeTitle":{"Data":"Satellite Mode:"},
    "settingChSetSateTypeValue":{"Data":""},
    "settingChSetMainSateTypeList":{
        "Data":[
            {
                "settingChSetSateTypeName":{"Data":"Single Satellite"}
            },
            {
                "settingChSetSateTypeName":{"Data":"DiSeqc"}
            },
            {
                "settingChSetSateTypeName":{"Data":"Tone Burst"}
            },
            {
                "settingChSetSateTypeName":{"Data":"Unicable"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0,
        "disable":false
    },
    "settingChSetMainPageNextBtn":{"Data":"Next"},
    "operateData":{
        "currTunerModeIdx":0,
        "tunerModeMapList":[
            {
                "map":2,
                "name":"Satellite"
            },
            {
                "map":1,
                "name":"Cable"
            },
            {
                "map":0,
                "name":"Antenna"
            }
        ],
        "DVBSOperatorNum":0,
        "DVBSOperatorList":[],
        "currOperatorId":0,
        "currOperatorName":"Other",
        "currSatelliteModeIdx":0,
        "satelliteModeMapList":[
            {
                "map":0,
                "name":"Single Satellite",//Single Satellite
                "num":1
            },
            {
                "map":1,
                "name":"Tone Burst",//tone brust
                "num":2
            },
            {
                "map":2,
                "name":"DiSeqc",//diseqc
                "num":4
            },
            {
                "map":3,
                "name":"Unicable",//unicable
                "num":2
            }
        ]
    },
    "langData":{
        "Search Setup":["Search Setup"],
        "Tuner Mode:":["Tuner Mode:"],
        "Satellite Operator:":["Satellite Operator:"],
        "Others":["Others"],
        "Satellite Mode:":["Satellite Mode:"],
        "Single Satellite":["Single Satellite"],
        "Tone Burst":["Tone Burst"],
        "DiSeqc":["DiSeqc"],
        "Unicable":["Unicable"],
        "Next":["Next"],
        "Satellite":["Satellite"],
        "Cable":["Cable"],
        "Antenna":["Antenna"],
        "Adjust":["Adjust"]

    },
    rewrite:"settingRewriteChSetMainPage"

}

function getSettingChSetMainDVBSOperator(){
    var data = settingChSetMainPageData;
    if(data.operateData.currTunerModeIdx != 0){//DVBS
        data.operateData.currOperatorId = 0;
        data.operateData.currOperatorName = "Others";
        data.operateData.DVBSOperatorList = [];
        data.operateData.DVBSOperatorNum = 0;
    }else{
        if(tv == false){
            data.operateData.DVBSOperatorNum = 2;
            data.operateData.DVBSOperatorList = [
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
//            data.operateData.DVBSOperatorNum = 1;
//            data.operateData.DVBSOperatorList = [
//                {
//                    "operatorId":0,
//                    "operatorName":"Others",
//                    "selectedFlag":1,
//                    "recvType":0,
//                    "satelliteId":-1
//                }
//            ];
            var operatorList = model.channelSearch.getOperators();
            debugPrint("getSettingChSetDVBSOperator:"+operatorList.length+","+operatorList);
            data.operateData.DVBSOperatorNum = 0;
            data.operateData.DVBSOperatorList = [];
            if(operatorList.length % 5 != 0 && operatorList.length == 0){
                debugE("getSettingChSetDVBSOperator:operator info is error");
                data.operateData.DVBSOperatorNum = 1;
                data.operateData.DVBSOperatorList = [
                    {
                        "operatorId":0,
                        "operatorName":"Others",
                        "selectedFlag":1,
                        "recvType":0,
                        "satelliteId":-1
                    }
                ];
            }else{
                data.operateData.DVBSOperatorNum = operatorList.length/5;
                for(var i = 0; i <  data.operateData.DVBSOperatorNum; i++){
                    var itemData = {
                        "operatorId":0,
                        "operatorName":"Others",
                        "selectedFlag":1,
                        "recvType":0,
                        "satelliteId":-1
                    }
                    itemData.operatorId = operatorList[i*5+0];
                    itemData.operatorName = operatorList[i*5+1];
                    itemData.selectedFlag = operatorList[i*5+2];
                    itemData.recvType = operatorList[i*5+3];
                    itemData.satelliteId = operatorList[i*5+4];
                    data.operateData.DVBSOperatorList.push(itemData);
                }
            }
        }

        for(var i = 0; i < data.operateData.DVBSOperatorNum; i++){
            if(data.operateData.DVBSOperatorList[i].selectedFlag == 1){
                data.operateData.currOperatorId = data.operateData.DVBSOperatorList[i].operatorId;
                data.operateData.currOperatorName = data.operateData.DVBSOperatorList[i].operatorName;
                break;
            }
        }
        if(i == data.operateData.DVBSOperatorNum){
            debugE("getSettingChSetDVBSOperator:not found operator!");
            data.operateData.currOperatorId = 0;
            data.operateData.currOperatorName = "Others";
        }
    }

}
/*******************************************************************
 name:settingInitChSetMainPage
 description:初始化Data
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetMainPage(){
    try{
        var data = settingChSetMainPageData;
        getSettingChSetMainDVBSOperator();
        //获取搜索类型
        if(tv == false){
            data.operateData.currTunerModeIdx = 0;
            data.operateData.currSateModeType = 0;//默认为Single satellite
        }else{
            var currTunerMode = model.channelSearch.getSource();
            for(var i = 0; i < data.operateData.tunerModeMapList.length; i++){
                if(currTunerMode == data.operateData.tunerModeMapList[i].map){
                    data.operateData.currTunerModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.tunerModeMapList.length){
                debugPrint("settingInitChSetMainPage:currTunerMode="+currTunerMode,DebugLevel.ERROR);
                data.operateData.currTunerModeIdx = 1;
                model.channelSearch.setSource(data.operateData.tunerModeMapList[1].map);
            }
            var currSatelliteMode = model.satellite.getInstallation();
            for(i = 0; i < data.operateData.satelliteModeMapList.length; i++){
                if(currSatelliteMode == data.operateData.satelliteModeMapList[i].map){
                    data.operateData.currSatelliteModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.satelliteModeMapList.length){
                debugPrint("settingInitChSetMainPage:currSatelliteMode="+currSatelliteMode,DebugLevel.ERROR);
                data.operateData.currSatelliteModeIdx = 0;
                model.channelSearch.setInstallation(data.operateData.satelliteModeMapList[0].map);
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetMainPage"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingRewriteChSetMainPage
 description:刷新设置主页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetMainPage(data){
    try{
        if(data.settingChSetMainTunerModeList.length > data.operateData.tunerModeMapList.length){
            data.settingChSetMainTunerModeList.splice(data.operateData.tunerModeMapList.length)
        }else{
            while(data.settingChSetMainTunerModeList.length < data.operateData.tunerModeMapList.length){
                var itemData =
                {
                    "settingChSetTunerModeName":{"Data":""}
                }
                data.settingChSetMainTunerModeList.push(itemData);
            }
        }
        $.each(data.settingChSetMainTunerModeList.Data,function(idx,item){
            item.settingChSetTunerModeName.Data = data.operateData.tunerModeMapList[idx].name;
        });
        
        data.settingChSetMainTunerModeList.SelectedIndex = data.operateData.currTunerModeIdx;
        data.settingChSetMainTunerModeList.DataSelectedIndex = data.operateData.currTunerModeIdx;
        data.settingChSetTunerModeValue.Data = data.operateData.tunerModeMapList[data.operateData.currTunerModeIdx].name;

        data.settingChSetMainSateOperValue.Data = data.operateData.currOperatorName;
        if(data.settingChSetMainSateTypeList.length > data.operateData.satelliteModeMapList.length){
            data.settingChSetMainSateTypeList.splice(data.operateData.satelliteModeMapList.length)
        }else{
            while(data.settingChSetMainSateTypeList.length < data.operateData.satelliteModeMapList.length){
                var itemData =
                {
                    "settingChSetSateTypeName":{"Data":""}
                }
                data.settingChSetMainSateTypeList.push(itemData);
            }
        }
        $.each(data.settingChSetMainSateTypeList.Data,function(idx,item){
            item.settingChSetSateTypeName.Data = data.operateData.satelliteModeMapList[idx].name;
        });

        data.settingChSetMainSateTypeList.SelectedIndex = data.operateData.currSatelliteModeIdx;
        data.settingChSetMainSateTypeList.DataSelectedIndex = data.operateData.currSatelliteModeIdx;
        data.settingChSetSateTypeValue.Data = data.operateData.satelliteModeMapList[data.operateData.currSatelliteModeIdx].name;
        if( data.operateData.currTunerModeIdx != 0){
            data.settingChSetMainSateOperTitle.disable = true;
            data.settingChSetMainSateOperValue.disable = true;
            data.settingChSetMainSateOperBtn.disable = true;
            data.settingChSetSateTypeTitle.disable = true;
            data.settingChSetSateTypeValue.disable = true;
            data.settingChSetMainSateTypeList.disable = true;
        }else{
            if(data.operateData.DVBSOperatorNum > 1){
                data.settingChSetMainSateOperTitle.disable = false;
                data.settingChSetMainSateOperValue.disable = false;
                data.settingChSetMainSateOperBtn.disable = false;
            }else{
                data.settingChSetMainSateOperTitle.disable = true;
                data.settingChSetMainSateOperValue.disable = true;
                data.settingChSetMainSateOperBtn.disable = true;
            }
            data.settingChSetSateTypeTitle.disable = false;
            data.settingChSetSateTypeValue.disable = false;
            data.settingChSetMainSateTypeList.disable = false;
            $.each(data.settingChSetMainSateTypeList.Data,function(idx,item){
                item.settingChSetSateTypeName.disable = false;
            })
        }
    }catch (ex){
        debugPrint("settingRewriteChSetMainPage "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetMainSetTunerMode
 description:设置接收类型
 input:
 output:
 return
 *******************************************************************/
function settingChSetMainSetTunerMode(){
    try{
        var data = settingChSetMainPageData;
        this.DataSelectedIndex = this.SelectedIndex;
        data.operateData.currTunerModeIdx = this.SelectedIndex;
        if(tv == true){
            model.channelSearch.setSource(data.operateData.tunerModeMapList[this.SelectedIndex].map);
        }
        switch (this.SelectedIndex){
            case 0:
                $("#settingChSetMainPageNav4").css("display","block");
                $("#settingChSetMainPageNav2").css("display","none");
                break;
            default :
                $("#settingChSetMainPageNav4").css("display","none");
                $("#settingChSetMainPageNav2").css("display","block");
                break;
        }
        if(this.SelectedIndex == 0){//DVBS
            getSettingChSetMainDVBSOperator();
        }
        hiWebOsFrame.ChSetMainPage.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingChSetMainSetTunerMode:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetMainSetSateMode
 description:设置接收卫星方式
 input:
 output:
 return
 *******************************************************************/
function settingChSetMainSetSateMode(){
    try{
        var data = settingChSetMainPageData;
        this.DataSelectedIndex = this.SelectedIndex;
        data.operateData.currSatelliteModeIdx = this.SelectedIndex;
        if(tv == true){
            model.satellite.setInstallation(data.operateData.satelliteModeMapList[this.SelectedIndex].map);
        }
        hiWebOsFrame.ChSetMainPage.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingChSetMainSetSateMode"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingGetSatelliteNum
 description:获取接收卫星的个数
 input:
 output:
 return:SatelliteNum 设置卫星的个数
 *******************************************************************/
function settingGetSatelliteNum(){
    try{
        var data = settingChSetMainPageData;
        var SatelliteNum = data.operateData.satelliteModeMapList[data.operateData.currSatelliteModeIdx].num;
        debugPrint("settingGetSatelliteNum:SatelliteNum="+SatelliteNum);
        return SatelliteNum;
    }catch (ex){
        debugPrint("settingChSetMainSetTunerMode"+ex.message,DebugLevel.ERROR);
    }
}
function settingGetSatelliteModeName(){
    try{
        var data = settingChSetMainPageData;

        var SatelliteModeName = data.operateData.satelliteModeMapList[data.operateData.currSatelliteModeIdx].name;
        debugPrint("settingGetSatelliteNum:SatelliteModeName="+SatelliteModeName);
        return SatelliteModeName;
    }catch (ex){
        debugPrint("settingGetSatelliteModeName:"+ex.message,DebugLevel.ERROR);
    }
}

/*******************************************************************
 name:settingChSetMainToNextPage
 description:从设置主页到下一步
 input:
 output:
 return
 *******************************************************************/
function settingChSetMainToNextPage(){
    try{
        var data =settingChSetMainPageData;
        switch (data.operateData.currTunerModeIdx){
            case 0:
                settingChSetMainToDVBS2Page();
                break;
            case 1:
                settingChSetMainToDVBC2Page();
                break;
            case 2:
                settingChSetMainToDVBT2Page();
                break;
        }
    }catch (ex){
        debugPrint("settingChSetMainToNextPage"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetMainToDVBC2Page
 description:从设置主页到DVBC设置第二部
 input:
 output:
 return
 *******************************************************************/
function settingChSetMainToDVBC2Page(){
    hiWebOsFrame.createPage('settingChSetDVBC2PageId',null, null, null,function(a){
        hiWebOsFrame.ChSetMainPage.close();
        hiWebOsFrame.ChSetDVBC2Page = a;
        a.open();
        a.hiFocus();
    });
}
/*******************************************************************
 name:settingChSetMainToDVBT2Page
 description:从设置主页到DVBT设置第二部
 input:
 output:
 return
 *******************************************************************/
function settingChSetMainToDVBT2Page(){
    hiWebOsFrame.createPage('settingChSetDVBT2PageId',null, null, null,function(a){
        hiWebOsFrame.ChSetMainPage.close();
        hiWebOsFrame.ChSetDVBT2Page = a;
        a.open();
        a.hiFocus();
    });

}
/*******************************************************************
 name:settingChSetMainToDVBS2Page
 description:从设置主页到DVBS设置第二部
 input:
 output:
 return
 *******************************************************************/
function settingChSetMainToDVBS2Page(){
    try{
        hiWebOsFrame.createPage('settingChSetDVBS2PageId',null, null, null,function(a){
            hiWebOsFrame.ChSetDVBS2Page = a;
            hiWebOsFrame.ChSetMainPage.close();
            a.open();
            a.hiFocus();
        });
    }catch (ex){
        debugPrint("settingChSetMainToDVBS2Page:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetDVBSOperatorAdjustHandle
 description:修改DVBC运营商
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBSOperatorAdjustHandle(){
    hiWebOsFrame.createPage('settingChSetDVBSOperListDialogId',null, hiWebOsFrame.ChSetMainPage, null,function(a){
        hiWebOsFrame.ChSetDVBSOperListDialog = a;
        a.open();
        a.hiFocus();
    });
}

function getSettingChSetMainOperatorNum(){
    var data = settingChSetMainPageData;
    return data.operateData.DVBSOperatorNum;
}
function getSettingChSetMainOperatorList(){
    var data = settingChSetMainPageData;
    return  data.operateData.DVBSOperatorList;
}
/*******************************************************************
 name:settingChSetRefreshDVBC2Operator
 description:修改DVBC运营商
 input:
 output:
 return
 *******************************************************************/
function settingChSetRefreshMainOperator(operatorName,operatorId){
    debugPrint("settingChSetRefreshMainOperator:operatorName="+operatorName+",operatorId="+operatorId);
    var data = settingChSetMainPageData;
    for(var i = 0; i < data.operateData.DVBSOperatorNum; i++){
        if(data.operateData.DVBSOperatorList[i].selectedFlag == 1){
            data.operateData.DVBSOperatorList[i].selectedFlag = 0;
        }
        if(data.operateData.DVBSOperatorList[i].operatorId == operatorId){
            data.operateData.DVBSOperatorList[i].selectedFlag = 1;
            data.operateData.currOperatorName = operatorName;
            data.operateData.currOperatorId = operatorId;
        }
    }
    if(tv == true){
        var currSatelliteMode = model.satellite.getInstallation();
        for(i = 0; i < data.operateData.satelliteModeMapList.length; i++){
            if(currSatelliteMode == data.operateData.satelliteModeMapList[i].map){
                data.operateData.currSatelliteModeIdx = i;
                break;
            }
        }
        if(i == data.operateData.satelliteModeMapList.length){
            debugPrint("settingInitChSetMainPage:currSatelliteMode="+currSatelliteMode,DebugLevel.ERROR);
            data.operateData.currSatelliteModeIdx = 0;
            model.channelSearch.setInstallation(data.operateData.satelliteModeMapList[0].map);
        }
    }

}
/*******************************************************************
 name:settingChSetMainPageEscHandle
 description:从主设置页面按return, 直接回到主目录下
 input:
 output:
 return
 *******************************************************************/
function settingChSetMainPageEscHandle(){
    hiWebOsFrame.createPage("settingChSetDVBAutoPageId",null, null, null,function(a){
        hiWebOsFrame.ChSetDVBAutoPage= a;
        hiWebOsFrame.ChSetMainPage.close();
        a.open();
        a.hiFocus();
        hiWebOsFrame.ChSetMainPage.destroy();
    });
}
function settingChSetMainPageOnOpen(){
    var data = settingChSetMainPageData;
    try{
        switch (data.operateData.currTunerModeIdx){
            case 0:
                $("#settingChSetMainPageNav4").css("display","block");
                $("#settingChSetMainPageNav2").css("display","none");
                break;
            default :
                $("#settingChSetMainPageNav4").css("display","none");
                $("#settingChSetMainPageNav2").css("display","block");
                break;
        }
        if(tv == true){
            //model.antenna.onDvbsEnumInstallationChaged = wizardChSetMainSatelliteModeChangeCallBack;
        }
    }catch (ex){
        debugPrint("wizardChSetMainPageOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}

function settingChSetMainPagegetcurrOperatorName(){
    return settingChSetMainPageData.operateData.currOperatorName;
}

function settingChSetMainPageOnDestroy(){
    hiWebOsFrame.ChSetMainPage = null;
}