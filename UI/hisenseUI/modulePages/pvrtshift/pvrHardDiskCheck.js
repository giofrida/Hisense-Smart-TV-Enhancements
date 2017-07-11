/**
 * Created by Administrator on 2015-3-8.
 */
function getPvrHardDiskcheckPageData(page) {
    DBG_INFO(" begin get page data!");
    page.CaE = [
        {
            "id": "pvrtshift_diskcheck_title",
            "classes": {
                "normal": "setting_sys_lang2_title", "focus": "setting_sys_lang2_title"
            },
            "description": "",
            "CaEType": "span",
            "handler": {
                "aftEscHandler": "pvrHardDiskCheckEsc"
            }
        },
        {
            "id": "pvrtshift_diskcheck_img1",
            "description": "",
            "CaEType": "img"
        },
        {
            "id": "pvrtshift_diskcheck_text",
            "description": "",
            "CaEType": "div"
        }
    ];
    DBG_INFO("end get page data!");
    return pvrHardDiskCheckPageData;
}

var pvrHardDiskCheckPageData = {
    "pvrtshift_diskcheck_title": {Data: "HDD detecting"},
    "pvrtshift_diskcheck_img1": {Data: "img/loading.png"},
    "pvrtshift_diskcheck_text": {Data: "Detecting external HDD"},
    "operateData": {
        "partitionNumber": 0,
        "textList": [
            {
                "title": "HDD detecting",
                "content": "Detecting external HDD"
            }
        ],
        "curTextIndex": 0
    },
    "langData": {
        "HDD detecting": [],
        "Detecting external HDD": []
    },
    rewrite: function (pageData) {
        pageData.pvrtshift_diskcheck_title.Data = pageData.operateData.textList[pageData.operateData.curTextIndex].title;
        pageData.pvrtshift_diskcheck_text.Data = pageData.operateData.textList[pageData.operateData.curTextIndex].content;
    }
};

function pvrHardDiskCheckEsc() {
    try {
        try {
            clearTimeout(hiWebOsFrame.pvrHardDiskCheck.operateData.searchHDTimer);
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        DBG_INFO("Exit to pvr page!");
        hiWebOsFrame.pvrHardDiskCheck.close();
        pvrHDListPageData.operateData.curtitle = 0;
        pvrHDListPageData.operateData.curstep = 0;
        pvrHDListPageData.operateData.curselectpartition = 0;
        pvrHDListPageData.operateData.curselectmemmory = 0;

        //todo ghl; if epg - > return epg;

        if (!!hiWebOsFrame.epg && hiWebOsFrame.epg.visible) {
            hiWebOsFrame.epg.hiFocus();
            return;
        }

        // add by ghl ∑µªÿ ≤√¥“≥√Ê;
        if (!!hiWebOsFrame.ptDialog) {
            hiWebOsFrame.ptDialog.open();
            hiWebOsFrame.ptDialog.hiFocus();
        } else {
            openLiveTVModule();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function pvrHardDiskcheckOnOpen() {
    try {
        if ('APP_5890_SA' == currentPlatform_config) {

            $("#pvrtshift_diskcheck_img1").css("display", "none")
            $("#opera_4_5_pvrtshift_diskcheck_img1").css("display", "block")
        }
        else {
            $("#pvrtshift_diskcheck_img1").css("display", "block")
            $("#opera_4_5_pvrtshift_diskcheck_img1").css("display", "none")

        }


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function pvrHardDiskcheckOnDestroy() {
    try {
        // hiWebOsFrame.pvrHardDiskCheck.close();
        DBG_INFO("pvr HD check page close!");
        try {
            clearTimeout(hiWebOsFrame.pvrHardDiskCheck.operateData.searchHDTimer);
        }
        catch (ex) {
            DBG_ERROR(ex.message);
        }
        hiWebOsFrame.pvrHardDiskCheck = null;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
