/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetFransatOpListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetFransatOpListHeadText",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetFransatOpListUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setChSetFransatOpSelected",
                "aftDownHandler":"settingChSetFransatOpListDownHandle",
                "aftUpHandler":"settingChSetFransatOpListUpHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetFransatOpListSelImg",
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
                    "id": "settingChSetFransatOpListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                                "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetFransatOpListSelImg", "settingChSetFransatOpListItem"],
                "PageSize":5
            }
        }
    ];
    settingInitChSetFransatOpListDialog();
    return settingChSetFransatOpListDialogData;
}
var settingChSetFransatOpListDialogData={
    "settingChSetFransatOpListHeadText":{"Data":"Fransat Op"},
    "settingChSetFransatOpListUl":{
        "Data":[
            {
                "settingChSetFransatOpListSelImg":{"Data":false},
                "settingChSetFransatOpListItem":{"Data":""}
            }
        ]
    },
    "operateData":{
        "currFransatOpIdx":0,
        "OrigFransatOpList":[],
        "AnalyseFransatOpList":[]
    },
    "langData":{
        "Fransat Op":[]
    },
    rewrite:"settingRewriteChSetFransatOpListDialog"
}
/*******************************************************************
 name:settingInitChSetFransatOpListDialog
 description:初始化TV Name列表
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetFransatOpListDialog(){
    try{
        var opData = settingChSetFransatOpListDialogData.operateData;
        opData.currFransatOpIdx = 0;
        var FransetOpList =  getOrigFransatOpList();
        var FransetOpListNum = FransetOpList.length / 2;
        opData.AnalyseFransetOpList = [];
        for(var i = 0; i < FransetOpListNum; i++){
            var itemData = {
                "id":0,
                "name":1
            }
            itemData.id = FransetOpList[i*2+0];
            itemData.name = FransetOpList[i*2+1];
            opData.AnalyseFransetOpList.push(itemData);
        }
    }catch (ex){
        debugPrint("settingInitChSetFransatOpListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetFransatOpListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetFransatOpListDialog(data){
    try{
        var opData = data.operateData;
        var satelliteListUl = data.settingChSetFransatOpListUl;
        if(satelliteListUl.Data.length > opData.AnalyseFransetOpList.length){
            satelliteListUl.Data.splice(opData.AnalyseFransetOpList.length)
        }else{
            while((satelliteListUl.Data.length < opData.AnalyseFransetOpList.length)){
                var item = {
                    "settingChSetFransatOpListSelImg":{"Data":false},
                    "settingChSetFransatOpListItem":{"Data":""}
                }
                satelliteListUl.Data.push(item);
            }
        }
        $.each(satelliteListUl.Data,function(idx,item){
            item.settingChSetFransatOpListSelImg.Data = false;
            item.settingChSetFransatOpListItem.Data = opData.AnalyseFransetOpList[idx].name;
        })
        satelliteListUl.Data[opData.currFransatOpIdx].settingChSetFransatOpListSelImg.Data=true;
        satelliteListUl.DataSelectedIndex = data.operateData.currFransatOpIdx;
        satelliteListUl.SelectedIndex = data.operateData.currFransatOpIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetFransatOpListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setChSetAutoSelectedSatellite
 description:设置当前使用的图像制式
 input:
 output:
 return
 *******************************************************************/
function setChSetFransatOpSelected(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var opData = settingChSetFransatOpListDialogData.operateData;
        opData.currFransatOpIdx = this.SelectedIndex;
        DBG_INFO("setChSetFransatOpSelected::id"+opData.AnalyseFransetOpList[opData.currFransatOpIdx].id,DebugLevel.ALWAYS);
        tv && model.channelSearch.SetFransetOp(opData.AnalyseFransetOpList[opData.currFransatOpIdx].id);
        settingChScanSetFransetOp();
        hiWebOsFrame.ChSetFransatOpListDialog.rewriteDataOnly();
        hiWebOsFrame.ChSetFransatOpListDialog.close();
        hiWebOsFrame.ChSetFransatOpListDialog.destroy();
        hiWebOsFrame.ChSetChannelScanPage.hiFocus();
    }catch (ex){
        debugPrint("setChSetAutoSelectedSatellite:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetFransatOpListDialogEscHandle
 description:TV名称列表显示
 input:
 output:
 return
 *******************************************************************/
function settingChSetFransatOpListDialogEscHandle(){
    var opData = settingChSetFransatOpListDialogData.operateData;
    DBG_INFO("settingChSetFransatOpListDialogEscHandle::id"+opData.AnalyseFransetOpList[opData.currFransatOpIdx].id,DebugLevel.ALWAYS);
    tv && model.channelSearch.SetFransetOp(opData.AnalyseFransetOpList[opData.currFransatOpIdx].id);
    settingChScanSetFransetOp();
    hiWebOsFrame.ChSetFransatOpListDialog.close();
    hiWebOsFrame.ChSetFransatOpListDialog.destroy();
    hiWebOsFrame.ChSetChannelScanPage.hiFocus();
}
function settingChSetFransatOpListUpHandle(){
    var data = settingChSetFransatOpListDialogData;
    //data.operateData.currFransatOpIdx = this.SelectedIndex;
    //hiWebOsFrame.ChSetFransatOpListDialog.rewriteDataOnly();
    var len=data.operateData.AnalyseFransetOpList.length;
    var conHigh = $("#settingChSetFransatOpListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 &&this.SelectedIndex < (len-5))
    {
        var temp=parseInt(this.SelectedIndex*step) ;
        $("#settingChSetFransatOpListScrollBar").css("top",temp);
    }
}
function settingChSetFransatOpListDownHandle(){
    var data = settingChSetFransatOpListDialogData;
    var len = data.operateData.AnalyseFransetOpList.length;
    //data.operateData.currFransatOpIdx = this.SelectedIndex;
    //hiWebOsFrame.ChSetFransatOpListDialog.rewriteDataOnly();
    var conHigh = $("#settingChSetFransatOpListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 && this.SelectedIndex > 4){
        var temp=parseInt((this.SelectedIndex-4)*step);
        $("#settingChSetFransatOpListScrollBar").css("top",temp);
    }
}
function settingChSetFransatOpListDialogOnOpen()
{
    var opData = settingChSetFransatOpListDialogData.operateData;
    if(opData.AnalyseFransetOpList.length > 5){
        var temp=parseInt(425/opData.AnalyseFransetOpList.length*5);
        $("#settingChSetFransatOpListScrollBar").css("height",temp+"px");
        $("#settingChSetFransatOpListScrollBar").css("visibility","visible");
    }else{
        $("#settingChSetFransatOpListScrollBar").css("visibility","hidden");
        var deleteHeight = (5-opData.AnalyseFransetOpList.length)*95;
        $("#settingChSetFransatOpListBody").css("height",610-deleteHeight);
        $("#settingChSetFransatOpListBody").css("top",234 + deleteHeight/2);
        $("#settingChSetFransatOpListFrame").css("height",480-deleteHeight);
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".wizardListContentUl").css({"margin-left":"65px","float":"left"});
        $(".wizardScrollBarFrame").css({"margin-left":"15px","float":"left"});
    }
    else {
        $(".wizardListContentUl").css({"margin-right":"65px","float":"right"});
        $(".wizardScrollBarFrame").css({"margin-right":"15px","float":"right"});
    }
    hiWebOsFrame.ChSetFransatOpListDialog.rewriteDataOnly();
}
function settingChSetFransatOpListDialogOnDestroy(){
    hiWebOsFrame.ChSetFransatOpListDialog = null;
}