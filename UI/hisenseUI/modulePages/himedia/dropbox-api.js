/**
 * Created by BOB on 14-1-2.
 */


var DropBoxAPI = function (options) {

    var self = this;

    // default const values
    this.API_VERSION = "1";
    this.API_HOST = "https://api.dropbox.com/";
    this.API_CONTENT_HOST = "https://api-content.dropbox.com/";
    this.AUTH_HOST = "https://www.dropbox.com/";

    //private parameters
    this._consumerKey = options.key || "";
    this._token = options.token || null;
    this._root = (options.accessType == "sandbox")
        ? "sandbox"
        : "dropbox";

    return {

        /**
         * 获取认证地址
         * @returns {string}
         */
        getOAuthAddress: function () {
            return self.AUTH_HOST + self.API_VERSION +
                "/oauth2/authorize?client_id=" + self._consumerKey;
        },

        /**
         * 获取元数据
         *
         * @param path {string|
         * @param callback {json}
         *   --done: run
         *   --error: alert
         */
        getMetaData: function (path, callback) {
            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/metadata/" + self._root + "/" + encodeURI(path), null)

            this.doAJAX('GET', url, null, callback);
        },

        /**
         * 搜索
         * @param path {string}
         * @param params {json}
         *   --query: 查询字符串
         *   --file_limit: 搜索数量限制
         *   --include_deleted: 是否包含删除
         * @param callback {json}
         *   --done: run
         *   --error: alert
         */
        search: function (path, params, callback) {
            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/search/" + self._root + "/" + encodeURI(path), params);
            this.doAJAX('GET', url, null, callback);
        },

        /**
         * 分享
         * @param path {string}
         * @param callback {json}
         *   --done: run
         *   --error: alert
         */
        share: function (path, params, callback) {

            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/shares/" + self._root + "/" + encodeURI(path), params);
            this.doAJAX('POST', url, null, callback);
        },

        /**
         * 获取media链接
         * @param path {string}
         * @param callback {json}
         *   --done: run
         *   --error: alert
         */
        media: function (path, callback) {

            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/media/" + self._root + encodeURI(path), null);
            this.doAJAX('POST', url, null, callback);
        },

        /**
         * 获取缩略图
         *
         * @param path {string}
         * @param callback {json}
         *   --done: run
         *   --error: alert
         */
        thumbnails: function (path, params, imgselector) {
            if (!!params) {
                params['access_token'] = self._token;
            }
            else {
                params = {access_token: self._token};
            }
            var url = this.encodeURL(self.API_CONTENT_HOST + self.API_VERSION +
                "/thumbnails/" + self._root + "/" + encodeURI(path), params);

            if (imgselector.attr("src") != url) {
                imgselector.attr("src", url);
            }
            /*return $.ajax({
             type: 'GET',
             url: url,
             timeout: 8000,
             cache: true,
             processData: false,
             success: function() {
             imgselector.attr("src", url);
             },
             error: function() {
             imgselector.attr("src", "img/error.png");
             }
             });*/

        },

        /**
         * 删除文件
         * @param path
         * @param callback
         */
        rm: function (path, callback) {

            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/fileops/delete", {
                root: self._root,
                path: path
            });

            this.doAJAX('POST', url, null, callback);
        },

        /**
         * 创建文件夹
         * @param path
         * @param callback
         */
        create: function (path, callback) {
            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/fileops/create_folder", {
                root: self._root,
                path: path
            });

            this.doAJAX('POST', url, null, callback);
        },

        /**
         * 复制
         * @param src
         * @param dest
         * @param callback
         */
        cp: function (src, dest, callback) {
            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/fileops/copy", {
                root: self._root,
                from_path: src,
                to_path: dest
            });

            this.doAJAX('POST', url, null, callback);
        },

        mv: function (src, dest, callback) {
            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/fileops/move", {
                root: self._root,
                from_path: src,
                to_path: dest
            });

            this.doAJAX('POST', url, null, callback);
        },

        delta: function (callback, par) {
            var url = this.encodeURL(self.API_HOST + self.API_VERSION +
                "/delta", par);

            this.doAJAX('POST', url, null, callback);
        },

        /**
         * 请求
         *
         * @param method {string}
         *      --POST, GET, DELETE
         * @param url {string}
         * @param params {json}
         * @param callback
         */
        doAJAX: function (method, url, params, callback) {
            if (!!params) {
                params['access_token'] = self._token;
            }
            else {
                params = {access_token: self._token};
            }
            $.ajax({
                type: method,
                url: url,
                data: params,
                dataType: 'json',
                timeout: 15000,
                success: callback.done,
                error: callback.error
            });
        },

        /**
         * Token
         */
        localAccessToken: {

            /**
             * 设置access_token
             *
             * @param token {string}
             */
            set: function (token) {
                self._token = token;
                //-GHL_DEL-//console.log('access_token=' + self._token);
            },
            /**
             * 获取access_token
             *
             * @returns {string}
             */
            get: function () {
                return self._token;
            },

            unset: function () {
                self._token = "";
            }
        },

        /**
         * 编码url，将参数附加到url后面.
         *
         */
        encodeURL: function (url, params) {
            var res = url;
            var k, i = 0;
            var firstSeparator = (url.indexOf("?") === -1) ? '?' : '&';
            for (k in params) {
                res += (i++ === 0 ? firstSeparator : '&') + encodeURIComponent(k) +
                    '=' + encodeURIComponent(params[k]);
            }
            return res;
        }
    }
}