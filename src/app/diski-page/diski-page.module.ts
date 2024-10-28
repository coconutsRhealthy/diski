import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiskiPageComponent } from './diski-page.component';
import { DiskiPageRoutingModule } from './diski-page-routing.module';

@NgModule({
  declarations: [DiskiPageComponent],
  imports: [
    CommonModule,
    DiskiPageRoutingModule
  ]
})
export class DiskiPageModule { }
