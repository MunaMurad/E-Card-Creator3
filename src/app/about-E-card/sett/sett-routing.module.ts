import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettPage } from './sett.page';

const routes: Routes = [
  {
    path: '',
    component: SettPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettPageRoutingModule {}
