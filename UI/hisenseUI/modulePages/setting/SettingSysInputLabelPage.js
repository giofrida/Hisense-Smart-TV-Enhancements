/**
 * Created by Administrator on 14-9-3.
 */
function getSettingSysInputLabelPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_inputlable_img1",
            "description": "menulanusge",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_inputlable_text1",
            "description": "menulanusge",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_inputlable_ul1",
            "description": "列表项目",
            "CaEType": "Ul",
            "disable": false,
            "SelectedIndex": 0,
            "firstFocusId": "setting_sys_inputlable_btn",
            "classes": {
                "normal": "setting_sys_inputblock_li_focus", "focus": "setting_sys_inputblock_li_focus","selected": "setting_sys_inputblock_li_focus"
            },
            "handler": {
               // "aftEnterHandler": "SettingSysInputBtnEnter",
               "aftEscHandler": "SettingSysInputEsc",
                "aftDownHandler":"SettingSysInputlabeldownfocus",
                "befLeftHandler":"SettingSysInputEsc",
                "aftUpHandler":"SettingSysInputlabelupfocus"

            },
            oriCaE: [

                {
                    "id": "setting_sys_inputlable_str1",
                    "description": "名称",
                    "strFilter":true,
                    "CaEType": "div"
                },
                {
                    "id": "setting_sys_inputlable_str2",
                    "description": "名称",
                    "strFilter":true,
                    "CaEType": "div"
                },
                {
                    "id": "setting_sys_inputlable_btn",
                    "description": "图片",
                    "CaEType": "div",
                    "classes": {
                    "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
                     },
                    "handler": {
                        "aftEnterHandler": "SettingSysInputBtnEnter",
                        "aftEscHandler": "SettingSysInputEsc"

                    }
                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_inputlable_str1", "setting_sys_inputlable_str1","setting_sys_inputlable_btn"],
                "PageSize":12

            }
        }
//        {
//            "id": "setting_sys_inputlable1_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//
//        {
//            "id": "setting_sys_inputlable1_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_sys_inputlable1_btn1",
//            "description": "",
//            "CaEType": "div",
//            "disable": false,
//            "classes": {
//                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
//            },
//            "nav":{"downTo": "setting_sys_inputlable1_btn2"},
//            "handler": {
//                "aftEnterHandler": "SettingSysInputBtnEnter",
//                "aftEscHandler": "SettingSysInputEsc"
//            }
//        },
//        {
//            "id": "setting_sys_inputlable2_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//
//        {
//            "id": "setting_sys_inputlable2_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_sys_inputlable1_btn2",
//            "description": "",
//            "CaEType": "div",
//            "disable": false,
//            "classes": {
//                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
//            },
//            "nav":{"downTo": "setting_sys_inputlable1_btn3","upTo": "setting_sys_inputlable1_btn1"},
//            "handler": {
//                "aftEnterHandler": "SettingSysInputBtnEnter",
//                "aftEscHandler": "SettingSysInputEsc"
//            }
//        },
//        {
//            "id": "setting_sys_inputlable3_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//
//        {
//            "id": "setting_sys_inputlable3_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_sys_inputlable1_btn3",
//            "description": "",
//            "CaEType": "div",
//            "disable": false,
//            "classes": {
//                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
//            },
//            "nav":{"downTo": "setting_sys_inputlable1_btn4","upTo": "setting_sys_inputlable1_btn2"},
//            "handler": {
//                "aftEnterHandler": "SettingSysInputBtnEnter",
//                "aftEscHandler": "SettingSysInputEsc"
//            }
//        },
//        {
//            "id": "setting_sys_inputlable4_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//
//        {
//            "id": "setting_sys_inputlable4_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_sys_inputlable1_btn4",
//            "description": "",
//            "CaEType": "div",
//            "disable": false,
//            "classes": {
//                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
//            },
//            "nav":{"downTo": "setting_sys_inputlable1_btn5","upTo": "setting_sys_inputlable1_btn3"},
//            "handler": {
//                "aftEnterHandler": "SettingSysInputBtnEnter",
//                "aftEscHandler": "SettingSysInputEsc"
//            }
//        },
//        {
//            "id": "setting_sys_inputlable5_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//
//        {
//            "id": "setting_sys_inputlable5_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_sys_inputlable1_btn5",
//            "description": "",
//            "CaEType": "div",
//            "disable": false,
//            "classes": {
//                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
//            },
//            "nav":{"downTo": "setting_sys_inputlable1_btn6","upTo": "setting_sys_inputlable1_btn4"},
//            "handler": {
//                "aftEnterHandler": "SettingSysInputBtnEnter",
//                "aftEscHandler": "SettingSysInputEsc"
//            }
//        },
//        {
//            "id": "setting_sys_inputlable6_str1",
//            "description": "",
//            "CaEType": "div"
//        },
//
//        {
//            "id": "setting_sys_inputlable6_str2",
//            "description": "",
//            "CaEType": "div"
//        },
//        {
//            "id": "setting_sys_inputlable1_btn6",
//            "description": "",
//            "CaEType": "div",
//            "disable": false,
//            "classes": {
//                "normal": "setting_select_langpage4", "focus": "setting_select_lang_focus"
//            },
//            "nav":{"downTo": "","upTo": "setting_sys_inputlable1_btn5"},
//            "handler": {
//                "aftEnterHandler": "SettingSysInputBtnEnter",
//                "aftEscHandler": "SettingSysInputEsc"
//            }
//        }

    ];
    inputlabelinit();
    return PageDataSettingSysInputLabel;
}
var PageDataSettingSysInputLabel={
    "setting_sys_inputlable_img1":{Data:"img/head_arrow.png"},
    "setting_sys_inputlable_text1":{Data:"Input Labels"},
    "setting_sys_inputlable_ul1": {Data:[
        {
            "setting_sys_inputlable_str1": {Data:"TV:"},
            "setting_sys_inputlable_str2": {Data:"TV"},
            "setting_sys_inputlable_btn": {Data:"Rename"}
        }

    ],
        "SelectedIndex":0
    },

      "operateData": {
          "curchllist":[
              {
                  "name":"TV",
                  "curname":"111"

              },
              {
                  "name":"Hdmi1",
                  "curname":"222"
              },
              {
                  "name":"Hdmi2",
                  "curname":"3333"
              },
              {
                  "name":"Hdmi3",
                  "curname":"444"
              },
              {
                  "name":"Hdmi4",
                  "curname":"55555"
              }
              ,
              {
                  "name":"AV",
                  "curname":"6666"
              }

          ],
           curselect:0
    },
    "langData":{
        "Rename": [],
        "Input Labels": []
    },
    rewrite:function(pageData){
        var element={};
        pageData.setting_sys_inputlable_ul1.SelectedIndex=pageData.operateData.curselect;
        pageData.setting_sys_inputlable_ul1.Data=[];
        if(pageData.operateData.curchllist.length>0)
        {
            debugPrint("curchllist.length"+pageData.operateData.curchllist.length);
            $.each(pageData.operateData.curchllist, function (k, v) {
                element.setting_sys_inputlable_str1={};
                element.setting_sys_inputlable_str2={};
                element.setting_sys_inputlable_btn={};
                element.setting_sys_inputlable_str1.Data = v.name+":";

                if(hiWebOsFrame.getCurrentArea()=="SA"&&v.name.toLowerCase()=="component"&&!!langPackages["Component"])
                {
                    element.setting_sys_inputlable_str1.Data = langPackages["Component"][hiWebOsFrame.getCurrentLanguageIndex()]+":";
                }

                element.setting_sys_inputlable_str2.Data= v.curname;
                element.setting_sys_inputlable_btn.Data= "Rename";
                pageData.setting_sys_inputlable_ul1.Data.push(_cloneObj(element));
            })
        }
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_inputlable_img1.Data="img/head_arrow.png";
            $(".setting_page_line").css("float","left");
            $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
           // $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
            $(".setting_select_langpage2").css("float","left");
            $(".setting_select_langpage3").css("float","left");

            $(".setting_select_lang_focus").css("float","right")
            $(".setting_select_langpage4").css("float","right")
            $(".setting_select_lang_disable").css("float","right");
            $(".setting_sys_lang1__cls").css("left","510px");
        }
        else {
            pageData.setting_sys_inputlable_img1.Data="img/head_arrow_right.png";
            $(".setting_page_line").css("float","right")
            $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
          //  $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
            $("#setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_select_langpage2").css("float","right");
            $(".setting_select_langpage3").css("float","right");
            $(".setting_select_lang_focus").css("float","left");
            $(".setting_select_langpage4").css("float","left");
            $(".setting_select_lang_disable").css("float","left");
            $(".setting_sys_lang1__cls").css("left","358px");
        }
    }

};

function SettingSysInputLabelonOpen()
{
    if(hiWebOsFrame.getCurrentArea()=="EU")
    {
       $("#setting_sys_inputlable_helpinfo").css("display","block");
    }
    else
    {
        $("#setting_sys_inputlable_helpinfo").css("display","none");
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
      //  pageData.setting_sys_inputlable_img1.Data="img/head_arrow.png";
        $(".setting_page_line").css("float","left");
        $(".setting_page_line").css("background-image",'url("img/setting_manu_bg.png")')
      //  $(".setting_sys_lang1_head_img1").css("margin","29px  0 0 65px");
        $(".setting_select_langpage2").css("float","left");
        $(".setting_select_langpage3").css("float","left");
        $(".setting_select_lang_focus").css("float","right")
        $(".setting_select_langpage4").css("float","right")
        $(".setting_select_lang_disable").css("float","right");
        $("#setting_sys_inputlable_page").css("left","510px");
    }
    else {
       // pageData.setting_sys_inputlable_img1.Data="img/head_arrow_right.png";
        $(".setting_page_line").css("float","right");
        $(".setting_page_line").css("background-image",'url("img/setting_manu_left_bg.png")')
      //  $(".setting_sys_lang1_head_img1").css("margin","29px  65px 0 0")
        $("#setting_sys_list1_srcobar_container").css("float","left");
        $(".setting_select_langpage2").css("float","right");
        $(".setting_select_langpage3").css("float","right");
        $(".setting_select_lang_focus").css("float","left");
        $(".setting_select_langpage4").css("float","left");
        $(".setting_select_lang_disable").css("float","left");
        $("#setting_sys_inputlable_page").css("left","328px");
    }
    for(var i=0;i<PageDataSettingSysInputLabel.operateData.curchllist.length;i++)
    {
        $("#setting_sys_inputlable_ul1_setting_sys_inputlable_str1_sys"+i).css("max-width","630px");
        $("#setting_sys_inputlable_ul1_setting_sys_inputlable_str2_sys"+i).css("max-width","630px");
        var width1 = Math.ceil(parseFloat($("#setting_sys_inputlable_ul1_setting_sys_inputlable_str1_sys"+i).css("width")));
        var width2 = Math.ceil(parseFloat($("#setting_sys_inputlable_ul1_setting_sys_inputlable_str2_sys"+i).css("width")));
        if(width2+width1>630&&width1<630)
        {
            var width2=630-width1;
            $("#setting_sys_inputlable_ul1_setting_sys_inputlable_str2_sys"+i).css("max-width", width2);
        }
        else if(width1>630){
            $("#setting_sys_inputlable_ul1_setting_sys_inputlable_str1_sys"+i).css("max-width", "300px");
            $("#setting_sys_inputlable_ul1_setting_sys_inputlable_str2_sys"+i).css("max-width", "380px");

        }
        else
        {
            
        }
    }
}
//function getTVnameinit()
//{
//    //  PageDataFirstCls.operateData.curname= model.system.getMachinename(name);
//    //  PageDataFirstCls.operateData.curname= model.system.getMachinename();
//    debugPrint("getMachinename"+PageDataFirstCls.operateData.curname);
//    var index=_getIndex(PageDataSettingSysTimeout.operateData.tvnamelist, PageDataSettingSysInputLabel.operateData.curname1)
//    if(index>-1&&index<11)
//    {
//        PageDataSettingSysTimeout.operateData.curselect=index;
//    }
//    else
//    {
//        PageDataSettingSysTimeout.operateData.curselect=0;
//    }
//    debugPrint("curselect"+PageDataSettingSysTimeout.operateData.curselect);
//}

function inputlabelinit()
{
    try{
    var temp=model.source.getInputName();
    var element={};
    debugPrint("get the input list is "+JSON.stringify(temp));
    var cout=parseInt( temp.length/6);
    PageDataSettingSysInputLabel.operateData.curchllist=[];
    for(var i=0;i<cout;i++)
    {
        element.uid=temp[i*6];
        element.name=temp[i*6+1];
        element.curname=temp[i*6+4];
        PageDataSettingSysInputLabel.operateData.curchllist.push(_cloneObj(element));
    }
    debugPrint("get the input list is "+JSON.stringify(PageDataSettingSysInputLabel.operateData.curchllist));
    }catch (e)
    {
        debugPrint(e.message);
    }
}
function SettingSysInputLabelonDestroy()
{
    hiWebOsFrame.settingssysinputtable=null;

}

function SettingSysInputLabelonopen()
{
    var index=PageDataSettingSysInputLabel.operateData.curselect;
    debugPrint("index"+index);
    var marquee = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys" + index+" marquee");
    if (marquee.length <= 0) {
        var htmlText = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys"+index).html();
        if (htmlText.length >13) {
            $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys"+index).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
        }
    }
}
function SettingSysInputEsc()
{
   this.page.close();
   hiWebOsFrame.settingssysad.open();
   hiWebOsFrame.settingssysad.hiFocus();
}
function SettingSysInputlabeldownfocus()
{
    debugPrint(" in the SettingSysInputlabelfocus"+this.SelectedIndex)
    var idx=this.SelectedIndex;
    var htmlText = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys"+idx).html();
    if (htmlText.length >13) {
        $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys"+idx).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
    if(idx>0)
    {
        var marquee = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys" + (idx-1)+" marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys" + (idx-1)+ " marquee").html();
            var marquee = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys" + (idx-1) ).html(htmlText);
        }
    }

}
function SettingSysInputlabelupfocus()
{
    debugPrint(" in the SettingSysInputlabelfocus"+this.SelectedIndex)
    var idx=this.SelectedIndex;
    var htmlText = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys"+idx).html();
    if (htmlText.length >13) {
        $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys"+idx).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
    if(idx+1<PageDataSettingSysInputLabel.setting_sys_inputlable_ul1.Data.length)
    {
        var marquee = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys" + (idx+1)+" marquee");
        if (marquee.length > 0) {
            var htmlText = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys" + (idx+1)+ " marquee").html();
            var marquee = $("#setting_sys_inputlable_ul1_setting_sys_inputlable_btn_sys" + (idx+1) ).html(htmlText);
        }
    }

}
function SettingSysInputBtnEnter()
{
     PageDataSettingSysInputLabel.operateData.curselect=this.parent.SelectedIndex;
     //PageDataSettingSysTimeout.operateData.parentindex=this.parent.SelectedIndex+1;
     var index=_getIndex(PageDataSettingSysTimeout.operateData.tvnamelist, PageDataSettingSysInputLabel.operateData.curchllist[this.parent.SelectedIndex].curname);
     if(index>-1&&index<11)
     {
         PageDataSettingSysTimeout.operateData.curselect=index;
         PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"
     }
     else
     {
         PageDataSettingSysTimeout.operateData.curselect=0;
         if(!!langPackages["Manual Input"])
         {
         if(PageDataSettingSysInputLabel.operateData.curchllist[this.parent.SelectedIndex].curname=="")
         {
             PageDataSettingSysTimeout.operateData.tvnamelist[0]=langPackages["Manual Input"][hiWebOsFrame.getCurrentLanguageIndex()]+PageDataSettingSysInputLabel.operateData.curchllist[this.parent.SelectedIndex].curname;

         }else
         {
            PageDataSettingSysTimeout.operateData.tvnamelist[0]=langPackages["Manual Input"][hiWebOsFrame.getCurrentLanguageIndex()]+"-"+PageDataSettingSysInputLabel.operateData.curchllist[this.parent.SelectedIndex].curname;
         }
         }
         else
         {
             if(PageDataSettingSysInputLabel.operateData.curchllist[this.parent.SelectedIndex].curname=="")
             {
                 PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+PageDataSettingSysInputLabel.operateData.curchllist[this.parent.SelectedIndex].curname;

             }else
             {
                 PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+"-"+PageDataSettingSysInputLabel.operateData.curchllist[this.parent.SelectedIndex].curname;
             }
         }
     }
     PageDataSettingSysTimeout.operateData.parentindex=1;
     hiWebOsFrame.settingssysmenutimeout.rewrite();
     hiWebOsFrame.settingssysmenutimeout.open();
     hiWebOsFrame.settingssysmenutimeout.hiFocus();


//    else if(this.id=="setting_sys_inputlable1_btn2")
//     {
//         var index=_getIndex(PageDataSettingSysTimeout.operateData.tvnamelist, PageDataSettingSysInputLabel.operateData.curname2)
//         if(index>-1&&index<11)
//         {
//             PageDataSettingSysTimeout.operateData.curselect=index;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"
//         }
//         else
//         {
//             PageDataSettingSysTimeout.operateData.curselect=0;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+"-"+PageDataSettingSysInputLabel.operateData.curname2;
//
//         }
//
//         PageDataSettingSysTimeout.operateData.parentindex=2;
//         hiWebOsFrame.settingssysmenutimeout.rewrite();
//         hiWebOsFrame.settingssysmenutimeout.open();
//         hiWebOsFrame.settingssysmenutimeout.hiFocus();
//     }
//     else if(this.id=="setting_sys_inputlable1_btn3")
//     {
//         var index=_getIndex(PageDataSettingSysTimeout.operateData.tvnamelist, PageDataSettingSysInputLabel.operateData.curname3)
//         if(index>-1&&index<11)
//         {
//             PageDataSettingSysTimeout.operateData.curselect=index;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"
//         }
//         else
//         {
//             PageDataSettingSysTimeout.operateData.curselect=0;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+"-"+PageDataSettingSysInputLabel.operateData.curname3;
//
//         }
//         PageDataSettingSysTimeout.operateData.parentindex=3;
//         hiWebOsFrame.settingssysmenutimeout.rewrite();
//         hiWebOsFrame.settingssysmenutimeout.open();
//         hiWebOsFrame.settingssysmenutimeout.hiFocus();
//     }
//     else if(this.id=="setting_sys_inputlable1_btn4")
//     {
//         var index=_getIndex(PageDataSettingSysTimeout.operateData.tvnamelist, PageDataSettingSysInputLabel.operateData.curname4)
//         if(index>-1&&index<11)
//         {
//             PageDataSettingSysTimeout.operateData.curselect=index;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"
//         }
//         else
//         {
//             PageDataSettingSysTimeout.operateData.curselect=0;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+"-"+PageDataSettingSysInputLabel.operateData.curname4;
//
//         }
//         PageDataSettingSysTimeout.operateData.parentindex=4;
//         hiWebOsFrame.settingssysmenutimeout.rewrite();
//         hiWebOsFrame.settingssysmenutimeout.open();
//         hiWebOsFrame.settingssysmenutimeout.hiFocus();
//     }
//     else if(this.id=="setting_sys_inputlable1_btn5")
//     {
//         var index=_getIndex(PageDataSettingSysTimeout.operateData.tvnamelist, PageDataSettingSysInputLabel.operateData.curname5)
//         if(index>-1&&index<11)
//         {
//             PageDataSettingSysTimeout.operateData.curselect=index;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"
//         }
//         else
//         {
//             PageDataSettingSysTimeout.operateData.curselect=0;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+"-"+PageDataSettingSysInputLabel.operateData.curname5;
//
//         }
//         PageDataSettingSysTimeout.operateData.parentindex=5;
//         hiWebOsFrame.settingssysmenutimeout.rewrite();
//         hiWebOsFrame.settingssysmenutimeout.open();
//         hiWebOsFrame.settingssysmenutimeout.hiFocus();
//     }
//     else if(this.id=="setting_sys_inputlable1_btn6")
//     {
//         var index=_getIndex(PageDataSettingSysTimeout.operateData.tvnamelist, PageDataSettingSysInputLabel.operateData.curname6)
//         if(index>-1&&index<11)
//         {
//             PageDataSettingSysTimeout.operateData.curselect=index;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"
//         }
//         else
//         {
//             PageDataSettingSysTimeout.operateData.curselect=0;
//             PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input"+"-"+PageDataSettingSysInputLabel.operateData.curname6;
//
//         }
//         PageDataSettingSysTimeout.operateData.parentindex=6;
//         hiWebOsFrame.settingssysmenutimeout.rewrite();
//         hiWebOsFrame.settingssysmenutimeout.open();
//         hiWebOsFrame.settingssysmenutimeout.hiFocus();
//     }
//    PageDataSettingSysTimeout.operateData.tvnamelist[0]="Manual Input";
    //hiWebOsFrame.settingssysmenutimeout.rewriteDataOnly();
}
