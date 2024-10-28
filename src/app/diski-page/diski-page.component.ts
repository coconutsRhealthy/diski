import { Component, OnInit } from '@angular/core';

import { DataDirective } from '../data/data.directive';
import { MetaService } from '../meta/meta.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CodeDetailModalComponent } from '../code-detail-modal/code-detail-modal.component';

import { AffiliateLinkService } from '../data/affiliate-link.service';

declare global {
  interface Window {
    sendCopyCodeToGa: (element_id_index: number) => void;
  }
}

@Component({
  selector: 'app-diski-page',
  templateUrl: './diski-page.component.html',
  styleUrls: ['./../app.component.css']
})
export class DiskiPageComponent implements OnInit {
  isMenuCollapsed = true;

  allKorting = [];

  sendCopyCodeToGa = window.sendCopyCodeToGa;

  constructor(private meta: MetaService, private modalService: NgbModal, private affiliateLinkService: AffiliateLinkService) {
    var monthYear = this.meta.getDateString();
    this.meta.updateTitle("Diski | Online shoppen met kortingscodes in " + monthYear);
    this.meta.updateMetaInfo("De nieuwste werkende kortingscodes van een groot aantal webshops; Bespaar op online shoppen in " + monthYear + " via diski.nl", "diski.nl", "Kortingscode, Korting");
  }

  ngOnInit(): void {
    this.initializeAllKorting();

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

  affiliateModalAction(company, codeTableIndex) {
    if(this.affiliateLinkService.getAffiliateLink(company) !== undefined) {
      this.openNewPageWithCodeDetailModal(codeTableIndex, this.affiliateLinkService.getAffiliateLink(company));
    } else {
      this.openCodeDetailModal(codeTableIndex);
    }
  }

  openNewPageWithCodeDetailModal(codeTableIndex, affiliateLink) {
    var url = 'https://www.diski.nl?i=' + encodeURIComponent(codeTableIndex)
    window.open(url, '_blank');
    location.href = affiliateLink;
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
