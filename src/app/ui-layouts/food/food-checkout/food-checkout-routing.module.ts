import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodCheckoutPage } from './food-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: FoodCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCheckoutPageRoutingModule {}
