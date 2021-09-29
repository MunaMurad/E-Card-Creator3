import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCheckoutPage } from './shopping-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCheckoutPageRoutingModule {}
