import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingAddressEditPage } from './shopping-address-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingAddressEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingAddressEditPageRoutingModule {}
