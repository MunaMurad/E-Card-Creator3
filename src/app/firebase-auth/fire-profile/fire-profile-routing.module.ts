import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireProfilePage } from './fire-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FireProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireProfilePageRoutingModule {}
