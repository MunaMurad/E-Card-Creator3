import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingPage } from './wedding.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingPageRoutingModule {}
