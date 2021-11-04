import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnEidAlfitrPage } from './rtn-eid-alfitr.page';

const routes: Routes = [
  {
    path: '',
    component: RtnEidAlfitrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnEidAlfitrPageRoutingModule {}
