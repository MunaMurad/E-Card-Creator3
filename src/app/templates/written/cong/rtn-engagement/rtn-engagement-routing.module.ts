import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnEngagementPage } from './rtn-engagement.page';

const routes: Routes = [
  {
    path: '',
    component: RtnEngagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnEngagementPageRoutingModule {}
