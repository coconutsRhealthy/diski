import { Component, OnInit } from '@angular/core';

import { DataDirective } from '../data/data.directive';
import { MetaService } from '../meta/meta.service';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CodeDetailModalComponent } from '../code-detail-modal/code-detail-modal.component';

@Component({
  selector: 'app-diski-page',
  templateUrl: './diski-page.component.html',
  styleUrls: ['./../app.component.css']
})
export class DiskiPageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  isMenuCollapsed = true;

  allKorting = [];

  constructor(private meta: MetaService, private router: Router, private modalService: NgbModal) {
    this.meta.updateTitle();
    this.meta.updateMetaInfo("De nieuwste werkende kortingscodes van een groot aantal webshops; Bespaar op online shoppen via diski.nl", "diski.nl", "Kortingscode, Korting");
  }

  ngOnInit(): void {
    this.initializeAllKorting();

    this.dtOptions = {
      responsive: false,
      lengthChange: false,
      pageLength: 50,
      columns: [
          { },
          { },
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

    const queryParams = new URLSearchParams(window.location.search);
    if(queryParams.has('i')) {
      this.openCodeDetailModal(queryParams.get('i'));
    }
  }

  initializeAllKorting() {
    var baseKortingEntries = DataDirective.getDataArray();

    for(var i = 0; i < baseKortingEntries.length; i++) {
      this.allKorting.push({
         "company": this.getCompanyFromBaseInputLine(baseKortingEntries[i]),
         "code": this.getDiscountCodeFromBaseInputLine(baseKortingEntries[i]),
         "percentage": this.getDiscountPercentageFromBaseInputLine(baseKortingEntries[i]),
         "date": this.getDateFromBaseInputLine(baseKortingEntries[i]),
         });
    }
  }

  openNewPageWithCodeDetailModal(codeTableIndex) {
    var url = '?i=' + encodeURIComponent(codeTableIndex)
    window.open(url, '_blank');
    location.href = 'https://example.com/';
  }

  openCodeDetailModal(codeTableIndex) {
    const codeData = this.getCodeDataForIndex(codeTableIndex);
    const modalRef = this.modalService.open(CodeDetailModalComponent);
    modalRef.componentInstance.code = codeData['code'];
    modalRef.componentInstance.company = codeData['company'].toUpperCase();
    modalRef.componentInstance.discountPercentage = codeData['discountPercentage'];
    modalRef.componentInstance.codeDate = codeData['codeDate'];
  }

  getCodeDataForIndex(codeTableIndex) {
    var baseCodeLine = DataDirective.getDataArray()[codeTableIndex];
    const codeData = {};
    codeData['code'] = DataDirective.getDiscountCodeFromBaseInputLine(baseCodeLine);
    codeData['company'] = DataDirective.getCompanyFromBaseInputLine(baseCodeLine);
    codeData['discountPercentage'] = DataDirective.getDiscountPercentageFromBaseInputLine(baseCodeLine);
    codeData['codeDate'] = DataDirective.getDateFromBaseInputLine(baseCodeLine);
    return codeData;
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
