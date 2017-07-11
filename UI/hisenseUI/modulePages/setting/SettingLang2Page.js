/**
 * Created by Administrator on 14-6-17.
 */
function getSettingLang2PageData(opt){

    opt.CaE=[
        {
            "id": "setting_sys_lang2_title",
            "description": "setting head",
            "CaEType": "span"
        },
        {
            "id": "setting_sys_lang2_ul1",//在页面中的按钮或者组件容器Id
            "description": "用于显示语言列表",
            "CaEType": "Ul",
            //  "LineNum":2,
            "disable": false,
            "SelectedIndex": 0,
            "classes": {
                "normal": "setting_sys_mt_normal", "focus": "setting_sys_mt_focus"
            },
            "nav":{
                // "enterTo":"languagePageFootSBtn"
            },
            "handler": {
                "aftEnterHandler": "SettingSysLang2EnHandler",
                "aftEscHandler": "SettingSysLang2EscHandler",
                "aftUpHandler": "SettingSysLang2UpHandler",
                "aftDownHandler": "SettingSysLang2DownHandler"

            },
            "oriCaE": [
                {
                    "id": "setting_sys_lang2_img1",
                    "description": "选择图片",
                    "CaEType": "img"

                },
                {
                    "id": "setting_sys_lang2_text1",
                    "description": "城市名称",
                    "CaEType": "span"

                }
            ],
            UlConfig: {

                "UlDataItem": [ "setting_sys_time_list_txt1", "setting_sys_time_list_img1"]
//                "PageSize":5

            }
        }


    ]
   // getLang2DataInit();
    return PageDataSettingSysLang2;
}

function getLang2DataInit()
{
    try
    {
        model.language.onOsdChaged=onOsdlangChaged;
        model.language.onSubtitleFavouredIndexChaged=onSubfirlangChaged;
        model.language.onSubtitleAlternativeIndexChaged=onSubseclanChaged;
        model.language.onAudioFavouredIndexChaged=onAudiofirChaged;
        model.language.onAudioAlternativeIndexChaged=onAudiosecChaged;
        model.ttx.onEnumLanguage_groupChaged=onDigTeletextChaged;
    }
    catch (e)
    {
        debugPrint(e.message)
    }
}

var PageDataSettingSysLang2 = {
    "setting_sys_lang2_title":{Data:"Menu language"},
    "setting_sys_lang2_ul1": {Data:[
        {
            "setting_sys_lang2_img1": {Data:"img/selectedBall.png"},
            "setting_sys_lang2_text1": {Data:"english"}
        },
        {
            "setting_sys_lang2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_lang2_text1": {Data:"english"}
        },
        {
            "setting_sys_lang2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_lang2_text1": {Data:"english"}
        },
        {
            "setting_sys_lang2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_lang2_text1": {Data:"english"}
        },
        {
            "setting_sys_lang2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_lang2_text1": {Data:"english"}
        },
        {
            "setting_sys_lang2_img1": {Data:"img/unselectedBall.png"},
            "setting_sys_lang2_text1": {Data:"english"}
        }

    ],
        "SelectedIndex":0
    },
    "operateData": {
        "currentpagelist":["osd","firaudio","secaudio","firsub","secsub","decodepage","digtext"],
        "curpage":"osd",
        "langlist":[],
        curselectindex:0,
        "beginindex":0,
        "titlelist":["Menu Language","Primary Audio","Secondary Audio","Primary Subtitle","Secondary Subtitle","Decoding Page","Digital Teletext"]


    },
    "langData":{
        "Persian":[],
        "Arab":[],
        "Turkey":[],
        "Menu Language":["Menu Language","Menüsprache","Menu lingua","Menu Idioma","Idioma del menú","Menu Langue","Menyspråk","Menyspråk","Menusprog","Valikkokieli"],
        "Primary Audio":["Primary Audio","Primäres Audio","Audio primario","Áudio Principal","Audio primario","Audio Primaire","Primær lyd","Primär ljud","Primær lyd","Ensisijainen ääni"],
        "Secondary Audio":["Secondary Audio","Sekundäres Audio","Audio secondario","Áudio Secundário","Audio secundario","Audio Secondaire","Sekundær lyd","Sekundär ljud","Sekundær lyd","Toissijainen ääni"],
        "Primary Subtitle":["Primary Subtitle","Primäre Untertitel","Sottotitolo primario","Legenda Principal","Subtítulo primario","Sous-titres Primaires","Primær tekst","Primär undertext","Primære undertekstsprog","Ensisijainen tekstitys"],
        "Secondary Subtitle":["Secondary Subtitle","Sekundäre Untertitel","Sottotitolo secondario","Legenda Secundária","Subtítulo secundario","Sous-titres Secondaires","Sekundær tekst","Sekundär undertext","Sekundære undertekstsprog","Toissijainen tekstitys"],
        "Digital Teletext":["Digital Teletext","Digitaler Videotext","Teletext digitale","Teletexto Digital","Teletexto digital","Télétexte Numérique","Digital tekst-TV","Digital text-TV","Digitalt tekst-tv","Digitaalinen teksti-TV"],
        "Decoding Page":["Decoding Page","Dekodierungsseite","Pagina di decodifica","A Descodificar Página","Página de decodificación","Décodage de Page","Dekoder side","Avkodningssida","Afkoder side","Dekoodaussivu"],
        "Preferred Audio Language":[],
        "Traditional Chinese":[],
        "German":["German","allemand","alemán","alemão","الألمانية","Немецкий","","ภาษาเยอรมัน","آلمانی","जर्मन","Nemischa","Німецька","גרמנית","Tiếng Đức","ဂ်ာမဏီ","Bahasa Jerman","Jerman"],
        "Cantonese":["Cantonese","Kantonesisch","Cantonese","Chinês tradicional","Cantonés","Cantonais","Kantonesisk","Kantonesiska","Kantonesisk","kantoninkiina","Kantonština","Kantončina","Kantoński","kantoni","Кантонски","Kanton Lehçesi","Kantoncha"],
        "Dutch":["Dutch","Holländisch","olandese","alemão","Holandés","Néerlandais","Nederlandsk","Holländska","Hollandsk","Hollantilainen","Holandština","Holandčina","Niderlandzki","holland","Холандски","Felemenkçe","Niderlandcha"],
        "Hindi":["Hindi","Hindi","hindi","Hindú","hindi","Hindi","Hindi","Hinduiska","Hindi","hindi","Hindština","Hindčina","Hindi","hindi","Хинди","Hintçe","Hindcha"],
        "Icelandic":["Icelandic","Isländisch","islandese","Islandês","Islandés","Islandais","Islandsk","Isländska","Islandsk","islanti","Islandština","islandčina","Islandzki","izlandi","Исландски","İzlandaca","Islandcha"],
        "Korean":["Korean","Koreanisch","coreano","Coreano","Coreano","Coréen","Koreansk","Koreanska","Koreansk","korea","Korejština","Kórejčina","Koreański","koreai","Корейски","Korece","Koreyscha"],
        "Mandarin":["Mandarin","Mandarin","mandarino","Mandarim","Mandarín","Mandarin","Mandarin","Mandarin","Mandarin","mandariinikiina","Mandarinština","Mandarinčina","Mandaryński","mandarin","Книжовен китайски език (Мандарин)","Mandarin","Mandarincha"],
        "Maori":["Maori","Maori","maori","Nativos da nova zelândia","Maorí","Maori","Maori","Maori","Maori","maori","Maorština","Maorčina","Maoryski","maori","Маорски","Maori Dili","Maoricha"],
        "Sami":["Sami","Samisch","sami","Nativos da lapónia","Sami","Same","Samisk","Samiska","Sami","saame","Sámština","Saamčina","Sami (lapoński)","számi","Сами","Sami Dili","Saamcha"],
        "English":["English","Englisch","inglese","inglês","inglés","anglais","Engelsk","engelska","Engelsk","Englanti","Slovenčina","Slovenčina","Angielski","angol","Български","İngilizce","Inglizcha "],
        "French":["French","Französisch","francese","francês","francés","français","Fransk","franska","Fransk","Ranska","Francouzština","Francúzština","Francuski","francia","Френски","Fransızca","Fransuzcha"],
        "Italian":["Italian","Italienisch","italiano","italiano","italiano","italien","Italiensk","italienska","Italiensk","Italia","Italština","Taliančina","Włoski","olasz","Италиански","İtalyanca","Italyancha"],
        "Spanish":["Spanish","Spanisch","spagnolo","espanhol","español","espagnol","Spansk","spanska","Spansk","Espanja","Španělština","Španielčina","Hiszpański","spanyol","Испански","İspanyolca","Ispancha"],
        "Netherlands":["Netherlands","Holländisch","olandese","neerlandês","Países Bajos","néerlandais","Nederland","holländska","Hollandsk","Hollanti","Nizozemsko","Holandsko","Niderlandzki","holland","Нидерландски","Hollanda","Gollandcha"],
        "Czech":["Czech","Tschechisch","ceco","checo","checo","tchèque","Tsjekkisk","tjeckiska","Tjekkisk","Tsekki","Čeština","Čeština","Czeski","cseh","Чешки","Çekçe","Chexcha"],
        "Greek":["Greek","Griechisch","greco","grego","griego","grec","Gresk","grekiska","Græsk","Kreikka","Řečtina","Gréčtina","Grecki","görög","Гръцки","Yunanca","Grekcha"],
        "Polish":["Polish","Polnisch","polacco","polaco","polaco","polonais","Polsk","polska","Polsk","Puola","Polština","Poľština","Polski","lengyel","Полски","Polonyaca","Polyakcha"],
        "Hungarian":["Hungarian","Ungarisch","ungherese","húngaro","húngaro","hongrois","Ungarsk","ungerska","Hungarian","Unkari","Maďarština","Maďarčina","Węgierski","magyar","Унгарски","Macarca","Vengercha"],
        "Finnish":["Finnish","Finnisch","finlandese","finlandês","finlandés","finnois","Finsk","finska","Finsk","Suomi","Finština","Fínčina","Fiński","finn","Финландски","Fince","Fincha "],
        "Slovenian":["Slovenian","Slowenisch","sloveno","esloveno","esloveno","slovène","Slovensk","slovenska","Slovensk","Sloveeni","Slovinština","Slovinčina","Słoweński","szlovén","Словенски","Slovence","Slovencha"],
        "Slovak":["Slovak","Slowakisch","slovacco","eslovaco","eslovaco","slovaque","Slovakisk","slovakiska","Slovak","Slovakki","Slovenčina","Slovenčina","Słowacki","szlovák","Словашки","Slovakça","Slovakcha"],
        "Turkish":["Turkish","Türkisch","turco","turco","turco","turc","Tyrkisk","turkiska","Tyrkisk","Turkki","Turečtina","Turečtina","Turecki","török","Турски","Türkçe","Turkcha "],
        "Swedish":["Swedish","Schwedisch","svedese","sueco","sueco","suédois","Svensk","svenska","Svensk","Ruotsi","Švédština","Švédčina","Szwedzki","svéd","Шведски","İsveççe","Shvedcha"],
        "Danish":["Danish","Dänisch","danese","dinamarquês","danés","danois","Dansk","danska","Dansk","Tanska","Dánština","Dánština","Duński","dán","Датски","Danca","Datcha"],
        "Portuguese":["Portuguese","Portugiesisch","portoghese","português","portugués","portugais","Portugisisk","portugisiska","Portugisisk","Portugali","Portugalština","Portugalčina","Portugalski","portugál","Португалски","Portekizce","Portugalcha"],
        "Russian":["Russian","Russisch","russo","russo","ruso","russe","Russisk","ryska","Russisk","Venäjä","Ruština","Ruština","Rosyjski","orosz","Руски","Rusça","Ruscha"],
        "Norwegian":["Norwegian","Norwegisch","norvegese","norueguês","noruego","norvégien","Norsk","norska","Norwegian","Norja","Norština","Nórčina","Norweski","norvég","Норвежки","Norveççe","Norvegcha"],
        "Chinese":["Chinese","Chinesisch","cinese","chinês","chino","chinois","Kinesisk","kinesiska","Kinesisk","Kiina","Čínština","Čínština","Chiński","kínai","Китайски","Çince","Xitoycha "],
        "Latvian":["Latvian","Lettisch","lettone","letão","letón","letton","Latvisk","lettiska","Lettisk","Latvia","Lotyština","Lotyština","Łotewski","lett","Латвийски","Letonca","Latishcha"],
        "Lithuanian":["Lithuanian","Litauisch","lituano","lituano","lithuanian","lituanien","Litauisk","litauiska","Litauisk","Liettua","Litevština","Litovčina","Litewski","litván","Литовски","Litvanyaca","Litvacha"],
        "Estonian":["Estonian","Estländisch","estone","estoniano","estonio","estonien","Estisk","estniska","Estisk","Viro","Estonština","Estónčina","Estoński","észt","Естонски","Estonyaca","Estoncha"],
        "Ukrainian":["Ukrainian","Ukrainisch","ucraino","ucraniano","ucraniano","ukrainien","Ukrainsk","ukrainska","Ukrainsk","Ukraina","Ukrajinština","Ukrajinčina","Ukraiński","ukrán","Украински","Ukraynaca","Ukraincha"],
        "Romanian":["Romanian","Rumänisch","rumeno","romeno","rumano","roumain","Rumensk","rumänska","Rumænsk","Romania","Rumunština","Rumunčina","Rumuński","román","Румънски","Romence","Rumincha"],
        "Byelorussian":["Byelorussian","Weißrussisch","bielorusso","bielorrusso","bielorruso","biélorusse","Hviterussisk","vitryska","Hviderussisk","Valko-venäjä","Běloruština","Bieloruština","Białoruski","belorusz","Белоруски","Beyaz Rusça","Beloruscha"],
        "Serbian":["Serbian","Serbisch","serbo","sérvio","serbio","serbe","Serbisk","serbiska","Serbisk","Serbokroatia","Srbština","Srbčina","Serbski","szerb","Сръбски","Sırpça","Serbcha"],
        "Croatian":["Croatian","Kroatisch","croato","croata","croata","croate","Kroatisk","kroatiska","Kroatisk","Kroatia","Chorvatština","Chorvátčina","Chorwacki","horvát","Хърватски","Hırvatça","Xorvatcha"],
        "Japanese":["Japanese","Japanisch","giapponese","japonês","japonés","japonais","Japansk","japanska","Japansk","Japani","Japonština","Japončina","Japoński","japán","Японски","Japonca","Yaponcha "],
        "Irish":["Irish","Irisch","irlandese","irlandês","irlandés","irlandais","irish","iriska","Irsk","Englanti. Iirie","Irština","Írčina","Irlandzki","ír","Ирландски","İrlandaca","Irlandcha"],
        "Welsh":["Welsh","Walisisch","gallese","galês","galés","gallois","Walisisk","kymriska","Welsh","Englanti, Wales","Velština","Waleština","Walijski","welszi","Уелски","Galce","Uelscha"],
        "Catalan":["Catalan","Katalanisch","catalano","catalão","catalán","catalan","Katalansk","katalanska","Katalansk","Katalaani","Katalánština","Katalánčina","Kataloński","katalán","Каталонски","Katalanca","Kataloncha"],
        "Gaelic":["Gaelic","Gälisch","gaelico","gaélico","gaélico","gaëlique","gaelic","gäliska","Gælisk","Keltti","Velština","Galčina","Gaelicki","gael","Галски","Galik","Gaelcha"],
        "Basque":["Basque","Baskisch","basco","basco","vasco","basque","basque","baskiska","Basque","Baski","Baskičtina","Baskičtina","Baskijski","baszk","Баскски","Baskça","Baskcha"],
        "Galician":["Galician","Galicisch","galiziano","galego","gallego","galicien","galician","galiciska","Galicisk","Galician","Galicijština","Galícijčina","Galicyjski","galíciai","Галисийски","Galiçyaca","Galisiycha"],
        "Scots":["Scots","Schottisch","scozzese","escocês","escocés","écossais","scots","lågskotska","Skottisk","Englanti","Skotština","Škótčina","Szkocki","skót","Шотландски","İskoçça","Shotlancha"],
        "Breton":["Breton","Bretonisch","bretone","bretão","breton","breton","breton","bretonska","Breton","Ranska","Bretonština","Bretónčina","Bretoński","breton","Бретонски","Bretonca","Bretoncha"],
        "Corsican":["Corsican","Korsisch","corso","córsego","corso","corse","corsican","korsikanska","Korsikansk","Ranska","Korsičtina","Korzičtina","Korsykański","korzikai","Корсикански","Korsikaca","Korsikacha"],
        "Alemannic":["Alemannic","Alemannisch","alemanno","alemânico","alemánico","alémanique","alemannic","alemanniska","Alemannisk","Saksa","Alemanština","Alemančina","Alemański","alemann","Алемански","Alemanik","Alemancha"],
        "Bulgarian":["Bulgarian","Bulgarisch","bulgaro","búlgaro","búlgaro","bulgare","Bulgarsk","bulgariska","Bulgarsk","Bulgaria","Bulharština","Bulharčina","Bułgarski","bolgár","Български","Bulgarca","Bolgarcha"],
        "Arabic":["Arabic","Arabisch","arabo","árabe","árabe","arabe","Arabisk","arabiska","Arabisk","Arabia","Arabština","Arabčina","Arabski","arab","Арабски","Arapça","Arabcha"],
        "Walloon":["Walloon","Wallonisch","vallone","valão","valonia","wallon","walloon","vallonska","Vallonien","Englanti","Valonština","Valónčina","Waloński","vallon","Валонски","Walloon","Valloncha"],
        "Luxembourgish":["Luxembourgish","Luxemburgisch","lussemburghese","luxemburguês","luxemburgués","luxembourgeois","luxembourgish","luxemburgiska","Luxembourgsk","Luxemburg","Lucemburština","Luxemburčina","Luksemburski","luxemburgi","Люксембургски","Lüksemburgça","Lyuksemburgcha"]


    },
    rewrite:function(pageData){
        //todo
        var element={};
        var i=_getIndex(pageData.operateData.currentpagelist,pageData.operateData.curpage);
        if(i==1&&hiWebOsFrame.getCurrentArea()=="SA")
        {
            pageData.setting_sys_lang2_title.Data="Preferred Audio Language"
        }
        else
        {
        pageData.setting_sys_lang2_title.Data=pageData.operateData.titlelist[i];
        }
        pageData.setting_sys_lang2_ul1.Data=[];
        $.each( pageData.operateData.langlist, function (k, v) {
            element.setting_sys_lang2_text1={};
            element.setting_sys_lang2_text1.Data=v;
            element.setting_sys_lang2_img1={};
            element.setting_sys_lang2_img1.Data="img/unselectedBall.png";
            if(k==pageData.operateData.curselectindex)
            {
                element.setting_sys_lang2_img1.Data="img/selectedBall.png";
            }
            pageData.setting_sys_lang2_ul1.Data.push(_cloneObj(element));
        })
        pageData.setting_sys_lang2_ul1.SelectedIndex=pageData.operateData.curselectindex;
        if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
            $(".setting_sys_mt_ul1").css("float","left")
            $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
            $(".setting_sys_list1_srcobar_container").css("float","right");
            $(".setting_sys_list1_srcobar_container").css("margin","25px 15px 0 0");

        }
        else {
            $(".setting_sys_mt_ul1").css("float","right")
            $(".setting_sys_mt_ul1").css("margin","0 65px 0 0");
            $(".setting_sys_list1_srcobar_container").css("float","left");
            $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px");


        }
    }
};
function SettingSysLang2EnHandler()
{
    this.page.operateData.curselectindex=this.SelectedIndex;
   // hiWebOsFrame.lockAllKeys("setting");
    try
    {
    if(this.page.operateData.curpage=="osd")
    {
        // PageDataSettingSysLang.operateData.curosdlang=PageDataSettingSysLang.operateData.osdlanglist[this.page.operateData.curselectindex];
        debugPrint("SettingLang2Page.js, SettingSysLang2EnHandler, menu language change launched.");
        if(tv) {
            try {
                if(Hisense.File.exists("iqqi.conf", 1)) {
                    SettingSysLang2EnHandler.property = JSON.parse(Hisense.File.read("iqqi.conf", 1));
                    if(!!SettingSysLang2EnHandler.property["system_language"]) {
                        delete SettingSysLang2EnHandler.property["system_language"];
                        if(0 == Hisense.File.write("iqqi.conf", JSON.stringify(SettingSysLang2EnHandler.property), 1) == false) {
                            debugPrint("SettingLang2Page.js, SettingSysLang2EnHandler, show error writing iqqi config file: " + ex, DebugLevel.ERROR);
                        }
                    }
                }
            }
            catch(ex) {
                debugPrint("SettingLang2Page.js, SettingSysLang2EnHandler, show error reading iqqi config file: " + ex, DebugLevel.ERROR);
            }
        }
        setlanguage("osd", this.SelectedIndex);
    }
    else if(this.page.operateData.curpage=="firaudio")
    {
        //  PageDataSettingSysLang.operateData.curaudiofir=PageDataSettingSysLang.operateData.adiofirlanglist[this.page.operateData.curselectindex];
        setlanguage("firaudio", this.SelectedIndex);
    }
    else if(this.page.operateData.curpage=="secaudio")
    {
        //  PageDataSettingSysLang.operateData.curaudiosec=PageDataSettingSysLang.operateData.adioseclanglist[this.page.operateData.curselectindex];
        setlanguage("secaudio", this.SelectedIndex);
    }
    else if(this.page.operateData.curpage=="firsub")
    {
        //  PageDataSettingSysLang.operateData.cursubfir=PageDataSettingSysLang.operateData.firsublist[this.page.operateData.curselectindex];
        setlanguage("firsub", this.SelectedIndex);
    }
    else if(this.page.operateData.curpage=="secsub")
    {
        //   PageDataSettingSysLang.operateData.cursubsec=PageDataSettingSysLang.operateData.secsublist[this.page.operateData.curselectindex];
        setlanguage("secsub", this.SelectedIndex);
    }
    else if(this.page.operateData.curpage=="digtext")
    {
        //    PageDataSettingSysLang.operateData.curdig=PageDataSettingSysLang.operateData.digteletextlist[this.page.operateData.curselectindex];
        setlanguage("digtext", this.SelectedIndex);
    }
    else if(this.page.operateData.curpage=="decodepage")
    {
        //  PageDataSettingSysLang.operateData.curdecode=PageDataSettingSysLang.operateData.decodepagelist[this.page.operateData.curselectindex];
        setlanguage("decodepage", this.SelectedIndex);
    }
    this.page.rewriteDataOnly();
    setTimeout(closelang2page,500);
    SetRecentUse("Language",4,SYSTEM_LANG);
    }catch (e)
    {
        debugE(e.message);
       // hiWebOsFrame.unLockAllKeys("setting");
    }
}

function closelang2page()
{
    if (hiWebOsFrame.isCurrentModule("setting"))
    {
        hiWebOsFrame.settingslang2.close();
        debugPrint("open !!!!!!!!!!!!!!!!!!!");
        hiWebOsFrame.settingslang1.rewriteDataOnly();
        hiWebOsFrame.settingslang1.open();
        hiWebOsFrame.settingslang1.hiFocus();

    }
    else
    {
        hiWebOsFrame.settingslang2.close();
    }
   // hiWebOsFrame.unLockAllKeys("setting");

}
function SettingSysLang2EscHandler()
{
    this.page.close();
    // this.page.rewrite();
   // hiWebOsFrame.settingsFirst.open();
    hiWebOsFrame.settingslang1.rewriteDataOnly();
    hiWebOsFrame.settingslang1.open();
    hiWebOsFrame.settingslang1.hiFocus();

}
function SettingLang2OpenHandler()
{
    Updatalang2ScrollBar(this.data);
    if(PageDataSettingSysLang2.setting_sys_lang2_ul1.Data.length>5)
    {
//        var index=this.page.getCaE("setting_sys_lang2_ul1").BeginIdx;
//        debugPrint("index"+index);
//        $("#setting_sys_lang2_srcollbar").css("top",parseInt(425/PageDataSettingSysLang2.setting_sys_lang2_ul1.Data.length)*index);
        var index2=0;
        var index=this.page.getCaE("setting_sys_lang2_ul1").SelectedIndex;
        debugPrint("index"+index);
        if(index>4)
        {
            index2=index-4;
        }
        $("#setting_sys_lang2_srcollbar").css("top",parseInt(425/PageDataSettingSysLang2.setting_sys_lang2_ul1.Data.length)*index2);
        if(index<4)
        {
            $("#setting_sys_lang2_ul1").css("top","0px");
            PageDataSettingSysLang2.operateData.beginindex=0;
        }
        else
        {
            $("#setting_sys_lang2_ul1").css("top","-"+95*(index-4)+"px");
            PageDataSettingSysLang2.operateData.beginindex=index-4;
        }
    }
    else
    {   var temp=610-(5-PageDataSettingSysLang2.setting_sys_lang2_ul1.Data.length)*95
        $("#setting_sys_lang2_list").css("height",temp+'px');
        var height=parseInt((1080-temp)/2);
        $("#setting_sys_lang2_list").css("top",height+'px');
        PageDataSettingSysLang2.operateData.beginindex=0;
    }
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR) {
        $(".setting_sys_mt_ul1").css("float","left")
        $(".setting_sys_mt_ul1").css("margin","0 0 0 65px");
        $(".setting_sys_list1_srcobar_container").css("float","right");
        $(".setting_sys_list1_srcobar_container").css("margin","25px 15px 0 0");

    }
    else {
        $(".setting_sys_mt_ul1").css("float","right")
        $(".setting_sys_mt_ul1").css("margin","0 65px 0 0");
        $(".setting_sys_list1_srcobar_container").css("float","left");
        $(".setting_sys_list1_srcobar_container").css("margin","25px 0 0 15px");


    }

}
function Updatalang2ScrollBar(pageData)
{
    var i=pageData.setting_sys_lang2_ul1.Data.length;
    if(i>5)
    {
        var temp=parseInt(425/i*5);
        $("#setting_sys_lang2_srcollbar").css("height",temp);
        $("#setting_sys_lang2_srcollbar").css("visibility","visible");
    }
    else
    {
        $("#setting_sys_lang2_srcollbar").css("visibility","hidden");
    }
    pageData.operateData.step=425/i;

}
function SettingLang2PageOnDestroy()
{
    hiWebOsFrame.settingslang2=null;
}
function setlanguage(langtype, value)
{
    // debugPrint("setlanguage"+langtype+value);
    if(langtype=="osd")
    {
        var langData = PageDataSettingSysLang.operateData;
        //var langMapList = getOSDLanguageMapList();
        PageDataSettingSysLang.operateData.curosdlang=PageDataSettingSysLang.operateData.osdlanglist[value].name;
        if(!!langData.isHimediaOn||!!langData.isNetflixOn)
        {
           model.language.setOsd(PageDataSettingSysLang.operateData.osdlanglist[value].number+1000);
        }
        else
        {
            model.language.setOsd(PageDataSettingSysLang.operateData.osdlanglist[value].number);
        }

        if(PageDataSettingSysLang.operateData.osdlanglist[value].number == 4 ||
            PageDataSettingSysLang.operateData.osdlanglist[value].number == 14 ||
            PageDataSettingSysLang.operateData.osdlanglist[value].number == 28){
            tryToCloseLauncher();
        }

        try{
            langData.curaudiofir=langData.adiofirlanglist[_getIndexByNum(langData.adiofirlanglist, model.language.getAudioFavoured())].name;
            langData.curaudiosec=langData.adioseclanglist[_getIndexByNum(langData.adioseclanglist, model.language.getAudioAlternative())].name;
            langData.cursubfir=langData.firsublist[_getIndexByNum(langData.firsublist, model.language.getSubtitleFavoured())].name;
            langData.cursubsec=langData.secsublist[_getIndexByNum(langData.secsublist, model.language.getSubtitleAlternative())].name;
            if (hiWebOsFrame.getCurrentArea() == "EU") {
                //EM市场没有digteletextlist，会报错
                langData.curdig=langData.digteletextlist[_getIndexByNum(langData.digteletextlist, model.language.getTeletext())].name;
            }
            langData.curdecode=langData.decodepagelist[_getIndexByNum(langData.decodepagelist, model.language.getDecodepage())].name;
        }
        catch (ex) {
            debugPrint(ex, DebugLevel.ERROR)
        }
        Updatesyslangid(value);
        hiWebOsFrame.setLanguage(PageDataSettingSysLang.operateData.osdlanglist[value].code);
        debugPrint("set the lang"+PageDataSettingSysLang.operateData.osdlanglist[value].code,DebugLevel.INFO);
        hiWebOsFrame.settingslang2.rewriteDataOnly();
        hiWebOsFrame.settingslang1.rewriteDataOnly();
        hiWebOsFrame.settingsFirst.rewriteDataOnly();
        if(hiWebOsFrame.getCurrentArea()=="SA")
        {
            model.system.setReturnlocalappFlag(FlagShareInBrowser.SL2_TVAPI_I32_SYSTEM_RETURNLOCALAPP_FLAG_LANGUAGE_OSD);
        }
        debugPrint("set the lang"+langtype+value);
    }
    else if(langtype=="firaudio")
    {  // debugPrint("set the lang"+langtype+value);
        PageDataSettingSysLang.operateData.curaudiofir=PageDataSettingSysLang.operateData.adiofirlanglist[value].name;
        model.language.setAudioFavoured(PageDataSettingSysLang.operateData.adiofirlanglist[value].number);
        debugPrint("set the lang"+langtype+value);
    }
    else if(langtype=="secaudio")
    {
        PageDataSettingSysLang.operateData.curaudiosec=PageDataSettingSysLang.operateData.adioseclanglist[value].name;
         model.language.setAudioAlternative(PageDataSettingSysLang.operateData.adioseclanglist[value].number);
        debugPrint("set the lang"+langtype+value);
    }
    else if(langtype=="firsub")
    {
        PageDataSettingSysLang.operateData.cursubfir=PageDataSettingSysLang.operateData.firsublist[value].name;
        model.language.setSubtitleFavoured(PageDataSettingSysLang.operateData.firsublist[value].number);
        debugPrint("set the lang"+langtype+value);
    }
    else if(langtype=="secsub")
    {
        PageDataSettingSysLang.operateData.cursubsec=PageDataSettingSysLang.operateData.secsublist[value].name;
       model.language.setSubtitleAlternative(PageDataSettingSysLang.operateData.secsublist[value].number);
        debugPrint("set the lang"+langtype+value);
    }
    else if(langtype=="digtext")
    {
        PageDataSettingSysLang.operateData.curdig=PageDataSettingSysLang.operateData.digteletextlist[value].name;
        model.language.setTeletext(PageDataSettingSysLang.operateData.digteletextlist[value].number);
    }
    else if(langtype=="decodepage")
    {
        PageDataSettingSysLang.operateData.curdecode=PageDataSettingSysLang.operateData.decodepagelist[value].name;
        model.language.setDecodepage(PageDataSettingSysLang.operateData.decodepagelist[value].number);
        debugPrint("set the lang"+langtype+value);
    }
}
//var onOsdlangChaged=function(value){
//
////    debugPrint("osd value changed"+
//    var i=_getIndexByNum(PageDataSettingSysLang.operateData.osdlanglist,value);
//    PageDataSettingSysLang2.operateData.curselectindex=i;
//    hiWebOsFrame.settingslang2.rewriteDataOnly();
//}
//var onSubfirlangChaged=function(value){
//
//    //  debugPrint("sub fir value changed"+value);
//    PageDataSettingSysLang2.operateData.curselectindex=value;
//    hiWebOsFrame.settingslang2.rewriteDataOnly();
//}
//var onSubseclanChaged=function(value){
//
//    //  debugPrint("sub sec value changed"+value);
//    PageDataSettingSysLang2.operateData.curselectindex=value;
//    hiWebOsFrame.settingslang2.rewriteDataOnly();
//}
//var onAudiofirChaged=function(value){
//
//    //  debugPrint("audio fir value changed"+value);
//    PageDataSettingSysLang2.operateData.curselectindex=value;
//    hiWebOsFrame.settingslang2.rewriteDataOnly();
//}
//var onAudiosecChaged=function(value){
//
//    //  debugPrint("auio sec value changed"+value);
//    PageDataSettingSysLang2.operateData.curselectindex=value;
//    hiWebOsFrame.settingslang2.rewriteDataOnly();
//}
//var onDigTeletextChaged=function(value){
//
//    //    debugPrint(" digital teletextchanged"+value);
//    PageDataSettingSysLang2.operateData.curselectindex=value;
//    hiWebOsFrame.settingslang2.rewriteDataOnly();
//}
function SettingSysLang2UpHandler()
{
//    var temp=PageDataSettingSysLang2.setting_sys_lang2_ul1.Data.length;
//    if(PageDataSettingSysLang2.setting_sys_lang2_ul1.Data.length>5 &&this.SelectedIndex < (temp-5))
//    {
//        var temp=this.SelectedIndex*PageDataSettingSysLang2.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_lang2_srcollbar").css("top",temp);
//
//    }

    if(PageDataSettingSysLang2.operateData.beginindex>this.SelectedIndex)
    {
        PageDataSettingSysLang2.operateData.beginindex=PageDataSettingSysLang2.operateData.beginindex-1;
        debugPrint("beginindex"+PageDataSettingSysLang2.operateData.beginindex);
        var temp=parseInt(PageDataSettingSysLang2.operateData.beginindex*PageDataSettingSysLang2.operateData.step);
        $("#setting_sys_lang2_srcollbar").css("top",temp);
        $("#setting_sys_lang2_ul1").css("top","-"+95*(PageDataSettingSysLang2.operateData.beginindex)+"px");

    }
}
function SettingSysLang2DownHandler()
{
//    if(this.SelectedIndex < PageDataSettingSysLang2.setting_sys_lang2_ul1.Data.length&&this.SelectedIndex>4)
//    {
//
//        var temp=(this.SelectedIndex-4)*PageDataSettingSysLang2.operateData.step;
//        //  var  temp= $("#setting_sys_list1_srcollbar").offsetTop;
//        // temp+=temp+PageDataSettingSysList1.operateData.step;
//        $("#setting_sys_lang2_srcollbar").css("top",temp);
//
//    }
    if((PageDataSettingSysLang2.operateData.beginindex+4)<this.SelectedIndex)
    {
        var temp=parseInt((this.SelectedIndex-4)*PageDataSettingSysLang2.operateData.step);
        $("#setting_sys_lang2_srcollbar").css("top",temp);
        $("#setting_sys_lang2_ul1").css("top","-"+95*(this.SelectedIndex-4)+"px");
        PageDataSettingSysLang2.operateData.beginindex=this.SelectedIndex-4;
        debugPrint("beginindex"+PageDataSettingSysLang2.operateData.beginindex);
    }
}