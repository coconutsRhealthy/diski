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
    "company": "@nakdfashion",
    "code": "JULIA20",
    "via": "juliamekkes",
    "date": "2019-12-31",
    },
    {
    "company": "@idealofsweden",
    "code": "JEN30",
    "via": "jenniefrom",
    "date": "2019-09-13",
    },
    {
    "company": "@icaniwill",
    "code": "JESSICA110",
    "via": "jessicadevries",
    "date": "2020-01-20",
    },
    {
    "company": "@nakdfashion",
    "code": "JULIA20",
    "via": "juliamekkes",
    "date": "2019-12-31",
    },
    {
    "company": "@idealofsweden",
    "code": "JEN30",
    "via": "jenniefrom",
    "date": "2019-09-13",
    },
    {
    "company": "@icaniwill",
    "code": "JESSICA110",
    "via": "jessicadevries",
    "date": "2020-01-20",
    },
    {
    "company": "@nakdfashion",
    "code": "JULIA20",
    "via": "juliamekkes",
    "date": "2019-12-31",
    },
    {
    "company": "@idealofsweden",
    "code": "JEN30",
    "via": "jenniefrom",
    "date": "2019-09-13",
    },
    {
    "company": "@icaniwill",
    "code": "JESSICA110",
    "via": "jessicadevries",
    "date": "2020-01-20",
    },
    {
    "company": "@nakdfashion",
    "code": "JULIA20",
    "via": "juliamekkes",
    "date": "2019-12-31",
    },
    {
    "company": "@idealofsweden",
    "code": "JEN30",
    "via": "jenniefrom",
    "date": "2019-09-13",
    },
    {
    "company": "@icaniwill",
    "code": "JESSICA110",
    "via": "jessicadevries",
    "date": "2020-01-20",
    },
    {
    "company": "@nakdfashion",
    "code": "JULIA20",
    "via": "juliamekkes",
    "date": "2019-12-31",
    },
    {
    "company": "@idealofsweden",
    "code": "JEN30",
    "via": "jenniefrom",
    "date": "2019-09-13",
    },
    {
    "company": "@icaniwill",
    "code": "JESSICA110",
    "via": "jessicadevries",
    "date": "2020-01-20",
    },
    {
    "company": "@nakdfashion",
    "code": "JULIA20",
    "via": "juliamekkes",
    "date": "2019-12-31",
    },
    {
    "company": "@idealofsweden",
    "code": "JEN30",
    "via": "jenniefrom",
    "date": "2019-09-13",
    },
    {
    "company": "@icaniwill",
    "code": "JESSICA110",
    "via": "jessicadevries",
    "date": "2020-01-20",
    },
    {
    "company": "@nakdfashion",
    "code": "JULIA20",
    "via": "juliamekkes",
    "date": "2019-12-31",
    },
    {
    "company": "@idealofsweden",
    "code": "JEN30",
    "via": "jenniefrom",
    "date": "2019-09-13",
    },
    {
    "company": "@icaniwill",
    "code": "JESSICA110",
    "via": "jessicadevries",
    "date": "2020-01-20",
    },
  ]

}
