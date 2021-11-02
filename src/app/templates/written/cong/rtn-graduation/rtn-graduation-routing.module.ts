import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnGraduationPage } from './rtn-graduation.page';

const routes: Routes = [
  {
    path: '',
    component: RtnGraduationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnGraduationPageRoutingModule {}
