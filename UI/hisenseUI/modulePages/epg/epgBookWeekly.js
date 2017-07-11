function get_epg_book_weekly_page_pageData(opts) {
    var caeData = {
        Ul: [{
            id: "book_weekly_mode",
            ori: {
                span: ["item_name"],
                img: ["item_image"]
            }
        }]
    };
    opts.CaE = generateCaE(caeData);
    opts.CaE[0].handler = {
        befEnterHandler: epgBkWeekly.keyEnterHandler
    }
    return epgBkWeekly.pageData;
}

function epgBookWeekly() {
    var self = this;
    self.id = "epg_book_weekly_page";

    var oprtData = {
        UTCDay: 0
    };

    self.onOpen = function() {

    }
    self.onFocus = function() {

    }
    self.onClose = function() {
        oprtData.UTCDay = 0;
        oprtData.aftSetWeekly = null;
    }
    self.initOperateData = function(d, callback) {
        oprtData.UTCDay = parseInt(d);
        if(oprtData.UTCDay > 6) oprtData.UTCDay = 0;
        oprtData.aftSetWeekly = callback;
        hiWebOsFrame[self.id].rewriteDataOnly();
        return true;
    }

    self.keyEnterHandler = function() {
        try {
            oprtData.UTCDay = this.SelectedIndex;
            oprtData.aftSetWeekly(oprtData.UTCDay);
            hiWebOsFrame[self.id].close();
            hiWebOsFrame[self.id].origin.hiFocus();
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    function rewritePageData(pageData) {
        pageData.book_weekly_mode.SelectedIndex = oprtData.UTCDay;
        pageData.book_weekly_mode.Data = getWeeklyItems();
    }

    function getWeeklyItems(){
        var items = [],
            itemArr = [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ];

        for (var i = 0; i < 7; i++) {
            items.push({
                item_image: {Data: i == oprtData.UTCDay ? "img/selectedBall.png" : "img/unselectedBall.png"},
                item_name: {Data: itemArr[i]}
            });
        }
        return items;
    }

    self.pageData = {
        book_weekly_mode: {Data: getWeeklyItems()},
        langData: {
            "Monday": ["星期一"],
            "Tuesday": ["星期二"],
            "Wednesday": ["星期三"],
            "Thursday": ["星期四"],
            "Friday": ["星期五"],
            "Saturday": ["星期六"],
            "Sunday": ["星期日"]
        },
        rewrite: rewritePageData
    }
    self.pageData.operateData = oprtData;

}

var epgBkWeekly = new epgBookWeekly();
