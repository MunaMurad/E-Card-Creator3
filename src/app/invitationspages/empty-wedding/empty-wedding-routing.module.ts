import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyWeddingPage } from './empty-wedding.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyWeddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyWeddingPageRoutingModule {}
