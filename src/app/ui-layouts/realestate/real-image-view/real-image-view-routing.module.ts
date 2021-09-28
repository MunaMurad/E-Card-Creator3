import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealImageViewPage } from './real-image-view.page';

const routes: Routes = [
  {
    path: '',
    component: RealImageViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealImageViewPageRoutingModule {}
