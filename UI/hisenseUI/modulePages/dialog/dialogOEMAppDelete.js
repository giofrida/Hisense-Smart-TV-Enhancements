/**
 * Created by Admin on 14-6-18.
 */
function getDialogOEMAppDeleteData(opt){
    opt.CaE = [
        {
            "id":"OEMLauncherAppDelTitle",
            "description":"头信息",
            "CaEType":"div"
        },
        {
            "id":"OEMLauncherDelAppImg",
            "description":"",
            "CaEType":"img"
        },
        {
            "id":"OEMLauncherDelAppName",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"OEMLauncherDelAppInfo",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"OEMLauncherAppDelOK",
            "description":"",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootLeftNormal","focus":"wizardDialogFootLeftFocus","disable":"wizardDialogFootLeftDisable"
            },
            "nav":{
                "rightTo":"OEMLauncherAppDelCancel"
            },
            "handler":{
                "aftEnterHandler":"OEMAppDeleteDialogOKHandle"
            }
        },
        {
            "id":"OEMLauncherAppDelCancel",
            "description":"取消按钮",
            "CaEType":"div",
            "classes":{
                "normal":"wizardDialogFootRightNormal","focus":"wizardDialogFootRightFocus"
            },
            "nav":{
                "leftTo":"OEMLauncherAppDelOK"
            },
            "handler":{
                "aftEnterHandler":"OEMAppDeleteDialogCancelHandle"
            }
        }
    ];
    //initOEMAppDeleteDialog();
    return OEMAppDeleteDialogData;
}
var OEMAppDeleteDialogData={
    "OEMLauncherAppDelTitle":{"Data":"Remove the app"},
    "OEMLauncherDelAppImg":{"Data":""},
    "OEMLauncherDelAppName":{"Data":""},
    "OEMLauncherDelAppInfo":{"Data":"Do you want to remove this app?"},
    "OEMLauncherAppDelOK":{"Data":"OK"},
    "OEMLauncherAppDelCancel":{"Data":"Cancel"},
    "operateData":{
        "appName":"",
        "appImg":"",
        "appUrl":"",
        "appUrlType":""
    },
    "langData":{
        "Remove the app":["Remove the app"],
        "Do you want to remove this app?":["Do you want to remove this app?"],
        "OK":["OK"],
        "Cancel":["Cancel"]
    },
    rewrite:"rewriteOEMAppDeleteDialog"
}

function initOEMAppDeleteDialog(appInfo){
    var data = OEMAppDeleteDialogData;
    data.operateData.appName = appInfo.appName;
    data.operateData.appImg = appInfo.appImg;
    data.operateData.appUrl = appInfo.appUrl;
    data.operateData.appUrlType = appInfo.appUrlType;
}

function rewriteOEMAppDeleteDialog(data){
    data.OEMLauncherDelAppImg.Data = data.operateData.appImg;
    data.OEMLauncherDelAppName.Data = data.operateData.appName;
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $('#OEMLauncherDelAppInfo').attr('dir', 'ltr');
    }
    else {
        $('#OEMLauncherDelAppInfo').attr('dir', 'rtl');
    }
}

/*******************************************************************
 name:OEMAppDeleteDialogOKHandle
 description:连接操作
 input:
 output:
 return
 *******************************************************************/
function OEMAppDeleteDialogOKHandle(){
    var data = OEMAppDeleteDialogData;
    if(this.page.origin.id == "VIDAALiteAppPage"){
        VIDAALiteDeleteApp(data.operateData.appUrl);
        hiWebOsFrame.OEMLauncherAppDeleteDialog.close();
        hiWebOsFrame.OEMLauncherAppDeleteDialog.origin.rewrite();
        hiWebOsFrame.OEMLauncherAppDeleteDialog.origin.hiFocus();
        VIDAALiteLauncherSetFirstPosition();
        hiWebOsFrame.OEMLauncherAppDeleteDialog.destroy();
        $('#msg_title').css("display","none");
        showMsg("",
            '<img src="' + VIDAALiteLauncherBaseDir + "img/ico_succeed.png" + '">' +
                '<span>' + getCurrentContentLanguage("Successfully Removed") + '</span>',3,function (){
                $('#msg_title').css("display","block");
            });
    }else{
        deleteOEMLauncherEditApp(data.operateData.appUrl);
        hiWebOsFrame.OEMLauncherAppDeleteDialog.close();
        hiWebOsFrame.startLoading();
        $("#OEMlauncherPage").css("visibility", "hidden");
        setTimeout(OEMLauncherAllAppRewrite,100);
        OEMLauncherLiveTvVideoDoNotShow();
        setTimeout(OEMLauncherAllAppRefresh,800);
        $('#msg_title').css("display","none");
    }
}
function OEMLauncherAllAppRewrite(){
    hiWebOsFrame.myLauncher.rewrite();
}
function OEMLauncherAllAppRefresh(){
    hiWebOsFrame.endLoading();
    $("#OEMlauncherPage").css("visibility", "visible");
    hiWebOsFrame.myLauncher.hiFocus(OEMAppRememberData.OEMFocusEditAppListId);
    hiWebOsFrame.OEMLauncherAppDeleteDialog.destroy();
    $('#msg_title').css("display","none");
    showMsg("",
        '<img src="' + OEMlauncherBaseDir + "img/ico_succeed.png" + '">' +
            '<span>' + getCurrentContentLanguage("Successfully Removed") + '</span>',3,function (){
            $('#msg_title').css("display","block");
        });
}


function OEMAppDeleteDialogCancelHandle(){
    debugPrint("OEMAppDeleteDialogCancelHandle:");
    hiWebOsFrame.OEMLauncherAppDeleteDialog.close();
    hiWebOsFrame.OEMLauncherAppDeleteDialog.origin.hiFocus();
    hiWebOsFrame.OEMLauncherAppDeleteDialog.destroy();
}

function OEMAppDeleteDialogOnDestroy(){
    hiWebOsFrame.OEMLauncherAppDeleteDialog = null;
}
