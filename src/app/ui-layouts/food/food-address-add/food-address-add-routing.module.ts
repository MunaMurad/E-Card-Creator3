import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodAddressAddPage } from './food-address-add.page';

const routes: Routes = [
  {
    path: '',
    component: FoodAddressAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodAddressAddPageRoutingModule {}
