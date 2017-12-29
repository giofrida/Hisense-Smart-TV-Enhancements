/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetScanModePageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetSMHeadTitle",
            "description":"设置标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSMItemTitle",
            "description":"设置项名称",
            "CaEType":"span"
        },
        {
            "id":"settingChSetSMLeftImg",
            "description":"left arrow",
            "CaEType":"img"
        },
        {
            "id":"settingChSetSMRightImg",
            "description":"right arrow",
            "CaEType":"img"
        },
        {
            "id": "settingChSetSMList",//在页面中的按钮或者组件容器Id
            "description": "网络类型列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSingleNoTitleLiNormal", "focus": "settingChSingleNoTitleLiFocus",
                "dataSelected":"settingChSingleNoTitleLiSelected","disable":"settingChSelectLiDisable"
            },
            "handler": {
                "aftEnterHandler": "setSettingChSetScanMode",
                "befRightHandler":"settingNetSetSMPageToNextPage",
                "befLeftHandler":"settingChSetScanModeEscHandle"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetSMName",
                    "description": "tuner mode name",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetSingleNoTitleLiNameCls"
                    }
                },
                {
                    "id": "settingChSetSMSelectImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/channel_selectedBall.png",
                        "closeImg":"img/channel_unSelectedBall.png"
                    },
                    "classes":{
                        "normal":"settingChSetSingleNoTitleLiImgCls"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetSMName", "settingChSetSMSelectImg"]
            }
        }

    ];
    return settingChSetScanModeData;
}
var settingChSetScanModeData={
    "settingChSetSMHeadTitle":{"Data":"Auto Channel Scan"},
    "settingChSetSMItemTitle":{"Data":"Scan Mode"},
    "settingChSetSMLeftImg":{"Data":"img/channel_left_arrow.png"},
    "settingChSetSMRightImg":{"Data":"img/channel_right_arrow.png"},
    "settingChSetSMList":{
        "Data":[
            {
                "settingChSetSMName":{"Data":"Normal Scan"},
                "settingChSetSMSelectImg":{"Data":false}
            },
            {
                "settingChSetSMName":{"Data":"Update Scan"},
                "settingChSetSMSelectImg":{"Data":false}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currScanModeIdx":0,
        "ScanModeMapList":["Normal Scan","Update Scan"]
    },
    "langData":{},
    rewrite:"settingRewriteChSetScanMode"

}

/*******************************************************************
 name:settingRewriteChSetScanMode
 description:刷新设置主页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetScanMode(data){
    try{
        var opData = data.operateData;
        var tunerModeList = data.settingChSetSMList;
        if(tunerModeList.Data.length > opData.ScanModeMapList.length){
            tunerModeList.Data.splice(opData.ScanModeMapList.length)
        }else{
            while(tunerModeList.Data.length < opData.ScanModeMapList.length){
                var itemData =
                {
                    "settingChSetSMName":{"Data":""},
                    "settingChSetSMSelectImg":{"Data":false}
                }
                tunerModeList.Data.push(itemData);
            }
        }
        $.each(tunerModeList.Data,function(idx,item){
            item.settingChSetSMName.Data = opData.ScanModeMapList[idx];
            item.settingChSetSMSelectImg.Data = false;
        });
        tunerModeList.Data[opData.currScanModeIdx].settingChSetSMSelectImg.Data = true;

        tunerModeList.SelectedIndex = opData.currScanModeIdx;
        tunerModeList.DataSelectedIndex = opData.currScanModeIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetScanMode "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:setSettingChSetScanMode
 description:设置tuner mode
 *******************************************************************/
function setSettingChSetScanMode(){
    try{
        var data = settingChSetScanModeData;
        this.DataSelectedIndex = this.SelectedIndex;
        data.operateData.currScanModeIdx = this.SelectedIndex;
        hiWebOsFrame.ChSetScanModePage.rewriteDataOnly();
        settingNetSetSMPageToNextPage();
    }catch (ex){
        debugPrint("setSettingChSetScanMode:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetSMPageToNextPage(){
    var data = settingChSetScanModeData;
    switch (data.operateData.currScanModeIdx){
        case 0:// normal scan
            hiWebOsFrame.createPage("settingChSetCommDVBTPageId", null, hiWebOsFrame.ChSetScanModePage, null, function (a) {
                hiWebOsFrame.ChSetCommDVBTPage = a;
                hiWebOsFrame.ChSetScanModePage.close();
                a.open();
                a.hiFocus();
            });

            break;
        case 1://update scan
            hiWebOsFrame.createPage("settingChSetEUAutoScanPageId", null, null, null, function (a) {
                hiWebOsFrame.ChSetChannelScanPage = a;
                hiWebOsFrame.ChSetScanModePage.close();
                a.operateData.ScanModeFlag = 1;//update scan
                //settingChSetCommDVBTClosePrePage();
                a.open();
                a.hiFocus();
            });
            break;
        default :
            break;
    }
}
function settingChSetScanModeOnOpen(){
    try{
        var data = settingChSetScanModeData;
        data.operateData.currScanModeIdx = 0;
        hiWebOsFrame.ChSetScanModePage.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingChSetScanModeOnOpen"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetSMPageEscHandle
 description:从tunerMode设置页退出
 input:
 output:
 return
 *******************************************************************/
function settingChSetScanModeEscHandle(){
    hiWebOsFrame.ChSetScanModePage.close();
    hiWebOsFrame.ChSetScanModePage.origin.open();
    hiWebOsFrame.ChSetScanModePage.origin.hiFocus();
    hiWebOsFrame.ChSetScanModePage.destroy();
}
function settingChSetScanModeOnDestroy(){
    hiWebOsFrame.ChSetScanModePage = null;
}