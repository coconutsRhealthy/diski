import { Component, OnInit } from '@angular/core';

import { DataDirective } from '../../data/data.directive';

import { MetaService } from '../../meta/meta.service';

@Component({
  selector: 'app-loavies',
  templateUrl: './loavies.component.html',
  styleUrls: ['./../../app.component.css']
})
export class LoaviesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  isMenuCollapsed = true;

  allKorting = [];

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
    this.meta.updateMetaInfo("De nieuwste Loavies kortingscodes", "diski.nl", "Kortingscode, Loavies, Korting");
  }

  ngOnInit(): void {
    this.initializeAllKorting();

    this.dtOptions = {
      responsive: false,
      lengthChange: false,
      searching: false,
      columns: [
          { render: function(data: any, type: any, full: any, meta: any) {
              return data + "<button type=button class=btn btn-secondary btn-sm id='copybutton" + meta.row + "'" +
              "onclick=copyToClipboard('" + data + "','" + meta.row + "')>" +
              "<i class='fa fa-copy'></i><span class='done' aria-hidden='true'>copied " + data + "</span>" + "</button>";
            }
          },
          { },
          { }
      ],
      pageLength: 50,
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
      if(this.getCompanyFromBaseInputLine(baseKortingEntries[i]) === "@loavies") {
        this.allKorting.push({
           "company": this.getCompanyFromBaseInputLine(baseKortingEntries[i]),
           "code": this.getDiscountCodeFromBaseInputLine(baseKortingEntries[i]),
           "percentage": this.getDiscountPercentageFromBaseInputLine(baseKortingEntries[i]),
           "date": this.getDateFromBaseInputLine(baseKortingEntries[i]),
           });
      }
    }
  }

  public onClipboardCopy(successful: boolean): void {
      alert(successful);
  }

  eije() {
    alert("hmm");
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
