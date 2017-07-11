/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDTVCManuSetPageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetDTVCManuHeadImg",
            "description":"",
            "CaEType":"img"
        },
        {
            "id":"settingChSetDTVCManuSetHeadText",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuFreTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuFreInput",
            "description":"",
            "CaEType":"input",
            "inputAttr":"number",
            "maxlength":6,
            "classes":{
                "normal":"settingNumberInputNormal","focus":"settingNumberInputFocus","disable":"settingNumberInputDisable"
            },
            "onFocusFun":"settingChSetDTVClearInputNumber",
            "nav":{
                "downTo":"settingChSetDTVCManuScanBtn"
            },
            "handler":{
                "aftEnterHandler":"invokeSKB",
                "befLeftHandler":"settingChSetDTVCManuSetEscHandle"
            }
        },
        {
            "id":"settingChSetDTVCManuSRTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuSRValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuQAMTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuQAMValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuSigQTitle",
            "description":"信号质量标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuSigQProgressBar",
            "description":"",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetDTVCManuSigQCont",
                    "description": "进度条",
                    "CaEType": "div"
                },
                {
                    "id": "settingChSetDTVCManuSigQValue",
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
                PBProcessId: "settingChSetDTVCManuSigQCont",//进度条的进程id
                ShowTextId: "settingChSetDTVCManuSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
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
            "id":"settingChSetDTVCManuSigLTitle",
            "description":"信号水平标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuSigLProgressBar",
            "description":"信号水平",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetDTVCManuSigLCont",
                    "description": "进度条",
                    "CaEType": "div"
                },
                {
                    "id": "settingChSetDTVCManuSigLValue",
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
                PBProcessId: "settingChSetDTVCManuSigLCont",//进度条的进程id
                ShowTextId: "settingChSetDTVCManuSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
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
            "id":"settingChSetDTVCManuSearchNumTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuSearchNumValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDTVCManuScanBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus","disable":"wizardBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetDTVCManuFreInput"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDTVCManuStartScan",
                "befUpHandler":"settingChSetDTVCManuSearBtnBefUpHandle"
            }
        }

    ];
    settingInitChSetDTVCManuSetPage();
    return settingChSetDTVCManuSetPageData;
}
var settingChSetDTVCManuSetPageData={
    "settingChSetDTVCManuHeadImg":{"Data":"img/head_arrow.png"},
    "settingChSetDTVCManuSetHeadText":{"Data":"DTV Manual Scan"},
    "settingChSetDTVCManuFreTitle":{"Data":"Frequency"},
    "settingChSetDTVCManuFreInput":{"Data":""},
    "settingChSetDTVCManuSRTitle":{"Data":"Symbol rate"},
    "settingChSetDTVCManuSRValue":{"Data":""},
    "settingChSetDTVCManuQAMTitle":{"Data":"QAM modulating"},
    "settingChSetDTVCManuQAMValue":{"Data":""},

    "settingChSetDTVCManuSigQTitle":{"Data":"Signal Quality"},
    "settingChSetDTVCManuSigQProgressBar":{
        "Data":{},
        "DefaultValue":80
    },
    "settingChSetDTVCManuSigLTitle":{"Data":"Signal Level"},
    "settingChSetDTVCManuSigLProgressBar":{
        "Data":{},
        "DefaultValue":80
    },
    "settingChSetDTVCManuSearchNumTitle":{"Data":"Channels Found"},
    "settingChSetDTVCManuSearchNumValue":{"Data":""},
    "settingChSetDTVCManuScanBtn":{"Data":"Start"},
    "operateData":{
        "chScanState":0, //0:设置,1:搜索
        "totalChannels":0,
        "channelNumber":0,
        "frequency":0,
        "QAM":0,
        "SR":0,
        "searchTimer":0,
        "sigQualityValue":80,
        "sigLevelValue":80,
        "refreshChannelListFlag":0,
        "signalInfoTimer":0
    },
    "langData":{
        "DTV Manual Scan":["DTV Manual Scan"],
        "Frequency":["Frequency"],
        "Symbol rate":["Symbol rate"],
        "QAM modulating":["QAM modulating"],
        "Signal Quality":["Signal Quality"],
        "Signal Level":["Signal Level"],
        "Channels Found":["Channels Found"],
        "Bandwidth":["Bandwidth"],
        "Start":["Start"]
    },
    rewrite:"settingRewriteChSetDTVCManuSetPage"
}
/*******************************************************************
 name:settingInitChSetDTVCManuSetPage
 description:初始化
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDTVCManuSetPage(){
    try{
        var data = settingChSetDTVCManuSetPageData;
        data.operateData.chScanState = 0;
        data.operateData.totalChannels = 0;
        data.operateData.frequency = "";
        data.operateData.sigQualityValue =   0;
        data.operateData.sigLevelValue =  0;
        data.operateData.QAM = "";
        data.operateData.SR = "";
        data.operateData.refreshChannelListFlag = 0;
        if(tv == true){
            data.operateData.frequency = model.channelSearch.getFoundServicesFrequency();
            data.operateData.QAM = model.channelSearch.getFoundServicesQam();
            data.operateData.SR = model.channelSearch.getFoundServicesSymbolrate();
            data.operateData.sigQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
            data.operateData.sigLevelValue = model.tvservice.getSignalMainLevels();
            debugPrint("settingInitChSetDTVCManuSetPage:"+data.operateData.frequency,DebugLevel.ALWAYS);
            debugPrint("settingInitChSetDTVCManuSetPage:"+data.operateData.QAM,DebugLevel.ALWAYS);
            debugPrint("settingInitChSetDTVCManuSetPage:"+data.operateData.SR,DebugLevel.ALWAYS);

        }
        data.operateData.signalInfoTimer = setInterval(settingChSetDTVCManuSignalInfoTimeOut,2000);
    }catch (ex){
        debugPrint("settingInitChSetDTVCManuSetPage"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDTVCManuSetPage
 description:刷新频道搜索页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDTVCManuSetPage(data){
    try{
        var data = settingChSetDTVCManuSetPageData;
        if(hiWebOsFrame.getHTMLDir() == "ltr"){
            data.settingChSetDTVCManuHeadImg.Data = "img/head_arrow.png";
        }else{
            data.settingChSetDTVCManuHeadImg.Data = "img/head_arrow_right.png"
        }
        data.settingChSetDTVCManuFreInput.Data = data.operateData.frequency;
        data.settingChSetDTVCManuQAMValue.Data = data.operateData.QAM;
        data.settingChSetDTVCManuSRValue.Data = data.operateData.SR;
        data.settingChSetDTVCManuSigQProgressBar.DefaultValue = data.operateData.sigQualityValue;
        data.settingChSetDTVCManuSigLProgressBar.DefaultValue = data.operateData.sigLevelValue;
        data.settingChSetDTVCManuSearchNumValue.Data = data.operateData.totalChannels;
        if(data.operateData.chScanState == 0){
            data.settingChSetDTVCManuFreInput.disable = false;
            data.settingChSetDTVCManuScanBtn.disable = false;
        }else{
            data.settingChSetDTVCManuFreInput.disable = true;
            data.settingChSetDTVCManuScanBtn.disable = true;
        }
    }catch (ex){
        debugPrint("settingRewriteChSetDTVCManuSetPage:"+ex.message,DebugLevel.ERROR);
    }
}
function getChSetDTVCManuSignalInfo(){
    var data = settingChSetDTVCManuSetPageData;
    if(tv == false){
        data.operateData.sigQualityValue = data.operateData.sigQualityValue-1;
        data.operateData.sigLevelValue = data.operateData.sigLevelValue - 1;
    }else{
        data.operateData.sigQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
        data.operateData.sigLevelValue = model.tvservice.getSignalMainLevels();
    }
}
function settingChSetDTVCManuSignalInfoTimeOut(){
    try{
        getChSetDTVCManuSignalInfo();
        var data = settingChSetDTVCManuSetPageData;
        var levelId = "settingChSetDTVCManuSigLProgressBar";
        var qualityId = "settingChSetDTVCManuSigQProgressBar";
        //更新Level进度条
        var _this = hiWebOsFrame.ChSetDTVManuPage.getCaE(levelId);
        _this.running_value = data.operateData.sigLevelValue;
        _this.setvalue(_this.running_value);

        //更新Quality进度条
        var _this = hiWebOsFrame.ChSetDTVManuPage.getCaE(qualityId);
        _this.running_value =  data.operateData.sigQualityValue;
        _this.setvalue(_this.running_value);
    }catch (ex){
        debugE("settingChSetDTVCManuSignalInfoTimeOut:"+ex.message);
    }
//    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
}
function settingChSetDTVClearInputNumber(){
    debugPrint("settingChSetDTVClearInputNumber:id="+this.id);
//    $("#"+this.id).val("");
}
/*******************************************************************
 name:settingChSetDTVCManuStartScan
 description:开始手动搜索DTV
 input:
 output:
 return
 *******************************************************************/
function settingChSetDTVCManuStartScan(){
    try{
        var inputFreq = $("#settingChSetDTVCManuFreInput").val();
        debugPrint("settingChSetDTVCManuStartScan:"+inputFreq,DebugLevel.ALWAYS);
        if(!inputFreq){
            hiWebOsFrame.ChSetDTVManuPage.hiFocus("settingChSetDTVCManuFreInput");
        }else{
            var data = settingChSetDTVCManuSetPageData;
            data.operateData.frequency = inputFreq;
            data.operateData.chScanState = 1;
            hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
            if(tv == false){
                data.operateData.searchTimer = setTimeout(settingChSetDTVCManuTestSearch,5000);
            }
            else{
                pauseHBBTV();
                hiWebOsFrame.pushProtectPages(hiWebOsFrame.ChSetDTVManuPage);
                model.channelSearch.setFoundServicesFrequency(parseInt(inputFreq));
                var currSource = model.source.getCurrentSource();
                if(currSource != 0){
                    debugE("settingChSetDTVCManuStartScan:currSource="+currSource);
                    model.source.InputSet(0);
                }
                var temp=model.source.getInputName();
                debugPrint("settingChSetAutoScanPageOnOpen:temp"+temp,DebugLevel.ERROR);
                if(temp[3]==1)//判断 tv 通道加锁，搜台前暂时解锁，不设置底层EPPROM
                {
                    model.source.unlockInput(0);
                    livetvmain.setUnlockFlag(true);
                }
                model.channelSearch.ManualStart(0);
            }
        }
    }catch (ex){
        debugPrint("settingChSetDTVCManuStartScan: "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDTVCManuTestSearch
 description:测试电脑方式搜台进度
 input:method:
 output:
 return
 *******************************************************************/
function settingChSetDTVCManuTestSearch(){
    var data = settingChSetDTVCManuSetPageData;
    data.operateData.chScanState = 0;
    data.operateData.totalChannels = 2;
    data.operateData.frequency = 1000;
    data.operateData.QAM = 16;
    data.operateData.SR = 2200;
    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
}

/*******************************************************************
 name:settingChSetDTVCManuSearchStateCallBack
 description:搜台状态变化
 input:state:搜台状态
 output:
 return
 *******************************************************************/
function settingChSetDTVCManuSearchStateCallBack(value){
    try{
        debugPrint("settingDTVCManuScanStateChangeCallBack:="+value,DebugLevel.ALWAYS);
        var data = settingChSetDTVCManuSetPageData;
        switch (value){
            case 1://complete
                hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetDTVManuPage);
                data.operateData.chScanState = 0;
                data.operateData.totalChannels = model.channelSearch.getFoundDigitServices();
                if(data.operateData.totalChannels > 0){
                    data.operateData.frequency = model.channelSearch.getFoundServicesFrequency();
                    data.operateData.QAM = model.channelSearch.getFoundServicesQam();
                    data.operateData.SR = model.channelSearch.getFoundServicesSymbolrate();
                }
                debugPrint("settingChSetDTVCManuSearchStateCallBack:totalChannels="+data.operateData.totalChannels,DebugLevel.ALWAYS);
                data.operateData.refreshChannelListFlag = 1;
                refreshChListAftSearchChannel();
                hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                break;
            case 2:
                break;
            default :
                data.operateData.chScanState = 0;
                data.operateData.totalChannels = 0;
                hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                break;
        }
    }catch(ex){
        debugPrint("settingDTVCManuScanStateChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetDTVCManuSearBtnBefUpHandle(){
    var data = settingChSetDTVCManuSetPageData;
    DBG_ALWAYS("settingChSetDTVCManuSearBtnBefUpHandle:"+this.id+","+data.operateData.chScanState);
    if(data.operateData.chScanState == 1){
        //focus current btn
        hiWebOsFrame.ChSetDTVManuPage.hiFocus(this.id);
        return false;
    }
}
/*******************************************************************
 name:settingChSetDTVCManuSetEscHandle
 description:从搜索频道页进入setting
 input:
 output:
 return
 *******************************************************************/
function settingChSetDTVCManuSetEscHandle(){
    try{
        var data = settingChSetDTVCManuSetPageData;
        debugPrint("settingChSetDTVCManuSetEscHandle:chScanState="+data.operateData.chScanState,DebugLevel.ALWAYS);
        if(tv == true && model.channelSearch.getRunning() == 1){
            debugE("settingChSetDTVCManuSetEscHandle:channel is searching!!");
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
        debugPrint("settingChSetDTVCManuSetEscHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetDTVCManuSetPageOnOpen(){
    if(tv == true){
        model.channelSearch.onStateChaged = settingChSetDTVCManuSearchStateCallBack;
    }
}
function settingChSetDTVCManuPageOnDestroy(){
    try{
        var data = settingChSetDTVCManuSetPageData;
        hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetDTVManuPage);
        hiWebOsFrame.ChSetDTVManuPage = null;
        clearInterval(data.operateData.signalInfoTimer);
        if(data.operateData.refreshChannelListFlag == 0){
            refreshChListAftSearchChannel();
        }
        if(tv == true){
            model.channelSearch.onStateChaged = null;
        }
    }catch (ex){
        debugE("settingChSetDTVCManuPageOnDestroy:"+ex.message);
    }
}

