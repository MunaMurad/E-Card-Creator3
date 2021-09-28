import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodCartPage } from './food-cart.page';

const routes: Routes = [
  {
    path: '',
    component: FoodCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCartPageRoutingModule {}
