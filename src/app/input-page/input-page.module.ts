import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input-page.component';
import { InputRoutingModule } from './input-page-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputModule { }
