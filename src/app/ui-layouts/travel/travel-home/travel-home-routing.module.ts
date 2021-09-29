import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelHomePage } from './travel-home.page';

const routes: Routes = [
  {
    path: '',
    component: TravelHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelHomePageRoutingModule {}
