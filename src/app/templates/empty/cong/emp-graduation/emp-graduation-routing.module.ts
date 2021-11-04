import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpGraduationPage } from './emp-graduation.page';

const routes: Routes = [
  {
    path: '',
    component: EmpGraduationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpGraduationPageRoutingModule {}
