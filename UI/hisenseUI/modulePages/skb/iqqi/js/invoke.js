/**
 * Created by liutiantian on 15-11-26.
 */

var locale_svn_version = 312;

var sit_test_mode = false;

function invokeSKB() {
    hiWebOsFrame.lockAllKeys();
    var _this = this;
    var self = false;

    var value = $('#' + this.id).val(),
        inputAttr = this.inputAttr;
    var sid = this.id;
    self = this.self;
    var max = (this.max != undefined) ? this.max : 18014398509481984;
    var min = (this.min != undefined) ? this.min : 0;
    var maxlength = (this.maxlength != undefined) ? this.maxlength : 2000;
    var zindex = !!self ? _this.zindex : null;
    debugPrint('invoke skb zindex:' + zindex);

    if (tv && !!_this.page)debugPrint('origin zindex:' + _this.page.priority + ' id:' + _this.page.id);
    this.event.preventDefault();

    var inputMethod = this.inputMethod;
    var callback = this.callback;
    /*
     hiWebOsFrame.createPage('softKeyBoard', '', _this.page, zindex, function(a) {
     hiWebOsFrame.unLockAllKeys("lockSign11");
     hiWebOsFrame.softKeyBoard = a;
     hiWebOsFrame.softKeyBoard.oldValue = value;

     if(tv)debugPrint('skb zindex:' + a.priority);
     if(!!self)hiWebOsFrame.softKeyBoard.curCom = _this.id;
     var firstFocusIndex = 0;
     if(inputAttr == 'number' || inputAttr == 'numberpassword') firstFocusIndex = 1;
     a.hiFocus(a.operateData.firstFocusId[firstFocusIndex]);

     $('#skbInput').val($('#' + _this.id).val());
     a.getCaE('skbInput').hiInput(inputAttr, max, min, maxlength);
     initInputFocus('skbInput');
     hiWebOsFrame.unLockAllKeys();
     });
     */

    if(invokeSKB.initialized == undefined) {
        function invokeInfoLog(msg) {
            if(tv) {
                debugPrint("main.js, invokeSKB, " + msg);
                return;
            }
            console.info("main.js, invokeSKB, " + msg);
        }

        function pullIQQIPage() {
            hiWebOsFrame.createPage('iqqi', '', _this.page, zindex, function(a) {
                hiWebOsFrame.iqqi = a;
                hiWebOsFrame.event = _this.event;//处理event
                if(tv)debugPrint('skb zindex:' + a.priority);
                if(!!self)hiWebOsFrame.iqqi.curCom = _this.id;

                invokeInfoLog("show version: " + locale_svn_version);

                try {
                    if(tv) {
                        if(a.operateData.IQQINative == null) {
                            a.operateData.IQQINative = new IQQINativeInterface();
                            a.operateData.IQQINative.IQQINativeInitialize();
                        }
                        else if(a.operateData.IQQINative.nativeInitialized == false) {
                            a.operateData.IQQINative.IQQINativeInitialize();
                        }
                    }

                    if(a.operateData.IQQIConfig == null) {
                        a.operateData.IQQIConfig = new IQQIConfig();
                    }

                    if(a.operateData.imagineUl == null) {
                        a.operateData.imagineUl = new IQQIImagineUl("iqqiImagineLeftArrow", "iqqiImagineRightArrow", "iqqiImagineContent", "");
                    }

                    var curLang = IQQIUtils.getSystemLanguage(a.operateData);
                    var curMode = IQQIUtils.MODE_LANGUAGE;
                    switch(inputAttr) {
                        case "number":
                            curMode = IQQIUtils.MODE_NUM1;
                            a.operateData.inputAttr = "text";
                            break;
                        case "password":
                            curMode = IQQIUtils.MODE_LANGUAGE;
                            a.operateData.inputAttr = "password";
                            break;
                        case "numberpassword":
                            curMode = IQQIUtils.MODE_NUM1;
                            a.operateData.inputAttr = "numberpassword";
                            break;
                        default :
                            curMode = IQQIUtils.MODE_LANGUAGE;
                            a.operateData.inputAttr = "text";
                            break;
                    }
                    iqqiInfoNewLog("invokeSKB.pullIQQIPage", "show inputMethod: " + inputMethod + "; inputAttr: " + inputAttr);
                    if(!!_this.inputMethod) {
                        a.operateData.inputMethod = inputMethod;
                        switch(inputMethod) {
                            case "password":
                                curMode = IQQIUtils.MODE_LANGUAGE;
                                break;
                            case "numberpassword":
                                curMode = IQQIUtils.MODE_NUM1;
                                break;
                        }
                    }
                    else {
                        delete a.operateData.inputMethod;
                    }

                    if("password" == a.operateData.inputAttr || "numberpassword" == a.operateData.inputAttr || "password" == a.operateData.inputMethod || "numberpassword" == a.operateData.inputMethod) {
                        curLang = "ENG";
                    }

                    iqqiInfoNewLog("invokeSKB.pullIQQIPage", "show min: " + _this.min + "; this.max: " + _this.max + "; curLang: " + curLang);
                    if(a.operateData.InputManager == null) {
                        a.operateData.InputManager = new InputManager(sid, inputAttr, inputMethod, maxlength, _this.min, _this.max, iqqiGetCurrentDisplay(a.page.operateData));
                    }
                    else {
                        a.operateData.InputManager.resetTo(sid, inputAttr, inputMethod, maxlength, _this.min, _this.max, iqqiGetCurrentDisplay(a.page.operateData));
                    }

                    for(var key in a.operateData.iqqiData) {
                        if(a.operateData.iqqiData[key].numbers) {
                            a.operateData.InputManager.pushNumbers(key, a.operateData.iqqiData[key].numbers);
                        }
                    }

                    if(!!callback) {
                        a.operateData.InputManager.setCallBack(callback);
                    }

                    var oldInput = document.getElementById(sid);
                    if(!!oldInput) {
                        a.operateData.oldValue = oldInput.value;
                        a.operateData.dynamicValue = oldInput.value;
                        a.operateData.oldPosition = a.operateData.InputManager.getCaretPosition(sid);
                        a.operateData.dynamicPosition = a.operateData.oldPosition;
                    }
                    var ocae = a.page.getCaE("iqqiInput");
                    ocae.inputAttr = "numberpassword" == inputAttr ? "password" : inputAttr;
                    a.page.CaE[0].CaE[0].CaE[0].inputAttr = ocae.inputAttr;
                    a.page.getCaE("iqqiInputContainer").classes.normal = ocae.inputAttr == "password" || "numberpassword" == ocae.inputAttr || "password" == inputMethod || "numberpassword" == inputMethod ? "iqqiInputContainerPassword" : "iqqiInputContainer";
                    iqqiAdaptDom(a.page, curLang, curMode);

                    var firstFocusIndex = curMode == IQQIUtils.MODE_LANGUAGE ? 0 : 1;
                    a.operateData.curFocusRow = 0;
                    a.operateData.curFocusCol = parseInt(a.operateData.firstFocusId[firstFocusIndex].slice(-1));

                    a.operateData.IQQIConfig.IQQIConfigAdaptTTFForLan(curLang, "iqqi");
                    if(a.operateData.needRewrite) {
                        iqqiRewrite.call(a.page.getCaE(a.operateData.firstFocusId[firstFocusIndex]), a.operateData.firstFocusId[firstFocusIndex], true, false);
                    }
                    iqqiInfoNewLog("invokeSKB.pullIQQIPage", "show inputAttr: " + a.page.getCaE("iqqiInput").inputAttr);
                }
                catch(ex) {
                    iqqiErrorNewLog("invokeSKB.pullIQQIPage", "show error: " + ex, ex);
                }

                hiWebOsFrame.unLockAllKeys();
            });
        }

        invokeSKB.initialized = true;
    }

    var path = "modulePages/skb/iqqi/js/skb_iqqi_iqqi_html.js";
    var ref = document.getElementById("iqqi_string_script");
    if (!!ref) {
        invokeInfoLog("script file has already been loaded. show path: " + path);
        pullIQQIPage();
        return;
    }
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", path);
    script.id = "iqqi_string_script";
    script.async = false;
    document.getElementsByTagName("head")[0].appendChild(script);

    invokeInfoLog("script file has been loaded. show: " + path);
    document.addEventListener ?
        script.addEventListener("load", function () {
            invokeInfoLog("enter document listener.");
            pullIQQIPage();
        }, false)
        :
        script.onreadystatechange = function () {
            if (this.readyState == "loaded" || this.readyState == "complete") {
                invokeInfoLog("enter script listener.");
                pullIQQIPage();
            }
        };
}
