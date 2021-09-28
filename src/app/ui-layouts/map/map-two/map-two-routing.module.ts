import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapTwoPage } from './map-two.page';

const routes: Routes = [
  {
    path: '',
    component: MapTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapTwoPageRoutingModule {}
