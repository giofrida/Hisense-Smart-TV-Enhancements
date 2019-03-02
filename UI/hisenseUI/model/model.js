// --------------------------------------------------------
/**
 * @brief Convenience model for accessing
 * the middleware model via modeljs browser plugin.
 * This implementation hides all access to the actual modeljs
 * browser plugin and allows easy access to the model. The
 * model must be extended with sub models.
 *
 * @author Sascha Radike
 *
 * Copyright (c) 2014 LOEWE Opta GmbH, Kronach. All rights reserved. */
//--------------------------------------------------------

// --------------------------------------------------------
/**
 * TableIterator class.
 * Represents an iterator returned by sub models which
 * provide access to table objects.
 *
 * @param table
 *      The table object the iterator will be created for.
 * @param readOnly
 *      Whether read-only access (true) or read-write (false)
 * @param selections
 *      The selections.
 * @param fields
 *      The requested fields to return in the iterator results.
 * @param orders
 *      The requested orders.
 * @param handler
 *      The handler to notify of iterator events.
 */
// --------------------------------------------------------

var InitArea = "EU";//"EM"
var initCountry = "Egypt";//"Egypt"
var initCountryCode;
//预定义EM和EU国家，防止上传修改出错
if("EM" == InitArea){
    initCountry = "Egypt";
} else if("EU" == InitArea){
    initCountry = "Germany";
} else if("SA" == InitArea){
    initCountry = "Brazil";
}else if("COL" == InitArea){
    initCountry = "Colombia";
}

var g_launcherBrand = "VIDAALite";

var initBrand = "his";
var sysBrandlist = ["his", "wel", "nob", "jvc", "san", "phi", "ilo", "pio", "sma", "bgh", "blu",
    "dev", "kal", "cha", "pan", "tel", "riv", "con", "gen", "haa", "tit", "kmc", "vuz", "llo",
    "inn", "sho", "enf", "dlc", "hya", "dex", "sup", "oke", "rol", "sha", "har", "ezy", "ame",
    "dik", "cyb", "hyu", "gfo", "sei", "ton", "psc", "tho", "ora","tat","ben","cmo", "vtb", "ros", "del", "str", "cor", "mtx",
    "dam","oro", "gua", "bec","idh","viv","mag","xvi","hisense", "Hisense", "off"];


function TableIterator(table, readOnly, selections, fields, orders, handler) {
    /** The modeljs iterator instance */
    var m_iterator = null;
    /** The stored handler */
    var m_handler = handler;


    // --------------------------------------------------------------
    // Notification handlers
    // --------------------------------------------------------------

    /**
     * Handles the notifyReadRow event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param rowRead
     *      The row read
     */
    var handleReadRow = function (rowRead) {
        var convertedRow = new Array();
        // For every column of row
        for (var i = 0; i < rowRead.length; i++) {
            convertedRow.push(rowRead[i]);
        }
        var event = {
            type: TableIterator.EVENT_TYPE_ROWS_READ,
            rows: [convertedRow]
        };
        m_handler && m_handler(event);
    }.bind(this);

    /**
     * Handles the notifyReadRowChunk event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param rowsRead
     *      The rows read
     */
    var handleReadRowChunk = function (rowsRead) {
        var convertedRows;

        try {
            convertedRows = JSON.parse(rowsRead.getallstrings)
        }
        catch (ex) {
            DBG_INFO("handleReadRowChunk: " + ex.message);
        }

        if (!Array.isArray(convertedRows)) {    //兼容旧方式，防止出错
            convertedRows = new Array();
            // For every row
            for (var i = 0; i < rowsRead.length; i++) {
                var rowRead = rowsRead[i];
                var convertedRow = new Array();
                // For every column in row
                for (var j = 0; j < rowRead.length; j++) {
                    convertedRow.push(rowRead[j]);
                }
                convertedRows.push(convertedRow);
            }
        }

        var event = {
            type: TableIterator.EVENT_TYPE_ROWS_READ,
            rows: convertedRows
        };
        m_handler && m_handler(event);
    }.bind(this);

    /**
     * Handles the notifyTotalCount event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param count
     *      The total count of rows
     */
    var handleTotalCount = function (count) {
        var event = {
            type: TableIterator.EVENT_TYPE_TOTAL_COUNT,
            totalCount: count
        };
        m_handler && m_handler(event);
    }.bind(this);

    /**
     * Handles the notifySeekToRow event received from modeljs iterator.
     * Converts the event and forwards it to the registered handler.
     *
     * @param count
     *      The total count of rows
     */
    var handleSeekToRow = function (seekResult) {
        var event = {
            type: TableIterator.EVENT_TYPE_SEEK_TO_ROW,
            result: seekResult
        };
        m_handler && m_handler(event);
    }.bind(this);


    var handleCursorPosition = function (cursor) {
        var event = {
            type: TableIterator.EVENT_TYPE_CURSOR,
            cursor: cursor
        };
        m_handler && m_handler(event);
    }.bind(this);

    var handlerTableUpdated = function (result) {
        var event = {
            type: TableIterator.EVENT_TYPE_UPDATE,
            result: result
        };
        m_handler && m_handler(event);
    }.bind(this);
    // --------------------------------------------------------------
    // Iterator methods
    // --------------------------------------------------------------

    /**
     * Reads the next "count" rows. Result will be received as event.
     *
     * @param count
     *      The number of rows to read.
     */
    this.readNextRows = function (count) {
        m_iterator.readNextRows(count);
    }

    this.readNextRow = function () {
        m_iterator.readNextRow();
    }

    /**
     * Reads the previous "count" rows. Result will be received as event.
     *
     * @param count
     *      The number of rows to read.
     */
    this.readPreviousRows = function (count) {
        m_iterator.readPrevRows(count);
    }

    /**
     * Fetches the total count of available rows. Result will be received as event.
     */
    this.fetchTotalCount = function () {
        m_iterator.totalCount();
    }

    /**
     * Seeks to a certain row. Result will be received as event.
     *
     * @param offset
     *      The offset to seek to - depending on type
     * @param type
     *      The seek type: SEEK_SET/SEEK_CUR/SEEK_END
     */
    this.seekToRow = function (offset, type) {
        m_iterator.seekToRow(offset, type);
    }

    this.getCurrentRow = function () {
        return m_iterator.getCurrentRow();
    }

    this.getCurrentRows = function () {
        return m_iterator.getCurrentRows();
    }

    this.readCursorPosition = function () {
        m_iterator.readCursorPosition();
    }
    this.getTotalCount = function () {
        return m_iterator.getTotalCountFromCache();
    }

    this.disconnect = function () {
        //DBG_ALWAYS("MTK product do not need disconnect");
        return true;
        m_iterator.removeEventListener("notifyReadRow", handleReadRow);
        m_iterator.removeEventListener("notifyReadRowChunk", handleReadRowChunk);
        m_iterator.removeEventListener("notifyTotalCount", handleTotalCount);
        m_iterator.removeEventListener("notifySeekToRow", handleSeekToRow);
        m_iterator.removeEventListener("notifyCursorPosition", handleCursorPosition);
        m_iterator.removeEventListener("notifyUpdate", handlerTableUpdated);

        m_iterator = null;

        return true;

    }


    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    /**
     * Initializes the iterator.
     */
    var initialize = function (table, readOnly, selections, fields, orders, handler) {
        // Convert selections

        var convertedSelections = modeljs.createTableSelectionVector();
        if (selections) {
            for (var i = 0; i < selections.length; i++) {
                var selection = selections[i];
                var convertedSelection = modeljs.createTableSelection(
                    selection.field, selection.condition, selection.value);
                convertedSelections.push(convertedSelection);
            }
        }

        // Convert fields
        var convertedFields = modeljs.createNumberVector();
        if (fields) {
            for (var i = 0; i < fields.length; i++) {
                convertedFields.push(fields[i]);
            }
        }

        // Convert orders
        var convertedOrders = modeljs.createTableOrderVector();
        if (orders) {
            for (var i = 0; i < orders.length; i++) {
                var order = orders[i];
                var convertedSelection = modeljs.createTableOrder(
                    order.field, order.direction);
                convertedOrders.push(convertedSelection);
            }
        }

        // Create and connect iterator
        m_iterator = table.createIterator(
            (readOnly ? modeljs.ITERATOR_TYPE_READONLY_AUTOMATIC : modeljs.ITERATOR_TYPE_READWRITE_AUTOMATIC),
            convertedSelections,
            convertedFields,
            convertedOrders);

        m_iterator.addEventListener("notifyReadRow", handleReadRow);
        m_iterator.addEventListener("notifyReadRowChunk", handleReadRowChunk);
        m_iterator.addEventListener("notifyTotalCount", handleTotalCount);
        m_iterator.addEventListener("notifySeekToRow", handleSeekToRow);
        // ...
        m_iterator.addEventListener("notifyCursorPosition", handleCursorPosition);
        m_iterator.addEventListener("notifyUpdate", handlerTableUpdated);
        m_iterator.connect();

    }
    initialize(table, readOnly, selections, fields, orders);

    this.tableFlag = 'table created';

}

{
    try {
        // --------------------------------------------------------------
        // Static constants
        // --------------------------------------------------------------
        TableIterator.EVENT_TYPE_ROWS_READ = 1;
        TableIterator.EVENT_TYPE_TOTAL_COUNT = 2;
        TableIterator.EVENT_TYPE_SEEK_TO_ROW = 3;
        TableIterator.EVENT_TYPE_CURSOR = 4;
        TableIterator.EVENT_TYPE_UPDATE = 5;
        TableIterator.EVENT_TYPE_READY = 6;

        TableIterator.SEEK_SET = modeljs.LOMODEL_SEEK_SET;
        TableIterator.SEEK_CUR = modeljs.LOMODEL_SEEK_CUR;
        TableIterator.SEEK_END = modeljs.LOMODEL_SEEK_END;
    }
    catch (ex) {
        debugPrint("_______________model error" + ex.message);
    }
}


// --------------------------------------------------------
/**
 * SubModel class. This class is a base class for
 * all sub models.
 *
 * @param parentModel
 *      The main model the submodel belongs to.
 */
// --------------------------------------------------------
function SubModel(parentModel, definesClass) {
    /** The parent model instance */
    var m_parentModel = parentModel;
    /** The class with internal model value defines. */
    var m_definesClass = definesClass;
    /** Registered model objects */
    var m_registrations = {};
    /** Whether sub model is ready */
    var m_isReady = false;

    /**
     * Returns the modeljs root interface.
     *
     * @returns the modeljs root interface.
     */
    this.getRootInterface = function () {
        return m_parentModel.getRootInterface();
    }

    /**
     * Registers a model object for this sub model.
     *
     * @param name
     *      The name of the object.
     * @param l
     *      The listeners to register. [ { event: x, handler: y } ]
     */
    this.registerObject = function (name, l) {
        if (tv) {
            m_registrations[name] = {
                object: null,
                listeners: l
            };
        }
        else {
            m_registrations[name] = {
                object: {
                    getValue: function () {
                    },
                    setValue: function (value) {
                        if (!!l) {
                            l[0].handler(value)
                        }
                    },
                    getVector: function () {
                    },
                    setVector: function (value) {
                        if (!!l) {
                            l[0].handler(value)
                        }
                    },
                    invoke: function () {
                    }
                },
                listeners: l
            };
        }

        // TODO: mtk has no biz...
        this.handleApiObjectAdded(name, -1);
    }

    /**
     * Internal method for registering a simple model object ( integer, string )
     */
    var registerSimpleObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {

        // Set default getterConverter if none specified
        if (!getterConverter) {
            getterConverter = function (value) {
                return value;
            }
        }

        // Set default setterConverter if none specified
        if (!setterConverter) {
            setterConverter = function (value) {
                return value;
            }
        }

        // Register getter if specified
        if (getterName) {
            this[getterName] = function () {
                try {
                    var object = this.getObject(name);
                    return getterConverter(object.getValue());
                }
                catch (ex){
                    DBG_ERROR("get value[" + name + "] error." + ex.message);
                    return "";
                }
            }
        }

        // Register setter if specified
        if (setterName) {
            this[setterName] = function (value) {
                try {
                    var object = this.getObject(name);
                    object.setValue(setterConverter(value));
                }
                catch (ex){
                    DBG_ERROR("set value[" + name + "] error." + ex.message);
                }
            }
        }

        // Register handler if specified
        if (handlerName) {
            this[handlerName] = null;
        }

        var handleValueChanged = function (value) {
            var handler = this[handlerName];
            if (handler) {
                handler(getterConverter(value));
            }
        }.bind(this);

        // Register object
        this.registerObject(
            name, [
                {
                    event: "notifyNewValue",
                    handler: handleValueChanged
                }
            ]);

    }.bind(this);

    /**
     * Registers an integer model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerIntegerObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerSimpleObject(name, getterName, setterName, handlerName, getterConverter, setterConverter);
    }

    /**
     * Registers a string model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerStringObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerSimpleObject(name, getterName, setterName, handlerName, getterConverter, setterConverter);
    }

    /**
     * Internal method for registering a vector model object (IntegerVector or StringVector).
     */
    var registerVectorObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter, isInteger) {

        // Set default getterConverter if none specified
        if (!getterConverter) {
            getterConverter = function (value) {
                // Convert modeljs vector to javascript array
                var convertedValue = new Array();
                for (var i = 0; i < value.length; i++) {
                    var element = value[i];
                    convertedValue.push(element);
                }
                return convertedValue;
            }
        }

        // Set default setterConverter if none specified
        if (!setterConverter) {
            setterConverter = function (value) {
                // Convert javascript array to modeljs vector
                var convertedValue = (isInteger ? modeljs.createNumberVector() : modeljs.createStringVector());
                for (var i = 0; i < value.length; i++) {
                    var element = value[i];
                    convertedValue.push(element);
                }
                return convertedValue;
            }
        }

        // Register getter if specified
        if (getterName) {
            this[getterName] = function () {
                var object = this.getObject(name);
                return getterConverter(object.getVector());
            }
        }

        // Register setter if specified
        if (setterName) {
            this[setterName] = function (value) {
                var object = this.getObject(name);
                object.setVectorElements(setterConverter(value));
            }
        }

        // Register handler if specified
        if (handlerName) {
            this[handlerName] = null;
        }


        var handleValueChanged = function (value) {
            if (handlerName) {
                var handler = this[handlerName];
                if (handler) {
                    handler(getterConverter(value));
                }
            }
        }.bind(this);

        // Register object
        this.registerObject(
            name, [
                {
                    event: (isInteger ? "notifyIntegerVector" : "notifyStringVector"),
                    handler: handleValueChanged
                }
            ]);

    }.bind(this);

    /**
     * Registers an integer vector model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerIntegerVectorObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerVectorObject(name, getterName, setterName, handlerName, getterConverter, setterConverter, true);
    }

    /**
     * Registers an integer vector model object.
     *
     * @param name
     *      The name of the object.
     * @param getterName
     *      The name of the get method "getX" or null.
     * @param setterName
     *      The name of the set method "setX" or null.
     * @param handlerName
     *      The name of the handler "onX" or null.
     * @param getterConverter
     *      The optional converter for converting from
     *      modeljs value to javascript value.
     * @param getterConverter
     *      The optional converter for converting from
     *      javascript value to modeljs value.
     */
    this.registerStringVectorObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter) {
        registerVectorObject(name, getterName, setterName, handlerName, getterConverter, setterConverter, false);
    }

    /**
     * Registers an action model object.
     *
     * @param name
     *      The name of the object.
     * @param methods
     *      The action methods [ {name: x, method: y} ]. First parameter of
     *      the method is "object".
     * @param handlerName
     *      The name of the result handler "onX" or null.
     */
    this.registerActionObject = function (name, methods, handlerName, handlerError) {
        // Register methods
        for (var i = 0; i < methods.length; i++) {
            var method = methods[i];

            this[method.name] = function (boundMethod) {
                newArguments = Array.prototype.slice.call(arguments);
                newArguments[0] = this.getObject(name);
                boundMethod.method.apply(this, newArguments);
            }.bind(this, method);
        }

        // Register handler if specified
        if (handlerName) {
            this[handlerName] = null;
        }

        var handleResult = function (actionId, result) {
            if (handlerName && this[handlerName]) {
                // Convert result from modeljs map to normal JS map:
                var convertedResult = new Array();
                for (var i = 0; i < result.keys.length; i++) {
                    var key = result.keys[i];
                    convertedResult[key] = result[key];
                }

                // Call handler
                this[handlerName](actionId, convertedResult);
            }
        }.bind(this);

        if (handlerError) {
            this[handlerError] = null;
        }

        var handleError = function (actionId, errorCode) {
            if (handlerError && this[handlerError]) {

                this[handlerError](actionId, errorCode);

            }
        }.bind(this);

        // Register object
        this.registerObject(
            name, [
                {
                    event: "notifyResult",
                    handler: handleResult
                },
                {
                    event: 'notifyExecutionError',
                    handler: handleError
                }
            ]);
    }

    /**
     * Registers a table model object.
     *
     * @param name
     *      The name of the object.
     * @param iteratorCreatorName
     *      The name of the iterator creator method "createX" or null.
     */
    this.registerTableObject = function (name, iteratorCreatorName) {

        // Register iterator creator if specified
        if (iteratorCreatorName) {
            this[iteratorCreatorName] = function (readOnly, selections, fields, orders, handler) {
                var object = this.getObject(name);
                return new TableIterator(object, readOnly, selections, fields, orders, handler);
            }.bind(this);
        }

        // Register object
        this.registerObject(
            name, []);
    }

    /**
     * Returns the actual modeljs object for the given name.
     *
     * @param name
     *      The name of the registered model object.
     * @returns bool
     *      The modeljs object instance.
     */
    this.getObject = function (name) {
        return m_registrations[name].object;
    }

    /**
     * Returns whether sub model is ready (i.e. for all
     * registered model objects a modeljs object instance
     * has been received.
     *
     * @returns bool
     *      Whether the sub model is ready.
     */
    this.isReady = function () {
        if (m_isReady) {
            return m_isReady;
        }
        for (var key in m_registrations) {
            var object = m_registrations[key].object;
            if (!object) {
                return false;
            }
        }
        return true;
    }

    /**
     * Handler for notifications of object instances which
     * are now available.
     *
     * @param name
     *      The name of the available object.
     * @param spec
     *      The type of the object.
     */
    this.handleApiObjectAdded = function (name, spec) {

        if (name in m_registrations) {
            var registration = m_registrations[name];

            // Create object
            var object = m_parentModel.getRootInterface().createObject(name);

            //  Register event listeners
            if (registration.listeners) {
                for (var i = 0; i < registration.listeners.length; i++) {
                    var listener = registration.listeners[i];
                    object.addEventListener(listener.event, listener.handler);
                }
            }


            //log.debug('object.connect..., name: ', name);
            // Connect
            object.connect();
            //log.debug('object.connect...done, name: ', name);
            registration.object = object;

            // Ready
            if (!m_isReady) {
                m_isReady = this.isReady();
                m_isReady && m_parentModel.handleSubModelReady();
            }
        }
    }
}

{
    // --------------------------------------------------------------
    // Static functions
    // --------------------------------------------------------------
    /**
     * Registers all static constants starting with groupPrefix from definesClass
     * with modelClass. In modelClass the stripPrefix will be stripped from
     * the name.
     */
    SubModel.registerStaticConstants = function (modelClass, definesClass, groups) {
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var groupPrefix = group.groupPrefix;
            var stripPrefix = group.stripPrefix;
            for (var key in definesClass) {
                if (key.indexOf(groupPrefix) == 0) {
                    var strippedKey = key.substr(stripPrefix.length);
                    modelClass[strippedKey] = definesClass[key];
                }
            }
        }

    }

}


/**
 * The main Model class.
 */
function Model() {
    /** The registered sub models. */
    var m_registrations = {};
    /** Number of sub models which are not yet ready. */
    var m_registrationsNotReady = 0;

    // --------------------------------------------------------------
    // Methods
    // --------------------------------------------------------------
    /**
     * Registers a sub model.
     * @param name
     *       The name of the sub model.
     * @param modelClass
     *       The class to instantiate in order to create
     *       the sub model.
     */
    var registerModel = function (name, modelClass) {
        //  debugPrint("regist Model______" + name);
        try {
            if(-1 == modeljs.createmodel(name)) return;
        } catch (ex) {
            // debugE(ex.message);
        }
        modelInstance = new modelClass(this);
        m_registrations[name] = modelInstance;
        this[name] = modelInstance;
        if (!modelInstance.isReady()) {
            log.warn("modelInstance not ready", name);
            m_registrationsNotReady++;
        }
    }.bind(this);

    this.registerExtendModel = function (name, modelClass) {
        //  debugPrint("regist Model______" + name);
        try {
            if(-1 == modeljs.createmodel(name)) return;
        } catch (ex) {
            // debugE(ex.message);
        }
        extModelInstance = new modelClass(this);
        m_registrations[name] = extModelInstance;
        this[name] = extModelInstance;
        if (!extModelInstance.isReady()) {
            log.warn("modelInstance not ready", name);
            m_registrationsNotReady++;
        }
    };

    /**
     * Initializes the model. This method must be called
     * after registering all event listeners but before
     * accessing the model.
     */
    this.initialize = function () {
        rootInterface.connect();
    }

    /**
     * Handles a sub model ready notfication and calls
     * the onModelReady handler if all sub models are ready.
     */
    this.handleSubModelReady = function () {
        m_registrationsNotReady--;

        if (m_registrationsNotReady == 0) {
            this.onModelReady && this.onModelReady();
        }
        return true;
    }

    /**
     * Returns the modeljs root interface.
     */
    this.getRootInterface = function () {
        return rootInterface;
    }

    /** Handler to be called when model is ready. */
    this.onModelReady = null;

    // --------------------------------------------------------------
    // Init
    // --------------------------------------------------------------

    if(!!tv){
    // Create model root interface
    var rootInterface = modeljs.createRootInterface();
        //rootInterface.addEventListener("apiObjectAdded", handleApiObjectAdded);

        // Create sub-models

        registerModel("servicelist", ServicelistModel);
        registerModel("hisfactory", His_factoryModel);
        registerModel("system", SystemModel);
        registerModel("basicSetting", Basic_settingsModel);

        //21
        registerModel("usb", UsbModel);
        registerModel("sound", SoundModel);
        registerModel("ci", Common_interfaceModel);
        registerModel("tvservice", TvserviceModel);
        registerModel("closedcaption", ClosedcaptionModel);
        registerModel("appsetting", App_settingModel);
        registerModel("language", LanguageModel);
        registerModel("parentlock", Parental_lockModel);
        registerModel("softupdate", SoftwareupdateModel);
        registerModel("cec", CecModel);
        registerModel("timerfunc", Timer_functionsModel);
        registerModel("source", SourceModel);
        registerModel("network", NetworkModel);
        registerModel("video", VideoModel);
        registerModel("miracast", MiracastModel);
        registerModel("picture", PictureModel);
        registerModel("mpctrl", MpCtrlModel);
        registerModel("hotel", HotelModel);
        registerModel("epg", EpgModel);
        registerModel("timerlist", TimerlistModel);
        registerModel("timeshift", TimeshiftModel);

        switch (InitArea) {
            case "SA":
                registerModel("channelSearch", Channelsearch_isdbModel);
                registerModel("ginga", GingaModel);
                registerModel("mheg5", Mheg5Model);
                registerModel("bluetooth", BluetoothModel);
                registerModel("speech", SpeechModel);
                registerModel("pvr", PvrModel);
                break;
            case "EM":
                registerModel("channelSearch", Channelsearch_dvbModel);
                registerModel("mheg5", Mheg5Model);
                registerModel("bluetooth", BluetoothModel);
                registerModel("speech", SpeechModel);
                registerModel("pvr", PvrModel);
                break;
            case "COL":
                registerModel("channelSearch", Channelsearch_dvbModel);
//                registerModel("mheg5", Mheg5Model);
//                registerModel("bluetooth", BluetoothModel);
//                registerModel("speech", SpeechModel);
                registerModel("pvr", PvrModel);
                break;
            case "EU":
                registerModel("fvpepg", FVPEpgModel);
                registerModel("channelSearch", Channelsearch_dvbModel);
                registerModel("mheg5", Mheg5Model);
                registerModel("bluetooth", BluetoothModel);
                registerModel("satellite", SatelliteModel);
                registerModel("speech", SpeechModel);
                registerModel("pvr", PvrModel);
                break
            case "NA":
                break;

            default:
                break;
        }

    }
}

{

    try {
        // --------------------------------------------------------------
        // Static constants
        // --------------------------------------------------------------
        Model.FIELD_COND_NONE = modeljs.FIELD_COND_NONE;
        Model.FIELD_COND_EQUAL = modeljs.FIELD_COND_EQUAL;
        Model.FIELD_COND_CONTAINS = modeljs.FIELD_COND_CONTAINS;
        Model.FIELD_COND_LESS = modeljs.FIELD_COND_LESS;
        Model.FIELD_COND_LESSEQUAL = modeljs.FIELD_COND_LESSEQUAL;
        Model.FIELD_COND_GREATER = modeljs.FIELD_COND_GREATER;
        Model.FIELD_COND_GREATEREQUAL = modeljs.FIELD_COND_GREATEREQUAL;
        Model.FIELD_COND_ALL_BITS_SET = modeljs.FIELD_COND_ALL_BITS_SET;
        Model.FIELD_COND_ALL_BITS_CLEARED = modeljs.FIELD_COND_ALL_BITS_CLEARED;
        Model.FIELD_COND_ANY_BIT_SET = modeljs.FIELD_COND_ANY_BIT_SET;
        Model.FIELD_COND_ANY_BIT_CLEARED = modeljs.FIELD_COND_ANY_BIT_CLEARED;
        Model.FIELD_COND_NOT_EQUAL = modeljs.FIELD_COND_NOT_EQUAL;
        Model.FIELD_COND_END = modeljs.FIELD_COND_END;
    }
    catch (ex) {
        debugPrint("_______________model error" + ex.message);
    }
}


/**
 * ModelLoader class responsible for loading
 * all sub model javascript files.
 * 加入load模块数组判断
 */
function ModelLoader(onLoadedHandler, a) {

    /// List of modules to load in given order

    var MODEL_MODULES;

    if (!!a) {
        MODEL_MODULES = a;
    } else {
        //common的JS在该数组中注册
        MODEL_MODULES = [
            "model/model-servicelist.js",
            "model/model-hisfactory.js",
            "model/model-system.js",
            "model/model-basic-settings.js",

            //21
            "model/model-sound.js",
            "model/model-usb.js",
            "model/model-ci.js",
            "model/model-tvservice.js",
            "model/model-closedcaption.js",
            "model/model-app-setting.js",
            "model/model-language.js",
            "model/model-parental-lock.js",
          //  "model/model-softwareupdate.js",
            "model/model-cec.js",
            "model/model-timer-functions.js",
            "model/model-source.js",
            "model/model-network.js",
            "model/model-video.js",
            "model/model-miracast.js",
            "model/model-picture.js",
            "model/model-mpctrl.js",
            "model/model-hotel.js",
            "model/model-epg.js",
            "model/model-timerlist.js",
            "model/model-timeshift.js"
        ];


        switch (InitArea) {
            case "SA":
                MODEL_MODULES.push("model/model-channelsearch-isdb.js");
                MODEL_MODULES.push("model/model-ginga.js");
                MODEL_MODULES.push("model/model-mheg5.js");
                MODEL_MODULES.push("model/model-bluetooth.js");
                MODEL_MODULES.push("model/model-speech.js");
                MODEL_MODULES.push("model/model-pvr.js");
                MODEL_MODULES.push( "model/model-softwareupdate.js");


                break;
            case "EM":
                MODEL_MODULES.push("model/model-channelsearch.js");
                MODEL_MODULES.push("model/model-mheg5.js");
                MODEL_MODULES.push("model/model-bluetooth.js");
                MODEL_MODULES.push("model/model-pvr.js");
                MODEL_MODULES.push("model/model-speech.js");
                MODEL_MODULES.push( "model/model-softwareupdate_EM.js");
                break;
            case "COL":
                MODEL_MODULES.push("model/model-channelsearch.js");
               // MODEL_MODULES.push("model/model-mheg5.js");
               // MODEL_MODULES.push("model/model-bluetooth.js");
                MODEL_MODULES.push("model/model-pvr.js");
             //   MODEL_MODULES.push("model/model-speech.js");
                MODEL_MODULES.push( "model/model-softwareupdate.js");
                break;
            case "EU":
                MODEL_MODULES.push("model/model-fvpepg.js");
                MODEL_MODULES.push("model/model-channelsearch.js");
                MODEL_MODULES.push("model/model-mheg5.js");
                MODEL_MODULES.push("model/model-bluetooth.js");
                MODEL_MODULES.push("model/model-pvr.js");
                MODEL_MODULES.push("model/model-speech.js");
                MODEL_MODULES.push("model/model-satellite.js");
                MODEL_MODULES.push( "model/model-softwareupdate_EM.js");
                break
            case "NA":
                break;

            default:
                break;
        }
    }

    if(!tv){
        MODEL_MODULES=[];
        onLoadedHandler();
    }
    /// Number of loaded modules
    var loadedModules = 0;

    for (var i = 0; i < MODEL_MODULES.length; i++) {
        var module = MODEL_MODULES[i];
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = module;
        script.onload = function () {
            loadedModules++;
            if (loadedModules == MODEL_MODULES.length) {
                onLoadedHandler();
            }
        }
        document.head.appendChild(script);
    }
}


// Load modules and create global model instance when finished
var model = null;
var modelLoader = new ModelLoader(function () {
    model = new Model();
    InitCountry();
	SystemInitBrand();
    //initCountry="Morocco";//电视版本写入国家
});
if(!tv){
    initCountry="Poland";//PC版本写入国家
//    initCountry = "South Africa";
//    initCountry="Philippines";//SA
}

function SystemInitBrand()
{
	try{
		var brand=model.system.getCurBrand();
	}catch (e){
		debugE(e.message);
		brand="his";
	}
    var index=sysBrandlist.indexOf(brand);
    if(index<0)
    {
        brand=sysBrandlist[0];
        debugE(" the brand error ,fix it");
    }
    if("EM" == InitArea||"EU" == InitArea)
    {
        try{
            var customer=model.basicSetting.getFactoryCustomer();
            debugPrint("get customer"+customer);
            if(customer==1)
            {
                brand="con";
            }
            else if(customer==2)
            {
                brand="tho";
            }
            else if(customer==3)
            {
                brand="str";
            }
        }catch (e)
        {
            debugE(e.message);

        }
    }
	initBrand = brand;//set the uisdk the brand
    // debugE("the tv brand is "+brand);
    if("SA" == InitArea){
        switch(brand){
            case "jvc":
            case "pio":
            case "psc":
            case "nob":
            case "san":
            case "phi":
            case "ilo":
            case "sei":
            case "ton":
	        case "blu":
            case "pan":
            case "riv":
                g_launcherBrand = "SA_OEM";
                break;
            default :
                g_launcherBrand = "Hisense";
                break;
        }
    }
    else if("COL" == InitArea) {
        if("kal" == brand || "cha" == brand || "cor" == brand || "mtx" == brand) {
            g_launcherBrand = "SA_OEM";
        }
        else {
            g_launcherBrand = "VIDAALite";
        }
    }
	var string=Hisense.File.read("brandcode",1);
	if((typeof string!="string")||(string!=brand))
	{
		Hisense.File.write("brandcode",brand,1);
	}

}

function InitCountry()
{
    try{
    if(!tv) return;
    var country=model.basicSetting.getTvsetLocation();
    var countrylist=[];
    var index=-1;
    var newareaindex=0;
    debugPrint("getTvsetLocation"+country);
    if(InitArea=="EM")
    {
        newareaindex=model.hisfactory.getNewAreaIndex();
        debugPrint("newareaindex"+newareaindex);
    }
    else if(InitArea=="EU")
    {
        var EU2list=getsettingsyscountrylist("EU",1);
        var countryIndex=-1;
        for (var i = 0; i < EU2list.length; i++) {
            if (EU2list[i].code== country) {
                countryIndex=i;
                break;
            }
        }
        if(countryIndex>=0){
            newareaindex=1;
        }
        else {
            newareaindex=0;
        }
    }
    countrylist=getsettingsyscountrylist(InitArea,newareaindex);
    for (var i = 0; i < countrylist.length; i++) {
        if (countrylist[i].code.toLowerCase() == country.toLowerCase())
        {
            index=i;
            break;
        }
    }
    debugPrint("4444444444"+index);
    if(index>=0)
    {
        initCountry=countrylist[index].name;
        debugPrint("current country"+initCountry);
        initCountryCode = countrylist[index].code;
    }
    else
    {
       // "name": "South Africa",//南非
       // "code": "ZAF"
        initCountry=countrylist[0].name;
        model.basicSetting.setTvsetLocation(countrylist[0].code);
        DBG_ALWAYS("the country is error ,to fix it "+initCountry);
        initCountryCode = countrylist[0].code;
    }
    }catch (e)
    {
        debugE(e.message)
    }

}
function getsettingsyscountrylist(verArea,CurrentSubArea)
{
    var countryMapList=[];
    if(verArea=="SA")
    {
        countryMapList = [
            {


                "name": "Argentina",
                "code": "ARG"
            },
            {
                "name": "Bolivia",//玻利维亚
                "code": "BOL"
            },
            {

                "name": "Brazil",
                "code": "BRA"
            },
            {
                "name": "Chile",//智利
                "code": "CHL"
            },
            {

                "name": "Colombia",
                "code": "COL"
            },
            {

                "name": "Costa Rica",//哥斯达黎加
                "code": "CRI"
            },
            {

                "name": "Ecuador",
                "code": "ECU"
            },
            {

                "name": "Paraguay",//巴拉圭
                "code": "PRY"
            },
            {

                "name": "Peru",
                "code": "PER"
            },
            {

                "name": "Philippines",
                "code": "PHL"
            },
            {

                "name": "Uruguay",
                "code": "URY"
            }
        ];

    }
    else  if(verArea=="COL")
    {
        countryMapList = [{

            "name": "Colombia",
            "code": "COL"
        }]
    }
    else  if(verArea=="NA")
    {
        countryMapList = [
            {

                "name": "USA",
                "code": "USA"
            },
            {

                "name": "Canada",
                "code": "CAN"
            },
            {

                "name": "Mexico",
                "code": "MEX"
            }]
    }
    else  if(verArea=="EU")
    {
        if(CurrentSubArea=="EU"||CurrentSubArea==0)
        {
        countryMapList = [
            {
                "name": "Germany",
                "code": "DEU"
            },
            {

                "name": "Austria",
                "code": "AUT"
            },
            {

                "name": "Italy",
                "code": "ITA"
            },
            {

                "name": "UK",
                "code": "GBR"
            },
            {

                "name": "Spain",
                "code": "ESP"
            },
            {

                "name": "France",
                "code": "FRA"
            },
            {

                "name": "Switzerland",
                "code": "CHE"
            },
            {

                "name": "Portugal",
                "code": "PRT"
            },
            {

                "name": "Sweden",
                "code": "SWE"
            },
            {

                "name": "Denmark",
                "code": "DNK"
            },
            {

                "name": "Finland",
                "code": "FIN"
            },
            {

                "name": "Norway",
                "code": "NOR"
            },
            {

                "name": "Turkey",
                "code": "TUR"
            },
            {

                "name": "Czech Republic",
                "code": "CZE"
            },
            {

                "name": "Slovakia",
                "code": "SVK"
            },
            {

                "name": "Slovenia",
                "code": "SVN"
            },
            {
                "name": "Poland",
                "code": "POL"
            },
            {

                "name": "Hungary",
                "code": "HUN"
            },
            {

                "name": "Bulgaria",
                "code": "BGR"
            },
            {
                "name": "Russia_EU",//俄罗斯
                "code": "RUS"
            },
            {
                "name": "Uzbekistan_EU",//乌兹别克斯坦(Hisense)
                "code": "UZB"
            },
            {
                "name": "Kirghizstan_EU",//吉尔吉斯斯坦(Hisense)
                "code": "KGZ"
            },
            {
                "name": "Tajikistan_EU",// 塔吉克斯坦(Hisense)
                "code": "TJK"
	    },
                {
                    "name": "Kazakhstan_EU",// 哈萨克斯坦(Hisense)
                    "code": "KAZ"
                },
	    {
		    "name": "Croatia",// 克罗地亚(Hisense)
		    "code": "HRV"
	    },
	    {
		    "name": "Latvia",// 拉脱维亚(Hisense)
		    "code": "LVA"
	    },
	    {
		    "name": "Estonia",// 爱沙尼亚(Hisense)
		    "code": "EST"
	    },
	    {
                    "name": "Lithuanija",// 立陶宛(Hisense)
		    "code": "LTU"
                }
        ,
        {
            "name": "Greece",//希腊
            "code": "GRC"
        }
            ];
        }
        else if(CurrentSubArea=="EU2"||CurrentSubArea==1)
        {
            countryMapList =[
            {
                "name": "Algeria_EU", //阿尔及利亚
                "code": "DZA"
            },
            {
                "name": "Iraq_EU", //伊拉克
                "code": "IRQ"
            },
            {
                "name": "Saudi Arabia_EU", //沙特阿拉伯
                "code": "SAU"
            }]

        }
        //["Germany", "Austria", "Italy", "England", "Spain", "France", "Switzerland", "Portuguesa",
        // "Sweden", "Denmark", "Finland", "Norway", "Turkish", "Czech", "Slovakia", "Poland", "Hungary", "Bulgaria"]

    }
    else  //if(verArea=="EM")
    {
        if(CurrentSubArea=="MiddleEast"||CurrentSubArea==0)
        {
            countryMapList = [
                {
                    "name": "Egypt", //埃及
                    "code": "EGY"
                },
                {
                    "name": "Algeria", //阿尔及利亚
                    "code": "DZA"
                },
                {
                    "name": "Iran", //伊朗
                    "code": "IRN"
                },
                {
                    "name": "Iraq", //伊拉克
                    "code": "IRQ"
                },
                {
                    "name": "Saudi Arabia", //沙特阿拉伯
                    "code": "SAU"
                },
                {
                    "name": "UAE", //阿联酋
                    "code": "ARE"
                },
                {
                    "name": "Kuwait", //科威特
                    "code": "KWT"
                },
                {
                    "name": "Yemen", //也门
                    "code": "YEM"
                },
                {
                    "name": "Oman", //阿曼
                    "code": "OMN"
                },
                {
                    "name": "Qatar", //卡塔尔
                    "code": "QAT"
                },
                {
                    "name": "Jordan", //约旦
                    "code": "JOR"
                },
                {
                    "name": "Dubai", //迪拜
                    "code": "DXB"
                }
                ,
                {
                    "name": "Palestine", //巴勒斯坦
                    "code": "PSE"
                }
                ,
                {
                    "name": "Bahrain", //巴林
                    "code": "BHR"
                },
                {
                    "name": "Lebanon", //黎巴嫩
                    "code": "LBN"
                },
                {
                    "name": "Syria", //叙利亚
                    "code": "SYR"
                }
            ]
        }
        else if(CurrentSubArea=="CIS"||CurrentSubArea==1)
        {
            countryMapList = [
                {
                    "name": "Israel", //以色列
                    "code": "ISR"
                },
                {
                    "name": "Russia",//俄罗斯
                    "code": "RUS"
                },
                {
                    "name": "Uzbekistan",//乌兹别克斯坦(Hisense)
                    "code": "UZB"
                },
                {
                    "name": "Kirghizstan",//吉尔吉斯斯坦(Hisense)
                    "code": "KGZ"
                },
                {
                    "name": "Turkmenistan",//土库曼斯坦(Hisense)
                    "code": "TKM"
                },
                {
                    "name": "Kazakhstan",//哈萨克斯坦(Hisense)
                    "code": "KAZ"
                },
                {
                    "name": "Ukraine",//乌克兰(Hisense)
                    "code": "UKR"
                },
                {
                    "name": "Azerbaijan",//阿塞拜疆(Hisense)
                    "code": "AZE"
                },
                {
                    "name": "Georgia",//格鲁吉亚(Hisense)
                    "code": "GEO"
                },
                {
                    "name": "Armenia",// 亚美尼亚(Hisense)
                    "code": "ARM"
                },
                {
                    "name": "Serbia",// 塞尔维亚(Hisense)
                    "code": "SRB"
                },
                {
                    "name": "Tajikistan",// 塔吉克斯坦(Hisense)
                    "code": "TJK"
                },
                {
                    "name": "Belarus",// 白俄罗斯(Hisense)
                    "code": "BLR"
                },
                {
                    "name": "Moldova",// 摩尔多瓦(Hisense)
                    "code": "MDA"
                }

            ]
        }
        else if(CurrentSubArea=="Asian"||CurrentSubArea==2)
        {
            countryMapList = [
                {

                    "name": "Taiwan",//台湾（OEM)
                    "code": "TWN"
                },
                {

                    "name": "Australia",//澳大利亚（OEM)
                    "code": "AUS"
                },
                {

                    "name": "Thailand",//泰国（OEM)
                    "code": "THA"
                },
                {

                    "name": "Vietnam",// 越南
                    "code": "VNM"
                },
                {

                    "name": "Myanmar",//缅甸
                    "code": "MMR"
                },
                {

                    "name": "Malaysia",//马来西亚
                    "code": 'MYS'
                    //"MYS"
                },
                {
                    "name": "India",//印度
                    "code": "IND"
                },
                {
                    "name": "Indonesia",//印度尼西亚
                    "code": "IDN"
                },
                {
                    "name": "Sri Lanka",//斯里兰卡
                    "code": "LKA"
                },
                {
                    "name": "Maldives", //马尔代夫
                    "code": "MDV"
                },
                {
                    "name": "Fiji",//斐济
                    "code": "FJI"
                }
                ,
                {
                    "name": "Bengal",//孟加拉
                    "code": "BGD"
                },
                           // 巴基斯坦
                {
                    "name": "Pakistan",
                    "code": "PAK"
                },
                                  //  尼泊尔
                {
                    "name": "Nepal",
                    "code": "NPL"
                },
                                    //  柬埔寨
                {
                    "name": "Cambodia",
                    "code": "KHM"
                },
                {
                    "name": "Mongolia",//蒙古
                    "code": "MNG"
                },
                {
                    "name": "Others",//其他
                    "code": "ZZZ"
                }
            ]
        }
        else
        {
            countryMapList = [
                {

                    "name": "South Africa",//南非
                    "code": "ZAF"
                },
                {

                    "name": "Morocco",//摩洛哥(Hisense)
                    "code": "MAR"
                },
                {

                    "name": "Nigeria",//尼日利亚(Hisense)
                    "code": "NGA"
                },
                {

                    "name": "Libya",//利比亚(Hisense)
                    "code": "LBY"
                },
                {
                    "name": "Tunisia",//突尼斯
                    "code": "TUN"
                },
                {

                    "name": "Ghana",//加纳(Hisense+OEM)
                    "code": "GHA"
                },
                {

                    "name": "Sierra Leone",//塞拉利昂(Hisense)
                    "code": "SLE"
                },
                {

                    "name": "Cote d'Ivoire",// 科特迪瓦(Hisense+OEM)
                    "code": "CIV"
                },
                {

                    "name": "Angola",// 安哥拉(Hisense+OEM)
                    "code": "AGO"
                }
                ,
                {

                    "name": "Benin",// 贝宁(Hisense)
                    "code": "BEN"
                },
                {

                    "name": "Liberia",// 利比里亚(Hisense)
                    "code": "LBR"
                },
                {

                    "name": "Guinea",// 几内亚(Hisense)
                    "code": "GIN"
                },
                {
                    "name": "Senegal",// 塞内加尔(Hisense)
                    "code": "SEN"
                },
                {
                    "name": "Congo (DRC)",//  刚果（金）(Hisense+OEM)
                    "code": "COD"
                },
                {

                    "name": "Cameroon",//喀麦隆(Hisense+OEM)
                    "code": "CMR"
                },
                {

                    "name": "Zimbabwe",// 津巴布韦(Hisense)
                    "code": "ZWE"
                },
                {

                    "name": "Congo-Brazzaville",// 刚果布(Hisense)
                    "code": "COG"
                },
                {
                    "name": "Burundi",// 布隆迪(Hisense)
                    "code": "BDI"
                },
                {
                    "name": "Somalia",// 索马里(Hisense)
                    "code": "SOM"
                },
                {

                    "name": "Uganda",//乌干达(Hisense)
                    "code": "UGA"
                },
                {

                    "name": "Tanzania",//坦桑尼亚(Hisense)
                    "code": "TZA"
                },
                {

                    "name": "Mauritius",//  毛里求斯(Hisense)
                    "code": "MUS"
                },
                {

                    "name": "Sudan",//苏丹(Hisense)
                    "code": "SDN"
                },
                {

                    "name": "Djibouti",//吉布提(Hisense)
                    "code": "DJI"
                },
                {

                    "name": "Ethiopia",// 埃塞俄比亚(Hisense)
                    "code": "ETH"
                },
                {

                    "name": "Kenya",// 肯尼亚(Hisense+OEM)
                    "code": "KEN"
                },
                {

                    "name": "Mozambique",// 莫桑比克(Hisense)
                    "code": "MOZ"
                },
                {

                    "name": "Madagascar",// 马达加斯加(Hisense)
                    "code": "MDG"
                }
                //        {
                //            "name": "Dubai", //迪拜
                //            "code": "DXB"
                //        },
                //        {
                //            "name": "Russia",//俄罗斯
                //            "code": "RUS"
                //        },
                //        {
                //            "name": "Uzbekistan",//乌兹别克斯坦(Hisense)
                //            "code": "UZB"
                //        },
                //        {
                //            "name": "Kyrgyz",//吉尔吉斯斯坦(Hisense)
                //            "code": "KGZ"
                //        },
                //        {
                //            "name": "Turkmenistan",//土库曼斯坦(Hisense)
                //            "code": "TKM"
                //        },
                //        {
                //            "name": "Turkey",//土耳其(Hisense)
                //            "code": "TUR"
                //        },
                //        {
                //            "name": "Ukraine",//乌克兰(Hisense)
                //            "code": "UKR"
                //        },
                //        {
                //            "name": "Azerbaijan",//阿塞拜疆(Hisense)
                //            "code": "AZE"
                //        },
                //        {
                //            "name": "Georgia",//格鲁吉亚(Hisense)
                //            "code": "GEO"
                //        },
                //        {
                //            "name": "Armenia",// 亚美尼亚(Hisense)
                //            "code": "ARM"
                //        },
                //        {
                //            "name": "India",//印度
                //            "code": "IND"
                //        },
                //        {
                //            "name": "Indonesia",//印度尼西亚
                //            "code": "IDN"
                //        },
                //        {
                //            "name": "Sri Lanka",//斯里兰卡
                //            "code": "LKA"
                //        }
            ]
        }
    }
    debugPrint("the countryMapList "+JSON.stringify(countryMapList))
    return countryMapList;
}

