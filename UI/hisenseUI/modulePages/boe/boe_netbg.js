function getboeNetbgPageData(opt){
    opt.CaE = [
        {
            "id":"netbgPageLeftArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeLeftArrowBtnNormal"
            }
        },
        {
            "id":"netbgPageRightArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeRightArrowBtnNormal"
            }
        },
        {
            "id": "NetTypeIcon",
            "description": "",
            "CaEType": "img"
        },
        {
            "id":"NetTypeSelect",
            "description":"network bg page button",
            "CaEType":"div",
            "classes":{
                "normal":"NetTypeSelectNormal",
                "focus":"NetTypeSelectFocus"
            },
            "handler":{
                "aftEnterHandler":"boeChangeNetType","befLeftHandler":"NetworkBgToPreviousPage","befRightHandler":"NetworkBgMoveFocus"
            }
        }
    ];
    botNetbgPageInit();
    return boeNetbgPageData;
}
var boeNetbgPageData = {
    "NetTypeIcon": {"Data":""},
    "NetTypeSelect":{"Data":""},
    //"NetIcons":["img/ethernet_focus.png","img/wireless_focus.png"],
    //"NetTypeTitle":["Ethernet","Wireless"],
    "operateData":{
        "netTypeMapList":
            [
                {
                    "netTypeCode":0,
                    "netTypeName":"Switch to Wireless",
                    "netTypeIcon":"img/wireless_focus.png"
                },
                {
                    "netTypeCode":1,
                    "netTypeName":"Switch to Ethernet",
                    "netTypeIcon":"img/ethernet_focus.png"
                }
            ],
        "currNetType":0,
        "originid":""
    },
    rewrite:"boeRefreshNetbgPage"
}
function boeRefreshNetbgPage(){
    var data = boeNetbgPageData;
    data.NetTypeIcon.Data = data.operateData.netTypeMapList[data.operateData.currNetType].netTypeIcon;
    data.NetTypeSelect.Data = data.operateData.netTypeMapList[data.operateData.currNetType].netTypeName;
}

function botNetbgPageInit(){
    var operateDate = boeNetbgPageData.operateData;
    operateDate.currNetType = getboeNetSetSetCurrNetTypeIdx();
}
function getboeNetSetSetCurrNetTypeIdx(){
    var data = boeNetbgPageData;
    try{
        var netTypeMapList = data.operateData.netTypeMapList;
        if(tv == false){
            return 0;
        }else{
            var isEthCon;
            try {
                isEthCon = boeNetSetDisclaimerPageData.operateData.isEthernetConnected;
            }
            catch (ex) {
                DBG_ERROR("getboeNetSetSetCurrNetTypeIdx isEthCon error " + ex.message);
            }
            var networkType = !isEthCon;    //0: ethernet disconnected, 1: ethernet connected
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
function boeNetbgPageOnOpen(){
    boeChangeCurrSep(5);
    this.page.rewriteDataOnly();
    //hiWebOsFrame.boe_network_page_id.hiFocus('boeNetworkGridUl');
}
function boeNetbgOnDestroy(){
    hiWebOsFrame.boe_netbg_page_id = null;
}
function boeChangeNetType(){
    var data = boeNetbgPageData;
    debugPrint("[xuehongfeng]"+data.operateData.currNetType,DebugLevel.ALWAYS);
    data.operateData.currNetType = 1 - data.operateData.currNetType;
    debugPrint("[xuehongfeng] after switch is"+data.operateData.currNetType,DebugLevel.ALWAYS);
    if(tv)
    {
        model.network.setEnumNetworking(data.operateData.currNetType);
    }
    boeNetworkBgUlSwitchType(data.operateData.currNetType);
    hiWebOsFrame.boe_netbg_page_id.rewriteDataOnly();
}
function boeNetworkBgUlSwitchType(netType){
    var originPage = hiWebOsFrame.getPageByIdFromSdkPages(hiWebOsFrame.boe_netbg_page_id.operateData.originid);
    if(!!originPage) {
        DBG_ALWAYS("boeNetworkBgUlSwitchType:"+originPage.id);
        originPage.destroy();
    }
    if(netType == 1)
    {
        hiWebOsFrame.createPage('boe_search_wifi',null, null,null,function(b){
            hiWebOsFrame.boe_search_wifi = b;
            b.open();
            b.hiFocus();
            hiWebOsFrame.boe_netbg_page_id.hiBlur();
        });
    }
    else
    {
        hiWebOsFrame.createPage('boe_search_ethernet',null, null,null,function(b){
            hiWebOsFrame.boe_search_ethernet = b;
            b.open();
            b.hiFocus();
            hiWebOsFrame.boe_netbg_page_id.hiBlur();
            hiWebOsFrame().boe_search_ethernet.rewriteDataOnly();
        });
    }
}
function networkBgPageAftLeftHandler(){
    debugPrint("[xuehongfeng]1", DebugLevel.ALWAYS);
    hiWebOsFrame.boe_netbg_page_id.operateData.originid = this.page.id;
    var curComId =this.currentSelectedTree.length> 0? this.currentSelectedTree[this.currentSelectedTree.length-1].id:'',
        curComCaE = this.getCaE(curComId),
        children = curComCaE.CaEType == 'Ul'?(" li."+curComCaE.opts.classes.focus ):" ";
    $('#'+curComId+children).attr('class',curComCaE.opts.classes.normal);
    //this.page.hiBlur();
    hiWebOsFrame.boe_netbg_page_id.hiFocus('NetTypeSelect');
}

function NetworkBgMoveFocus(){
    //$('#NetTypeSelect').attr('class','NetTypeSelectNormal');

    var originPage = hiWebOsFrame.getPageByIdFromSdkPages(hiWebOsFrame.boe_netbg_page_id.operateData.originid);
    debugPrint("[xuehongfeng]originid"+hiWebOsFrame.boe_netbg_page_id.operateData.originid,DebugLevel.ALWAYS);
    if(!!originPage) {
        var curComId = originPage.currentSelectedTree.length > 0 ? originPage.currentSelectedTree[originPage.currentSelectedTree.length - 1].id : '',
            curComCaE = originPage.getCaE(curComId),
            list = ['span', 'div', 'img', 'div', 'input', 'Container'];

        if ($.inArray(curComCaE.CaEType, list) > -1) {
            $('#' + curComId).attr('class', curComCaE.opts.classes.focus);
            //debugPrint("[xuehongfeng]", DebugLevel.ALWAYS);
        }
        debugPrint("[xuehongfeng]1", DebugLevel.ALWAYS);
            originPage.hiFocus();
            hiWebOsFrame.boe_netbg_page_id.hiBlur();
            return false;
    }
}
function NetworkBgToPreviousPage(){

    hiWebOsFrame.boe_bg_page_id.module = "temp";
    closePagesOrModuleByPage(hiWebOsFrame.getCurrentPage());
    hiWebOsFrame.boe_bg_page_id.module = "wizard";
//    hiWebOsFrame.createPage('boe_bg_page_id',null, null, null,function(a){
//        hiWebOsFrame.boe_bg_page_id = a;
        hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_disclaimer_page_id = b;
//            hiWebOsFrame.boe_bg_page_id.open();
            b.open();
            b.hiFocus();
//            hiWebOsFrame.boe_netbg_page_id.close();
//            hiWebOsFrame.boe_netbg_page_id.destroy();
//        })
    });
}
