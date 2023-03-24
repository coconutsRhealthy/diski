import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-modal-content',
  templateUrl: './code-detail-modal.component.html'
})
export class CodeDetailModalComponent {
  code: String;
  company: String;
  discountPercentage: String;

  constructor(public activeModal: NgbActiveModal, private clipboardService: ClipboardService) {}

  copyToClipboard(toCopy) {
    this.clipboardService.copy(toCopy);
  }
}
