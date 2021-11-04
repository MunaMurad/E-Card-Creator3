import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnHomePartyPage } from './rtn-home-party.page';

const routes: Routes = [
  {
    path: '',
    component: RtnHomePartyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnHomePartyPageRoutingModule {}
