import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingGroupPage } from './shopping-group.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingGroupPageRoutingModule {}
