import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodCategoryPage } from './food-category.page';

const routes: Routes = [
  {
    path: '',
    component: FoodCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCategoryPageRoutingModule {}
