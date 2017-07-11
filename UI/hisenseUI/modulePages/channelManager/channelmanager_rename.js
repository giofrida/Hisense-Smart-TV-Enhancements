/**
 * Created on 14-9-28.
 */

function getchlmanagerRenamePageData(opts) {
    opts.CaE = [
        {
            id: 'chl_manager_rename_list',
            CaEType: 'Ul',
            handler: {
                 aftDownHandler: channelmanagerrenamepage.befkeyDown,
                 aftUpHandler: channelmanagerrenamepage.befkeyUp,
                 //aftEscHandler: channelmanagerrenamepage.exitRenamePage
                "aftEscHandler": channelmanagerrenamepage.CancelPressed
            },
            "nav": {
                "downTo": "chl_manager_rename_btn_0"
            },
            firstFocusId: 'chl_manager_rename_input',
            "onBlurFun":channelmanagerrenamepage.getChangeData,
            oriCaE: [
                {
                    id: 'chl_manager_rename_num',
                    CaEType: 'span'
                },
                {
                    "id": "chl_manager_rename_input",
                    "CaEType": "input",
                    "maxlength":25,
                    "handler": {
                        "befEnterHandler":channelmanagerrenamepage.DynamicResetPosition,
                        "aftEnterHandler": "invokeSKB"
                    }
                  //"onChange":"channelmanagerrenamepage.renameOnChange",
                }
            ],
            UlConfig: {
                UlDataItem: ['chl_manager_rename_num', 'chl_manager_rename_input'],
                "PageSize":6
            }
        },
        {
            "id": "chl_manager_rename_tips",
            "description": "提示",
            "CaEType": "span"
        },
        {
            "id": "chl_manager_rename_btn_0",
            "description": "保存按键",
            "CaEType": "div",
            "classes": {
                "normal": "chl_manager_rename_btn_class_normal",
                "focus": "chl_manager_rename_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": channelmanagerrenamepage.SavePressed,
                "aftEscHandler": channelmanagerrenamepage.CancelPressed
            },
            "nav": {
                //"leftTo": "chl_manager_rename_btn_1",
                "rightTo": "chl_manager_rename_btn_1",
                "upTo": "chl_manager_rename_list"
            }
        },
        {
            "id": "chl_manager_rename_btn_1",
            "description": "取消按键",
            "CaEType": "div",
            "classes": {
                "normal": "chl_manager_rename_btn_class_normal",
                "focus": "chl_manager_rename_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": channelmanagerrenamepage.CancelPressed,
                "aftEscHandler": channelmanagerrenamepage.CancelPressed
            },
            "nav": {
                "leftTo": "chl_manager_rename_btn_0",
                //"rightTo": "chl_manager_rename_btn_0",
                "upTo": "chl_manager_rename_list"
            }
        }
    ]

    return channelmanagerrenamepage.pageData;
}

function ChannelManagerRenamePage() {
    var self = this;
    var itemCount = 0;
    var items = [];
    var itemsId = [];
    var itemsUuid=[];
    var itemsNum=[];
    var renameFlag=false;
    var oprData = {
        typelist:[],
        renameList: []
    };
    var renameListNew = [];

    self.pageData = {
        chl_manager_rename_list: {Data: [], SelectedIndex: 0 },
        chl_manager_rename_tips:{Data: "Press the BACK button to exit the current screen and save the channel name"},
        chl_manager_rename_btn_0:{Data: "Save"},
        chl_manager_rename_btn_1:{Data: "Cancel"},
        langData: {
            "Press the BACK button to exit the current screen and save the channel name": [],
            "Save": [],
            "Cancel": []
        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprData;

    function rewritePageData(pageData) {
        if (0 == itemCount) return;
        pageData.chl_manager_rename_list.Data = [];
//        for (var i = 0; i < itemCount; i++) {
//            pageData.chl_manager_rename_list.Data.push({
//                chl_manager_rename_num: {Data: oprData.renameList[i].number + ':'},
//                chl_manager_rename_input: {Data: oprData.renameList[i].name}
//            });
//        }
        if(pageData.chl_manager_rename_list.Data.length > pageData.operateData.renameList.length){
            pageData.chl_manager_rename_list.Data.splice(pageData.operateData.renameList.length);
        }else if(pageData.chl_manager_rename_list.Data.length < pageData.operateData.renameList.length){
            while(pageData.chl_manager_rename_list.Data.length < pageData.operateData.renameList.length){
                var itemData = {
                    "chl_manager_rename_num":{"Data":""},
                    "chl_manager_rename_input":{"Data":""}
                }
                pageData.chl_manager_rename_list.Data.push(itemData);
            }
        }
        $.each(renameListNew,function(idx,item){
            pageData.chl_manager_rename_list.Data[idx].chl_manager_rename_num.Data = item.number;
            pageData.chl_manager_rename_list.Data[idx].chl_manager_rename_input.Data = item.name;
        })
        //pageData.chl_manager_rename_list.SelectedIndex = 0;

    }
    var showDialog = !readFileFromNative("hisenseUI/renamedialog.txt", 1);//tv?model.servicelist.getRenameDialogFlag():true;//getShowDialog 获取是否显示

        self.setShowDialog = function (value) {
            showDialog = value;
        }
        self.getShowDialog = function () {
            return showDialog;
        }

    self.exitRenamePage = function () {

//        var items = [];
//        var itemsId = [];
//        var itemsUuid=[];
//        var itemsNum=[];
//        var renameFlag=false;
//        var ind = 0;
//        var _this = this;
//        this.data.Data.forEach(function (v) {
//            items.push(
////          number: v.chl_manager_rename_num.Data.split(':')[0],
////            v.chl_manager_rename_input.Data
//            $('#'+_this.children[ind + 1].id).val()
////            $('#chl_manager_rename_list_chl_manager_rename_input_sys'+ind).val()
//            );
//            ind +=2;
//        });
//        DBG_INFO('______items_____::::::'+objToString(items));
        DBG_INFO('this.SelectedIndex:::::'+this.SelectedIndex);
        //当前focus的获取最终数据
        var _thisinputvalue = $('#chl_manager_rename_list_chl_manager_rename_input_sys'+this.SelectedIndex).val();
            renameListNew[this.SelectedIndex].name = _thisinputvalue;

        //DBG_INFO('oprData.renameList::::::'+objToString(oprData.renameList));
        //DBG_INFO('renameListNew::::::'+objToString(renameListNew));
        for(var i = 0; i < oprData.renameList.length;i++){
            if(oprData.renameList[i].name != renameListNew[i].name)
            {
                itemsId.push(renameListNew[i].uid);
                itemsUuid.push(renameListNew[i].uuid);
                itemsNum.push(renameListNew[i].number);
                items.push(renameListNew[i].name);
                renameFlag=true;
            }
        }

//        DBG_INFO('______oprData.renameList_____::::::'+objToString(oprData.renameList));
        DBG_INFO('______itemsId_____::::::'+objToString(itemsId));
        DBG_INFO('______items_____::::::'+objToString(items));
        oprData.renameList = [];itemCount=0;
        if (0) {//showDialog&&renameFlag
            debugPrint('enterRenameDialogPage');
            hiWebOsFrame.channel_manager_rename.close();
            hiWebOsFrame.createPage("channel_manager_dialog", null, this.page, null, function (a) {
                hiWebOsFrame.channel_manager_dialog = a;
                a.operateData.itemsName=items;
                a.operateData.itemUid=itemsId;
                DBG_INFO('__________itemsUuid::::::'+objToString(itemsUuid));
                a.operateData.itemUUuid=itemsUuid;
                a.operateData.itemsNum=itemsNum;
                a.operateData.typelist=channelmanagerpage.getCurrentSelecedList();
                a.open();
                a.hiFocus();
            });
        }
        else {
            debugPrint('exitRenamePage');
            hiWebOsFrame.channel_manager_rename.close();
           DBG_INFO('oprData.typelist.uid::::::'+oprData.typelist.uid+'renameName::::::'+objToString(items));
            /*   renameChannel()  */
            if(tv)
            {
                if(!!renameFlag){
                    model.servicelist.NewRenameFavChannel(oprData.typelist.uid,itemsUuid,itemsId,items);
                }
                debugPrint('_________NewRenameFavChannel__________');
                if (tv) {
                    livetvchlist.updateChannelName(itemsUuid,itemsId,items);
                }
                if( this.page.origin.id=="channel_manager_bg")
                {
                    debugPrint('_________this.page.origin.id__________'+this.page.origin.id);
                 channelmanagerbg.setToListLeftAftRename();
                }
                else
                {
                 channelmanagerfav.setToListLeftAftRename();
                }
            }
            else
            {
                renameChannelsBynum(oprData.typelist.uid,items,itemsNum);
                if( this.page.origin.id=="channel_manager_bg")
                {
                    channelmanagerbg.setToListLeftAftRename();
                }
                else
                {
                    channelmanagerfav.setToListLeftAftRename();
                }
            }
            hiWebOsFrame.channel_manager_rename.destroy();
        }
    }
    self.SavePressed = function () {
        DBG_INFO('this.SelectedIndex:::::'+this.SelectedIndex);
        //当前focus的获取最终数据
        //var _thisinputvalue = $('#chl_manager_rename_list_chl_manager_rename_input_sys'+this.SelectedIndex).val();
        //renameListNew[this.SelectedIndex].name = _thisinputvalue;
        //DBG_INFO('oprData.renameList::::::'+objToString(oprData.renameList));
        //DBG_INFO('renameListNew::::::'+objToString(renameListNew));
        for(var i = 0; i < oprData.renameList.length;i++){
            if(oprData.renameList[i].name != renameListNew[i].name)
            {
                itemsId.push(renameListNew[i].uid);
                itemsUuid.push(renameListNew[i].uuid);
                itemsNum.push(renameListNew[i].number);
                items.push(renameListNew[i].name);
                renameFlag=true;
            }
        }
            oprData.renameList = [];itemCount=0;
            hiWebOsFrame.channel_manager_rename.close();
            DBG_INFO('oprData.typelist.uid::::::'+oprData.typelist.uid+'renameName::::::'+objToString(items));
            /*   renameChannel()  */
            if(tv)
            {
                if(!!renameFlag){
                    model.servicelist.NewRenameFavChannel(oprData.typelist.uid,itemsUuid,itemsId,items);
                }
                debugPrint('_________NewRenameFavChannel__________');
                if (tv) {
                    livetvchlist.updateChannelName(itemsUuid,itemsId,items);
                }
                if( this.page.origin.id=="channel_manager_bg")
                {
                    debugPrint('_________this.page.origin.id__________'+this.page.origin.id);
                    channelmanagerbg.setToListLeftAftRename();
                }
                else
                {
                    channelmanagerfav.setToListLeftAftRename();
                }
            }
            else
            {
                renameChannelsBynum(oprData.typelist.uid,items,itemsNum);
                if( this.page.origin.id=="channel_manager_bg")
                {
                    channelmanagerbg.setToListLeftAftRename();
                }
                else
                {
                    channelmanagerfav.setToListLeftAftRename();
                }
            }
            hiWebOsFrame.channel_manager_rename.destroy();
    }
    self.CancelPressed = function(){
        hiWebOsFrame.channel_manager_rename.close();
        if( this.page.origin.id=="channel_manager_bg")
        {
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            hiWebOsFrame.channel_manager_bg.hiFocus();
        }
        else{
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            hiWebOsFrame.channel_manager_fav_edit.hiFocus();
        }
        hiWebOsFrame.channel_manager_rename.destroy();
    }
    self.onOpenChlManagerRename = function () {
        //read data
        itemCount = oprData.renameList.length;
        items = [];
        itemsId = [];
        itemsUuid=[];
        itemsNum=[];
        renameFlag=false;
        cloneObj(oprData.renameList,renameListNew);
        debugPrint('______itemCount:::::::'+itemCount);
        oprData.typelist = channelmanagerpage.getCurrentSelecedList();
        channelmanagerrenamepage.pageData.chl_manager_rename_list.SelectedIndex = 0;
        hiWebOsFrame.channel_manager_rename.rewrite();
        if(hiWebOsFrame.getCurrentArea() == 'SA'){
            $('#chl_manager_rename_tips').css('right', 38+ 'px');
        }else{
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                $('#chl_manager_rename_tips').css('right', 38+ 'px');
            }
            else {
                $('#chl_manager_rename_tips').css('left', 38+ 'px');
            }
        }
        setDynamiceStyle(itemCount);
        topItem = 0;
        hiWebOsFrame.lockAllKeys();
        setTimeout(function(){
            hiWebOsFrame.unLockAllKeys();
            hiWebOsFrame.channel_manager_rename.open();
            hiWebOsFrame.channel_manager_rename.hiFocus();
            var conHigh = $("#chl_manager_rename_list").height();
            if(oprData.renameList.length > 6){
                var temp=parseInt(conHigh/oprData.renameList.length * 6);
                $("#chl_manager_rename_scroll").css("height",temp);
                $("#chl_manager_rename_scroll").css("visibility","visible");
            }else{
                $("#chl_manager_rename_scroll").css("visibility","hidden");
            }
        }, 100);

//        var h = Math.floor(540 * 540 / 460);
//        $("#" + chl_manager_rename_scroll).css("height", h + "px");
//        setScrollbarStyle("chl_manager_rename_list","chl_manager_rename_content","chl_manager_rename_scroll", 80);
        //addScrollbar();
    }

    function setDynamiceStyle(num) {
        var height = (120 + 88 * num)+100;
        num > 5 && (height=120 + 88 * 6 +100);
        if(num<=5)
        {
         $('#chl_manager_rename_shadow').css('display', 'none');
        }
        var top = (1080 - height) / 2;
        var top1=top+height-110;
        $('#chl_manager_rename_page').css('height', height + 'px');
        $('#chl_manager_rename_page').css('margin-top', top + 'px');
        $('#chl_manager_rename_shadow').css('top', top1 + 'px');
        if(hiWebOsFrame.getCurrentArea() == 'SA'){
            $('#chl_manager_rename_page').css('margin-left', 449 + 'px')
            $("[name='contentPanel']").css("float", "left");
        }else{
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                $('#chl_manager_rename_page').css('margin-left', 449 + 'px')
                $("[name='contentPanel']").css("float", "left");
            }
            else {
                $('#chl_manager_rename_page').css('margin-right', 449 + 'px');
                $("[name='contentPanel']").css("float", "right");
            }
        }
    }
    self.resetRenamePagePositon=function(){
        setDynamiceStyle(itemCount);  //退出软键盘，rename页获取焦点位置重置
    }
    self.DynamicResetPosition=function(){
        //进入软键盘后，rename页位置上移重新计算位置
        var height = (120 + 88 * itemCount)+100;
        if(itemCount<=5)
        {
            var top=52+88*(5-itemCount);
            $('#chl_manager_rename_shadow').css('display', 'none');
            $('#chl_manager_rename_page').css('height', height + 'px');
            $('#chl_manager_rename_page').css('margin-top', top + 'px');
        }
        else
        {
            height=52 + 88 * 6+100;
            var top=52;
            var shadow_top=top+height-90;
            $('#chl_manager_rename_page').css('height', height + 'px');
            $('#chl_manager_rename_page').css('margin-top', top + 'px');
            $('#chl_manager_rename_shadow').css('top', shadow_top + 'px');
        }
        if(hiWebOsFrame.getCurrentArea() == 'SA'){
            $("#chl_manager_rename_num").css("float", "left");
            $("#chl_manager_rename_input_div").css("float", "left");
            $('#chl_manager_rename_page').css('margin-left', 449 + 'px');
            $("[name='contentPanel']").css("float", "left");
        }else{
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                $("#chl_manager_rename_num").css("float", "left");
                $("#chl_manager_rename_input_div").css("float", "left");
                $('#chl_manager_rename_page').css('margin-left', 449 + 'px');
                $("[name='contentPanel']").css("float", "left");
            }
            else {
                $("#chl_manager_rename_num").css("float", "right");
                $("#chl_manager_rename_input_div").css("float", "right");
                $('#chl_manager_rename_page').css('margin-right', 449 + 'px');
                $("[name='contentPanel']").css("float", "right");
            }
        }
    }
    self.onDestroyPage = function () {
        debugPrint('________oprData.typelist.uid::::::::::::::::::::::'+oprData.typelist.uid);
//        chl_data_refreshChannelList(oprData.typelist.uid);
        renameListNew = [];
        oprData.renameList = [];
        opeData.typelist = [];
        hiWebOsFrame.channel_manager_rename = null;
    }
    var topItem =0;
    self.befkeyDown = function() {
//        if (this.SelectedIndex > 3 && this.SelectedIndex < this.data.Data.length - 1) {
//            managerRenameScroll.afterKeyDownHandler();
//            topItem++;
//        }
//        if(this.SelectedIndex != this.data.Data.length - 1 &&
//            this.SelectedIndex - topItem == 4) {
//            topItem++;
//            moveScrollbar(SCROLLDIR.DOWN,"chl_manager_rename_scroll", "chl_manager_rename_list","chl_manager_rename_content", 88);
//        }
        len = oprData.renameList.length;
        var conHigh = $("#chl_manager_rename_list").height();
        var step = conHigh/len;
        if(len > 6 && this.SelectedIndex > 5){
            var temp=parseInt((this.SelectedIndex-5)*step);
            $("#chl_manager_rename_scroll").css("margin-top",temp);
            hiWebOsFrame.channel_manager_rename.rewriteDataOnly();
        }
    }

    self.befkeyUp = function() {
//        if (this.SelectedIndex > 0 && this.SelectedIndex == topItem) {
//            managerRenameScroll.afterKeyUpHandler();
//            topItem--;
//        }
//        if(this.SelectedIndex == topItem && topItem > 0) {
//            topItem--;
//            moveScrollbar(SCROLLDIR.UP,"chl_manager_rename_scroll", "chl_manager_rename_list","chl_manager_rename_content", 88);
//        }
        var len = oprData.renameList.length;
        var conHigh = $("#chl_manager_rename_list").height();
        var step = conHigh/len;
        if(len > 6 &&this.SelectedIndex < (len-6))
        {
            var temp=parseInt(this.SelectedIndex*step) ;
            $("#chl_manager_rename_scroll").css("margin-top",temp);
            hiWebOsFrame.channel_manager_rename.rewriteDataOnly();
        }
    }
    self.renameOnChange = function(){
        var select =hiWebOsFrame.channel_manager_rename.getCaE("chl_manager_rename_list").SelectedIndex;
        debugPrint(select);
        //itemsNum.push(oprData.renameList[select].number);
        //itemsId.push(oprData.renameList[select].uid);
        //itemsUuid.push(oprData.renameList[select].uuid);
        //items.push( $('#chl_manager_rename_list_chl_manager_rename_input_sys'+select).val());
        renameFlag = true;
        var inputValue = $('#chl_manager_rename_list_chl_manager_rename_input_sys'+select).val();
        $('#chl_manager_rename_list_chl_manager_rename_input_sys' + select).val(inputValue);
    }

    self.getChangeData = function(){
        var select =hiWebOsFrame.channel_manager_rename.getCaE("chl_manager_rename_list").SelectedIndex;
        renameListNew[select].name = $('#chl_manager_rename_list_chl_manager_rename_input_sys'+select).val();
        DBG_INFO('______renameListNew[select].name_____::::::'+renameListNew[select].name);

    }
    var managerRenameScroll;
    function addScrollbar() {
        //TODO add scroll, temp
        // if it merged to SDK, abandoned this
        if (!$('#chl_manager_rename_content').attr('data-scroll')) {
            managerRenameScroll = new Scrollbar({
                height: 440,
                hideHeight:120,
                width: 940,
                scrollAxis: 'vertical',
                sliderMode: 'step',
                step: 88,
                scrollMode: 'active',
                placeholder: false,
//                flipMode: 'page',
//                animationMode: 'ease-in-out',
                class: 'scrollbar_class_detail'
            }, 'chl_manager_rename_list');
            managerRenameScroll.createScrollbar();
        }
        else {
            managerRenameScroll.refreshScrollbar();
        }
        $('#chl_manager_rename_list').attr('data-scroll', 'true');
        topItem= 0;
    }
}


var channelmanagerrenamepage = new ChannelManagerRenamePage();

