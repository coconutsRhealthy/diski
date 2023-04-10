import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffiliateLinkService {

  private affiliateLinks = [
    'https://www.linkmaker.io/wpBBncQ5L7',
    'https://www.linkmaker.io/3ZVV2FBmnr',
    'https://www.linkmaker.io/OMlljt9wJp',
    'https://www.linkmaker.io/q2zzPclJav'
  ];

  constructor() { }

  giveAffiliateLink() {
    const randomIndex = Math.floor(Math.random() * this.affiliateLinks.length);
    return this.affiliateLinks[randomIndex];
  }
}
