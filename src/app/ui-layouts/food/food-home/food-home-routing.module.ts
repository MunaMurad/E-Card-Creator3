import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodHomePage } from './food-home.page';

const routes: Routes = [
  {
    path: '',
    component: FoodHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodHomePageRoutingModule {}
