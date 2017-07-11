/**
 * Created by Brad on 14-9-12.
 */

var FILES_PER_PAGE = 19;
var FILES_PER_ROW  = 5;


var cLanguage_himedia = "eng";

//var tv_launcher = false;

var HiFileBrowser = {
    curPage: 0,
    curFile: 0,
    curPath: "",
    curType: "all",
    totalPage: 0,
    totalFile: 0,
    issearchdata: false, //暂时没有用到
    files: {},
    fileHTML: [],
    sliderHeight: 0,
    sliderTop: 0,
    thumbnailxhrs: [],
    step: 0,
    netState: 0,
    isFocusList: false,
    listId: ["all", "photo", "video", "music"],
    listFocusedInd: 0,
    isOpen: false,
    isInit: false,
    URLs: {
        photo: [],
        music: [],
        video: [],
        currentIndex: [],
        currentURLs: []
    },
    deltaData: [],
    oAuth: false,
    //Brad add firstInit 0 first-init 1 usb 2.pvr 3.dlna 4.dropbox
    firstInit: 0,
    //Brad add parameter to get current first init Files DATA
    firstInitFilesData: null,
    //Brad add parameter to get current usb Data
    contentsCurrentData: [],
    //Brad add parameter to record curent usb ID
    currentUsbId: null,
    //Brad add parameter to record latest usb ID for extract the USB device
    latestUsbId: null,
    //Brad add parameter to show currentDevice   0.usb   1. dlna   2.dropbox  3.pvr
    currentDevice: 0,
    //Brad add for mark currentUSBid FOR pvr
    pvrCurrentID: null,
    //Brad add for initDATA
    InitDeviceDatas: [],
    //Brad add for mark last page
    lastPage: null,
    //Brad  add for USB Changed
    HiMedia_initPage: 0,
    //Brad add for control readTable num once.
    table_read_once: 100,
    //Brad add for get USBID FOR PVR
    usbDevices: [],
    InitDeviceDatasPVR: [],
    deletePVRing: false,
    disablekey: false,
    initUSBList: null,
    //Brad add for keep focus for last page
    lastFocusFile: [],
    lastFocusPage: []

};


var pathStack = [];
var flag_photo = 0;
var flag_music = 0;
var flag_video = 0;

var HiFileData = function (usbFileId, usbFileName, thumb_url, artist, album, path, is_dir, icon, root, mime_type, fileSize) {
    this.usbFileId = usbFileId;//仅在刷新设备时用于存放ID使用  ,对于file用于存放上级目录
    this.usbFileName = usbFileName;
    this.thumb_url = thumb_url;
    this.artist = artist;
    this.album = album;
    this.path = path;
    this.is_dir = is_dir;
    this.icon = icon;
    this.root = root;
    this.mime_type = mime_type;
    this.fileSize = fileSize;

};


//add by Brad

//Brad add for refresh current init DATa when usb changed.DMP also use this function.
HiFileBrowser.RefreshUSBdata = function (usbType, usbID) {
    debugPrint("Refresh USBdate Now, HiFileBrowser.HiMedia_initPage is " + HiFileBrowser.HiMedia_initPage +
        "  usbType is " + usbType + "  usbID  :  " + usbID +
        "  CurrentID  " + HiFileBrowser.currentUsbId, DebugLevel.ALWAYS);
    if (HiFileBrowser.HiMedia_initPage == 1) {
        debugPrint("RefreshUSBdata____HiFileBrowser.HiMedia_initPage == 1");
        initFirstData(HiFileBrowser.listFocusedInd);
    }
    else if (usbType == "offline") {
        debugPrint("RefreshUSBdata_current ID  :  " + HiFileBrowser.currentUsbId);
        if (HiFileBrowser.currentUsbId.indexOf(usbID) != -1) {
            debugPrint("拔出当前U盘");
            initFirstData(HiFileBrowser.listFocusedInd);
        }
    }
    if (HiFileBrowser.isFocusList) {
        //debugE();
        HiFileBrowser.listFocusedInd = HiFileBrowser.listId.indexOf(HiFileBrowser.curType);
        goToContent();
    }
};
var m_volumeMainIterator = null;
HiFileBrowser.popDropboxStack = function () {
    debugPrint("PopDropboxStack function begin!!! length is : " + pathStack.length);
    pathStack.pop();


    debugPrint("PopDropboxStack function end!!!  length is  : " + pathStack.length);

}


function initFirstData(type) {
    debugPrint("Init Devices List!");
    HiFileBrowser.firstInit = 0;
    HiFileBrowser.usbDevices = [];
    HiFileBrowser.listFocusedInd = type;//0.all 1.phto 2.music 3.video
    HiFileBrowser.InitDeviceDatas = [];//初始化初始数据
    HiFileBrowser.firstInitFilesData = null;
    HiFileBrowser.contentsCurrentData = null;
    HiFileBrowser.currentUsbId = null;
    HiFileBrowser.disablekey = false;
    //清空栈
    pathStack = [];
//不显示黄键提示
    $("#redkeyImg").css("display", "none");
    $("#redkeyText").html("");

    if (!tv) {
        HiFileBrowser.firstInit = 1;
        var demoDlna = new HiFileData("usb_id", null, null, null, null, "/DLNA_DEVICE", false, null, "img/himedia/fileBrowser/folder_dlna.png", "2/", null);
        HiFileBrowser.InitDeviceDatas.push(demoDlna);
        var demoPicPlayer = new HiFileData("usb_id", "photo", null, null, null, "img/himedia/fileBrowser/folder_dlna.png", false, null, null, "photo" + "/", null);
        var demoVideoPlayer = new HiFileData("usb_id", "video", null, null, null, "img/himedia/fileBrowser/folder_dlna.png", false, null, null, "video" + "/", null);
        var demoMusicPlayer = new HiFileData("usb_id", "music", null, null, null, "img/himedia/fileBrowser/folder_dlna.png", false, null, null, "audio" + "/", null);
        HiFileBrowser.InitDeviceDatas.push(demoPicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoVideoPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoMusicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoPicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoVideoPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoMusicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoPicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoVideoPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoMusicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoPicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoVideoPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoMusicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoPicPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoVideoPlayer);
        HiFileBrowser.InitDeviceDatas.push(demoMusicPlayer);
        setHTML(HiFileBrowser.InitDeviceDatas);
        HiFileBrowser.contentsCurrentData = HiFileBrowser.InitDeviceDatas;
    }
    else {
        HiFileBrowser.initUSBList = getUsbList();
        debugPrint("NOW USB DEVICE IS :" + HiFileBrowser.initUSBList);
        //HiFileBrowser.getDmpDevices();
        //var returnEntr = new HiFileData(null, null, null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
        var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
        HiFileBrowser.InitDeviceDatas = [];
        //组装设备列表 顺序是先RETURN  再USB  再DROPBOX 这里组装完毕后把数组传给DLNA获取 最后DLNA处完成刷新UI.
        var tmpDeviceList = [];
        tmpDeviceList.push(returnEntr);
        if (!!HiFileBrowser.initUSBList) {
            //usbList.length-1是为了屏蔽最有一个/n后的undefine,去重后该问题不存在了
            for (var i = 0; i < HiFileBrowser.initUSBList.length; i++) {
                var tmplength = HiFileBrowser.initUSBList[i].split("/").length;
                var tmpUsbPath = HiFileBrowser.initUSBList[i].split(";")[0];
                var tmpUsbName = HiFileBrowser.initUSBList[i].split(";")[1];
                //isPVRUSB(tmpUsbPath, type);
                if (!tmpUsbName) {
                    tmpUsbName = "USB" + i;
                }
                var demoUsbDevice = new HiFileData(tmpUsbPath, null, null, null, null, "/" + tmpUsbName, false, null, "img/himedia/fileBrowser/folder_usb.png", "1/", null);

                tmpDeviceList.push(demoUsbDevice);
            }
        }
        var dropBoxEntr = new HiFileData(null, null, null, null, null, "/Dropbox", false, null, "img/himedia/fileBrowser/folder_dropbox.png", "11/", null);
        //需要添加一个网络判断条件,暂时注释掉 下版再进
        tmpDeviceList.push(dropBoxEntr);
        HiFileBrowser.getDmpDevices(tmpDeviceList);
        // setHTML(HiFileBrowser.InitDeviceDatas);

    }
    HiFileBrowser.HiMedia_initPage = 1;

}
HiFileBrowser.showUSBVOLUME = function (path, name) {
    //var returnEntr = new HiFileData(null, null, null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
    var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);

    var demoUsbDevice = new HiFileData(path, null, null, null, null, "/" + name, false, null, "img/himedia/fileBrowser/folder_usb.png", "1/", null);

    HiFileBrowser.InitDeviceDatas = [];
    HiFileBrowser.InitDeviceDatas.push(returnEntr);
    HiFileBrowser.InitDeviceDatas.push(demoUsbDevice);
    setHTML(HiFileBrowser.InitDeviceDatas);


}
HiFileBrowser.showNone = function () {
    //var returnEntr = new HiFileData(null, null, null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
    var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);

    HiFileBrowser.InitDeviceDatas = [];
    HiFileBrowser.InitDeviceDatas.push(returnEntr);
    setHTML(HiFileBrowser.InitDeviceDatas);


}
//现在的VOLUME只针对DLNA设备
var onVolumeMainIteratorEvent = function (tmpDeviceList, event) {
    //HiFileBrowser.InitDeviceDatas = [];
    if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        debugPrint("Show all the DLNA DEVICE:" + JSON.stringify(event.rows));
        //HiFileBrowser.InitDeviceDatas.push();
        //showDmpDetail(event.rows[0][0], 0, 28);
        if (event.rows.length > 0) {
            for (var i = 0; i < event.rows.length; i++) {
                var tmpDlnaEntr = new HiFileData(event.rows[i][0], null, null, null, null, "/" + event.rows[i][1], false, null, "img/himedia/fileBrowser/folder_dlna.png", "2/", null);
                tmpDeviceList.push(tmpDlnaEntr);
            }
        }
        //HiFileBrowser.InitDeviceDatas = tmpDeviceList;
        //setHTML(HiFileBrowser.InitDeviceDatas);
        getPvrVolume(tmpDeviceList);
    }
    else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {
        debugPrint("Volume______event.totalCount" + event.totalCount);
        if (event.totalCount > 0) {
            // m_volumeMainIterator.readNextRows(event.totalCount);
            m_volumeMainIterator.readNextRows(event.totalCount);
        } else {
            //没有设备时也需要初始化整个UI
            debugPrint("NO DLNA DEVICE NOW,GET PVR BEGIN");
            getPvrVolume(tmpDeviceList);

        }
    }
    else {
        debugPrint("Come into Error Type When get DLNA device!!" + event.type, DebugLevel.WARNING);
    }
};
var m_directoryIterator = null;

var showUsbFileSuccess = false;


function showDmpDetail(id, path, type, isReturn) {
    //列出文件夹
    debugPrint("showDmpDetail Function Start,param is id,path,type" + id + path + type);
    hiWebOsFrame.startLoadingForMedia(45, "showDmpDetail1");
    HiFileBrowser.files["photo"] = [];
    HiFileBrowser.files["video"] = [];
    HiFileBrowser.files["music"] = [];
    HiFileBrowser.files["file"] = [];
    HiFileBrowser.currentUsbId = id;
    HiFileBrowser.latestUsbId = id;
    if (!isReturn) {
        isReturn = false;
    }
    var param = [id, isReturn];
    try {
        m_directoryIterator = model.directory.createDirectoryIterator(
            true,
            [
                {
                    field: DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_VOLUME_ID,
                    condition: Model.FIELD_COND_EQUAL,
                    value: id
                },
                {
                    field: DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_ANCESTOR,
                    condition: Model.FIELD_COND_EQUAL,
                    value: path
                },
                {
                    field: DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_TYPE,
                    condition: Model.FIELD_COND_EQUAL,
                    value: type//all = 4+8+16+64
                }
            ],
            [
                DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_ANCESTOR, /**< ancestor */
                DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_TITLE, /**< item name */
                DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_TYPE, /**< item type (e.g. tv_launcher, video, ...), see #ENUM_SL2_TVAPI_TABLE_DIRECTORY_FIELD_TYPE for different values */
                DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_LOCATOR, /**< item URL */
                DirectoryModelDefines.SL2_TVAPI_TABLE_DIRECTORY_FIELD_FILE_SIZE/**< item URL */
            ],
            [
                {}
            ],
            onDirectoryIteratorEvent.bind(this, param));
    }
    catch (e) {
        debugE("model.directory.createDirectoryIterator  error" + e.message);
    }
    m_directoryIterator.fetchTotalCount();
    UsbTableReadStatus = 0;
    UsbCount = 0;
    UsbTableReadCnt = 0;
    UsbTableReadCnt_plus = 0;
    HiFileBrowser.firstInit = 1;
    HiFileBrowser.curPath = path;
    pathStack.push(HiFileBrowser.curPath);
    debugPrint("showDmpDetail Function end and the pathStack  is :" + pathStack);


}

var UsbCount = 0;
var UsbTableReadStatus = 0;
var UsbTableReadCnt = 0;
var UsbTableReadCnt_plus = 0;
var onDirectoryIteratorEvent = function (param, event) {
        ////hide("dropboxloading");
        debugPrint("onDirectoryIteratorEvent_begin");
        // var usbDetail=[];
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            debugPrint("EVENT_TYPE_ROWS_READ");
            function readUsbTable() {
//                debugPrint("_______________________readFucntion" + JSON.stringify(event.rows));
                for (var i = 0; i < event.rows.length; i++) {
                    var tempType = event.rows[i][2];
                    var tempName = event.rows[i][1];
                    var tempPath = event.rows[i][3];

                    if (tempType == "container") {
                        HiFileBrowser.files["file"].push(new HiFileData(param[0], tempName, null, null, null, tempPath, true, null, null, "file" + "/", event.rows[i][4]));
                       // HiFileBrowser.contentsCurrentData.push(new HiFileData(param[0], tempName, null, null, null, tempPath, true, null, null, "file" + "/", event.rows[i][4]));
                    }
                    else if (tempType == "image") {
                        HiFileBrowser.files["photo"].push(new HiFileData(param[0], tempName, null, null, null, tempPath, false, null, null, "photo" + "/", event.rows[i][4]));
                        //debugPrint(event.rows[i][5] + "____phto_thumbnail");
                       // HiFileBrowser.contentsCurrentData.push(new HiFileData(param[0], tempName, null, null, null, tempPath, false, null, null, "photo" + "/", event.rows[i][4]));
                    }
                    else if (tempType == "audio") {
                        HiFileBrowser.files["music"].push(new HiFileData(param[0], tempName, null, null, null, tempPath, false, null, null, "audio" + "/", event.rows[i][4]));

                        //HiFileBrowser.contentsCurrentData.push(new HiFileData(param[0], tempName, null, null, null, tempPath, false, null, null, "audio" + "/", event.rows[i][4]));
                    }
                    else if (tempType == "video") {
                        HiFileBrowser.files["video"].push(new HiFileData(param[0], tempName, null, null, null, tempPath, false, null, null, "video" + "/", event.rows[i][4]));

                       // HiFileBrowser.contentsCurrentData.push(new HiFileData(param[0], tempName, null, null, null, tempPath, false, null, null, "video" + "/", event.rows[i][4]));
                    }

                }
                HiFileBrowser.files["file"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["file"]);
                HiFileBrowser.files["photo"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["photo"]);
                HiFileBrowser.files["music"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["music"]);
                HiFileBrowser.files["video"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["video"]);
            }

            if (UsbTableReadStatus == 0 || UsbTableReadStatus == 4) {
                //debugPrint("_____test_______READ_BEGIN____________________________________" + UsbTableReadStatus);


                HiFileBrowser.contentsCurrentData = [];
                if (event.rows.length > 0) {
                    var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
                    // var dropboxEntr = new HiFileData(null, null, null, null, null, "/dropbox", false, null, "img/himedia/fileBrowser/folder_dlna.png", "11/", null);
                    HiFileBrowser.contentsCurrentData.push(returnEntr);
                    readUsbTable();
                }
//                    chl_g_channelList.push(channelList);
                if (UsbTableReadStatus == 4) {
                    UsbTableReadStatus = 2;
                }
            }
            else if (UsbTableReadStatus == 1 || UsbTableReadStatus == 3) {
                // debugPrint("_____test_______READ_ING____________________________________" + UsbTableReadStatus);
                readUsbTable();
                if (UsbTableReadStatus == 3) {
                    UsbTableReadStatus = 2;
                }
            }
            if (UsbTableReadStatus == 2) {

                debugPrint("Himedia___showusbcontent__curPath:" + HiFileBrowser.curPath);
                HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]).concat(HiFileBrowser.files["music"]).concat(HiFileBrowser.files["photo"]);
                debugPrint("FINISH READ_____USB:" + HiFileBrowser.contentsCurrentData.length);

                hiWebOsFrame.endLoading("showDMPDetail1");
                setHTML(HiFileBrowser.contentsCurrentData);
                if (!!param[1]) {
                    HiFileBrowser.resumeFocus();
                }
            }
            if (UsbTableReadCnt > 0) {
                debugPrint(UsbTableReadCnt + "_______" + UsbCount);
                UsbTableReadCnt--;
                UsbTableReadCnt_plus++;
                UsbTableReadStatus = 1;
                if (UsbTableReadCnt == 0) {
                    UsbTableReadStatus = 3;
                }
                debugPrint("read next ROWS______________________________");
                m_directoryIterator.seekToRow(HiFileBrowser.table_read_once * UsbTableReadCnt_plus, TableIterator.SEEK_SET);
                if (UsbTableReadCnt != 0 || (UsbCount % HiFileBrowser.table_read_once == 0))
                    m_directoryIterator.readNextRows(HiFileBrowser.table_read_once);
                else
                    m_directoryIterator.readNextRows(UsbCount % HiFileBrowser.table_read_once);
            }

        }


        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

            UsbCount = event.totalCount;
            debugPrint("UsbCount" + UsbCount);
            if (UsbCount > 0) {
                if (UsbCount > 500) {
                    UsbCount = 500;
                }
                if (UsbCount > HiFileBrowser.table_read_once) {
                    UsbTableReadStatus = 0;
                    if (UsbCount % HiFileBrowser.table_read_once == 0) {
                        UsbTableReadCnt = Math.floor(UsbCount / HiFileBrowser.table_read_once) - 1;
                    }
                    else {
                        UsbTableReadCnt = Math.floor(UsbCount / HiFileBrowser.table_read_once);
                    }
                    m_directoryIterator.seekToRow(0, TableIterator.SEEK_SET);
                    m_directoryIterator.readNextRows(HiFileBrowser.table_read_once);

                }
                else {
                    UsbTableReadStatus = 4;
                    debugPrint("UsbCount:" + UsbCount);
                    m_directoryIterator.seekToRow(0, TableIterator.SEEK_SET);
                    m_directoryIterator.readNextRows(UsbCount);
                }
            }

            else {
                //没有资源时直接进入。
                UsbTableReadStatus = 0;
                UsbCount = 0;
                UsbTableReadCnt = 0;
                UsbTableReadCnt_plus = 0;
                HiFileBrowser.firstInit = 1;
                // HiFileBrowser.curPath = path;

                var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
                //HiFileBrowser.contentsCurrentData.push(returnEntr);
                hiWebOsFrame.endLoading("showDmpDetail1");
                setHTML([returnEntr]);
            }


        }
        else if (event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {
            debugPrint('seek to row index = ' + event.result);
            // m_directoryIterator.readNextRows(HiFileBrowser.table_read_once);
        }
        else {
            debugPrint("oother Type________________" + event.type);
        }
        //m_directoryIterator.readNextRows(90);

    }
    ;
var m_usbIterator = null;
function showUsbDetail2(path, type, isReturn) {
    debugPrint("Show USB Detail Function Start,param is path,type" + path + type);
    hiWebOsFrame.startLoadingForMedia(45, "showUSBDetail2");
    HiFileBrowser.files["photo"] = [];
    HiFileBrowser.files["video"] = [];
    HiFileBrowser.files["music"] = [];
    HiFileBrowser.files["file"] = [];
    HiFileBrowser.files["pvr"] = [];
    HiFileBrowser.currentUsbId = path;
    HiFileBrowser.latestUsbId = path;
    if (!isReturn) {
        isReturn = false;
    }
    var param = [path, isReturn];
    try {
        m_usbIterator = model.usb.creatUSBTableMainIterator(
            true,
            [

                {
                    field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH,
                    condition: Model.FIELD_COND_EQUAL,
                    value: path
                },
                {
                    field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE,
                    condition: Model.FIELD_COND_EQUAL,
                    value: type
                }
            ],
            [
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, /**< ancestor */
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE, /**< item name */
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR
            ],
            [
                { field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, direction: 1 }
            ],
            onUSBIteratorEvent.bind(this, param));
    }
    catch (ex) {
        debugE("model.usb.creatUSBTableMainIterator Error" + ex.message);
    }
    m_usbIterator.fetchTotalCount();


}

//****************Add PVR function***begin**************/
function getPvrVolume(tmpDeviceList) {
    debugPrint("getPvrVolume function begin");
    var usbList = getUsbList();
    //组装设备列表 顺序是先RETURN  再USB  再DROPBOX
    //这里组装完毕后把数组传给DLNA获取 DLNA获取完后再去取PVR
    // 最后在PVR处完成刷新UI.
    debugPrint("usbList now is :" + usbList);
    if (!!usbList) {
        debugPrint("usbList now is :" + usbList);
        //usbList.length-1是为了屏蔽最有一个/n后的undefine,去重后该问题不存在了
        for (var i = 0; i < usbList.length; i++) {
            //var tmplength = usbList[i].split("/").length;
            var tmpUsbPath = usbList[i].split(";")[0];
            //var tmpUsbName = usbList[i].split(";")[1];
            isPVRUSB(tmpUsbPath, tmpDeviceList);

        }
    }
    else {
        //无U盘的情况
        HiFileBrowser.InitDeviceDatas = tmpDeviceList;
        setHTML(HiFileBrowser.InitDeviceDatas);
    }
}

var m_isPvrIterator = null;
function isPVRUSB(path, tmpDeviceList) {
    var paramPvr = [path, tmpDeviceList];
    debugPrint("Test PVR files from one USB,param is path,type");
    if (HiFileBrowser.listFocusedInd == 1 || HiFileBrowser.listFocusedInd == 3) {
        debugPrint("current Time need not get PVR files!" + HiFileBrowser.listFocusedInd);
        HiFileBrowser.InitDeviceDatas = paramPvr[1];
        setHTML(HiFileBrowser.InitDeviceDatas);
        return false;

    }
    try {
        m_isPvrIterator = model.usb.creatUSBTableMainIterator(
            true,
            [

                {
                    field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH,
                    condition: Model.FIELD_COND_EQUAL,
                    value: path + "pvr/"
                },
                {
                    field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE,
                    condition: Model.FIELD_COND_EQUAL,
                    value: 4
                }
            ],
            [
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, /**< ancestor */
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE, /**< item name */
                UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR
            ],
            [
                { field: UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH, direction: 1 }
            ],
            onIsPvrIteratorEvent.bind(this, paramPvr));
    }
    catch (ex) {
        debugE("model.usb.creatUSBTableMainIterator Error" + ex.message);
    }
    m_isPvrIterator.fetchTotalCount();


}

var onIsPvrIteratorEvent = function (paramPvr, event) {
    debugPrint("onIsPvrIteratorEvent begin and path is : " + paramPvr[0]);
    if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        var PvrCount = event.totalCount;
        debugPrint("FETCH TOTAL CONT ______________________________" + PvrCount);
        if (PvrCount > 0) {
            debugPrint("there are PVR files in the  path : " + paramPvr[0], DebugLevel.ALWAYS);
            var demoPVRDevice = new HiFileData(paramPvr[0] + "pvr/", null, null, null, null, "/" + "PVR", false, null, "img/himedia/fileBrowser/pvr.png", "9/", null);
            paramPvr[1].push(demoPVRDevice);
            HiFileBrowser.InitDeviceDatas = paramPvr[1];
            setHTML(HiFileBrowser.InitDeviceDatas);

        }
        else {
            debugPrint("there are not PVR flies in  path : " + paramPvr[0], DebugLevel.ALWAYS);
            HiFileBrowser.InitDeviceDatas = paramPvr[1];
            setHTML(HiFileBrowser.InitDeviceDatas);
        }


    }
    else {
        debugPrint("[onIsPvrIteratorEvent]other Type_________" + event.type);
    }
};


//****************Add PVR function***end****************/

var onUSBIteratorEvent = function (param, event) {
        debugPrint("onUSBIteratorEvent and path is : " + param[0]);
        if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            function readUsbTable() {
                debugPrint("readUsbTable function begin!");
                for (var i = 0; i < event.rows.length; i++) {
                    var tempType = event.rows[i][1];
                    var tempName = event.rows[i][0];
                    debugPrint("readUsbTable function begin!" + tempType);
                    if (tempType == 0) {
                        HiFileBrowser.files["file"].push(new HiFileData(param[0], tempName, null, null, null, param[0] + tempName + "/", true, null, null, "file" + "/", null));
                    }
                    else if (tempType == 1) {
                        HiFileBrowser.files["photo"].push(new HiFileData(param[0], tempName, null, null, null, param[0] + tempName, false, null, null, "photo" + "/", null));
                    }
                    else if (tempType == 3) {
                        HiFileBrowser.files["music"].push(new HiFileData(param[0], tempName, null, null, null, param[0] + tempName, false, null, null, "audio" + "/", null));
                    }
                    else if (tempType == 2) {
                        HiFileBrowser.files["video"].push(new HiFileData(param[0], tempName, null, null, null, param[0] + tempName, false, null, null, "video" + "/", null));
                    }
                    else if (tempType == 4) {
                        HiFileBrowser.files["pvr"].push(new HiFileData(param[0], tempName, null, null, null, param[0] + tempName, false, null, null, "pvr" + "/", null));

                    }

                }
                //对PVR进行排序
                if (HiFileBrowser.files["pvr"].length > 1) {
                    HiFileBrowser.files["pvr"].sort(function (a, b) {
                        debugPrint("a.usbFileName    " + a.usbFileName.split(".pvr")[0].replace("_", "") + "    b.usbFileName   " + b.usbFileName.split(".pvr")[0].replace("_", ""));
                        return (b.usbFileName.split(".pvr")[0].replace("_", "") - a.usbFileName.split(".pvr")[0].replace("_", ""));
                    });
                }
                //排序

                HiFileBrowser.files["file"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["file"]);
                HiFileBrowser.files["photo"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["photo"]);
                HiFileBrowser.files["music"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["music"]);
                HiFileBrowser.files["video"] = HiFileBrowser.orderHiFileData(HiFileBrowser.files["video"]);


            }

            debugPrint("UsbTableReadStatus is :" + UsbTableReadStatus);
            if (UsbTableReadStatus == 0 || UsbTableReadStatus == 4) {
                HiFileBrowser.contentsCurrentData = [];
                if (event.rows.length > 0) {
                    var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
                    HiFileBrowser.contentsCurrentData.push(returnEntr);
                    readUsbTable();
                }
                if (UsbTableReadStatus == 4) {
                    UsbTableReadStatus = 2;
                }
            }
            else if (UsbTableReadStatus == 1 || UsbTableReadStatus == 3) {
                readUsbTable();
                if (UsbTableReadStatus == 3) {
                    UsbTableReadStatus = 2;
                }
            }
            if (UsbTableReadStatus == 2) {
                UsbTableReadStatus = 0;
                UsbCount = 0;
                UsbTableReadCnt = 0;
                UsbTableReadCnt_plus = 0;
                HiFileBrowser.firstInit = 1;
                HiFileBrowser.curPath = param[0];
                pathStack.push(HiFileBrowser.curPath);
                debugPrint("pathstack is : " + pathStack);
                if (HiFileBrowser.currentDevice == 3) {
                    if (HiFileBrowser.files["pvr"].length > 0) {
                        $("#redkeyImg").css("display", "block");
                        //wfy $("#redkeyText").html(hiMediaLanguages[cLanguage_himedia].delete);
                        $("#redkeyText").html(pvrLang[getCurrentLan()]["Delete"]);
                    }
                    else {
                        $("#redkeyImg").css("display", "none");
                        //wfy $("#redkeyText").html(hiMediaLanguages[cLanguage_himedia].delete);
                        $("#redkeyText").html("");
                    }
                    HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["pvr"]);
//                    HiFileBrowser.contentsCurrentData.sort(function (a, b) {
//                        debugPrint("a.usbFileName    " + a.usbFileName + "    b.usbFileName   " + b.usbFileName)
//                        return (a.usbFileName - b.usbFileName);
//                    });
                }
                else
                    HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]).concat(HiFileBrowser.files["music"]).concat(HiFileBrowser.files["photo"]);

                hiWebOsFrame.endLoading("showUSBDetail2");
                setHTML(HiFileBrowser.contentsCurrentData);
                if (!!param[1]) {
                    HiFileBrowser.resumeFocus();
                }
                // m_usbIterator.disconnect();
            }
            if (UsbTableReadCnt > 0) {
                debugPrint(UsbTableReadCnt + "_______" + UsbCount);
                UsbTableReadCnt--;
                UsbTableReadCnt_plus++;
                UsbTableReadStatus = 1;
                if (UsbTableReadCnt == 0) {
                    UsbTableReadStatus = 3;
                }
                debugPrint("read next ROWS______________________________");
                m_usbIterator.seekToRow(HiFileBrowser.table_read_once * UsbTableReadCnt_plus, TableIterator.SEEK_SET);
                if (UsbTableReadCnt != 0 || (UsbCount % HiFileBrowser.table_read_once == 0))
                    m_usbIterator.readNextRows(HiFileBrowser.table_read_once);
                else
                    m_usbIterator.readNextRows(UsbCount % HiFileBrowser.table_read_once);
            }

        }


        else if (event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

            UsbCount = event.totalCount;
            debugPrint("FETCH TOTAL CONT ______________________________" + UsbCount);
            if (UsbCount > 0) {
                if (UsbCount > 500) {
                    UsbCount = 500;
                }
                if (UsbCount > HiFileBrowser.table_read_once) {
                    UsbTableReadStatus = 0;
                    if (UsbCount % HiFileBrowser.table_read_once == 0) {
                        UsbTableReadCnt = Math.floor(UsbCount / HiFileBrowser.table_read_once) - 1;
                    }
                    else {
                        UsbTableReadCnt = Math.floor(UsbCount / HiFileBrowser.table_read_once);
                    }
                    m_usbIterator.seekToRow(0, TableIterator.SEEK_SET);
                    m_usbIterator.readNextRows(HiFileBrowser.table_read_once);
                }
                else {
                    UsbTableReadStatus = 4;
                    m_usbIterator.seekToRow(0, TableIterator.SEEK_SET);
                    m_usbIterator.readNextRows(UsbCount);
                }
            }
            else {
                //没有资源时直接进入。
                UsbTableReadStatus = 0;
                UsbCount = 0;
                UsbTableReadCnt = 0;
                UsbTableReadCnt_plus = 0;
                HiFileBrowser.firstInit = 1;
                HiFileBrowser.curPath = param[0];
                pathStack.push(HiFileBrowser.curPath);
                debugPrint("pathstack is : " + pathStack);
                var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
                //HiFileBrowser.contentsCurrentData.push(returnEntr);
                hiWebOsFrame.endLoading("showUSBDetail2");
                HiFileBrowser.contentsCurrentData = [returnEntr];
                setHTML([returnEntr]);
            }


        }
        else if (event.type == TableIterator.EVENT_TYPE_SEEK_TO_ROW) {
            debugPrint('seek to row index = ' + event.result);
            // m_usbIterator.readNextRows(HiFileBrowser.table_read_once);
        }
        else {
            debugPrint("oother Type________________" + event.type);
        }
        //m_directoryIterator.readNextRows(90);

    }
    ;


function readFileHideLoading() {
    $("#msgbox_launcher").html("");
    //   hiwebosframeLauncher.setDialog(false);
}

//没有文件可以进入的提示
function doNoFileAlert_launcher() {
    Dialog_launcher.type = 2;
    Dialog_launcher.param = {

        image: 'img/himeida/fileBrowser/alert.png',
        text1: "No file!!",
        text2: ""
    };
    hiwebosframeLauncher.setDialog(true);
    $("#msgbox_launcher").html(Dialog_launcher.get());
    setTimeout(function () {
        $("#msgbox_launcher").html("");
        hiwebosframeLauncher.setDialog(false);

    }, 2000);
}


function goDetail() {
    debugPrint("goDetail Function begin and the param HiFileBrowser.curFile  is   :   " + HiFileBrowser.curFile + JSON.stringify(HiFileBrowser.firstInitFilesData[HiFileBrowser.curFile]));
    var file = HiFileBrowser.firstInitFilesData[HiFileBrowser.curFile];
    HiFileBrowser.lastFocusFile.push(HiFileBrowser.curFile);
    HiFileBrowser.lastFocusPage.push(HiFileBrowser.curPage);
    debugPrint("goDetail Function: Mime_type is" + file.mime_type.split("/")[0]);
    switch (file.mime_type.split("/")[0]) {
        case "10":
            returnEvent();
            //这时候的状态需要更新
            HiFileBrowser.HiMedia_initPage = 1;
            break;
        case "11":
            HiFileBrowser.currentDevice = 2;
            //           getAllDropboxData();
            if (myDropbox.checkLoginState())
                getAllDropboxData();
            else
                try {
                    debugPrint("________________login?");
                    myDropbox.login();
                }
                catch (e) {
                    debugE(e.message);
                }


            break;
        case "1":
            HiFileBrowser.currentDevice = 0;
            debugPrint("USB___" + HiFileBrowser.listFocusedInd);
            switch (parseInt(HiFileBrowser.listFocusedInd)) {
                case 0:
                    debugPrint("USB___" + file.usbFileId);
                    showUsbDetail2(file.usbFileId, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_ALL);
                    //showDmpDetail(file.usbFileId, null, 28);
                    break;
                case 1:
                    debugPrint("HiFileBrowser.curType");
                    changeListStyle(false, HiFileBrowser.curType, "photo");
                    debugPrint("HiFileBrowser.curType" + HiFileBrowser.curType);
                    HiFileBrowser.curType = "photo";
                    pathStack = ["photo"];
                    showUsbDetail2(file.usbFileId, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PHOTO);
                    break;
                case 3:
                    changeListStyle(false, HiFileBrowser.curType, "music");
                    HiFileBrowser.curType = "music";
                    pathStack = ["music"];
                    showUsbDetail2(file.usbFileId, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_MUSIC);
                    break;
                case 2:
                    changeListStyle(false, HiFileBrowser.curType, "video");
                    HiFileBrowser.curType = "video";
                    pathStack = ["video"];
                    showUsbDetail2(file.usbFileId, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO);

                    break;
                default :
                    break;

            }
            break;
        case "2":
            debugPrint("Open DLNA Device with type = " + HiFileBrowser.listFocusedInd);
            HiFileBrowser.currentDevice = 1;
            switch (parseInt(HiFileBrowser.listFocusedInd)) {
                case 0:
                    showDmpDetail(file.usbFileId, 0, 28);
                    break;
                case 1:
                    changeListStyle(false, HiFileBrowser.curType, "photo");
                    HiFileBrowser.curType = "photo";
                    pathStack = ["photo"];
                    showDmpDetail(file.usbFileId, 0, 16);
                    break;
                case 3:
                    debugPrint("music_______________________");
                    changeListStyle(false, HiFileBrowser.curType, "music");
                    HiFileBrowser.curType = "music";
                    pathStack = ["music"];
                    showDmpDetail(file.usbFileId, 0, 8);
                    break;
                case 2:
                    debugPrint("video_______________________");
                    changeListStyle(false, HiFileBrowser.curType, "video");
                    HiFileBrowser.curType = "video";
                    pathStack = ["video"];
                    showDmpDetail(file.usbFileId, 0, 4);
                    break;
                default :
                    break;

            }
            break;
        case "9":
            HiFileBrowser.currentDevice = 3;
//            debugPrint("PVR_ID" + file.usbFileId);
//            showPvrDetail(file.usbFileId);
            debugPrint("now click pvr to get detail", DebugLevel.ALWAYS);
            showUsbDetail2(file.usbFileId, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR);
            break;
        default :
            break;

    }


}

//add by Brad,just for USB content
function playUsbContent() {
    debugPrint("test_length" + HiFileBrowser.contentsCurrentData.length);

    if (HiFileBrowser.contentsCurrentData.length > 0) {
        debugPrint(JSON.stringify(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile]) + "_____(currentData user choose)");
        switch (HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].mime_type) {
            case "file/":
                HiFileBrowser.lastFocusFile.push(HiFileBrowser.curFile);
                HiFileBrowser.lastFocusPage.push(HiFileBrowser.curPage);
                if (HiFileBrowser.currentDevice == 0)
                    switch (parseInt(HiFileBrowser.listFocusedInd)) {
                        case 0:
                            showUsbDetail2(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_ALL);
                            break;
                        case 1:
                            showUsbDetail2(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PHOTO);
                            break;
                        case 3:
                            showUsbDetail2(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_MUSIC);
                            break;
                        case 2:
                            showUsbDetail2(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO);
                            break;
                        default :
                            break;
                    }
                else if (HiFileBrowser.currentDevice == 1)
                    switch (parseInt(HiFileBrowser.listFocusedInd)) {
                        case 0:
                            showDmpDetail(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].usbFileId, HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, 28);
                            break;
                        case 1:
                            showDmpDetail(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].usbFileId, HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, 16);
                            break;
                        case 3:
                            showDmpDetail(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].usbFileId, HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, 8);
                            break;
                        case 2:
                            showDmpDetail(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].usbFileId, HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, 4);
                            break;
                        default :
                            break;
                    }
                else if (HiFileBrowser.currentDevice == 3)
                    showUsbDetail2(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR);
                break;
            case "photo/":
                //封装photo数据
                var photoList = [];
                var photoIndex = 0;
                for (var i = 0; i < HiFileBrowser.files["photo"].length; i++) {
                    photoList.push({"picUrl": HiFileBrowser.files["photo"][i].path, "picName": HiFileBrowser.files["photo"][i].usbFileName});
                    if (HiFileBrowser.files["photo"][i].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
                        photoIndex = i;
                    }
                }
                openPlayer("photo", photoList, photoIndex);
                break;
            case "video/":

                //封装photo数据
                var videoList = [];
                var videoIndex = 0;
                debugPrint(HiFileBrowser.files["video"].length);
                for (var j = 0; j < HiFileBrowser.files["video"].length; j++) {
                    debugPrint("video path_______________" + HiFileBrowser.files["video"][j].path);
                    //需要区分本地视频和网络视频
                    if (HiFileBrowser.currentDevice == 0)
                        videoList.push({"videoUrl": "file://" + HiFileBrowser.files["video"][j].path,
                            "videoName": HiFileBrowser.files["video"][j].usbFileName,
                            "fileSize": HiFileBrowser.files["video"][j].fileSize});
                    else
                        videoList.push({"videoUrl": HiFileBrowser.files["video"][j].path,
                            "videoName": HiFileBrowser.files["video"][j].usbFileName,
                            "fileSize": HiFileBrowser.files["video"][j].fileSize});
                    if (HiFileBrowser.files["video"][j].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
                        videoIndex = j;
                    }
                }
                pvrIsPlaying = false;
                openPlayer("video", videoList, videoIndex);
                break;
            case "pvr/":
                //封装photo数据
                var pvrList = [];
                var pvrIndex = 0;
                debugPrint(HiFileBrowser.files["pvr"].length);
                for (var j = 0; j < HiFileBrowser.files["pvr"].length; j++) {
                    debugPrint("pvr path_______________" + HiFileBrowser.files["pvr"][j].path);
                    //需要区分本地视频和网络视频
                    if (HiFileBrowser.currentDevice == 3)
                        pvrList.push({"videoUrl": "file://" + HiFileBrowser.files["pvr"][j].path,
                            "videoName": HiFileBrowser.files["pvr"][j].usbFileName,
                            "fileSize": HiFileBrowser.files["pvr"][j].fileSize});

                    if (HiFileBrowser.files["pvr"][j].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
                        pvrIndex = j;
                    }
                }
                pvrIsPlaying = true;
                openPlayer("video", pvrList, pvrIndex);
                break;
            case "audio/":
                //封装photo数据
                debugPrint("come in music" + HiFileBrowser.files["music"].length);
                var audioList = [];
                var audioIndex = 0;
                for (var k = 0; k < HiFileBrowser.files["music"].length; k++) {
                    //需要区分本地视频和网络视频
                    if (HiFileBrowser.currentDevice == 0)
                        audioList.push({"audioUrl": "file://" + HiFileBrowser.files["music"][k].path,
                            "audioName": HiFileBrowser.files["music"][k].usbFileName,
                            "audioThumb": HiFileBrowser.files["music"][k].thumb_url,
                            "audioArtist": HiFileBrowser.files["music"][k].artist,
                            "audioAlbum": HiFileBrowser.files["music"][k].album});
                    else
                        audioList.push({"audioUrl": HiFileBrowser.files["music"][k].path,
                            "audioName": HiFileBrowser.files["music"][k].usbFileName,
                            "audioThumb": HiFileBrowser.files["music"][k].thumb_url,
                            "audioArtist": HiFileBrowser.files["music"][k].artist,
                            "audioAlbum": HiFileBrowser.files["music"][k].album});
                    if (HiFileBrowser.files["music"][k].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
                        audioIndex = k;
                    }
                }
                openPlayer("music", audioList, audioIndex);
                break;
            case "10/":
                returnEvent();
                break;
            default :
                break;
        }
        // debugPrint(HiFileBrowser.curFile+"/n");
        // debugPrint(JSON.stringify(contentsCurrentData[HiFileBrowser.curFile]));
    }


}


function show(id) {
    $("#" + id).css("display", "block");
    //debugPrint("!!!!!!!!!!!!!!!");
    hiwebosframeLauncher.setDialog(true);
}

function hide(id) {
    $("#" + id).css("display", "none");
    hiwebosframeLauncher.setDialog(false);
}


/**
 *
 */
function initHiMedia(type) {
    //关闭弹出框

    //debugPrint($("#homebody").css("visibility") + "_____________##########1#################___");
    $("#msgbox_launcher").html("");
    // hiwebosframeLauncher.setDialog(false);
    //playMarquee_launcher();
    //HImedia的多语言暂时不处理
    // if (!cLanguage_himedia) {

    // }
    cLanguage_himedia = getCurrentLan();
    debugPrint("cLanguage_himedia" + cLanguage_himedia);
    $("#all-title").html(hiMediaLanguages[cLanguage_himedia]["All"]);
    $("#video-title").html(hiMediaLanguages[cLanguage_himedia]["Video"]);
    $("#music-title").html(hiMediaLanguages[cLanguage_himedia]["Music"]);
    $("#photo-title").html(hiMediaLanguages[cLanguage_himedia]["Picture"]);
    $("#return-title").html(hiMediaLanguages[cLanguage_himedia]["Return"]);
    // debugPrint($("#homebody").css("visibility") + "_____________##########2#################___");

    HiFileBrowser.firstInit = 0;
    debugPrint("clear volume!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    HiFileBrowser.InitDeviceDatas = [];
    HiFileBrowser.listFocusedInd = type;
    HiFileBrowser.curType = HiFileBrowser.listId[HiFileBrowser.listFocusedInd];
    $("#" + HiFileBrowser.listId[0]).attr("class", "dropboxleft_unfocus");
    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd]).attr("class", "dropboxleft_focus");
    //DBG_ALWAYS("img/himedia/fileBrowser/focus-" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");
    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/focus-" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");
    HiFileBrowser.files["photo"] = [];
    HiFileBrowser.files["video"] = [];
    HiFileBrowser.files["music"] = [];
    HiFileBrowser.files["file"] = [];
    //注册deletePVR的回调函数。
    try {
        model.usb.deletePVRHandler = deletePVRHandler;
    }
    catch (ex) {
        debugE(ex.message);
    }
//    if(!checkLoginstate()) {
//        changeLoginState(false);
//        if(isConnected2()) {
//            //Login();
//            MyDropbox.login();
//        }
//        setHTML(null);
//        return;
//    }
//    else {
    //changeLoginState(true);
    // debugPrint($("#homebody").css("visibility") + "_____________#########3##################___");

    showPanel();

    //  debugPrint($("#homebody").css("visibility") + "_____________#########4##################___");

    //  goToContent();
//    }
}

function showPanel() {

    HiFileBrowser.isOpen = true;

    initFirstData(HiFileBrowser.listFocusedInd);
}


function clearPanel() {

    $("#folderpath").html("");
    $("#filepath").html("");
    setScroll(0, 0);
    //$("#dropboxmiddle").html("");
    setHTML(null);
    changeListStyle(false, HiFileBrowser.curType, "all");
}

function clearHiFileBrowser() {
    HiFileBrowser.curFile = 0;
    HiFileBrowser.curPage = 0;
    HiFileBrowser.curPath = "";
    HiFileBrowser.curType = "all";
    HiFileBrowser.totalPage = 0;
    HiFileBrowser.totalFile = 0;
    HiFileBrowser.issearchdata = false;
    HiFileBrowser.files = {};
    HiFileBrowser.fileHTML = [];
    HiFileBrowser.sliderHeight = 0;
    HiFileBrowser.sliderTop = 0;
    HiFileBrowser.thumbnailxhrs = [];

    HiFileBrowser.isFocusList = false;
    HiFileBrowser.listFocusedInd = 0;
    HiFileBrowser.URLs = {
        photo: [],
        music: [],
        video: [],
        currentIndex: [],
        currentURLs: []
    };
    HiFileBrowser.deltaData = [];
    pathStack = [];


}

function resetHiFileBrowser() {
    HiFileBrowser.curFile = 0;
    HiFileBrowser.curPage = 0;
//    HiFileBrowser.curPath = "";
//    HiFileBrowser.curType = "All";
//    HiFileBrowser.totalPage = 0;
//    HiFileBrowser.totalFile = 0;
//    HiFileBrowser.issearchdata = false;
//    HiFileBrowser.files = {};
//    HiFileBrowser.fileHTML = [];
//    HiFileBrowser.sliderHeight = 0;
//    HiFileBrowser.sliderTop = 0;
//    HiFileBrowser.thumbnailxhrs = [];

//    setFilePath(null);
}


function changeListStyle(iscurSelect, lst, cur) {
    if (!iscurSelect) {
        $("#" + lst).attr("class", "dropboxleft_unfocus");
        $("#" + cur).attr("class", "dropboxleft_focus");

    }
    else {
        $("#" + lst).attr("class", "dropboxleft_unfocus");
        $("#" + cur).attr("class", "dropboxleft_select");
    }
}

function getAllDropboxData() {
    //清空Stack
    pathStack = [];
    HiFileBrowser.files = {};

    debugPrint("getAllDropboxData Function begin!!!");
    hiWebOsFrame.startLoadingForMedia(45, "getAllDropboxData");
    myDropbox.goHome(showDropboxData);
    HiFileBrowser.curPath = "home";
    pathStack.push(HiFileBrowser.curPath);

}
function showDropboxData(deltadata) {
    HiFileBrowser.currentDevice = 2;//设备分类
    HiFileBrowser.firstInit = 4;//初始化页面分类
    debugPrint("showDropboxData function begin:" + deltadata.contents.length);
    var deltaDataLength = deltadata.contents.length;
    HiFileBrowser.contentsCurrentData = [];
    HiFileBrowser.files["file"] = [];
    HiFileBrowser.files["photo"] = [];
    HiFileBrowser.files["video"] = [];
    HiFileBrowser.files["music"] = [];
    //不显示黄键提示
    $("#redkeyImg").css("display", "block");
    $("#redkeyText").html(hiMediaLanguages[cLanguage_himedia]["Log out"]);
    var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
    HiFileBrowser.contentsCurrentData.push(returnEntr);
    if (deltaDataLength > 0) {

        try {
            for (var i = 0; i < deltaDataLength; i++) {
                debugPrint(deltadata.contents.length);
                var tempIsdir = deltadata.contents[i].is_dir;
                if (!tempIsdir)
                    var tempType = deltadata.contents[i].mime_type.split("/")[0];
                var tempName = getFileName(deltadata.contents[i]);
//            this.usbFileId = usbFileId;//仅在刷新设备时用于存放ID使用  ,对于file用于存放上级目录
//            this.usbFileName = usbFileName;
//            this.thumb_url = thumb_url;
//            this.artist = artist;
//            this.album = album;
//            this.path = path;
//            this.is_dir = is_dir;
//            this.icon = icon;
//            this.root = root;
//            this.mime_type = mime_type;
//            this.fileSize = fileSize;
                if (tempIsdir)
                    HiFileBrowser.files["file"].push(new HiFileData(deltadata.contents[i].root, tempName, null, null, null, deltadata.contents[i].path, tempIsdir, null, null, "file/", null));
                else
                    switch (tempType) {
                        case "video":
                            HiFileBrowser.files["video"].push(new HiFileData(deltadata.contents[i].root, tempName, null, null, null, deltadata.contents[i].path, tempIsdir, null, null, tempType + "/", deltadata.contents[i].fileSize));
                            break;
                        case "audio":
                            HiFileBrowser.files["music"].push(new HiFileData(deltadata.contents[i].root, tempName, null, null, null, deltadata.contents[i].path, tempIsdir, null, null, tempType + "/", deltadata.contents[i].fileSize));
                            break;
                        case "image":
                            HiFileBrowser.files["photo"].push(new HiFileData(deltadata.contents[i].root, tempName, null, null, null, deltadata.contents[i].path, tempIsdir, null, null, tempType + "/", deltadata.contents[i].fileSize));
                            break;
                        default :
                            break;
                    }


            }
            switch (parseInt(HiFileBrowser.listFocusedInd)) {
                case 0:
                    HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]).concat(HiFileBrowser.files["music"]).concat(HiFileBrowser.files["photo"]);
                    //HiFileBrowser.files[HiFileBrowser.curPath] = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]).concat(HiFileBrowser.files["music"]).concat(HiFileBrowser.files["photo"]);
                    break;
                case 1:
                    HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["photo"]);
                    //HiFileBrowser.files[HiFileBrowser.curPath] = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["photo"]);

                    break;
                case 3:
                    HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["music"]);
                    //HiFileBrowser.files[HiFileBrowser.curPath] = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["music"]);

                    break;
                case 2:
                    HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]);
                    //HiFileBrowser.files[HiFileBrowser.curPath] = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]);

                    break;
                default :
                    // HiFileBrowser.contentsCurrentData = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]).concat(HiFileBrowser.files["music"]).concat(HiFileBrowser.files["photo"]);
                    // HiFileBrowser.files[HiFileBrowser.curPath] = HiFileBrowser.contentsCurrentData.concat(HiFileBrowser.files["file"]).concat(HiFileBrowser.files["video"]).concat(HiFileBrowser.files["music"]).concat(HiFileBrowser.files["photo"]);

                    break;
            }
            HiFileBrowser.files[HiFileBrowser.curPath] = HiFileBrowser.contentsCurrentData;
            hiWebOsFrame.endLoading("getAllDropboxData");


            debugPrint(" HiFileBrowser.files[HiFileBrowser.curPath].lenth : " + HiFileBrowser.files[HiFileBrowser.curPath].length);
            setHTML(HiFileBrowser.contentsCurrentData);

        } catch (e) {
            debugPrint("ERROR occurred when get Dropbox data!!!" + e.message, DebugLevel.ERROR);
        }
    }
    else {
        debugE("GET NO FLIES ! SHOW BACK BUTTON !");
        try {
            $("#redkeyImg").css("display", "block");
            //debugE("logout           ---"+hiMediaLanguages[cLanguage_himedia].logout);
            $("#redkeyText").html(hiMediaLanguages[cLanguage_himedia]["Log out"]);
            //var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
            var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
            //HiFileBrowser.contentsCurrentData.push(returnEntr);
            HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile] = [returnEntr];
            hiWebOsFrame.endLoading("showDmpDetail1");
            setHTML([returnEntr]);
        }
        catch (ex) {
            debugE(ex.message);
        }

    }
}

function nextPageTest() {
    HiFileBrowser.curFile = (HiFileBrowser.curPage + 1) * FILES_PER_PAGE;
    changePage(HiFileBrowser.curPage, HiFileBrowser.curPage + 1);

}

function previewPageTest() {
    HiFileBrowser.curFile = (HiFileBrowser.curPage - 1) * FILES_PER_PAGE
    changePage(HiFileBrowser.curPage, HiFileBrowser.curPage - 1);
}

function photoTest() {


    changeListStyle(false, HiFileBrowser.curType, "photo");
    HiFileBrowser.curType = "photo";
    HiFileBrowser.listFocusedInd = 1;
    pathStack = ["photo"];
    resetHiFileBrowser();
    var str = HiFileBrowser.files[HiFileBrowser.curType];
    setHTML(str);

}

function musicTest() {
    changeListStyle(false, HiFileBrowser.curType, "music");
    HiFileBrowser.curType = "music";
    HiFileBrowser.listFocusedInd = 2;
    pathStack = ["music"];
    resetHiFileBrowser();
    var str = HiFileBrowser.files[HiFileBrowser.curType];
    setHTML(str);
}

function videoTest() {
    changeListStyle(false, HiFileBrowser.curType, "video");
    HiFileBrowser.curType = "video";
    HiFileBrowser.listFocusedInd = 3;
    pathStack = ["video"];
    resetHiFileBrowser();
    var str = HiFileBrowser.files[HiFileBrowser.curType];
    setHTML(str);
}

/**
 * 获取当前选中的文件或文件夹
 * @returns {json}
 */
function getCurrentFile() {
    var key = getFileKey();
    debugPrint("HiMeida_____key" + key);
    if (HiFileBrowser.files[key].length > 0) {
        return HiFileBrowser.files[key][HiFileBrowser.curFile];
    }
    else {
        return null;
    }
}

function getFileKey() {
    debugPrint("Media_GETFIleKey" + HiFileBrowser.curType);
    debugPrint("Media_GETFIleKey" + HiFileBrowser.curPath);
    return HiFileBrowser.curType == "all" ? HiFileBrowser.curPath : HiFileBrowser.curType;
}

function goToList() {
    setFileFocus(HiFileBrowser.curFile, null);
    $("#" + HiFileBrowser.curType).attr("class", "dropboxleft_select");
    HiFileBrowser.isFocusList = true;
    debugPrint("[FileBroser_gotoList] :  pathStack.length=  " + pathStack.length);
}

function goToContent() {
    setFileFocus(HiFileBrowser.curFile, HiFileBrowser.curPage * FILES_PER_PAGE);
    HiFileBrowser.curFile = HiFileBrowser.curPage * FILES_PER_PAGE;
    $("#all").attr("class", "dropboxleft_unfocus");
    $("#music").attr("class", "dropboxleft_unfocus");
    $("#photo").attr("class", "dropboxleft_unfocus");
    $("#video").attr("class", "dropboxleft_unfocus");
    $("#" + HiFileBrowser.curType).attr("class", "dropboxleft_focus");
    HiFileBrowser.isFocusList = false;
    /*if(HiFileBrowser.curType == "all") {
     pathStack = ["/"];
     }
     else {
     pathStack = [HiFileBrowser.curType];
     }*/

//    if (HiFileBrowser.curType != "all") {
//        pathStack = [HiFileBrowser.curType];
//    }
    debugPrint("[FileBroser_gotoContent] :  pathStack.length=  " + pathStack.length);
}

function returnEvent() {
    debugPrint("returnEvent Function begin and firstInit is :" + HiFileBrowser.firstInit);
    if (HiFileBrowser.firstInit == 0) {
        goToList();
    }
//    if (HiFileBrowser.firstInit == 4) {
//        debugPrint("___pathStack_length:" + pathStack.length);
//        pathStack.pop();
//        debugPrint("___pathStack_last:" + pathStack[pathStack.length - 1]);
//        setHTML(HiFileBrowser.files[pathStack[pathStack.length - 1]]);
//
//    }
    else {
        debugPrint("___pathStack_1:" + pathStack.length);
        pathStack.pop();
        debugPrint("___pathStack_2:" + pathStack.length);
        //特殊处理三个子分类的情况，因为有一级代表分类名称的目录
        if (HiFileBrowser.listFocusedInd > 0 && pathStack.length == 1 &&
            HiFileBrowser.firstInit != 4 && HiFileBrowser.currentDevice != 3) {
            pathStack.pop();
        }

        if (pathStack.length == 0) {
            HiFileBrowser.firstInit = 0;
            initFirstData(HiFileBrowser.listFocusedInd);

        }
        else {

            HiFileBrowser.curPath = pathStack[pathStack.length - 1];
            debugPrint("stack_path___________:" + HiFileBrowser.curPath);
            if (HiFileBrowser.firstInit == 4) {
//                HiFileBrowser.curPath = path;
//                pathStack.push(HiFileBrowser.curPath);
                debugPrint("pathstack is : " + pathStack);
                HiFileBrowser.contentsCurrentData = HiFileBrowser.files[HiFileBrowser.curPath];
//                hiWebOsFrame.endLoading("showUSBDetail2");
                setHTML(HiFileBrowser.contentsCurrentData);
                // setHTML(HiFileBrowser.files[HiFileBrowser.curPath]);
            }
            else {
                if (HiFileBrowser.currentDevice == 0)
                    switch (parseInt(HiFileBrowser.listFocusedInd)) {
                        case 0:
                            showUsbDetail2(HiFileBrowser.curPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_ALL, true);
                            break;
                        case 1:
                            showUsbDetail2(HiFileBrowser.curPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PHOTO, true);
                            break;
                        case 3:
                            showUsbDetail2(HiFileBrowser.curPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_MUSIC, true);
                            break;
                        case 2:
                            showUsbDetail2(HiFileBrowser.curPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO, true);
                            break;
                        default :
                            break;
                    }
                else if (HiFileBrowser.currentDevice == 1)
                    switch (parseInt(HiFileBrowser.listFocusedInd)) {
                        case 0:
                            showDmpDetail(HiFileBrowser.currentUsbId, HiFileBrowser.curPath, 28, true);
                            break;
                        case 1:
                            showDmpDetail(HiFileBrowser.currentUsbId, HiFileBrowser.curPath, 16, true);
                            break;
                        case 3:
                            showDmpDetail(HiFileBrowser.currentUsbId, HiFileBrowser.curPath, 8, true);
                            break;
                        case 2:
                            showDmpDetail(HiFileBrowser.currentUsbId, HiFileBrowser.curPath, 4, true);
                            break;
                        default :
                            break;
                    }
                else if (HiFileBrowser.currentDevice == 3) {
                    showUsbDetail2(HiFileBrowser.curPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR, true);
                }
//返回时又执行了一次进栈操作，所以要pop出来。
                pathStack.pop();
//                setFileFocus(0, HiFileBrowser.lastFocusFile);
            }

        }
    }
}

var allMedia = {
    index: 0,
    type: ""
};

function getMimeType(usertype) {
    var mime_type = "";
    switch (usertype) {
        case "photo":
            mime_type = "image";
            break;
        case "music":
            mime_type = "audio";
            break;
        case "video":
            mime_type = "video";
            break;
        case "pvr":
            mime_type = "pvr";
            break;
        default:
            break;
    }
    return mime_type;
}

function isRealMimeType(mimetype) {
    if (mimetype == getMimeType(allMedia.type)) {
        return true;
    }
    else {
        return false;
    }
}

var startInd = 0;
var endInd = 0;

function getAllMediaURL(data) {
    var key = getFileKey();
    var fileInfo = {};
    var head = allMedia.type;
    switch (allMedia.type) {
        case "photo":
            head = "pic";
            break;
    }
    fileInfo[head + "Url"] = data.url;
    fileInfo[head + "Name"] = getFileName(HiFileBrowser.files[key][allMedia.index]);
    debugPrint("[MediaURL]" + data.url);

//    data.name = getFileName(HiFileBrowser.files[key][allMedia.index]);
//    data.path = HiFileBrowser.files[key][allMedia.index].path;

//    HiFileBrowser.URLs[allMedia.type].push(data);
    HiFileBrowser.URLs.currentURLs.push(fileInfo);

    allMedia.index++;

    if (allMedia.index < endInd) {
        for (var i = allMedia.index; i < endInd; i++) {
            if (isRealMimeType(HiFileBrowser.files[key][i].mime_type.split("/")[0])) {
                MyDropbox.getfileLink(HiFileBrowser.files[key][i].path, getAllMediaURL);
                break;
            }
            else {
                allMedia.index++;
            }
        }


    }
    else {
        //hide("dropboxloading");
        if (tv_launcher) {
            openPlayer(allMedia.type,
                JSON.stringify(HiFileBrowser.URLs.currentURLs),
                HiFileBrowser.URLs.currentIndex);
        }
        else {
            //-GHL_DEL-//console.log(JSON.stringify(HiFileBrowser.URLs.currentURLs));
        }
//        sendAm
    }

}

function dropboxLogout() {
    debugPrint("Dropbox Logout!!");
    myDropbox.logout();
    initFirstData(HiFileBrowser.listFocusedInd);
//    changeListStyle(false, HiFileBrowser.curType, HiFileBrowser.listId[HiFileBrowser.listFocusedInd]);
}

function playDropboxContent() {
    debugPrint("playDropboxContent function begin and  now contentsCurrentData length is : " + HiFileBrowser.contentsCurrentData.length);

    if (HiFileBrowser.contentsCurrentData.length > 0) {
        debugPrint(JSON.stringify(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile]) + "   (currentData user choose)");
        switch (HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].mime_type) {
            case "file/":
                //if (HiFileBrowser.currentDevice == 0)
                HiFileBrowser.lastFocusFile.push(HiFileBrowser.curFile);
                HiFileBrowser.lastFocusPage.push(HiFileBrowser.curPage);
                hiWebOsFrame.startLoadingForMedia(45, "getAllDropboxData");
                myDropbox.openFolder(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path, showDropboxData);
                HiFileBrowser.curPath = HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path;
                pathStack.push(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path);
                break;
            case "photo/":
            case "image/":
                DropboxPhotoList = [];
                DropboxPhotoIndex = 0;
                linkIndex = 0;
                hiWebOsFrame.startLoadingForMedia(45, "PHOTO_DROPBOX");
                myDropbox.getfileLink(HiFileBrowser.files["photo"][0].path, playdropboxPhotoLink);
                break;
            case "video/":
                DropboxVideoList = [];
                DropboxVideoIndex = 0;
                linkIndex = 0;
                hiWebOsFrame.startLoadingForMedia(45, "VIDEO_DROPBOX");
                myDropbox.getfileLink(HiFileBrowser.files["video"][0].path, playdropboxVideoLink);
                break;
            case "audio/":
                DropboxMusicList = [];
                DropboxMusicIndex = 0;
                linkIndex = 0;
                //无论哪个分类都从第一个开始取，当前通过全局变量传递
                hiWebOsFrame.startLoadingForMedia(45, "AUDIO_DROPBOX");
                myDropbox.getfileLink(HiFileBrowser.files["music"][0].path, playdropboxAudioLink);
                break;
            case "10/":
                returnEvent();
                break;
            default :
                break;
        }
        // debugPrint(HiFileBrowser.curFile+"/n");
        // debugPrint(JSON.stringify(contentsCurrentData[HiFileBrowser.curFile]));
    }
    else {

        // HiFileBrowser.curPath = path;
        HiFileBrowser.curPath = HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path;
        pathStack.push(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path);
        var returnEntr = new HiFileData(null, hiMediaLanguages[cLanguage_himedia]["Return"], null, null, null, "/" + hiMediaLanguages[cLanguage_himedia]["Return"], false, null, "img/himedia/fileBrowser/backup.png", "10/", null);
        //HiFileBrowser.contentsCurrentData.push(returnEntr);
        //hiWebOsFrame.endLoading("showDmpDetail1");
        setHTML([returnEntr]);
    }
}
var DropboxPhotoList = [];
var DropboxPhotoIndex = 0;
var DropboxMusicList = [];
var DropboxMusicIndex = 0;
var DropboxVideoList = [];
var DropboxVideoIndex = 0;
var linkIndex = 0;
function playdropboxAudioLink(data) {
    debugPrint("playdropboxAudioLink function is coming!! and now url is : " + data.url);
//    for (var i = 0; i < HiFileBrowser.files["photo"].length; i++) {
//        DropboxMusicList.push({"picUrl": HiFileBrowser.files["photo"][i].path, "picName": HiFileBrowser.files["photo"][i].usbFileName});
//        if (HiFileBrowser.files["photo"][i].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
//            photoIndex = i;
//        }
//    }
    if (linkIndex < HiFileBrowser.files["music"].length - 1) {
        DropboxMusicList.push({"audioUrl": data.url,
            "audioName": HiFileBrowser.files["music"][linkIndex].usbFileName,
            "audioThumb": HiFileBrowser.files["music"][linkIndex].thumb_url,
            "audioArtist": HiFileBrowser.files["music"][linkIndex].artist,
            "audioAlbum": HiFileBrowser.files["music"][linkIndex].album});
        if (HiFileBrowser.files["music"][linkIndex].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
            DropboxMusicIndex = linkIndex;
        }
        linkIndex++;
        myDropbox.getfileLink(HiFileBrowser.files["music"][linkIndex].path, playdropboxAudioLink);

    }
    else if (linkIndex == HiFileBrowser.files["music"].length - 1) {
        DropboxMusicList.push({"audioUrl": data.url,
            "audioName": HiFileBrowser.files["music"][linkIndex].usbFileName,
            "audioThumb": HiFileBrowser.files["music"][linkIndex].thumb_url,
            "audioArtist": HiFileBrowser.files["music"][linkIndex].artist,
            "audioAlbum": HiFileBrowser.files["music"][linkIndex].album});
        if (HiFileBrowser.files["music"][linkIndex].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
            DropboxMusicIndex = linkIndex;
        }
        hiWebOsFrame.endLoading("AUDIO_DROPBOX");
        openPlayer("music", DropboxMusicList, DropboxMusicIndex);
    }
}
function playdropboxPhotoLink(data) {
    debugPrint("playdropboxPhotoLink function is coming!! and now url is : " + data.url);
//    for (var i = 0; i < HiFileBrowser.files["photo"].length; i++) {
//        DropboxMusicList.push({"picUrl": HiFileBrowser.files["photo"][i].path, "picName": HiFileBrowser.files["photo"][i].usbFileName});
//        if (HiFileBrowser.files["photo"][i].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
//            photoIndex = i;
//        }
//    }
    if (linkIndex < HiFileBrowser.files["photo"].length - 1) {
        DropboxPhotoList.push({"picUrl": data.url,
            "picName": HiFileBrowser.files["photo"][linkIndex].usbFileName});
        if (HiFileBrowser.files["photo"][linkIndex].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
            DropboxPhotoIndex = linkIndex;
        }
        linkIndex++;
        myDropbox.getfileLink(HiFileBrowser.files["photo"][linkIndex].path, playdropboxPhotoLink);

    }
    else if (linkIndex == HiFileBrowser.files["photo"].length - 1) {
        DropboxPhotoList.push({"picUrl": data.url,
            "picName": HiFileBrowser.files["photo"][linkIndex].usbFileName});
        if (HiFileBrowser.files["photo"][linkIndex].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
            DropboxPhotoIndex = linkIndex;
        }
        hiWebOsFrame.endLoading("PHOTO_DROPBOX");
        openPlayer("photo", DropboxPhotoList, DropboxPhotoIndex);
    }
}
function playdropboxVideoLink(data) {
    debugPrint("playdropboxvideoLink function is coming!! and now url is : " + data.url);
//    for (var i = 0; i < HiFileBrowser.files["photo"].length; i++) {
//        DropboxvideoList.push({"picUrl": HiFileBrowser.files["photo"][i].path, "picName": HiFileBrowser.files["photo"][i].usbFileName});
//        if (HiFileBrowser.files["photo"][i].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
//            photoIndex = i;
//        }
//    }
    if (linkIndex < HiFileBrowser.files["video"].length - 1) {
        DropboxVideoList.push({"videoUrl": data.url,
            "videoName": HiFileBrowser.files["video"][linkIndex].usbFileName,
            "videoThumb": HiFileBrowser.files["video"][linkIndex].thumb_url,
            "videoArtist": HiFileBrowser.files["video"][linkIndex].artist,
            "videoAlbum": HiFileBrowser.files["video"][linkIndex].album});
        if (HiFileBrowser.files["video"][linkIndex].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
            DropboxVideoIndex = linkIndex;
        }
        linkIndex++;
        myDropbox.getfileLink(HiFileBrowser.files["video"][linkIndex].path, playdropboxVideoLink);

    }
    else if (linkIndex == HiFileBrowser.files["video"].length - 1) {
        DropboxVideoList.push({"videoUrl": data.url,
            "videoName": HiFileBrowser.files["video"][linkIndex].usbFileName,
            "videoThumb": HiFileBrowser.files["video"][linkIndex].thumb_url,
            "videoArtist": HiFileBrowser.files["video"][linkIndex].artist,
            "videoAlbum": HiFileBrowser.files["video"][linkIndex].album});
        if (HiFileBrowser.files["video"][linkIndex].path == HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path) {
            DropboxVideoIndex = linkIndex;
        }
        hiWebOsFrame.endLoading("VIDEO_DROPBOX");
        pvrIsPlaying = false;
        openPlayer("video", DropboxVideoList, DropboxVideoIndex);
    }
}
//启动视频播放器
function openVideoPlayer(videoList, videoIndex) {
    var VcurrentPage = null;
    if (hiWebOsFrame.isCurrentModule("himedia_videoPlayer")) {
        HiVideoPlayer.init(videoList, videoIndex);
        try {
            HiVideoPlayer.initLanguage();
        }
        catch (e) {
            debugPrint("INIT VIDEO" + e.message);
        }
        //dlna有可能会在这个时候推送
//            hiWebOsFrame.closeModule("launcher");
//            hiWebOsFrame.blankPage.open();
//            hiWebOsFrame.blankPage.hiFocus();
    }
    else {
        if (!!hiWebOsFrame.getCurrentPage()) {
            VcurrentPage = hiWebOsFrame.getCurrentPage();
            hiWebOsFrame.getCurrentPage().close();
        }
        hiWebOsFrame.createPage('himedia_videoPlayer', null, null, null, function (launP) {
            hiWebOsFrame.videoPlayerPage = launP;
            launP.open();
            launP.hiFocus();
            console.log('himedia_VideoPlayer');
            mpCtrlStatus_launcher = 1;
            HiVideoPlayer.lastPage = VcurrentPage;
            HiVideoPlayer.init(videoList, videoIndex);
            try {
                HiVideoPlayer.initLanguage();
            }
            catch (e) {
                debugPrint("INIT VIDEO" + e.message);
            }
        });
    }
//        HiVideoPlayer.init(videoList, videoIndex);
}

//启动音频播放器
function openAudioPlayer(audioList, audioIndex) {
    //关闭当前面板
    var AcurrentPage = null;
    // debugPrint("audioList:"+JSON.stringify(audioList)+",audioIndex:"+audioIndex);
    // console.log("audioList:"+JSON.stringify(audioList)+",audioIndex:"+audioIndex);
    if (hiWebOsFrame.isCurrentModule("himedia_musicPlayer")) {

        HiAudioPlayer.init(audioList, audioIndex);
        try {
            HiAudioPlayer.initLanguage();
        }
        catch (e) {
            debugPrint("INIT MUSIC" + e.message);
        }
    }
    else {
        if (!!hiWebOsFrame.getCurrentPage()) {
            AcurrentPage = hiWebOsFrame.getCurrentPage();
            hiWebOsFrame.getCurrentPage().close();
        }
        hiWebOsFrame.createPage('himedia_musicPlayer', null, null, null, function (launP) {
            hiWebOsFrame.musicPlayerPage = launP;
            launP.open();
            launP.hiFocus();
            console.log('himedia_musicPlayer');
            mpCtrlStatus_launcher = 2;
            HiAudioPlayer.lastPage = AcurrentPage;
            HiAudioPlayer.init(audioList, audioIndex);
            try {
                HiAudioPlayer.initLanguage();
            }
            catch (e) {
                debugE("INIT MUSIC LANGUAGE ERROR : " + e.message);
            }
        });
    }
}

//启动图片播放器
function openPicPlayer(picList, picIndex) {
    //关闭当前面板
    var PcurrentPage = null;
    if (hiWebOsFrame.isCurrentModule("himedia_picPlayer")) {

        //dlna有可能会在这个时候推送
//            hiWebOsFrame.closeModule("launcher");
//            hiWebOsFrame.blankPage.open();
//            hiWebOsFrame.blankPage.hiFocus();
    }
    else {
        if (!!hiWebOsFrame.getCurrentPage()) {
            PcurrentPage = hiWebOsFrame.getCurrentPage();
            hiWebOsFrame.getCurrentPage().close();
        }
        hiWebOsFrame.createPage('himedia_picPlayer', null, null, null, function (launP) {
            hiWebOsFrame.picPlayerPage = launP;
            launP.open();
            launP.hiFocus();
            console.log('himedia_picPlayer');
            mpCtrlStatus_launcher = 3;
            HiPicPlayer.lastPage = PcurrentPage;
            //debugPrint(JSON.stringify(picList));
            HiPicPlayer.init(picList, picIndex);
            HiPicPlayer.initLanguage();
        });
    }
}

function openPlayer(filetype, content, index) {
    debugPrint(filetype);
    // var fileName = "dropbox-";
    // var playerurl = "/3rd_rw/vp/";
    switch (filetype) {
        case "video":
            openVideoPlayer(content, index);
            break;
        case "pvr":
            openVideoPlayer(content, index);
            break;
        case "photo":
            openPicPlayer(content, index);
            break;
        case "music":
            //debugPrint(filetype + "innnnnnnnnnnnnnnnnnnn");
            openAudioPlayer(content, index);
            break;
    }
//    Hisense.File.write(fileName, content, 1);
//    Hisense.sendAM(":am,am,:start=[browser_sdk,-u," +
//        playerurl + "fileName=" + fileName + "&cIndex=" +
//        index + ",-w,1920,-h,1080]");
}


function isContainpath(path) {
    var keys = Object.keys(HiFileBrowser.files);
    for (x in keys) {
        if (keys[x] == path) {
            return true;
        }
    }
    return false;
}

function openSelectedFolder(data) {
    if (!data) {
        return
    }
    //hide("dropboxloading");
    var filedata = [];
    var folderdata = [];
    var dataarr = HiFileBrowser.issearchdata ? data : data.contents;
    for (var i = 0; i < dataarr.length; i++) {

        if (dataarr[i].is_dir) {
            folderdata.push(dataarr[i]);
        }
        else {
            filedata.push(dataarr[i]);
        }
    }
    if (HiFileBrowser.issearchdata) {
        HiFileBrowser.files["search"] = folderdata.concat(filedata);
        setHTML(HiFileBrowser.files["search"]);
    }
    else {
        HiFileBrowser.curPath = data.path;
        HiFileBrowser.files[HiFileBrowser.curPath] = folderdata.concat(filedata);
        setHTML(HiFileBrowser.files[HiFileBrowser.curPath]);
    }
    pathStack.push(HiFileBrowser.curPath);
}


/**
 * 翻页
 * @param curind 当前页
 * @param nxtind 下一页
 */
function changePage(curind, nxtind) {
    if (nxtind >= 0 && nxtind < HiFileBrowser.totalPage) {
        for (x in HiFileBrowser.thumbnailxhrs) {
            HiFileBrowser.thumbnailxhrs[x].abort();
        }

        HiFileBrowser.thumbnailxhrs = [];
        HiFileBrowser.curPage = nxtind;
//        HiFileBrowser.curFile = curind > nxtind ? HiFileBrowser.curFile - 1 : nxtind * FILES_PER_PAGE;

        setScroll(HiFileBrowser.sliderHeight, HiFileBrowser.sliderHeight * HiFileBrowser.curPage);
        $("#dropboxmiddle").html(HiFileBrowser.fileHTML[nxtind]);
        if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $("#dropboxmiddle div").css("float", "left");
        }
        else {
            $("#dropboxmiddle div").css("float", "right");
        }
        setFileFocus(curind, HiFileBrowser.curFile);

        var key = HiFileBrowser.curType == "all" ? HiFileBrowser.curPath : HiFileBrowser.curType;
        debugPrint("____KEY__firstInit_____________" + HiFileBrowser.firstInit);
        if (HiFileBrowser.firstInit == 4) {
            debugPrint("____KEY__firstInit_____________" + HiFileBrowser.contentsCurrentData.length);
            setImageIcon(HiFileBrowser.contentsCurrentData);
            if (!!HiFileBrowser.contentsCurrentData) {
                setFilePath(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile]);
            }
        }
        else if (HiFileBrowser.firstInit == 0) {
            setImageIcon(HiFileBrowser.firstInitFilesData);
            if (!!HiFileBrowser.firstInitFilesData) {
                setFilePath(HiFileBrowser.firstInitFilesData[HiFileBrowser.curFile]);
            }
        }
        else if (HiFileBrowser.firstInit == 1) {
            debugPrint("____KEY__firstInit_____________" + HiFileBrowser.contentsCurrentData.length);
            setImageIcon(HiFileBrowser.contentsCurrentData);
            if (!!HiFileBrowser.contentsCurrentData) {
                setFilePath(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile]);
            }
        }
        else {//DLNA和RVR需要写，暂时不写}
        }
    }

}


/**
 * 设置路径显示
 */
function setFilePath(file) {
    if (!file) {
        $("#folderpath").html("");
        $("#filepath").html("");

    }
    else if (file.is_dir) {
        debugPrint(HiFileBrowser.currentDevice);
        if (HiFileBrowser.currentDevice == 1) {
            $("#folderpath").html(file.usbFileName);
            $("#filepath").html("");
        }
        else {

            $("#folderpath").html(file.path);
            $("#filepath").html("");
        }
    }

    else {
        if (file.root != null && file.artist != null && file.icon != null && file.album != null) {

            //处理PVR显示时间
            var PVRDATE = file.artist;
            var PVRSTARTTIME = file.icon;
            var PVRENDTIME = file.album;
            $("#folderpath").html(PVRDATE + "  " + PVRSTARTTIME + " - " + PVRENDTIME);
            $("#filepath").html("");
        }
        else {
            $("#folderpath").html(getFolderName(file));
            $("#filepath").html(getFileName(file));
        }

    }
}

/**
 * 设置当前页面所有文件或文件夹的缩略图
 * @param files
 */
function setImageIcon(files) {
    debugPrint("setImageIcon function begin, and the param files.length is : " + files.length);
    if (!!files) {
        for (var i = HiFileBrowser.curPage * FILES_PER_PAGE; i < (HiFileBrowser.curPage + 1) * FILES_PER_PAGE && i < files.length; i++) {
            getFileIcon(files[i], $("#fileimg" + i));
        }
    }
}

/**
 * 获取文件缩略图
 * @param file
 * @param imgselector
 */
function getFileIcon(file, imgselector) {
    //Thumbnail
    /*if(file.is_dir) {
     imgselector.attr("src", "img/himeida/fileBrowser/folder-all.png")
     //        return "img/himeida/fileBrowser/folder-all.png";
     }
     else if(file.mime_type.split("/")[0] == "image" ||
     file.mime_type.split("/")[0] == "video") {
     var src = "";

     //存储缩略图请求，以便翻页终止上一页的请求
     //HiFileBrowser.thumbnailxhrs.push(
     MyDropbox.getThumbnails(file.path, "png", "m", imgselector)
     //);
     //        return "img/himeida/fileBrowser/folder-music.png";
     }
     else if(file.mime_type.split("/")[0] == "audio") {
     imgselector.attr("src", "img/himeida/fileBrowser/file-music.png")
     }*/


    //Native
    if (file.is_dir) {
        imgselector.attr("src", "img/himedia/fileBrowser/folder-all.png");
    }
    else {

        switch (file.mime_type.split("/")[0]) {
            case "image":
            case "photo":
                imgselector.attr("src", "img/himedia/fileBrowser/defaultimg.png");
                break;
            case "video":
            case "pvr":

                imgselector.attr("src", "img/himedia/fileBrowser/file-video.png");
                break;
//            case "pvr":
//                //debugPrint("SET PVR IMG____" + file.thumb_url);
//                imgselector.attr("src", file.thumb_url);
//                break;
            case "music":
            case "audio":
                imgselector.attr("src", "img/himedia/fileBrowser/file-music.png");
                break;
            case "1":
                imgselector.attr("src", "img/himedia/fileBrowser/folder_usb.png");
                break;
            case "11":
                imgselector.attr("src", "img/himedia/fileBrowser/folder_dropbox.png");
                break;
            case "2":
                imgselector.attr("src", "img/himedia/fileBrowser/folder_dlna.png");
                break;
            case "9":
                imgselector.attr("src", "img/himedia/fileBrowser/pvr.png");
                break;
            case "return":
            case "10":
                imgselector.attr("src", "img/himedia/fileBrowser/backup.png");
                break;
        }
    }
}

/**
 * 获取Dropbox目录
 * @param data
 */
function getAllData(data) {
    openSelectedFolder(data);
    //asyncGetMediaData();

    HiFileBrowser.isInit = true;
    if (tv_launcher) {
        Hisense.File.write("launcher/data/dropbox-alldata.txt", JSON.stringify(data), 1);
    }
//    pathStack.push(HiFileBrowser.curPath);
}

/**
 * 设置滚动条
 */
function setScroll(height, top) {

    HiFileBrowser.sliderHeight = height;
    HiFileBrowser.sliderTop = 32 + top;
    $("#dropboxscrollpanel").css("top", HiFileBrowser.sliderTop + "px");
    $("#dropboxscrollpanel").css("height", HiFileBrowser.sliderHeight + "px");
}


/**
 * json生成页面
 * @param files
 */
function setHTML(files) {
    //debugPrint(JSON.stringify(files));
    debugPrint("setHTML function begin,and the patam firstInit is : " + HiFileBrowser.firstInit);
    if (!!files) {
        HiFileBrowser.totalPage = Math.ceil(files.length / FILES_PER_PAGE);
        HiFileBrowser.totalFile = files.length;
    }
    else {
        HiFileBrowser.totalPage = 0;
        HiFileBrowser.totalFile = 0;
    }
    HiFileBrowser.fileHTML = [];
    HiFileBrowser.curPage = 0;
    HiFileBrowser.curFile = 0;

    var html = "";
    if (HiFileBrowser.firstInit == 4) {

        if (HiFileBrowser.totalFile == 0) {
            html = '<div id="file0" class="dropboxmiddle_focus">' +
                '<img id="fileimg0" src="' + 'img/himedia/fileBrowser/backup.png" onerror="useDefaultImg(this)">' +
                '<p id="filename0">' + hiMediaLanguages[cLanguage_himedia]["Return"] + '</p>' +
                '</div>';
            setScroll(0, 0);
            HiFileBrowser.fileHTML.push(html);
        }
        else {
            //            debugPrint("come in_________________ 1");
            for (var kk = 0; kk < HiFileBrowser.totalPage; kk++) {
                html = "";
                for (var ii = 0; ii < FILES_PER_PAGE && kk * FILES_PER_PAGE + ii < files.length; ii++) {
                    html += '<div id="file' + (kk * FILES_PER_PAGE + ii) + '" class="dropboxmiddle_unfocus">' +
                        '<img id="fileimg' + (kk * FILES_PER_PAGE + ii) + '" src="' + 'img/himedia/fileBrowser/defaultimg.png" onerror="useDefaultImg(this)">' +
                        '<p id="filename' + (kk * FILES_PER_PAGE + ii) + '">' + files[kk * FILES_PER_PAGE + ii].usbFileName + '</p>' +
                        '</div>';
                }
                HiFileBrowser.fileHTML.push(html);
            }
        }

    }
    else if (HiFileBrowser.firstInit == 0) {
        HiFileBrowser.firstInitFilesData = files;


        if (HiFileBrowser.totalFile == 0) {
            html = '<div id="file0" class="dropboxmiddle_focus">' +
                '<img id="fileimg0" src="' + 'img/himedia/fileBrowser/backup.png" onerror="useDefaultImg(this)">' +
                '<p id="filename0">' + hiMediaLanguages[cLanguage_himedia]["Return"] + '</p>' +
                '</div>';
            setScroll(0, 0);
            HiFileBrowser.fileHTML.push(html);
        }
        else {
            // debugPrint("come in_________________ 1");
            for (var kk = 0; kk < HiFileBrowser.totalPage; kk++) {
                html = "";
                for (var ii = 0; ii < FILES_PER_PAGE && kk * FILES_PER_PAGE + ii < files.length; ii++) {
                    html += '<div id="file' + (kk * FILES_PER_PAGE + ii) + '" class="dropboxmiddle_unfocus">' +
                        '<img id="fileimg' + (kk * FILES_PER_PAGE + ii) + '" src="' + 'img/himedia/fileBrowser/defaultimg.png" onerror="useDefaultImg(this)">' +
                        '<p id="filename' + (kk * FILES_PER_PAGE + ii) + '">' + getFileName(files[kk * FILES_PER_PAGE + ii]) + '</p>' +
                        '</div>';
                }
                HiFileBrowser.fileHTML.push(html);
            }
        }


    }
    else if (HiFileBrowser.firstInit == 1) //USB单独处理
    {
        debugPrint("get currentDevice" + HiFileBrowser.currentDevice);
        //由于大部分参数没有，暂时这里不单独处理PVR   &&false
        if (HiFileBrowser.currentDevice == 3 && false) { //PVR单独处理  pvr是3，这里暂时改为9等有空处理
            if (HiFileBrowser.totalFile == 0) {
                html = '<div id="file0" class="dropboxmiddle_focus">' +
                    '<img id="fileimg0" src="' + 'img/himedia/fileBrowser/backup.png" onerror="useDefaultImg(this)">' +
                    '<p id="filename0">' + hiMediaLanguages[cLanguage_himedia]["Return"] + '</p>' +
                    '</div>';
                setScroll(0, 0);
                HiFileBrowser.fileHTML.push(html);
            }
            else {
                var lockerClass = "";
                //  debugPrint("come in_________________ 1");
                for (var kk = 0; kk < HiFileBrowser.totalPage; kk++) {
                    html = "";
                    for (var ii = 0; ii < FILES_PER_PAGE && kk * FILES_PER_PAGE + ii < files.length; ii++) {
                        debugPrint(files[kk * FILES_PER_PAGE + ii].thumb_url + "_______lock mark");
//                            if (!files[kk * FILES_PER_PAGE + ii].thumb_url)
//                                lockerClass = "dropboxmiddle_focus_pvr_img_lock";
//                            else
//                                lockerClass = "dropboxmiddle_focus_pvr_img_lock_none";
                        if (kk * FILES_PER_PAGE + ii == 0) {
                            html = '<div id="file0" class="dropboxmiddle_unfocus_pvr">' +
                                '<img id="fileimg0" src="' + 'img/himedia/fileBrowser/backup.png" onerror="useDefaultImg(this)">' +
                                '<p id="filename0">' + hiMediaLanguages[cLanguage_himedia]["Return"] + '</p>' +
                                '</div>';
                        } else if (!!files[kk * FILES_PER_PAGE + ii].thumb_url)
                            html += "<div id=\"file" + (kk * FILES_PER_PAGE + ii) + "\" class=\"dropboxmiddle_unfocus_pvr\">" +
                                "    <img src=\"" + "img/himedia/fileBrowser/deleteBlock.png\" class=\"dropboxmiddle_focus_pvr_img_lock\"/>" +
                                "    <img src=\"" + "img/himedia/fileBrowser/pvr1.png\" class=\"dropboxmiddle_focus_pvr_img_pvr\"/>" +
                                "" + "    <div id=\"pvr_info\" class=\"dropboxmiddle_focus_pvr_img_pvr_info\">" +
                                "        <div class=\"pvr_play_logo\"><img id=\"playLogo\" src=\"" + "img/himedia/fileBrowser/pvrPlay.png\"/></div>" +
                                "        <div class=\"pvr_date_info\">" +
                                "            <span class=\"pvr_date\">" + files[kk * FILES_PER_PAGE + ii].artist + "</span></br>" +
                                "            <span class=\"pvr_time\">" + files[kk * FILES_PER_PAGE + ii].icon + "-" + files[kk * FILES_PER_PAGE + ii].album + "</span>" +
                                "        </div>" + "    </div>" + "" +
                                " <div class=\"dropboxmiddle_focus_pvr_text_pvr\">   <p id=\"filename" + (kk * FILES_PER_PAGE + ii) + "\" >" + getFileName(files[kk * FILES_PER_PAGE + ii]) + "</p></div>" + "</div>";
                        else
                            html += "<div id=\"file" + (kk * FILES_PER_PAGE + ii) + "\" class=\"dropboxmiddle_unfocus_pvr\">" +
                                // "    <img src=\"" + "img/himedia/fileBrowser/deleteBlock.png\" class=\"dropboxmiddle_focus_pvr_img_lock\"/>" +
                                "    <img src=\"" + "img/himedia/fileBrowser/pvr1.png\" class=\"dropboxmiddle_focus_pvr_img_pvr\"/>" +
                                "" + "    <div id=\"pvr_info\" class=\"dropboxmiddle_focus_pvr_img_pvr_info\">" +
                                "        <div class=\"pvr_play_logo\"><img id=\"playLogo\" src=\"" + "img/himedia/fileBrowser/pvrPlay.png\"/></div>" +
                                "        <div class=\"pvr_date_info\">" +
                                "            <span class=\"pvr_date\">" + files[kk * FILES_PER_PAGE + ii].artist + "</span></br>" +
                                "            <span class=\"pvr_time\">" + files[kk * FILES_PER_PAGE + ii].icon + "-" + files[kk * FILES_PER_PAGE + ii].album + "</span>" +
                                "        </div>" + "    </div>" + "" +
                                " <div class=\"dropboxmiddle_focus_pvr_text_pvr\">   <p id=\"filename" + (kk * FILES_PER_PAGE + ii) + "\" >" + files[kk * FILES_PER_PAGE + ii].usbFileName + "</p></div>" + "</div>";

//                            html += '<div id="file' + (kk * k + ii) + '" class="dropboxmiddle_unfocusPVR">' +
//                                '<img id="fileimg' + (kk * FILES_PER_PAGE + ii) + '" src="'+baseLauncherDir+'img/himedia/fileBrowser/defaultimg.png" onerror="useDefaultImg(this)">' +
//                                '<div id="PVRdate' + (kk * FILES_PER_PAGE + ii) + '">' + files[kk * FILES_PER_PAGE + ii].usbFileName + '</div>' +
//                                '<div id="PVRtime' + (kk * FILES_PER_PAGE + ii) + '">' + files[kk * FILES_PER_PAGE + ii].usbFileName + '</div>' +
//                                '<p id="filename' + (kk * FILES_PER_PAGE + ii) + '">' + files[kk * FILES_PER_PAGE + ii].usbFileName + '</p>' +
//                                '</div>';
                    }
                    HiFileBrowser.fileHTML.push(html);
                }
            }
        }
        else {
            if (HiFileBrowser.totalFile == 0) {
                html = '<div id="file0" class="dropboxmiddle_focus">' +
                    '<img id="fileimg0" src="' + 'img/himedia/fileBrowser/backup.png" onerror="useDefaultImg(this)">' +
                    '<p id="filename0">' + hiMediaLanguages[cLanguage_himedia]["Return"] + '</p>' +
                    '</div>';
                setScroll(0, 0);
                HiFileBrowser.fileHTML.push(html);
            }
            else {
                //            debugPrint("come in_________________ 1");
                for (var kk = 0; kk < HiFileBrowser.totalPage; kk++) {
                    html = "";
                    for (var ii = 0; ii < FILES_PER_PAGE && kk * FILES_PER_PAGE + ii < files.length; ii++) {
                        html += '<div id="file' + (kk * FILES_PER_PAGE + ii) + '" class="dropboxmiddle_unfocus">' +
                            '<img id="fileimg' + (kk * FILES_PER_PAGE + ii) + '" src="' + 'img/himedia/fileBrowser/defaultimg.png" onerror="useDefaultImg(this)">' +
                            '<p id="filename' + (kk * FILES_PER_PAGE + ii) + '">' + files[kk * FILES_PER_PAGE + ii].usbFileName + '</p>' +
                            '</div>';
                    }
                    HiFileBrowser.fileHTML.push(html);
                }
            }

        }
    }
    else {//其他值待处理
    }
    if (HiFileBrowser.totalPage == 1) {
        setScroll(0, 0);
    }
    else if (HiFileBrowser.totalPage > 1) {
        setScroll(Math.floor(892 / HiFileBrowser.totalPage), HiFileBrowser.sliderHeight * HiFileBrowser.curPage);
    }


    $("#totalfile").html(hiMediaLanguages[cLanguage_himedia]["All"] + " " + ((HiFileBrowser.totalFile - 1) >= 0 ? HiFileBrowser.totalFile - 1 : 0));
    $("#dropboxmiddle").html(HiFileBrowser.fileHTML[HiFileBrowser.curPage]);
    $("#file0").attr("class", "dropboxmiddle_focus");
    if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $("#dropboxmiddle div").css("float", "left");
    }
    else {
        $("#dropboxmiddle div").css("float", "right");
    }

    if (!!files && files.length > 0) {
        setFilePath(files[0]);
        setImageIcon(files.slice(0, FILES_PER_PAGE));
    }
    else {
        setFilePath(null);
    }

}

function getText(id) {
    return $("#filename" + id).html();
}

/**
 * 获取当前文件所在文件夹名称
 * @param file
 * @returns {string}
 */
function getFolderName(file) {
    var temp = file.path.substring(0).split('/');
    var foldername = "";
    for (var i = 0; i < temp.length - 1; i++) {
        foldername += temp[i] + "/";
    }
    return foldername;
}

/**
 * 获取当前文件名称
 * @param file
 * @returns {string}
 */
function getFileName(file) {
    var temp = file.path.substring(1).split('/');
    return temp[temp.length - 1];
}


function setFileFocus(lst_id, nxt_id) {
    switch (HiFileBrowser.firstInit) {
        case 4:
            //debugPrint("4_lst_id: __" + lst_id + "__nxtid__:" + nxt_id);

            debugPrint("1_lst_id: __" + lst_id + "__nxtid__:" + nxt_id);

            $("#file" + lst_id).attr("class", "dropboxmiddle_unfocus");
            if (nxt_id !== null) {
                // debugPrint("HiFileBrowser.curType___:" + HiFileBrowser.curType);
                $("#file" + nxt_id).attr("class", "dropboxmiddle_focus");
                // var key = HiFileBrowser.curType == "all" ? HiFileBrowser.curPath : HiFileBrowser.curType;
                if (!!HiFileBrowser.contentsCurrentData) {
                    setFilePath(HiFileBrowser.contentsCurrentData[nxt_id]);
                }
            }
            else {
                setFilePath(null);
            }

            break;
        case 0:
            //debugPrint("0_lst_id: __" + lst_id + "__nxtid__:" + nxt_id);

            $("#file" + lst_id).attr("class", "dropboxmiddle_unfocus");
            if (nxt_id !== null) {
                //debugPrint("HiFileBrowser.curType___:" + HiFileBrowser.curType);
                $("#file" + nxt_id).attr("class", "dropboxmiddle_focus");

                if (!!HiFileBrowser.InitDeviceDatas) {
                    setFilePath(HiFileBrowser.InitDeviceDatas[nxt_id]);
                }
            }
            else {
                setFilePath(null);
            }
            break;
        case 1:
            //暂时不单独处理PVR，&&PVR
            if (HiFileBrowser.currentDevice == 3 && false) {
                debugPrint("PVR_1_lst_id: __" + lst_id + "__nxtid__:" + nxt_id);

                $("#file" + lst_id).attr("class", "dropboxmiddle_unfocus_pvr");
                if (nxt_id !== null) {
                    // debugPrint("HiFileBrowser.curType___:" + HiFileBrowser.curType);
                    $("#file" + nxt_id).attr("class", "dropboxmiddle_focus_pvr");
                    // var key = HiFileBrowser.curType == "all" ? HiFileBrowser.curPath : HiFileBrowser.curType;
                    if (!!HiFileBrowser.contentsCurrentData) {
                        setFilePath(HiFileBrowser.contentsCurrentData[nxt_id]);
                    }
                }
                else {
                    setFilePath(null);
                }
            }
            else {
                //debugPrint("1_lst_id: __" + lst_id + "__nxtid__:" + nxt_id);

                $("#file" + lst_id).attr("class", "dropboxmiddle_unfocus");
                if (nxt_id !== null) {
                    // debugPrint("HiFileBrowser.curType___:" + HiFileBrowser.curType);
                    $("#file" + nxt_id).attr("class", "dropboxmiddle_focus");
                    // var key = HiFileBrowser.curType == "all" ? HiFileBrowser.curPath : HiFileBrowser.curType;
                    if (!!HiFileBrowser.contentsCurrentData) {
                        setFilePath(HiFileBrowser.contentsCurrentData[nxt_id]);
                    }
                }
                else {
                    setFilePath(null);
                }
            }
            break;

        default :
            break;
    }
}

/**
 * 临时测试使用，后期使用模版
 * @param event
 */
HiFileBrowser.dropboxKeyDown = function (event) {
    debugPrint("flie browser key down HiFileBrowser.disablekey is " + HiFileBrowser.disablekey);
    if (HiFileBrowser.disablekey) {
        return false;
    }
//    if (launcher_player_switch != 0) {
//        return false;
//    }
    if (HiFileBrowser.isFocusList) {
        dropboxListKeyDown(event);
    }
    else {
        if (HiFileBrowser.totalFile == 0) {
            if (event.keyCode == VK_BACK
                || event.keyCode == VK_ENTER
                || checkDMPkeycode(event.keyCode) == VK_LEFT) {
                returnEvent();

            }
            return;
        }
        dropboxConetentKeyDown(event);
    }
}

function dropboxListKeyDown(event) {
    switch (checkDMPkeycode(event.keyCode)) {
        case VK_DOWN:
            if (HiFileBrowser.listFocusedInd < 3) {
                if (HiFileBrowser.curType == HiFileBrowser.listId[HiFileBrowser.listFocusedInd]) {
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd]).attr("class", "dropboxleft_focus");
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/focus-" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");

                }
                else {
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd]).attr("class", "dropboxleft_unfocus");
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");

                }
                HiFileBrowser.listFocusedInd++;
                $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd]).attr("class", "dropboxleft_select");
                $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/focus-" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");

            }
            break;
        case VK_UP:
            if (HiFileBrowser.listFocusedInd > 0) {
                if (HiFileBrowser.curType == HiFileBrowser.listId[HiFileBrowser.listFocusedInd]) {
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd]).attr("class", "dropboxleft_focus");
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/focus-" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");

                }
                else {
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd]).attr("class", "dropboxleft_unfocus");
                    $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");

                }
                HiFileBrowser.listFocusedInd--;
                $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd]).attr("class", "dropboxleft_select");
                $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/focus-" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");

            }
            break;
        case VK_LEFT:
            break;
        case VK_RIGHT:

            if (HiFileBrowser.listId[HiFileBrowser.listFocusedInd] != HiFileBrowser.curType) {
                return;
            }
            goToContent();
            break;
        case VK_ENTER:

            initFirstData(HiFileBrowser.listFocusedInd);
            changeListStyle(false, HiFileBrowser.curType, HiFileBrowser.listId[HiFileBrowser.listFocusedInd]);
            $("#" + HiFileBrowser.curType + " img").attr("src", "img/himedia/fileBrowser/" + HiFileBrowser.curType + ".png");
            $("#" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + " img").attr("src", "img/himedia/fileBrowser/focus-" + HiFileBrowser.listId[HiFileBrowser.listFocusedInd] + ".png");

            HiFileBrowser.curType = HiFileBrowser.listId[HiFileBrowser.listFocusedInd];
            HiFileBrowser.isFocusList = false;
            break;
        case VK_BACK:
            hiWebOsFrame.mediaSourcePage = null;
            HiFileBrowser.HiMedia_initPage = 0;
            hiWebOsFrame.startLoading(2, "closeHiMedia");
            debugPrint("close HiMEDIA.", DebugLevel.ALWAYS);
            try {
                model.network.setEnumNetworkConfig(2);
            } catch (ex) {
                debugE(ex.message);
            }
            try {
                model.mpctrl.setMpctrlFlag(0);
                ctlr_memc_for_osd(3);
            }
            catch (ex) {
                debugE(ex.message);
            }
            try {
                model.system.setReturnlocalappFlag(11);
                //debugG("model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_KILL_ITSELF);" + model.system.getReturnlocalappFlag() + "~~~");
            } catch (ex) {
                debugE(ex.message);
            }

            //window.location.href = "modulePage/himedia/closeMedia.html";
            //modeljs.sendam(':am,am,:start=[lau_browser,-u,http://192.168.1.183:8080/5655/UI/hisenseUI/modulePages/himedia/closeMedia.html]');
            modeljs.sendam(':am,am,:stop=lau_browser');


            break;
        default:
            break;
    }
}

function dropboxConetentKeyDown(event) {
    debugPrint("dropboxConetentKeyDown begin and keyCode is :" + event.keyCode);
    switch (checkDMPkeycode(event.keyCode)) {
        case VK_RIGHT:
            if (HiFileBrowser.curFile + FILES_PER_ROW < HiFileBrowser.totalFile) {

                if (HiFileBrowser.curFile + FILES_PER_ROW < (HiFileBrowser.curPage + 1) * FILES_PER_PAGE) {
                    setFileFocus(HiFileBrowser.curFile, HiFileBrowser.curFile + FILES_PER_ROW);
                    HiFileBrowser.curFile += FILES_PER_ROW;
                }
                else {
                    HiFileBrowser.curFile += FILES_PER_ROW;
                    changePage(HiFileBrowser.curPage, HiFileBrowser.curPage + 1);
                }
            }
            else if (Math.floor(HiFileBrowser.totalFile / FILES_PER_ROW) != Math.floor(HiFileBrowser.curFile / FILES_PER_ROW)) {
                if (HiFileBrowser.curFile + FILES_PER_ROW < (HiFileBrowser.curPage + 1) * FILES_PER_PAGE) {
                    setFileFocus(HiFileBrowser.curFile, HiFileBrowser.totalFile - 1);
                    HiFileBrowser.curFile = HiFileBrowser.totalFile - 1;
                }
                else if (HiFileBrowser.curFile + FILES_PER_ROW > (HiFileBrowser.curPage + 1) * FILES_PER_PAGE && HiFileBrowser.curFile + FILES_PER_ROW >= HiFileBrowser.totalFile && HiFileBrowser.totalFile > (HiFileBrowser.curPage + 1) * FILES_PER_PAGE) {
                    HiFileBrowser.curFile = HiFileBrowser.totalFile - 1;
                    changePage(HiFileBrowser.curPage, HiFileBrowser.curPage + 1);
                }

            }
            break;
        case VK_LEFT:
            if (HiFileBrowser.curFile - FILES_PER_ROW >= 0) {
                if (HiFileBrowser.curFile - FILES_PER_ROW >= HiFileBrowser.curPage * FILES_PER_PAGE) {
                    setFileFocus(HiFileBrowser.curFile, HiFileBrowser.curFile - FILES_PER_ROW);
                    HiFileBrowser.curFile -= FILES_PER_ROW;
                }
                else {
                    HiFileBrowser.curFile -= FILES_PER_ROW;
                    changePage(HiFileBrowser.curPage, HiFileBrowser.curPage - 1);
                }
            }
            break;
        case VK_UP:
            if (HiFileBrowser.curFile == 0) {

//                pathStack.pop();
                goToList();
            }
            else if (HiFileBrowser.curFile == HiFileBrowser.curPage * FILES_PER_PAGE) {
                HiFileBrowser.curFile--;
                changePage(HiFileBrowser.curPage, HiFileBrowser.curPage - 1);
            }
            else {
                setFileFocus(HiFileBrowser.curFile, HiFileBrowser.curFile - 1);

                HiFileBrowser.curFile--;
            }
            break;
        case VK_DOWN:
            if (HiFileBrowser.curFile < HiFileBrowser.totalFile - 1) {
                if (HiFileBrowser.curFile + 1 == (HiFileBrowser.curPage + 1) * FILES_PER_PAGE) {
                    HiFileBrowser.curFile++;
                    changePage(HiFileBrowser.curPage, HiFileBrowser.curPage + 1);
                }
                else {
                    setFileFocus(HiFileBrowser.curFile, HiFileBrowser.curFile + 1);
                    HiFileBrowser.curFile++;
                }
            }

            break;
        case VK_ENTER:
            //Brad change keyevent
            debugPrint("Himedia_fileBrowser:   VK_ENTER" + HiFileBrowser.firstInit);
            HiFileBrowser.HiMedia_initPage = 0;
//            HiFileBrowser.lastFocusFile = HiFileBrowser.curFile;
//            HiFileBrowser.lastFocusPage = HiFileBrowser.curPage;
            debugPrint("keep now focus is :　" + HiFileBrowser.lastFocusFile);
            if (HiFileBrowser.firstInit == 4) {
                playDropboxContent();

            }
            else if (HiFileBrowser.firstInit == 0)
                goDetail();
            else if (HiFileBrowser.firstInit == 1)
                playUsbContent();
            break;
        case VK_BACK:
            returnEvent();
            break;
        case VK_RED:
            if (HiFileBrowser.firstInit == 4) {
                //playDropboxContent();
                dropboxLogout();

            }
            else if (HiFileBrowser.currentDevice == 3) {

                deletePVR();
            }
            break;
        default:
            break;
    }
}

function error(data) {
    var err = data.responseText;
    var msg = "";
    if (typeof(err) == "object") {
        for (x in err) {
            msg += err[x];
        }
    }
    else {
        msg = err;
    }
    debugPrint("Dropbox" + "error" + msg);
    //toastMsgBox(connectTips1[cLanguage], connectTips2[cLanguage]);
}


function showmsgbox_launcher(msg1, msg2) {
    //var msghtml = '<span class="msg">' + msg + '</span>'
    //network_dialog();

    Dialog_launcher.type = 2;
    Dialog_launcher.param = {image: 'img/himeida/fileBrowser/alert.png', text1: msg1, text2: msg2};
    $("#msgbox_launcher").html(Dialog_launcher.get());

    hiwebosframeLauncher.setDialog(true);
    setTimeout(function () {
        $("#msgbox_launcher").html("");
        hiwebosframeLauncher.setDialog(false);
    }, 3000);
}
HiFileBrowser.getDmpDevices = function (tmpDeviceList) {
    debugPrint("getDmpDevices function begin!");
    try {
        m_volumeMainIterator = model.volume.createTableMainIterator(
            true,
            [//条件
            ],
            [
                VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_ID,
                VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_NAME
            ],
            [
                { field: VolumeModelDefines.ENUM_SL2_TVAPI_VOLUME_TABLE_FIELD_NAME, direction: 1 }
            ],
            onVolumeMainIteratorEvent.bind(this, tmpDeviceList));
    }
    catch (e) {
        debugE(e.message + "_________model.volume.createTableMainIterator");
    }
    m_volumeMainIterator.fetchTotalCount();
}

HiFileBrowser.orderHiFileData = function (hiFileDataArray) {
    debugPrint("orderHiFileData function begin! and param length is :" + hiFileDataArray.length);
    if (hiFileDataArray.length > 1) {
        hiFileDataArray.sort(sortBy("usbFileName", false, String));
    }
    return hiFileDataArray;
};
var sortBy = function (filed, rev, primer) {
    rev = (rev) ? -1 : 1;
    return function (a, b) {
        a = a[filed];
        b = b[filed];
        if (typeof (primer) != 'undefined') {
            a = primer(a);
            b = primer(b);
        }
        if (a < b) {
            return rev * -1;
        }
        if (a > b) {
            return rev * 1;
        }
        return 1;
    }
};
HiFileBrowser.initLanguage = function () {

    if (!!getCurrentLan()) {
        cLanguage_himedia = getCurrentLan();
        hiWebOsFrame.setLanguage(cLanguage_himedia);
    }
    debugPrint("cLanguage_himedia" + cLanguage_himedia);
    $("#all-title").html(hiMediaLanguages[cLanguage_himedia]["All"]);
    $("#video-title").html(hiMediaLanguages[cLanguage_himedia]["Video"]);
    $("#music-title").html(hiMediaLanguages[cLanguage_himedia]["Music"]);
    $("#photo-title").html(hiMediaLanguages[cLanguage_himedia]["Picture"]);
    $("#return-title").html(hiMediaLanguages[cLanguage_himedia]["Return"]);
    $("#filename0").html(hiMediaLanguages[cLanguage_himedia]["Return"]);
    $("#totalfile").html(hiMediaLanguages[cLanguage_himedia]["All"] + " " + ((HiFileBrowser.totalFile - 1) >= 0 ? HiFileBrowser.totalFile - 1 : 0));
//    DBG_ALWAYS(hiWebOsFrame.getHTMLDir());
    if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $("#dropboxcontent div").css("float", "left");
    }
    else {
        $("#dropboxcontent div").css("float", "right");
    }
}

function getCurrentLan_fb() {
    var HiMediaLanguages = ['ger', 'eng', 'fre', 'ita', 'spa'];
    try {
        debugPrint("_____getCurrentLan_fb____" + model.language.getOsd());
        return "eng";
    }
    catch (e) {
        debugE(e.message);
        return "eng";
    }
}

HiFileBrowser.openDropbox = function () {
    debugPrint("openDropbox function begin! ");
    HiFileBrowser.currentDevice = 2;
    //           getAllDropboxData();
    if (myDropbox.checkLoginState())
        getAllDropboxData();
    else
        try {
            debugPrint("________________login?");
            myDropbox.login();
        }
        catch (e) {
            debugE(e.message);
        }


}

function deletePVR() {

    if (HiFileBrowser.firstInit == 1 && HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].mime_type == "pvr/") {
        debugPrint(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path + "________uuid");
        HiFileBrowser.deletePVRing = true;
        try {
            model.usb.deletePVR(HiFileBrowser.contentsCurrentData[HiFileBrowser.curFile].path);
        }
        catch (ex) {
            debugE(ex.message);
        }
        hiWebOsFrame.startLoading(10, "deletePVR");

    }
}
function deletePVRHandler(actionId, result) {
    hiWebOsFrame.endLoading("deletePVR");
    showUsbDetail2(HiFileBrowser.curPath, UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR);
    debugE(result);
    pathStack.pop();

}
//用于关闭滚动
HiFileBrowser.closeFileBrowser = function () {
    DBG_ALWAYS("Function closeFileBrowser and curFile is " + HiFileBrowser.curFile);

    var chil = $("#filename" + HiFileBrowser.curFile).find('marquee');
    if (chil.length > 0) {
        //return chil.html();
        DBG_ALWAYS("Now marquee on, text is " + chil.html());
        $("#filename" + HiFileBrowser.curFile).html(chil.html());
    }

}
//用于重新打开滚动
HiFileBrowser.openFileBrowser = function () {
    DBG_ALWAYS("Function openFileBrowser and curFile is " + HiFileBrowser.curFile);
    HiFileBrowser.initLanguage();
}

//用于回复焦点位置
HiFileBrowser.resumeFocus = function () {
    var lastPageLength = HiFileBrowser.lastFocusPage.length;
    var lastFileLength = HiFileBrowser.lastFocusFile.length;
    if (HiFileBrowser.lastFocusPage[lastPageLength - 1] > 0) {
        HiFileBrowser.curFile = HiFileBrowser.lastFocusFile[lastFileLength - 1];
        changePage(0, HiFileBrowser.lastFocusPage[lastPageLength - 1]);
        HiFileBrowser.lastFocusPage.pop();
        HiFileBrowser.lastFocusFile.pop();
    }
    else {
        HiFileBrowser.curFile = HiFileBrowser.lastFocusFile[lastFileLength - 1];
        setFileFocus(0, HiFileBrowser.curFile);
        HiFileBrowser.lastFocusPage.pop();
        HiFileBrowser.lastFocusFile.pop();
    }
}