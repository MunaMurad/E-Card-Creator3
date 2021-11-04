import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpHennaPage } from './emp-henna.page';

const routes: Routes = [
  {
    path: '',
    component: EmpHennaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpHennaPageRoutingModule {}
