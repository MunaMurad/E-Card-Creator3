import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodFinishPage } from './food-finish.page';

const routes: Routes = [
  {
    path: '',
    component: FoodFinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodFinishPageRoutingModule {}
