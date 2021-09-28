import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealSearchPage } from './real-search.page';

const routes: Routes = [
  {
    path: '',
    component: RealSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealSearchPageRoutingModule {}
