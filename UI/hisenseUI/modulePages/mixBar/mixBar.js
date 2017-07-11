function getMixBarPageData(page) {
    page.CaE = [
        {
            "id": "mixBarTitle_span_1",
            "description": "当前的比例容器",
            "CaEType": "span"
        },
        {
            "id": "mixBar_bottom_1",
            "description": "zoom比例",
            "CaEType": "span"
        },
        {
            "id": "mixBar_Item",
            "description": "当前的比例",
            "CaEType": "Ul",
            "firstFocusId": "",
            "classes": {
                "normal": "mixBar_Item_li_normal", "focus": "mixBar_Item_li_focus", "disable": "",
                "selected": "mixBar_Item_li_select", "dataSelected": "mixBar_Item_li_select"
            },
            "handler": {
                "aftEnterHandler": "mixBarInputOkHandler", "aftRightHandler": "", "aftLeftHandler": ""
            },
            "nav": {"leftTo": "", "downTo": "mixBar_power_content", "rightTo": ""},
            "oriCaE": [
                {
                    "id": "mixBar_Item_img",
                    "description": "代表mixbar模式的img",
                    "CaEType": "img"

                },
                {
                    "id": "mixBar_Item_span",
                    "description": "代表mixbar模式的span",
                    "CaEType": "span",
                    "enableHtml": true
                }
            ],
            "UlConfig": {
                "UlDataItem": ["mixBar_Item_img", "mixBar_Item_span"],
                "SelectedIndex": 0,
                "PageSize": 7

            }
        },
        {
            "id": "mixBar_power_content",
            "description": "",
            "CaEType": "div",
            "nav": {"upTo": "mixBar_Item", "rightTo": ""},
            "classes": {
                "normal": "mixBar_power_normal", "focus": "mixBar_power_focus", "disable": "",
                "selected": ""
            },
            "handler": {
                "aftEnterHandler": "mixBarPowerOffOkHandler", "aftRightHandler": "", "aftLeftHandler": ""
            }
        }

    ];
    MixBarcreatInputData();
    return MixBarData;
}

var MixBarData = {
    mixBar_Item: {
        Data: [
            {
                "mixBar_Item_img": {Data: "none"}, "mixBar_Item_span": {Data: "none"}
            }

        ],
        "SelectedIndex": 0,
        "DataSelectedIndex": 0

    },
    mixBarTitle_span_1: {Data: "Menu"},
    mixBar_bottom_1: {Data: "Power Off"},
    operateData: {
        "SelectedIndex": 0,
        "DataSelectedIndex": 2,
        "currentInput": '',
        mixBar_SourceImgData: {},
        mixBar_SourceImgDataList: {
            "EM": {
                "0": {
                    "disable": "img/mixbar/TVUn.png",
                    "In": "img/mixbar/TVIn.png"

                },
                "3": {
                    "disable": "img/mixbar/HDMI1Un.png",
                    "In": "img/mixbar/HDMI1In.png"

                },
                "4": {
                    "disable": "img/mixbar/HDMI2Un.png",
                    "In": "img/mixbar/HDMI2In.png"

                },
                "5": {
                    "disable": "img/mixbar/HDMI3Un.png",
                    "In": "img/mixbar/HDMI3In.png"

                },
                "6": {
                    "disable": "img/mixbar/HDMI4Un.png",
                    "In": "img/mixbar/HDMI4In.png"

                },
                "1": {
                    "disable": "img/mixbar/AVUn.png",
                    "In": "img/mixbar/AVIn.png"

                },
                "2": {
                    "disable": "img/mixbar/componetUn.png",
                    "In": "img/mixbar/componetIn.png"

                }
            },
            EM5655:{
                "0": {
                    "disable": "img/mixbar/TVUn.png",
                    "In": "img/mixbar/TVIn.png"

                },
                "3": {
                    "disable": "img/mixbar/HDMI1Un.png",
                    "In": "img/mixbar/HDMI1In.png"

                },
                "4": {
                    "disable": "img/mixbar/HDMI2Un.png",
                    "In": "img/mixbar/HDMI2In.png"

                },
                "1": {
                    "disable": "img/mixbar/AVUn.png",
                    "In": "img/mixbar/AVIn.png"

                },
                "2": {
                    "disable": "img/mixbar/componetUn.png",
                    "In": "img/mixbar/componetIn.png"

                }
            },
            "SA": {
                "0": {
                    "disable": "img/mixbar/TVUn.png",
                    "In": "img/mixbar/TVIn.png"

                },
                "3": {
                    "disable": "img/mixbar/HDMI1Un.png",
                    "In": "img/mixbar/HDMI1In.png"

                },
                "4": {
                    "disable": "img/mixbar/HDMI2Un.png",
                    "In": "img/mixbar/HDMI2In.png"

                },
                "5": {
                    "disable": "img/mixbar/HDMI3Un.png",
                    "In": "img/mixbar/HDMI3In.png"

                },
                "1": {
                    "disable": "img/mixbar/AVUn.png",
                    "In": "img/mixbar/AVIn.png"

                },
                "2": {
                    "disable": "img/mixbar/componetUn.png",
                    "In": "img/mixbar/componetIn.png"

                }
            },
            "EU": {
                "0": {
                    "disable": "img/mixbar/TVUn.png",
                    "In": "img/mixbar/TVIn.png"

                },
                "4": {
                    "disable": "img/mixbar/HDMI1Un.png",
                    "In": "img/mixbar/HDMI1In.png"

                },
                "5": {
                    "disable": "img/mixbar/HDMI2Un.png",
                    "In": "img/mixbar/HDMI2In.png"

                },
                "6": {
                    "disable": "img/mixbar/HDMI3Un.png",
                    "In": "img/mixbar/HDMI3In.png"

                },
                "7": {
                    "disable": "img/mixbar/HDMI4Un.png",
                    "In": "img/mixbar/HDMI4In.png"

                },
                "3": {
                    "disable": "img/mixbar/scartUn.png",
                    "In": "img/mixbar/scartIn.png"

                },
                "1": {
                    "disable": "img/mixbar/AVUn.png",
                    "In": "img/mixbar/AVIn.png"

                },
                "2": {
                    "disable": "img/mixbar/componetUn.png",
                    "In": "img/mixbar/componetIn.png"

                }
            }


        }


    },
    "langData": {
        "Menu": "Menu",
        "Power Off": "Power Off"
    },
    "rewrite": MixBarRewrite
};


function MixBarRewrite(pageData) {
    var opeData = pageData.operateData;

    debugPrint('------->opeData.SelectedIndex:' + opeData.SelectedIndex);
    pageData.mixBar_Item.SelectedIndex = opeData.SelectedIndex;
    pageData.mixBar_Item.DataSelectedIndex = opeData.DataSelectedIndex;
}
function MixbarhandlerSourceItemToJson() {
    var sourceArr = [];
    if (!!tv) {
        var sourceItem = model.source.getInputName();
        MixBarData.operateData.currentInput = model.source.getCurrentSource();
        debugPrint("sourceItem:" + JSON.stringify(sourceItem));
        var item = {id: "0", name: "TV", signal: "1", lock: "0", rename: "", hotelLock: ""};
        for (var i = 0; i < sourceItem.length / 6; i++) {
            var newitem = $.extend(true, {}, item);
            newitem.id = sourceItem[i * 6 + 0];
            newitem.name = sourceItem[i * 6 + 1];
            newitem.signal = sourceItem[i * 6 + 2];
            newitem.lock = sourceItem[i * 6 + 3];
            newitem.rename = sourceItem[i * 6 + 4];
            newitem.hotelLock = sourceItem[i * 6 + 5];
            sourceArr.push(newitem);
        }
    } else {
        sourceArr = [
            {id: "0", name: "TV", signal: "1", lock: "0", hotelLock: "1"},
            {id: "3", name: "HDMI1", signal: "1", lock: "0", hotelLock: "0"},
            {id: "4", name: "HDMI2", signal: "1", lock: "0", hotelLock: "0"},
            {id: "5", name: "HDMI3", signal: "1", lock: "0", hotelLock: "0"},
            {id: "6", name: "HDMI4", signal: "1", lock: "0", hotelLock: "0"},
            {id: "1", name: "AV", signal: "1", lock: "0", hotelLock: "1"},
            {id: "2", name: "Component", signal: "1", lock: "1", hotelLock: "0"}
        ]
    }
    return sourceArr;
}

function MixBarPrepareInputData() {
    var sourceArr = MixbarhandlerSourceItemToJson(),
        newSourceArr = [],
        source = [];
    var signalOrderMap = [];
    var nosignalOrderMap = [];
    var defalutOrderMap = [0, 3, 4, 5, 6, 1, 2];
    if (8 == sourceArr.length) {
        defalutOrderMap = [0, 4, 5, 6, 7, 3, 1, 2];
        MixBarData.operateData.mixBar_SourceImgData = MixBarData.operateData.mixBar_SourceImgDataList.EU;
    }
    else if (6 == sourceArr.length) {
        defalutOrderMap = [0, 3, 4, 5, 1, 2];
        MixBarData.operateData.mixBar_SourceImgData = MixBarData.operateData.mixBar_SourceImgDataList.SA;
    }
    else if(5 == sourceArr.length){
        defalutOrderMap = [0, 3, 4,1, 2];
        MixBarData.operateData.mixBar_SourceImgData = MixBarData.operateData.mixBar_SourceImgDataList.EM5655;
    }
    else {
        MixBarData.operateData.mixBar_SourceImgData = MixBarData.operateData.mixBar_SourceImgDataList.EM;
    }
    debugPrint('start:' + JSON.stringify(sourceArr));
    $.each(defalutOrderMap, function (k, v) {
        newSourceArr.push(MixBarSourceGetJsonObjById(sourceArr, v));
    })
    $.each(newSourceArr, function (k, v) {
        if (v.id == 0) {
            signalOrderMap.push(v.id);
        }
        else if (v.signal == 0) {
            signalOrderMap.push(v.id);
        }
        else {
            nosignalOrderMap.push(v.id);
        }
    })
    signalOrderMap = signalOrderMap.concat(nosignalOrderMap);
    debugPrint('1-start:----:' + JSON.stringify(nosignalOrderMap));
    debugPrint('1-start:----:' + JSON.stringify(signalOrderMap));

    var TVNosignal = tv ? (!livetvchlist.hasChannels()) : true;

    $.each(signalOrderMap, function (k, v) {
        var item = MixBarSourceGetJsonObjById(newSourceArr, v);
        if (item.signal == 0) {
            item.img = "In";
            item.color = '#f0f0f0';
            if (item.id == 0 && TVNosignal) {
                item.img = "disable";
                item.color = 'rgba(255, 255, 255, .1)';
            }
        }
        else {
            item.img = "disable";
            item.color = 'rgba(255, 255, 255, .1)';
        }
        source.push(item);
    })
    debugPrint('2-start:----:' + JSON.stringify(signalOrderMap));
    MixBarData.operateData.source = source;
    debugPrint('$$$$$$$$$$$$$$---->Source:' + JSON.stringify(source));

}
function MixBarSourceGetJsonObjById(sourceArr, id) {
    var sourceObj = {};
    $.each(sourceArr, function (index, item) {
        if (item.id == id) {
            sourceObj = item;
            return false;
        }
    })
    return sourceObj;
}
function MixBarcreatInputData() {
    MixBarPrepareInputData();
    MixBarData.mixBar_Item.Data = [];
    MixBarData.mixBar_Item.disableItem = [];
    $.each(MixBarData.operateData.source, function (k, v) {
        //signal: 0:有信号  1：无信号

        if (parseInt(v.id) == MixBarData.operateData.currentInput) {
            MixBarData.operateData.SelectedIndex = k;
            debugPrint('kkk---->opeData.SelectedIndex:' + MixBarData.operateData.SelectedIndex);
            MixBarData.operateData.DataSelectedIndex = k;
        }
        MixBarData.mixBar_Item.Data.push({
            "mixBar_Item_img": {
                Data: MixBarData.operateData.mixBar_SourceImgData[v.id][v.img]
            },
            "mixBar_Item_span": {
                Data: '<span style="color: ' + v.color + '">' + v.name + '</span>'
            }
        })
        var hotelmode = model.hotel.getHotelMode();
        if (!!hotelmode) {
            if (v.hotelLock == 1) {
                MixBarData.mixBar_Item.disableItem.push(k);
            }
        }


    });

    //var selectIndex = getMixBarInputSelectIndex();
    //MixBarData.operateData.SelectedIndex = selectIndex;
    debugPrint('MixBarData:' + JSON.stringify(MixBarData.mixBar_Item.Data));
}
function mixBarInputOkHandler(operateData, data) {
    var id = operateData.source[this.SelectedIndex].id;
    if (!!tv) {
        var curSourceId = model.source.getCurrentSource();
        if(curSourceId == id){
            if (hiWebOsFrame.isCurrentModule("mixBar")) {
                hiWebOsFrame.MixBar_page.destroy();
                openLiveTVModule([Msg.INFO, 0]);//20150828JIRA12799,本机按键切source看不到InfoBar
            }
            else {
                hiWebOsFrame.MixBar_page.close()
                hiWebOsFrame.MixBar_page.destroy();
            }
            return;
        }
        if(isMainArchiveRecording() || isTimeShiftStatus()) {
            if (hiWebOsFrame.isCurrentModule("mixBar")) {
                hiWebOsFrame.MixBar_page.destroy();
            }

            PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                "Sure to exit from PVR or T.Shift?", mixBarStopPVROrTshift.bind(this,id), mixBarCanCancelPVRTshift);
            return;
        }
        ReadInputRecent(id);
        model.source.InputSet(id);
    }
    closeMixBar();
}
function mixBarStopPVROrTshift(id) {
    if(!!hiWebOsFrame["dialog_common"])
    {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    try {
        if(isMainArchiveRecording()){
            setAfterStopPvrWantDo(mixBarStopPvrOrTshiftCallBack.bind(this,0,id));
            setTimeout(function (){
                DBG_ALWAYS("model.pvr.StopRecord()");
                model.pvr.StopRecord();
            },100);
        }
        if(isTimeShiftStatus()){
            setAfterStopTShiftWantDo(mixBarStopPvrOrTshiftCallBack.bind(this,1,id));
            setTimeout(function () {
                model.timeshift.Stop();
            },100);
        }
    }
    catch(ex) {
        debugPrint("error: " + ex.message);
    }
}

function mixBarStopPvrOrTshiftCallBack(stopWho,id){
    if(stopWho == 0){
        g_AfterStopPvrWantDo = null;
    }else if(stopWho == 1){
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    model.source.InputSet(id);
    ReadInputRecent(id);
    setTimeout(openLiveTVModule, 500);
}

function mixBarCanCancelPVRTshift() {
    if(!!hiWebOsFrame["dialog_common"])
    {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.endLoading("stoppvr");
    openLiveTVModule();
}
function closeMixBar() {
    if (hiWebOsFrame.isCurrentModule("mixBar")) {
        hiWebOsFrame.MixBar_page.destroy();
        //hiWebOsFrame.blankPage.open();
        //hiWebOsFrame.blankPage.hiFocus();
        //openLiveTVModule([Msg.INFO, 0]);//20150828JIRA12799,本机按键切source看不到InfoBar
        openLiveTVModule([Msg.WAIT_SOURCE_CHANGE, 1]);
    }
    else {
        hiWebOsFrame.MixBar_page.close()
        hiWebOsFrame.MixBar_page.destroy();
    }
}

function mixBarPowerOffOkHandler() {
    if (!!tv) {
        model.system.SwitchOffTv();
    }
    closeMixBar();
}
function MixBarOnDestory() {
    hiWebOsFrame.MixBar_page = null;
}
function getMixBarInputSelectIndex() {
    for (i = 0; i < MixBarData.operateData.source.length; i++) {
        if (i != MixBarData.operateData.SelectedIndex) {
            return i;
        }
    }
}