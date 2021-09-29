import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelCategoryPage } from './travel-category.page';

const routes: Routes = [
  {
    path: '',
    component: TravelCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelCategoryPageRoutingModule {}
