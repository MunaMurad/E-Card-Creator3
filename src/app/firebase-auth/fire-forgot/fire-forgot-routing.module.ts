import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireForgotPage } from './fire-forgot.page';

const routes: Routes = [
  {
    path: '',
    component: FireForgotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireForgotPageRoutingModule {}
