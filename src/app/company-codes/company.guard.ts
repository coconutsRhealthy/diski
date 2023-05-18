import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CompanyGuard implements CanActivate {
  private allowedCompanies = ['desenio', 'nakdfashion', 'idealofsweden'];

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const company = route.paramMap.get('company');

    if (this.allowedCompanies.includes(company)) {
      return true; // Allow navigation to the component
    } else {
      //this.router.navigate(['contact']); // Redirect to default route
      //this.router.navigate(['/']); // Redirect to default route
      this.router.navigate(['']); // Redirect to default route
      return false;
    }
  }
}
