import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFourPage } from './form-four.page';

const routes: Routes = [
  {
    path: '',
    component: FormFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFourPageRoutingModule {}
