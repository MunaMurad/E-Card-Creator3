import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealHomePage } from './real-home.page';

const routes: Routes = [
  {
    path: '',
    component: RealHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealHomePageRoutingModule {}
