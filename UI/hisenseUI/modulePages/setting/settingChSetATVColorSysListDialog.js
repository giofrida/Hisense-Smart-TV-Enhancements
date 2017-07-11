/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetATVColorSysListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetATVColorSysListHeadText",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetATVColorSysListUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetATVColorSys",
                "aftDownHandler":"settingChSetATVColorSysListDownHandle",
                "aftUpHandler":"settingChSetATVColorSysListUpHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetATVColorSysListSelImg",
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
                    "id": "settingChSetATVColorSysListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                                "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetATVColorSysListSelImg", "settingChSetATVColorSysListItem"],
                "PageSize":5
            }
        }
    ];
    settingInitChSetATVColorSysListDialog();
    return settingChSetATVColorSysListDialogData;
}
var settingChSetATVColorSysListDialogData={
    "settingChSetATVColorSysListHeadText":{"Data":"Picture system"},
    "settingChSetATVColorSysListUl":{
        "Data":[
            {
                "settingChSetATVColorSysListSelImg":{"Data":false},
                "settingChSetATVColorSysListItem":{"Data":""}
            }
        ]
    },
    "operateData":{
        "currColorSysIdx":0,
        "colorSysMapList":[]
    },
    "langData":{
        "Picture system":["Picture system"],
        "Auto":["Auto"]
    },
    rewrite:"settingRewriteChSetATVColorSysListDialog"
}
/*******************************************************************
 name:settingInitChSetATVColorSysListDialog
 description:初始化TV Name列表
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetATVColorSysListDialog(){
    try{
        var data = settingChSetATVColorSysListDialogData;
        data.operateData.colorSysMapList = getSettingChSetATVColorSysList();
        data.operateData.currColorSysIdx = getSettingChSetATVCurrColorSys();
    }catch (ex){
        debugPrint("settingInitChSetATVColorSysListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetATVColorSysListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetATVColorSysListDialog(data){
    try{
        if(data.settingChSetATVColorSysListUl.Data.length > data.operateData.colorSysMapList.length){
            data.settingChSetATVColorSysListUl.Data.splice(data.operateData.colorSysMapList.length)
        }else{
            while((data.settingChSetATVColorSysListUl.Data.length < data.operateData.colorSysMapList.length)){
                var item = {
                    "settingChSetATVColorSysListSelImg":{"Data":false},
                    "settingChSetATVColorSysListItem":{"Data":""}
                }
                data.settingChSetATVColorSysListUl.Data.push(item);
            }
        }
        $.each(data.settingChSetATVColorSysListUl.Data,function(idx,item){
            item.settingChSetATVColorSysListSelImg.Data = false;
            item.settingChSetATVColorSysListItem.Data = data.operateData.colorSysMapList[idx].name;
        })
        data.settingChSetATVColorSysListUl.Data[data.operateData.currColorSysIdx].settingChSetATVColorSysListSelImg.Data=true;
        data.settingChSetATVColorSysListUl.DataSelectedIndex = data.operateData.currColorSysIdx;
        data.settingChSetATVColorSysListUl.SelectedIndex = data.operateData.currColorSysIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetATVColorSysListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetATVColorSys
 description:设置当前使用的图像制式
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetATVColorSys(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingChSetATVColorSysListDialogData;
        data.operateData.currColorSysIdx = this.SelectedIndex;
        hiWebOsFrame.ChSetATVColorSysListDialog.rewriteDataOnly();
        setSettingChSetATVCurrColorSys(data.operateData.currColorSysIdx);
        hiWebOsFrame.ChSetATVColorSysListDialog.close();
        hiWebOsFrame.ChSetATVManuSetPage.open();
        hiWebOsFrame.ChSetATVManuSetPage.hiFocus();
        hiWebOsFrame.ChSetATVColorSysListDialog.destroy();
    }catch (ex){
        debugPrint("setSettingChSetATVColorSys:"+ex.message,DebugLevel.ERROR);
    }

}

function settingChSetATVColorSysListDialogOnOpen()
{
    var data = settingChSetATVColorSysListDialogData;
    var conHigh = $("#settingChSetColorSysListScrollCon").height();
    if(data.operateData.colorSysMapList.length > 5){
        var temp=parseInt(conHigh/data.operateData.colorSysMapList.length*5);
        $("#settingChSetATVColorSysListScrollBar").css("height",temp);
        $("#settingChSetATVColorSysListScrollBar").css("visibility","visible");
        var index=this.page.getCaE("settingChSetATVColorSysListUl").BeginIdx;
        var scrollTop = parseInt(temp * index);
        $("#settingChSetATVColorSysListScrollBar").css("top",scrollTop);
    }else{
        $("#settingChSetATVColorSysListScrollBar").css("visibility","hidden");
        var deleteHeight = (5-data.operateData.colorSysMapList.length)*95;
           //由于32寸缩放计算位置问题，直接把位置固定
            $("#settingChSetATVColorSysListBody").css("height",610-deleteHeight);
            $("#settingChSetATVColorSysListBody").css("top",234+deleteHeight/2);
            $("#settingChSetATVColorSysListFrame").css("height",504-deleteHeight);
        //    $("#settingChSetATVColorSysListBody").css("height",$("#settingChSetATVColorSysListBody").height()-deleteHeight);
        //    $("#settingChSetATVColorSysListBody").css("top",$("#settingChSetATVColorSysListBody").offset().top + deleteHeight/2);
        //    $("#settingChSetATVColorSysListFrame").css("height",$("#settingChSetATVColorSysListFrame").height()-deleteHeight);
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".wizardListContentUl").css({"margin-left":"65px","float":"left"});
        $(".wizardScrollBarFrame").css({"margin-left":"15px","float":"left"});
    }
    else {
        $(".wizardListContentUl").css({"margin-right":"65px","float":"right"});
        $(".wizardScrollBarFrame").css({"margin-right":"15px","float":"right"});
    }
}
function settingChSetATVColorSysListUpHandle(){
    var data = settingChSetATVColorSysListDialogData;
    var len=data.operateData.colorSysMapList.length;
    var conHigh = $("#settingChSetColorSysListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 &&this.SelectedIndex < (len-5))
    {
        var temp=parseInt(this.SelectedIndex*step);
        $("#settingChSetATVColorSysListScrollBar").css("top",temp);
    }
}
function settingChSetATVColorSysListDownHandle(){
    var data = settingChSetATVColorSysListDialogData;
    var len=data.operateData.colorSysMapList.length;

    var conHigh = $("#settingChSetColorSysListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 && this.SelectedIndex > 4){
        var temp=parseInt((this.SelectedIndex-4)*step);
        $("#settingChSetATVColorSysListScrollBar").css("top",temp);
    }
}

/*******************************************************************
 name:settingChSetATVColorSysListDialogEscHandle
 description:TV名称列表显示
 input:
 output:
 return
 *******************************************************************/
function settingChSetATVColorSysListDialogEscHandle(){
    hiWebOsFrame.ChSetATVColorSysListDialog.close();
    hiWebOsFrame.ChSetATVManuSetPage.open();
    hiWebOsFrame.ChSetATVManuSetPage.hiFocus();
    hiWebOsFrame.ChSetATVColorSysListDialog.destroy();
}
function settingChSetATVColorSysListDialogOnDestroy(){
    hiWebOsFrame.ChSetATVColorSysListDialog = null;
}