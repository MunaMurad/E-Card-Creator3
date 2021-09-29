import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninThreePage } from './signin-three.page';

const routes: Routes = [
  {
    path: '',
    component: SigninThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninThreePageRoutingModule {}
