function getboeNetSetDisclaimerPageData(opt){
    opt.CaE = [
        {
            "id":"disPageLeftArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeLeftArrowBtnNormal"
            },
        },
        {
            "id":"disPageRightArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeRightArrowBtnNormal"
            },
        },
        {
            "id":"DisAcceptAllItem",
            "description":"同意说明",
            "CaEType":"div",
            "classes":{
                "normal":"DisAcceptAllItemNormal","focus":"DisAcceptAllItemFocus"
            },
            "nav":{
               "upTo":"","downTo":""
            },
            "handler":{
                "aftEnterHandler":"boeSetAceeptAllFlag","befLeftHandler":"boeDisToPreviousPage","befRightHandler":"boeDisToNextPage","befDownHandler":"DropDownFrameFocus"
            }
        },
        {
            "id":"disclaimerItem",
            "description":"同意说明",
            "CaEType":"div",
            "classes":{
                "normal":"disclaimerItemNormal","focus":"disclaimerItemFocus"
            },
            "nav":{
                "upTo":"DisAcceptAllItem","downTo":"disclaimerTips"
            },
            "handler":{
                "aftEnterHandler":"boeSetDisclaimerFlag","befLeftHandler":"boeDisToPreviousPage","befRightHandler":"boeDisToNextPage"
            }
        },
        {
            "id":"disclaimerTips",
            "description":"同意说明",
            "CaEType":"div",
            "classes":{
                "normal":"disclaimerTipsItemNormal","focus":"disclaimerTipsItemFocus"
            },
            "nav":{
//                "downTo":"disLogReportItem",
                "upTo":"disclaimerItem"
            },
            "handler":{
                "aftEnterHandler":"boeDisReadEULA","befLeftHandler":"boeDisToPreviousPage","befRightHandler":"boeDisToNextPage","befDownHandler":"boeDisDownOrNot"
            }
        },
        {
            "id":"disLogReportItem",
            "description":"同意说明",
            "CaEType":"div",
            "classes":{
                "normal":"disclaimerItemNormal","focus":"disclaimerItemFocus"
            },
            "nav":{
                "upTo":"disclaimerTips"
            },
            "handler":{
                "aftEnterHandler":"boeSetLogReportFlag","befLeftHandler":"boeDisToPreviousPage","befRightHandler":"boeDisToNextPage"
            }
        },
        {
            "id":"disclaimerTips_txt",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"disclaimerTips_txt_marquee",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"DisAcceptAllItem_selectImg",
            "description":"勾选按钮",
            "CaEType":"SwitchDiv",
            "imageList":{
                "openImg":"img/fuxuan_select.png",
                "closeImg":"img/fuxuan_normal.png"
            },
            "classes":{
                "normal":"AcceptAllDisclaimImg"
            }
        },
        {
            "id":"disclaimerItem_selectImg",
            "description":"勾选按钮",
            "CaEType":"SwitchDiv",
            "imageList":{
                "openImg":"img/fuxuan_select.png",
                "closeImg":"img/fuxuan_normal.png"
            },
            "classes":{
                "normal":"DisclaimImgSelect"
            }
        },
        {
            "id":"disLogReportItem_selectImg",
            "description":"勾选按钮",
            "CaEType":"SwitchDiv",
            "imageList":{
                "openImg":"img/fuxuan_select.png",
                "closeImg":"img/fuxuan_normal.png"
            },
            "classes":{
                "normal":"DisclaimImgSelect"
            }
        },
        {
            "id":"DisAcceptAllItem_title",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"DisAcceptAllItem_title_marquee",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"DisAcceptAllItem_title_marquee",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"disclaimerItem_title",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"disclaimerItem_title_marquee",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"disLogReportItem_title",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },
        {
            "id":"disLogReportItem_title_marquee",
            "description":"同意项",
            "CaEType":"span",
            "enableHtml":true
        },

        {
            "id":"disAcceptAllDropDownFrame",
            "description":"下拉图标",
            "CaEType":"div",
            "classes":{
                "normal": "disAcceptAllDropDownFrameNormal","focus": "disAcceptAllDropDownFrameFocus"
            },
            "nav":{
                "upTo":"DisAcceptAllItem"
            },
            "handler": {
                "aftEnterHandler":"DisDropDownEULAFrame"
            }
        }
    ];
    boeInitNetSetDisclaimerPage();
    return boeNetSetDisclaimerPageData;
}
var boeNetSetDisclaimerPageData={
//    "disLogReportItem":{},
    "DisAcceptAllItem_selectImg":{"Data":false},
    "disclaimerItem_selectImg":{"Data":false},
    "disLogReportItem_selectImg":{"Data":false},
    "DisAcceptAllItem_title":{"Data":"Accept All EULA Items"},
    "DisAcceptAllItem_title_marquee":{"Data":"Accept All EULA Items"},
    "disclaimerItem_title":{"Data":"Disclaimer"},
    "disclaimerItem_title_marquee":{"Data":"Disclaimer"},
    "disclaimerTips_txt":{"Data":"Click to review the detail of our disclaimer terms"},
    "disclaimerTips_txt_marquee":{"Data":"Click to review the detail of our disclaimer terms"},
    "disLogReportItem_title":{"Data":"Improve Hisense TV's"},
    "disLogReportItem_title_marquee":{"Data":"Improve Hisense TV's"},
    "operateData":{
        "isDropDownFrame":0,
        "acceptAllStateFlag":0,
        "acceptDisclaimerStateFlag":0,
        "disLogReportStateFlag":0,
        "isEthernetConnected":0,
        "isOpenfromDialog":0
    },
    "langData":{
        "Disclaimer": [],
        "Help to improve the user experience of products":[],
        "Make Hisense TV Better":[],
        "Accept All EULA Items":[],
        "Click to review the detail of our disclaimer terms":[]
    },
    rewrite:"boeRefreshDisclaimerPage"
}

function boeInitNetSetDisclaimerPage(){
    var data = boeNetSetDisclaimerPageData;

    try {
        var curbrand = model.system.getCurBrand();
    }
    catch (e) {
        debugE("getCurBrand error " + e);
    }
    if (!!curbrand  && curbrand != "his" && curbrand !=  "hisense" && curbrand !=  "Hisense") {
        data.disLogReportItem_title.Data = "Improve your smart TV's";
        data.disLogReportItem_title_marquee.Data = "Improve your smart TV's";
    }

    if(tv)
    {
        data.operateData.acceptDisclaimerStateFlag = model.basicSetting.getDisclaimer();
        //model.appsetting.setFreeviewPlayCtrl(data.operateData.acceptDisclaimerStateFlag);
        var isUK = hiWebOsFrame.getCurrentCountry() == "UK";
        ENABLE_FVP = (1 == data.operateData.acceptDisclaimerStateFlag && isUK);
        data.operateData.disLogReportStateFlag = model.basicSetting.getImproveHis();
        data.operateData.acceptAllStateFlag = data.operateData.disLogReportStateFlag && data.operateData.acceptDisclaimerStateFlag;
        data.operateData.isEthernetConnected = model.network.getEthernetConnectedState();
        debugPrint("Ethernet flag = " + data.operateData.isEthernetConnected, DebugLevel.ALWAYS);
        if (data.operateData.isEthernetConnected) {
            model.network.setEnumNetworking(0);
        }
        else {
            if (hiWebOsFrame.getCurrentArea() != "COL" && !model.network.getEnumNetworking()) {
                model.network.setEnumNetworking(1);
            }
        }
    }
}

function boeRefreshDisclaimerPage(data){
    if(data.operateData.acceptAllStateFlag == 0){
        data.DisAcceptAllItem_selectImg.Data = false;


    }else{
        data.DisAcceptAllItem_selectImg.Data = true;
    }
    if(data.operateData.acceptDisclaimerStateFlag == 0){
        data.disclaimerItem_selectImg.Data = false;
        $("#disLogReportItem_title").css("opacity", "0.2");
        $("#disLogReportItem_selectImg").css("opacity", "0.2");

    }else{
        data.disclaimerItem_selectImg.Data = true;
        $("#disLogReportItem_title").css("opacity", "1");
        $("#disLogReportItem_selectImg").css("opacity", "1");
    }
    if(data.operateData.disLogReportStateFlag == 0){
        data.disLogReportItem_selectImg.Data = false;
    }else{
        data.disLogReportItem_selectImg.Data = true;
    }

    boeDisAddMarquee(data, "DisAcceptAllItem_title");
    boeDisAddMarquee(data, "disclaimerItem_title");
    boeDisAddMarquee(data, "disclaimerTips_txt");
    boeDisAddMarquee(data, "disLogReportItem_title");
}

function boeDisAddMarquee(data, str) {
    try {
        var txt = langPackages[eval("data." + str + ".Data")][0];
    }
    catch (e) {
        debugG(e);
    }
    var temp;
    if (!!txt) {
        if (txt.length > 55) {
            temp = eval("data." + str + "_marquee");
            temp.Data = '<marquee>' + txt + '</marquee>';
        }
        else {
            temp = eval("data." + str + "_marquee");
            temp.Data = eval("data." + str + ".Data");
        }
    }
}

function boeSetAceeptAllFlag(){
    var data = boeNetSetDisclaimerPageData;
    if(data.operateData.acceptAllStateFlag == 0){
        data.operateData.acceptAllStateFlag = 1;
        data.operateData.acceptDisclaimerStateFlag = 1;
        data.operateData.disLogReportStateFlag = 1;
    }
    else{
        data.operateData.acceptAllStateFlag = 0;
        data.operateData.acceptDisclaimerStateFlag = 0;
        data.operateData.disLogReportStateFlag = 0;
    }
    if(tv)
    {
        model.basicSetting.setDisclaimer(data.operateData.acceptDisclaimerStateFlag);
        //model.appsetting.setFreeviewPlayCtrl(data.operateData.acceptDisclaimerStateFlag);
        var isUK = hiWebOsFrame.getCurrentCountry() == "UK";
        ENABLE_FVP = (1 == data.operateData.acceptDisclaimerStateFlag && isUK);

        model.basicSetting.setImproveHis(data.operateData.disLogReportStateFlag);
    }
    hiWebOsFrame.boe_disclaimer_page_id.rewriteDataOnly();
    if(data.operateData.acceptAllStateFlag == 1) {
        setTimeout(boeDisToNextPage, 200);
    }
}
function boeSetDisclaimerFlag(){
    var data = boeNetSetDisclaimerPageData;
    if(data.operateData.acceptDisclaimerStateFlag == 0){
        data.operateData.acceptDisclaimerStateFlag = 1;
    }
    else{
        data.operateData.acceptDisclaimerStateFlag = 0;
        //关闭并disable掉disLogReport
        data.operateData.disLogReportStateFlag = 0;
    }
   data.operateData.acceptAllStateFlag = data.operateData.acceptDisclaimerStateFlag && data.operateData.disLogReportStateFlag;
    if(tv)
    {
        model.basicSetting.setDisclaimer(data.operateData.acceptDisclaimerStateFlag);
        //model.appsetting.setFreeviewPlayCtrl(data.operateData.acceptDisclaimerStateFlag);
        var isUK = hiWebOsFrame.getCurrentCountry() == "UK";
        ENABLE_FVP = (1 == data.operateData.acceptDisclaimerStateFlag && isUK);
        model.basicSetting.setImproveHis(data.operateData.disLogReportStateFlag);
    }
    hiWebOsFrame.boe_disclaimer_page_id.rewriteDataOnly();

}
function boeSetLogReportFlag(){
    var data = boeNetSetDisclaimerPageData;
    if(data.operateData.disLogReportStateFlag == 0){
        data.operateData.disLogReportStateFlag = 1;
    }
    else{
        data.operateData.disLogReportStateFlag = 0;
    }
    data.operateData.acceptAllStateFlag = data.operateData.acceptDisclaimerStateFlag && data.operateData.disLogReportStateFlag;
    if(tv) {
        model.basicSetting.setImproveHis(data.operateData.disLogReportStateFlag);
    }
    hiWebOsFrame.boe_disclaimer_page_id.rewriteDataOnly();

}


function boeDisReadEULA(){
    debugPrint("[xuehongfeng] is eula");
    hiWebOsFrame.createPage('boe_disinfo_page_id',null, this.page, null,function(a){
                hiWebOsFrame.boe_disinfo_page_id = a;
                a.open();
                a.hiFocus();
            });
}
function DropDownFrameFocus(){
    var data=boeNetSetDisclaimerPageData;
    debugPrint("drop down focus item"+data.operateData.isDropDownFrame,DebugLevel.ALWAYS);
    if(data.operateData.isDropDownFrame)
    {
        debugPrint("drop down focus item"+data.operateData.isDropDownFrame,DebugLevel.ALWAYS);
        hiWebOsFrame.boe_disclaimer_page_id.hiFocus('disclaimerItem');

    }
    else
    {
        hiWebOsFrame.boe_disclaimer_page_id.hiFocus('disAcceptAllDropDownFrame');
    }
    this.page.rewriteDataOnly();
}
function DisDropDownEULAFrame(){
    var data=boeNetSetDisclaimerPageData;
    data.operateData.isDropDownFrame = 1;
    $("#disAcceptAllItemFrame").css("margin-top","0px");
    $("#disAcceptAllDropDownFrame").css("visibility","hidden");
    $("#EULADropDownFrame").css("visibility","visible");
    hiWebOsFrame.boe_disclaimer_page_id.hiFocus('DisAcceptAllItem');
    this.page.rewriteDataOnly();
}
function boeDisToPreviousPage(){
    if (hiWebOsFrame.getCurrentArea() == "COL") {
        hiWebOsFrame.createPage('boe_lang_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_lang_page_id = b;
            hiWebOsFrame.boe_disclaimer_page_id.close();
            hiWebOsFrame.boe_disclaimer_page_id.destroy();
            b.hiFocus();
            b.open();
        })
    }
    else {
        hiWebOsFrame.createPage('boe_cty_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_cty_page_id = b;
            hiWebOsFrame.boe_disclaimer_page_id.destroy();
            b.hiFocus();
            b.open();
        })
    }
}
function boeDisToNextPage(){
    var data = boeNetSetDisclaimerPageData;
        if(tv == true)
        {

            if(data.operateData.isEthernetConnected)
            {
                debugPrint("[xuehongfeng]ethernet conneted is connected",DebugLevel.ALWAYS);
                hiWebOsFrame.createPage('boe_netbg_page_id', null, null, null, function (a) {
                    hiWebOsFrame.boe_netbg_page_id = a;
                    hiWebOsFrame.boe_disclaimer_page_id.close();
                    hiWebOsFrame.boe_disclaimer_page_id.destroy();
                    a.open();
                    hiWebOsFrame.createPage('boe_search_ethernet',null, null,null,function(b){
                        hiWebOsFrame.boe_search_ethernet = b;
                        b.open();
                        b.hiFocus();
                    });
                });
            }
            else
            {
                debugPrint("[xuehongfeng]ethernet conneted is xxxxxxx",DebugLevel.ALWAYS);
                hiWebOsFrame.boe_disclaimer_page_id.close();
                hiWebOsFrame.boe_disclaimer_page_id.destroy();
                hiWebOsFrame.createPage('boe_netbg_page_id',null,null,null,function(a){
                    hiWebOsFrame.boe_netbg_page_id = a;
                    a.open();
                    hiWebOsFrame.createPage('boe_search_wifi',null, null,null,function(b){
                        hiWebOsFrame.boe_search_wifi = b;
                        b.open();
                        b.hiFocus();
                    });
                })
            }

        }
        else
        {
            //hiWebOsFrame.createPage('boe_netbg_page_id', null, null, null, function (a) {
            //    hiWebOsFrame.boe_netbg_page_id = a;
		     //   hiWebOsFrame.boe_disclaimer_page_id.close();
            //    hiWebOsFrame.boe_disclaimer_page_id.destroy();
            //    a.open();
            //    hiWebOsFrame.createPage('boe_ethernet_result',null, null,null,function(b){
            //        hiWebOsFrame.boe_ethernet_result = b;
            //        b.open();
            //        b.hiFocus();
            //    });
            //})
            debugPrint("[xuehongfeng]ethernet conneted is connected",DebugLevel.ALWAYS);
            hiWebOsFrame.createPage('boe_netbg_page_id', null, null, null, function (a) {
                hiWebOsFrame.boe_netbg_page_id = a;
                hiWebOsFrame.boe_disclaimer_page_id.close();
                hiWebOsFrame.boe_disclaimer_page_id.destroy();
                a.open();
                hiWebOsFrame.createPage('boe_search_ethernet',null, null,null,function(b){
                    hiWebOsFrame.boe_search_ethernet = b;
                    b.open();
                    b.hiFocus();
                });
            });
        }

}
function boeNetSetDisclaimerPageOnOpen(){
    var data=boeNetSetDisclaimerPageData;
    boeChangeCurrSep(4);
    //debugPrint("[xuehongfeng]"+data.operateData.isOpenfromDialog,DebugLevel.ALWAYS);
    if(data.operateData.isOpenfromDialog != 1) {
        data.operateData.isDropDownFrame=0;
        $("#EULADropDownFrame").css("visibility", "hidden");
    }

    data.operateData.isDropDownFrame = 1;
    $("#disAcceptAllItemFrame").css("margin-top","0px");
    $("#disAcceptAllDropDownFrame").css("visibility","hidden");
    $("#EULADropDownFrame").css("visibility","visible");
}
function boeNetSetDisclaimerPageOnDestroy(){
    boeSetFromDialogFlag(0);
    hiWebOsFrame.boe_disclaimer_page_id = null;
}
function boeSetFromDialogFlag(flag)
{
    var data = boeNetSetDisclaimerPageData;
    data.operateData.isOpenfromDialog = flag;
}

function boeDisDownOrNot()
{
    var data = boeNetSetDisclaimerPageData;
    if (data.operateData.acceptDisclaimerStateFlag == 1) {
        hiWebOsFrame.boe_disclaimer_page_id.hiFocus('disLogReportItem');
    }
}