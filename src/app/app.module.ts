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
import { ContactComponent } from './contact/contact.component';
import { CodeDetailModalComponent } from './code-detail-modal/code-detail-modal.component';
import { ClipboardModule } from 'ngx-clipboard';
import { AffiliateLinkService } from './data/affiliate-link.service';
import { WebshopNameService } from './data/webshop-name.service';
import { CompanySeoTextService } from './data/company-seo-text.service';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { WinkelsComponent } from './winkels/winkels.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { environment } from '../environments/environment';
import { GiftcardsComponent } from './giftcards/giftcards.component';

const routes: Routes = [
    {
      path: '',
      component: DiskiPageComponent
    },
    {
      path: 'archief',
      loadChildren: () => import('./archive/archive.module').then(m => m.ArchiveModule)
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
      path: 'giftcards',
      component: GiftcardsComponent
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
      loadChildren: () => import('./company-codes/company-codes.module').then(m => m.CompanyCodesModule)
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
    ContactComponent,
    CodeDetailModalComponent,
    WinkelsComponent,
    NotFoundComponent,
    GiftcardsComponent
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
