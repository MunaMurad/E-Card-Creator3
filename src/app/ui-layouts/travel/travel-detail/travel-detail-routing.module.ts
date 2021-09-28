import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelDetailPage } from './travel-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TravelDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelDetailPageRoutingModule {}
