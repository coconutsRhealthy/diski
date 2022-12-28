import { Component, OnInit } from '@angular/core';

import { DataDirective } from '../../data/data.directive';

import { MetaService } from '../../meta/meta.service';

@Component({
  selector: 'app-shein',
  templateUrl: './shein.component.html',
  styleUrls: ['./../../app.component.css']
})
export class SheinComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  isMenuCollapsed = true;

  allKorting = [];

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
    this.meta.updateMetaInfo("De nieuwste Shein kortingscodes", "diski.nl", "Kortingscode, Shein, Korting");
  }

  ngOnInit(): void {
    this.initializeAllKorting();

    this.dtOptions = {
      responsive: false,
      lengthChange: false,
      searching: false,
      pageLength: 50,
      columns: [
          { render: function(data: any, type: any, full: any, meta: any) {
              return data + "<button type=button class='btn copy_code_button' id='copybutton" + meta.row + "'" +
              "data-clipboard-text='" + data + "'" +
              "onclick=copyAnimation('" + meta.row + "');" +
              "ga('send','event','CopyCodeSh','shein','shein');>" +
              "<i class='fa fa-copy'></i><span class='done' aria-hidden='true'>Copied " + data + "</span>" + "</button>";
            }
          },
          { },
          { }
      ],
      order: [],
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
      if(this.getCompanyFromBaseInputLine(baseKortingEntries[i]) === "sheinofficial" ||
          this.getCompanyFromBaseInputLine(baseKortingEntries[i]) === "shein") {
        this.allKorting.push({
           "company": this.getCompanyFromBaseInputLine(baseKortingEntries[i]),
           "code": this.getDiscountCodeFromBaseInputLine(baseKortingEntries[i]),
           "percentage": this.getDiscountPercentageFromBaseInputLine(baseKortingEntries[i]),
           "date": this.getDateFromBaseInputLine(baseKortingEntries[i]),
           });
      }
    }
  }

  getCompanyFromBaseInputLine(baseInputLine) {
    return DataDirective.getCompanyFromBaseInputLine(baseInputLine);
  }

  getDiscountCodeFromBaseInputLine(baseInputLine) {
    return DataDirective.getDiscountCodeFromBaseInputLine(baseInputLine);
  }

  getDiscountPercentageFromBaseInputLine(baseInputLine) {
    return DataDirective.getDiscountPercentageFromBaseInputLine(baseInputLine);
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
