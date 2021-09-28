import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupTwoPage } from './signup-two.page';

const routes: Routes = [
  {
    path: '',
    component: SignupTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupTwoPageRoutingModule {}
