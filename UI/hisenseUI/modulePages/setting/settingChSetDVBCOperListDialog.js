/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetDVBCOperListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBCOperListTitle",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetDVBCOperListContUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetDVBCOperator",
                "aftDownHandler":"settingChSetDVBCOperListDownHandler",
                "aftUpHandler":"settingChSetDVBCOperListUpHandler"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetDVBCOperListSelImg",
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
                    "id": "settingChSetDVBCOperListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                        "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetDVBCOperListSelImg", "settingChSetDVBCOperListItem"],
                "PageSize":3
            }
        }
    ];
    settingInitChSetDVBCOperListDialog();
    return settingChSetDVBCOperListData;
}
var settingChSetDVBCOperListData={
    "settingChSetDVBCOperListTitle":{"Data":"Operator"},
    "settingChSetDVBCOperListContUl":{
        "Data":[
            {
                "settingChSetDVBCOperListSelImg":{"Data":false},
                "settingChSetDVBCOperListItem":{"Data":""}
            }
        ]
    },
    "operateData":{
        "currOperatorIdx":0,
        "DVBCOperatorNum":0,
        "DVBCOperatorList":{}
    },
    "langData":{
        "Operator":["Operator"],
        "Standard":["Standard"],
        "Others":["Others"]
    },
    rewrite:"settingRewriteChSetDVBCOperListDialog"
}
/*******************************************************************
 name:settingInitChSetDVBCOperListDialog
 description:初始化DVBC的运营商列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBCOperListDialog(){
    try{
        var data = settingChSetDVBCOperListData;
        data.operateData.DVBCOperatorNum = getSettingChSetDVBC2OperatorNum();
        data.operateData.DVBCOperatorList =  getSettingChSetDVBC2OperatorList();
        var DVBCOperatorNum = data.operateData.DVBCOperatorList.settingChSetDVBCOperateNum;
        var DVBCOperatorList = data.operateData.DVBCOperatorList.settingChSetDVBCOperateList;
        debugPrint("settingInitChSetDVBCOperListDialog:DVBCOperatorNum="+data.operateData.DVBCOperatorNum,DebugLevel.ALWAYS);
        for(var i = 0; i <  data.operateData.DVBCOperatorList.length;i++){
            if( data.operateData.DVBCOperatorList[i].selectedFlag == 1){
                debugPrint("settingInitChSetDVBCOperListDialog:"+ data.operateData.DVBCOperatorList[i].operatorName);
                data.operateData.currOperatorIdx = i;
                break;
            }
        }
        if(i ==  data.operateData.DVBCOperatorList.length){
            debugE("settingInitChSetDVBCOperListDialog:error!!!");
            if(tv == true){
                model.channelSearch.SetOperator(0,0,-1);
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBCOperListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDVBCOperListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBCOperListDialog(data){
    try{
        if(data.settingChSetDVBCOperListContUl.Data.length > data.operateData.DVBCOperatorList.length){
            data.settingChSetDVBCOperListContUl.Data.splice(data.operateData.DVBCOperatorList.length);
        }else if(data.settingChSetDVBCOperListContUl.Data.length < data.operateData.DVBCOperatorList.length){
            while(data.settingChSetDVBCOperListContUl.Data.length < data.operateData.DVBCOperatorList.length){
                var itemData = {
                    "settingChSetDVBCOperListSelImg":{"Data":false},
                    "settingChSetDVBCOperListItem":{"Data":""}
                }
                data.settingChSetDVBCOperListContUl.Data.push(itemData);
            }
        }
        $.each(data.operateData.DVBCOperatorList,function(idx,item){
            data.settingChSetDVBCOperListContUl.Data[idx].settingChSetDVBCOperListSelImg.Data = false;
            data.settingChSetDVBCOperListContUl.Data[idx].settingChSetDVBCOperListItem.Data = item.operatorName;
        })
        data.settingChSetDVBCOperListContUl.Data[data.operateData.currOperatorIdx].settingChSetDVBCOperListSelImg.Data = true;
        data.settingChSetDVBCOperListContUl.DataSelectedIndex = data.operateData.currOperatorIdx;
        data.settingChSetDVBCOperListContUl.SelectedIndex = data.operateData.currOperatorIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetDVBCOperListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetDVBCOperator
 description:设置使用的运营商网络
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetDVBCOperator(){
    var data = settingChSetDVBCOperListData;
    this.DataSelectedIndex = this.SelectedIndex;
    data.operateData.currOperatorIdx = this.SelectedIndex;
    var currOperatorId = data.operateData.DVBCOperatorList[this.SelectedIndex].operatorId;
    var currOperatorName = data.operateData.DVBCOperatorList[this.SelectedIndex].operatorName;
    debugPrint("setSettingChSetDVBCOperator:currOperatorId="+currOperatorId+","+currOperatorName);
    if(tv == true){
        model.channelSearch.SetOperator(0,currOperatorId,-1);
    }
    hiWebOsFrame.ChSetDVBCOperListDialog.rewriteDataOnly();
    hiWebOsFrame.ChSetDVBCOperListDialog.close();
    settingChSetRefreshDVBC2Operator(currOperatorName,currOperatorId);
    hiWebOsFrame.ChSetDVBC2Page.hiFocus();
    hiWebOsFrame.ChSetDVBCOperListDialog.destroy();
}
/*******************************************************************
 name:settingChSetDVBCOperListEscHandle
 description:从DVBC 运营商列表按返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBCOperListEscHandle(){
    this.page.close();
    this.page.destroy();
    hiWebOsFrame.ChSetDVBC2Page.hiFocus();
}

function settingChSetDVBCOperListOnOpen()
{
    var data = settingChSetDVBCOperListData;
    $("#settingChSetDVBCOperListScrollCon").css("height","254")
    if(data.operateData.DVBCOperatorList.length > 3){
        var temp=parseInt(254/data.operateData.DVBCOperatorList.length*3);
        $("#settingChSetDVBCOperListScrollBar").css("height",temp);
        $("#settingChSetDVBCOperListScrollBar").css("visibility","visible");
        var step = parseInt(254/data.operateData.DVBCOperatorList.length);
        var index=this.page.getCaE("settingChSetDVBCOperListContUl").BeginIdx;
        $("#settingChSetDVBCOperListScrollBar").css("top",step*index);
    }else{
        $("#settingChSetDVBCOperListScrollBar").css("visibility","hidden");
        var deleteHeight = (3-data.operateData.DVBCOperatorList.length)*100;
        $("#wizardChSetDVBCOperListBody").css("height",$("#wizardChSetDVBCOperListBody").height()-deleteHeight);
        $("#settingChSetDVBCOperListContFrame").css("height",$("#settingChSetDVBCOperListContFrame").height()-deleteHeight);
    }
}

function settingChSetDVBCOperListUpHandler(){
    var data = settingChSetDVBCOperListData;
    var len=data.operateData.DVBCOperatorList.length;
    var step = parseInt(254/len);
    if(len > 3 &&this.SelectedIndex < (len-3))
    {
        var temp=this.SelectedIndex*step;
        $("#settingChSetDVBCOperListScrollBar").css("top",temp);

    }
}
function settingChSetDVBCOperListDownHandler(){
    var data = settingChSetDVBCOperListData;
    var len = data.operateData.DVBCOperatorList.length;
    var step = parseInt(254/len);
    if(len > 3 && this.SelectedIndex > 2){
        var temp=(this.SelectedIndex-2)*step;
        $("#settingChSetDVBCOperListScrollBar").css("top",temp);
    }
}

function settingChSetDVBCOperListOnDestroy(){
    hiWebOsFrame.ChSetDVBCOperListDialog = null;
}