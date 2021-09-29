import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealDetailPage } from './real-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RealDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealDetailPageRoutingModule {}
