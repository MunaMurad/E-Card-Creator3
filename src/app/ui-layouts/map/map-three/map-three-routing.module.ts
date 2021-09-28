import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapThreePage } from './map-three.page';

const routes: Routes = [
  {
    path: '',
    component: MapThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapThreePageRoutingModule {}
