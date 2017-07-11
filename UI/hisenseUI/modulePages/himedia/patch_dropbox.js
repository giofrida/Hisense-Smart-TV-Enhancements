if (document.location.hostname.indexOf('dropbox.') != -1) {
    var dropboxCurl = location.href;
    log.warn("[patch_dropbox.js] come in and current url is :" + dropboxCurl);

    if (dropboxCurl.indexOf('https://www.dropbox.com/1/oauth2') != -1) {
        log.warn("[patch_dropbox.js] come in function : focus the login input");
        opera.addEventListener('AfterEvent.load', function (e) {
            if (e.event.target instanceof Document) {
                try {
                    for (var i = 0; i < document.getElementsByName("login_email").length; i++) {
                        log.warn("[patch_dropbox.js] :" + document.getElementsByName("login_email")[i].id);
                        if (!!document.getElementsByName("login_email")[i].id) {
                            document.getElementsByName("login_email")[i].focus();
                            return;
                        }
                    }
                }
                catch (ex) {
                    log.warn("[patch_dropbox.js]:Err !" + ex.message);
                }
                //div.focus();
            }
        }, false);
    }

    else if ((dropboxCurl.indexOf("https://www.dropbox.com/forgot") > -1) ||
        (dropboxCurl.indexOf("https://www.dropbox.com/terms") > -1) ||
        (dropboxCurl.indexOf("https://www.dropbox.com/login") > -1)) {
        log.warn("[patch_dropbox.js] come in function : current page is : " + document.location.hostname + ", reload oAuth page!");
        opera.addEventListener('AfterEvent.load', function (e) {
            var reloginUrl = Hisense.File.read('hisenseUI/dropboxreloginurl.ini', 1);
            log.warn("[patch_dropbox.js]:reloginUrl:" + reloginUrl);

            if (reloginUrl.length > 5) { //可以跳转

                log.warn("[patch_dropbox.js]:reloginUrl:" + reloginUrl);
                location.href = reloginUrl;
            } else {
                log.warn("[patch_dropbox.js]:reloginUrl length too short, do nothing.");
            }
        }, false);
    }
}