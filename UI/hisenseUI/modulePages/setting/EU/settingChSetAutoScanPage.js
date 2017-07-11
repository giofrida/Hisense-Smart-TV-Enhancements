/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetAutoScanPageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetChannelScanHeadText",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChannelInfo",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoScanTotalTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetAutoScanTotalValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChScanAnalogTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChScanAnalogValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChScanDigitalTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChScanDigitalValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChScanProgressTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetChScanProgressBar",
            "description":"搜台进度",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "settingChSetChScanProgressing",
                    "description": "进度条",
                    "CaEType": "div"
                },
                {
                    "id": "settingChSetChScanProgressPercent",
                    "description": "进度显示文字",
                    "CaEType": "span"
                }
            ],
            "classes":{
                "normal":"settingChSetPerFrame"
            },
            "ProgressBarConfig": {
//                "progressBarId": "settingChSetChScanProgressing",//进度变化的id 不能为空
//                "showTextid": "settingChSetChScanProgressPercent",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调

                PBProcessId: "settingChSetChScanProgressing",//进度条的进程id
                ShowTextId: "settingChSetChScanProgressPercent",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
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
            "id":"settingChSetChScanBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus","disable":"wizardBtnDisable"
            },
            "nav":{
                "leftTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetStopChScan"
            }
        }

    ];
    settingInitChSetAutoScanPage();
    return settingChSetAutoScanPageData;
}
var settingChSetAutoScanPageData={
    "settingChSetChannelScanHeadText":{"Data":"Auto Scan"},
    "settingChSetChannelInfo":{"Data":"Channels Found"},
    "settingChSetAutoScanTotalTitle":{"Data":"Channel Num"},
    "settingChSetAutoScanTotalValue":{"Data":5},
    "settingChSetChScanAnalogTitle":{"Data":"Analog"},
    "settingChSetChScanAnalogValue":{"Data":5},
    "settingChSetChScanDigitalTitle":{"Data":"Digital"},
    "settingChSetChScanDigitalValue":{"Data":5},
    "settingChSetChScanProgressTitle":{"Data":"Progress"},
    "settingChSetChScanProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "settingChSetChScanBtn":{"Data":"Cancel"},
    "operateData":{
        "chScanState":0, //0:正在搜台,1:搜台完成
        "currTunerMode":0,//0:DVBT,1:DVBC,2:DVBS
        "currChNumber":"",
        "currPercent":0,
        "totalChannelNum":0,
        "analogChannelNum":0,
        "digitChannelNum":0,
        "searchTimer":"",
        "refreshChannelListFlag":0,
        "currScanMode":0, //0:DTV,1:ATV,2:DTV+ATV
        "currScanModeNum":0
    },
    "langData":{
        "Auto Scan":["Auto Scan"],
        "Channels Found":["Channels Found"],
        "Channel Num":["Channel Num"],
        "Analog":["Analog"],
        "Digital":["Digital"],
        "Progress":["Progress"],
        "Scanning":["Scanning"],
        "Cancel":["Cancel"],
        "Done":["Done"]
    },
    rewrite:"settingRewriteChSetChScanPage"
}
/*******************************************************************
 name:settingInitChSetAutoScanPage
 description:初始化OperateData
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetAutoScanPage(){
    try{
        debugPrint("---EU--- settingInitChSetAutoScanPage",DebugLevel.ALWAYS);
        var data = settingChSetAutoScanPageData;
        data.operateData.totalChannelNum = 0;
        data.operateData.analogChannelNum = 0;
        data.operateData.digitChannelNum = 0;
        data.operateData.currPercent = 0;
        data.operateData.chScanState = 0;
        data.operateData.refreshChannelListFlag = 0;
        data.operateData.currScanModeNum = 0;
        if(tv == false){
            data.operateData.currTunerMode = 2;
            data.operateData.currScanMode = 2;
        }else{
            data.operateData.currTunerMode = model.channelSearch.getSource();
            debugPrint("settingInitChSetAutoScanPage:"+data.operateData.currTunerMode,DebugLevel.ALWAYS);
            if(data.operateData.currTunerMode == 2){
                data.operateData.currScanMode = 1;//DVBS时只搜索DTV
            }else{
                data.operateData.currScanMode = model.channelSearch.getScanMode();
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetAutoScanPage"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetChScanPage
 description:刷新频道搜索页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetChScanPage(data){
    try{
        var data = settingChSetAutoScanPageData;
        data.settingChSetAutoScanTotalValue.Data = data.operateData.totalChannelNum;
        data.settingChSetChScanAnalogValue.Data = data.operateData.analogChannelNum;
        data.settingChSetChScanDigitalValue.Data = data.operateData.digitChannelNum;
        if(data.operateData.chScanState == 0){
            data.settingChSetChScanBtn.Data = "Cancel";
        }else{
            data.settingChSetChScanBtn.Data = "Done";
        }
        data.settingChSetChScanProgressBar.DefaultValue = data.operateData.currPercent;

    }catch (ex){
        debugPrint("settingRewriteChSetChScanPage:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetStartChScan
 description:页面创建后启动搜索
 input:
 output:
 return
 *******************************************************************/
function settingChSetStartChScan(){
    try{

        var data = settingChSetAutoScanPageData;
        if(tv == false){
            data.operateData.searchTimer = setInterval(testProgressBar,100);
        }
        else{
            debugPrint("settingChSetStartChScan:start scan!currScanMode="+data.operateData.currScanMode,DebugLevel.ALWAYS);
            if(data.operateData.currScanMode == 1 || data.operateData.currScanMode == 2){ //DTV或者ATV+DTV
                model.channelSearch.Start(0);//dtv
            }else{
                model.channelSearch.Start(1);//atv
            }
            data.operateData.currScanModeNum = data.operateData.currScanModeNum + 1;
            debugPrint("settingChSetStartChScan:currScanMode="+data.operateData.currScanMode+",currScanModeNum="+data.operateData.currScanModeNum,DebugLevel.ERROR);
        }
    }catch (ex){
        debugPrint("settingChSetStartChScan: "+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:testProgressBar
 description:测试电脑方式搜台进度
 input:method:
 output:
 return
 *******************************************************************/
function testProgressBar(){
    var data = settingChSetAutoScanPageData;
    data.operateData.analogChannelNum = data.operateData.analogChannelNum+1;
    data.operateData.digitChannelNum = data.operateData.digitChannelNum+2;
    data.operateData.currPercent += 1;
    if(data.operateData.currPercent >= 100){
        data.operateData.chScanState = 1;
        settingChSetAutoCreateDVBTAreaList();
        clearInterval(data.operateData.searchTimer);
    }
    hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();

}
/*******************************************************************
 name:settingChSetStopChScan
 description:停止搜索
 input:
 output:
 return
 *******************************************************************/
function settingChSetStopChScan(){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChSetStopChScan:chScanState="+data.operateData.chScanState,DebugLevel.ALWAYS);
        if(tv == false){
            if(data.operateData.chScanState == 0){
                clearInterval(data.operateData.searchTimer);
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                settingChSetAutoCreateDVBTAreaList();
            }else{
                settingChSetChScanToSettingPage();
            }
        }else{
            if(data.operateData.chScanState == 0){
                debugPrint("settingChSetStopChScan stop!!!!!!!!!!!!!!!",DebugLevel.ALWAYS);
                //正在搜索,取消搜索
                model.channelSearch.Stop();
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                DBG_INFO("settingChSetStopChScan:"+data.operateData.currTunerMode+","+hiWebOsFrame.getCurrentCountry());
                if(data.operateData.currTunerMode == 0 && hiWebOsFrame.getCurrentCountry() == "UK"){
                    var currAreaListInfo = model.channelSearch.getUkArea();
                    DBG_ALWAYS("settingChScanStateChangeCallBack:currAreaListInfo="+currAreaListInfo);
                    if(currAreaListInfo.length > 0){
                        settingChSetAutoCreateDVBTAreaList();
                    }
                }
            }else{
                if(model.channelSearch.getRunning() == 1){
                    debugPrint("settingChSetStopChScan:not stoped,error!",DebugLevel.ERROR);
                    model.channelSearch.Stop();
                }
                if(this.page.origin.module == "livetv"){
                    debugPrint("wizardChScanStopScan:origin page is blankPage",DebugLevel.ALWAYS);
                    //返回到blankPage页面
                    settingChSetChScanToBlankPage();
                }else{
                    //返回到setting页面
                    settingChSetChScanToSettingPage();
                }
            }
        }

    }catch (ex){
        debugPrint("settingChSetStopChScan"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetChScanToSettingPage
 description:从搜索频道页进入setting
 input:
 output:
 return
 *******************************************************************/
function settingChSetChScanToSettingPage(){
    try{
        hiWebOsFrame.ChSetChannelScanPage.close();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.ChSetChannelScanPage.destroy();
    }catch (ex){
        debugPrint("settingChSetChScanToSettingPage:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetChScanToBlankPage(){
    try{
        hiWebOsFrame.ChSetChannelScanPage.close();
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        hiWebOsFrame.ChSetChannelScanPage.destroy();
    }catch (ex){
        debugPrint("settingChSetChScanToBlankPage:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChScanProgressChangeCallBack
 description:监控搜台状态
 input:state:当前搜台状态
 output:
 return
 *******************************************************************/
function settingChScanProgressChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanProgressChangeCallBack:"+"percent:"+value+",currScanMode="+data.operateData.currScanMode+",currScanModeNum="+data.operateData.currScanModeNum,DebugLevel.ALWAYS);
        if(data.operateData.currScanMode == 2 && data.operateData.currScanModeNum == 1){
            data.operateData.currPercent = value/2;
        }else if(data.operateData.currScanMode == 2 && data.operateData.currScanModeNum == 2){
            data.operateData.currPercent = 50 + value/2;
        }else{
            data.operateData.currPercent = value;
        }
//        data.operateData.currPercent = value;
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
        
    }catch(ex){
        debugPrint("settingChScanProgressChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChScanDigitServicesChangeCallBack
 description:监控数字台变化
 input:state:当前搜索到的数字信号的个数
 output:
 return
 *******************************************************************/
function settingChScanDigitServicesChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanDigitServicesChangeCallBack:digitChannelNum="+value);
        data.operateData.digitChannelNum = value;
        data.operateData.totalChannelNum = data.operateData.analogChannelNum+data.operateData.digitChannelNum;
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
    }catch(ex){
        debugPrint("settingChScanDigitServicesChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChScanAnalogServicesChangeCallBack
 description:监控模拟型号变化
 input:state:当前搜索到的模拟信号的个数
 output:
 return
 *******************************************************************/
function settingChScanAnalogServicesChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanAnalogServicesChangeCallBack:analogChannelNum="+value);
        data.operateData.analogChannelNum = value;
        data.operateData.totalChannelNum = data.operateData.analogChannelNum+data.operateData.digitChannelNum;
        hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
    }catch(ex){
        debugPrint("settingChScanAnalogServicesChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChScanStateChangeCallBack
 description:搜台状态变化
 input:state:搜台状态
 output:
 return
 *******************************************************************/
function settingChScanStateChangeCallBack(value){
    try{
        var data = settingChSetAutoScanPageData;
        debugPrint("settingChScanStateChangeCallBack:"+value+","+data.operateData.currScanMode+","+data.operateData.currScanModeNum,DebugLevel.ALWAYS);
        switch (value){
            case 1://complete
                if(data.operateData.currScanMode == 2 && data.operateData.currScanModeNum < 2){
                    model.channelSearch.Start(1);
                    data.operateData.currScanModeNum = data.operateData.currScanModeNum + 1;
                }else{
                    data.operateData.chScanState = 1;
                    model.channelSearch.onProgressChaged = null;
                    hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                    DBG_ALWAYS("settingChScanStateChangeCallBack:"+data.operateData.currTunerMode+","+hiWebOsFrame.getCurrentCountry());
                    if(data.operateData.currTunerMode == 0 && hiWebOsFrame.getCurrentCountry() == "UK"){
                        var currAreaListInfo = model.channelSearch.getUkArea();
                        DBG_ALWAYS("settingChScanStateChangeCallBack:"+currAreaListInfo);
                        if(currAreaListInfo.length > 0){
                            settingChSetAutoCreateDVBTAreaList();
                        }
                    }else{
                        data.operateData.refreshChannelListFlag = 1;
                        refreshChListAftSearchChannel();
                    }
                }

                break;
            case 2://searching
                break;
            case 4://cancel
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                break;
            default :
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetChannelScanPage.rewriteDataOnly();
                break;
        }
    }catch(ex){
        debugPrint("settingChScanStateChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetAutoCreateDVBTAreaList(){
    hiWebOsFrame.createPage("settingChSetDVBTUKAreaListDialogId",null,hiWebOsFrame.ChSetChannelScanPage,null,function(a){
        hiWebOsFrame.ChSetDVBTUKAreaListDialog = a;
        a.open();
        a.hiFocus();
    })
}
function settingChSetAutoCreateDVBTAreaList(){
    hiWebOsFrame.createPage("settingChSetDVBTLCNListDialogId",null,hiWebOsFrame.ChSetChannelScanPage,null,function(a){
        hiWebOsFrame.ChSetDVBTLCNListDialog = a;
        a.open();
        a.hiFocus();
    })
}
function settingChSetAutoScanPageOnOpen(){
    try{
        var data = settingChSetAutoScanPageData;
        if(data.operateData.currTunerMode == 2){//DVBS
            $("#settingChSetChScanAnalogTitle").parent().css("display","none");
        }
        if(tv == true){
            if(model.channelSearch.getRunning() == 1){
                debugE("settingChSetChScanPageOnOpen:channel is searching!!");
                model.channelSearch.Stop();
            }
            var currSource = model.source.getCurrentSource();
            DBG_ALWAYS("settingChSetAutoScanPageOnOpen:currSource="+currSource);
//            model.source.InputSet(0);
            if(currSource != 0){
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
            model.channelSearch.onProgressChaged = settingChScanProgressChangeCallBack;
            model.channelSearch.onFoundDigitServicesChaged = settingChScanDigitServicesChangeCallBack;
            model.channelSearch.onFoundAnalogServicesChaged = settingChScanAnalogServicesChangeCallBack;
            model.channelSearch.onStateChaged = settingChScanStateChangeCallBack;
        }
        settingChSetStartChScan();
    }catch (ex){
        debugPrint("settingChSetAutoScanPageOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetAutoScanPageOnDestroy(){
    try{
        if(tv == true){
            model.channelSearch.onProgressChaged = null;
            model.channelSearch.onFoundDigitServicesChaged = null;
            model.channelSearch.onFoundAnalogServicesChaged = null;
            model.channelSearch.onStateChaged = null;
        }
        var data = settingChSetAutoScanPageData;
        if(data.operateData.refreshChannelListFlag == 0){
            refreshChListAftSearchChannel();
        }
        hiWebOsFrame.ChSetChannelScanPage = null;
    }catch (ex){
        debugPrint("settingChSetAutoScanPageOnDestroy:"+ex.message,DebugLevel.ERROR);
    }

}

