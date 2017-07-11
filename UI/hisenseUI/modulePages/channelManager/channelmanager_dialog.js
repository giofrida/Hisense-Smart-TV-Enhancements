/**
 * Created on 14-9-28.
 */

function getchlmanagerDialogPageData(opts) {
    opts.CaE = [
        {
            "id": "chl_manager_dialog_txt",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "chlManagerDialog1SelectImg",
            "description": "图片",
            "CaEType": "SwitchDiv",
            "imageList":{
                "openImg":"img/channellist/mark.png",
                "closeImg":"img/channellist/nomark.png"
            },
            "classes": {
                "normal": "chl_manager_dialog_choose_img_normal", "focus": "chl_manager_dialog_choose_img_focus"
            },
            "handler": {
                "aftEnterHandler": "channelmanagerdialogpage.setisNoDialog"
            },
            "nav": {
                "downTo": "chl_manager_dialog_btn_0"
            }
        },
        {
            "id": "chlManagerDialogChooseTxt",
            "description": "文本",
            "CaEType": "span"
         },
        {
            "id": "chl_manager_dialog_btn_0",
            "description": "保存按键",
            "CaEType": "div",
            "classes": {
                "normal": "chl_manager_dialog_btn_class_normal",
                "focus": "chl_manager_dialog_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "channelmanagerdialogpage.SavePressed",
                "aftEscHandler": "channelmanagerdialogpage.SavePressed"
            },
            "nav": {
                "leftTo": "chl_manager_dialog_btn_1",
                "rightTo": "chl_manager_dialog_btn_1",
                "upTo": "chlManagerDialog1SelectImg"
            }
        },
        {
            "id": "chl_manager_dialog_btn_1",
            "description": "取消按键",
            "CaEType": "div",
            "classes": {
                "normal": "chl_manager_dialog_btn_class_normal",
                "focus": "chl_manager_dialog_btn_class_focus"
            },
            "handler": {
                "aftEnterHandler": "channelmanagerdialogpage.CancelPressed"
            },
            "nav": {
                "leftTo": "chl_manager_dialog_btn_0",
                "rightTo": "chl_manager_dialog_btn_0",
                "upTo": "chlManagerDialog1SelectImg"
            }
        }
    ]

    return channelmanagerdialogpage.pageData;
}

function ChannelManagerDialogPage() {
    var self = this;
    var oprData = {
        typelist:[],
        itemUid:[],
        itemUUuid:[],
        itemsName: [],
        itemsNum:[]
    };
    self.pageData = {
        chl_manager_dialog_txt: {"Data": "Are you sure you want to modify the channel name?"},
        chlManagerDialogChooseTxt: {Data: "Do not ask again"},
        chlManagerDialog1SelectImg:{Data: false},
        chl_manager_dialog_btn_0:{Data: "Save"},
        chl_manager_dialog_btn_1:{Data: "Cancel"},
        langData: {
            "Are you sure you want to modify the channel name?": [],
            "Do not ask again": [],
            "Save": [],
            "Cancel": []
        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprData;

    function rewritePageData(pageData) {


    }
    self.SavePressed = function() {
        writeFileToNative("hisenseUI/renamedialog.txt", self.pageData.chlManagerDialog1SelectImg.Data, 1);
        channelmanagerrenamepage.setShowDialog(!self.pageData.chlManagerDialog1SelectImg.Data);

        DBG_INFO('______oprData.typelist.uid_____::::::'+oprData.typelist.uid+objToString(oprData.itemUid));
        DBG_INFO('______________oprData.itemsName::::::'+objToString(oprData.itemsName));
        DBG_INFO('______________oprData.itemUUuid::::::'+objToString(oprData.itemUUuid));
        /*   renameChannel()  */
        if(tv)
        {
            model.servicelist.NewRenameFavChannel(oprData.typelist.uid,oprData.itemUUuid,oprData.itemUid,oprData.itemsName);
            if (tv) {
                livetvchlist.updateChannelName(oprData.itemUUuid,oprData.itemUid,oprData.itemsName);
            }
            hiWebOsFrame.channel_manager_dialog.close();
            if( this.page.origin.origin.id=="channel_manager_bg")
            {
                channelmanagerbg.setToListLeftAftRename();
            }
            else
            {
                channelmanagerfav.setToListLeftAftRename();
            }
            if( typeof channelmanagerrenamepage != 'undefined'){
                hiWebOsFrame.channel_manager_rename.destroy();
            }
            hiWebOsFrame.channel_manager_dialog.destroy();
        }
        else
        {
            renameChannelsBynum(oprData.typelist.uid,oprData.itemsName,oprData.itemsNum);
            hiWebOsFrame.channel_manager_dialog.close();
            if( this.page.origin.origin.id=="channel_manager_bg")
            {
                channelmanagerbg.setToListLeftAftRename();
            }
            else
            {
                channelmanagerfav.setToListLeftAftRename();
            }
            hiWebOsFrame.channel_manager_dialog.destroy();
        }
    }
    self.CancelPressed = function() {
        hiWebOsFrame.channel_manager_dialog.close();
        if( this.page.origin.origin.id=="channel_manager_bg")
        {
            hiWebOsFrame.channel_manager_bg.rewriteDataOnly();
            hiWebOsFrame.channel_manager_bg.hiFocus();
        }
        else{
            hiWebOsFrame.channel_manager_fav_edit.rewriteDataOnly();
            hiWebOsFrame.channel_manager_fav_edit.hiFocus();
        }
        hiWebOsFrame.channel_manager_dialog.destroy();
        if( typeof channelmanagerrenamepage != 'undefined'){
            hiWebOsFrame.channel_manager_rename.destroy();
        }
    }

    self.OpenRenameDialog = function(){
        if(hiWebOsFrame.getCurrentArea() == 'SA'){
            $("#chl_manager_dialog_btn_0").css("float", "left");
            $("#chl_manager_dialog_btn_1").css("float", "left");
            $("#chl_manager_dialog_btn_1").css("margin-left", "2px");
        }else{
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                $("#chl_manager_dialog_btn_0").css("float", "left");
                $("#chl_manager_dialog_btn_1").css("float", "left");
                $("#chl_manager_dialog_btn_1").css("margin-left", "2px");
            }
            else{
                $("#chl_manager_dialog_btn_0").css("float", "right");
                $("#chl_manager_dialog_btn_1").css("float", "right");
                $("#chl_manager_dialog_btn_1").css("margin-right", "2px");
            }
        }
    }
    self.onDestroyPage = function(){
        debugPrint('________oprData.typelist.uid::::::::::::::::::::::'+oprData.typelist.uid);
//        chl_data_refreshChannelList(oprData.typelist.uid);
        hiWebOsFrame.channel_manager_dialog  = null;
    }

    self.setisNoDialog = function(pageData){

       self.pageData.chlManagerDialog1SelectImg.Data =!self.pageData.chlManagerDialog1SelectImg.Data ;

        debugPrint(self.pageData.chlManagerDialog1SelectImg.Data);
        hiWebOsFrame.channel_manager_dialog.rewriteDataOnly();

    }

}


var channelmanagerdialogpage = new ChannelManagerDialogPage();

