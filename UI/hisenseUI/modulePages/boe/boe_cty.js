/**
 * Created by xuehongfeng on 14-11-10.
 */

function getboeCtyPageData(opt){
    opt.CaE = [

        {
            "id": "boeCtyGridUl",//在页面中的按钮或者组件容器Id
            "description": "用于显示语言列表",
            "CaEType": "GridUl",
            "disable": false,
            "classes": {
                "normal": "boeGridUlLi_2_Normal", "focus": "boeGridUlLi_2_Focus","dataSelected":"boeGridUlLi_2_Normal","disable":"boeGridUlLi_2_Disable"
            },
            "handler": {
                "aftEnterHandler":"boeSetUseCountry","befUpHandler": "ctyGridulUpdateUpScroolbar","befDownHandler": "ctyGridulBefDownHandler", "aftDownHandler": "ctyGridulUpdateScroolbar","befLeftHandler": "boeCtyToPreviousPageAdjust","befRightHandler": "boeCtyToNextPageAdjust"
            },
            "oriCaE": [//todo 需修改为oriCaE
                {
                    "id": "ctySelectImg",
                    "description": "选择图片",
                    "CaEType": "SwitchDiv",
                    "imageList":{
                        "openImg":"img/circle_setted.png",
                        "closeImg":""
                    },
                    "classes":{
                        "normal":"langSelectImg"
                    }
                },
                {
                    "id": "ctyName",
                    "description": "城市名称",
                    "CaEType": "span"
                },
                {
                    id: 'ctyName_marquee',
                    CaEType: 'span',
                    enableHtml: true
                }
            ],
            "GridUlConfig": {
                "GridUlDataItem": ["ctyName","ctyName_marquee","ctySelectImg" ],
                "LineNum":4,
                //"PageSize":16,
                "FlipType":'VER',
                "ArrowFlag":true
            }
        },


        {
            "id":"ctyPageLeftArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeLeftArrowBtnNormal"
            }
        },
        {
            "id":"ctyPageRightArrowBtn",
            "description":"选择进入下一步按钮",
            "CaEType":"div",
            "classes":{
                "normal": "boeRightArrowBtnNormal"
            }
        }
    ];
    boeCtyPageInit();
    return boeCtyPageData;
}
var boeCtyPageData = {
    "boeCtyGridUl": {
        "Data":[],
        "SelectedIndex":0,
        "DataSelectedIndex":0
    },
    "operateData":{
        "currCountryIdx":0,
        "supportCtyMapList":[],
        "countrycode":[],
        "timezonelistcode":[0,1,2,3,3.5,4,4.5,5,5.5,5.75,6,6.5,7,8,9,9.5,10,11,
            12,"12.75",13,-12,-11,-10,-9,-8,-7,-6,-5,-4.5,-4,-3.5,-3,-2,-1],
        "ctyToDefZoneMap":[3,12,12,11,13,0,1,2,0,0,0,1,1,0,1,1,2,0,3,3,5,3,3,3,0,2,3,0],
        "supportzonelist":[]
    },
    "langData":{
        "Location":["Location","1",""],
        "Others":[],
        "Czech Republic":[],
        "Cote d'Ivoire":[],
        "UK":["UK","Vereinigtes Königreich","Regno Unito","Reino Unido","Reino Unido","RU","Storbritannia","Storbritannien","England","Iso-Britannia","Velká Británie","Veľká Británia","Wielka Brytania","Egyesült Királyság","Обединено кралство","Birleşik Krallık","BQ"],
        "Germany":["Germany","Deutschland","Germania","Alemanha","Alemania","Allemagne","Tyskland","Tyskland","Tyskland","Saksa","Němčina","Nemecko","Niemcy","Németország","Германия","Almanya","Germaniya"],
        "Italy":["Italy","Italien","Italia","Itália","Italia","Italie","Italia","Italien","Italien","Italia","Itálie","Taliansko","Włochy","Olaszország","Италия","İtalya","Italiya"],
        "Spain":["Spain","Spanien","Spagna","Espanha","España","Espagne","Spania","Spanien","Spanien","Espanja","Španělsko","Španielsko","Hiszpania","Spanyolország","Испания","İspanya","Ispaniya"],
        "Portugal":["Portugal","Portugal","Portogallo","Portugal","Portugal","Portugal","Portugal","Portugal","Portugal","Portugali","Portugalsko","Portugalsko","Portugalia","Portugália","Португалия","Portekiz","Portugaliya "],
        "Switzerland":["Switzerland","Schweiz","Svizzera","Suíça","Suiza","Suisse","Sveits","Schweiz","Schweiz","Sveitsi","Švýcarsko","Švajčiarsko","Szwajcaria","Svájc","Швейцария","İsviçre","Sveytsariya"],
        "Austria":["Austria","Österreich","Austria","Áustria","Austria","Autriche","Østerrike","Österrike","Østrig","Itävalta","Rakousko","Rakúsko","Austria","Ausztria","Австрия","Avusturya","Avstriya"],
        "Norway":["Norway","Norwegen","Norvegia","Noruega","Noruega","Norvège","Norge","Norge","Norge","Norja","Norsko","Nórsko","Norwegia","Norvégia","Норвегия","Norveç","Norvegiya"],
        "Sweden":["Sweden","Schweden","Svezia","Suécia","Suecia","Suède","Sverige","Sverige","Sverige","Ruotsi","Švédsko","Švédsko","Szwecja","Svédország","Швеция","İsveç","Svetsiya"],
        "Denmark":["Denmark","Dänemark","Danimarca","Dinamarca","Dinamarca","Danemark","Danmark","Danmark","Danmark","Tanska","Dánsko","Dánsko","Dania","Dánia","Дания","Danimarka","Daniya"],
        "Finland":["Finland","Finnland","Finlandia","Finlândia","Finlandia","Finlande","Finland","Finland","Finland","Suomi","Finsko","Fínsko","Finlandia","Finnország","Финландия","Finlandiya","Finlandiya"],
        "France":["France","Frankreich","Francia","França","Francia","France","Frankrike","Frankrike","Frankrig","Ranska","Francie","Francúzsko","Francja","Franciaország","Франция","Fransa","Fransiya"],
        "Turkey":["Turkey","Türkei","Turchia","Turquia","Turquía","Turquie","Tyrkia","Turkiet","Tyrkiet","Turkki","Turečtina","Turecko","Turcja","Törökország","Турция","Türkiye","Turkiya"],
        "Slovakia":["Slovakia","Slowakei","Slovacchia ","Eslováquia ","Eslovaquia","Slovaquie","Slovakia","Slovakien","Slovakiet","Slovakki","Slovensko","Slovensko","Słowacja","Szlovákia","Словакия","Slovakya","Slovakiya"],
        "Poland":["Poland","Polen","Polonia","Polónia","Polonia","Pologne","Polen","Polen","Polen","Puola","Polština","Poľština","Polska","Lengyelország","Полша","Polonya","Polsha"],
        "Hungary":["Hungary","Ungarn","Ungheria","Hungria ","Hungría","Hongrie","Ungarn","Ungern","Ungarn","Unkari","Maďarsko","Maďarsko","Węgry","Magyarország","Унгария","Macaristan","Vengriya"],
        "Bulgaria":["Bulgaria","Bulgarien","Bulgaria","Bulgária ","Bulgaria","Bulgarie","Bulgaria","Bulgarien","Bulgarien","Bulgaria","Bulharsko","Bulharsko","Bułgaria","Bulgária","България","Bulgaristan","Bolgariya"],
        "Egypt":["Egypt","Ägypten","Egitto","Egipto","Egipto","Egypte","Egypt","Egypten","Egypten","Egypti","Egypt","Egypt","Egipt","Egyiptom","Египет","Mısır","Misr"],
        "Algeria":["Algeria","Algerien","Algeria","Argélia","Argelia","Algérie","Algerie","Algeriet","Algeriet","Algeria","Alžírsko","Alžírsko","Algieria","Algéria","Алжир","Cezayir","Jazoir"],
        "Iran":["Iran","Iran","Iran","Irão","Irán","Iran","Iran","Iran","Iran","Iran","Írán","Irán","Iran","Irán","Иран","İran","Eron"],
        "Iraq":["Iraq","Irak","Iraq","Iraque","Irak","Iraq","Irak","Irak","Irak","Irak","Irák","Irak","Irak","Irak","Ирак","Irak","Iroq"],
        "Saudi Arabia":["Saudi Arabia","Saudi Arabien","Arabia Saudita","Arábia Saudita","Arabia Saudita","Arabie Saoudite","Saudi-Arabia","Saudiarabien","Saudi-Arabien","Saudi Arabia","Saúdská Arábie","Saudská Arábia","Arabia Saudyjska","Szaúd- Arábia","Саудитска Арабия","Suudi Arabistan","Saudiya Arabistoni"],
        "UAE":["UAE","VAE","EAU","Emiratos Arabés Unidos ","Emiratos Árabes Unidos","Émirats arabes unis","Forente arabiske emirater","Arabemiraterna","UAE","UEA","Spojené arabské emiráty","Spojené arabské emiráty","Zjednoczone Emiraty Arabskie","Egyesült Arab Emirátusok","ОАЕ","BAE","BAA"],
        "Kuwait":["Kuwait","Kuwait","Kuwait","Koweit","Kuwait","Kuwait","Kuwait","Kuwait","Kuwait","Kuwait","Kuvajt","Kuvajt","Kuwejt","Kuwait","Кувейт","Kuveyt","Quvayt"],
        "Yemen":["Yemen","Jemen","Yemen","Iémen","Yemen","Yemen","Jemen","Jemen","Yemen","Yemen","Jemen","Jemen","Jemen","Jemen","Йемен","Yemen","Yaman"],
        "Oman":["Oman","Oman","Oman","Omã","Omán","Oman","Oman","Oman","Oman","Oman","Omán","Omán","Oman","Omán","Оман","Umman","Ummon"],
        "Qatar":["Qatar","Katar","Qatar","Qatar","Qatar","Qatar","Qatar","Qatar","Qatar","Qatar","Katar","Katar","Katar","Qatar","Катар","Katar","Qatar"],
        "Jordan":["Jordan","Jordanien","Giordania","Jordânia","Jordania","Jordanie","Jordan","Jordanien","Jordan","Jordan","Jordánsko","Jordánsko","Jordania","Jordánia","Йордания","Ürdün","Iordaniya"],
        "Dubai":["Dubai","Dubai","Dubai","Dubai","Dubái","Dubai","Dubai","Dubai","Dubai","Dubai","Dubaj","Dubaj","Dubaj","Dubai","Дубай","Dubai","Dubay"],
        "Russia":["Russia","Russland","Russia","Rússia","Rusia","Russie","Russland","Ryssland","Rusland","Venäjä","Rusko","Rusko","Rosja","Oroszország","Русия","Rusya","Rossiya"],
        "Uzbekistan":["Uzbekistan","Usbekistan","Uzbekistan","Urzebequistão","Uzbequistán","Ouzbékistan","Usbekistan","Uzbekistan","Usbekistan","Uzbekistan","Uzbekistán","Uzbekistan","Uzbekistan","Üzbegisztán","Узбекистан","Özbekistan","O'zbekiston"],
        "Kirghizstan":["Kirghizstan","Kirgisien","Kirghizstan","Quirguistão","Kirguistán","Kirghizstan","Kirghizstan","Kirghizstan","Kirgisistan","Kirgisia","Kyrgyzstán","Kirgizsko","Kirgistan","Kirgizisztán","Киргизстан","Kırgızistan","Qirg'iziston"],
        "Turkmenistan":["Turkmenistan","Turkmenistan","Turkmenistan","Turquemenistão","Turkmenistán","Turkménistan","Turkmenistan","Turkmenistan","Turkmenistan","Turkmenistan","Turkmenistán","Turkménsko","Turkmenistan","Türkmenisztán","Туркменистан","Türkmenistan","Turkmaniston"],
        "Kazakhstan":[],
        "Ukraine":["Ukraine","Ukraine","Ucraina","Ucrânia ","Ucrania","Ukraine","Ukraina","Ukraina","Ukraine","Ukraina","Ukrajina","Ukrajina","Ukraina","Ukrajna","Украйна","Ukrayna","Ukraina"],
        "Azerbaijan":["Azerbaijan","Aserbaidschan","Azerbaijan","Azerbaijão","Azerbaiyán","Azerbaïdjan","Aserbajdsjan","Azerbajdzjan","Aserbajdsjan","Azerbaidžan","Ázerbájdžán","Azerbajdžan","Azerbejdżan","Azerbajdzsán","Азербайджан","Azerbaycan","Ozorbayjon"],
        "Georgia":["Georgia","Georgien","Georgia","Geórgia","Georgia","Géorgie","Georgia","Georgia","Georgien","Georgia","Gruzie","Gruzínsko","Gruzja","Grúzia","Грузия","Gürcistan","Gruziya"],
        "Armenia":["Armenia","Armenien","Armenia","Arménia","Armenia","Arménie","Armenia","Armenia","Armenien","Armenia","Arménie","Arménsko","Armenia","Örményország","Армения","Ermenistan","Armaniston"],
        "Israel":["Israel","Israel","Israele","Israel","Israel","Israël","Israel","Israel ","Israel","Israel","Izrael","Izrael","Izrael","Izrael","Израел","İsrail","Isroil"],
        "India":["India","Indien","India","Índia","India","Inde","India","Indien","Indien","Intia","Indie","India","Indie","India","Индия","Hindistan","Hindiston"],
        "Indonesia":["Indonesia","Indonesien","Indonesia","Indonésia","Indonesia","Indonésie","Indonesia","Indonesien","Indonesien","Indonesia","Indonésie","Indonézia","Indonezja","Indonézia","Индонезия","Endonezya","Indoneziya"],
        "Thailand":["Thailand","Thailand","Tailandia","Tailândia","Tailandia","Thaïlande","Thailand","Thailand","Thailand","Thaimaa","Thajsko","Thajsko","Tajlandia","Thaiföld","Тайланд","Tayland","Tailand"],
        "Vietnam":["Vietnam","Vietnam","Vietnam","Vietname","Vietnam","Viêt-Nam","Vietnam","Vietnam","Vietnam","Vietnam","Vietnam","Vietnam","Wietnam","Vietnam","Виетнам","Vietnam","Viyetnam"],
        "Myanmar":["Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Myanmar","Mjanmarsko","Birma","Myanmar","Мианмар","Myanmar","Myanma"],
        "Malaysia":["Malaysia","Malaysia","Malesia","Malásia","Malasia","Malaisie","Malaysia","Malaysia","Malaysia","Malesia","Malajsie","Malajzia","Malezja","Malajzia","Малайзия","Malezya","Malayziya"],
        "Australia":["Australia","Australien","Australia","Austrália","Australia","Australie","Australia","Australien","Australien","Australia","Austrálie","Austrália","Australia","Ausztrália","Австралия","Avustralya","Avstraliya"],
        "Taiwan":["Taiwan","Taiwan","Taiwan","Taiwan","Taiwán","Taiwan","Taiwan","Taiwan","Taiwan","Taiwan","Taiwan","Taiwan","Tajwan","Taiwan","Тайван","Tayvan","Tayvan"],
        "Sri Lanka":["Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Sri Lanka","Srí Lanka","Srí Lanka","Sri Lanka","Sri Lanka","Шри Ланка","Sri Lanka","Shri Lanka"],
        "South Africa":["South Africa","Südafrika","Sudafrica","áfrica do Sul","Sudáfrica","Afrique du sud","Sør-Afrika","Sydafrika","Sydafrika","South Africa","Jižní Afrika","Južná Afrika","Republika Południowej Afryki","Dél-Afrika","ЮАР","Güney Afrika","Janubiy Afrika"],
        "Morocco":["Morocco","Marokko","Marocco","Marrocos","Marruecos","Maroc","Marokko","Marocko","Marokko","Marokko","Maroko","Maroko","Maroko","Marokkó","Мароко","Fas","Marokash"],
        "Nigeria":["Nigeria","Nigeria","Nigeria","Nigéria","Nigeria","Nigéria","Nigeria","Nigeria","Nigeria","Nigeria","Nigérie","Nigéria","Nigeria","Nigéria","Нигерия","Nijerya","Nigeriya"],
        "Libya":["Libya","Libyen","Libia","Líbia","Libia","Libye","Libya","Libyen","Libyen","Libya","Libye","Líbia","Libia","Líbia","Либия","Libya","Liviya"],
        "Ghana":["Ghana","Ghana","Gana","Gana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghana","Ghána","Гана","Gana","Gana"],
        "Sierra Leone":["Sierra Leone","Sierra Leone","Sierra Leone","Serra Leõa","Sierra Leona","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Sierra Leone","Сиера Леоне","Sierra Leone","S'erra-Leone"],
        "Côte d'Ivoire":["Côte d'Ivoire","Elfenbeinküste","Costa d'Avorio","Costa do Marfim","Costa de Marfil","Côte d'Ivoire","Elfenbenskysten","Elfenbenskusten","Elfenbenskysten","Norsunluurannikko","Pobřeží slonoviny","Pobrežie Slonoviny","Wybrzeże Kości Słoniowej","Elefántcsontpart","Кот д'Ивоар","Fil Dişi Sahilleri","Kot-d'Ivuar "],
        "Angola":["Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Angola","Ангола","Angola","Angola"],
        "Benin":["Benin","Benin","Benin","Benin","Benin","Bénin","Benin","Benin","Benin","Benin","Benin","Benin","Benin","Benin","Бенин","Benin","Benin"],
        "Liberia":["Liberia","Liberia","Liberia","Libéria","Liberia","Libéria","Liberia","Liberia","Liberia","Liberia","Libérie","Libéria","Liberia","Libéria","Либерия","Liberya","Liberiya"],
        "Congo (DRC)":["Congo (DRC)","Kongo (DRK)","Congo (DRC)","República Democrata do Congo","Congo (RDC)","Congo (RDC)","Kongo (DRC)","Kongo (DRC)","Congo (DRC)","Kongo (DRC)","Kongo (DRC)","Kongo (DRC)","Demokratyczna Republika Konga","Kongó (DRC)","Конго (ДРК)","Kongo (DKC)","Kongo (KDR)"],
        "Cameroon":["Cameroon","Kamerun","Camerun","Camarões","Camerún","Cameroun","Kamerun","Kamerun","Cameroun","Kameron","Kamerun","Kamerun","Kamerun","Kamerun","Камерун","Kamerun","Kamerun"],
        "Zimbabwe":["Zimbabwe","Simbabwe","Zimbawe","Zimbabwe","Zimbabue","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Зимбабве","Zimbabve","Zimbabve"],
        "Congo-Brazzaville":["Congo-Brazzaville","Kongo-Brazzaville","Congo-Brazzaville","República do Congo","Congo-Brazzaville","Congo-Brazaville","Kongo-Brazzaville","Kongo-Brazzaville","Congo-Brazzaville","Kongon Tasavalta","Kongo-Brazzaville","Kongo-Brazzaville","Kongo-Brazzaville","Kongó-Brazzaville","Конго-Бразавил","Kongo-Brazzaville","Kongo-Brazzavil "],
        "Uganda":["Uganda","Uganda","Uganda","Uganda","Uganda","Ouganda","Uganda","Uganda","Uganda","Uganda","Uganda","Uganda","Uganda","Uganda","Уганда","Uganda","Uganda"],
        "Tanzania":["Tanzania","Tansania","Tanzania","Tanzânia","Tanzania","Tanzanie","Tanzania","Tanzania","Tanzania","Tansania","Tanzanie","Tanzánia","Tanzania","Tanzánia","Танзания","Tanzanya","Tanzaniya"],
        "Mauritius":["Mauritius","Mauritius","Mauritius","Mauritânia","Mauricio","Ile Maurice","Mauritius","Mauritius","Mauritius","Mauritius","Mauricius","Maurícius","Mauritius","Mauritius","Мавриций","Mauritius","Mavrikiy"],
        "Sudan":["Sudan","Sudan","Sudan","Sudão","Sudán","Soudan","Sudan","Sudan","Sudan","Sudan","Súdán","Sudán","Sudan","Szudán","Судан","Sudan","Sudan"],
        "Djibouti":["Djibouti","Dschibuti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Djibouti","Džibutsko","Džibutsko","Dżibuti","Dzsibuti","Джибути","Cibuti","Jibuti"],
        "Ethiopia":["Ethiopia","Äthiopien","Etiopia","Etiópia","Etiopía","Ethiopie","Etiopia","Etiopien","Etiopien","Etiopia","Etiopie","Etiópia","Etiopia","Etiópia","Етиопия","Etiyopya","Efiopiya"],
        "Kenya":["Kenya","Kenia","Kenya","Quénia","Kenia","Kenya","Kenya","Kenya","Kenya","Kenia","Keňa","Keňa","Kenia","Kenya","Кения","Kenya","Keniya"],
        "Mozambique":["Mozambique","Mosambik","Mozambico","Moçambique","Mozambique","Mozambique","Mosambik","Mocambique","Mozambique","Mosambik","Mosambik","Mozambik","Mozambik","Mozambik","Мозамбик","Mozambik","Mozambik"],
        "Madagascar":["Madagascar","Madagaskar","Madagascar","Madagascar","Madagascar","Madagascar","Madagaskar","Madagaskar","Madagaskar","Madagascar","Madagaskar","Madagaskar","Madagaskar","Madagaszkár","Мадагаскар","Madagaskar","Madagaskar"],
        "Philippines":["Philippines","Philippinen","Filippine","Filipinas","Filipinas","Phillipines","Filippinene","Filippinerna","Filippinerne","Filippiinit","Filipíny","Filipíny","Filipiny","Fülöp-szigetek","Филипини","Filipinler","Filippin"],
        "Argentina":["Argentina","Argentinien","Argentina","Argentina","Argentina","Argentine","Argentina","Argentina","Argentina","Argentiina","Argentina","Argentína","Argentyna","Argentína","Аржентина","Arjantin","Argentina"],
        "Brazil":["Brazil","Brasilien","Brasile","Brasil","Brasil","Brésil","Brasil","Brasilien","Brasilien","Brasilia","Brazílie","Brazília","Brazylia","Brazília","Бразилия","Brezilya","Braziliya"],
        "Panama":["Panama","Panama","Panama","Panamá","Panamá","Panama","Panama","Panama","Panama","Panama","Panama","Panama","Panama","Panama","Панама","Panama","Panama"],
        "Venezuela":["Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Venezuela","Wenezuela","Venezuela","Венесуела","Venezuela","Venesuela"],
        "Uruguay":["Uruguay","Uruguay","Uruguay","Uruguai","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguay","Uruguaj","Urugwaj","Uruguay","Уругвай","Uruguay","Urugvay"],
        "Peru":["Peru","Peru","Perù","Perú","Perú","Pérou","Peru","Peru","Peru","Peru","Peru","Peru","Peru","Peru","Перу","Peru","Peru"],
        "Ecuador":["Ecuador","Ecuador","Ecuador","Equador","Ecuador","Equateur","Ecuador","Ecuador","Ecuador","Ecuador","Ekvádor","Ekvádor","Ekwador","Ecuador","Еквадор","Ekvador","Ekvador"],
        "Colombia":["Colombia","Kolumbien","Colombia","Colómbia","Colombia","Colombie","Colombia","Colombia","Colombia","Kolumbia","Kolumbie","Kolumbia","Kolumbia","Kolumbia","Колумбия","Kolombiya","Kolumbiya"],
        "Pakistan":["巴基斯坦","Pakistan","N/A","N/A","Paquistão ","Pakistán","Pakistan","N/A","N/A","N/A","N/A","N/A","باكستان ","Пакистан","Pakistan","ปากีสถาน","ပါကစၥတန္","Pokiston","पाकिस्तान","Пакистан","Pakistan","פקיסטן","N/A","N/A","Pakistan","N/A","N/A","پاكستان","Pakistan","N/A"],
        "Mongolia":["蒙古","Mongolia","N/A","N/A","Mongolia ","Mongolia","Mongolie","N/A","N/A","N/A","N/A","N/A","منغوليا ","Монголия","Mông Cổ","มองโกเลีย","မြန္ဂိုးလီးယား","Mo'g'uliston","मंगोलिया","Монголія","Mongolia","מונגוליה","N/A","N/A","Mongolia","N/A","N/A","مغولستان","Mongolia","N/A"],
        "Nepal":["尼泊尔","Nepal","N/A","N/A","Nepal","Nepal","Népal","N/A","N/A","N/A","N/A","N/A","النيبال","Непал","Nepal","เนปาล","နီေပါ","Nepal","नेपाल","Непал","Nepal","נפאל","N/A","N/A","Nepal","N/A","N/A","نپال","Nepal","N/A"],
        "Cambodia":["柬埔寨","Cambodia","N/A","N/A","Cambodja ","Camboya","Cambodge","N/A","N/A","N/A","N/A","N/A","كولومبيا","Камбоджа","Campuchia","กัมพูชา","ကေမာၻဒီယား","Kambodja","कंबोडियो","Камбоджа","Cambodia","קמבודיה","N/A","N/A","Kambodża","N/A","N/A","کامبوج","Kamboja","N/A"],
        "Somalia":["索马里","Somalia","N/A","N/A","Somalia","Somalia","Somalie","N/A","N/A","N/A","N/A","N/A","الصومال","Сомали","Somalia","โซมาเลีย","ဆိုမာလီယာ","Somali","सोमालिया","Сомалі","Somalia","סומליה","N/A","N/A","Somalia","N/A","N/A","سومالي","Somalia","N/A"],
        "Moldova":["摩尔多瓦","Moldova","N/A","N/A","Moldávia ","Moldavia","Moldova","N/A","N/A","N/A","N/A","N/A","مولدوفا","Молдова","Moldova","มอลโดวา","မိုဒိုဗာ","Moldova","मोलडोवा","Молдова","Moldova","מולדובה","N/A","N/A","Mołdawia","N/A","N/A","مولداوی","Moldova","N/A"],
        "Dominica":["多米尼加","Dominica","N/A","N/A","Dominica ","Dominica","Dominique","N/A","N/A","N/A","N/A","N/A","دومينيكا","Доминика","Dominica","โดมินิกัน","ဒိုမီနီကာ","Dominika","डोमिनिका","Домініка","Dominica","דומיניקה","N/A","N/A","Dominika","N/A","N/A","دومینیکا","Dominika","N/A"],
        "Bahamas":["巴哈马","Bahamas","N/A","N/A","Bahamas ","Bahamas","Bahamas","N/A","N/A","N/A","N/A","N/A","باهاماس","Багамы","Bahamas","บาฮามาส","ဘဟားမား","Bagam orollari","बहामास","Багами","Bahamas","איי בהאמה","N/A","N/A","Bahamy","N/A","N/A","باهاما","Bahama","N/A"],
        "Paraguay":["巴拉圭","Paraguay","N/A","N/A","Paraguai ","Paraguay","Paraguay","N/A","N/A","N/A","N/A","N/A","الباراغواي","Парагвай","Paraguay","ปารากวัย","ပါရာေဂြး","Paragvay","पराग्वे","Парагвай","Paraguay","פארגוואי","N/A","N/A","Paragwaj","N/A","N/A","پاراگوئه","Paraguay","N/A"],
        "Cuba":["古巴","Cuba","N/A","N/A","Cuba ","Cuba","Cuba","N/A","N/A","N/A","N/A","N/A","كوبا","Куба","Cuba","คิวบา","က်ဴးဘား","Kuba","क्यूबा","Куба","Cuba","קובה","N/A","N/A","Kuba","N/A","N/A","كوبا","Kuba","N/A"],
        "Chile":["智利","Chile","N/A","N/A","Chile ","Chile","Chili","N/A","N/A","N/A","N/A","N/A","تشيلي","Чили","Chile","ชิลี","ခ်ီလီ","Chili","चिली","Чилі","Chile","צ'ילה","N/A","N/A","Chile","N/A","N/A","شیلی","Chili","N/A"],
        "Costa Rica":["哥斯达黎加","Costa Rica","N/A","N/A","Costa Rica","Costa Rica","Costa Rica","N/A","N/A","N/A","N/A","N/A","كوستاريكا","Коста-Рика","Costa Rica","คอสตาริกา","ေကာ္စတာရီကာ","Kosta-Rika","कोस्टा रीका","Коста-Ріка","Costa Rica","קוסטה ריקה","N/A","N/A","Kostaryka","N/A","N/A","كاستاريكا","Kosta Rika","N/A"],
        "Bolivia":["玻利维亚","Bolivia","N/A","N/A","Bolívia ","Bolivia","Bolivie","N/A","N/A","N/A","N/A","N/A","بوليفيا","Боливия","Bolivia","โบลิเวีย","ဘိုလီးဗီးယား","Boliviya","बोलिविया","Болівія","Bolivia","בוליביה","N/A","N/A","Boliwia","N/A","N/A","بولیوی","Bolivia","N/A"],
        "Maldives":["马尔代夫","Maldives","N/A","N/A","Maldivas","Maldivas","Maldives","N/A","N/A","N/A","N/A","N/A","مالديف","Мальдивы","Maldives","มัลดิฟส์","ေမာ္ဒိုက္","Maldiv orollari","माल्डीव्ज़","Мальдіви","Maldives","האיים המלדיביים","N/A","N/A","Malediwy","N/A","N/A","مالدیو","Maladewa","N/A"],
        "Fiji":["斐济","Fiji","N/A","N/A","Fiji","Fiji","Fidji","N/A","N/A","N/A","N/A","N/A","فيجي","Фиджи","Fiji","ฟิจิ","ဖီဂ်ီ","Fidji","फिजी","Фіджі","Fiji","פיג'י","N/A","N/A","Fidżi","N/A","N/A","فیجی","Fiji","N/A"],
        "System Update":["系统升级","System Update","Systemaktualisierung","","Actualização Sistema","Actualizacion del sistema","Mise à jour du système","Systemoppdatering","Systemuppdatering","Systemopdatering","Järjestelmäpäivitys","Sistem Güncelleme","تحديث النظام ","Обновление системы","Cập Nhật Hệ Thống","อัพเดทระบบ","စနစ္ ျပဳျပင္မြမ္းမံျခင္း","Tizimni yangilash","सिस्टम अप्डेट","Оновлення системи","Kemas kini Sistem","עדכון מערכת","Aktualizace systému","Aktualizácia systému","Aktualizacja systemu","Rendszer frissítés","Актуализация на системата","به‌روزرسانی سیستم","Pembaruan Sistem",""],
        "Tajikistan":["塔吉克斯坦","Tajikistan","N/A","N/A","Tajikistan","Tayikistán","Tadjikistan","N/A","N/A","N/A","N/A","N/A","طاجستان","Таджикистан","Tajikistan","ทาจิกสถาน","တာဂ်စ္ကစၥတန္","Tojikiston","ताजिकिस्तान","Таджикистан","Tajikistan","טג'יקיסטן","N/A","N/A","Tadżykistan","N/A","N/A","تاجیکستان","Tajikistan","N/A"],
        "Guinea":["几内亚","Guinea","N/A","N/A","Guinea","Guinea","Guinée","N/A","N/A","N/A","N/A","N/A","جينوا","Гвинея","Guinea","กินี","ဂီနီ","Gvineya","गिनी","Гвінея","Guinea","גינאה","N/A","N/A","Gwinea","N/A","N/A","گينه","Guinea","N/A"],
        "Bengal":["孟加拉","Bengal","N/A","N/A","Bengal","Bengala","Bengale","N/A","N/A","N/A","N/A","N/A","البنغال","Бенгалия","Bengal","เบงกอล","ဘဂၤါလီ","Bengal","बंगाल","Бенгалія","Bengal","בנגל","N/A","N/A","Bengal","N/A","N/A","بنگال","Bengali","N/A"],
        "Belarus":["白俄罗斯","Belarus","N/A","N/A","Belarus","Bielorrusia","Biélorussie","N/A","N/A","N/A","N/A","N/A","بلاروسيا","Беларусь","Belarus","เบลารุส","ဘီလာ႐ုဇ္","Belarus","बेलारूस","Білорусь","Belarus","בלרוס","N/A","N/A","Białoruś","N/A","N/A","بلاروس","Belarusia","N/A"],
        "Bahrain":["巴林","Bahrain","N/A","N/A","Bahrain","Bahréin","Bahreïn","N/A","N/A","N/A","N/A","N/A","البحرين","Бахрейн","Bahrain","บาห์เรน","ဘာရိန္း","Bahrayn","बहरीन","Бахрейн","Bahrain","בחריין","N/A","N/A","Bahrajn","N/A","N/A","بحرین","Bahrain","N/A"],
        "Lebanon":["黎巴嫩","Lebanon","N/A","N/A","Lebanon","Líbano","Liban","N/A","N/A","N/A","N/A","N/A","لبنان","Ливан","Lebanon","เลบานอน","လက္ဘႏြန္","Livan","लेबनान","Ліван","Lebanon","לבנון","N/A","N/A","Liban","N/A","N/A","لبنان","Lebanon","N/A"],
        "Burundi":["布隆迪","Burundi","N/A","N/A","Burundi","Burundi","Burundi","N/A","N/A","N/A","N/A","N/A","بوروندي","Бурунди","Burundi","บุรุนดี","ဘူရြန္ဒီ","Burundi","बुरूंडी","Бурунді","Burundi","בורונדי","N/A","N/A","Burundi","N/A","N/A","بروندی","Burundi","N/A"],
        "Senegal":["塞内加尔","Senegal","N/A","N/A","Senegal","Senegal","Sénégal","N/A","N/A","N/A","N/A","N/A","سنغال","Сенегал","Senegal","เซเนกัล","ဆီနီေဂါ","Senegal","सेनेगाल","Сенегал","Senegal","סנגל","N/A","N/A","Senegal","N/A","N/A","سنگال","Senegal","N/A"],
        "Tunisia":["突尼斯","Tunisia","N/A","N/A","Tunísia ","Túnez","Tunisie","N/A","N/A","N/A","N/A","N/A","تونس","Тунис","Tunisia","ตูนิเซีย","တူနီးရွား","Tunis","ट्यूनिसिया","Туніс","Tunisia","טוניס","N/A","N/A","Tunezja","N/A","N/A","تونس","Tunisia","N/A"],
        "Syria":["叙利亚","Syria","N/A","N/A","Síria ","Siria","Syrie","N/A","N/A","N/A","N/A","N/A","سوريا","Сирия","Syria","ซีเรีย","ဆီးရီးယား","Suriya","सीरिया","Сирія","Syria","סוריה","N/A","N/A","Syria","N/A","N/A","سوریه","Suriah","N/A"]
    },
    rewrite:"boeRefreshCountryPage"
}
function boeCtyToPreviousPageAdjust(){
    if(this.SelectedIndex % 4 == 0)
    {
        boeCtyToLangPage();
    }
}
function boeCtyToNextPageAdjust(){
    if(this.SelectedIndex % 4 == 3 || (this.SelectedIndex == boeCtyPageData.boeCtyGridUl.Data.length - 1))
    {
        boeCtyToNextPage();
    }
}
/*******************************************************************
 name:boeCtyPageInit
 description:初始化boe语言设置页
 input:currStep:
 output:
 return
 *******************************************************************/
function boeCtyPageInit(){
    try{
        var data = boeCtyPageData;
        data.operateData.supportCtyMapList=getSettingCountryMapList();
        if(data.operateData.supportCtyMapList.length>0)
        {
            data.operateData.countrycode=[];
            for(var i=0;i<data.operateData.supportCtyMapList.length;i++)
            {
                data.operateData.countrycode.push(data.operateData.supportCtyMapList[i].code);
            }
        }
        var temp = get_curcounty_code();
        var index=_getIndex(data.operateData.countrycode,temp);
        debugPrint("[xuehongfeng] is currCountryIdx" + index);
        if(index>-1)
        {
            data.operateData.currCountryIdx=index;
        }
        else
        {
            data.operateData.currCountryIdx=0;
            if(getCurrVeraForWizard()=='EU') {
                writeFileToNative("hisenseUI/currentcty.txt", data.operateData.countrycode[0], 1);
            }
            else {
                model.basicSetting.setTvsetLocation(data.operateData.countrycode[0]);
                hiWebOsFrame.setCurrentCountry(data.operateData.supportCtyMapList[0].name);
            }
        }
        debugPrint("[xuehongfeng] is currCountryIdx" + data.operateData.currCountryIdx);
    }catch (ex){
        debugPrint("wizardInitCountryPage"+ex.message);
    }
}
function get_curcounty_code() {
    if(tv == true) {

        if(getCurrVeraForWizard()=='EU') {
            var temp = readFileFromNative("hisenseUI/currentcty.txt", 1);
        }
        else
        {
            var temp = model.basicSetting.getTvsetLocation();
        }

    }
    else
    {
        var countryMapListTemp = getSettingCountryMapList();
        if (!!localStorage.getItem("currCountryIdx")) {
            var currCountryIdx = parseInt(localStorage.getItem("currCountryIdx"));
            temp = countryMapListTemp[currCountryIdx].code;
        }
        else {
            var currCountryIdx = 0;
            temp = countryMapListTemp[currCountryIdx].code;
        }
    }
    return temp;
}
function wizardSetCurrCountry(currCountryIdx){
    var data = boeCtyPageData;

    if(currCountryIdx >= data.operateData.supportCtyMapList.length){
        currCountryIdx = 0;
    }
    if(tv == false){
        localStorage.setItem("currCountryIdx",currCountryIdx);
        localStorage.setItem("currTimezoneIdx",data.operateData.ctyToDefZoneMap[currCountryIdx]);
        //localStorage.setItem("CtyZoneSupportList",boeCtyPageData.operateData.ctyToDefZoneMap[currCountryIdx]);
        hiWebOsFrame.setCurrentCountry(data.operateData.supportCtyMapList[currCountryIdx].name);
    }else{
        //debugPrint("wizardSetCurrCountry:currCountryIdx="+currCountryIdx+",currCoutryCode="+data.operateData.supportCtyMapList[currCountryIdx].code);
      //model.basicSetting.onTvsetLocationChaged = boeCtyOnChange;
        if(getCurrVeraForWizard()=='EU')
        {
            writeFileToNative("hisenseUI/currentcty.txt", data.operateData.supportCtyMapList[currCountryIdx].code, 1);
        }
        else {
            model.basicSetting.setTvsetLocation(data.operateData.supportCtyMapList[currCountryIdx].code);//设置所在国家
            hiWebOsFrame.setCurrentCountry(data.operateData.supportCtyMapList[currCountryIdx].name);
        }
//        set_def_zone_for_cty();
       //Updatesyscountryid(data.operateData.supportCtyMapList[currCountryIdx].code);

    }

}
function set_def_zone_for_cty(){
    var data = boeCtyPageData;
    var temp = get_curcounty_code();
    //if(tv == true) {
        var cty_to_zone_maplist = getCountryToZoneMapList();
        for (var idx = 0; idx < cty_to_zone_maplist.length; idx++) {
            //debugPrint("[xuehongfeng]" + countryCode + idx + cty_to_zone_maplist[idx].code);
            if (temp == cty_to_zone_maplist[idx].code) {
                var defzone = cty_to_zone_maplist[idx].defzone;
                data.operateData.supportzonelist = cty_to_zone_maplist[idx].supportzonelist;
                break;
            }
            else {
                var defzone = 0;
            }

        }
    if(tv) {
        var timezonecode = data.operateData.timezonelistcode[data.operateData.supportzonelist[defzone]];
        timezonecode = timezonecode * 3600;
        if (temp == "AUS") {
            model.timerfunc.setTimeZone(0);
        }
        else {
            if(getCurrVeraForWizard()=='EU')
            {
                var timezonecodeJson = {};
                timezonecodeJson.timezonecode = timezonecode;
                writeFileToNative("hisenseUI/currentzone.json", objToString(timezonecodeJson), 1);
            }
            else {
                model.timerfunc.setNewTimeZone(timezonecode);
            }
        }
    }
   // }
//}
}
/*******************************************************************
 name:boeSetUseCountry
 description:设置使用语言
 input:currStep:
 output:
 return
 *******************************************************************/
function boeSetUseCountry(){
    try {
        hiWebOsFrame.lockAllKeys();

        this.DataSelectedIndex = this.SelectedIndex;
        boeCtyPageData.operateData.currCountryIdx = this.SelectedIndex;
        hiWebOsFrame.boe_cty_page_id.rewriteDataOnly();
        wizardSetCurrCountry(boeCtyPageData.operateData.currCountryIdx);
        setTimeout(boeCtyToNextPage,200);
    }
    catch (ex) {
        DBG_ERROR("boeSetUseCountry: " + ex.message);
    }
    finally {
        //hiWebOsFrame.unLockAllKeys(); //由于boeCtyToNextPage有0.2秒的延时，unlock放在boeCtyToNextPage里了
    }
}
/*******************************************************************
 name:boeRefreshCountryPage
 description:刷新语言页
 input:
 output:
 return
 *******************************************************************/

function boeRefreshCountryPage(data,languageIdx){
    if(data.boeCtyGridUl.Data.length > data.operateData.supportCtyMapList.length){
        data.boeLanGridUl.Data.splice(data.operateData.supportCtyMapList.length);
    }else if(data.boeCtyGridUl.Data.length < data.operateData.supportCtyMapList.length){
        while(data.boeCtyGridUl.Data.length < data.operateData.supportCtyMapList.length){
            var itemData = {
                "ctyName":{"Data":"Great Britain"},
                "ctyName_marquee":{"Data": "Great Britain"},
                "ctySelectImg":{"Data": false}
            }
            data.boeCtyGridUl.Data.push(itemData);
        }
    }

    $.each(data.boeCtyGridUl.Data, function (idx, item) {
        debugPrint("[xuehongfeng]" + idx, DebugLevel.ALWAYS);
        debugPrint("[xuehongfeng]" + data.operateData.supportCtyMapList[idx].name, DebugLevel.ALWAYS);
        var v = data.operateData.supportCtyMapList[idx].name;
        debugPrint("[xuehongfeng]" + v, DebugLevel.ALWAYS);


        item.ctySelectImg.Data = false;
        item.ctyName.Data = data.operateData.supportCtyMapList[idx].name;
        //langPackages[v.name][hiWebOsFrame.getCurrentLanguageIndex();
        try {
            var realText1 = langPackages[v][hiWebOsFrame.getCurrentLanguageIndex()];
        }
        catch (ex)
        {
            debugPrint("[xuehongfeng]" + realText1, DebugLevel.ALWAYS);
            var realText1 = "";
        }
        if(tv == true) {
            var langNumber = model.language.getOsd();

            if (langNumber == 6)//中文
            {
                if (realText1.length > 4) {
                    item.ctyName_marquee.Data = '<marquee>' + realText1 + '</marquee>';
                }
                else {
                    item.ctyName_marquee.Data = data.operateData.supportCtyMapList[idx].name;
                }
            }
            else {
                debugPrint("[xuehongfeng]" + realText1, DebugLevel.ALWAYS);
                if(getCurrVeraForWizard() == "SA")
                {
                    if (realText1.length > 11) {
                        item.ctyName_marquee.Data = '<marquee>' + realText1 + '</marquee>';
                    }
                    else {
                        item.ctyName_marquee.Data = data.operateData.supportCtyMapList[idx].name;
                    }
                }
                else {
                    if (realText1.length > 9) {
                        item.ctyName_marquee.Data = '<marquee>' + realText1 + '</marquee>';
                    }
                    else {
                        item.ctyName_marquee.Data = data.operateData.supportCtyMapList[idx].name;
                    }
                }
            }
        }
        else
        {
            debugPrint("[xuehongfeng]" + realText1, DebugLevel.ALWAYS);
            if (realText1.length > 9) {
                item.ctyName_marquee.Data = '<marquee>' + realText1 + '</marquee>';
            }
            else {
                item.ctyName_marquee.Data = data.operateData.supportCtyMapList[idx].name;
            }
        }


    });



    refresh_ctyGridUI_bynumber(data.operateData.supportCtyMapList.length);
    data.boeCtyGridUl.DataSelectedIndex = data.operateData.currCountryIdx;
    data.boeCtyGridUl.SelectedIndex = data.operateData.currCountryIdx;
    data.boeCtyGridUl.Data[data.boeCtyGridUl.DataSelectedIndex].ctySelectImg.Data = true;
    if(hiWebOsFrame.getHTMLDir() == HTMLDIR.LTR){
        $(".langSelectImg").css({"margin-left":"250px"});
    }else{
        $(".langSelectImg").css({"margin-right":"250px"});
    }
}

/*******************************************************************
 name:由国家设置页返回语言设置页
 description:
 input:
 output:
 return
 *******************************************************************/
function boeCtyToLangPage(){
        hiWebOsFrame.createPage('boe_lang_page_id',null, null, null,function(b){
            hiWebOsFrame.boe_lang_page_id = b;
            hiWebOsFrame.boe_cty_page_id.close();
            hiWebOsFrame.boe_cty_page_id.destroy();
            b.hiFocus();
            b.open();
        })
}
/*******************************************************************
 name:由语言设置页进入国家设置页
 description:
 input:
 output:
 return
 *******************************************************************/
function boeCtyToNextPage(){
    var setSubtCtyList = ["LVA", "EST", "LTU"];
    try {
        if (setSubtCtyList.indexOf(get_curcounty_code()) > -1) {
            model.system.setCurChannelSubtitleStatus(1);
        }
    }
    catch (ex) {
        DBG_ERROR("boeCtyToNextPage: " + ex.message);
    }

    if(getCurrVeraForWizard()=='EU'){
        hiWebOsFrame.setCurrentCountry(boeCtyPageData.operateData.supportCtyMapList[boeCtyPageData.operateData.currCountryIdx].name);
    }
    var data=boeCtyPageData;
    set_def_zone_for_cty();
//    hiWebOsFrame.lockAllKeys();
    debugPrint("[xuehongfeng]" + data.operateData.supportzonelist.length, DebugLevel.ALWAYS);
    if(data.operateData.supportzonelist.length > 2) {
            hiWebOsFrame.createPage('boe_timezone_page_id', null, null, null, function (b) {
                hiWebOsFrame.boe_timezone_page_id = b;
                hiWebOsFrame.boe_cty_page_id.close();
                hiWebOsFrame.boe_cty_page_id.destroy();
                b.hiFocus();
                b.open();

            })

    }
    else
    {
            hiWebOsFrame.createPage('boe_disclaimer_page_id', null, null, null, function (b) {
                hiWebOsFrame.boe_disclaimer_page_id = b;
                hiWebOsFrame.boe_cty_page_id.close();
                hiWebOsFrame.boe_cty_page_id.destroy();
                b.hiFocus();
                b.open();
            })
    }

    hiWebOsFrame.unLockAllKeys();
}

    function boeCtyPageOnOpen()
    {
        var page_num = 0;
        var curr_page = 0;
        var height = 0;
        var top = 0;
        boeChangeCurrSep(2);
        if(boeCtyPageData.boeCtyGridUl.Data.length % 16 == 0)
        {
            page_num = boeCtyPageData.boeCtyGridUl.Data.length / 16;
        }
        else
        {
            page_num = boeCtyPageData.boeCtyGridUl.Data.length / 16 + 1;
        }
        height = 550 / page_num;
        if(parseInt(page_num)>1)
        {

            $("#CtyScrollBar").css("height",height + 'px');
            $("#CtyScrollBar").css("visibility","visible");
        }
        else
        {
            $("#CtyScrollBar").css("visibility","hidden");
        }
        curr_page = parseInt(boeCtyPageData.operateData.currCountryIdx / 16);
        top = curr_page * height;
        $("#CtyScrollBar").css("top",top + 'px');
        if(page_num > 1)
        {
            debugPrint("[xuehongfeng] this selectedindex"+boeCtyPageData.operateData.currCountryIdx,DebugLevel.ALWAYS);
            var currpage = parseInt(boeCtyPageData.operateData.currCountryIdx / 16,10);
            debugPrint("[xuehongfeng] currpage"+currpage,DebugLevel.ALWAYS);
            var top_base = -(458 * currpage);
            $("#boeCtyGridUl").css("top",top_base+"px");

        }
        //hiWebOsFrame.boe_cty_page_id.hiFocus('boeCtyGridUl');

        var data = boeCtyPageData;
        try {
            writeFileToNative("hisenseUI/currentcty.txt", data.operateData.countrycode[data.operateData.currCountryIdx], 1);
        }
        catch (ex) {
            DBG_ERROR("boeCtyPageOnOpen " + ex.message);
        }
    }
function ctyGridulUpdateUpScroolbar()
{
    debugPrint("[xuehongfeng] this selectedindex",DebugLevel.ALWAYS);
    var top = 0;
    var height = 0;
    var page_num = 0;
    if(boeCtyPageData.boeCtyGridUl.Data.length % 16 == 0)
    {
        page_num = boeCtyPageData.boeCtyGridUl.Data.length / 16;
    }
    else
    {
        page_num = boeCtyPageData.boeCtyGridUl.Data.length / 16 + 1;
    }
    height = 550 / page_num;
    top = (parseInt((this.SelectedIndex-4) / 16 ))*height;
    $("#CtyScrollBar").css("top",top + 'px');
    if(page_num > 1)
    {
        //debugPrint("[xuehongfeng] this selectedindex"+this.SelectedIndex,DebugLevel.ALWAYS);
        var currpage = parseInt((this.SelectedIndex-4) / 16,10);
        debugPrint("[xuehongfeng] currpage"+currpage,DebugLevel.ALWAYS);
        var top_base = -(458 * currpage);
        $("#boeCtyGridUl").css("top",top_base+"px");

    }
}

function ctyGridulBefDownHandler() {
    var ul = hiWebOsFrame.getCurrentPage().getCaE("boeCtyGridUl");
    if ((ul.SelectedIndex % 16) + 4 > 16 && ul.SelectedIndex + 4 > boeCtyPageData.boeCtyGridUl.Data.length -1 && ul.FlipType == 'VER') {
        //非最后一页的最后一行，且允许上下翻页
        ul.hiBlur();
        ul.SelectedIndex = ul.BeginIdx + 16;
//        ul.BeginIdx = ul.BeginIdx + 16;
//        ul.refreshData();
        ul.data.SelectedIndex = ul.SelectedIndex;//6-20
//        ul.data.BeginIdx = ul.BeginIdx;//7-11
//        ul.hiFocus();
        ctyGridulUpdateScroolbar.call(ul);
        ul.hiFocus();
    }
//    this.page.rewriteDataOnly();


}

function ctyGridulUpdateScroolbar()
{
    var top = 0;
    var height = 0;
    var page_num = 0;
    if(boeCtyPageData.boeCtyGridUl.Data.length % 16 == 0)
    {
        page_num = boeCtyPageData.boeCtyGridUl.Data.length / 16;
    }
    else
    {
        page_num = boeCtyPageData.boeCtyGridUl.Data.length / 16 + 1;
    }
    height = 550 / page_num;
    top = (parseInt(this.SelectedIndex / 16 ))*height;
    $("#CtyScrollBar").css("top",top + 'px');
    if(page_num > 1)
    {
        //debugPrint("[xuehongfeng] this selectedindex"+this.SelectedIndex,DebugLevel.ALWAYS);
        var currpage = parseInt(this.SelectedIndex / 16,10);
        //debugPrint("[xuehongfeng] currpage"+currpage,DebugLevel.ALWAYS);
        var top_base = -(458 * currpage);
        $("#boeCtyGridUl").css("top",top_base+"px");

    }
}
function refresh_ctyGridUI_bynumber(number)
{
    var line_number = 0;
    var margin_top = 0;
    var margin_left = 0;
    if((number%4) ==0)
    {
        line_number = number/4;
    }
    else
    {
        line_number = number/4 + 1;
    }

    if(line_number<4) {
        margin_top = (480 - line_number * 110) / 2;
    }
    else{
        margin_top = 50;
    }
    if(number < 4)
    {
        margin_left = (1440-354*(number%4))/2;
    }
    $("#boeCtyGridUl").css("margin-top",margin_top + 'px');
    $("#boeCtyGridUl").css("margin-left",margin_left + 'px');

}

function boeCtyPageOnDestroy(){
    hiWebOsFrame.boe_cty_page_id = null;
}

