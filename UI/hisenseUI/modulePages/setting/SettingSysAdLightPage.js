/**
 * Created by Administrator on 14-12-2.
*/
function getSettingAdLightPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_sys_ind_light_img1",
            "description": "pic",
            "CaEType": "img"
        },
        {
            "id": "setting_sys_ind_light_text1",
            "description": "",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_ind_light_control1_text1",
            "description": "control title",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_ind_light_control1",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "", "downTo":"setting_sys_ind_light_control2"},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{
                'aftEnterHandler':'SettingSysAdlightctrlEn',//点击enter事件后处理开关转换
                "aftEscHandler":"SettindSysAdlightEscHandler"

            }

        },
        {
            "id": "setting_sys_ind_light_control2_text1",
            "description": "control title",
            "CaEType": "div"
        },
        {
            "id":"setting_sys_ind_light_control2",
            "description":"开关控件",
            "classes": {
                "normal": "flipSwitchNormal", "focus": "flipSwitchFocus", "disable": "flipSwitchDisable", "selected": "flipSwitchSelected"
            },
            "nav": {"upTo": "setting_sys_ind_light_control1", "downTo":""},
            "CaEType": "FlipSwitch",
            "SwitchRadio":"50%",//显示的比例
            "FlipSwitchConfig":{
                switchTypeId:"switchType",//目前开(true)还是关(false) id
                switchTextId:"switchText"//目前显示的字体的id
            },
            "handler":{

                'aftEnterHandler':'SettingSysAdlightctrlEn',//点击enter事件后处理开关转换
                "aftEscHandler":"SettindSysAdlightEscHandler"
            }


        }

    ];
    SettingAdlightInit();
    return PageDateSettingSysCAdLight;
}
var PageDateSettingSysCAdLight={
    "setting_sys_ind_light_img1":{Data:"img/head_arrow.png"},
    "setting_sys_ind_light_text1":{Data:"Indicator Light Setting"},
    "setting_sys_ind_light_control1_text1":{Data:"Standby"},
    "setting_sys_ind_light_control1":{Data:{ switchType:true, switchText:''},"disable": false},
    "setting_sys_ind_light_control2_text1":{Data:"Working"},
    "setting_sys_ind_light_control2":{Data:{ switchType:true, switchText:''},"disable": false},

    "operateData": {
//        "langIndex":0,
        "helplist":[
            {
                "title":"CEC control",
                "content":"Allow HDMI devices to control each other. "
            },
            {
                "title":"Device Auto Power Off",
                "content":"Allow CEC-enabled devices to turn Off with the TV."
            },
            {
                "title":"TV Auto Power On",
                "content":"Allow the TV to turn On with CEC-enabled devices."
            },
            {
                "title":"Device Root Menu",
                "content":"Access the menu of connected HDMI CEC-enabled devices with the TV remote control."
            },
            {
                "title":"Device Connect",
                "content":"Allow CEC-enabled devices to communicate with each other when connected through an HDMI cable."
            },
            {
                "title":"",
                "content":""
            }
        ],
        "setting_sys_ind_light_control1":{
            switchType:true,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        },
        "setting_sys_ind_light_control2":{
            switchType:false,
            switchTextList:{
                switchOFF:'',
                switchOn:''
            }
        }
    },
    "langData":{
     "Working":[],
     "Standby":[],
     "Indicator Light Setting":[]
    },
    rewrite:function (data){
        var _this = this,
            opeData = data.operateData;
        $.each(data,function(key,val){

            if(!key) return true;

            var localData = data[key],
                localOpeData =opeData[key];
            switch(key)
            {
                case "setting_sys_ind_light_control1":
                case "setting_sys_ind_light_control2":
                    //更新data里面的数据
                    localData.Data.switchType = localOpeData.switchType;
                    localData.Data.switchText = !!localOpeData.switchType? localOpeData.switchTextList.switchOn : localOpeData.switchTextList.switchOFF;
                    break;
            }
        })

    }

};

function SettingAdlightInit()
{
    //todo
    if(model.system.getStandbyLight()==0)
    {
        PageDateSettingSysCAdLight.operateData.setting_sys_ind_light_control1.switchType=false;
    }
    else{
        PageDateSettingSysCAdLight.operateData.setting_sys_ind_light_control1.switchType=true;
    }
    debugPrint("getStandbyLight"+JSON.stringify(PageDateSettingSysCAdLight.operateData.setting_sys_ind_light_control1.switchType));

    if(model.system.getWorkLight()==0)
    {
        PageDateSettingSysCAdLight.operateData.setting_sys_ind_light_control2.switchType=false;
    }
    else{
        PageDateSettingSysCAdLight.operateData.setting_sys_ind_light_control2.switchType=true;
    }
    debugPrint("getWorkLight"+JSON.stringify(PageDateSettingSysCAdLight.operateData.setting_sys_ind_light_control2.switchType));


}

function SettindSysAdlightEscHandler()
{
    hiWebOsFrame.settingssysadlight.close();
    hiWebOsFrame.settingssysad.open();
    hiWebOsFrame.settingssysad.hiFocus();
}

function SettingAdLightPageonDestroy()
{
    hiWebOsFrame.settingssysadlight=null;
}

function SettingSysAdlightctrlEn(operateData,data)
{
    var page = this.page;
    if(operateData[this.id] != undefined)
        operateData[this.id].switchType = !this.SwitchType;

        if(this.id=="setting_sys_ind_light_control1")
        {
            //todo
            if(operateData[this.id].switchType)
            {
                model.system.setStandbyLight(1);
            }
            else
            {
                model.system.setStandbyLight(0);
            }
            page.rewriteDataOnly();
        }
        else if(this.id=="setting_sys_ind_light_control2")
        {
           //todo
            if(operateData[this.id].switchType)
            {
                model.system.setWorkLight(1);
            }
            else
            {
                model.system.setWorkLight(0);
            }
            page.rewriteDataOnly();
        }

    SetRecentUse("Indicator Light Setting",4,RECNT_AD);
}