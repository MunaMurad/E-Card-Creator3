import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelImageViewPage } from './travel-image-view.page';

const routes: Routes = [
  {
    path: '',
    component: TravelImageViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelImageViewPageRoutingModule {}
