/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetSkipListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetSkipListTitle",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetSkipListContUl",//在页面中的按钮或者组件容器Id
            "description": "喜爱频道列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingListLiWithBottomNormal", "focus": "settingListLiWithBottomFocus","dataSelected":"settingListLiWithBottomNormal"
            },
            "handler": {
                "aftEnterHandler": "settingSetChannelFavFlag",
                "aftDownHandler":"settingChSetSkipListDownHandle",
                "aftUpHandler":"settingChSetSkipListUpHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetSkipListChannelNumber",
                    "description": "频道列表号",
                    "CaEType": "span"
                },
                {
                    "id": "settingChSetSkipListChannelName",
                    "description": "频道列表号",
                    "CaEType": "span"
                },
                {
                    "id": "settingChSetSkipListSelImg",
                    "description": "喜爱标识",
                    "CaEType": "img",
                    "classes":{
//                                "normal":"wizardListSelectImg"
                    }
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetFavChannelNumber", "settingChSetFavChannelName"],
                "PageSize":9
            }
        }
    ];
    settingInitChSetSkipListDialog();
    return settingChSetSkipListDialogData;
}
var settingChSetSkipListDialogData={
    "settingChSetSkipListTitle":{"Data":"Channel Skip"},
    "settingChSetSkipListContUl":{
        "Data":[
            {
                "settingChSetSkipListChannelNumber":{"Data":1},
                "settingChSetSkipListChannelName":{"Data":"aaaaaaaaaaaa"},
                "settingChSetSkipListSelImg":{"Data":"img/loveImg_selected.png"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currSkipListIdx":0,
        "channelSkipList":[]
    },
    "langData":{
        "Channel Skip":["Channel Skip"]
    },
    rewrite:"settingRewriteChSetSkipListDialog"
}
/*******************************************************************
 name:settingRewriteChSetSkipListDialog
 description:刷新喜爱列表
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetSkipListDialog(){
    try{
        var data = settingChSetSkipListDialogData;
        data.operateData.currSkipListIdx = 0;
        if(tv == false){
            data.operateData.channelSkipList = [];
            for(var i = 0; i < 100; i++){
                var itemData =                {
                    "channelNum":0,
                    "channelName":"aaaaaaaa",
                    "isSkip":false
                }
                itemData.number = i;
                data.operateData.channelSkipList.push(itemData);
            }
        }else{
            data.operateData.channelSkipList = chl_data_getAllChannelList();
            debugPrint("settingInitChSetSkipListDialog:"+data.operateData.channelSkipList.length,DebugLevel.ALWAYS);
            $.each(data.operateData.channelSkipList,function(idx,item){
                debugPrint("settingInitChSetSkipListDialog:"+item.channelNum+","+item.channelName+","+item.isFav);
            })
        }
    }catch (ex){
        debugPrint("settingInitChSetSkipListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetSkipListDialog
 description:刷新英国区域选择对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetSkipListDialog(data){
    try{
        if(data.settingChSetSkipListContUl.Data.length > data.operateData.channelSkipList.length){
            data.settingChSetSkipListContUl.Data.splice(data.operateData.channelSkipList.length);
        }else if(data.settingChSetSkipListContUl.Data.length < data.operateData.channelSkipList.length){
            while(data.settingChSetSkipListContUl.Data.length < data.operateData.channelSkipList.length){
                var itemData = {
                    "settingChSetSkipListChannelNumber":{"Data":1},
                    "settingChSetSkipListChannelName":{"Data":""},
                    "settingChSetSkipListSelImg":{"Data":""}
                }
                data.settingChSetSkipListContUl.Data.push(itemData);
            }
        }
        $.each(data.operateData.channelSkipList,function(idx,item){
            data.settingChSetSkipListContUl.Data[idx].settingChSetSkipListChannelNumber.Data = item.channelNum;
            data.settingChSetSkipListContUl.Data[idx].settingChSetSkipListChannelName.Data = item.channelName;
            if(item.isSkip != false){
                data.settingChSetSkipListContUl.Data[idx].settingChSetSkipListSelImg.Data = "img/skipImg_unselected.png";
            }else{
                data.settingChSetSkipListContUl.Data[idx].settingChSetSkipListSelImg.Data = "img/blank.png";
            }
//           debugPrint("settingRewriteChSetSkipListDialog:"+item.channelNum+","+item.channelName+","+item.isSkip);
        })
        data.settingChSetSkipListContUl.SelectedIndex = data.operateData.currSkipListIdx;
        data.settingChSetSkipListContUl.DataSelectedIndex = data.operateData.currSkipListIdx;
        if(data.operateData.channelSkipList[data.operateData.currSkipListIdx].isSkip == true){
            data.settingChSetSkipListContUl.Data[data.operateData.currSkipListIdx].settingChSetSkipListSelImg.Data = "img/skipImg_selected.png";
        }
    }catch (ex){
        debugPrint("settingRewriteChSetSkipListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetSkipListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingSetChannelFavFlag(){
    try{
        var data = settingChSetSkipListDialogData;
        if(data.operateData.channelSkipList[this.SelectedIndex].isSkip == false){
            data.operateData.channelSkipList[this.SelectedIndex].isSkip = true;
        }else{
            data.operateData.channelSkipList[this.SelectedIndex].isSkip = false;
        }
        if(tv == true){
            var channelId = data.operateData.channelSkipList[this.SelectedIndex].uid;
            var isSkip = data.operateData.channelSkipList[this.SelectedIndex].isSkip;
            if(isSkip == true){
                model.channelSearch.SkipSet(channelId,1);
            }else{
                model.channelSearch.SkipSet(channelId,0);
            }
        }
        hiWebOsFrame.ChSetSkipListDialog.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingSetChannelFavFlag:"+ex.message,DebugLevel.ERROR);
    }

}

function settingChSetSkipListUpHandle(){
    var data = settingChSetSkipListDialogData;
    data.operateData.currSkipListIdx = this.SelectedIndex;
    hiWebOsFrame.ChSetSkipListDialog.rewriteDataOnly();
    var len=data.operateData.channelSkipList.length;
    var conHigh = $("#settingChSetSkipListScrollCon").height();
//    var step = parseInt(conHigh/len);
    var step = conHigh/len;
    if(len > 9 &&this.SelectedIndex < (len-9))
    {
        var temp=parseInt(this.SelectedIndex*step);
        $("#settingChSetSkipListScrollBar").css("top",temp);
    }
}
function settingChSetSkipListDownHandle(){
    var data = settingChSetSkipListDialogData;
    var len = data.operateData.channelSkipList.length;

    data.operateData.currSkipListIdx = this.SelectedIndex;

    hiWebOsFrame.ChSetSkipListDialog.rewriteDataOnly();
    var conHigh = $("#settingChSetSkipListScrollCon").height();
//    var step = parseInt(conHigh/len);
    var step = conHigh/len;
    if(len > 9 && this.SelectedIndex > 8){
        var temp=parseInt((this.SelectedIndex-8)*step);
        $("#settingChSetSkipListScrollBar").css("top",temp);
    }
}
function settingChSetSkipListDialogEscHandle(){
    hiWebOsFrame.ChSetSkipListDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.ChSetSkipListDialog.destroy();
}
function settingChSetSkipListDialogOnOpen()
{
    var data = settingChSetSkipListDialogData;
//    $("#settingChSetSkipListScrollCon").css("height","254");
    var conHigh = $("#settingChSetSkipListScrollCon").height();
    if(data.operateData.channelSkipList.length > 9){
        var temp=parseInt(conHigh/data.operateData.channelSkipList.length*9);
        $("#settingChSetSkipListScrollBar").css("height",temp);
        $("#settingChSetSkipListScrollBar").css("visibility","visible");
        var step = parseInt(conHigh/data.operateData.channelSkipList.length);
        var index=this.page.getCaE("settingChSetSkipListContUl").BeginIdx;
        $("#settingChSetSkipListScrollBar").css("top",0);
    }else{
        $("#settingChSetSkipListScrollBar").css("visibility","hidden");
        var deleteHeight = (9-data.operateData.channelSkipList.length)*80;
        $("#settingChSetSkipListBody").css("height",$("#settingChSetSkipListBody").height()-deleteHeight);
        $("#settingChSetSkipListBody").css("top",$("#settingChSetSkipListBody").offset().top + deleteHeight/2);
        $("#settingChSetSkipListContFrame").css("height",$("#settingChSetSkipListContFrame").height()-deleteHeight);
    }
}
function settingChSetSkipListDialogOnDestroy(){
	chl_data_refreshChannelList();
    hiWebOsFrame.ChSetSkipListDialog = null;
}