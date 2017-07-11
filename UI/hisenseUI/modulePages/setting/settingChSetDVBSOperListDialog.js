/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetDVBSOperListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBSOperListTitle",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetDVBSOperListContUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetDVBSOperator",
                "aftDownHandler":"settingChSetDVBSOperListDownHandler",
                "aftUpHandler":"settingChSetDVBSOperListUpHandler"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetDVBSOperListSelImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/selectedBall.png",
                        "closeImg":"img/unselectedBall.png"
                    },
                    "classes":{
                        "normal":"wizardListSelectImg"
                    }
                },
                {
                    "id": "settingChSetDVBSOperListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                        "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetDVBSOperListSelImg", "settingChSetDVBSOperListItem"],
                "PageSize":3
            }
        }
    ];
    settingInitChSetDVBSOperListDialog();
    return settingChSetDVBSOperListData;
}
var settingChSetDVBSOperListData={
    "settingChSetDVBSOperListTitle":{"Data":"Network"},
    "settingChSetDVBSOperListContUl":{
        "Data":[
            {
                "settingChSetDVBSOperListSelImg":{"Data":false},
                "settingChSetDVBSOperListItem":{"Data":""}
            }
        ]
    },
    "operateData":{
        "currOperatorIdx":0,
        "DVBSOperatorNum":0,
        "DVBSOperatorList":{}
    },
    "langData":{
        "Network":["Network"],
        "Others":["Others"]
    },
    rewrite:"settingRewriteChSetDVBSOperListDialog"
}
/*******************************************************************
 name:settingInitChSetDVBSOperListDialog
 description:初始化DVBS的运营商列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBSOperListDialog(){
    try{
        var data = settingChSetDVBSOperListData;
        var DVBSOperatorInfo = getSettingChSetMainDVBSOperator();
        data.operateData.DVBSOperatorNum = getSettingChSetMainOperatorNum();
        data.operateData.DVBSOperatorList =  getSettingChSetMainOperatorList();
        var DVBSOperatorNum = data.operateData.DVBSOperatorList.settingChSetDVBSOperateNum;
        var DVBSOperatorList = data.operateData.DVBSOperatorList.settingChSetDVBSOperateList;
        debugPrint("settingInitChSetDVBSOperListDialog:DVBSOperatorNum="+data.operateData.DVBSOperatorNum,DebugLevel.ALWAYS);
        for(var i = 0; i <  data.operateData.DVBSOperatorList.length;i++){
            if( data.operateData.DVBSOperatorList[i].selectedFlag == 1){
                debugPrint("settingInitChSetDVBSOperListDialog:"+ data.operateData.DVBSOperatorList[i].operatorName);
                data.operateData.currOperatorIdx = i;
                break;
            }
        }
        if(i ==  data.operateData.DVBSOperatorList.length){
            debugE("settingInitChSetDVBSOperListDialog:error!!!");
            if(tv == true){
                model.channelSearch.SetOperator(2,-1,-1);
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBSOperListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDVBSOperListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBSOperListDialog(data){
    try{
        if(data.settingChSetDVBSOperListContUl.Data.length > data.operateData.DVBSOperatorList.length){
            data.settingChSetDVBSOperListContUl.Data.splice(data.operateData.DVBSOperatorList.length);
        }else if(data.settingChSetDVBSOperListContUl.Data.length < data.operateData.DVBSOperatorList.length){
            while(data.settingChSetDVBSOperListContUl.Data.length < data.operateData.DVBSOperatorList.length){
                var itemData = {
                    "settingChSetDVBSOperListSelImg":{"Data":false},
                    "settingChSetDVBSOperListItem":{"Data":""}
                }
                data.settingChSetDVBSOperListContUl.Data.push(itemData);
            }
        }
        $.each(data.operateData.DVBSOperatorList,function(idx,item){
            data.settingChSetDVBSOperListContUl.Data[idx].settingChSetDVBSOperListSelImg.Data = false;
            data.settingChSetDVBSOperListContUl.Data[idx].settingChSetDVBSOperListItem.Data = item.operatorName;
        })
        data.settingChSetDVBSOperListContUl.Data[data.operateData.currOperatorIdx].settingChSetDVBSOperListSelImg.Data = true;
        data.settingChSetDVBSOperListContUl.DataSelectedIndex = data.operateData.currOperatorIdx;
        data.settingChSetDVBSOperListContUl.SelectedIndex = data.operateData.currOperatorIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetDVBSOperListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetDVBSOperator
 description:设置使用的运营商网络
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBSOperator(){
    var data = settingChSetDVBSOperListData;
    this.DataSelectedIndex = this.SelectedIndex;
    data.operateData.currOperatorIdx = this.SelectedIndex;
    debugPrint("setSettingChSetDVBSOperator:currOperatorIdx="+data.operateData.currOperatorIdx);
    var curroperatorId = data.operateData.DVBSOperatorList[this.SelectedIndex].operatorId;
    var currSatelliteId = data.operateData.DVBSOperatorList[this.SelectedIndex].satelliteId;
    var currOperatorName = data.operateData.DVBSOperatorList[this.SelectedIndex].operatorName;
    debugPrint("setSettingChSetDVBSOperator:curroperatorId="+curroperatorId+",satelliteId="+currSatelliteId,DebugLevel.ALWAYS);
    if(tv == true){
        model.channelSearch.SetOperator(2,parseInt(curroperatorId),parseInt(currSatelliteId));
    }
    hiWebOsFrame.ChSetDVBSOperListDialog.rewriteDataOnly();
    hiWebOsFrame.ChSetDVBSOperListDialog.close();
    settingChSetRefreshMainOperator(currOperatorName,curroperatorId);
    hiWebOsFrame.ChSetMainPage.rewriteDataOnly();
    hiWebOsFrame.ChSetMainPage.hiFocus();
    hiWebOsFrame.ChSetDVBSOperListDialog.destroy();
}
/*******************************************************************
 name:settingChSetDVBSOperListEscHandle
 description:从DVBS 运营商列表按返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBSOperListEscHandle(){
    this.page.close();
    this.page.destroy();
    hiWebOsFrame.ChSetMainPage.hiFocus();
}

function settingChSetDVBSOperListOnOpen()
{
    var data = settingChSetDVBSOperListData;
    $("#settingChSetDVBSOperListScrollCon").css("height","254")
    if(data.operateData.DVBSOperatorList.length > 3){
        var temp=parseInt(254/data.operateData.DVBSOperatorList.length*3);
        $("#settingChSetDVBSOperListScrollBar").css("height",temp);
        $("#settingChSetDVBSOperListScrollBar").css("visibility","visible");
        var step = parseInt(254/data.operateData.DVBSOperatorList.length);
        var index=this.page.getCaE("settingChSetDVBSOperListContUl").BeginIdx;
        $("#settingChSetDVBSOperListScrollBar").css("top",step*index);
    }else{
        $("#settingChSetDVBSOperListScrollBar").css("visibility","hidden");
        var deleteHeight = (3-data.operateData.DVBSOperatorList.length)*100;
        $("#wizardChSetDVBSOperListBody").css("height",$("#wizardChSetDVBSOperListBody").height()-deleteHeight);
        $("#settingChSetDVBSOperListContFrame").css("height",$("#settingChSetDVBSOperListContFrame").height()-deleteHeight);
    }
}

function settingChSetDVBSOperListUpHandler(){
    var data = settingChSetDVBSOperListData;
    var len=data.operateData.DVBSOperatorList.length;
    var step = parseInt(254/len);
    if(len > 3 &&this.SelectedIndex < (len-3))
    {
        var temp=this.SelectedIndex*step;
        $("#settingChSetDVBSOperListScrollBar").css("top",temp);

    }
}
function settingChSetDVBSOperListDownHandler(){
    var data = settingChSetDVBSOperListData;
    var len = data.operateData.DVBSOperatorList.length;
    var step = parseInt(254/len);
    if(len > 3 && this.SelectedIndex > 2){
        var temp=(this.SelectedIndex-2)*step;
        $("#settingChSetDVBSOperListScrollBar").css("top",temp);
    }
}

function settingChSetDVBSOperListOnDestroy(){
    hiWebOsFrame.ChSetDVBSOperListDialog = null;
}