import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpGraduPage } from './emp-gradu.page';

const routes: Routes = [
  {
    path: '',
    component: EmpGraduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpGraduPageRoutingModule {}
