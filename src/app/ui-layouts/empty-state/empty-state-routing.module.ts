import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyStatePage } from './empty-state.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyStatePageRoutingModule {}
