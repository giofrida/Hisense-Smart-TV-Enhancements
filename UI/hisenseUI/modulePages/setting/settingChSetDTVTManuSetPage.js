/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDTVTManuSetPageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetDTVTManuHeadImg",
            "description":"",
            "CaEType":"img"
        },
        {
            "id":"settingChSetDTVTManuSetHeadText",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuNumberTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuNumberValue",
            "description":"",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetDTVTManuNumberBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardAdjustBtnNormal","focus":"wizardAdjustBtnFocus","disable":"wizardAdjustBtnDisable"
            },
            "nav":{
                "downTo":"settingChSetDTVTManuScanBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDTVTChNumberEnterHandler",
                "befLeftHandler":"settingChSetDTVTManuSetEscHandle"
            }
        },
        {
            "id":"settingChSetDTVTManuFreqTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuFreqValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuBWTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuBWValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuSigQTitle",
            "description":"信号质量标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuSigQProgressBar",
            "description":"",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetDTVTManuSigQCont",
                    "description": "进度条",
                    "CaEType": "div"
                },
                {
                    "id": "settingChSetDTVTManuSigQValue",
                    "description": "进度显示文字",
                    "CaEType": "span"
                }
            ],
            "classes":{
                "normal":"settingChSetPerFrame"
            },
            "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigQCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                PBProcessId: "settingChSetDTVTManuSigQCont",//进度条的进程id
                ShowTextId: "settingChSetDTVTManuSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 230,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id":"settingChSetDTVTManuSigLTitle",
            "description":"信号水平标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuSigLProgressBar",
            "description":"信号水平",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetDTVTManuSigLCont",
                    "description": "进度条",
                    "CaEType": "div"
                },
                {
                    "id": "settingChSetDTVTManuSigLValue",
                    "description": "进度显示文字",
                    "CaEType": "span"
                }
            ],
            "classes":{
                "normal":"settingChSetPerFrame"
            },
            "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigLCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                PBProcessId: "settingChSetDTVTManuSigLCont",//进度条的进程id
                ShowTextId: "settingChSetDTVTManuSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                DefaultValue: 0,//默认值
                Width: 230,//进度条总宽度
                TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                CompleteCallBack: null//如果达到设置值时的回调函数。
            }
        },
        {
            "id":"settingChSetDTVTManuSearchNumTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuSearchNumValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVTManuScanBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus","disable":"wizardBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetDTVTManuNumberBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDTVTManuStartScan",
                "befUpHandler":"settingChSetDTVTManuSearBtnBefUpHandle"
            }
        }

    ];
    settingInitChSetDTVTManuSetPage();
    return settingChSetDTVTManuSetPageData;
}
var settingChSetDTVTManuSetPageData={
    "settingChSetDTVTManuHeadImg":{"Data":"img/head_arrow.png"},
    "settingChSetDTVTManuSetHeadText":{"Data":"DTV Manual Scan"},
    "settingChSetDTVTManuNumberTitle":{"Data":"Channel number"},
    "settingChSetDTVTManuNumberValue":{"Data":""},
    "settingChSetDTVTManuNumberBtn":{"Data":"Adjust"},
    "settingChSetDTVTManuFreqTitle":{"Data":"Frequency"},
    "settingChSetDTVTManuFreqValue":{"Data":""},
    "settingChSetDTVTManuBWTitle":{"Data":"Bandwidth"},
    "settingChSetDTVTManuBWValue":{"Data":""},
    "settingChSetDTVTManuSigQTitle":{"Data":"Signal Quality"},
    "settingChSetDTVTManuSigQProgressBar":{
        "Data":{},
        "DefaultValue":80
    },
    "settingChSetDTVTManuSigLTitle":{"Data":"Signal Level"},
    "settingChSetDTVTManuSigLProgressBar":{
        "Data":{},
        "DefaultValue":80
    },
    "settingChSetDTVTManuSearchNumTitle":{"Data":"Channels Found"},
    "settingChSetDTVTManuSearchNumValue":{"Data":""},
    "settingChSetDTVTManuScanBtn":{"Data":"Start"},
    "operateData":{
        "chScanState":0, //0:设置,1:搜索
        "channelNumber":0,
        "totalNum":0,
        "frequency":0,
        "bandWidth":7,
        "sigQualityValue":80,
        "sigLevelValue":80,
        "searchTimer":0,
        "signalInfoTimer":0,
        "refreshChannelListFlag":0
    },
    "langData":{
        "DTV Manual Scan":["DTV Manual Scan"],
        "Channel number":["Channel number"],
        "Adjust":["Adjust"],
        "Frequency":["Frequency"],
        "Bandwidth":["Bandwidth"],
        "Signal Quality":["Signal Quality"],
        "Signal Level":["Signal Level"],
        "Channels Found":["Channels Found"],
        "Start":["Start"]
    },
    rewrite:"settingRewriteChSetDTVTManuSetPage"
}
/*******************************************************************
 name:settingInitChSetDTVTManuSetPage
 description:初始化
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDTVTManuSetPage(){
    try{
        var data = settingChSetDTVTManuSetPageData;
        data.operateData.totalNum = 0;
        data.operateData.chScanState = 0;
        data.operateData.refreshChannelListFlag = 0;
        if(tv == false){
            data.operateData.channelNumber = "30";
            data.operateData.frequency = "200000";
            data.operateData.bandWidth = "7";
        }else{
            data.operateData.channelNumber = model.channelSearch.getFoundServicesNumber();
            data.operateData.frequency = model.channelSearch.getFoundServicesFrequency();
            data.operateData.bandWidth = model.channelSearch.getBandWidth();
            data.operateData.sigQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
            data.operateData.sigLevelValue = model.tvservice.getSignalMainLevels();
        }
        data.operateData.signalInfoTimer = setInterval(settingChSetDTVTManuSignalInfoTimeOut,2000);
    }catch (ex){
        debugPrint("settingInitChSetDTVTManuSetPage"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDTVTManuSetPage
 description:刷新频道搜索页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDTVTManuSetPage(data){
    try{
        var data = settingChSetDTVTManuSetPageData;
        if(hiWebOsFrame.getHTMLDir() == "ltr"){
            data.settingChSetDTVTManuHeadImg.Data = "img/head_arrow.png";
        }else{
            data.settingChSetDTVTManuHeadImg.Data = "img/head_arrow_right.png"
        }
        data.settingChSetDTVTManuNumberValue.Data = data.operateData.channelNumber;
        data.settingChSetDTVTManuFreqValue.Data = data.operateData.frequency;
        data.settingChSetDTVTManuBWValue.Data = data.operateData.bandWidth;
        data.settingChSetDTVTManuSigQProgressBar.DefaultValue = data.operateData.sigQualityValue;
        data.settingChSetDTVTManuSigLProgressBar.DefaultValue = data.operateData.sigLevelValue;
        data.settingChSetDTVTManuSearchNumValue.Data = data.operateData.totalNum;
        if(data.operateData.chScanState == 0){
            data.settingChSetDTVTManuScanBtn.disable = false;
        }else{
            data.settingChSetDTVTManuScanBtn.disable = true;
        }
    }catch (ex){
        debugPrint("settingRewriteChSetDTVTManuSetPage:"+ex.message,DebugLevel.ERROR);
    }
}

function settingChSetDTVTChNumberEnterHandler(){
    hiWebOsFrame.createPage('settingChSetChNumberChangeDialogId', null, hiWebOsFrame.ChSetDTVManuPage, null, function (a) {
        hiWebOsFrame.ChSetChNumberChangeDialog = a;
        settingChSetChSetChNumberSet(getSettingChSetDTVChNumber());
        hiWebOsFrame.ChSetChNumberChangeDialog.rewriteDataOnly();
        a.open();
        a.hiFocus();
    });
}
/*******************************************************************
 name:settingChSetDTVTManuStartScan
 description:开始手动搜索DTV
 input:
 output:
 return
 *******************************************************************/
function settingChSetDTVTManuStartScan(){
    try{
        var data = settingChSetDTVTManuSetPageData;
        data.operateData.chScanState = 1;
        hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
        if(tv == false){
            data.operateData.searchTimer = setTimeout(settingChSetDTVTManuTestSearch,5000);
        }
        else{
            hiWebOsFrame.pushProtectPages(hiWebOsFrame.ChSetDTVManuPage);
            model.channelSearch.onStateChaged = settingChSetDTVTManuSearchStateCallBack;
            var currSource = model.source.getCurrentSource();
            if(currSource != 0){
                debugE("settingChSetDTVTManuStartScan:currSource="+currSource);
                model.source.InputSet(0);
            }
            var temp=model.source.getInputName();
            debugPrint("settingChSetAutoScanPageOnOpen:temp"+temp,DebugLevel.ERROR);
            if(temp[3]==1)//判断 tv 通道加锁，搜台前暂时解锁，不设置底层EPPROM
            {
                model.source.unlockInput(0);
                livetvmain.setUnlockFlag(true);
            }
            pauseHBBTV();
            model.channelSearch.ManualStart(0);
        }
    }catch (ex){
        debugPrint("settingChSetDTVTManuStartScan: "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDTVTManuTestSearch
 description:测试电脑方式搜台进度
 input:method:
 output:
 return
 *******************************************************************/
function settingChSetDTVTManuTestSearch(){
    var data = settingChSetDTVTManuSetPageData;
    data.operateData.chScanState = 0;
    data.operateData.totalNum = 2;
    data.operateData.frequency = 1000;
    data.operateData.bandWidth = 8;
    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
}
function getChSetDTVTManuSignalInfo(){
    var data = settingChSetDTVTManuSetPageData;
    if(tv == false){
        data.operateData.sigQualityValue =  data.operateData.sigQualityValue - 1;
        data.operateData.sigLevelValue = data.operateData.sigLevelValue - 1;
    }else{
        data.operateData.sigQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
        data.operateData.sigLevelValue = model.tvservice.getSignalMainLevels();
    }
}
function settingChSetDTVTManuSignalInfoTimeOut(){
    try{
        getChSetDTVTManuSignalInfo();
        var levelId = "settingChSetDTVTManuSigLProgressBar";
        var qualityId = "settingChSetDTVTManuSigQProgressBar";

        var data = settingChSetDTVTManuSetPageData;
        //更新Level进度条
        var _this = hiWebOsFrame.ChSetDTVManuPage.getCaE(levelId);
        _this.running_value = data.operateData.sigLevelValue;
        _this.setvalue(_this.running_value);

        //更新Quality进度条
        var _this = hiWebOsFrame.ChSetDTVManuPage.getCaE(qualityId);
        _this.running_value =  data.operateData.sigQualityValue;
        _this.setvalue(_this.running_value);
    }catch (ex){
        debugE("settingChSetDTVTManuSignalInfoTimeOut:"+ex.message);
    }
//    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
}
/*******************************************************************
 name:settingChSetDTVTManuSearchStateCallBack
 description:搜台状态变化
 input:state:搜台状态
 output:
 return
 *******************************************************************/
function settingChSetDTVTManuSearchStateCallBack(value){
    try{
        debugPrint("settingDTVTManuScanStateChangeCallBack:state="+value,DebugLevel.ALWAYS);
        var data = settingChSetDTVTManuSetPageData;
        switch (value){
            case 1://complete
                hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetDTVManuPage);
                data.operateData.chScanState = 0;
                if(tv == true){
                    data.operateData.totalNum = model.channelSearch.getFoundDigitServices();
                    data.operateData.frequency = model.channelSearch.getFoundServicesFrequency();
                    data.operateData.bandWidth = model.channelSearch.getBandWidth();
                    debugPrint("settingDTVTManuScanStateChangeCallBack:foundNum="+data.operateData.totalNum,DebugLevel.ALWAYS);
                }
                data.operateData.refreshChannelListFlag = 1;
                refreshChListAftSearchChannel();
                hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                break;
            case 2://searching
                break;
            default :
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                break;
        }
    }catch(ex){
        debugPrint("settingDTVTManuScanStateChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
function getSettingChSetDTVChNumber(){
    var data = settingChSetDTVTManuSetPageData;
    return data.operateData.channelNumber;
}
function setSettingChSetDTVChNumber(channelNumber){
    try{
        var data = settingChSetDTVTManuSetPageData;
        data.operateData.channelNumber = channelNumber;
        if(tv == true){
//            var currChannelNumber = model.channelSearch.getFoundServicesNumber();
//            if(currChannelNumber != channelNumber){
//                debugPrint("setSettingChSetDVBChNumber:currChannelNumber="+currChannelNumber+",channelNumber="+channelNumber,DebugLevel.ERROR);
//            }
            data.operateData.frequency = model.channelSearch.getFoundServicesFrequency();
            data.operateData.bandWidth = model.channelSearch.getBandWidth();
        }
        hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
    }catch (ex){
        debugPrint("setSettingChSetDTVThNumber:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetDTVTManuSearBtnBefUpHandle(){
    var data = settingChSetDTVTManuSetPageData;
    DBG_ALWAYS("settingChSetDTVTManuSearBtnBefUpHandle:"+this.id+","+data.operateData.chScanState);
    if(data.operateData.chScanState == 1){
        //focus current btn
        hiWebOsFrame.ChSetDTVManuPage.hiFocus(this.id);
        return false;
    }
}
/*******************************************************************
 name:settingChSetDTVTManuSetEscHandle
 description:从搜索频道页进入setting
 input:
 output:
 return
 *******************************************************************/
function settingChSetDTVTManuSetEscHandle(){
    try{
        var data = settingChSetDTVTManuSetPageData;
        debugPrint("settingChSetDTVTManuSetEscHandle:chScanState="+data.operateData.chScanState,DebugLevel.ALWAYS);
        if(tv == true && model.channelSearch.getRunning() == 1){
            debugE("settingChSetDTVTManuSetEscHandle:channel is searching!!");
            model.channelSearch.Stop();
        }
        clearInterval(data.operateData.signalInfoTimer);
        if(data.operateData.chScanState == 0){
            hiWebOsFrame.ChSetDTVManuPage.close();
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.settingsFirst.hiFocus();
            hiWebOsFrame.ChSetDTVManuPage.destroy();
        }else{
            hiWebOsFrame.ChSetDTVManuPage.close();
            hiWebOsFrame.settingsFirst.open();
            hiWebOsFrame.settingsFirst.hiFocus();
            hiWebOsFrame.ChSetDTVManuPage.destroy();
        }
    }catch (ex){
        debugPrint("settingChSetDTVTManuSetEscHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetDTVTManuSetPageOnOpen(){
}
function settingChSetDTVTManuPageOnDestroy(){
    hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetDTVManuPage);
    var data = settingChSetDTVTManuSetPageData;
    clearInterval(data.operateData.signalInfoTimer);
    if(data.operateData.refreshChannelListFlag == 0){
        refreshChListAftSearchChannel();
    }
    hiWebOsFrame.ChSetDTVManuPage = null;
    if(tv == true){
        model.channelSearch.onStateChaged = null;
    }
}

