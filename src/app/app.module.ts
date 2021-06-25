import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { AppComponent } from './app.component';
import { DiskiPageComponent } from './diski-page/diski-page.component';
import { InputComponent } from './input-page/input-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { DataDirective } from './data/data.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiskiPageComponent,
    InputComponent,
    DataDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: DiskiPageComponent},
      {path: 'input', component: InputComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
