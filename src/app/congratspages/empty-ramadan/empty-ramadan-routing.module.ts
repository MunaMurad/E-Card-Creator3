import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyRamadanPage } from './empty-ramadan.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyRamadanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyRamadanPageRoutingModule {}
