import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinkelsComponent } from './winkels.component';
import { WinkelsRoutingModule } from './winkels-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [WinkelsComponent],
  imports: [
    CommonModule,
    WinkelsRoutingModule,
    NgbModule
  ]
})
export class WinkelsModule { }
