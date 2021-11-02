import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnEidAladhaPage } from './rtn-eid-aladha.page';

const routes: Routes = [
  {
    path: '',
    component: RtnEidAladhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnEidAladhaPageRoutingModule {}
