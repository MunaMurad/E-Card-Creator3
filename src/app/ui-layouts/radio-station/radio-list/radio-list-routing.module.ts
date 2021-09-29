import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioListPage } from './radio-list.page';

const routes: Routes = [
  {
    path: '',
    component: RadioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioListPageRoutingModule {}
