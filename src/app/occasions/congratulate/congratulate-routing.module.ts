import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongratulatePage } from './congratulate.page';

const routes: Routes = [
  {
    path: '',
    component: CongratulatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongratulatePageRoutingModule {}
