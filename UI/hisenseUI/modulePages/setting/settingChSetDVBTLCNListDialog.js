/**
 * Created by Admin on 14-6-18.
 */
function getSettingChSetDVBTLCNListDialogData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBTLCNListTitle",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "settingChSetDVBTLCNListContUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "settingChSetDVBTUKAreaLiNormal", "focus": "settingChSetDVBTUKAreaLiFocus",
                "disable":"settingChSetDVBTUKAreaLiDisable"
            },
            "handler": {
                "aftEnterHandler": "settingChSetDVBTLCNListEnterHandler",
                "aftDownHandler":"settingChSetDVBTLCNListDownHandler",
                "aftUpHandler":"settingChSetDVBTLCNListUpHandler",
                "befLeftHandler":"settingChSetDVBTLCNListLeftHandler",
                "befRightHandler":"settingChSetDVBTLCNListRightHandler",
                "aftLeftHandler":"settingChSetDVBTLCNListAddMarquee",
                "aftRightHandler":"settingChSetDVBTLCNListAddMarquee",
                "befDownHandler":"settingChSetDVBTLCNListLoseMarquee",
                "befUpHandler":"settingChSetDVBTLCNListLoseMarquee"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetDVBTLCNTitle",
                    "description": "",
                    "CaEType": "div",
                    "classes":{
                        "normal":"settingChSetDVBTUKAreaLeft","disable":"settingChSetDVBTUKAreaLeft"
                    }
                },
                {
                    "id": "settingChSetDVBTLCNListItem",
                    "description": "",
                    "CaEType": "span",
                    "classes":{
                        "normal":"settingChSetDVBTAreaName","disable":"settingChSetDVBTAreaName"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "settingChSetDVBTLCNTitle", "settingChSetDVBTLCNListItem"],
                "PageSize":3
            }
        }
    ];
    settingInitChSetDVBTLCNListDialog();
    return settingChSetDVBTLCNListData;
}
var settingChSetDVBTLCNListData={
    "settingChSetDVBTLCNListTitle":{"Data":"LCN"},
    "settingChSetDVBTLCNListContUl":{
        "Data":[
            {
                "settingChSetDVBTLCNTitle":{"Data":""},
                "settingChSetDVBTLCNListItem":{"Data":""}
            }
        ],
        "SelectedIndex":0
    },
    "operateData":{
        "currCountry":"UK",//"Malaysia"
        "currLCNSelectedIdx":0,
        "LCNMap":[
            {
                "idx":0,
                "title":"LCN1",
                "num":2,
                "nameList":[],
                "selectedIdx":0
            }
        ]
    },
    "langData":{
        "LCN":[]
    },
    rewrite:"settingRewriteChSetDVBTLCNListDialog"
}
/*******************************************************************
 name:settingInitChSetDVBTLCNListDialog
 description:初始化DVBC的运营商列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDVBTLCNListDialog(){
    try{
        var opData = settingChSetDVBTLCNListData.operateData;
        opData.currLCNSelectedIdx = 0;
        opData.currCountry = "UK";//"Malaysia"
        if(tv == false){
            var nonAnalyseLCNList = ["0","217","2","NAPOLI TIVU","Napli Tivu",
                "1","814","2","Medjugorie Italia TV","Medjugorie Italia TV",
                "2","819","2","MATRIX TV","Matrix TV Italia",
                "3","824","2","AMICI DI MEDJUGORIE TV","Amici Di Medjugorie TV",
                "4","15","2","TELECITY 7 Gold Lombardia","Telecity 7 Gold Lombardia",
                "5","170","2","OKITALIA TV2","OKITALIA TV2",
                "6","225","2","OKITALIA TV3","OKITALIA TV3",
                "7","40","2","BOING PROVVISORIO","Boing",
                "8","83","2","CANALE ITALIA 83","Canale Italia 83",
                "9","84","2","CANALE ITALIA 84","Canale Italia 84",
                "10","53","2","ITALIA 53","Italia 53",
                "11","92","2","SUPERTV VA","SUPERTV BG",
                "12","711","2","Radio Marconi","RadioLodi"];
        }else{
            var nonAnalyseLCNList = model.channelSearch.getLcnConflict();
            debugPrint('settingInitChSetDVBTLCNListDialog:'+JSON.stringify(nonAnalyseLCNList));
        }
        opData.LCNMap = [];
        var i = 0;
        while(i < nonAnalyseLCNList.length){
            var itemData={
                "idx":parseInt(nonAnalyseLCNList[i]),
                "title":nonAnalyseLCNList[i+1],
                "num":parseInt(nonAnalyseLCNList[i+2]),
                "nameList":[],
                "SelectedIndex":0
            }
            for(var j = i+3;j < i+3+itemData.num;j++){
                itemData.nameList.push(nonAnalyseLCNList[j]);
            }
            opData.LCNMap.push(itemData);
            i = i+3+itemData.num;
        }
    }catch (ex){
        debugPrint("settingInitChSetDVBTLCNListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDVBTLCNListDialog
 description:刷新安全模式列表对话框
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBTLCNListDialog(data){
    try{
        var opData = data.operateData;
        var LCNListUl = data.settingChSetDVBTLCNListContUl;
        if(LCNListUl.Data.length > opData.LCNMap.length){
            LCNListUl.Data.splice(opData.LCNMap.length);
        }else{
            while(LCNListUl.Data.length < opData.LCNMap.length){
                var itemData = {
                    "settingChSetDVBTLCNTitle":{"Data":""},
                    "settingChSetDVBTLCNListItem":{"Data":""}
                }
                LCNListUl.Data.push(itemData);
            }
        }
        for(var i=0; i < opData.LCNMap.length; i++){
            var item = opData.LCNMap[i];
            LCNListUl.Data[i].settingChSetDVBTLCNTitle.Data = item.title;
            LCNListUl.Data[i].settingChSetDVBTLCNListItem.Data = item.nameList[item.SelectedIndex];
        }
        LCNListUl.SelectedIndex = opData.currLCNSelectedIdx;
    }catch (ex){
        debugPrint("settingRewriteChSetDVBTLCNListDialog:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDVBTUKAreaListEnterHandler
 description:设置使用的运营商网络
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBTLCNListEnterHandler(){
    try{
    //var setLcnArray = [];
    //var opData = settingChSetDVBTLCNListData.operateData;
    //debugPrint('settingInitChSetDVBTLCNListDialog:'+opData.LCNMap.length);
    //for(var i = 0; i < opData.LCNMap.length; i++){
	 // setLcnArray.push(opData.LCNMap[i].SelectedIndex);
    //}
    //debugPrint('settingInitChSetDVBTLCNListDialog:'+setLcnArray);
    //if(tv){
    //    model.channelSearch.SetLcnConflict(setLcnArray);
    //}
    this.page.close();
    this.page.destroy();
    hiWebOsFrame.ChSetChannelScanPage.hiFocus();
    }catch(ex){
	debugPrint("settingChSetDVBTLCNListEnterHandler:"+ex.message,DebugLevel.ERROR);
    }
}
function settingChSetDVBTLCNListUpHandler(){
    var opData = settingChSetDVBTLCNListData.operateData;
    opData.currLCNSelectedIdx = this.SelectedIndex;
    //AddMarquee
    var htmlText = $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys"+this.SelectedIndex).html();
    if (htmlText.length >15) {
        $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys"+this.SelectedIndex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
}
function settingChSetDVBTLCNListDownHandler(){
    var opData = settingChSetDVBTLCNListData.operateData;
    opData.currLCNSelectedIdx = this.SelectedIndex;
    //AddMarquee
    var htmlText = $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys"+this.SelectedIndex).html();
    if (htmlText.length >15) {
        $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys"+this.SelectedIndex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
}
function settingChSetDVBTLCNListLoseMarquee(){
    var marquee = $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys" +this.SelectedIndex+ " marquee");
    if (marquee.length > 0) {
        var htmlText = $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys" +this.SelectedIndex+ " marquee").html();
        var marquee = $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys"+this.SelectedIndex ).html(htmlText);
    }
}
function settingChSetDVBTLCNListAddMarquee(){
    //AddMarquee
    var htmlText = $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys"+this.SelectedIndex).html();
    if (htmlText.length >15) {
        $("#settingChSetDVBTLCNListContUl_settingChSetDVBTLCNListItem_sys"+this.SelectedIndex).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
}
function settingChSetDVBTLCNListLeftHandler(){
    var opData = settingChSetDVBTLCNListData.operateData;
    if(opData.LCNMap[this.SelectedIndex].SelectedIndex > 0){
        opData.LCNMap[this.SelectedIndex].SelectedIndex--;
        hiWebOsFrame.ChSetDVBTLCNListDialog.rewriteDataOnly();
    }
}
function settingChSetDVBTLCNListRightHandler(){
    var opData = settingChSetDVBTLCNListData.operateData;
    if(opData.LCNMap[this.SelectedIndex].SelectedIndex < opData.LCNMap[this.SelectedIndex].nameList.length-1){
        opData.LCNMap[this.SelectedIndex].SelectedIndex++;
        hiWebOsFrame.ChSetDVBTLCNListDialog.rewriteDataOnly();
    }
}
/*******************************************************************
 name:settingChSetDVBTLCNListEscHandle
 description:从DVBC 运营商列表按返回键处理
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBTLCNListEscHandle(){
    //var setLcnArray = [];
    //var opData = settingChSetDVBTLCNListData.operateData;
    //$.each(opData.LCNMap,function(idx,item){
    //    setLcnArray.push(item.SelectedIndex);
    //});
    //if(tv){
    //    model.channelSearch.SetLcnConflict(setLcnArray);
    //}
    this.page.close();
    this.page.destroy();

    hiWebOsFrame.ChSetChannelScanPage.hiFocus();
}

function settingChSetDVBTLCNListOnOpen()
{
    var opData = settingChSetDVBTLCNListData.operateData;

}

function settingChSetDVBTLCNListOnDestroy(){
    var setLcnArray = [];
    var opData = settingChSetDVBTLCNListData.operateData;
    debugPrint('settingChSetDVBTLCNListOnDestroy:'+opData.LCNMap.length);
    for(var i = 0; i < opData.LCNMap.length; i++){
        setLcnArray.push(opData.LCNMap[i].SelectedIndex);
    }
    debugPrint('settingChSetDVBTLCNListOnDestroy:'+setLcnArray);
    if(tv){
        model.channelSearch.SetLcnConflict(setLcnArray);
    }
    hiWebOsFrame.ChSetDVBTLCNListDialog = null;
}