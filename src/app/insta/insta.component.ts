import { Component } from '@angular/core';

import { DataDirective } from '../data/data.directive';

import {firstBy} from "thenby";

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
  startDateForPostString = "2021-07-05";
  maxAmountForPost = "3";

  tiktokSize = false;
  tablePaddingLeft = "12px";
  tablePaddingTop = "12px";
  tablePaddingRight = "12px";

  instaDiscountEntries = [];

  aspectRatio = "-1";

  constructor() { }

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

      var desiredTiktokTableHeight = ((tableWidth / 9) * 16);
      this.tableHeight = desiredTiktokTableHeight;
    } else {
      this.tablePaddingLeft = "12px";
      this.tablePaddingTop = "12px";
      this.tablePaddingRight = "12px";

      this.tableWidth = 500;
      this.tableHeight = 500;
    }
  }

  setAspectRatio45() {
      var element = document.querySelector('#insta-table') as HTMLElement;
      var tableHeight = element.offsetHeight;
      var desiredTableWidth = ((tableHeight / 5) * 4);
      this.tableWidth = desiredTableWidth;
  }

  setAspectRatio1on1() {
      var element = document.querySelector('#insta-table') as HTMLElement;
      var tableHeight = element.offsetHeight;
      var desiredTableWidth = ((tableHeight / 5) * 4);
      this.tableWidth = desiredTableWidth;
  }

  calculateAspectRatio() {
      var element = document.querySelector('#insta-table') as HTMLElement;
      var tableHeight = element.offsetHeight;
      var tableWidth = element.offsetWidth;
      var calcTableWidth = 4 as const;
      var calcTableHeight = (tableHeight / tableWidth) * 4;
      this.aspectRatio = "" + calcTableWidth + " : " + calcTableHeight;
  }

  defaultSizeTable() {
    this.tableWidth = 500;
    this.tableHeight = 500;
  }

  generateInstaPost() {
    this.instaDiscountEntries = [];
    var baseData = DataDirective.getDataArray();
    var baseKortingEntries = [];

    for(var i = 0; i < baseData.length; i++) {
      baseKortingEntries.push(baseData[i]);
    }

    baseKortingEntries.reverse();
    var startDate = this.getDateFromDateString(this.startDateForPostString);

    for(var i = 0; i < baseKortingEntries.length; i++) {
      var dateString = this.getDateFromBaseInputLine(baseKortingEntries[i]);
      var date = this.getDateFromDateString(dateString);

      if(date >= startDate) {
        this.instaDiscountEntries.push({
           "company": this.getCompanyFromBaseInputLine(baseKortingEntries[i]),
           "code": this.getDiscountCodeFromBaseInputLine(baseKortingEntries[i]),
           "via": this.getInfluencerFromBaseInputLine(baseKortingEntries[i]),
           "percentage": this.getDiscountPercentageFromBaseInputLine(baseKortingEntries[i]),
           "tracker": i,
           });
      }
    }

    this.instaDiscountEntries = this.instaDiscountEntries.slice(0, parseInt(this.maxAmountForPost));
  }

  getDateFromDateString(dateString) {
    dateString = dateString + "";
    var dateStringArray = dateString.split("-");
    var month = dateStringArray[0];
    var day = dateStringArray[1];
    return new Date(2023, month, day);
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

  getDiscountPercentageFromBaseInputLine(baseInputLine) {
    return DataDirective.getDiscountPercentageFromBaseInputLine(baseInputLine);
  }

  sortTable() {
      this.instaDiscountEntries.sort(
          firstBy("company")
          .thenBy("tracker", "desc")
      );
  }
}
