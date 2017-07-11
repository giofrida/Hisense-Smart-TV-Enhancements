/**
 * Created by Admin on 14-6-18.
 */
function getSettingNetSetEtherIpSetPageData(opt){
    opt.CaE = [
        {
            "id":"settingNetSetEtherIpStatusTitle",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetEtherIpStatusValue",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetEtherIpTypeTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetEtherIpTypeValue",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetSetEtherIpTypeNav",
            "description":"IP设置方式",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingNetSetEtherIpType",
                    "description":"网络设置方式",
                    "CaEType":"div"
                }
            ],
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingNetSetEtherIpType"],
                "PageSize":2,
                "ArrowFlag":true
            },
            "classes":{
                "normal":"wizardSetItemListLi_2_Normal","focus":"wizardSetItemListLi_2_Focus",
                "dataSelected":"wizardSetItemListLi_2_Selected","disable":"wizardSetItemListLi_2_Disable"
            },
            "nav":{
                "downTo":"settingNetSetEtherIpInfoUl"
            },
            "handler":{
                "befLeftHandler":"settingNetSetEtherIpSetTypeBefLeftHandle",
                "aftLeftHandler":"settingNetSetEtherIpSetTypeEnterHandle",
                "aftRightHandler":"settingNetSetEtherIpSetTypeEnterHandle",
                "befUpHandler":"settingNetSetEtherIpSetUpToMainPage"
            }
        },
        {
            "id":"settingNetSetEtherIpInfoUl",
            "description":"IP地址信息",
            "CaEType":"Ul",
            "firstFocusId":"settingNetSetEtherIpInput0",
            "oriCaE":[
                {
                    "id":"settingNetSetEtherIpInputTitle",
                    "description":"ip头信息",
                    "CaEType":"span",
                    "classes":{
                        "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
                    }
                },
                {
                    "id":"settingNetSetEtherIpInputTitleSuffix",
                    "description":"ip头信息",
                    "CaEType":"span",
                    "classes":{
                        "normal":"wizardSetItemTitle","disable":"wizardSetItemTitleDisable"
                    }
                },
                {
                    "id":"settingNetSetEtherIpInput0",
                    "description":"ip地址第一个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetIpSetInputOnChange",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable"
                    },
                    "nav":{
                        "rightTo":"settingNetSetEtherIpInput1"
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetEtherSetClearFlag",
                        "aftRightHandler":"setSettingNetSetEtherSetClearFlag"
                    }
                },
                {
                    "id":"settingNetSetEtherIpInput1",
                    "description":"ip地址第2个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetIpSetInputOnChange",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable","DataSelectedIndex":"settingIpAddrInputNormal"
                    },
                    "nav":{
                        "leftTo":"settingNetSetEtherIpInput0","rightTo":"settingNetSetEtherIpInput2"
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetEtherSetClearFlag",
                        "aftRightHandler":"setSettingNetSetEtherSetClearFlag"
                    }
                },
                {
                    "id":"settingNetSetEtherIpInput2",
                    "description":"ip地址第3个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetIpSetInputOnChange",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable"
                    },
                    "nav":{
                        "leftTo":"settingNetSetEtherIpInput1","rightTo":"settingNetSetEtherIpInput3"
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetEtherSetClearFlag",
                        "aftRightHandler":"setSettingNetSetEtherSetClearFlag"
                    }
                },
                {
                    "id":"settingNetSetEtherIpInput3",
                    "description":"ip地址第4个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
//                    "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"settingNetSetIpSetInputOnChange",
//                    "maxlength":3,
                    "classes":{
                        "normal":"settingIpAddrInputNormal","focus":"settingIpAddrInputFocus","disable":"settingIpAddrInputDisable","DataSelectedIndex":"settingIpAddrInputNormal"
                    },
                    "nav":{
                        "leftTo":"settingNetSetEtherIpInput2","rightTo":""
                    },
                    "handler":{
                        "aftLeftHandler":"setSettingNetSetEtherSetClearFlag",
                        "aftRightHandler":"setSettingNetSetEtherSetClearFlag"
                    }
                }

            ],
            "UlConfig":{
                "UlDataItem":["settingNetSetEtherIpInputTitle","settingNetSetEtherIpInputTitleSuffix","settingNetSetEtherIpInput0","settingNetSetEtherIpInput1","settingNetSetEtherIpInput2","settingNetSetEtherIpInput3"],
                "PageSize":5
            },
            "nav":{
                "upTo":"settingNetSetEtherIpTypeNav","downTo":""
            },
            "handler":{
                "aftUpHandler":"setSettingNetSetEtherSetClearFlag",
                "aftDownHandler":"setSettingNetSetEtherSetClearFlag"
            },
            "classes":{

                "normal":"settingEtherIPV4InfoLi","focus":"settingEtherIPV4InfoLi",
                "disable":"settingEtherIPV4InfoLi",
                "DataSelectedIndex":"settingEtherIPV4InfoLi","selected":"settingEtherIPV4InfoLi"
            }
        }
    ];
    settingInitNetSetEtherIpSetPageData();
    getSettingNetSetEtherIpSetOriConfigType();
    return settingNetSetEtherIpSetPageData;
}
var settingNetSetEtherIpSetPageData={
    "settingNetSetEtherIpStatusTitle":{"Data":"Ethernet"},
    "settingNetSetEtherIpStatusValue":{"Data":""},
    "settingNetSetEtherIpTypeTitle":{"Data":"IP Setting Mode"},
    "settingNetSetEtherIpTypeValue":{"Data":"DHCP"},
    "settingNetSetEtherIpTypeNav":{
        "Data":[
            {
                "settingNetSetEtherIpType":{"Data":"DHCP"}
            },
            {
                "settingNetSetEtherIpType":{"Data":"Manual"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingNetSetEtherIpInfoUl":{
        "Data":[
            {
                "settingNetSetEtherIpInputTitle":{"Data":"IP Address"},
                "settingNetSetEtherIpInputTitleSuffix":{"Data":":"},
                "settingNetSetEtherIpInput0":{"Data":"0"},
                "settingNetSetEtherIpInput1":{"Data":"0"},
                "settingNetSetEtherIpInput2":{"Data":"0"},
                "settingNetSetEtherIpInput3":{"Data":"0"}
            },
            {
                "settingNetSetEtherIpInputTitle":{"Data":"Netmask"},
                "settingNetSetEtherIpInputTitleSuffix":{"Data":":"},
                "settingNetSetEtherIpInput0":{"Data":"0"},
                "settingNetSetEtherIpInput1":{"Data":"0"},
                "settingNetSetEtherIpInput2":{"Data":"0"},
                "settingNetSetEtherIpInput3":{"Data":"0"}
            },
            {
                "settingNetSetEtherIpInputTitle":{"Data":"Gateway"},
                "settingNetSetEtherIpInputTitleSuffix":{"Data":":"},
                "settingNetSetEtherIpInput0":{"Data":"0"},
                "settingNetSetEtherIpInput1":{"Data":"0"},
                "settingNetSetEtherIpInput2":{"Data":"0"},
                "settingNetSetEtherIpInput3":{"Data":"0"}
            },
            {
                "settingNetSetEtherIpInputTitle":{"Data":"DNS Server 1"},
                "settingNetSetEtherIpInputTitleSuffix":{"Data":":"},
                "settingNetSetEtherIpInput0":{"Data":"0"},
                "settingNetSetEtherIpInput1":{"Data":"0"},
                "settingNetSetEtherIpInput2":{"Data":"0"},
                "settingNetSetEtherIpInput3":{"Data":"0"}
            },
            {
                "settingNetSetEtherIpInputTitle":{"Data":"DNS Server 2"},
                "settingNetSetEtherIpInputTitleSuffix":{"Data":":"},
                "settingNetSetEtherIpInput0":{"Data":"0"},
                "settingNetSetEtherIpInput1":{"Data":"0"},
                "settingNetSetEtherIpInput2":{"Data":"0"},
                "settingNetSetEtherIpInput3":{"Data":"0"}
            }
        ],
        "SelectedIndex":0,
        "disable":false
    },
    "operateData":{
        "netAvailableFlag":0,
        "ipConfigType":0,// 0,automatic,1:manual
        "ipAddress":"",
        "subnet_Mask":"",
        "default_Gateway":"",
        "primary_DNS":"",
        "secondary_DNS":"",
        "clearFlag":0
    },
    "langData":{
        "Ethernet":["Ethernet"],
        "Disconnected":["Disconnected"],
        "Connected":["Disconnected"],
        "IP Setting":["IP Setting"],
        "IP Setting Mode":["IP Setting Mode"],
        "DHCP":["DHCP"],
        "Manual":["Manual"],
        "IP Address":["IP Address"],
        "Netmask":["Netmask"],
        "Gateway":["Gateway"],
        "DNS Server 1":["DNS Server 1"],
        "DNS Server 2":["DNS Server 2"]
    },
    rewrite:"settingRewriteEtherIpSetPage"
}

/*******************************************************************
 name:settingInitNetSetEtherIpSetPageData
 description:初始化有线
 input:
 output:
 return
 *******************************************************************/
function settingInitNetSetEtherIpSetPageData(){
    try{
        var operateData = settingNetSetEtherIpSetPageData.operateData;
        operateData.clearFlag = 1;
        if(tv == false){
            operateData.netAvailableFlag = 0;
            operateData.ipConfigType = 0;
            operateData.ipAddress = "2.2.3.176";
            operateData.subnet_Mask = "255.255.255.0";
            operateData.default_Gateway = "2.2.2.1";
            operateData.primary_DNS = "202.102.128.68";
            operateData.secondary_DNS = "219.147.1.66";
        }else{
            operateData.netAvailableFlag = model.network.getEnumNetworkAvailable();
            operateData.ipConfigType = model.network.getEnumIp_config();
            operateData.ipAddress = model.network.getIp_address();
            operateData.subnet_Mask = model.network.getSubnet_mask();
            operateData.default_Gateway = model.network.getGateway();
            operateData.primary_DNS = model.network.getDns_server_1();
            operateData.secondary_DNS = model.network.getDns_server_2();
            debugPrint("settingInitNetSetEtherIpSetPageData:ipConfigType="+operateData.ipConfigType);
            debugPrint(operateData.ipAddress);
            debugPrint(operateData.subnet_Mask);
            debugPrint(operateData.default_Gateway);
            debugPrint(operateData.primary_DNS);
            debugPrint(operateData.secondary_DNS);
        }
    }catch (ex){
        debugPrint("settingInitNetSetEtherIpSetPageData:"+ex.message,DebugLevel.ERROR);
    }
}
function getSettingNetSetEtherIpSetOriConfigType(){
    var operateData = settingNetSetEtherIpSetPageData.operateData;
    operateData.oriIpConfigType = operateData.ipConfigType;
}
/*******************************************************************
 name:settingRewriteEtherIpSetPage
 description:刷新有线设置页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteEtherIpSetPage(data){
    try{
        if(data.operateData.netAvailableFlag == 0){
            data.settingNetSetEtherIpStatusValue.Data = "Disconnected";
        }else{
            data.settingNetSetEtherIpStatusValue.Data = "Connected";
        }

        var ipAddrArray = data.operateData.ipAddress.split(".");
        if(ipAddrArray.length != 4){
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput0.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput1.Data ="";
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput2.Data ="";
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput3.Data ="";
        }else{
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput0.Data = ipAddrArray[0];
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput1.Data = ipAddrArray[1];
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput2.Data = ipAddrArray[2];
            data.settingNetSetEtherIpInfoUl.Data[0].settingNetSetEtherIpInput3.Data = ipAddrArray[3];
        }
        var subnetMaskArray = data.operateData.subnet_Mask.split(".");
        if(subnetMaskArray.length != 4){
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput0.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput1.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput2.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput3.Data = "";
        }else{
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput0.Data = subnetMaskArray[0];
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput1.Data = subnetMaskArray[1];
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput2.Data = subnetMaskArray[2];
            data.settingNetSetEtherIpInfoUl.Data[1].settingNetSetEtherIpInput3.Data = subnetMaskArray[3];
        }

        var default_GatewayArray = data.operateData.default_Gateway.split(".");
        if(default_GatewayArray.length != 4){
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput0.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput1.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput2.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput3.Data = "";
        }else{
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput0.Data = default_GatewayArray[0];
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput1.Data = default_GatewayArray[1];
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput2.Data = default_GatewayArray[2];
            data.settingNetSetEtherIpInfoUl.Data[2].settingNetSetEtherIpInput3.Data = default_GatewayArray[3];
        }
        var primary_DNSArray = data.operateData.primary_DNS.split(".");
        if(primary_DNSArray.length != 4){
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput0.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput1.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput2.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput3.Data = "";
        }else{
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput0.Data = primary_DNSArray[0];
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput1.Data = primary_DNSArray[1];
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput2.Data = primary_DNSArray[2];
            data.settingNetSetEtherIpInfoUl.Data[3].settingNetSetEtherIpInput3.Data = primary_DNSArray[3];
        }

        var secondary_DNSArray = data.operateData.secondary_DNS.split(".");
        if(secondary_DNSArray.length != 4){
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput0.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput1.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput2.Data = "";
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput3.Data = "";
        }else{
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput0.Data = secondary_DNSArray[0];
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput1.Data = secondary_DNSArray[1];
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput2.Data = secondary_DNSArray[2];
            data.settingNetSetEtherIpInfoUl.Data[4].settingNetSetEtherIpInput3.Data = secondary_DNSArray[3];
        }
        data.settingNetSetEtherIpTypeNav.DataSelectedIndex = data.operateData.ipConfigType;
        data.settingNetSetEtherIpTypeNav.SelectedIndex = data.operateData.ipConfigType;
        data.settingNetSetEtherIpTypeValue.Data = data.settingNetSetEtherIpTypeNav.Data[data.operateData.ipConfigType].settingNetSetEtherIpType.Data;
        if(data.operateData.ipConfigType == 0){
            //自动方式不可输入
            debugPrint("settingRewriteEtherIpSetPage:"+data.operateData.ipConfigType);
            data.settingNetSetEtherIpInfoUl.disable = true;
            for(var idx = 0;idx < data.settingNetSetEtherIpInfoUl.Data.length;idx++){
                var item = data.settingNetSetEtherIpInfoUl.Data[idx];
                item.settingNetSetEtherIpInputTitle.disable = true;
                item.settingNetSetEtherIpInputTitleSuffix.disable = true;
                item.settingNetSetEtherIpInput0.disable = true;
                item.settingNetSetEtherIpInput1.disable = true;
                item.settingNetSetEtherIpInput2.disable = true;
                item.settingNetSetEtherIpInput3.disable = true;
            }

        }else{
            debugPrint("settingRewriteEtherIpSetPage:"+data.operateData.ipConfigType);
            data.settingNetSetEtherIpInfoUl.disable = false;
            for(var idx = 0;idx < data.settingNetSetEtherIpInfoUl.Data.length;idx++){
                var item = data.settingNetSetEtherIpInfoUl.Data[idx];
                item.settingNetSetEtherIpInputTitle.disable = false;
                item.settingNetSetEtherIpInputTitleSuffix.disable = false;
                item.settingNetSetEtherIpInput0.disable = false;
                item.settingNetSetEtherIpInput1.disable = false;
                item.settingNetSetEtherIpInput2.disable = false;
                item.settingNetSetEtherIpInput3.disable = false;
            }
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        }
        else {
        }
    }catch (ex){
        DBG_ERROR("settingRewriteEtherIpSetPage"+ex.message);
    }
}
/*******************************************************************
 name:settingNetSetIpSetInputOnChange
 description:manual input on change
 input:
 output:
 return
 *******************************************************************/
function settingNetSetIpSetInputOnChange(){
    try{
        debugPrint("settingNetSetIpSetInputOnChange:"+this.id+","+$("#"+this.id).val(),DebugLevel.ALWAYS);
        var data = settingNetSetEtherIpSetPageData;
        if(data.operateData.clearFlag == 1){
            if(!!$("#"+this.id).val()){
                var currInputVal = parseInt($("#"+this.id).val(),10)%10;
            }else{
                var currInputVal = 0;
            }
            $("#"+this.id).val(currInputVal);
            data.operateData.clearFlag = 0;
        }else{
            if(!!$("#"+this.id).val()){
                var currInputVal = parseInt($("#"+this.id).val(),10);
            }else{
                var currInputVal = 0;
            }
            if(currInputVal > 100 && currInputVal <=255){
                $("#"+this.id).val(currInputVal);
                if(!!this.page.getCaE(this.id).nav.rightTo){
                    this.page.hiFocus(this.page.getCaE(this.id).nav.rightTo);
                    data.operateData.clearFlag = 1;
                }
            }else if(currInputVal > 255 && currInputVal < 1000){
                var currValue = parseInt(currInputVal/10);
                var nextValue = currInputVal%10;
                $("#"+this.id).val(currValue);
                if(!!this.page.getCaE(this.id).nav.rightTo){
                    $("#"+this.page.getCaE(this.id).nav.rightTo).val(nextValue);
                    this.page.hiFocus(this.page.getCaE(this.id).nav.rightTo);
                }
            }else if(currInputVal > 1000){
                var currValue = parseInt(currInputVal/10);
                var nextValue = currInputVal%10;
                $("#"+this.id).val(currValue);
                if(!!this.page.getCaE(this.id).nav.rightTo){
                    $("#"+this.page.getCaE(this.id).nav.rightTo).val(nextValue);
                    this.page.hiFocus(this.page.getCaE(this.id).nav.rightTo);
                }
            }else{
                $("#"+this.id).val(currInputVal);
            }
        }

    }catch (ex){
        debugPrint("settingNetSetIpSetInputOnChange:"+ ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingNetSetEtherIpSetTypeEnterHandle
 description:DHCP获取IP和手动输入获取IP切换
 input:
 output:
 return
 *******************************************************************/
function settingNetSetEtherIpSetTypeEnterHandle(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = settingNetSetEtherIpSetPageData;
    data.operateData.ipConfigType = this.DataSelectedIndex;
    hiWebOsFrame.NetSetEtherIpSetPage.rewriteDataOnly();
}
function settingNetSetEtherIpSetUpToMainPage(){
    hiWebOsFrame.NetSetEtherIpSetPage.hiBlur();
    hiWebOsFrame.NetSetMainPage.hiFocus();
}
function settingNetSetEtherIpSetTypeBefLeftHandle(){
    if(this.SelectedIndex == 0){
        settingNetSetEtherIpSetPageEscHandle();
    }
}
/*******************************************************************
 name:settingNetSetEtherIpSetPageEscHandle
 description:ip设置页按返回处理
 input:
 output:
 return
 *******************************************************************/
function settingNetSetEtherIpSetPageEscHandle(){
    var data = settingNetSetEtherIpSetPageData;
    settingNetSetEtherIpSetRecordIpInfo();
    hiWebOsFrame.NetSetEtherIpSetPage.close();
    hiWebOsFrame.NetSetMainPage.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.NetSetMainPage.destroy();
    hiWebOsFrame.NetSetEtherIpSetPage.destroy();
}
/*******************************************************************
 name:wizardRecordIpInfo
 description:记录IP地址
 input:
 output:
 return
 *******************************************************************/
function settingNetSetEtherIpSetRecordIpInfo(){
    try{
        var data = settingNetSetEtherIpSetPageData;
        if(data.operateData.ipConfigType == 1){
            data.operateData.ipAddress = "";
            for(var idx = 0; idx < $("#settingNetSetEtherIpInfoUl li").eq(0).find("input").length; idx++){
                var item = $("#settingNetSetEtherIpInfoUl li").eq(0).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetEtherIpSetRecordIpInfo:ipAddress is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(0).find("input").length-1){
                        data.operateData.ipAddress += "0.";
                    }else{
                        data.operateData.ipAddress += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(0).find("input").length-1){
                        data.operateData.ipAddress += $(item).val()+".";
                    }else{
                        data.operateData.ipAddress += $(item).val();
                    }
                }
            }

            debugPrint("ipaddress:"+data.operateData.ipAddress);
            data.operateData.subnet_Mask = "";
            for(idx = 0; idx < $("#settingNetSetEtherIpInfoUl li").eq(1).find("input").length; idx++){
                item = $("#settingNetSetEtherIpInfoUl li").eq(1).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetEtherIpSetRecordIpInfo:subnet_Mask is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(1).find("input").length-1){
                        data.operateData.subnet_Mask += "0.";
                    }else{
                        data.operateData.subnet_Mask += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(1).find("input").length-1){
                        data.operateData.subnet_Mask += $(item).val()+".";
                    }else{
                        data.operateData.subnet_Mask += $(item).val();
                    }
                }
            }
            debugPrint("subnet_Mask:"+data.operateData.subnet_Mask);

            data.operateData.default_Gateway = "";
            for(idx = 0; idx < $("#settingNetSetEtherIpInfoUl li").eq(2).find("input").length; idx++){
                item = $("#settingNetSetEtherIpInfoUl li").eq(2).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetEtherIpSetRecordIpInfo:default_Gateway is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(2).find("input").length-1){
                        data.operateData.default_Gateway += "0.";
                    }else{
                        data.operateData.default_Gateway += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(2).find("input").length-1){
                        data.operateData.default_Gateway += $(item).val()+".";
                    }else{
                        data.operateData.default_Gateway += $(item).val();
                    }
                }
            }
            debugPrint("default_Gateway:"+data.operateData.default_Gateway);

            data.operateData.primary_DNS = "";
            for(idx = 0; idx < $("#settingNetSetEtherIpInfoUl li").eq(3).find("input").length; idx++){
                item = $("#settingNetSetEtherIpInfoUl li").eq(3).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetEtherIpSetRecordIpInfo:primary_DNS is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(3).find("input").length-1){
                        data.operateData.primary_DNS += "0.";
                    }else{
                        data.operateData.primary_DNS += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(3).find("input").length-1){
                        data.operateData.primary_DNS += $(item).val()+".";
                    }else{
                        data.operateData.primary_DNS += $(item).val();
                    }
                }
            }
            debugPrint("primary_DNS:"+data.operateData.primary_DNS);

            data.operateData.secondary_DNS = "";
            for(idx = 0; idx < $("#settingNetSetEtherIpInfoUl li").eq(4).find("input").length; idx++){
                item = $("#settingNetSetEtherIpInfoUl li").eq(4).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("settingNetSetEtherIpSetRecordIpInfo:secondary_DNS is null!",DebugLevel.ERROR);
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(4).find("input").length-1){
                        data.operateData.secondary_DNS += "0.";
                    }else{
                        data.operateData.secondary_DNS += "0";
                    }
                }else{
                    if(idx != $("#settingNetSetEtherIpInfoUl li").eq(4).find("input").length-1){
                        data.operateData.secondary_DNS += $(item).val()+".";
                    }else{
                        data.operateData.secondary_DNS += $(item).val();
                    }
                }
            }
            debugPrint("secondary_DNS:"+data.operateData.secondary_DNS);
            if(tv == true){
                model.network.setEnumIp_config(data.operateData.ipConfigType);
                model.network.setIp_address(data.operateData.ipAddress);
                model.network.setSubnet_mask(data.operateData.subnet_Mask);
                model.network.setGateway(data.operateData.default_Gateway);
                model.network.setDns_server_1(data.operateData.primary_DNS);
                model.network.setDns_server_2(data.operateData.secondary_DNS);
                model.network.WiredSet();
            }
        }else{ //DHCP
            if(tv == true){
                model.network.setEnumIp_config(data.operateData.ipConfigType);
                if(model.network.getEnumNetworkAvailable() == 1 && data.operateData.ipConfigType == data.operateData.oriIpConfigType){
                    debugPrint("settingNetSetEtherIpSetRecordIpInfo:do not need to set ethernet!!");
                }else{
                    model.network.WiredSet();
                }
            }
        }
    }catch (ex){
        debugPrint("settingNetSetEtherIpSetRecordIpInfo:"+ ex.message,DebugLevel.ERROR);
    }

}
function settingNetSetEtherIpStateCallBack(state){
    debugPrint("settingNetSetEtherSetStateCallBack:"+state,DebugLevel.ALWAYS);
    switch (state){
        case 3://idle
            settingNetSetEtherIpNetworkOnChange();
            break;
        case 4://update
            break;
        case 9://not available
            break;
        default :
            break;
    }
}
function settingNetSetEtherIpNetworkOnChange(){
    var opData = settingNetSetEtherIpSetPageData.operateData;
    var currConfigType = opData.ipConfigType;
    settingInitNetSetEtherIpSetPageData();
    getSettingNetSetEtherIpSetOriConfigType();
    if(currConfigType != opData.ipConfigType){
        opData.ipConfigType = currConfigType;
    }
    hiWebOsFrame.NetSetEtherIpSetPage.rewriteDataOnly();
}
/*******************************************************************
 name:settingNetSetEtherIpSetPageOnOpen
 description:有线设置页打开时的回调函数
 input:
 output:
 return
 *******************************************************************/
function settingNetSetEtherIpSetPageOnOpen(){
    if(tv){
        model.network.onEnumStateChaged = settingNetSetEtherIpStateCallBack;
    }
}

function settingNetSetEtherIpSetOnClose(){
}
/*******************************************************************
 name:settingNetSetEtherSetInputBlur
 description:移动时将Input焦点丢失
 input:
 output:
 return
 *******************************************************************/
function settingNetSetEtherSetInputBlur(){
//    this.hiBlur();
//    $("#"+this.id).blur();
}
function setSettingNetSetEtherSetClearFlag(){
    var data = settingNetSetEtherIpSetPageData;
    data.operateData.clearFlag = 1;
}

function settingNetSetEtherIpSetPageOnDestroy(){
    hiWebOsFrame.NetSetEtherIpSetPage = null;
    if(tv){
        model.network.onEnumStateChaged = null;
    }
}