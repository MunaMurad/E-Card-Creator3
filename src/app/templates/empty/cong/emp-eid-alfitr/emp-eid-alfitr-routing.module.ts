import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpEidAlfitrPage } from './emp-eid-alfitr.page';

const routes: Routes = [
  {
    path: '',
    component: EmpEidAlfitrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpEidAlfitrPageRoutingModule {}
