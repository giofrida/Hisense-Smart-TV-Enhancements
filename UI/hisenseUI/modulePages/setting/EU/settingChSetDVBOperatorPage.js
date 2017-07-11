/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBOperatorPageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBOperatorHeadTitle",
            "description":"设置标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBOperatorItemTitle",
            "description":"设置项名称",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBOperatorLeftImg",
            "description":"left arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetDVBOperatorRightImg",
            "description":"right arrow",
            "CaEType":"img"
        },
        {
            "id": "settingChSetDVBOperatorList",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSingleNoTitleLiNormal", "focus": "settingChSingleNoTitleLiFocus",
                "dataSelected":"settingChSingleNoTitleLiSelected","disable":"settingChSelectLiDisable"
            },
            "handler": {
                "aftEnterHandler": "setChSetDVBOperator",
                "befRightHandler":"settingChSetDVBOperatorPageToNextPage",
                "befLeftHandler":"settingChSetDVBOperatorPageEscHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetDVBOperatorName",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetSingleNoTitleLiNameCls"
                    }
                },
                {
                    "id": "settingChSetDVBOperatorSelectImg",
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
                "UlDataItem": [ "settingChSetDVBOperatorName", "settingChSetDVBOperatorSelectImg"]
            }
        }

    ];
    settingInitChSetDVBOperatorData();
    return settingChSetDVBOperatorData;
}
var settingChSetDVBOperatorData={
    "settingChSetDVBOperatorHeadTitle":{"Data":"Auto Channel Scan"},
    "settingChSetDVBOperatorItemTitle":{"Data":"Operator"},
    "settingChSetDVBOperatorLeftImg":{"Data":"img/channel_left_arrow.png"},
    "settingChSetDVBOperatorRightImg":{"Data":"img/channel_right_arrow.png"},
    "settingChSetDVBOperatorList":{
        "Data":[
            {
                "settingChSetDVBOperatorName":{"Data":""},
                "settingChSetDVBOperatorSelectImg":{"Data":false}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currTunerMode":1,//0:Antenna,1:Cable,2:Satellite
        "currDVBOperatorIdx":0,
        "operatorList":[]
    },
    "langData":{
        "Auto Channel Scan":[],
        "Operator":[],
        "Others":[]
    },
    rewrite:"settingRewriteChSetDVBOperator"

}

/*******************************************************************
 name:settingInitChSetDVBOperatorData
 description:初始化Data
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBOperatorData(){
    try{
        var opData = settingChSetDVBOperatorData.operateData;
        opData.currTunerMode = getChSetTMCurrentTunerMode();
        opData.operatorList = getSettingChSetOperatorList();
        opData.currDVBOperatorIdx = 0;
        for(var i = 0; i < opData.operatorList.length; i++){
            if(opData.operatorList[i].selectedFlag == 1){
                opData.currDVBOperatorIdx = i;
                break;
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBOperatorData"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingRewriteChSetDVBOperator
 description:刷新设置主页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBOperator(data){
    try{
        var opData = data.operateData;
        var operatorUl = data.settingChSetDVBOperatorList;
        if(operatorUl.Data.length > opData.operatorList.length){
            operatorUl.Data.splice(opData.operatorList.length)
        }else{
            while(operatorUl.Data.length < opData.operatorList.length){
                var itemData =
                {
                    "settingChSetDVBOperatorName":{"Data":""},
                    "settingChSetDVBOperatorSelectImg":{"Data":false}
                }
                operatorUl.Data.push(itemData);
            }
        }
        $.each(operatorUl.Data,function(idx,item){
            item.settingChSetDVBOperatorName.Data = opData.operatorList[idx].operatorName;
            item.settingChSetDVBOperatorSelectImg.Data = false;
        });
        operatorUl.Data[opData.currDVBOperatorIdx].settingChSetDVBOperatorSelectImg.Data = true;

        operatorUl.SelectedIndex = opData.currDVBOperatorIdx;
        operatorUl.DataSelectedIndex = opData.currDVBOperatorIdx;

    }catch (ex){
        debugPrint("settingRewriteChSetDVBOperator "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setChSetDVBOperator
 description:设置tuner mode
 *******************************************************************/
function setChSetDVBOperator(){
    try{
        var opData = settingChSetDVBOperatorData.operateData;
        this.DataSelectedIndex = this.SelectedIndex;
        opData.currDVBOperatorIdx = this.SelectedIndex;
        if(tv){
            var currOperatorId = opData.operatorList[this.SelectedIndex].operatorId;
            var currSatelliteId = opData.operatorList[this.SelectedIndex].satelliteId;
            var currOperatorName = opData.operatorList[this.SelectedIndex].operatorName;
            debugPrint("setChSetDVBOperator:currOperatorId="+currOperatorId+",satelliteId="+currSatelliteId,DebugLevel.ALWAYS);
            if(tv == true){
                if(opData.currTunerMode == 2){//DVBS
                    model.channelSearch.SetOperator(2,parseInt(currOperatorId),parseInt(currSatelliteId));
                }else{//DVBC
                    model.channelSearch.SetOperator(0,parseInt(currOperatorId),-1);
                }
            }
        }
        hiWebOsFrame.ChSetDVBOperatorPage.rewriteDataOnly();
        settingChSetDVBOperatorPageToNextPage();
    }catch (ex){
        debugPrint("setChSetDVBOperator:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetDVBOperatorPageToNextPage(){
    var opData = settingChSetDVBOperatorData.operateData;
    if(opData.currTunerMode == 2){//DVBS
        hiWebOsFrame.createPage("settingChSetSatelliteModePageId", null, hiWebOsFrame.ChSetDVBOperatorPage, null, function (a) {
            hiWebOsFrame.ChSetSatelliteModePage = a;
            hiWebOsFrame.ChSetDVBOperatorPage.close();
            a.open();
            a.hiFocus();
        });
    }else{
        hiWebOsFrame.createPage("settingChSetCommDVBCPageId", null, hiWebOsFrame.ChSetDVBOperatorPage, null, function (a) {
            hiWebOsFrame.ChSetCommDVBCPage = a;
            hiWebOsFrame.ChSetDVBOperatorPage.close();
            a.open();
            a.hiFocus();
        });
    }

}

/*******************************************************************
 name:settingChSetDVBOperatorPageEscHandle
 description:从satelliteMode设置页退出
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBOperatorPageEscHandle(){
    hiWebOsFrame.ChSetDVBOperatorPage.close();
    hiWebOsFrame.ChSetDVBOperatorPage.origin.open();
    hiWebOsFrame.ChSetDVBOperatorPage.origin.hiFocus();
    hiWebOsFrame.ChSetDVBOperatorPage.destroy();
}

function settingChSetDVBOperatorOnDestroy(){
    hiWebOsFrame.ChSetDVBOperatorPage = null;
}