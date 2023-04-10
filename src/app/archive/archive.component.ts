import { Component, OnInit } from '@angular/core';
import { DataDirective } from '../data/data.directive';
import { ArchiveDataDirective } from '../data/archivedata.directive';
import { MetaService } from '../meta/meta.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CodeDetailModalComponent } from '../code-detail-modal/code-detail-modal.component';

import { AffiliateLinkService } from '../data/affiliate-link.service';

declare global {
  interface Window {
    sendToGa: (element_id_index: number) => void;
  }
}

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./../app.component.css']
})
export class ArchiveComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  isMenuCollapsed = true;

  allKorting = [];

  sendToGa = window.sendToGa;

  constructor(private meta: MetaService, private modalService: NgbModal, private affiliateLinkService: AffiliateLinkService) {
    this.meta.updateTitle();
    this.meta.updateMetaInfo("Alle kortingscodes van Q1 2022; Bespaar op online shoppen via diski.nl", "diski.nl", "Kortingscodes Q1 2022");
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
    var baseKortingEntries = ArchiveDataDirective.getDataArrayArchive();

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
    var url = 'https://www.diski.nl/archief?i=' + encodeURIComponent(codeTableIndex)
    window.open(url, '_blank');
    location.href = this.affiliateLinkService.giveAffiliateLink();
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
    var baseCodeLine = ArchiveDataDirective.getDataArrayArchive()[codeTableIndex];
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
