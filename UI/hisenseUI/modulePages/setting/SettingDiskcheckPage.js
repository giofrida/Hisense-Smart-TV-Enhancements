/**
 * Created by Administrator on 14-6-18.
 */
function getSettingDiskcheckPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_diskcheck_title",
            "classes": {
                "normal": "setting_sys_lang2_title", "focus": "setting_sys_lang2_title"
            },
            "description": "",
            "CaEType": "span",
            "handler": {
                "aftEscHandler": "SettingDiskcheckEsc"
            }
        },
        {
            "id": "setting_sys_diskcheck_img1",
            "description": "",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_diskcheck_text",
            "description": "",

            "CaEType": "div"
        }

    ];
    return PageDataSetttingSysdiskcheck;
}

var PageDataSetttingSysdiskcheck= {
    "setting_sys_diskcheck_title":{Data:"Detect HDD"},
    "setting_sys_diskcheck_img1":{Data:"img/loading.png"},
    "setting_sys_diskcheck_text":{Data:"Detecting external HDD"},
    "operateData": {
        "parentpage":"pvr",
	    "textList":[
		    {
			    "title":"HDD detecting",
			    "content":"Detecting external HDD"
		    },
		    {
			    "title":"HDD speed detecting",
			    "content":"Detecting disk speed"
		    },
		    {
			    "title":"Hard Disk Format",
			    "content":"Formatting the disk. Please wait..."
		    }
	    ],
	    "curTextIndex":0
    },
    "langData":{
	    "HDD detecting": [],
	    "HDD speed detecting": [],
	    "Detecting external HDD": [],
	    "Detecting disk speed": []
    },
    rewrite:function(pageData) {

	    pageData.setting_sys_diskcheck_title.Data=pageData.operateData.textList[pageData.operateData.curTextIndex].title;
        pageData.setting_sys_diskcheck_text.Data=pageData.operateData.textList[pageData.operateData.curTextIndex].content;
    }

};

function SettingDiskcheckEsc()
{
	debugRM("Exit to pvr page!");
	this.page.close();
	PageDataSettingPvrList.operateData.curtitle=0;
	PageDataSettingPvrList.operateData.curstep=0;
	PageDataSettingPvrList.operateData.curselectpartition = 0;
	PageDataSettingPvrList.operateData.curselectmemmory = 0;
	hiWebOsFrame.settingssyspvr.open();
	hiWebOsFrame.settingssyspvr.hiFocus();
}

function SettingDiskcheckonOpen()
{
    debugPrint("SettingDiskcheckonOpen");
}

function SettingDiskcheckonClose()
{
    debugPrint("SettingDiskcheckonClose");
}

function SettingDiskcheckonDestroy()
{
    debugRM("hiWebOsFrame.settingssysdiskcheck=null");
	hiWebOsFrame.settingssysdiskcheck=null;
}