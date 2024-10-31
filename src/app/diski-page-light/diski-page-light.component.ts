import { Component, OnInit } from '@angular/core';
import { DiscountsService } from '../services/discounts.service';

interface Discount {
  company: string;
  discountCode: string;
  percentage: number;
  date: string;
}

@Component({
  selector: 'app-diski-page-light',
  templateUrl: './diski-page-light.component.html',
  styleUrls: ['./diski-page-light.component.css', './../app.component.css']
})
export class DiskiPageLightComponent implements OnInit {
  discounts: Discount[] = [];
  filteredDiscounts: Discount[] = [];
  searchTerm: string = '';
  page: number = 1;
  itemsPerPage: number = 50;

  isMenuCollapsed = true;

  constructor(private discountsService: DiscountsService) {}

  ngOnInit() {
    this.discountsService.getDiscounts().subscribe((data) => {
      this.discounts = data.map((line) => {
        const [company, discountCode, percentage, , date] = line.split(', ');
        return {
          company,
          discountCode,
          percentage: +percentage,
          date,
        };
      });
      this.filteredDiscounts = this.discounts;
    });
  }

  onSearch() {
    this.filteredDiscounts = this.discounts.filter((discount) =>
      discount.company.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.page = 1;
  }

  get paginatedDiscounts(): Discount[] {
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredDiscounts.slice(start, end);
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredDiscounts.length / this.itemsPerPage);
  }
}
