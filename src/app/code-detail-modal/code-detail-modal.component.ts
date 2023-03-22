import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './code-detail-modal.component.html'
})
export class CodeDetailModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  code: String;
  company: String;
  discountPercentage: String;
}
