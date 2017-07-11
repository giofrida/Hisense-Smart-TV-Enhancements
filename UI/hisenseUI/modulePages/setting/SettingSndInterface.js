/**
 * Created by ghl on 14-6-18.
 */

//INIT FUNCTION
var CI_OP_SEARCH_FLAG = 0;  //CI 需要搜台的全局标志0，不需要，1~4需要，分别对应不同的情况
var PICTURE_3D_SURPPORT = 0;    //是否支持3D功能
var SOUND_BASSBOOST_SUBWOOFER_DEVICE_EXIST = 0; //是否支持重低音低音增强等
var CHNL_CAM_COUNT = 0;  //CI 卡数量
var MHEG5_STATUS = 0;
var OPERATE_TIP_SHOW = false;
var MEMC_SUPPORT = 1;   //是否支持MEMC功能
var HEADPHONE_INSERT_TVMUTE = null;    //欧洲耳机插入并且mutetv状态，非欧洲状态则为0
var isHDRSuport = 0;
var UNDEFINED_DEFSTR = "undefined";


/**如果是美洲机，还需要修改HelpInfo对应Index */
var ARCDeviceWorkingState = null;  //最新修改为  (ARCDeviceExist == 1 && ARCCtrl == 1) //判断ARC是否处于工作状态 (ARCDeviceExist == 1 && ARCMode 为2)代表工作状态


var TV_MARKET = "EM_5657";  //新兴市场

var IndexDef = {
    EM_5657: {
        PicMode: 0,
        PicApplyMode: 1,
        PicBrightness: 2,
        PicContrast: 3,
        PicColor: 4,
        PicColorSaturation: 4,
        PicAspectRatio: 5,
        PicBacklight: 6,
        Pic3D: 7,   // 3d menu moved to pic advanced page
        PicAdvanced: 7,
        PicReset: 8,

        SndMode: 0,
        SndHeadphoneVolume: 0,  //新兴和sa不需要耳机选项
        SndDBX: 0,
        SndApplyMode: 1,
        SndAdvanced: 2, //暂时这样使用
        SndReset: 3,    //暂时这样使用
        //SndSAP: 0,  //不该存在

        ChnlEPGMark: 6,
        ChnlAdvanced: 6
    },
    EU_5657: {
        PicMode: 0,
        PicApplyMode: 1,
        PicBrightness: 2,
        PicContrast: 3,
        PicColor: 4,
        PicColorSaturation: 4,
        PicAspectRatio: 5,
        PicBacklight: 6,
        Pic3D: 7,   // 3d menu moved to pic advanced page
        PicAdvanced: 7,
        PicReset: 8,

        SndMode: 0,
        SndHeadphoneVolume: 0,
        SndDBX: 0,
        SndApplyMode: 1,
        SndAdvanced: 2, //暂时这样使用
        SndReset: 3,    //暂时这样使用
        //SndSAP: 0,  //不该存在

        ChnlEPGMark: 6, // move to chnl advanced
//        ChnlAdvanced: 6
        ChnlAdvanced: 6
    }

};

var FirPageSndIdx = {
    //Picture
    PicMode: IndexDef[TV_MARKET].PicMode,
    PicApplyMode: IndexDef[TV_MARKET].PicApplyMode,
    PicBrightness: IndexDef[TV_MARKET].PicBrightness,
    PicContrast: IndexDef[TV_MARKET].PicContrast,
    PicBacklight: IndexDef[TV_MARKET].PicBacklight,
    PicColor: IndexDef[TV_MARKET].PicColor,
    PicColorSaturation: IndexDef[TV_MARKET].PicColorSaturation,
    PicAspectRatio: IndexDef[TV_MARKET].PicAspectRatio,
    Pic3D: IndexDef[TV_MARKET].Pic3D,
    PicAdvanced: IndexDef[TV_MARKET].PicAdvanced,
    PicReset: IndexDef[TV_MARKET].PicReset,
    //Sound
    SndMode: IndexDef[TV_MARKET].SndMode,
    SndApplyMode: IndexDef[TV_MARKET].SndApplyMode,
    SndTvSpeaker: IndexDef[TV_MARKET].SndTvSpeaker,
    SndHeadphoneVolume: IndexDef[TV_MARKET].SndHeadphoneVolume,
    SndDBX: IndexDef[TV_MARKET].SndDBX,
    //SndSubWoofer: IndexDef[TV_MARKET].SndSubWoofer,
    //SndBassBoost: IndexDef[TV_MARKET].SndBassBoost,
    SndAdvanced: IndexDef[TV_MARKET].SndAdvanced,
    SndReset: IndexDef[TV_MARKET].SndReset,
    //SndSAP: IndexDef[TV_MARKET].SndSAP,

    ChnlEPGMark: IndexDef[TV_MARKET].ChnlEPGMark,
    ChnlAdvanced: IndexDef[TV_MARKET].ChnlAdvanced
};

function FirPageSndIdxUpdate() {
    try {
        DBG_INFO("FirPageSndIdxUpdate()");
        if ('EU' == InitArea) {
            TV_MARKET = 'EU_5657';  //欧洲
        } else {
            TV_MARKET = 'EM_5657';  //新兴和SA
        }
        DBG_INFO('TV_MARKET is: ' + TV_MARKET);

        FirPageSndIdx.PicMode = IndexDef[TV_MARKET].PicMode;                //0
        FirPageSndIdx.PicApplyMode = IndexDef[TV_MARKET].PicApplyMode;                //1
        FirPageSndIdx.PicBrightness = IndexDef[TV_MARKET].PicBrightness;    //2
        FirPageSndIdx.PicContrast = IndexDef[TV_MARKET].PicContrast;        //3
        FirPageSndIdx.PicColor = IndexDef[TV_MARKET].PicColor;              //4
        FirPageSndIdx.PicColorSaturation = IndexDef[TV_MARKET].PicColorSaturation;              //4
        FirPageSndIdx.PicAspectRatio = IndexDef[TV_MARKET].PicAspectRatio;  //5
        FirPageSndIdx.PicBacklight = IndexDef[TV_MARKET].PicBacklight;      //6


        FirPageSndIdx.Pic3D = IndexDef[TV_MARKET].Pic3D;                //7
        FirPageSndIdx.PicAdvanced = IndexDef[TV_MARKET].PicAdvanced;    //7
        FirPageSndIdx.PicReset = IndexDef[TV_MARKET].PicReset;          //8


        //Sound
        //FirPageSndIdx.SndSAP = IndexDef[TV_MARKET].SndSAP;                          //0 已经去掉
        FirPageSndIdx.SndMode = IndexDef[TV_MARKET].SndMode;                        //0
        FirPageSndIdx.SndHeadphoneVolume = IndexDef[TV_MARKET].SndHeadphoneVolume;
        FirPageSndIdx.SndTvSpeaker = IndexDef[TV_MARKET].SndTvSpeaker;
        FirPageSndIdx.SndApplyMode = IndexDef[TV_MARKET].SndApplyMode;
        FirPageSndIdx.SndDBX = IndexDef[TV_MARKET].SndDBX;

        FirPageSndIdx.SndAdvanced = IndexDef[TV_MARKET].SndAdvanced;
        FirPageSndIdx.SndReset = IndexDef[TV_MARKET].SndReset;


        FirPageSndIdx.ChnlEPGMark = IndexDef[TV_MARKET].ChnlEPGMark;
        FirPageSndIdx.ChnlAdvanced = IndexDef[TV_MARKET].ChnlAdvanced;  //更新ChnlAdvanced

        PrintFirPageSndIdx();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PrintFirPageSndIdx() {
    try {
        DBG_INFO("\n" +
            "------------PrintFirPageSndIdx after update---------\n" +
            "FirPageSndIdx.PicMode:" + FirPageSndIdx.PicMode + "\n" +
            "FirPageSndIdx.PicApplyMode:" + FirPageSndIdx.PicApplyMode + "\n" +
            "FirPageSndIdx.PicBrightness:" + FirPageSndIdx.PicBrightness + "\n" +
            "FirPageSndIdx.PicContrast:" + FirPageSndIdx.PicContrast + "\n" +
            "FirPageSndIdx.PicColor:" + FirPageSndIdx.PicColor + "\n" +
            "FirPageSndIdx.PicColorSaturation:" + FirPageSndIdx.PicColorSaturation + "\n" +
            "FirPageSndIdx.PicAspectRatio:" + FirPageSndIdx.PicAspectRatio + "\n" +
            "FirPageSndIdx.PicBacklight:" + FirPageSndIdx.PicBacklight + "\n" +
            "FirPageSndIdx.Pic3D:" + FirPageSndIdx.Pic3D + "\n" +
            "FirPageSndIdx.PicAdvanced:" + FirPageSndIdx.PicAdvanced + "\n" +
            "FirPageSndIdx.PicReset:" + FirPageSndIdx.PicReset + "\n" +
            "FirPageSndIdx.SndMode:" + FirPageSndIdx.SndMode + "\n" +
            "FirPageSndIdx.SndHeadphoneVolume:" + FirPageSndIdx.SndHeadphoneVolume + "\n" +
            "FirPageSndIdx.SndDBX:" + FirPageSndIdx.SndDBX + "\n" +
            "FirPageSndIdx.SndDBX:" + FirPageSndIdx.SndDBX + "\n" +
                //"FirPageSndIdx.SndSubWoofer:" + FirPageSndIdx.SndSubWoofer + "\n" +
                //"FirPageSndIdx.SndBassBoost:" + FirPageSndIdx.SndBassBoost + "\n" +
            "FirPageSndIdx.SndAdvanced:" + FirPageSndIdx.SndAdvanced + "\n" +
            "FirPageSndIdx.SndReset:" + FirPageSndIdx.SndReset + "\n" +
                //"FirPageSndIdx.SndSAP:" + FirPageSndIdx.SndSAP + "\n" +
            "FirPageSndIdx.ChnlEPGMark:" + FirPageSndIdx.ChnlEPGMark + "\n" +
            "FirPageSndIdx.ChnlAdvanced:" + FirPageSndIdx.ChnlAdvanced + "\n" +
            "------------PrintFirPageSndIdx end-------------------");
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function FirPageSndIdxInit() {
    try {
        try {
            PICTURE_3D_SURPPORT = tv ? model.video.get3dSupported() : 1;
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
        DBG_INFO('model.video.get3dSupported(): ' + PICTURE_3D_SURPPORT);
        try {
            SOUND_BASSBOOST_SUBWOOFER_DEVICE_EXIST = model.sound.getBassBoostDeviceExist();
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
        DBG_INFO('model.sound.getBassBoostDeviceExist():' + SOUND_BASSBOOST_SUBWOOFER_DEVICE_EXIST);
        FirPageSndIdxUpdate();
//        PrintFirPageSndIdx();
        //初始化设值 导入导出Channel列表是否有用

        CreateSndHelpInfoPage('', '', false);   //CreateSndHelpInfoPage
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingSndChaged() {
    try {

        DBG_INFO("sndChaged Start");
        //sound mode
        model.sound.onSoundModeChaged = onSoundModeChaged;
        //model.sound.=onApplySoundModeChanged;
        model.sound.onSpeakerArcChaged = onSpeakerArcChaged;
        //zjm
        model.sound.onApplyModeChaged = onSndApplyModeChaged;
        model.sound.onTvSpeakerChaged = onTvSpeakerChaged;

        model.sound.onDigitalAudioOutDdplusChaged = onDigitalAudioOutDdplusChaged;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndInit() {//主要用于填充二级列表
    try {
        SettingSndModeInit();
        SettingSndARCWorkingStateInit();
        SettingSndApplyModeInit();
        //SettingsndTvSpeakerInit();
//    SettingSndSAPInit();
        //    SettingSndVolAdjInit();
        //SettingSndHeadPhonePageInit();


        // 首先删除SndReset,launcher时加入disable snd reset function,
        while (-1 != $.inArray(FirPageSndIdx.SndReset, PageDataFirstCls.operateData.settingdisablelist[1])) {    //存在,则删除
            PageDataFirstCls.operateData.settingdisablelist[1].splice($.inArray(FirPageSndIdx.SndReset, PageDataFirstCls.operateData.settingdisablelist[1]), 1);
        }
        if (g_launcherBrand == 'SA_OEM') {
            if (!!hiWebOsFrame.myLauncher && true == hiWebOsFrame.myLauncher.visible) {
                PageDataFirstCls.operateData.settingdisablelist[1].push(FirPageSndIdx.SndReset);
            }
        } else {
            if (typeof launcherNBar != UNDEFINED_DEFSTR && true == hiWebOsFrame[launcherNBar.id].visible) {
                DBG_INFO('launcher exist, disable snd reset function');
                PageDataFirstCls.operateData.settingdisablelist[1].push(FirPageSndIdx.SndReset);
            }
        }
//    SettingSndLipSyncInit();
//    SRSSubWooferBassBoostInit();  //该功能已删除
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingSndModeInit() {
    try {

        var sndMode = tv ? model.sound.getSoundMode() : 1;
        DBG_INFO("model.sound.getSoundMode():" + sndMode);

        //修改二级列表数据
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.ModeEnum[sndMode];
        }

        //修改sndmode页operateData
        if (typeof PageDataSettingSndMode != UNDEFINED_DEFSTR) {
            var sndModeOpeData = PageDataSettingSndMode.operateData;
            NaviBarInitEasy.call(this, sndModeOpeData, "setting_snd_mode_cmp", sndMode);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    try {
        var sonicStateTmp = model.sound.getTotalSonics();
        DBG_INFO("model.sound.getTotalSonics(): " + sonicStateTmp);
        var sonicState = UIMidValOpposite(sonicStateTmp);
        sonicState = Num2Bool(sonicState);
        if (typeof (PageDataSettingSndMode) != UNDEFINED_DEFSTR) {
            var sndModeOpeData = PageDataSettingSndMode.operateData;
            FlipSwitchInitEasy.call(this, sndModeOpeData, "setting_snd_dbx_sonic_cmp", sonicState);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    try {
        var surroundStateTmp = model.sound.getTotalSurround();
        DBG_INFO("model.sound.getTotalSurround(): " + surroundStateTmp);
        var surroundState = UIMidValOpposite(surroundStateTmp);
        surroundState = Num2Bool(surroundState);
        if (typeof (PageDataSettingSndMode) != UNDEFINED_DEFSTR) {
            var sndModeOpeData = PageDataSettingSndMode.operateData;
            FlipSwitchInitEasy.call(this, sndModeOpeData, "setting_snd_dbx_surround_cmp", surroundState);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    try {
        var dbxVolModeTmp = model.sound.getTotalVolume();
        DBG_INFO('model.sound.getTotalVolume(): ' + dbxVolModeTmp);
        var dbxVolMode = DBXTotalVolMid2UI(dbxVolModeTmp);
        DBG_INFO("dbxVolMode aft DBXTotalVolMid2UI:" + dbxVolMode);
        if (typeof (PageDataSettingSndMode) != UNDEFINED_DEFSTR) {
            var sndModeOpeData = PageDataSettingSndMode.operateData;
            NaviBarInitEasy.call(this, sndModeOpeData, "setting_snd_dbx_volume_cmp", dbxVolMode);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}
// 此处需要添加apply mode init函数
function SettingSndApplyModeInit() {
    try {
        var applySndModeTmp = tv ? model.sound.getApplyMode() : 0;
        DBG_INFO('model.sound.getApplyMode():' + applySndModeTmp);
        var applySndMode = ({0: 1, 1: 0})[applySndModeTmp];
        PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndApplyMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.ApplySoundModeEnum[applySndMode];
        var applysndModeData = PageDataSettingSndApplyMode.operateData;
        DBG_INFO('PageDataSettingSndApplyMode.operateData changed!!!');
        NaviBarInitEasy.call(this, applysndModeData, "setting_snd_apply_mode_cmp", applySndMode);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingsndTvSpeakerInit() {
    try {
        var TvSpeakerMode = tv ? model.sound.getTvSpeaker() : 1;
        DBG_INFO('model.sound.getTvSpeaker():' + TvSpeakerMode);
        PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndTvSpeaker].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.SndTvSpeakerEnum[TvSpeakerMode];
        var TvSpeakerModeState = Num2Bool(TvSpeakerMode);
        if (typeof PageDataSettingSndTvSpeaker != UNDEFINED_DEFSTR) {
            var tvSpeakerOpData = PageDataSettingSndTvSpeaker.operateData;
            FlipSwitchInitEasy.call(this, tvSpeakerOpData, "setting_snd_tv_speaker_flipSwitch", TvSpeakerModeState);

        }
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }

    //try {
    //    var surroundStateTmp = model.sound.getTotalSurround();
    //    DBG_INFO("model.sound.getTotalSurround(): " + surroundStateTmp);
    //    var surroundState = UIMidValOpposite(surroundStateTmp);
    //    surroundState = Num2Bool(surroundState);
    //    if (typeof (PageDataSettingSndDBX) != UNDEFINED_DEFSTR) {
    //        var dbxOpeData = PageDataSettingSndDBX.operateData;
    //        FlipSwitchInitEasy.call(this, dbxOpeData, "setting_snd_dbx_surround_cmp", surroundState);
    //    }
    //} catch (ex) {
    //    DBG_ERROR(ex.message);
    //}
}

function SettingSndARCWorkingStateInit() {
    try {
        //var headphoneInsertTvMuteState = getHeadphoneInsertTvMuteState();
        //DBG_INFO('getHeadphoneInsertTvMuteState: ' + headphoneInsertTvMuteState);

        var audioDeviceExist = model.cec.getIsAudioDeviceExist();
        DBG_INFO('model.cec.getIsAudioDeviceExist(): ' + audioDeviceExist);
        var arcState = model.cec.getHdmiDevicesArcState();
        DBG_INFO('model.cec.getHdmiDevicesArcState(): ' + arcState);
        var cecState = model.cec.getFunctionality();
        DBG_INFO('model.cec.getFunctionality(): ' + cecState);
        //修改二级菜单
        //PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndMode].setting_first_content_text2.Data

        ARCDeviceWorkingState = (arcState && audioDeviceExist && cecState);
        if (1 == ARCDeviceWorkingState) {
            if ("EU" == InitArea) {
                PageDataFirstCls.operateData.settingdisablelist[1] = [FirPageSndIdx.SndMode, FirPageSndIdx.SndHeadphoneVolume];
            } else {
                PageDataFirstCls.operateData.settingdisablelist[1] = [FirPageSndIdx.SndMode];
            }
        } else {
            PageDataFirstCls.operateData.settingdisablelist[1] = [];
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

//function SettingSndDBXInit() {
//    try {
//        var sonicStateTmp = model.sound.getTotalSonics();
//        DBG_INFO("model.sound.getTotalSonics(): " + sonicStateTmp);
//        var sonicState = UIMidValOpposite(sonicStateTmp);
//        sonicState = Num2Bool(sonicState);
//        if (typeof (PageDataSettingSndDBX) != UNDEFINED_DEFSTR) {
//            var dbxOpeData = PageDataSettingSndDBX.operateData;
//            FlipSwitchInitEasy.call(this, dbxOpeData, "setting_snd_dbx_sonic_cmp", sonicState);
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//    try {
//        var surroundStateTmp = model.sound.getTotalSurround();
//        DBG_INFO("model.sound.getTotalSurround(): " + surroundStateTmp);
//        var surroundState = UIMidValOpposite(surroundStateTmp);
//        surroundState = Num2Bool(surroundState);
//        if (typeof (PageDataSettingSndDBX) != UNDEFINED_DEFSTR) {
//            var dbxOpeData = PageDataSettingSndDBX.operateData;
//            FlipSwitchInitEasy.call(this, dbxOpeData, "setting_snd_dbx_surround_cmp", surroundState);
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//    try {
//        var dbxVolModeTmp = model.sound.getTotalVolume();
//        DBG_INFO('model.sound.getTotalVolume(): ' + dbxVolModeTmp);
//        var dbxVolMode = DBXTotalVolMid2UI(dbxVolModeTmp);
//        DBG_INFO("dbxVolMode aft DBXTotalVolMid2UI:" + dbxVolMode);
//        if (typeof (PageDataSettingSndDBX) != UNDEFINED_DEFSTR) {
//            var dbxOpeData = PageDataSettingSndDBX.operateData;
//            NaviBarInitEasy.call(this, dbxOpeData, "setting_snd_dbx_volume_cmp", dbxVolMode);
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}

function DBXTotalVolUI2Mid(val) {
    try {
        var ui2midJson = {0: 2, 1: 0, 2: 1};

        var midVal = ui2midJson[val];

        if (typeof midVal == UNDEFINED_DEFSTR) {
            DBG_ALWAYS("DBXTotalVolUI2Mid: val: " + val + ", Err!!! Set default 0")
        }
        return midVal;

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DBXTotalVolMid2UI(val) {
    try {
        var mid2uiJson = {0: 1, 1: 2, 2: 0};

        var uiVal = mid2uiJson[val];

        if (typeof uiVal == UNDEFINED_DEFSTR) {
            DBG_ALWAYS("DBXTotalVolMid2UI: val: " + val + ", Err!!! Set default 0")
        }
        return uiVal;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function UIMidValOpposite(val) {
    try {
        if (0 == val) {
            return 1;
        } else {
            return 0;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function AudioOutMid2UI(val) {
    try {
//        var audioOutMid2UIVec = [1, 0, 2];
        var audioOutMid2UIVec = [1, 0];
        return audioOutMid2UIVec[val];
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function AudioOutUI2Mid(val) {
    try {
//        var audioOutUI2MidVec = [1, 0, 2];
        var audioOutUI2MidVec = [1, 0];
        return audioOutUI2MidVec[val];
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndAdvancedInit() {
    DBG_INFO("SettingSndAdvancedInit start");
    var AdvOpeData = null;
    if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
        AdvOpeData = PageDataSettingSndAdvanced.operateData;
    }
    try {
        if ("EU" == InitArea) {
            //add wsg country
            if (isCurrentCoutryWSG()) {
                $("#setting_snd_description_out").css("display", "none");
                $("#setting_snd_description_out_cmp").css("display", "none");
                $("#setting_snd_description_volume").css("display", "none");
                $("#setting_snd_audio_type").css("display", "none");
                $("#setting_snd_audio_type_cmp").css("display", "none");
                $("#setting_snd_audio_out").css("display", "none");
                $("#setting_snd_audio_out_cmp").css("display", "none");

                if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable = true;
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable = true;
                    PageDataSettingSndAdvanced.operateData.setting_snd_audio_type_cmp.disable = true;
                    PageDataSettingSndAdvanced.operateData.setting_snd_audio_out_cmp.disable = true;
                }
            } else {
                $("#setting_snd_description_out").css("display", "block");
                $("#setting_snd_description_out_cmp").css("display", "block");
                $("#setting_snd_description_volume").css("display", "block");
                $("#setting_snd_audio_type").css("display", "block");
                $("#setting_snd_audio_type_cmp").css("display", "block");
                $("#setting_snd_audio_out").css("display", "none");
                $("#setting_snd_audio_out_cmp").css("display", "none");

                if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable = false;
                    PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable = false;
                    PageDataSettingSndAdvanced.operateData.setting_snd_audio_type_cmp.disable = false;
                    PageDataSettingSndAdvanced.operateData.setting_snd_audio_out_cmp.disable = true;
                }
            }
        } else if ('EM' == InitArea) {
            $("#setting_snd_description_out").css("display", "none");
            $("#setting_snd_description_out_cmp").css("display", "none");
            $("#setting_snd_description_volume").css("display", "none");
            $("#setting_snd_audio_type").css("display", "block");
            $("#setting_snd_audio_type_cmp").css("display", "block");
            $("#setting_snd_audio_out").css("display", "block");
            $("#setting_snd_audio_out_cmp").css("display", "block");
            $("#setting_snd_head_phone_mode").css("display", "none");
            $("#setting_snd_head_phone_mode_cmp").css("display", "none");
            $("#setting_snd_head_phone_volume").css("display", "none");


            if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable = true;
                PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable = true;
                PageDataSettingSndAdvanced.operateData.setting_snd_audio_type_cmp.disable = false;
                PageDataSettingSndAdvanced.operateData.setting_snd_audio_out_cmp.disable = false;
                PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_mode_cmp.disable = true;
                PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_volume.disable = true;

            }
        } else {
            $("#setting_snd_description_out").css("display", "none");
            $("#setting_snd_description_out_cmp").css("display", "none");
            $("#setting_snd_description_volume").css("display", "none");
            $("#setting_snd_audio_type").css("display", "none");
            $("#setting_snd_audio_type_cmp").css("display", "none");
            $("#setting_snd_audio_out").css("display", "block");
            $("#setting_snd_audio_out_cmp").css("display", "block");
            $("#setting_snd_head_phone_mode").css("display", "none");
            $("#setting_snd_head_phone_mode_cmp").css("display", "none");
            $("#setting_snd_head_phone_volume").css("display", "none");


            if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                PageDataSettingSndAdvanced.operateData.setting_snd_description_out_cmp.disable = true;
                PageDataSettingSndAdvanced.operateData.setting_snd_description_volume.disable = true;
                PageDataSettingSndAdvanced.operateData.setting_snd_audio_type_cmp.disable = true;
                PageDataSettingSndAdvanced.operateData.setting_snd_audio_out_cmp.disable = false;
                PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_mode_cmp.disable = true;
                PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_volume.disable = true;

            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    //
    //需添加head phonemode 和 head phone volume 的底层
    //
    try {
        var TvSpeakerMode = tv ? model.sound.getTvSpeaker() : 1;
        DBG_INFO('model.sound.getTvSpeaker():' + TvSpeakerMode);
        //PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndTvSpeaker].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.SndTvSpeakerEnum[TvSpeakerMode];
        var TvSpeakerModeState = Num2Bool(TvSpeakerMode);
        FlipSwitchInitEasy.call(this, AdvOpeData, "setting_snd_tv_speaker_flipSwitch", TvSpeakerModeState);
    }
    catch (ex) {
        DBG_ERROR("tvspeaker ");
    }
// head phone mode 的底层
    try {
        var headPhoneMode = model.sound.getHeadphoneInsertTvMute();
        DBG_INFO("headPhoneMode" + headPhoneMode);
        NaviBarInitEasy.call(this, AdvOpeData, "setting_snd_head_phone_mode_cmp", headPhoneMode);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }
//head phone volume
    try {
        var headPhoneVolVal = model.sound.getHeadphoneVolume();
        DBG_INFO("headPhoneVolVal" + headPhoneVolVal);
        SliderInitEasy.call(this, AdvOpeData, "setting_snd_head_phone_volume", headPhoneVolVal);
    }
    catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        if ('EU' == InitArea) {
            var headPhoneInsert = tv ? model.sound.getHeadphoneInsert() : 1;
            DBG_INFO('model.sound.getHeadphoneInsert(): ' + headPhoneInsert);
            PageDataSettingSndAdvanced.operateData.headPhoneInsert = headPhoneInsert;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var lipSyncVal = model.sound.getLipsync();
        DBG_INFO("lipSyncVal: " + lipSyncVal);
        if (typeof (PageDataSettingSndAdvanced) != UNDEFINED_DEFSTR) {
            SliderInitEasy.call(this, AdvOpeData, "setting_snd_lip_sync", lipSyncVal);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var balVal = model.sound.getBalance();
        DBG_INFO("balVal " + balVal);
        if (typeof (PageDataSettingSndAdvanced) != UNDEFINED_DEFSTR) {
            SliderInitEasy.call(this, AdvOpeData, "setting_snd_balance", balVal);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    try {
        var diAudOutModeTmp = model.sound.getDigitalAudioOut();
        var diAudOutMode = DiAudOutMid2UI(diAudOutModeTmp);
        DBG_INFO("diAudOutMode aft DiAudOutMid2UI: " + diAudOutMode);
        if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
            NaviBarInitEasy.call(this, AdvOpeData, "setting_snd_digital_audio_out_cmp", diAudOutMode);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var diAudDelayVal = model.sound.getDigitalAudioDelay();

        if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
            SliderInitEasy.call(this, AdvOpeData, "setting_snd_digital_audio_delay", diAudDelayVal);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    if ("EU" == InitArea) {
        var AudioOutModeTmp = 0;//model.sound.getAudioOut();
        DBG_INFO("model.sound.getAudioOut: 0(EU branch nouse ,set default) " + AudioOutModeTmp);
        var AudioOutMode = AudioOutMid2UI(AudioOutModeTmp);
        if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
            NaviBarInitEasy.call(this, AdvOpeData, "setting_snd_audio_out_cmp", AudioOutMode);
        }
    } else {
        try {
            var AudioOutModeTmp = model.sound.getAudioOut();
            DBG_INFO("model.sound.getAudioOut: " + AudioOutModeTmp);
            var AudioOutMode = AudioOutMid2UI(AudioOutModeTmp);
            if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                NaviBarInitEasy.call(this, AdvOpeData, "setting_snd_audio_out_cmp", AudioOutMode);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

    if ("EU" == InitArea) {
        try {
            var descOutPut = model.sound.getDescriptionOutput();
            DBG_INFO("model.sound.getDescriptionOutput: " + descOutPut);
            if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                NaviBarInitEasy.call(this, AdvOpeData, "setting_snd_description_out_cmp", descOutPut);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        try {
            var descOutVol = model.sound.getDescriptionVolume();
            DBG_INFO("model.sound.getDescriptionVolume() " + descOutVol);
            if (typeof (PageDataSettingSndAdvanced) != UNDEFINED_DEFSTR) {
                SliderInitEasy.call(this, AdvOpeData, "setting_snd_description_volume", descOutVol);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        try {
            var audioType = model.sound.getAudioType();
            DBG_INFO("model.sound.getAudioType(): " + audioType);
            if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                NaviBarInitEasy.call(this, AdvOpeData, "setting_snd_audio_type_cmp", audioType);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }


    } else if ('EM' == InitArea) {
        try {
            var audioType = model.sound.getAudioType();
            DBG_INFO("model.sound.getAudioType(): " + audioType);
            if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                NaviBarInitEasy.call(this, AdvOpeData, "setting_snd_audio_type_cmp", audioType);
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    }

}

function DiAudOutUI2Mid(val) {
    try {
        switch (val) {
            case 0:
                return 0;
                break;
            case 1:
                return 2;
                break;
            case 2:
                return 1;
                break;
            default :
                DBG_ALWAYS("DiAudOutUI2Mid: val :" + val + " Err!!! Set default 0");
                return 0;
                break;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function DiAudOutMid2UI(val) {
    try {
        switch (val) {
            case 0:
                return 0;
                break;
            case 1:
                return 2;
                break;
            case 2:
                return 1;
                break;
            case 3:
                return 1;
                break;
            default :
                DBG_ALWAYS("DiAudOutMid2UI: val " + val + " Err!!! Set default 0");
                return 0;
                break;
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingEqualizerPageInit() {
    try {
        var hz0val = model.sound.getEqualizerFreq120hz();
        var hz1val = model.sound.getEqualizerFreq500hz();
        var hz2val = model.sound.getEqualizerFreq1k5hz();
        var hz3val = model.sound.getEqualizerFreq5khz();
        var hz4val = model.sound.getEqualizerFreq10khz();

        if (typeof (PageDataSettingSndEqualizer) != UNDEFINED_DEFSTR) {
            var EqzOpeData = PageDataSettingSndEqualizer.operateData;
            SliderInitEasy.call(this, EqzOpeData, "setting_snd_equalizer_hz_0", hz0val);
            SliderInitEasy.call(this, EqzOpeData, "setting_snd_equalizer_hz_1", hz1val);
            SliderInitEasy.call(this, EqzOpeData, "setting_snd_equalizer_hz_2", hz2val);
            SliderInitEasy.call(this, EqzOpeData, "setting_snd_equalizer_hz_3", hz3val);
            SliderInitEasy.call(this, EqzOpeData, "setting_snd_equalizer_hz_4", hz4val);
        }

        DBG_INFO(hz0val + " " + hz1val + " " + hz2val + " " + hz3val + " " + hz4val);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndHeadPhonePageInit() {
    try {
        if ("EU" == InitArea) {
            DBG_INFO('"EU" == InitArea, SettingSndHeadPhonePageInit');
            //var isHeadPhoneFlwTV = model.sound.getHeadphoneVolumeSyncTv();
            //DBG_INFO("isHeadPhoneFlwTV " + isHeadPhoneFlwTV);
            //
            //var hpSwState = !Num2Bool(isHeadPhoneFlwTV);// 0 unFollow ->On , 1 follow->off
            //
            if (typeof PageDataSettingSndHeadPhone != UNDEFINED_DEFSTR) {
                var headPhoneOpeData = PageDataSettingSndHeadPhone.operateData;
                //1为跟随主机开关， 耳机开关为off； 0为不跟随，耳机开关为on
                //FlipSwitchInitEasy.call(this, headPhoneOpeData, "setting_snd_HP_headphone_switch_cmp", hpSwState);

                PageDataSettingSndHeadPhone.setting_snd_HP_headphone_switch_cmp.disable = true;
            }
            var headPhoneVolVal = model.sound.getHeadphoneVolume();

            //修改二级页面
            if (typeof  PageDataFirstCls != UNDEFINED_DEFSTR) {
                PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndHeadphoneVolume].setting_first_content_text2.Data = headPhoneVolVal;
            }

            if (typeof PageDataSettingSndHeadPhone != UNDEFINED_DEFSTR) {

                SliderInitEasy.call(this, headPhoneOpeData, "setting_snd_HP_headphone_volume", headPhoneVolVal);
                //headPhoneOpeData.setting_snd_HP_headphone_volume.disable = !hpSwState;
                headPhoneOpeData.setting_snd_HP_headphone_volume.disable = false;
            }
        } else {
            DBG_INFO('"EU" != InitArea; do not SettingSndHeadPhonePageInit()');
        }


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingSndBassBoostInit() {
    try {
        //var bassBoostVal = model.sound.getBassBoost();
        //DBG_INFO("model.sound.getBassBoost(): " + bassBoostVal);
        ////修改二级页面
        //if (typeof  PageDataFirstCls != UNDEFINED_DEFSTR) {
        //    PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndBassBoost].setting_first_content_text2.Data = bassBoostVal;
        //}
        //
        //if (typeof PageDataSettingSndBassBoost != UNDEFINED_DEFSTR) {
        //    var bassBoostOpeData = PageDataSettingSndBassBoost.operateData;
        //    SliderInitEasy.call(this, bassBoostOpeData, "setting_snd_SSB_bassboost", bassBoostVal);
        //}

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SubWooferMid2UI(val) {
    try {
        if (0 == val) {
            return 1;
        } else {
            return 0;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SubWooferUI2Mid(val) {
    try {
        if (0 == val) {
            return 1;
        } else {
            return 0;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 * 声音模式
 * @param val
 */
var onSoundModeChaged = function (val) {
    try {
        DBG_INFO("onSoundModeChaged: " + val);
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.ModeEnum[val];
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 * HeadPhoneVolume
 * @param val
 */
var onSndApplyModeChaged = function (val) {
    try {
        DBG_INFO("on Apply Sound Mode Changed" + val);
        var sndApplyMode = ({0: 1, 1: 0})[val];
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndApplyMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.ApplySoundModeEnum[sndApplyMode];
            if (!!hiWebOsFrame.settingsFirst && hiWebOsFrame.settingsFirst.visible) {
                !!hiWebOsFrame.settingsFirst.rewriteDataOnly();
            }
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onTvSpeakerChaged = function (val) {
    try {
        DBG_INFO("onTvSpeakerChaged: " + val);
        //PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndTvSpeaker].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.SndTvSpeakerEnum[val];
        if ('setting_snd_advanced_settings' == hiWebOsFrame.getCurrentPageId() && Num2Bool(val) != PageDataSettingSndAdvanced.operateData.setting_snd_tv_speaker_flipSwitch.switchType) {
            PageDataSettingSndAdvanced.operateData.setting_snd_tv_speaker_flipSwitch.switchType = Num2Bool(val);
            DBG_INFO('hiWebOsFrame.SettingSndAdvancedPage.rewriteDataOnly()')
            hiWebOsFrame.SettingSndAdvancedPage.rewriteDataOnly();
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function onDigitalAudioOutDdplusChaged(val){
    try {
        DBG_INFO('onDigitalAudioOutDdplusChaged: '+val);
        if(1 == val){
            if (factoryMode != FACTORY_MODE_ENUM.MODE_NORMAL) {
                DBG_INFO('cur factoryMode not normal, return');
                return;
            }

            if (!!hiWebOsFrame.getCurrentPage() && 'wizard' == hiWebOsFrame.getCurrentPage().module) {
                DBG_INFO('cur module wizard, return');
                return;
            }

            //if (!!hiWebOsFrame.myLauncher) {
            //    if (!!hiWebOsFrame.myLauncher.visible) {
            //        return;
            //    }
            //}

            //if (!!hiWebOsFrame.getCurrentPage() && hiWebOsFrame.getCurrentPage().module == 'epg') {
            //    DBG_INFO('cur module epg, return');
            //    return;
            //}

            if ((hiWebOsFrame.getCurrentPageId() == "app_lau_browser" && CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType())
                || hiWebOsFrame.getCurrentPageId() == 'epos') {

                DBG_INFO('curPage page epos, return');
                return;
            }

            //if (!!hiWebOsFrame.launcher_allapps) {
            //    if (!!hiWebOsFrame.launcher_allapps.visible) {
            //        return;
            //    }
            //}

            if (1 == val) {
                DBG_INFO('ARC DD+ mode,SPDIF out mute');
                showMsg("", "ARC DD+ mode,SPDIF out mute");
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

//var onHeadphoneVolumeChaged = function (val) {
//    try {
//        DBG_INFO("onHeadphoneVolumeChaged: " + val);
//        if ("EU" == InitArea) {
//            DBG_INFO('"EU" == InitArea, do onHeadphoneVolumeChaged');
//            if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
//                PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[FirPageSndIdx.SndHeadphoneVolume].setting_first_content_text2.Data = val;
//                if (!!hiWebOsFrame.settingsFirst && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.settingsFirst.id) {
//                    try {
//                        $("#settings_first_ul_setting_first_ul2_sys1_setting_first_content_text2_sys1").html(val);
//                        DBG_INFO("Force to change settingFirPage headphone value by div id");
//                    } catch (ex) {
//                        DBG_ERROR(ex.message);
//                    }
////                hiWebOsFrame.settingsFirst.rewriteDataOnly();
//                }
//            }
//
//            if (!!hiWebOsFrame.SettingSndHeadPhonePage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingSndHeadPhonePage.id) {
//                hiWebOsFrame.SettingSndHeadPhonePage.data.setting_snd_HP_headphone_volume.Data.setDefalutValue = val;
//                hiWebOsFrame.SettingSndHeadPhonePage.operateData.setting_snd_HP_headphone_volume.Data.setDefalutValue = val;
//                hiWebOsFrame.SettingSndHeadPhonePage.getCaE("setting_snd_HP_headphone_volume").hiSliderValue(val);
//                //if (false == PageDataSettingSndHeadPhone.operateData.setting_snd_HP_headphone_switch_cmp.switchType) { //上面开关的状态，是否独立控制的状态
//                //    DBG_INFO("hiWebOsFrame.SettingSndHeadPhonePage Exist, rewriteDataOnly Need");
//                //    hiWebOsFrame.SettingSndHeadPhonePage.data.setting_snd_HP_headphone_volume.Data.setDefalutValue = val;
//                //    hiWebOsFrame.SettingSndHeadPhonePage.operateData.setting_snd_HP_headphone_volume.Data.setDefalutValue = val;
//                //    hiWebOsFrame.SettingSndHeadPhonePage.getCaE("setting_snd_HP_headphone_volume").hiSliderValue(val);
//                //} else {
//                //    DBG_INFO("hiWebOsFrame.SettingSndHeadPhonePage Exist, rewriteDataOnly Not Need");
//                //}
//            }
//
//        } else {
//            DBG_INFO('"EU" != InitArea, do nothing');
//        }
//
//
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }
//}

var onSpeakerArcChaged = function (val) {
    try {
        DBG_INFO('onSpeakerArcChaged: ' + val);
        if (!!hiWebOsFrame.SettingSndAdvancedPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingSndAdvancedPage.id) {
            DBG_INFO('curPage hiWebOsFrame.SettingSndAdvancedPage');
            var SpeakerAndARCCmp = hiWebOsFrame.SettingSndAdvancedPage.getCaE('setting_snd_tv_speaker_and_arc_cmp');

            if (val != SpeakerAndARCCmp.SelectedIndex || val != SpeakerAndARCCmp.DataSelectedIndex) {
                DBG_INFO('val != SpeakerAndARCCmp.SelectedIndex || val != SpeakerAndARCCmp.DataSelectedIndex');
                PageDataSettingSndAdvanced.operateData.setting_snd_tv_speaker_and_arc_cmp.DataSelectedIndex = val;
                PageDataSettingSndAdvanced.operateData.setting_snd_tv_speaker_and_arc_cmp.SelectedIndex = val;


//                SpeakerAndARCCmp.SelectedIndex = val;
//                SpeakerAndARCCmp.DataSelectedIndex = val;
//                NaviBarEasyChange.call(SpeakerAndARCCmp, SpeakerAndARCCmp, SpeakerAndARCCmp.SelectedIndex);
                hiWebOsFrame.SettingSndAdvancedPage.rewriteDataOnly();
            } else {
                DBG_INFO('val == SpeakerAndARCCmp.SelectedIndex && val == SpeakerAndARCCmp.DataSelectedIndex, do nothing');
            }

        } else {
            DBG_INFO('curPage not hiWebOsFrame.SettingSndAdvancedPage, do nothing');
            if (typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR) {
                DBG_INFO('typeof PageDataSettingSndAdvanced != UNDEFINED_DEFSTR');
                PageDataSettingSndAdvanced.operateData.setting_snd_tv_speaker_and_arc_cmp.DataSelectedIndex = val;
                PageDataSettingSndAdvanced.operateData.setting_snd_tv_speaker_and_arc_cmp.SelectedIndex = val;
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


var onAudioOutDeviceExistChaged = function (val) {
    return; //不做处理
    try {
        DBG_INFO("onAudioOutDeviceExistChaged: " + val);
        DBG_INFO("current pageId: " + hiWebOsFrame.getCurrentPageId())
        if (1 == val) {
            if (hiWebOsFrame.isCurrentModule("livetv")) {
                hiWebOsFrame.createPage('setting_snd_popup_headphone_speaker', null, null, null, function (SettingSndPopUpHeadphoneSpeaker) {
                    hiWebOsFrame.SettingSndPopUpHeadphoneSpeaker = SettingSndPopUpHeadphoneSpeaker;
                    SettingSndPopUpHeadphoneSpeaker.open();
                    SettingSndPopUpHeadphoneSpeaker.hiFocus();
                });
            } else {
                DBG_INFO("currentModule not channelList, not popup headphone page.");
            }
        } else {
            DBG_INFO("onAudioOutDeviceExistChaged == 0, do nothing");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
};


var onFunctionalityChagedSndInterface = function (val) {
    try {
        DBG_INFO('onFunctionalityChagedSndInterface: ' + val);
        var cecState = val;
        //if (1 == cecState) {

        //var headphoneInsertTvMuteState = getHeadphoneInsertTvMuteState();
        //DBG_INFO('getHeadphoneInsertTvMuteState' + headphoneInsertTvMuteState);

        var audioDeviceExist = model.cec.getIsAudioDeviceExist();
        DBG_INFO('model.cec.getIsAudioDeviceExist(): ' + audioDeviceExist);
        var arcState = model.cec.getHdmiDevicesArcState();
        DBG_INFO('model.cec.getHdmiDevicesArcState(): ' + arcState);

        if (ARCDeviceWorkingState != (arcState && audioDeviceExist && cecState)) {
            ARCDeviceWorkingState = (arcState && audioDeviceExist && cecState);
            DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", sound UI will change state!");
            onARCDeviceWorkingStateChanged(ARCDeviceWorkingState);
        } else {
            DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", do nothing");
        }

        //} else {
        //    if (ARCDeviceWorkingState != 0) {
        //        ARCDeviceWorkingState = 0;
        //        DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", sound UI will change state!");
        //        onARCDeviceWorkingStateChanged(ARCDeviceWorkingState);
        //    } else {
        //        DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", do nothing");
        //    }
        //}

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onIsAudioDeviceExistChagedSndInterface = function (val) {
    try {
        DBG_INFO('onIsAudioDeviceExistChagedSndInterface:' + val);
        var audioDeviceExist = val;

        //var headphoneInsertTvMuteState = getHeadphoneInsertTvMuteState();
        //DBG_INFO('getHeadphoneInsertTvMuteState()' + headphoneInsertTvMuteState);

        var arcState = model.cec.getHdmiDevicesArcState();
        DBG_INFO('model.cec.getHdmiDevicesArcState(): ' + val);

        var cecState = model.cec.getFunctionality();
        DBG_INFO('model.cec.getFunctionality(): ' + cecState);

        if (ARCDeviceWorkingState != (arcState && audioDeviceExist && cecState)) {
            ARCDeviceWorkingState = (arcState && audioDeviceExist && cecState);
            DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", sound UI will change state!");
            onARCDeviceWorkingStateChanged(ARCDeviceWorkingState);
        } else {
            DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", do nothing");
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onHdmiDevicesArcStateChagedSndInterface = function (val) {
    try {
        DBG_INFO('onHdmiDevicesArcStateChagedSndInterface:' + val);
        var arcState = val;

        //var headphoneInsertTvMuteState = getHeadphoneInsertTvMuteState();
        //DBG_INFO('getHeadphoneInsertTvMuteState: ' + headphoneInsertTvMuteState);

        var audioDeviceExist = model.cec.getIsAudioDeviceExist();
        DBG_INFO('model.cec.getIsAudioDeviceExist(): ' + audioDeviceExist);

        var cecState = model.cec.getFunctionality();
        DBG_INFO('model.cec.getFunctionality(): ' + cecState);

        if (ARCDeviceWorkingState != (arcState && audioDeviceExist && cecState)) {
            ARCDeviceWorkingState = (arcState && audioDeviceExist && cecState);
            DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", sound UI will change state!");
            onARCDeviceWorkingStateChanged(ARCDeviceWorkingState);
        } else {
            DBG_INFO('ARCDeviceWorkingState: ' + ARCDeviceWorkingState + ", do nothing");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function onARCDeviceWorkingStateChanged(val) {
    try {
        DBG_INFO('onARCDeviceWorkingStateChanged: ' + val);
        if (typeof PageDataFirstCls != UNDEFINED_DEFSTR) {
            if (1 == val) {
                if ("EU" == InitArea) {
                    PageDataFirstCls.operateData.settingdisablelist[1] = [FirPageSndIdx.SndMode, FirPageSndIdx.SndHeadphoneVolume];
                } else {
                    PageDataFirstCls.operateData.settingdisablelist[1] = [FirPageSndIdx.SndMode];
                }
            } else {
                PageDataFirstCls.operateData.settingdisablelist[1] = [];
            }
            if (!!hiWebOsFrame.settingsFirst && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.settingsFirst.id) {
                DBG_INFO('hiWebOsFrame.settingsFirst Exist, rewriteDataOnly');
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
            }
        } else {
            DBG_INFO('hiWebOsFrame.settingsFirst not Exist, do nothing');
        }

        if (!!hiWebOsFrame.SettingSndAdvancedPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingSndAdvancedPage.id) {
            DBG_INFO('hiWebOsFrame.SettingSndAdvancedPage Exist, rewriteDataOnly');
            hiWebOsFrame.SettingSndAdvancedPage.rewriteDataOnly();
        } else {
            DBG_INFO('hiWebOsFrame.SettingSndAdvancedPage not exist, do nothing');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function getARCDeviceWorkingState() {
    try {
        if (null == ARCDeviceWorkingState) {
            ARCDeviceWorkingState = 0;
            //TODO 获取ARC是否工作状态
        }
        return ARCDeviceWorkingState;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 * onSapChaged
 * @param val
 */
var onSapChaged = function (val) {
    try {
        DBG_INFO("onSapChaged: " + val);
        var sapMode = val - 1;  //UI 与底层对应sapModeTmp

//        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
//            PageDataFirstCls.operateData.sndData.setting_first_ul2.Data[2].setting_first_content_text2.Data = PageDataFirstCls.operateData.sndData.SapModeEnum[sapMode];
//        }

        //不用添加
//        if(!!hiWebOsFrame.settingsFirst && hiWebOsFrame.isPageExist(settingsFirst.settingsFirst.id)){
//            hiWebOsFrame.settingsFirst.rewriteDataOnly();
//        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


/**!-------------------------------Sound Public Function Start--------------------------*/

function OpenSndModePage(oriPage) {
    try {
        if (arguments.length == 0) {
            DBG_INFO("arguments.length == 0, return");
            return;
        }
        if (oriPage != null) {
            hiWebOsFrame.createPage('setting_snd_mode', null, oriPage, 1000, function (SettingSndModePage) {
                DBG_INFO("sndMode~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingSndModePage = SettingSndModePage;
                SettingSndModePage.open();
                SettingSndModePage.hiFocus();
            });
        } else {
            hiWebOsFrame.createPage('setting_snd_mode', null, null, 1000, function (SettingSndModePage) {
                DBG_INFO("sndMode~~~~~~~~~~~~~~~~");
                hiWebOsFrame.SettingSndModePage = SettingSndModePage;
                SettingSndModePage.open();
                SettingSndModePage.hiFocus();
            });
        }


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


//第一次是否后出现空白页面？？
function CreateSndHelpInfoPage(titleStr, contentStr, isShow) {
    try {
        if ('EU' != InitArea && typeof sndHelpInfo != UNDEFINED_DEFSTR) {
            DBG_INFO("CreateSndHelpInfoPage() && 'EU' != InitArea, return;")
            return;
        }
        DBG_INFO("CreateSndHelpInfoPage()  title:" + titleStr + ",content:" + contentStr);
        var argLen = arguments.length;

        var priority = (titleStr == '' && contentStr == '') ? 10000 : null;

        hiWebOsFrame.createPage('setting_snd_help_info', null, null, priority, function (setting_snd_help_info) {
            DBG_INFO("hiWebOsFrame[sndHelpInfo.id] create");
            hiWebOsFrame[sndHelpInfo.id] = setting_snd_help_info;
            if ('EU' != InitArea) {
                DBG_INFO("EU != InitArea, hiWebOsFrame[sndHelpInfo.id].close(), return");
                hiWebOsFrame[sndHelpInfo.id].close();
                return;
            }


            if (typeof isShow != UNDEFINED_DEFSTR && false == isShow) {

            } else {
                setting_snd_help_info.open();
            }

            if (argLen >= 2) {
                sndHelpInfo.setHelpInfoText(titleStr, contentStr);
                hiWebOsFrame[sndHelpInfo.id].rewriteDataOnly();
            }

        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function CloseSndHelpInfoPage(/*destroyMode*/) {
    try {
        DBG_INFO("CloseSndHelpInfoPage()");
        if (!!sndHelpInfo.pageData) {
            sndHelpInfo.pageData.operateData.setting_snd_help_info_title.Data = "";
            sndHelpInfo.pageData.operateData.setting_snd_help_info_content.Data = "";
            DBG_INFO("sndHelpInfo.pageData's operaData Clear!")
        }

        if (!!hiWebOsFrame[sndHelpInfo.id] && hiWebOsFrame.isPageExist(sndHelpInfo.id)) {
            hiWebOsFrame[sndHelpInfo.id].close();
            //if (arguments.length == 1 && false == destroyMode) {
            //    DBG_INFO("hiWebOsFrame[sndHelpInfo.id] CloseOnly, not Destroy!");
            //} else {
            //    hiWebOsFrame[sndHelpInfo.id].destroy();
            //    DBG_INFO("hiWebOsFrame[sndHelpInfo.id].destroy()");
            //}
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


////////////////////////////////setting pic start///////////////////////////////////

function SettingPic3DInit() {

    DBG_INFO("SettingPic3DInit start");
    if (!!!PICTURE_3D_SURPPORT) {
        DBG_INFO('PICTURE_3D_SURPPORT false, return');
        return;
    }

    //此处不再影响firPage 3D item disable
    //try {
    //    var pic3DExist = model.video.get3dExist();
    //    DBG_INFO('model.video.get3dExist(): ' + pic3DExist);
    //    if (1 == pic3DExist) {
    //        DBG_INFO('3d exist, enable 3d');
    //        while (-1 != $.inArray(FirPageSndIdx.Pic3D, PageDataFirstCls.operateData.settingdisablelist[0])) {    //存在,则删除
    //            PageDataFirstCls.operateData.settingdisablelist[0].splice($.inArray(FirPageSndIdx.Pic3D, PageDataFirstCls.operateData.settingdisablelist[0]), 1);
    //        }
    //    } else {
    //        DBG_INFO('3d not exist, disable 3d');
    //        PageDataFirstCls.operateData.settingdisablelist[0].push(FirPageSndIdx.Pic3D);
    //    }
    //} catch (ex) {
    //    DBG_ERROR(ex.message);
    //}


    var pic3DOpeData = null;
    if (typeof PageDataSettingPic3D != UNDEFINED_DEFSTR) {
        pic3DOpeData = PageDataSettingPic3D.operateData;
    } else {
        DBG_INFO('PageDataSettingPic3D not exist, 3d init return');
        return;
    }

//    try {
//        if(livetvmain.getCurrentChannelInfo().type == TVTYPE.ATV ||
//            livetvmain.getCurrentSourceInnerId() == SourceList.AV ||
//            livetvmain.getCurrentSourceInnerId() == SourceList.SCART ||
//            livetvmain.getCurrentSourceInnerId() == SourceList.COMPONENT){
//            DBG_INFO('curSource ATV || AV || SCART || COMPONENT, disable some 3d mode item');
//            pic3DOpeData.setting_pic_3dmode_cmp.disableItem = [1, 3, 4, 5, 6, 7, 8];
//        } else {
//            pic3DOpeData.setting_pic_3dmode_cmp.disableItem = [];
//        }
//    } catch (ex) {
//        DBG_ERROR(ex.message);
//    }

    try {
        var pic3DMode = model.video.getEnum3dMode();
        DBG_INFO("model.video.getEnum3dMode(): " + pic3DMode);
        NaviBarInitEasy.call(this, pic3DOpeData, "setting_pic_3dmode_cmp", pic3DMode);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var pic3DModeExist = model.video.get3dModeExist();
        DBG_INFO('model.video.get3dModeExist(): ' + pic3DModeExist);
        pic3DOpeData.setting_pic_3dmode_cmp.disable = !Num2Bool(pic3DModeExist);

        pic3DOpeData.setting_pic_3dmode_cmp.disableItem = [];
        for (var i = 0; i < 9; i++) {
            if ((pic3DModeExist >> i) & 1) {

            } else {
                pic3DOpeData.setting_pic_3dmode_cmp.disableItem.push(i);
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    try {
        var picLRSwap = model.video.get3dLrswitch();
        DBG_INFO("model.video.get3dLrswitch(): " + picLRSwap);
        NaviBarInitEasy.call(this, pic3DOpeData, "setting_pic_lrswap_cmp", picLRSwap);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picLRSwapExist = model.video.get3dLrswitchExist();
        DBG_INFO('model.video.get3dLrswitchExist(): ' + picLRSwapExist);
        pic3DOpeData.setting_pic_lrswap_cmp.disable = !Num2Bool(picLRSwapExist);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var viewPointVal = model.video.get3dViewPoint();
        DBG_INFO("model.video.get3dViewPoint(): " + viewPointVal);
        SliderInitEasy.call(this, pic3DOpeData, "setting_pic_view_point", viewPointVal);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picViewPointExist = model.video.get3dViewPointExist();
        DBG_INFO('model.video.get3dViewPointExist(): ' + picViewPointExist);
        pic3DOpeData.setting_pic_view_point.disable = !Num2Bool(picViewPointExist);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var pic3DDepthVal = model.video.get3dDepth();
        DBG_INFO("model.video.get3dDepth(): " + pic3DDepthVal);
        SliderInitEasy.call(this, pic3DOpeData, "setting_pic_depth", pic3DDepthVal);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var pic3DDepthExist = model.video.get3dDepthExist();
        DBG_INFO('model.video.get3dDepthExist(): ' + pic3DDepthExist);
        pic3DOpeData.setting_pic_depth.disable = !Num2Bool(pic3DDepthExist);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var pic3Dto2D = model.video.get3d3dto2d();
        DBG_INFO("model.video.get3d3dto2d(): " + pic3Dto2D);
        pic3Dto2D = Num2Bool(pic3Dto2D);
        FlipSwitchInitEasy.call(this, pic3DOpeData, "setting_pic_3dto2d_cmp", pic3Dto2D);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var pic3Dto2DExist = model.video.get3d3dto2dExist();
        DBG_INFO('model.video.get3d3dto2dExist(): ' + pic3Dto2DExist);
        pic3DOpeData.setting_pic_3dto2d_cmp.disable = !Num2Bool(pic3Dto2DExist);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

//此处不再修改firPage刷新disableItem
var on3dExistChaged = function (val) {
    try {
        DBG_INFO('on3dExistChaged: ' + val);

        //if (1 == val) {
        //    DBG_INFO('3d exist, enable 3d');
        //    while (-1 != $.inArray(FirPageSndIdx.Pic3D, PageDataFirstCls.operateData.settingdisablelist[0])) {    //存在,则删除
        //        PageDataFirstCls.operateData.settingdisablelist[0].splice($.inArray(FirPageSndIdx.Pic3D, PageDataFirstCls.operateData.settingdisablelist[0]), 1);
        //    }
        //} else {
        //    DBG_INFO('3d not exist, disable 3d');
        //    PageDataFirstCls.operateData.settingdisablelist[0].push(FirPageSndIdx.Pic3D);
        //}

        //if (!!hiWebOsFrame.settingsFirst && hiWebOsFrame.isPageExist(hiWebOsFrame.settingsFirst.id)) {
        //    DBG_INFO('hiWebOsFrame.settingsFirst exist, rewriteDataOnly');
        //    hiWebOsFrame.settingsFirst.rewriteDataOnly();
        //}

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onEnum3dModeChaged = function (val) {
    try {
        DBG_INFO('onEnum3dModeChaged: ' + val);
        if (!!hiWebOsFrame.SettingPic3D && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingPic3D.id)) {
            SettingPic3DInit();
            //hiWebOsFrame.SettingPic3D.rewrite();//改为手动调节
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
            hiWebOsFrame.SettingPic3D.hiFocus();
            hiWebOsFrame.SettingPic3D.getCaE('setting_pic_view_point').hiSliderValue(PageDataSettingPic3D.operateData.setting_pic_view_point.Data.setDefalutValue);
            hiWebOsFrame.SettingPic3D.getCaE('setting_pic_depth').hiSliderValue(PageDataSettingPic3D.operateData.setting_pic_depth.Data.setDefalutValue);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var on3d3dto2dChaged = function (val) {
    try {
        DBG_INFO('on3d3dto2dChaged:' + val);
        if (!!hiWebOsFrame.SettingPic3D && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingPic3D.id)) {
            SettingPic3DInit();
            //hiWebOsFrame.SettingPic3D.rewrite();//改为手动调节
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
            hiWebOsFrame.SettingPic3D.hiFocus();
            hiWebOsFrame.SettingPic3D.getCaE('setting_pic_view_point').hiSliderValue(PageDataSettingPic3D.operateData.setting_pic_view_point.Data.setDefalutValue);
            hiWebOsFrame.SettingPic3D.getCaE('setting_pic_depth').hiSliderValue(PageDataSettingPic3D.operateData.setting_pic_depth.Data.setDefalutValue);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var on3dModeExistChaged = function (val) {
    try {
        DBG_INFO('on3dModeExistChaged: ' + val);
        if (!!hiWebOsFrame.SettingPic3D && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingPic3D.id) {
            DBG_INFO('curPage hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
            SettingPic3DInit();
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
        } else {
            DBG_INFO('curPage not hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var on3dLrswitchExistChaged = function (val) {
    try {
        DBG_INFO('on3dLrswitchExistChaged: ' + val);
        if (!!hiWebOsFrame.SettingPic3D && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingPic3D.id) {
            DBG_INFO('curPage hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
            SettingPic3DInit();
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
        } else {
            DBG_INFO('curPage not hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var on3dViewPointExistChaged = function (val) {
    try {
        DBG_INFO('on3dViewPointExistChaged: ' + val);
        if (!!hiWebOsFrame.SettingPic3D && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingPic3D.id) {
            DBG_INFO('curPage hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
            SettingPic3DInit();
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
        } else {
            DBG_INFO('curPage not hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var on3dDepthExistChaged = function (val) {
    try {
        DBG_INFO('on3dDepthExistChaged: ' + val);
        if (!!hiWebOsFrame.SettingPic3D && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingPic3D.id) {
            DBG_INFO('curPage hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
            SettingPic3DInit();
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
        } else {
            DBG_INFO('curPage not hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var on3d3dto2dExistChaged = function (val) {
    try {
        DBG_INFO('on3d3dto2dExistChaged: ' + val);
        if (!!hiWebOsFrame.SettingPic3D && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingPic3D.id) {
            DBG_INFO('curPage hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
            SettingPic3DInit();
            hiWebOsFrame.SettingPic3D.rewriteDataOnly();
        } else {
            DBG_INFO('curPage not hiWebOsFrame.SettingPic3DPage, rewriteDataOnly after call SettingPic3DInit()');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var on3dGlassHintChaged = function (val) {
    try {
        DBG_INFO('on3dGlassHintChaged: ' + val);
        if (factoryMode != FACTORY_MODE_ENUM.MODE_NORMAL) {
            DBG_INFO('cur factoryMode not normal, return');
            return;
        }

        if (!!hiWebOsFrame.getCurrentPage() && 'wizard' == hiWebOsFrame.getCurrentPage().module) {
            DBG_INFO('cur module wizard, return');
            return;
        }

        if (!!hiWebOsFrame.myLauncher) {
            if (!!hiWebOsFrame.myLauncher.visible) {
                return;
            }
        }

        if (!!hiWebOsFrame.getCurrentPage() && hiWebOsFrame.getCurrentPage().module == 'epg') {
            DBG_INFO('cur module epg, return');
            return;
        }

        if ((hiWebOsFrame.getCurrentPageId() == "app_lau_browser" && CmdURLType.LAU_BROWSER_EPOS == appBrowser.getCurrentCommandType())
            || hiWebOsFrame.getCurrentPageId() == 'epos') {

            DBG_INFO('curPage page epos, return');
            return;
        }

        if (!!hiWebOsFrame.launcher_allapps) {
            if (!!hiWebOsFrame.launcher_allapps.visible) {
                return;
            }
        }

        if (1 == val) {
            DBG_INFO('Please Wear 3D Glasses!');
            showMsg("", "Please Wear 3D Glasses!", 6);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onHeadphoneInsertChaged = function (val, callByStartLiveTVFirst) {
    try {
        DBG_INFO('onHeadphoneInsertChaged: ' + val);

        var curPage = hiWebOsFrame.getCurrentPage();
        if (0 == val) {
            if (typeof dialogHeadphoneInsert != UNDEFINED_DEFSTR && !!dialogHeadphoneInsert) {
                dialogHeadphoneInsert.setMuteTVState(false);
            }
            vol.reCheckVolume();
            if (!!curPage && curPage.id == 'dialog_headphone_insert') {
                hiWebOsFrame.dialog_headphone_insert.close();

                if (hiWebOsFrame.dialog_headphone_insert.origin.module == 'livetv') {
                    openLiveTVModule();
                } else {
                    hiWebOsFrame.dialog_headphone_insert.origin.open();
                    hiWebOsFrame.dialog_headphone_insert.origin.hiFocus();
                    hiWebOsFrame.dialog_headphone_insert.origin.rewriteDataOnly();
                }
                hiWebOsFrame.dialog_headphone_insert.destroy();
            }
            if (hiWebOsFrame.getCurrentArea() == "EU" && !!curPage && curPage.id == 'setting_sys_qs_page') { //拔出耳机Headphone选项消失
                PageDateQuickSet.setting_headphone_ul.disable = true;
                $('#setting_headphone_ul').css('display', 'none');
                if ($('#setting_headphone_ul').find("li")[0].className == 'focus') { //焦点在Headphone上则焦点下移
                    curPage.getCaE('setting_qsp_Modes').hiFocus();
                }
                curPage.rewriteDataOnly();
            }

            if ('EU' == InitArea && curPage.id == 'setting_snd_advanced_settings') {
                DBG_INFO("'EU' == InitArea && curPage.id == 'setting_snd_advanced_settings', rewriteDataOnly");
                PageDataSettingSndAdvanced.operateData.headPhoneInsert = 0;
                hiWebOsFrame.SettingSndAdvancedPage.rewriteDataOnly();
            }

            return;
        } else {
            hiWebOsFrame.createPage('dialog_headphone_insert', null, null, null, function (dialog_headphone_insert) {
                hiWebOsFrame.dialog_headphone_insert = dialog_headphone_insert;
                if (typeof callByStartLiveTVFirst != UNDEFINED_DEFSTR) {
                    var inertTVMuteState = model.sound.getHeadphoneInsertTvMute();
                    DBG_INFO('model.sound.getHeadphoneInsertTvMute(): ' + inertTVMuteState);
                    dialogHeadphoneInsert.setMuteTVState(Num2Bool(inertTVMuteState));
                    return;
                } else {
                    DBG_INFO('model.sound.setHeadphoneInsertTvMute(1)');
                    model.sound.setHeadphoneInsertTvMute(1);
                    dialogHeadphoneInsert.setMuteTVState(true);
                }
                popUpHeadphoneInsertDialog();
            });
            if (hiWebOsFrame.getCurrentArea() == "EU" && !!curPage && curPage.id == 'setting_sys_qs_page') { //接入耳机Headphone选项出现
                PageDateQuickSet.setting_headphone_ul.disable = false;
                $('#setting_headphone_ul').css('display', 'block');
                curPage.rewriteDataOnly();
            }

            if ('EU' == InitArea && curPage.id == 'setting_snd_advanced_settings') {
                DBG_INFO("'EU' == InitArea && curPage.id == 'setting_snd_advanced_settings', rewriteDataOnly");
                PageDataSettingSndAdvanced.operateData.headPhoneInsert = 1;
                hiWebOsFrame.SettingSndAdvancedPage.rewriteDataOnly();
            }
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function getHeadphoneInsertTvMuteState() {
    try {
        //var insertTvMute = 0;
        if (null == HEADPHONE_INSERT_TVMUTE) {
            HEADPHONE_INSERT_TVMUTE = 0;
            if ('EU' == InitArea) {
                HEADPHONE_INSERT_TVMUTE = model.sound.getHeadphoneInsertTvMute();
                DBG_INFO('model.sound.getHeadphoneInsertTvMute()' + HEADPHONE_INSERT_TVMUTE);
                typeof HEADPHONE_INSERT_TVMUTE == UNDEFINED_DEFSTR && (HEADPHONE_INSERT_TVMUTE = 0);
            }
        }

        return HEADPHONE_INSERT_TVMUTE;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onHeadphoneInsertTvMuteChaged = function (val) {
    try {
        DBG_INFO('onHeadphoneInsertTvMuteChaged: ' + val);

        if (HEADPHONE_INSERT_TVMUTE != val) {
            HEADPHONE_INSERT_TVMUTE = val;
            DBG_INFO('set HEADPHONE_INSERT_TVMUTE = ' + val);

            if (!!hiWebOsFrame.SettingSndAdvancedPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingSndAdvancedPage.id) {

                if (PageDataSettingSndAdvanced.setting_snd_head_phone_mode_cmp.DataSelectedIndex != val) {
                    DBG_INFO('hiWebOsFrame.SettingSndAdvancedPage Exist, rewriteDataOnly');
                    PageDataSettingSndAdvanced.setting_snd_head_phone_mode_cmp.DataSelectedIndex = val;
                    PageDataSettingSndAdvanced.setting_snd_head_phone_mode_cmp.SelectedIndex = val;
                    PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_mode_cmp.DataSelectedIndex = val;
                    PageDataSettingSndAdvanced.operateData.setting_snd_head_phone_mode_cmp.SelectedIndex = val;
                    hiWebOsFrame.SettingSndAdvancedPage.rewriteDataOnly();
                } else {
                    DBG_INFO('PageDataSettingSndAdvanced.setting_snd_head_phone_mode_cmp.DataSelectedIndex == val, do nothing');
                }

            } else {
                DBG_INFO('hiWebOsFrame.SettingSndAdvancedPage not exist, do nothing');
            }
        } else {
            DBG_INFO('HEADPHONE_INSERT_TVMUTE: ' + HEADPHONE_INSERT_TVMUTE + ", do nothing");
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
};


function SettingPicChaged() { //
    try {
        model.video.onEnumPictureModeChaged = onEnumPictureModeChaged;
        model.video.onBrightnessChaged = onBrightnessChaged;
        model.video.onContrastChaged = onContrastChaged;
        model.video.onColourIntensityChaged = onColourIntensityChaged;
        model.video.onEnumZoomChaged = onEnumZoomChaged;
        model.video.onApplyModeChaged = onPicApplyModeChaged;


        if (!!PICTURE_3D_SURPPORT) {
            model.video.onEnum3dModeChaged = onEnum3dModeChaged;
            model.video.on3d3dto2dChaged = on3d3dto2dChaged;
            //内部函数清空，此处不再影响firPage刷新disableItem
            model.video.on3dExistChaged = on3dExistChaged;

//            model.video.on3dModeExistChaged = on3dModeExistChaged;
//            model.video.on3dLrswitchExistChaged = on3dLrswitchExistChaged;
//            model.video.on3dViewPointExistChaged = on3dLrswitchExistChaged;
//            model.video.on3dDepthExistChaged = on3dDepthExistChaged;
//            model.video.on3d3dto2dExistChaged = on3d3dto2dExistChaged;
        }


    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

function SettingPicInit() {
    try {
        SettingPicModeInit();
        SettingPicApplyModeInit();
        SettingPicBrtnesCtstColorInit();
        SettingPicAspectRatioInit();
        //SettingPic3DInit();
//        SettingPicBackLightInit();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PicModeMid2UI(midVal) {
    try {
        var mid2UIJson = isHDRSuport ? {0:0, 1:3, 2:4, 3:1, 4:2}:{0: 0, 1: 4, 2: 1, 3: 2, 4: 3};
        return mid2UIJson[midVal];
        //UI                Standard-  -Natural-   Theatre -        Game    -Dynamic
        //UI                Standard - Cinema day - Cinema night - PC/Game - Dynamic -
        //picModeVecOld: ["Standard", "Dynamic", "Natural", "Theatre", "Game", "Sport"];
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PicModeUI2Mid(uiVal) {
    try {
        var ui2MidJson = isHDRSuport ? {0:0, 1:3, 2:4, 3:1, 4:2}:{0: 0, 1: 2, 2: 3, 3: 4, 4: 1};
        return ui2MidJson[uiVal];
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
try{
    isHDRSuport = tv ? model.video.getHDRSupport() : 1;
    DBG_INFO("model.video.getHDRSupport():" + isHDRSuport);
}catch (ex) {
    DBG_ERROR(ex.message);
}
function SettingPicModeInit() {
    try {
        var picModeMid = tv ? model.video.getEnumPictureMode() : 1;
        DBG_INFO("model.video.getEnumPictureMode()" + picModeMid);

        var picMode = PicModeMid2UI(picModeMid);
        try{
            var picHDRModeEnable = tv ? model.video.getHDRMode() : 1;
            DBG_INFO("model.video.getHDRMode()" + picHDRModeEnable);
        }catch (ex) {
            DBG_ERROR(ex.message);
        }
        var picGameEnable = (!isCurrentAppHimedia() && (livetvmain.getCurrentSourceInnerId() != SourceList.TV));
        DBG_INFO('picGameEnable: ' + picGameEnable + "[!isCurrentAppHimedia(): " + (!isCurrentAppHimedia()) + ", livetvmain.getCurrentSourceInnerId() != SourceList.TV: " + (livetvmain.getCurrentSourceInnerId() != SourceList.TV) + "]");

        //修改二级列表数据
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.picData.picModeVec[picMode];
        }

        if (typeof PageDataPicModeData != UNDEFINED_DEFSTR) {
            var picModeOpeData = PageDataPicModeData.operateData;
            NaviBarInitEasy.call(this, picModeOpeData, "setting_pic_mode_cmp", picMode);
            picModeOpeData.setting_pic_mode_cmp.disableItem = [];

            (isHDRSuport && picHDRModeEnable == false) && (picModeOpeData.setting_pic_mode_cmp.disableItem.push(4));
            if(isHDRSuport && picGameEnable == false){
                (picGameEnable == false) && (picModeOpeData.setting_pic_mode_cmp.disableItem.push(2));
            }else{
                (picGameEnable == false) && (picModeOpeData.setting_pic_mode_cmp.disableItem.push(3));
            }
            DBG_INFO("picModeOpeData.setting_pic_mode_cmp.disableItem: " + picModeOpeData.setting_pic_mode_cmp.disableItem);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicApplyModeInit() {
    try {
        var picApplyModeTmp = tv ? model.video.getApplyMode() : 0;
        DBG_INFO("model.video.getApplyMode()" + picApplyModeTmp);

        var picApplyMode = ({0: 1, 1: 0})[picApplyModeTmp];


        //修改二级列表数据
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicApplyMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.picData.picApplyModeVec[picApplyMode];
        }

        if (typeof PageDataSettingPicApplyMode != UNDEFINED_DEFSTR) {
            var picApplyModeOpeData = PageDataSettingPicApplyMode.operateData;
            NaviBarInitEasy.call(this, picApplyModeOpeData, "setting_pic_apply_mode_cmp", picApplyMode);
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingPicBrtnesCtstColorInit() {

    try {
        DBG_INFO("SettingPicBrtnesCtstColorInit()");

        var picBrightness = model.video.getBrightness();
        DBG_INFO('model.video.getBrightness(): ' + picBrightness);
        var picContrast = model.video.getContrast();
        DBG_INFO('model.video.getContrast(): ' + picContrast);
        var picColor = model.video.getColourIntensity();
        DBG_INFO('model.video.getColourIntensity(): ' + picColor);

        if (typeof (PageDataBrtnesCtrstColorData) != UNDEFINED_DEFSTR) {
            var brtCtrColorOpeData = PageDataBrtnesCtrstColorData.operateData;
            SliderInitEasy.call(this, brtCtrColorOpeData, "setting_pic_brightness", picBrightness);
            SliderInitEasy.call(this, brtCtrColorOpeData, "setting_pic_contrast", picContrast);
            SliderInitEasy.call(this, brtCtrColorOpeData, "setting_pic_color", picColor);
        }

        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicBrightness].setting_first_content_text2.Data = picBrightness;
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicContrast].setting_first_content_text2.Data = picContrast;
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicColor].setting_first_content_text2.Data = picColor;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


}

function SettingPicAspectRatioInit() {
    try {
        var picZoomMode = tv ? model.video.getEnumZoom() : 5;
        DBG_INFO("model.video.getEnumZoom: " + picZoomMode);


        //修改二级列表数据
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicAspectRatio].setting_first_content_text2.Data = PageDataFirstCls.operateData.picData.picZoomModeVec[picZoomMode];
        }

        if (typeof PageDataPicAspectRatioData != UNDEFINED_DEFSTR) {
            var picAcpectRatioOpeData = PageDataPicAspectRatioData.operateData;
            NaviBarInitEasy.call(this, picAcpectRatioOpeData, "setting_pic_aspect_ratio_cmp", picZoomMode);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
    //try {
    //    var curSourceVideoFormat = model.tvservice.getCurrentSourceVideoFormat();
    //    debugPrint("model.tvservice.getCurrentSourceVideoFormat:" + JSON.stringify(curSourceVideoFormat));
    //    if (curSourceVideoFormat.length > 0) {
    //        var array = curSourceVideoFormat.split(",");
    //        if (array.length > 1) {
    //            DBG_INFO("PageDataPicAspectRatioData.operateData.zoomWidth and zoomHeight:" + array[0] + array[1]);
    //            if (typeof PageDataPicAspectRatioData != UNDEFINED_DEFSTR) {
    //                PageDataPicAspectRatioData.operateData.zoomWidth = array[0];
    //                PageDataPicAspectRatioData.operateData.zoomHeight = array[1];
    //            }
    //        }
    //    }
    //} catch (ex) {
    //    DBG_ERROR(ex.message);
    //}
}

function SettingPicBackLightInit() {
    try {
        var localDimmingSupport = tv ? model.video.getLocalDimmingExist() : 0;
        DBG_INFO('model.video.getLocalDimmingExist(): ' + localDimmingSupport);
        if (typeof (PageDataSettingPicBackLight) != UNDEFINED_DEFSTR) {
            PageDataSettingPicBackLight.operateData.localDimmingSupport = localDimmingSupport;

            //if (0 == PageDataSettingPicBackLight.operateData.localDimmingSupport) {
            //    PageDataSettingPicBackLight.operateData.setting_pic_dynamic_control_cmp.disable = false;
            //    PageDataSettingPicBackLight.operateData.setting_pic_localdimming_switch_cmp.disable = true;
            //} else {
            //    PageDataSettingPicBackLight.operateData.setting_pic_dynamic_control_cmp.disable = true;
            //    PageDataSettingPicBackLight.operateData.setting_pic_localdimming_switch_cmp.disable = false;
            //}

            PageDataSettingPicBackLight.operateData.setting_pic_dynamic_control_cmp.disable = true;
            PageDataSettingPicBackLight.operateData.setting_pic_localdimming_switch_cmp.disable = true;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picBacklightDynamic = model.video.getDynamicBacklight();
        DBG_INFO("model.video.getDynamicBacklight(): " + picBacklightDynamic);

        if (typeof (PageDataSettingPicBackLight) != UNDEFINED_DEFSTR) {
            var PicBaclightOpeData = PageDataSettingPicBackLight.operateData;
            NaviBarInitEasy.call(this, PicBaclightOpeData, 'setting_pic_dynamic_control_cmp', picBacklightDynamic);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    //try {
    //    var localDimming = model.video.getEnumLocalDimming();
    //    DBG_INFO('model.video.getEnumLocalDimming(): ' + localDimming);
    //    if (typeof (PageDataSettingPicBackLight) != UNDEFINED_DEFSTR) {
    //        var PicBaclightOpeData = PageDataSettingPicBackLight.operateData;
    //        FlipSwitchInitEasy.call(this, PicBaclightOpeData, 'setting_pic_localdimming_switch_cmp', localDimming);
    //    }
    //} catch (ex) {
    //    DBG_ERROR(ex.message);
    //}
    try {
        var picBacklightVal = model.video.getBacklight();
        DBG_INFO("model.video.getBacklight(): " + picBacklightVal);

        if (typeof (PageDataSettingPicBackLight) != UNDEFINED_DEFSTR) {
            var PicBaclightOpeData = PageDataSettingPicBackLight.operateData;
            SliderInitEasy.call(this, PicBaclightOpeData, 'setting_pic_backlight_backlight', picBacklightVal);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


//    if ("us" == TV_MARKET) {
//        try {
//            var picEcoSensor = model.video.getEcoSensor();
//            DBG_INFO("model.video.getEcoSensor(): " + picEcoSensor);
//
//            if (typeof (PageDataBacklight) != UNDEFINED_DEFSTR) {
//                PageDataBacklight.operateData.switch_backLight_flipSwitch.switchType = picBacklightVal;
//            }
//        } catch (ex) {
//            DBG_ERROR(ex.message);
//        }
//
//        try {
//            var picMiniBacklightVal = model.video.getMinimumBacklight();
//            DBG_INFO("model.video.getMinimumBacklight(): " + picMiniBacklightVal);
//            if (typeof (PageDataBacklight) != UNDEFINED_DEFSTR) {
//                PageDataBacklight.DepthSlider.Data.setDefalutValue = picMiniBacklightVal;
//            }
//        } catch (ex) {
//            DBG_ERROR(ex.message);
//        }
//        try {
//            var picMode = model.video.getEnumPictureMode();
//            if (typeof (PageDataBacklight) != UNDEFINED_DEFSTR) {
//                if (3 == picMode) {
//                    DBG_INFO("pis Backlight slider and span set disable");
//                    PageDataBacklight.BackLightSlider.disable = true;
//                    PageDataBacklight.BackLightspan.disable = true;
//                } else {
//                    DBG_INFO("pis Backlight slider and span set enable");
//                    PageDataBacklight.BackLightSlider.disable = false;
//                    PageDataBacklight.BackLightspan.disable = false;
//                }
//            }
//        } catch (ex) {
//            DBG_ERROR(ex.message);
//        }
//    }
}

function SettingPicAdvancedInit() {

    try {
        if (typeof (PageDataPicAdvanced) != UNDEFINED_DEFSTR) {
            PageDataPicAdvanced.operateData.pic3DSupport = tv ? PICTURE_3D_SURPPORT : 1;

            PageDataPicAdvanced.operateData.setting_pic_advanced_3d_cmp.disable = true;

            if (PageDataPicAdvanced.operateData.pic3DSupport) {
                var pic3DExist = tv ? model.video.get3dExist() : 1;
                DBG_INFO('model.video.get3dExist(): ' + pic3DExist);
                if (1 == pic3DExist) {
                    PageDataPicAdvanced.operateData.setting_pic_advanced_3d_cmp.disable = false;
                }
            }
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var localDimmingSupport = tv ? model.video.getLocalDimmingExist() : 1;
        DBG_INFO('model.video.getLocalDimmingExist(): ' + localDimmingSupport);
        var localDimmingAdvancedSupport = tv ? model.video.getLocalDimmingAdvancedSupport() : 0;
        DBG_INFO('model.video.localDimmingAdvancedSupport(): ' + localDimmingAdvancedSupport);

        if (typeof (PageDataPicAdvanced) != UNDEFINED_DEFSTR) {
            //简单化，底层为递进关系，UI为单纯显示关系
            PageDataPicAdvanced.operateData.localDimmingUIShow = (localDimmingSupport == 1) && (localDimmingAdvancedSupport == 0);
            PageDataPicAdvanced.operateData.localDimmingAdvancedUIShow = localDimmingAdvancedSupport && localDimmingSupport;

            DBG_INFO('localDimmingUIShow: ' + PageDataPicAdvanced.operateData.localDimmingUIShow);
            DBG_INFO('localDimmingAdvancedUIShow: ' + PageDataPicAdvanced.operateData.localDimmingAdvancedUIShow);
            if (PageDataPicAdvanced.operateData.localDimmingUIShow) {
                PageDataPicAdvanced.operateData.setting_pic_advanced_local_dimming_switch_cmp.disable = false;
            } else {
                PageDataPicAdvanced.operateData.setting_pic_advanced_local_dimming_switch_cmp.disable = true;
            }

            if (PageDataPicAdvanced.operateData.localDimmingAdvancedUIShow) {
                PageDataPicAdvanced.operateData.setting_pic_advanced_local_dimming_advanced_cmp.disable = false;
            } else {
                PageDataPicAdvanced.operateData.setting_pic_advanced_local_dimming_advanced_cmp.disable = true;
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    try {
        if (typeof (PageDataPicAdvanced) != UNDEFINED_DEFSTR) {
            var picAdvOpeData = PageDataPicAdvanced.operateData;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var localDimming = tv ? model.video.getEnumLocalDimming() : 0;
        DBG_INFO('model.video.getEnumLocalDimming(): ' + localDimming);
        PageDataPicAdvanced.operateData.localDimmingUIShow && FlipSwitchInitEasy.call(this, picAdvOpeData, "setting_pic_advanced_local_dimming_switch_cmp", Num2Bool(localDimming));
        PageDataPicAdvanced.operateData.localDimmingAdvancedUIShow && NaviBarInitEasy.call(this, picAdvOpeData, 'setting_pic_advanced_local_dimming_advanced_cmp', localDimming);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        //move color gamut function to balance
        var colorGamutSupport = 0;//tv ? model.video.getColorGamutSupport() : 1;
        //DBG_INFO('model.video.getColorGamutSupport(): ' + colorGamutSupport);

        if (typeof (PageDataPicAdvanced) != UNDEFINED_DEFSTR) {
            PageDataPicAdvanced.operateData.colorGamutSupport = colorGamutSupport;

            if (PageDataPicAdvanced.operateData.colorGamutSupport) {
                PageDataPicAdvanced.operateData.setting_pic_advanced_color_gamut_cmp.disable = false;
            } else {
                PageDataPicAdvanced.operateData.setting_pic_advanced_color_gamut_cmp.disable = true;
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var colorGamut = tv ? model.video.getColorGamut() : 0;
        DBG_INFO('model.video.getColorGamut(): ' + colorGamut);
        NaviBarInitEasy.call(this, picAdvOpeData, 'setting_pic_advanced_color_gamut_cmp', colorGamut);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picOverScan = tv ? model.video.getOverscan() : 0;
        DBG_INFO("model.video.getOverscan(): " + picOverScan);
        FlipSwitchInitEasy.call(this, picAdvOpeData, "setting_pic_advanced_overscan_switch_cmp", Num2Bool(picOverScan));
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picTint = tv ? model.video.getTint() : 0;
        DBG_INFO("model.video.getTint(): " + picTint);
        picAdvOpeData.setting_pic_advanced_tint_text_1.Data = PictureTintValue2UI(picTint);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picSharpness = tv ? model.video.getSharpness() : 0;
        DBG_INFO("model.video.getSharpness(): " + picSharpness);
        picAdvOpeData.setting_pic_advanced_sharpness_text_1.Data = picSharpness;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {   //需要根据机型判断是否支持
        var picSmooth = tv ? model.video.getEnumSmoothMotion() : 0;
        DBG_INFO("model.video.getEnumSmoothMotion(): " + picSmooth);
        NaviBarInitEasy.call(this, picAdvOpeData, "setting_pic_advanced_ultra_smooth_motion_cmp", picSmooth);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picNoise = tv ? model.video.getEnumNoiseReduction() : 0;
        DBG_INFO("model.video.getEnumNoiseReduction(): " + picNoise);
        NaviBarInitEasy.call(this, picAdvOpeData, "setting_pic_advanced_noise_reduction_cmp", picNoise);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picAdaptiveContrast = tv ? model.video.getAdaptiveContrast() : 0;
        DBG_INFO("model.video.getAdaptiveContrast(): " + picAdaptiveContrast);
        NaviBarInitEasy.call(this, picAdvOpeData, "setting_pic_advanced_adaptive_contrast_cmp", picAdaptiveContrast);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var colorTemperature = tv ? model.video.getEnumColourTemperature() : 0;
        DBG_INFO("model.video.getEnumColourTemperature(): " + colorTemperature);
        NaviBarInitEasy.call(this, picAdvOpeData, "setting_pic_advanced_color_temperature_cmp", colorTemperature);

    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    try {
        var picCurrentSource = tv ? model.source.getCurrentSource() : 2;
        DBG_INFO("model.source.getCurrentSource(): " + picCurrentSource);

        if (2 == picCurrentSource) {   //只有在Component下时才可以使用
            DBG_INFO("setting_pic_advanced_display_cmp enabled");
            picAdvOpeData.setting_pic_advanced_display_cmp.disable = false;
        } else {
            DBG_INFO("setting_pic_advanced_display_cmp disabled");
            picAdvOpeData.setting_pic_advanced_display_cmp.disable = true;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picOverscanUsefulState = tv ? getPicOverscanUsefulState() : true;
        DBG_INFO('picOverscanUsefulState: ' + picOverscanUsefulState);
        picAdvOpeData.setting_pic_advanced_overscan_switch_cmp.disable = !picOverscanUsefulState;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var memcStateUseful = tv ? getMemcUsefulState() : true;
        DBG_INFO('memcStateUseful: ' + memcStateUseful);
        picAdvOpeData.setting_pic_advanced_ultra_smooth_motion_cmp.disable = !memcStateUseful;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var noiseReductionUseful = tv ? getPicNoiseReductionUsefulState() : true;
        DBG_INFO('noiseReductionUseful: ' + noiseReductionUseful);
        picAdvOpeData.setting_pic_advanced_noise_reduction_cmp.disable = !noiseReductionUseful;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var adaptiveContrastUseful = tv ? getPicAdaptiveContrastUsefulState() : true;
        DBG_INFO('adaptiveContrastUseful: ' + adaptiveContrastUseful);
        picAdvOpeData.setting_pic_advanced_adaptive_contrast_cmp.disable = !adaptiveContrastUseful;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingPicWhiteBalanceInit() {

    try {
        var colorGamutSupport = tv ? model.video.getColorGamutSupport() : 1;
        DBG_INFO('model.video.getColorGamutSupport(): ' + colorGamutSupport);

        PageDataPicWhiteBalance.operateData.colorGamutSupport = colorGamutSupport;

        if (PageDataPicWhiteBalance.operateData.colorGamutSupport) {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_color_gamut_cmp.disable = false;
        } else {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_color_gamut_cmp.disable = true;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var colorGamut = tv ? model.video.getColorGamut() : 0;
        DBG_INFO('model.video.getColorGamut(): ' + colorGamut);
        NaviBarInitEasy.call(this, PageDataPicWhiteBalance.operateData, 'setting_pic_white_balance_2point_color_gamut_cmp', colorGamut);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    try {
        var picROffset = model.video.getRoffset();
        DBG_INFO("model.video.getRoffset(): " + picROffset);
        if (typeof (PageDataPicWhiteBalance) != UNDEFINED_DEFSTR) {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_r_offset_text_1.Data = picROffset;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picGOffset = model.video.getGoffset();
        DBG_INFO("model.video.getGoffset(): " + picGOffset);
        if (typeof (PageDataPicWhiteBalance) != UNDEFINED_DEFSTR) {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_g_offset_text_1.Data = picGOffset;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picBOffset = model.video.getBoffset();
        DBG_INFO("model.video.getBoffset(): " + picBOffset);
        if (typeof (PageDataPicWhiteBalance) != UNDEFINED_DEFSTR) {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_b_offset_text_1.Data = picBOffset;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picRGain = model.video.getRgain();
        DBG_INFO("model.video.getRgain(): " + picRGain);
        if (typeof (PageDataPicWhiteBalance) != UNDEFINED_DEFSTR) {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_r_gain_text_1.Data = picRGain;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picGGain = model.video.getGgain();
        DBG_INFO("model.video.getGgain(): " + picGGain);
        if (typeof (PageDataPicWhiteBalance) != UNDEFINED_DEFSTR) {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_g_gain_text_1.Data = picGGain;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var picBGain = model.video.getBgain();
        DBG_INFO("model.video.getBgain(): " + picBGain);
        if (typeof (PageDataPicWhiteBalance) != UNDEFINED_DEFSTR) {
            PageDataPicWhiteBalance.operateData.setting_pic_white_balance_2point_b_gain_text_1.Data = picBGain;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingWhiteBalance10PointInit() {
    try {

        try {
            var colorGamutSupport = tv ? model.video.getColorGamutSupport() : 0;
            DBG_INFO('model.video.getColorGamutSupport(): ' + colorGamutSupport);

            PageDataPicWhiteBalance10Point.operateData.colorGamutSupport = colorGamutSupport;

            if (PageDataPicWhiteBalance10Point.operateData.colorGamutSupport) {
                PageDataPicWhiteBalance10Point.operateData.setting_pic_white_balance_10point_color_gamut_cmp.disable = false;
            } else {
                PageDataPicWhiteBalance10Point.operateData.setting_pic_white_balance_10point_color_gamut_cmp.disable = true;
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        try {
            var colorGamut = tv ? model.video.getColorGamut() : 0;
            DBG_INFO('model.video.getColorGamut(): ' + colorGamut);
            NaviBarInitEasy.call(this, PageDataPicWhiteBalance10Point.operateData, 'setting_pic_white_balance_10point_color_gamut_cmp', colorGamut);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }


        try {
            var picPoint10 = model.video.getWhite_balance10Point();
            DBG_INFO("model.video.getWhite_balance10Point(): " + picPoint10);
            if (typeof PageDataPicWhiteBalance10Point != UNDEFINED_DEFSTR) {
                FlipSwitchInitEasy(PageDataPicWhiteBalance10Point.operateData, 'setting_pic_white_balance_10point_10point_switch_cmp', Num2Bool(picPoint10));
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        try {
            var picPointLevel = model.video.getLevel();
            DBG_INFO("model.video.getLevel(): " + picPointLevel);
            if (typeof PageDataPicWhiteBalance10Point != UNDEFINED_DEFSTR) {
                PageDataPicWhiteBalance10Point.operateData.setting_pic_white_balance_10point_level_text_1.Data = PageDataPicWhiteBalance10Point.operateData.LevelTextVector[picPointLevel];
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        try {
            var picPoint10Red = model.video.getRed();
            DBG_INFO("model.video.getRed(): " + picPoint10Red);
            if (typeof PageDataPicWhiteBalance10Point != UNDEFINED_DEFSTR) {
                PageDataPicWhiteBalance10Point.operateData.setting_pic_white_balance_10point_red_text_1.Data = picPoint10Red;
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        try {
            var picPoint10Green = model.video.getGreen();
            DBG_INFO("model.video.getGreen(): " + picPoint10Green);
            if (typeof PageDataPicWhiteBalance10Point != UNDEFINED_DEFSTR) {
                PageDataPicWhiteBalance10Point.operateData.setting_pic_white_balance_10point_green_text_1.Data = picPoint10Green;
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        try {
            var picPoint10Blue = model.video.getBlue();
            DBG_INFO("model.video.getBlue(): " + picPoint10Blue);
            if (typeof PageDataPicWhiteBalance10Point != UNDEFINED_DEFSTR) {
                PageDataPicWhiteBalance10Point.operateData.setting_pic_white_balance_10point_blue_text_1.Data = picPoint10Blue;
            }
        } catch (ex) {
            DBG_ERROR(ex.message);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


var onEnumPictureModeChaged = function (val) {
    try {
        DBG_INFO("onEnumPictureModeChaged: " + val);
        var picMode = PicModeMid2UI(val);
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.picData.picModeVec[picMode];
            if (hiWebOsFrame.settingsFirst && hiWebOsFrame.settingsFirst.visible) {
                hiWebOsFrame.settingsFirst.rewriteDataOnly();
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

//todo 注册applyAllSettings回调

var onBrightnessChaged = function (val) {
    try {
        DBG_INFO("onBrightnessChaged: " + val);
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicBrightness].setting_first_content_text2.Data = val;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onContrastChaged = function (val) {
    try {
        DBG_INFO("onContrastChaged: " + val);
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicContrast].setting_first_content_text2.Data = val;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onColourIntensityChaged = function (val) {
    try {
        DBG_INFO("onColourIntensityChaged: " + val);
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicColor].setting_first_content_text2.Data = val;
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onEnumZoomChaged = function (val) {
    try {
        DBG_INFO("onEnumZoomChaged: " + val);
        if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
            DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
            PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicAspectRatio].setting_first_content_text2.Data = PageDataFirstCls.operateData.picData.picZoomModeVec[val];
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
};

var onPicApplyModeChaged = function (val) {
    DBG_INFO("onPicApplyModeChaged: " + val);
    var picApplyMode = ({0: 1, 1: 0})[val];
    if (typeof(PageDataFirstCls) != UNDEFINED_DEFSTR) {
        DBG_INFO("typeof(PageDataFirstCls) != UNDEFINED_DEFSTR");
        PageDataFirstCls.operateData.picData.setting_first_ul2.Data[FirPageSndIdx.PicApplyMode].setting_first_content_text2.Data = PageDataFirstCls.operateData.picData.picApplyModeVec[picApplyMode];
        if (!!hiWebOsFrame.settingsFirst && hiWebOsFrame.settingsFirst.visible) {
            !!hiWebOsFrame.settingsFirst.rewriteDataOnly();
        }
    }
};

function PictureTintValue2UI(val) {
    try {
        if (val < 0) {
            return 'R' + (-val);
        } else if (val > 0) {
            return 'G' + val;
        } else {
            return 0;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


/**$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CI Start     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/


var PageDataChnlCIData = {
    "setting_chnl_CI_head": {Data: "CA module"},
    "setting_chnl_CI_title_0": {Data: ""},
    "setting_chnl_CI_title_1": {Data: ""},
    "setting_chnl_CI_upgrade_percent_text_0": {Data: "Upgrade Progress:"},
    "setting_chnl_CI_upgrade_percent_text_1": {Data: ""},
//    "setting_chnl_CI_input": {Data: ''},
    "setting_chnl_CI_input_container": {
        "Data": {
            "setting_chnl_CI_input": {"Data": ""}
        }
    },
    "setting_chnl_CI_input_foot_text": {Data: ''},
    "setting_chnl_CI_input_btn": {Data: 'OK'},
    "setting_chnl_CI_upgrade_result_btn_ok": {Data: 'OK'},
    "setting_chnl_CI_input_placeholder": {Data: 'invoke virtual keyboard with OK button'},
    "setting_chnl_CI_ul": {
        SelectedIndex: 0,
        Data: [
            {
                ci_item: {Data: "list0"}
            },
            {
                ci_item: {Data: "list1"}
            },
            {
                ci_item: {Data: "list2"}
            },
            {
                ci_item: {Data: "list3"}
            },
            {
                ci_item: {Data: "list4"}
            }
        ]

    },
    "setting_chnl_CI_foot_tip": {Data: 'Press "OK" select,Press "Exit" return'},
    "operateData": {
        closedAllPageFuncCalled: false,
        "InputPlaceholderMarqueeLength": 23,
        "setting_chnl_CI_head": {Data: "CA module"},
        "setting_chnl_CI_title_0": {Data: ""},
        "setting_chnl_CI_title_1": {Data: ""},
//        "setting_chnl_CI_upgrade_percent_text_0":{Data:""},
        "setting_chnl_CI_upgrade_percent_text_1": {Data: ""},
//        "setting_chnl_CI_input": {Data: ''},
        "setting_chnl_CI_input_foot_text": {Data: ''},
        "setting_chnl_CI_input_btn": {Data: 'OK'},
        "setting_chnl_CI_ul": {
            SelectedIndex: 0,
//            DataSelectedIndex: 0,
            Data: [
                {
                    ci_item: {Data: ""}
                }
            ]

        },
        "setting_chnl_CI_foot_tip": {Data: "Press 'OK' select,Press 'Exit' return"},
        "CIHeadText": {"CI_0": "CA module", /*"CI_0": "CA module 1", */"CI_1": "CA module 2"},
        "VerifyPinText": "Please Input Pin:",
        "UpgradeResultText": {
            "state_0": "Upgrade succeeded",
            "state_1": "Upgrade failed",
            "state_2": "Upgrade aborted"
        },
        "UpgradePercentText": "Upgrade Progress: ",
        "osdOrInputFlag": "osd",
        "EnumOsdInput": {
            OSD: "osd",
            INPUT: "input",
            UPGRADE_RESULT: "upgrade_result",
            UPGRADE_PROGRESS: "upgrade_progress"
        },
        "scrollStep": 0,
        "scrollHeight": 0
    },
    langData: {
        "CA module 1": ["CA module 1"],
        "CA module 2": ["CA module 2"],
        "CA module": ["CA module"],
        "invoke virtual keyboard with OK button": []
    },
    rewrite: "SettingChnlCIInfoRewrite"
};

//todo 后期优化
var OSDSlAndSessId = [0, 1];
var CIMenuPopModuleVector = ["livetv", "setting"]; //CI Menu菜单允许弹出的Module
var CIEnquiryPopModuleVector = ["livetv", "setting"];  //CI Enquiry允许弹出的Module
var CIMenuPopModulePageIdEnabled = {
    setting: ["setting_chnl_advanced", "setting_chnl_ci"] //enabled
};
var CIEnquiryPopModulePageIdEnabled = {
    setting: ["setting_chnl_advanced", "setting_chnl_ci"] //enabled
};

var CILiveTVDisableShowPageIdVec = ['livetv_password_dialog', 'livetv_search_dialog', 'livetv_channel_list'];

function SettingChnlCIInit() {
    try {
        //sessionId也许不需要；
        model.ci.ActionOpenCI(1, 2);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingChnlCIOnChaged() {
    try {
        model.ci.onCamCountChaged = onCamCountChaged;
        model.ci.onCIVStrMenuChaged = onCIVStrMenuChaged;
        model.ci.onCIVStrEnquiryChaged = onCIVStrEnquiryChaged;
        model.ci.onCamOpmessageChaged = onCamOpmessageChaged;
        model.ci.onUpgradeProgressChaged = onUpgradeProgressChaged;
        model.ci.onUpgradeResultChaged = onUpgradeResultChaged;
        model.ci.onCamPinStorageSupportChaged = onCamPinStorageSupportChaged;
        model.ci.onCamOpsearchEntryDisplayChaged = onCamOpsearchEntryDisplayChaged;

//        model.tvservice.onMessageCamIndexChaged = onMessageCamIndexChaged;

        model.servicelist.onListImportStatusChaged = onListImportStatusChaged;
        model.servicelist.onListExportStatusChaged = onListExportStatusChaged;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var CIStrNullTimer = null;

function CIStrNullFunc() {
    try {
        debugPrint("DBG_INFO:==>Now In CIStrNullFunc!!!--------------------------------------------------");
        var menuStr = model.ci.getCIVStrMenu();
        if (menuStr.length >= 2) {
            return;
        }

        var strEnquiry = model.ci.getCIVStrEnquiry();
        if (strEnquiry.length >= 2) {
            return;
        }

//        var strUpProgress = model.ci.getVstrUpgradeProgress();
//        if (strUpProgress.length >= 2) {
//            return;
//            /** $value \n
//             *     index[0]: slot-ID \n
//             *     index[1]: session-ID \n
//             *     index[2]: CAM name \n
//             *     index[3]: progress in percentage \n
//             *     index[4]: total estimated time for update \n
//             */
//        }
//
//        var strResult = model.ci.getVstrUpgradeResult();
//        if (strResult.length >= 2) {
//            return;
//            /**$value
//             *     index[0]: slot-ID
//             *     index[1]: session-ID
//             *     index[2]: CAM name
//             *     index[3]: result, see #ENUM_SL2_TVAPI_COMMON_INTF_VI32_UPGRADE_RESULT
//             *              --> 0, upgrade succeeded; 1, upgrade failed; 2, upgrade aborted
//             */
//        }

        if (!!hiWebOsFrame.SettingChnlCIPage && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlCIPage.id)) {
            hiWebOsFrame.SettingChnlCIPage.close();
            hiWebOsFrame.SettingChnlCIPage.destroy();
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onCamCountChaged = function (val) {
    try {
        DBG_INFO("onCamCountChaged: " + val);
        CHNL_CAM_COUNT = val;
        var curPage = hiWebOsFrame.getCurrentPage();
        if (!curPage) {
            DBG_INFO('hiWebOsFrame.getCurrentPage() is null, return');
        }


        if (!!hiWebOsFrame.SettingChnlAdvancedPage && curPage.id == hiWebOsFrame.SettingChnlAdvancedPage.id) {
            var ChnlAdvOpeData = PageDataSettingChnlAdvanced.operateData;
            ChnlAdvOpeData.setting_chnl_advanced_common_interface_cmp.disable = !Num2Bool(val);

            //首先全部置为disable [true],然后更新，精简代码
            DBG_INFO('fisrt set store pin and op entry disable default, enable if needed');
            ChnlAdvOpeData.setting_chnl_advanced_common_interface_store_pin_cmp.disable = true;
            ChnlAdvOpeData.setting_chnl_advanced_common_interface_op_entry_cmp.disable = true;

            try {
                if (false == ChnlAdvOpeData.setting_chnl_advanced_common_interface_cmp.disable) {
                    var CIStorePINSupport = model.ci.getCamPinStorageSupport();
                    DBG_INFO("model.ci.getCamPinStorageSupport(): " + CIStorePINSupport);
                    if (1 == CIStorePINSupport) {
                        DBG_INFO("1 == CIStorePINSupport, enable ci pin store cmp");
                        ChnlAdvOpeData.setting_chnl_advanced_common_interface_store_pin_cmp.disable = false;
                    }
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }

            try {
                if (false == ChnlAdvOpeData.setting_chnl_advanced_common_interface_cmp.disable) {
                    var opSearchEntryDisplay = model.ci.getCamOpsearchEntryDisplay();
                    DBG_INFO("model.ci.getCamOpsearchEntryDisplay(): " + opSearchEntryDisplay);
                    if (1 == opSearchEntryDisplay) {
                        DBG_INFO("1 == opSearchEntryDisplay, enable ci op search cmp");
                        ChnlAdvOpeData.setting_chnl_advanced_common_interface_op_entry_cmp.disable = false;
                    }
                }
            } catch (ex) {
                DBG_ERROR(ex.message);
            }

            hiWebOsFrame.SettingChnlAdvancedPage.rewriteDataOnly();
        } else if (!!hiWebOsFrame.settingsFirst/* && curPage.id == hiWebOsFrame.settingsFirst.id*/) {

            //先删除，然后视是否支持再添加
            while (-1 != $.inArray(FirPageSndIdx.ChnlAdvanced, PageDataFirstCls.operateData.settingdisablelist[2])) {    //存在,则删除
                PageDataFirstCls.operateData.settingdisablelist[2].splice($.inArray(FirPageSndIdx.ChnlAdvanced, PageDataFirstCls.operateData.settingdisablelist[2]), 1);
            }


            var chnlAdvEnable = CheckChnlAdvancedEnable();
            DBG_INFO('CheckChnlAdvancedEnable(): ' + chnlAdvEnable);
            if (false == chnlAdvEnable && "COL" != InitArea) {
                DBG_INFO('Changed chnlAdvanced disable operateData,[Add]');
                PageDataFirstCls.operateData.settingdisablelist[2].push(FirPageSndIdx.ChnlAdvanced);
            }
        } else {

        }


        //TODO 需要在此处更新界面是否Disable SettingFirst部分选项
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
};

function CheckCIModuleShouldShow() {
    try {
        if (false == ChkCurModInVec(CIMenuPopModuleVector) ||
            (hiWebOsFrame.getIsLocking() && 'setting_chnl_ci' != hiWebOsFrame.getCurrentPageId())) {   //查看是否在允许弹出的模块内
            DBG_INFO("false == ChkCurModInVec(CIMenuPopModuleVector) || (hiWebOsFrame.getIsLocking() && 'setting_chnl_ci' != hiWebOsFrame.getCurrentPageId())");
            //model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
            return false;
        }

        if (false == checkCurPageIdEnableInModule(CIMenuPopModulePageIdEnabled)) {   //查看是否在允许弹出的模块内
            DBG_INFO("false == checkCurPageIdEnableInModule(CIMenuPopModulePageIdEnabled)");
            //model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
            return false;
        }

        if (CILiveTVDisableShowPageIdVec.indexOf(hiWebOsFrame.getCurrentPageId()) > -1) {
            DBG_INFO('CILiveTVDisableShowPageIdVec.indexOf(hiWebOsFrame.getCurrentPageId()) > -1');
            return false;
        }

        return true;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onCIVStrMenuChaged = function (val) {
    try {
        DBG_INFO("onCIVStrMenuChaged, String length: " + val.length);

        clearTimeout(CIStrNullTimer);

        PrintVstrMenuChagedVal(val);

        if (val.length < 1) {
            DBG_INFO("onCIVStrMenuChaged length 0,ClearPageDataChnlCIData and CloseCIPageLaterIfExist");
            ClearPageDataChnlCIData();
            CloseCIPageLaterIfExist();
            return;
        }

        var menuStr = val;

        //刷新数据
        PageDataChnlCIData.operateData.osdOrInputFlag = PageDataChnlCIData.operateData.EnumOsdInput.OSD;

        OSDSlAndSessId[0] = menuStr[0];
        OSDSlAndSessId[1] = menuStr[1];

        if (false == CheckCIModuleShouldShow()) {
            DBG_INFO('CheckCIModuleShouldShow(), close ci menus, return;');
            model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
            return;
        }


        PageDataChnlCIData.operateData.setting_chnl_CI_head.Data = PageDataChnlCIData.operateData.CIHeadText.CI_0;
        //Title and foot text
        PageDataChnlCIData.operateData.setting_chnl_CI_title_0.Data = menuStr[2].toLocaleString();
        PageDataChnlCIData.operateData.setting_chnl_CI_title_1.Data = menuStr[3].toLocaleString();
        PageDataChnlCIData.operateData.setting_chnl_CI_foot_tip.Data = menuStr[4].toLocaleString();

        PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data = [];

        if (menuStr.length >= 7) {  //Ul Data
            for (var i = 6; i < menuStr.length; i++) {
                PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data.push({ci_item: {Data: menuStr[i].toLocaleString()}});
            }
            var tmpLength = PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data.length;
            for (var j = tmpLength - 1; j > 0; j--) {   //如果第一个为空的话，不删除。。
                if ("" == PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data[j].ci_item.Data || null == PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data[j].ci_item.Data) {
                    DBG_INFO("CI MenuStr Delete Null Item:" + j);
                    PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data.pop();
                } else {
                    break;
                }
            }

        } else {
            PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data = [
                {ci_item: {Data: "."}}
            ];
        }
        DBG_INFO("Aft menuString changed:" + JSON.stringify(PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data));


        if (!!hiWebOsFrame.SettingChnlCIPage && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlCIPage.id)) {
            DBG_INFO("hiWebOsFrame.SettingChnlCIPage already exist no need create");
//                PageDataChnlCIData.operateData.setting_chnl_CI_ul.DataSelectedIndex = 0;
            PageDataChnlCIData.operateData.setting_chnl_CI_ul.SelectedIndex = 0;
            hiWebOsFrame.SettingChnlCIPage.firstFocusId = "setting_chnl_CI_ul";
            hiWebOsFrame.SettingChnlCIPage.rewrite();
            hiWebOsFrame.SettingChnlCIPage.rewriteDataOnly();
            hiWebOsFrame.SettingChnlCIPage.hiFocus();
            CIToMenuStyle();
            RefreshCIScrollBar(PageDataChnlCIData);
        } else {

            hiWebOsFrame.createPage('setting_chnl_ci', null, null, null, function (SettingChnlCIPage) {
                DBG_INFO("hiWebOsFrame.SettingChnlCIPage not exist, create");
                var oriPage = hiWebOsFrame.getCurrentPage();
                if (false == CheckCIModuleShouldShow()) {
                    DBG_INFO('false == CheckCIModuleShouldShow(), CI page created, but originPage has been changed, return and show nothing!');
                    return;
                }

                if (hiWebOsFrame.isCurrentModule('livetv')) {
                    if (livetvmain.getCurrentSourceInnerId() == SourceList.TV) {
                        DBG_INFO("hiWebOsFrame.isCurrentModule('livetv'), do closeLiveTVModule()");
                        closeLiveTVModule();
                    } else {
                        DBG_INFO("curpage livetv but source not tv, return");
                        return;
                    }
                } else {
                    DBG_INFO('hiWebOsFrame.SettingChnlCIPage.origin != blankPage, not close livetv');
                }

                hiWebOsFrame.SettingChnlCIPage = SettingChnlCIPage;
                hiWebOsFrame.SettingChnlCIPage.origin = oriPage;
                DBG_INFO('hiWebOsFrame.SettingChnlCIPage.origin.id: ' + oriPage.id);

                PageDataChnlCIData.operateData.setting_chnl_CI_ul.SelectedIndex = 0;
                hiWebOsFrame.SettingChnlCIPage.firstFocusId = "setting_chnl_CI_ul";

                SettingChnlCIPage.open();
                SettingChnlCIPage.hiFocus();
                CIToMenuStyle();
                RefreshCIScrollBar(PageDataChnlCIData);
                if (1 == PageDataChnlCIData.setting_chnl_CI_ul.Data.length
                    && 1 == PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data.length
                    && 0 == PageDataChnlCIData.setting_chnl_CI_ul.Data[0].ci_item.Data.length
                    && 0 == PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data[0].ci_item.Data.length) {

                    DBG_INFO("hiWebOsFrame.SettingChnlCIPage is blank item, CIStrNullFunc() called");
                    CIStrNullFunc();
                }
            });
        }


    } catch (ex) {
        DBG_ERROR(ex.message);
    }

}

var onCIVStrEnquiryChaged = function (val) {
    try {
        clearTimeout(CIStrNullTimer);

        DBG_INFO("onCIVStrEnquiryChaged changed");
        PrintVstrEnqChagedVal(val);

        if (val.length <= 1) {
            DBG_INFO("onCIVStrEnquiryChaged length <= 0, CloseCIPageLaterIfExist and return");
            CloseCIPageLaterIfExist();
            return;
        }

        var menuStr = val;

        //刷新数据
        PageDataChnlCIData.operateData.osdOrInputFlag = PageDataChnlCIData.operateData.EnumOsdInput.INPUT;

        OSDSlAndSessId[0] = menuStr[0];
        OSDSlAndSessId[1] = menuStr[1];

        //livetv_password_dialog 时需要显示 ci enquiry
        if('livetv_password_dialog' == hiWebOsFrame.getCurrentPageId()){
            DBG_INFO("'livetv_password_dialog' == hiWebOsFrame.getCurrentPageId(), CI Enquiry will show");
        } else {
            if (false == CheckCIModuleShouldShow()) {
                DBG_INFO('CheckCIModuleShouldShow(), close ci menus, return;');
                model.ci.ActionCloseMenus(OSDSlAndSessId[0], OSDSlAndSessId[1]);
                return;
            }
        }


        PageDataChnlCIData.operateData.setting_chnl_CI_head.Data = PageDataChnlCIData.operateData.CIHeadText.CI_0;

        //Title text and foot text
        PageDataChnlCIData.operateData.setting_chnl_CI_title_0.Data = menuStr[2].toLocaleString();
        PageDataChnlCIData.operateData.setting_chnl_CI_title_1.Data = menuStr[3].toLocaleString();
        PageDataChnlCIData.operateData.setting_chnl_CI_foot_tip.Data = "";
        PageDataChnlCIData.operateData.setting_chnl_CI_input_foot_text.Data = menuStr[4].toLocaleString();

        if (!!hiWebOsFrame.SettingChnlCIPage && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlCIPage.id)) {
            DBG_INFO("CI_INPUT CI page exist, no need to creat again, CI Page Rewrite");
            hiWebOsFrame.SettingChnlCIPage.firstFocusId = "setting_chnl_CI_input_container";
            hiWebOsFrame.SettingChnlCIPage.rewrite();
            hiWebOsFrame.SettingChnlCIPage.rewriteDataOnly();
            hiWebOsFrame.SettingChnlCIPage.hiFocus();
            CIToEnquiryStyle();
            SettingChnlCIPlaceholderAddMarquee();
        } else {

            hiWebOsFrame.createPage('setting_chnl_ci', null, null, null, function (SettingChnlCIPage) {
                DBG_INFO("hiWebOsFrame.SettingChnlCIPage not exist, create");
                var oriPage = hiWebOsFrame.getCurrentPage();
                if('livetv_password_dialog' == hiWebOsFrame.getCurrentPageId()){
                    DBG_INFO("'livetv_password_dialog' == hiWebOsFrame.getCurrentPageId(), CI Enquiry will show");
                } else {
                    if (false == CheckCIModuleShouldShow()) {
                        DBG_INFO('false == CheckCIModuleShouldShow(), CI page created, but originPage has been changed, return and show nothing!');
                        return;
                    }
                }

                if (hiWebOsFrame.isCurrentModule('livetv')) {
                    if (livetvmain.getCurrentSourceInnerId() == SourceList.TV) {
                        DBG_INFO("hiWebOsFrame.isCurrentModule('livetv'), do closeLiveTVModule()");
                        closeLiveTVModule();
                    } else {
                        DBG_INFO("curpage livetv but source not tv, return");
                        return;
                    }
                } else {
                    DBG_INFO('hiWebOsFrame.SettingChnlCIPage.origin != blankPage, not close livetv');
                }

                hiWebOsFrame.SettingChnlCIPage = SettingChnlCIPage;
                hiWebOsFrame.SettingChnlCIPage.origin = oriPage;
                DBG_INFO('hiWebOsFrame.SettingChnlCIPage.origin.id: ' + oriPage.id);
                hiWebOsFrame.SettingChnlCIPage.firstFocusId = "setting_chnl_CI_input_container";

                SettingChnlCIPage.open();
                SettingChnlCIPage.hiFocus();
                CIToEnquiryStyle();
            });
        }


    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onCamOpmessageChaged = function (val) {
    try {
        CI_OP_SEARCH_FLAG = 0;
        DBG_INFO("onCamOpmessageChaged: " + val);
        if (0 == val) {
            DBG_INFO("0 == onCamOpmessageChaged, do nothing");
        } else if (val >= 1 && val <= 4) {
            CI_OP_SEARCH_FLAG = val;
            DBG_INFO("OP search will start if possible");

            if (false == !!hiWebOsFrame.blankPage) {
                DBG_INFO("!!hiWebOsFrame.blankPage == false, op search won't show, return;");
                return;
            }

            var curPage = hiWebOsFrame.getCurrentPage();

            if (!!curPage && curPage.id != hiWebOsFrame.blankPage.id) {
                DBG_INFO("!!curPage && curPage.id != hiWebOsFrame.blankPage.id, CamChannelSearch won't show until blankPage hiFocus, curPage id: " + curPage.id);
                return;
            }

            hiWebOsFrame.createPage('ci_op_search_answer_page', null, curPage, null, function (CIOPSearchAnswerPage) {

                hiWebOsFrame.CIOPSearchAnswerPage = CIOPSearchAnswerPage;
                PageDataCIOPSearchAnswer.operateData.ci_op_search_answer_text.Data = PageDataCIOPSearchAnswer.operateData.CIOPSearchTextEnum[val];
                CIOPSearchAnswerPage.open();
                CIOPSearchAnswerPage.hiFocus();
                CIOPSearchAnswerPage.rewriteDataOnly();
            });


        } else {
            DBG_INFO("OPMessage invalid!!!");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var CIUnLockKeyTimer = null;

var onUpgradeProgressChaged = function (val) {  //val[3]有用
    try {
        DBG_INFO("onUpgradeProgressChaged:" + val);
        if (5 == val.length) {
            DBG_INFO("onUpgradeProgressChaged val.length:" + val.length + ", lock key if possible");
            if (100 != val[3]) {
                DBG_INFO("100 != val[3], lock all keys now! [keyboard.set_listen(0)]");
                //hiWebOsFrame.lockAllKeys();
                keyboard.set_listen(0);
                if (null == CIUnLockKeyTimer) {
                    DBG_INFO('null == CIUnLockkeyTimer, set CIUnLockKeyTimer = setTimeOut to unlockKey');
                    CIUnLockKeyTimer = setTimeout(function () {
                        DBG_INFO('CIUnLockKeyTimer timeout, unlockkey [keyboard.set_listen(1);]');
                        keyboard.set_listen(1);
                        CIUnLockKeyTimer = null;
                    }, 120000);//2 minutes
                } else {
                    DBG_INFO('null != CIUnLockKeyTimer, do nothing');
                }
            } else {
                keyboard.set_listen(1);
                clearTimeout(CIUnLockKeyTimer);
                CIUnLockKeyTimer = null;
                DBG_INFO("100 == val[3], unlockkey! [keyboard.set_listen(1)]");
            }
        } else {
            DBG_INFO("onUpgradeProgressChaged val.length:" + val.length + ", invalid");
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onUpgradeResultChaged = function (val) {
    try {
        DBG_INFO("onUpgradeResultChaged:" + val);
        hiWebOsFrame.unLockAllKeys();
        clearTimeout(CIUnLockKeyTimer);
        CIUnLockKeyTimer = null;

        if (4 == val.length) {
            DBG_INFO("onUpgradeResultChaged,(val[3]->0:success, 1:fail, 2: abort),and val[3] is " + val[3]);
        } else {
            DBG_INFO("onUpgradeResultChaged val.length is not 4, error!")
        }
        DBG_INFO("[onUpgradeResultChaged] unlock all keys")
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onCamPinStorageSupportChaged = function (val) {
    try {
        DBG_INFO('onCamPinStorageSupportChaged: ' + val);
        if (typeof (PageDataSettingChnlAdvanced) != UNDEFINED_DEFSTR) {
            PageDataSettingChnlAdvanced.operateData.setting_chnl_advanced_common_interface_store_pin_cmp.disable = !Num2Bool(val);
        }
        if (!!hiWebOsFrame.SettingChnlAdvancedPage && hiWebOsFrame.getCurrentPage().id == hiWebOsFrame.SettingChnlAdvancedPage.id) {
            hiWebOsFrame.SettingChnlAdvancedPage.rewriteDataOnly();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onCamOpsearchEntryDisplayChaged = function (val) {
    try {
        DBG_INFO('onCamOpsearchEntryDisplayChaged: ' + val);
        if (typeof (PageDataSettingChnlAdvanced) != UNDEFINED_DEFSTR) {
            PageDataSettingChnlAdvanced.operateData.setting_chnl_advanced_common_interface_op_entry_cmp.disable = !Num2Bool(val);
        }
        if (!!hiWebOsFrame.SettingChnlAdvancedPage && hiWebOsFrame.getCurrentPage().id == hiWebOsFrame.SettingChnlAdvancedPage.id) {
            hiWebOsFrame.SettingChnlAdvancedPage.rewriteDataOnly();
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 * 0 default 1 success 2 fail  3.in progress
 * @param val
 */
var onListImportStatusChaged = function (val) {
    try {
        DBG_INFO('onListImportStatusChaged: ' + val);
        if (!!hiWebOsFrame.SettingChnlImportFromUSBPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingChnlImportFromUSBPage.id) {
            switch (val) {
                case 0:
                    DBG_INFO('listImportStatus is 0, do nothing');
                    break;
                case 1:
                    DBG_INFO('listImportStatus is 1, success!');
                    SettingChnlImportFromUSBSuccess();
                    break;
                case 2:
                    DBG_INFO('listImportStatus is 2, failed!');
                    SettingChnlImportFromUSBErr();
                    break;
                case 3:
                    DBG_INFO('listImportStatus is 1, progressing...!');
                    SettingChnlImportFromUSBProgress();
                    break;
                default :
                    DBG_INFO('listImportStatus is error, progressing...!');

                    break;
            }
        } else {
            DBG_INFO('curPage not SettingChnlImportFromUSBPage, do nothing')
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

var onListExportStatusChaged = function (val) {
    try {
        DBG_INFO('onListExportStatusChaged: ' + val);
        if (!!hiWebOsFrame.SettingChnlExportToUSBPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.SettingChnlExportToUSBPage.id) {
            switch (val) {
                case 0:
                    DBG_INFO('listExportStatus is 0, do nothing');
                    break;
                case 1:
                    DBG_INFO('listExportStatus is 1, success!');
                    SettingChnlExportToUSBSuccess();
                    break;
                case 2:
                    DBG_INFO('listExportStatus is 2, failed!');
                    SettingChnlExportToUSBErr();
                    break;
                case 3:
                    DBG_INFO('listExportStatus is 1, progressing...!');
                    SettingChnlExportToUSBProgress();
                    break;
                default :
                    DBG_INFO('listExportStatus is error, progressing...!');

                    break;
            }
        } else {
            DBG_INFO('curPage not SettingChnlExportToUSBPage, do nothing')
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PrintVstrMenuChagedVal(val) {
    try {
        if (val.length >= 1) {
            DBG_INFO("*****************************************************");
            for (var i = 0; i < val.length; i++) {
                DBG_INFO('VSTR Vec[' + i + ']:' + val[i]);
            }
            DBG_INFO("*****************************************************");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function PrintVstrEnqChagedVal(val) {
    try {
        if (val.length >= 1) {
            DBG_INFO("*****************************************************");
            for (var i = 0; i < val.length; i++) {
                DBG_INFO('VSTREnq Vec[' + i + ']:' + val[i]);
            }
            DBG_INFO("*****************************************************");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function ClearPageDataChnlCIData() {
    try {
        if (typeof PageDataChnlCIData != UNDEFINED_DEFSTR) {
            PageDataChnlCIData.operateData.setting_chnl_CI_ul.Data = [
                {
                    ci_item: {Data: ""}
                }
            ];
            PageDataChnlCIData.setting_chnl_CI_ul.Data = [
                {
                    ci_item: {Data: ""}
                }
            ];
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function CloseCIPageLaterIfExist() {
    try {
        if (!!hiWebOsFrame.SettingChnlCIPage && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingChnlCIPage.id)) {
            DBG_INFO("VSTR is Blank, CIStrNullTimer Set");
            if (!!CIStrNullTimer) {
                DBG_INFO("clearTimeout(CIStrNullTimer) before create it");
                clearTimeout(CIStrNullTimer);
            }
            CIStrNullTimer = setTimeout(function () {
                CIStrNullFunc();
            }, 100);//1500ms修改为100ms
        } else {
            DBG_INFO("Try to closehiWebOsFrame.SettingChnlCIPage,but this page this Not Exist");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function ChkCurModInVec(vec) {
    try {
        DBG_INFO('ChkCurModInVec');
        if (null == hiWebOsFrame.getCurrentPage()) {
            DBG_INFO('curPage null, return false');
            return false;
        }
        var curModule = hiWebOsFrame.getCurrentPage().module;

        if (-1 == vec.indexOf(curModule)) {
            return false;
        }

        return true;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function checkCurPageIdEnableInModule(CIModuleVec) {
    try {
        DBG_INFO('checkCurPageIdEnableInModule');
        var isEnable = false;
        var curPageId = hiWebOsFrame.getCurrentPageId();

        if (null == curPageId) {
            DBG_INFO('curPageId null, return false');
            return false;
        }

        var curPageModule = hiWebOsFrame.getCurrentPage().module;

        DBG_INFO('curPage and module: ' + curPageId + ', ' + curPageModule);
        if (curPageModule in CIModuleVec) {
            if (-1 == $.inArray(curPageId, CIModuleVec[curPageModule])) {
                DBG_INFO('pageId: ' + curPageId + ' not inArray, return false');
                isEnable = false;
            } else {
                DBG_INFO('pageId: ' + curPageId + ' is inArray, return true');
                isEnable = true;
            }
        } else {
            DBG_INFO('No restrict about module: ' + curPageModule + ', return true');
            isEnable = true;
        }
        return isEnable;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function CIToMenuStyle() {
    try {
        if ($("#setting_chnl_CI_upgrade_percent_frame") != null) {
            $("#setting_chnl_CI_upgrade_percent_frame").attr("class", "setting_chnl_CI_upgrade_percent_none");
        }
        if ($("#setting_chnl_CI_input_frame") != null) {
            $("#setting_chnl_CI_input_frame").attr("class", "setting_chnl_CI_input_frame_none");
        }
        if ($("#setting_chnl_CI_upgrade_result_frame") != null) {
            $("#setting_chnl_CI_upgrade_result_frame").attr("class", "setting_chnl_CI_upgrade_result_none");
        }
        if ($("#setting_chnl_CI_frame") != null) {
            $("#setting_chnl_CI_frame").attr("class", "setting_chnl_CI_frame_block");
        }

        if ($("#setting_chnl_CI_osd") != null) {
            $("#setting_chnl_CI_osd").css("height", "816px");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function CIToEnquiryStyle() {
    try {
        if ($("#setting_chnl_CI_upgrade_percent_frame") != null) {
            $("#setting_chnl_CI_upgrade_percent_frame").attr("class", "setting_chnl_CI_upgrade_percent_none");
        }
        if ($("#setting_chnl_CI_upgrade_result_frame") != null) {
            $("#setting_chnl_CI_upgrade_result_frame").attr("class", "setting_chnl_CI_upgrade_result_none");
        }
        if ($("#setting_chnl_CI_frame") != null) {
            $("#setting_chnl_CI_frame").attr("class", "setting_chnl_CI_frame_none");
        }
        if ($("#setting_chnl_CI_input_frame") != null) {
            $("#setting_chnl_CI_input_frame").attr("class", "setting_chnl_CI_input_frame_block");
        }

        if ($("#setting_chnl_CI_osd") != null) {
            $("#setting_chnl_CI_osd").css("height", "488px");
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function OSDSlAndSessIdState() {
    return (OSDSlAndSessId[0] >= 0 && OSDSlAndSessId[1] >= 0);
}


function SettingChnlAdvancedInit() {
    DBG_INFO("SettingChnlAdvancedInit");

    var ChnlAdvOpeData = PageDataSettingChnlAdvanced.operateData;

    try {
        if ('EU' == InitArea) {
            $('#setting_chnl_advanced_epg_mark').css('display', 'block');
            ChnlAdvOpeData.setting_chnl_advanced_epg_mark_cmp.disable = false;
            if (isCurrentCoutryWSG()) {
                $('#setting_chnl_advanced_epg_mark').css('display', 'none');
                ChnlAdvOpeData.setting_chnl_advanced_epg_mark_cmp.disable = true;
            }
            if (FREEVIEWTEST) {
                $('#setting_chnl_advanced_epg_mark').css('display', 'none');
                ChnlAdvOpeData.setting_chnl_advanced_epg_mark_cmp.disable = true;
            }

        } else {
            $('#setting_chnl_advanced_epg_mark').css('display', 'none');
            ChnlAdvOpeData.setting_chnl_advanced_epg_mark_cmp.disable = true;
        }


    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    try {
        var camCnt = tv ? model.ci.getCamCount() : 1;
        CHNL_CAM_COUNT = camCnt;
        DBG_INFO("model.ci.getCamCount(): " + camCnt);
        if (1 == camCnt) {
            ChnlAdvOpeData.setting_chnl_advanced_common_interface_cmp.disable = false;
            DBG_INFO("ci info enable!");
        } else {
            ChnlAdvOpeData.setting_chnl_advanced_common_interface_cmp.disable = true;
            DBG_INFO("no card or some err, disable ci info");
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        if (true == ChnlAdvOpeData.setting_chnl_advanced_common_interface_cmp.disable) {
            DBG_INFO("ci card not exist, disable pin store cmp!");
            ChnlAdvOpeData.setting_chnl_advanced_common_interface_store_pin_cmp.disable = true;
        } else {
            var CIStorePINSupport = tv ? model.ci.getCamPinStorageSupport() : 1;
            DBG_INFO("model.ci.getCamPinStorageSupport(): " + CIStorePINSupport);
            if (1 == CIStorePINSupport) {
                DBG_INFO("1 == CIStorePINSupport, enable ci pin store cmp");
                ChnlAdvOpeData.setting_chnl_advanced_common_interface_store_pin_cmp.disable = false;
            } else {
                DBG_INFO("0 == CIStorePINSupport or some err, disable ci pin store cmp");
                ChnlAdvOpeData.setting_chnl_advanced_common_interface_store_pin_cmp.disable = true;
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        if (true == ChnlAdvOpeData.setting_chnl_advanced_common_interface_cmp.disable) {
            DBG_INFO("ci card not exist, disable op search cmp!");
            ChnlAdvOpeData.setting_chnl_advanced_common_interface_op_entry_cmp.disable = true;
        } else {
            var opSearchEntryDisplay = tv ? model.ci.getCamOpsearchEntryDisplay() : 1;
            DBG_INFO("model.ci.getCamOpsearchEntryDisplay(): " + opSearchEntryDisplay);
            if (1 == opSearchEntryDisplay) {
                DBG_INFO("1 == opSearchEntryDisplay, enable ci op search cmp");
                ChnlAdvOpeData.setting_chnl_advanced_common_interface_op_entry_cmp.disable = false;
            } else {
                DBG_INFO("0 == opSearchEntryDisplay or some err, disable ci op search cmp");
                ChnlAdvOpeData.setting_chnl_advanced_common_interface_op_entry_cmp.disable = true;
            }
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }


    try {
        var simpleCHMode = 0;
//        model.epg.getSimpleChannelMode();
        DBG_INFO("simpleCHMode: " + simpleCHMode);
        FlipSwitchInitEasy.call(this, ChnlAdvOpeData, "setting_chnl_advanced_simple_CH_mode_cmp", Num2Bool(simpleCHMode));
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function Mheg5PasswordOsdInit() {
    try {
        var mheg5HeadText = model.mheg5.getStrPfginfo();
        DBG_INFO('model.mheg5.getStrPfginfo(): ' + mheg5HeadText);
        if (typeof PageDataMheg5PasswordOSD != UNDEFINED_DEFSTR) {
            DBG_INFO('typeof PageDataMheg5PasswordOSD != UNDEFINED_DEFSTR');
            PageDataMheg5PasswordOSD.operateData.mheg5_password_osd_head.Data = mheg5HeadText;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function CheckChnlAdvancedEnable() {
    try {
        DBG_INFO("CheckChnlAdvancedEnable()");
        if ((0 == CHNL_CAM_COUNT && "EU" != InitArea)
            || (0 == CHNL_CAM_COUNT && "EU" == InitArea && isCurrentCoutryWSG())
            || (0 == CHNL_CAM_COUNT && "EU" == InitArea && FREEVIEWTEST)) {
            DBG_INFO('chnladvanced disable');
            return false;
        } else {
            DBG_INFO('chnladvanced enable');
            return true;
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}
/**$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CI End       $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/


function InitChnlAdvSetMenuItem() {
    DBG_INFO('InitChnlAdvSetMenuItem()');
    try {//先删除，然后视是否支持再添加

        var camCnt = tv ? model.ci.getCamCount() : 0;
        CHNL_CAM_COUNT = camCnt;
        DBG_INFO('model.ci.getCamCount(): ' + camCnt);
        while (-1 != $.inArray(FirPageSndIdx.ChnlAdvanced, PageDataFirstCls.operateData.settingdisablelist[2])) {    //存在,则删除
            PageDataFirstCls.operateData.settingdisablelist[2].splice($.inArray(FirPageSndIdx.ChnlAdvanced, PageDataFirstCls.operateData.settingdisablelist[2]), 1);
        }

        var chnlAdvEnable = CheckChnlAdvancedEnable();
        DBG_INFO('CheckChnlAdvancedEnable(): ' + chnlAdvEnable);
        if (false == chnlAdvEnable && "COL" != InitArea) {
            DBG_INFO('Changed chnlAdvanced disable operateData,[Add]');
            PageDataFirstCls.operateData.settingdisablelist[2].push(FirPageSndIdx.ChnlAdvanced);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function Mheg5AboutInit() {
    try {
        DBG_INFO('Mheg5AboutInit');
        if ('SA' == InitArea) {
            DBG_INFO('curArea SA, do not init mheg5, return');
            return;
        }
        model.mheg5.onI32StatusChaged = onI32Mheg5StatusChaged;
        model.mheg5.onStrPfginfoChaged = onStrMheg5PfginfoChaged;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 * 0 nothing; 1. allkey to mheg5 if liveTV; 2. do not send key to mheg5; 3. popup password osd
 * @param val
 */
var onI32Mheg5StatusChaged = function (val) {
    try {
        DBG_INFO('onI32Mheg5StatusChaged: ' + val);
        // modify @chenfeng & jiangbo1
        val == 0xe && (val = 2);
        val == 0xf && (val = 1);

        if ('SA' == InitArea) {
            DBG_INFO('curArea SA, return;');
            return;
        }
        MHEG5_STATUS = val;

        if (3 == MHEG5_STATUS) {
            try {
                var parentLockMode = model.parentlock.getSModel();
                DBG_INFO('model.parentlock.getSModel(): ' + parentLockMode);
                var parentLockPwd = model.parentlock.getPin();
                DBG_INFO('model.parentlock.getPin(): ' + parentLockPwd);
                if (0 == parentLockMode || 0 == parentLockPwd.length) {
                    DBG_INFO('0 == parentLockMode || 0 == parentLockPwd.length, model.mheg5.ActionSetPfgresult(1), return');
                    model.mheg5.ActionSetPfgresult(1);
                    return;
                } else {
                    DBG_INFO('0 != parentLockMode && 0 != parentLockPwd.length, go on create mheg5 password osd');
                }

            } catch (ex) {
                DBG_ERROR(ex.message);
            }
            hiWebOsFrame.SendMheg5Status(0);

            if (!!hiWebOsFrame.blankPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.blankPage.id) {
                DBG_INFO('curPage liveTv, popup mheg5 password osd');
                PopUpMheg5PasswordOSD();
            } else if (!!hiWebOsFrame.Mheg5PasswordOSD && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.Mheg5PasswordOSD.id) {
                DBG_INFO('curPage mheg5, do nothing');
            } else {
                DBG_INFO('curPage not liveTv||mheg5 ,popup mheg5 password when liveTV focus && status is 3.');
            }
        } else {
            if (!!hiWebOsFrame.Mheg5PasswordOSD && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.Mheg5PasswordOSD.id) {
                DBG_INFO('curPage Mheg5PasswordOSD, close it');
                CloseMheg5PasswordOSDNotSendPassword();
            }

            if (1 == MHEG5_STATUS) {
                if (!!hiWebOsFrame.blankPage && hiWebOsFrame.getCurrentPageId() == hiWebOsFrame.blankPage.id && hiWebOsFrame.blankPage.visible) {
                    DBG_INFO('1 == MHEG5_STATUS && curPage liveTV,sendKey to Mheg5 First');
                    hiWebOsFrame.SendMheg5Status(1);
                    sendAM(":am,am,:focus=dtv_app_mtk");
                } else if (hiWebOsFrame.getCurrentPageId() == 'setting_chnl_advanced' || hiWebOsFrame.getCurrentPageId() == 'setting_chnl_ci') {
                    DBG_INFO("hiWebOsFrame.getCurrentPageId() == 'setting_chnl_advanced' || hiWebOsFrame.getCurrentPageId() == 'setting_chnl_ci' close it if page is not protected");
                    if (hiWebOsFrame.isCurrentPageBeProtected()) {
                        DBG_INFO('true == hiWebOsFrame.isCurrentPageBeProtected(), do nothing!');
                    } else {
                        var crntPage = hiWebOsFrame.getCurrentPage();
                        closePagesOrModuleByPage(crntPage);
                        DBG_INFO('closePagesOrModuleByPage(crntPage), openLiveTVModule(), [CI Authentication}');
                        openLiveTVModule();
                    }
                } else {
                    hiWebOsFrame.SendMheg5Status(0);
                    DBG_INFO('1 == MHEG5_STATUS but curPage not liveTV,do nothing');
                }
            } else if (2 == MHEG5_STATUS) {
                hiWebOsFrame.SendMheg5Status(0);
            } else if (0 == MHEG5_STATUS) {
                hiWebOsFrame.SendMheg5Status(0);
            } else {
                hiWebOsFrame.SendMheg5Status(0);
            }
        }

    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

/**
 *  显示在Mheg5PasswordOSD上的字符串
 */
var onStrMheg5PfginfoChaged = function (val) {
    try {
        DBG_INFO('onStrMheg5PfginfoChaged: ' + val);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function PopUpMheg5PasswordOSD() {
    try {
        DBG_INFO('PopUpMheg5PasswordOSD');
        hiWebOsFrame.createPage('mheg5_password_osd', null, hiWebOsFrame.blankPage, null, function (Mheg5PasswordOSD) {
            hiWebOsFrame.Mheg5PasswordOSD = Mheg5PasswordOSD;
            Mheg5PasswordOSD.open();
            Mheg5PasswordOSD.hiFocus();
            Mheg5PasswordOSD.rewriteDataOnly();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function CloseMheg5PasswordOSDNotSendPassword() {
    try {
        DBG_INFO('CloseMheg5PasswordOSDNotSendPassword');
        hiWebOsFrame.Mheg5PasswordOSD.close();
        if (!!hiWebOsFrame.Mheg5PasswordOSD.origin) {
            DBG_INFO(hiWebOsFrame.Mheg5PasswordOSD.origin.id + ' open, focus, rewriteDataOnly');
            hiWebOsFrame.Mheg5PasswordOSD.origin.open();
            hiWebOsFrame.Mheg5PasswordOSD.origin.hiFocus();
            hiWebOsFrame.Mheg5PasswordOSD.origin.rewriteDataOnly();
        } else {
            DBG_INFO('hiWebOsFrame.blankPage open, focus, rewriteDataOnly');
            hiWebOsFrame.blankPage.open();
            hiWebOsFrame.blankPage.hiFocus();
            hiWebOsFrame.blankPage.rewriteDataOnly();
        }
        hiWebOsFrame.Mheg5PasswordOSD.destroy();
    } catch
        (ex) {
        DBG_ERROR(ex.message);
    }
}


/**
 * 获取3D页面第一个可用的组件id
 */
function getPic3DFirstEnabledCmpId() {
    try {
        var cmpIdList = ["setting_pic_3dmode_cmp", "setting_pic_lrswap_cmp", "setting_pic_view_point", "setting_pic_depth", "setting_pic_3dto2d_cmp"];
        var cmpId = "setting_pic_3dmode_cmp";
        for (var i = 0; i < cmpIdList.length; i++) {
            if (false == PageDataSettingPic3D[cmpIdList[i]].disable) {
                cmpId = cmpIdList[i];
                break;
            }
        }
        DBG_INFO('getPic3DFirstEnabledCmpId: ' + cmpId);
        return cmpId;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function FirPageOpen3DPage() {
    try {
        hiWebOsFrame.createPage('setting_pic_3d', null, hiWebOsFrame.settingsFirst, null, function (SettingPic3D) {
            hiWebOsFrame.SettingPic3D = SettingPic3D;
            var firFocusId = getPic3DFirstEnabledCmpId();
            hiWebOsFrame.SettingPic3D.firstFocusId = firFocusId;
            SettingPic3D.open();
            SettingPic3D.hiFocus();
            hiWebOsFrame.settingsFirst.close();

            var helpInfo = PageDataSettingPic3D.operateData.helpInfo[firFocusId];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_3d');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function QSPageOpen3DPage() {
    try {
        hiWebOsFrame.createPage('setting_pic_3d', null, hiWebOsFrame.settingsFirst, null, function (SettingPic3D) {
            hiWebOsFrame.SettingPic3D = SettingPic3D;
            var firFocusId = getPic3DFirstEnabledCmpId();
            hiWebOsFrame.SettingPic3D.firstFocusId = firFocusId;
            SettingPic3D.open();
            SettingPic3D.hiFocus();

            var helpInfo = PageDataSettingPic3D.operateData.helpInfo[firFocusId];
            CreateSndHelpInfoPage(helpInfo.title, helpInfo.content, false);
            var pos = sndHelpInfo.getPosZIndex('setting_pic_3d');
            sndHelpInfo.setHelpInfoPosZIndex(pos.top - 155 + 25, pos.left, pos.width, sndHelpInfo.defaultHeight, pos.zIndex + 1);
            hiWebOsFrame[sndHelpInfo.id].open();
        });
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function SettingChnlCIkeyChannelUpHandler() {
    try {
        DBG_INFO('SettingChnlCIkeyChannelUpHandler');
        var origiPage = hiWebOsFrame.SettingChnlCIPage.origin;
        if (!!origiPage && !!hiWebOsFrame.blankPage && origiPage.id == hiWebOsFrame.blankPage.id) {
            DBG_INFO('originPage is blankPage');
            liveTVHandlerProcess(VK_CHANNEL_UP);
        } else {
            DBG_INFO('orginPage not liveTV, do thing');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function SettingChnlCIkeyChannelDownHandler() {
    try {
        DBG_INFO('SettingChnlCIkeyChannelDownHandler');
        var origiPage = hiWebOsFrame.SettingChnlCIPage.origin;
        if (!!origiPage && !!hiWebOsFrame.blankPage && origiPage.id == hiWebOsFrame.blankPage.id) {
            DBG_INFO('originPage is blankPage');
            liveTVHandlerProcess(VK_CHANNEL_DOWN);
        } else {
            DBG_INFO('orginPage not liveTV, do thing');
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function Mheg5keyChannelUpHandler() {
    try {
        DBG_INFO('Mheg5keyChannelUpHandler');
        liveTVHandlerProcess(VK_CHANNEL_UP);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function Mheg5keyChannelDownHandler() {
    try {
        DBG_INFO('Mheg5keyChannelDownHandler');
        liveTVHandlerProcess(VK_CHANNEL_DOWN);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function getMemcUsefulState() {
    try {
        var stateMemcUseful = true;
        try {
            MEMC_SUPPORT = model.video.getEnumSmoothMotionSupport();
            DBG_INFO('Init MEMC_SUPPORT: model.video.getEnumSmoothMotionSupport(): ' + MEMC_SUPPORT);
            if (typeof(MEMC_SUPPORT) == UNDEFINED_DEFSTR) {
                MEMC_SUPPORT = 1;
                DBG_ALWAYS('model.video.getEnumSmoothMotionSupport() error!!, set MEMC_SUPPORT = 1');
            }
        } catch (ex) {
            MEMC_SUPPORT = 1;
            DBG_ALWAYS('model.video.getEnumSmoothMotionSupport() error!!, set MEMC_SUPPORT = 1');
            DBG_ERROR(ex.message);
        }


        try {
            var picMode = model.video.getEnumPictureMode(); //4 为gamemode
            DBG_INFO('model.video.getEnumPictureMode(): ' + picMode);
        } catch (ex) {
            DBG_ERROR(ex.message);
        }

        var settingStartOnDMP = isCurrentAppHimedia();
        DBG_INFO('isCurrentAppHimedia(): ' + settingStartOnDMP);

        //此处不影响firPage删除3d menu
        var cur3DMode = 0;
        if (!!PICTURE_3D_SURPPORT) {
            cur3DMode = model.video.getEnum3dMode();
            DBG_INFO('model.video.getEnum3dMode(): ' + cur3DMode);
        }


        stateMemcUseful = ((picMode != 4 && 0 == cur3DMode) || (true == settingStartOnDMP && 0 == cur3DMode));
        stateMemcUseful = MEMC_SUPPORT && stateMemcUseful;
        DBG_INFO('stateMemcUseful: ' + stateMemcUseful);
        return stateMemcUseful;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function getPicOverscanUsefulState() {
    var picOverscanUsefulState = true;

    try {
        //picZoom为direct时disable overscan
        var picZoom = tv ? model.video.getEnumZoom() : 4;
        DBG_INFO("model.video.getEnumZoom(): " + picZoom);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        //true = isCurrentAppHimedia()时 disable overscan
        var startOnHimedia = isCurrentAppHimedia();
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        //pic3DMode 不为0时需要disable overscan
        var pic3DMode = tv ? model.video.getEnum3dMode() : 0;
        DBG_INFO('model.video.getEnum3dMode(): ' + pic3DMode);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    try {
        var curSourceVideoFormat = tv ? model.tvservice.getCurrentSourceVideoFormat() : '1920,1080';
        debugPrint("model.tvservice.getCurrentSourceVideoFormat():" + JSON.stringify(curSourceVideoFormat));
        var source4K = false;
        if (curSourceVideoFormat.length > 0) {
            var array = curSourceVideoFormat.split(",");
            var zoomWidth = 0;
            var zoomHeight = 0;
            if (array.length > 1) {
                DBG_INFO("zoomWidth and zoomHeight:" + array[0] + array[1]);
                zoomWidth = array[0];
                zoomHeight = array[1];
                source4K = zoomWidth >= 3800;
            }
            DBG_INFO('source4K: ' + source4K);
        }
    } catch (ex) {
        DBG_ERROR(ex.message);
    }

    var isAppOn = tv ? checkIsAppOn() : 1;
    DBG_INFO("checkIsAppOn(): " + isAppOn);

    picOverscanUsefulState = (5 != picZoom && false == startOnHimedia && 0 == pic3DMode && false == source4K && false == isAppOn);
    DBG_INFO('5 != picZoom && false == startOnHimedia && 0 == pic3DMode && false == source4K && false == isAppOn: ' + picOverscanUsefulState);
    return picOverscanUsefulState;
}


function getPicNoiseReductionUsefulState() {
    try {
        var picNoiseReductionUsefulState = true;
        var picMode = model.video.getEnumPictureMode(); //4 为gamemode
        DBG_INFO('model.video.getEnumPictureMode(): ' + picMode);
        picNoiseReductionUsefulState = (picMode != 4);
        return picNoiseReductionUsefulState;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function getPicAdaptiveContrastUsefulState() {
    try {
        var picAdaptiveContrastUsefulState = true;
        var picMode = model.video.getEnumPictureMode(); //4 为gamemode
        DBG_INFO('model.video.getEnumPictureMode(): ' + picMode);
        picAdaptiveContrastUsefulState = (picMode != 4);
        return picAdaptiveContrastUsefulState;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


function setOperateTipShowFlag(val) {
    try {
        OPERATE_TIP_SHOW = val;
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

function RefreshPicAboutAftSetUserMode() {
    try {
        var picZoomEnumMode = model.video.getEnumZoom();
        onEnumZoomChaged(picZoomEnumMode);
        var picBrightness = model.video.getBrightness();
        onBrightnessChaged(picBrightness);
        var picContrast = model.video.getContrast();
        onContrastChaged(picContrast);
        var picColor = model.video.getColourIntensity();
        onColourIntensityChaged(picColor);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}


var addTestOnlyJs = null;
tv == false && (addTestOnlyJs = new AddTestOnlyJs());

function AddTestOnlyJs() {
    try {
        DBG_INFO('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~AddTestOnlyJs()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        var testOnlyJs = 'modulePages/setting/testonly.js';
        var tmpScript = document.createElement('script');
        tmpScript.type = "text/javascript";
        tmpScript.src = testOnlyJs;
        document.head.appendChild(tmpScript);
    } catch (ex) {
        DBG_ERROR(ex.message);
    }
}

