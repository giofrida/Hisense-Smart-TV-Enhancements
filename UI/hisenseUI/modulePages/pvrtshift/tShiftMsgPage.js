/**
 * Created by Administrator on 15-4-2.
 */

function exitTMsgPage(){

    if(!!hiWebOsFrame.tshiftMsg){
        hiWebOsFrame.tshiftMsg.close();
        if(!!hiWebOsFrame.tshiftMsg.timer){
            clearTimeout(hiWebOsFrame.tshiftMsg.timer);
            hiWebOsFrame.tshiftMsg.timer = null;
        }
    }

    if(!!hiWebOsFrame.tshiftProgressPage){
        hiWebOsFrame.tshiftProgressPage.destroy();
        hiWebOsFrame.tshiftProgressPage = null;
    }
    debugPrint("current page id: " + hiWebOsFrame.getCurrentPage().id);
    if(hiWebOsFrame.getCurrentPageId() == "tShiftMsg_id" )
    {
        openLiveTVModule([Msg.INFO, 0]);
    }
}

function forceToExitTMsgPage(){
    if(!!hiWebOsFrame.tshiftMsg.timer){
        clearTimeout(hiWebOsFrame.tshiftMsg.timer);
        hiWebOsFrame.tshiftMsg.timer = null;
    }
}

function getTMsgPageData(page){
    page.CaE = [
        {
            "id":"tshiftMsg_content",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div"
        }
    ];
    return TMsgPageData;
}

var TMsgPageData = {
    "tshiftMsg_content":{
        "Data":"Time shift failure"
    },
    "operateData": {
        "langIndex":0,
        "tshiftMsg_content":["Time shift failure","The free space is less than 1GB and time-shift is unavailable","HDD is unavailable","Setup failed, the disk is read-only or NTFS format"],
        showFlag:0,
        timer:null
    },
    "langData":{
        "Time shift failure":["Time shift failure"],
        "The free space is less than 1GB and time-shift is unavailable":["The free space is less than 1GB and time-shift is unavailable"],
        "HDD is unavailable":["HDD is unavailable"],
        "Setup failed, the disk is read-only or NTFS format":["Setup failed, the disk is read-only or NTFS format"]

    },
    rewrite:"TMsgPageDataRewrite"
};


function TMsgPageDataRewrite(data){
    try
    {
        var opeData = data.operateData;
        debugPrint("TMsgPageDataRewrite!!!"+data.operateData.showFlag);
        if(data.operateData.showFlag == 0)
        {
            data.tshiftMsg_content.Data =   opeData.tshiftMsg_content[0];
        }else if(data.operateData.showFlag == 1)
        {
            data.tshiftMsg_content.Data =   opeData.tshiftMsg_content[1];
        }else if(data.operateData.showFlag == 2)
        {
            data.tshiftMsg_content.Data =   opeData.tshiftMsg_content[2];
        }else if(data.operateData.showFlag == 3)
        {
            data.tshiftMsg_content.Data =   opeData.tshiftMsg_content[3];
        }

    }
    catch(ex){
        debugPrint('TMsgPageDataRewrite :'+ex);
    }
}
