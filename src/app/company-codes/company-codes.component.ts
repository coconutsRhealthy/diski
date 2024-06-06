import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DataDirective } from '../data/data.directive';
import { ArchiveDataDirective } from '../data/archivedata.directive';
import { MetaService } from '../meta/meta.service';

import { LOCALE_ID } from '@angular/core';
import { ElementRef } from '@angular/core';

import { WebshopNameService } from '../data/webshop-name.service';
import { CompanySeoTextService } from '../data/company-seo-text.service';

@Component({
  selector: 'app-company-codes',
  templateUrl: './company-codes.component.html',
  styleUrls: ['./../app.component.css'],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'nl' }, // Set the locale to Dutch
  ]
})
export class CompanyCodesComponent implements OnInit {

  company: string;
  webshopName: string;
  companySeoText: string;
  discountCodes: { code: string, discount: string, date: string }[] = [];

  isMenuCollapsed = true;

  constructor(private route: ActivatedRoute, private datePipe: DatePipe, private meta: MetaService,
      private webshopNameService: WebshopNameService, private companySeoTextService: CompanySeoTextService,
      private elementRef: ElementRef) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.company = params.get('company');
      this.extractDiscountCodes(this.company);

      if(this.discountCodes.length > 0) {
        this.webshopName = this.getWebshopName(this.company);
        this.companySeoText = this.companySeoTextService.getCompanySeoText(this.company);
        var monthYear = this.meta.getDateString();
        this.meta.updateTitle("Werkende " + this.webshopName + " kortingscode in " + monthYear);
        this.meta.updateMetaInfo("De nieuwste werkende kortingscode van " + this.webshopName + " in " + monthYear + "; Bespaar met deze kortingscode op online shoppen bij " + this.webshopName, "diski.nl", this.webshopName + ", Kortingscode, Korting");
      } else {
        this.meta.updateTitle("404 Deze pagina is niet gevonden op diski.nl");
        this.meta.updateMetaInfo("404 Deze pagina bestaat niet op diski.nl", "diski.nl", "404");
      }
    });
    this.elementRef.nativeElement.scrollTop = 0;
  }

  private extractDiscountCodes(company: string): void {
    var recentDiscountCodes = DataDirective.getDataArray();
    var archiveDiscountCodes = ArchiveDataDirective.getDataArrayArchive();
    var allDiscountCodes = recentDiscountCodes.concat(archiveDiscountCodes);

    this.discountCodes = allDiscountCodes
      .filter(line => line.startsWith(company + ", ") || line.startsWith(company + " ("))
      .map(line => {
        const elements = line.split(', ');
        const code = elements[1];
        const discount = elements[2];
        const date = elements[elements.length - 1];
        return { code, discount, date };
      });

    if (company === 'desenio') {
      this.discountCodes.shift();
    }
  }

  formatDate(date: string): string {
    const formattedDate = this.getDateFromDateString(date);
    return this.datePipe.transform(formattedDate, 'd MMM', '', 'nl');
  }

  getDateFromDateString(dateString) {
    dateString = dateString + "";
    var dateStringArray = dateString.split("-");
    var month = dateStringArray[0] - 1;
    var day = dateStringArray[1];
    return new Date(2023, month, day);
  }

  getWebshopName(companyName: string): string {
    var webshopName = this.webshopNameService.getWebshopName(companyName);

    if(webshopName === undefined) {
      webshopName = companyName.charAt(0).toUpperCase() + companyName.slice(1);
    }

    return webshopName;
  }

  shouldDisplayPercent(discount) {
    var shouldDisplayPercent = false;

    if(isFinite(discount) && discount.indexOf('€') === -1) {
      shouldDisplayPercent = true;
    }

    return shouldDisplayPercent;
  }
}
