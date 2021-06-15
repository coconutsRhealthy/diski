import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diski-page',
  templateUrl: './diski-page.component.html',
  styleUrls: ['./diski-page.component.css']
})
export class DiskiPageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
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

  allKorting = [
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
  ]

}
