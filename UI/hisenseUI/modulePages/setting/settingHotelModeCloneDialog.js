function getHotelCloneDialogData(opt){
    opt.CaE = [
        {
            "id":"settingHotelCloneInfo",
            "description":"连接网络提示信息",
            "CaEType":"div"
        }
    ];
    return HotelCloneDialogData;

}
var HotelCloneDialogData={
    "settingHotelCloneInfo":{"Data":"Copy succeeded"},
    "operateData":{
        "DialogHotelCloneTimer":0,
        settingHotelCloneInfo:"Copy succeeded"

    },
    "langData":{
        "Copy succeeded":["Copy succeeded"],
        "Copy failed":["Copy failed"],
        "Restore succeeded":["Restore succeeded"],
        "Restore failed":["Restore failed"]

    },
    rewrite:"DialogHotelCloneRewrite"
}
function DialogHotelCloneOnOpen(){

    HotelCloneDialogData.operateData.DialogHotelCloneTimer = setTimeout(DialogHotelCloneDisappear,3000);
}
function DialogHotelCloneDisappear(){
    hiWebOsFrame.SettingHotelCloneDialogPage.close();
    hiWebOsFrame.SettingHotelCloneDialogPage.origin.open();
    hiWebOsFrame.SettingHotelCloneDialogPage.origin.hiFocus();
    hiWebOsFrame.SettingHotelCloneDialogPage.destroy();
}
function DialogHotelCloneOnDestroy(){
    clearTimeout(HotelCloneDialogData.operateData.DialogHotelCloneTimer);
    hiWebOsFrame.SettingHotelCloneDialogPage = null;
}
function DialogHotelCloneRewrite(){
    HotelCloneDialogData.settingHotelCloneInfo.Data = HotelCloneDialogData.operateData.settingHotelCloneInfo;
}