/**
 * Created by Administrator on 14-6-18.
 */
function getSettingNetTVNameInputData(opt)
{
    opt.CaE= [
        {
            "id": "settingNetTVNameInputHeadText",
            "description": "",
            "CaEType": "span",
            "disable": false

        },
        {
            "id": "settingNetTVNameInputTip",
            "description": "",
            "CaEType": "div",
            "disable": false

        },
        {
            "id":"settingNetTVNameInputTitle",
            "description":"",
            "CaEType":"div"
        },
        {
            "id":"settingNetTVNameInput",
            "description":"",
            "CaEType": "input",
            "inputAttr":"text",
            "maxlength":22,
            "handler":{
                "aftEnterHandler":"invokeSKB",
                'aftEscHandler':"settingNetTVNameInputEscHandle"//点击enter事件后处理开关转换
            },
            "classes":{
                "normal":"wizardInputContentNormal","focus":"wizardInputContentFocus"
            },
            "nav":{
                "downTo":"settingNetTVNameInputOKBtn"
            },
            "onChange":function(){
                var inputName = $("#"+this.id).val();
                if(inputName.length > 0){
                    $("#settingNetTVNameInputPlaceHolder").css("display","none");
                }else{
                    $("#settingNetTVNameInputPlaceHolder").css("display","block");
                }
            }
        },
        {
            "id":"settingNetTVNameInputPlaceHolder",
            "description":"",
            "CaEType":"span"
        },
        {
            "id":"settingNetTVNameInputOKBtn",
            "description":"ok",
            "classes": {
                "normal": "wizardDialogFootLeftNormal", "focus": "wizardDialogFootLeftFocus"
            },
            "nav": { "upTo":"settingNetTVNameInput","rightTo":"settingNetTVNameInputCancelBtn"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"settingNetTVNameInputOKHandle",//点击enter事件后处理开关转换
                'aftEscHandler':"settingNetTVNameInputEscHandle"//点击enter事件后处理开关转换
            }

        },
        {
            "id":"settingNetTVNameInputCancelBtn",
            "description":"ok",
            "classes": {
                "normal": "wizardDialogFootRightNormal", "focus": "wizardDialogFootRightFocus"
            },
            "nav": {  "upTo":"settingNetTVNameInput","leftTo":"settingNetTVNameInputOKBtn"},
            "CaEType": "div",
            "handler":{
                'aftEnterHandler':"settingNetTVNameInputEscHandle",//点击enter事件后处理开关转换
                'aftEscHandler':"settingNetTVNameInputEscHandle"//点击enter事件后处理开关转换
            }

        }

    ];
    settingInitNetTVNameInputDialog();
    return settingNetTVNameInputData;

}
var settingNetTVNameInputData={
    "settingNetTVNameInputHeadText":{Data:"Edit TV name"},
    "settingNetTVNameInputTitle":{"Data":"TV Name:"},
    "settingNetTVNameInput":{"Data":""},
    "settingNetTVNameInputPlaceHolder":{"Data":""},
    "settingNetTVNameInputOKBtn":{Data:"OK"},
    "settingNetTVNameInputCancelBtn":{Data:"Cancel"},
    "settingNetTVNameInputTip":{Data:"You must restart the TV in order for the customized name to take effect."},
    "operateData": {

    },
    "langData":{
        "OK":["OK","OK","OK","OK","OK","OK","OK","OK","OK","OK"],
        "Cancel":["Cancel","Abbrechen","Annulla","Cancelar","Cancelar","Annuler","Avbryt","Avbryt","Annuller","Peruuta"],
        "TV Name:":["TV Name:"],
        "Edit TV name":["Edit TV name","TV-Namen bearbeiten","Modifica nome TV","Edite o nome da TV","Editar nombre de TV","Editer nom TV","Redigere TV-navn","Redigera TV-namn","Rediger tv navn","Muokkaa TV:n nimeä","编辑本机名称"],
        "after define the  name you need to restart":["after define the  name you need to restart","",""],
        "You must restart the TV in order for the customized name to take effect.":["The customized device name requires restart to take effect.","Neustart des Geräts für die Übernahme des geänderten Gerätenames erforderlich.","Il nome del dispositivo personalizzato richiede di essere riavviato per avere effetto.","É necesário reiniciar para que o nome personalizado do dispositivo tenha efeito. ","El nombre del dispositivo personalizado requiere reiniciar para tener efecto.","Le nom de dispositif personnalisé nécessite un redémarrage pour être effectif.","Egendefinert enhetsnavn krever omstart for å tre i kraft.","Anpassade enheter måste startas om för att de ska gälla.","Den tilpassede enhedsnavn kræver genstart for at træde i kraft.","Kustomoitu laitenimi vaatii uudelleen käynnistämistä toimiakseen.","自定义本机名称需要重启后才可能生效"]

    },
    rewrite:"settingRewriteNetTVNameInputDialog"
};
function settingInitNetTVNameInputDialog(){

}
function settingRewriteNetTVNameInputDialog(){

}
function settingNetTVNameInputOKHandle()
{
    try{
        var currTVName=$("#settingNetTVNameInput").val();
        debugPrint("settingNetTVNameInputOKHandle:inputTvName="+currTVName,DebugLevel.ALWAYS);
        if(currTVName.length>0)
        {
            settingFirPageSetNetworkTVName(currTVName);
            if(tv == true){
                model.system.setMachinename(currTVName);
            }
            settingFirPageSetNetworkTVName(currTVName);
            hiWebOsFrame.NetTVNameInputDialog.close();
            hiWebOsFrame.settingsFirst.hiFocus();
            hiWebOsFrame.NetTVNameInputDialog.destroy();
        }
    }catch (ex){
        debugPrint("settingNetTVNameInputOKHandle:"+ex.message,DebugLevel.ERROR);
    }
}
function settingNetTVNameInputOnOpen(){
    $("#settingNetTVNameInputPlaceHolder").css("display","block");
    $("#settingNetTVNameInputPlaceHolder").html(getCurrentContentLanguage("Show the virtual keyboard by pressing OK button"));

}
function settingNetTVNameInputEscHandle()
{
    hiWebOsFrame.NetTVNameInputDialog.close();
    hiWebOsFrame.settingsFirst.hiFocus();
    hiWebOsFrame.NetTVNameInputDialog.destroy();
}
function settingNetTVNameInputOnDestroy()
{
    hiWebOsFrame.NetTVNameInputDialog=null;
}
