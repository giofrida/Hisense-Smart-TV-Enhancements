/**
 * Created by Admin on 14-6-16.
 */
function getboeBlackBgPageData(opt){
    opt.CaE = [
        {
            "id":"boe_title",
            "CaEType":"span"
        },
        {
        "id": "boe_nav_text",//在页面中的按钮或者组件容器Id
        "description": "用于显示导航列表",
        "CaEType": "NavigationBar",
        "classes": {
            "normal": "boeNavLiText_setting", "disable":"boeNavLiText_unset"
        },
        "oriCaE": [//todo 需修改为oriCaE
            {
                "id": "boeNavLiTitle",
                "description": "城市名称",
                "CaEType": "span"
            }
            ]
        }
    ];
    return boeBackgroundPageData;
}
var boeBackgroundPageData = {
    "boe_title":{"Data":["Language"]},
    "operateData":{
        "currentStep":3,
        "allStep":7,
       "titleStep": 4
    },
    "boe_title_txt":{
        "title_1":{"Data": "Language"},
        "title_2":{"Data": "Location"},
        "title_3":{"Data": "Time Zone"},
        "title_4":{"Data": "EULA"},
        "title_5":{"Data": "Network"},
        "title_6":{"Data": "Complete"}

    },
    "boe_nav_text": {
        "Data":[
            {
                "boeNavLiTitle":{"Data": "Language"}
            },
            {
                "boeNavLiTitle":{"Data": "Location"}
            },
            {
                "boeNavLiTitle":{"Data": "Network"}
            },
            {
                "boeNavLiTitle":{"Data": "Complete"}
            }
        ]
    },
    "boe_nav_text_rtl": {
        "Data":[
            {
                "boeNavLiTitle":{"Data": "Complete"}
            },
            {
                "boeNavLiTitle":{"Data": "Network"}
            },
            {
                "boeNavLiTitle":{"Data": "Location"}
            },
            {
                "boeNavLiTitle":{"Data": "Language"}
            }
            ]
    },
    "langData":{
        "Language":[],
        "Location":[],
        "Time Zone":[],
        "EULA":[],
        "Network":[],
        "Complete":[]
    },
    rewrite:"boeRefreshStepInfo"
}
function boeChangeCurrSep(currStep){
    boeBackgroundPageData.operateData.currentStep = currStep;
    debugPrint("[xuehongfeng]" + currStep, DebugLevel.ALWAYS);
    if(tv == true) {
        model.system.setWizardStep(currStep);
    }
    hiWebOsFrame.boe_bg_page_id.rewriteDataOnly();
}
function revertCurrstepToPoint(currStep)
{
    var CurrPoint = 0;
    switch (currStep){
        case 1:
            CurrPoint = 1;
            break;
        case 2:
        case 3:
            CurrPoint = 2;
        break;
        case 4:
        case 5:
            CurrPoint = 3;
            break;
        default :
            CurrPoint = 4;
            break;
    }
    return CurrPoint;
}
function boeRefreshStepInfo(data,languageIdx){
    var currStep = data.operateData.currentStep;
    var currPoint = 0;
            switch (currStep) {
                case 1:
                    data.boe_title = data.boe_title_txt.title_1;
                    break;
                case 2:
                    data.boe_title = data.boe_title_txt.title_2;
                    break;
                case 3:
                    data.boe_title = data.boe_title_txt.title_3;
                    break;
                case 4:
                    data.boe_title = data.boe_title_txt.title_4;
                    break;
                case 5:
                    data.boe_title = data.boe_title_txt.title_5;
                    break;
                case 6:
                    data.boe_title = data.boe_title_txt.title_6;
                    break;
                    defalut :
                        data.boe_title = data.boe_title_txt.title_1;
                    break;

            }
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.RTL) {
                for (var i = 0; i < data.operateData.titleStep; i++) {
                    data.boe_nav_text.Data[i].boeNavLiTitle.Data = data.boe_nav_text_rtl.Data[i].boeNavLiTitle.Data;
                }
            }
            if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
                currPoint = revertCurrstepToPoint(currStep);
                $("#boe_nav li:nth-child(-n + " + currPoint + ")").attr("class", "boeNavLi_setted");
                $("#boe_nav li:nth-child(n + " + currPoint + ")").attr("class", "boeNavLi_unset");
                $("#boe_nav li:nth-child(" + currPoint + ")").attr("class", "boeNavLi_setting");
                $("#boe_nav_point li:nth-child(-n + " + currPoint + ")").attr("class", "boeNavLi_point_setted");
                $("#boe_nav_point li:nth-child(n + " + currPoint + ")").attr("class", "boeNavLi_point_unset");
                $("#boe_nav_point li:nth-child(" + currPoint + ")").attr("class", "boeNavLi_point_setting");
            }
            else
            {
                currPoint = 5-revertCurrstepToPoint(currStep);
                $("#boe_nav li:nth-child(-n + " + currPoint + ")").attr("class", "boeNavLi_unset");
                $("#boe_nav li:nth-child(n + " + currPoint + ")").attr("class", "boeNavLi_setted");
                $("#boe_nav li:nth-child(" + currPoint + ")").attr("class", "boeNavLi_setting");
                $("#boe_nav_point li:nth-child(-n + " + currPoint + ")").attr("class", "boeNavLi_point_unset");
                $("#boe_nav_point li:nth-child(n + " + currPoint + ")").attr("class", "boeNavLi_point_setted");
                $("#boe_nav_point li:nth-child(" + currPoint + ")").attr("class", "boeNavLi_point_setting");
            }


    var disable_item=[];
    var disable_item_num = 0;
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        disable_item_num = data.operateData.titleStep - currPoint;
        for (i = 0; i < disable_item_num; i++) {
            disable_item[i] = currPoint + i;
        }
    }
    else
    {
        disable_item_num = currPoint - 1;
        for (i = 0; i < disable_item_num; i++) {
            disable_item[i] = i;
        }
    }
    data.boe_nav_text.disableItem = disable_item;
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $("#boe_nav_text li:nth-child(1)").attr("class", "boeNavLiText_setting");
    }
    else
    {
        if(currPoint == 1) {
            $("#boe_nav_text li:nth-child(1)").attr("class", "boeNavLiText_setting");
        }
        else
        {
            $("#boe_nav_text li:nth-child(1)").attr("class", "boeNavLiText_unset");
        }
    }

    if (hiWebOsFrame.getCurrentArea() == "COL") {   //哥伦比亚机不提供国家选项
        $("#boe_nav_point li:nth-child(2)").css("display", "none");
        $("#boe_nav li:nth-child(2)").css("display", "none");
        $("#boe_nav_text li:nth-child(2)").css("display", "none");
        $("#boe_nav_point").css("left",745);
        $("#boe_nav").css("left",775);
        $("#boe_nav_text").css("left",660);
    }
//    localStorage.setItem("currCountryIdx", 0)
}
function boeBackgroundOnDestroy(){
    hiWebOsFrame.boe_bg_page_id = null;
}
