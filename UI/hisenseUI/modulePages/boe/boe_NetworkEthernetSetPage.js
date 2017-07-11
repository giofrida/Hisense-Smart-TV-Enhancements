/**
 * Created by Admin on 14-6-18.
 */
function getNavNetworkEtherSetPageData(opt){
    opt.CaE = [
        {
            "id":"navNetworkEtherIPV4InfoUl",
            "description":"IP地址信息",
            "CaEType":"Ul",
            "firstFocusId":"navNetworkEtherIPV4Input0",
            "classes":{
                "normal":"navNetworkEtherIPV4InfoLi","focus":"navNetworkEtherIPV4InfoLi",
                "dataSelected":"navNetworkEtherIPV4InfoLi","selected":"navNetworkEtherIPV4InfoLi",
                "disable":"navNetworkEtherIPV4InfoLi"
            },
            "oriCaE":[
                {
                    "id":"navNetworkEtherIPV4Title",
                    "description":"ip头信息",
                    "CaEType":"span",
                    "classes":{
                        "normal":"navNetworkEtherIPV4TitleNormal","disable":"navNetworkEtherIPV4TitleDisable"
                    }
                },
                {
                    "id":"navNetworkEtherIPV4Input0",
                    "description":"ip地址第一个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
                   // "max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"navNetSetIpSetInputOnChange",
                    //"maxlength":3,
                    "classes":{
                        "normal":"navNetworkIpAddrInputNormal","focus":"navNetworkIpAddrInputFocus","disable":"navNetworkIpAddrInputDisable"
                    },
                    "nav":{
                        "rightTo":"navNetworkEtherIPV4Input1"
                    },
                    "handler":{
                        "aftLeftHandler":"setboeNetSetEtherSetClearFlag",
                        "aftRightHandler":"setboeNetSetEtherSetClearFlag"
                    }

                },
                {
                    "id":"navNetworkEtherIPV4Input1",
                    "description":"ip地址第2个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
                    //"max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"navNetSetIpSetInputOnChange",
                    //"maxlength":3,
                    "classes":{
                        "normal":"navNetworkIpAddrInputNormal","focus":"navNetworkIpAddrInputFocus","disable":"navNetworkIpAddrInputDisable","DataSelectedIndex":"navNetworkIpAddrInputNormal"
                    },
                    "nav":{
                        "leftTo":"navNetworkEtherIPV4Input0","rightTo":"navNetworkEtherIPV4Input2"
                    },
                    "handler":{
                        "aftLeftHandler":"setboeNetSetEtherSetClearFlag",
                        "aftRightHandler":"setboeNetSetEtherSetClearFlag"
                    }

                },
                {
                    "id":"navNetworkEtherIPV4Input2",
                    "description":"ip地址第3个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
                    //"max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"navNetSetIpSetInputOnChange",
                    //"maxlength":3,
                    "classes":{
                        "normal":"navNetworkIpAddrInputNormal","focus":"navNetworkIpAddrInputFocus","disable":"navNetworkIpAddrInputDisable"
                    },
                    "nav":{
                        "leftTo":"navNetworkEtherIPV4Input1","rightTo":"navNetworkEtherIPV4Input3"
                    },
                    "handler":{
                        "aftLeftHandler":"setboeNetSetEtherSetClearFlag",
                        "aftRightHandler":"setboeNetSetEtherSetClearFlag"
                    }

                },
                {
                    "id":"navNetworkEtherIPV4Input3",
                    "description":"ip地址第4个位置",
                    "CaEType":"input",
                    "inputAttr":"number",
                    //"max":255,
                    "min":0,
                    "supportCursor":false,
                    "onChange":"navNetSetIpSetInputOnChange",
                    //"maxlength":3,
                    "classes":{
                        "normal":"navNetworkIpAddrInputNormal","focus":"navNetworkIpAddrInputFocus","disable":"navNetworkIpAddrInputDisable","DataSelectedIndex":"navNetworkIpAddrInputNormal"
                    },
                    "nav":{
                        "leftTo":"navNetworkEtherIPV4Input2","rightTo":""
                    },
                    "handler":{
                        "aftLeftHandler":"setboeNetSetEtherSetClearFlag",
                        "aftRightHandler":"setboeNetSetEtherSetClearFlag"
                    }

                }

            ],
            "UlConfig":{
                "UlDataItem":["navNetworkEtherIPV4Title","navNetworkEtherIPV4Input0","navNetworkEtherIPV4Input1","navNetworkEtherIPV4Input2","navNetworkEtherIPV4Input3"],
                "PageSize":5
            },
            "handler":{
                "aftUpHandler":"setboeNetSetEtherSetClearFlag",
                "aftDownHandler":"setboeNetSetEtherSetClearFlag"
            },
            "nav":{
                "upTo":"","downTo":"navNetworkEtherIPSaveBtn"
            }
        },
        {
            "id":"navNetworkEtherIPSaveBtn",
            "description":"保存按钮",
            "CaEType":"div",
            "classes":{
                "normal":"navEthernetDialogFootRightNormal","focus":"navEthernetDialogFootRightFocus",
                "disable":"navEthernetDialogFootRightNormal"
            },
            "nav":{
                "upTo":"navNetworkEtherIPV4InfoUl","leftTo":"navNetworkEtherIPCancelBtn"
            },
            "handler":{
                "aftEnterHandler":"navNetworkEtherIPSaveBtnHandle","befRightHandler":"navNetworkEtherIPRightHandle"
            }
        },
        {
            "id":"navNetworkEtherIPCancelBtn",
            "description":"取消按钮",
            "CaEType":"div",
            "classes":{
                "normal":"navEthernetDialogFootLeftNormal","focus":"navEthernetDialogFootLeftFocus",
                "disable":"navEthernetDialogFootLeftNormal"
            },
            "nav":{
                "upTo":"navNetworkEtherIPV4InfoUl","rightTo":"navNetworkEtherIPSaveBtn"
            },
            "handler":{
                "aftEnterHandler":"navNetworkEtherIPEscHandle"
            }
        }
    ];
    boeInitNetSetEtherSetPageData();
    //getboeNetSetIpSetOriConfigType();

    return boeNetSetEtherSetPageData;
}
var boeNetSetEtherSetPageData={
    "navNetworkEtherIPSaveBtn":{"Data":"Done"},
    "navNetworkEtherIPCancelBtn":{"Data":"Cancel"},
    "navNetworkNetSetEtherTypeValue":{"Data":"DHCP"},
    "navNetworkNetSetEtherTypeNav":{
        "Data":[
            {
                "navNetworkNetSetEtherType":{"Data":"DHCP"}
            },
            {
                "navNetworkNetSetEtherType":{"Data":"Static IP"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "navNetworkNetSetEtherIPV4Title":{"Data":"IpV4"},
    "navNetworkEtherIPV4InfoUl":{
        "Data":[
            {
                "navNetworkEtherIPV4Title":{"Data":"IP Address"},
                "navNetworkEtherIPV4Input0":{"Data":"0"},
                "navNetworkEtherIPV4Input1":{"Data":"0"},
                "navNetworkEtherIPV4Input2":{"Data":"0"},
                "navNetworkEtherIPV4Input3":{"Data":"0"}
            },
            {
                "navNetworkEtherIPV4Title":{"Data":"Netmask"},
                "navNetworkEtherIPV4Input0":{"Data":"0"},
                "navNetworkEtherIPV4Input1":{"Data":"0"},
                "navNetworkEtherIPV4Input2":{"Data":"0"},
                "navNetworkEtherIPV4Input3":{"Data":"0"}
            },
            {
                "navNetworkEtherIPV4Title":{"Data":"Gateway"},
                "navNetworkEtherIPV4Input0":{"Data":"0"},
                "navNetworkEtherIPV4Input1":{"Data":"0"},
                "navNetworkEtherIPV4Input2":{"Data":"0"},
                "navNetworkEtherIPV4Input3":{"Data":"0"}
            },
            {
                "navNetworkEtherIPV4Title":{"Data":"DNS Server 1"},
                "navNetworkEtherIPV4Input0":{"Data":"0"},
                "navNetworkEtherIPV4Input1":{"Data":"0"},
                "navNetworkEtherIPV4Input2":{"Data":"0"},
                "navNetworkEtherIPV4Input3":{"Data":"0"}
            },
            {
                "navNetworkEtherIPV4Title":{"Data":"DNS Server 2"},
                "navNetworkEtherIPV4Input0":{"Data":"0"},
                "navNetworkEtherIPV4Input1":{"Data":"0"},
                "navNetworkEtherIPV4Input2":{"Data":"0"},
                "navNetworkEtherIPV4Input3":{"Data":"0"}
            }
        ],
        "SelectedIndex":0,
        "disable":false
    },
    "navNetworkNetSetEther2PrvBtn":{"Data":"Back"},
    "navNetworkNetSetEther2NextBtn":{"Data":"Done"},
    "operateData":{
        //"ipConfigType":0,// 0,automatic,1:manual
        //"oriIpConfigType":0,
        "ipAddress":"",
        "subnet_Mask":"",
        "default_Gateway":"",
        "primary_DNS":"",
        "secondary_DNS":"",
        "clearFlag":0
    },
    "langData":{
        "Done":["Done"],
        "Network Setup":["Network Setup"],
        "IP navNetwork:":["IP Setting:"],
        "Save":[],
        "Cancel":[],
        "IP Address":["IP Address"],
        "Netmask":["Netmask"],
        "Gateway":["Gateway"],
        "DNS Server 1":["DNS Server 1"],
        "DNS Server 2":["DNS Server 2"]
    },
    rewrite:"boeRewriteEtherSetPage"
}

//function getboeNetSetIpSetOriConfigType(){
//    var operateData = boeNetSetEtherSetPageData.operateData;
//    operateData.oriIpConfigType = operateData.ipConfigType;
//}
/*******************************************************************
 name:boeInitNetSetEtherSetPageData
 description:初始化有线
 input:
 output:
 return
 *******************************************************************/
function boeInitNetSetEtherSetPageData(){
    try{
        var operateData = boeNetSetEtherSetPageData.operateData;
        operateData.clearFlag = 1;
        if(tv == false){
            //operateData.netAvailableFlag = 0;
            //operateData.ipConfigType = 0;
            operateData.ipAddress = "0.0.0.0";
            operateData.subnet_Mask = "0.0.0.0";
            operateData.default_Gateway = "0.0.0.0";
            operateData.primary_DNS = "0.0.0.0";
            operateData.secondary_DNS = "0.0.0.0";
        }else{
            //operateData.netAvailableFlag = model.network.getEnumNetworkAvailable();
            model.network.setEnumIp_config(0);
            operateData.ipAddress = model.network.getIp_address();
            operateData.subnet_Mask = model.network.getSubnet_mask();
            operateData.default_Gateway = model.network.getGateway();
            operateData.primary_DNS = model.network.getDns_server_1();
            operateData.secondary_DNS = model.network.getDns_server_2();
            //debugPrint("boeInitNetSetEtherIpSetPageData:ipConfigType="+operateData.ipConfigType);
            debugPrint(operateData.ipAddress);
            debugPrint(operateData.subnet_Mask);
            debugPrint(operateData.default_Gateway);
            debugPrint(operateData.primary_DNS);
            debugPrint(operateData.secondary_DNS);
        }
    }catch (ex){
        debugPrint("boeInitNetSetEtherIpSetPageData:"+ex.message,DebugLevel.ERROR);
    }
}

function boeRefreshIPData(){
    try{
            var operateData = boeNetSetEtherSetPageData.operateData;
            operateData.clearFlag = 1;
            operateData.ipAddress = model.network.getIp_address();
            operateData.subnet_Mask = model.network.getSubnet_mask();
            operateData.default_Gateway = model.network.getGateway();
            operateData.primary_DNS = model.network.getDns_server_1();
            operateData.secondary_DNS = model.network.getDns_server_2();
            debugPrint(operateData.ipAddress);
            debugPrint(operateData.subnet_Mask);
            debugPrint(operateData.default_Gateway);
            debugPrint(operateData.primary_DNS);
            debugPrint(operateData.secondary_DNS);

    }catch (ex){
        debugPrint("boeInitNetSetEtherIpSetPageData:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:boeRewriteEtherSetPage
 description:刷新有线设置页
 input:
 output:
 return
 *******************************************************************/
function boeRewriteEtherSetPage(data){
    try{


        var ipAddrArray = data.operateData.ipAddress.split(".");
        if(ipAddrArray.length != 4){
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input0.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input1.Data ="";
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input2.Data ="";
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input3.Data ="";
        }else{
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input0.Data = ipAddrArray[0];
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input1.Data = ipAddrArray[1];
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input2.Data = ipAddrArray[2];
            data.navNetworkEtherIPV4InfoUl.Data[0].navNetworkEtherIPV4Input3.Data = ipAddrArray[3];
        }
        var subnetMaskArray = data.operateData.subnet_Mask.split(".");
        if(subnetMaskArray.length != 4){
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input0.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input1.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input2.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input3.Data = "";
        }else{
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input0.Data = subnetMaskArray[0];
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input1.Data = subnetMaskArray[1];
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input2.Data = subnetMaskArray[2];
            data.navNetworkEtherIPV4InfoUl.Data[1].navNetworkEtherIPV4Input3.Data = subnetMaskArray[3];
        }

        var default_GatewayArray = data.operateData.default_Gateway.split(".");
        if(default_GatewayArray.length != 4){
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input0.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input1.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input2.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input3.Data = "";
        }else{
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input0.Data = default_GatewayArray[0];
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input1.Data = default_GatewayArray[1];
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input2.Data = default_GatewayArray[2];
            data.navNetworkEtherIPV4InfoUl.Data[2].navNetworkEtherIPV4Input3.Data = default_GatewayArray[3];
        }
        var primary_DNSArray = data.operateData.primary_DNS.split(".");
        if(primary_DNSArray.length != 4){
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input0.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input1.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input2.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input3.Data = "";
        }else{
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input0.Data = primary_DNSArray[0];
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input1.Data = primary_DNSArray[1];
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input2.Data = primary_DNSArray[2];
            data.navNetworkEtherIPV4InfoUl.Data[3].navNetworkEtherIPV4Input3.Data = primary_DNSArray[3];
        }

        var secondary_DNSArray = data.operateData.secondary_DNS.split(".");
        if(secondary_DNSArray.length != 4){
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input0.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input1.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input2.Data = "";
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input3.Data = "";
        }else{
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input0.Data = secondary_DNSArray[0];
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input1.Data = secondary_DNSArray[1];
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input2.Data = secondary_DNSArray[2];
            data.navNetworkEtherIPV4InfoUl.Data[4].navNetworkEtherIPV4Input3.Data = secondary_DNSArray[3];
        }
        //data.navNetworkNetSetEtherTypeNav.DataSelectedIndex = data.operateData.ipConfigType;
        //data.navNetworkNetSetEtherTypeNav.SelectedIndex = data.operateData.ipConfigType;
        data.navNetworkNetSetEtherTypeValue.Data = data.navNetworkNetSetEtherTypeNav.Data[data.operateData.ipConfigType].navNetworkNetSetEtherType.Data;
        //if(data.operateData.ipConfigType == 0){
        //    //自动方式不可输入
        //    debugPrint("boeRewriteEtherSetPage:"+data.operateData.ipConfigType);
        //    data.navNetworkEtherIPV4InfoUl.disable = true;
        //    for(var idx = 0;idx < data.navNetworkEtherIPV4InfoUl.Data.length;idx++){
        //        var item = data.navNetworkEtherIPV4InfoUl.Data[idx];
        //        item.navNetworkEtherIPV4Title.disable = true;
        //        item.navNetworkEtherIPV4Input0.disable = true;
        //        item.navNetworkEtherIPV4Input1.disable = true;
        //        item.navNetworkEtherIPV4Input2.disable = true;
        //        item.navNetworkEtherIPV4Input3.disable = true;
        //    }
        //
        //}else{
        //    debugPrint("boeRewriteEtherSetPage:"+data.operateData.ipConfigType);
        //    data.navNetworkEtherIPV4InfoUl.disable = false;
        //    for(var idx = 0;idx < data.navNetworkEtherIPV4InfoUl.Data.length;idx++){
        //        var item = data.navNetworkEtherIPV4InfoUl.Data[idx];
        //        item.navNetworkEtherIPV4Title.disable = false;
        //        item.navNetworkEtherIPV4Input0.disable = false;
        //        item.navNetworkEtherIPV4Input1.disable = false;
        //        item.navNetworkEtherIPV4Input2.disable = false;
        //        item.navNetworkEtherIPV4Input3.disable = false;
        //    }
        //}
        //if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        //}
        //else {
        //}
    }catch (ex){
        DBG_ERROR("settingRewriteEtherIpSetPage"+ex.message);
    }
}
function navNetworkEtherIPEscHandle(){
    hiWebOsFrame.boe_NetworkEthernetSetPage.destroy();
    hiWebOsFrame.createPage('boe_ethernet_result',null, null,null,function(b){
        hiWebOsFrame.boe_ethernet_result = b;
        b.open();
        b.hiFocus();
    });
}



/*******************************************************************
 name:navNetworkEtherIPSaveBtnHandle
 description:ip设置页 保存按键
 input:
 output:
 return
 *******************************************************************/
function navNetworkEtherIPSaveBtnHandle(){
    boeRecordIpAddressInfo();
    hiWebOsFrame.boe_NetworkEthernetSetPage.destroy();
    hiWebOsFrame.createPage('boe_ethernet_result',null, null, null,function(b){
        hiWebOsFrame.boe_ethernet_result = b;
        b.open();
        b.hiFocus();
    })


}
function navNetworkEtherIPRightHandle(){
    boeRecordIpAddressInfo();
    hiWebOsFrame.boe_NetworkEthernetSetPage.destroy();
    hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_complete_page_id = b;
        b.open();
        b.hiFocus();
        hiWebOsFrame.boe_netbg_page_id.destroy();
    })

}
/*******************************************************************
 name:boeRecordIpInfof
 description:记录IP地址
 input:
 output:
 return
 *******************************************************************/
function boeRecordIpAddressInfo(){
    try{
        var data = boeNetSetEtherSetPageData;
        //if(data.operateData.ipConfigType == 1){
            data.operateData.ipAddress = "";
            for(var idx = 0; idx < $("#navNetworkEtherIPV4InfoUl li").eq(0).find("input").length; idx++){
                var item = $("#navNetworkEtherIPV4InfoUl li").eq(0).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("navNetworkEtherIPV4InfoUl:ipAddress is null!",DebugLevel.ERROR);
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(0).find("input").length-1){
                        data.operateData.ipAddress += "0.";
                    }else{
                        data.operateData.ipAddress += "0";
                    }
                }else{
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(0).find("input").length-1){
                        data.operateData.ipAddress += $(item).val()+".";
                    }else{
                        data.operateData.ipAddress += $(item).val();
                    }
                }
            }

            debugPrint("ipaddress:"+data.operateData.ipAddress);
            data.operateData.subnet_Mask = "";
            for(idx = 0; idx < $("#navNetworkEtherIPV4InfoUl li").eq(1).find("input").length; idx++){
                item = $("#navNetworkEtherIPV4InfoUl li").eq(1).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("navNetworkEtherIPV4InfoUl:subnet_Mask is null!",DebugLevel.ERROR);
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(1).find("input").length-1){
                        data.operateData.subnet_Mask += "0.";
                    }else{
                        data.operateData.subnet_Mask += "0";
                    }
                }else{
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(1).find("input").length-1){
                        data.operateData.subnet_Mask += $(item).val()+".";
                    }else{
                        data.operateData.subnet_Mask += $(item).val();
                    }
                }
            }
            debugPrint("subnet_Mask:"+data.operateData.subnet_Mask);

            data.operateData.default_Gateway = "";
            for(idx = 0; idx < $("#navNetworkEtherIPV4InfoUl li").eq(2).find("input").length; idx++){
                item = $("#navNetworkEtherIPV4InfoUl li").eq(2).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("navNetworkEtherIPV4InfoUl:default_Gateway is null!",DebugLevel.ERROR);
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(2).find("input").length-1){
                        data.operateData.default_Gateway += "0.";
                    }else{
                        data.operateData.default_Gateway += "0";
                    }
                }else{
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(2).find("input").length-1){
                        data.operateData.default_Gateway += $(item).val()+".";
                    }else{
                        data.operateData.default_Gateway += $(item).val();
                    }
                }
            }
            debugPrint("default_Gateway:"+data.operateData.default_Gateway);

            data.operateData.primary_DNS = "";
            for(idx = 0; idx < $("#navNetworkEtherIPV4InfoUl li").eq(3).find("input").length; idx++){
                item = $("#navNetworkEtherIPV4InfoUl li").eq(3).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("navNetworkEtherIPV4InfoUl:primary_DNS is null!",DebugLevel.ERROR);
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(3).find("input").length-1){
                        data.operateData.primary_DNS += "0.";
                    }else{
                        data.operateData.primary_DNS += "0";
                    }
                }else{
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(3).find("input").length-1){
                        data.operateData.primary_DNS += $(item).val()+".";
                    }else{
                        data.operateData.primary_DNS += $(item).val();
                    }
                }
            }
            debugPrint("primary_DNS:"+data.operateData.primary_DNS);

            data.operateData.secondary_DNS = "";
            for(idx = 0; idx < $("#navNetworkEtherIPV4InfoUl li").eq(4).find("input").length; idx++){
                item = $("#navNetworkEtherIPV4InfoUl li").eq(4).find("input")[idx];
                if(!$(item).val()){
                    debugPrint("navNetworkEtherIPV4InfoUl:secondary_DNS is null!",DebugLevel.ERROR);
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(4).find("input").length-1){
                        data.operateData.secondary_DNS += "0.";
                    }else{
                        data.operateData.secondary_DNS += "0";
                    }
                }else{
                    if(idx != $("#navNetworkEtherIPV4InfoUl li").eq(4).find("input").length-1){
                        data.operateData.secondary_DNS += $(item).val()+".";
                    }else{
                        data.operateData.secondary_DNS += $(item).val();
                    }
                }
            }
            debugPrint("secondary_DNS:"+data.operateData.secondary_DNS);
            if(tv == true){
                model.network.setEnumIp_config(1);
                model.network.setIp_address(data.operateData.ipAddress);
                model.network.setSubnet_mask(data.operateData.subnet_Mask);
                model.network.setGateway(data.operateData.default_Gateway);
                model.network.setDns_server_1(data.operateData.primary_DNS);
                model.network.setDns_server_2(data.operateData.secondary_DNS);
                model.network.WiredSet();
            }
    }catch (ex){
        debugPrint("navNetworkEtherIPV4InfoUl:"+ ex.message,DebugLevel.ERROR);
    }

}
function navNetworkNetSetEtherSetStateCallBack(state){
    var data=boeNetSetEtherSetPageData;
    debugPrint("navNetworkNetSetEtherSetStateCallBack:"+state,DebugLevel.ALWAYS);
    switch (state){
        case 3://idle

                boeRefreshIPData();

            hiWebOsFrame.boe_NetworkEthernetSetPage.rewriteDataOnly();
            break;
        case 4://update
            break;
        case 9://not available
            break;
        default :
            break;
    }
}
/*******************************************************************
 name:boeNetSetEtherSetPageOnOpen
 description:有线设置页打开时的回调函数
 input:
 output:
 return
 *******************************************************************/
function boeNetSetEtherSetPageOnOpen(){
    try{
        if(tv){
            model.network.onEnumStateChaged = navNetworkNetSetEtherSetStateCallBack;
        }
    }catch (ex){
        debugPrint("boeNetSetEtherSetPageOnOpen:"+ex.message,DebugLevel.ERROR);
    }

}
function navNetSetIpSetInputOnChange(){
    try{
        debugPrint("settingNetSetIpSetInputOnChange:"+this.id+","+$("#"+this.id).val(),DebugLevel.ALWAYS);
        var data = boeNetSetEtherSetPageData;
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
        debugPrint("boeNetSetIpSetInputOnChange:"+ ex.message,DebugLevel.ERROR);
    }

}
function boeNetSetEtherSetOnClose(){
}
function setboeNetSetEtherSetClearFlag(){
    var data = boeNetSetEtherSetPageData;
    data.operateData.clearFlag = 1;
}
function boeNetSetEtherSetPageOnDestroy(){
    hiWebOsFrame.boe_NetworkEthernetSetPage = null;
    if(tv == true){
        model.network.onEnumStateChaged = null;
    }
}
