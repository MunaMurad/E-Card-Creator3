import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelTagPage } from './travel-tag.page';

const routes: Routes = [
  {
    path: '',
    component: TravelTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelTagPageRoutingModule {}
