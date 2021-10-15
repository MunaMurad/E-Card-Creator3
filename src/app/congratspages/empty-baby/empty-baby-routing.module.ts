import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyBabyPage } from './empty-baby.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyBabyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyBabyPageRoutingModule {}
