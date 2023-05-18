import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DataDirective } from '../data/data.directive';

import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-company-codes',
  templateUrl: './company-codes.component.html',
  styleUrls: ['./company-codes.component.css'],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'nl' }, // Set the locale to Dutch
  ]
})
export class CompanyCodesComponent implements OnInit {

  company: string;
  discountCodes: { code: string, discount: string, date: string }[] = [];

  constructor(private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.company = params.get('company');
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
    const formattedDate = new Date(date);
    //return this.datePipe.transform(formattedDate, 'd MMM');
    return this.datePipe.transform(formattedDate, 'd MMM', '', 'nl');
  }
}
