// --------------------------------------------------------
/**
 * @brief Convenience sub model for accessing
 * the middleware servicelist model objects as defined in
 * loewe/common/biz/api/include/model/values/values-servicelist.h.  
 * 
 * @author Sascha Radike
 * 
 * Copyright (c) 2014 LOEWE Opta GmbH, Kronach. All rights reserved. */
//--------------------------------------------------------

/**
 * ServicelistModelDefines class.
 * Contains all defined constants from values-servicelist.h for
 * internal use.
 */
function ServicelistModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    ServicelistModelDefines.SL2_TVAPI_TABLE_FAVORITE_LIST_LIST     = "tvapi.table.favouritelist.list";
	ServicelistModelDefines.SL2_TVAPI_ACTION_SERVICELIST_LIST_IMPORT= "tvapi.table.servicelist.list.import";
	ServicelistModelDefines.SL2_TVAPI_ACTION_SERVICELIST_LIST_EXPORT= "tvapi.table.servicelist.list.export";
	ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_LIST_IMPORT_STATUS= "tvapi.i32.servicelist.list.import.status";
	ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_LIST_EXPORT_STATUS= "tvapi.i32.servicelist.list.export.status";

    ServicelistModelDefines.SL2_TVAPI_TABLE_FIELD_FAVORITE_LIST_NAME             = 0;
    ServicelistModelDefines.SL2_TVAPI_TABLE_FIELD_FAVORITE_LIST_ID               = 1;
    ServicelistModelDefines.SL2_TVAPI_TABLE_FIELD_FAVORITE_LIST_ATTR             = 2;
    ServicelistModelDefines.SL2_TVAPI_TABLE_FIELD_FAVORITE_LIST_ACTIVE           = 3;
    ServicelistModelDefines.SL2_TVAPI_TABLE_FIELD_FAVORITE_LIST_RIGHTS           = 4;
//    ServicelistModelDefines.SL2_TVAPI_TABLE_FIELD_FAVORITE_LIST_CONTAINS_SERVICE = 5;

    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_AUTO                         = 0x0000;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_USER                         = 0x0001;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_CIPLUS                       = 0x0002;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_TV                           = 0x0004;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_RADIO                        = 0x0008;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_WHOLE_LIST                   = 0x00010;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_AV_LIST                      = 0x00020;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_SERVICE_LIST                 = 0x00040;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_EXCLUDE_ANALOG               = 0x00080;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_ANALOG                       = 0x00100;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_MANUAL_LCN_CONFLICT_HANDLING = 0x00200;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_LAST_SCANNED                 = 0x00400;

    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_LIST       = "tvapi.table.servicelist.list";

    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_NAME                          = 0;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_ID                            = 1;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_URI                           = 2;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_ATTR                          = 3;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_FRONTEND                      = 4;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_SATELLITE                     = 5;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_NO                            = 6;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_GCN                           = 7;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_SERVICE_ID                    = 8;                 
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_TRANSPORT_STREAM_ID           = 9;        
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_ORIGINAL_NETWORK_ID           = 10;       
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_PRESENT_EVENT_START_UTC       = 11;   
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_PRESENT_EVENT_STOP_UTC        = 12;    
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_PRESENT_EVENT_NAME            = 13;        
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_PRESENT_EVENT_SHORTINFO       = 14;   
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_PRESENT_EVENT_LONGINFO        = 15;    
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_FOLLOWING_EVENT_START_UTC     = 16; 
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_FOLLOWING_EVENT_STOP_UTC      = 17;  
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_FOLLOWING_EVENT_NAME          = 18;      
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_FOLLOWING_EVENT_SHORTINFO     = 19; 
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_FOLLOWING_EVENT_LONGINFO      = 20;  
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_TYPE                          = 21;                      
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_SUBTYPE                       = 22;                   
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_CNI                           = 23;                   
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_SERVICE_VISIBLE               = 24;    
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_SERVICE_SELECTABLE            = 25;    
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_CISLOT_CONFIG                 = 26;     
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_TTX_PREVIEW_PAGE              = 27;     
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_TTX_SUBTITLE_PAGE             = 28;      
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_TTX_ENCODING                  = 29;      
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_ORIGINAL_ANCESTOR_UUID        = 30; 
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_ORIGINAL_UUID                 = 31;         
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_ORIGINAL_LCN                  = 32;          
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_TRIPLET                       = 33;               
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_FREQUENCY                     = 34;
    ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_FIELD_NETWORK_ID = 36;

    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_PLAY ="tvapi.action.servicelist.play";
    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_REMOVE= "tvapi.action.servicelist.remove";
    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_RENAME ="tvapi.action.favouritelist.rename";
    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_ADD_LIST ="tvapi.action.favouritelist.add";
    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_REMOVE= "tvapi.action.favouritelist.remove";
    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_MOVE= "tvapi.action.servicelist.move";
    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_SWAP= "tvapi.action.servicelist.swap";
    ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_CHANNELLIST_UPDATE_AUTO= "tvapi.i32.servicelist.channellist.update.auto";
    ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_CHANNELLIST_NEED_UPDATE= "tvapi.i32.servicelist.channellist.need.update";

}


/**
 * ServicelistModel class derived from SubModel.
 */
function ServicelistModel( parentModel ) {
    SubModel.call( this, parentModel, ServicelistModelDefines );
    
    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // Favoritelist list
    this.registerTableObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_FAVORITE_LIST_LIST,
        "createFavoritelistIterator" );

    // Servicelist list
    this.registerTableObject(
            ServicelistModelDefines.SL2_TVAPI_TABLE_SERVICELIST_LIST,
            "createServicelistIterator" );
//    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_PLAY ="tvapi.action.servicelist.play";
    // type display
    this.registerActionObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_PLAY,
        [
            {name:"setFavouriteDisplay",method:function(object,id,value,subid){
                var str = '"'+id+'",'+'"'+value+'"';
                debugPrint("str:"+str);
                debugPrint("id:"+id);
                debugPrint("value:"+value);
                debugPrint("subid:"+subid);
//                return eval('object.invoke('+str+')');
                return object.invoke(id,value,subid);
            }}
        ],null);

    //	ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_REMOVE=  "tvapi.action.servicelist.remove "
    // skip/unskip   skip:type=1   unskip:type=0
    this.registerActionObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_REMOVE,
        [
            {name:"RemoveChannel",method:function(object,folderUuid,type,ids){
                var str = '"'+folderUuid+'",'+type+','+ids.toString();
//                debugPrint("uid:"+ids.toString());
                return eval('object.invoke('+str+')');
            }}
        ],"RemoveChannelCallback"
    );
    // ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_RENAME ="tvapi.action.favouritelist.rename";
    // Rename
    // Rename (FAV1-FAV4) use (folderUuid1,folderUuid2,uid,name),  (Anolog/DVBC/DVBT) not use (folderUuid2)
    this.registerActionObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_RENAME,
        [
            {name:"NewRenameFavChannel",method:function(object,folderUuid1,folderUuid2,uid,name){
                var str =  '"'+folderUuid1+'",'+folderUuid2.toString()+','+uid.toString()+','; //+name.toString()
                for(var j=0;j<name.length;j++)
                {
                  if(j!=name.length-1)
                  {
                      str=str+'"'+name[j].replace(/\\/g,"\\\\").replace(/\"/g,"\\\"")+'",';
                  }
                    else
                  {
                      str=str+'"'+name[j].replace(/\\/g,"\\\\").replace(/\"/g,"\\\"")+'"';
                  }
                }
//                debugPrint("folderUuid1:"+folderUuid1);
//                debugPrint("folderUuid2:"+folderUuid2);
//                debugPrint("uid:"+uid);
//                debugPrint("name:"+name);
//                debugPrint("str:"+str);
               return eval('object.invoke('+str+')');
//               return object.invoke(folderUuid,"786561","1048705","ABCSDDH","ssdgsssss");
            }}
        ],"NewRenameFavChannelCallback"
    );
    //	ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_ADD_LIST=  "tvapi.action.favouritelist.add";
    // add fav channel
    // folderUid--from uid(Anolog/DVBC/DVBT)
    // favUid-- To uid(FAV1-FAV4)
    // ids-- channel id in (FAV1-FAV4)
    this.registerActionObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_ADD_LIST,
        [
            {name:"addFavouriteChannel",method:function(object,folderUid,favUid,ids){
                var str = '"'+folderUid+'",'+'"'+favUid+'",'+ids.toString();
//                debugPrint("folderUid:"+folderUid);
//                debugPrint("favUid:"+favUid);
//                debugPrint("uid:"+ids.toString());
//                debugPrint("str:"+str);
                return eval('object.invoke('+str+')');
//                return object.invoke(folderUid,favUid,ids);
            }}
        ],"addFavouriteChannelCallback"
    );
//    ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_REMOVE= "tvapi.action.favouritelist.remove";
    // cancel fav channel
    // folderUid1-To uid(FAV1---FAV4)
    // folderUid2--From uid(Anolog/DVBC/DVBT)
    // uid--channel id in (Anolog/DVBC/DVBT)
    this.registerActionObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_FAVOURITE_LIST_REMOVE,
        [
            {name:"removeFavouriteChannel",method:function(object,folderUid1,folderUid2,uid){
                var str =  '"'+folderUid1+'",'+folderUid2.toString()+','+uid.toString();
//                debugPrint("folderUid1:"+folderUid1);
//                debugPrint("folderUid2:"+folderUid2);
//                debugPrint("uid:"+uid.toString());
//                debugPrint("str:"+str);
                return eval('object.invoke('+str+')');
            }}
        ],"cancelFavouriteChannelCallback"
    );
    
    //	ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_MOVE=  "tvapi.action.servicelist.move "
    //  Move
    //  FAV:  obj--destnum;moveItems--moveItemsNum;
    //  Anolog/DVBC/DVBT:  obj--destSvlRecID;  moveItems--moveItemsSvlRecID;
    this.registerActionObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_MOVE,
        [
            {name:"MoveMoreChannel",method:function(object,folderUuid,obj,moveItems){
                var str =  '"'+folderUuid+'",'+obj+','+moveItems.toString();
//                debugPrint("folderUid:"+folderUuid);
//                debugPrint("objNum:"+obj);
//                debugPrint("moveItems.toString():"+moveItems.toString());
//                debugPrint("str:"+str);
                return eval('object.invoke('+str+')');
            }}
        ],"MoveMoreChannelCallback"
    );

    //	ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_SWAP=  "tvapi.action.servicelist.swap "
    // sort  flag  0:A-Z;   1:0-9(not use)
    this.registerActionObject(
        ServicelistModelDefines.SL2_TVAPI_TABLE_ACTION_SERVICELIST_SWAP,
        [
            {name:"SortByName",method:function(object,folderUuid,flag){
                var str =  '"'+folderUuid+'",'+flag;
                debugPrint("str:"+str);
                return eval('object.invoke('+str+')');
            }}
        ],"SortByNameCallback"
    );
// Need to fix
//	ServicelistModelDefines.SL2_TVAPI_ACTION_SERVICELIST_LIST_IMPORT=  "tvapi.table.servicelist.list.import "

    // ListImport
              this.registerActionObject(
              ServicelistModelDefines.SL2_TVAPI_ACTION_SERVICELIST_LIST_IMPORT,
			  [
			  	{name:"ListImport",method:function(object){
			  		return object.invoke();
			  		}}
              ],"null"
			  );

// Need to fix
//	ServicelistModelDefines.SL2_TVAPI_ACTION_SERVICELIST_LIST_EXPORT=  "tvapi.table.servicelist.list.export "

    // ListExport
              this.registerActionObject(
              ServicelistModelDefines.SL2_TVAPI_ACTION_SERVICELIST_LIST_EXPORT,
			  [
			  	{name:"ListExport",method:function(object){
			  		return object.invoke();
			  		}}
              ],"null"
			  );
    // ListImportStatus
              this.registerIntegerObject(
              ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_LIST_IMPORT_STATUS,
              "getListImportStatus", "setListImportStatus", "onListImportStatusChaged",
              null, null );

    // ListExportStatus
              this.registerIntegerObject(
              ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_LIST_EXPORT_STATUS,
              "getListExportStatus", "setListExportStatus", "onListExportStatusChaged",
              null, null );
    // ChannellistUpdateAuto
    this.registerIntegerObject(
        ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_CHANNELLIST_UPDATE_AUTO,
        "getChannellistUpdateAuto", "setChannellistUpdateAuto", "onChannellistUpdateAutoChaged",
        null, null );
    // ChannellistNeedUpdate
    this.registerIntegerObject(
        ServicelistModelDefines.SL2_TVAPI_I32_SERVICELIST_CHANNELLIST_NEED_UPDATE,
        "getChannellistNeedUpdate", "setChannellistNeedUpdate", "onChannellistNeedUpdateChaged",
        null, null );
}
ServicelistModel.prototype = new SubModel();
ServicelistModel.prototype.constructor = ServicelistModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants( 
            ServicelistModel, ServicelistModelDefines,
            [ { groupPrefix: "SL2_TVAPI_TABLE_FIELD_FAVORITE_LIST_", stripPrefix: "SL2_TVAPI_TABLE_" },
              { groupPrefix: "SL2_TVAPI_TABLE_SERVICELIST_FAVORITE_ATTR_", stripPrefix: "SL2_TVAPI_TABLE_" },
              { groupPrefix: "SL2_TVAPI_TABLE_SERVICELIST_FIELD_", stripPrefix: "SL2_TVAPI_TABLE_" }
            ] );
    
}
