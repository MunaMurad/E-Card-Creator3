import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodTabsPage } from './food-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: FoodTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodTabsPageRoutingModule {}
