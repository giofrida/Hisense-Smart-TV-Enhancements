/**
 * Created by xuehongfeng on 2015/11/9.
 */
function getboeEthernetResultPageData(opt){
    opt.CaE = [
        {
            "id":"result_txt",
            "description":"result",
            "CaEType":"div"
        },
        {
            "id": "EthernetResultImg",
            "description": "",
            "CaEType": "img"
        },
        {
            "id":"result_done_btn",
            "description":"result page button",
            "CaEType":"div",
            "classes":{
                "normal":"result_btn_Normal",
                "focus":"result_btn_Focus"
            },
            "handler":{
                "aftEnterHandler":"EthernetResultToNextPage","befRightHandler":"EthernetResultToNextPage"
            }
        },
        {
            "id":"result_try_btn",
            "description":"result page button",
            "CaEType":"div",
            "classes":{
                "normal":"result_failed_left_btn_normal",
                "focus":"result_failed_left_btn_focus"
            },
            "nav":{
                "rightTo":"result_set_btn"
            },
            "onFocusFun": "boeOnFocus",
            "onBlurFun": "boeOnBlur",
            "handler":{
                "aftEnterHandler":"boetryEthernetConnect",
                "befLeftHandler": "boeOnBlur"

            }
        },
        {
            "id":"result_set_btn",
            "description":"result page button",
            "CaEType":"div",
            "classes":{
                "normal":"result_failed_right_btn_normal",
                "focus":"result_failed_right_btn_focus"
            },
            "nav":{
                "leftTo":"result_try_btn"
            },
            "handler":{
                "aftEnterHandler":"boeEthernetIPsetting","befRightHandler":"EthernetResultToNextPage"

            }
        }
    ];
    botEthernetResultPageInit();

    return boeEthernetResultPageData;
}
var boeEthernetResultPageData = {
    "EthernetResultImg": {"Data":"img/network/success.png"},
    "result_txt":{"Data":"Connection failed!"},
    "result_done_btn":{"Data":"Done"},
    "result_try_btn":{"Data":"Try again"},
    "result_set_btn":{"Data":"IP Settings"},
    "operateData":{
        "resultImgList":["img/network/failure.png","img/network/success.png"],
        "connectResult":0,//0:fail,1:sucess
        //"ipAddress":"",
        "resultInfo":["Connection failed!","Connected successfully"]
    },
    rewrite:"boeRefreshEthernetResultPage"
};
function boeRefreshEthernetResultPage(){
    var data = boeEthernetResultPageData;

    debugPrint("[xuehongfeng]rewriet connresult is " + data.operateData.connectResult,DebugLevel.ALWAYS);
    data.result_txt.Data = data.operateData.resultInfo[data.operateData.connectResult];
    data.EthernetResultImg.Data = data.operateData.resultImgList[data.operateData.connectResult];


}

function boeOnFocus(){
    $("#result_try_btn").removeAttr("style");
    restoreMarqueeCommon("#boe_ethernet_result #resultFaildFrame div", -1, 0 , 360);
    $("#result_try_btn").css("width", 360);

}
function boeOnBlur(){

    restoreMarqueeCommon("#boe_ethernet_result #resultFaildFrame div", 0, -1 , 360);
}

function botEthernetResultPageInit(){
    var data = boeEthernetResultPageData;
    if(tv) {
        //model.network.setEnumIp_config(0);
        //data.operateData.ipAddress = model.network.getIp_address();
        //debugPrint("boeInitIPAddress:"+data.operateData.ipAddress,DebugLevel.ALWAYS);
        ////operateData.subnet_Mask = model.network.getSubnet_mask();
        ////operateData.default_Gateway = model.network.getGateway();
        ////operateData.primary_DNS = model.network.getDns_server_1();
        ////operateData.secondary_DNS = model.network.getDns_server_2();
        ////debugPrint("boeInitNetSetEtherIpSetPageData:ipConfigType="+operateData.ipConfigType);
        //if(data.operateData.ipAddress.ipAddress != '') {
        //    data.operateData.connectResult = 1;
        //}
        //else
        //{
        //    data.operateData.connectResult = 0;
        //}
        data.operateData.connectResult = model.network.getEnumNetworkAvailable();
        debugPrint("[xuehongfeng ethernet result] is"+data.operateData.connectResult,DebugLevel.ALWAYS);
    }
}
//function boeNetEthernetStateCallBack(state){
//    var data=boeEthernetResultPageData;
//    debugPrint("navNetworkNetSetEtherSetStateCallBack:"+state,DebugLevel.ALWAYS);
//    switch (state){
//        case 3://idle
//            data.operateData.connectResult = 1;
//            hiWebOsFrame.boe_ethernet_result.rewriteDataOnly();
//            break;
//        case 4://update
//            break;
//        case 9://not available
//            break;
//        default :
//            break;
//    }
//}
function boeEthernetResultPageOnOpen(){
    var data = boeEthernetResultPageData;
    if(data.operateData.connectResult == 1)//success
    {
        hiWebOsFrame.boe_ethernet_result.hiFocus('result_done_btn');
        $("#resultFaildFrame").css("visibility","hidden");
        $("#resultBtnDoneFrame").css("visibility","visible");
        debugPrint("[xuehongfeng]connresult is 1 foucs on done btn",DebugLevel.ERROR);
    }
    else //failed
    {
        hiWebOsFrame.boe_ethernet_result.hiFocus('result_try_btn');
        $("#resultFaildFrame").css("visibility","visible");
        $("#resultBtnDoneFrame").css("visibility","hidden");
        debugPrint("[xuehongfeng]connresult is 1 foucs on try btn",DebugLevel.ERROR);
    }
    this.page.rewriteDataOnly();
    //hiWebOsFrame.boe_network_page_id.hiFocus('boeNetworkGridUl');
}
function boeEthernetResultPageOnDestroy(){
    hiWebOsFrame.boe_ethernet_result = null;
}
function EthernetResultToPreviousPage(){
    hiWebOsFrame.boe_ethernet_result.destroy();
        hiWebOsFrame.createPage('boe_disclaimer_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_disclaimer_page_id = b;
            b.open();
            b.hiFocus();
            hiWebOsFrame.boe_netbg_page_id.destroy();
        })
}
function boetryEthernetConnect()
{
    if(tv) {
        hiWebOsFrame.boe_ethernet_result.destroy();
        hiWebOsFrame.createPage('boe_search_ethernet',null, null, null,function(b){
            hiWebOsFrame.boe_search_ethernet = b;
            b.open();
            b.hiFocus();
        });
    }
    this.page.rewriteDataOnly();
}
function boeEthernetIPsetting()
{
    hiWebOsFrame.createPage('boe_NetworkEthernetSetPage',null,null, null,function(a){
        hiWebOsFrame.boe_ethernet_result.destroy();
        hiWebOsFrame.boe_NetworkEthernetSetPage = a;
        a.open();
        a.hiFocus();
        hiWebOsFrame.boe_NetworkEthernetSetPage.rewriteDataOnly();
    });
}
function EthernetResultToNextPage(){
    debugPrint("[xuehongfeng]connresult EthernetResultToNextPage",DebugLevel.ERROR);
    hiWebOsFrame.boe_ethernet_result.destroy();
    hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_complete_page_id = b;
        b.open();
        b.hiFocus();
        hiWebOsFrame.boe_netbg_page_id.destroy();
    })
}
