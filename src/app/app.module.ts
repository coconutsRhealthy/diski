import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DataDirective } from './data/data.directive';
import { InstaComponent } from './insta/insta.component';
import { PathLocationStrategy,  LocationStrategy } from '@angular/common';
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

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./diski-page/diski-page.module').then(m => m.DiskiPageModule)
    },
    {
      path: 'archief',
      loadChildren: () => import('./archive/archive.module').then(m => m.ArchiveModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: 'winkels',
      component: WinkelsComponent
    },
    {
      path: 'giftcards',
      loadChildren: () => import('./giftcards/giftcards.module').then(m => m.GiftcardsModule)
    },

]

if(!environment.production) {
    routes.push(
      {path: 'input', loadChildren: () => import('./input-page/input-page.module').then(m => m.InputModule)},
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
    DataDirective,
    InstaComponent,
    CodeDetailModalComponent,
    WinkelsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
