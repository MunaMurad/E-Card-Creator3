import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormHomePage } from './form-home.page';

const routes: Routes = [
  {
    path: '',
    component: FormHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormHomePageRoutingModule {}
