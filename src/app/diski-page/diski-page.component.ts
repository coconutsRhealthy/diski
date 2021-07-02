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
      responsive: true,
      lengthChange: false,
      pageLength: 50,
      order: [ 3, "desc" ],
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
    return DataDirective.getCompanyFromBaseInputLine(baseInputLine);
  }

  getDiscountCodeFromBaseInputLine(baseInputLine) {
    return DataDirective.getDiscountCodeFromBaseInputLine(baseInputLine);
  }

  getInfluencerFromBaseInputLine(baseInputLine) {
    return DataDirective.getInfluencerFromBaseInputLine(baseInputLine);
  }

  getDateFromBaseInputLine(baseInputLine) {
    return DataDirective.getDateFromBaseInputLine(baseInputLine);
  }

  getPosition(string, subString, index) {
    return DataDirective.getPosition(string, subString, index);
  }
}
