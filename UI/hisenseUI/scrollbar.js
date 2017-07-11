/**
 * Created by BOB on 14-3-3.
 */

function Scrollbar(options, contentId) {

    var self = this;

    var props = {
        scrMode: options.scrollMode || "active", //active; passive
        sldMode: options.sliderMode || "step", //ratio; step
        flpMode: options.flipMode || "edge", //edge; page
        scrAxis: options.scrollAxis || "vertical", //horizontal; vertical
        aniMode: options.animationMode, //ease-in-out; linear
        ph: options.placeholder || false,
        ctnrHeight: options.height > 90 ? options.height : 90,
        ctnrWidth: options.width > 90 ? options.width : 90,
        hideHeight: options.hideHeight?options.hideHeight:0,
        scrLength: 0,
        sldLength: 0,
        overLength: 0,
        sldStep: options.step,
        thmSize: 0,
        sldRatio: 0.1,
        btn: false,
        wdth: 10,
        class: options.class || 'scrollbar_class_demo',
        onlySlider: !!options.onlySlider || false,
        totalCount: options.totalCount,
        pageCount: options.pageCount
    }
    var cttOffset = {};
    var cttKey = "";
    /*var scrollPropType = {
     "horizontal": "Width",
     "vertical": "Height"
     };
     */


    self.createScrollbar = function() {

        if(!checkIsEnable(contentId)) {
            return;
        }

        var panelId = contentId + "scrollbar";
        var contentNode = $('#' + contentId);

        if(props.btn) {
//            props.wdth = props.thmSize;
        }
        else {
//            props.thmSize = 0;
//            props.wdth = 10;
        }

        initProperties(contentId, props.scrAxis);

        $("[name=scrollbarDemo]")
            .eq(0).clone(true).appendTo(contentNode.parent())
            .attr("id", panelId).attr("name", panelId);

        $('#' + contentId).remove();

        contentNode.appendTo($("#" + panelId + " [name=contentPanel]"));

        reLocate(contentNode, $("#" + panelId));

        $("#" + panelId).attr('class', props.class).css("display", "block");


        props.wdth = parseFloat($("#" + panelId + ' [name=sliderPanel]')
            .eq(0).css('width').replace('px', ''));


        //添加鼠标事件
        if(props.scrMode == "active") {
            addEventHandler($("#" + panelId)[0], "mousewheel", BindAsEventListener(self, MouseWheel));
            addEventHandler($("#" + panelId + " [name=sliderPanel]")[0], "mousedown", BindAsEventListener(self, Start));
        }
        return initControlPanel(panelId);

    };

    self.refreshScrollbar = function() {
        var panelNode = $("#" + contentId + "scrollbar");
        if(panelNode.length == 0 && !checkIsEnable(contentId)) {
            return;
        }

        $("#" + contentId).eq(0).clone(true).appendTo(panelNode.parent());

        var loc = getLocation(panelNode);

        panelNode.remove();
        $("#" + contentId).css("margin", loc.margin);
        $("#" + contentId).css("padding", loc.padding);

        return self.createScrollbar();
    }
    self.getProperties = function(p) {
        if(!!p) {
            return props[p];
        }
        else {
            return props;
        }
    };

    self.setProperties = function(k, v) {
        if(!!k && !!v && (k in props)) {
            props[k] = v;
        }
        else if(!!k && Object.prototype.toString.call(k).indexOf("Object") > -1) {
            $.each(Object.keys(props), function(a, b) {
                props[b] = !!k[b] ? k[b] : props[b];
            });
        }
    };

    self.afterKeyDownHandler = function() {

        var attr = props.scrAxis == "vertical" ? "top" : "left";

        if(props.flpMode == "page") {
            props.sldMode = "step";
            props.sldStep = props["ctnr" + getContentKey(props.scrAxis, false)];
        }
        doScroll('keyDown', attr);

    };

    self.afterKeyUpHandler = function() {
        var attr = props.scrAxis == "vertical" ? "top" : "left";

        if(props.flpMode == "page") {
            props.sldMode = "step";
            props.sldStep = props["ctnr" + getContentKey(props.scrAxis, false)];
        }
        doScroll('keyUp', attr);
    }


    function getLocation(cttNode) {
        var loc = {};
        loc.margin = cttNode.css("margin");
        loc.padding = cttNode.css("padding");
        return loc;
    }

    function reLocate(cttNode, pnlNode) {

        var loc = getLocation(cttNode);

        cttNode.css("margin", "0px");
        cttNode.css("padding", "0px");

        if(props.scrAxis == "vertical") {
            cttNode.css("padding-right", "5px");
        }
        else {
            cttNode.css("padding-bottom", "5px");
        }
        pnlNode.css("margin", loc.margin);
        pnlNode.css("padding", loc.padding);

    }

    function checkIsEnable(cttId) {
        var enabled = true;
        if(props.onlySlider){
            enabled = props.totalCount > props.pageCount;
        }
        else{
            if(!cttId || (props.scrAxis == "vertical" && $('#' + contentId).offset().height <= props.ctnrHeight)
                || (props.scrAxis == "horizontal" && $('#' + contentId).offset().width <= props.ctnrWidth)) {
                enabled = false;
            }
        }
        return enabled;
    }

    function setThumbnail(panelId) {
        if(!props.btn) {
            $.each($("#" + panelId + " [name=controlPanel] div"), function(idx, item) {
                $(item).css("height", props.wdth + "px");
                $(item).css("width", props.wdth + "px");
                $(item).css("float", "left");
            });

            $.each($("#" + panelId + " [name=controlPanel] img"), function(idx, item) {
                $(item).parent().css("height", props.thmSize + "px");
                $(item).parent().css("width", props.thmSize + "px");
                $(item).parent().css("float", "left");
            });
        }
        else {
            $.each($("#" + panelId + " [name=controlPanel] div"), function(idx, item) {
                $(item).css("height", props.thmSize + "px");
                $(item).css("width", props.thmSize + "px");
                $(item).css("float", "left");
            });
        }
    }

    function initProperties(cttId, axis) {
        cttKey = getContentKey(axis, true);
        cttOffset = $("#" + cttId).offset();

        if(props.scrMode == "active" && (!$('#' + cttId).css("position")
            || $('#' + cttId).css("position") == "static")) {
            $('#' + cttId).css("position", "relative");
        }

        if(!!props.aniMode) {
            $('#' + cttId).css("transition", "all 0.5s");
        }

        if(!!props.onlySlider) {//vertical
            props.scrLength = props.ctnrHeight - props.thmSize * 2;
            props.sldLength = props.pageCount * props.scrLength / props.totalCount;
            props.overLength = cttOffset[cttKey] - props.ctnrHeight;
        }
        else {
            if(axis == "horizontal") {
                props.scrLength = props.ctnrWidth - props.thmSize * 2;
                props.sldLength = props.ctnrWidth * props.scrLength / cttOffset[cttKey];
                props.overLength = cttOffset[cttKey] - props.ctnrWidth;
            }
            else {
                props.scrLength = props.ctnrHeight - props.thmSize * 2;
                props.sldLength = props.ctnrHeight * props.scrLength / cttOffset[cttKey];
                props.overLength = cttOffset[cttKey] - props.ctnrHeight;
            }
        }
    }

    function getContentKey(axis, lowcase) {
        var cttKey = "";
        if(axis == "horizontal") {
            cttKey = lowcase ? "width" : "Width";
        }
        else {
            cttKey = lowcase ? "height" : "Height";
        }
        return cttKey;
    }

    function initControlPanel(panelId) {

        var pContainer = $("#" + panelId),
            pContent = $("#" + panelId + " [name=contentPanel]"),
            pSlider = $("#" + panelId + " [name=sliderPanel]"),
            pScroll = $("#" + panelId + " [name=scrollPanel]");

        switch(props.scrAxis) {
            case "horizontal":
                pContainer.css("height", props.ph ?
                    (props.ctnrHeight + props.wdth) + "px" :
                    props.ctnrHeight + "px");
                pContainer.css("width", props.ctnrWidth + "px");

                pContent.css("height", props.ph ?
                    props.ctnrHeight + "px" :
                    (props.ctnrHeight - props.wdth) + "px");
                pContent.css("width", props.ctnrWidth + "px");

                pSlider.css("left", "0px");
                $("#" + contentId).css("left", "0px");
                pSlider.css("width", props.sldLength + "px");
                pScroll.css("width", props.scrLength + "px");

                break;
            case "vertical":
                pContainer.css("width", props.ph ?
                    (props.ctnrWidth + props.wdth) + "px" :
                    props.ctnrWidth + "px");
                pContainer.css("height", (props.ctnrHeight+props.hideHeight) + "px");

                pContent.css("width", props.ph ?
                    props.ctnrWidth + "px" :
                    (props.ctnrWidth - props.wdth) + "px");


                pContent.css("height", (props.ctnrHeight+props.hideHeight) + "px");


                pSlider.css("top", "0px");
                $("#" + contentId).css("top", "0px");
                pSlider.css("height", (props.sldLength) + "px");
                pScroll.css("height", (props.scrLength) + "px");
                break;
            default :
                return false;
        }
        pContainer.css("display", "block");

        return true;
    }

    function doScroll(keyvalue, attr) {
        var panelId = contentId + "scrollbar";
        var pContent = $("#" + contentId);
        var pSlider = $("#" + panelId + " [name=sliderPanel]");
        var vContent = !props.onlySlider ? -getElementSize(pContent, attr) : 0;
        var vSlider = getElementSize(pSlider, attr);

        var parms = {
            slider: { vNew: 0, vOld: vSlider},
            content: { vNew: 0, vOld: -vContent}
        }

        var isPosDirt = (keyvalue == "keyDown" || keyvalue == "keyRight");
        if(props.sldMode == "ratio") {
            parms.slider.vNew = isPosDirt ? vSlider + props.sldRatio * props.scrLength :
            vSlider - props.sldRatio * props.scrLength;
            if(!props.onlySlider) {
                parms.content.vNew = isPosDirt ? -(vContent + props.sldRatio * cttOffset[cttKey]) :
                    -(vContent - props.sldRatio * cttOffset[cttKey]);
            }
        }
        else if(props.sldMode == "step") {
            if(!props.onlySlider) {
                var s = props.sldStep * props.scrLength / cttOffset[cttKey];
                parms.slider.vNew = isPosDirt ? vSlider + s : vSlider - s;
                parms.content.vNew = isPosDirt ? -(vContent + props.sldStep) :
                    -(vContent - props.sldStep);
            }
            else{
                var s = props.sldStep * props.pageCount / props.totalCount;
                parms.slider.vNew = isPosDirt ? vSlider + s : vSlider - s;
            }
        }

        if(isPosDirt) {
            if(parms.slider.vNew >= props.scrLength - props.sldLength) {

                parms.slider.vNew = props.scrLength - props.sldLength;
                if(!props.onlySlider) {
                    parms.content.vNew = -props.overLength;
                }
            }
        }
        else {
            if(parms.slider.vNew <= 0) {
                parms.slider.vNew = 0;
                if(!props.onlySlider) {
                    parms.content.vNew = 0;
                }
            }
        }
        moveSldCtt(pSlider, parms.slider, pContent, parms.content);
    }

    function getElementSize(s, p) {

        var size = {
            "height": 0,
            "width": 0,
            "top": 0,
            "left": 0
        };
        if(!!p) {
            size[p] = parseFloat(s.css(p).replace("px", ""), 10);
            if(isNaN(size[p])) {
                size[p] = 0;
            }
            return size[p];
        }
        $.each(Object.keys[size], function(inx, key) {
            size[key] = parseFloat(s.css(key).replace("px", ""), 10);
            if(isNaN(size[key])) {
                size[key] = 0;
            }
        });
        return size;
    }

    function moveSldCtt(sld, vSld, ctt, vCtt) {
        if(vSld.vNew == vSld.vOld) {
            return;
        }

        var parms = [
            {
                selector: sld,
                attr: props.scrAxis == "vertical" ? "top" : "left",
                vNew: vSld.vNew,
                vOld: vSld.vOld
            }
        ];

        if(props.scrMode == "active" && !props.onlySlider) {
            parms.push({
                selector: ctt,
                attr: props.scrAxis == "vertical" ? "top" : "left",
                vNew: vCtt.vNew,
                vOld: vCtt.vOld
            });
        }
//        scrollAnimation(parms);
        for(x in parms) {
            setAttribute(parms[x].selector, parms[x].attr, parms[x].vNew);
        }
    }

    function setAttribute(selector, attr, value) {

        selector.css(attr, value);
    }

    var scrolling = false;
    var delay = 0;

    function scrollAnimation(parms) {

        var t = [0, 0], t0 = 0.5;
        if(!scrolling) {
            scrolling = true;
//            clearInterval(delay);
            delay = setInterval(_moveSlider, 10);
        }
        function _moveSlider() {
            if(t[0] >= t0) {
                clearInterval(delay);
                scrolling = false;
                return;
            }
//            console.log(delay);
            for(x in parms) {
//                console.log(t[x]);
                var s = Math.abs(parms[x].vOld - parms[x].vNew);
                var v0 = s / t0;
                var st;
                switch(props.aniMode) {
                    case "linear":
                        st = v0 * t[x];
                        break;
                    case "ease-in-out":
                        st = -2 * v0 * Math.pow(t[x], 3) / Math.pow(t0, 2) + 3 * v0 * Math.pow(t[x], 2) / t0;
                        break;
                    default:
                        clearInterval(delay);
                        scrolling = false;
                        setAttribute(parms[x].selector, parms[x].attr, parms[x].vNew);
                        return;
                }
                t[x] += 0.01;
                ov = parms[x].vNew >= parms[x].vOld ? parms[x].vOld + st : parms[x].vOld - st;
                setAttribute(parms[x].selector, parms[x].attr, ov);
            }
        }
    }

    var MouseWheel = function(oEvent) {
        if(!!oEvent && Object.prototype.toLocaleString.call(oEvent).indexOf("WheelEvent") > 0) {
            if(oEvent.deltaY > 0) {
                self.afterKeyDownHandler();
            }
            else {
                self.afterKeyUpHandler();
            }
        }
    };

    var _startPositon = {};
    var Start = function(oEvent) {
        var panelId = contentId + "scrollbar";
        var pContent = $("#" + contentId);
        var pSlider = $("#" + panelId + " [name=sliderPanel]");

        var attr = props.scrAxis == "vertical" ? "top" : "left";

        _startPositon.vContent = getElementSize(pContent, attr);
        _startPositon.vSlider = getElementSize(pSlider, attr);

        _startPositon._x = oEvent.clientX;
        _startPositon._y = oEvent.clientY;

        addEventHandler($("#" + panelId)[0], "mousemove", Move);
        addEventHandler(document, "mouseup", Stop);
        addEventHandler(window, "blur", Stop);
        //阻止默认动作
        oEvent.preventDefault();
    };

    var Move = function(oEvent) {

        var panelId = contentId + "scrollbar";
        var pContent = $("#" + contentId);
        var pSlider = $("#" + panelId + " [name=sliderPanel]");

        //清除选择
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //设置移动参数
        var iMove;

        var attr = props.scrAxis == "vertical" ? "top" : "left";

        iMove = props.scrAxis == "vertical" ? oEvent.clientY - _startPositon._y
            : oEvent.clientX - _startPositon._x;

        if(_startPositon.vSlider + iMove <= props.scrLength - props.sldLength
            && _startPositon.vSlider + iMove >= 0) {
            setAttribute(pSlider, attr, _startPositon.vSlider + iMove);

            iMove = iMove * cttOffset[cttKey] / props.scrLength;
            setAttribute(pContent, attr, _startPositon.vContent - iMove);
            //console.log(_startPositon.sliderTop + iTop);
        }
        else {
            //console.log("false");
        }
    };

    var Stop = function(oEvent) {
        removeEventHandler($("#" + contentId + "scrollbar")[0], "mousemove", Move);
        removeEventHandler(document, "mouseup", Stop);
        removeEventHandler(window, "blur", Stop);
    };

    var BindAsEventListener = function(object, fun) {
        return function(event) {
            return fun.call(object, (event || window.event));
        }
    }

    function addEventHandler(oTarget, sEventType, fnHandler) {

        if(oTarget.addEventListener) {
            oTarget.addEventListener(sEventType, fnHandler, false);
        }
        else if(oTarget.attachEvent) {
            oTarget.attachEvent("on" + sEventType, fnHandler);
        }
        else {
            oTarget["on" + sEventType] = fnHandler;
        }
    }

    function removeEventHandler(oTarget, sEventType, fnHandler) {
        if(oTarget.removeEventListener) {
            oTarget.removeEventListener(sEventType, fnHandler, false);
        }
        else if(oTarget.detachEvent) {
            oTarget.detachEvent("on" + sEventType, fnHandler);
        }
        else {
            oTarget["on" + sEventType] = null;
        }
    }

}
