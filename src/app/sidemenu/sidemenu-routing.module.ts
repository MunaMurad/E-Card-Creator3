import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [

      //***************************************//
      //********** Food delivery app **********//
      //***************************************//

      {
        path: 'food',
        loadChildren: () => import('../ui-layouts/food/food-tabs/food-tabs.module').then( m => m.FoodTabsPageModule)
      },
      {
        path: 'food-category',
        loadChildren: () => import('../ui-layouts/food/food-category/food-category.module').then( m => m.FoodCategoryPageModule)
      },
      {
        path: 'food-list',
        loadChildren: () => import('../ui-layouts/food/food-list/food-list.module').then( m => m.FoodListPageModule)
      },
      {
        path: 'food-detail',
        loadChildren: () => import('../ui-layouts/food/food-detail/food-detail.module').then( m => m.FoodDetailPageModule)
      },
      {
        path: 'food-cart',
        loadChildren: () => import('../ui-layouts/food/food-cart/food-cart.module').then( m => m.FoodCartPageModule)
      },



    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule {}
