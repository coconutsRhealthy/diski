import { Component } from '@angular/core';

import { DataDirective } from '../data/data.directive';

@Component({
  selector: 'influ-table',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css']
})
export class InstaComponent {

  tableHeight = 500;
  tableWidth = 500;
  tableFontSize = 18;
  tableRowHeight = 0.0004;
  tableRowLineHeight = 0.0004;
  tableRowMinHeight = 0.0004;
  tableLineAndFontColor = "brown";
  tableBackgroundColor = "green";
  kortingDate = "1 jan";
  kortingDateFontSize = 10;
  headerFontSize = 14;
  bodyFontSize = 14;
  dotsCompany = "";
  dotsCode = "";
  dotsVia = "";
  startDateForPostString = "2021-07-05";
  maxAmountForPost = "3";

  tiktokSize = false;
  tablePaddingLeft = "12px";
  tablePaddingTop = "12px";
  tablePaddingRight = "12px";

  instaDiscountEntries = [];

  constructor() { }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("insta-table");
    switching = true;
    dir = "asc";

    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  addDot(column) {
    if(column === 'company') {
      this.dotsCompany = this.dotsCompany + ".";
    } else if(column === 'code') {
      this.dotsCode = this.dotsCode + ".";
    } else if(column === 'via') {
      this.dotsVia = this.dotsVia + ".";
    }
  }

  removeDot(column) {
    if(column === 'company') {
      this.dotsCompany = this.dotsCompany.replace(/.$/,"");
    } else if(column === 'code') {
      this.dotsCode = this.dotsCode.replace(/.$/,"");
    } else if(column === 'via') {
      this.dotsVia = this.dotsVia.replace(/.$/,"");
    }
  }

  setTableBackgroundColour(hex) {
    this.tableBackgroundColor = hex;
  }

  toggleTableLayout() {
    this.tiktokSize = !this.tiktokSize;

    if(this.tiktokSize) {
      this.tablePaddingLeft = "30px";
      this.tablePaddingTop = "45px";
      this.tablePaddingRight = "30px";

      var element = document.querySelector('#insta-table') as HTMLElement;
      var tableWidth = element.offsetWidth;

      var desiredTiktokTableHeight = ((tableWidth / 9) * 16) * 0.94;
      this.tableHeight = desiredTiktokTableHeight;
    } else {
      this.tablePaddingLeft = "12px";
      this.tablePaddingTop = "12px";
      this.tablePaddingRight = "12px";

      this.tableWidth = 500;
      this.tableHeight = 500;
    }
  }

  generateInstaPost() {
    this.instaDiscountEntries = [];
    var baseData = DataDirective.getDataArray();
    var baseKortingEntries = [];

    for(var i = 0; i < baseData.length; i++) {
      baseKortingEntries.push(baseData[i]);
    }

    baseKortingEntries.reverse();
    var startDate = new Date(this.startDateForPostString);

    for(var i = 0; i < baseKortingEntries.length; i++) {
      var dateString = this.getDateFromBaseInputLine(baseKortingEntries[i]);
      var date = new Date(dateString);

      if(date >= startDate) {
        this.instaDiscountEntries.push({
           "company": this.getCompanyFromBaseInputLine(baseKortingEntries[i]),
           "code": this.getDiscountCodeFromBaseInputLine(baseKortingEntries[i]),
           "via": this.getInfluencerFromBaseInputLine(baseKortingEntries[i]),
           "date": this.getDateFromBaseInputLine(baseKortingEntries[i]),
           });
      }
    }

    this.instaDiscountEntries = this.instaDiscountEntries.slice(0, parseInt(this.maxAmountForPost));
  }

  getCompanyFromBaseInputLine(baseInputLine) {
    return DataDirective.getCompanyFromBaseInputLine(baseInputLine);
  }

  getDiscountCodeFromBaseInputLine(baseInputLine) {
    return DataDirective.getDiscountCodeFromBaseInputLine(baseInputLine);
  }

  getInfluencerFromBaseInputLine(baseInputLine) {
    return DataDirective.getInfluencerFromBaseInputLine(baseInputLine);
  }

  getDateFromBaseInputLine(baseInputLine) {
    return DataDirective.getDateFromBaseInputLine(baseInputLine);
  }

  getPosition(string, subString, index) {
    return DataDirective.getPosition(string, subString, index);
  }
}
