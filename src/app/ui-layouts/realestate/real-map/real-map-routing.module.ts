import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealMapPage } from './real-map.page';

const routes: Routes = [
  {
    path: '',
    component: RealMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealMapPageRoutingModule {}
