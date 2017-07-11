/**
 * Created by hisense on 2015/3/8.
 */
function getPvrHDListPageData(page) {
    page.CaE = [
        {
            "id": "pvrtshift_usb_list_title",
            "description": "setting head",
            "CaEType": "span"
        },
        {
            "id": "pvrtshift_usb_list_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },
            "handler": {
                "befEnterHandler": "pvrHDListEnHandler", "aftDownHandler": "pvrHDListDownHandler",
                "aftUpHandler": "pvrHDListUpHandler", "aftEscHandler": "pvrHDListEscHandler"
            },
            oriCaE: [
                {
                    "id": "pvrtshift_usb_list_txt1",
                    "description": "名称",
                    "CaEType": "span"
                },
                {
                    "id": "pvrtshift_usb_list_img1",
                    "description": "图片",
                    "CaEType": "img"
                }
            ],
            UlConfig: {
                "UlDataItem": ["pvrtshift_usb_list_txt1", "pvrtshift_usb_list_img1"],
                "PageSize": 3
            }
        }
    ];
    return pvrHDListPageData;
}

var pvrHDListPageData = {

    "pvrtshift_usb_list_title": {Data: "Select disk"},  //应该是 之一 没有该词条 "titlelist": ["Select partition", "Select space size"],
    "pvrtshift_usb_list_ul1": {
        Data: [
            {
                "pvrtshift_usb_list_img1": {Data: "img/unselectedBall.png"},
                "pvrtshift_usb_list_txt1": {Data: "c"}
            },
            {
                "pvrtshift_usb_list_img1": {Data: "img/unselectedBall.png"},
                "pvrtshift_usb_list_txt1": {Data: "d"}
            },
            {
                "pvrtshift_usb_list_img1": {Data: "img/unselectedBall.png"},
                "pvrtshift_usb_list_txt1": {Data: "e"}
            },
            {
                "pvrtshift_usb_list_img1": {Data: "img/unselectedBall.png"},
                "pvrtshift_usb_list_txt1": {Data: "f"}
            }
        ],
        "SelectedIndex": 0
    },
    "operateData": {
        "titlelist": ["Select partition", "Select space size"],
        "memlist": ["1G", "1.5G", "2G", "2.5G", "3G", "3.5G", "4G"],
        "memindex": [2, 3, 4, 5, 6, 7, 8],
        //"parentpage":"pvr",
        "curstep": 0,
        "curtitle": 0,
        "curselectpartition": 0,
        "curselectmemmory": 0,
        "curvolumlist": [
            {
                "path": "/mnt",
                "name": "c",
                "uuid": "9000",
                "free": 0
            },
            {
                "path": "/mnt",
                "name": "d",
                "uuid": "9000",
                "free": 0
            }
        ],
        "timer": null
    },
    "langData": {
        "Select partition": [],
        "Select space size": [],
        "No limit": []
    },
    rewrite: function (pageData) {
        try {
            var element = {};
            pageData.pvrtshift_usb_list_title.Data = pageData.operateData.titlelist[pageData.operateData.curtitle];
            pageData.pvrtshift_usb_list_ul1.Data = [];
            if (pageData.operateData.curstep == 0) // select mount for pvr & Tshift
            {
                $.each(pageData.operateData.curvolumlist, function (k, v) {
                    element.pvrtshift_usb_list_img1 = {};
                    element.pvrtshift_usb_list_txt1 = {};
                    if (pageData.operateData.curselectpartition == k) {
                        element.pvrtshift_usb_list_img1.Data = "img/selectedBall.png";
                    }
                    else {
                        element.pvrtshift_usb_list_img1.Data = "img/unselectedBall.png";
                    }
                    element.pvrtshift_usb_list_txt1.Data = v.name;
                    pageData.pvrtshift_usb_list_ul1.Data.push(_cloneObj(element));
                });
                if (pageData.operateData.curselectpartition != null) {
                    pageData.pvrtshift_usb_list_ul1.SelectedIndex = pageData.operateData.curselectpartition;
                }
            }
            else if (pageData.operateData.curstep == 1) // select memory for Tshift
            {
                for (var i = 0; i < pageData.operateData.memindex.length; i++) {
                    if (pageData.operateData.curvolumlist[pageData.operateData.curselectpartition].free > pageData.operateData.memindex[i] * 512 * 1024 * 1024) {
                        element.pvrtshift_usb_list_img1 = {};
                        element.pvrtshift_usb_list_txt1 = {};
                        if (pageData.operateData.curselectmemmory == i) {
                            element.pvrtshift_usb_list_img1.Data = "img/selectedBall.png";
                        }
                        else {
                            element.pvrtshift_usb_list_img1.Data = "img/unselectedBall.png";
                        }
                        element.pvrtshift_usb_list_txt1.Data = pageData.operateData.memlist[i];
                        pageData.pvrtshift_usb_list_ul1.Data.push(_cloneObj(element));
                    }
                }
            }
            if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                $(".setting_sys_mt_ul1").css("float", "left")
                $(".setting_sys_mt_ul1").css("margin", "0 0 0 65px");
                $(".setting_sys_list1_srcobar_container").css("float", "right");
                $(".setting_sys_list1_srcobar_container").css("margin", "25px 15px 0 0");

            }
            else {
                $(".setting_sys_mt_ul1").css("float", "right")
                $(".setting_sys_mt_ul1").css("margin", "0 65px 0 0");
                $(".setting_sys_list1_srcobar_container").css("float", "left");
                $(".setting_sys_list1_srcobar_container").css("margin", "25px 0 0 15px");

            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

    }
};

function pvrHDListOpenHandler() {
    try {
        if (0 == pvrHDListPageData.operateData.curstep) {
            var element = {};
            pvrHDListPageData.operateData.curvolumlist = [];
            //pvrHDListPageData.pvrtshift_usb_list_ul1 = {Data:[], SelectedIndex:0};
            for (var i = 0; i < pvrHardDiskCheckPageData.operateData.partitionNumber; ++i) {
                element.path = pvrVolumeList[i].path;
                element.name = pvrVolumeList[i].name;
                element.uuid = pvrVolumeList[i].uuid;
                element.free = pvrVolumeList[i].free;
                pvrHDListPageData.operateData.curvolumlist.push(_cloneObj(element));
            }
        }
        this.page.rewrite();

        DBG_INFO("pvrHDList: OpenHandler");
        UpdataScrollBarOfPvrTshift(this.data);
        if (pvrHDListPageData.pvrtshift_usb_list_ul1.Data.length > 3) {
            var index = this.page.getCaE("pvrtshift_usb_list_ul1").BeginIdx;
            DBG_INFO("index" + index, DebugLevel.INFO);
            $("#pvrtshift_usb_list_srcollbar").css("top", parseInt(235 / pvrHDListPageData.pvrtshift_usb_list_ul1.Data.length) * index);
        }
        if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_mt_ul1").css("float", "left")
            $(".setting_sys_mt_ul1").css("margin", "0 0 0 65px");
            $(".setting_sys_list1_srcobar_container").css("float", "right");
            $(".setting_sys_list1_srcobar_container").css("margin", "25px 15px 0 0");

        }
        else {
            $(".setting_sys_mt_ul1").css("float", "right")
            $(".setting_sys_mt_ul1").css("margin", "0 65px 0 0");
            $(".setting_sys_list1_srcobar_container").css("float", "left");
            $(".setting_sys_list1_srcobar_container").css("margin", "25px 0 0 15px");


        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function UpdataScrollBarOfPvrTshift(pageData) {
    try {
        var i = pageData.pvrtshift_usb_list_ul1.Data.length;
        if (i > 3) {
            var temp = parseInt(235 / i * 3);
            $("#pvrtshift_usb_list_srcollbar").css("height", temp);
            $("#pvrtshift_usb_list_srcollbar").css("visibility", "visible");
        }
        else {
            $("#pvrtshift_usb_list_srcollbar").css("visibility", "hidden");
        }
        pageData.operateData.step = parseInt(235 / i);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function pvrHDListEnHandler() {
    try {
        // curPage is pvr or tshift
        DBG_INFO("pvrHDList: EnHandler, curstep = " + this.page.operateData.curstep + "currentPage = " + this.page.operateData.curPage);
        // step 0 正常 step 1 tshift才会出来选磁盘大小
        if (0 == this.page.operateData.curstep) {
            this.page.operateData.curselectpartition = this.SelectedIndex;
            this.page.rewriteDataOnly();

            if (this.page.operateData.curPage == "pvr") {
                this.page.close();
                DBG_INFO("Uuid=" + this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
                if (!this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid) {
                    hiWebOsFrame.createPage("pvrHDSpeedCheckResult", null, null, null, function (page) {
                        hiWebOsFrame.pvrHDSpeedCheckResult = page;
                        hiWebOsFrame.pvrHDList.destroy();
                        pvrHDSpeedCheckResultPageData.operateData.curListIndex = 2;
                        hiWebOsFrame.pvrHDSpeedCheckResult.rewriteDataOnly();
                        hiWebOsFrame.pvrHDSpeedCheckResult.open();
                        hiWebOsFrame.pvrHDSpeedCheckResult.hiFocus();
                    });
                }
                else {
                    try {
                        model.pvr.SpeedTest(this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].path);
                        DBG_INFO("speed test uuid=" + this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
                        model.pvr.getPvrSpeed = onPvrHDSpeedChanged;
                    }
                    catch (ex) {
                        DBG_ERROR(ex.message);
                    }
                }
            } else if (this.page.operateData.curPage == "tshift") {
                DBG_INFO("pvrHDList: switch to size page!" + this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
                if (this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid == null) {
                    this.page.close();
                    hiWebOsFrame.createPage('tShiftMsg_id', null, null, null, function (page) {
                        DBG_INFO('launch tShiftMsg_id start !!!!!');
                        hiWebOsFrame.tshiftMsg = page;
                        hiWebOsFrame.tshiftMsg.operateData.showFlag = 2;
                        hiWebOsFrame.tshiftMsg.rewriteDataOnly();
                        page.open();
                        page.hiFocus();
                        hiWebOsFrame.tshiftMsg.timer = setTimeout(exitTMsgPage, 10 * 1000);
                    });
                    return;
                }
                var uid = this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid;
                model.timeshift.getTshiftIsRegistered = tshiftIsRegistered.bind(this, uid);
                DBG_INFO("path::::::::" + this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].path);
                model.timeshift.IsRegistered(this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].path);


//            model.timeshift.getTshiftParInfo = pvrOrTsGetParInfoEnd;
//            model.timeshift.setUuid(this.page.operateData.curvolumlist[this.page.operateData.curselectpartition].uuid);
//            model.timeshift.ParInfo();
            }
        } else if (1 == this.page.operateData.curstep) {
            this.page.operateData.curselectmemmory = this.SelectedIndex;
            this.page.close();
            DBG_INFO("pvrHDList: switch to test speed!");
            startTshiftMediaDialog();
            model.timeshift.getRegisterReturnValue = speedTestResultForTshift;
            model.timeshift.setMemSize(this.page.operateData.memindex[this.page.operateData.curselectmemmory]);
            model.timeshift.SetPar();

            //model.timeshift.onParAvailableChaged = parAvailableForTshift;
            DBG_INFO("pvrHDList: ready to check disk!");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function tshiftIsRegistered(uid, id, value) {
    try {
        DBG_INFO("tshiftIsRegistered!!!!" + value + " =:" + uid);
        if (value == -1) {
            model.timeshift.setMemSize(0);
            model.timeshift.getTshiftParInfo = pvrOrTsGetParInfoEnd;
            model.timeshift.setUuid(uid);
            model.timeshift.ParInfo();
        } else {
            DBG_INFO("pvrHDList: switch to test speed!");
            hiWebOsFrame.pvrHDList.close();
            var memSize = value / 1024;
            var memIndex = value / 512;
//            var memIndex = 2;
//            if (memSize == 1) {
//                memIndex = 2;
//            } else if (memSize > 1 && memSize < 2) {
//                memIndex = 3;
//            } else if (memSize == 2) {
//                memIndex = 4;
//            } else if (memSize > 2 && memSize < 3) {
//                memIndex = 5;
//            } else if (memSize == 3) {
//                memIndex = 6;
//            } else if (memSize > 3 && memSize < 4) {
//                memIndex = 7;
//            } else if (memSize == 4) {
//                memIndex = 8;
//            }
            openLiveTVModule([Msg.INFO, 0]);
            //startTshiftMediaDialog();
            model.timeshift.setUuid(uid);
            model.timeshift.setMemSize(memIndex);
            g_tshiftmediaShow = true;
            model.timeshift.getRegisterReturnValue = speedTestResultForTshift;
            model.timeshift.SetPar();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function pvrOrTsGetParInfoEnd(id, value) {
    try {
        DBG_INFO("pvrOrTsGetParInfoEnd!" + value[1]);

        var minimumValue = 1073741824;  //1G size

        pvrHDListPageData.operateData.curvolumlist[pvrHDListPageData.operateData.curselectpartition].free = value[1];
        if (pvrHDListPageData.operateData.curvolumlist[pvrHDListPageData.operateData.curselectpartition].free < minimumValue) {
            model.timeshift.setMemSize(0);
            hiWebOsFrame.pvrHDList.close();
            DBG_INFO("pvrHDList: switch to size page < 1g!");
            hiWebOsFrame.createPage('tShiftMsg_id', null, null, null, function (page) {
                DBG_INFO('launch tshift! start !!!!!');
                hiWebOsFrame.tshiftMsg = page;
                hiWebOsFrame.tshiftMsg.operateData.showFlag = 1;
                page.open();
                page.hiFocus();
                hiWebOsFrame.tshiftMsg.rewriteDataOnly();
                hiWebOsFrame.tshiftMsg.operateData.timer = setTimeout(exitTMsgPage, 10 * 1000);
            });

        }
        else {

            DBG_INFO("pvrHDList: switch to size page > 1g!");
            if(hiWebOsFrame.getCurrentArea() == "EU"){
                hiWebOsFrame.pvrHDList.close();
                hiWebOsFrame.createPage("shiftHdSizeList", null, null, null, function (page) {
                    hiWebOsFrame.shiftHdSizeList = page;
                    setLeftParInfo(value[1]);
                    page.open();
                    page.hiFocus();
                });
            }else{
                pvrHDListPageData.operateData.curstep = 1;
                pvrHDListPageData.operateData.curtitle = 1;
                hiWebOsFrame.pvrHDList.open();
                hiWebOsFrame.pvrHDList.hiFocus();
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function parAvailableForTshift(value) {
    try {
        DBG_INFO("pvrHDList: parAvailableForTshift, value=" + value);
        if (7 == value) {
            try {
                tshiftJudgeToOpenPage();
            } catch (ex) {
                DBG_INFO(ex);
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}


/*
 * 监听USB速度检测结果
 * */
function onPvrHDSpeedChanged(id, value) {
    try {
        DBG_INFO("onPvrHDSpeedChanged: " + JSON.stringify(value));
        DBG_INFO("pvr speed test finish!");
        var result = parseFloat(value);
        if (result != 0) {
            DBG_INFO("pvr speed test ok!");
            if (hiWebOsFrame.getCurrentPageId() == "pvrOrtShiftDialogPage_id") {
                hiWebOsFrame.ptDialog.close();
            }
            try {
                model.pvr.setStationUuid(pvrHDListPageData.operateData.curvolumlist[pvrHDListPageData.operateData.curselectpartition].uuid);
                DBG_INFO('model.pvr.setStationUuid(' + pvrHDListPageData.operateData.curvolumlist[pvrHDListPageData.operateData.curselectpartition].uuid + ')');
            }
            catch (ex) {
                DBG_ERROR("model.pvr.setStationUuid error:" + ex.message);
            }
            hiWebOsFrame.createPage("pvrHDSpeedCheckResult", null, null, null, function (page) {
                DBG_INFO("speed test over and start record!");
                hiWebOsFrame.pvrHDSpeedCheckResult = page;
                hiWebOsFrame.pvrHDSpeedCheckResult.open();
                pvrHDSpeedCheckResultPageData.operateData.curListIndex = 0;
                hiWebOsFrame.pvrHDSpeedCheckResult.rewriteDataOnly();
                hiWebOsFrame.pvrHDSpeedCheckResult.hiFocus();
            });
        }
        else {
            DBG_INFO("pvr speed test fail!");
            hiWebOsFrame.createPage("pvrHDSpeedCheckResult", null, null, null, function (page) {
                hiWebOsFrame.pvrHDSpeedCheckResult = page;
                hiWebOsFrame.pvrHDSpeedCheckResult.open();
                pvrHDSpeedCheckResultPageData.operateData.curListIndex = 1;
                hiWebOsFrame.pvrHDSpeedCheckResult.rewriteDataOnly();
                hiWebOsFrame.pvrHDSpeedCheckResult.hiFocus();
            });
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function pvrHDListEscHandler() {
    try {
        if (0 == this.page.operateData.curstep) {
            this.page.close();
            this.page.operateData.curselectpartition = 0;
            this.page.operateData.curstep = 0;

            //todo ghl (if epg -> open epg);

            if (!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible) {
                hiWebOsFrame.epg.hiFocus();
                DBG_INFO("!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible, return epg;")
                return;
            }


            // add by ghl 返回什么页面;   //后期统一修改成返回livetv，减少bug
            if (!!hiWebOsFrame.ptDialog) {
                hiWebOsFrame.ptDialog.open();
                hiWebOsFrame.ptDialog.hiFocus();
            } else {
                openLiveTVModule();
            }

        } else if (1 == this.page.operateData.curstep) {
            this.page.operateData.curstep = 0;
            this.page.operateData.curselectmemmory = 0;
            this.page.open();
            this.page.hiFocus();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function pvrHDListUpHandler() {
    try {
        var temp = pvrHDListPageData.pvrtshift_usb_list_ul1.Data.length;
        if (pvrHDListPageData.pvrtshift_usb_list_ul1.Data.length > 3 && this.SelectedIndex < (temp - 3)) {
            var temp = this.SelectedIndex * pvrHDListPageData.operateData.step;
            $("#pvrtshift_usb_list_srcollbar").css("top", temp);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function pvrHDListDownHandler() {
    try {
        if (this.SelectedIndex < pvrHDListPageData.pvrtshift_usb_list_ul1.Data.length && this.SelectedIndex > 2) {
            var temp = (this.SelectedIndex - 2) * pvrHDListPageData.operateData.step;
            $("#pvrtshift_usb_list_srcollbar").css("top", temp);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
function pvrHDListOnDestroy() {
    try {
        pvrHDListPageData.operateData.curstep = 0;
        pvrHDListPageData.operateData.curtitle = 0;
        pvrHDListPageData.operateData.curselectpartition = 0;
        pvrHDListPageData.operateData.curselectmemmory = 0;
        hiWebOsFrame.pvrHDList.close();
        DBG_INFO("pvr HD list page close!");
        hiWebOsFrame.pvrHDList = null;
        //if(hiWebOsFrame.pvrHardDiskCheck) hiWebOsFrame.pvrHardDiskCheck.destroy();
        //if(hiWebOsFrame.pvrHDCheckRetryDialog) hiWebOsFrame.pvrHDCheckRetryDialog.destroy();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
