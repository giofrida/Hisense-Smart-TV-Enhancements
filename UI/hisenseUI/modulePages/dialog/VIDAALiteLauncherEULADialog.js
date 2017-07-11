/**
 * Created by Admin on 14-6-18.
 */
function getVIDAALiteLauncherEULADialogData(opt){
    opt.CaE = [
        {
            "id":"VIDAALiteLauncherEULAInfo",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"VIDAALiteLauncherEULAOK",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus","disable":"wizardDialogFootRightDisable"
            },
            "nav":{
                "rightTo":"VIDAALiteLauncherEULACancel"
            },
            "handler":{
                "aftEnterHandler":"VIDAALiteLauncherEULAOKHandle"
            }
        },
        {
            "id":"VIDAALiteLauncherEULACancel",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "leftTo":"VIDAALiteLauncherEULAOK"
            },
            "handler":{
                "aftEnterHandler":"VIDAALiteLauncherEULACancelHandle"
            }
        }
    ];

    return VIDAALiteLauncherEULADialogData;
}

var VIDAALiteLauncherEULADialogData={
    "VIDAALiteLauncherEULAInfo":{"Data":"Since you did not approve EULA yet, current feature is not available. Please review and approve it first."},
    "VIDAALiteLauncherEULACancel":{"Data":"Cancel"},
    "VIDAALiteLauncherEULAOK":{"Data":"OK"},
    "operateData":{
        "argList": [],
        "crtPage": null
    },
    "langData":{
        "Since you did not approve EULA yet, current feature is not available. Please review and approve it first.":[],
        "OK":[],
        "Cancel":[]
    }
    //rewrite:""
}

function VIDAALiteLauncherEULAOKHandle() {

    hiWebOsFrame.VIDAALiteLauncherEULADialogPage.close();
    try {
        quickopendisclaimer(VIDAALiteLauncherEULACallBack, VIDAALiteLauncherEULADialogData.operateData.crtPage);

    }catch (e) {
        debugE(e.message);
    }
}

function VIDAALiteLauncherEULACancelHandle() {

    hiWebOsFrame.VIDAALiteLauncherEULADialogPage.close();
    debugE("User cancel, just open parent page:" + VIDAALiteLauncherEULADialogData.operateData.crtPage.id);
    if(VIDAALiteLauncherEULADialogData.operateData.argList[4]){
        sendAM(":dtv_app_mtk,am,:hotkey=0x8f000");
        sendAM(":am,dtv_app_mtk,:resume=dtv");
    }
    VIDAALiteLauncherEULADialogData.operateData.crtPage.hiFocus();
}

function VIDAALiteLauncherEULAOnClose() {

    if ("app_lau_browser" == VIDAALiteLauncherEULADialogData.operateData.crtPage.id) {
        switch (appBrowser.getCurrentCommandType()) {
            case CmdURLType.LAU_BROWSER_HIMEDIA:
                //model......通知himedia注册按键
                if (16 != GlobalFlagShareInBrowser) {
                    model.system.setReturnlocalappFlag(FlagShareInBrowser.HIMEDIA_RESUME_FROM_SETTING);
                }
                break;
            case CmdURLType.LAU_BROWSER_PICASA:
                model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                break;
            case CmdURLType.LAU_BROWSER_TERRATV:
                // model.system.setReturnlocalappFlag(FlagShareInBrowser.PICASA_NORMAL_PAGE);
                break;
            default :
                break;
        }
    }

    hiWebOsFrame.VIDAALiteLauncherEULADialogPage.destroy();
}

function VIDAALiteLauncherEULAOnDestroy() {

    debugE('VIDAALiteLauncherEULAOnDestroy!!!!!');
    hiWebOsFrame.VIDAALiteLauncherEULADialogPage = null;
}

function VIDAALiteLauncherEULACallBack(callback) {

    debugE('The callback is:' + callback);
    hiWebOsFrame.closeModule('setting');
    hiWebOsFrame.closeModule('settingfirst');

    if(callback) {
        try {
            debugE('VIDAALiteLauncherEULADialogData.operateData.argList:' + VIDAALiteLauncherEULADialogData.operateData.argList);
            var tmpList = VIDAALiteLauncherEULADialogData.operateData.argList;
            asyncStartApp(tmpList[0],tmpList[1],tmpList[2],tmpList[3],tmpList[4],tmpList[5],tmpList[6],VIDAALiteLauncherEULADialogData.operateData.crtPage);
        }
        catch (e) {
            debugE(e.message);
        }
    }
    else {
        VIDAALiteLauncherEULADialogData.operateData.crtPage.hiFocus();
    }
}