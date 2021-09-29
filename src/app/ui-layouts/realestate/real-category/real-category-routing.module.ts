import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealCategoryPage } from './real-category.page';

const routes: Routes = [
  {
    path: '',
    component: RealCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealCategoryPageRoutingModule {}
