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

function FreeviewAPP() {
}

FreeviewAPP.TVAMain = "TVAMain";
FreeviewAPP.ProgramDescription = "ProgramDescription";
FreeviewAPP.GroupInformationTable = "GroupInformationTable";
FreeviewAPP.GroupInformation = "GroupInformation";
FreeviewAPP.GroupType = "GroupType"; //"otherCollection"/"application"
FreeviewAPP.groupId = "groupId"; //"otherCollection"/"application"
FreeviewAPP.BasicDescription = "BasicDescription";
FreeviewAPP.Title = "Title";
FreeviewAPP.RelatedMaterial = "RelatedMaterial";
FreeviewAPP.MediaLocator = "MediaLocator";
FreeviewAPP.MediaUri = "MediaUri"; //image/app
FreeviewAPP.contentType = "contentType"; //"image/png"/"application/vnd.dvb.ait+xml"
FreeviewAPP.MemberOf = "MemberOf";
FreeviewAPP.Suggestion = "Suggestion";

FreeviewAPP.ProgramInformation = "ProgramInformation";
FreeviewAPP.programId = "programId";
FreeviewAPP.OnDemandProgram = "OnDemandProgram";
FreeviewAPP.ProgramURL = "ProgramURL";
FreeviewAPP.Program = "Program";
FreeviewAPP.AuxiliaryURL = "AuxiliaryURL";
FreeviewAPP.StartOfAvailability = "StartOfAvailability";
FreeviewAPP.EndOfAvailability = "EndOfAvailability";
FreeviewAPP.Free = "Free";
function getAttribute(key, dom) {
    try {
        return dom.attributes[key].textContent;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    return "";
}

function getMediaObj(key, dom) {
    var obj = {}, attr, content;
    var mediaNodes = getNodesByKey(key, dom);
    for (var i = mediaNodes.length - 1; i >= 0; i--) {
        attr = getAttribute("contentType", mediaNodes[i]);
        content = mediaNodes[i].textContent;
        if (!attr) continue;
        if (attr.match("image")) obj.ICON = content;
        if (attr.match("application")) obj.URL = content;
    }
    return obj;
}
function getFreeviewOBJ(key, dom) {
    var freeviewObj = [],
        item, groupType, basicDes, members, mediaUri;
    try {
        var groupInfo = getNodesByKey(key, dom);
        if (null == groupInfo) return freeviewObj;
        for (var i = 0; i < groupInfo.length; i++) {
            item = {};
            groupType = getNodesByKey(FreeviewAPP.GroupType, groupInfo[i]);
            basicDes = getNodesByKey(FreeviewAPP.BasicDescription, groupInfo[i]);
            members = getNodesByKey(FreeviewAPP.MemberOf, groupInfo[i]);

            item.groupId = getAttribute("groupId", groupInfo[i]);
            item.group = getAttribute("value", groupType[0]);

            item.title = getTextByKey(FreeviewAPP.Title, basicDes[0]);
            mediaUri = getMediaObj(FreeviewAPP.MediaUri, basicDes[0]);
            item.icon = mediaUri.ICON ? mediaUri.ICON : "";
            item.url = mediaUri.URL ? mediaUri.URL : "";
            if (members.length <= 0) {
                item.memberOf = "";
                item.index = -1;
            } else {
                item.memberOf = getAttribute("crid", members[0]);
                item.index = getAttribute("index", members[0]);
            }
            freeviewObj.push(item);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    return freeviewObj;
}

function getFreeviewGroups(obj) {
    var groups = {};
    for (var i = 0; i < obj.length; i++) {
        var item = obj[i];
        if (isFreeviewGroup(item)) {
            groups[item.groupId] = item.title;
        }
    }
    return groups;
}

function isFreeviewGroup(item) {
    //need test  return ("" == item.memberOf && -1 == item.index);
    return (!!item.group && "otherCollection" == item.group);
}
function isFreeviewApp(item) {
    //need test return ("" == item.memberOf && -1 == item.index);
    return (!!item.group && "application" == item.group);
}

function isFreeviewPromoted(groups, item) {
    if (!isFreeviewApp(item)) return false;    //need test
    if (!groups[item.memberOf]) return false;
    return (item.memberOf.toLowerCase().match("promoted"));
}
function isFreeviewOther(groups, item) {
    if (!isFreeviewApp(item)) return false;
    if (!groups[item.memberOf]) return false;
    return (item.memberOf.toLowerCase().match("other"));
}

function consLauncherData() {
    return {
        canMoves: [],
        canRemoves: [],
        imgs: [],
        storeTypes: [],
        txts: [],
        urlTypes: [],
        urls: [],
        widths: []
    };
}
function getAitObj(dom) {
    var ret = [];
    var obj = {}, node = {}, identifier, descriptor, transport;
    var ait_nodes = getNodesByKey("Application", dom);
    if(!ait_nodes) return ret;
    for (var i = 0; i < ait_nodes.length; i++) {
        node = ait_nodes[i];
        obj = {};
        //name
        obj.name = getTextByKey("appName", node);

        //identifier
        identifier = getNodesByKey("applicationIdentifier", node)[0];
        obj.orgId = getTextByKey("orgId", identifier);
        obj.appId = getTextByKey("appId", identifier);

        //descriptor
        descriptor = getNodesByKey("applicationDescriptor", node)[0];
        obj.type = getTextByKey("OtherApp", descriptor);
        obj.controlCode = getTextByKey("controlCode", descriptor);
        obj.visibility = getTextByKey("visibility", descriptor);
        obj.serviceBound = getTextByKey("serviceBound", descriptor);
        obj.priority = getTextByKey("priority", descriptor);
        obj.version = getTextByKey("version", descriptor);
        obj.profile = getTextByKey("profile", descriptor);
        obj.versionMajor = getTextByKey("versionMajor", descriptor);
        obj.versionMinor = getTextByKey("versionMinor", descriptor);
        obj.versionMicro = getTextByKey("versionMicro", descriptor);

        //transport
        transport = getNodesByKey("applicationTransport", node)[0];
        if (getAttribute("xsi:type", transport) == "mhp:HTTPTransportType") {
            obj.baseURL = getTextByKey("URLBase", transport);
        }

        //location
        obj.location = getTextByKey("applicationLocation", node);

        ret.push(copyObj(obj));
    }
    return ret;
}
/////////////////////////
function getServiceTableObj(dom) {
    var ret = [];
    var serviceInfos = getNodesByKey("ServiceInformation", dom);
    var item = {}, node = {}, genres = [], related = {};
    for (var i = 0; i < serviceInfos.length; i++) {
        node = serviceInfos[i];
        item = {};
        item.type = getAttribute("xsi:type", node);
        item.serviceId = getAttribute("serviceId", node);
        item.name = getTextByKey("Name", node);

        item.owner = getTextByKey("Owner", node);
        item.serviceUrl = getTextByKey("ServiceURL", node);

        //genre may not be needed
        genres = getNodesByKey("ServiceGenre", node);
        item.genre = [];
        for (var j = 0; j < genres.length; j++) {
            item.genre.push(parseSchemeTermToString(getAttribute("href", genres[j])));
        }

        related = getMediaObj(FreeviewAPP.MediaUri, node);
        item.icon = related.ICON;
        item.url = related.URL;
        ret.push(copyObj(item));
    }
    return ret;
}

function getProgramInformationTableObj(dom) {
    var ret = [];
    var pinfos = getNodesByKey("ProgramInformation", dom);
    var pinfo = {}, item = {}, titles = [], synopsis = [], related = {}, genre_dom = null;
    var keywords = [], keywords_dom = null, parent_dom = null, rating = null;
    var credits_dom = null, credits_actor = [], credits_crew = [], credits_item = null, role = null, org = null;
    var person_dom = null, given_name = null, family_name =null, character_dom = null;
    for (var i = 0; i < pinfos.length; i++) {
        pinfo = pinfos[i];
        item = {};
        item.programId = getAttribute("programId", pinfo);

        //title
        titles = getNodesByKey("Title", pinfo);
        for (var j = 0; j < titles.length; j++) {
            item[getAttribute("type", titles[j]) + "_title"] = titles[j].textContent;
        }

        //synopsis
        synopsis = getNodesByKey("Synopsis", pinfo);
        for (j = 0; j < synopsis.length; j++) {
            item[synopsis[j].attributes[0].value + "_synopsis"] = synopsis[j].textContent;
        }
        //keywords
        keywords_dom = getNodesByKey("Keyword", pinfo);
        if (keywords_dom && keywords_dom.length > 0) {
            for (j = 0; j < keywords_dom.length; j++) {
                keywords.push(keywords_dom[j].textContent);
            }
        }
        item.keywords = keywords;
        //ParentalGuidance
        parent_dom = getNodesByKey("ParentalGuidance", pinfo);
        if (parent_dom && parent_dom.length > 0) {
            for (j = 0; j<parent_dom.length; j++) {
                item.explanatory = getTextByKey("ExplanatoryText", parent_dom[j]);
                rating = getNodesByKey("ParentalRating", parent_dom[j]);
                if (rating && rating.length > 0) {
                    for (var k = 0; k < rating.length; k++) {
                        item.parent_rating =  parseSchemeTermToString(getAttribute("href", rating[k]));
                        if (!!item.parent_rating) {
                            break;
                        }
                    }
                }
            }
        }
        //CreditsList
        credits_dom = getNodesByKey("CreditsItem", pinfo);
        if (credits_dom && credits_dom.length > 0) {
            for (j = 0; j < credits_dom.length; j++) {
                org = getTextByKey("OrganizationName", credits_dom[j]);
                if (org) {
                    item.org = org;
                    continue;
                }
                credits_item = {};
                role = getAttribute("role", credits_dom[j]);
                credits_item.role = parseRoleToString(role);
                person_dom = getNodesByKey("PersonName", credits_dom[j]);
                if (person_dom && person_dom.length > 0) {
                    given_name = getTextByKey("GivenName", person_dom[0]);
                    family_name = getTextByKey("FamilyName", person_dom[0]);
                    credits_item.person_given_name= given_name;
                    credits_item.person_family_name = family_name;
                }

                character_dom = getNodesByKey("Character", credits_dom[j]);
                if (character_dom && character_dom.length > 0) {
                    given_name = getTextByKey("GivenName", character_dom[0]);
                    family_name = getTextByKey("FamilyName", character_dom[0]);
                    credits_item.character_given_name= given_name;
                    credits_item.character_family_name = family_name;
                }
                if (!!credits_item.role) {
                    if (credits_item.role == "Actor") {
                        credits_actor.push(copyObj(credits_item));
                    } else {
                        credits_crew.push(copyObj(credits_item));
                    }
                }
            }
        }
        item.actors = credits_actor;
        item.crews = credits_crew;

        //genre
        genre_dom = getNodesByKey("Genre", pinfo);
        if (genre_dom && genre_dom.length > 0) {
            item.genre = parseSchemeTermToString(getAttribute("href", genre_dom[0]));
        }
        related = getMediaObj(FreeviewAPP.MediaUri, pinfo);
        item.icon = related.ICON;
        item.url = related.URL;
        ret.push(copyObj(item));
    }
    return ret;
}
function getProgramLocationTableObj(dom) {
    var ret = {};
    var schedule = [], ondemand = [];
    var s_dom = getNodesByKey("Schedule", dom);
    var demand_dom = getNodesByKey("OnDemandProgram", dom);
    var events = [], item = {};
    var av = null;
    //schedule
    if (s_dom) {
        var events_dom = null;
        var e_dom = null;
        var av_attr = null;
        var schedule_dom = null;
        for (var l = 0; l < s_dom.length; l++) {
            schedule_dom = s_dom[l];
            schedule.serviceId = getAttribute("serviceIDRef", schedule_dom);
            // s_obj.startTime = Date.parse(getAttribute("start", schedule_dom)) / GLOBAL.MILLIBASE;
            // s_obj.endTime = Date.parse(getAttribute("end", schedule_dom)) / GLOBAL.MILLIBASE;
            events_dom = getNodesByKey("ScheduleEvent", schedule_dom);

            for (var j = 0; j < events_dom.length; j++) {
                e_dom = events_dom[j];
                item = {};
                item.programId = getAttribute("crid", getNodesByKey("Program", e_dom)[0]);
                item.programUrl = getTextByKey("ProgramURL", e_dom);
                item.eventId = parseInt("0x" + item.programUrl.substr(item.programUrl.indexOf(";")+1));
                item.startTime = Date.parse(getTextByKey("PublishedStartTime", e_dom)) / GLOBAL.MILLIBASE;
                item.duration = parseDurationStringToSeconds(getTextByKey("PublishedDuration", e_dom));
                av = getNodesByKey("InstanceDescription", e_dom);
                if (!!av && (av.length > 0)) {
                    av_attr = parseAVAttributes(av[0]);
                }
                item.video_desc = av_attr.video_desc;
                item.audio_desc = av_attr.audio_desc;
                item.subtitle = av_attr.subtitle;
                item.program_ad = av_attr.program_ad;
                item.signFlag = av_attr.signFlag;
                events.push(copyObj(item));
            }
        }
        schedule.events = copyObj(events);
        ret.schedule = copyObj(schedule);
        //free memory
        events = null;
        schedule = null;
    }
    //OnDemandProgram
    if (demand_dom) {
        for (var i = 0; i < demand_dom.length; i++) {
            var d_dom = demand_dom[i];
            var d_item = {
                programId: getAttribute("crid", getNodesByKey("Program", d_dom)[0]),
                programUrl: getTextByKey("ProgramURL", d_dom),
                auxiliaryURL: getTextByKey("AuxiliaryURL", d_dom),
                media_availability: false,
                fepg_availability: false,
                duration: parseDurationStringToSeconds(getTextByKey("PublishedDuration", d_dom)),
                startAvailable: Date.parse(getTextByKey("StartOfAvailability", d_dom)) / GLOBAL.MILLIBASE,
                endAvailable: Date.parse(getTextByKey("EndOfAvailability", d_dom)) / GLOBAL.MILLIBASE
            };
            av = getNodesByKey("InstanceDescription", d_dom);
            if (!!av && (av.length > 0)) {
                av_attr = parseAVAttributes(av[0]);
            }
            d_item.video_desc = av_attr.video_desc;
            d_item.audio_desc = av_attr.audio_desc;
            d_item.subtitle = av_attr.subtitle;
            d_item.program_ad = av_attr.program_ad;
            d_item.signFlag = av_attr.signFlag;
            var genres = getNodesByKey("Genre", d_dom);
            for (var k = 0; k < genres.length; k++) {
                var info = getAttribute("href", genres[k]);
                if (info.indexOf("MediaAvailabilityCS") >= 0) {
                    d_item.media_availability = (info.indexOf("media_available") >= 0);
                } else if (info.indexOf("FEPGAvailabilityCS") >= 0) {
                    d_item.fepg_availability = (info.indexOf("fepg_available") >= 0);
                }
            }
            ondemand.push(d_item);
        }
        ret.ondemand = ondemand;
    }
    return ret;
}
function parseAVAttributes(dom) {
    var avAttr = {
        video_desc: "",
        audio_desc: "",
        subtitle: 0,
        program_ad: 0,
        signFlag: 0
    };
    var tmp_dom = getNodesByKey("AVAttributes", dom);
    var av_dom = null;
    if (tmp_dom && tmp_dom.length > 0) {
        av_dom = tmp_dom[0];
        //AudioAttributes
        var audio_dom = getNodesByKey("AudioAttributes", av_dom);
        var audio_desc = "";
        var audio_mix_type_dom = null;
        if (audio_dom && audio_dom.length > 0) {
            var audio_lang = null;
            for(var i = 0; i < audio_dom.length; i++) {
                audio_lang = getNodesByKey("AudioLanguage", audio_dom[i]);
                if (audio_lang && audio_lang.length > 0) {
                    audio_desc = parseSchemeTermToString(getAttribute("purpose", audio_lang[0]));
                    if (audio_desc == "visually impaired") {
                        avAttr.program_ad = 1;
                    } else if (audio_desc == "main audio") {
                        audio_mix_type_dom = getNodesByKey("MixType", audio_dom[i]);
                        if (audio_mix_type_dom) {
                            avAttr.audio_desc = parseSchemeTermToString(getAttribute("href", audio_mix_type_dom[0]));
                        }
                    }
                }
            }
        }
        //VideoAttributes
        var video_dom = getNodesByKey("VideoAttributes", av_dom);
        if (video_dom && video_dom.length > 0) {
            var v_size = parseInt(getTextByKey("VerticalSize", video_dom[0]));
            if (v_size < 720) {
                avAttr.video_desc = "SD";
            } else if (v_size>=720 && v_size<2160) {
                avAttr.video_desc = "HD";
            } else if (v_size>=2160 && v_size<4320) {
                avAttr.video_desc = "4K";
            } else if (v_size>=4320) {
                avAttr.video_desc = "8K";
            }
        }
    }
    //CaptioningAttributes
    var cap_dom = getNodesByKey("CaptionLanguage", dom);
    if (cap_dom && cap_dom.length > 0) {
        if (getAttribute("closed", cap_dom[0]) == "true") {
            avAttr.subtitle = 1;
        }
    }
    //SignLanguage
    var sgn_dom = getNodesByKey("SignLanguage", dom);
    if (sgn_dom && sgn_dom.length > 0) {
        if (getAttribute("closed", sgn_dom[0]) == "false") {
            avAttr.signFlag = 1;
        }
    }
    return avAttr;
}

function parseSchemeTermToString(term) {
    var ret = "";
    switch (term) {
        //Audio Mix Types
        case "urn:mpeg:mpeg7:cs:AudioPresentationCS:2001:2":
            ret = "Mono";
            break;
        case "urn:mpeg:mpeg7:cs:AudioPresentationCS:2001:3":
            ret = "Stereo";
            break;
        case "urn:mpeg:mpeg7:cs:AudioPresentationCS:2001:5":
            ret = "Home	theatre 5.1";
            break;
        //Audio Purpose
        case "urn:tva:metadata:cs:AudioPurposeCS:2007:1":
            ret = "visually impaired";
            break;
        case "urn:tva:metadata:cs:AudioPurposeCS:2007:6":
            ret = "main audio";
            break;
        //Genre
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:0"://Unclassified
            ret = "Unclassified";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:1"://Movie
            ret = "Movie";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:2"://News and factual
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:2.1"://News/Current affairs
            ret = "News";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:2.2"://Arts/Culture (without music)
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:2.3"://Social/Political Issues/Economics
            ret = "Factual";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:3"://Entertainment
            ret = "Entertainment";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:3.1"://Show/Game show
            ret = "Shows";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:3.2"://Music/Ballet/Dance
            ret = "Music";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:4"://Sport
            ret = "Sport";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:5"://Children's/Youth's programming
            ret = "Kids";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:6"://Education/Science/Factual topics
            ret = "Education";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:7"://Lifestyle/Leisure hobbies
            ret = "Lifestyle";
            break;
        case "urn:fvc:metadata:cs:ContentSubjectCS:2014-07:8"://Drama
            ret = "Drama";
            break;
        //service genre
        case "urn:fvc:metadata:cs:ServiceTypeCS:2014-11:content_owning":
            ret = "Content Owning Service";
            break;
        case "urn:fvc:metadata:cs:ServiceTypeCS:2014-11:linear":
            ret = "Linear Service";
            break;
        case "urn:fvc:metadata:cs:ServiceTypeCS:2014-11:ondemand":
            ret = "On Demand Service";
            break;
        case "urn:tva:metadata:cs:MediaTypeCS:2010:7.1.1":
            ret = "Linear, Audio only";
            break;
        case "urn:tva:metadata:cs:MediaTypeCS:2010:7.1.2":
            ret = "Linear, Video only";
            break;
        case "urn:tva:metadata:cs:MediaTypeCS:2010:7.1.3":
            ret = "Linear, Audio and video";
            break;
        case "urn:tva:metadata:cs:MediaTypeCS:2010:7.1.4":
            ret = "MHEG";
            break;
        case "urn:tva:metadata:cs:OriginationCS:2011:5.8":
            ret = "TV";
            break;
        case "urn:tva:metadata:cs:OriginationCS:2011:5.9":
            ret = "Radio";
            break;
        case "urn:fvc:metadata:cs:ServiceMetadataCS:2015-08:unenhanced":
            ret = "unenhanced";
            break;
        case "urn:fvc:metadata:cs:ServiceMetadataCS:2015-08:enhanced":
            ret = "enhanced";
            break;
        case "urn:fvc:metadata:cs:ServiceMetadataCS:2015-08:enhanced_ondemand":
            ret = "enhanced_ondemand";
            break;
        //ParentalRating
        case "urn:dtg:cs:BBFCContentRatingCS:2002:U":
        case "urn:fvc:metadata:cs:ContentRatingCS:2014-07:no_parental_controls":
        case "urn:fvc:metadata:cs:ContentRatingCS:2014-07:unrated":
            ret = "U";
            break;
        case "urn:dtg:cs:BBFCContentRatingCS:2002:PG":
        case "urn:fvc:metadata:cs:ContentRatingCS:2014-07:parental_guidance":
            ret = "PG";
            break;
        case "urn:dtg:cs:BBFCContentRatingCS:2002:12":
        case "urn:fvc:metadata:cs:ContentRatingCS:2014-07:twelve":
            ret = "12+";
            break;
        case "urn:dtg:cs:BBFCContentRatingCS:2002:15":
        case "urn:fvc:metadata:cs:ContentRatingCS:2014-07:fifteen":
            ret = "15+";
            break;
        case "urn:fvc:metadata:cs:ContentRatingCS:2014-07:sixteen":
            ret = "16+";
            break;
        case "urn:dtg:cs:BBFCContentRatingCS:2002:18":
        case "urn:fvc:metadata:cs:ContentRatingCS:2014-07:eighteen":
            ret = "18+";
            break;
        case "urn:dtg:metadata:cs:DTGContentWarningCS:2011:G":
            ret = "G";
            break;
        case "urn:dtg:metadata:cs:DTGContentWarningCS:2011:W":
            ret = "W";
            break;
    }
    return ret;
}

var role_lookup = {
    "urn:mpeg:mpeg7:cs:RoleCS:2001:ACTOR": "Actor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:AGGREGATOR": "Aggregator",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:ANCHOR": "Anchor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:ANIMATOR": "Animator",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:ART-DIRECTOR": "Art Director",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:ASSISTANT-DIRECTOR": "Assistant Director",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:AUTHOR": "Author",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:BROADCASTER": "Broadcaster",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:CAMERA-ASSISTANT": "Camera Assistant",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:CAMERA-OPERATOR": "Camera Operator",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:CG-ARTIST": "Computer Graphics Artist",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:COMPOSER": "Composer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:CONTINUITY-PERSON": "Continuity Person",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:COSTUMER": "Costumer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:COSTUME-SUPERVISOR": "Costume Supervisor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:DANCER": "Dancer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:DIRECTOR": "Director",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:DISSEMINATOR": "Disseminator",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:DISTRIBUTOR": "Distributor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:EXECUTIVE-PRODUCER": "Executive Producer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:INTERVIEWER": "Interviewer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:LIGHTING-OPERATOR": "Lighting Operator",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:LIGHTING-SUPERVISOR": "Lighting Supervisor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:MAKEUP-ARTIST": "Makeup Artist",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:MAKEUP-SUPERVISOR": "Makeup Supervisor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:MUSICIAN": "Musician",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:MUSIC-SUPERVISOR": "Music Supervisor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:NARRATOR": "Narrator",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:PERFORMER": "Performer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:PRODUCER": "Producer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:PRODUCTION-ASSISTANT": "Production Assistant",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:PRODUCTION-DESIGNER": "Production Designer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:PROPERTY-ASSISTANT": "Property Assistant",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:PROPERTY-MASTER": "Property Master",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:PUBLISHER": "Publisher",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:REPORTER": "Reporter",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SCRIPTWRITER": "Scriptwriter",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SET-DESIGNER": "Set Designer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SET-MAKER": "Set Maker",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SFX-ASSISTANT": "Special Effects Assistant",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SFX-SUPERVISOR": "Special Effects Supervisor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SINGER": "Singer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SOUND-EFFECTS-PERSON": "Sound Effects Person",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SOUND-ENGINEER": "Sound Engineer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SOUND-SUPERVISOR": "Sound Supervisor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:STAFF": "Staff",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SWITCHER": "Switcher",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:SYNDICATOR": "Syndicator",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:TECHNICAL-DIRECTOR": "Technical Director",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:TIMEKEEPER": "Timekeeper",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:TRANSPORTATION-CAPTAIN": "Transportation Captain",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:UNKNOWN": "Unknown",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:VIDEO-ENGINEER": "Video Engineer",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:VISUAL-EFFECTS-SUPERVISOR ": "Visual Effects Supervisor",
    "urn:mpeg:mpeg7:cs:RoleCS:2001:WEBCASTER": "Webcaster",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD1": "Advertising Agency",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD2": "Advertising Production Company",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD3": "Advertiser",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD4": "Commissioning Channel",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD5": "Commissioning Brand",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD6": "Presenter",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD7": "Studio Manager",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD8": "Assistant Studio Manager",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD9": "Caption Author",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD10": "Electrician",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD11": "Judge",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD12": "Series Editor",
    "urn:tva:metadata:cs:TVARoleCS:2010:AD13": "Series Producer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V2": "Scenario",
    "urn:tva:metadata:cs:TVARoleCS:2010:V19": "Commissioning Broadcaster",
    "urn:tva:metadata:cs:TVARoleCS:2010:V20": "Production Company",
    "urn:tva:metadata:cs:TVARoleCS:2010:V22": "Production Department",
    "urn:tva:metadata:cs:TVARoleCS:2010:V30": "Editor-in-chief",
    "urn:tva:metadata:cs:TVARoleCS:2010:V31": "Editor-of-the-Day",
    "urn:tva:metadata:cs:TVARoleCS:2010:V32": "Commentary or Commentator",
    "urn:tva:metadata:cs:TVARoleCS:2010:V42": "Conductor",
    "urn:tva:metadata:cs:TVARoleCS:2010:V43": "Participant",
    "urn:tva:metadata:cs:TVARoleCS:2010:V44": "Illustrator",
    "urn:tva:metadata:cs:TVARoleCS:2010:V45": "Photographer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V49": "Sound Recordist",
    "urn:tva:metadata:cs:TVARoleCS:2010:V55": "Manufacturer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V76": "Adaptor",
    "urn:tva:metadata:cs:TVARoleCS:2010:V77": "Set Dresser",
    "urn:tva:metadata:cs:TVARoleCS:2010:V79": "Consultant",
    "urn:tva:metadata:cs:TVARoleCS:2010:V80": "Choreographer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V82": "Visual Editor",
    "urn:tva:metadata:cs:TVARoleCS:2010:V83": "Director of photography",
    "urn:tva:metadata:cs:TVARoleCS:2010:V88": "Orchestra",
    "urn:tva:metadata:cs:TVARoleCS:2010:V94": "Treatment/Programme Proposal",
    "urn:tva:metadata:cs:TVARoleCS:2010:V95": "Translation",
    "urn:tva:metadata:cs:TVARoleCS:2010:V96": "Expert",
    "urn:tva:metadata:cs:TVARoleCS:2010:V97": "Interviewed Guest",
    "urn:tva:metadata:cs:TVARoleCS:2010:V103": "Announcer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V105": "Special Effects",
    "urn:tva:metadata:cs:TVARoleCS:2010:V106": "Key talent",
    "urn:tva:metadata:cs:TVARoleCS:2010:V110": "Casting",
    "urn:tva:metadata:cs:TVARoleCS:2010:V117": "Witness",
    "urn:tva:metadata:cs:TVARoleCS:2010:V483": "Correspondent",
    "urn:tva:metadata:cs:TVARoleCS:2010:V484": "Costume designer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V485": "Dresser",
    "urn:tva:metadata:cs:TVARoleCS:2010:V486": "Editor/Producer (News)",
    "urn:tva:metadata:cs:TVARoleCS:2010:V487": "Floor Manager",
    "urn:tva:metadata:cs:TVARoleCS:2010:V488": "Graphic Assistant",
    "urn:tva:metadata:cs:TVARoleCS:2010:V489": "Graphic Designer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V490": "Post-Production editor",
    "urn:tva:metadata:cs:TVARoleCS:2010:V491": "Production Manager",
    "urn:tva:metadata:cs:TVARoleCS:2010:V492": "Production Secretary",
    "urn:tva:metadata:cs:TVARoleCS:2010:V493": "Programme Production Researcher",
    "urn:tva:metadata:cs:TVARoleCS:2010:V494": "Rigger",
    "urn:tva:metadata:cs:TVARoleCS:2010:V495": "Runner",
    "urn:tva:metadata:cs:TVARoleCS:2010:V496": "Scenic Operative",
    "urn:tva:metadata:cs:TVARoleCS:2010:V497": "Assistant Producer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V498": "Broadcast Assistant",
    "urn:tva:metadata:cs:TVARoleCS:2010:V708": "Dubber",
    "urn:tva:metadata:cs:TVARoleCS:2010:V709": "Key character",
    "urn:tva:metadata:cs:TVARoleCS:2010:V710": "Stunts",
    "urn:tva:metadata:cs:TVARoleCS:2010:V714": "Fight Director",
    "urn:tva:metadata:cs:TVARoleCS:2010:V715": "Script Supervisor",
    "urn:tva:metadata:cs:TVARoleCS:2010:V716": "Second Assistant Director",
    "urn:tva:metadata:cs:TVARoleCS:2010:V717": "Second Unit Director",
    "urn:tva:metadata:cs:TVARoleCS:2010:V718": "Sound Designer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V719": "Music Arranger",
    "urn:tva:metadata:cs:TVARoleCS:2010:V720": "Causeur",
    "urn:tva:metadata:cs:TVARoleCS:2010:V721": "News Reader",
    "urn:tva:metadata:cs:TVARoleCS:2010:V724": "Assistant Chief Lighting Technician",
    "urn:tva:metadata:cs:TVARoleCS:2010:V725": "Carpenter",
    "urn:tva:metadata:cs:TVARoleCS:2010:V727": "Dialogue Coach",
    "urn:tva:metadata:cs:TVARoleCS:2010:V728": "Draughtsman",
    "urn:tva:metadata:cs:TVARoleCS:2010:V729": "Hairdresser",
    "urn:tva:metadata:cs:TVARoleCS:2010:V730": "Leadman",
    "urn:tva:metadata:cs:TVARoleCS:2010:V734": "Assistant Visual Editor",
    "urn:tva:metadata:cs:TVARoleCS:2010:V735": "Clapper Loader",
    "urn:tva:metadata:cs:TVARoleCS:2010:V736": "Focus Puller",
    "urn:tva:metadata:cs:TVARoleCS:2010:V737": "Foley Artist",
    "urn:tva:metadata:cs:TVARoleCS:2010:V738": "Foley Editor",
    "urn:tva:metadata:cs:TVARoleCS:2010:V739": "Foley Mixer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V740": "Grip",
    "urn:tva:metadata:cs:TVARoleCS:2010:V741": "Key Grip",
    "urn:tva:metadata:cs:TVARoleCS:2010:V742": "Matte Artist",
    "urn:tva:metadata:cs:TVARoleCS:2010:V743": "Pyrotechnician",
    "urn:tva:metadata:cs:TVARoleCS:2010:V744": "Second Assistant Camera",
    "urn:tva:metadata:cs:TVARoleCS:2010:V745": "Sound Mixer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V746": "Vision mixer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V748": "Animal Trainer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V749": "Armourer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V750": "Greensman",
    "urn:tva:metadata:cs:TVARoleCS:2010:V751": "Location Manager",
    "urn:tva:metadata:cs:TVARoleCS:2010:V753": "Sign Language",
    "urn:tva:metadata:cs:TVARoleCS:2010:V754": "Subtitles",
    "urn:tva:metadata:cs:TVARoleCS:2010:V755": "Transportation Manager",
    "urn:tva:metadata:cs:TVARoleCS:2010:V807": "Choir",
    "urn:tva:metadata:cs:TVARoleCS:2010:V808": "Ensemble",
    "urn:tva:metadata:cs:TVARoleCS:2010:V809": "Music Group",
    "urn:tva:metadata:cs:TVARoleCS:2010:V810": "Librettist",
    "urn:tva:metadata:cs:TVARoleCS:2010:V811": "Lyricist",
    "urn:tva:metadata:cs:TVARoleCS:2010:V812": "Computer programmer",
    "urn:tva:metadata:cs:TVARoleCS:2010:V813": "Puppeteer"
};
/////////////////////////////////////////////////////////
function parseRoleToString(str) {
    return role_lookup[str];
}

function getSearchMediaObj(key, dom) {
    var obj = [], content;
    var mediaNodes = getNodesByKey(key, dom);
    for (var i = 0; i < mediaNodes.length; i++) {
        content = mediaNodes[i].textContent;
        obj.push(content);
    }
    return obj;
}

function getSearchHowRelatedObj(key, dom) {
    var obj = [], content;
    var mediaNodes = getNodesByKey(key, dom);
    for (var i = 0; i < mediaNodes.length; i++) {
        content = getAttribute("href", mediaNodes[i]);
        obj.push(content);
    }
    return obj;
}

function getSearchProgramOBJ(key, dom) {
    var freeviewObj = [],
        item, basicDes, members, mediaUri;
    try {
        var groupInfo = getNodesByKey(key, dom);
        if (null == groupInfo) return freeviewObj;
        for (var i = 0; i < groupInfo.length; i++) {
            item = {};
            basicDes = getNodesByKey(FreeviewAPP.BasicDescription, groupInfo[i]);
            members = getNodesByKey(FreeviewAPP.MemberOf, groupInfo[i]);

            item.programId = getAttribute("programId", groupInfo[i]);
            var title = getSearchMediaObj(FreeviewAPP.Title, basicDes[0]);
            item.title = getTextByKey(FreeviewAPP.Title, basicDes[0]);
            if ("" == item.title) continue;
            if(title.length>1){
                item.secondaryTitle = title[1];
            }
            mediaUri = getMediaObj(FreeviewAPP.MediaUri, basicDes[0]);
            item.icon = mediaUri.ICON ? mediaUri.ICON : "";
            if (members.length <= 0) {
                item.memberOf = "";
                item.index = -1;
            } else {
                item.memberOf = getAttribute("crid", members[0]);
                item.index = getAttribute("index", members[0]);
            }
            item.duration = 0;
            item.ProgramURL = "";
            item.serviceIdRef = "";
            freeviewObj.push(item);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    return freeviewObj;
}

function getSearchGroupInformationOBJ(key, dom) {
    var freeviewObj = [],
        item, basicDes, mediaUri;
    try {
        var groupInfo = getNodesByKey(key, dom);
        if (null == groupInfo) return freeviewObj;
        for (var i = 0; i < groupInfo.length; i++) {
            item = {};
            item.urls = [];
            item.HowRelated = [];
            item.programId = getAttribute(FreeviewAPP.groupId, groupInfo[i]);
            item.numOfItems = getAttribute("numOfItems", groupInfo[i]);
            basicDes = getNodesByKey(FreeviewAPP.BasicDescription, groupInfo[i]);
            if (basicDes != null) {
                mediaUri = getSearchMediaObj(FreeviewAPP.MediaUri, basicDes[0]);
                item.urls = mediaUri;
                mediaUri = getSearchHowRelatedObj("HowRelated", basicDes[0]);
                item.HowRelated = mediaUri;
            } else {
                item.urls = [];
            }

            freeviewObj.push(item);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    return freeviewObj;
}

function getSearchOnDemandProgramOBJ(key, dom) {
    var freeviewObj = [],
        item, Program, Free;
    try {
        var groupInfo = getNodesByKey(key, dom);
        if (null == groupInfo) return freeviewObj;
        for (var i = 0; i < groupInfo.length; i++) {
            item = {};
            Program = getNodesByKey(FreeviewAPP.Program, groupInfo[i]);
            item.Program = getAttribute("crid", Program[0]);
            item.serviceIdRef = getAttribute("serviceIDRef", groupInfo[i]);
            item.ProgramURL = getTextByKey(FreeviewAPP.ProgramURL, groupInfo[i]);
            item.StartOfAB = Date.parse(getTextByKey(FreeviewAPP.StartOfAvailability, groupInfo[i])) / GLOBAL.MILLIBASE;
            item.EndOfAB = Date.parse(getTextByKey(FreeviewAPP.EndOfAvailability, groupInfo[i])) / GLOBAL.MILLIBASE;
            Free = getNodesByKey(FreeviewAPP.Free, groupInfo[i]);
            item.Free = getAttribute("value", Free[0]);
            item.duration = parseDurationStringToSeconds(getTextByKey("PublishedDuration",groupInfo[i]));
            freeviewObj.push(item);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    return freeviewObj;
}

function parseDurationStringToSeconds(duration_string) {
    var ret = 0;
    var index = -1, spliter = ["H", "M", "S"], arr = [];
    if (duration_string.indexOf("PT") == 0) {
        duration_string = duration_string.slice(2);
        for (var i = 0; i < spliter.length; i++) {
            index = duration_string.indexOf(spliter[i]);
            if (index >= 0) {
                arr.push(parseInt(duration_string.slice(0, index)));
                duration_string = duration_string.slice(index + 1);
                index = -1;
            } else {
                arr.push(0);
            }
        }
        ret = 3600 * arr[0] + 60 * arr[1] + arr[2];
    }
    return ret;
}



//////////////////////////////////////////////////////////
function freeviewToLauncher(f, l) {
    l.canMoves.push(false);
    l.canRemoves.push(false);
    l.imgs.push(f.icon + "?w=336");
    l.storeTypes.push(0);
    l.txts.push(f.title);
    l.urlTypes.push(CmdURLType.START_HBBTV_APP);
    l.urls.push(f.url);
    l.widths.push(336);
}
function concatLauncherData(d1, d2) {
    var d = consLauncherData();
    d.canMoves = d1.canMoves.concat(d2.canMoves);
    d.canRemoves = d1.canRemoves.concat(d2.canRemoves);
    d.imgs = d1.imgs.concat(d2.imgs);
    d.storeTypes = d1.storeTypes.concat(d2.storeTypes);
    d.txts = d1.txts.concat(d2.txts);
    d.urlTypes = d1.urlTypes.concat(d2.urlTypes);
    d.urls = d1.urls.concat(d2.urls);
    d.widths = d1.widths.concat(d2.widths);
    return d;
}
var FREEVIEWAPP = {
    APP_LIST: null,
    UPDATE_TIME: 0,
    RETRY_TIMES: 0,
    ENABLE: true,
    ALL_GET: false,
    NEW_DOWNLOADED: false
};
function getFreeviewAppList() {
    if (!tv) return getFreeviewAppList_old();
    try {
        freeview_manager.getAppList();
    }
    catch (ex){
        DBG_ERROR(ex.message);
    }
    return null;
}

function getFreeviewAppList_old() {
    var dom = readXMLDOM("fvp_applist.xml", tv ? 1 : 3);
    if (null == dom) return null;
    var groupType = null, basicDes = null, members = null;
    var promotedApp = consLauncherData(), otherApp = consLauncherData();
    var appObj = {
        Icon: "",
        Name: "Freeview",
        Order: -1,
        canPlay: false,
        data: null,
        isPage: false,
        postfix: "",
        tagType: "92",
        template: "template2000",
        timeStamp: 0

    };
    try {
        var freeviewObj = getFreeviewOBJ(FreeviewAPP.GroupInformation, dom);
        var groups = getFreeviewGroups(freeviewObj);
        for (var i = 0; i < freeviewObj.length; i++) {
            var item = freeviewObj[i];
            if (isFreeviewGroup(item)) continue;
            if (isFreeviewPromoted(groups, item)) {
                freeviewToLauncher(item, promotedApp);
            }
            else {
                freeviewToLauncher(item, otherApp);
            }
        }
        appObj.data = concatLauncherData(promotedApp, otherApp);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    return appObj;
}