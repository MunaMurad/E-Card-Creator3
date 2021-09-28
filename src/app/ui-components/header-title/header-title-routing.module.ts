import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderTitlePage } from './header-title.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderTitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderTitlePageRoutingModule {}
