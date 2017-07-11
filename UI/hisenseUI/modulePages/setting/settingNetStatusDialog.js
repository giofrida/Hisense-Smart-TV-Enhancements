/**
 * Created by Admin on 14-6-23.
 */
function getSettingNetStatusDialogData(opt){
    opt.CaE =[
        {
            "id":"settingNetworkStatusTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetStatusTypeTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetStatusTypeValue",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetStatusTypeName",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetStatusWifiName",
            "description":"标题",
            "CaEType":"span",
            "strFilter":true
        },
        {
            "id": "settingNetStatusUl",//在页面中的按钮或者组件容器Id
            "description": "显示项列表",
            "CaEType": "Ul",
            "disable": false,
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingNetStatusTitle",
                    "description": "标题",
                    "CaEType": "span"
                },
                {
                    "id": "settingNetStatusValue",
                    "description": "value",
                    "CaEType": "span"
                }
            ],
            "UlConfig": {
                "UlDataItem": [ "settingNetStatusTitle", "settingNetStatusValue"],
                "PageSize":7
            },
            "classes":{
                "normal":"wizardLineNoBtn","dataSelected":"wizardLineNoBtn"
            }
        },
        {
            "id":"settingNetworkStatusOK",
            "description":"OK",
            "CaEType":"div",
            "classes":{
                "normal": "wizardSingleBtnNormal", "focus": "wizardSingleBtnFocus"
            },
            "handler": {
                "aftEnterHandler":"settingNetStatusEscHandle"
            }
        }
    ];
    settingInitNetStatusDialog();
    return settingNetStatusDialogDate;
}
var settingNetStatusDialogDate={
    "settingNetworkStatusTitle":{"Data":"Network Information"},
    "settingNetStatusTypeTitle":{"Data":"Network"},
    "settingNetStatusTypeValue":{"Data":""},
    "settingNetStatusTypeName":{"Data":""},
    "settingNetStatusWifiName":{"Data":""},
    "settingNetStatusUl":{
        "Data":[
            {
                "settingNetStatusTitle":{"Data":"IP Address"},
                "settingNetStatusValue":{"Data":"0.0.0.0"}
            },
            {
                "settingNetStatusTitle":{"Data":"Netmask"},
                "settingNetStatusValue":{"Data":"0.0.0.0"}
            },
            {
                "settingNetStatusTitle":{"Data":"Gateway"},
                "settingNetStatusValue":{"Data":"0.0.0.0"}
            },
            {
                "settingNetStatusTitle":{"Data":"DNS Server 1"},
                "settingNetStatusValue":{"Data":"0.0.0.0"}
            },
            {
                "settingNetStatusTitle":{"Data":"DNS Server 2"},
                "settingNetStatusValue":{"Data":"0.0.0.0"}
            },
            {
                "settingNetStatusTitle":{"Data":"MAC Address"},
                "settingNetStatusValue":{"Data":"0.0.0.0"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingNetworkStatusOK":{"Data":"OK"},
    "operateData":{
        "networkCfgFlag":0,
        "networkType":0,//0:ethernet,1:wireless
        "connectStatus":0,
        "ipAddress":"",
        "subnet_Mask":"",
        "default_Gateway":"",
        "primary_DNS":"",
        "secondary_DNS":"",
        "macAddress":"",
        "SSIDName":""
    },
    "langData":{
        "Network Information":["Network Information"],
        "Connected":["Connected"],
        "Disconnected":["Disconnected"],
        "Network":["Network"],
        "EtherNet":["EtherNet"],
        "Wireless":["Wireless"],
        "IP Address":["IP Address"],
        "Netmask":["Netmask"],
        "Gateway":["Gateway"],
        "DNS Server 1":["DNS Server 1"],
        "DNS Server 2":["DNS Server 2"],
        "MAC Address":["MAC Address"],
        "OK":["OK"],
        "Close":["Close"]
    },
    rewrite:"settingRewriteNetStatusDialog"
}
/*******************************************************************
 name:settingInitNetStatusDialog
 description:初始化网络状态查看页
 input:
 output:
 return
 *******************************************************************/
function settingInitNetStatusDialog(){
    try{
        var data = settingNetStatusDialogDate;
        if(tv == false){
            data.operateData.networkCfgFlag = 1;
            data.operateData.networkType = 1;
            data.operateData.connectStatus = 1;
            data.operateData.SSIDName = "\\xabcd"
            data.operateData.ipAddress = "192.168.1.100";
            data.operateData.subnet_Mask = "255.255.255.0" ;
            data.operateData.default_Gateway = "192.168.1.1";
            data.operateData.primary_DNS = "114.114.114.114";
            data.operateData.secondary_DNS = "114.114.114.114";
            data.operateData.macAddress = "00-12-34-56-78";
        }else{
            data.operateData.ipAddress = "";
            data.operateData.subnet_Mask = "";
            data.operateData.default_Gateway = "";
            data.operateData.primary_DNS = "";
            data.operateData.secondary_DNS = "";
            data.operateData.macAddress = model.network.getMac_address();
            data.operateData.networkCfgFlag = model.network.getEnumNetworkConfig();
            debugPrint("settingInitNetStatusDialog:networkCfgFlag = "+data.operateData.networkCfgFlag,DebugLevel.ALWAYS);
            if(data.operateData.networkCfgFlag == 1){
                data.operateData.networkType = model.network.getEnumNetworking();
                data.operateData.connectStatus = model.network.getEnumNetworkAvailable();
                debugPrint("settingInitNetStatusDialog:"+data.operateData.networkType+","+data.operateData.connectStatus,DebugLevel.ALWAYS);
                if(data.operateData.connectStatus == 1){
                    data.operateData.ipAddress = model.network.getIp_address();
                    data.operateData.subnet_Mask = model.network.getSubnet_mask();
                    data.operateData.default_Gateway = model.network.getGateway();
                    data.operateData.primary_DNS = model.network.getDns_server_1();
                    data.operateData.secondary_DNS = model.network.getDns_server_2();
                    debugPrint("settingInitNetStatusDialog:"+data.operateData.ipAddress+","+data.operateData.subnet_Mask+","+data.operateData.default_Gateway);
                    if(data.operateData.networkType == 1){
                        //wireless
                        data.operateData.SSIDName = model.network.getSsid();
                        debugPrint("settingInitNetStatusDialog:ssidName="+data.operateData.SSIDName);
                        debugPrint("settingInitNetStatusDialog:"+model.network.getEnumEncryption());
                        debugPrint("settingInitNetStatusDialog:"+model.network.getEncryptionPassphrase());
                        debugPrint("settingInitNetStatusDialog:"+model.network.getEnumAuthentication())

                    }
                }
            }else{
                data.operateData.connectStatus = model.network.getEnumNetworkAvailable();
                if(data.operateData.connectStatus == 1){
                    debugPrint("settingInitNetStatusDialog:networkAvailable error!!!",DebugLevel.ERROR);
                }
                data.operateData.ipAddress = "";
                data.operateData.subnet_Mask = "";
                data.operateData.default_Gateway = "";
                data.operateData.primary_DNS = "";
                data.operateData.secondary_DNS = "";
            }
        }
    }catch (ex){
        debugPrint("settingInitNetStatusDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteNetStatusDialog
 description:刷新网络状态查看对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteNetStatusDialog(data){
    try{
        if(data.operateData.networkCfgFlag == 0){
            data.settingNetStatusTypeValue.Data = "Close";
            data.settingNetStatusTypeName.Data = "";
            data.settingNetStatusWifiName.Data = "";
        }else{
            if(data.operateData.networkType == 0){
                data.settingNetStatusTypeValue.Data = "Ethernet";
                if(data.operateData.connectStatus == 0){
                    data.settingNetStatusTypeName.Data = "Disconnected";
                    data.settingNetStatusWifiName.Data = "";
                }else{
                    data.settingNetStatusTypeName.Data = "Connected";
                    data.settingNetStatusWifiName.Data = "";
                }
            }else{
                data.settingNetStatusTypeValue.Data = "Wireless";
                if(data.operateData.connectStatus == 0){
                    data.settingNetStatusTypeName.Data = "Disconnected";
                    data.settingNetStatusWifiName.Data = "";
                }else{
                    data.settingNetStatusTypeName.Data = "";
                    data.settingNetStatusWifiName.Data = data.operateData.SSIDName;
                }
            }
        }
        var ipInfoUlData = data.settingNetStatusUl.Data;
        ipInfoUlData[0].settingNetStatusValue.Data = data.operateData.ipAddress;
        ipInfoUlData[1].settingNetStatusValue.Data = data.operateData.subnet_Mask;
        ipInfoUlData[2].settingNetStatusValue.Data = data.operateData.default_Gateway;
        ipInfoUlData[3].settingNetStatusValue.Data = data.operateData.primary_DNS;
        ipInfoUlData[4].settingNetStatusValue.Data = data.operateData.secondary_DNS;
        ipInfoUlData[5].settingNetStatusValue.Data = data.operateData.macAddress;
    }catch (ex){
        debugPrint("settingRewriteNetStatusDialog"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingNetStatusEscHandle
 description:关闭当前页
 input:
 output:
 return
 *******************************************************************/
function settingNetStatusEscHandle(){
    hiWebOsFrame.settingNetStatusDialog .close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.settingNetStatusDialog .destroy();
}

function settingNetStatusDialogOnDestroy(){
    try{
        debugPrint("settingNetStatusDialogOnDestroy!");
        hiWebOsFrame.settingNetStatusDialog = null;
    }catch (ex){
        debugPrint("settingNetStatusDialogOnDestroy:"+ex.message,DebugLevel.ERROR);
    }
}
