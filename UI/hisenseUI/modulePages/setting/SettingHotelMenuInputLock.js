function getHotelMenuInputLockData(page){
    page.CaE = [
        {
            "id": "switch_SourceLock_TV_span",
            "description": "overscan span",
            "CaEType": "span",
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"},
            "strFilter": true
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
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"},
            "strFilter": true
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
            "strFilter": true,
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
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
            "nav": {"downTo": "SourceLock_Scart_flipSwitch", "upTo": "SourceLock_AV_flipSwitch"},
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
            "id": "switch_SourceLock_Scart_span",
            "description": "overscan span",
            "CaEType": "span",
            "strFilter": true,
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "SourceLock_Scart_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {"downTo": "SourceLock_HDMI1_flipSwitch", "upTo": "SourceLock_Component_flipSwitch"},
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
            "strFilter": true,
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
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
            "nav": {  "downTo": "SourceLock_HDMI2_flipSwitch","upTo":"SourceLock_Scart_flipSwitch"},
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
            "strFilter": true,
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
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
            "strFilter": true,
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
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
        },
        {
            "id": "switch_SourceLock_HDMI4_span",
            "description": "overscan span",
            "CaEType": "span",
            "strFilter": true,
            "classes": {"normal": "switch_hotelModespan", "disable": "switch_hotelModespanDisable"}
        },
        {
            "id": "SourceLock_HDMI4_flipSwitch",
            "description": "开关控件",
            "classes": {
                "normal": "flipSwitchNormal",
                "focus": "flipSwitchFocus",
                "disable": "flipSwitchDisable",
                "selected": "flipSwitchSelected"
            },
            "nav": {  "upTo": "SourceLock_HDMI3_flipSwitch"},
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
    "switch_SourceLock_HDMI4_span": {Data: "HDMI 4"},
    "switch_SourceLock_Scart_span": {Data: "SCART"},
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
    "SourceLock_Scart_flipSwitch": {
        switchType: true,
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
    "SourceLock_HDMI4_flipSwitch": {
        Data: {
            switchType: true,
            switchText: ''
        }
    },
    operateData:{
        "SourceLock_TV_flipSwitch": 0,
        "SourceLock_AV_flipSwitch": 0,
        "SourceLock_Component_flipSwitch":0,
        "SourceLock_HDMI1_flipSwitch": 0,
        "SourceLock_HDMI2_flipSwitch": 0,
        "SourceLock_HDMI3_flipSwitch": 0,
        "SourceLock_HDMI4_flipSwitch": 0,
        "SourceLock_Scart_flipSwitch":0,
        "switch_SourceLock_TV_span":"",
        "switch_SourceLock_AV_span":"",
        "switch_SourceLock_Component_span":"",
        "switch_SourceLock_Scart_span": "",
        "switch_SourceLock_HDMI1_span": "",
        "switch_SourceLock_HDMI2_span": "",
        "switch_SourceLock_HDMI3_span": "",
        "switch_SourceLock_HDMI4_span": "",
        sourceId: [0, 1, 2, 3, 4, 5, 6]
    },
    rewrite:"SourceLockflipSwitchRewrite"
}
function SourceLockflipSwitchRewrite(pageData){
    var opData = pageData.operateData;

    pageData.switch_SourceLock_TV_span.Data = opData.switch_SourceLock_TV_span;
    pageData.switch_SourceLock_AV_span.Data = opData.switch_SourceLock_AV_span;
    pageData.switch_SourceLock_Component_span.Data = opData.switch_SourceLock_Component_span;
    pageData.switch_SourceLock_HDMI1_span.Data = opData.switch_SourceLock_HDMI1_span;
    pageData.switch_SourceLock_HDMI2_span.Data = opData.switch_SourceLock_HDMI2_span;
    pageData.switch_SourceLock_HDMI3_span.Data = opData.switch_SourceLock_HDMI3_span;
    pageData.switch_SourceLock_HDMI4_span.Data = opData.switch_SourceLock_HDMI4_span;
    pageData.switch_SourceLock_Scart_span.Data = opData.switch_SourceLock_Scart_span;

    pageData.SourceLock_TV_flipSwitch.Data.switchType = opData.SourceLock_TV_flipSwitch;
    pageData.SourceLock_AV_flipSwitch.Data.switchType = opData.SourceLock_AV_flipSwitch;
    pageData.SourceLock_Component_flipSwitch.Data.switchType = opData.SourceLock_Component_flipSwitch;
    pageData.SourceLock_HDMI1_flipSwitch.Data.switchType = opData.SourceLock_HDMI1_flipSwitch;
    pageData.SourceLock_HDMI2_flipSwitch.Data.switchType = opData.SourceLock_HDMI2_flipSwitch;
    pageData.SourceLock_HDMI3_flipSwitch.Data.switchType = opData.SourceLock_HDMI3_flipSwitch;
    pageData.SourceLock_HDMI4_flipSwitch.Data.switchType = opData.SourceLock_HDMI4_flipSwitch;
    pageData.SourceLock_Scart_flipSwitch.Data.switchType = opData.SourceLock_Scart_flipSwitch;

   try{
        var dir_0 = hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR ? 'left' : 'right';
        var dir_1 = dir_0 == 'left' ? 'right' : 'left';

        $("#SourceLock_TV_flipSwitch").css('float', dir_1);
        $("#SourceLock_AV_flipSwitch").css('float', dir_1);
        $("#SourceLock_Component_flipSwitch").css('float', dir_1);
       $("#SourceLock_Scart_flipSwitch").css('float', dir_1);
        $("#SourceLock_HDMI1_flipSwitch").css('float', dir_1);
        $("#SourceLock_HDMI2_flipSwitch").css('float', dir_1);
        $("#SourceLock_HDMI3_flipSwitch").css('float', dir_1);
        $("#SourceLock_HDMI4_flipSwitch").css('float', dir_1);
    }
    catch(ex){
        debugE(ex);
    }
}
function setLockTVFlipSwitch(operateData, data){
    var page = this.page;
    var sourceArr = HotelMenuInputLockData.operateData.sourceArr;

    if (operateData[this.id] != undefined)
        operateData[this.id] = !this.SwitchType;
    page.rewriteDataOnly();
    if (!!tv) {
        debugPrint("+++++++++>operateData[this.id]:" + this.id);
        if(sourceArr.length == 8){
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
                case "SourceLock_Scart_flipSwitch":
                    if (!!this.SwitchType) {
                        model.hotel.HotelLockInput(3, 0);
                    }
                    else {
                        model.hotel.HotelLockInput(3, 1);
                    }
                    livetvmain.updateSourceAttribute(3, SourceAttr.HOTELLOCK, !this.SwitchType);
                    break;
                case "SourceLock_HDMI1_flipSwitch":
                    if (!!this.SwitchType) {
                        model.hotel.HotelLockInput(4, 0);
                    }
                    else {
                        model.hotel.HotelLockInput(4, 1);
                    }
                    livetvmain.updateSourceAttribute(4, SourceAttr.HOTELLOCK, !this.SwitchType);
                    break;
                case "SourceLock_HDMI2_flipSwitch":
                    if (!!this.SwitchType) {
                        model.hotel.HotelLockInput(5, 0);
                    }
                    else {
                        model.hotel.HotelLockInput(5, 1);
                    }
                    livetvmain.updateSourceAttribute(5, SourceAttr.HOTELLOCK, !this.SwitchType);
                    break;
                case "SourceLock_HDMI3_flipSwitch":
                    if (!!this.SwitchType) {
                        model.hotel.HotelLockInput(6, 0);
                    }
                    else {
                        model.hotel.HotelLockInput(6, 1);
                    }
                    livetvmain.updateSourceAttribute(6, SourceAttr.HOTELLOCK, !this.SwitchType);
                    break;
                case "SourceLock_HDMI4_flipSwitch":
                    if (!!this.SwitchType) {
                        model.hotel.HotelLockInput(7, 0);
                    }
                    else {
                        model.hotel.HotelLockInput(7, 1);
                    }
                    livetvmain.updateSourceAttribute(7, SourceAttr.HOTELLOCK, !this.SwitchType);
                    break;
                default :
                    break;
            }
        }
        else{
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
                case "SourceLock_HDMI4_flipSwitch":
                    if (!!this.SwitchType) {
                        model.hotel.HotelLockInput(6, 0);
                    }
                    else {
                        model.hotel.HotelLockInput(6, 1);
                    }
                    livetvmain.updateSourceAttribute(6, SourceAttr.HOTELLOCK, !this.SwitchType);
                    break;
                default :
                    break;
            }
        }
    }
}
function HotelInputLockEscFun(){
    try{
        hiWebOsFrame.HotelInputLock_page.close();
        hiWebOsFrame.createPage('setting_HotelMenu_page', null, null, null, function (setting_HotelMenu_page) {
            OnSourceInitDataForReturn();
            setting_HotelMenu_page.rewriteDataOnly();
            setting_HotelMenu_page.open();
            setting_HotelMenu_page.hiFocus();
            hiWebOsFrame.setting_HotelMenu_page = setting_HotelMenu_page;

      });
        hiWebOsFrame.HotelInputLock_page.destroy();

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
            var onsource = tv ? model.hotel.getOnSource() : 1;
            var cursource =tv?model.source.getCurrentSource():0;
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
            var onsource = tv ? model.hotel.getOnSource() : 0;
            var cursource = tv?model.source.getCurrentSource():0;
            HotelMenuInputLockData.operateData.sourceArr = [
                {id: "0", name: "TV", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "0"},
                {id: "1", name: "AV", signal: "1", lock: "0", rename:"tvqqq sss wesw dd",hotelLock: "0"},
                {id: "2", name: "Component", signal: "1", lock: "1",rename:"tvqqq", hotelLock: "0"},
                {id: "3", name: "HDMI1", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "4", name: "HDMI2", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "5", name: "HDMI3", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "6", name: "HDMI4", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"}
            ]
        }
        var opData = HotelMenuInputLockData.operateData;
        var sourceArr = HotelMenuInputLockData.operateData.sourceArr;
        opData.SourceLock_TV_flipSwitch = !(parseInt(sourceArr[0].hotelLock));
        opData.SourceLock_AV_flipSwitch = !(parseInt(sourceArr[1].hotelLock));
        opData.SourceLock_Component_flipSwitch = !(parseInt(sourceArr[2].hotelLock));
        if(!!sourceArr[0].rename){
            opData.switch_SourceLock_TV_span = sourceArr[0].rename;
        }
        else{
            opData.switch_SourceLock_TV_span = sourceArr[0].name;
        }
        if(!!sourceArr[1].rename){
            opData.switch_SourceLock_AV_span = sourceArr[1].rename;
        }
        else{
            opData.switch_SourceLock_AV_span = sourceArr[1].name;
        }
        if(!!sourceArr[2].rename){
            opData.switch_SourceLock_Component_span = sourceArr[2].rename;
        }
        else{
            opData.switch_SourceLock_Component_span = sourceArr[2].name;
        }
        HotelMenuInputLockData.switch_SourceLock_TV_span.disable = false;
        HotelMenuInputLockData.SourceLock_TV_flipSwitch.disable = false;
        HotelMenuInputLockData.switch_SourceLock_AV_span.disable = false;
        HotelMenuInputLockData.SourceLock_AV_flipSwitch.disable = false;
        HotelMenuInputLockData.switch_SourceLock_Component_span.disable = false;
        HotelMenuInputLockData.SourceLock_Component_flipSwitch.disable = false;
        HotelMenuInputLockData.switch_SourceLock_Scart_span.disable = false;
        HotelMenuInputLockData.SourceLock_Scart_flipSwitch.disable = false;
        HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = false;
        HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = false;
        HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = false;
        HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = false;
        HotelMenuInputLockData.switch_SourceLock_HDMI3_span.disable = false;
        HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = false;
        HotelMenuInputLockData.switch_SourceLock_HDMI4_span.disable = false;
        HotelMenuInputLockData.SourceLock_HDMI4_flipSwitch.disable = false;
        switch (onsource) {
            case 0:
                HotelMenuInputLockData.switch_SourceLock_TV_span.disable = true;
                HotelMenuInputLockData.SourceLock_TV_flipSwitch.disable = true;
                break;
            case 1:
                HotelMenuInputLockData.switch_SourceLock_AV_span.disable = true;
                HotelMenuInputLockData.SourceLock_AV_flipSwitch.disable = true;
                break;
            case 2:
                HotelMenuInputLockData.switch_SourceLock_Component_span.disable = true;
                HotelMenuInputLockData.SourceLock_Component_flipSwitch.disable = true;
                break;
            default:
                break;
        }
        switch (cursource){
            case 0:
                HotelMenuInputLockData.switch_SourceLock_TV_span.disable = true;
                HotelMenuInputLockData.SourceLock_TV_flipSwitch.disable = true;
                break;
            case 1:
                HotelMenuInputLockData.switch_SourceLock_AV_span.disable = true;
                HotelMenuInputLockData.SourceLock_AV_flipSwitch.disable = true;
                break;
            case 2:
                HotelMenuInputLockData.switch_SourceLock_Component_span.disable = true;
                HotelMenuInputLockData.SourceLock_Component_flipSwitch.disable = true;
                break;
            default:
                break;
        }
        if (sourceArr.length == 7) {
            opData.SourceLock_HDMI1_flipSwitch = !(parseInt(sourceArr[3].hotelLock));
            opData.SourceLock_HDMI2_flipSwitch = !( parseInt(sourceArr[4].hotelLock));
            opData.SourceLock_HDMI3_flipSwitch = !(parseInt(sourceArr[5].hotelLock));
            opData.SourceLock_HDMI4_flipSwitch = !(parseInt(sourceArr[6].hotelLock));

            if(!!sourceArr[3].rename){
                opData.switch_SourceLock_HDMI1_span = sourceArr[3].rename;
            }
            else{
                opData.switch_SourceLock_HDMI1_span = sourceArr[3].name;
            }
            if(!!sourceArr[4].rename){
                opData.switch_SourceLock_HDMI2_span = sourceArr[4].rename;
            }
            else{
                opData.switch_SourceLock_HDMI2_span = sourceArr[4].name;
            }
            if(!!sourceArr[5].rename){
                opData.switch_SourceLock_HDMI3_span = sourceArr[5].rename;
            }
            else{
                opData.switch_SourceLock_HDMI3_span = sourceArr[5].name;
            }
            if(!!sourceArr[6].rename){
                opData.switch_SourceLock_HDMI4_span = sourceArr[6].rename;
            }
            else{
                opData.switch_SourceLock_HDMI4_span = sourceArr[6].name;
            }
            $("#switch_SourceLock_Scart").css("display","none");
            HotelMenuInputLockData.SourceLock_Scart_flipSwitch.disable = true;
            switch (onsource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                case 5:
                    HotelMenuInputLockData.switch_SourceLock_HDMI3_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = true;
                    break;
                case 6:
                    HotelMenuInputLockData.switch_SourceLock_HDMI4_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI4_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
            switch (cursource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                case 5:
                    HotelMenuInputLockData.switch_SourceLock_HDMI3_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = true;
                    break;
                case 6:
                    HotelMenuInputLockData.switch_SourceLock_HDMI4_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI4_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
        }
        else if(sourceArr.length==5){
            opData.SourceLock_HDMI1_flipSwitch = !(parseInt(sourceArr[3].hotelLock));
            opData.SourceLock_HDMI2_flipSwitch = !( parseInt(sourceArr[4].hotelLock));
            if(!!sourceArr[3].rename){
                opData.switch_SourceLock_HDMI1_span = sourceArr[3].rename;
            }
            else{
                opData.switch_SourceLock_HDMI1_span = sourceArr[3].name;
            }
            if(!!sourceArr[4].rename){
                opData.switch_SourceLock_HDMI2_span = sourceArr[4].rename;
            }
            else{
                opData.switch_SourceLock_HDMI2_span = sourceArr[4].name;
            }
            $("#switch_SourceLock_HDMI3").css("display","none");
            $("#switch_SourceLock_HDMI4").css("display","none");
            $("#switch_SourceLock_Scart").css("display","none");
            $(".setting_hotelinputlock_all_div").css("height","500px");
            HotelMenuInputLockData.SourceLock_Scart_flipSwitch.disable = true;
            HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = true;
            HotelMenuInputLockData.SourceLock_HDMI4_flipSwitch.disable = true;

            switch (onsource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
            switch (cursource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
        }
        else if (sourceArr.length == 6) {
            opData.SourceLock_HDMI1_flipSwitch = !(parseInt(sourceArr[3].hotelLock));
            opData.SourceLock_HDMI2_flipSwitch = !( parseInt(sourceArr[4].hotelLock));
            opData.SourceLock_HDMI3_flipSwitch = !(parseInt(sourceArr[5].hotelLock));
            if (!!sourceArr[3].rename) {
                opData.switch_SourceLock_HDMI1_span = sourceArr[3].rename;
            }
            else {
                opData.switch_SourceLock_HDMI1_span = sourceArr[3].name;
            }
            if (!!sourceArr[4].rename) {
                opData.switch_SourceLock_HDMI2_span = sourceArr[4].rename;
            }
            else {
                opData.switch_SourceLock_HDMI2_span = sourceArr[4].name;
            }
            if (!!sourceArr[5].rename) {
                opData.switch_SourceLock_HDMI3_span = sourceArr[5].rename;
            }
            else {
                opData.switch_SourceLock_HDMI3_span = sourceArr[5].name;
            }

            $("#switch_SourceLock_HDMI4").css("display", "none");
            $("#switch_SourceLock_Scart").css("display", "none");
            $(".setting_hotelinputlock_all_div").css("height", "570px");
            HotelMenuInputLockData.SourceLock_Scart_flipSwitch.disable = true;
            HotelMenuInputLockData.SourceLock_HDMI4_flipSwitch.disable = true;

            switch (onsource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                case 5:
                    HotelMenuInputLockData.switch_SourceLock_HDMI3_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
            switch (cursource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                case 5:
                    HotelMenuInputLockData.switch_SourceLock_HDMI3_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
        }
        else if(sourceArr.length == 8){
            opData.SourceLock_Scart_flipSwitch = !(parseInt(sourceArr[3].hotelLock));
            opData.SourceLock_HDMI1_flipSwitch = !(parseInt(sourceArr[4].hotelLock));
            opData.SourceLock_HDMI2_flipSwitch = !(parseInt(sourceArr[5].hotelLock));
            opData.SourceLock_HDMI3_flipSwitch = !(parseInt(sourceArr[6].hotelLock));
            opData.SourceLock_HDMI4_flipSwitch = !(parseInt(sourceArr[7].hotelLock));
            if(!!sourceArr[3].rename){
                opData.switch_SourceLock_Scart_span = sourceArr[3].rename;
            }
            else{
                opData.switch_SourceLock_Scart_span = sourceArr[3].name;
            }
            if(!!sourceArr[4].rename){
                opData.switch_SourceLock_HDMI1_span = sourceArr[4].rename;
            }
            else{
                opData.switch_SourceLock_HDMI1_span = sourceArr[4].name;
            }
            if(!!sourceArr[5].rename){
                opData.switch_SourceLock_HDMI2_span = sourceArr[5].rename;
            }
            else{
                opData.switch_SourceLock_HDMI2_span = sourceArr[5].name;
            }
            if(!!sourceArr[6].rename){
                opData.switch_SourceLock_HDMI3_span = sourceArr[6].rename;
            }
            else{
                opData.switch_SourceLock_HDMI3_span = sourceArr[6].name;
            }
            if(!!sourceArr[7].rename){
                opData.switch_SourceLock_HDMI4_span = sourceArr[7].rename;
            }
            else{
                opData.switch_SourceLock_HDMI4_span = sourceArr[7].name;
            }
            $(".setting_hotelinputlock_all_div").css("height", "720px");
            switch (onsource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_Scart_span.disable = true;
                    HotelMenuInputLockData.SourceLock_Scart_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 5:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                case 6:
                    HotelMenuInputLockData.switch_SourceLock_HDMI3_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = true;
                    break;
                case 7:
                    HotelMenuInputLockData.switch_SourceLock_HDMI4_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI4_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
            switch (cursource) {
                case 3:
                    HotelMenuInputLockData.switch_SourceLock_Scart_span.disable = true;
                    HotelMenuInputLockData.SourceLock_Scart_flipSwitch.disable = true;
                    break;
                case 4:
                    HotelMenuInputLockData.switch_SourceLock_HDMI1_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI1_flipSwitch.disable = true;
                    break;
                case 5:
                    HotelMenuInputLockData.switch_SourceLock_HDMI2_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI2_flipSwitch.disable = true;
                    break;
                case 6:
                    HotelMenuInputLockData.switch_SourceLock_HDMI3_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI3_flipSwitch.disable = true;
                    break;
                case 7:
                    HotelMenuInputLockData.switch_SourceLock_HDMI4_span.disable = true;
                    HotelMenuInputLockData.SourceLock_HDMI4_flipSwitch.disable = true;
                    break;
                default:
                    break;
            }
        }


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
                {id: "0", name: "TV", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "0"},
                {id: "1", name: "AV", signal: "1", lock: "0", rename:"tvqqq sss wesw dd",hotelLock: "0"},
                {id: "2", name: "Component", signal: "1", lock: "1",rename:"tvqqq", hotelLock: "0"},
                {id: "3", name: "HDMI1", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "4", name: "HDMI2", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "5", name: "HDMI3", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"},
                {id: "6", name: "HDMI4", signal: "1", lock: "0",rename:"tvqqq", hotelLock: "1"}
            ]
        }
        var itemData = {"setting_OnSourceItem_span": {"Data": "none"}}
        HotelMenuData.setting_OnSourceItem.disableItem = [];
        $.each(HotelMenuData.operateData.sourceArr, function (k, v) {
            HotelMenuData.setting_OnSourceItem.Data.push($.extend(true, {}, itemData));
            if(!!v.rename){
                HotelMenuData.setting_OnSourceItem.Data[k].setting_OnSourceItem_span.Data
                    = v.rename;
            }
            else{
                HotelMenuData.setting_OnSourceItem.Data[k].setting_OnSourceItem_span.Data
                    = v.name;
            }
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
            opData.OSSelectedIndex = HotelMenuData.operateData.sourceArr.length;
            opData.OSDataSelectedIndex = HotelMenuData.operateData.sourceArr.length;
        }
        else {
            opData.OSSelectedIndex = index;
            opData.OSDataSelectedIndex = index;
        }
        debugPrint("________>HotelMenuData.operateData.OSDataSelectedIndex:" + HotelMenuData.operateData.OSDataSelectedIndex);

    }
    catch (ex) {
        debugE(ex);
    }
}