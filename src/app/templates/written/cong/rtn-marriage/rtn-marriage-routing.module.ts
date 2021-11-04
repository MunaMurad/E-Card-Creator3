import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnMarriagePage } from './rtn-marriage.page';

const routes: Routes = [
  {
    path: '',
    component: RtnMarriagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnMarriagePageRoutingModule {}
