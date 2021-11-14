import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpEngagementPage } from './emp-engagement.page';

const routes: Routes = [
  {
    path: '',
    component: EmpEngagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpEngagementPageRoutingModule {}
