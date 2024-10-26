import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstaComponent } from './insta.component';

const routes: Routes = [
  { path: '', component: InstaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstaRoutingModule { }
