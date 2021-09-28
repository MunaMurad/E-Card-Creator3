import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupThreePage } from './signup-three.page';

const routes: Routes = [
  {
    path: '',
    component: SignupThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupThreePageRoutingModule {}
