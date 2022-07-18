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
import { NakdComponent } from './brand-pages/nakd/nakd.component';
import { LoaviesComponent } from './brand-pages/loavies/loavies.component';
import { HellofreshComponent } from './brand-pages/hellofresh/hellofresh.component';
import { IdealofswedenComponent } from './brand-pages/idealofsweden/idealofsweden.component';
import { SheinComponent } from './brand-pages/shein/shein.component';

import { PathLocationStrategy,  LocationStrategy } from '@angular/common';
import { ArchiveComponent } from './archive/archive.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskiPageComponent,
    InputComponent,
    DataDirective,
    InstaComponent,
    NakdComponent,
    LoaviesComponent,
    HellofreshComponent,
    IdealofswedenComponent,
    SheinComponent,
    ArchiveComponent,
    ContactComponent
  ],
  imports: [
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
        path: 'nakd',
        component: NakdComponent,
        data: {
          title: 'De nieuwste NAKD kortingscodes'
        }
      },
      {
        path: 'loavies',
        component: LoaviesComponent,
        data: {
          title: 'De nieuwste Loavies kortingscodes'
        }
      },
      {
        path: 'idealofsweden',
        component: IdealofswedenComponent,
        data: {
          title: 'De nieuwste Ideal Of Sweden kortingscodes'
        }
      },
      {
        path: 'hellofresh',
        component: HellofreshComponent,
        data: {
          title: 'De nieuwste Hellofresh kortingscodes'
        }
      },
      {
        path: 'shein',
        component: SheinComponent,
        data: {
          title: 'De nieuwste Shein kortingscodes'
        }
      },
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
        path: '**',
        redirectTo: ''
      },
    ]),
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
