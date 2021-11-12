import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtnWeddingPage } from './rtn-wedding.page';

const routes: Routes = [
  {
    path: '',
    component: RtnWeddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtnWeddingPageRoutingModule {}
