/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetATVSoundSysListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetATVSoundSysListHeadText",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetATVSoundSysListUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetATVSoundSys",
                "aftDownHandler":"settingChSetATVSoundSysListDownHandle",
                "aftUpHandler":"settingChSetATVSoundSysListUpHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetATVSoundSysListSelImg",
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
                    "id": "settingChSetATVSoundSysListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                                "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetATVSoundSysListSelImg", "settingChSetATVSoundSysListItem"],
                "PageSize":5
            }
        }
    ];
    settingInitChSetATVSoundSysListDialog();
    return settingChSetATVSoundSysListDialogData;
}
var settingChSetATVSoundSysListDialogData={
    "settingChSetATVSoundSysListHeadText":{"Data":"Sound system"},
    "settingChSetATVSoundSysListUl":{
        "Data":[
            {
                "settingChSetATVSoundSysListSelImg":{"Data":false},
                "settingChSetATVSoundSysListItem":{"Data":""}
            }
        ]
    },
    "operateData":{
        "currSoundSysIdx":0,
        "soundSysMapList":[]
    },
    "langData":{
        "Sound system":["Sound system"]
    },
    rewrite:"settingRewriteChSetATVSoundSysListDialog"
}
/*******************************************************************
 name:settingInitChSetATVSoundSysListDialog
 description:初始化TV Name列表
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetATVSoundSysListDialog(){
    try{
        var data = settingChSetATVSoundSysListDialogData;
        data.operateData.soundSysMapList = getSettingChSetATVSoundSysList();
        data.operateData.currSoundSysIdx = getSettingChSetATVCurrSoundSys();
    }catch (ex){
        debugPrint("settingInitChSetATVSoundSysListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetATVSoundSysListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetATVSoundSysListDialog(data){
    try{
        if(data.settingChSetATVSoundSysListUl.Data.length > data.operateData.soundSysMapList.length){
            data.settingChSetATVSoundSysListUl.Data.splice(data.operateData.soundSysMapList.length)
        }else{
            while((data.settingChSetATVSoundSysListUl.Data.length < data.operateData.soundSysMapList.length)){
                var item = {
                    "settingChSetATVSoundSysListSelImg":{"Data":false},
                    "settingChSetATVSoundSysListItem":{"Data":""}
                }
                data.settingChSetATVSoundSysListUl.Data.push(item);
            }
        }
        $.each(data.settingChSetATVSoundSysListUl.Data,function(idx,item){
            item.settingChSetATVSoundSysListSelImg.Data = false;
            item.settingChSetATVSoundSysListItem.Data = data.operateData.soundSysMapList[idx].name;
        })
        data.settingChSetATVSoundSysListUl.Data[data.operateData.currSoundSysIdx].settingChSetATVSoundSysListSelImg.Data=true;
        data.settingChSetATVSoundSysListUl.DataSelectedIndex = data.operateData.currSoundSysIdx;
        data.settingChSetATVSoundSysListUl.SelectedIndex = data.operateData.currSoundSysIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetATVSoundSysListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetATVSoundSys
 description:设置当前使用的图像制式
 input:
 output:
 return
 *******************************************************************/
function setSettingChSetATVSoundSys(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingChSetATVSoundSysListDialogData;
        data.operateData.currSoundSysIdx = this.SelectedIndex;
        hiWebOsFrame.ChSetATVSoundSysListDialog.rewriteDataOnly();
        setSettingChSetATVCurrSoundSys(data.operateData.currSoundSysIdx);
        hiWebOsFrame.ChSetATVSoundSysListDialog.close();
        hiWebOsFrame.ChSetATVManuSetPage.open();
        hiWebOsFrame.ChSetATVManuSetPage.hiFocus();
        hiWebOsFrame.ChSetATVSoundSysListDialog.destroy();
    }catch (ex){
        debugPrint("setSettingChSetATVSoundSys:"+ex.message,DebugLevel.ERROR);
    }

}

function settingChSetATVSoundSysListDialogOnOpen()
{
    var data = settingChSetATVSoundSysListDialogData;
    var conHigh = $("#settingChSetSoundSysListScrollCon").height();
    if(data.operateData.soundSysMapList.length > 5){
        var temp=parseInt(conHigh/data.operateData.soundSysMapList.length*5);
        $("#settingChSetATVSoundSysListScrollBar").css("height",temp);
        $("#settingChSetATVSoundSysListScrollBar").css("visibility","visible");
        var index=this.page.getCaE("settingChSetATVSoundSysListUl").BeginIdx;
        var step=parseInt(conHigh/data.operateData.soundSysMapList.length);
        var scrollTop = parseInt(step * index);
        $("#settingChSetATVSoundSysListScrollBar").css("top",scrollTop);
    }else{
        $("#settingChSetATVSoundSysListScrollBar").css("visibility","hidden");
        var deleteHeight = (5-data.operateData.soundSysMapList.length)*95;
        $("#settingChSetATVSoundSysListBody").css("height",$("#settingChSetATVSoundSysListBody").height()-deleteHeight);
        $("#settingChSetATVSoundSysListBody").css("top",$("#settingChSetATVSoundSysListBody").offset().top + deleteHeight/2);
        $("#settingChSetATVSoundSysListFrame").css("height",$("#settingChSetATVSoundSysListFrame").height()-deleteHeight);
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
function settingChSetATVSoundSysListUpHandle(){
    var data = settingChSetATVSoundSysListDialogData;
    var len=data.operateData.soundSysMapList.length;
    var conHigh = $("#settingChSetSoundSysListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 &&this.SelectedIndex < (len-5))
    {
        var temp=parseInt(this.SelectedIndex*step);
        $("#settingChSetATVSoundSysListScrollBar").css("top",temp);
    }
}
function settingChSetATVSoundSysListDownHandle(){
    var data = settingChSetATVSoundSysListDialogData;
    var len=data.operateData.soundSysMapList.length;

    var conHigh = $("#settingChSetSoundSysListScrollCon").height();
    var step = conHigh/len;
    if(len > 5 && this.SelectedIndex > 4){
        var temp=parseInt((this.SelectedIndex-4)*step);
        $("#settingChSetATVSoundSysListScrollBar").css("top",temp);
    }
}
/*******************************************************************
 name:settingChSetATVSoundSysListDialogEscHandle
 description:TV名称列表显示
 input:
 output:
 return
 *******************************************************************/
function settingChSetATVSoundSysListDialogEscHandle(){
    hiWebOsFrame.ChSetATVSoundSysListDialog.close();
    hiWebOsFrame.ChSetATVManuSetPage.open();
    hiWebOsFrame.ChSetATVManuSetPage.hiFocus();
    hiWebOsFrame.ChSetATVSoundSysListDialog.destroy();
}
function settingChSetATVSoundSysListDialogOnDestroy(){
    hiWebOsFrame.ChSetATVSoundSysListDialog = null;
}