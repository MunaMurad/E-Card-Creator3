import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnHennaPage } from './rtn-henna.page';

const routes: Routes = [
  {
    path: '',
    component: RtnHennaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnHennaPageRoutingModule {}
