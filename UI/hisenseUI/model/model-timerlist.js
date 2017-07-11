/**
 * TimerlistModelDefines  class.
 * Contains all defined constants from G:/Loewe/values/values-timerlist.h for
 * internal use.
 */

function TimerlistModelDefines() {

}
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_TABLE = "tvapi.timer.list.table";
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_VSTR_ITEMS = "tvapi.timer.list.vstr.items";

    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_ENTRY_UUID = 0;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_ENTRY_TITLE = 1;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_CHANNEL_UUID = 2;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_DESTINATION_RECORDER_ID = 3;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_START_TIME_UTC = 4;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_END_TIME_UTC = 5;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_DESCRAMBLING_AT = 6;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_RECORDING_TYPE = 7;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_CRID = 8;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_LOCK_PIN = 9;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_PROGRAM_PIN = 10;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_ATTRIBUTES = 11;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_CHANNEL_ANCESTOR_UUID = 12;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_CHANNEL_URI = 13;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_CHANNEL_NAME = 14;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_MEDIA_ITEM_LOCATOR = 15;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_DESTINATION_RECORDER_URI = 16;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_DESTINATION_VOLUME_ID = 17;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_EPG_EVENT_ID = 18;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_MEDIA_ITEM_LOCATOR_NAME = 19;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_DESTINATION_VOLUME_ID_NAME = 20;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_SERIES_TAG = 21;
    TimerlistModelDefines.ENUM_TIMER_LIST_TABLE_FIELD_NUMBER_COLUMNS = 22;

    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD = "tvapi.timer.list.entry.add";
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_EDIT = "tvapi.timer.list.entry.edit";
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_REMOVE = "tvapi.timer.list.entry.remove";
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO = "tvapi.timer.list.entry.add.memo";
    TimerlistModelDefines.SL2_TVAPI_I32_TIMER_LIST_SCHEDULE_INDEX = "tvapi.i32.timer.list.schedule.index";

    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_TITLE = 0;
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_UUID = 1;
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_URI = 2;
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_CHANNEL_NAME = 3;
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_T_START = 4;
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_T_END = 5;
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_EPG_EV_ID = 6;
    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_ANCESTOR_UUID = 7;


    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_NONE = 0;
    /**< no error */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_UNKNOWN = 1;
    /**< unknown error */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_SOURCE = 2;
    /**< invalid source UUID*/
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_DESTINATION = 3;
    /**< invalid destination */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_WRONG_CAM_PIN = 4;
    /**< invalid CAM PIN */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_DESCRAMBLING_TIME = 5;
    /**< invalid descrambling time */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_SUBTITLE = 6;
    /**< invalid subtitle selection */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_CONFLICT = 7;
    /**< conflict in timer list detected */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_TIMER_ID = 8;
    /**< unable to remove */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_NUMBER_ARGUMENTS = 9;
    /**< invalid number of arguments provided for an action */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_START_TIME = 10;
    /**< invalid start time */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_END_TIME = 11;
    /**< invalid end time */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_TIMER_TYPE = 12;
    /**< invalid timer type */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_TIMER_ATTRIBUTES = 13;
    /**< invalid timer attributes */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_EMPTY_TITLE = 14;
    /**< invalid title */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_START_AND_END_TIME = 15;
    /**< end time before start time */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_CRID = 16;
    /**< invalid CRID syntax */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_ARGUMENT_PARAMETER = 17;
    /**< invalid argument parameter provided for the action */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_RESOLVE_METHOD = 18;
    /**< invalid resolve method */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_SOURCE_URI = 19;
    /**< invalid source URI */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_SOURCE_NAME = 20;
    /**< invalid source channel name */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_SOURCE_MEDIA_ITEM_LOCATOR = 21;
    /**< invalid source media item locator */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_SOURCE_ANCESTOR_UUID = 22;
    /**< invalid source channel ancestor UUID */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_EPG_EVENT_ID = 23;
    /**< invalid EPG event ID */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_DESTINATION_VOLUME_ID = 24;
    /**< invalid destination volume ID */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_EXPIRED = 25;
    /**< timer expired (end time before NOW) */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_DUPLICATE = 26;
    /**< there is already a timer for the very same program */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_EXCLUSIVENESS_CONFLICT = 27;
    /**< there is a timer conflicting with exclusive timer */
    TimerlistModelDefines.ENUM_TIMER_LIST_ADD_ENTRY_ERR_INVALID_CONFLICT_ID = 28;


    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_DELETE_PROTECTION = 0x0001;
    /**< delete protection active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_AUTO_TIME_CONTROL = 0x0002;
    /**< auto timer control active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_RECORD_SUBTITLE = 0x0004;
    /**< subtitle record active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_DSCRMBLED_RECORD = 0x0008;
    /**< descrambled recording active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_DSCRMBLED_OVERNIGHT = 0x0010;
    /**< if descrambled recording is inactive then descrambled overnight is
     *   active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_CONFLICT = 0x0020;
    /**< a conflict with another recording identified, IMP: this flag is not
     *   meant to be set by users, instead by biz/system logic (later, we may
     *   not use it at all) */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_ADD_FAVORITE = 0x0040;
    /**< add to dashboard after recording */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_RECORDING_ACTIVE = 0x0080;
    /**< recording is active or not. Set by biz */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_RECORDING_LOCKED = 0x0100;
    /**< recording is locked by hdr or not. Set by biz */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_EXCLUSIVE = 0x0200;
    /**< recording shouldn't overlap with any other */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_MOVEABLE = 0x0400;
    /**< recording may be rescheduled in case of conflict */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_IS_RECOMMENDATION = 0x0800;
    /**< recording is a recommendation to other recording */



    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_UNDEFINED = 0x0;
    /**< timer type not defined - for internal use only */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_ONCE = 0x01;
    /**< record only once */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_MON2FRI = 0x02;
    /**< record Monday to Friday */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_DAILY = 0x04;
    /**< record daily */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_WEEKLY = 0x08;
    /**< record weekly */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_SERIAL = 0x10;
    /**< record as a serial */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_USER_NOTIFICATION = 0x20;
    /**< also referred to as Memo instruction: notifies the TV user about a
     * marked EPG-event. */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_RECODE = 0x40;
    /**< descramble job */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_TYPE_COPY = 0x80;
    /**< trigger a copy instruction */



    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_DELETE_PROTECTION = 0x0001;
    /**< delete protection active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_AUTO_TIME_CONTROL = 0x0002;
    /**< auto timer control active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_RECORD_SUBTITLE = 0x0004;
    /**< subtitle record active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_DSCRMBLED_RECORD = 0x0008;
    /**< descrambled recording active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_DSCRMBLED_OVERNIGHT = 0x0010;
    /**< if descrambled recording is inactive then descrambled overnight is
     *   active or not */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_CONFLICT = 0x0020;
    /**< a conflict with another recording identified; IMP: this flag is not
     *   meant to be set by users; instead by biz/system logic (later; we may
     *   not use it at all) */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_ADD_FAVORITE = 0x0040;
    /**< add to dashboard after recording */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_RECORDING_ACTIVE = 0x0080;
    /**< recording is active or not. Set by biz */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_RECORDING_LOCKED = 0x0100;
    /**< recording is locked by hdr or not. Set by biz */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_EXCLUSIVE = 0x0200;
    /**< recording shouldn't overlap with any other */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_MOVEABLE = 0x0400;
    /**< recording may be rescheduled in case of conflict */

    TimerlistModelDefines.ENUM_TIMER_LIST_RECORDING_ATTR_IS_RECOMMENDATION = 0x0800;
    /**< recording is a recommendation to other recording */


    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_CONFLICT_GET_CURRENT_SOLUTION
        = "tvapi.timer.list.conflict.get.current.solution";

    TimerlistModelDefines.ENUM_TIMER_LIST_CONFLICT_SOLUTION_ARGS_ID = 0;
    TimerlistModelDefines.ENUM_TIMER_LIST_CONFLICT_SOLUTION_ARGS_TIMER_UUID = 1;
    TimerlistModelDefines.ENUM_TIMER_LIST_CONFLICT_SOLUTION_ARGS_ACTION = 2;

    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_CONFLICT_CANCEL_SOLUTION
        = "tvapi.timer.list.conflict.cancel.solution";


}
/**
 * TimerlistModel class derived from SubModel.
 */
function TimerlistModel(parentModel) {
    SubModel.call(this, parentModel, TimerlistModelDefines);


    //this.registerTableObject(
    //    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_TABLE,
    //    "createTimerListIterator");

    this.registerStringVectorObject(
        TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_VSTR_ITEMS,
        "getTimerList", "setTimerList", "onTimerListChanged",
        null, null);

    this.registerActionObject(
        TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD,
        [
            {
                name: "addRecordTimer", method: function(object, prgrm) {

                DBG_ALWAYS("add reminder: channelUid[" + prgrm.channelUid + "], startTime[" + prgrm.startTime +
                "], duration[" + (prgrm.endTime - prgrm.startTime) + "], title[" + prgrm.title +
                "], repeatMode[" + prgrm.repeatMode + "], bookType[" + prgrm.bookType +
                "], listUid[" + prgrm.listUid + "], playId[" + prgrm.playId + "]");

                return object.invoke(
                    '0',
                    prgrm.channelUid,
                    prgrm.startTime,
                    prgrm.endTime - prgrm.startTime,
                    prgrm.title,
                    prgrm.repeatMode,
                    prgrm.bookType,
                    //prgrm.channelNumber,
                    //prgrm.channelName,
                    prgrm.listUid,
                    prgrm.playId
                );
            }
            }
        ],
        "onAddRecordTimerResult", "onAddRecordError");

    this.registerActionObject(
        TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_EDIT,
        [
            {
                name: "editRecordTimer", method: function(object, prgrm) {

                DBG_ALWAYS("edit reminder: channelUid[" + prgrm.channelUid + "], startTime[" + prgrm.startTime +
                "], duration[" + (prgrm.endTime - prgrm.startTime) + "], title[" + prgrm.title +
                "], repeatMode[" + prgrm.repeateMode + "], bookType[" + prgrm.bookType +
                "], listUid[" + prgrm.listUid + "], playId[" + prgrm.playId + "]");
                return object.invoke(
                    prgrm.uid,
                    prgrm.channelUid,
                    prgrm.startTime,
                    prgrm.endTime - prgrm.startTime,
                    prgrm.title,
                    prgrm.repeatMode,
                    prgrm.bookType,
                    //prgrm.channelNumber,
                    //prgrm.channelName,
                    prgrm.listUid,
                    prgrm.playId
                );
            }
            }
        ],
        "onEditRecordTimerResult", "onEditRecordEror");

    this.registerActionObject(
        TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_REMOVE,
        [
            {
                name: "removeRecordTimer", method: function(object, uids) {
                DBG_ALWAYS("remove reminder: uids[" + uids + "]");
                return eval('object.invoke(' + uids + ')');
            }
            }
        ],
        "onRemoveRecordTimerResult");

    //this.registerActionObject(
    //    TimerlistModelDefines.SL2_TVAPI_TIMER_LIST_CONFLICT_CANCEL_SOLUTION,
    //    [
    //        {
    //            name: "cancelSolution", method: function(object, conflictId) {
    //            return object.invoke(conflictId);
    //        }
    //        }
    //    ],
    //    "onCancelSolution");
    // ScheduleIndex
    this.registerIntegerObject(
        TimerlistModelDefines.SL2_TVAPI_I32_TIMER_LIST_SCHEDULE_INDEX,
        "getScheduleIndex", "setScheduleIndex", "onScheduleIndexChaged",
        null, null);


}
TimerlistModel.prototype = new SubModel();
TimerlistModel.prototype.constructor = TimerlistModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        TimerlistModel, TimerlistModelDefines,
        [
            {groupPrefix: "ENUM_TIMER_LIST_TABLE_FIELD_", stripPrefix: "ENUM_TIMER_LIST_TABLE_"},
            {groupPrefix: "ENUM_TIMER_LIST_ADD_ENTRY_ERR_", stripPrefix: "ENUM_TIMER_LIST_ADD_ENTRY_"},
            {groupPrefix: "ENUM_TIMER_LIST_RECORDING_ATTR_", stripPrefix: "ENUM_TIMER_LIST_RECORDING_"},

            {groupPrefix: "ENUM_TIMER_LIST_RECORDING_TYPE_", stripPrefix: "ENUM_TIMER_LIST_RECORDING_"},
            {
                groupPrefix: "SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_ARG_",
                stripPrefix: "SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO_"
            }

        ]);
}
