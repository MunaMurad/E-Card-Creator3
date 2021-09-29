import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodAddressEditPage } from './food-address-edit.page';

const routes: Routes = [
  {
    path: '',
    component: FoodAddressEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodAddressEditPageRoutingModule {}
