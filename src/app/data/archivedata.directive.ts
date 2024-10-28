import { Directive } from "@angular/core";

import { DataDirective } from './data.directive';

@Directive({
  selector: 'app-data'
})
export class ArchiveDataDirective {

  public static getDataArrayArchive() {
    return this.dataArrayArchive;
  }

  public static getCompanyFromBaseInputLine(baseInputLine) {
    return DataDirective.getCompanyFromBaseInputLine(baseInputLine);
  }

  public static getDiscountCodeFromBaseInputLine(baseInputLine) {
    return DataDirective.getDiscountCodeFromBaseInputLine(baseInputLine);
  }

  public static getInfluencerFromBaseInputLine(baseInputLine) {
    return DataDirective.getInfluencerFromBaseInputLine(baseInputLine);
  }

  public static getDateFromBaseInputLine(baseInputLine) {
    return DataDirective.getDateFromBaseInputLine(baseInputLine);
  }

  public static getPosition(string, subString, index) {
    return DataDirective.getPosition(string, subString, index);
  }

  public static getUniqueWebshops(): string[] {
    const webshopsSet = new Set<string>();

    this.dataArrayArchive.forEach(entry => {
      const webshop = entry.split(',')[0].trim();
      webshopsSet.add(webshop);
    });

    return Array.from(webshopsSet).sort();
  }

  static dataArrayArchive = [
    "shein, 24q3sophiexx, 15, __sophie.louisee, 09-26",
    "nakdfashion, deler, 20, mdeler, 09-26",
    "loavies (iig 26sep), FLEUR20, 20, fleurnijbacker, 09-26",
    "desenio, XGELD, 30+10, wgk, 09-26",
  ];
}
