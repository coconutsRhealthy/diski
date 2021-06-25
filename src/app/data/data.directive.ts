import { Directive } from "@angular/core"

@Directive({
  selector: 'app-data'
})
export class DataDirective {

  static dataArray = [
    "@amebalance, FLORIANNE20, florianne.charlotte, 2021-06-10",
    "@famousstore, Annefloor10, annefloorx, 2021-06-10",
    "@editedofficial, ROOS20JUNE, moderosaofficial, 2021-06-10"
  ];

  public static getDataArray() {
    return this.dataArray;
  }

}
