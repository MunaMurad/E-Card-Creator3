import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpEidAladhaPage } from './emp-eid-aladha.page';

const routes: Routes = [
  {
    path: '',
    component: EmpEidAladhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpEidAladhaPageRoutingModule {}
