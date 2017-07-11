/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetSatelliteListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetSatelliteListHeadText",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetSatelliteListUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetSatellite",
                "aftDownHandler":"settingChSetSatelliteListDownHandle",
                "aftUpHandler":"settingChSetSatelliteListUpHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetSatelliteListSelImg",
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
                    "id": "settingChSetSatelliteListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                                "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetSatelliteListSelImg", "settingChSetSatelliteListItem"],
                "PageSize":5
            }
        }
    ];
    settingInitChSetSatelliteListDialog();
    return settingChSetSatelliteListDialogData;
}
var settingChSetSatelliteListDialogData={
    "settingChSetSatelliteListHeadText":{"Data":"Satellite"},
    "settingChSetSatelliteListUl":{
        "Data":[
            {
                "settingChSetSatelliteListSelImg":{"Data":false},
                "settingChSetSatelliteListItem":{"Data":""}
            }
        ]
    },
    "operateData":{
        "satelliteIdx":0,
        "satelliteMapList":[]
    },
    "langData":{
        "Satellite":["Satellite"]
    },
    rewrite:"settingRewriteChSetSatelliteListDialog"
}
/*******************************************************************
 name:settingInitChSetSatelliteListDialog
 description:初始化TV Name列表
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetSatelliteListDialog(){
    try{
        var data = settingChSetSatelliteListDialogData;
        if(tv == false){
            data.operateData.satelliteMapList = [
                {
                    "id":0,
                    "name":"Astra 19.2"
                },
                {
                    "id":1,
                    "name":"Hotbord"
                }
            ];
            data.operateData.satelliteIdx = 0;
        }else{
            data.operateData.satelliteIdx = -1;
            var satelliteIdList = model.satellite.getSelectedIdList();
            var satelliteNameList = model.satellite.getSelectedNameList();
            var currSatelliteId = model.satellite.getSearchId();
            var satelliteNum = 0;
            data.operateData.satelliteMapList=[];
            for(var i = 0; i < satelliteIdList.length; i++){
                if(satelliteIdList[i] != -1){
                    var itemData = {
                        "id":0,
                        "name":""
                    }
                    itemData.id = satelliteIdList[i];
                    itemData.name = satelliteNameList[i];
                    data.operateData.satelliteMapList.push(itemData);
                    if(currSatelliteId == satelliteIdList[i]){
                        data.operateData.satelliteIdx = satelliteNum;
                    }
                    satelliteNum++;
                }
            }
            if(data.operateData.satelliteIdx == -1){
                debugE("settingInitChSetSatelliteListDialog:currSatelliteId"+currSatelliteId);
                data.operateData.satelliteIdx = 0;
                model.satellite.setSearchId(data.operateData.satelliteMapList[0].id);
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetSatelliteListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetSatelliteListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetSatelliteListDialog(data){
    try{
        if(data.settingChSetSatelliteListUl.Data.length > data.operateData.satelliteMapList.length){
            data.settingChSetSatelliteListUl.Data.splice(data.operateData.satelliteMapList.length)
        }else{
            while((data.settingChSetSatelliteListUl.Data.length < data.operateData.satelliteMapList.length)){
                var item = {
                    "settingChSetSatelliteListSelImg":{"Data":false},
                    "settingChSetSatelliteListItem":{"Data":""}
                }
                data.settingChSetSatelliteListUl.Data.push(item);
            }
        }
        $.each(data.settingChSetSatelliteListUl.Data,function(idx,item){
            item.settingChSetSatelliteListSelImg.Data = false;
            item.settingChSetSatelliteListItem.Data = data.operateData.satelliteMapList[idx].name;
        })
        data.settingChSetSatelliteListUl.Data[data.operateData.satelliteIdx].settingChSetSatelliteListSelImg.Data=true;
        data.settingChSetSatelliteListUl.DataSelectedIndex = data.operateData.satelliteIdx;
        data.settingChSetSatelliteListUl.SelectedIndex = data.operateData.satelliteIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetSatelliteListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetSatellite
 description:设置当前手动搜索的卫星
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetSatellite(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingChSetSatelliteListDialogData;
        data.operateData.satelliteIdx = this.SelectedIndex;
        if(tv == true){
            model.satellite.setSearchId(data.operateData.satelliteMapList[data.operateData.satelliteIdx].id);
        }
        settingChSetDTVManuSetSearchSatellite(data.operateData.satelliteMapList[data.operateData.satelliteIdx].id,data.operateData.satelliteMapList[data.operateData.satelliteIdx].name);
        hiWebOsFrame.ChSetSatelliteListDialog.rewriteDataOnly();
        hiWebOsFrame.ChSetSatelliteListDialog.close();
        hiWebOsFrame.ChSetDTVManuPage.hiFocus();
        hiWebOsFrame.ChSetSatelliteListDialog.destroy();
    }catch (ex){
        debugPrint("setSettingChSetSatellite:"+ex.message,DebugLevel.ERROR);
    }

}

function settingChSetSatelliteListDialogOnOpen()
{
    var data = settingChSetSatelliteListDialogData;
    var conHigh = $("#settingChSetSatelliteListScrollCon").height();
    if(data.operateData.satelliteMapList.length > 5){
        var temp=parseInt(conHigh/data.operateData.satelliteMapList.length*5);
        $("#settingChSetSatelliteListScrollBar").css("height",temp);
        $("#settingChSetSatelliteListScrollBar").css("visibility","visible");
        var index=this.page.getCaE("settingChSetSatelliteListUl").BeginIdx;
        var scrollTop = parseInt(temp * index);
        $("#settingChSetSatelliteListScrollBar").css("top",scrollTop);
    }else{
        $("#settingChSetSatelliteListScrollBar").css("visibility","hidden");
        var deleteHeight = (5-data.operateData.satelliteMapList.length)*95;
        $("#settingChSetSatelliteListBody").css("height",610-deleteHeight);
        $("#settingChSetSatelliteListBody").css("top",234 + deleteHeight/2);
        $("#settingChSetSatelliteListFrame").css("height",480-deleteHeight);
        //$("#settingChSetSatelliteListBody").css("height",$("#settingChSetSatelliteListBody").height()-deleteHeight);
        //$("#settingChSetSatelliteListBody").css("top",$("#settingChSetSatelliteListBody").offset().top + deleteHeight/2);
        //$("#settingChSetSatelliteListFrame").css("height",$("#settingChSetSatelliteListFrame").height()-deleteHeight);
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".wizardListContentUl").css({"margin-left":"65px","float":"left"});
    }
    else {
        $(".wizardListContentUl").css({"margin-right":"65px","float":"right"});
    }
}
function settingChSetSatelliteListUpHandle(){
    var data = settingChSetSatelliteListDialogData;
    var len=data.operateData.satelliteMapList.length;
    var conHigh = $("#settingChSetSatelliteListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 &&this.SelectedIndex < (len-5))
    {
        var temp=parseInt(this.SelectedIndex*step);
        $("#settingChSetSatelliteListScrollBar").css("top",temp);
    }
}
function settingChSetSatelliteListDownHandle(){
    var data = settingChSetSatelliteListDialogData;
    var len=data.operateData.satelliteMapList.length;

    var conHigh = $("#settingChSetSatelliteListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 && this.SelectedIndex > 4){
        var temp=parseInt((this.SelectedIndex-4)*step);
        $("#settingChSetSatelliteListScrollBar").css("top",temp);
    }
}
/*******************************************************************
 name:settingChSetSatelliteListDialogEscHandle
 description:TV名称列表显示
 input:
 output:
 return
 *******************************************************************/
function settingChSetSatelliteListDialogEscHandle(){
    hiWebOsFrame.ChSetSatelliteListDialog.close();
    hiWebOsFrame.ChSetDTVManuPage.open();
    hiWebOsFrame.ChSetDTVManuPage.hiFocus();
    hiWebOsFrame.ChSetSatelliteListDialog.destroy();
}
function settingChSetSatelliteListDialogOnDestroy(){
    hiWebOsFrame.ChSetSatelliteListDialog = null;
}