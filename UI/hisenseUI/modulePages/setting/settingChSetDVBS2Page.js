/**
 * Created by Admin on 14-6-17.
 */
function getSettingChSetDVBS2PageData(opt){
    opt.CaE = [
        {
            "id":"settingChSetDVBS2PageTitle",
            "description":"标题",
            "CaEType":"span"
        },
        {
            "id":"settingChSetDVBS2SateNav",
            "description":"卫星导航列表",
            "CaEType":"NavigationBar",
            "oriCaE":[
                {
                    "id":"settingChSetSate",
                    "description":"卫星导航名",
                    "CaEType":"div"
                }
            ],
            "NavigationBarConfig":{
                "NavigationBarDataItem":["settingChSetSate"],
                "PageSize":3,
                "ArrowFlag":true
            },
            "classes":{
                "normal":"wizardNavBarLi_3_Normal","focus":"wizardNavBarLi_3_Focus","dataSelected":"wizardNavBarLi_3_Selected"
            },
            "nav":{
                "upTo":"","downTo":"settingChSetDVBS2SateNameGridUl"
            },
            "handler":{
                "aftLeftHandler":"settingMoveBetweenSatelliteBar","aftRightHandler":"settingMoveBetweenSatelliteBar"
            }
        },
        {
            "id": "settingChSetDVBS2SateNameGridUl",//在页面中的按钮或者组件容器Id
            "description": "卫星名列表",
            "CaEType": "GridUl",

            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "settingChSetDVBS2SelectImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/selectedBall.png",
                        "closeImg":"img/unselectedBall.png"
                    },
                    "classes":{
                        "normal":"GridUlLi_Img"
                    }
                },
                {
                    "id": "settingChSetDVBS2SateName",
                    "description": "卫星名",
                    "CaEType": "span"
                }
            ],
            "GridUlConfig": {
                "GridUlDataItem": [ "settingChSetDVBS2SelectImg", "settingChSetDVBS2SateName"],
                "LineNum":2,
                "PageSize":12,
                "FlipType":'HOR',
                "ArrowFlag":true
            },
            "classes": {
                "normal": "GridUlLi_2_Normal", "focus": "GridUlLi_2_Focus","dataSelected":"GridUlLi_2_Normal"
            },
            "nav":{
                "upTo":"settingChSetDVBS2SateNav","downTo":"settingChSetDVBS2NextBtn"
            },
            "handler":{
                "aftEnterHandler":"settingSetUseSatellite"
            }
        },
        {
            "id":"settingChSetDVBS2PrvBtn",
            "description":"选择进入上一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "wizardBtnNormal", "focus": "wizardBtnFocus"
            },
            "nav":{
                "upTo":"settingChSetDVBS2SateNameGridUl","rightTo":"settingChSetDVBS2NextBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBS2ToMainPage"
            }
        },
        {
            "id":"settingChSetDVBS2NextBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "wizardBtnNormal", "focus": "wizardBtnFocus","disable":"wizardBtnDisable"
            },
            "nav":{
                "upTo":"settingChSetDVBS2SateNameGridUl","leftTo":"settingChSetDVBS2PrvBtn"
            },
            "handler":{
                "aftEnterHandler":"settingChSetDVBS2ToNextPage"
            }
        }
    ];
    settingInitDVBS2OperateData();
    return settingChSetDVBS2PageData;
}
var settingChSetDVBS2PageData={
    "settingChSetDVBS2PageTitle":{"Data":"Search Setup"},
    "settingChSetDVBS2SateNav":{
        "Data":[
            {
                "settingChSetSate":{"Data":"Satellite A"}
            },
            {
                "settingChSetSate":{"Data":"Satellite B"}
            },
            {
                "settingChSetSate":{"Data":"Satellite C"}
            },
            {
                "settingChSetSate":{"Data":"Satellite D"}
            }
        ],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "settingChSetDVBS2SateNameGridUl":{
        "Data":[
            {
                "settingChSetDVBS2SelectImg":{"Data":true},
                "settingChSetDVBS2SateName":{"Data":"none"}
            },
            {
                "settingChSetDVBS2SelectImg":{"Data":false},
                "settingChSetDVBS2SateName":{"Data":"weixingmingcheng1"}
            }
        ],
        "DataSelectedIndex":0,
        "SelectedIndex":0
    },
    "settingChSetDVBS2PrvBtn":{"Data":"Back"},
    "settingChSetDVBS2NextBtn":{"Data":"Next"},
    "operateData":{
        "currFocusSateIdx":0,
        "satelliteModeName":"Single",
        "satelliteNum":1,
        "satellitBarName":[" A"," B"," C"," D"],
        "selectedSatelliteIdxList":[0,0,0,0],
        "satelliteNameList":[],
        "satelliteIdList":[],
        "selectedSatelliteNameList":[],
        "selectedSatelliteIdList":[]
    },
    "langData":{
        "Search Setup":["Search Setup"],
        "Back":["Back"],
        "Next":["Next"],
        "None":["None"],
        "Single Satellite A":["Single Satellite A"],
        "Tone Burst A":["Tone Burst A"],
        "Tone Burst B":["Tone Burst B"],
        "DiSeqc A":["DiSeqc A"],
        "DiSeqc B":["DiSeqc B"],
        "DiSeqc C":["DiSeqc C"],
        "DiSeqc D":["DiSeqc D"],
        "Unicable A":["Unicable A"],
        "Unicable B":["Unicable B"]
    },
    rewrite:"settingRewriteChSetDVBS2Page"
}

/*******************************************************************
 name:settingInitDVBS2OperateData
 description:初始化DVBS2operateData
 input:
 output:
 return
 *******************************************************************/
function settingInitDVBS2OperateData(){
    var data = settingChSetDVBS2PageData;
    try{
        if(tv == false){
            data.operateData.currFocusSateIdx = 0;
            data.operateData.satelliteNum = settingGetSatelliteNum();
            data.operateData.satelliteModeName = settingGetSatelliteModeName();
            for(var i=0; i < data.operateData.satelliteNum;i++){
                data.operateData.selectedSatelliteIdxList[i]=i;
            }
            data.operateData.satelliteNameList=["weixing1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","weixing2","weixing3","weixing4"];
            data.operateData.satelliteIdList = [-1,1,1,1];
        }else{
            data.operateData.currFocusSateIdx = 0;
            data.operateData.satelliteNum = settingGetSatelliteNum();
            data.operateData.satelliteModeName = settingGetSatelliteModeName();

            data.operateData.satelliteIdList = model.satellite.getIdList();
            data.operateData.satelliteIdList.unshift(-1);

            data.operateData.satelliteNameList = model.satellite.getNameList();
            data.operateData.satelliteNameList.unshift("None");

            debugPrint("settingInitDVBS2OperateData:satelliteNameList.length="+data.operateData.satelliteNameList.length);
            data.operateData.selectedSatelliteIdList = model.satellite.getSelectedIdList();
            if(settingChSetDVBS2SatelliteSelectedFlag() == 0){
                debugE("settingInitDVBS2OperateData:not selected satellite!!");
                model.satellite.setSelected1Id(1);
            }

            data.operateData.selectedSatelliteIdList = model.satellite.getSelectedIdList();
            data.operateData.selectedSatelliteNameList = model.satellite.getSelectedNameList();
            data.operateData.selectedSatelliteIdxList=[0,0,0,0];

            //找到索引位置
            for(var i= 0; i< data.operateData.satelliteIdList.length;i++){ //循环所有
                for(var j=0; j < data.operateData.selectedSatelliteIdList.length; j++){
                    if(data.operateData.selectedSatelliteIdList[j] == data.operateData.satelliteIdList[i]){
                        data.operateData.selectedSatelliteIdxList[j] = i;
                        break;
                    }
                }
            }

        }
    }catch (ex){
        debugPrint("settingInitDVBS2OperateData "+ ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingRewriteChSetDVBS2Page
 description:刷新DVBS2页面
 input:
 output:
 return
 *******************************************************************/
function settingRewriteChSetDVBS2Page(data){
    try{
        if(data.settingChSetDVBS2SateNav.Data.length >  data.operateData.satelliteNum){
            data.settingChSetDVBS2SateNav.Data.splice(data.operateData.satelliteNum);
        }
        else if(data.settingChSetDVBS2SateNav.Data.length <  data.operateData.satelliteNum){
            while(data.settingChSetDVBS2SateNav.Data.length <  data.operateData.satelliteNum){
                var itemData = {
                    "settingChSetSate":{"Data":"Satellite A"}
                }
                data.settingChSetDVBS2SateNav.Data.push(itemData);
            }
        }
        for(var satelliteIdx = 0; satelliteIdx < data.operateData.satelliteNum;satelliteIdx++){
            data.settingChSetDVBS2SateNav.Data[satelliteIdx].settingChSetSate.Data = data.operateData.satelliteModeName+data.operateData.satellitBarName[satelliteIdx];
        }
        data.settingChSetDVBS2SateNav.DataSelectedIndex = data.operateData.currFocusSateIdx;
        data.settingChSetDVBS2SateNav.SelectedIndex = data.operateData.currFocusSateIdx;

        //根据获取的卫星列表填充pageData
        if(data.settingChSetDVBS2SateNameGridUl.Data.length > data.operateData.satelliteNameList.length){
            data.settingChSetDVBS2SateNameGridUl.Data.splice(data.operateData.satelliteNameList.length);
        }else if(data.settingChSetDVBS2SateNameGridUl.Data.length < data.operateData.satelliteNameList.length){
            while(data.settingChSetDVBS2SateNameGridUl.Data.length < data.operateData.satelliteNameList.length){
                var itemData =
                {
                    "settingChSetDVBS2SelectImg":{"Data":false},
                    "settingChSetDVBS2SateName":{"Data":""}
                }
                data.settingChSetDVBS2SateNameGridUl.Data.push(itemData);
            }
        }
        if(data.operateData.satelliteNameList.length == 0){
            data.settingChSetDVBS2SateNameGridUl.disable = true;
        }else{
            data.settingChSetDVBS2SateNameGridUl.disable = false;
            for(var satelliteNameIdx = 0; satelliteNameIdx < data.operateData.satelliteNameList.length;satelliteNameIdx++){
                data.settingChSetDVBS2SateNameGridUl.Data[satelliteNameIdx].settingChSetDVBS2SelectImg.Data = false;
                data.settingChSetDVBS2SateNameGridUl.Data[satelliteNameIdx].settingChSetDVBS2SateName.Data =
                    data.operateData.satelliteNameList[satelliteNameIdx];
            }
            data.settingChSetDVBS2SateNameGridUl.DataSelectedIndex = data.operateData.selectedSatelliteIdxList[data.operateData.currFocusSateIdx];
            data.settingChSetDVBS2SateNameGridUl.SelectedIndex = data.operateData.selectedSatelliteIdxList[data.operateData.currFocusSateIdx];
            data.settingChSetDVBS2SateNameGridUl.Data[data.settingChSetDVBS2SateNameGridUl.DataSelectedIndex].settingChSetDVBS2SelectImg.Data = true;

        }
        if(settingChSetDVBS2SatelliteSelectedFlag() == 0){
            data.settingChSetDVBS2NextBtn.disable = true;
        }else{
            data.settingChSetDVBS2NextBtn.disable = false;
        }
     }catch (ex){
        debugPrint("settingRewriteChSetDVBS2Page "+ex.message,DebugLevel.ERROR);
    }
}

function settingChSetDVBS2SatelliteSelectedFlag(){
    var data = settingChSetDVBS2PageData;
    var selectSatelliteFlag = 0;
    for(var i = 0; i < data.operateData.selectedSatelliteIdList.length; i++){
        if(data.operateData.selectedSatelliteIdList[i] != -1){
            selectSatelliteFlag = 1;
            break;
        }
    }
    return selectSatelliteFlag;
}
/*******************************************************************
 name:settingMoveBetweenSatelliteBar
 description:在卫星A,B,C,D之间切换焦点对应的数据进卫星名称进行修改
 input:
 output:
 return
 *******************************************************************/
function settingMoveBetweenSatelliteBar(){
    this.DataSelectedIndex = this.SelectedIndex;
    var data = settingChSetDVBS2PageData;
    data.operateData.currFocusSateIdx = this.SelectedIndex;
    hiWebOsFrame.ChSetDVBS2Page.rewrite();
    hiWebOsFrame.ChSetDVBS2Page.hiFocus("settingChSetDVBS2SateNav");
}
/*******************************************************************
 name:settingSetUseSatellite
 description:设置使用的卫星
 input:
 output:
 return:
 *******************************************************************/
function settingSetUseSatellite(){
    try{
        this.DataSelectedIndex = this.SelectedIndex;
        var data = settingChSetDVBS2PageData;
        data.operateData.selectedSatelliteIdxList[data.operateData.currFocusSateIdx] = this.SelectedIndex;

        for(var i = 0; i < data.operateData.selectedSatelliteIdxList.length; i++){
            if(i != data.operateData.currFocusSateIdx){
                if(this.SelectedIndex == data.operateData.selectedSatelliteIdxList[i] && this.SelectedIndex != -1){
                    settingChSetDVBS2SetUseSatelliteId(i,-1);
                    data.operateData.selectedSatelliteIdList[i] = -1;
                    data.operateData.selectedSatelliteIdxList[i] = 0;
                }
            }
        }
        data.operateData.selectedSatelliteIdList[data.operateData.currFocusSateIdx] = data.operateData.satelliteIdList[this.SelectedIndex];
        if(tv == true){
            settingChSetDVBS2SetUseSatelliteId(data.operateData.currFocusSateIdx,data.operateData.satelliteIdList[this.SelectedIndex]);
            data.operateData.selectedSatelliteIdList = model.satellite.getSelectedIdList();
        }
        hiWebOsFrame.ChSetDVBS2Page.rewriteDataOnly();
    }catch (ex){
        debugE("settingSetUseSatellite:"+ex.message);
    }


}

function settingChSetDVBS2SetUseSatelliteId(idx,id){
    debugPrint("settingChSetDVBS2SetUseSatelliteId:idx="+idx+","+id,DebugLevel.ALWAYS);
    if(tv == true){
        switch (idx){
            case 0:
                model.satellite.setSelected1Id(id);
                break;
            case 1:
                model.satellite.setSelected2Id(id);
                break;
            case 2:
                model.satellite.setSelected3Id(id);
                break;
            case 3:
                model.satellite.setSelected4Id(id);
                break;
            default :
                debugE("settingChSetDVBS2SetUseSatelliteId:idx="+idx);
                break;
        }
    }
}
/*******************************************************************
 name:settingChSetDVBS2ToNextPage
 description:从设置DVBS设置第二步到下一步
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBS2ToNextPage(){
    var data = settingChSetDVBS2PageData;
    try{

        settingChSetDVBS2ToDVBS3Page();
    }catch (ex){
        debugPrint("settingChSetDVBS2ToNextPage:"+ex.message,DebugLevel.ERROR);
    }
}
/*******************************************************************
 name:settingChSetDVBS2ToDVBS3Page
 description:从设置DVBS设置第二步到第三步
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBS2ToDVBS3Page(){
    try{
        hiWebOsFrame.createPage('settingChSetDVBS3PageId',null, hiWebOsFrame.ChSetDVBS2Page, null,function(a){
            hiWebOsFrame.ChSetDVBS3Page = a;
            hiWebOsFrame.ChSetDVBS2Page.close();
            a.open();
            a.hiFocus();
        });
    }catch (ex){
        debugPrint("settingChSetDVBS2ToDVBS3Page:"+ex.message,DebugLevel.ERROR);
    }

}
/*******************************************************************
 name:settingChSetDVBS2ToMainPage
 description:从设置DVBS第2部到设置主页
 input:
 output:
 return
 *******************************************************************/
function settingChSetDVBS2ToMainPage(){
    hiWebOsFrame.ChSetDVBS2Page.close();
    hiWebOsFrame.ChSetDVBS2Page.destroy();

    hiWebOsFrame.ChSetMainPage.open();
    hiWebOsFrame.ChSetMainPage.hiFocus();
}

function settingChSetDVBS2PageOnDestroy(){
    hiWebOsFrame.ChSetDVBS2Page = null;
}