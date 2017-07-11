/**
 * Created by xuehongfeng on 2015/11/16.
 */
function getboeNetSetWPSPageData(opt){
    opt.CaE = [
        {
            "id":"boeNetSetWPSCodeTitle",
            "description":"PBC��ʾ��Ϣ",
            "CaEType":"span"
        },
        {
            "id":"boeNetSetWPSIcon",
            "description":"PBC img",
            "CaEType":"img"
        },
        {
            "id":"boeNetSetWPSProTitle",
            "description":"PBC ������ʾ��Ϣ",
            "CaEType":"span"
        },
        {
            "id":"boeNetSetWPSConnProgressBar",
            "description":"PBC ���ӽ���",
            "CaEType":"ProgressBar",
            "CaE":[
                {
                    "id": "boeNetSetWPSConnProgressing",
                    "description": "������",
                    "CaEType": "div"
                }
            ],
            "classes":{
                "normal":"boeWPSProgressFrame"
            },
            "ProgressBarConfig": {
                PBProcessId: "boeNetSetWPSConnProgressing",//�������Ľ���id
                ShowTextId: "",//�ڽ������Ա��ðٷ������߷�����ʾ�������, Ĭ��Ϊ���ǲ���ʾ, �е�ʱ����Ҫ�����ṩid
                ShowTextIsMoved: false,//��ʾֵ��ǩ�Ƿ����Ž������ƶ�
                PBType: "direction",//��������, ��animation������ģʽ ��direction��ֱ��ģʽ
//                StepDuration: 20,// settimeout��ʱ�����, ��λms ��ʾÿ����1%d��ʱ����
//                MinValue: 0,  //��Сֵ, ���趨�Ļ�Ĭ��Ϊ0��
//                MaxValue: 100, //���ֵ�����趨Ĭ��Ϊ100��
                DefaultValue: 0,//Ĭ��ֵ
                Width: 840,//�������ܿ��
                TextFormat: "per",//	ShowText����ʾ��ʽ, ��per����ʾ�ٷ���, ��fra����ʾ����, ������Ϊ���Զ��庯����
                CompleteCallBack: null//����ﵽ����ֵʱ�Ļص�������
            }
        },
        {
            "id":"boeNetSetWPSCancelBtn",
            "description":"ȡ�����Ӱ�ť",
            "CaEType":"div",
            "classes":{
                "normal":"boeWifiSetWPSCancleBtnNormal","focus":"boeWifiSetWPSCancleBtnFocus"
            },
            "handler":{
                "aftEnterHandler":"boeNetSetWPSCancelHandle",
                "befRightHandler":"boeWifiSetWPSPageTonNextPage"
            }
        }
    ];
    boeInitSetNetWPSDialog();
    return boeNetSetWPSPageData;
}
var boeNetSetWPSPageData={
    //"settingNetSetPBCHeadTitle":{"Data":"PBC"},
    "boeNetSetWPSCodeTitle":{"Data":"Press the WPS button on your router; this is marked with WPS or the following symbol:"},
    "boeNetSetWPSIcon":{"Data":"img/PBC-WPS.png"},
    "boeNetSetWPSProTitle":{"Data":"The configuration takes approximately 2 minutes"},
    "boeNetSetWPSConnProgressBar":{
        "Data":{},
        "DefaultValue":0
    },
    "boeNetSetWPSCancelBtn":{"Data":"Cancel"},
    "operateData":{
        "connPercent":10,
        "PBCConnTimer":0
    },
    "langData":{
        "PBC":["PBC"],
        "Press the WPS button on your router; this is marked with WPS or the following symbol:":["Press the WPS button on your router; this is marked with WPS or the following symbol:"],
        "The configuration takes approximately 2 minutes":["The configuration takes approximately 2 minutes"],
        "Cancel":["Cancel"]
    },
    rewrite:"boeRewriteNetSetWPS"
}
/*******************************************************************
 name:boeInitSetNetWPSDialog
 description:��ʼ��PIN����ҳ��
 input:
 output:
 return
 *******************************************************************/
function boeInitSetNetWPSDialog(){
    try{
        var data = boeNetSetWPSPageData;
        data.operateData.connPercent = 0;
        data.operateData.PBCConnTimer = 0;
    }catch (ex){
        debugPrint("boeInitSetNetWPSDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function boeRewriteNetSetWPS(data){
    try{
        data.boeNetSetWPSConnProgressBar.DefaultValue = data.operateData.connPercent;
    }catch (ex){
        debugPrint("boeRewriteNetSetWPS:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:boeNetSetWPSCancelHandle
 description:ȡ��pin����
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWPSCancelHandle(){
    try{
        var data = boeNetSetWPSPageData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.boe_NetworkWifiWPS.close();
        hiWebOsFrame.boe_NetworkWifiSetPage.open();
        hiWebOsFrame.boe_NetworkWifiSetPage.hiFocus();
        hiWebOsFrame.boe_NetworkWifiWPS.destroy();
    }catch (ex){
        debugPrint("boeNetSetWPSCancelHandle:"+ex.message,DebugLevel.ERROR);
    }

}
function boeNetSetWPSTimerOutHandle(){
    var data = boeNetSetWPSPageData;
    debugPrint("boeNetSetWPSTimerOutHandle:"+data.operateData.connPercent,DebugLevel.ALWAYS);
    if(data.operateData.connPercent >= 100){
        boeNetSetWPSToResDialog();
    }else{
        data.operateData.connPercent = data.operateData.connPercent+1;
        hiWebOsFrame.boe_NetworkWifiWPS.rewriteDataOnly();
    }
}
function boeNetSetWPSToResDialog(){
    try{
        var data = boeNetSetWPSPageData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.boe_netbg_page_id.hiBlur();
        hiWebOsFrame.createPage('boe_NetworkConnResDialog',null, null, null,function(a){
            hiWebOsFrame.boe_NetworkWifiWPS.close();
            a.open();
            a.hiFocus();
            hiWebOsFrame.boe_NetworkConnResDialog = a;
            hiWebOsFrame.boe_NetworkWifiWPS.destroy();
        });
    }catch (ex){
        debugPrint("boeNetSetWPSToResDialog:"+ex.message,DebugLevel.ERROR);
    }
}
function boeNetSetWPSConnStateCallBack(state){
    debugPrint("boeNetSetWPSConnStateCallBack:state="+state,DebugLevel.ERROR);
    switch (state){
        case 0:
            var networkAvailable = model.network.getEnumNetworkAvailable();
            debugPrint("boeNetSetWPSConnStateCallBack:networkAailable="+networkAvailable,DebugLevel.ERROR);
            boeNetSetWPSToResDialog();
            break;
        case 1://applying setting
        case 2://connecting
            break;
        default :
            break;
    }
}
/*******************************************************************
 name:wizardNetSetNetTypeListDialogEscHandle
 description:���ؼ�����
 input:
 output:
 return
 *******************************************************************/
function boeNetSetWPSEscHandle(){
    boeNetSetWPSCancelHandle();
}
function boeNetSetWPSPageOnClose(){
    var data = boeNetSetWPSPageData;
    data.operateData.PBCConnTimer = setInterval(boeNetSetWPSTimerOutHandle,1200);
    if(tv == true){
        model.network.onEnumLinkChaged = boeNetSetWPSConnStateCallBack;
        model.network.WpsConnectStart(1);
    }
}
function boeWifiSetWPSPageTonNextPage(){
    hiWebOsFrame.boe_netbg_page_id.destroy();
    hiWebOsFrame.boe_NetworkWifiWPS.destroy();
    hiWebOsFrame.createPage('boe_complete_page_id',null, null, null,function(b){
        hiWebOsFrame.boe_complete_page_id = b;
        b.open();
        b.hiFocus();
    });
}
function boeNetSetWPSPageOnOpen(){
    var data = boeNetSetWPSPageData;
    data.operateData.PBCConnTimer = setInterval(boeNetSetWPSTimerOutHandle,1200);
    if(tv == true){
        model.network.onEnumLinkChaged = boeNetSetWPSConnStateCallBack;
        model.network.WpsConnectStart(1);
    }
}
function boeNetSetWPSPageOnDestroy(){
    try{
        var data = boeNetSetWPSPageData;
        clearInterval(data.operateData.PBCConnTimer);
        hiWebOsFrame.boe_NetworkWifiWPS = null;
        if(tv == true){
            model.network.onEnumLinkChaged = null;
        }
    }catch (ex){
        debugE("boe_NetworkWifiWPSOnDestroy:"+ex.message);
    }

}
