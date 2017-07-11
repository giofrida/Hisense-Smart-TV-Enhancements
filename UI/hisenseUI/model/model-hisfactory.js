/**
 * His_factoryModelDefines  class.
 * Contains all defined constants from C:/Users/ghl/Desktop/values-his-factory.h for
 * internal use.
 */

function His_factoryModelDefines() {
}
{
    // --------------------------------------------------------------
    // Static constants
    // -------------------------------------------------------------- 
    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_STATE_OPEN = "tvapi.i32.hisfactory.state.open";

    His_factoryModelDefines.SL2_TVAPI_HIS_FACTORY_STATE_OFF = 0;
    His_factoryModelDefines.SL2_TVAPI_HIS_FACTORY_STATE_ON = 1;

    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_TO_FACTORY_OPITION = "tvapi.i32.hisfactory.tofactory.opition";
    His_factoryModelDefines.SL2_TVAPI_TO_FACTORY_OPITION_M = 0;
    His_factoryModelDefines.SL2_TVAPI_TO_FACTORY_OPITION_U = 1;

    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_AGING = "tvapi.i32.hisfactory.aging";

    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_CURRENT_SOURCE = "tvapi.i32.hisfactory.current.source";
    His_factoryModelDefines.SL2_TVAPI_I32_FACTORY_AREA_INDEX="de.loewe.sl2.i32.hisfactory.area.index"
}
/**
 * His_factoryModel class derived from SubModel.
 */
function His_factoryModel(parentModel) {
    SubModel.call(this, parentModel, His_factoryModelDefines);

    // --------------------------------------------------------------
    // Objects
    // --------------------------------------------------------------    
    // StateOpen
    this.registerIntegerObject(
        His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_STATE_OPEN,
        "getStateOpen", "setStateOpen", "onStateOpenChaged",
        null, null);

    this.registerIntegerObject(
        His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_TO_FACTORY_OPITION,
        "getTofactoryOpition", "setTofactoryOpition", "onTofactoryOpitionChaged",
        null, null);


    this.registerIntegerObject(
        His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_AGING,
        "getFactoryAging", "setFactoryAging", "onFactoryAgingChaged",
        null, null);

    this.registerIntegerObject(
        His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_CURRENT_SOURCE,
        "getFactoryCurrentSource", "setFactoryCurrentSource", "onFactoryCurrentSourceChaged",
        null, null);
    this.registerIntegerObject(
        His_factoryModelDefines.SL2_TVAPI_I32_FACTORY_AREA_INDEX,
        "getNewAreaIndex", "setNewAreaIndex", "onNewAreaIndexChaged",
        null, null);

}
His_factoryModel.prototype = new SubModel();
His_factoryModel.prototype.constructor = His_factoryModel;
{
    // --------------------------------------------------------------
    // Static constants
    // --------------------------------------------------------------    
    SubModel.registerStaticConstants(
        His_factoryModel, His_factoryModelDefines,
        [
        ]);
}
