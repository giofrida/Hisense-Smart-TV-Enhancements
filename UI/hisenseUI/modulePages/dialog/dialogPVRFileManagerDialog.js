function getDialogPVRFileManagerDialogData(page) {
    page.CaE = [
        {
            "id": "dialog_pvr_file_manager_dialog_content_text",
            "CaEType": "span"
        },
        {
            "id": "dialog_pvr_file_manager_dialog_btn_0",
            "CaEType": "div",
            "classes": {
                "normal": "dialog_pvr_file_manager_dialog_btn_normal",
                "focus": "dialog_pvr_file_manager_dialog_btn_focus"
            },
            "handler": {
                "aftEnterHandler": "dialogPVRFileManagerDialog.EnterHandler"
                //"aftEscHandler": "SettingPicResetOKEscHandler"
            },
            "nav": {
                "leftTo": "dialog_pvr_file_manager_dialog_btn_1",
                "rightTo": "dialog_pvr_file_manager_dialog_btn_1"
            }
        },
        {
            "id": "dialog_pvr_file_manager_dialog_btn_1",
            "CaEType": "div",
            "classes": {
                "normal": "dialog_pvr_file_manager_dialog_btn_normal",
                "focus": "dialog_pvr_file_manager_dialog_btn_focus"
            },
            "handler": {
                "aftEnterHandler": "dialogPVRFileManagerDialog.EnterHandler"
                //"aftEscHandler": "SettingPicResetOKEscHandler"
            },
            "nav": {
                "leftTo": "dialog_pvr_file_manager_dialog_btn_0",
                "rightTo": "dialog_pvr_file_manager_dialog_btn_0"
            }
        }
    ]

    return dialogPVRFileManagerDialog.pageData;
}

function dialogPVRFileManagerDialogClass() {
    try {

        var self = this;
        self.id = 'dialog_pvr_file_manager_dialog';

        self.pageData = {
            "dialog_pvr_file_manager_dialog_content_text": {Data: "内存空间不足，是否对已录制的文件进行删除？"},
            "dialog_pvr_file_manager_dialog_btn_0": {Data: "OK"},
            "dialog_pvr_file_manager_dialog_btn_1": {Data: "Cancel"},
            operateData: {
                pageSign: null,
                CONTENT_TEXT_ENUM: {
                    DEL_QUERY: 'DeleteFileQuery',
                    DEL_CONFIRM: 'DeleteFileConfirm'
                },

                contentTextCfg: {
                    DeleteFileQuery: "内存空间不足，是否对已录制的文件进行删除？",
                    DeleteFileConfirm: "是否删除已勾选的文件？"
                }
            },
            rewrite: rewritePageData,
            langData: {
                "The current picture settings will revert back to the factory default settings. Do you want to continue?": [""],
                "OK": ["OK", "是"],
                "Cancel": ["Cancel", "取消"]
            }
        };

        function rewritePageData(pageData) {
            var opData = pageData.operateData;
            DBG_INFO('pageSign: ' + opData.pageSign);
            pageData.dialog_pvr_file_manager_dialog_content_text.Data = opData.contentTextCfg[opData.pageSign];
        }


        self.dialogPVRFileManagerDialogOnOpen = function () {
            try {

            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        };

        self.dialogPVRFileManagerDialogOnClose = function () {
            try {

            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        };

        self.dialogPVRFileManagerDialogOnDestroy = function () {
            try {
                hiWebOsFrame[self.id] = null;
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        };

        self.EnterHandler = function () {
            try {
                var opData = dialogPVRFileManagerDialog.pageData.operateData;

                DBG_INFO('opData.pageSign: ' + opData.pageSign);
                switch (opData.pageSign) {
                    case null:
                    case opData.CONTENT_TEXT_ENUM.DEL_QUERY:
                        if ('dialog_pvr_file_manager_dialog_btn_0' == this.id) {
                            //OK Handler
                            DBG_INFO(opData.pageSign + ' OK Handler');
                            self.openPVRFileManger();
                        } else {
                            //Cancel Handler
                            DBG_INFO(opData.pageSign + ' Cancel Handler');
                            self.EscHandler();
                        }
                        break;
                    case opData.CONTENT_TEXT_ENUM.DEL_CONFIRM:
                        if ('dialog_pvr_file_manager_dialog_btn_0' == this.id) {
                            //OK Handler
                            DBG_INFO(opData.pageSign + ' OK Handler');
                            self.deletePVRFile();
                        } else {
                            //Cancel Handler
                            DBG_INFO(opData.pageSign + ' Cancel Handler');
                            hiWebOsFrame[self.id].close();
                            hiWebOsFrame[self.id].origin.open();
                            hiWebOsFrame[self.id].origin.hiFocus();
                            hiWebOsFrame[self.id].destroy();
                        }
                        break;
                    default :
                        DBG_ERROR('opData.pageSign Error');
                        break;

                }


            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        };

        self.EscHandler = function () {
            try {
                var opData = dialogPVRFileManagerDialog.pageData.operateData;

                DBG_INFO('opData.pageSign: ' + opData.pageSign);
                switch (opData.pageSign) {
                    case null:
                    case opData.CONTENT_TEXT_ENUM.DEL_QUERY:
                        //todo return to livetv, do some pvr about?
                        hiWebOsFrame[self.id].close();
                        hiWebOsFrame[self.id].destroy();
                        openLiveTVModule();
                        break;
                    case opData.CONTENT_TEXT_ENUM.DEL_CONFIRM:
                        //todo close pvr file manager and return livetv
                        hiWebOsFrame[self.id].close();
                        hiWebOsFrame[self.id].destroy();
                        hiWebOsFrame[dialogPVRFileManager.id].close();
                        hiWebOsFrame[dialogPVRFileManager.id].destroy();
                        openLiveTVModule();
                        break;
                    default :
                        DBG_ERROR('opData.pageSign Error');
                        break;
                }

            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        };

        self.setPageSign = function (pageSign) {
            try {
                self.pageData.operateData.pageSign = pageSign;
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        };

        self.openPVRFileManger = function () {
            try {
                hiWebOsFrame.createPage('dialog_pvr_file_manager', null, null, null, function (dialog_pvr_file_manager) {
                    hiWebOsFrame.dialog_pvr_file_manager = dialog_pvr_file_manager;
                    dialogPVRFileManager.requestDataFromUsb();
                    dialog_pvr_file_manager.rewrite();
                    dialog_pvr_file_manager.open();
                    dialog_pvr_file_manager.hiFocus();
                    dialogPVRFileManager.refreshScrollBar();
                });
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        };

        self.deletePVRFile = function () {
            try {
                var fileDelList = [];
                dialogPVRFileManager.pageData.operateData.fileDeleteSignVec = [];
                $.each(dialogPVRFileManager.pageData.pvr_file_manager_cmp.Data, function (key, val) {
                    if (val.pvr_file_manager_cmp_item_status.Data == true) {
                        //先统一下， 好记录变量
                        fileDelList.push(val.pvr_file_manager_cmp_item_abs_path);
                        dialogPVRFileManager.pageData.operateData.fileDeleteSignVec.push({result: dialogPVRFileManager.RET_ENUM.UNKNOWN});
                    }
                    //        pvr_file_manager_cmp_item: {Data: fileName},
                    //        pvr_file_manager_cmp_item_status: {Data: status},
                    //        pvr_file_manager_cmp_item_abs_path: val.fileList[i].path
                    //    });
                });
                model.usb.deletePVRHandler = dialogPVRFileManager.PVRFileDeleteHandlerCallBack;

                for (var i = 0; i < fileDelList.length; i++) {
                    DBG_INFO('delete pvr file' + fileDelList[i]);
                    model.usb.deletePVR(fileDelList[i]);
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var dialogPVRFileManagerDialog = new dialogPVRFileManagerDialogClass();


