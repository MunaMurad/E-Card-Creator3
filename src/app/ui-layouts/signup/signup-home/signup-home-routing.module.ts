import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupHomePage } from './signup-home.page';

const routes: Routes = [
  {
    path: '',
    component: SignupHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupHomePageRoutingModule {}
