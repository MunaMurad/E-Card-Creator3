import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatheringPage } from './gathering.page';

const routes: Routes = [
  {
    path: '',
    component: GatheringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatheringPageRoutingModule {}
