import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnGraduPage } from './rtn-gradu.page';

const routes: Routes = [
  {
    path: '',
    component: RtnGraduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnGraduPageRoutingModule {}
