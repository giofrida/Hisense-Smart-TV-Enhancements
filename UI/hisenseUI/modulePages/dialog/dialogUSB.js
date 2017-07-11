/**
 * Created by BOB.J on 2014/11/24.
 */

function getDialogUSBData(opts) {
    opts.CaE = [
        {
            id: 'dialog_usb_title',
            CaEType: 'span'
        },
        {
            id: 'dialog_usb_media_list',
            CaEType: 'NavigationBar',
            handler: {
                befEnterHandler: dlgUSB.enterMedia,
                befLeftHandler: dlgUSB.setMediaMarquee.bind(this, VK_LEFT),
                befRightHandler: dlgUSB.setMediaMarquee.bind(this, VK_RIGHT),
                befDownHandler: dlgUSB.setMediaMarquee.bind(this, VK_DOWN)
            },
            onFocusFun: dlgUSB.setMediaMarquee.bind(this, VK_ENTER),
            nav: {
                downTo: "dialog_usb_cancel"
            },
            oriCaE: [
                {
                    id: 'dialog_uml_img',
                    CaEType: 'img'
                },
                {
                    id: 'dialog_uml_name',
                    CaEType: 'span'
                }
            ],
            NavigationBarConfig: {
                NavigationBarDataItem: [
                    'dialog_uml_img',
                    'dialog_uml_name'
                ]
            }
        },
        {
            id: "dialog_usb_cancel",
            CaEType: 'span',
            handler: {
                befEnterHandler: dlgUSB.closeUSBDialog
            },
            nav: {
                upTo: "dialog_usb_media_list"
            }
        }
    ]
    return dlgUSB.pageData;
}
function dialogUSB() {
    var self = this;
    self.id = "dialog_usb";

    var imgList = {
        photo: "img/common/photo.png",
        video: "img/common/video.png",
        music: "img/common/music.png",
        all: "img/common/all.png"
    }

    var mediaURL = [
        getMediaURL(0),
        getMediaURL(1),
        getMediaURL(2),
        getMediaURL(3)
    ];

    var oprtData = {};

    self.pageData = {
        dialog_usb_title: {Data: 'Media'},
        dialog_usb_media_list: {
            Data: [
                {
                    dialog_uml_img: {Data: imgList.all},
                    dialog_uml_name: {Data: "All"}
                },
                {
                    dialog_uml_img: {Data: imgList.photo},
                    dialog_uml_name: {Data: "Picture"}
                },
                {
                    dialog_uml_img: {Data: imgList.video},
                    dialog_uml_name: {Data: "Video"}
                },
                {
                    dialog_uml_img: {Data: imgList.music},
                    dialog_uml_name: {Data: "Music"}
                }
            ],
            SelectedIndex: 0
        },
        dialog_usb_cancel: {Data: 'Cancel'},
        langData: {
            Cancel: [],
            Media: [],
            Picture: [],
            Video: [],
            Music: [],
            All: []
        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprtData;


    function rewritePageData(pageData) {
        pageData.dialog_usb_media_list.SelectedIndex = 0;
    }

    self.openUSBDialog = function() {
        hiWebOsFrame[self.id].rewriteDataOnly();
        hiWebOsFrame[self.id].hiFocus("dialog_usb_media_list");
    }

    self.closeUSBDialog = function() {
        hiWebOsFrame[self.id].close();
        dlgUSB.setMediaMarquee();
        var oriPage = hiWebOsFrame[self.id].origin;
        var oriOriPage = oriPage.origin;

        if("launcher" == oriPage.module
            || (!!oriOriPage && "launcher" == oriOriPage.module)) {
            hiWebOsFrame.myLauncher.open();
            hiWebOsFrame.myLauncher.hiFocus();
        }
        else if("allapps" == oriPage.module
            || (!!oriOriPage && "allapps" == oriOriPage.module)) {
            hiWebOsFrame["launcher_allapps"].open();
            // hiWebOsFrame["launcher_allapps"].hiFocus();
            launcherAApps.focusAllApp();
        }
        else if("accuweather" == oriPage.module) {
            hiWebOsFrame["accuweather_main"].open();
            hiWebOsFrame["accuweather_main"].hiFocus();
        }
        else if("input" == oriPage.module || "hotel" == oriPage.module || "mixBar" == oriPage.module|| "speech" == oriPage.module||"voice" == oriPage.module) {
            hiWebOsFrame.blankPage.open();
            hiWebOsFrame.blankPage.hiFocus();
        }
        else {
            oriPage.open();
            oriPage.hiFocus();
        }
    }

    self.enterMedia = function() {
        //if("launcher" == hiWebOsFrame[self.id].origin){
        //    hiWebOsFrame.myLauncher.close();
        //}
        if(isMainArchiveRecording() || isTimeShiftStatus()) {
            debugPrint("usb Dialog to media!!!!");
            dlgUSB.closeUSBDialog();
            PVROrTShiftDialog(hiWebOsFrame[LiveTVModule.MAIN],
                "Sure to exit from PVR or T.Shift?", okCommandToMedia.bind(this, mediaURL[this.SelectedIndex]), pvrTshiftCancelCommand);
            return;
        }
        sendCommndToTV(CmdURLType.START_BROWSER, mediaURL[this.SelectedIndex], false);
    }

    self.setMediaMarquee = function(keyCode) {
        var itemId = "dialog_usb_media_list";
        var idx = hiWebOsFrame[self.id].getCaE(itemId).SelectedIndex;
        if(keyCode == VK_LEFT) {
            idx > 0 && restoreMarqueeByLiId(itemId, itemId, idx, Math.max(0, idx - 1), 8);
        }
        else if(keyCode == VK_RIGHT) {
            idx < 2 && restoreMarqueeByLiId(itemId, itemId, idx, Math.min(2, idx + 1), 8);
        }
        else if(keyCode == VK_ENTER) {
            restoreMarqueeByLiId(null, itemId, null, idx, 8);
        }
        else {
            restoreMarqueeByLiId(itemId, null, idx, null, 8);
        }
    }

}

function okCommandToMedia(url) {

    if(!!hiWebOsFrame["dialog_common"]) {
        hiWebOsFrame["dialog_common"].destroy();
    }
    hiWebOsFrame.startLoading(5, "stoppvr");
    if(isMainArchiveRecording()) {
        setAfterStopPvrWantDo(mediaKeyStopPvrOrTShiftCallBack.bind(this, 0, url));
        setTimeout(function() {
            DBG_ALWAYS("model.pvr.StopRecord()");
            model.pvr.StopRecord();
        }, 100);


    }
    if(isTimeShiftStatus()) {
        setAfterStopTShiftWantDo(mediaKeyStopPvrOrTShiftCallBack.bind(this, 1, url));
        setTimeout(function() {
            model.timeshift.Stop();
        }, 100);

    }

}

function mediaKeyStopPvrOrTShiftCallBack(stopWho, url) {
    if(stopWho == 0) {
        g_AfterStopPvrWantDo = null;
    }
    else if(stopWho == 1) {
        g_AfterStopTShiftWantDo = null;
    }
    hiWebOsFrame.endLoading("stoppvr");
    sendCommndToTV(CmdURLType.START_BROWSER, url, false);
}

var dlgUSB = new dialogUSB();

