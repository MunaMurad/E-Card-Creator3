import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderTransparentPage } from './header-transparent.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderTransparentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderTransparentPageRoutingModule {}
