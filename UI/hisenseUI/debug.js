// --------------------------------------------------------
/**
 * @brief Javascript debug tools
 *
 * @author Sascha Radike
 *
 * Copyright (c) 2014 LOEWE Opta GmbH, Kronach. All rights reserved. */
//--------------------------------------------------------

var tv = window.location.href.indexOf("3rd_rw") > -1;
var usrAgent = navigator.userAgent;
var FUNC_INDEX = (usrAgent.indexOf('Opera') > -1 || usrAgent.indexOf('Firefox') > -1) ? 2 : 4;
//(tv = true) && (-1 == navigator.userAgent.indexOf('Opera')) && (tv = false);
//var isGUILoaded = false;
var launcherBaseDir = '../../launcher/';
var OEMlauncherBaseDir = '../../OEMLauncher/';
var VIDAALiteLauncherBaseDir = '../../VIDAALiteLauncher/';




var verNum = '18154_EU([5655])', verDate = '2016-04-07';
var isLogOn = !tv;

/**
 * Prints a debug message into debug HTML element.
 *
 * @param content1
 *      The string to print.
 */

function debugPrint(content, debugLevel) {
    try {
        debugFuncAndLine(content, debugLevel);
    }
    catch (ex) {
        console.log(content + debugLevel);
    }
}

function debugAlways(stepName) {
    tv && (log.warn("____________" + stepName));// + Date.now()));
}
//debugAlways("UIStart");
if (tv) {
    log.warn('~~~~~~~~~~~~~~~~| hisenseUI ' + verNum + ', verDate: ' + verDate + ', tv ' + tv + ' |~~~~~~~~~~~~~~~~');
}
function DBG_INFO(content, debugLevel) {

    (isNaN(debugLevel)) && (debugLevel = DebugLevel.INFO);
    (typeof(content) == "object") && (content = objToString(content));
    debugFuncAndLine("___________" + content, debugLevel);

}

function DBG_ERROR(content) {
    (typeof(content) == "object") && (content = objToString(content));
    debugFuncAndLine("___________" + content, DebugLevel.ERROR);
}

function DBG_ALWAYS(content) {
    (typeof(content) == "object") && (content = objToString(content));
    debugFuncAndLine("___________" + content, DebugLevel.ALWAYS);
}

function DBG_TODO(content){
    debugFuncAndLine("[TODO][" + content + "]", DebugLevel.ERROR);
}

function debugG(info) {
    debugFuncAndLine("___________" + info, DebugLevel.INFO);
}

function debugE(info) {
    debugFuncAndLine("___________" + info, DebugLevel.ERROR);
}

function debugRM(info) {
    debugFuncAndLine("debug__R____M______:==>" + info, DebugLevel.INFO);
}

function debugRME(info) {
    debugFuncAndLine("debug__R____M__ER__:==>" + info, DebugLevel.ERROR);
}

function debugFuncAndLine(content, debugLevel) {
    if (!isLogOn && debugLevel != DebugLevel.ERROR) {
        return;
    }

    isNaN(debugLevel) && (debugLevel = DebugLevel.INFO);
    try {
        throw Error('')
    }
    catch (err) {
        //var idx = usrAgent.indexOf('Opera') > -1 ? 2 : 4; // Chrome = 4
        var caller_func_line = err.stack.split("\n")[FUNC_INDEX];
        var arrs, fuc_line;
        if (!!caller_func_line) {
            arrs = caller_func_line.split('/');
            fuc_line = '[ ' + arrs[arrs.length - 1] + ' ]';
        }
        else {
            fuc_line = '[line number error]';
        }

//        tv ? modeljs.dbgprint(fuc_line + content, debugLevel) : console.log(fuc_line + content);

        switch (debugLevel) {
            case DebugLevel.INFO:
                tv ? log.warn(fuc_line + content) : console.log(fuc_line + content);
                break;
            case DebugLevel.ERROR:
                tv ? log.error(fuc_line + content) : console.log("%c" + fuc_line + content, "color:red");
                break;
            case DebugLevel.ALWAYS:
            case DebugLevel.WARNING:
                tv ? log.warn(fuc_line + content) : console.log("%c" + fuc_line + content, "color: blue");
                break;

            default :
                tv ? log.error('[no debug level] ' + fuc_line + content) : console.log(fuc_line + content);
                break;
        }
    }
}

function debugWhoCallMe(func) {
    if (!isLogOn) return;
    try {
        throw Error('')
    }
    catch (err) {
        try {
            //var idx = usrAgent.indexOf('Opera') > -1 ? 2 : 4; // Chrome = 4
            var caller_func_line = err.stack.split("\n")[FUNC_INDEX].split("@")[0];
            if (!!caller_func_line) {
                tv ? log.debug("[" + func + "][caller]" + caller_func_line) : console.log(caller_func_line);
            }
        }
        catch (ex) {
            tv ? log.error(ex.message) : console.log(ex.message);
        }
    }
}

//function printVersion() {
//    if(!tv) {
//        return;
//    }
//
//    log.warn('~~~~~~~~~~~~~~~~| hisenseUI ' + verNum + ' |~~~~~~~~~~~~~~~~');
//    log.warn(' ');
//    log.warn(verDate);
//    log.warn(' ');
//    log.warn('--------------------------------------------------');
//}
//printVersion();

function DebugLevel() {

}

DebugLevel.ALWAYS = 1;
DebugLevel.ERROR = 1000;
DebugLevel.WARNING = 2000;
DebugLevel.INFO = 3000;

function FACTORY_MODE_ENUM() {

}

FACTORY_MODE_ENUM.MODE_NORMAL = "modeNormal";
FACTORY_MODE_ENUM.MODE_FACTORY = "modeFactory";

var factoryMode = FACTORY_MODE_ENUM.MODE_NORMAL;
