import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpHomePartyPage } from './emp-home-party.page';

const routes: Routes = [
  {
    path: '',
    component: EmpHomePartyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpHomePartyPageRoutingModule {}
