import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpRamadanPage } from './emp-ramadan.page';

const routes: Routes = [
  {
    path: '',
    component: EmpRamadanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpRamadanPageRoutingModule {}
