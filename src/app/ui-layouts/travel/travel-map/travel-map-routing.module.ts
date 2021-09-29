import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelMapPage } from './travel-map.page';

const routes: Routes = [
  {
    path: '',
    component: TravelMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelMapPageRoutingModule {}
