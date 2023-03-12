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
import { CodeDetailPageComponent } from './code-detailpage/code-detailpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskiPageComponent,
    InputComponent,
    DataDirective,
    InstaComponent,
    ArchiveComponent,
    ContactComponent,
    CodeDetailPageComponent
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
        path: 'code-detailpage',
        component: CodeDetailPageComponent,
        data: {
          title: 'CodeDetailPageComponent'
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
