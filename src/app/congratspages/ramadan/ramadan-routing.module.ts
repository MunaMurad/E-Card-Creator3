import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamadanPage } from './ramadan.page';

const routes: Routes = [
  {
    path: '',
    component: RamadanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamadanPageRoutingModule {}
