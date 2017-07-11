/**
 * Created by BOB on 14-1-2.
 */
//
//var tv = false;
function MyDropboxDemo() {
    var self = this;

    var MyDb = new DropBoxAPI({
        key: '1mj20bakdd2fb5d',
        secret: 'e7af3bf01fbuwni',
        accessType: 'dropbox',
        token: 'TDOHRld76VIAAAAAAAAAizg9-sdfSDz2iGe50DAiWlGuIdLy6rnIAzqTFpTGP0iQ'
    });

    var redirectURI = tv ?
        encodeURI('https://api.us.hismarttv.com/overseares/AppOauth.html?type=dropbox') :
        encodeURI('http://localhost:63342/dropbox/redirect.html');

    var isOAuthing = false;

    var dropboxCallback = null;
    var deltaData = [];
    /**
     *
     * 登录
     * 成功：回调参数为主页数据
     * 失败：回调参数为null
     *
     * @param callback
     */
    self.login = function () {
        debugE(getNetworkSatus());
        if (!networkConnected()) {
            toastMsg(playerLang[getCurrentLan()]["Information"], dropboxTip[getCurrentLan()]["No network connected."], 3);
            return;
        }
        //dropboxCallback = callback;

        var addr = MyDb.getOAuthAddress() + '&redirect_uri=' + redirectURI +
            '&response_type=token';
        debugPrint("Dropbox Login add is : " + addr);
        model.system.setReturnlocalappFlag(16);

        //打开软键盘
        try {
            //   Hisense.loadLibrary("libvirtualkeyboard.so");
            if ("APP_5890_SA" == currentPlatform) {
                Hisense_enableVKB();
            }
            else {
                Hisense.VirtualKeyBoard.enable();
            }
        }
        catch (ex) {
            debugE(ex.message);
        }

        $('#sdkLoading').css('display', 'block');
        HiFileBrowser.disablekey = true;
        try {
            Hisense.File.write('hisenseUI/dropboxreloginurl.ini', addr, 1);
        }
        catch (e) {
            debugE(e.message);
        }
        window.location.href = addr;
//        window.location.href = "http://www.baidu.com";
//        if(!tv) {
//            win = window.open(addr);
//        }
//        else {
//
//            DBG_INFO('dropbox oauth: ' + addr);
//
//            sendCommndToTV(36, addr, false);
//            isOAuthing = true;
//        }
    }

    self.logout = function () {
        MyDb.localAccessToken.unset();
//        $.ajax({
//            url: "https://www.dropbox.com/logout",
//            timeout: 10000,
//            success: function (data) {
//                callback.call(this, data);
//                deleteNativeFile("hisenseUI/dropboxuser.ini", 1);
//            }
//        });
        deleteNativeFile("hisenseUI/dropboxuser.ini", 1);
//        window.location.href = "https://www.dropbox.com/logout";
    };

    self.checkLoginState = function () {
        var contentsStr = readFileFromNative("hisenseUI/dropboxuser.ini", 1);
        debugPrint("dropbox contentsStr is：  " + contentsStr);
        if (null != contentsStr) {
            var token = contentsStr.split("#")[1].split("=")[1].split("&")[0];
            if (!!token) {
                debugPrint("dropbox token is：  " + token);
                MyDb.localAccessToken.set(token);
                return true;
            }
        }
        return false;
    }

    self.goHome = function (callback) {
        MyDb.getMetaData("", {
            done: callback,
            error: function (data) {
                if (data.status == 401) {
                    DBG_INFO('required log in', DebugLevel.ERROR);
                    tv && deleteNativeFile("hisenseUI/dropboxuser.ini", 1);
                }
                else if (data.status == 0) {
                    debugE('get home data timeout');
                    hiWebOsFrame.endLoading("getAllDropboxData");
                    if (hiWebOsFrame.getCurrentPage().id == "himedia_fileBrowser") {
                        debugE('get home data timeout Resume HiMedia!!!');
                        toastMsg(playerLang[getCurrentLan()]["Information"], dropboxTip[getCurrentLan()]["Request timed out"] + "," + dropboxTip[getCurrentLan()]["please try again later."], 3);
                        HiFileBrowser.popDropboxStack();
                        //重置标志
                        setTimeout(function () {
                            HiFileBrowser.firstInit = 0;
                        }, 250);

                    }
                }
                callback.call(this, null);
            }
        });
    }


    /**
     *
     * 取指定路径数据
     *
     * 成功：回调参数为指定路径数据
     * 失败：回调参数为null
     *
     * @param path
     * @param callback
     */
    self.openFolder = function (path, callback) {
        MyDb.getMetaData(path, {
            done: callback,
            error: function (data) {
                fetcheDataError(data);
                callback.call(this, null);
            }
        });
    };


    /**
     * 取文件url
     * @param path
     * @param callback
     */
    self.getfileLink = function (path, callback) {
        MyDb.media(path, {
            done: callback,
            error: function (data) {
                fetcheDataError(data);
                callback.call(this, null);
            }
        });
    };


    /**
     *
     * @param path
     * @param format
     * @param size
     * @param imgid
     * @returns {*}
     */
    self.getThumbnails = function (path, format, size, imgid) {
        var params = {
            format: format,
            size: size
        };
        return MyDb.thumbnails(path, params, imgid);
    };


    self.fetchDeltaData = function (callback) {

        deltaData = [];
        dropboxCallback = callback;
        MyDb.delta({
            done: getDelta,
            error: function (data) {
                fetcheDataError(data);
                callback.call(this, null);
            }
        }, null);

    }


    function getDelta(data) {
        deltaData.push(data.entries);

        if (data.has_more) {
            MyDb.delta({
                done: getDelta,
                error: function (data) {
                    fetcheDataError(data);
                    dropboxCallback.call(this, sortDataByMimeType(deltaData));
                }
            }, {cursor: data.cursor});
        }
        else {
            dropboxCallback.call(this, sortDataByMimeType(deltaData));
        }
    }

    function sortDataByMimeType(data) {
        var retData = {}, mimeType = "";
        for (var x in data) {
            if (!data[x][1].is_dir) {
                mimeType = data[x][1].mime_type.split("/")[0];
                if (!retData[mimeType]) {
                    retData[mimeType] = [];
                }
                retData[mimeType].push(data[x][1]);
            }
        }

        return retData;
    }

    function fetcheDataError(data) {
        var err = data.responseText;
        var msg = "";
        if (typeof(err) == "object") {
            msg = objToString(err);
        }
        else {
            msg = err;
        }
        debugE('fetch data error: ' + msg);
    }

}


var myDropbox = new MyDropboxDemo();


/*
 * {"isopen":0,"token":"http://localhost:63342/dropbox/redirect.html#access_token=Cc4n10ekh-gAAAAAAAAAAbdyfBE1xcaIpISulpUoqSDnVrhX18yL0qQbkANyQaQI&token_type=bearer&uid=234997655"}
 *
 * */

