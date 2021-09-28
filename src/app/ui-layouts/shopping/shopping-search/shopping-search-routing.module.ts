import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingSearchPage } from './shopping-search.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingSearchPageRoutingModule {}
