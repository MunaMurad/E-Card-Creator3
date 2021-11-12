import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpWeddingPage } from './emp-wedding.page';

const routes: Routes = [
  {
    path: '',
    component: EmpWeddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpWeddingPageRoutingModule {}
