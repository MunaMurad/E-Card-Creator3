import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapOnePage } from './map-one.page';

const routes: Routes = [
  {
    path: '',
    component: MapOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapOnePageRoutingModule {}
