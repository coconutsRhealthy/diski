import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { DataDirective } from '../data/data.directive';

@Injectable({ providedIn: 'root' })
export class CompanyGuard implements CanActivate {
  private allowedCompanies = [];

  constructor(private router: Router) {
    this.allowedCompanies = DataDirective.getUniqueWebshops();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const company = route.paramMap.get('company');

    if (this.allowedCompanies.includes(company)) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
