function getHotelMenuInputLockData(page){
    page.CaE = [
        {
            "id": "switch_SourceLock_TV_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes":{"normal":"switch_hotelModespan"}
        },
        {
            "id": "SourceLock_TV_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {  "downTo": "SourceLock_AV_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setLockTVFlipSwitch'//点击enter事件后处理开关转换
            }
        },
        {
            "id": "switch_SourceLock_AV_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes":{"normal":"switch_hotelModespan"}
        },
        {
            "id": "SourceLock_AV_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {  "downTo": "SourceLock_Component_flipSwitch","upTo":"SourceLock_TV_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setLockTVFlipSwitch'//点击enter事件后处理开关转换
            }
        },
        {
            "id": "switch_SourceLock_Component_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes":{"normal":"switch_hotelModespan"}
        },
        {
            "id": "SourceLock_Component_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {  "downTo": "SourceLock_HDMI1_flipSwitch","upTo":"SourceLock_AV_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setLockTVFlipSwitch'//点击enter事件后处理开关转换
            }
        },
        {
            "id": "switch_SourceLock_HDMI1_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes":{"normal":"switch_hotelModespan"}
        },
        {
            "id": "SourceLock_HDMI1_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {  "downTo": "SourceLock_HDMI2_flipSwitch","upTo":"SourceLock_Component_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setLockTVFlipSwitch'//点击enter事件后处理开关转换
            }
        },
        {
            "id": "switch_SourceLock_HDMI2_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes":{"normal":"switch_hotelModespan"}
        },
        {
            "id": "SourceLock_HDMI2_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {  "downTo": "SourceLock_HDMI3_flipSwitch","upTo":"SourceLock_HDMI1_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setLockTVFlipSwitch'//点击enter事件后处理开关转换
            }
        },
        {
            "id": "switch_SourceLock_HDMI3_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes":{"normal":"switch_hotelModespan"}
        },
        {
            "id": "SourceLock_HDMI3_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {  "downTo": "SourceLock_HDMI4_flipSwitch","upTo":"SourceLock_HDMI2_flipSwitch"},
            "CaEType": "FlipSwitch",
            "SwitchRadio": "50%",//显示的比例
            "FlipSwitchConfig": {
                switchTypeId: "switchType",//目前开(true)还是关(false) id
                switchTextId: "switchText"//目前显示的字体的id
            },
            "handler": {
                'aftEnterHandler': 'setLockTVFlipSwitch'//点击enter事件后处理开关转换
            }
        }

    ];
    try {
        OnSourceLockInitData();




    }
    catch (ex) {
        debugE(ex);
    }
    return HotelMenuInputLockData;
}
var HotelMenuInputLockData = {
    "switch_SourceLock_TV_span": {Data: "TV"},
    "switch_SourceLock_AV_span": {Data: "AV"},
    "switch_SourceLock_Component_span": {Data: "Component"},
    "switch_SourceLock_HDMI1_span": {Data: "HDMI 1"},
    "switch_SourceLock_HDMI2_span": {Data: "HDMI 2"},
    "switch_SourceLock_HDMI3_span": {Data: "HDMI 3"},
    "SourceLock_TV_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "SourceLock_AV_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "SourceLock_Component_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "SourceLock_HDMI1_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "SourceLock_HDMI2_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    "SourceLock_HDMI3_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    operateData:{
        "SourceLock_TV_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "SourceLock_AV_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "SourceLock_Component_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "SourceLock_HDMI1_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "SourceLock_HDMI2_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },
        "SourceLock_HDMI3_flipSwitch": {
            switchType: true,
            switchTextList: {
                switchOFF: '',
                switchOn: ''
            }
        },

        sourceId: [0, 1, 2, 3, 4, 5, 6]
    },
    rewrite:"SourceLockflipSwitchRewrite"
}
function SourceLockflipSwitchRewrite(pageData){
    var opData = pageData.operateData;
    $.each(pageData, function (key, val) {

        if (!key) return true;

        var localData = pageData[key],
            localOpeData = opData[key];
        switch (key) {
            case "SourceLock_TV_flipSwitch":
            case "SourceLock_AV_flipSwitch":
            case "SourceLock_Component_flipSwitch":
            case "SourceLock_HDMI1_flipSwitch":
            case "SourceLock_HDMI2_flipSwitch":
            case "SourceLock_HDMI3_flipSwitch":
                localData.Data.switchType = localOpeData.switchType;
                localData.Data.switchText = !!localOpeData.switchType ? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                break;
        }
    })
}
function setLockTVFlipSwitch(operateData, data){
    var page = this.page;

    if (operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;
    page.rewriteDataOnly();
    if (!!tv) {
        debugPrint("+++++++++>operateData[this.id]:" + this.id);

        switch (this.id) {
            case "SourceLock_TV_flipSwitch":

                if (!!this.SwitchType) {
                    model.hotel.HotelLockInput(0, 0);
                }
                else {
                    model.hotel.HotelLockInput(0, 1);
                }
                livetvmain.updateSourceAttribute(0, SourceAttr.HOTELLOCK, !this.SwitchType);
                break;
            case "SourceLock_AV_flipSwitch":
                if (!!this.SwitchType) {
                    model.hotel.HotelLockInput(1, 0);
                }
                else {
                    model.hotel.HotelLockInput(1, 1);
                }
                livetvmain.updateSourceAttribute(1, SourceAttr.HOTELLOCK, !this.SwitchType);
                break;
            case "SourceLock_Component_flipSwitch":
                if (!!this.SwitchType) {
                    model.hotel.HotelLockInput(2, 0);
                }
                else {
                    model.hotel.HotelLockInput(2, 1);
                }
                livetvmain.updateSourceAttribute(2, SourceAttr.HOTELLOCK, !this.SwitchType);
                break;
            case "SourceLock_HDMI1_flipSwitch":
                if (!!this.SwitchType) {
                    model.hotel.HotelLockInput(3, 0);
                }
                else {
                    model.hotel.HotelLockInput(3, 1);
                }
                livetvmain.updateSourceAttribute(3, SourceAttr.HOTELLOCK, !this.SwitchType);
                break;
            case "SourceLock_HDMI2_flipSwitch":
                if (!!this.SwitchType) {
                    model.hotel.HotelLockInput(4, 0);
                }
                else {
                    model.hotel.HotelLockInput(4, 1);
                }
                livetvmain.updateSourceAttribute(4, SourceAttr.HOTELLOCK, !this.SwitchType);
                break;
            case "SourceLock_HDMI3_flipSwitch":
                if (!!this.SwitchType) {
                    model.hotel.HotelLockInput(5, 0);
                }
                else {
                    model.hotel.HotelLockInput(5, 1);
                }
                livetvmain.updateSourceAttribute(5, SourceAttr.HOTELLOCK, !this.SwitchType);
                break;
            default :
                break;
        }
    }
}
function HotelInputLockEscFun(){
    try{
    hiWebOsFrame.HotelInputLock_page.close();
    hiWebOsFrame.createPage('setting_HotelMenu_page', null, null, null, function(setting_HotelMenu_page) {
        OnSourceInitDataForReturn();
        setting_HotelMenu_page.rewriteDataOnly();
          setting_HotelMenu_page.open();
          setting_HotelMenu_page.hiFocus();
          hiWebOsFrame.setting_HotelMenu_page = setting_HotelMenu_page;

      });

    }
    catch (ex){
        DBG_INFO("--->ex:"+ex);
    }
}

function OnSourceLockInitData() {
    try {

        HotelMenuInputLockData.operateData.sourceArr = [];
        if (!!tv) {
            var sourceItem = model.source.getInputName();
            DBG_INFO("sourceItem:" + JSON.stringify(sourceItem));
            var item = {id: "0", name: "TV", signal: "1", lock: "0", rename: "",hotelLock:""};
            for (var i = 0; i < sourceItem.length / 6; i++) {
                var newitem = $.extend(true, {}, item);
                newitem.id = sourceItem[i * 6 + 0];
                newitem.name = sourceItem[i * 6 + 1];
                newitem.signal = sourceItem[i * 6 + 2];
                newitem.lock = sourceItem[i * 6 + 3];
                newitem.rename = sourceItem[i * 6 + 4];
                newitem.hotelLock = sourceItem[i * 6 + 5];
                HotelMenuInputLockData.operateData.sourceArr.push(newitem);
            }
        } else {
            HotelMenuInputLockData.operateData.sourceArr = [
                {id: "0", name: "TV", signal: "1", lock: "0", hotelLock: "1"},
                {id: "3", name: "HDMI1", signal: "1", lock: "0", hotelLock: "0"},
                {id: "4", name: "HDMI2", signal: "1", lock: "0", hotelLock: "0"},
                {id: "5", name: "HDMI3", signal: "1", lock: "0", hotelLock: "0"},
                {id: "6", name: "HDMI4", signal: "1", lock: "0", hotelLock: "0"},
                {id: "1", name: "AV", signal: "1", lock: "0", hotelLock: "1"},
                {id: "2", name: "Component", signal: "1", lock: "1", hotelLock: "0"}
            ]
        }
        var opData = HotelMenuInputLockData.operateData;
        var sourceArr = HotelMenuInputLockData.operateData.sourceArr;
        opData.SourceLock_TV_flipSwitch.switchType = !(parseInt(sourceArr[0].hotelLock));
        debugPrint("-->opData.SourceLock_TV_flipSwitch.switchTyp:" + opData.SourceLock_TV_flipSwitch.switchType);
        opData.SourceLock_AV_flipSwitch.switchType = !(parseInt(sourceArr[1].hotelLock));
        opData.SourceLock_Component_flipSwitch.switchType = !(parseInt(sourceArr[2].hotelLock));
        opData.SourceLock_HDMI1_flipSwitch.switchType = !(parseInt(sourceArr[3].hotelLock));
        opData.SourceLock_HDMI2_flipSwitch.switchType = !( parseInt(sourceArr[4].hotelLock));
        opData.SourceLock_HDMI3_flipSwitch.switchType = !(parseInt(sourceArr[5].hotelLock));
    }
    catch (ex) {
        debugE(ex);
    }
}

function OnSourceInitDataForReturn() {
    try {
        HotelMenuData.setting_OnSourceItem.Data = [];
        HotelMenuData.operateData.sourceArr = [];
        if (!!tv) {
            var sourceItem = model.source.getInputName();
            DBG_INFO("sourceItem:" + JSON.stringify(sourceItem));
            var item = {id: "0", name: "TV", signal: "1", lock: "0", rename: "", hotelLock: ""};
            for (var i = 0; i < sourceItem.length / 6; i++) {
                var newitem = $.extend(true, {}, item);
                newitem.id = sourceItem[i * 6 + 0];
                newitem.name = sourceItem[i * 6 + 1];
                newitem.signal = sourceItem[i * 6 + 2];
                newitem.lock = sourceItem[i * 6 + 3];
                newitem.rename = sourceItem[i * 6 + 4];
                newitem.hotelLock = sourceItem[i * 6 + 5];
                HotelMenuData.operateData.sourceArr.push(newitem);
            }
        }
        else {
            HotelMenuData.operateData.sourceArr = [
                {id: "0", name: "TV", signal: "1", lock: "0", hotelLock: "0"},
                {id: "1", name: "AV", signal: "1", lock: "0", hotelLock: "1"},
                {id: "2", name: "Component", signal: "1", lock: "1", hotelLock: "0"},
                {id: "3", name: "HDMI1", signal: "1", lock: "0", hotelLock: "1"},
                {id: "4", name: "HDMI2", signal: "1", lock: "0", hotelLock: "1"},
                {id: "5", name: "HDMI3", signal: "1", lock: "0", hotelLock: "1"},
                {id: "6", name: "HDMI4", signal: "1", lock: "0", hotelLock: "1"},
            ]
        }
        var itemData = {"setting_OnSourceItem_span": {"Data": "none"}}
        HotelMenuData.setting_OnSourceItem.disableItem = [];
        $.each(HotelMenuData.operateData.sourceArr, function (k, v) {
            HotelMenuData.setting_OnSourceItem.Data.push($.extend(true, {}, itemData));
            HotelMenuData.setting_OnSourceItem.Data[k].setting_OnSourceItem_span.Data
                = v.name;
            if (v.hotelLock == 1) {
                HotelMenuData.setting_OnSourceItem.disableItem.push(k);
            }
        })
        DBG_INFO("HotelMenuData.setting_OnSourceItem.disableItem:" + JSON.stringify(HotelMenuData.setting_OnSourceItem.disableItem));

        HotelMenuData.setting_OnSourceItem.Data.push({
            "setting_OnSourceItem_span": {
                Data: "Save"
            }
        });

        var index;
        if (!!tv) {
            index = model.hotel.getOnSource();
        }
        else{
            index = 0;
        }
        var opData = HotelMenuData.operateData;
        if (index == 255) {
            if (HotelMenuData.operateData.sourceArr.length == 7) {
                opData.OSSelectedIndex = 7;
                opData.OSDataSelectedIndex = 7;
            }
            else if (HotelMenuData.operateData.sourceArr.length == 8) {
                opData.OSSelectedIndex = 8;
                opData.OSDataSelectedIndex = 8;
            }
            else if (HotelMenuData.operateData.sourceArr.length == 6) {
                opData.OSSelectedIndex = 6;
                opData.OSDataSelectedIndex = 6;
            }

        }
        else {
            opData.OSSelectedIndex = index;
            opData.OSDataSelectedIndex = index;
        }
        //HotelMenuData.operateData.OSDataSelectedIndex = model.hotel.getOnSource();

        debugPrint("________>HotelMenuData.operateData.OSDataSelectedIndex:" + HotelMenuData.operateData.OSDataSelectedIndex);

    }
    catch (ex) {
        debugE(ex);
    }
}