/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetDVBTUKAreaListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBTUKAreaListTitle",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetDVBTUKAreaListContUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSetDVBTUKAreaLiNormal", "focus": "settingChSetDVBTUKAreaLiFocus",
                "disable":"settingChSetDVBTUKAreaLiDisable"
            },
            "handler": {
                "aftEnterHandler": "settingChSetDVBTUKAreaListEnterHandler",
                "aftDownHandler":"settingChSetDVBTUKAreaListDownHandler",
                "aftUpHandler":"settingChSetDVBTUKAreaListUpHandler",
                "befLeftHandler":"settingChSetDVBTUKAreaListLeftHandler",
                "befRightHandler":"settingChSetDVBTUKAreaListRightHandler"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetDVBTUKAreaTitle",
                    "description": "区域级别",
                    "CaEType": "div",
                    "classes":{
                        "normal":"settingChSetDVBTUKAreaLeft","disable":"settingChSetDVBTUKAreaLeft"
                    }
                },
                {
                    "id": "settingChSetDVBTUKAreaListItem",
                    "description": "区域名称",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetDVBTAreaName","disable":"settingChSetDVBTAreaName"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetDVBTUKAreaTitle", "settingChSetDVBTUKAreaListItem"],
                "PageSize":3
            }
        }
    ];
    settingInitChSetDVBTUKAreaListDialog();
    return settingChSetDVBTUKAreaListData;
}
var settingChSetDVBTUKAreaListData={
    "settingChSetDVBTUKAreaListTitle":{"Data":"Region"},
    "settingChSetDVBTUKAreaListContUl":{
        "Data":[
            {
                "settingChSetDVBTUKAreaTitle":{"Data":"Region 1"},
                "settingChSetDVBTUKAreaListItem":{"Data":""}
            },
            {
                "settingChSetDVBTUKAreaTitle":{"Data":"Region 2"},
                "settingChSetDVBTUKAreaListItem":{"Data":""}
            },
            {
                "settingChSetDVBTUKAreaTitle":{"Data":"Region 3"},
                "settingChSetDVBTUKAreaListItem":{"Data":""}
            }
        ],
        "SelectedIndex":0
    },
    "operateData":{
        "currCountry":"GBR",//"Malaysia"
        "currUKAreaLevelIdx":0,
        "UKAreaLevel1Idx":0,
        "UKAreaLevel2Idx":0,
        "UKAreaLevel3Idx":0,
        "UKAreaList":{},
        "UKAreaLevel1Name":"",
        "UKAreaLevel2Name":"",
        "UKAreaLevel2Disable":0,
        "UKAreaLevel3Name":"",
        "UKAreaLevel3Disable":0
    },
    "langData":{
        "Region":["Region"],
        "Region 1":["Region 1"],
        "Region 2":["Region 2"],
        "Region 3":["Region 3"],
        "None Specified":["None Specified"]
    },
    rewrite:"settingRewriteChSetDVBTUKAreaListDialog"
}
/*******************************************************************
 name:settingInitChSetDVBTUKAreaListDialog
 description:初始化DVBC的运营商列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBTUKAreaListDialog(){
    try{
        var data = settingChSetDVBTUKAreaListData;
        data.operateData.currUKAreaLevelIdx = 0;
        data.operateData.UKAreaLevel1Idx = 0;
        data.operateData.UKAreaLevel2Idx = 0;
        data.operateData.UKAreaLevel2Disable = 0;
        data.operateData.UKAreaLevel3Idx = 0;
        data.operateData.UKAreaLevel3Disable = 0;
        data.operateData.currCountry = "GBR";//"Malaysia"
        if(tv == false){
//            var areaInfo = ["0","1","16","0","0","England",
//                             "1","2","16","16","0","North",
//                             "2","2","16","32","0","South",
//                             "3","3","16","16","16","test",
//                             "9","3","16","16","32","test2",
//                             "4","1","32","0","0","Wales",
//                             "5","2","32","16","0","Wales2",
//                             "6","1","64","0","0","aaaa",
//                             "7","2","64","16","0","bbbbb",
//                             "8","2","64","32","0","cccccc"
//                            ];
//            var areaInfo = ["0","1","16","0","0","England","1","2","16","16","0","South","2","2","16","32","0","North"];
            if(data.operateData.currCountry == "GBR"){
                var areaInfo = ["0","1","1","0","0","England","1","1","6","0","0","Isle of Man","2","2","1","8","0","North West"];
            }else{
                var areaInfo = ["0","Central Region","1","Southern Region"]
            }

        }else{
            data.operateData.currCountry = model.basicSetting.getTvsetLocation();
            var areaInfo = model.channelSearch.getUkArea();
            debugPrint('settingInitChSetDVBTUKAreaListDialog:'+JSON.stringify(areaInfo));
        }
        var nonAnalyseAreaList = [];
        if(data.operateData.currCountry == "GBR"){
            if(areaInfo.length < 6 || areaInfo.length%6 != 0){
                debugE("settingInitChSetDVBTUKAreaListDialog:"+areaInfo.length+","+areaInfo);
            }else{
                var UKAreaNum = areaInfo.length / 6;
                for(var i = 0; i < UKAreaNum; i++){
                    var itemData = {
                        "areaId":0,
                        "areaLevel":1,
                        "areaIdx1":0,
                        "areaIdx2":16,
                        "areaIdx3":32,
                        "areaName":"",
                        "subAreaList":[]
                    }
                    itemData.areaId = areaInfo[i*6+0];
                    itemData.areaLevel = areaInfo[i*6+1];
                    itemData.areaIdx1 = areaInfo[i*6+2];
                    itemData.areaIdx2 = areaInfo[i*6+3];
                    itemData.areaIdx3 = areaInfo[i*6+4];
                    itemData.areaName = areaInfo[i*6+5];
                    nonAnalyseAreaList.push(itemData);
                }

            }
        }else if(data.operateData.currCountry == "MYS"){
            if(areaInfo.length < 2 || areaInfo.length%2 != 0){
                debugE("settingInitChSetDVBTUKAreaListDialog:"+areaInfo.length+","+areaInfo);
            }else{
                var UKAreaNum = areaInfo.length / 2;
                for(var i = 0; i < UKAreaNum; i++){
                    var itemData = {
                        "areaId":0,
                        "areaLevel":1,
                        "areaIdx1":0,
                        "areaIdx2":16,
                        "areaIdx3":32,
                        "areaName":"",
                        "subAreaList":[]
                    }
                    itemData.areaId = areaInfo[i*2+0];
                    itemData.areaName = areaInfo[i*2+1];
                    nonAnalyseAreaList.push(itemData);
                }

            }
        }
        var UKAreaLevel1List = [],UKAreaLevel2List = [],UKAreaLevel3List = [];
        for(i = 0; i < nonAnalyseAreaList.length; i++){
            //第一级
            if(nonAnalyseAreaList[i].areaLevel == 1){
                UKAreaLevel1List.push(nonAnalyseAreaList[i]);
            }else if(nonAnalyseAreaList[i].areaLevel == 2){
                UKAreaLevel2List.push(nonAnalyseAreaList[i]);
            }else if(nonAnalyseAreaList[i].areaLevel == 3){
                UKAreaLevel3List.push(nonAnalyseAreaList[i]);
            }else{
                debugE("settingInitChSetDVBTUKAreaListDialog:analyse area list error!!areaLeve="+nonAnalyseAreaList[i].areaLevel);
                break;
            }
        }
        //从第3级填充第二级的子列表
        for(i = 0; i < UKAreaLevel3List.length; i++){
            for(var j = 0; j < UKAreaLevel2List.length;j++){
                if(UKAreaLevel3List[i].areaIdx1 == UKAreaLevel2List[j].areaIdx1 &&
                    UKAreaLevel3List[i].areaIdx2 == UKAreaLevel2List[j].areaIdx2){
                    UKAreaLevel2List[j].subAreaList.push(UKAreaLevel3List[i]);
                }
            }
        }
        //从第二级填充第一级的子列表
        for(i = 0; i < UKAreaLevel2List.length; i++){
            for(var j = 0; j < UKAreaLevel1List.length;j++){
                if(UKAreaLevel2List[i].areaIdx1 == UKAreaLevel1List[j].areaIdx1){
                    UKAreaLevel1List[j].subAreaList.push(UKAreaLevel2List[i]);
                }
            }
        }
        data.operateData.currUKAreaLevelIdx = 0;
        data.operateData.UKAreaList = UKAreaLevel1List;
        getSettingChSetDVBTUKListUIInfo();
    }catch (ex){
        debugPrint("settingInitChSetDVBTUKAreaListDialog:"+ex.message,DebugLevel.ERROR);
    }
}

function getSettingChSetDVBTUKListUIInfo(){
    try{
        var data = settingChSetDVBTUKAreaListData;
        data.operateData.UKAreaLevel1Name = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].areaName;
        if(data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList.length > 0){
            var AreaItemLevel2 = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList;
            data.operateData.UKAreaLevel2Name = AreaItemLevel2[data.operateData.UKAreaLevel2Idx].areaName;
            data.operateData.UKAreaLevel2Disable = 0;
            if(AreaItemLevel2[data.operateData.UKAreaLevel2Idx].subAreaList.length > 0){
                var AreaItemLevel3 = AreaItemLevel2[data.operateData.UKAreaLevel2Idx].subAreaList;
                data.operateData.UKAreaLevel3Name = AreaItemLevel3[data.operateData.UKAreaLevel3Idx].areaName;
                data.operateData.UKAreaLevel3Disable = 0;
            }else{
                data.operateData.UKAreaLevel3Name = "None Specified";
                data.operateData.UKAreaLevel3Disable = 1;
            }
        }else{
            data.operateData.UKAreaLevel2Name = "None Specified";
            data.operateData.UKAreaLevel3Name = "None Specified";
            data.operateData.UKAreaLevel2Disable = 1;
            data.operateData.UKAreaLevel3Disable = 1;
        }
    }catch (ex){
        debugE("getSettingChSetDVBTUKListUIInfo:"+ex.message);
    }

}
/*******************************************************************
 name:settingRewriteChSetDVBTUKAreaListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBTUKAreaListDialog(data){
    try{
        if(data.operateData.currCountry == "GBR"){
            data.settingChSetDVBTUKAreaListContUl.Data[0].settingChSetDVBTUKAreaTitle.Data = "Region 1";
        }else{
            data.settingChSetDVBTUKAreaListContUl.Data[0].settingChSetDVBTUKAreaTitle.Data = "Region";
        }
        data.settingChSetDVBTUKAreaListContUl.Data[0].settingChSetDVBTUKAreaListItem.Data = data.operateData.UKAreaLevel1Name;
        data.settingChSetDVBTUKAreaListContUl.Data[1].settingChSetDVBTUKAreaListItem.Data = data.operateData.UKAreaLevel2Name;
        data.settingChSetDVBTUKAreaListContUl.Data[2].settingChSetDVBTUKAreaListItem.Data = data.operateData.UKAreaLevel3Name;
        data.settingChSetDVBTUKAreaListContUl.SelectedIndex = data.operateData.currUKAreaLevelIdx;
        if(data.operateData.UKAreaLevel2Disable == 1){
            data.settingChSetDVBTUKAreaListContUl.disableItem = [1,2];
        }else if(data.operateData.UKAreaLevel3Disable == 1){
            data.settingChSetDVBTUKAreaListContUl.disableItem = [2];
        }else{
            data.settingChSetDVBTUKAreaListContUl.disableItem = [];
        }
    }catch (ex){
        debugPrint("settingRewriteChSetDVBTUKAreaListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDVBTUKAreaListEnterHandler
 description:设置使用的运营商网络
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBTUKAreaListEnterHandler(){
    var data = settingChSetDVBTUKAreaListData;
    if(data.operateData.UKAreaLevel3Disable == 0){
        var areaLevel2Item = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList;
        var areaLevel3Item = areaLevel2Item[data.operateData.UKAreaLevel2Idx].subAreaList;
        var currAreaId = areaLevel3Item[data.operateData.UKAreaLevel3Idx].areaId;
    }else if(data.operateData.UKAreaLevel2Disable == 0){
        var areaLevel2Item = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList;
        var currAreaId = areaLevel2Item[data.operateData.UKAreaLevel2Idx].areaId;
    }else{
        var currAreaId = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].areaId;
    }
    if(tv == true){
        model.channelSearch.SetUkArea(currAreaId);
    }
    hiWebOsFrame.ChSetDVBTUKAreaListDialog.rewriteDataOnly();
    hiWebOsFrame.ChSetDVBTUKAreaListDialog.close();
    hiWebOsFrame.ChSetChannelScanPage.hiFocus();
    hiWebOsFrame.ChSetDVBTUKAreaListDialog.destroy();
}
function settingChSetDVBTUKAreaListUpHandler(){
    var data = settingChSetDVBTUKAreaListData;
    data.operateData.currUKAreaLevelIdx = this.SelectedIndex;
}
function settingChSetDVBTUKAreaListDownHandler(){
    var data = settingChSetDVBTUKAreaListData;
    data.operateData.currUKAreaLevelIdx = this.SelectedIndex;
}
function settingChSetDVBTUKAreaListLeftHandler(){
    var data = settingChSetDVBTUKAreaListData;
    switch (data.operateData.currUKAreaLevelIdx){
        case 0:
            if(data.operateData.UKAreaLevel1Idx > 0){
                data.operateData.UKAreaLevel1Idx--;
                data.operateData.UKAreaLevel2Idx = 0;
                data.operateData.UKAreaLevel3Idx = 0;
                getSettingChSetDVBTUKListUIInfo();
                hiWebOsFrame.ChSetDVBTUKAreaListDialog.rewriteDataOnly();
            }
            break;
        case 1:
            if(data.operateData.UKAreaLevel2Idx > 0){
                data.operateData.UKAreaLevel2Idx--;
                data.operateData.UKAreaLevel3Idx = 0;
                getSettingChSetDVBTUKListUIInfo();
                hiWebOsFrame.ChSetDVBTUKAreaListDialog.rewriteDataOnly();
            }
            break;
        case 2:
            if(data.operateData.UKAreaLevel3Idx > 0){
                data.operateData.UKAreaLevel3Idx--;
                getSettingChSetDVBTUKListUIInfo();
                hiWebOsFrame.ChSetDVBTUKAreaListDialog.rewriteDataOnly();
            }
            break;
        default :
            debugE("settingChSetDVBTUKAreaListLeftHandler:ERROR!!"+data.operateData.currUKAreaLevelIdx);
            break;
    }
}
function settingChSetDVBTUKAreaListRightHandler(){
    var data = settingChSetDVBTUKAreaListData;
    switch (data.operateData.currUKAreaLevelIdx){
        case 0:
            if(data.operateData.UKAreaLevel1Idx < data.operateData.UKAreaList.length-1){
                data.operateData.UKAreaLevel1Idx++;
                data.operateData.UKAreaLevel2Idx = 0;
                data.operateData.UKAreaLevel3Idx = 0;
                getSettingChSetDVBTUKListUIInfo();
                hiWebOsFrame.ChSetDVBTUKAreaListDialog.rewriteDataOnly();
            }
            break;
        case 1:
            var areaItem = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList;
            if(data.operateData.UKAreaLevel2Idx < areaItem.length-1){
                data.operateData.UKAreaLevel2Idx++;
                data.operateData.UKAreaLevel3Idx = 0;
                getSettingChSetDVBTUKListUIInfo();
                hiWebOsFrame.ChSetDVBTUKAreaListDialog.rewriteDataOnly();
            }
            break;
        case 2:
            var areaLevel2Item =  data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList;
            var areaLevel3Item = areaLevel2Item[data.operateData.UKAreaLevel2Idx].subAreaList;
            if(data.operateData.UKAreaLevel3Idx < areaLevel3Item.length - 1){
                data.operateData.UKAreaLevel3Idx++;
                getSettingChSetDVBTUKListUIInfo();
                hiWebOsFrame.ChSetDVBTUKAreaListDialog.rewriteDataOnly();
            }
            break;
        default :
            debugE("settingChSetDVBTUKAreaListRightHandler:ERROR!!"+data.operateData.currUKAreaLevelIdx);
            break;
    }
}
/*******************************************************************
 name:settingChSetDVBTUKAreaListEscHandle
 description:从DVBC 运营商列表按返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBTUKAreaListEscHandle(){
    var data = settingChSetDVBTUKAreaListData;
    if(data.operateData.UKAreaLevel3Disable == 0){
        var areaLevel2Item = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList;
        var areaLevel3Item = areaLevel2Item[data.operateData.UKAreaLevel2Idx].subAreaList;
        var currAreaId = areaLevel3Item[data.operateData.UKAreaLevel3Idx].areaId;
    }else if(data.operateData.UKAreaLevel2Disable == 0){
        var areaLevel2Item = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].subAreaList;
        var currAreaId = areaLevel2Item[data.operateData.UKAreaLevel2Idx].areaId;
    }else{
        var currAreaId = data.operateData.UKAreaList[data.operateData.UKAreaLevel1Idx].areaId;
    }
    if(tv == true){
        model.channelSearch.SetUkArea(currAreaId);
    }
    this.page.close();
    this.page.destroy();
    hiWebOsFrame.ChSetChannelScanPage.hiFocus();
}

function settingChSetDVBTUKAreaListOnOpen()
{
    var opData = settingChSetDVBTUKAreaListData.operateData;
    if(opData.currCountry == "MYS"){
        $("#settingChSetDVBTAreaListBody").css({"height":"250px","overflow":"hidden","top":"409px"});
    }
}



function settingChSetDVBTUKAreaListOnDestroy(){
    hiWebOsFrame.ChSetDVBTUKAreaListDialog = null;
}