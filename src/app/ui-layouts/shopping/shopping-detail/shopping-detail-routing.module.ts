import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingDetailPage } from './shopping-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingDetailPageRoutingModule {}
