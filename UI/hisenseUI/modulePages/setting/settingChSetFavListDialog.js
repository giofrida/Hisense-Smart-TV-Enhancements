/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetFavListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetFavListTitle",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetFavListContUl",//在页面中的按钮或者组件容器Id
            "description": "喜爱频道列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingListLiWithBottomNormal", "focus": "settingListLiWithBottomFocus","dataSelected":"settingListLiWithBottomNormal"
            },
            "handler": {
                "aftEnterHandler": "settingSetChannelFavFlag",
                "aftDownHandler":"settingChSetFavListDownHandle",
                "aftUpHandler":"settingChSetFavListUpHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetFavListChannelNumber",
                    "description": "频道列表号",
                    "CaEType": "span"
                },
                {
                    "id": "settingChSetFavListChannelName",
                    "description": "频道列表号",
                    "CaEType": "span"
                },
                {
                    "id": "settingChSetFavListSelImg",
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
    settingInitChSetFavListDialog();
    return settingChSetFavListDialogData;
}
var settingChSetFavListDialogData={
    "settingChSetFavListTitle":{"Data":"Favorites List"},
    "settingChSetFavListContUl":{
        "Data":[
            {
                "settingChSetFavListChannelNumber":{"Data":1},
                "settingChSetFavListChannelName":{"Data":"aaaaaaaaaaaa"},
                "settingChSetFavListSelImg":{"Data":"img/loveImg_selected.png"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currFavListIdx":0,
        "channelFavList":[]
    },
    "langData":{
        "Favorites List":["Favorites List"]
    },
    rewrite:"settingRewriteChSetFavListDialog"
}
/*******************************************************************
 name:settingRewriteChSetFavListDialog
 description:刷新喜爱列表
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetFavListDialog(){
    try{
        var data = settingChSetFavListDialogData;
        data.operateData.currFavListIdx = 0;
        if(tv == false){
            data.operateData.channelFavList = [];
            for(var i = 0; i < 100; i++){
                var itemData =                {
                    "channelNum":0,
                    "channelName":"aaaaaaaa",
                    "isFav":false
                }
                itemData.channelNum = i;
                data.operateData.channelFavList.push(itemData);
            }
        }else{
            data.operateData.channelFavList = chl_data_getAllChannelList();
            debugPrint("settingInitChSetFavListDialog:"+data.operateData.channelFavList.length,DebugLevel.ALWAYS);
            $.each(data.operateData.channelFavList,function(idx,item){
                debugPrint("settingRewriteChSetFavListDialog:"+item.channelNum+","+item.channelName+","+item.isFav);
            })
        }
    }catch (ex){
        debugPrint("settingInitChSetFavListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetFavListDialog
 description:刷新英国区域选择对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetFavListDialog(data){
    try{
        if(data.settingChSetFavListContUl.Data.length > data.operateData.channelFavList.length){
            data.settingChSetFavListContUl.Data.splice(data.operateData.channelFavList.length);
        }else if(data.settingChSetFavListContUl.Data.length < data.operateData.channelFavList.length){
            while(data.settingChSetFavListContUl.Data.length < data.operateData.channelFavList.length){
                var itemData = {
                    "settingChSetFavListChannelNumber":{"Data":1},
                    "settingChSetFavListChannelName":{"Data":""},
                    "settingChSetFavListSelImg":{"Data":""}
                }
                data.settingChSetFavListContUl.Data.push(itemData);
            }
        }
        $.each(data.operateData.channelFavList,function(idx,item){
            data.settingChSetFavListContUl.Data[idx].settingChSetFavListChannelNumber.Data = item.channelNum;
            data.settingChSetFavListContUl.Data[idx].settingChSetFavListChannelName.Data = item.channelName;
            if(item.isFav != false){
                data.settingChSetFavListContUl.Data[idx].settingChSetFavListSelImg.Data = "img/loveImg_unselected.png";
            }else{
                data.settingChSetFavListContUl.Data[idx].settingChSetFavListSelImg.Data = "img/blank.png";
            }
//            debugPrint("settingRewriteChSetFavListDialog:"+item.channelNum+","+item.channelName+","+item.isFav)
        })
        data.settingChSetFavListContUl.SelectedIndex = data.operateData.currFavListIdx;
        data.settingChSetFavListContUl.DataSelectedIndex = data.operateData.currFavListIdx;
        if(data.operateData.channelFavList[data.operateData.currFavListIdx].isFav == true){
            data.settingChSetFavListContUl.Data[data.operateData.currFavListIdx].settingChSetFavListSelImg.Data = "img/loveImg_selected.png";
        }
    }catch (ex){
        debugPrint("settingRewriteChSetFavListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetFavListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingSetChannelFavFlag(){
    try{
        var data = settingChSetFavListDialogData;
        debugPrint("settingSetChannelFavFlag:"+this.SelectedIndex);
        if(data.operateData.channelFavList[this.SelectedIndex].isFav == true){
            data.operateData.channelFavList[this.SelectedIndex].isFav = false;
        }else{
            data.operateData.channelFavList[this.SelectedIndex].isFav = true;
        }
        if(tv == true){
            var channelId = data.operateData.channelFavList[this.SelectedIndex].uid;
            var isFav = data.operateData.channelFavList[this.SelectedIndex].isFav;
            debugPrint("settingSetChannelFavFlag:uid="+channelId+",isFav="+isFav,DebugLevel.ALWAYS);
            if(isFav == true){
                model.channelSearch.FavouriteSet(channelId,1);
            }else{
                model.channelSearch.FavouriteSet(channelId,0);
            }
        }
        hiWebOsFrame.ChSetFavListDialog.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingSetChannelFavFlag:"+ex.message,DebugLevel.ERROR);
    }
}

function settingChSetFavListUpHandle(){
    var data = settingChSetFavListDialogData;
    data.operateData.currFavListIdx = this.SelectedIndex;
    hiWebOsFrame.ChSetFavListDialog.rewriteDataOnly();
    var len=data.operateData.channelFavList.length;
    var conHigh = $("#settingChSetFavListScrollCon").height();
//    var step = parseInt(conHigh/len);
    var step = conHigh/len;
    if(len > 9 &&this.SelectedIndex < (len-9))
    {
        var temp=parseInt(this.SelectedIndex*step) ;
        $("#settingChSetFavListScrollBar").css("top",temp);
    }
}
function settingChSetFavListDownHandle(){
    var data = settingChSetFavListDialogData;
    var len = data.operateData.channelFavList.length;

    data.operateData.currFavListIdx = this.SelectedIndex;

    hiWebOsFrame.ChSetFavListDialog.rewriteDataOnly();
    var conHigh = $("#settingChSetFavListScrollCon").height();
//    var step = parseInt(conHigh/len);
    var step = conHigh/len;
    if(len > 9 && this.SelectedIndex > 8){
        var temp=parseInt((this.SelectedIndex-8)*step);
        $("#settingChSetFavListScrollBar").css("top",temp);
    }
}
function settingChSetFavListDialogEscHandle(){
    hiWebOsFrame.ChSetFavListDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.ChSetFavListDialog.destroy();
}
function settingChSetFavListDialogOnOpen()
{
    var data = settingChSetFavListDialogData;
//    $("#settingChSetFavListScrollCon").css("height","254");
    var conHigh = $("#settingChSetFavListScrollCon").height();
    if(data.operateData.channelFavList.length > 9){
        var temp=parseInt(conHigh/data.operateData.channelFavList.length*9);
        $("#settingChSetFavListScrollBar").css("height",temp);
        $("#settingChSetFavListScrollBar").css("visibility","visible");
        var step = parseInt(conHigh/data.operateData.channelFavList.length);
//        var index=this.page.getCaE("settingChSetFavListContUl").BeginIdx;
        $("#settingChSetFavListScrollBar").css("top",0);
    }else{
        $("#settingChSetFavListScrollBar").css("visibility","hidden");
        var deleteHeight = (9-data.operateData.channelFavList.length)*80;
        $("#settingChSetFavListBody").css("height",$("#settingChSetFavListBody").height()-deleteHeight);
        $("#settingChSetFavListBody").css("top",$("#settingChSetFavListBody").offset().top + deleteHeight/2);
        $("#settingChSetFavListContFrame").css("height",$("#settingChSetFavListContFrame").height()-deleteHeight);
    }
}
function settingChSetFavListDialogOnDestroy(){
	chl_data_refreshChannelList();
    hiWebOsFrame.ChSetFavListDialog = null;
}