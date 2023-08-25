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
    'asos(outlet)': 'https://www.stylink.it/lg3mpUa423',
    'stevemaddeneu': 'https://www.stylink.it/AdZbXh7gYM',
    'lookfantastic': 'https://www.stylink.it/b46wYiyYx3',
    'hm': 'https://www.stylink.it/jnNwDTowPY',
    'bodyandfit.com': 'https://www.bodyandfit.com/nl-nl/bodyfit?tt=11113_12_448474_disbw&r=',
    'westwing': 'https://www.stylink.it/ZqG7gSdn0q',
    'lightinthebox': 'https://www.stylink.it/nkP3nIRNj0',
    'idealofsweden': 'https://www.idealofsweden.eu/?utm_medium=brand-ambassador&ref=bb-m47m59',
    'rihoas': 'https://www.dpbolvw.net/click-100864181-15289205',
    'zaful': 'https://lt45.net/c/?si=14546&li=1774866&wi=387380&ws=zaful',
    'superdry': 'https://rkn3.net/c/?si=14965&li=1650750&wi=387380&ws=superdry',
    'geurwolkje': 'https://tc.tradetracker.net/?c=35006&m=12&a=448474&r=disgw&u=%2F',
    'aliexpress': 'https://tc.tradetracker.net/?c=15640&m=12&a=448474&r=disax&u=%2F',
    'adidas.nl': 'https://tc.tradetracker.net/?c=31384&m=1634602&a=448474&r=disad&u=',
    'nanabeebi': 'https://tc.tradetracker.net/?c=30770&m=12&a=448474&r=disna&u=%2F',
    'farfetch': 'https://tc.tradetracker.net/?c=34152&m=12&a=448474&r=disfa&u=%2F',
    'burga': 'https://jdt8.net/c/?si=17538&li=1759473&wi=387380&ws=burga',
    'reginajewelry': 'www.reginajewelry.co/?ref=bb-jezj8p',
    'only': 'https://www.stylink.it/5xZndfMoYe',
    'nike': 'https://www.stylink.it/vR0jnhYnlR',
  };

  constructor() { }

  public getAffiliateLink(company: string): string | undefined {
    return this.affiliateLinks[company];
  }
}
