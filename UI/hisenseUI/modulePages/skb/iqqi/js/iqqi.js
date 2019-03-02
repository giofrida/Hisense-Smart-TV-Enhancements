/**
 * Created by liutiantian on 14-11-10.
 */

function getIQQIPageData(page) {
    page.CaE = [
        //{
        //    "id": "iqqiIcon",
        //    "description": "IQQI图标显示区域",
        //    "CaEType": "div",
        //    "classes": {},
        //    "nav": {"downTo": "ControlLineKey_5"}
        //},
        {
            "id": "iqqiInputContainer",
            "description": "容器控件",
            "CaEType": "Container",
            "firstFocusId": "iqqiPosition",
            "classes": {"normal": "iqqiInputContainer"},
            "nav": {},
            "CaE": [
                {
                    "id": "iqqiPosition",
                    "description": "IQQI输入框定位控件，解决超长时padding不起作用的问题",
                    "CaEType": "Container",
                    "firstFocusId": "iqqiInput",
                    "classes": {"normal": "iqqiPosition_Normal"},
                    "nav": {},
                    "CaE": [
                        {
                            "id": "iqqiInput",
                            "description": "输入控件",
                            "classes": {},
                            "nav": {},
                            "CaEType": "div",
                            "inputAttr": "text",
                            "enableHtml": true,
                            "handler": {
                                "aftEnterHandler": "exitIQQI",
                                "befUpHandler": "iqqiInputBeforeUpHandler",
                                "aftUpHandler": "iqqiInputAfterUpHandler",
                                "befDownHandler": "iqqiInputBefDownHandler",
                                "befLeftHandler": "iqqiPageKeyRedHandler",
                                "befRightHandler": "iqqiPageKeyGreenHandler"
                            }
                        }
                    ]
                }
            ]
        },
        //{
        //    "id": "iqqiInput",
        //    "description": "输入控件",
        //    "classes": {},
        //    "nav": {},
        //    "CaEType": "input",
        //    "inputAttr": "text",
        //    "handler": {
        //        "aftEnterHandler": "exitSKB"
        //    }
        //},
        {
            "id": "iqqiImagineContent",
            "description": "联想内容外层容器",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "befDownHandler": "iqqiImagineContentBefDownHandler",
                "befUpHandler": "iqqiImagineContentBefUpHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler"
            }
        },
        /*
        {
            "id": "iqqiImagineContent",
            "description": "联想内容外层容器",
            "CaEType": "NavigationBar",
            "classes": {},
            "handler": {
                "befEnterHandler": "iqqiImagineContentBefEnterHandler",
                "aftEnterHandler": "iqqiImagineContentAftEnterHandler",
                "befRightHandler": "iqqiImagineContentBefRightHandler",
                "aftRightHandler": "iqqiImagineContentAftRightHandler",
                "befLeftHandler": "iqqiImagineContentBefLeftHandler",
                "befUpHandler": "iqqiImagineContentBefUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftLeftHandler": "iqqiImagineContentAftLeftHandler"
            },
            "nav": {},
            "oriCaE": [
                {
                    "id": "iqqiImagineContentItem_Content",
                    "description": "显示输入法联想数据项的元素",
                    "CaEType": "div"
                },
                {
                    "id": "iqqiImagineContentItem_Divider",
                    "description": "联想数据之间的分割线",
                    "CaEType": "div"
                }
            ],
            "NavigationBarConfig": {
                "NavigationBarDataItem": [ "iqqiImagineContentItem_Content","iqqiImagineContentItem_Divider"],
                "SelectedIndex": 0,
                "DataSelectedIndex": 0,
                "ArrowFlag": false
            }
        },
        */
        {
            "id": "FirstLineKey_0",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_1",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_2",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_3",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_4",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_5",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_6",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_7",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_8",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_9",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_10",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_11",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_12",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_13",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FirstLineKey_14",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_0",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_1",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_2",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_3",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_4",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_5",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_6",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_7",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_8",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_9",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_10",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_11",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_12",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_13",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "SecondLineKey_14",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_0",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_1",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_2",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_3",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_4",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_5",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_6",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_7",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_8",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_9",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_10",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_11",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_12",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_13",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ThirdLineKey_14",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_0",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_1",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_2",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_3",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_4",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_5",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_6",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_7",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_8",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_9",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_10",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_11",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_12",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_13",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "FourthLineKey_14",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_0",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_1",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_2",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_3",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_4",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_5",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_6",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_7",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_8",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_9",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_10",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_11",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_12",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_13",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        },
        {
            "id": "ControlLineKey_14",
            "CaEType": "div",
            "classes": {},
            "nav": {},
            "handler": {
                "aftEnterHandler": "iqqiInputAndCursor",
                "aftRightHandler": "iqqiKeyAftHandler",
                "aftLeftHandler": "iqqiKeyAftHandler",
                "befUpHandler": "iqqiKeyBeforeUpHandler",
                "befDownHandler": "iqqiKeyBefDownHandler",
                "aftDownHandler": "iqqiAftKeyDownHandler",
                "befLeftHandler": "iqqiKeyBeforeLeftHandler",
                "befRightHandler": "iqqiKeyBeforeRightHandler"
            }
        }
    ];

    var iqqiPageData = {
        //"iqqiImagineContent": {
        //    "Data": [
        //
        //    ],
        //    "SelectedIndex": 0,
        //    "DataSelectedIndex": 0
        //},

        "iqqiInputContainer": {
            "Data": {
                "iqqiPosition": {
                    "Data": {
                        "iqqiInput": {"Data": ""}
                    }
                }
            }
        },
        //"iqqiInput": {"Data": ""},

        "FirstLineKey_0": {"Data": ""},
        "FirstLineKey_1": {"Data": ""},
        "FirstLineKey_2": {"Data": ""},
        "FirstLineKey_3": {"Data": ""},
        "FirstLineKey_4": {"Data": ""},
        "FirstLineKey_5": {"Data": ""},
        "FirstLineKey_6": {"Data": ""},
        "FirstLineKey_7": {"Data": ""},
        "FirstLineKey_8": {"Data": ""},
        "FirstLineKey_9": {"Data": ""},
        "FirstLineKey_10": {"Data": ""},
        "FirstLineKey_11": {"Data": ""},
        "FirstLineKey_12": {"Data": ""},
        "FirstLineKey_13": {"Data": ""},
        "FirstLineKey_14": {"Data": ""},
        "SecondLineKey_0": {"Data": ""},
        "SecondLineKey_1": {"Data": ""},
        "SecondLineKey_2": {"Data": ""},
        "SecondLineKey_3": {"Data": ""},
        "SecondLineKey_4": {"Data": ""},
        "SecondLineKey_5": {"Data": ""},
        "SecondLineKey_6": {"Data": ""},
        "SecondLineKey_7": {"Data": ""},
        "SecondLineKey_8": {"Data": ""},
        "SecondLineKey_9": {"Data": ""},
        "SecondLineKey_10": {"Data": ""},
        "SecondLineKey_11": {"Data": ""},
        "SecondLineKey_12": {"Data": ""},
        "SecondLineKey_13": {"Data": ""},
        "SecondLineKey_14": {"Data": ""},
        "ThirdLineKey_0": {"Data": ""},
        "ThirdLineKey_1": {"Data": ""},
        "ThirdLineKey_2": {"Data": ""},
        "ThirdLineKey_3": {"Data": ""},
        "ThirdLineKey_4": {"Data": ""},
        "ThirdLineKey_5": {"Data": ""},
        "ThirdLineKey_6": {"Data": ""},
        "ThirdLineKey_7": {"Data": ""},
        "ThirdLineKey_8": {"Data": ""},
        "ThirdLineKey_9": {"Data": ""},
        "ThirdLineKey_10": {"Data": ""},
        "ThirdLineKey_11": {"Data": ""},
        "ThirdLineKey_12": {"Data": ""},
        "ThirdLineKey_13": {"Data": ""},
        "ThirdLineKey_14": {"Data": ""},
        "FourthLineKey_0": {"Data": ""},
        "FourthLineKey_1": {"Data": ""},
        "FourthLineKey_2": {"Data": ""},
        "FourthLineKey_3": {"Data": ""},
        "FourthLineKey_4": {"Data": ""},
        "FourthLineKey_5": {"Data": ""},
        "FourthLineKey_6": {"Data": ""},
        "FourthLineKey_7": {"Data": ""},
        "FourthLineKey_8": {"Data": ""},
        "FourthLineKey_9": {"Data": ""},
        "FourthLineKey_10": {"Data": ""},
        "FourthLineKey_11": {"Data": ""},
        "FourthLineKey_12": {"Data": ""},
        "FourthLineKey_13": {"Data": ""},
        "FourthLineKey_14": {"Data": ""},
        "ControlLineKey_0": {"Data": ""},
        "ControlLineKey_1": {"Data": ""},
        "ControlLineKey_2": {"Data": ""},
        "ControlLineKey_3": {"Data": ""},
        "ControlLineKey_4": {"Data": ""},
        "ControlLineKey_5": {"Data": ""},
        "ControlLineKey_6": {"Data": ""},
        "ControlLineKey_7": {"Data": ""},
        "ControlLineKey_8": {"Data": ""},
        "ControlLineKey_9": {"Data": ""},
        "ControlLineKey_10": {"Data": ""},
        "ControlLineKey_11": {"Data": ""},
        "ControlLineKey_12": {"Data": ""},
        "ControlLineKey_13": {"Data": ""},
        "ControlLineKey_14": {"Data": ""},

        "operateData": {
            "firstFocusId": ["FirstLineKey_0", "FirstLineKey_3"],
            "curLang": "ENG",
            "curMode": IQQIUtils.MODE_LANGUAGE,
            "curLangRtl": false,
            "curLangArray": ["ENG", "GER", "ITA", "POR", "SPA", "FRA", "NOR", "SWE", "DAN", "FIN", "NUM1", "NUM2", "GRE"],
            "rows": ["FirstLineKey", "SecondLineKey", "ThirdLineKey", "FourthLineKey", "ControlLineKey"],
            "curFocusRow": 0,
            "curFocusCol": 0,
            "browser": "presto",
            "default_browser": "presto",
            "screen": "1080P",
            "iqqiData": {
                "ENG": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "numbers": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "NUM1": {
                    "FirstLineKey": ["_", "&", "+", "1", "2", "3", "$", "#", "@"],
                    "SecondLineKey": ["\\", "^", "-", "4", "5", "6", "!", "\"", "'"],
                    "ThirdLineKey": ["<", ">", "*", "7", "8", "9", "?", ",", ";"],
                    "FourthLineKey": ["(", ")", "/", "=", "0", ".", "%", "~", ": "],
                    "ControlLineKey": ["", "1/2", "ABC", "", "", ""],
                    "display": {
                        "FirstLineKey": [4, 4, 4, 1, 1, 1, 4, 4, 4],
                        "SecondLineKey": [4, 4, 4, 1, 1, 1, 4, 4, 4],
                        "ThirdLineKey": [4, 4, 4, 1, 1, 1, 4, 4, 4],
                        "FourthLineKey": [4, 4, 4, 4, 1, 4, 4, 4, 4],
                        "ControlLineKey": [5, 7, 7, 8, 9, 10]
                    },
                    "FAS": {
                        "FirstLineKey": ["_", "&", "+", "1", "2", "3", "ومان", "#", "@"],
                        "SecondLineKey": ["\\", "^", "-", "4", "5", "6", "!", "\"", "'"],
                        "ThirdLineKey": ["<", ">", "*", "7", "8", "9", "؟", "،", "ـ"],
                        "FourthLineKey": ["(", ")", "/", "=", "0", "؛", "٪", "~", ": "],
                        "ControlLineKey": ["", "1/2", "ABC", "", "", ""]
                    }
                },
                "NUM2": {
                    "FirstLineKey": ["§", "`", "|", "•", "√", "+", "÷", "×" , "{", "}"],
                    "SecondLineKey": ["¥", "£", "¢", "€", "º", "™", "®", "©", "[", "]"],
                    "ThirdLineKey": ["℃", "℉", "²", "³", "α", "β", "γ", "δ", "ε"],
                    "FourthLineKey": ["(^_^)", "(^o^)", "(Q_Q)", "(T_T)", "(?_?)", "(^_~)"],
                    "ControlLineKey": ["", "2/2", "ABC", "", "", ""],
                    "display": {
                        "FirstLineKey": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                        "SecondLineKey": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                        "ThirdLineKey": [4, 4, 4, 4, 4, 4, 4, 4, 4],
                        "FourthLineKey": [4, 4, 4, 4, 4, 4],
                        "ControlLineKey": [5, 7, 7, 8, 9, 10]
                    }
                },
                "FRA": {
                    "FirstLineKey": ["é", "\"", "\'", "(", "-", "è", "_", "ç", "à", ")"],
                    "SecondLineKey": ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^"],
                    "ThirdLineKey": ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù"],
                    "FourthLineKey": ["", "w", "x", "c", "v", "b", "n", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "layout_new": true,
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P", "¨"],
                        "ThirdLineKey": ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
                        "FourthLineKey": ["", "W", "X", "C", "V", "B", "N", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""],
                        "display": {
                            "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                            "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                            "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 4, 4],
                            "ControlLineKey": [5, 6, 7, 8, 9, 10]
                        }
                    },
                    "display": {
                        "FirstLineKey": [2, 4, 4, 4, 4, 2, 4, 2, 2, 4],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "SPA": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "ú", "ü"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "á"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", "é", "í", "ó"],
                    "ControlLineKey": ["", "", "123", "", ",", ".", "", ""],
                    "upper": {
                        "layout_new": true,
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ú", "Ü"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "Á"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", "É", "Í", "Ó"],
                        "ControlLineKey": ["", "", "123", "", ",", ".", "¿", "", ""],
                        "display": {
                            "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                            "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "ControlLineKey": [5, 6, 7, 8, 4, 4, 4, 9, 10]
                        }
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ControlLineKey": [5, 6, 7, 8, 4, 4, 9, 10]
                    }
                },
                "POR": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "^"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "´"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç", "`"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", ".", "~"],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "^"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "´"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç", "`"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "~"],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "ARA": {
                    "FirstLineKey": ["ذ", "ض", "ص", "ث", "ق", "ف", "غ", "ع", "خ", "ح", "ج", "د"],
                    "SecondLineKey": ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط", "،"],
                    "FourthLineKey": ["", "ئ", "ر", "لا", "ى", "ة", "ه", "و", "ز", "ظ", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "numbers": ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
                    "upper": {
                        "layout_new": true,
                        "FirstLineKey": ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
                        "SecondLineKey": ["ّ", "َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "ـ"],
                        "FourthLineKey": ["", "ء", "ؤ", "لأ", "لإ", "لآ", "أ", "إ", "آ", "؛", "؟"],
                        "ControlLineKey": ["", "", "123", "", "", ""],
                        "display": {
                            "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                            "SecondLineKey": [11, 11, 11, 11, 11, 11, 11, 11, 4],
                            "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                            "ControlLineKey": [5, 6, 7, 8, 9, 10]
                        }
                    },
                    "display": {
                        "FirstLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "RUS": {
                    "FirstLineKey": ["ѐ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
                    "ThirdLineKey": ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
                    "FourthLineKey": ["", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["Ё", "1", "2", "3", "4", "5", "6", "7" ,"8", "9", "0"],
                        "SecondLineKey": ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "ъ"],
                        "ThirdLineKey": ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
                        "FourthLineKey": ["", "Я", "Ч", "С", "М", "И", "Т", "ь", "Б", "Ю"],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "FAS": {
                    "FirstLineKey": ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
                    "SecondLineKey": ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ"],
                    "ThirdLineKey": ["ش", "س", "ی", "ب", "ل", "آ", "ا", "ت", "ن", "م", "ک", "گ", "،"],
                    "FourthLineKey": ["ي", "ئ", "ظ", "ط", "ژ", "ز", "ر", "ذ", "د", "پ", "و", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "numbers": ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "FourthLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "HEB": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["׳", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ"],
                    "ThirdLineKey": ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף"],
                    "FourthLineKey": ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [4, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "MSA": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8" ,"9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "CHI": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    "FourthLineKey": ["z", "x", "c", "v", "b", "n", "m", "，", "。"],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "ZHO": {
                    "FirstLineKey": ["…", "ㄅ", "ㄉ", "ˇ", "ˋ", "ㄓ", "ˊ", "˙", "ㄚ", "ㄞ", "ㄢ", "，"],
                    "SecondLineKey": ["：", "ㄆ", "ㄊ", "ㄍ", "ㄐ", "ㄔ", "ㄗ", "一", "ㄛ", "ㄟ", "ㄣ", "。"],
                    "ThirdLineKey": ["、", "ㄇ", "ㄋ", "ㄎ", "ㄑ", "ㄕ", "ㄘ", "ㄨ", "ㄜ", "ㄠ", "ㄤ", "！"],
                    "FourthLineKey": ["；", "ㄈ", "ㄌ", "ㄏ", "ㄒ", "ㄖ", "ㄙ", "ㄩ", "ㄝ", "ㄡ", "ㄥ", "？"],
                    "ControlLineKey": ["", "", "123", "", "ㄦ", "", "完成"],
                    "display": {
                        "FirstLineKey": [4, 2, 2, 11, 11, 2, 11, 11, 2, 2, 2, 4],
                        "SecondLineKey": [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ThirdLineKey": [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "FourthLineKey": [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ControlLineKey": [5, 6, 7, 8, 2, 9, 10]
                    }
                },
                "THA": {
                    "FirstLineKey": ["ๅ", "ๆ", "ภ", "ถ", "ุ", "ึ", "ค", "ต", "จ", "ข", "ช"],
                    "SecondLineKey": ["ไ", "ำ", "พ", "ะ", "ั", "ี", "ร", "น", "ย", "บ", "ล"],
                    "ThirdLineKey": ["ฟ", "ห", "ก", "ด", "เ", "้", "่", "า", "ส", "ว", "ง"],
                    "FourthLineKey": ["", "ผ", "ป", "แ", "อ", "ิ", "ื", "ท", "ม", "ใ", "ฝ"],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "numbers": ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
                    "display": {
                        "FirstLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    },
                    "upper": {
                        "layout_new": true,
                        "layout_new_cae": "THA_SHIFT",
                        "FirstLineKey": ["๑", "๒", "๓", "๔", "ู", "฿", "๕", "๖", "๗", "๘", "๙"],
                        "SecondLineKey": ["๐", "ฎ", "ฑ", "ธ", "ํ", "๊", "ณ", "ฯ", "ญ", "ฐ"],
                        "ThirdLineKey": ["ฤ", "ฆ", "ฏ", "โ", "ฌ", "็", "๋", "ษ", "ศ", "ซ"],
                        "FourthLineKey": ["", "ฉ", "ฮ", "ฺ", "์", "ฒ", "ฬ", "ฦ", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""],
                        "display": {
                            "FirstLineKey": [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
                            "SecondLineKey": [1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4],
                            "ControlLineKey": [5, 6, 7, 8, 9, 10]
                        }
                    }
                },
                "UKR": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
                    "ThirdLineKey": ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
                    "FourthLineKey": ["", "ґ", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7" ,"8", "9", "0"],
                        "SecondLineKey": ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ї"],
                        "ThirdLineKey": ["Ф", "І", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Є"],
                        "FourthLineKey": ["", "Ґ", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "TUR": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "ğ", "ü"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i", ","],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", "ö", "ç", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ", ","],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "SWE": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "SLK": {
                    "FirstLineKey": ["ľ", "š", "č", "ť", "ž", "ý", "á", "í", "é", "ň"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ú", "ä"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ô"],
                    "FourthLineKey": ["", "y", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["Ľ", "Š", "Č", "Ť", "Ž", "Ý", "Á", "Í", "É", "Ň"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ú", "Ä"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ô"],
                        "FourthLineKey": ["", "Y", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "POL": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "VIE": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "NOR": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ø", "æ"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ø", "Æ"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "ITA": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ì"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "è"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "à"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", ".", "ù"],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Ì"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "È"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ò", "À"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "Ù"],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "IND": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "HUN": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ö", "ü", "ó"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "ő", "ú", "ű"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "é", "á"],
                    "FourthLineKey": ["", "í", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Ö", "Ü", "Ó"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ő", "Ú", "Ű"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "É", "Á"],
                        "FourthLineKey": ["", "Í", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "HIN": {
                    "FirstLineKey": ["ॊ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ृ"],
                    "SecondLineKey": ["ौ", "ै", "ा", "ी", "ू", "ब", "ह", "ग", "द", "ज", "ड", "़"],
                    "ThirdLineKey": ["ो", "े", "्", "ि", "ु", "प", "र", "क", "त", "च", "ट", "ॉ"],
                    "FourthLineKey": ["", "ॆ", "ं", "म", "न", "व", "ल", "स", "य", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "layout_new": true,
                        "FirstLineKey": ["ऒ", "ऍ", "ॅ", "्र", "र्", "ज्ञ", "त्र", "क्ष", "श्र", "-", "ः", "ऋ"],
                        "SecondLineKey": ["औ", "ऐ", "आ", "ई", "ऊ", "भ", "ङ", "घ", "ध", "झ", "ढ", "ञ"],
                        "ThirdLineKey": ["ओ", "ए", "अ", "इ", "उ", "फ", "ऱ", "ख", "थ", "छ", "ठ", "ऑ"],
                        "FourthLineKey": ["", "ऎ", "ँ", "ण", "ऩ", "ऴ", "ळ", "श", "ष", "।", "य़"],
                        "ControlLineKey": ["", "", "123", "", "", ""],
                        "display": {
                            "FirstLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                            "ControlLineKey": [5, 6, 7, 8, 9, 10]
                        }
                    },
                    "display": {
                        "FirstLineKey": [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "DEU": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ß"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "å"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
                    "FourthLineKey": ["", "y", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "SS"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Å"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
                        "FourthLineKey": ["", "Y", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "FIN": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "DAN": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "æ", "ø"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Æ", "Ø"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "CES": {
                    "FirstLineKey": ["ě", "š", "č", "ř", "ž", "ý", "á", "í", "é"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ú"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ů"],
                    "FourthLineKey": ["", "y", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["Ě", "Š", "Č", "Ř", "Ž", "Ý", "Á", "Í", "É"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ú"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ů"],
                        "FourthLineKey": ["", "Y", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "BUL": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "і", "v"],
                    "SecondLineKey": ["ы", "у", "е", "и", "ш", "щ", "к", "с", "д", "з", "ц"],
                    "ThirdLineKey": ["ь", "я", "а", "о", "ж", "г", "т", "н", "в", "м", "ч"],
                    "FourthLineKey": ["", "ю", "й", "ъ", "э", "ф", "х", "п", "р", "л", "б", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "І", "V"],
                        "SecondLineKey": ["Ы", "У", "Е", "И", "Ш", "Щ", "К", "С", "Д", "З", "Ц"],
                        "ThirdLineKey": ["Ь", "Я", "А", "О", "Ж", "Г", "Т", "Н", "В", "М", "Ч"],
                        "FourthLineKey": ["", "Ю", "Й", "Ъ", "Э", "Ф", "Х", "П", "Р", "Л", "Б", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "MYA": {
                    "FirstLineKey": ["၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉", "၀"],
                    "SecondLineKey": ["ဆ", "တ", "န", "မ", "အ", "ပ", "က", "င", "သ", "စ"],
                    "ThirdLineKey": ["ေ", "ျ", "ိ", "်", "ါ", "့", "ြ", "ု", "ူ", "း"],
                    "FourthLineKey": ["ခ", "ဖ", "ထ", "ခ", "လ", "ဘ", "ည", "ာ", "၊", "။"],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "numbers": ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
                    "second": {
                        "layout_new": true,
                        "FirstLineKey": ["ဎ", "ဍ", "ဋ", "ရ", "ဏ", "ဧ", "ဟ", "ဩ", "ဪ", "၏"],
                        "SecondLineKey": ["ဈ", "ဝ", "ဣ", "၎", "ဤ", "၌", "ဥ", "၍", "ဿ", "."],
                        "ThirdLineKey": ["ဗ", "ှ", "ီ", "္", "ွ", "ံ", "ဲ", "ဒ", "ဓ", "ဂ"],
                        "FourthLineKey": ["က", "ဇ", "ဌ", "ဃ", "ဠ", "ယ", "ဉ", "ဦ", "၊", "။"],
                        "ControlLineKey": ["", "", "123", "", "", ""],
                        "display": {
                            "FirstLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                            "SecondLineKey": [2, 2, 2, 4, 2, 4, 2, 4, 2, 4],
                            "ThirdLineKey": [2, 4, 4, 4, 4, 4, 4, 2, 2, 2],
                            "FourthLineKey": [13, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                            "ControlLineKey": [5, 6, 7, 8, 9, 10]
                        }
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                        "FourthLineKey": [13, 2, 2, 2, 2, 2, 2, 4, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "UZB": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    "SecondLineKey": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    "ThirdLineKey": ["a", "s", "d", "f", "g", "h", "j", "k", "l", "'"],
                    "FourthLineKey": ["", "z", "x", "c", "v", "b", "n", "m", ",", "."],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        "SecondLineKey": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        "ThirdLineKey": ["A", "S", "D", "F", "G", "H", "J", "K", "L", "'"],
                        "FourthLineKey": ["", "Z", "X", "C", "V", "B", "N", "M", ",", "."],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "SecondLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                },
                "GRE": {
                    "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "@"],
                    "SecondLineKey": [";", "ς", "ε", "ρ", "τ", "υ", "θ", "ι", "ο", "π", "-"],
                    "ThirdLineKey": ["σ", "δ", "d", "φ", "γ", "η", "ξ", "κ", "λ", "΄΄", "~"],
                    "FourthLineKey": ["", "ζ", "χ", "ψ", "ω", "β", "ν", "μ", ",", ".", "/"],
                    "ControlLineKey": ["", "", "123", "", "", ""],
                    "upper": {
                        "FirstLineKey": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "@"],
                        "SecondLineKey": [":", "#", "E", "Ρ", "T", "Y", "Θ", "Ι", "Ο", "Π", "-"],
                        "ThirdLineKey": ["A", "Σ", "Δ", "Φ", "Γ", "H", "Ξ", "K", "Λ", "΄΄", "~"],
                        "FourthLineKey": ["", "Z", "X", "Ψ", "Ω", "B", "N", "M", ",", ".", "/"],
                        "ControlLineKey": ["", "", "123", "", "", ""]
                    },
                    "display": {
                        "FirstLineKey": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
                        "SecondLineKey": [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
                        "ThirdLineKey": [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
                        "FourthLineKey": [3, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4],
                        "ControlLineKey": [5, 6, 7, 8, 9, 10]
                    }
                }
            },
            "currentImagineRoot": "", // if you have enough time, please delete this property, make its logic within InputManager and IQQIImagineUL.
            "isShiftMode": false,
            "isCapsMode": false,
            "myaPageNum": undefined,
            "shouldUseCaps": false,
            "needRewrite": true,
            "imagineUl": null,
            "IQQINative": null,
            "InputManager": null,
            "IQQIConfig": null,
            "IQQIUtils": null,
            "lanSwitchDialog": null,
            "drained": false
        },

        rewrite: iqqiDataRewrite
    };

    return iqqiPageData;
}

function iqqiInputAndCursor(opeData) {
    if(this.event) {
        this.event.preventDefault();
    }
    try {
        // var method = "iqqiInputAndCursor";
        if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
            opeData.lanSwitchDialog.onKeyEnterDown();
            return true;
        }

        var responseType = iqqiGetResponseType(opeData, this.id);
        var content = iqqiGetContent(opeData, this.id);
        // iqqiInfoLog(opeData, method, "show current response type: " + responseType);
        if(opeData.isShiftMode && responseType != IQQI_RESPONSE_TYPE_SHIFT) {
            opeData.isShiftMode = false;
            opeData.shouldUseCaps = true;
            if(opeData.isCapsMode == false) {
                if(!!opeData.iqqiData[opeData.curLang].upper.layout_new) {
                    iqqiRewrite.call(this, this.id, true, false);
                }
                else {
                    iqqiRewrite.call(this, this.id, false, false);
                }
            }
        }

        switch(responseType) {
            case IQQI_RESPONSE_TYPE_UNDEFINED:
                // iqqiInfoLog(opeData, method, "there is nothing to do for id " + this.id);
                return;
            case IQQI_RESPONSE_TYPE_NUM:
                iqqiNum(this.id, this.page, opeData, content);
                break;
            case IQQI_RESPONSE_TYPE_WORD:
                iqqiWord(this, this.id, this.page, opeData, content);
                break;
            case IQQI_RESPONSE_TYPE_SHIFT:
                iqqiShift.call(this, this.page, opeData, false);
                break;
            case IQQI_RESPONSE_TYPE_SYMBOL:
                iqqiPunc.call(this, this.id, this.page, opeData, content);
                break;
            case IQQI_RESPONSE_TYPE_ESC:
                exitIQQINotSave();
                break;
            case IQQI_RESPONSE_TYPE_LANSWITCH:
                iqqiLanSwitch.call(this, this.page, opeData);
                break;
            case IQQI_RESPONSE_TYPE_NUMSWITCH:
                iqqiNumSwitch.call(this, this.id, this.page, opeData);
                break;
            case IQQI_RESPONSE_TYPE_WHITESPACE:
                iqqiWhiteSpace(this.page, opeData);
                break;
            case IQQI_RESPONSE_TYPE_BACKSPACE:
                iqqiBackSpace(this, this.id, this.page, opeData);
                break;
            case IQQI_RESPONSE_TYPE_ENTER:
                iqqiEnter(this.page, opeData);
                break;
            case IQQI_RESPONSE_TYPE_MYA_PAGE_SCROLL:
                iqqiMyaPageScroll.call(this, content);
                break;
            case IQQI_RESPONSE_TYPE_SOUND_LEVEL:
                iqqiNotCertainInput.call(this, content);
                break;
        }
        opeData.shouldUseCaps = false;
    }
    catch(ex) {
        iqqiErrorNewLog("iqqiInputAndCursor", "show error happened: " + ex, ex);
    }
}

function iqqiLanSwitch(page, opeData) {
    if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
        iqqiInfoNewLog("iqqiLanSwitch", "only english is supported in password mode.");
        return;
    }
    opeData.isShiftMode = false;
    opeData.isCapsMode = false;

    opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
    opeData.InputManager.commit();
    opeData.currentImagineRoot = "";

    if(opeData.lanSwitchDialog == null) {
        opeData.lanSwitchDialog = new IQQILanSwitchDialog("iqqi_lan_switch_page", opeData.browser, opeData.screen, opeData.curLang, opeData.curLangArray, undefined, "iqqi_lan_switch_item", "iqqi_lan_switch_item_selector", "iqqi_lan_switch_item_label", function(lan) {
            opeData.curLang = lan.code;
            if(!!opeData.curLang) {
                opeData.curMode = IQQIUtils.MODE_LANGUAGE;
                if(tv) {
                    opeData.IQQIConfig.IQQIConfigSetPropertyToFile(IQQIConfig.KEY_SYSTEM_LANGUAGE, opeData.curLang);
                }
                if(opeData.curLang != "MYA") {
                    delete opeData.myaPageNum;
                }
                iqqiRewrite.call(this, "ControlLineKey_1", true, true);
            }
        }.bind(this));
    }
    var market = !!hiWebOsFrame["getCurrentArea"] ? hiWebOsFrame["getCurrentArea"].call(this.page) : "EU";
    var area = !!hiWebOsFrame["getCurrentSubArea"] ? hiWebOsFrame["getCurrentSubArea"].call(this.page) : undefined;
    opeData.lanSwitchDialog.setLans(opeData.IQQIConfig.IQQIConfigGetLanguageList(opeData, market, area), opeData.browser, opeData.screen, opeData.curLang);
    opeData.InputManager.releaseFocus();
    opeData.lanSwitchDialog.show(parseInt(document.getElementById(this.page.id).style.zIndex) + 12);
}

function iqqiNumSwitch(id, page, opeData) {
    opeData.isShiftMode = false;
    opeData.isCapsMode = false;
    var ele = document.getElementById(id);
    var hiFocusId = "FirstLineKey_0";
    switch(ele.innerHTML) {
        case "123":
            hiFocusId = "ControlLineKey_2";
            opeData.curMode = IQQIUtils.MODE_NUM1;
            break;
        case "1/2":
            hiFocusId = "ControlLineKey_1";
            opeData.curMode = IQQIUtils.MODE_NUM2;
            break;
        case "ABC":
            opeData.curMode = IQQIUtils.MODE_LANGUAGE;
            hiFocusId = "ControlLineKey_2";
            break;
        case "2/2":
            hiFocusId = "ControlLineKey_1";
            opeData.curMode = IQQIUtils.MODE_NUM1;
            break;
    }
    opeData.currentImagineRoot = "";
    iqqiInfoNewLog("iqqiNumSwitch", "show inputAttr: " + page.getCaE("iqqiInput").inputAttr);

    iqqiRewrite.call(this, hiFocusId, true, true);

    if(("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) == false) {
        opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
    }
}

function iqqiAdaptDom(page, curLang, mode) {
    var opeData = page.operateData;
    if(!curLang) {
        curLang = IQQIUtils.getSystemLanguage(opeData);
    }
    if(!mode) {
        mode = IQQIUtils.MODE_LANGUAGE;
    }

    if(typeof adaptIqqiHead != "function" || iqqiAdaptDom.initialized == undefined) {
        function adaptIqqiHead() {
            if(opeData.InputManager.isPassword()) {
                if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr) {
                    adaptIqqiHead.currentContent = iqqiRootHead_Password;
                }
                else if("password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
                    adaptIqqiHead.currentContent = iqqiRootHead_Password_Text;
                }
                page.getCaE("iqqiPosition").classes.normal = "iqqiPosition_Password_Normal";
            }
            else if(opeData.curLangRtl) {
                adaptIqqiHead.currentContent = iqqiRootHead_RTL;
                page.getCaE("iqqiPosition").classes.normal = "iqqiPosition_Normal";
            }
            else {
                adaptIqqiHead.currentContent = iqqiRootHead;
                page.getCaE("iqqiPosition").classes.normal = "iqqiPosition_Normal";
            }
            return adaptIqqiHead.currentContent;
        }

        function adaptImagineUl(password, lang) {
            if(password) {
                return "";
            }
            return opeData.imagineUl.fetchCurrentContent(opeData.IQQIConfig.IQQIConfigAssertRtl(lang));
        }

        function adaptColorPanel(password, lang) {
            if(password) {
                adaptColorPanel.sLang = IQQIUtils.getSystemLanguage(opeData); // sLang means system language.
                return IQQIUtils.translateControlPanel(opeData, opeData.IQQIConfig.IQQIConfigAssertRtl(adaptColorPanel.sLang) ? iqqiRootTail_RTL : iqqiRootTail, adaptColorPanel.sLang);
            }
            return IQQIUtils.translateControlPanel(opeData, opeData.IQQIConfig.IQQIConfigAssertRtl(lang) ? iqqiRootTail_RTL : iqqiRootTail, lang);
        }

        iqqiAdaptDom.initialized = true;
    }

    opeData.curLang = curLang;
    opeData.curMode = mode;
    opeData.curLangRtl = IQQIUtils.getCurLanguageRtl(opeData);
    opeData.InputManager.setLanguageRtl(opeData.curLangRtl);
    switch(opeData.curMode) {
        case IQQIUtils.MODE_LANGUAGE:
            if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr) {
                page.dom = adaptIqqiHead() + iqqiRootBelly_Password + iqqiPasswordHome + adaptColorPanel(true);
                opeData.imagineUl.ImeType = -1;
                opeData.imagineUl.FirstLiUserInput = false;
                break;
            }
            else if("password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
                page.dom = adaptIqqiHead() + iqqiRootBelly_Password + iqqiPasswordHome + adaptColorPanel(true);
                opeData.imagineUl.ImeType = -1;
                opeData.imagineUl.FirstLiUserInput = false;
                break;
            }
            switch(curLang) {
                case "FRA":
                    opeData.curLang = "FRA";
                    if(opeData.isCapsMode || opeData.isShiftMode) {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiFraHome_Shift + adaptColorPanel(false, opeData.curLang);
                    }
                    else {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiFraHome + adaptColorPanel(false, opeData.curLang);
                    }
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.FRENCH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "SPA":
                    opeData.curLang = "SPA";
                    if(opeData.isCapsMode || opeData.isShiftMode) {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiSpaHome_Shift + adaptColorPanel(false, opeData.curLang);
                    }
                    else {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiSpaHome + adaptColorPanel(false, opeData.curLang);
                    }
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.SPANISH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "POR":
                    opeData.curLang = "POR";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiPorHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.BRAZILIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "GRE":
                    opeData.curLang = "GRE";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiGreHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.GREEK : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "ARA":
                    opeData.curLang = "ARA";
                    if(opeData.isCapsMode || opeData.isShiftMode) {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiAraHome_Shift +adaptColorPanel(false, opeData.curLang);
                    }
                    else {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiAraHome + adaptColorPanel(false, opeData.curLang);
                    }
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.ARABIC : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "RUS":
                    opeData.curLang = "RUS";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiRusHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.RUSSIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "FAS":
                    opeData.curLang = "FAS";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiFasHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.PERSIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "HEB":
                    opeData.curLang = "HEB";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiHebHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.HEBREW : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "MSA":
                    opeData.curLang = "MSA";
                    page.dom = adaptIqqiHead()+ adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiMsaHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.MALAY : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "CHI":
                    opeData.curLang = "CHI";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiChiHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.SIMPLIFIED_CHINESE_PINYIN : -1;
                    opeData.imagineUl.FirstLiUserInput = false;
                    break;
                case "THA":
                    opeData.curLang = "THA";
                    iqqiInfoNewLog("iqqiAdaptDom", "show should caps: " + (opeData.isCapsMode || opeData.isShiftMode));
                    if(opeData.isCapsMode || opeData.isShiftMode) {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiThaHome_Shift + adaptColorPanel(false, opeData.curLang);
                    }
                    else {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiThaHome + adaptColorPanel(false, opeData.curLang);
                    }
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.THAI : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "ZHO":
                    opeData.curLang = "ZHO";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiZhoHome_ZhuYin + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.TRADITIONAL_CHINESE_ZHUYIN : -1;
                    opeData.imagineUl.FirstLiUserInput = false;
                    break;
                case "UKR":
                    opeData.curLang = "UKR";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiUkrHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.UKRIANIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "TUR":
                    opeData.curLang = "TUR";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiTurHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.TURKISH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "SWE":
                    opeData.curLang = "SWE";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiSweHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.SWEDISH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "SLK":
                    opeData.curLang = "SLK";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiSlkHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.SLOVAKIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "POL":
                    opeData.curLang = "POL";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiPolHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.POLISH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "VIE":
                    opeData.curLang = "VIE";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiEnHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.VIETNAMESE : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "NOR":
                    opeData.curLang = "NOR";
                    page.dom = adaptIqqiHead()+ adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiNorHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.NORWEGIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "ITA":
                    opeData.curLang = "ITA";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiItaHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.ITALIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "IND":
                    opeData.curLang = "IND";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiEnHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.INDONESIA : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "HUN":
                    opeData.curLang = "HUN";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiHunHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.HUNGARIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "HIN":
                    opeData.curLang = "HIN";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiHinHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.HINDI : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "DEU":
                    opeData.curLang = "DEU";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiDeuHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.GERMAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "FIN":
                    opeData.curLang = "FIN";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiNorHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.FINNISH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "DAN":
                    opeData.curLang = "DAN";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiNorHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.DANISH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "CES":
                    opeData.curLang = "CES";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiCesHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.CZECH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "BUL":
                    opeData.curLang = "BUL";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiBulHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.BULGARIAN : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "MYA":
                    opeData.curLang = "MYA";
                    if(opeData.myaPageNum == "fourth") {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiMyaHome_Fourth + adaptColorPanel(false, opeData.curLang);
                    }
                    else {
                        page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiMyaHome_New + adaptColorPanel(false, opeData.curLang);
                    }
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.MYANMAR : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                case "UZB":
                    opeData.curLang = "UZB";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly +  iqqiUzbHome + adaptColorPanel(false, opeData.curLang);
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.UZBEK : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
                default:
                    iqqiInfoNewLog("iqqiAdaptDom", "default case enter, show mode: " + mode);
                    page.operateData.curLang = "ENG";
                    page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiEnHome + adaptColorPanel(false, opeData.curLang);

                    page.operateData.needRewrite = true;
                    opeData.imagineUl.ImeType = tv ? imejs.iqqi.ENGLISH : -1;
                    opeData.imagineUl.FirstLiUserInput = true;
                    break;
            }
            break;
        case IQQIUtils.MODE_NUM1:
            if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr) {
                page.dom = iqqiRootHead_Password + iqqiRootBelly_Password + iqqiNum1Home + adaptColorPanel(true);
                opeData.imagineUl.ImeType = -1;
                opeData.imagineUl.FirstLiUserInput = false;
                break;
            }
            else if("password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
                page.dom = iqqiRootHead_Password_Text + iqqiRootBelly_Password + iqqiNum1Home + adaptColorPanel(true);
                opeData.imagineUl.ImeType = -1;
                opeData.imagineUl.FirstLiUserInput = false;
                break;
            }
            page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiNum1Home + adaptColorPanel(false, opeData.curLang);
            opeData.imagineUl.ImeType = -1;
            opeData.imagineUl.FirstLiUserInput = false;
            break;
        case IQQIUtils.MODE_NUM2:
            if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr) {
                page.dom = iqqiRootHead_Password + iqqiRootBelly_Password + iqqiNum2Home + adaptColorPanel(true);
                opeData.imagineUl.ImeType = -1;
                opeData.imagineUl.FirstLiUserInput = false;
                break;
            }
            else if("password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
                page.dom = iqqiRootHead_Password_Text + iqqiRootBelly_Password + iqqiNum2Home + adaptColorPanel(true);
                opeData.imagineUl.ImeType = -1;
                opeData.imagineUl.FirstLiUserInput = false;
                break;
            }
            page.dom = adaptIqqiHead() + adaptImagineUl(undefined, opeData.curLang) + iqqiRootBelly + iqqiNum2Home + adaptColorPanel(false, opeData.curLang);
            opeData.imagineUl.ImeType = -1;
            opeData.imagineUl.FirstLiUserInput = false;
            break;
    }

    opeData.InputManager.setDisplay(iqqiGetCurrentDisplay(opeData));
    opeData.needRewrite = true;
    return curLang;
}

function iqqiWord(ele, id, page, opeData, content) {
    iqqiInfoNewLog("iqqiWord", "show imagine root: " + opeData.currentImagineRoot + "; length: " + opeData.currentImagineRoot.length);
    if("password" == opeData.inputAttr || "password" == opeData.inputMethod) {
        opeData.InputManager.insertValue(content);
        opeData.currentImagineRoot = "";
        return;
    }
    else if("numberpassword" == opeData.inputAttr || "numberpassword" == opeData.inputMethod)  {
        return;
    }
    if(opeData.InputManager.shouldStopImagine(opeData.currentImagineRoot + content, opeData)) {
        opeData.currentImagineRoot = "";
        opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
        return;
    }
    var result = opeData.InputManager.insertImagine(content);
    if(result) {
        if(opeData.currentImagineRoot != result) {
            opeData.currentImagineRoot = result;
            iqqiImagineHandler(ele, id, page, opeData);
        }
    }
}

function iqqiNum(id, page, opeData, content) {
    opeData.currentImagineRoot = "";
    // opeData.originCaretPosition += newAddValue.length;

    var insert = opeData.InputManager.handleSpecialValue(content);

    if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
        opeData.InputManager.insertValue(insert);
        return;
    }
    opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
    opeData.InputManager.insertValue(insert);
}

function iqqiPunc(id, page, opeData, content) {
    opeData.currentImagineRoot = "";
    // opeData.originCaretPosition += newAddValue.length;

    var insert = opeData.InputManager.handleSpecialValue(content);

    if("password" == opeData.inputAttr || "password" == opeData.inputMethod) {
        opeData.InputManager.insertValue(insert);
        return;
    }
    else if("numberpassword" == opeData.inputAttr || "numberpassword" == opeData.inputAttr) {
        return;
    }
    opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
    opeData.InputManager.insertValue(insert);
}

function iqqiMyaPageScroll(content) {
    switch(content) {
        case "က":
            this.page.operateData.myaPageNum = "first";
            break;
        case "ခ":
            this.page.operateData.myaPageNum = "second";
            break;
        case "ဂ":
            this.page.operateData.myaPageNum = "third";
            break;
        case "၁၂":
            this.page.operateData.myaPageNum = "fourth";
            break;
    }
    iqqiRewrite.call(this, this.id, true, false);
}

function iqqiNotCertainInput(content) {
    var opeData = this.page.operateData;
    if(!!opeData.currentImagineRoot) {
        if("password" == opeData.inputAttr || "password" == opeData.inputMethod) {
            opeData.InputManager.insertValue(content);
            opeData.currentImagineRoot = "";
            return;
        }
        else if("numberpassword" == opeData.inputAttr || "numberpassword" == opeData.inputMethod)  {
            return;
        }
        if(opeData.InputManager.shouldStopImagine(opeData.currentImagineRoot + content)) {
            opeData.currentImagineRoot = "";
            opeData.imagineUl.hideUl(this.page.getCaE("iqqiImagineContent"));
            return;
        }
        iqqiImagineHandler(this, this.id, this.page, opeData, false, content);
        return;
    }
    opeData.InputManager.insertValue(content);
}

function iqqiCheckKeyCode(keyCode, opeData) {
    if(opeData.curLangRtl) {
        return (VK_LEFT + VK_RIGHT - keyCode);
    }
    return keyCode;
}

function iqqiKeyAftHandler(opeData) {
    // console.info("iqqi.js, iqqiKeyAftHandler, show currentValue is: " + opeData.currentValue);
    return true;
}

/**
 * 在bef中处理  阻止默认事件
 * @param opeData
 * @returns {boolean}
 */
function iqqiKeyBeforeLeftHandler(opeData) {
    this.event.preventDefault();
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        this.nav.leftTo = "";
        return false;
    }

    if(opeData.curLangRtl && !opeData.drained) {
        opeData.drained = true;
        return iqqiKeyBeforeRightHandler.call(this, opeData);
    }

    opeData.curFocusCol--;
    if(opeData.curFocusCol < 0) {
        for(opeData.curFocusCol = 14; opeData.curFocusCol > 0; opeData.curFocusCol--) {
            var left = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
            if(!!left) {
                if("iqqiLineKeyHidden" == left.className) {
                    continue;
                }
                break;
            }
        }
    }
    var next = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
    if(!!next) {
        var cae = this.page.getCaE(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
        cae.classes.focus = IQQIUtils.formatNewClass(next, "Focus");
    }

    var origin = document.getElementById(this.id);
    if(!!origin) {
        this.classes.normal = IQQIUtils.formatNewClass(origin, "Normal");
        if(opeData.curLangRtl) {
            this.nav.rightTo = next.id;
        }
        else {
            this.nav.leftTo = next.id;
        }
    }

    opeData.drained = false;
}

function iqqiKeyBeforeRightHandler(opeData) {
    this.event.preventDefault();
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        this.nav.rightTo = "";
        return false;
    }

    if(opeData.curLangRtl && !opeData.drained) {
        opeData.drained = true;
        return iqqiKeyBeforeLeftHandler.call(this, opeData);
    }

    opeData.curFocusCol++;
    var next = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
    if(!!next) {
        if("iqqiLineKeyHidden" == next.className) {
            opeData.curFocusCol = 0;
            next = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
        }
        var cae = this.page.getCaE(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
        cae.classes.focus = IQQIUtils.formatNewClass(next, "Focus");

        var origin = document.getElementById(this.id);
        if(!!origin) {
            this.classes.normal = IQQIUtils.formatNewClass(origin, "Normal");
            if(opeData.drained) {
                this.nav.leftTo = next.id;
            }
            else {
                this.nav.rightTo = next.id;
            }
        }
    }

    opeData.drained = false;
}

function iqqiKeyBeforeUpHandler(opeData) {
    this.event.preventDefault();
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        this.nav.upTo = "";
        opeData.lanSwitchDialog.onKeyUpDown();
        return false;
    }

    // var method = "iqqiKeyBeforeUpHandler";
    // iqqiInfoLog(opeData, method, "show this.id.slice(this.id.indexOf(\"_\") + 1) < opeData.pageFirstLineNum: " + (this.id.slice(this.id.indexOf("_") + 1) < opeData.pageFirstLineNum) + ", and this.id: " + this.id);
    var origin = document.getElementById(this.id);
    if(!!origin) {
        if(opeData.curFocusRow == 0) {
            if(!!opeData.imagineUl && opeData.imagineUl.working) {
                //this.page.hiFocus("iqqiImagineContent");
                //opeData.imagineUl.isLeftArrowShow = false;
                //opeData.imagineUl.checkLeftArrow();
                //opeData.imagineUl.handleArrowStatus();
                this.nav.upTo = "iqqiImagineContent";
                this.classes.normal = origin.className.slice(0, -5) + "Normal";
                opeData.imagineUl.setBeginIndex(0);
                opeData.imagineUl.setSelection(0);
            }
            else {
                this.classes.normal = IQQIUtils.formatNewClass(document.getElementById(this.id), "Normal");
                var ccae = this.page.getCaE("iqqiInputContainer");
                var p_cae = this.page.getCaE("iqqiPosition");
                var tcae = this.page.getCaE("iqqiInput");
                this.nav.upTo = "iqqiInput";
                if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
                    ccae.classes.selected = "iqqiInputContainerPassword";
                }
                else {
                    ccae.classes.selected = "iqqiInputContainer";
                }
                p_cae.classes.selected = IQQIUtils.formatNewClass(document.getElementById(p_cae.id), "Focus");
                tcae.classes.focus = IQQIUtils.formatNewClass(document.getElementById(tcae.id), "Focus");
            }
            return true;
        }
        else {
            var x = document.getElementById(this.id).getBoundingClientRect().left;
            var found = false;
            while (found == false) {
                opeData.curFocusRow--;
                if(opeData.curFocusCol == 0) {
                    var fup = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
                    if(!!fup) {
                        if("iqqiLineKeyHidden" == fup.className) {
                            continue;
                        }
                        found = true;
                        break;
                    }
                }
                else {
                    for (opeData.curFocusCol = 0; opeData.curFocusCol < 15; opeData.curFocusCol++) {
                        var up = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
                        if (!!up) {
                            if("iqqiLineKeyHidden" == up.className) {
                                opeData.curFocusCol = 14;
                                break;
                            }
                            var rect = up.getBoundingClientRect();
                            if (x >= rect.left && x <= rect.right) {
                                found = true;
                                break;
                            }
                        }
                    }
                }
            }
            if(found) {
                var tup = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
                var tcae = this.page.getCaE(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
                if(!!tup) {
                    tcae.classes.focus = tup.className.slice(0, -6) + "Focus";
                    this.nav.upTo = tup.id;
                }
                this.classes.normal = origin.className.slice(0, -5) + "Normal";
            }
        }
    }
    return true;
}

function iqqiKeyBefDownHandler(opeData) {
    this.event.preventDefault();
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        this.nav.downTo = "";
        opeData.lanSwitchDialog.onKeyDownDown();
        return false;
    }
    var origin = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
    if(!!origin) {
        var found = false;
        var x = origin.getBoundingClientRect().left;
        while(found == false) {
            opeData.curFocusRow = (opeData.curFocusRow + 1) % 5;
            if(opeData.curFocusCol == 0) {
                var fdown = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
                if(!!fdown) {
                    if("iqqiLineKeyHidden" == fdown.className) {
                        continue;
                    }
                    found = true;
                    break;
                }
            }
            else {
                for(opeData.curFocusCol = 0; opeData.curFocusCol < 15; opeData.curFocusCol++) {
                    var down = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
                    if(!!down) {
                        if("iqqiLineKeyHidden" == down.className) {
                            opeData.curFocusCol = 14;
                            break;
                        }
                        var rect = down.getBoundingClientRect();
                        if(x >= rect.left && x <= rect.right) {
                            found = true;
                            break;
                        }
                    }
                }
            }
        }
        if(found) {
            var tdown = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
            this.classes.normal = origin.className.slice(0, -5) + "Normal";
            this.nav.downTo = tdown.id;

            var tcae = this.page.getCaE(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
            tcae.classes.focus = tdown.className.slice(0, -6) + "Focus";
        }
    }
    return true;
}

function iqqiAftKeyDownHandler(opeData) {
    // console.info("iqqi.js, iqqiAftKeyDownHandler, show currentValue is: " + opeData.currentValue);
    if(opeData.needSetCaret) {
        delete opeData.needSetCaret;
        opeData.InputManager.rewrite(opeData.InputManager.scrollLeft);
    }
}

function iqqiBackSpace(ele, id, page, opeData) {
    iqqiInfoNewLog("iqqiBackSpace", "enter, show curLang: " + opeData.curLang + "; amd isShiftMode: " + opeData.isShiftMode);
    if(opeData.isShiftMode) {
        opeData.isShiftMode = false;
        if(opeData.isCapsMode == false) {
            if(!!opeData.iqqiData[opeData.curLang].upper.layout_new) {
                iqqiRewrite.call(this, id, true, false);
            }
            else {
                iqqiInfoNewLog("iqqiBackSpace", "rewrite data only,, show curLang: " + opeData.curLang);
                iqqiRewrite.call(this, id, false, false);
            }
        }
    }
    opeData.InputManager.executeBackSpace();
    if(!!opeData.currentImagineRoot) {
        opeData.currentImagineRoot = opeData.InputManager.getCurrentImagineRoot() || "";
        if(!!opeData.currentImagineRoot) {
            iqqiImagineHandler(ele, id, page, opeData, true);
            return;
        }
        opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
    }
}

/**
 * please invoke this method with a this pointer, or it will die in front of you.
 * @param page
 * @param opeData
 * @param adapt true if you just want to change the shift icon. currently only used by iqqiRewrite
 */
function iqqiShift(page, opeData, adapt) {
    var element = document.getElementById(this.id);

    if(!!element) {
        var classes = element.className.split("_");

        if(typeof adaptButtonUIOnly != "function" || iqqiShift.initialized == undefined) {
            function adaptButtonUIOnly() {
                var focus =  hiWebOsFrame.iqqi.currentSelectedTree[hiWebOsFrame.iqqi.currentSelectedTree.length-1] && (hiWebOsFrame.iqqi.currentSelectedTree[hiWebOsFrame.iqqi.currentSelectedTree.length-1].id == this.id);
                if(opeData.isCapsMode) {
                    if(focus) {
                        this.classes.focus = classes[0] + "_CapsFocus";
                    }
                    else {
                        this.classes.normal = classes[0] + "_CapsNormal";
                    }
                }
                else if(opeData.isShiftMode) {
                    if(focus) {
                        this.classes.focus = classes[0] + "_ShiftFocus";
                    }
                    else {
                        this.classes.normal = classes[0] + "_ShiftNormal";
                    }
                }
                else {
                    if(focus) {
                        this.classes.focus = classes[0] + "_NormalFocus";
                    }
                    else {
                        this.classes.normal = classes[0] + "_NormalNormal";
                    }
                }

                if(focus) {
                    element.className = this.classes.focus;
                }
                else {
                    element.className = this.classes.normal;
                }
            }

            iqqiShift.initialized = true;
        }

        if(adapt) {
            adaptButtonUIOnly.call(this);
            return;
        }

        if(opeData.isCapsMode) {
            opeData.isShiftMode = false;
            opeData.isCapsMode = false;

            adaptButtonUIOnly.call(this);

            if(!!opeData.iqqiData[opeData.curLang].upper.layout_new) {
                iqqiRewrite.call(this, this.id, true, false);
                return;
            }
        }
        else if(opeData.isShiftMode == false) {
            opeData.isShiftMode = true;
            adaptButtonUIOnly.call(this);

            if(!!opeData.iqqiData[opeData.curLang].upper.layout_new) {
                iqqiRewrite.call(this, this.id, true, false);
                return;
            }
        }
        else {
            opeData.isCapsMode = true;
            adaptButtonUIOnly.call(this);
            return;
        }

        iqqiRewrite.call(this, this.id, false, false);
        return;
    }

    iqqiInfoNewLog("iqqiShift", "can not locate the shift button in document. nothing has been done.");
}

function iqqiWhiteSpace(page, opeData) {
    iqqiInfoNewLog("iqqiWhiteSpace", "enter.");
    if("numberpassword" == opeData.inputAttr || "numberpassword" == opeData.inputMethod) {
        return;
    }
    opeData.currentImagineRoot = "";
    if("password" == opeData.inputAttr || "password" == opeData.inputMethod) {
        opeData.InputManager.insertValue(" ");
        return;
    }
    opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
    opeData.InputManager.insertValue(" ");
}

function iqqiEnter(page, opeData) {
    iqqiInfoNewLog("iqqiEnter", "enter.");
    if(!!opeData.currentImagineRoot) {
        opeData.imagineUl.hideUl(page.getCaE("iqqiImagineContent"));
        opeData.InputManager.commit();
        if(tv && !!opeData.imagineUl.FirstLiUserInput) {
            opeData.IQQINative.IQQINativeLearnWord(opeData.imagineUl.ImeType, opeData.currentImagineRoot, opeData.currentImagineRoot);
        }
        opeData.currentImagineRoot = "";
        return;
    }
    exitIQQI();
}

function iqqiDataRewrite(data) {
    var opeData = data.operateData;
    // var curLang = iqqiGetCurrentMode(opeData);

    var tLanMode = opeData.curLang;
    switch(opeData.curMode) {
        case IQQIUtils.MODE_LANGUAGE:
            break;
        case IQQIUtils.MODE_NUM1:
            tLanMode = "NUM1";
            break;
        case IQQIUtils.MODE_NUM2:
            tLanMode = "NUM2";
            break;
    }

    var status = opeData.InputManager && opeData.InputManager.dump();
    //data.iqqiInputContainer.Data.iqqiPosition.Data.iqqiInput.Data = (opeData.InputManager && opeData.InputManager.isPassword()) ? (opeData.InputManager.invoke("mask", status && (status.dynamicValue != undefined ? status.dynamicValue : status.oldValue)) || "") : (status && (status.dynamicValue != undefined ? status.dynamicValue : status.oldValue));
    data.iqqiInputContainer.Data.iqqiPosition.Data.iqqiInput.Data = opeData.InputManager && (opeData.InputManager.invoke("shouldMask") ? (opeData.InputManager.invoke("mask", opeData.InputManager.getValue(opeData.InputManager.inputId), "")) : opeData.InputManager.getValue(opeData.InputManager.inputId));
    opeData.dynamicPosition = status && (status.dynamicPosition != undefined ? status.dynamicPosition : status.oldPosition);

    try {
        if(tLanMode == "MYA") {
            for(var key in data) {
                if(!key) {
                    continue;
                }

                if(/[a-zA-Z]+LineKey_\d+/.test(key) == false) {
                    continue;
                }

                var names = key.split("_");
                var config = opeData.iqqiData[tLanMode][opeData.myaPageNum] || opeData.iqqiData[tLanMode];
                if(!!config[names[0]]) {
                    data[key].Data = config[names[0]][parseInt(names[1])];
                }
            }
            return;
        }
    }
    catch(ex) {
        iqqiErrorNewLog("iqqiDataRewrite", "show error: " + ex, ex);
    }

    for(var key in data) {
        if(!key) {
            continue;
        }

        if(/[a-zA-Z]+LineKey_\d+/.test(key) == false) {
            continue;
        }

        var names = key.split("_");
        if(!!opeData.iqqiData[tLanMode][names[0]]) {
            if(opeData.isShiftMode || opeData.isCapsMode) {
                data[key].Data = opeData.iqqiData[tLanMode]["upper"][names[0]][parseInt(names[1])];
            }
            else {
                if(/NUM\d/gm.test(tLanMode)) {
                    if(!!opeData.iqqiData[tLanMode][opeData.curLang]) {
                        data[key].Data = opeData.iqqiData[tLanMode][opeData.curLang][names[0]][parseInt(names[1])];
                        continue;
                    }
                }
                data[key].Data = opeData.iqqiData[tLanMode][names[0]][parseInt(names[1])];
            }
        }
    }
}

/**
 * this is a great function.
 * @param {string} focus the element id you want to focus after rewrite
 * @param {boolean} whole true will call rewrite and false rewriteDataOnly
 * @param {boolean} commit true will call InputManager.commit without param, others InputManager.requestFocus
 */
function iqqiRewrite(focus, whole, commit) {
    iqqiInfoNewLog("iqqiRewrite", "rewrite logic enter.");
    var opeData = this.page.operateData;

    opeData.IQQIConfig.IQQIConfigAdaptTTFForLan(opeData.curLang, "iqqi");
    if(whole) {
        iqqiAdaptDom(this.page, opeData.curLang, opeData.curMode);
        this.page.rewrite();
    }
    else {
        this.page.rewriteDataOnly();
    }

    opeData.InputManager.invoke("attachPageScroller");

    opeData.InputManager.dirty = true;

    if(iqqiGetResponseType(opeData, "FourthLineKey_0") == IQQI_RESPONSE_TYPE_SHIFT) {
        iqqiShift.call(this.page.getCaE("FourthLineKey_0"), this.page, this.page.operateData, true);
    }

    if(focus) {
        var cur = document.getElementById(focus);
        if(cur) {
            this.classes.focus = cur.className.slice(0, -6) + "Focus";
        }
        this.page.hiFocus(focus);
    }

    opeData.InputManager.setDisplay(iqqiGetCurrentDisplay(opeData));

    if(commit) {
        opeData.InputManager.commit();
    }
    else {
        opeData.InputManager.requestFocus();
    }
}

function iqqiImagineHandler(ele, id, page, opeData, certain, content) {
    if(certain == false) {
        var new_count = opeData.IQQINative.IQQINativeGetCandidateCount(opeData.currentImagineRoot + content, opeData.imagineUl.ImeType, opeData.imagineUl.FirstLiUserInput, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        if(0 >= new_count) {
            iqqiInfoNewLog("iqqiImagineHandler", "count is 0, thus we assert that this input is invalid, abandon it, show input char: " + content + "; row: " + opeData.curFocusRow + "; col: " + opeData.curFocusCol);
            return;
        }

        var new_first_40_str = opeData.IQQINative.IQQINativeGetCandidates(opeData.currentImagineRoot + content, opeData.imagineUl.ImeType, 0, 40 < new_count ? 40 : new_count, opeData.imagineUl.FirstLiUserInput, IQQINativeInterface.TYPE_CANDIDATE_ALL).join("");
        var old_count = opeData.IQQINative.IQQINativeGetCandidateCount(opeData.currentImagineRoot, opeData.imagineUl.ImeType, opeData.imagineUl.FirstLiUserInput, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        var old_first_40_str = opeData.IQQINative.IQQINativeGetCandidates(opeData.currentImagineRoot, opeData.imagineUl.ImeType, 0, 40 < old_count ? 40 : old_count, opeData.imagineUl.FirstLiUserInput, IQQINativeInterface.TYPE_CANDIDATE_ALL).join("");

        if(old_count == new_count && old_first_40_str == new_first_40_str) {
            iqqiInfoNewLog("iqqiImagineHandler", "count and first 40 is exactly same, ignore this uncertain input: " + content + "; row: " + opeData.curFocusRow + "; col: " + opeData.curFocusCol);
            return;
        }

        opeData.currentImagineRoot += content;
    }
    opeData.imagineUl.showUl(page.getCaE("iqqiImagineContent"));
    opeData.imagineUl.setImagineData(createIQQIImagineValue(opeData.currentImagineRoot, opeData));
}

function exitIQQI() {
    if(typeof this != "undefined" && !!this.event) {
        this.event.preventDefault();
    }
    var opeData = hiWebOsFrame.iqqi.operateData;

    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        opeData.lanSwitchDialog.onKeyEscDown();
        opeData.InputManager.requestFocus(opeData.InputManager.scrollLeft);
        return;
    }

    iqqiInfoNewLog("exitIQQI", "enter.");
    try {
        opeData.currentImagineRoot = "";
        opeData.isShiftMode = false;
        opeData.isCapsMode = false;
        opeData.needRewrite = true;
        opeData.shouldUseCaps = false;
        opeData.curMode = IQQIUtils.MODE_LANGUAGE;
        // opeData.curLang = !!localStorage.curLang ? localStorage.curLang : opeData.curLangArray[(!!opeData.lang ? opeData.lang : 0)];

        if(("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) == false) {
            opeData.imagineUl.resetAllData();
        }

        hiWebOsFrame.iqqi.close();
        // hiWebOsFrame.iqqi.origin.hiFocus();

        opeData.InputManager.onExit(hiWebOsFrame.iqqi.origin);
    }
    catch(ex) {
        iqqiErrorNewLog("exitIQQI", "show error: " + ex, ex);
    }
    iqqiInfoNewLog("exitIQQI", "leave.")
}

function exitIQQINotSave() {
    if(typeof this != "undefined" && !!this.event) {
        this.event.preventDefault();
    }
    var opeData = hiWebOsFrame.iqqi.operateData;

    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        opeData.lanSwitchDialog.onKeyEscDown();
        opeData.InputManager.requestFocus(opeData.InputManager.scrollLeft);
        return;
    }

    iqqiInfoNewLog("exitIQQINotSave", "enter.");
    try {
        opeData.currentImagineRoot = "";
        opeData.isShiftMode = false;
        opeData.isCapsMode = false;
        opeData.needRewrite = true;
        opeData.shouldUseCaps = false;
        opeData.curMode = IQQIUtils.MODE_LANGUAGE;
        // opeData.curLang = !!localStorage.curLang ? localStorage.curLang : opeData.curLangArray[(!!opeData.lang ? opeData.lang : 0)];

        if(("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) == false) {
            opeData.imagineUl.resetAllData();
        }

        hiWebOsFrame.iqqi.close();
        // hiWebOsFrame.iqqi.origin.hiFocus();

        opeData.InputManager.onBack(hiWebOsFrame.iqqi.origin, opeData.oldValue, opeData.oldPosition);
    }
    catch(ex) {
        iqqiErrorNewLog("exitIQQINotSave", "show error: " + ex, ex);
    }
    iqqiInfoNewLog("exitIQQINotSave", "leave.")
}

function showIQQIElement(opeData, id, display) {
    var element = document.getElementById(id);
    // console.info("test.js, showElement, now start to show element, show id: " + id + ", and element: " + element);
    element.style.display = display;
    element.style.visibility = "visible";

    switch(id) {
        case "iqqiImagineLeftArrow":
            opeData.isLeftArrowShow = true;
            break;
        case "iqqiImagineRightArrow":
            opeData.isRightArrowShow = true;
            break;
        case "iqqiIcon":
            opeData.isIQQIIconShow = true;
            break;
        case "iqqiImagineAreaContainer":
            opeData.isImagineAreaContainerShow = true;
            break;
    }
}

function hideIQQIElement(opeData, id, display) {
    var element = document.getElementById(id);
    // iqqiInfoLog(opeData, method, "now start to hide element, show id: " + id + ", and element: " + element + ", and display: " + display);
    element.style.display = display;
    element.style.visibility = "hidden";

    switch(id) {
        case "iqqiImagineLeftArrow":
            opeData.isLeftArrowShow = false;
            break;
        case "iqqiImagineRightArrow":
            opeData.isRightArrowShow = false;
            break;
        case "iqqiIcon":
            opeData.isIQQIIconShow = false;
            break;
        case "iqqiImagineAreaContainer":
            opeData.isImagineAreaContainerShow = false;
            break;
    }
}

function createIQQIImagineValue(root, opeData) {
    // 等待底层接口的调用
    if(tv) {
        // iqqiInfoNewLog("createIQQIImagineValue", "show iqqi native version: " + opeData.IQQINative.IQQINativeGetVersion("1555"));
        // iqqiInfoNewLog("createIQQIImagineValue", "show root: " +  root + "; and imagine candidate count: " + opeData.IQQINative.IQQINativeGetCandidateCount(root, opeData.curLang, IQQINativeInterface.TYPE_CANDIDATE_ALL));
        opeData.imagineUl.ImagineCount = opeData.IQQINative.IQQINativeGetCandidateCount(root, opeData.imagineUl.ImeType, opeData.imagineUl.FirstLiUserInput, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        if(0 >= opeData.imagineUl.ImagineCount) {
            iqqiInfoNewLog("createIQQIImagineValue", "detect target count is no more than 0, thus the root is pushed as the result.");
            opeData.imagineUl.ImagineCount = 1;
            return [root];
        }
        return opeData.IQQINative.IQQINativeGetCandidates(root, opeData.imagineUl.ImeType, 0, 40, opeData.imagineUl.FirstLiUserInput, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        //switch(opeData.curLang) {
        //    case "ENG":
        //        opeData.imagineUl.ImagineCount = opeData.IQQINative.IQQINativeGetCandidateCount(root, opeData.curLang, true, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        //        opeData.imagineUl.FirstLiUserInput = true;
        //        return opeData.IQQINative.IQQINativeGetCandidates(root, imejs.iqqi.ENGLISH, 0, 40, true, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        //    case "CHI":
        //        opeData.imagineUl.ImagineCount = opeData.IQQINative.IQQINativeGetCandidateCount(root, opeData.curLang, false, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        //        opeData.imagineUl.FirstLiUserInput = false;
        //        return opeData.IQQINative.IQQINativeGetCandidates(root, imejs.iqqi.SIMPLIFIED_CHINESE_PINYIN, 0, 40, false, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        //    case "MAS":
        //        opeData.imagineUl.ImagineCount = opeData.IQQINative.IQQINativeGetCandidateCount(root, opeData.curLang, true, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        //        opeData.imagineUl.FirstLiUserInput = true;
        //        return opeData.IQQINative.IQQINativeGetCandidates(root, 18, 0, 40, true, IQQINativeInterface.TYPE_CANDIDATE_ALL);
        //}
    }
    if(root == "test") {
        iqqiInfoNewLog("createIQQIImagineValue", "show iqqi_imagine_test_data is " + iqqi_imagine_test_data);
        return iqqi_imagine_test_data;
    }
    else if(root == "y") {
        iqqiInfoNewLog("createIQQIImagineValue", "show iqqi_imagine_test_data is " + iqqi_imagine_test_data_y);
        return iqqi_imagine_test_data_y;
    }
    var result = [];
    result.push(root);
    return result;
}

function createIQQIImagineJSonFromArray(data) {
    iqqiInfoNewLog("createIQQIImagineJSonFromArray", "show data is " + data + ", and !!data is " + (!!data));
    var Data = [];
    if(!!data) {
        for(var value in data) {
            Data.push({
                "iqqiImagineContentItem_Content": {"Data": data[value]},
                "iqqiImagineContentItem_Divider": {"Data": ""}
            });
        }
    }
    return Data;
}

function createIQQIImagineJSonFromValue(value) {
    iqqiInfoNewLog("createIQQIImagineJSonFromValue", "show data is " + value + ", and !!data is " + (!!value));
    var Data = [];
    if(!!value) {
        Data.push({
            "iqqiImagineContentItem_Content": {"Data": value},
            "iqqiImagineContentItem_Divider": {"Data": ""}
        });
    }
    return Data;
}

function iqqiInfoLog(file, method, msg) {
    var message = [];
    if(file) {
        message.push(file + ".js");
    }
    message.push("svn version: " + locale_svn_version);
    if(method) {
        message.push(method);
    }
    if(msg) {
        message.push(msg);
    }
    if(message.length == 1) {
        return;
    }
    if(tv) {
        debugPrint(message.join("; "), DebugLevel.INFO);
        return;
    }
    console.info(message.join("; "));
}

function iqqiInfoNewLog(method, msg) {
    var message = [];
    message.push("iqqi.js");
    message.push("svn version: " + locale_svn_version);
    if(method) {
        message.push(method);
    }
    if(msg) {
        message.push(msg);
    }
    if(message.length == 2) {
        return;
    }
    if(tv) {
        debugPrint(message.join("; "), DebugLevel.INFO);
        return;
    }
    console.info(message.join("; "));
}

function iqqiErrorNewLog(method, msg, error) {
    var message = [];
    message.push("iqqi.js");
    message.push("svn version: " + locale_svn_version);
    if(method) {
        message.push(method);
    }
    if(msg) {
        message.push(msg);
    }
    if(error && error["stack"]) {
        message.push("stack: " + error["stack"]);
    }
    if(message.length == 2) {
        return;
    }
    if(tv) {
        debugPrint(message.join("; "), DebugLevel.ERROR);
        return;
    }
    console.error(message.join("; "));
}

var IQQI_RESPONSE_TYPE_UNDEFINED = 0;
var IQQI_RESPONSE_TYPE_NUM = 1;
var IQQI_RESPONSE_TYPE_WORD = 2;
var IQQI_RESPONSE_TYPE_SHIFT = 3;
var IQQI_RESPONSE_TYPE_SYMBOL = 4;
var IQQI_RESPONSE_TYPE_ESC = 5;
var IQQI_RESPONSE_TYPE_LANSWITCH = 6;
var IQQI_RESPONSE_TYPE_NUMSWITCH = 7;
var IQQI_RESPONSE_TYPE_WHITESPACE = 8;
var IQQI_RESPONSE_TYPE_BACKSPACE = 9;
var IQQI_RESPONSE_TYPE_ENTER = 10;
var IQQI_RESPONSE_TYPE_SOUND_LEVEL = 11;
var IQQI_RESPONSE_TYPE_IQQI_SETTINGS = 12;
var IQQI_RESPONSE_TYPE_MYA_PAGE_SCROLL = 13;

function iqqiGetCurrentDisplay(opeData) {
    try {
        switch(opeData.curMode) {
            case IQQIUtils.MODE_NUM1:
                iqqiGetCurrentDisplay.mode = "NUM1";
                break;
            case IQQIUtils.MODE_NUM2:
                iqqiGetCurrentDisplay.mode = "NUM2";
                break;
            default:
                iqqiGetCurrentDisplay.mode = opeData.curLang;
        }

        if(iqqiGetCurrentDisplay.mode == "MYA") {
            iqqiGetCurrentDisplay.display = (opeData.myaPageNum && opeData.iqqiData[iqqiGetCurrentDisplay.mode][opeData.myaPageNum].display) || opeData.iqqiData[iqqiGetCurrentDisplay.mode].display;
        }
        else if(opeData.isCapsMode || opeData.isShiftMode) {
            iqqiGetCurrentDisplay.display = opeData.iqqiData[iqqiGetCurrentDisplay.mode].upper.display || opeData.iqqiData[iqqiGetCurrentDisplay.mode].display;
        }
        else {
            iqqiGetCurrentDisplay.display = opeData.iqqiData[iqqiGetCurrentDisplay.mode].display;
        }

        return iqqiGetCurrentDisplay.display;
    }
    finally {
        delete iqqiGetCurrentDisplay.mode;
        delete iqqiGetCurrentDisplay.display;
    }
}

function iqqiGetResponseType(opeData, id) {
    iqqiGetResponseType.display = iqqiGetCurrentDisplay(opeData);

    var type = IQQI_RESPONSE_TYPE_UNDEFINED;

    if(/[a-zA-Z]+LineKey_\d+/.test(id)) {
        var names = id.split("_");
        type = iqqiGetResponseType.display[names[0]][names[1]];
    }

    if(type == IQQI_RESPONSE_TYPE_NUM || type == IQQI_RESPONSE_TYPE_SYMBOL || type == IQQI_RESPONSE_TYPE_WORD || type == IQQI_RESPONSE_TYPE_WHITESPACE) {
        if(opeData.InputManager.isValidInput(id) == false) {
            iqqiInfoNewLog("iqqiGetResponseType", "max length detected, type undefined returned.");
            return IQQI_RESPONSE_TYPE_UNDEFINED;
        }
    }

    return type;
}

function iqqiGetContent(opeData, id) {
    var tLanMode = opeData.curLang;
    switch(opeData.curMode) {
        case IQQIUtils.MODE_NUM1:
            tLanMode = "NUM1";
            break;
        case IQQIUtils.MODE_NUM2:
            tLanMode = "NUM2";
            break;
    }

    if(/[a-zA-Z]+LineKey_\d+/.test(id)) {
        var names = id.split("_");

        if(tLanMode == "MYA") {
            return (opeData.iqqiData[tLanMode][opeData.myaPageNum] || opeData.iqqiData[tLanMode])[names[0]][names[1]];
        }
        else if(/^NUM\d$/gm.test(tLanMode)) {
            return (opeData.iqqiData[tLanMode][opeData.curLang] || opeData.iqqiData[tLanMode])[names[0]][names[1]];
        }

        var content = opeData.iqqiData[tLanMode][names[0]][names[1]];
        if (opeData.isCapsMode || opeData.isShiftMode && !!opeData.iqqiData[tLanMode].upper) {
            content = opeData.iqqiData[tLanMode].upper[names[0]][names[1]];
        }
    }

    return content;
}

function iqqiPageAftEnterHandler(opeData) {
    iqqiInfoNewLog("iqqiPageAftEnterHandler", "git aft enter.");
    this.event.preventDefault();
    if(!!opeData.imagineUl && opeData.imagineUl.working) {
        var curValue = opeData.imagineUl.getCurrentValue();
        iqqiInfoNewLog("iqqiPageAftEnterHandler", "show originCaretPosition: " + opeData.oldPosition + "; and curValue: " + curValue + "; and curValue.length: " + curValue.length);
        if(tv) {
            //if(curValue != opeData.currentImagineRoot) {
                opeData.IQQINative.IQQINativeLearnWord(opeData.imagineUl.ImeType, opeData.currentImagineRoot, curValue);
            //}
        }
        opeData.currentImagineRoot = "";
        opeData.InputManager.commit(curValue);

        document.getElementById("iqqiImagineContent").className = "iqqiIcon" + (opeData.curLangRtl ? "_" + "RTL" : "");
        opeData.imagineUl.hideUl(this.getCaE("iqqiImagineContent"));
    }
}

function iqqiPageBefLeftHandler(opeData) {
    iqqiInfoNewLog("iqqiBefLeftHandler", "got bef left.");
    this.event.preventDefault();
    if(hiWebOsFrame.iqqi.currentSelectedTree[hiWebOsFrame.iqqi.currentSelectedTree.length-1].id == "iqqiInput") {
        return;
    }
    if(!!opeData.imagineUl && opeData.imagineUl.working) {
        // iqqiInfoNewLog("iqqiPageBefRightHandler", "show imagineUl html: " + opeData.imagineUl.imagineUl.innerHTML);
        try {
            // iqqiInfoNewLog("iqqiPageBefLeftHandler", "show imagineUl html: " + document.getElementById("iqqiImagineArea").innerHTML);
            var li = opeData.imagineUl.findElementByTagIndex(opeData.imagineUl.imagineUl, "li", opeData.imagineUl.LAST_ELEMENT_INDEX);
            iqqiInfoNewLog("iqqiPageBefRightHandler", "show imagineUl last li's id: " + li.id + " last li's width: " + li.scrollWidth + "; and first div's width: " + opeData.imagineUl.findElementByTagIndex(li, "div", 0).scrollWidth);
        }
        catch(ex) {
            iqqiErrorNewLog("iqqiPageBefLeftHandler", "show error is: " + ex, ex);
        }
        opeData.imagineUl.responseToKeyLeft();
    }
}

function iqqiPageBefRightHandler(opeData) {
    iqqiInfoNewLog("iqqiBefRightHandler", "got bef right.");
    this.event.preventDefault();
    if(hiWebOsFrame.iqqi.currentSelectedTree[hiWebOsFrame.iqqi.currentSelectedTree.length-1].id == "iqqiInput") {
        return;
    }
    if(!!opeData.imagineUl && opeData.imagineUl.working) {
        // iqqiInfoNewLog("iqqiPageBefRightHandler", "show imagineUl html: " + opeData.imagineUl.imagineUl.innerHTML);
        try {
            // iqqiInfoNewLog("iqqiPageBefRightHandler", "show imagineUl html: " + document.getElementById("iqqiImagineArea").innerHTML);
            var li = opeData.imagineUl.findElementByTagIndex(opeData.imagineUl.imagineUl, "li", opeData.imagineUl.LAST_ELEMENT_INDEX);
            iqqiInfoNewLog("iqqiPageBefRightHandler", "show imagineUl last li's id: " + li.id + " last li's width: " + li.scrollWidth + "; and first div's width: " + opeData.imagineUl.findElementByTagIndex(li, "div", 0).scrollWidth);
        }
        catch(ex) {
            iqqiErrorNewLog("iqqiPageBefRightHandler", "show error is: " + ex, ex);
        }
        opeData.imagineUl.responseToKeyRight();
        if(tv) {
            opeData.imagineUl.checkAndLoadMore(opeData.IQQINative, opeData.currentImagineRoot, IQQINativeInterface.TYPE_CANDIDATE_ALL);
            //switch(opeData.curLang) {
            //    case "ENG":
            //        opeData.imagineUl.checkAndLoadMore(opeData.IQQINative, opeData.currentImagineRoot, imejs.iqqi.ENGLISH, IQQINativeInterface.TYPE_CANDIDATE_ALL);
            //        break;
            //    case "CHI":
            //        opeData.imagineUl.checkAndLoadMore(opeData.IQQINative, opeData.currentImagineRoot, imejs.iqqi.SIMPLIFIED_CHINESE_PINYIN, IQQINativeInterface.TYPE_CANDIDATE_ALL);
            //        break;
            //    case "MAS":
            //        opeData.imagineUl.checkAndLoadMore(opeData.IQQINative, opeData.currentImagineRoot, 18, IQQINativeInterface.TYPE_CANDIDATE_ALL);
            //        break;
            //}
            return;
        }
        if(opeData.imagineUl.BeginIndex + opeData.imagineUl.FocusedIndex == 10) {
            // opeData.imagineUl.data.push(iqqi_imagine_test_data_y);
            for(var i = 0; i < iqqi_imagine_test_data_y.length; i++) {
                opeData.imagineUl.data.push(iqqi_imagine_test_data_y[i]);
            }
        }
    }
}

function iqqiPageAftEscHandler(opeData) {
    this.event.preventDefault();
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        opeData.lanSwitchDialog.onKeyEscDown();
        opeData.InputManager.requestFocus(opeData.InputManager.scrollLeft);
        return true;
    }
    exitIQQINotSave();
}

function iqqiPageKeyRedHandler(opeData) {
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        iqqiInfoNewLog("iqqiPageKeyRedHandler", "lanSwitchDialog is the surface page, shield red key.");
        this.event.preventDefault();
        return true;
    }
    var caretPosition = opeData.InputManager.getCaretPosition("iqqiInput");
    if(caretPosition > 0) {
        opeData.dynamicPosition = caretPosition - 1;
        opeData.InputManager.setCaretPosition("iqqiInput", opeData.dynamicPosition);
    }
}

function iqqiPageKeyGreenHandler(opeData) {
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        iqqiInfoNewLog("iqqiPageKeyGreenHandler", "lanSwitchDialog is the surface page, shield green key.");
        this.event.preventDefault();
        return true;
    }
    var caretPosition = opeData.InputManager.getCaretPosition("iqqiInput");
    var length = opeData.InputManager.getValue(opeData.InputManager.inputId).length;
    if(caretPosition < length) {
        opeData.dynamicPosition = caretPosition + 1;
        opeData.InputManager.setCaretPosition("iqqiInput", opeData.dynamicPosition);
    }
}

function iqqiPageKeyYellowHandler(opeData) {
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        iqqiInfoNewLog("iqqiPageKeyYellowHandler", "lanSwitchDialog is the surface page, shield yellow key.");
        this.event.preventDefault();
        return true;
    }
    var ocae = this.getCaE("iqqiInput");
    ocae.Data = "";
    opeData.InputManager.dirty = true;
    opeData.InputManager.absoluteLogicalPosition = 0;
    opeData.currentImagineRoot = "";
    opeData.imagineUl && opeData.imagineUl.working && opeData.imagineUl.hideUl(this.getCaE("iqqiImagineContent"));
    opeData.InputManager.setValue(opeData.InputManager.inputId, "", 0);
}

function iqqiPageKeyBlueHandler(opeData) {
    if(!!opeData.lanSwitchDialog && opeData.lanSwitchDialog.working) {
        iqqiInfoNewLog("iqqiPageKeyBlueHandler", "lanSwitchDialog is the surface page, dispatch blue key.");
        opeData.lanSwitchDialog.onKeyEnterDown();
        return true;
    }
    iqqiInfoNewLog("iqqiPageKeyBlueHandler", "show index: " + this.currentSelectedTree[this.currentSelectedTree.length - 1].id);
    //var ccae = this.getCaE(this.currentSelectedTree[this.currentSelectedTree.length - 1].id);
    //if(!!ccae.handler.aftEnterHandler) {
    //    if (typeof ccae.handler.aftEnterHandler == 'string') {
    //        eval(ccae.handler.aftEnterHandler + '.call(ccae,this.page.operateData,this.data)');
    //    } else if (typeof ccae.handler.aftEnterHandler == 'function') {
    //        ccae.handler.aftEnterHandler.call(ccae, this.page.operateData, this.data);
    //    }
    //}
    iqqiInfoNewLog("iqqiPageKeyBlueHandler", "enter.");
    iqqiEnter(this, this.operateData);
}

function iqqiImagineContentBefDownHandler(opeData) {
    iqqiInfoNewLog("iqqiImagineContentBefDownHandler", "got bef down. and working: " + opeData.imagineUl.working);
    this.event.preventDefault();
    if(opeData.imagineUl.working) {
        opeData.imagineUl.setSelection(-1);
    }
    opeData.curFocusRow = 4;
    for(opeData.curFocusCol = 14; opeData.curFocusCol >= 0; opeData.curFocusCol--) {
        var tdown = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
        if(!!tdown) {
            if("iqqiLineKeyHidden" == tdown.className) {
                continue;
            }
            var tcae = this.page.getCaE(tdown.id);
            tcae.classes.focus = tdown.className.slice(0, -6) + "Focus";

            var origin = document.getElementById(this.id);
            var ocae = this.page.getCaE(this.id);
            ocae.downTo = tdown.id;
            if(!!origin) {
                iqqiInfoNewLog("iqqiImagineContentBefDownHandler", "show origin.className: " + origin.className);
                if(opeData.imagineUl.working) {
                    ocae.classes.normal = "iqqiImagineContent";
                }
                else {
                    ocae.classes.normal = "iqqiIcon" + (opeData.curLangRtl ? "_" + "RTL" : "");
                }
            }
            this.page.hiFocus(ocae.downTo);
            return true;
        }
    }
    return false;
}

function iqqiImagineContentBefUpHandler(opeData) {
    iqqiInfoNewLog("iqqiImagineContentBefUpHandler", "got bef down. and working: " + opeData.imagineUl.working);
    if(opeData.imagineUl.working) {
        opeData.imagineUl.setSelection(-1);
    }
    this.nav.upTo = "iqqiInput";
    var ccae = this.page.getCaE("iqqiInputContainer");
    var p_cae = this.page.getCaE("iqqiPosition");
    var tcae = this.page.getCaE("iqqiInput");
    if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
        ccae.classes.selected = "iqqiInputContainerPassword";
    }
    else {
        ccae.classes.selected = "iqqiInputContainer";
    }
    p_cae.classes.selected = IQQIUtils.formatNewClass(document.getElementById(p_cae.id), "Focus");
    tcae.classes.focus = IQQIUtils.formatNewClass(document.getElementById(tcae.id), "Focus");

    if(opeData.imagineUl.working) {
        this.classes.normal = "iqqiImagineContent";
    }
    else {
        this.classes.normal = "iqqiIcon" + (opeData.curLangRtl ? "_" + "RTL" : "");
    }
}

function IQQIImagineUl(left, right, ul, data) {
    this.MAX_ITEM_NUM_ENGLISH = 40;

    this.ImagineCount = 0;
    this.FirstLiUserInput = true;
    if(tv) {
        this.ImeType = imejs.iqqi.ENGLISH;
    }
    this.left = left;
    this.right = right;
    this.ul = ul;
    this.data = data;
    this.leftArrow = null;
    this.rightArrow = null;
    this.imagineUl = null;
    this.FocusedIndex = -1;
    this.BeginIndex = 0;
    this.isLeftArrowShow = false;
    this.isRightArrowShow = false;
    this.dividerHiddenIndex = 0;
    this.cae = null;

    this.LAST_ELEMENT_INDEX = -1;

    this.Ferry = [0];

    if(!!data) {
        this.setImagineData(data);
    }

    if (typeof IQQIImagineUl.initialized == 'undefined') {

        IQQIImagineUl.prototype.setImagineData = function(data) {
            // if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            // }
            this.leftArrow = document.getElementById(this.left);
            this.rightArrow = document.getElementById(this.right);
            this.imagineUl.innerHTML = "";
            this.FocusedIndex = -1;
            this.working = true;
            this.rootOver = false;
            this.data = data;
            // this.data[20] = "random word";

            this.imagineUl.scrollLeft = 0;
            this.isLeftArrowShow = false;
            this.isRightArrowShow = false;
            this.BeginIndex = 0;
            this.checkLeftArrow();
            this.handleArrowStatus();

            this.Ferry = [0];

            //var lis = this.imagineUl.getElementsByTagName("li");
            if(typeof this.data == "string") {
                var elementTotalWidth = 0;
                //if(lis.length == 0) {
                    var newLi = this.createSingleLi(this.data, 0);
                    this.imagineUl.appendChild(newLi);
                    //iqqiInfoNewLog("setImagineData", "show newLi's scrollWith: " + newLi.scrollWidth + "; and " + document.getElementById("iqqiImagineContentItem_" + 0).scrollWidth);
                    //iqqiInfoNewLog("setImagineData", "show newLi's offsetWith: " + newLi.offsetWidth + "; and " + document.getElementById("iqqiImagineContentItem_" + 0).offsetWidth);
                    //iqqiInfoNewLog("setImagineData", "show newLi's clientWidth: " + newLi.clientWidth + "; and " + document.getElementById("iqqiImagineContentItem_" + 0).clientWidth);
                    //iqqiInfoNewLog("setImagineData", "show newLi's zepto with: " + $("#iqqiImagineContentItem_" + 0).width());
                    elementTotalWidth += newLi.scrollWidth;
                    if(elementTotalWidth > 1920) {
                        this.isRightArrowShow = true;
                        this.rightArrow.style.display = "inline-block";
                        this.rightArrow.style.visibility = "visible";
                        this.handleArrowStatus();
                        newLi.style.visibility = "visible";
                        this.dividerHiddenIndex = 0;
                        newLi.getElementsByTagName("div")[1].visibility = "hidden";
                    }
                    newLi.style.visibility = "visible";
                    this.findElementByTagIndex(this.findElementByTagIndex(this.imagineUl, "li", 0), "div", this.LAST_ELEMENT_INDEX).style.visibility = "hidden";
                    this.dividerHiddenIndex = 0;
                //}
                //else {
                //    iqqiInfoLog("setImagineData", "enter single area.");
                //    this.findElementByTagIndex(lis[0], "div", 0).innerHTML = this.data;
                //    elementTotalWidth += lis[0].scrollWidth;
                //    lis[0].getElementsByTagName("div")[0].className = "iqqiImagineContentItem_FirstContent";
                //    if(elementTotalWidth > 1920) {
                //        this.isRightArrowShow = true;
                //        this.rightArrow.style.display = "inline-block";
                //        this.rightArrow.style.visibility = "visible";
                //        this.handleArrowStatus();
                //        lis[0].getElementsByTagName("div")[1].style.visibility = "hidden";
                //        lis[0].style.visibility = "visible";
                //        this.dividerHiddenIndex = 0;
                //    }
                //    else {
                //        this.dividerHiddenIndex = 0;
                //        lis[0].getElementsByTagName("div")[1].style.visibility = "hidden";
                //        lis[0].style.visibility = "visible";
                //    }
                //
                //    for(var i = 1; i < lis.length; i++) {
                //        lis[i].style.visibility = "hidden";
                //        lis[i].getElementsByTagName("div")[1].style.visibility = "visible";
                //    }
                //}
                this.checkRightArrow(0);
                this.handleArrowStatus();
            }
            else if(typeof this.data == "object") {
                iqqiInfoNewLog("setImagineData", "object area enter. show length: " + this.data.length);
                var elementTotalWidth = 0;
                //if(lis.length == 0) {
                    for(var i = 0; i < this.data.length; i++) {
                        var newLi = this.createSingleLi(this.data[i], i);
                        this.imagineUl.appendChild(newLi);
                        //if(i == this.dividerHiddenIndex) {
                        //    this.findElementByTagIndex(lis[i], "div", this.LAST_ELEMENT_INDEX).style.visibility = "visible";
                        //}
                        var big = elementTotalWidth > 1850;
                        elementTotalWidth += newLi.scrollWidth;
                        //iqqiInfoNewLog("setImagineData", "show newLi's scrollWith: " + newLi.scrollWidth + "; and " + document.getElementById("iqqiImagineContentItem_" + i).scrollWidth);
                        //iqqiInfoNewLog("setImagineData", "show newLi's offsetWith: " + newLi.offsetWidth + "; and " + document.getElementById("iqqiImagineContentItem_" + i).offsetWidth);
                        //iqqiInfoNewLog("setImagineData", "show newLi's clientWidth: " + newLi.clientWidth + "; and " + document.getElementById("iqqiImagineContentItem_" + i).clientWidth);
                        //iqqiInfoNewLog("setImagineData", "show newLi's zepto with: " + $("#iqqiImagineContentItem_" + i).width());
                        if(elementTotalWidth > 1920) {
                            this.isRightArrowShow = true;
                            this.rightArrow.style.display = "inline-block";
                            this.rightArrow.style.visibility = "visible";
                            this.handleArrowStatus();
                            newLi.className = newLi.className.slice(0, newLi.className.lastIndexOf("_") + 1) + "Normal";
                            this.dividerHiddenIndex = i;
                            if(this.focusIndex == i) {
                                newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                            }
                            else {
                                newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                            }
                            newLi.lastChild.className = "iqqiImagineContentItem_Divider_Hidden";
                            if(big) {
                                this.dividerHiddenIndex = i - 1;
                            }
                            this.Ferry.push(this.dividerHiddenIndex);
                            return;
                        }
                        newLi.className = newLi.className.slice(0, newLi.className.lastIndexOf("_") + 1) + "Normal";
                        this.dividerHiddenIndex = i;
                        if(this.focusIndex == i) {
                            newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                        }
                        else {
                            newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                        }
                        newLi.lastChild.className = "iqqiImagineContentItem_Divider_Normal";
                    }
                    this.findElementByTagIndex(this.findElementByTagIndex(this.imagineUl, "li", this.LAST_ELEMENT_INDEX), "div", this.LAST_ELEMENT_INDEX).className= "iqqiImagineContentItem_Divider_Hidden";
                //}
                //else if(lis.length <= this.data.length) {
                //    iqqiInfoLog("setImagineData", "[lis.length <= this.data.length], show this.dividerHiddenIndex is " + this.dividerHiddenIndex);
                //    for(var i = 0; i < lis.length; i++) {
                //        this.findElementByTagIndex(lis[i], "div", 0).innerHTML = this.data[i];
                //        var big = elementTotalWidth > 1850;
                //        elementTotalWidth += lis[i].scrollWidth;
                //        if(elementTotalWidth > 1920) {
                //            this.isRightArrowShow = true;
                //            this.rightArrow.style.display = "inline-block";
                //            this.rightArrow.style.visibility = "visible";
                //            this.handleArrowStatus();
                //            lis[i].style.visibility = "visible";
                //            this.dividerHiddenIndex = i;
                //            if(big) {
                //                this.dividerHiddenIndex = i - 1;
                //            }
                //            lis[i].getElementsByTagName("div")[1].style.visibility = "hidden";
                //            break;
                //        }
                //        if(i == this.dividerHiddenIndex) {
                //            lis[i].getElementsByTagName("div")[1].style.visibility = "visible";
                //        }
                //        lis[i].style.visibility = "visible";
                //        iqqiInfoLog("setImagineData", "[lis.length <= this.data.length], show i is " + i);
                //    }
                //
                //    this.findElementByTagIndex(lis[lis.length - 1], "div", this.LAST_ELEMENT_INDEX).style.visibility = "visible";
                //    for(var i = lis.length; i < this.data.length; i++) {
                //        var newLi = this.createSingleLi(this.data[i], i);
                //        this.imagineUl.appendChild(newLi);
                //        var big = elementTotalWidth > 1850;
                //        elementTotalWidth += newLi.scrollWidth;
                //        if(elementTotalWidth > 1920) {
                //            this.isRightArrowShow = true;
                //            this.rightArrow.style.display = "inline-block";
                //            this.rightArrow.style.visibility = "visible";
                //            this.handleArrowStatus();
                //            newLi.style.visibility = "visible";
                //            this.dividerHiddenIndex = i;
                //            if(big) {
                //                this.dividerHiddenIndex = i - 1;
                //            }
                //            newLi.getElementsByTagName("div")[1].style.visibility = "hidden";
                //            break;
                //        }
                //        if(i == this.dividerHiddenIndex) {
                //            lis[i].getElementsByTagName("div")[1].style.visibility = "visible";
                //        }
                //        newLi.style.visibility = "visible";
                //    }
                //}
                //else {
                //    for(var i = 0; i < this.data.length; i++) {
                //        lis[i].className = "iqqiImagineContentItem_Normal";
                //        this.findElementByTagIndex(lis[i], "div", 0).innerHTML = this.data[i];
                //        var big = elementTotalWidth > 1850;
                //        elementTotalWidth += newLi.scrollWidth;
                //        if(elementTotalWidth > 1920) {
                //            this.isRightArrowShow = true;
                //            this.rightArrow.style.display = "inline-block";
                //            this.rightArrow.style.visibility = "visible";
                //            this.handleArrowStatus();
                //            newLi.style.visibility = "visible";
                //            this.dividerHiddenIndex = i;
                //            if(big) {
                //                this.dividerHiddenIndex = i - 1;
                //            }
                //            newLi.getElementsByTagName("div")[1].style.visibility = "hidden";
                //            break;
                //        }
                //    }
                //    this.findElementByTagIndex(lis[lis.length - 1], "div", this.LAST_ELEMENT_INDEX).style.visibility = "hidden";
                //    this.dividerHiddenIndex = this.data.length - 1;
                //
                //    for(var i = this.data.length; i < lis.length; i++) {
                //        lis[i].className = "iqqiLineKeyHidden";
                //    }
                //    this.findElementByTagIndex(lis[lis.length - 1], "div", this.data.length - 1).style.visibility = "hidden";
                //}
            }
            //iqqiInfoNewLog("setImagineData", "show ul html " + this.imagineUl.innerHTML);
        };

        IQQIImagineUl.prototype.createSingleLi = function(lidata, index) {
            var li = document.createElement("li");
            li.id = "iqqiImagineContentItem_" + index;
            li.className = "iqqiImagineContentItem_Hidden";

            var content = document.createElement("div");
            content.id = "iqqiImagineContentItem_Content_" + index;
            if(index == 0 && this.FirstLiUserInput) {
                content.className = "iqqiImagineContentItem_FirstContent_Hidden";
            }
            else {
                content.className = "iqqiImagineContentItem_Content_Hidden";
            }
            content.innerHTML = lidata;
            li.appendChild(content);

            var divider = document.createElement("div");
            divider.id = "iqqiImagineContentItem_Divider_" + index;
            divider.className = "iqqiImagineContentItem_Divider_Hidden";
            li.appendChild(divider);

            return li;
        };

        IQQIImagineUl.prototype.handleArrowStatus = function() {
            this.imagineUl = document.getElementById(this.ul);
            if(this.isLeftArrowShow && this.isRightArrowShow) {
                iqqiInfoNewLog("handleArrowStatus", "ul width set to 1780px");
                this.imagineUl.style.width = 1780 + "px";
            }
            else if(this.isLeftArrowShow == false && this.isRightArrowShow == false) {
                iqqiInfoNewLog("handleArrowStatus", "ul width set to 1920px");
                this.imagineUl.style.width = 1920 + "px";
            }
            else {
                iqqiInfoNewLog("handleArrowStatus", "ul width set to 1850px");
                this.imagineUl.style.width = 1850 + "px";
            }
        };

        IQQIImagineUl.prototype.checkLeftArrow = function() {
            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }
            if(this.leftArrow == null) {
                this.leftArrow = document.getElementById(this.left);
            }
            if(this.imagineUl.scrollLeft > 0) {
                iqqiInfoNewLog("checkRightArrow", "show left arrow.");
                this.isLeftArrowShow = true;
                this.leftArrow.style.display = "inline-block";
                this.leftArrow.style.visibility = "visible";
            }
            else {
                this.imagineUl.scrollLeft = 0;
                iqqiInfoNewLog("checkRightArrow", "hide left arrow.");
                this.isLeftArrowShow = false;
                this.leftArrow.style.display = "none";
                this.leftArrow.style.visibility = "hidden";
            }
        };

        IQQIImagineUl.prototype.checkRightArrow = function(index) {
            this.rightArrow = document.getElementById(this.right);
            if(this.getElementTrueScroll("iqqiImagineContentItem_" + index) + this.getElementTrueWidth("iqqiImagineContentItem_" + index) > this.getElementTrueWidth(this.ul) + this.getElementTrueScroll(this.ul)) {
                iqqiInfoNewLog("checkRightArrow", "show right arrow.");
                this.isRightArrowShow = true;
                this.rightArrow.style.display = "inline-block";
                this.rightArrow.style.visibility = "visible";
            }
            else {
                iqqiInfoNewLog("checkRightArrow", "hide right arrow.");
                this.isRightArrowShow = false;
                this.rightArrow.style.display = "none";
                this.rightArrow.style.visibility = "hidden";
            }
        };

        IQQIImagineUl.prototype.hideLeftArrow = function() {
            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }
            this.imagineUl.scrollLeft = 0;

            if(this.leftArrow == null) {
                this.leftArrow = document.getElementById(this.left);
            };
            this.isLeftArrowShow = false;
            this.leftArrow.style.display = "none";
            this.leftArrow.style.visibility = "hidden";
        };

        IQQIImagineUl.prototype.hideRightArrow = function() {
            if(this.rightArrow == null) {
                this.rightArrow = document.getElementById(this.right);
            }
            this.isRightArrowShow = false;
            this.rightArrow.style.display = "none";
            this.rightArrow.style.visibility = "hidden";
        };

        IQQIImagineUl.prototype.hideUl = function(cae) {
            this.hideLeftArrow();
            this.hideRightArrow();
            this.handleArrowStatus();

            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }
            this.imagineUl.innerHTML = "";
            this.imagineUl.className = "iqqiIcon" + (this.rtl ? "_" + "RTL" : "");
            cae.classes.normal = "iqqiIcon" + (this.rtl ? "_" + "RTL" : "");
            cae.classes.focus = "iqqiIcon" + (this.rtl ? "_" + "RTL" : "");
            cae.classes.selected = "iqqiIcon" + (this.rtl ? "_" + "RTL" : "");
            cae.classes.disable = "iqqiIcon" + (this.rtl ? "_" + "RTL" : "");
            this.working = false;
            this.ImagineCount = 0;
            this.resetAllData();
        };

        IQQIImagineUl.prototype.showUl = function(cae) {
            this.cae = cae;
            this.hideLeftArrow();
            this.hideRightArrow();
            this.handleArrowStatus();

            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }
            this.imagineUl.innerHTML = "";
            this.imagineUl.className = "iqqiImagineContent";
            cae.classes.normal = "iqqiImagineContent";
            cae.classes.focus = "iqqiImagineContent";
            cae.classes.selected = "iqqiImagineContent";
            cae.classes.disable = "iqqiImagineContent";
        };

        IQQIImagineUl.prototype.findElementByTagIndex = function(father, tag, index) {
            var tags = father.getElementsByTagName(tag);
            if(index == this.LAST_ELEMENT_INDEX) {
                return tags[tags.length - 1];
            }
            return tags[index];
        };

        IQQIImagineUl.prototype.getElementTrueWidth = function(id) {
            if(tv) {
                var element = document.getElementById(id);
                if("iqqiImagineContent" == id) {
                    if(!! element.style.width) {
                        return parseInt(element.style.width, 10);
                    }
                    return 1920;
                }
                return element.scrollWidth;
            }
            return document.getElementById(id).offsetWidth;
        };

        IQQIImagineUl.prototype.getElementTrueScroll = function(id) {
            if(tv) {
                return $("#" + id).position().left;
            }
            return document.getElementById(id).scrollLeft;
        };

        IQQIImagineUl.prototype.getElementTrueRight = function(id) {
            if(id == this.ul) {
                var element = document.getElementById(id);
                if(!! element.style.width) {
                    return parseInt(element.style.width, 10);
                }
                return 1920;
            }

            if(tv) {
                var element = document.getElementById(id);
                return $("#" + id).position().left + element.scrollWidth;
            }
            var element = document.getElementById(id);
            return element.offsetLeft + element.offsetWidth;
        };

        IQQIImagineUl.prototype.setSelection = function(index) {
            if(this.working == false) {
                return;
            }
            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }
            var lis = this.imagineUl.getElementsByTagName("li");
            if(!!lis[this.FocusedIndex]) {
                lis[this.FocusedIndex].firstChild.className = lis[this.FocusedIndex].firstChild.className.slice(0, lis[this.FocusedIndex].firstChild.className.lastIndexOf("_") + 1) + "Normal";
            }

            if(!!lis[index]) {
                lis[index].firstChild.className = lis[index].firstChild.className.slice(0, lis[index].firstChild.className.lastIndexOf("_") + 1) + "Focus";
                iqqiInfoNewLog("setSelection", "set focus to index " + index);
                this.FocusedIndex = index;
            }
        };

        IQQIImagineUl.prototype.responseToKeyRight = function() {
            iqqiInfoNewLog("responseToKeyRight", "show this.FocusedIndex: " + this.FocusedIndex + "; and this.BeginIndex: " + this.BeginIndex + "; and this.data.length: " + this.data.length + "; and this.dividerHiddenIndex: " + this.dividerHiddenIndex);
            if(this.FocusedIndex + 1 < (this.dividerHiddenIndex - this.BeginIndex)) {
                this.setSelection(this.FocusedIndex + 1);
            }
            else if(this.FocusedIndex + 1 == this.dividerHiddenIndex - this.BeginIndex && this.dividerHiddenIndex + 1 == this.data.length) {
                this.setSelection(this.FocusedIndex + 1);
                return;
            }
            else if(this.FocusedIndex == this.dividerHiddenIndex - this.BeginIndex && this.dividerHiddenIndex + 1 == this.data.length) {
                return;
            }
            else {
                this.BeginIndex = this.dividerHiddenIndex;
                this.isLeftArrowShow = true;
                this.leftArrow.style.display = "inline-block";
                this.leftArrow.style.visibility = "visible";
                this.handleArrowStatus();
                this.adaptRightData();
                this.setSelection(0);
            }
        };

        IQQIImagineUl.prototype.responseToKeyLeft = function() {
            if(this.FocusedIndex > 0) {
                this.setSelection(this.FocusedIndex - 1);
            }
            else if(this.BeginIndex == 0) {
                return;
            }
            else {
                this.dividerHiddenIndex = this.Ferry.pop();
                this.BeginIndex = this.Ferry.pop();
                if(this.BeginIndex == 0) {
                    this.isLeftArrowShow = false;
                    this.leftArrow.style.display = "none";
                    this.leftArrow.style.visibility = "hidden";
                    this.handleArrowStatus();
                }
                this.adaptLeftData();
                this.setSelection(this.dividerHiddenIndex - this.BeginIndex - 1);
            }
        };

        IQQIImagineUl.prototype.adaptRightData = function() {
            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }

            this.imagineUl.innerHTML = "";
            var elementTotalWidth = 0;
            for(var i = this.BeginIndex; i < this.data.length; i++) {
                var newLi = this.createSingleLi(this.data[i], i);
                this.imagineUl.appendChild(newLi);
                var big = elementTotalWidth > (this.isLeftArrowShow ? 1780 : 1850);
                elementTotalWidth += newLi.scrollWidth;
                if(elementTotalWidth > (this.isLeftArrowShow ? 1850 : 1920)) {
                    this.isRightArrowShow = true;
                    this.rightArrow.style.display = "inline-block";
                    this.rightArrow.style.visibility = "visible";
                    this.handleArrowStatus();
                    newLi.className = newLi.className.slice(0, newLi.className.lastIndexOf("_") + 1) + "Normal";
                    if(i == this.focusIndex) {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                    }
                    else {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                    }
                    this.dividerHiddenIndex = i;
                    if(big) {
                        this.dividerHiddenIndex = i - 1;
                    }
                    this.Ferry.push(this.dividerHiddenIndex);
                    for(var j = 0; j < this.Ferry.length; ++j) {
                        iqqiInfoNewLog("IQQIImagineUl.adaptRightData", "show this.Ferry[" + j + "] = " + this.Ferry[j]);
                    }
                    newLi.lastChild.className = newLi.lastChild.className.slice(0, newLi.lastChild.className.lastIndexOf("_") + 1) + "Hidden";
                    break;
                }
                newLi.className = newLi.className.slice(0, -6) + "Normal";
                if(i == this.focusIndex) {
                    newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                }
                else {
                    newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                }
                newLi.lastChild.className = newLi.lastChild.className.slice(0, newLi.lastChild.className.lastIndexOf("_") + 1) + "Normal";
                if(i == this.data.length - 1) {
                    this.isRightArrowShow = false;
                    this.rightArrow.style.display = "none";
                    this.rightArrow.style.visibility = "hidden";
                    this.handleArrowStatus();
                    this.dividerHiddenIndex = i;
                    newLi.lastChild.className = newLi.lastChild.className.slice(0, newLi.lastChild.className.lastIndexOf("_") + 1) + "Hidden";
                }
            }

            //var lis = this.imagineUl.getElementsByTagName("li");
            //var elementTotalWidth = 0;
            //for(var i = 0; i < lis.length; i++) {
            //    if(i + this.BeginIndex == this.data.length) {
            //        this.dividerHiddenIndex = i + this.BeginIndex - 1;
            //        lis[i - 1].getElementsByTagName("div")[1].style.visibility = "hidden";
            //        for(var j = i; j < lis.length; j++) {
            //            lis[j].style.visibility = "hidden";
            //            lis[j].getElementsByTagName("div")[1].visibility = "visible";
            //        }
            //        this.isRightArrowShow = false;
            //        this.rightArrow.style.display = "none";
            //        this.rightArrow.style.visibility = "hidden";
            //        this.handleArrowStatus();
            //        return;
            //    }
            //    lis[i].getElementsByTagName("div")[0].innerHTML = this.data[i + this.BeginIndex];
            //    lis[i].style.visibility = "visible";
            //    if(i == 0) {
            //        if(this.BeginIndex == 0) {
            //            lis[i].getElementsByTagName("div")[0].className = "iqqiImagineContentItem_FirstContent";
            //        }
            //        else {
            //            lis[i].getElementsByTagName("div")[0].className = "iqqiImagineContentItem_Content";
            //        }
            //    }
            //    var big = elementTotalWidth > (this.isLeftArrowShow ? 1780 : 1850);
            //    elementTotalWidth += lis[i].scrollWidth;
            //    if(elementTotalWidth > (this.isLeftArrowShow ? 1850 : 1920)) {
            //        this.isRightArrowShow = true;
            //        this.rightArrow.style.display = "inline-block";
            //        this.rightArrow.style.visibility = "visible";
            //        this.handleArrowStatus();
            //        lis[i].style.visibility = "visible";
            //        this.dividerHiddenIndex = i + this.BeginIndex;
            //        if(big) {
            //            this.dividerHiddenIndex = i - 1 + this.BeginIndex;
            //        }
            //        this.Ferry.push(this.dividerHiddenIndex);
            //        lis[i].getElementsByTagName("div")[1].style.visibility = "hidden";
            //        return;
            //    }
            //    if(i == this.dividerHiddenIndex) {
            //        lis[i].getElementsByTagName("div")[1].style.visibility = "visible";
            //    }
            //}

            //for(i = lis.length; i < this.data.length && i + this.BeginIndex < this.data.length; i++) {
            //    var newLi = this.createSingleLi(this.data[i], i);
            //    this.imagineUl.appendChild(newLi);
            //    var big = elementTotalWidth > (this.isLeftArrowShow ? 1780 : 1850);
            //    elementTotalWidth += newLi.scrollWidth;
            //    if(elementTotalWidth > (this.isLeftArrowShow ? 1850 : 1920)) {
            //        this.isRightArrowShow = true;
            //        this.rightArrow.style.display = "inline-block";
            //        this.rightArrow.style.visibility = "visible";
            //        this.handleArrowStatus();
            //        newLi.style.visibility = "visible";
            //        this.dividerHiddenIndex = i + this.BeginIndex;
            //        if(big) {
            //            this.dividerHiddenIndex = i - 1 + this.BeginIndex;
            //        }
            //        this.Ferry.push(this.dividerHiddenIndex);
            //        newLi.getElementsByTagName("div")[1].style.visibility = "hidden";
            //        break;
            //    }
            //    if(i == this.dividerHiddenIndex) {
            //        lis[i].getElementsByTagName("div")[1].style.visibility = "visible";
            //    }
            //    newLi.style.visibility = "visible";
            //}
        };

        IQQIImagineUl.prototype.adaptLeftData = function() {
            this.imagineUl = document.getElementById(this.ul);
            iqqiInfoNewLog("IQQIImagineUl.adaptLeftData", "show begin: " + this.BeginIndex + "; dividerHiddenIndex: " + this.dividerHiddenIndex);

            //if(this.BeginIndex == 0) {
                this.Ferry.push(this.BeginIndex);
            //}

            this.imagineUl.innerHTML = "";
            var elementTotalWidth = 0;
            for(var i = this.BeginIndex; i < this.data.length; i++) {
                var newLi = this.createSingleLi(this.data[i], i);
                this.imagineUl.appendChild(newLi);
                var big = elementTotalWidth > (this.isLeftArrowShow ? 1780 : 1850);
                elementTotalWidth += newLi.scrollWidth;
                if(elementTotalWidth > (this.isLeftArrowShow ? 1850 : 1920)) {
                    this.isRightArrowShow = true;
                    this.rightArrow.style.display = "inline-block";
                    this.rightArrow.style.visibility = "visible";
                    this.handleArrowStatus();
                    newLi.className = newLi.className.slice(0, newLi.className.lastIndexOf("_") + 1) + "Normal";
                    if(i == this.focusIndex) {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                    }
                    else {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                    }
                    this.dividerHiddenIndex = i;
                    if(big) {
                        this.dividerHiddenIndex = i - 1;
                    }
                    for(var j = 0; j < this.Ferry.length; ++j) {
                        iqqiInfoNewLog("IQQIImagineUl.adaptLeftData", "show this.Ferry[" + j + "] = " + this.Ferry[j]);
                    }
                    newLi.lastChild.className = newLi.lastChild.className.slice(0, newLi.lastChild.className.lastIndexOf("_") + 1) + "Hidden";
                    break;
                }
                newLi.className = newLi.className.slice(0, -6) + "Normal";
                if(i == this.focusIndex) {
                    newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                }
                else {
                    newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                }
                newLi.lastChild.className = newLi.lastChild.className.slice(0, newLi.lastChild.className.lastIndexOf("_") + 1) + "Normal";
            }
        };

        IQQIImagineUl.prototype.setBeginIndex = function(begin) {
            if(this.BeginIndex == begin) {
                iqqiInfoNewLog("setBeginIndex", "set to current begin index.");
                return;
            }
            if(begin == 0) {
                this.Ferry = [];
                this.hideLeftArrow();
            }
            this.BeginIndex = begin;
            this.Ferry.push(this.BeginIndex);

            this.checkLeftArrow();
            this.handleArrowStatus();

            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }
            this.imagineUl.innerHTML = "";
            var elementTotalWidth = 0;
            if(typeof this.data == "string") {
                var elementTotalWidth = 0;
                var newLi = this.createSingleLi(this.data, 0);
                this.imagineUl.appendChild(newLi);
                elementTotalWidth += newLi.scrollWidth;
                if(elementTotalWidth > 1920) {
                    this.isRightArrowShow = true;
                    this.rightArrow.style.display = "inline-block";
                    this.rightArrow.style.visibility = "visible";
                    this.handleArrowStatus();
                    newLi.className = newLi.className.slice(0, newLi.className.lastIndexOf("_") + 1) + "Normal";
                    if(0 == this.focusIndex) {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                    }
                    else {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                    }
                    this.dividerHiddenIndex = 0;
                    newLi.lastChild.className = newLi.lastChild.className.slice(0, newLi.lastChild.className.lastIndexOf("_") + 1) + "Hidden";
                    return;
                }
                newLi.className = newLi.className.slice(0, -6) + "Normal";
                if(0 == this.focusIndex) {
                    newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                }
                else {
                    newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                }
                this.findElementByTagIndex(this.findElementByTagIndex(this.imagineUl, "li", 0), "div", this.LAST_ELEMENT_INDEX).className = "iqqiImagineContentItem_Divider_Hidden";
                this.dividerHiddenIndex = 0;
                this.checkRightArrow(0);
                this.handleArrowStatus();
            }
            else if(typeof this.data == "object") {
                for(var i = this.BeginIndex; i < this.data.length; i++) {
                    var newLi = this.createSingleLi(this.data[i], i);
                    this.imagineUl.appendChild(newLi);
                    var big = elementTotalWidth > (this.isLeftArrowShow ? 1780 : 1850);
                    elementTotalWidth += newLi.scrollWidth;
                    if(elementTotalWidth > (this.isLeftArrowShow ? 1850 : 1920)) {
                        this.isRightArrowShow = true;
                        this.rightArrow.style.display = "inline-block";
                        this.rightArrow.style.visibility = "visible";
                        this.handleArrowStatus();
                        newLi.className = newLi.className.slice(0, -6) + "Normal";
                        if(i == this.focusIndex) {
                            newLi.firstChild.className = newLi.firstChild.className.slice(0, -6) + "Focus";
                        }
                        else {
                            newLi.firstChild.className = newLi.firstChild.className.slice(0, -6) + "Normal";
                        }
                        this.dividerHiddenIndex = i;
                        if(big) {
                            this.dividerHiddenIndex = i - 1;
                        }
                        this.Ferry.push(this.dividerHiddenIndex);
                        newLi.lastChild.className = newLi.lastChild.className.slice(0, -6) + "Hidden";
                        break;
                    }
                    newLi.className = newLi.className.slice(0, newLi.className.lastIndexOf("_") + 1) + "Normal";
                    if(i == this.focusIndex) {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Focus";
                    }
                    else {
                        newLi.firstChild.className = newLi.firstChild.className.slice(0, newLi.firstChild.className.lastIndexOf("_") + 1) + "Normal";
                    }
                    newLi.lastChild.className = newLi.lastChild.className.slice(0, newLi.lastChild.className.lastIndexOf("_") + 1) + "Normal";
                }
            }
        };

        IQQIImagineUl.prototype.getCurrentValue = function() {
            if(!!this.data) {
                return this.data[this.BeginIndex + this.FocusedIndex];
            }
        };

        IQQIImagineUl.prototype.checkAndLoadMore = function(native, root, type) {
            if(this.data.length >= this.ImagineCount) {
                return;
            }
            if(this.data.length - this.FocusedIndex - this.BeginIndex < this.MAX_ITEM_NUM_ENGLISH / 2) {
                var ml = this.ImagineCount - this.data.length > this.MAX_ITEM_NUM_ENGLISH / 2 ? this.MAX_ITEM_NUM_ENGLISH / 2 : this.ImagineCount - this.data.length;
                var more = native.IQQINativeGetCandidates(root, this.ImeType, this.data.length, ml, this.FirstLiUserInput, type);
                for(var i = 0; i < more.length; i++) {
                    this.data.push(more[i]);
                }
            }
        };

        IQQIImagineUl.prototype.fetchCurrentContent = function(rtl) {
            this.rtl = rtl;
            var pen = {};
            if(rtl) {
                pen.currentContent =
                    "                <div id=\"iqqiImagineLeftArrow\" class=\"iqqiImagineRightArrow\"></div>" +
                    "                <ul id=\"iqqiImagineContent\" class=\"iqqiIcon_RTL\">" +
                    "                </ul>" +
                    "                <div id=\"iqqiImagineRightArrow\" class=\"iqqiImagineLeftArrow\"></div>";
            }
            else {
                pen.currentContent =
                    "                <div id=\"iqqiImagineLeftArrow\" class=\"iqqiImagineLeftArrow\"></div>" +
                    "                <ul id=\"iqqiImagineContent\" class=\"iqqiIcon\">" +
                    "                </ul>" +
                    "                <div id=\"iqqiImagineRightArrow\" class=\"iqqiImagineRightArrow\"></div>";
            }
            if((!!this.data && this.data.length > 0) == false) {
                return pen.currentContent;
            }
            var imagineArea = document.getElementById("iqqiImagineAreaContainer");
            if(!!imagineArea.innerHTML) {
                return imagineArea.innerHTML;
            }
            // i do not think when code come into here is anything right.
            this.showUl();
            this.setImagineData(data);
        };

        IQQIImagineUl.prototype.resetAllData = function() {
            if(this.imagineUl == null) {
                this.imagineUl = document.getElementById(this.ul);
            }

            this.hideLeftArrow();
            this.hideRightArrow();
            this.handleArrowStatus();

            this.imagineUl.innerHTML = "";
            this.data = [];
            this.Ferry = [0];
            this.working = false;
            this.ImagineCount = 0;
        };
    }
    IQQIImagineUl.initialized = true;
}

function IQQILanSwitchDialog(id, browser, screen, curLang, curLangArray, lans, item, selector, label, callback) {
    this.id = id;
    this.type = "IQQILanSwitchDialog";

    this.screen = screen;
    this.browser = browser;
    this.curLang = curLang;
    this.curLangArray = curLangArray;
    this.item = item;
    this.selector = selector;
    this.label = label;
    this.callback = callback;
    this.working = false;
    this.step = 90;
    this.html = {
        "tag": "div",
        "classes": "iqqi_lan_switch_dialog",
        "id": "iqqi_lan_switch_dialog",
        "state": "normal",
        "closed_flag": false,
        "children": [
            {
                "tag": "div",
                "classes": "lan_switch_title",
                "id": "lan_switch_title",
                "state": "normal",
                "closed_flag": false,
                "content": "@string/lan_switch_title"
            },
            {
                "tag": "div",
                "classes": "lan_switch_item_area",
                "id": "lan_switch_item_area",
                "state": "normal",
                "closed_flag": false,
                "children": [
                    {
                        "tag": "ul",
                        "classes": "lan_switch_ul",
                        "id": "lan_switch_ul",
                        "state": "normal",
                        "closed_flag": false
                    },
                    {
                        "tag": "div",
                        "classes": "lan_switch_scroll_bar",
                        "id": "lan_switch_scroll_bar",
                        "state": "normal",
                        "closed_flag": false
                    }
                ]
            }
        ]
    };

    this.begin = 0;
    this.curFocusRow = 0;

    if(typeof IQQILanSwitchDialog.initialized == "undefined") {
        IQQILanSwitchDialog.prototype.classmaker = function(classes, state) {
            return classes + "_" + this.browser + "_" + this.screen + "_" + state;
        };
        /**
         * set the lans to show.
         * @param {Array} lans
         */
        IQQILanSwitchDialog.prototype.setLans = function(lans, browser, screen, curLang) {
            iqqiInfoNewLog("IQQILanSwitchDialog.setLans", "show !!lans: " + (!!lans));
            if(!!lans) {
                this.lans = lans;
                this.browser = browser;
                this.screen = screen;
                this.curLang = curLang;
                this.begin = 0;
                this.curFocusRow = 0;
                if(this.screen == "720P") {
                    this.step = 60;
                }
                else {
                    this.step = 90;
                }
                this.html.children[1].children[0].children = [];
                for(var key in lans) {
                    if(lans.hasOwnProperty(key)) {
                        createSingleLi(this, lans[key], key);
                    }
                }
                this.html.children[1].children[0].children[this.begin + this.curFocusRow].state = "focus";
                this.html.children[1].children[0].children[this.begin + this.curFocusRow].children[0].state = "focus";
                calculateScrollBar(this);
            }
        };

        IQQILanSwitchDialog.prototype.show = function(zIndex) {
            var element = document.getElementById(this.id);
            iqqiInfoNewLog("IQQILanSwitchDialog.show", "show logic enter, show !!element: " + (!!element));
            if(!!element) {
                element.innerHTML = this.getHtml();
                element.style.display = "block";
                element.style.direction = hiWebOsFrame.iqqi.operateData.curLangRtl ? "rtl":"ltr";
                calculateScrollBar(this);
                calculateUl(this);
                element.style.zIndex = zIndex;
                this.working = true;
            }
        };

        IQQILanSwitchDialog.prototype.hide = function() {
            var element = document.getElementById(this.id);
            if(!!element) {
                element.innerHTML = "";
                element.style.display = "none";
                element.style.direction = "";
                this.working = false;
            }
        };

        IQQILanSwitchDialog.prototype.getHtml = function() {
            return formatHtml(this, this.html, this.classmaker);
        };

        IQQILanSwitchDialog.prototype.onKeyDownDown = function() {
            iqqiInfoNewLog("IQQILanSwitchDialog.onKeyDownDown", "show row: " + this.curFocusRow + "; begin: " + this.begin + "; length: " + this.lans.length);
            if(this.begin + this.curFocusRow + 1 == this.lans.length) {
                return;
            }
            if(this.curFocusRow < 4) {
                blurItem(this, this.begin + this.curFocusRow);
                this.curFocusRow++;
                focusItem(this, this.begin + this.curFocusRow);
            }
            else if(this.begin + this.curFocusRow + 1 < this.lans.length) {
                blurItem(this, this.begin + this.curFocusRow);
                this.begin++;
                focusItem(this, this.begin + this.curFocusRow);
                scrollDown(this);
            }
            calculateScrollBar(this);

            return true;
        };

        IQQILanSwitchDialog.prototype.onKeyUpDown = function() {
            iqqiInfoNewLog("iqqi", "IQQILanSwitchDialog.onKeyUpDown", "show row: " + this.curFocusRow + "; begin: " + this.begin + "; length: " + this.lans.length);
            if(this.curFocusRow > 0) {
                blurItem(this, this.begin + this.curFocusRow);
                this.curFocusRow--;
                focusItem(this, this.begin + this.curFocusRow);
            }
            else if(this.begin > 0) {
                blurItem(this, this.begin + this.curFocusRow);
                this.begin--;
                focusItem(this, this.begin + this.curFocusRow);
                scrollUp(this);
            }
            calculateScrollBar(this);

            return true;
        };

        IQQILanSwitchDialog.prototype.onKeyEnterDown = function() {
            iqqiInfoNewLog("IQQILanSwitchDialog.onKeyEnterDown", "enter.");
            this.hide();
            if(!!this.callback) {
                this.callback.call(this, this.lans[this.begin + this.curFocusRow]);
            }
            return true;
        };

        IQQILanSwitchDialog.prototype.onKeyEscDown = function() {
            iqqiInfoNewLog("IQQILanSwitchDialog.onKeyEscDown", "enter.");
            this.hide();
            return true;
        };

        /**
         * create single language item in the list.
         * @param {IQQILanSwitchDialog} self
         * @param lan
         * @param {string} index
         */
        function createSingleLi(self, lan, index) {
            var html = {
                "tag": "li",
                "classes": "iqqi_lan_switch_item",
                "id": "",
                "state": "normal",
                "closed_flag": false,
                "children": [
                    {
                        "tag": "div",
                        "classes": "iqqi_lan_switch_item_selector",
                        "id": "",
                        "state": "normal",
                        "closed_flag": false
                    },
                    {
                        "tag": "div",
                        "classes": "iqqi_lan_switch_item_name",
                        "id": "",
                        "state": "normal",
                        "closed_flag": false
                    }
                ]
            };

            html.id = self.item + "_" + index;

            html.children[0].id = self.selector + "_" + index;

            html.children[1].id = self.label + "_" + index;
            html.children[1].content = lan.name;

            iqqiInfoNewLog("IQQILanSwitchDialog.createSingleLi", "show curLang: " + self.curLang);
            if(lan.code == self.curLang) {
                self.begin = parseInt(index);
                if(self.lans.length <= 5) {
                    self.begin = 0;
                }
                else if(self.lans.length - self.begin <= 5) {
                    self.begin = self.lans.length - 5;
                }

                self.curFocusRow = index - self.begin;

                html.state = "focus";
                html.children[0].state = "focus";
            }

            if (typeof self.html.children[1].children[0].children == "undefined") {
                self.html.children[1].children[0].children = [];
            }
            self.html.children[1].children[0].children.push(html);
        }

        function calculateUl(self) {
            var ul = document.getElementById(self.html.children[1].children[0].id);
            if(!!ul) {
                ul.scrollTop = self.begin * self.step;
            }
        }

        function scrollUp(self) {
            var ul = document.getElementById(self.html.children[1].children[0].id);
            if(!!ul) {
                if(ul.scrollTop <= 0) {
                    ul.scrollTop = 0;
                    return;
                }
                self.html.children[1].children[0]["style"] = "scrollTop: " + (ul.scrollTop - this.step) + "px;";
                ul.scrollTop -= self.step;
            }
        }

        function scrollDown(self) {
            if(self.begin + self.curFocusRow == self.lans.length) {
                return;
            }
            var ul = document.getElementById(self.html.children[1].children[0].id);
            iqqiInfoNewLog("IQQILanSwitchDialog.scrollDown", "show id: " + self.html.children[1].children[0].id);
            if(!!ul) {
                self.html.children[1].children[0]["style"] = "scrollTop: " + (ul.scrollTop + this.step) + "px;";
                ul.scrollTop += self.step;
            }
        }

        /**
         * calculate scroll bar position and length.
         * @param {IQQILanSwitchDialog} self
         */
        function calculateScrollBar(self) {
            var scroll = document.getElementById(self.html.children[1].children[1].id);
            if(self.lans.length < 6) {
                self.html.children[1].children[1].state = "hidden";
                if(!!scroll) {
                    scroll.className = self.classmaker(self.html.children[1].children[1].classes, self.html.children[1].children[1].state);
                }
                return;
            }
            var top = 20 + Math.floor((self.begin / self.lans.length) * 410);
            var height = Math.floor((5 / self.lans.length) * 410);
            iqqiInfoNewLog("IQQILanSwitchDialog.calculateScrollBar", "show top: " + top + "; height: " + height);
            self.html.children[1].children[1]["style"] = "top: " + top + "px; height: " + height + "px;";
            if(!!scroll) {
                scroll.style.top = top + "px";
                scroll.style.height = height + "px";
            }
        }

        function blurItem(self, index) {
            self.html.children[1].children[0].children[index].state = "normal";
            var oli = document.getElementById(self.html.children[1].children[0].children[index].id);
            if(!!oli) {
                oli.className = self.classmaker(self.html.children[1].children[0].children[index].classes, self.html.children[1].children[0].children[index].state);
            }
            self.html.children[1].children[0].children[index].children[0].state = "normal";
            var oball = document.getElementById(self.html.children[1].children[0].children[index].children[0].id);
            if(!!oball) {
                oball.className = self.classmaker(self.html.children[1].children[0].children[index].children[0].classes, self.html.children[1].children[0].children[index].children[0].state);
            }
        }

        function focusItem(self, index) {
            self.html.children[1].children[0].children[index].state = "focus";
            var oli = document.getElementById(self.html.children[1].children[0].children[index].id);
            iqqiInfoNewLog("IQQILanSwitchDialog.focusItem", "show id: " + self.html.children[1].children[0].children[index].id);
            if(!!oli) {
                oli.className = self.classmaker(self.html.children[1].children[0].children[index].classes, self.html.children[1].children[0].children[index].state);
            }
            self.html.children[1].children[0].children[index].children[0].state = "focus";
            var oball = document.getElementById(self.html.children[1].children[0].children[index].children[0].id);
            if(!!oball) {
                oball.className = self.classmaker(self.html.children[1].children[0].children[index].children[0].classes, self.html.children[1].children[0].children[index].children[0].state);
            }
        }

        function formatHtml(self, html, classmaker) {
            var segments = [];
            for(var key in html) {
                switch(key) {
                    case "tag":
                        segments.push("<" + html.tag);
                        if(html.closed_flag == false) {
                            segments.push(">");
                        }
                        else {
                            segments.push(" />");
                        }
                        break;
                    case "id":
                        segments.splice(1, 0, " id=\"" + html.id + "\"");
                        break;
                    case "classes":
                        segments.splice(1, 0, " class=\"" + classmaker.call(self, html.classes, html.state) + "\"");
                        break;
                    case "children":
                        for(var child in html.children) {
                            segments.push(formatHtml(self, html.children[child], classmaker));
                        }
                        break;
                    case "content":
                        if(/@string[^$]+/g.test(html.content)) {
                            var name = html.content.slice(8);
                            segments.push(strings[name][self.curLang] || strings[name][self.curLangArray[0]]);
                            break;
                        }
                        segments.push(html.content);
                        break;
                    case "style":
                        segments.splice(3, 0, "style=\"" + html.style + "\"");
                        break;
                    case "value":
                        segments.splice(3, 0, " value=\"" + html.value + "\"");
                        break;
                }
            }
            html.closed_flag == false && segments.push("</" + html.tag + ">");
            return segments.join("");
        }
        IQQILanSwitchDialog.initialized = true;
    }

    this.setLans(lans, browser, screen, curLang);
}

function IQQINativeInterface() {

    this.nativeInitialized = false;

    if(typeof IQQINativeInterface.initialized == 'undefined') {
        IQQINativeInterface.TYPE_CANDIDATE_ALL = 0;
        IQQINativeInterface.TYPE_CANDIDATE_SINGLE_CHARACTOR_WORD_ONLY = 1;
        IQQINativeInterface.TYPE_CANDIDATE_USER_DICTIONARY_WORD_FIRST_LONGEST_FIRST = 2;
        IQQINativeInterface.TYPE_CANDIDATE_USER_DICTIONARY_WORD_FIRST_SINGLE_WORD_FIRST = 3;

        IQQINativeInterface.prototype.IQQINativeInitialize = function() {

            if(this.nativeInitialized) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeInitialize", "native has been initialized.");
                return;
            }
            var predicDBPath = '/3rd_rw/iqqi/PredicDB';
            var userDBPath = '/3rd_rw/iqqi/UserDB';
            var iqqiResultInitial;
            try {
                iqqiResultInitial = imejs.iqqi.initial(predicDBPath, userDBPath);
            }
            catch(ex) {
                iqqiErrorNewLog("IQQINativeInterface, IQQINativeInitialize", "show error: " + ex, ex);
                this.nativeInitialized = false;
                return false;
            }

            if (iqqiResultInitial.rc < 0) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeInitialize", "show rc: " + iqqiResultInitial.rc + "; and errMsg: " + iqqiResultInitial.errMsg);
                this.nativeInitialized = false;
                return false;
            }

            iqqiInfoNewLog("IQQINativeInterface, IQQINativeInitialize", "native has been successfully initialized");
            this.nativeInitialized = true;
            return true;
        };

        IQQINativeInterface.prototype.IQQINativeGetVersion = function(defVersion) {
            if(this.nativeInitialized == false) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetVersion", "native has not been successfully initialized, defVersion returned.");
                return defVersion;
            }
            var iqqiResultVersion;
            try {
                iqqiResultVersion = imejs.iqqi.version();
            }
            catch(ex) {
                iqqiErrorNewLog("IQQINativeInterface, IQQINativeGetVersion", "exception happened, show error: " + ex, ex);
                return defVersion;
            }

            return iqqiResultVersion.version;
        };

        IQQINativeInterface.prototype.IQQINativeGetCandidateCount = function(root, lang, first, type) {
            if(this.nativeInitialized == false) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetCandidateCount", "native has not been successfully initialized, -1 returned.");
                return -1;
            }
            if(lang == -1) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetCandidateCount", "ime type is illegal, 1 returned.");
                return 1;
            }
            var iqqiResultGetCandidateCount;
            try {
                iqqiResultGetCandidateCount = imejs.iqqi.getCandidateCount(lang, root, first, type);
            }
            catch (ex) {
                iqqiErrorNewLog("IQQINativeInterface, IQQINativeGetCandidateCount", "iqqiNativeGetCandidateCount, show error: " + ex, ex);
                return -1;
            }

            if(iqqiResultGetCandidateCount.rc < 0) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetCandidateCount", "show rc: " + iqqiResultGetCandidateCount.rc + "; and errMsg: " + iqqiResultGetCandidateCount.errMsg);
                return -1;
            }

            return iqqiResultGetCandidateCount.count;
        };

        IQQINativeInterface.prototype.IQQINativeGetCandidates = function(root, lang, begin, count, first, type) {
            var result = [];
            if(this.nativeInitialized == false) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetCandidates", "native has not been successfully initialized, root " + root + ", returned as defalut.");
                first && result.push(root);
                return result;
            }
            if(lang == -1) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetCandidateCount", "ime type is illegal, root returned.");
                first && result.push(root);
                return result;
            }
            var iqqiResultGetCandidates;
            try {
                iqqiResultGetCandidates = imejs.iqqi.getCandidates(lang, root, first, type, begin, count);
            }
            catch(ex) {
                iqqiErrorNewLog("IQQINativeInterface, IQQINativeGetCandidates, ", "show error: " + ex, ex);
                first && result.push(root);
                return result;
            }
            if (iqqiResultGetCandidates.rc < 0) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetCandidates", "show rc: " + iqqiResultGetCandidates.rc + "; and errMsg: " + iqqiResultGetCandidates.errMsg);
                first && result.push(root);
                return result;
            }

            for (var i = 0; i < iqqiResultGetCandidates.length; i++) {
                result.push(iqqiResultGetCandidates[i]);
            }
            return result;
        };

        IQQINativeInterface.prototype.IQQINativeLearnWord = function(lang, root, con) {
            if(this.nativeInitialized == false) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeLearnWord", "native has not been successfully initialized, returned directly.");
                return;
            }
            var iqqiResultLearnWord;
            try {
                iqqiResultLearnWord = imejs.iqqi.learnWord(lang, root, con);
            }
            catch(ex) {
                iqqiErrorNewLog("IQQINativeInterface, IQQINativeLearnWord, ", "show error: " + ex, ex);
                return;
            }
            if (iqqiResultLearnWord.rc < 0) {
                iqqiInfoNewLog("IQQINativeInterface, IQQINativeLearnWord", "show rc: " + iqqiResultLearnWord.rc + "; and errMsg: " + iqqiResultLearnWord.errMsg);
                return;
            }
        };

        IQQINativeInterface.prototype.IQQINativeGetCurLangIQQIType = function(lang) {
            iqqiInfoNewLog("IQQINativeInterface, IQQINativeGetCurLangIQQIType", "show lang is " + lang);
            switch(lang) {
                case "ENG":
                    return imejs.iqqi.ENGLISH;
                case "CHI":
                    return imejs.iqqi.SIMPLIFIED_CHINESE_PINYIN;
            }
        };
    }
    IQQINativeInterface.initialized = true;
}

function iqqiInputBeforeUpHandler() {
    this.event.preventDefault();
    return true;
}

function iqqiInputAfterUpHandler(opeData) {
    iqqiInfoNewLog("iqqiInputAfterUpHandler", "show dynamicPosition: " + opeData.dynamicPosition);
    opeData.InputManager.requestFocus();

    this.event.preventDefault();
    return true;
}

function iqqiInputBefDownHandler(opeData) {
    this.event.preventDefault();

    label: if(!!opeData.imagineUl && opeData.imagineUl.working) {
        this.nav.downTo = "iqqiImagineContent";
        this.page.getCaE("iqqiImagineContent").classes.focus = "iqqiImagineContent";
        if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
            break label;
        }
        opeData.imagineUl.setBeginIndex(0);
        opeData.imagineUl.setSelection(0);
    }
    else {
        opeData.curFocusRow = 4;
        for(opeData.curFocusCol = 14; opeData.curFocusCol >= 0; opeData.curFocusCol--) {
            var tdown = document.getElementById(opeData.rows[opeData.curFocusRow] + "_" + opeData.curFocusCol);
            if (!!tdown) {
                if ("iqqiLineKeyHidden" == tdown.className) {
                    continue;
                }
                iqqiInfoNewLog("iqqiInputBefDownHandler", "show target id: " + tdown.id);
                var tcae = this.page.getCaE(tdown.id);
                tcae.classes.focus = tdown.className.slice(0, -6) + "Focus";

                this.nav.downTo = tdown.id;
                break;
            }
        }
    }
    var ccae = this.page.getCaE("iqqiInputContainer");
    var p_cae = this.page.getCaE("iqqiPosition");
    if("password" == opeData.inputAttr || "numberpassword" == opeData.inputAttr || "password" == opeData.inputMethod || "numberpassword" == opeData.inputMethod) {
        ccae.classes.selected = "iqqiInputContainerPassword";
    }
    else {
        ccae.classes.selected = "iqqiInputContainer";
    }
    p_cae.classes.selected = IQQIUtils.formatNewClass(document.getElementById(p_cae.id), "Normal");
    this.classes.normal = IQQIUtils.formatNewClass(document.getElementById(this.id), "Normal");
    opeData.dynamicPosition = opeData.InputManager.getCaretPosition("iqqiInput");
    opeData.dynamicValue = opeData.InputManager.getValue(opeData.InputManager.inputId);
    opeData.needSetCaret = true;
    return true;
}

function InputManager(sourceId, inputAttr, inputMethod, maxLength, min, max, display) {
    this.mask = "•";
    this.inputId = "iqqiInput";
    this.imagineAreaId = "iqqiInputImagineArea";
    this.imagineAreaCss = "iqqiInputImagineArea";
    this.caretId = "iqqiCursor";
    this.caretCss = "iqqiCursor";
    this.caretPositionDetectContainerId = "iqqiCaretPositionDetectContainer";
    this.caretPositionDetectContainerCss = "iqqiCaretPositionDetectContainer";
    this.caretPositionDetectAreaId = "iqqiCaretPositionDetectArea";
    this.caretPositionDetectAreaCss = "iqqiCaretPositionDetectArea";
    this.rtlDetectAreaId = "iqqiRtlDetectArea";
    this.rtlDetectAreaCss = "iqqiRtlDetectArea";
    this.textContainerContainerCss = "iqqiInputTextContainerContainer"; // for now its hidden
    this.textContainerCss = "iqqiInputTextContainer"; // for now its hidden

    if(typeof InputManager.initialized == "undefined"||typeof getDynamicPosition=="undefined") {
        InputManager.prototype.resetTo = function(sourceId, inputAttr, inputMethod, maxLength, min, max, display) {
            this.sourceId = sourceId;
            this.inputAttr = inputAttr;
            this.inputMethod = inputMethod;
            this.maxLength = maxLength;
            this.min = min;
            this.max = max;
            this.display = display;
            this.oldValue = this.getValue(this.sourceId);
            this.oldPosition = this.getCaretPosition(this.sourceId);
            iqqiInfoNewLog("InputManager.prototype.resetTo", "show id: " + this.sourceId + "; inputAttr: " + this.inputAttr + "; maxLength: " + this.maxLength + "; min: " + this.min + "; max: " + this.max + "; oldPosition: " + this.oldPosition + "; oldValue: " + this.oldValue);

            this.dynamicValue = this.oldValue;
            this.dirty = true;
            this.password = this.oldValue || "";

            attachPageScroller.call(this);
        };

        /**
         * since there is too much parameters needed to initialize an InputManager, and some of there may not be set every time. we wrote this method because we still imagine that this class can be copied and reused unchanging any logic
         * @param {string} inputId
         * @param {string} imagineAreaId
         * @param {string} imagineAreaCss
         * @param {string} caretId
         * @param {string} caretCss
         * @param {string} caretPositionDetectContainerId this area is a div that uses to replace the text node when the text node's parent is the iqqiInput. it will be erased after all work has been done. this property is needed only when you call findCaretPixelPosition_V2 method.
         * @param {string} caretPositionDetectContainerCss
         * @param {string} caretPositionDetectAreaId this area is a div to detect character's rtl property. normally its hidden, width is auto. detect logic will remove its content but left its structure. this property is needed only when you call findCaretPixelPosition method.
         * @param {string} caretPositionDetectAreaCss
         * @param {string} rtlDetectAreaId
         * @param {string} rtlDetectAreaCss
         */
        InputManager.prototype.setProperty = function(inputId, imagineAreaId, imagineAreaCss, caretId, caretCss, caretPositionDetectContainerId, caretPositionDetectContainerCss, caretPositionDetectAreaId, caretPositionDetectAreaCss, rtlDetectAreaId, rtlDetectAreaCss) {
            this.inputId = inputId;
            this.imagineAreaId = imagineAreaId;
            this.imagineAreaCss = imagineAreaCss;
            this.caretId = caretId;
            this.caretCss = caretCss;
            this.caretPositionDetectAreaId = caretPositionDetectAreaId;
            this.caretPositionDetectAreaCss = caretPositionDetectAreaCss;
            this.rtlDetectAreaId = rtlDetectAreaId;
            this.rtlDetectAreaCss = rtlDetectAreaCss;
        };

        InputManager.prototype.setDisplay = function(display) {
            if(display == undefined) {
                return;
            }
            this.display = display;
        };

        InputManager.prototype.pushNumbers = function(lan, numbers) {
            if(lan && numbers && numbers.length) {
                this.numbers = this.numbers || {};
                this.numbers[lan] = numbers;
            }
        };

        InputManager.prototype.isNumberValue = function(id) {
            if(/\w+?_\d+/gm.test(id)) {
                var paths = id.split("_");
                if(!!this.display[paths[0]] && !!this.display[paths[0]][paths[1]]) {
                    return this.display[paths[0]][paths[1]] == IQQI_RESPONSE_TYPE_NUM;
                }
            }
            else if(id.length == 1 && this.numbers) {
                for(var key in this.numbers) {
                    if(this.numbers.hasOwnProperty(key) && this.numbers[key].indexOf(id) > -1) {
                        return true;
                    }
                }
            }
            return false;
        };

        InputManager.prototype.isPuncValue = function(id) {
            if(/\w+?_\d+/gm.test(id)) {
                var paths = id.split("_");
                if(!!this.display[paths[0]] && !!this.display[paths[0]][paths[1]]) {
                    return this.display[paths[0]][paths[1]] == IQQI_RESPONSE_TYPE_SYMBOL;
                }
            }
            return false;
        };

        InputManager.prototype.isWordValue = function(id) {
            if(/\w+?_\d+/gm.test(id)) {
                var paths = id.split("_");
                if(!!this.display[paths[0]] && !!this.display[paths[0]][paths[1]]) {
                    return this.display[paths[0]][paths[1]] == IQQI_RESPONSE_TYPE_WORD;
                }
            }
            return false;
        };

        InputManager.prototype.requestFocus = function(scroll) {
            iqqiInfoNewLog("InputManager.prototype.requestFocus", "show position: " + getDynamicPosition.call(this));
            var dynamic = getDynamicPosition.call(this);
            if(dynamic != undefined) {
                this.setCaretPosition(this.inputId, dynamic, scroll);
            }
        };

        InputManager.prototype.releaseFocus = function() {
            var input = document.getElementById(this.inputId);
            if(input) {
                input.blur();
            }
        };

        /**
         * what is rewrite?
         * just replace the current input with an exactly same element, somehow you can say a clone. thus we can focus opera tv to refresh this element's ui.
         * do not use this method other than refresh ui purpose, mostly please consider requestFocus;
         * this fucking disgusting method, damn the opera browser.
         */
        InputManager.prototype.rewrite = function() {
            if(typeof findTwinNode != "function" || InputManager.prototype.rewrite.initialized == undefined) {
                /**
                 * in a rewrite logic, the old nodes are removed, new nodes are added.
                 * the may be same from property, but not the same.
                 * @param {Node} node
                 * @param {Node} current
                 */
                function findTwinNode(node, current) {
                    if(node.nodeType == 1) {
                        return document.getElementById(node["id"]);
                    }
                    else if(node.nodeType == 3) {
                        if(current) {
                            if(current.nodeType == 3) {
                                if(isTwinNode.call(this, node, current)) {
                                    return current;
                                }
                            }
                            else if(current.nodeType == 1) {
                                if(current.hasChildNodes()) {
                                    for(var i = 0; i < current.childNodes.length; ++i) {
                                        var result = findTwinNode(node, current.childNodes[i]);
                                        if(result) {
                                            return result;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            return findTwinNode(node, document.getElementById(this.inputId));
                        }
                    }
                }

                InputManager.prototype.rewrite.initialized = true;
            }

            var input = document.getElementById(this.inputId);
            var parent = input.parentNode;
            var node = input.cloneNode(true);
            node.innerHTML = this.dynamicValue;
            parent.replaceChild(node, input);

            this.selectedNode = findTwinNode.call(this, this.selectedNode, input);

            this.dirty = true;
            this.requestFocus(this.scrollLeft || 0);
        };

        InputManager.prototype.isValidInput = function(id) {
            var currentValue = this.getValue(this.inputId);
            if(currentValue) {
                if(currentValue.length >= this.maxLength) {
                    return false;
                }
                if(this.inputAttr == "number" || this.inputAttr == "numberpassword") {
                    if(this.isNumberValue(id)) {
                        return true;
                    }
                    iqqiInfoNewLog("InputManager, isValidInput", "not number type clicked in number input.");
                    return false;
                }
            }
            return true;
        };

        InputManager.prototype.shouldStopImagine = function(imagineRoot) {
            var originValue = this.getValue(this.inputId);
            if(originValue.length > this.maxLength || imagineRoot.length > 18) {
                this.commit();
                return true;
            }
            return false;
        };

        InputManager.prototype.getCaretPosition = function(id) {
            iqqiInfoNewLog("InputManager.getCaretPosition", "show id: " + id);

            if(typeof getSelection != "function" || InputManager.prototype.getCaretPosition.initialized == undefined) {
                function getSelection(node) {
                    getSelection.position = valid(getSelection.position, 0);
                    var sel = document.getSelection();
                    var range = sel.getRangeAt(0);
                    if(range) {
                        if(node == range.commonAncestorContainer) {
                            getSelection.position += range.startOffset;
                            getSelection.found = true;
                        }
                        else if(node.nodeType == 3) {
                            getSelection.position += node.length;
                        }
                        else if(node.nodeType == 1) {
                            if(node.hasChildNodes()) {
                                for(var i = 0; i < node.childNodes.length; ++i) {
                                    if(getSelection.found) {
                                        break;
                                    }
                                    getSelection.call(this, node.childNodes[i]);
                                }
                            }
                        }
                    }
                    return getSelection.position;
                }

                InputManager.prototype.getCaretPosition.initialized = true;
            }

            var ctrl =document.getElementById(id);
            var caretPos = 0;
            if(!!ctrl) {
                if(ctrl.tagName == "INPUT") {
                    if (!!document.selection) {
                        ctrl.focus();
                        var Sel = document.selection.createRange();
                        Sel.moveStart('character', -ctrl.value.length);
                        caretPos = Sel.text.length;
                    }
                    else if (!!ctrl.selectionStart || ctrl.selectionStart == '0') {
                        caretPos = ctrl.selectionStart;
                    }
                }
                else {
                    delete getSelection.position;
                    delete getSelection.found;
                    //caretPos = getSelection.call(this, ctrl);
                    caretPos = getDynamicPosition.call(this);
                }
            }
            return (caretPos);
        };

        InputManager.prototype.setCaretPosition = function(id, pos, scroll) {
            iqqiInfoNewLog("InputManager, setCaretPosition", "show id: " + id + "; and pos: " + pos);
            iqqiInfoNewLog("InputManager.getCaretPosition", "IQQIUtils.getSizeScale(): " + IQQIUtils.getSizeScale());
            iqqiInfoNewLog("InputManager.getCaretPosition", "IQQIUtils.leftRange: " + IQQIUtils.leftRange);
            var ctrl =document.getElementById(id);
            if(!!ctrl) {
                setDynamicPosition.call(this, pos);

                ctrl.focus();
                if(ctrl.tagName == "INPUT") {
                    var absLogicalPosition = (pos["type"] == "absolute" && pos.position) || this.absoluteLogicalPosition;
                    if(ctrl.setSelectionRange) {
                        try {
                            ctrl.setSelectionRange(absLogicalPosition, absLogicalPosition);
                        }
                        catch(ex) {
                            iqqiErrorNewLog("InputManager.setCaretPosition", "show error: " + ex, ex);
                        }
                    }
                    else if(ctrl.createTextRange) {
                        var range = ctrl.createTextRange();
                        range.collapse(false);
                        range.moveEnd('character', absLogicalPosition);
                        range.moveStart('character', absLogicalPosition);
                        range.select();
                    }
                }
                else {
                    if(pos == 0) {
                        setRange.call(this, ctrl, 0, 0);
                    }
                    else {
                        if(ctrl.clientWidth > 0) {
                            if(pos != undefined) {
                                if(typeof pos == "number") {
                                    var sorted = sortNodePosition.call(this, ctrl, this.rtl, true);
                                    if(sorted && (sorted.length > pos)) {
                                        //setRange.call(this, sorted[pos].node, sorted[pos].position, scroll, Math.round(sorted[pos].offset * IQQIUtils.getSizeScale()));
                                        setRange.call(this, sorted[pos].node, sorted[pos].position, scroll, Math.round(IQQIUtils.leftRange+sorted[pos].offset * IQQIUtils.getSizeScale()));

                                    }
                                }
                                else {
                                    //setRange.call(this, pos.node, pos.position, scroll, Math.round(pos.offset * IQQIUtils.getSizeScale()));
                                    setRange.call(this, pos.node, pos.position, scroll, Math.round(IQQIUtils.leftRange+pos.offset * IQQIUtils.getSizeScale()));
                                }
                            }
                        }
                    }

                    var newAbsoluteLogicalPosition = getAbsoluteLogicalPositionByNodePosition.call(this, getNodePositionByDynamicPosition.call(this, getDynamicPosition.call(this)));
                    this.absoluteLogicalPosition = newAbsoluteLogicalPosition == undefined ? (this.absoluteLogicalPosition == undefined ? this.oldPosition : 0) : newAbsoluteLogicalPosition;
                }
                ctrl.focus();
            }
        };

        InputManager.prototype.executeBackSpace = function() {
            if(this.absoluteLogicalPosition == 0) {
                return;
            }

            var input = document.getElementById(this.inputId);
            if(input) {
                this.dirty = true;

                if(input.tagName == "INPUT") {
                    var originValue = input.value;
                    if(originValue.length == this.absoluteLogicalPosition) {
                        originValue = originValue.slice(0, -1);
                    }
                    else {
                        var pre = originValue.slice(0, this.absoluteLogicalPosition - 1);
                        var tail = originValue.slice(this.absoluteLogicalPosition);
                        originValue = pre + tail;
                    }
                    this.setValue(this.inputId, originValue, this.absoluteLogicalPosition - 1);
                }
                else {
                    if(this.caretOffset) {
                        var curCaretNodeValue = this.selectedNode.textContent;
                        this.selectedNode.textContent = curCaretNodeValue.slice(0, this.caretOffset - 1) + curCaretNodeValue.slice(this.caretOffset);
                        if(this.isPassword()) {
                            this.password = this.password && (this.password.slice(0, this.absoluteLogicalPosition - 1) + this.password.slice(this.absoluteLogicalPosition));
                        }
                        iqqiInfoNewLog("InputManager.prototype.executeBackSpace.in", "show start: " + this.caretOffset);
                        this.dynamicValue = input.innerHTML;
                        if(this.caretOffset - 1) {
                            setDynamicPosition.call(this, convertPositionToDynamicPosition.call(this, this.selectedNode, this.caretOffset - 1));
                            this.setCaretPosition(this.inputId, getDynamicPosition.call(this));
                            return;
                        }
                        var node_p = getPreviousTextNode.call(this, this.selectedNode);
                        cutoffBranchIfEmpty.call(this, this.selectedNode);
                        if(node_p) {
                            setDynamicPosition.call(this, convertPositionToDynamicPosition.call(this, node_p, node_p.length));
                            this.setCaretPosition(this.inputId, getDynamicPosition.call(this));
                        }
                        else {
                            if(this.selectedNode.length) {
                                setDynamicPosition.call(this, convertPositionToDynamicPosition.call(this, this.selectedNode, 0));
                                this.setCaretPosition(this.inputId, getDynamicPosition.call(this));
                            }
                            else {
                                var node_n = getNextTextNode.call(this, this.selectedNode);
                                if(node_n) {
                                    setDynamicPosition.call(this, convertPositionToDynamicPosition.call(this, node_n, 0));
                                    this.setCaretPosition(this.inputId, getDynamicPosition.call(this));
                                }
                                else {
                                    setDynamicPosition.call(this, 0);
                                    this.absoluteLogicalPosition = 0;
                                    setRange.call(this, input, 0);
                                }
                            }
                        }
                    }
                    else {
                        var node = getPreviousTextNode.call(this, this.selectedNode);
                        cutoffBranchIfEmpty.call(this, this.selectedNode);
                        iqqiInfoNewLog("InputManager.prototype.executeBackSpace.previous", "node: " + node + "; node.text: " + (node && node.textContent));
                        if(node) {
                            node.textContent = node.textContent.slice(0, -1);
                            if(this.isPassword()) {
                                this.password = this.password && (this.password.slice(0, this.absoluteLogicalPosition - 1));
                            }
                            this.dynamicValue = input.innerHTML;
                            setDynamicPosition.call(this, convertPositionToDynamicPosition.call(this, this.selectedNode, curCaretPosition - 1));
                            this.setCaretPosition(this.inputId, getDynamicPosition.call(this));
                        }
                    }
                }
            }
        };

        /**
         * new patch makes this method very dangerous, since we can not judge a character is word so that redirect the call to insert imagine.
         * the method remain its old definition, just insert the value into the area.
         * in addition, this method will flatten the input by remove all imagine area.
         * @param {string} value
         */
        InputManager.prototype.insertValue = function(value) {
            var originValue = this.getValue(this.inputId);
            if(value.length + originValue.length > this.maxLength) {
                value = value.slice(0, this.maxLength - originValue.length);
            }
            var caretMove = value.length;
            //var curCaretPosition = convertDynamicPositionToPosition.call(this, this.getCaretPosition(this.inputId));
            //var t_absLogicalPosition = getAbsoluteLogicalPositionByNodePosition.call(this, getNodePositionByDynamicPosition.call(this, this.getCaretPosition(this.inputId)));
            //var absLogicalPosition = (getAbsoluteLogicalPositionByNodePosition.call(this, getNodePositionByDynamicPosition.call(this, this.getCaretPosition(this.inputId)))) || this.oldPosition;
            if(originValue.length == this.absoluteLogicalPosition) {
                value = originValue + value;
            }
            else {
                var pre = originValue.slice(0, this.absoluteLogicalPosition);
                var tail = originValue.slice(this.absoluteLogicalPosition);
                value = pre + value + tail;
            }

            if(this.inputAttr == "number" && !!this.max && parseInt(value) > this.max) {
                iqqiInfoNewLog("InputManager.insertValue", "value is bigger than max, shield this input, show value: " + value + "; max: " + this.max);
                return;
            }
            iqqiInfoNewLog("InputManager.insertValue", "show final value to insert: " + value);

            this.setValue(this.inputId, value,  this.absoluteLogicalPosition + caretMove);
        };

        /**
         * imagine insert handler.
         * @param value the word characters you want to insert.
         * @return {*} the final imagine value.
         */
        InputManager.prototype.insertImagine = function(value) {

            var input = document.getElementById(this.inputId);
            var caretPosition = convertDynamicPositionToPosition.call(this, this.getCaretPosition(this.inputId));

            InputManager.prototype.insertImagine.final = "";
            this.dirty = true;

            if(isCaretInImagine.call(this)) {
                this.selectedNode.textContent = this.selectedNode.textContent.slice(0, this.caretOffset) + value + this.selectedNode.textContent.slice(this.caretOffset);

                this.dynamicValue = input.innerHTML;
                setDynamicPosition.call(this, convertPositionToDynamicPosition.call(this, this.selectedNode, caretPosition + value.length));

                this.setCaretPosition(this.inputId, getDynamicPosition.call(this));
                InputManager.prototype.insertImagine.final = this.selectedNode.textContent;
            }
            else {
                var cValue = this.getValue(this.inputId);
                input.innerHTML = cValue.slice(0, caretPosition) + "<span id=\"" + this.imagineAreaId + "\" class=\"" + this.imagineAreaCss + "_Normal\">" + value + "</span>" + cValue.slice(caretPosition);

                this.dynamicValue = input.innerHTML;

                var imagineArea = document.getElementById(this.imagineAreaId);
                this.setCaretPosition(this.inputId, convertPositionToDynamicPosition.call(this, imagineArea.childNodes[0], value.length));

                InputManager.prototype.insertImagine.final = value;
            }

            this.requestFocus();

            return InputManager.prototype.insertImagine.final;
        };

        InputManager.prototype.getCurrentImagineRoot = function() {
            var imagineArea = document.getElementById(this.imagineAreaId);
            if(imagineArea) {
                return imagineArea.textContent;
            }
        };

        InputManager.prototype.commit = function(value) {
            if(this.maxLength && this.maxLength > 0) {
                if(value) {
                    var originValue = this.getValue(this.inputId, "");
                    if(value.length + originValue.length > this.maxLength) {
                        value = value.slice(0, this.maxLength - originValue.length > 0 ? this.maxLength - originValue.length : 0);
                    }
                }
            }

            iqqiInfoNewLog("InputManager.prototype.commit", "show value: " + value + "; caret in imagine: " + isCaretInImagine.call(this) + "; absoluteLogicalPosition: " + this.absoluteLogicalPosition);

            if(isCaretInImagine.call(this)) {
                if(value) {
                    this.setValue(this.inputId, this.getValue(this.inputId, value), this.absoluteLogicalPosition + value.length - this.caretOffset);
                }
                else {
                    this.setValue(this.inputId, this.getValue(this.inputId, value), this.absoluteLogicalPosition + this.selectedNode.length - this.caretOffset);
                }
            }
            else {
                this.setValue(this.inputId, this.getValue(this.inputId, value), this.absoluteLogicalPosition);
            }
        };

        InputManager.prototype.setCallBack = function(callback) {
            this.callback = callback;
        };

        InputManager.prototype.getValue = function(id, replace) {
            var input = document.getElementById(id);

            if(typeof getValue != "function" || InputManager.prototype.getValue.initialized == undefined) {
                /**
                 * get value of node, not input
                 * @param {Node} node
                 */
                function getValue(node) {
                    getValue.value = getValue.value || [];
                    if(node) {
                        if(node.nodeType == 3) {
                            getValue.value.push(node["data"]);
                        }
                        else if(node.nodeType == 1) {
                            if(node["id"] == this.imagineAreaId && replace != undefined) {
                                getValue.value.push(replace);
                            }
                            else if(node.hasChildNodes()) {
                                for(var i = 0; i < node.childNodes.length; ++i) {
                                    getValue.call(this, node.childNodes[i]);
                                }
                            }
                        }
                    }
                    return getValue.value;
                }

                InputManager.prototype.getValue.initialized = true;
            }

            if(input) {
                if(input.tagName == "INPUT") {
                    return input.value || "";
                }
                else if(this.isPassword()) {
                    return this.password;
                }
                else {
                    if(this.absoluteLogicalPosition != undefined) {
                        delete getValue.value;
                        getValue.call(this, input);
                        return (getValue.value.join("") || replace || "").replace("&nbsp;", " ");
                    }
                    else {
                        return this.oldValue;
                    }
                }
            }
        };

        /**
         * this method do not detect whether the value has a dom structure.
         * @param {string} id
         * @param {string} value
         * @param {*} position logical position
         */
        InputManager.prototype.setValue = function(id, value, position) {
            iqqiInfoNewLog("InputManager.prototype.setValue", "show id: " + id + "; value: " + value + "; position: " + position);
            var input = document.getElementById(id);
            if(input) {
                if(input.tagName == "INPUT") {
                    input.value = value.replace("&nbsp;", " ");
                }
                else {
                    iqqiInfoNewLog("InputManager.prototype.setValue", "isPassword: " + this.isPassword());
                    if(this.isPassword()) {
                        this.password = value;
                        if(shouldMask.call(this)) {
                            input.innerHTML = mask.call(this, value.replace("&nbsp;", " "), "");
                        }
                        else {
                            input.innerHTML = value.replace(" ", "&nbsp;");
                        }
                    }
                    else {
                        input.innerHTML = value.replace(" ", "&nbsp;");
                    }
                }
                this.dynamicValue = input.innerHTML;
            }
            id == this.inputId && (this.dirty = true);
            if(typeof position == "number") {
                this.setCaretPosition(id, convertPositionToDynamicPosition.call(this, undefined, position));
            }
            else {
                if(position && position["type"] == "absolute") {
                    this.setCaretPosition(id, position);
                }
                else {
                    this.setCaretPosition(id, convertPositionToDynamicPosition.call(this, position["node"], position["position"]));
                }
            }
        };

        InputManager.prototype.onExit = function(origin) {
            if(!!this.sourceId) {
                var input = origin.page.getCaE(this.sourceId);
                if(input) {
                    origin.page.hiFocus(this.sourceId);
                }
                else {
                    origin.page.hiFocus();
                    var element = document.getElementById(this.sourceId);
                    if(element) {
                        element.focus();
                    }
                }
                this.setValue(this.sourceId, this.getValue(this.inputId), new Position("absolute", this.absoluteLogicalPosition));
                if (!!input && !!input.opts.onChange) {
                    if (typeof input.opts.onChange == "function") {
                        input.opts.onChange.call(input,input.page.operateData, input.data, true);
                    }
                    else if (typeof input.opts.onChange == "string") {
                        eval(input.opts.onChange + ".call(input,input.page.operateData, input.data, true)");
                    }
                }
                else if(!!this.callback) {
                    this.callback.call(document.getElementById(this.sourceId), $("#" + this.inputId).val());
                }
            }
            else {
                origin.page.hiFocus();
            }
            clear.call(this);
        };

        InputManager.prototype.onBack = function(origin) {
            if(!!this.sourceId) {
                var input = origin.page.getCaE(this.sourceId);
                if(input) {
                    origin.page.hiFocus(this.sourceId);
                }
                else {
                    origin.page.hiFocus();
                    var element = document.getElementById(this.sourceId);
                    if(element) {
                        element.focus();
                    }
                }
                this.setValue(this.sourceId, this.oldValue, new Position("absolute", this.oldPosition));
            }
            else {
                origin.page.hiFocus();
            }
            clear.call(this);
        };

        InputManager.prototype.handleSpecialValue = function(value) {
            switch(value) {
                case "&amp;":
                    return "&";
                case "&lt;":
                    return "<";
                case "&gt;":
                    return ">";
                default:
                    return value;
            }
        };

        /**
         * just report InputManager's status.
         * caution: this method may be very heavy.
         */
        InputManager.prototype.dump = function() {
            var needMask = this.isPassword() && shouldMask.call(this);
            return {
                "oldValue": needMask ? mask.call(this, this.oldValue) : this.oldValue,
                "oldPosition": this.oldPosition,
                "dynamicValue": needMask ? mask.call(this, this.dynamicValue) : this.dynamicValue,
                "dynamicPosition": getDynamicPosition.call(this),
                "textContent": needMask ? mask.call(this, this.getValue(this.inputId)) : this.getValue(this.inputId),
                "curPosition": this.getCaretPosition(this.inputId)
            };
        };

        InputManager.prototype.isPassword = function() {
            return this.inputAttr == "password" || this.inputAttr == "numberpassword" || this.inputMethod == "password" || this.inputMethod == "numberpassword";
        };

        InputManager.prototype.setLanguageRtl = function(rtl) {
            if(rtl == undefined) {
                return;
            }
            this.rtl = rtl;
        };

        /**
         * what is invoke?
         * when you want to call a nested method, use its name and correct params, this will give a right to call it as it is a prototype method.
         * @param {string} method name of the method you want to call
         * @param {...*} args target method's arguments must be wrapped in an array, in its right position
         * @returns {Object}
         */
        InputManager.prototype.invoke = function(method, args) {
            var parameters = [];
            for(var i = 1; i < arguments.length; ++i) {
                parameters.push(arguments[i]);
            }
            return eval(method + ".apply(this, parameters)");
        };

        function getDynamicPosition() {
            if(this.dynamicPosition != undefined) {
                return this.dynamicPosition;
            }
            var input = document.getElementById(this.inputId);
            if(input && input.clientWidth > 0) {
                var position = convertPositionToDynamicPosition.call(this, this.selectedNode, (this.oldPosition || 0));
                return ((position != undefined && position)|| 0);
            }
        }

        /**
         * just a protection method. this method guarantee that old position is stored to lastRecordPosition before new position is set.
         * @param position
         */
        function setDynamicPosition(position) {
            if(position != this.dynamicPosition) {
                this.lastRecordPosition = this.dynamicPosition || convertPositionToDynamicPosition.call(this, undefined, this.oldPosition);
                this.dynamicPosition = position;
            }
        }

        /**
         * get the direction property of the node.
         * @param {Node} node
         * @returns {string}
         */
        function whatDirection(node) {
            if(node) {
                if(node.nodeType == 3) {
                    return whatDirection.call(this, node.parentNode);
                }
                else if(node.nodeType == 1) {
                    var style = node["currentStyle"] || document.defaultView.getComputedStyle(node, null);
                    if(style && style.direction) {
                        return style.direction;
                    }
                    else {
                        return whatDirection.call(this, node.parentNode);
                    }
                }
            }
        }

        /**
         * this function's definition has been redesigned, now it just put the caret div to the position.
         * @param {Node} node
         * @param {Number} position
         * @param {Number} scroll
         * @param {Number} [offset]
         */
        function setRange(node, position, scroll, offset) {
            if(typeof containerNode != "function" || setRange.initialized == undefined) {
                function containerNode(node) {
                    if(node) {
                        if(node.nodeType == 3) {
                            return containerNode.call(this, node.parentNode);
                        }
                        else if(node.nodeType == 1) {
                            if(node.className.indexOf("RTL") > -1 || node.className.indexOf("LTR") > -1) {
                                return node;
                            }
                            else {
                                return containerNode.call(this, node.parentNode);
                            }
                        }
                    }
                }

                function positionType(node, type) {
                    if(node) {
                        if(type == undefined) {
                            return positionType.call(this, node.parentNode, ["firstChild", "lastChild"]);
                        }

                        if(node.parentNode.firstChild != node) {
                            var first = type.indexOf("firstChild");
                            if(first > -1) {
                                type.splice(first, 1);
                            }
                        }
                        if(node.parentNode.lastChild != node) {
                            var last = type.indexOf("lastChild");
                            if(last > -1) {
                                type.splice(last, 1);
                            }
                        }

                        if(type.length) {
                            if(node.parentNode.className.indexOf("RTL") > -1 || node.parentNode.className.indexOf("LTR") > -1) {
                                return type;
                            }
                            else {
                                return positionType.call(this, node.parentNode, type);
                            }
                        }

                        return ["middle"];
                    }
                }

                setRange.initialized = true;
            }

            if(document.selection) {
                setRange.range = document.body.createTextRange();
                setRange.range.moveToElementText(node);
                setRange.range.select();
            }
            else {
                this.selectedNode = node;
                this.caretOffset = position;

                var input = document.getElementById(this.inputId);
                var caretElement = document.getElementById(this.caretId);

                label:
                    if(!caretElement) {
                        caretElement = document.createElement("div");
                        caretElement.id = this.caretId;
                        caretElement.className = this.caretCss + "_" + "Normal";

                        if(input.childNodes && input.childNodes.length) {
                            input.insertBefore(caretElement, input.childNodes[0]);
                            break label;
                        }
                        input.appendChild(caretElement);
                    }

                if(this.rtl) {
                    caretElement.style.left = "";
                }
                else {
                    caretElement.style.right = "";
                }

                if((position == 0) && (offset == undefined)) {
                    if(this.rtl) {
                        caretElement.style.right = "";
                    }
                    else {
                        caretElement.style.left = "";
                    }
                }
                else {
                    var rtlType = getCharacterRtlType_V1.call(this, node.textContent.slice(position - 1, position));
                    setRange.rtl = rtlType == "rtl";

                    if(offset == undefined) {
                        // this block is terminated. never dive in.
                        var localeRtl = whatDirection.call(this, node).toLowerCase() == "rtl";

                        range:
                            if(node.length == position) {
                                if(node.parentNode["id"] != this.inputId) {
                                    if(positionType.call(this, node).indexOf("lastChild") > -1) {
                                        setRange.range_rect = containerNode.call(this, node).getBoundingClientRect();
                                    }
                                    else {
                                        setRange.range_rect = findCaretPixelPosition_V4.call(this, node, position);
                                        setRange.range_start = localeRtl ? setRange.range_rect.right : setRange.range_rect.left;
                                        setRange.range_end = localeRtl ? setRange.range_rect.left : setRange.range_rect.right;
                                        break range;
                                    }
                                }
                                else {
                                    setRange.range_rect = findCaretPixelPosition_V4.call(this, node, position);
                                }
                                setRange.range_start = this.rtl ? setRange.range_rect.right : setRange.range_rect.left;
                                setRange.range_end = this.rtl ? setRange.range_rect.left : setRange.range_rect.right;
                            }
                            else {
                                setRange.range_rect = findCaretPixelPosition_V4.call(this, node, position);
                                setRange.range_end = setRange.rtl ? setRange.range_rect.left : setRange.range_rect.right;
                                setRange.range_start = setRange.rtl ? setRange.range_rect.right : setRange.range_rect.left;
                            }
                    }
                    else {
                        setRange.range_end = offset;
                    }


                    setRange.caret_rect = caretElement.getBoundingClientRect();
                    setRange.caret_end = setRange.rtl ? setRange.caret_rect.left : setRange.caret_rect.right;
                    setRange.caret_start = setRange.rtl ? setRange.caret_rect.right : setRange.caret_rect.left;
                    var rangePosition = offset ? offset : setRange.range_end;
                    if(setRange.rtl ? setRange.caret_start - rangePosition : rangePosition - setRange.caret_start) {
                        delete setRange.move;
                        if(this.rtl) {
                            if(caretElement.style.right) {
                                setRange.move = parseInt(caretElement.style.right.slice(0, -2));
                            }
                            caretElement.style.right = Math.round((setRange.caret_start - rangePosition) / IQQIUtils.getSizeScale() + (setRange.move || (setRange.caret_rect.right - setRange.caret_rect.left))) + "px";
                        }
                        else {
                            if(caretElement.style.left) {
                                setRange.move = parseInt(caretElement.style.left.slice(0, -2));
                            }
                            caretElement.style.left = Math.round((rangePosition - setRange.caret_start) / IQQIUtils.getSizeScale() + (setRange.move || (setRange.caret_rect.right - setRange.caret_rect.left))) + "px";
                        }
                    }
                }

                setRange.caret_rect = caretElement.getBoundingClientRect();
                setRange.caret_end = setRange.rtl ? setRange.caret_rect.left : setRange.caret_rect.right;
                setRange.caret_start = setRange.rtl ? setRange.caret_rect.right : setRange.caret_rect.left;

                if(scroll) {
                    this.dirty = true;
                    setRange.element = document.getElementById(this.inputId);
                    if(setRange.element) {
                        setRange.element.scrollLeft = scroll;
                    }
                }
                else {
                    var input_rect = input.getBoundingClientRect();
                    var input_start = this.rtl ? input_rect.right : input_rect.left;
                    var input_end = this.rtl ? input_rect.left : input_rect.right;
                    if(this.rtl ? (setRange.caret_end - input_end < 0) : (setRange.caret_end - input_end > 0)) {
                        setRange.element = document.getElementById(this.inputId);
                        if(setRange.element) {
                            setRange.element.scrollLeft = (setRange.element.scrollLeft || (this.rtl ? setRange.caret_rect.left - setRange.caret_rect.right : setRange.caret_rect.right - setRange.caret_rect.left)) + Math.round((setRange.caret_end - input_end) / IQQIUtils.getSizeScale()) + (this.rtl && (setRange.caret_rect.left - setRange.caret_rect.right));
                        }
                    }
                    else if(this.rtl ? setRange.caret_start > input_start : setRange.caret_start < input_start) {
                        setRange.element = document.getElementById(this.inputId);
                        if(setRange.element) {
                            setRange.element.scrollLeft = (setRange.element.scrollLeft || (this.rtl ? setRange.caret_rect.left - setRange.caret_rect.right : setRange.caret_rect.right - setRange.caret_rect.left)) + Math.round((setRange.caret_start - input_start) / IQQIUtils.getSizeScale()) + (this.rtl && (setRange.caret_rect.right - setRange.caret_rect.left));
                        }
                    }
                }

                if(setRange.element) {
                    this.dirty = true;
                    this.scrollLeft = setRange.element.scrollLeft;
                }
                delete setRange.element;
            }
        }

        function Position(type, position) {
            this.type = type;
            this.position = position;

            if(true || Position.initialized == undefined) {
                Position.prototype.toString = function() {
                    return "{type: " + this.type + "; position: " + this.position + "}";
                };

                Position.initialized = true;
            }
        }

        function sortNodePosition(node, rtl, root) {
            if(typeof NodePosition != "function" || sortNodePosition.initialized == undefined) {
                function NodePosition(node, position, offset) {
                    Position.call(this, "NodePosition", position);
                    this.node = node;
                    this.offset = offset;

                    if(NodePosition.initialized == undefined) {
                        NodePosition.prototype.compareTo = function(position) {
                            return (this.offset - position.offset);
                        };

                        NodePosition.prototype.toString = function() {
                            return "{node: " + this.node + ", textContext: " + (this.node && this.node.textContent) + ", position: " + this.position + ", offset: " + this.offset + "}";
                        };

                        NodePosition.initialized = true;
                    }
                }

                function createNodePosition(previous, present) {
                    if(rtl) {
                        if(present.rtl == "ltr" && previous.rtl == "ltr") {
                            return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, present.left);
                        }
                        else if(present.rtl == "ltr") {
                            return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, previous.left);
                        }
                        else if(previous.rtl == "ltr") {
                            try {
                                return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, IQQIUtils.isRunningOnOpera() ? sortNodePosition.idlePosition : present.right);
                            }
                            finally {
                                if(IQQIUtils.isRunningOnOpera()) {
                                    delete sortNodePosition.idlePosition;
                                }
                            }
                        }
                        else {
                            if(!IQQIUtils.isRunningOnOpera() && Math.abs(previous.left - present.right) > 1) {
                                return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, previous.left);
                            }
                            return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, present.right);
                        }
                    }
                    else {
                        if(present.rtl == "rtl" && previous.rtl == "rtl") {
                            return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, present.right);
                        }
                        else if(previous.rtl == "rtl") {
                            return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, present.left);
                        }
                        else if(present.rtl == "rtl") {
                            return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, previous.right);
                        }
                        else {
                            if(!IQQIUtils.isRunningOnOpera()) {
                                return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, previous.right);
                            }
                            return new NodePosition(present.position ? present.node :previous.node, present.position || previous.node.length, present.left);
                        }
                    }
                }

                function pushIfAlone(position) {
                    sortNodePosition.sorted = (sortNodePosition.sorted || []);
                    for(var ssi = 0; ssi < sortNodePosition.sorted.length; ++ssi) {
                        if(Math.abs(position.offset - sortNodePosition.sorted[ssi].offset) < 1) {
                            if(position.position == undefined) {
                                return;
                            }
                            var seated = false;
                            for(var ssj = 0; ssj < sortNodePosition.sorted.length; ++ssj) {
                                if(sortNodePosition.sorted[ssj].position == undefined) {
                                    position.offset = sortNodePosition.sorted[ssj].offset;
                                    sortNodePosition.sorted.push(position);
                                    sortNodePosition.sorted.splice(ssj, 1);
                                    seated = true;
                                    break;
                                }
                            }

                            if(!seated) {
                                sortNodePosition.sorted[ssi].position = position.position > sortNodePosition.sorted[ssi].position ? position.position : sortNodePosition.sorted[ssi].position;
                            }

                            return;
                        }
                    }
                    sortNodePosition.sorted.push(position);
                }

                sortNodePosition.initialized = true;
            }

            if(root) {
                if(!this.dirty) {
                    return sortNodePosition.sorted;
                }
                delete sortNodePosition.sorted;
            }

            if(node) {
                if(node.nodeType == 3 && node.length) {
                    sortNodePosition.sorted = (sortNodePosition.sorted || []);
                    var range = document.createRange();
                    for(var i = 0; i < node.length; ++i) {
                        var iRtl = getCharacterRtlType_V1.call(this, node.textContent[i]);

                        range.setStart(node, i);
                        range.setEnd(node, i + 1);

                        var rect = range.getBoundingClientRect();

                        var presentStatus = {
                            "node": node,
                            "position": i,
                            "rtl": iRtl,
                            "left": rect.left,
                            "right": rect.right
                        };

                        if(IQQIUtils.isRunningOnOpera()) {
                            if(rtl) {
                                if(sortNodePosition.lastStatus && sortNodePosition.lastStatus.rtl == "rtl" && presentStatus.rtl == "ltr") {
                                    sortNodePosition.idlePosition = presentStatus.left;
                                }
                            }
                        }

                        if(sortNodePosition.veryLeft) {
                            if(presentStatus.left < sortNodePosition.veryLeft.left) {
                                sortNodePosition.veryLeft = presentStatus;
                            }
                        }
                        else {
                            sortNodePosition.veryLeft = presentStatus;
                        }

                        if(sortNodePosition.veryRight) {
                            if(presentStatus.right > sortNodePosition.veryRight.right) {
                                sortNodePosition.veryRight = presentStatus;
                            }
                        }
                        else {
                            sortNodePosition.veryRight = presentStatus;
                        }

                        if(sortNodePosition.lastStatus) {
                            pushIfAlone(createNodePosition(sortNodePosition.lastStatus, presentStatus));
                        }
                        else {
                            pushIfAlone(new NodePosition(presentStatus.node, 0, iRtl == "rtl" ? presentStatus.right : (iRtl == "ltr" ? presentStatus.left : (rtl ? presentStatus.right : presentStatus.left))));
                        }
                        sortNodePosition.lastStatus = presentStatus;
                    }
                }
                else if(node.nodeType == 1 && node.hasChildNodes()) {
                    if(node.clientWidth > 0) {
                        for(var ci = 0; ci < node.childNodes.length; ++ci) {
                            sortNodePosition.call(this, node.childNodes[ci], rtl, false);
                        }
                    }
                }
            }

            if(root) {
                if(sortNodePosition.veryLeft && sortNodePosition.veryRight) {
                    pushIfAlone(new NodePosition(rtl ? sortNodePosition.veryRight.node : sortNodePosition.veryLeft.node, 0, rtl ? sortNodePosition.veryRight.right : sortNodePosition.veryLeft.left));
                    pushIfAlone(new NodePosition(rtl ? sortNodePosition.veryLeft.node : sortNodePosition.veryRight.node, (rtl ? sortNodePosition.veryLeft.node : sortNodePosition.veryRight.node).length, rtl ? sortNodePosition.veryLeft.left : sortNodePosition.veryRight.right));
                }
                if(sortNodePosition.sorted && sortNodePosition.sorted.length) {
                    for(var si = 0; si < sortNodePosition.sorted.length; ++si) {
                        var min = sortNodePosition.sorted[si];
                        for(var sj = si + 1; sj < sortNodePosition.sorted.length; ++sj) {
                            if(rtl ? sortNodePosition.sorted[sj].compareTo(min) > 0 : sortNodePosition.sorted[sj].compareTo(min) < 0) {
                                sortNodePosition.sorted[si] = sortNodePosition.sorted[sj];
                                sortNodePosition.sorted[sj] = min;
                                min = sortNodePosition.sorted[si];
                            }
                        }
                    }
                }

                try {
                    sortNodePosition.sorted && (this.dirty = false);
                    return sortNodePosition.sorted;
                }
                finally {
                    delete sortNodePosition.lastStatus;
                    delete sortNodePosition.veryLeft;
                    delete sortNodePosition.veryRight;
                    delete sortNodePosition.idlePosition;
                }
            }
        }

        function getAbsoluteLogicalPositionByNodePosition(position, current) {
            if(current) {
                if(position) {
                    if(current.nodeType == 3) {
                        if(isTwinNode.call(this, position.node, current)) {
                            getAbsoluteLogicalPositionByNodePosition.seated = true;
                            getAbsoluteLogicalPositionByNodePosition.offset = (getAbsoluteLogicalPositionByNodePosition.offset || 0) + position.position;
                        }
                        else {
                            getAbsoluteLogicalPositionByNodePosition.offset = (getAbsoluteLogicalPositionByNodePosition.offset || 0) + (current.length || 0);
                        }
                    }
                    else if(current.nodeType == 1) {
                        if(current.hasChildNodes()) {
                            for(var li = 0; li < current.childNodes.length; ++li) {
                                getAbsoluteLogicalPositionByNodePosition.call(this, position, current.childNodes[li]);

                                if(getAbsoluteLogicalPositionByNodePosition.seated) {
                                    return getAbsoluteLogicalPositionByNodePosition.offset;
                                }
                            }
                        }
                    }
                }
            }
            else {
                delete getAbsoluteLogicalPositionByNodePosition.offset;
                delete getAbsoluteLogicalPositionByNodePosition.seated;

                var input = document.getElementById(this.inputId);
                if(input) {
                    return getAbsoluteLogicalPositionByNodePosition.call(this, position, input);
                }
            }
        }

        /**
         *
         * @param {Node} node
         * @param {Number} position
         * @returns {number}
         */
        function convertPositionToDynamicPosition(node, position) {
            var input = document.getElementById(this.inputId);

            if(input) {
                if(this.dirty || !sortNodePosition.sorted) {
                    sortNodePosition.call(this, input, this.rtl, true);
                }
            }

            if(!this.dirty) {
                var sorted = sortNodePosition.sorted || sortNodePosition.call(this, input, this.rtl, true);
                if(sorted && sorted.length) {
                    for(var sli = 0; sli < sorted.length; ++sli) {
                        if((sorted[sli].position == position) && ((node == undefined) || (node.nodeType != 3) || isTwinNode.call(this, node, sorted[sli].node))) {
                            return sli;
                        }
                    }
                }
            }

            return 0;
        }

        function getNodePositionByDynamicPosition(dynamicPosition) {
            var input = document.getElementById(this.inputId);

            if(input) {
                if(this.dirty || !sortNodePosition.sorted) {
                    sortNodePosition.call(this, input, this.rtl, true);
                }
            }

            if(!this.dirty) {
                var sorted = sortNodePosition.sorted || sortNodePosition.call(this, input, this.rtl, true);
                if(sorted && (sorted.length > dynamicPosition)) {
                    return sorted[dynamicPosition];
                }
            }
        }

        function convertDynamicPositionToPosition(dynamic) {
            var input = document.getElementById(this.inputId);

            if(input) {
                if(this.dirty || !sortNodePosition.sorted) {
                    sortNodePosition.call(this, input, this.rtl, true);
                }
            }
            if(!this.dirty) {
                var sorted = sortNodePosition.sorted || sortNodePosition.call(this, input, this.rtl, true);
                if(sorted && (sorted.length > dynamic)) {
                    return sorted[dynamic].position;
                }
            }
            return this.oldPosition || 0;
        }

        function isCaretInImagine() {
            var input = document.getElementById(this.inputId);
            if(input) {
                input.focus();

                var imagine = document.getElementById(this.imagineAreaId);
                if(imagine) {
                    if(this.selectedNode && this.selectedNode.nodeType == 3 && this.selectedNode.parentNode["id"] == this.imagineAreaId) {
                        return true;
                    }
                }

                input.focus();
            }
            return false;
        }

        function hasImagine() {
            return document.getElementById(this.imagineAreaId) && document.getElementById(this.imagineAreaId).innerHTML;
        }

        /**
         * this method find a text node with not empty content.
         * @param {Node} node
         * @returns {Function|Node}
         */
        function getPreviousTextNode(node) {
            if(typeof loopContainerForTextNode != "function" || getPreviousTextNode.initialized == undefined) {

                /**
                 * this method just dig into, no dig out, previous or parent.
                 * if you think this is a spider, you are dead.
                 * @param {Node} node
                 * @returns {*}
                 */
                function loopContainerForTextNode(node) {
                    if(node) {
                        if(node.nodeType == 3 && node.length) {
                            return node;
                        }
                        else if(node.nodeType == 1) {
                            if(node["id"] == this.iqqiInput) {
                                return;
                            }
                            if(node.childNodes && node.childNodes.length) {
                                for(var i = node.childNodes.length; i > 0; --i) {
                                    var result = loopContainerForTextNode(node.childNodes[i - 1]);
                                    if(result) {
                                        return result;
                                    }
                                }
                            }
                        }
                    }
                }

                getPreviousTextNode.initialized = true;
            }

            getPreviousTextNode.node = node;
            if(getPreviousTextNode.node) {
                if(getPreviousTextNode.node["id"] == this.inputId) {
                    delete getPreviousTextNode.node;
                    return undefined;
                }
                if(node.previousSibling) {
                    if(node.previousSibling.nodeType == 3 && node.previousSibling.length) {
                        delete getPreviousTextNode.node;
                        return node.previousSibling;
                    }
                    else if(node.previousSibling.nodeType == 1) {
                        while(node) {
                            var result = loopContainerForTextNode(node.previousSibling);
                            if(result) {
                                delete getPreviousTextNode.node;
                                return result;
                            }
                            node = node.previousSibling;
                        }
                    }
                }
                return getPreviousTextNode.call(this, getPreviousTextNode.node.parentNode);
            }
        }

        /**
         * this method find a text node with not empty content.
         * @param {Node} node
         * @returns {*}
         */
        function getNextTextNode(node) {

            if(typeof loopContainerForTextNode != "function" || getNextTextNode.initialized == undefined) {
                /**
                 * this method just dig into, no dig out, previous or parent.
                 * if you think this is a spider, you are dead.
                 * @param {Node} node
                 * @returns {*}
                 */
                function loopContainerForTextNode(node) {
                    if(node) {
                        if(node.nodeType == 3 && node.length) {
                            return node;
                        }
                        else if(node.nodeType == 1) {
                            if(node["id"] == this.iqqiInput) {
                                return;
                            }
                            if(node.childNodes && node.childNodes.length) {
                                for(var i = 0; i < node.childNodes.length; ++i) {
                                    var result = loopContainerForTextNode(node.childNodes[i - 1]);
                                    if(result) {
                                        return result;
                                    }
                                }
                            }
                        }
                    }
                }

                getNextTextNode.initialized = true;
            }

            getNextTextNode.node = node;
            if(getNextTextNode.node) {
                if(getNextTextNode.node["id"] == this.inputId) {
                    delete getNextTextNode.node;
                    return undefined;
                }

                if(node.nextSibling) {
                    if(node.nextSibling.nodeType == 3 && node.nextSibling.length) {
                        delete getNextTextNode.node;
                        return node.nextSibling;
                    }
                    else if(node.nextSibling.nodeType == 1) {
                        while(node) {
                            var result = loopContainerForTextNode(node.nextSibling);
                            if(result) {
                                delete getNextTextNode.node;
                                return result;
                            }
                            node = node.nextSibling;
                        }
                    }
                }
                return getNextTextNode.call(this, getNextTextNode.node.parentNode);
            }
        }

        function clear() {
            delete this.dynamicValue;
            delete this.password;
            delete this.dynamicPosition;
            delete this.absoluteLogicalPosition;
            delete this.lastRecordPosition;
            delete this.oldValue;
            delete this.oldPosition;
            delete this.rtl;
            delete this.selectedNode;
            delete this.caretOffset;
            delete sortNodePosition.sorted;
            delete this.scrollLeft;

            document.getElementById(this.inputId).innerHTML = "";

            if(!IQQIUtils.isRunningOnTv()) {
                document.body.onscroll = null;
            }
        }

        function valid(position, def) {
            return (typeof position != "undefined" && position >= 0 ? position : def);
        }

        /**
         * only when inputAttr is password then the visual text will be mask.
         * @returns {boolean}
         */
        function shouldMask() {
            return this.inputAttr == "password" || this.inputAttr == "numberpassword";
        }

        /**
         * if node is empty, remove it from parent, if its parent is empty, remove its parent too.
         * @param {Node} node
         */
        function cutoffBranchIfEmpty(node) {
            if([this.inputId, this.caretId, this.caretPositionDetectAreaId, this.rtlDetectAreaId].indexOf(node["id"]) == -1) {
                var input = document.getElementById(this.inputId);
                if(input) {
                    if(node.nodeType == 1) {
                        if(node.childNodes && node.childNodes.length) {
                            return;
                        }
                        if(node.previousSibling || node.nextSibling) {
                            node.parentNode.removeChild(node);
                            this.dynamicValue = input.innerHTML;
                        }
                        else {
                            cutoffBranchIfEmpty.parent = node.parentNode;
                            node.parentNode.removeChild(node);
                            cutoffBranchIfEmpty.call(this, cutoffBranchIfEmpty.parent);
                        }
                    }
                    else if(node.nodeType = 3) {
                        if(node.length) {
                            return;
                        }
                        if(node.previousSibling || node.nextSibling) {
                            node.parentNode.removeChild(node);
                            this.dynamicValue = input.innerHTML;
                        }
                        else {
                            cutoffBranchIfEmpty.parent = node.parentNode;
                            node.parentNode.removeChild(node);
                            cutoffBranchIfEmpty.call(this, cutoffBranchIfEmpty.parent);
                        }
                    }
                }
            }
        }

        function mask(value, def) {
            if(value) {
                var final = [];
                for(var i = 0; i < value.length; ++i) {
                    final.push(this.mask);
                }
                return final.join("");
            }
            return def;
        }

        /**
         * this method can not find caret position when ltr is open but rtl characters provided.
         * since we must read old versions to find something reusable, this method can not be deleted for now.
         * @param node
         * @param position
         * @returns {ClientRect}
         */
        function findCaretPixelPosition(node, position) {
            if(node && node.length) {
                var input = document.getElementById(this.inputId);
                if(input) {
                    input.focus();

                    var range = document.createRange();
                    range.setStart(node, 0);
                    range.setEnd(node, position);

                    findCaretPixelPosition.origin = range.getBoundingClientRect();

                    return range.getBoundingClientRect();
                }
            }
        }

        /**
         * this method can not find caret position when ltr is open but rtl characters provided.
         * since we must read old versions to find something reusable, this method can not be deleted for now.
         * @param node
         * @param position
         * @param rtl
         * @returns {ClientRect}
         */
        function findCaretPixelPosition_V3(node, position, rtl) {
            if(node && node.length) {
                if(rtl ? node.length == position : position == 0) {
                    if(node.nodeType == 3) {
                        return node.parentNode.getBoundingClientRect();
                    }
                    else if(node.nodeType == 1) {
                        return node.getBoundingClientRect();
                    }
                }
                var input = document.getElementById(this.inputId);
                if(input) {
                    input.focus();

                    var range = document.createRange();
                    range.setStart(node, rtl ? position : 0);
                    range.setEnd(node, rtl ? node.length : position);

                    findCaretPixelPosition.origin = range.getBoundingClientRect();

                    return range.getBoundingClientRect();
                }
            }
        }

        /**
         * this method can not find caret position when ltr is open but rtl characters provided.
         * since we must read old versions to find something reusable, this method can not be deleted for now.
         * @param node
         * @param position
         * @param reference
         * @returns {ClientRect}
         */
        function findCaretPixelPosition_V4(node, position, reference) {
            if(node && node.length) {
                var input = document.getElementById(this.inputId);
                if(input) {
                    input.focus();

                    var range = document.createRange();
                    iqqiInfoNewLog("InputManager.findCaretPixelPosition_V4", "start: " + ((reference != undefined && (reference < position - 1)) ? reference : position - 1) + "; end: " + ((reference != undefined && (reference > position)) ? reference : position) + "; position: " + position + "; reference: " + reference);
                    range.setStart(node, (reference != undefined ? (reference < position ? reference : position) : position - 1));
                    range.setEnd(node, (reference != undefined ? (reference > position ? reference : position) : position));

                    return range.getBoundingClientRect();
                }
            }
        }

        /**
         * all types can be:
         * rtl: which means it will always be rtl;
         * ltr: which means it will always be ltr;
         * inherit: which means this character does not has a rtl behavior, it will behave like the outer element asked.
         * @param {string} character
         * @returns {string}
         */
        function getCharacterRtlType_V1(character) {
            if(getCharacterRtlType_V1.cache) {
                var result = getCharacterRtlType_V1.cache.get(character);
                if(result) {
                    return result;
                }
            }

            getCharacterRtlType_V1.cache = getCharacterRtlType_V1.cache || new Cache("rtl", 1024);

            var input = document.getElementById(this.inputId);
            if(input) {
                input.focus();

                try {
                    var caretRtlDetect = document.getElementById(this.rtlDetectAreaId);
                    if(!caretRtlDetect) {
                        caretRtlDetect = document.createElement("div");
                        caretRtlDetect.id = this.rtlDetectAreaId;
                        caretRtlDetect.className = this.rtlDetectAreaCss + "_" + "Normal";
                        input.appendChild(caretRtlDetect);
                        this.dynamicValue = input.innerHTML;
                    }

                    caretRtlDetect.innerHTML = character + character + character;

                    caretRtlDetect.style.direction = "rtl";
                    getCharacterRtlType_V1.start = findCaretPixelPosition_V3.call(this, caretRtlDetect.childNodes[0], 1, true);
                    getCharacterRtlType_V1.end = findCaretPixelPosition_V3.call(this, caretRtlDetect.childNodes[0], 2, true);
                    if(getCharacterRtlType_V1.start && getCharacterRtlType_V1.end) {
                        getCharacterRtlType_V1.rtl = getCharacterRtlType_V1.start.right > getCharacterRtlType_V1.end.right;
                    }

                    caretRtlDetect.style.direction = "ltr";
                    getCharacterRtlType_V1.start = findCaretPixelPosition.call(this, caretRtlDetect.childNodes[0], 1);
                    getCharacterRtlType_V1.end = findCaretPixelPosition.call(this, caretRtlDetect.childNodes[0], 2);
                    if(getCharacterRtlType_V1.start && getCharacterRtlType_V1.end) {
                        getCharacterRtlType_V1.ltr = getCharacterRtlType_V1.start.right < getCharacterRtlType_V1.end.right;
                    }
                    caretRtlDetect.innerHTML = "";

                    if(getCharacterRtlType_V1.rtl && getCharacterRtlType_V1.ltr) {
                        getCharacterRtlType_V1.cache.cache(character, "inherit");
                    }
                    else if(getCharacterRtlType_V1.rtl) {
                        getCharacterRtlType_V1.cache.cache(character, "rtl");
                    }
                    else if(getCharacterRtlType_V1.ltr) {
                        getCharacterRtlType_V1.cache.cache(character, "ltr");
                    }
                    return getCharacterRtlType_V1.cache.get(character);
                }
                finally {
                    this.dynamicValue = input.innerHTML;
                    delete getCharacterRtlType_V1.start;
                    delete getCharacterRtlType_V1.end;
                    delete getCharacterRtlType_V1.ltr;
                    delete getCharacterRtlType_V1.rtl;
                }
            }
        }

        function getCharacterLayoutType(character) {
            if (getCharacterLayoutType.cache) {
                var result = getCharacterLayoutType.cache.get(character);
                if (result) {
                    return result;
                }
            }

            getCharacterLayoutType.cache = getCharacterLayoutType.cache || new Cache("layout", 1024);

            var input = document.getElementById(this.inputId);
            if (input) {
                input.focus();

                try {
                    var caretRtlDetect = document.getElementById(this.rtlDetectAreaId);
                    if(!caretRtlDetect) {
                        caretRtlDetect = document.createElement("div");
                        caretRtlDetect.id = this.rtlDetectAreaId;
                        caretRtlDetect.className = this.rtlDetectAreaCss + "_" + "Normal";
                        input.appendChild(caretRtlDetect);
                        this.dynamicValue = input.innerHTML;
                    }

                    if(getCharacterRtlType_V1.call(this, character) != "rtl") {
                        caretRtlDetect.style.direction = "rtl";
                        caretRtlDetect.innerHTML = "ם" + character + character;
                        getCharacterLayoutType.start = findCaretPixelPosition_V3.call(this, caretRtlDetect.childNodes[0], 1, true);
                        getCharacterLayoutType.end = findCaretPixelPosition_V3.call(this, caretRtlDetect.childNodes[0], 2, true);
                        if(getCharacterLayoutType.start && getCharacterLayoutType.end) {
                            getCharacterLayoutType.rtl = getCharacterLayoutType.start.left < getCharacterLayoutType.end.left;
                        }
                    }

                    if(getCharacterRtlType_V1.call(this, character) != "ltr") {
                        caretRtlDetect.style.direction = "ltr";
                        caretRtlDetect.innerHTML = "q" + character + character;
                        getCharacterLayoutType.start = findCaretPixelPosition.call(this, caretRtlDetect.childNodes[0], 1);
                        getCharacterLayoutType.end = findCaretPixelPosition.call(this, caretRtlDetect.childNodes[0], 2);
                        if(getCharacterLayoutType.start && getCharacterLayoutType.end) {
                            getCharacterLayoutType.ltr = getCharacterLayoutType.start.right > getCharacterLayoutType.end.right;
                        }
                    }
                    caretRtlDetect.style.direction = "";
                    caretRtlDetect.innerHTML = "";

                    if(getCharacterLayoutType.rtl && getCharacterLayoutType.ltr) {
                        getCharacterLayoutType.cache.cache(character, "inherit");
                    }
                    else if(getCharacterLayoutType.rtl) {
                        getCharacterLayoutType.cache.cache(character, "rtl");
                    }
                    else if(getCharacterLayoutType.ltr) {
                        getCharacterLayoutType.cache.cache(character, "ltr");
                    }
                    return getCharacterLayoutType.cache.get(character);
                }
                finally {
                    this.dynamicValue = input.innerHTML;
                    delete getCharacterLayoutType.start;
                    delete getCharacterLayoutType.end;
                    delete getCharacterLayoutType.ltr;
                    delete getCharacterLayoutType.rtl;
                }
            }
        }

        /**
         * in some circumstances, the node is saved but it has already been removed and a same looking node is seating in the same place, we say, they are twins.
         * @param {Node} node
         * @param {Node} current
         */
        function isTwinNode(node, current) {
            if(node && current) {
                if(node == current) {
                    return true;
                }
                else if(node.nodeType != current.nodeType) {
                    return false;
                }
                else if(node.nodeType == 3) {
                    if(node.textContent != current.textContent) {
                        return false;
                    }
                }
                else if(node.nodeType == 1) {
                    if(node["id"] && current["id"]) {
                        return node["id"] == current["id"];
                    }
                    else if(node["id"] == undefined || current["id"] == undefined) {
                        return false;
                    }
                }
                if(node.parentNode && current.parentNode) {
                    for(var index = 0; index < node.parentNode.childNodes.length; ++index) {
                        if(node.parentNode.childNodes[index + ((node.parentNode["id"] == this.inputId && document.getElementById(this.caretId)) ? 0 : 1)] == node && current.parentNode.childNodes[index] == current) {
                            return isTwinNode.call(this, node.parentNode, current.parentNode);
                        }
                        else if(node.parentNode.childNodes[index + ((node.parentNode["id"] == this.inputId && document.getElementById(this.caretId)) ? 0 : 1)] == node || current.parentNode.childNodes[index] == current) {
                            return false;
                        }
                    }
                }
                else if(node.parentNode) {
                    return false;
                }
                else if(current.parentNode) {
                    return true;
                }
                else {
                    return true;
                }
            }
        }

        function attachPageScroller() {
            if(!IQQIUtils.isRunningOnTv()) {
                if(typeof onPageScroll != "function" || attachPageScroller.initialized == undefined) {
                    function onPageScroll() {
                        iqqiInfoNewLog("attachPageScroller.onPageScroll", "enter.");
                        this.dirty = true;
                    }

                    attachPageScroller.initialized = true;
                }

                document.body.onscroll = onPageScroll.bind(this);
            }
        }
    }
    InputManager.initialized = true;

    this.resetTo(sourceId, inputAttr, inputMethod, maxLength, min, max, display);
    iqqiInfoNewLog("InputManager", "show id: " + this.sourceId + "; inputAttr: " + this.inputAttr + "; maxLength: " + this.maxLength + "; min: " + this.min + "; max: " + this.max);

    iqqiInfoNewLog("InputManager", "dynamicValue: " + this.dynamicValue + "; dynamicPosition: " + getDynamicPosition.call(this));
}

function IQQIConfig() {
    this.property = {};

    if(typeof IQQIConfig.initialized == "undefined") {
        IQQIConfig.TEST = 1;
        IQQIConfig.PROPERTY_FILE_PATH = "hisenseUI/iqqi.conf";
        IQQIConfig.KEY_SYSTEM_LANGUAGE = "system_language";

        IQQIConfig.PROPERTY_SYSTEM_LAN_LIST = [
            {
                "number": 0,
                "name": "English",                                     // the language name in its own language.
                "code": "ENG",                                         // the language code, ISO-639-2
                "market": ["SA", "NA", "EU","COL"],                          // the market of the language. miss acts like EM
                "area": ["MiddleEast", "CIS", "Asian", "Africa"],      // on when market is EM, the property will become working, it shows the area of the language.
                "rtl": false,                                         // if the language itself is rtl, then this will be true, otherwise false. miss acts like false.
                "delete": sit_test_mode                                // if delete is true, it acts as if it never exists in the source list. miss acts like false.
            },
            {
                "number": 1,
                "name": "Français",
                "code": "FRA",
                "market": ["NA", "EU"],
                "area": ["MiddleEast", "CIS", "Asian", "Africa"],
                "rtl": false
            },
            {
                "number": 2,
                "name": "Español",
                "code": "SPA",
                "market": ["SA", "NA", "EU","COL"],
                "area": ["MiddleEast", "CIS", "Asian", "Africa"],
                "rtl": false
            },
            {
                "number": 3,
                "name": "Português",
                "code": "POR",
                "market": ["SA", "EU","COL"],
                "area": ["MiddleEast", "CIS", "Asian", "Africa"],
                "rtl": false
            },
            {
                "number": 4,
                "name": "العربية",
                "code": "ARA",
                "area": ["MiddleEast", "CIS", "Asian", "Africa"],
                "rtl": true
            },
            {
                "number": 5,
                "name": "русский",
                "code": "RUS",
                "market": ["EU"],
                "area": ["MiddleEast", "CIS", "Asian", "Africa"],
                "rtl": false
            },
            {
                "number": 6,
                "name": "中文",
                "code": "CHI",
                "market": ["EU"],
                "area": ["MiddleEast", "CIS", "Asian", "Africa"],
                "rtl": false
            },
            {
                "number": 7,
                "name": "Tiếng Việt",
                "code": "VIE",
                "area": ["Asian"],
                "rtl": false
            },
            {
                "number": 8,
                "name": "ภาษาไทย",
                "code": "THA",
                "area": ["MiddleEast", "Asian"],
                "rtl": false
            },
            {
                "number": 9,
                "name": "မြန်မာ",
                "code": "MYA",
                "area": ["Asian"],
                "rtl": false
            },
            {
                "number": 10,
                "name": "O'zbekiston‎",
                "code": "UZB",
                "market": ["EU"],
                "area": ["CIS"],
                "rtl": false
            },
            {
                "number": 11,
                "name": "हिंदी",
                "code": "HIN",
                "area": ["MiddleEast", "Asian", "Africa"],
                "rtl": false
            },
            {
                "number": 12,
                "name": "український",
                "code": "UKR",
                "area": ["CIS"],
                "rtl": false
            },
            {
                "number": 13,
                "name": "Bahasa Melayu",
                "code": "MSA",
                "area": ["Asian"],
                "rtl": false,
                "delete": sit_test_mode
            },
            {
                "number": 14,
                "name": "עברית",
                "code": "HEB",
                "area": ["CIS"],
                "rtl": true
            },
            {
                "number": 15,
                "name": "繁體中文",
                "code": "ZHO",
                "area": ["Asian"],
                "rtl": false
            },
            {
                "number": 16,
                "name": "Deutsch",
                "code": "DEU",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 17,
                "name": "Italiano",
                "code": "ITA",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 18,
                "name": "Svenska",
                "code": "SWE",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 19,
                "name": "Dansk",
                "code": "DAN",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 20,
                "name": "Suomi",
                "code": "FIN",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 21,
                "name": "Norsk",
                "code": "NOR",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 22,
                "name": "Čeština",
                "code": "CES",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 23,
                "name": "Slovenčina",
                "code": "SLK",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 24,
                "name": "Polski",
                "code": "POL",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 25,
                "name": "Magyar",
                "code": "HUN",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 26,
                "name": "Български",
                "code": "BUL",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 27,
                "name": "Türkçe",
                "code": "TUR",
                "market": ["EU"],
                "rtl": false
            },
            {
                "number": 28,
                "name": "فارسی‎",
                "code": "FAS",
                "area": ["MiddleEast", "Africa"],
                "rtl": true
            },
            {
                "number": 29,
                "name": "Bhs Indonesia",
                "code": "IND",
                "area": ["Asian"],
                "rtl": false,
                "delete": sit_test_mode
            },
            {
                "number": 41,
                "name": "Ελληνικά",                                     // the language name in its own language.
                "code": "GRE",                                         // the language code, ISO-639-2
                "market": ["EU"],                          // the market of the language. miss acts like EM
                "rtl": false                                        // if the language itself is rtl, then this will be true, otherwise false. miss acts like false.
            }
        ];

        IQQIConfig.prototype.IQQIConfigInit = function() {
            try {
                //if(!!this.property && Object.keys(this.property).length > 0) {
                //    iqqiInfoNewLog("IQQIConfig, IQQIConfigInit", "config has been inited successfully. show length: " + Object.keys(this.property).length);
                //    for(var key in this.property) {
                //        iqqiInfoNewLog("IQQIConfig, IQQIConfigInit", "show this.property[" + key + "] = " + this.property[key]);
                //    }
                //    return true;
                //}

                if(tv == false) {
                    iqqiInfoNewLog("IQQIConfig, IQQIConfigInit", "not in tv mode, do nothing.");
                    this.property = {};
                    return true;
                }

                if(Hisense.File.exists(IQQIConfig.PROPERTY_FILE_PATH, 1)) {
                    var res = Hisense.File.read(IQQIConfig.PROPERTY_FILE_PATH, 1);
                    try {
                        this.property = JSON.parse(res);
                    }
                    catch(ex) {
                        this.property = {};
                        iqqiErrorNewLog("IQQIConfig, IQQIConfigInit", "show error when loading property file: " + ex, ex);
                        return false;
                    }
                }
            }
            catch(ex) {
                this.property = {};
                iqqiErrorNewLog("IQQIConfig.IQQIConfigInit", "show ex: " + ex, ex);
            }
            return true;
        };

        IQQIConfig.prototype.IQQIConfigGetPropertyFromFile = function(key) {
            if(this.IQQIConfigInit()) {
                var value = this.property[key];
                if(!!value) {
                    return value;
                }
                return "";
            }
            iqqiInfoNewLog("IQQIConfig, IQQIConfigGetPropertyFromFile", "config init failed, empty string returned as default.");
            return "";
        };

        IQQIConfig.prototype.IQQIConfigSetPropertyToFile = function(key, value) {
            if(this.IQQIConfigInit()) {
                try {
                    this.property[key] = value;
                    var text = JSON.stringify(this.property);
                    var res = Hisense.File.write(IQQIConfig.PROPERTY_FILE_PATH, text, 1);
                    if(0 == res == false) {
                        iqqiInfoNewLog("IQQIConfig, IQQIConfigSetPropertyToFile", "write file failed.");
                        return false;
                    }
                }
                catch(ex) {
                    iqqiErrorNewLog("IQQIConfig.IQQIConfigSetPropertyToFile", "show error: " + ex, ex);
                    return false;
                }
                return true;
            }
            iqqiInfoNewLog("IQQIConfig, IQQIConfigSetPropertyToFile", "can not write anything since init failed.");
            return false;
        };

        IQQIConfig.prototype.IQQIConfigFindLanguageRtl = function(opeData) {
            for(var i = 0; i < IQQIConfig.PROPERTY_SYSTEM_LAN_LIST.length; i++) {
                if(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].code == opeData.curLang) {
                    return IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].rtl;
                }
            }
        };

        IQQIConfig.prototype.IQQIConfigFindLaneByCode = function(code) {
            for(var i = 0; i < IQQIConfig.PROPERTY_SYSTEM_LAN_LIST.length; ++i) {
                if(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].code == code) {
                    return IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i];
                }
            }
        };

        IQQIConfig.prototype.IQQIConfigAssertRtl = function(code) {
            var lane = this.IQQIConfigFindLaneByCode(code);
            return lane && lane.rtl;
        };

        IQQIConfig.prototype.IQQIConfigGetSystemLanguage = function() {
            if(tv) {
                var writeLan = this.IQQIConfigGetPropertyFromFile(IQQIConfig.KEY_SYSTEM_LANGUAGE);
                if(!!writeLan) {
                    return writeLan;
                }
                var number = model.language.getOsd();
                iqqiInfoNewLog("IQQIConfig, IQQIConfigGetSystemLanguage", "show language number for osd: " + number);
                for(var i = 0; i < IQQIConfig.PROPERTY_SYSTEM_LAN_LIST.length; i++) {
                    if(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].number == number) {
                        return IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].code;
                    }
                }
            }
            return "ENG";
        };

        IQQIConfig.prototype.IQQIConfigGetLanguageList = function(opeData, market, area) {
            iqqiInfoNewLog("IQQIConfig.IQQIConfigGetLanguageList", "show market: " + market + "; area: " + area);
            if(tv == false) {
                opeData.curLangArray = [];
                for(var k = 0; k < IQQIConfig.PROPERTY_SYSTEM_LAN_LIST.length; ++k) {
                    opeData.curLangArray.push(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[k].code);
                }
                return IQQIConfig.PROPERTY_SYSTEM_LAN_LIST;
            }
            var lans = [];
            for(var i = 0; i < IQQIConfig.PROPERTY_SYSTEM_LAN_LIST.length; i++) {
                if(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].delete) {
                    continue;
                }

                if(sit_test_mode) {
                    lans.push(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i]);
                    continue;
                }

                if("EM" == market) {
                    if( !!IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].area && IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].area.indexOf(area) + 1 > 0) {
                        lans.push(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i]);
                    }
                    continue;
                }
                if(!!IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].market && IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].market.indexOf(market) + 1 > 0) {
                    lans.push(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i]);
                }
                else if(!IQQIUtils.isRunningOnTv()) {
                    lans.push(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i]);
                }
            }
            if(lans.length == 0) {
                if("EM" == market) {
                    if(!!IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].area && IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i].area.indexOf("Africa") + 1 > 0) {
                        lans.push(IQQIConfig.PROPERTY_SYSTEM_LAN_LIST[i]);
                    }
                }
            }
            opeData.curLangArray = [];
            for(var j = 0; j < lans.length; ++j) {
                opeData.curLangArray.push(lans[j].code);
            }
            return lans;
        };

        IQQIConfig.prototype.IQQIConfigAdaptTTFForLan = function(lan, id) {
            switch(lan) {
                case "MYA":
                    IQQIConfig.fontFamily = "my_Myanmar_Font";
                    break;
                case "HIN":
                    IQQIConfig.fontFamily = "my_Hindi_Font";
                    break;
                case "THA":
                    IQQIConfig.fontFamily = "my_Thai_Font";
                    break;
                //case "FAS":
                //    IQQIConfig.fontFamily = "my_Persian_Font";
                //    break;
                //case "ARA":
                //    IQQIConfig.fontFamily = "my_Arabic_Font";
                //    break;
                //case "CHI":
                //    IQQIConfig.fontFamily = "my_zh_CN_Font";
                //    break;
                //case "ZHO":
                //    IQQIConfig.fontFamily = "my_zh_TW_Font";
                //    break;
                default:
                    IQQIConfig.fontFamily = "myFirstFont";
                    break;
            }
            var target = document.getElementById(id);
            if(IQQIConfig.fontFamily == target.style.fontFamily) {
                iqqiInfoNewLog("IQQIConfig.IQQIConfigAdaptTTFForLan", "same font-family, nothing to be done.");
                return;
            }
            target.style.fontFamily = IQQIConfig.fontFamily;
        }
    }
    IQQIConfig.initialized = true;
}

function Cache(name, capacity) {
    this.name = name;
    this.capacity = capacity;

    this.keys = [];
    this.values = {};

    if(Cache.initialized == undefined) {
        Cache.prototype.cache = function(key, value) {
            if(this.keys.indexOf(key) == -1 && this.keys.length >= this.capacity) {
                delete this.values[this.keys.unshift(0)];
                this.keys.push(key);
            }
            else if(this.keys.length < this.capacity) {
                this.keys.push(key);
            }
            this.values[key] = value;
        };

        Cache.prototype.get = function(key) {
            return this.values[key];
        };

        Cache.initialized = true;
    }
}

var IQQIUtils = IQQIUtils || {};
(function(IQQIUtils) {
    IQQIUtils.MODE_LANGUAGE = 0;
    IQQIUtils.MODE_NUM1 = 1;
    IQQIUtils.MODE_NUM2 = 2;
    IQQIUtils.MODE_PASSWORD = 3;
    IQQIUtils.MODE_NUMBER_PASSWORD = 4;

    IQQIUtils.getIQQICurLanMode = function(opeData) {
        var tLanMode = opeData.curLang;
        switch(opeData.curMode) {
            case IQQIUtils.MODE_LANGUAGE:
                break;
            case IQQIUtils.MODE_NUM1:
                tLanMode = "NUM1";
                break;
            case IQQIUtils.MODE_NUM2:
                tLanMode = "NUM2";
                break;
        }
        return tLanMode;
    };

    IQQIUtils.getCurLanguageRtl = function(opeData) {
        return opeData.IQQIConfig.IQQIConfigFindLanguageRtl(opeData) || false;
    };

    IQQIUtils.getSystemLanguage = function(opeData) {
        var curLang = "ENG";
        if(tv) {
            curLang = opeData.IQQIConfig.IQQIConfigGetSystemLanguage(IQQIConfig.KEY_SYSTEM_LANGUAGE);

            if(!curLang) {
                var market = !!hiWebOsFrame["getCurrentArea"] ? hiWebOsFrame["getCurrentArea"].call(hiWebOsFrame.iqqi.page) : "EU";
                var area = !!hiWebOsFrame["getCurrentSubArea"] ? hiWebOsFrame["getCurrentSubArea"].call(hiWebOsFrame.iqqi.page) : undefined;
                var lanes = opeData.IQQIConfig.IQQIConfigGetLanguageList(opeData, market, area);
                return lanes && lanes[0].code;
            }

            sit_test_mode && (curLang = "HEB");
        }
        // opeData.curLang = curLang;  // this is very dangerous
        return curLang;
    };

    IQQIUtils.getValueOfId = function(id, opeData) {
        var names = id.split("_");
        var curLang = IQQIUtils.getIQQICurLanMode(opeData);
        var values = opeData.iqqiData[curLang][names[0]];
        if(opeData.shouldUseCaps || opeData.isCapsMode) {
            values = opeData.iqqiData[curLang].upper[names[0]];
        }
        if(!!values) {
            return values[names[1]];
        }
        return "";
    };

    IQQIUtils.translateControlPanel = function(opeData, html, lang) {
        var segments = html.split(/>[^><\s]+?(?=<)/gm);
        segments.splice(1, 0, ">" + strings["iqqi_control_enter"][lang] || strings["iqqi_control_enter"][opeData.curLangArray[0]]);
        segments.splice(3, 0, ">" + strings["iqqi_control_delete"][lang] || strings["iqqi_control_delete"][opeData.curLangArray[0]]);
        segments.splice(5, 0, ">" + strings["iqqi_control_right"][lang] || strings["iqqi_control_right"][opeData.curLangArray[0]]);
        segments.splice(7, 0, ">" + strings["iqqi_control_left"][lang] || strings["iqqi_control_left"][opeData.curLangArray[0]]);
        return segments.join("");
    };

    IQQIUtils.formatNewClass = function(element, state) {
        if(/.+Normal$/.test(element.className)) {
            return element.className.slice(0, -6) + state;
        }
        else if(/.+Focus$/.test(element.className)) {
            return element.className.slice(0, -5) + state;
        }
    };

    IQQIUtils.getElementPaddingStart = function(id, rtl) {
        var element = document.getElementById(id);
        var style = element.currentStyle || document.defaultView.getComputedStyle(element, null);
        var start = style && (rtl ? style.paddingRight : style.paddingLeft);
        if(start) {
            return parseInt(start.slice(0, -2));
        }
        return 0;
    };

    IQQIUtils.getElementWidth = function(id) {
        var element = document.getElementById(id);
        var style = element.currentStyle || document.defaultView.getComputedStyle(element, null);
        if(style && style.width) {
            return parseInt(style.width.slice(0, -2));
        }
        return 0;
    };

    IQQIUtils.getContentStart = function(id, rtl) {
        var element = document.getElementById(id);
        if(element) {
            return IQQIUtils.getElementPaddingStart(id, rtl) + element.getBoundingClientRect().left;
        }
    };

    IQQIUtils.isRunningOnTv = function() {
        return window.modeljs;
    };

    IQQIUtils.isRunningOnOpera = function() {
        return navigator.appName == "Opera";
    };

    IQQIUtils.getSizeScale = function() {
        if(IQQIUtils.scale) {
            return IQQIUtils.scale;
        }
        IQQIUtils.scale = 1.0;
        IQQIUtils.leftRange = 0;
        if(IQQIUtils.isRunningOnTv()) {
            var EPOSresolution = model.system.getCurResolution();
            var DeviceMsgSA = Hisense.File.read("am_tv_model_name", 0);
            if ("HIS_EPOS_HD" == EPOSresolution) {
                if (DeviceMsgSA == 'LHD32K3110WAM') {
                    IQQIUtils.scale = 1366 / 1920.0;
                    IQQIUtils.leftRange = 1920-1366;
                } else {
                    IQQIUtils.scale = 1366 / 1920.0;
                    IQQIUtils.leftRange = 0;
                }
            }
            else if("HIS_EPOS_FHD" == EPOSresolution && 'HE32M2161HWTS' == DeviceMsgSA) {
                IQQIUtils.scale = 1366 / 1920.0;
                IQQIUtils.leftRange = 1920-1366;
            }

        }
        return IQQIUtils.scale;
    }
})(IQQIUtils);

var iqqi_imagine_test_data = [
    "c",
    "can",
    "could",
    "children",
    "come",
    "case",
    "course",
    "change",
    "care",
    "country",
    "company",
    "control",
    "community",
    "current",
    "countries",
    "call",
    "came",
    "cannot",
    "child",
    "cost",
    "class",
    "companies",
    "changes",
    "common",
    "certain",
    "clear"
];

var iqqi_imagine_test_data_y = [
    "y",
    "you",
    "your",
    "years",
    "year",
    "York",
    "york",
    "yet",
    "young",
    "yourself",
    "yes",
    "youth",
    "yesterday",
    "younger",
    "yeah",
    "yellow",
    "yahoo",
    "yield",
    "yours",
    "yards",
    "yard"
];
