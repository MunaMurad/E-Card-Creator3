import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealAgentDetailPage } from './real-agent-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RealAgentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealAgentDetailPageRoutingModule {}
