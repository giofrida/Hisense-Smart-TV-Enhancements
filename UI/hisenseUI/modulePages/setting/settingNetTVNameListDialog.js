/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetTVNameListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingNetTVNameListHeadText",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingNetTVNameListUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus","dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "setSettingNetTVName",
                "aftDownHandler":"",
                "aftUpHandler":""
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingNetTVNameListSelImg",
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
                    "id": "settingNetTVNameListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
                                "normal":"wizardListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingNetTVNameListSelImg", "settingNetTVNameListItem"],
                "PageSize":5
            }
        }
    ];
    settingInitNetTVNameListDialog();
    return settingNetTVNameListDialogData;
}
var settingNetTVNameListDialogData={
    "settingNetTVNameListHeadText":{"Data":"TV Name"},
    "settingNetTVNameListUl":{
        "Data":[
            {
                "settingNetTVNameListSelImg":{"Data":true},
                "settingNetTVNameListItem":{"Data":"Smart TV"}
            },
            {
                "settingNetTVNameListSelImg":{"Data":false},
                "settingNetTVNameListItem":{"Data":"Living Room TV"}
            },
            {
                "settingNetTVNameListSelImg":{"Data":false},
                "settingNetTVNameListItem":{"Data":"Bedroom TV"}
            },
            {
                "settingNetTVNameListSelImg":{"Data":false},
                "settingNetTVNameListItem":{"Data":"Kitchen TV"}
            },
            {
                "settingNetTVNameListSelImg":{"Data":false},
                "settingNetTVNameListItem":{"Data":"User Input"}
            }
        ]
    },
    "operateData":{
        "currTVNameIdx":0,
        "tvNameList":["Smart TV","Living Room TV","Bed Room TV","Kitchen TV"],
        "useDefineName":"User Input"
    },
    "langData":{
        "TV Name":["TV Name"],
        "User Input":["User Input"]
    },
    rewrite:"settingRewriteNetTVNameListDialog"
}
/*******************************************************************
 name:settingInitNetTVNameListDialog
 description:初始化TV Name列表
 input:
 output:
 return
 *******************************************************************/
function settingInitNetTVNameListDialog(){
    try{
       var data = settingNetTVNameListDialogData;
       var langidx=hiWebOsFrame.getCurrentLanguageIndex();
       var NameList=["Smart TV","Living Room TV","Bed Room TV","Kitchen TV"];
        data.operateData.tvNameList=[];
         $.each( NameList,
                function (k, v) {
                    if (v != "" && !!langPackages[v]&&langPackages[v].length>langidx) {
                        data.operateData.tvNameList[k]=langPackages[v][langidx];
                    }
                    else
                    {
                        data.operateData.tvNameList[k]= v;
                    }

                })
        debugPrint("tvNameList:"+data.operateData.tvNameList);


        if(tv == false){
            data.operateData.currTVNameIdx = 0;
        }else{
            var tvName = model.system.getMachinename();
            debugPrint("settingInitNetTVNameListDialog:tvName="+tvName,DebugLevel.ALWAYS);
            if(!tvName){
                data.operateData.currTVNameIdx = 0;
                model.system.setMachinename(data.operateData.tvNameList[0]);
                data.operateData.useDefineName = "User Input";
            }else{
                for(var i=0; i < data.operateData.tvNameList.length;i++){
                    if(tvName == data.operateData.tvNameList[i]){
                        data.operateData.currTVNameIdx = i;
                        data.operateData.useDefineName = "User Input";
                        break;
                    }
                }
                if(i == data.operateData.tvNameList.length){
                    data.operateData.useDefineName = tvName;
                    data.operateData.currTVNameIdx = i;
                }
                debugPrint("settingInitNetTVNameListDialog:"+data.operateData.currTVNameIdx);
            }
        }
    }catch (ex){
        debugPrint("settingInitNetTVNameListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetTVNameListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetTVNameListDialog(data){
    try{
        $.each(data.settingNetTVNameListUl.Data,function(idx,item){
            item.settingNetTVNameListSelImg.Data = false;
            if(idx<4)
            {
            item. settingNetTVNameListItem.Data=data.operateData.tvNameList[idx];
            }
        })
        if(data.operateData.useDefineName=="User Input")
        {
            data.settingNetTVNameListUl.Data[data.settingNetTVNameListUl.Data.length-1].settingNetTVNameListItem.Data = data.operateData.useDefineName;

        }
        else
        {
           data.settingNetTVNameListUl.Data[data.settingNetTVNameListUl.Data.length-1].settingNetTVNameListItem.Data = data.operateData.useDefineName+" ";
        }
        data.settingNetTVNameListUl.Data[data.operateData.currTVNameIdx].settingNetTVNameListSelImg.Data = true;
        data.settingNetTVNameListUl.DataSelectedIndex = data.operateData.currTVNameIdx;
        data.settingNetTVNameListUl.SelectedIndex = data.operateData.currTVNameIdx;
    }catch (ex){
        debugPrint("settingRewriteNetTVNameListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingNetTVName
 description:设置当前使用的TV Name
 input:
 output:
 return
 *******************************************************************/
function setSettingNetTVName(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingNetTVNameListDialogData;
        data.operateData.currTVNameIdx = this.SelectedIndex;
        hiWebOsFrame.NetTVNameListDialog.rewriteDataOnly();
        if(data.operateData.currTVNameIdx < data.settingNetTVNameListUl.Data.length-1){
            var currTVName = data.settingNetTVNameListUl.Data[data.operateData.currTVNameIdx].settingNetTVNameListItem.Data;
            if(tv == true){
                model.system.setMachinename(currTVName);
            }
            settingFirPageSetNetworkTVName(currTVName);
            setTimeout(settingNetTVNameListDialogEscHandle,500);
        }else{
            settingNetCreateTVNameInputDialog();
        }
    }catch (ex){
        debugPrint("setSettingNetTVName:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetCreateTVNameInputDialog(){
    hiWebOsFrame.createPage('settingNetTVNameInputDialogId',null, null, null,function(a){
        hiWebOsFrame.NetTVNameInputDialog = a;
        hiWebOsFrame.NetTVNameListDialog.close();
        a.open();
        a.hiFocus();
        hiWebOsFrame.NetTVNameListDialog.destroy()
    });
}
function settingNetTVNameListDialogOnOpen()
{
    var data = settingNetTVNameListDialogData;
    $("#settingNetTVNameListScrollBar").css("visibility","hidden");
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".wizardListContentUl").css({"margin-left":"65px","float":"left"});
        $(".wizardScrollBarFrame").css({"margin-left":"15px","float":"left"});
    }
    else {
        $(".wizardListContentUl").css({"margin-right":"65px","float":"right"});
        $(".wizardScrollBarFrame").css({"margin-right":"15px","float":"right"});
    }
}
function wizardNetSetSecListUpHandler(){
    var data = settingNetTVNameListDialogData;
    var len=data.operateData.WifiSecurityType.length;
    var step = parseInt(425/len);
    if(len > 5 &&this.SelectedIndex < (len-5))
    {
        var temp=this.SelectedIndex*step;
        $("#settingNetTVNameListScrollBar").css("top",temp);

    }
}
function wizardNetSetSecListDownHandler(){
    var data = settingNetTVNameListDialogData;
    var len = data.operateData.WifiSecurityType.length;
    var step = parseInt(425/len);
    if(len > 5 && this.SelectedIndex > 4){
        var temp=(this.SelectedIndex-4)*step;
        $("#settingNetTVNameListScrollBar").css("top",temp);
    }
}
/*******************************************************************
 name:settingNetTVNameListDialogEscHandle
 description:TV名称列表显示
 input:
 output:
 return
 *******************************************************************/
function settingNetTVNameListDialogEscHandle(){
    hiWebOsFrame.NetTVNameListDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.NetTVNameListDialog.destroy();
}
function settingNetTVNameListDialogOnDestroy(){
    hiWebOsFrame.NetTVNameListDialog = null;
}