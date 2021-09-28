import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasonryPage } from './masonry.page';

const routes: Routes = [
  {
    path: '',
    component: MasonryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasonryPageRoutingModule {}
