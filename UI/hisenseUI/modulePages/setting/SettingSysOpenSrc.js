/*
 * Created by Administrator on 14-6-18.
 */
function getSettingSysUpdateEulaData(opt) {
    opt.CaE = [
        {
            "id": "setting_sys_eulaOta_head_img1",
            "description": "",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_eulaOta_head_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_eulaOta_box",
            "description": "content",
            "CaEType": "div",
            "enableHtml":true,
            "noLangData":true,
            //strFilter: true,
            "classes": {
//                            "normal": "setting_sys_disclaimer", "focus": "setting_sys_disclaimer"
            },
            "nav": {"downTo": "setting_sys_eulaOta_box", "upTo": "setting_sys_eulaOta_box"},
            "handler": {
                "aftDownHandler": "SettingSyseulaOtaDownHandler",
                "aftUpHandler": "SettingSyseulaOtaUpHandler",
                "aftEscHandler": "SettingSysDisEscHandler",
                "befLeftHandler": "SettingSysDisEscHandler"

            }
        }

    ];
    SettingSyseulaOtainit();
    return PageDateSettingSyseulaOta;
}
var PageDateSettingSyseulaOta = {
    "setting_sys_eulaOta_head_img1": {Data: "img/head_arrow.png"},
    "setting_sys_eulaOta_head_text1": {Data: "END USER LICENSE"},
    "setting_sys_eulaOta_btn1": {Data: "View detail"},
    "setting_sys_eulaOta_box": {Data: ""},
    "operateData": {
        "currenheight": 0,
        "step": 220,
        "curfile": "his"

    },
    "langData": {
        "END USER LICENSE": [],
        "Disclaimer": ["Disclaimer", "Haftungsausschluss", "Dichiarazione di limitazione di responsabilità", "Declaração", "Descargo de responsabilidad", "Clause de non-responsabilité", "Ansvarsfraskrivelse", "Ansvarsfriskrivning", "Ansvarsfraskrivelse", "Vastuuvapauslauseke", "免责申明"],
        "Hisense Legal Disclaimer": [],
        "The software included in the product contains open source software. You may obtain the complete corresponding source code for a period of three years after the last shipment of this product by sending an email to opensource.smarttv@gmail.com. It is also possible to obtain the complete corresponding source code in a physical medium such as a CD-ROM; a minimal charge will be required. The following URL http://opensource-smarttv.com lead to the download page of the source code made available and open source license information as related to this product. This offer is valid to anyone in receipt of this information.":[],
        "The software included in the product contains open source software. You may obtain the complete corresponding source code for a period of three years after the last shipment of this product by sending an email to opensource@hisense.com. It is also possible to obtain the complete corresponding source code in a physical medium such as a CD-ROM; a minimal charge will be required. The following URL http://opensource.hisense.com lead to the download page of the source code made available and open source license information as related to this product. This offer is valid to anyone in receipt of this information.":[]
    },
    rewrite: function (pageData) {
        {
              if(tv){
                  pageData.setting_sys_eulaOta_box.Data =Hisense.File.read("disclaimer.html", 1);;
              }
            else {
                  pageData.setting_sys_eulaOta_box.Data =getFile("./modulePages/setting/Disclaimer_eu_aut.html");

              }

        }

        if (hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            pageData.setting_sys_eulaOta_head_img1.Data = "img/head_arrow.png";
            $("#setting_sys_review_eula_page").css("left", "440px");
            $(".setting_sys_disclaimer").css("float", "left")
            $(".setting_sys_disclaimer").css("margin", "40px  0 0 65px");
        }
        else {
            pageData.setting_sys_eulaOta_head_img1.Data = "img/head_arrow_right.png";

            $("#setting_sys_review_eula_page").css("left", "328px");
            $(".setting_sys_disclaimer").css("float", "right");
            $(".setting_sys_disclaimer").css("margin", "40px  65px  0 0");
        }

    }
};
function SettingSyseulaOtainit() {
    try {


    } catch (e) {
        debugE(e.message);


    }
}
function SettingSysUpdateEulaDestroy() {
    hiWebOsFrame.settingssyseulaOta = null;
}
function updateEulaOpenHandler() {
    var contenthigh = $("#setting_sys_eulaOta_box").height();
    var boxheigh = $("#setting_sys_eulaOta_content").height();
    if (contenthigh > boxheigh) {
        var temp = parseInt(750 / contenthigh * boxheigh);
        $("#setting_sys_eulaOta_srcollbar").css("height", temp);
    }
    else {
        $("#setting_sys_eulaOta_srcollbar").css("visibility", "hidden");
    }
    this.data.operateData.currenheight = 0;
    $("#setting_sys_eulaOta_box").css("top", "-" + this.data.operateData.currenheight + "px");
    temp = parseInt(750/ contenthigh * this.page.operateData.currenheight);
    $("#setting_sys_eulaOta_srcollbar").css("top", temp);
}
function SettingSyseulaOtaDownHandler() {
    var contenthigh = $("#setting_sys_eulaOta_box").height();
    var boxheigh = $("#setting_sys_eulaOta_content").height();
    if ((contenthigh - this.page.operateData.currenheight ) > boxheigh) {
        this.page.operateData.currenheight += this.page.operateData.step;
        $("#setting_sys_eulaOta_box").css("top", "-" + this.page.operateData.currenheight + "px");
        var temp = parseInt(750 / contenthigh * this.page.operateData.currenheight);


        if (temp > 750 - $("#setting_sys_eulaOta_srcollbar").height()  ) {
            temp = 750 - $("#setting_sys_eulaOta_srcollbar").height()
        }
        $("#setting_sys_eulaOta_srcollbar").css("top", temp);
    }
    else {
        hiWebOsFrame.settingssyseulaOta.hiFocus("setting_sys_eulaOta_btn1") ;
    }

}
function SettingSysDisEscHandler() {
    this.page.close();
    this.page.origin.open();
    this.page.origin.hiFocus();
    this.page.destroy();
}
function SettingSyseulaOtaUpHandler() {

    var contenthigh = $("#setting_sys_eulaOta_box").height();
    var boxheigh = $("#setting_sys_eulaOta_content").height();
    if (this.page.operateData.currenheight > 0) {
        if (this.page.operateData.currenheight > this.page.operateData.step) {
            this.page.operateData.currenheight -= this.page.operateData.step;
        }
        else {
            this.page.operateData.currenheight = 0;
        }
        $("#setting_sys_eulaOta_box").css("top", "-" + this.page.operateData.currenheight + "px");
        var temp = parseInt(750/ contenthigh * this.page.operateData.currenheight);
        $("#setting_sys_eulaOta_srcollbar").css("top", temp);
    }

}

function SettingSyeulaOtaBtnUphandler(){


    var contenthigh = $("#setting_sys_eulaOta_box").height();
    var boxheigh = $("#setting_sys_eulaOta_content").height();
    if (contenthigh > boxheigh) {
        var temp = parseInt(750 / contenthigh * boxheigh);
        $("#setting_sys_eulaOta_srcollbar").css("height", temp);
        hiWebOsFrame.settingssyseulaOta.hiFocus("setting_sys_eulaOta_box") ;
    }
    else {
        $("#setting_sys_eulaOta_srcollbar").css("visibility", "hidden");
    }
    PageDateSettingSyseulaOta.operateData.currenheight = 0;
    $("#setting_sys_eulaOta_box").css("top", "-" + PageDateSettingSyseulaOta.operateData.currenheight + "px");
    temp = parseInt(750/ contenthigh * PageDateSettingSyseulaOta.operateData.currenheight);
    $("#setting_sys_eulaOta_srcollbar").css("top", temp);
}


