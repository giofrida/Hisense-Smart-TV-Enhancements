/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetTunerModePageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetTMHeadTitle",
            "description":"设置标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetTMItemTitle",
            "description":"设置项名称",
            "CaEType":"span"
        },
        {
            "id":"settingChSetTMLeftImg",
            "description":"left arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetTMRightImg",
            "description":"right arrow",
            "CaEType":"img"
        },
        {
            "id": "settingChSetTMList",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSingleNoTitleLiNormal", "focus": "settingChSingleNoTitleLiFocus",
                "dataSelected":"settingChSingleNoTitleLiSelected","disable":"settingChSelectLiDisable"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetTunerMode",
                "befRightHandler":"settingNetSetTMPageToNextPage",
                "befLeftHandler":"settingChSetTunerModeEscHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetTMName",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetSingleNoTitleLiNameCls"
                    }
                },
                {
                    "id": "settingChSetTMSelectImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/channel_selectedBall.png",
                        "closeImg":"img/channel_unSelectedBall.png"
                    },
                    "classes":{
                        "normal":"settingChSetSingleNoTitleLiImgCls"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetTMName", "settingChSetTMSelectImg"]
            }
        }

    ];
    settingInitChSetTunerMode();
    return settingChSetTunerModeData;
}
var settingChSetTunerModeData={
    "settingChSetTMHeadTitle":{"Data":"Auto Channel Scan"},
    "settingChSetTMItemTitle":{"Data":"Reception"},
    "settingChSetTMLeftImg":{"Data":"img/blank.png"},
    "settingChSetTMRightImg":{"Data":"img/channel_right_arrow.png"},
    "settingChSetTMList":{
        "Data":[
            {
                "settingChSetTMName":{"Data":"Satellite"},
                "settingChSetTMSelectImg":{"Data":false}
            },
            {
                "settingChSetTMName":{"Data":"Antenna"},
                "settingChSetTMSelectImg":{"Data":false}
            },
            {
                "settingChSetTMName":{"Data":"Cable"},
                "settingChSetTMSelectImg":{"Data":false}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currTunerModeIdx":0,
        "tunerModeMapList":[
            {
                "map":2,
                "name":"Satellite"
            },
            {
                "map":0,
                "name":"Antenna"
            },
            {
                "map":1,
                "name":"Cable"
            }
        ]
    },
    "langData":{
        "Reception":[],
        "Auto Channel Scan":[],
        "Satellite":["Satellite"],
        "Cable":["Cable"],
        "Antenna":["Antenna"]
    },
    rewrite:"settingRewriteChSetTunerMode"

}

/*******************************************************************
 name:settingInitChSetTunerMode
 description:初始化Data
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetTunerMode(){
    try{
        var data = settingChSetTunerModeData;
        //获取搜索类型
        if(tv == false){
            data.operateData.currTunerModeIdx = 0;
        }else{
            var currTunerMode = model.channelSearch.getSource();
            debugE("settingInitChSetTunerMode:currTunerMode="+ currTunerMode);
            for(var i = 0; i < data.operateData.tunerModeMapList.length; i++){
                if(currTunerMode == data.operateData.tunerModeMapList[i].map){
                    data.operateData.currTunerModeIdx = i;
                    break;
                }
            }
            if(i == data.operateData.tunerModeMapList.length){
                debugPrint("settingInitChSetTunerMode:currTunerMode="+currTunerMode,DebugLevel.ERROR);
                data.operateData.currTunerModeIdx = 1;
                model.channelSearch.setSource(data.operateData.tunerModeMapList[1].map);
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetTunerMode"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingRewriteChSetTunerMode
 description:刷新设置主页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetTunerMode(data){
    try{
        var opData = data.operateData;
        var tunerModeList = data.settingChSetTMList;
        if(tunerModeList.Data.length > opData.tunerModeMapList.length){
            tunerModeList.Data.splice(opData.tunerModeMapList.length)
        }else{
            while(tunerModeList.Data.length < opData.tunerModeMapList.length){
                var itemData =
                {
                    "settingChSetTMName":{"Data":""},
                    "settingChSetTMSelectImg":{"Data":false}
                }
                tunerModeList.Data.push(itemData);
            }
        }
        $.each(tunerModeList.Data,function(idx,item){
            item.settingChSetTMName.Data = opData.tunerModeMapList[idx].name;
            item.settingChSetTMSelectImg.Data = false;
        });
        tunerModeList.Data[opData.currTunerModeIdx].settingChSetTMSelectImg.Data = true;

        tunerModeList.SelectedIndex = opData.currTunerModeIdx;
        tunerModeList.DataSelectedIndex = opData.currTunerModeIdx;

    }catch (ex){
        debugPrint("settingRewriteChSetTunerMode "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetTunerMode
 description:设置tuner mode
 *******************************************************************/
function setSettingChSetTunerMode(){
    try{
        var data = settingChSetTunerModeData;
        this.DataSelectedIndex = this.SelectedIndex;
        data.operateData.currTunerModeIdx = this.SelectedIndex;
        if(tv){
            debugG('set default nosignal:1 and messageCamIndex: 0 before changed tuner mode');
            model.tvservice.setMessageCamIndex(0);
            model.tvservice.setNoSignalMain(1);
            model.channelSearch.setSource(data.operateData.tunerModeMapList[this.SelectedIndex].map);
        }
        hiWebOsFrame.ChSetTunerModePage.rewriteDataOnly();
        settingNetSetTMPageToNextPage();
    }catch (ex){
        debugPrint("setSettingChSetTunerMode:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetTMPageToNextPage(){
    var data = settingChSetTunerModeData;
    switch (data.operateData.currTunerModeIdx){
        case 0://Satellite
            var operatorList = getSettingChSetOperatorList();
            if(operatorList.length > 1){
                hiWebOsFrame.createPage("settingChSetDVBOperatorPageId", null, hiWebOsFrame.ChSetTunerModePage, null, function (a) {
                    hiWebOsFrame.ChSetDVBOperatorPage = a;
                    hiWebOsFrame.ChSetTunerModePage.close();
                    a.open();
                    a.hiFocus();
                });
            }else{
                hiWebOsFrame.createPage("settingChSetSatelliteModePageId", null,null, null, function (a) {
                    hiWebOsFrame.ChSetSatelliteModePage = a;
                    hiWebOsFrame.ChSetTunerModePage.close();
                    a.open();
                    a.hiFocus();
                });
            }
            break;
        case 1://Antenna
            hiWebOsFrame.createPage("settingChSetCommDVBTPageId", null, hiWebOsFrame.ChSetTunerModePage, null, function (a) {
                hiWebOsFrame.ChSetCommDVBTPage = a;
                hiWebOsFrame.ChSetTunerModePage.close();
                a.open();
                a.hiFocus();
            });
            break;
        case 2://Cable
            var operatorList = getSettingChSetOperatorList();
            if(operatorList.length > 1){//have dvbc operator
                hiWebOsFrame.createPage("settingChSetDVBOperatorPageId", null, hiWebOsFrame.ChSetTunerModePage, null, function (a) {
                    hiWebOsFrame.ChSetDVBOperatorPage = a;
                    hiWebOsFrame.ChSetTunerModePage.close();
                    a.open();
                    a.hiFocus();
                });
            }else{
                hiWebOsFrame.createPage("settingChSetCommDVBCPageId", null, hiWebOsFrame.ChSetTunerModePage, null, function (a) {
                    hiWebOsFrame.ChSetCommDVBCPage = a;
                    hiWebOsFrame.ChSetTunerModePage.close();
                    a.open();
                    a.hiFocus();
                });
            }

            break;
    }
}
function getChSetTMCurrentTunerMode(){
    var opData = settingChSetTunerModeData.operateData;
    return opData.tunerModeMapList[opData.currTunerModeIdx].map;
}
/*******************************************************************
 name:getSettingChSetOperatorList
 description:获取运营商列表通用函数
 input:
 output:
 return
 *******************************************************************/
function getSettingChSetOperatorList(){
    var operatorList = [];
    if(!tv){
        for(var i = 0; i < 2; i++){
            var itemData = {
                "operatorId":i,
                "operatorName":"satelliteOperator_"+i,
                "selectedFlag":0,
                "recvType":0,
                "satelliteId":-1
            }
            operatorList.push(itemData);
        }
        operatorList[0].selectedFlag = 1;
    }else{
        var currOperatorList = model.channelSearch.getOperators();
        debugPrint("getSettingChSetOperatorList:"+currOperatorList.length+","+currOperatorList);
        if(currOperatorList.length % 5 != 0 && currOperatorList.length == 0){
            debugE("getSettingChSetOperatorList:operator info is error");
            operatorList = [
                {
                    "operatorId":0,
                    "operatorName":"Others",
                    "selectedFlag":1,
                    "recvType":0,
                    "satelliteId":-1
                }
            ];
        }else{
            var operatorNum = currOperatorList.length/5;
            for(var i = 0; i <  operatorNum; i++){
                var itemData = {
                    "operatorId":currOperatorList[i*5+0],
                    "operatorName":currOperatorList[i*5+1],
                    "selectedFlag":currOperatorList[i*5+2],
                    "recvType":currOperatorList[i*5+3],
                    "satelliteId":currOperatorList[i*5+4]
                }
                operatorList.push(itemData);
            }
        }
    }
    return operatorList;
}
function getSettingChSetCurrOperatorId(){
    var currOperatorList = getSettingChSetOperatorList();
    for(var i = 0; i < currOperatorList.length; i++){
        if(currOperatorList[i].selectedFlag == 1){
            DBG_ALWAYS("getSettingChSetCurrOperatorId:"+currOperatorList[i].operatorName+","+currOperatorList[i].operatorId);
            return currOperatorList[i].operatorId;
        }
    }
}
/*******************************************************************
 name:settingChSetTMPageEscHandle
 description:从tunerMode设置页退出
 input:
 output:
 return
 *******************************************************************/
function settingChSetTunerModeEscHandle(){
    hiWebOsFrame.createPage("settingChSetExitSetupDialogId", null,hiWebOsFrame.ChSetTunerModePage, null, function (a) {
        hiWebOsFrame.ChSetExitSetupDialog = a;
        a.open();
        a.hiFocus();
    });
}
function settingChSetTunerModeOnDestroy(){
    hiWebOsFrame.ChSetTunerModePage = null;
}