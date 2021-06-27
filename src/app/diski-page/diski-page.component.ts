import { Component, OnInit } from '@angular/core';

import { DataDirective } from '../data/data.directive';

@Component({
  selector: 'app-diski-page',
  templateUrl: './diski-page.component.html',
  styleUrls: ['./diski-page.component.css']
})
export class DiskiPageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  allKorting = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeAllKorting();

    this.dtOptions = {
      language: {
        search: "Zoek:",
        lengthMenu: "Toon _MENU_ resultaten",
        info: "Toont _START_ tot _END_ van de _TOTAL_ resultaten",
        infoEmpty: "Geen resultaten gevonden",
        infoFiltered: "(gefilterd uit _MAX_ elementen)",
        infoPostFix: "",
        loadingRecords: "Laden van resultaten...",
        zeroRecords: "Geen resultaten gevonden",
        emptyTable: "Deze tabel is leeg",
        paginate: {
          first: "Eerste",
          previous: "Vorige",
          next: "Volgende",
          last: "Laatste"
        },
      }
    };
  }

  initializeAllKorting() {
    var baseKortingEntries = DataDirective.getDataArray();

    for(var i = 0; i < baseKortingEntries.length; i++) {
      this.allKorting.push({
         "company": this.getCompanyFromBaseInputLine(baseKortingEntries[i]),
         "code": this.getDiscountCodeFromBaseInputLine(baseKortingEntries[i]),
         "via": this.getInfluencerFromBaseInputLine(baseKortingEntries[i]),
         "date": this.getDateFromBaseInputLine(baseKortingEntries[i]),
         });
    }
  }

  getCompanyFromBaseInputLine(baseInputLine) {
    var company = baseInputLine.substring(0, baseInputLine.indexOf(","));
    return company;
  }

  getDiscountCodeFromBaseInputLine(baseInputLine) {
    var firstIndexOfComma = this.getPosition(baseInputLine, ", ", 1);
    var secondIndexOfComma = this.getPosition(baseInputLine, ", ", 2);
    var discountCode = baseInputLine.substring(firstIndexOfComma + 2, secondIndexOfComma);
    return discountCode;
  }

  getInfluencerFromBaseInputLine(baseInputLine) {
    var secondIndexOfComma = this.getPosition(baseInputLine, ", ", 2);
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var influencer = baseInputLine.substring(secondIndexOfComma + 2, thirdIndexOfComma);
    return influencer;
  }

  getDateFromBaseInputLine(baseInputLine) {
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var date = baseInputLine.substring(thirdIndexOfComma + 2, baseInputLine.length);
    return date;
  }

  getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }


  //////////

  allKortingOld = [
      {
      "company": "@amebalance",
      "code": "FLORIANNE20",
      "via": "florianne.charlotte",
      "date": "2021-06-10",
      },
      {
      "company": "@famousstore",
      "code": "Annefloor10",
      "via": "annefloorx",
      "date": "2021-06-10",
      },
      {
      "company": "@editedofficial",
      "code": "ROOS20JUNE",
      "via": "moderosaofficial",
      "date": "2021-06-10",
      },
      {
      "company": "@gardenoflifenl",
      "code": "MARTINE",
      "via": "martinemaureen",
      "date": "2021-06-10",
      },
      {
      "company": "@outfithustler",
      "code": "ROXY10",
      "via": "roxysshizzle",
      "date": "2021-06-10",
      },
      {
      "company": "@chiquelle",
      "code": "ROXY20",
      "via": "roxysshizzle",
      "date": "2021-06-10",
      },
      {
      "company": "@suitta.exclusive",
      "code": "CHARLOTTE15",
      "via": "charlottejanssen94",
      "date": "2021-06-10",
      },
      {
      "company": "@stronger",
      "code": "janssen20",
      "via": "charlottejanssen94",
      "date": "2021-06-10",
      },
      {
      "company": "@icaniwill",
      "code": "WENDIE20",
      "via": "wendievlaar",
      "date": "2021-06-10",
      },
      {
      "company": "@idealofsweden",
      "code": "BBSYLVANA15",
      "via": "sylvana.elling",
      "date": "2021-06-10",
      },
      {
      "company": "@stronger",
      "code": "ELIZEMOL20",
      "via": "elizemol",
      "date": "2021-06-10",
      },
      {
      "company": "@sheinofficial",
      "code": "Koster15",
      "via": "lisajkoster",
      "date": "2021-06-10",
      },
      {
      "company": "@romwe_fun",
      "code": "kosterA2",
      "via": "lisajkoster",
      "date": "2021-06-10",
      },
      {
      "company": "@cuccoofootwear",
      "code": "SC502",
      "via": "lisajkoster",
      "date": "2021-06-10",
      },
      {
      "company": "@zaful",
      "code": "WSA28",
      "via": "wietskeypmaa",
      "date": "2021-06-10",
      },
      {
      "company": "@nakdfashion",
      "code": "lucaaax20",
      "via": "lucaaa.xx",
      "date": "2021-06-10",
      },
      {
      "company": "@nakdfashion",
      "code": "20XBB5LA",
      "via": "melissavijgen",
      "date": "2021-06-10",
      },
      {
      "company": "@bymusthaves",
      "code": "DONNA15",
      "via": "donnadaizy",
      "date": "2021-06-10",
      },
      {
      "company": "@idealofsweden",
      "code": "Kellyh15x",
      "via": "kellyhamelijnck",
      "date": "2021-06-10",
      },
      {
      "company": "@bydashbeautyfashion",
      "code": "DAMIET20",
      "via": "damiet",
      "date": "2021-06-10",
      },
      {
      "company": "@officialenrich",
      "code": "AYLA20",
      "via": "xmylifeasayla",
      "date": "2021-06-10",
      },
      {
      "company": "@bambook",
      "code": "VADERDAG15",
      "via": "sarahrebeccanl",
      "date": "2021-06-10",
      },
      {
      "company": "@blackbananasnl",
      "code": "LIE20",
      "via": "liemeurs",
      "date": "2021-06-10",
      },
      {
      "company": "@desenio",
      "code": "CHEY30",
      "via": "cheyennech.x",
      "date": "2021-06-10",
      },
      {
      "company": "@nakdfashion",
      "code": "sophieousri20",
      "via": "sophieousri",
      "date": "2021-06-10",
      },
      {
      "company": "@nakdfashion",
      "code": "chamee20",
      "via": "chameebarkmanx",
      "date": "2021-06-10",
      },
      {
      "company": "@officialenrich",
      "code": "VERENA20",
      "via": "verena.friederich",
      "date": "2021-06-10",
      },
      {
      "company": "@nakdfashion",
      "code": "Linndadonx20",
      "via": "linndadon",
      "date": "2021-06-10",
      },




  {
      "company": "@theofficialsafira",
      "code": "SAF93557",
      "via": "a_deruijterx",
      "date": "2021-06-12",
      },
      {
      "company": "@idealofsweden",
      "code": "BB15EMILIE",
      "via": "emilie.terloo",
      "date": "2021-06-12",
      },
      {
      "company": "@leolive",
      "code": "MFIG10",
      "via": "beautygloss",
      "date": "2021-06-12",
      },
      {
      "company": "@fortunateonestore",
      "code": "FREDLOVE",
      "via": "frederiqueligtvoet",
      "date": "2021-06-12",
      },
      {
      "company": "@hellofreshnl",
      "code": "FRESHCHAMEE45",
      "via": "chameebarkmanx",
      "date": "2021-06-12",
      },
      {
      "company": "@bangerhead",
      "code": "Chamee15",
      "via": "chameebarkmanx",
      "date": "2021-06-12",
      },
      {
      "company": "@hellofreshbe",
      "code": "PAULIENFRESH45",
      "via": "paulienmullaertx",
      "date": "2021-06-12",
      },
      {
      "company": "@kibafashion",
      "code": "VERENA15",
      "via": "verena.friederich",
      "date": "2021-06-12",
      },
      {
      "company": "@sheinofficial",
      "code": "esmeeq2",
      "via": "esmeemelissa",
      "date": "2021-06-12",
      },
      {
      "company": "@idealofsweden",
      "code": "NVB15",
      "via": "nisavanbaelen",
      "date": "2021-06-12",
      },
      {
      "company": "@nakdfashion",
      "code": "20XBBRHR",
      "via": "lucaaa.xx",
      "date": "2021-06-12",
      },
      {
      "company": "@nakdfashion",
      "code": "louwaars20",
      "via": "michellelouwaars",
      "date": "2021-06-12",
      },
      {
      "company": "@nakdfashion",
      "code": "lottew20",
      "via": "lotte.wullink",
      "date": "2021-06-12",
      },
      {
      "company": "@nakdfashion",
      "code": "hannahdb20",
      "via": "hannahdb_",
      "date": "2021-06-12",
      },
      {
      "company": "@nakdfashion",
      "code": "claire20",
      "via": "clairepronk",
      "date": "2021-06-12",
      },
      {
      "company": "@biostimenl",
      "code": "Biostime50Kim",
      "via": "kimjacobs",
      "date": "2021-06-12",
      },
      {
      "company": "@silknnederland",
      "code": "Robin10",
      "via": "robinhenneke.jpeg",
      "date": "2021-06-12",
      },
      {
      "company": "@dicetees",
      "code": "SYLVANA10",
      "via": "sylvana.elling",
      "date": "2021-06-12",
      },
      {
      "company": "@sheinofficial",
      "code": "wietskeypmaaq2",
      "via": "wietskeypmaa",
      "date": "2021-06-12",
      },
      {
      "company": "@sheinofficial",
      "code": "LISATERQ2",
      "via": "lisaterhorstt",
      "date": "2021-06-12",
      },
      {
      "company": "@gittibeauty",
      "code": "michelle20",
      "via": "michelle_bollen",
      "date": "2021-06-12",
      },



      {
      "company": "@kisstherainbowshop",
      "code": "DANTHE10",
      "via": "danthescholtenx",
      "date": "2021-06-14",
      },
      {
      "company": "@nakdfashion",
      "code": "bibikleinenberg20",
      "via": "bibikleinenberg",
      "date": "2021-06-14",
      },
      {
      "company": "@lovingtanofficial ",
      "code": "KIMBERLYGLOW",
      "via": "xkiimberly",
      "date": "2021-06-14",
      },
      {
      "company": "@getyourtoy.nl",
      "code": "Charlotte10",
      "via": "charlottejanssen94",
      "date": "2021-06-14",
      },
      {
      "company": "@olcaygulsenbeauty",
      "code": "Holiday30",
      "via": "olcay",
      "date": "2021-06-14",
      },
      {
      "company": "@merodacosmetics",
      "code": "shula20",
      "via": "shularoose",
      "date": "2021-06-14",
      },
      {
      "company": "@bymusthaves",
      "code": "MAIKE15",
      "via": "maikebeunk",
      "date": "2021-06-14",
      },
      {
      "company": "@nakdfashion",
      "code": "lindseyb20",
      "via": "lindseybeljaars",
      "date": "2021-06-14",
      },
      {
      "company": "@nakdfashion",
      "code": "donnagijsmanx20",
      "via": "donnadaizy",
      "date": "2021-06-14",
      },
      {
      "company": "@merodacosmetics",
      "code": "Michelle20",
      "via": "michellelouwaars",
      "date": "2021-06-14",
      },
      {
      "company": "@sheinofficial",
      "code": "VA858",
      "via": "femkezoe",
      "date": "2021-06-14",
      },
      {
      "company": "@juulsfavorites.nl",
      "code": "Sofie15",
      "via": "sofiegraafland",
      "date": "2021-06-14",
      },
      {
      "company": "@papilloncountryresort",
      "code": "Diesna10",
      "via": "diesnaloomans",
      "date": "2021-06-14",
      },
      {
      "company": "@nakdfashion",
      "code": "MARTINEMAUREEN20",
      "via": "martinemaureen",
      "date": "2021-06-14",
      },
      {
      "company": "@remington.benelux",
      "code": "BO20",
      "via": "bowilkes",
      "date": "2021-06-14",
      },
      {
      "company": "@idealofsweden",
      "code": "CHELSYDW15",
      "via": "chelsydewitte",
      "date": "2021-06-14",
      },
      {
      "company": "@nakdfashion",
      "code": "femke20",
      "via": "femke.vermaas",
      "date": "2021-06-14",
      },
      {
      "company": "@idealofsweden",
      "code": "15mmacy",
      "via": "macyymichelle",
      "date": "2021-06-14",
      },
      {
      "company": "@iskovital",
      "code": "VERENA30",
      "via": "verena.friederich",
      "date": "2021-06-14",
      },
      {
      "company": "@nakdfashion",
      "code": "Lunahoogwerfx20",
      "via": "lunahoogwerf_",
      "date": "2021-06-14",
      },
      {
      "company": "@bara",
      "code": "ZOEG15",
      "via": "zoegijzen_",
      "date": "2021-06-14",
      },
      {
      "company": "@idealofsweden",
      "code": "BB15KELLYH",
      "via": "kellyhamelijnck",
      "date": "2021-06-14",
      },
      {
      "company": "@nakdfashion",
      "code": "chantalb25",
      "via": "chantbaltes",
      "date": "2021-06-14",
      },

      {
      "company": "@naifcare",
      "code": "NaiflovesNaomi",
      "via": "naomivanasofficial",
      "date": "2021-06-16",
      },
      {
      "company": "@nakdfashion",
      "code": "iris20",
      "via": "iriseigenhuis",
      "date": "2021-06-16",
      },
      {
      "company": "@sugarandspikes.shop",
      "code": "AYLA20",
      "via": "xmylifeasayla",
      "date": "2021-06-16",
      },
      {
      "company": "@lightinthebox",
      "code": "LSAK15",
      "via": "lisajkoster",
      "date": "2021-06-16",
      },
      {
      "company": "@idealofsweden",
      "code": "Emilie15off",
      "via": "emilie.terloo",
      "date": "2021-06-16",
      },
      {
      "company": "@lesjumelles.be",
      "code": "kimkotter",
      "via": "kimkotter",
      "date": "2021-06-16",
      },
      {
      "company": "@fittwear_official",
      "code": "FITTNATH15",
      "via": "nathalieejw",
      "date": "2021-06-16",
      },
      {
      "company": "@silkskin__",
      "code": "DJESSY30",
      "via": "djessyx",
      "date": "2021-06-16",
      },
      {
      "company": "@iskovital",
      "code": "MILOU30",
      "via": "milouhendriks",
      "date": "2021-06-16",
      },
      {
      "company": "@onceuponapp",
      "code": "NATALIE25",
      "via": "natalievijfhuizen",
      "date": "2021-06-16",
      },
      {
      "company": "@nakdfashion",
      "code": "kae25",
      "via": "kaesutherland",
      "date": "2021-06-16",
      },
      {
      "company": "@lolefashionnl",
      "code": "Lotte10",
      "via": "lotte.wullink",
      "date": "2021-06-16",
      },
      {
      "company": "@myproteinnl",
      "code": "FITWITHMARIT",
      "via": "fitwithmarit",
      "date": "2021-06-16",
      },
      {
      "company": "@tastea.eu",
      "code": "sylvana15",
      "via": "sylvana.elling",
      "date": "2021-06-16",
      },
      {
      "company": "@tastea.eu",
      "code": "BECOOL15",
      "via": "rebeccavandenhoek",
      "date": "2021-06-16",
      },
      {
      "company": "@nakdfashion",
      "code": "25fleur",
      "via": "fleurnijbacker",
      "date": "2021-06-16",
      },
      {
      "company": "@nakdfashion",
      "code": "lis25",
      "via": "lisvanderwijst",
      "date": "2021-06-16",
      },
      {
      "company": "@nakdfashion",
      "code": "Adalla20",
      "via": "adalla.99",
      "date": "2021-06-16",
      },
      {
      "company": "@stronger",
      "code": "20xemilie",
      "via": "emilie.terloo",
      "date": "2021-06-16",
      },
      {
      "company": "@idealofsweden",
      "code": "Mink15",
      "via": "brittmink_",
      "date": "2021-06-16",
      },
      {
      "company": "@villatent",
      "code": "#MONIQUE10",
      "via": "moniquesmit_insta",
      "date": "2021-06-16",
      },
      {
      "company": "@moostwanted",
      "code": "ISAYA15",
      "via": "elaisaya",
      "date": "2021-06-16",
      },
      {
      "company": "@theofficialsafira",
      "code": "ROXY15",
      "via": "roxysshizzle",
      "date": "2021-06-16",
      },
      {
      "company": "@blushbar_9700",
      "code": "PAULIEN15",
      "via": "paulienmullaertx",
      "date": "2021-06-16",
      },
      {
      "company": "@desenio",
      "code": "25LUNAL",
      "via": "lunalissens",
      "date": "2021-06-16",
      },
      {
      "company": "@fittwear_official",
      "code": "ANNICKFITT15",
      "via": "a.nnickk_",
      "date": "2021-06-16",
      },
      {
      "company": "@nakdfashion",
      "code": "COCOCHLOE20",
      "via": "cocochloe__",
      "date": "2021-06-16",
      },
      {
      "company": "@nakdfashion",
      "code": "nooshin25",
      "via": "annanooshin",
      "date": "2021-06-16",
      },
      {
      "company": "@albelli_nl",
      "code": "KIMJACOBS",
      "via": "kimjacobs",
      "date": "2021-06-16",
      },
      {
      "company": "@the_m_bar",
      "code": "LIS15",
      "via": "lisvanderwijst",
      "date": "2021-06-16",
      },


      {
      "company": "@passionforyouu",
      "code": "janice10",
      "via": "janiceblok",
      "date": "2021-06-22",
      },
      {
      "company": "@hellofreshnl",
      "code": "HELLOFAJAH",
      "via": "fayaofficial",
      "date": "2021-06-22",
      },
      {
      "company": "@onceuponapp",
      "code": "katja25",
      "via": "katjaschuurman",
      "date": "2021-06-22",
      },
      {
      "company": "@bymusthaves",
      "code": "Eline15",
      "via": "adalla.99",
      "date": "2021-06-22",
      },
      {
      "company": "@fortunateonestore",
      "code": "FREDLOVE",
      "via": "frederiqueligtvoet",
      "date": "2021-06-22",
      },
      {
      "company": "@margotbardot",
      "code": "HANNAH15",
      "via": "hannahdb_",
      "date": "2021-06-22",
      },
      {
      "company": "@agavefashio",
      "code": "LUCA20",
      "via": "lucaaa.xx",
      "date": "2021-06-22",
      },
      {
      "company": "@idealofsweden",
      "code": "NISAVB",
      "via": "nisavanbaelen",
      "date": "2021-06-22",
      },
      {
      "company": "@wietskeypmaa",
      "code": "BLACKBANANAS",
      "via": "wietskeypmaa",
      "date": "2021-06-22",
      },
      {
      "company": "@myproteinnl",
      "code": "FITENFLEX",
      "via": "marijnkuipers",
      "date": "2021-06-22",
      },
      {
      "company": "@juniqeartshop",
      "code": "BYYAM25",
      "via": "inspiredbyyam",
      "date": "2021-06-22",
      },
      {
      "company": "@gloryshopnl",
      "code": "JESSICA",
      "via": "jessicakuijpers",
      "date": "2021-06-22",
      },
      {
      "company": "@stronger",
      "code": "lottewullink20",
      "via": "lotte.wullink",
      "date": "2021-06-22",
      },
      {
      "company": "@itsmay.dk",
      "code": "amber15",
      "via": "amberdhaan",
      "date": "2021-06-22",
      },
      {
      "company": "@idealofsweden",
      "code": "Dilianex15",
      "via": "diliane.kwadijk",
      "date": "2021-06-22",
      },
      {
      "company": "@theofficialsafira",
      "code": "MACY15",
      "via": "macyymichelle",
      "date": "2021-06-22",
      },
      {
      "company": "@officialvicisupps",
      "code": "ROWENA10",
      "via": "rowenakonings_",
      "date": "2021-06-22",
      },
      {
      "company": "@hellofreshnl ",
      "code": "HELLOSARAH45",
      "via": "sarahchronis",
      "date": "2021-06-22",
      },
      {
      "company": "@lightinthebox",
      "code": "LSAK15",
      "via": "lisajkoster",
      "date": "2021-06-22",
      },
      {
      "company": "@stronger",
      "code": "20DEMI20",
      "via": "demiteeuwissen",
      "date": "2021-06-22",
      },
      {
      "company": "@remington.benelux",
      "code": "LAURA20",
      "via": "lauraponticorvo",
      "date": "2021-06-22",
      },
      {
      "company": "@chiquelle",
      "code": "DANIQUE20",
      "via": "daniqueschutjens",
      "date": "2021-06-22",
      },
      {
      "company": "@amebalance",
      "code": "FLORIANNE20",
      "via": "florianne.charlotte",
      "date": "2021-06-22",
      },
      {
      "company": "@happysnackbox",
      "code": "cynthiavandoorn",
      "via": "cynthiavandoorn",
      "date": "2021-06-22",
      },
      {
      "company": "@blackbananasnl",
      "code": "india20",
      "via": "indiasuy",
      "date": "2021-06-22",
      },



      {
      "company": "@gutsgusto ",
      "code": "KIYA20",
      "via": "kiya.vanrossum",
      "date": "2021-06-24",
      },
      {
      "company": "@flowshealth",
      "code": "FLORIANNE",
      "via": "florianne.charlotte",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "20XBBKNX",
      "via": "lunalissens",
      "date": "2021-06-24",
      },
      {
      "company": "@browboutiquebyfarah",
      "code": "Kellycaresse",
      "via": "kellycaresse",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "dyonne20",
      "via": "xdyonnex",
      "date": "2021-06-24",
      },
      {
      "company": "@viteezynl",
      "code": "jipp10",
      "via": "jippheldoorn",
      "date": "2021-06-24",
      },
      {
      "company": "@stratingschoenen",
      "code": "Robin10",
      "via": "robinhenneke.jpeg",
      "date": "2021-06-24",
      },
      {
      "company": "@myproteinnl",
      "code": "Nochtli",
      "via": "nochtlii",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "Valerie_20",
      "via": "valeriequirijns",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "Annefloor20",
      "via": "annefloorx",
      "date": "2021-06-24",
      },
      {
      "company": "@desenio",
      "code": "DEMI10",
      "via": "xdemi___x",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "20sylvana",
      "via": "sylvana.elling",
      "date": "2021-06-24",
      },
      {
      "company": "@sooof.nl",
      "code": "STACY15",
      "via": "stacydriesen",
      "date": "2021-06-24",
      },
      {
      "company": "@makeupstudioamsterdam",
      "code": "ELIZE10",
      "via": "mylifeaselize",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "milouh20",
      "via": "milouhendriks",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "kellyx20",
      "via": "kheeell",
      "date": "2021-06-24",
      },
      {
      "company": "@idealofsweden",
      "code": "jasmijnkremer15",
      "via": "jasmijnkremer",
      "date": "2021-06-24",
      },
      {
      "company": "@leolive",
      "code": "KAE10",
      "via": "kaesutherland",
      "date": "2021-06-24",
      },
      {
      "company": "@stronger",
      "code": "beljaars20",
      "via": "lindseybeljaars",
      "date": "2021-06-24",
      },
      {
      "company": "@idealofsweden",
      "code": "kimberlybrands15",
      "via": "kimberlybrands_",
      "date": "2021-06-24",
      },
      {
      "company": "@armedangels",
      "code": "KELLYCARESSE_15",
      "via": "kellycaresse",
      "date": "2021-06-24",
      },
      {
      "company": "@bymusthaves",
      "code": "ROXY15",
      "via": "roxysshizzle",
      "date": "2021-06-24",
      },
      {
      "company": "@hellofreshnl",
      "code": "HELLOABBEY",
      "via": "abbeyhoes",
      "date": "2021-06-24",
      },
      {
      "company": "@nakdfashion",
      "code": "SHULA20",
      "via": "shularoose",
      "date": "2021-06-24",
      },
      {
      "company": "@zaful",
      "code": "DON18",
      "via": "donnadaizy",
      "date": "2021-06-24",
      },

      {
      "company": "@lasistersfashion",
      "code": "danthescholten",
      "via": "danthescholtenx",
      "date": "2021-06-26",
      },
      {
      "company": "@sheinofficial",
      "code": "dantheQ2",
      "via": "danthescholtenx",
      "date": "2021-06-26",
      },
      {
      "company": "@sheinofficial",
      "code": "VA1181",
      "via": "wietskeypmaa",
      "date": "2021-06-26",
      },
      {
      "company": "@organicup",
      "code": "VERA20",
      "via": "veracamilla",
      "date": "2021-06-26",
      },
      {
      "company": "@highline.designs",
      "code": "lies10",
      "via": "lies_zhara",
      "date": "2021-06-26",
      },
      {
      "company": "@nakdfashion",
      "code": "20XBBKNX",
      "via": "lunalissens",
      "date": "2021-06-26",
      },
      {
      "company": "@kledingkut",
      "code": "kutluna",
      "via": "lunahoogwerf_",
      "date": "2021-06-26",
      },
      {
      "company": "@xlashscandinavia",
      "code": "danique20",
      "via": "daniquehogguer",
      "date": "2021-06-26",
      },
      {
      "company": "@loavies",
      "code": "20MICHELLE",
      "via": "michellelouwaars",
      "date": "2021-06-26",
      },
      {
      "company": "@tastea.eu",
      "code": "BECOOL15",
      "via": "emilie.terloo",
      "date": "2021-06-26",
      },
      {
      "company": "@loavies",
      "code": "LAMYNA20",
      "via": "lamynaspinder",
      "date": "2021-06-26",
      },
      {
      "company": "@loavies",
      "code": "Eline-20",
      "via": "adalla.99",
      "date": "2021-06-26",
      },
      {
      "company": "@loavies",
      "code": "INGE20",
      "via": "ingewildenberg",
      "date": "2021-06-26",
      },
      {
      "company": "@famousstore",
      "code": "charlotte10",
      "via": "charlottejanssen94",
      "date": "2021-06-26",
      },
      {
      "company": "@biostimenl",
      "code": "Biostime50Kim",
      "via": "kimjacobs",
      "date": "2021-06-26",
      },
      {
      "company": "@esteelauder.nl",
      "code": "MASCHA25",
      "via": "beautygloss",
      "date": "2021-06-26",
      },
      {
      "company": "@stronger",
      "code": "claudinebuisman20",
      "via": "claudinebuisman",
      "date": "2021-06-26",
      },
      {
      "company": "@twistshakebaby",
      "code": "55CLAUDINE",
      "via": "claudinebuisman",
      "date": "2021-06-26",
      },
      {
      "company": "@hellofreshbe",
      "code": "HELLOMARTA45",
      "via": "martaswiggers",
      "date": "2021-06-26",
      },
    ]
}
