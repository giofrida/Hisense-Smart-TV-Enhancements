
/**
 * Created by xuehongfeng on 14-11-12.
 */
function getboeCompletePageData(opt){
    opt.CaE = [
        {
            "id":"complete_txt",
            "description":"完成页祝贺文字",
            "CaEType":"div"
        },
        {
            "id":"boeResultLangTitle",
            "description":"语言标题",
            "CaEType":"span"
        },
        {
            "id":"boeResultLang",
            "description":"语言",
            "CaEType":"span"
        },
        {
            "id":"boeResultCtyTitle",
            "description":"国家标题",
            "CaEType":"span"
        },
        {
            "id":"boeResultCty",
            "description":"国家",
            "CaEType":"span"
        },
        {
            "id":"boeResultNetTitle",
            "description":"网络标题",
            "CaEType":"span"
        },
        {
            "id":"boeResultNet",
            "description":"网络",
            "CaEType":"span"
        },
        {
            "id":"complete_btn_ok",
            "description":"complete page button",
            "CaEType":"span",
            "classes":{
                "normal":"complete_btn_ok_Normal",
                "focus":"complete_btn_ok_Focus"
            },
            "nav":{
                "rightTo":"complete_btn_no"
            },
            "onFocusFun":"boeCompleteOnFocus",
            "onBlurFun":"boeCompleteOnBlur",
            "handler":{
                "aftEnterHandler":"wizardFinishHandlerStore","befLeftHandler":"boeCompleteToPreviousPage"
            }
        },
        {
            "id":"complete_btn_no",
            "description":"complete page button",
            "CaEType":"span",
            "classes":{
                "normal":"complete_btn_no_Normal",
                "focus":"complete_btn_no_Focus"
            },
            "nav":{
                "leftTo":"complete_btn_ok"
            },
            "handler":{
                "aftEnterHandler":"wizardFinishHandlerUser"
            }
        },
        {
            "id":"completePageLeftArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeLeftArrowBtnNormal"
            }
        }
    ];
    boeInitCompleteResultPage();
    return boeCompletePageData;
}
var boeCompletePageData = {
    "complete_txt":{"Data":"Congratulations, you have finished the Wizard setup! Press \"OK\" to continue. For Retailers press \"Store Mode\"."},
    "boeResultLangTitle":{"Data":"Language"},
    "boeResultLang":{"Data":"Language"},
    "boeResultCtyTitle":{"Data":"Location"},
    "boeResultCty":{"Data":"Location"},
    "boeResultNetTitle":{"Data":"Network"},
    "boeResultNet":{"Data":"Network"},
    "complete_btn_ok":{"Data":"Store Mode"},
    "complete_btn_no":{"Data":"OK "},
    "operateData":{
        "currLangName":"English",
        "currCtyName":"UK",
        "networkCfgFlag":"0",
        "networkType":0,//0:ethernet,1:wireless
        "connectStatus":0,
        "SSIDName":""
    },
    "langData":{
        "Successful":[],
        "OK":[],
        "Connected":[],
        "Disconnected":[]
    },
    rewrite:"boeRefreshCompletePage"
}
function boeInitCompleteResultPage(){
    var data = boeCompletePageData;
    debugPrint("[xuehongfeng]boeInitCompleteResultPage",DebugLevel.ERROR);
    data.operateData.currLangName = getOSDLanguageName();
    debugPrint("[xuehongfeng]boeInitCompleteResultPage Cty",DebugLevel.ERROR);
    data.operateData.currCtyName = getOSDCtyName();
    debugPrint("[xuehongfeng]boeInitCompleteResultPage",DebugLevel.ERROR);
    if(tv == false) {
        data.operateData.networkCfgFlag = 1;
        data.operateData.networkType = 1;
        data.operateData.connectStatus = 1;
        data.operateData.SSIDName = "\\xabcd";
    }
    else
    {
        data.operateData.networkCfgFlag = model.network.getEnumNetworkConfig();
        if(data.operateData.networkCfgFlag == 1)
        {
            data.operateData.networkType = model.network.getEnumNetworking();
            data.operateData.connectStatus = model.network.getEnumNetworkAvailable();
            if(data.operateData.networkType == 1)
            {
                data.operateData.SSIDName = model.network.getSsid();
            }
        }
    }
    debugPrint("[xuehongfeng]boeInitCompleteResultPage",DebugLevel.ERROR);
}
function boeRefreshCompletePage()
{
    var data = boeCompletePageData;
    data.boeResultLang.Data = data.operateData.currLangName;
    data.boeResultCty.Data = data.operateData.currCtyName;
    if(data.operateData.networkCfgFlag == 0)
    {
        data.boeResultNet = "Close";
    }
    else
    {
        if(data.operateData.networkType == 0)
        {
            if(data.operateData.connectStatus == 0){
                data.boeResultNet.Data = "Disconnected";
            }else{
                data.boeResultNet.Data = "Connected";
            }
        }
        else
        {
            if(data.operateData.connectStatus == 0){
                data.boeResultNet.Data = "Disconnected";
            }else{
                if(data.operateData.SSIDName != '') {
                    data.boeResultNet.Data = data.operateData.SSIDName;
                }
                else
                {
                    data.boeResultNet.Data = "Disconnected";
                }
            }
        }
    }

    if (hiWebOsFrame.getCurrentLanguage() == "chi") {
        data.complete_btn_no.Data = "确认";
    }
    else {
        data.complete_btn_no.Data = "OK ";
    }
}
function getOSDLanguageName(){
    if(tv) {
        var number = model.language.getOsd();
        debugPrint("[xuehongfeng]boeInitComplete langnumber"+ number,DebugLevel.ERROR);
    }
    else
    {
        var number = 0;
    }
    var langMapList = getSettingOSDLanguageMapList();
    var currIdx = 0;
    for(var idx = 0; idx < langMapList.length;idx++){
        if(langMapList[idx].number == number){
            currIdx = idx;
            break;
        }
    }
    debugPrint("[xuehongfeng]boeInitComplete langnumber"+ currIdx,DebugLevel.ERROR);
    if(idx == langMapList.length){
        debugPrint("getLanIdxByNumber:number"+number+" not exist!!");
        if(tv == true){
            model.language.setOsd(langMapList[0].number);
        }
    }
    return langMapList[idx].name;
}
function get_cur_curcounty_code(){
    if(tv) {
        if(getCurrVeraForWizard()=='EU')
        {
            var temp = readFileFromNative("hisenseUI/currentcty.txt", 1);
        }
        else {
            var temp = model.basicSetting.getTvsetLocation();
        }
    }
    else
    {
        var countryMapListTemp = getSettingCountryMapList();
        if (!!localStorage.getItem("currCountryIdx")) {
            var currCountryIdx = parseInt(localStorage.getItem("currCountryIdx"));
            temp = countryMapListTemp[currCountryIdx].code;
        }
        else {
            var currCountryIdx = 0;
            temp = countryMapListTemp[currCountryIdx].code;
        }
    }
    return temp;
}
function getOSDCtyName(){
    var code = get_cur_curcounty_code();
    var countryMapListTemp = getSettingCountryMapList();
    if(countryMapListTemp.length>0)
    {
        var countrycode=[];
        for(var i=0;i<countryMapListTemp.length;i++)
        {
            countrycode.push(countryMapListTemp[i].code);
        }
    }
    var index=_getIndex(countrycode,code);
    return countryMapListTemp[index].name;

}
function boeSetUserMode(type) {
    if (type < 3 && type >= 0) {
        model.system.setUserMode(type);
        if (type == 1) { //store mode
            debugPrint("store mode!!!!!!!!!");
            model.video.setEnumPictureMode(1);//vivid   //new 0-> dynamic
        } else if (0 == type) {    //UserMode
            debugPrint("user mode!!!!!!!!!");
            model.video.setEnumPictureMode(0);//energy saving //new 3->0 standard
        } else {    //PremiumMode
            model.video.setEnumPictureMode(2);//energy saving //new 3->0 Natural
        }
    }
}
function wizardFinishHandlerStore(){
    boeSetUserMode(1);
    wizardFinishHandler(1);
}
function wizardFinishHandlerUser(){
    boeSetUserMode(0);
    wizardFinishHandler(0);
}
function wizardFinishHandler(usemode){
    try{
        testRemoveSDKIntervalFun();
        if(tv == true){
			model.system.setWizardStep(0);
			model.mpctrl.StopMpctrl(null);
            setCurrSignalInput(usemode);
            setTimeout(function () {
                resumeDTV();
            }, 500);
            model.cec.setIsMiracastExist(0);
            if(getCurrVeraForWizard()=='EU')
            {
                var countrycode = readFileFromNative("hisenseUI/currentcty.txt", 1);
                model.basicSetting.setTvsetLocation(countrycode);
                var countryname = getCountryNamebyCode(countrycode);
                hiWebOsFrame.setCurrentCountry(countryname);

                var curzonecodeJson = readFileFromNative("hisenseUI/currentzone.json", 1);
                var curzonecode = curzonecodeJson.timezonecode;
                model.timerfunc.setNewTimeZone(curzonecode);

            }
            closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
            setboeSetFlag(3);
            startLiveTv();

        }
    }catch (ex){
        debugPrint("wizardFinishHandler:"+ex.message);
    }
}


function boeCompleteToPreviousPage(){


    hiWebOsFrame.createPage('boe_bg_page_id',null, null, null,function(a){
        hiWebOsFrame.boe_bg_page_id = a;
        hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_disclaimer_page_id = b;
            hiWebOsFrame.boe_bg_page_id.open();
            hiWebOsFrame.boe_complete_page_id.close();
            hiWebOsFrame.boe_complete_page_id.destroy();
            b.hiFocus();
            b.open();



        })
    });
}
function boeCompletePageOnOpen(){
    boeChangeCurrSep(6);
    this.page.rewriteDataOnly();
}
function boeCompleteOnDestroy(){
    hiWebOsFrame.boe_complete_page_id = null;
}

function boeCompleteOnFocus(){
    $("#complete_btn_ok").removeAttr("style");
    restoreMarqueeCommon(".complete_btn_frame span", -1, 0 , 360);
    $("#complete_btn_ok").css("width", 360);

}
function boeCompleteOnBlur(){
    restoreMarqueeCommon(".complete_btn_frame span", 0, -1 , 360);
    $("#complete_btn_ok").css({"width": 360, "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis"});
}