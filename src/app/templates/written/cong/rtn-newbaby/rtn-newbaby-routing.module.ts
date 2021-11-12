import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnNewbabyPage } from './rtn-newbaby.page';

const routes: Routes = [
  {
    path: '',
    component: RtnNewbabyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnNewbabyPageRoutingModule {}
