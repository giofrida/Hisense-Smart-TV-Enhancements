/**
 * Created by jiangbo1 on 2015/3/14.
 */

function getSearchDialogPageData(opts) {

    var caeData = {
        img: ["serach_tip_img"],
        span: [
            "search_tip_line_1", "search_tip_line_2",
            "search_btn_left", "search_btn_right"
        ]
    };
    opts.CaE = generateCaE(caeData);
    opts.CaE[3].nav = {rightTo: "search_btn_right"};
    opts.CaE[4].nav = {leftTo: "search_btn_left"};

    opts.CaE[3].handler = {
        befEnterHandler: srchDialog.startToSearch
    };
    opts.CaE[4].handler = {
        befEnterHandler: srchDialog.startInput
    }
    opts.CaE[4].classes = opts.CaE[3].classes = {focus: "searchDialogBtnFocus"};


    return srchDialog.pageData;
}

function SearchDialog() {
    var self = this;
    self.id = LiveTVModule.SEARCH_DIALOG;

    self.pageData = {
        serach_tip_img: {Data: "img/common/alert.png"},
        search_tip_line_1: {Data: ""},
        search_tip_line_2: {Data: "No channel list is saved. Please scan channels"},
        search_btn_left: {Data: "Begin scanning"},
        search_btn_right: {Data: "Input"},
        langData: {
            "No channel list is saved. Please scan channels": [],
            "Begin scanning": [],
            "Input": []
        },
        rewrite: rewritePageData
    }

    var oprtData = {};

    self.operateData = oprtData;

    function rewritePageData(pageData) {

    }

    self.onOpenSearchDialog = function() {
        hiWebOsFrame[self.id].rewriteDataOnly();
        hiWebOsFrame[self.id].hiFocus("search_btn_left");//MT5657B-K321: K321-13148
    };
    self.onDestroySearchDialog = function() {
        hiWebOsFrame[self.id] = null;
    };
    self.backToLiveTV = function() {
        hiWebOsFrame[self.id].destroy();
        openLiveTVModule([Msg.SEARCH, 0]);
    };
    self.startInput = function() {
        if ("VIDAALite" == g_launcherBrand) {
            oneKeyOpenVIDAALauncherInput();
        }
        else {
            hiWebOsFrame.createPage('setting_pic_Source_page', null, null, null, function(setting_source_page) {
                hiWebOsFrame.setting_source_page = setting_source_page;
                if (!checkAndCloseIfAppOn(setting_source_page)) {
                    closeDOthersModule("input");
                    if (hiWebOsFrame.getCurrentPageId() == "setting_pic_SourceLock_page") {
                        hiWebOsFrame.setting_sourceLock_page.close();
                        hiWebOsFrame.setting_sourceLock_page.destroy();
                        clearInterval(inputInterval);
                    }
                    setting_source_page.open();
                    setting_source_page.hiFocus();
                } else {
                    setting_source_page.origin = hiWebOsFrame.blankPage;
                }
            });
        }
    };
    self.startToSearch = function() {

        if((1 == model.hotel.getHotelMode()) && (1 == model.hotel.getSubmenuLock() ||
            1 == model.hotel.getSearchLock())) {
            showMsg("", "This feature is currently unavailable!");
        }
        else {
            hiWebOsFrame[self.id].destroy();
            if("EU" == hiWebOsFrame.getCurrentArea()) {
                LauncherquickopenSetting(2, 0, hiWebOsFrame.blankPage);
            }
            else {
                startSearchChannelFromLiveTv();
            }
        }
    }
}
var srchDialog = new SearchDialog();
