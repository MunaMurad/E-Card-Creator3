import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingFinishPage } from './shopping-finish.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingFinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingFinishPageRoutingModule {}
