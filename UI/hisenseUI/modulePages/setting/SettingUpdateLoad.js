/**
 * Created by Administrator on 14-6-18.
 */
function getSettingUpdateLoadPageData(opt)
{
    opt.CaE=[
        {
            "id": "setting_update_load_text",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_load_attention",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id": "setting_update_load_progress1",
            "description": "用于显示进度条",
            "CaEType": "ProgressBar",
            "classes": {
                "normal": "setting_update_download_cls", "focus": "setting_update_download_cls"
            },
            "CaE": [
                {
                    "id": "setting_update_load_progress1_bar",
                    "description": "进度条",
                    "CaEType": "div"

                },
                {
                    "id": "setting_update_load_progress1_bar_text",
                    "description": "进度显示文字",
                    "CaEType": "span"

                }

            ],
            "ProgressBarConfig": {
                "PBProcessId": "setting_update_load_progress1_bar",//进度变化的id 不能为空
                 "ShowTextId": "setting_update_load_progress1_bar_text",//在进度条旁边用百分数或者分数显示进度与否，默认为空是不显示，有的时候需要进行提供id
                "ShowTextIsMoved": true,//默认为auto， 只会变化进度条的width'， “manual”为手动模式这种模式需要
                //需要配置另外的三项，是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
                "StepDuration": 10,	// setInterval的时间参数，单位ms 进度条的前进速度
                "MinValue": 0,  //最小值，不设定的话默认为0；
                "MaxValue": 100, //最大值。不设定默认为100；
                "Width": 892,//宽度 progressbar在页面上的宽度px
                "TextFormat": "per",//	ShowText的显示形式，“percentage”表示百分数，“fraction”表示分数
                "PBType": "direction"//进度类型，“animation”动画模式 “direction”直接模式，进度条直接显示当前值
///                      "CompletCallback": ""//在到达100%的时候执行的回调函数，无此项的时候不进行回调
            }
        },
        {
            "id":"setting_update_load_btn1",
            "description":"cancel",
            "classes": {
                "normal": "setting_update_load_button", "focus": "setting_update_load_button_focus"
            },
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"SettingUpdateloadCancel"//点击enter事件后处理

            }

        }
    ]
    return PageDateSettingUpdateLoad;

}
var PageDateSettingUpdateLoad={
    "setting_update_load_text":{Data:"Downloading..."},
    "setting_update_load_progress1": {
        Data:{},
        DefaultValue: 0
    },
    "setting_update_load_attention":{Data:"Note: please keep the network connection."},
    "setting_update_load_btn1":{Data:"Cancel"},
    "operateData": {

    },
    "langData":{
        "Downloading...":["Downloading...","",""],
        "Note: please keep the network connection.":["Note: please keep the network connection.","",""],
        "Cancel":["Cancel","",""]
    },
    rewrite:function(pageData){
//        pageData.setting_update_load_text.Data=pageData.langData.download[langIdx]
//        pageData.setting_update_load_attention.Data=pageData.langData.note[langIdx];
//        pageData.setting_update_load_btn1.Data=pageData.langData.btn1[langIdx];
    }
};
function SettingUpdateloadCancel()
{
    hiWebOsFrame.settingsupdatefir.close();
    hiWebOsFrame.settingsupdateload.close();
    hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingsFirst.hiFocus();
    settingUpdatefirEscHandler();
}