import { Directive } from "@angular/core"

@Directive({
  selector: 'app-data'
})
export class DataDirective {

  public static getDataArray() {
    return this.dataArray;
  }

  public static getCompanyFromBaseInputLine(baseInputLine) {
    var company = baseInputLine.substring(0, baseInputLine.indexOf(","));
    return company;
  }

  public static getDiscountCodeFromBaseInputLine(baseInputLine) {
    var firstIndexOfComma = this.getPosition(baseInputLine, ", ", 1);
    var secondIndexOfComma = this.getPosition(baseInputLine, ", ", 2);
    var discountCode = baseInputLine.substring(firstIndexOfComma + 2, secondIndexOfComma);
    return discountCode;
  }

  public static getDiscountPercentageFromBaseInputLine(baseInputLine) {
    var secondIndexOfComma = this.getPosition(baseInputLine, ", ", 2);
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var discountCode = baseInputLine.substring(secondIndexOfComma + 2, thirdIndexOfComma);
    return discountCode;
  }

  public static getInfluencerFromBaseInputLine(baseInputLine) {
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var fourthIndexOfComma = this.getPosition(baseInputLine, ", ", 4);
    var influencer = baseInputLine.substring(thirdIndexOfComma + 2, fourthIndexOfComma);
    return influencer;
  }

  public static getDateFromBaseInputLine(baseInputLine) {
    var fourthIndexOfComma = this.getPosition(baseInputLine, ", ", 4);
    var date = baseInputLine.substring(fourthIndexOfComma + 2, baseInputLine.length);
    return date;
  }

  public static getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  public static getUniqueWebshops(): string[] {
    const webshopsSet = new Set<string>();

    this.dataArray.forEach(entry => {
      const webshop = entry.split(',')[0].trim();
      webshopsSet.add(webshop);
    });

    return Array.from(webshopsSet).sort();
  }

  static dataArray = [
    "shein, oonaq2, 15, janedoe, 10-22",
    "nakdfashion, xmaryna, 20, forevermaryna, 10-22",
    "idealofsweden, BBPLUS, 15, wgk, 10-22",
    "gutsgusto, SARAHD15, 15, sarah.dmry, 10-22",
  ];
}
