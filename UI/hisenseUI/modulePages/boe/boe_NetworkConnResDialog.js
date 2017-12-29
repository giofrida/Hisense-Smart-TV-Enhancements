/**
 * Created by Admin on 14-6-18.
 */
function getboeNetSetConnResDialogData(opt){
    opt.CaE = [
        {
            "id":"boeNetworkConnNetResultTip",
            "description":"结果信息",
            "CaEType":"div"
        },
        {
            "id":"boeNetworkConnNetResultImg",
            "description":"搜索无线网络提示图片",
            "CaEType":"img"
        }
    ];
    boeInitWifiResOperateData();
    return boeNetworkWifiConnResultDialog;
}
var boeNetworkWifiConnResultDialog={
    "boeNetworkConnNetResultTip":{"Data":"Failed to connect. Please try again"},
    "boeNetworkConnNetResultImg":{ Data:"img/network/success.png"},
    "operateData":{
        "resultImgList":["img/network/failure.png","img/network/success.png","img/network/failure.png"],
        "connectResult":0,//0:fail,1:sucess
        "connectInfo":["Failed to connect. Please try again","Connected successfully","The password is incorrect, please try again"]
    },
    "langData":{
        "Connected successfully":["Connected successfully"],
        "Failed to connect. Please try again":["Failed to connect. Please try again"],
        "The password is incorrect, please try again":["The password is incorrect, please try again"]
    },
    rewrite:"boeRefreshWifiResDialog"
}
/*******************************************************************
 name:boeInitWifiResOperateData
 description:初始化信息展示页的operateData
 input:
 output:
 return
 *******************************************************************/
function boeInitWifiResOperateData(){
    var data = boeNetworkWifiConnResultDialog;
    if(tv == false){
        data.operateData.connectResult = 0;
    }else{
        data.operateData.connectResult =  model.network.getEnumNetworkAvailable();
        if(data.operateData.connectResult == 0){
            var enumLink = model.network.getEnumLink();
            debugPrint("boeInitWifiResOperateData:enumLink-"+enumLink,DebugLevel.ALWAYS);
                if(enumLink == 6){
                    data.operateData.connectResult = 2;
            }
        }
    }

    debugPrint("boeInitWifiResOperateData:connectResult"+data.operateData.connectResult);

}
/*******************************************************************
 name:boeRefreshWifiResDialog
 description:刷新信息展示页
 input:
 output:
 return
 *******************************************************************/
function boeRefreshWifiResDialog(data){
    data.boeNetworkConnNetResultTip.Data = data.operateData.connectInfo[data.operateData.connectResult];
    data.boeNetworkConnNetResultImg.Data = data.operateData.resultImgList[data.operateData.connectResult];
}
/*******************************************************************
 name:boeWifiConnResDisappear
 description:消失连接结果
 input:
 output:
 return
 *******************************************************************/
function boeWifiConnResDisappear(){
    var data = boeNetworkWifiConnResultDialog;
    if(data.operateData.connectResult != 1) {

        if (getboeNetworkWifiSetType() == 0) {//自动
            setboeNetworkWifiSetPageConnState();
            //hiWebOsFrame.boe_NetworkConnResDialog.origin.hiFocus();
            hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus();
            //debugPrint('focus pageid:' + hiWebOsFrame.boe_NetworkConnResDialog.origin.id);
            hiWebOsFrame.boe_NetworkConnResDialog.destroy();
        } else {//手动添加
            //hiWebOsFrame.boe_NetworkWifiSetPage.close();
            hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus();
            //debugPrint('focus pageid:' + hiWebOsFrame.boe_NetworkConnResDialog.origin.id);
            hiWebOsFrame.boe_NetworkConnResDialog.destroy();
        }
    }
    else
    {
        hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_complete_page_id = b;
            b.open();
            b.hiFocus();
            hiWebOsFrame.boe_NetworkConnResDialog.destroy();
            hiWebOsFrame.boe_netbg_page_id.destroy();
        })
    }

}

function boeNetSetConnResDialogOnOpen(){
    var data = boeNetworkWifiConnResultDialog;
    //连接成功时，将焦点移至主页上面的箭头上面；
    //连接失败时，增加定时器，退出此页面，返回到原来的页面
    //if(data.operateData.connectResult != 1){
        data.operateData.wifiConnResTimer = setTimeout(boeWifiConnResDisappear,3000);
    //}
}

function boeNetSetConnResDialogOnFocus(){
    var data = boeNetworkWifiConnResultDialog;
    //连接成功时，将焦点移至主页上面的箭头上面；
    //连接失败时，增加定时器，退出此页面，返回到原来的页面
    if(data.operateData.connectResult == 1){

        //hiWebOsFrame.boe_netbg_page_id.hiFocus('navNetworkBGRightArrow');
        hiWebOsFrame.boe_netbg_page_id.operateData.originid = this.id;
    }
}

function boeNetSetConnResDialogOnDestroy(){
    var data = boeNetworkWifiConnResultDialog;
    clearTimeout(data.operateData.wifiConnResTimer);
    hiWebOsFrame.boe_NetworkConnResDialog = null;
}