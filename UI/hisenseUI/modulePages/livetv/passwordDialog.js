/**
 * Created by jiangbo1 on 2015/3/14.
 */

function getPasswordDialogPageData(opts) {

    var caeData = {
        span: ["pswd_dialog_tip", "pswd_dialog_invalid"],
        NavigationBar: [{
            id: "pswd_dialog_inputs",
            ori: {
                input: ["pswd_input"]
            }
        }]
    };
    opts.CaE = generateCaE(caeData);

    var ulIdx = 2;
    opts.CaE[ulIdx].firstFocusId = "pswd_input";
    opts.CaE[ulIdx].oriCaE[0].inputAttr = "numberpassword";
    opts.CaE[ulIdx].oriCaE[0].maxlength = 1;
    opts.CaE[ulIdx].oriCaE[0].onChange = pswdDialog.jumpToNext;
    opts.CaE[ulIdx].oriCaE[0].onFocusFun = pswdDialog.onFocusCurrent
    opts.CaE[ulIdx].oriCaE[0].handler = {
        keyChannelUpHandler: "pswdDialog.channelUpPressed",
        keyChannelDownHandler: "pswdDialog.channelDownPressed",
        keyChListHandler: "pswdDialog.channelListPressed"
    }
    return pswdDialog.pageData;
}

function PasswordDialog() {
    var self = this;
    self.id = LiveTVModule.PASSWORD_DIALOG;

    self.pageData = {
        pswd_dialog_tip: {Data: ""},
        pswd_dialog_inputs: {
            Data: []
        },
        pswd_dialog_invalid: {Data: "Invalid password. Please re-enter"},
        langData: {
            "Please enter the password": [],
            "Invalid password. Please re-enter": []
        },
        rewrite: rewritePageData
    }
    var oprtData = {}, pinCode = "", userCode = [], invalid = false;

    self.pageData.operateData = oprtData;

    self.onOpenPasswordDialog = function() {
        userCode = [];
        hiWebOsFrame[self.id].rewriteDataOnly();
        hiWebOsFrame[self.id].getCaE("pswd_dialog_inputs").setSelectedIndex(0);
        hiWebOsFrame[self.id].hiFocus("pswd_dialog_inputs_pswd_input_sys0");
        invalid = false;
    }
    self.onDestroyPasswordDialog = function() {
        hiWebOsFrame[self.id] = null;
        DBG_ALWAYS("onDestroyPasswordDialog!!!!!");
        setTimeout(clearTshiftFromInputPwdStatus,500);
    }

    function rewritePageData(pageData) {
        pageData.pswd_dialog_tip.Data = "Please enter the password";
        pageData.pswd_dialog_inputs.Data = [];
        for(var i = 0; i < 4; i++) {
            pageData.pswd_dialog_inputs.Data.push({
                pswd_input: {Data: ""}
            });
        }
        pageData.pswd_dialog_inputs.SelectedIndex = 0;
        pageData.pswd_dialog_invalid.disable = !invalid;
    }

    self.jumpToNext = function() {
        userCode[this.pIndex] = $("#" + this.id).val();
        var comp = hiWebOsFrame[self.id].getCaE("pswd_dialog_inputs");
        if(this.pIndex < 3) {
            comp.setSelectedIndex(this.pIndex + 1);
            hiWebOsFrame[self.id].hiFocus("pswd_dialog_inputs_pswd_input_sys" + (this.pIndex + 1));
        }
        else {
            DBG_ALWAYS("userCode[" + userCode + "], pinCode[" + pinCode + "]");
            if(userCode.join("") == pinCode || userCode.join("") == g_SystemFallbackPwd) {
                invalid = false;
                hiWebOsFrame[self.id].destroy();
                setTimeout(function(){
                    var crntSource = livetvmain.getCurrentSource();
                    if(1 == model.source.getInputCurrentInLock()) {
                        model.source.unlockInput(crntSource.uid);
                    }
                    var crntChannel = livetvmain.getCurrentChannelInfo();
                    if(SourceList.TV == crntSource.innerId) {
                        if(crntChannel.isLock || crntChannel.eCode == ECode.LOCK) {
                            model.tvservice.unLockPlayChannel(crntChannel.uid);
                        }
                        else {
                            DBG_INFO("current channel[" + objToString(crntChannel) + "] do not need unlock.");
                        }
                    }
                    else {
                        //model.parentlock.InputBlock(crntSource.uid, 0, 1);
                        //model.tvservice.unLockPlayChannel(0);
                    }
                    livetvmain.setUnlockFlag(true);
                    try
                    {
                        debugPrint("schedule record no need input password!");
                        openLiveTVModule();
                        startTshiftFromInputPwd();
                    }
                    catch (ex)
                    {
                        debugPrint("error=" + ex.message);
                    }
                }, 10);
            }
            else {
                invalid = true;
                hiWebOsFrame[self.id].open();
            }
        }

    }
    self.onFocusCurrent = function() {
        $("#" + this.id).val("");
        userCode[this.pIndex] = "";
    }

    self.backToLiveTV = function() {
        hiWebOsFrame[self.id].destroy();
        openLiveTVModule([Msg.PASSWORD, 0]);
    };
    self.channelUpPressed = function() {
        if(livetvmain.getCurrentSourceInnerId() != SourceList.TV) return;
        hiWebOsFrame[LiveTVModule.PASSWORD_DIALOG].destroy();
        openLiveTVModule([Msg.PASSWORD, 0, Msg.INFO, 0, Msg.SIGNAL, 0]);
        liveTVHandlerProcess(VK_CHANNEL_UP);
    };
    self.channelDownPressed = function() {
        if(livetvmain.getCurrentSourceInnerId() != SourceList.TV) return;
        hiWebOsFrame[LiveTVModule.PASSWORD_DIALOG].destroy();
        openLiveTVModule([Msg.PASSWORD, 0, Msg.INFO, 0, Msg.SIGNAL, 0]);
        liveTVHandlerProcess(VK_CHANNEL_DOWN);
    };
    self.channelListPressed = function() {
        if(livetvmain.getCurrentSourceInnerId() != SourceList.TV) return;
        hiWebOsFrame[LiveTVModule.PASSWORD_DIALOG].destroy();
        openLiveTVModule([Msg.PASSWORD, 0, Msg.INFO, 0]);
        liveTVHandlerProcess(VK_CH_LIST);
    };

    function parsePinCode(code) {
        DBG_ALWAYS("pin code changed to [" + code + "]");
        pinCode = code;
    }

    if(tv) {
        model.parentlock.onPinChaged = parsePinCode;
        parsePinCode(model.parentlock.getPin());
    }

}

var pswdDialog = new PasswordDialog();