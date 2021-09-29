import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninTwoPage } from './signin-two.page';

const routes: Routes = [
  {
    path: '',
    component: SigninTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninTwoPageRoutingModule {}
