import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealListPage } from './real-list.page';

const routes: Routes = [
  {
    path: '',
    component: RealListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealListPageRoutingModule {}
