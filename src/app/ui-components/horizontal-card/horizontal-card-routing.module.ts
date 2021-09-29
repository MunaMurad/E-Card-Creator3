import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorizontalCardPage } from './horizontal-card.page';

const routes: Routes = [
  {
    path: '',
    component: HorizontalCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorizontalCardPageRoutingModule {}
