/**
 * Created by xuehongfeng on 14-11-19.
 */
function getboeNetworkPageData(opt){
    opt.CaE = [

        {
            "id": "boeNetworkGridUl",//在页面中的按钮或者组件容器Id
            "description": "用于显示语言列表",
            "CaEType": "Ul",
            "disable": false,
            "classes": {
                "normal": "boe_network_GridUlLi_2_Normal",
                "focus": "boe_network_GridUlLi_2_Focus",
                "dataSelected":"boe_network_GridUlLi_2_DataSelected",
                "disable":"boe_network_GridUlLi_2_Disable"
            },
            "nav":{
                "leftTo":"networkPageLeftArrowBtn","rightTo":"networkPageRightArrowBtn"
            },
            "handler": {
                "aftEnterHandler": "setboeNetSetNetworkType",
                "aftUpHandler":"boeNetworkResetDataSeletedIndex",
                "aftDownHandler":"boeNetworkResetDataSeletedIndex"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "netlogo",
                    "description": "",
                    "CaEType": "img"
                },
                {
                    "id": "netlogo_hilight",
                    "description": "",
                    "CaEType": "img"
                },
                {
                    "id": "nettype",
                    "description": "使用模式列表",
                    "CaEType": "span"
                },
                {
                    "id": "arrow",
                    "description": "",
                    "CaEType": "img"
                },
                {
                    "id": "arrow_focus",
                    "description": "",
                    "CaEType": "img"
                }

            ],
            "UlConfig": {
                "UlDataItem": ["netlogo","netlogo_hilight","nettype","arrow","arrow_focus"],
                "LineNum":1,
                "PageSize":16,
                "FlipType":'HOR',
                "ArrowFlag":true
            }
        },
        {
            "id":"networkPageLeftArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeLeftArrowBtnNormal", "focus": "boeLeftArrowBtnFocus"
            },
            "nav":{
                "rightTo":"boeNetworkGridUl"
            },
            "handler": {
                "aftEnterHandler":"boeNetworkToDisclaimerPage"
            }
        },
        {
            "id":"networkPageRightArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeRightArrowBtnNormal", "focus": "boeRightArrowBtnFocus"
            },
            "nav":{
                "leftTo":"boeNetworkGridUl"
            },
            "handler": {
                "aftEnterHandler":"boeNetworkToNextPage"
            }
        }
    ];
    boeInitNetSetNetTypeListDialog();
    return boeNetworkPageData;
}
var boeNetworkPageData = {
    "boeNetworkGridUl": {
        "Data":[
            {
                "netlogo": {"Data":"img/wireless_normal.png"},
                "netlogo_hilight": {"Data":"img/wireless_focus.png"},
                "nettype": {"Data":"Wireless"},
                "arrow": {"Data":"img/arrow_normal.png"},
                "arrow_focus": {"Data":"img/arrow_focus.png"}
            },
            {
                "netlogo": {"Data":"img/ethernet_normal.png"},
                "netlogo_hilight": {"Data":"img/ethernet_focus.png"},
                "nettype": {"Data":"Ethernet"},
                "arrow": {"Data":"img/arrow_normal.png"},
                "arrow_focus": {"Data":"img/arrow_focus.png"}
            }

        ]
    },
    "operateData":{
        "currNetworkTypeIdx":1
    },
    "langData":{
        "Wireless":[],
        "Ethernet":[]
    },
    rewrite:"boeRewriteNetSetNetTypeListDialog"
}
function boeGetNetworkMapList(){
    var netTypeMapList =[
        {
            "netTypeCode":1,
            "netTypeName":"Wireless"
        },
        {
            "netTypeCode":0,
            "netTypeName":"Ethernet"
        }
    ];
    return netTypeMapList;
}
function getboeNetSetSetCurrNetTypeIdx(){
    try{
        var netTypeMapList = boeGetNetworkMapList();
        if(tv == false){
            if(!!localStorage.getItem("networkCurrNetTypeIdx")){
                return parseInt(localStorage.getItem("networkCurrNetTypeIdx"));
            }else{
                localStorage.setItem("networkCurrNetTypeIdx",0);
                return 0;
            }
        }else{
            var networkType = model.network.getEnumNetworking();
            debugPrint("getWizardNetSetSetCurrNetTypeIdx:networkType="+networkType,DebugLevel.ALWAYS);
            for(var i=0; i < netTypeMapList.length; i++){
                if(netTypeMapList[i].netTypeCode == networkType){
                    break;
                }
            }
            if(i == netTypeMapList.length){
                debugPrint("getWizardNetSetSetCurrNetTypeIdx:error networkType="+networkType,DebugLevel.ERROR);
                model.network.setEnumNetworking(0);//wired
            }
        }
        return i;
    }catch (ex){
        debugPrint("getWizardNetSetSetCurrNetTypeIdx:"+ex.message,DebugLevel.ERROR);
    }

}
function boeInitNetSetNetTypeListDialog(){
    try{
        var data = boeNetworkPageData;
        data.operateData.currNetworkTypeIdx =getboeNetSetSetCurrNetTypeIdx();
        setboeNetSetSetCurrNetTypeIdx(data.operateData.currNetworkTypeIdx);
    }catch (ex){
        debugPrint("wizardInitNetSetNetTypeListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function boeRewriteNetSetNetTypeListDialog(data){
    try{

        data.boeNetworkGridUl.DataSelectedIndex = data.operateData.currNetworkTypeIdx;
        data.boeNetworkGridUl.SelectedIndex = data.operateData.currNetworkTypeIdx;
    }catch (ex){
        debugPrint("wizardRewriteNetSetNetTypeListDialog:"+ex.message);
    }
}
//function wizardGetNetworkMapList(){
//    var netTypeMapList =[
//        {
//            "netlogo": {"Data":"img/wireless_normal.png"},
//            "netlogo_hilight": {"Data":"img/wireless_focus.png"},
//            "nettype": {"Data":"Wireless"},
//            "arrow": {"Data":"img/arrow_normal.png"},
//            "arrow_focus": {"Data":"img/arrow_focus.png"}
//        },
//        {
//            "netlogo": {"Data":"img/ethernet_normal.png"},
//            "netlogo_hilight": {"Data":"img/ethernet_focus.png"},
//            "nettype": {"Data":"Ethernet"},
//            "arrow": {"Data":"img/arrow_normal.png"},
//            "arrow_focus": {"Data":"img/arrow_focus.png"}
//        }
//    ];
//    return netTypeMapList;
//}
function setboeNetSetSetCurrNetTypeIdx(idx){
    try{
        debugPrint("setboeNetSetSetCurrNetTypeIdx:"+idx);
        var netTypeMapList = boeGetNetworkMapList();
        if(tv == false){
            if(idx > netTypeMapList.length-1){
                idx = 0;
            }
            localStorage.setItem("networkCurrNetTypeIdx",idx);
        }else{
            debugPrint("[xuehongfeng] setWizardNetSetSetCurrNetTypeIdx:" + netTypeMapList[idx].netTypeCode);
            model.network.setEnumNetworking(netTypeMapList[idx].netTypeCode);//wired
            debugPrint("[xuehongfeng] setWizardNetSetWirelessSuccess:" );
        }
    }catch (ex){
        debugPrint("setWizardNetSetSetCurrNetTypeIdx:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:boeSetUseCountry
 description:设置使用语言
 input:currStep:
 output:
 return
 *******************************************************************/
function setboeNetSetNetworkType(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = boeNetworkPageData;
    data.operateData.currNetworkTypeIdx = this.SelectedIndex;
    hiWebOsFrame.boe_network_page_id.rewriteDataOnly();
    setboeNetSetSetCurrNetTypeIdx(this.DataSelectedIndex);
    debugPrint("[xuehongfeng]setWizardNetSetNetworkType");
    hiWebOsFrame.boe_network_page_id.close();

    var _this = this;
    switch(data.operateData.currNetworkTypeIdx){
        case 0://wireless
            debugPrint("[xuehongfeng]setWizardNetSetNetworkType" + data.operateData.currNetworkTypeIdx);
            hiWebOsFrame.createPage('boe_netbg_page_id',null,_this.page,null,function(a){
                hiWebOsFrame.boe_netbg_page_id = a;
                hiWebOsFrame.boe_netbg_page_id.operateData.disable_item =data.operateData.currNetworkTypeIdx;
                hiWebOsFrame.boe_netbg_page_id.operateData.curindex = data.operateData.currNetworkTypeIdx;
                a.rewriteDataOnly();
                a.open();
                hiWebOsFrame.createPage('boe_search_wifi',null, _this.page, null,function(b){
                    hiWebOsFrame.boe_search_wifi = b;
                    b.open();
                    b.hiFocus();
                });
            })
            break;
        case 1://Ethernet
            hiWebOsFrame.createPage('boe_netbg_page_id',null,_this.page,null,function(a){
                hiWebOsFrame.boe_netbg_page_id = a;
                hiWebOsFrame.boe_netbg_page_id.operateData.disable_item =data.operateData.currNetworkTypeIdx;
                hiWebOsFrame.boe_netbg_page_id.operateData.curindex = data.operateData.currNetworkTypeIdx;
                a.rewriteDataOnly();
                a.open();
                hiWebOsFrame.createPage('boe_NetworkEthernetType',null, _this.page, null,function(b){
                    hiWebOsFrame.boe_NetworkEthernetType = b;
                    b.open();
                    b.hiFocus();
                });
            })
            break;
    }

}
/*******************************************************************
 name:boeRefreshCountryPage
 description:刷新语言页
 input:
 output:
 return
 *******************************************************************/

/*******************************************************************
 name:由国家设置页返回语言设置页
 description:
 input:
 output:
 return
 *******************************************************************/
function boeNetworkToDisclaimerPage(operateData,data){


    hiWebOsFrame.createPage('boe_bg_page_id',null, null, null,function(a){
        hiWebOsFrame.boe_bg_page_id = a;
        hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_disclaimer_page_id = b;
            hiWebOsFrame.boe_bg_page_id.open();
            hiWebOsFrame.boe_network_page_id.close();
            hiWebOsFrame.boe_network_page_id.destroy();
            b.hiFocus();
            b.open();


        })
    });


}

/*******************************************************************
 name:切换类型时，更改dataselected样式
 description:
 input:
 output:
 return
 *******************************************************************/
function boeNetworkResetDataSeletedIndex(opedata,data){
    boeNetworkPageData.operateData.currNetworkTypeIdx = this.SelectedIndex;
    this.page.rewriteDataOnly();
}

/*******************************************************************
 name:由语言设置页进入国家设置页
 description:
 input:
 output:
 return
 *******************************************************************/
function boeNetworkToNextPage(operateData,data){


    hiWebOsFrame.createPage('boe_bg_page_id',null, null, null,function(a){
        hiWebOsFrame.boe_bg_page_id = a;
        hiWebOsFrame.createPage('boe_input_source_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_input_source_page_id = b;
            hiWebOsFrame.boe_bg_page_id.open();
            hiWebOsFrame.boe_network_page_id.close();
            b.hiFocus();
            b.open();


        })
    });


}
function boeNetworkPageOnOpen(){
    var data = boeNetworkPageData;

        boeChangeCurrSep(5);

    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        for(var i = 0;i<2;i++) {
            data.boeNetworkGridUl.Data[i].arrow.Data = "img/arrow_normal.png";
            data.boeNetworkGridUl.Data[i].arrow_focus.Data = "img/arrow_focus.png";
        }
    }
    else
    {
        for(var i = 0;i<2;i++) {
            data.boeNetworkGridUl.Data[i].arrow.Data = "img/arrow_normal_rtl.png";
            data.boeNetworkGridUl.Data[i].arrow_focus.Data = "img/arrow_focus_rtl.png";
        }

    }
    this.page.rewriteDataOnly();
    hiWebOsFrame.boe_network_page_id.hiFocus('boeNetworkGridUl');
}
function boeNetworkOnDestroy(){
    hiWebOsFrame.boe_network_page_id = null;
}
