/**
 * Created by Administrator on 14-9-12.
 */

function getSettingInputBlockPageData(opt)
{
    opt.CaE=[

        {
            "id": "setting_sys_inputblock_title",
            "description": "setting head",
            "CaEType": "span"
        },
        {

            "id": "setting_sys_inputblock_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "nav": {"downTo": ""},

            "classes": {
                "normal": "setting_sys_inputblock_ul1_linormal", "focus": "setting_sys_inputblock_ul1_lifocus"
            },
            "handler": {
                "aftEnterHandler": "SettingSysInputblockUl1Enter",
                "aftEscHandler": "SettingSysInputblockEsc",
                "aftDownHandler": "SettingSysInputblockDown",
                "aftUpHandler": "SettingSysInputblockUp"
            },
            oriCaE: [
                {
                    "id": "setting_sys_inputblock_text",
                    "description": "名称",
                    "strFilter":true,
                    "CaEType": "span"
                },
                {
                    "id": "setting_sys_inputblock_img1",
                    "description": "名称",
                    "CaEType": "img"
                },
                {
                    "id": "setting_sys_inputblock_img2",
                    "description": "名称",
                    "CaEType": "img"
                },
                {
                    "id": "setting_sys_inputblock_img3",
                    "description": "名称",
                    "CaEType": "img"
                }

            ],
            UlConfig: {

                "UlDataItem": ["setting_sys_inputblock_text","setting_sys_inputblock_img1","setting_sys_inputblock_img2","setting_sys_inputblock_img3"],
                "PageSize":6


            }
        }
//        {
//
//            "id":"setting_sys_inputblock_btn1",
//            "description":"ok",
//            "classes": {
//                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
//            },
//            "nav": { "upTo":"setting_sys_inputblock_ul1","rightTo":"setting_sys_inputblock_btn2"},
//            "CaEType": "div",
//            "handler":{
//                'aftEnterHandler':"SettingSysInputblockOK",//点击enter事件后处理开关转换
//                'aftEscHandler':"SettingSysInputblockEsc"//点击enter事件后处理开关转换
//
//            }
//
//        },
//        {
//            "id":"setting_sys_inputblock_btn2",
//            "description":"ok",
//            "classes": {
//                "normal": "setting_sys_button_normal", "focus": "setting_sys_button_focus"
//            },
//            "nav": {  "upTo":"setting_sys_inputblock_ul1","leftTo":"setting_sys_inputblock_btn1"},
//            "CaEType": "div",
//            "handler":{
//                'aftEnterHandler':"SettingSysInputblockEsc",//点击enter事件后处理开关转换
//                'aftEscHandler':"SettingSysInputblockEsc"//点击enter事件后处理开关转换
//
//            }
//
//        }


    ];
     getinputlListData();
    return PageDataSettingSysInputblock;
}

var PageDataSettingSysInputblock={
    "setting_sys_inputblock_title":{Data:"Input Block"},
    "setting_sys_inputblock_ul1": {Data:[
        {
            "setting_sys_inputblock_text": {Data:"TV"},
            "setting_sys_inputblock_img1": {Data:"img/quickset_tv_hl.png"},
            "setting_sys_inputblock_img2": {Data:"img/quickset_tv.png"},
            "setting_sys_inputblock_img3": {Data:""}
        },
        {
            "setting_sys_inputblock_text": {Data:"Hdmi1"},
            "setting_sys_inputblock_img1": {Data:"img/quickset_hdmi1_hl.png"},
            "setting_sys_inputblock_img2": {Data:"img/quickset_hdmi1.png"},
            "setting_sys_inputblock_img3": {Data:""}
        },
        {
            "setting_sys_inputblock_text": {Data:"Hdmi2"},
            "setting_sys_inputblock_img1": {Data:"img/quickset_hdmi2_hl.png"},
            "setting_sys_inputblock_img2": {Data:"img/quickset_hdmi2.png"},
            "setting_sys_inputblock_img3": {Data:""}
        },
        {
            "setting_sys_inputblock_text": {Data:"Hdmi3"},
            "setting_sys_inputblock_img1": {Data:"img/quickset_hdmi3_hl.png"},
            "setting_sys_inputblock_img2": {Data:"img/quickset_hdmi3.png"},
            "setting_sys_inputblock_img3": {Data:""}
        },
        {
            "setting_sys_inputblock_text": {Data:"Hdmi4"},
            "setting_sys_inputblock_img1": {Data:"img/quickset_hdmi4_hl.png"},
            "setting_sys_inputblock_img2": {Data:"img/quickset_hdmi4.png"},
            "setting_sys_inputblock_img3": {Data:""}
        },
        {
            "setting_sys_inputblock_text": {Data:"AV"},
            "setting_sys_inputblock_img1": {Data:"img/quickset_av_hl.png"},
            "setting_sys_inputblock_img2": {Data:"img/quickset_av.png"},
            "setting_sys_inputblock_img3": {Data:""}
        }

    ],
        "SelectedIndex":0
    },
//    "setting_sys_inputblock_btn1":{Data:"Save"},
//    "setting_sys_inputblock_btn2":{Data:"Cancel"},
    "operateData": {
        "curchllist":[
            {
                "name":"TV",
                "lockflag":true,
                "img1":"img/quickset_tv_hl.png",
                "img2":"img/quickset_tv.png"
            },
            {
                "name":"Hdmi1",
                "lockflag":true,
                "img1":"img/quickset_hdmi1_hl.png",
                "img2":"img/quickset_hdmi1.png"
            },
            {
                "name":"Hdmi2",
                "lockflag":true,
                "img1":"img/quickset_hdmi2_hl.png",
                "img2":"img/quickset_hdmi2.png"
            },
            {
                "name":"Hdmi3",
                "lockflag":true,
                "img1":"img/quickset_hdmi3_hl.png",
                "img2":"img/quickset_hdmi3.png"
            }
//          {
//                "name":"Hdmi4",
//                "lockflag":true,
//                "img1":"img/quickset_hdmi4_hl.png",
//                "img2":"img/quickset_hdmi4.png"
//            }
//            ,
//            {
//                "name":"AV",
//                "lockflag":true,
//                "img1":"img/quickset_av_hl.png",
//                "img2":"img/quickset_av.png"
//            }
//            ,
//            {
//                "name":"COMPONENT",
//                "lockflag":true,
//                "img1":"img/quickset_av_hl.png",
//                "img2":"img/quickset_av.png"
//            },
//            {
//                "name":"AV",
//                "lockflag":true,
//                "img1":"img/quickset_av_hl.png",
//                "img2":"img/quickset_av.png"
//            }
//            ,
//            {
//                "name":"COMPONENT",
//                "lockflag":true,
//                "img1":"img/quickset_av_hl.png",
//                "img2":"img/quickset_av.png"
//            }
        ],
        "step":0,
        "curselect":0
    },
    "langData":{
        "Input Block": []
    },
    rewrite:function(pageData){
        var element={};
        var item={};


            pageData.setting_sys_inputblock_ul1.SelectedIndex=pageData.operateData.curselect;
            pageData.setting_sys_inputblock_ul1.Data=[];
            if(pageData.operateData.curchllist.length>0)
            {
                debugPrint("curchllist.length"+pageData.operateData.curchllist.length);
                $.each(pageData.operateData.curchllist, function (k, v) {
                    element.setting_sys_inputblock_text={};
                    element.setting_sys_inputblock_img1={};
                    element.setting_sys_inputblock_img2={};
                    element.setting_sys_inputblock_img3={};
                    element.setting_sys_inputblock_text.Data = v.name;
                    if(hiWebOsFrame.getCurrentArea()=="SA"&&v.name.toLowerCase()=="component"&&!!langPackages["Component"])
                    {
                        element.setting_sys_inputblock_text.Data = langPackages["Component"][hiWebOsFrame.getCurrentLanguageIndex()];
                    }

                    element.setting_sys_inputblock_img1.Data= v.img1;
                    element.setting_sys_inputblock_img2.Data= v.img2;
                    if(v.lockflag)
                    {
                        element.setting_sys_inputblock_img3.Data="img/setting_channellock.png";
                    }
                    else
                    {
                        element.setting_sys_inputblock_img3.Data="img/blank.png";
                    }
                   pageData.setting_sys_inputblock_ul1.Data.push(_cloneObj(element));
                })
            }
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
//               $(".setting_sys_inputblock_img1").css("margin","17px 0 0 15px");
//                $(".setting_sys_inputblock_txt1").css("margin","0 0 0 20px");
//                $(".setting_sys_inputblock_img2").css("margin","24px 65px 0 0");
                $(".setting_sys_inputblock_ul1").css("float","left");
                $(".setting_sys_inputblock_ul1").css("margin","30px 0 0 64px");
                $("#setting_sys_inputblock_container").css("float","right");
                $("#setting_sys_inputblock_container").css("margin","55px 15px 0 0");


            }
            else {
//               $(".setting_sys_inputblock_img1").css("margin","17px 15px 0 0");
//                $(".setting_sys_inputblock_txt1").css("margin","0 20px 0 0");
//                $(".setting_sys_inputblock_img2").css("margin","24px 0 0 65px");
                $(".setting_sys_inputblock_ul1").css("float","right");
                $(".setting_sys_inputblock_ul1").css("margin","30px 64px 0 0 ");
                $("#setting_sys_inputblock_container").css("float","left");
                $("#setting_sys_inputblock_container").css("margin","55px 0 0 15px");


            }
        }

};

function SettingInputBlockonDestroy()
{
    hiWebOsFrame.settingssysinputblock=null;
}
function SettingSysInputblockOK()
{
    this.page.close();
    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();
    hiWebOsFrame.settingssyssecurity.rewriteDataOnly();
}
function SettingSysInputblockEsc()
{
    this.page.close();
 //   this.page.operateData.curfocus=0;
//    PageDataSettingSysSecurity.

    hiWebOsFrame.settingssyssecurity.open();
    hiWebOsFrame.settingssyssecurity.hiFocus();
    hiWebOsFrame.settingssyssecurity.rewriteDataOnly();
}
function SettingSysInputblockDown()
{
    if(this.SelectedIndex < PageDataSettingSysInputblock.setting_sys_inputblock_ul1.Data.length&&this.SelectedIndex>5)
    {

        var temp=parseInt((this.SelectedIndex-5)*PageDataSettingSysInputblock.operateData.step);
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_sys_inputblock_srcollbar").css("top",temp);


    }
}
function SettingSysInputblockUp()
{
    if(this.SelectedIndex <  PageDataSettingSysInputblock.setting_sys_inputblock_ul1.Data.length-6)
    {

        var temp=parseInt(this.SelectedIndex*PageDataSettingSysInputblock.operateData.step);
        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
        // temp+=temp+PageDataSettingSysList1.operateData.step;
        $("#setting_sys_inputblock_srcollbar").css("top",temp);


    }
}

function SettingSysInputblockUl1Enter()
{

    if(this.page.operateData.curchllist[this.SelectedIndex].lockflag)
    {
        // todo  js set false
        this.page.operateData.curchllist[this.SelectedIndex].lockflag=false;
        model.parentlock.InputBlock(this.page.operateData.curchllist[this.SelectedIndex].uid,0,0);
       // CH_setSourceLocked(this.page.operateData.curchllist[this.SelectedIndex].uid,0);
        livetvmain.updateSourceAttribute(this.page.operateData.curchllist[this.SelectedIndex].uid, 3, false);
        debugPrint("set the input block unlocked");
    }
    else
    {// todo  js set true
        this.page.operateData.curchllist[this.SelectedIndex].lockflag=true;
        model.parentlock.InputBlock(this.page.operateData.curchllist[this.SelectedIndex].uid,1,0);
       // CH_setSourceLocked(this.page.operateData.curchllist[this.SelectedIndex].uid,1);
        livetvmain.updateSourceAttribute(this.page.operateData.curchllist[this.SelectedIndex].uid, 3, true);
        debugPrint("set the input block locked");
    }
    this.page.operateData.curselect=this.SelectedIndex;
    this.page.rewriteDataOnly();
    SetRecentUse("Parental Controls",2,CHL_PARENTCONTROL);

}
function UpdataInputBlockScrollBar(pageData)
{
    var i=pageData.setting_sys_inputblock_ul1.Data.length;
    if(i>6)
    {
        var temp=parseInt(358/i*6);
        $("#setting_sys_inputblock_srcollbar").css("visibility","visible");
        $("#setting_sys_inputblock_srcollbar").css("height",temp);
    }
    else
    {
        $("#setting_sys_inputblock_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=358/i;

}
function InputBlockOpenHandler()
{
    UpdataInputBlockScrollBar(this.data);
    if(PageDataSettingSysInputblock.setting_sys_inputblock_ul1.Data.length>5)
    {
        var index=this.page.getCaE("setting_sys_inputblock_ul1").BeginIdx;
        debugPrint("index"+index);
        $("#setting_sys_inputblock_srcollbar").css("top",parseInt(358/PageDataSettingSysInputblock.setting_sys_inputblock_ul1.Data.length)*index);
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
//        $(".setting_sys_inputblock_img1").css("margin","17px 0 0 15px");
//        $(".setting_sys_inputblock_txt1").css("margin","0 0 0 20px");
//        $(".setting_sys_inputblock_img2").css("margin","24px 65px 0 0");
        $(".setting_sys_inputblock_ul1").css("float","left");
        $(".setting_sys_inputblock_ul1").css("margin","30px 0 0 64px");
        $("#setting_sys_inputblock_container").css("float","right");
        $("#setting_sys_inputblock_container").css("margin","55px 15px 0 0");


    }
    else {
//        $(".setting_sys_inputblock_img1").css("margin","17px 15px 0 0");
//        $(".setting_sys_inputblock_txt1").css("margin","0 20px 0 0");
//        $(".setting_sys_inputblock_img2").css("margin","24px 0 0 65px");
        $(".setting_sys_inputblock_ul1").css("float","right");
        $(".setting_sys_inputblock_ul1").css("margin","30px 64px 0 0 ");
        $("#setting_sys_inputblock_container").css("float","left");
        $("#setting_sys_inputblock_container").css("margin","55px 0 0 15px");


    }
   // else
//    {   var temp=671-(5-PageDataSettingSysInputblock.setting_sys_inputblock_ul1.Data.length)*68
//        $("#setting_sys_input_block_box").css("height",temp+'px');
//        var height=parseInt((1080-temp)/2);
//        $("#setting_sys_input_block_box").css("top",height+'px');
  //  }

}

function getinputlListData()
{
    try{
        var temp=model.source.getInputName();
        var element={};
        debugPrint("get the input list is "+JSON.stringify(temp));
        var cout=parseInt( temp.length/6);
        PageDataSettingSysInputblock.operateData.curchllist=[];
        for(var i=0;i<cout;i++)
        {
            element.uid=temp[i*6];
            element.name=temp[i*6+4];
            var name=temp[i*6+1];
            name=name.replace(/\s+/g,"");//去除空格符
            if(name.toLowerCase()=="tv")
            {
                element.img1="img/quickset_tv_hl.png",
                element.img2="img/quickset_tv.png"
            }
            else if(name.toLowerCase().indexOf("hdmi1")>=0)
            {
                element.img1="img/quickset_hdmi1_hl.png",
                element.img2="img/quickset_hdmi1.png"
            }
            else if(name.toLowerCase().indexOf("hdmi2")>=0)
            {
                element.img1="img/quickset_hdmi2_hl.png",
                element.img2="img/quickset_hdmi2.png"
            }
            else if(name.toLowerCase().indexOf("hdmi3")>=0)
            {
                element.img1="img/quickset_hdmi3_hl.png",
                element.img2="img/quickset_hdmi3.png"
            }
            else if(name.toLowerCase().indexOf("hdmi4")>=0)
            {
                element.img1="img/quickset_hdmi4_hl.png",
                element.img2="img/quickset_hdmi4.png"
            }
            else if(name.toLowerCase()=="av")
            {
                element.img1="img/quickset_av_hl.png",
                element.img2="img/quickset_av.png"
            }
            else if(name.toLowerCase()=="component")
            {
                element.img1="img/quickset_com_hl.png",
                element.img2="img/quickset_com.png"
            }
            else if(name.toLowerCase()=="scart")
            {
                element.img1="img/quickset_scart_hl.png",
                element.img2="img/quickset_scart.png"
            }
            if(temp[i*6+3]==1)
            {
                element.lockflag=true;
            }
            else
            {
               element.lockflag=false;
            }
            PageDataSettingSysInputblock.operateData.curchllist.push(_cloneObj(element));
        }
        debugPrint("get the input list is "+JSON.stringify(PageDataSettingSysInputblock.operateData.curchllist));

    }catch (e)
    {
        debugPrint(e.message);
    }
}

