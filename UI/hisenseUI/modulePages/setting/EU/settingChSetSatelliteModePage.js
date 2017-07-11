/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetSatelliteModePageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetSMHeadTitle",
            "description":"设置标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSMItemTitle",
            "description":"设置项名称",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSMLeftImg",
            "description":"left arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetSMRightImg",
            "description":"right arrow",
            "CaEType":"img"
        },
        {
            "id": "settingChSetSMList",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSingleNoTitleLiNormal", "focus": "settingChSingleNoTitleLiFocus",
                "dataSelected":"settingChSingleNoTitleLiSelected","disable":"settingChSelectLiDisable"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetSatelliteMode",
                "befRightHandler":"settingChSetSMPageToNextPage",
                "befLeftHandler":"settingChSetSatelliteModePageEscHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetSMName",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetSingleNoTitleLiNameCls"
                    }
                },
                {
                    "id": "settingChSetSMSelectImg",
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
                "UlDataItem": [ "settingChSetSMName", "settingChSetSMSelectImg"]
            }
        }

    ];
    settingInitChSetSatelliteMode();
    return settingChSetSatelliteModeData;
}
var settingChSetSatelliteModeData={
    "settingChSetSMHeadTitle":{"Data":"Auto Channel Scan"},
    "settingChSetSMItemTitle":{"Data":"Satellite Mode"},
    "settingChSetSMLeftImg":{"Data":"img/channel_left_arrow.png"},
    "settingChSetSMRightImg":{"Data":"img/channel_right_arrow.png"},
    "settingChSetSMList":{
        "Data":[
            {
                "settingChSetSMName":{"Data":"Single Satellite"},
                "settingChSetSMSelectImg":{"Data":false}
            },
            {
                "settingChSetSMName":{"Data":"Diseqc"},
                "settingChSetSMSelectImg":{"Data":false}
            },
            {
                "settingChSetSMName":{"Data":"Tone Burst"},
                "settingChSetSMSelectImg":{"Data":false}
            },
            {
                "settingChSetSMName":{"Data":"Unicable"},
                "settingChSetSMSelectImg":{"Data":false}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currSatelliteModeIdx":0,
        "satelliteModeMapList":[
            {
                "map":0,
                "name":"Single Satellite"
            },
            {
                "map":2,
                "name":"DiSeqc"
            },
            {
                "map":1,
                "name":"Tone Burst"
            },
            {
                "map":3,
                "name":"Unicable"
            }
        ],
        "operatorExistFlag":0
    },
    "langData":{
        "Auto Channel Scan":["Auto Channel Scan"],
        "Satellite Mode":[],
        "Single Satellite":[],
        "DiSeqc":[],
        "Tone Burst":[],
        "Unicable":[]
    },
    rewrite:"settingRewriteChSetSatelliteMode"

}

/*******************************************************************
 name:settingInitChSetSatelliteMode
 description:初始化Data
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetSatelliteMode(){
    try{
        var opData = settingChSetSatelliteModeData.operateData;
        //获取搜索类型
        if(tv == false){
            opData.currSatelliteModeIdx = 0;
        }else{
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
        }
        opData.operatorExistFlag = checkChSetSatelliteOperatorExist();
    }catch (ex){
        debugPrint("settingInitChSetSatelliteMode"+ex.message,DebugLevel.ERROR);
    }

}
function checkChSetSatelliteOperatorExist(){
    var satelliteOperatorList = getSettingChSetOperatorList();
    if(satelliteOperatorList.length > 1){
        return 1;//exist operator
    }else{
        return 0;
    }
}
/*******************************************************************
 name:settingRewriteChSetSatelliteMode
 description:刷新设置主页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetSatelliteMode(data){
    try{
        var opData = data.operateData;
        var satelliteModeList = data.settingChSetSMList;
        if(satelliteModeList.Data.length > opData.satelliteModeMapList.length){
            satelliteModeList.Data.splice(opData.satelliteModeMapList.length)
        }else{
            while(satelliteModeList.Data.length < opData.satelliteModeMapList.length){
                var itemData =
                {
                    "settingChSetSMName":{"Data":""},
                    "settingChSetSMSelectImg":{"Data":false}
                }
                satelliteModeList.Data.push(itemData);
            }
        }
        $.each(satelliteModeList.Data,function(idx,item){
            item.settingChSetSMName.Data = opData.satelliteModeMapList[idx].name;
            item.settingChSetSMSelectImg.Data = false;
        });
        satelliteModeList.Data[opData.currSatelliteModeIdx].settingChSetSMSelectImg.Data = true;

        satelliteModeList.SelectedIndex = opData.currSatelliteModeIdx;
        satelliteModeList.DataSelectedIndex = opData.currSatelliteModeIdx;

    }catch (ex){
        debugPrint("settingRewriteChSetSatelliteMode "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetSatelliteMode
 description:设置tuner mode
 *******************************************************************/
function setSettingChSetSatelliteMode(){
    try{
        var opData = settingChSetSatelliteModeData.operateData;
        this.DataSelectedIndex = this.SelectedIndex;
        opData.currSatelliteModeIdx = this.SelectedIndex;
        if(tv){
            model.satellite.setInstallation(opData.satelliteModeMapList[this.SelectedIndex].map);
        }
        hiWebOsFrame.ChSetSatelliteModePage.rewriteDataOnly();
        settingChSetSMPageToNextPage();
    }catch (ex){
        debugPrint("setSettingChSetSatelliteMode:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetSMPageToNextPage(){
    hiWebOsFrame.createPage("settingChSetSelSatellitePageId", null, hiWebOsFrame.ChSetSatelliteModePage.origin, null, function (a) {
        hiWebOsFrame.ChSetSelSatellitePage = a;
        hiWebOsFrame.ChSetSatelliteModePage.close();
        a.open();
        a.hiFocus();
        hiWebOsFrame.ChSetSatelliteModePage.destroy();
    });
}

/*******************************************************************
 name:settingChSetSMPageEscHandle
 description:从satelliteMode设置页退出
 input:
 output:
 return
 *******************************************************************/
function settingChSetSatelliteModePageEscHandle(){
    hiWebOsFrame.ChSetSatelliteModePage.close();
    hiWebOsFrame.ChSetSatelliteModePage.origin.open();
    hiWebOsFrame.ChSetSatelliteModePage.origin.hiFocus();
    hiWebOsFrame.ChSetSatelliteModePage.destroy();
}

function settingChSetSatelliteModeOnDestroy(){
    hiWebOsFrame.ChSetSatelliteModePage = null;
}