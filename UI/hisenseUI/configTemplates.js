/**
 * Created by haoyunying on 15-7-10.
 */
var templatesConfig=[
    {
        "id": "templateA",
        "description": "模版A",
        "pageMode": "module",
        "width": 300,
        "height": 500,
        "firstFocusId": "templateA_1",
        "htmlPath": "templates/templateA.html",
        "jsPath": "templates/templateA.js",
        "cssPath": "templates/templateA.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "templateA_1",
                "description": "",
                "classes": {
                    "normal": "templateA_1_normal", "focus": "templateA_1_focus"
                },
                "CaEType": "div",
                "templateSign":"TEMP",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "nav": {
                    "downTo": "templateA_2",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "AUTO"
                },
                "handler": {
                }
            },
            {
                "id": "templateA_2",
                "description": "",
                "classes": {
                    "normal": "templateA_2_normal", "focus": "templateA_2_focus"
                },
                "CaEType": "div",
                "templateSign":"TEMP",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "nav": {
                    "upTo": "templateA_1",
                    "rightTo": "templateA_3",
                    "leftTo": "AUTO"
                },
                "handler": {
                }
            },
            {
                "id": "templateA_3",
                "description": "",
                "classes": {
                    "normal": "templateA_3_normal", "focus": "templateA_3_focus"
                },
                "CaEType": "div",
                "templateSign":"TEMP",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "nav": {
                    "upTo": "templateA_1",
                    "leftTo": "templateA_2",
                    "rightTo": "AUTO"
                },
                "handler": {
                }
            }
        ],
        "idList": ["templateA_1", "templateA_2","templateA_3"],//明确替换的id列表
        "dataFormat": {
            "templateA_1": {Data: "XXX"},
            "templateA_2": {Data: "XXX"},
            "templateA_3": {Data: "XXX"}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.templateA_1.Data = dat[0];
            tempData.templateA_2.Data = dat[1];
            tempData.templateA_3.Data = dat[2];
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "templateB",
        "description": "模版B",
        "pageMode": "module",
        "width": 300,
        "height": 500,
        "firstFocusId": "templateB_2",
        "htmlPath": "templates/templateB.html",
        "jsPath": "templates/templateB.js",
        "cssPath": "templates/templateB.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "templateB_1",
                "description": "",
                "classes": {
                    "normal": "templateB_1_normal", "focus": "templateB_1_focus"
                },
                "CaEType": "div",
                "templateSign":"TEMP",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "nav": {
                    "downTo": "templateB_3",
                    "leftTo": "AUTO",
                    "rightTo": "templateB_2"
                },
                "handler": {
                    "aftEnterHandler":"oemCommonHandler"
                }
            },
            {
                "id": "templateB_2",
                "description": "",
                "classes": {
                    "normal": "templateB_2_normal", "focus": "templateB_2_focus"
                },
                "CaEType": "div",
                "templateSign":"TEMP",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":false,
                "nav": {
                    "downTo": "templateB_3",
                    "leftTo": "templateB_1",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler":"oemCommonHandler"
                }
            },
            {
                "id": "templateB_3",
                "description": "",
                "classes": {
                    "normal": "templateB_3_normal", "focus": "templateB_3_focus"
                },
                "CaEType": "div",
                "templateSign":"TEMP",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "nav": {
                    "upTo": "templateB_1",
                    "leftTo": "AUTO",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler":"oemCommonHandler"
                }
            }
        ],
        "idList": ["templateB_1", "templateB_2","templateB_3"],//明确替换的id列表
        "dataFormat": {
            "templateB_1": {Data: "XXX"},
            "templateB_2": {Data: "XXX"},
            "templateB_3": {Data: "XXX"}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.templateB_1.Data = dat[0];
            tempData.templateB_2.Data = dat[1];
            tempData.templateB_3.Data = dat[2];
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "templateC",
        "description": "模版CgridUl测试",
        "pageMode": "module",
        "width": 1800,
        "height": 500,
        "firstFocusId": "templateGridUl",
        "htmlPath": "templates/templateC.html",
        "jsPath": "templates/templateC.js",
        "cssPath": "templates/templateC.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "templateGridUl",
                "description": "UL组合实验",
                "CaEType": "GridUl",
                "isFocus":true,
                "disable": false,
                "classes": {
                    "normal": "gridul_normal", "focus": "gridul_focus","dataSelected":"gridul_dataSelected"
                },
                "nav":{
                    "leftTo":"AUTO","rightTo":"AUTO"
                },
                "handler": {
                    "aftEnterHandler":"oemCommonHandler",
                    "befLeftHandler":"OEMAllAppBefLeftHandle"
                },
                "oriCaE": [
                    {
                        "id": "ctyName",
                        "description": "城市名称",
                        "CaEType": "span"
                    }
                ],
                "SelectedIndex": 0,
                "GridUlConfig": {
                    "GridUlDataItem": ["ctyName"],
                    "LineNum":4,
                    "PageSize":16,
                    "FlipType":'VER',
                    "ArrowFlag":true
                }
            }
        ],
        "idList": ["templateGridUl", "ctyName"],//明确替换的id列表
        "dataFormat":
        {
            "templateGridUl": {
                "Data":[{"ctyName":{"Data":"asdf"}},{"ctyName":{"Data":"ddddd"}},{"ctyName":{"Data":"ssdf"}},{"ctyName":{"Data":"vvv"}}],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.templateGridUl.Data=[];
            console.log(JSON.stringify(tempData))
            for(var i=0;i<dat.Data.length;i++){
                var tempCity={};
                var tempdd={};
                tempdd.Data=dat.Data[i];
                tempCity.ctyName=tempdd;
                tempData.templateGridUl.Data.push(tempCity);
            }
            tempData.templateGridUl.SelectedIndex= dat.SelectedIndex;
            tempData.templateGridUl.DataSelectedIndex=dat.DataSelectedIndex;
            console.log(JSON.stringify(tempData))
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1001",
        "description": "模版1001",
        "pageMode": "module",
        "width": 615,//570
        "height": 807,
        "firstFocusId": "template1001_1",
        "htmlPath": "templates/template1001.html",
        "jsPath": "templates/template1001.js",
        "cssPath": "templates/template1001.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1001_title",
                "description": "标题",
                "classes": {
                    "normal": "template1001_title_1", "focus": "template1001_title_1"
                },
                "CaEType": "span"
            },
            {
                "id": "template1001_1",
                "description": "",
                "classes": {
                    "normal": "template1001_1_normal", "focus": "template1001_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1001",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,542,732],//L,T,W,H
        "nav": {
                    "downTo": "",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
                "CaE":[
                    {
                        "id": "template1001_img",
                        "description": "",
                        "classes": {
                            "normal": "template1001_img_1", "focus": "template1001_img_1"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1001_txt",
                        "description": "",
                        "classes": {
                            "normal": "template1001_txt_1", "focus": "template1001_txt_1"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            }
        ],
        "idList": ["template1001_title","template1001_1","template1001_img","template1001_txt"],//明确替换的id列表
        "dataFormat": {
            "template1001_title":{ Data: "XXX"},
            "template1001_1": {
                Data: {
                    "template1001_img":{Data: "XXX"},
                    "template1001_txt":{ Data:"XXX"}
                }
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.template1001_title.Data = dat.title;
            tempData.template1001_1.Data.template1001_img.Data = dat.imgs[0];
            tempData.template1001_1.Data.template1001_txt.Data = dat.title;
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1002",
        "description": "模版1002",
        "pageMode": "module",
        "width": 771,//726
        "height": 807,
        "firstFocusId": "template1002_1",
        "htmlPath": "templates/template1002.html",
//            "jsPath": "templates/template1002.js",
        "cssPath": "templates/template1002.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1002_title",
                "description": "标题",
                "classes": {
                    "normal": "template1002_title_2", "focus": "template1002_title_2"
                },
                "CaEType": "span"
            },
            {
                "id": "template1002_1",
                "description": "",
                "classes": {
                    "normal": "template1002_1_normal", "focus": "template1002_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1002",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,726,240],//L,T,W,H
                "nav": {
                    "downTo": "template1002_2",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1002_img1",
                        "description": "",
                        "classes": {
                            "normal": "template1002_1_img", "focus": "template1002_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1002_txt1",
                        "description": "",
                        "classes": {
                            "normal": "template1002_1_txt", "focus": "template1002_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1002_2",
                "description": "",
                "classes": {
                    "normal": "template1002_2_normal", "focus": "template1002_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1002",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,-246,360,486],//L,T,W,H
                "nav": {
                    "upTo": "template1002_1",
                    "rightTo": "template1002_3",
                    "leftTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1002_img2",
                        "description": "",
                        "classes": {
                            "normal": "template1002_2_img", "focus": "template1002_2_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1002_txt2",
                        "description": "",
                        "classes": {
                            "normal": "template1002_2_txt", "focus": "template1002_2_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1002_3",
                "description": "",
                "classes": {
                    "normal": "template1002_3_normal", "focus": "template1002_3_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1002",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[366,-246,360,486],//L,T,W,H
                "nav": {
                    "upTo": "template1002_1",
                    "leftTo": "template1002_2",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1002_img3",
                        "description": "",
                        "classes": {
                            "normal": "template1002_3_img", "focus": "template1002_3_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1002_txt3",
                        "description": "",
                        "classes": {
                            "normal": "template1002_3_txt", "focus": "template1002_3_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            }
        ],
        "idList": ["template1002_title","template1002_1", "template1002_img1","template1002_txt1","template1002_2","template1002_img2","template1002_txt2","template1002_3","template1002_img3","template1002_txt3"],//明确替换的id列表
        "dataFormat": {
            "template1002_title":{Data: "XXX"},
            "template1002_1": {Data: {
                "template1002_img1": {Data: "XXX"},
                "template1002_txt1": {Data: "XXX"}
            }
            },
            "template1002_2": {Data: {
                "template1002_img2": {Data: "XXX"},
                "template1002_txt2": {Data: "XXX"}
            }
            },
            "template1002_3": {Data: {
                "template1002_img3": {Data: "XXX"},
                "template1002_txt3": {Data: "XXX"}
            }
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.template1002_title.Data =dat.title;
            tempData.template1002_1.Data.template1002_img1.Data = dat.imgs[0];
            tempData.template1002_1.Data.template1002_txt1.Data = dat.txts[0];
            tempData.template1002_2.Data.template1002_img2.Data = dat.imgs[1];
            tempData.template1002_2.Data.template1002_txt2.Data = dat.txts[1];
            tempData.template1002_3.Data.template1002_img3.Data = dat.imgs[2];
            tempData.template1002_3.Data.template1002_txt3.Data = dat.txts[2];
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1003",
        "description": "模版1003",
        "pageMode": "module",
        "width": 1319,//1274
        "height": 807,
        "firstFocusId": "template1003_1",
        "htmlPath": "templates/template1003.html",
//            "jsPath": "templates/template1002.js",
        "cssPath": "templates/template1003.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1003_title",
                "description": "标题",
                "classes": {
                    "normal": "template1003_title_3", "focus": "template1003_title_3"
                },
                "CaEType": "span"
            },
            {
                "id": "template1003_1",
                "description": "",
                "classes": {
                    "normal": "template1003_1_normal", "focus": "template1003_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1003",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,726,240],//L,T,W,H
                "nav": {
                    "downTo": "template1003_2",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "template1003_4"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1003_img1",
                        "description": "",
                        "classes": {
                            "normal": "template1003_1_img", "focus": "template1003_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1003_txt1",
                        "description": "",
                        "classes": {
                            "normal": "template1003_1_txt", "focus": "template1003_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1003_2",
                "description": "",
                "classes": {
                    "normal": "template1003_2_normal", "focus": "template1003_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1003",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,-246,360,486],//L,T,W,H
                "nav": {
                    "upTo": "template1003_1",
                    "rightTo": "template1003_3",
                    "leftTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1003_img2",
                        "description": "",
                        "classes": {
                            "normal": "template1003_2_img", "focus": "template1003_2_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1003_txt2",
                        "description": "",
                        "classes": {
                            "normal": "template1003_2_txt", "focus": "template1003_2_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1003_3",
                "description": "",
                "classes": {
                    "normal": "template1003_3_normal", "focus": "template1003_3_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1003",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[366,-246,360,486],//L,T,W,H
                "nav": {
                    "upTo": "template1003_1",
                    "leftTo": "template1003_2",
                    "rightTo": "template1003_4"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1003_img3",
                        "description": "",
                        "classes": {
                            "normal": "template1003_3_img", "focus": "template1003_3_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1003_txt3",
                        "description": "",
                        "classes": {
                            "normal": "template1003_3_txt", "focus": "template1003_3_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1003_4",
                "description": "",
                "classes": {
                    "normal": "template1003_4_normal", "focus": "template1003_4_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1003",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[732,0,542,732],//L,T,W,H
                "nav": {
                    "upTo": "",
                    "leftTo": "template1003_1",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1003_img4",
                        "description": "",
                        "classes": {
                            "normal": "template1003_4_img", "focus": "template1003_4_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1003_txt4",
                        "description": "",
                        "classes": {
                            "normal": "template1003_4_txt", "focus": "template1003_4_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            }
        ],
        "idList": ["template1003_title","template1003_1", "template1003_img1","template1003_txt1","template1003_2", "template1003_img2","template1003_txt2","template1003_3", "template1003_img3","template1003_txt3","template1003_4", "template1003_img4","template1003_txt4"],//明确替换的id列表
        "dataFormat": {
            "template1003_title":{ Data: "XXX"},
            "template1003_1": {Data: {
                "template1003_img1": {Data: "XXX"},
                "template1003_txt1": {Data: "XXX"}
            }
            },
            "template1003_2": {Data: {
                "template1003_img2": {Data: "XXX"},
                "template1003_txt2": {Data: "XXX"}
            }
            },
            "template1003_3": {Data: {
                "template1003_img3": {Data: "XXX"},
                "template1003_txt3": {Data: "XXX"}
            }
            },
            "template1003_4": {Data: {
                "template1003_img4": {Data: "XXX"},
                "template1003_txt4": {Data: "XXX"}
            }
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.template1003_title.Data = dat.title;
            tempData.template1003_1.Data.template1003_img1.Data = dat.imgs[0];
            tempData.template1003_1.Data.template1003_txt1.Data = dat.txts[0];
            tempData.template1003_2.Data.template1003_img2.Data = dat.imgs[2];
            tempData.template1003_2.Data.template1003_txt2.Data = dat.txts[2];
            tempData.template1003_3.Data.template1003_img3.Data = dat.imgs[3];
            tempData.template1003_3.Data.template1003_txt3.Data = dat.txts[3];
            tempData.template1003_4.Data.template1003_img4.Data = dat.imgs[1];
            tempData.template1003_4.Data.template1003_txt4.Data = dat.txts[1];
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1004",
        "description": "模版1004",
        "pageMode": "module",
        "width": 771,//726
        "height": 807,
        "firstFocusId": "template1004_1",
        "htmlPath": "templates/template1004.html",
//            "jsPath": "templates/template1002.js",
        "cssPath": "templates/template1004.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1004_title",
                "description": "标题",
                "classes": {
                    "normal": "template1004_title_4", "focus": "template1004_title_4"
                },
                "CaEType": "span"
            },
            {
                "id": "template1004_1",
                "description": "",
                "classes": {
                    "normal": "template1004_1_normal", "focus": "template1004_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1004",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "template1004_3",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "template1004_2"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1004_img1",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_img", "focus": "template1004_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1004_txt1",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_txt", "focus": "template1004_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1004_2",
                "description": "",
                "classes": {
                    "normal": "template1004_2_normal", "focus": "template1004_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1004",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "template1004_4",
                    "rightTo": "AUTO",
                    "leftTo": "template1004_1"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1004_img2",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_img", "focus": "template1004_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1004_txt2",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_txt", "focus": "template1004_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1004_3",
                "description": "",
                "classes": {
                    "normal": "template1004_1_normal", "focus": "template1004_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1004",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1004_1",
                    "downTo": "template1004_5",
                    "leftTo": "AUTO",
                    "rightTo": "template1004_4"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1004_img3",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_img", "focus": "template1004_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1004_txt3",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_txt", "focus": "template1004_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1004_4",
                "description": "",
                "classes": {
                    "normal": "template1004_2_normal", "focus": "template1004_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1004",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[366,-246,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1004_2",
                    "downTo": "template1004_6",
                    "leftTo": "template1004_3",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1004_img4",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_img", "focus": "template1004_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1004_txt4",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_txt", "focus": "template1004_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1004_5",
                "description": "",
                "classes": {
                    "normal": "template1004_1_normal", "focus": "template1004_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1004",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1004_3",
                    "leftTo": "AUTO",
                    "rightTo": "template1004_6"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1004_img5",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_img", "focus": "template1004_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1004_txt5",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_txt", "focus": "template1004_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1004_6",
                "description": "",
                "classes": {
                    "normal": "template1004_2_normal", "focus": "template1004_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1004",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[366,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1004_4",
                    "leftTo": "template1004_5",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1004_img6",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_img", "focus": "template1004_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1004_txt6",
                        "description": "",
                        "classes": {
                            "normal": "template1004_1_txt", "focus": "template1004_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            }
        ],
        "idList": ["template1004_title","template1004_1","template1004_img1","template1004_txt1",
            "template1004_2","template1004_img2","template1004_txt2",
            "template1004_3","template1004_img3","template1004_txt3",
            "template1004_4","template1004_img4","template1004_txt4",
            "template1004_5","template1004_img5","template1004_txt5",
            "template1004_6","template1004_img6","template1004_txt6"],//明确替换的id列表
        "dataFormat": {
            "template1004_title": {Data: "XXX"},
            "template1004_1": {Data: {
                "template1004_img1": {Data: "XXX"},
                "template1004_txt1": {Data: "XXX"}
            }
            },
            "template1004_2": {Data: {
                "template1004_img2": {Data: "XXX"},
                "template1004_txt2": {Data: "XXX"}
            }
            },
            "template1004_3": {Data: {
                "template1004_img3": {Data: "XXX"},
                "template1004_txt3": {Data: "XXX"}
            }
            },
            "template1004_4": {Data: {
                "template1004_img4": {Data: "XXX"},
                "template1004_txt4": {Data: "XXX"}
            }
            },
            "template1004_5": {Data: {
                "template1004_img5": {Data: "XXX"},
                "template1004_txt5": {Data: "XXX"}
            }
            },
            "template1004_6": {Data: {
                "template1004_img6": {Data: "XXX"},
                "template1004_txt6": {Data: "XXX"}
            }
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.template1004_title.Data = dat.title;
            tempData.template1004_1.Data.template1004_img1.Data = dat.imgs[0];
            tempData.template1004_1.Data.template1004_txt1.Data = dat.txts[0];
            tempData.template1004_2.Data.template1004_img2.Data = dat.imgs[1];
            tempData.template1004_2.Data.template1004_txt2.Data = dat.txts[1];
            tempData.template1004_3.Data.template1004_img3.Data = dat.imgs[2];
            tempData.template1004_3.Data.template1004_txt3.Data = dat.txts[2];
            tempData.template1004_4.Data.template1004_img4.Data = dat.imgs[3];
            tempData.template1004_4.Data.template1004_txt4.Data = dat.txts[3];
            tempData.template1004_5.Data.template1004_img5.Data = dat.imgs[4];
            tempData.template1004_5.Data.template1004_txt5.Data = dat.txts[4];
            tempData.template1004_6.Data.template1004_img6.Data = dat.imgs[5];
            tempData.template1004_6.Data.template1004_txt6.Data = dat.txts[5];
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1014",
        "description": "模版1014",
        "pageMode": "module",
        "width": 903,//858
        "height": 807,
        "firstFocusId": "template1014_1",
        "htmlPath": "templates/template1014.html",
        "cssPath": "templates/template1014.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1014_title",
                "description": "标题",
                "classes": {
                    "normal": "template1014_title_14", "focus": "template1014_title_14"
                },
                "CaEType": "span"
            },
            {
                "id": "template1014_1",
                "description": "",
                "classes": {
                    "normal": "template1014_1_normal", "focus": "template1014_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1014",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,426,240],//L,T,W,H
                "nav": {
                    "downTo": "template1014_3",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "template1014_2"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1014_img1",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_img", "focus": "template1014_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1014_txt1",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_txt", "focus": "template1014_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1014_2",
                "description": "",
                "classes": {
                    "normal": "template1014_2_normal", "focus": "template1014_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1014",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[432,0,426,240],//L,T,W,H
                "nav": {
                    "downTo": "template1014_4",
                    "rightTo": "AUTO",
                    "leftTo": "template1014_1"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1014_img2",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_img", "focus": "template1014_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1014_txt2",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_txt", "focus": "template1014_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1014_3",
                "description": "",
                "classes": {
                    "normal": "template1014_1_normal", "focus": "template1014_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1014",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,-246,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1014_1",
                    "downTo": "template1014_5",
                    "leftTo": "AUTO",
                    "rightTo": "template1014_4"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1014_img3",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_img", "focus": "template1014_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1014_txt3",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_txt", "focus": "template1014_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1014_4",
                "description": "",
                "classes": {
                    "normal": "template1014_2_normal", "focus": "template1014_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1014",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[432,-246,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1014_2",
                    "downTo": "template1014_6",
                    "leftTo": "template1014_3",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1014_img4",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_img", "focus": "template1014_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1014_txt4",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_txt", "focus": "template1014_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1014_5",
                "description": "",
                "classes": {
                    "normal": "template1014_1_normal", "focus": "template1014_1_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1014",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1014_3",
                    "leftTo": "AUTO",
                    "rightTo": "template1014_6"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1014_img5",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_img", "focus": "template1014_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1014_txt5",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_txt", "focus": "template1014_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            },
            {
                "id": "template1014_6",
                "description": "",
                "classes": {
                    "normal": "template1014_2_normal", "focus": "template1014_2_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1014",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[432,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1014_4",
                    "leftTo": "template1014_5",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id": "template1014_img6",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_img", "focus": "template1014_1_img"
                        },
                        "CaEType": "img",
                        "nav": {
                        }
                    },
                    {
                        "id": "template1014_txt6",
                        "description": "",
                        "classes": {
                            "normal": "template1014_1_txt", "focus": "template1014_1_txt"
                        },
                        "CaEType": "span",
                        "nav": {
                        }
                    }
                ]
            }
        ],
        "idList": ["template1014_title","template1014_1","template1014_img1","template1014_txt1",
            "template1014_2","template1014_img2","template1014_txt2",
            "template1014_3","template1014_img3","template1014_txt3",
            "template1014_4","template1014_img4","template1014_txt4",
            "template1014_5","template1014_img5","template1014_txt5",
            "template1014_6","template1014_img6","template1014_txt6"],//明确替换的id列表
        "dataFormat": {
            "template1014_title":{Data: "XXX"},
            "template1014_1": {Data: {
                "template1014_img1": {Data: "XXX"},
                "template1014_txt1": {Data: "XXX"}
            }
            },
            "template1014_2": {Data: {
                "template1014_img2": {Data: "XXX"},
                "template1014_txt2": {Data: "XXX"}
            }
            },
            "template1014_3": {Data: {
                "template1014_img3": {Data: "XXX"},
                "template1014_txt3": {Data: "XXX"}
            }
            },
            "template1014_4": {Data: {
                "template1014_img4": {Data: "XXX"},
                "template1014_txt4": {Data: "XXX"}
            }
            },
            "template1014_5": {Data: {
                "template1014_img5": {Data: "XXX"},
                "template1014_txt5": {Data: "XXX"}
            }
            },
            "template1014_6": {Data: {
                "template1014_img6": {Data: "XXX"},
                "template1014_txt6": {Data: "XXX"}
            }
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat)
            tempData.template1014_title.Data = dat.title;
            tempData.template1014_1.Data.template1014_img1.Data = dat.imgs[0];
            tempData.template1014_1.Data.template1014_txt1.Data = dat.txts[0];
            tempData.template1014_2.Data.template1014_img2.Data = dat.imgs[1];
            tempData.template1014_2.Data.template1014_txt2.Data = dat.txts[1];
            tempData.template1014_3.Data.template1014_img3.Data = dat.imgs[2];
            tempData.template1014_3.Data.template1014_txt3.Data = dat.txts[2];
            tempData.template1014_4.Data.template1014_img4.Data = dat.imgs[3];
            tempData.template1014_4.Data.template1014_txt4.Data = dat.txts[3];
            tempData.template1014_5.Data.template1014_img5.Data = dat.imgs[4];
            tempData.template1014_5.Data.template1014_txt5.Data = dat.txts[4];
            tempData.template1014_6.Data.template1014_img6.Data = dat.imgs[5];
            tempData.template1014_6.Data.template1014_txt6.Data = dat.txts[5];
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1005",
        "description": "模版1005",
        "pageMode": "module",
        "width": 1137,//1092
        "height": 807,
        "firstFocusId": "template1005_1",
        "htmlPath": "templates/template1005.html",
        "jsPath": "templates/template1005.js",
        "cssPath": "templates/template1005.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1005_title_text",
                "classes": {
                    "normal": "template1005_title_text_normal", "focus": "template1005_title_text_normal"
                },
                "CaEType": "span"
            },
            {
                "id": "template1005_1",
                "description": "",
                "classes": {
                    "normal": "template1005_small_unfocus", "focus": "template1005_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1005",
                "isFocus":true,
	            "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "leftTo": "AUTO",
                    "rightTo": "template1005_3",
                    "downTo": "template1005_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1005_1_img",
                        "classes": {
                            "normal": "template1005_img_small", "focus": "template1005_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1005_1_txt",
                        "classes": {
                            "normal": "template1005_txt_small", "focus": "template1005_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1005_2",
                "description": "",
                "classes": {
                    "normal": "template1005_big_unfocus", "focus": "template1005_big_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1005",
                "isFocus":true,
	            "position":[366,-246,726,486],//L,T,W,H
                "nav": {
                    "upTo": "template1005_3",
                    "rightTo": "AUTO",
                    "leftTo": "template1005_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1005_2_img",
                        "classes": {
                            "normal": "template1005_img_big", "focus": "template1005_img_big"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1005_2_txt",
                        "classes": {
                            "normal": "template1005_txt_big", "focus": "template1005_txt_big"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1005_3",
                "description": "",
                "classes": {
                    "normal": "template1005_small_unfocus", "focus": "template1005_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1005",
                "isFocus": true,
	            "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "leftTo": "template1005_1",
                    "rightTo": "template1005_4",
                    "downTo": "template1005_2"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1005_3_img",
                        "classes": {
                            "normal": "template1005_img_small", "focus": "template1005_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1005_3_txt",
                        "classes": {
                            "normal": "template1005_txt_small", "focus": "template1005_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1005_4",
                "description": "",
                "classes": {
                    "normal": "template1005_small_unfocus", "focus": "template1005_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1005",
                "isFocus":true,
	            "position":[732,0,360,240],//L,T,W,H
                "nav": {
                    "leftTo": "template1005_3",
                    "rightTo": "AUTO",
                    "downTo": "template1005_2"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1005_4_img",
                        "classes": {
                            "normal": "template1005_img_small", "focus": "template1005_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1005_4_txt",
                        "classes": {
                            "normal": "template1005_txt_small", "focus": "template1005_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1005_5",
                "description": "",
                "classes": {
                    "normal": "template1005_small_unfocus", "focus": "template1005_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1005",
                "isFocus":true,
	            "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1005_1",
                    "leftTo": "AUTO",
                    "rightTo": "template1005_2",
                    "downTo": "template1005_6"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1005_5_img",
                        "classes": {
                            "normal": "template1005_img_small", "focus": "template1005_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1005_5_txt",
                        "classes": {
                            "normal": "template1005_txt_small", "focus": "template1005_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1005_6",
                "description": "",
                "classes": {
                    "normal": "template1005_small_unfocus", "focus": "template1005_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1005",
                "isFocus":true,
	            "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1005_5",
                    "leftTo": "AUTO",
                    "rightTo": "template1005_2"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1005_6_img",
                        "classes": {
                            "normal": "template1005_img_small", "focus": "template1005_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1005_6_txt",
                        "classes": {
                            "normal": "template1005_txt_small", "focus": "template1005_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            }
        ],
        "idList": [ "template1005_title_text",
            "template1005_1",
            "template1005_1_img",
            "template1005_1_txt",
            "template1005_2",
            "template1005_2_img",
            "template1005_2_txt",
            "template1005_3",
            "template1005_3_img",
            "template1005_3_txt",
            "template1005_4",
            "template1005_4_img",
            "template1005_4_txt",
            "template1005_5",
            "template1005_5_img",
            "template1005_5_txt",
            "template1005_6",
            "template1005_6_img",
            "template1005_6_txt"
        ],//明确替换的id列表
        "dataFormat": {
            "template1005_title_text": {Data: "XXX"},
            "template1005_1": {Data: {"template1005_1_img": {Data: "XXX"},"template1005_1_txt": {Data: "XXX"}}},
            "template1005_2": {Data: {"template1005_2_img": {Data: "XXX"},"template1005_2_txt": {Data: "XXX"}}},
            "template1005_3": {Data: {"template1005_3_img": {Data: "XXX"},"template1005_3_txt": {Data: "XXX"}}},
            "template1005_4": {Data: {"template1005_4_img": {Data: "XXX"},"template1005_4_txt": {Data: "XXX"}}},
            "template1005_5": {Data: {"template1005_5_img": {Data: "XXX"},"template1005_5_txt": {Data: "XXX"}}},
            "template1005_6": {Data: {"template1005_6_img": {Data: "XXX"},"template1005_6_txt": {Data: "XXX"}}}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);

            tempData.template1005_title_text.Data = dat.title;
            for(var i = 0; i < dat.imgs.length; ++i) {
                var tmp = "template1005_" + (i+1);
                tempData[tmp].Data[tmp + "_img"].Data = dat.imgs[i];
                tempData[tmp].Data[tmp + "_txt"].Data = dat.txts[i];
            }

            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1015",
        "description": "模版1015",
        "pageMode": "module",
        "width": 1335,//1290
        "height": 807,
        "firstFocusId": "template1015_1",
        "htmlPath": "templates/template1015.html",
        "jsPath": "templates/template1015.js",
        "cssPath": "templates/template1015.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1015_title_text",
                "classes": {
                    "normal": "template1015_title_text_normal", "focus": "template1015_title_text_normal"
                },
                "CaEType": "span"
            },
            {
                "id": "template1015_1",
                "description": "",
                "classes": {
                    "normal": "template1015_small_unfocus", "focus": "template1015_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1015",
                "isFocus":true,
	            "position":[0,0,426,240],//L,T,W,H
                "nav": {
                    "leftTo": "AUTO",
                    "rightTo": "template1015_3",
                    "downTo": "template1015_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1015_1_img",
                        "classes": {
                            "normal": "template1015_img_small", "focus": "template1015_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1015_1_txt",
                        "classes": {
                            "normal": "template1015_txt_small", "focus": "template1015_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1015_2",
                "description": "",
                "classes": {
                    "normal": "template1015_big_unfocus", "focus": "template1015_big_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1015",
                "isFocus":true,
	            "position":[432,-246,858,486],//L,T,W,H
                "nav": {
                    "upTo": "template1015_3",
                    "rightTo": "AUTO",
                    "leftTo": "template1015_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1015_2_img",
                        "classes": {
                            "normal": "template1015_img_big", "focus": "template1015_img_big"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1015_2_txt",
                        "classes": {
                            "normal": "template1015_txt_big", "focus": "template1015_txt_big"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1015_3",
                "description": "",
                "classes": {
                    "normal": "template1015_small_unfocus", "focus": "template1015_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1015",
                "isFocus": true,
	            "position":[432,0,426,240],//L,T,W,H
                "nav": {
                    "leftTo": "template1015_1",
                    "rightTo": "template1015_4",
                    "downTo": "template1015_2"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1015_3_img",
                        "classes": {
                            "normal": "template1015_img_small", "focus": "template1015_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1015_3_txt",
                        "classes": {
                            "normal": "template1015_txt_small", "focus": "template1015_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1015_4",
                "description": "",
                "classes": {
                    "normal": "template1015_small_unfocus", "focus": "template1015_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1015",
                "isFocus":true,
	            "position":[864,0,426,240],//L,T,W,H
                "nav": {
                    "leftTo": "template1015_3",
                    "rightTo": "AUTO",
                    "downTo": "template1015_2"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1015_4_img",
                        "classes": {
                            "normal": "template1015_img_small", "focus": "template1015_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1015_4_txt",
                        "classes": {
                            "normal": "template1015_txt_small", "focus": "template1015_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1015_5",
                "description": "",
                "classes": {
                    "normal": "template1015_small_unfocus", "focus": "template1015_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1015",
                "isFocus":true,
	            "position":[0,-246,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1015_1",
                    "leftTo": "AUTO",
                    "rightTo": "template1015_2",
                    "downTo": "template1015_6"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1015_5_img",
                        "classes": {
                            "normal": "template1015_img_small", "focus": "template1015_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1015_5_txt",
                        "classes": {
                            "normal": "template1015_txt_small", "focus": "template1015_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1015_6",
                "description": "",
                "classes": {
                    "normal": "template1015_small_unfocus", "focus": "template1015_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1015",
                "isFocus":true,
	            "position":[0,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1015_5",
                    "leftTo": "AUTO",
                    "rightTo": "template1015_2"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1015_6_img",
                        "classes": {
                            "normal": "template1015_img_small", "focus": "template1015_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1015_6_txt",
                        "classes": {
                            "normal": "template1015_txt_small", "focus": "template1015_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            }
        ],
        "idList": [ "template1015_title_text",
            "template1015_1",
            "template1015_1_img",
            "template1015_1_txt",
            "template1015_2",
            "template1015_2_img",
            "template1015_2_txt",
            "template1015_3",
            "template1015_3_img",
            "template1015_3_txt",
            "template1015_4",
            "template1015_4_img",
            "template1015_4_txt",
            "template1015_5",
            "template1015_5_img",
            "template1015_5_txt",
            "template1015_6",
            "template1015_6_img",
            "template1015_6_txt"
        ],//明确替换的id列表
        "dataFormat": {
            "template1015_title_text": {Data: "XXX"},
            "template1015_1": {Data: {"template1015_1_img": {Data: "XXX"},"template1015_1_txt": {Data: "XXX"}}},
            "template1015_2": {Data: {"template1015_2_img": {Data: "XXX"},"template1015_2_txt": {Data: "XXX"}}},
            "template1015_3": {Data: {"template1015_3_img": {Data: "XXX"},"template1015_3_txt": {Data: "XXX"}}},
            "template1015_4": {Data: {"template1015_4_img": {Data: "XXX"},"template1015_4_txt": {Data: "XXX"}}},
            "template1015_5": {Data: {"template1015_5_img": {Data: "XXX"},"template1015_5_txt": {Data: "XXX"}}},
            "template1015_6": {Data: {"template1015_6_img": {Data: "XXX"},"template1015_6_txt": {Data: "XXX"}}}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);

            tempData.template1015_title_text.Data = dat.title;
            for(var i = 0; i < dat.imgs.length; ++i) {
                var tmp = "template1015_" + (i+1);
                tempData[tmp].Data[tmp + "_img"].Data = dat.imgs[i];
                tempData[tmp].Data[tmp + "_txt"].Data = dat.txts[i];
            }

            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1006",
        "description": "模版1006",
        "pageMode": "module",
        "width": 1137,//1092
        "height": 807,
        "firstFocusId": "template1006_1",
        "htmlPath": "templates/template1006.html",
        "jsPath": "templates/template1006.js",
        "cssPath": "templates/template1006.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1006_title_text",
                "classes": {
                    "normal": "template1006_title_text_normal", "focus": "template1006_title_text_normal"
                },
                "CaEType": "span"
            },
            {
                "id": "template1006_1",
                "description": "",
                "classes": {
                    "normal": "template1006_small_unfocus", "focus": "template1006_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1006",
                "isFocus":true,
	            "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "leftTo": "AUTO",
                    "rightTo": "template1006_2",
                    "downTo": "template1006_3"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1006_1_img",
                        "classes": {
                            "normal": "template1006_img_small", "focus": "template1006_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1006_1_txt",
                        "classes": {
                            "normal": "template1006_txt_small", "focus": "template1006_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1006_2",
                "description": "",
                "classes": {
                    "normal": "template1006_big_unfocus", "focus": "template1006_big_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1006",
                "isFocus":true,
	            "position":[366,0,726,486],//L,T,W,H
                "nav": {
                    "rightTo": "AUTO",
                    "leftTo": "template1006_1",
                    "downTo": "template1006_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1006_2_img",
                        "classes": {
                            "normal": "template1006_img_big", "focus": "template1006_img_big"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1006_2_txt",
                        "classes": {
                            "normal": "template1006_txt_big", "focus": "template1006_txt_big"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1006_3",
                "description": "",
                "classes": {
                    "normal": "template1006_small_unfocus", "focus": "template1006_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1006",
                "isFocus": true,
	            "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1006_1",
                    "leftTo": "AUTO",
                    "rightTo": "template1006_2",
                    "downTo": "template1006_4"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1006_3_img",
                        "classes": {
                            "normal": "template1006_img_small", "focus": "template1006_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1006_3_txt",
                        "classes": {
                            "normal": "template1006_txt_small", "focus": "template1006_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1006_4",
                "description": "",
                "classes": {
                    "normal": "template1006_small_unfocus", "focus": "template1006_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1006",
                "isFocus":true,
	            "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1006_3",
                    "leftTo": "AUTO",
                    "rightTo": "template1006_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1006_4_img",
                        "classes": {
                            "normal": "template1006_img_small", "focus": "template1006_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1006_4_txt",
                        "classes": {
                            "normal": "template1006_txt_small", "focus": "template1006_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1006_5",
                "description": "",
                "classes": {
                    "normal": "template1006_small_unfocus", "focus": "template1006_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1006",
                "isFocus":true,
	            "position":[366,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1006_2",
                    "leftTo": "template1006_4",
                    "rightTo": "template1006_6"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1006_5_img",
                        "classes": {
                            "normal": "template1006_img_small", "focus": "template1006_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1006_5_txt",
                        "classes": {
                            "normal": "template1006_txt_small", "focus": "template1006_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1006_6",
                "description": "",
                "classes": {
                    "normal": "template1006_small_unfocus", "focus": "template1006_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1006",
                "isFocus":true,
	            "position":[732,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1006_2",
                    "leftTo": "template1006_5",
                    "rightTo": "AUTO"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1006_6_img",
                        "classes": {
                            "normal": "template1006_img_small", "focus": "template1006_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1006_6_txt",
                        "classes": {
                            "normal": "template1006_txt_small", "focus": "template1006_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            }
        ],
        "idList": [ "template1006_title_text",
            "template1006_1",
            "template1006_1_img",
            "template1006_1_txt",
            "template1006_2",
            "template1006_2_img",
            "template1006_2_txt",
            "template1006_3",
            "template1006_3_img",
            "template1006_3_txt",
            "template1006_4",
            "template1006_4_img",
            "template1006_4_txt",
            "template1006_5",
            "template1006_5_img",
            "template1006_5_txt",
            "template1006_6",
            "template1006_6_img",
            "template1006_6_txt"
        ],//明确替换的id列表
        "dataFormat": {
            "template1006_title_text": {Data: "XXX"},
            "template1006_1": {Data: {"template1006_1_img": {Data: "XXX"},"template1006_1_txt": {Data: "XXX"}}},
            "template1006_2": {Data: {"template1006_2_img": {Data: "XXX"},"template1006_2_txt": {Data: "XXX"}}},
            "template1006_3": {Data: {"template1006_3_img": {Data: "XXX"},"template1006_3_txt": {Data: "XXX"}}},
            "template1006_4": {Data: {"template1006_4_img": {Data: "XXX"},"template1006_4_txt": {Data: "XXX"}}},
            "template1006_5": {Data: {"template1006_5_img": {Data: "XXX"},"template1006_5_txt": {Data: "XXX"}}},
            "template1006_6": {Data: {"template1006_6_img": {Data: "XXX"},"template1006_6_txt": {Data: "XXX"}}}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);

            tempData.template1006_title_text.Data = dat.title;
            for(var i = 0; i < dat.imgs.length; ++i) {
                var tmp = "template1006_" + (i+1);
                tempData[tmp].Data[tmp + "_img"].Data = dat.imgs[i];
                tempData[tmp].Data[tmp + "_txt"].Data = dat.txts[i];
            }

            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1016",
        "description": "模版1006",
        "pageMode": "module",
        "width": 1335,//1290
        "height": 807,
        "firstFocusId": "template1016_1",
        "htmlPath": "templates/template1016.html",
        "jsPath": "templates/template1016.js",
        "cssPath": "templates/template1016.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1016_title_text",
                "classes": {
                    "normal": "template1016_title_text_normal", "focus": "template1016_title_text_normal"
                },
                "CaEType": "span"
            },
            {
                "id": "template1016_1",
                "description": "",
                "classes": {
                    "normal": "template1016_small_unfocus", "focus": "template1016_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1016",
                "isFocus":true,
	            "position":[0,0,426,240],//L,T,W,H
                "nav": {
                    "leftTo": "AUTO",
                    "rightTo": "template1016_2",
                    "downTo": "template1016_3"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1016_1_img",
                        "classes": {
                            "normal": "template1016_img_small", "focus": "template1016_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1016_1_txt",
                        "classes": {
                            "normal": "template1016_txt_small", "focus": "template1016_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1016_2",
                "description": "",
                "classes": {
                    "normal": "template1016_big_unfocus", "focus": "template1016_big_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1016",
                "isFocus":true,
	            "position":[432,0,858,486],//L,T,W,H
                "nav": {
                    "rightTo": "AUTO",
                    "leftTo": "template1016_1",
                    "downTo": "template1016_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1016_2_img",
                        "classes": {
                            "normal": "template1016_img_big", "focus": "template1016_img_big"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1016_2_txt",
                        "classes": {
                            "normal": "template1016_txt_big", "focus": "template1016_txt_big"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1016_3",
                "description": "",
                "classes": {
                    "normal": "template1016_small_unfocus", "focus": "template1016_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1016",
                "isFocus": true,
	            "position":[0,-246,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1016_1",
                    "leftTo": "AUTO",
                    "rightTo": "template1016_2",
                    "downTo": "template1016_4"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1016_3_img",
                        "classes": {
                            "normal": "template1016_img_small", "focus": "template1016_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1016_3_txt",
                        "classes": {
                            "normal": "template1016_txt_small", "focus": "template1016_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1016_4",
                "description": "",
                "classes": {
                    "normal": "template1016_small_unfocus", "focus": "template1016_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1016",
                "isFocus":true,
	            "position":[0,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1016_3",
                    "leftTo": "AUTO",
                    "rightTo": "template1016_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1016_4_img",
                        "classes": {
                            "normal": "template1016_img_small", "focus": "template1016_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1016_4_txt",
                        "classes": {
                            "normal": "template1016_txt_small", "focus": "template1016_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1016_5",
                "description": "",
                "classes": {
                    "normal": "template1016_small_unfocus", "focus": "template1016_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1016",
                "isFocus":true,
	            "position":[432,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1016_2",
                    "leftTo": "template1016_4",
                    "rightTo": "template1016_6"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1016_5_img",
                        "classes": {
                            "normal": "template1016_img_small", "focus": "template1016_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1016_5_txt",
                        "classes": {
                            "normal": "template1016_txt_small", "focus": "template1016_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1016_6",
                "description": "",
                "classes": {
                    "normal": "template1016_small_unfocus", "focus": "template1016_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1016",
                "isFocus":true,
	            "position":[864,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1016_2",
                    "leftTo": "template1016_5",
                    "rightTo": "AUTO"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1016_6_img",
                        "classes": {
                            "normal": "template1016_img_small", "focus": "template1016_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1016_6_txt",
                        "classes": {
                            "normal": "template1016_txt_small", "focus": "template1016_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            }
        ],
        "idList": [ "template1016_title_text",
            "template1016_1",
            "template1016_1_img",
            "template1016_1_txt",
            "template1016_2",
            "template1016_2_img",
            "template1016_2_txt",
            "template1016_3",
            "template1016_3_img",
            "template1016_3_txt",
            "template1016_4",
            "template1016_4_img",
            "template1016_4_txt",
            "template1016_5",
            "template1016_5_img",
            "template1016_5_txt",
            "template1016_6",
            "template1016_6_img",
            "template1016_6_txt"
        ],//明确替换的id列表
        "dataFormat": {
            "template1016_title_text": {Data: "XXX"},
            "template1016_1": {Data: {"template1016_1_img": {Data: "XXX"},"template1016_1_txt": {Data: "XXX"}}},
            "template1016_2": {Data: {"template1016_2_img": {Data: "XXX"},"template1016_2_txt": {Data: "XXX"}}},
            "template1016_3": {Data: {"template1016_3_img": {Data: "XXX"},"template1016_3_txt": {Data: "XXX"}}},
            "template1016_4": {Data: {"template1016_4_img": {Data: "XXX"},"template1016_4_txt": {Data: "XXX"}}},
            "template1016_5": {Data: {"template1016_5_img": {Data: "XXX"},"template1016_5_txt": {Data: "XXX"}}},
            "template1016_6": {Data: {"template1016_6_img": {Data: "XXX"},"template1016_6_txt": {Data: "XXX"}}}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);

            tempData.template1016_title_text.Data = dat.title;
            for(var i = 0; i < dat.imgs.length; ++i) {
                var tmp = "template1016_" + (i+1);
                tempData[tmp].Data[tmp + "_img"].Data = dat.imgs[i];
                tempData[tmp].Data[tmp + "_txt"].Data = dat.txts[i];
            }

            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1007",
        "description": "模版1007",
        "pageMode": "module",
        "width": 1503,//1458
        "height": 807,
        "firstFocusId": "template1007_1",
        "htmlPath": "templates/template1007.html",
        "jsPath": "templates/template1007.js",
        "cssPath": "templates/template1007.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1007_title_text",
                "classes": {
                    "normal": "template1007_title_text_normal", "focus": "template1007_title_text_normal"
                },
                "CaEType": "span"
            },
            {
                "id": "template1007_1",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "leftTo": "AUTO",
                    "rightTo": "template1007_2",
                    "downTo": "template1007_4"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_1_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_1_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_2",
                "description": "",
                "classes": {
                    "normal": "template1007_big_unfocus", "focus": "template1007_big_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[366,0,726,486],//L,T,W,H
                "nav": {
                    "rightTo": "template1007_3",
                    "leftTo": "template1007_1",
                    "downTo": "template1007_7"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_2_img",
                        "classes": {
                            "normal": "template1007_img_big", "focus": "template1007_img_big"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_2_txt",
                        "classes": {
                            "normal": "template1007_txt_big", "focus": "template1007_txt_big"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_3",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus": true,
	            "position":[1098,0,360,240],//L,T,W,H
                "nav": {
                    "leftTo": "template1007_2",
                    "rightTo": "AUTO",
                    "downTo": "template1007_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_3_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_3_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_4",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1007_1",
                    "leftTo": "AUTO",
                    "rightTo": "template1007_2",
                    "downTo": "template1007_6"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_4_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_4_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_5",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[1098,-246,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1007_3",
                    "leftTo": "template1007_2",
                    "rightTo": "AUTO",
                    "downTo": "template1007_9"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_5_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_5_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_6",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1007_4",
                    "leftTo": "AUTO",
                    "rightTo": "template1007_7"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_6_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_6_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_7",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[366,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1007_2",
                    "leftTo": "template1007_6",
                    "rightTo": "template1007_8"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_7_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_7_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_8",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[732,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1007_2",
                    "leftTo": "template1007_7",
                    "rightTo": "template1007_9"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_8_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_8_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1007_9",
                "description": "",
                "classes": {
                    "normal": "template1007_small_unfocus", "focus": "template1007_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1007",
                "isFocus":true,
	            "position":[1098,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo": "template1007_5",
                    "leftTo": "template1007_8",
                    "rightTo": "AUTO"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1007_9_img",
                        "classes": {
                            "normal": "template1007_img_small", "focus": "template1007_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1007_9_txt",
                        "classes": {
                            "normal": "template1007_txt_small", "focus": "template1007_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            }
        ],
        "idList": [ "template1007_title_text",
            "template1007_1",
            "template1007_1_img",
            "template1007_1_txt",
            "template1007_2",
            "template1007_2_img",
            "template1007_2_txt",
            "template1007_3",
            "template1007_3_img",
            "template1007_3_txt",
            "template1007_4",
            "template1007_4_img",
            "template1007_4_txt",
            "template1007_5",
            "template1007_5_img",
            "template1007_5_txt",
            "template1007_6",
            "template1007_6_img",
            "template1007_6_txt",
            "template1007_7",
            "template1007_7_img",
            "template1007_7_txt",
            "template1007_8",
            "template1007_8_img",
            "template1007_8_txt",
            "template1007_9",
            "template1007_9_img",
            "template1007_9_txt"
        ],//明确替换的id列表
        "dataFormat": {
            "template1007_title_text": {Data: "XXX"},
            "template1007_1": {Data: {"template1007_1_img": {Data: "XXX"},"template1007_1_txt": {Data: "XXX"}}},
            "template1007_2": {Data: {"template1007_2_img": {Data: "XXX"},"template1007_2_txt": {Data: "XXX"}}},
            "template1007_3": {Data: {"template1007_3_img": {Data: "XXX"},"template1007_3_txt": {Data: "XXX"}}},
            "template1007_4": {Data: {"template1007_4_img": {Data: "XXX"},"template1007_4_txt": {Data: "XXX"}}},
            "template1007_5": {Data: {"template1007_5_img": {Data: "XXX"},"template1007_5_txt": {Data: "XXX"}}},
            "template1007_6": {Data: {"template1007_6_img": {Data: "XXX"},"template1007_6_txt": {Data: "XXX"}}},
            "template1007_7": {Data: {"template1007_7_img": {Data: "XXX"},"template1007_7_txt": {Data: "XXX"}}},
            "template1007_8": {Data: {"template1007_8_img": {Data: "XXX"},"template1007_8_txt": {Data: "XXX"}}},
            "template1007_9": {Data: {"template1007_9_img": {Data: "XXX"},"template1007_9_txt": {Data: "XXX"}}}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);

            tempData.template1007_title_text.Data = dat.title;
            for(var i = 0; i < dat.imgs.length; ++i) {
                var tmp = "template1007_" + (i+1);
                tempData[tmp].Data[tmp + "_img"].Data = dat.imgs[i];
                tempData[tmp].Data[tmp + "_txt"].Data = dat.txts[i];
            }

            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1017",
        "description": "模版1007",
        "pageMode": "module",
        "width": 1767,//1722
        "height": 807,
        "firstFocusId": "template1017_1",
        "htmlPath": "templates/template1017.html",
        "jsPath": "templates/template1017.js",
        "cssPath": "templates/template1017.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "template1017_title_text",
                "classes": {
                    "normal": "template1017_title_text_normal", "focus": "template1017_title_text_normal"
                },
                "CaEType": "span"
            },
            {
                "id": "template1017_1",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[0,0,426,240],//L,T,W,H
                "nav": {
                    "leftTo": "AUTO",
                    "rightTo": "template1017_2",
                    "downTo": "template1017_4"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_1_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_1_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_2",
                "description": "",
                "classes": {
                    "normal": "template1017_big_unfocus", "focus": "template1017_big_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[432,0,858,486],//L,T,W,H
                "nav": {
                    "rightTo": "template1017_3",
                    "leftTo": "template1017_1",
                    "downTo": "template1017_7"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_2_img",
                        "classes": {
                            "normal": "template1017_img_big", "focus": "template1017_img_big"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_2_txt",
                        "classes": {
                            "normal": "template1017_txt_big", "focus": "template1017_txt_big"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_3",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus": true,
	            "position":[1296,0,426,240],//L,T,W,H
                "nav": {
                    "leftTo": "template1017_2",
                    "rightTo": "AUTO",
                    "downTo": "template1017_5"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler",
	                "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_3_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_3_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_4",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[0,-246,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1017_1",
                    "leftTo": "AUTO",
                    "rightTo": "template1017_2",
                    "downTo": "template1017_6"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_4_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_4_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_5",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[1296,-246,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1017_3",
                    "leftTo": "template1017_2",
                    "rightTo": "AUTO",
                    "downTo": "template1017_9"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_5_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_5_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_6",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[0,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1017_4",
                    "leftTo": "AUTO",
                    "rightTo": "template1017_7"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_6_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_6_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_7",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[432,-496,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1017_2",
                    "leftTo": "template1017_6",
                    "rightTo": "template1017_8"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_7_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_7_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_8",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[864,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1017_2",
                    "leftTo": "template1017_7",
                    "rightTo": "template1017_9"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_8_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_8_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            },
            {
                "id": "template1017_9",
                "description": "",
                "classes": {
                    "normal": "template1017_small_unfocus", "focus": "template1017_small_focus"
                },
                "CaEType": "Container",
                "templateSign":"template1017",
                "isFocus":true,
	            "position":[1296,-492,426,240],//L,T,W,H
                "nav": {
                    "upTo": "template1017_5",
                    "leftTo": "template1017_8",
                    "rightTo": "AUTO"
                },
                "handler": {
	                "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE": [
                    {
                        "id": "template1017_9_img",
                        "classes": {
                            "normal": "template1017_img_small", "focus": "template1017_img_small"
                        },
                        "CaEType": "img"
                    },
                    {
                        "id": "template1017_9_txt",
                        "classes": {
                            "normal": "template1017_txt_small", "focus": "template1017_txt_small"
                        },
                        "CaEType": "span"
                    }
                ]
            }
        ],
        "idList": [ "template1017_title_text",
            "template1017_1",
            "template1017_1_img",
            "template1017_1_txt",
            "template1017_2",
            "template1017_2_img",
            "template1017_2_txt",
            "template1017_3",
            "template1017_3_img",
            "template1017_3_txt",
            "template1017_4",
            "template1017_4_img",
            "template1017_4_txt",
            "template1017_5",
            "template1017_5_img",
            "template1017_5_txt",
            "template1017_6",
            "template1017_6_img",
            "template1017_6_txt",
            "template1017_7",
            "template1017_7_img",
            "template1017_7_txt",
            "template1017_8",
            "template1017_8_img",
            "template1017_8_txt",
            "template1017_9",
            "template1017_9_img",
            "template1017_9_txt"
        ],//明确替换的id列表
        "dataFormat": {
            "template1017_title_text": {Data: "XXX"},
            "template1017_1": {Data: {"template1017_1_img": {Data: "XXX"},"template1017_1_txt": {Data: "XXX"}}},
            "template1017_2": {Data: {"template1017_2_img": {Data: "XXX"},"template1017_2_txt": {Data: "XXX"}}},
            "template1017_3": {Data: {"template1017_3_img": {Data: "XXX"},"template1017_3_txt": {Data: "XXX"}}},
            "template1017_4": {Data: {"template1017_4_img": {Data: "XXX"},"template1017_4_txt": {Data: "XXX"}}},
            "template1017_5": {Data: {"template1017_5_img": {Data: "XXX"},"template1017_5_txt": {Data: "XXX"}}},
            "template1017_6": {Data: {"template1017_6_img": {Data: "XXX"},"template1017_6_txt": {Data: "XXX"}}},
            "template1017_7": {Data: {"template1017_7_img": {Data: "XXX"},"template1017_7_txt": {Data: "XXX"}}},
            "template1017_8": {Data: {"template1017_8_img": {Data: "XXX"},"template1017_8_txt": {Data: "XXX"}}},
            "template1017_9": {Data: {"template1017_9_img": {Data: "XXX"},"template1017_9_txt": {Data: "XXX"}}}
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);

            tempData.template1017_title_text.Data = dat.title;
            for(var i = 0; i < dat.imgs.length; ++i) {
                var tmp = "template1017_" + (i+1);
                tempData[tmp].Data[tmp + "_img"].Data = dat.imgs[i];
                tempData[tmp].Data[tmp + "_txt"].Data = dat.txts[i];
            }

            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1008",
        "description": "模版1008",
        "pageMode": "module",
        "height": 732,
        "width":240,
        "firstFocusId": "OEMTem1008Position2",
        "htmlPath": "templates/template1008.html",
//            "jsPath": "templates/templateA.js",
        "cssPath": "templates/template1008.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "widthFun":function(w,_count){
            if(_count%3 == 0){
                return parseInt(_count / 3) * w+732;
            }else{
                return (parseInt(_count / 3) + 1) * w+732;
            }
        },
        "CaE": [
            {
                "id":"OEMTemplate1008Title",
                "description":"",
                "CaEType":"div"
            },
            {
                "id": "OEMTem1008Position2",
                "description": "",
                "classes": {
                    "normal": "OEMTem1008Position2Normal", "focus": "OEMTem1008Position2Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1008",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1008Position3",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1008Position5"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1008Position2_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1008Position2_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1008PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1008Position5",
                "description": "",
                "classes": {
                    "normal": "OEMTem1008Position5Normal", "focus": "OEMTem1008Position5Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1008",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1008Position1",
                    "leftTo": "OEMTem1008Position2",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1008EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1008Position5_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1008Position5_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1008PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1008Position3",
                "description": "",
                "classes": {
                    "normal": "OEMTem1008Position3Normal", "focus": "OEMTem1008Position3Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1008",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1008Position4",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1008Position1",
                    "upTo":"OEMTem1008Position2"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1008Position3_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1008Position3_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1008PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1008Position4",
                "description": "",
                "classes": {
                    "normal": "OEMTem1008Position4Normal", "focus": "OEMTem1008Position4Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1008",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1008Position1",
                    "upTo":"OEMTem1008Position3"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1008Position4_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1008Position4_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1008PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1008Position1",
                "description": "",
                "classes": {
                    "normal": "OEMTem1008Position1Normal", "focus": "OEMTem1008Position1Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1008",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-246,360,486],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1008Position5",
                    "leftTo": "OEMTem1008Position3",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1008EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1008Position1_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1008Position1_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1008PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id":"OEMTem1008EditAppList",
                "description":"",
                "CaEType": "GridList",
                "templateSign":"template1008",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,0,1000,732],//L,T,W,H
                "disable": false,
                "classes": {
                    "normal": "OEMTem1008EditAppNormal", "focus": "OEMTem1008EditAppFocus",
                    "dataSelected":"OEMTem1008EditAppNormal","selected":"OEMTem1008EditAppNormal",
                    "disable":"OEMTem1008EditAppDisable"
                },
                "nav":{
                    "leftTo":"OEMTem1008Position1","rightTo":"","enterTo":""
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befLeftHandler":"OEMAllAppBefLeftHandle",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "OEMAllAppGridListOnFocusHandle",
                "oriCaE": [//todo 需修改为oriCaE
                    {
                        "id": "OEMTem1008EditApp_img",
                        "description": "App img",
                        "CaEType": "img"
                    },
                    {
                        "id": "OEMTem1008EditApp_name",
                        "description": "app name",
                        "CaEType": "span",
                        "classes":{
                            "normal":"OEMTem1008EditAppName"
                        }
                    },
                    {
                        "id": "OEMTem1008EditApp_delete",
                        "description": "delete img",
                        "CaEType": "img",
                        "classes":{
                            "normal":"OEMTem1008EditAppDelete"
                        }
                    }
                ],
                "GridListConfig": {
                    "GridListDataItem": ["OEMTem1008EditApp_img","OEMTem1008EditApp_name","OEMTem1008EditApp_delete"],
                    "LineNum":3,
                    "FlipType":'VER',
                    "locationFun": "locationFun1008",
                    "Width": 240
                }
            }
        ],
        "idList": [],//明确替换的id列表
        "dataFormat": {
            "OEMTemplate1008Title":{"Data":""},
            "OEMTem1008Position1": {
                Data: {
                    "OEMTem1008Position1_img":{"Data":""},
                    "OEMTem1008Position1_txt":{"Data":""}
                }
            },
            "OEMTem1008Position2": {
                Data: {
                    "OEMTem1008Position2_img":{"Data":""},
                    "OEMTem1008Position2_txt":{"Data":""}
                }
            },
            "OEMTem1008Position3": {
                Data: {
                    "OEMTem1008Position3_img":{"Data":""},
                    "OEMTem1008Position3_txt":{"Data":""}
                }
            },
            "OEMTem1008Position4": {
                Data: {
                    "OEMTem1008Position4_img":{"Data":""},
                    "OEMTem1008Position4_txt":{"Data":""}
                }
            },
            "OEMTem1008Position5": {
                Data: {
                    "OEMTem1008Position5_img":{"Data":""},
                    "OEMTem1008Position5_txt":{"Data":""}
                }
            },
            "OEMTem1008EditAppList": {
                "Data":[
                    {
                        "OEMTem1008EditApp_img":{"Data":""},
                        "OEMTem1008EditApp_name":{"Data":""},
                        "OEMTem1012EditApp_delete":{"Data":""}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);
            tempData.OEMTemplate1008Title.Data = dat.title;
            OEMAppRememberData.fixAppNum = 5;
            for(var i = 0; i < OEMAppRememberData.fixAppNum; i++){
                tempData["OEMTem1008Position"+(i+1)].Data["OEMTem1008Position"+(i+1)+"_img"].Data = dat.imgs[i];
                tempData["OEMTem1008Position"+(i+1)].Data["OEMTem1008Position"+(i+1)+"_txt"].Data = dat.txts[i];
            }
            //change the mangement button image and text
            dat.imgs[dat.imgs.length-1] = "templates/images/management2.png";
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                dat.txts[dat.imgs.length-1] = getCurrentContentLanguage("Manage");
            }else{
                var txt = getCurrentContentLanguage("Complete");
                if(hiWebOsFrame.getCurrentLanguage() == "spa"){
                    txt = "Finalizar";
                }
                dat.txts[dat.imgs.length-1] = txt;
            }

            //generate grid list
            tempData.OEMTem1008EditAppList.Data=[];
            var disableItem = [];
            for(i=OEMAppRememberData.fixAppNum;i<dat.imgs.length;i++){
                var listDataItem = {
                    "OEMTem1008EditApp_img":{"Data":""},
                    "OEMTem1008EditApp_name":{"Data":""},
                    "OEMTem1008EditApp_delete":{"Data":""}
                };
                listDataItem.OEMTem1008EditApp_img.Data=dat.imgs[i];
                listDataItem.OEMTem1008EditApp_name.Data=dat.txts[i];
                listDataItem.OEMTem1008EditApp_delete.Data = "templates/images/ico_deleat.png";
                tempData.OEMTem1008EditAppList.Data.push(listDataItem);
                if(OEMAppRememberData.OEMAppEditStatus == 1){
                    if(dat.canRemoves[i] == false){
                        disableItem.push(i - OEMAppRememberData.fixAppNum);
                        listDataItem.OEMTem1008EditApp_delete.Data = "templates/images/blank.png";
                    }
                }
            }
            DBG_ALWAYS("generateDataFunction:tempData.OEMTem1008EditAppList.length="+tempData.OEMTem1008EditAppList.Data.length);
            tempData.OEMTem1008EditAppList.SelectedIndex= OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1008EditAppList.DataSelectedIndex=OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1008EditAppList.disableItem = disableItem;
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                $("#OEMTem1008EditAppList").attr("class","OEMTem1008EditAppListNormal");
                $("#OEMTemplate1008Mask").css("display","none");
            }else{
                $("#OEMTem1008EditAppList").attr("class","OEMTem1008EditAppListDelete");
                $("#OEMTemplate1008Mask").css("display","block");
            }
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1009",
        "description": "模版1009",
        "pageMode": "module",
        "height": 732,
        "width": 240,
        "firstFocusId": "OEMTem1009Position1",
        "htmlPath": "templates/template1009.html",
//            "jsPath": "templates/templateA.js",
        "cssPath": "templates/template1009.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "widthFun":function(w,_count){
            if(_count%3 == 0){
                return parseInt(_count / 3) * w+1092;
            }else{
                return (parseInt(_count / 3) + 1) * w+1022;
            }
        },
        "CaE": [
            {
                "id":"OEMTemplate1009Title",
                "description":"",
                "CaEType":"div"
            },
            {
                "id": "OEMTem1009Position1",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position1Normal", "focus": "OEMTem1009Position1Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,360,486],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1009Position2",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009Position3"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position1_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position1_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1009Position2",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position2Normal", "focus": "OEMTem1009Position2Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "upTo":"OEMTem1009Position1",
                    "downTo": "",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009Position5"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position2_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position2_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1009Position3",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position3Normal", "focus": "OEMTem1009Position3Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1009Position4",
                    "leftTo": "OEMTem1009Position1",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009Position6",
                    "upTo":""
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position3_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position3_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1009Position4",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position4Normal", "focus": "OEMTem1009Position4Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1009Position5",
                    "leftTo": "OEMTem1009Position1",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009Position7",
                    "upTo":"OEMTem1009Position3"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position4_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position4_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1009Position5",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position5Normal", "focus": "OEMTem1009Position5Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1009Position4",
                    "leftTo": "OEMTem1009Position2",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009Position8"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position5_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position5_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1009Position6",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position6Normal", "focus": "OEMTem1009Position6Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1009Position7",
                    "upTo":"",
                    "leftTo": "OEMTem1009Position3",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position6_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position6_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1009Position7",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position7Normal", "focus": "OEMTem1009Position7Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1009Position8",
                    "upTo":"OEMTem1009Position6",
                    "leftTo": "OEMTem1009Position4",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position7_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position7_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1009Position8",
                "description": "",
                "classes": {
                    "normal": "OEMTem1009Position8Normal", "focus": "OEMTem1009Position8Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1009Position7",
                    "leftTo": "OEMTem1009Position5",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1009EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1009Position8_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1009Position8_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1009PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id":"OEMTem1009EditAppList",
                "description":"",
                "CaEType": "GridList",
                "templateSign":"template1009",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[1098,0,1000,732],//L,T,W,H
                "disable": false,
                "classes": {
                    "normal": "OEMTem1009EditAppNormal", "focus": "OEMTem1009EditAppFocus",
                    "dataSelected":"OEMTem1009EditAppNormal","selected":"OEMTem1009EditAppNormal",
                    "disable":"OEMTem1009EditAppDisable"
                },
                "nav":{
                    "leftTo":"OEMTem1009Position6","rightTo":"","enterTo":""
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befLeftHandler":"OEMAllAppBefLeftHandle",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "OEMAllAppGridListOnFocusHandle",
                "oriCaE": [//todo 需修改为oriCaE
                    {
                        "id": "OEMTem1009EditApp_img",
                        "description": "App img",
                        "CaEType": "img"
                    },
                    {
                        "id": "OEMTem1009EditApp_name",
                        "description": "app name",
                        "CaEType": "span",
                        "classes":{
                            "normal":"OEMTem1009EditAppName"
                        }
                    },
                    {
                        "id": "OEMTem1009EditApp_delete",
                        "description": "delete img",
                        "CaEType": "img",
                        "classes":{
                            "normal":"OEMTem1009EditAppDelete"
                        }
                    }
                ],
                "GridListConfig": {
                    "GridListDataItem": ["OEMTem1009EditApp_img","OEMTem1009EditApp_name","OEMTem1009EditApp_delete"],
                    "LineNum":3,
                    "FlipType":'VER',
                    "locationFun": "locationFun1009",
                    "Width": 240
                }
            }
        ],
        "idList": [],//明确替换的id列表
        "dataFormat": {
            "OEMTemplate1009Title":{"Data":"All App"},
            "OEMTem1009Position1": {
                Data: {
                    "OEMTem1009Position1_img":{"Data":""},
                    "OEMTem1009Position1_txt":{"Data":""}
                }
            },
            "OEMTem1009Position2": {
                Data: {
                    "OEMTem1009Position2_img":{"Data":""},
                    "OEMTem1009Position2_txt":{"Data":""}
                }
            },
            "OEMTem1009Position3": {
                Data: {
                    "OEMTem1009Position3_img":{"Data":""},
                    "OEMTem1009Position3_txt":{"Data":""}
                }
            },
            "OEMTem1009Position4": {
                Data: {
                    "OEMTem1009Position4_img":{"Data":""},
                    "OEMTem1009Position4_txt":{"Data":""}
                }
            },
            "OEMTem1009Position5": {
                Data: {
                    "OEMTem1009Position5_img":{"Data":""},
                    "OEMTem1009Position5_txt":{"Data":""}
                }
            },
            "OEMTem1009Position6": {
                Data: {
                    "OEMTem1009Position6_img":{"Data":""},
                    "OEMTem1009Position6_txt":{"Data":""}
                }
            },
            "OEMTem1009Position7": {
                Data: {
                    "OEMTem1009Position7_img":{"Data":""},
                    "OEMTem1009Position7_txt":{"Data":""}
                }
            },
            "OEMTem1009Position8": {
                Data: {
                    "OEMTem1009Position8_img":{"Data":""},
                    "OEMTem1009Position8_txt":{"Data":""}
                }
            },
            "OEMTem1009EditAppList": {
                "Data":[
                    {
                        "OEMTem1009EditApp_img":{"Data":""},
                        "OEMTem1009EditApp_name":{"Data":""},
                        "OEMTem1009EditApp_delete":{"Data":""}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata

            var tempData = {};
            tempData = $.extend(tempData, datFormat);
            tempData.OEMTemplate1009Title.Data = dat.title;

            OEMAppRememberData.fixAppNum = 8;
            for(var i = 0; i < OEMAppRememberData.fixAppNum; i++){
                tempData["OEMTem1009Position"+(i+1)].Data["OEMTem1009Position"+(i+1)+"_img"].Data = dat.imgs[i];
                tempData["OEMTem1009Position"+(i+1)].Data["OEMTem1009Position"+(i+1)+"_txt"].Data = dat.txts[i];
            }
            //change the mangement button image and text
            dat.imgs[dat.imgs.length-1] = "templates/images/management2.png";
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                dat.txts[dat.imgs.length-1] = getCurrentContentLanguage("Manage");
            }else{
                var txt = getCurrentContentLanguage("Complete");
                if(hiWebOsFrame.getCurrentLanguage() == "spa"){
                    txt = "Finalizar";
                }
                dat.txts[dat.imgs.length-1] = txt;
            }

            //generate grid list
            tempData.OEMTem1009EditAppList.Data=[];
            var disableItem = [];
            for(i=OEMAppRememberData.fixAppNum;i<dat.imgs.length;i++){
                var listDataItem = {
                    "OEMTem1009EditApp_img":{"Data":""},
                    "OEMTem1009EditApp_name":{"Data":""},
                    "OEMTem1009EditApp_delete":{"Data":""}
                };
                listDataItem.OEMTem1009EditApp_img.Data=dat.imgs[i];
                listDataItem.OEMTem1009EditApp_name.Data=dat.txts[i];
                listDataItem.OEMTem1009EditApp_delete.Data = "templates/images/ico_deleat.png";
                tempData.OEMTem1009EditAppList.Data.push(listDataItem);
                if(OEMAppRememberData.OEMAppEditStatus == 1){
                    if(dat.canRemoves[i] == false){
                        disableItem.push(i - OEMAppRememberData.fixAppNum);
                        listDataItem.OEMTem1009EditApp_delete.Data = "templates/images/blank.png";
                    }
                }
            }
            DBG_ALWAYS("generateDataFunction:tempData.OEMTem1009EditAppList.length="+tempData.OEMTem1009EditAppList.Data.length);
            tempData.OEMTem1009EditAppList.SelectedIndex= OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1009EditAppList.DataSelectedIndex=OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1009EditAppList.disableItem = disableItem;
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                $("#OEMTem1009EditAppList").attr("class","OEMTem1009EditAppListNormal");
                $("#OEMTemplate1009Mask").css("display","none");
            }else{
                $("#OEMTem1009EditAppList").attr("class","OEMTem1009EditAppListDelete");
                $("#OEMTemplate1009Mask").css("display","block");
            }
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1010",
        "description": "模版1010",
        "pageMode": "module",
        "height": 732,
        "width":426,
        "firstFocusId": "OEMTem1010Position2",
        "htmlPath": "templates/template1010.html",
//            "jsPath": "templates/templateA.js",
        "cssPath": "templates/template1010.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "widthFun":function(w,_count){
            if(_count%3 == 0){
                return parseInt(_count / 3) * w+732;
            }else{
                return (parseInt(_count / 3) + 1) * w+732;
            }
        },
        "CaE": [
            {
                "id":"OEMTemplate1010Title",
                "description":"",
                "CaEType":"div"
            },
            {
                "id": "OEMTem1010Position2",
                "description": "",
                "classes": {
                    "normal": "OEMTem1010Position2Normal", "focus": "OEMTem1010Position2Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1010",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1010Position3",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1010Position5"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1010Position2_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1010Position2_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1010PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1010Position5",
                "description": "",
                "classes": {
                    "normal": "OEMTem1010Position5Normal", "focus": "OEMTem1010Position5Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1010",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1010Position1",
                    "leftTo": "OEMTem1010Position2",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1010EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1010Position5_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1010Position5_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1010PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1010Position3",
                "description": "",
                "classes": {
                    "normal": "OEMTem1010Position3Normal", "focus": "OEMTem1010Position3Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1010",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1010Position4",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1010Position1",
                    "upTo":"OEMTem1010Position2"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1010Position3_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1010Position3_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1010PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1010Position4",
                "description": "",
                "classes": {
                    "normal": "OEMTem1010Position4Normal", "focus": "OEMTem1010Position4Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1010",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1010Position1",
                    "upTo":"OEMTem1010Position3"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1010Position4_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1010Position4_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1010PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1010Position1",
                "description": "",
                "classes": {
                    "normal": "OEMTem1010Position1Normal", "focus": "OEMTem1010Position1Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1010",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-246,360,486],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1010Position5",
                    "leftTo": "OEMTem1010Position3",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1010EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1010Position1_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1010Position1_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1010PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id":"OEMTem1010EditAppList",
                "description":"",
                "CaEType": "GridList",
                "templateSign":"template1010",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,0,1000,732],//L,T,W,H
                "disable": false,
                "classes": {
                    "normal": "OEMTem1010EditAppNormal", "focus": "OEMTem1010EditAppFocus",
                    "dataSelected":"OEMTem1010EditAppNormal","selected":"OEMTem1010EditAppNormal",
                    "disable":"OEMTem1010EditAppDisable"
                },
                "nav":{
                    "leftTo":"OEMTem1010Position1","rightTo":"","enterTo":""
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befLeftHandler":"OEMAllAppBefLeftHandle",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "OEMAllAppGridListOnFocusHandle",
                "oriCaE": [//todo 需修改为oriCaE
                    {
                        "id": "OEMTem1010EditApp_img",
                        "description": "App img",
                        "CaEType": "img"
                    },
                    {
                        "id": "OEMTem1010EditApp_name",
                        "description": "app name",
                        "CaEType": "span",
                        "classes":{
                            "normal":"OEMTem1010EditAppName"
                        }
                    },
                    {
                        "id": "OEMTem1010EditApp_delete",
                        "description": "delete img",
                        "CaEType": "img",
                        "classes":{
                            "normal":"OEMTem1010EditAppDelete"
                        }
                    }
                ],
                "GridListConfig": {
                    "GridListDataItem": ["OEMTem1010EditApp_img","OEMTem1010EditApp_name","OEMTem1010EditApp_delete"],
                    "LineNum":3,
                    "FlipType":'VER',
                    "locationFun": "locationFun1010",
                    "Width": 426
                }
            }
        ],
        "idList": [],//明确替换的id列表
        "dataFormat": {
            "OEMTemplate1010Title":{"Data":""},
            "OEMTem1010Position1": {
                Data: {
                    "OEMTem1010Position1_img":{"Data":""},
                    "OEMTem1010Position1_txt":{"Data":""}
                }
            },
            "OEMTem1010Position2": {
                Data: {
                    "OEMTem1010Position2_img":{"Data":""},
                    "OEMTem1010Position2_txt":{"Data":""}
                }
            },
            "OEMTem1010Position3": {
                Data: {
                    "OEMTem1010Position3_img":{"Data":""},
                    "OEMTem1010Position3_txt":{"Data":""}
                }
            },
            "OEMTem1010Position4": {
                Data: {
                    "OEMTem1010Position4_img":{"Data":""},
                    "OEMTem1010Position4_txt":{"Data":""}
                }
            },
            "OEMTem1010Position5": {
                Data: {
                    "OEMTem1010Position5_img":{"Data":""},
                    "OEMTem1010Position5_txt":{"Data":""}
                }
            },
            "OEMTem1010EditAppList": {
                "Data":[
                    {
                        "OEMTem1010EditApp_img":{"Data":""},
                        "OEMTem1010EditApp_name":{"Data":""},
                        "OEMTem1010EditApp_delete":{"Data":""}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);
            tempData.OEMTemplate1010Title.Data = dat.title;

            OEMAppRememberData.fixAppNum = 5;
            for(var i = 0; i < OEMAppRememberData.fixAppNum; i++){
                tempData["OEMTem1010Position"+(i+1)].Data["OEMTem1010Position"+(i+1)+"_img"].Data = dat.imgs[i];
                tempData["OEMTem1010Position"+(i+1)].Data["OEMTem1010Position"+(i+1)+"_txt"].Data = dat.txts[i];
            }
            //change the mangement button image and text
            dat.imgs[dat.imgs.length-1] = "templates/images/management1.png";
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                dat.txts[dat.imgs.length-1] = getCurrentContentLanguage("Manage");
            }else{
                var txt = getCurrentContentLanguage("Complete");
                if(hiWebOsFrame.getCurrentLanguage() == "spa"){
                    txt = "Finalizar";
                }
                dat.txts[dat.imgs.length-1] = txt;
            }

            //generate grid list

            tempData.OEMTem1010EditAppList.Data=[];
            var disableItem = [];
            for(i=OEMAppRememberData.fixAppNum;i<dat.imgs.length;i++){
                var listDataItem = {
                    "OEMTem1010EditApp_img":{"Data":""},
                    "OEMTem1010EditApp_name":{"Data":""},
                    "OEMTem1010EditApp_delete":{"Data":""}
                };
                listDataItem.OEMTem1010EditApp_img.Data=dat.imgs[i];
                listDataItem.OEMTem1010EditApp_name.Data=dat.txts[i];
                listDataItem.OEMTem1010EditApp_delete.Data = "templates/images/ico_deleat.png";
                tempData.OEMTem1010EditAppList.Data.push(listDataItem);
                if(OEMAppRememberData.OEMAppEditStatus == 1){
                    if(dat.canRemoves[i] == false){
                        disableItem.push(i - OEMAppRememberData.fixAppNum);
                        listDataItem.OEMTem1010EditApp_delete.Data = "templates/images/blank.png";
                    }
                }
            }
            DBG_ALWAYS("generateDataFunction:tempData.OEMTem1010EditAppList.length="+tempData.OEMTem1010EditAppList.Data.length);
            tempData.OEMTem1010EditAppList.SelectedIndex= OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1010EditAppList.DataSelectedIndex=OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1010EditAppList.disableItem = disableItem;
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                $("#OEMTem1010EditAppList").attr("class","OEMTem1010EditAppListNormal");
                $("#OEMTemplate1010Mask").css("display","none");
            }else{
                $("#OEMTem1010EditAppList").attr("class","OEMTem1010EditAppListDelete");
                $("#OEMTemplate1010Mask").css("display","block");
            }
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1011",
        "description": "模版1011",
        "pageMode": "module",
        "height": 732,
        "width":426,
        "firstFocusId": "OEMTem1011Position2",
        "htmlPath": "templates/template1011.html",
//            "jsPath": "templates/templateA.js",
        "cssPath": "templates/template1011.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "widthFun":function(w,_count){
            if(_count%3 == 0){
                return parseInt(_count / 3) * w+1092;
            }else{
                return (parseInt(_count / 3) + 1) * w+1092;
            }
        },
        "CaE": [
            {
                "id":"OEMTemplate1011Title",
                "description":"",
                "CaEType":"div"
            },
            {
                "id": "OEMTem1011Position1",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position1Normal", "focus": "OEMTem1011Position1Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,0,360,486],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1011Position8",
                    "leftTo": "OEMTem1011Position5",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position1_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position1_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1011Position2",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position2Normal", "focus": "OEMTem1011Position2Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "upTo":"",
                    "downTo": "OEMTem1011Position3",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011Position5"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position2_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position2_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1011Position3",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position3Normal", "focus": "OEMTem1011Position3Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1011Position4",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011Position6",
                    "upTo":"OEMTem1011Position2"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position3_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position3_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1011Position4",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position4Normal", "focus": "OEMTem1011Position4Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011Position7",
                    "upTo":"OEMTem1011Position3"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position4_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position4_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1011Position5",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position5Normal", "focus": "OEMTem1011Position5Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1011Position6",
                    "upTo":"",
                    "leftTo": "OEMTem1011Position2",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011Position1"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position5_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position5_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1011Position6",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position6Normal", "focus": "OEMTem1011Position6Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1011Position7",
                    "upTo":"OEMTem1011Position5",
                    "leftTo": "OEMTem1011Position3",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011Position1"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position6_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position6_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1011Position7",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position7Normal", "focus": "OEMTem1011Position7Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1011Position6",
                    "leftTo": "OEMTem1011Position4",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011Position8"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position7_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position7_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1011Position8",
                "description": "",
                "classes": {
                    "normal": "OEMTem1011Position8Normal", "focus": "OEMTem1011Position8Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1011Position1",
                    "leftTo": "OEMTem1011Position7",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1011EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1011Position8_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1011Position8_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1011PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id":"OEMTem1011EditAppList",
                "description":"",
                "CaEType": "GridList",
                "templateSign":"template1011",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[1098,0,1000,732],//L,T,W,H
                "disable": false,
                "classes": {
                    "normal": "OEMTem1011EditAppNormal", "focus": "OEMTem1011EditAppFocus",
                    "dataSelected":"OEMTem1011EditAppNormal","selected":"OEMTem1011EditAppNormal",
                    "disable":"OEMTem1011EditAppDisable"
                },
                "nav":{
                    "leftTo":"OEMTem1011Position1","rightTo":"","enterTo":""
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befLeftHandler":"OEMAllAppBefLeftHandle",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "OEMAllAppGridListOnFocusHandle",
                "oriCaE": [//todo 需修改为oriCaE
                    {
                        "id": "OEMTem1011EditApp_img",
                        "description": "App img",
                        "CaEType": "img"
                    },
                    {
                        "id": "OEMTem1011EditApp_name",
                        "description": "app name",
                        "CaEType": "span",
                        "classes":{
                            "normal":"OEMTem1011EditAppName"
                        }
                    },
                    {
                        "id": "OEMTem1011EditApp_delete",
                        "description": "delete img",
                        "CaEType": "img",
                        "classes":{
                            "normal":"OEMTem1011EditAppDelete"
                        }
                    }
                ],
                "GridListConfig": {
                    "GridListDataItem": ["OEMTem1011EditApp_img","OEMTem1011EditApp_name","OEMTem1011EditApp_delete"],
                    "LineNum":3,
                    "FlipType":'VER',
                    "locationFun": "locationFun1011",
                    "Width": 426
                }
            }
        ],
        "idList": [],//明确替换的id列表
        "dataFormat": {
            "OEMTemplate1011Title":{"Data":"All App"},
            "OEMTem1011Position1": {
                Data: {
                    "OEMTem1011Position1_img":{"Data":""},
                    "OEMTem1011Position1_txt":{"Data":""}
                }
            },
            "OEMTem1011Position2": {
                Data: {
                    "OEMTem1011Position2_img":{"Data":""},
                    "OEMTem1011Position2_txt":{"Data":""}
                }
            },
            "OEMTem1011Position3": {
                Data: {
                    "OEMTem1011Position3_img":{"Data":""},
                    "OEMTem1011Position3_txt":{"Data":""}
                }
            },
            "OEMTem1011Position4": {
                Data: {
                    "OEMTem1011Position4_img":{"Data":""},
                    "OEMTem1011Position4_txt":{"Data":""}
                }
            },
            "OEMTem1011Position5": {
                Data: {
                    "OEMTem1011Position5_img":{"Data":""},
                    "OEMTem1011Position5_txt":{"Data":""}
                }
            },
            "OEMTem1011Position6": {
                Data: {
                    "OEMTem1011Position6_img":{"Data":""},
                    "OEMTem1011Position6_txt":{"Data":""}
                }
            },
            "OEMTem1011Position7": {
                Data: {
                    "OEMTem1011Position7_img":{"Data":""},
                    "OEMTem1011Position7_txt":{"Data":""}
                }
            },
            "OEMTem1011Position8": {
                Data: {
                    "OEMTem1011Position8_img":{"Data":""},
                    "OEMTem1011Position8_txt":{"Data":""}
                }
            },
            "OEMTem1011EditAppList": {
                "Data":[
                    {
                        "OEMTem1011EditApp_img":{"Data":""},
                        "OEMTem1011EditApp_name":{"Data":""},
                        "OEMTem1011EditApp_delete":{"Data":""}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata

            var tempData = {};
            tempData = $.extend(tempData, datFormat);
            tempData.OEMTemplate1011Title.Data = dat.title;
            OEMAppRememberData.fixAppNum = 8;
            for(var i = 0; i < OEMAppRememberData.fixAppNum; i++){
                tempData["OEMTem1011Position"+(i+1)].Data["OEMTem1011Position"+(i+1)+"_img"].Data = dat.imgs[i];
                tempData["OEMTem1011Position"+(i+1)].Data["OEMTem1011Position"+(i+1)+"_txt"].Data = dat.txts[i];
            }
            //change the mangement button image and text
            dat.imgs[dat.imgs.length-1] = "templates/images/management1.png";
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                dat.txts[dat.imgs.length-1] = getCurrentContentLanguage("Manage");
            }else{
                var txt = getCurrentContentLanguage("Complete");
                if(hiWebOsFrame.getCurrentLanguage() == "spa"){
                    txt = "Finalizar";
                }
                dat.txts[dat.imgs.length-1] = txt;
            }

            //generate grid list
            tempData.OEMTem1011EditAppList.Data=[];
            var disableItem = [];
            for(i=OEMAppRememberData.fixAppNum;i<dat.imgs.length;i++){
                var listDataItem = {
                    "OEMTem1011EditApp_img":{"Data":""},
                    "OEMTem1011EditApp_name":{"Data":""},
                    "OEMTem1011EditApp_delete":{"Data":""}
                };
                listDataItem.OEMTem1011EditApp_img.Data=dat.imgs[i];
                listDataItem.OEMTem1011EditApp_name.Data=dat.txts[i];
                listDataItem.OEMTem1011EditApp_delete.Data = "templates/images/ico_deleat.png";
                tempData.OEMTem1011EditAppList.Data.push(listDataItem);
                if(OEMAppRememberData.OEMAppEditStatus == 1){
                    if(dat.canRemoves[i] == false){
                        disableItem.push(i - OEMAppRememberData.fixAppNum);
                        listDataItem.OEMTem1011EditApp_delete.Data = "templates/images/blank.png";
                    }
                }
            }
            DBG_ALWAYS("generateDataFunction:tempData.OEMTem1011EditAppList.length="+tempData.OEMTem1011EditAppList.Data.length);
            tempData.OEMTem1011EditAppList.SelectedIndex= OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1011EditAppList.DataSelectedIndex=OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1011EditAppList.disableItem = disableItem;
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                $("#OEMTem1011EditAppList").attr("class","OEMTem1011EditAppListNormal");
                $("#OEMTemplate1011Mask").css("display","none");
            }else{
                $("#OEMTem1011EditAppList").attr("class","OEMTem1011EditAppListDelete");
                $("#OEMTemplate1011Mask").css("display","block");
            }
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1012",
        "description": "模版1012",
        "pageMode": "module",
        "height": 732,
        "width":255,
        "firstFocusId": "OEMTem1012Position2",
        "htmlPath": "templates/template1012.html",
//            "jsPath": "templates/templateA.js",
        "cssPath": "templates/template1012.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "widthFun":function(w,_count){
            if(_count%4 == 0){
                return parseInt(_count / 4) * w+732;
            }else{
                return (parseInt(_count / 4) + 1) * w+732;
            }

        },
        "CaE": [
            {
                "id":"OEMTemplate1012Title",
                "description":"",
                "CaEType":"div"
            },
            {
                "id": "OEMTem1012Position2",
                "description": "",
                "classes": {
                    "normal": "OEMTem1012Position2Normal", "focus": "OEMTem1012Position2Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1012",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1012Position3",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1012Position5"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1012Position2_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1012Position2_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1012PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1012Position5",
                "description": "",
                "classes": {
                    "normal": "OEMTem1012Position5Normal", "focus": "OEMTem1012Position5Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1012",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1012Position1",
                    "leftTo": "OEMTem1012Position2",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1012EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1012Position5_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1012Position5_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1012PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1012Position3",
                "description": "",
                "classes": {
                    "normal": "OEMTem1012Position3Normal", "focus": "OEMTem1012Position3Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1012",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1012Position4",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1012Position1",
                    "upTo":"OEMTem1012Position2"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1012Position3_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1012Position3_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1012PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1012Position4",
                "description": "",
                "classes": {
                    "normal": "OEMTem1012Position4Normal", "focus": "OEMTem1012Position4Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1012",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1012Position1",
                    "upTo":"OEMTem1012Position3"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1012Position4_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1012Position4_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1012PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1012Position1",
                "description": "",
                "classes": {
                    "normal": "OEMTem1012Position1Normal", "focus": "OEMTem1012Position1Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1012",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-246,360,486],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1012Position5",
                    "leftTo": "OEMTem1012Position3",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1012EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1012Position1_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1012Position1_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1012PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id":"OEMTem1012EditAppList",
                "description":"",
                "CaEType": "GridList",
                "templateSign":"template1012",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,0,1000,732],//L,T,W,H
                "disable": false,
                "classes": {
                    "normal": "OEMTem1012EditAppNormal", "focus": "OEMTem1012EditAppFocus",
                    "dataSelected":"OEMTem1012EditAppNormal","selected":"OEMTem1012EditAppNormal",
                    "disable":"OEMTem1012EditAppDisable"
                },
                "nav":{
                    "leftTo":"OEMTem1012Position1","rightTo":"","enterTo":""
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befLeftHandler":"OEMAllAppBefLeftHandle",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "OEMAllAppGridListOnFocusHandle",
                "oriCaE": [//todo 需修改为oriCaE
                    {
                        "id": "OEMTem1012EditApp_img",
                        "description": "App img",
                        "CaEType": "img"
                    },
                    {
                        "id": "OEMTem1012EditApp_name",
                        "description": "app name",
                        "CaEType": "span",
                        "classes":{
                            "normal":"OEMTem1012EditAppName"
                        }
                    },
                    {
                        "id": "OEMTem1012EditApp_delete",
                        "description": "delete img",
                        "CaEType": "img",
                        "classes":{
                            "normal":"OEMTem1012EditAppDelete"
                        }
                    }
                ],
                "GridListConfig": {
                    "GridListDataItem": ["OEMTem1012EditApp_img","OEMTem1012EditApp_name","OEMTem1012EditApp_delete"],
                    "LineNum":4,
                    "FlipType":'VER',
                    "locationFun": "locationFun1012",
                    "Width": 255
                }
            }
        ],
        "idList": [],//明确替换的id列表
        "dataFormat": {
            "OEMTemplate1012Title":{"Data":""},
            "OEMTem1012Position1": {
                Data: {
                    "OEMTem1012Position1_img":{"Data":""},
                    "OEMTem1012Position1_txt":{"Data":""}
                }
            },
            "OEMTem1012Position2": {
                Data: {
                    "OEMTem1012Position2_img":{"Data":""},
                    "OEMTem1012Position2_txt":{"Data":""}
                }
            },
            "OEMTem1012Position3": {
                Data: {
                    "OEMTem1012Position3_img":{"Data":""},
                    "OEMTem1012Position3_txt":{"Data":""}
                }
            },
            "OEMTem1012Position4": {
                Data: {
                    "OEMTem1012Position4_img":{"Data":""},
                    "OEMTem1012Position4_txt":{"Data":""}
                }
            },
            "OEMTem1012Position5": {
                Data: {
                    "OEMTem1012Position5_img":{"Data":""},
                    "OEMTem1012Position5_txt":{"Data":""}
                }
            },
            "OEMTem1012EditAppList": {
                "Data":[
                    {
                        "OEMTem1012EditApp_img":{"Data":""},
                        "OEMTem1012EditApp_name":{"Data":""},
                        "OEMTem1012EditApp_delete":{"Data":""}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);
            tempData.OEMTemplate1012Title.Data = dat.title;
            OEMAppRememberData.fixAppNum = 5;
            for(var i = 0; i < OEMAppRememberData.fixAppNum; i++){
                tempData["OEMTem1012Position"+(i+1)].Data["OEMTem1012Position"+(i+1)+"_img"].Data = dat.imgs[i];
                tempData["OEMTem1012Position"+(i+1)].Data["OEMTem1012Position"+(i+1)+"_txt"].Data = dat.txts[i];
            }
            //change the mangement button image and text
            dat.imgs[dat.imgs.length-1] = "templates/images/management3.png";
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                dat.txts[dat.imgs.length-1] = getCurrentContentLanguage("Manage");
            }else{
                var txt = getCurrentContentLanguage("Complete");
                if(hiWebOsFrame.getCurrentLanguage() == "spa"){
                    txt = "Finalizar";
                }
                dat.txts[dat.imgs.length-1] = txt;
            }

            //generate grid list
            tempData.OEMTem1012EditAppList.Data=[];
            var disableItem = [];
            for(i=OEMAppRememberData.fixAppNum;i<dat.imgs.length;i++){
                var listDataItem = {
                    "OEMTem1012EditApp_img":{"Data":""},
                    "OEMTem1012EditApp_name":{"Data":""},
                    "OEMTem1012EditApp_delete":{"Data":""}
                };
                listDataItem.OEMTem1012EditApp_img.Data=dat.imgs[i];
                listDataItem.OEMTem1012EditApp_name.Data=dat.txts[i];
                listDataItem.OEMTem1012EditApp_delete.Data = "templates/images/ico_deleat.png";
                tempData.OEMTem1012EditAppList.Data.push(listDataItem);
                if(OEMAppRememberData.OEMAppEditStatus == 1){
                    if(dat.canRemoves[i] == false){
                        disableItem.push(i - OEMAppRememberData.fixAppNum);
                        listDataItem.OEMTem1012EditApp_delete.Data = "templates/images/blank.png";
                    }
                }
            }
            DBG_ALWAYS("generateDataFunction:tempData.OEMTem1012EditAppList.length="+tempData.OEMTem1012EditAppList.Data.length);
            tempData.OEMTem1012EditAppList.SelectedIndex= OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1012EditAppList.DataSelectedIndex=OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1012EditAppList.disableItem = disableItem;
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                $("#OEMTem1012EditAppList").attr("class","OEMTem1012EditAppListNormal");
                $("#OEMTemplate1012Mask").css("display","none");
            }else{
                $("#OEMTem1012EditAppList").attr("class","OEMTem1012EditAppListDelete");
                $("#OEMTemplate1012Mask").css("display","block");
            }
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template1013",
        "description": "模版1013",
        "pageMode": "module",
        "height": 732,
        "width":255,
        "firstFocusId": "OEMTem1013Position2",
        "htmlPath": "templates/template1013.html",
//            "jsPath": "templates/templateA.js",
        "cssPath": "templates/template1013.css",
        "horizontalEdgesJump": false,
        "verticalEdgesJump": true,
        "widthFun":function(w,_count){
            if(_count%4 == 0){
                return parseInt(_count / 4) * w+1092;
            }else{
                return (parseInt(_count / 4) + 1) * w+1092;
            }
        },
        "CaE": [
            {
                "id":"OEMTemplate1013Title",
                "description":"",
                "CaEType":"div"
            },
            {
                "id": "OEMTem1013Position1",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position1Normal", "focus": "OEMTem1013Position1Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1013Position8",
                    "leftTo": "OEMTem1013Position5",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position1_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position1_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1013Position2",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position2Normal", "focus": "OEMTem1013Position2Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,0,360,240],//L,T,W,H
                "nav": {
                    "upTo":"",
                    "downTo": "OEMTem1013Position3",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013Position5"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position2_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position2_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1013Position3",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position3Normal", "focus": "OEMTem1013Position3Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1013Position4",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013Position6",
                    "upTo":"OEMTem1013Position2"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position3_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position3_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1013Position4",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position4Normal", "focus": "OEMTem1013Position4Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[0,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "leftTo": "AUTO",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013Position7",
                    "upTo":"OEMTem1013Position3"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position4_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position4_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1013Position5",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position5Normal", "focus": "OEMTem1013Position5Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,0,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1013Position6",
                    "upTo":"",
                    "leftTo": "OEMTem1013Position2",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013Position1"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position5_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position5_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1013Position6",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position6Normal", "focus": "OEMTem1013Position6Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-246,360,240],//L,T,W,H
                "nav": {
                    "downTo": "OEMTem1013Position7",
                    "upTo":"OEMTem1013Position5",
                    "leftTo": "OEMTem1013Position3",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013Position1"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position6_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position6_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1013Position7",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position7Normal", "focus": "OEMTem1013Position7Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[366,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1013Position6",
                    "leftTo": "OEMTem1013Position4",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013Position8"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position7_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position7_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id": "OEMTem1013Position8",
                "description": "",
                "classes": {
                    "normal": "OEMTem1013Position8Normal", "focus": "OEMTem1013Position8Focus"
                },
                "CaEType": "Container",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[732,-492,360,240],//L,T,W,H
                "nav": {
                    "downTo": "",
                    "upTo":"OEMTem1013Position1",
                    "leftTo": "OEMTem1013Position7",//设置为AUTO后启用自动导航
                    "rightTo": "OEMTem1013EditAppList"
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler"
                },
	            "onFocusFun": "oemCommonTextMarqueeHandler",
                "CaE":[
                    {
                        "id":"OEMTem1013Position8_img",
                        "description":"",
                        "CaEType":"img"
                    },
                    {
                        "id":"OEMTem1013Position8_txt",
                        "description":"",
                        "CaEType":"span",
                        "classes":{
                            "normal":"OEMTem1013PositionFixed_txt"
                        }
                    }
                ]
            },
            {
                "id":"OEMTem1013EditAppList",
                "description":"",
                "CaEType": "GridList",
                "templateSign":"template1013",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,//该项目表示是否可获得焦点
                "position":[1098,0,1000,732],//L,T,W,H
                "disable": false,
                "classes": {
                    "normal": "OEMTem1013EditAppNormal", "focus": "OEMTem1013EditAppFocus",
                    "dataSelected":"OEMTem1013EditAppNormal","selected":"OEMTem1013EditAppNormal",
                    "disable":"OEMTem1013EditAppDisable"
                },
                "nav":{
                    "leftTo":"OEMTem1013Position1","rightTo":"","enterTo":""
                },
                "handler": {
                    "aftEnterHandler": "oemCommonHandler",
                    "befLeftHandler":"OEMAllAppBefLeftHandle",
                    "befUpHandler": "oemFocusMsgBar"
                },
	            "onFocusFun": "OEMAllAppGridListOnFocusHandle",
                "oriCaE": [//todo 需修改为oriCaE
                    {
                        "id": "OEMTem1013EditApp_img",
                        "description": "App img",
                        "CaEType": "img"
                    },
                    {
                        "id": "OEMTem1013EditApp_name",
                        "description": "app name",
                        "CaEType": "span",
                        "classes":{
                            "normal":"OEMTem1013EditAppName"
                        }
                    },
                    {
                        "id": "OEMTem1013EditApp_delete",
                        "description": "delete img",
                        "CaEType": "img",
                        "classes":{
                            "normal":"OEMTem1013EditAppDelete"
                        }
                    }
                ],
                "GridListConfig": {
                    "GridListDataItem": ["OEMTem1013EditApp_img","OEMTem1013EditApp_name","OEMTem1013EditApp_delete"],
                    "LineNum":4,
                    "FlipType":'VER',
                    "locationFun": "locationFun1013",
                    "Width": 255
                }
            }
        ],
        "idList": [],//明确替换的id列表
        "dataFormat": {
            "OEMTemplate1013Title":{"Data":"All App"},
            "OEMTem1013Position1": {
                Data: {
                    "OEMTem1013Position1_img":{"Data":""},
                    "OEMTem1013Position1_txt":{"Data":""}
                }
            },
            "OEMTem1013Position2": {
                Data: {
                    "OEMTem1013Position2_img":{"Data":""},
                    "OEMTem1013Position2_txt":{"Data":""}
                }
            },
            "OEMTem1013Position3": {
                Data: {
                    "OEMTem1013Position3_img":{"Data":""},
                    "OEMTem1013Position3_txt":{"Data":""}
                }
            },
            "OEMTem1013Position4": {
                Data: {
                    "OEMTem1013Position4_img":{"Data":""},
                    "OEMTem1013Position4_txt":{"Data":""}
                }
            },
            "OEMTem1013Position5": {
                Data: {
                    "OEMTem1013Position5_img":{"Data":""},
                    "OEMTem1013Position5_txt":{"Data":""}
                }
            },
            "OEMTem1013Position6": {
                Data: {
                    "OEMTem1013Position6_img":{"Data":""},
                    "OEMTem1013Position6_txt":{"Data":""}
                }
            },
            "OEMTem1013Position7": {
                Data: {
                    "OEMTem1013Position7_img":{"Data":""},
                    "OEMTem1013Position7_txt":{"Data":""}
                }
            },
            "OEMTem1013Position8": {
                Data: {
                    "OEMTem1013Position8_img":{"Data":""},
                    "OEMTem1013Position8_txt":{"Data":""}
                }
            },
            "OEMTem1013EditAppList": {
                "Data":[
                    {
                        "OEMTem1013EditApp_img":{"Data":""},
                        "OEMTem1013EditApp_name":{"Data":""},
                        "OEMTem1013EditApp_delete":{"Data":""}
                    }
                ],
                "SelectedIndex":0,
                "DataSelectedIndex":0
            }
        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata

            var tempData = {};
            tempData = $.extend(tempData, datFormat);
            tempData.OEMTemplate1013Title.Data = dat.title;
            OEMAppRememberData.fixAppNum = 8;
            for(var i = 0; i < OEMAppRememberData.fixAppNum; i++){
                tempData["OEMTem1013Position"+(i+1)].Data["OEMTem1013Position"+(i+1)+"_img"].Data = dat.imgs[i];
                tempData["OEMTem1013Position"+(i+1)].Data["OEMTem1013Position"+(i+1)+"_txt"].Data = dat.txts[i];
                dat.canRemoves[i] = false;
            }
            //change the mangement button image and text
            dat.imgs[dat.imgs.length-1] = "templates/images/management3.png";
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                dat.txts[dat.imgs.length-1] = getCurrentContentLanguage("Manage");
            }else{
                var txt = getCurrentContentLanguage("Complete");
                if(hiWebOsFrame.getCurrentLanguage() == "spa"){
                    txt = "Finalizar";
                }
                dat.txts[dat.imgs.length-1] = txt;
            }

            //generate grid list
            tempData.OEMTem1013EditAppList.Data=[];
            var disableItem = [];
            for(i=OEMAppRememberData.fixAppNum;i<dat.imgs.length;i++){
                var listDataItem = {
                    "OEMTem1013EditApp_img":{"Data":""},
                    "OEMTem1013EditApp_name":{"Data":""},
                    "OEMTem1013EditApp_delete":{"Data":""}
                };
                listDataItem.OEMTem1013EditApp_img.Data=dat.imgs[i];
                listDataItem.OEMTem1013EditApp_name.Data=dat.txts[i];
                listDataItem.OEMTem1013EditApp_delete.Data = "templates/images/ico_deleat.png";
                tempData.OEMTem1013EditAppList.Data.push(listDataItem);
                if(OEMAppRememberData.OEMAppEditStatus == 1){
                    if(dat.canRemoves[i] == false){
                        disableItem.push(i - OEMAppRememberData.fixAppNum);
                        listDataItem.OEMTem1013EditApp_delete.Data = "templates/images/blank.png";
                    }
                }
            }
            DBG_ALWAYS("generateDataFunction:tempData.OEMTem1013EditAppList.length="+tempData.OEMTem1013EditAppList.Data.length);
            tempData.OEMTem1013EditAppList.SelectedIndex= OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1013EditAppList.DataSelectedIndex=OEMAppRememberData.SelectedIndex;
            tempData.OEMTem1013EditAppList.disableItem = disableItem;
            if(OEMAppRememberData.OEMAppEditStatus == 0){
                $("#OEMTem1013EditAppList").attr("class","OEMTem1013EditAppListNormal");
                $("#OEMTemplate1013Mask").css("display","block");

            }else{
                $("#OEMTem1013EditAppList").attr("class","OEMTem1013EditAppListDelete");
                $("#OEMTemplate1013Mask").css("display","block");
            }
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    },
    {
        "id": "template70",
        "description": "launcherLiveTv",
        "pageMode": "module",
        "width": 914,//870
        "height": 807,
        "firstFocusId": "launcherLiveTv_item0",
        "htmlPath": "templates/OEMLauncherLiveTv.html",
//            "jsPath": "../../launcher/js/launcherLiveTvNew.js",
        "cssPath": "templates/launcherLiveTv_ThemeA.css",
        "horizontalEdgesJump": true,
        "verticalEdgesJump": true,
        "CaE": [
            {
                "id": "launcherLiveTvTitle",
                "description": "",
                "classes": {
                    "normal": "launcherLiveTvTitle_c", "focus": "launcherLiveTvTitle_c"
                },
                "CaEType": "div",
                "templateSign":"template70",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":false
            },
            {
                "id": "launcherLiveTv_Top",
                "description": "",
                "classes": {
                    "normal": "launcherLiveTop_Normal", "focus": "launcherLiveTvTop_Focus"
                },
                "CaEType": "Container",
                "templateSign":"template70",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,0,870,572],//L,T,W,H
                "nav": {
                    "downTo": "launcherLiveTv_item0",
                    "leftTo":"AUTO",
                    "rightTo": "AUTO"
                },
                "onFocusFun":"OEMLauncherLiveTopFocus",
                "handler": {
                    "aftEnterHandler":"oemCommonHandler",
                    "befUpHandler": "oemFocusMsgBar"
                },
                "CaE": [
                    {
                        "id": "launcherLiveTv_ContentOem",
                        "description": "",
                        "classes": {
                            "normal": "launcherLiveTv_Content_c", "focus": "launcherLiveTv_Content_c"
                        },
                        "CaEType": "div",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_top_info",
                        "description": "",
                        "classes": {
                            "normal": "launcherLiveTv_info_c", "focus": "launcherLiveTv_info_c"
                        },
                        "CaEType": "span",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_top_img",
                        "description": "",
                        "classes": {
                            "normal": "launcherLiveTv_top_img_c", "focus": "launcherLiveTv_top_img_c"
                        },
                        "CaEType": "img",
                        "nav": {}
                    }
                ]
            },
            {
                "id": "launcherLiveTv_item0",
                "description": "",
                "classes": {
                    "normal": "launcherLiveTv_item_c", "focus": "launcherLiveTv_item_c_focus"
                },
                "CaEType": "Container",
                "templateSign":"template70",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[0,-578,286,154],//L,T,W,H
                "nav": {
                    "upTo": "launcherLiveTv_Top",
                    "leftTo": "",
                    "rightTo": "launcherLiveTv_item1"
                },
                "handler": {
                    "aftEnterHandler":"oemCommonHandler"
                },
                "CaE": [
                    {
                        "id": "launcherLiveTv_item_img0",
                        "description": "",
                        "classes": {
                            "normal": "launcherLiveTv_item_img_c", "focus": "launcherLiveTv_item_img_c"
                        },
                        "CaEType": "img",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_item_info0",
                        "description": "",
                        "enableHtml": true,
                        "classes": {
                            "normal": "launcherLiveTv_item_info_c", "focus": "launcherLiveTv_item_info_c"
                        },
                        "CaEType": "span",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_item_line0",
                        "description": "",
                        "enableHtml": true,
                        "classes": {
                            "normal": "launcherLiveTv_item_line_c", "focus": "launcherLiveTv_item_line_c"
                        },
                        "CaEType": "img",
                        "nav": {}
                    }
                ]
            },
            {
                "id": "launcherLiveTv_item1",
                "description": "",
                "classes": {
                    "normal": "launcherLiveTv_item_c", "focus": "launcherLiveTv_item_c_focus"
                },
                "CaEType": "Container",
                "templateSign":"template70",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[292,-578,286,154],//L,T,W,H
                "nav": {
                    "upTo": "launcherLiveTv_Top",
                    "leftTo": "launcherLiveTv_item0",
                    "rightTo": "launcherLiveTv_item2"
                },
                "handler": {
                    "aftEnterHandler":"oemCommonHandler"
                },
                "CaE": [
                    {
                        "id": "launcherLiveTv_item_img1",
                        "description": "",
                        "classes": {
                            "normal": "launcherLiveTv_item_img_c", "focus": "launcherLiveTv_item_img_c"
                        },
                        "CaEType": "img",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_item_info1",
                        "description": "",
                        "enableHtml": true,
                        "classes": {
                            "normal": "launcherLiveTv_item_info_c", "focus": "launcherLiveTv_item_info_c"
                        },
                        "CaEType": "span",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_item_line1",
                        "description": "",
                        "enableHtml": true,
                        "classes": {
                            "normal": "launcherLiveTv_item_line_c", "focus": "launcherLiveTv_item_line_c"
                        },
                        "CaEType": "img",
                        "nav": {}
                    }
                ]
            },
            {
                "id": "launcherLiveTv_item2",
                "description": "",
                "classes": {
                    "normal": "launcherLiveTv_item_c", "focus": "launcherLiveTv_item_c_focus"
                },
                "CaEType": "Container",
                "templateSign":"template70",//ver1.2该处将被替换，用于标识元素属于哪个模版
                "isFocus":true,
                "position":[584,-578,286,154],//L,T,W,H
                "nav": {
                    "upTo": "launcherLiveTv_Top",
                    "leftTo": "launcherLiveTv_item1",
                    "rightTo": "AUTO"
                },
                "handler": {
                    "aftEnterHandler":"oemCommonHandler"
                },
                "CaE": [
                    {
                        "id": "launcherLiveTv_item_img2",
                        "description": "",
                        "classes": {
                            "normal": "launcherLiveTv_item_img_c", "focus": "launcherLiveTv_item_img_c"
                        },
                        "CaEType": "img",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_item_info2",
                        "description": "",
                        "enableHtml": true,
                        "classes": {
                            "normal": "launcherLiveTv_item_info_c", "focus": "launcherLiveTv_item_info_c"
                        },
                        "CaEType": "span",
                        "nav": {}
                    },
                    {
                        "id": "launcherLiveTv_item_line2",
                        "description": "",
                        "enableHtml": true,
                        "classes": {
                            "normal": "launcherLiveTv_item_line_c", "focus": "launcherLiveTv_item_line_c"
                        },
                        "CaEType": "img",
                        "nav": {}
                    }
                ]
            }
        ],
//        "idList": ["launcherLiveTvTitle","launcherLiveTv_Top","launcherLiveTv_ContentOem", "launcherLiveTv_top_info","launcherLiveTv_top_img",
//            "launcherLiveTv_item_Ul","launcherLiveTv_item_img","launcherLiveTv_item_info","launcherLiveTv_item_line"],//明确替换的id列表
        "idList": ["launcherLiveTvTitle","launcherLiveTv_Top","launcherLiveTv_ContentOem", "launcherLiveTv_top_info","launcherLiveTv_top_img",
            "launcherLiveTv_item0","launcherLiveTv_item_img0","launcherLiveTv_item_info0","launcherLiveTv_item_line0",
            "launcherLiveTv_item1","launcherLiveTv_item_img1","launcherLiveTv_item_info1","launcherLiveTv_item_line1",
            "launcherLiveTv_item2","launcherLiveTv_item_img2","launcherLiveTv_item_info2","launcherLiveTv_item_line2"],//明确替换的id列表
        "dataFormat": {
            "launcherLiveTvTitle": {"Data": "XXX"},
            "launcherLiveTv_Top": {
                "Data": {
                    "launcherLiveTv_top_info": {"Data": "117 BBC"},
                    "launcherLiveTv_top_img": {"Data": ""},
                    "launcherLiveTv_ContentOem":{"Data":""}
                }
            },
            "launcherLiveTv_item0": {
                "Data": {
                    "launcherLiveTv_item_img0": {"Data": "../../launcher/img/livetv/ic_hdmi1_normal.png"},
                    "launcherLiveTv_item_info0": {"Data": "HDMI1"},
                    "launcherLiveTv_item_line0": {"Data": ""}
                }
            },
            "launcherLiveTv_item1": {
                "Data": {
                    "launcherLiveTv_item_img1": {"Data": "../../launcher/img/livetv/ic_hdmi2_normal.png"},
                    "launcherLiveTv_item_info1": {"Data": "HDMI2"},
                    "launcherLiveTv_item_line1": {"Data": ""}
                }
            },
            "launcherLiveTv_item2": {
                "Data": {
                    "launcherLiveTv_item_img2": {"Data": "../../launcher/img/livetv/ic_hdmi3_normal.png"},
                    "launcherLiveTv_item_info2": {"Data": "HDMI3"},
                    "launcherLiveTv_item_line2": {"Data": ""}
                }
            }

        },
        "generateDataFunction": function (dat, datFormat) {
            //此处根据给定的数据格式，参考DataFormat，生成未替换id的pagedata
            var tempData = {};
            tempData = $.extend(tempData, datFormat);
            //debugE("live generateDataFunction!!!!");
            var data = OEMGetLauncherLiveTvData();
            tempData.launcherLiveTvTitle.Data = data.title;
            tempData.launcherLiveTv_Top.Data.launcherLiveTv_ContentOem.Data = data.content;
            tempData.launcherLiveTv_Top.Data.launcherLiveTv_top_info.Data = data.top_info;
            tempData.launcherLiveTv_Top.Data.launcherLiveTv_top_img.Data = data.top_img;
            tempData.launcherLiveTv_item0.Data.launcherLiveTv_item_img0.Data = data.list[0].img;
            tempData.launcherLiveTv_item0.Data.launcherLiveTv_item_info0.Data = data.list[0].info;
            tempData.launcherLiveTv_item0.Data.launcherLiveTv_item_line0.Data = data.list[0].line;
            tempData.launcherLiveTv_item1.Data.launcherLiveTv_item_img1.Data = data.list[1].img;
            tempData.launcherLiveTv_item1.Data.launcherLiveTv_item_info1.Data = data.list[1].info;
            tempData.launcherLiveTv_item1.Data.launcherLiveTv_item_line1.Data = data.list[1].line;
            tempData.launcherLiveTv_item2.Data.launcherLiveTv_item_img2.Data = data.list[2].img;
            tempData.launcherLiveTv_item2.Data.launcherLiveTv_item_info2.Data = data.list[2].info;
            tempData.launcherLiveTv_item2.Data.launcherLiveTv_item_line2.Data = data.list[2].line;
            return tempData;
        },
        "initData": "",
        "onCreate": "",
        "onOpen": "",
        "onClose": "",
        "onDestroy": "",
        "pageData": {},
        "handler": {
        }
    }
]