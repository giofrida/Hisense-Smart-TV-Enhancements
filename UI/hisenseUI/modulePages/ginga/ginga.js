/**
 * Created by BOB.J on 2015/2/12.
 */

function getGingaPageData(opts) {

    opts.CaE = [
        {
            id: "ginga_head",
            CaEType: 'div'
        },
        {
            id: 'ginga_app_list',
            CaEType: 'Ul',
            handler: {
                aftEnterHandler: "ginga.gingaAppEnterHandler",
                aftEscHandler: "ginga.gingaAppEscHandler",
                aftDownHandler: "ginga.gingaAppAftDownHandler",
                aftUpHandler: "ginga.gingaAppAftUpHandler"
            },
            oriCaE: [
                {
                    id: 'ginga_app_name',
                    CaEType: 'span'
                },
                {
                    id: "ginga_app_status",
                    CaEType: 'span'
                }
            ],
            UlConfig: {
                UlDataItem: [
                    'ginga_app_name',
                    'ginga_app_status'
                ],
                PageSize: 5
            },
            SelectedIndex: 0
        }
    ]

    return ginga.pageData
}

function gingaApp() {
    var self = this;
    self.id = "ginga_app";
    var ActiveDeActiveFlag = null;

    var GINGA_STATE = {
        UNINIT: 'uninit',
        AVAIL: 'avail',
        RUNNING: 'running',
        DEFAULT: ''
    }

    var GINGA_CMD = {
        START: 'start'
    }

    var gingaItemNull = {
        id: "",
        name: "",
        status: ""
    }

    self.pageData = {
        "ginga_head": {Data: "Ginga"},
        ginga_app_list: {
            Data: [],
            SelectedIndex: 0
        },
        rewrite: rewritePageData
    };
    var oprtData = {
        appList: [],
        scrollHeight: 570,
        scrollStep: 0
    }

    self.pageData.operateData = oprtData;

    self.getRunningState = getRunningState;
    self.CheckIfNeedSendKeyToGingaFirst = CheckIfNeedSendKeyToGingaFirst;
    self.GingaInit = GingaInit;
    self.GingaActive = GingaActive;
    self.GingaDeActive = GingaDeActive;

    self.GingaStop = GingaStop;
    self.GingaStart = GingaStart;
//    self.open = self.onOpenGinga;
    self.gingaAppEnterHandler = gingaAppEnterHandler;
    self.gingaAppEscHandler = gingaAppEscHandler;
    self.getRunninGingaIndex = getRunninGingaIndex; //获得正在running的gignaIndex
    self.gingaAppAftDownHandler = gingaAppAftDownHandler;
    self.gingaAppAftUpHandler = gingaAppAftUpHandler;
    self.RefreshGingaScrollBar = RefreshGingaScrollBar;
    self.PushGingaAppNullItem = PushGingaAppNullItem;

    self.onOpenGinga = function () {
        debugG('onOpenGinga');
        hiWebOsFrame.SendMheg5Status(0);
        //model.ginga.getAppList();

        //temp
//        gingaAppList('aa');
    }


    function rewritePageData(pageData) {
        pageData.ginga_app_list.Data = [];
        oprtData.appList.forEach(function (v) {
            pageData.ginga_app_list.Data.push({
                ginga_app_name: {Data: v.name},
                ginga_app_status: {Data: ""}
            })
        });
        pageData.ginga_app_list.SelectedIndex = getRunninGingaIndex();
        pageData.ginga_app_list.SelectedIndex == -1 && (pageData.ginga_app_list.SelectedIndex = 0);
    }

//    function gingaAppList(val) {
////        val = strToObject(val);
//        if (null != val) {
//            oprtData.appList = [
//                {
//                    id: "1",
//                    name: "app1",
//                    status: "On"
//                },
//                {
//                    id: "2",
//                    name: "app2",
//                    status: "On"
//                },
//                {
//                    id: "3",
//                    name: "app3",
//                    status: "Off"
//                },
//                {
//                    id: "4",
//                    name: "app4",
//                    status: "On"
//                }
//            ]
//        }
//        else {
//            oprtData.appList = [];
//            DBG_ERROR("get ginga app error");
//        }
//
//        hiWebOsFrame.ginga_app.rewrite();
//        hiWebOsFrame.ginga_app.hiFocus();
//    }

    //ginga notify


    self.exitGingaPage = function () {
        hiWebOsFrame.ginga_app.destroy();
    }

    function gingaAppEnterHandler() {
        try {
            debugG("gingaAppEnterHandler");
            var selIndex = this.SelectedIndex;
            var gignaCmd = GINGA_CMD.START
            var gingaId = oprtData.appList[this.SelectedIndex].id;
            if(gingaId != ""){
                debugG('model.ginga.ActionCtrl_ginga_app(' + gignaCmd + ', ' + gingaId + ')');
                model.ginga.ActionCtrl_ginga_app(gignaCmd, gingaId);
            }
            gingaAppEscHandler();
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function gingaAppEscHandler() {
        try {
            debugG("gingaAppEscHandler");
            hiWebOsFrame.ginga_app.close();

            openLiveTVModule();

        } catch (ex) {
            debugE(ex.message);
        }
    }

    function gingaAppAftUpHandler() {
        try {
            debugG("curIdx: " + ginga.pageData.ginga_app_list.SelectedIndex);
            var beginIdx = hiWebOsFrame.ginga_app.getCaE("ginga_app_list").BeginIdx;

            if (beginIdx == UNDEFINED_DEFSTR) {
                debugE("beginIdx Err!!");
            } else {
                GingaScrollMoveTo(beginIdx);
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function gingaAppAftDownHandler() {
        try {
            debugG("curIdx: " + ginga.pageData.ginga_app_list.SelectedIndex);
            var beginIdx = hiWebOsFrame.ginga_app.getCaE("ginga_app_list").BeginIdx;

            if (beginIdx == UNDEFINED_DEFSTR) {
                debugE("beginIdx Err!!");
            } else {
                GingaScrollMoveTo(beginIdx);
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function RefreshGingaScrollBar() {
        try {
            debugG("RefreshGingaScrollBar called");
            if (ginga.pageData.ginga_app_list.Data.length <= 5) {
                $("#ginga_app_scroll_container").css("visibility", "hidden");
                oprtData.scrollHeight = 570;
                oprtData.scrollStep = 0;
                debugG("scrollHeight: " + oprtData.scrollHeight + ", scrollStep: " + oprtData.scrollStep);
            } else {
                $("#ginga_app_scroll_container").css("visibility", "visible");

                var listCnt = ginga.pageData.ginga_app_list.Data.length;
                oprtData.scrollHeight = 5 / listCnt * 570;
//            OpeData.scrollStep = (390 - OpeData.scrollHeight ) / (listCnt - 5);
                oprtData.scrollStep = 570 / listCnt;

                debugG("scrollHeight: " + oprtData.scrollHeight + ", scrollStep:" + oprtData.scrollStep);
                $("#ginga_app_scroll_bar").css("height", oprtData.scrollHeight + "px");

//                GingaScrollMoveTo(0);
                var firRunIdx = getRunninGingaIndex();
                firRunIdx == -1 && (firRunIdx = 0);
                var appLength = oprtData.appList.length;
                var beginIdx = 0;
                if(firRunIdx - 4 <= 0) {
                    beginIdx = 0;
                } else {
                    beginIdx = firRunIdx - 4;
                }

                debugG(firRunIdx)
                debugG(appLength)
                debugG(beginIdx)
                GingaScrollMoveTo(beginIdx);
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function GingaScrollMoveTo(beginIdx) {
        try {
            debugG("beginIdx: " + beginIdx);
            var scrollMarginTop = beginIdx * oprtData.scrollStep;
            debugG("scrollMarginTop:" + scrollMarginTop);
            $("#ginga_app_scroll_bar").css("margin-top", scrollMarginTop + "px");

        } catch (ex) {
            debugE(ex.message);
        }
    }

    function getRunningState() {
        try {
            debugG('getRunningState()');
            var gingaRunningState = false;
            for (var i = 0; i < oprtData.appList.length; i++) {
                if (GINGA_STATE.RUNNING == oprtData.appList[i].status) {
                    gingaRunningState = true;
                    break;
                }
            }
            return gingaRunningState;
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function CheckIfNeedSendKeyToGingaFirst() {
        try {
            debugG('CheckIfNeedSendKeyToGingaFirst()');
            var gingaState = getRunningState();
            if (true == gingaState) {
                tryToSetGingaKeyStatus(gingaState);
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    //ginga向UI通知状态变化的时候，使用该函数刷新
    function refreshGingaApp(appVec) {   //appVec = [id, name, status]   status: uninit, avail, running, ''
        try {
            debugG('refreshGingaApp: ' + appVec);
            var appTemp = {
                id: 'none',
                name: 'none',
                status: 'uninit'
            }

            appTemp.id = appVec[0];
            appTemp.name = appVec[1];
            appTemp.status = appVec[2];

            var appIdx = _getIndexById(oprtData.appList, appTemp.id);
            if (-1 == appIdx) {
                oprtData.appList.push(appTemp);
            } else {
                if (appTemp.status == GINGA_STATE.UNINIT) {
                    oprtData.appList.splice(appIdx, 1);
                } else {
                    cloneObj(appTemp, oprtData.appList[appIdx]);
                }
            }
            RemoveGingaAppNullItem();

            printGingaApplist();
            var curGingaState = getRunningState();

            tryToSetGingaKeyStatus(curGingaState);

        } catch (ex) {
            debugE(ex.message);
        }
    }

    function printGingaApplist() {
        try {
            for (var i = 0; i < oprtData.appList.length; i++) {
                debugG('ginga[' + i + ']:' + JSON.stringify(oprtData.appList[i]));
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function GingaInit() {
        try {
            debugG('GingaInit');
            if ("SA" != InitArea) {
                debugG('curArea not SA, do not init ginga, return');
                return;
            }
            if(oprtData.appList.length == 0){
                PushGingaAppNullItem();
            }

            model.ginga.onVstrApplistChaged = onGingaVstrApplistChaged;

            var curGingaVec = model.ginga.getVstrApplist();
            debugG('model.ginga.getVstrApplist(): ' + curGingaVec);
            onGingaVstrApplistChaged(curGingaVec);

        } catch (ex) {
            debugE(ex.message);
        }
    }

    function GingaActive(){
        try {
            if("SA" == InitArea){
                if(null == ActiveDeActiveFlag || 1 == ActiveDeActiveFlag){
                    debugG('null == ActiveDeActiveFlag || ActiveDeActiveFlag == 1, do nothing return;');
                    return;
                }

                debugG('"SA" == InitArea, GingaActive');

                model.ginga.ActionActive('active');
                ActiveDeActiveFlag = 1;
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function GingaDeActive(){
        try {
            if("SA" == InitArea){
                if(-1 == ActiveDeActiveFlag){
                    debugG('-1 == ActiveDeActiveFlag, do nothing return;');
                    return;
                }

                debugG('"SA" == InitArea, GingaDeActive');

                model.ginga.ActionActive('deactive');
                ActiveDeActiveFlag = -1;
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function GingaStart(){
        try {
            if ("SA" == InitArea) {
                debugG('"SA" == InitArea, GingaStart');
                model.ginga.ActionStart('start');
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    function GingaStop(){
        try {
            if("SA" == InitArea){
                debugG('"SA" == InitArea, GingaStop');
                model.ginga.ActionStart('stop');
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }



    var onGingaVstrApplistChaged = function (val) {
        try {
            debugG('onGingaVstrApplistChaged:' + val);
            if ('SA' != InitArea) {
                debugG('curArea not SA, return;');
                return;
            }
            if (!!val && val.length == 3 && ['uninit', 'avail', 'running'].indexOf(val[2]) != -1) {
                refreshGingaApp(val);

                if (!!hiWebOsFrame.ginga_app && hiWebOsFrame.ginga_app.visible) {
                    hiWebOsFrame.ginga_app.rewrite();
                    hiWebOsFrame.ginga_app.hiFocus();
                    RefreshGingaScrollBar();
                }
            } else {
                debugG('onGingaVstrApplistChaged: ' + val + ' invalid, return');
                return;
            }

        } catch (ex) {
            debugE(ex.message);
        }
    }

    self.onGingaVstrApplistChaged = onGingaVstrApplistChaged;

    function tryToSetGingaKeyStatus(state) {
        try {
            debugG('tryToSetGingaKeyStatus: ' + state);
            if ("SA" != InitArea) {
                debugG('curArea no SA, return;');
                return;
            }

            if (true == state && !!hiWebOsFrame.blankPage
                && hiWebOsFrame.blankPage.visible
                && livetvmain.getCurrentSourceInnerId() == SourceList.TV
                && livetvmain.getCurrentChannelInfo().type != TVTYPE.ATV) {
                debugG('gingaState == true && curPage liveTV && hiWebOsFrame.blankPage.visible, sendKey to Ginga First');
                hiWebOsFrame.SendMheg5Status(1);
            } else {
                debugG("ginga's depend state not enough, do not send key ginga");
                hiWebOsFrame.SendMheg5Status(0);
            }

        } catch (ex) {
            debugE(ex.message);
        }
    }

    function getRunninGingaIndex() {
        var index = -1;
        try {
            for (var i = 0; i < oprtData.appList.length; i++) {
                if (GINGA_STATE.RUNNING == oprtData.appList[i].status) {
                    index = i;
                    break;
                }
            }
        } catch (ex) {
            debugE(ex.message);
        }
        return index;
    }

    function RemoveGingaAppNullItem(){
        try {
            debugG('RemoveGingaAppNullItem()');
            for(var i=0; i < oprtData.appList.length; i++){
                if(oprtData.appList[i].id == ""
                    && oprtData.appList[i].name == ""
                    && oprtData.appList[i].status == ""){

                    oprtData.appList.splice(i, 1);
                }
            }

            if(oprtData.appList.length == 0){
                PushGingaAppNullItem();
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }
    function PushGingaAppNullItem(){
        try {
            if(oprtData.appList.length == 0){
                oprtData.appList.push(gingaItemNull);
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }
}
var ginga = new gingaApp();

