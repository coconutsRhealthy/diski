import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftcardsComponent } from './giftcards.component';
import { GiftcardsRoutingModule } from './giftcards-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [GiftcardsComponent],
  imports: [
    CommonModule,
    GiftcardsRoutingModule,
    NgbModule
  ]
})
export class GiftcardsModule { }
