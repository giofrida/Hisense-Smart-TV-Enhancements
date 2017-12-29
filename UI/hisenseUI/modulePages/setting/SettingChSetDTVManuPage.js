/**
 * Created by Admin on 14-6-19.
 */

function getSettingChSetDTVManuPageData(opt) {
    opt.CaE = [
        {
            "id": "settingChManuSetPageTitle",
            "description": "标题",
            "CaEType": "span"
        },
        {
            "id": "settingChManuSetTabsFrame",
            "description": "tabs分栏控件",
            "CaEType": "Tabs",
            "TabsConfig": {
                "SelectedIndex": 0,
                "FlipType": "HOR",
                "TabPagesId": ["settingChManuSetAnalog", "settingChManuSetAntenna", "settingChManuSetCable", "settingChManuSetSatellite"]
            },
            "CaE": [
                {
                    "id": "settingChManuSetSatellite",
                    "description": "容器",
                    "firstFocusId": "settingChManuSetSateTitle",
                    "CaEType": "Container",

                    "CaE": [
                        {
                            "id": "settingChManuSetSateTitle",
                            "description": "分栏标题",
                            "CaEType": "div",
                            "maxWidth":298,
                            "onBlurFun":"settingChSetDTVManuTitleDelMarquee",
                            "onFocusFun":"settingChSetDTVManuTitleAddMarquee",
                            "classes": {
                                "normal": "settingChManuSetTab4TitleNormal",
                                "focus": "settingChManuSetTab4TitleFocus",
                                "selected": "settingChManuSetTab4TitleSelected"
                            },
                            "nav": {
                                "downTo": "settingChManuSetSateBody"
                            },
                            "handler": {
                                "befRightHandler":"settingChSetDTVManuTitleDelMarquee",
                                "befLeftHandler":"settingChSetDTVManuTitleDelMarquee"
                            }
                        },
                        {
                            "id": "settingChManuSetSateBody",
                            "description": "body容器",
                            "CaEType": "Container",
                            "ContainerConfig": {
                                "IsPrevent": true
                            },
                            "firstFocusId": "settingChManuSetSateNameBtn",
                            "CaE": [
                                {
                                    "id": "settingChManuSetSateNameTitle",
                                    "description": "卫星名称标题",
                                    "CaEType": "span",
                                    "classes": {
                                        "normal": "wizardSetItemTitle", "disable": "wizardSetItemTitleDisable"
                                    }
                                },
                                {
                                    "id": "settingChManuSetSateNameValue",
                                    "description": "卫星名称",
                                    "CaEType": "span",
                                    "classes": {
                                        "normal": "wizardSetItemValue", "disable": "wizardSetItemValueDisable"
                                    }
                                },
                                {
                                    "id": "settingChManuSetSateNameBtn",
                                    "description": "卫星名称调整",
                                    "CaEType": "div",
                                    "nav": {
                                        "downTo": "settingChSetDTVManuSateFreInput",
                                        "rightTo": "settingChManuSetSateNameBtn", "leftTo": "settingChManuSetSateNameBtn"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "settingChSetManuSatelliteNameEnterHandle",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    },
                                    "classes": {
                                        "normal": "wizardAdjustBtnNormal", "focus": "wizardAdjustBtnFocus", "disable": "wizardAdjustBtnDisable"
                                    }
                                },

                                {
                                    "id": "settingChManuSetSateFreTitle",
                                    "description": "频率",
                                    "CaEType": "span",
                                    "classes": {
                                        "normal": "wizardSetItemTitle", "disable": "wizardSetItemTitleDisable"
                                    }
                                },
                                {
                                    "id": "settingChSetDTVManuSateFreInput",
                                    "description": "频率",
                                    "CaEType": "input",
                                    "inputAttr": "number",
                                    "maxlength":8,
                                    "classes": {
                                        "normal": "settingNumberInputNormal", "focus": "settingNumberInputFocus", "disable": "settingNumberInputDisable"
                                    },
                                    "nav": {
                                        "downTo": "settingChSetDTVManuSateSRInput", "upTo": "settingChManuSetSateNameBtn",
                                        "rightTo": "settingChSetDTVManuSateFreInput", "leftTo": "settingChSetDTVManuSateFreInput"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "invokeSKB",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    },
                                    "onChange":"settingChSetDTVManuIntInputOnChange",
                                    "onBlurFun":"settingChSetDTVManuSateRecordFre"
                                },
                                {
                                    "id": "settingChManuSetSateSRTitle",
                                    "description": "符号率标题",
                                    "CaEType": "span",
                                    "classes": {
                                        "normal": "wizardSetItemTitle", "disable": "wizardSetItemTitleDisable"
                                    }
                                },
                                {
                                    "id": "settingChSetDTVManuSateSRInput",
                                    "description": "符号率",
                                    "CaEType": "input",
                                    "inputAttr": "number",
                                    "maxlength":8,
                                    "classes": {
                                        "normal": "settingNumberInputNormal", "focus": "settingNumberInputFocus", "disable": "settingNumberInputDisable"
                                    },
                                    "nav": {
                                        "downTo": "settingChManuSetSateFreBNav", "upTo": "settingChSetDTVManuSateFreInput",
                                        "rightTo": "settingChSetDTVManuSateSRInput", "leftTo": "settingChSetDTVManuSateSRInput"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "invokeSKB",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    },
                                    "onChange":"settingChSetDTVManuIntInputOnChange",
                                    "onBlurFun":"settingChSetDTVManuSateRecordSR"
                                },
                                {
                                    "id": "settingChManuSetSateFreBTitle",
                                    "description": "频段标题",
                                    "CaEType": "span",
                                    "classes": {
                                        "normal": "wizardSetItemTitle", "disable": "wizardSetItemTitleDisable"
                                    }
                                },
                                {
                                    "id": "settingChManuSetSateFreBValue",
                                    "description": "频段",
                                    "CaEType": "span",
                                    "classes": {
                                        "normal": "wizardSetItemValue", "disable": "wizardSetItemValueDisable"
                                    }
                                },
                                {
                                    "id": "settingChManuSetSateFreBNav",
                                    "description": "频段列表",
                                    "CaEType": "NavigationBar",
                                    "oriCaE": [
                                        {
                                            "id": "settingChManuSetSateFreB",
                                            "description": "频段",
                                            "CaEType": "div"
                                        }
                                    ],
                                    "NavigationBarConfig": {
                                        "NavigationBarDataItem": ["settingChManuSetSateFreB"],
                                        "PageSize": 2,
                                        "ArrowFlag": true
                                    },
                                    "classes": {
                                        "normal": "wizardSetItemListLi_2_Normal", "focus": "wizardSetItemListLi_2_Focus",
                                        "dataSelected": "wizardSetItemListLi_2_Selected", "disable": "wizardSetItemListLi_2_Disable",
                                        "disableDataSelected": "wizardSetItemListLi_2_Disable"
                                    },
                                    "nav": {
                                        "upTo": "settingChSetDTVManuSateSRInput", "downTo": "settingChManuSetSateSearBtn",
                                        "rightTo": "settingChManuSetSateFreBNav", "leftTo": "settingChManuSetSateFreBNav"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "settingChSetManuSetSateFreBand",
                                        "befLeftHandler":"settingChSetManuSetSateFreBLeftHandle"
                                    }
                                },
                                {
                                    "id":"settingChManuSetSateSearchNumTitle",
                                    "description":"",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetSateSearchNumValue",
                                    "description":"",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetSateSigQTitle",
                                    "description":"信号质量标题",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetSateSigQProgressBar",
                                    "description":"",
                                    "CaEType":"ProgressBar",
                                    "CaE":[
                                        {
                                            "id": "settingChManuSetSateSigQCont",
                                            "description": "进度条",
                                            "CaEType": "div"
                                        },
                                        {
                                            "id": "settingChManuSetSateSigQValue",
                                            "description": "进度显示文字",
                                            "CaEType": "span"
                                        }
                                    ],
                                    "classes":{
                                        "normal":"settingChSetPerFrame"
                                    },
                                    "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigQCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                                        PBProcessId: "settingChManuSetSateSigQCont",//进度条的进程id
                                        ShowTextId: "settingChManuSetSateSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                                        ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                                        PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                                        DefaultValue: 0,//默认值
                                        Width: 230,//进度条总宽度
                                        TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                                        CompleteCallBack: null//如果达到设置值时的回调函数。
                                    }
                                },
                                {
                                    "id":"settingChManuSetSateSigLTitle",
                                    "description":"信号水平标题",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetSateSigLProgressBar",
                                    "description":"信号水平",
                                    "CaEType":"ProgressBar",
                                    "CaE":[
                                        {
                                            "id": "settingChManuSetSateSigLCont",
                                            "description": "进度条",
                                            "CaEType": "div"
                                        },
                                        {
                                            "id": "settingChManuSetSateSigLValue",
                                            "description": "进度显示文字",
                                            "CaEType": "span"
                                        }
                                    ],
                                    "classes":{
                                        "normal":"settingChSetPerFrame"
                                    },
                                    "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigLCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                                        PBProcessId: "settingChManuSetSateSigLCont",//进度条的进程id
                                        ShowTextId: "settingChManuSetSateSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                                        ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                                        PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                                        DefaultValue: 0,//默认值
                                        Width: 230,//进度条总宽度
                                        TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                                        CompleteCallBack: null//如果达到设置值时的回调函数。
                                    }
                                },
                                {
                                    "id": "settingChManuSetSateSearBtn",
                                    "description": "搜索",
                                    "CaEType": "div",
                                    "classes": {
                                        "normal": "wizardBtnNormal", "focus": "wizardBtnFocus", "disable": "wizardBtnDisable"
                                    },
                                    "nav": {
                                        "upTo": "settingChManuSetSateFreBNav",
                                        "rightTo": "settingChManuSetSateSearBtn", "leftTo": "settingChManuSetSateSearBtn"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "settingChSetDTVManuStartScan",
                                        "befUpHandler":"settingChSetDTVManuSearBtnBefUpHandle",
                                        "befDownHandler":"settingChSetDTVManuSearBtnbefkeyDelMarquee",
                                        "aftUpHandler":"settingChSetDTVManuSearBtnaftkeyAddMarquee",
                                        "aftDownHandler":"settingChSetDTVManuSearBtnaftkeyAddMarquee",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    }
                                }
                            ],
                            "classes": {
                                "normal": "settingChManuSetTabBodyNormal",
                                "focus": "settingChManuSetTabBodyFocus",
                                "selected": "settingChManuSetTabBodySelected",
                                "disable": "settingChManuSetTabBodyDisable"
                            },
                            "nav": {
                                "upTo": "settingChManuSetSateTitle"
                            }
                        }
                    ],
                    "classes": {
                        "normal": "settingChManuSetTabPageNormal", "focus": "settingChManuSetTabPageFocus", "selected": "settingChManuSetTabPageSelected"
                    }
                },
                {
                    "id": "settingChManuSetAntenna",
                    "description": "容器",
                    "firstFocusId": "settingChManuSetAntTitle",
                    "CaEType": "Container",
                    "CaE": [
                        {
                            "id": "settingChManuSetAntTitle",
                            "description": "分栏标题",
                            "CaEType": "div",
                            "maxWidth":298,
                            "onBlurFun":"settingChSetDTVManuTitleDelMarquee",
                            "onFocusFun":"settingChSetDTVManuTitleAddMarquee",
                            "classes": {
                                "normal": "settingChManuSetTab4TitleNormal",
                                "focus": "settingChManuSetTab4TitleFocus",
                                "selected": "settingChManuSetTab4TitleSelected"
                            },
                            "nav": {
                                "downTo": "settingChManuSetAntBody"
                            },
                            "handler": {
                                "befRightHandler":"settingChSetDTVManuTitleDelMarquee",
                                "befLeftHandler":"settingChSetDTVManuTitleDelMarquee"
                            }
                        },
                        {
                            "id": "settingChManuSetAntBody",
                            "description": "body容器",
                            "CaEType": "Container",
                            "ContainerConfig": {
                                "IsPrevent": true
                            },
                            "firstFocusId": "settingChManuSetAntChBtn",
                            "CaE": [
                                {
                                    "id": "settingChManuSetAntChTitle",
                                    "description": "频道标题",
                                    "CaEType": "span"
                                },
                                {
                                    "id": "settingChManuSetAntChValue",
                                    "description": "频道",
                                    "CaEType": "span",
                                    "classes": {
                                        "normal": "wizardSetItemValue", "disable": "wizardSetItemValueDisable"
                                    }
                                },
                                {
                                    "id": "settingChManuSetAntChBtn",
                                    "description": "频道",
                                    "CaEType": "div",
                                    "classes": {
                                        "normal": "wizardAdjustBtnNormal", "focus": "wizardAdjustBtnFocus", "disable": "wizardAdjustBtnDisable"
                                    },
                                    "nav": {
                                        "downTo": "settingChManuSetAntSearBtn", "upTo": "",
                                        "rightTo": "settingChManuSetAntChBtn", "leftTo": "settingChManuSetAntChBtn"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "settingChSetDTVChNumberEnterHandler",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    }
                                },
                                {
                                    "id": "settingChManuSetAntBWTitle",
                                    "description": "频率标题",
                                    "CaEType": "span"
                                },
                                {
                                    "id": "settingChManuSetAntBWValue",
                                    "description": "频率",
                                    "CaEType": "span"
                                },
                                {
                                    "id":"settingChManuSetAntSearchNumTitle",
                                    "description":"搜索到的频道数目",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetAntSearchNumValue",
                                    "description":"",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetAntSigQTitle",
                                    "description":"信号质量标题",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetAntSigQProgressBar",
                                    "description":"",
                                    "CaEType":"ProgressBar",
                                    "CaE":[
                                        {
                                            "id": "settingChManuSetAntSigQCont",
                                            "description": "进度条",
                                            "CaEType": "div"
                                        },
                                        {
                                            "id": "settingChManuSetAntSigQValue",
                                            "description": "进度显示文字",
                                            "CaEType": "span"
                                        }
                                    ],
                                    "classes":{
                                        "normal":"settingChSetPerFrame"
                                    },
                                    "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigQCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                                        PBProcessId: "settingChManuSetAntSigQCont",//进度条的进程id
                                        ShowTextId: "settingChManuSetAntSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                                        ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                                        PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                                        DefaultValue: 0,//默认值
                                        Width: 230,//进度条总宽度
                                        TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                                        CompleteCallBack: null//如果达到设置值时的回调函数。
                                    }
                                },
                                {
                                    "id":"settingChManuSetAntSigLTitle",
                                    "description":"信号水平标题",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetAntSigLProgressBar",
                                    "description":"信号水平",
                                    "CaEType":"ProgressBar",
                                    "CaE":[
                                        {
                                            "id": "settingChManuSetAntSigLCont",
                                            "description": "进度条",
                                            "CaEType": "div"
                                        },
                                        {
                                            "id": "settingChManuSetAntSigLValue",
                                            "description": "进度显示文字",
                                            "CaEType": "span"
                                        }
                                    ],
                                    "classes":{
                                        "normal":"settingChSetPerFrame"
                                    },
                                    "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigLCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                                        PBProcessId: "settingChManuSetAntSigLCont",//进度条的进程id
                                        ShowTextId: "settingChManuSetAntSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                                        ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                                        PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                                        DefaultValue: 0,//默认值
                                        Width: 230,//进度条总宽度
                                        TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                                        CompleteCallBack: null//如果达到设置值时的回调函数。
                                    }
                                },
                                {
                                    "id": "settingChManuSetAntSearBtn",
                                    "description": "搜索",
                                    "CaEType": "div",
                                    "classes": {
                                        "normal": "wizardBtnNormal", "focus": "wizardBtnFocus","disable":"wizardBtnDisable"
                                    },
                                    "nav": {
                                        "upTo": "settingChManuSetAntChBtn",
                                        "rightTo": "settingChManuSetAntSearBtn", "leftTo": "settingChManuSetAntSearBtn"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "settingChSetDTVManuStartScan",
                                        "befUpHandler":"settingChSetDTVManuSearBtnBefUpHandle",
                                        "befDownHandler":"settingChSetDTVManuSearBtnbefkeyDelMarquee",
                                        "aftUpHandler":"settingChSetDTVManuSearBtnaftkeyAddMarquee",
                                        "aftDownHandler":"settingChSetDTVManuSearBtnaftkeyAddMarquee",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    }
                                }
                            ],
                            "classes": {
                                "normal": "settingChManuSetTabBodyNormal",
                                "focus": "settingChManuSetTabBodyFocus",
                                "selected": "settingChManuSetTabBodySelected"
                            },
                            "nav": {
                                "upTo": "settingChManuSetAntTitle"
                            }
                        }
                    ],
                    "classes": {
                        "normal": "settingChManuSetTabPageNormal", "focus": "settingChManuSetTabPageFocus", "selected": "settingChManuSetTabPageSelected"
                    }
                },
                {
                    "id": "settingChManuSetCable",
                    "description": "容器",
                    "firstFocusId": "settingChManuSetCabTitle",
                    "CaEType": "Container",
                    "CaE": [
                        {
                            "id": "settingChManuSetCabTitle",
                            "description": "分栏标题",
                            "CaEType": "div",
                            "maxWidth":298,
                            "onBlurFun":"settingChSetDTVManuTitleDelMarquee",
                            "onFocusFun":"settingChSetDTVManuTitleAddMarquee",
                            "classes": {
                                "normal": "settingChManuSetTab4TitleNormal",
                                "focus": "settingChManuSetTab4TitleFocus",
                                "selected": "settingChManuSetTab4TitleSelected"
                            },
                            "nav": {
                                "downTo": "settingChManuSetCabBody"
                            },
                            "handler": {
                                "befRightHandler":"settingChSetDTVManuTitleDelMarquee",
                                "befLeftHandler":"settingChSetDTVManuTitleDelMarquee"
                            }
                        },
                        {
                            "id": "settingChManuSetCabBody",
                            "description": "body容器",
                            "CaEType": "Container",
                            "ContainerConfig": {
                                "IsPrevent": true
                            },
                            "firstFocusId": "settingChSetDTVManuCabFreInput",
                            "CaE": [
                                {
                                    "id": "settingChManuSetCabFreTitle",
                                    "description": "频率",
                                    "CaEType": "span"
                                },
                                {
                                    "id": "settingChSetDTVManuCabFreInput",
                                    "description": "频率",
                                    "CaEType": "input",
                                    "inputAttr": "number",
                                    "maxlength":6,
                                    "classes": {
                                        "normal": "settingNumberInputNormal", "focus": "settingNumberInputFocus", "disable": "settingNumberInputDisable"
                                    },
                                    "nav": {
                                        "downTo": "settingChManuSetCabSearBtn", "upTo": "",
                                        "rightTo": "settingChSetDTVManuCabFreInput", "leftTo": "settingChSetDTVManuCabFreInput"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "invokeSKB",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    },
                                    "onChange":"settingChSetDTVManuIntInputOnChange",
                                    "onBlurFun":"settingChSetDTVManuCabFreOnBlurHandle"
                                },
                                {
                                    "id": "settingChManuSetCabSRTitle",
                                    "description": "符号率标题",
                                    "CaEType": "span"
                                },
                                {
                                    "id": "settingChManuSetCabSRValue",
                                    "description": "符号率标题",
                                    "CaEType": "span"
                                },
                                {
                                    "id": "settingChManuSetCabQAMTitle",
                                    "description": "QAM标题",
                                    "CaEType": "span"
                                },
                                {
                                    "id": "settingChManuSetCabQAMValue",
                                    "description": "QAM",
                                    "CaEType": "span"
                                },
                                {
                                    "id":"settingChManuSetCabSearchNumTitle",
                                    "description":"",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetCabSearchNumValue",
                                    "description":"",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetCabSigQTitle",
                                    "description":"信号质量标题",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetCabSigQProgressBar",
                                    "description":"",
                                    "CaEType":"ProgressBar",
                                    "CaE":[
                                        {
                                            "id": "settingChManuSetCabSigQCont",
                                            "description": "进度条",
                                            "CaEType": "div"
                                        },
                                        {
                                            "id": "settingChManuSetCabSigQValue",
                                            "description": "进度显示文字",
                                            "CaEType": "span"
                                        }
                                    ],
                                    "classes":{
                                        "normal":"settingChSetPerFrame"
                                    },
                                    "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigQCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                                        PBProcessId: "settingChManuSetCabSigQCont",//进度条的进程id
                                        ShowTextId: "settingChManuSetCabSigQValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                                        ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                                        PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                                        DefaultValue: 0,//默认值
                                        Width: 230,//进度条总宽度
                                        TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                                        CompleteCallBack: null//如果达到设置值时的回调函数。
                                    }
                                },
                                {
                                    "id":"settingChManuSetCabSigLTitle",
                                    "description":"信号水平标题",
                                    "CaEType":"span"
                                },
                                {
                                    "id":"settingChManuSetCabSigLProgressBar",
                                    "description":"信号水平",
                                    "CaEType":"ProgressBar",
                                    "CaE":[
                                        {
                                            "id": "settingChManuSetCabSigLCont",
                                            "description": "进度条",
                                            "CaEType": "div"
                                        },
                                        {
                                            "id": "settingChManuSetCabSigLValue",
                                            "description": "进度显示文字",
                                            "CaEType": "span"
                                        }
                                    ],
                                    "classes":{
                                        "normal":"settingChSetPerFrame"
                                    },
                                    "ProgressBarConfig": {
//                "progressBarId": "settingChSetDVBCAutoSigLCont",//进度变化的id 不能为空
//                "showTextid": "wizardChDVBCAutoSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
//                "progressmaintype": "auto",//默认为auto,  只会变化进度条的width',  “manual”为手动模式这种模式需要
//                //需要配置另外的三项, 是在初始时候 和变化中和 达到最大值的时候变换延时。达到用户期望的效果
//                "stepDuration": 10,	// setInterval的时间参数, 单位ms 进度条的前进速度
////                        "MinValue": 5,  //最小值, 不设定的话默认为0；
////                        "MaxValue": 150, //最大值。不设定默认为100；
//                "Width": 230,//宽度 progressbar在页面上的宽度px
//                "TextFormat": "percentage",//	ShowText的显示形式, “percentage”表示百分数, “fraction”表示分数
//                "progressingtype": "direction"//进度类型, “animation”动画模式 “direction”直接模式, 进度条直接显示当前值
////                        "CompletCallback": "progresscomplete"//在到达100%的时候执行的回调函数, 无此项的时候不进行回调
                                        PBProcessId: "settingChManuSetCabSigLCont",//进度条的进程id
                                        ShowTextId: "settingChManuSetCabSigLValue",//在进度条旁边用百分数或者分数显示进度与否, 默认为空是不显示, 有的时候需要进行提供id
                                        ShowTextIsMoved: false,//显示值标签是否随着进度条移动
                                        PBType: "direction",//进度类型, “animation”动画模式 “direction”直接模式
//                StepDuration: 20,// settimeout的时间参数, 单位ms 表示每增加1%d的时间间隔
//                MinValue: 0,  //最小值, 不设定的话默认为0；
//                MaxValue: 100, //最大值。不设定默认为100；
                                        DefaultValue: 0,//默认值
                                        Width: 230,//进度条总宽度
                                        TextFormat: "per",//	ShowText的显示形式, “per”表示百分数, “fra”表示分数, 其他则为“自定义函数”
                                        CompleteCallBack: null//如果达到设置值时的回调函数。
                                    }
                                },
                                {
                                    "id": "settingChManuSetCabSearBtn",
                                    "description": "搜索",
                                    "CaEType": "div",
                                    "classes": {
                                        "normal": "wizardBtnNormal", "focus": "wizardBtnFocus","disable":"wizardBtnDisable"
                                    },
                                    "nav": {
                                        "upTo": "settingChSetDTVManuCabFreInput",
                                        "rightTo": "settingChManuSetCabSearBtn", "leftTo": "settingChManuSetCabSearBtn"
                                    },
                                    "handler": {
                                        "aftEnterHandler": "settingChSetDTVManuStartScan",
                                        "befUpHandler":"settingChSetDTVManuSearBtnBefUpHandle",
                                        "befDownHandler":"settingChSetDTVManuSearBtnbefkeyDelMarquee",
                                        "aftUpHandler":"settingChSetDTVManuSearBtnaftkeyAddMarquee",
                                        "aftDownHandler":"settingChSetDTVManuSearBtnaftkeyAddMarquee",
                                        "befLeftHandler":"settingChSetDTVManuEscHandle"
                                    }
                                }
                            ],
                            "classes": {
                                "normal": "settingChManuSetTabBodyNormal",
                                "focus": "settingChManuSetTabBodyFocus",
                                "selected": "settingChManuSetTabBodySelected"
                            },
                            "nav": {
                                "upTo": "settingChManuSetCabTitle"
                            }
                        }
                    ],
                    "classes": {
                        "normal": "settingChManuSetTabPageNormal", "focus": "settingChManuSetTabPageFocus", "selected": "settingChManuSetTabPageSelected"
                    }
                }
            ],
            "classes": {
                "normal": "settingSetTabsClass", "focus": "settingSetTabsClass", "selected": "settingSetTabsClass"
            },
            "handler": {
                "aftLeftHandler": "settingChSetDTVManuChangeTunerMode",
                "aftRightHandler": "settingChSetDTVManuChangeTunerMode",
                "befLeftHandler": "settingChSetDTVManuBefLeftHandle"
            }
        }
    ];
    settingInitChSetDTVManuPage();
    return settingChSetDTVManuPageData;
}
var settingChSetDTVManuPageData = {
    "settingChManuSetPageTitle": {"Data": "DTV Manual Scan"},
    "settingChManuSetTabsFrame": {
        "Data": {
            "settingChManuSetSatellite": {
                "Data": {
                    "settingChManuSetSateTitle": {"Data": "Satellite"},
                    "settingChManuSetSateBody": {
                        "Data": {
                            "settingChManuSetSateNameTitle": {"Data": "Satellite Name"},
                            "settingChManuSetSateNameValue": {"Data": ""},
                            "settingChManuSetSateNameBtn": {"Data": "Adjust"},
                            "settingChManuSetSateFreBTitle": {"Data": "Polarization"},
                            "settingChManuSetSateFreBValue": {"Data": ""},
                            "settingChManuSetSateFreBNav": {
                                "Data": [
                                    {
                                        "settingChManuSetSateFreB": {"Data": ""}
                                    },
                                    {
                                        "settingChManuSetSateFreB": {"Data": ""}
                                    }
                                ],
                                "SelectedIndex": 0,
                                "DataSelectedIndex": 0
                            },
                            "settingChManuSetSateFreTitle": {"Data": "Frequency"},
                            "settingChSetDTVManuSateFreInput": {"Data": ""},
                            "settingChManuSetSateSRTitle": {"Data": "Symbol rate"},
                            "settingChSetDTVManuSateSRInput": {"Data": ""},
                            "settingChManuSetSateSearchNumTitle":{"Data":"Channel Num"},
                            "settingChManuSetSateSearchNumValue":{"Data":""},
                            "settingChManuSetSateSigQTitle":{"Data":"Signal Quality"},
                            "settingChManuSetSateSigQProgressBar":{
                                "Data":{},
                                "DefaultValue":0
                            },
                            "settingChManuSetSateSigLTitle":{"Data":"Signal Level"},
                            "settingChManuSetSateSigLProgressBar":{
                                "Data":{},
                                "DefaultValue":0
                            },
                            "settingChManuSetSateSearBtn": {"Data": "Search"}
                        }
                    }
                }
            },
            "settingChManuSetAntenna": {
                "Data": {
                    "settingChManuSetAntTitle": {"Data": "Antenna"},
                    "settingChManuSetAntBody": {
                        "Data": {
                            "settingChManuSetAntChTitle": {"Data": "Channel number"},
                            "settingChManuSetAntChValue": {"Data": "E34"},
                            "settingChManuSetAntChBtn": {"Data": "Adjust"},
                            "settingChManuSetAntBWTitle": {"Data": "Bandwidth"},
                            "settingChManuSetAntBWValue": {"Data": ""},
                            "settingChManuSetAntSearchNumTitle":{"Data":"Channel Num"},
                            "settingChManuSetAntSearchNumValue":{"Data":""},
                            "settingChManuSetAntSigQTitle":{"Data":"Signal Quality"},
                            "settingChManuSetAntSigQProgressBar":{
                                "Data":{},
                                "DefaultValue":80
                            },
                            "settingChManuSetAntSigLTitle":{"Data":"Signal Level"},
                            "settingChManuSetAntSigLProgressBar":{
                                "Data":{},
                                "DefaultValue":80
                            },
                            "settingChManuSetAntSearBtn": {"Data": "Search"}
                        }
                    }
                }
            },
            "settingChManuSetCable": {
                "Data": {
                    "settingChManuSetCabTitle": {"Data": "Cable"},
                    "settingChManuSetCabBody": {
                        "Data": {
                            "settingChManuSetCabFreTitle": {"Data": "Frequency"},
                            "settingChSetDTVManuCabFreInput": {"Data": ""},
                            "settingChManuSetCabSRTitle": {"Data": "Symbol rate"},
                            "settingChManuSetCabSRValue": {"Data": ""},
                            "settingChManuSetCabQAMTitle": {"Data": "QAM modulating"},
                            "settingChManuSetCabQAMValue": {"Data": "64"},
                            "settingChManuSetCabSearchNumTitle":{"Data":"Channel Num"},
                            "settingChManuSetCabSearchNumValue":{"Data":""},
                            "settingChManuSetCabSigQTitle":{"Data":"Signal Quality"},
                            "settingChManuSetCabSigQProgressBar":{
                                "Data":{},
                                "DefaultValue":80
                            },
                            "settingChManuSetCabSigLTitle":{"Data":"Signal Level"},
                            "settingChManuSetCabSigLProgressBar":{
                                "Data":{},
                                "DefaultValue":80
                            },
                            "settingChManuSetCabSearBtn": {"Data": "Search"}
                        }
                    }
                }
            }
        },
        "SelectedIndex": 0

    },
    "operateData": {
        "chScanState": 0, //0:设置,1:搜索
        "needRefreshChannelListFlag": 0,//0:不需要刷新列表，1：需要刷新列表
        "foundChannelNum":0,
        "currTunerModeIdx": 0,
        "tunerModeTypeMapList": [
            {
                "map": 2,
                "name": "Satellite"
            },
            {
                "map": 0,
                "name": "Antenna"
            },
            {
                "map": 1,
                "name": "Cable"
            }

        ],
        "sigQualityValue":80,
        "sigLevelValue":80,

        "antennaChannel": "",
        "antennaBandwidth": 0,

        "cableFreq": 0,
        "cableQAM":16,
        "QAMModeMapList": [
            {
                "map": 1,
                "name": 16
            },
            {
                "map": 2,
                "name": 32
            },
            {
                "map": 3,
                "name": 64
            },
            {
                "map": 4,
                "name": 128
            },
            {
                "map": 5,
                "name": 256
            },
            {
                "map": 6,
                "name": 1024
            },
            {
                "map": 7,
                "name": 4096
            }
        ],
        "cableSR": 0,
        "currSatelliteName": "Astra 19.2",
        "satelliteNum": 0,
        "satelliteNameList": [],
        "satelliteIdList": [],
        "satellitePolarIdx": 0,//水平方式
        "satelliteBandModeMap": [
            {
                "map": 1,
                "name": "Horizontal"
            },
            {
                "map": 2,
                "name": "Vertical"
            }
        ],
        "satelliteFre": 0,
        "satelliteSRInputExit": 0,
        "satelliteSR": 0,
        "signalInfoTimer":0

    },
    "langData": {
        "Cable": ["Cable"],
        "Antenna": ["Antenna"],
        "Satellite": ["Satellite"],
        "Bandwidth": ["Bandwidth"],
        "Scan": ["Scan"],
        "DTV Manual Scan": ["DTV Manual Scan"],
        "Frequency": ["Frequency"],
        "Channel Num":["Channel Num"],
        "Channel number": ["Channel number"],
        "Symbol rate": ["Symbol rate"],
        "QAM modulating": ["QAM modulating"],
        "Network": ["Network"],
        "Satellite Name": ["Satellite Name"],
        "Polarization": ["Polarization"],
        "Horizontal": ["Horizontal"],
        "Horizontal/Low": ["Horizontal/Low"],
        "Vertical": ["Vertical"],
        "Vertical/High": ["Vertical/High"],
        "Adjust": ["Adjust"],
        "Search": ["Search"],
        "Signal Quality": ["Signal Quality"],
        "Signal Level": ["Signal Level"],
        "Standard": ["Standard"]
    },
    rewrite: "settingRewriteChSetDTVManuPage"
}
/*******************************************************************
 name:settingInitChSetDTVManuPage
 description:从Analog的设置信息查看页到搜台设置主页
 input:
 output:
 return
 *******************************************************************/
function settingInitChSetDTVManuPage() {
    try {
        var data = settingChSetDTVManuPageData;
        data.operateData.chScanState = 0;
        data.operateData.needRefreshChannelListFlag = 0;
        data.operateData.foundChannelNum = 0;
        data.operateData.currTunerModeIdx = getChSetDTVManuTunerModeIdx();
        getChSetDTVManuSingnalInfo();
        switch (data.operateData.currTunerModeIdx){
            case 0:
                getSettingChSetManuSatellitePara();
                break;
            case 1:
                getSettingChSetManuAntennaPara();
                break;
            case 2:
                getSettingChSetManuCablePara();
                break;

        }
        data.operateData.signalInfoTimer = setInterval(settingChSetDTVManuSignalInfoTimeOut,2000);
    } catch (ex) {
        debugPrint("settingInitChSetDTVManuPage:" + ex.message, DebugLevel.ERROR);
    }
}
function getChSetDTVManuSingnalInfo(){
    var data = settingChSetDTVManuPageData;
    if(tv == false){
        data.operateData.sigQualityValue = data.operateData.sigQualityValue -1;
        data.operateData.sigLevelValue = data.operateData.sigLevelValue -1;
    }else{
        data.operateData.sigQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
        data.operateData.sigLevelValue = model.tvservice.getSignalMainLevels();
    }
}
function getChSetDTVManuTunerModeIdx() {
    var data = settingChSetDTVManuPageData;
    try {
        var tunerModeTypeMapList = data.operateData.tunerModeTypeMapList;
        if (tv == false) {
            if (!!localStorage.getItem("tunerModeTypeIdx")) {
                return parseInt(localStorage.getItem("tunerModeTypeIdx"));
            } else {
                localStorage.setItem("tunerModeTypeIdx", 0);
                return 0;
            }
        } else {
            var currTunerMode = model.channelSearch.getSource();
            for (var i = 0; i < tunerModeTypeMapList.length; i++) {
                if (currTunerMode == tunerModeTypeMapList[i].map) {
                    data.operateData.currTunerModeIdx = i;
                    break;
                }
            }
            if (i == tunerModeTypeMapList.length) {
                debugPrint("getChSetDTVManuTunerModeIdx:" + ex.message, DebugLevel.ERROR);
                data.operateData.currTunerModeIdx = 0;
                model.channelSearch.setSource(tunerModeTypeMapList[0].map);
            }
            return data.operateData.currTunerModeIdx;
        }

    } catch (ex) {
        debugPrint("getWizardNetSetSetCurrNetTypeIdx:" + ex.message, DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:getSettingChSetManuAntennaPara
 description:获取手动搜台是antenna的所需参数
 input:
 output:
 return
 *******************************************************************/
function getSettingChSetManuAntennaPara() {
    try {
        var data = settingChSetDTVManuPageData;
        if (tv == false) {
            data.operateData.antennaChannel = "";
            data.operateData.antennaBandwidth = 7;
        } else {
            data.operateData.antennaChannel = model.channelSearch.getFoundServicesNumber();
            data.operateData.antennaBandwidth = model.channelSearch.getBandWidth();
        }
    } catch (ex) {
        debugPrint("getSettingChSetManuAntennaPara" + ex.message, DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:getSettingChSetManuCablePara
 description:获取手动搜台Cable的所需参数
 input:
 output:
 return
 *******************************************************************/
function getSettingChSetManuCablePara() {
    try {
        var data = settingChSetDTVManuPageData;
        if (tv == false) {
            data.operateData.cableFreq = "1400";
            data.operateData.cableQAM = 16;
            data.operateData.cableSR = 2000;
        } else {
            data.operateData.cableFreq = model.channelSearch.getFoundServicesFrequency();
            debugPrint("getSettingChSetManuCablePara:cableFreq=" + data.operateData.cableFreq);
            data.operateData.cableQAM = model.channelSearch.getFoundServicesQam();
            data.operateData.cableSR = model.channelSearch.getFoundServicesSymbolrate();
        }
    } catch (ex) {
        debugPrint("getSettingChSetManuCablePara" + ex.message, DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:getSettingChSetManuSatellitePara
 description:获取手动搜台是satellit的所需参数
 input:
 output:
 return
 *******************************************************************/
function getSettingChSetManuSatellitePara() {
    try {
        var data = settingChSetDTVManuPageData;
        if (tv == false) {
            data.operateData.satelliteNum = 3;
            data.operateData.currSatelliteName = "weixing1";
            data.operateData.satelliteNameList = ["weixing1", "weixing2", "weixing3", ""];
            data.operateData.satelliteIdList = [1, 2, 3, -1];
            data.operateData.satellitePolarIdx = 0;
            data.operateData.satelliteFre = 1400;
            data.operateData.satelliteSR = 2000;
        } else {
            data.operateData.satelliteNum = 0;
            data.operateData.satelliteIdList = model.satellite.getSelectedIdList();
            data.operateData.satelliteNameList = model.satellite.getSelectedNameList();
            for (var i = 0; i < data.operateData.satelliteIdList.length; i++) {
                if (data.operateData.satelliteIdList[i] != -1) {
                    data.operateData.satelliteNum++;
                }
            }
            if(data.operateData.satelliteNum == 0){
                debugE("getSettingChSetManuSatellitePara:satelliteNum=0");
                model.satellite.setInstallation(0);//默认设置为single模式
//                model.satellite.setSelected1Id(1);//设置默认卫星为Astra19。2
                data.operateData.satelliteNum=1;
            }
            var currSatelliteId = model.satellite.getSearchId();
            data.operateData.currSatelliteName = model.satellite.getSearchName();
            debugPrint("getSettingChSetManuSatellitePara:"+currSatelliteId+","+data.operateData.currSatelliteName);
            data.operateData.satelliteFre = (model.channelSearch.getFoundServicesFrequency())/1000;
            data.operateData.satelliteSR = model.channelSearch.getFoundServicesSymbolrate();
            var currPolarization = model.satellite.getPolarization();
            for (i = 0; i < data.operateData.satelliteBandModeMap.length; i++) {
                if (currPolarization == data.operateData.satelliteBandModeMap[i].map) {
                    data.operateData.satellitePolarIdx = i;
                    break;
                }
            }
            if (i == data.operateData.satelliteBandModeMap.length) {
                debugPrint("getSettingChSetManuSatellitePara:currPolarization=" + currPolarization, DebugLevel.ERROR);
                model.satellite.setPolarization(data.operateData.satelliteBandModeMap[0].map);
                data.operateData.satellitePolarIdx = 0;
            }
        }
    } catch (ex) {
        debugPrint("getSettingChSetManuSatellitePara:" + ex.message, DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDTVManuPage
 description:刷新手动设置页
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDTVManuPage(data) {
    try {
        data.settingChManuSetTabsFrame.SelectedIndex = data.operateData.currTunerModeIdx;
        debugPrint("settingRewriteChSetDTVManuPage:"+data.operateData.currTunerModeIdx,DebugLevel.ALWAYS);
        settingRefreshChSetManuSatellitePage(data);
        settingRefreshChSetManuCablePage(data);
        settingRefreshChSetManuAntennaPage(data);
    } catch (ex) {
        debugPrint("settingRewriteChSetDTVManuPage:" + ex.message, DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRefreshChSetManuAntennaPage
 description:刷新antenna配置页
 input:
 output:
 return
 *******************************************************************/
function settingRefreshChSetManuAntennaPage(data) {
    try {
        var antennaPageData = data.settingChManuSetTabsFrame.Data.settingChManuSetAntenna.Data;
        var antennaPageBodyData = antennaPageData.settingChManuSetAntBody.Data;
        antennaPageBodyData.settingChManuSetAntChValue.Data = data.operateData.antennaChannel;
        antennaPageBodyData.settingChManuSetAntBWValue.Data = data.operateData.antennaBandwidth;
        antennaPageBodyData.settingChManuSetAntSearchNumValue.Data = data.operateData.foundChannelNum;
        antennaPageBodyData.settingChManuSetAntSigQProgressBar.DefaultValue = data.operateData.sigQualityValue;
        antennaPageBodyData.settingChManuSetAntSigLProgressBar.DefaultValue = data.operateData.sigLevelValue;
        if(data.operateData.chScanState == 1){
            antennaPageBodyData.settingChManuSetAntSearBtn.disable = true;
        }else{
            antennaPageBodyData.settingChManuSetAntSearBtn.disable = false;
        }
    } catch (ex) {
        debugPrint("settingRefreshChSetManuAntennaPage:" + ex.message, DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingRefreshChSetManuCablePage
 description:刷新手动设置中Cable页
 input:
 output:
 return
 *******************************************************************/
function settingRefreshChSetManuCablePage(data) {
    try {
        var cablePageData = data.settingChManuSetTabsFrame.Data.settingChManuSetCable.Data;
        var cablePageBodyData = cablePageData.settingChManuSetCabBody.Data;

        cablePageBodyData.settingChSetDTVManuCabFreInput.Data = data.operateData.cableFreq;
        cablePageBodyData.settingChManuSetCabQAMValue.Data = data.operateData.cableQAM;
        cablePageBodyData.settingChManuSetCabSRValue.Data = data.operateData.cableSR;
        cablePageBodyData.settingChManuSetCabSearchNumValue.Data = data.operateData.foundChannelNum;
        cablePageBodyData.settingChManuSetCabSigQProgressBar.DefaultValue = data.operateData.sigQualityValue;
        cablePageBodyData.settingChManuSetCabSigLProgressBar.DefaultValue = data.operateData.sigLevelValue;
        if(data.operateData.chScanState == 1){
            cablePageBodyData.settingChManuSetCabSearBtn.disable = true;
        }else{
            cablePageBodyData.settingChManuSetCabSearBtn.disable = false;
        }

    } catch (ex) {
        debugPrint("settingRefreshChSetManuCablePage:" + ex.message, DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingRefreshChSetManuSatellitePage
 description:刷新手动手台中卫星设置页
 input:
 output:
 return
 *******************************************************************/
function settingRefreshChSetManuSatellitePage(data) {
    try {
        var satellitePageData = data.settingChManuSetTabsFrame.Data.settingChManuSetSatellite.Data;
        var satellitePageBodyData = satellitePageData.settingChManuSetSateBody.Data;
        if (data.operateData.satelliteNum > 0) {
            satellitePageData.settingChManuSetSateBody.disable = false;
            satellitePageBodyData.settingChManuSetSateNameValue.Data = data.operateData.currSatelliteName;
            if (satellitePageBodyData.settingChManuSetSateFreBNav.Data.length > data.operateData.satelliteBandModeMap.length) {
                satellitePageBodyData.settingChManuSetSateFreBNav.Data.splice(data.operateData.satelliteBandModeMap.length);
            } else if (satellitePageBodyData.settingChManuSetSateFreBNav.Data.length < data.operateData.satelliteBandModeMap.length) {
                while (satellitePageBodyData.settingChManuSetSateFreBNav.Data.length < data.operateData.satelliteBandModeMap.length) {
                    var itemData = {
                        "settingChManuSetSateFreB": {"Data": ""}
                    }
                    satellitePageBodyData.settingChManuSetSateFreBNav.Data.push(itemData);
                }
            }
            $.each(data.operateData.satelliteBandModeMap, function (idx, item) {
                satellitePageBodyData.settingChManuSetSateFreBNav.Data[idx].settingChManuSetSateFreB.Data = item.name;
            })
            satellitePageBodyData.settingChManuSetSateFreBNav.SelectedIndex = data.operateData.satellitePolarIdx;
            satellitePageBodyData.settingChManuSetSateFreBNav.DataSelectedIndex = data.operateData.satellitePolarIdx;
            satellitePageBodyData.settingChManuSetSateFreBValue.Data = data.operateData.satelliteBandModeMap[data.operateData.satellitePolarIdx].name;
            satellitePageBodyData.settingChSetDTVManuSateFreInput.Data = data.operateData.satelliteFre;
            satellitePageBodyData.settingChSetDTVManuSateSRInput.Data = data.operateData.satelliteSR;
            satellitePageBodyData.settingChManuSetSateSearchNumValue.Data = data.operateData.foundChannelNum;
            satellitePageBodyData.settingChManuSetSateSigQProgressBar.DefaultValue = data.operateData.sigQualityValue;
            satellitePageBodyData.settingChManuSetSateSigLProgressBar.DefaultValue = data.operateData.sigLevelValue;
            debugPrint("settingRefreshChSetManuSatellitePage:"+data.operateData.chScanState,DebugLevel.ALWAYS);
            if(data.operateData.chScanState == 1){
                satellitePageBodyData.settingChManuSetSateSearBtn.disable = true;
            }else{
                satellitePageBodyData.settingChManuSetSateSearBtn.disable = false;
            }
        }
        else {
            debugE("settingRefreshChSetManuSatellitePage:satellite num is 0!");
            satellitePageData.settingChManuSetSateBody.disable = true;
        }
    } catch (ex) {
        debugPrint("settingRefreshChSetManuSatellitePage:" + ex.message, DebugLevel.ERROR);
    }
}
/*******************************************************************
 description:当搜台时，当前search按钮不响应向上的键值
 *******************************************************************/
function settingChSetDTVManuSearBtnBefUpHandle(){
    debugPrint("settingChSetDTVManuSearBtnBefUpHandle:"+this.id,DebugLevel.ALWAYS);
    //  DelMarquee
    var marquee = $("#"+this.id +" marquee");
    if (marquee.length > 0) {
        var htmlText = $("#"+this.id + " marquee").html();
        var marquee = $("#"+this.id ).html(htmlText);
    }
    var data = settingChSetDTVManuPageData;
    if(data.operateData.chScanState == 1){
        //search currBtnFocus
        hiWebOsFrame.ChSetDTVManuPage.hiFocus(this.id);
        return false;
    }
}
function settingChSetDTVManuSearBtnbefkeyDelMarquee(){
    //  DelMarquee
    var marquee = $("#"+this.id +" marquee");
    if (marquee.length > 0) {
        var htmlText = $("#"+this.id + " marquee").html();
        var marquee = $("#"+this.id ).html(htmlText);
    }
}
function settingChSetDTVManuSearBtnaftkeyAddMarquee(){
    //AddMarquee
    var htmlText = $("#"+this.id ).html();
    if (htmlText.length >8) {
        $("#"+this.id ).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + htmlText + '</marquee>');
    }
}
function settingChSetDTVManuTitleDelMarquee(){
    //  DelMarquee
    var marquee = $("#"+this.id +" marquee");
    if (marquee.length > 0) {
        var htmlText = $("#"+this.id + " marquee").html();
        var marquee = $("#"+this.id ).html(htmlText);
    }
}
function settingChSetDTVManuTitleAddMarquee(){
    //AddMarquee
    var htmlText = $("#"+this.id ).html();
    if (htmlText.length >15) {
        $("#"+this.id ).html('<marquee style="width: inherit" scrollAmount=10 scrollDelay=150>' + this.oriText + '</marquee>');
    }
}
/*******************************************************************
 name:settingChSetManuChangeRevMode
 description:左右移动时切换接收方式
 input:
 output:
 return
 *******************************************************************/
function settingChSetDTVManuChangeTunerMode() {
    try {
        var data = settingChSetDTVManuPageData;
        data.operateData.currTunerModeIdx = this.SelectedIndex;
        data.operateData.foundChannelNum = 0;
        debugPrint("settingChSetDTVManuChangeTunerMode:SelectedIndex" + this.SelectedIndex);
        data.settingChManuSetTabsFrame.SelectedIndex = this.SelectedIndex;
        if (tv == true) {
            model.channelSearch.onSourceChaged = settingChManuSourceCallBack;
            model.channelSearch.setSource(data.operateData.tunerModeTypeMapList[data.operateData.currTunerModeIdx].map);
        }else{
            switch (data.operateData.currTunerModeIdx) {
                case 0:
                    getSettingChSetManuSatellitePara();
                    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                    hiWebOsFrame.ChSetDTVManuPage.hiFocus();
                    break;
                case 1:
                    getSettingChSetManuAntennaPara();
                    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                    hiWebOsFrame.ChSetDTVManuPage.hiFocus();
                    break;
                case 2:
                    getSettingChSetManuCablePara();
                    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                    hiWebOsFrame.ChSetDTVManuPage.hiFocus();
                    break;
                default :
                    debugE("settingChManuSourceCallBack:"+data.operateData.currTunerModeIdx);
                    break;
            }
        }
    } catch (ex) {
        debugPrint("settingChSetManuChangeRevMode:" + ex.message, DebugLevel.ERROR)
    }
}
function settingChSetDTVChNumberEnterHandler() {
    hiWebOsFrame.createPage('settingChSetChNumberChangeDialogId', null, hiWebOsFrame.ChSetDTVManuPage, null, function (a) {
        hiWebOsFrame.ChSetChNumberChangeDialog = a;
        settingChSetChSetChNumberSet(getSettingChSetDTVChNumber());
        hiWebOsFrame.ChSetChNumberChangeDialog.rewriteDataOnly();
        a.open();
        a.hiFocus();
    });
}
function settingChManuSourceCallBack(value) {
    try {
        var data = settingChSetDTVManuPageData;
        debugPrint("settingChManuSourceCallBack:value=" + value,DebugLevel.ALWAYS);
        var currIdx = getChSetDTVManuTunerModeIdx();
        if (currIdx != data.operateData.currTunerModeIdx) {
            debugPrint("settingChManuSourceCallBack:currIdx=" + currIdx + ",currTunerModeIdx=" + data.operateData.currTunerModeIdx, DebugLevel.ERROR);
            hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
            hiWebOsFrame.ChSetDTVManuPage.hiFocus();
        } else {
            switch (data.operateData.currTunerModeIdx) {
                case 0:
                    getSettingChSetManuSatellitePara();
                    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                    hiWebOsFrame.ChSetDTVManuPage.hiFocus();
                    break;
                case 1:
                    getSettingChSetManuAntennaPara();
                    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                    hiWebOsFrame.ChSetDTVManuPage.hiFocus();
                    break;
                case 2:
                    getSettingChSetManuCablePara();
                    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                    hiWebOsFrame.ChSetDTVManuPage.hiFocus();
                    break;

                default :
                    debugE("settingChManuSourceCallBack:"+data.operateData.currTunerModeIdx);
                    break;
            }
        }
    } catch (ex) {
        debugPrint("settingChManuSourceCallBack:" + ex.message, DebugLevel.ERROR);
    }

}
function settingChSetDTVManuCabFreOnBlurHandle(){
    try{
        var data = settingChSetDTVManuPageData;
        var currCableFre = $("#settingChSetDTVManuCabFreInput").val();
        if(!!currCableFre){
            data.operateData.cableFreq = currCableFre;
            if(tv == true){
                model.channelSearch.setFoundServicesFrequency(parseInt(currCableFre));
            }
        }else{
            $("#settingChSetDTVManuCabFreInput").val(data.operateData.cableFreq);
        }
    }catch (ex){
        debugE("settingChSetDTVManuCabFreOnBlurHandle:"+ex.message);
    }
}
function settingChSetDTVManuCabSROnBlurHandle(){
    try{
        var data = settingChSetDTVManuPageData;
        var currCableSR = $("#settingChSetDTVManuCabSRInput").val();
        if(!!currCableSR){
            data.operateData.cableSR = currCableSR;
            if(tv == true){
                model.channelSearch.setFoundServicesSymbolrate(parseInt(currCableSR));
            }
        }else{

        }
    }catch (ex){
        debugE("settingChSetDTVManuCabSROnBlurHandle:"+ex.message);
    }
}
function getSettingChSetDTVChNumber(){
    var data = settingChSetDTVManuPageData;
    return data.operateData.antennaChannel;
}
function setSettingChSetDTVChNumber(channelNumber) {
    try {
        var data = settingChSetDTVManuPageData;
        data.operateData.antennaChannel = channelNumber;
        if (tv == true) {
//            var currChannelNumber = model.channelSearch.getFoundServicesNumber();
//            if(currChannelNumber != channelNumber){
//                debugPrint("setSettingChSetDTVChNumber:currChannelNumber="+currChannelNumber+",channelNumber="+channelNumber,DebugLevel.ERROR);
//            }
            data.operateData.antennaBandwidth = model.channelSearch.getBandWidth();
        }
        hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
    } catch (ex) {
        debugPrint("setSettingChSetDTVChNumber:" + ex.message, DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetDTVManuStartScan
 description:开始手动搜索DTV
 input:
 output:
 return
 *******************************************************************/
function settingChSetDTVManuStartScan() {
    try {

        var data = settingChSetDTVManuPageData;

        if (data.operateData.chScanState == 0) {

            data.operateData.chScanState = 1;
            //debugPrint("settingChSetDTVManuStartScan:model.channelSearch.getFoundServicesFrequency="+model.channelSearch.getFoundServicesFrequency());
            hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();

            if (tv == false) {
                data.operateData.searchTimer = setTimeout(settingChSetDTVManuTestSearch, 5000);
            }
            else {
                try {
                    data.operateData.needRefreshChannelListFlag = 1;
                    hiWebOsFrame.pushProtectPages(hiWebOsFrame.ChSetDTVManuPage);
                    switch (data.operateData.currTunerModeIdx){
                        case 0:
                            debugPrint("settingChSetDTVManuStartScan:"+data.operateData.currTunerModeIdx,DebugLevel.ALWAYS);
                            break;
                        case 1:
                            debugPrint("settingChSetDTVManuStartScan:"+data.operateData.currTunerModeIdx,DebugLevel.ALWAYS);
                            break;
                        case 2:
                            var currCableFre = $("#settingChSetDTVManuCabFreInput").val();
                            if(!!currCableFre){
                                data.operateData.cableFreq = currCableFre;
                                model.channelSearch.setFoundServicesFrequency(parseInt(currCableFre));
                            }
                            debugPrint("settingChSetDTVManuStartScan:"+data.operateData.cableFreq,DebugLevel.ALWAYS);
                            break;

                    }
                    var currSource = model.source.getCurrentSource();
                    if(currSource != 0){
                        debugE("settingChSetDTVManuStartScan:currSource="+currSource);
                        model.source.InputSet(0);
                    }
                    var temp=model.source.getInputName();
                    debugPrint("settingChSetDTVManuStartScan:temp"+temp,DebugLevel.ERROR);
                    if(temp[3]==1)//判断 tv 通道加锁，搜台前暂时解锁，不设置底层EPPROM
                    {
                        model.source.unlockInput(0);
                        livetvmain.setUnlockFlag(true);
                    }
                    pauseHBBTV();
                    model.channelSearch.ManualStart(0);
                } catch (ex) {
                    debugE(ex.message + "ManualStart");
                }
            }
        }else{
            debugE("settingChSetDTVManuStartScan:is searching!!");
        }
    } catch (ex) {
        debugPrint("settingChSetDTVTManuStartScan: " + ex.message, DebugLevel.ERROR);
    }
}


/*******************************************************************
 name:settingChSetDTVManuSearchStateCallBack
 description:搜台状态变化
 input:state:搜台状态
 output:
 return
 *******************************************************************/
function settingChSetDTVManuSearchStateCallBack(value) {
    try {
        debugPrint("settingChSetDTVManuSearchStateCallBack:state=" + value, DebugLevel.ALWAYS);
        var data = settingChSetDTVManuPageData;
        switch (value) {
            case 1://complete
                hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetDTVManuPage);
                data.operateData.chScanState = 0;
                data.operateData.foundChannelNum = model.channelSearch.getFoundDigitServices();
                switch (data.operateData.currTunerModeIdx){
                    case 0:
                        debugPrint("settingChSetDTVManuSearchStateCallBack:"+data.operateData.currTunerModeIdx,DebugLevel.ALWAYS);
                        data.operateData.satelliteSR = model.channelSearch.getFoundServicesSymbolrate();
                        break;
                    case 1:
                        debugPrint("settingChSetDTVManuSearchStateCallBack:"+data.operateData.currTunerModeIdx,DebugLevel.ALWAYS);
                        break;
                    case 2:
                        debugPrint("settingChSetDTVManuSearchStateCallBack:"+data.operateData.currTunerModeIdx,DebugLevel.ALWAYS);
                        data.operateData.cableQAM = model.channelSearch.getFoundServicesQam();
                        data.operateData.cableSR = model.channelSearch.getFoundServicesSymbolrate();
                        break;

                }
//                data.operateData.sigQualityValue = model.tvservice.getTunersignalinfoSignalqualities();
//                data.operateData.sigLevelValue = model.tvservice.getSignalMainLevels();
                debugPrint("settingChSetDTVManuSearchStateCallBack:"+data.operateData.sigQualityValue+","+ data.operateData.sigLevelValue,DebugLevel.ALWAYS);
                hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                data.operateData.needRefreshChannelListFlag = 0;
                refreshChListAftSearchChannel();
                break;
            case 2:
                break;
            default :
                data.operateData.chScanState = 0;
                data.operateData.foundChannelNum = 0;
                hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
                break;
        }
    } catch (ex) {
        debugPrint("settingDTVTManuScanStateChangeCallBack:" + ex.message, DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDTVManuTestSearch
 description:测试电脑方式搜台进度
 input:method:
 output:
 return
 *******************************************************************/
function settingChSetDTVManuTestSearch() {
    var data = settingChSetDTVManuPageData;
    data.operateData.chScanState = 0;
    data.operateData.foundChannelNum = 2;
    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
}

/*******************************************************************
 name:settingChSetManuSatelliteNameEnterHandle
 description:手动搜台页面中Satellite模式中设置使用的SatelliteId
 input:
 output:
 return
 *******************************************************************/
function settingChSetManuSatelliteNameEnterHandle() {
    try {
        hiWebOsFrame.createPage('settingChSetSatelliteListDialogId', null, hiWebOsFrame.ChSetDTVManuPage, null, function (a) {
            hiWebOsFrame.ChSetSatelliteListDialog = a;
            a.open();
            a.hiFocus();
        });
    } catch (ex) {
        debugPrint("settingChSetManuSatelliteNameEnterHandle:" + ex.message, DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetManuSetSateFreBand
 description:手动搜台页面中Satellite模式中设置使用的频段
 input:
 output:
 return
 *******************************************************************/
function settingChSetManuSetSateFreBand() {
    try {
        var data = settingChSetDTVManuPageData;
        data.operateData.satellitePolarIdx = this.SelectedIndex;
        if (tv == true) {
            model.satellite.setPolarization(data.operateData.satelliteBandModeMap[data.operateData.satellitePolarIdx].map);
        }
        this.page.rewriteDataOnly();
    } catch (ex) {
        debugPrint("settingChSetManuSetSateFreBand:" + ex.message, DebugLevel.ERROR);
    }
}
function settingChSetDTVManuIntInputOnChange(){
    try{
        var inputValue = $("#"+this.id).val();
        debugPrint("settingChSetDTVManuIntInputOnChange:"+this.id+","+inputValue,DebugLevel.ALWAYS);
        if(!!inputValue){
            var currInputValue = parseInt(inputValue,10);
            $("#"+this.id).val(currInputValue);
            debugPrint("settingChSetDTVManuIntInputOnChange"+currInputValue,DebugLevel.ALWAYS);
        }
    }catch (ex){
        debugE("settingChSetDTVManuIntInputOnChange:"+ex.message);
    }
}
function settingChSetDTVManuSateRecordFre(){
    try{
        var data = settingChSetDTVManuPageData;
        var currSatelliteFre = $("#settingChSetDTVManuSateFreInput").val();
        debugPrint("settingChSetDTVManuSateRecordFre:"+currSatelliteFre,DebugLevel.ALWAYS);
        if(!!currSatelliteFre){
            data.operateData.satelliteFre = currSatelliteFre;
            if(tv == true){
                model.channelSearch.setFoundServicesFrequency(parseInt(currSatelliteFre)*1000);
            }
        }else{
            $("#settingChSetDTVManuSateFreInput").val(data.operateData.satelliteFre);
        }
    }catch (ex){
        debugE("settingChSetDTVManuSateRecordFre:"+ex.message);
    }

}

function settingChSetDTVManuSateRecordSR(){
    try{
        var data = settingChSetDTVManuPageData;
        var currSatelliteSR = $("#settingChSetDTVManuSateSRInput").val();
        if(!!currSatelliteSR){
            data.operateData.satelliteSR = currSatelliteSR;
            if(tv == true){
                model.channelSearch.setFoundServicesSymbolrate(parseInt(currSatelliteSR));
            }
        }else{
            $("#settingChSetDTVManuSateSRInput").val(data.operateData.satelliteSR);
        }
    }catch (ex){
        debugE("settingChSetDTVManuSateRecordSR:"+ex.message);
    }

}
function settingChSetDTVManuSetSearchSatellite(satelliteId,satelliteName){
    try{
        debugPrint("settingChSetDTVManuSetSearchSatellite:"+satelliteId+","+satelliteName);
        var data = settingChSetDTVManuPageData;
        data.operateData.currSatelliteName = satelliteName;
        hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
    }catch (ex){
        debugE("settingChSetDTVManuSetSearchSatellite:"+ex.message);
    }
}
function settingChSetDTVManuSignalInfoTimeOut(){
    getChSetDTVManuSingnalInfo();
    var data = settingChSetDTVManuPageData;
    var levelId = "settingChManuSetSateSigLProgressBar";
    var qualityId = "settingChManuSetSateSigQProgressBar";
    switch (data.operateData.currTunerModeIdx){
        case 0:
            levelId = "settingChManuSetSateSigLProgressBar";
            qualityId = "settingChManuSetSateSigQProgressBar";
            break;
        case 1:
            levelId = "settingChManuSetAntSigLProgressBar";
            qualityId = "settingChManuSetAntSigQProgressBar";
            break;
        case 2:
            levelId = "settingChManuSetCabSigLProgressBar";
            qualityId = "settingChManuSetCabSigQProgressBar";
            break;

    }

    //更新Level进度条
    var _this = hiWebOsFrame.ChSetDTVManuPage.getCaE(levelId);
    _this.running_value = data.operateData.sigLevelValue;
    _this.setvalue(_this.running_value);

    //更新Quality进度条
    var _this = hiWebOsFrame.ChSetDTVManuPage.getCaE(qualityId);
    _this.running_value =  data.operateData.sigQualityValue;
    _this.setvalue(_this.running_value);
//    hiWebOsFrame.ChSetDTVManuPage.rewriteDataOnly();
}
function settingChSetDTVManuBefLeftHandle(){
    var opData = settingChSetDTVManuPageData.operateData;
    if(opData.currTunerModeIdx == 0){
        settingChSetDTVManuEscHandle();
    }
}
function settingChSetManuSetSateFreBLeftHandle(){
    if(this.SelectedIndex == 0){
        settingChSetDTVManuEscHandle();
    }
}
/******************************************************************
 name:settingChSetDTVManuEscHandle
 description:手动搜台界面按esc键返回到setting主界面
 input:
 output:
 return
 *******************************************************************/
function settingChSetDTVManuEscHandle() {
    try {
        if (tv == true) {
            model.channelSearch.Stop();
        }
        var data = settingChSetDTVManuPageData;
        clearInterval(data.operateData.signalInfoTimer);
        hiWebOsFrame.ChSetDTVManuPage.close();
        hiWebOsFrame.settingsFirst.hiFocus();
        hiWebOsFrame.ChSetDTVManuPage.destroy();
    } catch (ex) {
        debugPrint("settingChSetDTVManuEscHandle:" + ex.message);
    }
}
function settingChSetDTVManuOnOpen(){
    if(tv == true){
        model.channelSearch.onStateChaged = settingChSetDTVManuSearchStateCallBack;
    }
}
function settingChSetDTVManuOnDestroy() {
    try{
        var data = settingChSetDTVManuPageData;
        hiWebOsFrame.popProtectPages(hiWebOsFrame.ChSetDTVManuPage);
        hiWebOsFrame.ChSetDTVManuPage = null;
        clearInterval(data.operateData.signalInfoTimer);
        if(tv == true){
            model.channelSearch.onStateChaged = null;
        }
        if(data.operateData.needRefreshChannelListFlag == 1){
            refreshChListAftSearchChannel();
        }
    }catch (ex){
        debugE("settingChSetDTVManuOnDestroy:"+ex.message);
    }


}