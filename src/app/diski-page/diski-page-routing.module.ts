import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiskiPageComponent } from './diski-page.component';

const routes: Routes = [
  { path: '', component: DiskiPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiskiPageRoutingModule { }
