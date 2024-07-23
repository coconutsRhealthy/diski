import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
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
import { WebshopNameService } from './data/webshop-name.service';
import { CompanySeoTextService } from './data/company-seo-text.service';
import { CompanyCodesComponent } from './company-codes/company-codes.component';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { WinkelsComponent } from './winkels/winkels.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { environment } from '../environments/environment';
import { InfluencerDatabaseComponent } from './influencer-database/influencer-database.component';

const routes: Routes = [
    {
      path: '',
      component: DiskiPageComponent
    },
    {
      path: 'archief',
      component: ArchiveComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'winkels',
      component: WinkelsComponent
    },
    {
      path: 'influencerdatabase',
      component: InfluencerDatabaseComponent
    },

]

if(!environment.production) {
    routes.push(
      {path: 'input', component: InputComponent},
      {path: 'insta', component: InstaComponent},
    );
}

routes.push(
    {
      path: ':company',
      component: CompanyCodesComponent
    },
    {
      path: '**',
      component: NotFoundComponent
    },
);

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
    CompanyCodesComponent,
    WinkelsComponent,
    NotFoundComponent,
    InfluencerDatabaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ClipboardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    AffiliateLinkService,
    WebshopNameService,
    CompanySeoTextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeNl, 'nl');
  }
}
