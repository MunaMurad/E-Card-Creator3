import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireSigninPage } from './fire-signin.page';

const routes: Routes = [
  {
    path: '',
    component: FireSigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireSigninPageRoutingModule {}
