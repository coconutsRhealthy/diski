import { Directive } from "@angular/core"

@Directive({
  selector: 'app-data'
})
export class DataDirective {

  static dataArray = [
    "aap",
    "noot",
    "mies"
  ];

  public static getDataArray() {
    return this.dataArray;
  }

}
