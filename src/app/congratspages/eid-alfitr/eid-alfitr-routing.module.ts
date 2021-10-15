import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EidAlfitrPage } from './eid-alfitr.page';

const routes: Routes = [
  {
    path: '',
    component: EidAlfitrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EidAlfitrPageRoutingModule {}
