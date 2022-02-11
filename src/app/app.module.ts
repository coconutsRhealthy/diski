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
import { MyjewelleryComponent } from './brand-pages/myjewellery/myjewellery.component';
import { SheinComponent } from './brand-pages/shein/shein.component';

import { PathLocationStrategy,  LocationStrategy } from '@angular/common';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskiPageComponent,
    InputComponent,
    DataDirective,
    InstaComponent,
    NakdComponent,
    LoaviesComponent,
    MyjewelleryComponent,
    SheinComponent,
    ArchiveComponent
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
          title: 'NAKD kortingscode: 25% korting in februari 2022'
        }
      },
      {
        path: 'loavies',
        component: LoaviesComponent,
        data: {
          title: 'Loavies kortingscode: 30% korting in februari 2022'
        }
      },
      {
        path: 'myjewellery',
        component: MyjewelleryComponent,
        data: {
          title: 'My Jewellery kortingscode: 25% korting in februari 2022'
        }
      },
      {
        path: 'shein',
        component: SheinComponent,
        data: {
          title: 'Shein kortingscode: 25% korting in februari 2022'
        }
      },
      {
        path: 'archief',
        component: ArchiveComponent,
        data: {
          title: 'Kortingscode archief'
        }
      },
    ]),
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
