/**
 * Created by jiangbo1 on 2015/7/14.
 */

function CategoryKey() {

}
CategoryKey.LISTPATH = "CategoryListPath";
CategoryKey.INFO = "CategoryInfo";
CategoryKey.ORDER = "displayOrder";
CategoryKey.ARROW = "playArrowhead";
CategoryKey.TAGTYPE = "tagType";
CategoryKey.TEMPLATE = "templateNumber";
CategoryKey.CATEGORYURL = "CategoryUrl";
CategoryKey.CATEGORYNAME = "CategoryNames";
CategoryKey.CATEGORYICON = "CategoryIcons";
CategoryKey.ITEM = "Item";
CategoryKey.LANGID = "languageId";
CategoryKey.OBJECTNAME = "name";
CategoryKey.OBJECTICON = "icon";
CategoryKey.OBJECTPICTURE = "pictureUrl";

function ObjectKey() {

}
ObjectKey.OBJECTINFO = "ObjectInfo";
ObjectKey.OBJECTPICTURE = "ObjectPictures";
ObjectKey.OBJECTNAME = "ObjectNames";
ObjectKey.OBJECTTYPE = "objectType";
ObjectKey.OBJECTURL = "objectUrl";
ObjectKey.WIDTH = "Width";
ObjectKey.MOVABLE = "movableFlag";
function getCategoryListPath(dom) {
    return getTextByKey(CategoryKey.LISTPATH, dom);
}

function getNodesByKey(k, dom) {
    try {
        var nodes = dom.getElementsByTagName(k);
        return nodes
    }
    catch(ex) {
        DBG_ERROR(ex.message);
    }
    return null;
}

function getTextByKey(k, dom) {
    var text = "";
    try {
        var nodes = dom.getElementsByTagName(k);
        for(var i = 0; i < nodes.length; i++) {
            if(nodes[i].nodeType == 1) {
                text = nodes[i].textContent;
                break;
            }
        }
    }
    catch(ex) {
        DBG_ERROR(ex.message);
    }
    //DBG_ALWAYS("key[" + k + "], value[" + text + "]");
    return text;
}

function getItemByKeyLang(k, dom, langId, defaultData) {
    var item = "";
    var obj_items = dom.getElementsByTagName(CategoryKey.ITEM);
    for(var i = 0; i < obj_items.length; i++) {
        var obj_item_langId = getTextByKey(CategoryKey.LANGID, obj_items[i]);
        var obj_item_value = getTextByKey(k, obj_items[i]);
        if(obj_item_langId == 1) {
            item = obj_item_value;
            if(!!defaultData && item != null) {
                item = getCurrentContentLanguage(item);
                break;
            }
        }
        if(!!obj_item_value && obj_item_langId == langId) {
            item = obj_item_value;
            break;
        }
    }
    return item;
}

function getOwnerId(dom) {
    try {
        var owner = getNodesByKey("Owner", dom);
        var ownerid = getTextByKey("ownerId", owner[0]);
        return ownerid;
    }
    catch(ex) {
        DBG_ERROR(ex.message);
    }
    return null;
}

function getServiceUpdateJSON(dom){
    var srvjson = {
        countryCode: "",
        updateTimestamp: 0,
        brand:null
    }

    try {
        if(null != dom) {
            srvjson.countryCode = dom.getElementsByTagName("countryCode")[0].textContent;
            srvjson.updateTimestamp = dom.getElementsByTagName("updateTimestamp")[0].textContent;
            if(dom.getElementsByTagName("brandCode").length>0){
                srvjson.brand = dom.getElementsByTagName("brandCode")[0].textContent;
            }
        }
    }
    catch (ex){
        DBG_ERROR(ex.message);
    }
    return srvjson
}