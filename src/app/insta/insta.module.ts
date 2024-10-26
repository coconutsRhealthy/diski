import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaComponent } from './insta.component';
import { InstaRoutingModule } from './insta-routing.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InstaComponent],
  imports: [
    CommonModule,
    InstaRoutingModule,
    FormsModule
  ]
})
export class InstaModule { }
