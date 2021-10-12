import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngagementPage } from './engagement.page';

const routes: Routes = [
  {
    path: '',
    component: EngagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngagementPageRoutingModule {}
