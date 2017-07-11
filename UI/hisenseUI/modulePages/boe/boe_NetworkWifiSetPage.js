/**
 * Created by Admin on 14-6-18.
 */
function getboeNetSetWifiSetPageData(opt){
    opt.CaE = [
        {
            "id":"boeNetworkManualAddBtn",
            "description":"改变按钮",
            "CaEType":"Container",
            "CaE":{
                "id":"boeNetSetWifiSetAddNetImg",
                "description":"",
                "CaEType":"span"
            },
            "classes":{
                "normal":"boeWifiSetImgBtnNormal",
                "focus":"boeWifiSetImgBtnFocus"
            },
            "nav":{
                "upTo":"boeNetworkWifiAutoResultUl",
                "rightTo":"boeNetSetWifiSetRefreshBtn"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetWifiManuAddHandle"
            }
        },
        {
            "id":"boeNetSetWifiSetRefreshBtn",
            "description":"手动刷新按钮",
            "CaEType":"Container",
            "CaE":{
                "id":"boeNetSetWifiSetRefreshImg",
                "description":"",
                "CaEType":"span"
            },
            "classes":{
                "normal":"boeWifiSetImgBtnNormal","focus":"boeWifiSetImgBtnFocus"
            },
            "nav":{
                "upTo":"boeNetworkWifiAutoResultUl",
                "leftTo":"boeNetworkManualAddBtn",
                "rightTo":"boeNetSetWifiSetWPSBtn"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetWifiSetRefreshNet"
            }
        },
        {
            "id":"boeNetSetWifiSetWPSBtn",
            "description":"手动刷新按钮",
            "CaEType":"div",
            "classes":{
                "normal":"boeWifiSetImgBtnNormal","focus":"boeWifiSetImgBtnFocus"
            },
            "nav":{
                "upTo":"boeNetworkWifiAutoResultUl",
                "leftTo":"boeNetSetWifiSetRefreshBtn"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetCreateWifiWPSPage",
                "befRightHandler":"boeWifiSetPageTonNextPage"
            }
        },
        {
            "id":"boeNetSetWifiSetWPS",
            "description":"",
            "CaEType":"span"
        },

        {
            "id":"boeNetworkWifiAutoResultUl",
            "description":"搜索到的无线网络",
            "CaEType":"Ul",
            "oriCaE":[
                {
                    "id":"boeNetworkWifiName",
                    "description":"无线名称",
                    "CaEType":"span",
                    "strFilter":true
                },
                {
                    "id":"boeNetworkWifiConnState",
                    "description":"连接状态",
                    "CaEType":"span"
                },
                {
                    "id":"boeNetworkWifiSecType",
                    "description":"安全类型",
                    "CaEType":"span"
                },
                {
                    "id":"boeNetworkWifiSecImg",
                    "description":"加锁类型",
                    "CaEType":"img"
                },
                {
                    "id":"boeNetworkWifiStateImg",
                    "description":"无线状态",
                    "CaEType":"img"
                }
            ],
            "UlConfig":{
                "NavigationBarDataItem":["boeNetworkWifiName","boeNetworkWifiConnState","boeNetworkWifiSecType","boeNetworkWifiSecImg","boeNetworkWifiStateImg"]
                //"PageSize":5
            },
            "classes":{
                "normal":"navNetworkWifiAutoResultLiNormal","focus":"navNetworkWifiAutoResultLiFocus",
                "dataSelected":"navNetworkWifiAutoResultLiNormal"
            },
            "nav":{
                "downTo":"boeNetworkManualAddBtn"
            },
            "handler":{
                "befDownHandler":"boeNetSeWifiDelMarquee",
                "befUpHandler":"boeNetSeWifiDelMarquee",
                "aftUpHandler":"boeWifiAutoListUpHandler",
                "aftDownHandler":"boeWifiAutoListDownHandler",
                "aftEnterHandler":"boeWifiAutoItemEnterHandler",
                "befRightHandler":"boeWifiSetPageTonNextPage"
            }
        }
    ];
    boeInitNetSetWifiSetPage();
    return boeNetSetWifiSetPageData;
}
var boeNetSetWifiSetPageData={
    "boeNetSetWifiSetHeadText":{"Data":"Network Setup"},
    "boeNetSetWifiSetTypeTitle":{"Data":"Advanced Settings"},
    "boeNetSetWifiSetAutoTitle":{"Data":"Valuable Network"},
    "boeNetworkManualAddBtn":{"Data":{
        "boeNetSetWifiSetAddNetImg":{"Data":""}
    }},
    "boeNetSetWifiSetRefreshBtn":{"Data":{
        "boeNetSetWifiSetRefreshImg":{"Data":""}
    }},
    "boeNetSetWifiSetWPS":{"Data":"WPS"},
    "boeNetworkWifiAutoResultUl":{
        "Data":[
            {
                "boeNetworkWifiName":{"Data":"HIPM"},
                "boeNetworkWifiConnState":{"Data":"connected"},
                "boeNetworkWifiSecType":{"Data":"WPA-WPA2-PSK"},
                "boeNetworkWifiSecImg":{"Data":"img/network/wifilock.png"},
                "boeNetworkWifiStateImg":{"Data":"img/network/wifi/wifi-1.png"}
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
//    "wifiConnState":false,
//    "wifiSecType":"",
//    "wifiState":1
//}
        "wifiSetType":0,
        "wifiSecurityType":["","WEP","WEP","WEP","WPA","WPA","WPA","WPA","WPA","WPA","WPA2","WPA2","WPA2","WPA2","WPA2","WPA2","WPA/WPA2","WPA/WPA2","WPA","WPA2","802.1x","802.1x","802.1x"],
        "currBeginIdx":0,
        "currIdx":0,
        "currState":0,
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
        }
    },

    "langData":{
        "Add Wireless Network":["Add Wireless Network"],
        "Connected":["Connected"]
    },
    rewrite:"boeRewriteWifiSetPage"
}


function boeInitNetSetWifiSetPage(){
    try{
        var data = boeNetSetWifiSetPageData;
        data.operateData.autoSearchWifiNetResult = [];
        if(tv == false){
            data.operateData.autoSearchWifiNetNum = 60;

            var autoSearchWifiNetNum = data.operateData.autoSearchWifiNetNum;

            for(var i = 0;i < autoSearchWifiNetNum && i < 5;i++){
                var itemData = {
                    "wifiName":"aaaaaaaaaaaaa",
                    "wifiConnState":true,
                    "wifiSecType":1,
                    "wifiState":1
                }
                data.operateData.autoSearchWifiNetResult.push(itemData);
            }
            for(var i = 6;i < autoSearchWifiNetNum;i++){
                var itemData = {
                    "wifiName":"bbbbbbbbbbbbbbbbbb",
                    "wifiConnState":true,
                    "wifiSecType":0,
                    "wifiState":1
                }
                data.operateData.autoSearchWifiNetResult.push(itemData);
            }
            data.operateData.autoSearchWifiNetNum = data.operateData.autoSearchWifiNetResult.length;
            data.operateData.currState = 1;
            data.operateData.currIdx = 20;
            data.operateData.currBeginIdx = 20;

        }else{
            data.operateData.autoSearchWifiNetNum = 0;
            data.operateData.currState = 0;
            data.operateData.currIdx = 0;
            data.operateData.currBeginIdx = 0;
            data.operateData.connWifiPara.connState = 0;
            ///var apExistFlag = getSettingChSetApExitFlag();
            var autoSearchWifiNetNum =  model.network.getAccess_pointsCount();
            debugPrint("wizardInitNetSetWifiSetPage:"+autoSearchWifiNetNum,DebugLevel.ALWAYS);
            if(autoSearchWifiNetNum > 0){
                var SSIDArray = model.network.getAccess_pointsSsid();
                var securityArray = model.network.getAccess_pointsEncrypted();
                var authArray = model.network.getAccess_pointsAuthentication();
                var signalArray = model.network.getAccess_pointsSignal();
                debugPrint("wizardInitNetSetWifiSetPage:SSIDArray="+SSIDArray.length+
                ",securityArray"+securityArray.length+
                ",authentication"+authArray.length+
                ",signalArray"+signalArray.length);
                for(var i = 0; i < autoSearchWifiNetNum; i++){
                    if(SSIDArray[i].length > 0){
                        var itemData = {
                            "wifiName":"",
                            "wifiConnState":false,
                            "wifiSecType":1,
                            "wifiAuthType":0,
                            "wifiState":1
                        }
                        itemData.wifiName = SSIDArray[i];
                        itemData.wifiConnState = false;
                        itemData.wifiSecType = securityArray[i];
                        itemData.wifiAuthType = authArray[i];
                        itemData.wifiState = signalArray[i];
                        debugPrint("wizardInitNetSetWifiSetPage:"+itemData.wifiName+","+itemData.wifiConnState+","+itemData.wifiSecType+","+itemData.wifiAuthType+","+itemData.wifiState);
                        data.operateData.autoSearchWifiNetResult.push(itemData);
                    }else{
                        debugPrint("wizardInitNetSetWifiSetPage:"+SSIDArray[i]+","+securityArray[i]+","+authArray[i]+","+signalArray[i],DebugLevel.ALWAYS);
                    }
                }
                data.operateData.autoSearchWifiNetNum = data.operateData.autoSearchWifiNetResult.length;
                debugPrint("wizardInitNetSetWifiSetPage:data.operateData.autoSearchWifiNetNum="+data.operateData.autoSearchWifiNetNum,DebugLevel.ALWAYS)
            }
        }
    }catch (ex){
        debugPrint("wizardInitNetSetWifiSetPage"+ex.message,DebugLevel.ERROR);
    }
}

function boeRewriteWifiSetPage(data){
    try{
        var WifiAutoResultUl = data.boeNetworkWifiAutoResultUl;
        debugPrint("wizardRewriteWifiSetPage:autoSearchWifiNetNum="+data.operateData.autoSearchWifiNetNum );
        if(data.operateData.autoSearchWifiNetNum == 0){
            debugPrint("wizardRewriteWifiSetPage:wifi num is 0!!");
            WifiAutoResultUl.Data = [];
            WifiAutoResultUl.disable = true;
        }else{
            WifiAutoResultUl.disable = false;
            try{
                if(WifiAutoResultUl.Data.length > data.operateData.autoSearchWifiNetNum){
                    WifiAutoResultUl.Data.splice(data.operateData.autoSearchWifiNetNum);
                }else if(WifiAutoResultUl.Data.length < data.operateData.autoSearchWifiNetNum){
                    while(WifiAutoResultUl.Data.length < data.operateData.autoSearchWifiNetNum){
                        var itemData ={
                            "boeNetworkWifiName":{"Data":""},
                            "boeNetworkWifiConnState":{"Data":""},
                            "boeNetworkWifiSecType":{"Data":""},
                            "boeNetworkWifiStateImg":{"Data":""},
                            "boeNetworkWifiSecImg":{"Data":""}
                        }
                        WifiAutoResultUl.Data.push(itemData);
                    }
                }
            }catch (ex){
                debugE("boeRewriteWifiSetPage:"+ex.message);
            }

            $.each(data.operateData.autoSearchWifiNetResult,function(idx,item){
                try{
                    itemData = WifiAutoResultUl.Data[idx];
                    itemData.boeNetworkWifiName.Data = item.wifiName;
                }catch (ex){
                    debugE("boeRewriteWifiSetPage:"+ex.message);
                }
                    itemData.boeNetworkWifiConnState.Data = "";
                    itemData.boeNetworkWifiSecType.Data = data.operateData.wifiSecurityType[item.wifiSecType];

                itemData.boeNetworkWifiSecImg.Data = item.wifiSecType == 0 ? "":"img/network/wifilock-un.png";
                if(item.wifiState <= 25){
                    itemData.boeNetworkWifiStateImg.Data ="img/network/wifi/wifi-1-un.png";
                }else if(item.wifiState > 25 && item.wifiState <= 50){
                    itemData.boeNetworkWifiStateImg.Data ="img/network/wifi/wifi-2-un.png";
                }else if(item.wifiState > 50 && item.wifiState <= 75){
                    itemData.boeNetworkWifiStateImg.Data ="img/network/wifi/wifi-3-un.png";
                }else{
                    itemData.boeNetworkWifiStateImg.Data ="img/network/wifi/wifi-4-un.png";
                }

                var isSelected = data.operateData.currIdx == idx ? 1 : 0;
                if(!!isSelected) {
                    itemData.boeNetworkWifiSecImg.Data = itemData.boeNetworkWifiSecImg.Data.replace('-un','');
                    itemData.boeNetworkWifiStateImg.Data = itemData.boeNetworkWifiStateImg.Data.replace('-un','');
                }

            })
            try {
                if (data.operateData.currState == 1) {
                    debugPrint("wizardRewriteWifiSetPage:data.operateData.currState == 1");
                    WifiAutoResultUl.Data[data.operateData.currIdx].boeNetworkWifiConnState.Data = "Connected";
                }
            }
            catch (ex){
                debugE("boeRewriteWifiSetPage:"+ex.message);
            }
            WifiAutoResultUl.SelectedIndex = data.operateData.currIdx;
            WifiAutoResultUl.DataSelectedIndex = data.operateData.currIdx;
        }
    }catch (ex){
        debugPrint("wizardRewriteWifiSetPage"+ex.message,DebugLevel.ERROR);
    }

}



/*******************************************************************
 name:boeNetSetWifiManuAddHandle
 description:打开手动添加无线网络页
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiManuAddHandle(){
    var data = boeNetSetWifiSetPageData;
    data.operateData.wifiSetType = 1;
    hiWebOsFrame.createPage('boe_NetworkWifiAddDialog',null,null, null,function(a){
        hiWebOsFrame.boe_NetworkWifiSetPage.close();
        hiWebOsFrame.boe_NetworkWifiAddDialog = a;
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


function getboeNetSetWifiPageConnPare(){
    try{
        var data = boeNetSetWifiSetPageData;
        var wifiConnPare ={
            "SSID":"",
            "secType":0,
            "authType":0,
            "password":""
        }
        wifiConnPare.SSID = data.operateData.currSSIDName;
        wifiConnPare.secType = data.operateData.currSecType;
        wifiConnPare.authType = data.operateData.currAuthType;
        if(data.operateData.currState == 1 && data.operateData.connWifiPara.connSSID == data.operateData.currSSIDName){

            if((data.operateData.connWifiPara.connPassword == "") && (model.network.getEnumNetworkAvailable() == 1))
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
function setboeNetSetWifiSetPageConnPare(SSID,secType,authType,signal){
    debugPrint("setboeNetSetWifiSetPageConnPare:"+SSID+","+secType+","+authType,DebugLevel.ALWAYS);
    var data = boeNetSetWifiSetPageData;
    data.operateData.currSSIDName = SSID;
    data.operateData.currSecType = secType;
    data.operateData.currAuthType = authType;
    data.operateData.currSingnal = signal;
}

function setboeNetworkWifiSetPageConnState(){
    var data = boeNetSetWifiSetPageData;
    if(tv == true){
        var connSSID = model.network.getSsid();
        data.operateData.currState = model.network.getEnumNetworkAvailable();
        data.operateData.connWifiPara.connSSID = connSSID;
        debugPrint("[xuehongfeng]"+data.operateData.currState,DebugLevel.ALWAYS);
    }else{
        data.operateData.currState = 1;
    }
    debugPrint("setNavNetworkWifiSetPageConnState:"+data.operateData.currState+","+data.operateData.wifiSetType,DebugLevel.ALWAYS);
    if(data.operateData.wifiSetType == 0){
        hiWebOsFrame.boe_NetworkWifiSetPage.rewriteDataOnly();
    }
}




/*******************************************************************
 name:boeWifiAutoItemEnterHandler
 description:在自动搜索页中选中其中一项进行的处理
 input:
 output:
 return
 *******************************************************************/
function boeWifiAutoItemEnterHandler(){
    var data = boeNetSetWifiSetPageData;
    data.operateData.wifiSetType = 0;
    debugPrint("[xuehongfeng] is "+data.operateData.currSecType,DebugLevel.ALWAYS);
    try{
        if(tv == true){
            model.network.setLink_quality(data.operateData.currSingnal);
        }
        if(data.operateData.currSecType == 0){
            hiWebOsFrame.createPage('boe_NetworkConnNetDialog',null, hiWebOsFrame.boe_NetworkWifiSetPage, null,function(a){//boe_search_wifi
                hiWebOsFrame.boe_NetworkWifiSetPage.close();
                hiWebOsFrame.boe_NetworkConnNetDialog = a;
                boeSetNetSetWifiConnPara(getboeNetSetWifiPageConnPare());
                a.open();
                a.hiFocus();
            });
        }else{
            hiWebOsFrame.createPage('boe_NetworkWifiPWInputDialog',null, hiWebOsFrame.boe_NetworkWifiSetPage, null,function(a){
                hiWebOsFrame.boe_NetworkWifiSetPage.close();
                hiWebOsFrame.boe_NetworkWifiPWInputDialog = a;
                setboeNetSetPwInputOperateData(getboeNetSetWifiPageConnPare());
                a.rewriteDataOnly();
                a.open();
                a.hiFocus();
            });
        }
    }catch (ex){
        debugPrint("boeWifiAutoItemEnterHandler:"+ex.message,DebugLevel.ERROR);
    }

}

function boeNetSeWifiDelMarquee(){
    var data = boeNetSetWifiSetPageData;
    var txt = data.operateData.autoSearchWifiNetResult[this.SelectedIndex].wifiName;
    //debugPrint("[xuehongfeng] is down handler"+this.SelectedIndex,DebugLevel.ALWAYS);
    //debugPrint("[xuehongfeng] is down handler"+txt,DebugLevel.ALWAYS);
    var currId = $("#"+this.id+" li").eq(this.SelectedIndex);
    $(currId).children(".navNetworkWifiName").html(txt);
    //debugPrint("boeWifiAutoListUpHandler:this.SelectedIdx="+this.SelectedIndex);
}
function boeWifiAutoListUpHandler(opedata,data){
    try{
        var data = boeNetSetWifiSetPageData;
        var txt = data.operateData.autoSearchWifiNetResult[this.SelectedIndex].wifiName;
        debugPrint("wizardWifiAutoListUpHandler:this.SelectedIdx="+data.operateData.autoSearchWifiNetResult[this.SelectedIndex].wifiName,DebugLevel.ALWAYS);
        if(txt.length > 12){
            var currId = $("#"+this.id+" li").eq(this.SelectedIndex);

            $(currId).children(".navNetworkWifiName").html('<marquee>'+txt +'</marquee>');
        }

        //debugPrint("boeWifiAutoListUpHandler:this.SelectedIdx="+this.SelectedIndex,DebugLevel.ALWAYS);
        //var currentFocusIdx =(this.BeginIdx == 0 &&  this.SelectedIndex < this.PageSize)?this.SelectedIndex:(this.SelectedIndex - this.BeginIdx) ;
        data.operateData.currIdx = this.SelectedIndex;

        if(data.operateData.currBeginIdx > this.SelectedIndex){
            data.operateData.currBeginIdx = data.operateData.currBeginIdx - 1;
            var top = -(data.operateData.currBeginIdx*100);
            $("#boeNetworkWifiAutoResultUl").css("top",top+"px");
        }
        var selectWifiPare = data.operateData.autoSearchWifiNetResult[this.SelectedIndex];
        setboeNetSetWifiSetPageConnPare(selectWifiPare.wifiName,selectWifiPare.wifiSecType,selectWifiPare.wifiAuthType,selectWifiPare.wifiState);

       // networkWifiAutoListArrowHandler(this.SelectedIndex,data.operateData.autoSearchWifiNetResult.length);
        boeWifiAutoListUpScroll(this.SelectedIndex);

        //networkWifiAutoListSwitchImg(((currentFocusIdx+1)>=this.PageSize? -1:(currentFocusIdx+1)),currentFocusIdx);
    }catch (ex){
        debugPrint("boeWifiAutoListUpHandler:"+ex.message,DebugLevel.ERROR);
    }
}


function boeWifiAutoListDownHandler(opedata,data){
    try{
        var data = boeNetSetWifiSetPageData;
        var txt = data.operateData.autoSearchWifiNetResult[this.SelectedIndex].wifiName;
        debugPrint("wizardWifiAutoListUpHandler:this.SelectedIdx="+data.operateData.autoSearchWifiNetResult[this.SelectedIndex].wifiName,DebugLevel.ALWAYS);

        if(txt.length > 12){
            var currId = $("#"+this.id+" li").eq(this.SelectedIndex);
            $(currId).children(".navNetworkWifiName").html('<marquee>'+txt +'</marquee>');
        }
        //debugPrint("boeWifiAutoListDownHandler:this.SelectedIdx="+this.SelectedIndex,DebugLevel.ALWAYS);
        //var currentFocusIdx =  this.SelectedIndex < this.PageSize?this.SelectedIndex:(this.SelectedIndex - this.BeginIdx) ;
        data.operateData.currIdx = this.SelectedIndex;
        if(data.operateData.currBeginIdx+4 < this.SelectedIndex){
            data.operateData.currBeginIdx = data.operateData.currBeginIdx + 1;
            var top = -(data.operateData.currBeginIdx*100);
            $("#boeNetworkWifiAutoResultUl").css("top",top+"px");
        }
        var selectWifiPare = data.operateData.autoSearchWifiNetResult[this.SelectedIndex];
        setboeNetSetWifiSetPageConnPare(selectWifiPare.wifiName,selectWifiPare.wifiSecType,selectWifiPare.wifiAuthType,selectWifiPare.wifiState);
       // networkWifiAutoListArrowHandler(data.operateData.currIdx,data.operateData.autoSearchWifiNetResult.length);
        boeWifiAutoListDownScroll(this.SelectedIndex);
    }catch (ex){
        debugPrint("boeWifiAutoListDownHandler:"+ex.message,DebugLevel.ERROR);
    }
}

//function networkWifiAutoListArrowHandler(id,total_number){
//    if(total_number < 5)
//    {
//        $("#boeNetworkManualUlUpArrow").css("visibility","hidden");
//        $("#boeNetworkManualUlDownArrow").css("visibility","hidden");
//    }
//    else {
//        if (id < 5) {
//            $("#boeNetworkManualUlUpArrow").css("visibility", "hidden");
//            $("#boeNetworkManualUlDownArrow").css("visibility", "hidden");
//        }
//        else if (id > (total_number - 5)) {
//            $("#boeNetworkManualUlUpArrow").css("visibility", "hidden");
//            $("#boeNetworkManualUlDownArrow").css("visibility", "hidden");
//        }
//        else {
//            $("#boeNetworkManualUlUpArrow").css("visibility", "hidden");
//            $("#boeNetworkManualUlDownArrow").css("visibility", "hidden");
//        }
//    }
//
//}


function boeWifiAutoListUpScroll(SelectedIndex){
    try{
        var data = boeNetSetWifiSetPageData;
        var len=data.operateData.autoSearchWifiNetNum;
        var conHigh = $("#boeWifiAutoListScrollCon").height();
        var step = conHigh / len;
        if(len > 5 &&data.operateData.currBeginIdx + 1 > SelectedIndex) //在boeWifiAutoListUpHandler()函数中减过1，这里要+1
        {
            var temp=parseInt(SelectedIndex*step);
            $("#boeWifiAutoListScrollBar").css("top",temp);

        }
    }catch (ex){
        debugPrint("boeWifiAutoListUpScroll:"+ex.message,DebugLevel.ERROR);
    }
}
function boeWifiAutoListDownScroll(SelectedIndex){
    try{
        var data = boeNetSetWifiSetPageData;
        var len = data.operateData.autoSearchWifiNetNum;
        var conHigh = $("#boeWifiAutoListScrollCon").height();
        var step = conHigh / len;
        if(len > 5 && data.operateData.currBeginIdx + 3 < SelectedIndex){   //currBeginIdx在boeWifiAutoListDownHandler()函数中已经加过一次1了，所以只加3
            var temp=parseInt((SelectedIndex-4)*step);
            $("#boeWifiAutoListScrollBar").css("top",temp);
        }
    }catch (ex){
        debugPrint("boeWifiAutoListDownScroll:"+ex.message,DebugLevel.ERROR);
    }
}

function boeNetSetWifiLinkChangeCallBack(state){
    debugPrint("settingNetSetWifiLinkChangeCallBack:state"+state,DebugLevel.ALWAYS);
    if(state == 0){
        var data = boeNetSetWifiSetPageData;
        var connSSID = model.network.getSsid();
        var connSecType = model.network.getEnumEncryption();
        var connAuthType = model.network.getEnumAuthentication();
        var connPassword = model.network.getEncryptionPassphrase();
        debugPrint("boeNetSetWifiSetPageOnOpen:"+connSSID+","+connSecType+","+connAuthType+","+connPassword,DebugLevel.ALWAYS);
        data.operateData.connWifiPara.connState = 1;
        data.operateData.connWifiPara.connSSID = connSSID;
        data.operateData.connWifiPara.connAuthType = connAuthType;
        data.operateData.connWifiPara.connSecType = connSecType;
        data.operateData.connWifiPara.connPassword = connPassword;
        model.network.onEnumLinkChaged = null;
    }
}
function boeNetSetWifiSetPageOnOpen()
{
    debugPrint("boeNetSetWifiSetPageOnOpen!!");
    try{
        //hiWebOsFrame.boe_NetworkWifiSetPage.hiBlur('boeNetworkWifiAutoResultUl');
        //hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus('boeNetworkManualAddBtnNormal');
        var data = boeNetSetWifiSetPageData;
        if (data.boeNetworkWifiAutoResultUl.Data.length < 1) {
            hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus("boeNetworkManualAddBtn");
            return;
        }
        var conHigh = $("#boeWifiAutoListScrollCon").height();
        if(data.operateData.autoSearchWifiNetNum > 5){
            var temp=parseInt(conHigh/data.operateData.autoSearchWifiNetNum*5);
            $("#boeWifiAutoListScrollBar").css("height",temp);
            $("#boeWifiAutoListScrollBar").css("visibility","visible");
            var step = parseInt(conHigh/data.operateData.autoSearchWifiNetNum);
            $("#boeWifiAutoListScrollBar").css("top",0);
        }else{
            $("#boeWifiAutoListScrollBar").css("visibility","hidden");
        }
        //var wifiUl = this.getCaE('boeNetworkWifiAutoResultUl');
        //networkWifiAutoListArrowHandler(wifiUl.BeginIdx,wifiUl.PageSize,data.boeNetworkWifiAutoResultUl.Data.length,wifiUl.id);
        if(tv == true){
            var networkAvailable = model.network.getEnumNetworkAvailable();
            var currWifiState = model.network.getEnumLink();
            debugPrint("boeNetSetWifiSetPageOnOpen:currWifiState="+currWifiState+",networkAvailable="+networkAvailable,DebugLevel.ALWAYS);
            if(networkAvailable == 1){
                var connSSID = model.network.getSsid();
                var connSecType = model.network.getEnumEncryption();
                var connAuthType = model.network.getEnumAuthentication();
                var connPassword = model.network.getEncryptionPassphrase();
                debugPrint("boeNetSetWifiSetPageOnOpen:"+connSSID+","+connSecType+","+connAuthType+","+connPassword,DebugLevel.ALWAYS);
                data.operateData.currState = 1;
                data.operateData.connWifiPara.connState = 1;
                data.operateData.connWifiPara.connSSID = connSSID;
                data.operateData.connWifiPara.connAuthType = connAuthType;
                data.operateData.connWifiPara.connSecType = connSecType;
                data.operateData.connWifiPara.connPassword = connPassword;
                for(var i = 0; i < data.operateData.autoSearchWifiNetNum;i++){
                    if(connSSID == data.operateData.autoSearchWifiNetResult[i].wifiName){
                        debugPrint("boeNetSetWifiSetPageOnOpen:currIdx="+i,DebugLevel.ALWAYS);
                        data.operateData.currIdx = i;
                        hiWebOsFrame.boe_NetworkWifiSetPage.rewriteDataOnly();
                        break;
                    }
                }
            }else{
                model.network.onEnumLinkChaged = boeNetSetWifiLinkChangeCallBack;
            }
        }
        data.operateData.currBeginIdx = 0;
        if(data.operateData.autoSearchWifiNetNum > 5){
            if(data.operateData.currIdx < 5){
                data.operateData.currBeginIdx = 0;
            }else{
                data.operateData.currBeginIdx = data.operateData.currIdx - 4;
            }
        }
        //networkWifiAutoListArrowHandler(data.operateData.currIdx,data.operateData.autoSearchWifiNetResult.length);
        var top = -(data.operateData.currBeginIdx*100);
        $("#boeNetworkWifiAutoResultUl").css("top",top+"px");
        try{
            if(data.operateData.currIdx > 4)
            {
                var temp2=parseInt((data.operateData.currIdx-4) * step);
                $("#boeWifiAutoListScrollBar").css("top",temp2);

            }
        }catch (ex){
            debugPrint("boeWifiAutoListUpScroll:"+ex.message,DebugLevel.ERROR);
        }

        var selectWifiPare = data.operateData.autoSearchWifiNetResult[data.operateData.currIdx];
        setboeNetSetWifiSetPageConnPare(selectWifiPare.wifiName,selectWifiPare.wifiSecType,selectWifiPare.wifiAuthType,selectWifiPare.wifiState);
        hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus();

    }catch (ex){
        debugPrint("boeNetSetWifiSetPageOnOpen:"+ex.message,DebugLevel.ERROR);
    }
}
function getboeNetworkWifiSetType(){
    var data = boeNetSetWifiSetPageData;
    debugPrint("getboeNetworkWifiSetType:"+data.operateData.wifiSetType);
    return data.operateData.wifiSetType;
}
/*******************************************************************
 name:boeNetSetWifiPageEscHandle
 description:从wifi设置页返回
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWifiPageEscHandle(){
    hiWebOsFrame.boe_netbg_page_id.destroy();
    hiWebOsFrame.boe_NetworkWifiSetPage.destroy();
    hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_disclaimer_page_id = b;
        b.open();
        b.hiFocus();
    });
}
function boeWifiSetPageTonNextPage(){
    hiWebOsFrame.boe_netbg_page_id.destroy();
    hiWebOsFrame.boe_NetworkWifiSetPage.destroy();
    hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_complete_page_id = b;
        b.open();
        b.hiFocus();
    });
}
function boeNetSetWifiSetPageOnDestroy(){
    hiWebOsFrame.boe_NetworkWifiSetPage = null;
}
function boeNetSetWifiSetRefreshNet(){
    hiWebOsFrame.createPage("boe_search_wifi", null, hiWebOsFrame.boe_NetworkWifiSetPage, null, function (a) {
        hiWebOsFrame.boe_search_wifi = a;
        hiWebOsFrame.boe_NetworkWifiSetPage.destroy();
        a.open();
        a.hiFocus();
    });
}
function boeNetSetCreateWifiWPSPage(){
    hiWebOsFrame.createPage('boe_NetworkWifiWPS',null,null, null,function(a) {
        hiWebOsFrame.boe_NetworkWifiWPS = a;
        hiWebOsFrame.boe_NetworkWifiSetPage.close();
        a.open();
        a.hiFocus();
    })
}