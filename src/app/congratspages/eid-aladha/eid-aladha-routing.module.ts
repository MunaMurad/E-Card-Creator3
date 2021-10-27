import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EidAladhaPage } from './eid-aladha.page';

const routes: Routes = [
  {
    path: '',
    component: EidAladhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EidAladhaPageRoutingModule {}
