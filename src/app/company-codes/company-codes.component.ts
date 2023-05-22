import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DataDirective } from '../data/data.directive';
import { MetaService } from '../meta/meta.service';

import { LOCALE_ID } from '@angular/core';

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
  discountCodes: { code: string, discount: string, date: string }[] = [];

  isMenuCollapsed = true;

  constructor(private route: ActivatedRoute, private datePipe: DatePipe, private meta: MetaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.company = params.get('company');
      var companyInString = this.capitalizeFirstLetter(this.company);
      this.meta.updateTitle("Werkende " + companyInString + " kortingscode in mei 2023");
      this.meta.updateMetaInfo("De nieuwste werkende kortingscode van " + companyInString + "; Bespaar met deze kortingscode op online shoppen bij " + companyInString, "diski.nl", companyInString + ", Kortingscode, Korting");
      this.extractDiscountCodes(this.company);
    });
  }

  private extractDiscountCodes(company: string): void {
    this.discountCodes = DataDirective.getDataArray()
      .filter(line => line.startsWith(company))
      .map(line => {
        const elements = line.split(', ');
        const code = elements[1];
        const discount = elements[2];
        const date = elements[elements.length - 1];
        return { code, discount, date };
      });
  }

  formatDate(date: string): string {
    const formattedDate = this.getDateFromDateString(date);
    return this.datePipe.transform(formattedDate, 'd MMM', '', 'nl');
  }

  getDateFromDateString(dateString) {
    dateString = dateString + "";
    var dateStringArray = dateString.split("-");
    var month = dateStringArray[0];
    var day = dateStringArray[1];
    return new Date(2023, month, day);
  }

  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
