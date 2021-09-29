import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupOnePage } from './signup-one.page';

const routes: Routes = [
  {
    path: '',
    component: SignupOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupOnePageRoutingModule {}
