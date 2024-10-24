import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './archive.component';
import { ArchiveRoutingModule } from './archive-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [ArchiveComponent],
  imports: [
    CommonModule,
    ArchiveRoutingModule,
    NgbModule,
    DataTablesModule
  ]
})
export class ArchiveModule { }
