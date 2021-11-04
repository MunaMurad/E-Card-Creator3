import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpBabybornPage } from './emp-babyborn.page';

const routes: Routes = [
  {
    path: '',
    component: EmpBabybornPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpBabybornPageRoutingModule {}
