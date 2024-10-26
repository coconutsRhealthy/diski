import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiskiPageComponent } from './diski-page.component';
import { DiskiPageRoutingModule } from './diski-page-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [DiskiPageComponent],
  imports: [
    CommonModule,
    DiskiPageRoutingModule,
    NgbModule,
    DataTablesModule
  ]
})
export class DiskiPageModule { }
