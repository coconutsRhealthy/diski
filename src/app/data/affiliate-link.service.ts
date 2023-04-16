import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffiliateLinkService {

  private eligibleCompanies = [
    'OTTO'
  ];

  private affiliateLinks = {
    'ARKET': 'https://www.linkmaker.io/q2zzPclJav',
    'ASOS': 'https://www.linkmaker.io/kPJJ0HwvYo',
    'C&A': 'https://www.linkmaker.io/q2zzPcl64X',
    'FOOTLOCKER': 'https://www.linkmaker.io/QPGG1H2kZ9',
    'MONKI': 'https://www.linkmaker.io/NMooxtRw42',
    'OMODA': 'https://www.linkmaker.io/6ZVVMFbwPR',
    'P&C': 'https://www.linkmaker.io/YQBBkteGNR',
    'PIECES': 'https://www.linkmaker.io/OMlljt9wJp',
    'SSENSE': 'https://www.linkmaker.io/3ZVV2FBmnr',
    'VEROMODA': 'https://www.linkmaker.io/xaNN0saRgG',
    'VILA': 'https://www.linkmaker.io/wpBBncQ5L7',
    'DESIGUAL': 'https://www.linkmaker.io/kPJJ0HwwMb',
    'WESTWING': 'https://www.linkmaker.io/GQVV2txx0D',
    'NIKE': 'https://www.linkmaker.io/q2zzPcllO4',
    'ONLY': 'https://www.linkmaker.io/7wVVdtZZ04',
    'COS': 'https://www.linkmaker.io/JrVV6S99QA',
    'SNIPES': 'https://www.linkmaker.io/ojGGPCeeQq',
    'OTTO': 'https://www.linkmaker.io/PMee1tG4Ra'
  };

  constructor() { }

  giveAffiliateLink() {
    const eligibleIndex = Math.floor(Math.random() * this.eligibleCompanies.length);
    const companyName = this.eligibleCompanies[eligibleIndex];
    return this.affiliateLinks[companyName];
  }
}
