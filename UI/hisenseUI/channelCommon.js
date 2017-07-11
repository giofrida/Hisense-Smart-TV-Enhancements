var foundChannelListIterator = null;//从数据库中读取数据的迭代器
var foundChannelListInfo = {
    "channelCount":0,       //频道数目
    "channelList":[],       //频道列表
    "channelHaveReadNum":0,//已经读取的数目
    "channelItemCount":100//每次读取的数目
}
/*******************************************************************
 name:readFoundChannelList
 description:读取数据库中所有频道列表
 input:
 output:
 return
 *******************************************************************/
var readFoundChannelList = function (onFoundChannelListIteratorEvent) {
    debugPrint('prepare to read readFoundChannelList');
    foundChannelListIterator = model.chScan.creatFoundChannelsIterator(
        true,
        [
//            {
//                field: ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_NETWORK_TYPE,
//                condition: Model.FIELD_COND_EQUAL,
//                value: 13
//            }
        ],
        [
            ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_NUMBER,
            ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_NAME,
            ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_SOURCE_TYPE,
            ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_SERVICE_TYPE,
            ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_INDEX,
            ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_FAVOURITE,
            ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_SKIP
        ],
        [
            { field: ChannelsearchModelDefines.ENUM_CHANNEL_SEARCH_FOUND_CHANNELS_NUMBER, direction: 1 }
        ],
        onFoundChannelListIteratorEvent);
}
/*******************************************************************
 name:onFoundChannelListIteratorEvent
 description:接收运营商列表消息
 input:
 output:
 return
 *******************************************************************/
function onFoundChannelListIteratorEvent(event) {
    try {
        debugPrint("onFoundChannelListIteratorEvent receive event,type="+event.type);
        if(event.type ==  TableIterator.EVENT_TYPE_TOTAL_COUNT){
            var lastFoundChannelCount = foundChannelListInfo.channelCount;
            var newFoundChannelCount = event.totalCount;
            debugPrint("onFoundChannelListIteratorEvent:newFoundChannelCount="+newFoundChannelCount+",lastFoundChannelCount="+lastFoundChannelCount,DebugLevel.ALWAYS);
            foundChannelListInfo.channelCount = newFoundChannelCount;
            if(lastFoundChannelCount > newFoundChannelCount){
                foundChannelListInfo.channelList.splice(newFoundChannelCount);
            }
            foundChannelListInfo.channelHaveReadNum = 0;//准备读取
            if(foundChannelListInfo.channelCount == 0){
                foundChannelListIterator.disconnect();
            }
        }
        else if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
            debugPrint("onFoundChannelListIteratorEvent:length="+event.rows.length,DebugLevel.ALWAYS);
            if (event.rows.length > 0) {
                var channelItemList = [];
                for(var i = 0; i < event.rows.length; i++) {
                    channelItemList[i] = {};
                    channelItemList[i].number = event.rows[i][0];
                    channelItemList[i].name = event.rows[i][1];
                    channelItemList[i].sourceType = event.rows[i][2];
                    channelItemList[i].serviceType = event.rows[i][3];
                    channelItemList[i].index = event.rows[i][4];
                    channelItemList[i].favourite = event.rows[i][5];
                    channelItemList[i].skip = event.rows[i][6];
                    debugPrint("onFoundChannelListIteratorEvent:" + event.rows[i][0] + "," + event.rows[i][1] + "," + event.rows[i][2] + "," + event.rows[i][3]);
                    foundChannelListInfo.channelList.push(channelItemList[i]);
                }
                foundChannelListInfo.channelHaveReadNum = foundChannelListInfo.channelHaveReadNum + event.rows.length;
                debugPrint("onFoundChannelListIteratorEvent:haveReadNum="+foundChannelListInfo.channelHaveReadNum+",");
                if(foundChannelListInfo.channelCount > foundChannelListInfo.channelHaveReadNum){
                    var needReadNum = foundChannelListInfo.channelCount - foundChannelListInfo.channelHaveReadNum;
                    if(needReadNum > foundChannelListInfo.channelItemCount){
                        foundChannelListIterator.readNextRows(foundChannelListInfo.channelItemCount);
                    }else{
                        foundChannelListIterator.readNextRows(needReadNum);
                    }
                }else{
                    foundChannelListIterator.disconnect();
                }
            }
        }
    } catch (ex) {
        debugPrint("onFoundChannelListIteratorEvent:" + ex.message,DebugLevel.ERROR);
    }
}