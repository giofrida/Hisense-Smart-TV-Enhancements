//11-27-2014
function getSettingsubtlistPageData(opt)
{
	opt.CaE= [
		{
			"id": "setting_subtitle_list1_title",
			"description": "setting head",
			"CaEType": "span"
		},
        {
            "id": "setting_subtitle_box_text",
            "description": "",
            "CaEType": "span"
        },
		{
			"id": "setting_subtitle_list1_ul1",
			"description": "列表项目",
			"CaEType": "Ul",
			"disable": false,
			"SelectedIndex": 0,
			"nav": {
				"downTo": "setting_subtitle_list1_pl"
			},
			"classes": {
				"normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
			},
			"handler": {
				"befEnterHandler": "SettingSubtitleList1EnHandler",
				"aftDownHandler": "SettingSubtitleList1DownHandler",
				"aftUpHandler": "SettingSubtitleList1UpHandler",
				"aftEscHandler": "SettingSubtitleList1EscHandler",
                "keySUBTHandler":"SettingSubtitleList1EscHandler"
			},
			oriCaE: [
				{
					"id": "setting_subtitle_list1_txt1",
					"description": "名称",
					"CaEType": "span"
				},
				{
					"id": "setting_subtitlelist1_img1",
					"description": "图片",
					"CaEType": "img"
				}
			],
			UlConfig: {
				"UlDataItem": [ "setting_subtitle_list1_txt1", "setting_subtitlelist1_img1"],
				"PageSize":3
			}
		},
		{
			"id": "setting_subtitle_list1_pl",
			"description": "setting text",
			"CaEType": "div",
			"nav": {
				"upTo": "setting_subtitle_list1_ul1"
			},
			"classes": {
				"normal": "setting_qs_list1_pl", "focus": "setting_qs_list1_pl_focus"
			},
			"handler": {
				"befEnterHandler": "SettingSubtitlePlEnHandler",
				"aftEscHandler": "SettingSubtitleList1EscHandler",
                "keySUBTHandler":"SettingSubtitleList1EscHandler"
			}
		}
	];

	SettingSubtitleListInit();

	return PageDataSettingSubtitleList;
}

function SettingSubtitleListInit()
{

    var tmpSubtitleList = [];
    var tmpSubtitleStatus = -1;
    var tmpSubtitleSelect = -1;

       try{
            tmpSubtitleList = model.system.getCurChannelSubtitleList();   //初始化Subtitle列表
        }catch(e) {
            debugE(e.message);
           tmpSubtitleList=[];
        }
//        tmpSubtitleList=["lang1","lang2"];
        debugE("subtitle_receivedList:"+tmpSubtitleList);
       if(tmpSubtitleList.length<=0){
            $("#setting_subtitle_list1_content").css("display","none");
            $("#setting_subtitle_box").css("display","block");
        }
        else{
            $("#setting_subtitle_box").css("display","none");
            $("#setting_subtitle_list1_content").css("display","block");

	       var tmpList = [], flag = 0;
	       for(var i = 0; i < tmpSubtitleList.length; ++i)
	       {
		       flag = 0;
		       for(var j = 0; j < PageDataSettingSubtitleList.operateData.audiolist.length; ++j)
		       {
			       if( PageDataSettingSubtitleList.operateData.audiolist[j].code == tmpSubtitleList[i].toLowerCase().substring(0,3) )
			       {
				       var tmpVar = "";
				       try{
					       tmpVar = langPackages[PageDataSettingSubtitleList.operateData.audiolist[j].name][hiWebOsFrame.getCurrentLanguageIndex()];
				       }catch (e){
					       debugE(e.message);
				       }

				       if( (tmpSubtitleList[i].indexOf("H.I") > 0) && (tmpSubtitleList[i].indexOf("TTX") > 0) )
				       {
					       tmpVar += "(H.I)(TTX)";
				       }
				       else if( tmpSubtitleList[i].indexOf("H.I") > 0 )
				       {
					       tmpVar += "(H.I)";
				       }
				       else if( tmpSubtitleList[i].indexOf("TTX") > 0 )
				       {
					       tmpVar += "(TTX)";
				       }
				       tmpList.push(tmpVar);
				       flag = 1;
				       break;
			       }
		       }
		       if(!flag)
		       {
			       var tempVar = tmpSubtitleList[i];
			       tmpList.push(tempVar);
		       }
	       }

            tmpList.unshift("Off");
            PageDataSettingSubtitleList.operateData.curdatalist = tmpList;
            try{
                tmpSubtitleStatus = model.system.getCurChannelSubtitleStatus(); //获取当前Subtitle是On还是Off
            }catch(e) {
                debugE(e.message);
            }
            debugRM("subtitle_receiveStatus:"+tmpSubtitleStatus);
            if(0 == tmpSubtitleStatus)
            {
                PageDataSettingSubtitleList.operateData.curselectindex = 0;
            }
            else if(1 == tmpSubtitleStatus)
            {
                try{
                    tmpSubtitleSelect = model.system.getCurChannelSubtitleSelect();
                }catch (e){
                    debugE(e.message);
                }
                debugRM("subtitle_receivedSelect:"+tmpSubtitleSelect);
                PageDataSettingSubtitleList.operateData.curselectindex = tmpSubtitleSelect + 1;
            }
        }


}

var PageDataSettingSubtitleList= {

	"setting_subtitle_list1_title":{Data:"Subtitle"},
    "setting_subtitle_box_text": {Data:"No subtitle"},
	"setting_subtitle_list1_ul1": {Data:[
		{
			"setting_subtitlelist1_img1": {Data:"img/unselectedBall.png"},
			"setting_subtitle_list1_txt1": {Data:""}
		}
	],
		"SelectedIndex":0
	},
	"setting_subtitle_list1_pl": {Data:"Primary Subtitle"},
	"operateData": {
		"curselectindex":0,
		"curdatalist":[],
		"lengthSign":false,
		"audiolist":[
			{
				"name":"English",
				"code":"eng"
			},
			{
				"name":"Chinese",
				"code":"chi"
			},
			{
				"name":"Chinese",
				"code":"zho"
			},
			{
				"name":"Basque",//巴斯克语
				"code":"baq"
			},
			{
				"name":"Basque",//巴斯克语
				"code":"eus"
			},
			{
				"name":"Bulgarian",//保加利亚语
				"code":"bul"
			},
			{
				"name":"Cantonese",//粤语
				"code":"yue"
			},
			{
				"name":"Catalan",//加泰罗尼亚语
				"code":"cat"
			},
			{
				"name":"Croatian",//克罗地亚语
				"code":"scr"
			},
			{
				"name":"Czech",//捷克
				"code":"cze"
			},
			{
				"name":"Czech",//捷克
				"code":"ces"
			},
			{
				"name":"Danish",//丹麦语
				"code":"dan"
			},
			{
				"name":"Dutch",//荷兰语
				"code":"dut"
			},
			{
				"name":"Dutch",//荷兰语
				"code":"nla"
			},
			{
				"name":"Estonian",//爱沙尼亚
				"code":"est"
			},
			{
				"name":"Finnish",//芬兰语
				"code":"fin"
			},
			{
				"name":"French",//法语
				"code":"fre"
			},
			{
				"name":"French",//法语
				"code":"fra"
			},
			{
				"name":"Gaelic",//盖尔语
				"code":"gla"
			},
			{
				"name":"Gaelic",//盖尔语
				"code":"gae"
			},
			{
				"name":"Gaelic",//盖尔语
				"code":"gdh"
			},
			{
				"name":"Irish",//爱尔兰语
				"code":"gle"
			},
			{
				"name":"Irish",//爱尔兰语
				"code":"gai"
			},
			{
				"name":"Irish",//爱尔兰语
				"code":"iri"
			},
			{
				"name":"Galician",//加利西亚语
				"code":"glg"
			},
			{
				"name":"German",//德语
				"code":"ger"
			},
			{
				"name":"German",//德语
				"code":"deu"
			},
			{
				"name":"Greek",//希腊语
				"code":"gre"
			},
			{
				"name":"Greek",//希腊语
				"code":"ell"
			},
			{
				"name":"Hindi",//印度语Hindi
				"code":"hin"
			},
			{
				"name":"Hungarian",//匈牙利语
				"code":"hun"
			},
			{
				"name":"Italian",
				"code":"ita"
			},
			{
				"name":"Icelandic",
				"code":"ice"
			},
			{
				"name":"Icelandic",
				"code":"isl"
			},
			{
				"name":"Japanese",
				"code":"jpn"
			},
			{
				"name":"Korean",
				"code":"kor"
			},
			{
				"name":"Mandarin",//普通话
				"code":"cmn"
			},
			{
				"name":"Maori",//毛利话
				"code":"mao"
			},
			{
				"name":"Maori",//毛利话
				"code":"mri"
			},
			{
				"name":"Norwegian",//挪威语
				"code":"nor"
			},
			{
				"name":"Polish",//波兰语
				"code":"pol"
			},
			{
				"name":"Portuguese",//葡萄牙语
				"code":"por"
			},
			{
				"name":"Romanian",//罗马尼亚语
				"code":"rum"
			},
			{
				"name":"Romanian",//罗马尼亚语
				"code":"ron"
			},
			{
				"name":"Russian",
				"code":"rus"
			},
			{
				"name":"Sami",//萨米
				"code":"smi"
			},
			{
				"name":"Serbian",//塞尔维亚
				"code":"scc"
			},
			{
				"name":"Slovak",//斯洛伐克
				"code":"slo"
			},
			{
				"name":"Slovak",//斯洛伐克
				"code":"slk"
			},
			{
				"name":"Slovenian",//斯洛文尼亚
				"code":"slv"
			},
			{
				"name":"Spanish",
				"code":"spa"
			},
			{
				"name":"Spanish",
				"code":"esl"
			},
			{
				"name":"Swedish",
				"code":"swe"
			},
			{
				"name":"Swedish",
				"code":"sve"
			},
			{
				"name":"Turkish",
				"code":"tur"
			},
			{
				"name":"Welsh",
				"code":"wel"
			},
			{
				"name":"Welsh",
				"code":"cym"
			},
			{
				"name":"Original",
				"code":"qaa"
			},
			{
				"name":"Narrative",
				"code":"nar"
			},
			{
				"name":"Undefined",
				"code":"und"
			},
			{
				"name":"Unknown",
				"code":"nul"
			},
			{
				"name":"Multiple languages",
				"code":"mul"
			}
		]
	},

	"langData":{
        "Subtitle":[],
        "No subtitle":[],
		"Off":[],
        "Primary Subtitle":[],
		"Unknown":[]
    },

	rewrite:function(pageData) {

		var element={};
		pageData.setting_subtitle_list1_ul1.Data=[];
		$.each(pageData.operateData.curdatalist, function (k, v) {
			element.setting_subtitlelist1_img1={};
			element.setting_subtitle_list1_txt1={};
			if(pageData.operateData.curselectindex==k)
			{
				element.setting_subtitlelist1_img1.Data="img/selectedBall.png";
			}
			else
			{
				element.setting_subtitlelist1_img1.Data="img/unselectedBall.png";
			}
			element.setting_subtitle_list1_txt1.Data= v;
			pageData.setting_subtitle_list1_ul1.Data.push(_cloneObj(element));
		});

		pageData.setting_subtitle_list1_ul1.SelectedIndex=pageData.operateData.curselectindex;
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_mt1_ul1").css("float","left")
            $(".setting_sys_mt1_ul1").css("margin","0 0 0 65px")
            // $("#setting_sys_list1_srcobar_container").css("float","right")
        }
        else {
            $(".setting_sys_mt1_ul1").css("float","right")
            $(".setting_sys_mt1_ul1").css("margin","0 65px 0 0")
            // $("#setting_sys_list1_srcobar_container").css("float","left")

        }
	}

};

function subtlistopenHandler()
{
    try
    {
	Updatasubtitlelist1ScrollBar(this.data);
	if(PageDataSettingSubtitleList.setting_subtitle_list1_ul1.Data.length>3)
	{
		var index=this.page.getCaE("setting_subtitle_list1_ul1").BeginIdx;
		$("#setting_subtitle_list1_srcollbar").css("top",parseInt(235/PageDataSettingSubtitleList.setting_subtitle_list1_ul1.Data.length)*index);
	}
	else if(PageDataSettingSubtitleList.setting_subtitle_list1_ul1.Data.length==0)
	{
		this.page.getCaE("setting_subtitle_list1_ul1").disable = true;
	}
    }catch (e)
    {
        debugE(e.message);
    }
}

function Updatasubtitlelist1ScrollBar(pageData)
{
	var i=pageData.setting_subtitle_list1_ul1.Data.length;
	if(i>3)
	{
		var temp=parseInt(235/i*3);
		$("#setting_subtitle_list1_srcollbar").css("height",temp);
		$("#setting_subtitle_list1_srcollbar").css("visibility","visible");
	}
	else
	{
		$("#setting_subtitle_list1_srcollbar").css("visibility","hidden");
	}
	pageData.operateData.step=parseInt(235/i);
}

function SettingSubtitleList1EnHandler()
{
	this.page.operateData.curselectindex=this.SelectedIndex;

		//todo the js
		if(0 == this.SelectedIndex)
		{
			try{
				model.system.setCurChannelSubtitleStatus(0);
			}catch (e){
				debugE(e.message);
			}
			debugPrint("currentSubtitleStatusSet==>Off");
		}
		else
		{
			try{
				model.system.setCurChannelSubtitleStatus(1);
				model.system.setCurChannelSubtitleSelect(this.SelectedIndex - 1);
			}catch (e){
				debugE(e.message);
			}
            debugPrint("currentSubtitleStatusSet:==>On");
			var tmpSubtitleSet = this.SelectedIndex - 1;
            debugPrint("currentSubtitleSelectSet:"+tmpSubtitleSet);
		}
    hiWebOsFrame.settingsubtitlelist.rewriteDataOnly();
    setTimeout(closesubtitlelistpage,1000);
}

function closesubtitlelistpage()
{
    debugPrint("close the page ");
    if (hiWebOsFrame.isCurrentModule("subtitle"))
    {
        if(!!hiWebOsFrame.settingsubtitlelist.origin)
        {
            hiWebOsFrame.settingsubtitlelist.close();
            hiWebOsFrame.settingsubtitlelist.origin.open();
            hiWebOsFrame.settingsubtitlelist.origin.hiFocus();
            hiWebOsFrame.settingsubtitlelist.destroy();
        }else{
            hiWebOsFrame.settingsubtitlelist.close();
            hiWebOsFrame.blankPage.open();
            hiWebOsFrame.blankPage.hiFocus();
            closePagesOrModuleByPage(hiWebOsFrame.settingsubtitlelist);
            hiWebOsFrame.settingsubtitlelist.destroy();
        }
    }
    else{
        hiWebOsFrame.settingsubtitlelist.close()
        hiWebOsFrame.settingsubtitlelist.destroy();
    }

}
function SettingSubtitleList1DownHandler()
{
	if(this.SelectedIndex < PageDataSettingSubtitleList.setting_subtitle_list1_ul1.Data.length&&this.SelectedIndex>2)
	{
		var temp=(this.SelectedIndex-2)*PageDataSettingSubtitleList.operateData.step;
		$("#setting_subtitle_list1_srcollbar").css("top",temp);
	}
}

function SettingSubtitleList1UpHandler()
{
	var temp=PageDataSettingSubtitleList.setting_subtitle_list1_ul1.Data.length;
	if(PageDataSettingSubtitleList.setting_subtitle_list1_ul1.Data.length>3 &&this.SelectedIndex < (temp-3))
	{
		var temp=this.SelectedIndex*PageDataSettingSubtitleList.operateData.step;
		$("#setting_subtitle_list1_srcollbar").css("top",temp);
	}
}

function SettingSubtitlePlEnHandler()
{
	this.page.close();
    openSubtitleSetting(hiWebOsFrame.blankPage);
	this.page.destroy();
}

function SettingSubtitleList1EscHandler()
{
    if(!!hiWebOsFrame.settingsubtitlelist.origin)
    {
        hiWebOsFrame.settingsubtitlelist.origin.open();
        hiWebOsFrame.settingsubtitlelist.origin.hiFocus();
        hiWebOsFrame.settingsubtitlelist.destroy();
    }else{
        hiWebOsFrame.blankPage.open();
        hiWebOsFrame.blankPage.hiFocus();
        closePagesOrModuleByPage(hiWebOsFrame.settingsubtitlelist);
        hiWebOsFrame.settingsubtitlelist.destroy();
    }
}

function SettingsubtlistPageonDestroy()
{
	debugRM("settingsubtitlelist Destroy!!!");
	hiWebOsFrame.settingsubtitlelist=null;
}