import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapDetailPage } from './map-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MapDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapDetailPageRoutingModule {}
