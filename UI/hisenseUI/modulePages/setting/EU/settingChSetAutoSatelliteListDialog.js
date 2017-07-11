/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetAutoSatelliteListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetAutoSatelliteListHeadText",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetAutoSatelliteListUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setChSetAutoSelectedSatellite",
                "aftDownHandler":"settingChSetAutoSatelliteListDownHandle",
                "aftUpHandler":"settingChSetAutoSatelliteListUpHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetAutoSatelliteListSelImg",
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
                    "id": "settingChSetAutoSatelliteListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                                "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetAutoSatelliteListSelImg", "settingChSetAutoSatelliteListItem"]
                //"PageSize":5
            }
        }
    ];
    settingInitChSetAutoSatelliteListDialog();
    return settingChSetAutoSatelliteListDialogData;
}
var settingChSetAutoSatelliteListDialogData={
    "settingChSetAutoSatelliteListHeadText":{"Data":"Satellite Selection"},
    "settingChSetAutoSatelliteListUl":{
        "Data":[
            {
                "settingChSetAutoSatelliteListSelImg":{"Data":false},
                "settingChSetAutoSatelliteListItem":{"Data":""}
            }
        ]
    },
    "operateData":{
        "currSatelliteIdx":0,
        "satelliteNameList":[],
        "satelliteIdList":[],
	    "beginindex":0
        
    },
    "langData":{
        "Satellite Select":[]
    },
    rewrite:"settingRewriteChSetAutoSatelliteListDialog"
}
/*******************************************************************
 name:settingInitChSetAutoSatelliteListDialog
 description:初始化TV Name列表
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetAutoSatelliteListDialog(){
    try{
        var opData = settingChSetAutoSatelliteListDialogData.operateData;
        if(!tv){
            opData.currSatelliteIdx = 0;
            opData.satelliteIdList = [-1,0,1,2,3,4,5,6,7];
            opData.satelliteNameList = ["None","Astra 19.2","Hotbord","satellite1","satellite2","satellite3","satellite4","satellite5","Satellite6"];
        }else{
            opData.satelliteIdList = model.satellite.getIdList();
            opData.satelliteIdList.unshift(-1);

            opData.satelliteNameList = model.satellite.getNameList();
            opData.satelliteNameList.unshift("None");
        }
        if(opData.satelliteIdList.length != opData.satelliteNameList.length){
            DBG_ERROR("settingInitChSetAutoSatelliteListDialog:"+ex.message);
            if(opData.satelliteIdList.length < opData.satelliteNameList.length){
                opData.satelliteNameList.splice(opData.satelliteIdList.length)
            }else{
                while(opData.satelliteIdList.length > opData.satelliteNameList.length){
                    opData.satelliteNameList.push("***********");
                }
            }

        }
        var currSelectedSatelliteId = getChSetCurrSelectedSatelliteId();
        DBG_INFO("settingInitChSetAutoSatelliteListDialog:"+currSelectedSatelliteId);
        for(var i = 0; i < opData.satelliteIdList.length; i++){
            if(currSelectedSatelliteId == opData.satelliteIdList[i]){
                opData.currSatelliteIdx = i;
                //hiWebOsFrame.ChSetAutoSatelliteListDialog.rewriteDataOnly();
                break;
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetAutoSatelliteListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetAutoSatelliteListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetAutoSatelliteListDialog(data){
    try{
        var opData = data.operateData;
        var satelliteListUl = data.settingChSetAutoSatelliteListUl;
        if(satelliteListUl.Data.length > opData.satelliteIdList.length){
            satelliteListUl.Data.splice(opData.satelliteIdList.length)
        }else{
            while((satelliteListUl.Data.length < opData.satelliteIdList.length)){
                var item = {
                    "settingChSetAutoSatelliteListSelImg":{"Data":false},
                    "settingChSetAutoSatelliteListItem":{"Data":""}
                }
                satelliteListUl.Data.push(item);
            }
        }
        $.each(satelliteListUl.Data,function(idx,item){
            item.settingChSetAutoSatelliteListSelImg.Data = false;
            item.settingChSetAutoSatelliteListItem.Data = opData.satelliteNameList[idx];
        })
        satelliteListUl.Data[opData.currSatelliteIdx].settingChSetAutoSatelliteListSelImg.Data=true;
        satelliteListUl.DataSelectedIndex = data.operateData.currSatelliteIdx;
        satelliteListUl.SelectedIndex = data.operateData.currSatelliteIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetAutoSatelliteListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setChSetAutoSelectedSatellite
 description:设置当前使用的图像制式
 input:
 output:
 return
 *******************************************************************/
function setChSetAutoSelectedSatellite(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var opData = settingChSetAutoSatelliteListDialogData.operateData;
        opData.currSatelliteIdx = this.SelectedIndex;
        setChSetSelectedSatellite(opData.satelliteIdList[opData.currSatelliteIdx],opData.satelliteNameList[opData.currSatelliteIdx]);
        hiWebOsFrame.ChSetAutoSatelliteListDialog.rewriteDataOnly();
        hiWebOsFrame.ChSetAutoSatelliteListDialog.close();
        hiWebOsFrame.ChSetSelSatellitePage.hiFocus();
        hiWebOsFrame.ChSetAutoSatelliteListDialog.destroy();
    }catch (ex){
        debugPrint("setChSetAutoSelectedSatellite:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetAutoSatelliteListUpHandle(){
    var opData = settingChSetAutoSatelliteListDialogData.operateData;
    var len=opData.satelliteIdList.length;
    var conHigh = $("#settingChSetAutoSatelliteListScrollCon").height();
    var step = conHigh/len;
    //if(len > 5 &&this.SelectedIndex < (len-5))
    //{
    //    var temp=parseInt(this.SelectedIndex*step);
    //    $("#settingChSetAutoSatelliteListScrollBar").css("top",temp);
    //}
    if(opData.beginindex>this.SelectedIndex)
    {
        opData.beginindex=opData.beginindex-1;
        debugPrint("beginindex"+opData.beginindex);
        var temp=parseInt(opData.beginindex*opData.step);
        $("#settingChSetAutoSatelliteListScrollBar").css("margin-top",temp+"px");
        $("#settingChSetAutoSatelliteListUl").css("margin-top","-"+95*(opData.beginindex)+"px");

    }
}
function settingChSetAutoSatelliteListDownHandle(){
    try{
        var opData = settingChSetAutoSatelliteListDialogData.operateData;
        var len=opData.satelliteIdList.length;

        var conHigh = $("#settingChSetAutoSatelliteListScrollCon").height();
        var step = conHigh/len;
        //if(len > 5 && this.SelectedIndex > 4){
        //    var temp=parseInt((this.SelectedIndex-4)*step);
        //    $("#settingChSetAutoSatelliteListScrollBar").css("top",temp);
        //}
        if((opData.beginindex+4)<this.SelectedIndex)
        {
            var temp=parseInt((this.SelectedIndex-4)*opData.step);
            $("#settingChSetAutoSatelliteListScrollBar").css("margin-top",temp+"px");
            //$("#settingChSetAutoSatelliteListUl").css("top","-"+95*(this.SelectedIndex-4)+"px");
            $("#settingChSetAutoSatelliteListUl").css("margin-top","-"+95*(this.SelectedIndex-4)+"px");
            opData.beginindex=this.SelectedIndex-4;
            debugPrint("beginindex"+opData.beginindex);
        }
    }catch(e){
        DBG_ERROR(e.message);
    }

}
/*******************************************************************
 name:settingChSetAutoSatelliteListDialogEscHandle
 description:TV名称列表显示
 input:
 output:
 return
 *******************************************************************/
function settingChSetAutoSatelliteListDialogEscHandle(){
    hiWebOsFrame.ChSetAutoSatelliteListDialog.close();
    hiWebOsFrame.ChSetSelSatellitePage.hiFocus();
    hiWebOsFrame.ChSetAutoSatelliteListDialog.destroy();
}
function settingChSetAutoSatelliteListDialogOnOpen()
{
    var data = settingChSetAutoSatelliteListDialogData;
    var opData = settingChSetAutoSatelliteListDialogData.operateData;
    var conHigh = $("#settingChSetAutoSatelliteListScrollCon").height();
    if(opData.satelliteIdList.length > 5){
        var temp=parseInt(425/opData.satelliteIdList.length*5);
        $("#settingChSetAutoSatelliteListScrollBar").css("height",temp+"px");
        $("#settingChSetAutoSatelliteListScrollBar").css("visibility","visible");
        //var index=this.page.getCaE("settingChSetAutoSatelliteListUl").BeginIdx;
        opData.step=parseInt(425/opData.satelliteIdList.length);
        //var scrollTop = parseInt(step * index);
        //$("#settingChSetAutoSatelliteListScrollBar").css("top",scrollTop);

        //opData.step=(425/i);
        var index2=0;
        var index=this.page.getCaE("settingChSetAutoSatelliteListUl").SelectedIndex;
        debugPrint("index"+index);
        if(index>4)
        {
            index2=index-4;
        }
        $("#settingChSetAutoSatelliteListScrollBar").css("margin-top",parseInt(425/data.settingChSetAutoSatelliteListUl.Data.length)*index2+"px");
        if(index<4)
        {
            $("#settingChSetAutoSatelliteListUl").css("margin-top","0px");
            opData.beginindex=0;
        }
        else
        {
            $("#settingChSetAutoSatelliteListUl").css("margin-top","-"+95*(index-4)+"px");
            opData.beginindex=index-4;
        }
    }else{
        $("#settingChSetAutoSatelliteListScrollBar").css("visibility","hidden");
        var deleteHeight = (5-opData.satelliteIdList.length)*95;
        $("#settingChSetAutoSatelliteListBody").css("height",610-deleteHeight);
        $("#settingChSetAutoSatelliteListBody").css("top",234 + deleteHeight/2);
        $("#settingChSetAutoSatelliteListFrame").css("height",480-deleteHeight);
        //$("#settingChSetAutoSatelliteListBody").css("height",$("#settingChSetAutoSatelliteListBody").height()-deleteHeight);
        //$("#settingChSetAutoSatelliteListBody").css("top",$("#settingChSetAutoSatelliteListBody").offset().top + deleteHeight/2);
        //$("#settingChSetAutoSatelliteListFrame").css("height",$("#settingChSetAutoSatelliteListFrame").height()-deleteHeight);
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".wizardListContentUl").css({"margin-left":"65px","float":"left"});
        $(".wizardScrollBarFrame").css({"margin-left":"15px","float":"left"});
    }
    else {
        $(".wizardListContentUl").css({"margin-right":"65px","float":"right"});
        $(".wizardScrollBarFrame").css({"margin-right":"15px","float":"right"});
    }
    hiWebOsFrame.ChSetAutoSatelliteListDialog.rewriteDataOnly();
}
function settingChSetAutoSatelliteListDialogOnDestroy(){
    hiWebOsFrame.ChSetAutoSatelliteListDialog = null;
}