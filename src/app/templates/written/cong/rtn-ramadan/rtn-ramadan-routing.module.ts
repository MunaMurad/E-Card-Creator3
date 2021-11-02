import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnRamadanPage } from './rtn-ramadan.page';

const routes: Routes = [
  {
    path: '',
    component: RtnRamadanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnRamadanPageRoutingModule {}
