import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealProfilePage } from './real-profile.page';

const routes: Routes = [
  {
    path: '',
    component: RealProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealProfilePageRoutingModule {}
