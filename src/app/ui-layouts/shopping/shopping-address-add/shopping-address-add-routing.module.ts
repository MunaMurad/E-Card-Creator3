import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingAddressAddPage } from './shopping-address-add.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingAddressAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingAddressAddPageRoutingModule {}
