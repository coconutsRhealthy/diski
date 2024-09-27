import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';

import { AnalyticsEventService } from '../data/analytics-event.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './code-detail-modal.component.html',
  styleUrls: ['./../app.component.css']
})
export class CodeDetailModalComponent implements OnInit {
  code: String;
  company: String;
  discountPercentage: String;
  codeDate: String;

  constructor(public activeModal: NgbActiveModal, private clipboardService: ClipboardService, private analyticsEventService: AnalyticsEventService) {}

  ngOnInit(): void {
    this.setCorrectFormatOfCodeDate(this.codeDate);
    this.setCorrectFormatDiscountPercentage(this.discountPercentage);
  }

  copyToClipboard(toCopy) {
    this.clipboardService.copy(toCopy);
  }

  setCorrectFormatOfCodeDate(rawCodeDate) {
    var day = rawCodeDate.split("-")[1];
    var month = rawCodeDate.split("-")[0];

    if(day.charAt(0) === "0") {
      day = day.substring(1);
    }

    switch(month) {
      case '01':
        month = "januari";
        break;
      case '02':
        month = "februari";
        break;
      case '03':
        month = "maart";
        break;
      case '04':
        month = "april";
        break;
      case '05':
        month = "mei";
        break;
      case '06':
        month = "juni";
        break;
      case '07':
        month = "juli";
        break;
      case '08':
        month = "augustus";
        break;
      case '09':
        month = "september";
        break;
      case '10':
        month = "oktober";
        break;
      case '11':
        month = "november";
        break;
      case '12':
        month = "december";
        break;
    }

    this.codeDate = day + " " + month;
  }

  setCorrectFormatDiscountPercentage(rawDiscountPercentage) {
    if(!rawDiscountPercentage.includes("€") && !rawDiscountPercentage.includes("vzk") && !rawDiscountPercentage.includes("gifts")) {
      this.discountPercentage = this.discountPercentage + "%";
    }
  }

  sendEventToGa(eventName, eventLabel) {
    var eventLabelToUse = "zz" + eventLabel.toLowerCase();
    this.analyticsEventService.sendEventToGa(eventName, eventLabelToUse);
  }

}
