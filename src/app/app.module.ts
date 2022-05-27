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

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { PrivacyComponent } from './privacy/privacy.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out',
    layout: 'my-custom-layout',
    layouts: {
      "my-custom-layout": '{{messagelink}}'
    },
    elements:{
      messagelink: `
      <span id="cookieconsent:desc" class="cc-message">{{message}}
        <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{privacyPolicyHref}}" target="_blank"
         rel="noopener">{{privacyPolicyLink}}</a>
      </span>
      <div class="cc-compliance cc-highlight">
        <a aria-label="allow cookies" role="button" tabindex="0" class="cc-btn cc-allow"
        style="background-color: rgb(241, 214, 0); color: rgb(0, 0, 0);">Accepteer</a>
      </div>
      `,
    },
    content:{
      message: 'Deze website maakt gebruik van cookies om advertenties te personaliseren. ',

      privacyPolicyLink: 'Meer informatie',
      privacyPolicyHref: '/privacy',

      allow: 'Accepteer',
      deny: 'Weigeren'
    }
};

@NgModule({
  declarations: [
    AppComponent,
    DiskiPageComponent,
    InputComponent,
    DataDirective,
    InstaComponent,
    ArchiveComponent,
    PrivacyComponent
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
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
        path: 'privacy',
        component: PrivacyComponent,
        data: {
          title: 'Privacy'
        }
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]),
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
