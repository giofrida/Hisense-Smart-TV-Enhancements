/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetSetWifiSetPageData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetWifiSetAdvanceTitle",
            "description":"高级设置标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetWifiSetAdvanceBtn",
            "description":"高级设置按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardAdjustBtnNormal","focus":"wizardAdjustBtnFocus"
            },
            "nav":{
                "downTo":"settingNetSetWifiSetAddNetBtn"
            },
            "handler":{
                "aftEnterHandler":"settingNetSetWifiSetAdEnterHandle",
                "befUpHandler":"settingNetSetWifiSetUpToMain",
                "befLeftHandler":"settingNetSetWifiSetPageEscHandle"
            }
        },
        {
            "id":"settingNetSetWifiSetRefreshTitle",
            "description":"可用网络标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetWifiSetAddNetBtn",
            "description":"add network",
            "CaEType":"Container",
            "CaE":{
                "id":"settingNetSetWifiSetAddNetImg",
                "description":"",
                "CaEType":"span"
            },
            "classes":{
                "normal":"settingWifiSetImgBtnNormal","focus":"settingWifiSetImgBtnFocus"
            },
            "nav":{
                "upTo":"settingNetSetWifiSetAdvanceBtn",
                "downTo":"settingNetSetWifiAutoResultUl",
                "rightTo":"settingNetSetWifiSetRefreshBtn"
            },
            "handler":{
                "aftEnterHandler":"settingNetSetWifiManuAddHandle",
                "befLeftHandler":"settingNetSetWifiSetPageEscHandle"
            }
        },
        {
            "id":"settingNetSetWifiSetRefreshBtn",
            "description":"手动刷新按钮",
            "CaEType":"Container",
            "CaE":{
                "id":"settingNetSetWifiSetRefreshImg",
                "description":"",
                "CaEType":"span"
            },
            "classes":{
                "normal":"settingWifiSetImgBtnNormal","focus":"settingWifiSetImgBtnFocus"
            },
            "nav":{
                "upTo":"settingNetSetWifiSetAdvanceBtn",
                "downTo":"settingNetSetWifiAutoResultUl",
                "leftTo":"settingNetSetWifiSetAddNetBtn"
            },
            "handler":{
                "aftEnterHandler":"settingNetSetWifiSetRefreshNet"
            }
        },
        {
            "id":"settingNetSetWifiAutoResultUl",
            "description":"搜索到的无线网络",
            "CaEType":"Ul",
            "oriCaE":[
                {
                    "id":"settingNetSetWifiName",
                    "description":"无线名称",
                    "CaEType":"span",
                    "strFilter":true
                },
                {
                    "id":"settingNetSetWifiConnState",
                    "description":"连接状态",
                    "CaEType":"span"
                },
                {
                    "id":"settingNetSetWifiSecType",
                    "description":"安全类型",
                    "CaEType":"span",
                    "strFilter":true
                },
                {
                    "id":"settingNetSetWifiStateImg",
                    "description":"无线状态",
                    "CaEType":"img"
                },
                {
                    "id":"settingNetSetWifiSecImg",
                    "description":"加密状态",
                    "CaEType":"img"
                }
            ],
            "UlConfig":{
                "NavigationBarDataItem":["settingNetSetWifiName","settingNetSetWifiConnState","settingNetSetWifiSecType","settingNetSetWifiStateImg","settingNetSetWifiSecImg"]
//                ,"PageSize":5
            },
            "classes":{
                "normal":"settingWifiSearLiNormal","focus":"settingWifiSearLiFocus","dataSelected":"settingWifiSearLiNormal"
            },
            "nav":{
                "upTo":"settingNetSetWifiSetAddNetBtn","rightTo":""
            },
            "handler":{
                "befDownHandler":"settingNetSeWifiDelMarquee",
                "befUpHandler":"settingNetSeWifiDelMarquee",
                "aftUpHandler":"settingNetSetWifiListUpHandler",
                "aftDownHandler":"settingNetSetWifiListDownHandler",
                "befLeftHandler":"settingNetSetWifiSetPageEscHandle",
                "aftEnterHandler":"settingNetSetWifiListEnterHandler"
            }
        }
    ];
    settingInitNetSetWifiSetPage();
    return settingNetSetWifiSetPageData;
}
var settingNetSetWifiSetPageData={
    "settingNetSetWifiSetAdvanceTitle":{"Data":"Advanced Settings"},
    "settingNetSetWifiSetAdvanceBtn":{"Data":"Adjust"},
    "settingNetSetWifiSetRefreshTitle":{"Data":"Available Networks"},
    "settingNetSetWifiSetAddNetBtn":{"Data":{
        "settingNetSetWifiSetAddNetImg":{"Data":""}
    }},
    "settingNetSetWifiSetRefreshBtn":{"Data":{
        "settingNetSetWifiSetRefreshImg":{"Data":""}
    }},
    "settingNetSetWifiAutoResultUl":{
        "Data":[
            {
                "settingNetSetWifiName":{"Data":"HIPM"},
                "settingNetSetWifiConnState":{"Data":"已连接"},
                "settingNetSetWifiSecType":{"Data":"WPA-WPA2-PSK"},
                "settingNetSetWifiStateImg":{"Data":"img/wifi-1.png"},
                "settingNetSetWifiSecImg":{"Data":"img/lock.png"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "autoSearchWifiNetNum":0,
        "autoSearchWifiNetResult":[],
//{
//    "wifiName":"aaaa",
//    "wifiSecType":"",
//    "wifiSignal":1
//}
        "netAvailableFlag":0,
        "wifiSetType":0,
        "wifiSecurityType":["","WEP","WEP","WEP","WPA","WPA","WPA","WPA","WPA","WPA","WPA2","WPA2","WPA2","WPA2","WPA2","WPA2","WPA/WPA2","WPA/WPA2","WPA","WPA2","802.1x","802.1x","802.1x"],
        "currBeginIdx":0,
        "currIdx":0,
        "currSSIDName":"",
        "currSecType":0,
        "currAuthType":0,
        "currSingnal":100,
        "currPassword":"",
        "connWifiPara":{
            "connState":0,
            "connSSID":"",
            "connAuthType":0,
            "connSecType":0,
            "connPassword":""
        },
        "lastConnWifiPara":{},
        "manualAddSSID":""
    },
    "langData":{
        "Network Configuration":["Network Configuration"],
        "Advanced Settings":["Advanced Settings"],
        "Available Networks":["Available Networks"],
        "Adjust":["Adjust"],
        "Connected":["Connected"],
        "None":["None"]
    },
    rewrite:"settingRewriteNetSetWifiSetPage"
}
/*******************************************************************
 name:settingInitNetSetWifiSetPage
 description:初始化无线网络配置中搜索到的无线网络
 input:WifiType 0:自动搜索，1：手动设置
 output:
 return
 *******************************************************************/
function settingInitNetSetWifiSetPage(){
    try{
        var data = settingNetSetWifiSetPageData;
        var opData = settingNetSetWifiSetPageData.operateData;
        opData.autoSearchWifiNetResult = [];
        opData.manualAddSSID = "";
        if(tv == false){
            var autoSearchWifiNetNum =  10;
            for(var i = 0;i < autoSearchWifiNetNum && i < 5;i++){
                var itemData = {
                    "wifiName":"aaaaaaaaaaaaa",
                    "wifiSecType":0,
                    "wifiAuthType":6,
                    "wifiSignal":20
                }
                opData.autoSearchWifiNetResult.push(itemData);
            }
            for(var i = 5;i < autoSearchWifiNetNum;i++){
                var itemData = {
                    "wifiName":"bbbbbbbbbbbbbbbbbb",
                    "wifiSecType":1,
                    "wifiAuthType":6,
                    "wifiSignal":100
                }
                opData.autoSearchWifiNetResult.push(itemData);
            }
            opData.autoSearchWifiNetNum = opData.autoSearchWifiNetResult.length;
            opData.netAvailableFlag = 1;
            opData.currIdx = 0;
            opData.currBeginIdx = 0;
        }else{
            opData.autoSearchWifiNetNum = 0;
            opData.netAvailableFlag = model.network.getEnumNetworkAvailable();
            if(opData.netAvailableFlag == 1){
                opData.connWifiPara.connSSID = model.network.getSsid();
                opData.connWifiPara.connAuthType = model.network.getEnumAuthentication();
                opData.connWifiPara.connSecType =  model.network.getEnumEncryption();
                opData.connWifiPara.connPassword = model.network.getEncryptionPassphrase();
                opData.lastConnWifiPara = opData.connWifiPara;
            }
            opData.currIdx = 0;
            opData.currBeginIdx = 0;
            opData.connWifiPara.connState = false;
            var autoSearchWifiNetNum =  model.network.getAccess_pointsCount();
            debugPrint("settingInitNetSetWifiSetPage:"+autoSearchWifiNetNum,DebugLevel.ALWAYS);
            if(autoSearchWifiNetNum > 0){
                var SSIDArray = model.network.getAccess_pointsSsid();
                var securityArray = model.network.getAccess_pointsEncrypted();
                var authArray = model.network.getAccess_pointsAuthentication();
                var signalArray = model.network.getAccess_pointsSignal();
                debugPrint("settingInitNetSetWifiSetPage:SSIDArray="+SSIDArray.length+
                                                            ",securityArray"+securityArray.length+
                                                            ",authentication"+authArray.length+
                                                            ",signalArray"+signalArray.length);
                for(var i = 0; i < autoSearchWifiNetNum; i++){
                    if(SSIDArray[i].length > 0){
                        var itemData = {
                            "wifiName":"",
                            "wifiSecType":1,
                            "wifiAuthType":0,
                            "wifiSignal":1
                        }
                        itemData.wifiName = SSIDArray[i];
                        itemData.wifiSecType = securityArray[i];
                        itemData.wifiAuthType = authArray[i];
                        itemData.wifiSignal = signalArray[i];
                        debugPrint("settingInitNetSetWifiSetPage:"+itemData.wifiName+","+itemData.wifiSecType+","+itemData.wifiAuthType+","+itemData.wifiSignal);
                        if(opData.netAvailableFlag == 1 && opData.connWifiPara.connSSID == itemData.wifiName){
                            opData.autoSearchWifiNetResult.unshift(itemData);
                        }else{
                            opData.autoSearchWifiNetResult.push(itemData);
                        }
                    }else{
                        DBG_ALWAYS("settingInitNetSetWifiSetPage:search num is 0");
                        if(opData.netAvailableFlag == 1){
                            var itemData = {};
                            itemData.wifiName = opData.connWifiPara.connSSID;
                            itemData.wifiSecType = opData.connWifiPara.connSecType;
                            itemData.wifiAuthType = opData.connWifiPara.connAuthType;
                            itemData.wifiSignal =  model.network.getLink_quality();
                            opData.autoSearchWifiNetResult.push(itemData);
                            opData.manualAddSSID = itemData.wifiName;
                        }
                    }
                }
                opData.autoSearchWifiNetNum = opData.autoSearchWifiNetResult.length;
                debugPrint("settingInitNetSetWifiSetPage:opData.autoSearchWifiNetNum="+opData.autoSearchWifiNetNum,DebugLevel.ALWAYS)
            }
        }
    }catch (ex){
        debugPrint("settingInitNetSetWifiSetPage"+ex.message,DebugLevel.ERROR);
    }
}

/*******************************************************************
 name:settingRewriteNetSetWifiSetPage
 description:刷新无线网络设置页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetSetWifiSetPage(data){
    try{
        var WifiAutoResultUl = data.settingNetSetWifiAutoResultUl;
        data.operateData.autoSearchWifiNetNum = data.operateData.autoSearchWifiNetResult.length;
        debugPrint("settingRewriteNetSetWifiSetPage:autoSearchWifiNetNum="+data.operateData.autoSearchWifiNetNum );
        if(data.operateData.autoSearchWifiNetNum == 0){
            debugPrint("settingRewriteNetSetWifiSetPage:wifi num is 0!!");
            WifiAutoResultUl.Data = [];
            WifiAutoResultUl.disable = true;
        }else{
            WifiAutoResultUl.disable = false;
            if(WifiAutoResultUl.Data.length > data.operateData.autoSearchWifiNetNum){
                WifiAutoResultUl.Data.splice(data.operateData.autoSearchWifiNetNum);
            }else if(WifiAutoResultUl.Data.length < data.operateData.autoSearchWifiNetNum){
                while(WifiAutoResultUl.Data.length < data.operateData.autoSearchWifiNetNum){
                    var itemData ={
                        "settingNetSetWifiName":{"Data":""},
                        "settingNetSetWifiConnState":{"Data":""},
                        "settingNetSetWifiSecType":{"Data":""},
                        "settingNetSetWifiStateImg":{"Data":""},
                        "settingNetSetWifiSecImg":{"Data":""}
                    }
                    WifiAutoResultUl.Data.push(itemData);
                }
            }
            $.each(data.operateData.autoSearchWifiNetResult,function(idx,item){
                itemData = WifiAutoResultUl.Data[idx];
                itemData.settingNetSetWifiName.Data = item.wifiName;
                itemData.settingNetSetWifiConnState.Data = "";
                itemData.settingNetSetWifiSecType.Data = data.operateData.wifiSecurityType[item.wifiSecType];
                if(item.wifiSecType != 0){
                    itemData.settingNetSetWifiSecImg.Data = "img/lock.png";
                }else{
                    itemData.settingNetSetWifiSecImg.Data = "img/blank.png";
                }
                if(item.wifiSignal <= 25){
                    itemData.settingNetSetWifiStateImg.Data ="img/wifi-1.png";
                }else if(item.wifiSignal > 25 && item.wifiSignal <= 50){
                    itemData.settingNetSetWifiStateImg.Data ="img/wifi-2.png";
                }else if(item.wifiSignal > 50 && item.wifiSignal <= 75){
                    itemData.settingNetSetWifiStateImg.Data ="img/wifi-3.png";
                }else{
                    itemData.settingNetSetWifiStateImg.Data ="img/wifi-4.png";
                }
            })

            if(data.operateData.netAvailableFlag == 1){
                debugPrint("settingRewriteNetSetWifiSetPage:data.operateData.netAvailableFlag == 1");
                WifiAutoResultUl.Data[data.operateData.currIdx].settingNetSetWifiConnState.Data = "Connected";
            }
            WifiAutoResultUl.SelectedIndex = data.operateData.currIdx;
            WifiAutoResultUl.DataSelectedIndex = data.operateData.currIdx;
        }
    }catch (ex){
        debugPrint("settingRewriteNetSetWifiSetPage"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetWifiSetUpToMain(){
    hiWebOsFrame.NetSetWifiSetPage.hiBlur();
    hiWebOsFrame.NetSetMainPage.hiFocus();
}
function settingNetSetWifiSetRefreshNet(){
    hiWebOsFrame.createPage("settingNetSetSearWifiDialogId", null, hiWebOsFrame.NetSetWifiSetPage, null, function (a) {
        hiWebOsFrame.NetSetSearWifiDialog = a;
        hiWebOsFrame.NetSetWifiSetPage.hiBlur();
        a.open();
        a.hiFocus();
    });
}

function settingNetSetWifiSetAdEnterHandle(){
    hiWebOsFrame.createPage('settingNetSetAdvanceListDialogId',null,hiWebOsFrame.NetSetWifiSetPage, null,function(a){
        hiWebOsFrame.NetSetAdvanceListDialog = a;
        a.open();
        a.hiFocus();
    });
}
/*******************************************************************
 name:settingNetSetWifiManuAddHandle
 description:打开手动添加无线网络页
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiManuAddHandle(){
    hiWebOsFrame.createPage('settingNetSetWifiAddDialogId',null,hiWebOsFrame.NetSetWifiSetPage, null,function(a){
        hiWebOsFrame.NetSetWifiAddDialog = a;
        a.open();
        a.hiFocus();
    });
}

/*******************************************************************
 name:getSettingNetSetWifiPageConnPare
 description:获取无线网络所需参数
 input:
 output:
 return
 *******************************************************************/
function getSettingNetSetWifiPageConnPare(){
    try{
        var data = settingNetSetWifiSetPageData;
        var wifiConnPare ={
            "SSID":"",
            "secType":0,
            "authType":0,
            "password":"",
            "signal":100
        }
        wifiConnPare.SSID = data.operateData.currSSIDName;
        wifiConnPare.secType = data.operateData.currSecType;
        wifiConnPare.authType = data.operateData.currAuthType;
        wifiConnPare.signal = data.operateData.currSingnal;
        if(tv){
            data.operateData.netAvailableFlag = model.network.getEnumNetworkAvailable();
        }
        if(data.operateData.netAvailableFlag == 1 &&
            data.operateData.connWifiPara.connSSID == data.operateData.currSSIDName){
            if(data.operateData.connWifiPara.connPassword == "")
            {
                data.operateData.connWifiPara.connPassword = model.network.getEncryptionPassphrase();
            }
            wifiConnPare.password = data.operateData.connWifiPara.connPassword;
            
        }else{
            wifiConnPare.password = "";
        }
        return wifiConnPare;
    }catch (ex){
        debugPrint("getSettingNetSetWifiPageConnPare:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:getWizardNetSetWifiSetPageConnPare
 description:获取无线网络所需参数
 input:
 output:
 return
 *******************************************************************/
function setWizardNetSetWifiSetPageConnPare(SSID,secType,authType,signal){
    //debugPrint("setWizardNetSetWifiSetPageConnPare:"+SSID+","+secType+","+authType+","+signal);
    var data = settingNetSetWifiSetPageData;
    data.operateData.currSSIDName = SSID;
    data.operateData.currSecType = secType;
    data.operateData.currAuthType = authType;
    data.operateData.currSingnal = signal;
}

function setSettingNetSetWifiSetPageConnState(){
    var data = settingNetSetWifiSetPageData;
    var opData = settingNetSetWifiSetPageData.operateData;
    if(tv == true){
        opData.netAvailableFlag = model.network.getEnumNetworkAvailable();
        DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:netAvailable="+opData.netAvailableFlag);
        if(opData.netAvailableFlag == 1){
            var currSSID = model.network.getSsid();
            opData.connWifiPara.connSSID = model.network.getSsid();
            opData.connWifiPara.connAuthType = model.network.getEnumAuthentication();
            opData.connWifiPara.connSecType =  model.network.getEnumEncryption();
            opData.connWifiPara.connPassword = model.network.getEncryptionPassphrase();
            opData.lastConnWifiPara = opData.connWifiPara;
        }else{
            var currSSID = model.network.getSsid();
            var enumLink = model.network.getEnumLink();
            if(!!opData.lastConnWifiPara && opData.lastConnWifiPara.connSSID == currSSID && enumLink == 6){
                DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:"+currSSID+" has the wrong password");
                opData.lastConnWifiPara = {};
            }
        }
    }else{
        opData.netAvailableFlag = 1;
        var currSSID = opData.connWifiPara.connSSID;
    }
    if(opData.netAvailableFlag == 1){
        for(var i = 0; i < opData.autoSearchWifiNetNum; i++){
            if(currSSID == opData.autoSearchWifiNetResult[i].wifiName){
                if(opData.currIdx == i){
                    //same with origin
                    DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:same with origin");
                    if(opData.autoSearchWifiNetResult[0].wifiName == opData.manualAddSSID &&
                        currSSID != opData.manualAddSSID){
                        DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:first is manual add ssid");
                        opData.autoSearchWifiNetResult.splice(0,1);
                        opData.currIdx = opData.currIdx-1;
                        hiWebOsFrame.NetSetWifiSetPage.rewrite();
                        settingNetSetWifiSetPositionLocate();
                    }else{
                        DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:first is not manual add ssid");
                        hiWebOsFrame.NetSetWifiSetPage.rewriteDataOnly();
                    }
                }else{
                    //different with origin,move to the begin
                    DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:different with origin,move to the begin");
                    var itemData = opData.autoSearchWifiNetResult[i];
                    opData.autoSearchWifiNetResult.splice(i,1);
                    opData.autoSearchWifiNetResult.unshift(itemData);
                    opData.currIdx = 0;
                    hiWebOsFrame.NetSetWifiSetPage.rewriteDataOnly();
                    settingNetSetWifiSetPositionLocate();
                }
                break;
            }
        }
        if(i == opData.autoSearchWifiNetNum){
            //not in list, add network
            DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:not found in list,may manual add");
            var itemData = {};
            itemData.wifiName = opData.connWifiPara.connSSID;
            itemData.wifiSecType = opData.connWifiPara.connSecType;
            itemData.wifiAuthType = opData.connWifiPara.connAuthType;
            if(tv){
                itemData.wifiSignal =  model.network.getLink_quality();
            }else{
                itemData.wifiSignal = 100;
            }
            if(opData.autoSearchWifiNetResult[0].wifiName == opData.manualAddSSID){
                opData.manualAddSSID = itemData.connSSID;
                opData.autoSearchWifiNetResult[0] = itemData;
                opData.currIdx = 0;
                hiWebOsFrame.NetSetWifiSetPage.rewriteDataOnly();
                settingNetSetWifiSetPositionLocate();
            }else{
                opData.manualAddSSID = itemData.connSSID;
                opData.autoSearchWifiNetResult.unshift(itemData);
                opData.currIdx = 0;
                hiWebOsFrame.NetSetWifiSetPage.rewrite();
                settingNetSetWifiSetPositionLocate();
            }
        }
    }else{
        hiWebOsFrame.NetSetWifiSetPage.rewriteDataOnly();
    }
    var selectWifiPare = data.operateData.autoSearchWifiNetResult[opData.currIdx];
    setWizardNetSetWifiSetPageConnPare(selectWifiPare.wifiName,selectWifiPare.wifiSecType,selectWifiPare.wifiAuthType,selectWifiPare.wifiSignal);
}
/*******************************************************************
 name:settingNetSetWifiListEnterHandler
 description:在自动搜索页中选中其中一项进行的处理
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiListEnterHandler(){
    var data = settingNetSetWifiSetPageData;
    data.operateData.wifiSetType = 0;
    try{
        if(tv == true){
            model.network.setLink_quality(data.operateData.currSingnal);
        }
        if(data.operateData.currSecType == 0){
            hiWebOsFrame.createPage('settingNetSetConnNetDialogId',null, hiWebOsFrame.NetSetWifiSetPage, null,function(a){
                hiWebOsFrame.NetSetConnNetDialog = a;
                settingSetNetSetWifiConnPara(getSettingNetSetWifiPageConnPare());
                a.open();
                a.hiFocus();
            });
        }else{
            hiWebOsFrame.createPage('settingNetSetPWInputDialogId',null, hiWebOsFrame.NetSetWifiSetPage, null,function(a){
                hiWebOsFrame.NetSetPWInputDialog = a;
                setWizardNetSetPwInputOperateData(getSettingNetSetWifiPageConnPare());
                a.rewriteDataOnly();
                a.open();
                a.hiFocus();
            });
        }
    }catch (ex){
        debugPrint("settingNetSetWifiListEnterHandler:"+ex.message,DebugLevel.ERROR);
    }

}
function settingNetSeWifiAddMarquee(){
    var data = settingNetSetWifiSetPageData;
    var txt = data.operateData.autoSearchWifiNetResult[this.SelectedIndex].wifiName;
//    $(".settingWifiSearLiFocus .settingWifiLeft").html('<marquee>'+txt +'</marquee>');
    var currId = $("#"+this.id+" li").eq(this.SelectedIndex);
    var txt = $(currId).children(".settingWifiLeft").html();

}
var settingNetSetWifiNumPerPage = 6;
function settingNetSeWifiDelMarquee(){
    var data = settingNetSetWifiSetPageData;
    var currId = $("#"+this.id+" li").eq(this.SelectedIndex);
    var name = "";
    if($(currId).children(".settingWifiLeft").children("marquee").length != 0){
        var name = $(currId).children(".settingWifiLeft").children("marquee").html();
    }
    if(name.length > 0){
        $(currId).children(".settingWifiLeft").html(name);
    }
    var connect = "";
    if($(currId).children(".settingWifiMiddle1").children("marquee").length != 0){
        var connect = $(currId).children(".settingWifiMiddle1").children("marquee").html();
    }
    if(connect.length > 0){
        $(currId).children(".settingWifiMiddle1").html(connect);
    }
}
function settingNetSetWifiListUpHandler(){
    try{
        var data = settingNetSetWifiSetPageData;
        var opData = settingNetSetWifiSetPageData.operateData;
        var txt = opData.autoSearchWifiNetResult[this.SelectedIndex].wifiName;
        debugPrint("settingNetSetWifiListUpHandler:wifiName="+opData.autoSearchWifiNetResult[this.SelectedIndex].wifiName,DebugLevel.ALWAYS);
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex);
        if(txt.length > 15){
            $(currId).children(".settingWifiLeft").html('<marquee>'+txt +'</marquee>');
        }
        var connectTxt = $(currId).children(".settingWifiMiddle1").html();
        if(connectTxt.length > 10){
            $(currId).children(".settingWifiMiddle1").html('<marquee>'+connectTxt +'</marquee>');
        }

        //debugPrint("settingNetSetWifiListUpHandler:this.SelectedIdx="+this.SelectedIndex);
        var currentFocusIdx = this.SelectedIndex;
        data.operateData.currIdx = this.SelectedIndex;
        if(data.operateData.currBeginIdx > this.SelectedIndex){
            data.operateData.currBeginIdx = data.operateData.currBeginIdx - 1;
            var top = -(data.operateData.currBeginIdx*80);
            $("#settingNetSetWifiAutoResultUl").css("top",top+"px");
        }
        var selectWifiPare = data.operateData.autoSearchWifiNetResult[this.SelectedIndex];
        setWizardNetSetWifiSetPageConnPare(selectWifiPare.wifiName,selectWifiPare.wifiSecType,selectWifiPare.wifiAuthType,selectWifiPare.wifiSignal);
        settingNetSetWifiSetListUpScroll(this.SelectedIndex);
    }catch (ex){
        debugPrint("settingNetSetWifiListUpHandler:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetWifiListDownHandler(){
    try{
        var data = settingNetSetWifiSetPageData;
        var opData = settingNetSetWifiSetPageData.operateData;
        var txt = opData.autoSearchWifiNetResult[this.SelectedIndex].wifiName;
        debugPrint("settingNetSetWifiListDownHandler:wifiName="+opData.autoSearchWifiNetResult[this.SelectedIndex].wifiName,DebugLevel.ALWAYS);
        var currId = $("#"+this.id+" li").eq(this.SelectedIndex);
        if(txt.length > 15){
            $(currId).children(".settingWifiLeft").html('<marquee>'+txt +'</marquee>');
        }
        var connectTxt = $(currId).children(".settingWifiMiddle1").html();
        if(connectTxt.length > 10){
            $(currId).children(".settingWifiMiddle1").html('<marquee>'+connectTxt +'</marquee>');
        }
        data.operateData.currIdx = this.SelectedIndex;
        if(data.operateData.currBeginIdx+(settingNetSetWifiNumPerPage-1) < this.SelectedIndex){
            data.operateData.currBeginIdx = data.operateData.currBeginIdx + 1;
            var top = -(data.operateData.currBeginIdx*80);
            $("#settingNetSetWifiAutoResultUl").css("top",top+"px");
        }
        var selectWifiPare = data.operateData.autoSearchWifiNetResult[this.SelectedIndex];
        setWizardNetSetWifiSetPageConnPare(selectWifiPare.wifiName,selectWifiPare.wifiSecType,selectWifiPare.wifiAuthType,selectWifiPare.wifiSignal);
        settingNetSetWifiSetListDownScroll(this.SelectedIndex);
    }catch (ex){
        debugPrint("settingNetSetWifiListDownHandler:"+ex.message,DebugLevel.ERROR);
    }
}

function settingNetSetWifiSetListUpScroll(SelectedIndex){
    try{
        var currFocusId = this.id;
        var data = settingNetSetWifiSetPageData;
        var len=data.operateData.autoSearchWifiNetNum;
        var conHigh = $("#wizardWifiAutoListScrollCon").height();
        var step = conHigh / len;
        if(len > settingNetSetWifiNumPerPage &&SelectedIndex < (len-settingNetSetWifiNumPerPage+1))
        {
            var temp=parseInt(SelectedIndex*step);
            $("#wizardWifiAutoListScrollBar").css("top",temp);

        }
    }catch (ex){
        debugPrint("settingNetSetWifiSetListUpScroll:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetWifiSetListDownScroll(SelectedIndex){
    try{
        var data = settingNetSetWifiSetPageData;
        var len = data.operateData.autoSearchWifiNetNum;
        var conHigh = $("#wizardWifiAutoListScrollCon").height();
        var step = conHigh / len;
        if(len > settingNetSetWifiNumPerPage && SelectedIndex > (settingNetSetWifiNumPerPage-1)){
            var temp=parseInt((SelectedIndex-(settingNetSetWifiNumPerPage-1))*step);
            $("#wizardWifiAutoListScrollBar").css("top",temp);
        }
    }catch (ex){
        debugPrint("settingNetSetWifiSetListDownScroll:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetSetWifiSetPageOnOpen()
{
    try{
        var data = settingNetSetWifiSetPageData;
        if(data.operateData.autoSearchWifiNetNum > settingNetSetWifiNumPerPage){
            var conHigh = $("#wizardWifiAutoListScrollCon").height();
            var temp=parseInt(conHigh/data.operateData.autoSearchWifiNetNum*settingNetSetWifiNumPerPage);
            $("#wizardWifiAutoListScrollBar").css("height",temp);
            settingNetSetWifiSetPositionLocate();
            $("#wizardWifiAutoListScrollBar").css("visibility","visible");
        }else{
            $("#wizardWifiAutoListScrollBar").css("visibility","hidden");
        }
    }catch (ex){
        DBG_ERROR("settingNetSetWifiSetStyleDisplay:"+ex.message);
    }
}
function settingNetSetWifiSetStyleDisplay(){

}
function settingNetSetWifiSetPositionLocate(){
    try{
        var data = settingNetSetWifiSetPageData;
        if(data.operateData.autoSearchWifiNetNum > settingNetSetWifiNumPerPage){
            if(data.operateData.currIdx < settingNetSetWifiNumPerPage){
                data.operateData.currBeginIdx = 0;
            }else{
                data.operateData.currBeginIdx = data.operateData.currIdx - (settingNetSetWifiNumPerPage-1);
            }
            var conHigh = $("#wizardWifiAutoListScrollCon").height();
            var step = parseInt(conHigh/data.operateData.autoSearchWifiNetNum);
            var top = -(data.operateData.currBeginIdx*80);
            $("#settingNetSetWifiAutoResultUl").css("top",top+"px");
            var scrollTop = step * data.operateData.currBeginIdx;
            $("#wizardWifiAutoListScrollBar").css("top",scrollTop+"px");
        }
    }catch (ex){
        DBG_ERROR("settingNetSetWifiSetPositionLocate:"+ex.message);
    }
}

function settingNetSetWifiLinkChangeCallBack(state){
    debugPrint("settingNetSetWifiLinkChangeCallBack:state"+state,DebugLevel.ALWAYS);
    if(state == 0){
        var data = settingNetSetWifiSetPageData;
        var connSSID = model.network.getSsid();
        var connSecType = model.network.getEnumEncryption();
        var connAuthType = model.network.getEnumAuthentication();
        var connPassword = model.network.getEncryptionPassphrase();
        debugPrint("settingNetSetWifiLinkChangeCallBack:"+connSSID+","+connSecType+","+connAuthType+","+connPassword,DebugLevel.ALWAYS);
        data.operateData.connWifiPara.connState = 1;
        data.operateData.connWifiPara.connSSID = connSSID;
        data.operateData.connWifiPara.connAuthType = connAuthType;
        data.operateData.connWifiPara.connSecType = connSecType;
        data.operateData.connWifiPara.connPassword = connPassword;
    }else{
        model.network.onEnumLinkChaged = null;
    }
}

/*******************************************************************
 name:wizardNetSetWifiPageEscHandle
 description:从wifi设置页返回
 input:
 output:
 return
 *******************************************************************/
function settingNetSetWifiSetPageEscHandle(){
    hiWebOsFrame.NetSetWifiSetPage.close();
    hiWebOsFrame.NetSetMainPage.close();

    hiWebOsFrame.settingsFirst.hiFocus();

    hiWebOsFrame.NetSetWifiSetPage.destroy();
    hiWebOsFrame.NetSetMainPage.destroy();
}

function settingNetSetWifiSetPageOnFocus(){
    var opData = settingNetSetWifiSetPageData.operateData;
    try{
        if(tv && !$.isEmptyObject(opData.lastConnWifiPara) && opData.netAvailableFlag == 0){
            DBG_ALWAYS("setSettingNetSetWifiSetPageConnState:start remember last wifi:"+opData.lastConnWifiPara.connSSID);
            model.network.setSsid(opData.lastConnWifiPara.connSSID);
            model.network.setEnumAuthentication(opData.lastConnWifiPara.connAuthType);
            model.network.setEnumEncryption(opData.lastConnWifiPara.connSecType);
            model.network.setEncryptionPassphrase(opData.lastConnWifiPara.connPassword);
            model.network.WirelessSet();
        }
    }catch (ex){
        DBG_ERROR("settingNetSetWifiSetPageOnFocus:"+ex.message);
    }

}
function settingNetSetWifiSetPageOnDestroy(){
    try{
        hiWebOsFrame.NetSetWifiSetPage = null;
        if(tv == true){
            model.network.onEnumLinkChaged = null;
        }
    }catch (ex){
        debugPrint("settingNetSetWifiSetPageOnDestroy:"+ex.message,DebugLevel.ERROR);
    }

}