import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffiliateLinkService {

  private affiliateLinks = {
    'bylashbabe': 'https://bylashbabe.com?sca_ref=3638091.TQRuyJNRG1',
    'myproteinnl': 'https://www.stylink.it/L3q2QUyG0l',
    'veromoda': 'https://www.stylink.it/AdZbXhpwmw',
    'bjornborg': 'https://www.stylink.it/e7pw4T79X9',
    'hunkemoller': 'https://www.stylink.it/7oZm3T2Y0n',
    'yesstyle': 'https://www.yesstyle.com/en/home.html?rco=YESGIRL23&utm_term=YESGIRL23&utm_medium=Influencer&utm_source=dynamic&mcg=influencer',
    'asos': 'https://www.stylink.it/lg3mpUa423',
    'stevemaddeneu': 'https://www.stylink.it/AdZbXh7gYM',
    'lookfantastic': 'https://www.stylink.it/b46wYiyYx3',
    'hm': 'https://www.stylink.it/jnNwDTowPY',
    'zonnebrillencom': 'https://www.zonnebrillen.com/brillen/?tt=29925_12_448474_diszb&r=',
    'bodyandfit_nl': 'https://www.bodyandfit.com/nl-nl/bodyfit?tt=11113_12_448474_disbw&r=',
    'westwing': 'https://www.stylink.it/ZqG7gSdn0q',
    'lightinthebox': 'https://www.stylink.it/nkP3nIRNj0',
    'desenio': 'https://www.desenio.com/?ref=bb-rb7z23',
    'idealofsweden': 'https://www.idealofsweden.eu/?utm_medium=brand-ambassador&ref=bb-rb7z23',
    'rihoas': 'https://www.dpbolvw.net/click-100864181-15289205',
    'zaful': 'https://lt45.net/c/?si=14546&li=1774866&wi=387380&ws=zaful',
    'superdry': 'https://rkn3.net/c/?si=14965&li=1650750&wi=387380&ws=superdry',
  };

  constructor() { }

  public getAffiliateLink(company: string): string | undefined {
    return this.affiliateLinks[company];
  }
}