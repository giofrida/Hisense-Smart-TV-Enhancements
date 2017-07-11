/**
 *
 *  testonly.js only loaded while tv == false;
 */

var snd = new SndTest();

snd.tempAutoTest();

snd.noneblank();

function SndTest() {
    try {
        //$('#hiweb').css('transform', 'scale(0.71,0.71)');

        var self = this;
        self.test = test;
        self.tempAutoTest = tempAutoTest;
        self.languageTest = languageTest;
        self.createPage = createPage;
        self.noneblank = noneblank;
        self.setLan = setLan;
        self.setScale = setScale;
        self.doTVScale = doTVScale;
        self.listLan = listLanguage;
        self.closeAll = closeAll;
        self.arcChange = arcChange;
        self.printLan = printLanVal;
        self.rgb2hex = rgb2hex;

        self.page = function () {
            return hiWebOsFrame.getCurrentPage();
        };

        // rm /tmp/testghl; echo test1 >> /tmp/testghl

        var lanVec = ['chi', 'eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'tur', 'ara', 'rus', 'vie', 'tha', 'bur', 'uzb', 'hin', 'ukr', 'mal', 'hbr', 'cze', 'slk', 'pol', 'hun', 'bul', 'per', 'ind'];
        var lanIdx = 0;

        self.lanTest = function () {
            hiWebOsFrame.setLanguage(lanVec[lanIdx]);
            livetvmain.showEnergyWarning();
            lanIdx += 1;
        };
        function test() {
            var listLan = listLanguage();
            for(var i=0; i<listLan.length; i++){
                printLanVal(listLan[i], "Highlight your favorite programs with exclusive color.");
                printLanVal(listLan[i], "Review CAM boot menu");
                printLanVal(listLan[i], "Set CI card PIN");
                printLanVal(listLan[i], "Quick channel scan with CAM.");
            }

            return;
            hiWebOsFrame.createPage('setting_chnl_ci', null, null, null, function (SettingChnlCIPage) {
                hiWebOsFrame.SettingChnlCIPage = SettingChnlCIPage;
                SettingChnlCIPage.open();
                SettingChnlCIPage.rewrite();
                SettingChnlCIPage.hiFocus();
            });
        }

        var tempAutoTestTimer = null;

        var autoTestLog = true;

        function tempAutoTest() {
            if (tv == false) return;
            try {
                // rm /tmp/testghl; echo test1 >> /tmp/testghl
                var IntervalTimer = 10000;
                var testfile = 'testghl';
                tempAutoTestTimer = setInterval(function () {
                    var str = Hisense.File.read(testfile, 0);
                    autoTestLog && DBG_INFO('Hisense.File.read(' + testfile + ', 0)');
                    str = str.replace(" ", "").trim();
                    AutoTestCase(str);
                }, IntervalTimer)

            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }

        function AutoTestCase(val) {
            try {
                autoTestLog && DBG_INFO('AutoTestCase: ' + val);
                switch (val) {
                    case "test":
                        autoTestLog = !autoTestLog;
                        break;
                    case "test0":
                        if (null == tempAutoTestTimer) {
                            tempAutoTest();
                            break;
                        }
                        clearInterval(tempAutoTestTimer);
                        tempAutoTestTimer = null;
                        break;
                    case "test1":
                        PVRRecorderMediumFreespaceChaged(1);
                        //hiWebOsFrame.createPage('dialog_pvr_file_manager', null, null, null, function (dialog_pvr_file_manager) {
                        //    hiWebOsFrame.dialog_pvr_file_manager = dialog_pvr_file_manager;
                        //    dialog_pvr_file_manager.open();
                        //    dialog_pvr_file_manager.hiFocus();
                        //    dialogPVRFileManager.requestDataFromUsb();
                        //    dialogPVRFileManager.refreshScrollBar();
                        //});
                        break;
                    case "test2":
                        PVRRecorderMediumFreespaceChaged(2);
                        //CreateSndHelpInfoPage('��³����', gelujiya);

                        //onHeadphoneInsertTvMuteChaged(0);
                        //ginga.onGingaVstrApplistChaged([randomString(4), randomString(12), 'avail']);

//                onCIVStrMenuChaged([]);

                        break;
                    case "test3":

                        //ginga.onGingaVstrApplistChaged([tempId, randomString(12), 'uninit']);

//                openLiveTVSubPage(LiveTVModule.PASSWORD_DIALOG);
                        break;
                    case "test4":

                        break;
                    case "test5":

                        break;
                    default :
                        break;
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }

        function addmao(vec) {
            for (var i = 0; i < vec.length; i++) {
                vec[i] = vec[i] + ":";
            }
            console.log(vec);
        }

        function languageTest(langOldJson, langNewJson, lanIdx) {
            try {
                $.each(langOldJson, function (key, val) {
                    if (false == (key in langNewJson)) {
                        DBG_INFO('KEY:[' + key + '] NOT EXIST');
                    }
                });
                if(typeof lanIdx != UNDEFINED_DEFSTR){
                    $.each(langOldJson, function (key, val) {
                        var idx = lanIdx;
                        if (key in langNewJson && langOldJson[key][idx] != langNewJson[key][idx]) {
                            DBG_INFO('KEY:[' + key + '] CHANGE, old:' + langOldJson[key][idx] + "%%%%%new: " + langNewJson[key][idx]);
                        }
                    })
                }

            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }

        function createPage(pageId, pageObjStr) {
            try {
                var curPage = hiWebOsFrame.getCurrentPage();
                hiWebOsFrame.createPage(pageId, null, curPage, null, function (pageObj) {
                    hiWebOsFrame[pageId] = pageObj;
                    if (typeof pageObjStr != UNDEFINED_DEFSTR) {
                        hiWebOsFrame[pageObjStr] = pageObj;
                    }
                    pageObj.open();
                    pageObj.rewriteDataOnly();
                    pageObj.hiFocus();
                });
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }


        function randomString(len) {
            try {
                len = len % 32;
                var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
                var maxPos = chars.length;
                var pwd = '';
                for (var i = 0; i < len; i++) {
                    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }

        function noneblank() {
            try {
                setTimeout(function () {
                    $("#chl_volumePage").css("display", "none");
                    $("#chl_blankPage").css("display", "none");
                    $("#setting_subtitle_list_page").css("display", "none");
                    $("#livetv_volume").css("display", "none");
                    CreateSndHelpInfoPage('', '', false);

                }, 2000);
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }


        function languagechange() {
            hiWebOsFrame.setLanguage(lanVec[lanIdx++]);
            hiWebOsFrame.getCurrentPage().rewriteDataOnly();

        }

        var pageIdVec = [
            "tshiftProgressPage_id",
            "tshiftMediaDialog",
            "tShiftMsg_id",
            "pvrOrtShiftDialogPage_id",
            "pvrtshift_pvr_page",
            "pvrFinishDialog",
            "standbyRecordDialog",
            "pvrTshiftShowDialog",
            "pvrStopToSwitchDialog",
            "newRecordTipDialog",
            "pvrHardDiskCheck",
            "pvrHDCheckRetryDialog",
            "pvrHDList",
            "beginRecordDialog",
            "pvrHDSpeedCheckResult",
            "pvrRecordTip"
        ];
        var pageIdx = 0;
        self.nextPage = function () {
            hiWebOsFrame.createPage(pageIdVec[pageIdx], null, null, null, function (pageObj) {
                hiWebOsFrame[pageIdVec[pageIdx]] = pageObj;
                pageObj.open();
                pageObj.rewriteDataOnly();
                pageObj.hiFocus();
            });
        };


        self.testFunc = function (callback) {
            callback.call(this, 'testFunc');
        };


        function nihao() {

            var aa = {k: 1, k2: 2}
            $.each(aa, function (val, key) {
                console.log(key);
                if (key == 1) {
                    return true;
                }
            });
            console.log('hao');

        }

        function setLan(lan) {
            hiWebOsFrame.setLanguage(lan);
            self.page().rewriteDataOnly();
        }

        function setScale(scale) {
            $('#hiweb').css('transform', 'scale(' + scale + ',' + scale + ')');
        }

        function doTVScale(val) {
            try {
                if (0 == val) {
                }
                else if (1 == val) {
                    $('body').css('transform', 'scale(0.7115)');
                    $('body').css('transform-origin', 'bottom right');
                } else if (2 == val) {
                    $('body').css('transform', 'scale(0.7115)');
                    $('body').css('transform-origin', 'top left');
                } else if (3 == val) {
                    $('body').css('transform', 'scale(0.7115)');
                    $('body').css('transform-origin', 'bottom right');
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }
        }

        function listLanguage() {
            var lanList = ['chi', 'eng', 'ger', 'ita', 'por', 'spa', 'fre', 'nor', 'swe', 'dan', 'fin', 'tur', 'ara', 'rus', 'vie', 'tha', 'bur', 'uzb', 'hin', 'ukr', 'mal', 'hbr', 'cze', 'slk', 'pol', 'hun', 'bul', 'per', 'ind'];
            return lanList;
            DBG_INFO(lanList);
        }

        function closeAll(){
            closePagesOrModuleByPage(snd.page());
        }

        function arcChange(val){
            if(typeof val == UNDEFINED_DEFSTR){
                var val = 1 - ARCDeviceWorkingState;
            }
            ARCDeviceWorkingState = val;
            onARCDeviceWorkingStateChanged(val);
        }


        function printLanVal(lan, lanKey) {
            var langPackages = JSON.parse(readHTMLString('UI/hisenseUI/lang/' + lan + '.js'));

            //DBG_INFO('[' + lanKey + ']: ' + lan + '[' + langPackages[lanKey] + ']');
            DBG_INFO( lan + '[' + langPackages[lanKey] + ']');
        }

        function rgb2hex(val) {
            if (val.indexOf("#") > -1) {
                val = val.substr(val.indexOf("#") + 1).trim();
            }
            var hex0 = eval('0x' + val.substr(0, 2));
            var hex1 = eval('0x' + val.substr(2, 2));
            var hex2 = eval('0x' + val.substr(4));
            var rgbStr = 'rgba(' + hex0 + ', ' + hex1 + ', ' + hex2 + ')';
            DBG_INFO(rgbStr);
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function sndflip() {
    try {
        flipHTML();
        hiWebOsFrame.getCurrentPage().rewriteDataOnly();
        hiWebOsFrame.getCurrentPage().hiFocus();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

