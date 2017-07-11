/**
 * Created by maggie on 14-6-4.
 */
function invokeSKBTest()
{
    var _this = this;

    var value = $('#'+this.id).val(),
        inputAttr = this.inputAttr;
    if(this.max != undefined) var max = this.max;
    if(this.min != undefined) var min = this.min;
    if(this.maxlength != undefined) var maxlength = this.maxlength;

    hiWebOsFrame.createPage('softKeyBoard','',_this.page,null,function(a){
        hiWebOsFrame.softKeyBoard = a;
        var firstFocusIndex=0;
        if(inputAttr =='number' || inputAttr=='numberpassword') firstFocusIndex = 1;
        a.hiFocus(a.operateData.firstFocusId[firstFocusIndex]);

        $('#skbInput').val($('#'+_this.id).val());
        a.getCaE('skbInput').hiInput(inputAttr,max,min,maxlength);
        initInputFocus('skbInput');
    });

}
function exitSKBNotSave(){
    exitSKB(0,0,1);
}
function exitSKB(a,b,isReturn)
{
    var value = $('#skbInput').val();
    var skb = hiWebOsFrame.softKeyBoard,
        oldValue = hiWebOsFrame.softKeyBoard.oldValue;
    debugPrint('isReturn:'+isReturn);
    if(!!isReturn)value = oldValue;
    var type = hiWebOsFrame.softKeyBoard.getCaE('skbInput').inputAttr;
    skb.close();

    try{
        var curCom;
        try
        {
            if(type == 'number' && !!value)value = parseInt(value,10);
        }
        catch(ex){
            debugPrint('skb value parseInt:'+value +' ex:'+ex);
        }

        if(!!hiWebOsFrame.softKeyBoard.curCom)
        {
            curCom = hiWebOsFrame.softKeyBoard.curCom;
            hiWebOsFrame.softKeyBoard.curCom = '';
            hiWebOsFrame.softKeyBoard.self = '';
            $('#'+curCom).val(value);
            initInputFocus(curCom);
            if(!!hiWebOsFrame.isOpenBrowser){
            	hiWebOsFrame.isOpenBrowser = false;
            	//hiWebOsFrame.registerKeyCodesLobster();
            }
            skb.origin.hiFocus();
            if(!!skb.origin)debugPrint('exit skb blankpage :'+skb.origin.id);
        }
        else
        {
            curCom =skb.origin.currentSelectedTree.length> 0? skb.origin.currentSelectedTree[skb.origin.currentSelectedTree.length-1].id:'';
            $('#'+curCom).val(value);
            initInputFocus(curCom);
            var input = skb.origin.getCaE(curCom);
            skb.origin.hiFocus(curCom);
            /*********************  增加输入框的回调函数  ****************************/
            if (!!input.opts.onChange) {
                if (typeof input.opts.onChange == 'function') {
                    input.opts.onChange.call(this,this.page.operateData, this.data);
                }
                else if (typeof input.opts.onChange == 'string') {
                    eval(input.opts.onChange + '.call(this,this.page.operateData, this.data)');
                }
            }
        }
    }catch(ex){
        debugPrint('exit skb normal error2 : '+ex);
    }



}
function isNumberKey(eventCode)
{
    var charCode = eventCode.charCodeAt();
    charCode = !!charCode ? charCode:999;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function isValidNumberInputKey(eventCode)
{
    var val =$('#'+this.id).val();
    var charCode = eventCode.charCodeAt();
    if(!!val)
    {
        val = parseInt((val+''+(charCode-48)),10);
        if (((this.max !=undefined && this.min !=undefined) && (val > this.max || val < this.min))
            ||(this.maxlength !=undefined && $.trim(val+'').length > this.maxlength))
            return false;
    }

    return true;
}
function isValidLengthInputKey(content)
{
    var val =$('#'+this.id).val();
    if(!!content)
    {
        if ((this.maxlength !=undefined && content.length > this.maxlength))
            return false;
    }

    return true;
}
function initInputFocus(inputName) {
    var obj = $$(inputName),
        pos = $(obj).val().length;
    obj.focus();
    setCaretPosition(inputName,pos);
//    $(obj).scrollLeft(pos* $(obj).width());
}
//获取光标位置函数
function getCursortPosition(ctrlname) {
    var ctrl = $$(ctrlname),
        CaretPos = 0; // IE Support
    if (!!document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (!!ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;
    return (CaretPos);
}

//设置光标位置函数
//参数ctrl为input或者textarea对象
function setCaretPosition(ctrlname, pos) {
    var ctrl = $$(ctrlname);
    ctrl.focus();
    if (ctrl.setSelectionRange) {
        try{
            ctrl.setSelectionRange(pos, pos);
        }
        catch(ex){

        }
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(false);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
    ctrl.focus();
}

function addBlank(opeData,data){
    var skbInput = this.page.getCaE('skbInput');
    if(!!skbInput.inputAttr && (skbInput.inputAttr =='number' || skbInput.inputAttr =='numberpassword') && !isNumberKey($('#'+this.id).html())){
        return;
    }
    var value = $('#skbInput').val();
    var newValue ='';
    var obj = $$('skbInput'),
        position  = getCursortPosition(obj.id);
    obj.blur();
    if(value.length > 0 && position > 0){
        newValue = value.substring(0,position);
        newValue += " ";
        newValue += value.substring(position,value.length);
        $('#skbInput').val(newValue);
        setCaretPosition(obj.id,position+1);
    }
    obj.blur();
    obj.focus();
}
function backSpace(opeData,data){
    var value = $('#skbInput').val();
    var newValue ='';
    var obj = $$('skbInput');
    var position  = getCursortPosition(obj.id);
    obj.blur();
    if(value.length > 0 && position > 0){
        newValue = value.substring(0,position-1);
        newValue += value.substring(position,value.length);
        $('#skbInput').val(newValue);
        setCaretPosition(obj.id,position-1);
    }
    obj.blur();
    obj.focus();
}
function clearAll(opeData,data){
    $('#skbInput').val('');
}
function skbKeyLeft(opeData,data){

    var obj = $$('skbInput');
    var position  = getCursortPosition(obj.id);
    position = position!=undefined ? position :obj.length;
    position =position< 1 ? position :position-1;
    setCaretPosition(obj.id,position);
}
function skbKeyRight(opeData,data){
    var obj = $$('skbInput');
    var position  = getCursortPosition(obj.id);
    position = position!=undefined ? position :obj.length;
    position =position >= obj.length ? position :position+1;
    setCaretPosition(obj.id,position);
}
function InitSKBFocus() {
    var obj = $$('skbInput'),
        pos = $(obj).val().length;
    obj.focus();
//    setCaretPosition(obj,$(obj).val().length);
    setCaretPosition(obj.id,pos);
//    $(obj).scrollLeft(pos* $(obj).width());
}

function inputAndCursor(opeData,data)
{

    var obj =$$('skbInput'),
        content = $('#skbInput').val(),
        curserPos = getCursortPosition('skbInput'),
        pre = content.slice(0,curserPos),
        back = content.slice(curserPos),
        skbInput = this.page.getCaE('skbInput'),
        fontWidth = 0,
        pos = content.length,
        keyHtml = $('#'+this.id).text();
    obj.blur();
    if(!!skbInput.inputAttr && (skbInput.inputAttr =='number' || skbInput.inputAttr =='numberpassword'))
    {
        if(!!isNumberKey($('#'+this.id).html()) && !!isValidNumberInputKey.call(skbInput,$('#'+this.id).html()))
        {
            content = pre + $('#'+this.id).html()+back;
            $('#skbInput').val(content);
            setCaretPosition('skbInput',curserPos+1);
        }
    }
    else{

        content = pre + keyHtml +back;
        if(!!isValidLengthInputKey.call(skbInput,content))
        {
            $('#skbInput').val(content);
            setCaretPosition('skbInput',curserPos+keyHtml.length);
        }
    }
    obj.blur();
    obj.focus();
}
String.prototype.visualLength = function()
{
    var ruler = $(".skbControl.visualLength");
    ruler.text(this);
    return ruler[0].offsetWidth;
}
function firstKeyUpHandler(opeData,data)
{
    var skbInput = this.page.getCaE(this.opts.nav.upTo);
    skbInput.opts.nav.downTo = this.id;
}

function aftSKBInputDownHandler(opeData,data){
    $$('skbInput').focus();
}
function keyAftHandler(opeData,data){

}

function switchCaps(opeData,data){
    var isCaps = !!opeData.isCaps ? opeData.isCaps :0;
    isCaps =isCaps == 0? isCaps +1 : isCaps -1;
    opeData.isCaps = isCaps;
    opeData.curLetterIndex = !!opeData.curLetterIndex?opeData.curLetterIndex:0;
    switch(opeData.curLetterIndex)
    {
        case 0:
        case 1:
            opeData.curLetterIndex = isCaps;
            opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2;
            break;
        case 2:
            opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2 + 1;
            break;
        case 3:
            opeData.curLetterIndex = 4;
            opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2 + 5;
            break;
        case 4:
            opeData.curLetterIndex = 3;
            opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2 + 5;
            break;
    }

    var _this = this;
    _this.page.rewriteDataOnly();
    _this.page.hiFocus(_this.id);
    capsSwitchWorkClass(opeData,data);
}

function switchLanguage(opeData,data){
    openSKBLanListPage.call(this,opeData,data);
}

function switchSpeLetter(opeData,data){
    opeData.speLetter = (!!opeData.isCaps ? opeData.isCaps : 0) +3;
    if(opeData.curLetterIndex == opeData.speLetter)
    {
        opeData.curLetterIndex = opeData.isCaps;
        opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2 + 4;
    }
    else
    {
        opeData.curLetterIndex = opeData.speLetter;
        opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2 + 5;
    }

    this.page.rewriteDataOnly();
}

function switchSpeChar(opeData,data){
    opeData.speChar = 2;
    if(opeData.curLetterIndex == 2 )
    {
        opeData.curLetterIndex = opeData.isCaps;
        opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2 + 0;
    }
    else
    {
        opeData.curLetterIndex = opeData.speChar;
        opeData.curSpecialIndex = (!!opeData.isCaps ? opeData.isCaps : 0)*2+ 1;
    }

    this.page.rewriteDataOnly();
}

var $$ = function(id){
    return document.getElementById(id);
};


function capsSwitchWorkClass(opeData,data){

    if( !!opeData.isCaps && $('#specialKey_0').hasClass('keyCNormal'))
    {
        $('#specialKey_0').removeClass('keyCNormal').addClass('keyCWork');
    }
    else if( !opeData.isCaps && $('#specialKey_0').hasClass('keyCNormal'))
    {
        $('#specialKey_0').removeClass('keyCNormal').addClass('keyCNormal');
    }
}
function skbOpenHandler(){
    var lang = hiWebOsFrame.softKeyBoard.operateData.lang;
    if(!localStorage.curLang && hiWebOsFrame.getCurrentLanguage().toUpperCase() != lang){
        hiWebOsFrame.softKeyBoard.rewriteDataOnly();
    }
    debugPrint('Curlang:'+hiWebOsFrame.softKeyBoard.operateData.lang+" syslang:"+hiWebOsFrame.getCurrentLanguage().toUpperCase());
}
function skbPageDataRewrite(data) {
    debugPrint('skbPageDataRewrite: start to rewrite');
    var opeData = data.operateData,
        curLang = $.inArray(hiWebOsFrame.getCurrentLanguage().toUpperCase(),opeData.curLangArray) > -1?hiWebOsFrame.getCurrentLanguage().toUpperCase():"ENG",
        curLang = (!!localStorage.curLang && $.inArray(localStorage.curLang,opeData.curLangArray) > -1)? localStorage.curLang : curLang,
        curLI = !!opeData.curLetterIndex ? opeData.curLetterIndex: 0,
        curSI = !!opeData.curSpecialIndex ? opeData.curSpecialIndex:0;
    opeData.lang = curLang;

    debugPrint('localstorage:'+localStorage.curLang);
    debugPrint('Curlang:'+opeData.lang+" syslang:"+hiWebOsFrame.getCurrentLanguage().toUpperCase());

    $.each(data, function (key, val) {

        if(!key) return true;

        var  localData = data[key],
            localOpeData = opeData.skbData;

        var strs = key.split('_'),
            regionName = strs[0],
            index = strs[1];

        switch(regionName)
        {
            case "letterKey":
                //更新data里面的数据
                try
                {
                    var regionArr = localOpeData[curLang][regionName][curLI];
                    if(regionArr.length > 0)localData.Data = !!regionArr[index]?regionArr[index]:"";
                }
                catch(ex)
                {

                }
                break;
            case "specialKey":
                try
                {
                    var regionArr = localOpeData[curLang][regionName][curSI];
                    if(regionArr.length > 0)localData.Data = !!regionArr[index]?regionArr[index]:"";
                }
                catch(ex)
                {

                }
                break;
            case "numberKey":
                try
                {
                    localData.Data = localOpeData[curLang][regionName][index];
                }
                catch(ex)
                {

                }
                break;
            case "skbInputContainer":
                localData.Data.skbInput.Data = $('#skbInput').val();
                break;
        }
    })

}

function getSKBPageData(page)
{
    page.CaE = [
        {
            "id":"skbInputContainer",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId":"epgInputZipConfirm",
            "classes": {
                "normal": "skbInputContainerNormal", "focus": "skbInputContainerFocus",
                "disable":"skbInputContainerDisable", "selected": "skbInputContainerSelected"
            },
            "nav": {
                "upTo":"skbInput"
            },
            "CaE":[
                {
                    "id": "skbInput",
                    "description": "输入控件",
                    "classes": {
                        "normal": "skbInputNormal", "focus": "skbInputFocus", "disable": "skbInputDisable", "selected": "skbInputSelected"
                    },
                    "nav": {
                        "downTo":""
                    },
                    "CaEType": "input",
                    "inputAttr":"text",
                    "handler":{
                        "aftEnterHandler":"exitSKB"
                    }
                }
            ]
        },
        {
            "id": "letterKey_0",
            "CaEType": "div",
            "classes": {"normal": "keyANormal", "focus": "keyAFocus", "selected": "keyASelected", "disable": "keyADisable"},
            "nav": {"rightTo": "letterKey_1", "upTo": "skbInput", "downTo": "letterKey_10","leftTo":"numberKey_3"},
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_1",
            "CaEType": "div",
            "classes": {"normal": "keyANormal", "focus": "keyAFocus", "selected": "keyASelected", "disable": "keyADisable"},
            "nav": {"rightTo": "letterKey_2", "leftTo": "letterKey_0", "upTo": "skbInput", "downTo": "letterKey_11"},
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_2",
            "CaEType": "div",
            "classes": {"normal": "keyANormal", "focus": "keyAFocus", "selected": "keyASelected", "disable": "keyADisable"},
            "nav": {"rightTo": "letterKey_3", "leftTo": "letterKey_1", "upTo": "skbInput", "downTo": "letterKey_12"},
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_3",
            "CaEType": "div",
            "classes": {"normal": "keyANormal", "focus": "keyAFocus", "selected": "keyASelected", "disable": "keyADisable"},
            "nav": {"rightTo": "letterKey_4", "leftTo": "letterKey_2", "upTo": "skbInput", "downTo": "letterKey_13"},
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_4",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_5",
                "leftTo": "letterKey_3",
                "upTo": "skbInput",
                "downTo": "letterKey_14"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_5",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_6",
                "leftTo": "letterKey_4",
                "upTo": "skbInput",
                "downTo": "letterKey_15"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_6",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_7",
                "leftTo": "letterKey_5",
                "upTo": "skbInput",
                "downTo": "letterKey_16"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_7",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_8",
                "leftTo": "letterKey_6",
                "upTo": "skbInput",
                "downTo": "letterKey_17"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_8",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_9",
                "leftTo": "letterKey_7",
                "upTo": "skbInput",
                "downTo": "letterKey_18"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_9",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "numberKey_1",
                "leftTo": "letterKey_8",
                "upTo": "skbInput",
                "downTo": "letterKey_19"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "letterKey_10",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_11",
                "leftTo": "numberKey_6",
                "upTo": "letterKey_0",
                "downTo": "letterKey_20"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_11",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_12",
                "leftTo": "letterKey_10",
                "upTo": "letterKey_1",
                "downTo": "letterKey_21"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_12",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_13",
                "leftTo": "letterKey_11",
                "upTo": "letterKey_2",
                "downTo": "letterKey_22"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_13",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_14",
                "leftTo": "letterKey_12",
                "upTo": "letterKey_3",
                "downTo": "letterKey_23"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_14",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_15",
                "leftTo": "letterKey_13",
                "upTo": "letterKey_4",
                "downTo": "letterKey_24"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_15",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_16",
                "leftTo": "letterKey_14",
                "upTo": "letterKey_5",
                "downTo": "letterKey_25"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_16",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_17",
                "leftTo": "letterKey_15",
                "upTo": "letterKey_6",
                "downTo": "letterKey_26"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_17",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_18",
                "leftTo": "letterKey_16",
                "upTo": "letterKey_7",
                "downTo": "letterKey_27"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_18",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_19",
                "leftTo": "letterKey_17",
                "upTo": "letterKey_8",
                "downTo": "letterKey_28"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_19",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "numberKey_4",
                "leftTo": "letterKey_18",
                "upTo": "letterKey_9",
                "downTo": "letterKey_29"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_20",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_21",
                "leftTo": "numberKey_9",
                "upTo": "letterKey_10",
                "downTo": "specialKey_0"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"capsSwitchWorkClass",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_21",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_22",
                "leftTo": "letterKey_20",
                "upTo": "letterKey_11",
                "downTo": "specialKey_0"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"capsSwitchWorkClass",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_22",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_23",
                "leftTo": "letterKey_21",
                "upTo": "letterKey_12",
                "downTo": "specialKey_1"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_23",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_24",
                "leftTo": "letterKey_22",
                "upTo": "letterKey_13",
                "downTo": "specialKey_2"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_24",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_25",
                "leftTo": "letterKey_23",
                "upTo": "letterKey_14",
                "downTo": "specialKey_2"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_25",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_26",
                "leftTo": "letterKey_24",
                "upTo": "letterKey_15",
                "downTo": "specialKey_2"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_26",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_27",
                "leftTo": "letterKey_25",
                "upTo": "letterKey_16",
                "downTo": "specialKey_3"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_27",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_28",
                "leftTo": "letterKey_26",
                "upTo": "letterKey_17",
                "downTo": "specialKey_4"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_28",
            "CaEType": "div",
            "classes": {
                "normal": "keyANormal",
                "focus": "keyAFocus",
                "selected": "keyASelected",
                "disable": "keyADisable"
            },
            "nav": {
                "rightTo": "letterKey_29",
                "leftTo": "letterKey_27",
                "upTo": "letterKey_18",
                "downTo": "specialKey_5"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "letterKey_29",
            "CaEType": "div",
            "classes": {
                "normal": "keyDeleteNormal",
                "focus": "keyDeleteFocus",
                "selected": "keyDeleteSelected",
                "disable": "keyDeleteDisable"
            },
            "nav": {
                "rightTo": "numberKey_7",
                "leftTo": "letterKey_28",
                "upTo": "letterKey_19",
                "downTo": "specialKey_6"
            },
            "handler":{
                "aftEnterHandler":"backSpace",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "specialKey_0",
            "CaEType": "div",
            "classes": {
                "normal": "keyCNormal",
                "focus": "keyCFocus",
                "selected": "keyCSelected",
                "disable": "keyCDisable"
            },
            "nav": {
                "rightTo": "specialKey_1",
                "leftTo": "numberKey_0",
                "upTo": "letterKey_20",
                "downTo": "letterKey_0"
            },
            "handler":{
                "aftEnterHandler":"switchCaps",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "specialKey_1",
            "CaEType": "div",
            "classes": {
                "normal": "keyCharNormal",
                "focus": "keyCharFocus",
                "selected": "keyCharSelected",
                "disable": "keyCharDisable"
            },
            "nav": {
                "rightTo": "specialKey_2",
                "leftTo": "specialKey_0",
                "upTo": "letterKey_22",
                "downTo": "letterKey_2"
            },
            "handler":{
                "aftEnterHandler":"switchLanguage",
                "aftRightHandler":"capsSwitchWorkClass",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "specialKey_2",
            "CaEType": "div",
            "classes": {
                "normal": "keyDNormal",
                "focus": "keyDFocus",
                "selected": "keyDSelected",
                "disable": "keyDDisable"
            },
            "nav": {
                "rightTo": "specialKey_3",
                "leftTo": "specialKey_1",
                "upTo": "letterKey_23",
                "downTo": "letterKey_3"
            },
            "handler":{
                "aftEnterHandler":"addBlank",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "specialKey_3",
            "CaEType": "div",
            "classes": {
                "normal": "keyCharNormal",
                "focus": "keyCharFocus",
                "selected": "keyCharSelected",
                "disable": "keyCharDisable"
            },
            "nav": {
                "rightTo": "specialKey_4",
                "leftTo": "specialKey_2",
                "upTo": "letterKey_26",
                "downTo": "letterKey_6"
            },
            "handler":{
                "aftEnterHandler":"switchSpeChar",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "specialKey_4",
            "CaEType": "div",
            "classes": {
                "normal": "keyCharNormal",
                "focus": "keyCharFocus",
                "selected": "keyCharSelected",
                "disable": "keyCharDisable"
            },
            "nav": {
                "rightTo": "specialKey_5",
                "leftTo": "specialKey_3",
                "upTo": "letterKey_27",
                "downTo": "letterKey_7"
            },
            "handler":{
                "aftEnterHandler":"switchSpeLetter",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "specialKey_5",
            "CaEType": "div",
            "classes": {
                "normal": "keyCharNormal",
                "focus": "keyCharFocus",
                "selected": "keyCharSelected",
                "disable": "keyCharDisable"
            },
            "nav": {
                "rightTo": "specialKey_6",
                "leftTo": "specialKey_4",
                "upTo": "letterKey_28",
                "downTo": "letterKey_8"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "specialKey_6",
            "CaEType": "div",
            "classes": {
                "normal": "keyEnterNormal",
                "focus": "keyEnterFocus",
                "selected": "keyEnterSelected",
                "disable": "keyEnterDisable"
            },
            "nav": {
                "rightTo": "numberKey_10",
                "leftTo": "specialKey_5",
                "upTo": "letterKey_29",
                "downTo": "letterKey_9"
            },
            "handler":{
                "aftEnterHandler":"exitSKB",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_0",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "specialKey_0",
                "leftTo": "numberKey_11",
                "upTo": "numberKey_9",
                "downTo": "numberKey_3"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_1",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "numberKey_2",
                "leftTo": "letterKey_9",
                "upTo": "skbInput",
                "downTo": "numberKey_4"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "numberKey_2",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "numberKey_3",
                "leftTo": "numberKey_1",
                "upTo": "skbInput",
                "downTo": "numberKey_5"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "numberKey_3",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "letterKey_0",
                "leftTo": "numberKey_2",
                "upTo": "skbInput",
                "downTo": "numberKey_6"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "befUpHandler":"firstKeyUpHandler",
                "aftDownHandler":"aftSKBInputDownHandler"
            }
        },
        {
            "id": "numberKey_4",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "numberKey_5",
                "leftTo": "letterKey_19",
                "upTo": "numberKey_1",
                "downTo": "numberKey_7"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_5",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "numberKey_6",
                "leftTo": "numberKey_4",
                "upTo": "numberKey_2",
                "downTo": "numberKey_8"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_6",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "letterKey_10",
                "leftTo": "numberKey_5",
                "upTo": "numberKey_3",
                "downTo": "numberKey_9"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_7",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "numberKey_8",
                "leftTo": "letterKey_29",
                "upTo": "numberKey_4",
                "downTo": "numberKey_10"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_8",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "numberKey_9",
                "leftTo": "numberKey_7",
                "upTo": "numberKey_5",
                "downTo": "numberKey_11"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_9",
            "CaEType": "div",
            "classes": {
                "normal": "keyBNormal",
                "focus": "keyBFocus",
                "selected": "keyBSelected",
                "disable": "keyBDisable"
            },
            "nav": {
                "rightTo": "letterKey_20",
                "leftTo": "numberKey_8",
                "upTo": "numberKey_6",
                "downTo": "numberKey_0"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_10",
            "CaEType": "div",
            "classes": {
                "normal": "keyHTTPNormal",
                "focus": "keyHTTPFocus",
                "selected": "keyHTTPSelected",
                "disable": "keyHTTPDisable"
            },
            "nav": {
                "rightTo": "numberKey_11",
                "leftTo": "specialKey_6",
                "upTo": "numberKey_7",
                "downTo": "numberKey_1"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id": "numberKey_11",
            "CaEType": "div",
            "classes": {
                "normal": "keyHTTPNormal",
                "focus": "keyHTTPFocus",
                "selected": "keyHTTPSelected",
                "disable": "keyHTTPDisable"
            },
            "nav": {
                "rightTo": "numberKey_0",
                "leftTo": "numberKey_10",
                "upTo": "numberKey_8",
                "downTo": "numberKey_2"
            },
            "handler":{
                "aftEnterHandler":"inputAndCursor",
                "aftRightHandler":"keyAftHandler",
                "aftLeftHandler":"keyAftHandler",
                "aftUpHandler":"keyAftHandler",
                "aftDownHandler":"keyAftHandler"
            }
        },
        {
            "id":"skbEnterBtn",
            "CaEType": "div",
            "classes": {
                "normal": "controlFont",
                "focus": "controlFont",
                "selected": "controlFont",
                "disable": "controlFont"
            }
        },
        {
            "id":"skbDeleteBtn",
            "CaEType": "div",
            "classes": {
                "normal": "controlFont",
                "focus": "controlFont",
                "selected": "controlFont",
                "disable": "controlFont"
            }
        },
        {
            "id":"skbRightBtn",
            "CaEType": "div",
            "classes": {
                "normal": "controlFont",
                "focus": "controlFont",
                "selected": "controlFont",
                "disable": "controlFont"
            }
        },
        {
            "id":"skbLeftBtn",
            "CaEType": "div",
            "classes": {
                "normal": "controlFont",
                "focus": "controlFont",
                "selected": "controlFont",
                "disable": "controlFont"
            }
        }

    ];

    var skbPageData = {
        "skbInputContainer":{
            "Data":{
                "skbInput": {"Data":""}
            }
        },
        "letterKey_0": {"Data":""},
        "letterKey_1": {"Data":""},
        "letterKey_2": {"Data":""},
        "letterKey_3": {"Data":""},
        "letterKey_4": {"Data":""},
        "letterKey_5": {"Data":""},
        "letterKey_6": {"Data":""},
        "letterKey_7": {"Data":""},
        "letterKey_8": {"Data":""},
        "letterKey_9": {"Data":""},
        "letterKey_10":{"Data": ""},
        "letterKey_11":{"Data": ""},
        "letterKey_12":{"Data": ""},
        "letterKey_13":{"Data": ""},
        "letterKey_14":{"Data": ""},
        "letterKey_15":{"Data": ""},
        "letterKey_16":{"Data": ""},
        "letterKey_17":{"Data": ""},
        "letterKey_18":{"Data": ""},
        "letterKey_19":{"Data": ""},
        "letterKey_20":{"Data": ""},
        "letterKey_21":{"Data": ""},
        "letterKey_22":{"Data": ""},
        "letterKey_23":{"Data": ""},
        "letterKey_24":{"Data": ""},
        "letterKey_25":{"Data": ""},
        "letterKey_26":{"Data": ""},
        "letterKey_27":{"Data": ""},
        "letterKey_28":{"Data": ""},
        "letterKey_29":{"Data": ""},
        "specialKey_0":{"Data": ""},
        "specialKey_1":{"Data": ""},
        "specialKey_2":{"Data": ""},
        "specialKey_3":{"Data": ""},
        "specialKey_4":{"Data": ""},
        "specialKey_5":{"Data": ""},
        "specialKey_6":{"Data": ""},
        "numberKey_1": {"Data":""},
        "numberKey_2": {"Data":""},
        "numberKey_3": {"Data":""},
        "numberKey_4": {"Data":""},
        "numberKey_5": {"Data":""},
        "numberKey_6": {"Data":""},
        "numberKey_7": {"Data":""},
        "numberKey_8": {"Data":""},
        "numberKey_9": {"Data":""},
        "numberKey_10":{"Data":""},
        "numberKey_11":{"Data":""},
        "numberKey_0": {"Data":""},
        "skbEnterBtn":{Data:"Enter"},
        "skbDeleteBtn":{Data:"Delete"},
        "skbRightBtn":{Data:"Right"},
        "skbLeftBtn":{Data:"Left"},
        "operateData": {
            "firstFocusId":["letterKey_0","numberKey_1"],
            "curLang": 'ENG',
            "curLangArray":["ENG", "GER","ITA","POR","SPA","FRA","NOR","SWE","DAN","FIN"],
            "skbData":{
                "ENG": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        [],
                        []
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".com"],
                    "specialKey": [
                        ["Caps", "ENG", "", "&!?", "", "@",  ""],
                        ["Caps", "ENG", "", "abc", "", "@",  ""],
                        ["Caps", "ENG", "", "&!?", "", "@",  ""],
                        ["Caps", "ENG", "", "ABC", "", "@",  ""],
                        ["Caps", "ENG", "", "&!?", "", "@",  ""],
                        ["Caps", "ENG", "", "&!?", "", "@",  ""],
                        ["Caps", "ENG", "", "&!?", "", "@",  ""],
                        ["Caps", "ENG", "", "&!?", "", "@",  ""]
                    ]
                },
                "GER": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "y", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Y", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["ä","ö","ü","ß"],
                        ["Ä","Ö","Ü",""]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".de"],
                    "specialKey": [
                        ["Feststell", "GER", "", "&!?", "äöü", "@",  ""],
                        ["Feststell", "GER", "", "abc", "äöü", "@",  ""],
                        ["Feststell", "GER", "", "&!?", "ÄÖÜ", "@",  ""],
                        ["Feststell", "GER", "", "ABC", "ÄÖÜ", "@",  ""],
                        ["Feststell", "GER", "", "&!?", "äöü", "@",  ""],
                        ["Feststell", "GER", "", "&!?", "abc", "@",  ""],
                        ["Feststell", "GER", "", "&!?", "ÄÖÜ", "@",  ""],
                        ["Feststell", "GER", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "ITA": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["à","è","ì","ò","ù","é"],
                        ["À","È","Ì","Ò","Ù","É"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".it"],
                    "specialKey": [
                        ["Bloc Maiusc", "ITA", "", "&!?", "àèì", "@",  ""],
                        ["Bloc Maiusc", "ITA", "", "abc", "àèì", "@",  ""],
                        ["Bloc Maiusc", "ITA", "", "&!?", "ÀÈÌ", "@",  ""],
                        ["Bloc Maiusc", "ITA", "", "ABC", "ÀÈÌ", "@",  ""],
                        ["Bloc Maiusc", "ITA", "", "&!?", "àèì", "@",  ""],
                        ["Bloc Maiusc", "ITA", "", "&!?", "abc", "@",  ""],
                        ["Bloc Maiusc", "ITA", "", "&!?", "ÀÈÌ", "@",  ""],
                        ["Bloc Maiusc", "ITA", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "POR": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["ç","á","â","ã","à","é","ê","í","ó","ô","õ","ú"],
                        ["Ç","Á","Â","Ã","À","É","Ê","Í","Ó","Ô","Õ","Ú"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".com"],
                    "specialKey": [
                        ["Maiú.", "POR", "", "&!?", "çáâ", "@",  ""],
                        ["Maiú.", "POR", "", "abc", "çáâ", "@",  ""],
                        ["Maiú.", "POR", "", "&!?", "ÇÁÂ", "@",  ""],
                        ["Maiú.", "POR", "", "ABC", "ÇÁÂ", "@",  ""],
                        ["Maiú.", "POR", "", "&!?", "çáâ", "@",  ""],
                        ["Maiú.", "POR", "", "&!?", "abc", "@",  ""],
                        ["Maiú.", "POR", "", "&!?", "ÇÁÂ", "@",  ""],
                        ["Maiú.", "POR", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "SPA": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["ç","ñ","á","é","í","ó","ú","ü"],
                        ["Ç","Ñ","Á","É","Í","Ó","Ú","Ü"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".es"],
                    "specialKey": [
                        ["Bloq May", "SPA", "", "&!?", "çñá", "@",  ""],
                        ["Bloq May", "SPA", "", "abc", "çñá", "@",  ""],
                        ["Bloq May", "SPA", "", "&!?", "ÇÑÁ", "@",  ""],
                        ["Bloq May", "SPA", "", "ABC", "ÇÑÁ", "@",  ""],
                        ["Bloq May", "SPA", "", "&!?", "çñá", "@",  ""],
                        ["Bloq May", "SPA", "", "&!?", "abc", "@",  ""],
                        ["Bloq May", "SPA", "", "&!?", "ÇÑÁ", "@",  ""],
                        ["Bloq May", "SPA", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "FRA": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["à","â","è","é","ê","î","ï","ô","ö","ù","û","ü","ç","œ","æ"],
                        ["Ç","Ñ","Á","É","Í","Ó","Ú","Ü","ö","ù","û","ü","ç","œ","æ"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".fr"],
                    "specialKey": [
                        ["Verr.maj", "FRA", "", "&!?", "àâè", "@",  ""],
                        ["Verr.maj", "FRA", "", "abc", "àâè", "@",  ""],
                        ["Verr.maj", "FRA", "", "&!?", "ÇÑÁ", "@",  ""],
                        ["Verr.maj", "FRA", "", "ABC", "ÇÑÁ", "@",  ""],
                        ["Verr.maj", "FRA", "", "&!?", "àâè", "@",  ""],
                        ["Verr.maj", "FRA", "", "&!?", "abc", "@",  ""],
                        ["Verr.maj", "FRA", "", "&!?", "ÇÑÁ", "@",  ""],
                        ["Verr.maj", "FRA", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "NOR": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["å","ä","ö"],
                        ["Å","Ä","Ö"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".com"],
                    "specialKey": [
                        ["Caps", "NOR", "", "&!?", "åäö", "@",  ""],
                        ["Caps", "NOR", "", "abc", "åäö", "@",  ""],
                        ["Caps", "NOR", "", "&!?", "ÅÄÖ", "@",  ""],
                        ["Caps", "NOR", "", "ABC", "ÅÄÖ", "@",  ""],
                        ["Caps", "NOR", "", "&!?", "åäö", "@",  ""],
                        ["Caps", "NOR", "", "&!?", "abc", "@",  ""],
                        ["Caps", "NOR", "", "&!?", "ÅÄÖ", "@",  ""],
                        ["Caps", "NOR", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "SWE": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["å","ä","ö"],
                        ["Å","Ä","Ö"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".com"],
                    "specialKey": [
                        ["Caps", "SWE", "", "&!?", "åäö", "@",  ""],
                        ["Caps", "SWE", "", "abc", "åäö", "@",  ""],
                        ["Caps", "SWE", "", "&!?", "ÅÄÖ", "@",  ""],
                        ["Caps", "SWE", "", "ABC", "ÅÄÖ", "@",  ""],
                        ["Caps", "SWE", "", "&!?", "åäö", "@",  ""],
                        ["Caps", "SWE", "", "&!?", "abc", "@",  ""],
                        ["Caps", "SWE", "", "&!?", "ÅÄÖ", "@",  ""],
                        ["Caps", "SWE", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "DAN": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["å","æ","ø"],
                        ["Å","Æ","Ø"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".com"],
                    "specialKey": [
                        ["Caps", "DAN", "", "&!?", "åæø", "@",  ""],
                        ["Caps", "DAN", "", "abc", "åæø", "@",  ""],
                        ["Caps", "DAN", "", "&!?", "ÅÆØ", "@",  ""],
                        ["Caps", "DAN", "", "ABC", "ÅÆØ", "@",  ""],
                        ["Caps", "DAN", "", "&!?", "åæø", "@",  ""],
                        ["Caps", "DAN", "", "&!?", "abc", "@",  ""],
                        ["Caps", "DAN", "", "&!?", "ÅÆØ", "@",  ""],
                        ["Caps", "DAN", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "FIN": {
                    "letterKey": [
                        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g",
                            "h", "j", "k", "l", "/", "z", "x", "c", "v", "b", "n", "m", "-",".", ""],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G",
                            "H", "J", "K", "L", "/", "Z", "X", "C", "V", "B", "N", "M", "-", ".",""],
                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["å","ä","ö"],
                        ["Å","Ä","Ö"]
                    ],
                    "numberKey": [ "0","1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".com"],
                    "specialKey": [
                        ["Caps", "FIN", "", "&!?", "åäö", "@",  ""],
                        ["Caps", "FIN", "", "abc", "åäö", "@",  ""],
                        ["Caps", "FIN", "", "&!?", "ÅÄÖ", "@",  ""],
                        ["Caps", "FIN", "", "ABC", "ÅÄÖ", "@",  ""],
                        ["Caps", "FIN", "", "&!?", "åäö", "@",  ""],
                        ["Caps", "FIN", "", "&!?", "abc", "@",  ""],
                        ["Caps", "FIN", "", "&!?", "ÅÄÖ", "@",  ""],
                        ["Caps", "FIN", "", "&!?", "ABC", "@",  ""]
                    ]
                },
                "RUS": {
                    "letterKey": [
                        ["и", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "ф", "ы", "в", "а", "п",
                            "р", "о", "л", "д", "/", "я", "ч", "с", "м", "и", "т", "ь", "-",".", ""],
                        ["И", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Ф", "Ы", "В", "А", "П",
                            "Р", "О", "Л", "Д", "/", "Я", "Ч", "С", "М", "И", "Т", "ь", "-", ".",""],

                        ["#","*","%","~","(",")","\\","!",";",":","^","[","]","{","}","<",">","$",
                            "€","¥","£","&","'","\"","+","=","_","?",",",""],
                        ["х","ъ","ё","ж","э","ю","й"],
                        ["Х","ъ","Ё","Ж","Э","Ю","Й"]
                    ],
                    "numberKey": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "www.", ".com"],
                    "specialKey":[
                        ["Caps", "RUS", "", "&!?", "хъё", "@", ""],
                        ["Caps", "RUS", "", "абв", "хъё", "@", ""],
                        ["Caps", "RUS", "", "&!?", "ХъЁ", "@", ""],
                        ["Caps", "RUS", "", "АБВ", "ХъЁ", "@", ""],
                        ["Caps", "RUS", "", "&!?", "хъё", "@", ""],
                        ["Caps", "RUS", "", "&!?", "абв", "@", ""],
                        ["Caps", "RUS", "", "&!?", "ХъЁ", "@", ""],
                        ["Caps", "RUS", "", "&!?", "АБВ", "@", ""]
                    ]
                }
            }
        },
        "langData": {
            "Enter":["Enter","Eingabe","Inoltra","Introduzir","Acceda","Entrer","Gå inn","Ange","Indtast","Syötä","确认"],
            "Right":["Right","Rechtserklärung","Destra","Direita","Derecha","Droite","Høyre","Höger","Højre","Oikea","向右"],
            "Left":["Left","Links","Sinistra","Esquerda","Izquierda ","Gauche","Venstre","Vänster","Venstre","Vasen","向左"],
            "Delete":["Delete","Löschen","Elimina","Eliminar","eliminar","Supprimer","Slett","Ta bort","Slet","Poista","删除"]
        },
        rewrite: skbPageDataRewrite
    };

    return skbPageData;
}





/**************************以下是软键盘语言画面***********************************************/



function getSKBLanPageData(page)
{
    page.CaE = [
        {
            "id": "SKBHeadLabel",
            "CaEType": "span",
            "classes": {"normal": "SKBHeadLabel"}
        },
        {
            "id":"skbLanListUl",
            "CaEType": "Ul",
//                    "firstFocusId":0,
            "classes": {"normal": "skbLanListLiNormal","focus":"skbLanListLiFocus","dataSelected":"skbLanListLiDataSelected"},
            "oriCaE":[
                {
                    "id": "skbLanListItemSwitchDiv",
                    "CaEType": "img",
                    "classes": {"normal": "skbLanListItemSwitchDivImg","focus":"skbLanListItemSwitchDivImg"}
//                    "imageList":{
//                        openImg:"img/skbLan-checked.png",
//                        closeImg:"img/skbLan-unchecked.png"
//                    }
                },
                {
                    "id": "skbLanListItemName",
                    "CaEType": "span",
                    "classes": {"normal": "skbLanListItemNameNormal","focus":"skbLanListItemNameFocus"}
                }
            ],
            "UlConfig":{
                SelectedIndex:0,
                DataSelectedIndex:0,
                PageSize:5,
                UlDataItem:["skbLanListItemSwitchDiv","skbLanListItemName"]
            },
            "handler":{
                "aftEnterHandler":"skbChangeLan",
                "aftDownHandler":"skbLanListUlScrollBarHandler",
                "aftUpHandler":"skbLanListUlScrollBarHandler"
            }
        }
    ];

    var SKBLanPageData ={
        "SKBHeadLabel":{
            Data:"Language"
        },
        "skbLanListUl":{
            Data: [
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "ENG"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "GER"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "ITA"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "POR"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "SPA"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "FRA"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "NOR"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "SWE"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "DAN"
                    }
                },
                {
                    "skbLanListItemSwitchDiv": {
                        Data: "img/unselectedBall.png"
                    },
                    "skbLanListItemName": {
                        Data: "FIN"
                    }
                }
            ],
            SelectedIndex:0,
            DataSelectedIndex:0,
            PageSize:5
        },
        "operateData": {
            "curLangArray":["ENG", "GER","ITA","POR","SPA","FRA","NOR","SWE","DAN","FIN"]
        },
        "langData": {
            "Language":["Language","语言"]
        },
        rewrite: SKBLanReWrite
        };

    var opeData =  SKBLanPageData.operateData;
    var curLanIndex = $.inArray(hiWebOsFrame.getCurrentLanguage().toUpperCase(),opeData.curLangArray)<0 ? 0:
        $.inArray(hiWebOsFrame.getCurrentLanguage().toUpperCase(),opeData.curLangArray);
    curLanIndex = !!localStorage.curLang ? $.inArray(localStorage.curLang,opeData.curLangArray) : curLanIndex;
    SKBLanPageData.skbLanListUl.SelectedIndex = curLanIndex;
    SKBLanPageData.skbLanListUl.DataSelectedIndex = curLanIndex;
    return SKBLanPageData;
}

function skbChangeLan(opeData,data)
{
    data.SelectedIndex = this.SelectedIndex;
    data.DataSelectedIndex = this.DataSelectedIndex;
    this.page.rewriteDataOnly();
    hiWebOsFrame.softKeyBoardLanguage.close();

    var opeData = this.page.origin.operateData ;
    opeData.lang = data.SelectedIndex < opeData.curLangArray.length ? opeData.curLangArray[data.SelectedIndex] :"ENG";
    localStorage.curLang = opeData.lang;

    {
        var skbOpeData = this.page.origin.operateData;
        skbOpeData.speLetter = (!!skbOpeData.isCaps ? skbOpeData.isCaps : 0) +3;
        skbOpeData.curLetterIndex = skbOpeData.isCaps;
        skbOpeData.curSpecialIndex = (!!skbOpeData.isCaps ? skbOpeData.isCaps : 0)*2 + 4;
    }

//    opeData.curLetterIndex = !!opeData.isCaps ? opeData.isCaps :0;
    this.page.origin.rewriteDataOnly();
    var curCom =this.page.origin.currentSelectedTree.length> 0? this.page.origin.currentSelectedTree[this.page.origin.currentSelectedTree.length-1].id:'';
    this.page.origin.hiFocus(curCom);
    initInputFocus('skbInput');
}

function openSKBLanListPage(opeData,data)
{
    var _this = this;
//    var SKBLanPageData=getSKBLanPageData();
//    var curLanIndex = $.inArray(hiWebOsFrame.getCurrentLanguage(),opeData.curLangArray)<0 ? 0:$.inArray(hiWebOsFrame.getCurrentLanguage(),opeData.curLangArray);
//    curLanIndex = !!localStorage.curLang ? $.inArray(localStorage.curLang,opeData.curLangArray) : curLanIndex;
//    SKBLanPageData.skbLanListUl.SelectedIndex = curLanIndex;
//    SKBLanPageData.skbLanListUl.DataSelectedIndex = curLanIndex;
//    scrollBarScroll(SKBLanPageData.skbLanListUl,curLanIndex);

    hiWebOsFrame.createPage( 'softKeyBoardLanguage',null,_this.page,null,function(a){
        hiWebOsFrame.softKeyBoardLanguage =a;
        scrollBarScroll(a.data.skbLanListUl,a.data.skbLanListUl.SelectedIndex);
        a.hiFocus();
    });


}
function scrollBarScroll(ulData,SelectedIndex)
{
    if(ulData.Data.length > ulData.PageSize)
    {
        var height = 95*5/ulData.Data.length,
            top = SelectedIndex*height;
        $('#skbLanScrollBar').css('height',height).css('top',top);
    }
    else
    {
        $('#skbLanScrollBar').css('height',0);
    }
}
function skbLanListUlScrollBarHandler(opeData,data)
{
    scrollBarScroll(data,this.SelectedIndex);
}
function SKBLanReWrite(data)
{
    $.each(data['skbLanListUl'].Data,function(index,item){
        item.skbLanListItemSwitchDiv.Data = "img/unselectedBall.png";
    });

    var selectedIndex = data['skbLanListUl'].SelectedIndex;
    selectedIndex = (data['skbLanListUl'].SelectedIndex>=data.skbLanListUl.Data.length || data['skbLanListUl'].SelectedIndex <0)?0:selectedIndex;
    data['skbLanListUl'].Data[selectedIndex].skbLanListItemSwitchDiv.Data= "img/selectedBall.png";
//    data['skbLanListUl'].Data[data['skbLanListUl'].SelectedIndex].skbLanListItemSwitchDiv.Data= true;
}

function exitSKBLan(){
    try
    {
        debugPrint('exitSKBLan');
        hiWebOsFrame.softKeyBoardLanguage.close();
        hiWebOsFrame.softKeyBoardLanguage.origin.hiFocus();
    }
    catch(ex){

    }

}