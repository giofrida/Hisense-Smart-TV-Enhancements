/**
 * Created by hicom on 14-7-30.
 */
/**
 * Created by hicom on 14-7-9.
 */


function tshiftDialogEnterBtn(opeData,data){
    if(tv){
    }
    exitTshiftMedia();
}

function forceToExitTshiftMedia(){
    try{
        if(!!hiWebOsFrame.tshiftmedia.timer){
            clearTimeout(hiWebOsFrame.tshiftmedia.timer);
            hiWebOsFrame.tshiftmedia.timer = null;
            g_tshiftmediaShow = false;
        }
    }catch(e){
        debugPrint(e.message);
    }
}


function tshiftMediaDialogOnOpen(){
    try {
        if ('APP_5890_SA' == currentPlatform_config)
        {

            $("#tshift_diskcheck_img").css("display","none")
            $("#opera_4_5_tshift_diskcheck_img").css("display","block")
        }
        else
        {
            $("#tshift_diskcheck_img").css("display","block")
            $("#opera_4_5_tshift_diskcheck_img").css("display","none")

        }
    } catch (ex) {
        debugE(ex.message);
    }
}


function exitTshiftMedia(){
    clearTimeout(hiWebOsFrame.tshiftmedia.timer);
    hiWebOsFrame.tshiftmedia.timer = null;
    g_tshiftmediaShow = false;
    hiWebOsFrame.tshiftmedia.close();
    if(!!hiWebOsFrame.tshiftProgressPage){
        hiWebOsFrame.tshiftProgressPage.close();
        //hiWebOsFrame.tshiftProgressPage = null;
    }
    if(hiWebOsFrame.getCurrentPageId() == "tshiftMediaDialog" )
    {
        openLiveTVModule([Msg.INFO, 0]);
    }
}

function getTMDialogPageData(page){

    page.CaE = [
        {
            "id": "tshift_diskcheck_img",
            "description": "",
            "CaEType": "img"
        },
        {
            "id":"tshift_diskcheck_content",
            "description":"提示内容",
            "nav":{
            },
            "CaEType": "div",
            "handler":{
                'aftEscHandler':'tshiftDialogEnterBtn'//点击enter事件后处理开关转换
            }
        }
    ];
    return TMDiglogPageData;
}

var TMDiglogPageData = {
    "tshift_diskcheck_content":{
        "Data":"Preparation of hard disk is in progress……"
    },
    "tshift_diskcheck_img":{
        "Data":"img/loading.png"
    },
    "operateData": {
        "langIndex":0,
        "tshift_diskcheck_content":{
            "Data":"Preparation of hard disk is in progress……"
        },
        timer:null
    },
    "langData":{
        "Preparation of hard disk is in progress……":["Preparation of hard disk is in progress……"]

    },
    rewrite:"TMDiglogPageDataRewrite"
};


function TMDiglogPageDataRewrite(data){
    try
    {
        var opeData = data.operateData;
        data.tshift_diskcheck_content.Data =   opeData.tshift_diskcheck_content.Data;
    }
    catch(ex){
       debugPrint('tmedia data error :'+ex);
    }


}
