function getHotelUsbCloneData(page){
    page.CaE = [
        {
            "id":"HotelCloneUsbSecTypeListTitle",
            "description":"列表头",
            "CaEType":"div"
        },
        {
            "id": "HotelCloneUsbSecTypeListContUl",//在页面中的按钮或者组件容器Id
            "description": "安全列表",
            "CaEType": "Ul",
            "classes": {
                "normal": "wizardListContentLiNormal", "focus": "wizardListContentLiFocus",
                "dataSelected":"wizardListContentLiNormal"
            },
            "handler": {
                "aftEnterHandler": "hotelCloneOKHandler",
                "aftDownHandler":"hotelCloneDownHandler",
                "aftUpHandler":"hotelCloneUpHandler"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "HotelCloneUsbSecTypeListSelImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/selectedBall.png",
                        "closeImg":"img/unselectedBall.png"
                    },
                    "classes":{
//                                "normal":"languageListSelectImg"
                    }
                },
                {
                    "id": "HotelCloneUsbSecTypeListItem",
                    "description": "安全模式名称",
                    "CaEType": "span",
                    "classes":{
//                                "normal":"languageListSelectTxt"
                    }
                }

            ],
            "UlConfig": {
                "UlDataItem": [ "HotelCloneUsbSecTypeListSelImg", "HotelCloneUsbSecTypeListItem"],
                "PageSize":3
            }
        }
    ];

    HotelUSbCloneData.operateData.currUsb = 0
    if(!!tv){
    usbListArray();
        }
    else{
        HotelUSbCloneData.operateData.hoteDataUsbList=
            [   {id:"0",path:"",name:"usb0"},
                {id:"0",path:"",name:"usb1"},
                {id:"0",path:"",name:"usb2"},
                {id:"0",path:"",name:"usb3"}
       ]
    }

    return HotelUSbCloneData

}
var HotelUSbCloneData ={
    "HotelCloneUsbSecTypeListTitle":{"Data":"Clone"},
    "HotelCloneUsbSecTypeListContUl":{
        "Data":[
            {
                "HotelCloneUsbSecTypeListSelImg":{"Data":false},
                "HotelCloneUsbSecTypeListItem":{"Data":"none"}
            }
        ]
    },
    "operateData":{
        "currUsb":0,
        "hoteDataUsbList":[]
    },
    "langData":{
        Clone:[]
    },
    rewrite:"HotelUSbCloneRewrite"
}
function  HotelUSbCloneRewrite(pageData){
    pageData.HotelCloneUsbSecTypeListContUl.Data = [];

    var itemData = {
        "HotelCloneUsbSecTypeListSelImg":{"Data":false},
        "HotelCloneUsbSecTypeListItem":{"Data":"none"}
    }
    $.each(pageData.operateData.hoteDataUsbList,function(idx,item){

        pageData.HotelCloneUsbSecTypeListContUl.Data.push($.extend(true,{},itemData));

        if(idx==pageData.operateData.currUsb){
            pageData.HotelCloneUsbSecTypeListContUl.Data[idx].HotelCloneUsbSecTypeListSelImg.
                Data = true;
        }
        pageData.HotelCloneUsbSecTypeListContUl.Data[idx].HotelCloneUsbSecTypeListItem.Data
            = item.name;
    })
    DBG_INFO('---HotelCloneUsbSecTypeListContUl:'+JSON.stringify(pageData.HotelCloneUsbSecTypeListContUl.Data))
    pageData.HotelCloneUsbSecTypeListContUl.DataSelectedIndex = pageData.operateData.currUsb;
    pageData.HotelCloneUsbSecTypeListContUl.SelectedIndex = pageData.operateData.currUsb;
}
function getUsbList() {
    var testStr = "";
    try {
        testStr = Hisense.File.read("usbs", 0);
    }
    catch (e) {
        debugPrint(e.message);

    }
    debugPrint(testStr);
    if (isNaN(testStr)) {
        //debugPrint(testStr.split("\n")[1]);
        if (testStr.split("\n").length > 0) {
            return testStr.split("\n");

        }
        else {
            debugPrint("NO USB DEVICE NOW!!!!", DebugLevel.WARNING);
            return null;
        }
    }
    else {
        debugPrint("Can't read the file :  /tmp/usbs!!!!!!!!!!!!!!!!!", DebugLevel.ERROR);
        return null;
    }
}

function usbListArray(){
    var usbList = getUsbList();
//    var hoteDataUsbList = [];
    var item = {id:"0",path:"",name:""};
    HotelUSbCloneData.operateData.hoteDataUsbList = [];
    if (!!usbList) {
        //usbList.length-1是为了屏蔽最有一个/n后的undefine
        for (var i = 0; i < usbList.length - 1; i++) {
            var newitem = $.extend(true,{},item);
            var tmplength = usbList[i].split("/").length;
            newitem.id = i;
            newitem.path = usbList[i].split(";")[0];
            newitem.name = usbList[i].split(";")[1];
            if (!newitem.name ) {
                newitem.name  = "USB" + i;
            }
            HotelUSbCloneData.operateData.hoteDataUsbList.push(newitem);
        }
    }
    DBG_INFO("----->usbList:"+JSON.stringify( HotelUSbCloneData.operateData.hoteDataUsbList));
}

function HotelUsbCloneOpenHandler() {
    DBG_INFO("HotelUsbCloneOpenHandler:begin!!");
    var data = HotelUSbCloneData;
    $("#HotelCloneUsbSecListScrollBar").css("height", "330")
    if (data.operateData.hoteDataUsbList.length > 3) {
        DBG_INFO("11data.operateData.hoteDataUsbList.length" + data.operateData.hoteDataUsbList.length);
        var temp = parseInt(235 / data.operateData.hoteDataUsbList.length * 3);
        $("#HotelCloneUsbSecListScrollBar").css("height", temp);
        $("#HotelCloneUsbSecListScrollBar").css("visibility", "visible");
        var step = parseInt(235 / data.operateData.hoteDataUsbList.length);

        var index = hiWebOsFrame.HotelUsbClone_page.getCaE("HotelCloneUsbSecTypeListContUl").BeginIdx;
        $("#HotelCloneUsbSecListScrollBar").css("top", step * index);
    } else {
        $("#HotelCloneUsbSecListScrollCon").css("visibility", "hidden");
        DBG_INFO("22data.operateData.hoteDataUsbList.length");
    }

    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".wizardListContentUl").css({"margin-left":"65px","float":"left"});
        $(".wizardScrollBarFrame").css({"margin-left":"15px","float":"left"});
    }
    else {
        $(".wizardListContentUl").css({"margin-right":"65px","float":"right"});
        $(".wizardScrollBarFrame").css({"margin-right":"15px","float":"right"});
    }
}
function hotelCloneUpHandler() {
    var data = HotelUSbCloneData;
    var len = data.operateData.hoteDataUsbList.length;
    var step = parseInt(235 / len);
    if (len > 3 && this.SelectedIndex < (len - 3)) {
        var temp = this.SelectedIndex * step;
        $("#HotelCloneUsbSecListScrollBar").css("top", temp);

    }
}
function hotelCloneDownHandler(){
    var data = HotelUSbCloneData;
    var len = data.operateData.hoteDataUsbList.length;
    var step = parseInt(235/len);
    if(len > 3 && this.SelectedIndex > 2){
        var temp=(this.SelectedIndex-2)*step;
        $("#HotelCloneUsbSecListScrollBar").css("top",temp);
    }
}
function HotelUsbCloneEscHandler(){
    try{
        hiWebOsFrame.HotelUsbClone_page.close();
        hiWebOsFrame.HotelUsbClone_page.destroy();
        hiWebOsFrame.createPage('setting_HotelMenu_page', null, null, null, function(setting_HotelMenu_page) {
            setting_HotelMenu_page.open();
            setting_HotelMenu_page.hiFocus();
            hiWebOsFrame.setting_HotelMenu_page = setting_HotelMenu_page;
        });

    }
    catch (ex){
        DBG_INFO("--->ex:"+ex);
    }
}
function hotelCloneOKHandler(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = HotelUSbCloneData;
    data.HotelCloneUsbSecTypeListContUl.DataSelectedIndex=this.SelectedIndex;
    data.HotelCloneUsbSecTypeListContUl.SelectedIndex=this.SelectedIndex;
    data.HotelCloneUsbSecTypeListContUl.Data[data.operateData.currUsb].HotelCloneUsbSecTypeListSelImg.
        Data = false;
    data.operateData.currUsb = this.SelectedIndex;
    data.HotelCloneUsbSecTypeListContUl.Data[data.operateData.currUsb].HotelCloneUsbSecTypeListSelImg.
        Data = true;
    hiWebOsFrame.HotelUsbClone_page.rewriteDataOnly();
    //HotelUsbCloneEscHandler();
    if (!!tv) {
        try {
            debugPrint("________________USB:" + data.operateData.hoteDataUsbList[data.operateData.currUsb].path);
            var path = data.operateData.hoteDataUsbList[data.operateData.currUsb].path;
            debugPrint("___________HotelMenuData.operateData.copyOrRestoreId:" + HotelMenuData.operateData.copyOrRestoreId);
            if (HotelMenuData.operateData.copyOrRestoreId == "setting_btn_copy_btn") {

                model.hotel.CopyToUsb(path);
                model.hotel.CopyToUsbResult = OnchangeCopyToUsbResult;
            }
            else if (HotelMenuData.operateData.copyOrRestoreId == "setting_btn_recover_btn") {
                model.hotel.RecoverFromUsb(path);
                model.hotel.RecoverToUsbResult = OnchangeCopyToUsbResult;

            }
        }
        catch (ex) {
            debugE(ex);
        }
    }
}
function OnchangeCopyToUsbResult(actionId,v) {
    debugPrint("______OnchangeCopyToUsbResult______:" + v);
    try {
        if (v == 0) {

            if (HotelMenuData.operateData.copyOrRestoreId == "setting_btn_copy_btn") {
                hiWebOsFrame.createPage("setting_HotelCloneDialog_Page", null, hiWebOsFrame.HotelUsbClone_page, null, function (page) {
                    hiWebOsFrame.SettingHotelCloneDialogPage = page;
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = '';
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = "Copy succeeded";
                    page.open();
                    page.hiFocus();
                    page.rewriteDataOnly();
                });

            }
            else if (HotelMenuData.operateData.copyOrRestoreId == "setting_btn_recover_btn") {
                hiWebOsFrame.createPage("setting_HotelCloneDialog_Page", null, hiWebOsFrame.HotelUsbClone_page, null, function (page) {
                    hiWebOsFrame.SettingHotelCloneDialogPage = page;
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = '';
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = "Restore succeeded";
                    page.open();
                    page.hiFocus();
                    page.rewriteDataOnly();
                    livetvchlist.initChannelList();
                });

            }
        }
        else {
            if (HotelMenuData.operateData.copyOrRestoreId == "setting_btn_copy_btn") {
                hiWebOsFrame.createPage("setting_HotelCloneDialog_Page", null, hiWebOsFrame.HotelUsbClone_page, null, function (page) {
                    hiWebOsFrame.SettingHotelCloneDialogPage = page;
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = '';
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = "Copy failed";
                    page.open();
                    page.hiFocus();
                    page.rewriteDataOnly();
                });

            }
            else if (HotelMenuData.operateData.copyOrRestoreId == "setting_btn_recover_btn") {
                hiWebOsFrame.createPage("setting_HotelCloneDialog_Page", null, hiWebOsFrame.HotelUsbClone_page, null, function (page) {
                    hiWebOsFrame.SettingHotelCloneDialogPage = page;
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = '';
                    HotelCloneDialogData.operateData.settingHotelCloneInfo = "Restore failed";
                    page.rewriteDataOnly();
                    page.open();
                    page.hiFocus();

                });

            }
        }
    }
    catch (ex) {
        debugE(ex);
    }
}
function CreatHotelCloneDialogPage(oriPage) {
    hiWebOsFrame.createPage("setting_HotelCloneDialog_Page", null, oriPage, null, function (page) {
        hiWebOsFrame.SettingHotelCloneDialogPage = page;
        page.open();
        page.hiFocus();
    });
}





































