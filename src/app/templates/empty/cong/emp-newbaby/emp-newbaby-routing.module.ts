import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpNewbabyPage } from './emp-newbaby.page';

const routes: Routes = [
  {
    path: '',
    component: EmpNewbabyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpNewbabyPageRoutingModule {}
