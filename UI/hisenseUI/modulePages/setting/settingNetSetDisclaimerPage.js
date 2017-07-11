/**
 * Created by Admin on 14-6-18.
 */
function getWizardNetSetDisclaimerPageData(opt){
    opt.CaE = [
        {
            "id":"settingNetDisclaimPageTitle",
            "description":"免责声明标题",
            "CaEType":"span"
        },
        {
            "id":"settingNetDisclaimerServStateBtn",
            "description":"免责声明按钮",
            "CaEType":"span",
            "classes":{
                "normal":"settingNetDisServStateNormal","focus":"wizardDisclaimerServStateBtnFocus"
            },
            "nav":{
                "downTo":"settingNetDisStateAgree"
            },
            "handler":{
                "aftEnterHandler":"wizardNetSetReadDisclaimer"
            }
        },
        {
            "id":"settingNetDisclaimerServStateReminder",
            "description":"免责声明提示",
            "CaEType":"span"
        },
        {
            "id":"settingNetDisStateAgree",
            "description":"同意说明",
            "CaEType":"div",
            "classes":{
                "normal":"settingNetDisclaimItemNormal","focus":"settingNetDisclaimItemFocus"
            },
            "nav":{
                "upTo":"settingNetDisclaimerServStateBtn","downTo":"settingNetDisImprove"
            },
            "handler":{
                "aftEnterHandler":"wizardSetAgreeStateFlag"
            }
        },
        {
            "id":"wizardDisclaimStateAgreeBtn",
            "description":"勾选按钮",
            "CaEType":"SwitchDiv",
            "imageList":{
                "openImg":"img/Disclaimer_select.png",
                "closeImg":"img/Disclaimer_unselect.png"
            },
            "classes":{
                "normal":"wizardDisclaimImg"
            }
        },
        {
            "id":"wizardDisclaimStateAgreeInfo",
            "description":"同意项",
            "CaEType":"span"
        },
        {
            "id":"wizardDisclaimStateDsc",
            "description":"同意描述",
            "CaEType":"div"
        },
        {
            "id":"settingNetDisImprove",
            "description":"同意说明",
            "CaEType":"div",
            "classes":{
                "normal":"settingNetDisclaimItemNormal","focus":"settingNetDisclaimItemFocus"
            },
            "nav":{
                "upTo":"settingNetDisStateAgree","downTo":"settingNetDisclaimNextBtn"
            },
            "handler":{
                "aftEnterHandler":"wizardSetAgreeImproveFlag"
            }
        },
        {
            "id":"wizardDisclaimImproveAgreeBtn",
            "description":"勾选按钮",
            "CaEType":"SwitchDiv",
            "imageList":{
                "openImg":"img/Disclaimer_select.png",
                "closeImg":"img/Disclaimer_unselect.png"
            },
            "classes":{
                "normal":"wizardDisclaimImg"
            }
        },
        {
            "id":"wizardDisclaimImproveAgreeInfo",
            "description":"同意项",
            "CaEType":"span"
        },
        {
            "id":"wizardDisclaimImproveDsc",
            "description":"同意描述",
            "CaEType":"div"
        },
        {
            "id":"settingNetDisclaimNextBtn",
            "description":"下一步",
            "CaEType":"div",
            "classes":{
                "normal":"wizardBtnNormal","focus":"wizardBtnFocus","disable":"wizardBtnDisable"
            },
            "nav":{
                "upTo":"settingNetDisImprove"
            },
            "handler":{
                "aftEnterHandler":"wizardDisclaimerToNextPage"
            }
        }
    ];
    wizardInitNetSetDisclaimerPage();
    return wizardNetSetDisclaimerPageData;
}
var wizardNetSetDisclaimerPageData={
    "settingNetDisclaimPageTitle":{"Data":"Disclaimer"},
    "settingNetDisclaimerServStateBtn":{"Data":"Legal statement"},
    "settingNetDisclaimerServStateReminder":{"Data":"Click to read the legal statement"},
    "wizardDisclaimStateAgreeBtn":{"Data":false},
    "wizardDisclaimStateAgreeInfo":{"Data":"I have read and agree to the statement"},
    "wizardDisclaimStateDsc":{"Data":"If you do not accept the agreement, internet based functions and services will not be available."},
    "wizardDisclaimImproveAgreeBtn":{"Data":false},
    "wizardDisclaimImproveAgreeInfo":{"Data":"Join in user improvement plan"},
    "wizardDisclaimImproveDsc":{"Data":"Automatically send usage information,statistics,and crash report to Hisense."},
    "settingNetDisclaimNextBtn":{"Data":"Next"},
    "operateData":{
        "agreeStateFlag":0,
        "agreeImproveFlag":0
    },
    "langData":{
        "Disclaimer":["Disclaimer"],
        "Legal statement":["Legal statement"],
        "Click to read the legal statement":["Click to read the legal statement"],
        "I have read and agree to the statement":["I have read and agree to the statement"],
        "If you do not accept the agreement, internet based functions and services will not be available.":["If you do not accept the agreement, internet based functions and services will not be available."],
        "Join in user improvement plan":["Join in user improvement plan"],
        "Next":["Next"]
    },
    rewrite:"wizardRefreshDisclaimerPage"
}
/*******************************************************************
 name:wizardRefreshDisclaimerPage
 description:刷新免责声明页
 input:
 output:
 return
 *******************************************************************/
function wizardInitNetSetDisclaimerPage(){
    var data = wizardNetSetDisclaimerPageData;
    data.operateData.agreeStateFlag = getNetworkDisclaimerAgreeFlag();
    data.operateData.agreeImproveFlag = 0;
}
/*******************************************************************
 name:wizardRefreshDisclaimerPage
 description:刷新免责声明页
 input:
 output:
 return
 *******************************************************************/
function wizardRefreshDisclaimerPage(data){
    if(data.operateData.agreeStateFlag == 0){
        data.wizardDisclaimStateAgreeBtn.Data = false;
        data.settingNetDisclaimNextBtn.disable = true;
    }else{
        data.wizardDisclaimStateAgreeBtn.Data = true;
        data.settingNetDisclaimNextBtn.disable = false;
    }
    if(data.operateData.agreeImproveFlag == 0){
        data.wizardDisclaimImproveAgreeBtn.Data = false;
    }else{
        data.wizardDisclaimImproveAgreeBtn.Data = true;
    }
}
/*******************************************************************
 name:wizardSetAgreeFlagState
 description:设置是否同意免责声明内容
 input:
 output:
 return
 *******************************************************************/
function wizardSetAgreeStateFlag(operateData,data){

    if(operateData.agreeStateFlag == 0){
        operateData.agreeStateFlag = 1;
        setNetworkDisclaimerAgreeFlag(1);
    }
    else{
        operateData.agreeStateFlag = 0;
        setNetworkDisclaimerAgreeFlag(0);
    }
    hiWebOsFrame.NetSetDisclaimerPage.rewriteDataOnly();
}
/*******************************************************************
 name:wizardSetAgreeImproveFlag
 description:设置是否同意提升海信性能
 input:
 output:
 return
 *******************************************************************/
function wizardSetAgreeImproveFlag(){
    var data = wizardNetSetDisclaimerPageData;
    if(data.operateData.agreeImproveFlag == 0){
        data.operateData.agreeImproveFlag = 1;
    }
    else{
        data.operateData.agreeImproveFlag = 0;
    }
    hiWebOsFrame.NetSetDisclaimerPage.rewriteDataOnly();
}

/*******************************************************************
 name:wizardDisclaimerToNextPage
 description:从免责声明进入下一页
 input:
 output:
 return
 *******************************************************************/
function wizardDisclaimerToNextPage(){
    var data = wizardNetSetDisclaimerPageData;
    if(data.operateData.agreeStateFlag == 1){
        wizardDisclaimerToNetSetMainPage();
    }else{
        wizardNetSetDisclaimerEscHandle();
    }
}
/*******************************************************************
 name:wizardDisclaimerToNetSetMainPage
 description:从免责声明进入网络设置主页
 input:
 output:
 return
 *******************************************************************/
function wizardDisclaimerToNetSetMainPage(){
    switch (getWizardSetFlag()){
        case 1:
            hiWebOsFrame.createPage('wizardNetSetMainPageId',null, hiWebOsFrame.wizardNetworkPage, null,function(a){
                hiWebOsFrame.NetSetDisclaimerPage.close();
                a.open();
                a.hiFocus();
                hiWebOsFrame.NetSetMainPage = a;
                hiWebOsFrame.NetSetDisclaimerPage.destroy();
            });
            break;
        default:
            hiWebOsFrame.createPage('settingNetSetMainPageId',null, hiWebOsFrame.settingsFirst, null,function(a){
                hiWebOsFrame.NetSetDisclaimerPage.close();
                a.open();
                a.hiFocus();
                hiWebOsFrame.NetSetMainPage = a;
                hiWebOsFrame.NetSetDisclaimerPage.destroy();
            });
            break;
    }
}
/*******************************************************************
 name:wizardDisclaimerToNetworkPage
 description:未同意免责声明则进入下一页
 input:
 output:
 return
 *******************************************************************/
function wizardDisclaimerToNetworkPage(){
    hiWebOsFrame.wizardBlackBgPage.close();
    hiWebOsFrame.wizardBlackBgPage.destroy();

    hiWebOsFrame.NetSetDisclaimerPage.close();
    hiWebOsFrame.NetSetDisclaimerPage.destroy();
    hiWebOsFrame.wizardNetworkPage.hiFocus();
}
/*******************************************************************
 name:wizardNetSetDisclaimerEscHandle
 description:从免责声明按ESC键退出
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetDisclaimerEscHandle(){
    this.page.close();
    this.page.destroy();
    var wizardSetFlag = getWizardSetFlag();
    switch (wizardSetFlag){
        case 1:
            hiWebOsFrame.wizardBlackBgPage.close();
            hiWebOsFrame.wizardBlackBgPage.destroy();
            hiWebOsFrame.wizardNetworkPage.hiFocus();
            break;
        default :
            hiWebOsFrame.setting_level2_img_page.close();
            hiWebOsFrame.setting_level2_img_page.destroy();
            hiWebOsFrame.settingsFirst.hiFocus();
            break;
    }
}
/*******************************************************************
 name:wizardNetSetReadDisclaimer
 description:打开免责声明详情页
 input:
 output:
 return
 *******************************************************************/
function wizardNetSetReadDisclaimer(){
    var wizardSetFlag = getWizardSetFlag();
    switch (wizardSetFlag){
        case 1:
            hiWebOsFrame.createPage('wizardNetSetDisInfoPageId',null, this.page, null,function(a){
                hiWebOsFrame.NetSetDisclaimerPage.close();
                a.open();
                a.hiFocus();
                hiWebOsFrame.NetSetDisInfoPage = a;
            });
            break;
        default :
            hiWebOsFrame.createPage('settingNetSetDisInfoPageId',null, this.page, null,function(a){
                hiWebOsFrame.NetSetDisclaimerPage.close();
                a.open();
                a.hiFocus();
                hiWebOsFrame.NetSetDisInfoPage = a;
            });
            break;
    }
}

function wizardNetSetDisclaimerPageOnDestroy(){
    hiWebOsFrame.NetSetDisclaimerPage = null;
}