import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebshopNameService {

  private webshopNames = {
    'bylashbabe': 'Bylashbabe',
    'myproteinnl': 'MyProtein',
    'veromoda': 'Veromoda',
    'bjornborg': 'Bjorn Borg',
    'hunkemoller': 'Hunkemoller'
  };

  constructor() { }

  public getWebshopName(webshop: string): string | undefined {
    return this.webshopNames[webshop];
  }
}
