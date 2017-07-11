function getDialogPVRFileManagerData(opts) {
    //dialogPVRFileManager.getPVRFiles();
    opts.CaE = [
        {
            id: "pvr_file_manager_title_0",
            CaEType: 'div'
        },
        {
            id: "pvr_file_manager_title_1",
            CaEType: 'div'
        },
        {
            id: 'pvr_file_manager_cmp',
            CaEType: 'Ul',
            handler: {
                aftEnterHandler: "dialogPVRFileManager.ListItemEnterHandler",
                aftDownHandler: "dialogPVRFileManager.ListItemAftDownHandler",
                aftUpHandler: "dialogPVRFileManager.ListItemAftUpHandler",
                keyRedHandler: "dialogPVRFileManager.keyRedHandler"
            },
            oriCaE: [
                {
                    id: 'pvr_file_manager_cmp_item',
                    CaEType: 'span'
                },
                {
                    id: "pvr_file_manager_cmp_item_status",
                    CaEType: 'SwitchDiv',
                    "imageList": {
                        "openImg": "img/channellist/mark.png",
                        "closeImg": "img/channellist/nomark.png"
                    },
                    classes: {}
                }

            ],
            UlConfig: {
                UlDataItem: [
                    'pvr_file_manager_cmp_item_status',
                    'pvr_file_manager_cmp_item'
                ],
                PageSize: 6
            },
            SelectedIndex: 0
        },
        {
            id: "pvr_file_manager_bottom_btn_red_text",
            CaEType: 'div'
        }
    ];

    return dialogPVRFileManager.pageData
}

function DialogPVRFileManager() {
    var self = this;
    self.id = "dialog_pvr_file_manager";

    self.pageData = {
        pvr_file_manager_title_0: {Data: "Delete PVR Files"},
        pvr_file_manager_title_1: {Data: "Press key right \">\" delete pvr files"},
        pvr_file_manager_bottom_btn_red_text: {Data: "Delete"},
        pvr_file_manager_cmp: {
            //Data: [{
            //    pvr_file_manager_cmp_item: {Data: 'NULL'},
            //    pvr_file_manager_cmp_item_status: {Data: false}
            //}],
            Data: [],
            SelectedIndex: 0
        },
        rewrite: rewritePageData,
        langData: {
            "Delete": []
        }
    };


    self.RET_ENUM = {
        FAILURE: 'failure',
        SUCCESS: 'success',
        UNKNOWN: 'unknown'
    };
    var opData = {
        fileDeleteSignVec: [],   //仅用来标记是否有失败情况，不一一对应
        scrollHeight: 540,
        scrollStep: 0,
        pvrFileRepository: {}
    };


    self.pageData.operateData = opData;

    self.pvrFileRepositoryPCTEST = {
        "PC_TEST_CH12": {
            "fileList": [
                {
                    "path": "/mnt/usb/sda1/pvr/PC_TEST_CH12/0202_170009.pvr",
                    "mark": false
                },
                {
                    "path": "/mnt/usb/sda1/pvr/PC_TEST_CH12/0202_170024.pvr",
                    "mark": false
                }
            ],
            "hasRead": true
        },
        "PC_TEST_CH6": {
            "fileList": [
                {
                    "path": "/mnt/usb/sda1/pvr/PC_TEST_CH6/0701_110249.pvr",
                    "mark": false
                }
            ],
            "hasRead": true
        }
    };


    function rewritePageData(pageData) {
        try {
            pageData.pvr_file_manager_cmp.Data = [];

            $.each(pageData.operateData.pvrFileRepository, function (key, val) {
                //"PC_TEST_CH12": {
                //    "fileList": [
                //        {
                //            "path": "/mnt/usb/sda1/pvr/PC_TEST_CH12/0202_170009.pvr",
                //            "mark": false
                //        },
                //        {
                //            "path": "/mnt/usb/sda1/pvr/PC_TEST_CH12/0202_170024.pvr",
                //            "mark": false
                //        }
                //    ],
                //        "hasRead": true
                //},
                var len = val.fileList.length;

                for (var i = 0; i < len; i++) {
                    var idx = val.fileList[i].path.indexOf('pvr');

                    var fileName = val.fileList[i].path.substr(idx + 3);
                    var status = val.fileList[i].mark;
                    pageData.pvr_file_manager_cmp.Data.push(
                        {
                            pvr_file_manager_cmp_item: {Data: fileName},
                            pvr_file_manager_cmp_item_status: {Data: status},
                            pvr_file_manager_cmp_item_abs_path: val.fileList[i].path
                        });
                }
            });
            //len == 0 impossible
            var listCnt = pageData.pvr_file_manager_cmp.Data.length;
            DBG_INFO('listCnt: ' + listCnt);
            var selIdx = pageData.pvr_file_manager_cmp.Data.SelectedIndex;
            selIdx >= listCnt && (selIdx = 0);
            pageData.SelectedIndex = selIdx;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.dialogPVRFileManagerOnOpen = function () {
        try {


        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.dialogPVRFileManagerOnClose = function () {
        try {
            ClearPVRPageData();
            dialogPVRFileManager.pageData.pvr_file_manager_cmp.SelectedIndex = 0;
            dialogPVRFileManager.pageData.operateData.fileDeleteSignVec = [];
            dialogPVRFileManager.UsbUuid = null;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    //todo 打开页面时需要刷新该参数
    self.UsbUuid = null;

    var pvrIterator = null;

    self.requestDataFromUsb = function (relPath) {
        try {
            if (false == tv) {
                self.pageData.operateData.pvrFileRepository = self.pvrFileRepositoryPCTEST;
                hiWebOsFrame[self.id].rewrite();

            } else {
                typeof relPath == UNDEFINED_DEFSTR && (relPath = "pvr");
                if (null == self.UsbUuid) {
                    self.UsbUuid = model.pvr.getStationUuid();
                    DBG_INFO('model.pvr.getStationUuid(): ' + self.UsbUuid);
                }
                var filePath = getUsbPathByUid(self.UsbUuid) + relPath;

                DBG_INFO('filePath: ' + filePath);

                //filePath = /mnt/usb/sda1/pvr/

                try {
                    pvrIterator = model.usb.creatUSBTableMainIterator(
                        true,
                        [
                            {
                                field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH,
                                condition: Model.FIELD_COND_EQUAL,
                                value: filePath
                            },
                            {
                                field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE,
                                condition: Model.FIELD_COND_EQUAL,
                                value: UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR
                            }
                        ],
                        [
                            UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, /**< ancestor */
                            UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE, /**< item name */
                            UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR
                        ],
                        [
                            {field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, direction: 1}
                        ],
                        onUSBPvrTableIteratorEvent.bind(this, filePath));
                }
                catch (ex) {
                    DBG_ERROR(ex.message);
                }
                pvrIterator.fetchTotalCount();
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    var FILE_TYPE = {
        OTHER: 0,
        DIR: 1
    };


    var onUSBPvrTableIteratorEvent = function (filePath, event) {
        DBG_INFO("onUSBIteratorEvent and filePath is : " + filePath + ", event:" + JSON.stringify(event));
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) { //1

            function readUsbTable() {
                DBG_INFO("readUsbTable");
                //  /mnt/usb/sda1/pvr, event:{"type":1,"rows":[["CH12","0","1"],["CH6","0","1"]]

                //mnt/usb/sda1/pvr/CH12, event:{"type":1,"rows":[["0202_170009.pvr","4","0"],["0202_170024.pvr","4","0"]]}
                for (var i = 0; i < event.rows.length; i++) {
                    var tempName = event.rows[i][UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH];
                    var tempType = event.rows[i][UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE];
                    var tempIsDir = event.rows[i][UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR];

                    if (tempType == UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR) {
                        DBG_INFO("found pvr file:" + tempName);
                        //["", "mnt", "usb", "sda1", "pvr", "CH6"]
                        var curRelPath = filePath.split('/')[5];    //CH6
                        var absPath = filePath + '/' + tempName;
                        var fileListLen = self.pageData.operateData.pvrFileRepository[curRelPath].fileList.length;
                        var hasAddBefore = false;

                        for (var j = 0; j < fileListLen; j++) {
                            if (self.pageData.operateData.pvrFileRepository[curRelPath].fileList[j].path == absPath) {
                                hasAddBefore = true;
                                break;
                            }
                        }

                        !hasAddBefore && self.pageData.operateData.pvrFileRepository[curRelPath].fileList.push({
                            path: absPath,
                            mark: false
                        });
                        self.pageData.operateData.pvrFileRepository[curRelPath].hasRead = true;   // should be when i==length-1 -> set true;
                    }

                    if (tempIsDir == FILE_TYPE.DIR) {
                        self.pageData.operateData.pvrFileRepository[tempName] = {fileList: [], hasRead: false};
                        DBG_INFO('pvrFileRepository add empty list, name: ' + tempName);
                    }
                }
                goOnGetPvrFlies();
            }

            readUsbTable();
        } else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {    //2
            var UsbCount = event.totalCount;
            DBG_INFO("event.totalCount: " + UsbCount);

            if (UsbCount > 0) {
                pvrIterator.seekToRow(0, TableIterator.SEEK_SET);
                pvrIterator.readNextRows(UsbCount);
            } else {
                if (filePath.split('/').length > 5) {
                    DBG_INFO("find 0 files, set hasRead true");
                    var curRelPath = filePath.split('/')[5];    //CH6
                    self.pageData.operateData.pvrFileRepository[curRelPath].hasRead = true;   // should be when i==length-1 -> set true;
                } else {
                    DBG_INFO('totalCount = 0, do nothing');
                }
            }
            goOnGetPvrFlies();
        } else if (event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {    //3
            DBG_INFO('seek to row index: ' + event.result);
            // no use ?
            // pvrIterator.readNextRows(HiFileBrowser.table_read_once);
        } else {
            DBG_INFO("other Type: " + event.type);
        }
    };


    function goOnGetPvrFlies() {
        DBG_INFO('goOnGetPvrFlies()');
        try {
            var goOnRequest = false;
            $.each(self.pageData.operateData.pvrFileRepository, function (val, key) {
                if (key.hasRead == false) {
                    //todo chaxun
                    goOnRequest = true;
                    dialogPVRFileManager.requestDataFromUsb("pvr/" + val);
                    return false;
                }
            });

            if (goOnRequest == false) {
                DBG_INFO('pvrFileRepository: ' + JSON.stringify(self.pageData.operateData.pvrFileRepository));


                //pvrFileRepository = {
                //    "CH12": {
                //        "fileList": [
                //            {
                //                "path": "/mnt/usb/sda1/pvr/CH120202_170009.pvr",
                //                "mark": false
                //            },
                //            {
                //                "path": "/mnt/usb/sda1/pvr/CH120202_170024.pvr",
                //                "mark": false
                //            }
                //        ],
                //        "hasRead": true
                //    },
                //    "CH6": {
                //        "fileList": [
                //            {
                //                "path": "/mnt/usb/sda1/pvr/CH60701_110249.pvr",
                //                "mark": false
                //            }
                //        ],
                //        "hasRead": true
                //    }
                //};


                hiWebOsFrame[self.id].rewrite();
                hiWebOsFrame[self.id].hiFocus();
                dialogPVRFileManager.refreshScrollBar();
            } else {
                DBG_INFO('goOnRequest, do not rewrite');
            }


        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function ClearPVRPageData() {
        try {
            dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data = [];
            dialogPVRFileManager.operateData.pvrFileRepository = {};
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    self.ListItemEnterHandler = function () {
        try {
            var Cmp = this;
            var curIndex = Cmp.SelectedIndex;
            var curStatus = dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data[curIndex].pvr_file_manager_cmp_item_status.Data;
            dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data[curIndex].pvr_file_manager_cmp_item_status.Data = !curStatus;
            DBG_INFO('curIndex: ' + curIndex + ', curStatus: ' + curStatus);

            var img = !curStatus ? "img/channellist/mark.png" : "img/channellist/nomark.png";
            $('#pvr_file_manager_cmp_pvr_file_manager_cmp_item_status_sys' + curIndex + ' > img').attr('src', img);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.ListItemAftUpHandler = function () {
        try {
            DBG_INFO("curIdx: " + dialogPVRFileManager.pageData.pvr_file_manager_cmp.SelectedIndex);
            var beginIdx = hiWebOsFrame[self.id].getCaE("pvr_file_manager_cmp").BeginIdx;

            if (beginIdx == UNDEFINED_DEFSTR) {
                DBG_ERROR("beginIdx Err!!");
            } else {
                scrollMoveTo(beginIdx);
            }

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.keyRedHandler = function () {
        try {
            DBG_INFO('keyRedHandler');

            var fileDelList = [];
            dialogPVRFileManager.pageData.operateData.fileDeleteSignVec = [];
            $.each(dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data, function (key, val) {
                if (val.pvr_file_manager_cmp_item_status.Data == true) {
                    //先统一下， 好记录变量
                    fileDelList.push(val.pvr_file_manager_cmp_item_abs_path);
                    dialogPVRFileManager.pageData.operateData.fileDeleteSignVec.push({result: self.RET_ENUM.UNKNOWN});
                }
                //        pvr_file_manager_cmp_item: {Data: fileName},
                //        pvr_file_manager_cmp_item_status: {Data: status},
                //        pvr_file_manager_cmp_item_abs_path: val.fileList[i].path
                //    });
            });

            if(fileDelList.length == 0){
                DBG_INFO('fileDelList.length == 0, return;');
                return;
            }


            hiWebOsFrame.createPage('dialog_pvr_file_manager_dialog', null, hiWebOsFrame[self.id], null, function (dialog_pvr_file_manager_dialog) {
                hiWebOsFrame.dialog_pvr_file_manager_dialog = dialog_pvr_file_manager_dialog;
                dialogPVRFileManagerDialog.setPageSign(dialogPVRFileManagerDialog.pageData.operateData.CONTENT_TEXT_ENUM.DEL_CONFIRM);
                dialog_pvr_file_manager_dialog.open();
                dialog_pvr_file_manager_dialog.rewriteDataOnly();
                dialog_pvr_file_manager_dialog.hiFocus();
            });

            return;
            // todo  function move to pvr file manager dialog

            //var fileDelList = [];
            //$.each(dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data, function (key, val) {
            //    if (val.pvr_file_manager_cmp_item_status.Data == true) {
            //        //先统一下， 好记录变量
            //        fileDelList.push(val.pvr_file_manager_cmp_item_abs_path);
            //        dialogPVRFileManager.pageData.operateData.fileDeleteSignVec.push({result: self.RET_ENUM.UNKNOWN});
            //    }
            //    //        pvr_file_manager_cmp_item: {Data: fileName},
            //    //        pvr_file_manager_cmp_item_status: {Data: status},
            //    //        pvr_file_manager_cmp_item_abs_path: val.fileList[i].path
            //    //    });
            //});
            //model.usb.deletePVRHandler = self.PVRFileDeleteHandlerCallBack;
            //
            //for (var i = 0; i < fileDelList.length; i++) {
            //    DBG_INFO('delete pvr file' + fileDelList[i]);
            //    model.usb.deletePVR(fileDelList[i]);
            //}

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.ListItemAftDownHandler = function () {
        try {
            DBG_INFO("curIdx: " + dialogPVRFileManager.pageData.pvr_file_manager_cmp.SelectedIndex);
            var beginIdx = hiWebOsFrame[self.id].getCaE("pvr_file_manager_cmp").BeginIdx;

            if (beginIdx == UNDEFINED_DEFSTR) {
                DBG_ERROR("beginIdx Err!!");
            } else {
                scrollMoveTo(beginIdx);
            }

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.dialogPVRFileManagerEscHandler = function () {
        try {
            DBG_INFO('self.dialogPVRFileManagerEscHandler, close self and openLiveTVModule');
            hiWebOsFrame[self.id].close();
            hiWebOsFrame[self.id].destroy();
            openLiveTVModule();
            //hiWebOsFrame[self.id].origin.open();
            //hiWebOsFrame[self.id].origin.hiFocus();
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

    };

    self.PVRFileDeleteHandlerCallBack = function (actionId, result) {
        try {
            DBG_INFO('actionId: ' + actionId + ', result: ' + result);
            //1 success 0 fail
            var isResultAllReturn = false;
            for (var i = 0; i < dialogPVRFileManager.pageData.operateData.fileDeleteSignVec.length; i++) {
                if (i == dialogPVRFileManager.pageData.operateData.fileDeleteSignVec.length - 1) {
                    isResultAllReturn = true;
                    DBG_INFO('isResultAllReturn: ' + isResultAllReturn);
                }
                if (dialogPVRFileManager.pageData.operateData.fileDeleteSignVec[i].result == self.RET_ENUM.UNKNOWN) {
                    dialogPVRFileManager.pageData.operateData.fileDeleteSignVec[i].result = result == 1 ? self.RET_ENUM.SUCCESS : self.RET_ENUM.FAILURE;
                    break;
                }
            }

            if (true == isResultAllReturn) {
                ClearPVRPageData();
                self.requestDataFromUsb();
                hiWebOsFrame[dialogPVRFileManagerDialog.id].close();
                hiWebOsFrame[dialogPVRFileManagerDialog.id].destroy();
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    };

    self.refreshScrollBar = refreshScrollBar;

    function refreshScrollBar() {
        try {
            DBG_INFO("RefreshScrollBar");
            if (dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data.length <= 6) {
                $("#pvr_file_manager_scroll_container").css("visibility", "hidden");
                opData.scrollHeight = 570;
                opData.scrollStep = 0;
                DBG_INFO("scrollHeight: " + opData.scrollHeight + ", scrollStep: " + opData.scrollStep);
            } else {
                $("#pvr_file_manager_scroll_container").css("visibility", "visible");

                var listCnt = dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data.length;
                opData.scrollHeight = 6 / listCnt * 540;
                opData.scrollStep = 540 / listCnt;

                DBG_INFO("scrollHeight: " + opData.scrollHeight + ", scrollStep:" + opData.scrollStep);
                $("#pvr_file_manager_scroll_bar").css("height", opData.scrollHeight + "px");
                var beginIdx = hiWebOsFrame[self.id].getCaE('pvr_file_manager_cmp').beginIndex;
                !beginIdx && (beginIdx = 0);
                scrollMoveTo(beginIdx);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function scrollMoveTo(beginIdx) {
        try {
            DBG_INFO("beginIdx: " + beginIdx);
            var scrollMarginTop = beginIdx * opData.scrollStep;
            DBG_INFO("scrollMarginTop:" + scrollMarginTop);
            $("#pvr_file_manager_scroll_bar").css("margin-top", scrollMarginTop + "px");

        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function getJsonLength(jsonData) {
        var jsonLength = 0;
        for (var item in jsonData) {
            jsonLength++;
        }
        return jsonLength;
    }


}
var dialogPVRFileManager = new DialogPVRFileManager();

