/**
 * Created by Admin on 14-6-18.
 */
function getNetworkEthernetTypePageData(opt){
    opt.CaE = [
        {
            "id":"navNetworkEthernetTypeUl",
            "description":"搜索到的无线网络",
            "CaEType":"Ul",
            "oriCaE":[
                {
                    "id":"navNetworkEthernetTypeImg",
                    "description":"连接图片",
                    "CaEType":"img"
                },
                {
                    "id":"navNetworkEthernetTypeTitle",
                    "description":"连接类型",
                    "CaEType":"span"
                }
            ],
            "UlConfig":{
                "NavigationBarDataItem":["navNetworkEthernetTypeImg","navNetworkEthernetTypeTitle"],
                "PageSize":2
            },
            "classes":{
                "normal":"navNetworkEthernetTypeLiNormal","focus":"navNetworkEthernetTypeLiFocus",
                "dataSelected":"navNetworkEthernetTypeLiNormal"
            },
            "nav":{
                "upTo":"","rightTo":""
            },
            "handler":{
                "aftUpHandler":"networkEthertnetTypeUpDownHandler",
                "aftDownHandler":"networkEthertnetTypeUpDownHandler",
                "aftEnterHandler":"networkEthertnetTypeEnterHandler"
            }
        }
    ];
    return networkEthertnetTypePageData;
}
var networkEthertnetTypePageData={
    "navNetworkEthernetTypeUl":{
        "Data":[
            {
                "navNetworkEthernetTypeImg":{"Data":"img/network/DHCP.png"},
                "navNetworkEthernetTypeTitle":{"Data":"DHCP"}
            },
            {
                "navNetworkEthernetTypeImg":{"Data":"img/network/Ethernet-un.png"},
                "navNetworkEthernetTypeTitle":{"Data":"Manual"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
    },
    "langData":{
        "Manual":["Manual"],
        "DHCP":["DHCP"]
    },
    rewrite:"networkEthertnetTypePageDataRewrite"
}


/*******************************************************************
 name:wizardRewriteWifiSetPage
 description:刷新无线网络设置页
 input:
 output:
 return
 *******************************************************************/
function networkEthertnetTypePageDataRewrite(data){

}


function networkEthertnetTypeEnterHandler(){
    var SelectedIndex = this.SelectedIndex;//settingNetSetEtherSetPageId  boe_NetworkEthernetSetPage
    hiWebOsFrame.createPage('boe_NetworkEthernetSetPage',null, hiWebOsFrame.boe_NetworkEthernetType, null,function(a){
        hiWebOsFrame.boe_NetworkEthernetType.close();
        hiWebOsFrame.boe_NetworkEthernetSetPage = a;
        hiWebOsFrame.boe_NetworkEthernetSetPage.operateData.ipConfigType = SelectedIndex;
        hiWebOsFrame.boe_NetworkEthernetSetPage.firstFocusId = hiWebOsFrame.boe_NetworkEthernetSetPage.operateData.EthernetFirstFocusList[SelectedIndex];
        a.open();
        a.hiFocus(hiWebOsFrame.boe_NetworkEthernetSetPage.firstFocusId);
        hiWebOsFrame.boe_NetworkEthernetSetPage.rewriteDataOnly();
    });
}

function networkEthertnetTypeUpDownHandler(){
    var liData = networkEthertnetTypePageData.navNetworkEthernetTypeUl.Data;
    if(this.SelectedIndex == 0){
        liData[0].navNetworkEthernetTypeImg.Data = liData[0].navNetworkEthernetTypeImg.Data.replace('-un','');
        liData[1].navNetworkEthernetTypeImg.Data = liData[1].navNetworkEthernetTypeImg.Data.replace('.png','-un.png');
    }
    else if(this.SelectedIndex == 1){
        liData[1].navNetworkEthernetTypeImg.Data = liData[1].navNetworkEthernetTypeImg.Data.replace('-un','');
        liData[0].navNetworkEthernetTypeImg.Data = liData[0].navNetworkEthernetTypeImg.Data.replace('.png','-un.png');
    }
    this.page.rewriteDataOnly();
}



/*******************************************************************
 name:wizardNetSetWifiPageEscHandle
 description:从wifi设置页返回
 input:
 output:
 return
 *******************************************************************/
function networkEthertnetTypePageEscHandle(){
    hiWebOsFrame.boe_netbg_page_id.close();
    hiWebOsFrame.boe_NetworkEthernetType.close();
    hiWebOsFrame.boe_network_page_id.open();
    hiWebOsFrame.boe_network_page_id.hiFocus();
    hiWebOsFrame.boe_NetworkEthernetType.destroy();
}
function networkEthertnetTypePageOnOpen(){
}

function networkEthertnetTypePageOnDestroy(){
    hiWebOsFrame.boe_NetworkEthernetType = null;
}