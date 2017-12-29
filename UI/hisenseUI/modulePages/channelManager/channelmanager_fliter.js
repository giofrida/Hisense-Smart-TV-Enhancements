/**
 * Created on 14-9-28.
 */
function SetChangesSrcSpan(operateData, data) {
    var page = this.page;
    if(opeData.flag){
        operateData.SrcDataSelectedIndex1 = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.SrcDataSelectedIndex1].chl_manager_srcItem_span.Data;
        operateData.chl_manager_fliter_current_src1 = bL_span;
    }else
    {
        operateData.SrcDataSelectedIndex = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.SrcDataSelectedIndex].chl_manager_srcItem_span.Data;
        operateData.chl_manager_fliter_current_src = bL_span;
    }

    debugPrint('SetChangesSrcSpan::::'+bL_span);
    page.rewriteDataOnly();
    tempid=this.page.origin.id;
    chlmanagerfliterpage.doFilterChannels(tempid);
}
function SetChangesHDSpan(operateData, data) {
    var page = this.page;
    if(opeData.flag){
        operateData.HDDataSelectedIndex1 = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;

        if(null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882")){
            var bL_span = data.Data[operateData.HDDataSelectedIndex1].chl_manager_HDItem_span.Data;
        }else{
            var bL_span = data.Data[operateData.HDDataSelectedIndex1].chl_manager_HDItem_span_5657.Data;
        }
        operateData.chl_manager_fliter_current_hd1 = bL_span;
    }else
    {
        operateData.HDDataSelectedIndex = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        if(null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882")){
            var bL_span = data.Data[operateData.HDDataSelectedIndex].chl_manager_HDItem_span.Data;
        }else{
            var bL_span = data.Data[operateData.HDDataSelectedIndex].chl_manager_HDItem_span_5657.Data;
        }

        operateData.chl_manager_fliter_current_hd = bL_span;
    }

    debugPrint('SetChangesHDSpan::::'+bL_span);
    page.rewriteDataOnly();
    tempid=this.page.origin.id;
    chlmanagerfliterpage.doFilterChannels(tempid);
}
function SetChangesLockSpan(operateData, data) {
    var page = this.page;
    if(opeData.flag){
        operateData.LockDataSelectedIndex1 = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.LockDataSelectedIndex1].chl_manager_lockItem_span.Data;
        operateData.chl_manager_fliter_current_lock1 = bL_span;
    }else
    {
        operateData.LockDataSelectedIndex = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.LockDataSelectedIndex].chl_manager_lockItem_span.Data;
        operateData.chl_manager_fliter_current_lock = bL_span;
    }

    debugPrint('SetChangesLockSpan::::'+bL_span);
    page.rewriteDataOnly();
    tempid=this.page.origin.id;
    chlmanagerfliterpage.doFilterChannels(tempid);
}
function SetChangesTypeSpan(operateData, data) {
    var page = this.page;
    if(opeData.flag){
        operateData.TypeDataSelectedIndex1 = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.TypeDataSelectedIndex1].chl_manager_typeItem_span.Data;
        operateData.chl_manager_fliter_current_type1 = bL_span;
    }else{
        operateData.TypeDataSelectedIndex = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.TypeDataSelectedIndex].chl_manager_typeItem_span.Data;
        operateData.chl_manager_fliter_current_type = bL_span;
    }
    debugPrint('SetChangesTypeSpan::::'+bL_span);
    page.rewriteDataOnly();
    tempid=this.page.origin.id;
    chlmanagerfliterpage.doFilterChannels(tempid);
}
function SetChangesSortSpan(operateData, data) {
    var page = this.page;
    if(opeData.flag){
        operateData.SortDataSelectedIndex1 = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.SortDataSelectedIndex1].chl_manager_sortItem_span.Data;
        operateData.chl_manager_fliter_current_sort1 = bL_span;
    }else{
        operateData.SortDataSelectedIndex = this.SelectedIndex;
        data.SelectedIndex = this.SelectedIndex;
        var bL_span = data.Data[operateData.SortDataSelectedIndex].chl_manager_sortItem_span.Data;
        operateData.chl_manager_fliter_current_sort = bL_span;
    }
    debugPrint('SetChangesSortSpan::::'+bL_span);
    page.rewriteDataOnly();
    tempid=this.page.origin.id;
    chlmanagerfliterpage.doFilterChannels(tempid);
}
function exitFliterPage(){
    hiWebOsFrame.channel_manager_fliter.close();
 //   channelmanagertype.setFilterChannels();
     tempid=this.page.origin.id;
    if( tempid=="channel_manager_bg")
    {
        hiWebOsFrame.channel_manager_bg.hiFocus('chl_manager_list_type1');
    }
    else
    {
        debugPrint('opeData.flag::::'+opeData.flag);
        if(opeData.flag)
        {
            hiWebOsFrame.channel_manager_fav_edit.hiFocus('chl_manager_list_type2');
        }
        else
        {
            hiWebOsFrame.channel_manager_fav_edit.hiFocus('chl_manager_list_fav');
        }
    }
//    chlmanagerfliterpage.doFilterChannels(tempid);
}
function getchlmanagerfliterPageData(opts) {
    opts.CaE = [
        {
            "id": "chl_manager_fliter_src",
            "description": "当前的src容器",
            "CaEType": "div"
        },
        {
            "id": "chl_manager_fliter_txt_1",
            "description": "Scramble",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fliter_current_src",
            "description": "当前的Scramble",
            "CaEType": "span"

        },
        {
            "id": "chl_manager_fliter_src_list",
            "description": "当前的Scramble",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "chl_manager_Item_li_normal", "focus": "chl_manager_Item_li_focus", "disable": "",
                "selected": "chl_manager_Item_li_selected", "dataSelected": "chl_manager_Item_li_selected"
            },
            "handler": {
                "aftEnterHandler": "SetChangesSrcSpan", "aftRightHandler": "", "aftEscHandler": "exitFliterPage"
            },
            "nav": { "downTo": "chl_manager_fliter_HD_list", "upTo": "chl_manager_fliter_sort_list"},
            "oriCaE": [
                {
                    "id": "chl_manager_srcItem_span",
                    "description": "代表src模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["chl_manager_srcItem_span"],
                "SelectedIndex": 0,
                "PageSize": 3
            }
        },
        {
            "id": "chl_manager_fliter_hd_1",
            "description": "当前的HD容器",
            "CaEType": "div"
        },
        {
            "id": "chl_manager_fliter_txt_2",
            "description": "HD",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fliter_current_hd",
            "description": "当前的HD",
            "CaEType": "span"

        },
        {
            "id": "chl_manager_fliter_HD_list",
            "description": "当前的HD",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "chl_manager_Item_li_normal", "focus": "chl_manager_Item_li_focus", "disable": "chl_manager_Item_li_disable",
                "selected": "chl_manager_Item_li_selected", "dataSelected": "chl_manager_Item_li_selected"
            },
            "handler": {
                "aftEnterHandler": "SetChangesHDSpan", "aftRightHandler": "", "aftEscHandler": "exitFliterPage"
            },
            "nav": { "downTo": "chl_manager_fliter_HD_list_5657", "upTo": "chl_manager_fliter_src_list"},
            "oriCaE": [
                {
                    "id": "chl_manager_HDItem_span",
                    "description": "代表src模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["chl_manager_HDItem_span"],
                "SelectedIndex": 0,
                "PageSize": 3
            }
        },
        {
            "id": "chl_manager_fliter_HD_list_5657",
            "description": "当前的HD",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "chl_manager_Item_li_normal", "focus": "chl_manager_Item_li_focus", "disable": "chl_manager_Item_li_disable",
                "selected": "chl_manager_Item_li_selected", "dataSelected": "chl_manager_Item_li_selected"
            },
            "handler": {
                "aftEnterHandler": "SetChangesHDSpan", "aftRightHandler": "", "aftEscHandler": "exitFliterPage"
            },
            "nav": { "downTo": "chl_manager_fliter_lock_list", "upTo": "chl_manager_fliter_HD_list"},
            "oriCaE": [
                {
                    "id": "chl_manager_HDItem_span_5657",
                    "description": "代表src模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["chl_manager_HDItem_span_5657"],
                "SelectedIndex": 0,
                "PageSize": 4
            }
        },
        {
            "id": "chl_manager_fliter_lock_1",
            "description": "当前的lock容器",
            "CaEType": "div"
        },
        {
            "id": "chl_manager_fliter_txt_3",
            "description": "lock",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fliter_current_lock",
            "description": "当前的lock",
            "CaEType": "span"

        },
        {
            "id": "chl_manager_fliter_lock_list",
            "description": "当前的lock",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "chl_manager_Item_li_normal", "focus": "chl_manager_Item_li_focus", "disable": "",
                "selected": "chl_manager_Item_li_selected", "dataSelected": "chl_manager_Item_li_selected"
            },
            "handler": {
                "aftEnterHandler": "SetChangesLockSpan", "aftRightHandler": "", "aftEscHandler": "exitFliterPage"
            },
            "nav": { "downTo": "chl_manager_fliter_type_list", "upTo": "chl_manager_fliter_HD_list_5657"},
            "oriCaE": [
                {
                    "id": "chl_manager_lockItem_span",
                    "description": "代表src模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["chl_manager_clockItem_span"],
                "SelectedIndex": 0,
                "PageSize": 3
            }
        },
        {
            "id": "chl_manager_fliter_type_1",
            "description": "当前的type容器",
            "CaEType": "div"
        },
        {
            "id": "chl_manager_fliter_txt_4",
            "description": "type",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fliter_current_type",
            "description": "当前的type",
            "CaEType": "span"

        },
        {
            "id": "chl_manager_fliter_type_list",
            "description": "当前的type",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "chl_manager_Item_li_normal", "focus": "chl_manager_Item_li_focus", "disable": "",
                "selected": "chl_manager_Item_li_selected", "dataSelected": "chl_manager_Item_li_selected"
            },
            "handler": {
                "aftEnterHandler": "SetChangesTypeSpan", "aftRightHandler": "", "aftEscHandler": "exitFliterPage"
            },
            "nav": { "downTo": "chl_manager_fliter_sort_list", "upTo": "chl_manager_fliter_lock_list"},
            "oriCaE": [
                {
                    "id": "chl_manager_typeItem_span",
                    "description": "代表type模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["chl_manager_typeItem_span"],
                "SelectedIndex": 0,
                "PageSize": 4
            }
        },
        {
            "id": "chl_manager_fliter_sort_1",
            "description": "当前的sort容器",
            "CaEType": "div"
        },
        {
            "id": "chl_manager_fliter_txt_5",
            "description": "sort",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_fliter_current_sort",
            "description": "当前的sort",
            "CaEType": "span"

        },
        {
            "id": "chl_manager_fliter_sort_list",
            "description": "当前的sort",
            "CaEType": "NavigationBar",
            "classes": {
                "normal": "chl_manager_sortItem_li_normal", "focus": "chl_manager_sortItem_li_focus", "disable": "",
                "selected": "chl_manager_sortItem_li_selected", "dataSelected": "chl_manager_sortItem_li_selected"
            },
            "handler": {
                "aftEnterHandler": "SetChangesSortSpan", "aftRightHandler": "", "aftEscHandler": "exitFliterPage"
            },
            "nav": { "downTo": "chl_manager_fliter_src_list", "upTo": "chl_manager_fliter_type_list"},
            "oriCaE": [
                {
                    "id": "chl_manager_sortItem_span",
                    "description": "代表sort模式的span",
                    "CaEType": "span"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": ["chl_manager_sortItem_span"],
                "SelectedIndex": 0,
                "PageSize": 2
            }
        }
    ];


    return chlmanagerfliterpage.pageData;
}

function ChlManagerFliterPage() {
    var self = this;
    var tempid="";
    var typeUid=[];
    self.pageData = {
        "chl_manager_fliter_txt_1": {"Data": "Scrambled"},
        "chl_manager_fliter_current_src": {"Date": "All"},
        "chl_manager_fliter_txt_2": {"Data": "HD"},
        "chl_manager_fliter_current_hd": {"Date": "All"},
        "chl_manager_fliter_txt_3": {"Data": "Child lock"},
        "chl_manager_fliter_current_lock": {"Date": "All"},
        "chl_manager_fliter_txt_4": {"Data": "Content"},
        "chl_manager_fliter_current_type": {"Date": "All"},
        "chl_manager_fliter_txt_5": {"Data": "Sort"},
        "chl_manager_fliter_current_sort": {"Date": "A-Z"},
        chl_manager_fliter_src_list: { Data: [
            {
                "chl_manager_srcItem_span": {Data: "All"}
            },
            {
                "chl_manager_srcItem_span": {Data: "Free"}
            },
            {
                "chl_manager_srcItem_span": {Data: "Scrambled"}
            }
        ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        },
        chl_manager_fliter_HD_list: { Data: [
            {
                "chl_manager_HDItem_span": {Data: "All"}
            },
            {
                "chl_manager_HDItem_span": {Data: "HD"}
            },
            {
                "chl_manager_HDItem_span": {Data: "SD"}
            }
        ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        },
        chl_manager_fliter_HD_list_5657: { Data: [
            {
                "chl_manager_HDItem_span_5657": {Data: "All"}
            },
            {
                "chl_manager_HDItem_span_5657": {Data: "HD"}
            },
            {
                "chl_manager_HDItem_span_5657": {Data: "SD"}
            },
            {
                "chl_manager_HDItem_span_5657": {Data: "UHD"}
            }
        ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        },
        chl_manager_fliter_lock_list: { Data: [
            {
                "chl_manager_lockItem_span": {Data: "All"}
            },
            {
                "chl_manager_lockItem_span": {Data: "Yes"}
            },
            {
                "chl_manager_lockItem_span": {Data: "No"}
            }
        ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        },
        chl_manager_fliter_type_list: { Data: [
            {
                "chl_manager_typeItem_span": {Data: "All"}
            },
            {
                "chl_manager_typeItem_span": {Data: "TV"}
            },
            {
                "chl_manager_typeItem_span": {Data: "Radio"}
            },
            {
                "chl_manager_typeItem_span": {Data: "Data"}
            }
        ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        },
        chl_manager_fliter_sort_list: { Data: [
            {
                "chl_manager_sortItem_span": {Data: "A-Z"}
            },
            {
                "chl_manager_sortItem_span": {Data: "0-9"}
            }
        ],
            "SelectedIndex": 0,
            "DataSelectedIndex": 0
        },
        "operateData": {
            "SrcDataSelectedIndex": 0,
            "HDDataSelectedIndex": 0,
            "LockDataSelectedIndex": 0,
            "TypeDataSelectedIndex": 0,
            "SortDataSelectedIndex": 1,
            "chl_manager_fliter_current_src": "All",
            "chl_manager_fliter_current_hd": "All",
            "chl_manager_fliter_current_lock": "All",
            "chl_manager_fliter_current_type": "All",
            "chl_manager_fliter_current_sort": "0-9",
            "SrcDataSelectedIndex1": 0,
            "HDDataSelectedIndex1": 0,
            "LockDataSelectedIndex1": 0,
            "TypeDataSelectedIndex1": 0,
            "SortDataSelectedIndex1": 1,
            "chl_manager_fliter_current_src1": "All",
            "chl_manager_fliter_current_hd1": "All",
            "chl_manager_fliter_current_lock1": "All",
            "chl_manager_fliter_current_type1": "All",
            "chl_manager_fliter_current_sort1": "0-9",
            "flag":0,
            "typeUidLeft":[],
            "deleteHD":false
        },
        langData: {
            "Encryption": [],
            "Decryption": [],
            "All": [],
            "HD": [],
            "SD": [],
            "Child lock": [],
            "Yes": [],
            "No": [],
            "Content": [],
            "Radio": [],
            "Sort": [],
            "Data":[],
            "Scrambled":[],
            "Free":[]
        },
        rewrite: rewriteFliterPageData
    }

    var filterKey = {
        scream: FILETER.SCREAMALL,
        hd: FILETER.HDALL,
        lock: FILETER.LOCKALL,
        type: FILETER.TYPEALL,
        sort: FILETER.SORTA
    }

    var screamKey = [FILETER.SCREAMALL, FILETER.SCREAMNO,FILETER.SCREAMYES],
        hdKey = [FILETER.HDALL, FILETER.HDYES, FILETER.HDNO,FILETER.UHD],
        lockKey = [FILETER.LOCKALL, FILETER.LOCKYES, FILETER.LOCKNO],
        typeKey = [FILETER.TYPEALL, FILETER.TYPETV, FILETER.TYPERADIO,FILETER.TYPEDATA],
        sortKey = [FILETER.SORTA, FILETER.SORT0];

    function rewriteFliterPageData(pageData) {
        opeData = pageData.operateData;
        if(opeData.deleteHD){
            pageData.chl_manager_fliter_HD_list_5657.disable = true;
            pageData.chl_manager_fliter_HD_list.disable = true;
        }else{
            if(null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882")){
                pageData.chl_manager_fliter_HD_list_5657.disable = true;
            }else{
                pageData.chl_manager_fliter_HD_list.disable = true;
            }
        }

        if(opeData.flag){
            pageData.chl_manager_fliter_src_list.DataSelectedIndex = opeData.SrcDataSelectedIndex1;
            pageData.chl_manager_fliter_HD_list.DataSelectedIndex = opeData.HDDataSelectedIndex1;
            pageData.chl_manager_fliter_HD_list_5657.DataSelectedIndex = opeData.HDDataSelectedIndex1;
            pageData.chl_manager_fliter_lock_list.DataSelectedIndex = opeData.LockDataSelectedIndex1;
            pageData.chl_manager_fliter_type_list.DataSelectedIndex = opeData.TypeDataSelectedIndex1;
            pageData.chl_manager_fliter_sort_list.DataSelectedIndex = opeData.SortDataSelectedIndex1;

            pageData.chl_manager_fliter_src_list.SelectedIndex = opeData.SrcDataSelectedIndex1;
            pageData.chl_manager_fliter_HD_list.SelectedIndex = opeData.HDDataSelectedIndex1;
            pageData.chl_manager_fliter_HD_list_5657.SelectedIndex = opeData.HDDataSelectedIndex1;
            pageData.chl_manager_fliter_lock_list.SelectedIndex = opeData.LockDataSelectedIndex1;
            pageData.chl_manager_fliter_type_list.SelectedIndex = opeData.TypeDataSelectedIndex1;
            pageData.chl_manager_fliter_sort_list.SelectedIndex = opeData.SortDataSelectedIndex1;

            pageData.chl_manager_fliter_current_src.Data = opeData.chl_manager_fliter_current_src1;
            pageData.chl_manager_fliter_current_hd.Data = opeData.chl_manager_fliter_current_hd1;
            pageData.chl_manager_fliter_current_lock.Data = opeData.chl_manager_fliter_current_lock1;
            pageData.chl_manager_fliter_current_type.Data = opeData.chl_manager_fliter_current_type1;
            pageData.chl_manager_fliter_current_sort.Data = opeData.chl_manager_fliter_current_sort1;

            filterKey.scream = screamKey[opeData.SrcDataSelectedIndex1];
            filterKey.hd = hdKey[opeData.HDDataSelectedIndex1];
            filterKey.lock = lockKey[opeData.LockDataSelectedIndex1];
            filterKey.type = typeKey[opeData.TypeDataSelectedIndex1];
            filterKey.sort = sortKey[opeData.SortDataSelectedIndex1];
        }
        else
        {
            pageData.chl_manager_fliter_src_list.DataSelectedIndex = opeData.SrcDataSelectedIndex;
            pageData.chl_manager_fliter_HD_list.DataSelectedIndex = opeData.HDDataSelectedIndex;
            pageData.chl_manager_fliter_HD_list_5657.DataSelectedIndex = opeData.HDDataSelectedIndex;
            pageData.chl_manager_fliter_lock_list.DataSelectedIndex = opeData.LockDataSelectedIndex;
            pageData.chl_manager_fliter_type_list.DataSelectedIndex = opeData.TypeDataSelectedIndex;
            pageData.chl_manager_fliter_sort_list.DataSelectedIndex = opeData.SortDataSelectedIndex;

            pageData.chl_manager_fliter_src_list.SelectedIndex = opeData.SrcDataSelectedIndex;
            pageData.chl_manager_fliter_HD_list.SelectedIndex = opeData.HDDataSelectedIndex;
            pageData.chl_manager_fliter_HD_list_5657.SelectedIndex = opeData.HDDataSelectedIndex;
            pageData.chl_manager_fliter_lock_list.SelectedIndex = opeData.LockDataSelectedIndex;
            pageData.chl_manager_fliter_type_list.SelectedIndex = opeData.TypeDataSelectedIndex;
            pageData.chl_manager_fliter_sort_list.SelectedIndex = opeData.SortDataSelectedIndex;

            pageData.chl_manager_fliter_current_src.Data = opeData.chl_manager_fliter_current_src;
            pageData.chl_manager_fliter_current_hd.Data = opeData.chl_manager_fliter_current_hd;
            pageData.chl_manager_fliter_current_lock.Data = opeData.chl_manager_fliter_current_lock;
            pageData.chl_manager_fliter_current_type.Data = opeData.chl_manager_fliter_current_type;
            pageData.chl_manager_fliter_current_sort.Data = opeData.chl_manager_fliter_current_sort;

            filterKey.scream = screamKey[opeData.SrcDataSelectedIndex];
            filterKey.hd = hdKey[opeData.HDDataSelectedIndex];
            filterKey.lock = lockKey[opeData.LockDataSelectedIndex];
            filterKey.type = typeKey[opeData.TypeDataSelectedIndex];
            filterKey.sort = sortKey[opeData.SortDataSelectedIndex];
        }
    }
    self.onOpenChlManagerFilter = function () {
        //read data
        var opeData = chlmanagerfliterpage.pageData.operateData;
        opeData.deleteHD = true;
        tempid=this.page.origin.id;
        typeUid= opeData.typeUidLeft; //channelmanagerpage.getCurrentSelecedList();
        if( tempid=="channel_manager_fav_edit")
        {
            typeRightUid=channelmanagerfav.getCurrentSelecedList();
        }
        debugPrint('____typeUid.uid:::::::: ' +typeUid.uid);
        hiWebOsFrame.channel_manager_fliter.rewrite();
        if(opeData.deleteHD){
            $("#chl_manager_fliter_hd_1").css("display","none");
            $("#chl_manager_fliter_HD_contener").css("display","none");
            $("#chl_manager_fliter_HD_contener_5657").css("display","none");
        }else{
            if(null != currentPlatform_config.match("5655") || null != currentPlatform_config.match("5882")){
                $("#chl_manager_fliter_HD_contener").css("display","block");
            }else{
                $("#chl_manager_fliter_HD_contener_5657").css("display","block");
            }
        }
        hiWebOsFrame.channel_manager_fliter.hiFocus();
        chlmanagerfliterpage.doFilterChannels(tempid);
        hiWebOsFrame.endLoading();
    }
    function getDefinitionFlag(flag) {
        if((flag == 17) || (flag >= 25 && flag <= 30)){
            return 1;//HD
        }
        else if(flag == 31){
            return 3;//UHD
        }
        else{
            return 2;//SD
        }
    }
    function compareByName(a, b) {
        var aLowCase = a.name.toLowerCase();
        var bLowCase = b.name.toLowerCase();

        if (aLowCase > bLowCase) {
            return 1
        }
        else if (aLowCase == bLowCase) {
            return 0
        }
        else {
            return -1
        }
    }

    function isZeroToNineOrAtoZ(chrt) {
        if (!chrt) return false;
        return ((chrt >= "0" && chrt <= "9") ||
        (chrt >= "A" && chrt <= "Z") ||
        (chrt >= "a" && chrt <= "z"));
    }

    function sortChannels(chnls) {
        if (!Array.isArray(chnls) || chnls.length == 0) return chnls;
        var tmpChannels = copyObj(chnls);
        tmpChannels = tmpChannels.filter(function(v) {return isZeroToNineOrAtoZ(v.name[0])});
        tmpChannels.sort(compareByName);
        tmpChannels = tmpChannels.concat(chnls.filter(function(v) {return !isZeroToNineOrAtoZ(v.name[0])}));
        return tmpChannels;
    }
    self.doFilterChannels = function (tempid) {

        if( tempid=="channel_manager_bg")
        {
            var filtedChannels = channelmanagerbg.getBackUpChannels();
        }
        else
        {
            if(opeData.flag){
                var filtedChannels = channelmanagerfav.getBackUpRightChannels();
            }
            else
            {
                var filtedChannels = channelmanagerfav.getBackUpChannels();
            }

//            var filtedRightChannels = channelmanagerfav.getBackUpRightChannels();
        }
//        debugPrint('________filtedChannels::::::::::::::::::::::'+JSON.stringify(filtedChannels));
        //sort
        //(a.name.charCodeAt(0)-b.name.charCodeAt(0));
        if(tv)
        {
                if (FILETER.SORTA == filterKey.sort) {

                    filtedChannels = sortChannels(filtedChannels);

                }
                else if (FILETER.SORT0 == filterKey.sort) {
                    filtedChannels = filtedChannels.sort(function (a, b) {
                        return a.number - b.number;
                    });
                }
            //    scream
                if (FILETER.SCREAMYES == filterKey.scream) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.attr & 1 << 11) !=0;
                    });
                }
                else if (FILETER.SCREAMNO == filterKey.scream) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.attr & 1 << 11) == 0;
                    });
                }
                if(!opeData.deleteHD){
                    //hd                                             //HdSd==25 高清，HdSd==1 标清
                    if (FILETER.HDYES == filterKey.hd) {
                        filtedChannels = filtedChannels.filter(function (v) {
                            return ( v.HdSd == 1);
                        });
                    }
                    else if (FILETER.HDNO == filterKey.hd) {
                        filtedChannels = filtedChannels.filter(function (v) {
                            return (v.HdSd == 2);
                        });
                    }
                    else if(FILETER.UHD == filterKey.hd){
                        filtedChannels = filtedChannels.filter(function (v) {
                            return (v.HdSd ==3);
                        });
                    }
                }
                //lock
                if (FILETER.LOCKYES == filterKey.lock) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.attr & 1 << 8) !=0;
                    });
                }
                else if (FILETER.LOCKNO == filterKey.lock) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.attr & 1 << 8) == 0;
                    });
                }
                //type
                if (FILETER.TYPETV == filterKey.type) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.tvType == 1);            //////////////////////////此处不确定6
                    });
                }
                else if (FILETER.TYPERADIO == filterKey.type) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.tvType == 2);
                    });
                }
                else if(FILETER.TYPEDATA == filterKey.type){
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.tvType == 3);
                    });
                }
//        if(filtedChannels.length == 0){
//            showMsg("", "filted length = 0");
//        }
//        else{

//        hiWebOsFrame.channel_manager_fliter.close();

                if( tempid=="channel_manager_bg")
                {
                    channelmanagerbg.setFilterChannels(filtedChannels);
                }
                else
                {
                   channelmanagerfav.setFilterChannels(filtedChannels,opeData.flag);
                }
//        }
        }
        else
        {
            debugPrint('____opeData.SortDataSelectedIndex:::::::: ' +opeData.SortDataSelectedIndex);
            if (FILETER.SORTA == filterKey.sort) {
                filtedChannels = filtedChannels.sort(function (a, b) {
                    return ((a.name.charCodeAt(0)<97?(a.name.charCodeAt(0)+32):a.name.charCodeAt(0)) -(b.name.charCodeAt(0)<97?(b.name.charCodeAt(0)+32):b.name.charCodeAt(0)));
                });
            }
            else if (FILETER.SORT0 == filterKey.sort) {
                filtedChannels = filtedChannels.sort(function (a, b) {
                    return a.number - b.number;
                });
            }
        //    scream
            if (FILETER.SCREAMYES == filterKey.scream) {
                filtedChannels = filtedChannels.filter(function (v) {
                    return (v.attr & 1 << 11) !=0;
                });
            }
            else if (FILETER.SCREAMNO == filterKey.scream) {
                filtedChannels = filtedChannels.filter(function (v) {
                    return (v.attr & 1 << 11) == 0;
                });
            }
            if(!opeData.deleteHD){
                //hd                                              //不确定1 << 2
                if (FILETER.HDYES == filterKey.hd) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.attr & 1 << 2) != 0;
                    });
                }
                else if (FILETER.HDNO == filterKey.hd) {
                    filtedChannels = filtedChannels.filter(function (v) {
                        return (v.attr & 1 << 2) == 0;
                    });
                }
            }
            //lock
            if (FILETER.LOCKYES == filterKey.lock) {
                filtedChannels = filtedChannels.filter(function (v) {
                    return (v.attr & 1 << 8) !=0;
                });
            }
            else if (FILETER.LOCKNO == filterKey.lock) {
                filtedChannels = filtedChannels.filter(function (v) {
                    return (v.attr & 1 << 8) == 0;
                });
            }
            //type
            if (FILETER.TYPETV == filterKey.type) {
                filtedChannels = filtedChannels.filter(function (v) {
                    return (v.type != 6);            //////////////////////////此处不确定6
                });
            }
            else if (FILETER.TYPERADIO == filterKey.type) {
                filtedChannels = filtedChannels.filter(function (v) {
                    return (v.type == 6);
                });
            }
//        if(filtedChannels.length == 0){
//            showMsg("", "filted length = 0");
//        }
//        else{

//        hiWebOsFrame.channel_manager_fliter.close();
            if( tempid=="channel_manager_bg")
            {
                channelmanagerbg.setFilterChannels(filtedChannels);
            }
            else
            {
                channelmanagerfav.setFilterChannels(filtedChannels,opeData.flag);
            }
//        }
        }

    }

    self.onDestroyPage = function(){
        hiWebOsFrame.channel_manager_fliter  = null;
    }
    self.onDestroyPageDefault=function(){
        hiWebOsFrame.channel_manager_fliter  = null;
        opeData.SrcDataSelectedIndex=0;
        opeData.HDDataSelectedIndex=0;
        opeData.LockDataSelectedIndex=0;
        opeData.TypeDataSelectedIndex=0;
        opeData.SortDataSelectedIndex=1;
        opeData.chl_manager_fliter_current_src= "All";
        opeData.chl_manager_fliter_current_hd= "All";
        opeData.chl_manager_fliter_current_lock="All";
        opeData.chl_manager_fliter_current_type="All";
        opeData.chl_manager_fliter_current_sort="0-9";
        opeData.SrcDataSelectedIndex1=0;
        opeData.HDDataSelectedIndex1=0;
        opeData.LockDataSelectedIndex1=0;
        opeData.TypeDataSelectedIndex1=0;
        opeData.SortDataSelectedIndex1=1;
        opeData.chl_manager_fliter_current_src1= "All";
        opeData.chl_manager_fliter_current_hd1= "All";
        opeData.chl_manager_fliter_current_lock1="All";
        opeData.chl_manager_fliter_current_type1="All";
        opeData.chl_manager_fliter_current_sort1="0-9";
    }
   self.onDestroyRightPageDate=function(){
       opeData.SrcDataSelectedIndex1=0;
       opeData.HDDataSelectedIndex1=0;
       opeData.LockDataSelectedIndex1=0;
       opeData.TypeDataSelectedIndex1=0;
       opeData.SortDataSelectedIndex1=1;
       opeData.chl_manager_fliter_current_src1= "All";
       opeData.chl_manager_fliter_current_hd1= "All";
       opeData.chl_manager_fliter_current_lock1="All";
       opeData.chl_manager_fliter_current_type1="All";
       opeData.chl_manager_fliter_current_sort1="0-9";
   }
}
var chlmanagerfliterpage = new ChlManagerFliterPage();