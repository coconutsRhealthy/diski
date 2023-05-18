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
import { InstaComponent } from './insta/insta.component';
import { PathLocationStrategy,  LocationStrategy } from '@angular/common';
import { ArchiveComponent } from './archive/archive.component';
import { ContactComponent } from './contact/contact.component';
import { CodeDetailModalComponent } from './code-detail-modal/code-detail-modal.component';
import { ClipboardModule } from 'ngx-clipboard';
import { AffiliateLinkService } from './data/affiliate-link.service';
import { CompanyCodesComponent } from './company-codes/company-codes.component';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

@NgModule({
  declarations: [
    AppComponent,
    DiskiPageComponent,
    InputComponent,
    DataDirective,
    InstaComponent,
    ArchiveComponent,
    ContactComponent,
    CodeDetailModalComponent,
    CompanyCodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ClipboardModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DiskiPageComponent,
        data: {
          title: 'Diski | Online shoppen met kortingscodes'
        }
      },
      {path: 'input', component: InputComponent},
      {path: 'insta', component: InstaComponent},
      {
        path: 'archief',
        component: ArchiveComponent,
        data: {
          title: 'Kortingscode archief'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact'
        }
      },
      {
        path: ':company',
        component: CompanyCodesComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]),
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    AffiliateLinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeNl, 'nl');
  }
}
