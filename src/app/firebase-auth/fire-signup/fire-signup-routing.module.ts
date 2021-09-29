import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireSignupPage } from './fire-signup.page';

const routes: Routes = [
  {
    path: '',
    component: FireSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireSignupPageRoutingModule {}
