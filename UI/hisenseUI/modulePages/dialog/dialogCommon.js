/**
 * Created by BOB on 14-9-15.
 */
function getDialogCommonData(opts) {
    opts.CaE = [
        {
            id: 'dialog_cp_title',
            CaEType: 'span'
        },

        {
            id: 'dialog_cp_content',
            CaEType: 'span',
            enableHtml: true
        },

        {
            id: 'dialog_cpb_ok',
            CaEType: 'span',
            nav: {
                rightTo: 'dialog_cpb_cancel'
            },
            handler: {
                aftEscHandler: dlgCommon.escPressed,
                aftEnterHandler: dlgCommon.okPressed
            }
        },

        {
            id: 'dialog_cpb_cancel',
            CaEType: 'span',
            nav: {
                leftTo: 'dialog_cpb_ok'
            },
            handler: {
                aftEscHandler: dlgCommon.escPressed,
                aftEnterHandler: dlgCommon.cancelPressed
            }
        }
    ];

    return dlgCommon.pageData;
}

var dialogCommon = function() {

    var self = this;
    self.id = 'dialog_common';
    var oprtData = {
    };

    self.pageData = {
        dialog_cp_title: {Data: ''},
        dialog_cp_content: {Data: ''},
        dialog_cpb_ok: {Data: ''},
        dialog_cpb_cancel: {Data: ''},
        langData:{//omg 2015-12-09
            "Delete":[],
            "Cancel":[]
        },
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprtData;


    function rewritePageData(pageData) {

        pageData.dialog_cp_title.Data = oprtData.title;
        pageData.dialog_cp_content.Data = (oprtData.content);
        pageData.dialog_cpb_ok.Data = oprtData.btnok;
        pageData.dialog_cpb_cancel.Data = oprtData.btncancel;
    }

    self.cancelPressed = function() {

        hiWebOsFrame[self.id].close();
        if(!oprtData.cancelPressed) {
            //hiWebOsFrame[self.id].close();
            hiWebOsFrame[self.id].origin.hiFocus();
            return;
        }

        if(typeof oprtData.cancelPressed == 'string') {
            eval(oprtData.cancelPressed + '.call(this)');
        }
        else if(typeof oprtData.cancelPressed == 'function') {
            oprtData.cancelPressed.call(this);
        }

//        hiWebOsFrame[self.id].oriPage.hiFocus();
    }

    self.okPressed = function() {
        hiWebOsFrame[self.id].close();
        if(!oprtData.okPressed) {

            //hiWebOsFrame[self.id].close();
            hiWebOsFrame[self.id].origin.hiFocus();
            return;
        }
        if(typeof oprtData.okPressed == 'string') {
            eval(oprtData.okPressed + '.call(this)');
        }
        else if(typeof oprtData.okPressed == 'function') {
            oprtData.okPressed.call(this);
        }

//        hiWebOsFrame[self.id].oriPage.hiFocus();
    }

    self.escPressed = function(){

        if(!oprtData.escPressed) {
            self.cancelPressed();
            return;
        }
        hiWebOsFrame[self.id].close();

        if(typeof oprtData.escPressed == 'string') {
            eval(oprtData.escPressed + '.call(this)');
        }
        else if(typeof oprtData.escPressed == 'function') {
            oprtData.escPressed.call(this);
        }

    }

    function setDialogData(opts) {
        oprtData.title = opts.titleName;
        oprtData.content = opts.contentName;
        oprtData.btnok = opts.okName;
        oprtData.btncancel = opts.cancelName;

        oprtData.okPressed = opts.okCommand;
        oprtData.cancelPressed = opts.cancelCommand;
        if(!!opts.escCommand && typeof opts.escCommand == 'function'){
            oprtData.escPressed = opts.escCommand;
        }
        else{
            oprtData.escPressed = null;
        }
    }
    function content_Translate(msg)//omg 2015-12-09
    {
        var cnt_msg=null;
        cnt_msg=getCurrentContentLanguage(msg);
        return cnt_msg;
    }

    function setDialogStyle(opts) {

        $("#dialog_cp_content").text(content_Translate(oprtData.content));//omg 2015-12-09

        if(!!opts.pageClass){
            $('#dialog_common').attr('class', opts.pageClass);
            $('#dialog_common_panel').attr('class', opts.panelClass);
            $('#dialog_cp_btns').attr('class', opts.btnClass);
        }
        else{
            $('#dialog_common').attr('class', "dialog_default_page");
            $('#dialog_common_panel').attr('class', "dialog_default_panel");
            $('#dialog_cp_btns').attr('class', "dialog_default_btns");
        }

    }



    self.onFocus = function() {

    }
    self.onBlur = function() {

    }
    self.onOpen = function() {

        try {
            var opts = hiWebOsFrame[self.id].origin.operateData.dialogOptions;

            setDialogData(opts);
            hiWebOsFrame[self.id].rewriteDataOnly();
            hiWebOsFrame[self.id].hiFocus("dialog_cpb_cancel");
            setDialogStyle(opts);
            DBG_INFO("z-index: " + hiWebOsFrame[self.id].priority);
        }
        catch (ex){
            DBG_ERROR(ex.message);
        }

    }

}

var dlgCommon = new dialogCommon();
