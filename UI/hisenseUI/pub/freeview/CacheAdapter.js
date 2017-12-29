/**
 * Created by yangcheng3 on 2017-2-21.
 */
var cache_adapter = {};
(function () {
    var wsCache = null;
    cache_adapter.init = function () {
        wsCache = new WebStorageCache();
        wsCache.deleteAllExpires();
        wsCache.setAutoDelete(false);
    };
    cache_adapter.setCache = function (name, data, exp) {
        try {
            if (wsCache) {
                wsCache.set(name, data, {exp: new Date(exp * GLOBAL.MILLIBASE).toString()});
            }
        } catch (ex) {
            DBG_ERROR("cache_adapter.setCache error = " + ex.message);
        }
    };
    cache_adapter.getCache = function (name, shouldGetExpData) {
        var ret = null;
        try {
            if (wsCache) {
                ret = wsCache.get(name, shouldGetExpData);
            }
        } catch (ex) {
            DBG_ERROR("cache_adapter.getCache error = " + ex.message);
        }
        return ret;
    };
    cache_adapter.touchCache = function (name, exp) {
        try {
            if (wsCache) {
                wsCache.touch(name, new Date(exp * GLOBAL.MILLIBASE).toString());
            }
        } catch (ex) {
            DBG_ERROR("cache_adapter.touchCache error = " + ex.message);
        }
    };
})();