import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpMarriagePage } from './emp-marriage.page';

const routes: Routes = [
  {
    path: '',
    component: EmpMarriagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpMarriagePageRoutingModule {}
