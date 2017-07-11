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
        var convertedRows = new Array();
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
                    },
                    getMax: function () {
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
    var registerSimpleObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter, getMax) {

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
        if (getMax) {
            this[getMax] = function () {
                try {
                    var object = this.getObject(name);
                    DBG_ALWAYS("getMax     " + object.getMax());
                    return (object.getMax());
                }
                catch (ex) {
                    DBG_ERROR("get value[" + name + "] error." + ex.message);
                    return "";
                }
            }
        }

        // Register getter if specified
        if (getterName) {
            this[getterName] = function () {
                try {
                    var object = this.getObject(name);
                    return getterConverter(object.getValue());
                }
                catch (ex) {
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
                catch (ex) {
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
    this.registerIntegerObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter, getMax) {
        registerSimpleObject(name, getterName, setterName, handlerName, getterConverter, setterConverter, getMax);
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
    this.registerStringObject = function (name, getterName, setterName, handlerName, getterConverter, setterConverter, getMax) {
        registerSimpleObject(name, getterName, setterName, handlerName, getterConverter, setterConverter, getMax);
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
            modeljs.createmodel(name);
        } catch (ex) {
            debugE(ex.message);
        }
        modelInstance = new modelClass(this);
        m_registrations[name] = modelInstance;
        this[name] = modelInstance;
        if (!modelInstance.isReady()) {
            log.warn("modelInstance not ready", name);
            m_registrationsNotReady++;
        }
    }.bind(this);


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

    // Create model root interface
    var rootInterface = modeljs.createRootInterface();
    //rootInterface.addEventListener("apiObjectAdded", handleApiObjectAdded);

    // Create sub-models

    //registerModel("directory", DirectoryModel);
//    registerModel("servicelist", ServicelistModel);
//    registerModel("sound", SoundModel);
//    //registerModel("hisfactory", His_factoryModel);
//    registerModel("tvservice", TvserviceModel);
//    //registerModel("photo", PhotoModel);
    registerModel("language", LanguageModel);
    registerModel("network", NetworkModel);
//    registerModel("channelSearch", ChannelsearchModel);
    registerModel("parentlock", Parental_lockModel);
    registerModel("basicSetting", Basic_settingsModel);
    registerModel("system", SystemModel);
//    registerModel("softupdate", SoftwareupdateModel);
//    // registerModel("cec", CecModel);
//    registerModel("language", LanguageModel);
//    registerModel("appsetting", App_settingModel);
//    registerModel("closedcaption", ClosedcaptionModel);
//    registerModel("timerfunc", Timer_functionsModel);
//    registerModel("source", SourceModel);
    registerModel("video", VideoModel);
//    registerModel("miracast", MiracastModel);
    registerModel("picture", PictureModel);
    registerModel("mpctrl", MpCtrlModel);
    registerModel("usb", UsbModel);
    registerModel("volume", VolumeModel);
    registerModel("directory", DirectoryModel);


}

{

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


/**
 * ModelLoader class responsible for loading
 * all sub model javascript files.
 */
function ModelLoader(onLoadedHandler) {

    /// List of modules to load in given order

    var MODEL_MODULES = [
//        //"model-browser.js",
//        //"model-photo.js",
//        //"model-directory.js",
//        "model/model-servicelist.js",
//        "model/model-sound.js",   // delete by ghl for headphoneinsert interface
//        "model/model-hisfactory.js",
//        "model/model-tvservice.js",
//        "model/model-closedcaption.js",
//        "model/model-app-setting.js",
        "model/model-language.js",
        "model/model-parental-lock.js",
//        "model/model-softwareupdate.js",
//        //"model/model-cec.js",
        "model/model-system.js",
        "model/model-basic-settings.js",
//        "model/model-timer-functions.js",
//        "model/model-source.js",
        "model/model-network.js",
//        "model/model-channelsearch.js",
        "model/model-video.js",
//        "model/model-miracast.js",
        "model/model-picture.js",
        "model/model-mpctrl.js",
        "model/model-usb.js",
        "model/model-volume.js",
        "model/model-directory.js"

    ];

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

});

