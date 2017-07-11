/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetSetMainPageData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetMainHeadImg",
            "description":"",
            "CaEType":"img"
        },
        {
            "id":"settingNetSetMainPageTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetMainNetTypeTitle",
            "description":"network type title",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
            }
        },
        {
            "id":"settingNetSetMainNetTypeValue",
            "description":"network type",
            "CaEType":"span",
            "classes":{
                "normal":"wizardSetItemValue","disable":"wizardSetItemValueDisable"
            }
        },
        {
            "id":"settingNetSetMainNetTypeList",
            "description":"network type list",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingNetSetMainNetTypeName",
                    "description":"network type name",
                    "CaEType":"div"
                }
            ],
            "classes":{
                "normal":"wizardSetItemListLi_3_Normal","focus":"wizardSetItemListLi_3_Focus",
                "dataSelected":"wizardSetItemListLi_3_Selected","disable":"wizardSetItemListLi_3_Disable"
            },
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingNetSetMainNetTypeList"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "nav":{
                "upTo":"","downTo":"","leftTo":"","rightTo":""
            },
            "handler":{
                "aftEnterHandler":"settingNetSetMainNetTypeEnterHandle",
                "befDownHandler":"settingNetSetMainDownToOtherPage",
                "befLeftHandler":"settingNetSetMainNetTypeBefLeftHandle"
            }
        },
        {
            "id":"settingNetSetMainStatusTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetMainStatusColon",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetMainStatusValue",
            "description":"",
            "CaEType":"span"
        }
    ];
    settingInitNetSetMainPage();
    return settingNetSetMainPageData;
}
var settingNetSetMainPageData={
    "settingNetSetMainHeadImg":{"Data":""},
    "settingNetSetMainPageTitle":{"Data":"Network Configuration"},
    "settingNetSetMainNetTypeTitle":{"Data":"Connection Type"},
    "settingNetSetMainNetTypeValue":{"Data":""},
    "settingNetSetMainNetTypeList":{
        "Data":[
            {
                "settingNetSetMainNetTypeName":{"Data":"Ethernet"}
            },
            {
                "settingNetSetMainNetTypeName":{"Data":"Wireless"}
            },
            {
                "settingNetSetMainNetTypeName":{"Data":"Off"}
            }
        ],
        "DataSelectedIndex":0,
        "SelectedIndex":0
    },
    "settingNetSetMainStatusTitle":{"Data":""},
    "settingNetSetMainStatusColon":{"Data":":"},
    "settingNetSetMainStatusValue":{"Data":""},
    "operateData":{
        "netHelpInfo":[
            {
                "id":"wizardNetSetMainOpenSwitch",
                "title":"Internet Connection",
                "content":"Turn the Internet connection On or Off."
            },
            {
                "id":"wizardNetSetMainNetTypeBtn",
                "title":"Connection Type",
                "content":"Choose between a wired or wireless network connection to access the Internet."
            },
            {
                "id":"wizardNetSetMainWifiSetBtn",
                "title":"Wireless Settings",
                "content":"Configure the advanced wireless network settings for the TV. "
            },
            {
                "id":"wizardNetSetMainIpSetBtn",
                "title":"IP Setting",
                "content":"Configure the IP setting for your network connection."
            },
            {
                "id":"wizardNetSetMainNetTestBtn",
                "title":"Connection Test",
                "content":"Start a network connection test."
            }
        ],
        "networkOpenSwitch":0,
        "currNetTypeIdx":0,
        "networkTypeMap":["Ethernet","Wireless","Off"],
        "netAvailableFlag":0,
        "ethernetTestFlag":0
    },
    "langData":{
        "Network Configuration":["Network Configuration"],
        "Network":["Network"],
        "Off":["Off"],
        "Connection Type":["Connection Type"],
        "Ethernet":["Ethernet"],
        "Wireless":["Wireless"]
    },
    rewrite:"settingRewriteNetSetMainPage"
}
/*******************************************************************
 name:settingInitNetSetMainPage
 description:初始化网络设置主页
 input:
 output:
 return
 *******************************************************************/
function settingInitNetSetMainPage(){
    try{
        var data = settingNetSetMainPageData;
        data.operateData.ethernetTestFlag = 0;
        if(tv == false){
            data.operateData.netAvailableFlag = 0;
        }else{
            data.operateData.netAvailableFlag = model.network.getEnumNetworkAvailable();
            debugPrint("settingInitNetSetMainPage:"+data.operateData.netAvailableFlag,DebugLevel.ALWAYS);
        }
        data.operateData.currNetTypeIdx = getSettingNetSetMainNetTypeIdx();
    }catch (ex){
        debugPrint("settingInitNetSetMainPage"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingFirstInitNetSetMainData
 description:when disclaimer not agree,when agree disclaimer use it
 input:
 output:
 return
 *******************************************************************/
function settingFirstInitNetSetMainData(){
    try{
        var data = settingNetSetMainPageData;
        var opData = settingNetSetMainPageData.operateData;
        if(tv == false){
            data.operateData.netAvailableFlag = 0;
            data.operateData.currNetTypeIdx = getSettingNetSetMainNetTypeIdx();
        }else{
            if(opData.currNetTypeIdx != 0){
                setSettingNetSetSetCurrNetType(0);
                data.operateData.currNetTypeIdx = 0;
            }
            opData.netAvailableFlag = model.network.getEnumNetworkAvailable();
            debugPrint("settingFirstInitNetSetMainData:"+opData.netAvailableFlag,DebugLevel.ALWAYS);
            if(model.network.getEthernetConnectedState() == 1){
                DBG_ALWAYS("settingFirstInitNetSetMainData:ethernet connected");
            }else{
                setSettingNetSetMainEtherConnFlag(1);
            }
//            if(model.network.getEthernetConnectedState() == 1){
//                DBG_ALWAYS("settingFirstInitNetSetMainData:ethernet connected");
//                setSettingNetSetSetCurrNetType(0);
//                data.operateData.currNetTypeIdx = 0;
//            }else{
//                DBG_ALWAYS("settingFirstInitNetSetMainData:ethernet not connected");
//
//                setSettingNetSetSetCurrNetType(1);
//                data.operateData.currNetTypeIdx = 1;
//            }

        }
    }catch (ex){
        debugPrint("settingFirstInitNetSetMainData"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetSetMainPage
 description:
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetMainPage(data){
    try{
        data.settingNetSetMainNetTypeValue.Data = data.operateData.networkTypeMap[data.operateData.currNetTypeIdx];
        data.settingNetSetMainNetTypeList.SelectedIndex = data.operateData.currNetTypeIdx;
        data.settingNetSetMainNetTypeList.DataSelectedIndex = data.operateData.currNetTypeIdx;
        if(data.operateData.currNetTypeIdx == 2){
            data.settingNetSetMainStatusTitle.Data = "Network";
            data.settingNetSetMainStatusColon.Data = ":";
            data.settingNetSetMainStatusValue.Data = "Off";
        }else{
            data.settingNetSetMainStatusTitle.Data = "";
            data.settingNetSetMainStatusColon.Data = "";
            data.settingNetSetMainStatusValue.Data = "";

        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            data.settingNetSetMainHeadImg.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")');
            $(".setting_level2_page_cls").css("left","510px");
        }
        else {
            data.settingNetSetMainHeadImg.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right")
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")');
            $(".setting_level2_page_cls").css("left","5px");
        }
    }catch (ex){
        debugPrint("settingRewriteNetSetMainPage"+ex.message,DebugLevel.ERROR);
    }
}

/*******************************************************************
 name:getSettingNetSetMainNetTypeIdx
 description:get the network type idx
 input:
 output:
 return:0:Ehternet,1:Wireless,2:Off
 *******************************************************************/
function getSettingNetSetMainNetTypeIdx(){
    var data = settingNetSetMainPageData;
    var currNetworkTypeIdx = 0;
    try{
        var networkOpenSwitch = getSettingNetSetNetOpenSwitch();
        if(networkOpenSwitch == 0){
            currNetworkTypeIdx = 2;//off
        }else{
            var currNetworkType = getSettingNetSetSetCurrNetType();
            if(currNetworkType == 0){
                currNetworkTypeIdx = 0;//Ethernet
            }else{
                currNetworkTypeIdx = 1;//Wireless
            }
        }
        return currNetworkTypeIdx;
    }catch (ex){
        debugPrint("getSettingNetSetMainNetTypeIdx:"+ex.message,DebugLevel.ERROR);
    }
}
function getSettingNetSetNetOpenSwitch(){
    try{
        if(tv == false){
            if(!!localStorage.getItem("networkOpenSwitch")){
                return parseInt(localStorage.getItem("networkOpenSwitch"));
            }else{
                localStorage.setItem("networkOpenSwitch",1);
                return 0;
            }
        }else{
            var networkOpenSwitch = model.network.getEnumNetworkConfig();
            debugPrint("getSettingNetSetNetOpenSwitch:"+networkOpenSwitch);
            return networkOpenSwitch;
        }
    }catch (ex){
        debugPrint("getSettingNetSetNetOpenSwitch:"+ex.message,DebugLevel.ERROR);
    }
}
function setSettingNetSetNetOpenSwitch(flag){
    try{
        if(tv == false){
                localStorage.setItem("networkOpenSwitch",flag);
        }else{
            if(flag == 1 && model.network.getEnumNetworkConfig() == 1){
                DBG_INFO("setSettingNetSetNetOpenSwitch:not need to open network");
            }else{
                model.network.setEnumNetworkConfig(flag);
            }
        }
    }catch (ex){
        debugPrint("getSettingNetSetNetOpenSwitch:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:getSettingNetSetSetCurrNetType
 description:获取当前网络类型
 input:
 output:
 return:0:Ethernet,1:Wireless
 *******************************************************************/
function getSettingNetSetSetCurrNetType(){
    try{
        if(tv == false){
            if(!!localStorage.getItem("networkCurrNetType")){
                return parseInt(localStorage.getItem("networkCurrNetType"));
            }else{
                localStorage.setItem("networkCurrNetType",0);
                return 0;
            }
        }else{
            var networkType = model.network.getEnumNetworking();//0:Ehternet,1:Wireless
            debugPrint("getSettingNetSetSetCurrNetType:networkType="+networkType,DebugLevel.ALWAYS);
            return networkType;
        }
    }catch (ex){
        debugPrint("getSettingNetSetSetCurrNetType:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:setSettingNetSetSetCurrNetType
 description:获取当前网络类型
 input:
 output:
 return:0:Ethernet,1:Wireless
 *******************************************************************/
function setSettingNetSetSetCurrNetType(type){
    try{
        if(tv == false){
            localStorage.setItem("networkCurrNetType",type);
        }else{
            model.network.setEnumNetworking(type);//0:Ehternet,1:Wireless
        }
    }catch (ex){
        debugPrint("getSettingNetSetSetCurrNetType:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingNetSetMainNetTypeEnterHandle
 description:set current network type
 input:
 output:
 return:
 *******************************************************************/
function settingNetSetMainNetTypeEnterHandle(){
    try{
        var data = settingNetSetMainPageData;
        data.operateData.currNetTypeIdx = this.SelectedIndex;
        switch (this.SelectedIndex){
            case 0://Ethernet
                if(!!hiWebOsFrame.NetSetEtherIpSetPage){
                    DBG_INFO("settingNetSetMainNetTypeEnterHandle:Ethernet ip set page exist");
                }else{
                    setSettingNetSetNetOpenSwitch(1);//open network
                    setSettingNetSetSetCurrNetType(0);//set ethernet
                    hiWebOsFrame.NetSetMainPage.rewriteDataOnly();
                    if(!!hiWebOsFrame.NetSetWifiSetPage){
                        DBG_ALWAYS("settingNetSetMainNetTypeEnterHandle:wifi set page exist");
                        hiWebOsFrame.NetSetWifiSetPage.close();
                        hiWebOsFrame.NetSetWifiSetPage.destroy();
                    }
                    DBG_INFO("settingNetSetMainNetTypeEnterHandle:ethernet ip set page not exist");
                    settingNetSetMainOpenEtherIpSetPage();
                }
                break;
            case 1://Wireless
                if(!!hiWebOsFrame.NetSetWifiSetPage){
                    DBG_INFO("settingNetSetMainNetTypeEnterHandle:wifi set page exist");
                }else{
                    setSettingNetSetNetOpenSwitch(1);//open network
                    setSettingNetSetSetCurrNetType(1);//setWireless
                    hiWebOsFrame.NetSetMainPage.rewriteDataOnly();
                    if(!!hiWebOsFrame.NetSetEtherIpSetPage){
                        hiWebOsFrame.NetSetEtherIpSetPage.close();
                        hiWebOsFrame.NetSetEtherIpSetPage.destroy();
                    }
                    settingNetSetMainOpenSearWifiDialog();
                }
                break;
            case 2://Off
                setSettingNetSetNetOpenSwitch(0);//close network
                hiWebOsFrame.NetSetMainPage.rewriteDataOnly();
                if(!!hiWebOsFrame.NetSetEtherIpSetPage){
                    hiWebOsFrame.NetSetEtherIpSetPage.close();
                    hiWebOsFrame.NetSetEtherIpSetPage.destroy();
                }
                if(!!hiWebOsFrame.NetSetWifiSetPage){
                    hiWebOsFrame.NetSetWifiSetPage.close();
                    hiWebOsFrame.NetSetWifiSetPage.destroy();
                }
                break;
        }
    }catch (ex){
        DBG_ALWAYS("settingNetSetMainNetTypeEnterHandle:"+ex.message);
    }
}

function settingNetSetMainOpenEtherIpSetPage(){
    try{
        if(!!hiWebOsFrame.NetSetEtherIpSetPage){
            settingInitNetSetEtherIpSetPageData();
            hiWebOsFrame.NetSetEtherIpSetPage.rewriteDataOnly();
            hiWebOsFrame.NetSetEtherIpSetPage.open();
        }else{
            hiWebOsFrame.createPage("settingNetSetEtherIpSetPageId", null, hiWebOsFrame.NetSetMainPage, null, function (page) {
                hiWebOsFrame.NetSetEtherIpSetPage = page;
                page.open();
            });
        }
    }catch (ex){
        DBG_ALWAYS("settingNetSetMainOpenEtherIpSetPage:"+ex.message);
    }
}
function settingNetSetMainOpenSearWifiDialog(){
    hiWebOsFrame.createPage("settingNetSetSearWifiDialogId", null, hiWebOsFrame.NetSetMainPage, null, function (page) {
        hiWebOsFrame.NetSetSearWifiDialog = page;
        hiWebOsFrame.NetSetMainPage.hiBlur();
        page.open();
        page.hiFocus();
    });
}
function settingNetSetMainDownToOtherPage(){
    var data = settingNetSetMainPageData;
    switch (data.operateData.currNetTypeIdx){
        case 0:
            hiWebOsFrame.NetSetEtherIpSetPage.hiFocus();
            hiWebOsFrame.NetSetMainPage.hiBlur();
            break;
        case 1:
            if(!!hiWebOsFrame.NetSetWifiSetPage){
                hiWebOsFrame.NetSetWifiSetPage.hiFocus();
                hiWebOsFrame.NetSetMainPage.hiBlur();
            }
            break;
        case 2:
            break;
        default :
            break;
    }
}
function settingNetSetMainNetTypeBefLeftHandle(){
    if(this.SelectedIndex == 0){
        settingNetSetMainPageEscHandle();
    }
}
function setSettingNetSetMainEtherConnFlag(flag){
    var opData = settingNetSetMainPageData.operateData;
    opData.ethernetTestFlag = flag;
}
function settingNetSetMainPageEscHandle(){
    try{
        if(!!hiWebOsFrame.NetSetSearWifiDialog){
            hiWebOsFrame.NetSetSearWifiDialog.close();
            hiWebOsFrame.NetSetSearWifiDialog.destroy();
        }else{
            if(!!hiWebOsFrame.NetSetEtherIpSetPage){
                settingNetSetEtherIpSetRecordIpInfo();
                hiWebOsFrame.NetSetEtherIpSetPage.close();
                hiWebOsFrame.NetSetEtherIpSetPage.destroy();
            }
            if(!!hiWebOsFrame.NetSetWifiSetPage){
                hiWebOsFrame.NetSetWifiSetPage.close();
                hiWebOsFrame.NetSetWifiSetPage.destroy();
            }
            hiWebOsFrame.NetSetMainPage.close();
            hiWebOsFrame.settingsFirst.hiFocus();
            hiWebOsFrame.NetSetMainPage.destroy();
        }
    }catch (ex){
        debugPrint("settingNetSetMainPageEscHandle:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetMainOnOpen(){
    var data = settingNetSetMainPageData;
    switch (data.operateData.currNetTypeIdx){
        case 0:
            if(data.operateData.ethernetTestFlag != 1){
                settingNetSetMainOpenEtherIpSetPage();
            }else{
                settingNetSetMainOpenSearWifiDialog(); //wait ethernet connect
            }
            break;
        case 1:
            settingNetSetMainOpenSearWifiDialog();
            break;
        case 2:
            break;
        default :
            DBG_ERROR("settingNetSetMainOnOpen:netType ERROR:"+data.operateData.currNetTypeIdx);
    }

}
function settingNetSetMainPageOnDestroy(){
    try{
        hiWebOsFrame.NetSetMainPage = null;
        if(!!hiWebOsFrame.NetSetWifiSetPage){
            hiWebOsFrame.NetSetWifiSetPage.destroy();
        }
        if(!!hiWebOsFrame.NetSetEtherIpSetPage){
            hiWebOsFrame.NetSetEtherIpSetPage.destroy();
        }
    }catch (ex){
        debugPrint("settingNetSetMainPageOnDestroy:"+ex.message,DebugLevel.ERROR);
    }
}


