/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetATVManuSetPageData(opt){
    opt.CaE =[
        {
            "id":"settingChSetATVManuHeadImg",
            "description":"",
            "CaEType":"img"
        },
        {
            "id":"settingChSetATVManuSetHeadText",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingChSetATVManuFreqTitle",
            "description":"",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetATVManuFreqInput",
            "description":"",
            "CaEType":"input",
            "inputAttr":"number",
            "maxlength":6,
            "classes":{
                "normal":"settingNumberInputNormal","focus":"settingNumberInputFocus","disable":"settingNumberInputDisable"
            },
            "nav":{
                "downTo":"settingChSetATVManuColorSysTypeBtn","upTo":""
            },
            "handler":{
                "aftEnterHandler":"invokeSKB",
                "befDownHandler":"setSettingChSetATVFre",
                "befLeftHandler":"settingChSetATVManuSetPageEscHandle"
            },
            "onChange":"settingChSetATVManuIntInputOnChange"
        },
        {
            "id":"settingChSetATVManuColorSysTypeTitle",
            "description":"",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetATVManuColorSysTypeValue",
            "description":"",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetATVManuColorSysTypeBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardAdjustBtnNormal","focus":"wizardAdjustBtnFocus","disable":"wizardAdjustBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetATVManuFreqInput","downTo":"settingChSetATVManuSoundSysTypeBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetATVCreateColorSysList",
                "befLeftHandler":"settingChSetATVManuSetPageEscHandle"
            }
        },
        {
            "id":"settingChSetATVManuSoundSysTypeTitle",
            "description":"",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingChSetATVManuSoundSysTypeValue",
            "description":"",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingChSetATVManuSoundSysTypeBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardAdjustBtnNormal","focus":"wizardAdjustBtnFocus","disable":"wizardAdjustBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetATVManuColorSysTypeBtn","downTo":"settingChSetATVManuScanBtn","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingChSetATVCreateSoundSysList",
                "befLeftHandler":"settingChSetATVManuSetPageEscHandle"
            }
        },
        {
            "id":"settingChSetATVManuScanBtn",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus","disable":"wizardBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetATVManuSoundSysTypeBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetATVManuStartScan",
                "befUpHandler":"settingChSetATVManuSearBtnBefUpHandle"
            }
        }

    ];
    settingInitChSetATVManuSetPage();
    return settingChSetATVManuSetData;
}
var settingChSetATVManuSetData={
    "settingChSetATVManuHeadImg":{"Data":"img/head_arrow.png"},
    "settingChSetATVManuSetHeadText":{"Data":"ATV Manual Scan"},
    "settingChSetATVManuFreqTitle":{"Data":"Frequency"},
    "settingChSetATVManuFreqInput":{"Data":""},
    "settingChSetATVManuColorSysTypeTitle":{"Data":"Picture system"},
    "settingChSetATVManuColorSysTypeValue":{"Data":"L"},
    "settingChSetATVManuColorSysTypeBtn":{"Data":"Adjust"},
    "settingChSetATVManuSoundSysTypeTitle":{"Data":"Sound system"},
    "settingChSetATVManuSoundSysTypeValue":{"Data":"L"},
    "settingChSetATVManuSoundSysTypeBtn":{"Data":"Adjust"},
    "settingChSetATVManuScanBtn":{"Data":"Start"},
    "operateData":{
        "chScanState":0, //0:设置,1:搜索
        "colorSysIdx":0,
        "colorSysMapList":[
            {
                "map":0,
                "name":"Auto"
            },
            {
                "map":1,
                "name":"SECAM"
            },
            {
                "map":2,
                "name":"PAL"
            },
            {
                "map":3,
                "name":"NTSC"
            }
        ],
        "soundSysIdx":0,
        "soundSysMapList":[
            {
                "map":0,
                "name":"B/G"
            },
            {
                "map":1,
                "name":"D/K"
            },
            {
                "map":2,
                "name":"L"
            },
            {
                "map":3,
                "name":"L'"
            },
            {
                "map":4,
                "name":"M"
            },
            {
                "map":5,
                "name":"I"
            }
        ],
        "frequency":"",
        "searchTimer":0,
        "refreshChannelListFlag":0
    },
    "langData":{
        "ATV Manual Scan":["ATV Manual Scan"],
        "Auto":["Auto"],
        "Frequency":["Frequency"],
        "Picture system":["Picture system"],
        "Sound system":["Sound system"],
        "Adjust":["Adjust"],
        "Start":["Start"]
    },
    rewrite:"settingRewriteChSetATVManuSetPage"
}
/*******************************************************************
 name:settingInitChSetATVManuSetPage
 description:初始化
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetATVManuSetPage(){
    try{
        var data = settingChSetATVManuSetData;
        data.operateData.channelNumber = "";
        data.operateData.frequency = 0;
        data.operateData.chScanState = 0;
        data.operateData.refreshChannelListFlag = 0;
        if(hiWebOsFrame.getCurrentArea() == "SA"){
            data.operateData.colorSysMapList=[
                {
                    "map":0,
                    "name":"Auto"
                },
                {
                    "map":1,
                    "name":"NTSC"
                },
                {
                    "map":2,
                    "name":"PAL M"
                },
                {
                    "map":3,
                    "name":"PAL N"
                }
            ];
            data.operateData.soundSysMapList=[
                {
                    "map":0,
                    "name":"B/G"
                },
                {
                    "map":1,
                    "name":"D/K"
                },
                {
                    "map":2,
                    "name":"L"
                },
                {
                    "map":3,
                    "name":"L'"
                }
            ]
        }
        if(tv == false){
            data.operateData.colorSysIdx = 0;
            data.operateData.soundSysIdx = 0;
        }else{
            data.operateData.frequency = model.channelSearch.getFoundServicesFrequency();
            var currColorSys = model.channelSearch.getColorSystem();
            for(var i = 0; i < data.operateData.colorSysMapList.length; i++){
                if(currColorSys == data.operateData.colorSysMapList[i].map){
                    data.operateData.colorSysIdx = i;
                    break;
                }
            }
            if(i == data.operateData.colorSysMapList.length){
                debugPrint("settingInitChSetATVManuSetPage:currColorSys="+currColorSys,DebugLevel.ERROR);
                data.operateData.colorSysIdx = 0;
                model.channelSearch.setColorSystem(data.operateData.colorSysMapList[0].map);
            }

            var currSoundSys = model.channelSearch.getSoundSystem();
            for(i = 0; i < data.operateData.soundSysMapList.length; i++){
                if(currSoundSys == data.operateData.soundSysMapList[i].map){
                    data.operateData.soundSysIdx = i;
                    break;
                }
            }
            if(i == data.operateData.soundSysMapList.length){
                debugPrint("settingInitChSetATVManuSetPage:currSoundSys="+currSoundSys,DebugLevel.ERROR);
                data.operateData.currSoundSys = 0;
                model.channelSearch.setSoundSystem(data.operateData.soundSysMapList[0].map);
            }
        }
    }catch (ex){
        debugPrint("settingInitChSetATVManuSetPage"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetATVManuSetPage
 description:刷新频道搜索页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetATVManuSetPage(data){
    try{
        var data = settingChSetATVManuSetData;
        if(hiWebOsFrame.getHTMLDir() == "ltr"){
            data.settingChSetATVManuHeadImg.Data = "img/head_arrow.png";
        }else{
            data.settingChSetATVManuHeadImg.Data = "img/head_arrow_right.png"
        }
        data.settingChSetATVManuFreqInput.Data = data.operateData.frequency;
        data.settingChSetATVManuColorSysTypeValue.Data = data.operateData.colorSysMapList[data.operateData.colorSysIdx].name;
        data.settingChSetATVManuSoundSysTypeValue.Data = data.operateData.soundSysMapList[data.operateData.soundSysIdx].name;
        data.settingChSetATVManuScanBtn.Data = "Start";
        if(data.operateData.chScanState == 0){
            data.settingChSetATVManuFreqInput.disable = false;
            data.settingChSetATVManuColorSysTypeBtn.disable = false;
            data.settingChSetATVManuSoundSysTypeBtn.disable = false;
            data.settingChSetATVManuScanBtn.disable = false;
        }else{
            data.settingChSetATVManuFreqInput.disable = true;
            data.settingChSetATVManuColorSysTypeBtn.disable = true;
            data.settingChSetATVManuSoundSysTypeBtn.disable = true;
            data.settingChSetATVManuScanBtn.disable = true;
        }
    }catch (ex){
        debugPrint("settingRewriteChSetATVManuSetPage:"+ex.message,DebugLevel.ERROR);
    }
}
function setSettingChSetATVFre(){
    try{
        var data = settingChSetATVManuSetData;
        var inputFrequency = $("#settingChSetATVManuFreqInput").val();
        data.operateData.frequency = inputFrequency;
        debugPrint("setSettingChSetATVFre:inputFrequency="+inputFrequency,DebugLevel.ALWAYS);
        if(inputFrequency.length > 0){
            model.channelSearch.onFoundServicesFrequencyChaged = settingChSetATVFreChangeCallBack;
            model.channelSearch.setFoundServicesFrequency(parseInt(inputFrequency));
        }
    }catch (ex){
        debugPrint("setSettingChSetATVFre:"+ex.message,DebugLevel.ALWAYS);
    }

}
function settingChSetATVFreChangeCallBack(value){
    try{
        debugPrint("settingChSetATVFreChangeCallBack:currFrequency="+value,DebugLevel.ALWAYS);
        var data = settingChSetATVManuSetData;
//        var currColorSys = model.channelSearch.getColorSystem();
//        var currSoundSys = model.channelSearch.getSoundSystem();
        data.operateData.frequency = value;
//        debugPrint("settingChSetATVFreChangeCallBack:"+currColorSys+","+currSoundSys,DebugLevel.ALWAYS);
//        for(var i = 0; i < data.operateData.colorSysMapList.length; i++){
//            if(currColorSys == data.operateData.colorSysMapList[i].map){
//                data.operateData.colorSysIdx = i;
//                break;
//            }
//        }
//        if(i == data.operateData.colorSysMapList.length){
//            debugPrint("settingChSetATVFreChangeCallBack:currColorSys="+currColorSys,DebugLevel.ERROR);
//            data.operateData.colorSysIdx = 0;
//            model.channelSearch.setColorSystem(data.operateData.colorSysMapList[0].map);
//        }
//
//        var currSoundSys = model.channelSearch.getSoundSystem();
//        for(i = 0; i < data.operateData.soundSysMapList.length; i++){
//            if(currSoundSys == data.operateData.soundSysMapList[i].map){
//                data.operateData.soundSysIdx = i;
//                break;
//            }
//        }
//        if(i == data.operateData.soundSysMapList.length){
//            debugPrint("settingChSetATVFreChangeCallBack:currSoundSys="+currSoundSys,DebugLevel.ERROR);
//            data.operateData.currSoundSys = 0;
//            model.channelSearch.setSoundSystem(data.operateData.soundSysMapList[0].map);
//        }
        hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingChSetATVFreChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetATVManuIntInputOnChange(){
    debugPrint("settingChSetATVManuIntInputOnChange:"+this.id,DebugLevel.ALWAYS);
    var inputValue = $("#"+this.id).val();
    if(!!inputValue){
        $("#"+this.id).val(parseInt(inputValue));
    }
}
function getSettingChSetATVColorSysList(){
    var data = settingChSetATVManuSetData;
    return data.operateData.colorSysMapList;
}
function getSettingChSetATVCurrColorSys(){
    var data = settingChSetATVManuSetData;
    return data.operateData.colorSysIdx;
}
function setSettingChSetATVCurrColorSys(idx){
    var data = settingChSetATVManuSetData;
    data.operateData.colorSysIdx = idx;
    if(tv == true){
        model.channelSearch.setColorSystem(data.operateData.colorSysMapList[idx].map);
    }
    hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
}
function settingChSetATVCurrColorSysCallBack(value){
    try{
        debugPrint("settingChSetATVCurrColorSysCallBack:CurrColorSys="+value,DebugLevel.ALWAYS);
        var data = settingChSetATVManuSetData;
//        var currSoundSys = model.channelSearch.getSoundSystem();
        for(var i = 0; i < data.operateData.colorSysMapList.length; i++){
            if(value == data.operateData.colorSysMapList[i].map){
                data.operateData.colorSysIdx = i;
                break;
            }
        }
        if(i == data.operateData.colorSysMapList.length){
            debugPrint("settingChSetATVFreChangeCallBack:currColorSys="+value,DebugLevel.ERROR);
            data.operateData.colorSysIdx = 0;
            model.channelSearch.setColorSystem(data.operateData.colorSysMapList[0].map);
        }
        hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingChSetATVCurrColorSysCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
function getSettingChSetATVSoundSysList(){
    var data = settingChSetATVManuSetData;
    return data.operateData.soundSysMapList;
}
function getSettingChSetATVCurrSoundSys(){
    var data = settingChSetATVManuSetData;
    return data.operateData.soundSysIdx;
}
function setSettingChSetATVCurrSoundSys(idx){
    var data = settingChSetATVManuSetData;
    data.operateData.soundSysIdx = idx;
    if(tv == true){
        model.channelSearch.setSoundSystem(data.operateData.soundSysMapList[idx].map);
    }
    hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
}
function settingChSetATVCurrSoundSysCallBack(value){
    try{
        debugPrint("settingChSetATVCurrSoundSysCallBack:CurrSoundSys="+value,DebugLevel.ALWAYS);
        var data = settingChSetATVManuSetData;
//        var currSoundSys = model.channelSearch.getSoundSystem();
        for(i = 0; i < data.operateData.soundSysMapList.length; i++){
            if(value == data.operateData.soundSysMapList[i].map){
                data.operateData.soundSysIdx = i;
                break;
            }
        }
        if(i == data.operateData.soundSysMapList.length){
            debugPrint("settingChSetATVFreChangeCallBack:currSoundSys="+value,DebugLevel.ERROR);
            data.operateData.currSoundSys = 0;
            model.channelSearch.setSoundSystem(data.operateData.soundSysMapList[0].map);
        }
        hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
    }catch (ex){
        debugPrint("settingChSetATVCurrSoundSysCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetATVManuStartScan
 description:开始手动搜索ATV
 input:
 output:
 return
 *******************************************************************/
function settingChSetATVManuStartScan(){
    try{

        var data = settingChSetATVManuSetData;
        if(data.operateData.chScanState == 0){
            data.operateData.chScanState = 1;
            hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
            if(tv == false){
                data.operateData.searchTimer = setTimeout(settingChSetATVManuTestSearch,5000);
            }
            else{
                hiWebOsFrame.pushProtectPages(hiWebOsFrame.ChSetATVManuSetPage);
                var currSource = model.source.getCurrentSource();
                if(currSource != 0){
                    debugE("settingChSetDTVManuStartScan:currSource="+currSource);
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
                model.channelSearch.ManualStart(1);
            }
        }else{
            debugPrint("settingChSetATVManuStartScan:currSate="+data.operateData.chScanState,DebugLevel.ERROR);
        }

    }catch (ex){
        debugPrint("settingChSetATVManuStartScan: "+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetATVManuSearBtnBefUpHandle(){
    debugE("settingChSetATVManuSearBtnBefUpHandle:"+this.id);
    var data = settingChSetATVManuSetData;
    if(data.operateData.chScanState == 1){
        //focus current btn
        hiWebOsFrame.ChSetATVManuSetPage.hiFocus(this.id);
        return false;
    }
}
/*******************************************************************
 name:settingChSetATVManuTestSearch
 description:测试电脑方式搜台进度
 input:method:
 output:
 return
 *******************************************************************/
function settingChSetATVManuTestSearch(){
    var data = settingChSetATVManuSetData;
    data.operateData.chScanState = 0;
    hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
}
/*******************************************************************
 name:settingChSetATVManuSetPageEscHandle
 description:从搜索频道页进入setting
 input:
 output:
 return
 *******************************************************************/
function settingChSetATVManuSetPageEscHandle(){
    try{
        var data = settingChSetATVManuSetData;
        if(tv == true && model.channelSearch.getRunning() == 1){
            debugE("settingChSetATVManuSetPageEscHandle:channel is searching!!");
            model.channelSearch.Stop();
        }
        hiWebOsFrame.ChSetATVManuSetPage.close();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.ChSetATVManuSetPage.destroy();
    }catch (ex){
        debugPrint("settingChSetATVManuSetPageEscHandle:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingATVManuScanStateChangeCallBack
 description:搜台状态变化
 input:state:搜台状态
 output:
 return
 *******************************************************************/
function settingATVManuScanStateChangeCallBack(value){
    try{
        debugPrint("settingATVManuScanStateChangeCallBack:="+value,DebugLevel.ALWAYS);
        var data = settingChSetATVManuSetData;
        switch (value){
            case 1://complete
                hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetATVManuSetPage);
                data.operateData.chScanState = 0;
                data.operateData.refreshChannelListFlag = 1;
                refreshChListAftSearchChannel();
//                model.channelSearch.onFoundServicesFrequencyChaged = null;
                hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
                break;
            default :
                data.operateData.chScanState = 1;
                hiWebOsFrame.ChSetATVManuSetPage.rewriteDataOnly();
                break;
        }
    }catch(ex){
        debugPrint("settingATVManuScanStateChangeCallBack:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetATVCreateColorSysList(){
    hiWebOsFrame.createPage('settingChSetATVColorSysListDialogId',null, hiWebOsFrame.ChSetATVManuSetPage, null,function(a){
        hiWebOsFrame.ChSetATVColorSysListDialog = a;
        hiWebOsFrame.ChSetATVManuSetPage.close();
        a.open();
        a.hiFocus();
    });
}
function settingChSetATVCreateSoundSysList(){
    try{
        hiWebOsFrame.createPage('settingChSetATVSoundSysListDialogId',null, hiWebOsFrame.ChSetATVManuSetPage, null,function(a){
            hiWebOsFrame.ChSetATVSoundSysListDialog = a;
            hiWebOsFrame.ChSetATVManuSetPage.close();
            a.open();
            a.hiFocus();
        });
    }catch (ex){
        debugPrint("settingChSetATVCreateSoundSysList:"+ex.message,DebugLevel.ERROR);
    }

}
function settingChSetATVManuSetPageOnOpen(){
    if(tv == true){
        model.channelSearch.onColorSystemChaged = settingChSetATVCurrColorSysCallBack;
        model.channelSearch.onSoundSystemChaged = settingChSetATVCurrSoundSysCallBack;
        model.channelSearch.onStateChaged = settingATVManuScanStateChangeCallBack;
    }
}
function settingChSetATVManuPageOnDestroy(){
    try{
        hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetATVManuSetPage);
        var data = settingChSetATVManuSetData;
        if(tv == true){
            model.channelSearch.onFoundServicesFrequencyChaged = null;
            model.channelSearch.onColorSystemChaged = null;
            model.channelSearch.onSoundSystemChaged = null;
        }
        if(data.operateData.refreshChannelListFlag == 0){
            refreshChListAftSearchChannel();
        }
        hiWebOsFrame.ChSetATVManuSetPage = null;
    }catch (ex){
        debugPrint("settingChSetATVManuPageOnDestroy:"+ex.message,DebugLevel.ALWAYS);
    }

}

