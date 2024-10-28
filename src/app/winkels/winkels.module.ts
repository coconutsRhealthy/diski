import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinkelsComponent } from './winkels.component';
import { WinkelsRoutingModule } from './winkels-routing.module';

@NgModule({
  declarations: [WinkelsComponent],
  imports: [
    CommonModule,
    WinkelsRoutingModule
  ]
})
export class WinkelsModule { }
